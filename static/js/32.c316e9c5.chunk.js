(this["webpackJsonpproject-finally"]=this["webpackJsonpproject-finally"]||[]).push([[32],{2453:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r(27),o=r(16),c=r(17),s=r.n(c),i=r(21),d=r(15),u=r(439),l=r(120),h=r(705),b=r(22),j=r(179),g=r.n(j),v=r(5),f=r(2492),m=r(70),p=r(0),x=Object(v.a)(f.a)((function(e){var t=e.theme;return{boxShadow:"none",textAlign:"center",padding:t.spacing(5,0),color:t.palette.primary.darker,backgroundColor:"mediumturquoise"}})),O=Object(v.a)("div")((function(e){var t=e.theme;return{margin:"auto",display:"flex",borderRadius:"50%",alignItems:"center",width:t.spacing(8),height:t.spacing(8),justifyContent:"center",marginBottom:t.spacing(3),color:"#fff",backgroundImage:"linear-gradient(135deg, gray 0%, mediumturquoise 100%)"}}));function y(e){var t=e.numberOrdersToday;return Object(p.jsxs)(x,{children:[Object(p.jsx)(O,{children:Object(p.jsx)(g.a,{width:24,height:24})}),Object(p.jsx)(l.a,{variant:"h3",children:Object(m.e)(t)}),Object(p.jsx)(l.a,{variant:"subtitle2",sx:{opacity:.72},children:"\u0110\u01a1n H\xe0ng H\xf4m Nay"})]})}y.defaultProps={numberOrdersToday:0};var T=r(491),k=r.n(T),w=Object(v.a)(f.a)((function(e){var t=e.theme;return{boxShadow:"none",textAlign:"center",padding:t.spacing(5,0),color:t.palette.primary.darker,backgroundColor:"orangered"}})),S=Object(v.a)("div")((function(e){var t=e.theme;return{margin:"auto",display:"flex",borderRadius:"50%",alignItems:"center",width:t.spacing(8),height:t.spacing(8),justifyContent:"center",marginBottom:t.spacing(3),color:"#fff",backgroundImage:"linear-gradient(135deg, #fff 0%, orangered 100%)"}}));function M(e){var t=e.numberFollow;return Object(p.jsxs)(w,{children:[Object(p.jsx)(S,{children:Object(p.jsx)(k.a,{width:24,height:24})}),Object(p.jsx)(l.a,{variant:"h3",children:Object(m.e)(t)}),Object(p.jsx)(l.a,{variant:"subtitle2",sx:{opacity:.72},children:"L\u01b0\u1ee3t Theo D\xf5i"})]})}M.defaultProps={numberFollow:0};var P=r(907),C=r.n(P),B=Object(v.a)(f.a)((function(e){var t=e.theme;return{boxShadow:"none",textAlign:"center",padding:t.spacing(5,0),color:t.palette.primary.darker,backgroundColor:"lightseagreen"}})),H=Object(v.a)("div")((function(e){var t=e.theme;return{margin:"auto",display:"flex",borderRadius:"50%",alignItems:"center",width:t.spacing(8),height:t.spacing(8),justifyContent:"center",marginBottom:t.spacing(3),color:"#fff",backgroundImage:"linear-gradient(135deg, #fff 0%, lightseagreen 100%)"}}));function _(e){var t=e.rankStore;return Object(p.jsxs)(B,{children:[Object(p.jsx)(H,{children:Object(p.jsx)(C.a,{width:24,height:24})}),Object(p.jsx)(l.a,{variant:"h3",children:Object(m.e)(t)}),Object(p.jsx)(l.a,{variant:"subtitle2",sx:{opacity:.72},children:"Top c\u1eeda h\xe0ng"})]})}_.defaultProps={rankStore:0};var A=r(594),F=r.n(A),I=Object(v.a)(f.a)((function(e){var t=e.theme;return{boxShadow:"none",textAlign:"center",padding:t.spacing(5,0),color:t.palette.primary.darker,backgroundColor:"yellow"}})),R=Object(v.a)("div")((function(e){var t=e.theme;return{margin:"auto",display:"flex",borderRadius:"50%",alignItems:"center",width:t.spacing(8),height:t.spacing(8),justifyContent:"center",marginBottom:t.spacing(3),color:"#fff",backgroundImage:"linear-gradient(135deg, gray 0%, yellow 100%)"}}));function z(e){var t=e.revenueToday;return Object(p.jsxs)(I,{children:[Object(p.jsx)(R,{children:Object(p.jsx)(F.a,{width:24,height:24})}),Object(p.jsx)(l.a,{variant:"h3",children:Object(m.c)(t)}),Object(p.jsx)(l.a,{variant:"subtitle2",sx:{opacity:.72},children:"Doanh Thu H\xf4m nay"})]})}z.defaultProps={revenueToday:0};var D=r(585),V=r(706);D.e.register(D.d,D.i,D.b,D.n,D.o,D.g);var G={responsive:!0,plugins:{legend:{position:"top"},title:{display:!1,text:"Chart.js Bar Chart"}}};function L(e){var t=e.revenueByMonth,r={labels:null===t||void 0===t?void 0:t.labels,datasets:[{label:"Doanh thu theo th\xe1ng",data:null===t||void 0===t?void 0:t.datasets,backgroundColor:"rgba(255, 99, 132, 0.5)"}]};return Object(p.jsx)(V.a,{options:G,data:r})}L.defaultProps={revenueByMonth:null},D.e.register(D.d,D.i,D.b,D.n,D.o,D.g);var q={plugins:{title:{display:!1,text:"Chart.js Bar Chart - Stacked"}},responsive:!0,scales:{x:{stacked:!0},y:{stacked:!0}}},J=["Th\xe1ng 1","Th\xe1ng 2","Th\xe1ng 3","Th\xe1ng 4","Th\xe1ng 5","Th\xe1ng 6","Th\xe1ng 7","Th\xe1ng 8","Th\xe1ng 9","Th\xe1ng 10","Th\xe1ng 11","Th\xe1ng 12"];function E(e){var t=e.revenueProductHotTrend,r={labels:J,datasets:t||[]};return Object(p.jsx)(V.a,{options:q,data:r})}E.defaultProps={revenueProductHotTrend:null};var N=function(){var e=Object(b.c)((function(e){return e.auth.user})),t=Object(n.useState)(null),r=Object(d.a)(t,2),a=r[0],c=r[1],j=Object(n.useState)(null),g=Object(d.a)(j,2),v=g[0],f=g[1],m=Object(n.useState)({numberFollow:0,numberOrdersToday:0,revenueToday:0,rankStore:0}),x=Object(d.a)(m,2),O=x[0],T=x[1];Object(n.useEffect)((function(){Promise.all([k(),w(),S()])}),[]);var k=function(){var t=Object(i.a)(s.a.mark((function t(){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.a.statisticsGeneralOfStore(e.store_id);case 3:(r=t.sent).success&&T({numberFollow:r.data.numberFollow,numberOrdersToday:r.data.numberOrdersToday,revenueToday:r.data.revenueToday,rankStore:r.data.rankStore}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("error",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),w=function(){var t=Object(i.a)(s.a.mark((function t(){var r,n,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.a.statisticsRevenueMonthOfStore(e.store_id);case 3:(r=t.sent).success&&(n=Array(),a=Array(),Object(o.a)(r.data).map((function(e){n.push(e.month_name),a.push(e.revenue)})),f({labels:n,datasets:a})),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("error",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),S=function(){var t=Object(i.a)(s.a.mark((function t(){var r,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.a.statisticsProductHotTrendByMonth(e.store_id);case 3:(r=t.sent).success&&(n=Object(o.a)(r.data).map((function(e){return{label:e.label,data:e.data,backgroundColor:"#"+Math.floor(16777215*Math.random()).toString(16)}})),c(n)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("error",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return Object(p.jsxs)(u.a,{container:!0,spacing:3,children:[console.log("revenueProductHotTrend",a),Object(p.jsx)(u.a,{item:!0,xs:12,sm:6,md:3,children:Object(p.jsx)(M,{numberFollow:O.numberFollow})}),Object(p.jsx)(u.a,{item:!0,xs:12,sm:6,md:3,children:Object(p.jsx)(_,{rankStore:O.rankStore})}),Object(p.jsx)(u.a,{item:!0,xs:12,sm:6,md:3,children:Object(p.jsx)(y,{numberOrdersToday:O.numberOrdersToday})}),Object(p.jsx)(u.a,{item:!0,xs:12,sm:6,md:3,children:Object(p.jsx)(z,{revenueToday:O.revenueToday})}),Object(p.jsxs)(u.a,{item:!0,xs:12,sm:12,md:12,sx:{margin:"15px 0"},children:[Object(p.jsx)(l.a,{variant:"h5",gutterBottom:!0,component:"div",children:"Doanh Thu Theo Th\xe1ng"}),Object(p.jsx)(L,{revenueByMonth:v})]}),Object(p.jsxs)(u.a,{item:!0,xs:12,sm:12,md:12,sx:{margin:"15px 0"},children:[Object(p.jsx)(l.a,{variant:"h5",gutterBottom:!0,component:"div",children:"S\u1ea3n Ph\u1ea9m Hot Trend"}),Object(p.jsx)(E,{revenueProductHotTrend:a})]}),Object(p.jsx)(u.a,{item:!0,xs:12,sm:6,md:6}),Object(p.jsx)(u.a,{item:!0,xs:12,sm:6,md:6})]})};t.default=function(e){var t=Object(a.i)();return Object(p.jsx)(a.d,{children:Object(p.jsx)(a.b,{path:"".concat(t.url),component:N})})}},491:function(e,t,r){"use strict";var n=r(19);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(20)),o=r(0),c=(0,a.default)((0,o.jsx)("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite");t.default=c},594:function(e,t,r){"use strict";var n=r(19);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(20)),o=r(0),c=(0,a.default)((0,o.jsx)("path",{d:"M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"}),"AttachMoney");t.default=c},705:function(e,t,r){"use strict";var n=r(23),a={statisticsGeneralOfStore:function(e){var t="/dash-board/general/store/".concat(e);return n.a.get(t)},statisticsRevenueMonthOfStore:function(e){var t="/dash-board/revenue-month/store/".concat(e);return n.a.get(t)},statisticsProductHotTrendByMonth:function(e){var t="/dash-board/product-trend/store/".concat(e);return n.a.get(t)},statisticsGeneralOfAdmin:function(){return n.a.get("/dash-board/general/admin")},statisticsRevenueStoresByMonth:function(){return n.a.get("/dash-board/revenue-store-month")}};t.a=a},907:function(e,t,r){"use strict";var n=r(19);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(20)),o=r(0),c=(0,a.default)((0,o.jsx)("path",{d:"M17 10.43V2H7v8.43c0 .35.18.68.49.86l4.18 2.51-.99 2.34-3.41.29 2.59 2.24L9.07 22 12 20.23 14.93 22l-.78-3.33 2.59-2.24-3.41-.29-.99-2.34 4.18-2.51c.3-.18.48-.5.48-.86zm-4 1.8-1 .6-1-.6V3h2v9.23z"}),"MilitaryTech");t.default=c}}]);
//# sourceMappingURL=32.c316e9c5.chunk.js.map