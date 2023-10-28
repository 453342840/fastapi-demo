import{o as ie,p as T,ce as Ee,i as ke,c9 as De,cM as mn,cN as ge,cO as K,cP as gn,cQ as G,I as Be,ct as bn,d as E,h as o,cR as yn,c as x,e as z,f as d,aD as wn,j as Ie,t as ye,aH as xn,B as Y,N as le,aI as Cn,F as Pn,r as C,cS as Sn,n as _,aA as X,g as We,s as se,cT as Mn,_ as zn,as as ze,v as Tn,c3 as Fn,w as Te,E as An,a7 as Le,y as _n,at as re,ae as Rn,aw as $n,aN as En,ap as kn,C as Fe,S as Ae,a0 as oe,aM as Dn,a4 as M,U as _e,cU as Bn,H as In,aL as Wn,cV as Ln,aF as Re,b9 as Vn}from"./index-cbb60d43.js";function Nn(t,a="default",r=[]){const v=t.$slots[a];return v===void 0?r:v()}function On(t,a){return ie(t,r=>{r!==void 0&&(a.value=r)}),T(()=>t.value===void 0?a.value:t.value)}var jn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Un=/^\w*$/;function Hn(t,a){if(Ee(t))return!1;var r=typeof t;return r=="number"||r=="symbol"||r=="boolean"||t==null||ke(t)?!0:Un.test(t)||!jn.test(t)||a!=null&&t in Object(a)}var qn="Expected a function";function xe(t,a){if(typeof t!="function"||a!=null&&typeof a!="function")throw new TypeError(qn);var r=function(){var l=arguments,v=a?a.apply(this,l):l[0],i=r.cache;if(i.has(v))return i.get(v);var f=t.apply(this,l);return r.cache=i.set(v,f)||i,f};return r.cache=new(xe.Cache||De),r}xe.Cache=De;var Kn=500;function Gn(t){var a=xe(t,function(l){return r.size===Kn&&r.clear(),l}),r=a.cache;return a}var Xn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Yn=/\\(\\)?/g,Jn=Gn(function(t){var a=[];return t.charCodeAt(0)===46&&a.push(""),t.replace(Xn,function(r,l,v,i){a.push(v?i.replace(Yn,"$1"):l||r)}),a});const Zn=Jn;function Qn(t,a){return Ee(t)?t:Hn(t,a)?[t]:Zn(mn(t))}var er=1/0;function tr(t){if(typeof t=="string"||ke(t))return t;var a=t+"";return a=="0"&&1/t==-er?"-0":a}function nr(t,a){a=Qn(a,t);for(var r=0,l=a.length;t!=null&&r<l;)t=t[tr(a[r++])];return r&&r==l?t:void 0}function la(t,a,r){var l=t==null?void 0:nr(t,a);return l===void 0?r:l}const rr={name:"en-US",global:{undo:"Undo",redo:"Redo",confirm:"Confirm",clear:"Clear"},Popconfirm:{positiveText:"Confirm",negativeText:"Cancel"},Cascader:{placeholder:"Please Select",loading:"Loading",loadingRequiredMessage:t=>`Please load all ${t}'s descendants before checking it.`},Time:{dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss"},DatePicker:{yearFormat:"yyyy",monthFormat:"MMM",dayFormat:"eeeeee",yearTypeFormat:"yyyy",monthTypeFormat:"yyyy-MM",dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss",quarterFormat:"yyyy-qqq",clear:"Clear",now:"Now",confirm:"Confirm",selectTime:"Select Time",selectDate:"Select Date",datePlaceholder:"Select Date",datetimePlaceholder:"Select Date and Time",monthPlaceholder:"Select Month",yearPlaceholder:"Select Year",quarterPlaceholder:"Select Quarter",startDatePlaceholder:"Start Date",endDatePlaceholder:"End Date",startDatetimePlaceholder:"Start Date and Time",endDatetimePlaceholder:"End Date and Time",startMonthPlaceholder:"Start Month",endMonthPlaceholder:"End Month",monthBeforeYear:!0,firstDayOfWeek:6,today:"Today"},DataTable:{checkTableAll:"Select all in the table",uncheckTableAll:"Unselect all in the table",confirm:"Confirm",clear:"Clear"},LegacyTransfer:{sourceTitle:"Source",targetTitle:"Target"},Transfer:{selectAll:"Select all",unselectAll:"Unselect all",clearAll:"Clear",total:t=>`Total ${t} items`,selected:t=>`${t} items selected`},Empty:{description:"No Data"},Select:{placeholder:"Please Select"},TimePicker:{placeholder:"Select Time",positiveText:"OK",negativeText:"Cancel",now:"Now"},Pagination:{goto:"Goto",selectionSuffix:"page"},DynamicTags:{add:"Add"},Log:{loading:"Loading"},Input:{placeholder:"Please Input"},InputNumber:{placeholder:"Please Input"},DynamicInput:{create:"Create"},ThemeEditor:{title:"Theme Editor",clearAllVars:"Clear All Variables",clearSearch:"Clear Search",filterCompName:"Filter Component Name",filterVarName:"Filter Variable Name",import:"Import",export:"Export",restore:"Reset to Default"},Image:{tipPrevious:"Previous picture (←)",tipNext:"Next picture (→)",tipCounterclockwise:"Counterclockwise",tipClockwise:"Clockwise",tipZoomOut:"Zoom out",tipZoomIn:"Zoom in",tipClose:"Close (Esc)",tipOriginalSize:"Zoom to original size"}},ar=rr;var or={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},ir=function(a,r,l){var v,i=or[a];return typeof i=="string"?v=i:r===1?v=i.one:v=i.other.replace("{{count}}",r.toString()),l!=null&&l.addSuffix?l.comparison&&l.comparison>0?"in "+v:v+" ago":v};const lr=ir;var sr={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},cr={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},ur={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},dr={date:ge({formats:sr,defaultWidth:"full"}),time:ge({formats:cr,defaultWidth:"full"}),dateTime:ge({formats:ur,defaultWidth:"full"})};const hr=dr;var fr={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},pr=function(a,r,l,v){return fr[a]};const vr=pr;var mr={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},gr={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},br={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},yr={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},wr={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},xr={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Cr=function(a,r){var l=Number(a),v=l%100;if(v>20||v<10)switch(v%10){case 1:return l+"st";case 2:return l+"nd";case 3:return l+"rd"}return l+"th"},Pr={ordinalNumber:Cr,era:K({values:mr,defaultWidth:"wide"}),quarter:K({values:gr,defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:K({values:br,defaultWidth:"wide"}),day:K({values:yr,defaultWidth:"wide"}),dayPeriod:K({values:wr,defaultWidth:"wide",formattingValues:xr,defaultFormattingWidth:"wide"})};const Sr=Pr;var Mr=/^(\d+)(th|st|nd|rd)?/i,zr=/\d+/i,Tr={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Fr={any:[/^b/i,/^(a|c)/i]},Ar={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},_r={any:[/1/i,/2/i,/3/i,/4/i]},Rr={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},$r={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Er={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},kr={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Dr={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Br={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Ir={ordinalNumber:gn({matchPattern:Mr,parsePattern:zr,valueCallback:function(a){return parseInt(a,10)}}),era:G({matchPatterns:Tr,defaultMatchWidth:"wide",parsePatterns:Fr,defaultParseWidth:"any"}),quarter:G({matchPatterns:Ar,defaultMatchWidth:"wide",parsePatterns:_r,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:G({matchPatterns:Rr,defaultMatchWidth:"wide",parsePatterns:$r,defaultParseWidth:"any"}),day:G({matchPatterns:Er,defaultMatchWidth:"wide",parsePatterns:kr,defaultParseWidth:"any"}),dayPeriod:G({matchPatterns:Dr,defaultMatchWidth:"any",parsePatterns:Br,defaultParseWidth:"any"})};const Wr=Ir;var Lr={code:"en-US",formatDistance:lr,formatLong:hr,formatRelative:vr,localize:Sr,match:Wr,options:{weekStartsOn:0,firstWeekContainsDate:1}};const Vr=Lr,Nr={name:"en-US",locale:Vr},Or=Nr;function jr(t){const{mergedLocaleRef:a,mergedDateLocaleRef:r}=Be(bn,null)||{},l=T(()=>{var i,f;return(f=(i=a==null?void 0:a.value)===null||i===void 0?void 0:i[t])!==null&&f!==void 0?f:ar[t]});return{dateLocaleRef:T(()=>{var i;return(i=r==null?void 0:r.value)!==null&&i!==void 0?i:Or}),localeRef:l}}const Ur=E({name:"Eye",render(){return o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},o("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),o("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),Hr=E({name:"EyeOff",render(){return o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},o("path",{d:"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",fill:"currentColor"}),o("path",{d:"M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",fill:"currentColor"}),o("path",{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",fill:"currentColor"}),o("path",{d:"M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",fill:"currentColor"}),o("path",{d:"M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",fill:"currentColor"}))}}),qr=E({name:"ChevronDown",render(){return o("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o("path",{d:"M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",fill:"currentColor"}))}}),Kr=yn("clear",o("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},o("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},o("g",{fill:"currentColor","fill-rule":"nonzero"},o("path",{d:"M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"}))))),Gr=x("base-clear",`
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`,[z(">",[d("clear",`
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `,[z("&:hover",`
 color: var(--n-clear-color-hover)!important;
 `),z("&:active",`
 color: var(--n-clear-color-pressed)!important;
 `)]),d("placeholder",`
 display: flex;
 `),d("clear, placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[wn({originalTransform:"translateX(-50%) translateY(-50%)",left:"50%",top:"50%"})])])]),we=E({name:"BaseClear",props:{clsPrefix:{type:String,required:!0},show:Boolean,onClear:Function},setup(t){return Ie("-base-clear",Gr,ye(t,"clsPrefix")),{handleMouseDown(a){a.preventDefault()}}},render(){const{clsPrefix:t}=this;return o("div",{class:`${t}-base-clear`},o(xn,null,{default:()=>{var a,r;return this.show?o("div",{key:"dismiss",class:`${t}-base-clear__clear`,onClick:this.onClear,onMousedown:this.handleMouseDown,"data-clear":!0},Y(this.$slots.icon,()=>[o(le,{clsPrefix:t},{default:()=>o(Kr,null)})])):o("div",{key:"icon",class:`${t}-base-clear__placeholder`},(r=(a=this.$slots).placeholder)===null||r===void 0?void 0:r.call(a))}}))}}),Xr=E({name:"InternalSelectionSuffix",props:{clsPrefix:{type:String,required:!0},showArrow:{type:Boolean,default:void 0},showClear:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},onClear:Function},setup(t,{slots:a}){return()=>{const{clsPrefix:r}=t;return o(Cn,{clsPrefix:r,class:`${r}-base-suffix`,strokeWidth:24,scale:.85,show:t.loading},{default:()=>t.showArrow?o(we,{clsPrefix:r,show:t.showClear,onClear:t.onClear},{placeholder:()=>o(le,{clsPrefix:r,class:`${r}-base-suffix__arrow`},{default:()=>Y(a.default,()=>[o(qr,null)])})}):null})}}}),Ve=Pn("n-input");function Yr(t){let a=0;for(const r of t)a++;return a}function ae(t){return t===""||t==null}function Jr(t){const a=C(null);function r(){const{value:i}=t;if(!(i!=null&&i.focus)){v();return}const{selectionStart:f,selectionEnd:u,value:p}=i;if(f==null||u==null){v();return}a.value={start:f,end:u,beforeText:p.slice(0,f),afterText:p.slice(u)}}function l(){var i;const{value:f}=a,{value:u}=t;if(!f||!u)return;const{value:p}=u,{start:c,beforeText:h,afterText:b}=f;let y=p.length;if(p.endsWith(b))y=p.length-b.length;else if(p.startsWith(h))y=h.length;else{const R=h[c-1],P=p.indexOf(R,c-1);P!==-1&&(y=P+1)}(i=u.setSelectionRange)===null||i===void 0||i.call(u,y,y)}function v(){a.value=null}return ie(t,v),{recordCursor:r,restoreCursor:l}}const $e=E({name:"InputWordCount",setup(t,{slots:a}){const{mergedValueRef:r,maxlengthRef:l,mergedClsPrefixRef:v,countGraphemesRef:i}=Be(Ve),f=T(()=>{const{value:u}=r;return u===null||Array.isArray(u)?0:(i.value||Yr)(u)});return()=>{const{value:u}=l,{value:p}=r;return o("span",{class:`${v.value}-input-word-count`},Sn(a.default,{value:p===null||Array.isArray(p)?"":p},()=>[u===void 0?f.value:`${f.value} / ${u}`]))}}}),Zr=x("input",`
 max-width: 100%;
 cursor: text;
 line-height: 1.5;
 z-index: auto;
 outline: none;
 box-sizing: border-box;
 position: relative;
 display: inline-flex;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`,[d("input, textarea",`
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),d("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder",`
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 -webkit-text-fill-color .3s var(--n-bezier),
 caret-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 `),d("input-el, textarea-el",`
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `,[z("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),z("&::placeholder",`
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `),z("&:-webkit-autofill ~",[d("placeholder","display: none;")])]),_("round",[X("textarea","border-radius: calc(var(--n-height) / 2);")]),d("placeholder",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `,[z("span",`
 width: 100%;
 display: inline-block;
 `)]),_("textarea",[d("placeholder","overflow: visible;")]),X("autosize","width: 100%;"),_("autosize",[d("textarea-el, input-el",`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),x("input-wrapper",`
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),d("input-mirror",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre;
 pointer-events: none;
 `),d("input-el",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[z("+",[d("placeholder",`
 display: flex;
 align-items: center; 
 `)])]),X("textarea",[d("placeholder","white-space: nowrap;")]),d("eye",`
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `),_("textarea","width: 100%;",[x("input-word-count",`
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `),_("resizable",[x("input-wrapper",`
 resize: vertical;
 min-height: var(--n-height);
 `)]),d("textarea-el, textarea-mirror, placeholder",`
 height: 100%;
 padding-left: 0;
 padding-right: 0;
 padding-top: var(--n-padding-vertical);
 padding-bottom: var(--n-padding-vertical);
 word-break: break-word;
 display: inline-block;
 vertical-align: bottom;
 box-sizing: border-box;
 line-height: var(--n-line-height-textarea);
 margin: 0;
 resize: none;
 white-space: pre-wrap;
 `),d("textarea-mirror",`
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),_("pair",[d("input-el, placeholder","text-align: center;"),d("separator",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `,[x("icon",`
 color: var(--n-icon-color);
 `),x("base-icon",`
 color: var(--n-icon-color);
 `)])]),_("disabled",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[d("border","border: var(--n-border-disabled);"),d("input-el, textarea-el",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `),d("placeholder","color: var(--n-placeholder-color-disabled);"),d("separator","color: var(--n-text-color-disabled);",[x("icon",`
 color: var(--n-icon-color-disabled);
 `),x("base-icon",`
 color: var(--n-icon-color-disabled);
 `)]),x("input-word-count",`
 color: var(--n-count-text-color-disabled);
 `),d("suffix, prefix","color: var(--n-text-color-disabled);",[x("icon",`
 color: var(--n-icon-color-disabled);
 `),x("internal-icon",`
 color: var(--n-icon-color-disabled);
 `)])]),X("disabled",[d("eye",`
 color: var(--n-icon-color);
 cursor: pointer;
 `,[z("&:hover",`
 color: var(--n-icon-color-hover);
 `),z("&:active",`
 color: var(--n-icon-color-pressed);
 `)]),z("&:hover",[d("state-border","border: var(--n-border-hover);")]),_("focus","background-color: var(--n-color-focus);",[d("state-border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),d("border, state-border",`
 box-sizing: border-box;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: inherit;
 border: var(--n-border);
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),d("state-border",`
 border-color: #0000;
 z-index: 1;
 `),d("prefix","margin-right: 4px;"),d("suffix",`
 margin-left: 4px;
 `),d("suffix, prefix",`
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `,[x("base-loading",`
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `),x("base-clear",`
 font-size: var(--n-icon-size);
 `,[d("placeholder",[x("base-icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]),z(">",[x("icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]),x("base-icon",`
 font-size: var(--n-icon-size);
 `)]),x("input-word-count",`
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),["warning","error"].map(t=>_(`${t}-status`,[X("disabled",[x("base-loading",`
 color: var(--n-loading-color-${t})
 `),d("input-el, textarea-el",`
 caret-color: var(--n-caret-color-${t});
 `),d("state-border",`
 border: var(--n-border-${t});
 `),z("&:hover",[d("state-border",`
 border: var(--n-border-hover-${t});
 `)]),z("&:focus",`
 background-color: var(--n-color-focus-${t});
 `,[d("state-border",`
 box-shadow: var(--n-box-shadow-focus-${t});
 border: var(--n-border-focus-${t});
 `)]),_("focus",`
 background-color: var(--n-color-focus-${t});
 `,[d("state-border",`
 box-shadow: var(--n-box-shadow-focus-${t});
 border: var(--n-border-focus-${t});
 `)])])]))]),Qr=x("input",[_("disabled",[d("input-el, textarea-el",`
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]),ea=Object.assign(Object.assign({},se.props),{bordered:{type:Boolean,default:void 0},type:{type:String,default:"text"},placeholder:[Array,String],defaultValue:{type:[String,Array],default:null},value:[String,Array],disabled:{type:Boolean,default:void 0},size:String,rows:{type:[Number,String],default:3},round:Boolean,minlength:[String,Number],maxlength:[String,Number],clearable:Boolean,autosize:{type:[Boolean,Object],default:!1},pair:Boolean,separator:String,readonly:{type:[String,Boolean],default:!1},passivelyActivated:Boolean,showPasswordOn:String,stateful:{type:Boolean,default:!0},autofocus:Boolean,inputProps:Object,resizable:{type:Boolean,default:!0},showCount:Boolean,loading:{type:Boolean,default:void 0},allowInput:Function,renderCount:Function,onMousedown:Function,onKeydown:Function,onKeyup:Function,onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClick:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],countGraphemes:Function,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],textDecoration:[String,Array],attrSize:{type:Number,default:20},onInputBlur:[Function,Array],onInputFocus:[Function,Array],onDeactivate:[Function,Array],onActivate:[Function,Array],onWrapperFocus:[Function,Array],onWrapperBlur:[Function,Array],internalDeactivateOnEnter:Boolean,internalForceFocus:Boolean,internalLoadingBeforeSuffix:Boolean,showPasswordToggle:Boolean}),sa=E({name:"Input",props:ea,setup(t){const{mergedClsPrefixRef:a,mergedBorderedRef:r,inlineThemeDisabled:l,mergedRtlRef:v}=We(t),i=se("Input","-input",Zr,kn,t,a);Mn&&Ie("-input-safari",Qr,a);const f=C(null),u=C(null),p=C(null),c=C(null),h=C(null),b=C(null),y=C(null),R=Jr(y),P=C(null),{localeRef:ce}=jr("Input"),F=C(t.defaultValue),k=ye(t,"value"),S=On(k,F),D=zn(t),{mergedSizeRef:A,mergedDisabledRef:L,mergedStatusRef:Ne}=D,V=C(!1),O=C(!1),$=C(!1),j=C(!1);let ue=null;const de=T(()=>{const{placeholder:e,pair:n}=t;return n?Array.isArray(e)?e:e===void 0?["",""]:[e,e]:e===void 0?[ce.value.placeholder]:[e]}),Oe=T(()=>{const{value:e}=$,{value:n}=S,{value:s}=de;return!e&&(ae(n)||Array.isArray(n)&&ae(n[0]))&&s[0]}),je=T(()=>{const{value:e}=$,{value:n}=S,{value:s}=de;return!e&&s[1]&&(ae(n)||Array.isArray(n)&&ae(n[1]))}),he=ze(()=>t.internalForceFocus||V.value),Ue=ze(()=>{if(L.value||t.readonly||!t.clearable||!he.value&&!O.value)return!1;const{value:e}=S,{value:n}=he;return t.pair?!!(Array.isArray(e)&&(e[0]||e[1]))&&(O.value||n):!!e&&(O.value||n)}),fe=T(()=>{const{showPasswordOn:e}=t;if(e)return e;if(t.showPasswordToggle)return"click"}),U=C(!1),He=T(()=>{const{textDecoration:e}=t;return e?Array.isArray(e)?e.map(n=>({textDecoration:n})):[{textDecoration:e}]:["",""]}),Ce=C(void 0),qe=()=>{var e,n;if(t.type==="textarea"){const{autosize:s}=t;if(s&&(Ce.value=(n=(e=P.value)===null||e===void 0?void 0:e.$el)===null||n===void 0?void 0:n.offsetWidth),!u.value||typeof s=="boolean")return;const{paddingTop:g,paddingBottom:w,lineHeight:m}=window.getComputedStyle(u.value),B=Number(g.slice(0,-2)),I=Number(w.slice(0,-2)),W=Number(m.slice(0,-2)),{value:H}=p;if(!H)return;if(s.minRows){const q=Math.max(s.minRows,1),me=`${B+I+W*q}px`;H.style.minHeight=me}if(s.maxRows){const q=`${B+I+W*s.maxRows}px`;H.style.maxHeight=q}}},Ke=T(()=>{const{maxlength:e}=t;return e===void 0?void 0:Number(e)});Tn(()=>{const{value:e}=S;Array.isArray(e)||ve(e)});const Ge=Fn().proxy;function J(e){const{onUpdateValue:n,"onUpdate:value":s,onInput:g}=t,{nTriggerFormInput:w}=D;n&&M(n,e),s&&M(s,e),g&&M(g,e),F.value=e,w()}function Z(e){const{onChange:n}=t,{nTriggerFormChange:s}=D;n&&M(n,e),F.value=e,s()}function Xe(e){const{onBlur:n}=t,{nTriggerFormBlur:s}=D;n&&M(n,e),s()}function Ye(e){const{onFocus:n}=t,{nTriggerFormFocus:s}=D;n&&M(n,e),s()}function Je(e){const{onClear:n}=t;n&&M(n,e)}function Ze(e){const{onInputBlur:n}=t;n&&M(n,e)}function Qe(e){const{onInputFocus:n}=t;n&&M(n,e)}function et(){const{onDeactivate:e}=t;e&&M(e)}function tt(){const{onActivate:e}=t;e&&M(e)}function nt(e){const{onClick:n}=t;n&&M(n,e)}function rt(e){const{onWrapperFocus:n}=t;n&&M(n,e)}function at(e){const{onWrapperBlur:n}=t;n&&M(n,e)}function ot(){$.value=!0}function it(e){$.value=!1,e.target===b.value?Q(e,1):Q(e,0)}function Q(e,n=0,s="input"){const g=e.target.value;if(ve(g),e instanceof InputEvent&&!e.isComposing&&($.value=!1),t.type==="textarea"){const{value:m}=P;m&&m.syncUnifiedContainer()}if(ue=g,$.value)return;R.recordCursor();const w=lt(g);if(w)if(!t.pair)s==="input"?J(g):Z(g);else{let{value:m}=S;Array.isArray(m)?m=[m[0],m[1]]:m=["",""],m[n]=g,s==="input"?J(m):Z(m)}Ge.$forceUpdate(),w||Fe(R.restoreCursor)}function lt(e){const{countGraphemes:n,maxlength:s,minlength:g}=t;if(n){let m;if(s!==void 0&&(m===void 0&&(m=n(e)),m>Number(s))||g!==void 0&&(m===void 0&&(m=n(e)),m<Number(s)))return!1}const{allowInput:w}=t;return typeof w=="function"?w(e):!0}function st(e){Ze(e),e.relatedTarget===f.value&&et(),e.relatedTarget!==null&&(e.relatedTarget===h.value||e.relatedTarget===b.value||e.relatedTarget===u.value)||(j.value=!1),ee(e,"blur"),y.value=null}function ct(e,n){Qe(e),V.value=!0,j.value=!0,tt(),ee(e,"focus"),n===0?y.value=h.value:n===1?y.value=b.value:n===2&&(y.value=u.value)}function ut(e){t.passivelyActivated&&(at(e),ee(e,"blur"))}function dt(e){t.passivelyActivated&&(V.value=!0,rt(e),ee(e,"focus"))}function ee(e,n){e.relatedTarget!==null&&(e.relatedTarget===h.value||e.relatedTarget===b.value||e.relatedTarget===u.value||e.relatedTarget===f.value)||(n==="focus"?(Ye(e),V.value=!0):n==="blur"&&(Xe(e),V.value=!1))}function ht(e,n){Q(e,n,"change")}function ft(e){nt(e)}function pt(e){Je(e),t.pair?(J(["",""]),Z(["",""])):(J(""),Z(""))}function vt(e){const{onMousedown:n}=t;n&&n(e);const{tagName:s}=e.target;if(s!=="INPUT"&&s!=="TEXTAREA"){if(t.resizable){const{value:g}=f;if(g){const{left:w,top:m,width:B,height:I}=g.getBoundingClientRect(),W=14;if(w+B-W<e.clientX&&e.clientX<w+B&&m+I-W<e.clientY&&e.clientY<m+I)return}}e.preventDefault(),V.value||Pe()}}function mt(){var e;O.value=!0,t.type==="textarea"&&((e=P.value)===null||e===void 0||e.handleMouseEnterWrapper())}function gt(){var e;O.value=!1,t.type==="textarea"&&((e=P.value)===null||e===void 0||e.handleMouseLeaveWrapper())}function bt(){L.value||fe.value==="click"&&(U.value=!U.value)}function yt(e){if(L.value)return;e.preventDefault();const n=g=>{g.preventDefault(),_e("mouseup",document,n)};if(Ae("mouseup",document,n),fe.value!=="mousedown")return;U.value=!0;const s=()=>{U.value=!1,_e("mouseup",document,s)};Ae("mouseup",document,s)}function wt(e){var n;switch((n=t.onKeydown)===null||n===void 0||n.call(t,e),e.key){case"Escape":pe();break;case"Enter":xt(e);break}}function xt(e){var n,s;if(t.passivelyActivated){const{value:g}=j;if(g){t.internalDeactivateOnEnter&&pe();return}e.preventDefault(),t.type==="textarea"?(n=u.value)===null||n===void 0||n.focus():(s=h.value)===null||s===void 0||s.focus()}}function pe(){t.passivelyActivated&&(j.value=!1,Fe(()=>{var e;(e=f.value)===null||e===void 0||e.focus()}))}function Pe(){var e,n,s;L.value||(t.passivelyActivated?(e=f.value)===null||e===void 0||e.focus():((n=u.value)===null||n===void 0||n.focus(),(s=h.value)===null||s===void 0||s.focus()))}function Ct(){var e;!((e=f.value)===null||e===void 0)&&e.contains(document.activeElement)&&document.activeElement.blur()}function Pt(){var e,n;(e=u.value)===null||e===void 0||e.select(),(n=h.value)===null||n===void 0||n.select()}function St(){L.value||(u.value?u.value.focus():h.value&&h.value.focus())}function Mt(){const{value:e}=f;e!=null&&e.contains(document.activeElement)&&e!==document.activeElement&&pe()}function zt(e){if(t.type==="textarea"){const{value:n}=u;n==null||n.scrollTo(e)}else{const{value:n}=h;n==null||n.scrollTo(e)}}function ve(e){const{type:n,pair:s,autosize:g}=t;if(!s&&g)if(n==="textarea"){const{value:w}=p;w&&(w.textContent=(e??"")+`\r
`)}else{const{value:w}=c;w&&(e?w.textContent=e:w.innerHTML="&nbsp;")}}function Tt(){qe()}const Se=C({top:"0"});function Ft(e){var n;const{scrollTop:s}=e.target;Se.value.top=`${-s}px`,(n=P.value)===null||n===void 0||n.syncUnifiedContainer()}let te=null;Te(()=>{const{autosize:e,type:n}=t;e&&n==="textarea"?te=ie(S,s=>{!Array.isArray(s)&&s!==ue&&ve(s)}):te==null||te()});let ne=null;Te(()=>{t.type==="textarea"?ne=ie(S,e=>{var n;!Array.isArray(e)&&e!==ue&&((n=P.value)===null||n===void 0||n.syncUnifiedContainer())}):ne==null||ne()}),An(Ve,{mergedValueRef:S,maxlengthRef:Ke,mergedClsPrefixRef:a,countGraphemesRef:ye(t,"countGraphemes")});const At={wrapperElRef:f,inputElRef:h,textareaElRef:u,isCompositing:$,focus:Pe,blur:Ct,select:Pt,deactivate:Mt,activate:St,scrollTo:zt},_t=Le("Input",v,a),Me=T(()=>{const{value:e}=A,{common:{cubicBezierEaseInOut:n},self:{color:s,borderRadius:g,textColor:w,caretColor:m,caretColorError:B,caretColorWarning:I,textDecorationColor:W,border:H,borderDisabled:q,borderHover:me,borderFocus:Rt,placeholderColor:$t,placeholderColorDisabled:Et,lineHeightTextarea:kt,colorDisabled:Dt,colorFocus:Bt,textColorDisabled:It,boxShadowFocus:Wt,iconSize:Lt,colorFocusWarning:Vt,boxShadowFocusWarning:Nt,borderWarning:Ot,borderFocusWarning:jt,borderHoverWarning:Ut,colorFocusError:Ht,boxShadowFocusError:qt,borderError:Kt,borderFocusError:Gt,borderHoverError:Xt,clearSize:Yt,clearColor:Jt,clearColorHover:Zt,clearColorPressed:Qt,iconColor:en,iconColorDisabled:tn,suffixTextColor:nn,countTextColor:rn,countTextColorDisabled:an,iconColorHover:on,iconColorPressed:ln,loadingColor:sn,loadingColorError:cn,loadingColorWarning:un,[oe("padding",e)]:dn,[oe("fontSize",e)]:hn,[oe("height",e)]:fn}}=i.value,{left:pn,right:vn}=Dn(dn);return{"--n-bezier":n,"--n-count-text-color":rn,"--n-count-text-color-disabled":an,"--n-color":s,"--n-font-size":hn,"--n-border-radius":g,"--n-height":fn,"--n-padding-left":pn,"--n-padding-right":vn,"--n-text-color":w,"--n-caret-color":m,"--n-text-decoration-color":W,"--n-border":H,"--n-border-disabled":q,"--n-border-hover":me,"--n-border-focus":Rt,"--n-placeholder-color":$t,"--n-placeholder-color-disabled":Et,"--n-icon-size":Lt,"--n-line-height-textarea":kt,"--n-color-disabled":Dt,"--n-color-focus":Bt,"--n-text-color-disabled":It,"--n-box-shadow-focus":Wt,"--n-loading-color":sn,"--n-caret-color-warning":I,"--n-color-focus-warning":Vt,"--n-box-shadow-focus-warning":Nt,"--n-border-warning":Ot,"--n-border-focus-warning":jt,"--n-border-hover-warning":Ut,"--n-loading-color-warning":un,"--n-caret-color-error":B,"--n-color-focus-error":Ht,"--n-box-shadow-focus-error":qt,"--n-border-error":Kt,"--n-border-focus-error":Gt,"--n-border-hover-error":Xt,"--n-loading-color-error":cn,"--n-clear-color":Jt,"--n-clear-size":Yt,"--n-clear-color-hover":Zt,"--n-clear-color-pressed":Qt,"--n-icon-color":en,"--n-icon-color-hover":on,"--n-icon-color-pressed":ln,"--n-icon-color-disabled":tn,"--n-suffix-text-color":nn}}),N=l?_n("input",T(()=>{const{value:e}=A;return e[0]}),Me,t):void 0;return Object.assign(Object.assign({},At),{wrapperElRef:f,inputElRef:h,inputMirrorElRef:c,inputEl2Ref:b,textareaElRef:u,textareaMirrorElRef:p,textareaScrollbarInstRef:P,rtlEnabled:_t,uncontrolledValue:F,mergedValue:S,passwordVisible:U,mergedPlaceholder:de,showPlaceholder1:Oe,showPlaceholder2:je,mergedFocus:he,isComposing:$,activated:j,showClearButton:Ue,mergedSize:A,mergedDisabled:L,textDecorationStyle:He,mergedClsPrefix:a,mergedBordered:r,mergedShowPasswordOn:fe,placeholderStyle:Se,mergedStatus:Ne,textAreaScrollContainerWidth:Ce,handleTextAreaScroll:Ft,handleCompositionStart:ot,handleCompositionEnd:it,handleInput:Q,handleInputBlur:st,handleInputFocus:ct,handleWrapperBlur:ut,handleWrapperFocus:dt,handleMouseEnter:mt,handleMouseLeave:gt,handleMouseDown:vt,handleChange:ht,handleClick:ft,handleClear:pt,handlePasswordToggleClick:bt,handlePasswordToggleMousedown:yt,handleWrapperKeydown:wt,handleTextAreaMirrorResize:Tt,getTextareaScrollContainer:()=>u.value,mergedTheme:i,cssVars:l?void 0:Me,themeClass:N==null?void 0:N.themeClass,onRender:N==null?void 0:N.onRender})},render(){var t,a;const{mergedClsPrefix:r,mergedStatus:l,themeClass:v,type:i,countGraphemes:f,onRender:u}=this,p=this.$slots;return u==null||u(),o("div",{ref:"wrapperElRef",class:[`${r}-input`,v,l&&`${r}-input--${l}-status`,{[`${r}-input--rtl`]:this.rtlEnabled,[`${r}-input--disabled`]:this.mergedDisabled,[`${r}-input--textarea`]:i==="textarea",[`${r}-input--resizable`]:this.resizable&&!this.autosize,[`${r}-input--autosize`]:this.autosize,[`${r}-input--round`]:this.round&&i!=="textarea",[`${r}-input--pair`]:this.pair,[`${r}-input--focus`]:this.mergedFocus,[`${r}-input--stateful`]:this.stateful}],style:this.cssVars,tabindex:!this.mergedDisabled&&this.passivelyActivated&&!this.activated?0:void 0,onFocus:this.handleWrapperFocus,onBlur:this.handleWrapperBlur,onClick:this.handleClick,onMousedown:this.handleMouseDown,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd,onKeyup:this.onKeyup,onKeydown:this.handleWrapperKeydown},o("div",{class:`${r}-input-wrapper`},re(p.prefix,c=>c&&o("div",{class:`${r}-input__prefix`},c)),i==="textarea"?o(Rn,{ref:"textareaScrollbarInstRef",class:`${r}-input__textarea`,container:this.getTextareaScrollContainer,triggerDisplayManually:!0,useUnifiedContainer:!0,internalHoistYRail:!0},{default:()=>{var c,h;const{textAreaScrollContainerWidth:b}=this,y={width:this.autosize&&b&&`${b}px`};return o($n,null,o("textarea",Object.assign({},this.inputProps,{ref:"textareaElRef",class:[`${r}-input__textarea-el`,(c=this.inputProps)===null||c===void 0?void 0:c.class],autofocus:this.autofocus,rows:Number(this.rows),placeholder:this.placeholder,value:this.mergedValue,disabled:this.mergedDisabled,maxlength:f?void 0:this.maxlength,minlength:f?void 0:this.minlength,readonly:this.readonly,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,style:[this.textDecorationStyle[0],(h=this.inputProps)===null||h===void 0?void 0:h.style,y],onBlur:this.handleInputBlur,onFocus:R=>{this.handleInputFocus(R,2)},onInput:this.handleInput,onChange:this.handleChange,onScroll:this.handleTextAreaScroll})),this.showPlaceholder1?o("div",{class:`${r}-input__placeholder`,style:[this.placeholderStyle,y],key:"placeholder"},this.mergedPlaceholder[0]):null,this.autosize?o(En,{onResize:this.handleTextAreaMirrorResize},{default:()=>o("div",{ref:"textareaMirrorElRef",class:`${r}-input__textarea-mirror`,key:"mirror"})}):null)}}):o("div",{class:`${r}-input__input`},o("input",Object.assign({type:i==="password"&&this.mergedShowPasswordOn&&this.passwordVisible?"text":i},this.inputProps,{ref:"inputElRef",class:[`${r}-input__input-el`,(t=this.inputProps)===null||t===void 0?void 0:t.class],style:[this.textDecorationStyle[0],(a=this.inputProps)===null||a===void 0?void 0:a.style],tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[0],disabled:this.mergedDisabled,maxlength:f?void 0:this.maxlength,minlength:f?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[0]:this.mergedValue,readonly:this.readonly,autofocus:this.autofocus,size:this.attrSize,onBlur:this.handleInputBlur,onFocus:c=>{this.handleInputFocus(c,0)},onInput:c=>{this.handleInput(c,0)},onChange:c=>{this.handleChange(c,0)}})),this.showPlaceholder1?o("div",{class:`${r}-input__placeholder`},o("span",null,this.mergedPlaceholder[0])):null,this.autosize?o("div",{class:`${r}-input__input-mirror`,key:"mirror",ref:"inputMirrorElRef"}," "):null),!this.pair&&re(p.suffix,c=>c||this.clearable||this.showCount||this.mergedShowPasswordOn||this.loading!==void 0?o("div",{class:`${r}-input__suffix`},[re(p["clear-icon-placeholder"],h=>(this.clearable||h)&&o(we,{clsPrefix:r,show:this.showClearButton,onClear:this.handleClear},{placeholder:()=>h,icon:()=>{var b,y;return(y=(b=this.$slots)["clear-icon"])===null||y===void 0?void 0:y.call(b)}})),this.internalLoadingBeforeSuffix?null:c,this.loading!==void 0?o(Xr,{clsPrefix:r,loading:this.loading,showArrow:!1,showClear:!1,style:this.cssVars}):null,this.internalLoadingBeforeSuffix?c:null,this.showCount&&this.type!=="textarea"?o($e,null,{default:h=>{var b;return(b=p.count)===null||b===void 0?void 0:b.call(p,h)}}):null,this.mergedShowPasswordOn&&this.type==="password"?o("div",{class:`${r}-input__eye`,onMousedown:this.handlePasswordToggleMousedown,onClick:this.handlePasswordToggleClick},this.passwordVisible?Y(p["password-visible-icon"],()=>[o(le,{clsPrefix:r},{default:()=>o(Ur,null)})]):Y(p["password-invisible-icon"],()=>[o(le,{clsPrefix:r},{default:()=>o(Hr,null)})])):null]):null)),this.pair?o("span",{class:`${r}-input__separator`},Y(p.separator,()=>[this.separator])):null,this.pair?o("div",{class:`${r}-input-wrapper`},o("div",{class:`${r}-input__input`},o("input",{ref:"inputEl2Ref",type:this.type,class:`${r}-input__input-el`,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[1],disabled:this.mergedDisabled,maxlength:f?void 0:this.maxlength,minlength:f?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[1]:void 0,readonly:this.readonly,style:this.textDecorationStyle[1],onBlur:this.handleInputBlur,onFocus:c=>{this.handleInputFocus(c,1)},onInput:c=>{this.handleInput(c,1)},onChange:c=>{this.handleChange(c,1)}}),this.showPlaceholder2?o("div",{class:`${r}-input__placeholder`},o("span",null,this.mergedPlaceholder[1])):null),re(p.suffix,c=>(this.clearable||c)&&o("div",{class:`${r}-input__suffix`},[this.clearable&&o(we,{clsPrefix:r,show:this.showClearButton,onClear:this.handleClear},{icon:()=>{var h;return(h=p["clear-icon"])===null||h===void 0?void 0:h.call(p)},placeholder:()=>{var h;return(h=p["clear-icon-placeholder"])===null||h===void 0?void 0:h.call(p)}}),c]))):null,this.mergedBordered?o("div",{class:`${r}-input__border`}):null,this.mergedBordered?o("div",{class:`${r}-input__state-border`}):null,this.showCount&&i==="textarea"?o($e,null,{default:c=>{var h;const{renderCount:b}=this;return b?b(c):(h=p.count)===null||h===void 0?void 0:h.call(p,c)}}):null)}}),ta=()=>Bn,na={name:"Space",self:ta},ra=na;let be;const aa=()=>{if(!In)return!0;if(be===void 0){const t=document.createElement("div");t.style.display="flex",t.style.flexDirection="column",t.style.rowGap="1px",t.appendChild(document.createElement("div")),t.appendChild(document.createElement("div")),document.body.appendChild(t);const a=t.scrollHeight===1;return document.body.removeChild(t),be=a}return be},oa=Object.assign(Object.assign({},se.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),ca=E({name:"Space",props:oa,setup(t){const{mergedClsPrefixRef:a,mergedRtlRef:r}=We(t),l=se("Space","-space",void 0,ra,t,a),v=Le("Space",r,a);return{useGap:aa(),rtlEnabled:v,mergedClsPrefix:a,margin:T(()=>{const{size:i}=t;if(Array.isArray(i))return{horizontal:i[0],vertical:i[1]};if(typeof i=="number")return{horizontal:i,vertical:i};const{self:{[oe("gap",i)]:f}}=l.value,{row:u,col:p}=Ln(f);return{horizontal:Re(p),vertical:Re(u)}})}},render(){const{vertical:t,align:a,inline:r,justify:l,itemStyle:v,margin:i,wrap:f,mergedClsPrefix:u,rtlEnabled:p,useGap:c,wrapItem:h,internalUseGap:b}=this,y=Wn(Nn(this));if(!y.length)return null;const R=`${i.horizontal}px`,P=`${i.horizontal/2}px`,ce=`${i.vertical}px`,F=`${i.vertical/2}px`,k=y.length-1,S=l.startsWith("space-");return o("div",{role:"none",class:[`${u}-space`,p&&`${u}-space--rtl`],style:{display:r?"inline-flex":"flex",flexDirection:t?"column":"row",justifyContent:["start","end"].includes(l)?"flex-"+l:l,flexWrap:!f||t?"nowrap":"wrap",marginTop:c||t?"":`-${F}`,marginBottom:c||t?"":`-${F}`,alignItems:a,gap:c?`${i.vertical}px ${i.horizontal}px`:""}},!h&&(c||b)?y:y.map((D,A)=>o("div",{role:"none",style:[v,{maxWidth:"100%"},c?"":t?{marginBottom:A!==k?ce:""}:p?{marginLeft:S?l==="space-between"&&A===k?"":P:A!==k?R:"",marginRight:S?l==="space-between"&&A===0?"":P:"",paddingTop:F,paddingBottom:F}:{marginRight:S?l==="space-between"&&A===k?"":P:A!==k?R:"",marginLeft:S?l==="space-between"&&A===0?"":P:"",paddingTop:F,paddingBottom:F}]},D)))}});function ua(t=!1){const{bool:a,setTrue:r,setFalse:l}=Vn(t);return{loading:a,startLoading:r,endLoading:l}}export{qr as C,ca as N,sa as _,jr as a,ua as b,la as c,Qn as d,nr as e,Xr as f,Nn as g,Hn as i,tr as t,On as u};
