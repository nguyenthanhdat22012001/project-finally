(this["webpackJsonpproject-finally"]=this["webpackJsonpproject-finally"]||[]).push([[28],{2410:function(e,t,n){},2467:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(27),s=n(17),i=n(16),j=n.n(i),d=n(21),o=n(15),u=n(148),l=n(22),b=n(438),h=n(427),O=n(12),p=n(358),x=n(560),f=n.n(x),m=n(377),g=n(70),v=n(14),y=n(5),w=n(85),_=n(363),S=n(311),k=n(362),M=n(706),C=n.n(M),z=n(290),N=n(143),P=n(0),T=Object(y.a)((function(e){return Object(P.jsx)(S.a,Object(v.a)({elevation:0,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"}},e))}))((function(e){var t=e.theme;return{"& .MuiPaper-root":{borderRadius:6,marginTop:t.spacing(1),minWidth:180,color:"light"===t.palette.mode?"rgb(55, 65, 81)":t.palette.grey[300],boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px","& .MuiMenu-list":{padding:"4px 0"},"& .MuiMenuItem-root":{"& .MuiSvgIcon-root":{fontSize:18,color:t.palette.text.secondary,marginRight:t.spacing(1.5)},"&:active":{backgroundColor:Object(w.a)(t.palette.primary.main,t.palette.action.selectedOpacity)}}}}}));H.defaultProps={statusObj:null,getOrderById:null};var I=["H\u1ee7y \u0111\u01a1n","Ch\u1edd x\xe1c nh\u1eadn","\u0110\xe3 x\xe1c nh\u1eadn","\u0110ang giao h\xe0ng","\u0110\xe3 giao h\xe0ng"];function H(e){var t=e.statusObj,n=e.getOrderById,a=r.a.useRef(null),s=r.a.useState(!1),i=Object(o.a)(s,2),l=i[0],b=i[1],h=r.a.useState(0),O=Object(o.a)(h,2),p=O[0],x=O[1],f=r.a.useState(!1),m=Object(o.a)(f,2),g=m[0],v=m[1];Object(c.useEffect)((function(){x(t?t.status:0)}),[t]);var y=function(){b((function(e){return!e}))},w=function(){var e=Object(d.a)(j.a.mark((function e(t,n,c){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("order_id",c),e.next=3,S(c,n);case 3:x(n),b(!1);case 5:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),S=function(){var e=Object(d.a)(j.a.mark((function e(t,c){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,v(!0),r={status:c},e.next=5,u.a.updateStatusOrder(t,r);case 5:if(!e.sent.success||!n){e.next=9;break}return e.next=9,n();case 9:v(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log("error",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(P.jsxs)("div",{children:[g&&Object(P.jsx)(N.a,{})," ",Object(P.jsx)(_.a,{size:"small",ref:a,id:"demo-customized-button","aria-controls":"demo-customized-menu","aria-haspopup":"true","aria-expanded":l?"true":void 0,variant:"contained",disabled:p<2||4===p,onClick:y,endIcon:Object(P.jsx)(C.a,{}),children:I[p]}),Object(P.jsx)(z.a,{onClickAway:function(e){a.current&&a.current.contains(e.target)||b(!1)},children:Object(P.jsx)(T,{id:"demo-customized-menu",MenuListProps:{"aria-labelledby":"demo-customized-button"},anchorEl:a.current,open:l,onClose:y,children:I.map((function(e,n){if(1!==n&&2!==n)return Object(P.jsx)(k.a,{selected:n===p,onClick:function(e){return w(e,n,t.id)},children:e},e)}))})})]})}B.defaultProps={orders:[]};function B(e){var t=e.orders,n=[{field:"id",headerName:"M\xe3 \u0111\u01a1n",width:90},{field:"name",headerName:"H\u1ecd t\xean",width:150},{field:"phone",headerName:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i",width:150},{field:"totalprice",headerName:"T\u1ed5ng ti\u1ec1n",width:150,renderCell:function(e){return Object(P.jsx)("div",{children:Object(g.c)(e.value)})}},{field:"created_at",headerName:"Ng\xe0y \u0111\u1eb7t",width:150,renderCell:function(e){return Object(P.jsx)("div",{children:Object(m.b)(e.value)})}},{field:"statusObj",headerName:"",width:180,renderCell:function(e){return Object(P.jsx)(H,{statusObj:e.value})}},{field:"or_action",headerName:"",width:90,renderCell:function(e){return Object(P.jsx)(O.b,{to:"".concat("/admin/order","/").concat(e.value),children:Object(P.jsx)(p.a,{"aria-label":"",color:"inherit",children:Object(P.jsx)(f.a,{})})})}}];return Object(P.jsx)(b.a,{container:!0,spacing:3,children:Object(P.jsx)(b.a,{item:!0,xs:12,sm:12,md:12,children:Object(P.jsx)("div",{style:{height:500,width:"100%"},children:Object(P.jsx)(h.a,{rows:t,columns:n,pageSize:10,rowsPerPageOptions:[10],disableSelectionOnClick:!0})})})})}var D=B,E=n(387);var A=function(){Object(l.c)((function(e){return e.auth.user}));var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),i=Object(o.a)(a,2),b=i[0],h=i[1];Object(c.useEffect)(Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:case"end":return e.stop()}}),e)}))),[]);var O=function(){var e=Object(d.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n&&r(!1),e.next=4,u.a.getOrdersAdmin();case 4:(t=e.sent).success&&(c=Object(s.a)(t.data).map((function(e){return e.or_action=e.id,e.statusObj={id:e.id,status:e.status},e})),h(c)),r(!0),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("error",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(P.jsx)("div",{children:n?Object(P.jsx)(D,{orders:b}):Object(P.jsx)(E.a,{})})},R=n(120);n(2410);var V=function(e){var t=Object(a.h)().id,n=Object(c.useState)(null),r=Object(o.a)(n,2),i=r[0],l=r[1];Object(c.useEffect)(Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:case"end":return e.stop()}}),e)}))),[t]);var h=function(){var e=Object(d.a)(j.a.mark((function e(){var n,c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.getOrderById(t);case 3:(n=e.sent).success&&(c=Object(s.a)(n.data.sub_order).map((function(e){return 0===e.status?e.name_status="\u0110\xe3 h\u1ee7y":1===e.status?e.name_status="\u0110ang ch\u1edd x\xe1c nh\u1eadn":2===e.status?e.name_status="\u0110\xe3 x\xe1c nh\u1eadn":3===e.status?e.name_status="\u0110ang giao h\xe0ng":e.name_status="\u0110\xe3 giao h\xe0ng",e})),r=Object(v.a)(Object(v.a)({},n.data),{},{statusObj:{id:n.data.id,status:n.data.status},sub_order:c}),l(r)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("error",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(P.jsxs)(b.a,{container:!0,spacing:3,children:[Object(P.jsx)(b.a,{item:!0,xs:12,children:Object(P.jsxs)(b.a,{container:!0,justifyContent:"space-evenly",children:[Object(P.jsxs)(R.a,{variant:"h5",children:["M\xe3 \u0110\u01a1n H\xe0ng #",i?i.id:""]}),Object(P.jsx)(H,{statusObj:i?i.statusObj:null,getOrderById:h})]})}),Object(P.jsx)(b.a,{item:!0,xs:12,children:Object(P.jsx)("div",{className:"table-info",children:Object(P.jsxs)("table",{cellSpacing:"0",children:[Object(P.jsxs)("tr",{children:[Object(P.jsxs)("td",{children:[Object(P.jsx)("span",{children:"H\u1ecd t\xean:"}),Object(P.jsx)("span",{children:i?i.name:""})]}),Object(P.jsxs)("td",{children:[Object(P.jsx)("span",{children:"\u0110\u1ecba ch\u1ec9:"}),Object(P.jsx)("span",{children:i?i.address:""})]})]}),Object(P.jsxs)("tr",{children:[Object(P.jsxs)("td",{children:[Object(P.jsx)("span",{children:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i:"}),Object(P.jsx)("span",{children:i?i.phone:""})]}),Object(P.jsxs)("td",{children:[Object(P.jsx)("span",{children:"Ng\xe0y \u0111\u1eb7t:"}),Object(P.jsx)("span",{children:i?Object(m.b)(i.created_at):""})]})]}),Object(P.jsxs)("tr",{children:[Object(P.jsxs)("td",{children:[Object(P.jsx)("span",{children:"Ghi ch\xfa:"}),Object(P.jsx)("span",{children:i?i.note:""})]}),Object(P.jsxs)("td",{children:[Object(P.jsxs)("p",{children:[Object(P.jsxs)("span",{children:["Voucher ",i?i.coupon_sku:"",":"]}),Object(P.jsx)("span",{children:i?Object(g.c)(i.coupon_price):""})]}),Object(P.jsxs)("p",{children:[Object(P.jsx)("span",{children:"Ph\xed ship:"}),Object(P.jsx)("span",{children:i?i.shippingprice:""})]}),Object(P.jsxs)("p",{children:[Object(P.jsx)("span",{children:"S\u1ed1 l\u01b0\u1ee3ng:"}),Object(P.jsx)("span",{children:i?i.totalQuantity:0})]}),Object(P.jsxs)("p",{children:[Object(P.jsx)("span",{children:"T\u1ed5ng ti\u1ec1n:"}),Object(P.jsx)("span",{children:i?Object(g.c)(i.totalprice):0})]}),Object(P.jsxs)("p",{children:[Object(P.jsx)("span",{children:"Ph\u01b0\u01a1ng th\u1ee9c thanh to\xe1n:"}),Object(P.jsx)("span",{children:i?i.payment.name:""})]})]})]})]})})}),Object(P.jsx)(b.a,{item:!0,xs:12,children:i&&Object(s.a)(i.sub_order).length>0?Object(s.a)(i.sub_order).map((function(e){return Object(P.jsxs)("div",{className:"table-order",children:[Object(P.jsxs)("div",{className:"header",children:["M\xe3 \u0111\u01a1n #",e.id]}),Object(P.jsxs)("table",{cellSpacing:"0",children:[Object(P.jsxs)("tr",{children:[Object(P.jsx)("th",{children:"H\xecnh \u1ea3nh"}),Object(P.jsx)("th",{children:"T\xean s\u1ea3n ph\u1ea9m"}),Object(P.jsx)("th",{children:"Gi\xe1"}),Object(P.jsx)("th",{children:"S\u1ed1 l\u01b0\u1ee3ng"}),Object(P.jsx)("th",{children:"th\xe0nh ti\u1ec1n"})]}),Object(s.a)(i.product).length>0?Object(s.a)(i.product).map((function(t){if(t.order_id===e.id)return Object(P.jsxs)("tr",{children:[Object(P.jsx)("td",{children:Object(P.jsx)("img",{src:t.product_img,alt:""})}),Object(P.jsxs)("td",{children:[Object(P.jsx)("p",{children:t.product_name}),Object(P.jsxs)("p",{style:{color:"gray"},children:["x ",t.attribute_name]})]}),Object(P.jsx)("td",{children:Object(g.c)(t.product_price)}),Object(P.jsx)("td",{children:t.amount}),Object(P.jsxs)("td",{children:[Object(g.c)(t.product_price*t.amount)," "]})]},t.id)})):"",Object(P.jsx)("tfoot",{children:Object(P.jsxs)("tr",{children:[Object(P.jsxs)("td",{colSpan:2,children:[Object(s.a)(i.stores).length>0?Object(s.a)(i.stores).map((function(t){if(e.store_id===t.id)return Object(P.jsxs)("p",{children:[Object(P.jsx)("span",{children:"T\xean c\u1eeda h\xe0ng:"}),Object(P.jsx)("span",{children:t.name})]},t.id)})):"",Object(s.a)(i.stores).length>0?Object(s.a)(i.stores).map((function(t){if(e.store_id===t.id)return Object(P.jsxs)("p",{children:[Object(P.jsx)("span",{children:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i:"}),Object(P.jsx)("span",{children:t.phone})]},t.id)})):"",Object(s.a)(i.stores).length>0?Object(s.a)(i.stores).map((function(t){if(e.store_id===t.id)return Object(P.jsxs)("p",{children:[Object(P.jsx)("span",{children:"\u0110\u1ecba ch\u1ec9 c\u1eeda h\xe0ng:"}),Object(P.jsx)("span",{children:t.address})]},t.id)})):"",Object(P.jsxs)("p",{children:[Object(P.jsx)("span",{children:"Tr\u1ea1ng th\xe1i \u0111\u01a1n h\xe0ng:"}),Object(P.jsx)("span",{children:e.name_status})]})]}),Object(P.jsxs)("td",{colSpan:3,children:[e.coupon_sku?Object(P.jsxs)("p",{children:[Object(P.jsxs)("span",{children:["Voucher ",e.coupon_sku,":"]}),Object(P.jsx)("span",{children:Object(g.c)(e.coupon_price)})]}):"",Object(P.jsxs)("p",{children:[Object(P.jsx)("span",{children:"S\u1ed1 l\u01b0\u1ee3ng:"}),Object(P.jsx)("span",{children:e.totalQuantity})]}),Object(P.jsxs)("p",{children:[Object(P.jsx)("span",{children:"T\u1ed5ng ti\u1ec1n:"}),Object(P.jsx)("span",{children:Object(g.c)(e.totalprice)})]})]})]})})]})]},e.id)})):""})]})};t.default=function(e){var t=Object(a.i)();return Object(P.jsxs)(a.d,{children:[Object(P.jsx)(a.b,{exact:!0,path:"".concat(t.url),component:A}),Object(P.jsx)(a.b,{path:"".concat(t.url,"/:id"),component:V})]})}},377:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return j}));var c=n(755),r=n(756),a=n(408);function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=Object(c.a)(e,"yyyy-MM-dd",{timeZone:"UTC"});return t}function i(e){var t=new Date(e);return Object(c.a)(t,"dd/MM/yyyy",{timeZone:"UTC"})}function j(e){return Object(r.a)(new Date(e),{locale:a.a,addSuffix:!0})}},387:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var c=n(356),r=n(2477),a=n(0);function s(){return Object(a.jsx)(c.a,{sx:{width:"100%"},children:Object(a.jsx)(r.a,{sx:{height:400,width:"100%"},variant:"rect",animation:"wave"})})}},560:function(e,t,n){"use strict";var c=n(19);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(20)),a=n(0),s=(0,r.default)((0,a.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");t.default=s},706:function(e,t,n){"use strict";var c=n(19);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(20)),a=n(0),s=(0,r.default)((0,a.jsx)("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}),"KeyboardArrowDown");t.default=s}}]);
//# sourceMappingURL=28.5b3d7095.chunk.js.map