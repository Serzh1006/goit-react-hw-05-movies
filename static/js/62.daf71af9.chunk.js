"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[62],{62:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var n=r(861),a=r(439),c=r(687),s=r.n(c),i=r(689),u=r(791),o=r(243),h="https://api.themoviedb.org/3/movie/",f="39009e1fbdefdc1ea3efc46fca7ed6e3",p={method:"GET",headers:{accept:"application/json",Authorization:"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTAwOWUxZmJkZWZkYzFlYTNlZmM0NmZjYTdlZDZlMyIsInN1YiI6IjY0N2NkMjBiMjYzNDYyMDBmOTI5NWRkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LAF8CyGvOhHBE3e-x8-tvz8nNI4gXsXcDzwmj4Y_YN0"}},l=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(h).concat(t,"/reviews?api_key=").concat(f),p).catch((function(e){if(200!==e.response.status)return alert(e.response.data.status_message)}));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d="reviews_reviewsList__LkXr4",m=r(184),v=function(){var e=(0,u.useState)([]),t=(0,a.Z)(e,2),r=t[0],c=t[1],o=(0,i.UO)().movieId,h=(0,u.useState)(!1),f=(0,a.Z)(h,2),p=f[0],v=f[1];return(0,u.useEffect)((function(){try{var e=function(){var e=(0,n.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(Number(o));case 2:if(t=e.sent){e.next=5;break}return e.abrupt("return");case 5:0!==(r=t.data.results).length?c(r):v(!0);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}catch(t){}}),[o]),(0,m.jsx)("div",{children:p?(0,m.jsx)("p",{children:"We don't have any reviews for this movie"}):(0,m.jsx)("ul",{className:d,children:r.map((function(e){return(0,m.jsxs)("li",{children:[(0,m.jsxs)("p",{children:["Author: ",e.author]}),e.content]},e.id)}))})})}}}]);
//# sourceMappingURL=62.daf71af9.chunk.js.map