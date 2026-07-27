/* =========================================================================
   あおぞら予ろシク — App shell（単一システム / 切替なし）
   管理者（aozora）と 予約者＝運搬業者（hauler）の2ロール。ログインが別なので
   システム切替UIは持たない。各画面HTMLは中身だけを持つ。
   ========================================================================= */
(function () {
  "use strict";
  const I = window.ICONS;

  const APPS = {
    aozora: {
      name: "あおぞら予ろシク",
      sub: "搬入予約管理（施設・管理者）",
      groups: [
        { label: "ダッシュボード", items: [
          { id: "dashboard", label: "ダッシュボード", href: "aozora-dashboard.html", icon: "chartbar" },
        ]},
        // 受入要望 #1：予約管理を「持込」と「回収」に分ける
        { label: "予約管理（持込）", items: [
          { id: "home",     label: "予約確定一覧", href: "aozora-home.html?type=carry",  icon: "check" },
          { id: "apply",    label: "申請一覧",     href: "aozora-apply.html?type=carry", icon: "inbox", badge: 75, badgeType: "warn" },
          { id: "cancel",   label: "取消申請一覧", href: "aozora-cancel.html",   icon: "ban",   badge: 10, badgeType: "quiet" },
          { id: "regular",  label: "定期予約",     href: "aozora-regular.html",  icon: "repeat" },
        ]},
        { label: "予約管理（回収）", items: [
          { id: "khome",    label: "回収予約一覧", href: "aozora-home.html?type=collect",  icon: "check" },
          { id: "kapply",   label: "回収申請一覧", href: "aozora-apply.html?type=collect", icon: "inbox", badge: 2, badgeType: "warn" },
          { id: "kadd",     label: "回収申込登録", href: "aozora-collect-add.html", icon: "plus" },
        ]},
        { label: "予定・連絡", items: [
          { id: "calendar", label: "カレンダー",   href: "aozora-calendar.html", icon: "calendar" },
          { id: "chat",     label: "チャット",     href: "aozora-chat.html",     icon: "chat" },
        ]},
        { label: "当日業務", items: [
          { id: "reception", label: "受付・計量", href: "aozora-reception.html", icon: "scale" },
          { id: "add",       label: "搬入予約登録", href: "aozora-add.html", icon: "plus" },
        ]},
        { label: "基本情報（マスター）", items: [
          { id: "factory",  label: "工場",          href: "aozora-factory.html",  icon: "factory" },
          { id: "item",     label: "品目",          href: "aozora-item.html",     icon: "grid" },
          { id: "limits",   label: "制限項目",      href: "aozora-limits.html",   icon: "scale" },
          { id: "user",     label: "ユーザー",      href: "aozora-user.html",     icon: "users" },
          { id: "project",  label: "会社（予約者）", href: "aozora-project.html",  icon: "home" },
          { id: "vehicle",  label: "車種",          href: "aozora-vehicle.html",  icon: "truck" },
        ]},
        { label: "メール配信", items: [
          { id: "mail",     label: "メール一斉配信", href: "aozora-mail.html",   icon: "send" },
          { id: "group",    label: "メールグループ", href: "aozora-group.html",  icon: "inbox" },
        ]},
        { label: "設定", items: [
          { id: "settings", label: "設定",     href: "aozora-settings.html", icon: "gear" },
        ]},
      ],
    },
    hauler: {
      name: "運搬業者ポータル",
      sub: "搬入予約の申請（運搬業者）",
      groups: [
        { label: "予約", items: [
          { id: "hhome", label: "予約カレンダー", href: "hauler-home.html", icon: "calendar" },
          { id: "hbook", label: "マイ予約",       href: "hauler-book.html", icon: "check" },
          { id: "hreq",  label: "搬入予約を申請", href: "hauler-add.html",  icon: "plus" },
        ]},
        { label: "アカウント", items: [
          { id: "haccount", label: "会社情報・設定", href: "hauler-account.html", icon: "gear" },
        ]},
      ],
    },
  };

  function el(html) { const t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstElementChild; }

  // 現在地のキー（ファイル名＋予約種別）。?type=carry / ?type=collect で同じ画面を出し分けるため（受入要望 #1）
  function navKey(href) {
    const [file, query] = String(href).split("?");
    const t = query ? (new URLSearchParams(query).get("type") || "") : "";
    return (file || "index.html") + "|" + t;
  }
  const HERE = navKey((location.pathname.split("/").pop() || "index.html") + location.search);
  window.RESV_TYPE = new URLSearchParams(location.search).get("type") || "carry";

  function buildSidebar(appKey, screen) {
    const app = APPS[appKey];
    // href が完全一致する項目があればそれを優先。無ければ従来どおり data-screen の id で判定（編集画面など）
    const exact = app.groups.some(g => g.items.some(it => navKey(it.href) === HERE));
    const groups = app.groups.map(g => `
      <div class="nav-group-label">${g.label}</div>
      ${g.items.map(it => {
        const active = (exact ? navKey(it.href) === HERE : it.id === screen) ? " is-active" : "";
        let badgeVal = it.badge, quiet = it.badgeType === "quiet";
        if (it.id === "chat" && window.DATA?.chatThreads) { badgeVal = window.DATA.chatThreads.reduce((a, t) => a + (t.unread || 0), 0) || null; }
        const badge = badgeVal != null
          ? `<span class="nav-badge${quiet ? " is-quiet" : ""}">${badgeVal}</span>` : "";
        return `<a class="nav-item${active}" href="${it.href}">
          <span class="nav-ico">${I[it.icon] || ""}</span>
          <span class="nav-label">${it.label}</span>${badge}</a>`;
      }).join("")}
    `).join("");

    const homeHref = app.groups[0].items[0].href;
    return el(`
      <aside class="sidebar">
        <a class="brand" href="${homeHref}" style="text-decoration:none">
          <div class="brand-mark">あ</div>
          <div><div class="brand-name">${app.name}</div><div class="brand-sub">${app.sub}</div></div>
        </a>
        <nav class="nav" aria-label="メインナビゲーション">${groups}</nav>
        <div class="side-foot"><b>あおぞら予ろシク</b><br>v3.0 リデザイン提案 — エクオ株式会社</div>
      </aside>`);
  }

  function buildTopbar(layout, appKey) {
    const app = APPS[appKey];
    const role = layout.dataset.role || "管理者";
    const company = layout.dataset.company || "株式会社あおぞら";
    const title = layout.dataset.title || "";
    const date = layout.dataset.date || "2026-06-24 (水)";
    const initial = company.replace(/^(株式会社|有限会社)/, "").charAt(0) || "あ";
    return el(`
      <header class="topbar">
        <div><div class="tb-crumb">${app.name}</div><div class="tb-title">${title}</div></div>
        <div class="tb-spacer"></div>
        <div class="tb-date">${date}</div>
        <button class="icon-btn" id="adminBell" aria-label="通知" style="position:relative">${I.bell}<span id="adminBellBadge" style="position:absolute;top:-5px;right:-5px;min-width:17px;height:17px;border-radius:9px;background:#cf4040;color:#fff;font-size:10px;font-weight:800;display:none;place-items:center;padding:0 4px">0</span></button>
        <div class="role-chip"><span class="avatar">${initial}</span>${company}・${role}</div>
      </header>`);
  }

  function ensureDrawer() {
    if (document.getElementById("eqScrim")) return;
    const scrim = el(`<div class="scrim" id="eqScrim"></div>`);
    const drawer = el(`<aside class="drawer" id="eqDrawer" role="dialog" aria-modal="true" aria-label="詳細"></aside>`);
    document.body.append(scrim, drawer);
    scrim.addEventListener("click", closeDrawer);
    document.addEventListener("keydown", e => { if (e.key === "Escape") closeDrawer(); });
  }
  function openDrawer(html) {
    ensureDrawer();
    document.getElementById("eqDrawer").innerHTML = html;
    document.getElementById("eqDrawer").classList.add("open");
    document.getElementById("eqScrim").classList.add("open");
    const closer = document.querySelector("#eqDrawer [data-close]");
    if (closer) closer.addEventListener("click", closeDrawer);
  }
  function closeDrawer() {
    const d = document.getElementById("eqDrawer"), s = document.getElementById("eqScrim");
    if (d) d.classList.remove("open"); if (s) s.classList.remove("open");
  }
  window.openDrawer = openDrawer;
  window.closeDrawer = closeDrawer;

  let toastTimer;
  window.toast = function (msg, kind) {
    let t = document.getElementById("eqToast");
    if (!t) {
      t = el(`<div id="eqToast" role="status" aria-live="polite"></div>`);
      Object.assign(t.style, {
        position: "fixed", left: "50%", bottom: "28px", transform: "translateX(-50%) translateY(12px)",
        background: "#14231f", color: "#fff", padding: "11px 18px", borderRadius: "10px",
        font: "600 13px/1.4 var(--font)", boxShadow: "0 12px 40px rgba(10,32,28,.32)", zIndex: "80",
        opacity: "0", transition: "opacity .2s ease, transform .2s ease", display: "flex", gap: "9px", alignItems: "center",
      });
      document.body.appendChild(t);
    }
    const c = kind === "ok" ? "#2bb89a" : kind === "bad" ? "#e57373" : "#9fb4ab";
    t.innerHTML = `<span style="width:8px;height:8px;border-radius:50%;background:${c}"></span>${msg}`;
    requestAnimationFrame(() => { t.style.opacity = "1"; t.style.transform = "translateX(-50%) translateY(0)"; });
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { t.style.opacity = "0"; t.style.transform = "translateX(-50%) translateY(12px)"; }, 2600);
  };

  // Web Push サーバーへ送信（管理者の操作 → 既定では予約者(hauler)端末へ）
  window.pushSend = function (title, body, url, to) {
    if (!window.PUSH_API) return;
    fetch(window.PUSH_API + "/api/send", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ title, body, url, to: to || "hauler" }) }).catch(() => {});
  };

  // 管理者PCをプッシュ購読として登録（role=admin）
  async function subscribeRole(role) {
    if (!window.PUSH_API || !("serviceWorker" in navigator) || !("PushManager" in window)) return false;
    try {
      const reg = await navigator.serviceWorker.ready;
      const { publicKey } = await (await fetch(window.PUSH_API + "/api/vapidPublicKey")).json();
      const pad = "=".repeat((4 - (publicKey.length % 4)) % 4);
      const base = (publicKey + pad).replace(/-/g, "+").replace(/_/g, "/");
      const rawd = atob(base), arr = new Uint8Array(rawd.length);
      for (let i = 0; i < rawd.length; i++) arr[i] = rawd.charCodeAt(i);
      let sub = await reg.pushManager.getSubscription();
      if (!sub) sub = await reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: arr });
      const res = await fetch(window.PUSH_API + "/api/subscribe?role=" + role, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(sub) });
      return res.ok;
    } catch (e) { console.warn("subscribeRole failed", e); return false; }
  }
  window.subscribeAdminPush = () => subscribeRole("admin");

  // 受付チャイム（新着時に鳴らす。Web Audioで生成・音声ファイル不要）
  let _ac;
  function chime() {
    try {
      _ac = _ac || new (window.AudioContext || window.webkitAudioContext)();
      if (_ac.state === "suspended") _ac.resume();
      const now = _ac.currentTime;
      [[880, 0], [1320, 0.13]].forEach(([f, t]) => {
        const o = _ac.createOscillator(), g = _ac.createGain();
        o.type = "sine"; o.frequency.value = f;
        g.gain.setValueAtTime(0.0001, now + t);
        g.gain.exponentialRampToValueAtTime(0.3, now + t + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, now + t + 0.38);
        o.connect(g); g.connect(_ac.destination);
        o.start(now + t); o.stop(now + t + 0.42);
      });
    } catch (_) {}
  }
  window.playChime = chime;
  // 自動再生制限の解除（最初の操作時にAudioContextを起こす）
  document.addEventListener("pointerdown", function unlock() {
    try { _ac = _ac || new (window.AudioContext || window.webkitAudioContext)(); _ac.resume(); } catch (_) {}
    document.removeEventListener("pointerdown", unlock);
  }, { once: true });

  // Service Worker からのプッシュ着信（別端末→このPCの開いた管理画面）→ チャイム＋通知センター
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.addEventListener("message", (e) => {
      if (e.data && e.data.type === "push") {
        chime();
        const p = e.data.payload || {};
        if (window.adminNotify) { /* 二重通知回避のため通知センターのみ */ }
        if (window.DATA?.notifs) {
          window.DATA.notifs.unshift({ id: "n" + Date.now(), type: "request", icon: "info", title: p.title || "新着", body: p.body || "", at: "たった今", unread: true });
          document.dispatchEvent(new CustomEvent("admin-notif-refresh"));
        }
      }
    });
  }

  const hasN = () => "Notification" in window;
  const pushState = () => (hasN() ? Notification.permission : "unsupported");

  // 管理者向け：アプリ内通知＋デスクトップ通知を発火
  window.adminNotify = async function (title, body, url, type) {
    window.DATA.notifs.unshift({ id: "n" + Date.now(), type: type || "notice",
      icon: ({ approved: "check", request: "info", chat: "chat", notice: "bell" })[type] || "bell",
      title, body, at: "たった今", unread: true });
    document.dispatchEvent(new CustomEvent("admin-notif-refresh"));
    try {
      if ("serviceWorker" in navigator && hasN() && Notification.permission === "granted") {
        const reg = await navigator.serviceWorker.ready;
        reg.showNotification(title, { body, icon: "assets/icon-192.png", badge: "assets/icon-192.png", data: url || "aozora-apply.html" });
      } else if (hasN() && Notification.permission === "granted") {
        new Notification(title, { body, icon: "assets/icon-192.png" });
      }
    } catch (_) {}
  };

  function wireAdminNotif() {
    const bell = document.getElementById("adminBell");
    if (!bell || !window.DATA?.notifs) return;
    const COLOR = { approved: "#1c9b57", request: "#bf7414", chat: "#0d7a64", notice: "#5d6f7a" };
    const STP = { granted: ["pill-ok", "オン"], denied: ["pill-bad", "ブロック中"], default: ["pill-warn", "未設定"], unsupported: ["pill-neutral", "未対応"] };
    const panel = el(`<div id="adminNotifPanel" style="position:fixed;top:58px;right:18px;width:372px;max-height:74vh;overflow-y:auto;background:#fff;border:1px solid var(--line);border-radius:14px;box-shadow:var(--shadow-pop);z-index:70;display:none">
      <div style="display:flex;align-items:center;gap:10px;padding:14px 16px;border-bottom:1px solid var(--line)"><b style="flex:1">通知</b><button class="btn btn-ghost btn-sm" id="adminMarkAll">すべて既読</button></div>
      <div style="display:flex;align-items:center;gap:8px;padding:10px 16px;border-bottom:1px solid var(--line);background:var(--surface-2)">
        <span class="td-sub">デスクトップ通知</span><span id="adminPushState" class="pill pill-neutral" style="font-size:11px"><span class="dot"></span>—</span>
        <span style="flex:1"></span>
        <button class="btn btn-primary btn-sm" id="adminEnablePush">オンにする</button>
        <button class="btn btn-sm" id="adminTestPush">新着をテスト</button>
      </div>
      <div id="adminNotifList" style="padding:6px"></div></div>`);
    document.body.appendChild(panel);

    function refresh() {
      const u = window.DATA.notifs.filter(n => n.unread).length;
      const b = document.getElementById("adminBellBadge");
      b.textContent = u; b.style.display = u ? "grid" : "none";
      try { if (u) navigator.setAppBadge?.(u); else navigator.clearAppBadge?.(); } catch (_) {}
      const [cls, label] = STP[pushState()] || STP.default;
      const ps = document.getElementById("adminPushState"); ps.className = "pill " + cls; ps.innerHTML = `<span class="dot"></span>${label}`;
      document.getElementById("adminEnablePush").style.display = pushState() === "granted" ? "none" : "inline-flex";
      document.getElementById("adminNotifList").innerHTML = window.DATA.notifs.map(n => `
        <div style="display:flex;gap:11px;padding:11px;border-radius:10px;${n.unread ? "background:var(--brand-soft)" : ""}">
          <div style="width:34px;height:34px;border-radius:9px;flex:none;display:grid;place-items:center;color:#fff;background:${COLOR[n.type] || "#5d6f7a"}"><span style="width:17px;height:17px;display:inline-flex">${I[n.icon] || I.bell}</span></div>
          <div style="flex:1;min-width:0"><div style="font-weight:700;font-size:13px">${n.title}</div><div style="font-size:12.5px;color:var(--ink-2)">${n.body}</div><div style="font-size:11px;color:var(--muted);margin-top:2px">${n.at}</div></div>
        </div>`).join("");
    }
    document.addEventListener("admin-notif-refresh", refresh);
    bell.addEventListener("click", (e) => { e.stopPropagation(); panel.style.display = panel.style.display === "none" ? "block" : "none"; });
    document.addEventListener("click", (e) => { if (!panel.contains(e.target) && !bell.contains(e.target)) panel.style.display = "none"; });
    document.getElementById("adminMarkAll").addEventListener("click", () => { window.DATA.notifs.forEach(n => n.unread = false); refresh(); toast("すべて既読にしました", "ok"); });
    document.getElementById("adminEnablePush").addEventListener("click", async () => {
      if (!hasN()) { toast("この環境は通知に未対応です", "bad"); return; }
      const p = await Notification.requestPermission(); refresh();
      if (p === "granted") {
        const ok = await window.subscribeAdminPush();
        toast(ok ? "デスクトップ通知をオンにしました（このPCを登録）" : "通知はONですがPC登録に失敗しました", ok ? "ok" : "bad");
        window.adminNotify("通知をオンにしました", "新着の申請・取消・メッセージをデスクトップにお知らせします。", "aozora-apply.html", "approved");
      }
      else toast(p === "denied" ? "通知がブロックされています（ブラウザ設定から許可してください）" : "通知は許可されませんでした", "bad");
    });
    document.getElementById("adminTestPush").addEventListener("click", () => {
      if (pushState() !== "granted") { toast("先に通知をオンにしてください", "bad"); return; }
      window.adminNotify("新しい搬入申請が届きました", "サンプル建材株式会社／6/27 AM・繊維くず・大型アームロール ×1台", "aozora-apply.html", "request");
      toast("新着申請の通知を送りました", "ok");
    });
    refresh();
  }

  function installPwaHead() {
    const head = document.head;
    if (!document.querySelector('link[rel="manifest"]')) {
      const m = document.createElement("link"); m.rel = "manifest"; m.href = "manifest-admin.webmanifest"; head.appendChild(m);
    }
    if (!document.querySelector('meta[name="theme-color"]')) {
      const t = document.createElement("meta"); t.name = "theme-color"; t.content = "#0c2722"; head.appendChild(t);
    }
    if (!document.querySelector('link[rel="apple-touch-icon"]')) {
      const a = document.createElement("link"); a.rel = "apple-touch-icon"; a.href = "assets/icon-192.png"; head.appendChild(a);
    }
    if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(() => {});
  }

  document.addEventListener("DOMContentLoaded", () => {
    installPwaHead(); // 管理コンソールをデスクトップPWA化（全管理画面に適用）
    const layout = document.querySelector(".layout");
    if (!layout) return;
    const appKey = layout.dataset.app || "aozora";
    const screen = layout.dataset.screen || "";
    layout.prepend(buildSidebar(appKey, screen));
    const main = layout.querySelector(".main");
    if (main) main.prepend(buildTopbar(layout, appKey));
    wireAdminNotif();

    // 予約者アプリからの着信（同一オリジン他タブ）
    if (window.BUS) {
      BUS.on("apply", (p) => {
        if (window.DATA?.applyQueue) DATA.applyQueue.unshift({ id: "a" + Date.now(), date: p.date, ampm: p.ampm,
          carrier: p.carrier, emitter: p.emitter || "—", site: p.site || "—", waste: p.waste || [], tatami: p.tatami || null,
          car: p.car, units: p.units, note: p.note || "", by: p.by || p.carrier, at: "たった今", status: "new" });
        window.adminNotify?.("新しい搬入申請が届きました", `${p.carrier}／${(p.date || "").slice(5)} ${p.ampm}・${(p.waste || []).join("・")}・${p.car}×${p.units}台`, "aozora-apply.html", "request");
        chime();
        document.dispatchEvent(new CustomEvent("apply-incoming", { detail: p }));
      });
      BUS.on("chat-carrier", (p) => { window.adminNotify?.("あおぞら事務局あてメッセージ", p.text, "aozora-chat.html", "chat"); chime(); });
    }
  });
})();
