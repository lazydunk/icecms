(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shop-order-detail"],{"0455":function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,"uni-page-body[data-v-4e23b186]{background-color:#f5f5f5}body.?%PAGE?%[data-v-4e23b186]{background-color:#f5f5f5}",""]),t.exports=a},"571d":function(t,a,e){"use strict";e.d(a,"b",(function(){return o})),e.d(a,"c",(function(){return i})),e.d(a,"a",(function(){return n}));var n={uIcon:e("99a2").default},o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"u-image",style:[t.wrapStyle,t.backgroundStyle],on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onClick.apply(void 0,arguments)}}},[t.isError?t._e():e("v-uni-image",{staticClass:"u-image__image",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius)},attrs:{src:t.src,mode:t.mode,"lazy-load":t.lazyLoad,"show-menu-by-longpress":t.showMenuByLongpress},on:{error:function(a){arguments[0]=a=t.$handleEvent(a),t.onErrorHandler.apply(void 0,arguments)},load:function(a){arguments[0]=a=t.$handleEvent(a),t.onLoadHandler.apply(void 0,arguments)}}}),t.showLoading&&t.loading?e("v-uni-view",{staticClass:"u-image__loading",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius),backgroundColor:this.bgColor}},[t.$slots.loading?t._t("loading"):e("u-icon",{attrs:{name:t.loadingIcon,width:t.width,height:t.height}})],2):t._e(),t.showError&&t.isError&&!t.loading?e("v-uni-view",{staticClass:"u-image__error",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius)}},[t.$slots.error?t._t("error"):e("u-icon",{attrs:{name:t.errorIcon,width:t.width,height:t.height}})],2):t._e()],1)},i=[]},"58a2":function(t,a,e){var n=e("0455");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("4f06").default;o("7a3060ae",n,!0,{sourceMap:!1,shadowMode:!1})},"71ce":function(t,a,e){"use strict";e.r(a);var n=e("571d"),o=e("e98e");for(var i in o)"default"!==i&&function(t){e.d(a,t,(function(){return o[t]}))}(i);e("b76c");var r,s=e("f0c5"),d=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"08740c73",null,!1,n["a"],r);a["default"]=d.exports},"855e":function(t,a,e){"use strict";var n=e("58a2"),o=e.n(n);o.a},"8aca":function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */\n/* 主题颜色 */.margin-b5[data-v-08740c73]{margin-bottom:%?5?%}.margin-b10[data-v-08740c73]{margin-bottom:%?10?%}.margin-b15[data-v-08740c73]{margin-bottom:%?15?%}.margin-b20[data-v-08740c73]{margin-bottom:%?20?%}.margin-b25[data-v-08740c73]{margin-bottom:%?25?%}.margin-b30[data-v-08740c73]{margin-bottom:%?30?%}.margin-b40[data-v-08740c73]{margin-bottom:%?40?%}.margin-b60[data-v-08740c73]{margin-bottom:%?60?%}.margin-b80[data-v-08740c73]{margin-bottom:%?80?%}.margin-b100[data-v-08740c73]{margin-bottom:%?100?%}.margin-r5[data-v-08740c73]{margin-right:%?5?%}.margin-r10[data-v-08740c73]{margin-right:%?10?%}.margin-r15[data-v-08740c73]{margin-right:%?15?%}.margin-r20[data-v-08740c73]{margin-right:%?20?%}.margin-r25[data-v-08740c73]{margin-right:%?25?%}.margin-r30[data-v-08740c73]{margin-right:%?30?%}.margin-r40[data-v-08740c73]{margin-right:%?40?%}.margin-r60[data-v-08740c73]{margin-right:%?60?%}.font-18[data-v-08740c73]{font-style:normal;font-size:%?18?%;font-family:Droid Sans Fallback}.font-20[data-v-08740c73]{font-style:normal;font-size:%?20?%;font-family:Droid Sans Fallback}.font-22[data-v-08740c73]{font-style:normal;font-size:%?22?%;font-family:Droid Sans Fallback}.font-24[data-v-08740c73]{font-style:normal;font-size:%?24?%;font-family:Droid Sans Fallback}.font-26[data-v-08740c73]{font-style:normal;font-size:%?26?%;font-family:Droid Sans Fallback}.font-28[data-v-08740c73]{font-style:normal;font-size:%?28?%;font-family:Droid Sans Fallback}.font-30[data-v-08740c73]{font-style:normal;font-size:%?30?%;font-family:Droid Sans Fallback}.font-32[data-v-08740c73]{font-style:normal;font-size:%?32?%;font-family:Droid Sans Fallback}.font-34[data-v-08740c73]{font-style:normal;font-size:%?34?%;font-family:Droid Sans Fallback}.font-36[data-v-08740c73]{font-style:normal;font-size:%?36?%;font-family:Droid Sans Fallback}.font-38[data-v-08740c73]{font-style:normal;font-size:%?38?%;font-family:Droid Sans Fallback}.font-40[data-v-08740c73]{font-style:normal;font-size:%?40?%;font-family:Droid Sans Fallback}.font-46[data-v-08740c73]{font-style:normal;font-size:%?46?%;font-family:Droid Sans Fallback}.font-50[data-v-08740c73]{font-style:normal;font-size:%?50?%;font-family:Droid Sans Fallback}.font-60[data-v-08740c73]{font-style:normal;font-size:%?60?%;font-family:Droid Sans Fallback}.font-80[data-v-08740c73]{font-style:normal;font-size:%?80?%;font-family:Droid Sans Fallback}.text-left[data-v-08740c73]{text-align:left}.text-center[data-v-08740c73]{text-align:center}.text-right[data-v-08740c73]{text-align:right}.color-white[data-v-08740c73]{color:#fff}.color-red[data-v-08740c73]{color:#dc0000}.font-weight-400[data-v-08740c73]{font-weight:400}.font-weight-500[data-v-08740c73]{font-weight:700}.spacing-20[data-v-08740c73]{width:%?750?%;height:%?20?%;background-color:#f8f8f8}.radius-10[data-v-08740c73]{border-radius:%?10?%}.radius-20[data-v-08740c73]{border-radius:%?20?%}.radius-30[data-v-08740c73]{border-radius:%?30?%}.radius-circle[data-v-08740c73]{border-radius:50%}.radius-height[data-v-08740c73]{border-radius:10000px}.vs-flex-item[data-v-08740c73]{flex:1}.vs-space-between[data-v-08740c73]{justify-content:space-between}.vs-space-around[data-v-08740c73]{justify-content:space-around}.vs-space-center[data-v-08740c73]{justify-content:center}.vs-space-end[data-v-08740c73]{justify-content:flex-end}.vs-row[data-v-08740c73]{flex-direction:row}.vs-column[data-v-08740c73]{flex-direction:column}.vs-align-end[data-v-08740c73]{align-items:flex-end}.vs-align-center[data-v-08740c73]{align-items:center}.vs-align-start[data-v-08740c73]{align-items:flex-start}.vs-item-hover[data-v-08740c73]{background-color:rgba(0,0,0,.05)}.vs-btn-hover[data-v-08740c73]{opacity:.8}.color-base[data-v-08740c73]{color:#50a1ff}.bg-color-base[data-v-08740c73]{background-color:#50a1ff}\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.u-image[data-v-08740c73]{position:relative;transition:opacity .5s ease-in-out}.u-image__image[data-v-08740c73]{width:100%;height:100%}.u-image__loading[data-v-08740c73], .u-image__error[data-v-08740c73]{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:row;align-items:center;justify-content:center;background-color:#f3f4f6;color:#909399;font-size:%?46?%}',""]),t.exports=a},"95e0":function(t,a,e){"use strict";e.d(a,"b",(function(){return o})),e.d(a,"c",(function(){return i})),e.d(a,"a",(function(){return n}));var n={uImage:e("71ce").default,uButton:e("8267").default},o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[t._l(t.orderInfo.goods_list,(function(a,n){return e("v-uni-view",{key:n,staticClass:"goods-info"},[e("u-image",{attrs:{width:"150rpx",height:"150rpx",src:a.cover_img}}),e("v-uni-view",{staticClass:"info-right"},[e("v-uni-text",[t._v(t._s(a.title))]),e("v-uni-view",{staticClass:"price"},[e("v-uni-text",[t._v("￥"+t._s(a.price))]),e("v-uni-text",{staticClass:"num"},[t._v("x "+t._s(t.orderInfo.goods_info[n].num))])],1)],1)],1)})),e("v-uni-view",{staticClass:"cell"},[e("v-uni-view",{staticClass:"cell-item"},[e("v-uni-text",[t._v("订单状态")]),e("v-uni-text",[t._v(t._s(t.orderInfo.status))])],1),e("v-uni-view",{staticClass:"cell-item"},[e("v-uni-text",[t._v("结算金额")]),e("v-uni-text",[t._v(t._s(t.orderInfo.total_money))])],1),e("v-uni-view",{staticClass:"cell-item"},[e("v-uni-text",[t._v("下单时间")]),e("v-uni-text",[t._v(t._s(t._f("date")(t.orderInfo.create_time)))])],1)],1),e("v-uni-view",{staticClass:"cell"},[e("v-uni-view",{staticClass:"cell-item"},[e("v-uni-text",[t._v("联系人")]),e("v-uni-text",[t._v(t._s(t.orderInfo.address_info.name))])],1),e("v-uni-view",{staticClass:"cell-item"},[e("v-uni-text",[t._v("电话")]),e("v-uni-text",[t._v(t._s(t.orderInfo.address_info.moblie))])],1),e("v-uni-view",{staticClass:"cell-item"},[e("v-uni-text",[t._v("地址")]),e("v-uni-text",[t._v(t._s(t.orderInfo.address_info.region)+t._s(t.orderInfo.address_info.address))])],1)],1),t.orderInfo.express_company?e("v-uni-view",{staticClass:"cell"},[e("v-uni-view",{staticClass:"cell-item"},[e("v-uni-text",[t._v("物流信息")]),e("v-uni-text",[t._v(t._s(t.orderInfo.express_company.label))])],1),e("v-uni-view",{staticClass:"cell-item"},[e("v-uni-text",[t._v("物流单号")]),e("v-uni-text",[t._v(t._s(t.orderInfo.express_number))])],1)],1):t._e(),"已完成"==t.orderInfo.status?e("v-uni-view",{staticClass:"cell"},[e("v-uni-view",{staticClass:"cell-item"},[e("v-uni-text",[t._v("订单状态")]),e("v-uni-text",{staticStyle:{color:"red"}},[t._v("已完成")])],1)],1):t._e(),"待收货"==t.orderInfo.status?e("v-uni-view",{staticClass:"cell"},[e("u-button",{staticStyle:{margin:"0 30rpx"},attrs:{shape:"circle",type:"success"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.submit.apply(void 0,arguments)}}},[t._v("收货")])],1):t._e()],2)},i=[]},b76c:function(t,a,e){"use strict";var n=e("e9ab"),o=e.n(n);o.a},c591:function(t,a,e){"use strict";e.r(a);var n=e("c5af"),o=e.n(n);for(var i in n)"default"!==i&&function(t){e.d(a,t,(function(){return n[t]}))}(i);a["default"]=o.a},c5af:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{orderId:"",orderInfo:{}}},onLoad:function(t){this.orderId=t.id,this.getOrderDetail()},methods:{getOrderDetail:function(){var t=this;this.$H.get("order/detail",{id:this.orderId}).then((function(a){t.orderInfo=a.result}))},submit:function(){var t=this;this.$H.post("order/ordershou",this.orderInfo).then((function(a){200==a.code&&(t.$u.toast(a.msg),t.getOrderDetail())}))}}};a.default=n},c8be:function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */\n/* 主题颜色 */.margin-b5[data-v-4e23b186]{margin-bottom:%?5?%}.margin-b10[data-v-4e23b186]{margin-bottom:%?10?%}.margin-b15[data-v-4e23b186]{margin-bottom:%?15?%}.margin-b20[data-v-4e23b186]{margin-bottom:%?20?%}.margin-b25[data-v-4e23b186]{margin-bottom:%?25?%}.margin-b30[data-v-4e23b186]{margin-bottom:%?30?%}.margin-b40[data-v-4e23b186]{margin-bottom:%?40?%}.margin-b60[data-v-4e23b186]{margin-bottom:%?60?%}.margin-b80[data-v-4e23b186]{margin-bottom:%?80?%}.margin-b100[data-v-4e23b186]{margin-bottom:%?100?%}.margin-r5[data-v-4e23b186]{margin-right:%?5?%}.margin-r10[data-v-4e23b186]{margin-right:%?10?%}.margin-r15[data-v-4e23b186]{margin-right:%?15?%}.margin-r20[data-v-4e23b186]{margin-right:%?20?%}.margin-r25[data-v-4e23b186]{margin-right:%?25?%}.margin-r30[data-v-4e23b186]{margin-right:%?30?%}.margin-r40[data-v-4e23b186]{margin-right:%?40?%}.margin-r60[data-v-4e23b186]{margin-right:%?60?%}.font-18[data-v-4e23b186]{font-style:normal;font-size:%?18?%;font-family:Droid Sans Fallback}.font-20[data-v-4e23b186]{font-style:normal;font-size:%?20?%;font-family:Droid Sans Fallback}.font-22[data-v-4e23b186]{font-style:normal;font-size:%?22?%;font-family:Droid Sans Fallback}.font-24[data-v-4e23b186]{font-style:normal;font-size:%?24?%;font-family:Droid Sans Fallback}.font-26[data-v-4e23b186]{font-style:normal;font-size:%?26?%;font-family:Droid Sans Fallback}.font-28[data-v-4e23b186]{font-style:normal;font-size:%?28?%;font-family:Droid Sans Fallback}.font-30[data-v-4e23b186]{font-style:normal;font-size:%?30?%;font-family:Droid Sans Fallback}.font-32[data-v-4e23b186]{font-style:normal;font-size:%?32?%;font-family:Droid Sans Fallback}.font-34[data-v-4e23b186]{font-style:normal;font-size:%?34?%;font-family:Droid Sans Fallback}.font-36[data-v-4e23b186]{font-style:normal;font-size:%?36?%;font-family:Droid Sans Fallback}.font-38[data-v-4e23b186]{font-style:normal;font-size:%?38?%;font-family:Droid Sans Fallback}.font-40[data-v-4e23b186]{font-style:normal;font-size:%?40?%;font-family:Droid Sans Fallback}.font-46[data-v-4e23b186]{font-style:normal;font-size:%?46?%;font-family:Droid Sans Fallback}.font-50[data-v-4e23b186]{font-style:normal;font-size:%?50?%;font-family:Droid Sans Fallback}.font-60[data-v-4e23b186]{font-style:normal;font-size:%?60?%;font-family:Droid Sans Fallback}.font-80[data-v-4e23b186]{font-style:normal;font-size:%?80?%;font-family:Droid Sans Fallback}.text-left[data-v-4e23b186]{text-align:left}.text-center[data-v-4e23b186]{text-align:center}.text-right[data-v-4e23b186]{text-align:right}.color-white[data-v-4e23b186]{color:#fff}.color-red[data-v-4e23b186]{color:#dc0000}.font-weight-400[data-v-4e23b186]{font-weight:400}.font-weight-500[data-v-4e23b186]{font-weight:700}.spacing-20[data-v-4e23b186]{width:%?750?%;height:%?20?%;background-color:#f8f8f8}.radius-10[data-v-4e23b186]{border-radius:%?10?%}.radius-20[data-v-4e23b186]{border-radius:%?20?%}.radius-30[data-v-4e23b186]{border-radius:%?30?%}.radius-circle[data-v-4e23b186]{border-radius:50%}.radius-height[data-v-4e23b186]{border-radius:10000px}.vs-flex-item[data-v-4e23b186]{flex:1}.vs-space-between[data-v-4e23b186]{justify-content:space-between}.vs-space-around[data-v-4e23b186]{justify-content:space-around}.vs-space-center[data-v-4e23b186]{justify-content:center}.vs-space-end[data-v-4e23b186]{justify-content:flex-end}.vs-row[data-v-4e23b186]{flex-direction:row}.vs-column[data-v-4e23b186]{flex-direction:column}.vs-align-end[data-v-4e23b186]{align-items:flex-end}.vs-align-center[data-v-4e23b186]{align-items:center}.vs-align-start[data-v-4e23b186]{align-items:flex-start}.vs-item-hover[data-v-4e23b186]{background-color:rgba(0,0,0,.05)}.vs-btn-hover[data-v-4e23b186]{opacity:.8}.color-base[data-v-4e23b186]{color:#50a1ff}.bg-color-base[data-v-4e23b186]{background-color:#50a1ff}\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.goods-info[data-v-4e23b186]{display:flex;background-color:#fff;margin-bottom:%?20?%;padding:%?20?%}.goods-info .info-right[data-v-4e23b186]{margin-left:%?20?%;display:flex;flex-direction:column}.goods-info .info-right .price[data-v-4e23b186]{color:red;margin-top:auto}.goods-info .info-right .price .num[data-v-4e23b186]{color:#999}.cell[data-v-4e23b186]{background-color:#fff;padding:%?20?%;margin-bottom:%?20?%}.cell .cell-item[data-v-4e23b186]{display:flex;padding:%?20?% 0;border-bottom:1px solid #f5f5f5}.cell .cell-item uni-text[data-v-4e23b186]:nth-child(1){white-space:nowrap;color:#616161}.cell .cell-item uni-text[data-v-4e23b186]:nth-child(2){margin-left:auto}.cell .cell-item[data-v-4e23b186]:last-child{border-bottom:0}.footer-btn-box[data-v-4e23b186]{margin-top:%?20?%}',""]),t.exports=a},d606:function(t,a,e){var n=e("c8be");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("4f06").default;o("07039352",n,!0,{sourceMap:!1,shadowMode:!1})},d9d8:function(t,a,e){"use strict";e("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={name:"u-image",props:{src:{type:String,default:""},mode:{type:String,default:"aspectFill"},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:"auto"},shape:{type:String,default:"square"},borderRadius:{type:[String,Number],default:0},lazyLoad:{type:Boolean,default:!0},showMenuByLongpress:{type:Boolean,default:!0},loadingIcon:{type:String,default:"photo"},errorIcon:{type:String,default:"error-circle"},showLoading:{type:Boolean,default:!0},showError:{type:Boolean,default:!0},fade:{type:Boolean,default:!0},webp:{type:Boolean,default:!1},duration:{type:[String,Number],default:500},bgColor:{type:String,default:"#f3f4f6"}},data:function(){return{isError:!1,loading:!0,opacity:1,durationTime:this.duration,backgroundStyle:{}}},watch:{src:{immediate:!0,handler:function(t){t?this.isError=!1:(this.isError=!0,this.loading=!1)}}},computed:{wrapStyle:function(){var t={};return t.width=this.$u.addUnit(this.width),t.height=this.$u.addUnit(this.height),t.borderRadius="circle"==this.shape?"50%":this.$u.addUnit(this.borderRadius),t.overflow=this.borderRadius>0?"hidden":"visible",this.fade&&(t.opacity=this.opacity,t.transition="opacity ".concat(Number(this.durationTime)/1e3,"s ease-in-out")),t}},methods:{onClick:function(){this.$emit("click")},onErrorHandler:function(t){this.loading=!1,this.isError=!0,this.$emit("error",t)},onLoadHandler:function(){var t=this;if(this.loading=!1,this.isError=!1,this.$emit("load"),!this.fade)return this.removeBgColor();this.opacity=0,this.durationTime=0,setTimeout((function(){t.durationTime=t.duration,t.opacity=1,setTimeout((function(){t.removeBgColor()}),t.durationTime)}),50)},removeBgColor:function(){this.backgroundStyle={backgroundColor:"transparent"}}}};a.default=n},dc6a:function(t,a,e){"use strict";e.r(a);var n=e("95e0"),o=e("c591");for(var i in o)"default"!==i&&function(t){e.d(a,t,(function(){return o[t]}))}(i);e("855e"),e("fc31");var r,s=e("f0c5"),d=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"4e23b186",null,!1,n["a"],r);a["default"]=d.exports},e98e:function(t,a,e){"use strict";e.r(a);var n=e("d9d8"),o=e.n(n);for(var i in n)"default"!==i&&function(t){e.d(a,t,(function(){return n[t]}))}(i);a["default"]=o.a},e9ab:function(t,a,e){var n=e("8aca");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("4f06").default;o("d1dc621c",n,!0,{sourceMap:!1,shadowMode:!1})},fc31:function(t,a,e){"use strict";var n=e("d606"),o=e.n(n);o.a}}]);