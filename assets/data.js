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

  /* === 基本情報マスター（実機の「基本情報」ドロップダウン＝ユーザー/会社/車種/メール/メールグループ）===
     ※ すべて架空データ。実在の社名・氏名・メール・電話は含めない（@example.* / 0428-** はダミー）。 */

  // 会社（予約者）一覧 ＝ 実機 /project
  const companies = [
    { code:"rma0zr1731ec", corpNo:"1234567890123", name:"株式会社あおぞら", kana:"アオゾラ", pref:"東京都", addr:"青梅市新町6-1", bldg:"", rep:"あおぞら 代表", contact:"神田 香織", email:"yoyaku@example.com", tel:"0428-22-1731", tel2:"", note:"自社（施設）", count:0 },
    { code:"rmsmpl0001kz", corpNo:"2345678901234", name:"サンプル建材株式会社", kana:"サンプルケンザイ", pref:"東京都", addr:"青梅市新町6-1", bldg:"", rep:"山田 太郎", contact:"山田 太郎", email:"info@example.com", tel:"0428-22-1100", tel2:"090-1111-2222", note:"", count:42 },
    { code:"rmmirai0002k", corpNo:"3456789012345", name:"みらい建設株式会社", kana:"ミライケンセツ", pref:"東京都", addr:"青梅市末広町2-5", bldg:"", rep:"田村 誠", contact:"田村 誠", email:"kaitai@example.co.jp", tel:"0428-30-1000", tel2:"", note:"排出事業者", count:55 },
    { code:"rmtama0003un", corpNo:"", name:"多摩運輸株式会社", kana:"タマウンユ", pref:"東京都", addr:"立川市曙町2-1", bldg:"立川中央ビル3F", rep:"佐藤 健", contact:"佐藤 健", email:"haisha@example.co.jp", tel:"042-555-2200", tel2:"", note:"", count:31 },
    { code:"rmeco0004lg", corpNo:"4567890123456", name:"エコ物流株式会社", kana:"エコブツリュウ", pref:"東京都", addr:"八王子市子安町4-7", bldg:"", rep:"田中 守", contact:"田中 守", email:"logi@example.net", tel:"042-666-3300", tel2:"", note:"", count:27 },
    { code:"rmjohoku005", corpNo:"", name:"城北重機株式会社", kana:"ジョウホクジュウキ", pref:"東京都", addr:"北区赤羽1-1", bldg:"", rep:"鈴木 一郎", contact:"鈴木 一郎", email:"juki@example.com", tel:"03-3900-4400", tel2:"", note:"", count:19 },
    { code:"rmmidori006", corpNo:"", name:"緑川興業株式会社", kana:"ミドリカワコウギョウ", pref:"東京都", addr:"国立市東1-2", bldg:"", rep:"高橋 学", contact:"高橋 学", email:"info@example.jp", tel:"042-777-5500", tel2:"", note:"", count:12 },
    { code:"rmhino0007cl", corpNo:"", name:"日野クリーン株式会社", kana:"ヒノクリーン", pref:"東京都", addr:"日野市日野本町3-3", bldg:"", rep:"渡辺 隆", contact:"渡辺 隆", email:"clean@example.com", tel:"042-888-6600", tel2:"", note:"", count:8 },
    { code:"rmyamada008", corpNo:"5678901234567", name:"株式会社山田工務店", kana:"ヤマダコウムテン", pref:"東京都", addr:"立川市柴崎町5-2", bldg:"", rep:"山田 工", contact:"山田 工", email:"koumu@example.co.jp", tel:"042-500-1200", tel2:"", note:"排出事業者", count:23 },
    { code:"rmkanto0009", corpNo:"", name:"関東建設株式会社", kana:"カントウケンセツ", pref:"東京都", addr:"八王子市旭町1-1", bldg:"", rep:"加藤 剛", contact:"加藤 剛", email:"kanto@example.net", tel:"042-610-3400", tel2:"", note:"排出事業者", count:18 },
    { code:"rmkaitai010", corpNo:"", name:"山田解体工業株式会社", kana:"ヤマダカイタイ", pref:"東京都", addr:"昭島市東町4-1", bldg:"", rep:"山田 解", contact:"山田 解", email:"kaitai2@example.com", tel:"042-300-7700", tel2:"", note:"", count:14 },
    { code:"rmaozora011", corpNo:"", name:"青空リサイクル株式会社", kana:"アオゾラリサイクル", pref:"東京都", addr:"福生市本町1-5", bldg:"", rep:"中村 茂", contact:"中村 茂", email:"recycle@example.jp", tel:"042-330-8800", tel2:"", note:"", count:11 },
    { code:"rmdaiichi12", corpNo:"6789012345678", name:"第一環境サービス株式会社", kana:"ダイイチカンキョウ", pref:"東京都", addr:"羽村市小作台2-3", bldg:"", rep:"小林 大", contact:"小林 大", email:"service@example.co.jp", tel:"042-200-9900", tel2:"", note:"", count:9 },
    { code:"rmmaruwa013", corpNo:"", name:"丸和興業株式会社", kana:"マルワコウギョウ", pref:"東京都", addr:"青梅市河辺町8-1", bldg:"", rep:"和田 丸", contact:"和田 丸", email:"maruwa@example.com", tel:"0428-44-1212", tel2:"", note:"", count:7 },
    { code:"rmsakura014", corpNo:"", name:"株式会社さくら住建", kana:"サクラジュウケン", pref:"東京都", addr:"あきる野市秋川3-2", bldg:"", rep:"桜井 健太", contact:"桜井 健太", email:"sakura@example.net", tel:"042-100-3434", tel2:"", note:"", count:6 },
    { code:"rmkitatama15", corpNo:"", name:"北多摩清掃株式会社", kana:"キタタマセイソウ", pref:"東京都", addr:"東村山市本町1-1", bldg:"", rep:"井上 清", contact:"井上 清", email:"seisou@example.jp", tel:"042-560-1313", tel2:"", note:"", count:5 },
    { code:"rmgreen0016", corpNo:"", name:"株式会社グリーンライン", kana:"グリーンライン", pref:"東京都", addr:"小平市天神町4-4", bldg:"", rep:"林 緑", contact:"林 緑", email:"green@example.com", tel:"042-450-2424", tel2:"", note:"", count:4 },
    { code:"rmmusashi17", corpNo:"", name:"武蔵野解体株式会社", kana:"ムサシノカイタイ", pref:"東京都", addr:"武蔵野市境1-1", bldg:"", rep:"武田 信", contact:"武田 信", email:"musashino@example.co.jp", tel:"0422-50-5656", tel2:"", note:"", count:3 },
  ];

  // ユーザー一覧 ＝ 実機 /user（権限/操作制限: システム開発者・社内管理者・社内閲覧者・予約者）
  const accounts = [
    { email:"dev@example.com",       name:"開発 太郎", kana:"カイハツ タロウ", gender:"会社", company:"エクオ株式会社",         dept:"開発部",   status:"本会員", role:"システム開発者", tel:"03-0000-0000", note:"" },
    { email:"kanda@example.com",     name:"神田 香織", kana:"カンダ カオリ",   gender:"女性", company:"株式会社あおぞら",     dept:"管理課",   status:"本会員", role:"社内管理者",     tel:"0428-22-1731", note:"" },
    { email:"fujimoto@example.com",  name:"藤本",       kana:"フジモト",        gender:"男性", company:"株式会社あおぞら",     dept:"受付",     status:"本会員", role:"社内閲覧者",     tel:"0428-22-1731", note:"" },
    { email:"yamada@example.com",    name:"山田 太郎", kana:"ヤマダ タロウ",   gender:"男性", company:"サンプル建材株式会社", dept:"業務部",   status:"本会員", role:"予約者",         tel:"090-1111-2222", note:"" },
    { email:"tamura@example.co.jp",  name:"田村 誠",   kana:"タムラ マコト",   gender:"男性", company:"みらい建設株式会社",   dept:"工事部",   status:"本会員", role:"予約者",         tel:"0428-30-1000", note:"" },
    { email:"sato@example.co.jp",    name:"佐藤 健",   kana:"サトウ ケン",     gender:"男性", company:"多摩運輸株式会社",     dept:"配車課",   status:"本会員", role:"予約者",         tel:"042-555-2200", note:"" },
    { email:"tanaka@example.net",    name:"田中 守",   kana:"タナカ マモル",   gender:"男性", company:"エコ物流株式会社",     dept:"",         status:"本会員", role:"予約者",         tel:"042-666-3300", note:"" },
    { email:"suzuki@example.com",    name:"鈴木 一郎", kana:"スズキ イチロウ", gender:"男性", company:"城北重機株式会社",     dept:"",         status:"本会員", role:"予約者",         tel:"03-3900-4400", note:"" },
    { email:"takahashi@example.jp",  name:"高橋 学",   kana:"タカハシ マナブ", gender:"男性", company:"緑川興業株式会社",     dept:"",         status:"本会員", role:"予約者",         tel:"042-777-5500", note:"" },
    { email:"watanabe@example.com",  name:"渡辺 隆",   kana:"ワタナベ タカシ", gender:"男性", company:"日野クリーン株式会社", dept:"",         status:"本会員", role:"予約者",         tel:"042-888-6600", note:"" },
    { email:"koumu@example.co.jp",   name:"山田 工",   kana:"ヤマダ タクミ",   gender:"男性", company:"株式会社山田工務店",   dept:"",         status:"本会員", role:"予約者",         tel:"042-500-1200", note:"" },
    { email:"kato@example.net",      name:"加藤 剛",   kana:"カトウ ツヨシ",   gender:"男性", company:"関東建設株式会社",     dept:"",         status:"本会員", role:"予約者",         tel:"042-610-3400", note:"" },
    { email:"nakamura@example.jp",   name:"中村 茂",   kana:"ナカムラ シゲル", gender:"男性", company:"青空リサイクル株式会社", dept:"",        status:"本会員", role:"予約者",         tel:"042-330-8800", note:"" },
    { email:"kobayashi@example.co.jp", name:"小林 大", kana:"コバヤシ ダイ",   gender:"男性", company:"第一環境サービス株式会社", dept:"",      status:"本会員", role:"予約者",         tel:"042-200-9900", note:"" },
    { email:"wada@example.com",      name:"和田 丸",   kana:"ワダ マル",       gender:"男性", company:"丸和興業株式会社",     dept:"",         status:"本会員", role:"予約者",         tel:"0428-44-1212", note:"" },
    { email:"sakurai@example.net",   name:"桜井 健太", kana:"サクライ ケンタ", gender:"男性", company:"株式会社さくら住建",   dept:"",         status:"本会員", role:"予約者",         tel:"042-100-3434", note:"" },
    { email:"inoue@example.jp",      name:"井上 清",   kana:"イノウエ キヨシ", gender:"男性", company:"北多摩清掃株式会社",   dept:"",         status:"仮登録", role:"予約者",         tel:"042-560-1313", note:"登録確認中" },
    { email:"hayashi@example.com",   name:"林 緑",     kana:"ハヤシ ミドリ",   gender:"女性", company:"株式会社グリーンライン", dept:"",        status:"本会員", role:"予約者",         tel:"042-450-2424", note:"" },
    { email:"takeda@example.co.jp",  name:"武田 信",   kana:"タケダ マコト",   gender:"男性", company:"武蔵野解体株式会社",   dept:"",         status:"退会",   role:"予約者",         tel:"0422-50-5656", note:"2026/03 退会" },
    { email:"yamamoto@example.com",  name:"山本 三郎", kana:"ヤマモト サブロウ", gender:"男性", company:"関東建設株式会社",   dept:"資材課",   status:"本会員", role:"予約者",         tel:"042-610-3401", note:"" },
  ];

  // 車種一覧 ＝ 実機 /vehicle（車種名は汎用名称のため実機どおり）
  const vehicleTypes = [
    { code:"rmv01arm4t", name:"4tアームロール", note:"" }, { code:"rmv02fl4t", name:"4t平ボディ", note:"" },
    { code:"rmv03pk4t", name:"4tパッカー", note:"" },     { code:"rmv04wg4t", name:"4tウイング", note:"" },
    { code:"rmv05dp4t", name:"4tダンプ", note:"" },       { code:"rmv06un4t", name:"4tユニック", note:"" },
    { code:"rmv07arm8t", name:"8tアームロール", note:"" }, { code:"rmv08armL", name:"大型アームロール", note:"" },
    { code:"rmv09flL", name:"大型平ボディ", note:"" },     { code:"rmv10pkL", name:"大型パッカー", note:"" },
    { code:"rmv11wgL", name:"大型ウイング", note:"" },     { code:"rmv12dpL", name:"大型ダンプ", note:"" },
    { code:"rmv13unL", name:"大型ユニック", note:"" },     { code:"rmv14ftr", name:"フルトレーラー", note:"" },
    { code:"rmv15str", name:"セミトレーラー", note:"" },   { code:"rmv16arm2t", name:"2tアームロール", note:"" },
    { code:"rmv17fl2t", name:"2t平ボディ", note:"" },      { code:"rmv18dp2t", name:"2tダンプ", note:"" },
    { code:"rmv19un2t", name:"2tユニック", note:"" },      { code:"rmv20un3t", name:"3tユニック", note:"" },
    { code:"rmv21dpL2", name:"4t深ダンプ", note:"" },      { code:"rmv22kei", name:"軽トラ", note:"" },
  ];

  // メール一斉配信 ＝ 実機 /mail（送信予定日時から1時間に約500件ずつ配信）
  const mails = [
    { id:"m1", sendAt:"2025-05-27 10:00", to:"全予約者",          title:"≪重要≫畳の受入枚数の制限について",  status:"sent",  count:415 },
    { id:"m2", sendAt:"2025-05-22 09:00", to:"全予約者",          title:"≪注意≫予約なし搬入について",        status:"sent",  count:412 },
    { id:"m3", sendAt:"2026-06-28 08:00", to:"本社工場 利用業者", title:"7月の営業日カレンダーのお知らせ",    status:"scheduled", count:268 },
    { id:"m4", sendAt:"",                 to:"",                  title:"夏季休業のご案内（下書き）",          status:"draft", count:0 },
  ];

  // メールグループ設定 ＝ 実機 /group（一斉配信の宛先リスト）
  const mailGroups = [
    { id:"g1", name:"全予約者",          count:18, note:"本会員の予約者すべて", members:["サンプル建材株式会社","みらい建設株式会社","多摩運輸株式会社","ほか15社"] },
    { id:"g2", name:"本社工場 利用業者", count:11, note:"本社工場をよく利用する業者", members:["サンプル建材株式会社","城北重機株式会社","緑川興業株式会社","ほか8社"] },
    { id:"g3", name:"第2工場 利用業者",  count:7,  note:"第2工場利用業者", members:["エコ物流株式会社","関東建設株式会社","青空リサイクル株式会社","ほか4社"] },
  ];

  // カレンダー（品目予定管理）の編集可能なお知らせ2枠 ＝ 実機 /calendar 上部
  const calNotices = {
    updated: { label:"＊更新しました＊", html:
      "<p><b>2025.05.27更新</b></p>" +
      "<p><b>≪重要≫畳の受入枚数の制限について</b></p>" +
      "<p>畳の予約申請は、制限枚数に達していない日はいつでも申請可能です。受入可能枚数は予約申請画面の畳枚数入力欄に記載しています。ご確認ください。</p>" +
      "<p><b>2025.05.22更新</b></p>" +
      "<p><b>≪注意≫予約なし搬入について</b></p>" +
      "<p>当社は完全予約制です。ご予約のない場合は原則受入をお断り、または受入待機（数時間お待ちいただく場合あり）となります。土曜日の予約なし搬入は受入不可です。</p>" +
      "<p><b>2025.04.01更新</b></p>" +
      "<p>2025年4月より土曜日の営業時間を変更します。受付時間 8:00〜11:00（入口門は11:00施錠／午後は休業）。</p>" },
    notice: { label:"【お知らせ】", html:
      "<p>搬入の際は受付番号をご提示ください。混雑時は10時以降の搬入が比較的スムーズです。</p>" },
  };

  /* --- 品目マスター（受入要望 #9：取扱品目は会社ごとに異なる）------------- */
  // limitId = この品目の受入量をどの制限項目で数えるか（limitDefs.id）。null = 数量制限なし
  const items = [
    { code:"I01", name:"廃プラスチック類", short:"廃プラ",   unit:"kg", limitId:"weight", accept:true },
    { code:"I02", name:"紙くず",           short:"紙",       unit:"kg", limitId:"weight", accept:true },
    { code:"I03", name:"木くず",           short:"木",       unit:"kg", limitId:"weight", accept:true },
    { code:"I04", name:"繊維くず",         short:"繊維",     unit:"kg", limitId:"weight", accept:true },
    { code:"I05", name:"畳",               short:"畳",       unit:"枚", limitId:"tatami", accept:true },
    { code:"I06", name:"ゴムくず",         short:"ゴム",     unit:"kg", limitId:"weight", accept:true },
    { code:"I07", name:"金属くず",         short:"金属",     unit:"kg", limitId:"weight", accept:true },
    { code:"I08", name:"ガラスくず・コンクリートくず及び陶磁器くず", short:"ガラ陶", unit:"kg", limitId:"weight", accept:true },
    { code:"I09", name:"がれき類",         short:"がれき",   unit:"m3", limitId:"volume", accept:true },
    { code:"I10", name:"混合廃棄物",       short:"混廃",     unit:"m3", limitId:"volume", accept:true },
    { code:"I11", name:"廃油",             short:"廃油",     unit:"L",  limitId:null,     accept:true },
    { code:"I12", name:"廃酸・廃アルカリ", short:"廃酸",     unit:"L",  limitId:null,     accept:false },
  ];

  /* --- 制限項目マスター（受入要望 #5）------------------------------------
     現場ごとに「何で受入量を絞るか」が違うため、軸そのものをユーザーが定義できる形にする。
     scope: "all" = その日の全予約に対する上限 ／ "item" = 特定品目にだけかかる上限   */
  const limitDefs = [
    { id:"car",    name:"車両",     unit:"台", scope:"all",  itemCode:null,  def:30,    active:true,  builtin:true },
    { id:"tatami", name:"畳",       unit:"枚", scope:"item", itemCode:"I05", def:200,   active:true,  builtin:true },
    { id:"count",  name:"予約件数", unit:"件", scope:"all",  itemCode:null,  def:24,    active:false },
    { id:"weight", name:"重量",     unit:"kg", scope:"all",  itemCode:null,  def:20000, active:false },
    { id:"volume", name:"容積",     unit:"m3", scope:"all",  itemCode:null,  def:60,    active:false },
  ];
  const LIMIT_UNITS = ["台", "枚", "件", "kg", "t", "m3", "L", "本", "箱"];

  /* マスターの編集内容を画面遷移をまたいで保持（デモ用の簡易永続化）。
     制限項目を追加 → カレンダーに入力欄が増える、という流れを実機同様に確認できるようにする。 */
  const MASTER_STORE = "yorosiku-master-v1";
  const DEFAULT_LIMITS = JSON.parse(JSON.stringify(limitDefs));
  const DEFAULT_ITEMS  = JSON.parse(JSON.stringify(items));
  function saveMaster() {
    try { localStorage.setItem(MASTER_STORE, JSON.stringify({ limitDefs, items })); } catch (_) {}
  }
  function resetMaster() {
    try { localStorage.removeItem(MASTER_STORE); } catch (_) {}
    limitDefs.length = 0; limitDefs.push(...JSON.parse(JSON.stringify(DEFAULT_LIMITS)));
    items.length = 0;     items.push(...JSON.parse(JSON.stringify(DEFAULT_ITEMS)));
  }
  (function loadMaster() {
    try {
      const raw = localStorage.getItem(MASTER_STORE); if (!raw) return;
      const m = JSON.parse(raw);
      if (Array.isArray(m.limitDefs) && m.limitDefs.length) { limitDefs.length = 0; limitDefs.push(...m.limitDefs); }
      if (Array.isArray(m.items) && m.items.length)         { items.length = 0;     items.push(...m.items); }
    } catch (_) {}
  })();

  // 日別の制限値を limits{} に正規化（既存の car / tatami は残したまま両方を同期させる）
  monthHauler.forEach(x => {
    x.limits = x.limits || {};
    if (!("car" in x.limits))    x.limits.car    = ("car" in x)    ? x.car    : null;
    if (!("tatami" in x.limits)) x.limits.tatami = ("tatami" in x) ? x.tatami : null;
  });

  /* --- 回収予約（受入要望 #1）--------------------------------------------
     持込＝日付＋AM/PM を1点で指定。回収＝「いつなら受けられるか」の許容範囲を持つ。
     range: day=終日可 / time=当日の時間帯 / span=複数日 / each=日ごとに締め時刻が違う   */
  const collectRes = [
    { id:"k1", carrier:"多摩運輸株式会社", emitter:"株式会社山田工務店", site:"立川駅前再開発 B工区",
      waste:["混合廃棄物"], car:"4tダンプ", units:1, range:"day",  from:"2026-06-26", to:"2026-06-26",
      slots:[], note:"終日いつでも可", by:"多摩運輸 佐藤", at:"06-24 09:12", status:"new" },
    { id:"k2", carrier:"エコ物流株式会社", emitter:"関東建設株式会社", site:"八王子第3現場",
      waste:["がれき類"], car:"大型ダンプ", units:2, range:"time", from:"2026-06-26", to:"2026-06-26",
      slots:["13:00","13:30","14:00","14:30"], note:"13〜15時の間で", by:"関東建設 田中", at:"06-24 10:40", status:"request" },
    { id:"k3", carrier:"緑川興業株式会社", emitter:"緑川建設株式会社", site:"国立庁舎 解体現場",
      waste:["廃プラスチック類","紙くず"], car:"4tウイング", units:1, range:"span", from:"2026-06-26", to:"2026-06-30",
      slots:[], note:"6/26〜6/30 のいずれかで", by:"緑川興業 高橋", at:"06-24 14:02", status:"new" },
    { id:"k4", carrier:"サンプル建材株式会社", emitter:"みらい建設株式会社", site:"解体現場",
      waste:["畳"], car:"大型アームロール", units:1, range:"each", from:"2026-06-27", to:"2026-06-28",
      slots:["06-27 12:00まで","06-28 15:00まで"], note:"日によって締め時刻が違います", by:"みらい建設 山田太郎", at:"06-24 16:20", status:"fixed" },
  ];
  const RANGE_LABEL = { day:"終日可", time:"時間帯指定", span:"期間内どこか", each:"日ごとに指定" };

  window.DATA = { WASTE, applyQueue, confirmed, week, CAP, board,
    carriers, emitters, factories, drivers, vehicles, sites, users, regulars, cancels, haulerRes, announcements, monthHauler,
    notifs, chatThreads, companies, accounts, vehicleTypes, mails, mailGroups, calNotices,
    items, limitDefs, LIMIT_UNITS, collectRes, RANGE_LABEL, saveMaster, resetMaster };

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

    // 回収予約の希望日時グリッド用（受入要望 #1）：日付＋時刻から空き状況を決定的に返す
    // ok=空きあり / few=残りわずか / ng=不可。デモ用の擬似値で、本番は実際の受入残から算出する。
    slot(dateStr, time) {
      const d = new Date(dateStr + "T00:00:00");
      if (d.getDay() === 0) return "ng";                       // 日曜は休業
      let h = 2166136261; const s = dateStr + time;
      for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
      const n = (h >>> 0) % 100;
      if (n < 12) return "ng";
      if (n < 22) return "few";
      return "ok";
    },
    slotMark(st) { return st === "ng" ? "×" : st === "few" ? "△" : "○"; },

    // "2026-06-26" → "6/26(金)"
    md(dateStr) {
      const d = new Date(dateStr + "T00:00:00");
      return `${d.getMonth() + 1}/${d.getDate()}(${["日","月","火","水","木","金","土"][d.getDay()]})`;
    },
    addDays(dateStr, n) {
      const d = new Date(dateStr + "T00:00:00"); d.setDate(d.getDate() + n);
      return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    },

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
