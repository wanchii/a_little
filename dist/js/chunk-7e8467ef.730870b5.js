(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e8467ef"],{1799:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{staticClass:"p-3 page",attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination justify-content-between mb-0"},[e("li",{staticClass:"page-item mr-2",class:{disabled:1===t.pages.current_page}},[e("a",{staticClass:"btn btn-outline-primary font-weight-bold",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.clickPage(t.pages.current_page-1)}}},[t._v("Prev")])]),t._l(t.pages.total_pages,(function(a,s){return e("li",{key:s,staticClass:"page-item",class:{active:a===t.pages.current_page}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.clickPage(a)}}},[t._v(t._s(a))])])})),e("li",{staticClass:"page-item ml-2",class:{disabled:t.pages.current_page===t.pages.total_pages}},[e("a",{staticClass:"btn btn-outline-primary font-weight-bold",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.clickPage(t.pages.current_page+1)}}},[t._v("Next")])])],2)])},i=[],n={data:function(){return{}},props:{pages:{}},methods:{clickPage:function(t){this.$emit("update",t)}}},c=n,r=e("2877"),o=Object(r["a"])(c,s,i,!1,null,null,null);a["a"]=o.exports},fad5:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"orders"},[e("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),e("h2",{staticClass:"pt-3 text-center"},[t._v("訂單列表")]),e("table",{staticClass:"table product"},[t._m(0),t.orders.length?e("tbody",t._l(t.orders,(function(a,s){return e("tr",{key:s,class:{"bg-light":!a.paid}},[e("td",[t._v(t._s(a.created.datetime))]),e("td",[e("ul",{staticClass:"list-unstyled"},t._l(a.products,(function(a,s){return e("li",{key:s},[t._v(" "+t._s(a.product.title)+" * "+t._s(a.quantity)+" ")])})),0)]),e("td",[t._v(" "+t._s(a.payment)+" ")]),e("td",{staticClass:"text-right"},[t._v(" "+t._s(t._f("currency")(a.amount))+" ")]),e("td",[e("div",{staticClass:"custom-control custom-switch"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.paid,expression:"item.paid"}],staticClass:"custom-control-input",attrs:{id:a.id,type:"checkbox"},domProps:{checked:Array.isArray(a.paid)?t._i(a.paid,null)>-1:a.paid},on:{change:[function(e){var s=a.paid,i=e.target,n=!!i.checked;if(Array.isArray(s)){var c=null,r=t._i(s,c);i.checked?r<0&&t.$set(a,"paid",s.concat([c])):r>-1&&t.$set(a,"paid",s.slice(0,r).concat(s.slice(r+1)))}else t.$set(a,"paid",n)},function(e){return t.setOrderPaid(a)}]}}),e("label",{staticClass:"custom-control-label",attrs:{for:a.id}},[a.paid?e("strong",{staticClass:"text-success"},[t._v("已付款")]):e("span",{staticClass:"text-danger"},[t._v("尚未付款")])])])])])})),0):t._e()]),e("div",{staticClass:"d-flex justify-content-center my-4"},[e("pagination",{attrs:{pages:t.pagination},on:{update:t.getProducts}})],1)],1)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",{staticClass:"font-weight-bold"},[e("tr",[e("th",[t._v("下單時間")]),e("th",[t._v("購買款項")]),e("th",[t._v("付款方式")]),e("th",[t._v("應付金額")]),e("th",[t._v("是否付款")])])])}],n=(e("99af"),e("1799")),c={components:{Pagination:n["a"]},data:function(){return{orders:{user:{}},isNew:!1,pagination:{},isLoading:!1}},created:function(){this.getOrders()},methods:{getOrders:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io/api/").concat("326aaf6a-8ca5-4a46-b815-11a755b4a30c","/admin/ec/orders?page=").concat(a);this.$http.get(e).then((function(a){t.orders=a.data.data,t.pagination=a.data.meta.pagination,t.isLoading=!1}))},setOrderPaid:function(t){var a=this,e="".concat("https://course-ec-api.hexschool.io/api/").concat("326aaf6a-8ca5-4a46-b815-11a755b4a30c","/admin/ec/orders/").concat(t.id,"/paid");t.paid||(e="".concat("https://course-ec-api.hexschool.io/api/").concat("326aaf6a-8ca5-4a46-b815-11a755b4a30c","/admin/ec/orders/").concat(t.id,"/unpaid")),this.$http.patch(e,t.id).then((function(){a.$bus.$emit("message:push","付款狀態已修改","warning"),a.getOrders()}))}}},r=c,o=e("2877"),l=Object(o["a"])(r,s,i,!1,null,null,null);a["default"]=l.exports}}]);
//# sourceMappingURL=chunk-7e8467ef.730870b5.js.map