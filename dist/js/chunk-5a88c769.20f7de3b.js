(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a88c769"],{"057f":function(t,a,e){var o=e("fc6a"),i=e("241c").f,s={}.toString,n="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],r=function(t){try{return i(t)}catch(a){return n.slice()}};t.exports.f=function(t){return n&&"[object Window]"==s.call(t)?r(t):i(o(t))}},1799:function(t,a,e){"use strict";var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{staticClass:"p-3 page",attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination justify-content-between mb-0"},[e("li",{staticClass:"page-item mr-2",class:{disabled:1===t.pages.current_page}},[e("a",{staticClass:"btn btn-outline-primary font-weight-bold",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.clickPage(t.pages.current_page-1)}}},[t._v("Prev")])]),t._l(t.pages.total_pages,(function(a,o){return e("li",{key:o,staticClass:"page-item",class:{active:a===t.pages.current_page}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.clickPage(a)}}},[t._v(t._s(a))])])})),e("li",{staticClass:"page-item ml-2",class:{disabled:t.pages.current_page===t.pages.total_pages}},[e("a",{staticClass:"btn btn-outline-primary font-weight-bold",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.clickPage(t.pages.current_page+1)}}},[t._v("Next")])])],2)])},i=[],s={data:function(){return{}},props:{pages:{}},methods:{clickPage:function(t){this.$emit("update",t)}}},n=s,r=e("2877"),c=Object(r["a"])(n,o,i,!1,null,null,null);a["a"]=c.exports},5530:function(t,a,e){"use strict";e.d(a,"a",(function(){return s}));e("a4d3"),e("4de4"),e("4160"),e("e439"),e("dbb4"),e("b64b"),e("159b");function o(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function i(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,o)}return e}function s(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?i(Object(e),!0).forEach((function(a){o(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}},"6bcb":function(t,a,e){"use strict";var o=e("d001"),i=e.n(o);i.a},"746f":function(t,a,e){var o=e("428f"),i=e("5135"),s=e("e538"),n=e("9bf2").f;t.exports=function(t){var a=o.Symbol||(o.Symbol={});i(a,t)||n(a,t,{value:s.f(t)})}},"85d9":function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"products"},[e("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),e("h2",{staticClass:"py-3 text-center"},[t._v("產品頁面")]),e("div",{staticClass:"d-flex justify-content-end"},[e("div",{staticClass:"btn btn-primary mb-3",attrs:{type:"button"},on:{click:function(a){return t.openModal("new")}}},[t._v("建立新產品")])]),e("table",{staticClass:"table product"},[t._m(0),e("tbody",t._l(t.products,(function(a){return e("tr",{key:a.id},[e("td",[t._v(t._s(a.category))]),e("td",[t._v(t._s(a.title))]),e("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(a.origin_price)))]),e("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(a.price)))]),e("td",[a.enabled?e("span",{staticClass:"text-success"},[t._v("啟用")]):e("span",{staticClass:"text-secondary"},[t._v("未啟用")])]),e("td",[e("div",{staticClass:"btn-group btn-group-sm",attrs:{role:"group","aria-label":"Basic"}},[e("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button"},on:{click:function(e){return t.openModal("edit",a)}}},[t._v("編輯")]),e("button",{staticClass:"btn btn-outline-danger",attrs:{button:"",type:"button"},on:{click:function(e){return t.openModal("delete",a)}}},[t._v("刪除")])])])])})),0)]),e("div",{staticClass:"d-flex justify-content-center my-4"},[e("pagination",{attrs:{pages:t.pagination},on:{update:t.getProducts}})],1),e("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-xl",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[t._m(1),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-4"},[e("div",{staticClass:"form-group",attrs:{div:""}},[e("label",{attrs:{for:"inputImgUrl"}},[t._v("輸入圖片網址*")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempData.imageUrl[0],expression:"tempData.imageUrl[0]"}],staticClass:"form-control",attrs:{type:"text",id:"inputImgUrl",placeholder:"請輸入圖片網址"},domProps:{value:t.tempData.imageUrl[0]},on:{input:function(a){a.target.composing||t.$set(t.tempData.imageUrl,0,a.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"customFile"}},[t._v(" 或 上傳圖片 "),t.status.fileUploading?e("i",{staticClass:"fas fa-cog fa-spin"}):t._e()]),e("input",{ref:"file",staticClass:"form-control customFileInput",attrs:{id:"customFile",type:"file"},on:{change:t.uploadFile}})]),e("img",{staticClass:"img-fluid",attrs:{src:t.tempData.imageUrl[0],alt:""}})]),e("div",{staticClass:"col-8"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"inputTitle"}},[t._v("標題*")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempData.title,expression:"tempData.title"}],staticClass:"form-control",attrs:{type:"text",id:"inputTitle",placeholder:"請輸入標題"},domProps:{value:t.tempData.title},on:{input:function(a){a.target.composing||t.$set(t.tempData,"title",a.target.value)}}})]),e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group col-md-6"},[e("label",{attrs:{for:"inputCategory"}},[t._v("分類*")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempData.category,expression:"tempData.category"}],staticClass:"form-control",attrs:{type:"text",id:"inputCategory",placeholder:"請輸入分類"},domProps:{value:t.tempData.category},on:{input:function(a){a.target.composing||t.$set(t.tempData,"category",a.target.value)}}})]),e("div",{staticClass:"form-group col-md-6"},[e("label",{attrs:{for:"inputUnit"}},[t._v("單位")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempData.unit,expression:"tempData.unit"}],staticClass:"form-control",attrs:{type:"text",id:"inputUnit",placeholder:"請輸入單位"},domProps:{value:t.tempData.unit},on:{input:function(a){a.target.composing||t.$set(t.tempData,"unit",a.target.value)}}})])]),e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group col-md-6"},[e("label",{attrs:{for:"inputOriginalPrice"}},[t._v("原價")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempData.origin_price,expression:"tempData.origin_price"}],staticClass:"form-control",attrs:{type:"number",placeholder:"請輸入原價",id:"inputOriginalPrice"},domProps:{value:t.tempData.origin_price},on:{input:function(a){a.target.composing||t.$set(t.tempData,"origin_price",a.target.value)}}})]),e("div",{staticClass:"form-group col-md-6"},[e("label",{attrs:{for:"inputPrice"}},[t._v("售價")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempData.price,expression:"tempData.price"}],staticClass:"form-control",attrs:{type:"number",placeholder:"請輸入售價",id:"inputPrice"},domProps:{value:t.tempData.price},on:{input:function(a){a.target.composing||t.$set(t.tempData,"price",a.target.value)}}})])]),e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group col-md-6"},[e("label",{attrs:{for:"inputOriginPlace"}},[t._v("產地")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempData.options.origin_place,expression:"tempData.options.origin_place"}],staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入原產地",id:"inputOriginPlace"},domProps:{value:t.tempData.options.origin_place},on:{input:function(a){a.target.composing||t.$set(t.tempData.options,"origin_place",a.target.value)}}})]),e("div",{staticClass:"form-group col-md-6"},[e("label",{attrs:{for:"choosePackage"}},[t._v("包裝方式")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.tempData.options.packing,expression:"tempData.options.packing"}],staticClass:"form-control",attrs:{id:"choosePackage"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.tempData.options,"packing",a.target.multiple?e:e[0])}}},[e("option",{attrs:{disabled:"",selected:"",value:""}},[t._v(" 請選擇 ")]),e("option",{attrs:{value:"袋裝"}},[t._v(" 袋裝 ")]),e("option",{attrs:{value:"散裝"}},[t._v(" 散裝 ")])])])]),e("hr"),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"inputContent"}},[t._v("產品說明*")]),e("VueEditor",{attrs:{id:"inputContent"},model:{value:t.tempData.content,callback:function(a){t.$set(t.tempData,"content",a)},expression:"tempData.content"}})],1),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"inputDescription"}},[t._v("產品描述*")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempData.description,expression:"tempData.description"}],staticClass:"form-control",attrs:{id:"inputDescription",rows:"3"},domProps:{value:t.tempData.description},on:{input:function(a){a.target.composing||t.$set(t.tempData,"description",a.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"inputRecipe"}},[t._v("料理方式")]),e("VueEditor",{attrs:{id:"inputRecipe"},model:{value:t.tempData.options.recipe,callback:function(a){t.$set(t.tempData.options,"recipe",a)},expression:"tempData.options.recipe"}})],1),e("div",{staticClass:"form-group"},[t._v(" 適配 "),e("div",{staticClass:"px-2"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempData.options.matchVeg,expression:"tempData.options.matchVeg"}],attrs:{type:"checkbox",id:"match"},domProps:{checked:Array.isArray(t.tempData.options.matchVeg)?t._i(t.tempData.options.matchVeg,null)>-1:t.tempData.options.matchVeg},on:{change:function(a){var e=t.tempData.options.matchVeg,o=a.target,i=!!o.checked;if(Array.isArray(e)){var s=null,n=t._i(e,s);o.checked?n<0&&t.$set(t.tempData.options,"matchVeg",e.concat([s])):n>-1&&t.$set(t.tempData.options,"matchVeg",e.slice(0,n).concat(e.slice(n+1)))}else t.$set(t.tempData.options,"matchVeg",i)}}}),e("label",{attrs:{for:"match"}},[t._v("蔬菜")])]),e("div",{staticClass:"px-2"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempData.options.matchSeafood,expression:"tempData.options.matchSeafood"}],attrs:{type:"checkbox",id:"match"},domProps:{checked:Array.isArray(t.tempData.options.matchSeafood)?t._i(t.tempData.options.matchSeafood,null)>-1:t.tempData.options.matchSeafood},on:{change:function(a){var e=t.tempData.options.matchSeafood,o=a.target,i=!!o.checked;if(Array.isArray(e)){var s=null,n=t._i(e,s);o.checked?n<0&&t.$set(t.tempData.options,"matchSeafood",e.concat([s])):n>-1&&t.$set(t.tempData.options,"matchSeafood",e.slice(0,n).concat(e.slice(n+1)))}else t.$set(t.tempData.options,"matchSeafood",i)}}}),e("label",{attrs:{for:"match"}},[t._v("海鮮")])]),e("div",{staticClass:"px-2"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempData.options.matchMeat,expression:"tempData.options.matchMeat"}],attrs:{type:"checkbox",id:"match"},domProps:{checked:Array.isArray(t.tempData.options.matchMeat)?t._i(t.tempData.options.matchMeat,null)>-1:t.tempData.options.matchMeat},on:{change:function(a){var e=t.tempData.options.matchMeat,o=a.target,i=!!o.checked;if(Array.isArray(e)){var s=null,n=t._i(e,s);o.checked?n<0&&t.$set(t.tempData.options,"matchMeat",e.concat([s])):n>-1&&t.$set(t.tempData.options,"matchMeat",e.slice(0,n).concat(e.slice(n+1)))}else t.$set(t.tempData.options,"matchMeat",i)}}}),e("label",{attrs:{for:"match"}},[t._v("肉類")])]),e("div",{staticClass:"px-2"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempData.options.matchDessert,expression:"tempData.options.matchDessert"}],attrs:{type:"checkbox",id:"match"},domProps:{checked:Array.isArray(t.tempData.options.matchDessert)?t._i(t.tempData.options.matchDessert,null)>-1:t.tempData.options.matchDessert},on:{change:function(a){var e=t.tempData.options.matchDessert,o=a.target,i=!!o.checked;if(Array.isArray(e)){var s=null,n=t._i(e,s);o.checked?n<0&&t.$set(t.tempData.options,"matchDessert",e.concat([s])):n>-1&&t.$set(t.tempData.options,"matchDessert",e.slice(0,n).concat(e.slice(n+1)))}else t.$set(t.tempData.options,"matchDessert",i)}}}),e("label",{attrs:{for:"match"}},[t._v("甜點")])]),e("div",{staticClass:"px-2"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempData.options.matchFruit,expression:"tempData.options.matchFruit"}],attrs:{type:"checkbox",id:"match"},domProps:{checked:Array.isArray(t.tempData.options.matchFruit)?t._i(t.tempData.options.matchFruit,null)>-1:t.tempData.options.matchFruit},on:{change:function(a){var e=t.tempData.options.matchFruit,o=a.target,i=!!o.checked;if(Array.isArray(e)){var s=null,n=t._i(e,s);o.checked?n<0&&t.$set(t.tempData.options,"matchFruit",e.concat([s])):n>-1&&t.$set(t.tempData.options,"matchFruit",e.slice(0,n).concat(e.slice(n+1)))}else t.$set(t.tempData.options,"matchFruit",i)}}}),e("label",{attrs:{for:"match"}},[t._v("水果")])]),e("div",{staticClass:"px-2"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempData.options.matchDrink,expression:"tempData.options.matchDrink"}],attrs:{type:"checkbox",id:"match"},domProps:{checked:Array.isArray(t.tempData.options.matchDrink)?t._i(t.tempData.options.matchDrink,null)>-1:t.tempData.options.matchDrink},on:{change:function(a){var e=t.tempData.options.matchDrink,o=a.target,i=!!o.checked;if(Array.isArray(e)){var s=null,n=t._i(e,s);o.checked?n<0&&t.$set(t.tempData.options,"matchDrink",e.concat([s])):n>-1&&t.$set(t.tempData.options,"matchDrink",e.slice(0,n).concat(e.slice(n+1)))}else t.$set(t.tempData.options,"matchDrink",i)}}}),e("label",{attrs:{for:"match"}},[t._v("飲料")])]),e("div",{staticClass:"px-2"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempData.options.matchDecoration,expression:"tempData.options.matchDecoration"}],attrs:{type:"checkbox",id:"match"},domProps:{checked:Array.isArray(t.tempData.options.matchDecoration)?t._i(t.tempData.options.matchDecoration,null)>-1:t.tempData.options.matchDecoration},on:{change:function(a){var e=t.tempData.options.matchDecoration,o=a.target,i=!!o.checked;if(Array.isArray(e)){var s=null,n=t._i(e,s);o.checked?n<0&&t.$set(t.tempData.options,"matchDecoration",e.concat([s])):n>-1&&t.$set(t.tempData.options,"matchDecoration",e.slice(0,n).concat(e.slice(n+1)))}else t.$set(t.tempData.options,"matchDecoration",i)}}}),e("label",{attrs:{for:"match"}},[t._v("點綴")])]),e("div",{staticClass:"px-2"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempData.options.matchRice,expression:"tempData.options.matchRice"}],attrs:{type:"checkbox",id:"match"},domProps:{checked:Array.isArray(t.tempData.options.matchRice)?t._i(t.tempData.options.matchRice,null)>-1:t.tempData.options.matchRice},on:{change:function(a){var e=t.tempData.options.matchRice,o=a.target,i=!!o.checked;if(Array.isArray(e)){var s=null,n=t._i(e,s);o.checked?n<0&&t.$set(t.tempData.options,"matchRice",e.concat([s])):n>-1&&t.$set(t.tempData.options,"matchRice",e.slice(0,n).concat(e.slice(n+1)))}else t.$set(t.tempData.options,"matchRice",i)}}}),e("label",{attrs:{for:"match"}},[t._v("米飯")])]),e("div",{staticClass:"px-2"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempData.options.matchSoup,expression:"tempData.options.matchSoup"}],attrs:{type:"checkbox",id:"match"},domProps:{checked:Array.isArray(t.tempData.options.matchSoup)?t._i(t.tempData.options.matchSoup,null)>-1:t.tempData.options.matchSoup},on:{change:function(a){var e=t.tempData.options.matchSoup,o=a.target,i=!!o.checked;if(Array.isArray(e)){var s=null,n=t._i(e,s);o.checked?n<0&&t.$set(t.tempData.options,"matchSoup",e.concat([s])):n>-1&&t.$set(t.tempData.options,"matchSoup",e.slice(0,n).concat(e.slice(n+1)))}else t.$set(t.tempData.options,"matchSoup",i)}}}),e("label",{attrs:{for:"match"}},[t._v("湯品")])])]),e("div",{staticClass:"form-group form-check"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempData.enabled,expression:"tempData.enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"checkEnabled"},domProps:{checked:Array.isArray(t.tempData.enabled)?t._i(t.tempData.enabled,null)>-1:t.tempData.enabled},on:{change:function(a){var e=t.tempData.enabled,o=a.target,i=!!o.checked;if(Array.isArray(e)){var s=null,n=t._i(e,s);o.checked?n<0&&t.$set(t.tempData,"enabled",e.concat([s])):n>-1&&t.$set(t.tempData,"enabled",e.slice(0,n).concat(e.slice(n+1)))}else t.$set(t.tempData,"enabled",i)}}}),e("label",{staticClass:"form-check-label",attrs:{for:"checkEnabled"}},[t._v("是否啟用")])])])])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.updateItem}},[t._v("確認")])])])])]),e("div",{staticClass:"modal fade",attrs:{id:"deleteModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[t._m(2),e("div",{staticClass:"modal-body"},[t._v(" 是否刪除 "+t._s(t.tempData.title)+" 商品(刪除後將無法恢復)。 ")]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),e("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.deleteItem}},[t._v("確認刪除")])])])])])],1)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",{staticClass:"font-weight-bold"},[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("分類")]),e("th",{attrs:{scope:"col"}},[t._v("產品名稱")]),e("th",{attrs:{scope:"col"}},[t._v("原價")]),e("th",{attrs:{scope:"col"}},[t._v("售價")]),e("th",{attrs:{scope:"col"}},[t._v("是否啟用")]),e("th",{attrs:{scope:"col"}},[t._v("編輯")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header bg-secondary text-white"},[e("h5",{staticClass:"modal-title"},[t._v("新增/編輯 產品")]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header bg-danger"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("刪除產品")]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],s=(e("99af"),e("5530")),n=e("1799"),r=e("5873"),c={data:function(){return{products:[],pagination:{},tempData:{imageUrl:[],options:{}},isLoading:!1,status:{fileUploading:!1}}},props:["token"],components:{Pagination:n["a"],VueEditor:r["a"]},created:function(){this.getProducts()},methods:{getProducts:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io/api/").concat("326aaf6a-8ca5-4a46-b815-11a755b4a30c","/admin/ec/products?page=").concat(a);this.$http.get(e).then((function(a){t.isLoading=!1,t.products=a.data.data,t.pagination=a.data.meta.pagination,t.tempData.id&&(t.tempData={imageUrl:[],options:{}},$("#productModal").modal("hide"))})).catch((function(a){t.isLoading=!1,console.log(a),t.$router.push("login")}))},getDetails:function(t){var a=this,e="".concat("https://course-ec-api.hexschool.io/api/").concat("326aaf6a-8ca5-4a46-b815-11a755b4a30c","/admin/ec/product/").concat(t);this.$http.get(e).then((function(t){a.tempData=t.data.data,$("#productModal").modal("show")}))},openModal:function(t,a){switch(t){case"new":this.tempData={imageUrl:[],options:{}},$("#productModal").modal("show");break;case"edit":this.getDetails(a.id);break;case"delete":this.tempData=Object(s["a"])({},a),$("#deleteModal").modal("show");break;default:break}},updateItem:function(){var t=this,a="".concat("https://course-ec-api.hexschool.io/api/").concat("326aaf6a-8ca5-4a46-b815-11a755b4a30c","/admin/ec/product/").concat(this.tempData.id),e="".concat("https://course-ec-api.hexschool.io/api/").concat("326aaf6a-8ca5-4a46-b815-11a755b4a30c","/admin/ec/product");this.tempData.id?this.$http.patch(a,this.tempData).then((function(){t.getProducts(),t.$bus.$emit("message:push","完成編輯-商品資料 ","success")})):this.$http.post(e,this.tempData).then((function(){t.getProducts(),$("#productModal").modal("hide"),t.$bus.$emit("message:push","新增一筆商品資料 ","success")})).catch((function(a){t.isLoading=!1;var e=a.response.data;$("#productModal").modal("hide"),t.$bus.$emit("message:push","出現錯誤，請確認\n              ".concat(e),"danger")}))},deleteItem:function(){var t=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/api/").concat("326aaf6a-8ca5-4a46-b815-11a755b4a30c","/admin/ec/product/").concat(this.tempData.id);this.$http.delete(a).then((function(){t.getProducts(),t.isLoading=!1,$("#deleteModal").modal("hide")})).catch((function(a){console.log(a),t.isLoading=!1}))},uploadFile:function(){var t=this,a=this.$refs.file.files[0],e=new FormData;e.append("file",a);var o="".concat("https://course-ec-api.hexschool.io/api/").concat("326aaf6a-8ca5-4a46-b815-11a755b4a30c","/admin/storage");this.status.fileUploading=!0,this.$http.post(o,e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(a){t.status.fileUploading=!1,200===a.status&&t.tempData.imageUrl.push(a.data.data.path)})).catch((function(){t.$bus.$emit("message:push","檔案上傳失敗，請確認檔案大小是否超過 2MB","danger"),t.status.fileUploading=!1}))}}},p=c,l=(e("6bcb"),e("2877")),m=Object(l["a"])(p,o,i,!1,null,"7e946da1",null);a["default"]=m.exports},a4d3:function(t,a,e){"use strict";var o=e("23e7"),i=e("da84"),s=e("d066"),n=e("c430"),r=e("83ab"),c=e("4930"),p=e("fdbf"),l=e("d039"),m=e("5135"),d=e("e8b5"),u=e("861d"),f=e("825a"),h=e("7b0b"),v=e("fc6a"),g=e("c04e"),b=e("5c6c"),D=e("7c73"),y=e("df75"),_=e("241c"),C=e("057f"),k=e("7418"),x=e("06cf"),w=e("9bf2"),$=e("d1e7"),P=e("9112"),O=e("6eeb"),A=e("5692"),S=e("f772"),j=e("d012"),M=e("90e3"),N=e("b622"),U=e("e538"),F=e("746f"),E=e("d44e"),L=e("69f3"),V=e("b727").forEach,R=S("hidden"),I="Symbol",T="prototype",J=N("toPrimitive"),B=L.set,Q=L.getterFor(I),W=Object[T],q=i.Symbol,z=s("JSON","stringify"),G=x.f,H=w.f,K=C.f,X=$.f,Y=A("symbols"),Z=A("op-symbols"),tt=A("string-to-symbol-registry"),at=A("symbol-to-string-registry"),et=A("wks"),ot=i.QObject,it=!ot||!ot[T]||!ot[T].findChild,st=r&&l((function(){return 7!=D(H({},"a",{get:function(){return H(this,"a",{value:7}).a}})).a}))?function(t,a,e){var o=G(W,a);o&&delete W[a],H(t,a,e),o&&t!==W&&H(W,a,o)}:H,nt=function(t,a){var e=Y[t]=D(q[T]);return B(e,{type:I,tag:t,description:a}),r||(e.description=a),e},rt=p?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof q},ct=function(t,a,e){t===W&&ct(Z,a,e),f(t);var o=g(a,!0);return f(e),m(Y,o)?(e.enumerable?(m(t,R)&&t[R][o]&&(t[R][o]=!1),e=D(e,{enumerable:b(0,!1)})):(m(t,R)||H(t,R,b(1,{})),t[R][o]=!0),st(t,o,e)):H(t,o,e)},pt=function(t,a){f(t);var e=v(a),o=y(e).concat(ft(e));return V(o,(function(a){r&&!mt.call(e,a)||ct(t,a,e[a])})),t},lt=function(t,a){return void 0===a?D(t):pt(D(t),a)},mt=function(t){var a=g(t,!0),e=X.call(this,a);return!(this===W&&m(Y,a)&&!m(Z,a))&&(!(e||!m(this,a)||!m(Y,a)||m(this,R)&&this[R][a])||e)},dt=function(t,a){var e=v(t),o=g(a,!0);if(e!==W||!m(Y,o)||m(Z,o)){var i=G(e,o);return!i||!m(Y,o)||m(e,R)&&e[R][o]||(i.enumerable=!0),i}},ut=function(t){var a=K(v(t)),e=[];return V(a,(function(t){m(Y,t)||m(j,t)||e.push(t)})),e},ft=function(t){var a=t===W,e=K(a?Z:v(t)),o=[];return V(e,(function(t){!m(Y,t)||a&&!m(W,t)||o.push(Y[t])})),o};if(c||(q=function(){if(this instanceof q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,a=M(t),e=function(t){this===W&&e.call(Z,t),m(this,R)&&m(this[R],a)&&(this[R][a]=!1),st(this,a,b(1,t))};return r&&it&&st(W,a,{configurable:!0,set:e}),nt(a,t)},O(q[T],"toString",(function(){return Q(this).tag})),O(q,"withoutSetter",(function(t){return nt(M(t),t)})),$.f=mt,w.f=ct,x.f=dt,_.f=C.f=ut,k.f=ft,U.f=function(t){return nt(N(t),t)},r&&(H(q[T],"description",{configurable:!0,get:function(){return Q(this).description}}),n||O(W,"propertyIsEnumerable",mt,{unsafe:!0}))),o({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:q}),V(y(et),(function(t){F(t)})),o({target:I,stat:!0,forced:!c},{for:function(t){var a=String(t);if(m(tt,a))return tt[a];var e=q(a);return tt[a]=e,at[e]=a,e},keyFor:function(t){if(!rt(t))throw TypeError(t+" is not a symbol");if(m(at,t))return at[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),o({target:"Object",stat:!0,forced:!c,sham:!r},{create:lt,defineProperty:ct,defineProperties:pt,getOwnPropertyDescriptor:dt}),o({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:ut,getOwnPropertySymbols:ft}),o({target:"Object",stat:!0,forced:l((function(){k.f(1)}))},{getOwnPropertySymbols:function(t){return k.f(h(t))}}),z){var ht=!c||l((function(){var t=q();return"[null]"!=z([t])||"{}"!=z({a:t})||"{}"!=z(Object(t))}));o({target:"JSON",stat:!0,forced:ht},{stringify:function(t,a,e){var o,i=[t],s=1;while(arguments.length>s)i.push(arguments[s++]);if(o=a,(u(a)||void 0!==t)&&!rt(t))return d(a)||(a=function(t,a){if("function"==typeof o&&(a=o.call(this,t,a)),!rt(a))return a}),i[1]=a,z.apply(null,i)}})}q[T][J]||P(q[T],J,q[T].valueOf),E(q,I),j[R]=!0},d001:function(t,a,e){},dbb4:function(t,a,e){var o=e("23e7"),i=e("83ab"),s=e("56ef"),n=e("fc6a"),r=e("06cf"),c=e("8418");o({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var a,e,o=n(t),i=r.f,p=s(o),l={},m=0;while(p.length>m)e=i(o,a=p[m++]),void 0!==e&&c(l,a,e);return l}})},e439:function(t,a,e){var o=e("23e7"),i=e("d039"),s=e("fc6a"),n=e("06cf").f,r=e("83ab"),c=i((function(){n(1)})),p=!r||c;o({target:"Object",stat:!0,forced:p,sham:!r},{getOwnPropertyDescriptor:function(t,a){return n(s(t),a)}})},e538:function(t,a,e){var o=e("b622");a.f=o}}]);
//# sourceMappingURL=chunk-5a88c769.20f7de3b.js.map