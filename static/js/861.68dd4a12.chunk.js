"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[861],{6861:function(e,t,r){r.r(t),r.d(t,{default:function(){return te}});var n=r(2791),a=r(9434),i=r(5527),s=r(4554),o=r(1582),c=r(4676),l=r(6151),u=function(e){return e.contacts.items},d=function(e){return e.filter},v=function(e){return e.contacts.isLoading},m=r(7734),h=r(3329),f=function(){var e=(0,a.v9)(u),t=(0,a.I0)();return(0,h.jsx)(i.Z,{elevation:3,sx:{p:2,mt:5},children:(0,h.jsx)(s.Z,{onSubmit:function(r){r.preventDefault();var n=r.currentTarget.elements.name.value,a=r.currentTarget.elements.number.value,i={name:n,phone:a};e.some((function(e){return n===e.name}))?alert("".concat(n," is already in contacts.")):t((0,m.Vn)(i)),r.currentTarget.elements.name.value="",r.currentTarget.elements.number.value=""},component:"form",autoComplete:"off",children:(0,h.jsxs)(o.Z,{direction:"column",spacing:3,children:[(0,h.jsx)(c.Z,{fullWidth:!0,required:!0,id:"standard-basic",label:"Name",variant:"standard",type:"text",name:"name"}),(0,h.jsx)(c.Z,{fullWidth:!0,required:!0,id:"standard-basic",label:"Number",variant:"standard",type:"tel",name:"number"}),(0,h.jsx)(l.Z,{variant:"contained",type:"submit",sx:{m:1,width:150},children:"Add contact"})]})})})},p=r(168),x=r(3366),Z=r(7462),k=r(8182),g=r(4419),j=r(2554),b=r(4036),S=r(1402),y=r(6934),C=r(5878),w=r(1217);function _(e){return(0,w.Z)("MuiCircularProgress",e)}(0,C.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var P,M,N,D,z,I,F,L,R=["className","color","disableShrink","size","style","thickness","value","variant"],V=44,H=(0,j.F4)(z||(z=P||(P=(0,p.Z)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])))),T=(0,j.F4)(I||(I=M||(M=(0,p.Z)(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"])))),W=(0,y.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t[r.variant],t["color".concat((0,b.Z)(r.color))]]}})((function(e){var t=e.ownerState,r=e.theme;return(0,Z.Z)({display:"inline-block"},"determinate"===t.variant&&{transition:r.transitions.create("transform")},"inherit"!==t.color&&{color:(r.vars||r).palette[t.color].main})}),(function(e){return"indeterminate"===e.ownerState.variant&&(0,j.iv)(F||(F=N||(N=(0,p.Z)(["\n      animation: "," 1.4s linear infinite;\n    "]))),H)})),q=(0,y.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:function(e,t){return t.svg}})({display:"block"}),A=(0,y.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:function(e,t){var r=e.ownerState;return[t.circle,t["circle".concat((0,b.Z)(r.variant))],r.disableShrink&&t.circleDisableShrink]}})((function(e){var t=e.ownerState,r=e.theme;return(0,Z.Z)({stroke:"currentColor"},"determinate"===t.variant&&{transition:r.transitions.create("stroke-dashoffset")},"indeterminate"===t.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(function(e){var t=e.ownerState;return"indeterminate"===t.variant&&!t.disableShrink&&(0,j.iv)(L||(L=D||(D=(0,p.Z)(["\n      animation: "," 1.4s ease-in-out infinite;\n    "]))),T)})),E=n.forwardRef((function(e,t){var r=(0,S.Z)({props:e,name:"MuiCircularProgress"}),n=r.className,a=r.color,i=void 0===a?"primary":a,s=r.disableShrink,o=void 0!==s&&s,c=r.size,l=void 0===c?40:c,u=r.style,d=r.thickness,v=void 0===d?3.6:d,m=r.value,f=void 0===m?0:m,p=r.variant,j=void 0===p?"indeterminate":p,y=(0,x.Z)(r,R),C=(0,Z.Z)({},r,{color:i,disableShrink:o,size:l,thickness:v,value:f,variant:j}),w=function(e){var t=e.classes,r=e.variant,n=e.color,a=e.disableShrink,i={root:["root",r,"color".concat((0,b.Z)(n))],svg:["svg"],circle:["circle","circle".concat((0,b.Z)(r)),a&&"circleDisableShrink"]};return(0,g.Z)(i,_,t)}(C),P={},M={},N={};if("determinate"===j){var D=2*Math.PI*((V-v)/2);P.strokeDasharray=D.toFixed(3),N["aria-valuenow"]=Math.round(f),P.strokeDashoffset="".concat(((100-f)/100*D).toFixed(3),"px"),M.transform="rotate(-90deg)"}return(0,h.jsx)(W,(0,Z.Z)({className:(0,k.Z)(w.root,n),style:(0,Z.Z)({width:l,height:l},M,u),ownerState:C,ref:t,role:"progressbar"},N,y,{children:(0,h.jsx)(q,{className:w.svg,ownerState:C,viewBox:"".concat(22," ").concat(22," ").concat(V," ").concat(V),children:(0,h.jsx)(A,{className:w.circle,style:P,ownerState:C,cx:V,cy:V,r:(V-v)/2,fill:"none",strokeWidth:v})})}))})),O=r(7247),Y="ContactsList_list__mmE3Y",B="ContactsList_p__r93cN",G="ContactsList_item__6gc1x",J=function(){var e=(0,a.v9)(u),t=(0,a.v9)(d),r=(0,a.v9)(v),i=(0,a.I0)();return(0,n.useEffect)((function(){i((0,m.g6)())}),[i]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("ul",{className:Y,children:0!==e.length&&(t?e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})):e).map((function(e){var t=e.id,r=e.name,n=e.phone;return(0,h.jsxs)("li",{className:G,children:[(0,h.jsxs)("p",{className:B,children:[r,": ",n]}),(0,h.jsx)(l.Z,{size:"small",variant:"outlined",startIcon:(0,h.jsx)(O.Z,{}),type:"button",onClick:function(){return i((0,m.e4)(t))},children:"Delete"})]},t)}))}),r&&(0,h.jsx)(E,{})]})},K=r(6126),Q=r(8),U=r(4808),X=function(){var e=(0,a.I0)();return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(c.Z,{InputProps:{startAdornment:(0,h.jsx)(K.Z,{position:"start",children:(0,h.jsx)(Q.Z,{})})},onChange:function(t){return e((0,U.T)(t))},fullWidth:!0,id:"input-with-icon-textfield",placeholder:"Search by name",type:"text",variant:"standard",name:"filter"})})},$="ContactsPage_wrapper__HYOyv",ee="ContactsPage_title__P3MkR",te=function(){return(0,h.jsxs)("div",{className:$,children:[(0,h.jsx)(f,{}),(0,h.jsx)("h2",{className:ee,children:"Contacts"}),(0,h.jsx)(X,{}),(0,h.jsx)(J,{})]})}},8:function(e,t,r){var n=r(4836);t.Z=void 0;var a=n(r(5649)),i=r(3329),s=(0,a.default)([(0,i.jsx)("path",{d:"M5 5h2v3h10V5h2v5h2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v-2H5V5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"},"0"),(0,i.jsx)("path",{d:"M20.3 18.9c.4-.7.7-1.5.7-2.4 0-2.5-2-4.5-4.5-4.5S12 14 12 16.5s2 4.5 4.5 4.5c.9 0 1.7-.3 2.4-.7l2.7 2.7 1.4-1.4-2.7-2.7zm-3.8.1c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z"},"1")],"ContentPasteSearchOutlined");t.Z=s},7247:function(e,t,r){var n=r(4836);t.Z=void 0;var a=n(r(5649)),i=r(3329),s=(0,a.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=s}}]);
//# sourceMappingURL=861.68dd4a12.chunk.js.map