(this["webpackJsonpproject-finally"]=this["webpackJsonpproject-finally"]||[]).push([[36],{2474:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return G}));var r=t(17),a=t.n(r),i=t(21),o=t(14),s=t(1),c=t.n(s),l=t(297),d=t(344),u=t(355),h=t(354),m=t(456),j=t(488),p=t.n(j),b=t(121),g=t(213),f=t(358),x=t(181),O=t.n(x),k=t(356),w=t(2410),v=t(25),y=t(57),q=t(28),V=t(74),S=t.p+"static/media/img-login.251a0f43.webp",I=t(16),P=t(487),_=t.n(P),K=t(2411),z=t.n(K),C=t(2482),N=t(2476),F=t(2485),L=t(2484),W=t(2473),X=t(2483),D=t(12),E=t(361),H=t(379),J=t(383),M=t(424),R=t(0);var T=function(e){var n,t,r=e.onHandleLogin,a=c.a.useState({weightRange:"",showPassword:!1}),i=Object(o.a)(a,2),s=i[0],l=i[1],d=Object(H.d)({resolver:Object(J.a)(M.c)}),u=d.register,j=d.handleSubmit,p=d.formState.errors;return Object(R.jsxs)(h.a,{component:"form",noValidate:!0,onSubmit:j(r),sx:{mt:1},children:[Object(R.jsx)(X.a,Object(I.a)(Object(I.a)({margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email",name:"email",autoComplete:"email",autoFocus:!0},u("email")),{},{helperText:p.email&&"".concat(null===(n=p.email)||void 0===n?void 0:n.message),error:p.email&&!0})),Object(R.jsxs)(C.a,{fullWidth:!0,variant:"outlined",sx:{marginTop:"16px"},children:[Object(R.jsx)(W.a,{htmlFor:"outlined-adornment-password",color:p.password&&"error",children:"M\u1eadt kh\u1ea9u"}),Object(R.jsx)(N.a,Object(I.a)(Object(I.a)({},u("password")),{},{he:!0,error:p.password&&!0,id:"outlined-adornment-password",type:s.showPassword?"text":"password",endAdornment:Object(R.jsx)(F.a,{position:"end",children:Object(R.jsx)(k.a,{"aria-label":"toggle password visibility",onClick:function(){l(Object(I.a)(Object(I.a)({},s),{},{showPassword:!s.showPassword}))},edge:"end",children:s.showPassword?Object(R.jsx)(z.a,{}):Object(R.jsx)(_.a,{})})}),label:"Password"})),p.password&&Object(R.jsx)(L.a,{sx:{color:"red"},id:"outlined-weight-helper-text",children:null===(t=p.password)||void 0===t?void 0:t.message})]}),Object(R.jsx)(E.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"\u0110\u0103ng Nh\u1eadp"}),Object(R.jsxs)(m.a,{container:!0,children:[Object(R.jsx)(m.a,{item:!0,xs:!0,children:Object(R.jsx)(D.b,{to:"/forgot-password",variant:"body2",children:"Qu\xean M\u1eadt Kh\u1ea9u?"})}),Object(R.jsx)(m.a,{item:!0,children:Object(R.jsx)(D.b,{to:"/register",variant:"body2",color:"primary",children:"Ch\u01b0a c\xf3 t\xe0i kho\u1ea3n? \u0110\u0103ng K\xed"})})]})]})},A=t(375),B=Object(g.a)();function G(){var e=Object(s.useState)(!1),n=Object(o.a)(e,2),t=n[0],r=n[1],c=Object(v.g)(),j=Object(q.b)(),g=Object(y.b)().enqueueSnackbar,x=Object(q.c)((function(e){return e.auth.user}));Object(s.useEffect)((function(){x&&c.goBack()}),[]);var I=function(){var e=Object(i.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{r(!0),j(Object(V.d)(g,c,n)),r(!1)}catch(t){console.log("error: "+t)}case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),P=function(e){var n=e.profileObj,t={email:n.email,googleId:n.googleId,name:n.name};try{r(!0),j(Object(V.c)(g,c,t)),r(!1)}catch(a){console.log("error: "+a)}};return Object(R.jsxs)(f.a,{theme:B,children:[t&&Object(R.jsx)(A.a,{})," ",Object(R.jsxs)(m.a,{container:!0,component:"main",sx:{height:"100vh"},children:[Object(R.jsx)(d.a,{}),Object(R.jsx)(m.a,{item:!0,xs:!1,sm:4,md:7,sx:{backgroundImage:"url(".concat(S,")"),backgroundRepeat:"no-repeat",backgroundColor:function(e){return"light"===e.palette.mode?e.palette.grey[50]:e.palette.grey[900]},backgroundSize:"cover",backgroundPosition:"center"}}),Object(R.jsx)(m.a,{item:!0,xs:12,sm:8,md:5,component:u.a,elevation:6,square:!0,children:Object(R.jsxs)(h.a,{sx:{my:8,mx:4,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(R.jsx)(l.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(R.jsx)(p.a,{})}),Object(R.jsx)(b.a,{component:"h1",variant:"h5",children:"\u0110\u0103ng Nh\u1eadp"}),Object(R.jsx)(h.a,{sx:{display:"flex",flexDirection:"row",alignItems:"center"},children:Object(R.jsx)(w.GoogleLogin,{clientId:"157666575914-p60mkf52d2vaaq65vi4bc7iaj7r07ia4.apps.googleusercontent.com",icon:!1,onSuccess:P,onFailure:P,cookiePolicy:"single_host_origin",children:Object(R.jsx)(k.a,{"aria-label":"google",color:"error",children:Object(R.jsx)(O.a,{sx:{fontSize:30}})})})}),Object(R.jsx)(T,{onHandleLogin:I})]})})]})]})}},375:function(e,n,t){"use strict";t(1);var r=t(352),a=t(489),i=t(0);n.a=function(e){return Object(i.jsx)(r.a,{sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+1}},open:!0,children:Object(i.jsx)(a.a,{color:"secondary"})})}},424:function(e,n,t){"use strict";t.d(n,"c",(function(){return a})),t.d(n,"d",(function(){return i})),t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return s})),t.d(n,"e",(function(){return c}));var r=t(396),a=r.d().shape({email:r.f().required("Vui l\xf2ng nh\u1eadp email").min(16,"email \xedt nh\u1ea5t 18 k\xfd t\u1ef1").email("Kh\xf4ng \u0111\xfang \u0111\u1ecbnh dang email"),password:r.f().required("Vui l\xf2ng nh\u1eadp m\u1eadt kh\u1ea9u").min(8,"m\u1eadt kh\u1ea9u t\u1ed1i \u0111a 8 k\xfd t\u1ef1")}),i=r.d().shape({name:r.f().min(8,"Nh\u1eadp \xedt nh\u1ea5t 8 k\xfd t\u1ef1").max(50,"Nh\u1eadp t\u1ed1i \u0111a 50 k\xfd t\u1ef1").required("Vui l\xf2ng nh\u1eadp h\u1ecd t\xean"),email:r.f().required("Vui l\xf2ng nh\u1eadp email").min(16,"email \xedt nh\u1ea5t 16 k\xfd t\u1ef1").email("Kh\xf4ng \u0111\xfang \u0111\u1ecbnh dang email"),password:r.f().required("Vui l\xf2ng nh\u1eadp m\u1eadt kh\u1ea9u").min(8,"m\u1eadt kh\u1ea9u t\u1ed1i \u0111a 8 k\xfd t\u1ef1"),confirm_password:r.f().required("Vui l\xf2ng nh\u1eadp m\u1eadt kh\u1ea9u").min(8,"m\u1eadt kh\u1ea9u t\u1ed1i \u0111a 8 k\xfd t\u1ef1").when("password",{is:function(e){return!!(e&&e.length>0)},then:r.f().oneOf([r.e("password")],"X\xe1c m\u1eadt kh\u1ea9u kh\xf4ng kh\u1edbp")})}),o=r.d().shape({old_password:r.f().required("Vui l\xf2ng nh\u1eadp m\u1eadt kh\u1ea9u").min(8,"m\u1eadt kh\u1ea9u t\u1ed1i \u0111a 8 k\xfd t\u1ef1"),password:r.f().required("Vui l\xf2ng nh\u1eadp m\u1eadt kh\u1ea9u").min(8,"m\u1eadt kh\u1ea9u t\u1ed1i \u0111a 8 k\xfd t\u1ef1"),password_confirmation:r.f().required("Vui l\xf2ng nh\u1eadp m\u1eadt kh\u1ea9u").min(8,"m\u1eadt kh\u1ea9u t\u1ed1i \u0111a 8 k\xfd t\u1ef1").when("new_password",{is:function(e){return!!(e&&e.length>0)},then:r.f().oneOf([r.e("new_password")],"X\xe1c m\u1eadt kh\u1ea9u kh\xf4ng kh\u1edbp")})}),s=r.d().shape({email:r.f().required("Vui l\xf2ng nh\u1eadp email").min(16,"email \xedt nh\u1ea5t 16 k\xfd t\u1ef1").email("Kh\xf4ng \u0111\xfang \u0111\u1ecbnh dang email")}),c=r.d().shape({password:r.f().required("Vui l\xf2ng nh\u1eadp m\u1eadt kh\u1ea9u").min(8,"m\u1eadt kh\u1ea9u t\u1ed1i \u0111a 8 k\xfd t\u1ef1"),password_confirmation:r.f().required("Vui l\xf2ng nh\u1eadp m\u1eadt kh\u1ea9u").min(8,"m\u1eadt kh\u1ea9u t\u1ed1i \u0111a 8 k\xfd t\u1ef1").when("password",{is:function(e){return!!(e&&e.length>0)},then:r.f().oneOf([r.e("password")],"X\xe1c m\u1eadt kh\u1ea9u kh\xf4ng kh\u1edbp")}),otp:r.f().required("Vui l\xf2ng m\xe3 otp")})}}]);
//# sourceMappingURL=36.3184cdf3.chunk.js.map