webpackJsonp([12],{"3a99":function(t,e){},z7IZ:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={name:"print",data:function(){return{orders:[],danArr:[],shuangArr:[]}},methods:{printPage:function(){window.print()},getPrintOrders:function(){var t=this,e=JSON.parse(localStorage.getItem("ordercodes"));console.log(e),this.$axios.post("http://localhost:8080/SSMWW/getPrintOrders.do",e).then(function(e){t.orders=e.data,t.orders.forEach(function(e,r,n){console.log(e,r,n);var a=e.detail;t.danArr[r]=a.filter(function(t,e,r){return e%2==0}),t.shuangArr[r]=a.filter(function(t,e,r){return e%2==1}),t.danArr[r].length>t.shuangArr[r].length&&t.shuangArr[r].push({number:"",price:"",goodsname:""})})})}},created:function(){this.getPrintOrders()}},a={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{"background-color":"#F0F0F0",width:"100%",height:"100%",overflow:"auto"},attrs:{id:"maindiv"}},[r("button",{staticClass:"btn btn-success",staticStyle:{float:"right"},attrs:{type:"button"},on:{click:function(e){t.printPage()}}},[t._v("打印所选项")]),t._v(" "),r("div",{attrs:{id:"print"}},t._l(t.orders,function(e,n){return r("div",{staticClass:"col-sm-9",staticStyle:{"background-color":"#fff"}},[r("center",[r("h2",{staticStyle:{color:"black"}},[t._v("河南君豪建材有限商行")])]),t._v(" "),r("table",{staticClass:"table table-bordered"},[r("tr",[r("th",[t._v("用户：")]),r("th",{staticStyle:{color:"red"}},[t._v(t._s(e.receivename))]),t._v(" "),r("th",[t._v("联系电话：")]),r("th",{staticStyle:{color:"red"}},[t._v(t._s(e.receivephone))]),t._v(" "),r("th",[t._v("地址：")]),r("th",{staticStyle:{color:"red"}},[t._v(t._s(e.address))])]),t._v(" "),r("tr",[r("th",[t._v("业务员：")]),r("th",[t._v(t._s(e.salename))]),t._v(" "),r("th",[t._v("付款方式：")]),r("th"),t._v(" "),r("th",[t._v("日期：")]),r("th",[t._v(t._s(e.confirmdate))])]),t._v(" "),t._m(0,!0)]),t._v(" "),r("table",{staticClass:"table table-bordered"},[t._m(1,!0),t._v(" "),r("tbody",t._l(e.detail,function(e,n){return r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v(t._s(n+1))]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v(t._s(e.goodsname))]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v(t._s(e.price))]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v(t._s(e.number))]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v(t._s(e.number*e.price))]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}})])}))]),t._v(" "),r("p",{staticClass:"text-right",staticStyle:{color:"red"}},[t._v("共"+t._s(e.count)+"个商品")]),t._v(" "),r("p",{staticClass:"text-right",staticStyle:{color:"red"}},[t._v("总计:"+t._s(e.countprice)+"元")])],1)}))])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("th",[this._v("备注：")]),e("td",{attrs:{colspan:"5"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("th",{staticStyle:{"text-align":"center"}},[t._v("序号")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("商品名称")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("单价")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("数量")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("合计")]),t._v(" "),r("th",{staticStyle:{"text-align":"center",width:"200px"}},[t._v("备注")])])}]};var c=r("C7Lr")(n,a,!1,function(t){r("3a99")},"data-v-6c6cc7ea",null);e.default=c.exports}});