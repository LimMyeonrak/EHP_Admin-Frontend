"use strict";(self.webpackChunkaimmed_web=self.webpackChunkaimmed_web||[]).push([[257],{28708:function(e,n,t){var a=t(29439),r=t(85589),o=t(66106),s=t(52425),l=t(30914),c=t(73231),i=t(9040),u=t(36076),d=t(72426),p=t.n(d),f=t(72791),h=t(69305),m=t(80184);n.Z=function(e){e.mode;var n=e.form,t=e.content,d=e.setContent,v=(e.uploadFiles,e.setUploadFiles,e.boadrFiles,e.setBoadrFiles,e.onClickDownLoad,e.setIsChaged),b=e.userInfo,y=(0,f.useState)(!1),x=(0,a.Z)(y,2);x[0],x[1];return(0,f.useEffect)((function(){return v(!1),function(){}}),[]),(0,m.jsx)(r.Z,{layout:"horizontal",form:n,onChange:function(){v(!0)},children:(0,m.jsxs)(o.Z,{className:"content__contentbox__table",children:[(0,m.jsx)(r.Z.Item,{labelCol:{span:0},wrapperCol:{span:0},name:"articleIdx",hidden:!0,label:"",initialValue:null,children:(0,m.jsx)(s.Z,{})}),(0,m.jsx)(l.Z,{className:"label",span:4,children:"\ub178\ucd9c\uc5ec\ubd80"}),(0,m.jsx)(l.Z,{className:"data",span:20,children:(0,m.jsx)(r.Z.Item,{labelCol:{span:0},wrapperCol:{span:10},name:"isUse",label:"",initialValue:1,children:(0,m.jsx)(c.ZP.Group,{options:h.D2})})}),(0,m.jsx)(l.Z,{className:"label required",span:4,children:"\uc81c\ubaa9"}),(0,m.jsx)(l.Z,{className:"data",span:20,children:(0,m.jsx)(r.Z.Item,{labelCol:{span:0},wrapperCol:{span:24},name:"title",label:"",rules:[{required:!0,message:"\uc81c\ubaa9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."}],children:(0,m.jsx)(s.Z,{})})}),(0,m.jsx)(l.Z,{className:"label required",span:4,children:"\ub2f5\ubcc0"}),(0,m.jsxs)(l.Z,{className:"data",span:20,children:[(0,m.jsx)(i.ML,{value:t,height:350,onChange:function(e){t!==e&&(n.setFieldsValue({content:e}),d(e),v(!0))}}),(0,m.jsx)(r.Z.Item,{labelCol:{span:0},wrapperCol:{span:24},name:"content",label:"",style:{marginTop:"-32px"},rules:[{required:!0,message:"\ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."}],children:(0,m.jsx)(s.Z,{hidden:!0,style:{height:"0px"}})})]}),(0,m.jsx)(l.Z,{className:"label",span:4,children:"\ub4f1\ub85d\uc790/\uc77c\uc2dc"}),(0,m.jsx)(l.Z,{className:"data",span:8,children:b?"".concat((0,u.$t)(b.name)," ").concat((0,u.$t)(p()().format("YYYY-MM-DD HH:mm:ss"))):"".concat((0,u.$t)(n.getFieldValue("registerName"))," ").concat((0,u.$t)(n.getFieldValue("registDate")))}),(0,m.jsx)(l.Z,{className:"label",span:4,children:"\ucd5c\uc885\uc218\uc815\uc790/\uc77c\uc2dc"}),(0,m.jsx)(l.Z,{className:"data",span:8,children:"".concat((0,u.$t)(n.getFieldValue("updaterName"))," ").concat((0,u.$t)(n.getFieldValue("updateDate")))})]})})}},92257:function(e,n,t){t.r(n),t.d(n,{default:function(){return y}});var a=t(72791),r=t(1413),o=t(29439),s=t(35014),l=t(30326),c=t(85589),i=t(42470),u=t(66106),d=t(87309),p=t(37644),f=t(79271),h=t(29351),m=t(28708),v=t(80184),b=function(){var e=(0,a.useState)([]),n=(0,o.Z)(e,2),t=(n[0],n[1],(0,l.Z)().userInfo),b=(0,a.useState)(),y=(0,o.Z)(b,2),x=y[0],Z=y[1],C=(0,a.useState)(!1),g=(0,o.Z)(C,2),k=g[0],j=g[1],N=(0,f.k6)(),w=c.Z.useForm(),F=(0,o.Z)(w,1)[0],E=(0,a.useState)([]),O=(0,o.Z)(E,2),_=O[0],I=O[1],P=(0,h.Z)().setLoading;(0,a.useEffect)((function(){return function(){F.resetFields(),Z(""),j(!1),I([])}}),[]);return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("section",{className:"page_content",children:[(0,v.jsxs)(i.Z,{className:"title-navi__navi",children:[(0,v.jsx)(i.Z.Item,{className:"title-navi__navi__home",children:"FAQ"}),(0,v.jsx)(i.Z.Item,{className:"title-navi__navi__parent",children:"FAQ \ub4f1\ub85d"})]}),(0,v.jsx)(m.Z,{form:F,content:x,uploadFiles:_,setUploadFiles:I,setContent:Z,setIsChaged:j,userInfo:t}),(0,v.jsxs)(u.Z,{justify:"center",children:[(0,v.jsx)(d.Z,{type:"primary",onClick:function(){k?s.Z.msg("104","",(function(){N.goBack()})):N.goBack()},children:"\uc774\uc804"}),(0,v.jsx)(d.Z,{type:"primary",onClick:function(e){F.validateFields().then((function(e){var n=(0,r.Z)((0,r.Z)({},e),{},{isTopFix:e.isTopFix?1:0}),t=new FormData;Object.keys(n).forEach((function(e){void 0!==n[e]&&null!==n[e]?t.append(e,n[e]):"articleIdx"===e&&t.append("articleIdx","")})),_&&_.forEach((function(e){t.append("files",e)})),P((0,p.AP)(t,(function(e){(null===e||void 0===e?void 0:e.message.indexOf("\uc131\uacf5"))>-1?N.push("/partner/notice/list"):s.Z.warn("\uc800\uc7a5\uc5d0 \uc2e4\ud328 \ud588\uc2b5\ub2c8\ub2e4.")})))}))},children:"\ub4f1\ub85d"})]})]})})},y=function(){return(0,v.jsx)(b,{})}},73231:function(e,n,t){t.d(n,{ZP:function(){return E}});var a=t(4942),r=t(87462),o=t(72791),s=t(28083),l=t(81694),c=t.n(l),i=t(88834),u=t(23785),d=o.createContext(null),p=d.Provider,f=d,h=t(14824),m=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t},v=function(e,n){var t,l=o.useContext(f),d=o.useContext(u.E_),p=d.getPrefixCls,v=d.direction,b=o.useRef(),y=(0,i.sQ)(n,b);o.useEffect((function(){(0,h.Z)(!("optionType"in e),"Radio","`optionType` is only support in Radio.Group.")}),[]);var x=e.prefixCls,Z=e.className,C=e.children,g=e.style,k=m(e,["prefixCls","className","children","style"]),j=p("radio",x),N=(0,r.Z)({},k);l&&(N.name=l.name,N.onChange=function(n){var t,a;null===(t=e.onChange)||void 0===t||t.call(e,n),null===(a=null===l||void 0===l?void 0:l.onChange)||void 0===a||a.call(l,n)},N.checked=e.value===l.value,N.disabled=e.disabled||l.disabled);var w=c()("".concat(j,"-wrapper"),(t={},(0,a.Z)(t,"".concat(j,"-wrapper-checked"),N.checked),(0,a.Z)(t,"".concat(j,"-wrapper-disabled"),N.disabled),(0,a.Z)(t,"".concat(j,"-wrapper-rtl"),"rtl"===v),t),Z);return o.createElement("label",{className:w,style:g,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},o.createElement(s.Z,(0,r.Z)({},N,{type:"radio",prefixCls:j,ref:y})),void 0!==C?o.createElement("span",null,C):null)},b=o.forwardRef(v);b.displayName="Radio";var y=b,x=t(29439),Z=t(75179),C=t(1815);var g=o.forwardRef((function(e,n){var t=o.useContext(u.E_),s=t.getPrefixCls,l=t.direction,i=o.useContext(C.Z),d=(0,Z.Z)(e.defaultValue,{value:e.value}),f=(0,x.Z)(d,2),h=f[0],m=f[1];return o.createElement(p,{value:{onChange:function(n){var t=h,a=n.target.value;"value"in e||m(a);var r=e.onChange;r&&a!==t&&r(n)},value:h,disabled:e.disabled,name:e.name}},function(){var t,u=e.prefixCls,d=e.className,p=void 0===d?"":d,f=e.options,m=e.optionType,v=e.buttonStyle,b=void 0===v?"outline":v,x=e.disabled,Z=e.children,C=e.size,g=e.style,k=e.id,j=e.onMouseEnter,N=e.onMouseLeave,w=s("radio",u),F="".concat(w,"-group"),E=Z;if(f&&f.length>0){var O="button"===m?"".concat(w,"-button"):w;E=f.map((function(e){return"string"===typeof e||"number"===typeof e?o.createElement(y,{key:e.toString(),prefixCls:O,disabled:x,value:e,checked:h===e},e):o.createElement(y,{key:"radio-group-value-options-".concat(e.value),prefixCls:O,disabled:e.disabled||x,value:e.value,checked:h===e.value,style:e.style},e.label)}))}var _=C||i,I=c()(F,"".concat(F,"-").concat(b),(t={},(0,a.Z)(t,"".concat(F,"-").concat(_),_),(0,a.Z)(t,"".concat(F,"-rtl"),"rtl"===l),t),p);return o.createElement("div",(0,r.Z)({},function(e){return Object.keys(e).reduce((function(n,t){return"data-"!==t.substr(0,5)&&"aria-"!==t.substr(0,5)&&"role"!==t||"data-__"===t.substr(0,7)||(n[t]=e[t]),n}),{})}(e),{className:I,style:g,onMouseEnter:j,onMouseLeave:N,id:k,ref:n}),E)}())})),k=o.memo(g),j=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t},N=function(e,n){var t=o.useContext(f),a=o.useContext(u.E_).getPrefixCls,s=e.prefixCls,l=j(e,["prefixCls"]),c=a("radio-button",s);return t&&(l.checked=e.value===t.value,l.disabled=e.disabled||t.disabled),o.createElement(y,(0,r.Z)({prefixCls:c},l,{type:"radio",ref:n}))},w=o.forwardRef(N),F=y;F.Button=w,F.Group=k;var E=F},28083:function(e,n,t){var a=t(87462),r=t(4942),o=t(45987),s=t(1413),l=t(15671),c=t(43144),i=t(60136),u=t(54062),d=t(72791),p=t(81694),f=t.n(p),h=function(e){(0,i.Z)(t,e);var n=(0,u.Z)(t);function t(e){var a;(0,l.Z)(this,t),(a=n.call(this,e)).handleChange=function(e){var n=a.props,t=n.disabled,r=n.onChange;t||("checked"in a.props||a.setState({checked:e.target.checked}),r&&r({target:(0,s.Z)((0,s.Z)({},a.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var r="checked"in e?e.checked:e.defaultChecked;return a.state={checked:r},a}return(0,c.Z)(t,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,n=this.props,t=n.prefixCls,s=n.className,l=n.style,c=n.name,i=n.id,u=n.type,p=n.disabled,h=n.readOnly,m=n.tabIndex,v=n.onClick,b=n.onFocus,y=n.onBlur,x=n.onKeyDown,Z=n.onKeyPress,C=n.onKeyUp,g=n.autoFocus,k=n.value,j=n.required,N=(0,o.Z)(n,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),w=Object.keys(N).reduce((function(e,n){return"aria-"!==n.substr(0,5)&&"data-"!==n.substr(0,5)&&"role"!==n||(e[n]=N[n]),e}),{}),F=this.state.checked,E=f()(t,s,(e={},(0,r.Z)(e,"".concat(t,"-checked"),F),(0,r.Z)(e,"".concat(t,"-disabled"),p),e));return d.createElement("span",{className:E,style:l},d.createElement("input",(0,a.Z)({name:c,id:i,type:u,required:j,readOnly:h,disabled:p,tabIndex:m,className:"".concat(t,"-input"),checked:!!F,onClick:v,onFocus:b,onBlur:y,onKeyUp:C,onKeyDown:x,onKeyPress:Z,onChange:this.handleChange,autoFocus:g,ref:this.saveInput,value:k},w)),d.createElement("span",{className:"".concat(t,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,n){return"checked"in e?(0,s.Z)((0,s.Z)({},n),{},{checked:e.checked}):null}}]),t}(d.Component);h.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}},n.Z=h}}]);
//# sourceMappingURL=257.249307cc.chunk.js.map