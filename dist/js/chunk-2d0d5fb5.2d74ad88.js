(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d5fb5"],{7138:function(t,a,s){"use strict";s.r(a);var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"content"},[s("Navbar"),s("router-view")],1),s("Footer")],1)},e=[],l=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"header container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 "},[s("nav",{staticClass:"navbar navbar-expand-lg navbar-light"},[t._m(0),s("router-link",{staticClass:"navbar-brand passeroOne text-primary font-weight-bold",attrs:{to:"/"}},[t._v(" a little ")]),s("router-link",{staticClass:"nav-link h5 mb-0 d-lg-none d-md-block",attrs:{to:"/cart"}},[s("span",{staticClass:"icon-basket"},[0===t.cartSubTotal?s("span",{staticClass:"badge badge-pill badge-primary",staticStyle:{transform:"translateX(-13px) translateY(-2px)",opacity:".0"}},[t._v("0")]):s("span",{staticClass:"badge badge-pill badge-primary",staticStyle:{transform:"translateX(-13px) translateY(-2px)"}},[t._v(" "+t._s(t.cartSubTotal)+" ")])])]),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[s("ul",{staticClass:"navbar-nav ml-auto"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link h5 mb-0",attrs:{to:"/about"}},[t._v(" 關於 ")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link h5 mb-0",attrs:{to:"/products"}},[t._v(" 產品 ")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link h5 mb-0",attrs:{to:"/recipe"}},[t._v(" 食譜 ")])],1),s("li",{staticClass:"nav-item d-lg-block d-none"},[s("router-link",{staticClass:"nav-link h5 mb-0",attrs:{to:"/cart"}},[s("span",{staticClass:" icon-basket"},[0===t.cartSubTotal?s("span",{staticClass:"badge badge-pill badge-primary",staticStyle:{transform:"translateX(-13px) translateY(-2px)",opacity:".0"}},[t._v("0")]):s("span",{staticClass:"badge badge-pill badge-primary",staticStyle:{transform:"translateX(-13px) translateY(-2px)"}},[t._v(" "+t._s(t.cartSubTotal)+" ")])])])],1)])])],1)])])])},r=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])}],i=(s("99af"),{data:function(){return{carts:[],cartSubTotal:0,isOpenCart:!1}},created:function(){var t=this;this.getCart(),this.$bus.$on("update-total",(function(){t.getCart()}))},methods:{getCart:function(){var t=this,a="".concat("https://course-ec-api.hexschool.io/api/").concat("326aaf6a-8ca5-4a46-b815-11a755b4a30c","/ec/shopping");this.$http.get(a).then((function(a){t.carts=a.data.data,t.cartSubTotal=a.data.data.length}))}}}),c=i,o=s("2877"),p=Object(o["a"])(c,l,r,!1,null,null,null),u=p.exports,b=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},d=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"footer  py-2"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("ul",{staticClass:"d-flex list-unstyled px-3 mb-0"},[s("li",{},[t._v("© Copright 2020 Emily Chen")]),s("li",{staticClass:"ml-auto px-3"},[s("a",{staticClass:"text-primary-dark h4 mb-0",attrs:{href:"#"}},[s("span",{staticClass:"  icon-envelope"})])])])])])])])}],v={},C=v,g=Object(o["a"])(C,b,d,!1,null,null,null),m=g.exports,h={data:function(){return{products:[]}},components:{Navbar:u,Footer:m},created:function(){}},f=h,_=Object(o["a"])(f,n,e,!1,null,null,null);a["default"]=_.exports}}]);
//# sourceMappingURL=chunk-2d0d5fb5.2d74ad88.js.map