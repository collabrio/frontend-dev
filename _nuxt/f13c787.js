(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{314:function(t,e,r){"use strict";r.r(e);r(210);var n=r(73),o=r(75),c=r(144),l=r(145),f=r(99),d=r(24),h=r(74);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var y=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},m=function(t){Object(c.a)(r,t);var e=v(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return Object(o.a)(r,[{key:"linkClasses",get:function(){return"text-blue-600 hover:text-blue-900"}}]),r}(h.Vue);y([Object(h.Prop)({default:"empty-link"})],m.prototype,"href",void 0),y([Object(h.Prop)({default:!0})],m.prototype,"useNuxtLink",void 0);var j=m=y([h.Component],m),O=r(13),component=Object(O.a)(j,(function(){var t=this.$createElement,e=this._self._c||t;return this.useNuxtLink?e("NuxtLink",{class:this.linkClasses,attrs:{to:this.href}},[this._t("default")],2):e("a",{class:this.linkClasses,attrs:{href:this.href}},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},315:function(t,e,r){"use strict";r.r(e);r(210);var n=r(73),o=r(75),c=r(144),l=r(145),f=r(99),d=r(24),h=r(74);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var y=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},m=function(t){Object(c.a)(r,t);var e=v(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return Object(o.a)(r,[{key:"classes",get:function(){return this.borderless?"":"border-b border-gray-200"}}]),r}(h.Vue);y([Object(h.Prop)({default:!1})],m.prototype,"borderless",void 0);var j=m=y([h.Component],m),O=r(13),component=Object(O.a)(j,(function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.classes},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},317:function(t,e,r){"use strict";r.r(e);r(318),r(210),r(320);var n=r(73),o=r(75),c=r(144),l=r(145),f=r(99),d=r(24),h=r(74),v=r(41),y=r(146);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var j=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},O=function(t){Object(c.a)(r,t);var e=m(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).buttonType=y.ButtonType,t}return Object(o.a)(r,[{key:"computedPageTitle",get:function(){if(this.pageTitle)return this.pageTitle;var path=this.$nuxt.$route.path,t=Object.values(v.a).find((function(t){return t.path===path}));if(!t)throw new Error("Error in ActionStripe.vue: Route not found. Either the route is messed, or you should provide a (valid) pageTitle.");return t.pageTitle}}]),r}(h.Vue);j([Object(h.Prop)()],O.prototype,"pageTitle",void 0);var w=O=j([h.Component],O),x=r(13),component=Object(x.a)(w,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full h-16 sm:flex sm:items-center px-4 py-4 sm:justify-between sm:px-6 lg:px-8"},[e("div",{staticClass:"flex-1 min-w-0"},[e("h2",{staticClass:"text-lg font-medium leading-6 text-gray-900 sm:truncate"},[this._t("title",[this._v(this._s(this.computedPageTitle))])],2)]),this._v(" "),e("div",{staticClass:"mt-4 flex sm:mt-0 sm:ml-4"},[this._t("actions")],2)])}),[],!1,null,null,null);e.default=component.exports},318:function(t,e,r){"use strict";var n=r(6),o=r(51).find,c=r(147),l=r(31),f=!0,d=l("find");"find"in[]&&Array(1).find((function(){f=!1})),n({target:"Array",proto:!0,forced:f||!d},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),c("find")},320:function(t,e,r){var n=r(6),o=r(212).values;n({target:"Object",stat:!0},{values:function(t){return o(t)}})},324:function(t,e,r){var content=r(335);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(53).default)("de6af1f6",content,!0,{sourceMap:!1})},334:function(t,e,r){"use strict";r(324)},335:function(t,e,r){(e=r(52)(!1)).push([t.i,".collabrio-table-theme th{padding:1.25rem .75rem!important;font-weight:500;color:#4b5563!important}.collabrio-table-theme th,.vgt-wrap__footer{background:#f9fafb!important}.collabrio-table-theme td{padding:1.25rem .75rem!important}",""]),t.exports=e},343:function(t,e,r){"use strict";r.r(e);var n={props:{items:{type:Array,default:function(){return[]}}}},o=r(13),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"mt-10 sm:hidden"},[this._m(0),this._v(" "),e("ul",{staticClass:"mt-3 border-t border-gray-200 divide-y divide-gray-100"},[e("li",[e("a",{staticClass:"group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6",attrs:{href:"#"}},[this._m(1),this._v(" "),e("svg",{staticClass:"ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"px-4 sm:px-6"},[e("h2",{staticClass:"text-gray-500 text-xs font-medium uppercase tracking-wide"},[this._v("\n        Projects\n      ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"flex items-center truncate space-x-3"},[e("span",{staticClass:"w-2.5 h-2.5 flex-shrink-0 rounded-full bg-pink-600",attrs:{"aria-hidden":"true"}}),this._v(" "),e("span",{staticClass:"font-medium truncate text-sm leading-6"},[this._v("\n              GraphQL API\n              "),e("span",{staticClass:"truncate font-normal text-gray-500"},[this._v("in Engineering")])])])}],!1,null,null,null);e.default=component.exports},344:function(t,e,r){"use strict";r.r(e);r(45),r(148),r(76),r(210);var n=r(15),o=r(73),c=r(75),l=r(144),f=r(145),d=r(99),h=r(24),v=r(74),y=r(150),m=r(98),j=r(146),O=r(314);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var R=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},_=function(t){Object(l.a)(r,t);var e=x(r);function r(){var t;return Object(o.a)(this,r),(t=e.apply(this,arguments)).buttonType=j.ButtonType,t}return Object(c.a)(r,[{key:"columns",get:function(){return[{label:"Company",field:"company"},{label:"Project Name",field:"projectName"},{label:"Projected Value",field:"value"},{label:"Stage",field:"currentStage"},{label:"Next Step Due Date",field:"nextStepDueDate"},{label:"Contact",field:"contact"}].map((function(t){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},t)}))}},{key:"rows",get:function(){return this.$store.state.projects.map((function(t){return{company:t.customer.name,projectName:{href:"/project/".concat(Object(m.a)(t.projectId)),content:t.projectName},value:t.projectValue,currentStage:t.nextStep,nextStepDueDate:(new Date).toISOString().slice(0,10),contact:t.pointOfContact}}))}}]),r}(v.Vue),P=_=R([Object(v.Component)({components:{Button:j.default,Link:O.default,VueGoodTable:y.a}})],_),C=(r(334),r(13)),component=Object(C.a)(P,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"my-8"},[r("VueGoodTable",{attrs:{columns:t.columns,rows:t.rows,"style-class":"vgt-table",theme:"collabrio-table-theme","pagination-options":{enabled:!0,mode:"records",perPage:10,position:"top",perPageDropdown:[20,50],dropdownAllowAll:!0,nextLabel:"Next",prevLabel:"Previous"}},scopedSlots:t._u([{key:"table-column",fn:function(e){return[r("span",[t._v("\n        "+t._s(e.column.label)+"\n      ")])]}},{key:"table-row",fn:function(e){return[e.row[e.column.field].href?r("span",[r("Link",{attrs:{href:e.row[e.column.field].href}},[t._v("\n          "+t._s(e.formattedRow[e.column.field].content)+"\n        ")])],1):r("span",[t._v("\n        "+t._s(e.formattedRow[e.column.field])+"\n      ")])]}},{key:"emptystate",fn:function(){return[t._v("\n      It looks like you don't have any open projects.\n    ")]},proxy:!0}])})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Link:r(314).default})},347:function(t,e,r){"use strict";r.r(e);var n=r(13),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("ProjectOverviewMobile"),this._v(" "),e("ProjectOverviewDesktop")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProjectOverviewMobile:r(343).default,ProjectOverviewDesktop:r(344).default})},356:function(t,e,r){"use strict";r.r(e);r(210);var n=r(73),o=r(75),c=r(144),l=r(145),f=r(99),d=r(24),h=r(74),v=r(41),y=r(213),m=r(146),j=r(315);function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var w=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},x=function(t){Object(c.a)(r,t);var e=O(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).buttonType=m.ButtonType,t}return Object(o.a)(r,[{key:"mounted",value:function(){this.$store.dispatch(y.ActionTypes.FETCH_PROJECTS),this.$store.dispatch(y.ActionTypes.FETCH_CUSTOMERS)}},{key:"onCreateNewProjectClick",value:function(){this.$router.push(v.a.createProject.path)}}]),r}(h.Vue),R=x=w([Object(h.Component)({middleware:["auth"],components:{Button:m.default,Header:j.default}})],x),_=r(13),component=Object(_.a)(R,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full"},[r("Header",[r("ActionStripe",{scopedSlots:t._u([{key:"actions",fn:function(){return[r("NuxtLink",{attrs:{to:"/create-project"}},[r("Button",{attrs:{"button-type":t.buttonType.Primary},on:{click:t.onCreateNewProjectClick}},[t._v("Create Project")])],1)]},proxy:!0}])})],1),t._v(" "),r("div",{staticClass:"w-4/5 mx-auto min-h-screen flex overflow-hidden bg-white"},[r("div",{staticClass:"flex flex-col w-0 flex-1 overflow-hidden"},[r("main",{staticClass:"flex-1 relative z-0 overflow-y-auto focus:outline-none",attrs:{tabindex:"0"}},[r("ProjectOverview")],1)])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:r(146).default,ActionStripe:r(317).default,Header:r(315).default,ProjectOverview:r(347).default})}}]);