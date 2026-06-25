/* あおぞら予ろシク 運搬業者ポータル — Service Worker
   アプリシェルのオフラインキャッシュ ＋ プッシュ通知の受信。 */
const CACHE = "yorosiku-pwa-v4";
const ASSETS = [
  // 予約者アプリ
  "hauler-home.html", "hauler-book.html", "hauler-add.html",
  "hauler-chat.html", "hauler-account.html", "hauler-login.html",
  "assets/pwa.css", "assets/pwa.js", "manifest.webmanifest",
  // 管理コンソール
  "aozora-home.html", "aozora-apply.html", "aozora-calendar.html", "aozora-chat.html",
  "aozora-user.html", "aozora-project.html", "aozora-vehicle.html", "aozora-mail.html", "aozora-group.html",
  "assets/app.js", "manifest-admin.webmanifest",
  // 共通
  "assets/styles.css", "assets/data.js", "assets/icon-192.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// ネットワーク優先＋常に再検証（更新を確実に反映）＋ オフライン時はキャッシュ
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request, { cache: "no-cache" }).then((res) => {
      const copy = res.clone();
      caches.open(CACHE).then((c) => c.put(e.request, copy));
      return res;
    }).catch(() => caches.match(e.request).then((hit) => hit || caches.match("hauler-home.html")))
  );
});

// Web Push（サーバーからのプッシュ受信）。デモでは page 側から showNotification も使用。
self.addEventListener("push", (e) => {
  let d = { title: "あおぞら予ろシク", body: "新しい通知があります", url: "hauler-home.html" };
  try { if (e.data) d = Object.assign(d, e.data.json()); } catch (_) {}
  e.waitUntil(Promise.all([
    self.registration.showNotification(d.title, {
      body: d.body, icon: "assets/icon-192.png", badge: "assets/icon-192.png",
      vibrate: [80, 40, 80], data: d.url, tag: d.tag || "yorosiku",
    }),
    self.clients.matchAll({ type: "window", includeUncontrolled: true })
      .then((cs) => cs.forEach((c) => c.postMessage({ type: "push", payload: d }))),
  ]));
});

self.addEventListener("notificationclick", (e) => {
  e.notification.close();
  const url = e.notification.data || "hauler-home.html";
  e.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then((cs) => {
      for (const c of cs) { if ("focus" in c) { c.navigate(url); return c.focus(); } }
      return clients.openWindow(url);
    })
  );
});
