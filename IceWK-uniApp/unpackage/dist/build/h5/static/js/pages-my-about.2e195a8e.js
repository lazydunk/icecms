(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-about"],{"157d":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{}},methods:{jiance:function(){var t=this;uni.showLoading({mask:!0,title:"检测中"}),setTimeout((function(){t.$u.toast("您当前使用的已是最新版本！")}),1500)},toAgr:function(t){uni.navigateTo({url:"/pages/my/agr?type="+t})}}};n.default=i},afb2:function(t,n,e){"use strict";e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}));var i={uLine:e("623d").default,uSection:e("2a9b").default},u=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("v-uni-view",{staticStyle:{margin:"60px","text-align":"center"}},[e("v-uni-image",{staticStyle:{width:"120px",height:"120px"},attrs:{src:"/static/logo.png"}}),e("v-uni-view",[t._v("当前版本：v1.0.0")])],1),e("u-line"),e("v-uni-view",{staticStyle:{margin:"35rpx"}},[e("u-section",{attrs:{"show-line":!1,title:"新版本检测"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.jiance.apply(void 0,arguments)}}})],1),e("u-line"),e("v-uni-view",{staticStyle:{margin:"35rpx"}},[e("u-section",{attrs:{"show-line":!1,title:"版权协议"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.toAgr(5)}}})],1),e("u-line"),e("v-uni-view",{staticStyle:{margin:"35rpx"}},[e("u-section",{attrs:{"show-line":!1,title:"用户协议"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.toAgr(1)}}})],1),e("u-line"),e("v-uni-view",{staticStyle:{margin:"35rpx"}},[e("u-section",{attrs:{"show-line":!1,title:"隐私政策"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.toAgr(2)}}})],1),e("u-line")],1)},a=[]},b531:function(t,n,e){"use strict";e.r(n);var i=e("afb2"),u=e("d8e7");for(var a in u)"default"!==a&&function(t){e.d(n,t,(function(){return u[t]}))}(a);var c,o=e("f0c5"),r=Object(o["a"])(u["default"],i["b"],i["c"],!1,null,"64828efe",null,!1,i["a"],c);n["default"]=r.exports},d8e7:function(t,n,e){"use strict";e.r(n);var i=e("157d"),u=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=u.a}}]);