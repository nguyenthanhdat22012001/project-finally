(this["webpackJsonpproject-finally"]=this["webpackJsonpproject-finally"]||[]).push([[29],{2462:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(25),i=n(15),s=n(17),o=n.n(s),u=n(21),d=n(14),l=n(146),j=n(28),b=n(456),p=n(425),O=n(12),h=n(356),x=n(487),f=n.n(x),v=n(376),m=n(70),g=n(16),y=n(5),w=n(85),S=n(361),k=n(309),M=n(360),_=n(705),z=n.n(_),C=n(291),N=n(375),P=n(0),I=Object(y.a)((function(e){return Object(P.jsx)(k.a,Object(g.a)({elevation:0,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"}},e))}))((function(e){var t=e.theme;return{"& .MuiPaper-root":{borderRadius:6,marginTop:t.spacing(1),minWidth:180,color:"light"===t.palette.mode?"rgb(55, 65, 81)":t.palette.grey[300],boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px","& .MuiMenu-list":{padding:"4px 0"},"& .MuiMenuItem-root":{"& .MuiSvgIcon-root":{fontSize:18,color:t.palette.text.secondary,marginRight:t.spacing(1.5)},"&:active":{backgroundColor:Object(w.a)(t.palette.primary.main,t.palette.action.selectedOpacity)}}}}}));D.defaultProps={statusObj:null};var T=["H\u1ee7y \u0111\u01a1n","Ch\u1edd x\xe1c nh\u1eadn","\u0110\xe3 x\xe1c nh\u1eadn","\u0110ang giao h\xe0ng","\u0110\xe3 giao h\xe0ng"];function D(e){var t=e.statusObj,n=c.a.useRef(null),a=c.a.useState(!1),i=Object(d.a)(a,2),s=i[0],j=i[1],b=c.a.useState(0),p=Object(d.a)(b,2),O=p[0],h=p[1],x=c.a.useState(!1),f=Object(d.a)(x,2),v=f[0],m=f[1];Object(r.useEffect)((function(){h(t?t.status:0)}),[t]);var g=function(){j((function(e){return!e}))},y=function(){var e=Object(u.a)(o.a.mark((function e(n,r){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(t.id,r);case 2:h(r),j(!1);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),w=function(){var e=Object(u.a)(o.a.mark((function e(t,n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!0),r={status:n},e.next=5,l.a.updateStatusOrder(t,r);case 5:m(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("error",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(P.jsxs)("div",{children:[v&&Object(P.jsx)(N.a,{})," ",Object(P.jsx)(S.a,{size:"small",ref:n,id:"demo-customized-button","aria-controls":"demo-customized-menu","aria-haspopup":"true","aria-expanded":s?"true":void 0,variant:"contained",disabled:0===O||O>=2,onClick:g,endIcon:Object(P.jsx)(z.a,{}),children:T[O]}),Object(P.jsx)(C.a,{onClickAway:function(e){n.current&&n.current.contains(e.target)||j(!1)},children:Object(P.jsx)(I,{id:"demo-customized-menu",MenuListProps:{"aria-labelledby":"demo-customized-button"},anchorEl:n.current,open:s,onClose:g,children:T.map((function(e,t){if(3!==t&&4!==t)return Object(P.jsx)(M.a,{selected:t===O,onClick:function(e){return y(e,t)},children:e},e)}))})})]})}E.defaultProps={orders:[]};function E(e){var t=e.orders,n=[{field:"id",headerName:"M\xe3 \u0111\u01a1n",width:90},{field:"totalQuantity",headerName:"S\u1ed1 l\u01b0\u1ee3ng",width:110},{field:"totalprice",headerName:"T\u1ed5ng ti\u1ec1n",width:150,renderCell:function(e){return Object(P.jsx)("div",{children:Object(m.d)(e.value)})}},{field:"created_at",headerName:"Ng\xe0y \u0111\u1eb7t",width:150,renderCell:function(e){return Object(P.jsx)("div",{children:Object(v.b)(e.value)})}},{field:"statusObj",headerName:"",width:200,renderCell:function(e){return Object(P.jsx)(D,{statusObj:e.value})}},{field:"or_action",headerName:"",width:150,renderCell:function(e){return Object(P.jsx)(O.b,{to:"".concat("/seller/order","/").concat(e.value),children:Object(P.jsx)(h.a,{"aria-label":"",color:"inherit",children:Object(P.jsx)(f.a,{})})})}}];return Object(P.jsx)(b.a,{container:!0,spacing:3,children:Object(P.jsx)(b.a,{item:!0,xs:12,sm:12,md:12,children:Object(P.jsx)("div",{style:{height:400,width:"100%"},children:Object(P.jsx)(p.a,{rows:t,columns:n,pageSize:5,rowsPerPageOptions:[5],disableSelectionOnClick:!0})})})})}var R=E;var A=function(){var e=Object(j.c)((function(e){return e.auth.user})),t=Object(r.useState)([]),n=Object(d.a)(t,2),c=n[0],a=n[1];Object(r.useEffect)(Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s();case 2:case"end":return e.stop()}}),e)}))),[]);var s=function(){var t=Object(u.a)(o.a.mark((function t(){var n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.a.getOrdersByStoreId(e.store_id);case 3:(n=t.sent).success&&(r=Object(i.a)(n.data).map((function(e){return e.or_action=e.id,e.statusObj={id:e.id,status:e.status},e})),a(r)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("error",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return Object(P.jsx)("div",{children:Object(P.jsx)(R,{orders:c})})},B=n(121);n(917);var H=function(){var e=Object(a.h)().id,t=Object(r.useState)(null),n=Object(d.a)(t,2),c=n[0],s=n[1];Object(r.useEffect)(Object(u.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j(e);case 2:case"end":return t.stop()}}),t)}))),[e]);var j=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.getOrderById(t);case 3:(n=e.sent).success&&(r=Object(g.a)(Object(g.a)({},n.data),{},{statusObj:{id:n.data.id,status:n.data.status}}),console.log("newData",r),s(r)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("error",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(P.jsxs)(b.a,{container:!0,spacing:3,children:[Object(P.jsx)(b.a,{item:!0,xs:12,sm:12,md:12,children:Object(P.jsxs)(b.a,{container:!0,justifyContent:"space-between",children:[Object(P.jsxs)(B.a,{variant:"subtitle2",children:["Ng\xe0y \u0111\u1eb7t ",c?Object(v.b)(c.created_at):""]}),Object(P.jsx)(D,{statusObj:c?c.statusObj:null})]})}),Object(P.jsx)(b.a,{item:!0,xs:12,children:Object(P.jsxs)("div",{className:"table-order",children:[Object(P.jsxs)("div",{className:"header",children:["M\xe3 \u0111\u01a1n #",c?c.id:""]}),Object(P.jsxs)("table",{cellSpacing:"0",children:[Object(P.jsxs)("tr",{children:[Object(P.jsx)("th",{children:"H\xecnh \u1ea3nh"}),Object(P.jsx)("th",{children:"T\xean s\u1ea3n ph\u1ea9m"}),Object(P.jsx)("th",{children:"Gi\xe1"}),Object(P.jsx)("th",{children:"S\u1ed1 l\u01b0\u1ee3ng"}),Object(P.jsx)("th",{children:"th\xe0nh ti\u1ec1n"})]}),c&&Object(i.a)(c.product).length>0?Object(i.a)(c.product).map((function(e){return Object(P.jsxs)("tr",{children:[Object(P.jsx)("td",{children:Object(P.jsx)("img",{src:e.product_img,alt:""})}),Object(P.jsxs)("td",{children:[Object(P.jsx)("p",{children:e.product_name}),Object(P.jsxs)("p",{style:{color:"gray"},children:["x ",e.attribute_name]})]}),Object(P.jsx)("td",{children:Object(m.d)(e.product_price)}),Object(P.jsx)("td",{children:e.amount}),Object(P.jsxs)("td",{children:[Object(m.d)(e.product_price*e.amount)," "]})]},e.id)})):"",Object(P.jsxs)("tfoot",{children:[c&&c.coupon_sku?Object(P.jsxs)("tr",{children:[Object(P.jsx)("td",{colSpan:2}),Object(P.jsxs)("td",{colSpan:2,children:["Voucher ",c.coupon_sku]}),Object(P.jsx)("td",{children:Object(m.d)(c.coupon_price)})]}):"",Object(P.jsxs)("tr",{children:[Object(P.jsx)("td",{colSpan:2}),Object(P.jsx)("td",{colSpan:2,children:"T\u1ed5ng s\u1ed1 l\u01b0\u1ee3ng"}),Object(P.jsx)("td",{children:c?c.totalQuantity:0})]}),Object(P.jsxs)("tr",{children:[Object(P.jsx)("td",{colSpan:2}),Object(P.jsx)("td",{colSpan:2,children:"T\u1ed5ng ti\u1ec1n"}),Object(P.jsx)("td",{children:Object(m.d)(c?c.totalprice:0)})]})]})]})]})})]})};t.default=function(e){var t=Object(a.i)();return Object(P.jsxs)(a.d,{children:[Object(P.jsx)(a.b,{exact:!0,path:"".concat(t.url),component:A}),Object(P.jsx)(a.b,{path:"".concat(t.url,"/:id"),component:H})]})}},375:function(e,t,n){"use strict";n(1);var r=n(352),c=n(489),a=n(0);t.a=function(e){return Object(a.jsx)(r.a,{sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+1}},open:!0,children:Object(a.jsx)(c.a,{color:"secondary"})})}},376:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return o}));var r=n(755),c=n(756),a=n(409);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=Object(r.a)(e,"yyyy-MM-dd",{timeZone:"UTC"});return t}function s(e){var t=new Date(e);return Object(r.a)(t,"dd/MM/yyyy",{timeZone:"UTC"})}function o(e){return Object(c.a)(new Date(e),{locale:a.a,addSuffix:!0})}},487:function(e,t,n){"use strict";var r=n(19);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(n(20)),a=n(0),i=(0,c.default)((0,a.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");t.default=i},705:function(e,t,n){"use strict";var r=n(19);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(n(20)),a=n(0),i=(0,c.default)((0,a.jsx)("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}),"KeyboardArrowDown");t.default=i},917:function(e,t,n){}}]);
//# sourceMappingURL=29.60bf5f22.chunk.js.map