(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["page1/addMaterial/addMaterial"],{45:function(e,t,a){"use strict";(function(e){a(5);n(a(3));var t=n(a(46));function n(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=a,e(t.default)}).call(this,a(1)["createPage"])},46:function(e,t,a){"use strict";a.r(t);var n=a(47),i=a(49);for(var r in i)"default"!==r&&function(e){a.d(t,e,(function(){return i[e]}))}(r);a(51);var u,o=a(11),l=Object(o["default"])(i["default"],n["render"],n["staticRenderFns"],!1,null,null,null,!1,n["components"],u);l.options.__file="page1/addMaterial/addMaterial.vue",t["default"]=l.exports},47:function(e,t,a){"use strict";a.r(t);var n=a(48);a.d(t,"render",(function(){return n["render"]})),a.d(t,"staticRenderFns",(function(){return n["staticRenderFns"]})),a.d(t,"recyclableRender",(function(){return n["recyclableRender"]})),a.d(t,"components",(function(){return n["components"]}))},48:function(e,t,a){"use strict";var n;a.r(t),a.d(t,"render",(function(){return i})),a.d(t,"staticRenderFns",(function(){return u})),a.d(t,"recyclableRender",(function(){return r})),a.d(t,"components",(function(){return n}));var i=function(){var e=this,t=e.$createElement;e._self._c},r=!1,u=[];i._withStripped=!0},49:function(e,t,a){"use strict";a.r(t);var n=a(50),i=a.n(n);for(var r in n)"default"!==r&&function(e){a.d(t,e,(function(){return n[e]}))}(r);t["default"]=i.a},50:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(26));function i(e){return e&&e.__esModule?e:{default:e}}var r={data:function(){return{files:[],index:"0",materialName:"",materialNum:"",materialPrice:"",materialType:"水果",tabindex:0,typeIndex:[0,1,2],typeValue:["水果","药品","生活必需品"],host:n.default.host,i:"data:image/png;base64,"}},onLoad:function(){this.userId="1"},methods:{getmaterialName:function(e){this.materialName=e.detail.value},getmaterialNum:function(e){this.materialNum=e.detail.value},getmaterialPrice:function(e){this.materialPrice=e.detail.value},getType:function(e){console.log(e.detail.value),this.tabindex=e.detail.value,this.materialType=this.typeValue[e.detail.value]},chooseImage:function(e){var t=this;wx.chooseImage({sizeType:["original","compressed"],sourceType:["album","camera"],success:function(e){t.files[t.index]=e.tempFilePaths[0],t.index=t.index+1,wx.uploadFile({url:t.host+"api/image",filePath:t.files[0],header:{"Content-Type":"multipart/form-data"},name:"file",formData:{user:"test"},success:function(e){t.i=t.i+e.data},fail:function(e){console.log(e)}})}})},previewItem:function(e){wx.previewImage({current:e.currentTarget.id,urls:this.files})},submit:function(t){for(var a=0;a<this.files.length;a++)this.files.length,this.files[a];e.request({url:this.host+"api/addMaterial",method:"POST",data:{materialName:this.materialName,materialNum:this.materialNum,materialImg:this.i,materialPrice:this.materialPrice,materialType:this.tabindex},header:{token:e.getStorageSync("token")},success:function(t){200==t.data.code?e.showToast({title:"添加成功",duration:1e3}):e.showToast({title:"添加失败",duration:1e3,icon:"error"})},fail:function(){e.showToast({title:"添加失败",duration:1e3,icon:"error"})}})}}};t.default=r}).call(this,a(1)["default"])},51:function(e,t,a){"use strict";a.r(t);var n=a(52),i=a.n(n);for(var r in n)"default"!==r&&function(e){a.d(t,e,(function(){return n[e]}))}(r);t["default"]=i.a},52:function(e,t,a){}},[[45,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/page1/addMaterial/addMaterial.js.map