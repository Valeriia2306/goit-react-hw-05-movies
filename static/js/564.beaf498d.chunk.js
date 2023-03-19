/*! For license information please see 564.beaf498d.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[564],{4377:function(e,n,t){t.d(n,{Df:function(){return a},IQ:function(){return d},IR:function(){return c},Jh:function(){return s},hw:function(){return l}});var r=t(1243),i="aba68af286dd64a295a5db6ef1289623",o="https://api.themoviedb.org/",a=function(){return r.Z.get("".concat(o,"3/trending/all/day?api_key=").concat(i))},c=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return r.Z.get("".concat(o,"3/search/movie?api_key=").concat(i,"&language=en-US&page=").concat(n,"&include_adult=false&query=").concat(e))},l=function(e){return r.Z.get("".concat(o,"3/movie/").concat(e,"?api_key=").concat(i,"&language=en-US"))},d=function(e){return r.Z.get("".concat(o,"3/movie/").concat(e,"/credits?api_key=").concat(i,"&language=en-US"))},s=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return r.Z.get("".concat(o,"3/movie/").concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=").concat(n))}},564:function(e,n,t){t.r(n),t.d(n,{default:function(){return A}});var r,i,o,a,c,l,d,s,u,h,f,g=t(9439),x=t(3220),p=t(2791),m=t(7689),y=t(6109),b=t(4377),v=t(9177),j=t(168),w=t(4934),k=t(1087),Z=w.Z.div(r||(r=(0,j.Z)(["\n  padding-top: 20px;\n  padding-bottom: 30px;\n  margin-bottom: 30px;\n\n  background: #11998e; /* fallback for old browsers */\n  background: -webkit-linear-gradient(to top, #38ef7d, #11998e);\n  background: linear-gradient(to top, #38ef7d, #11998e);\n  border-radius: 10px;\n"]))),E=w.Z.h2(i||(i=(0,j.Z)(["\n  margin-bottom: 20px;\n\n  color: black;\n  font-size: 24px;\n  line-height: 1.7;\n  text-align: center;\n"]))),O=w.Z.ul(o||(o=(0,j.Z)(["\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n  gap: 35px;\n"]))),C=(0,w.Z)(k.rU)(a||(a=(0,j.Z)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background-color: orange;\n  width: 150px;\n  height: 40px;\n\n  color: black;\n  border-radius: 6px;\n"]))),_=w.Z.li(c||(c=(0,j.Z)(["\n  transition: transform 100ms ease-in;\n\n  &:hover,\n  &:focus {\n    transform: scale(1.1);\n  }\n"]))),S=t(184),U=v.Z.cast,P=v.Z.reviews,z=function(){return(0,S.jsxs)(Z,{children:[(0,S.jsx)(E,{children:"Additional information"}),(0,S.jsxs)(O,{children:[(0,S.jsx)(_,{children:(0,S.jsx)(C,{to:U,replace:!0,children:"Cast"})}),(0,S.jsx)(_,{children:(0,S.jsx)(C,{to:P,replace:!0,children:"Reviews"})})]})]})},M=function(e){return e.reduce((function(e,n){var t=n.name;return"".concat(e,", ").concat(t)}),"").slice(1).split(" ").slice(1)},B=w.Z.article(l||(l=(0,j.Z)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-end;\n  gap: 40px;\n  margin-bottom: 30px;\n\n  background: #11998e; /* fallback for old browsers */\n  background: -webkit-linear-gradient(to top, #38ef7d, #11998e);\n  background: linear-gradient(to top, #38ef7d, #11998e);\n  border-radius: 10px;\n"]))),R=w.Z.div(d||(d=(0,j.Z)(["\n  border-radius: 10px;\n  overflow: hidden;\n"]))),T=w.Z.div(s||(s=(0,j.Z)(["\n  width: 600px;\n  padding: 20px;\n  border-radius: 5px;\n"]))),q=w.Z.h2(u||(u=(0,j.Z)(["\n  font-size: 38px;\n  line-height: 1.666;\n  margin-bottom: 10px;\n  color: orange;\n"]))),D=w.Z.h3(h||(h=(0,j.Z)(["\n  font-size: 30px;\n  line-height: 1.7;\n  margin-bottom: 10px;\n  color: orange;\n"]))),G=w.Z.p(f||(f=(0,j.Z)(["\n  color: white;\n  font-size: 16px;\n  line-height: 1.7;\n  margin-bottom: 40px;\n"]))),I=function(e){var n=e.movie,t=n.title,r=n.poster_path,i=n.release_date,o=n.overview,a=n.genres,c=n.vote_average,l=M(a);return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(B,{children:[(0,S.jsx)(R,{children:(0,S.jsx)("img",{alt:t,src:"https://image.tmdb.org/t/p/w500".concat(r)})}),(0,S.jsxs)(T,{children:[(0,S.jsxs)(q,{children:[t," (",i.slice(0,4),")"]}),(0,S.jsxs)(G,{children:["User Score: ",Math.round(10*c),"%"]}),(0,S.jsx)(D,{children:"Overview"}),(0,S.jsx)(G,{children:o}),(0,S.jsx)(D,{children:"Genres"}),(0,S.jsx)(G,{children:l.map((function(e){return e+" "}))})]})]}),(0,S.jsx)(z,{})]})},N=(0,p.memo)(I),A=function(){var e=(0,p.useState)({}),n=(0,g.Z)(e,2),t=n[0],r=n[1],i=(0,p.useState)("idle"),o=(0,g.Z)(i,2),a=o[0],c=o[1],l=(0,m.UO)().id;return(0,p.useEffect)((function(){l&&(c("loading"),(0,b.hw)(l).then((function(e){var n=e.data;return r(n)})).catch((function(e){console.log(e.message),c("not found")})).finally((function(){return c("fulfilled")})))}),[l]),"loading"===a?(0,y.h)():"fulfilled"===a?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(x.Z,{to:"/",children:"Go to back"}),(0,S.jsx)(N,{movie:t}),(0,S.jsx)(m.j3,{})]}):void 0}},3220:function(e,n,t){t.d(n,{Z:function(){return s}});var r,i=t(719),o=t(168),a=t(4934),c=t(1087),l=(0,a.Z)(c.rU)(r||(r=(0,o.Z)(["\n  position: absolute;\n  display: inline-flex;\n  gap: 10px;\n  align-items: center;\n  justify-content: center;\n\n  top: 100px;\n  padding: 8px;\n\n  font-size: 20px;\n  line-height: 1.666;\n  background: #11998e;\n  background: -webkit-linear-gradient(to top, #38ef7d, #11998e);\n  background: linear-gradient(to top, #38ef7d, #11998e);\n  color: white;\n  border-radius: 5px;\n  text-decoration: none;\n\n  transition: background-color 100ms ease-in, transform 100ms ease-in,\n    color 100ms ease-in;\n\n  &:hover {\n    background-color: orange;\n    color: #212121;\n    transform: scale(1.05);\n  }\n"]))),d=t(184),s=function(e){var n=e.to,t=e.children;return(0,d.jsxs)(l,{to:n,children:[(0,d.jsx)(i.YiX,{}),(0,d.jsx)("p",{children:t})]})}},6109:function(e,n,t){t.d(n,{h:function(){return a},m:function(){return o}});var r=t(8175),i=t(184),o=function(){var e=270,n=Array(20).fill(1);return(0,i.jsxs)(r.ZP,{speed:1,width:1350,height:1320,backgroundColor:"#212121",children:[(0,i.jsx)("rect",{x:"0",y:"0",rx:"0",ry:"0",width:1320,height:"20"}),n.map((function(n,t){var r=330*Math.floor(t/5)+35,o=t*e%1350;return(0,i.jsx)("rect",{x:o,y:r,rx:"0",ry:"0",width:240,height:300},t)}))]})},a=function(){return(0,i.jsxs)(r.ZP,{width:1300,height:700,viewBox:"0 0 700 300",backgroundColor:"#212121",foregroundColor:"#dbdbdb",children:[(0,i.jsx)("rect",{x:"4",y:"8",rx:"3",ry:"3",width:"7",height:"288"}),(0,i.jsx)("rect",{x:"6",y:"289",rx:"3",ry:"3",width:"669",height:"8"}),(0,i.jsx)("rect",{x:"670",y:"9",rx:"3",ry:"3",width:"6",height:"285"}),(0,i.jsx)("rect",{x:"55",y:"42",rx:"16",ry:"16",width:"274",height:"216"}),(0,i.jsx)("rect",{x:"412",y:"113",rx:"3",ry:"3",width:"102",height:"7"}),(0,i.jsx)("rect",{x:"402",y:"91",rx:"3",ry:"3",width:"178",height:"6"}),(0,i.jsx)("rect",{x:"405",y:"139",rx:"3",ry:"3",width:"178",height:"6"}),(0,i.jsx)("rect",{x:"416",y:"162",rx:"3",ry:"3",width:"102",height:"7"}),(0,i.jsx)("rect",{x:"405",y:"189",rx:"3",ry:"3",width:"178",height:"6"}),(0,i.jsx)("rect",{x:"5",y:"8",rx:"3",ry:"3",width:"669",height:"7"}),(0,i.jsx)("rect",{x:"406",y:"223",rx:"14",ry:"14",width:"72",height:"32"}),(0,i.jsx)("rect",{x:"505",y:"224",rx:"14",ry:"14",width:"72",height:"32"}),(0,i.jsx)("rect",{x:"376",y:"41",rx:"3",ry:"3",width:"231",height:"29"})]})}},8175:function(e,n,t){var r=t(2791),i=function(){return i=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},i.apply(this,arguments)};var o=function(e){var n=e.animate,t=void 0===n||n,o=e.animateBegin,a=e.backgroundColor,c=void 0===a?"#f5f6f7":a,l=e.backgroundOpacity,d=void 0===l?1:l,s=e.baseUrl,u=void 0===s?"":s,h=e.children,f=e.foregroundColor,g=void 0===f?"#eee":f,x=e.foregroundOpacity,p=void 0===x?1:x,m=e.gradientRatio,y=void 0===m?2:m,b=e.gradientDirection,v=void 0===b?"left-right":b,j=e.uniqueKey,w=e.interval,k=void 0===w?.25:w,Z=e.rtl,E=void 0!==Z&&Z,O=e.speed,C=void 0===O?1.2:O,_=e.style,S=void 0===_?{}:_,U=e.title,P=void 0===U?"Loading...":U,z=e.beforeMask,M=void 0===z?null:z,B=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(t[r[i]]=e[r[i]])}return t}(e,["animate","animateBegin","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),R=j||Math.random().toString(36).substring(6),T=R+"-diff",q=R+"-animated-diff",D=R+"-aria",G=E?{transform:"scaleX(-1)"}:null,I="0; "+k+"; 1",N=C+"s",A="top-bottom"===v?"rotate(90)":void 0;return(0,r.createElement)("svg",i({"aria-labelledby":D,role:"img",style:i(i({},S),G)},B),P?(0,r.createElement)("title",{id:D},P):null,M&&(0,r.isValidElement)(M)?M:null,(0,r.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+u+"#"+T+")",style:{fill:"url("+u+"#"+q+")"}}),(0,r.createElement)("defs",null,(0,r.createElement)("clipPath",{id:T},h),(0,r.createElement)("linearGradient",{id:q,gradientTransform:A},(0,r.createElement)("stop",{offset:"0%",stopColor:c,stopOpacity:d},t&&(0,r.createElement)("animate",{attributeName:"offset",values:-y+"; "+-y+"; 1",keyTimes:I,dur:N,repeatCount:"indefinite",begin:o})),(0,r.createElement)("stop",{offset:"50%",stopColor:g,stopOpacity:p},t&&(0,r.createElement)("animate",{attributeName:"offset",values:-y/2+"; "+-y/2+"; "+(1+y/2),keyTimes:I,dur:N,repeatCount:"indefinite",begin:o})),(0,r.createElement)("stop",{offset:"100%",stopColor:c,stopOpacity:d},t&&(0,r.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+y),keyTimes:I,dur:N,repeatCount:"indefinite",begin:o})))))},a=function(e){return e.children?(0,r.createElement)(o,i({},e)):(0,r.createElement)(c,i({},e))},c=function(e){return(0,r.createElement)(a,i({viewBox:"0 0 476 124"},e),(0,r.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,r.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};n.ZP=a}}]);
//# sourceMappingURL=564.beaf498d.chunk.js.map