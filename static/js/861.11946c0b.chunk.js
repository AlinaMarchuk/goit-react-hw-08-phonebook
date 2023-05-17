"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[861],{6861:function(e,r,t){t.r(r),t.d(r,{default:function(){return re}});var n=t(2791),a=t(9434),i=t(5527),s=t(4554),o=t(1582),c=t(4676),l=t(6151),u=function(e){return e.contacts.items},d=function(e){return e.filter},m=function(e){return e.contacts.isLoading},v=t(7734),h=t(3329),f=function(){var e=(0,a.v9)(u),r=(0,a.I0)();return(0,h.jsx)(i.Z,{elevation:3,sx:{p:2,mt:5},children:(0,h.jsx)(s.Z,{onSubmit:function(t){t.preventDefault();var n=t.currentTarget.elements.name.value,a=t.currentTarget.elements.number.value,i={name:n,number:a};e.some((function(e){return n===e.name}))?alert("".concat(n," is already in contacts.")):r((0,v.Vn)(i)),t.currentTarget.elements.name.value="",t.currentTarget.elements.number.value=""},component:"form",autoComplete:"off",children:(0,h.jsxs)(o.Z,{direction:"column",spacing:3,children:[(0,h.jsx)(c.Z,{fullWidth:!0,required:!0,id:"standard-basic",label:"Name",variant:"standard",type:"text",name:"name"}),(0,h.jsx)(c.Z,{fullWidth:!0,required:!0,id:"standard-basic",label:"Number",variant:"standard",type:"tel",name:"number"}),(0,h.jsx)(l.Z,{variant:"contained",type:"submit",sx:{m:1,width:150},children:"Add contact"})]})})})},x=t(168),p=t(3366),Z=t(7462),k=t(8182),g=t(4419),b=t(2554),j=t(4036),S=t(1402),y=t(6934),C=t(5878),w=t(1217);function _(e){return(0,w.Z)("MuiCircularProgress",e)}(0,C.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var P,M,N,D,z,I,F,L,R=["className","color","disableShrink","size","style","thickness","value","variant"],V=44,H=(0,b.F4)(z||(z=P||(P=(0,x.Z)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])))),T=(0,b.F4)(I||(I=M||(M=(0,x.Z)(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"])))),W=(0,y.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState;return[r.root,r[t.variant],r["color".concat((0,j.Z)(t.color))]]}})((function(e){var r=e.ownerState,t=e.theme;return(0,Z.Z)({display:"inline-block"},"determinate"===r.variant&&{transition:t.transitions.create("transform")},"inherit"!==r.color&&{color:(t.vars||t).palette[r.color].main})}),(function(e){return"indeterminate"===e.ownerState.variant&&(0,b.iv)(F||(F=N||(N=(0,x.Z)(["\n      animation: "," 1.4s linear infinite;\n    "]))),H)})),q=(0,y.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:function(e,r){return r.svg}})({display:"block"}),A=(0,y.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:function(e,r){var t=e.ownerState;return[r.circle,r["circle".concat((0,j.Z)(t.variant))],t.disableShrink&&r.circleDisableShrink]}})((function(e){var r=e.ownerState,t=e.theme;return(0,Z.Z)({stroke:"currentColor"},"determinate"===r.variant&&{transition:t.transitions.create("stroke-dashoffset")},"indeterminate"===r.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(function(e){var r=e.ownerState;return"indeterminate"===r.variant&&!r.disableShrink&&(0,b.iv)(L||(L=D||(D=(0,x.Z)(["\n      animation: "," 1.4s ease-in-out infinite;\n    "]))),T)})),E=n.forwardRef((function(e,r){var t=(0,S.Z)({props:e,name:"MuiCircularProgress"}),n=t.className,a=t.color,i=void 0===a?"primary":a,s=t.disableShrink,o=void 0!==s&&s,c=t.size,l=void 0===c?40:c,u=t.style,d=t.thickness,m=void 0===d?3.6:d,v=t.value,f=void 0===v?0:v,x=t.variant,b=void 0===x?"indeterminate":x,y=(0,p.Z)(t,R),C=(0,Z.Z)({},t,{color:i,disableShrink:o,size:l,thickness:m,value:f,variant:b}),w=function(e){var r=e.classes,t=e.variant,n=e.color,a=e.disableShrink,i={root:["root",t,"color".concat((0,j.Z)(n))],svg:["svg"],circle:["circle","circle".concat((0,j.Z)(t)),a&&"circleDisableShrink"]};return(0,g.Z)(i,_,r)}(C),P={},M={},N={};if("determinate"===b){var D=2*Math.PI*((V-m)/2);P.strokeDasharray=D.toFixed(3),N["aria-valuenow"]=Math.round(f),P.strokeDashoffset="".concat(((100-f)/100*D).toFixed(3),"px"),M.transform="rotate(-90deg)"}return(0,h.jsx)(W,(0,Z.Z)({className:(0,k.Z)(w.root,n),style:(0,Z.Z)({width:l,height:l},M,u),ownerState:C,ref:r,role:"progressbar"},N,y,{children:(0,h.jsx)(q,{className:w.svg,ownerState:C,viewBox:"".concat(22," ").concat(22," ").concat(V," ").concat(V),children:(0,h.jsx)(A,{className:w.circle,style:P,ownerState:C,cx:V,cy:V,r:(V-m)/2,fill:"none",strokeWidth:m})})}))})),O=t(7247),Y="ContactsList_list__mmE3Y",B="ContactsList_p__r93cN",G="ContactsList_item__6gc1x",J=function(){var e=(0,a.v9)(u),r=(0,a.v9)(d),t=(0,a.v9)(m),i=(0,a.I0)();return(0,n.useEffect)((function(){i((0,v.g6)())}),[i]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("ul",{className:Y,children:0!==e.length&&(r?e.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())})):e).map((function(e){var r=e.id,t=e.name,n=e.number;return(0,h.jsxs)("li",{className:G,children:[(0,h.jsxs)("p",{className:B,children:[t,": ",n]}),(0,h.jsx)(l.Z,{size:"small",variant:"outlined",startIcon:(0,h.jsx)(O.Z,{}),type:"button",onClick:function(){return i((0,v.e4)(r))},children:"Delete"})]},r)}))}),t&&(0,h.jsx)(E,{})]})},K=t(6126),Q=t(8),U=t(4808),X=function(){var e=(0,a.I0)();return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(c.Z,{InputProps:{startAdornment:(0,h.jsx)(K.Z,{position:"start",children:(0,h.jsx)(Q.Z,{})})},onChange:function(r){return e((0,U.T)(r))},fullWidth:!0,id:"input-with-icon-textfield",placeholder:"Search by name",type:"text",variant:"standard",name:"filter"})})},$="ContactsPage_wrapper__HYOyv",ee="ContactsPage_title__P3MkR",re=function(){return(0,h.jsxs)("div",{className:$,children:[(0,h.jsx)(f,{}),(0,h.jsx)("h2",{className:ee,children:"Contacts"}),(0,h.jsx)(X,{}),(0,h.jsx)(J,{})]})}},8:function(e,r,t){var n=t(4836);r.Z=void 0;var a=n(t(5649)),i=t(3329),s=(0,a.default)([(0,i.jsx)("path",{d:"M5 5h2v3h10V5h2v5h2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v-2H5V5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"},"0"),(0,i.jsx)("path",{d:"M20.3 18.9c.4-.7.7-1.5.7-2.4 0-2.5-2-4.5-4.5-4.5S12 14 12 16.5s2 4.5 4.5 4.5c.9 0 1.7-.3 2.4-.7l2.7 2.7 1.4-1.4-2.7-2.7zm-3.8.1c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z"},"1")],"ContentPasteSearchOutlined");r.Z=s},7247:function(e,r,t){var n=t(4836);r.Z=void 0;var a=n(t(5649)),i=t(3329),s=(0,a.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");r.Z=s}}]);
//# sourceMappingURL=861.11946c0b.chunk.js.map