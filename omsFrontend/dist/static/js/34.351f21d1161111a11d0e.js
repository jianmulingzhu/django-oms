webpackJsonp([34],{"GO+z":function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,"",""])},Qvbc:function(e,t,a){var r=a("GO+z");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a("rjj0")("c9e9e87e",r,!0)},"g1v/":function(e,t,a){"use strict";function r(e){a("Qvbc")}Object.defineProperty(t,"__esModule",{value:!0});var l=a("gRE1"),n=a.n(l),s=a("BO1k"),o=a.n(s),i=a("Dd8w"),c=a.n(i),u=a("Zk8K"),p=a("EMlb"),m=a("QmSG"),f=a("NYxO"),d=a("nSkA"),h=a("vMJZ"),v={components:{},data:function(){return{tableData:[],tabletotal:0,currentPage:1,listQuery:{limit:m.LIMIT,offset:"",platform__name:"",ordering:"",status:"0",pid:""},pagesize:m.pagesize,pageformat:m.pageformat,editForm:!1,ruleForm:{},platform:"",platforms:[],STATUS_TEXT:{0:"未接收",1:"正在处理",2:"已完成"},STATUS_TYPE:{0:"danger",1:"success",2:"info"},enclosureData:[],paychannel_btn_copy_threepay:!1}},computed:c()({},Object(f.b)(["elements","role"])),created:function(){this.paychannel_btn_copy_threepay=this.elements["对接通道进度-乾坤大挪移"],this.fetchData(),this.fetchPlatformData()},methods:{fetchData:function(){var e=this;Object(u.j)(this.listQuery).then(function(t){e.tableData=t.data.results,e.tabletotal=t.data.count})},fetchPlatformData:function(){var e=this;Object(u.i)().then(function(t){e.platforms=t.data})},changePlatform:function(e){this.listQuery.platform__name="全部"===e?"":e,this.fetchData()},searchClick:function(){this.fetchData()},handleSizeChange:function(e){this.listQuery.limit=e,this.fetchData()},handleCurrentChange:function(e){this.listQuery.offset=(e-1)*m.LIMIT,this.fetchData()},handleSortChange:function(e){"ascending"===e.order?this.listQuery.ordering=e.prop:"descending"===e.order?this.listQuery.ordering="-"+e.prop:this.listQuery.ordering="",this.fetchData()},changeStatus:function(e){this.fetchData()},updateForm:function(e){this.editForm=!0,this.ruleForm=e},submitForm:function(){var e=this;Object(u.x)(this.ruleForm.id,this.ruleForm).then(function(t){if(e.$message({type:"success",message:"恭喜你，更新成功"}),e.editForm=!1,"2"===e.ruleForm.status){var a={action_user:e.ruleForm.create_user,title:"【通道已完成】"+e.ruleForm.name,message:"平台: "+e.ruleForm.platform+"\n通道类型: "+e.ruleForm.type};Object(d.h)(a)}})},copyPaychannel:function(e){var t=this,a={pid:e.pid,name:e.name,content:e.name,type:"来自第三方支付对接",create_user:e.create_user,create_time:e.create_time},r={ticket__name:e.platform};Object(u.l)(r).then(function(r){Object(p.u)(a).then(function(l){if(t.$message({type:"success",message:"恭喜你，转移成功"}),r.data.length>0){var n=!0,s=!1,i=void 0;try{for(var c,m=o()(r.data);!(n=(c=m.next()).done);n=!0){var f=c.value,v={project:l.data.id,file:f.file,create_user:f.create_user,create_time:f.create_time};Object(p.t)(v)}}catch(e){s=!0,i=e}finally{try{!n&&m.return&&m.return()}finally{if(s)throw i}}}e.status=1,Object(u.x)(e.id,e);var _={groups__name:"OMS_Dev_Manager"};Object(h.f)(_).then(function(e){var t=e.data,r=!0,n=!1,s=void 0;try{for(var i,c=o()(t);!(r=(i=c.next()).done);r=!0){var u=i.value,p={action_user:u.username,title:"【新需求】"+a.name,message:"操作人: "+a.create_user+"地址: http://"+window.location.host+"/#/projects/viewdemand/"+l.data.id};Object(d.h)(p)}}catch(e){n=!0,s=e}finally{try{!r&&c.return&&c.return()}finally{if(n)throw s}}})}).catch(function(e){var a=n()(e.response.data)[0];t.$message.error(a[0])})})}}},_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[a("el-card",[a("div",{staticClass:"head-lavel"},[a("div",{staticClass:"table-button"},[a("el-select",{attrs:{placeholder:"请选择平台进行筛选",clearable:""},on:{change:e.changePlatform},model:{value:e.platform,callback:function(t){e.platform=t},expression:"platform"}},e._l(e.platforms,function(e){return a("el-option",{key:e.id,attrs:{value:e.name}})})),e._v(" "),a("el-radio-group",{staticStyle:{"margin-left":"20px"},on:{change:e.changeStatus},model:{value:e.listQuery.status,callback:function(t){e.$set(e.listQuery,"status",t)},expression:"listQuery.status"}},e._l(Object.keys(e.STATUS_TEXT),function(t){return a("el-radio",{key:t,attrs:{label:t}},[e._v(e._s(e.STATUS_TEXT[t])+"\n          ")])}))],1),e._v(" "),a("div",{staticClass:"table-search"},[a("el-input",{attrs:{placeholder:"搜索编号"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.searchClick(t)}},model:{value:e.listQuery.pid,callback:function(t){e.$set(e.listQuery,"pid",t)},expression:"listQuery.pid"}},[a("i",{staticClass:"el-icon-search el-input__icon",attrs:{slot:"suffix"},on:{click:e.searchClick},slot:"suffix"})])],1)]),e._v(" "),a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""},on:{"sort-change":e.handleSortChange}},[a("el-table-column",{attrs:{prop:"pid",label:"编号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"platform",label:"平台"}}),e._v(" "),a("el-table-column",{attrs:{prop:"type",label:"通道类型"}}),e._v(" "),a("el-table-column",{attrs:{prop:"level",label:"紧急度"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"name-wrapper",staticStyle:{"text-align":"center",color:"rgb(0,0,0)"},attrs:{slot:"reference"},slot:"reference"},[a("el-rate",{attrs:{colors:["#99A9BF","#F7BA2A","#ff1425"],disabled:""},model:{value:t.row.level,callback:function(a){e.$set(t.row,"level",a)},expression:"scope.row.level"}})],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态",sortable:"custom"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"name-wrapper",staticStyle:{"text-align":"center",color:"rgb(0,0,0)"},attrs:{slot:"reference"},slot:"reference"},[a("el-tag",{attrs:{type:e.STATUS_TYPE[t.row.status]}},[e._v("\n                "+e._s(e.STATUS_TEXT[t.row.status])+"\n              ")])],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(a){e.updateForm(t.row)}}},[e._v("修改")]),e._v(" "),"super"!==e.role&&!e.paychannel_btn_copy_threepay||0!==t.row.status?e._e():a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){e.copyPaychannel(t.row)}}},[e._v("\n              乾坤大挪移\n            ")])]}}])})],1)],1),e._v(" "),a("div",{staticClass:"table-pagination"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pagesize,"page-size":e.listQuery.limit,layout:e.pageformat,total:e.tabletotal},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t}}})],1)]),e._v(" "),a("el-dialog",{attrs:{visible:e.editForm,width:"30%"},on:{"update:visible":function(t){e.editForm=t},close:e.fetchData}},[a("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"编号",prop:"pid"}},[a("el-input",{attrs:{disabled:""},model:{value:e.ruleForm.pid,callback:function(t){e.$set(e.ruleForm,"pid",t)},expression:"ruleForm.pid"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"名称",prop:"name"}},[a("el-input",{attrs:{disabled:""},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"紧急度",prop:"level"}},[a("el-rate",{attrs:{colors:["#99A9BF","#F7BA2A","#ff1425"],"show-text":"",texts:["E","D","C","B","A"]},model:{value:e.ruleForm.level,callback:function(t){e.$set(e.ruleForm,"level",t)},expression:"ruleForm.level"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"状态",prop:"status"}},[a("el-radio-group",{model:{value:e.ruleForm.status,callback:function(t){e.$set(e.ruleForm,"status",t)},expression:"ruleForm.status"}},e._l(Object.keys(e.STATUS_TEXT),function(t){return a("el-radio",{key:t,attrs:{label:t}},[e._v(e._s(e.STATUS_TEXT[t])+"\n          ")])}))],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("提交")])],1)],1)],1)],1)},b=[],y={render:_,staticRenderFns:b},g=y,F=a("VU/8"),S=r,k=F(v,g,!1,S,null,null);t.default=k.exports}});