(this["webpackJsonpproject-finally"]=this["webpackJsonpproject-finally"]||[]).push([[38],{2474:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return G}));var a=t(17),r=t.n(a),i=t(21),o=t(14),s=t(1),c=t.n(s),l=t(298),d=t(348),u=t(358),h=t(357),m=t(456),p=t(489),j=t.n(p),b=t(121),g=t(214),f=t(361),x=t(183),O=t.n(x),k=t(359),w=t(2411),v=t(26),y=t(57),q=t(28),V=t(74),S=t.p+"static/media/img-login.251a0f43.webp",P=t(15),I=t(488),_=t.n(I),K=t(2412),C=t.n(K),N=t(2482),F=t(2476),L=t(2485),W=t(2484),X=t(2473),z=t(2483),D=t(12),E=t(364),H=t(379),J=t(384),M=t(425),R=t(0);var T=function(e){var n,t,a=e.onHandleLogin,r=c.a.useState({weightRange:"",showPassword:!1}),i=Object(o.a)(r,2),s=i[0],l=i[1],d=Object(H.d)({resolver:Object(J.a)(M.c)}),u=d.register,p=d.handleSubmit,j=d.formState.errors;return Object(R.jsxs)(h.a,{component:"form",noValidate:!0,onSubmit:p(a),sx:{mt:1},children:[Object(R.jsx)(z.a,Object(P.a)(Object(P.a)({margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email",name:"email",autoComplete:"email",autoFocus:!0},u("email")),{},{helperText:j.email&&"".concat(null===(n=j.email)||void 0===n?void 0:n.message),error:j.email&&!0})),Object(R.jsxs)(N.a,{fullWidth:!0,variant:"outlined",sx:{marginTop:"16px"},children:[Object(R.jsx)(X.a,{htmlFor:"outlined-adornment-password",color:j.password&&"error",children:"M\u1eadt kh\u1ea9u"}),Object(R.jsx)(F.a,Object(P.a)(Object(P.a)({},u("password")),{},{he:!0,error:j.password&&!0,id:"outlined-adornment-password",type:s.showPassword?"text":"password",endAdornment:Object(R.jsx)(L.a,{position:"end",children:Object(R.jsx)(k.a,{"aria-label":"toggle password visibility",onClick:function(){l(Object(P.a)(Object(P.a)({},s),{},{showPassword:!s.showPassword}))},edge:"end",children:s.showPassword?Object(R.jsx)(C.a,{}):Object(R.jsx)(_.a,{})})}),label:"Password"})),j.password&&Object(R.jsx)(W.a,{sx:{color:"red"},id:"outlined-weight-helper-text",children:null===(t=j.password)||void 0===t?void 0:t.message})]}),Object(R.jsx)(E.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"\u0110\u0103ng Nh\u1eadp"}),Object(R.jsxs)(m.a,{container:!0,children:[Object(R.jsx)(m.a,{item:!0,xs:!0,children:Object(R.jsx)(D.b,{to:"/forgot-password",variant:"body2",children:"Qu\xean M\u1eadt Kh\u1ea9u?"})}),Object(R.jsx)(m.a,{item:!0,children:Object(R.jsx)(D.b,{to:"/register",variant:"body2",color:"primary",children:"Ch\u01b0a c\xf3 t\xe0i kho\u1ea3n? \u0110\u0103ng K\xed"})})]})]})},A=t(144),B=Object(g.a)();function G(){var e=Object(s.useState)(!1),n=Object(o.a)(e,2),t=n[0],a=n[1],c=Object(v.g)(),p=Object(q.b)(),g=Object(y.b)().enqueueSnackbar,x=Object(q.c)((function(e){return e.auth.user}));Object(s.useEffect)((function(){x&&c.goBack()}),[]);var P=function(){var e=Object(i.a)(r.a.mark((function e(n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{a(!0),p(Object(V.d)(g,c,n)),a(!1)}catch(t){console.log("error: "+t)}case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),I=function(e){var n=e.profileObj,t={email:n.email,googleId:n.googleId,name:n.name};try{a(!0),p(Object(V.c)(g,c,t)),a(!1)}catch(r){console.log("error: "+r)}};return Object(R.jsxs)(f.a,{theme:B,children:[t&&Object(R.jsx)(A.a,{})," ",Object(R.jsxs)(m.a,{container:!0,component:"main",sx:{height:"100vh"},children:[Object(R.jsx)(d.a,{}),Object(R.jsx)(m.a,{item:!0,xs:!1,sm:4,md:7,sx:{backgroundImage:"url(".concat(S,")"),backgroundRepeat:"no-repeat",backgroundColor:function(e){return"light"===e.palette.mode?e.palette.grey[50]:e.palette.grey[900]},backgroundSize:"cover",backgroundPosition:"center"}}),Object(R.jsx)(m.a,{item:!0,xs:12,sm:8,md:5,component:u.a,elevation:6,square:!0,children:Object(R.jsxs)(h.a,{sx:{my:8,mx:4,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(R.jsx)(l.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(R.jsx)(j.a,{})}),Object(R.jsx)(b.a,{component:"h1",variant:"h5",children:"\u0110\u0103ng Nh\u1eadp"}),Object(R.jsx)(h.a,{sx:{display:"flex",flexDirection:"row",alignItems:"center"},children:Object(R.jsx)(w.GoogleLogin,{clientId:"157666575914-p60mkf52d2vaaq65vi4bc7iaj7r07ia4.apps.googleusercontent.com",icon:!1,onSuccess:I,onFailure:I,cookiePolicy:"single_host_origin",children:Object(R.jsx)(k.a,{"aria-label":"google",color:"error",children:Object(R.jsx)(O.a,{sx:{fontSize:30}})})})}),Object(R.jsx)(T,{onHandleLogin:P})]})})]})]})}},425:function(e,n,t){"use strict";t.d(n,"c",(function(){return r})),t.d(n,"d",(function(){return i})),t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return s})),t.d(n,"e",(function(){return c}));var a=t(396),r=a.d().shape({email:a.f().required("Vui l\xf2ng nh\u1eadp email").min(16,"email \xedt nh\u1ea5t 18 k\xfd t\u1ef1").email("Kh\xf4ng \u0111\xfang \u0111\u1ecbnh dang email"),password:a.f().required("Vui l\xf2ng nh\u1eadp m\u1eadt kh\u1ea9u").min(8,"m\u1eadt kh\u1ea9u t\u1ed1i \u0111a 8 k\xfd t\u1ef1")}),i=a.d().shape({name:a.f().min(8,"Nh\u1eadp \xedt nh\u1ea5t 8 k\xfd t\u1ef1").max(50,"Nh\u1eadp t\u1ed1i \u0111a 50 k\xfd t\u1ef1").required("Vui l\xf2ng nh\u1eadp h\u1ecd t\xean"),email:a.f().required("Vui l\xf2ng nh\u1eadp email").min(16,"email \xedt nh\u1ea5t 16 k\xfd t\u1ef1").email("Kh\xf4ng \u0111\xfang \u0111\u1ecbnh dang email"),password:a.f().required("Vui l\xf2ng nh\u1eadp m\u1eadt kh\u1ea9u").min(8,"m\u1eadt kh\u1ea9u t\u1ed1i \u0111a 8 k\xfd t\u1ef1"),confirm_password:a.f().required("Vui l\xf2ng nh\u1eadp m\u1eadt kh\u1ea9u").min(8,"m\u1eadt kh\u1ea9u t\u1ed1i \u0111a 8 k\xfd t\u1ef1").when("password",{is:function(e){return!!(e&&e.length>0)},then:a.f().oneOf([a.e("password")],"X\xe1c m\u1eadt kh\u1ea9u kh\xf4ng kh\u1edbp")})}),o=a.d().shape({old_password:a.f().required("Vui l\xf2ng nh\u1eadp m\u1eadt kh\u1ea9u").min(8,"m\u1eadt kh\u1ea9u t\u1ed1i \u0111a 8 k\xfd t\u1ef1"),password:a.f().required("Vui l\xf2ng nh\u1eadp m\u1eadt kh\u1ea9u").min(8,"m\u1eadt kh\u1ea9u t\u1ed1i \u0111a 8 k\xfd t\u1ef1"),password_confirmation:a.f().required("Vui l\xf2ng nh\u1eadp m\u1eadt kh\u1ea9u").min(8,"m\u1eadt kh\u1ea9u t\u1ed1i \u0111a 8 k\xfd t\u1ef1").when("password",{is:function(e){return!!(e&&e.length>0)},then:a.f().oneOf([a.e("password")],"X\xe1c m\u1eadt kh\u1ea9u kh\xf4ng kh\u1edbp")})}),s=a.d().shape({email:a.f().required("Vui l\xf2ng nh\u1eadp email").min(16,"email \xedt nh\u1ea5t 16 k\xfd t\u1ef1").email("Kh\xf4ng \u0111\xfang \u0111\u1ecbnh dang email")}),c=a.d().shape({password:a.f().required("Vui l\xf2ng nh\u1eadp m\u1eadt kh\u1ea9u").min(8,"m\u1eadt kh\u1ea9u t\u1ed1i \u0111a 8 k\xfd t\u1ef1"),password_confirmation:a.f().required("Vui l\xf2ng nh\u1eadp m\u1eadt kh\u1ea9u").min(8,"m\u1eadt kh\u1ea9u t\u1ed1i \u0111a 8 k\xfd t\u1ef1").when("password",{is:function(e){return!!(e&&e.length>0)},then:a.f().oneOf([a.e("password")],"X\xe1c m\u1eadt kh\u1ea9u kh\xf4ng kh\u1edbp")}),otp:a.f().required("Vui l\xf2ng m\xe3 otp")})}}]);
//# sourceMappingURL=38.df522a3b.chunk.js.map