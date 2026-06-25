/* =========================================================================
   運搬業者ポータル — PWA シェル & 通知
   data.js の後に読み込む。各ページは <div class="pwa" data-screen data-title>…</div>
   を持ち、ここでアプリバー / 下部タブ / FAB / 通知センターを注入する。
   ========================================================================= */
(function () {
  "use strict";
  const I = window.ICONS;
  const el = (h) => { const t = document.createElement("template"); t.innerHTML = h.trim(); return t.content.firstElementChild; };

  const TABS = [
    { id: "home",    label: "カレンダー", icon: "calendar", href: "hauler-home.html" },
    { id: "book",    label: "マイ予約",   icon: "check",    href: "hauler-book.html" },
    { id: "chat",    label: "チャット",   icon: "chat",     href: "hauler-chat.html" },
    { id: "account", label: "アカウント", icon: "user",     href: "hauler-account.html" },
  ];

  const chatUnread = () => (window.DATA?.chatThreads || []).reduce((a, t) => a + (t.unread || 0), 0);
  const notifUnread = () => (window.DATA?.notifs || []).filter((n) => n.unread).length;

  function refreshBadges() {
    const u = notifUnread();
    const b = document.getElementById("abBadge");
    if (b) { b.textContent = u; b.style.display = u ? "grid" : "none"; }
    try { if (u) navigator.setAppBadge?.(u); else navigator.clearAppBadge?.(); } catch (_) {}
  }

  function buildShell(pwa) {
    const screen = pwa.dataset.screen || "home";
    const title = pwa.dataset.title || "";
    const sub = pwa.dataset.sub || "";
    const back = pwa.dataset.back;
    const showFab = pwa.dataset.fab !== "false" && screen !== "chat" && screen !== "add";

    const appbar = el(`
      <header class="appbar">
        ${back ? `<a class="ab-back" href="${back}" aria-label="戻る">${I.arrowL}</a>` : ""}
        <div class="ab-titles"><div class="ab-title">${title}</div>${sub ? `<div class="ab-sub">${sub}</div>` : ""}</div>
        <button class="ab-btn" id="abBell" aria-label="通知">${I.bell}<span class="ab-badge" id="abBadge" style="display:none">0</span></button>
      </header>`);
    pwa.prepend(appbar);

    const hideTab = screen === "add" || screen === "chat";
    if (!hideTab) {
      const cu = chatUnread();
      const tabbar = el(`
        <nav class="tabbar" aria-label="下部ナビ">
          ${TABS.map((t) => `<a class="tab-item${t.id === screen ? " is-active" : ""}" href="${t.href}">
            <span class="ti-ico">${I[t.icon]}</span>${t.label}
            ${t.id === "chat" && cu ? `<span class="ti-badge">${cu}</span>` : ""}</a>`).join("")}
        </nav>`);
      pwa.appendChild(tabbar);
    }

    if (showFab) {
      pwa.appendChild(el(`<a class="fab" href="hauler-add.html">${I.plus}<span>申請</span></a>`));
    }

    // 通知センター
    const scrim = el(`<div class="notif-scrim" id="notifScrim"></div>`);
    const sheet = el(`
      <aside class="notif-sheet" id="notifSheet" role="dialog" aria-label="通知">
        <div class="notif-head"><h3>通知</h3>
          <button class="btn btn-ghost btn-sm" id="markAll">すべて既読</button>
          <button class="ab-btn" id="notifClose" style="background:var(--surface-3);color:var(--ink-2)" aria-label="閉じる">${I.x}</button></div>
        <div class="notif-list" id="notifList"></div>
      </aside>`);
    document.body.append(scrim, sheet);

    const NIC = { approved: "ni-approved", request: "ni-request", chat: "ni-chat", notice: "ni-notice" };
    function renderNotifs() {
      document.getElementById("notifList").innerHTML = (window.DATA.notifs || []).map((n) => `
        <div class="notif-item ${n.unread ? "unread" : ""}">
          <div class="notif-ico ${NIC[n.type] || "ni-notice"}">${I[n.icon] || I.bell}</div>
          <div class="nm"><div class="t">${n.title}</div><div class="b">${n.body}</div><div class="a">${n.at}</div></div>
        </div>`).join("") || `<p class="hint" style="padding:24px;text-align:center">通知はありません。</p>`;
    }
    function openSheet() { renderNotifs(); scrim.classList.add("open"); sheet.classList.add("open"); }
    function closeSheet() { scrim.classList.remove("open"); sheet.classList.remove("open"); }
    document.getElementById("abBell").addEventListener("click", openSheet);
    document.getElementById("notifClose").addEventListener("click", closeSheet);
    scrim.addEventListener("click", closeSheet);
    document.getElementById("markAll").addEventListener("click", () => {
      window.DATA.notifs.forEach((n) => (n.unread = false)); renderNotifs(); refreshBadges(); toast("すべて既読にしました", "ok");
    });
    refreshBadges();
  }

  /* --- Toast --- */
  let toastTimer;
  window.toast = function (msg, kind) {
    let t = document.getElementById("eqToast");
    if (!t) {
      t = el(`<div id="eqToast" role="status" aria-live="polite"></div>`);
      Object.assign(t.style, { position: "fixed", left: "50%", bottom: "104px", transform: "translateX(-50%) translateY(10px)",
        background: "#14231f", color: "#fff", padding: "11px 18px", borderRadius: "12px", font: "600 13px/1.4 var(--font)",
        boxShadow: "0 12px 40px rgba(0,0,0,.4)", zIndex: "60", opacity: "0", transition: "opacity .2s, transform .2s",
        display: "flex", gap: "9px", alignItems: "center", maxWidth: "84%" });
      document.body.appendChild(t);
    }
    const c = kind === "ok" ? "#2bb89a" : kind === "bad" ? "#ff7676" : "#9fb4ab";
    t.innerHTML = `<span style="width:8px;height:8px;border-radius:50%;background:${c};flex:none"></span>${msg}`;
    requestAnimationFrame(() => { t.style.opacity = "1"; t.style.transform = "translateX(-50%) translateY(0)"; });
    clearTimeout(toastTimer); toastTimer = setTimeout(() => { t.style.opacity = "0"; }, 2800);
  };

  /* --- Notifications (in-app + system) --- */
  window.pwaNotify = async function (title, body, url, type) {
    window.DATA.notifs.unshift({ id: "n" + Date.now(), type: type || "notice", icon: ({ approved: "check", request: "info", chat: "chat", notice: "bell" })[type] || "bell", title, body, at: "たった今", unread: true });
    refreshBadges();
    try {
      if ("serviceWorker" in navigator && "Notification" in window && Notification.permission === "granted") {
        const reg = await navigator.serviceWorker.ready;
        reg.showNotification(title, { body, icon: "assets/icon-192.png", badge: "assets/icon-192.png", data: url || "hauler-home.html", vibrate: [80, 40, 80] });
      } else if ("Notification" in window && Notification.permission === "granted") {
        new Notification(title, { body, icon: "assets/icon-192.png" });
      }
    } catch (_) {}
  };

  function urlBase64ToUint8Array(b64) {
    const pad = "=".repeat((4 - (b64.length % 4)) % 4);
    const base = (b64 + pad).replace(/-/g, "+").replace(/_/g, "/");
    const raw = atob(base), arr = new Uint8Array(raw.length);
    for (let i = 0; i < raw.length; i++) arr[i] = raw.charCodeAt(i);
    return arr;
  }
  async function subscribePush() {
    if (!window.PUSH_API || !("serviceWorker" in navigator) || !("PushManager" in window)) return false;
    try {
      const reg = await navigator.serviceWorker.ready;
      const r = await fetch(window.PUSH_API + "/api/vapidPublicKey");
      const { publicKey } = await r.json();
      let sub = await reg.pushManager.getSubscription();
      if (!sub) sub = await reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: urlBase64ToUint8Array(publicKey) });
      const res = await fetch(window.PUSH_API + "/api/subscribe?role=hauler", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(sub) });
      return res.ok;
    } catch (e) { console.warn("subscribePush failed", e); return false; }
  }
  // 予約者の操作 → 管理者(PC)へ実プッシュ
  window.pushSend = function (title, body, url, to) {
    if (!window.PUSH_API) return;
    fetch(window.PUSH_API + "/api/send", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ title, body, url, to: to || "admin" }) }).catch(() => {});
  };

  window.requestPush = async function () {
    if (!("Notification" in window)) { toast("この端末は通知に未対応です（iPhoneはSafariで『ホーム画面に追加』してから）", "bad"); return false; }
    const p = await Notification.requestPermission();
    if (p === "granted") {
      const ok = await subscribePush();
      toast(ok ? "プッシュ通知をオンにしました（この端末を登録）" : "通知はONですが端末登録に失敗しました", ok ? "ok" : "bad");
      window.pwaNotify("通知をオンにしました", "予約の承認やメッセージをお知らせします。", "hauler-home.html", "approved");
      return true;
    }
    toast(p === "denied" ? "通知がブロックされています（端末設定から許可してください）" : "通知は許可されませんでした", "bad"); return false;
  };
  window.notifState = () => ("Notification" in window ? Notification.permission : "unsupported");

  document.addEventListener("DOMContentLoaded", () => {
    const pwa = document.querySelector(".pwa");
    if (pwa) buildShell(pwa);
    if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(() => {});

    // 管理コンソールからの着信（承認・事務局メッセージ）
    if (window.BUS) {
      BUS.on("approved", (p) => {
        (window.DATA?.haulerRes || []).forEach((r) => { if (r.date === p.date && r.ampm === p.ampm) r.status = "fixed"; });
        window.pwaNotify?.("予約が承認されました", `${(p.date || "").slice(5)} ${p.ampm}・${(p.waste || []).join("・")} が確定しました。`, "hauler-book.html", "approved");
      });
      BUS.on("chat-office", (p) => window.pwaNotify?.("あおぞら事務局", p.text, "hauler-chat.html", "chat"));
    }
  });
})();
