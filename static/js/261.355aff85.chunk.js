"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[261],{261:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var A=a(5861),c=a(9439),o=a(7757),r=a.n(o),n=a(2791),l=a(1243),s=a(7689),p=a(659),i=a(184),g=function(e){var t=e.cast;return(0,i.jsxs)("div",{className:"flex w-44 flex-col px-px",children:[(0,i.jsx)("img",{className:"mb-3 h-52 w-44 rounded-xl object-cover object-left-top shadow-sm",src:t.profile_path?"".concat(p.f_,"w200/").concat(t.profile_path):"".concat(p.Vm),alt:t.name}),(0,i.jsx)("p",{className:"li text-center text-lg font-normal leading-4 text-black",children:t.name}),(0,i.jsx)("p",{className:"pt-2 text-center text-lg font-light leading-4 text-amber-900",children:t.character})]})},u=function(){var e=(0,s.UO)().movieId,t=(0,n.useState)([]),a=(0,c.Z)(t,2),o=a[0],u=a[1];return(0,n.useEffect)((function(){var t=function(){var t=(0,A.Z)(r().mark((function t(a){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.Z.get("".concat(p._n,"movie/").concat(e,"/credits"),{params:{api_key:p.$h}});case 3:return t.abrupt("return",t.sent);case 6:throw t.prev=6,t.t0=t.catch(0),new Error(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}();t(e).then((function(e){u(e.data.cast.slice(0,18))}))}),[]),(0,n.useEffect)((function(){console.log("Cast Info -> ",o)}),[o]),(0,i.jsx)("div",{children:(0,i.jsx)("ul",{className:"flex flex-wrap gap-5 gap-y-7 pt-5",children:o.length>0&&o.map((function(e){return(0,i.jsx)("li",{children:(0,i.jsx)(g,{cast:e})},e.cast_id)}))})})}},659:function(e,t,a){a.d(t,{$h:function(){return A},Vm:function(){return n},Wn:function(){return r},Xx:function(){return l},_n:function(){return c},f_:function(){return o}});var A="ef7bafe2e7e1d8d31566e54facf4d836",c="https://api.themoviedb.org/3/",o="https://image.tmdb.org/t/p/",r=new URL(a(6002),a.b),n=new URL(a(9691),a.b),l={28:"Action",12:"Adventure",16:"Animation",35:"Comedy",80:"Crime",99:"Documentary",18:"Drama",10751:"Family",14:"Fantasy",36:"History",27:"Horror",10402:"Music",9648:"Mystery",10749:"Romance",878:"Science Fiction",10770:"TV Movie",53:"Thriller",10752:"War",37:"Western"}},9691:function(e){e.exports="data:image/png;base64,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"},6002:function(e,t,a){e.exports=a.p+"static/media/no-film-poster.9f35a86af4617e061bc5.jpg"}}]);
//# sourceMappingURL=261.355aff85.chunk.js.map