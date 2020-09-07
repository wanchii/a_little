(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4cf0deee"],{"057f":function(t,e,a){var i=a("fc6a"),n=a("241c").f,o={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],r=function(t){try{return n(t)}catch(e){return s.slice()}};t.exports.f=function(t){return s&&"[object Window]"==o.call(t)?r(t):n(i(t))}},1799:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"p-3 page",attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination justify-content-between mb-0"},[a("li",{staticClass:"page-item mr-2",class:{disabled:1===t.pages.current_page}},[a("a",{staticClass:"btn btn-outline-primary font-weight-bold",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.clickPage(t.pages.current_page-1)}}},[t._v("Prev")])]),t._l(t.pages.total_pages,(function(e,i){return a("li",{key:i,staticClass:"page-item",class:{active:e===t.pages.current_page}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.clickPage(e)}}},[t._v(t._s(e))])])})),a("li",{staticClass:"page-item ml-2",class:{disabled:t.pages.current_page===t.pages.total_pages}},[a("a",{staticClass:"btn btn-outline-primary font-weight-bold",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.clickPage(t.pages.current_page+1)}}},[t._v("Next")])])],2)])},n=[],o={data:function(){return{}},props:{pages:{}},methods:{clickPage:function(t){this.$emit("update",t)}}},s=o,r=a("2877"),c=Object(r["a"])(s,i,n,!1,null,null,null);e["a"]=c.exports},5349:function(t,e,a){},5530:function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));a("a4d3"),a("4de4"),a("4160"),a("e439"),a("dbb4"),a("b64b"),a("159b");function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}},"61bc":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"products"},[a("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("h2",{staticClass:"py-3 text-center"},[t._v("產品頁面")]),a("div",{staticClass:"d-flex justify-content-end"},[a("div",{staticClass:"btn btn-primary mb-3",attrs:{type:"button"},on:{click:function(e){return t.openModal("new")}}},[t._v("建立新產品")])]),a("table",{staticClass:"table product"},[t._m(0),a("tbody",t._l(t.products,(function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.category))]),a("td",[t._v(t._s(e.title))]),a("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(e.origin_price)))]),a("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(e.price)))]),a("td",[e.enabled?a("span",{staticClass:"text-success"},[t._v("啟用")]):a("span",{staticClass:"text-secondary"},[t._v("未啟用")])]),a("td",[a("div",{staticClass:"btn-group btn-group-sm",attrs:{role:"group","aria-label":"Basic"}},[a("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button"},on:{click:function(a){return t.openModal("edit",e)}}},[t._v("編輯")]),a("button",{staticClass:"btn btn-outline-danger",attrs:{button:"",type:"button"},on:{click:function(a){return t.openModal("delete",e)}}},[t._v("刪除")])])])])})),0)]),a("pagination",{attrs:{pages:t.pagination},on:{update:t.getProducts}}),a("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-xl",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(1),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-4"},[a("div",{staticClass:"form-group",attrs:{div:""}},[a("label",{attrs:{for:"inputImgUrl"}},[t._v("輸入圖片網址*")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempData.imageUrl[0],expression:"tempData.imageUrl[0]"}],staticClass:"form-control",attrs:{type:"text",id:"inputImgUrl",placeholder:"請輸入圖片網址"},domProps:{value:t.tempData.imageUrl[0]},on:{input:function(e){e.target.composing||t.$set(t.tempData.imageUrl,0,e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"customFile"}},[t._v(" 或 上傳圖片 "),t.status.fileUploading?a("i",{staticClass:"fas fa-cog fa-spin"}):t._e()]),a("input",{ref:"file",staticClass:"form-control customFileInput",attrs:{id:"customFile",type:"file"},on:{change:t.uploadFile}})]),a("img",{staticClass:"img-fluid",attrs:{src:t.tempData.imageUrl[0],alt:""}})]),a("div",{staticClass:"col-8"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"inputTitle"}},[t._v("標題*")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempData.title,expression:"tempData.title"}],staticClass:"form-control",attrs:{type:"text",id:"inputTitle",placeholder:"請輸入標題"},domProps:{value:t.tempData.title},on:{input:function(e){e.target.composing||t.$set(t.tempData,"title",e.target.value)}}})]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"inputCategory"}},[t._v("分類*")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempData.category,expression:"tempData.category"}],staticClass:"form-control",attrs:{type:"text",id:"inputCategory",placeholder:"請輸入分類"},domProps:{value:t.tempData.category},on:{input:function(e){e.target.composing||t.$set(t.tempData,"category",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"inputUnit"}},[t._v("單位")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempData.unit,expression:"tempData.unit"}],staticClass:"form-control",attrs:{type:"text",id:"inputUnit",placeholder:"請輸入單位"},domProps:{value:t.tempData.unit},on:{input:function(e){e.target.composing||t.$set(t.tempData,"unit",e.target.value)}}})])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"inputOriginalPrice"}},[t._v("原價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempData.origin_price,expression:"tempData.origin_price"}],staticClass:"form-control",attrs:{type:"number",placeholder:"請輸入原價",id:"inputOriginalPrice"},domProps:{value:t.tempData.origin_price},on:{input:function(e){e.target.composing||t.$set(t.tempData,"origin_price",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"inputPrice"}},[t._v("售價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempData.price,expression:"tempData.price"}],staticClass:"form-control",attrs:{type:"number",placeholder:"請輸入售價",id:"inputPrice"},domProps:{value:t.tempData.price},on:{input:function(e){e.target.composing||t.$set(t.tempData,"price",e.target.value)}}})])]),a("hr"),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"inputContent"}},[t._v("產品描述*")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempData.content,expression:"tempData.content"}],staticClass:"form-control",attrs:{id:"inputContent",rows:"3"},domProps:{value:t.tempData.content},on:{input:function(e){e.target.composing||t.$set(t.tempData,"content",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"inputDescription"}},[t._v("說明內容*")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempData.description,expression:"tempData.description"}],staticClass:"form-control",attrs:{id:"inputDescription",rows:"3"},domProps:{value:t.tempData.description},on:{input:function(e){e.target.composing||t.$set(t.tempData,"description",e.target.value)}}})]),a("div",{staticClass:"form-group form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempData.enabled,expression:"tempData.enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"checkEnabled"},domProps:{checked:Array.isArray(t.tempData.enabled)?t._i(t.tempData.enabled,null)>-1:t.tempData.enabled},on:{change:function(e){var a=t.tempData.enabled,i=e.target,n=!!i.checked;if(Array.isArray(a)){var o=null,s=t._i(a,o);i.checked?s<0&&t.$set(t.tempData,"enabled",a.concat([o])):s>-1&&t.$set(t.tempData,"enabled",a.slice(0,s).concat(a.slice(s+1)))}else t.$set(t.tempData,"enabled",n)}}}),a("label",{staticClass:"form-check-label",attrs:{for:"checkEnabled"}},[t._v("是否啟用")])])])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.updateItem}},[t._v("確認")])])])])]),a("div",{staticClass:"modal fade",attrs:{id:"deleteModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(2),a("div",{staticClass:"modal-body"},[t._v(" 是否刪除 "+t._s(t.tempData.title)+" 商品(刪除後將無法恢復)。 ")]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.deleteItem}},[t._v("確認刪除")])])])])])],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"font-weight-bold"},[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("分類")]),a("th",{attrs:{scope:"col"}},[t._v("產品名稱")]),a("th",{attrs:{scope:"col"}},[t._v("原價")]),a("th",{attrs:{scope:"col"}},[t._v("售價")]),a("th",{attrs:{scope:"col"}},[t._v("是否啟用")]),a("th",{attrs:{scope:"col"}},[t._v("編輯")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-secondary text-white"},[a("h5",{staticClass:"modal-title"},[t._v("新增/編輯 產品")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-danger"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("刪除產品")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],o=(a("99af"),a("5530")),s=a("1799"),r={data:function(){return{products:[],pagination:{},tempData:{imageUrl:[]},isLoading:!1,status:{fileUploading:!1}}},props:["token"],components:{Pagination:s["a"]},created:function(){this.getProducts()},methods:{getProducts:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/api/").concat("326aaf6a-8ca5-4a46-b815-11a755b4a30c","/admin/ec/products?page=").concat(e);this.$http.get(a).then((function(e){t.isLoading=!1,t.products=e.data.data,t.pagination=e.data.meta.pagination,t.tempData.id&&(t.tempData={imageUrl:[]},$("#productModal").modal("hide"))})).catch((function(e){t.isLoading=!1,console.log(e),t.$router.push("login")}))},getDetails:function(t){var e=this,a="".concat("https://course-ec-api.hexschool.io/api/").concat("326aaf6a-8ca5-4a46-b815-11a755b4a30c","/admin/ec/product/").concat(t);this.$http.get(a).then((function(t){e.tempData=t.data.data,$("#productModal").modal("show")}))},openModal:function(t,e){switch(t){case"new":this.tempData={imageUrl:[]},$("#productModal").modal("show");break;case"edit":this.getDetails(e.id);break;case"delete":this.tempData=Object(o["a"])({},e),$("#deleteModal").modal("show");break;default:break}},updateItem:function(){var t=this,e="".concat("https://course-ec-api.hexschool.io/api/").concat("326aaf6a-8ca5-4a46-b815-11a755b4a30c","/admin/ec/product/").concat(this.tempData.id),a="".concat("https://course-ec-api.hexschool.io/api/").concat("326aaf6a-8ca5-4a46-b815-11a755b4a30c","/admin/ec/product");this.tempData.id?this.$http.patch(e,this.tempData).then((function(){t.getProducts(),t.$bus.$emit("message:push","完成編輯-商品資料 ","success")})):this.$http.post(a,this.tempData).then((function(){t.getProducts(),$("#productModal").modal("hide"),t.$bus.$emit("message:push","新增一筆商品資料 ","success")})).catch((function(e){t.isLoading=!1;var a=e.response.data;$("#productModal").modal("hide"),t.$bus.$emit("message:push","出現錯誤，請確認\n              ".concat(a),"danger")}))},deleteItem:function(){var t=this;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io/api/").concat("326aaf6a-8ca5-4a46-b815-11a755b4a30c","/admin/ec/product/").concat(this.tempData.id);this.$http.delete(e).then((function(){t.getProducts(),t.isLoading=!1,$("#deleteModal").modal("hide")})).catch((function(e){console.log(e),t.isLoading=!1}))},uploadFile:function(){var t=this,e=this.$refs.file.files[0],a=new FormData;a.append("file",e);var i="".concat("https://course-ec-api.hexschool.io/api/").concat("326aaf6a-8ca5-4a46-b815-11a755b4a30c","/admin/storage");this.status.fileUploading=!0,this.$http.post(i,a,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){t.status.fileUploading=!1,200===e.status&&t.tempData.imageUrl.push(e.data.data.path)})).catch((function(){t.$bus.$emit("message:push","檔案上傳失敗，請確認檔案大小是否超過 2MB","danger"),t.status.fileUploading=!1}))}}},c=r,l=(a("e5f4"),a("2877")),u=Object(l["a"])(c,i,n,!1,null,"7f7e7c3c",null);e["default"]=u.exports},"746f":function(t,e,a){var i=a("428f"),n=a("5135"),o=a("e538"),s=a("9bf2").f;t.exports=function(t){var e=i.Symbol||(i.Symbol={});n(e,t)||s(e,t,{value:o.f(t)})}},a4d3:function(t,e,a){"use strict";var i=a("23e7"),n=a("da84"),o=a("d066"),s=a("c430"),r=a("83ab"),c=a("4930"),l=a("fdbf"),u=a("d039"),p=a("5135"),d=a("e8b5"),f=a("861d"),m=a("825a"),g=a("7b0b"),b=a("fc6a"),v=a("c04e"),h=a("5c6c"),y=a("7c73"),C=a("df75"),_=a("241c"),D=a("057f"),w=a("7418"),P=a("06cf"),O=a("9bf2"),x=a("d1e7"),$=a("9112"),k=a("6eeb"),j=a("5692"),S=a("f772"),U=a("d012"),M=a("90e3"),N=a("b622"),L=a("e538"),E=a("746f"),F=a("d44e"),I=a("69f3"),T=a("b727").forEach,A=S("hidden"),J="Symbol",B="prototype",Q=N("toPrimitive"),W=I.set,q=I.getterFor(J),z=Object[B],G=n.Symbol,H=o("JSON","stringify"),K=P.f,R=O.f,V=D.f,X=x.f,Y=j("symbols"),Z=j("op-symbols"),tt=j("string-to-symbol-registry"),et=j("symbol-to-string-registry"),at=j("wks"),it=n.QObject,nt=!it||!it[B]||!it[B].findChild,ot=r&&u((function(){return 7!=y(R({},"a",{get:function(){return R(this,"a",{value:7}).a}})).a}))?function(t,e,a){var i=K(z,e);i&&delete z[e],R(t,e,a),i&&t!==z&&R(z,e,i)}:R,st=function(t,e){var a=Y[t]=y(G[B]);return W(a,{type:J,tag:t,description:e}),r||(a.description=e),a},rt=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof G},ct=function(t,e,a){t===z&&ct(Z,e,a),m(t);var i=v(e,!0);return m(a),p(Y,i)?(a.enumerable?(p(t,A)&&t[A][i]&&(t[A][i]=!1),a=y(a,{enumerable:h(0,!1)})):(p(t,A)||R(t,A,h(1,{})),t[A][i]=!0),ot(t,i,a)):R(t,i,a)},lt=function(t,e){m(t);var a=b(e),i=C(a).concat(mt(a));return T(i,(function(e){r&&!pt.call(a,e)||ct(t,e,a[e])})),t},ut=function(t,e){return void 0===e?y(t):lt(y(t),e)},pt=function(t){var e=v(t,!0),a=X.call(this,e);return!(this===z&&p(Y,e)&&!p(Z,e))&&(!(a||!p(this,e)||!p(Y,e)||p(this,A)&&this[A][e])||a)},dt=function(t,e){var a=b(t),i=v(e,!0);if(a!==z||!p(Y,i)||p(Z,i)){var n=K(a,i);return!n||!p(Y,i)||p(a,A)&&a[A][i]||(n.enumerable=!0),n}},ft=function(t){var e=V(b(t)),a=[];return T(e,(function(t){p(Y,t)||p(U,t)||a.push(t)})),a},mt=function(t){var e=t===z,a=V(e?Z:b(t)),i=[];return T(a,(function(t){!p(Y,t)||e&&!p(z,t)||i.push(Y[t])})),i};if(c||(G=function(){if(this instanceof G)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=M(t),a=function(t){this===z&&a.call(Z,t),p(this,A)&&p(this[A],e)&&(this[A][e]=!1),ot(this,e,h(1,t))};return r&&nt&&ot(z,e,{configurable:!0,set:a}),st(e,t)},k(G[B],"toString",(function(){return q(this).tag})),k(G,"withoutSetter",(function(t){return st(M(t),t)})),x.f=pt,O.f=ct,P.f=dt,_.f=D.f=ft,w.f=mt,L.f=function(t){return st(N(t),t)},r&&(R(G[B],"description",{configurable:!0,get:function(){return q(this).description}}),s||k(z,"propertyIsEnumerable",pt,{unsafe:!0}))),i({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:G}),T(C(at),(function(t){E(t)})),i({target:J,stat:!0,forced:!c},{for:function(t){var e=String(t);if(p(tt,e))return tt[e];var a=G(e);return tt[e]=a,et[a]=e,a},keyFor:function(t){if(!rt(t))throw TypeError(t+" is not a symbol");if(p(et,t))return et[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),i({target:"Object",stat:!0,forced:!c,sham:!r},{create:ut,defineProperty:ct,defineProperties:lt,getOwnPropertyDescriptor:dt}),i({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:ft,getOwnPropertySymbols:mt}),i({target:"Object",stat:!0,forced:u((function(){w.f(1)}))},{getOwnPropertySymbols:function(t){return w.f(g(t))}}),H){var gt=!c||u((function(){var t=G();return"[null]"!=H([t])||"{}"!=H({a:t})||"{}"!=H(Object(t))}));i({target:"JSON",stat:!0,forced:gt},{stringify:function(t,e,a){var i,n=[t],o=1;while(arguments.length>o)n.push(arguments[o++]);if(i=e,(f(e)||void 0!==t)&&!rt(t))return d(e)||(e=function(t,e){if("function"==typeof i&&(e=i.call(this,t,e)),!rt(e))return e}),n[1]=e,H.apply(null,n)}})}G[B][Q]||$(G[B],Q,G[B].valueOf),F(G,J),U[A]=!0},dbb4:function(t,e,a){var i=a("23e7"),n=a("83ab"),o=a("56ef"),s=a("fc6a"),r=a("06cf"),c=a("8418");i({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(t){var e,a,i=s(t),n=r.f,l=o(i),u={},p=0;while(l.length>p)a=n(i,e=l[p++]),void 0!==a&&c(u,e,a);return u}})},e439:function(t,e,a){var i=a("23e7"),n=a("d039"),o=a("fc6a"),s=a("06cf").f,r=a("83ab"),c=n((function(){s(1)})),l=!r||c;i({target:"Object",stat:!0,forced:l,sham:!r},{getOwnPropertyDescriptor:function(t,e){return s(o(t),e)}})},e538:function(t,e,a){var i=a("b622");e.f=i},e5f4:function(t,e,a){"use strict";var i=a("5349"),n=a.n(i);n.a}}]);
//# sourceMappingURL=chunk-4cf0deee.2862c59a.js.map