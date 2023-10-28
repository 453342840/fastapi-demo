import{d as E,r as U,u as Jn,h as c,i as Qn,a as Dt,b as er,c as p,e as y,f as z,g as Ee,j as tr,k as po,l as or,m as Qo,n as P,w as rt,o as be,t as fe,p as A,q as nr,s as pe,v as Nt,x as en,y as it,z as vo,L as tn,T as Ot,A as mo,B as Lt,N as St,C as et,D as rr,E as Be,F as st,G as on,H as ar,I as _e,J as We,K as Pe,M as Ke,O as tt,P as Ve,Q as pt,R as ot,S as qe,U as vt,V as zt,W as no,X as ro,Y as ao,Z as lr,_ as bo,$ as ir,a0 as de,a1 as sr,a2 as at,a3 as nn,a4 as ee,a5 as je,a6 as go,a7 as rn,a8 as cr,a9 as dr,aa as ur,ab as hr,ac as Vt,ad as fr,ae as xo,af as jt,ag as pr,ah as vr,ai as mr,aj as br,ak as gr,al as an,am as ln,an as xr,ao as _r,ap as yr,aq as wr,ar as Cr,as as Ae,at as Ie,au as Eo,av as nt,aw as ae,ax as kr,ay as Xt,az as _o,aA as Qe,aB as zr,aC as Sr,aD as Do,aE as Gt,aF as Le,aG as Yt,aH as $r,aI as Rr,aJ as Br,aK as Mr,aL as Zt,aM as At,aN as Lo,aO as Ir,aP as Ar,aQ as Se,aR as ne,aS as Pr,aT as Tr,aU as C,aV as X,aW as W,aX as q,aY as R,aZ as s,a_ as ge,a$ as Te,b0 as mt,b1 as x,b2 as Me,b3 as lt,b4 as ze,b5 as Fr,b6 as Er,b7 as He,b8 as Dr,b9 as yo,ba as Lr,bb as sn,bc as Vr,bd as wo,be as ct,bf as Rt,bg as Bt,bh as Ht,bi as lo,bj as Co,bk as Hr,bl as Ur,bm as cn,bn as Vo,bo as ko,bp as Nr,bq as Or,br as jr,bs as Wr,bt as Kr,bu as dn,bv as qr,bw as Xr,bx as Gr,by as Yr}from"./index-cbb60d43.js";import{_ as bt,a as Zr,b as Jr,c as Qr,d as ea}from"./dark-mode-switch.vue_vue_type_script_setup_true_lang-3e6036f4.js";import{u as Fe,_ as un,a as hn,N as gt,b as ta}from"./use-loading-8513f1b7.js";import{C as oa,B as na,_ as ra}from"./index.vue_vue_type_script_setup_true_lang-d11f1a20.js";import{c as aa,a as Ho,u as io,V as la,b as ia,d as sa,_ as Wt,e as zo,f as ca,g as so,o as da,h as fn,i as pn,j as vn}from"./Grid-67008087.js";import{_ as dt}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as ua}from"./GradientText-b3c68e12.js";import{f as Ut}from"./format-length-c9d165c6.js";/* empty css                                                         */function ha(e){return e.nodeType===9?null:e.parentNode}function mn(e){if(e===null)return null;const t=ha(e);if(t===null)return null;if(t.nodeType===9)return document.documentElement;if(t.nodeType===1){const{overflow:o,overflowX:n,overflowY:r}=getComputedStyle(t);if(/(auto|scroll|overlay)/.test(o+r+n))return t}return mn(t)}function fa(e){return typeof e=="string"?document.querySelector(e):typeof e=="function"?e():e}function bn(e,t,o){t/=100,o/=100;const n=t*Math.min(o,1-o)+o;return[e,n?(2-2*o/n)*100:0,n*100]}function Et(e,t,o){t/=100,o/=100;const n=o-o*t/2,r=Math.min(n,1-n);return[e,r?(o-n)/r*100:0,n*100]}function Oe(e,t,o){t/=100,o/=100;let n=(r,a=(r+e/60)%6)=>o-o*t*Math.max(Math.min(a,4-a,1),0);return[n(5)*255,n(3)*255,n(1)*255]}function co(e,t,o){e/=255,t/=255,o/=255;let n=Math.max(e,t,o),r=n-Math.min(e,t,o),a=r&&(n==e?(t-o)/r:n==t?2+(o-e)/r:4+(e-t)/r);return[60*(a<0?a+6:a),n&&r/n*100,n*100]}function uo(e,t,o){e/=255,t/=255,o/=255;let n=Math.max(e,t,o),r=n-Math.min(e,t,o),a=1-Math.abs(n+n-r-1),l=r&&(n==e?(t-o)/r:n==t?2+(o-e)/r:4+(e-t)/r);return[60*(l<0?l+6:l),a?r/a*100:0,(n+n-r)*50]}function ho(e,t,o){t/=100,o/=100;let n=t*Math.min(o,1-o),r=(a,l=(a+e/30)%12)=>o-n*Math.max(Math.min(l-3,9-l,1),-1);return[r(0)*255,r(8)*255,r(4)*255]}const pa=Ho(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[Ho("&::-webkit-scrollbar",{width:0,height:0})]),va=E({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=U(null);function t(r){!(r.currentTarget.offsetWidth<r.currentTarget.scrollWidth)||r.deltaY===0||(r.currentTarget.scrollLeft+=r.deltaY+r.deltaX,r.preventDefault())}const o=Jn();return pa.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:aa,ssr:o}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...r){var a;(a=e.value)===null||a===void 0||a.scrollTo(...r)}})},render(){return c("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});function Uo(e){return e.nodeName==="#document"}var ma=/\s/;function ba(e){for(var t=e.length;t--&&ma.test(e.charAt(t)););return t}var ga=/^\s+/;function xa(e){return e&&e.slice(0,ba(e)+1).replace(ga,"")}var No=0/0,_a=/^[-+]0x[0-9a-f]+$/i,ya=/^0b[01]+$/i,wa=/^0o[0-7]+$/i,Ca=parseInt;function Oo(e){if(typeof e=="number")return e;if(Qn(e))return No;if(Dt(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Dt(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=xa(e);var o=ya.test(e);return o||wa.test(e)?Ca(e.slice(2),o?2:8):_a.test(e)?No:+e}var ka=function(){return er.Date.now()};const Jt=ka;var za="Expected a function",Sa=Math.max,$a=Math.min;function Ra(e,t,o){var n,r,a,l,i,u,v=0,g=!1,m=!1,f=!0;if(typeof e!="function")throw new TypeError(za);t=Oo(t)||0,Dt(o)&&(g=!!o.leading,m="maxWait"in o,a=m?Sa(Oo(o.maxWait)||0,t):a,f="trailing"in o?!!o.trailing:f);function k(B){var L=n,w=r;return n=r=void 0,v=B,l=e.apply(w,L),l}function I(B){return v=B,i=setTimeout(D,t),g?k(B):l}function T(B){var L=B-u,w=B-v,V=t-L;return m?$a(V,a-w):V}function F(B){var L=B-u,w=B-v;return u===void 0||L>=t||L<0||m&&w>=a}function D(){var B=Jt();if(F(B))return K(B);i=setTimeout(D,T(B))}function K(B){return i=void 0,f&&n?k(B):(n=r=void 0,l)}function H(){i!==void 0&&clearTimeout(i),v=0,n=u=r=i=void 0}function N(){return i===void 0?l:K(Jt())}function M(){var B=Jt(),L=F(B);if(n=arguments,r=this,u=B,L){if(i===void 0)return I(u);if(m)return clearTimeout(i),i=setTimeout(D,t),k(u)}return i===void 0&&(i=setTimeout(D,t)),l}return M.cancel=H,M.flush=N,M}var Ba="Expected a function";function Qt(e,t,o){var n=!0,r=!0;if(typeof e!="function")throw new TypeError(Ba);return Dt(o)&&(n="leading"in o?!!o.leading:n,r="trailing"in o?!!o.trailing:r),Ra(e,t,{leading:n,maxWait:t,trailing:r})}const gn=E({name:"Add",render(){return c("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c("path",{d:"M256 112V400M400 256H112",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}))}}),Ma=E({name:"Remove",render(){return c("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},c("line",{x1:"400",y1:"256",x2:"112",y2:"256",style:`
        fill: none;
        stroke: currentColor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      `}))}}),Ia=E({name:"ChevronDownFilled",render(){return c("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),Aa=p("input-group",`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[y(">",[p("input",[y("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),y("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),p("button",[y("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[z("state-border, border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),y("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[z("state-border, border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),y("*",[y("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[y(">",[p("input",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),p("base-selection",[p("base-selection-label",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),p("base-selection-tags",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),z("box-shadow, border, state-border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),y("&:not(:first-child)",`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[y(">",[p("input",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),p("base-selection",[p("base-selection-label",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),p("base-selection-tags",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),z("box-shadow, border, state-border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]),Pa={},Ta=E({name:"InputGroup",props:Pa,setup(e){const{mergedClsPrefixRef:t}=Ee(e);return tr("-input-group",Aa,t),{mergedClsPrefix:t}},render(){const{mergedClsPrefix:e}=this;return c("div",{class:`${e}-input-group`},this.$slots)}}),Fa=e=>{const{popoverColor:t,textColor2:o,primaryColorHover:n,primaryColorPressed:r}=e;return Object.assign(Object.assign({},or),{color:t,textColor:o,iconColor:o,iconColorHover:n,iconColorPressed:r,boxShadow:"0 2px 8px 0px rgba(0, 0, 0, .12)",boxShadowHover:"0 2px 12px 0px rgba(0, 0, 0, .18)",boxShadowPressed:"0 2px 12px 0px rgba(0, 0, 0, .18)"})},Ea={name:"BackTop",common:po,self:Fa},Da=Ea,La=c("svg",{viewBox:"0 0 24 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xlinkHref:"http://www.w3.org/1999/xlink"},c("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},c("g",{transform:"translate(-139.000000, -4423.000000)","fill-rule":"nonzero"},c("g",{transform:"translate(120.000000, 4285.000000)"},c("g",{transform:"translate(7.000000, 126.000000)"},c("g",{transform:"translate(24.000000, 24.000000) scale(1, -1) translate(-24.000000, -24.000000) translate(12.000000, 12.000000)"},c("g",{transform:"translate(4.000000, 2.000000)"},c("path",{d:"M8,0 C8.51283584,0 8.93550716,0.38604019 8.99327227,0.883378875 L9,1 L9,10.584 L12.2928932,7.29289322 C12.6834175,6.90236893 13.3165825,6.90236893 13.7071068,7.29289322 C14.0675907,7.65337718 14.0953203,8.22060824 13.7902954,8.61289944 L13.7071068,8.70710678 L8.70710678,13.7071068 L8.62544899,13.7803112 L8.618,13.784 L8.59530661,13.8036654 L8.4840621,13.8753288 L8.37133602,13.9287745 L8.22929083,13.9735893 L8.14346259,13.9897165 L8.03324678,13.9994506 L7.9137692,13.9962979 L7.77070917,13.9735893 L7.6583843,13.9401293 L7.57677845,13.9063266 L7.47929125,13.8540045 L7.4048407,13.8036865 L7.38131006,13.7856883 C7.35030318,13.7612383 7.32077858,13.7349921 7.29289322,13.7071068 L2.29289322,8.70710678 L2.20970461,8.61289944 C1.90467972,8.22060824 1.93240926,7.65337718 2.29289322,7.29289322 C2.65337718,6.93240926 3.22060824,6.90467972 3.61289944,7.20970461 L3.70710678,7.29289322 L7,10.585 L7,1 L7.00672773,0.883378875 C7.06449284,0.38604019 7.48716416,0 8,0 Z"}),c("path",{d:"M14.9333333,15.9994506 C15.5224371,15.9994506 16,16.4471659 16,16.9994506 C16,17.5122865 15.5882238,17.9349578 15.0577292,17.9927229 L14.9333333,17.9994506 L1.06666667,17.9994506 C0.477562934,17.9994506 0,17.5517354 0,16.9994506 C0,16.4866148 0.411776203,16.0639435 0.9422708,16.0061783 L1.06666667,15.9994506 L14.9333333,15.9994506 Z"})))))))),Va=p("back-top",`
 position: fixed;
 right: 40px;
 bottom: 40px;
 cursor: pointer;
 display: flex;
 align-items: center;
 justify-content: center;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 height: var(--n-height);
 min-width: var(--n-width);
 box-shadow: var(--n-box-shadow);
 background-color: var(--n-color);
`,[Qo(),P("transition-disabled",{transition:"none !important"}),p("base-icon",`
 font-size: var(--n-icon-size);
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),y("svg",{pointerEvents:"none"}),y("&:hover",{boxShadow:"var(--n-box-shadow-hover)"},[p("base-icon",{color:"var(--n-icon-color-hover)"})]),y("&:active",{boxShadow:"var(--n-box-shadow-pressed)"},[p("base-icon",{color:"var(--n-icon-color-pressed)"})])]),Ha=Object.assign(Object.assign({},pe.props),{show:{type:Boolean,default:void 0},right:{type:[Number,String],default:40},bottom:{type:[Number,String],default:40},to:{type:[String,Object],default:"body"},visibilityHeight:{type:Number,default:180},listenTo:[String,Object,Function],"onUpdate:show":{type:Function,default:()=>{}},target:Function,onShow:Function,onHide:Function}),Ua=E({name:"BackTop",inheritAttrs:!1,props:Ha,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Ee(e),n=U(null),r=U(!1);rt(()=>{const{value:N}=n;if(N===null){r.value=!1;return}r.value=N>=e.visibilityHeight});const a=U(!1);be(r,N=>{var M;a.value&&((M=e["onUpdate:show"])===null||M===void 0||M.call(e,N))});const l=fe(e,"show"),i=Fe(l,r),u=U(!0),v=U(null),g=A(()=>({right:`calc(${Ut(e.right)} + ${nr.value})`,bottom:Ut(e.bottom)}));let m,f;be(i,N=>{var M,B;a.value&&(N&&((M=e.onShow)===null||M===void 0||M.call(e)),(B=e.onHide)===null||B===void 0||B.call(e))});const k=pe("BackTop","-back-top",Va,Da,e,t);function I(){var N;if(f)return;f=!0;const M=((N=e.target)===null||N===void 0?void 0:N.call(e))||fa(e.listenTo)||mn(v.value);if(!M)return;m=M===document.documentElement?document:M;const{to:B}=e;typeof B=="string"&&document.querySelector(B),m.addEventListener("scroll",F),F()}function T(){(Uo(m)?document.documentElement:m).scrollTo({top:0,behavior:"smooth"})}function F(){n.value=(Uo(m)?document.documentElement:m).scrollTop,a.value||et(()=>{a.value=!0})}function D(){u.value=!1}Nt(()=>{I(),u.value=i.value}),en(()=>{m&&m.removeEventListener("scroll",F)});const K=A(()=>{const{self:{color:N,boxShadow:M,boxShadowHover:B,boxShadowPressed:L,iconColor:w,iconColorHover:V,iconColorPressed:b,width:O,height:Y,iconSize:te,borderRadius:se,textColor:re},common:{cubicBezierEaseInOut:S}}=k.value;return{"--n-bezier":S,"--n-border-radius":se,"--n-height":Y,"--n-width":O,"--n-box-shadow":M,"--n-box-shadow-hover":B,"--n-box-shadow-pressed":L,"--n-color":N,"--n-icon-size":te,"--n-icon-color":w,"--n-icon-color-hover":V,"--n-icon-color-pressed":b,"--n-text-color":re}}),H=o?it("back-top",void 0,K,e):void 0;return{placeholderRef:v,style:g,mergedShow:i,isMounted:vo(),scrollElement:U(null),scrollTop:n,DomInfoReady:a,transitionDisabled:u,mergedClsPrefix:t,handleAfterEnter:D,handleScroll:F,handleClick:T,cssVars:o?void 0:K,themeClass:H==null?void 0:H.themeClass,onRender:H==null?void 0:H.onRender}},render(){const{mergedClsPrefix:e}=this;return c("div",{ref:"placeholderRef",class:`${e}-back-top-placeholder`,style:"display: none","aria-hidden":!0},c(tn,{to:this.to,show:this.mergedShow},{default:()=>c(Ot,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterEnter:this.handleAfterEnter},{default:()=>{var t;return(t=this.onRender)===null||t===void 0||t.call(this),this.mergedShow?c("div",mo(this.$attrs,{class:[`${e}-back-top`,this.themeClass,this.transitionDisabled&&`${e}-back-top--transition-disabled`],style:[this.style,this.cssVars],onClick:this.handleClick}),Lt(this.$slots.default,()=>[c(St,{clsPrefix:e},{default:()=>La})])):null}})}))}}),Na=p("breadcrumb",`
 white-space: nowrap;
 cursor: default;
 line-height: var(--n-item-line-height);
`,[y("ul",`
 list-style: none;
 padding: 0;
 margin: 0;
 `),y("a",`
 color: inherit;
 text-decoration: inherit;
 `),p("breadcrumb-item",`
 font-size: var(--n-font-size);
 transition: color .3s var(--n-bezier);
 display: inline-flex;
 align-items: center;
 `,[p("icon",`
 font-size: 18px;
 vertical-align: -.2em;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `),y("&:not(:last-child)",[P("clickable",[z("link",`
 cursor: pointer;
 `,[y("&:hover",`
 background-color: var(--n-item-color-hover);
 `),y("&:active",`
 background-color: var(--n-item-color-pressed); 
 `)])])]),z("link",`
 padding: 4px;
 border-radius: var(--n-item-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 position: relative;
 `,[y("&:hover",`
 color: var(--n-item-text-color-hover);
 `,[p("icon",`
 color: var(--n-item-text-color-hover);
 `)]),y("&:active",`
 color: var(--n-item-text-color-pressed);
 `,[p("icon",`
 color: var(--n-item-text-color-pressed);
 `)])]),z("separator",`
 margin: 0 8px;
 color: var(--n-separator-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 `),y("&:last-child",[z("link",`
 font-weight: var(--n-font-weight-active);
 cursor: unset;
 color: var(--n-item-text-color-active);
 `,[p("icon",`
 color: var(--n-item-text-color-active);
 `)]),z("separator",`
 display: none;
 `)])])]),xn=st("n-breadcrumb"),Oa=Object.assign(Object.assign({},pe.props),{separator:{type:String,default:"/"}}),ja=E({name:"Breadcrumb",props:Oa,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Ee(e),n=pe("Breadcrumb","-breadcrumb",Na,rr,e,t);Be(xn,{separatorRef:fe(e,"separator"),mergedClsPrefixRef:t});const r=A(()=>{const{common:{cubicBezierEaseInOut:l},self:{separatorColor:i,itemTextColor:u,itemTextColorHover:v,itemTextColorPressed:g,itemTextColorActive:m,fontSize:f,fontWeightActive:k,itemBorderRadius:I,itemColorHover:T,itemColorPressed:F,itemLineHeight:D}}=n.value;return{"--n-font-size":f,"--n-bezier":l,"--n-item-text-color":u,"--n-item-text-color-hover":v,"--n-item-text-color-pressed":g,"--n-item-text-color-active":m,"--n-separator-color":i,"--n-item-color-hover":T,"--n-item-color-pressed":F,"--n-item-border-radius":I,"--n-font-weight-active":k,"--n-item-line-height":D}}),a=o?it("breadcrumb",void 0,r,e):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:r,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),c("nav",{class:[`${this.mergedClsPrefix}-breadcrumb`,this.themeClass],style:this.cssVars,"aria-label":"Breadcrumb"},c("ul",null,this.$slots))}}),Wa=(e=ar?window:null)=>{const t=()=>{const{hash:r,host:a,hostname:l,href:i,origin:u,pathname:v,port:g,protocol:m,search:f}=(e==null?void 0:e.location)||{};return{hash:r,host:a,hostname:l,href:i,origin:u,pathname:v,port:g,protocol:m,search:f}},o=()=>{n.value=t()},n=U(t());return Nt(()=>{e&&(e.addEventListener("popstate",o),e.addEventListener("hashchange",o))}),on(()=>{e&&(e.removeEventListener("popstate",o),e.removeEventListener("hashchange",o))}),n},Ka={separator:String,href:String,clickable:{type:Boolean,default:!0},onClick:Function},qa=E({name:"BreadcrumbItem",props:Ka,setup(e,{slots:t}){const o=_e(xn,null);if(!o)return()=>null;const{separatorRef:n,mergedClsPrefixRef:r}=o,a=Wa(),l=A(()=>e.href?"a":"span"),i=A(()=>a.value.href===e.href?"location":null);return()=>{const{value:u}=r;return c("li",{class:[`${u}-breadcrumb-item`,e.clickable&&`${u}-breadcrumb-item--clickable`]},c(l.value,{class:`${u}-breadcrumb-item__link`,"aria-current":i.value,href:e.href,onClick:e.onClick},t),c("span",{class:`${u}-breadcrumb-item__separator`,"aria-hidden":"true"},Lt(t.separator,()=>{var v;return[(v=e.separator)!==null&&v!==void 0?v:n.value]})))}}});function Xa(e,t){switch(e[0]){case"hex":return t?"#000000FF":"#000000";case"rgb":return t?"rgba(0, 0, 0, 1)":"rgb(0, 0, 0)";case"hsl":return t?"hsla(0, 0%, 0%, 1)":"hsl(0, 0%, 0%)";case"hsv":return t?"hsva(0, 0%, 0%, 1)":"hsv(0, 0%, 0%)"}return"#000000"}function $t(e){return e===null?null:/^ *#/.test(e)?"hex":e.includes("rgb")?"rgb":e.includes("hsl")?"hsl":e.includes("hsv")?"hsv":null}function Ga(e){return e=Math.round(e),e>=360?359:e<0?0:e}function Ya(e){return e=Math.round(e*100)/100,e>1?1:e<0?0:e}const Za={rgb:{hex(e){return We(Pe(e))},hsl(e){const[t,o,n,r]=Pe(e);return Ke([...uo(t,o,n),r])},hsv(e){const[t,o,n,r]=Pe(e);return tt([...co(t,o,n),r])}},hex:{rgb(e){return Ve(Pe(e))},hsl(e){const[t,o,n,r]=Pe(e);return Ke([...uo(t,o,n),r])},hsv(e){const[t,o,n,r]=Pe(e);return tt([...co(t,o,n),r])}},hsl:{hex(e){const[t,o,n,r]=pt(e);return We([...ho(t,o,n),r])},rgb(e){const[t,o,n,r]=pt(e);return Ve([...ho(t,o,n),r])},hsv(e){const[t,o,n,r]=pt(e);return tt([...bn(t,o,n),r])}},hsv:{hex(e){const[t,o,n,r]=ot(e);return We([...Oe(t,o,n),r])},rgb(e){const[t,o,n,r]=ot(e);return Ve([...Oe(t,o,n),r])},hsl(e){const[t,o,n,r]=ot(e);return Ke([...Et(t,o,n),r])}}};function _n(e,t,o){return o=o||$t(e),o?o===t?e:Za[o][t](e):null}const ft="12px",Ja=12,Ye="6px",Qa=6,el="linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)",tl=E({name:"HueSlider",props:{clsPrefix:{type:String,required:!0},hue:{type:Number,required:!0},onUpdateHue:{type:Function,required:!0},onComplete:Function},setup(e){const t=U(null);function o(a){t.value&&(qe("mousemove",document,n),qe("mouseup",document,r),n(a))}function n(a){const{value:l}=t;if(!l)return;const{width:i,left:u}=l.getBoundingClientRect(),v=Ga((a.clientX-u-Qa)/(i-Ja)*360);e.onUpdateHue(v)}function r(){var a;vt("mousemove",document,n),vt("mouseup",document,r),(a=e.onComplete)===null||a===void 0||a.call(e)}return{railRef:t,handleMouseDown:o}},render(){const{clsPrefix:e}=this;return c("div",{class:`${e}-color-picker-slider`,style:{height:ft,borderRadius:Ye}},c("div",{ref:"railRef",style:{boxShadow:"inset 0 0 2px 0 rgba(0, 0, 0, .24)",boxSizing:"border-box",backgroundImage:el,height:ft,borderRadius:Ye,position:"relative"},onMousedown:this.handleMouseDown},c("div",{style:{position:"absolute",left:Ye,right:Ye,top:0,bottom:0}},c("div",{class:`${e}-color-picker-handle`,style:{left:`calc((${this.hue}%) / 359 * 100 - ${Ye})`,borderRadius:Ye,width:ft,height:ft}},c("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:`hsl(${this.hue}, 100%, 50%)`,borderRadius:Ye,width:ft,height:ft}})))))}}),Ct="12px",ol=12,Ze="6px",nl=E({name:"AlphaSlider",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},alpha:{type:Number,default:0},onUpdateAlpha:{type:Function,required:!0},onComplete:Function},setup(e){const t=U(null);function o(a){!t.value||!e.rgba||(qe("mousemove",document,n),qe("mouseup",document,r),n(a))}function n(a){const{value:l}=t;if(!l)return;const{width:i,left:u}=l.getBoundingClientRect(),v=(a.clientX-u)/(i-ol);e.onUpdateAlpha(Ya(v))}function r(){var a;vt("mousemove",document,n),vt("mouseup",document,r),(a=e.onComplete)===null||a===void 0||a.call(e)}return{railRef:t,railBackgroundImage:A(()=>{const{rgba:a}=e;return a?`linear-gradient(to right, rgba(${a[0]}, ${a[1]}, ${a[2]}, 0) 0%, rgba(${a[0]}, ${a[1]}, ${a[2]}, 1) 100%)`:""}),handleMouseDown:o}},render(){const{clsPrefix:e}=this;return c("div",{class:`${e}-color-picker-slider`,ref:"railRef",style:{height:Ct,borderRadius:Ze},onMousedown:this.handleMouseDown},c("div",{style:{borderRadius:Ze,position:"absolute",left:0,right:0,top:0,bottom:0,overflow:"hidden"}},c("div",{class:`${e}-color-picker-checkboard`}),c("div",{class:`${e}-color-picker-slider__image`,style:{backgroundImage:this.railBackgroundImage}})),this.rgba&&c("div",{style:{position:"absolute",left:Ze,right:Ze,top:0,bottom:0}},c("div",{class:`${e}-color-picker-handle`,style:{left:`calc(${this.alpha*100}% - ${Ze})`,borderRadius:Ze,width:Ct,height:Ct}},c("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:Ve(this.rgba),borderRadius:Ze,width:Ct,height:Ct}}))))}}),Pt="12px",Tt="6px",rl=E({name:"Pallete",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},displayedHue:{type:Number,required:!0},displayedSv:{type:Array,required:!0},onUpdateSV:{type:Function,required:!0},onComplete:Function},setup(e){const t=U(null);function o(a){t.value&&(qe("mousemove",document,n),qe("mouseup",document,r),n(a))}function n(a){const{value:l}=t;if(!l)return;const{width:i,height:u,left:v,bottom:g}=l.getBoundingClientRect(),m=(g-a.clientY)/u,f=(a.clientX-v)/i,k=100*(f>1?1:f<0?0:f),I=100*(m>1?1:m<0?0:m);e.onUpdateSV(k,I)}function r(){var a;vt("mousemove",document,n),vt("mouseup",document,r),(a=e.onComplete)===null||a===void 0||a.call(e)}return{palleteRef:t,handleColor:A(()=>{const{rgba:a}=e;return a?`rgb(${a[0]}, ${a[1]}, ${a[2]})`:""}),handleMouseDown:o}},render(){const{clsPrefix:e}=this;return c("div",{class:`${e}-color-picker-pallete`,onMousedown:this.handleMouseDown,ref:"palleteRef"},c("div",{class:`${e}-color-picker-pallete__layer`,style:{backgroundImage:`linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`}}),c("div",{class:`${e}-color-picker-pallete__layer ${e}-color-picker-pallete__layer--shadowed`,style:{backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))"}}),this.rgba&&c("div",{class:`${e}-color-picker-handle`,style:{width:Pt,height:Pt,borderRadius:Tt,left:`calc(${this.displayedSv[0]}% - ${Tt})`,bottom:`calc(${this.displayedSv[1]}% - ${Tt})`}},c("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:this.handleColor,borderRadius:Tt,width:Pt,height:Pt}})))}}),So=st("n-color-picker");function al(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),255)):!1}function ll(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),360)):!1}function il(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),100)):!1}function sl(e){const t=e.trim();return/^#[0-9a-fA-F]+$/.test(t)?[4,5,7,9].includes(t.length):!1}function cl(e){return/^\d{1,3}\.?\d*%$/.test(e.trim())?Math.max(0,Math.min(parseInt(e)/100,100)):!1}const dl={paddingSmall:"0 4px"},jo=E({name:"ColorInputUnit",props:{label:{type:String,required:!0},value:{type:[Number,String],default:null},showAlpha:Boolean,onUpdateValue:{type:Function,required:!0}},setup(e){const t=U(""),{themeRef:o}=_e(So,null);rt(()=>{t.value=n()});function n(){const{value:l}=e;if(l===null)return"";const{label:i}=e;return i==="HEX"?l:i==="A"?`${Math.floor(l*100)}%`:String(Math.floor(l))}function r(l){t.value=l}function a(l){let i,u;switch(e.label){case"HEX":u=sl(l),u&&e.onUpdateValue(l),t.value=n();break;case"H":i=ll(l),i===!1?t.value=n():e.onUpdateValue(i);break;case"S":case"L":case"V":i=il(l),i===!1?t.value=n():e.onUpdateValue(i);break;case"A":i=cl(l),i===!1?t.value=n():e.onUpdateValue(i);break;case"R":case"G":case"B":i=al(l),i===!1?t.value=n():e.onUpdateValue(i);break}}return{mergedTheme:o,inputValue:t,handleInputChange:a,handleInputUpdateValue:r}},render(){const{mergedTheme:e}=this;return c(un,{size:"small",placeholder:this.label,theme:e.peers.Input,themeOverrides:e.peerOverrides.Input,builtinThemeOverrides:dl,value:this.inputValue,onUpdateValue:this.handleInputUpdateValue,onChange:this.handleInputChange,style:this.label==="A"?"flex-grow: 1.25;":""})}}),ul=E({name:"ColorInput",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},modes:{type:Array,required:!0},showAlpha:{type:Boolean,required:!0},value:{type:String,default:null},valueArr:{type:Array,default:null},onUpdateValue:{type:Function,required:!0},onUpdateMode:{type:Function,required:!0}},setup(e){return{handleUnitUpdateValue(t,o){const{showAlpha:n}=e;if(e.mode==="hex"){e.onUpdateValue((n?We:zt)(o));return}let r;switch(e.valueArr===null?r=[0,0,0,0]:r=Array.from(e.valueArr),e.mode){case"hsv":r[t]=o,e.onUpdateValue((n?tt:ao)(r));break;case"rgb":r[t]=o,e.onUpdateValue((n?Ve:ro)(r));break;case"hsl":r[t]=o,e.onUpdateValue((n?Ke:no)(r));break}}}},render(){const{clsPrefix:e,modes:t}=this;return c("div",{class:`${e}-color-picker-input`},c("div",{class:`${e}-color-picker-input__mode`,onClick:this.onUpdateMode,style:{cursor:t.length===1?"":"pointer"}},this.mode.toUpperCase()+(this.showAlpha?"A":"")),c(Ta,null,{default:()=>{const{mode:o,valueArr:n,showAlpha:r}=this;if(o==="hex"){let a=null;try{a=n===null?null:(r?We:zt)(n)}catch{}return c(jo,{label:"HEX",showAlpha:r,value:a,onUpdateValue:l=>{this.handleUnitUpdateValue(0,l)}})}return(o+(r?"a":"")).split("").map((a,l)=>c(jo,{label:a.toUpperCase(),value:n===null?null:n[l],onUpdateValue:i=>{this.handleUnitUpdateValue(l,i)}}))}}))}}),hl=E({name:"ColorPickerTrigger",props:{clsPrefix:{type:String,required:!0},value:{type:String,default:null},hsla:{type:Array,default:null},disabled:Boolean,onClick:Function},setup(e){const{colorPickerSlots:t,renderLabelRef:o}=_e(So,null);return()=>{const{hsla:n,value:r,clsPrefix:a,onClick:l,disabled:i}=e,u=t.label||o.value;return c("div",{class:[`${a}-color-picker-trigger`,i&&`${a}-color-picker-trigger--disabled`],onClick:i?void 0:l},c("div",{class:`${a}-color-picker-trigger__fill`},c("div",{class:`${a}-color-picker-checkboard`}),c("div",{style:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:n?Ke(n):""}}),r&&n?c("div",{class:`${a}-color-picker-trigger__value`,style:{color:n[2]>50||n[3]<.5?"black":"white"}},u?u(r):r):null))}}});function fl(e,t){if(t==="hsv"){const[o,n,r,a]=ot(e);return Ve([...Oe(o,n,r),a])}return e}function pl(e){const t=document.createElement("canvas").getContext("2d");return t.fillStyle=e,t.fillStyle}const vl=E({name:"ColorPickerSwatches",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},swatches:{type:Array,required:!0},onUpdateColor:{type:Function,required:!0}},setup(e){const t=A(()=>e.swatches.map(a=>{const l=$t(a);return{value:a,mode:l,legalValue:fl(a,l)}}));function o(a){const{mode:l}=e;let{value:i,mode:u}=a;return u||(u="hex",/^[a-zA-Z]+$/.test(i)?i=pl(i):(lr("color-picker",`color ${i} in swatches is invalid.`),i="#000000")),u===l?i:_n(i,l,u)}function n(a){e.onUpdateColor(o(a))}function r(a,l){a.key==="Enter"&&n(l)}return{parsedSwatchesRef:t,handleSwatchSelect:n,handleSwatchKeyDown:r}},render(){const{clsPrefix:e}=this;return c("div",{class:`${e}-color-picker-swatches`},this.parsedSwatchesRef.map(t=>c("div",{class:`${e}-color-picker-swatch`,tabindex:0,onClick:()=>{this.handleSwatchSelect(t)},onKeydown:o=>{this.handleSwatchKeyDown(o,t)}},c("div",{class:`${e}-color-picker-swatch__fill`,style:{background:t.legalValue}}))))}}),ml=E({name:"ColorPreview",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},color:{type:String,default:null,validator:e=>{const t=$t(e);return!!(!e||t&&t!=="hsv")}},onUpdateColor:{type:Function,required:!0}},setup(e){function t(o){var n;const r=o.target.value;(n=e.onUpdateColor)===null||n===void 0||n.call(e,_n(r.toUpperCase(),e.mode,"hex")),o.stopPropagation()}return{handleChange:t}},render(){const{clsPrefix:e}=this;return c("div",{class:`${e}-color-picker-preview__preview`},c("span",{class:`${e}-color-picker-preview__fill`,style:{background:this.color||"#000000"}}),c("input",{class:`${e}-color-picker-preview__input`,type:"color",value:this.color,onChange:this.handleChange}))}}),bl=y([p("color-picker",`
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 `),p("color-picker-panel",`
 margin: 4px 0;
 width: 240px;
 font-size: var(--n-panel-font-size);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 `,[Qo(),p("input",`
 text-align: center;
 `)]),p("color-picker-checkboard",`
 background: white; 
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[y("&::after",`
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 12px 12px;
 background-position: 0 0, 0 6px, 6px -6px, -6px 0px;
 background-repeat: repeat;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),p("color-picker-slider",`
 margin-bottom: 8px;
 position: relative;
 box-sizing: border-box;
 `,[z("image",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `),y("&::after",`
 content: "";
 position: absolute;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 pointer-events: none;
 `)]),p("color-picker-handle",`
 z-index: 1;
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `,[z("fill",`
 box-sizing: border-box;
 border: 2px solid white;
 `)]),p("color-picker-pallete",`
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 cursor: crosshair;
 `,[z("layer",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[P("shadowed",`
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]),p("color-picker-preview",`
 display: flex;
 `,[z("sliders",`
 flex: 1 0 auto;
 `),z("preview",`
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `),z("fill",`
 display: block;
 width: 30px;
 height: 30px;
 `),z("input",`
 position: absolute;
 top: 0;
 left: 0;
 width: 30px;
 height: 30px;
 opacity: 0;
 z-index: 1;
 `)]),p("color-picker-input",`
 display: flex;
 align-items: center;
 `,[p("input",`
 flex-grow: 1;
 flex-basis: 0;
 `),z("mode",`
 width: 72px;
 text-align: center;
 `)]),p("color-picker-control",`
 padding: 12px;
 `),p("color-picker-action",`
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--n-divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `,[p("button","margin-left: 8px;")]),p("color-picker-trigger",`
 border: var(--n-border);
 height: 100%;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 cursor: pointer;
 `,[z("value",`
 white-space: nowrap;
 position: relative;
 `),z("fill",`
 border-radius: var(--n-border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `),P("disabled","cursor: not-allowed"),p("color-picker-checkboard",`
 border-radius: var(--n-border-radius);
 `,[y("&::after",`
 --n-block-size: calc((var(--n-height) - 8px) / 3);
 background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);
 background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; 
 `)])]),p("color-picker-swatches",`
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `,[p("color-picker-swatch",`
 width: 18px;
 height: 18px;
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 8px 8px;
 background-position: 0px 0, 0px 4px, 4px -4px, -4px 0px;
 background-repeat: repeat;
 `,[z("fill",`
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `),y("&:focus",`
 outline: none;
 `,[z("fill",[y("&::after",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]),gl=Object.assign(Object.assign({},pe.props),{value:String,show:{type:Boolean,default:void 0},defaultShow:Boolean,defaultValue:String,modes:{type:Array,default:()=>["rgb","hex","hsl"]},placement:{type:String,default:"bottom-start"},to:io.propTo,showAlpha:{type:Boolean,default:!0},showPreview:Boolean,swatches:Array,disabled:{type:Boolean,default:void 0},actions:{type:Array,default:null},internalActions:Array,size:String,renderLabel:Function,onComplete:Function,onConfirm:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),xl=E({name:"ColorPicker",props:gl,setup(e,{slots:t}){const o=U(null);let n=null;const r=bo(e),{mergedSizeRef:a,mergedDisabledRef:l}=r,{localeRef:i}=hn("global"),{mergedClsPrefixRef:u,namespaceRef:v,inlineThemeDisabled:g}=Ee(e),m=pe("ColorPicker","-color-picker",bl,ir,e,u);Be(So,{themeRef:m,renderLabelRef:fe(e,"renderLabel"),colorPickerSlots:t});const f=U(e.defaultShow),k=Fe(fe(e,"show"),f);function I(d){const{onUpdateShow:_,"onUpdate:show":j}=e;_&&ee(_,d),j&&ee(j,d),f.value=d}const{defaultValue:T}=e,F=U(T===void 0?Xa(e.modes,e.showAlpha):T),D=Fe(fe(e,"value"),F),K=U([D.value]),H=U(0),N=A(()=>$t(D.value)),{modes:M}=e,B=U($t(D.value)||M[0]||"rgb");function L(){const{modes:d}=e,{value:_}=B,j=d.findIndex(G=>G===_);~j?B.value=d[(j+1)%d.length]:B.value="rgb"}let w,V,b,O,Y,te,se,re;const S=A(()=>{const{value:d}=D;if(!d)return null;switch(N.value){case"hsv":return ot(d);case"hsl":return[w,V,b,re]=pt(d),[...bn(w,V,b),re];case"rgb":case"hex":return[Y,te,se,re]=Pe(d),[...co(Y,te,se),re]}}),ue=A(()=>{const{value:d}=D;if(!d)return null;switch(N.value){case"rgb":case"hex":return Pe(d);case"hsv":return[w,V,O,re]=ot(d),[...Oe(w,V,O),re];case"hsl":return[w,V,b,re]=pt(d),[...ho(w,V,b),re]}}),ce=A(()=>{const{value:d}=D;if(!d)return null;switch(N.value){case"hsl":return pt(d);case"hsv":return[w,V,O,re]=ot(d),[...Et(w,V,O),re];case"rgb":case"hex":return[Y,te,se,re]=Pe(d),[...uo(Y,te,se),re]}}),De=A(()=>{switch(B.value){case"rgb":case"hex":return ue.value;case"hsv":return S.value;case"hsl":return ce.value}}),ye=U(0),he=U(1),ve=U([0,0]);function xe(d,_){const{value:j}=S,G=ye.value,Z=j?j[3]:1;ve.value=[d,_];const{showAlpha:J}=e;switch(B.value){case"hsv":Q((J?tt:ao)([G,d,_,Z]),"cursor");break;case"hsl":Q((J?Ke:no)([...Et(G,d,_),Z]),"cursor");break;case"rgb":Q((J?Ve:ro)([...Oe(G,d,_),Z]),"cursor");break;case"hex":Q((J?We:zt)([...Oe(G,d,_),Z]),"cursor");break}}function we(d){ye.value=d;const{value:_}=S;if(!_)return;const[,j,G,Z]=_,{showAlpha:J}=e;switch(B.value){case"hsv":Q((J?tt:ao)([d,j,G,Z]),"cursor");break;case"rgb":Q((J?Ve:ro)([...Oe(d,j,G),Z]),"cursor");break;case"hex":Q((J?We:zt)([...Oe(d,j,G),Z]),"cursor");break;case"hsl":Q((J?Ke:no)([...Et(d,j,G),Z]),"cursor");break}}function $e(d){switch(B.value){case"hsv":[w,V,O]=S.value,Q(tt([w,V,O,d]),"cursor");break;case"rgb":[Y,te,se]=ue.value,Q(Ve([Y,te,se,d]),"cursor");break;case"hex":[Y,te,se]=ue.value,Q(We([Y,te,se,d]),"cursor");break;case"hsl":[w,V,b]=ce.value,Q(Ke([w,V,b,d]),"cursor");break}he.value=d}function Q(d,_){_==="cursor"?n=d:n=null;const{nTriggerFormChange:j,nTriggerFormInput:G}=r,{onUpdateValue:Z,"onUpdate:value":J}=e;Z&&ee(Z,d),J&&ee(J,d),j(),G(),F.value=d}function Ce(d){Q(d,"input"),et(me)}function me(d=!0){const{value:_}=D;if(_){const{nTriggerFormChange:j,nTriggerFormInput:G}=r,{onComplete:Z}=e;Z&&Z(_);const{value:J}=K,{value:ie}=H;d&&(J.splice(ie+1,J.length,_),H.value=ie+1),j(),G()}}function Ne(){const{value:d}=H;d-1<0||(Q(K.value[d-1],"input"),me(!1),H.value=d-1)}function Xe(){const{value:d}=H;d<0||d+1>=K.value.length||(Q(K.value[d+1],"input"),me(!1),H.value=d+1)}function yt(){Q(null,"input"),I(!1)}function ut(){const{value:d}=D,{onConfirm:_}=e;_&&_(d),I(!1)}const wt=A(()=>H.value>=1),ht=A(()=>{const{value:d}=K;return d.length>1&&H.value<d.length-1});be(k,d=>{d||(K.value=[D.value],H.value=0)}),rt(()=>{if(!(n&&n===D.value)){const{value:d}=S;d&&(ye.value=d[0],he.value=d[3],ve.value=[d[1],d[2]])}n=null});const Re=A(()=>{const{value:d}=a,{common:{cubicBezierEaseInOut:_},self:{textColor:j,color:G,panelFontSize:Z,boxShadow:J,border:ie,borderRadius:oe,dividerColor:ke,[de("height",d)]:Ge,[de("fontSize",d)]:qt}}=m.value;return{"--n-bezier":_,"--n-text-color":j,"--n-color":G,"--n-panel-font-size":Z,"--n-font-size":qt,"--n-box-shadow":J,"--n-border":ie,"--n-border-radius":oe,"--n-height":Ge,"--n-divider-color":ke}}),$=g?it("color-picker",A(()=>a.value[0]),Re,e):void 0;function h(){var d;const{value:_}=ue,{value:j}=ye,{internalActions:G,modes:Z,actions:J}=e,{value:ie}=m,{value:oe}=u;return c("div",{class:[`${oe}-color-picker-panel`,$==null?void 0:$.themeClass.value],onDragstart:ke=>{ke.preventDefault()},style:g?void 0:Re.value},c("div",{class:`${oe}-color-picker-control`},c(rl,{clsPrefix:oe,rgba:_,displayedHue:j,displayedSv:ve.value,onUpdateSV:xe,onComplete:me}),c("div",{class:`${oe}-color-picker-preview`},c("div",{class:`${oe}-color-picker-preview__sliders`},c(tl,{clsPrefix:oe,hue:j,onUpdateHue:we,onComplete:me}),e.showAlpha?c(nl,{clsPrefix:oe,rgba:_,alpha:he.value,onUpdateAlpha:$e,onComplete:me}):null),e.showPreview?c(ml,{clsPrefix:oe,mode:B.value,color:ue.value&&zt(ue.value),onUpdateColor:ke=>{Q(ke,"input")}}):null),c(ul,{clsPrefix:oe,showAlpha:e.showAlpha,mode:B.value,modes:Z,onUpdateMode:L,value:D.value,valueArr:De.value,onUpdateValue:Ce}),((d=e.swatches)===null||d===void 0?void 0:d.length)&&c(vl,{clsPrefix:oe,mode:B.value,swatches:e.swatches,onUpdateColor:ke=>{Q(ke,"input")}})),J!=null&&J.length?c("div",{class:`${oe}-color-picker-action`},J.includes("confirm")&&c(je,{size:"small",onClick:ut,theme:ie.peers.Button,themeOverrides:ie.peerOverrides.Button},{default:()=>i.value.confirm}),J.includes("clear")&&c(je,{size:"small",onClick:yt,disabled:!D.value,theme:ie.peers.Button,themeOverrides:ie.peerOverrides.Button},{default:()=>i.value.clear})):null,t.action?c("div",{class:`${oe}-color-picker-action`},{default:t.action}):G?c("div",{class:`${oe}-color-picker-action`},G.includes("undo")&&c(je,{size:"small",onClick:Ne,disabled:!wt.value,theme:ie.peers.Button,themeOverrides:ie.peerOverrides.Button},{default:()=>i.value.undo}),G.includes("redo")&&c(je,{size:"small",onClick:Xe,disabled:!ht.value,theme:ie.peers.Button,themeOverrides:ie.peerOverrides.Button},{default:()=>i.value.redo})):null)}return{mergedClsPrefix:u,namespace:v,selfRef:o,hsla:ce,rgba:ue,mergedShow:k,mergedDisabled:l,isMounted:vo(),adjustedTo:io(e),mergedValue:D,handleTriggerClick(){I(!0)},handleClickOutside(d){var _;!((_=o.value)===null||_===void 0)&&_.contains(sr(d))||I(!1)},renderPanel:h,cssVars:g?void 0:Re,themeClass:$==null?void 0:$.themeClass,onRender:$==null?void 0:$.onRender}},render(){const{$slots:e,mergedClsPrefix:t,onRender:o}=this;return o==null||o(),c("div",{class:[this.themeClass,`${t}-color-picker`],ref:"selfRef",style:this.cssVars},c(la,null,{default:()=>[c(ia,null,{default:()=>c(hl,{clsPrefix:t,value:this.mergedValue,hsla:this.hsla,disabled:this.mergedDisabled,onClick:this.handleTriggerClick},{label:e.label})}),c(sa,{placement:this.placement,show:this.mergedShow,containerClass:this.namespace,teleportDisabled:this.adjustedTo===io.tdkey,to:this.adjustedTo},{default:()=>c(Ot,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>this.mergedShow?at(this.renderPanel(),[[nn,this.handleClickOutside,void 0,{capture:!0}]]):null})})]}))}}),_l=E({name:"NDrawerContent",inheritAttrs:!1,props:{blockScroll:Boolean,show:{type:Boolean,default:void 0},displayDirective:{type:String,required:!0},placement:{type:String,required:!0},contentStyle:[Object,String],nativeScrollbar:{type:Boolean,required:!0},scrollbarProps:Object,trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},showMask:{type:[Boolean,String],required:!0},resizable:Boolean,onClickoutside:Function,onAfterLeave:Function,onAfterEnter:Function,onEsc:Function},setup(e){const t=U(!!e.show),o=U(null),n=_e(go);let r=0,a="",l=null;const i=U(!1),u=U(!1),v=A(()=>e.placement==="top"||e.placement==="bottom"),{mergedClsPrefixRef:g,mergedRtlRef:m}=Ee(e),f=rn("Drawer",m,g),k=L=>{u.value=!0,r=v.value?L.clientY:L.clientX,a=document.body.style.cursor,document.body.style.cursor=v.value?"ns-resize":"ew-resize",document.body.addEventListener("mousemove",K),document.body.addEventListener("mouseleave",N),document.body.addEventListener("mouseup",H)},I=()=>{l!==null&&(window.clearTimeout(l),l=null),u.value?i.value=!0:l=window.setTimeout(()=>{i.value=!0},300)},T=()=>{l!==null&&(window.clearTimeout(l),l=null),i.value=!1},{doUpdateHeight:F,doUpdateWidth:D}=n,K=L=>{var w,V;if(u.value)if(v.value){let b=((w=o.value)===null||w===void 0?void 0:w.offsetHeight)||0;const O=r-L.clientY;b+=e.placement==="bottom"?O:-O,F(b),r=L.clientY}else{let b=((V=o.value)===null||V===void 0?void 0:V.offsetWidth)||0;const O=r-L.clientX;b+=e.placement==="right"?O:-O,D(b),r=L.clientX}},H=()=>{u.value&&(r=0,u.value=!1,document.body.style.cursor=a,document.body.removeEventListener("mousemove",K),document.body.removeEventListener("mouseup",H),document.body.removeEventListener("mouseleave",N))},N=H;rt(()=>{e.show&&(t.value=!0)}),be(()=>e.show,L=>{L||H()}),en(()=>{H()});const M=A(()=>{const{show:L}=e,w=[[Vt,L]];return e.showMask||w.push([nn,e.onClickoutside,void 0,{capture:!0}]),w});function B(){var L;t.value=!1,(L=e.onAfterLeave)===null||L===void 0||L.call(e)}return cr(A(()=>e.blockScroll&&t.value)),Be(dr,o),Be(ur,null),Be(hr,null),{bodyRef:o,rtlEnabled:f,mergedClsPrefix:n.mergedClsPrefixRef,isMounted:n.isMountedRef,mergedTheme:n.mergedThemeRef,displayed:t,transitionName:A(()=>({right:"slide-in-from-right-transition",left:"slide-in-from-left-transition",top:"slide-in-from-top-transition",bottom:"slide-in-from-bottom-transition"})[e.placement]),handleAfterLeave:B,bodyDirectives:M,handleMousedownResizeTrigger:k,handleMouseenterResizeTrigger:I,handleMouseleaveResizeTrigger:T,isDragging:u,isHoverOnResizeTrigger:i}},render(){const{$slots:e,mergedClsPrefix:t}=this;return this.displayDirective==="show"||this.displayed||this.show?at(c("div",{role:"none"},c(fr,{disabled:!this.showMask||!this.trapFocus,active:this.show,autoFocus:this.autoFocus,onEsc:this.onEsc},{default:()=>c(Ot,{name:this.transitionName,appear:this.isMounted,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>at(c("div",mo(this.$attrs,{role:"dialog",ref:"bodyRef","aria-modal":"true",class:[`${t}-drawer`,this.rtlEnabled&&`${t}-drawer--rtl`,`${t}-drawer--${this.placement}-placement`,this.isDragging&&`${t}-drawer--unselectable`,this.nativeScrollbar&&`${t}-drawer--native-scrollbar`]}),[this.resizable?c("div",{class:[`${t}-drawer__resize-trigger`,(this.isDragging||this.isHoverOnResizeTrigger)&&`${t}-drawer__resize-trigger--hover`],onMouseenter:this.handleMouseenterResizeTrigger,onMouseleave:this.handleMouseleaveResizeTrigger,onMousedown:this.handleMousedownResizeTrigger}):null,this.nativeScrollbar?c("div",{class:`${t}-drawer-content-wrapper`,style:this.contentStyle,role:"none"},e):c(xo,Object.assign({},this.scrollbarProps,{contentStyle:this.contentStyle,contentClass:`${t}-drawer-content-wrapper`,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar}),e)]),this.bodyDirectives)})})),[[Vt,this.displayDirective==="if"||this.displayed||this.show]]):null}}),{cubicBezierEaseIn:yl,cubicBezierEaseOut:wl}=jt;function Cl({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-right"}={}){return[y(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${yl}`}),y(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${wl}`}),y(`&.${o}-transition-enter-to`,{transform:"translateX(0)"}),y(`&.${o}-transition-enter-from`,{transform:"translateX(100%)"}),y(`&.${o}-transition-leave-from`,{transform:"translateX(0)"}),y(`&.${o}-transition-leave-to`,{transform:"translateX(100%)"})]}const{cubicBezierEaseIn:kl,cubicBezierEaseOut:zl}=jt;function Sl({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-left"}={}){return[y(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${kl}`}),y(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${zl}`}),y(`&.${o}-transition-enter-to`,{transform:"translateX(0)"}),y(`&.${o}-transition-enter-from`,{transform:"translateX(-100%)"}),y(`&.${o}-transition-leave-from`,{transform:"translateX(0)"}),y(`&.${o}-transition-leave-to`,{transform:"translateX(-100%)"})]}const{cubicBezierEaseIn:$l,cubicBezierEaseOut:Rl}=jt;function Bl({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-top"}={}){return[y(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${$l}`}),y(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${Rl}`}),y(`&.${o}-transition-enter-to`,{transform:"translateY(0)"}),y(`&.${o}-transition-enter-from`,{transform:"translateY(-100%)"}),y(`&.${o}-transition-leave-from`,{transform:"translateY(0)"}),y(`&.${o}-transition-leave-to`,{transform:"translateY(-100%)"})]}const{cubicBezierEaseIn:Ml,cubicBezierEaseOut:Il}=jt;function Al({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-bottom"}={}){return[y(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${Ml}`}),y(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${Il}`}),y(`&.${o}-transition-enter-to`,{transform:"translateY(0)"}),y(`&.${o}-transition-enter-from`,{transform:"translateY(100%)"}),y(`&.${o}-transition-leave-from`,{transform:"translateY(0)"}),y(`&.${o}-transition-leave-to`,{transform:"translateY(100%)"})]}const Pl=y([p("drawer",`
 word-break: break-word;
 line-height: var(--n-line-height);
 position: absolute;
 pointer-events: all;
 box-shadow: var(--n-box-shadow);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background-color: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 `,[Cl(),Sl(),Bl(),Al(),P("unselectable",`
 user-select: none; 
 -webkit-user-select: none;
 `),P("native-scrollbar",[p("drawer-content-wrapper",`
 overflow: auto;
 height: 100%;
 `)]),z("resize-trigger",`
 position: absolute;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `,[P("hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `)]),p("drawer-content-wrapper",`
 box-sizing: border-box;
 `),p("drawer-content",`
 height: 100%;
 display: flex;
 flex-direction: column;
 `,[P("native-scrollbar",[p("drawer-body-content-wrapper",`
 height: 100%;
 overflow: auto;
 `)]),p("drawer-body",`
 flex: 1 0 0;
 overflow: hidden;
 `),p("drawer-body-content-wrapper",`
 box-sizing: border-box;
 padding: var(--n-body-padding);
 `),p("drawer-header",`
 font-weight: var(--n-title-font-weight);
 line-height: 1;
 font-size: var(--n-title-font-size);
 color: var(--n-title-text-color);
 padding: var(--n-header-padding);
 transition: border .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-divider-color);
 border-bottom: var(--n-header-border-bottom);
 display: flex;
 justify-content: space-between;
 align-items: center;
 `,[z("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),p("drawer-footer",`
 display: flex;
 justify-content: flex-end;
 border-top: var(--n-footer-border-top);
 transition: border .3s var(--n-bezier);
 padding: var(--n-footer-padding);
 `)]),P("right-placement",`
 top: 0;
 bottom: 0;
 right: 0;
 `,[z("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 left: 0;
 transform: translateX(-1.5px);
 cursor: ew-resize;
 `)]),P("left-placement",`
 top: 0;
 bottom: 0;
 left: 0;
 `,[z("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 right: 0;
 transform: translateX(1.5px);
 cursor: ew-resize;
 `)]),P("top-placement",`
 top: 0;
 left: 0;
 right: 0;
 `,[z("resize-trigger",`
 width: 100%;
 height: 3px;
 bottom: 0;
 left: 0;
 transform: translateY(1.5px);
 cursor: ns-resize;
 `)]),P("bottom-placement",`
 left: 0;
 bottom: 0;
 right: 0;
 `,[z("resize-trigger",`
 width: 100%;
 height: 3px;
 top: 0;
 left: 0;
 transform: translateY(-1.5px);
 cursor: ns-resize;
 `)])]),y("body",[y(">",[p("drawer-container",{position:"fixed"})])]),p("drawer-container",`
 position: relative;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 `,[y("> *",{pointerEvents:"all"})]),p("drawer-mask",`
 background-color: rgba(0, 0, 0, .3);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[P("invisible",`
 background-color: rgba(0, 0, 0, 0)
 `),pr({enterDuration:"0.2s",leaveDuration:"0.2s",enterCubicBezier:"var(--n-bezier-in)",leaveCubicBezier:"var(--n-bezier-out)"})])]),Tl=Object.assign(Object.assign({},pe.props),{show:Boolean,width:[Number,String],height:[Number,String],placement:{type:String,default:"right"},maskClosable:{type:Boolean,default:!0},showMask:{type:[Boolean,String],default:!0},to:[String,Object],displayDirective:{type:String,default:"if"},nativeScrollbar:{type:Boolean,default:!0},zIndex:Number,onMaskClick:Function,scrollbarProps:Object,contentStyle:[Object,String],trapFocus:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0},resizable:Boolean,defaultWidth:{type:[Number,String],default:251},defaultHeight:{type:[Number,String],default:251},onUpdateWidth:[Function,Array],onUpdateHeight:[Function,Array],"onUpdate:width":[Function,Array],"onUpdate:height":[Function,Array],"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,drawerStyle:[String,Object],drawerClass:String,target:null,onShow:Function,onHide:Function}),Fl=E({name:"Drawer",inheritAttrs:!1,props:Tl,setup(e){const{mergedClsPrefixRef:t,namespaceRef:o,inlineThemeDisabled:n}=Ee(e),r=vo(),a=pe("Drawer","-drawer",Pl,vr,e,t),l=U(e.defaultWidth),i=U(e.defaultHeight),u=Fe(fe(e,"width"),l),v=Fe(fe(e,"height"),i),g=A(()=>{const{placement:M}=e;return M==="top"||M==="bottom"?"":Ut(u.value)}),m=A(()=>{const{placement:M}=e;return M==="left"||M==="right"?"":Ut(v.value)}),f=M=>{const{onUpdateWidth:B,"onUpdate:width":L}=e;B&&ee(B,M),L&&ee(L,M),l.value=M},k=M=>{const{onUpdateHeight:B,"onUpdate:width":L}=e;B&&ee(B,M),L&&ee(L,M),i.value=M},I=A(()=>[{width:g.value,height:m.value},e.drawerStyle||""]);function T(M){const{onMaskClick:B,maskClosable:L}=e;L&&K(!1),B&&B(M)}const F=mr();function D(M){var B;(B=e.onEsc)===null||B===void 0||B.call(e),e.show&&e.closeOnEsc&&gr(M)&&!F.value&&K(!1)}function K(M){const{onHide:B,onUpdateShow:L,"onUpdate:show":w}=e;L&&ee(L,M),w&&ee(w,M),B&&!M&&ee(B,M)}Be(go,{isMountedRef:r,mergedThemeRef:a,mergedClsPrefixRef:t,doUpdateShow:K,doUpdateHeight:k,doUpdateWidth:f});const H=A(()=>{const{common:{cubicBezierEaseInOut:M,cubicBezierEaseIn:B,cubicBezierEaseOut:L},self:{color:w,textColor:V,boxShadow:b,lineHeight:O,headerPadding:Y,footerPadding:te,bodyPadding:se,titleFontSize:re,titleTextColor:S,titleFontWeight:ue,headerBorderBottom:ce,footerBorderTop:De,closeIconColor:ye,closeIconColorHover:he,closeIconColorPressed:ve,closeColorHover:xe,closeColorPressed:we,closeIconSize:$e,closeSize:Q,closeBorderRadius:Ce,resizableTriggerColorHover:me}}=a.value;return{"--n-line-height":O,"--n-color":w,"--n-text-color":V,"--n-box-shadow":b,"--n-bezier":M,"--n-bezier-out":L,"--n-bezier-in":B,"--n-header-padding":Y,"--n-body-padding":se,"--n-footer-padding":te,"--n-title-text-color":S,"--n-title-font-size":re,"--n-title-font-weight":ue,"--n-header-border-bottom":ce,"--n-footer-border-top":De,"--n-close-icon-color":ye,"--n-close-icon-color-hover":he,"--n-close-icon-color-pressed":ve,"--n-close-size":Q,"--n-close-color-hover":xe,"--n-close-color-pressed":we,"--n-close-icon-size":$e,"--n-close-border-radius":Ce,"--n-resize-trigger-color-hover":me}}),N=n?it("drawer",void 0,H,e):void 0;return{mergedClsPrefix:t,namespace:o,mergedBodyStyle:I,handleMaskClick:T,handleEsc:D,mergedTheme:a,cssVars:n?void 0:H,themeClass:N==null?void 0:N.themeClass,onRender:N==null?void 0:N.onRender,isMounted:r}},render(){const{mergedClsPrefix:e}=this;return c(tn,{to:this.to,show:this.show},{default:()=>{var t;return(t=this.onRender)===null||t===void 0||t.call(this),at(c("div",{class:[`${e}-drawer-container`,this.namespace,this.themeClass],style:this.cssVars,role:"none"},this.showMask?c(Ot,{name:"fade-in-transition",appear:this.isMounted},{default:()=>this.show?c("div",{"aria-hidden":!0,class:[`${e}-drawer-mask`,this.showMask==="transparent"&&`${e}-drawer-mask--invisible`],onClick:this.handleMaskClick}):null}):null,c(_l,Object.assign({},this.$attrs,{class:[this.drawerClass,this.$attrs.class],style:[this.mergedBodyStyle,this.$attrs.style],blockScroll:this.blockScroll,contentStyle:this.contentStyle,placement:this.placement,scrollbarProps:this.scrollbarProps,show:this.show,displayDirective:this.displayDirective,nativeScrollbar:this.nativeScrollbar,onAfterEnter:this.onAfterEnter,onAfterLeave:this.onAfterLeave,trapFocus:this.trapFocus,autoFocus:this.autoFocus,resizable:this.resizable,showMask:this.showMask,onEsc:this.handleEsc,onClickoutside:this.handleMaskClick}),this.$slots)),[[br,{zIndex:this.zIndex,enabled:this.show}]])}})}}),El={title:{type:String},headerStyle:[Object,String],footerStyle:[Object,String],bodyStyle:[Object,String],bodyContentStyle:[Object,String],nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,closable:Boolean},Dl=E({name:"DrawerContent",props:El,setup(){const e=_e(go,null);e||an("drawer-content","`n-drawer-content` must be placed inside `n-drawer`.");const{doUpdateShow:t}=e;function o(){t(!1)}return{handleCloseClick:o,mergedTheme:e.mergedThemeRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{title:e,mergedClsPrefix:t,nativeScrollbar:o,mergedTheme:n,bodyStyle:r,bodyContentStyle:a,headerStyle:l,footerStyle:i,scrollbarProps:u,closable:v,$slots:g}=this;return c("div",{role:"none",class:[`${t}-drawer-content`,o&&`${t}-drawer-content--native-scrollbar`]},g.header||e||v?c("div",{class:`${t}-drawer-header`,style:l,role:"none"},c("div",{class:`${t}-drawer-header__main`,role:"heading","aria-level":"1"},g.header!==void 0?g.header():e),v&&c(ln,{onClick:this.handleCloseClick,clsPrefix:t,class:`${t}-drawer-header__close`,absolute:!0})):null,o?c("div",{class:`${t}-drawer-body`,style:r,role:"none"},c("div",{class:`${t}-drawer-body-content-wrapper`,style:a,role:"none"},g)):c(xo,Object.assign({themeOverrides:n.peerOverrides.Scrollbar,theme:n.peers.Scrollbar},u,{class:`${t}-drawer-body`,contentClass:`${t}-drawer-body-content-wrapper`,contentStyle:a}),g),g.footer?c("div",{class:`${t}-drawer-footer`,style:i,role:"none"},g.footer()):null)}}),Ll=e=>{const{textColorDisabled:t}=e;return{iconColorDisabled:t}},Vl=xr({name:"InputNumber",common:po,peers:{Button:_r,Input:yr},self:Ll}),Hl=Vl,Ul=e=>{const{primaryColor:t,opacityDisabled:o,borderRadius:n,textColor3:r}=e,a="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},wr),{iconColor:r,textColor:"white",loadingColor:t,opacityDisabled:o,railColor:a,railColorActive:t,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:n,railBorderRadiusMedium:n,railBorderRadiusLarge:n,buttonBorderRadiusSmall:n,buttonBorderRadiusMedium:n,buttonBorderRadiusLarge:n,boxShadowFocus:`0 0 0 2px ${Cr(t,{alpha:.2})}`})},Nl={name:"Switch",common:po,self:Ul},Ol=Nl;function jl(e){return e==null||typeof e=="string"&&e.trim()===""?null:Number(e)}function Wl(e){return e.includes(".")&&(/^(-)?\d+.*(\.|0)$/.test(e)||/^\.\d+$/.test(e))}function eo(e){return e==null?!0:!Number.isNaN(e)}function Wo(e,t){return e==null?"":t===void 0?String(e):e.toFixed(t)}function to(e){if(e===null)return null;if(typeof e=="number")return e;{const t=Number(e);return Number.isNaN(t)?null:t}}const Kl=y([p("input-number-suffix",`
 display: inline-block;
 margin-right: 10px;
 `),p("input-number-prefix",`
 display: inline-block;
 margin-left: 10px;
 `)]),Ko=800,qo=100,ql=Object.assign(Object.assign({},pe.props),{autofocus:Boolean,loading:{type:Boolean,default:void 0},placeholder:String,defaultValue:{type:Number,default:null},value:Number,step:{type:[Number,String],default:1},min:[Number,String],max:[Number,String],size:String,disabled:{type:Boolean,default:void 0},validator:Function,bordered:{type:Boolean,default:void 0},showButton:{type:Boolean,default:!0},buttonPlacement:{type:String,default:"right"},readonly:Boolean,clearable:Boolean,keyboard:{type:Object,default:{}},updateValueOnInput:{type:Boolean,default:!0},parse:Function,format:Function,precision:Number,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onChange:[Function,Array]}),Xl=E({name:"InputNumber",props:ql,setup(e){const{mergedBorderedRef:t,mergedClsPrefixRef:o,mergedRtlRef:n}=Ee(e),r=pe("InputNumber","-input-number",Kl,Hl,e,o),{localeRef:a}=hn("InputNumber"),l=bo(e),{mergedSizeRef:i,mergedDisabledRef:u,mergedStatusRef:v}=l,g=U(null),m=U(null),f=U(null),k=U(e.defaultValue),I=fe(e,"value"),T=Fe(I,k),F=U(""),D=h=>{const d=String(h).split(".")[1];return d?d.length:0},K=h=>{const d=[e.min,e.max,e.step,h].map(_=>_===void 0?0:D(_));return Math.max(...d)},H=Ae(()=>{const{placeholder:h}=e;return h!==void 0?h:a.value.placeholder}),N=Ae(()=>{const h=to(e.step);return h!==null?h===0?1:Math.abs(h):1}),M=Ae(()=>{const h=to(e.min);return h!==null?h:null}),B=Ae(()=>{const h=to(e.max);return h!==null?h:null}),L=h=>{const{value:d}=T;if(h===d){V();return}const{"onUpdate:value":_,onUpdateValue:j,onChange:G}=e,{nTriggerFormInput:Z,nTriggerFormChange:J}=l;G&&ee(G,h),j&&ee(j,h),_&&ee(_,h),k.value=h,Z(),J()},w=({offset:h,doUpdateIfValid:d,fixPrecision:_,isInputing:j})=>{const{value:G}=F;if(j&&Wl(G))return!1;const Z=(e.parse||jl)(G);if(Z===null)return d&&L(null),null;if(eo(Z)){const J=D(Z),{precision:ie}=e;if(ie!==void 0&&ie<J&&!_)return!1;let oe=parseFloat((Z+h).toFixed(ie??K(Z)));if(eo(oe)){const{value:ke}=B,{value:Ge}=M;if(ke!==null&&oe>ke){if(!d||j)return!1;oe=ke}if(Ge!==null&&oe<Ge){if(!d||j)return!1;oe=Ge}return e.validator&&!e.validator(oe)?!1:(d&&L(oe),oe)}}return!1},V=()=>{const{value:h}=T;if(eo(h)){const{format:d,precision:_}=e;d?F.value=d(h):h===null||_===void 0||D(h)>_?F.value=Wo(h,void 0):F.value=Wo(h,_)}else F.value=String(h)};V();const b=Ae(()=>w({offset:0,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})===!1),O=Ae(()=>{const{value:h}=T;if(e.validator&&h===null)return!1;const{value:d}=N;return w({offset:-d,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})!==!1}),Y=Ae(()=>{const{value:h}=T;if(e.validator&&h===null)return!1;const{value:d}=N;return w({offset:+d,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})!==!1});function te(h){const{onFocus:d}=e,{nTriggerFormFocus:_}=l;d&&ee(d,h),_()}function se(h){var d,_;if(h.target===((d=g.value)===null||d===void 0?void 0:d.wrapperElRef))return;const j=w({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0});if(j!==!1){const J=(_=g.value)===null||_===void 0?void 0:_.inputElRef;J&&(J.value=String(j||"")),T.value===j&&V()}else V();const{onBlur:G}=e,{nTriggerFormBlur:Z}=l;G&&ee(G,h),Z(),et(()=>{V()})}function re(h){const{onClear:d}=e;d&&ee(d,h)}function S(){const{value:h}=Y;if(!h){Ce();return}const{value:d}=T;if(d===null)e.validator||L(ye());else{const{value:_}=N;w({offset:_,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}function ue(){const{value:h}=O;if(!h){Q();return}const{value:d}=T;if(d===null)e.validator||L(ye());else{const{value:_}=N;w({offset:-_,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}const ce=te,De=se;function ye(){if(e.validator)return null;const{value:h}=M,{value:d}=B;return h!==null?Math.max(0,h):d!==null?Math.min(0,d):0}function he(h){re(h),L(null)}function ve(h){var d,_,j;!((d=f.value)===null||d===void 0)&&d.$el.contains(h.target)&&h.preventDefault(),!((_=m.value)===null||_===void 0)&&_.$el.contains(h.target)&&h.preventDefault(),(j=g.value)===null||j===void 0||j.activate()}let xe=null,we=null,$e=null;function Q(){$e&&(window.clearTimeout($e),$e=null),xe&&(window.clearInterval(xe),xe=null)}function Ce(){Ne&&(window.clearTimeout(Ne),Ne=null),we&&(window.clearInterval(we),we=null)}function me(){Q(),$e=window.setTimeout(()=>{xe=window.setInterval(()=>{ue()},qo)},Ko),qe("mouseup",document,Q,{once:!0})}let Ne=null;function Xe(){Ce(),Ne=window.setTimeout(()=>{we=window.setInterval(()=>{S()},qo)},Ko),qe("mouseup",document,Ce,{once:!0})}const yt=()=>{we||S()},ut=()=>{xe||ue()};function wt(h){var d,_;if(h.key==="Enter"){if(h.target===((d=g.value)===null||d===void 0?void 0:d.wrapperElRef))return;w({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&((_=g.value)===null||_===void 0||_.deactivate())}else if(h.key==="ArrowUp"){if(!Y.value||e.keyboard.ArrowUp===!1)return;h.preventDefault(),w({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&S()}else if(h.key==="ArrowDown"){if(!O.value||e.keyboard.ArrowDown===!1)return;h.preventDefault(),w({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&ue()}}function ht(h){F.value=h,e.updateValueOnInput&&!e.format&&!e.parse&&e.precision===void 0&&w({offset:0,doUpdateIfValid:!0,isInputing:!0,fixPrecision:!1})}be(T,()=>{V()});const Re={focus:()=>{var h;return(h=g.value)===null||h===void 0?void 0:h.focus()},blur:()=>{var h;return(h=g.value)===null||h===void 0?void 0:h.blur()}},$=rn("InputNumber",n,o);return Object.assign(Object.assign({},Re),{rtlEnabled:$,inputInstRef:g,minusButtonInstRef:m,addButtonInstRef:f,mergedClsPrefix:o,mergedBordered:t,uncontrolledValue:k,mergedValue:T,mergedPlaceholder:H,displayedValueInvalid:b,mergedSize:i,mergedDisabled:u,displayedValue:F,addable:Y,minusable:O,mergedStatus:v,handleFocus:ce,handleBlur:De,handleClear:he,handleMouseDown:ve,handleAddClick:yt,handleMinusClick:ut,handleAddMousedown:Xe,handleMinusMousedown:me,handleKeyDown:wt,handleUpdateDisplayedValue:ht,mergedTheme:r,inputThemeOverrides:{paddingSmall:"0 8px 0 10px",paddingMedium:"0 8px 0 12px",paddingLarge:"0 8px 0 14px"},buttonThemeOverrides:A(()=>{const{self:{iconColorDisabled:h}}=r.value,[d,_,j,G]=Pe(h);return{textColorTextDisabled:`rgb(${d}, ${_}, ${j})`,opacityDisabled:`${G}`}})})},render(){const{mergedClsPrefix:e,$slots:t}=this,o=()=>c(Eo,{text:!0,disabled:!this.minusable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleMinusClick,onMousedown:this.handleMinusMousedown,ref:"minusButtonInstRef"},{icon:()=>Lt(t["minus-icon"],()=>[c(St,{clsPrefix:e},{default:()=>c(Ma,null)})])}),n=()=>c(Eo,{text:!0,disabled:!this.addable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleAddClick,onMousedown:this.handleAddMousedown,ref:"addButtonInstRef"},{icon:()=>Lt(t["add-icon"],()=>[c(St,{clsPrefix:e},{default:()=>c(gn,null)})])});return c("div",{class:[`${e}-input-number`,this.rtlEnabled&&`${e}-input-number--rtl`]},c(un,{ref:"inputInstRef",autofocus:this.autofocus,status:this.mergedStatus,bordered:this.mergedBordered,loading:this.loading,value:this.displayedValue,onUpdateValue:this.handleUpdateDisplayedValue,theme:this.mergedTheme.peers.Input,themeOverrides:this.mergedTheme.peerOverrides.Input,builtinThemeOverrides:this.inputThemeOverrides,size:this.mergedSize,placeholder:this.mergedPlaceholder,disabled:this.mergedDisabled,readonly:this.readonly,textDecoration:this.displayedValueInvalid?"line-through":void 0,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onClear:this.handleClear,clearable:this.clearable,internalLoadingBeforeSuffix:!0},{prefix:()=>{var r;return this.showButton&&this.buttonPlacement==="both"?[o(),Ie(t.prefix,a=>a?c("span",{class:`${e}-input-number-prefix`},a):null)]:(r=t.prefix)===null||r===void 0?void 0:r.call(t)},suffix:()=>{var r;return this.showButton?[Ie(t.suffix,a=>a?c("span",{class:`${e}-input-number-suffix`},a):null),this.buttonPlacement==="right"?o():null,n()]:(r=t.suffix)===null||r===void 0?void 0:r.call(t)}}))}}),Gl=st("n-layout-sider"),Mt=st("n-menu"),$o=st("n-submenu"),Ro=st("n-menu-item-group"),Ft=8;function Bo(e){const t=_e(Mt),{props:o,mergedCollapsedRef:n}=t,r=_e($o,null),a=_e(Ro,null),l=A(()=>o.mode==="horizontal"),i=A(()=>l.value?o.dropdownPlacement:"tmNodes"in e?"right-start":"right"),u=A(()=>{var f;return Math.max((f=o.collapsedIconSize)!==null&&f!==void 0?f:o.iconSize,o.iconSize)}),v=A(()=>{var f;return!l.value&&e.root&&n.value&&(f=o.collapsedIconSize)!==null&&f!==void 0?f:o.iconSize}),g=A(()=>{if(l.value)return;const{collapsedWidth:f,indent:k,rootIndent:I}=o,{root:T,isGroup:F}=e,D=I===void 0?k:I;if(T)return n.value?f/2-u.value/2:D;if(a)return k/2+a.paddingLeftRef.value;if(r)return(F?k/2:k)+r.paddingLeftRef.value}),m=A(()=>{const{collapsedWidth:f,indent:k,rootIndent:I}=o,{value:T}=u,{root:F}=e;return l.value||!F||!n.value?Ft:(I===void 0?k:I)+T+Ft-(f+T)/2});return{dropdownPlacement:i,activeIconSize:v,maxIconSize:u,paddingLeft:g,iconMarginRight:m,NMenu:t,NSubmenu:r}}const Mo={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},yn=Object.assign(Object.assign({},Mo),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),Yl=E({name:"MenuOptionGroup",props:yn,setup(e){Be($o,null);const t=Bo(e);Be(Ro,{paddingLeftRef:t.paddingLeft});const{mergedClsPrefixRef:o,props:n}=_e(Mt);return function(){const{value:r}=o,a=t.paddingLeft.value,{nodeProps:l}=n,i=l==null?void 0:l(e.tmNode.rawNode);return c("div",{class:`${r}-menu-item-group`,role:"group"},c("div",Object.assign({},i,{class:[`${r}-menu-item-group-title`,i==null?void 0:i.class],style:[(i==null?void 0:i.style)||"",a!==void 0?`padding-left: ${a}px;`:""]}),nt(e.title),e.extra?c(ae,null," ",nt(e.extra)):null),c("div",null,e.tmNodes.map(u=>Io(u,n))))}}}),wn=E({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:t}=_e(Mt);return{menuProps:t,style:A(()=>{const{paddingLeft:o}=e;return{paddingLeft:o&&`${o}px`}}),iconStyle:A(()=>{const{maxIconSize:o,activeIconSize:n,iconMarginRight:r}=e;return{width:`${o}px`,height:`${o}px`,fontSize:`${n}px`,marginRight:`${r}px`}})}},render(){const{clsPrefix:e,tmNode:t,menuProps:{renderIcon:o,renderLabel:n,renderExtra:r,expandIcon:a}}=this,l=o?o(t.rawNode):nt(this.icon);return c("div",{onClick:i=>{var u;(u=this.onClick)===null||u===void 0||u.call(this,i)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},l&&c("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[l]),c("div",{class:`${e}-menu-item-content-header`,role:"none"},n?n(t.rawNode):nt(this.title),this.extra||r?c("span",{class:`${e}-menu-item-content-header__extra`}," ",r?r(t.rawNode):nt(this.extra)):null),this.showArrow?c(St,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>a?a(t.rawNode):c(Ia,null)}):null)}}),Cn=Object.assign(Object.assign({},Mo),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),Zl=E({name:"Submenu",props:Cn,setup(e){const t=Bo(e),{NMenu:o,NSubmenu:n}=t,{props:r,mergedCollapsedRef:a,mergedThemeRef:l}=o,i=A(()=>{const{disabled:f}=e;return n!=null&&n.mergedDisabledRef.value||r.disabled?!0:f}),u=U(!1);Be($o,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:i}),Be(Ro,null);function v(){const{onClick:f}=e;f&&f()}function g(){i.value||(a.value||o.toggleExpand(e.internalKey),v())}function m(f){u.value=f}return{menuProps:r,mergedTheme:l,doSelect:o.doSelect,inverted:o.invertedRef,isHorizontal:o.isHorizontalRef,mergedClsPrefix:o.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:u,paddingLeft:t.paddingLeft,mergedDisabled:i,mergedValue:o.mergedValueRef,childActive:Ae(()=>o.activePathRef.value.includes(e.internalKey)),collapsed:A(()=>r.mode==="horizontal"?!1:a.value?!0:!o.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:A(()=>!i.value&&(r.mode==="horizontal"||a.value)),handlePopoverShowChange:m,handleClick:g}},render(){var e;const{mergedClsPrefix:t,menuProps:{renderIcon:o,renderLabel:n}}=this,r=()=>{const{isHorizontal:l,paddingLeft:i,collapsed:u,mergedDisabled:v,maxIconSize:g,activeIconSize:m,title:f,childActive:k,icon:I,handleClick:T,menuProps:{nodeProps:F},dropdownShow:D,iconMarginRight:K,tmNode:H,mergedClsPrefix:N}=this,M=F==null?void 0:F(H.rawNode);return c("div",Object.assign({},M,{class:[`${N}-menu-item`,M==null?void 0:M.class],role:"menuitem"}),c(wn,{tmNode:H,paddingLeft:i,collapsed:u,disabled:v,iconMarginRight:K,maxIconSize:g,activeIconSize:m,title:f,extra:this.extra,showArrow:!l,childActive:k,clsPrefix:N,icon:I,hover:D,onClick:T}))},a=()=>c(kr,null,{default:()=>{const{tmNodes:l,collapsed:i}=this;return i?null:c("div",{class:`${t}-submenu-children`,role:"menu"},l.map(u=>Io(u,this.menuProps)))}});return this.root?c(Wt,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:o,renderLabel:n}),{default:()=>c("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},r(),this.isHorizontal?null:a())}):c("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},r(),a())}}),kn=Object.assign(Object.assign({},Mo),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),Jl=E({name:"MenuOption",props:kn,setup(e){const t=Bo(e),{NSubmenu:o,NMenu:n}=t,{props:r,mergedClsPrefixRef:a,mergedCollapsedRef:l}=n,i=o?o.mergedDisabledRef:{value:!1},u=A(()=>i.value||e.disabled);function v(m){const{onClick:f}=e;f&&f(m)}function g(m){u.value||(n.doSelect(e.internalKey,e.tmNode.rawNode),v(m))}return{mergedClsPrefix:a,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:n.mergedThemeRef,menuProps:r,dropdownEnabled:Ae(()=>e.root&&l.value&&r.mode!=="horizontal"&&!u.value),selected:Ae(()=>n.mergedValueRef.value===e.internalKey),mergedDisabled:u,handleClick:g}},render(){const{mergedClsPrefix:e,mergedTheme:t,tmNode:o,menuProps:{renderLabel:n,nodeProps:r}}=this,a=r==null?void 0:r(o.rawNode);return c("div",Object.assign({},a,{role:"menuitem",class:[`${e}-menu-item`,a==null?void 0:a.class]}),c(zo,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>n?n(o.rawNode):nt(this.title),trigger:()=>c(wn,{tmNode:o,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),Ql=E({name:"MenuDivider",setup(){const e=_e(Mt),{mergedClsPrefixRef:t,isHorizontalRef:o}=e;return()=>o.value?null:c("div",{class:`${t.value}-menu-divider`})}}),ei=_o(yn),ti=_o(kn),oi=_o(Cn);function zn(e){return e.type==="divider"||e.type==="render"}function ni(e){return e.type==="divider"}function Io(e,t){const{rawNode:o}=e,{show:n}=o;if(n===!1)return null;if(zn(o))return ni(o)?c(Ql,Object.assign({key:e.key},o.props)):null;const{labelField:r}=t,{key:a,level:l,isGroup:i}=e,u=Object.assign(Object.assign({},o),{title:o.title||o[r],extra:o.titleExtra||o.extra,key:a,internalKey:a,level:l,root:l===0,isGroup:i});return e.children?e.isGroup?c(Yl,Xt(u,ei,{tmNode:e,tmNodes:e.children,key:a})):c(Zl,Xt(u,oi,{key:a,rawNodes:o[t.childrenField],tmNodes:e.children,tmNode:e})):c(Jl,Xt(u,ti,{key:a,tmNode:e}))}const Xo=[y("&::before","background-color: var(--n-item-color-hover);"),z("arrow",`
 color: var(--n-arrow-color-hover);
 `),z("icon",`
 color: var(--n-item-icon-color-hover);
 `),p("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[y("a",`
 color: var(--n-item-text-color-hover);
 `),z("extra",`
 color: var(--n-item-text-color-hover);
 `)])],Go=[z("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),p("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[y("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),z("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],ri=y([p("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[P("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[p("submenu","margin: 0;"),p("menu-item","margin: 0;"),p("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[y("&::before","display: none;"),P("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),p("menu-item-content",[P("selected",[z("icon","color: var(--n-item-icon-color-active-horizontal);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[y("a","color: var(--n-item-text-color-active-horizontal);"),z("extra","color: var(--n-item-text-color-active-horizontal);")])]),P("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[p("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[y("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),z("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),z("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),Qe("disabled",[Qe("selected, child-active",[y("&:focus-within",Go)]),P("selected",[Je(null,[z("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[y("a","color: var(--n-item-text-color-active-hover-horizontal);"),z("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),P("child-active",[Je(null,[z("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[y("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),z("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),Je("border-bottom: 2px solid var(--n-border-color-horizontal);",Go)]),p("menu-item-content-header",[y("a","color: var(--n-item-text-color-horizontal);")])])]),P("collapsed",[p("menu-item-content",[P("selected",[y("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),p("menu-item-content-header","opacity: 0;"),z("arrow","opacity: 0;"),z("icon","color: var(--n-item-icon-color-collapsed);")])]),p("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),p("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[y("> *","z-index: 1;"),y("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),P("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),P("collapsed",[z("arrow","transform: rotate(0);")]),P("selected",[y("&::before","background-color: var(--n-item-color-active);"),z("arrow","color: var(--n-arrow-color-active);"),z("icon","color: var(--n-item-icon-color-active);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[y("a","color: var(--n-item-text-color-active);"),z("extra","color: var(--n-item-text-color-active);")])]),P("child-active",[p("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[y("a",`
 color: var(--n-item-text-color-child-active);
 `),z("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),z("arrow",`
 color: var(--n-arrow-color-child-active);
 `),z("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),Qe("disabled",[Qe("selected, child-active",[y("&:focus-within",Xo)]),P("selected",[Je(null,[z("arrow","color: var(--n-arrow-color-active-hover);"),z("icon","color: var(--n-item-icon-color-active-hover);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[y("a","color: var(--n-item-text-color-active-hover);"),z("extra","color: var(--n-item-text-color-active-hover);")])])]),P("child-active",[Je(null,[z("arrow","color: var(--n-arrow-color-child-active-hover);"),z("icon","color: var(--n-item-icon-color-child-active-hover);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[y("a","color: var(--n-item-text-color-child-active-hover);"),z("extra","color: var(--n-item-text-color-child-active-hover);")])])]),P("selected",[Je(null,[y("&::before","background-color: var(--n-item-color-active-hover);")])]),Je(null,Xo)]),z("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),z("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),p("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `,[y("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[y("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),z("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),p("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[p("menu-item-content",`
 height: var(--n-item-height);
 `),p("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[zr({duration:".2s"})])]),p("menu-item-group",[p("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),p("menu-tooltip",[y("a",`
 color: inherit;
 text-decoration: none;
 `)]),p("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function Je(e,t){return[P("hover",e,t),y("&:hover",e,t)]}const ai=Object.assign(Object.assign({},pe.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}}),Ao=E({name:"Menu",props:ai,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Ee(e),n=pe("Menu","-menu",ri,Sr,e,t),r=_e(Gl,null),a=A(()=>{var w;const{collapsed:V}=e;if(V!==void 0)return V;if(r){const{collapseModeRef:b,collapsedRef:O}=r;if(b.value==="width")return(w=O.value)!==null&&w!==void 0?w:!1}return!1}),l=A(()=>{const{keyField:w,childrenField:V,disabledField:b}=e;return ca(e.items||e.options,{getIgnored(O){return zn(O)},getChildren(O){return O[V]},getDisabled(O){return O[b]},getKey(O){var Y;return(Y=O[w])!==null&&Y!==void 0?Y:O.name}})}),i=A(()=>new Set(l.value.treeNodes.map(w=>w.key))),{watchProps:u}=e,v=U(null);u!=null&&u.includes("defaultValue")?rt(()=>{v.value=e.defaultValue}):v.value=e.defaultValue;const g=fe(e,"value"),m=Fe(g,v),f=U([]),k=()=>{f.value=e.defaultExpandAll?l.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||l.value.getPath(m.value,{includeSelf:!1}).keyPath};u!=null&&u.includes("defaultExpandedKeys")?rt(k):k();const I=so(e,["expandedNames","expandedKeys"]),T=Fe(I,f),F=A(()=>l.value.treeNodes),D=A(()=>l.value.getPath(m.value).keyPath);Be(Mt,{props:e,mergedCollapsedRef:a,mergedThemeRef:n,mergedValueRef:m,mergedExpandedKeysRef:T,activePathRef:D,mergedClsPrefixRef:t,isHorizontalRef:A(()=>e.mode==="horizontal"),invertedRef:fe(e,"inverted"),doSelect:K,toggleExpand:N});function K(w,V){const{"onUpdate:value":b,onUpdateValue:O,onSelect:Y}=e;O&&ee(O,w,V),b&&ee(b,w,V),Y&&ee(Y,w,V),v.value=w}function H(w){const{"onUpdate:expandedKeys":V,onUpdateExpandedKeys:b,onExpandedNamesChange:O,onOpenNamesChange:Y}=e;V&&ee(V,w),b&&ee(b,w),O&&ee(O,w),Y&&ee(Y,w),f.value=w}function N(w){const V=Array.from(T.value),b=V.findIndex(O=>O===w);if(~b)V.splice(b,1);else{if(e.accordion&&i.value.has(w)){const O=V.findIndex(Y=>i.value.has(Y));O>-1&&V.splice(O,1)}V.push(w)}H(V)}const M=w=>{const V=l.value.getPath(w??m.value,{includeSelf:!1}).keyPath;if(!V.length)return;const b=Array.from(T.value),O=new Set([...b,...V]);e.accordion&&i.value.forEach(Y=>{O.has(Y)&&!V.includes(Y)&&O.delete(Y)}),H(Array.from(O))},B=A(()=>{const{inverted:w}=e,{common:{cubicBezierEaseInOut:V},self:b}=n.value,{borderRadius:O,borderColorHorizontal:Y,fontSize:te,itemHeight:se,dividerColor:re}=b,S={"--n-divider-color":re,"--n-bezier":V,"--n-font-size":te,"--n-border-color-horizontal":Y,"--n-border-radius":O,"--n-item-height":se};return w?(S["--n-group-text-color"]=b.groupTextColorInverted,S["--n-color"]=b.colorInverted,S["--n-item-text-color"]=b.itemTextColorInverted,S["--n-item-text-color-hover"]=b.itemTextColorHoverInverted,S["--n-item-text-color-active"]=b.itemTextColorActiveInverted,S["--n-item-text-color-child-active"]=b.itemTextColorChildActiveInverted,S["--n-item-text-color-child-active-hover"]=b.itemTextColorChildActiveInverted,S["--n-item-text-color-active-hover"]=b.itemTextColorActiveHoverInverted,S["--n-item-icon-color"]=b.itemIconColorInverted,S["--n-item-icon-color-hover"]=b.itemIconColorHoverInverted,S["--n-item-icon-color-active"]=b.itemIconColorActiveInverted,S["--n-item-icon-color-active-hover"]=b.itemIconColorActiveHoverInverted,S["--n-item-icon-color-child-active"]=b.itemIconColorChildActiveInverted,S["--n-item-icon-color-child-active-hover"]=b.itemIconColorChildActiveHoverInverted,S["--n-item-icon-color-collapsed"]=b.itemIconColorCollapsedInverted,S["--n-item-text-color-horizontal"]=b.itemTextColorHorizontalInverted,S["--n-item-text-color-hover-horizontal"]=b.itemTextColorHoverHorizontalInverted,S["--n-item-text-color-active-horizontal"]=b.itemTextColorActiveHorizontalInverted,S["--n-item-text-color-child-active-horizontal"]=b.itemTextColorChildActiveHorizontalInverted,S["--n-item-text-color-child-active-hover-horizontal"]=b.itemTextColorChildActiveHoverHorizontalInverted,S["--n-item-text-color-active-hover-horizontal"]=b.itemTextColorActiveHoverHorizontalInverted,S["--n-item-icon-color-horizontal"]=b.itemIconColorHorizontalInverted,S["--n-item-icon-color-hover-horizontal"]=b.itemIconColorHoverHorizontalInverted,S["--n-item-icon-color-active-horizontal"]=b.itemIconColorActiveHorizontalInverted,S["--n-item-icon-color-active-hover-horizontal"]=b.itemIconColorActiveHoverHorizontalInverted,S["--n-item-icon-color-child-active-horizontal"]=b.itemIconColorChildActiveHorizontalInverted,S["--n-item-icon-color-child-active-hover-horizontal"]=b.itemIconColorChildActiveHoverHorizontalInverted,S["--n-arrow-color"]=b.arrowColorInverted,S["--n-arrow-color-hover"]=b.arrowColorHoverInverted,S["--n-arrow-color-active"]=b.arrowColorActiveInverted,S["--n-arrow-color-active-hover"]=b.arrowColorActiveHoverInverted,S["--n-arrow-color-child-active"]=b.arrowColorChildActiveInverted,S["--n-arrow-color-child-active-hover"]=b.arrowColorChildActiveHoverInverted,S["--n-item-color-hover"]=b.itemColorHoverInverted,S["--n-item-color-active"]=b.itemColorActiveInverted,S["--n-item-color-active-hover"]=b.itemColorActiveHoverInverted,S["--n-item-color-active-collapsed"]=b.itemColorActiveCollapsedInverted):(S["--n-group-text-color"]=b.groupTextColor,S["--n-color"]=b.color,S["--n-item-text-color"]=b.itemTextColor,S["--n-item-text-color-hover"]=b.itemTextColorHover,S["--n-item-text-color-active"]=b.itemTextColorActive,S["--n-item-text-color-child-active"]=b.itemTextColorChildActive,S["--n-item-text-color-child-active-hover"]=b.itemTextColorChildActiveHover,S["--n-item-text-color-active-hover"]=b.itemTextColorActiveHover,S["--n-item-icon-color"]=b.itemIconColor,S["--n-item-icon-color-hover"]=b.itemIconColorHover,S["--n-item-icon-color-active"]=b.itemIconColorActive,S["--n-item-icon-color-active-hover"]=b.itemIconColorActiveHover,S["--n-item-icon-color-child-active"]=b.itemIconColorChildActive,S["--n-item-icon-color-child-active-hover"]=b.itemIconColorChildActiveHover,S["--n-item-icon-color-collapsed"]=b.itemIconColorCollapsed,S["--n-item-text-color-horizontal"]=b.itemTextColorHorizontal,S["--n-item-text-color-hover-horizontal"]=b.itemTextColorHoverHorizontal,S["--n-item-text-color-active-horizontal"]=b.itemTextColorActiveHorizontal,S["--n-item-text-color-child-active-horizontal"]=b.itemTextColorChildActiveHorizontal,S["--n-item-text-color-child-active-hover-horizontal"]=b.itemTextColorChildActiveHoverHorizontal,S["--n-item-text-color-active-hover-horizontal"]=b.itemTextColorActiveHoverHorizontal,S["--n-item-icon-color-horizontal"]=b.itemIconColorHorizontal,S["--n-item-icon-color-hover-horizontal"]=b.itemIconColorHoverHorizontal,S["--n-item-icon-color-active-horizontal"]=b.itemIconColorActiveHorizontal,S["--n-item-icon-color-active-hover-horizontal"]=b.itemIconColorActiveHoverHorizontal,S["--n-item-icon-color-child-active-horizontal"]=b.itemIconColorChildActiveHorizontal,S["--n-item-icon-color-child-active-hover-horizontal"]=b.itemIconColorChildActiveHoverHorizontal,S["--n-arrow-color"]=b.arrowColor,S["--n-arrow-color-hover"]=b.arrowColorHover,S["--n-arrow-color-active"]=b.arrowColorActive,S["--n-arrow-color-active-hover"]=b.arrowColorActiveHover,S["--n-arrow-color-child-active"]=b.arrowColorChildActive,S["--n-arrow-color-child-active-hover"]=b.arrowColorChildActiveHover,S["--n-item-color-hover"]=b.itemColorHover,S["--n-item-color-active"]=b.itemColorActive,S["--n-item-color-active-hover"]=b.itemColorActiveHover,S["--n-item-color-active-collapsed"]=b.itemColorActiveCollapsed),S}),L=o?it("menu",A(()=>e.inverted?"a":"b"),B,e):void 0;return{mergedClsPrefix:t,controlledExpandedKeys:I,uncontrolledExpanededKeys:f,mergedExpandedKeys:T,uncontrolledValue:v,mergedValue:m,activePath:D,tmNodes:F,mergedTheme:n,mergedCollapsed:a,cssVars:o?void 0:B,themeClass:L==null?void 0:L.themeClass,onRender:L==null?void 0:L.onRender,showOption:M}},render(){const{mergedClsPrefix:e,mode:t,themeClass:o,onRender:n}=this;return n==null||n(),c("div",{role:t==="horizontal"?"menubar":"menu",class:[`${e}-menu`,o,`${e}-menu--${t}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(r=>Io(r,this.$props)))}}),li=Object.assign(Object.assign({},pe.props),{trigger:String,xScrollable:Boolean,onScroll:Function,size:Number}),ii=E({name:"Scrollbar",props:li,setup(){const e=U(null);return Object.assign(Object.assign({},{scrollTo:(...o)=>{var n;(n=e.value)===null||n===void 0||n.scrollTo(o[0],o[1])},scrollBy:(...o)=>{var n;(n=e.value)===null||n===void 0||n.scrollBy(o[0],o[1])}}),{scrollbarInstRef:e})},render(){return c(xo,Object.assign({ref:"scrollbarInstRef"},this.$props),this.$slots)}}),Kt=ii,si=p("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[z("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),z("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),z("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),p("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[Do({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),z("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),z("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),z("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),y("&:focus",[z("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),P("round",[z("rail","border-radius: calc(var(--n-rail-height) / 2);",[z("button","border-radius: calc(var(--n-button-height) / 2);")])]),Qe("disabled",[Qe("icon",[P("rubber-band",[P("pressed",[z("rail",[z("button","max-width: var(--n-button-width-pressed);")])]),z("rail",[y("&:active",[z("button","max-width: var(--n-button-width-pressed);")])]),P("active",[P("pressed",[z("rail",[z("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),z("rail",[y("&:active",[z("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),P("active",[z("rail",[z("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),z("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[z("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[Do()]),z("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),P("active",[z("rail","background-color: var(--n-rail-color-active);")]),P("loading",[z("rail",`
 cursor: wait;
 `)]),P("disabled",[z("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),ci=Object.assign(Object.assign({},pe.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let kt;const Po=E({name:"Switch",props:ci,setup(e){kt===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?kt=CSS.supports("width","max(1px)"):kt=!1:kt=!0);const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Ee(e),n=pe("Switch","-switch",si,Ol,e,t),r=bo(e),{mergedSizeRef:a,mergedDisabledRef:l}=r,i=U(e.defaultValue),u=fe(e,"value"),v=Fe(u,i),g=A(()=>v.value===e.checkedValue),m=U(!1),f=U(!1),k=A(()=>{const{railStyle:w}=e;if(w)return w({focused:f.value,checked:g.value})});function I(w){const{"onUpdate:value":V,onChange:b,onUpdateValue:O}=e,{nTriggerFormInput:Y,nTriggerFormChange:te}=r;V&&ee(V,w),O&&ee(O,w),b&&ee(b,w),i.value=w,Y(),te()}function T(){const{nTriggerFormFocus:w}=r;w()}function F(){const{nTriggerFormBlur:w}=r;w()}function D(){e.loading||l.value||(v.value!==e.checkedValue?I(e.checkedValue):I(e.uncheckedValue))}function K(){f.value=!0,T()}function H(){f.value=!1,F(),m.value=!1}function N(w){e.loading||l.value||w.key===" "&&(v.value!==e.checkedValue?I(e.checkedValue):I(e.uncheckedValue),m.value=!1)}function M(w){e.loading||l.value||w.key===" "&&(w.preventDefault(),m.value=!0)}const B=A(()=>{const{value:w}=a,{self:{opacityDisabled:V,railColor:b,railColorActive:O,buttonBoxShadow:Y,buttonColor:te,boxShadowFocus:se,loadingColor:re,textColor:S,iconColor:ue,[de("buttonHeight",w)]:ce,[de("buttonWidth",w)]:De,[de("buttonWidthPressed",w)]:ye,[de("railHeight",w)]:he,[de("railWidth",w)]:ve,[de("railBorderRadius",w)]:xe,[de("buttonBorderRadius",w)]:we},common:{cubicBezierEaseInOut:$e}}=n.value;let Q,Ce,me;return kt?(Q=`calc((${he} - ${ce}) / 2)`,Ce=`max(${he}, ${ce})`,me=`max(${ve}, calc(${ve} + ${ce} - ${he}))`):(Q=Gt((Le(he)-Le(ce))/2),Ce=Gt(Math.max(Le(he),Le(ce))),me=Le(he)>Le(ce)?ve:Gt(Le(ve)+Le(ce)-Le(he))),{"--n-bezier":$e,"--n-button-border-radius":we,"--n-button-box-shadow":Y,"--n-button-color":te,"--n-button-width":De,"--n-button-width-pressed":ye,"--n-button-height":ce,"--n-height":Ce,"--n-offset":Q,"--n-opacity-disabled":V,"--n-rail-border-radius":xe,"--n-rail-color":b,"--n-rail-color-active":O,"--n-rail-height":he,"--n-rail-width":ve,"--n-width":me,"--n-box-shadow-focus":se,"--n-loading-color":re,"--n-text-color":S,"--n-icon-color":ue}}),L=o?it("switch",A(()=>a.value[0]),B,e):void 0;return{handleClick:D,handleBlur:H,handleFocus:K,handleKeyup:N,handleKeydown:M,mergedRailStyle:k,pressed:m,mergedClsPrefix:t,mergedValue:v,checked:g,mergedDisabled:l,cssVars:o?void 0:B,themeClass:L==null?void 0:L.themeClass,onRender:L==null?void 0:L.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:t,checked:o,mergedRailStyle:n,onRender:r,$slots:a}=this;r==null||r();const{checked:l,unchecked:i,icon:u,"checked-icon":v,"unchecked-icon":g}=a,m=!(Yt(u)&&Yt(v)&&Yt(g));return c("div",{role:"switch","aria-checked":o,class:[`${e}-switch`,this.themeClass,m&&`${e}-switch--icon`,o&&`${e}-switch--active`,t&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},c("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:n},Ie(l,f=>Ie(i,k=>f||k?c("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},c("div",{class:`${e}-switch__rail-placeholder`},c("div",{class:`${e}-switch__button-placeholder`}),f),c("div",{class:`${e}-switch__rail-placeholder`},c("div",{class:`${e}-switch__button-placeholder`}),k)):null)),c("div",{class:`${e}-switch__button`},Ie(u,f=>Ie(v,k=>Ie(g,I=>c($r,null,{default:()=>this.loading?c(Rr,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(k||f)?c("div",{class:`${e}-switch__button-icon`,key:k?"checked-icon":"icon"},k||f):!this.checked&&(I||f)?c("div",{class:`${e}-switch__button-icon`,key:I?"unchecked-icon":"icon"},I||f):null})))),Ie(l,f=>f&&c("div",{key:"checked",class:`${e}-switch__checked`},f)),Ie(i,f=>f&&c("div",{key:"unchecked",class:`${e}-switch__unchecked`},f)))))}}),To=st("n-tabs"),Sn={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},di=E({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:Sn,setup(e){const t=_e(To,null);return t||an("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return c("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),ui=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},Br(Sn,["displayDirective"])),fo=E({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:ui,setup(e){const{mergedClsPrefixRef:t,valueRef:o,typeRef:n,closableRef:r,tabStyleRef:a,tabChangeIdRef:l,onBeforeLeaveRef:i,triggerRef:u,handleAdd:v,activateTab:g,handleClose:m}=_e(To);return{trigger:u,mergedClosable:A(()=>{if(e.internalAddable)return!1;const{closable:f}=e;return f===void 0?r.value:f}),style:a,clsPrefix:t,value:o,type:n,handleClose(f){f.stopPropagation(),!e.disabled&&m(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){v();return}const{name:f}=e,k=++l.id;if(f!==o.value){const{value:I}=i;I?Promise.resolve(I(e.name,o.value)).then(T=>{T&&l.id===k&&g(f)}):g(f)}}}},render(){const{internalAddable:e,clsPrefix:t,name:o,disabled:n,label:r,tab:a,value:l,mergedClosable:i,style:u,trigger:v,$slots:{default:g}}=this,m=r??a;return c("div",{class:`${t}-tabs-tab-wrapper`},this.internalLeftPadded?c("div",{class:`${t}-tabs-tab-pad`}):null,c("div",Object.assign({key:o,"data-name":o,"data-disabled":n?!0:void 0},mo({class:[`${t}-tabs-tab`,l===o&&`${t}-tabs-tab--active`,n&&`${t}-tabs-tab--disabled`,i&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`],onClick:v==="click"?this.activateTab:void 0,onMouseenter:v==="hover"?this.activateTab:void 0,style:e?void 0:u},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),c("span",{class:`${t}-tabs-tab__label`},e?c(ae,null,c("div",{class:`${t}-tabs-tab__height-placeholder`}," "),c(St,{clsPrefix:t},{default:()=>c(gn,null)})):g?g():typeof m=="object"?m:nt(m??o)),i&&this.type==="card"?c(ln,{clsPrefix:t,class:`${t}-tabs-tab__close`,onClick:this.handleClose,disabled:n}):null))}}),hi=p("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[P("segment-type",[p("tabs-rail",[y("&.transition-disabled","color: red;",[p("tabs-tab",`
 transition: none;
 `)])])]),P("top",[p("tab-pane",`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),P("left",[p("tab-pane",`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),P("left, right",`
 flex-direction: row;
 `,[p("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),p("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),P("right",`
 flex-direction: row-reverse;
 `,[p("tab-pane",`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),p("tabs-bar",`
 left: 0;
 `)]),P("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[p("tab-pane",`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),p("tabs-bar",`
 top: 0;
 `)]),p("tabs-rail",`
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[p("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[p("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[P("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 `),y("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),P("flex",[p("tabs-nav",{width:"100%"},[p("tabs-wrapper",{width:"100%"},[p("tabs-tab",{marginRight:0})])])]),p("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[z("prefix, suffix",`
 display: flex;
 align-items: center;
 `),z("prefix","padding-right: 16px;"),z("suffix","padding-left: 16px;")]),P("top, bottom",[p("tabs-nav-scroll-wrapper",[y("&::before",`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),y("&::after",`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),P("shadow-start",[y("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),P("shadow-end",[y("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])]),P("left, right",[p("tabs-nav-scroll-wrapper",[y("&::before",`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),y("&::after",`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),P("shadow-start",[y("&::before",`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),P("shadow-end",[y("&::after",`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])]),p("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[p("tabs-nav-y-scroll",`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[y("&::-webkit-scrollbar",`
 width: 0;
 height: 0;
 `)]),y("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),p("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),p("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),p("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),p("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[P("disabled",{cursor:"not-allowed"}),z("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),z("label",`
 display: flex;
 align-items: center;
 `)]),p("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[y("&.transition-disabled",`
 transition: none;
 `),P("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),p("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),p("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[y("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),y("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),y("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),y("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),y("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),p("tabs-tab-pad",`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),P("line-type, bar-type",[p("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[y("&:hover",{color:"var(--n-tab-text-color-hover)"}),P("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),P("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),p("tabs-nav",[P("line-type",[P("top",[z("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),p("tabs-nav-scroll-content",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),p("tabs-bar",`
 bottom: -1px;
 `)]),P("left",[z("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),p("tabs-nav-scroll-content",`
 border-right: 1px solid var(--n-tab-border-color);
 `),p("tabs-bar",`
 right: -1px;
 `)]),P("right",[z("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),p("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `),p("tabs-bar",`
 left: -1px;
 `)]),P("bottom",[z("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),p("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 `),p("tabs-bar",`
 top: -1px;
 `)]),z("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),p("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 `),p("tabs-bar",`
 border-radius: 0;
 `)]),P("card-type",[z("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),p("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),p("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 `),p("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[P("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[z("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),Qe("disabled",[y("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),P("closable","padding-right: 8px;"),P("active",`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),P("disabled","color: var(--n-tab-text-color-disabled);")]),p("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")]),P("left, right",[p("tabs-wrapper",`
 flex-direction: column;
 `,[p("tabs-tab-wrapper",`
 flex-direction: column;
 `,[p("tabs-tab-pad",`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])])]),P("top",[P("card-type",[p("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[P("active",`
 border-bottom: 1px solid #0000;
 `)]),p("tabs-tab-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),P("left",[P("card-type",[p("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[P("active",`
 border-right: 1px solid #0000;
 `)]),p("tabs-tab-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),P("right",[P("card-type",[p("tabs-tab",`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[P("active",`
 border-left: 1px solid #0000;
 `)]),p("tabs-tab-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),P("bottom",[P("card-type",[p("tabs-tab",`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[P("active",`
 border-top: 1px solid #0000;
 `)]),p("tabs-tab-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),fi=Object.assign(Object.assign({},pe.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),pi=E({name:"Tabs",props:fi,setup(e,{slots:t}){var o,n,r,a;const{mergedClsPrefixRef:l,inlineThemeDisabled:i}=Ee(e),u=pe("Tabs","-tabs",hi,Mr,e,l),v=U(null),g=U(null),m=U(null),f=U(null),k=U(null),I=U(!0),T=U(!0),F=so(e,["labelSize","size"]),D=so(e,["activeName","value"]),K=U((n=(o=D.value)!==null&&o!==void 0?o:e.defaultValue)!==null&&n!==void 0?n:t.default?(a=(r=Zt(t.default())[0])===null||r===void 0?void 0:r.props)===null||a===void 0?void 0:a.name:null),H=Fe(D,K),N={id:0},M=A(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});be(H,()=>{N.id=0,V(),b()});function B(){var $;const{value:h}=H;return h===null?null:($=v.value)===null||$===void 0?void 0:$.querySelector(`[data-name="${h}"]`)}function L($){if(e.type==="card")return;const{value:h}=g;if(h&&$){const d=`${l.value}-tabs-bar--disabled`,{barWidth:_,placement:j}=e;if($.dataset.disabled==="true"?h.classList.add(d):h.classList.remove(d),["top","bottom"].includes(j)){if(w(["top","maxHeight","height"]),typeof _=="number"&&$.offsetWidth>=_){const G=Math.floor(($.offsetWidth-_)/2)+$.offsetLeft;h.style.left=`${G}px`,h.style.maxWidth=`${_}px`}else h.style.left=`${$.offsetLeft}px`,h.style.maxWidth=`${$.offsetWidth}px`;h.style.width="8192px",h.offsetWidth}else{if(w(["left","maxWidth","width"]),typeof _=="number"&&$.offsetHeight>=_){const G=Math.floor(($.offsetHeight-_)/2)+$.offsetTop;h.style.top=`${G}px`,h.style.maxHeight=`${_}px`}else h.style.top=`${$.offsetTop}px`,h.style.maxHeight=`${$.offsetHeight}px`;h.style.height="8192px",h.offsetHeight}}}function w($){const{value:h}=g;if(h)for(const d of $)h.style[d]=""}function V(){if(e.type==="card")return;const $=B();$&&L($)}function b($){var h;const d=(h=k.value)===null||h===void 0?void 0:h.$el;if(!d)return;const _=B();if(!_)return;const{scrollLeft:j,offsetWidth:G}=d,{offsetLeft:Z,offsetWidth:J}=_;j>Z?d.scrollTo({top:0,left:Z,behavior:"smooth"}):Z+J>j+G&&d.scrollTo({top:0,left:Z+J-G,behavior:"smooth"})}const O=U(null);let Y=0,te=null;function se($){const h=O.value;if(h){Y=$.getBoundingClientRect().height;const d=`${Y}px`,_=()=>{h.style.height=d,h.style.maxHeight=d};te?(_(),te(),te=null):te=_}}function re($){const h=O.value;if(h){const d=$.getBoundingClientRect().height,_=()=>{document.body.offsetHeight,h.style.maxHeight=`${d}px`,h.style.height=`${Math.max(Y,d)}px`};te?(te(),te=null,_()):te=_}}function S(){const $=O.value;$&&($.style.maxHeight="",$.style.height="")}const ue={value:[]},ce=U("next");function De($){const h=H.value;let d="next";for(const _ of ue.value){if(_===h)break;if(_===$){d="prev";break}}ce.value=d,ye($)}function ye($){const{onActiveNameChange:h,onUpdateValue:d,"onUpdate:value":_}=e;h&&ee(h,$),d&&ee(d,$),_&&ee(_,$),K.value=$}function he($){const{onClose:h}=e;h&&ee(h,$)}function ve(){const{value:$}=g;if(!$)return;const h="transition-disabled";$.classList.add(h),V(),$.classList.remove(h)}let xe=0;function we($){var h;if($.contentRect.width===0&&$.contentRect.height===0||xe===$.contentRect.width)return;xe=$.contentRect.width;const{type:d}=e;(d==="line"||d==="bar")&&ve(),d!=="segment"&&Xe((h=k.value)===null||h===void 0?void 0:h.$el)}const $e=Qt(we,64);be([()=>e.justifyContent,()=>e.size],()=>{et(()=>{const{type:$}=e;($==="line"||$==="bar")&&ve()})});const Q=U(!1);function Ce($){var h;const{target:d,contentRect:{width:_}}=$,j=d.parentElement.offsetWidth;if(!Q.value)j<_&&(Q.value=!0);else{const{value:G}=f;if(!G)return;j-_>G.$el.offsetWidth&&(Q.value=!1)}Xe((h=k.value)===null||h===void 0?void 0:h.$el)}const me=Qt(Ce,64);function Ne(){const{onAdd:$}=e;$&&$(),et(()=>{const h=B(),{value:d}=k;!h||!d||d.scrollTo({left:h.offsetLeft,top:0,behavior:"smooth"})})}function Xe($){if(!$)return;const{placement:h}=e;if(h==="top"||h==="bottom"){const{scrollLeft:d,scrollWidth:_,offsetWidth:j}=$;I.value=d<=0,T.value=d+j>=_}else{const{scrollTop:d,scrollHeight:_,offsetHeight:j}=$;I.value=d<=0,T.value=d+j>=_}}const yt=Qt($=>{Xe($.target)},64);Be(To,{triggerRef:fe(e,"trigger"),tabStyleRef:fe(e,"tabStyle"),paneClassRef:fe(e,"paneClass"),paneStyleRef:fe(e,"paneStyle"),mergedClsPrefixRef:l,typeRef:fe(e,"type"),closableRef:fe(e,"closable"),valueRef:H,tabChangeIdRef:N,onBeforeLeaveRef:fe(e,"onBeforeLeave"),activateTab:De,handleClose:he,handleAdd:Ne}),da(()=>{V(),b()}),rt(()=>{const{value:$}=m;if(!$)return;const{value:h}=l,d=`${h}-tabs-nav-scroll-wrapper--shadow-start`,_=`${h}-tabs-nav-scroll-wrapper--shadow-end`;I.value?$.classList.remove(d):$.classList.add(d),T.value?$.classList.remove(_):$.classList.add(_)});const ut=U(null);be(H,()=>{if(e.type==="segment"){const $=ut.value;$&&et(()=>{$.classList.add("transition-disabled"),$.offsetWidth,$.classList.remove("transition-disabled")})}});const wt={syncBarPosition:()=>{V()}},ht=A(()=>{const{value:$}=F,{type:h}=e,d={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[h],_=`${$}${d}`,{self:{barColor:j,closeIconColor:G,closeIconColorHover:Z,closeIconColorPressed:J,tabColor:ie,tabBorderColor:oe,paneTextColor:ke,tabFontWeight:Ge,tabBorderRadius:qt,tabFontWeightActive:Pn,colorSegment:Tn,fontWeightStrong:Fn,tabColorSegment:En,closeSize:Dn,closeIconSize:Ln,closeColorHover:Vn,closeColorPressed:Hn,closeBorderRadius:Un,[de("panePadding",$)]:It,[de("tabPadding",_)]:Nn,[de("tabPaddingVertical",_)]:On,[de("tabGap",_)]:jn,[de("tabGap",`${_}Vertical`)]:Wn,[de("tabTextColor",h)]:Kn,[de("tabTextColorActive",h)]:qn,[de("tabTextColorHover",h)]:Xn,[de("tabTextColorDisabled",h)]:Gn,[de("tabFontSize",$)]:Yn},common:{cubicBezierEaseInOut:Zn}}=u.value;return{"--n-bezier":Zn,"--n-color-segment":Tn,"--n-bar-color":j,"--n-tab-font-size":Yn,"--n-tab-text-color":Kn,"--n-tab-text-color-active":qn,"--n-tab-text-color-disabled":Gn,"--n-tab-text-color-hover":Xn,"--n-pane-text-color":ke,"--n-tab-border-color":oe,"--n-tab-border-radius":qt,"--n-close-size":Dn,"--n-close-icon-size":Ln,"--n-close-color-hover":Vn,"--n-close-color-pressed":Hn,"--n-close-border-radius":Un,"--n-close-icon-color":G,"--n-close-icon-color-hover":Z,"--n-close-icon-color-pressed":J,"--n-tab-color":ie,"--n-tab-font-weight":Ge,"--n-tab-font-weight-active":Pn,"--n-tab-padding":Nn,"--n-tab-padding-vertical":On,"--n-tab-gap":jn,"--n-tab-gap-vertical":Wn,"--n-pane-padding-left":At(It,"left"),"--n-pane-padding-right":At(It,"right"),"--n-pane-padding-top":At(It,"top"),"--n-pane-padding-bottom":At(It,"bottom"),"--n-font-weight-strong":Fn,"--n-tab-color-segment":En}}),Re=i?it("tabs",A(()=>`${F.value[0]}${e.type[0]}`),ht,e):void 0;return Object.assign({mergedClsPrefix:l,mergedValue:H,renderedNames:new Set,tabsRailElRef:ut,tabsPaneWrapperRef:O,tabsElRef:v,barElRef:g,addTabInstRef:f,xScrollInstRef:k,scrollWrapperElRef:m,addTabFixed:Q,tabWrapperStyle:M,handleNavResize:$e,mergedSize:F,handleScroll:yt,handleTabsResize:me,cssVars:i?void 0:ht,themeClass:Re==null?void 0:Re.themeClass,animationDirection:ce,renderNameListRef:ue,onAnimationBeforeLeave:se,onAnimationEnter:re,onAnimationAfterEnter:S,onRender:Re==null?void 0:Re.onRender},wt)},render(){const{mergedClsPrefix:e,type:t,placement:o,addTabFixed:n,addable:r,mergedSize:a,renderNameListRef:l,onRender:i,paneWrapperClass:u,paneWrapperStyle:v,$slots:{default:g,prefix:m,suffix:f}}=this;i==null||i();const k=g?Zt(g()).filter(M=>M.type.__TAB_PANE__===!0):[],I=g?Zt(g()).filter(M=>M.type.__TAB__===!0):[],T=!I.length,F=t==="card",D=t==="segment",K=!F&&!D&&this.justifyContent;l.value=[];const H=()=>{const M=c("div",{style:this.tabWrapperStyle,class:[`${e}-tabs-wrapper`]},K?null:c("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),T?k.map((B,L)=>(l.value.push(B.props.name),oo(c(fo,Object.assign({},B.props,{internalCreatedByPane:!0,internalLeftPadded:L!==0&&(!K||K==="center"||K==="start"||K==="end")}),B.children?{default:B.children.tab}:void 0)))):I.map((B,L)=>(l.value.push(B.props.name),oo(L!==0&&!K?Jo(B):B))),!n&&r&&F?Zo(r,(T?k.length:I.length)!==0):null,K?null:c("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return c("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},F&&r?c(Lo,{onResize:this.handleTabsResize},{default:()=>M}):M,F?c("div",{class:`${e}-tabs-pad`}):null,F?null:c("div",{ref:"barElRef",class:`${e}-tabs-bar`}))},N=D?"top":o;return c("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${a}-size`,K&&`${e}-tabs--flex`,`${e}-tabs--${N}`],style:this.cssVars},c("div",{class:[`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${N}`,`${e}-tabs-nav`]},Ie(m,M=>M&&c("div",{class:`${e}-tabs-nav__prefix`},M)),D?c("div",{class:`${e}-tabs-rail`,ref:"tabsRailElRef"},T?k.map((M,B)=>(l.value.push(M.props.name),c(fo,Object.assign({},M.props,{internalCreatedByPane:!0,internalLeftPadded:B!==0}),M.children?{default:M.children.tab}:void 0))):I.map((M,B)=>(l.value.push(M.props.name),B===0?M:Jo(M)))):c(Lo,{onResize:this.handleNavResize},{default:()=>c("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(N)?c(va,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:H}):c("div",{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll},H()))}),n&&r&&F?Zo(r,!0):null,Ie(f,M=>M&&c("div",{class:`${e}-tabs-nav__suffix`},M))),T&&(this.animated&&(N==="top"||N==="bottom")?c("div",{ref:"tabsPaneWrapperRef",style:v,class:[`${e}-tabs-pane-wrapper`,u]},Yo(k,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Yo(k,this.mergedValue,this.renderedNames)))}});function Yo(e,t,o,n,r,a,l){const i=[];return e.forEach(u=>{const{name:v,displayDirective:g,"display-directive":m}=u.props,f=I=>g===I||m===I,k=t===v;if(u.key!==void 0&&(u.key=v),k||f("show")||f("show:lazy")&&o.has(v)){o.has(v)||o.add(v);const I=!f("if");i.push(I?at(u,[[Vt,k]]):u)}}),l?c(Ir,{name:`${l}-transition`,onBeforeLeave:n,onEnter:r,onAfterEnter:a},{default:()=>i}):i}function Zo(e,t){return c(fo,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e=="object"&&e.disabled})}function Jo(e){const t=Ar(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function oo(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}function $n(){const e=Se(),t=ne(),o=Pr(Tr),n=A(()=>{const g="vertical",m="horizontal";return t.layout.mode.includes(g)?g:m}),r=o.smaller("sm"),a={vertical:{showLogo:!1,showHeaderMenu:!1,showMenuCollapse:!0},"vertical-mix":{showLogo:!1,showHeaderMenu:!1,showMenuCollapse:!1},horizontal:{showLogo:!0,showHeaderMenu:!0,showMenuCollapse:!1},"horizontal-mix":{showLogo:!0,showHeaderMenu:!1,showMenuCollapse:!0}},l=A(()=>a[t.layout.mode]),i=A(()=>t.layout.mode!=="horizontal"),u=A(()=>{const{width:g,mixWidth:m,mixChildMenuWidth:f}=t.sider,k=t.layout.mode==="vertical-mix";let I=k?m:g;return k&&e.mixSiderFixed&&(I+=f),I}),v=A(()=>{const{collapsedWidth:g,mixCollapsedWidth:m,mixChildMenuWidth:f}=t.sider,k=t.layout.mode==="vertical-mix";let I=k?m:g;return k&&e.mixSiderFixed&&(I+=f),I});return be(r,g=>{g&&e.setSiderCollapse(!0)},{immediate:!0}),{mode:n,isMobile:r,headerProps:l,siderVisible:i,siderWidth:u,siderCollapsedWidth:v}}function vi(e,t,o){return mi(e,t).map(a=>Bn(a,o))}function mi(e,t){const o=[];return t.some(n=>{const r=e.includes(n.routeName);return r&&o.push(...Rn(e,n)),r}),o}function Rn(e,t){const o=[];return e===t.routeName&&o.push(t),e.includes(t.routeName)&&t.children&&t.children.length&&(o.push(t),o.push(...t.children.map(n=>Rn(e,n)).flat(1))),o}function Bn(e,t){var r;const o=!!(e.children&&e.children.length),n={key:e.routeName,label:e.label,routeName:e.routeName,disabled:e.routePath===t,hasChildren:o,i18nTitle:e.i18nTitle};return e.icon&&(n.icon=e.icon),o&&(n.options=(r=e.children)==null?void 0:r.map(a=>Bn(a,t))),n}const bi=[{label:"红色系",data:[{label:"绾",color:"#A98175"},{label:"檀",color:"#B36D61"},{label:"栗色",color:"#60281E"},{label:"玄",color:"#622A1D"},{label:"胭脂",color:"#9D2933"},{label:"殷红",color:"#BE002F"},{label:"枣红",color:"#C32136"},{label:"赤",color:"#C3272B"},{label:"绯红",color:"#C83C23"},{label:"赫赤",color:"#C91F37"},{label:"樱桃红",color:"#C93756"},{label:"茜色",color:"#CB3A56"},{label:"海棠红",color:"#DB5A6B"},{label:"酡红",color:"#DC3023"},{label:"妃色",color:"#ED5736"},{label:"嫣红",color:"#EF7A82"},{label:"品红",color:"#F00056"},{label:"石榴红",color:"#F20C00"},{label:"银红",color:"#F05654"},{label:"彤",color:"#F35336"},{label:"桃红",color:"#F47983"},{label:"酡颜",color:"#F9906F"},{label:"洋红",color:"#FF0097"},{label:"大红",color:"#FF2121"},{label:"火红",color:"#FF2D51"},{label:"炎",color:"#FF3300"},{label:"朱红",color:"#FF4C00"},{label:"丹",color:"#FF4E20"},{label:"粉红",color:"#FFB3A7"},{label:"藕荷",color:"#E4C6D0"},{label:"藕",color:"#EDD1D8"},{label:"水红",color:"#F3D3E7"},{label:"鱼肚白",color:"#FCEFE8"}]},{label:"橙色系",data:[{label:"褐色",color:"#6E511E"},{label:"棕黑",color:"#7C4B00"},{label:"赭色",color:"#955539"},{label:"棕红",color:"#9B4400"},{label:"赭",color:"#9C5333"},{label:"驼色",color:"#A88462"},{label:"棕色",color:"#B25D25"},{label:"茶色",color:"#B35C44"},{label:"琥珀",color:"#CA6924"},{label:"黄栌",color:"#E29C45"},{label:"橙色",color:"#FA8C35"},{label:"橘红",color:"#FF7500"},{label:"橘黄",color:"#FF8936"},{label:"杏红",color:"#FF8C31"},{label:"橙黄",color:"#FFA400"},{label:"杏黄",color:"#FFA631"},{label:"姜黄",color:"#FFC773"}]},{label:"黄色系",data:[{label:"黧",color:"#5D513C"},{label:"黎",color:"#75664D"},{label:"棕绿",color:"#827100"},{label:"秋色",color:"#896C39"},{label:"苍黄",color:"#A29B7C"},{label:"乌金",color:"#A78E44"},{label:"棕黄",color:"#AE7000"},{label:"昏黄",color:"#C89B40"},{label:"枯黄",color:"#D3B17D"},{label:"秋香色",color:"#D9B611"},{label:"金",color:"#EACD76"},{label:"牙",color:"#EEDEB0"},{label:"缃色",color:"#F0C239"},{label:"赤金",color:"#F2BE45"},{label:"鸭黄",color:"#FAFF72"},{label:"鹅黄",color:"#FFF143"},{label:"缟",color:"#F2ECDE"},{label:"象牙白",color:"#FFFBF0"}]},{label:"绿色系",data:[{label:"竹青",color:"#789262"},{label:"黯",color:"#41555D"},{label:"黛绿",color:"#426666"},{label:"松花绿",color:"#057748"},{label:"绿沈",color:"#0C8918"},{label:"深绿",color:"#009900"},{label:"青葱",color:"#0AA344"},{label:"铜绿",color:"#549688"},{label:"苍翠",color:"#519A73"},{label:"松柏绿",color:"#21A675"},{label:"葱青",color:"#0EB83A"},{label:"油绿",color:"#00BC12"},{label:"绿",color:"#00E500"},{label:"草绿",color:"#40DE5A"},{label:"豆青",color:"#96CE54"},{label:"豆绿",color:"#9ED048"},{label:"葱绿",color:"#9ED900"},{label:"葱黄",color:"#A3D900"},{label:"柳绿",color:"#AFDD22"},{label:"嫩绿",color:"#BDDD22"},{label:"柳黄",color:"#C9DD22"},{label:"松花",color:"#BCE672"},{label:"樱草色",color:"#EAFF56"}]},{label:"青色系",data:[{label:"水",color:"#88ADA6"},{label:"青碧",color:"#48C0A3"},{label:"碧",color:"#1BD1A5"},{label:"石青",color:"#7BCFA6"},{label:"青翠",color:"#00E079"},{label:"青",color:"#00E09E"},{label:"碧绿",color:"#2ADD9C"},{label:"玉",color:"#2EDFA3"},{label:"翡翠",color:"#3DE1AD"},{label:"缥",color:"#7FECAD"},{label:"碧蓝",color:"#3EEDE7"},{label:"湖绿",color:"#25F8CD"},{label:"艾绿",color:"#A4E2C6"},{label:"青白",color:"#C0EBD7"},{label:"水绿",color:"#D4F2E7"},{label:"鸭卵青",color:"#E0EEE8"},{label:"素",color:"#E0F0E9"},{label:"荼白",color:"#F3F9F1"}]},{label:"蓝色系",data:[{label:"藏蓝",color:"#3B2E7E"},{label:"宝蓝",color:"#4B5CC4"},{label:"绀青",color:"#003371"},{label:"藏青",color:"#2E4E7E"},{label:"靛蓝",color:"#065279"},{label:"靛青",color:"#177CB0"},{label:"群青",color:"#4C8DAE"},{label:"蓝",color:"#44CEF6"},{label:"湖蓝",color:"#30DFF3"},{label:"蔚蓝",color:"#70F3FF"},{label:"月白",color:"#D6ECF0"},{label:"水蓝",color:"#D2F0F4"},{label:"莹白",color:"#E3F9FD"},{label:"雪白",color:"#F0FCFF"}]},{label:"紫色系",data:[{label:"黛",color:"#4A4266"},{label:"紫檀",color:"#4C211B"},{label:"紫棠",color:"#56004F"},{label:"黛紫",color:"#574266"},{label:"绛紫",color:"#8C4356"},{label:"紫酱",color:"#815463"},{label:"酱紫",color:"#815476"},{label:"黝",color:"#6B6882"},{label:"青莲",color:"#801DAE"},{label:"紫",color:"#8D4BBB"},{label:"雪青",color:"#B0A4E3"},{label:"丁香",color:"#CCA4E3"}]},{label:"灰色系",data:[{label:"黑",color:"#000000"},{label:"漆黑",color:"#161823"},{label:"象牙黑",color:"#312520"},{label:"乌黑",color:"#392F41"},{label:"玄青",color:"#3D3B4F"},{label:"缁",color:"#493131"},{label:"黝黑",color:"#665757"},{label:"鸦青",color:"#424C50"},{label:"黛蓝",color:"#425066"},{label:"苍黑",color:"#395260"},{label:"墨",color:"#50616D"},{label:"灰",color:"#808080"},{label:"苍",color:"#75878A"},{label:"墨灰",color:"#758A99"},{label:"苍青",color:"#7397AB"},{label:"蓝灰",color:"#A1AFC9"},{label:"老银",color:"#BACAC6"},{label:"蟹壳青",color:"#BBCDC5"},{label:"苍白",color:"#D1D9E0"},{label:"淡青",color:"#D3E0F3"},{label:"银白",color:"#E9E7EF"},{label:"霜",color:"#E9F1F6"},{label:"铅白",color:"#F0F0F4"},{label:"精白",color:"#FFFFFF"}]}],Mn=bi;function gi(e){return Mn.some(t=>t.data.some(n=>n.color===e))}const xi={class:"inline-block",viewBox:"0 0 1024 1024",width:"1em",height:"1em"},_i=W("path",{fill:"currentColor",d:"m924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 0 0 9.3-35.2l-.9-2.6a443.74 443.74 0 0 0-79.7-137.9l-1.8-2.1a32.12 32.12 0 0 0-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 0 0-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 0 0-25.8 25.7l-15.8 85.4a351.86 351.86 0 0 0-99 57.4l-81.9-29.1a32 32 0 0 0-35.1 9.5l-1.8 2.1a446.02 446.02 0 0 0-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1c0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 0 0-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0 0 35.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0 0 25.8 25.7l2.7.5a449.4 449.4 0 0 0 159 0l2.7-.5a32.05 32.05 0 0 0 25.8-25.7l15.7-85a350 350 0 0 0 99.7-57.6l81.3 28.9a32 32 0 0 0 35.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1l74.7 63.9a370.03 370.03 0 0 1-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3l-17.9 97a377.5 377.5 0 0 1-85 0l-17.9-97.2l-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9l-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5l-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5c0-15.3 1.2-30.6 3.7-45.5l6.5-40l-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2l31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3l17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97l38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8l92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176s176-78.8 176-176s-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 0 1 512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 0 1 400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 0 1 624 502c0 29.9-11.7 58-32.8 79.2z"},null,-1),yi=[_i];function wi(e,t){return C(),X("svg",xi,yi)}const In={name:"ant-design-setting-outlined",render:wi},Ci={class:"inline-block",viewBox:"0 0 1024 1024",width:"1em",height:"1em"},ki=W("path",{fill:"currentColor",d:"m563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8L295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512L196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1l216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"},null,-1),zi=[ki];function Si(e,t){return C(),X("svg",Ci,zi)}const $i={name:"ant-design-close-outlined",render:Si},Ri=E({name:"DrawerButton",__name:"index",setup(e){const t=Se();return(o,n)=>{const r=$i,a=In,l=je;return C(),q(l,{type:"primary",class:ge([[{"!right-330px":s(t).settingDrawerVisible},s(t).settingDrawerVisible?"ease-out":"ease-in"],"fixed top-360px right-14px z-10000 w-42px h-42px !p-0 transition-all duration-300"]),onClick:s(t).toggleSettingDrawerVisible},{default:R(()=>[s(t).settingDrawerVisible?(C(),q(r,{key:0,class:"text-24px"})):(C(),q(a,{key:1,class:"text-24px"}))]),_:1},8,["class","onClick"])}}}),Bi={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},Mi=W("path",{fill:"currentColor",d:"M12.04 8.04h-.09l-1.6 4.55h3.29z"},null,-1),Ii=W("path",{fill:"currentColor",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm3 14.41l-.78-2.22H9.78l-.79 2.22c-.12.35-.46.59-.83.59a.887.887 0 0 1-.83-1.2l3.34-8.88a1.42 1.42 0 0 1 2.66 0l3.34 8.88c.22.58-.21 1.2-.83 1.2c-.38 0-.72-.24-.84-.59z"},null,-1),Ai=[Mi,Ii];function Pi(e,t){return C(),X("svg",Bi,Ai)}const Ti={name:"ic-round-hdr-auto",render:Pi},Fi={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},Ei=W("path",{fill:"currentColor",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8c0-1.85.63-3.55 1.69-4.9L16.9 18.31A7.902 7.902 0 0 1 12 20zm6.31-3.1L7.1 5.69A7.902 7.902 0 0 1 12 4c4.42 0 8 3.58 8 8c0 1.85-.63 3.55-1.69 4.9z"},null,-1),Di=[Ei];function Li(e,t){return C(),X("svg",Fi,Di)}const Vi={name:"ic-baseline-do-not-disturb",render:Li},Hi={class:"flex-y-center justify-between"},le=E({name:"SettingMenu",__name:"index",props:{label:{}},setup(e){return(t,o)=>(C(),X("div",Hi,[W("span",null,Te(t.label),1),mt(t.$slots,"default")]))}}),Ui=E({name:"DarkMode",__name:"index",setup(e){const t=ne();return(o,n)=>{const r=bt,a=Zr,l=Jr,i=Po,u=Vi,v=Ti,g=gt;return C(),X(ae,null,[x(r,{"title-placement":"center"},{default:R(()=>[Me("主题模式")]),_:1}),x(g,{vertical:"",size:"large"},{default:R(()=>[x(le,{label:"深色主题"},{default:R(()=>[x(i,{value:s(t).darkMode,"onUpdate:value":s(t).setDarkMode},{checked:R(()=>[x(a,{class:"text-14px text-white"})]),unchecked:R(()=>[x(l,{class:"text-14px text-white"})]),_:1},8,["value","onUpdate:value"])]),_:1}),x(le,{label:"跟随系统"},{default:R(()=>[x(i,{value:s(t).followSystemTheme,"onUpdate:value":s(t).setFollowSystemTheme},{checked:R(()=>[x(u,{class:"text-14px text-white"})]),unchecked:R(()=>[x(v,{class:"text-14px text-white"})]),_:1},8,["value","onUpdate:value"])]),_:1}),x(le,{label:"侧边栏深色"},{default:R(()=>[x(i,{value:s(t).sider.inverted,"onUpdate:value":s(t).setSiderInverted},null,8,["value","onUpdate:value"])]),_:1}),x(le,{label:"头部深色"},{default:R(()=>[x(i,{value:s(t).header.inverted,"onUpdate:value":s(t).setHeaderInverted},null,8,["value","onUpdate:value"])]),_:1}),x(le,{label:"底部深色"},{default:R(()=>[x(i,{value:s(t).footer.inverted,"onUpdate:value":s(t).setFooterInverted},null,8,["value","onUpdate:value"])]),_:1})]),_:1})],64)}}}),Ni=E({name:"LayoutCard",__name:"layout-card",props:{mode:{},label:{},checked:{type:Boolean}},setup(e){const t=e,o={vertical:{placement:"bottom-start",headerClass:"",menuClass:"w-1/3 h-full",mainClass:"w-2/3 h-3/4"},"vertical-mix":{placement:"bottom",headerClass:"",menuClass:"w-1/4 h-full",mainClass:"w-2/3 h-3/4"},horizontal:{placement:"bottom",headerClass:"",menuClass:"w-full h-1/4",mainClass:"w-full h-3/4"},"horizontal-mix":{placement:"bottom-end",headerClass:"",menuClass:"w-full h-1/4",mainClass:"w-2/3 h-3/4"}},n=A(()=>o[t.mode]);return(r,a)=>{const l=zo;return C(),X("div",{class:ge(["border-2px rounded-6px cursor-pointer hover:border-primary",[r.checked?"border-primary":"border-transparent"]])},[x(l,{placement:n.value.placement,trigger:"hover"},{trigger:R(()=>[W("div",{class:ge(["layout-card__shadow gap-6px w-96px h-64px p-6px rd-4px",[r.mode.includes("vertical")?"flex":"flex-col"]])},[mt(r.$slots,"default",{},void 0,!0)],2)]),default:R(()=>[W("span",null,Te(r.label),1)]),_:3},8,["placement"])],2)}}}),Oi=dt(Ni,[["__scopeId","data-v-e2b400d3"]]),Ue=e=>(Fr("data-v-2cef1faf"),e=e(),Er(),e),ji=Ue(()=>W("div",{class:"w-18px h-full bg-primary:50 rd-4px"},null,-1)),Wi=Ue(()=>W("div",{class:"flex-1 flex-col gap-6px"},[W("div",{class:"h-16px bg-primary rd-4px"}),W("div",{class:"flex-1 bg-primary:25 rd-4px"})],-1)),Ki=Ue(()=>W("div",{class:"w-8px h-full bg-primary:50 rd-4px"},null,-1)),qi=Ue(()=>W("div",{class:"w-16px h-full bg-primary:50 rd-4px"},null,-1)),Xi=Ue(()=>W("div",{class:"flex-1 flex-col gap-6px"},[W("div",{class:"h-16px bg-primary rd-4px"}),W("div",{class:"flex-1 bg-primary:25 rd-4px"})],-1)),Gi=Ue(()=>W("div",{class:"h-16px bg-primary rd-4px"},null,-1)),Yi=Ue(()=>W("div",{class:"flex-1 flex gap-6px"},[W("div",{class:"flex-1 bg-primary:25 rd-4px"})],-1)),Zi=Ue(()=>W("div",{class:"h-16px bg-primary rd-4px"},null,-1)),Ji=Ue(()=>W("div",{class:"flex-1 flex gap-6px"},[W("div",{class:"w-18px bg-primary:50 rd-4px"}),W("div",{class:"flex-1 bg-primary:25 rd-4px"})],-1)),Qi=E({name:"LayoutMode",__name:"index",setup(e){const t=ne();return(o,n)=>{const r=bt,a=gt;return C(),X(ae,null,[x(r,{"title-placement":"center"},{default:R(()=>[Me("布局模式")]),_:1}),x(a,{justify:"space-around",wrap:!0,size:24,class:"px-12px"},{default:R(()=>[(C(!0),X(ae,null,lt(s(t).layout.modeList,l=>(C(),q(s(Oi),{key:l.value,mode:l.value,label:l.label,checked:l.value===s(t).layout.mode,onClick:i=>s(t).setLayoutMode(l.value)},{default:R(()=>[l.value==="vertical"?(C(),X(ae,{key:0},[ji,Wi],64)):ze("",!0),l.value==="vertical-mix"?(C(),X(ae,{key:1},[Ki,qi,Xi],64)):ze("",!0),l.value==="horizontal"?(C(),X(ae,{key:2},[Gi,Yi],64)):ze("",!0),l.value==="horizontal-mix"?(C(),X(ae,{key:3},[Zi,Ji],64)):ze("",!0)]),_:2},1032,["mode","label","checked","onClick"]))),128))]),_:1})],64)}}}),es=dt(Qi,[["__scopeId","data-v-2cef1faf"]]),ts={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},os=W("path",{fill:"currentColor",d:"M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41L9 16.17z"},null,-1),ns=[os];function rs(e,t){return C(),X("svg",ts,ns)}const as={name:"ic-outline-check",render:rs},An=E({name:"ColorCheckbox",__name:"color-checkbox",props:{color:{},checked:{type:Boolean},iconClass:{default:"text-14px"}},setup(e){const t=e,o=["#ffffff","#fff","rgb(255,255,255)"],n=A(()=>o.includes(t.color));return(r,a)=>{const l=as;return C(),X("div",{class:"flex-center w-20px h-20px rounded-2px shadow cursor-pointer",style:He({backgroundColor:r.color})},[r.checked?(C(),q(l,{key:0,class:ge([r.iconClass,n.value?"text-gray-700":"text-white"])},null,8,["class"])):ze("",!0)],4)}}}),ls={class:"flex-x-center"},is={class:"text-center"},ss=E({name:"ColorModal",__name:"color-modal",props:{visible:{type:Boolean}},emits:["close"],setup(e,{emit:t}){const o=ne();function n(){t("close")}return(r,a)=>{const l=ua,i=fn,u=pn,v=di,g=pi,m=Dr;return C(),q(m,{show:r.visible,preset:"card",class:"w-640px h-480px","z-index":10001,onClose:n},{default:R(()=>[W("div",ls,[x(l,{type:"primary",size:24},{default:R(()=>[Me("中国传统颜色")]),_:1})]),x(g,null,{default:R(()=>[(C(!0),X(ae,null,lt(s(Mn),f=>(C(),q(v,{key:f.label,name:f.label,tab:f.label},{default:R(()=>[x(u,{cols:8,"x-gap":16,"y-gap":8},{default:R(()=>[(C(!0),X(ae,null,lt(f.data,k=>(C(),q(i,{key:k.label},{default:R(()=>[x(An,{class:"!w-full !h-36px !rounded-4px",color:k.color,checked:k.color===s(o).themeColor,"icon-class":"text-20px",onClick:I=>s(o).setThemeColor(k.color)},null,8,["color","checked","onClick"]),W("p",is,Te(k.label),1)]),_:2},1024))),128))]),_:2},1024)]),_:2},1032,["name","tab"]))),128))]),_:1})]),_:1},8,["show"])}}}),cs=E({name:"ThemeColorSelect",__name:"index",setup(e){const t=ne(),{bool:o,setTrue:n,setFalse:r}=yo(),a=A(()=>gi(t.themeColor)),l=A(()=>a.value?"primary":"default");return(i,u)=>{const v=bt,g=fn,m=pn,f=xl,k=je,I=gt;return C(),X(ae,null,[x(v,{"title-placement":"center"},{default:R(()=>[Me("系统主题")]),_:1}),x(m,{cols:8,"x-gap":8,"y-gap":12},{default:R(()=>[(C(!0),X(ae,null,lt(s(t).themeColorList,T=>(C(),q(g,{key:T,class:"flex-x-center"},{default:R(()=>[x(s(An),{color:T,checked:T===s(t).themeColor,onClick:F=>s(t).setThemeColor(T)},null,8,["color","checked","onClick"])]),_:2},1024))),128))]),_:1}),x(I,{vertical:!0,class:"pt-12px"},{default:R(()=>[x(f,{value:s(t).themeColor,"show-alpha":!1,onUpdateValue:s(t).setThemeColor},null,8,["value","onUpdateValue"]),x(k,{block:!0,type:l.value,onClick:s(n)},{default:R(()=>[Me("更多颜色")]),_:1},8,["type","onClick"])]),_:1}),x(s(ss),{visible:s(o),onClose:s(r)},null,8,["visible","onClose"])],64)}}}),ds=E({name:"PageFunc",__name:"index",setup(e){const t=ne();return(o,n)=>{const r=bt,a=vn,l=Po,i=Xl,u=gt;return C(),X(ae,null,[x(r,{"title-placement":"center"},{default:R(()=>[Me("界面功能")]),_:1}),x(u,{vertical:"",size:"large"},{default:R(()=>[x(le,{label:"滚动模式"},{default:R(()=>[x(a,{class:"w-120px",size:"small",value:s(t).scrollMode,options:s(t).scrollModeList,"onUpdate:value":s(t).setScrollMode},null,8,["value","options","onUpdate:value"])]),_:1}),x(le,{label:"固定头部和多页签"},{default:R(()=>[x(l,{value:s(t).fixedHeaderAndTab,"onUpdate:value":s(t).setIsFixedHeaderAndTab},null,8,["value","onUpdate:value"])]),_:1}),x(le,{label:"顶部菜单位置"},{default:R(()=>[x(a,{class:"w-120px",size:"small",value:s(t).menu.horizontalPosition,options:s(t).menu.horizontalPositionList,"onUpdate:value":s(t).setHorizontalMenuPosition},null,8,["value","options","onUpdate:value"])]),_:1}),x(le,{label:"头部高度"},{default:R(()=>[x(i,{class:"w-120px",size:"small",value:s(t).header.height,step:1,"onUpdate:value":s(t).setHeaderHeight},null,8,["value","onUpdate:value"])]),_:1}),x(le,{label:"多页签高度"},{default:R(()=>[x(i,{class:"w-120px",size:"small",value:s(t).tab.height,step:1,"onUpdate:value":s(t).setTabHeight},null,8,["value","onUpdate:value"])]),_:1}),x(le,{label:"多页签缓存"},{default:R(()=>[x(l,{value:s(t).tab.isCache,"onUpdate:value":s(t).setTabIsCache},null,8,["value","onUpdate:value"])]),_:1}),x(le,{label:"侧边栏展开宽度"},{default:R(()=>[x(i,{class:"w-120px",size:"small",value:s(t).sider.width,step:10,"onUpdate:value":s(t).setSiderWidth},null,8,["value","onUpdate:value"])]),_:1}),x(le,{label:"左侧混合侧边栏展开宽度"},{default:R(()=>[x(i,{class:"w-120px",size:"small",value:s(t).sider.mixWidth,step:5,"onUpdate:value":s(t).setMixSiderWidth},null,8,["value","onUpdate:value"])]),_:1}),x(le,{label:"显示底部"},{default:R(()=>[x(l,{value:s(t).footer.visible,"onUpdate:value":s(t).setFooterVisible},null,8,["value","onUpdate:value"])]),_:1}),x(le,{label:"固定底部"},{default:R(()=>[x(l,{value:s(t).footer.fixed,"onUpdate:value":s(t).setFooterIsFixed},null,8,["value","onUpdate:value"])]),_:1}),x(le,{label:"底部居右"},{default:R(()=>[x(l,{value:s(t).footer.right,"onUpdate:value":s(t).setFooterIsRight},null,8,["value","onUpdate:value"])]),_:1})]),_:1})],64)}}}),us=E({name:"PageView",__name:"index",setup(e){const t=ne();return(o,n)=>{const r=bt,a=Po,l=vn,i=gt;return C(),X(ae,null,[x(r,{"title-placement":"center"},{default:R(()=>[Me("界面显示")]),_:1}),x(i,{vertical:"",size:"large"},{default:R(()=>[x(le,{label:"面包屑"},{default:R(()=>[x(a,{value:s(t).header.crumb.visible,"onUpdate:value":s(t).setHeaderCrumbVisible},null,8,["value","onUpdate:value"])]),_:1}),x(le,{label:"面包屑图标"},{default:R(()=>[x(a,{value:s(t).header.crumb.showIcon,"onUpdate:value":s(t).setHeaderCrumbIconVisible},null,8,["value","onUpdate:value"])]),_:1}),x(le,{label:"多页签"},{default:R(()=>[x(a,{value:s(t).tab.visible,"onUpdate:value":s(t).setTabVisible},null,8,["value","onUpdate:value"])]),_:1}),x(le,{label:"多页签风格"},{default:R(()=>[x(l,{class:"w-120px",size:"small",value:s(t).tab.mode,options:s(t).tab.modeList,"onUpdate:value":s(t).setTabMode},null,8,["value","options","onUpdate:value"])]),_:1}),x(le,{label:"页面切换动画"},{default:R(()=>[x(a,{value:s(t).page.animate,"onUpdate:value":s(t).setPageIsAnimate},null,8,["value","onUpdate:value"])]),_:1}),x(le,{label:"页面切换动画类型"},{default:R(()=>[x(l,{class:"w-120px",size:"small",value:s(t).page.animateMode,options:s(t).page.animateModeList,"onUpdate:value":s(t).setPageAnimateMode},null,8,["value","options","onUpdate:value"])]),_:1})]),_:1})],64)}}}),hs=E({name:"ThemeConfig",__name:"index",setup(e){const t=ne(),o=U(),n=U(r());function r(){return JSON.stringify(t.$state)}function a(){var u;t.resetThemeStore(),(u=window.$message)==null||u.success("已重置配置，请重新拷贝！")}function l(){if(!o.value)return;new oa(o.value).on("success",()=>{var v;(v=window.$dialog)==null||v.success({title:"操作成功",content:"复制成功,请替换 src/settings/theme.json的内容！",positiveText:"确定"})})}const i=be(()=>t.$state,()=>{n.value=r()},{deep:!0});return Nt(()=>{l()}),on(()=>{i()}),(u,v)=>{const g=bt,m=je,f=gt;return C(),X(ae,null,[x(g,{"title-placement":"center"},{default:R(()=>[Me("主题配置")]),_:1}),at(W("textarea",{id:"themeConfigCopyTarget","onUpdate:modelValue":v[0]||(v[0]=k=>n.value=k),class:"absolute opacity-0"},null,512),[[Lr,n.value]]),x(f,{vertical:""},{default:R(()=>[W("div",{ref_key:"copyRef",ref:o,"data-clipboard-target":"#themeConfigCopyTarget"},[x(m,{type:"primary",block:!0},{default:R(()=>[Me("拷贝当前配置")]),_:1})],512),x(m,{type:"warning",block:!0,onClick:a},{default:R(()=>[Me("重置当前配置")]),_:1})]),_:1})],64)}}}),fs=E({name:"SettingDrawer",__name:"index",setup(e){const t=Se(),o={}.VITE_VERCEL==="Y";return(n,r)=>{const a=Dl,l=Fl;return C(),X(ae,null,[x(l,{show:s(t).settingDrawerVisible,"display-directive":"show",width:330,onMaskClick:s(t).closeSettingDrawer},{default:R(()=>[x(a,{title:"主题配置","native-scrollbar":!1},{default:R(()=>[x(s(Ui)),x(s(es)),x(s(cs)),x(s(ds)),x(s(us)),x(s(hs))]),_:1})]),_:1},8,["show","onMaskClick"]),s(o)?(C(),q(s(Ri),{key:0})):ze("",!0)],64)}}}),xt=E({name:"DarkModeContainer",__name:"dark-mode-container",props:{inverted:{type:Boolean,default:!1}},setup(e){return(t,o)=>(C(),X("div",{class:ge(["dark:bg-dark dark:text-white dark:text-opacity-82 transition-all",t.inverted?"bg-#001428 text-white":"bg-white text-#333639"])},[mt(t.$slots,"default")],2))}}),ps={class:"pl-8px text-20px font-bold text-primary transition duration-300 ease-in-out"},Fo=E({name:"GlobalLogo",__name:"index",props:{showTitle:{type:Boolean}},setup(e){const t=sn("root");return(o,n)=>{const r=Qr,a=Vr("router-link");return C(),q(a,{to:s(t),class:"flex-center w-full nowrap-hidden"},{default:R(()=>[x(r,{class:"text-32px text-primary"}),at(W("h2",ps," 停车场管理系统 ",512),[[Vt,o.showTitle]])]),_:1},8,["to"])}}}),vs={key:0},_t=E({name:"HoverContainer",__name:"hover-container",props:{tooltipContent:{default:""},placement:{default:"bottom"},contentClass:{default:""},inverted:{type:Boolean,default:!1}},setup(e){const t=e,o=A(()=>!!t.tooltipContent),n=A(()=>`${t.contentClass} ${t.inverted?"hover:bg-primary":"hover:bg-#f6f6f6"}`);return(r,a)=>{const l=zo;return o.value?(C(),X("div",vs,[x(l,{placement:r.placement,trigger:"hover"},{trigger:R(()=>[W("div",{class:ge(["flex-center h-full cursor-pointer dark:hover:bg-#333",n.value])},[mt(r.$slots,"default")],2)]),default:R(()=>[Me(" "+Te(r.tooltipContent),1)]),_:3},8,["placement"])])):(C(),X("div",{key:1,class:ge(["flex-center cursor-pointer dark:hover:bg-#333",n.value])},[mt(r.$slots,"default")],2))}}}),ms={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},bs=wo('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="10" stroke-dashoffset="10" d="M7 9L4 12L7 15"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="10;0"></animate></path><path stroke-dasharray="16" stroke-dashoffset="16" d="M19 5H5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="16;0"></animate></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M19 12H10"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="12;0"></animate></path><path stroke-dasharray="16" stroke-dashoffset="16" d="M19 19H5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="16;0"></animate></path></g>',1),gs=[bs];function xs(e,t){return C(),X("svg",ms,gs)}const _s={name:"line-md-menu-fold-left",render:xs},ys={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},ws=wo('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="10" stroke-dashoffset="10" d="M21 9L18 12L21 15"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="10;0"></animate></path><path stroke-dasharray="16" stroke-dashoffset="16" d="M19 5H5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="16;0"></animate></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M14 12H5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="12;0"></animate></path><path stroke-dasharray="16" stroke-dashoffset="16" d="M19 19H5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="16;0"></animate></path></g>',1),Cs=[ws];function ks(e,t){return C(),X("svg",ys,Cs)}const zs={name:"line-md-menu-unfold-left",render:ks},Ss=E({name:"MenuCollapse",__name:"menu-collapse",setup(e){const t=Se(),o=ne();return(n,r)=>{const a=zs,l=_s,i=_t;return C(),q(i,{class:"w-40px h-full",inverted:s(o).header.inverted,onClick:s(t).toggleSiderCollapse},{default:R(()=>[s(t).siderCollapse?(C(),q(a,{key:0,class:"text-16px"})):(C(),q(l,{key:1,class:"text-16px"}))]),_:1},8,["inverted","onClick"])}}}),$s=E({name:"GlobalBreadcrumb",__name:"global-breadcrumb",setup(e){const t=ct(),o=ne(),n=Rt(),{routerPush:r}=Bt(),a=A(()=>vi(t.name,n.menus,sn("root")).map(i=>{var u;return{...i,label:i.i18nTitle?Ht(i.i18nTitle):i.label,options:(u=i.options)==null?void 0:u.map(v=>({...v,label:v.i18nTitle?Ht(v.i18nTitle):v.label}))}}));function l(i){r({name:i})}return(i,u)=>{const v=Wt,g=qa,m=ja;return C(),q(m,{class:"px-12px"},{default:R(()=>[(C(!0),X(ae,null,lt(a.value,f=>(C(),q(g,{key:f.key},{default:R(()=>[f.hasChildren?(C(),q(v,{key:0,options:f.options,onSelect:l},{default:R(()=>[W("span",null,[s(o).header.crumb.showIcon?(C(),q(lo(f.icon),{key:0,class:"inline-block align-text-bottom mr-4px text-16px"})):ze("",!0),W("span",null,Te(f.label),1)])]),_:2},1032,["options"])):(C(),X(ae,{key:1},[s(o).header.crumb.showIcon?(C(),q(lo(f.icon),{key:0,class:ge(["inline-block align-text-bottom mr-4px text-16px",{"text-#BBBBBB":s(o).header.inverted}])},null,8,["class"])):ze("",!0),W("span",{class:ge({"text-#BBBBBB":s(o).header.inverted})},Te(f.label),3)],64))]),_:2},1024))),128))]),_:1})}}}),Rs={class:"flex-1-hidden h-full px-10px"},Bs=E({name:"HeaderMenu",__name:"header-menu",setup(e){const t=ct(),o=Rt(),n=ne(),{routerPush:r}=Bt(),a=A(()=>Co(o.menus)),l=A(()=>{var u;return(u=t.meta)!=null&&u.activeMenu?t.meta.activeMenu:t.name});function i(u,v){r(v.routePath)}return(u,v)=>{const g=Ao,m=Kt;return C(),X("div",Rs,[x(m,{"x-scrollable":!0,class:"flex-1-hidden h-full","content-class":"h-full"},{default:R(()=>[W("div",{class:"flex-y-center h-full",style:He({justifyContent:s(n).menu.horizontalPosition})},[x(g,{value:l.value,mode:"horizontal",options:a.value,inverted:s(n).header.inverted,"onUpdate:value":i},null,8,["value","options","inverted"])],4)]),_:1})])}}}),Ms=dt(Bs,[["__scopeId","data-v-bd84ad3a"]]),Is={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},As=W("path",{fill:"currentColor",d:"M21 3v6h-2V6.41l-3.29 3.3l-1.42-1.42L17.59 5H15V3zM3 3v6h2V6.41l3.29 3.3l1.42-1.42L6.41 5H9V3zm18 18v-6h-2v2.59l-3.29-3.29l-1.41 1.41L17.59 19H15v2zM9 21v-2H6.41l3.29-3.29l-1.41-1.42L5 17.59V15H3v6z"},null,-1),Ps=[As];function Ts(e,t){return C(),X("svg",Is,Ps)}const Fs={name:"gridicons-fullscreen",render:Ts},Es={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},Ds=W("path",{fill:"currentColor",d:"M14 10V4h2v2.59l3.29-3.29l1.41 1.41L17.41 8H20v2zM4 10V8h2.59l-3.3-3.29l1.42-1.42L8 6.59V4h2v6zm16 4v2h-2.59l3.29 3.29l-1.41 1.41L16 17.41V20h-2v-6zm-10 0v6H8v-2.59l-3.29 3.3l-1.42-1.42L6.59 16H4v-2z"},null,-1),Ls=[Ds];function Vs(e,t){return C(),X("svg",Es,Ls)}const Hs={name:"gridicons-fullscreen-exit",render:Vs},Us=E({name:"FullScreen",__name:"full-screen",setup(e){const{isFullscreen:t,toggle:o}=Hr(),n=ne();return(r,a)=>{const l=Hs,i=Fs,u=_t;return C(),q(u,{class:"w-40px h-full","tooltip-content":"全屏",inverted:s(n).header.inverted,onClick:s(o)},{default:R(()=>[s(t)?(C(),q(l,{key:0,class:"text-18px"})):(C(),q(i,{key:1,class:"text-18px"}))]),_:1},8,["inverted","onClick"])}}}),Ns=E({name:"ThemeMode",__name:"theme-mode",setup(e){const t=ne();return(o,n)=>{const r=ea,a=_t;return C(),q(a,{class:"w-40px",inverted:s(t).header.inverted,"tooltip-content":"主题模式"},{default:R(()=>[x(r,{dark:s(t).darkMode,class:"wh-full","onUpdate:dark":s(t).setDarkMode},null,8,["dark","onUpdate:dark"])]),_:1},8,["inverted"])}}}),Os={class:"inline-block",width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 134.49 134.49"},js=wo('<path d="M134.49 67.25A67.25 67.25 0 1167.25 0a67.23 67.23 0 0167.24 67.25" fill="#f3f3f2"></path><path fill="#f1caae" d="M64.47 103.16zm2.4-13.01c8.11-6.21 11-10.25 12.24-11a17.94 17.94 0 01-.69-4.23c-4 3.34-5.73 4.49-11 4.31-5.69.19-7.28-1.15-12-5.14l-.07-.09a19 19 0 01-.72 5.14c1.23.75 4.13 4.79 12.24 11.01z"></path><path d="M61.56 121.66c.31-2 .61-4 .9-5.91v-.11c.93-6 1.7-10.86 2-12.48a1.17 1.17 0 01-.36-.34.6.6 0 01-.09-.13c-.16-.36-.32-.69-.48-1 0-.06-.07-.13-.1-.2a16.73 16.73 0 01-2-4.43c0-.15 0-.3-.07-.46a4 4 0 00-1 2.65c.33 3.56-10.83-9.56-10.65-14.6a38.55 38.55 0 01-4 1.9 219.52 219.52 0 0015.85 35.11zm-37.93-27.6h-.09.05s.03.01.04 0zM73.3 99.2a4 4 0 00-1-2.64c0 .16 0 .31-.06.46A7.17 7.17 0 0172 98a27.91 27.91 0 01-1.71 3.52l-.11.21c-.16.31-.32.65-.48 1a1 1 0 01-.09.13 1.1 1.1 0 01-.37.34c.29 1.6 1.06 6.35 2 12.32a2.34 2.34 0 000 .26c.23 1.54.48 3.15.73 4.81a208.85 208.85 0 0015.5-34.21A37.69 37.69 0 0184 84.7c0 5.12-11 18.03-10.7 14.5zm36.4-5.09a5.22 5.22 0 01.63.11l-.73-.28s.08.06.1.17z" fill="#9d9d9d"></path><path d="M23.6 94.09h-.05a4.67 4.67 0 00-.84.15c-3 .81-5.08 8.11-6.94 16.26a67.51 67.51 0 0016.1 13.93 33.36 33.36 0 00-.42-4.63c-1.13-6.25-8.79-24.87-7.85-25.71zm94.03 17.67c-2-8.62-4-16.67-7.21-17.52h-.09a5.22 5.22 0 00-.63-.11c.39 1.91-6.82 19.65-7.91 25.69a34.76 34.76 0 00-.44 5.4" fill="#959494"></path><path d="M71.29 119.06h-1.65v-3.73h1.58v.15c-.92-6-1.69-10.72-2-12.32l-.1.07a1.29 1.29 0 01-.28.08v.09H68l-.89.06h-.56l-.88-.06h-.86v-.09a1.2 1.2 0 01-.27-.08l-.11-.07c-.29 1.62-1.06 6.44-2 12.48v-.31h1.59v3.73h-1.56v-3.31c-.29 1.87-.59 3.86-.9 5.91 0-.34.1-.69.15-1v1.28l.75 1.25v-2.62h1.65v3.73h-1c.57.91 1.14 1.78 1.7 2.58v-1.09h1.69v2.82c.25-.29.5-.6.75-.91v-1.91h1.42c.34-.48.68-1 1-1.49v-3.73h1.65v1.22l.73-1.22c-.25-1.66-.5-3.27-.73-4.81zm-1.65-13.74c.15.91.33 2 .53 3.3h-.53zm0 4.79h.77c.18 1.16.38 2.4.58 3.73h-1.35zm-3.14-5.22v3.73h-1.65v-3.73zm-2.39 9h-1.36c.21-1.33.4-2.57.59-3.73h.77zm0-5.22h-.54l.54-3.31zm2.39 15.66h-1.65v-3.73h1.65zm0-5.22h-1.65v-3.73h1.65zm0-5.22h-1.65v-3.73h1.65zm2.39 10.44h-1.64v-3.73h1.64zm0-5.22h-1.64v-3.73h1.64zm0-5.22h-1.64v-3.73h1.64zm0-5.22h-1.64v-3.73h1.64z" fill="#f0f0f0"></path><path d="M63.53 101.69zm-2.12-5.14zm10.86.51A7.17 7.17 0 0172 98a7.17 7.17 0 00.27-.94zm.07-.5zm-2.13 5.14zm-5.63 1.53a1.2 1.2 0 00.27.08v-3.64h1.65v3.73h-.79l.88.06h.56l.89-.06h-.79v-3.73h1.64v3.64a1.29 1.29 0 00.28-.08l.1-.07a1.1 1.1 0 00.37-.34v-3.15h1.64c-.29.57-.62 1.16-1 1.82A27.91 27.91 0 0072 98v-1.85c-.23-.29-.48-.57-.74-.86v2.89h-1.62v-3.73h.82c-.55-.52-1.11-1-1.63-1.49h-1.58v-1.5a3.56 3.56 0 01-.38-.47 2.79 2.79 0 01-.37.47V93h-1.59c-.52.47-1.08 1-1.62 1.49h.82v3.73h-1.65v-2.93c-.27.28-.52.57-.75.86V98a7.13 7.13 0 01-.23-.91 16.73 16.73 0 002 4.43c-.34-.65-.67-1.25-1-1.82h1.64v3.15a1.17 1.17 0 00.36.34zm2.67-8.78h1.64v3.73h-1.64zm-2.4 0h1.65v3.73h-1.65z" fill="#fff"></path><path fill="#040000" d="M66.5 99.67h-1.65v3.73h1.65v-3.73zm-1.65 5.22h1.65v3.73h-1.65zm0-10.44h1.65v3.73h-1.65zm0 15.66h1.65v3.73h-1.65zm0 15.66v1.09c.49.7 1 1.35 1.45 2l.2-.23v-2.82zm0-5.22h1.65v3.73h-1.65zm0-5.22h1.65v3.73h-1.65zm-3.29 6.33l.15.26v-1.28c-.05.36-.1.68-.15 1.02zm.9-23.48h1.65v-3.73h-.82c-.29.28-.56.56-.83.84zm-.75-2.03l-.3.4c0 .16 0 .31.07.46a7.13 7.13 0 00.23.91zm2.4 3.52h-1.64c.29.57.62 1.17 1 1.82 0 .07.07.14.1.2.16.32.32.65.48 1a.6.6 0 00.09.13zm0 20.88h-1.65v2.62q.34.57.69 1.11h1zm0-1.49v-3.73h-1.59v3.73zm0-10.44v-3.31l-.54 3.31zm-1.36 5.22h1.36v-3.73h-.77c-.19 1.16-.34 2.4-.59 3.73zm6.89 6.71v3.73c.53-.8 1.06-1.63 1.6-2.51v-1.22zm0-5.22v3.73h1.65v-3.32a2.34 2.34 0 010-.26v-.15zM66.5 91.46c-.4.43-1 .94-1.59 1.5h1.59zM68.83 93c-.63-.56-1.19-1.07-1.58-1.5V93zm-1.58 17.11h1.65v3.73h-1.65zm0 10.44h1.65v3.73h-1.65zm0-5.22h1.65v3.73h-1.65zm1.64-15.66h-1.64v3.73h1.64v-3.73zm-1.64 5.22h1.65v3.73h-1.65zm0 22.79c.47-.6.94-1.23 1.42-1.91h-1.42zm0-33.23h1.65v3.73h-1.65zm2.39 10.87v3.3h.53c-.17-1.27-.38-2.39-.53-3.3zm0-5.65v3.15a1 1 0 00.09-.13c.16-.36.32-.68.48-1l.11-.21c.34-.66.67-1.25 1-1.82zM72 98a7.17 7.17 0 00.24-.91c0-.15 0-.3.06-.46-.1-.13-.2-.27-.31-.4V98zm-2.36.18h1.65v-2.89l-.83-.84h-.82zm.77 11.93h-.77v3.73H71c-.21-1.33-.41-2.57-.59-3.73z"></path><path d="M60.45 99.2a4 4 0 011-2.65l.3-.4c.23-.29.48-.58.75-.86s.54-.56.83-.84c.54-.52 1.1-1 1.62-1.49s1.19-1.07 1.59-1.5a2.79 2.79 0 00.37-.47 3.56 3.56 0 00.38.47c.39.43 1 .94 1.58 1.5s1.08 1 1.63 1.49l.83.84c.26.29.51.57.74.86.11.13.21.27.31.4a4 4 0 011 2.64C73 102.73 84 89.82 84 84.7v-.36c-.09-.72-2.2-1.82-4.15-5.11-.15-.26-.36-.27-.68-.08-1.23.75-4.13 4.79-12.24 11-8.11-6.22-11-10.26-12.24-11-.31-.19-.53-.18-.68.08-2 3.29-4.05 4.39-4.14 5.11a2.17 2.17 0 000 .26c-.25 5.04 10.91 18.16 10.58 14.6z" fill="#838384"></path><path d="M62.49 132.11a13.73 13.73 0 003.81-3.29c-.47-.61-1-1.26-1.45-2s-1.13-1.67-1.7-2.58q-.34-.54-.69-1.11l-.75-1.25-.15-.26A219.52 219.52 0 0145.81 86.5c-.49-1.25-21 7-22.17 7.56-.94.84 6.72 19.46 7.85 25.71a33.36 33.36 0 01.42 4.63A66.72 66.72 0 0062 134.27c.15-1.27.3-2.06.49-2.16z" fill="#282629"></path><path d="M101.35 125.2a34.76 34.76 0 01.44-5.4c1.09-6 8.3-23.78 7.91-25.69 0-.08 0-.15-.09-.17-1.17-.52-21.69-8.84-22.13-7.56A208.85 208.85 0 0172 120.55l-.73 1.22c-.54.88-1.07 1.71-1.6 2.51-.34.51-.68 1-1 1.49-.48.68-1 1.31-1.42 1.91-.25.31-.5.62-.75.91l-.2.23a13.73 13.73 0 01-3.81 3.29c-.19.1-.34.89-.47 2.16 1.73.13 3.47.22 5.23.22a66.88 66.88 0 0034.1-9.29" fill="#1a1a1b"></path><path d="M67.41 79.23c5.28.18 7-1 11-4.31l1-.83c4.93-4.19 2.44-12.94 5.44-12.39s6.29-7.44 4.18-9.45c-1-.09-1.87.88-2.66 2.2-.89 1.49-.54 3.79-1.42 3.74-1.19-4-.93-7.62-.69-11.81C76 48.8 67.47 50.06 60.59 45c-1.41-1-2.77-2.4-4.91-2.36-2.47 0-3.46 1.5-3.11 3.87.17 1.19.25 2.8.32 3.5A10.07 10.07 0 0151 56.1c-.37.38-1.27 2-1.8 2.09s-.14-2.47-1.62-4.69c-1.16-1.75-1.7-1.37-1.7-1.37C43.56 54 47 62.25 50 61.7s.55 8.1 5.37 12.31l.08.08c4.68 3.99 6.27 5.33 11.96 5.14z" fill="#f9d2b5"></path><path d="M47.61 53.5c1.48 2.22 1.18 4.8 1.62 4.69s1.43-1.71 1.8-2.09a10.07 10.07 0 001.86-6.1c-.07-.7-.15-2.31-.32-3.5-.35-2.37.64-3.83 3.11-3.87 2.14 0 3.5 1.32 4.91 2.36 6.88 5.05 15.4 3.79 23.66 1.37-.24 4.19-.5 7.78.69 11.81.88.05.53-2.25 1.42-3.74.79-1.32 1.63-2.29 2.66-2.2a2.87 2.87 0 01.38.08c2.46-5.22 2.72-13.7.29-18.93s-6.3-7.68-10.14-12c.35 1.18-1.24 2.95-2.75 3.08-1.26.12-3.35-.56-4.61-.71-6.36-.77-10-1.06-15.18.77a19.36 19.36 0 00-7.22 4.22 19.88 19.88 0 00-5.18 10.65 26.75 26.75 0 00-.19 6.38c.12 1.14.81 5.36 1.49 6.38 0-.02.54-.4 1.7 1.35z" fill="#554c44"></path>',12),Ws=[js];function Ks(e,t){return C(),X("svg",Os,Ws)}const qs={name:"local-avatar",render:Ks},Xs={class:"pl-8px text-16px font-medium"},Gs=E({name:"UserAvatar",__name:"user-avatar",setup(e){const t=Ur(),o=ne(),{iconRender:n}=cn(),r=[{label:"用户中心",key:"user-center",icon:n({icon:"carbon:user-avatar"})},{type:"divider",key:"divider"},{label:"退出登录",key:"logout",icon:n({icon:"carbon:logout"})}];function a(l){var u;l==="logout"&&((u=window.$dialog)==null||u.info({title:"提示",content:"您确定要退出登录吗？",positiveText:"确定",negativeText:"取消",onPositiveClick:()=>{t.resetAuthStore()}}))}return(l,i)=>{const u=qs,v=_t,g=Wt;return C(),q(g,{options:r,onSelect:a},{default:R(()=>[x(v,{class:"px-12px",inverted:s(o).header.inverted},{default:R(()=>[x(u,{class:"text-32px"}),W("span",Xs,Te(s(t).userInfo.nickname),1)]),_:1},8,["inverted"])]),_:1})}}}),Ys=E({name:"SettingButton",__name:"setting-button",setup(e){const t=Se(),o=ne();return(n,r)=>{const a=In,l=_t;return C(),q(l,{class:"w-40px h-full","tooltip-content":"主题配置",inverted:s(o).header.inverted,onClick:s(t).toggleSettingDrawerVisible},{default:R(()=>[x(a,{class:"text-20px"})]),_:1},8,["inverted","onClick"])}}}),Zs={key:1,class:"flex-1-hidden flex-y-center h-full"},Js={class:"flex justify-end h-full"},Qs=E({name:"GlobalHeader",__name:"index",props:{showLogo:{},showHeaderMenu:{},showMenuCollapse:{}},setup(e){const t=ne(),{isMobile:o}=$n(),n={}.VITE_VERCEL!=="Y";return(r,a)=>{const l=xt;return C(),q(l,{class:"global-header flex-y-center h-full",inverted:s(t).header.inverted},{default:R(()=>[r.showLogo?(C(),q(Fo,{key:0,"show-title":!0,class:"h-full",style:He({width:s(t).sider.width+"px"})},null,8,["style"])):ze("",!0),r.showHeaderMenu?(C(),q(s(Ms),{key:2})):(C(),X("div",Zs,[r.showMenuCollapse||s(o)?(C(),q(s(Ss),{key:0})):ze("",!0),s(t).header.crumb.visible&&!s(o)?(C(),q(s($s),{key:1})):ze("",!0)])),W("div",Js,[x(s(Us)),x(s(Ns)),s(n)?(C(),q(s(Ys),{key:0})):ze("",!0),x(s(Gs))])]),_:1},8,["inverted"])}}}),ec=dt(Qs,[["__scopeId","data-v-62030539"]]),tc=E({name:"BetterScroll",__name:"better-scroll",props:{options:{}},setup(e,{expose:t}){const o=e,n=U(),r=U(),a=U(),l=A(()=>!!o.options.scrollY);function i(){n.value&&(r.value=new na(n.value,o.options))}const{width:u}=Vo(n),{width:v,height:g}=Vo(a);return be([()=>u.value,()=>v.value,()=>g.value],()=>{r.value&&r.value.refresh()}),Nt(()=>{i()}),t({instance:r}),(m,f)=>(C(),X("div",{ref_key:"bsWrap",ref:n,class:"h-full text-left"},[W("div",{ref_key:"bsContent",ref:a,class:ge(["inline-block",{"h-full":!l.value}])},[mt(m.$slots,"default")],2)],512))}}),oc=E({name:"ContextMenu",__name:"context-menu",props:{visible:{type:Boolean,default:!1},currentPath:{default:""},affix:{type:Boolean},x:{},y:{}},emits:["update:visible"],setup(e,{emit:t}){const o=e,n=Se(),r=ko(),{iconRender:a}=cn(),l=A({get(){return o.visible},set(m){t("update:visible",m)}});function i(){l.value=!1}const u=A(()=>[{label:"内容全屏",key:"full-content",icon:a({icon:"gridicons-fullscreen"})},{label:"重新加载",key:"reload-current",disabled:o.currentPath!==r.activeTab,icon:a({icon:"ant-design:reload-outlined"})},{label:"关闭",key:"close-current",disabled:o.currentPath===r.homeTab.fullPath||!!o.affix,icon:a({icon:"ant-design:close-outlined"})},{label:"关闭其他",key:"close-other",icon:a({icon:"ant-design:column-width-outlined"})},{label:"关闭左侧",key:"close-left",icon:a({icon:"mdi:format-horizontal-align-left"})},{label:"关闭右侧",key:"close-right",icon:a({icon:"mdi:format-horizontal-align-right"})},{label:"关闭所有",key:"close-all",icon:a({icon:"ant-design:line-outlined"})}]),v=new Map([["full-content",()=>{n.setContentFull(!0)}],["reload-current",()=>{n.reloadPage()}],["close-current",()=>{r.removeTab(o.currentPath)}],["close-other",()=>{r.clearTab([o.currentPath])}],["close-left",()=>{r.clearLeftTab(o.currentPath)}],["close-right",()=>{r.clearRightTab(o.currentPath)}],["close-all",()=>{r.clearAllTab()}]]);function g(m){const f=m,k=v.get(f);k&&k(),i()}return(m,f)=>{const k=Wt;return C(),q(k,{show:l.value,options:u.value,placement:"bottom-start",x:m.x,y:m.y,onClickoutside:i,onSelect:g},null,8,["show","options","x","y"])}}}),nc=E({name:"TabDetail",__name:"index",emits:["scroll"],setup(e,{emit:t}){const o=ne(),n=ko(),r=A(()=>o.tab.mode==="chrome"),a=U();async function l(){if(await et(),a.value&&a.value.children.length&&a.value.children[n.activeTabIndex]){const f=a.value.children[n.activeTabIndex],{x:k,width:I}=f.getBoundingClientRect(),T=k+I/2;setTimeout(()=>{t("scroll",T)},50)}}const i=Nr({visible:!1,affix:!1,x:0,y:0,currentPath:""});function u(f){Object.assign(i,f)}let v=!1;function g(f){v||u({visible:f})}async function m(f,k,I){f.preventDefault();const{clientX:T,clientY:F}=f;v=!0;const D=i.visible?150:0;u({visible:!1}),setTimeout(()=>{u({visible:!0,x:T,y:F,currentPath:k,affix:I}),v=!1},D)}return be(()=>n.activeTabIndex,()=>{l()},{immediate:!0}),(f,k)=>{const I=jr;return C(),X(ae,null,[W("div",{ref_key:"tabRef",ref:a,class:ge(["flex h-full pr-18px",[r.value?"items-end":"items-center gap-12px"]])},[(C(!0),X(ae,null,lt(s(n).tabs,T=>(C(),q(s(Or),{key:T.fullPath,mode:s(o).tab.mode,"dark-mode":s(o).darkMode,active:s(n).activeTab===T.fullPath,"active-color":s(o).themeColor,closable:!(T.name===s(n).homeTab.name||T.meta.affix),onClick:F=>s(n).handleClickTab(T.fullPath),onClose:F=>s(n).removeTab(T.fullPath),onContextmenu:F=>m(F,T.fullPath,T.meta.affix)},{prefix:R(()=>[x(I,{icon:T.meta.icon,"local-icon":T.meta.localIcon,class:"inline-block align-text-bottom text-16px"},null,8,["icon","local-icon"])]),default:R(()=>[Me(" "+Te(T.meta.i18nTitle?s(Ht)(T.meta.i18nTitle):T.meta.title),1)]),_:2},1032,["mode","dark-mode","active","active-color","closable","onClick","onClose","onContextmenu"]))),128))],2),x(s(oc),{visible:i.visible,"current-path":i.currentPath,affix:i.affix,x:i.x,y:i.y,"onUpdate:visible":g},null,8,["visible","current-path","affix","x","y"])],64)}}}),rc={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},ac=W("path",{fill:"currentColor",d:"M17.65 6.35A7.958 7.958 0 0 0 12 4a8 8 0 0 0-8 8a8 8 0 0 0 8 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18a6 6 0 0 1-6-6a6 6 0 0 1 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35Z"},null,-1),lc=[ac];function ic(e,t){return C(),X("svg",rc,lc)}const sc={name:"mdi-refresh",render:ic},cc=E({name:"ReloadButton",__name:"index",setup(e){const t=Se(),o=Rt(),n=ct(),{loading:r,startLoading:a,endLoading:l}=ta();function i(){const u=o.cacheRoutes.includes(String(n.name));u&&o.removeCacheRoute(n.name),a(),t.reloadPage(),setTimeout(()=>{u&&o.addCacheRoute(n.name),l()},1e3)}return(u,v)=>{const g=sc,m=_t;return C(),q(m,{class:"w-64px h-full","tooltip-content":"重新加载",placement:"bottom-end",onClick:i},{default:R(()=>[x(g,{class:ge(["text-22px",{"animate-spin":s(r)}])},null,8,["class"])]),_:1})}}}),dc=E({name:"GlobalTab",__name:"index",setup(e){const t=ct(),o=ne(),n=ko(),r=Wr(),a=U(),{width:l,left:i}=Kr(a),u=U(),v=!!r.device.type;function g(f){var T;const I=f-i.value-l.value/2;if(u.value){const{maxScrollX:F,x:D}=u.value.instance,K=F-D,H=I>0?Math.max(-I,K):Math.min(-I,-D);(T=u.value)==null||T.instance.scrollBy(H,0,300)}}function m(){n.iniTabStore(t)}return be(()=>t.fullPath,()=>{n.addTab(t),n.setActiveTab(t.fullPath)}),m(),(f,k)=>{const I=tc,T=xt;return C(),q(T,{class:"global-tab flex-y-center w-full pl-16px",style:He({height:s(o).tab.height+"px"})},{default:R(()=>[W("div",{ref_key:"bsWrapper",ref:a,class:"flex-1-hidden h-full"},[x(I,{ref_key:"bsScroll",ref:u,options:{scrollX:!0,scrollY:!1,click:s(v)}},{default:R(()=>[x(s(nc),{onScroll:g})]),_:1},8,["options"])],512),x(s(cc))]),_:1},8,["style"])}}}),uc=dt(dc,[["__scopeId","data-v-2aed69b2"]]),hc=E({name:"VerticalMenu",__name:"vertical-menu",setup(e){const t=ct(),o=Se(),n=ne(),r=Rt(),{routerPush:a}=Bt(),l=A(()=>Co(r.menus)),i=A(()=>{var m;return(m=t.meta)!=null&&m.activeMenu?t.meta.activeMenu:t.name}),u=U([]);function v(m,f){a(f.routePath)}function g(m){u.value=m}return be(()=>t.name,()=>{u.value=dn(i.value,l.value)},{immediate:!0}),(m,f)=>{const k=Ao,I=Kt;return C(),q(I,{class:"flex-1-hidden"},{default:R(()=>[x(k,{value:i.value,collapsed:s(o).siderCollapse,"collapsed-width":s(n).sider.collapsedWidth,"collapsed-icon-size":22,options:l.value,"expanded-keys":u.value,indent:18,inverted:!s(n).darkMode&&s(n).sider.inverted,"onUpdate:value":v,"onUpdate:expandedKeys":g},null,8,["value","collapsed","collapsed-width","options","expanded-keys","inverted"])]),_:1})}}}),fc=E({name:"VerticalSider",__name:"index",setup(e){const t=Se(),o=ne(),n=A(()=>o.layout.mode==="horizontal-mix"),r=A(()=>!t.siderCollapse&&o.layout.mode!=="vertical-mix");return(a,l)=>{const i=xt;return C(),q(i,{class:"flex-col-stretch h-full",inverted:s(o).sider.inverted},{default:R(()=>[n.value?ze("",!0):(C(),q(s(Fo),{key:0,"show-title":r.value,style:He({height:s(o).header.height+"px"})},null,8,["show-title","style"])),x(s(hc))]),_:1},8,["inverted"])}}}),pc=E({name:"MixMenuDetail",__name:"mix-menu-detail",props:{routeName:{},label:{},activeRouteName:{},icon:{type:[Object,Function],default:void 0},isMini:{type:Boolean,default:!1}},setup(e){const t=e,{bool:o,setTrue:n,setFalse:r}=yo(),a=A(()=>t.routeName===t.activeRouteName);return(l,i)=>(C(),X("div",{class:"mb-6px px-4px cursor-pointer",onMouseenter:i[0]||(i[0]=(...u)=>s(n)&&s(n)(...u)),onMouseleave:i[1]||(i[1]=(...u)=>s(r)&&s(r)(...u))},[W("div",{class:ge(["flex-center flex-col py-12px rounded-2px bg-transparent transition-colors duration-300 ease-in-out",{"text-primary !bg-primary_active":a.value,"text-primary":s(o)}])},[(C(),q(lo(l.icon),{class:ge([l.isMini?"text-16px":"text-20px"])},null,8,["class"])),W("p",{class:ge(["w-full text-center ellipsis-text text-12px transition-height duration-300 ease-in-out",[l.isMini?"h-0 pt-0":"h-24px pt-4px"]])},Te(l.label),3)],2)],32))}}),vc={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},mc=W("path",{fill:"currentColor",d:"M16 12V4h1V2H7v2h1v8l-2 2v2h5.2v6h1.6v-6H18v-2l-2-2Z"},null,-1),bc=[mc];function gc(e,t){return C(),X("svg",vc,bc)}const xc={name:"mdi-pin",render:gc},_c={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},yc=W("path",{fill:"currentColor",d:"M2 5.27L3.28 4L20 20.72L18.73 22l-5.93-5.93V22h-1.6v-6H6v-2l2-2v-.73l-6-6M16 12l2 2v2h-.18L8 6.18V4H7V2h10v2h-1v8Z"},null,-1),wc=[yc];function Cc(e,t){return C(),X("svg",_c,wc)}const kc={name:"mdi-pin-off",render:Cc},zc={class:"text-primary pl-8px text-16px font-bold"},Sc=E({name:"MixMenuDrawer",__name:"mix-menu-drawer",props:{visible:{type:Boolean},menus:{}},setup(e){const t=e,o=ct(),n=Se(),r=ne(),{routerPush:a}=Bt(),{title:l}=qr(),i=A(()=>t.visible&&t.menus.length||n.mixSiderFixed),u=A(()=>{var f;return(f=o.meta)!=null&&f.activeMenu?o.meta.activeMenu:o.name}),v=U([]);function g(f,k){a(k.routePath)}function m(f){v.value=f}return be(()=>o.name,()=>{v.value=dn(u.value,t.menus)},{immediate:!0}),(f,k)=>{const I=kc,T=xc,F=Ao,D=Kt,K=xt;return C(),X("div",{class:"relative h-full transition-width duration-300 ease-in-out",style:He({width:s(n).mixSiderFixed?s(r).sider.mixChildMenuWidth+"px":"0px"})},[x(K,{class:"drawer-shadow absolute-lt flex-col-stretch h-full nowrap-hidden",inverted:s(r).sider.inverted,style:He({width:i.value?s(r).sider.mixChildMenuWidth+"px":"0px"})},{default:R(()=>[W("header",{class:"header-height flex-y-center justify-between",style:He({height:s(r).header.height+"px"})},[W("h2",zc,Te(s(l)),1),W("div",{class:"px-8px text-16px text-gray-600 cursor-pointer",onClick:k[0]||(k[0]=(...H)=>s(n).toggleMixSiderFixed&&s(n).toggleMixSiderFixed(...H))},[s(n).mixSiderFixed?(C(),q(I,{key:0})):(C(),q(T,{key:1}))])],4),x(D,{class:"flex-1-hidden"},{default:R(()=>[x(F,{value:u.value,options:f.menus,"expanded-keys":v.value,indent:18,inverted:!s(r).darkMode&&s(r).sider.inverted,"onUpdate:value":g,"onUpdate:expandedKeys":m},null,8,["value","options","expanded-keys","inverted"])]),_:1})]),_:1},8,["inverted","style"])],4)}}}),$c=dt(Sc,[["__scopeId","data-v-f43dab98"]]),Rc={class:"inline-block",viewBox:"0 0 256 256",width:"1em",height:"1em"},Bc=W("path",{fill:"currentColor",d:"M208.49 199.51a12 12 0 0 1-17 17l-80-80a12 12 0 0 1 0-17l80-80a12 12 0 0 1 17 17L137 128ZM57 128l71.52-71.51a12 12 0 0 0-17-17l-80 80a12 12 0 0 0 0 17l80 80a12 12 0 0 0 17-17Z"},null,-1),Mc=[Bc];function Ic(e,t){return C(),X("svg",Rc,Mc)}const Ac={name:"ph-caret-double-left-bold",render:Ic},Pc={class:"inline-block",viewBox:"0 0 256 256",width:"1em",height:"1em"},Tc=W("path",{fill:"currentColor",d:"m144.49 136.49l-80 80a12 12 0 0 1-17-17L119 128L47.51 56.49a12 12 0 0 1 17-17l80 80a12 12 0 0 1-.02 17Zm80-17l-80-80a12 12 0 1 0-17 17L199 128l-71.52 71.51a12 12 0 0 0 17 17l80-80a12 12 0 0 0 .01-17Z"},null,-1),Fc=[Tc];function Ec(e,t){return C(),X("svg",Pc,Fc)}const Dc={name:"ph-caret-double-right-bold",render:Ec},Lc=E({name:"MixMenuCollapse",__name:"mix-menu-collapse",setup(e){const t=Se();return(o,n)=>{const r=Dc,a=Ac,l=je;return C(),q(l,{text:!0,class:"h-36px",onClick:s(t).toggleSiderCollapse},{default:R(()=>[s(t).siderCollapse?(C(),q(r,{key:0,class:"text-16px"})):(C(),q(a,{key:1,class:"text-16px"}))]),_:1},8,["onClick"])}}}),Vc={class:"flex-1-hidden flex-col-stretch h-full"},Hc=E({name:"VerticalMixSider",__name:"index",setup(e){const t=ct(),o=Se(),n=ne(),r=Rt(),{routerPush:a}=Bt(),{bool:l,setTrue:i,setFalse:u}=yo(),v=U("");function g(F){v.value=F}const m=A(()=>r.menus.map(F=>{const{routeName:D,label:K,i18nTitle:H}=F,N=F==null?void 0:F.icon,M=!!(F.children&&F.children.length);return{routeName:D,label:H?Ht(H):K,icon:N,hasChildren:M}}));function f(){m.value.some(F=>{var H;const D=(H=t.meta)!=null&&H.activeMenu?t.meta.activeMenu:t.name,K=D==null?void 0:D.includes(F.routeName);return K&&g(F.routeName),K})}function k(F,D){g(F),D?i():a({name:F})}function I(){f(),u()}const T=A(()=>{const F=[];return r.menus.some(D=>{var H;const K=D.routeName===v.value&&!!((H=D.children)!=null&&H.length);return K&&F.push(...Co(D.children||[])),K}),F});return be(()=>t.name,()=>{f()},{immediate:!0}),(F,D)=>{const K=Kt,H=xt;return C(),q(H,{class:"flex h-full",inverted:s(n).sider.inverted,onMouseleave:I},{default:R(()=>[W("div",Vc,[x(s(Fo),{"show-title":!1,style:He({height:s(n).header.height+"px"})},null,8,["style"]),x(K,{class:"flex-1-hidden"},{default:R(()=>[(C(!0),X(ae,null,lt(m.value,N=>(C(),q(s(pc),{key:N.routeName,"route-name":N.routeName,"active-route-name":v.value,label:N.label,icon:N.icon,"is-mini":s(o).siderCollapse,onClick:M=>k(N.routeName,N.hasChildren)},null,8,["route-name","active-route-name","label","icon","is-mini","onClick"]))),128))]),_:1}),x(s(Lc))]),x(s($c),{visible:s(l),menus:T.value},null,8,["visible","menus"])]),_:1},8,["inverted"])}}}),Uc=E({name:"GlobalSider",__name:"index",setup(e){const t=ne(),o=A(()=>t.layout.mode==="vertical-mix");return(n,r)=>o.value?(C(),q(s(Hc),{key:0,class:"global-sider"})):(C(),q(s(fc),{key:1,class:"global-sider"}))}}),Nc=dt(Uc,[["__scopeId","data-v-afe6955b"]]),Oc=W("span",null,"Copyright ©2021 Soybean Admin",-1),jc=E({name:"GlobalFooter",__name:"index",setup(e){const t=ne();return(o,n)=>{const r=xt;return C(),q(r,{class:"flex-center h-full",inverted:s(t).footer.inverted},{default:R(()=>[Oc]),_:1},8,["inverted"])}}}),ed=E({name:"BasicLayout",__name:"index",setup(e){const t=Se(),o=ne(),{mode:n,isMobile:r,headerProps:a,siderVisible:l,siderWidth:i,siderCollapsedWidth:u}=$n();return(v,g)=>{const m=Ua;return C(),X(ae,null,[x(s(Yr),{mode:s(n),"is-mobile":s(r),"scroll-mode":s(o).scrollMode,"scroll-el-id":s(t).scrollElId,"full-content":s(t).contentFull,"fixed-top":s(o).fixedHeaderAndTab,"header-height":s(o).header.height,"tab-visible":s(o).tab.visible,"tab-height":s(o).tab.height,"content-class":s(t).disableMainXScroll?"overflow-x-hidden":"","sider-visible":s(l),"sider-collapse":s(t).siderCollapse,"sider-width":s(i),"sider-collapsed-width":s(u),"footer-visible":s(o).footer.visible,"fixed-footer":s(o).footer.fixed,"right-footer":s(o).footer.right,onClickMobileSiderMask:g[0]||(g[0]=f=>s(t).setSiderCollapse(!0))},{header:R(()=>[x(s(ec),Xr(Gr(s(a))),null,16)]),tab:R(()=>[x(s(uc))]),sider:R(()=>[x(s(Nc))]),footer:R(()=>[x(s(jc))]),default:R(()=>[x(s(ra))]),_:1},8,["mode","is-mobile","scroll-mode","scroll-el-id","full-content","fixed-top","header-height","tab-visible","tab-height","content-class","sider-visible","sider-collapse","sider-width","sider-collapsed-width","footer-visible","fixed-footer","right-footer"]),(C(),q(m,{key:s(o).scrollMode,"listen-to":`#${s(t).scrollElId}`,class:"z-100"},null,8,["listen-to"])),x(s(fs))],64)}}});export{ed as default};
