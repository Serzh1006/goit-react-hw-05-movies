"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[435],{964:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(87),a=function(e){return e.title?e.title:e.name?e.name:void 0},i="searchFilms_listFilms__gXszz",s="searchFilms_itemListFilm__9wVS9",c=n(184),u=function(e){var t=e.films,n=e.onLocation;return(0,c.jsx)("ul",{className:i,children:t.map((function(e){var t=a(e);return(0,c.jsx)("li",{children:(0,c.jsx)(r.rU,{className:s,to:"/movies/".concat(e.id),state:{from:n},children:t})},e.id)}))})}},435:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var r=n(861),a=n(439),i=n(687),s=n.n(i),c=n(791),u=n(87),o=n(689),l=n(964),m=n(243),f="https://api.themoviedb.org/3/search/movie",p="39009e1fbdefdc1ea3efc46fca7ed6e3",h={method:"GET",headers:{accept:"application/json",Authorization:"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTAwOWUxZmJkZWZkYzFlYTNlZmM0NmZjYTdlZDZlMyIsInN1YiI6IjY0N2NkMjBiMjYzNDYyMDBmOTI5NWRkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LAF8CyGvOhHBE3e-x8-tvz8nNI4gXsXcDzwmj4Y_YN0"}},d=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.Z.get("".concat(f,"?query=").concat(t,"&api_key=").concat(p),h).catch((function(e){if(200!==e.response.status)return alert(e.response.data.status_message)}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v={input:"movies_input__rHz1z",btnSubmit:"movies_btnSubmit__8oN9Z"},b=n(184),Z=function(){var e,t=(0,c.useState)(""),n=(0,a.Z)(t,2),i=n[0],m=n[1],f=(0,c.useState)([]),p=(0,a.Z)(f,2),h=p[0],Z=p[1],_=(0,u.lr)(),x=(0,a.Z)(_,2),N=x[0],j=x[1],y=null!==(e=N.get("query"))&&void 0!==e?e:"",k=(0,o.TH)();(0,c.useEffect)((function(){if(""!==y){var e=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d(y);case 3:if(t=e.sent){e.next=6;break}return e.abrupt("return");case 6:Z(t.data.results),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}}),[y,k]);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===i.trim())return alert("enter query");j({query:i.trim()}),m("")},className:v.form,children:[(0,b.jsx)("input",{className:v.input,value:i,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",onChange:function(e){m(e.target.value)}}),(0,b.jsx)("button",{className:v.btnSubmit,type:"submit",children:"Search"})]}),0!==h.length&&(0,b.jsx)(l.Z,{films:h,onLocation:k})]})}}}]);
//# sourceMappingURL=435.701ed396.chunk.js.map