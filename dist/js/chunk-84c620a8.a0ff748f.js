(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-84c620a8"],{"38f2":function(t,a,s){"use strict";var i=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"subscribe bg-primary-light py-4"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-5 col-12"},[s("p",{staticClass:"h2 font-weight-bold mb-3 mb-md-0 text-md-center"},[t._v("訂閱更多消息")])]),s("div",{staticClass:"col-md-7 col-12"},[s("div",{staticClass:"input-group"},[s("input",{staticClass:"form-control subscribeInput rounded-0",attrs:{type:"email",placeholder:"Your email address","aria-label":"Your email address","aria-describedby":"button-addon2"}}),s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"subscribeBtn btn btn-primary font-weight-bold",attrs:{type:"button",id:"button-addon2"}},[t._v("訂閱")])])])])])])])}],c={},o=c,n=(s("6300"),s("2877")),r=Object(n["a"])(o,i,e,!1,null,"70fa54c8",null);a["a"]=r.exports},6300:function(t,a,s){"use strict";var i=s("df50"),e=s.n(i);e.a},df50:function(t,a,s){},ed84:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("loading",{attrs:{active:t.isLoading,loader:"dots"},on:{"update:active":function(a){t.isLoading=a}}}),s("section",{staticClass:"mb-5"},[s("div",{staticClass:"jumbotron jumbotron-fluid mb-0",staticStyle:{"background-image":"url(https://images.pexels.com/photos/3735147/pexels-photo-3735147.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)","background-position":"0% 80%","background-size":"cover",height:"300px"}}),s("div",{staticClass:"container"},[s("ul",{staticClass:"cateList list-unstyled d-flex py-3 justify-content-center"},[s("li",[s("a",{staticClass:"h4 px-md-5 px-3 hover-underline",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.clickCategory("all")}}},[t._v("全部")])]),s("li",[s("a",{staticClass:"h4 px-md-5 px-3 hover-underline",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.clickCategory("herb")}}},[t._v("香草")])]),s("li",[s("a",{staticClass:"h4 px-md-5 px-3 hover-underline",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.clickCategory("spice")}}},[t._v("香料")])])]),t._m(0)])]),s("section",{staticClass:"products py-5 mb-md-7 mb-5"},[s("div",{staticClass:"container"},[s("h2",{staticClass:"text-primary-dark font-weight-bold "},[t._v(t._s(t.categoryName))]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"d-flex"},[s("p",{staticClass:"pr-2"},[t._v("共 "+t._s(t.tempProducts.length)+" 項")])])])]),s("div",{staticClass:"row"},t._l(t.tempProducts,(function(a){return s("div",{key:a.id,staticClass:"col-lg-3 col-md-6 col-12 mb-4"},[s("div",{staticClass:"card border-0"},[s("router-link",{staticClass:"text-decoration-none",attrs:{to:"/product/"+a.id}},[s("div",{staticClass:"card-img bg-cover d-flex flex-column\n                    justify-content-end p-lg-3 p-md-5 p-6 rounded-0",style:{backgroundImage:"url("+a.imageUrl[0]+")"}},[s("router-link",{staticClass:"btn btn-outline-primary-dark mb-3 p-md-2 p-3",attrs:{to:"/product/"+a.id,type:"button"}},[t._v(" 商品內容 ")]),s("button",{staticClass:"btn btn-primary p-md-2 p-3",attrs:{type:"button",disabled:t.status.loadingItem===a.id},on:{click:function(s){return s.preventDefault(),t.addToCart(a.id,a.title)}}},[t.status.loadingItem===a.id?s("i",{staticClass:"fas fa-circle-notch fa-spin"}):t._e(),t._v(" 加到購物車 ")])],1),s("div",{staticClass:"card-body text-center p-2"},[s("div",{staticClass:"position-relative"},[s("span",{staticClass:"badge badge-secondary",staticStyle:{position:"absolute",top:"0",right:"0"}},[t._v(" "+t._s(a.category)+" ")]),s("h4",{staticClass:"card-title mb-1 text-primary-dark font-weight-bold"},[t._v(" "+t._s(a.title)+" ")])]),s("p",{staticClass:"card-text text-primary"},[t._v(" NT$ "+t._s(a.price)+" / "+t._s(a.unit)+" ")])])])],1)])})),0)])]),s("Subscribe")],1)},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",{staticClass:"font-weight-bold h4 mb-5 text-center"},[s("span",{staticClass:"icon-megaphone"}),t._v(" 秋天的滋味，給你85折美味 "),s("br"),s("small",{staticClass:"text-muted"},[t._v("輸入 savory98 立即饗受")])])}],c=(s("99af"),s("4160"),s("159b"),s("38f2")),o={data:function(){return{products:[],tempProducts:[],status:{loadingItem:""},pagination:{},categoryName:"全部",isLoading:!1}},components:{Subscribe:c["a"]},created:function(){this.getProducts()},methods:{getProducts:function(){var t=this,a="".concat("https://course-ec-api.hexschool.io/api/").concat("326aaf6a-8ca5-4a46-b815-11a755b4a30c","/ec/products");this.isLoading=!0,this.$http.get(a).then((function(a){t.products=a.data.data,t.tempProducts=t.products,t.pagination=a.data.meta.pagination,t.isLoading=!1})).catch((function(){t.isLoading=!1}))},addToCart:function(t,a){var s=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;this.status.loadingItem=t;var e="".concat("https://course-ec-api.hexschool.io/api/").concat("326aaf6a-8ca5-4a46-b815-11a755b4a30c","/ec/shopping"),c={product:t,quantity:i};this.$http.post(e,c).then((function(){s.$toast.success("".concat(a,"加入購物車")),s.$bus.$emit("update-total"),s.status.loadingItem=""})).catch((function(){s.$toast.error("".concat(a,"加入購物車失敗")),s.status.loadingItem=""}))},clickCategory:function(t){var a=this;switch(this.isLoading=!0,this.tempProducts=[],t){case"all":this.tempProducts=this.products,this.categoryName="全部",this.isLoading=!1;break;case"herb":this.products.forEach((function(t){"香草"===t.category&&a.tempProducts.push(t)})),this.categoryName="香草",this.isLoading=!1;break;case"spice":this.products.forEach((function(t){"香料"===t.category&&a.tempProducts.push(t)})),this.categoryName="香料",this.isLoading=!1;break;default:break}}}},n=o,r=s("2877"),d=Object(r["a"])(n,i,e,!1,null,null,null);a["default"]=d.exports}}]);
//# sourceMappingURL=chunk-84c620a8.a0ff748f.js.map