"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[236],{236:function(t,n,e){e.r(n),e.d(n,{default:function(){return v}});var r,a,i,o=e(439),c=e(168),s=e(444),l=s.ZP.h1(r||(r=(0,c.Z)(["\n  text-align: center;\n  font-family: ",";\n  margin-bottom: ","px;\n"])),(function(t){return t.theme.fonts.roboto}),(function(t){return t.theme.space[4]})),u=s.ZP.ul(a||(a=(0,c.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),m=s.ZP.h2(i||(i=(0,c.Z)(["\n  font-family: ",";\n"])),(function(t){return t.theme.fonts.monospace})),f=e(407),p=(0,s.ZP)("div")(f.$_,f.Dh,f.bK,f.cp,f.GQ,f.Cg),h=e(243),d=e(689),g=e(87),b=e(791),x=e(184),v=function(){var t=(0,b.useState)([]),n=(0,o.Z)(t,2),e=n[0],r=n[1],a=(0,d.TH)();(0,b.useEffect)((function(){var t=new AbortController;try{h.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=543e36a38e5b1b446ccf2af6eb6b1556",{signal:t.signal}).then((function(t){var n=t.data;r(n.results)}))}catch(n){console.log(n)}return function(){t.abort()}}),[]);return(0,x.jsxs)(p,{children:[(0,x.jsx)(l,{children:"Trending today"}),(0,x.jsx)(u,{as:"ul",children:e.map((function(t){var n=t.title,e=t.id,r=t.poster_path;return(0,x.jsx)("li",{children:(0,x.jsxs)(g.OL,{to:"/movies/".concat(e),state:{from:a},children:[(0,x.jsx)("img",{src:"https://image.tmdb.org/t/p/w300"+r,alt:n}),(0,x.jsx)(m,{children:n})]})},e)}))})]})}}}]);
//# sourceMappingURL=236.b9d8f727.chunk.js.map