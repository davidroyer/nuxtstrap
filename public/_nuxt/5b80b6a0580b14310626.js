(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{216:function(t,e,o){var content=o(219);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(45).default)("0c3b204d",content,!0,{sourceMap:!1})},218:function(t,e,o){"use strict";var n=o(216);o.n(n).a},219:function(t,e,o){(t.exports=o(44)(!1)).push([t.i,".post-title[data-v-29d5be22]{text-transform:capitalize}.post-list[data-v-29d5be22]{list-style-type:none;display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row wrap}.post-item[data-v-29d5be22]{-webkit-box-flex:0;flex:0 1 280px;margin:.75em;padding:.5em 1em;height:140px;border:2px solid #d3d3d3}.post-title[data-v-29d5be22]{font-size:1.25em;font-weight:400}",""])},225:function(t,e,o){"use strict";o.r(e);o(61);var n={head:{title:"Posts"},asyncData:function(t){var e,o;return regeneratorRuntime.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.app,n.next=3,regeneratorRuntime.awrap(e.$axios.$get("posts"));case 3:return o=n.sent,n.abrupt("return",{posts:o});case 5:case"end":return n.stop()}}))}},r=(o(218),o(24)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"posts"},[o("h2",[t._v("Posts")]),t._v(" "),o("ul",{staticClass:"post-list"},t._l(t.posts,(function(e){return o("li",{key:e.id,staticClass:"post-item"},[o("h4",{staticClass:"post-title",domProps:{innerHTML:t._s(e.title)}}),t._v(" "),o("nuxt-link",{staticClass:"post-link",attrs:{to:"/posts/"+e.id}},[t._v("View Post")])],1)})),0)])}),[],!1,null,"29d5be22",null);e.default=component.exports}}]);