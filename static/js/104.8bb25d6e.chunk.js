"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[104],{4377:function(n,e,t){t.d(e,{Df:function(){return o},IQ:function(){return d},IR:function(){return i},Jh:function(){return l},hw:function(){return u}});var a=t(1243),r="aba68af286dd64a295a5db6ef1289623",c="https://api.themoviedb.org/",o=function(){return a.Z.get("".concat(c,"3/trending/all/day?api_key=").concat(r))},i=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return a.Z.get("".concat(c,"3/search/movie?api_key=").concat(r,"&language=en-US&page=").concat(e,"&include_adult=false&query=").concat(n))},u=function(n){return a.Z.get("".concat(c,"3/movie/").concat(n,"?api_key=").concat(r,"&language=en-US"))},d=function(n){return a.Z.get("".concat(c,"3/movie/").concat(n,"/credits?api_key=").concat(r,"&language=en-US"))},l=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return a.Z.get("".concat(c,"3/movie/").concat(n,"/reviews?api_key=").concat(r,"&language=en-US&page=").concat(e))}},3104:function(n,e,t){t.r(e),t.d(e,{default:function(){return b}});var a,r,c,o,i=t(9439),u=t(2791),d=t(7689),l=t(4377),f=t(168),p=t(4934),g=p.Z.ul(a||(a=(0,f.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 15px;\n  padding: 15px;\n  border-radius: 10px;\n  background: #11998e; /* fallback for old browsers */\n  background: -webkit-linear-gradient(to top, #38ef7d, #11998e);\n  background: linear-gradient(to top, #38ef7d, #11998e);\n"]))),s=p.Z.li(r||(r=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 200px;\n\n  background-color: orange;\n  padding-bottom: 10px;\n  border-radius: 5px;\n"]))),h=p.Z.img(c||(c=(0,f.Z)(["\n  margin-bottom: 20px;\n  border-radius: 5px;\n"]))),m=p.Z.p(o||(o=(0,f.Z)(["\n  text-align: center;\n  color: #212121;\n"]))),x=t(184),b=function(){var n=(0,d.UO)().id,e=(0,u.useState)(null),t=(0,i.Z)(e,2),a=t[0],r=t[1];return(0,u.useEffect)((function(){a||(0,l.IQ)(n).then((function(n){return r(n.data.cast)})).catch(console.log).finally()}),[a,n]),a?(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(g,{children:a.map((function(n,e){n.id;var t=n.name,a=n.profile_path;return(0,x.jsxs)(s,{children:[(0,x.jsx)(h,{src:a?"https://image.tmdb.org/t/p/w200".concat(a):"https://img.freepik.com/premium-vector/error-404-found-glitch-effect_8024-4.jpg",alt:t}),(0,x.jsx)(m,{children:t})]},e)}))})}):(0,x.jsx)("h2",{children:"Loading..."})}}}]);
//# sourceMappingURL=104.8bb25d6e.chunk.js.map