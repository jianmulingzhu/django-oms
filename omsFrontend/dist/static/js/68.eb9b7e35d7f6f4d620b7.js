webpackJsonp([68],{"/Si2":function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"",""])},WdVN:function(t,e,a){"use strict";function s(t){a("wOAE")}Object.defineProperty(e,"__esModule",{value:!0});var l=a("jtw6"),n=a("QmSG"),r={components:{},data:function(){return{tableData:[],tabletotal:0,currentPage:1,pagesize:n.pagesize,pageformat:n.pageformat,listQuery:{limit:n.LIMIT,offset:"",search:"",domain__name:this.$route.params.domain},Dns_Status:{0:"启用",1:"停用"},Dns_Types:["dnspod","godaddy"],addForm:!1,rowdata:{}}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;Object(l.e)(this.listQuery).then(function(e){t.tableData=e.data.results,t.tabletotal=e.data.count})},searchClick:function(){this.fetchData()},handleSizeChange:function(t){this.listQuery.limit=t,this.fetchData()},handleCurrentChange:function(t){this.listQuery.offset=(t-1)*n.LIMIT,this.fetchData()},updateDesc:function(t){this.addForm=!0,this.rowdata=t},changeDesc:function(){var t=this;Object(l.l)(this.rowdata.id,this.rowdata).then(function(){t.$message({message:"更新成功",type:"success"}),t.addForm=!1,t.fetchData()})}}},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[a("el-card",[a("div",{staticClass:"head-lavel"},[a("div",{staticClass:"table-button"},[a("a",[t._v(t._s(t.listQuery.domain__name))])]),t._v(" "),a("div",{staticClass:"table-search"},[a("el-input",{attrs:{placeholder:"搜索 ..."},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.searchClick(e)}},model:{value:t.listQuery.search,callback:function(e){t.$set(t.listQuery,"search",e)},expression:"listQuery.search"}},[a("i",{staticClass:"el-icon-search el-input__icon",attrs:{slot:"suffix"},on:{click:t.searchClick},slot:"suffix"})])],1)]),t._v(" "),a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{prop:"name",label:"名称",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"name-wrapper",staticStyle:{"text-align":"center",color:"rgb(0,0,0)"},attrs:{slot:"reference"},slot:"reference"},[a("el-tag",[t._v("\n                "+t._s(t.Dns_Status[e.row.status])+"\n              ")])],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"type",label:"类型"}}),t._v(" "),a("el-table-column",{attrs:{prop:"value",label:"值"}}),t._v(" "),a("el-table-column",{attrs:{prop:"ttl",label:"ttl"}}),t._v(" "),a("el-table-column",{attrs:{prop:"desc",label:"备注"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"success",size:"small"},on:{click:function(a){t.updateDesc(e.row)}}},[t._v("更新备注")])]}}])})],1)],1),t._v(" "),a("div",{staticClass:"table-pagination"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":t.pagesize,"page-size":t.listQuery.limit,layout:t.pageformat,total:t.tabletotal},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e}}})],1)]),t._v(" "),a("el-dialog",{attrs:{visible:t.addForm},on:{"update:visible":function(e){t.addForm=e}}},[a("el-form",{attrs:{"label-width":"90px"}},[a("el-form-item",{attrs:{label:"备注",prop:"desc"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:t.rowdata.desc,callback:function(e){t.$set(t.rowdata,"desc",e)},expression:"rowdata.desc"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.changeDesc}},[t._v("确 定")])],1)],1)],1)],1)},o=[],c={render:i,staticRenderFns:o},u=c,d=a("VU/8"),p=s,f=d(r,u,!1,p,null,null);e.default=f.exports},wOAE:function(t,e,a){var s=a("/Si2");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("72140e28",s,!0)}});