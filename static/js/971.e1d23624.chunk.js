"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[971],{5029:function(n,t,r){r.d(t,{M1:function(){return p},iw:function(){return s},q:function(){return f},tx:function(){return l},z5:function(){return o}});var e=r(5861),a=r(7757),u=r.n(a),i=r(1243);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var c="543e36a38e5b1b446ccf2af6eb6b1556",o=function(){var n=(0,e.Z)(u().mark((function n(t){var r,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/trending/movie/day?api_key=".concat(c),{signal:t.signal});case 2:return r=n.sent,e=r.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(u().mark((function n(t,r){var e,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"?api_key=").concat(c,"&language=en-US"),{signal:r.signal});case 2:return e=n.sent,a=e.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(u().mark((function n(t,r){var e,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/search/movie?api_key=".concat(c,"&query=").concat(t,"&page=1&include_adult=false"),{signal:r.signal});case 2:return e=n.sent,a=e.data,n.abrupt("return",a.results);case 5:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(u().mark((function n(t,r){var e,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"/credits?api_key=").concat(c,"&language=en-US"),{signal:r.signal});case 2:return e=n.sent,a=e.data,n.abrupt("return",a.cast);case 5:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(u().mark((function n(t,r){var e,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(c,"&language=en-US"),{signal:r.signal});case 2:return e=n.sent,a=e.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}()},3344:function(n,t,r){r.d(t,{M:function(){return o}});var e=r(7237),a=r(7689),u=r(1087),i=r(6249),c=r(184),o=function(n){var t=n.movies,r=(0,a.TH)();return(0,c.jsx)(e.HI,{as:"ul",children:t.map((function(n){var t=n.title,a=n.id,o=n.poster_path;return(0,c.jsx)("li",{children:(0,c.jsxs)(u.OL,{to:"".concat(i._.MOVIES,"/").concat(a),state:{from:r},children:[(0,c.jsx)("img",{src:"https://image.tmdb.org/t/p/w300"+o,alt:t}),(0,c.jsx)(e.rS,{children:t})]})},a)}))})}},4321:function(n,t,r){r.d(t,{a:function(){return u}});var e=r(5243),a=r(184),u=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.g4,{height:"80",width:"80",radius:"9",color:"#4fa94d",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})})}},5971:function(n,t,r){r.r(t),r.d(t,{default:function(){return S}});var e,a,u,i=r(5861),c=r(9439),o=r(7757),s=r.n(o),f=r(2791),p=r(5029),l=r(1087),m=r(4321),d=r(3344),h=r(3853),g=r(168),v=r(6444),x=v.ZP.form(e||(e=(0,g.Z)(["\n  width: 350px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: ","px;\n  \n"])),(function(n){return n.theme.space[3]})),b=v.ZP.button(a||(a=(0,g.Z)(["\n  font-family: ",";\n  margin-left: ","px;\n  padding: ","px;\n  border-radius: ",";\n  background-color: rgb(4, 170, 109);\n  color: white;\n\n  :hover,\n  :focus {\n    background-color: #059862;\n    cursor: pointer;\n  }\n"])),(function(n){return n.theme.fonts.monospace}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.radii.normal})),Z=v.ZP.input(u||(u=(0,g.Z)(["\n  padding: ","px;\n  border-radius: ",";\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.radii.normal})),w=r(184),y=function(n){var t=n.onSubmit,r=(0,f.useState)(""),e=(0,c.Z)(r,2),a=e[0],u=e[1];return(0,w.jsxs)(x,{onSubmit:function(n){n.preventDefault(),t(a),u("")},children:[(0,w.jsx)(Z,{type:"text",value:a,onChange:function(n){u(n.target.value)}}),(0,w.jsxs)(b,{type:"submit",children:["Search_",(0,w.jsx)(h.jRj,{size:"16px"})]})]})},k=r(7237),j=r(1934),S=function(){var n=function(){var n=(0,f.useState)([]),t=(0,c.Z)(n,2),r=t[0],e=t[1],a=(0,f.useState)(!1),u=(0,c.Z)(a,2),o=u[0],m=u[1],d=(0,f.useState)(null),h=(0,c.Z)(d,2),g=h[0],v=h[1],x=(0,l.lr)(),b=(0,c.Z)(x,2),Z=b[0],w=b[1];return(0,f.useEffect)((function(){var n=new AbortController,t=Z.get("query");if(t){var r=function(){var r=(0,i.Z)(s().mark((function r(){var a;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,m(!0),v(null),r.next=5,(0,p.q)(t,n);case 5:if(a=r.sent,e(a),a.length){r.next=10;break}return v("\u0417\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f ".concat(t," \u0432\u0456\u0434\u0441\u0443\u0442\u043d\u0456")),r.abrupt("return");case 10:r.next=16;break;case 13:r.prev=13,r.t0=r.catch(0),v(r.t0.message);case 16:return r.prev=16,m(!1),n.abort(),r.finish(16);case 20:case"end":return r.stop()}}),r,null,[[0,13,16,20]])})));return function(){return r.apply(this,arguments)}}();r()}}),[Z]),{moviesSearch:r,isLoading:o,error:g,handleChange:function(n){w({query:n})}}}(),t=n.moviesSearch,r=n.isLoading,e=n.error,a=n.handleChange;return(0,w.jsxs)(j.x,{children:[(0,w.jsx)(y,{onSubmit:a}),r&&(0,w.jsx)(m.a,{}),e&&(0,w.jsx)(k.Dx,{children:e}),t&&(0,w.jsx)(d.M,{movies:t})]})}},1934:function(n,t,r){r.d(t,{x:function(){return u}});var e=r(6444),a=r(407),u=(0,e.ZP)("div")(a.$_,a.Dh,a.bK,a.cp,a.GQ,a.Cg)},7237:function(n,t,r){r.d(t,{Dx:function(){return o},HI:function(){return s},rS:function(){return f}});var e,a,u,i=r(168),c=r(6444),o=c.ZP.h1(e||(e=(0,i.Z)(["\n  text-align: center;\n  font-family: ",";\n  margin-bottom: ","px;\n"])),(function(n){return n.theme.fonts.roboto}),(function(n){return n.theme.space[4]})),s=c.ZP.ul(a||(a=(0,i.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),f=c.ZP.h2(u||(u=(0,i.Z)(["\n  font-family: ",";\n"])),(function(n){return n.theme.fonts.monospace}))}}]);
//# sourceMappingURL=971.e1d23624.chunk.js.map