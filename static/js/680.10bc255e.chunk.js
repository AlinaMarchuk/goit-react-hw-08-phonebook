"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[680],{680:function(e,n,t){t.r(n);var r=t(1582),o=t(8619),i=t(3329);n.default=function(){return(0,i.jsxs)(r.Z,{direction:"row",justifyContent:"center",alignItems:"center",spacing:3,children:[(0,i.jsx)(o.Z,{color:"primary",fontSize:"large"}),(0,i.jsx)("h1",{children:"Contacts manager welcome page"})]})}},8619:function(e,n,t){var r=t(4836);n.Z=void 0;var o=r(t(5649)),i=t(3329),c=(0,o.default)((0,i.jsx)("path",{d:"M22 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zM8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1zm3.85-4h1.64L21 16l-1.99 1.99c-1.31-.98-2.28-2.38-2.73-3.99-.18-.64-.28-1.31-.28-2s.1-1.36.28-2c.45-1.62 1.42-3.01 2.73-3.99L21 8l-1.51 2h-1.64c-.22.63-.35 1.3-.35 2s.13 1.37.35 2z"}),"ContactPhone");n.Z=c},1582:function(e,n,t){t.d(n,{Z:function(){return S}});var r=t(4942),o=t(3366),i=t(7462),c=t(2791),a=t(8182),s=t(2466),u=t(4419),l=t(1217),p=(0,t(4046).ZP)(),f=t(7078),d=t(8519),v=t(5080),m=t(1184),h=t(5682),Z=t(3329),y=["component","direction","spacing","divider","children","className","useFlexGap"],k=(0,v.Z)(),g=p("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,n){return n.root}});function x(e){return(0,f.Z)({props:e,name:"MuiStack",defaultTheme:k})}function b(e,n){var t=c.Children.toArray(e).filter(Boolean);return t.reduce((function(e,r,o){return e.push(r),o<t.length-1&&e.push(c.cloneElement(n,{key:"separator-".concat(o)})),e}),[])}var P=function(e){var n=e.ownerState,t=e.theme,o=(0,i.Z)({display:"flex",flexDirection:"column"},(0,m.k9)({theme:t},(0,m.P$)({values:n.direction,breakpoints:t.breakpoints.values}),(function(e){return{flexDirection:e}})));if(n.spacing){var c=(0,h.hB)(t),a=Object.keys(t.breakpoints.values).reduce((function(e,t){return("object"===typeof n.spacing&&null!=n.spacing[t]||"object"===typeof n.direction&&null!=n.direction[t])&&(e[t]=!0),e}),{}),u=(0,m.P$)({values:n.direction,base:a}),l=(0,m.P$)({values:n.spacing,base:a});"object"===typeof u&&Object.keys(u).forEach((function(e,n,t){if(!u[e]){var r=n>0?u[t[n-1]]:"column";u[e]=r}}));o=(0,s.Z)(o,(0,m.k9)({theme:t},l,(function(e,t){return n.useFlexGap?{gap:(0,h.NA)(c,e)}:{"& > :not(style) + :not(style)":(0,r.Z)({margin:0},"margin".concat((o=t?u[t]:n.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[o])),(0,h.NA)(c,e))};var o})))}return o=(0,m.dt)(t.breakpoints,o)};var j=t(6934),w=t(1402),C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.createStyledComponent,t=void 0===n?g:n,r=e.useThemeProps,s=void 0===r?x:r,p=e.componentName,f=void 0===p?"MuiStack":p,v=function(){return(0,u.Z)({root:["root"]},(function(e){return(0,l.Z)(f,e)}),{})},m=t(P),h=c.forwardRef((function(e,n){var t=s(e),r=(0,d.Z)(t),c=r.component,u=void 0===c?"div":c,l=r.direction,p=void 0===l?"column":l,f=r.spacing,h=void 0===f?0:f,k=r.divider,g=r.children,x=r.className,P=r.useFlexGap,j=void 0!==P&&P,w=(0,o.Z)(r,y),C={direction:p,spacing:h,useFlexGap:j},S=v();return(0,Z.jsx)(m,(0,i.Z)({as:u,ownerState:C,ref:n,className:(0,a.Z)(S.root,x)},w,{children:k?b(g,k):g}))}));return h}({createStyledComponent:(0,j.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,n){return n.root}}),useThemeProps:function(e){return(0,w.Z)({props:e,name:"MuiStack"})}}),S=C},8519:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(3433),o=t(7462),i=t(3366),c=t(2466),a=t(7416),s=["sx"];function u(e){var n,t=e.sx,u=function(e){var n,t,r={systemProps:{},otherProps:{}},o=null!=(n=null==e||null==(t=e.theme)?void 0:t.unstable_sxConfig)?n:a.Z;return Object.keys(e).forEach((function(n){o[n]?r.systemProps[n]=e[n]:r.otherProps[n]=e[n]})),r}((0,i.Z)(e,s)),l=u.systemProps,p=u.otherProps;return n=Array.isArray(t)?[l].concat((0,r.Z)(t)):"function"===typeof t?function(){var e=t.apply(void 0,arguments);return(0,c.P)(e)?(0,o.Z)({},l,e):l}:(0,o.Z)({},l,t),(0,o.Z)({},p,{sx:n})}}}]);
//# sourceMappingURL=680.10bc255e.chunk.js.map