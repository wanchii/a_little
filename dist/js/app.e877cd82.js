(function(e){function n(n){for(var a,c,u=n[0],i=n[1],s=n[2],d=0,l=[];d<u.length;d++)c=u[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&l.push(o[c][0]),o[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);f&&f(n);while(l.length)l.shift()();return r.push.apply(r,s||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],a=!0,c=1;c<t.length;c++){var u=t[c];0!==o[u]&&(a=!1)}a&&(r.splice(n--,1),e=i(i.s=t[0]))}return e}var a={},c={app:0},o={app:0},r=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0dceab1a":"98772239","chunk-1b35ff38":"80d9fec7","chunk-262d3d43":"d587ece5","chunk-2d0ac58a":"2ac44286","chunk-2d0cf4c3":"c4c88204","chunk-2d0d5fb5":"25e8fdba","chunk-2d0d5ff2":"5720dd89","chunk-2d22671c":"135fb1d7","chunk-2f6b98c1":"0f7dcdb1","chunk-50206586":"334659f9","chunk-740c0c51":"0a598dc4","chunk-768ba3bd":"2c1dc0a7","chunk-7e8467ef":"d5d3b010","chunk-84c620a8":"a0ff748f","chunk-8bc9062a":"e3b7adbe","chunk-d174731e":"68f3b2f6"}[e]+".js"}function i(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-1b35ff38":1,"chunk-262d3d43":1,"chunk-2f6b98c1":1,"chunk-50206586":1,"chunk-740c0c51":1,"chunk-84c620a8":1,"chunk-d174731e":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise((function(n,t){for(var a="css/"+({}[e]||e)+"."+{"chunk-0dceab1a":"31d6cfe0","chunk-1b35ff38":"ce622d50","chunk-262d3d43":"28146bc9","chunk-2d0ac58a":"31d6cfe0","chunk-2d0cf4c3":"31d6cfe0","chunk-2d0d5fb5":"31d6cfe0","chunk-2d0d5ff2":"31d6cfe0","chunk-2d22671c":"31d6cfe0","chunk-2f6b98c1":"e85babf3","chunk-50206586":"774c8511","chunk-740c0c51":"d89959fd","chunk-768ba3bd":"31d6cfe0","chunk-7e8467ef":"31d6cfe0","chunk-84c620a8":"4f157b38","chunk-8bc9062a":"31d6cfe0","chunk-d174731e":"e16d7731"}[e]+".css",o=i.p+a,r=document.getElementsByTagName("link"),u=0;u<r.length;u++){var s=r[u],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===a||d===o))return n()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){s=l[u],d=s.getAttribute("data-href");if(d===a||d===o)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var a=n&&n.target&&n.target.src||o,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete c[e],f.parentNode.removeChild(f),t(r)},f.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){c[e]=0})));var a=o[e];if(0!==a)if(a)n.push(a[2]);else{var r=new Promise((function(n,t){a=o[e]=[n,t]}));n.push(a[2]=r);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(e);var l=new Error;s=function(n){d.onerror=d.onload=null,clearTimeout(f);var t=o[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",l.name="ChunkLoadError",l.type=a,l.request=c,t[1](l)}o[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(n)},i.m=e,i.c=a,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)i.d(t,a,function(n){return e[n]}.bind(null,a));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/a_little/dist/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var f=d;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("4de4"),t("4160"),t("b64b"),t("159b"),t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),c=t("9062"),o=t.n(c),r=(t("e40d"),t("bc3a")),u=t.n(r),i=t("a7fe"),s=t.n(i),d=t("7bb1"),l=t("4c93"),f=t("60d4"),h=t("5873"),p=t("4eb5"),b=t.n(p),m=t("6c42"),g=(t("da96"),t("1157")),k=t.n(g);t("4989"),t("1eb4");a["a"].prototype.$bus=new a["a"];var v=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("Toast"),t("router-view")],1)},y=[],w=(t("99af"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticStyle:{position:"fixed",top:"20px",right:"20px","min-width":"300px","z-index":"11000"}},e._l(e.messages,(function(n,a){return t("div",{key:a,staticClass:"toast fade show",attrs:{id:"toast-"+a,role:"alert","aria-live":"assertive","aria-atomic":"true","data-autohide":"false"}},[t("div",{staticClass:"toast-header"},[t("div",{staticClass:"inline-block rounded mr-2",class:"bg-"+n.status,staticStyle:{width:"20px",height:"20px"}}),t("strong",{staticClass:"mr-auto chewy"},[e._v("後台系統")]),t("small",[e._v("現在")]),t("button",{staticClass:"ml-2 mb-1 close",attrs:{type:"button","data-dismiss":"toast","aria-label":"Close"},on:{click:function(n){return e.closeToast("toast-"+a)}}},[t("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])]),t("div",{staticClass:"toast-body"},[e._v(" "+e._s(n.message)+" ")])])})),0)}),_=[],O=(t("a434"),{name:"Toasts",data:function(){return{messages:[]}},created:function(){var e=this;e.$bus.$on("message:push",(function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning";e.updateMessage(n,t)}))},methods:{updateMessage:function(e,n){var t=Math.floor(new Date/1e3);this.messages.push({message:e,status:n,timestamp:t}),this.removeMessageWithTiming(t)},removeMessage:function(e){this.messages.splice(e,1)},removeMessageWithTiming:function(e){var n=this;setTimeout((function(){n.messages.forEach((function(t,a){t.timestamp===e&&n.messages.splice(a,1)}))}),5e3)},closeToast:function(e){$("#".concat(e)).toast("hide")}}}),C=O,x=(t("f515"),t("2877")),T=Object(x["a"])(C,w,_,!1,null,null,null),j=T.exports,P={data:function(){return{isLoading:!1,products:[]}},components:{Toast:j},mounted:function(){var e=this;this.$http.get("".concat("https://course-ec-api.hexschool.io/api/").concat("326aaf6a-8ca5-4a46-b815-11a755b4a30c","/ec/products")).then((function(n){e.products=n.data.data}))}},E=P,S=(t("5c0b"),Object(x["a"])(E,v,y,!1,null,null,null)),M=S.exports,L=(t("d3b7"),t("8c4f"));a["a"].use(L["a"]);var N=[{path:"/",component:function(){return t.e("chunk-2d0d5fb5").then(t.bind(null,"7138"))},children:[{path:"",component:function(){return t.e("chunk-262d3d43").then(t.bind(null,"bb51"))}},{path:"/about",name:"About",component:function(){return t.e("chunk-8bc9062a").then(t.bind(null,"9cbb"))}},{path:"/products",component:function(){return t.e("chunk-84c620a8").then(t.bind(null,"ed84"))}},{path:"/product/:id",component:function(){return t.e("chunk-d174731e").then(t.bind(null,"658f"))}},{path:"/cart",component:function(){return t.e("chunk-2d0cf4c3").then(t.bind(null,"62b3"))}},{path:"/recipe",component:function(){return t.e("chunk-50206586").then(t.bind(null,"e35e"))}}]},{path:"/checkout_order",component:function(){return t.e("chunk-2d0ac58a").then(t.bind(null,"18c0"))}},{path:"/checkout_payment/:id",component:function(){return t.e("chunk-2d0d5ff2").then(t.bind(null,"7157"))}},{path:"/welldone",component:function(){return t.e("chunk-2d22671c").then(t.bind(null,"e94f"))}},{path:"/login",component:function(){return t.e("chunk-1b35ff38").then(t.bind(null,"a55b"))}},{path:"/admin",component:function(){return t.e("chunk-740c0c51").then(t.bind(null,"5044"))},children:[{path:"products",component:function(){return t.e("chunk-2f6b98c1").then(t.bind(null,"85d9"))}},{path:"coupons",component:function(){return t.e("chunk-0dceab1a").then(t.bind(null,"4d3a"))}},{path:"orders",component:function(){return t.e("chunk-7e8467ef").then(t.bind(null,"fad5"))}},{path:"storages",component:function(){return t.e("chunk-768ba3bd").then(t.bind(null,"042e"))}}]}],A=new L["a"]({routes:N}),B=A,D=(t("a9e3"),t("b680"),t("ac1f"),t("5319"),function(e){var n=Number(e);return"$".concat(n.toFixed(0).replace(/./g,(function(e,n,t){var a=n&&"."!==e&&(t.length-n)%3===0?", ".concat(e).replace(/\s/g,""):e;return a})))});window.$=k.a,a["a"].config.productionTip=!1,a["a"].use(m["a"],{position:"bottom-right",newestOnTop:!0,maxToasts:20,transition:"Vue-Toastification__bounce",transitionDuration:1e3,draggable:!0,draggablePercent:.6,pauseOnFocusLoss:!0,pauseOnHover:!0,closeOnClick:!0,timeout:3500,container:document.body,toastClassName:[],bodyClassName:[],hideProgressBar:!0,hideCloseButton:!1,icon:!0}),a["a"].use(s.a,u.a),a["a"].use(o.a),a["a"].use(o.a,{canCancel:!1,color:"#B08C7D",loader:"dots",width:50,height:50,backgroundColor:"#ffffff",isFullPage:!0,opacity:.8}),a["a"].use(h["b"]),a["a"].use(b.a),a["a"].filter("currency",D),Object.keys(l).forEach((function(e){Object(d["d"])(e,l[e])})),Object(d["c"])({classes:{valid:"is-valid",invalid:"is-invalid"}}),Object(d["e"])("tw",f),a["a"].component("ValidationObserver",d["a"]),a["a"].component("ValidationProvider",d["b"]),a["a"].component("Loading",o.a),new a["a"]({router:B,render:function(e){return e(M)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";var a=t("9c0c"),c=t.n(a);c.a},"9c0c":function(e,n,t){},ead7:function(e,n,t){},f515:function(e,n,t){"use strict";var a=t("ead7"),c=t.n(a);c.a}});
//# sourceMappingURL=app.e877cd82.js.map