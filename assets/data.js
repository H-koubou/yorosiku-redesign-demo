/* =========================================================================
   EQUO Ops — Icons, mock data, render helpers
   data.js は app.js より前に読み込む（window.ICONS を参照するため）。
   ========================================================================= */
(function () {
  "use strict";
  const s = (p) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" width="100%" height="100%">${p}</svg>`;

  window.PUSH_API = "https://yorosiku-push.vercel.app"; // Web Push サーバー（Vercel）

  window.ICONS = {
    check:    s('<path d="M20 6L9 17l-5-5"/>'),
    inbox:    s('<path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.5 5h13l3.5 7v6a2 2 0 01-2 2H4a2 2 0 01-2-2v-6z"/>'),
    ban:      s('<circle cx="12" cy="12" r="9"/><path d="M5.6 5.6l12.8 12.8"/>'),
    repeat:   s('<path d="M17 1l4 4-4 4"/><path d="M3 11V9a4 4 0 014-4h14"/><path d="M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 01-4 4H3"/>'),
    calendar: s('<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>'),
    plus:     s('<path d="M12 5v14M5 12h14"/>'),
    factory:  s('<path d="M2 20h20M4 20V9l5 4V9l5 4V9l5 4v7"/>'),
    info:     s('<circle cx="12" cy="12" r="9"/><path d="M12 16v-4M12 8h.01"/>'),
    gear:     s('<circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 00-.1-1.3l2-1.5-2-3.4-2.3 1a7 7 0 00-2.3-1.3L13.6 2h-3.2l-.4 2.5a7 7 0 00-2.3 1.3l-2.3-1-2 3.4 2 1.5A7 7 0 005 12a7 7 0 00.1 1.3l-2 1.5 2 3.4 2.3-1a7 7 0 002.3 1.3l.4 2.5h3.2l.4-2.5a7 7 0 002.3-1.3l2.3 1 2-3.4-2-1.5A7 7 0 0019 12z"/>'),
    grid:     s('<rect x="3" y="3" width="7" height="18" rx="1"/><rect x="14" y="3" width="7" height="18" rx="1"/>'),
    users:    s('<path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 00-3-3.9"/>'),
    driver:   s('<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/>'),
    truck:    s('<path d="M1 4h12v12H1zM13 8h5l3 3v5h-8"/><circle cx="5.5" cy="18" r="1.8"/><circle cx="17.5" cy="18" r="1.8"/>'),
    pin:      s('<path d="M12 22s7-6.3 7-12a7 7 0 10-14 0c0 5.7 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>'),
    bell:     s('<path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 01-3.4 0"/>'),
    search:   s('<circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/>'),
    download: s('<path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><path d="M7 10l5 5 5-5M12 15V3"/>'),
    chevronL: s('<path d="M15 18l-6-6 6-6"/>'),
    chevronR: s('<path d="M9 18l6-6-6-6"/>'),
    x:        s('<path d="M18 6L6 18M6 6l12 12"/>'),
    clock:    s('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
    arrowL:   s('<path d="M19 12H5M12 19l-7-7 7-7"/>'),
    external: s('<path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><path d="M15 3h6v6M10 14L21 3"/>'),
    chat:     s('<path d="M21 11.5a8 8 0 01-11.5 7.2L3 21l2.3-6.5A8 8 0 1121 11.5z"/>'),
    send:     s('<path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>'),
    user:     s('<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/>'),
    home:     s('<path d="M3 11l9-8 9 8M5 10v10h5v-6h4v6h5V10"/>'),
    qr:       s('<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3M21 14v7h-7v-3"/>'),
    scale:    s('<path d="M12 3v18M7 21h10M5 8h14l-3.5 7a3 3 0 01-7 0L5 8z"/><circle cx="12" cy="5" r="1.4"/>'),
    chartbar: s('<path d="M3 21h18"/><rect x="5" y="11" width="3.4" height="7"/><rect x="10.3" y="6" width="3.4" height="12"/><rect x="15.6" y="14" width="3.4" height="4"/>'),
    line:     s('<path d="M21 11c0-4.2-4-7.5-9-7.5S3 6.8 3 11c0 3.8 3.2 6.9 7.6 7.4.4 0 .9.3.7 1.1l-.2 1.2c0 .3.3.6.7.4 1-.5 5.5-3.3 7.2-6 .7-1 1-2.2 1-3.5z"/>'),
  };

  /* --- Mock data -------------------------------------------------------- */
  const WASTE = ["廃プラスチック類","紙くず","木くず","繊維くず","ゴムくず","金属くず","ガラスくず・コンクリートくず及び陶磁器くず","がれき類","混合廃棄物","廃油"];

  const applyQueue = [
    { id:"a1", date:"2026-06-25", ampm:"AM", carrier:"サンプル建材株式会社", emitter:"みらい建設株式会社", site:"みらい建設㈱解体現場", waste:["繊維くず"], tatami:200, car:"大型アームロール", units:1, note:"畳破砕品", by:"みらい建設 山田太郎", at:"06-23 09:05", status:"request" },
    { id:"a2", date:"2026-06-25", ampm:"AM", carrier:"多摩運輸株式会社", emitter:"株式会社山田工務店", site:"立川駅前再開発 B工区", waste:["混合廃棄物","木くず"], tatami:null, car:"4tダンプ", units:2, note:"丸通運輸と合積み希望", by:"多摩運輸 佐藤", at:"06-23 14:20", status:"new" },
    { id:"a3", date:"2026-06-25", ampm:"PM", carrier:"エコ物流株式会社", emitter:"関東建設株式会社", site:"八王子第3現場", waste:["がれき類"], tatami:null, car:"大型ダンプ", units:3, note:"", by:"関東建設 田中", at:"06-23 16:02", status:"new" },
    { id:"a4", date:"2026-06-26", ampm:"AM", carrier:"サンプル建材株式会社", emitter:"みらい建設株式会社", site:"解体現場", waste:["紙くず"], tatami:null, car:"4t平ボディ", units:1, note:"", by:"あおぞら 管理者", at:"06-24 08:11", status:"change" },
    { id:"a5", date:"2026-06-26", ampm:"PM", carrier:"城北重機株式会社", emitter:"都市再生機構", site:"多摩NT建替 12街区", waste:["金属くず","ガラスくず・コンクリートくず及び陶磁器くず"], tatami:null, car:"8tアームロール", units:2, note:"2回計量を希望", by:"城北重機 鈴木", at:"06-24 10:33", status:"new" },
    { id:"a6", date:"2026-06-27", ampm:"AM", carrier:"緑川興業株式会社", emitter:"緑川建設株式会社", site:"国立庁舎 解体現場", waste:["廃プラスチック類"], tatami:null, car:"4tウイング", units:1, note:"", by:"緑川興業 高橋", at:"06-24 11:48", status:"request" },
    { id:"a7", date:"2026-06-27", ampm:"PM", carrier:"日野クリーン株式会社", emitter:"日野自動車関連工事", site:"日野工場 改修", waste:["廃油","ゴムくず"], tatami:null, car:"4tユニック", units:1, note:"廃油はドラム缶4本", by:"日野クリーン 渡辺", at:"06-24 13:09", status:"new" },
  ];

  const confirmed = [
    { id:"c1", date:"2026-06-24", ampm:"AM", carrier:"サンプル建材株式会社", emitter:"みらい建設株式会社", site:"解体現場", waste:["繊維くず"], car:"大型アームロール", units:1, by:"みらい建設 山田", status:"fixed" },
    { id:"c2", date:"2026-06-24", ampm:"AM", carrier:"多摩運輸株式会社", emitter:"山田工務店", site:"立川 B工区", waste:["混合廃棄物"], car:"4tダンプ", units:2, by:"多摩運輸 佐藤", status:"fixed" },
    { id:"c3", date:"2026-06-24", ampm:"PM", carrier:"エコ物流株式会社", emitter:"関東建設", site:"八王子第3", waste:["がれき類"], car:"大型ダンプ", units:1, by:"関東建設 田中", status:"fixed" },
  ];

  // 週カレンダー: 各日 AM/PM の 台数枠(cap 12)。月曜開始。
  const CAP = 12;
  const week = [
    { date:"6/22", dow:"月", out:false,             am:9,  pm:7 },
    { date:"6/23", dow:"火", out:false,             am:6,  pm:4 },
    { date:"6/24", dow:"水", out:false, today:true, am:6,  pm:4 },
    { date:"6/25", dow:"木", out:false,             am:12, pm:5 },
    { date:"6/26", dow:"金", out:false,             am:8,  pm:11 },
    { date:"6/27", dow:"土", out:false, sat:true,   am:5,  pm:3 },
    { date:"6/28", dow:"日", out:false, sun:true,   am:2,  pm:0 },
  ];

  // 配車表: ドライバー軸
  const board = {
    drivers: ["ドライバーA", "ドライバーB", "ドライバー兼務"],
    jobs: [
      { driver:0, start:8,  end:11, customer:"みらい建設", site:"解体現場", vehicle:"4tアームロール", no:"品川 100 あ 12-12", status:"fixed" },
      { driver:0, start:13, end:16, customer:"山田工務店", site:"立川 B工区", vehicle:"4tダンプ", no:"多摩 800 か 33-21", status:"plan" },
      { driver:1, start:9,  end:12, customer:"関東建設", site:"八王子第3", vehicle:"大型ダンプ", no:"足立 100 さ 9-87", status:"fixed" },
      { driver:2, start:14, end:17, customer:"都市再生機構", site:"多摩NT 12街区", vehicle:"8tアームロール", no:"練馬 100 た 5-50", status:"plan" },
    ],
  };

  const carriers = [
    { name:"サンプル建材株式会社", tel:"0428-22-1100", contact:"山田 太郎", count:42 },
    { name:"多摩運輸株式会社", tel:"042-555-2200", contact:"佐藤 健",   count:31 },
    { name:"エコ物流株式会社", tel:"042-666-3300", contact:"田中 守",   count:27 },
    { name:"城北重機株式会社", tel:"03-3900-4400", contact:"鈴木 一郎", count:19 },
    { name:"緑川興業株式会社", tel:"042-777-5500", contact:"高橋 学",   count:12 },
    { name:"日野クリーン株式会社", tel:"042-888-6600", contact:"渡辺 隆", count:8 },
  ];
  const emitters = [
    { name:"みらい建設株式会社", tel:"0428-30-1000", count:55 },
    { name:"株式会社山田工務店", tel:"042-500-1200", count:23 },
    { name:"関東建設株式会社", tel:"042-610-3400", count:18 },
    { name:"都市再生機構", tel:"03-5320-0000", count:9 },
    { name:"緑川建設株式会社", tel:"042-720-7800", count:6 },
  ];
  const factories = [
    { name:"あおぞら 本社工場", area:"青梅市新町6-1", capAM:12, capPM:12, hours:"08:00–17:00", wastes:["廃プラスチック類","紙くず","木くず","繊維くず","混合廃棄物","がれき類"], active:true },
    { name:"あおぞら 第2工場", area:"八王子市子安町4-7", capAM:8, capPM:8, hours:"08:30–16:30", wastes:["金属くず","ガラスくず・コンクリートくず及び陶磁器くず","廃油","ゴムくず"], active:true },
  ];
  const drivers = [
    { name:"山田 太郎", label:"ドライバーA", tel:"090-1111-2222", license:"中型・大型・けん引", active:true },
    { name:"佐藤 次郎", label:"ドライバーB", tel:"090-3333-4444", license:"中型・大型", active:true },
    { name:"鈴木 三郎", label:"ドライバー兼務", tel:"090-5555-6666", license:"普通・中型", active:true },
  ];
  const vehicles = [
    { no:"品川 100 あ 12-12", type:"4tアームロール", ton:"4t", active:true },
    { no:"多摩 800 か 33-21", type:"4tダンプ", ton:"4t", active:true },
    { no:"足立 100 さ 9-87", type:"大型ダンプ", ton:"大型", active:true },
    { no:"練馬 100 た 5-50", type:"8tアームロール", ton:"8t", active:true },
    { no:"多摩 480 す 1-23", type:"軽トラ", ton:"軽", active:false },
  ];
  const sites = [
    { name:"みらい建設 解体現場", addr:"東京都青梅市新町6-1", tel:"0428-30-1000", emitter:"みらい建設株式会社" },
    { name:"立川駅前再開発 B工区", addr:"東京都立川市曙町2-1", tel:"042-500-1200", emitter:"株式会社山田工務店" },
    { name:"八王子第3現場", addr:"東京都八王子市子安町4-7", tel:"042-610-3400", emitter:"関東建設株式会社" },
    { name:"多摩NT 12街区", addr:"東京都多摩市落合1-9", tel:"03-5320-0000", emitter:"都市再生機構" },
  ];
  const users = [
    { name:"あおぞら 管理者", email:"office@example.com", role:"管理者" },
    { name:"承認 担当", email:"approve@example.com", role:"予約承認者" },
    { name:"事務 入力担当", email:"jimu@example.com", role:"予約入力者" },
    { name:"山田 太郎", email:"yamada@example.com", role:"ドライバー" },
    { name:"佐藤 次郎", email:"sato@example.com", role:"ドライバー" },
  ];
  const regulars = [
    { carrier:"サンプル建材株式会社", emitter:"みらい建設株式会社", waste:["紙くず"], car:"4t平ボディ", units:1, rule:"毎週 月・木", ampm:"AM", next:"2026-06-25" },
    { carrier:"多摩運輸株式会社", emitter:"株式会社山田工務店", waste:["混合廃棄物"], car:"4tダンプ", units:2, rule:"毎週 水", ampm:"PM", next:"2026-06-24" },
    { carrier:"エコ物流株式会社", emitter:"関東建設株式会社", waste:["がれき類"], car:"大型ダンプ", units:1, rule:"隔週 金", ampm:"AM", next:"2026-06-26" },
  ];
  const cancels = [
    { date:"2026-06-25", ampm:"PM", carrier:"城北重機株式会社", emitter:"都市再生機構", site:"多摩NT 12街区", waste:["金属くず"], car:"8tアームロール", units:2, by:"城北重機 鈴木", reason:"現場都合により搬出延期", at:"06-24 09:40" },
    { date:"2026-06-26", ampm:"AM", carrier:"日野クリーン株式会社", emitter:"緑川建設株式会社", site:"日野工場 改修", waste:["廃油"], car:"4tユニック", units:1, by:"日野クリーン 渡辺", reason:"数量未確定のため再申請予定", at:"06-24 11:15" },
  ];
  const haulerRes = [
    { date:"2026-06-25", ampm:"AM", emitter:"みらい建設株式会社", site:"みらい建設 解体現場", waste:["繊維くず"], car:"大型アームロール", units:1, status:"request" },
    { date:"2026-06-26", ampm:"AM", emitter:"みらい建設株式会社", site:"みらい建設 解体現場", waste:["紙くず"], car:"4t平ボディ", units:1, status:"fixed" },
    { date:"2026-06-22", ampm:"PM", emitter:"みらい建設株式会社", site:"みらい建設 解体現場", waste:["木くず"], car:"4tダンプ", units:2, status:"fixed" },
    { date:"2026-06-20", ampm:"AM", emitter:"みらい建設株式会社", site:"みらい建設 解体現場", waste:["混合廃棄物"], car:"大型ダンプ", units:1, status:"cancel" },
  ];
  const announcements = [
    { date:"06-20", text:"6/25(木) は本社工場のみ受入。第2工場は設備点検のため休止します。" },
    { date:"05-25", text:"大型連休中の搬入予約受付スケジュールを掲載しました。" },
  ];

  // 予約者カレンダー（実機準拠 / 2026年6月・日曜始まり / car=null は無制限 / mine=自社の予約状況）
  // state: closed=休業日, ended=受付終了, open=営業日, am=午前のみ, pm=午後のみ
  const monthHauler = [
    {d:1,state:"ended",car:30,tatami:200},{d:2,state:"ended",car:10,tatami:50},{d:3,state:"ended",car:30,tatami:300},
    {d:4,state:"ended",car:30,tatami:1000},{d:5,state:"ended",car:30,tatami:300},{d:6,state:"ended",car:null,tatami:30},
    {d:7,state:"closed"},
    {d:8,state:"ended",car:30,tatami:200},{d:9,state:"ended",car:10,tatami:50},{d:10,state:"ended",car:30,tatami:300},
    {d:11,state:"ended",car:30,tatami:1000},{d:12,state:"ended",car:30,tatami:300},{d:13,state:"ended",car:null,tatami:8},
    {d:14,state:"closed"},
    {d:15,state:"ended",car:28,tatami:198},{d:16,state:"ended",car:10,tatami:50},{d:17,state:"ended",car:29,tatami:299},
    {d:18,state:"ended",car:30,tatami:1000},{d:19,state:"ended",car:30,tatami:300},{d:20,state:"ended",car:null,tatami:30},
    {d:21,state:"closed"},
    {d:22,state:"ended",car:30,tatami:200},{d:23,state:"ended",car:10,tatami:50},
    {d:24,state:"ended",car:20,tatami:200,mine:"change",today:true},{d:25,state:"open",car:20,tatami:900,mine:"cancel"},
    {d:26,state:"open",car:30,tatami:300},{d:27,state:"am",car:null,tatami:30},
    {d:28,state:"closed"},
    {d:29,state:"open",car:30,tatami:200},{d:30,state:"pm",car:10,tatami:50},
  ];

  // 通知（予約者アプリ／管理者で共用の素材）
  const notifs = [
    { id:"n1", type:"approved", icon:"check", title:"予約が承認されました", body:"6/26 AM 紙くず ×1台 が確定しました。", at:"10:24", unread:true },
    { id:"n2", type:"request",  icon:"info",  title:"確認依頼があります", body:"6/25 AM 繊維くずの畳枚数をご確認ください。", at:"昨日 16:40", unread:true },
    { id:"n3", type:"chat",     icon:"chat",  title:"あおぞら事務局", body:"畳の枚数のご確認をお願いします。", at:"昨日 16:38", unread:false },
    { id:"n4", type:"notice",   icon:"bell",  title:"お知らせ", body:"土曜の営業時間が 8:00〜11:00 に変更されました。", at:"6/20", unread:false },
  ];

  // 管理者↔運搬業者チャット（管理者は会話一覧、予約者は事務局との1スレッド）
  const chatThreads = [
    { id:"t1", carrier:"サンプル建材株式会社", contact:"山田 太郎", unread:2, at:"16:40", messages:[
      { from:"office", text:"サンプル建材様、いつもお世話になります。6/25 AM 繊維くずの件、畳破砕品の枚数をご教示ください。", at:"昨日 16:38" },
      { from:"carrier", text:"200枚でお願いします。", at:"昨日 16:39" },
      { from:"office", text:"承知しました。受入残を確認のうえ確定いたします。", at:"昨日 16:42" },
      { from:"carrier", text:"ありがとうございます。追加で6/27 AMも予約したいのですが空いていますか？", at:"16:40" },
    ]},
    { id:"t2", carrier:"多摩運輸株式会社", contact:"佐藤 健", unread:0, at:"14:10", messages:[
      { from:"carrier", text:"6/25 PMの混合廃棄物、合積み希望です。", at:"14:08" },
      { from:"office", text:"了解しました。台数の変更があればお知らせください。", at:"14:10" },
    ]},
    { id:"t3", carrier:"城北重機株式会社", contact:"鈴木 一郎", unread:1, at:"昨日", messages:[
      { from:"carrier", text:"6/26 PM、2回計量を希望します。", at:"昨日 09:30" },
      { from:"office", text:"承知しました。計量票は受付でお渡しします。", at:"昨日 09:45" },
      { from:"office", text:"なお当日は混雑が予想されます。10時以降が比較的スムーズです。", at:"昨日 09:46" },
    ]},
  ];

  window.DATA = { WASTE, applyQueue, confirmed, week, CAP, board,
    carriers, emitters, factories, drivers, vehicles, sites, users, regulars, cancels, haulerRes, announcements, monthHauler,
    notifs, chatThreads };

  /* --- Render helpers --------------------------------------------------- */
  const STATUS = {
    request: { cls:"pill-warn",    label:"確認依頼中" },
    change:  { cls:"pill-brand",   label:"変更申請" },
    new:     { cls:"pill-neutral", label:"承認待ち" },
    fixed:   { cls:"pill-ok",      label:"確定" },
    cancel:  { cls:"pill-bad",     label:"取消申請" },
    plan:    { cls:"pill-neutral", label:"予約" },
  };

  window.UI = {
    pill(status) { const x = STATUS[status] || STATUS.new; return `<span class="pill ${x.cls}"><span class="dot"></span>${x.label}</span>`; },

    // 署名要素: キャパゲージ
    gauge(name, used, cap) {
      const pct = cap ? Math.min(100, Math.round((used / cap) * 100)) : 0;
      const full = used >= cap, mid = !full && pct >= 70;
      const cls = full ? " is-full" : mid ? " is-mid" : "";
      return `<div class="gauge${cls}">
        <div class="gauge-top"><span class="gauge-name">${name}</span>
          <span class="gauge-val">${full ? "満枠" : used}<small>/${cap}</small></span></div>
        <div class="gauge-track"><div class="gauge-fill" style="width:${pct}%"></div></div></div>`;
    },

    // 品目チップ（複数）
    waste(arr) {
      const short = w => w.replace("ガラスくず・コンクリートくず及び陶磁器くず", "ガラ陶").replace("廃プラスチック類","廃プラ");
      return arr.map(w => `<span class="pill pill-neutral" style="font-weight:600">${short(w)}</span>`).join(" ");
    },

    ampm(v) { return `<span class="ampm ${v.toLowerCase()}">${v}</span>`; },

    // 受付番号（予約から決定的に生成）
    recNo(seed) {
      let h = 2166136261; const s = String(seed);
      for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
      const n = (h >>> 0) % 10000;
      return "A-" + String(n).padStart(4, "0");
    },

    // 受付QR（デモ表示用の決定的な疑似QR。本番は実QR=予約ID/受付番号を発行）
    qr(text) {
      let h = 2166136261; const s = String(text);
      for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
      const rnd = () => { h ^= h << 13; h ^= h >>> 17; h ^= h << 5; return ((h >>> 0) % 1000) / 1000; };
      const N = 25, cell = 4, pad = 8, size = N * cell + pad * 2, set = new Set();
      const finder = (x, y) => { for (let r = 0; r < 7; r++) for (let c = 0; c < 7; c++) { const e = (r === 0 || r === 6 || c === 0 || c === 6), core = (r >= 2 && r <= 4 && c >= 2 && c <= 4); if (e || core) set.add((y + r) * N + (x + c)); } };
      [[0, 0], [N - 7, 0], [0, N - 7]].forEach(([x, y]) => finder(x, y));
      let rects = "";
      for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) {
        const zone = (r < 8 && c < 8) || (r < 8 && c >= N - 8) || (r >= N - 8 && c < 8);
        const on = zone ? set.has(r * N + c) : rnd() > 0.5;
        if (on) rects += `<rect x="${pad + c * cell}" y="${pad + r * cell}" width="${cell}" height="${cell}"/>`;
      }
      return `<svg viewBox="0 0 ${size} ${size}" width="100%" height="100%" shape-rendering="crispEdges"><rect width="${size}" height="${size}" fill="#fff"/><g fill="#14231f">${rects}</g></svg>`;
    },
  };

  /* --- BUS: 予約者アプリ⇄管理コンソールのタブ間連携（同一オリジン） ----------
     本番はサーバー＋Web Push に置換。デモは BroadcastChannel（無ければ localStorage）。 */
  window.BUS = (function () {
    const handlers = {}, seen = new Set();
    let ch = null;
    try { if ("BroadcastChannel" in self) ch = new BroadcastChannel("yorosiku"); } catch (_) {}
    function dispatch(m) {
      if (!m || !m.k || seen.has(m.k)) return; // 重複排除（両チャネル経由でも1回だけ）
      seen.add(m.k);
      (handlers[m.type] || []).forEach((fn) => { try { fn(m.payload); } catch (_) {} });
    }
    if (ch) ch.onmessage = (e) => dispatch(e.data);
    window.addEventListener("storage", (e) => { if (e.key === "yorosiku-bus" && e.newValue) { try { dispatch(JSON.parse(e.newValue)); } catch (_) {} } });
    return {
      post(type, payload) {
        const m = { type, payload, k: type + ":" + Date.now() + ":" + Math.random() };
        seen.add(m.k);                                  // 自分の投稿は受信しない
        if (ch) try { ch.postMessage(m); } catch (_) {}
        try { localStorage.setItem("yorosiku-bus", JSON.stringify(m)); } catch (_) {} // ← 確実なクロスタブ
      },
      on(type, fn) { (handlers[type] = handlers[type] || []).push(fn); },
    };
  })();
})();
