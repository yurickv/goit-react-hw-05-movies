"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[248],{5029:function(n,t,e){e.d(t,{M1:function(){return p},iw:function(){return o},q:function(){return f},tx:function(){return l},z5:function(){return i}});var r=e(5861),a=e(7757),u=e.n(a),c=e(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="543e36a38e5b1b446ccf2af6eb6b1556",i=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/trending/movie/day?api_key=".concat(s),{signal:t.signal});case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(u().mark((function n(t,e){var r,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"?api_key=").concat(s,"&language=en-US"),{signal:e.signal});case 2:return r=n.sent,a=r.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t,e){var r,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie?api_key=".concat(s,"&query=").concat(t,"&page=1&include_adult=false"),{signal:e.signal});case 2:return r=n.sent,a=r.data,n.abrupt("return",a.results);case 5:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t,e){var r,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"),{signal:e.signal});case 2:return r=n.sent,a=r.data,n.abrupt("return",a.cast);case 5:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(t,e){var r,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US"),{signal:e.signal});case 2:return r=n.sent,a=r.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}()},3248:function(n,t,e){e.r(t),e.d(t,{default:function(){return x}});var r,a,u,c=e(168),s=e(6444),i=s.ZP.li(r||(r=(0,c.Z)(["\n  :not(:last-child) {\n    margin-bottom: ","px;\n  }\n"])),(function(n){return n.theme.space[5]})),o=s.ZP.h3(a||(a=(0,c.Z)(["\n  font-family: ",";\n  margin-bottom: ","px;\n"])),(function(n){return n.theme.fonts.roboto}),(function(n){return n.theme.space[3]})),f=s.ZP.p(u||(u=(0,c.Z)(["\n  font-family: ",";\n"])),(function(n){return n.theme.fonts.monospace})),p=e(5861),l=e(9439),h=e(7757),v=e.n(h),d=e(2791),m=e(7689),g=e(5029),w=e(184),x=function(){var n=function(){var n=(0,d.useState)([]),t=(0,l.Z)(n,2),e=t[0],r=t[1],a=(0,d.useState)(!1),u=(0,l.Z)(a,2),c=u[0],s=u[1],i=(0,d.useState)(null),o=(0,l.Z)(i,2),f=o[0],h=o[1],w=(0,m.UO)().id;return(0,d.useEffect)((function(){var n=new AbortController,t=function(){var t=(0,p.Z)(v().mark((function t(){var e,a;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,s(!0),t.next=4,(0,g.tx)(w,n);case 4:e=t.sent,a=e.results,r(a),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),h(t.t0.message);case 12:return t.prev=12,s(!1),n.abort(),t.finish(12);case 16:case"end":return t.stop()}}),t,null,[[0,9,12,16]])})));return function(){return t.apply(this,arguments)}}();t()}),[w]),{reviews:e,isLoading:c,error:f}}(),t=n.reviews;return t.length>0?(0,w.jsx)("ul",{children:t.map((function(n){var t=n.author,e=n.content,r=n.id;return(0,w.jsxs)(i,{children:[(0,w.jsxs)(o,{children:["Author: ",t]}),(0,w.jsx)(f,{children:e})]},r)}))}):(0,w.jsx)(f,{children:" There are yet no reviews for this film."})}}}]);
//# sourceMappingURL=248.4eb61ab5.chunk.js.map