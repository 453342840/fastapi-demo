import{c as b,aA as v,f as d,n as c,d as g,g as k,s as w,bK as y,p as $,y as C,h as u,aw as M,aU as l,aV as m,aW as h,aX as p}from"./index-cbb60d43.js";const z=b("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[v("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[v("no-title",`
 display: flex;
 align-items: center;
 `)]),d("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),c("title-position-left",[d("line",[c("left",{width:"28px"})])]),c("title-position-right",[d("line",[c("right",{width:"28px"})])]),c("dashed",[d("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),c("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),d("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),v("dashed",[d("line",{backgroundColor:"var(--n-color)"})]),c("dashed",[d("line",{borderColor:"var(--n-color)"})]),c("vertical",{backgroundColor:"var(--n-color)"})]),B=Object.assign(Object.assign({},w.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),Q=g({name:"Divider",props:B,setup(n){const{mergedClsPrefixRef:i,inlineThemeDisabled:s}=k(n),t=w("Divider","-divider",z,y,n,i),a=$(()=>{const{common:{cubicBezierEaseInOut:e},self:{color:r,textColor:_,fontWeight:f}}=t.value;return{"--n-bezier":e,"--n-color":r,"--n-text-color":_,"--n-font-weight":f}}),o=s?C("divider",void 0,a,n):void 0;return{mergedClsPrefix:i,cssVars:s?void 0:a,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var n;const{$slots:i,titlePlacement:s,vertical:t,dashed:a,cssVars:o,mergedClsPrefix:e}=this;return(n=this.onRender)===null||n===void 0||n.call(this),u("div",{role:"separator",class:[`${e}-divider`,this.themeClass,{[`${e}-divider--vertical`]:t,[`${e}-divider--no-title`]:!i.default,[`${e}-divider--dashed`]:a,[`${e}-divider--title-position-${s}`]:i.default&&s}],style:o},t?null:u("div",{class:`${e}-divider__line ${e}-divider__line--left`}),!t&&i.default?u(M,null,u("div",{class:`${e}-divider__title`},this.$slots),u("div",{class:`${e}-divider__line ${e}-divider__line--right`})):null)}}),P={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},V=h("path",{fill:"currentColor",d:"M2 12a10 10 0 0 0 13 9.54a10 10 0 0 1 0-19.08A10 10 0 0 0 2 12Z"},null,-1),R=[V];function A(n,i){return l(),m("svg",P,R)}const E={name:"mdi-moon-waning-crescent",render:A},T={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},D=h("path",{fill:"currentColor",d:"m3.55 19.09l1.41 1.41l1.8-1.79l-1.42-1.42M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6c0-3.32-2.69-6-6-6m8 7h3v-2h-3m-2.76 7.71l1.8 1.79l1.41-1.41l-1.79-1.8M20.45 5l-1.41-1.4l-1.8 1.79l1.42 1.42M13 1h-2v3h2M6.76 5.39L4.96 3.6L3.55 5l1.79 1.81l1.42-1.42M1 13h3v-2H1m12 9h-2v3h2"},null,-1),H=[D];function L(n,i){return l(),m("svg",T,H)}const S={name:"mdi-white-balance-sunny",render:L},O={class:"inline-block",width:"1em",height:"1em",viewBox:"0 0 160 160",xmlns:"http://www.w3.org/2000/svg"},W=h("path",{d:"M81.28 55.9c-.1-11.67-2.93-22.55-9.37-32.38-1-1.5-2.14-2.86-2.5-4.71a8.1 8.1 0 014-8.61 7.89 7.89 0 019.3 1.23 35.999 35.999 0 015.9 8.83 75.18 75.18 0 018.44 28.58 83.211 83.211 0 01-5.23 36.74 102.983 102.983 0 01-3 7.28 1.2 1.2 0 000 1.41c9.58 13.3 21.76 23 37.85 27.24a54.37 54.37 0 0019.68 1.57 7.72 7.72 0 018.36 6.9 7.903 7.903 0 01-6.7 9 64.744 64.744 0 01-23-1.33 77.68 77.68 0 01-36.93-19.88 93.628 93.628 0 01-11.91-13.71 2.18 2.18 0 00-2.3-1.06 72.744 72.744 0 00-27.38 7.55c-11.6 6-20.67 14.58-26.4 26.45a10.134 10.134 0 01-3.7 4.7 8 8 0 01-9.19-.7 7.86 7.86 0 01-2.36-9.28 60.324 60.324 0 018.72-14.52c12.2-15.43 28.21-24.59 47.32-28.57A85.085 85.085 0 0173.07 87c.524.015 1-.307 1.18-.8a76.06 76.06 0 006.53-22.3c.351-2.652.518-5.325.5-8z",fill:"currentColor"},null,-1),j=h("path",{d:"M136.26 108.34a44.742 44.742 0 01-11.13-2.87 46.108 46.108 0 01-19.66-13.76 8 8 0 015.72-13.22 7.93 7.93 0 016.54 2.93 33.27 33.27 0 0018.87 10.75c1.546.155 3.058.553 4.48 1.18a8.08 8.08 0 013.84 9.21c-.92 3.52-4.13 5.81-8.66 5.78zm-80.6-75.02a7.61 7.61 0 016.64 5 49.139 49.139 0 013.64 17 46.33 46.33 0 01-2.46 17.28c-2 5.77-8.24 7.79-12.89 4.15a8.1 8.1 0 01-2.39-9 31.679 31.679 0 001.68-12.36 35.77 35.77 0 00-2.43-11c-2.1-5.45 1.75-11.07 8.21-11.07zm22.26 93.25a8 8 0 01-6.68 7.86 32.88 32.88 0 00-19.7 12.19 8.13 8.13 0 01-11.21 1.62 8 8 0 01-1.41-11.58A51.043 51.043 0 0154 123.81a45.842 45.842 0 0114-5.1c5.35-1.04 9.91 2.56 9.92 7.86z",fill:"currentColor"},null,-1),N=[W,j];function X(n,i){return l(),m("svg",O,N)}const F={name:"local-logo",render:X},I={class:"inline-block",width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg"},K=h("path",{d:"M0 0h160v160H0V0z",fill:"currentColor"},null,-1),U=h("path",{d:"M94.322 51.888A69.12 69.12 0 0187.806 80.9a1.732 1.732 0 00.191 2.014c6.124 8.338 13.677 14.894 23.356 18.821a46.564 46.564 0 0017.273 3.414 29.101 29.101 0 003.364-.252 6.245 6.245 0 017.051 5.156 6.112 6.112 0 01-5.187 7.19 50.758 50.758 0 01-18.19-1.007c-15.964-3.686-28.2-12.84-37.709-25.88a2.165 2.165 0 00-2.246-1.098c-14.1 1.38-26.357 6.475-35.754 17.331a38.721 38.721 0 00-6.275 9.808 6.255 6.255 0 01-8.229 3.444 6.184 6.184 0 01-3.293-8.258 49.662 49.662 0 019.699-14.722c10.636-11.52 23.97-17.663 39.37-19.677a14.06 14.06 0 012.86-.342c1.622.14 2.197-.735 2.75-2.014a54.752 54.752 0 004.865-23.463 44.302 44.302 0 00-8.057-25.175 6.152 6.152 0 01-.655-6.506 6.043 6.043 0 015.318-3.564 6.386 6.386 0 015.7 3.02 53.98 53.98 0 017.222 14.38 59.734 59.734 0 013.092 18.368z",fill:"#fff"},null,-1),Y=h("path",{d:"M47.257 119.468a6.04 6.04 0 011.36-3.907 38.165 38.165 0 0122.66-14.098 6.124 6.124 0 016.699 2.487 6.223 6.223 0 01-3.868 9.698 26.276 26.276 0 00-15.823 9.838 6.245 6.245 0 01-11.028-4.028v.01zm77.935-26.01a34.908 34.908 0 01-9.89-2.498 35.717 35.717 0 01-14.756-10.523 6.233 6.233 0 012.861-10 5.832 5.832 0 016.486 1.742 26.986 26.986 0 0016.628 8.912 6.042 6.042 0 015.036 5.58 6.253 6.253 0 01-4.32 6.504 6.588 6.588 0 01-2.045.282zM69.817 53.65a33.69 33.69 0 01-2.286 12.607 6.255 6.255 0 01-11.018 1.007 6.132 6.132 0 01-.655-5.438 26.178 26.178 0 00-.534-18.377 6.256 6.256 0 0111.572-4.753 40.515 40.515 0 012.921 14.954z",fill:"#fff"},null,-1),Z=[K,U,Y];function q(n,i){return l(),m("svg",I,Z)}const G={name:"local-logo-fill",render:q},e1=g({name:"SystemLogo",__name:"system-logo",props:{fill:{type:Boolean,default:!1}},setup(n){return(i,s)=>{const t=G,a=F;return i.fill?(l(),p(t,{key:0})):(l(),p(a,{key:1}))}}}),t1=g({name:"DarkModeSwitch",__name:"dark-mode-switch",props:{dark:{type:Boolean,default:!1}},emits:["update:dark"],setup(n,{emit:i}){const s=n,t=$({get(){return s.dark},set(o){i("update:dark",o)}});function a(o){const e=o.clientX,r=o.clientY,_=Math.hypot(Math.max(e,innerWidth-e),Math.max(r,innerHeight-r));if(!document.startViewTransition){t.value=!t.value;return}document.startViewTransition(()=>{t.value=!t.value}).ready.then(()=>{const x=[`circle(0px at ${e}px ${r}px)`,`circle(${_}px at ${e}px ${r}px)`];document.documentElement.animate({clipPath:t.value?x:[...x].reverse()},{duration:300,easing:"ease-in",pseudoElement:t.value?"::view-transition-new(root)":"::view-transition-old(root)"})})}return(o,e)=>{const r=E,_=S;return l(),m("div",{class:"flex-center text-18px cursor-pointer",onClick:a},[t.value?(l(),p(r,{key:0})):(l(),p(_,{key:1}))])}}});export{Q as _,S as a,E as b,e1 as c,t1 as d};
