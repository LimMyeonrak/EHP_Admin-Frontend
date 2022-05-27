"use strict";(self.webpackChunkaimmed_web=self.webpackChunkaimmed_web||[]).push([[115],{28708:function(e,t,n){var a=n(29439),l=n(85589),i=n(66106),r=n(52425),s=n(30914),o=n(73231),d=n(9040),c=n(36076),u=n(72426),p=n.n(u),x=n(72791),h=n(69305),f=n(80184);t.Z=function(e){e.mode;var t=e.form,n=e.content,u=e.setContent,m=(e.uploadFiles,e.setUploadFiles,e.boadrFiles,e.setBoadrFiles,e.onClickDownLoad,e.setIsChaged),y=e.userInfo,g=(0,x.useState)(!1),Z=(0,a.Z)(g,2);Z[0],Z[1];return(0,x.useEffect)((function(){return m(!1),function(){}}),[]),(0,f.jsx)(l.Z,{layout:"horizontal",form:t,onChange:function(){m(!0)},children:(0,f.jsxs)(i.Z,{className:"content__contentbox__table",children:[(0,f.jsx)(l.Z.Item,{labelCol:{span:0},wrapperCol:{span:0},name:"articleIdx",hidden:!0,label:"",initialValue:null,children:(0,f.jsx)(r.Z,{})}),(0,f.jsx)(s.Z,{className:"label",span:4,children:"\ub178\ucd9c\uc5ec\ubd80"}),(0,f.jsx)(s.Z,{className:"data",span:20,children:(0,f.jsx)(l.Z.Item,{labelCol:{span:0},wrapperCol:{span:10},name:"isUse",label:"",initialValue:1,children:(0,f.jsx)(o.ZP.Group,{options:h.D2})})}),(0,f.jsx)(s.Z,{className:"label required",span:4,children:"\uc81c\ubaa9"}),(0,f.jsx)(s.Z,{className:"data",span:20,children:(0,f.jsx)(l.Z.Item,{labelCol:{span:0},wrapperCol:{span:24},name:"title",label:"",rules:[{required:!0,message:"\uc81c\ubaa9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."}],children:(0,f.jsx)(r.Z,{})})}),(0,f.jsx)(s.Z,{className:"label required",span:4,children:"\ub2f5\ubcc0"}),(0,f.jsxs)(s.Z,{className:"data",span:20,children:[(0,f.jsx)(d.ML,{value:n,height:350,onChange:function(e){n!==e&&(t.setFieldsValue({content:e}),u(e),m(!0))}}),(0,f.jsx)(l.Z.Item,{labelCol:{span:0},wrapperCol:{span:24},name:"content",label:"",style:{marginTop:"-32px"},rules:[{required:!0,message:"\ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."}],children:(0,f.jsx)(r.Z,{hidden:!0,style:{height:"0px"}})})]}),(0,f.jsx)(s.Z,{className:"label",span:4,children:"\ub4f1\ub85d\uc790/\uc77c\uc2dc"}),(0,f.jsx)(s.Z,{className:"data",span:8,children:y?"".concat((0,c.$t)(y.name)," ").concat((0,c.$t)(p()().format("YYYY-MM-DD HH:mm:ss"))):"".concat((0,c.$t)(t.getFieldValue("registerName"))," ").concat((0,c.$t)(t.getFieldValue("registDate")))}),(0,f.jsx)(s.Z,{className:"label",span:4,children:"\ucd5c\uc885\uc218\uc815\uc790/\uc77c\uc2dc"}),(0,f.jsx)(s.Z,{className:"data",span:8,children:"".concat((0,c.$t)(t.getFieldValue("updaterName"))," ").concat((0,c.$t)(t.getFieldValue("updateDate")))})]})})}},85115:function(e,t,n){n.r(t),n.d(t,{default:function(){return z}});var a=n(72791),l=n(1413),i=n(29439),r=n(72426),s=n.n(r),o=n(85589),d=n(42470),c=n(66106),u=n(30914),p=n(87309),x=n(763),h=n(37644),f=n(36076),m=n(79271),y=n(4980),g=n(83099),Z=n(35014),v=n(30326),j=n(33928),b=n(73860),I=n(26974),C=n(29351),N=n(28708),w=n(68692),T=n(843),k=n(47132),F=n(52425),D=n(29764),S=n(9040),E=n(79780),R=n(80184),_=F.Z.TextArea,L=function(e){var t=e.userInfo,n=e.boardType,l=e.articleIdx,r=e.articleAttachType,s=e.articleType,o=e.replyLevel,d=e.parentReplyIdx,x=e.replyItem,h=e.refresh,f=(e.isPopup,(0,a.useState)([])),m=(0,i.Z)(f,2),y=m[0],g=m[1],v=(0,a.useState)([]),j=(0,i.Z)(v,2),b=j[0],I=j[1],C=(0,a.useState)(""),N=(0,i.Z)(C,2),w=N[0],T=N[1];(0,a.useEffect)((function(){x&&(T(x.replyContent),I(x.replyAttachList))}),[x]);return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)(c.Z,{justify:"space-between",children:[(0,R.jsx)(u.Z,{span:24,children:x?"".concat(x.registerName," (").concat(x.registDate,")"):"".concat(t.name," (").concat(t.userId,")")}),(0,R.jsx)(u.Z,{span:24,children:(0,R.jsx)(_,{rows:5,onChange:function(e){var t=e.target.value;T(t)},value:w})})]}),b.length>0&&(0,R.jsx)(c.Z,{justify:"space-between",children:(0,R.jsx)(E.Z,{downloadFiles:b,setDownloadFiles:I})}),(0,R.jsxs)(c.Z,{justify:"space-between",style:{marginTop:"10px"},children:[(0,R.jsx)(u.Z,{style:{marginLeft:"".concat("0px")},children:(0,R.jsx)("div",{className:"upload_item_inline",children:(0,R.jsx)(S.L1,{uploadFiles:y,setUploadFiles:g,maxCount:b?3-b.length:3})})}),(0,R.jsx)(u.Z,{style:{textAlign:"end"},children:(0,R.jsx)(p.Z,{type:"primary",onClick:function(){if(""===w)Z.Z.msg("002","\ub313\uae00");else{var e=new FormData;e.append("boardType",n),e.append("articleAttachType",r),e.append("articleType",s),d?e.append("parentReplyIdx",d):e.append("parentReplyIdx",null),e.append("replyLevel",o),e.append("articleIdx",l),e.append("replyContent",w),console.log("uploadFiles"),console.log(y),y&&y.forEach((function(t){e.append("files",t)})),x?(b.length>0&&b.map((function(t){return e.append("includeFileIdxs",t.idx)})),e.append("replyIdx",x.replyIdx),(0,D.H)({data:e},(function(e){(null===e||void 0===e?void 0:e.message.indexOf("\uc131\uacf5"))>-1?(T(""),g([]),h&&h()):Z.Z.warn("\uc800\uc7a5\uc5d0 \uc2e4\ud328 \ud588\uc2b5\ub2c8\ub2e4.")}))):(0,D.j2)({data:e},(function(e){(null===e||void 0===e?void 0:e.message.indexOf("\uc131\uacf5"))>-1?(T(""),g([]),h&&h()):Z.Z.warn("\uc800\uc7a5\uc5d0 \uc2e4\ud328 \ud588\uc2b5\ub2c8\ub2e4.")}))}},children:x?"\uc218\uc815":"\uc785\ub825"})})]})]})},A=function(e){var t=e.boardType,n=e.reply,r=e.articleAttachType,s=e.articleIdx,o=e.articleType,d=e.refresh,f=(0,v.Z)().userInfo,m=(0,a.useState)(),y=(0,i.Z)(m,2),g=y[0],b=y[1],I=(0,C.Z)().setLoading,N=function(e){Z.Z.msg("102","",(function(){(0,h.Mf)({boardType:Number(e.boardType),articleType:e.articleType,replyIdx:e.replyIdx,articleIdx:e.articleIdx,articleAttachType:r},(function(e){(null===e||void 0===e?void 0:e.message.indexOf("\uc131\uacf5"))>-1?(Z.Z.info("\uc800\uc7a5 \ub418\uc5c8\uc2b5\ub2c8\ub2e4."),d()):Z.Z.warn("\uc800\uc7a5\uc5d0 \uc2e4\ud328 \ud588\uc2b5\ub2c8\ub2e4.")}))}),(function(){}))},F=function(e){I((0,j.Tv)({idx:e.idx,fileName:e.fileName}))};return(0,a.useEffect)((function(){if(n){var e=[];n.forEach((function(t){t.parentReplyIdx&&"null"!==t.parentReplyIdx||e.push((0,l.Z)((0,l.Z)({},t),{},{children:[]})),e.forEach((function(e){Number(e.replyIdx)===Number(t.parentReplyIdx)&&e.children.push((0,l.Z)({},t))}))})),b(e)}}),[n]),(0,R.jsxs)(c.Z,{className:"content__contentbox__table",style:{borderLeft:"1px solid #E0E0E0",borderRight:"1px solid #E0E0E0"},children:[g&&g.length>0&&(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)(u.Z,{className:"label",span:24,children:["\ub313\uae00 ",g.length>0?"".concat(g.length,"\uac1c"):""]}),g&&g.map((function(e,n){return(0,R.jsxs)(u.Z,{className:"data",span:24,style:{padding:"0px"},children:[(0,R.jsxs)(c.Z,{align:"middle",justify:"space-between",style:{minHeight:"100px",padding:"10px"},children:[(0,R.jsxs)(u.Z,{span:20,children:[(0,R.jsxs)(u.Z,{span:24,style:{marginBottom:"5px"},children:[e.registerName,"(",e.regId,") ",e.registDate," ",(0,R.jsx)(k.Z,{button:{name:"\ub300\ub313\uae00\uc4f0\uae30",type:"text"},userInfo:f,boardType:t,articleIdx:e.articleIdx,articleAttachType:r,articleType:o,replyLevel:Number(e.replyLevel)+1,parentReplyIdx:e.replyIdx,refresh:d}),e.replyAttachList.length>0&&e.replyAttachList.map((function(e){return(0,R.jsx)(w.Z,{title:null!==e&&void 0!==e&&e.fileName?null===e||void 0===e?void 0:e.fileName:"",onClick:function(){F(e)},style:{marginRight:"10px"}},(0,x.uniqueId)())}))]}),(0,R.jsx)(u.Z,{span:24,children:e.replyContent})]}),(0,R.jsxs)(u.Z,{span:4,style:{textAlign:"end"},children:[(0,R.jsx)(k.Z,{button:{name:"\uc218\uc815",type:""},userInfo:f,boardType:t,articleIdx:e.articleIdx,articleAttachType:r,articleType:o,replyLevel:Number(e.replyLevel)+1,parentReplyIdx:e.replyIdx,refresh:d,replyItem:e}),(0,R.jsx)(p.Z,{onClick:function(){N(e)},children:"\uc0ad\uc81c"})]})]}),e.children&&e.children.map((function(e){return(0,R.jsxs)(c.Z,{align:"middle",justify:"space-between",style:{minHeight:"100px",padding:"10px",paddingLeft:"20px"},children:[(0,R.jsx)(u.Z,{span:1,children:(0,R.jsx)(T.Z,{style:{transform:"scaleX(-1)"}})}),(0,R.jsxs)(u.Z,{span:19,children:[(0,R.jsxs)(u.Z,{span:24,style:{marginBottom:"5px"},children:[e.registerName,"(",e.regId,") ",e.registDate," ",e.replyAttachList.length>0&&e.replyAttachList.map((function(e){return(0,R.jsx)(w.Z,{title:null!==e&&void 0!==e&&e.fileName?null===e||void 0===e?void 0:e.fileName:"",onClick:function(){F(e)},style:{marginRight:"10px"}},(0,x.uniqueId)())}))]}),(0,R.jsx)(u.Z,{span:24,children:e.replyContent})]}),(0,R.jsxs)(u.Z,{span:4,style:{textAlign:"end"},children:[(0,R.jsx)(k.Z,{button:{name:"\uc218\uc815",type:""},userInfo:f,boardType:t,articleIdx:e.articleIdx,articleAttachType:r,articleType:o,replyLevel:Number(e.replyLevel),parentReplyIdx:e.replyIdx,refresh:d,replyItem:e}),(0,R.jsx)(p.Z,{onClick:function(){N(e)},children:"\uc0ad\uc81c"})]})]},(0,x.uniqueId)())}))]},(0,x.uniqueId)())}))]}),(0,R.jsx)(u.Z,{className:"label",span:4,children:"\ub313\uae00"}),(0,R.jsx)(u.Z,{className:"data",span:20,children:(0,R.jsx)(L,{userInfo:f,boardType:t,articleIdx:s,articleAttachType:r,articleType:o,replyLevel:0,refresh:d})})]})},O=function(e){var t,n=e.articleIdx,r=(e.answerIdx,e.hideModal),d=(0,v.Z)().userInfo,x=(0,a.useState)(),f=(0,i.Z)(x,2),m=f[0],w=f[1],T=(0,a.useState)(),k=(0,i.Z)(T,2),F=k[0],D=k[1],S=(0,a.useState)(),E=(0,i.Z)(S,2),_=E[0],L=E[1],O=(0,a.useState)(),P=(0,i.Z)(O,2),M=(P[0],P[1],o.Z.useForm()),q=(0,i.Z)(M,1)[0],V=(0,a.useState)([]),B=(0,i.Z)(V,2),K=B[0],H=B[1],U=(0,a.useState)([]),z=(0,i.Z)(U,2),G=z[0],W=z[1],Y=(0,a.useState)(!1),$=(0,i.Z)(Y,2),Q=($[0],$[1]),X=(0,a.useState)(),J=(0,i.Z)(X,2),ee=J[0],te=J[1],ne=(0,a.useState)(!1),ae=(0,i.Z)(ne,2),le=ae[0],ie=ae[1],re=(0,a.useState)(!1),se=(0,i.Z)(re,2),oe=se[0],de=se[1],ce=(0,C.Z)().setLoading,ue=function(){0!==n?(te(null),ce((0,h.uT)(n,(function(e){var t,n;D(e.result.data),w(null===(t=e.result.data)||void 0===t?void 0:t.content),H(e.result.files);var a=e.result.data;q.setFieldsValue((0,l.Z)({},a)),te(null===(n=e.result.data)||void 0===n?void 0:n.answerIdx),ie(!1)})))):q.setFieldsValue({registerName:d.name,registDate:s()().format("YYYY-MM-DD HH:mm:ss")})},pe=function(){le||oe?Z.Z.msg("104","",(function(){r(!1)})):r(!1)};return(0,a.useEffect)((function(){return ue(),function(){te(null),ie(!1),de(!1)}}),[]),(0,a.useEffect)((function(){ee?ce((0,h.Gg)(ee,(function(e){L(e)}))):L(null)}),[ee]),(0,R.jsx)(R.Fragment,{children:(0,R.jsxs)(y.Z,{visible:0!==n,title:"\uacf5\uc9c0\uc0ac\ud56d \uc0c1\uc138",onCancel:pe,className:"detail_modal",footer:(0,R.jsx)(R.Fragment,{}),width:1400,children:[(0,R.jsx)(N.Z,{form:q,data:F,content:m,setContent:w,boadrFiles:K,setBoadrFiles:H,onClickDownLoad:function(e){ce((0,j.Tv)({idx:e.idx,fileName:e.fileName}))},uploadFiles:G,setUploadFiles:W,setIsChaged:ie}),(0,R.jsx)(c.Z,{justify:"end",style:{marginBottom:"10px"},children:(0,R.jsx)(u.Z,{children:(0,R.jsxs)(g.Z,{children:[(0,R.jsx)(p.Z,{name:"\uc218\uc815",type:"primary",onClick:function(){q.validateFields().then((function(e){Z.Z.msg("101","",(function(){var t=(0,l.Z)((0,l.Z)({},e),{},{isTopFix:e.isTopFix?1:0}),n=new FormData;Object.keys(t).forEach((function(e){void 0!==t[e]&&null!==t[e]&&n.append(e,t[e])})),K.length>0&&K.map((function(e){return n.append("includeFileIdxs",e.idx)})),G&&G.forEach((function(e){n.append("files",e)})),ce((0,h.sz)({data:n},(function(e){ie(!1),Q(!1),ue(),W([]),Z.Z.info("\uc800\uc7a5\ub418\uc5c8\uc2b5\ub2c8\ub2e4.")})))}))}))},children:"\uc218\uc815"}),(0,R.jsx)(p.Z,{name:"\uc0ad\uc81c",type:"primary",onClick:function(e){Z.Z.msg(void 0!==ee&&null!==ee?"105":"102","",(function(){(0,h.Zt)(n,(function(e){r(!0)}))}),(function(){}))},children:"\uc0ad\uc81c"}),!_&&(0,R.jsx)(b.OY,{articleIdx:n,refresh:ue}),(0,R.jsx)(p.Z,{name:"\ub2eb\uae30",onClick:pe,children:"\ub2eb\uae30"})]})})}),F&&(0,R.jsx)(A,{reply:null===F||void 0===F?void 0:F.replyList,boardType:0,articleAttachType:5,articleIdx:n,articleType:"Q",refresh:ue}),_&&(0,R.jsx)(I.Z,{viewMode:!0,data:_,articleIdx:n,refresh:ue,setIsAnsChaged:de}),_&&(null===(t=_.result)||void 0===t?void 0:t.data)&&(0,R.jsx)(A,{reply:_.result.data.answerReplyList,boardType:0,articleAttachType:6,articleIdx:_.result.data.answerIdx,articleType:"A",refresh:ue})]})})},P=function(e){var t=e.articleIdx,n=e.hideModal,a=e.answerIdx;return(0,R.jsx)(O,{articleIdx:t,hideModal:n,answerIdx:a})},M=n(83734),q=n(73231),V=n(69305),B=function(e){var t=e.form,n=(0,a.useState)(!1),l=(0,i.Z)(n,2);l[0],l[1];return(0,R.jsx)(R.Fragment,{children:(0,R.jsxs)(c.Z,{className:"content__contentbox__table",children:[(0,R.jsx)(u.Z,{className:"label",span:4,children:"\uae30\uac04"}),(0,R.jsx)(u.Z,{className:"data",span:20,children:(0,R.jsxs)(c.Z,{align:"middle",justify:"start",children:[(0,R.jsx)(o.Z.Item,{name:"searchDateType",initialValue:0,label:"",style:{width:"200px"},children:(0,R.jsx)(M.Z,{options:V.WL})}),(0,R.jsx)(S.Gt,{form:t})]})}),(0,R.jsx)(u.Z,{className:"label",span:4,children:"\ub178\ucd9c\uc5ec\ubd80"}),(0,R.jsx)(u.Z,{className:"data",span:20,children:(0,R.jsx)(o.Z.Item,{labelCol:{span:0},wrapperCol:{span:24},name:"isUse",initialValue:1,label:"",children:(0,R.jsx)(q.ZP.Group,{options:V.D2})})}),(0,R.jsx)(u.Z,{className:"label ",span:4,children:"\uac80\uc0c9"}),(0,R.jsx)(u.Z,{className:"data",span:20,children:(0,R.jsxs)(c.Z,{justify:"start",children:[(0,R.jsx)(o.Z.Item,{name:"searchType",initialValue:0,label:"",style:{width:"200px",marginRight:"10px"},children:(0,R.jsx)(M.Z,{options:V.yt})}),(0,R.jsx)(o.Z.Item,{name:"searchWord",label:"",initialValue:"",style:{width:"200px",marginLeft:"0px",marginRight:"0px"},children:(0,R.jsx)(F.Z,{})})]})})]})})},K=n(62953),H=function(e){var t=e.data,n=e.page,a=e.onRowSelected,l=e.onChangePage,i=e.onShowSizeChange,r=e.moveAddPage,s=(e.fileDownload,e.setGridApi),o=e.onClickDelete,d={columnDefs:[{field:"number",headerName:"No.",minWidth:30,headerCheckboxSelection:!0,checkboxSelection:!0},{field:"noticeTargetFormat",headerName:"\ub300\uc0c1"},{field:"title",headerName:"\uc81c\ubaa9",minWidth:300,cellClass:"tal",cellRendererFramework:function(e){var t,n,a,l,i,r;return e.data?(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)("div",{children:[e.value,(0,R.jsx)("span",{style:{color:"red"},children:Number(null===(t=e.data)||void 0===t?void 0:t.articleReplyCnt)>0?"  [".concat(null===(n=e.data)||void 0===n?void 0:n.articleReplyCnt,"]"):""})]}),(null===(a=e.data)||void 0===a?void 0:a.answerTitle)&&(0,R.jsxs)("div",{style:{paddingLeft:"10px",marginTop:"-5px"},children:[(0,R.jsx)("div",{style:{display:"inline-flex"},children:(0,R.jsx)(T.Z,{style:{transform:"scaleX(-1)"}})}),null===(l=e.data)||void 0===l?void 0:l.answerTitle,(0,R.jsx)("span",{style:{color:"red"},children:Number(null===(i=e.data)||void 0===i?void 0:i.articleAnswerReplyCnt)>0?"  [".concat(null===(r=e.data)||void 0===r?void 0:r.articleAnswerReplyCnt,"]"):""})]})]}):(0,R.jsx)("div",{})}},{field:"isConfirmFormat",headerName:"\ud655\uc778\uc5ec\ubd80",minWidth:30},{field:"isTopFixFormat",headerName:"\uc0c1\ub2e8\uace0\uc815",minWidth:30},{field:"isUseFormat",headerName:"\ub178\ucd9c",minWidth:60},{field:"registerName",headerName:"\ub4f1\ub85d\uc790"},{field:"registDate",headerName:"\ub4f1\ub85d\uc77c\uc2dc"},{field:"updaterName",headerName:"\ucd5c\uc885\uc218\uc815\uc790"},{field:"updateDate",headerName:"\ucd5c\uc885\uc218\uc815\uc77c\uc2dc"}],headerHeight:35,rowHeight:41,defaultColDef:{flex:1,minWidth:120,editable:!1,resizable:!0,sortable:!0},suppressRowClickSelection:!0,rowSelection:"multiple"};return(0,R.jsx)("div",{className:"ag-grid-custom",children:(0,R.jsxs)("div",{style:{backgroundColor:"white",padding:"20px"},children:[(0,R.jsxs)(c.Z,{style:{marginBottom:"10px"},children:[(0,R.jsx)(u.Z,{span:12}),(0,R.jsxs)(u.Z,{span:12,style:{textAlign:"end"},children:[(0,R.jsx)(p.Z,{type:"primary",onClick:r,children:"\ub4f1\ub85d"}),(0,R.jsx)(p.Z,{type:"primary",onClick:o,children:"\uc0ad\uc81c"})]})]},(0,x.uniqueId)()),(0,R.jsx)("div",{className:"ag-grid-custom__grid ag-theme-balham",style:{width:"100%",height:"450px"},children:(0,R.jsx)(K.AgGridReact,{rowData:t.list,gridOptions:d,onGridReady:function(e){s(e.api)},enableRangeSelection:!0,onRowDoubleClicked:a,enableBrowserTooltips:!0})}),(0,R.jsx)("div",{className:"page-box",style:{textAlign:"center",marginTop:"10px"},children:(0,R.jsx)(S.wD,{total:t.total,current:n,onChange:l,showSizeChanger:!0,defaultPageSize:10,onShowSizeChange:i})})]})})},U=function(){var e=(0,a.useState)({}),t=(0,i.Z)(e,2),n=t[0],r=t[1],y=(0,a.useState)(0),g=(0,i.Z)(y,2),v=g[0],j=g[1],b=(0,a.useState)(),I=(0,i.Z)(b,2),N=I[0],w=I[1],T=o.Z.useForm(),k=(0,i.Z)(T,1)[0],F=(0,a.useState)({}),D=(0,i.Z)(F,2),S=D[0],E=D[1],_=(0,a.useState)(null),L=(0,i.Z)(_,2),A=L[0],O=L[1],M=(0,m.k6)(),q=(0,C.Z)().setLoading,V=function(){var e=k.getFieldsValue();e.startDate=s()(e.startDate).format("yyyy-MM-DD"),e.endDate=s()(e.endDate).format("yyyy-MM-DD"),e.isTopFix="all"===e.isTopFix?void 0:e.isTopFix,E((0,l.Z)((0,l.Z)({},e),{},{page:1,limit:10})),K((0,l.Z)((0,l.Z)({},e),{},{page:1,limit:10}))},K=function(e){q((0,h.r7)(e,(function(e){r(null===e||void 0===e?void 0:e.result),j(null===e||void 0===e?void 0:e.result.total)})))};(0,a.useEffect)((function(){V()}),[]);return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)("section",{className:"page_content",children:[(0,R.jsxs)(d.Z,{className:"title-navi__navi",children:[(0,R.jsx)(d.Z.Item,{className:"title-navi__navi__home",children:"\uac8c\uc2dc\ud310\uad00\ub9ac"}),(0,R.jsx)(d.Z.Item,{className:"title-navi__navi__parent",children:"FAQ"})]}),(0,R.jsxs)(o.Z,{form:k,layout:"horizontal",children:[(0,R.jsxs)(c.Z,{align:"bottom",style:{marginBottom:"10px",marginTop:"-12px"},children:[(0,R.jsx)(u.Z,{span:12,children:"\uac80\uc0c9\uc870\uac74"}),(0,R.jsxs)(u.Z,{span:12,style:{textAlign:"end"},children:[(0,R.jsx)(p.Z,{type:"primary",htmlType:"submit",onClick:V,children:"\uc870\ud68c"}),"\xa0",(0,R.jsx)(p.Z,{type:"primary",htmlType:"reset",children:"\ucd08\uae30\ud654"})]})]},(0,x.uniqueId)()),(0,R.jsx)(B,{form:k})]}),(0,R.jsx)(c.Z,{align:"bottom",style:{marginBottom:"10px",marginTop:"-12px"},children:(0,R.jsxs)(u.Z,{span:24,children:["\uac80\uc0c9\uacb0\uacfc : ",(0,R.jsxs)("span",{style:{color:"red"},children:["(",(0,f.x6)(v),"\uac74)"]})]})},(0,x.uniqueId)()),n&&(0,R.jsx)(H,{data:n,page:null===S||void 0===S?void 0:S.page,onRowSelected:function(e){w(e.data)},onChangePage:function(e){E((0,l.Z)((0,l.Z)({},S),{},{page:e})),K((0,l.Z)((0,l.Z)({},S),{},{page:e}))},onShowSizeChange:function(e,t){console.log(e," : ",t)},moveAddPage:function(e){M.push("/partner/faq/new")},fileDownload:function(){q((0,h.NK)({url:"/board-api/cms/notices/excel?page=1&limit=30&searchDateType=0&startDate=2022-02-10&endDate=2022-02-12&isConfirm=1&isTopFix=&isUse=1&searchRegisterName=&searchWord=&noticeTargetIds=&targetIds=&userId=&noticeTarget=1&isTopFix=&searchRegisterName=&searchWord=&noticeTargetIds=&targetIds=&userId=",fileNm:"\uacf5\uc9c0\uc0ac\ud56d_".concat(s()().format("yyyyMMddHHmmss"),".xls"),data:S}))},setGridApi:O,onClickDelete:function(){var e=A.getSelectedNodes(),t=[],n=e.map((function(e){return null!==e.data.answerIdx&&t.push({articleIdx:e.data.articleIdx,answerIdx:e.data.answerIdx}),e.data.articleIdx}));if(0===n.length)return Z.Z.msg("001");Z.Z.msg(t.length>0?"105":"102","",(function(){t.length>0&&t.map((function(e){return(0,h.gt)({articleIdx:e.articleIdx,answerIdx:e.answerIdx},(function(){}))})),q((0,h.mc)({noticeTargetIds:n.toString()},(function(){V()})))}))}})]}),(0,R.jsx)("div",{children:N&&(0,R.jsx)(P,{articleIdx:N.articleIdx,hideModal:function(e){w(void 0),e&&K(S)},answerIdx:N.answerIdx})})]})},z=function(){return(0,R.jsx)(U,{})}},73231:function(e,t,n){n.d(t,{ZP:function(){return k}});var a=n(4942),l=n(87462),i=n(72791),r=n(28083),s=n(81694),o=n.n(s),d=n(88834),c=n(23785),u=i.createContext(null),p=u.Provider,x=u,h=n(14824),f=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n},m=function(e,t){var n,s=i.useContext(x),u=i.useContext(c.E_),p=u.getPrefixCls,m=u.direction,y=i.useRef(),g=(0,d.sQ)(t,y);i.useEffect((function(){(0,h.Z)(!("optionType"in e),"Radio","`optionType` is only support in Radio.Group.")}),[]);var Z=e.prefixCls,v=e.className,j=e.children,b=e.style,I=f(e,["prefixCls","className","children","style"]),C=p("radio",Z),N=(0,l.Z)({},I);s&&(N.name=s.name,N.onChange=function(t){var n,a;null===(n=e.onChange)||void 0===n||n.call(e,t),null===(a=null===s||void 0===s?void 0:s.onChange)||void 0===a||a.call(s,t)},N.checked=e.value===s.value,N.disabled=e.disabled||s.disabled);var w=o()("".concat(C,"-wrapper"),(n={},(0,a.Z)(n,"".concat(C,"-wrapper-checked"),N.checked),(0,a.Z)(n,"".concat(C,"-wrapper-disabled"),N.disabled),(0,a.Z)(n,"".concat(C,"-wrapper-rtl"),"rtl"===m),n),v);return i.createElement("label",{className:w,style:b,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},i.createElement(r.Z,(0,l.Z)({},N,{type:"radio",prefixCls:C,ref:g})),void 0!==j?i.createElement("span",null,j):null)},y=i.forwardRef(m);y.displayName="Radio";var g=y,Z=n(29439),v=n(75179),j=n(1815);var b=i.forwardRef((function(e,t){var n=i.useContext(c.E_),r=n.getPrefixCls,s=n.direction,d=i.useContext(j.Z),u=(0,v.Z)(e.defaultValue,{value:e.value}),x=(0,Z.Z)(u,2),h=x[0],f=x[1];return i.createElement(p,{value:{onChange:function(t){var n=h,a=t.target.value;"value"in e||f(a);var l=e.onChange;l&&a!==n&&l(t)},value:h,disabled:e.disabled,name:e.name}},function(){var n,c=e.prefixCls,u=e.className,p=void 0===u?"":u,x=e.options,f=e.optionType,m=e.buttonStyle,y=void 0===m?"outline":m,Z=e.disabled,v=e.children,j=e.size,b=e.style,I=e.id,C=e.onMouseEnter,N=e.onMouseLeave,w=r("radio",c),T="".concat(w,"-group"),k=v;if(x&&x.length>0){var F="button"===f?"".concat(w,"-button"):w;k=x.map((function(e){return"string"===typeof e||"number"===typeof e?i.createElement(g,{key:e.toString(),prefixCls:F,disabled:Z,value:e,checked:h===e},e):i.createElement(g,{key:"radio-group-value-options-".concat(e.value),prefixCls:F,disabled:e.disabled||Z,value:e.value,checked:h===e.value,style:e.style},e.label)}))}var D=j||d,S=o()(T,"".concat(T,"-").concat(y),(n={},(0,a.Z)(n,"".concat(T,"-").concat(D),D),(0,a.Z)(n,"".concat(T,"-rtl"),"rtl"===s),n),p);return i.createElement("div",(0,l.Z)({},function(e){return Object.keys(e).reduce((function(t,n){return"data-"!==n.substr(0,5)&&"aria-"!==n.substr(0,5)&&"role"!==n||"data-__"===n.substr(0,7)||(t[n]=e[n]),t}),{})}(e),{className:S,style:b,onMouseEnter:C,onMouseLeave:N,id:I,ref:t}),k)}())})),I=i.memo(b),C=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n},N=function(e,t){var n=i.useContext(x),a=i.useContext(c.E_).getPrefixCls,r=e.prefixCls,s=C(e,["prefixCls"]),o=a("radio-button",r);return n&&(s.checked=e.value===n.value,s.disabled=e.disabled||n.disabled),i.createElement(g,(0,l.Z)({prefixCls:o},s,{type:"radio",ref:t}))},w=i.forwardRef(N),T=g;T.Button=w,T.Group=I;var k=T},28083:function(e,t,n){var a=n(87462),l=n(4942),i=n(45987),r=n(1413),s=n(15671),o=n(43144),d=n(60136),c=n(54062),u=n(72791),p=n(81694),x=n.n(p),h=function(e){(0,d.Z)(n,e);var t=(0,c.Z)(n);function n(e){var a;(0,s.Z)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=a.props,n=t.disabled,l=t.onChange;n||("checked"in a.props||a.setState({checked:e.target.checked}),l&&l({target:(0,r.Z)((0,r.Z)({},a.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var l="checked"in e?e.checked:e.defaultChecked;return a.state={checked:l},a}return(0,o.Z)(n,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,r=t.className,s=t.style,o=t.name,d=t.id,c=t.type,p=t.disabled,h=t.readOnly,f=t.tabIndex,m=t.onClick,y=t.onFocus,g=t.onBlur,Z=t.onKeyDown,v=t.onKeyPress,j=t.onKeyUp,b=t.autoFocus,I=t.value,C=t.required,N=(0,i.Z)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),w=Object.keys(N).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=N[t]),e}),{}),T=this.state.checked,k=x()(n,r,(e={},(0,l.Z)(e,"".concat(n,"-checked"),T),(0,l.Z)(e,"".concat(n,"-disabled"),p),e));return u.createElement("span",{className:k,style:s},u.createElement("input",(0,a.Z)({name:o,id:d,type:c,required:C,readOnly:h,disabled:p,tabIndex:f,className:"".concat(n,"-input"),checked:!!T,onClick:m,onFocus:y,onBlur:g,onKeyUp:j,onKeyDown:Z,onKeyPress:v,onChange:this.handleChange,autoFocus:b,ref:this.saveInput,value:I},w)),u.createElement("span",{className:"".concat(n,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?(0,r.Z)((0,r.Z)({},t),{},{checked:e.checked}):null}}]),n}(u.Component);h.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}},t.Z=h}}]);
//# sourceMappingURL=115.0167e180.chunk.js.map