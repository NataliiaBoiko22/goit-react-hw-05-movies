"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[349],{349:function(e,t,r){r.r(t),r.d(t,{default:function(){return _}});var n=r(9439),a=r(9867),s=r(657),c=r(5644),u=r(4670),o=r(3967),i=r(6192),l="moviesPage_searchContainer__s0BPL",p="moviesPage_searchBar__Pk+DQ",f="moviesPage_searchFormInput__MBh-3",v="moviesPage_searchButton__bNEMY",h="moviesPage_searchMoviesList__Ep-FR",m="moviesPage_searchMovTitle__RlB0d",d="moviesPage_searchMovItem__zeyyQ",g=r(2834),_=function(){var e,t=(0,u.TH)(),r=(0,a.useState)([]),_=(0,n.Z)(r,2),x=_[0],b=_[1],w=(0,c.lr)(),Z=(0,n.Z)(w,2),j=Z[0],k=Z[1],y=(0,a.useState)(""),P=(0,n.Z)(y,2),N=P[0],C=P[1],M=null!==(e=j.get("search"))&&void 0!==e?e:"";(0,a.useEffect)((function(){M&&(0,s.z1)(M).then(b).catch((function(e){console.log("Error: "+e)}))}),[M]);return x?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("header",{className:l,children:(0,g.jsxs)("form",{className:p,autoComplete:"off",onSubmit:function(e){if(N){e.preventDefault();var t=e.currentTarget;k(""!==N?{search:t.elements.search.value}:{}),C(""),t.reset()}else b([])},children:[(0,g.jsx)("input",{className:f,type:"text",name:"search",value:N,onChange:function(e){return t=e.currentTarget.value.toLowerCase(),void C(t);var t},autoFocus:!0,placeholder:"Search your movie",size:40}),(0,g.jsx)("button",{className:v,type:"submit",children:(0,g.jsx)(o.U41,{})})]})}),x.length>0&&(0,g.jsx)("ul",{className:h,children:x.map((function(e){var r=e.id,n=e.title,a=e.poster_path;return(0,g.jsx)("li",{className:d,children:(0,g.jsxs)(c.rU,{to:"/movies/".concat(r),state:{from:t},children:[null===a?(0,g.jsx)("img",{src:i,alt:n}):(0,g.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(a),alt:n}),(0,g.jsx)("p",{className:m,children:n})]})},r)}))})]}):null}},657:function(e,t,r){r.d(t,{Df:function(){return u},M1:function(){return i},TP:function(){return o},jP:function(){return l},z1:function(){return p}});var n=r(5861),a=r(7757),s=r.n(a),c=r(606);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={api_key:"0f347322078f7ab31991a46962bbff3a",language:"en-US"};var u=function(){var e=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/trending/movie/day");case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/movie/".concat(t));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/movie/".concat(t,"/credits"));case 3:return r=e.sent,e.abrupt("return",r.data.cast);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/movie/".concat(t,"/reviews"));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={params:{query:t,page:1}},e.prev=1,e.next=4,c.Z.get("/search/movie",r);case 4:return n=e.sent,e.abrupt("return",n.data.results);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},6192:function(e,t,r){e.exports=r.p+"static/media/face-png-42669.3b8f0317702d190a684b.png"}}]);
//# sourceMappingURL=349.1e7812aa.chunk.js.map