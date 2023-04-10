"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[669],{3669:function(e,t,r){r.r(t),r.d(t,{default:function(){return p}});var a=r(9439),n=r(9867),s=r(4670),i=r(5644),c=r(657),o=r(9485),l={backWrapper:"movieDetails_backWrapper__4Czql",backButton:"movieDetails_backButton__Kya5X",additionalLink:"movieDetails_additionalLink__7Hd04",wrapperMovie:"movieDetails_wrapperMovie__bM8zr",movieDataWrapper:"movieDetails_movieDataWrapper__fAzna",movieImage:"movieDetails_movieImage__Q6iSO",overviewContent:"movieDetails_overviewContent__jr8LB",movieList:"movieDetails_movieList__5Y47i",movieInfo:"movieDetails_movieInfo__OT76K",genres:"movieDetails_genres__xvVWW",title:"movieDetails_title__SN6Ns",subTitle:"movieDetails_subTitle__L4hBt"},u=r(6046),v=r(2834),p=function(){var e,t,r=(0,s.UO)().id,p=(0,n.useState)(null),m=(0,a.Z)(p,2),d=m[0],f=m[1],h=(0,s.TH)();if((0,n.useEffect)((function(){(0,c.TP)(r).then(f)}),[r]),!d)return null;var _=d.poster_path,x=d.original_title,g=d.original_name,w=d.release_date,j=d.first_air_date,b=d.vote_average,k=d.genres,N=d.overview;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("div",{className:l.backWrapper,children:(0,v.jsxs)(i.rU,{to:null!==(e=null===(t=h.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/",className:l.backButton,children:[(0,v.jsx)(u.wFh,{}),"BACK"]})}),(0,v.jsxs)("div",{className:l.wrapperMovie,children:[(0,v.jsx)("img",{className:l.movieImage,src:"https://image.tmdb.org/t/p/w500".concat(_),alt:x,width:"300"}),(0,v.jsxs)("div",{className:l.movieDataWrapper,children:[(0,v.jsxs)("h2",{className:l.Title,children:[x||g," (",(0,v.jsx)("span",{children:parseInt(w||j)}),")"]}),(0,v.jsxs)("p",{className:l.overviewContent,children:["User Score: ","".concat(Math.round(10*b),"%")]}),(0,v.jsx)("h3",{className:l.subTitle,children:"Overview"}),(0,v.jsx)("p",{className:l.overviewContent,children:N}),(0,v.jsx)("h3",{className:l.subTitle,children:"Genres"}),(0,v.jsx)("ul",{className:l.genres,children:k.map((function(e,t){return(0,v.jsx)("li",{style:{marginRight:"10px"},children:e.name},t)}))})]})]}),(0,v.jsxs)("div",{className:l.movieInfo,children:[(0,v.jsx)("h3",{className:l.subTitle,children:"Additional Information"}),(0,v.jsxs)("ul",{className:l.movieList,children:[(0,v.jsxs)("li",{children:[(0,v.jsx)(i.rU,{to:"cast",state:h.state,className:l.additionalLink,children:"Cast"})," "]}),(0,v.jsxs)("li",{children:[(0,v.jsx)(i.rU,{to:"review",state:h.state,className:l.additionalLink,children:"Reviews"})," "]})]})]}),(0,v.jsx)(n.Suspense,{fallback:(0,v.jsx)(o.a,{}),children:(0,v.jsx)(s.j3,{})})]})}},657:function(e,t,r){r.d(t,{Df:function(){return c},M1:function(){return l},TP:function(){return o},jP:function(){return u},z1:function(){return v}});var a=r(5861),n=r(7757),s=r.n(n),i=r(606);i.Z.defaults.baseURL="https://api.themoviedb.org/3",i.Z.defaults.params={api_key:"0f347322078f7ab31991a46962bbff3a",language:"en-US"};var c=function(){var e=(0,a.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/trending/movie/day");case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,a.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/movie/".concat(t));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/movie/".concat(t,"/credits"));case 3:return r=e.sent,e.abrupt("return",r.data.cast);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/movie/".concat(t,"/reviews"));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,a.Z)(s().mark((function e(t){var r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={params:{query:t,page:1}},e.prev=1,e.next=4,i.Z.get("/search/movie",r);case 4:return a=e.sent,e.abrupt("return",a.data.results);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=669.9835dcde.chunk.js.map