var Mv=Object.defineProperty;var $v=(e,t,n)=>t in e?Mv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Le=(e,t,n)=>($v(e,typeof t!="symbol"?t+"":t,n),n);import{r as f,a as Tl,g as It,R as St,b as Dv}from"./vendor-f817694b.js";import{L as Ge,u as Um,a as Bv,b as _v,N as Rv,B as Lv,R as Wv,c as rn}from"./router-43b217db.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();var Km={exports:{}},_i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fv=f,Hv=Symbol.for("react.element"),zv=Symbol.for("react.fragment"),Yv=Object.prototype.hasOwnProperty,qv=Fv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Gv={key:!0,ref:!0,__self:!0,__source:!0};function Vm(e,t,n){var r,a={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Yv.call(t,r)&&!Gv.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:Hv,type:e,key:i,ref:s,props:a,_owner:qv.current}}_i.Fragment=zv;_i.jsx=Vm;_i.jsxs=Vm;Km.exports=_i;var o=Km.exports,Jm,fu=Tl;Jm=fu.createRoot,fu.hydrateRoot;var Uv=typeof Element<"u",Kv=typeof Map=="function",Vv=typeof Set=="function",Jv=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Ha(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,r,a;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!Ha(e[r],t[r]))return!1;return!0}var i;if(Kv&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(i=e.entries();!(r=i.next()).done;)if(!t.has(r.value[0]))return!1;for(i=e.entries();!(r=i.next()).done;)if(!Ha(r.value[1],t.get(r.value[0])))return!1;return!0}if(Vv&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(i=e.entries();!(r=i.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(Jv&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(a=Object.keys(e),n=a.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,a[r]))return!1;if(Uv&&e instanceof Element)return!1;for(r=n;r--!==0;)if(!((a[r]==="_owner"||a[r]==="__v"||a[r]==="__o")&&e.$$typeof)&&!Ha(e[a[r]],t[a[r]]))return!1;return!0}return e!==e&&t!==t}var Zv=function(t,n){try{return Ha(t,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const Xv=It(Zv);var Qv=function(e,t,n,r,a,i,s,l){if(!e){var c;if(t===void 0)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,a,i,s,l],d=0;c=new Error(t.replace(/%s/g,function(){return u[d++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}},eb=Qv;const yu=It(eb);var tb=function(t,n,r,a){var i=r?r.call(a,t,n):void 0;if(i!==void 0)return!!i;if(t===n)return!0;if(typeof t!="object"||!t||typeof n!="object"||!n)return!1;var s=Object.keys(t),l=Object.keys(n);if(s.length!==l.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(n),u=0;u<s.length;u++){var d=s[u];if(!c(d))return!1;var h=t[d],m=n[d];if(i=r?r.call(a,h,m,d):void 0,i===!1||i===void 0&&h!==m)return!1}return!0};const nb=It(tb);var Zm=(e=>(e.BASE="base",e.BODY="body",e.HEAD="head",e.HTML="html",e.LINK="link",e.META="meta",e.NOSCRIPT="noscript",e.SCRIPT="script",e.STYLE="style",e.TITLE="title",e.FRAGMENT="Symbol(react.fragment)",e))(Zm||{}),qo={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},vu=Object.values(Zm),Il={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},rb=Object.entries(Il).reduce((e,[t,n])=>(e[n]=t,e),{}),wt="data-rh",Vn={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},Jn=(e,t)=>{for(let n=e.length-1;n>=0;n-=1){const r=e[n];if(Object.prototype.hasOwnProperty.call(r,t))return r[t]}return null},ab=e=>{let t=Jn(e,"title");const n=Jn(e,Vn.TITLE_TEMPLATE);if(Array.isArray(t)&&(t=t.join("")),n&&t)return n.replace(/%s/g,()=>t);const r=Jn(e,Vn.DEFAULT_TITLE);return t||r||void 0},ib=e=>Jn(e,Vn.ON_CHANGE_CLIENT_STATE)||(()=>{}),Go=(e,t)=>t.filter(n=>typeof n[e]<"u").map(n=>n[e]).reduce((n,r)=>({...n,...r}),{}),ob=(e,t)=>t.filter(n=>typeof n.base<"u").map(n=>n.base).reverse().reduce((n,r)=>{if(!n.length){const a=Object.keys(r);for(let i=0;i<a.length;i+=1){const l=a[i].toLowerCase();if(e.indexOf(l)!==-1&&r[l])return n.concat(r)}}return n},[]),sb=e=>console&&typeof console.warn=="function"&&console.warn(e),kr=(e,t,n)=>{const r={};return n.filter(a=>Array.isArray(a[e])?!0:(typeof a[e]<"u"&&sb(`Helmet: ${e} should be of type "Array". Instead found type "${typeof a[e]}"`),!1)).map(a=>a[e]).reverse().reduce((a,i)=>{const s={};i.filter(c=>{let u;const d=Object.keys(c);for(let m=0;m<d.length;m+=1){const p=d[m],g=p.toLowerCase();t.indexOf(g)!==-1&&!(u==="rel"&&c[u].toLowerCase()==="canonical")&&!(g==="rel"&&c[g].toLowerCase()==="stylesheet")&&(u=g),t.indexOf(p)!==-1&&(p==="innerHTML"||p==="cssText"||p==="itemprop")&&(u=p)}if(!u||!c[u])return!1;const h=c[u].toLowerCase();return r[u]||(r[u]={}),s[u]||(s[u]={}),r[u][h]?!1:(s[u][h]=!0,!0)}).reverse().forEach(c=>a.push(c));const l=Object.keys(s);for(let c=0;c<l.length;c+=1){const u=l[c],d={...r[u],...s[u]};r[u]=d}return a},[]).reverse()},lb=(e,t)=>{if(Array.isArray(e)&&e.length){for(let n=0;n<e.length;n+=1)if(e[n][t])return!0}return!1},cb=e=>({baseTag:ob(["href"],e),bodyAttributes:Go("bodyAttributes",e),defer:Jn(e,Vn.DEFER),encode:Jn(e,Vn.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Go("htmlAttributes",e),linkTags:kr("link",["rel","href"],e),metaTags:kr("meta",["name","charset","http-equiv","property","itemprop"],e),noscriptTags:kr("noscript",["innerHTML"],e),onChangeClientState:ib(e),scriptTags:kr("script",["src","innerHTML"],e),styleTags:kr("style",["cssText"],e),title:ab(e),titleAttributes:Go("titleAttributes",e),prioritizeSeoTags:lb(e,Vn.PRIORITIZE_SEO_TAGS)}),Xm=e=>Array.isArray(e)?e.join(""):e,ub=(e,t)=>{const n=Object.keys(e);for(let r=0;r<n.length;r+=1)if(t[n[r]]&&t[n[r]].includes(e[n[r]]))return!0;return!1},Uo=(e,t)=>Array.isArray(e)?e.reduce((n,r)=>(ub(r,t)?n.priority.push(r):n.default.push(r),n),{priority:[],default:[]}):{default:e,priority:[]},bu=(e,t)=>({...e,[t]:void 0}),db=["noscript","script","style"],xs=(e,t=!0)=>t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),Qm=e=>Object.keys(e).reduce((t,n)=>{const r=typeof e[n]<"u"?`${n}="${e[n]}"`:`${n}`;return t?`${t} ${r}`:r},""),hb=(e,t,n,r)=>{const a=Qm(n),i=Xm(t);return a?`<${e} ${wt}="true" ${a}>${xs(i,r)}</${e}>`:`<${e} ${wt}="true">${xs(i,r)}</${e}>`},mb=(e,t,n=!0)=>t.reduce((r,a)=>{const i=a,s=Object.keys(i).filter(u=>!(u==="innerHTML"||u==="cssText")).reduce((u,d)=>{const h=typeof i[d]>"u"?d:`${d}="${xs(i[d],n)}"`;return u?`${u} ${h}`:h},""),l=i.innerHTML||i.cssText||"",c=db.indexOf(e)===-1;return`${r}<${e} ${wt}="true" ${s}${c?"/>":`>${l}</${e}>`}`},""),ep=(e,t={})=>Object.keys(e).reduce((n,r)=>{const a=Il[r];return n[a||r]=e[r],n},t),pb=(e,t,n)=>{const r={key:t,[wt]:!0},a=ep(n,r);return[St.createElement("title",a,t)]},za=(e,t)=>t.map((n,r)=>{const a={key:r,[wt]:!0};return Object.keys(n).forEach(i=>{const l=Il[i]||i;if(l==="innerHTML"||l==="cssText"){const c=n.innerHTML||n.cssText;a.dangerouslySetInnerHTML={__html:c}}else a[l]=n[i]}),St.createElement(e,a)}),ct=(e,t,n=!0)=>{switch(e){case"title":return{toComponent:()=>pb(e,t.title,t.titleAttributes),toString:()=>hb(e,t.title,t.titleAttributes,n)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>ep(t),toString:()=>Qm(t)};default:return{toComponent:()=>za(e,t),toString:()=>mb(e,t,n)}}},gb=({metaTags:e,linkTags:t,scriptTags:n,encode:r})=>{const a=Uo(e,qo.meta),i=Uo(t,qo.link),s=Uo(n,qo.script);return{priorityMethods:{toComponent:()=>[...za("meta",a.priority),...za("link",i.priority),...za("script",s.priority)],toString:()=>`${ct("meta",a.priority,r)} ${ct("link",i.priority,r)} ${ct("script",s.priority,r)}`},metaTags:a.default,linkTags:i.default,scriptTags:s.default}},fb=e=>{const{baseTag:t,bodyAttributes:n,encode:r=!0,htmlAttributes:a,noscriptTags:i,styleTags:s,title:l="",titleAttributes:c,prioritizeSeoTags:u}=e;let{linkTags:d,metaTags:h,scriptTags:m}=e,p={toComponent:()=>{},toString:()=>""};return u&&({priorityMethods:p,linkTags:d,metaTags:h,scriptTags:m}=gb(e)),{priority:p,base:ct("base",t,r),bodyAttributes:ct("bodyAttributes",n,r),htmlAttributes:ct("htmlAttributes",a,r),link:ct("link",d,r),meta:ct("meta",h,r),noscript:ct("noscript",i,r),script:ct("script",m,r),style:ct("style",s,r),title:ct("title",{title:l,titleAttributes:c},r)}},ks=fb,Ta=[],tp=!!(typeof window<"u"&&window.document&&window.document.createElement),Ts=class{constructor(e,t){Le(this,"instances",[]);Le(this,"canUseDOM",tp);Le(this,"context");Le(this,"value",{setHelmet:e=>{this.context.helmet=e},helmetInstances:{get:()=>this.canUseDOM?Ta:this.instances,add:e=>{(this.canUseDOM?Ta:this.instances).push(e)},remove:e=>{const t=(this.canUseDOM?Ta:this.instances).indexOf(e);(this.canUseDOM?Ta:this.instances).splice(t,1)}}});this.context=e,this.canUseDOM=t||!1,t||(e.helmet=ks({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},yb={},np=St.createContext(yb),tr,rp=(tr=class extends f.Component{constructor(n){super(n);Le(this,"helmetData");this.helmetData=new Ts(this.props.context||{},tr.canUseDOM)}render(){return St.createElement(np.Provider,{value:this.helmetData.value},this.props.children)}},Le(tr,"canUseDOM",tp),tr),Hn=(e,t)=>{const n=document.head||document.querySelector("head"),r=n.querySelectorAll(`${e}[${wt}]`),a=[].slice.call(r),i=[];let s;return t&&t.length&&t.forEach(l=>{const c=document.createElement(e);for(const u in l)if(Object.prototype.hasOwnProperty.call(l,u))if(u==="innerHTML")c.innerHTML=l.innerHTML;else if(u==="cssText")c.styleSheet?c.styleSheet.cssText=l.cssText:c.appendChild(document.createTextNode(l.cssText));else{const d=u,h=typeof l[d]>"u"?"":l[d];c.setAttribute(u,h)}c.setAttribute(wt,"true"),a.some((u,d)=>(s=d,c.isEqualNode(u)))?a.splice(s,1):i.push(c)}),a.forEach(l=>{var c;return(c=l.parentNode)==null?void 0:c.removeChild(l)}),i.forEach(l=>n.appendChild(l)),{oldTags:a,newTags:i}},Is=(e,t)=>{const n=document.getElementsByTagName(e)[0];if(!n)return;const r=n.getAttribute(wt),a=r?r.split(","):[],i=[...a],s=Object.keys(t);for(const l of s){const c=t[l]||"";n.getAttribute(l)!==c&&n.setAttribute(l,c),a.indexOf(l)===-1&&a.push(l);const u=i.indexOf(l);u!==-1&&i.splice(u,1)}for(let l=i.length-1;l>=0;l-=1)n.removeAttribute(i[l]);a.length===i.length?n.removeAttribute(wt):n.getAttribute(wt)!==s.join(",")&&n.setAttribute(wt,s.join(","))},vb=(e,t)=>{typeof e<"u"&&document.title!==e&&(document.title=Xm(e)),Is("title",t)},wu=(e,t)=>{const{baseTag:n,bodyAttributes:r,htmlAttributes:a,linkTags:i,metaTags:s,noscriptTags:l,onChangeClientState:c,scriptTags:u,styleTags:d,title:h,titleAttributes:m}=e;Is("body",r),Is("html",a),vb(h,m);const p={baseTag:Hn("base",n),linkTags:Hn("link",i),metaTags:Hn("meta",s),noscriptTags:Hn("noscript",l),scriptTags:Hn("script",u),styleTags:Hn("style",d)},g={},v={};Object.keys(p).forEach(y=>{const{newTags:b,oldTags:x}=p[y];b.length&&(g[y]=b),x.length&&(v[y]=p[y].oldTags)}),t&&t(),c(e,g,v)},Tr=null,bb=e=>{Tr&&cancelAnimationFrame(Tr),e.defer?Tr=requestAnimationFrame(()=>{wu(e,()=>{Tr=null})}):(wu(e),Tr=null)},wb=bb,xu=class extends f.Component{constructor(){super(...arguments);Le(this,"rendered",!1)}shouldComponentUpdate(t){return!nb(t,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:t}=this.props.context;t.remove(this),this.emitChange()}emitChange(){const{helmetInstances:t,setHelmet:n}=this.props.context;let r=null;const a=cb(t.get().map(i=>{const s={...i.props};return delete s.context,s}));rp.canUseDOM?wb(a):ks&&(r=ks(a)),n(r)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:t}=this.props.context;t.add(this),this.emitChange()}render(){return this.init(),null}},ws,xb=(ws=class extends f.Component{shouldComponentUpdate(e){return!Xv(bu(this.props,"helmetData"),bu(e,"helmetData"))}mapNestedChildrenToProps(e,t){if(!t)return null;switch(e.type){case"script":case"noscript":return{innerHTML:t};case"style":return{cssText:t};default:throw new Error(`<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(e,t,n,r){return{...t,[e.type]:[...t[e.type]||[],{...n,...this.mapNestedChildrenToProps(e,r)}]}}mapObjectTypeChildren(e,t,n,r){switch(e.type){case"title":return{...t,[e.type]:r,titleAttributes:{...n}};case"body":return{...t,bodyAttributes:{...n}};case"html":return{...t,htmlAttributes:{...n}};default:return{...t,[e.type]:{...n}}}}mapArrayTypeChildrenToProps(e,t){let n={...t};return Object.keys(e).forEach(r=>{n={...n,[r]:e[r]}}),n}warnOnInvalidChildren(e,t){return yu(vu.some(n=>e.type===n),typeof e.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${vu.join(", ")} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`),yu(!t||typeof t=="string"||Array.isArray(t)&&!t.some(n=>typeof n!="string"),`Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(e,t){let n={};return St.Children.forEach(e,r=>{if(!r||!r.props)return;const{children:a,...i}=r.props,s=Object.keys(i).reduce((c,u)=>(c[rb[u]||u]=i[u],c),{});let{type:l}=r;switch(typeof l=="symbol"?l=l.toString():this.warnOnInvalidChildren(r,a),l){case"Symbol(react.fragment)":t=this.mapChildrenToProps(a,t);break;case"link":case"meta":case"noscript":case"script":case"style":n=this.flattenArrayTypeChildren(r,n,s,a);break;default:t=this.mapObjectTypeChildren(r,t,s,a);break}}),this.mapArrayTypeChildrenToProps(n,t)}render(){const{children:e,...t}=this.props;let n={...t},{helmetData:r}=t;if(e&&(n=this.mapChildrenToProps(e,n)),r&&!(r instanceof Ts)){const a=r;r=new Ts(a.context,!0),delete n.helmetData}return r?St.createElement(xu,{...n,context:r.value}):St.createElement(np.Consumer,null,a=>St.createElement(xu,{...n,context:a}))}},Le(ws,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),ws);const ku="G-RX3B8PVTHE",kb=()=>{const e=document.createElement("script");e.async=!0,e.src=`https://www.googletagmanager.com/gtag/js?id=${ku}`,document.head.appendChild(e),window.dataLayer=window.dataLayer||[],window.gtag=function(...n){window.dataLayer.push(n)},window.gtag("js",new Date),window.gtag("config",ku,{page_title:document.title,page_location:window.location.href})},Ka=(e,t,n,r)=>{typeof window.gtag<"u"&&window.gtag("event",e,{event_category:t,event_label:n,value:r})},Ri=(e,t="hero")=>{Ka("click","cta_button",`${e}_${t}`,1)},Li=(e,t)=>{Ka("click","outbound_link",`${t}_${e}`,1)};class Tb{constructor(t="smart_cache",n=!0){Le(this,"data",new Map);Le(this,"stats",{hits:0,misses:0,sets:0,deletes:0,evictions:0,memoryUsage:0,entryCount:0,totalEntries:0,rateLimitedKeys:[],expiredEntries:0,staleEntries:0});Le(this,"defaultTTL",30*60*1e3);Le(this,"localStoragePrefix");Le(this,"persistToLocalStorage");this.localStoragePrefix=t,this.persistToLocalStorage=n,this.persistToLocalStorage&&this.loadFromLocalStorage()}loadFromLocalStorage(){try{const t=Object.keys(localStorage),n=`${this.localStoragePrefix}_`;let r=0;for(const a of t)if(a.startsWith(n)){const i=a.substring(n.length),s=localStorage.getItem(a);if(s){const l=JSON.parse(s);Date.now()-l.time<=this.defaultTTL?(this.data.set(i,l),r++):(localStorage.removeItem(a),this.stats.expiredEntries++)}}this.stats.entryCount=this.data.size,this.stats.totalEntries=this.data.size}catch(t){console.warn("Error loading cache from localStorage:",t)}}saveToLocalStorage(t,n){if(this.persistToLocalStorage)try{const r=`${this.localStoragePrefix}_${String(t)}`;localStorage.setItem(r,JSON.stringify(n))}catch(r){console.warn("Error saving to localStorage:",r)}}removeFromLocalStorage(t){if(this.persistToLocalStorage)try{const n=`${this.localStoragePrefix}_${String(t)}`;localStorage.removeItem(n)}catch(n){console.warn("Error removing from localStorage:",n)}}set(t,n){const r={value:n,time:Date.now()};this.data.set(t,r),this.saveToLocalStorage(t,r),this.stats.sets++,this.stats.entryCount=this.data.size,this.stats.totalEntries=this.data.size}get(t,n){const r=this.data.get(t);if(r){const a=n||this.defaultTTL;if(Date.now()-r.time>a){this.data.delete(t),this.removeFromLocalStorage(t),this.stats.expiredEntries++,this.stats.misses++;return}else return this.stats.hits++,r.value}else{this.stats.misses++;return}}delete(t){const n=this.data.delete(t);return n&&(this.removeFromLocalStorage(t),this.stats.deletes++,this.stats.entryCount=this.data.size,this.stats.totalEntries=this.data.size),n}clear(){const t=Array.from(this.data.keys());if(this.data.clear(),this.persistToLocalStorage)for(const n of t)this.removeFromLocalStorage(n);this.stats.entryCount=0,this.stats.totalEntries=0}size(){return this.data.size}keys(){return Array.from(this.data.keys())}values(){return Array.from(this.data.values()).map(t=>t.value)}has(t){return this.data.has(t)}hasValid(t,n){const r=this.data.get(t);if(!r)return!1;const a=n||this.defaultTTL;return Date.now()-r.time>a?(this.data.delete(t),this.removeFromLocalStorage(t),this.stats.expiredEntries++,!1):!0}getAge(t){const n=this.data.get(t);if(n)return Date.now()-n.time}getTimeUntilExpiration(t,n){const r=this.data.get(t);if(!r)return 0;const a=n||this.defaultTTL,i=Date.now()-r.time,s=a-i;return Math.max(0,s)}getStats(){return{...this.stats,entryCount:this.data.size,totalEntries:this.data.size,memoryUsage:this.calculateMemoryUsage()}}getCacheInfo(){return{totalEntries:this.data.size,rateLimitedKeys:[],expiredEntries:this.stats.expiredEntries,staleEntries:this.stats.staleEntries,memoryUsage:this.calculateMemoryUsage(),hits:this.stats.hits,misses:this.stats.misses}}cleanup(){const t=Date.now();let n=0;for(const[r,a]of this.data.entries())t-a.time>this.defaultTTL&&(this.data.delete(r),this.removeFromLocalStorage(r),n++);this.stats.expiredEntries+=n,this.stats.entryCount=this.data.size,this.stats.totalEntries=this.data.size}getTimeUntilNextRequest(t){return this.getTimeUntilExpiration(t)}setDefaultTTL(t){this.defaultTTL=t}getDefaultTTL(){return this.defaultTTL}calculateMemoryUsage(){let t=0;for(const[n,r]of this.data.entries())t+=JSON.stringify(n).length+JSON.stringify(r).length;return t}}function Ib(e,t="smart_cache",n=!0){const r=new Tb(t,n);return e&&r.setDefaultTTL(e),r}const xn=Ib(30*60*1e3,"trading_data_cache",!0),Xr=()=>{var I;const[e,t]=f.useState(null),[n,r]=f.useState(!0),[a,i]=f.useState(null),[s,l]=f.useState({isFresh:!1,timeUntilNextRefresh:0,isRateLimited:!1}),c="Calculations",u="A:G",d="Coinbase Balance",h="A:D",m="Transactions Raw Data",p="T:T",g=f.useCallback(w=>{var T,j,E,C,$,A,D,_,R,z,K;if(!w||w.length<23)return null;try{const Y=Z=>{if(!Z)return 0;const q=Z.toString().replace(/[$,%]/g,"").trim();return parseFloat(q)||0};return{availableUSDC:Y((T=w[3])==null?void 0:T[1]),openTradingPositions:Y((j=w[4])==null?void 0:j[1]),totalAccountValue:Y((E=w[5])==null?void 0:E[1]),totalCapitalDeposited:Y((C=w[10])==null?void 0:C[1]),profitsWithdrawn:Y(($=w[11])==null?void 0:$[1]),netCapitalAtRisk:Y((A=w[12])==null?void 0:A[1]),realizedProfits:Y((D=w[17])==null?void 0:D[1]),totalTrades:Y((_=w[18])==null?void 0:_[1]),avgProfitPerTrade:Y((R=w[19])==null?void 0:R[1]),totalTradingVolume:Y((z=w[21])==null?void 0:z[1]),profitsSaved:Y((K=w[22])==null?void 0:K[1])}}catch(Y){return console.error("Error parsing Coinbase Balance:",Y),null}},[]),v=f.useCallback(w=>{if(!w||w.length<2)return 0;const T=[];for(let C=1;C<w.length;C++){const $=w[C],A=$==null?void 0:$[0];if(A&&A.toString().trim()!==""){let D=A.toString().replace(/[%]/g,"").trim();const _=parseFloat(D);if(!isNaN(_)&&_!==0){const R=_<1?_*100:_;T.push(R)}}}if(T.length===0)return 0;const E=T.reduce((C,$)=>C+$,0)/T.length;return console.log(`[parsePercentGainColumn] Parsed ${T.length} % gains, average: ${E.toFixed(2)}%`),E},[]),y=f.useCallback((w,T)=>{var Y,Z,q,te,he,Ie,ze,fe,P,W;if(console.log("[parseCalculationsData] Rows received:",w==null?void 0:w.length,"rows"),console.log("[parseCalculationsData] First row (headers):",w==null?void 0:w[0]),console.log("[parseCalculationsData] Last 3 rows:",w==null?void 0:w.slice(-3)),!w||w.length<3)return console.warn("[parseCalculationsData] FALLBACK: Not enough rows (need 3, got",w==null?void 0:w.length,")"),b();let j=null,E=-1;for(let B=w.length-1;B>=0;B--){const F=w[B],N=((Y=F==null?void 0:F[0])==null?void 0:Y.toString().toLowerCase())||"";if(console.log(`[parseCalculationsData] Row ${B}: length=${F==null?void 0:F.length}, firstCell="${F==null?void 0:F[0]}"`),F&&F.length>=2&&N.includes("grand total")){j=F,E=B,console.log("[parseCalculationsData] FOUND Grand Total at row",B,":",F);break}}if(!j||j.length<2)return console.warn("[parseCalculationsData] FALLBACK: Grand Total row not found or too short"),console.warn("[parseCalculationsData] grandTotalRow:",j),b();const C=parseFloat((Z=j[1])==null?void 0:Z.toString().replace(/[$,]/g,""))||0,$=parseInt((q=j[2])==null?void 0:q.toString().replace(/[,]/g,""))||0;console.log("[parseCalculationsData] Grand Total: $"+C+", "+$+" trades");let A=0,D=0,_=0,R=0;for(let B=E-1;B>=1;B--){const F=w[B];if(F&&F.length>=7){const N=parseFloat((te=F[3])==null?void 0:te.toString().replace(/[$,]/g,""))||0,L=parseFloat((he=F[4])==null?void 0:he.toString().replace(/[$,]/g,""))||0,G=parseFloat((Ie=F[5])==null?void 0:Ie.toString().replace(/[$,]/g,""))||0,O=parseFloat((ze=F[6])==null?void 0:ze.toString().replace(/[$,]/g,""))||0;if(N>0||L>0||G>0||O>0){A=N,D=L,_=G,R=O,console.log("[parseCalculationsData] Found calculated fields in row",B,":",F[0]),console.log("[parseCalculationsData] Calculated fields:",{avgProfitPerTrade:A,monthlyAverage:D,dailyAvg:_,bestMonthProfit:R});break}}}A===0&&D===0&&console.warn("[parseCalculationsData] WARNING: Calculated fields not found in any month row");const z=[],K=new Date().getFullYear();console.log("[parseCalculationsData] Parsing monthly data, rows 1 to",E-1);for(let B=1;B<E;B++){const F=w[B];if(F&&F.length>=2){const N=(fe=F[0])==null?void 0:fe.toString().trim(),L=parseFloat((P=F[1])==null?void 0:P.toString().replace(/[$,]/g,""))||0,G=parseInt((W=F[2])==null?void 0:W.toString().replace(/[,]/g,""))||0;if(N&&N!=="Grand Total"&&N!==""&&!N.toLowerCase().includes("month")){let O=N,Q=K;if(N.includes("-")){const X=N.split("-");if(X.length>=2){Q=parseInt(X[0])||K;const je=parseInt(X[1]);O=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][je]||N}}else N.length>3&&(O=N.substring(0,3));z.push({month:O,year:Q,profit:L,trades:G}),console.log(`[parseCalculationsData] Added month: ${O} ${Q}, profit: $${L}, trades: ${G}`)}}}return console.log("[parseCalculationsData] SUCCESS: Parsed",z.length,"months of data"),console.log("[parseCalculationsData] Final totals: $"+C.toFixed(2)+", "+$+" trades"),{totalProfit:C,totalTrades:$,avgProfitPerTrade:A,monthlyAverage:D,dailyAvg:_,bestMonthProfit:R,avgPercentGain:0,monthlyData:z,isLiveData:!0,lastUpdated:T}},[]),b=()=>{console.error("⚠️ [getMockTradingStatsBase] USING MOCK DATA - API parsing failed!"),console.error("⚠️ This means the site is showing FAKE data of $3,905.39 instead of real data."),console.error("⚠️ Check the parsing logs above to see why.");const w=[{month:"Sep",year:2024,profit:312.45,trades:68},{month:"Oct",year:2024,profit:445.89,trades:92},{month:"Nov",year:2024,profit:523.12,trades:105},{month:"Dec",year:2024,profit:398.67,trades:84},{month:"Jan",year:2025,profit:477.23,trades:89},{month:"Feb",year:2025,profit:686.71,trades:124},{month:"Mar",year:2025,profit:261.97,trades:67},{month:"Apr",year:2025,profit:552.58,trades:98},{month:"May",year:2025,profit:376.3,trades:82},{month:"Jun",year:2025,profit:382.97,trades:91},{month:"Jul",year:2025,profit:817.31,trades:156},{month:"Aug",year:2025,profit:350.32,trades:78}],T=w.reduce((E,C)=>E+C.profit,0),j=w.reduce((E,C)=>E+C.trades,0);return{totalProfit:T,totalTrades:j,avgProfitPerTrade:j>0?T/j:0,monthlyAverage:w.length>0?T/w.length:0,dailyAvg:15.5,bestMonthProfit:Math.max(...w.map(E=>E.profit)),avgPercentGain:2.35,monthlyData:w,isLiveData:!1,lastUpdated:new Date().toISOString()}},x=f.useCallback(async(w=!1)=>{var T;try{r(!0),i(null);const j="1Q8I0kU3TinicEOZCgBjisRbktIOryaKnJ2GaBncxako",E="AIzaSyDNQznjzn8BijyHJWWOesvggVc31FFK-LA",C=new Date().toISOString(),[$,A,D]=await Promise.allSettled([fetch(`https://sheets.googleapis.com/v4/spreadsheets/${j}/values/${c}!${u}?key=${E}`),fetch(`https://sheets.googleapis.com/v4/spreadsheets/${j}/values/${d}!${h}?key=${E}`),fetch(`https://sheets.googleapis.com/v4/spreadsheets/${j}/values/${m}!${p}?key=${E}`)]);console.log("[fetchEnhancedTradingStats] Calculations API response status:",$.status);const _=$.status==="fulfilled"?await $.value.json():null;_?console.log("[fetchEnhancedTradingStats] Calculations data received:",(T=_.values)==null?void 0:T.length,"rows"):console.error("[fetchEnhancedTradingStats] Calculations API call failed completely");const R=_!=null&&_.values?y(_.values,C):b();console.log("[fetchEnhancedTradingStats] Using",R.isLiveData?"✅ LIVE DATA":"❌ MOCK DATA");const z=A.status==="fulfilled"?await A.value.json():null,K=z?g(z.values||[]):null,Y=D.status==="fulfilled"?await D.value.json():null,Z=Y!=null&&Y.values?v(Y.values):0,q={...R,avgPercentGain:Z,portfolioSummary:K||void 0};t(q),l({isFresh:!w,timeUntilNextRefresh:0,isRateLimited:!1})}catch(j){console.error("Error fetching enhanced trading stats:",j),i(j instanceof Error?j.message:"Failed to load trading data");const E=k();t(E)}finally{r(!1)}},[y,g,v]),k=()=>{console.log("🧪 [getEnhancedMockTradingStats] Using mock data with 2024+2025 for multi-year test");const w=[{month:"Sep",year:2024,profit:312.45,trades:68},{month:"Oct",year:2024,profit:445.89,trades:92},{month:"Nov",year:2024,profit:523.12,trades:105},{month:"Dec",year:2024,profit:398.67,trades:84},{month:"Jan",year:2025,profit:477.23,trades:89},{month:"Feb",year:2025,profit:686.71,trades:124},{month:"Mar",year:2025,profit:261.97,trades:67},{month:"Apr",year:2025,profit:552.58,trades:98},{month:"May",year:2025,profit:376.3,trades:82},{month:"Jun",year:2025,profit:382.97,trades:91},{month:"Jul",year:2025,profit:817.31,trades:156},{month:"Aug",year:2025,profit:350.32,trades:78},{month:"Sep",year:2025,profit:425.6,trades:88},{month:"Oct",year:2025,profit:512.45,trades:102},{month:"Nov",year:2025,profit:389.2,trades:76},{month:"Dec",year:2025,profit:298.5,trades:62}],T=w.reduce((E,C)=>E+C.profit,0),j=w.reduce((E,C)=>E+C.trades,0);return{totalProfit:T,totalTrades:j,avgProfitPerTrade:j>0?T/j:0,monthlyAverage:w.length>0?T/w.length:0,dailyAvg:15.5,bestMonthProfit:686.71,avgPercentGain:2.35,monthlyData:w,isLiveData:!1,lastUpdated:new Date().toISOString(),portfolioSummary:void 0}};return f.useEffect(()=>{x()},[x]),{tradingStats:e,isLoading:n,error:a,refreshStats:()=>x(!0),cacheInfo:s,cacheStats:((I=xn==null?void 0:xn.getStats)==null?void 0:I.call(xn))||{hits:0,misses:0,size:0}}},jb=({title:e="MyRoboticTrader - Set It and Forget It Crypto Trading | Build New Revenue Streams",description:t="Discover how I built multiple revenue streams with AI-Enhanced autonomous robotic crypto trading. Real results, proven system. Start your automated trading journey today.",keywords:n="robotic trading, crypto trading, automated trading, passive income, cryptocurrency, trading bot, AI trading, revenue streams",ogTitle:r="MyRoboticTrader - Set It and Forget It Crypto Trading | Build New Revenue Streams",ogDescription:a="Discover how I built multiple revenue streams with AI-Enhanced autonomous robotic crypto trading. Real results, proven system.",ogImage:i="https://5defe27d.myrobotictrader.pages.dev/og-image.png",twitterTitle:s="MyRoboticTrader - Set It and Forget It Crypto Trading | Build New Revenue Streams",twitterDescription:l="Discover how I built multiple revenue streams with AI-Enhanced autonomous robotic crypto trading. Real results, proven system.",twitterImage:c="https://myrobotictrader.com/robot-twitter.png",canonicalUrl:u="https://myrobotictrader.com/",pageType:d="home"})=>(f.useEffect(()=>{document.title=e;const h=(k,I,w)=>{const T=w?`meta[property="${k}"]`:`meta[name="${k}"]`;let j=document.querySelector(T);j||(j=document.createElement("meta"),w?j.setAttribute("property",k):j.setAttribute("name",k),document.head.appendChild(j)),j.setAttribute("content",I)},m=(k,I)=>{let w=document.querySelector(`link[rel="${k}"]`);w||(w=document.createElement("link"),w.setAttribute("rel",k),document.head.appendChild(w)),w.setAttribute("href",I)};h("title",e),h("description",t),h("keywords",n),h("og:type","website",!0),h("og:url",u,!0),h("og:title",r,!0),h("og:description",a,!0),h("og:image",i,!0),h("og:site_name","MyRoboticTrader",!0),h("twitter:card","summary_large_image",!0),h("twitter:url",u,!0),h("twitter:title",s,!0),h("twitter:description",l,!0),h("twitter:image",c,!0),m("canonical",u),document.querySelectorAll('script[type="application/ld+json"]').forEach(k=>{var I;(I=k.id)!=null&&I.startsWith("structured-data-")&&k.remove()});const g=(k,I)=>{const w=document.createElement("script");w.type="application/ld+json",w.id=`structured-data-${I}`,w.textContent=JSON.stringify(k,null,2),document.head.appendChild(w)},v={"@context":"https://schema.org","@type":"WebSite",name:"MyRoboticTrader",alternateName:"My Robotic Trader",url:u,description:t,author:{"@type":"Person",name:"Patrick Jenkins",jobTitle:"Automated Trading Specialist",knowsAbout:["Cryptocurrency Trading","Automated Trading Systems","AI Trading","Passive Income"]},potentialAction:{"@type":"SearchAction",target:{"@type":"EntryPoint",urlTemplate:`${u}search?q={search_term_string}`},"query-input":"required name=search_term_string"}},y={"@context":"https://schema.org","@type":"Organization",name:"MyRoboticTrader",url:u,logo:{"@type":"ImageObject",url:"https://myrobotictrader.com/favicon-32x32.png",width:32,height:32},description:"Leading platform for AI-enhanced autonomous cryptocurrency trading",foundingDate:"2025",founder:{"@type":"Person",name:"Patrick Jenkins"},contactPoint:{"@type":"ContactPoint",contactType:"customer service",email:"support@myrobotictrader.com"},areaServed:"Worldwide",serviceType:"Automated Trading Platform"},b={"@context":"https://schema.org","@type":"Person",name:"Patrick Jenkins",jobTitle:"Automated Trading Specialist & Founder",worksFor:{"@type":"Organization",name:"MyRoboticTrader"},knowsAbout:["Cryptocurrency Trading","Automated Trading Systems","AI Trading Algorithms","Passive Income Generation","Risk Management","Financial Technology"],description:"Expert in AI-enhanced autonomous cryptocurrency trading with proven track record of building sustainable revenue streams",url:u},x={"@context":"https://schema.org","@type":"FAQPage",mainEntity:[{"@type":"Question",name:"How does automated crypto trading work?",acceptedAnswer:{"@type":"Answer",text:"Our AI-enhanced robotic trading system analyzes market conditions 24/7 and executes trades based on proven algorithms. The system runs autonomously, requiring no manual intervention while building sustainable revenue streams."}},{"@type":"Question",name:"Is automated trading safe?",acceptedAnswer:{"@type":"Answer",text:"Yes, when done properly with robust risk management. Our system includes built-in safety features like stop losses, position sizing, and maximum drawdown limits to protect your capital."}},{"@type":"Question",name:"How much money do I need to start?",acceptedAnswer:{"@type":"Answer",text:"You can start with as little as $1,000, though we recommend at least $5,000 for better diversification and risk management. The system scales with your account size."}}]};if(d==="home"){const k={"@context":"https://schema.org","@type":"Article",headline:"AI-Enhanced Autonomous Robotic Crypto Trading Results",description:t,author:{"@type":"Person",name:"Patrick Jenkins"},publisher:{"@type":"Organization",name:"MyRoboticTrader",logo:{"@type":"ImageObject",url:i}},datePublished:"2025-01-08",dateModified:new Date().toISOString().split("T")[0],mainEntityOfPage:{"@type":"WebPage","@id":u},image:{"@type":"ImageObject",url:i,width:1200,height:630},articleSection:"Trading Results",keywords:n};g(k,"article")}d==="resources"&&g({"@context":"https://schema.org","@type":"Course",name:"AI-Enhanced Autonomous Crypto Trading with GoBabyTrade",description:"Comprehensive resources and tools for automated cryptocurrency trading with GoBabyTrade",provider:{"@type":"Organization",name:"MyRoboticTrader"},instructor:{"@type":"Person",name:"Patrick Jenkins"},courseMode:"online",educationalLevel:"Beginner to Advanced",about:"Automated Trading, Cryptocurrency, AI Trading Systems, GoBabyTrade"},"course"),g(v,"website"),g(y,"organization"),g(b,"person"),g(x,"faq")},[e,t,n,r,a,i,s,l,c,u,d]),null),Nb=()=>(f.useEffect(()=>{const e=()=>{const n=document.head;n.querySelectorAll('meta[data-dynamic="true"]').forEach(s=>s.remove()),[{name:"title",content:"MyRoboticTrader | AI Crypto Trading with Verified Results"},{name:"description",content:"Discover how I built multiple revenue streams with AI-Enhanced autonomous robotic crypto trading. Real results, proven system. Start your automated trading journey today."},{name:"keywords",content:"robotic trading, crypto trading, automated trading, passive income, cryptocurrency, trading bot, AI trading, revenue streams"},{name:"robots",content:"index, follow"},{name:"author",content:"Patrick Jenkins"},{name:"theme-color",content:"#8B5CF6"},{property:"og:type",content:"website"},{property:"og:url",content:"https://myrobotictrader.com/"},{property:"og:title",content:"MyRoboticTrader | AI Crypto Trading with Verified Results"},{property:"og:description",content:"Discover how I built multiple revenue streams with AI-Enhanced autonomous robotic crypto trading. Real results, proven system."},{property:"og:image",content:"https://myrobotictrader.com/og-image.png"},{property:"og:image:width",content:"1200"},{property:"og:image:height",content:"630"},{property:"og:image:type",content:"image/png"},{property:"og:site_name",content:"MyRoboticTrader"},{property:"og:locale",content:"en_US"},{property:"twitter:card",content:"summary_large_image"},{property:"twitter:site",content:"@myrobotictrader"},{property:"twitter:creator",content:"@myrobotictrader"},{property:"twitter:url",content:"https://myrobotictrader.com/"},{property:"twitter:title",content:"MyRoboticTrader | AI Crypto Trading with Verified Results"},{property:"twitter:description",content:"Discover how I built multiple revenue streams with AI-Enhanced autonomous robotic crypto trading. Real results, proven system."},{property:"twitter:image",content:"https://myrobotictrader.com/twitter-image.png"},{property:"twitter:image:alt",content:"MyRoboticTrader - Automated Crypto Trading Results"},{property:"linkedin:owner",content:"Patrick Jenkins"},{property:"og:image:secure_url",content:"https://myrobotictrader.com/og-image.png"}].forEach(({name:s,property:l,content:c})=>{const u=document.createElement("meta");u.setAttribute("data-dynamic","true"),s?u.setAttribute("name",s):l&&u.setAttribute("property",l),u.setAttribute("content",c),n.appendChild(u)}),document.title="MyRoboticTrader | AI Crypto Trading with Verified Results";let i=n.querySelector('link[rel="canonical"]');i||(i=document.createElement("link"),i.setAttribute("rel","canonical"),i.setAttribute("data-dynamic","true"),n.appendChild(i)),i.setAttribute("href","https://myrobotictrader.com/")};e(),setTimeout(e,100),(()=>{document.querySelectorAll('script[type="application/ld+json"][data-static="true"]').forEach(a=>a.remove()),[{id:"website-static",data:{"@context":"https://schema.org","@type":"WebSite",name:"MyRoboticTrader",alternateName:"My Robotic Trader",url:"https://myrobotictrader.com/",description:"Discover how I built multiple revenue streams with AI-Enhanced autonomous robotic crypto trading. Real results, proven system.",author:{"@type":"Person",name:"Patrick Jenkins",jobTitle:"Automated Trading Specialist"}}},{id:"organization-static",data:{"@context":"https://schema.org","@type":"Organization",name:"MyRoboticTrader",url:"https://myrobotictrader.com/",logo:{"@type":"ImageObject",url:"https://myrobotictrader.com/og-image.png",width:1200,height:630},description:"Leading platform for AI-enhanced autonomous cryptocurrency trading",founder:{"@type":"Person",name:"Patrick Jenkins"}}}].forEach(({id:a,data:i})=>{const s=document.createElement("script");s.type="application/ld+json",s.setAttribute("data-static","true"),s.id=a,s.textContent=JSON.stringify(i,null,2),document.head.appendChild(s)})})()},[]),null),Ab=()=>{const e=f.useRef(null);return f.useEffect(()=>{setTimeout(()=>{const n=e.current;if(!n)return;const r=n.getContext("2d");if(!r)return;n.width=1200,n.height=630;const a=r.createLinearGradient(0,0,1200,630);a.addColorStop(0,"#0f172a"),a.addColorStop(.5,"#7c3aed"),a.addColorStop(1,"#0f172a"),r.fillStyle=a,r.fillRect(0,0,1200,630),r.fillStyle="rgba(139, 92, 246, 0.1)",r.beginPath(),r.arc(200,150,100,0,Math.PI*2),r.fill(),r.fillStyle="rgba(236, 72, 153, 0.1)",r.beginPath(),r.arc(1e3,480,120,0,Math.PI*2),r.fill(),r.fillStyle="#ffffff",r.font="bold 64px Arial, sans-serif",r.textAlign="center",r.fillText("MyRoboticTrader",600,200),r.font="36px Arial, sans-serif",r.fillStyle="#e2e8f0",r.fillText("Set It and Forget It Crypto Trading",600,260),r.font="bold 48px Arial, sans-serif",r.fillStyle="#10b981",r.fillText("$12,450 Total Profits",600,350),r.font="28px Arial, sans-serif",r.fillStyle="#a78bfa",r.fillText("Real Results • 8+ Months Trading • Always Growing",600,400),r.font="bold 32px Arial, sans-serif",r.fillStyle="#fbbf24",r.fillText("Get Free Training Now",600,500),r.fillStyle="#8b5cf6",r.fillRect(550,520,100,60),r.fillStyle="#ffffff",r.font="bold 36px Arial, sans-serif",r.textAlign="center",r.fillText("R",600,560),n.toBlob(i=>{if(i){const s=URL.createObjectURL(i),l=document.querySelector('meta[property="og:image"]'),c=document.querySelector('meta[property="twitter:image"]');l&&l.setAttribute("content",s),c&&c.setAttribute("content",s)}},"image/png",.9)},100)},[]),o.jsx("canvas",{ref:e,style:{display:"none"},width:1200,height:630})};var Sb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Pb=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ob=(e,t)=>{const n=f.forwardRef(({color:r="currentColor",size:a=24,strokeWidth:i=2,absoluteStrokeWidth:s,children:l,...c},u)=>f.createElement("svg",{ref:u,...Sb,width:a,height:a,stroke:r,strokeWidth:s?Number(i)*24/Number(a):i,className:`lucide lucide-${Pb(e)}`,...c},[...t.map(([d,h])=>f.createElement(d,h)),...(Array.isArray(l)?l:[l])||[]]));return n.displayName=`${e}`,n};var J=Ob;const Cb=J("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]),Eb=J("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]),Mb=J("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]),Pe=J("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),$b=J("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]),ap=J("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]),jl=J("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]),Wi=J("Bot",[["rect",{width:"18",height:"10",x:"3",y:"11",rx:"2",key:"1ofdy3"}],["circle",{cx:"12",cy:"5",r:"2",key:"f1ur92"}],["path",{d:"M12 7v4",key:"xawao1"}],["line",{x1:"8",x2:"8",y1:"16",y2:"16",key:"h6x27f"}],["line",{x1:"16",x2:"16",y1:"16",y2:"16",key:"5lty7f"}]]),Tu=J("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]),ip=J("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]),We=J("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["polyline",{points:"22 4 12 14.01 9 11.01",key:"6xbx8j"}]]),op=J("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),Iu=J("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),ju=J("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),sp=J("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]),Qr=J("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]),Db=J("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]),Bn=J("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]),Bb=J("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]),Zn=J("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]),_b=J("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]),lp=J("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),Rb=J("Gift",[["polyline",{points:"20 12 20 22 4 22 4 12",key:"nda8fc"}],["rect",{width:"20",height:"5",x:"2",y:"7",key:"wkgdzj"}],["line",{x1:"12",x2:"12",y1:"22",y2:"7",key:"1n8zgp"}],["path",{d:"M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z",key:"zighg4"}],["path",{d:"M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z",key:"1pa5tk"}]]),Lb=J("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]),cp=J("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),Wb=J("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]),Fb=J("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]),Hb=J("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),zb=J("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),Yb=J("Percent",[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]]),qb=J("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]),Gb=J("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]),un=J("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",key:"3xmgem"}]]),Ub=J("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]),Dr=J("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]),Ue=J("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]),Kb=J("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]),up=J("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),dp=J("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),Nu=J("Wallet",[["path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4",key:"195gfw"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5",key:"195n9w"}],["path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z",key:"vllfpd"}]]),Vb=J("Wifi",[["path",{d:"M5 13a10 10 0 0 1 14 0",key:"6v8j51"}],["path",{d:"M8.5 16.5a5 5 0 0 1 7 0",key:"sej527"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["line",{x1:"12",x2:"12.01",y1:"20",y2:"20",key:"of4bc4"}]]),Jb=J("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Br=J("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),Zb=()=>{const e=[{Icon:Wi,delay:"0s",position:"top-20 left-20"},{Icon:Ue,delay:"2s",position:"top-32 right-32"},{Icon:un,delay:"4s",position:"bottom-40 left-16"},{Icon:Qr,delay:"1s",position:"bottom-32 right-20"},{Icon:Br,delay:"3s",position:"top-1/2 left-8"},{Icon:Bn,delay:"5s",position:"top-1/3 right-8"}];return o.jsx(o.Fragment,{children:e.map(({Icon:t,delay:n,position:r},a)=>o.jsx("div",{className:`absolute ${r} opacity-20 pointer-events-none hidden lg:block animate-float-subtle`,style:{animationDelay:n},children:o.jsx("div",{className:"w-8 h-8 text-purple-300",children:o.jsx(t,{className:"w-full h-full"})})},a))})},Xb=()=>{const e=new Date(2025,0,8),t=new Date;let n=(t.getFullYear()-e.getFullYear())*12;return n+=t.getMonth()-e.getMonth(),t.getDate()<e.getDate()&&n--,Math.max(0,n)},Qb=()=>{const{tradingStats:e,isLoading:t}=Xr(),n=Xb(),r=()=>{Ri("start_trading_save_1000","hero"),Li("https://gobabytrade.com/432706BE","Start Trading Save $1000")};return o.jsxs("section",{className:"relative min-h-screen flex items-center justify-center px-4 overflow-hidden pb-10 pt-10",children:[o.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"}),o.jsx("div",{className:"absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-purple-500/15 to-transparent"}),o.jsx(Zb,{}),o.jsxs("div",{className:"relative max-w-6xl mx-auto text-center z-10 mt-32",children:[o.jsxs("div",{className:"mb-8",children:[o.jsxs("div",{className:"inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-400/40 mb-2 mt-4 shadow-lg shadow-purple-500/20",children:[o.jsx(Wi,{className:"w-4 h-4 text-purple-300"}),o.jsx("span",{className:"text-purple-200 font-medium",children:"AI-Enhanced Autonomous Trading"})]}),o.jsxs("p",{className:"text-sm text-gray-400 mb-4",children:["Powered by"," ",o.jsx("a",{href:"https://gobabytrade.com/432706BE",target:"_blank",rel:"noopener noreferrer",className:"text-purple-300 hover:text-purple-200 transition-colors",children:"GoBabyTrade"})]}),o.jsxs("h1",{className:"text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight px-4",children:[o.jsxs("span",{className:"block md:hidden",children:["Building Revenue Streams",o.jsx("span",{className:"block text-transparent bg-gradient-to-r from-green-300 via-blue-400 to-purple-400 bg-clip-text",children:"Without Watching Charts"})]}),o.jsxs("span",{className:"hidden md:block",children:["How I'm Building Multiple",o.jsx("span",{className:"block text-transparent bg-gradient-to-r from-green-300 via-blue-400 to-purple-400 bg-clip-text",children:"Revenue Streams"}),o.jsx("span",{className:"block text-white",children:"Without Watching Charts"})]})]}),o.jsx("p",{className:"text-lg sm:text-xl md:text-2xl text-gray-200 mb-4 max-w-4xl mx-auto px-4",children:t?o.jsx("span",{className:"text-gray-300",children:"Loading live results..."}):o.jsxs(o.Fragment,{children:[o.jsxs("span",{className:"text-green-300 font-bold",children:["$",e==null?void 0:e.totalProfit.toLocaleString("en-US",{minimumFractionDigits:0,maximumFractionDigits:0}),"+ profit"]})," ","in"," ",o.jsxs("span",{className:"text-blue-300 font-bold",children:[n,"+ months"]})," ","using AI-enhanced autonomous trading most people don't know exists."]})}),o.jsx("p",{className:"text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto px-4",children:"See my live results below."})]}),o.jsx("div",{className:"flex flex-col sm:flex-row gap-4 justify-center mb-16",children:o.jsxs("a",{href:"https://gobabytrade.com/432706BE",onClick:r,target:"_blank",rel:"noopener noreferrer",className:"group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-purple-500/30 flex items-center justify-center gap-2",children:["Start Trading – Save $1,000",o.jsx(Pe,{className:"w-5 h-5 group-hover:translate-x-1 transition-transform"})]})}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10",children:[o.jsxs("div",{className:"group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-green-500/15",children:[o.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"}),o.jsx("div",{className:"relative w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/40",children:o.jsx(un,{className:"w-full h-full text-white"})}),o.jsx("div",{className:"relative text-center",children:t?o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"text-2xl font-bold text-green-300 mb-2 animate-pulse",children:"Loading..."}),o.jsx("div",{className:"text-gray-200 font-medium",children:"Total Profit"})]}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"text-4xl font-bold text-green-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-300 group-hover:to-emerald-300 group-hover:bg-clip-text transition-all duration-300",children:["$",e==null?void 0:e.totalProfit.toLocaleString("en-US",{minimumFractionDigits:0,maximumFractionDigits:0}),"+"]}),o.jsx("div",{className:"text-gray-200 font-medium group-hover:text-white transition-colors duration-300",children:"Total Profit"}),(e==null?void 0:e.isLiveData)&&o.jsxs("div",{className:"mt-2 flex items-center justify-center gap-1",children:[o.jsx("div",{className:"w-2 h-2 bg-green-400 rounded-full animate-pulse"}),o.jsx("span",{className:"text-xs text-green-300",children:"LIVE"})]})]})}),o.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"})]}),o.jsxs("div",{className:"group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-blue-500/15",children:[o.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"}),o.jsx("div",{className:"relative w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/40",children:o.jsx(Qr,{className:"w-full h-full text-white"})}),o.jsx("div",{className:"relative text-center",children:t?o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"text-2xl font-bold text-blue-300 mb-2 animate-pulse",children:"Loading..."}),o.jsx("div",{className:"text-gray-200 font-medium",children:"Profitable"})]}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"text-4xl font-bold text-blue-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-cyan-300 group-hover:bg-clip-text transition-all duration-300",children:[n,"+ Months"]}),o.jsx("div",{className:"text-gray-200 font-medium group-hover:text-white transition-colors duration-300",children:"Profitable"})]})}),o.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"})]}),o.jsxs("div",{className:"group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-purple-500/15",children:[o.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"}),o.jsx("div",{className:"relative w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/40",children:o.jsx(dp,{className:"w-full h-full text-white"})}),o.jsxs("div",{className:"relative text-center",children:[o.jsx("div",{className:"text-4xl font-bold text-purple-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 group-hover:bg-clip-text transition-all duration-300",children:"Zero"}),o.jsx("div",{className:"text-gray-200 font-medium group-hover:text-white transition-colors duration-300",children:"Losing Months"})]}),o.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"})]})]}),o.jsx("div",{className:"max-w-2xl mx-auto",children:o.jsx("img",{src:"/graphics/homepage-hero-01.webp",alt:"Set It and Forget It - Manual Trading vs Autonomous Trading comparison",className:"w-full rounded-2xl shadow-2xl shadow-purple-500/20 border border-white/10"})})]})]})},Ia=new Date(2025,0,8),Fi=()=>{const e=new Date;let t=(e.getFullYear()-Ia.getFullYear())*12;t+=e.getMonth()-Ia.getMonth();let n=e.getDate()-Ia.getDate();if(n<0){t--;const r=new Date(e.getFullYear(),e.getMonth(),0);n+=r.getDate()}if(t>=1)return n>0?`${t} month${t>1?"s":""}, ${n} day${n>1?"s":""}`:`${t} month${t>1?"s":""}`;{const r=Math.abs(e.getTime()-Ia.getTime()),a=Math.ceil(r/(1e3*60*60*24));return`${a} day${a>1?"s":""}`}},ew=({tradingStats:e})=>{var s;const t=Fi(),r=e||{totalProfit:12450,totalTrades:1247,isLiveData:!1,dailyAvg:89},a=((s=e==null?void 0:e.dailyAvg)==null?void 0:s.toFixed(0))||"89",i=e!==null;return o.jsxs("section",{className:"py-16 px-4 relative overflow-hidden",children:[o.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"}),o.jsxs("div",{className:"relative max-w-6xl mx-auto",children:[o.jsxs("div",{className:"text-center mb-12",children:[o.jsxs("div",{className:"inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/30 to-purple-500/30 backdrop-blur-sm rounded-full px-4 py-2 border border-blue-400/40 mb-6 shadow-lg shadow-blue-500/20",children:[o.jsx(up,{className:"w-4 h-4 text-blue-300"}),o.jsx("span",{className:"text-blue-200 font-medium",children:"My Story"})]}),o.jsxs("h2",{className:"text-3xl md:text-5xl font-bold text-white mb-6",children:["Hi, I'm Patrick",o.jsx("span",{className:"block text-transparent bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text",children:"Here's How I Discovered This System"})]})]}),o.jsxs("div",{className:"bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl border border-blue-400/20 p-8 shadow-lg shadow-blue-500/10 mb-8",children:[o.jsx("img",{src:"/patrick-and-moses.jpeg",alt:"Patrick Jenkins with Moses",className:"hidden lg:block float-right ml-8 mb-6 w-80 h-80 rounded-2xl object-cover border-4 border-white/20 shadow-2xl shadow-purple-500/20"}),o.jsx("div",{className:"lg:hidden flex justify-center mb-8",children:o.jsx("img",{src:"/patrick-and-moses.jpeg",alt:"Patrick Jenkins with Moses",className:"w-64 h-64 rounded-2xl object-cover border-4 border-white/20 shadow-2xl shadow-purple-500/20"})}),o.jsxs("div",{className:"text-lg text-gray-200 leading-relaxed",children:[o.jsxs("h3",{className:"text-2xl font-bold text-blue-300 mb-4 flex items-center gap-2",children:[o.jsx(Dr,{className:"w-6 h-6"}),"My Journey Started Like Yours"]}),o.jsx("p",{className:"mb-6",children:"I've been following the markets since 2014, and I genuinely love investing. I did okay with my stock investments, but tracking individual stocks became incredibly tedious. I got frustrated with mutual funds because of their fees and average returns - even index funds weren't delivering what I hoped for. Target date funds? Don't get me started on those."}),o.jsxs("h3",{className:"text-2xl font-bold text-blue-300 mb-4 flex items-center gap-2",children:[o.jsx(Bn,{className:"w-6 h-6"}),"Chasing the Dream of Extra Income"]}),o.jsxs("p",{className:"mb-4",children:[o.jsx("span",{className:"text-blue-200 font-semibold",children:"Like many of you, I've always wanted to make extra income in addition to my 9-to-5 job."})," ","Over the years, I invested tens of thousands in various courses and systems - email marketing, affiliate marketing, Amazon wholesale, you name it. Some methods seemed unreliable, and honestly, part of the problem was probably me not putting in full effort or knowing how to position myself properly."]}),o.jsx("p",{className:"mb-6",children:`I was tired of chasing the next "breakthrough" system. Tired of complex strategies that required constant attention. Tired of watching opportunities slip by because I was stuck at work or didn't have time to analyze the market.`}),o.jsxs("h3",{className:"text-2xl font-bold text-yellow-300 mb-4 flex items-center gap-2",children:[o.jsx(Wb,{className:"w-6 h-6"}),"Then Everything Changed"]}),o.jsxs("p",{className:"mb-4",children:["So when I discovered this autonomous trading system while researching new opportunities, my first thought was:"," ",o.jsx("span",{className:"italic text-yellow-200 font-semibold",children:`"Here's just another system promising easy money."`})," ","I was naturally skeptical - and you should be too."]}),o.jsxs("p",{className:"mb-6",children:[o.jsx("span",{className:"text-green-300 font-bold",children:"But this one is truly automated!"})," ","I set it up, connected my exchange accounts with trading-only API permissions, and started with a small amount to test it. The autonomous trader trades while I'm working, sleeping, or spending time with family."]}),o.jsxs("h3",{className:"text-2xl font-bold text-green-300 mb-4 flex items-center gap-2",children:[o.jsx(Ue,{className:"w-6 h-6"}),"The Results Speak for Themselves"]}),o.jsxs("p",{className:"mb-4",children:[o.jsxs("span",{className:"text-green-400 font-bold text-xl",children:["In just ",t,", my system has generated $",r.totalProfit.toLocaleString()," in realized profits."]})," ","That's an average of"," ",o.jsxs("span",{className:"text-green-300 font-semibold",children:["$",a," per day"]})," ","- money that's been withdrawn and spent on real life."]}),o.jsx("p",{className:"mb-6",children:`This isn't paper gains or "what if" projections. This is actual cash that I use for every day living. As of now, it's giving me the extra money to spend for every day expenses and save for emergencies. I'm also reinvesting a portion of my profits to scale my investment capital.`}),o.jsxs("h3",{className:"text-2xl font-bold text-pink-300 mb-4 flex items-center gap-2",children:[o.jsx(Lb,{className:"w-6 h-6"}),"The Best Part: Time with Moses"]}),o.jsx("div",{className:"lg:hidden flex justify-center mb-6",children:o.jsx("img",{src:"/moses-sprinkler.jpeg",alt:"Moses enjoying the sprinkler",className:"w-64 h-64 rounded-2xl object-cover border-4 border-white/20 shadow-2xl shadow-purple-500/20"})}),o.jsx("div",{className:"hidden lg:block",style:{float:"left",marginRight:"2rem",marginBottom:"1.5rem",width:"320px",height:"320px"},children:o.jsx("img",{src:"/moses-sprinkler.jpeg",alt:"Moses enjoying the sprinkler",className:"w-full h-full rounded-2xl object-cover border-4 border-white/20 shadow-2xl shadow-purple-500/20"})}),o.jsxs("p",{className:"mb-4",children:[o.jsx("span",{className:"text-pink-200 font-semibold",children:"I recently got a new dog named Moses, and this automated system gives me something priceless: time."})," ","While my trader works 24/7—executing trades, taking profits, managing positions—I'm at the park with Moses. I'm not glued to charts or stressed about missing opportunities."]}),o.jsx("p",{className:"mb-4",children:`That's what "Set It and Forget It" really means. The system handles everything while I actually live my life. No more choosing between making money and spending time with those I love. I get both.`}),o.jsx("p",{className:"mb-4",children:"Moses and I go to the park almost every day now. Whether it's morning walks, afternoon sprinkler sessions, or just lounging in the yard, I'm actually present for these moments. The autonomous trader is working in the background, but my focus is where it should be—on the simple joys that make life worth living."}),o.jsx("p",{className:"mb-6",children:"This is the freedom I always wanted: the ability to generate income without being chained to a screen, constantly watching markets and second-guessing decisions. The system does the work. I enjoy the life."}),o.jsxs("h3",{className:"text-2xl font-bold text-blue-300 mb-4 flex items-center gap-2",children:[o.jsx(We,{className:"w-6 h-6"}),"Why I'm Sharing This With You"]}),o.jsx("p",{className:"mb-4",children:"I see people struggling with finances every day - having too much month left at the end of the money. Working overtime just to stay afloat. Missing out on time with family because they need that extra shift."}),o.jsxs("p",{className:"mb-6",children:[o.jsx("span",{className:"text-blue-200 font-semibold",children:"This platform could genuinely help, but not many people know about it."})," ",`That's why I built this site and share what's working for me. As you can see, my total profits are not breaking any records, but it's consistent and reliable - It's truly "Set It and Forget It." My trader only takes what the market GIVES. I'm not a financial guru or marketing expert - I'm just someone who found something that works and wants to help others discover it too.`]})]}),o.jsx("div",{className:"clear-both"})]}),o.jsxs("div",{className:"text-center bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl border border-purple-400/20 p-8",children:[o.jsxs("p",{className:"text-gray-200 max-w-3xl mx-auto text-lg leading-relaxed",children:[o.jsx("span",{className:"text-white font-semibold",children:"Here's the truth:"})," ","I'm not a financial advisor, and I can't promise you'll get the same results I have. But I can show you exactly what's working for me, with real numbers that are updated"," ",i?"live":"regularly"," from my actual trading accounts below."]}),o.jsx("p",{className:"text-blue-300 mt-4 font-medium",children:"If you're ready to explore a different path to financial growth, keep reading."})]})]})]})};function hp(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(n=hp(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function le(){for(var e,t,n=0,r="",a=arguments.length;n<a;n++)(e=arguments[n])&&(t=hp(e))&&(r&&(r+=" "),r+=t);return r}var tw=["dangerouslySetInnerHTML","onCopy","onCopyCapture","onCut","onCutCapture","onPaste","onPasteCapture","onCompositionEnd","onCompositionEndCapture","onCompositionStart","onCompositionStartCapture","onCompositionUpdate","onCompositionUpdateCapture","onFocus","onFocusCapture","onBlur","onBlurCapture","onChange","onChangeCapture","onBeforeInput","onBeforeInputCapture","onInput","onInputCapture","onReset","onResetCapture","onSubmit","onSubmitCapture","onInvalid","onInvalidCapture","onLoad","onLoadCapture","onError","onErrorCapture","onKeyDown","onKeyDownCapture","onKeyPress","onKeyPressCapture","onKeyUp","onKeyUpCapture","onAbort","onAbortCapture","onCanPlay","onCanPlayCapture","onCanPlayThrough","onCanPlayThroughCapture","onDurationChange","onDurationChangeCapture","onEmptied","onEmptiedCapture","onEncrypted","onEncryptedCapture","onEnded","onEndedCapture","onLoadedData","onLoadedDataCapture","onLoadedMetadata","onLoadedMetadataCapture","onLoadStart","onLoadStartCapture","onPause","onPauseCapture","onPlay","onPlayCapture","onPlaying","onPlayingCapture","onProgress","onProgressCapture","onRateChange","onRateChangeCapture","onSeeked","onSeekedCapture","onSeeking","onSeekingCapture","onStalled","onStalledCapture","onSuspend","onSuspendCapture","onTimeUpdate","onTimeUpdateCapture","onVolumeChange","onVolumeChangeCapture","onWaiting","onWaitingCapture","onAuxClick","onAuxClickCapture","onClick","onClickCapture","onContextMenu","onContextMenuCapture","onDoubleClick","onDoubleClickCapture","onDrag","onDragCapture","onDragEnd","onDragEndCapture","onDragEnter","onDragEnterCapture","onDragExit","onDragExitCapture","onDragLeave","onDragLeaveCapture","onDragOver","onDragOverCapture","onDragStart","onDragStartCapture","onDrop","onDropCapture","onMouseDown","onMouseDownCapture","onMouseEnter","onMouseLeave","onMouseMove","onMouseMoveCapture","onMouseOut","onMouseOutCapture","onMouseOver","onMouseOverCapture","onMouseUp","onMouseUpCapture","onSelect","onSelectCapture","onTouchCancel","onTouchCancelCapture","onTouchEnd","onTouchEndCapture","onTouchMove","onTouchMoveCapture","onTouchStart","onTouchStartCapture","onPointerDown","onPointerDownCapture","onPointerMove","onPointerMoveCapture","onPointerUp","onPointerUpCapture","onPointerCancel","onPointerCancelCapture","onPointerEnter","onPointerEnterCapture","onPointerLeave","onPointerLeaveCapture","onPointerOver","onPointerOverCapture","onPointerOut","onPointerOutCapture","onGotPointerCapture","onGotPointerCaptureCapture","onLostPointerCapture","onLostPointerCaptureCapture","onScroll","onScrollCapture","onWheel","onWheelCapture","onAnimationStart","onAnimationStartCapture","onAnimationEnd","onAnimationEndCapture","onAnimationIteration","onAnimationIterationCapture","onTransitionEnd","onTransitionEndCapture"];function Nl(e){if(typeof e!="string")return!1;var t=tw;return t.includes(e)}var nw=["aria-activedescendant","aria-atomic","aria-autocomplete","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colspan","aria-controls","aria-current","aria-describedby","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-modal","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext","className","color","height","id","lang","max","media","method","min","name","style","target","width","role","tabIndex","accentHeight","accumulate","additive","alignmentBaseline","allowReorder","alphabetic","amplitude","arabicForm","ascent","attributeName","attributeType","autoReverse","azimuth","baseFrequency","baselineShift","baseProfile","bbox","begin","bias","by","calcMode","capHeight","clip","clipPath","clipPathUnits","clipRule","colorInterpolation","colorInterpolationFilters","colorProfile","colorRendering","contentScriptType","contentStyleType","cursor","cx","cy","d","decelerate","descent","diffuseConstant","direction","display","divisor","dominantBaseline","dur","dx","dy","edgeMode","elevation","enableBackground","end","exponent","externalResourcesRequired","fill","fillOpacity","fillRule","filter","filterRes","filterUnits","floodColor","floodOpacity","focusable","fontFamily","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontWeight","format","from","fx","fy","g1","g2","glyphName","glyphOrientationHorizontal","glyphOrientationVertical","glyphRef","gradientTransform","gradientUnits","hanging","horizAdvX","horizOriginX","href","ideographic","imageRendering","in2","in","intercept","k1","k2","k3","k4","k","kernelMatrix","kernelUnitLength","kerning","keyPoints","keySplines","keyTimes","lengthAdjust","letterSpacing","lightingColor","limitingConeAngle","local","markerEnd","markerHeight","markerMid","markerStart","markerUnits","markerWidth","mask","maskContentUnits","maskUnits","mathematical","mode","numOctaves","offset","opacity","operator","order","orient","orientation","origin","overflow","overlinePosition","overlineThickness","paintOrder","panose1","pathLength","patternContentUnits","patternTransform","patternUnits","pointerEvents","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","r","radius","refX","refY","renderingIntent","repeatCount","repeatDur","requiredExtensions","requiredFeatures","restart","result","rotate","rx","ry","seed","shapeRendering","slope","spacing","specularConstant","specularExponent","speed","spreadMethod","startOffset","stdDeviation","stemh","stemv","stitchTiles","stopColor","stopOpacity","strikethroughPosition","strikethroughThickness","string","stroke","strokeDasharray","strokeDashoffset","strokeLinecap","strokeLinejoin","strokeMiterlimit","strokeOpacity","strokeWidth","surfaceScale","systemLanguage","tableValues","targetX","targetY","textAnchor","textDecoration","textLength","textRendering","to","transform","u1","u2","underlinePosition","underlineThickness","unicode","unicodeBidi","unicodeRange","unitsPerEm","vAlphabetic","values","vectorEffect","version","vertAdvY","vertOriginX","vertOriginY","vHanging","vIdeographic","viewTarget","visibility","vMathematical","widths","wordSpacing","writingMode","x1","x2","x","xChannelSelector","xHeight","xlinkActuate","xlinkArcrole","xlinkHref","xlinkRole","xlinkShow","xlinkTitle","xlinkType","xmlBase","xmlLang","xmlns","xmlnsXlink","xmlSpace","y1","y2","y","yChannelSelector","z","zoomAndPan","ref","key","angle"],rw=new Set(nw);function mp(e){return typeof e!="string"?!1:rw.has(e)}function pp(e){return typeof e=="string"&&e.startsWith("data-")}function dn(e){if(typeof e!="object"||e===null)return{};var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(mp(n)||pp(n))&&(t[n]=e[n]);return t}function Al(e){if(e==null)return null;if(f.isValidElement(e)&&typeof e.props=="object"&&e.props!==null){var t=e.props;return dn(t)}return typeof e=="object"&&!Array.isArray(e)?dn(e):null}function dt(e){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(mp(n)||pp(n)||Nl(n))&&(t[n]=e[n]);return t}var aw=["children","width","height","viewBox","className","style","title","desc"];function js(){return js=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},js.apply(null,arguments)}function iw(e,t){if(e==null)return{};var n,r,a=ow(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function ow(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}var gp=f.forwardRef((e,t)=>{var{children:n,width:r,height:a,viewBox:i,className:s,style:l,title:c,desc:u}=e,d=iw(e,aw),h=i||{width:r,height:a,x:0,y:0},m=le("recharts-surface",s);return f.createElement("svg",js({},dt(d),{className:m,width:r,height:a,style:l,viewBox:"".concat(h.x," ").concat(h.y," ").concat(h.width," ").concat(h.height),ref:t}),f.createElement("title",null,c),f.createElement("desc",null,u),n)}),sw=["children","className"];function Ns(){return Ns=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ns.apply(null,arguments)}function lw(e,t){if(e==null)return{};var n,r,a=cw(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function cw(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}var Ht=f.forwardRef((e,t)=>{var{children:n,className:r}=e,a=lw(e,sw),i=le("recharts-layer",r);return f.createElement("g",Ns({className:i},dt(a),{ref:t}),n)}),uw=f.createContext(null);function oe(e){return function(){return e}}const fp=Math.cos,Va=Math.sin,jt=Math.sqrt,Ja=Math.PI,Hi=2*Ja,As=Math.PI,Ss=2*As,vn=1e-6,dw=Ss-vn;function yp(e){this._+=e[0];for(let t=1,n=e.length;t<n;++t)this._+=arguments[t]+e[t]}function hw(e){let t=Math.floor(e);if(!(t>=0))throw new Error(`invalid digits: ${e}`);if(t>15)return yp;const n=10**t;return function(r){this._+=r[0];for(let a=1,i=r.length;a<i;++a)this._+=Math.round(arguments[a]*n)/n+r[a]}}class mw{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=t==null?yp:hw(t)}moveTo(t,n){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,n){this._append`L${this._x1=+t},${this._y1=+n}`}quadraticCurveTo(t,n,r,a){this._append`Q${+t},${+n},${this._x1=+r},${this._y1=+a}`}bezierCurveTo(t,n,r,a,i,s){this._append`C${+t},${+n},${+r},${+a},${this._x1=+i},${this._y1=+s}`}arcTo(t,n,r,a,i){if(t=+t,n=+n,r=+r,a=+a,i=+i,i<0)throw new Error(`negative radius: ${i}`);let s=this._x1,l=this._y1,c=r-t,u=a-n,d=s-t,h=l-n,m=d*d+h*h;if(this._x1===null)this._append`M${this._x1=t},${this._y1=n}`;else if(m>vn)if(!(Math.abs(h*c-u*d)>vn)||!i)this._append`L${this._x1=t},${this._y1=n}`;else{let p=r-s,g=a-l,v=c*c+u*u,y=p*p+g*g,b=Math.sqrt(v),x=Math.sqrt(m),k=i*Math.tan((As-Math.acos((v+m-y)/(2*b*x)))/2),I=k/x,w=k/b;Math.abs(I-1)>vn&&this._append`L${t+I*d},${n+I*h}`,this._append`A${i},${i},0,0,${+(h*p>d*g)},${this._x1=t+w*c},${this._y1=n+w*u}`}}arc(t,n,r,a,i,s){if(t=+t,n=+n,r=+r,s=!!s,r<0)throw new Error(`negative radius: ${r}`);let l=r*Math.cos(a),c=r*Math.sin(a),u=t+l,d=n+c,h=1^s,m=s?a-i:i-a;this._x1===null?this._append`M${u},${d}`:(Math.abs(this._x1-u)>vn||Math.abs(this._y1-d)>vn)&&this._append`L${u},${d}`,r&&(m<0&&(m=m%Ss+Ss),m>dw?this._append`A${r},${r},0,1,${h},${t-l},${n-c}A${r},${r},0,1,${h},${this._x1=u},${this._y1=d}`:m>vn&&this._append`A${r},${r},0,${+(m>=As)},${h},${this._x1=t+r*Math.cos(i)},${this._y1=n+r*Math.sin(i)}`)}rect(t,n,r,a){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}h${r=+r}v${+a}h${-r}Z`}toString(){return this._}}function Sl(e){let t=3;return e.digits=function(n){if(!arguments.length)return t;if(n==null)t=null;else{const r=Math.floor(n);if(!(r>=0))throw new RangeError(`invalid digits: ${n}`);t=r}return e},()=>new mw(t)}function Pl(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function vp(e){this._context=e}vp.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:this._context.lineTo(e,t);break}}};function zi(e){return new vp(e)}function bp(e){return e[0]}function wp(e){return e[1]}function xp(e,t){var n=oe(!0),r=null,a=zi,i=null,s=Sl(l);e=typeof e=="function"?e:e===void 0?bp:oe(e),t=typeof t=="function"?t:t===void 0?wp:oe(t);function l(c){var u,d=(c=Pl(c)).length,h,m=!1,p;for(r==null&&(i=a(p=s())),u=0;u<=d;++u)!(u<d&&n(h=c[u],u,c))===m&&((m=!m)?i.lineStart():i.lineEnd()),m&&i.point(+e(h,u,c),+t(h,u,c));if(p)return i=null,p+""||null}return l.x=function(c){return arguments.length?(e=typeof c=="function"?c:oe(+c),l):e},l.y=function(c){return arguments.length?(t=typeof c=="function"?c:oe(+c),l):t},l.defined=function(c){return arguments.length?(n=typeof c=="function"?c:oe(!!c),l):n},l.curve=function(c){return arguments.length?(a=c,r!=null&&(i=a(r)),l):a},l.context=function(c){return arguments.length?(c==null?r=i=null:i=a(r=c),l):r},l}function ja(e,t,n){var r=null,a=oe(!0),i=null,s=zi,l=null,c=Sl(u);e=typeof e=="function"?e:e===void 0?bp:oe(+e),t=typeof t=="function"?t:oe(t===void 0?0:+t),n=typeof n=="function"?n:n===void 0?wp:oe(+n);function u(h){var m,p,g,v=(h=Pl(h)).length,y,b=!1,x,k=new Array(v),I=new Array(v);for(i==null&&(l=s(x=c())),m=0;m<=v;++m){if(!(m<v&&a(y=h[m],m,h))===b)if(b=!b)p=m,l.areaStart(),l.lineStart();else{for(l.lineEnd(),l.lineStart(),g=m-1;g>=p;--g)l.point(k[g],I[g]);l.lineEnd(),l.areaEnd()}b&&(k[m]=+e(y,m,h),I[m]=+t(y,m,h),l.point(r?+r(y,m,h):k[m],n?+n(y,m,h):I[m]))}if(x)return l=null,x+""||null}function d(){return xp().defined(a).curve(s).context(i)}return u.x=function(h){return arguments.length?(e=typeof h=="function"?h:oe(+h),r=null,u):e},u.x0=function(h){return arguments.length?(e=typeof h=="function"?h:oe(+h),u):e},u.x1=function(h){return arguments.length?(r=h==null?null:typeof h=="function"?h:oe(+h),u):r},u.y=function(h){return arguments.length?(t=typeof h=="function"?h:oe(+h),n=null,u):t},u.y0=function(h){return arguments.length?(t=typeof h=="function"?h:oe(+h),u):t},u.y1=function(h){return arguments.length?(n=h==null?null:typeof h=="function"?h:oe(+h),u):n},u.lineX0=u.lineY0=function(){return d().x(e).y(t)},u.lineY1=function(){return d().x(e).y(n)},u.lineX1=function(){return d().x(r).y(t)},u.defined=function(h){return arguments.length?(a=typeof h=="function"?h:oe(!!h),u):a},u.curve=function(h){return arguments.length?(s=h,i!=null&&(l=s(i)),u):s},u.context=function(h){return arguments.length?(h==null?i=l=null:l=s(i=h),u):i},u}class kp{constructor(t,n){this._context=t,this._x=n}areaStart(){this._line=0}areaEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line}point(t,n){switch(t=+t,n=+n,this._point){case 0:{this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break}case 1:this._point=2;default:{this._x?this._context.bezierCurveTo(this._x0=(this._x0+t)/2,this._y0,this._x0,n,t,n):this._context.bezierCurveTo(this._x0,this._y0=(this._y0+n)/2,t,this._y0,t,n);break}}this._x0=t,this._y0=n}}function pw(e){return new kp(e,!0)}function gw(e){return new kp(e,!1)}const Ol={draw(e,t){const n=jt(t/Ja);e.moveTo(n,0),e.arc(0,0,n,0,Hi)}},fw={draw(e,t){const n=jt(t/5)/2;e.moveTo(-3*n,-n),e.lineTo(-n,-n),e.lineTo(-n,-3*n),e.lineTo(n,-3*n),e.lineTo(n,-n),e.lineTo(3*n,-n),e.lineTo(3*n,n),e.lineTo(n,n),e.lineTo(n,3*n),e.lineTo(-n,3*n),e.lineTo(-n,n),e.lineTo(-3*n,n),e.closePath()}},Tp=jt(1/3),yw=Tp*2,vw={draw(e,t){const n=jt(t/yw),r=n*Tp;e.moveTo(0,-n),e.lineTo(r,0),e.lineTo(0,n),e.lineTo(-r,0),e.closePath()}},bw={draw(e,t){const n=jt(t),r=-n/2;e.rect(r,r,n,n)}},ww=.8908130915292852,Ip=Va(Ja/10)/Va(7*Ja/10),xw=Va(Hi/10)*Ip,kw=-fp(Hi/10)*Ip,Tw={draw(e,t){const n=jt(t*ww),r=xw*n,a=kw*n;e.moveTo(0,-n),e.lineTo(r,a);for(let i=1;i<5;++i){const s=Hi*i/5,l=fp(s),c=Va(s);e.lineTo(c*n,-l*n),e.lineTo(l*r-c*a,c*r+l*a)}e.closePath()}},Ko=jt(3),Iw={draw(e,t){const n=-jt(t/(Ko*3));e.moveTo(0,n*2),e.lineTo(-Ko*n,-n),e.lineTo(Ko*n,-n),e.closePath()}},it=-.5,ot=jt(3)/2,Ps=1/jt(12),jw=(Ps/2+1)*3,Nw={draw(e,t){const n=jt(t/jw),r=n/2,a=n*Ps,i=r,s=n*Ps+n,l=-i,c=s;e.moveTo(r,a),e.lineTo(i,s),e.lineTo(l,c),e.lineTo(it*r-ot*a,ot*r+it*a),e.lineTo(it*i-ot*s,ot*i+it*s),e.lineTo(it*l-ot*c,ot*l+it*c),e.lineTo(it*r+ot*a,it*a-ot*r),e.lineTo(it*i+ot*s,it*s-ot*i),e.lineTo(it*l+ot*c,it*c-ot*l),e.closePath()}};function Aw(e,t){let n=null,r=Sl(a);e=typeof e=="function"?e:oe(e||Ol),t=typeof t=="function"?t:oe(t===void 0?64:+t);function a(){let i;if(n||(n=i=r()),e.apply(this,arguments).draw(n,+t.apply(this,arguments)),i)return n=null,i+""||null}return a.type=function(i){return arguments.length?(e=typeof i=="function"?i:oe(i),a):e},a.size=function(i){return arguments.length?(t=typeof i=="function"?i:oe(+i),a):t},a.context=function(i){return arguments.length?(n=i??null,a):n},a}function Za(){}function Xa(e,t,n){e._context.bezierCurveTo((2*e._x0+e._x1)/3,(2*e._y0+e._y1)/3,(e._x0+2*e._x1)/3,(e._y0+2*e._y1)/3,(e._x0+4*e._x1+t)/6,(e._y0+4*e._y1+n)/6)}function jp(e){this._context=e}jp.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:Xa(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:Xa(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function Sw(e){return new jp(e)}function Np(e){this._context=e}Np.prototype={areaStart:Za,areaEnd:Za,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x2,this._y2),this._context.closePath();break}case 2:{this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break}case 3:{this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4);break}}},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._x2=e,this._y2=t;break;case 1:this._point=2,this._x3=e,this._y3=t;break;case 2:this._point=3,this._x4=e,this._y4=t,this._context.moveTo((this._x0+4*this._x1+e)/6,(this._y0+4*this._y1+t)/6);break;default:Xa(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function Pw(e){return new Np(e)}function Ap(e){this._context=e}Ap.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var n=(this._x0+4*this._x1+e)/6,r=(this._y0+4*this._y1+t)/6;this._line?this._context.lineTo(n,r):this._context.moveTo(n,r);break;case 3:this._point=4;default:Xa(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function Ow(e){return new Ap(e)}function Sp(e){this._context=e}Sp.prototype={areaStart:Za,areaEnd:Za,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(e,t){e=+e,t=+t,this._point?this._context.lineTo(e,t):(this._point=1,this._context.moveTo(e,t))}};function Cw(e){return new Sp(e)}function Au(e){return e<0?-1:1}function Su(e,t,n){var r=e._x1-e._x0,a=t-e._x1,i=(e._y1-e._y0)/(r||a<0&&-0),s=(n-e._y1)/(a||r<0&&-0),l=(i*a+s*r)/(r+a);return(Au(i)+Au(s))*Math.min(Math.abs(i),Math.abs(s),.5*Math.abs(l))||0}function Pu(e,t){var n=e._x1-e._x0;return n?(3*(e._y1-e._y0)/n-t)/2:t}function Vo(e,t,n){var r=e._x0,a=e._y0,i=e._x1,s=e._y1,l=(i-r)/3;e._context.bezierCurveTo(r+l,a+l*t,i-l,s-l*n,i,s)}function Qa(e){this._context=e}Qa.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:Vo(this,this._t0,Pu(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){var n=NaN;if(e=+e,t=+t,!(e===this._x1&&t===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,Vo(this,Pu(this,n=Su(this,e,t)),n);break;default:Vo(this,this._t0,n=Su(this,e,t));break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t,this._t0=n}}};function Pp(e){this._context=new Op(e)}(Pp.prototype=Object.create(Qa.prototype)).point=function(e,t){Qa.prototype.point.call(this,t,e)};function Op(e){this._context=e}Op.prototype={moveTo:function(e,t){this._context.moveTo(t,e)},closePath:function(){this._context.closePath()},lineTo:function(e,t){this._context.lineTo(t,e)},bezierCurveTo:function(e,t,n,r,a,i){this._context.bezierCurveTo(t,e,r,n,i,a)}};function Ew(e){return new Qa(e)}function Mw(e){return new Pp(e)}function Cp(e){this._context=e}Cp.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var e=this._x,t=this._y,n=e.length;if(n)if(this._line?this._context.lineTo(e[0],t[0]):this._context.moveTo(e[0],t[0]),n===2)this._context.lineTo(e[1],t[1]);else for(var r=Ou(e),a=Ou(t),i=0,s=1;s<n;++i,++s)this._context.bezierCurveTo(r[0][i],a[0][i],r[1][i],a[1][i],e[s],t[s]);(this._line||this._line!==0&&n===1)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(e,t){this._x.push(+e),this._y.push(+t)}};function Ou(e){var t,n=e.length-1,r,a=new Array(n),i=new Array(n),s=new Array(n);for(a[0]=0,i[0]=2,s[0]=e[0]+2*e[1],t=1;t<n-1;++t)a[t]=1,i[t]=4,s[t]=4*e[t]+2*e[t+1];for(a[n-1]=2,i[n-1]=7,s[n-1]=8*e[n-1]+e[n],t=1;t<n;++t)r=a[t]/i[t-1],i[t]-=r,s[t]-=r*s[t-1];for(a[n-1]=s[n-1]/i[n-1],t=n-2;t>=0;--t)a[t]=(s[t]-a[t+1])/i[t];for(i[n-1]=(e[n]+a[n-1])/2,t=0;t<n-1;++t)i[t]=2*e[t+1]-a[t+1];return[a,i]}function $w(e){return new Cp(e)}function Yi(e,t){this._context=e,this._t=t}Yi.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&this._point===2&&this._context.lineTo(this._x,this._y),(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:{if(this._t<=0)this._context.lineTo(this._x,t),this._context.lineTo(e,t);else{var n=this._x*(1-this._t)+e*this._t;this._context.lineTo(n,this._y),this._context.lineTo(n,t)}break}}this._x=e,this._y=t}};function Dw(e){return new Yi(e,.5)}function Bw(e){return new Yi(e,0)}function _w(e){return new Yi(e,1)}function Pn(e,t){if((s=e.length)>1)for(var n=1,r,a,i=e[t[0]],s,l=i.length;n<s;++n)for(a=i,i=e[t[n]],r=0;r<l;++r)i[r][1]+=i[r][0]=isNaN(a[r][1])?a[r][0]:a[r][1]}function Os(e){for(var t=e.length,n=new Array(t);--t>=0;)n[t]=t;return n}function Rw(e,t){return e[t]}function Lw(e){const t=[];return t.key=e,t}function Ww(){var e=oe([]),t=Os,n=Pn,r=Rw;function a(i){var s=Array.from(e.apply(this,arguments),Lw),l,c=s.length,u=-1,d;for(const h of i)for(l=0,++u;l<c;++l)(s[l][u]=[0,+r(h,s[l].key,u,i)]).data=h;for(l=0,d=Pl(t(s));l<c;++l)s[d[l]].index=l;return n(s,d),s}return a.keys=function(i){return arguments.length?(e=typeof i=="function"?i:oe(Array.from(i)),a):e},a.value=function(i){return arguments.length?(r=typeof i=="function"?i:oe(+i),a):r},a.order=function(i){return arguments.length?(t=i==null?Os:typeof i=="function"?i:oe(Array.from(i)),a):t},a.offset=function(i){return arguments.length?(n=i??Pn,a):n},a}function Fw(e,t){if((r=e.length)>0){for(var n,r,a=0,i=e[0].length,s;a<i;++a){for(s=n=0;n<r;++n)s+=e[n][a][1]||0;if(s)for(n=0;n<r;++n)e[n][a][1]/=s}Pn(e,t)}}function Hw(e,t){if((a=e.length)>0){for(var n=0,r=e[t[0]],a,i=r.length;n<i;++n){for(var s=0,l=0;s<a;++s)l+=e[s][n][1]||0;r[n][1]+=r[n][0]=-l/2}Pn(e,t)}}function zw(e,t){if(!(!((s=e.length)>0)||!((i=(a=e[t[0]]).length)>0))){for(var n=0,r=1,a,i,s;r<i;++r){for(var l=0,c=0,u=0;l<s;++l){for(var d=e[t[l]],h=d[r][1]||0,m=d[r-1][1]||0,p=(h-m)/2,g=0;g<l;++g){var v=e[t[g]],y=v[r][1]||0,b=v[r-1][1]||0;p+=y-b}c+=h,u+=p*h}a[r-1][1]+=a[r-1][0]=n,c&&(n-=u/c)}a[r-1][1]+=a[r-1][0]=n,Pn(e,t)}}var qi={},Ep={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n){return n==="__proto__"}e.isUnsafeProperty=t})(Ep);var Cl={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n){switch(typeof n){case"number":case"symbol":return!1;case"string":return n.includes(".")||n.includes("[")||n.includes("]")}}e.isDeepKey=t})(Cl);var Gi={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n){var r;return typeof n=="string"||typeof n=="symbol"?n:Object.is((r=n==null?void 0:n.valueOf)==null?void 0:r.call(n),-0)?"-0":String(n)}e.toKey=t})(Gi);var Ui={},Mp={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n){if(n==null)return"";if(typeof n=="string")return n;if(Array.isArray(n))return n.map(t).join(",");const r=String(n);return r==="0"&&Object.is(Number(n),-0)?"-0":r}e.toString=t})(Mp);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Mp,n=Gi;function r(a){if(Array.isArray(a))return a.map(n.toKey);if(typeof a=="symbol")return[a];a=t.toString(a);const i=[],s=a.length;if(s===0)return i;let l=0,c="",u="",d=!1;for(a.charCodeAt(0)===46&&(i.push(""),l++);l<s;){const h=a[l];u?h==="\\"&&l+1<s?(l++,c+=a[l]):h===u?u="":c+=h:d?h==='"'||h==="'"?u=h:h==="]"?(d=!1,i.push(c),c=""):c+=h:h==="["?(d=!0,c&&(i.push(c),c="")):h==="."?c&&(i.push(c),c=""):c+=h,l++}return c&&i.push(c),i}e.toPath=r})(Ui);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Ep,n=Cl,r=Gi,a=Ui;function i(l,c,u){if(l==null)return u;switch(typeof c){case"string":{if(t.isUnsafeProperty(c))return u;const d=l[c];return d===void 0?n.isDeepKey(c)?i(l,a.toPath(c),u):u:d}case"number":case"symbol":{typeof c=="number"&&(c=r.toKey(c));const d=l[c];return d===void 0?u:d}default:{if(Array.isArray(c))return s(l,c,u);if(Object.is(c==null?void 0:c.valueOf(),-0)?c="-0":c=String(c),t.isUnsafeProperty(c))return u;const d=l[c];return d===void 0?u:d}}}function s(l,c,u){if(c.length===0)return u;let d=l;for(let h=0;h<c.length;h++){if(d==null||t.isUnsafeProperty(c[h]))return u;d=d[c[h]]}return d===void 0?u:d}e.get=i})(qi);var Yw=qi.get;const nr=It(Yw);var qw=4;function ln(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:qw,n=10**t,r=Math.round(e*n)/n;return Object.is(r,-0)?0:r}function me(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return e.reduce((a,i,s)=>{var l=n[s-1];return typeof l=="string"?a+l+i:l!==void 0?a+ln(l)+i:a+i},"")}var et=e=>e===0?0:e>0?1:-1,Ct=e=>typeof e=="number"&&e!=+e,zt=e=>typeof e=="string"&&e.indexOf("%")===e.length-1,U=e=>(typeof e=="number"||e instanceof Number)&&!Ct(e),Et=e=>U(e)||typeof e=="string",Gw=0,_r=e=>{var t=++Gw;return"".concat(e||"").concat(t)},kt=function(t,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(!U(t)&&typeof t!="string")return r;var i;if(zt(t)){if(n==null)return r;var s=t.indexOf("%");i=n*parseFloat(t.slice(0,s))/100}else i=+t;return Ct(i)&&(i=r),a&&n!=null&&i>n&&(i=n),i},$p=e=>{if(!Array.isArray(e))return!1;for(var t=e.length,n={},r=0;r<t;r++)if(!n[String(e[r])])n[String(e[r])]=!0;else return!0;return!1};function De(e,t,n){return U(e)&&U(t)?ln(e+n*(t-e)):t}function Uw(e,t,n){if(!(!e||!e.length))return e.find(r=>r&&(typeof t=="function"?t(r):nr(r,t))===n)}var Oe=e=>e===null||typeof e>"u",ea=e=>Oe(e)?e:"".concat(e.charAt(0).toUpperCase()).concat(e.slice(1));function Kw(e){return e!=null}function ta(){}var Vw=["type","size","sizeType"];function Cs(){return Cs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Cs.apply(null,arguments)}function Cu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Eu(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Cu(Object(n),!0).forEach(function(r){Jw(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Cu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Jw(e,t,n){return(t=Zw(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Zw(e){var t=Xw(e,"string");return typeof t=="symbol"?t:t+""}function Xw(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Qw(e,t){if(e==null)return{};var n,r,a=ex(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function ex(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}var Dp={symbolCircle:Ol,symbolCross:fw,symbolDiamond:vw,symbolSquare:bw,symbolStar:Tw,symbolTriangle:Iw,symbolWye:Nw},tx=Math.PI/180,nx=e=>{var t="symbol".concat(ea(e));return Dp[t]||Ol},rx=(e,t,n)=>{if(t==="area")return e;switch(n){case"cross":return 5*e*e/9;case"diamond":return .5*e*e/Math.sqrt(3);case"square":return e*e;case"star":{var r=18*tx;return 1.25*e*e*(Math.tan(r)-Math.tan(r*2)*Math.tan(r)**2)}case"triangle":return Math.sqrt(3)*e*e/4;case"wye":return(21-10*Math.sqrt(3))*e*e/8;default:return Math.PI*e*e/4}},ax=(e,t)=>{Dp["symbol".concat(ea(e))]=t},Bp=e=>{var{type:t="circle",size:n=64,sizeType:r="area"}=e,a=Qw(e,Vw),i=Eu(Eu({},a),{},{type:t,size:n,sizeType:r}),s="circle";typeof t=="string"&&(s=t);var l=()=>{var m=nx(s),p=Aw().type(m).size(rx(n,r,s)),g=p();if(g!==null)return g},{className:c,cx:u,cy:d}=i,h=dt(i);return U(u)&&U(d)&&U(n)?f.createElement("path",Cs({},h,{className:le("recharts-symbols",c),transform:"translate(".concat(u,", ").concat(d,")"),d:l()})):null};Bp.registerSymbol=ax;var _p=e=>"radius"in e&&"startAngle"in e&&"endAngle"in e,ix=(e,t)=>{if(!e||typeof e=="function"||typeof e=="boolean")return null;var n=e;if(f.isValidElement(e)&&(n=e.props),typeof n!="object"&&typeof n!="function")return null;var r={};return Object.keys(n).forEach(a=>{Nl(a)&&(r[a]=t||(i=>n[a](n,i)))}),r},ox=(e,t,n)=>r=>(e(t,n,r),null),El=(e,t,n)=>{if(e===null||typeof e!="object"&&typeof e!="function")return null;var r=null;return Object.keys(e).forEach(a=>{var i=e[a];Nl(a)&&typeof i=="function"&&(r||(r={}),r[a]=ox(i,t,n))}),r};function Mu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function sx(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Mu(Object(n),!0).forEach(function(r){lx(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Mu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function lx(e,t,n){return(t=cx(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function cx(e){var t=ux(e,"string");return typeof t=="symbol"?t:t+""}function ux(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function pt(e,t){var n=sx({},e),r=t,a=Object.keys(t),i=a.reduce((s,l)=>(s[l]===void 0&&r[l]!==void 0&&(s[l]=r[l]),s),n);return i}var Rp={},Lp={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n,r){const a=new Map;for(let i=0;i<n.length;i++){const s=n[i],l=r(s);a.has(l)||a.set(l,s)}return Array.from(a.values())}e.uniqBy=t})(Lp);var Ml={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n){return n}e.identity=t})(Ml);var Wp={},Ki={},Fp={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n){return Number.isSafeInteger(n)&&n>=0}e.isLength=t})(Fp);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Fp;function n(r){return r!=null&&typeof r!="function"&&t.isLength(r.length)}e.isArrayLike=n})(Ki);var Hp={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n){return typeof n=="object"&&n!==null}e.isObjectLike=t})(Hp);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Ki,n=Hp;function r(a){return n.isObjectLike(a)&&t.isArrayLike(a)}e.isArrayLikeObject=r})(Wp);var zp={},Yp={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=qi;function n(r){return function(a){return t.get(a,r)}}e.property=n})(Yp);var qp={},$l={},Gp={},Dl={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n){return n!==null&&(typeof n=="object"||typeof n=="function")}e.isObject=t})(Dl);var Bl={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n){return n==null||typeof n!="object"&&typeof n!="function"}e.isPrimitive=t})(Bl);var _l={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n,r){return n===r||Number.isNaN(n)&&Number.isNaN(r)}e.eq=t})(_l);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Dl,n=Bl,r=_l;function a(d,h,m){return typeof m!="function"?a(d,h,()=>{}):i(d,h,function p(g,v,y,b,x,k){const I=m(g,v,y,b,x,k);return I!==void 0?!!I:i(g,v,p,k)},new Map)}function i(d,h,m,p){if(h===d)return!0;switch(typeof h){case"object":return s(d,h,m,p);case"function":return Object.keys(h).length>0?i(d,{...h},m,p):r.eq(d,h);default:return t.isObject(d)?typeof h=="string"?h==="":!0:r.eq(d,h)}}function s(d,h,m,p){if(h==null)return!0;if(Array.isArray(h))return c(d,h,m,p);if(h instanceof Map)return l(d,h,m,p);if(h instanceof Set)return u(d,h,m,p);const g=Object.keys(h);if(d==null||n.isPrimitive(d))return g.length===0;if(g.length===0)return!0;if(p!=null&&p.has(h))return p.get(h)===d;p==null||p.set(h,d);try{for(let v=0;v<g.length;v++){const y=g[v];if(!n.isPrimitive(d)&&!(y in d)||h[y]===void 0&&d[y]!==void 0||h[y]===null&&d[y]!==null||!m(d[y],h[y],y,d,h,p))return!1}return!0}finally{p==null||p.delete(h)}}function l(d,h,m,p){if(h.size===0)return!0;if(!(d instanceof Map))return!1;for(const[g,v]of h.entries()){const y=d.get(g);if(m(y,v,g,d,h,p)===!1)return!1}return!0}function c(d,h,m,p){if(h.length===0)return!0;if(!Array.isArray(d))return!1;const g=new Set;for(let v=0;v<h.length;v++){const y=h[v];let b=!1;for(let x=0;x<d.length;x++){if(g.has(x))continue;const k=d[x];let I=!1;if(m(k,y,v,d,h,p)&&(I=!0),I){g.add(x),b=!0;break}}if(!b)return!1}return!0}function u(d,h,m,p){return h.size===0?!0:d instanceof Set?c([...d],[...h],m,p):!1}e.isMatchWith=a,e.isSetMatch=u})(Gp);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Gp;function n(r,a){return t.isMatchWith(r,a,()=>{})}e.isMatch=n})($l);var Up={},Rl={},Kp={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n){return Object.getOwnPropertySymbols(n).filter(r=>Object.prototype.propertyIsEnumerable.call(n,r))}e.getSymbols=t})(Kp);var Ll={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n){return n==null?n===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(n)}e.getTag=t})(Ll);var Wl={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t="[object RegExp]",n="[object String]",r="[object Number]",a="[object Boolean]",i="[object Arguments]",s="[object Symbol]",l="[object Date]",c="[object Map]",u="[object Set]",d="[object Array]",h="[object Function]",m="[object ArrayBuffer]",p="[object Object]",g="[object Error]",v="[object DataView]",y="[object Uint8Array]",b="[object Uint8ClampedArray]",x="[object Uint16Array]",k="[object Uint32Array]",I="[object BigUint64Array]",w="[object Int8Array]",T="[object Int16Array]",j="[object Int32Array]",E="[object BigInt64Array]",C="[object Float32Array]",$="[object Float64Array]";e.argumentsTag=i,e.arrayBufferTag=m,e.arrayTag=d,e.bigInt64ArrayTag=E,e.bigUint64ArrayTag=I,e.booleanTag=a,e.dataViewTag=v,e.dateTag=l,e.errorTag=g,e.float32ArrayTag=C,e.float64ArrayTag=$,e.functionTag=h,e.int16ArrayTag=T,e.int32ArrayTag=j,e.int8ArrayTag=w,e.mapTag=c,e.numberTag=r,e.objectTag=p,e.regexpTag=t,e.setTag=u,e.stringTag=n,e.symbolTag=s,e.uint16ArrayTag=x,e.uint32ArrayTag=k,e.uint8ArrayTag=y,e.uint8ClampedArrayTag=b})(Wl);var Vp={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}e.isTypedArray=t})(Vp);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Kp,n=Ll,r=Wl,a=Bl,i=Vp;function s(d,h){return l(d,void 0,d,new Map,h)}function l(d,h,m,p=new Map,g=void 0){const v=g==null?void 0:g(d,h,m,p);if(v!==void 0)return v;if(a.isPrimitive(d))return d;if(p.has(d))return p.get(d);if(Array.isArray(d)){const y=new Array(d.length);p.set(d,y);for(let b=0;b<d.length;b++)y[b]=l(d[b],b,m,p,g);return Object.hasOwn(d,"index")&&(y.index=d.index),Object.hasOwn(d,"input")&&(y.input=d.input),y}if(d instanceof Date)return new Date(d.getTime());if(d instanceof RegExp){const y=new RegExp(d.source,d.flags);return y.lastIndex=d.lastIndex,y}if(d instanceof Map){const y=new Map;p.set(d,y);for(const[b,x]of d)y.set(b,l(x,b,m,p,g));return y}if(d instanceof Set){const y=new Set;p.set(d,y);for(const b of d)y.add(l(b,void 0,m,p,g));return y}if(typeof Buffer<"u"&&Buffer.isBuffer(d))return d.subarray();if(i.isTypedArray(d)){const y=new(Object.getPrototypeOf(d)).constructor(d.length);p.set(d,y);for(let b=0;b<d.length;b++)y[b]=l(d[b],b,m,p,g);return y}if(d instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&d instanceof SharedArrayBuffer)return d.slice(0);if(d instanceof DataView){const y=new DataView(d.buffer.slice(0),d.byteOffset,d.byteLength);return p.set(d,y),c(y,d,m,p,g),y}if(typeof File<"u"&&d instanceof File){const y=new File([d],d.name,{type:d.type});return p.set(d,y),c(y,d,m,p,g),y}if(typeof Blob<"u"&&d instanceof Blob){const y=new Blob([d],{type:d.type});return p.set(d,y),c(y,d,m,p,g),y}if(d instanceof Error){const y=new d.constructor;return p.set(d,y),y.message=d.message,y.name=d.name,y.stack=d.stack,y.cause=d.cause,c(y,d,m,p,g),y}if(d instanceof Boolean){const y=new Boolean(d.valueOf());return p.set(d,y),c(y,d,m,p,g),y}if(d instanceof Number){const y=new Number(d.valueOf());return p.set(d,y),c(y,d,m,p,g),y}if(d instanceof String){const y=new String(d.valueOf());return p.set(d,y),c(y,d,m,p,g),y}if(typeof d=="object"&&u(d)){const y=Object.create(Object.getPrototypeOf(d));return p.set(d,y),c(y,d,m,p,g),y}return d}function c(d,h,m=d,p,g){const v=[...Object.keys(h),...t.getSymbols(h)];for(let y=0;y<v.length;y++){const b=v[y],x=Object.getOwnPropertyDescriptor(d,b);(x==null||x.writable)&&(d[b]=l(h[b],b,m,p,g))}}function u(d){switch(n.getTag(d)){case r.argumentsTag:case r.arrayTag:case r.arrayBufferTag:case r.dataViewTag:case r.booleanTag:case r.dateTag:case r.float32ArrayTag:case r.float64ArrayTag:case r.int8ArrayTag:case r.int16ArrayTag:case r.int32ArrayTag:case r.mapTag:case r.numberTag:case r.objectTag:case r.regexpTag:case r.setTag:case r.stringTag:case r.symbolTag:case r.uint8ArrayTag:case r.uint8ClampedArrayTag:case r.uint16ArrayTag:case r.uint32ArrayTag:return!0;default:return!1}}e.cloneDeepWith=s,e.cloneDeepWithImpl=l,e.copyProperties=c})(Rl);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Rl;function n(r){return t.cloneDeepWithImpl(r,void 0,r,new Map,void 0)}e.cloneDeep=n})(Up);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=$l,n=Up;function r(a){return a=n.cloneDeep(a),i=>t.isMatch(i,a)}e.matches=r})(qp);var Jp={},Zp={},Xp={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Rl,n=Wl;function r(a,i){return t.cloneDeepWith(a,(s,l,c,u)=>{const d=i==null?void 0:i(s,l,c,u);if(d!==void 0)return d;if(typeof a=="object")switch(Object.prototype.toString.call(a)){case n.numberTag:case n.stringTag:case n.booleanTag:{const h=new a.constructor(a==null?void 0:a.valueOf());return t.copyProperties(h,a),h}case n.argumentsTag:{const h={};return t.copyProperties(h,a),h.length=a.length,h[Symbol.iterator]=a[Symbol.iterator],h}default:return}})}e.cloneDeepWith=r})(Xp);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Xp;function n(r){return t.cloneDeepWith(r)}e.cloneDeep=n})(Zp);var Qp={},Fl={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=/^(?:0|[1-9]\d*)$/;function n(r,a=Number.MAX_SAFE_INTEGER){switch(typeof r){case"number":return Number.isInteger(r)&&r>=0&&r<a;case"symbol":return!1;case"string":return t.test(r)}}e.isIndex=n})(Fl);var eg={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Ll;function n(r){return r!==null&&typeof r=="object"&&t.getTag(r)==="[object Arguments]"}e.isArguments=n})(eg);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Cl,n=Fl,r=eg,a=Ui;function i(s,l){let c;if(Array.isArray(l)?c=l:typeof l=="string"&&t.isDeepKey(l)&&(s==null?void 0:s[l])==null?c=a.toPath(l):c=[l],c.length===0)return!1;let u=s;for(let d=0;d<c.length;d++){const h=c[d];if((u==null||!Object.hasOwn(u,h))&&!((Array.isArray(u)||r.isArguments(u))&&n.isIndex(h)&&h<u.length))return!1;u=u[h]}return!0}e.has=i})(Qp);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=$l,n=Gi,r=Zp,a=qi,i=Qp;function s(l,c){switch(typeof l){case"object":{Object.is(l==null?void 0:l.valueOf(),-0)&&(l="-0");break}case"number":{l=n.toKey(l);break}}return c=r.cloneDeep(c),function(u){const d=a.get(u,l);return d===void 0?i.has(u,l):c===void 0?d===void 0:t.isMatch(d,c)}}e.matchesProperty=s})(Jp);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Ml,n=Yp,r=qp,a=Jp;function i(s){if(s==null)return t.identity;switch(typeof s){case"function":return s;case"object":return Array.isArray(s)&&s.length===2?a.matchesProperty(s[0],s[1]):r.matches(s);case"string":case"symbol":case"number":return n.property(s)}}e.iteratee=i})(zp);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Lp,n=Ml,r=Wp,a=zp;function i(s,l=n.identity){return r.isArrayLikeObject(s)?t.uniqBy(Array.from(s),a.iteratee(l)):[]}e.uniqBy=i})(Rp);var dx=Rp.uniqBy;const $u=It(dx);function hx(e,t,n){return t===!0?$u(e,n):typeof t=="function"?$u(e,t):e}var tg={exports:{}},ng={},rg={exports:{}},ag={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rr=f;function mx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var px=typeof Object.is=="function"?Object.is:mx,gx=rr.useState,fx=rr.useEffect,yx=rr.useLayoutEffect,vx=rr.useDebugValue;function bx(e,t){var n=t(),r=gx({inst:{value:n,getSnapshot:t}}),a=r[0].inst,i=r[1];return yx(function(){a.value=n,a.getSnapshot=t,Jo(a)&&i({inst:a})},[e,n,t]),fx(function(){return Jo(a)&&i({inst:a}),e(function(){Jo(a)&&i({inst:a})})},[e]),vx(n),n}function Jo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!px(e,n)}catch{return!0}}function wx(e,t){return t()}var xx=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?wx:bx;ag.useSyncExternalStore=rr.useSyncExternalStore!==void 0?rr.useSyncExternalStore:xx;rg.exports=ag;var kx=rg.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vi=f,Tx=kx;function Ix(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jx=typeof Object.is=="function"?Object.is:Ix,Nx=Tx.useSyncExternalStore,Ax=Vi.useRef,Sx=Vi.useEffect,Px=Vi.useMemo,Ox=Vi.useDebugValue;ng.useSyncExternalStoreWithSelector=function(e,t,n,r,a){var i=Ax(null);if(i.current===null){var s={hasValue:!1,value:null};i.current=s}else s=i.current;i=Px(function(){function c(p){if(!u){if(u=!0,d=p,p=r(p),a!==void 0&&s.hasValue){var g=s.value;if(a(g,p))return h=g}return h=p}if(g=h,jx(d,p))return g;var v=r(p);return a!==void 0&&a(g,v)?(d=p,g):(d=p,h=v)}var u=!1,d,h,m=n===void 0?null:n;return[function(){return c(t())},m===null?void 0:function(){return c(m())}]},[t,n,r,a]);var l=Nx(e,i[0],i[1]);return Sx(function(){s.hasValue=!0,s.value=l},[l]),Ox(l),l};tg.exports=ng;var Cx=tg.exports,Hl=f.createContext(null),Ex=e=>e,ge=()=>{var e=f.useContext(Hl);return e?e.store.dispatch:Ex},Ya=()=>{},Mx=()=>Ya,$x=(e,t)=>e===t;function V(e){var t=f.useContext(Hl);return Cx.useSyncExternalStoreWithSelector(t?t.subscription.addNestedSub:Mx,t?t.store.getState:Ya,t?t.store.getState:Ya,t?e:Ya,$x)}function Dx(e,t=`expected a function, instead received ${typeof e}`){if(typeof e!="function")throw new TypeError(t)}function Bx(e,t=`expected an object, instead received ${typeof e}`){if(typeof e!="object")throw new TypeError(t)}function _x(e,t="expected all items to be functions, instead received the following types: "){if(!e.every(n=>typeof n=="function")){const n=e.map(r=>typeof r=="function"?`function ${r.name||"unnamed"}()`:typeof r).join(", ");throw new TypeError(`${t}[${n}]`)}}var Du=e=>Array.isArray(e)?e:[e];function Rx(e){const t=Array.isArray(e[0])?e[0]:e;return _x(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}function Lx(e,t){const n=[],{length:r}=e;for(let a=0;a<r;a++)n.push(e[a].apply(null,t));return n}var Wx=class{constructor(e){this.value=e}deref(){return this.value}},Fx=typeof WeakRef<"u"?WeakRef:Wx,Hx=0,Bu=1;function Na(){return{s:Hx,v:void 0,o:null,p:null}}function ig(e,t={}){let n=Na();const{resultEqualityCheck:r}=t;let a,i=0;function s(){var h;let l=n;const{length:c}=arguments;for(let m=0,p=c;m<p;m++){const g=arguments[m];if(typeof g=="function"||typeof g=="object"&&g!==null){let v=l.o;v===null&&(l.o=v=new WeakMap);const y=v.get(g);y===void 0?(l=Na(),v.set(g,l)):l=y}else{let v=l.p;v===null&&(l.p=v=new Map);const y=v.get(g);y===void 0?(l=Na(),v.set(g,l)):l=y}}const u=l;let d;if(l.s===Bu)d=l.v;else if(d=e.apply(null,arguments),i++,r){const m=((h=a==null?void 0:a.deref)==null?void 0:h.call(a))??a;m!=null&&r(m,d)&&(d=m,i!==0&&i--),a=typeof d=="object"&&d!==null||typeof d=="function"?new Fx(d):d}return u.s=Bu,u.v=d,d}return s.clearCache=()=>{n=Na(),s.resetResultsCount()},s.resultsCount=()=>i,s.resetResultsCount=()=>{i=0},s}function zx(e,...t){const n=typeof e=="function"?{memoize:e,memoizeOptions:t}:e,r=(...a)=>{let i=0,s=0,l,c={},u=a.pop();typeof u=="object"&&(c=u,u=a.pop()),Dx(u,`createSelector expects an output function after the inputs, but received: [${typeof u}]`);const d={...n,...c},{memoize:h,memoizeOptions:m=[],argsMemoize:p=ig,argsMemoizeOptions:g=[],devModeChecks:v={}}=d,y=Du(m),b=Du(g),x=Rx(a),k=h(function(){return i++,u.apply(null,arguments)},...y),I=p(function(){s++;const T=Lx(x,arguments);return l=k.apply(null,T),l},...b);return Object.assign(I,{resultFunc:u,memoizedResultFunc:k,dependencies:x,dependencyRecomputations:()=>s,resetDependencyRecomputations:()=>{s=0},lastResult:()=>l,recomputations:()=>i,resetRecomputations:()=>{i=0},memoize:h,argsMemoize:p})};return Object.assign(r,{withTypes:()=>r}),r}var S=zx(ig),Yx=Object.assign((e,t=S)=>{Bx(e,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);const n=Object.keys(e),r=n.map(i=>e[i]);return t(r,(...i)=>i.reduce((s,l,c)=>(s[n[c]]=l,s),{}))},{withTypes:()=>Yx}),og={},sg={},lg={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){return typeof r=="symbol"?1:r===null?2:r===void 0?3:r!==r?4:0}const n=(r,a,i)=>{if(r!==a){const s=t(r),l=t(a);if(s===l&&s===0){if(r<a)return i==="desc"?1:-1;if(r>a)return i==="desc"?-1:1}return i==="desc"?l-s:s-l}return 0};e.compareValues=n})(lg);var cg={},zl={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n){return typeof n=="symbol"||n instanceof Symbol}e.isSymbol=t})(zl);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=zl,n=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,r=/^\w*$/;function a(i,s){return Array.isArray(i)?!1:typeof i=="number"||typeof i=="boolean"||i==null||t.isSymbol(i)?!0:typeof i=="string"&&(r.test(i)||!n.test(i))||s!=null&&Object.hasOwn(s,i)}e.isKey=a})(cg);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=lg,n=cg,r=Ui;function a(i,s,l,c){if(i==null)return[];l=c?void 0:l,Array.isArray(i)||(i=Object.values(i)),Array.isArray(s)||(s=s==null?[null]:[s]),s.length===0&&(s=[null]),Array.isArray(l)||(l=l==null?[]:[l]),l=l.map(p=>String(p));const u=(p,g)=>{let v=p;for(let y=0;y<g.length&&v!=null;++y)v=v[g[y]];return v},d=(p,g)=>g==null||p==null?g:typeof p=="object"&&"key"in p?Object.hasOwn(g,p.key)?g[p.key]:u(g,p.path):typeof p=="function"?p(g):Array.isArray(p)?u(g,p):typeof g=="object"?g[p]:g,h=s.map(p=>(Array.isArray(p)&&p.length===1&&(p=p[0]),p==null||typeof p=="function"||Array.isArray(p)||n.isKey(p)?p:{key:p,path:r.toPath(p)}));return i.map(p=>({original:p,criteria:h.map(g=>d(g,p))})).slice().sort((p,g)=>{for(let v=0;v<h.length;v++){const y=t.compareValues(p.criteria[v],g.criteria[v],l[v]);if(y!==0)return y}return 0}).map(p=>p.original)}e.orderBy=a})(sg);var ug={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n,r=1){const a=[],i=Math.floor(r),s=(l,c)=>{for(let u=0;u<l.length;u++){const d=l[u];Array.isArray(d)&&c<i?s(d,c+1):a.push(d)}};return s(n,0),a}e.flatten=t})(ug);var Yl={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Fl,n=Ki,r=Dl,a=_l;function i(s,l,c){return r.isObject(c)&&(typeof l=="number"&&n.isArrayLike(c)&&t.isIndex(l)&&l<c.length||typeof l=="string"&&l in c)?a.eq(c[l],s):!1}e.isIterateeCall=i})(Yl);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=sg,n=ug,r=Yl;function a(i,...s){const l=s.length;return l>1&&r.isIterateeCall(i,s[0],s[1])?s=[]:l>2&&r.isIterateeCall(s[0],s[1],s[2])&&(s=[s[0]]),t.orderBy(i,n.flatten(s),["asc"])}e.sortBy=a})(og);var qx=og.sortBy;const Ji=It(qx);var dg=e=>e.legend.settings,Gx=e=>e.legend.size,Ux=e=>e.legend.payload;S([Ux,dg],(e,t)=>{var{itemSorter:n}=t,r=e.flat(1);return n?Ji(r,n):r});var Aa=1;function Kx(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],[t,n]=f.useState({height:0,left:0,top:0,width:0}),r=f.useCallback(a=>{if(a!=null){var i=a.getBoundingClientRect(),s={height:i.height,left:i.left,top:i.top,width:i.width};(Math.abs(s.height-t.height)>Aa||Math.abs(s.left-t.left)>Aa||Math.abs(s.top-t.top)>Aa||Math.abs(s.width-t.width)>Aa)&&n({height:s.height,left:s.left,top:s.top,width:s.width})}},[t.width,t.height,t.top,t.left,...e]);return[t,r]}function Me(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var Vx=(()=>typeof Symbol=="function"&&Symbol.observable||"@@observable")(),_u=Vx,Zo=()=>Math.random().toString(36).substring(7).split("").join("."),Jx={INIT:`@@redux/INIT${Zo()}`,REPLACE:`@@redux/REPLACE${Zo()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Zo()}`},ei=Jx;function ql(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function hg(e,t,n){if(typeof e!="function")throw new Error(Me(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Me(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Me(1));return n(hg)(e,t)}let r=e,a=t,i=new Map,s=i,l=0,c=!1;function u(){s===i&&(s=new Map,i.forEach((y,b)=>{s.set(b,y)}))}function d(){if(c)throw new Error(Me(3));return a}function h(y){if(typeof y!="function")throw new Error(Me(4));if(c)throw new Error(Me(5));let b=!0;u();const x=l++;return s.set(x,y),function(){if(b){if(c)throw new Error(Me(6));b=!1,u(),s.delete(x),i=null}}}function m(y){if(!ql(y))throw new Error(Me(7));if(typeof y.type>"u")throw new Error(Me(8));if(typeof y.type!="string")throw new Error(Me(17));if(c)throw new Error(Me(9));try{c=!0,a=r(a,y)}finally{c=!1}return(i=s).forEach(x=>{x()}),y}function p(y){if(typeof y!="function")throw new Error(Me(10));r=y,m({type:ei.REPLACE})}function g(){const y=h;return{subscribe(b){if(typeof b!="object"||b===null)throw new Error(Me(11));function x(){const I=b;I.next&&I.next(d())}return x(),{unsubscribe:y(x)}},[_u](){return this}}}return m({type:ei.INIT}),{dispatch:m,subscribe:h,getState:d,replaceReducer:p,[_u]:g}}function Zx(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:ei.INIT})>"u")throw new Error(Me(12));if(typeof n(void 0,{type:ei.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Me(13))})}function mg(e){const t=Object.keys(e),n={};for(let i=0;i<t.length;i++){const s=t[i];typeof e[s]=="function"&&(n[s]=e[s])}const r=Object.keys(n);let a;try{Zx(n)}catch(i){a=i}return function(s={},l){if(a)throw a;let c=!1;const u={};for(let d=0;d<r.length;d++){const h=r[d],m=n[h],p=s[h],g=m(p,l);if(typeof g>"u")throw l&&l.type,new Error(Me(14));u[h]=g,c=c||g!==p}return c=c||r.length!==Object.keys(s).length,c?u:s}}function ti(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...r)=>t(n(...r)))}function Xx(...e){return t=>(n,r)=>{const a=t(n,r);let i=()=>{throw new Error(Me(15))};const s={getState:a.getState,dispatch:(c,...u)=>i(c,...u)},l=e.map(c=>c(s));return i=ti(...l)(a.dispatch),{...a,dispatch:i}}}function pg(e){return ql(e)&&"type"in e&&typeof e.type=="string"}var gg=Symbol.for("immer-nothing"),Ru=Symbol.for("immer-draftable"),Ke=Symbol.for("immer-state");function yt(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var tt=Object,ar=tt.getPrototypeOf,ni="constructor",Zi="prototype",Es="configurable",ri="enumerable",qa="writable",Rr="value",Yt=e=>!!e&&!!e[Ke];function Tt(e){var t;return e?fg(e)||Xi(e)||!!e[Ru]||!!((t=e[ni])!=null&&t[Ru])||Qi(e)||eo(e):!1}var Qx=tt[Zi][ni].toString(),Lu=new WeakMap;function fg(e){if(!e||!Gl(e))return!1;const t=ar(e);if(t===null||t===tt[Zi])return!0;const n=tt.hasOwnProperty.call(t,ni)&&t[ni];if(n===Object)return!0;if(!Gn(n))return!1;let r=Lu.get(n);return r===void 0&&(r=Function.toString.call(n),Lu.set(n,r)),r===Qx}function na(e,t,n=!0){ra(e)===0?(n?Reflect.ownKeys(e):tt.keys(e)).forEach(a=>{t(a,e[a],e)}):e.forEach((r,a)=>t(a,r,e))}function ra(e){const t=e[Ke];return t?t.type_:Xi(e)?1:Qi(e)?2:eo(e)?3:0}var Wu=(e,t,n=ra(e))=>n===2?e.has(t):tt[Zi].hasOwnProperty.call(e,t),Ms=(e,t,n=ra(e))=>n===2?e.get(t):e[t],ai=(e,t,n,r=ra(e))=>{r===2?e.set(t,n):r===3?e.add(n):e[t]=n};function ek(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}var Xi=Array.isArray,Qi=e=>e instanceof Map,eo=e=>e instanceof Set,Gl=e=>typeof e=="object",Gn=e=>typeof e=="function",Xo=e=>typeof e=="boolean";function tk(e){const t=+e;return Number.isInteger(t)&&String(t)===e}var Bt=e=>e.copy_||e.base_,Ul=e=>e.modified_?e.copy_:e.base_;function $s(e,t){if(Qi(e))return new Map(e);if(eo(e))return new Set(e);if(Xi(e))return Array[Zi].slice.call(e);const n=fg(e);if(t===!0||t==="class_only"&&!n){const r=tt.getOwnPropertyDescriptors(e);delete r[Ke];let a=Reflect.ownKeys(r);for(let i=0;i<a.length;i++){const s=a[i],l=r[s];l[qa]===!1&&(l[qa]=!0,l[Es]=!0),(l.get||l.set)&&(r[s]={[Es]:!0,[qa]:!0,[ri]:l[ri],[Rr]:e[s]})}return tt.create(ar(e),r)}else{const r=ar(e);if(r!==null&&n)return{...e};const a=tt.create(r);return tt.assign(a,e)}}function Kl(e,t=!1){return to(e)||Yt(e)||!Tt(e)||(ra(e)>1&&tt.defineProperties(e,{set:Sa,add:Sa,clear:Sa,delete:Sa}),tt.freeze(e),t&&na(e,(n,r)=>{Kl(r,!0)},!1)),e}function nk(){yt(2)}var Sa={[Rr]:nk};function to(e){return e===null||!Gl(e)?!0:tt.isFrozen(e)}var ii="MapSet",Ds="Patches",Fu="ArrayMethods",yg={};function On(e){const t=yg[e];return t||yt(0,e),t}var Hu=e=>!!yg[e],Lr,vg=()=>Lr,rk=(e,t)=>({drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0,handledSet_:new Set,processedForPatches_:new Set,mapSetPlugin_:Hu(ii)?On(ii):void 0,arrayMethodsPlugin_:Hu(Fu)?On(Fu):void 0});function zu(e,t){t&&(e.patchPlugin_=On(Ds),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Bs(e){_s(e),e.drafts_.forEach(ak),e.drafts_=null}function _s(e){e===Lr&&(Lr=e.parent_)}var Yu=e=>Lr=rk(Lr,e);function ak(e){const t=e[Ke];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function qu(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];if(e!==void 0&&e!==n){n[Ke].modified_&&(Bs(t),yt(4)),Tt(e)&&(e=Gu(t,e));const{patchPlugin_:a}=t;a&&a.generateReplacementPatches_(n[Ke].base_,e,t)}else e=Gu(t,n);return ik(t,e,!0),Bs(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==gg?e:void 0}function Gu(e,t){if(to(t))return t;const n=t[Ke];if(!n)return Vl(t,e.handledSet_,e);if(!no(n,e))return t;if(!n.modified_)return n.base_;if(!n.finalized_){const{callbacks_:r}=n;if(r)for(;r.length>0;)r.pop()(e);xg(n,e)}return n.copy_}function ik(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Kl(t,n)}function bg(e){e.finalized_=!0,e.scope_.unfinalizedDrafts_--}var no=(e,t)=>e.scope_===t,ok=[];function wg(e,t,n,r){const a=Bt(e),i=e.type_;if(r!==void 0&&Ms(a,r,i)===t){ai(a,r,n,i);return}if(!e.draftLocations_){const l=e.draftLocations_=new Map;na(a,(c,u)=>{if(Yt(u)){const d=l.get(u)||[];d.push(c),l.set(u,d)}})}const s=e.draftLocations_.get(t)??ok;for(const l of s)ai(a,l,n,i)}function sk(e,t,n){e.callbacks_.push(function(a){var l;const i=t;if(!i||!no(i,a))return;(l=a.mapSetPlugin_)==null||l.fixSetContents(i);const s=Ul(i);wg(e,i.draft_??i,s,n),xg(i,a)})}function xg(e,t){var r;if(e.modified_&&!e.finalized_&&(e.type_===3||e.type_===1&&e.allIndicesReassigned_||(((r=e.assigned_)==null?void 0:r.size)??0)>0)){const{patchPlugin_:a}=t;if(a){const i=a.getPath(e);i&&a.generatePatches_(e,i,t)}bg(e)}}function lk(e,t,n){const{scope_:r}=e;if(Yt(n)){const a=n[Ke];no(a,r)&&a.callbacks_.push(function(){Ga(e);const s=Ul(a);wg(e,n,s,t)})}else Tt(n)&&e.callbacks_.push(function(){const i=Bt(e);Ms(i,t,e.type_)===n&&r.drafts_.length>1&&(e.assigned_.get(t)??!1)===!0&&e.copy_&&Vl(Ms(e.copy_,t,e.type_),r.handledSet_,r)})}function Vl(e,t,n){return!n.immer_.autoFreeze_&&n.unfinalizedDrafts_<1||Yt(e)||t.has(e)||!Tt(e)||to(e)||(t.add(e),na(e,(r,a)=>{if(Yt(a)){const i=a[Ke];if(no(i,n)){const s=Ul(i);ai(e,r,s,e.type_),bg(i)}}else Tt(a)&&Vl(a,t,n)})),e}function ck(e,t){const n=Xi(e),r={type_:n?1:0,scope_:t?t.scope_:vg(),modified_:!1,finalized_:!1,assigned_:void 0,parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1,callbacks_:void 0};let a=r,i=Jl;n&&(a=[r],i=Wr);const{revoke:s,proxy:l}=Proxy.revocable(a,i);return r.draft_=l,r.revoke_=s,[l,r]}var Jl={get(e,t){if(t===Ke)return e;let n=e.scope_.arrayMethodsPlugin_;const r=e.type_===1&&typeof t=="string";if(r&&n!=null&&n.isArrayOperationMethod(t))return n.createMethodInterceptor(e,t);const a=Bt(e);if(!Wu(a,t,e.type_))return uk(e,a,t);const i=a[t];if(e.finalized_||!Tt(i)||r&&e.operationMethod&&(n!=null&&n.isMutatingArrayMethod(e.operationMethod))&&tk(t))return i;if(i===Qo(e.base_,t)){Ga(e);const s=e.type_===1?+t:t,l=Ls(e.scope_,i,e,s);return e.copy_[s]=l}return i},has(e,t){return t in Bt(e)},ownKeys(e){return Reflect.ownKeys(Bt(e))},set(e,t,n){const r=kg(Bt(e),t);if(r!=null&&r.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const a=Qo(Bt(e),t),i=a==null?void 0:a[Ke];if(i&&i.base_===n)return e.copy_[t]=n,e.assigned_.set(t,!1),!0;if(ek(n,a)&&(n!==void 0||Wu(e.base_,t,e.type_)))return!0;Ga(e),Rs(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_.set(t,!0),lk(e,t,n)),!0},deleteProperty(e,t){return Ga(e),Qo(e.base_,t)!==void 0||t in e.base_?(e.assigned_.set(t,!1),Rs(e)):e.assigned_.delete(t),e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=Bt(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{[qa]:!0,[Es]:e.type_!==1||t!=="length",[ri]:r[ri],[Rr]:n[t]}},defineProperty(){yt(11)},getPrototypeOf(e){return ar(e.base_)},setPrototypeOf(){yt(12)}},Wr={};na(Jl,(e,t)=>{Wr[e]=function(){const n=arguments;return n[0]=n[0][0],t.apply(this,n)}});Wr.deleteProperty=function(e,t){return Wr.set.call(this,e,t,void 0)};Wr.set=function(e,t,n){return Jl.set.call(this,e[0],t,n,e[0])};function Qo(e,t){const n=e[Ke];return(n?Bt(n):e)[t]}function uk(e,t,n){var a;const r=kg(t,n);return r?Rr in r?r[Rr]:(a=r.get)==null?void 0:a.call(e.draft_):void 0}function kg(e,t){if(!(t in e))return;let n=ar(e);for(;n;){const r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=ar(n)}}function Rs(e){e.modified_||(e.modified_=!0,e.parent_&&Rs(e.parent_))}function Ga(e){e.copy_||(e.assigned_=new Map,e.copy_=$s(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var dk=class{constructor(t){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!1,this.produce=(n,r,a)=>{if(Gn(n)&&!Gn(r)){const s=r;r=n;const l=this;return function(u=s,...d){return l.produce(u,h=>r.call(this,h,...d))}}Gn(r)||yt(6),a!==void 0&&!Gn(a)&&yt(7);let i;if(Tt(n)){const s=Yu(this),l=Ls(s,n,void 0);let c=!0;try{i=r(l),c=!1}finally{c?Bs(s):_s(s)}return zu(s,a),qu(i,s)}else if(!n||!Gl(n)){if(i=r(n),i===void 0&&(i=n),i===gg&&(i=void 0),this.autoFreeze_&&Kl(i,!0),a){const s=[],l=[];On(Ds).generateReplacementPatches_(n,i,{patches_:s,inversePatches_:l}),a(s,l)}return i}else yt(1,n)},this.produceWithPatches=(n,r)=>{if(Gn(n))return(l,...c)=>this.produceWithPatches(l,u=>n(u,...c));let a,i;return[this.produce(n,r,(l,c)=>{a=l,i=c}),a,i]},Xo(t==null?void 0:t.autoFreeze)&&this.setAutoFreeze(t.autoFreeze),Xo(t==null?void 0:t.useStrictShallowCopy)&&this.setUseStrictShallowCopy(t.useStrictShallowCopy),Xo(t==null?void 0:t.useStrictIteration)&&this.setUseStrictIteration(t.useStrictIteration)}createDraft(t){Tt(t)||yt(8),Yt(t)&&(t=xt(t));const n=Yu(this),r=Ls(n,t,void 0);return r[Ke].isManual_=!0,_s(n),r}finishDraft(t,n){const r=t&&t[Ke];(!r||!r.isManual_)&&yt(9);const{scope_:a}=r;return zu(a,n),qu(void 0,a)}setAutoFreeze(t){this.autoFreeze_=t}setUseStrictShallowCopy(t){this.useStrictShallowCopy_=t}setUseStrictIteration(t){this.useStrictIteration_=t}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(t,n){let r;for(r=n.length-1;r>=0;r--){const i=n[r];if(i.path.length===0&&i.op==="replace"){t=i.value;break}}r>-1&&(n=n.slice(r+1));const a=On(Ds).applyPatches_;return Yt(t)?a(t,n):this.produce(t,i=>a(i,n))}};function Ls(e,t,n,r){const[a,i]=Qi(t)?On(ii).proxyMap_(t,n):eo(t)?On(ii).proxySet_(t,n):ck(t,n);return((n==null?void 0:n.scope_)??vg()).drafts_.push(a),i.callbacks_=(n==null?void 0:n.callbacks_)??[],i.key_=r,n&&r!==void 0?sk(n,i,r):i.callbacks_.push(function(c){var d;(d=c.mapSetPlugin_)==null||d.fixSetContents(i);const{patchPlugin_:u}=c;i.modified_&&u&&u.generatePatches_(i,[],c)}),a}function xt(e){return Yt(e)||yt(10,e),Tg(e)}function Tg(e){if(!Tt(e)||to(e))return e;const t=e[Ke];let n,r=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=$s(e,t.scope_.immer_.useStrictShallowCopy_),r=t.scope_.immer_.shouldUseStrictIteration()}else n=$s(e,!0);return na(n,(a,i)=>{ai(n,a,Tg(i))},r),t&&(t.finalized_=!1),n}var hk=new dk,Ig=hk.produce;function jg(e){return({dispatch:n,getState:r})=>a=>i=>typeof i=="function"?i(n,r,e):a(i)}var mk=jg(),pk=jg,gk=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?ti:ti.apply(null,arguments)};function ht(e,t){function n(...r){if(t){let a=t(...r);if(!a)throw new Error(nt(0));return{type:e,payload:a.payload,..."meta"in a&&{meta:a.meta},..."error"in a&&{error:a.error}}}return{type:e,payload:r[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=r=>pg(r)&&r.type===e,n}var Ng=class Er extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,Er.prototype)}static get[Symbol.species](){return Er}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new Er(...t[0].concat(this)):new Er(...t.concat(this))}};function Uu(e){return Tt(e)?Ig(e,()=>{}):e}function Pa(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}function fk(e){return typeof e=="boolean"}var yk=()=>function(t){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:a=!0,actionCreatorCheck:i=!0}=t??{};let s=new Ng;return n&&(fk(n)?s.push(mk):s.push(pk(n.extraArgument))),s},Ag="RTK_autoBatch",ce=()=>e=>({payload:e,meta:{[Ag]:!0}}),Ku=e=>t=>{setTimeout(t,e)},Sg=(e={type:"raf"})=>t=>(...n)=>{const r=t(...n);let a=!0,i=!1,s=!1;const l=new Set,c=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:Ku(10):e.type==="callback"?e.queueNotification:Ku(e.timeout),u=()=>{s=!1,i&&(i=!1,l.forEach(d=>d()))};return Object.assign({},r,{subscribe(d){const h=()=>a&&d(),m=r.subscribe(h);return l.add(d),()=>{m(),l.delete(d)}},dispatch(d){var h;try{return a=!((h=d==null?void 0:d.meta)!=null&&h[Ag]),i=!a,i&&(s||(s=!0,c(u))),r.dispatch(d)}finally{a=!0}}})},vk=e=>function(n){const{autoBatch:r=!0}=n??{};let a=new Ng(e);return r&&a.push(Sg(typeof r=="object"?r:void 0)),a};function bk(e){const t=yk(),{reducer:n=void 0,middleware:r,devTools:a=!0,duplicateMiddlewareCheck:i=!0,preloadedState:s=void 0,enhancers:l=void 0}=e||{};let c;if(typeof n=="function")c=n;else if(ql(n))c=mg(n);else throw new Error(nt(1));let u;typeof r=="function"?u=r(t):u=t();let d=ti;a&&(d=gk({trace:!1,...typeof a=="object"&&a}));const h=Xx(...u),m=vk(h);let p=typeof l=="function"?l(m):m();const g=d(...p);return hg(c,s,g)}function Pg(e){const t={},n=[];let r;const a={addCase(i,s){const l=typeof i=="string"?i:i.type;if(!l)throw new Error(nt(28));if(l in t)throw new Error(nt(29));return t[l]=s,a},addAsyncThunk(i,s){return s.pending&&(t[i.pending.type]=s.pending),s.rejected&&(t[i.rejected.type]=s.rejected),s.fulfilled&&(t[i.fulfilled.type]=s.fulfilled),s.settled&&n.push({matcher:i.settled,reducer:s.settled}),a},addMatcher(i,s){return n.push({matcher:i,reducer:s}),a},addDefaultCase(i){return r=i,a}};return e(a),[t,n,r]}function wk(e){return typeof e=="function"}function xk(e,t){let[n,r,a]=Pg(t),i;if(wk(e))i=()=>Uu(e());else{const l=Uu(e);i=()=>l}function s(l=i(),c){let u=[n[c.type],...r.filter(({matcher:d})=>d(c)).map(({reducer:d})=>d)];return u.filter(d=>!!d).length===0&&(u=[a]),u.reduce((d,h)=>{if(h)if(Yt(d)){const p=h(d,c);return p===void 0?d:p}else{if(Tt(d))return Ig(d,m=>h(m,c));{const m=h(d,c);if(m===void 0){if(d===null)return d;throw Error("A case reducer on a non-draftable value must not return undefined")}return m}}return d},l)}return s.getInitialState=i,s}var kk="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",Tk=(e=21)=>{let t="",n=e;for(;n--;)t+=kk[Math.random()*64|0];return t},Ik=Symbol.for("rtk-slice-createasyncthunk");function jk(e,t){return`${e}/${t}`}function Nk({creators:e}={}){var n;const t=(n=e==null?void 0:e.asyncThunk)==null?void 0:n[Ik];return function(a){const{name:i,reducerPath:s=i}=a;if(!i)throw new Error(nt(11));typeof process<"u";const l=(typeof a.reducers=="function"?a.reducers(Sk()):a.reducers)||{},c=Object.keys(l),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},d={addCase(I,w){const T=typeof I=="string"?I:I.type;if(!T)throw new Error(nt(12));if(T in u.sliceCaseReducersByType)throw new Error(nt(13));return u.sliceCaseReducersByType[T]=w,d},addMatcher(I,w){return u.sliceMatchers.push({matcher:I,reducer:w}),d},exposeAction(I,w){return u.actionCreators[I]=w,d},exposeCaseReducer(I,w){return u.sliceCaseReducersByName[I]=w,d}};c.forEach(I=>{const w=l[I],T={reducerName:I,type:jk(i,I),createNotation:typeof a.reducers=="function"};Ok(w)?Ek(T,w,d,t):Pk(T,w,d)});function h(){const[I={},w=[],T=void 0]=typeof a.extraReducers=="function"?Pg(a.extraReducers):[a.extraReducers],j={...I,...u.sliceCaseReducersByType};return xk(a.initialState,E=>{for(let C in j)E.addCase(C,j[C]);for(let C of u.sliceMatchers)E.addMatcher(C.matcher,C.reducer);for(let C of w)E.addMatcher(C.matcher,C.reducer);T&&E.addDefaultCase(T)})}const m=I=>I,p=new Map,g=new WeakMap;let v;function y(I,w){return v||(v=h()),v(I,w)}function b(){return v||(v=h()),v.getInitialState()}function x(I,w=!1){function T(E){let C=E[I];return typeof C>"u"&&w&&(C=Pa(g,T,b)),C}function j(E=m){const C=Pa(p,w,()=>new WeakMap);return Pa(C,E,()=>{const $={};for(const[A,D]of Object.entries(a.selectors??{}))$[A]=Ak(D,E,()=>Pa(g,E,b),w);return $})}return{reducerPath:I,getSelectors:j,get selectors(){return j(T)},selectSlice:T}}const k={name:i,reducer:y,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:b,...x(s),injectInto(I,{reducerPath:w,...T}={}){const j=w??s;return I.inject({reducerPath:j,reducer:y},T),{...k,...x(j,!0)}}};return k}}function Ak(e,t,n,r){function a(i,...s){let l=t(i);return typeof l>"u"&&r&&(l=n()),e(l,...s)}return a.unwrapped=e,a}var Ze=Nk();function Sk(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function Pk({type:e,reducerName:t,createNotation:n},r,a){let i,s;if("reducer"in r){if(n&&!Ck(r))throw new Error(nt(17));i=r.reducer,s=r.prepare}else i=r;a.addCase(e,i).exposeCaseReducer(t,i).exposeAction(t,s?ht(e,s):ht(e))}function Ok(e){return e._reducerDefinitionType==="asyncThunk"}function Ck(e){return e._reducerDefinitionType==="reducerWithPrepare"}function Ek({type:e,reducerName:t},n,r,a){if(!a)throw new Error(nt(18));const{payloadCreator:i,fulfilled:s,pending:l,rejected:c,settled:u,options:d}=n,h=a(e,i,d);r.exposeAction(t,h),s&&r.addCase(h.fulfilled,s),l&&r.addCase(h.pending,l),c&&r.addCase(h.rejected,c),u&&r.addMatcher(h.settled,u),r.exposeCaseReducer(t,{fulfilled:s||Oa,pending:l||Oa,rejected:c||Oa,settled:u||Oa})}function Oa(){}var Mk="task",Og="listener",Cg="completed",Zl="cancelled",$k=`task-${Zl}`,Dk=`task-${Cg}`,Ws=`${Og}-${Zl}`,Bk=`${Og}-${Cg}`,ro=class{constructor(e){Le(this,"name","TaskAbortError");Le(this,"message");this.code=e,this.message=`${Mk} ${Zl} (reason: ${e})`}},Xl=(e,t)=>{if(typeof e!="function")throw new TypeError(nt(32))},oi=()=>{},Eg=(e,t=oi)=>(e.catch(t),e),Mg=(e,t)=>(e.addEventListener("abort",t,{once:!0}),()=>e.removeEventListener("abort",t)),jn=e=>{if(e.aborted)throw new ro(e.reason)};function $g(e,t){let n=oi;return new Promise((r,a)=>{const i=()=>a(new ro(e.reason));if(e.aborted){i();return}n=Mg(e,i),t.finally(()=>n()).then(r,a)}).finally(()=>{n=oi})}var _k=async(e,t)=>{try{return await Promise.resolve(),{status:"ok",value:await e()}}catch(n){return{status:n instanceof ro?"cancelled":"rejected",error:n}}finally{t==null||t()}},si=e=>t=>Eg($g(e,t).then(n=>(jn(e),n))),Dg=e=>{const t=si(e);return n=>t(new Promise(r=>setTimeout(r,n)))},{assign:Xn}=Object,Vu={},ao="listenerMiddleware",Rk=(e,t)=>{const n=r=>Mg(e,()=>r.abort(e.reason));return(r,a)=>{Xl(r);const i=new AbortController;n(i);const s=_k(async()=>{jn(e),jn(i.signal);const l=await r({pause:si(i.signal),delay:Dg(i.signal),signal:i.signal});return jn(i.signal),l},()=>i.abort(Dk));return a!=null&&a.autoJoin&&t.push(s.catch(oi)),{result:si(e)(s),cancel(){i.abort($k)}}}},Lk=(e,t)=>{const n=async(r,a)=>{jn(t);let i=()=>{};const l=[new Promise((c,u)=>{let d=e({predicate:r,effect:(h,m)=>{m.unsubscribe(),c([h,m.getState(),m.getOriginalState()])}});i=()=>{d(),u()}})];a!=null&&l.push(new Promise(c=>setTimeout(c,a,null)));try{const c=await $g(t,Promise.race(l));return jn(t),c}finally{i()}};return(r,a)=>Eg(n(r,a))},Bg=e=>{let{type:t,actionCreator:n,matcher:r,predicate:a,effect:i}=e;if(t)a=ht(t).match;else if(n)t=n.type,a=n.match;else if(r)a=r;else if(!a)throw new Error(nt(21));return Xl(i),{predicate:a,type:t,effect:i}},_g=Xn(e=>{const{type:t,predicate:n,effect:r}=Bg(e);return{id:Tk(),effect:r,type:t,predicate:n,pending:new Set,unsubscribe:()=>{throw new Error(nt(22))}}},{withTypes:()=>_g}),Ju=(e,t)=>{const{type:n,effect:r,predicate:a}=Bg(t);return Array.from(e.values()).find(i=>(typeof n=="string"?i.type===n:i.predicate===a)&&i.effect===r)},Fs=e=>{e.pending.forEach(t=>{t.abort(Ws)})},Wk=(e,t)=>()=>{for(const n of t.keys())Fs(n);e.clear()},Zu=(e,t,n)=>{try{e(t,n)}catch(r){setTimeout(()=>{throw r},0)}},Rg=Xn(ht(`${ao}/add`),{withTypes:()=>Rg}),Fk=ht(`${ao}/removeAll`),Lg=Xn(ht(`${ao}/remove`),{withTypes:()=>Lg}),Hk=(...e)=>{console.error(`${ao}/error`,...e)},aa=(e={})=>{const t=new Map,n=new Map,r=p=>{const g=n.get(p)??0;n.set(p,g+1)},a=p=>{const g=n.get(p)??1;g===1?n.delete(p):n.set(p,g-1)},{extra:i,onError:s=Hk}=e;Xl(s);const l=p=>(p.unsubscribe=()=>t.delete(p.id),t.set(p.id,p),g=>{p.unsubscribe(),g!=null&&g.cancelActive&&Fs(p)}),c=p=>{const g=Ju(t,p)??_g(p);return l(g)};Xn(c,{withTypes:()=>c});const u=p=>{const g=Ju(t,p);return g&&(g.unsubscribe(),p.cancelActive&&Fs(g)),!!g};Xn(u,{withTypes:()=>u});const d=async(p,g,v,y)=>{const b=new AbortController,x=Lk(c,b.signal),k=[];try{p.pending.add(b),r(p),await Promise.resolve(p.effect(g,Xn({},v,{getOriginalState:y,condition:(I,w)=>x(I,w).then(Boolean),take:x,delay:Dg(b.signal),pause:si(b.signal),extra:i,signal:b.signal,fork:Rk(b.signal,k),unsubscribe:p.unsubscribe,subscribe:()=>{t.set(p.id,p)},cancelActiveListeners:()=>{p.pending.forEach((I,w,T)=>{I!==b&&(I.abort(Ws),T.delete(I))})},cancel:()=>{b.abort(Ws),p.pending.delete(b)},throwIfCancelled:()=>{jn(b.signal)}})))}catch(I){I instanceof ro||Zu(s,I,{raisedBy:"effect"})}finally{await Promise.all(k),b.abort(Bk),a(p),p.pending.delete(b)}},h=Wk(t,n);return{middleware:p=>g=>v=>{if(!pg(v))return g(v);if(Rg.match(v))return c(v.payload);if(Fk.match(v)){h();return}if(Lg.match(v))return u(v.payload);let y=p.getState();const b=()=>{if(y===Vu)throw new Error(nt(23));return y};let x;try{if(x=g(v),t.size>0){const k=p.getState(),I=Array.from(t.values());for(const w of I){let T=!1;try{T=w.predicate(v,k,y)}catch(j){T=!1,Zu(s,j,{raisedBy:"predicate"})}T&&d(w,v,p,b)}}}finally{y=Vu}return x},startListening:c,stopListening:u,clearListeners:h}};function nt(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var zk={layoutType:"horizontal",width:0,height:0,margin:{top:5,right:5,bottom:5,left:5},scale:1},Wg=Ze({name:"chartLayout",initialState:zk,reducers:{setLayout(e,t){e.layoutType=t.payload},setChartSize(e,t){e.width=t.payload.width,e.height=t.payload.height},setMargin(e,t){var n,r,a,i;e.margin.top=(n=t.payload.top)!==null&&n!==void 0?n:0,e.margin.right=(r=t.payload.right)!==null&&r!==void 0?r:0,e.margin.bottom=(a=t.payload.bottom)!==null&&a!==void 0?a:0,e.margin.left=(i=t.payload.left)!==null&&i!==void 0?i:0},setScale(e,t){e.scale=t.payload}}}),{setMargin:Yk,setLayout:qk,setChartSize:Gk,setScale:Uk}=Wg.actions,Kk=Wg.reducer;function Fg(e,t,n){return Array.isArray(e)&&e&&t+n!==0?e.slice(t,n+1):e}function de(e){return Number.isFinite(e)}function hn(e){return typeof e=="number"&&e>0&&Number.isFinite(e)}function Xu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Un(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Xu(Object(n),!0).forEach(function(r){Vk(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Vk(e,t,n){return(t=Jk(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Jk(e){var t=Zk(e,"string");return typeof t=="symbol"?t:t+""}function Zk(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function _e(e,t,n){return Oe(e)||Oe(t)?n:Et(t)?nr(e,t,n):typeof t=="function"?t(e):n}var Xk=(e,t,n)=>{if(t&&n){var{width:r,height:a}=n,{align:i,verticalAlign:s,layout:l}=t;if((l==="vertical"||l==="horizontal"&&s==="middle")&&i!=="center"&&U(e[i]))return Un(Un({},e),{},{[i]:e[i]+(r||0)});if((l==="horizontal"||l==="vertical"&&i==="center")&&s!=="middle"&&U(e[s]))return Un(Un({},e),{},{[s]:e[s]+(a||0)})}return e},_n=(e,t)=>e==="horizontal"&&t==="xAxis"||e==="vertical"&&t==="yAxis"||e==="centric"&&t==="angleAxis"||e==="radial"&&t==="radiusAxis",Qu=1e-4,Qk=e=>{var t=e.domain();if(!(!t||t.length<=2)){var n=t.length,r=e.range(),a=Math.min(r[0],r[1])-Qu,i=Math.max(r[0],r[1])+Qu,s=e(t[0]),l=e(t[n-1]);(s<a||s>i||l<a||l>i)&&e.domain([t[0],t[n-1]])}},e1=(e,t)=>{if(!t||t.length!==2||!U(t[0])||!U(t[1]))return e;var n=Math.min(t[0],t[1]),r=Math.max(t[0],t[1]),a=[e[0],e[1]];return(!U(e[0])||e[0]<n)&&(a[0]=n),(!U(e[1])||e[1]>r)&&(a[1]=r),a[0]>r&&(a[0]=r),a[1]<n&&(a[1]=n),a},t1=e=>{var t,n=e.length;if(!(n<=0)){var r=(t=e[0])===null||t===void 0?void 0:t.length;if(!(r==null||r<=0))for(var a=0;a<r;++a)for(var i=0,s=0,l=0;l<n;++l){var c=e[l],u=c==null?void 0:c[a];if(u!=null){var d=u[1],h=u[0],m=Ct(d)?h:d;m>=0?(u[0]=i,u[1]=i+m,i=d):(u[0]=s,u[1]=s+m,s=d)}}}},n1=e=>{var t,n=e.length;if(!(n<=0)){var r=(t=e[0])===null||t===void 0?void 0:t.length;if(!(r==null||r<=0))for(var a=0;a<r;++a)for(var i=0,s=0;s<n;++s){var l=e[s],c=l==null?void 0:l[a];if(c!=null){var u=Ct(c[1])?c[0]:c[1];u>=0?(c[0]=i,c[1]=i+u,i=c[1]):(c[0]=0,c[1]=0)}}}},r1={sign:t1,expand:Fw,none:Pn,silhouette:Hw,wiggle:zw,positive:n1},a1=(e,t,n)=>{var r,a=(r=r1[n])!==null&&r!==void 0?r:Pn,i=Ww().keys(t).value((l,c)=>Number(_e(l,c,0))).order(Os).offset(a),s=i(e);return s.forEach((l,c)=>{l.forEach((u,d)=>{var h=_e(e[d],t[c],0);Array.isArray(h)&&h.length===2&&U(h[0])&&U(h[1])&&(u[0]=h[0],u[1]=h[1])})}),s};function i1(e){return e==null?void 0:String(e)}var ed=e=>{var{axis:t,ticks:n,offset:r,bandSize:a,entry:i,index:s}=e;if(t.type==="category")return n[s]?n[s].coordinate+r:null;var l=_e(i,t.dataKey,t.scale.domain()[s]);return Oe(l)?null:t.scale(l)-a/2+r},o1=e=>{var{numericAxis:t}=e,n=t.scale.domain();if(t.type==="number"){var r=Math.min(n[0],n[1]),a=Math.max(n[0],n[1]);return r<=0&&a>=0?0:a<0?a:r}return n[0]},s1=e=>{var t=e.flat(2).filter(U);return[Math.min(...t),Math.max(...t)]},l1=e=>[e[0]===1/0?0:e[0],e[1]===-1/0?0:e[1]],c1=(e,t,n)=>{if(e!=null)return l1(Object.keys(e).reduce((r,a)=>{var i=e[a];if(!i)return r;var{stackedData:s}=i,l=s.reduce((c,u)=>{var d=Fg(u,t,n),h=s1(d);return!de(h[0])||!de(h[1])?c:[Math.min(c[0],h[0]),Math.max(c[1],h[1])]},[1/0,-1/0]);return[Math.min(l[0],r[0]),Math.max(l[1],r[1])]},[1/0,-1/0]))},td=/^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,nd=/^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,li=(e,t,n)=>{if(e&&e.scale&&e.scale.bandwidth){var r=e.scale.bandwidth();if(!n||r>0)return r}if(e&&t&&t.length>=2){for(var a=Ji(t,d=>d.coordinate),i=1/0,s=1,l=a.length;s<l;s++){var c=a[s],u=a[s-1];i=Math.min(((c==null?void 0:c.coordinate)||0)-((u==null?void 0:u.coordinate)||0),i)}return i===1/0?0:i}return n?void 0:0};function rd(e){var{tooltipEntrySettings:t,dataKey:n,payload:r,value:a,name:i}=e;return Un(Un({},t),{},{dataKey:n,payload:r,value:a,name:i})}function Hg(e,t){if(e)return String(e);if(typeof t=="string")return t}var u1=(e,t)=>{if(t==="horizontal")return e.chartX;if(t==="vertical")return e.chartY},d1=(e,t)=>t==="centric"?e.angle:e.radius,Jt=e=>e.layout.width,Zt=e=>e.layout.height,h1=e=>e.layout.scale,zg=e=>e.layout.margin,io=S(e=>e.cartesianAxis.xAxis,e=>Object.values(e)),oo=S(e=>e.cartesianAxis.yAxis,e=>Object.values(e)),m1="data-recharts-item-index",p1="data-recharts-item-id",ia=60;function ad(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ca(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ad(Object(n),!0).forEach(function(r){g1(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ad(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function g1(e,t,n){return(t=f1(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f1(e){var t=y1(e,"string");return typeof t=="symbol"?t:t+""}function y1(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var v1=e=>e.brush.height;function b1(e){var t=oo(e);return t.reduce((n,r)=>{if(r.orientation==="left"&&!r.mirror&&!r.hide){var a=typeof r.width=="number"?r.width:ia;return n+a}return n},0)}function w1(e){var t=oo(e);return t.reduce((n,r)=>{if(r.orientation==="right"&&!r.mirror&&!r.hide){var a=typeof r.width=="number"?r.width:ia;return n+a}return n},0)}function x1(e){var t=io(e);return t.reduce((n,r)=>r.orientation==="top"&&!r.mirror&&!r.hide?n+r.height:n,0)}function k1(e){var t=io(e);return t.reduce((n,r)=>r.orientation==="bottom"&&!r.mirror&&!r.hide?n+r.height:n,0)}var Ce=S([Jt,Zt,zg,v1,b1,w1,x1,k1,dg,Gx],(e,t,n,r,a,i,s,l,c,u)=>{var d={left:(n.left||0)+a,right:(n.right||0)+i},h={top:(n.top||0)+s,bottom:(n.bottom||0)+l},m=Ca(Ca({},h),d),p=m.bottom;m.bottom+=r,m=Xk(m,c,u);var g=e-m.left-m.right,v=t-m.top-m.bottom;return Ca(Ca({brushBottom:p},m),{},{width:Math.max(g,0),height:Math.max(v,0)})}),T1=S(Ce,e=>({x:e.left,y:e.top,width:e.width,height:e.height})),Ql=S(Jt,Zt,(e,t)=>({x:0,y:0,width:e,height:t})),I1=f.createContext(null),at=()=>f.useContext(I1)!=null,so=e=>e.brush,lo=S([so,Ce,zg],(e,t,n)=>({height:e.height,x:U(e.x)?e.x:t.left,y:U(e.y)?e.y:t.top+t.height+t.brushBottom-((n==null?void 0:n.bottom)||0),width:U(e.width)?e.width:t.width})),Yg={},qg={},Gg={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n,r,{signal:a,edges:i}={}){let s,l=null;const c=i!=null&&i.includes("leading"),u=i==null||i.includes("trailing"),d=()=>{l!==null&&(n.apply(s,l),s=void 0,l=null)},h=()=>{u&&d(),v()};let m=null;const p=()=>{m!=null&&clearTimeout(m),m=setTimeout(()=>{m=null,h()},r)},g=()=>{m!==null&&(clearTimeout(m),m=null)},v=()=>{g(),s=void 0,l=null},y=()=>{d()},b=function(...x){if(a!=null&&a.aborted)return;s=this,l=x;const k=m==null;p(),c&&k&&d()};return b.schedule=p,b.cancel=v,b.flush=y,a==null||a.addEventListener("abort",v,{once:!0}),b}e.debounce=t})(Gg);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Gg;function n(r,a=0,i={}){typeof i!="object"&&(i={});const{leading:s=!1,trailing:l=!0,maxWait:c}=i,u=Array(2);s&&(u[0]="leading"),l&&(u[1]="trailing");let d,h=null;const m=t.debounce(function(...v){d=r.apply(this,v),h=null},a,{edges:u}),p=function(...v){return c!=null&&(h===null&&(h=Date.now()),Date.now()-h>=c)?(d=r.apply(this,v),h=Date.now(),m.cancel(),m.schedule(),d):(m.apply(this,v),d)},g=()=>(m.flush(),d);return p.cancel=m.cancel,p.flush=g,p}e.debounce=n})(qg);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=qg;function n(r,a=0,i={}){const{leading:s=!0,trailing:l=!0}=i;return t.debounce(r,a,{leading:s,maxWait:a,trailing:l})}e.throttle=n})(Yg);var j1=Yg.throttle;const N1=It(j1);var id=function(t,n){for(var r=arguments.length,a=new Array(r>2?r-2:0),i=2;i<r;i++)a[i-2]=arguments[i];if(typeof console<"u"&&console.warn&&(n===void 0&&console.warn("LogUtils requires an error message argument"),!t))if(n===void 0)console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=0;console.warn(n.replace(/%s/g,()=>a[s++]))}},Ug=(e,t,n)=>{var{width:r="100%",height:a="100%",aspect:i,maxHeight:s}=n,l=zt(r)?e:Number(r),c=zt(a)?t:Number(a);return i&&i>0&&(l?c=l/i:c&&(l=c*i),s&&c!=null&&c>s&&(c=s)),{calculatedWidth:l,calculatedHeight:c}},A1={width:0,height:0,overflow:"visible"},S1={width:0,overflowX:"visible"},P1={height:0,overflowY:"visible"},O1={},C1=e=>{var{width:t,height:n}=e,r=zt(t),a=zt(n);return r&&a?A1:r?S1:a?P1:O1};function E1(e){var{width:t,height:n,aspect:r}=e,a=t,i=n;return a===void 0&&i===void 0?(a="100%",i="100%"):a===void 0?a=r&&r>0?void 0:"100%":i===void 0&&(i=r&&r>0?void 0:"100%"),{width:a,height:i}}function Hs(){return Hs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Hs.apply(null,arguments)}function od(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function sd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?od(Object(n),!0).forEach(function(r){M1(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):od(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function M1(e,t,n){return(t=$1(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $1(e){var t=D1(e,"string");return typeof t=="symbol"?t:t+""}function D1(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Kg=f.createContext({width:-1,height:-1});function B1(e){return hn(e.width)&&hn(e.height)}function Vg(e){var{children:t,width:n,height:r}=e,a=f.useMemo(()=>({width:n,height:r}),[n,r]);return B1(a)?f.createElement(Kg.Provider,{value:a},t):null}var ec=()=>f.useContext(Kg),_1=f.forwardRef((e,t)=>{var{aspect:n,initialDimension:r={width:-1,height:-1},width:a,height:i,minWidth:s=0,minHeight:l,maxHeight:c,children:u,debounce:d=0,id:h,className:m,onResize:p,style:g={}}=e,v=f.useRef(null),y=f.useRef();y.current=p,f.useImperativeHandle(t,()=>v.current);var[b,x]=f.useState({containerWidth:r.width,containerHeight:r.height}),k=f.useCallback((E,C)=>{x($=>{var A=Math.round(E),D=Math.round(C);return $.containerWidth===A&&$.containerHeight===D?$:{containerWidth:A,containerHeight:D}})},[]);f.useEffect(()=>{if(v.current==null||typeof ResizeObserver>"u")return ta;var E=D=>{var _,{width:R,height:z}=D[0].contentRect;k(R,z),(_=y.current)===null||_===void 0||_.call(y,R,z)};d>0&&(E=N1(E,d,{trailing:!0,leading:!1}));var C=new ResizeObserver(E),{width:$,height:A}=v.current.getBoundingClientRect();return k($,A),C.observe(v.current),()=>{C.disconnect()}},[k,d]);var{containerWidth:I,containerHeight:w}=b;id(!n||n>0,"The aspect(%s) must be greater than zero.",n);var{calculatedWidth:T,calculatedHeight:j}=Ug(I,w,{width:a,height:i,aspect:n,maxHeight:c});return id(T!=null&&T>0||j!=null&&j>0,`The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`,T,j,a,i,s,l,n),f.createElement("div",{id:h?"".concat(h):void 0,className:le("recharts-responsive-container",m),style:sd(sd({},g),{},{width:a,height:i,minWidth:s,minHeight:l,maxHeight:c}),ref:v},f.createElement("div",{style:C1({width:a,height:i})},f.createElement(Vg,{width:T,height:j},u)))}),R1=f.forwardRef((e,t)=>{var n=ec();if(hn(n.width)&&hn(n.height))return e.children;var{width:r,height:a}=E1({width:e.width,height:e.height,aspect:e.aspect}),{calculatedWidth:i,calculatedHeight:s}=Ug(void 0,void 0,{width:r,height:a,aspect:e.aspect,maxHeight:e.maxHeight});return U(i)&&U(s)?f.createElement(Vg,{width:i,height:s},e.children):f.createElement(_1,Hs({},e,{width:r,height:a,ref:t}))});function Jg(e){if(e)return{x:e.x,y:e.y,upperWidth:"upperWidth"in e?e.upperWidth:e.width,lowerWidth:"lowerWidth"in e?e.lowerWidth:e.width,width:e.width,height:e.height}}var co=()=>{var e,t=at(),n=V(T1),r=V(lo),a=(e=V(so))===null||e===void 0?void 0:e.padding;return!t||!r||!a?n:{width:r.width-a.left-a.right,height:r.height-a.top-a.bottom,x:a.left,y:a.top}},L1={top:0,bottom:0,left:0,right:0,width:0,height:0,brushBottom:0},W1=()=>{var e;return(e=V(Ce))!==null&&e!==void 0?e:L1},F1=()=>V(Jt),H1=()=>V(Zt),re=e=>e.layout.layoutType,oa=()=>V(re),z1=()=>{var e=oa();return e!==void 0},uo=e=>{var t=ge(),n=at(),{width:r,height:a}=e,i=ec(),s=r,l=a;return i&&(s=i.width>0?i.width:r,l=i.height>0?i.height:a),f.useEffect(()=>{!n&&hn(s)&&hn(l)&&t(Gk({width:s,height:l}))},[t,n,s,l]),null},Zg=Symbol.for("immer-nothing"),ld=Symbol.for("immer-draftable"),rt=Symbol.for("immer-state");function vt(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Fr=Object.getPrototypeOf;function ir(e){return!!e&&!!e[rt]}function Cn(e){var t;return e?Xg(e)||Array.isArray(e)||!!e[ld]||!!((t=e.constructor)!=null&&t[ld])||sa(e)||mo(e):!1}var Y1=Object.prototype.constructor.toString(),cd=new WeakMap;function Xg(e){if(!e||typeof e!="object")return!1;const t=Object.getPrototypeOf(e);if(t===null||t===Object.prototype)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;if(n===Object)return!0;if(typeof n!="function")return!1;let r=cd.get(n);return r===void 0&&(r=Function.toString.call(n),cd.set(n,r)),r===Y1}function ci(e,t,n=!0){ho(e)===0?(n?Reflect.ownKeys(e):Object.keys(e)).forEach(a=>{t(a,e[a],e)}):e.forEach((r,a)=>t(a,r,e))}function ho(e){const t=e[rt];return t?t.type_:Array.isArray(e)?1:sa(e)?2:mo(e)?3:0}function zs(e,t){return ho(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function Qg(e,t,n){const r=ho(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function q1(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function sa(e){return e instanceof Map}function mo(e){return e instanceof Set}function bn(e){return e.copy_||e.base_}function Ys(e,t){if(sa(e))return new Map(e);if(mo(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const n=Xg(e);if(t===!0||t==="class_only"&&!n){const r=Object.getOwnPropertyDescriptors(e);delete r[rt];let a=Reflect.ownKeys(r);for(let i=0;i<a.length;i++){const s=a[i],l=r[s];l.writable===!1&&(l.writable=!0,l.configurable=!0),(l.get||l.set)&&(r[s]={configurable:!0,writable:!0,enumerable:l.enumerable,value:e[s]})}return Object.create(Fr(e),r)}else{const r=Fr(e);if(r!==null&&n)return{...e};const a=Object.create(r);return Object.assign(a,e)}}function tc(e,t=!1){return po(e)||ir(e)||!Cn(e)||(ho(e)>1&&Object.defineProperties(e,{set:Ea,add:Ea,clear:Ea,delete:Ea}),Object.freeze(e),t&&Object.values(e).forEach(n=>tc(n,!0))),e}function G1(){vt(2)}var Ea={value:G1};function po(e){return e===null||typeof e!="object"?!0:Object.isFrozen(e)}var U1={};function En(e){const t=U1[e];return t||vt(0,e),t}var Hr;function ef(){return Hr}function K1(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function ud(e,t){t&&(En("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function qs(e){Gs(e),e.drafts_.forEach(V1),e.drafts_=null}function Gs(e){e===Hr&&(Hr=e.parent_)}function dd(e){return Hr=K1(Hr,e)}function V1(e){const t=e[rt];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function hd(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return e!==void 0&&e!==n?(n[rt].modified_&&(qs(t),vt(4)),Cn(e)&&(e=ui(t,e),t.parent_||di(t,e)),t.patches_&&En("Patches").generateReplacementPatches_(n[rt].base_,e,t.patches_,t.inversePatches_)):e=ui(t,n,[]),qs(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==Zg?e:void 0}function ui(e,t,n){if(po(t))return t;const r=e.immer_.shouldUseStrictIteration(),a=t[rt];if(!a)return ci(t,(i,s)=>md(e,a,t,i,s,n),r),t;if(a.scope_!==e)return t;if(!a.modified_)return di(e,a.base_,!0),a.base_;if(!a.finalized_){a.finalized_=!0,a.scope_.unfinalizedDrafts_--;const i=a.copy_;let s=i,l=!1;a.type_===3&&(s=new Set(i),i.clear(),l=!0),ci(s,(c,u)=>md(e,a,i,c,u,n,l),r),di(e,i,!1),n&&e.patches_&&En("Patches").generatePatches_(a,n,e.patches_,e.inversePatches_)}return a.copy_}function md(e,t,n,r,a,i,s){if(a==null||typeof a!="object"&&!s)return;const l=po(a);if(!(l&&!s)){if(ir(a)){const c=i&&t&&t.type_!==3&&!zs(t.assigned_,r)?i.concat(r):void 0,u=ui(e,a,c);if(Qg(n,r,u),ir(u))e.canAutoFreeze_=!1;else return}else s&&n.add(a);if(Cn(a)&&!l){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1||t&&t.base_&&t.base_[r]===a&&l)return;ui(e,a),(!t||!t.scope_.parent_)&&typeof r!="symbol"&&(sa(n)?n.has(r):Object.prototype.propertyIsEnumerable.call(n,r))&&di(e,a)}}}function di(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&tc(t,n)}function J1(e,t){const n=Array.isArray(e),r={type_:n?1:0,scope_:t?t.scope_:ef(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let a=r,i=nc;n&&(a=[r],i=zr);const{revoke:s,proxy:l}=Proxy.revocable(a,i);return r.draft_=l,r.revoke_=s,l}var nc={get(e,t){if(t===rt)return e;const n=bn(e);if(!zs(n,t))return Z1(e,n,t);const r=n[t];return e.finalized_||!Cn(r)?r:r===es(e.base_,t)?(ts(e),e.copy_[t]=Ks(r,e)):r},has(e,t){return t in bn(e)},ownKeys(e){return Reflect.ownKeys(bn(e))},set(e,t,n){const r=tf(bn(e),t);if(r!=null&&r.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const a=es(bn(e),t),i=a==null?void 0:a[rt];if(i&&i.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(q1(n,a)&&(n!==void 0||zs(e.base_,t)))return!0;ts(e),Us(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty(e,t){return es(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,ts(e),Us(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=bn(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty(){vt(11)},getPrototypeOf(e){return Fr(e.base_)},setPrototypeOf(){vt(12)}},zr={};ci(nc,(e,t)=>{zr[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});zr.deleteProperty=function(e,t){return zr.set.call(this,e,t,void 0)};zr.set=function(e,t,n){return nc.set.call(this,e[0],t,n,e[0])};function es(e,t){const n=e[rt];return(n?bn(n):e)[t]}function Z1(e,t,n){var a;const r=tf(t,n);return r?"value"in r?r.value:(a=r.get)==null?void 0:a.call(e.draft_):void 0}function tf(e,t){if(!(t in e))return;let n=Fr(e);for(;n;){const r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Fr(n)}}function Us(e){e.modified_||(e.modified_=!0,e.parent_&&Us(e.parent_))}function ts(e){e.copy_||(e.copy_=Ys(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var X1=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!0,this.produce=(t,n,r)=>{if(typeof t=="function"&&typeof n!="function"){const i=n;n=t;const s=this;return function(c=i,...u){return s.produce(c,d=>n.call(this,d,...u))}}typeof n!="function"&&vt(6),r!==void 0&&typeof r!="function"&&vt(7);let a;if(Cn(t)){const i=dd(this),s=Ks(t,void 0);let l=!0;try{a=n(s),l=!1}finally{l?qs(i):Gs(i)}return ud(i,r),hd(a,i)}else if(!t||typeof t!="object"){if(a=n(t),a===void 0&&(a=t),a===Zg&&(a=void 0),this.autoFreeze_&&tc(a,!0),r){const i=[],s=[];En("Patches").generateReplacementPatches_(t,a,i,s),r(i,s)}return a}else vt(1,t)},this.produceWithPatches=(t,n)=>{if(typeof t=="function")return(s,...l)=>this.produceWithPatches(s,c=>t(c,...l));let r,a;return[this.produce(t,n,(s,l)=>{r=s,a=l}),r,a]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),typeof(e==null?void 0:e.useStrictIteration)=="boolean"&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){Cn(e)||vt(8),ir(e)&&(e=Q1(e));const t=dd(this),n=Ks(e,void 0);return n[rt].isManual_=!0,Gs(t),n}finishDraft(e,t){const n=e&&e[rt];(!n||!n.isManual_)&&vt(9);const{scope_:r}=n;return ud(r,t),hd(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const a=t[n];if(a.path.length===0&&a.op==="replace"){e=a.value;break}}n>-1&&(t=t.slice(n+1));const r=En("Patches").applyPatches_;return ir(e)?r(e,t):this.produce(e,a=>r(a,t))}};function Ks(e,t){const n=sa(e)?En("MapSet").proxyMap_(e,t):mo(e)?En("MapSet").proxySet_(e,t):J1(e,t);return(t?t.scope_:ef()).drafts_.push(n),n}function Q1(e){return ir(e)||vt(10,e),nf(e)}function nf(e){if(!Cn(e)||po(e))return e;const t=e[rt];let n,r=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=Ys(e,t.scope_.immer_.useStrictShallowCopy_),r=t.scope_.immer_.shouldUseStrictIteration()}else n=Ys(e,!0);return ci(n,(a,i)=>{Qg(n,a,nf(i))},r),t&&(t.finalized_=!1),n}var eT=new X1;eT.produce;var tT={settings:{layout:"horizontal",align:"center",verticalAlign:"middle",itemSorter:"value"},size:{width:0,height:0},payload:[]},rf=Ze({name:"legend",initialState:tT,reducers:{setLegendSize(e,t){e.size.width=t.payload.width,e.size.height=t.payload.height},setLegendSettings(e,t){e.settings.align=t.payload.align,e.settings.layout=t.payload.layout,e.settings.verticalAlign=t.payload.verticalAlign,e.settings.itemSorter=t.payload.itemSorter},addLegendPayload:{reducer(e,t){e.payload.push(t.payload)},prepare:ce()},replaceLegendPayload:{reducer(e,t){var{prev:n,next:r}=t.payload,a=xt(e).payload.indexOf(n);a>-1&&(e.payload[a]=r)},prepare:ce()},removeLegendPayload:{reducer(e,t){var n=xt(e).payload.indexOf(t.payload);n>-1&&e.payload.splice(n,1)},prepare:ce()}}}),{setLegendSize:_$,setLegendSettings:R$,addLegendPayload:nT,replaceLegendPayload:rT,removeLegendPayload:aT}=rf.actions,iT=rf.reducer;function Vs(){return Vs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vs.apply(null,arguments)}function pd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ns(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?pd(Object(n),!0).forEach(function(r){oT(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function oT(e,t,n){return(t=sT(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function sT(e){var t=lT(e,"string");return typeof t=="symbol"?t:t+""}function lT(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function cT(e){return Array.isArray(e)&&Et(e[0])&&Et(e[1])?e.join(" ~ "):e}var uT=e=>{var{separator:t=" : ",contentStyle:n={},itemStyle:r={},labelStyle:a={},payload:i,formatter:s,itemSorter:l,wrapperClassName:c,labelClassName:u,label:d,labelFormatter:h,accessibilityLayer:m=!1}=e,p=()=>{if(i&&i.length){var w={padding:0,margin:0},T=(l?Ji(i,l):i).map((j,E)=>{if(j.type==="none")return null;var C=j.formatter||s||cT,{value:$,name:A}=j,D=$,_=A;if(C){var R=C($,A,j,E,i);if(Array.isArray(R))[D,_]=R;else if(R!=null)D=R;else return null}var z=ns({display:"block",paddingTop:4,paddingBottom:4,color:j.color||"#000"},r);return f.createElement("li",{className:"recharts-tooltip-item",key:"tooltip-item-".concat(E),style:z},Et(_)?f.createElement("span",{className:"recharts-tooltip-item-name"},_):null,Et(_)?f.createElement("span",{className:"recharts-tooltip-item-separator"},t):null,f.createElement("span",{className:"recharts-tooltip-item-value"},D),f.createElement("span",{className:"recharts-tooltip-item-unit"},j.unit||""))});return f.createElement("ul",{className:"recharts-tooltip-item-list",style:w},T)}return null},g=ns({margin:0,padding:10,backgroundColor:"#fff",border:"1px solid #ccc",whiteSpace:"nowrap"},n),v=ns({margin:0},a),y=!Oe(d),b=y?d:"",x=le("recharts-default-tooltip",c),k=le("recharts-tooltip-label",u);y&&h&&i!==void 0&&i!==null&&(b=h(d,i));var I=m?{role:"status","aria-live":"assertive"}:{};return f.createElement("div",Vs({className:x,style:g},I),f.createElement("p",{className:k,style:v},f.isValidElement(b)?b:"".concat(b)),p())},Ir="recharts-tooltip-wrapper",dT={visibility:"hidden"};function hT(e){var{coordinate:t,translateX:n,translateY:r}=e;return le(Ir,{["".concat(Ir,"-right")]:U(n)&&t&&U(t.x)&&n>=t.x,["".concat(Ir,"-left")]:U(n)&&t&&U(t.x)&&n<t.x,["".concat(Ir,"-bottom")]:U(r)&&t&&U(t.y)&&r>=t.y,["".concat(Ir,"-top")]:U(r)&&t&&U(t.y)&&r<t.y})}function gd(e){var{allowEscapeViewBox:t,coordinate:n,key:r,offsetTopLeft:a,position:i,reverseDirection:s,tooltipDimension:l,viewBox:c,viewBoxDimension:u}=e;if(i&&U(i[r]))return i[r];var d=n[r]-l-(a>0?a:0),h=n[r]+a;if(t[r])return s[r]?d:h;var m=c[r];if(m==null)return 0;if(s[r]){var p=d,g=m;return p<g?Math.max(h,m):Math.max(d,m)}if(u==null)return 0;var v=h+l,y=m+u;return v>y?Math.max(d,m):Math.max(h,m)}function mT(e){var{translateX:t,translateY:n,useTranslate3d:r}=e;return{transform:r?"translate3d(".concat(t,"px, ").concat(n,"px, 0)"):"translate(".concat(t,"px, ").concat(n,"px)")}}function pT(e){var{allowEscapeViewBox:t,coordinate:n,offsetTopLeft:r,position:a,reverseDirection:i,tooltipBox:s,useTranslate3d:l,viewBox:c}=e,u,d,h;return s.height>0&&s.width>0&&n?(d=gd({allowEscapeViewBox:t,coordinate:n,key:"x",offsetTopLeft:r,position:a,reverseDirection:i,tooltipDimension:s.width,viewBox:c,viewBoxDimension:c.width}),h=gd({allowEscapeViewBox:t,coordinate:n,key:"y",offsetTopLeft:r,position:a,reverseDirection:i,tooltipDimension:s.height,viewBox:c,viewBoxDimension:c.height}),u=mT({translateX:d,translateY:h,useTranslate3d:l})):u=dT,{cssProperties:u,cssClasses:hT({translateX:d,translateY:h,coordinate:n})}}function fd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ma(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?fd(Object(n),!0).forEach(function(r){Js(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Js(e,t,n){return(t=gT(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function gT(e){var t=fT(e,"string");return typeof t=="symbol"?t:t+""}function fT(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}class yT extends f.PureComponent{constructor(){super(...arguments),Js(this,"state",{dismissed:!1,dismissedAtCoordinate:{x:0,y:0}}),Js(this,"handleKeyDown",t=>{if(t.key==="Escape"){var n,r,a,i;this.setState({dismissed:!0,dismissedAtCoordinate:{x:(n=(r=this.props.coordinate)===null||r===void 0?void 0:r.x)!==null&&n!==void 0?n:0,y:(a=(i=this.props.coordinate)===null||i===void 0?void 0:i.y)!==null&&a!==void 0?a:0}})}})}componentDidMount(){document.addEventListener("keydown",this.handleKeyDown)}componentWillUnmount(){document.removeEventListener("keydown",this.handleKeyDown)}componentDidUpdate(){var t,n;this.state.dismissed&&(((t=this.props.coordinate)===null||t===void 0?void 0:t.x)!==this.state.dismissedAtCoordinate.x||((n=this.props.coordinate)===null||n===void 0?void 0:n.y)!==this.state.dismissedAtCoordinate.y)&&(this.state.dismissed=!1)}render(){var{active:t,allowEscapeViewBox:n,animationDuration:r,animationEasing:a,children:i,coordinate:s,hasPayload:l,isAnimationActive:c,offset:u,position:d,reverseDirection:h,useTranslate3d:m,viewBox:p,wrapperStyle:g,lastBoundingBox:v,innerRef:y,hasPortalFromProps:b}=this.props,{cssClasses:x,cssProperties:k}=pT({allowEscapeViewBox:n,coordinate:s,offsetTopLeft:u,position:d,reverseDirection:h,tooltipBox:{height:v.height,width:v.width},useTranslate3d:m,viewBox:p}),I=b?{}:Ma(Ma({transition:c&&t?"transform ".concat(r,"ms ").concat(a):void 0},k),{},{pointerEvents:"none",visibility:!this.state.dismissed&&t&&l?"visible":"hidden",position:"absolute",top:0,left:0}),w=Ma(Ma({},I),{},{visibility:!this.state.dismissed&&t&&l?"visible":"hidden"},g);return f.createElement("div",{xmlns:"http://www.w3.org/1999/xhtml",tabIndex:-1,className:x,style:w,ref:y},i)}}var af=()=>{var e;return(e=V(t=>t.rootProps.accessibilityLayer))!==null&&e!==void 0?e:!0};function Zs(){return Zs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zs.apply(null,arguments)}function yd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function vd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?yd(Object(n),!0).forEach(function(r){vT(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function vT(e,t,n){return(t=bT(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function bT(e){var t=wT(e,"string");return typeof t=="symbol"?t:t+""}function wT(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var bd={curveBasisClosed:Pw,curveBasisOpen:Ow,curveBasis:Sw,curveBumpX:pw,curveBumpY:gw,curveLinearClosed:Cw,curveLinear:zi,curveMonotoneX:Ew,curveMonotoneY:Mw,curveNatural:$w,curveStep:Dw,curveStepAfter:_w,curveStepBefore:Bw},hi=e=>de(e.x)&&de(e.y),wd=e=>e.base!=null&&hi(e.base)&&hi(e),jr=e=>e.x,Nr=e=>e.y,xT=(e,t)=>{if(typeof e=="function")return e;var n="curve".concat(ea(e));return(n==="curveMonotone"||n==="curveBump")&&t?bd["".concat(n).concat(t==="vertical"?"Y":"X")]:bd[n]||zi},kT=e=>{var{type:t="linear",points:n=[],baseLine:r,layout:a,connectNulls:i=!1}=e,s=xT(t,a),l=i?n.filter(hi):n,c;if(Array.isArray(r)){var u=n.map((p,g)=>vd(vd({},p),{},{base:r[g]}));a==="vertical"?c=ja().y(Nr).x1(jr).x0(p=>p.base.x):c=ja().x(jr).y1(Nr).y0(p=>p.base.y);var d=c.defined(wd).curve(s),h=i?u.filter(wd):u;return d(h)}a==="vertical"&&U(r)?c=ja().y(Nr).x1(jr).x0(r):U(r)?c=ja().x(jr).y1(Nr).y0(r):c=xp().x(jr).y(Nr);var m=c.defined(hi).curve(s);return m(l)},of=e=>{var{className:t,points:n,path:r,pathRef:a}=e,i=oa();if((!n||!n.length)&&!r)return null;var s={type:e.type,points:e.points,baseLine:e.baseLine,layout:e.layout||i,connectNulls:e.connectNulls},l=n&&n.length?kT(s):r;return f.createElement("path",Zs({},dn(e),ix(e),{className:le("recharts-curve",t),d:l===null?void 0:l,ref:a}))},TT=["x","y","top","left","width","height","className"];function Xs(){return Xs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xs.apply(null,arguments)}function xd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function IT(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?xd(Object(n),!0).forEach(function(r){jT(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):xd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function jT(e,t,n){return(t=NT(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function NT(e){var t=AT(e,"string");return typeof t=="symbol"?t:t+""}function AT(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ST(e,t){if(e==null)return{};var n,r,a=PT(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function PT(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}var OT=(e,t,n,r,a,i)=>"M".concat(e,",").concat(a,"v").concat(r,"M").concat(i,",").concat(t,"h").concat(n),CT=e=>{var{x:t=0,y:n=0,top:r=0,left:a=0,width:i=0,height:s=0,className:l}=e,c=ST(e,TT),u=IT({x:t,y:n,top:r,left:a,width:i,height:s},c);return!U(t)||!U(n)||!U(i)||!U(s)||!U(r)||!U(a)?null:f.createElement("path",Xs({},dt(u),{className:le("recharts-cross",l),d:OT(t,n,i,s,r,a)}))};function ET(e,t,n,r){var a=r/2;return{stroke:"none",fill:"#ccc",x:e==="horizontal"?t.x-a:n.left+.5,y:e==="horizontal"?n.top+.5:t.y-a,width:e==="horizontal"?r:n.width-1,height:e==="horizontal"?n.height-1:r}}function kd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Td(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?kd(Object(n),!0).forEach(function(r){MT(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):kd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function MT(e,t,n){return(t=$T(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $T(e){var t=DT(e,"string");return typeof t=="symbol"?t:t+""}function DT(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var BT=e=>e.replace(/([A-Z])/g,t=>"-".concat(t.toLowerCase())),sf=(e,t,n)=>e.map(r=>"".concat(BT(r)," ").concat(t,"ms ").concat(n)).join(","),_T=(e,t)=>[Object.keys(e),Object.keys(t)].reduce((n,r)=>n.filter(a=>r.includes(a))),Yr=(e,t)=>Object.keys(t).reduce((n,r)=>Td(Td({},n),{},{[r]:e(r,t[r])}),{});function Id(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function be(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Id(Object(n),!0).forEach(function(r){RT(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Id(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function RT(e,t,n){return(t=LT(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function LT(e){var t=WT(e,"string");return typeof t=="symbol"?t:t+""}function WT(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var mi=(e,t,n)=>e+(t-e)*n,Qs=e=>{var{from:t,to:n}=e;return t!==n},lf=(e,t,n)=>{var r=Yr((a,i)=>{if(Qs(i)){var[s,l]=e(i.from,i.to,i.velocity);return be(be({},i),{},{from:s,velocity:l})}return i},t);return n<1?Yr((a,i)=>Qs(i)&&r[a]!=null?be(be({},i),{},{velocity:mi(i.velocity,r[a].velocity,n),from:mi(i.from,r[a].from,n)}):i,t):lf(e,r,n-1)};function FT(e,t,n,r,a,i){var s,l=r.reduce((m,p)=>be(be({},m),{},{[p]:{from:e[p],velocity:0,to:t[p]}}),{}),c=()=>Yr((m,p)=>p.from,l),u=()=>!Object.values(l).filter(Qs).length,d=null,h=m=>{s||(s=m);var p=m-s,g=p/n.dt;l=lf(n,l,g),a(be(be(be({},e),t),c())),s=m,u()||(d=i.setTimeout(h))};return()=>(d=i.setTimeout(h),()=>{var m;(m=d)===null||m===void 0||m()})}function HT(e,t,n,r,a,i,s){var l=null,c=a.reduce((h,m)=>{var p=e[m],g=t[m];return p==null||g==null?h:be(be({},h),{},{[m]:[p,g]})},{}),u,d=h=>{u||(u=h);var m=(h-u)/r,p=Yr((v,y)=>mi(...y,n(m)),c);if(i(be(be(be({},e),t),p)),m<1)l=s.setTimeout(d);else{var g=Yr((v,y)=>mi(...y,n(1)),c);i(be(be(be({},e),t),g))}};return()=>(l=s.setTimeout(d),()=>{var h;(h=l)===null||h===void 0||h()})}const zT=(e,t,n,r,a,i)=>{var s=_T(e,t);return n==null?()=>(a(be(be({},e),t)),()=>{}):n.isStepper===!0?FT(e,t,n,s,a,i):HT(e,t,n,r,s,a,i)};var pi=1e-4,cf=(e,t)=>[0,3*e,3*t-6*e,3*e-3*t+1],uf=(e,t)=>e.map((n,r)=>n*t**r).reduce((n,r)=>n+r),jd=(e,t)=>n=>{var r=cf(e,t);return uf(r,n)},YT=(e,t)=>n=>{var r=cf(e,t),a=[...r.map((i,s)=>i*s).slice(1),0];return uf(a,n)},qT=e=>{var t,n=e.split("(");if(n.length!==2||n[0]!=="cubic-bezier")return null;var r=(t=n[1])===null||t===void 0||(t=t.split(")")[0])===null||t===void 0?void 0:t.split(",");if(r==null||r.length!==4)return null;var a=r.map(i=>parseFloat(i));return[a[0],a[1],a[2],a[3]]},GT=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];if(n.length===1)switch(n[0]){case"linear":return[0,0,1,1];case"ease":return[.25,.1,.25,1];case"ease-in":return[.42,0,1,1];case"ease-out":return[.42,0,.58,1];case"ease-in-out":return[0,0,.58,1];default:{var a=qT(n[0]);if(a)return a}}return n.length===4?n:[0,0,1,1]},UT=(e,t,n,r)=>{var a=jd(e,n),i=jd(t,r),s=YT(e,n),l=u=>u>1?1:u<0?0:u,c=u=>{for(var d=u>1?1:u,h=d,m=0;m<8;++m){var p=a(h)-d,g=s(h);if(Math.abs(p-d)<pi||g<pi)return i(h);h=l(h-p/g)}return i(h)};return c.isStepper=!1,c},Nd=function(){return UT(...GT(...arguments))},KT=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{stiff:n=100,damping:r=8,dt:a=17}=t,i=(s,l,c)=>{var u=-(s-l)*n,d=c*r,h=c+(u-d)*a/1e3,m=c*a/1e3+s;return Math.abs(m-l)<pi&&Math.abs(h)<pi?[l,0]:[m,h]};return i.isStepper=!0,i.dt=a,i},VT=e=>{if(typeof e=="string")switch(e){case"ease":case"ease-in-out":case"ease-out":case"ease-in":case"linear":return Nd(e);case"spring":return KT();default:if(e.split("(")[0]==="cubic-bezier")return Nd(e)}return typeof e=="function"?e:null};function JT(e){var t,n=()=>null,r=!1,a=null,i=s=>{if(!r){if(Array.isArray(s)){if(!s.length)return;var l=s,[c,...u]=l;if(typeof c=="number"){a=e.setTimeout(i.bind(null,u),c);return}i(c),a=e.setTimeout(i.bind(null,u));return}typeof s=="string"&&(t=s,n(t)),typeof s=="object"&&(t=s,n(t)),typeof s=="function"&&s()}};return{stop:()=>{r=!0},start:s=>{r=!1,a&&(a(),a=null),i(s)},subscribe:s=>(n=s,()=>{n=()=>null}),getTimeoutController:()=>e}}class ZT{setTimeout(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=performance.now(),a=null,i=s=>{s-r>=n?t(s):typeof requestAnimationFrame=="function"&&(a=requestAnimationFrame(i))};return a=requestAnimationFrame(i),()=>{a!=null&&cancelAnimationFrame(a)}}}function XT(){return JT(new ZT)}var QT=f.createContext(XT);function e2(e,t){var n=f.useContext(QT);return f.useMemo(()=>t??n(e),[e,t,n])}var t2=()=>!(typeof window<"u"&&window.document&&window.document.createElement&&window.setTimeout),go={devToolsEnabled:!0,isSsr:t2()},n2={begin:0,duration:1e3,easing:"ease",isActive:!0,canBegin:!0,onAnimationEnd:()=>{},onAnimationStart:()=>{}},Ad={t:0},rs={t:1};function rc(e){var t=pt(e,n2),{isActive:n,canBegin:r,duration:a,easing:i,begin:s,onAnimationEnd:l,onAnimationStart:c,children:u}=t,d=n==="auto"?!go.isSsr:n,h=e2(t.animationId,t.animationManager),[m,p]=f.useState(d?Ad:rs),g=f.useRef(null);return f.useEffect(()=>{d||p(rs)},[d]),f.useEffect(()=>{if(!d||!r)return ta;var v=zT(Ad,rs,VT(i),a,p,h.getTimeoutController()),y=()=>{g.current=v()};return h.start([c,s,y,a,l]),()=>{h.stop(),g.current&&g.current(),l()}},[d,r,a,i,s,c,l,h]),u(m.t)}function ac(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"animation-",n=f.useRef(_r(t)),r=f.useRef(e);return r.current!==e&&(n.current=_r(t),r.current=e),n.current}var r2=["radius"],a2=["radius"],Sd,Pd,Od,Cd,Ed,Md,$d,Dd,Bd,_d;function Rd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ld(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Rd(Object(n),!0).forEach(function(r){i2(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Rd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function i2(e,t,n){return(t=o2(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o2(e){var t=s2(e,"string");return typeof t=="symbol"?t:t+""}function s2(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function gi(){return gi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gi.apply(null,arguments)}function Wd(e,t){if(e==null)return{};var n,r,a=l2(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function l2(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function At(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var Fd=(e,t,n,r,a)=>{var i=ln(n),s=ln(r),l=Math.min(Math.abs(i)/2,Math.abs(s)/2),c=s>=0?1:-1,u=i>=0?1:-1,d=s>=0&&i>=0||s<0&&i<0?1:0,h;if(l>0&&a instanceof Array){for(var m=[0,0,0,0],p=0,g=4;p<g;p++)m[p]=a[p]>l?l:a[p];h=me(Sd||(Sd=At(["M",",",""])),e,t+c*m[0]),m[0]>0&&(h+=me(Pd||(Pd=At(["A ",",",",0,0,",",",",",""])),m[0],m[0],d,e+u*m[0],t)),h+=me(Od||(Od=At(["L ",",",""])),e+n-u*m[1],t),m[1]>0&&(h+=me(Cd||(Cd=At(["A ",",",",0,0,",`,
        `,",",""])),m[1],m[1],d,e+n,t+c*m[1])),h+=me(Ed||(Ed=At(["L ",",",""])),e+n,t+r-c*m[2]),m[2]>0&&(h+=me(Md||(Md=At(["A ",",",",0,0,",`,
        `,",",""])),m[2],m[2],d,e+n-u*m[2],t+r)),h+=me($d||($d=At(["L ",",",""])),e+u*m[3],t+r),m[3]>0&&(h+=me(Dd||(Dd=At(["A ",",",",0,0,",`,
        `,",",""])),m[3],m[3],d,e,t+r-c*m[3])),h+="Z"}else if(l>0&&a===+a&&a>0){var v=Math.min(l,a);h=me(Bd||(Bd=At(["M ",",",`
            A `,",",",0,0,",",",",",`
            L `,",",`
            A `,",",",0,0,",",",",",`
            L `,",",`
            A `,",",",0,0,",",",",",`
            L `,",",`
            A `,",",",0,0,",",",","," Z"])),e,t+c*v,v,v,d,e+u*v,t,e+n-u*v,t,v,v,d,e+n,t+c*v,e+n,t+r-c*v,v,v,d,e+n-u*v,t+r,e+u*v,t+r,v,v,d,e,t+r-c*v)}else h=me(_d||(_d=At(["M ",","," h "," v "," h "," Z"])),e,t,n,r,-n);return h},Hd={x:0,y:0,width:0,height:0,radius:0,isAnimationActive:!1,isUpdateAnimationActive:!1,animationBegin:0,animationDuration:1500,animationEasing:"ease"},df=e=>{var t=pt(e,Hd),n=f.useRef(null),[r,a]=f.useState(-1);f.useEffect(()=>{if(n.current&&n.current.getTotalLength)try{var K=n.current.getTotalLength();K&&a(K)}catch{}},[]);var{x:i,y:s,width:l,height:c,radius:u,className:d}=t,{animationEasing:h,animationDuration:m,animationBegin:p,isAnimationActive:g,isUpdateAnimationActive:v}=t,y=f.useRef(l),b=f.useRef(c),x=f.useRef(i),k=f.useRef(s),I=f.useMemo(()=>({x:i,y:s,width:l,height:c,radius:u}),[i,s,l,c,u]),w=ac(I,"rectangle-");if(i!==+i||s!==+s||l!==+l||c!==+c||l===0||c===0)return null;var T=le("recharts-rectangle",d);if(!v){var j=dt(t),E=Wd(j,r2);return f.createElement("path",gi({},E,{x:ln(i),y:ln(s),width:ln(l),height:ln(c),radius:typeof u=="number"?u:void 0,className:T,d:Fd(i,s,l,c,u)}))}var C=y.current,$=b.current,A=x.current,D=k.current,_="0px ".concat(r===-1?1:r,"px"),R="".concat(r,"px 0px"),z=sf(["strokeDasharray"],m,typeof h=="string"?h:Hd.animationEasing);return f.createElement(rc,{animationId:w,key:w,canBegin:r>0,duration:m,easing:h,isActive:v,begin:p},K=>{var Y=De(C,l,K),Z=De($,c,K),q=De(A,i,K),te=De(D,s,K);n.current&&(y.current=Y,b.current=Z,x.current=q,k.current=te);var he;g?K>0?he={transition:z,strokeDasharray:R}:he={strokeDasharray:_}:he={strokeDasharray:R};var Ie=dt(t),ze=Wd(Ie,a2);return f.createElement("path",gi({},ze,{radius:typeof u=="number"?u:void 0,className:T,d:Fd(q,te,Y,Z,u),ref:n,style:Ld(Ld({},he),t.style)}))})};function zd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Yd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?zd(Object(n),!0).forEach(function(r){c2(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):zd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function c2(e,t,n){return(t=u2(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u2(e){var t=d2(e,"string");return typeof t=="symbol"?t:t+""}function d2(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var fi=Math.PI/180,h2=e=>e*180/Math.PI,Be=(e,t,n,r)=>({x:e+Math.cos(-fi*r)*n,y:t+Math.sin(-fi*r)*n}),m2=function(t,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{top:0,right:0,bottom:0,left:0,width:0,height:0,brushBottom:0};return Math.min(Math.abs(t-(r.left||0)-(r.right||0)),Math.abs(n-(r.top||0)-(r.bottom||0)))/2},p2=(e,t)=>{var{x:n,y:r}=e,{x:a,y:i}=t;return Math.sqrt((n-a)**2+(r-i)**2)},g2=(e,t)=>{var{x:n,y:r}=e,{cx:a,cy:i}=t,s=p2({x:n,y:r},{x:a,y:i});if(s<=0)return{radius:s,angle:0};var l=(n-a)/s,c=Math.acos(l);return r>i&&(c=2*Math.PI-c),{radius:s,angle:h2(c),angleInRadian:c}},f2=e=>{var{startAngle:t,endAngle:n}=e,r=Math.floor(t/360),a=Math.floor(n/360),i=Math.min(r,a);return{startAngle:t-i*360,endAngle:n-i*360}},y2=(e,t)=>{var{startAngle:n,endAngle:r}=t,a=Math.floor(n/360),i=Math.floor(r/360),s=Math.min(a,i);return e+s*360},v2=(e,t)=>{var{chartX:n,chartY:r}=e,{radius:a,angle:i}=g2({x:n,y:r},t),{innerRadius:s,outerRadius:l}=t;if(a<s||a>l||a===0)return null;var{startAngle:c,endAngle:u}=f2(t),d=i,h;if(c<=u){for(;d>u;)d-=360;for(;d<c;)d+=360;h=d>=c&&d<=u}else{for(;d>c;)d-=360;for(;d<u;)d+=360;h=d>=u&&d<=c}return h?Yd(Yd({},t),{},{radius:a,angle:y2(d,t)}):null};function hf(e){var{cx:t,cy:n,radius:r,startAngle:a,endAngle:i}=e,s=Be(t,n,r,a),l=Be(t,n,r,i);return{points:[s,l],cx:t,cy:n,radius:r,startAngle:a,endAngle:i}}var qd,Gd,Ud,Kd,Vd,Jd,Zd;function el(){return el=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},el.apply(null,arguments)}function kn(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var b2=(e,t)=>{var n=et(t-e),r=Math.min(Math.abs(t-e),359.999);return n*r},$a=e=>{var{cx:t,cy:n,radius:r,angle:a,sign:i,isExternal:s,cornerRadius:l,cornerIsExternal:c}=e,u=l*(s?1:-1)+r,d=Math.asin(l/u)/fi,h=c?a:a+i*d,m=Be(t,n,u,h),p=Be(t,n,r,h),g=c?a-i*d:a,v=Be(t,n,u*Math.cos(d*fi),g);return{center:m,circleTangency:p,lineTangency:v,theta:d}},mf=e=>{var{cx:t,cy:n,innerRadius:r,outerRadius:a,startAngle:i,endAngle:s}=e,l=b2(i,s),c=i+l,u=Be(t,n,a,i),d=Be(t,n,a,c),h=me(qd||(qd=kn(["M ",",",`
    A `,",",`,0,
    `,",",`,
    `,",",`
  `])),u.x,u.y,a,a,+(Math.abs(l)>180),+(i>c),d.x,d.y);if(r>0){var m=Be(t,n,r,i),p=Be(t,n,r,c);h+=me(Gd||(Gd=kn(["L ",",",`
            A `,",",`,0,
            `,",",`,
            `,","," Z"])),p.x,p.y,r,r,+(Math.abs(l)>180),+(i<=c),m.x,m.y)}else h+=me(Ud||(Ud=kn(["L ",","," Z"])),t,n);return h},w2=e=>{var{cx:t,cy:n,innerRadius:r,outerRadius:a,cornerRadius:i,forceCornerRadius:s,cornerIsExternal:l,startAngle:c,endAngle:u}=e,d=et(u-c),{circleTangency:h,lineTangency:m,theta:p}=$a({cx:t,cy:n,radius:a,angle:c,sign:d,cornerRadius:i,cornerIsExternal:l}),{circleTangency:g,lineTangency:v,theta:y}=$a({cx:t,cy:n,radius:a,angle:u,sign:-d,cornerRadius:i,cornerIsExternal:l}),b=l?Math.abs(c-u):Math.abs(c-u)-p-y;if(b<0)return s?me(Kd||(Kd=kn(["M ",",",`
        a`,",",",0,0,1,",`,0
        a`,",",",0,0,1,",`,0
      `])),m.x,m.y,i,i,i*2,i,i,-i*2):mf({cx:t,cy:n,innerRadius:r,outerRadius:a,startAngle:c,endAngle:u});var x=me(Vd||(Vd=kn(["M ",",",`
    A`,",",",0,0,",",",",",`
    A`,",",",0,",",",",",",",`
    A`,",",",0,0,",",",",",`
  `])),m.x,m.y,i,i,+(d<0),h.x,h.y,a,a,+(b>180),+(d<0),g.x,g.y,i,i,+(d<0),v.x,v.y);if(r>0){var{circleTangency:k,lineTangency:I,theta:w}=$a({cx:t,cy:n,radius:r,angle:c,sign:d,isExternal:!0,cornerRadius:i,cornerIsExternal:l}),{circleTangency:T,lineTangency:j,theta:E}=$a({cx:t,cy:n,radius:r,angle:u,sign:-d,isExternal:!0,cornerRadius:i,cornerIsExternal:l}),C=l?Math.abs(c-u):Math.abs(c-u)-w-E;if(C<0&&i===0)return"".concat(x,"L").concat(t,",").concat(n,"Z");x+=me(Jd||(Jd=kn(["L",",",`
      A`,",",",0,0,",",",",",`
      A`,",",",0,",",",",",",",`
      A`,",",",0,0,",",",",","Z"])),j.x,j.y,i,i,+(d<0),T.x,T.y,r,r,+(C>180),+(d>0),k.x,k.y,i,i,+(d<0),I.x,I.y)}else x+=me(Zd||(Zd=kn(["L",",","Z"])),t,n);return x},x2={cx:0,cy:0,innerRadius:0,outerRadius:0,startAngle:0,endAngle:0,cornerRadius:0,forceCornerRadius:!1,cornerIsExternal:!1},pf=e=>{var t=pt(e,x2),{cx:n,cy:r,innerRadius:a,outerRadius:i,cornerRadius:s,forceCornerRadius:l,cornerIsExternal:c,startAngle:u,endAngle:d,className:h}=t;if(i<a||u===d)return null;var m=le("recharts-sector",h),p=i-a,g=kt(s,p,0,!0),v;return g>0&&Math.abs(u-d)<360?v=w2({cx:n,cy:r,innerRadius:a,outerRadius:i,cornerRadius:Math.min(g,p/2),forceCornerRadius:l,cornerIsExternal:c,startAngle:u,endAngle:d}):v=mf({cx:n,cy:r,innerRadius:a,outerRadius:i,startAngle:u,endAngle:d}),f.createElement("path",el({},dt(t),{className:m,d:v}))};function k2(e,t,n){if(e==="horizontal")return[{x:t.x,y:n.top},{x:t.x,y:n.top+n.height}];if(e==="vertical")return[{x:n.left,y:t.y},{x:n.left+n.width,y:t.y}];if(_p(t)){if(e==="centric"){var{cx:r,cy:a,innerRadius:i,outerRadius:s,angle:l}=t,c=Be(r,a,i,l),u=Be(r,a,s,l);return[{x:c.x,y:c.y},{x:u.x,y:u.y}]}return hf(t)}}var gf={},ff={},yf={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=zl;function n(r){return t.isSymbol(r)?NaN:Number(r)}e.toNumber=n})(yf);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=yf;function n(r){return r?(r=t.toNumber(r),r===1/0||r===-1/0?(r<0?-1:1)*Number.MAX_VALUE:r===r?r:0):r===0?r:0}e.toFinite=n})(ff);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Yl,n=ff;function r(a,i,s){s&&typeof s!="number"&&t.isIterateeCall(a,i,s)&&(i=s=void 0),a=n.toFinite(a),i===void 0?(i=a,a=0):i=n.toFinite(i),s=s===void 0?a<i?1:-1:n.toFinite(s);const l=Math.max(Math.ceil((i-a)/(s||1)),0),c=new Array(l);for(let u=0;u<l;u++)c[u]=a,a+=s;return c}e.range=r})(gf);var T2=gf.range;const vf=It(T2);function cn(e,t){return e==null||t==null?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function I2(e,t){return e==null||t==null?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function ic(e){let t,n,r;e.length!==2?(t=cn,n=(l,c)=>cn(e(l),c),r=(l,c)=>e(l)-c):(t=e===cn||e===I2?e:j2,n=e,r=e);function a(l,c,u=0,d=l.length){if(u<d){if(t(c,c)!==0)return d;do{const h=u+d>>>1;n(l[h],c)<0?u=h+1:d=h}while(u<d)}return u}function i(l,c,u=0,d=l.length){if(u<d){if(t(c,c)!==0)return d;do{const h=u+d>>>1;n(l[h],c)<=0?u=h+1:d=h}while(u<d)}return u}function s(l,c,u=0,d=l.length){const h=a(l,c,u,d-1);return h>u&&r(l[h-1],c)>-r(l[h],c)?h-1:h}return{left:a,center:s,right:i}}function j2(){return 0}function bf(e){return e===null?NaN:+e}function*N2(e,t){if(t===void 0)for(let n of e)n!=null&&(n=+n)>=n&&(yield n);else{let n=-1;for(let r of e)(r=t(r,++n,e))!=null&&(r=+r)>=r&&(yield r)}}const A2=ic(cn),S2=A2.right;ic(bf).center;const la=S2;class Xd extends Map{constructor(t,n=C2){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:n}}),t!=null)for(const[r,a]of t)this.set(r,a)}get(t){return super.get(Qd(this,t))}has(t){return super.has(Qd(this,t))}set(t,n){return super.set(P2(this,t),n)}delete(t){return super.delete(O2(this,t))}}function Qd({_intern:e,_key:t},n){const r=t(n);return e.has(r)?e.get(r):n}function P2({_intern:e,_key:t},n){const r=t(n);return e.has(r)?e.get(r):(e.set(r,n),n)}function O2({_intern:e,_key:t},n){const r=t(n);return e.has(r)&&(n=e.get(r),e.delete(r)),n}function C2(e){return e!==null&&typeof e=="object"?e.valueOf():e}function E2(e=cn){if(e===cn)return wf;if(typeof e!="function")throw new TypeError("compare is not a function");return(t,n)=>{const r=e(t,n);return r||r===0?r:(e(n,n)===0)-(e(t,t)===0)}}function wf(e,t){return(e==null||!(e>=e))-(t==null||!(t>=t))||(e<t?-1:e>t?1:0)}const M2=Math.sqrt(50),$2=Math.sqrt(10),D2=Math.sqrt(2);function yi(e,t,n){const r=(t-e)/Math.max(0,n),a=Math.floor(Math.log10(r)),i=r/Math.pow(10,a),s=i>=M2?10:i>=$2?5:i>=D2?2:1;let l,c,u;return a<0?(u=Math.pow(10,-a)/s,l=Math.round(e*u),c=Math.round(t*u),l/u<e&&++l,c/u>t&&--c,u=-u):(u=Math.pow(10,a)*s,l=Math.round(e/u),c=Math.round(t/u),l*u<e&&++l,c*u>t&&--c),c<l&&.5<=n&&n<2?yi(e,t,n*2):[l,c,u]}function tl(e,t,n){if(t=+t,e=+e,n=+n,!(n>0))return[];if(e===t)return[e];const r=t<e,[a,i,s]=r?yi(t,e,n):yi(e,t,n);if(!(i>=a))return[];const l=i-a+1,c=new Array(l);if(r)if(s<0)for(let u=0;u<l;++u)c[u]=(i-u)/-s;else for(let u=0;u<l;++u)c[u]=(i-u)*s;else if(s<0)for(let u=0;u<l;++u)c[u]=(a+u)/-s;else for(let u=0;u<l;++u)c[u]=(a+u)*s;return c}function nl(e,t,n){return t=+t,e=+e,n=+n,yi(e,t,n)[2]}function rl(e,t,n){t=+t,e=+e,n=+n;const r=t<e,a=r?nl(t,e,n):nl(e,t,n);return(r?-1:1)*(a<0?1/-a:a)}function eh(e,t){let n;if(t===void 0)for(const r of e)r!=null&&(n<r||n===void 0&&r>=r)&&(n=r);else{let r=-1;for(let a of e)(a=t(a,++r,e))!=null&&(n<a||n===void 0&&a>=a)&&(n=a)}return n}function th(e,t){let n;if(t===void 0)for(const r of e)r!=null&&(n>r||n===void 0&&r>=r)&&(n=r);else{let r=-1;for(let a of e)(a=t(a,++r,e))!=null&&(n>a||n===void 0&&a>=a)&&(n=a)}return n}function xf(e,t,n=0,r=1/0,a){if(t=Math.floor(t),n=Math.floor(Math.max(0,n)),r=Math.floor(Math.min(e.length-1,r)),!(n<=t&&t<=r))return e;for(a=a===void 0?wf:E2(a);r>n;){if(r-n>600){const c=r-n+1,u=t-n+1,d=Math.log(c),h=.5*Math.exp(2*d/3),m=.5*Math.sqrt(d*h*(c-h)/c)*(u-c/2<0?-1:1),p=Math.max(n,Math.floor(t-u*h/c+m)),g=Math.min(r,Math.floor(t+(c-u)*h/c+m));xf(e,t,p,g,a)}const i=e[t];let s=n,l=r;for(Ar(e,n,t),a(e[r],i)>0&&Ar(e,n,r);s<l;){for(Ar(e,s,l),++s,--l;a(e[s],i)<0;)++s;for(;a(e[l],i)>0;)--l}a(e[n],i)===0?Ar(e,n,l):(++l,Ar(e,l,r)),l<=t&&(n=l+1),t<=l&&(r=l-1)}return e}function Ar(e,t,n){const r=e[t];e[t]=e[n],e[n]=r}function B2(e,t,n){if(e=Float64Array.from(N2(e,n)),!(!(r=e.length)||isNaN(t=+t))){if(t<=0||r<2)return th(e);if(t>=1)return eh(e);var r,a=(r-1)*t,i=Math.floor(a),s=eh(xf(e,i).subarray(0,i+1)),l=th(e.subarray(i+1));return s+(l-s)*(a-i)}}function _2(e,t,n=bf){if(!(!(r=e.length)||isNaN(t=+t))){if(t<=0||r<2)return+n(e[0],0,e);if(t>=1)return+n(e[r-1],r-1,e);var r,a=(r-1)*t,i=Math.floor(a),s=+n(e[i],i,e),l=+n(e[i+1],i+1,e);return s+(l-s)*(a-i)}}function R2(e,t,n){e=+e,t=+t,n=(a=arguments.length)<2?(t=e,e=0,1):a<3?1:+n;for(var r=-1,a=Math.max(0,Math.ceil((t-e)/n))|0,i=new Array(a);++r<a;)i[r]=e+r*n;return i}function gt(e,t){switch(arguments.length){case 0:break;case 1:this.range(e);break;default:this.range(t).domain(e);break}return this}function Xt(e,t){switch(arguments.length){case 0:break;case 1:{typeof e=="function"?this.interpolator(e):this.range(e);break}default:{this.domain(e),typeof t=="function"?this.interpolator(t):this.range(t);break}}return this}const al=Symbol("implicit");function oc(){var e=new Xd,t=[],n=[],r=al;function a(i){let s=e.get(i);if(s===void 0){if(r!==al)return r;e.set(i,s=t.push(i)-1)}return n[s%n.length]}return a.domain=function(i){if(!arguments.length)return t.slice();t=[],e=new Xd;for(const s of i)e.has(s)||e.set(s,t.push(s)-1);return a},a.range=function(i){return arguments.length?(n=Array.from(i),a):n.slice()},a.unknown=function(i){return arguments.length?(r=i,a):r},a.copy=function(){return oc(t,n).unknown(r)},gt.apply(a,arguments),a}function sc(){var e=oc().unknown(void 0),t=e.domain,n=e.range,r=0,a=1,i,s,l=!1,c=0,u=0,d=.5;delete e.unknown;function h(){var m=t().length,p=a<r,g=p?a:r,v=p?r:a;i=(v-g)/Math.max(1,m-c+u*2),l&&(i=Math.floor(i)),g+=(v-g-i*(m-c))*d,s=i*(1-c),l&&(g=Math.round(g),s=Math.round(s));var y=R2(m).map(function(b){return g+i*b});return n(p?y.reverse():y)}return e.domain=function(m){return arguments.length?(t(m),h()):t()},e.range=function(m){return arguments.length?([r,a]=m,r=+r,a=+a,h()):[r,a]},e.rangeRound=function(m){return[r,a]=m,r=+r,a=+a,l=!0,h()},e.bandwidth=function(){return s},e.step=function(){return i},e.round=function(m){return arguments.length?(l=!!m,h()):l},e.padding=function(m){return arguments.length?(c=Math.min(1,u=+m),h()):c},e.paddingInner=function(m){return arguments.length?(c=Math.min(1,m),h()):c},e.paddingOuter=function(m){return arguments.length?(u=+m,h()):u},e.align=function(m){return arguments.length?(d=Math.max(0,Math.min(1,m)),h()):d},e.copy=function(){return sc(t(),[r,a]).round(l).paddingInner(c).paddingOuter(u).align(d)},gt.apply(h(),arguments)}function kf(e){var t=e.copy;return e.padding=e.paddingOuter,delete e.paddingInner,delete e.paddingOuter,e.copy=function(){return kf(t())},e}function L2(){return kf(sc.apply(null,arguments).paddingInner(1))}function lc(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function Tf(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function ca(){}var qr=.7,vi=1/qr,Qn="\\s*([+-]?\\d+)\\s*",Gr="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Ot="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",W2=/^#([0-9a-f]{3,8})$/,F2=new RegExp(`^rgb\\(${Qn},${Qn},${Qn}\\)$`),H2=new RegExp(`^rgb\\(${Ot},${Ot},${Ot}\\)$`),z2=new RegExp(`^rgba\\(${Qn},${Qn},${Qn},${Gr}\\)$`),Y2=new RegExp(`^rgba\\(${Ot},${Ot},${Ot},${Gr}\\)$`),q2=new RegExp(`^hsl\\(${Gr},${Ot},${Ot}\\)$`),G2=new RegExp(`^hsla\\(${Gr},${Ot},${Ot},${Gr}\\)$`),nh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};lc(ca,Ur,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:rh,formatHex:rh,formatHex8:U2,formatHsl:K2,formatRgb:ah,toString:ah});function rh(){return this.rgb().formatHex()}function U2(){return this.rgb().formatHex8()}function K2(){return If(this).formatHsl()}function ah(){return this.rgb().formatRgb()}function Ur(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=W2.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?ih(t):n===3?new Je(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?Da(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?Da(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=F2.exec(e))?new Je(t[1],t[2],t[3],1):(t=H2.exec(e))?new Je(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=z2.exec(e))?Da(t[1],t[2],t[3],t[4]):(t=Y2.exec(e))?Da(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=q2.exec(e))?lh(t[1],t[2]/100,t[3]/100,1):(t=G2.exec(e))?lh(t[1],t[2]/100,t[3]/100,t[4]):nh.hasOwnProperty(e)?ih(nh[e]):e==="transparent"?new Je(NaN,NaN,NaN,0):null}function ih(e){return new Je(e>>16&255,e>>8&255,e&255,1)}function Da(e,t,n,r){return r<=0&&(e=t=n=NaN),new Je(e,t,n,r)}function V2(e){return e instanceof ca||(e=Ur(e)),e?(e=e.rgb(),new Je(e.r,e.g,e.b,e.opacity)):new Je}function il(e,t,n,r){return arguments.length===1?V2(e):new Je(e,t,n,r??1)}function Je(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}lc(Je,il,Tf(ca,{brighter(e){return e=e==null?vi:Math.pow(vi,e),new Je(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?qr:Math.pow(qr,e),new Je(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new Je(Nn(this.r),Nn(this.g),Nn(this.b),bi(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:oh,formatHex:oh,formatHex8:J2,formatRgb:sh,toString:sh}));function oh(){return`#${Tn(this.r)}${Tn(this.g)}${Tn(this.b)}`}function J2(){return`#${Tn(this.r)}${Tn(this.g)}${Tn(this.b)}${Tn((isNaN(this.opacity)?1:this.opacity)*255)}`}function sh(){const e=bi(this.opacity);return`${e===1?"rgb(":"rgba("}${Nn(this.r)}, ${Nn(this.g)}, ${Nn(this.b)}${e===1?")":`, ${e})`}`}function bi(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function Nn(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function Tn(e){return e=Nn(e),(e<16?"0":"")+e.toString(16)}function lh(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new bt(e,t,n,r)}function If(e){if(e instanceof bt)return new bt(e.h,e.s,e.l,e.opacity);if(e instanceof ca||(e=Ur(e)),!e)return new bt;if(e instanceof bt)return e;e=e.rgb();var t=e.r/255,n=e.g/255,r=e.b/255,a=Math.min(t,n,r),i=Math.max(t,n,r),s=NaN,l=i-a,c=(i+a)/2;return l?(t===i?s=(n-r)/l+(n<r)*6:n===i?s=(r-t)/l+2:s=(t-n)/l+4,l/=c<.5?i+a:2-i-a,s*=60):l=c>0&&c<1?0:s,new bt(s,l,c,e.opacity)}function Z2(e,t,n,r){return arguments.length===1?If(e):new bt(e,t,n,r??1)}function bt(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}lc(bt,Z2,Tf(ca,{brighter(e){return e=e==null?vi:Math.pow(vi,e),new bt(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?qr:Math.pow(qr,e),new bt(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,a=2*n-r;return new Je(as(e>=240?e-240:e+120,a,r),as(e,a,r),as(e<120?e+240:e-120,a,r),this.opacity)},clamp(){return new bt(ch(this.h),Ba(this.s),Ba(this.l),bi(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=bi(this.opacity);return`${e===1?"hsl(":"hsla("}${ch(this.h)}, ${Ba(this.s)*100}%, ${Ba(this.l)*100}%${e===1?")":`, ${e})`}`}}));function ch(e){return e=(e||0)%360,e<0?e+360:e}function Ba(e){return Math.max(0,Math.min(1,e||0))}function as(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}const cc=e=>()=>e;function X2(e,t){return function(n){return e+n*t}}function Q2(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(r){return Math.pow(e+r*t,n)}}function eI(e){return(e=+e)==1?jf:function(t,n){return n-t?Q2(t,n,e):cc(isNaN(t)?n:t)}}function jf(e,t){var n=t-e;return n?X2(e,n):cc(isNaN(e)?t:e)}const uh=function e(t){var n=eI(t);function r(a,i){var s=n((a=il(a)).r,(i=il(i)).r),l=n(a.g,i.g),c=n(a.b,i.b),u=jf(a.opacity,i.opacity);return function(d){return a.r=s(d),a.g=l(d),a.b=c(d),a.opacity=u(d),a+""}}return r.gamma=e,r}(1);function tI(e,t){t||(t=[]);var n=e?Math.min(t.length,e.length):0,r=t.slice(),a;return function(i){for(a=0;a<n;++a)r[a]=e[a]*(1-i)+t[a]*i;return r}}function nI(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function rI(e,t){var n=t?t.length:0,r=e?Math.min(n,e.length):0,a=new Array(r),i=new Array(n),s;for(s=0;s<r;++s)a[s]=mr(e[s],t[s]);for(;s<n;++s)i[s]=t[s];return function(l){for(s=0;s<r;++s)i[s]=a[s](l);return i}}function aI(e,t){var n=new Date;return e=+e,t=+t,function(r){return n.setTime(e*(1-r)+t*r),n}}function wi(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}function iI(e,t){var n={},r={},a;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(a in t)a in e?n[a]=mr(e[a],t[a]):r[a]=t[a];return function(i){for(a in n)r[a]=n[a](i);return r}}var ol=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,is=new RegExp(ol.source,"g");function oI(e){return function(){return e}}function sI(e){return function(t){return e(t)+""}}function lI(e,t){var n=ol.lastIndex=is.lastIndex=0,r,a,i,s=-1,l=[],c=[];for(e=e+"",t=t+"";(r=ol.exec(e))&&(a=is.exec(t));)(i=a.index)>n&&(i=t.slice(n,i),l[s]?l[s]+=i:l[++s]=i),(r=r[0])===(a=a[0])?l[s]?l[s]+=a:l[++s]=a:(l[++s]=null,c.push({i:s,x:wi(r,a)})),n=is.lastIndex;return n<t.length&&(i=t.slice(n),l[s]?l[s]+=i:l[++s]=i),l.length<2?c[0]?sI(c[0].x):oI(t):(t=c.length,function(u){for(var d=0,h;d<t;++d)l[(h=c[d]).i]=h.x(u);return l.join("")})}function mr(e,t){var n=typeof t,r;return t==null||n==="boolean"?cc(t):(n==="number"?wi:n==="string"?(r=Ur(t))?(t=r,uh):lI:t instanceof Ur?uh:t instanceof Date?aI:nI(t)?tI:Array.isArray(t)?rI:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?iI:wi)(e,t)}function uc(e,t){return e=+e,t=+t,function(n){return Math.round(e*(1-n)+t*n)}}function cI(e,t){t===void 0&&(t=e,e=mr);for(var n=0,r=t.length-1,a=t[0],i=new Array(r<0?0:r);n<r;)i[n]=e(a,a=t[++n]);return function(s){var l=Math.max(0,Math.min(r-1,Math.floor(s*=r)));return i[l](s-l)}}function uI(e){return function(){return e}}function xi(e){return+e}var dh=[0,1];function qe(e){return e}function sl(e,t){return(t-=e=+e)?function(n){return(n-e)/t}:uI(isNaN(t)?NaN:.5)}function dI(e,t){var n;return e>t&&(n=e,e=t,t=n),function(r){return Math.max(e,Math.min(t,r))}}function hI(e,t,n){var r=e[0],a=e[1],i=t[0],s=t[1];return a<r?(r=sl(a,r),i=n(s,i)):(r=sl(r,a),i=n(i,s)),function(l){return i(r(l))}}function mI(e,t,n){var r=Math.min(e.length,t.length)-1,a=new Array(r),i=new Array(r),s=-1;for(e[r]<e[0]&&(e=e.slice().reverse(),t=t.slice().reverse());++s<r;)a[s]=sl(e[s],e[s+1]),i[s]=n(t[s],t[s+1]);return function(l){var c=la(e,l,1,r)-1;return i[c](a[c](l))}}function ua(e,t){return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())}function fo(){var e=dh,t=dh,n=mr,r,a,i,s=qe,l,c,u;function d(){var m=Math.min(e.length,t.length);return s!==qe&&(s=dI(e[0],e[m-1])),l=m>2?mI:hI,c=u=null,h}function h(m){return m==null||isNaN(m=+m)?i:(c||(c=l(e.map(r),t,n)))(r(s(m)))}return h.invert=function(m){return s(a((u||(u=l(t,e.map(r),wi)))(m)))},h.domain=function(m){return arguments.length?(e=Array.from(m,xi),d()):e.slice()},h.range=function(m){return arguments.length?(t=Array.from(m),d()):t.slice()},h.rangeRound=function(m){return t=Array.from(m),n=uc,d()},h.clamp=function(m){return arguments.length?(s=m?!0:qe,d()):s!==qe},h.interpolate=function(m){return arguments.length?(n=m,d()):n},h.unknown=function(m){return arguments.length?(i=m,h):i},function(m,p){return r=m,a=p,d()}}function dc(){return fo()(qe,qe)}function pI(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString("en").replace(/,/g,""):e.toString(10)}function ki(e,t){if((n=(e=t?e.toExponential(t-1):e.toExponential()).indexOf("e"))<0)return null;var n,r=e.slice(0,n);return[r.length>1?r[0]+r.slice(2):r,+e.slice(n+1)]}function or(e){return e=ki(Math.abs(e)),e?e[1]:NaN}function gI(e,t){return function(n,r){for(var a=n.length,i=[],s=0,l=e[0],c=0;a>0&&l>0&&(c+l+1>r&&(l=Math.max(1,r-c)),i.push(n.substring(a-=l,a+l)),!((c+=l+1)>r));)l=e[s=(s+1)%e.length];return i.reverse().join(t)}}function fI(e){return function(t){return t.replace(/[0-9]/g,function(n){return e[+n]})}}var yI=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Kr(e){if(!(t=yI.exec(e)))throw new Error("invalid format: "+e);var t;return new hc({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}Kr.prototype=hc.prototype;function hc(e){this.fill=e.fill===void 0?" ":e.fill+"",this.align=e.align===void 0?">":e.align+"",this.sign=e.sign===void 0?"-":e.sign+"",this.symbol=e.symbol===void 0?"":e.symbol+"",this.zero=!!e.zero,this.width=e.width===void 0?void 0:+e.width,this.comma=!!e.comma,this.precision=e.precision===void 0?void 0:+e.precision,this.trim=!!e.trim,this.type=e.type===void 0?"":e.type+""}hc.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function vI(e){e:for(var t=e.length,n=1,r=-1,a;n<t;++n)switch(e[n]){case".":r=a=n;break;case"0":r===0&&(r=n),a=n;break;default:if(!+e[n])break e;r>0&&(r=0);break}return r>0?e.slice(0,r)+e.slice(a+1):e}var Nf;function bI(e,t){var n=ki(e,t);if(!n)return e+"";var r=n[0],a=n[1],i=a-(Nf=Math.max(-8,Math.min(8,Math.floor(a/3)))*3)+1,s=r.length;return i===s?r:i>s?r+new Array(i-s+1).join("0"):i>0?r.slice(0,i)+"."+r.slice(i):"0."+new Array(1-i).join("0")+ki(e,Math.max(0,t+i-1))[0]}function hh(e,t){var n=ki(e,t);if(!n)return e+"";var r=n[0],a=n[1];return a<0?"0."+new Array(-a).join("0")+r:r.length>a+1?r.slice(0,a+1)+"."+r.slice(a+1):r+new Array(a-r.length+2).join("0")}const mh={"%":(e,t)=>(e*100).toFixed(t),b:e=>Math.round(e).toString(2),c:e=>e+"",d:pI,e:(e,t)=>e.toExponential(t),f:(e,t)=>e.toFixed(t),g:(e,t)=>e.toPrecision(t),o:e=>Math.round(e).toString(8),p:(e,t)=>hh(e*100,t),r:hh,s:bI,X:e=>Math.round(e).toString(16).toUpperCase(),x:e=>Math.round(e).toString(16)};function ph(e){return e}var gh=Array.prototype.map,fh=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function wI(e){var t=e.grouping===void 0||e.thousands===void 0?ph:gI(gh.call(e.grouping,Number),e.thousands+""),n=e.currency===void 0?"":e.currency[0]+"",r=e.currency===void 0?"":e.currency[1]+"",a=e.decimal===void 0?".":e.decimal+"",i=e.numerals===void 0?ph:fI(gh.call(e.numerals,String)),s=e.percent===void 0?"%":e.percent+"",l=e.minus===void 0?"−":e.minus+"",c=e.nan===void 0?"NaN":e.nan+"";function u(h){h=Kr(h);var m=h.fill,p=h.align,g=h.sign,v=h.symbol,y=h.zero,b=h.width,x=h.comma,k=h.precision,I=h.trim,w=h.type;w==="n"?(x=!0,w="g"):mh[w]||(k===void 0&&(k=12),I=!0,w="g"),(y||m==="0"&&p==="=")&&(y=!0,m="0",p="=");var T=v==="$"?n:v==="#"&&/[boxX]/.test(w)?"0"+w.toLowerCase():"",j=v==="$"?r:/[%p]/.test(w)?s:"",E=mh[w],C=/[defgprs%]/.test(w);k=k===void 0?6:/[gprs]/.test(w)?Math.max(1,Math.min(21,k)):Math.max(0,Math.min(20,k));function $(A){var D=T,_=j,R,z,K;if(w==="c")_=E(A)+_,A="";else{A=+A;var Y=A<0||1/A<0;if(A=isNaN(A)?c:E(Math.abs(A),k),I&&(A=vI(A)),Y&&+A==0&&g!=="+"&&(Y=!1),D=(Y?g==="("?g:l:g==="-"||g==="("?"":g)+D,_=(w==="s"?fh[8+Nf/3]:"")+_+(Y&&g==="("?")":""),C){for(R=-1,z=A.length;++R<z;)if(K=A.charCodeAt(R),48>K||K>57){_=(K===46?a+A.slice(R+1):A.slice(R))+_,A=A.slice(0,R);break}}}x&&!y&&(A=t(A,1/0));var Z=D.length+A.length+_.length,q=Z<b?new Array(b-Z+1).join(m):"";switch(x&&y&&(A=t(q+A,q.length?b-_.length:1/0),q=""),p){case"<":A=D+A+_+q;break;case"=":A=D+q+A+_;break;case"^":A=q.slice(0,Z=q.length>>1)+D+A+_+q.slice(Z);break;default:A=q+D+A+_;break}return i(A)}return $.toString=function(){return h+""},$}function d(h,m){var p=u((h=Kr(h),h.type="f",h)),g=Math.max(-8,Math.min(8,Math.floor(or(m)/3)))*3,v=Math.pow(10,-g),y=fh[8+g/3];return function(b){return p(v*b)+y}}return{format:u,formatPrefix:d}}var _a,mc,Af;xI({thousands:",",grouping:[3],currency:["$",""]});function xI(e){return _a=wI(e),mc=_a.format,Af=_a.formatPrefix,_a}function kI(e){return Math.max(0,-or(Math.abs(e)))}function TI(e,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(or(t)/3)))*3-or(Math.abs(e)))}function II(e,t){return e=Math.abs(e),t=Math.abs(t)-e,Math.max(0,or(t)-or(e))+1}function Sf(e,t,n,r){var a=rl(e,t,n),i;switch(r=Kr(r??",f"),r.type){case"s":{var s=Math.max(Math.abs(e),Math.abs(t));return r.precision==null&&!isNaN(i=TI(a,s))&&(r.precision=i),Af(r,s)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(i=II(a,Math.max(Math.abs(e),Math.abs(t))))&&(r.precision=i-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(i=kI(a))&&(r.precision=i-(r.type==="%")*2);break}}return mc(r)}function pn(e){var t=e.domain;return e.ticks=function(n){var r=t();return tl(r[0],r[r.length-1],n??10)},e.tickFormat=function(n,r){var a=t();return Sf(a[0],a[a.length-1],n??10,r)},e.nice=function(n){n==null&&(n=10);var r=t(),a=0,i=r.length-1,s=r[a],l=r[i],c,u,d=10;for(l<s&&(u=s,s=l,l=u,u=a,a=i,i=u);d-- >0;){if(u=nl(s,l,n),u===c)return r[a]=s,r[i]=l,t(r);if(u>0)s=Math.floor(s/u)*u,l=Math.ceil(l/u)*u;else if(u<0)s=Math.ceil(s*u)/u,l=Math.floor(l*u)/u;else break;c=u}return e},e}function Pf(){var e=dc();return e.copy=function(){return ua(e,Pf())},gt.apply(e,arguments),pn(e)}function Of(e){var t;function n(r){return r==null||isNaN(r=+r)?t:r}return n.invert=n,n.domain=n.range=function(r){return arguments.length?(e=Array.from(r,xi),n):e.slice()},n.unknown=function(r){return arguments.length?(t=r,n):t},n.copy=function(){return Of(e).unknown(t)},e=arguments.length?Array.from(e,xi):[0,1],pn(n)}function Cf(e,t){e=e.slice();var n=0,r=e.length-1,a=e[n],i=e[r],s;return i<a&&(s=n,n=r,r=s,s=a,a=i,i=s),e[n]=t.floor(a),e[r]=t.ceil(i),e}function yh(e){return Math.log(e)}function vh(e){return Math.exp(e)}function jI(e){return-Math.log(-e)}function NI(e){return-Math.exp(-e)}function AI(e){return isFinite(e)?+("1e"+e):e<0?0:e}function SI(e){return e===10?AI:e===Math.E?Math.exp:t=>Math.pow(e,t)}function PI(e){return e===Math.E?Math.log:e===10&&Math.log10||e===2&&Math.log2||(e=Math.log(e),t=>Math.log(t)/e)}function bh(e){return(t,n)=>-e(-t,n)}function pc(e){const t=e(yh,vh),n=t.domain;let r=10,a,i;function s(){return a=PI(r),i=SI(r),n()[0]<0?(a=bh(a),i=bh(i),e(jI,NI)):e(yh,vh),t}return t.base=function(l){return arguments.length?(r=+l,s()):r},t.domain=function(l){return arguments.length?(n(l),s()):n()},t.ticks=l=>{const c=n();let u=c[0],d=c[c.length-1];const h=d<u;h&&([u,d]=[d,u]);let m=a(u),p=a(d),g,v;const y=l==null?10:+l;let b=[];if(!(r%1)&&p-m<y){if(m=Math.floor(m),p=Math.ceil(p),u>0){for(;m<=p;++m)for(g=1;g<r;++g)if(v=m<0?g/i(-m):g*i(m),!(v<u)){if(v>d)break;b.push(v)}}else for(;m<=p;++m)for(g=r-1;g>=1;--g)if(v=m>0?g/i(-m):g*i(m),!(v<u)){if(v>d)break;b.push(v)}b.length*2<y&&(b=tl(u,d,y))}else b=tl(m,p,Math.min(p-m,y)).map(i);return h?b.reverse():b},t.tickFormat=(l,c)=>{if(l==null&&(l=10),c==null&&(c=r===10?"s":","),typeof c!="function"&&(!(r%1)&&(c=Kr(c)).precision==null&&(c.trim=!0),c=mc(c)),l===1/0)return c;const u=Math.max(1,r*l/t.ticks().length);return d=>{let h=d/i(Math.round(a(d)));return h*r<r-.5&&(h*=r),h<=u?c(d):""}},t.nice=()=>n(Cf(n(),{floor:l=>i(Math.floor(a(l))),ceil:l=>i(Math.ceil(a(l)))})),t}function Ef(){const e=pc(fo()).domain([1,10]);return e.copy=()=>ua(e,Ef()).base(e.base()),gt.apply(e,arguments),e}function wh(e){return function(t){return Math.sign(t)*Math.log1p(Math.abs(t/e))}}function xh(e){return function(t){return Math.sign(t)*Math.expm1(Math.abs(t))*e}}function gc(e){var t=1,n=e(wh(t),xh(t));return n.constant=function(r){return arguments.length?e(wh(t=+r),xh(t)):t},pn(n)}function Mf(){var e=gc(fo());return e.copy=function(){return ua(e,Mf()).constant(e.constant())},gt.apply(e,arguments)}function kh(e){return function(t){return t<0?-Math.pow(-t,e):Math.pow(t,e)}}function OI(e){return e<0?-Math.sqrt(-e):Math.sqrt(e)}function CI(e){return e<0?-e*e:e*e}function fc(e){var t=e(qe,qe),n=1;function r(){return n===1?e(qe,qe):n===.5?e(OI,CI):e(kh(n),kh(1/n))}return t.exponent=function(a){return arguments.length?(n=+a,r()):n},pn(t)}function yc(){var e=fc(fo());return e.copy=function(){return ua(e,yc()).exponent(e.exponent())},gt.apply(e,arguments),e}function EI(){return yc.apply(null,arguments).exponent(.5)}function Th(e){return Math.sign(e)*e*e}function MI(e){return Math.sign(e)*Math.sqrt(Math.abs(e))}function $f(){var e=dc(),t=[0,1],n=!1,r;function a(i){var s=MI(e(i));return isNaN(s)?r:n?Math.round(s):s}return a.invert=function(i){return e.invert(Th(i))},a.domain=function(i){return arguments.length?(e.domain(i),a):e.domain()},a.range=function(i){return arguments.length?(e.range((t=Array.from(i,xi)).map(Th)),a):t.slice()},a.rangeRound=function(i){return a.range(i).round(!0)},a.round=function(i){return arguments.length?(n=!!i,a):n},a.clamp=function(i){return arguments.length?(e.clamp(i),a):e.clamp()},a.unknown=function(i){return arguments.length?(r=i,a):r},a.copy=function(){return $f(e.domain(),t).round(n).clamp(e.clamp()).unknown(r)},gt.apply(a,arguments),pn(a)}function Df(){var e=[],t=[],n=[],r;function a(){var s=0,l=Math.max(1,t.length);for(n=new Array(l-1);++s<l;)n[s-1]=_2(e,s/l);return i}function i(s){return s==null||isNaN(s=+s)?r:t[la(n,s)]}return i.invertExtent=function(s){var l=t.indexOf(s);return l<0?[NaN,NaN]:[l>0?n[l-1]:e[0],l<n.length?n[l]:e[e.length-1]]},i.domain=function(s){if(!arguments.length)return e.slice();e=[];for(let l of s)l!=null&&!isNaN(l=+l)&&e.push(l);return e.sort(cn),a()},i.range=function(s){return arguments.length?(t=Array.from(s),a()):t.slice()},i.unknown=function(s){return arguments.length?(r=s,i):r},i.quantiles=function(){return n.slice()},i.copy=function(){return Df().domain(e).range(t).unknown(r)},gt.apply(i,arguments)}function Bf(){var e=0,t=1,n=1,r=[.5],a=[0,1],i;function s(c){return c!=null&&c<=c?a[la(r,c,0,n)]:i}function l(){var c=-1;for(r=new Array(n);++c<n;)r[c]=((c+1)*t-(c-n)*e)/(n+1);return s}return s.domain=function(c){return arguments.length?([e,t]=c,e=+e,t=+t,l()):[e,t]},s.range=function(c){return arguments.length?(n=(a=Array.from(c)).length-1,l()):a.slice()},s.invertExtent=function(c){var u=a.indexOf(c);return u<0?[NaN,NaN]:u<1?[e,r[0]]:u>=n?[r[n-1],t]:[r[u-1],r[u]]},s.unknown=function(c){return arguments.length&&(i=c),s},s.thresholds=function(){return r.slice()},s.copy=function(){return Bf().domain([e,t]).range(a).unknown(i)},gt.apply(pn(s),arguments)}function _f(){var e=[.5],t=[0,1],n,r=1;function a(i){return i!=null&&i<=i?t[la(e,i,0,r)]:n}return a.domain=function(i){return arguments.length?(e=Array.from(i),r=Math.min(e.length,t.length-1),a):e.slice()},a.range=function(i){return arguments.length?(t=Array.from(i),r=Math.min(e.length,t.length-1),a):t.slice()},a.invertExtent=function(i){var s=t.indexOf(i);return[e[s-1],e[s]]},a.unknown=function(i){return arguments.length?(n=i,a):n},a.copy=function(){return _f().domain(e).range(t).unknown(n)},gt.apply(a,arguments)}const os=new Date,ss=new Date;function we(e,t,n,r){function a(i){return e(i=arguments.length===0?new Date:new Date(+i)),i}return a.floor=i=>(e(i=new Date(+i)),i),a.ceil=i=>(e(i=new Date(i-1)),t(i,1),e(i),i),a.round=i=>{const s=a(i),l=a.ceil(i);return i-s<l-i?s:l},a.offset=(i,s)=>(t(i=new Date(+i),s==null?1:Math.floor(s)),i),a.range=(i,s,l)=>{const c=[];if(i=a.ceil(i),l=l==null?1:Math.floor(l),!(i<s)||!(l>0))return c;let u;do c.push(u=new Date(+i)),t(i,l),e(i);while(u<i&&i<s);return c},a.filter=i=>we(s=>{if(s>=s)for(;e(s),!i(s);)s.setTime(s-1)},(s,l)=>{if(s>=s)if(l<0)for(;++l<=0;)for(;t(s,-1),!i(s););else for(;--l>=0;)for(;t(s,1),!i(s););}),n&&(a.count=(i,s)=>(os.setTime(+i),ss.setTime(+s),e(os),e(ss),Math.floor(n(os,ss))),a.every=i=>(i=Math.floor(i),!isFinite(i)||!(i>0)?null:i>1?a.filter(r?s=>r(s)%i===0:s=>a.count(0,s)%i===0):a)),a}const Ti=we(()=>{},(e,t)=>{e.setTime(+e+t)},(e,t)=>t-e);Ti.every=e=>(e=Math.floor(e),!isFinite(e)||!(e>0)?null:e>1?we(t=>{t.setTime(Math.floor(t/e)*e)},(t,n)=>{t.setTime(+t+n*e)},(t,n)=>(n-t)/e):Ti);Ti.range;const Lt=1e3,ut=Lt*60,Wt=ut*60,qt=Wt*24,vc=qt*7,Ih=qt*30,ls=qt*365,In=we(e=>{e.setTime(e-e.getMilliseconds())},(e,t)=>{e.setTime(+e+t*Lt)},(e,t)=>(t-e)/Lt,e=>e.getUTCSeconds());In.range;const bc=we(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*Lt)},(e,t)=>{e.setTime(+e+t*ut)},(e,t)=>(t-e)/ut,e=>e.getMinutes());bc.range;const wc=we(e=>{e.setUTCSeconds(0,0)},(e,t)=>{e.setTime(+e+t*ut)},(e,t)=>(t-e)/ut,e=>e.getUTCMinutes());wc.range;const xc=we(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*Lt-e.getMinutes()*ut)},(e,t)=>{e.setTime(+e+t*Wt)},(e,t)=>(t-e)/Wt,e=>e.getHours());xc.range;const kc=we(e=>{e.setUTCMinutes(0,0,0)},(e,t)=>{e.setTime(+e+t*Wt)},(e,t)=>(t-e)/Wt,e=>e.getUTCHours());kc.range;const da=we(e=>e.setHours(0,0,0,0),(e,t)=>e.setDate(e.getDate()+t),(e,t)=>(t-e-(t.getTimezoneOffset()-e.getTimezoneOffset())*ut)/qt,e=>e.getDate()-1);da.range;const yo=we(e=>{e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCDate(e.getUTCDate()+t)},(e,t)=>(t-e)/qt,e=>e.getUTCDate()-1);yo.range;const Rf=we(e=>{e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCDate(e.getUTCDate()+t)},(e,t)=>(t-e)/qt,e=>Math.floor(e/qt));Rf.range;function Rn(e){return we(t=>{t.setDate(t.getDate()-(t.getDay()+7-e)%7),t.setHours(0,0,0,0)},(t,n)=>{t.setDate(t.getDate()+n*7)},(t,n)=>(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*ut)/vc)}const vo=Rn(0),Ii=Rn(1),$I=Rn(2),DI=Rn(3),sr=Rn(4),BI=Rn(5),_I=Rn(6);vo.range;Ii.range;$I.range;DI.range;sr.range;BI.range;_I.range;function Ln(e){return we(t=>{t.setUTCDate(t.getUTCDate()-(t.getUTCDay()+7-e)%7),t.setUTCHours(0,0,0,0)},(t,n)=>{t.setUTCDate(t.getUTCDate()+n*7)},(t,n)=>(n-t)/vc)}const bo=Ln(0),ji=Ln(1),RI=Ln(2),LI=Ln(3),lr=Ln(4),WI=Ln(5),FI=Ln(6);bo.range;ji.range;RI.range;LI.range;lr.range;WI.range;FI.range;const Tc=we(e=>{e.setDate(1),e.setHours(0,0,0,0)},(e,t)=>{e.setMonth(e.getMonth()+t)},(e,t)=>t.getMonth()-e.getMonth()+(t.getFullYear()-e.getFullYear())*12,e=>e.getMonth());Tc.range;const Ic=we(e=>{e.setUTCDate(1),e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCMonth(e.getUTCMonth()+t)},(e,t)=>t.getUTCMonth()-e.getUTCMonth()+(t.getUTCFullYear()-e.getUTCFullYear())*12,e=>e.getUTCMonth());Ic.range;const Gt=we(e=>{e.setMonth(0,1),e.setHours(0,0,0,0)},(e,t)=>{e.setFullYear(e.getFullYear()+t)},(e,t)=>t.getFullYear()-e.getFullYear(),e=>e.getFullYear());Gt.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:we(t=>{t.setFullYear(Math.floor(t.getFullYear()/e)*e),t.setMonth(0,1),t.setHours(0,0,0,0)},(t,n)=>{t.setFullYear(t.getFullYear()+n*e)});Gt.range;const Ut=we(e=>{e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCFullYear(e.getUTCFullYear()+t)},(e,t)=>t.getUTCFullYear()-e.getUTCFullYear(),e=>e.getUTCFullYear());Ut.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:we(t=>{t.setUTCFullYear(Math.floor(t.getUTCFullYear()/e)*e),t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},(t,n)=>{t.setUTCFullYear(t.getUTCFullYear()+n*e)});Ut.range;function Lf(e,t,n,r,a,i){const s=[[In,1,Lt],[In,5,5*Lt],[In,15,15*Lt],[In,30,30*Lt],[i,1,ut],[i,5,5*ut],[i,15,15*ut],[i,30,30*ut],[a,1,Wt],[a,3,3*Wt],[a,6,6*Wt],[a,12,12*Wt],[r,1,qt],[r,2,2*qt],[n,1,vc],[t,1,Ih],[t,3,3*Ih],[e,1,ls]];function l(u,d,h){const m=d<u;m&&([u,d]=[d,u]);const p=h&&typeof h.range=="function"?h:c(u,d,h),g=p?p.range(u,+d+1):[];return m?g.reverse():g}function c(u,d,h){const m=Math.abs(d-u)/h,p=ic(([,,y])=>y).right(s,m);if(p===s.length)return e.every(rl(u/ls,d/ls,h));if(p===0)return Ti.every(Math.max(rl(u,d,h),1));const[g,v]=s[m/s[p-1][2]<s[p][2]/m?p-1:p];return g.every(v)}return[l,c]}const[HI,zI]=Lf(Ut,Ic,bo,Rf,kc,wc),[YI,qI]=Lf(Gt,Tc,vo,da,xc,bc);function cs(e){if(0<=e.y&&e.y<100){var t=new Date(-1,e.m,e.d,e.H,e.M,e.S,e.L);return t.setFullYear(e.y),t}return new Date(e.y,e.m,e.d,e.H,e.M,e.S,e.L)}function us(e){if(0<=e.y&&e.y<100){var t=new Date(Date.UTC(-1,e.m,e.d,e.H,e.M,e.S,e.L));return t.setUTCFullYear(e.y),t}return new Date(Date.UTC(e.y,e.m,e.d,e.H,e.M,e.S,e.L))}function Sr(e,t,n){return{y:e,m:t,d:n,H:0,M:0,S:0,L:0}}function GI(e){var t=e.dateTime,n=e.date,r=e.time,a=e.periods,i=e.days,s=e.shortDays,l=e.months,c=e.shortMonths,u=Pr(a),d=Or(a),h=Pr(i),m=Or(i),p=Pr(s),g=Or(s),v=Pr(l),y=Or(l),b=Pr(c),x=Or(c),k={a:Y,A:Z,b:q,B:te,c:null,d:Oh,e:Oh,f:gj,g:jj,G:Aj,H:hj,I:mj,j:pj,L:Wf,m:fj,M:yj,p:he,q:Ie,Q:Mh,s:$h,S:vj,u:bj,U:wj,V:xj,w:kj,W:Tj,x:null,X:null,y:Ij,Y:Nj,Z:Sj,"%":Eh},I={a:ze,A:fe,b:P,B:W,c:null,d:Ch,e:Ch,f:Ej,g:Hj,G:Yj,H:Pj,I:Oj,j:Cj,L:Hf,m:Mj,M:$j,p:B,q:F,Q:Mh,s:$h,S:Dj,u:Bj,U:_j,V:Rj,w:Lj,W:Wj,x:null,X:null,y:Fj,Y:zj,Z:qj,"%":Eh},w={a:$,A,b:D,B:_,c:R,d:Sh,e:Sh,f:lj,g:Ah,G:Nh,H:Ph,I:Ph,j:aj,L:sj,m:rj,M:ij,p:C,q:nj,Q:uj,s:dj,S:oj,u:ZI,U:XI,V:QI,w:JI,W:ej,x:z,X:K,y:Ah,Y:Nh,Z:tj,"%":cj};k.x=T(n,k),k.X=T(r,k),k.c=T(t,k),I.x=T(n,I),I.X=T(r,I),I.c=T(t,I);function T(N,L){return function(G){var O=[],Q=-1,X=0,je=N.length,Re,Nt,Yo;for(G instanceof Date||(G=new Date(+G));++Q<je;)N.charCodeAt(Q)===37&&(O.push(N.slice(X,Q)),(Nt=jh[Re=N.charAt(++Q)])!=null?Re=N.charAt(++Q):Nt=Re==="e"?" ":"0",(Yo=L[Re])&&(Re=Yo(G,Nt)),O.push(Re),X=Q+1);return O.push(N.slice(X,Q)),O.join("")}}function j(N,L){return function(G){var O=Sr(1900,void 0,1),Q=E(O,N,G+="",0),X,je;if(Q!=G.length)return null;if("Q"in O)return new Date(O.Q);if("s"in O)return new Date(O.s*1e3+("L"in O?O.L:0));if(L&&!("Z"in O)&&(O.Z=0),"p"in O&&(O.H=O.H%12+O.p*12),O.m===void 0&&(O.m="q"in O?O.q:0),"V"in O){if(O.V<1||O.V>53)return null;"w"in O||(O.w=1),"Z"in O?(X=us(Sr(O.y,0,1)),je=X.getUTCDay(),X=je>4||je===0?ji.ceil(X):ji(X),X=yo.offset(X,(O.V-1)*7),O.y=X.getUTCFullYear(),O.m=X.getUTCMonth(),O.d=X.getUTCDate()+(O.w+6)%7):(X=cs(Sr(O.y,0,1)),je=X.getDay(),X=je>4||je===0?Ii.ceil(X):Ii(X),X=da.offset(X,(O.V-1)*7),O.y=X.getFullYear(),O.m=X.getMonth(),O.d=X.getDate()+(O.w+6)%7)}else("W"in O||"U"in O)&&("w"in O||(O.w="u"in O?O.u%7:"W"in O?1:0),je="Z"in O?us(Sr(O.y,0,1)).getUTCDay():cs(Sr(O.y,0,1)).getDay(),O.m=0,O.d="W"in O?(O.w+6)%7+O.W*7-(je+5)%7:O.w+O.U*7-(je+6)%7);return"Z"in O?(O.H+=O.Z/100|0,O.M+=O.Z%100,us(O)):cs(O)}}function E(N,L,G,O){for(var Q=0,X=L.length,je=G.length,Re,Nt;Q<X;){if(O>=je)return-1;if(Re=L.charCodeAt(Q++),Re===37){if(Re=L.charAt(Q++),Nt=w[Re in jh?L.charAt(Q++):Re],!Nt||(O=Nt(N,G,O))<0)return-1}else if(Re!=G.charCodeAt(O++))return-1}return O}function C(N,L,G){var O=u.exec(L.slice(G));return O?(N.p=d.get(O[0].toLowerCase()),G+O[0].length):-1}function $(N,L,G){var O=p.exec(L.slice(G));return O?(N.w=g.get(O[0].toLowerCase()),G+O[0].length):-1}function A(N,L,G){var O=h.exec(L.slice(G));return O?(N.w=m.get(O[0].toLowerCase()),G+O[0].length):-1}function D(N,L,G){var O=b.exec(L.slice(G));return O?(N.m=x.get(O[0].toLowerCase()),G+O[0].length):-1}function _(N,L,G){var O=v.exec(L.slice(G));return O?(N.m=y.get(O[0].toLowerCase()),G+O[0].length):-1}function R(N,L,G){return E(N,t,L,G)}function z(N,L,G){return E(N,n,L,G)}function K(N,L,G){return E(N,r,L,G)}function Y(N){return s[N.getDay()]}function Z(N){return i[N.getDay()]}function q(N){return c[N.getMonth()]}function te(N){return l[N.getMonth()]}function he(N){return a[+(N.getHours()>=12)]}function Ie(N){return 1+~~(N.getMonth()/3)}function ze(N){return s[N.getUTCDay()]}function fe(N){return i[N.getUTCDay()]}function P(N){return c[N.getUTCMonth()]}function W(N){return l[N.getUTCMonth()]}function B(N){return a[+(N.getUTCHours()>=12)]}function F(N){return 1+~~(N.getUTCMonth()/3)}return{format:function(N){var L=T(N+="",k);return L.toString=function(){return N},L},parse:function(N){var L=j(N+="",!1);return L.toString=function(){return N},L},utcFormat:function(N){var L=T(N+="",I);return L.toString=function(){return N},L},utcParse:function(N){var L=j(N+="",!0);return L.toString=function(){return N},L}}}var jh={"-":"",_:" ",0:"0"},Ee=/^\s*\d+/,UI=/^%/,KI=/[\\^$*+?|[\]().{}]/g;function ee(e,t,n){var r=e<0?"-":"",a=(r?-e:e)+"",i=a.length;return r+(i<n?new Array(n-i+1).join(t)+a:a)}function VI(e){return e.replace(KI,"\\$&")}function Pr(e){return new RegExp("^(?:"+e.map(VI).join("|")+")","i")}function Or(e){return new Map(e.map((t,n)=>[t.toLowerCase(),n]))}function JI(e,t,n){var r=Ee.exec(t.slice(n,n+1));return r?(e.w=+r[0],n+r[0].length):-1}function ZI(e,t,n){var r=Ee.exec(t.slice(n,n+1));return r?(e.u=+r[0],n+r[0].length):-1}function XI(e,t,n){var r=Ee.exec(t.slice(n,n+2));return r?(e.U=+r[0],n+r[0].length):-1}function QI(e,t,n){var r=Ee.exec(t.slice(n,n+2));return r?(e.V=+r[0],n+r[0].length):-1}function ej(e,t,n){var r=Ee.exec(t.slice(n,n+2));return r?(e.W=+r[0],n+r[0].length):-1}function Nh(e,t,n){var r=Ee.exec(t.slice(n,n+4));return r?(e.y=+r[0],n+r[0].length):-1}function Ah(e,t,n){var r=Ee.exec(t.slice(n,n+2));return r?(e.y=+r[0]+(+r[0]>68?1900:2e3),n+r[0].length):-1}function tj(e,t,n){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n,n+6));return r?(e.Z=r[1]?0:-(r[2]+(r[3]||"00")),n+r[0].length):-1}function nj(e,t,n){var r=Ee.exec(t.slice(n,n+1));return r?(e.q=r[0]*3-3,n+r[0].length):-1}function rj(e,t,n){var r=Ee.exec(t.slice(n,n+2));return r?(e.m=r[0]-1,n+r[0].length):-1}function Sh(e,t,n){var r=Ee.exec(t.slice(n,n+2));return r?(e.d=+r[0],n+r[0].length):-1}function aj(e,t,n){var r=Ee.exec(t.slice(n,n+3));return r?(e.m=0,e.d=+r[0],n+r[0].length):-1}function Ph(e,t,n){var r=Ee.exec(t.slice(n,n+2));return r?(e.H=+r[0],n+r[0].length):-1}function ij(e,t,n){var r=Ee.exec(t.slice(n,n+2));return r?(e.M=+r[0],n+r[0].length):-1}function oj(e,t,n){var r=Ee.exec(t.slice(n,n+2));return r?(e.S=+r[0],n+r[0].length):-1}function sj(e,t,n){var r=Ee.exec(t.slice(n,n+3));return r?(e.L=+r[0],n+r[0].length):-1}function lj(e,t,n){var r=Ee.exec(t.slice(n,n+6));return r?(e.L=Math.floor(r[0]/1e3),n+r[0].length):-1}function cj(e,t,n){var r=UI.exec(t.slice(n,n+1));return r?n+r[0].length:-1}function uj(e,t,n){var r=Ee.exec(t.slice(n));return r?(e.Q=+r[0],n+r[0].length):-1}function dj(e,t,n){var r=Ee.exec(t.slice(n));return r?(e.s=+r[0],n+r[0].length):-1}function Oh(e,t){return ee(e.getDate(),t,2)}function hj(e,t){return ee(e.getHours(),t,2)}function mj(e,t){return ee(e.getHours()%12||12,t,2)}function pj(e,t){return ee(1+da.count(Gt(e),e),t,3)}function Wf(e,t){return ee(e.getMilliseconds(),t,3)}function gj(e,t){return Wf(e,t)+"000"}function fj(e,t){return ee(e.getMonth()+1,t,2)}function yj(e,t){return ee(e.getMinutes(),t,2)}function vj(e,t){return ee(e.getSeconds(),t,2)}function bj(e){var t=e.getDay();return t===0?7:t}function wj(e,t){return ee(vo.count(Gt(e)-1,e),t,2)}function Ff(e){var t=e.getDay();return t>=4||t===0?sr(e):sr.ceil(e)}function xj(e,t){return e=Ff(e),ee(sr.count(Gt(e),e)+(Gt(e).getDay()===4),t,2)}function kj(e){return e.getDay()}function Tj(e,t){return ee(Ii.count(Gt(e)-1,e),t,2)}function Ij(e,t){return ee(e.getFullYear()%100,t,2)}function jj(e,t){return e=Ff(e),ee(e.getFullYear()%100,t,2)}function Nj(e,t){return ee(e.getFullYear()%1e4,t,4)}function Aj(e,t){var n=e.getDay();return e=n>=4||n===0?sr(e):sr.ceil(e),ee(e.getFullYear()%1e4,t,4)}function Sj(e){var t=e.getTimezoneOffset();return(t>0?"-":(t*=-1,"+"))+ee(t/60|0,"0",2)+ee(t%60,"0",2)}function Ch(e,t){return ee(e.getUTCDate(),t,2)}function Pj(e,t){return ee(e.getUTCHours(),t,2)}function Oj(e,t){return ee(e.getUTCHours()%12||12,t,2)}function Cj(e,t){return ee(1+yo.count(Ut(e),e),t,3)}function Hf(e,t){return ee(e.getUTCMilliseconds(),t,3)}function Ej(e,t){return Hf(e,t)+"000"}function Mj(e,t){return ee(e.getUTCMonth()+1,t,2)}function $j(e,t){return ee(e.getUTCMinutes(),t,2)}function Dj(e,t){return ee(e.getUTCSeconds(),t,2)}function Bj(e){var t=e.getUTCDay();return t===0?7:t}function _j(e,t){return ee(bo.count(Ut(e)-1,e),t,2)}function zf(e){var t=e.getUTCDay();return t>=4||t===0?lr(e):lr.ceil(e)}function Rj(e,t){return e=zf(e),ee(lr.count(Ut(e),e)+(Ut(e).getUTCDay()===4),t,2)}function Lj(e){return e.getUTCDay()}function Wj(e,t){return ee(ji.count(Ut(e)-1,e),t,2)}function Fj(e,t){return ee(e.getUTCFullYear()%100,t,2)}function Hj(e,t){return e=zf(e),ee(e.getUTCFullYear()%100,t,2)}function zj(e,t){return ee(e.getUTCFullYear()%1e4,t,4)}function Yj(e,t){var n=e.getUTCDay();return e=n>=4||n===0?lr(e):lr.ceil(e),ee(e.getUTCFullYear()%1e4,t,4)}function qj(){return"+0000"}function Eh(){return"%"}function Mh(e){return+e}function $h(e){return Math.floor(+e/1e3)}var zn,Yf,qf;Gj({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});function Gj(e){return zn=GI(e),Yf=zn.format,zn.parse,qf=zn.utcFormat,zn.utcParse,zn}function Uj(e){return new Date(e)}function Kj(e){return e instanceof Date?+e:+new Date(+e)}function jc(e,t,n,r,a,i,s,l,c,u){var d=dc(),h=d.invert,m=d.domain,p=u(".%L"),g=u(":%S"),v=u("%I:%M"),y=u("%I %p"),b=u("%a %d"),x=u("%b %d"),k=u("%B"),I=u("%Y");function w(T){return(c(T)<T?p:l(T)<T?g:s(T)<T?v:i(T)<T?y:r(T)<T?a(T)<T?b:x:n(T)<T?k:I)(T)}return d.invert=function(T){return new Date(h(T))},d.domain=function(T){return arguments.length?m(Array.from(T,Kj)):m().map(Uj)},d.ticks=function(T){var j=m();return e(j[0],j[j.length-1],T??10)},d.tickFormat=function(T,j){return j==null?w:u(j)},d.nice=function(T){var j=m();return(!T||typeof T.range!="function")&&(T=t(j[0],j[j.length-1],T??10)),T?m(Cf(j,T)):d},d.copy=function(){return ua(d,jc(e,t,n,r,a,i,s,l,c,u))},d}function Vj(){return gt.apply(jc(YI,qI,Gt,Tc,vo,da,xc,bc,In,Yf).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}function Jj(){return gt.apply(jc(HI,zI,Ut,Ic,bo,yo,kc,wc,In,qf).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)]),arguments)}function wo(){var e=0,t=1,n,r,a,i,s=qe,l=!1,c;function u(h){return h==null||isNaN(h=+h)?c:s(a===0?.5:(h=(i(h)-n)*a,l?Math.max(0,Math.min(1,h)):h))}u.domain=function(h){return arguments.length?([e,t]=h,n=i(e=+e),r=i(t=+t),a=n===r?0:1/(r-n),u):[e,t]},u.clamp=function(h){return arguments.length?(l=!!h,u):l},u.interpolator=function(h){return arguments.length?(s=h,u):s};function d(h){return function(m){var p,g;return arguments.length?([p,g]=m,s=h(p,g),u):[s(0),s(1)]}}return u.range=d(mr),u.rangeRound=d(uc),u.unknown=function(h){return arguments.length?(c=h,u):c},function(h){return i=h,n=h(e),r=h(t),a=n===r?0:1/(r-n),u}}function gn(e,t){return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown())}function Gf(){var e=pn(wo()(qe));return e.copy=function(){return gn(e,Gf())},Xt.apply(e,arguments)}function Uf(){var e=pc(wo()).domain([1,10]);return e.copy=function(){return gn(e,Uf()).base(e.base())},Xt.apply(e,arguments)}function Kf(){var e=gc(wo());return e.copy=function(){return gn(e,Kf()).constant(e.constant())},Xt.apply(e,arguments)}function Nc(){var e=fc(wo());return e.copy=function(){return gn(e,Nc()).exponent(e.exponent())},Xt.apply(e,arguments)}function Zj(){return Nc.apply(null,arguments).exponent(.5)}function Vf(){var e=[],t=qe;function n(r){if(r!=null&&!isNaN(r=+r))return t((la(e,r,1)-1)/(e.length-1))}return n.domain=function(r){if(!arguments.length)return e.slice();e=[];for(let a of r)a!=null&&!isNaN(a=+a)&&e.push(a);return e.sort(cn),n},n.interpolator=function(r){return arguments.length?(t=r,n):t},n.range=function(){return e.map((r,a)=>t(a/(e.length-1)))},n.quantiles=function(r){return Array.from({length:r+1},(a,i)=>B2(e,i/r))},n.copy=function(){return Vf(t).domain(e)},Xt.apply(n,arguments)}function xo(){var e=0,t=.5,n=1,r=1,a,i,s,l,c,u=qe,d,h=!1,m;function p(v){return isNaN(v=+v)?m:(v=.5+((v=+d(v))-i)*(r*v<r*i?l:c),u(h?Math.max(0,Math.min(1,v)):v))}p.domain=function(v){return arguments.length?([e,t,n]=v,a=d(e=+e),i=d(t=+t),s=d(n=+n),l=a===i?0:.5/(i-a),c=i===s?0:.5/(s-i),r=i<a?-1:1,p):[e,t,n]},p.clamp=function(v){return arguments.length?(h=!!v,p):h},p.interpolator=function(v){return arguments.length?(u=v,p):u};function g(v){return function(y){var b,x,k;return arguments.length?([b,x,k]=y,u=cI(v,[b,x,k]),p):[u(0),u(.5),u(1)]}}return p.range=g(mr),p.rangeRound=g(uc),p.unknown=function(v){return arguments.length?(m=v,p):m},function(v){return d=v,a=v(e),i=v(t),s=v(n),l=a===i?0:.5/(i-a),c=i===s?0:.5/(s-i),r=i<a?-1:1,p}}function Jf(){var e=pn(xo()(qe));return e.copy=function(){return gn(e,Jf())},Xt.apply(e,arguments)}function Zf(){var e=pc(xo()).domain([.1,1,10]);return e.copy=function(){return gn(e,Zf()).base(e.base())},Xt.apply(e,arguments)}function Xf(){var e=gc(xo());return e.copy=function(){return gn(e,Xf()).constant(e.constant())},Xt.apply(e,arguments)}function Ac(){var e=fc(xo());return e.copy=function(){return gn(e,Ac()).exponent(e.exponent())},Xt.apply(e,arguments)}function Xj(){return Ac.apply(null,arguments).exponent(.5)}const Mr=Object.freeze(Object.defineProperty({__proto__:null,scaleBand:sc,scaleDiverging:Jf,scaleDivergingLog:Zf,scaleDivergingPow:Ac,scaleDivergingSqrt:Xj,scaleDivergingSymlog:Xf,scaleIdentity:Of,scaleImplicit:al,scaleLinear:Pf,scaleLog:Ef,scaleOrdinal:oc,scalePoint:L2,scalePow:yc,scaleQuantile:Df,scaleQuantize:Bf,scaleRadial:$f,scaleSequential:Gf,scaleSequentialLog:Uf,scaleSequentialPow:Nc,scaleSequentialQuantile:Vf,scaleSequentialSqrt:Zj,scaleSequentialSymlog:Kf,scaleSqrt:EI,scaleSymlog:Mf,scaleThreshold:_f,scaleTime:Vj,scaleUtc:Jj,tickFormat:Sf},Symbol.toStringTag,{value:"Module"}));var Qt=e=>e.chartData,Qf=S([Qt],e=>{var t=e.chartData!=null?e.chartData.length-1:0;return{chartData:e.chartData,computedData:e.computedData,dataEndIndex:t,dataStartIndex:0}}),ey=(e,t,n,r)=>r?Qf(e):Qt(e),Qj=(e,t,n)=>n?Qf(e):Qt(e);function mn(e){if(Array.isArray(e)&&e.length===2){var[t,n]=e;if(de(t)&&de(n))return!0}return!1}function Dh(e,t,n){return n?e:[Math.min(e[0],t[0]),Math.max(e[1],t[1])]}function ty(e,t){if(t&&typeof e!="function"&&Array.isArray(e)&&e.length===2){var[n,r]=e,a,i;if(de(n))a=n;else if(typeof n=="function")return;if(de(r))i=r;else if(typeof r=="function")return;var s=[a,i];if(mn(s))return s}}function eN(e,t,n){if(!(!n&&t==null)){if(typeof e=="function"&&t!=null)try{var r=e(t,n);if(mn(r))return Dh(r,t,n)}catch{}if(Array.isArray(e)&&e.length===2){var[a,i]=e,s,l;if(a==="auto")t!=null&&(s=Math.min(...t));else if(U(a))s=a;else if(typeof a=="function")try{t!=null&&(s=a(t==null?void 0:t[0]))}catch{}else if(typeof a=="string"&&td.test(a)){var c=td.exec(a);if(c==null||c[1]==null||t==null)s=void 0;else{var u=+c[1];s=t[0]-u}}else s=t==null?void 0:t[0];if(i==="auto")t!=null&&(l=Math.max(...t));else if(U(i))l=i;else if(typeof i=="function")try{t!=null&&(l=i(t==null?void 0:t[1]))}catch{}else if(typeof i=="string"&&nd.test(i)){var d=nd.exec(i);if(d==null||d[1]==null||t==null)l=void 0;else{var h=+d[1];l=t[1]+h}}else l=t==null?void 0:t[1];var m=[s,l];if(mn(m))return t==null?m:Dh(m,t,n)}}}var pr=1e9,tN={precision:20,rounding:4,toExpNeg:-7,toExpPos:21,LN10:"2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"},Pc,ue=!0,mt="[DecimalError] ",An=mt+"Invalid argument: ",Sc=mt+"Exponent out of range: ",gr=Math.floor,wn=Math.pow,nN=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,Qe,Se=1e7,se=7,ny=9007199254740991,Ni=gr(ny/se),H={};H.absoluteValue=H.abs=function(){var e=new this.constructor(this);return e.s&&(e.s=1),e};H.comparedTo=H.cmp=function(e){var t,n,r,a,i=this;if(e=new i.constructor(e),i.s!==e.s)return i.s||-e.s;if(i.e!==e.e)return i.e>e.e^i.s<0?1:-1;for(r=i.d.length,a=e.d.length,t=0,n=r<a?r:a;t<n;++t)if(i.d[t]!==e.d[t])return i.d[t]>e.d[t]^i.s<0?1:-1;return r===a?0:r>a^i.s<0?1:-1};H.decimalPlaces=H.dp=function(){var e=this,t=e.d.length-1,n=(t-e.e)*se;if(t=e.d[t],t)for(;t%10==0;t/=10)n--;return n<0?0:n};H.dividedBy=H.div=function(e){return Ft(this,new this.constructor(e))};H.dividedToIntegerBy=H.idiv=function(e){var t=this,n=t.constructor;return ae(Ft(t,new n(e),0,1),n.precision)};H.equals=H.eq=function(e){return!this.cmp(e)};H.exponent=function(){return ve(this)};H.greaterThan=H.gt=function(e){return this.cmp(e)>0};H.greaterThanOrEqualTo=H.gte=function(e){return this.cmp(e)>=0};H.isInteger=H.isint=function(){return this.e>this.d.length-2};H.isNegative=H.isneg=function(){return this.s<0};H.isPositive=H.ispos=function(){return this.s>0};H.isZero=function(){return this.s===0};H.lessThan=H.lt=function(e){return this.cmp(e)<0};H.lessThanOrEqualTo=H.lte=function(e){return this.cmp(e)<1};H.logarithm=H.log=function(e){var t,n=this,r=n.constructor,a=r.precision,i=a+5;if(e===void 0)e=new r(10);else if(e=new r(e),e.s<1||e.eq(Qe))throw Error(mt+"NaN");if(n.s<1)throw Error(mt+(n.s?"NaN":"-Infinity"));return n.eq(Qe)?new r(0):(ue=!1,t=Ft(Vr(n,i),Vr(e,i),i),ue=!0,ae(t,a))};H.minus=H.sub=function(e){var t=this;return e=new t.constructor(e),t.s==e.s?iy(t,e):ry(t,(e.s=-e.s,e))};H.modulo=H.mod=function(e){var t,n=this,r=n.constructor,a=r.precision;if(e=new r(e),!e.s)throw Error(mt+"NaN");return n.s?(ue=!1,t=Ft(n,e,0,1).times(e),ue=!0,n.minus(t)):ae(new r(n),a)};H.naturalExponential=H.exp=function(){return ay(this)};H.naturalLogarithm=H.ln=function(){return Vr(this)};H.negated=H.neg=function(){var e=new this.constructor(this);return e.s=-e.s||0,e};H.plus=H.add=function(e){var t=this;return e=new t.constructor(e),t.s==e.s?ry(t,e):iy(t,(e.s=-e.s,e))};H.precision=H.sd=function(e){var t,n,r,a=this;if(e!==void 0&&e!==!!e&&e!==1&&e!==0)throw Error(An+e);if(t=ve(a)+1,r=a.d.length-1,n=r*se+1,r=a.d[r],r){for(;r%10==0;r/=10)n--;for(r=a.d[0];r>=10;r/=10)n++}return e&&t>n?t:n};H.squareRoot=H.sqrt=function(){var e,t,n,r,a,i,s,l=this,c=l.constructor;if(l.s<1){if(!l.s)return new c(0);throw Error(mt+"NaN")}for(e=ve(l),ue=!1,a=Math.sqrt(+l),a==0||a==1/0?(t=Pt(l.d),(t.length+e)%2==0&&(t+="0"),a=Math.sqrt(t),e=gr((e+1)/2)-(e<0||e%2),a==1/0?t="5e"+e:(t=a.toExponential(),t=t.slice(0,t.indexOf("e")+1)+e),r=new c(t)):r=new c(a.toString()),n=c.precision,a=s=n+3;;)if(i=r,r=i.plus(Ft(l,i,s+2)).times(.5),Pt(i.d).slice(0,s)===(t=Pt(r.d)).slice(0,s)){if(t=t.slice(s-3,s+1),a==s&&t=="4999"){if(ae(i,n+1,0),i.times(i).eq(l)){r=i;break}}else if(t!="9999")break;s+=4}return ue=!0,ae(r,n)};H.times=H.mul=function(e){var t,n,r,a,i,s,l,c,u,d=this,h=d.constructor,m=d.d,p=(e=new h(e)).d;if(!d.s||!e.s)return new h(0);for(e.s*=d.s,n=d.e+e.e,c=m.length,u=p.length,c<u&&(i=m,m=p,p=i,s=c,c=u,u=s),i=[],s=c+u,r=s;r--;)i.push(0);for(r=u;--r>=0;){for(t=0,a=c+r;a>r;)l=i[a]+p[r]*m[a-r-1]+t,i[a--]=l%Se|0,t=l/Se|0;i[a]=(i[a]+t)%Se|0}for(;!i[--s];)i.pop();return t?++n:i.shift(),e.d=i,e.e=n,ue?ae(e,h.precision):e};H.toDecimalPlaces=H.todp=function(e,t){var n=this,r=n.constructor;return n=new r(n),e===void 0?n:(Mt(e,0,pr),t===void 0?t=r.rounding:Mt(t,0,8),ae(n,e+ve(n)+1,t))};H.toExponential=function(e,t){var n,r=this,a=r.constructor;return e===void 0?n=Mn(r,!0):(Mt(e,0,pr),t===void 0?t=a.rounding:Mt(t,0,8),r=ae(new a(r),e+1,t),n=Mn(r,!0,e+1)),n};H.toFixed=function(e,t){var n,r,a=this,i=a.constructor;return e===void 0?Mn(a):(Mt(e,0,pr),t===void 0?t=i.rounding:Mt(t,0,8),r=ae(new i(a),e+ve(a)+1,t),n=Mn(r.abs(),!1,e+ve(r)+1),a.isneg()&&!a.isZero()?"-"+n:n)};H.toInteger=H.toint=function(){var e=this,t=e.constructor;return ae(new t(e),ve(e)+1,t.rounding)};H.toNumber=function(){return+this};H.toPower=H.pow=function(e){var t,n,r,a,i,s,l=this,c=l.constructor,u=12,d=+(e=new c(e));if(!e.s)return new c(Qe);if(l=new c(l),!l.s){if(e.s<1)throw Error(mt+"Infinity");return l}if(l.eq(Qe))return l;if(r=c.precision,e.eq(Qe))return ae(l,r);if(t=e.e,n=e.d.length-1,s=t>=n,i=l.s,s){if((n=d<0?-d:d)<=ny){for(a=new c(Qe),t=Math.ceil(r/se+4),ue=!1;n%2&&(a=a.times(l),_h(a.d,t)),n=gr(n/2),n!==0;)l=l.times(l),_h(l.d,t);return ue=!0,e.s<0?new c(Qe).div(a):ae(a,r)}}else if(i<0)throw Error(mt+"NaN");return i=i<0&&e.d[Math.max(t,n)]&1?-1:1,l.s=1,ue=!1,a=e.times(Vr(l,r+u)),ue=!0,a=ay(a),a.s=i,a};H.toPrecision=function(e,t){var n,r,a=this,i=a.constructor;return e===void 0?(n=ve(a),r=Mn(a,n<=i.toExpNeg||n>=i.toExpPos)):(Mt(e,1,pr),t===void 0?t=i.rounding:Mt(t,0,8),a=ae(new i(a),e,t),n=ve(a),r=Mn(a,e<=n||n<=i.toExpNeg,e)),r};H.toSignificantDigits=H.tosd=function(e,t){var n=this,r=n.constructor;return e===void 0?(e=r.precision,t=r.rounding):(Mt(e,1,pr),t===void 0?t=r.rounding:Mt(t,0,8)),ae(new r(n),e,t)};H.toString=H.valueOf=H.val=H.toJSON=H[Symbol.for("nodejs.util.inspect.custom")]=function(){var e=this,t=ve(e),n=e.constructor;return Mn(e,t<=n.toExpNeg||t>=n.toExpPos)};function ry(e,t){var n,r,a,i,s,l,c,u,d=e.constructor,h=d.precision;if(!e.s||!t.s)return t.s||(t=new d(e)),ue?ae(t,h):t;if(c=e.d,u=t.d,s=e.e,a=t.e,c=c.slice(),i=s-a,i){for(i<0?(r=c,i=-i,l=u.length):(r=u,a=s,l=c.length),s=Math.ceil(h/se),l=s>l?s+1:l+1,i>l&&(i=l,r.length=1),r.reverse();i--;)r.push(0);r.reverse()}for(l=c.length,i=u.length,l-i<0&&(i=l,r=u,u=c,c=r),n=0;i;)n=(c[--i]=c[i]+u[i]+n)/Se|0,c[i]%=Se;for(n&&(c.unshift(n),++a),l=c.length;c[--l]==0;)c.pop();return t.d=c,t.e=a,ue?ae(t,h):t}function Mt(e,t,n){if(e!==~~e||e<t||e>n)throw Error(An+e)}function Pt(e){var t,n,r,a=e.length-1,i="",s=e[0];if(a>0){for(i+=s,t=1;t<a;t++)r=e[t]+"",n=se-r.length,n&&(i+=an(n)),i+=r;s=e[t],r=s+"",n=se-r.length,n&&(i+=an(n))}else if(s===0)return"0";for(;s%10===0;)s/=10;return i+s}var Ft=function(){function e(r,a){var i,s=0,l=r.length;for(r=r.slice();l--;)i=r[l]*a+s,r[l]=i%Se|0,s=i/Se|0;return s&&r.unshift(s),r}function t(r,a,i,s){var l,c;if(i!=s)c=i>s?1:-1;else for(l=c=0;l<i;l++)if(r[l]!=a[l]){c=r[l]>a[l]?1:-1;break}return c}function n(r,a,i){for(var s=0;i--;)r[i]-=s,s=r[i]<a[i]?1:0,r[i]=s*Se+r[i]-a[i];for(;!r[0]&&r.length>1;)r.shift()}return function(r,a,i,s){var l,c,u,d,h,m,p,g,v,y,b,x,k,I,w,T,j,E,C=r.constructor,$=r.s==a.s?1:-1,A=r.d,D=a.d;if(!r.s)return new C(r);if(!a.s)throw Error(mt+"Division by zero");for(c=r.e-a.e,j=D.length,w=A.length,p=new C($),g=p.d=[],u=0;D[u]==(A[u]||0);)++u;if(D[u]>(A[u]||0)&&--c,i==null?x=i=C.precision:s?x=i+(ve(r)-ve(a))+1:x=i,x<0)return new C(0);if(x=x/se+2|0,u=0,j==1)for(d=0,D=D[0],x++;(u<w||d)&&x--;u++)k=d*Se+(A[u]||0),g[u]=k/D|0,d=k%D|0;else{for(d=Se/(D[0]+1)|0,d>1&&(D=e(D,d),A=e(A,d),j=D.length,w=A.length),I=j,v=A.slice(0,j),y=v.length;y<j;)v[y++]=0;E=D.slice(),E.unshift(0),T=D[0],D[1]>=Se/2&&++T;do d=0,l=t(D,v,j,y),l<0?(b=v[0],j!=y&&(b=b*Se+(v[1]||0)),d=b/T|0,d>1?(d>=Se&&(d=Se-1),h=e(D,d),m=h.length,y=v.length,l=t(h,v,m,y),l==1&&(d--,n(h,j<m?E:D,m))):(d==0&&(l=d=1),h=D.slice()),m=h.length,m<y&&h.unshift(0),n(v,h,y),l==-1&&(y=v.length,l=t(D,v,j,y),l<1&&(d++,n(v,j<y?E:D,y))),y=v.length):l===0&&(d++,v=[0]),g[u++]=d,l&&v[0]?v[y++]=A[I]||0:(v=[A[I]],y=1);while((I++<w||v[0]!==void 0)&&x--)}return g[0]||g.shift(),p.e=c,ae(p,s?i+ve(p)+1:i)}}();function ay(e,t){var n,r,a,i,s,l,c=0,u=0,d=e.constructor,h=d.precision;if(ve(e)>16)throw Error(Sc+ve(e));if(!e.s)return new d(Qe);for(t==null?(ue=!1,l=h):l=t,s=new d(.03125);e.abs().gte(.1);)e=e.times(s),u+=5;for(r=Math.log(wn(2,u))/Math.LN10*2+5|0,l+=r,n=a=i=new d(Qe),d.precision=l;;){if(a=ae(a.times(e),l),n=n.times(++c),s=i.plus(Ft(a,n,l)),Pt(s.d).slice(0,l)===Pt(i.d).slice(0,l)){for(;u--;)i=ae(i.times(i),l);return d.precision=h,t==null?(ue=!0,ae(i,h)):i}i=s}}function ve(e){for(var t=e.e*se,n=e.d[0];n>=10;n/=10)t++;return t}function ds(e,t,n){if(t>e.LN10.sd())throw ue=!0,n&&(e.precision=n),Error(mt+"LN10 precision limit exceeded");return ae(new e(e.LN10),t)}function an(e){for(var t="";e--;)t+="0";return t}function Vr(e,t){var n,r,a,i,s,l,c,u,d,h=1,m=10,p=e,g=p.d,v=p.constructor,y=v.precision;if(p.s<1)throw Error(mt+(p.s?"NaN":"-Infinity"));if(p.eq(Qe))return new v(0);if(t==null?(ue=!1,u=y):u=t,p.eq(10))return t==null&&(ue=!0),ds(v,u);if(u+=m,v.precision=u,n=Pt(g),r=n.charAt(0),i=ve(p),Math.abs(i)<15e14){for(;r<7&&r!=1||r==1&&n.charAt(1)>3;)p=p.times(e),n=Pt(p.d),r=n.charAt(0),h++;i=ve(p),r>1?(p=new v("0."+n),i++):p=new v(r+"."+n.slice(1))}else return c=ds(v,u+2,y).times(i+""),p=Vr(new v(r+"."+n.slice(1)),u-m).plus(c),v.precision=y,t==null?(ue=!0,ae(p,y)):p;for(l=s=p=Ft(p.minus(Qe),p.plus(Qe),u),d=ae(p.times(p),u),a=3;;){if(s=ae(s.times(d),u),c=l.plus(Ft(s,new v(a),u)),Pt(c.d).slice(0,u)===Pt(l.d).slice(0,u))return l=l.times(2),i!==0&&(l=l.plus(ds(v,u+2,y).times(i+""))),l=Ft(l,new v(h),u),v.precision=y,t==null?(ue=!0,ae(l,y)):l;l=c,a+=2}}function Bh(e,t){var n,r,a;for((n=t.indexOf("."))>-1&&(t=t.replace(".","")),(r=t.search(/e/i))>0?(n<0&&(n=r),n+=+t.slice(r+1),t=t.substring(0,r)):n<0&&(n=t.length),r=0;t.charCodeAt(r)===48;)++r;for(a=t.length;t.charCodeAt(a-1)===48;)--a;if(t=t.slice(r,a),t){if(a-=r,n=n-r-1,e.e=gr(n/se),e.d=[],r=(n+1)%se,n<0&&(r+=se),r<a){for(r&&e.d.push(+t.slice(0,r)),a-=se;r<a;)e.d.push(+t.slice(r,r+=se));t=t.slice(r),r=se-t.length}else r-=a;for(;r--;)t+="0";if(e.d.push(+t),ue&&(e.e>Ni||e.e<-Ni))throw Error(Sc+n)}else e.s=0,e.e=0,e.d=[0];return e}function ae(e,t,n){var r,a,i,s,l,c,u,d,h=e.d;for(s=1,i=h[0];i>=10;i/=10)s++;if(r=t-s,r<0)r+=se,a=t,u=h[d=0];else{if(d=Math.ceil((r+1)/se),i=h.length,d>=i)return e;for(u=i=h[d],s=1;i>=10;i/=10)s++;r%=se,a=r-se+s}if(n!==void 0&&(i=wn(10,s-a-1),l=u/i%10|0,c=t<0||h[d+1]!==void 0||u%i,c=n<4?(l||c)&&(n==0||n==(e.s<0?3:2)):l>5||l==5&&(n==4||c||n==6&&(r>0?a>0?u/wn(10,s-a):0:h[d-1])%10&1||n==(e.s<0?8:7))),t<1||!h[0])return c?(i=ve(e),h.length=1,t=t-i-1,h[0]=wn(10,(se-t%se)%se),e.e=gr(-t/se)||0):(h.length=1,h[0]=e.e=e.s=0),e;if(r==0?(h.length=d,i=1,d--):(h.length=d+1,i=wn(10,se-r),h[d]=a>0?(u/wn(10,s-a)%wn(10,a)|0)*i:0),c)for(;;)if(d==0){(h[0]+=i)==Se&&(h[0]=1,++e.e);break}else{if(h[d]+=i,h[d]!=Se)break;h[d--]=0,i=1}for(r=h.length;h[--r]===0;)h.pop();if(ue&&(e.e>Ni||e.e<-Ni))throw Error(Sc+ve(e));return e}function iy(e,t){var n,r,a,i,s,l,c,u,d,h,m=e.constructor,p=m.precision;if(!e.s||!t.s)return t.s?t.s=-t.s:t=new m(e),ue?ae(t,p):t;if(c=e.d,h=t.d,r=t.e,u=e.e,c=c.slice(),s=u-r,s){for(d=s<0,d?(n=c,s=-s,l=h.length):(n=h,r=u,l=c.length),a=Math.max(Math.ceil(p/se),l)+2,s>a&&(s=a,n.length=1),n.reverse(),a=s;a--;)n.push(0);n.reverse()}else{for(a=c.length,l=h.length,d=a<l,d&&(l=a),a=0;a<l;a++)if(c[a]!=h[a]){d=c[a]<h[a];break}s=0}for(d&&(n=c,c=h,h=n,t.s=-t.s),l=c.length,a=h.length-l;a>0;--a)c[l++]=0;for(a=h.length;a>s;){if(c[--a]<h[a]){for(i=a;i&&c[--i]===0;)c[i]=Se-1;--c[i],c[a]+=Se}c[a]-=h[a]}for(;c[--l]===0;)c.pop();for(;c[0]===0;c.shift())--r;return c[0]?(t.d=c,t.e=r,ue?ae(t,p):t):new m(0)}function Mn(e,t,n){var r,a=ve(e),i=Pt(e.d),s=i.length;return t?(n&&(r=n-s)>0?i=i.charAt(0)+"."+i.slice(1)+an(r):s>1&&(i=i.charAt(0)+"."+i.slice(1)),i=i+(a<0?"e":"e+")+a):a<0?(i="0."+an(-a-1)+i,n&&(r=n-s)>0&&(i+=an(r))):a>=s?(i+=an(a+1-s),n&&(r=n-a-1)>0&&(i=i+"."+an(r))):((r=a+1)<s&&(i=i.slice(0,r)+"."+i.slice(r)),n&&(r=n-s)>0&&(a+1===s&&(i+="."),i+=an(r))),e.s<0?"-"+i:i}function _h(e,t){if(e.length>t)return e.length=t,!0}function oy(e){var t,n,r;function a(i){var s=this;if(!(s instanceof a))return new a(i);if(s.constructor=a,i instanceof a){s.s=i.s,s.e=i.e,s.d=(i=i.d)?i.slice():i;return}if(typeof i=="number"){if(i*0!==0)throw Error(An+i);if(i>0)s.s=1;else if(i<0)i=-i,s.s=-1;else{s.s=0,s.e=0,s.d=[0];return}if(i===~~i&&i<1e7){s.e=0,s.d=[i];return}return Bh(s,i.toString())}else if(typeof i!="string")throw Error(An+i);if(i.charCodeAt(0)===45?(i=i.slice(1),s.s=-1):s.s=1,nN.test(i))Bh(s,i);else throw Error(An+i)}if(a.prototype=H,a.ROUND_UP=0,a.ROUND_DOWN=1,a.ROUND_CEIL=2,a.ROUND_FLOOR=3,a.ROUND_HALF_UP=4,a.ROUND_HALF_DOWN=5,a.ROUND_HALF_EVEN=6,a.ROUND_HALF_CEIL=7,a.ROUND_HALF_FLOOR=8,a.clone=oy,a.config=a.set=rN,e===void 0&&(e={}),e)for(r=["precision","rounding","toExpNeg","toExpPos","LN10"],t=0;t<r.length;)e.hasOwnProperty(n=r[t++])||(e[n]=this[n]);return a.config(e),a}function rN(e){if(!e||typeof e!="object")throw Error(mt+"Object expected");var t,n,r,a=["precision",1,pr,"rounding",0,8,"toExpNeg",-1/0,0,"toExpPos",0,1/0];for(t=0;t<a.length;t+=3)if((r=e[n=a[t]])!==void 0)if(gr(r)===r&&r>=a[t+1]&&r<=a[t+2])this[n]=r;else throw Error(An+n+": "+r);if((r=e[n="LN10"])!==void 0)if(r==Math.LN10)this[n]=new this(r);else throw Error(An+n+": "+r);return this}var Pc=oy(tN);Qe=new Pc(1);const ne=Pc;var aN=e=>e,sy={"@@functional/placeholder":!0},ly=e=>e===sy,Rh=e=>function t(){return arguments.length===0||arguments.length===1&&ly(arguments.length<=0?void 0:arguments[0])?t:e(...arguments)},cy=(e,t)=>e===1?t:Rh(function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];var i=r.filter(s=>s!==sy).length;return i>=e?t(...r):cy(e-i,Rh(function(){for(var s=arguments.length,l=new Array(s),c=0;c<s;c++)l[c]=arguments[c];var u=r.map(d=>ly(d)?l.shift():d);return t(...u,...l)}))}),iN=e=>cy(e.length,e),ll=(e,t)=>{for(var n=[],r=e;r<t;++r)n[r-e]=r;return n},oN=iN((e,t)=>Array.isArray(t)?t.map(e):Object.keys(t).map(n=>t[n]).map(e)),sN=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];if(!n.length)return aN;var a=n.reverse(),i=a[0],s=a.slice(1);return function(){return s.reduce((l,c)=>c(l),i(...arguments))}};function uy(e){var t;return e===0?t=1:t=Math.floor(new ne(e).abs().log(10).toNumber())+1,t}function dy(e,t,n){for(var r=new ne(e),a=0,i=[];r.lt(t)&&a<1e5;)i.push(r.toNumber()),r=r.add(n),a++;return i}var hy=e=>{var[t,n]=e,[r,a]=[t,n];return t>n&&([r,a]=[n,t]),[r,a]},my=(e,t,n)=>{if(e.lte(0))return new ne(0);var r=uy(e.toNumber()),a=new ne(10).pow(r),i=e.div(a),s=r!==1?.05:.1,l=new ne(Math.ceil(i.div(s).toNumber())).add(n).mul(s),c=l.mul(a);return t?new ne(c.toNumber()):new ne(Math.ceil(c.toNumber()))},lN=(e,t,n)=>{var r=new ne(1),a=new ne(e);if(!a.isint()&&n){var i=Math.abs(e);i<1?(r=new ne(10).pow(uy(e)-1),a=new ne(Math.floor(a.div(r).toNumber())).mul(r)):i>1&&(a=new ne(Math.floor(e)))}else e===0?a=new ne(Math.floor((t-1)/2)):n||(a=new ne(Math.floor(e)));var s=Math.floor((t-1)/2),l=sN(oN(c=>a.add(new ne(c-s).mul(r)).toNumber()),ll);return l(0,t)},py=function(t,n,r,a){var i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0;if(!Number.isFinite((n-t)/(r-1)))return{step:new ne(0),tickMin:new ne(0),tickMax:new ne(0)};var s=my(new ne(n).sub(t).div(r-1),a,i),l;t<=0&&n>=0?l=new ne(0):(l=new ne(t).add(n).div(2),l=l.sub(new ne(l).mod(s)));var c=Math.ceil(l.sub(t).div(s).toNumber()),u=Math.ceil(new ne(n).sub(l).div(s).toNumber()),d=c+u+1;return d>r?py(t,n,r,a,i+1):(d<r&&(u=n>0?u+(r-d):u,c=n>0?c:c+(r-d)),{step:s,tickMin:l.sub(new ne(c).mul(s)),tickMax:l.add(new ne(u).mul(s))})},cN=function(t){var[n,r]=t,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:6,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,s=Math.max(a,2),[l,c]=hy([n,r]);if(l===-1/0||c===1/0){var u=c===1/0?[l,...ll(0,a-1).map(()=>1/0)]:[...ll(0,a-1).map(()=>-1/0),c];return n>r?u.reverse():u}if(l===c)return lN(l,a,i);var{step:d,tickMin:h,tickMax:m}=py(l,c,s,i,0),p=dy(h,m.add(new ne(.1).mul(d)),d);return n>r?p.reverse():p},uN=function(t,n){var[r,a]=t,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,[s,l]=hy([r,a]);if(s===-1/0||l===1/0)return[r,a];if(s===l)return[s];var c=Math.max(n,2),u=my(new ne(l).sub(s).div(c-1),i,0),d=[...dy(new ne(s),new ne(l),u),l];return i===!1&&(d=d.map(h=>Math.round(h))),r>a?d.reverse():d},gy=e=>e.rootProps.maxBarSize,dN=e=>e.rootProps.barGap,fy=e=>e.rootProps.barCategoryGap,hN=e=>e.rootProps.barSize,ko=e=>e.rootProps.stackOffset,yy=e=>e.rootProps.reverseStackOrder,Oc=e=>e.options.chartName,Cc=e=>e.rootProps.syncId,vy=e=>e.rootProps.syncMethod,Ec=e=>e.options.eventEmitter,He={grid:-100,barBackground:-50,area:100,cursorRectangle:200,bar:300,line:400,axis:500,scatter:600,activeBar:1e3,cursorLine:1100,activeDot:1200,label:2e3},_t={allowDecimals:!1,allowDuplicatedCategory:!0,angleAxisId:0,axisLine:!0,axisLineType:"polygon",cx:0,cy:0,orientation:"outer",reversed:!1,scale:"auto",tick:!0,tickLine:!0,tickSize:8,type:"category",zIndex:He.axis},Xe={allowDataOverflow:!1,allowDecimals:!1,allowDuplicatedCategory:!0,angle:0,axisLine:!0,includeHidden:!1,hide:!1,label:!1,orientation:"right",radiusAxisId:0,reversed:!1,scale:"auto",stroke:"#ccc",tick:!0,tickCount:5,type:"number",zIndex:He.axis},To=(e,t)=>{if(!(!e||!t))return e!=null&&e.reversed?[t[1],t[0]]:t},mN={allowDataOverflow:!1,allowDecimals:!1,allowDuplicatedCategory:!1,dataKey:void 0,domain:void 0,id:_t.angleAxisId,includeHidden:!1,name:void 0,reversed:_t.reversed,scale:_t.scale,tick:_t.tick,tickCount:void 0,ticks:void 0,type:_t.type,unit:void 0},pN={allowDataOverflow:Xe.allowDataOverflow,allowDecimals:!1,allowDuplicatedCategory:Xe.allowDuplicatedCategory,dataKey:void 0,domain:void 0,id:Xe.radiusAxisId,includeHidden:!1,name:void 0,reversed:!1,scale:Xe.scale,tick:Xe.tick,tickCount:Xe.tickCount,ticks:void 0,type:Xe.type,unit:void 0},gN={allowDataOverflow:!1,allowDecimals:!1,allowDuplicatedCategory:_t.allowDuplicatedCategory,dataKey:void 0,domain:void 0,id:_t.angleAxisId,includeHidden:!1,name:void 0,reversed:!1,scale:_t.scale,tick:_t.tick,tickCount:void 0,ticks:void 0,type:"number",unit:void 0},fN={allowDataOverflow:Xe.allowDataOverflow,allowDecimals:!1,allowDuplicatedCategory:Xe.allowDuplicatedCategory,dataKey:void 0,domain:void 0,id:Xe.radiusAxisId,includeHidden:!1,name:void 0,reversed:!1,scale:Xe.scale,tick:Xe.tick,tickCount:Xe.tickCount,ticks:void 0,type:"category",unit:void 0},Mc=(e,t)=>e.polarAxis.angleAxis[t]!=null?e.polarAxis.angleAxis[t]:e.layout.layoutType==="radial"?gN:mN,$c=(e,t)=>e.polarAxis.radiusAxis[t]!=null?e.polarAxis.radiusAxis[t]:e.layout.layoutType==="radial"?fN:pN,Io=e=>e.polarOptions,Dc=S([Jt,Zt,Ce],m2),by=S([Io,Dc],(e,t)=>{if(e!=null)return kt(e.innerRadius,t,0)}),wy=S([Io,Dc],(e,t)=>{if(e!=null)return kt(e.outerRadius,t,t*.8)}),yN=e=>{if(e==null)return[0,0];var{startAngle:t,endAngle:n}=e;return[t,n]},xy=S([Io],yN);S([Mc,xy],To);var ky=S([Dc,by,wy],(e,t,n)=>{if(!(e==null||t==null||n==null))return[t,n]});S([$c,ky],To);var Ty=S([re,Io,by,wy,Jt,Zt],(e,t,n,r,a,i)=>{if(!(e!=="centric"&&e!=="radial"||t==null||n==null||r==null)){var{cx:s,cy:l,startAngle:c,endAngle:u}=t;return{cx:kt(s,a,a/2),cy:kt(l,i,i/2),innerRadius:n,outerRadius:r,startAngle:c,endAngle:u,clockWise:!1}}}),xe=(e,t)=>t,jo=(e,t,n)=>n;function Bc(e){return e==null?void 0:e.id}function Iy(e,t,n){var{chartData:r=[]}=t,{allowDuplicatedCategory:a,dataKey:i}=n,s=new Map;return e.forEach(l=>{var c,u=(c=l.data)!==null&&c!==void 0?c:r;if(!(u==null||u.length===0)){var d=Bc(l);u.forEach((h,m)=>{var p=i==null||a?m:String(_e(h,i,null)),g=_e(h,l.dataKey,0),v;s.has(p)?v=s.get(p):v={},Object.assign(v,{[d]:g}),s.set(p,v)})}}),Array.from(s.values())}function No(e){return"stackId"in e&&e.stackId!=null&&e.dataKey!=null}var Ao=(e,t)=>e===t?!0:e==null||t==null?!1:e[0]===t[0]&&e[1]===t[1];function So(e,t){return Array.isArray(e)&&Array.isArray(t)&&e.length===0&&t.length===0?!0:e===t}function vN(e,t){if(e.length===t.length){for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return!1}var ke=e=>{var t=re(e);return t==="horizontal"?"xAxis":t==="vertical"?"yAxis":t==="centric"?"angleAxis":"radiusAxis"},fr=e=>e.tooltip.settings.axisId;function Lh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ai(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Lh(Object(n),!0).forEach(function(r){bN(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Lh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function bN(e,t,n){return(t=wN(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function wN(e){var t=xN(e,"string");return typeof t=="symbol"?t:t+""}function xN(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var cl=[0,"auto"],Ne={allowDataOverflow:!1,allowDecimals:!0,allowDuplicatedCategory:!0,angle:0,dataKey:void 0,domain:void 0,height:30,hide:!0,id:0,includeHidden:!1,interval:"preserveEnd",minTickGap:5,mirror:!1,name:void 0,orientation:"bottom",padding:{left:0,right:0},reversed:!1,scale:"auto",tick:!0,tickCount:5,tickFormatter:void 0,ticks:void 0,type:"category",unit:void 0},jy=(e,t)=>e.cartesianAxis.xAxis[t],en=(e,t)=>{var n=jy(e,t);return n??Ne},Ae={allowDataOverflow:!1,allowDecimals:!0,allowDuplicatedCategory:!0,angle:0,dataKey:void 0,domain:cl,hide:!0,id:0,includeHidden:!1,interval:"preserveEnd",minTickGap:5,mirror:!1,name:void 0,orientation:"left",padding:{top:0,bottom:0},reversed:!1,scale:"auto",tick:!0,tickCount:5,tickFormatter:void 0,ticks:void 0,type:"number",unit:void 0,width:ia},Ny=(e,t)=>e.cartesianAxis.yAxis[t],tn=(e,t)=>{var n=Ny(e,t);return n??Ae},kN={domain:[0,"auto"],includeHidden:!1,reversed:!1,allowDataOverflow:!1,allowDuplicatedCategory:!1,dataKey:void 0,id:0,name:"",range:[64,64],scale:"auto",type:"number",unit:""},_c=(e,t)=>{var n=e.cartesianAxis.zAxis[t];return n??kN},Ve=(e,t,n)=>{switch(t){case"xAxis":return en(e,n);case"yAxis":return tn(e,n);case"zAxis":return _c(e,n);case"angleAxis":return Mc(e,n);case"radiusAxis":return $c(e,n);default:throw new Error("Unexpected axis type: ".concat(t))}},TN=(e,t,n)=>{switch(t){case"xAxis":return en(e,n);case"yAxis":return tn(e,n);default:throw new Error("Unexpected axis type: ".concat(t))}},ha=(e,t,n)=>{switch(t){case"xAxis":return en(e,n);case"yAxis":return tn(e,n);case"angleAxis":return Mc(e,n);case"radiusAxis":return $c(e,n);default:throw new Error("Unexpected axis type: ".concat(t))}},Ay=e=>e.graphicalItems.cartesianItems.some(t=>t.type==="bar")||e.graphicalItems.polarItems.some(t=>t.type==="radialBar");function Sy(e,t){return n=>{switch(e){case"xAxis":return"xAxisId"in n&&n.xAxisId===t;case"yAxis":return"yAxisId"in n&&n.yAxisId===t;case"zAxis":return"zAxisId"in n&&n.zAxisId===t;case"angleAxis":return"angleAxisId"in n&&n.angleAxisId===t;case"radiusAxis":return"radiusAxisId"in n&&n.radiusAxisId===t;default:return!1}}}var Rc=e=>e.graphicalItems.cartesianItems,IN=S([xe,jo],Sy),Py=(e,t,n)=>e.filter(n).filter(r=>(t==null?void 0:t.includeHidden)===!0?!0:!r.hide),ma=S([Rc,Ve,IN],Py,{memoizeOptions:{resultEqualityCheck:So}}),Oy=S([ma],e=>e.filter(t=>t.type==="area"||t.type==="bar").filter(No)),Cy=e=>e.filter(t=>!("stackId"in t)||t.stackId===void 0),jN=S([ma],Cy),Ey=e=>e.map(t=>t.data).filter(Boolean).flat(1),NN=S([ma],Ey,{memoizeOptions:{resultEqualityCheck:So}}),My=(e,t)=>{var{chartData:n=[],dataStartIndex:r,dataEndIndex:a}=t;return e.length>0?e:n.slice(r,a+1)},Lc=S([NN,ey],My),$y=(e,t,n)=>(t==null?void 0:t.dataKey)!=null?e.map(r=>({value:_e(r,t.dataKey)})):n.length>0?n.map(r=>r.dataKey).flatMap(r=>e.map(a=>({value:_e(a,r)}))):e.map(r=>({value:r})),Po=S([Lc,Ve,ma],$y);function Dy(e,t){switch(e){case"xAxis":return t.direction==="x";case"yAxis":return t.direction==="y";default:return!1}}function Ua(e){if(Et(e)||e instanceof Date){var t=Number(e);if(de(t))return t}}function Wh(e){if(Array.isArray(e)){var t=[Ua(e[0]),Ua(e[1])];return mn(t)?t:void 0}var n=Ua(e);if(n!=null)return[n,n]}function Kt(e){return e.map(Ua).filter(Kw)}function AN(e,t,n){return!n||typeof t!="number"||Ct(t)?[]:n.length?Kt(n.flatMap(r=>{var a=_e(e,r.dataKey),i,s;if(Array.isArray(a)?[i,s]=a:i=s=a,!(!de(i)||!de(s)))return[t-i,t+s]})):[]}var Te=e=>{var t=ke(e),n=fr(e);return ha(e,t,n)},pa=S([Te],e=>e==null?void 0:e.dataKey),SN=S([Oy,ey,Te],Iy),By=(e,t,n,r)=>{var a={},i=t.reduce((s,l)=>{if(l.stackId==null)return s;var c=s[l.stackId];return c==null&&(c=[]),c.push(l),s[l.stackId]=c,s},a);return Object.fromEntries(Object.entries(i).map(s=>{var[l,c]=s,u=r?[...c].reverse():c,d=u.map(Bc);return[l,{stackedData:a1(e,d,n),graphicalItems:u}]}))},ul=S([SN,Oy,ko,yy],By),_y=(e,t,n,r)=>{var{dataStartIndex:a,dataEndIndex:i}=t;if(r==null&&n!=="zAxis"){var s=c1(e,a,i);if(!(s!=null&&s[0]===0&&s[1]===0))return s}},PN=S([Ve],e=>e.allowDataOverflow),Wc=e=>{var t;if(e==null||!("domain"in e))return cl;if(e.domain!=null)return e.domain;if("ticks"in e&&e.ticks!=null){if(e.type==="number"){var n=Kt(e.ticks);return[Math.min(...n),Math.max(...n)]}if(e.type==="category")return e.ticks.map(String)}return(t=e==null?void 0:e.domain)!==null&&t!==void 0?t:cl},Ry=S([Ve],Wc),Ly=S([Ry,PN],ty),ON=S([ul,Qt,xe,Ly],_y,{memoizeOptions:{resultEqualityCheck:Ao}}),Fc=e=>e.errorBars,CN=(e,t,n)=>e.flatMap(r=>t[r.id]).filter(Boolean).filter(r=>Dy(n,r)),Si=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var a=n.filter(Boolean);if(a.length!==0){var i=a.flat(),s=Math.min(...i),l=Math.max(...i);return[s,l]}},Wy=(e,t,n,r,a)=>{var i,s;if(n.length>0&&e.forEach(l=>{n.forEach(c=>{var u,d,h=(u=r[c.id])===null||u===void 0?void 0:u.filter(b=>Dy(a,b)),m=_e(l,(d=t.dataKey)!==null&&d!==void 0?d:c.dataKey),p=AN(l,m,h);if(p.length>=2){var g=Math.min(...p),v=Math.max(...p);(i==null||g<i)&&(i=g),(s==null||v>s)&&(s=v)}var y=Wh(m);y!=null&&(i=i==null?y[0]:Math.min(i,y[0]),s=s==null?y[1]:Math.max(s,y[1]))})}),(t==null?void 0:t.dataKey)!=null&&e.forEach(l=>{var c=Wh(_e(l,t.dataKey));c!=null&&(i=i==null?c[0]:Math.min(i,c[0]),s=s==null?c[1]:Math.max(s,c[1]))}),de(i)&&de(s))return[i,s]},EN=S([Lc,Ve,jN,Fc,xe],Wy,{memoizeOptions:{resultEqualityCheck:Ao}});function MN(e){var{value:t}=e;if(Et(t)||t instanceof Date)return t}var $N=(e,t,n)=>{var r=e.map(MN).filter(a=>a!=null);return n&&(t.dataKey==null||t.allowDuplicatedCategory&&$p(r))?vf(0,e.length):t.allowDuplicatedCategory?r:Array.from(new Set(r))},Fy=e=>e.referenceElements.dots,yr=(e,t,n)=>e.filter(r=>r.ifOverflow==="extendDomain").filter(r=>t==="xAxis"?r.xAxisId===n:r.yAxisId===n),DN=S([Fy,xe,jo],yr),Hy=e=>e.referenceElements.areas,BN=S([Hy,xe,jo],yr),zy=e=>e.referenceElements.lines,_N=S([zy,xe,jo],yr),Yy=(e,t)=>{if(e!=null){var n=Kt(e.map(r=>t==="xAxis"?r.x:r.y));if(n.length!==0)return[Math.min(...n),Math.max(...n)]}},RN=S(DN,xe,Yy),qy=(e,t)=>{if(e!=null){var n=Kt(e.flatMap(r=>[t==="xAxis"?r.x1:r.y1,t==="xAxis"?r.x2:r.y2]));if(n.length!==0)return[Math.min(...n),Math.max(...n)]}},LN=S([BN,xe],qy);function WN(e){var t;if(e.x!=null)return Kt([e.x]);var n=(t=e.segment)===null||t===void 0?void 0:t.map(r=>r.x);return n==null||n.length===0?[]:Kt(n)}function FN(e){var t;if(e.y!=null)return Kt([e.y]);var n=(t=e.segment)===null||t===void 0?void 0:t.map(r=>r.y);return n==null||n.length===0?[]:Kt(n)}var Gy=(e,t)=>{if(e!=null){var n=e.flatMap(r=>t==="xAxis"?WN(r):FN(r));if(n.length!==0)return[Math.min(...n),Math.max(...n)]}},HN=S([_N,xe],Gy),zN=S(RN,HN,LN,(e,t,n)=>Si(e,n,t)),Uy=(e,t,n,r,a,i,s,l)=>{if(n!=null)return n;var c=s==="vertical"&&l==="xAxis"||s==="horizontal"&&l==="yAxis",u=c?Si(r,i,a):Si(i,a);return eN(t,u,e.allowDataOverflow)},YN=S([Ve,Ry,Ly,ON,EN,zN,re,xe],Uy,{memoizeOptions:{resultEqualityCheck:Ao}}),qN=[0,1],Ky=(e,t,n,r,a,i,s)=>{if(!((e==null||n==null||n.length===0)&&s===void 0)){var{dataKey:l,type:c}=e,u=_n(t,i);if(u&&l==null){var d;return vf(0,(d=n==null?void 0:n.length)!==null&&d!==void 0?d:0)}return c==="category"?$N(r,e,u):a==="expand"?qN:s}},Hc=S([Ve,re,Lc,Po,ko,xe,YN],Ky),Vy=(e,t,n,r,a)=>{if(e!=null){var{scale:i,type:s}=e;if(i==="auto")return t==="radial"&&a==="radiusAxis"?"band":t==="radial"&&a==="angleAxis"?"linear":s==="category"&&r&&(r.indexOf("LineChart")>=0||r.indexOf("AreaChart")>=0||r.indexOf("ComposedChart")>=0&&!n)?"point":s==="category"?"band":"linear";if(typeof i=="string"){var l="scale".concat(ea(i));return l in Mr?l:"point"}}},ga=S([Ve,re,Ay,Oc,xe],Vy);function GN(e){if(e!=null){if(e in Mr)return Mr[e]();var t="scale".concat(ea(e));if(t in Mr)return Mr[t]()}}function zc(e,t,n,r){if(!(n==null||r==null)){if(typeof e.scale=="function")return e.scale.copy().domain(n).range(r);var a=GN(t);if(a!=null){var i=a.domain(n).range(r);return Qk(i),i}}}var Jy=(e,t,n)=>{var r=Wc(t);if(!(n!=="auto"&&n!=="linear")){if(t!=null&&t.tickCount&&Array.isArray(r)&&(r[0]==="auto"||r[1]==="auto")&&mn(e))return cN(e,t.tickCount,t.allowDecimals);if(t!=null&&t.tickCount&&t.type==="number"&&mn(e))return uN(e,t.tickCount,t.allowDecimals)}},Yc=S([Hc,ha,ga],Jy),Zy=(e,t,n,r)=>{if(r!=="angleAxis"&&(e==null?void 0:e.type)==="number"&&mn(t)&&Array.isArray(n)&&n.length>0){var a=t[0],i=n[0],s=t[1],l=n[n.length-1];return[Math.min(a,i),Math.max(s,l)]}return t},UN=S([Ve,Hc,Yc,xe],Zy),KN=S(Po,Ve,(e,t)=>{if(!(!t||t.type!=="number")){var n=1/0,r=Array.from(Kt(e.map(h=>h.value))).sort((h,m)=>h-m),a=r[0],i=r[r.length-1];if(a==null||i==null)return 1/0;var s=i-a;if(s===0)return 1/0;for(var l=0;l<r.length-1;l++){var c=r[l],u=r[l+1];if(!(c==null||u==null)){var d=u-c;n=Math.min(n,d)}}return n/s}}),Xy=S(KN,re,fy,Ce,(e,t,n,r,a)=>a,(e,t,n,r,a)=>{if(!de(e))return 0;var i=t==="vertical"?r.height:r.width;if(a==="gap")return e*i/2;if(a==="no-gap"){var s=kt(n,e*i),l=e*i/2;return l-s-(l-s)/i*s}return 0}),VN=(e,t,n)=>{var r=en(e,t);return r==null||typeof r.padding!="string"?0:Xy(e,"xAxis",t,n,r.padding)},JN=(e,t,n)=>{var r=tn(e,t);return r==null||typeof r.padding!="string"?0:Xy(e,"yAxis",t,n,r.padding)},ZN=S(en,VN,(e,t)=>{var n,r;if(e==null)return{left:0,right:0};var{padding:a}=e;return typeof a=="string"?{left:t,right:t}:{left:((n=a.left)!==null&&n!==void 0?n:0)+t,right:((r=a.right)!==null&&r!==void 0?r:0)+t}}),XN=S(tn,JN,(e,t)=>{var n,r;if(e==null)return{top:0,bottom:0};var{padding:a}=e;return typeof a=="string"?{top:t,bottom:t}:{top:((n=a.top)!==null&&n!==void 0?n:0)+t,bottom:((r=a.bottom)!==null&&r!==void 0?r:0)+t}}),QN=S([Ce,ZN,lo,so,(e,t,n)=>n],(e,t,n,r,a)=>{var{padding:i}=r;return a?[i.left,n.width-i.right]:[e.left+t.left,e.left+e.width-t.right]}),eA=S([Ce,re,XN,lo,so,(e,t,n)=>n],(e,t,n,r,a,i)=>{var{padding:s}=a;return i?[r.height-s.bottom,s.top]:t==="horizontal"?[e.top+e.height-n.bottom,e.top+n.top]:[e.top+n.top,e.top+e.height-n.bottom]}),fa=(e,t,n,r)=>{var a;switch(t){case"xAxis":return QN(e,n,r);case"yAxis":return eA(e,n,r);case"zAxis":return(a=_c(e,n))===null||a===void 0?void 0:a.range;case"angleAxis":return xy(e);case"radiusAxis":return ky(e,n);default:return}},Qy=S([Ve,fa],To),Oo=S([Ve,ga,UN,Qy],zc);S([ma,Fc,xe],CN);function e0(e,t){return e.id<t.id?-1:e.id>t.id?1:0}var Co=(e,t)=>t,Eo=(e,t,n)=>n,tA=S(io,Co,Eo,(e,t,n)=>e.filter(r=>r.orientation===t).filter(r=>r.mirror===n).sort(e0)),nA=S(oo,Co,Eo,(e,t,n)=>e.filter(r=>r.orientation===t).filter(r=>r.mirror===n).sort(e0)),t0=(e,t)=>({width:e.width,height:t.height}),rA=(e,t)=>{var n=typeof t.width=="number"?t.width:ia;return{width:n,height:e.height}},n0=S(Ce,en,t0),aA=(e,t,n)=>{switch(t){case"top":return e.top;case"bottom":return n-e.bottom;default:return 0}},iA=(e,t,n)=>{switch(t){case"left":return e.left;case"right":return n-e.right;default:return 0}},oA=S(Zt,Ce,tA,Co,Eo,(e,t,n,r,a)=>{var i={},s;return n.forEach(l=>{var c=t0(t,l);s==null&&(s=aA(t,r,e));var u=r==="top"&&!a||r==="bottom"&&a;i[l.id]=s-Number(u)*c.height,s+=(u?-1:1)*c.height}),i}),sA=S(Jt,Ce,nA,Co,Eo,(e,t,n,r,a)=>{var i={},s;return n.forEach(l=>{var c=rA(t,l);s==null&&(s=iA(t,r,e));var u=r==="left"&&!a||r==="right"&&a;i[l.id]=s-Number(u)*c.width,s+=(u?-1:1)*c.width}),i}),lA=(e,t)=>{var n=en(e,t);if(n!=null)return oA(e,n.orientation,n.mirror)},cA=S([Ce,en,lA,(e,t)=>t],(e,t,n,r)=>{if(t!=null){var a=n==null?void 0:n[r];return a==null?{x:e.left,y:0}:{x:e.left,y:a}}}),uA=(e,t)=>{var n=tn(e,t);if(n!=null)return sA(e,n.orientation,n.mirror)},dA=S([Ce,tn,uA,(e,t)=>t],(e,t,n,r)=>{if(t!=null){var a=n==null?void 0:n[r];return a==null?{x:0,y:e.top}:{x:a,y:e.top}}}),r0=S(Ce,tn,(e,t)=>{var n=typeof t.width=="number"?t.width:ia;return{width:n,height:e.height}}),Fh=(e,t,n)=>{switch(t){case"xAxis":return n0(e,n).width;case"yAxis":return r0(e,n).height;default:return}},a0=(e,t,n,r)=>{if(n!=null){var{allowDuplicatedCategory:a,type:i,dataKey:s}=n,l=_n(e,r),c=t.map(u=>u.value);if(s&&l&&i==="category"&&a&&$p(c))return c}},qc=S([re,Po,Ve,xe],a0),i0=(e,t,n,r)=>{if(!(n==null||n.dataKey==null)){var{type:a,scale:i}=n,s=_n(e,r);if(s&&(a==="number"||i!=="auto"))return t.map(l=>l.value)}},Gc=S([re,Po,ha,xe],i0);S([re,TN,ga,Oo,qc,Gc,fa,Yc,xe],(e,t,n,r,a,i,s,l,c)=>{if(t!=null){var u=_n(e,c);return{angle:t.angle,interval:t.interval,minTickGap:t.minTickGap,orientation:t.orientation,tick:t.tick,tickCount:t.tickCount,tickFormatter:t.tickFormatter,ticks:t.ticks,type:t.type,unit:t.unit,axisType:c,categoricalDomain:i,duplicateDomain:a,isCategorical:u,niceTicks:l,range:s,realScaleType:n,scale:r}}});var hA=(e,t,n,r,a,i,s,l,c)=>{if(!(t==null||r==null)){var u=_n(e,c),{type:d,ticks:h,tickCount:m}=t,p=n==="scaleBand"&&typeof r.bandwidth=="function"?r.bandwidth()/2:2,g=d==="category"&&r.bandwidth?r.bandwidth()/p:0;g=c==="angleAxis"&&i!=null&&i.length>=2?et(i[0]-i[1])*2*g:g;var v=h||a;if(v){var y=v.map((b,x)=>{var k=s?s.indexOf(b):b;return{index:x,coordinate:r(k)+g,value:b,offset:g}});return y.filter(b=>de(b.coordinate))}return u&&l?l.map((b,x)=>({coordinate:r(b)+g,value:b,index:x,offset:g})).filter(b=>de(b.coordinate)):r.ticks?r.ticks(m).map(b=>({coordinate:r(b)+g,value:b,offset:g})):r.domain().map((b,x)=>({coordinate:r(b)+g,value:s?s[b]:b,index:x,offset:g}))}},o0=S([re,ha,ga,Oo,Yc,fa,qc,Gc,xe],hA),mA=(e,t,n,r,a,i,s)=>{if(!(t==null||n==null||r==null||r[0]===r[1])){var l=_n(e,s),{tickCount:c}=t,u=0;return u=s==="angleAxis"&&(r==null?void 0:r.length)>=2?et(r[0]-r[1])*2*u:u,l&&i?i.map((d,h)=>({coordinate:n(d)+u,value:d,index:h,offset:u})):n.ticks?n.ticks(c).map(d=>({coordinate:n(d)+u,value:d,offset:u})):n.domain().map((d,h)=>({coordinate:n(d)+u,value:a?a[d]:d,index:h,offset:u}))}},cr=S([re,ha,Oo,fa,qc,Gc,xe],mA),ur=S(Ve,Oo,(e,t)=>{if(!(e==null||t==null))return Ai(Ai({},e),{},{scale:t})}),pA=S([Ve,ga,Hc,Qy],zc);S((e,t,n)=>_c(e,n),pA,(e,t)=>{if(!(e==null||t==null))return Ai(Ai({},e),{},{scale:t})});var gA=S([re,io,oo],(e,t,n)=>{switch(e){case"horizontal":return t.some(r=>r.reversed)?"right-to-left":"left-to-right";case"vertical":return n.some(r=>r.reversed)?"bottom-to-top":"top-to-bottom";case"centric":case"radial":return"left-to-right";default:return}}),s0=e=>e.options.defaultTooltipEventType,l0=e=>e.options.validateTooltipEventTypes;function c0(e,t,n){if(e==null)return t;var r=e?"axis":"item";return n==null?t:n.includes(r)?r:t}function Uc(e,t){var n=s0(e),r=l0(e);return c0(t,n,r)}function fA(e){return V(t=>Uc(t,e))}var u0=(e,t)=>{var n,r=Number(t);if(!(Ct(r)||t==null))return r>=0?e==null||(n=e[r])===null||n===void 0?void 0:n.value:void 0},yA=e=>e.tooltip.settings,sn={active:!1,index:null,dataKey:void 0,graphicalItemId:void 0,coordinate:void 0},vA={itemInteraction:{click:sn,hover:sn},axisInteraction:{click:sn,hover:sn},keyboardInteraction:sn,syncInteraction:{active:!1,index:null,dataKey:void 0,label:void 0,coordinate:void 0,sourceViewBox:void 0,graphicalItemId:void 0},tooltipItemPayloads:[],settings:{shared:void 0,trigger:"hover",axisId:0,active:!1,defaultIndex:void 0}},d0=Ze({name:"tooltip",initialState:vA,reducers:{addTooltipEntrySettings:{reducer(e,t){e.tooltipItemPayloads.push(t.payload)},prepare:ce()},replaceTooltipEntrySettings:{reducer(e,t){var{prev:n,next:r}=t.payload,a=xt(e).tooltipItemPayloads.indexOf(n);a>-1&&(e.tooltipItemPayloads[a]=r)},prepare:ce()},removeTooltipEntrySettings:{reducer(e,t){var n=xt(e).tooltipItemPayloads.indexOf(t.payload);n>-1&&e.tooltipItemPayloads.splice(n,1)},prepare:ce()},setTooltipSettingsState(e,t){e.settings=t.payload},setActiveMouseOverItemIndex(e,t){e.syncInteraction.active=!1,e.keyboardInteraction.active=!1,e.itemInteraction.hover.active=!0,e.itemInteraction.hover.index=t.payload.activeIndex,e.itemInteraction.hover.dataKey=t.payload.activeDataKey,e.itemInteraction.hover.graphicalItemId=t.payload.activeGraphicalItemId,e.itemInteraction.hover.coordinate=t.payload.activeCoordinate},mouseLeaveChart(e){e.itemInteraction.hover.active=!1,e.axisInteraction.hover.active=!1},mouseLeaveItem(e){e.itemInteraction.hover.active=!1},setActiveClickItemIndex(e,t){e.syncInteraction.active=!1,e.itemInteraction.click.active=!0,e.keyboardInteraction.active=!1,e.itemInteraction.click.index=t.payload.activeIndex,e.itemInteraction.click.dataKey=t.payload.activeDataKey,e.itemInteraction.click.graphicalItemId=t.payload.activeGraphicalItemId,e.itemInteraction.click.coordinate=t.payload.activeCoordinate},setMouseOverAxisIndex(e,t){e.syncInteraction.active=!1,e.axisInteraction.hover.active=!0,e.keyboardInteraction.active=!1,e.axisInteraction.hover.index=t.payload.activeIndex,e.axisInteraction.hover.dataKey=t.payload.activeDataKey,e.axisInteraction.hover.coordinate=t.payload.activeCoordinate},setMouseClickAxisIndex(e,t){e.syncInteraction.active=!1,e.keyboardInteraction.active=!1,e.axisInteraction.click.active=!0,e.axisInteraction.click.index=t.payload.activeIndex,e.axisInteraction.click.dataKey=t.payload.activeDataKey,e.axisInteraction.click.coordinate=t.payload.activeCoordinate},setSyncInteraction(e,t){e.syncInteraction=t.payload},setKeyboardInteraction(e,t){e.keyboardInteraction.active=t.payload.active,e.keyboardInteraction.index=t.payload.activeIndex,e.keyboardInteraction.coordinate=t.payload.activeCoordinate}}}),{addTooltipEntrySettings:bA,replaceTooltipEntrySettings:wA,removeTooltipEntrySettings:xA,setTooltipSettingsState:kA,setActiveMouseOverItemIndex:h0,mouseLeaveItem:TA,mouseLeaveChart:m0,setActiveClickItemIndex:IA,setMouseOverAxisIndex:p0,setMouseClickAxisIndex:jA,setSyncInteraction:dl,setKeyboardInteraction:hl}=d0.actions,NA=d0.reducer;function Hh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ra(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Hh(Object(n),!0).forEach(function(r){AA(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Hh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function AA(e,t,n){return(t=SA(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function SA(e){var t=PA(e,"string");return typeof t=="symbol"?t:t+""}function PA(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function OA(e,t,n){return t==="axis"?n==="click"?e.axisInteraction.click:e.axisInteraction.hover:n==="click"?e.itemInteraction.click:e.itemInteraction.hover}function CA(e){return e.index!=null}var g0=(e,t,n,r)=>{if(t==null)return sn;var a=OA(e,t,n);if(a==null)return sn;if(a.active)return a;if(e.keyboardInteraction.active)return e.keyboardInteraction;if(e.syncInteraction.active&&e.syncInteraction.index!=null)return e.syncInteraction;var i=e.settings.active===!0;if(CA(a)){if(i)return Ra(Ra({},a),{},{active:!0})}else if(r!=null)return{active:!0,coordinate:void 0,dataKey:void 0,index:r,graphicalItemId:void 0};return Ra(Ra({},sn),{},{coordinate:a.coordinate})};function EA(e){if(typeof e=="number")return Number.isFinite(e)?e:void 0;if(e instanceof Date){var t=e.valueOf();return Number.isFinite(t)?t:void 0}var n=Number(e);return Number.isFinite(n)?n:void 0}function MA(e,t){var n=EA(e),r=t[0],a=t[1];if(n===void 0)return!1;var i=Math.min(r,a),s=Math.max(r,a);return n>=i&&n<=s}function $A(e,t,n){if(n==null||t==null)return!0;var r=_e(e,t);return r==null||!mn(n)?!0:MA(r,n)}var Kc=(e,t,n,r)=>{var a=e==null?void 0:e.index;if(a==null)return null;var i=Number(a);if(!de(i))return a;var s=0,l=1/0;t.length>0&&(l=t.length-1);var c=Math.max(s,Math.min(i,l)),u=t[c];return u==null||$A(u,n,r)?String(c):null},f0=(e,t,n,r,a,i,s,l)=>{if(!(i==null||l==null)){var c=s[0],u=c==null?void 0:l(c.positions,i);if(u!=null)return u;var d=a==null?void 0:a[Number(i)];if(d)switch(n){case"horizontal":return{x:d.coordinate,y:(r.top+t)/2};default:return{x:(r.left+e)/2,y:d.coordinate}}}},y0=(e,t,n,r)=>{if(t==="axis")return e.tooltipItemPayloads;if(e.tooltipItemPayloads.length===0)return[];var a;if(n==="hover"?a=e.itemInteraction.hover.graphicalItemId:a=e.itemInteraction.click.graphicalItemId,a==null&&r!=null){var i=e.tooltipItemPayloads[0];return i!=null?[i]:[]}return e.tooltipItemPayloads.filter(s=>{var l;return((l=s.settings)===null||l===void 0?void 0:l.graphicalItemId)===a})},ya=e=>e.options.tooltipPayloadSearcher,vr=e=>e.tooltip;function zh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Yh(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?zh(Object(n),!0).forEach(function(r){DA(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):zh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function DA(e,t,n){return(t=BA(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function BA(e){var t=_A(e,"string");return typeof t=="symbol"?t:t+""}function _A(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function RA(e,t){return e??t}var v0=(e,t,n,r,a,i,s)=>{if(!(t==null||i==null)){var{chartData:l,computedData:c,dataStartIndex:u,dataEndIndex:d}=n,h=[];return e.reduce((m,p)=>{var g,{dataDefinedOnItem:v,settings:y}=p,b=RA(v,l),x=Array.isArray(b)?Fg(b,u,d):b,k=(g=y==null?void 0:y.dataKey)!==null&&g!==void 0?g:r,I=y==null?void 0:y.nameKey,w;if(r&&Array.isArray(x)&&!Array.isArray(x[0])&&s==="axis"?w=Uw(x,r,a):w=i(x,t,c,I),Array.isArray(w))w.forEach(j=>{var E=Yh(Yh({},y),{},{name:j.name,unit:j.unit,color:void 0,fill:void 0});m.push(rd({tooltipEntrySettings:E,dataKey:j.dataKey,payload:j.payload,value:_e(j.payload,j.dataKey),name:j.name}))});else{var T;m.push(rd({tooltipEntrySettings:y,dataKey:k,payload:w,value:_e(w,k),name:(T=_e(w,I))!==null&&T!==void 0?T:y==null?void 0:y.name}))}return m},h)}},Vc=S([Te,re,Ay,Oc,ke],Vy),LA=S([e=>e.graphicalItems.cartesianItems,e=>e.graphicalItems.polarItems],(e,t)=>[...e,...t]),WA=S([ke,fr],Sy),br=S([LA,Te,WA],Py,{memoizeOptions:{resultEqualityCheck:So}}),FA=S([br],e=>e.filter(No)),HA=S([br],Ey,{memoizeOptions:{resultEqualityCheck:So}}),wr=S([HA,Qt],My),zA=S([FA,Qt,Te],Iy),Jc=S([wr,Te,br],$y),b0=S([Te],Wc),YA=S([Te],e=>e.allowDataOverflow),w0=S([b0,YA],ty),qA=S([br],e=>e.filter(No)),GA=S([zA,qA,ko,yy],By),UA=S([GA,Qt,ke,w0],_y),KA=S([br],Cy),VA=S([wr,Te,KA,Fc,ke],Wy,{memoizeOptions:{resultEqualityCheck:Ao}}),JA=S([Fy,ke,fr],yr),ZA=S([JA,ke],Yy),XA=S([Hy,ke,fr],yr),QA=S([XA,ke],qy),eS=S([zy,ke,fr],yr),tS=S([eS,ke],Gy),nS=S([ZA,tS,QA],Si),rS=S([Te,b0,w0,UA,VA,nS,re,ke],Uy),va=S([Te,re,wr,Jc,ko,ke,rS],Ky),aS=S([va,Te,Vc],Jy),iS=S([Te,va,aS,ke],Zy),x0=e=>{var t=ke(e),n=fr(e),r=!1;return fa(e,t,n,r)},k0=S([Te,x0],To),T0=S([Te,Vc,iS,k0],zc),oS=S([re,Jc,Te,ke],a0),sS=S([re,Jc,Te,ke],i0),lS=(e,t,n,r,a,i,s,l)=>{if(t){var{type:c}=t,u=_n(e,l);if(r){var d=n==="scaleBand"&&r.bandwidth?r.bandwidth()/2:2,h=c==="category"&&r.bandwidth?r.bandwidth()/d:0;return h=l==="angleAxis"&&a!=null&&(a==null?void 0:a.length)>=2?et(a[0]-a[1])*2*h:h,u&&s?s.map((m,p)=>({coordinate:r(m)+h,value:m,index:p,offset:h})):r.domain().map((m,p)=>({coordinate:r(m)+h,value:i?i[m]:m,index:p,offset:h}))}}},nn=S([re,Te,Vc,T0,x0,oS,sS,ke],lS),Zc=S([s0,l0,yA],(e,t,n)=>c0(n.shared,e,t)),I0=e=>e.tooltip.settings.trigger,Xc=e=>e.tooltip.settings.defaultIndex,ba=S([vr,Zc,I0,Xc],g0),dr=S([ba,wr,pa,va],Kc),j0=S([nn,dr],u0),N0=S([ba],e=>{if(e)return e.dataKey});S([ba],e=>{if(e)return e.graphicalItemId});var A0=S([vr,Zc,I0,Xc],y0),cS=S([Jt,Zt,re,Ce,nn,Xc,A0,ya],f0),uS=S([ba,cS],(e,t)=>e!=null&&e.coordinate?e.coordinate:t),dS=S([ba],e=>{var t;return(t=e==null?void 0:e.active)!==null&&t!==void 0?t:!1}),hS=S([A0,dr,Qt,pa,j0,ya,Zc],v0);S([hS],e=>{if(e!=null){var t=e.map(n=>n.payload).filter(n=>n!=null);return Array.from(new Set(t))}});function qh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Gh(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?qh(Object(n),!0).forEach(function(r){mS(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function mS(e,t,n){return(t=pS(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function pS(e){var t=gS(e,"string");return typeof t=="symbol"?t:t+""}function gS(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var fS=()=>V(Te),yS=()=>{var e=fS(),t=V(nn),n=V(T0);return li(!e||!n?void 0:Gh(Gh({},e),{},{scale:n}),t)};function Uh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Yn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Uh(Object(n),!0).forEach(function(r){vS(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Uh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function vS(e,t,n){return(t=bS(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function bS(e){var t=wS(e,"string");return typeof t=="symbol"?t:t+""}function wS(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var xS=(e,t,n,r)=>{var a=t.find(i=>i&&i.index===n);if(a){if(e==="horizontal")return{x:a.coordinate,y:r.chartY};if(e==="vertical")return{x:r.chartX,y:a.coordinate}}return{x:0,y:0}},kS=(e,t,n,r)=>{var a=t.find(u=>u&&u.index===n);if(a){if(e==="centric"){var i=a.coordinate,{radius:s}=r;return Yn(Yn(Yn({},r),Be(r.cx,r.cy,s,i)),{},{angle:i,radius:s})}var l=a.coordinate,{angle:c}=r;return Yn(Yn(Yn({},r),Be(r.cx,r.cy,l,c)),{},{angle:c,radius:l})}return{angle:0,clockWise:!1,cx:0,cy:0,endAngle:0,innerRadius:0,outerRadius:0,radius:0,startAngle:0,x:0,y:0}};function TS(e,t){var{chartX:n,chartY:r}=e;return n>=t.left&&n<=t.left+t.width&&r>=t.top&&r<=t.top+t.height}var S0=(e,t,n,r,a)=>{var i,s=(i=t==null?void 0:t.length)!==null&&i!==void 0?i:0;if(s<=1||e==null)return 0;if(r==="angleAxis"&&a!=null&&Math.abs(Math.abs(a[1]-a[0])-360)<=1e-6)for(var l=0;l<s;l++){var c,u,d,h,m,p=l>0?(c=n[l-1])===null||c===void 0?void 0:c.coordinate:(u=n[s-1])===null||u===void 0?void 0:u.coordinate,g=(d=n[l])===null||d===void 0?void 0:d.coordinate,v=l>=s-1?(h=n[0])===null||h===void 0?void 0:h.coordinate:(m=n[l+1])===null||m===void 0?void 0:m.coordinate,y=void 0;if(!(p==null||g==null||v==null))if(et(g-p)!==et(v-g)){var b=[];if(et(v-g)===et(a[1]-a[0])){y=v;var x=g+a[1]-a[0];b[0]=Math.min(x,(x+p)/2),b[1]=Math.max(x,(x+p)/2)}else{y=p;var k=v+a[1]-a[0];b[0]=Math.min(g,(k+g)/2),b[1]=Math.max(g,(k+g)/2)}var I=[Math.min(g,(y+g)/2),Math.max(g,(y+g)/2)];if(e>I[0]&&e<=I[1]||e>=b[0]&&e<=b[1]){var w;return(w=n[l])===null||w===void 0?void 0:w.index}}else{var T=Math.min(p,v),j=Math.max(p,v);if(e>(T+g)/2&&e<=(j+g)/2){var E;return(E=n[l])===null||E===void 0?void 0:E.index}}}else if(t)for(var C=0;C<s;C++){var $=t[C];if($!=null){var A=t[C+1],D=t[C-1];if(C===0&&A!=null&&e<=($.coordinate+A.coordinate)/2||C===s-1&&D!=null&&e>($.coordinate+D.coordinate)/2||C>0&&C<s-1&&D!=null&&A!=null&&e>($.coordinate+D.coordinate)/2&&e<=($.coordinate+A.coordinate)/2)return $.index}}return-1},IS=()=>V(Oc),Qc=(e,t)=>t,P0=(e,t,n)=>n,eu=(e,t,n,r)=>r,jS=S(nn,e=>Ji(e,t=>t.coordinate)),tu=S([vr,Qc,P0,eu],g0),nu=S([tu,wr,pa,va],Kc),NS=(e,t,n)=>{if(t!=null){var r=vr(e);return t==="axis"?n==="hover"?r.axisInteraction.hover.dataKey:r.axisInteraction.click.dataKey:n==="hover"?r.itemInteraction.hover.dataKey:r.itemInteraction.click.dataKey}},O0=S([vr,Qc,P0,eu],y0),Pi=S([Jt,Zt,re,Ce,nn,eu,O0,ya],f0),AS=S([tu,Pi],(e,t)=>{var n;return(n=e.coordinate)!==null&&n!==void 0?n:t}),C0=S([nn,nu],u0),SS=S([O0,nu,Qt,pa,C0,ya,Qc],v0),PS=S([tu,nu],(e,t)=>({isActive:e.active&&t!=null,activeIndex:t})),OS=(e,t,n,r,a,i,s)=>{if(!(!e||!n||!r||!a)&&TS(e,s)){var l=u1(e,t),c=S0(l,i,a,n,r),u=xS(t,a,c,e);return{activeIndex:String(c),activeCoordinate:u}}},CS=(e,t,n,r,a,i,s)=>{if(!(!e||!r||!a||!i||!n)){var l=v2(e,n);if(l){var c=d1(l,t),u=S0(c,s,i,r,a),d=kS(t,i,u,l);return{activeIndex:String(u),activeCoordinate:d}}}},ES=(e,t,n,r,a,i,s,l)=>{if(!(!e||!t||!r||!a||!i))return t==="horizontal"||t==="vertical"?OS(e,t,r,a,i,s,l):CS(e,t,n,r,a,i,s)},MS=S(e=>e.zIndex.zIndexMap,(e,t)=>t,(e,t,n)=>n,(e,t,n)=>{if(t!=null){var r=e[t];if(r!=null)return n?r.panoramaElement:r.element}}),$S=S(e=>e.zIndex.zIndexMap,e=>{var t=Object.keys(e).map(r=>parseInt(r,10)).concat(Object.values(He)),n=Array.from(new Set(t));return n.sort((r,a)=>r-a)},{memoizeOptions:{resultEqualityCheck:vN}});function Kh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Vh(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Kh(Object(n),!0).forEach(function(r){DS(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Kh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function DS(e,t,n){return(t=BS(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function BS(e){var t=_S(e,"string");return typeof t=="symbol"?t:t+""}function _S(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var RS={},LS={zIndexMap:Object.values(He).reduce((e,t)=>Vh(Vh({},e),{},{[t]:{element:void 0,panoramaElement:void 0,consumers:0}}),RS)},WS=new Set(Object.values(He));function FS(e){return WS.has(e)}var E0=Ze({name:"zIndex",initialState:LS,reducers:{registerZIndexPortal:{reducer:(e,t)=>{var{zIndex:n}=t.payload;e.zIndexMap[n]?e.zIndexMap[n].consumers+=1:e.zIndexMap[n]={consumers:1,element:void 0,panoramaElement:void 0}},prepare:ce()},unregisterZIndexPortal:{reducer:(e,t)=>{var{zIndex:n}=t.payload;e.zIndexMap[n]&&(e.zIndexMap[n].consumers-=1,e.zIndexMap[n].consumers<=0&&!FS(n)&&delete e.zIndexMap[n])},prepare:ce()},registerZIndexPortalElement:{reducer:(e,t)=>{var{zIndex:n,element:r,isPanorama:a}=t.payload;e.zIndexMap[n]?a?e.zIndexMap[n].panoramaElement=r:e.zIndexMap[n].element=r:e.zIndexMap[n]={consumers:0,element:a?void 0:r,panoramaElement:a?r:void 0}},prepare:ce()},unregisterZIndexPortalElement:{reducer:(e,t)=>{var{zIndex:n}=t.payload;e.zIndexMap[n]&&(t.payload.isPanorama?e.zIndexMap[n].panoramaElement=void 0:e.zIndexMap[n].element=void 0)},prepare:ce()}}}),{registerZIndexPortal:HS,unregisterZIndexPortal:zS,registerZIndexPortalElement:YS,unregisterZIndexPortalElement:qS}=E0.actions,GS=E0.reducer;function fn(e){var{zIndex:t,children:n}=e,r=z1(),a=r&&t!==void 0&&t!==0,i=at(),s=ge();f.useLayoutEffect(()=>a?(s(HS({zIndex:t})),()=>{s(zS({zIndex:t}))}):ta,[s,t,a]);var l=V(c=>MS(c,t,i));return a?l?Tl.createPortal(n,l):null:n}function ml(){return ml=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ml.apply(null,arguments)}function Jh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function La(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Jh(Object(n),!0).forEach(function(r){US(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Jh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function US(e,t,n){return(t=KS(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function KS(e){var t=VS(e,"string");return typeof t=="symbol"?t:t+""}function VS(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function JS(e){var{cursor:t,cursorComp:n,cursorProps:r}=e;return f.isValidElement(t)?f.cloneElement(t,r):f.createElement(n,r)}function ZS(e){var t,{coordinate:n,payload:r,index:a,offset:i,tooltipAxisBandSize:s,layout:l,cursor:c,tooltipEventType:u,chartName:d}=e,h=n,m=r,p=a;if(!c||!h||d!=="ScatterChart"&&u!=="axis")return null;var g,v,y;if(d==="ScatterChart")g=h,v=CT,y=He.cursorLine;else if(d==="BarChart")g=ET(l,h,i,s),v=df,y=He.cursorRectangle;else if(l==="radial"&&_p(h)){var{cx:b,cy:x,radius:k,startAngle:I,endAngle:w}=hf(h);g={cx:b,cy:x,startAngle:I,endAngle:w,innerRadius:k,outerRadius:k},v=pf,y=He.cursorLine}else g={points:k2(l,h,i)},v=of,y=He.cursorLine;var T=typeof c=="object"&&"className"in c?c.className:void 0,j=La(La(La(La({stroke:"#ccc",pointerEvents:"none"},i),g),Al(c)),{},{payload:m,payloadIndex:p,className:le("recharts-tooltip-cursor",T)});return f.createElement(fn,{zIndex:(t=e.zIndex)!==null&&t!==void 0?t:y},f.createElement(JS,{cursor:c,cursorComp:v,cursorProps:j}))}function XS(e){var t=yS(),n=W1(),r=oa(),a=IS();return t==null||n==null||r==null||a==null?null:f.createElement(ZS,ml({},e,{offset:n,layout:r,tooltipAxisBandSize:t,chartName:a}))}var M0=f.createContext(null),QS=()=>f.useContext(M0),$0={exports:{}};(function(e){var t=Object.prototype.hasOwnProperty,n="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(n=!1));function a(c,u,d){this.fn=c,this.context=u,this.once=d||!1}function i(c,u,d,h,m){if(typeof d!="function")throw new TypeError("The listener must be a function");var p=new a(d,h||c,m),g=n?n+u:u;return c._events[g]?c._events[g].fn?c._events[g]=[c._events[g],p]:c._events[g].push(p):(c._events[g]=p,c._eventsCount++),c}function s(c,u){--c._eventsCount===0?c._events=new r:delete c._events[u]}function l(){this._events=new r,this._eventsCount=0}l.prototype.eventNames=function(){var u=[],d,h;if(this._eventsCount===0)return u;for(h in d=this._events)t.call(d,h)&&u.push(n?h.slice(1):h);return Object.getOwnPropertySymbols?u.concat(Object.getOwnPropertySymbols(d)):u},l.prototype.listeners=function(u){var d=n?n+u:u,h=this._events[d];if(!h)return[];if(h.fn)return[h.fn];for(var m=0,p=h.length,g=new Array(p);m<p;m++)g[m]=h[m].fn;return g},l.prototype.listenerCount=function(u){var d=n?n+u:u,h=this._events[d];return h?h.fn?1:h.length:0},l.prototype.emit=function(u,d,h,m,p,g){var v=n?n+u:u;if(!this._events[v])return!1;var y=this._events[v],b=arguments.length,x,k;if(y.fn){switch(y.once&&this.removeListener(u,y.fn,void 0,!0),b){case 1:return y.fn.call(y.context),!0;case 2:return y.fn.call(y.context,d),!0;case 3:return y.fn.call(y.context,d,h),!0;case 4:return y.fn.call(y.context,d,h,m),!0;case 5:return y.fn.call(y.context,d,h,m,p),!0;case 6:return y.fn.call(y.context,d,h,m,p,g),!0}for(k=1,x=new Array(b-1);k<b;k++)x[k-1]=arguments[k];y.fn.apply(y.context,x)}else{var I=y.length,w;for(k=0;k<I;k++)switch(y[k].once&&this.removeListener(u,y[k].fn,void 0,!0),b){case 1:y[k].fn.call(y[k].context);break;case 2:y[k].fn.call(y[k].context,d);break;case 3:y[k].fn.call(y[k].context,d,h);break;case 4:y[k].fn.call(y[k].context,d,h,m);break;default:if(!x)for(w=1,x=new Array(b-1);w<b;w++)x[w-1]=arguments[w];y[k].fn.apply(y[k].context,x)}}return!0},l.prototype.on=function(u,d,h){return i(this,u,d,h,!1)},l.prototype.once=function(u,d,h){return i(this,u,d,h,!0)},l.prototype.removeListener=function(u,d,h,m){var p=n?n+u:u;if(!this._events[p])return this;if(!d)return s(this,p),this;var g=this._events[p];if(g.fn)g.fn===d&&(!m||g.once)&&(!h||g.context===h)&&s(this,p);else{for(var v=0,y=[],b=g.length;v<b;v++)(g[v].fn!==d||m&&!g[v].once||h&&g[v].context!==h)&&y.push(g[v]);y.length?this._events[p]=y.length===1?y[0]:y:s(this,p)}return this},l.prototype.removeAllListeners=function(u){var d;return u?(d=n?n+u:u,this._events[d]&&s(this,d)):(this._events=new r,this._eventsCount=0),this},l.prototype.off=l.prototype.removeListener,l.prototype.addListener=l.prototype.on,l.prefixed=n,l.EventEmitter=l,e.exports=l})($0);var eP=$0.exports;const tP=It(eP);var Jr=new tP,pl="recharts.syncEvent.tooltip",Zh="recharts.syncEvent.brush";function nP(e,t){if(t){var n=Number.parseInt(t,10);if(!Ct(n))return e==null?void 0:e[n]}}var rP={chartName:"",tooltipPayloadSearcher:void 0,eventEmitter:void 0,defaultTooltipEventType:"axis"},D0=Ze({name:"options",initialState:rP,reducers:{createEventEmitter:e=>{e.eventEmitter==null&&(e.eventEmitter=Symbol("rechartsEventEmitter"))}}}),aP=D0.reducer,{createEventEmitter:iP}=D0.actions;function oP(e){return e.tooltip.syncInteraction}var sP={chartData:void 0,computedData:void 0,dataStartIndex:0,dataEndIndex:0},B0=Ze({name:"chartData",initialState:sP,reducers:{setChartData(e,t){if(e.chartData=t.payload,t.payload==null){e.dataStartIndex=0,e.dataEndIndex=0;return}t.payload.length>0&&e.dataEndIndex!==t.payload.length-1&&(e.dataEndIndex=t.payload.length-1)},setComputedData(e,t){e.computedData=t.payload},setDataStartEndIndexes(e,t){var{startIndex:n,endIndex:r}=t.payload;n!=null&&(e.dataStartIndex=n),r!=null&&(e.dataEndIndex=r)}}}),{setChartData:Xh,setDataStartEndIndexes:lP,setComputedData:L$}=B0.actions,cP=B0.reducer,uP=["x","y"];function Qh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function qn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Qh(Object(n),!0).forEach(function(r){dP(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function dP(e,t,n){return(t=hP(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function hP(e){var t=mP(e,"string");return typeof t=="symbol"?t:t+""}function mP(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function pP(e,t){if(e==null)return{};var n,r,a=gP(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function gP(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function fP(){var e=V(Cc),t=V(Ec),n=ge(),r=V(vy),a=V(nn),i=oa(),s=co(),l=V(c=>c.rootProps.className);f.useEffect(()=>{if(e==null)return ta;var c=(u,d,h)=>{if(t!==h&&e===u){if(r==="index"){var m;if(s&&d!==null&&d!==void 0&&(m=d.payload)!==null&&m!==void 0&&m.coordinate&&d.payload.sourceViewBox){var p=d.payload.coordinate,{x:g,y:v}=p,y=pP(p,uP),{x:b,y:x,width:k,height:I}=d.payload.sourceViewBox,w=qn(qn({},y),{},{x:s.x+(k?(g-b)/k:0)*s.width,y:s.y+(I?(v-x)/I:0)*s.height});n(qn(qn({},d),{},{payload:qn(qn({},d.payload),{},{coordinate:w})}))}else n(d);return}if(a!=null){var T;if(typeof r=="function"){var j={activeTooltipIndex:d.payload.index==null?void 0:Number(d.payload.index),isTooltipActive:d.payload.active,activeIndex:d.payload.index==null?void 0:Number(d.payload.index),activeLabel:d.payload.label,activeDataKey:d.payload.dataKey,activeCoordinate:d.payload.coordinate},E=r(a,j);T=a[E]}else r==="value"&&(T=a.find(K=>String(K.value)===d.payload.label));var{coordinate:C}=d.payload;if(T==null||d.payload.active===!1||C==null||s==null){n(dl({active:!1,coordinate:void 0,dataKey:void 0,index:null,label:void 0,sourceViewBox:void 0,graphicalItemId:void 0}));return}var{x:$,y:A}=C,D=Math.min($,s.x+s.width),_=Math.min(A,s.y+s.height),R={x:i==="horizontal"?T.coordinate:D,y:i==="horizontal"?_:T.coordinate},z=dl({active:d.payload.active,coordinate:R,dataKey:d.payload.dataKey,index:String(T.index),label:d.payload.label,sourceViewBox:d.payload.sourceViewBox,graphicalItemId:d.payload.graphicalItemId});n(z)}}};return Jr.on(pl,c),()=>{Jr.off(pl,c)}},[l,n,t,e,r,a,i,s])}function yP(){var e=V(Cc),t=V(Ec),n=ge();f.useEffect(()=>{if(e==null)return ta;var r=(a,i,s)=>{t!==s&&e===a&&n(lP(i))};return Jr.on(Zh,r),()=>{Jr.off(Zh,r)}},[n,t,e])}function vP(){var e=ge();f.useEffect(()=>{e(iP())},[e]),fP(),yP()}function bP(e,t,n,r,a,i){var s=V(p=>NS(p,e,t)),l=V(Ec),c=V(Cc),u=V(vy),d=V(oP),h=d==null?void 0:d.active,m=co();f.useEffect(()=>{if(!h&&c!=null&&l!=null){var p=dl({active:i,coordinate:n,dataKey:s,index:a,label:typeof r=="number"?String(r):r,sourceViewBox:m,graphicalItemId:void 0});Jr.emit(pl,c,p,l)}},[h,n,s,a,r,l,c,u,i,m])}function em(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function tm(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?em(Object(n),!0).forEach(function(r){wP(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):em(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function wP(e,t,n){return(t=xP(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function xP(e){var t=kP(e,"string");return typeof t=="symbol"?t:t+""}function kP(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function TP(e){return e.dataKey}function IP(e,t){return f.isValidElement(e)?f.cloneElement(e,t):typeof e=="function"?f.createElement(e,t):f.createElement(uT,t)}var nm=[],jP={allowEscapeViewBox:{x:!1,y:!1},animationDuration:400,animationEasing:"ease",axisId:0,contentStyle:{},cursor:!0,filterNull:!0,includeHidden:!1,isAnimationActive:"auto",itemSorter:"name",itemStyle:{},labelStyle:{},offset:10,reverseDirection:{x:!1,y:!1},separator:" : ",trigger:"hover",useTranslate3d:!1,wrapperStyle:{}};function NP(e){var t,n,r=pt(e,jP),{active:a,allowEscapeViewBox:i,animationDuration:s,animationEasing:l,content:c,filterNull:u,isAnimationActive:d,offset:h,payloadUniqBy:m,position:p,reverseDirection:g,useTranslate3d:v,wrapperStyle:y,cursor:b,shared:x,trigger:k,defaultIndex:I,portal:w,axisId:T}=r,j=ge(),E=typeof I=="number"?String(I):I;f.useEffect(()=>{j(kA({shared:x,trigger:k,axisId:T,active:a,defaultIndex:E}))},[j,x,k,T,a,E]);var C=co(),$=af(),A=fA(x),{activeIndex:D,isActive:_}=(t=V(B=>PS(B,A,k,E)))!==null&&t!==void 0?t:{},R=V(B=>SS(B,A,k,E)),z=V(B=>C0(B,A,k,E)),K=V(B=>AS(B,A,k,E)),Y=R,Z=QS(),q=(n=a??_)!==null&&n!==void 0?n:!1,[te,he]=Kx([Y,q]),Ie=A==="axis"?z:void 0;bP(A,k,K,Ie,D,q);var ze=w??Z;if(ze==null||C==null||A==null)return null;var fe=Y??nm;q||(fe=nm),u&&fe.length&&(fe=hx(fe.filter(B=>B.value!=null&&(B.hide!==!0||r.includeHidden)),m,TP));var P=fe.length>0,W=f.createElement(yT,{allowEscapeViewBox:i,animationDuration:s,animationEasing:l,isAnimationActive:d,active:q,coordinate:K,hasPayload:P,offset:h,position:p,reverseDirection:g,useTranslate3d:v,viewBox:C,wrapperStyle:y,lastBoundingBox:te,innerRef:he,hasPortalFromProps:!!w},IP(c,tm(tm({},r),{},{payload:fe,label:Ie,active:q,activeIndex:D,coordinate:K,accessibilityLayer:$})));return f.createElement(f.Fragment,null,Tl.createPortal(W,ze),q&&f.createElement(XS,{cursor:b,tooltipEventType:A,coordinate:K,payload:fe,index:D}))}var ru=e=>null;ru.displayName="Cell";function AP(e,t,n){return(t=SP(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function SP(e){var t=PP(e,"string");return typeof t=="symbol"?t:t+""}function PP(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}class OP{constructor(t){AP(this,"cache",new Map),this.maxSize=t}get(t){var n=this.cache.get(t);return n!==void 0&&(this.cache.delete(t),this.cache.set(t,n)),n}set(t,n){if(this.cache.has(t))this.cache.delete(t);else if(this.cache.size>=this.maxSize){var r=this.cache.keys().next().value;r!=null&&this.cache.delete(r)}this.cache.set(t,n)}clear(){this.cache.clear()}size(){return this.cache.size}}function rm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function CP(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?rm(Object(n),!0).forEach(function(r){EP(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):rm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function EP(e,t,n){return(t=MP(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function MP(e){var t=$P(e,"string");return typeof t=="symbol"?t:t+""}function $P(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var DP={cacheSize:2e3,enableCache:!0},_0=CP({},DP),am=new OP(_0.cacheSize),BP={position:"absolute",top:"-20000px",left:0,padding:0,margin:0,border:"none",whiteSpace:"pre"},im="recharts_measurement_span";function _P(e,t){var n=t.fontSize||"",r=t.fontFamily||"",a=t.fontWeight||"",i=t.fontStyle||"",s=t.letterSpacing||"",l=t.textTransform||"";return"".concat(e,"|").concat(n,"|").concat(r,"|").concat(a,"|").concat(i,"|").concat(s,"|").concat(l)}var om=(e,t)=>{try{var n=document.getElementById(im);n||(n=document.createElement("span"),n.setAttribute("id",im),n.setAttribute("aria-hidden","true"),document.body.appendChild(n)),Object.assign(n.style,BP,t),n.textContent="".concat(e);var r=n.getBoundingClientRect();return{width:r.width,height:r.height}}catch{return{width:0,height:0}}},$r=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(t==null||go.isSsr)return{width:0,height:0};if(!_0.enableCache)return om(t,n);var r=_P(t,n),a=am.get(r);if(a)return a;var i=om(t,n);return am.set(r,i),i},R0;function RP(e,t,n){return(t=LP(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function LP(e){var t=WP(e,"string");return typeof t=="symbol"?t:t+""}function WP(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var sm=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,lm=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,FP=/^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,HP=/(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,zP={cm:96/2.54,mm:96/25.4,pt:96/72,pc:96/6,in:96,Q:96/(2.54*40),px:1},YP=["cm","mm","pt","pc","in","Q","px"];function qP(e){return YP.includes(e)}var Kn="NaN";function GP(e,t){return e*zP[t]}class $e{static parse(t){var n,[,r,a]=(n=HP.exec(t))!==null&&n!==void 0?n:[];return r==null?$e.NaN:new $e(parseFloat(r),a??"")}constructor(t,n){this.num=t,this.unit=n,this.num=t,this.unit=n,Ct(t)&&(this.unit=""),n!==""&&!FP.test(n)&&(this.num=NaN,this.unit=""),qP(n)&&(this.num=GP(t,n),this.unit="px")}add(t){return this.unit!==t.unit?new $e(NaN,""):new $e(this.num+t.num,this.unit)}subtract(t){return this.unit!==t.unit?new $e(NaN,""):new $e(this.num-t.num,this.unit)}multiply(t){return this.unit!==""&&t.unit!==""&&this.unit!==t.unit?new $e(NaN,""):new $e(this.num*t.num,this.unit||t.unit)}divide(t){return this.unit!==""&&t.unit!==""&&this.unit!==t.unit?new $e(NaN,""):new $e(this.num/t.num,this.unit||t.unit)}toString(){return"".concat(this.num).concat(this.unit)}isNaN(){return Ct(this.num)}}R0=$e;RP($e,"NaN",new R0(NaN,""));function L0(e){if(e==null||e.includes(Kn))return Kn;for(var t=e;t.includes("*")||t.includes("/");){var n,[,r,a,i]=(n=sm.exec(t))!==null&&n!==void 0?n:[],s=$e.parse(r??""),l=$e.parse(i??""),c=a==="*"?s.multiply(l):s.divide(l);if(c.isNaN())return Kn;t=t.replace(sm,c.toString())}for(;t.includes("+")||/.-\d+(?:\.\d+)?/.test(t);){var u,[,d,h,m]=(u=lm.exec(t))!==null&&u!==void 0?u:[],p=$e.parse(d??""),g=$e.parse(m??""),v=h==="+"?p.add(g):p.subtract(g);if(v.isNaN())return Kn;t=t.replace(lm,v.toString())}return t}var cm=/\(([^()]*)\)/;function UP(e){for(var t=e,n;(n=cm.exec(t))!=null;){var[,r]=n;t=t.replace(cm,L0(r))}return t}function KP(e){var t=e.replace(/\s+/g,"");return t=UP(t),t=L0(t),t}function VP(e){try{return KP(e)}catch{return Kn}}function hs(e){var t=VP(e.slice(5,-1));return t===Kn?"":t}var JP=["x","y","lineHeight","capHeight","fill","scaleToFit","textAnchor","verticalAnchor"],ZP=["dx","dy","angle","className","breakAll"];function gl(){return gl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gl.apply(null,arguments)}function um(e,t){if(e==null)return{};var n,r,a=XP(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function XP(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}var W0=/[ \f\n\r\t\v\u2028\u2029]+/,F0=e=>{var{children:t,breakAll:n,style:r}=e;try{var a=[];Oe(t)||(n?a=t.toString().split(""):a=t.toString().split(W0));var i=a.map(l=>({word:l,width:$r(l,r).width})),s=n?0:$r(" ",r).width;return{wordsWithComputedWidth:i,spaceWidth:s}}catch{return null}};function QP(e){return e==="start"||e==="middle"||e==="end"||e==="inherit"}var H0=(e,t,n,r)=>e.reduce((a,i)=>{var{word:s,width:l}=i,c=a[a.length-1];if(c&&l!=null&&(t==null||r||c.width+l+n<Number(t)))c.words.push(s),c.width+=l+n;else{var u={words:[s],width:l};a.push(u)}return a},[]),z0=e=>e.reduce((t,n)=>t.width>n.width?t:n),eO="…",dm=(e,t,n,r,a,i,s,l)=>{var c=e.slice(0,t),u=F0({breakAll:n,style:r,children:c+eO});if(!u)return[!1,[]];var d=H0(u.wordsWithComputedWidth,i,s,l),h=d.length>a||z0(d).width>Number(i);return[h,d]},tO=(e,t,n,r,a)=>{var{maxLines:i,children:s,style:l,breakAll:c}=e,u=U(i),d=String(s),h=H0(t,r,n,a);if(!u||a)return h;var m=h.length>i||z0(h).width>Number(r);if(!m)return h;for(var p=0,g=d.length-1,v=0,y;p<=g&&v<=d.length-1;){var b=Math.floor((p+g)/2),x=b-1,[k,I]=dm(d,x,c,l,i,r,n,a),[w]=dm(d,b,c,l,i,r,n,a);if(!k&&!w&&(p=b+1),k&&w&&(g=b-1),!k&&w){y=I;break}v++}return y||h},hm=e=>{var t=Oe(e)?[]:e.toString().split(W0);return[{words:t,width:void 0}]},nO=e=>{var{width:t,scaleToFit:n,children:r,style:a,breakAll:i,maxLines:s}=e;if((t||n)&&!go.isSsr){var l,c,u=F0({breakAll:i,children:r,style:a});if(u){var{wordsWithComputedWidth:d,spaceWidth:h}=u;l=d,c=h}else return hm(r);return tO({breakAll:i,children:r,maxLines:s,style:a},l,c,t,!!n)}return hm(r)},Y0="#808080",rO={angle:0,breakAll:!1,capHeight:"0.71em",fill:Y0,lineHeight:"1em",scaleToFit:!1,textAnchor:"start",verticalAnchor:"end",x:0,y:0},au=f.forwardRef((e,t)=>{var n=pt(e,rO),{x:r,y:a,lineHeight:i,capHeight:s,fill:l,scaleToFit:c,textAnchor:u,verticalAnchor:d}=n,h=um(n,JP),m=f.useMemo(()=>nO({breakAll:h.breakAll,children:h.children,maxLines:h.maxLines,scaleToFit:c,style:h.style,width:h.width}),[h.breakAll,h.children,h.maxLines,c,h.style,h.width]),{dx:p,dy:g,angle:v,className:y,breakAll:b}=h,x=um(h,ZP);if(!Et(r)||!Et(a)||m.length===0)return null;var k=Number(r)+(U(p)?p:0),I=Number(a)+(U(g)?g:0);if(!de(k)||!de(I))return null;var w;switch(d){case"start":w=hs("calc(".concat(s,")"));break;case"middle":w=hs("calc(".concat((m.length-1)/2," * -").concat(i," + (").concat(s," / 2))"));break;default:w=hs("calc(".concat(m.length-1," * -").concat(i,")"));break}var T=[];if(c){var j=m[0].width,{width:E}=h;T.push("scale(".concat(U(E)&&U(j)?E/j:1,")"))}return v&&T.push("rotate(".concat(v,", ").concat(k,", ").concat(I,")")),T.length&&(x.transform=T.join(" ")),f.createElement("text",gl({},dt(x),{ref:t,x:k,y:I,className:le("recharts-text",y),textAnchor:u,fill:l.includes("url")?Y0:l}),m.map((C,$)=>{var A=C.words.join(b?"":" ");return f.createElement("tspan",{x:k,dy:$===0?w:i,key:"".concat(A,"-").concat($)},A)}))});au.displayName="Text";var aO=["labelRef"],iO=["content"];function mm(e,t){if(e==null)return{};var n,r,a=oO(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function oO(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function pm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function pe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?pm(Object(n),!0).forEach(function(r){sO(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function sO(e,t,n){return(t=lO(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function lO(e){var t=cO(e,"string");return typeof t=="symbol"?t:t+""}function cO(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Rt(){return Rt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Rt.apply(null,arguments)}var q0=f.createContext(null),uO=e=>{var{x:t,y:n,upperWidth:r,lowerWidth:a,width:i,height:s,children:l}=e,c=f.useMemo(()=>({x:t,y:n,upperWidth:r,lowerWidth:a,width:i,height:s}),[t,n,r,a,i,s]);return f.createElement(q0.Provider,{value:c},l)},G0=()=>{var e=f.useContext(q0),t=co();return e||Jg(t)},dO=f.createContext(null),hO=()=>{var e=f.useContext(dO),t=V(Ty);return e||t},mO=e=>{var{value:t,formatter:n}=e,r=Oe(e.children)?t:e.children;return typeof n=="function"?n(r):r},iu=e=>e!=null&&typeof e=="function",pO=(e,t)=>{var n=et(t-e),r=Math.min(Math.abs(t-e),360);return n*r},gO=(e,t,n,r,a)=>{var{offset:i,className:s}=e,{cx:l,cy:c,innerRadius:u,outerRadius:d,startAngle:h,endAngle:m,clockWise:p}=a,g=(u+d)/2,v=pO(h,m),y=v>=0?1:-1,b,x;switch(t){case"insideStart":b=h+y*i,x=p;break;case"insideEnd":b=m-y*i,x=!p;break;case"end":b=m+y*i,x=p;break;default:throw new Error("Unsupported position ".concat(t))}x=v<=0?x:!x;var k=Be(l,c,g,b),I=Be(l,c,g,b+(x?1:-1)*359),w="M".concat(k.x,",").concat(k.y,`
    A`).concat(g,",").concat(g,",0,1,").concat(x?0:1,`,
    `).concat(I.x,",").concat(I.y),T=Oe(e.id)?_r("recharts-radial-line-"):e.id;return f.createElement("text",Rt({},r,{dominantBaseline:"central",className:le("recharts-radial-bar-label",s)}),f.createElement("defs",null,f.createElement("path",{id:T,d:w})),f.createElement("textPath",{xlinkHref:"#".concat(T)},n))},fO=(e,t,n)=>{var{cx:r,cy:a,innerRadius:i,outerRadius:s,startAngle:l,endAngle:c}=e,u=(l+c)/2;if(n==="outside"){var{x:d,y:h}=Be(r,a,s+t,u);return{x:d,y:h,textAnchor:d>=r?"start":"end",verticalAnchor:"middle"}}if(n==="center")return{x:r,y:a,textAnchor:"middle",verticalAnchor:"middle"};if(n==="centerTop")return{x:r,y:a,textAnchor:"middle",verticalAnchor:"start"};if(n==="centerBottom")return{x:r,y:a,textAnchor:"middle",verticalAnchor:"end"};var m=(i+s)/2,{x:p,y:g}=Be(r,a,m,u);return{x:p,y:g,textAnchor:"middle",verticalAnchor:"middle"}},fl=e=>"cx"in e&&U(e.cx),yO=(e,t)=>{var{parentViewBox:n,offset:r,position:a}=e,i;n!=null&&!fl(n)&&(i=n);var{x:s,y:l,upperWidth:c,lowerWidth:u,height:d}=t,h=s,m=s+(c-u)/2,p=(h+m)/2,g=(c+u)/2,v=h+c/2,y=d>=0?1:-1,b=y*r,x=y>0?"end":"start",k=y>0?"start":"end",I=c>=0?1:-1,w=I*r,T=I>0?"end":"start",j=I>0?"start":"end";if(a==="top"){var E={x:h+c/2,y:l-b,textAnchor:"middle",verticalAnchor:x};return pe(pe({},E),i?{height:Math.max(l-i.y,0),width:c}:{})}if(a==="bottom"){var C={x:m+u/2,y:l+d+b,textAnchor:"middle",verticalAnchor:k};return pe(pe({},C),i?{height:Math.max(i.y+i.height-(l+d),0),width:u}:{})}if(a==="left"){var $={x:p-w,y:l+d/2,textAnchor:T,verticalAnchor:"middle"};return pe(pe({},$),i?{width:Math.max($.x-i.x,0),height:d}:{})}if(a==="right"){var A={x:p+g+w,y:l+d/2,textAnchor:j,verticalAnchor:"middle"};return pe(pe({},A),i?{width:Math.max(i.x+i.width-A.x,0),height:d}:{})}var D=i?{width:g,height:d}:{};return a==="insideLeft"?pe({x:p+w,y:l+d/2,textAnchor:j,verticalAnchor:"middle"},D):a==="insideRight"?pe({x:p+g-w,y:l+d/2,textAnchor:T,verticalAnchor:"middle"},D):a==="insideTop"?pe({x:h+c/2,y:l+b,textAnchor:"middle",verticalAnchor:k},D):a==="insideBottom"?pe({x:m+u/2,y:l+d-b,textAnchor:"middle",verticalAnchor:x},D):a==="insideTopLeft"?pe({x:h+w,y:l+b,textAnchor:j,verticalAnchor:k},D):a==="insideTopRight"?pe({x:h+c-w,y:l+b,textAnchor:T,verticalAnchor:k},D):a==="insideBottomLeft"?pe({x:m+w,y:l+d-b,textAnchor:j,verticalAnchor:x},D):a==="insideBottomRight"?pe({x:m+u-w,y:l+d-b,textAnchor:T,verticalAnchor:x},D):a&&typeof a=="object"&&(U(a.x)||zt(a.x))&&(U(a.y)||zt(a.y))?pe({x:s+kt(a.x,g),y:l+kt(a.y,d),textAnchor:"end",verticalAnchor:"end"},D):pe({x:v,y:l+d/2,textAnchor:"middle",verticalAnchor:"middle"},D)},vO={angle:0,offset:5,zIndex:He.label,position:"middle",textBreakAll:!1};function on(e){var t=pt(e,vO),{viewBox:n,position:r,value:a,children:i,content:s,className:l="",textBreakAll:c,labelRef:u}=t,d=hO(),h=G0(),m=r==="center"?h:d??h,p,g,v;if(n==null?p=m:fl(n)?p=n:p=Jg(n),!p||Oe(a)&&Oe(i)&&!f.isValidElement(s)&&typeof s!="function")return null;var y=pe(pe({},t),{},{viewBox:p});if(f.isValidElement(s)){var b=mm(y,aO);return f.cloneElement(s,b)}if(typeof s=="function"){var x=mm(y,iO);if(g=f.createElement(s,x),f.isValidElement(g))return g}else g=mO(t);var k=dt(t);if(fl(p)){if(r==="insideStart"||r==="insideEnd"||r==="end")return gO(t,r,g,k,p);v=fO(p,t.offset,t.position)}else v=yO(t,p);return f.createElement(fn,{zIndex:t.zIndex},f.createElement(au,Rt({ref:u,className:le("recharts-label",l)},k,v,{textAnchor:QP(k.textAnchor)?k.textAnchor:v.textAnchor,breakAll:c}),g))}on.displayName="Label";var bO=(e,t,n)=>{if(!e)return null;var r={viewBox:t,labelRef:n};return e===!0?f.createElement(on,Rt({key:"label-implicit"},r)):Et(e)?f.createElement(on,Rt({key:"label-implicit",value:e},r)):f.isValidElement(e)?e.type===on?f.cloneElement(e,pe({key:"label-implicit"},r)):f.createElement(on,Rt({key:"label-implicit",content:e},r)):iu(e)?f.createElement(on,Rt({key:"label-implicit",content:e},r)):e&&typeof e=="object"?f.createElement(on,Rt({},e,{key:"label-implicit"},r)):null};function wO(e){var{label:t,labelRef:n}=e,r=G0();return bO(t,r,n)||null}var U0={},K0={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n){return n[n.length-1]}e.last=t})(K0);var V0={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n){return Array.isArray(n)?n:Array.from(n)}e.toArray=t})(V0);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=K0,n=V0,r=Ki;function a(i){if(r.isArrayLike(i))return t.last(n.toArray(i))}e.last=a})(U0);var xO=U0.last;const kO=It(xO);var TO=["valueAccessor"],IO=["dataKey","clockWise","id","textBreakAll","zIndex"];function Oi(){return Oi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Oi.apply(null,arguments)}function gm(e,t){if(e==null)return{};var n,r,a=jO(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function jO(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}var NO=e=>Array.isArray(e.value)?kO(e.value):e.value,J0=f.createContext(void 0),AO=J0.Provider,Z0=f.createContext(void 0);Z0.Provider;function SO(){return f.useContext(J0)}function PO(){return f.useContext(Z0)}function er(e){var{valueAccessor:t=NO}=e,n=gm(e,TO),{dataKey:r,clockWise:a,id:i,textBreakAll:s,zIndex:l}=n,c=gm(n,IO),u=SO(),d=PO(),h=u||d;return!h||!h.length?null:f.createElement(fn,{zIndex:l??He.label},f.createElement(Ht,{className:"recharts-label-list"},h.map((m,p)=>{var g,v=Oe(r)?t(m,p):_e(m&&m.payload,r),y=Oe(i)?{}:{id:"".concat(i,"-").concat(p)};return f.createElement(on,Oi({key:"label-".concat(p)},dt(m),c,y,{fill:(g=n.fill)!==null&&g!==void 0?g:m.fill,parentViewBox:m.parentViewBox,value:v,textBreakAll:s,viewBox:m.viewBox,index:p,zIndex:0}))})))}er.displayName="LabelList";function OO(e){var{label:t}=e;return t?t===!0?f.createElement(er,{key:"labelList-implicit"}):f.isValidElement(t)||iu(t)?f.createElement(er,{key:"labelList-implicit",content:t}):typeof t=="object"?f.createElement(er,Oi({key:"labelList-implicit"},t,{type:String(t.type)})):null:null}var CO={radiusAxis:{},angleAxis:{}},X0=Ze({name:"polarAxis",initialState:CO,reducers:{addRadiusAxis(e,t){e.radiusAxis[t.payload.id]=t.payload},removeRadiusAxis(e,t){delete e.radiusAxis[t.payload.id]},addAngleAxis(e,t){e.angleAxis[t.payload.id]=t.payload},removeAngleAxis(e,t){delete e.angleAxis[t.payload.id]}}});X0.actions;var EO=X0.reducer,Q0={exports:{}},ie={};/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ou=Symbol.for("react.transitional.element"),su=Symbol.for("react.portal"),Mo=Symbol.for("react.fragment"),$o=Symbol.for("react.strict_mode"),Do=Symbol.for("react.profiler"),Bo=Symbol.for("react.consumer"),_o=Symbol.for("react.context"),Ro=Symbol.for("react.forward_ref"),Lo=Symbol.for("react.suspense"),Wo=Symbol.for("react.suspense_list"),Fo=Symbol.for("react.memo"),Ho=Symbol.for("react.lazy"),MO=Symbol.for("react.view_transition"),$O=Symbol.for("react.client.reference");function ft(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ou:switch(e=e.type,e){case Mo:case Do:case $o:case Lo:case Wo:case MO:return e;default:switch(e=e&&e.$$typeof,e){case _o:case Ro:case Ho:case Fo:return e;case Bo:return e;default:return t}}case su:return t}}}ie.ContextConsumer=Bo;ie.ContextProvider=_o;ie.Element=ou;ie.ForwardRef=Ro;ie.Fragment=Mo;ie.Lazy=Ho;ie.Memo=Fo;ie.Portal=su;ie.Profiler=Do;ie.StrictMode=$o;ie.Suspense=Lo;ie.SuspenseList=Wo;ie.isContextConsumer=function(e){return ft(e)===Bo};ie.isContextProvider=function(e){return ft(e)===_o};ie.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ou};ie.isForwardRef=function(e){return ft(e)===Ro};ie.isFragment=function(e){return ft(e)===Mo};ie.isLazy=function(e){return ft(e)===Ho};ie.isMemo=function(e){return ft(e)===Fo};ie.isPortal=function(e){return ft(e)===su};ie.isProfiler=function(e){return ft(e)===Do};ie.isStrictMode=function(e){return ft(e)===$o};ie.isSuspense=function(e){return ft(e)===Lo};ie.isSuspenseList=function(e){return ft(e)===Wo};ie.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Mo||e===Do||e===$o||e===Lo||e===Wo||typeof e=="object"&&e!==null&&(e.$$typeof===Ho||e.$$typeof===Fo||e.$$typeof===_o||e.$$typeof===Bo||e.$$typeof===Ro||e.$$typeof===$O||e.getModuleId!==void 0)};ie.typeOf=ft;Q0.exports=ie;var DO=Q0.exports,fm=e=>typeof e=="string"?e:e?e.displayName||e.name||"Component":"",ym=null,ms=null,ev=e=>{if(e===ym&&Array.isArray(ms))return ms;var t=[];return f.Children.forEach(e,n=>{Oe(n)||(DO.isFragment(n)?t=t.concat(ev(n.props.children)):t.push(n))}),ms=t,ym=e,t};function BO(e,t){var n=[],r=[];return Array.isArray(t)?r=t.map(a=>fm(a)):r=[fm(t)],ev(e).forEach(a=>{var i=nr(a,"type.displayName")||nr(a,"type.name");i&&r.indexOf(i)!==-1&&n.push(a)}),n}var tv={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n){var a;if(typeof n!="object"||n==null)return!1;if(Object.getPrototypeOf(n)===null)return!0;if(Object.prototype.toString.call(n)!=="[object Object]"){const i=n[Symbol.toStringTag];return i==null||!((a=Object.getOwnPropertyDescriptor(n,Symbol.toStringTag))!=null&&a.writable)?!1:n.toString()===`[object ${i}]`}let r=n;for(;Object.getPrototypeOf(r)!==null;)r=Object.getPrototypeOf(r);return Object.getPrototypeOf(n)===r}e.isPlainObject=t})(tv);var _O=tv.isPlainObject;const RO=It(_O);var vm,bm,wm,xm,km;function Tm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Im(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Tm(Object(n),!0).forEach(function(r){LO(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Tm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function LO(e,t,n){return(t=WO(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function WO(e){var t=FO(e,"string");return typeof t=="symbol"?t:t+""}function FO(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ci(){return Ci=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ci.apply(null,arguments)}function Cr(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var jm=(e,t,n,r,a)=>{var i=n-r,s;return s=me(vm||(vm=Cr(["M ",",",""])),e,t),s+=me(bm||(bm=Cr(["L ",",",""])),e+n,t),s+=me(wm||(wm=Cr(["L ",",",""])),e+n-i/2,t+a),s+=me(xm||(xm=Cr(["L ",",",""])),e+n-i/2-r,t+a),s+=me(km||(km=Cr(["L ",","," Z"])),e,t),s},HO={x:0,y:0,upperWidth:0,lowerWidth:0,height:0,isUpdateAnimationActive:!1,animationBegin:0,animationDuration:1500,animationEasing:"ease"},zO=e=>{var t=pt(e,HO),{x:n,y:r,upperWidth:a,lowerWidth:i,height:s,className:l}=t,{animationEasing:c,animationDuration:u,animationBegin:d,isUpdateAnimationActive:h}=t,m=f.useRef(null),[p,g]=f.useState(-1),v=f.useRef(a),y=f.useRef(i),b=f.useRef(s),x=f.useRef(n),k=f.useRef(r),I=ac(e,"trapezoid-");if(f.useEffect(()=>{if(m.current&&m.current.getTotalLength)try{var R=m.current.getTotalLength();R&&g(R)}catch{}},[]),n!==+n||r!==+r||a!==+a||i!==+i||s!==+s||a===0&&i===0||s===0)return null;var w=le("recharts-trapezoid",l);if(!h)return f.createElement("g",null,f.createElement("path",Ci({},dt(t),{className:w,d:jm(n,r,a,i,s)})));var T=v.current,j=y.current,E=b.current,C=x.current,$=k.current,A="0px ".concat(p===-1?1:p,"px"),D="".concat(p,"px 0px"),_=sf(["strokeDasharray"],u,c);return f.createElement(rc,{animationId:I,key:I,canBegin:p>0,duration:u,easing:c,isActive:h,begin:d},R=>{var z=De(T,a,R),K=De(j,i,R),Y=De(E,s,R),Z=De(C,n,R),q=De($,r,R);m.current&&(v.current=z,y.current=K,b.current=Y,x.current=Z,k.current=q);var te=R>0?{transition:_,strokeDasharray:D}:{strokeDasharray:A};return f.createElement("path",Ci({},dt(t),{className:w,d:jm(Z,q,z,K,Y),ref:m,style:Im(Im({},te),t.style)}))})},YO=["option","shapeType","activeClassName"];function qO(e,t){if(e==null)return{};var n,r,a=GO(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function GO(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Nm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ei(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Nm(Object(n),!0).forEach(function(r){UO(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Nm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function UO(e,t,n){return(t=KO(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function KO(e){var t=VO(e,"string");return typeof t=="symbol"?t:t+""}function VO(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function JO(e,t){return Ei(Ei({},t),e)}function ZO(e,t){return e==="symbols"}function Am(e){var{shapeType:t,elementProps:n}=e;switch(t){case"rectangle":return f.createElement(df,n);case"trapezoid":return f.createElement(zO,n);case"sector":return f.createElement(pf,n);case"symbols":if(ZO(t))return f.createElement(Bp,n);break;case"curve":return f.createElement(of,n);default:return null}}function XO(e){return f.isValidElement(e)?e.props:e}function QO(e){var{option:t,shapeType:n,activeClassName:r="recharts-active-shape"}=e,a=qO(e,YO),i;if(f.isValidElement(t))i=f.cloneElement(t,Ei(Ei({},a),XO(t)));else if(typeof t=="function")i=t(a,a.index);else if(RO(t)&&typeof t!="boolean"){var s=JO(t,a);i=f.createElement(Am,{shapeType:n,elementProps:s})}else{var l=a;i=f.createElement(Am,{shapeType:n,elementProps:l})}return a.isActive?f.createElement(Ht,{className:r},i):i}var nv=(e,t,n)=>{var r=ge();return(a,i)=>s=>{e==null||e(a,i,s),r(h0({activeIndex:String(i),activeDataKey:t,activeCoordinate:a.tooltipPosition,activeGraphicalItemId:n}))}},rv=e=>{var t=ge();return(n,r)=>a=>{e==null||e(n,r,a),t(TA())}},av=(e,t,n)=>{var r=ge();return(a,i)=>s=>{e==null||e(a,i,s),r(IA({activeIndex:String(i),activeDataKey:t,activeCoordinate:a.tooltipPosition,activeGraphicalItemId:n}))}};function eC(e){var{tooltipEntrySettings:t}=e,n=ge(),r=at(),a=f.useRef(null);return f.useLayoutEffect(()=>{r||(a.current===null?n(bA(t)):a.current!==t&&n(wA({prev:a.current,next:t})),a.current=t)},[t,n,r]),f.useLayoutEffect(()=>()=>{a.current&&(n(xA(a.current)),a.current=null)},[n]),null}function tC(e){var{legendPayload:t}=e,n=ge(),r=at(),a=f.useRef(null);return f.useLayoutEffect(()=>{r||(a.current===null?n(nT(t)):a.current!==t&&n(rT({prev:a.current,next:t})),a.current=t)},[n,r,t]),f.useLayoutEffect(()=>()=>{a.current&&(n(aT(a.current)),a.current=null)},[n]),null}var ps,nC=()=>{var[e]=f.useState(()=>_r("uid-"));return e},rC=(ps=Dv["useId".toString()])!==null&&ps!==void 0?ps:nC;function aC(e,t){var n=rC();return t||(e?"".concat(e,"-").concat(n):n)}var iC=f.createContext(void 0),oC=e=>{var{id:t,type:n,children:r}=e,a=aC("recharts-".concat(n),t);return f.createElement(iC.Provider,{value:a},r(a))},sC={cartesianItems:[],polarItems:[]},iv=Ze({name:"graphicalItems",initialState:sC,reducers:{addCartesianGraphicalItem:{reducer(e,t){e.cartesianItems.push(t.payload)},prepare:ce()},replaceCartesianGraphicalItem:{reducer(e,t){var{prev:n,next:r}=t.payload,a=xt(e).cartesianItems.indexOf(n);a>-1&&(e.cartesianItems[a]=r)},prepare:ce()},removeCartesianGraphicalItem:{reducer(e,t){var n=xt(e).cartesianItems.indexOf(t.payload);n>-1&&e.cartesianItems.splice(n,1)},prepare:ce()},addPolarGraphicalItem:{reducer(e,t){e.polarItems.push(t.payload)},prepare:ce()},removePolarGraphicalItem:{reducer(e,t){var n=xt(e).polarItems.indexOf(t.payload);n>-1&&e.polarItems.splice(n,1)},prepare:ce()}}}),{addCartesianGraphicalItem:lC,replaceCartesianGraphicalItem:cC,removeCartesianGraphicalItem:uC,addPolarGraphicalItem:W$,removePolarGraphicalItem:F$}=iv.actions,dC=iv.reducer,hC=e=>{var t=ge(),n=f.useRef(null);return f.useLayoutEffect(()=>{n.current===null?t(lC(e)):n.current!==e&&t(cC({prev:n.current,next:e})),n.current=e},[t,e]),f.useLayoutEffect(()=>()=>{n.current&&(t(uC(n.current)),n.current=null)},[t]),null},mC=f.memo(hC);function Sm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Pm(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Sm(Object(n),!0).forEach(function(r){pC(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Sm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function pC(e,t,n){return(t=gC(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function gC(e){var t=fC(e,"string");return typeof t=="symbol"?t:t+""}function fC(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var ov=0,yC={xAxis:{},yAxis:{},zAxis:{}},sv=Ze({name:"cartesianAxis",initialState:yC,reducers:{addXAxis:{reducer(e,t){e.xAxis[t.payload.id]=t.payload},prepare:ce()},replaceXAxis:{reducer(e,t){var{prev:n,next:r}=t.payload;e.xAxis[n.id]!==void 0&&(n.id!==r.id&&delete e.xAxis[n.id],e.xAxis[r.id]=r)},prepare:ce()},removeXAxis:{reducer(e,t){delete e.xAxis[t.payload.id]},prepare:ce()},addYAxis:{reducer(e,t){e.yAxis[t.payload.id]=t.payload},prepare:ce()},replaceYAxis:{reducer(e,t){var{prev:n,next:r}=t.payload;e.yAxis[n.id]!==void 0&&(n.id!==r.id&&delete e.yAxis[n.id],e.yAxis[r.id]=r)},prepare:ce()},removeYAxis:{reducer(e,t){delete e.yAxis[t.payload.id]},prepare:ce()},addZAxis:{reducer(e,t){e.zAxis[t.payload.id]=t.payload},prepare:ce()},replaceZAxis:{reducer(e,t){var{prev:n,next:r}=t.payload;e.zAxis[n.id]!==void 0&&(n.id!==r.id&&delete e.zAxis[n.id],e.zAxis[r.id]=r)},prepare:ce()},removeZAxis:{reducer(e,t){delete e.zAxis[t.payload.id]},prepare:ce()},updateYAxisWidth(e,t){var{id:n,width:r}=t.payload,a=e.yAxis[n];if(a){var i=a.widthHistory||[];if(i.length===3&&i[0]===i[2]&&r===i[1]&&r!==a.width&&Math.abs(r-i[0])<=1)return;var s=[...i,r].slice(-3);e.yAxis[n]=Pm(Pm({},e.yAxis[n]),{},{width:r,widthHistory:s})}}}}),{addXAxis:vC,replaceXAxis:bC,removeXAxis:wC,addYAxis:xC,replaceYAxis:kC,removeYAxis:TC,addZAxis:H$,replaceZAxis:z$,removeZAxis:Y$,updateYAxisWidth:IC}=sv.actions,jC=sv.reducer,NC=S([Ce],e=>({top:e.top,bottom:e.bottom,left:e.left,right:e.right})),AC=S([NC,Jt,Zt],(e,t,n)=>{if(!(!e||t==null||n==null))return{x:e.left,y:e.top,width:Math.max(0,t-e.left-e.right),height:Math.max(0,n-e.top-e.bottom)}}),lv=()=>V(AC),Om=(e,t,n)=>{var r=n??e;if(!Oe(r))return kt(r,t,0)},SC=(e,t,n)=>{var r={},a=e.filter(No),i=e.filter(u=>u.stackId==null),s=a.reduce((u,d)=>(u[d.stackId]||(u[d.stackId]=[]),u[d.stackId].push(d),u),r),l=Object.entries(s).map(u=>{var[d,h]=u,m=h.map(g=>g.dataKey),p=Om(t,n,h[0].barSize);return{stackId:d,dataKeys:m,barSize:p}}),c=i.map(u=>{var d=[u.dataKey].filter(m=>m!=null),h=Om(t,n,u.barSize);return{stackId:void 0,dataKeys:d,barSize:h}});return[...l,...c]};function Cm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Wa(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Cm(Object(n),!0).forEach(function(r){PC(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Cm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function PC(e,t,n){return(t=OC(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function OC(e){var t=CC(e,"string");return typeof t=="symbol"?t:t+""}function CC(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function EC(e,t,n,r,a){var i=r.length;if(!(i<1)){var s=kt(e,n,0,!0),l,c=[];if(de(r[0].barSize)){var u=!1,d=n/i,h=r.reduce((b,x)=>b+(x.barSize||0),0);h+=(i-1)*s,h>=n&&(h-=(i-1)*s,s=0),h>=n&&d>0&&(u=!0,d*=.9,h=i*d);var m=(n-h)/2>>0,p={offset:m-s,size:0};l=r.reduce((b,x)=>{var k,I={stackId:x.stackId,dataKeys:x.dataKeys,position:{offset:p.offset+p.size+s,size:u?d:(k=x.barSize)!==null&&k!==void 0?k:0}},w=[...b,I];return p=w[w.length-1].position,w},c)}else{var g=kt(t,n,0,!0);n-2*g-(i-1)*s<=0&&(s=0);var v=(n-2*g-(i-1)*s)/i;v>1&&(v>>=0);var y=de(a)?Math.min(v,a):v;l=r.reduce((b,x,k)=>[...b,{stackId:x.stackId,dataKeys:x.dataKeys,position:{offset:g+(v+s)*k+(v-y)/2,size:y}}],c)}return l}}var MC=(e,t,n,r,a,i,s)=>{var l=Oe(s)?t:s,c=EC(n,r,a!==i?a:i,e,l);return a!==i&&c!=null&&(c=c.map(u=>Wa(Wa({},u),{},{position:Wa(Wa({},u.position),{},{offset:u.position.offset-a/2})}))),c},$C=(e,t)=>{var n=Bc(t);if(!(!e||n==null||t==null)){var{stackId:r}=t;if(r!=null){var a=e[r];if(a){var{stackedData:i}=a;if(i)return i.find(s=>s.key===n)}}}};function DC(e,t){return e&&typeof e=="object"&&"zIndex"in e&&typeof e.zIndex=="number"&&de(e.zIndex)?e.zIndex:t}var BC=e=>{var{chartData:t}=e,n=ge(),r=at();return f.useEffect(()=>r?()=>{}:(n(Xh(t)),()=>{n(Xh(void 0))}),[t,n,r]),null},Em={x:0,y:0,width:0,height:0,padding:{top:0,right:0,bottom:0,left:0}},cv=Ze({name:"brush",initialState:Em,reducers:{setBrushSettings(e,t){return t.payload==null?Em:t.payload}}});cv.actions;var _C=cv.reducer;function RC(e,t,n){return(t=LC(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function LC(e){var t=WC(e,"string");return typeof t=="symbol"?t:t+""}function WC(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}class lu{static create(t){return new lu(t)}constructor(t){this.scale=t}get domain(){return this.scale.domain}get range(){return this.scale.range}get rangeMin(){return this.range()[0]}get rangeMax(){return this.range()[1]}get bandwidth(){return this.scale.bandwidth}apply(t){var{bandAware:n,position:r}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(t!==void 0){if(r)switch(r){case"start":return this.scale(t);case"middle":{var a=this.bandwidth?this.bandwidth()/2:0;return this.scale(t)+a}case"end":{var i=this.bandwidth?this.bandwidth():0;return this.scale(t)+i}default:return this.scale(t)}if(n){var s=this.bandwidth?this.bandwidth()/2:0;return this.scale(t)+s}return this.scale(t)}}isInRange(t){var n=this.range(),r=n[0],a=n[n.length-1];return r<=a?t>=r&&t<=a:t>=a&&t<=r}}RC(lu,"EPS",1e-4);function FC(e){return(e%180+180)%180}var HC=function(t){var{width:n,height:r}=t,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,i=FC(a),s=i*Math.PI/180,l=Math.atan(r/n),c=s>l&&s<Math.PI-l?r/Math.sin(s):n/Math.cos(s);return Math.abs(c)},zC={dots:[],areas:[],lines:[]},uv=Ze({name:"referenceElements",initialState:zC,reducers:{addDot:(e,t)=>{e.dots.push(t.payload)},removeDot:(e,t)=>{var n=xt(e).dots.findIndex(r=>r===t.payload);n!==-1&&e.dots.splice(n,1)},addArea:(e,t)=>{e.areas.push(t.payload)},removeArea:(e,t)=>{var n=xt(e).areas.findIndex(r=>r===t.payload);n!==-1&&e.areas.splice(n,1)},addLine:(e,t)=>{e.lines.push(t.payload)},removeLine:(e,t)=>{var n=xt(e).lines.findIndex(r=>r===t.payload);n!==-1&&e.lines.splice(n,1)}}});uv.actions;var YC=uv.reducer,qC=f.createContext(void 0),GC=e=>{var{children:t}=e,[n]=f.useState("".concat(_r("recharts"),"-clip")),r=lv();if(r==null)return null;var{x:a,y:i,width:s,height:l}=r;return f.createElement(qC.Provider,{value:n},f.createElement("defs",null,f.createElement("clipPath",{id:n},f.createElement("rect",{x:a,y:i,height:l,width:s}))),t)};function dv(e,t){if(t<1)return[];if(t===1)return e;for(var n=[],r=0;r<e.length;r+=t){var a=e[r];a!==void 0&&n.push(a)}return n}function UC(e,t,n){var r={width:e.width+t.width,height:e.height+t.height};return HC(r,n)}function KC(e,t,n){var r=n==="width",{x:a,y:i,width:s,height:l}=e;return t===1?{start:r?a:i,end:r?a+s:i+l}:{start:r?a+s:i+l,end:r?a:i}}function Zr(e,t,n,r,a){if(e*t<e*r||e*t>e*a)return!1;var i=n();return e*(t-e*i/2-r)>=0&&e*(t+e*i/2-a)<=0}function VC(e,t){return dv(e,t+1)}function JC(e,t,n,r,a){for(var i=(r||[]).slice(),{start:s,end:l}=t,c=0,u=1,d=s,h=function(){var g=r==null?void 0:r[c];if(g===void 0)return{v:dv(r,u)};var v=c,y,b=()=>(y===void 0&&(y=n(g,v)),y),x=g.coordinate,k=c===0||Zr(e,x,b,d,l);k||(c=0,d=s,u+=1),k&&(d=x+e*(b()/2+a),c+=u)},m;u<=i.length;)if(m=h(),m)return m.v;return[]}function ZC(e,t,n,r,a){var i=(r||[]).slice(),s=i.length;if(s===0)return[];for(var{start:l,end:c}=t,u=1;u<=s;u++){for(var d=(s-1)%u,h=l,m=!0,p=function(){var x=r[g],k=g,I,w=()=>(I===void 0&&(I=n(x,k)),I),T=x.coordinate,j=g===d||Zr(e,T,w,h,c);if(!j)return m=!1,1;j&&(h=T+e*(w()/2+a))},g=d;g<s&&!p();g+=u);if(m){for(var v=[],y=d;y<s;y+=u)v.push(r[y]);return v}}return[]}function Mm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Fe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Mm(Object(n),!0).forEach(function(r){XC(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Mm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function XC(e,t,n){return(t=QC(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function QC(e){var t=e5(e,"string");return typeof t=="symbol"?t:t+""}function e5(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function t5(e,t,n,r,a){for(var i=(r||[]).slice(),s=i.length,{start:l}=t,{end:c}=t,u=function(m){var p=i[m],g,v=()=>(g===void 0&&(g=n(p,m)),g);if(m===s-1){var y=e*(p.coordinate+e*v()/2-c);i[m]=p=Fe(Fe({},p),{},{tickCoord:y>0?p.coordinate-y*e:p.coordinate})}else i[m]=p=Fe(Fe({},p),{},{tickCoord:p.coordinate});if(p.tickCoord!=null){var b=Zr(e,p.tickCoord,v,l,c);b&&(c=p.tickCoord-e*(v()/2+a),i[m]=Fe(Fe({},p),{},{isShow:!0}))}},d=s-1;d>=0;d--)u(d);return i}function n5(e,t,n,r,a,i){var s=(r||[]).slice(),l=s.length,{start:c,end:u}=t;if(i){var d=r[l-1],h=n(d,l-1),m=e*(d.coordinate+e*h/2-u);if(s[l-1]=d=Fe(Fe({},d),{},{tickCoord:m>0?d.coordinate-m*e:d.coordinate}),d.tickCoord!=null){var p=Zr(e,d.tickCoord,()=>h,c,u);p&&(u=d.tickCoord-e*(h/2+a),s[l-1]=Fe(Fe({},d),{},{isShow:!0}))}}for(var g=i?l-1:l,v=function(x){var k=s[x],I,w=()=>(I===void 0&&(I=n(k,x)),I);if(x===0){var T=e*(k.coordinate-e*w()/2-c);s[x]=k=Fe(Fe({},k),{},{tickCoord:T<0?k.coordinate-T*e:k.coordinate})}else s[x]=k=Fe(Fe({},k),{},{tickCoord:k.coordinate});if(k.tickCoord!=null){var j=Zr(e,k.tickCoord,w,c,u);j&&(c=k.tickCoord+e*(w()/2+a),s[x]=Fe(Fe({},k),{},{isShow:!0}))}},y=0;y<g;y++)v(y);return s}function r5(e,t,n){var{tick:r,ticks:a,viewBox:i,minTickGap:s,orientation:l,interval:c,tickFormatter:u,unit:d,angle:h}=e;if(!a||!a.length||!r)return[];if(U(c)||go.isSsr){var m;return(m=VC(a,U(c)?c:0))!==null&&m!==void 0?m:[]}var p=[],g=l==="top"||l==="bottom"?"width":"height",v=d&&g==="width"?$r(d,{fontSize:t,letterSpacing:n}):{width:0,height:0},y=(k,I)=>{var w=typeof u=="function"?u(k.value,I):k.value;return g==="width"?UC($r(w,{fontSize:t,letterSpacing:n}),v,h):$r(w,{fontSize:t,letterSpacing:n})[g]},b=a.length>=2?et(a[1].coordinate-a[0].coordinate):1,x=KC(i,b,g);return c==="equidistantPreserveStart"?JC(b,x,y,a,s):c==="equidistantPreserveEnd"?ZC(b,x,y,a,s):(c==="preserveStart"||c==="preserveStartEnd"?p=n5(b,x,y,a,s,c==="preserveStartEnd"):p=t5(b,x,y,a,s),p.filter(k=>k.isShow))}var a5=e=>{var{ticks:t,label:n,labelGapWithTick:r=5,tickSize:a=0,tickMargin:i=0}=e,s=0;if(t){Array.from(t).forEach(d=>{if(d){var h=d.getBoundingClientRect();h.width>s&&(s=h.width)}});var l=n?n.getBoundingClientRect().width:0,c=a+i,u=s+c+l+(n?r:0);return Math.round(u)}return 0},i5=["axisLine","width","height","className","hide","ticks","axisType"];function o5(e,t){if(e==null)return{};var n,r,a=s5(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function s5(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function $n(){return $n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$n.apply(null,arguments)}function $m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ye(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?$m(Object(n),!0).forEach(function(r){l5(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$m(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function l5(e,t,n){return(t=c5(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c5(e){var t=u5(e,"string");return typeof t=="symbol"?t:t+""}function u5(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Sn={x:0,y:0,width:0,height:0,viewBox:{x:0,y:0,width:0,height:0},orientation:"bottom",ticks:[],stroke:"#666",tickLine:!0,axisLine:!0,tick:!0,mirror:!1,minTickGap:5,tickSize:6,tickMargin:2,interval:"preserveEnd",zIndex:He.axis};function d5(e){var{x:t,y:n,width:r,height:a,orientation:i,mirror:s,axisLine:l,otherSvgProps:c}=e;if(!l)return null;var u=ye(ye(ye({},c),dn(l)),{},{fill:"none"});if(i==="top"||i==="bottom"){var d=+(i==="top"&&!s||i==="bottom"&&s);u=ye(ye({},u),{},{x1:t,y1:n+d*a,x2:t+r,y2:n+d*a})}else{var h=+(i==="left"&&!s||i==="right"&&s);u=ye(ye({},u),{},{x1:t+h*r,y1:n,x2:t+h*r,y2:n+a})}return f.createElement("line",$n({},u,{className:le("recharts-cartesian-axis-line",nr(l,"className"))}))}function h5(e,t,n,r,a,i,s,l,c){var u,d,h,m,p,g,v=l?-1:1,y=e.tickSize||s,b=U(e.tickCoord)?e.tickCoord:e.coordinate;switch(i){case"top":u=d=e.coordinate,m=n+ +!l*a,h=m-v*y,g=h-v*c,p=b;break;case"left":h=m=e.coordinate,d=t+ +!l*r,u=d-v*y,p=u-v*c,g=b;break;case"right":h=m=e.coordinate,d=t+ +l*r,u=d+v*y,p=u+v*c,g=b;break;default:u=d=e.coordinate,m=n+ +l*a,h=m+v*y,g=h+v*c,p=b;break}return{line:{x1:u,y1:h,x2:d,y2:m},tick:{x:p,y:g}}}function m5(e,t){switch(e){case"left":return t?"start":"end";case"right":return t?"end":"start";default:return"middle"}}function p5(e,t){switch(e){case"left":case"right":return"middle";case"top":return t?"start":"end";default:return t?"end":"start"}}function g5(e){var{option:t,tickProps:n,value:r}=e,a,i=le(n.className,"recharts-cartesian-axis-tick-value");if(f.isValidElement(t))a=f.cloneElement(t,ye(ye({},n),{},{className:i}));else if(typeof t=="function")a=t(ye(ye({},n),{},{className:i}));else{var s="recharts-cartesian-axis-tick-value";typeof t!="boolean"&&(s=le(s,t==null?void 0:t.className)),a=f.createElement(au,$n({},n,{className:s}),r)}return a}var f5=f.forwardRef((e,t)=>{var{ticks:n=[],tick:r,tickLine:a,stroke:i,tickFormatter:s,unit:l,padding:c,tickTextProps:u,orientation:d,mirror:h,x:m,y:p,width:g,height:v,tickSize:y,tickMargin:b,fontSize:x,letterSpacing:k,getTicksConfig:I,events:w,axisType:T}=e,j=r5(ye(ye({},I),{},{ticks:n}),x,k),E=m5(d,h),C=p5(d,h),$=dn(I),A=Al(r),D={};typeof a=="object"&&(D=a);var _=ye(ye({},$),{},{fill:"none"},D),R=j.map(Y=>ye({entry:Y},h5(Y,m,p,g,v,d,y,h,b))),z=R.map(Y=>{var{entry:Z,line:q}=Y;return f.createElement(Ht,{className:"recharts-cartesian-axis-tick",key:"tick-".concat(Z.value,"-").concat(Z.coordinate,"-").concat(Z.tickCoord)},a&&f.createElement("line",$n({},_,q,{className:le("recharts-cartesian-axis-tick-line",nr(a,"className"))})))}),K=R.map((Y,Z)=>{var{entry:q,tick:te}=Y,he=ye(ye(ye(ye({textAnchor:E,verticalAnchor:C},$),{},{stroke:"none",fill:i},A),te),{},{index:Z,payload:q,visibleTicksCount:j.length,tickFormatter:s,padding:c},u);return f.createElement(Ht,$n({className:"recharts-cartesian-axis-tick-label",key:"tick-label-".concat(q.value,"-").concat(q.coordinate,"-").concat(q.tickCoord)},El(w,q,Z)),r&&f.createElement(g5,{option:r,tickProps:he,value:"".concat(typeof s=="function"?s(q.value,Z):q.value).concat(l||"")}))});return f.createElement("g",{className:"recharts-cartesian-axis-ticks recharts-".concat(T,"-ticks")},K.length>0&&f.createElement(fn,{zIndex:He.label},f.createElement("g",{className:"recharts-cartesian-axis-tick-labels recharts-".concat(T,"-tick-labels"),ref:t},K)),z.length>0&&f.createElement("g",{className:"recharts-cartesian-axis-tick-lines recharts-".concat(T,"-tick-lines")},z))}),y5=f.forwardRef((e,t)=>{var{axisLine:n,width:r,height:a,className:i,hide:s,ticks:l,axisType:c}=e,u=o5(e,i5),[d,h]=f.useState(""),[m,p]=f.useState(""),g=f.useRef(null);f.useImperativeHandle(t,()=>({getCalculatedWidth:()=>{var y;return a5({ticks:g.current,label:(y=e.labelRef)===null||y===void 0?void 0:y.current,labelGapWithTick:5,tickSize:e.tickSize,tickMargin:e.tickMargin})}}));var v=f.useCallback(y=>{if(y){var b=y.getElementsByClassName("recharts-cartesian-axis-tick-value");g.current=b;var x=b[0];if(x){var k=window.getComputedStyle(x),I=k.fontSize,w=k.letterSpacing;(I!==d||w!==m)&&(h(I),p(w))}}},[d,m]);return s||r!=null&&r<=0||a!=null&&a<=0?null:f.createElement(fn,{zIndex:e.zIndex},f.createElement(Ht,{className:le("recharts-cartesian-axis",i)},f.createElement(d5,{x:e.x,y:e.y,width:r,height:a,orientation:e.orientation,mirror:e.mirror,axisLine:n,otherSvgProps:dn(e)}),f.createElement(f5,{ref:v,axisType:c,events:u,fontSize:d,getTicksConfig:e,height:e.height,letterSpacing:m,mirror:e.mirror,orientation:e.orientation,padding:e.padding,stroke:e.stroke,tick:e.tick,tickFormatter:e.tickFormatter,tickLine:e.tickLine,tickMargin:e.tickMargin,tickSize:e.tickSize,tickTextProps:e.tickTextProps,ticks:l,unit:e.unit,width:e.width,x:e.x,y:e.y}),f.createElement(uO,{x:e.x,y:e.y,width:e.width,height:e.height,lowerWidth:e.width,upperWidth:e.width},f.createElement(wO,{label:e.label,labelRef:e.labelRef}),e.children)))}),cu=f.forwardRef((e,t)=>{var n=pt(e,Sn);return f.createElement(y5,$n({},n,{ref:t}))});cu.displayName="CartesianAxis";var v5={},hv=Ze({name:"errorBars",initialState:v5,reducers:{addErrorBar:(e,t)=>{var{itemId:n,errorBar:r}=t.payload;e[n]||(e[n]=[]),e[n].push(r)},replaceErrorBar:(e,t)=>{var{itemId:n,prev:r,next:a}=t.payload;e[n]&&(e[n]=e[n].map(i=>i.dataKey===r.dataKey&&i.direction===r.direction?a:i))},removeErrorBar:(e,t)=>{var{itemId:n,errorBar:r}=t.payload;e[n]&&(e[n]=e[n].filter(a=>a.dataKey!==r.dataKey||a.direction!==r.direction))}}});hv.actions;var b5=hv.reducer,w5=["children"];function x5(e,t){if(e==null)return{};var n,r,a=k5(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function k5(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}var T5={data:[],xAxisId:"xAxis-0",yAxisId:"yAxis-0",dataPointFormatter:()=>({x:0,y:0,value:0}),errorBarOffset:0},I5=f.createContext(T5);function j5(e){var{children:t}=e,n=x5(e,w5);return f.createElement(I5.Provider,{value:n},t)}function mv(e,t){var n,r,a=V(u=>en(u,e)),i=V(u=>tn(u,t)),s=(n=a==null?void 0:a.allowDataOverflow)!==null&&n!==void 0?n:Ne.allowDataOverflow,l=(r=i==null?void 0:i.allowDataOverflow)!==null&&r!==void 0?r:Ae.allowDataOverflow,c=s||l;return{needClip:c,needClipX:s,needClipY:l}}function N5(e){var{xAxisId:t,yAxisId:n,clipPathId:r}=e,a=lv(),{needClipX:i,needClipY:s,needClip:l}=mv(t,n);if(!l||!a)return null;var{x:c,y:u,width:d,height:h}=a;return f.createElement("clipPath",{id:"clipPath-".concat(r)},f.createElement("rect",{x:i?c:c-d/2,y:s?u:u-h/2,width:i?d:d*2,height:s?h:h*2}))}var A5={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wa=f;function S5(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var P5=typeof Object.is=="function"?Object.is:S5,O5=wa.useSyncExternalStore,C5=wa.useRef,E5=wa.useEffect,M5=wa.useMemo,$5=wa.useDebugValue;A5.useSyncExternalStoreWithSelector=function(e,t,n,r,a){var i=C5(null);if(i.current===null){var s={hasValue:!1,value:null};i.current=s}else s=i.current;i=M5(function(){function c(p){if(!u){if(u=!0,d=p,p=r(p),a!==void 0&&s.hasValue){var g=s.value;if(a(g,p))return h=g}return h=p}if(g=h,P5(d,p))return g;var v=r(p);return a!==void 0&&a(g,v)?(d=p,g):(d=p,h=v)}var u=!1,d,h,m=n===void 0?null:n;return[function(){return c(t())},m===null?void 0:function(){return c(m())}]},[t,n,r,a]);var l=O5(e,i[0],i[1]);return E5(function(){s.hasValue=!0,s.value=l},[l]),$5(l),l};function D5(e){e()}function B5(){let e=null,t=null;return{clear(){e=null,t=null},notify(){D5(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=e;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const a=t={callback:n,next:null,prev:t};return a.prev?a.prev.next=a:e=a,function(){!r||e===null||(r=!1,a.next?a.next.prev=a.prev:t=a.prev,a.prev?a.prev.next=a.next:e=a.next)}}}}var Dm={notify(){},get:()=>[]};function _5(e,t){let n,r=Dm,a=0,i=!1;function s(v){d();const y=r.subscribe(v);let b=!1;return()=>{b||(b=!0,y(),h())}}function l(){r.notify()}function c(){g.onStateChange&&g.onStateChange()}function u(){return i}function d(){a++,n||(n=t?t.addNestedSub(c):e.subscribe(c),r=B5())}function h(){a--,n&&a===0&&(n(),n=void 0,r.clear(),r=Dm)}function m(){i||(i=!0,d())}function p(){i&&(i=!1,h())}const g={addNestedSub:s,notifyNestedSubs:l,handleChangeWrapper:c,isSubscribed:u,trySubscribe:m,tryUnsubscribe:p,getListeners:()=>r};return g}var R5=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",L5=R5(),W5=()=>typeof navigator<"u"&&navigator.product==="ReactNative",F5=W5(),H5=()=>L5||F5?f.useLayoutEffect:f.useEffect,z5=H5();function Bm(e,t){return e===t?e!==0||t!==0||1/e===1/t:e!==e&&t!==t}function Y5(e,t){if(Bm(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(let a=0;a<n.length;a++)if(!Object.prototype.hasOwnProperty.call(t,n[a])||!Bm(e[n[a]],t[n[a]]))return!1;return!0}var gs=Symbol.for("react-redux-context"),fs=typeof globalThis<"u"?globalThis:{};function q5(){if(!f.createContext)return{};const e=fs[gs]??(fs[gs]=new Map);let t=e.get(f.createContext);return t||(t=f.createContext(null),e.set(f.createContext,t)),t}var G5=q5();function U5(e){const{children:t,context:n,serverState:r,store:a}=e,i=f.useMemo(()=>{const c=_5(a);return{store:a,subscription:c,getServerState:r?()=>r:void 0}},[a,r]),s=f.useMemo(()=>a.getState(),[a]);z5(()=>{const{subscription:c}=i;return c.onStateChange=c.notifyNestedSubs,c.trySubscribe(),s!==a.getState()&&c.notifyNestedSubs(),()=>{c.tryUnsubscribe(),c.onStateChange=void 0}},[i,s]);const l=n||G5;return f.createElement(l.Provider,{value:i},t)}var K5=U5,V5=new Set(["axisLine","tickLine","activeBar","activeDot","activeLabel","activeShape","allowEscapeViewBox","background","cursor","dot","label","line","margin","padding","position","shape","style","tick","wrapperStyle","radius"]);function J5(e,t){return e==null&&t==null?!0:typeof e=="number"&&typeof t=="number"?e===t||e!==e&&t!==t:e===t}function uu(e,t){var n=new Set([...Object.keys(e),...Object.keys(t)]);for(var r of n)if(V5.has(r)){if(e[r]==null&&t[r]==null)continue;if(!Y5(e[r],t[r]))return!1}else if(!J5(e[r],t[r]))return!1;return!0}function Wn(e,t){var n,r;return(n=(r=e.graphicalItems.cartesianItems.find(a=>a.id===t))===null||r===void 0?void 0:r.xAxisId)!==null&&n!==void 0?n:ov}function Fn(e,t){var n,r;return(n=(r=e.graphicalItems.cartesianItems.find(a=>a.id===t))===null||r===void 0?void 0:r.yAxisId)!==null&&n!==void 0?n:ov}var Z5=!0,ys="Invariant failed";function X5(e,t){if(!e){if(Z5)throw new Error(ys);var n=typeof t=="function"?t():t,r=n?"".concat(ys,": ").concat(n):ys;throw new Error(r)}}function yl(){return yl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yl.apply(null,arguments)}function Mi(e){return f.createElement(QO,yl({shapeType:"rectangle",activeClassName:"recharts-active-bar"},e))}var Q5=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return(r,a)=>{if(U(t))return t;var i=U(r)||Oe(r);return i?t(r,a):(i||X5(!1,"minPointSize callback function received a value with type of ".concat(typeof r,". Currently only numbers or null/undefined are supported.")),n)}},eE=(e,t,n)=>n,tE=(e,t)=>t,xa=S([Rc,tE],(e,t)=>e.filter(n=>n.type==="bar").find(n=>n.id===t)),nE=S([xa],e=>e==null?void 0:e.maxBarSize),rE=(e,t,n,r)=>r,aE=S([re,Rc,Wn,Fn,eE],(e,t,n,r,a)=>t.filter(i=>e==="horizontal"?i.xAxisId===n:i.yAxisId===r).filter(i=>i.isPanorama===a).filter(i=>i.hide===!1).filter(i=>i.type==="bar")),iE=(e,t,n)=>{var r=re(e),a=Wn(e,t),i=Fn(e,t);if(!(a==null||i==null))return r==="horizontal"?ul(e,"yAxis",i,n):ul(e,"xAxis",a,n)},oE=(e,t)=>{var n=re(e),r=Wn(e,t),a=Fn(e,t);if(!(r==null||a==null))return n==="horizontal"?Fh(e,"xAxis",r):Fh(e,"yAxis",a)},sE=S([aE,hN,oE],SC),lE=(e,t,n)=>{var r,a,i=xa(e,t);if(i!=null){var s=Wn(e,t),l=Fn(e,t);if(!(s==null||l==null)){var c=re(e),u=gy(e),{maxBarSize:d}=i,h=Oe(d)?u:d,m,p;return c==="horizontal"?(m=ur(e,"xAxis",s,n),p=cr(e,"xAxis",s,n)):(m=ur(e,"yAxis",l,n),p=cr(e,"yAxis",l,n)),(r=(a=li(m,p,!0))!==null&&a!==void 0?a:h)!==null&&r!==void 0?r:0}}},pv=(e,t,n)=>{var r=re(e),a=Wn(e,t),i=Fn(e,t);if(!(a==null||i==null)){var s,l;return r==="horizontal"?(s=ur(e,"xAxis",a,n),l=cr(e,"xAxis",a,n)):(s=ur(e,"yAxis",i,n),l=cr(e,"yAxis",i,n)),li(s,l)}},cE=S([sE,gy,dN,fy,lE,pv,nE],MC),uE=(e,t,n)=>{var r=Wn(e,t);if(r!=null)return ur(e,"xAxis",r,n)},dE=(e,t,n)=>{var r=Fn(e,t);if(r!=null)return ur(e,"yAxis",r,n)},hE=(e,t,n)=>{var r=Wn(e,t);if(r!=null)return cr(e,"xAxis",r,n)},mE=(e,t,n)=>{var r=Fn(e,t);if(r!=null)return cr(e,"yAxis",r,n)},pE=S([cE,xa],(e,t)=>{if(!(e==null||t==null)){var n=e.find(r=>r.stackId===t.stackId&&t.dataKey!=null&&r.dataKeys.includes(t.dataKey));if(n!=null)return n.position}}),gE=S([iE,xa],$C),fE=S([Ce,Ql,uE,dE,hE,mE,pE,re,Qj,pv,gE,xa,rE],(e,t,n,r,a,i,s,l,c,u,d,h,m)=>{var{chartData:p,dataStartIndex:g,dataEndIndex:v}=c;if(!(h==null||s==null||t==null||l!=="horizontal"&&l!=="vertical"||n==null||r==null||a==null||i==null||u==null)){var{data:y}=h,b;if(y!=null&&y.length>0?b=y:b=p==null?void 0:p.slice(g,v+1),b!=null)return qE({layout:l,barSettings:h,pos:s,parentViewBox:t,bandSize:u,xAxis:n,yAxis:r,xAxisTicks:a,yAxisTicks:i,stackedData:d,displayedData:b,offset:e,cells:m,dataStartIndex:g})}}),yE=["index"];function vl(){return vl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},vl.apply(null,arguments)}function vE(e,t){if(e==null)return{};var n,r,a=bE(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function bE(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}var gv=f.createContext(void 0),wE=e=>{var t=f.useContext(gv);if(t!=null)return t.stackId;if(e!=null)return i1(e)},xE=(e,t)=>"recharts-bar-stack-clip-path-".concat(e,"-").concat(t),kE=e=>{var t=f.useContext(gv);if(t!=null){var{stackId:n}=t;return"url(#".concat(xE(n,e),")")}},TE=e=>{var{index:t}=e,n=vE(e,yE),r=kE(t);return f.createElement(Ht,vl({className:"recharts-bar-stack-layer",clipPath:r},n))},IE=["onMouseEnter","onMouseLeave","onClick"],jE=["value","background","tooltipPosition"],NE=["id"],AE=["onMouseEnter","onClick","onMouseLeave"];function Vt(){return Vt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vt.apply(null,arguments)}function _m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ye(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?_m(Object(n),!0).forEach(function(r){SE(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_m(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function SE(e,t,n){return(t=PE(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function PE(e){var t=OE(e,"string");return typeof t=="symbol"?t:t+""}function OE(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function $i(e,t){if(e==null)return{};var n,r,a=CE(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function CE(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}var EE=e=>{var{dataKey:t,name:n,fill:r,legendType:a,hide:i}=e;return[{inactive:i,dataKey:t,type:a,color:r,value:Hg(n,t),payload:e}]},ME=f.memo(e=>{var{dataKey:t,stroke:n,strokeWidth:r,fill:a,name:i,hide:s,unit:l,tooltipType:c,id:u}=e,d={dataDefinedOnItem:void 0,positions:void 0,settings:{stroke:n,strokeWidth:r,fill:a,dataKey:t,nameKey:void 0,name:Hg(i,t),hide:s,type:c,color:a,unit:l,graphicalItemId:u}};return f.createElement(eC,{tooltipEntrySettings:d})});function $E(e){var t=V(dr),{data:n,dataKey:r,background:a,allOtherBarProps:i}=e,{onMouseEnter:s,onMouseLeave:l,onClick:c}=i,u=$i(i,IE),d=nv(s,r,i.id),h=rv(l),m=av(c,r,i.id);if(!a||n==null)return null;var p=Al(a);return f.createElement(fn,{zIndex:DC(a,He.barBackground)},n.map((g,v)=>{var{value:y,background:b,tooltipPosition:x}=g,k=$i(g,jE);if(!b)return null;var I=d(g,v),w=h(g,v),T=m(g,v),j=Ye(Ye(Ye(Ye(Ye({option:a,isActive:String(v)===t},k),{},{fill:"#eee"},b),p),El(u,g,v)),{},{onMouseEnter:I,onMouseLeave:w,onClick:T,dataKey:r,index:v,className:"recharts-bar-background-rectangle"});return f.createElement(Mi,Vt({key:"background-bar-".concat(v)},j))}))}function DE(e){var{showLabels:t,children:n,rects:r}=e,a=r==null?void 0:r.map(i=>{var s={x:i.x,y:i.y,width:i.width,lowerWidth:i.width,upperWidth:i.width,height:i.height};return Ye(Ye({},s),{},{value:i.value,payload:i.payload,parentViewBox:i.parentViewBox,viewBox:s,fill:i.fill})});return f.createElement(AO,{value:t?a:void 0},n)}function BE(e){var{shape:t,activeBar:n,baseProps:r,entry:a,index:i,dataKey:s}=e,l=V(dr),c=V(N0),u=n&&String(i)===l&&(c==null||s===c),d=u?n:t;return u?f.createElement(fn,{zIndex:He.activeBar},f.createElement(Mi,Vt({},r,{name:String(r.name)},a,{isActive:u,option:d,index:i,dataKey:s}))):f.createElement(Mi,Vt({},r,{name:String(r.name)},a,{isActive:u,option:d,index:i,dataKey:s}))}function _E(e){var{shape:t,baseProps:n,entry:r,index:a,dataKey:i}=e;return f.createElement(Mi,Vt({},n,{name:String(n.name)},r,{isActive:!1,option:t,index:a,dataKey:i}))}function RE(e){var t,{data:n,props:r}=e,a=(t=dn(r))!==null&&t!==void 0?t:{},{id:i}=a,s=$i(a,NE),{shape:l,dataKey:c,activeBar:u}=r,{onMouseEnter:d,onClick:h,onMouseLeave:m}=r,p=$i(r,AE),g=nv(d,c,i),v=rv(m),y=av(h,c,i);return n?f.createElement(f.Fragment,null,n.map((b,x)=>f.createElement(TE,Vt({index:x,key:"rectangle-".concat(b==null?void 0:b.x,"-").concat(b==null?void 0:b.y,"-").concat(b==null?void 0:b.value,"-").concat(x),className:"recharts-bar-rectangle"},El(p,b,x),{onMouseEnter:g(b,x),onMouseLeave:v(b,x),onClick:y(b,x)}),u?f.createElement(BE,{shape:l,activeBar:u,baseProps:s,entry:b,index:x,dataKey:c}):f.createElement(_E,{shape:l,baseProps:s,entry:b,index:x,dataKey:c})))):null}function LE(e){var{props:t,previousRectanglesRef:n}=e,{data:r,layout:a,isAnimationActive:i,animationBegin:s,animationDuration:l,animationEasing:c,onAnimationEnd:u,onAnimationStart:d}=t,h=n.current,m=ac(t,"recharts-bar-"),[p,g]=f.useState(!1),v=!p,y=f.useCallback(()=>{typeof u=="function"&&u(),g(!1)},[u]),b=f.useCallback(()=>{typeof d=="function"&&d(),g(!0)},[d]);return f.createElement(DE,{showLabels:v,rects:r},f.createElement(rc,{animationId:m,begin:s,duration:l,isActive:i,easing:c,onAnimationEnd:y,onAnimationStart:b,key:m},x=>{var k=x===1?r:r==null?void 0:r.map((I,w)=>{var T=h&&h[w];if(T)return Ye(Ye({},I),{},{x:De(T.x,I.x,x),y:De(T.y,I.y,x),width:De(T.width,I.width,x),height:De(T.height,I.height,x)});if(a==="horizontal"){var j=De(0,I.height,x),E=De(I.stackedBarStart,I.y,x);return Ye(Ye({},I),{},{y:E,height:j})}var C=De(0,I.width,x),$=De(I.stackedBarStart,I.x,x);return Ye(Ye({},I),{},{width:C,x:$})});return x>0&&(n.current=k??null),k==null?null:f.createElement(Ht,null,f.createElement(RE,{props:t,data:k}))}),f.createElement(OO,{label:t.label}),t.children)}function WE(e){var t=f.useRef(null);return f.createElement(LE,{previousRectanglesRef:t,props:e})}var fv=0,FE=(e,t)=>{var n=Array.isArray(e.value)?e.value[1]:e.value;return{x:e.x,y:e.y,value:n,errorVal:_e(e,t)}};class HE extends f.PureComponent{render(){var{hide:t,data:n,dataKey:r,className:a,xAxisId:i,yAxisId:s,needClip:l,background:c,id:u}=this.props;if(t||n==null)return null;var d=le("recharts-bar",a),h=u;return f.createElement(Ht,{className:d,id:u},l&&f.createElement("defs",null,f.createElement(N5,{clipPathId:h,xAxisId:i,yAxisId:s})),f.createElement(Ht,{className:"recharts-bar-rectangles",clipPath:l?"url(#clipPath-".concat(h,")"):void 0},f.createElement($E,{data:n,dataKey:r,background:c,allOtherBarProps:this.props}),f.createElement(WE,this.props)))}}var zE={activeBar:!1,animationBegin:0,animationDuration:400,animationEasing:"ease",background:!1,hide:!1,isAnimationActive:"auto",label:!1,legendType:"rect",minPointSize:fv,xAxisId:0,yAxisId:0,zIndex:He.bar};function YE(e){var{xAxisId:t,yAxisId:n,hide:r,legendType:a,minPointSize:i,activeBar:s,animationBegin:l,animationDuration:c,animationEasing:u,isAnimationActive:d}=e,{needClip:h}=mv(t,n),m=oa(),p=at(),g=BO(e.children,ru),v=V(x=>fE(x,e.id,p,g));if(m!=="vertical"&&m!=="horizontal")return null;var y,b=v==null?void 0:v[0];return b==null||b.height==null||b.width==null?y=0:y=m==="vertical"?b.height/2:b.width/2,f.createElement(j5,{xAxisId:t,yAxisId:n,data:v,dataPointFormatter:FE,errorBarOffset:y},f.createElement(HE,Vt({},e,{layout:m,needClip:h,data:v,xAxisId:t,yAxisId:n,hide:r,legendType:a,minPointSize:i,activeBar:s,animationBegin:l,animationDuration:c,animationEasing:u,isAnimationActive:d})))}function qE(e){var{layout:t,barSettings:{dataKey:n,minPointSize:r},pos:a,bandSize:i,xAxis:s,yAxis:l,xAxisTicks:c,yAxisTicks:u,stackedData:d,displayedData:h,offset:m,cells:p,parentViewBox:g,dataStartIndex:v}=e,y=t==="horizontal"?l:s,b=d?y.scale.domain():null,x=o1({numericAxis:y}),k=y.scale(x);return h.map((I,w)=>{var T,j,E,C,$,A;if(d){var D=d[w+v];if(D==null)return null;T=e1(D,b)}else T=_e(I,n),Array.isArray(T)||(T=[x,T]);var _=Q5(r,fv)(T[1],w);if(t==="horizontal"){var R,[z,K]=[l.scale(T[0]),l.scale(T[1])];j=ed({axis:s,ticks:c,bandSize:i,offset:a.offset,entry:I,index:w}),E=(R=K??z)!==null&&R!==void 0?R:void 0,C=a.size;var Y=z-K;if($=Ct(Y)?0:Y,A={x:j,y:m.top,width:C,height:m.height},Math.abs(_)>0&&Math.abs($)<Math.abs(_)){var Z=et($||_)*(Math.abs(_)-Math.abs($));E-=Z,$+=Z}}else{var[q,te]=[s.scale(T[0]),s.scale(T[1])];if(j=q,E=ed({axis:l,ticks:u,bandSize:i,offset:a.offset,entry:I,index:w}),C=te-q,$=a.size,A={x:m.left,y:E,width:m.width,height:$},Math.abs(_)>0&&Math.abs(C)<Math.abs(_)){var he=et(C||_)*(Math.abs(_)-Math.abs(C));C+=he}}if(j==null||E==null||C==null||$==null)return null;var Ie=Ye(Ye({},I),{},{stackedBarStart:k,x:j,y:E,width:C,height:$,value:d?T:T[1],payload:I,background:A,tooltipPosition:{x:j+C/2,y:E+$/2},parentViewBox:g},p&&p[w]&&p[w].props);return Ie}).filter(Boolean)}function GE(e){var t=pt(e,zE),n=wE(t.stackId),r=at();return f.createElement(oC,{id:t.id,type:"bar"},a=>f.createElement(f.Fragment,null,f.createElement(tC,{legendPayload:EE(t)}),f.createElement(ME,{dataKey:t.dataKey,stroke:t.stroke,strokeWidth:t.strokeWidth,fill:t.fill,name:t.name,hide:t.hide,unit:t.unit,tooltipType:t.tooltipType,id:a}),f.createElement(mC,{type:"bar",id:a,data:void 0,xAxisId:t.xAxisId,yAxisId:t.yAxisId,zAxisId:0,dataKey:t.dataKey,stackId:n,hide:t.hide,barSize:t.barSize,minPointSize:t.minPointSize,maxBarSize:t.maxBarSize,isPanorama:r}),f.createElement(fn,{zIndex:t.zIndex},f.createElement(YE,Vt({},t,{id:a})))))}var yv=f.memo(GE,uu);yv.displayName="Bar";var UE=["domain","range"],KE=["domain","range"];function Rm(e,t){if(e==null)return{};var n,r,a=VE(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function VE(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Lm(e,t){return e===t?!0:Array.isArray(e)&&e.length===2&&Array.isArray(t)&&t.length===2?e[0]===t[0]&&e[1]===t[1]:!1}function vv(e,t){if(e===t)return!0;var{domain:n,range:r}=e,a=Rm(e,UE),{domain:i,range:s}=t,l=Rm(t,KE);return!Lm(n,i)||!Lm(r,s)?!1:uu(a,l)}var JE=["dangerouslySetInnerHTML","ticks","scale"],ZE=["id","scale"];function bl(){return bl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},bl.apply(null,arguments)}function Wm(e,t){if(e==null)return{};var n,r,a=XE(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function XE(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function QE(e){var t=ge(),n=f.useRef(null);return f.useLayoutEffect(()=>{n.current===null?t(vC(e)):n.current!==e&&t(bC({prev:n.current,next:e})),n.current=e},[e,t]),f.useLayoutEffect(()=>()=>{n.current&&(t(wC(n.current)),n.current=null)},[t]),null}var eM=e=>{var{xAxisId:t,className:n}=e,r=V(Ql),a=at(),i="xAxis",s=V(m=>o0(m,i,t,a)),l=V(m=>n0(m,t)),c=V(m=>cA(m,t)),u=V(m=>jy(m,t));if(l==null||c==null||u==null)return null;var d=Wm(e,JE),h=Wm(u,ZE);return f.createElement(cu,bl({},d,h,{x:c.x,y:c.y,width:l.width,height:l.height,className:le("recharts-".concat(i," ").concat(i),n),viewBox:r,ticks:s,axisType:i}))},tM={allowDataOverflow:Ne.allowDataOverflow,allowDecimals:Ne.allowDecimals,allowDuplicatedCategory:Ne.allowDuplicatedCategory,angle:Ne.angle,axisLine:Sn.axisLine,height:Ne.height,hide:!1,includeHidden:Ne.includeHidden,interval:Ne.interval,minTickGap:Ne.minTickGap,mirror:Ne.mirror,orientation:Ne.orientation,padding:Ne.padding,reversed:Ne.reversed,scale:Ne.scale,tick:Ne.tick,tickCount:Ne.tickCount,tickLine:Sn.tickLine,tickSize:Sn.tickSize,type:Ne.type,xAxisId:0},nM=e=>{var t=pt(e,tM);return f.createElement(f.Fragment,null,f.createElement(QE,{allowDataOverflow:t.allowDataOverflow,allowDecimals:t.allowDecimals,allowDuplicatedCategory:t.allowDuplicatedCategory,angle:t.angle,dataKey:t.dataKey,domain:t.domain,height:t.height,hide:t.hide,id:t.xAxisId,includeHidden:t.includeHidden,interval:t.interval,minTickGap:t.minTickGap,mirror:t.mirror,name:t.name,orientation:t.orientation,padding:t.padding,reversed:t.reversed,scale:t.scale,tick:t.tick,tickCount:t.tickCount,tickFormatter:t.tickFormatter,ticks:t.ticks,type:t.type,unit:t.unit}),f.createElement(eM,t))},bv=f.memo(nM,vv);bv.displayName="XAxis";var rM=["dangerouslySetInnerHTML","ticks","scale"],aM=["id","scale"];function wl(){return wl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wl.apply(null,arguments)}function Fm(e,t){if(e==null)return{};var n,r,a=iM(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function iM(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function oM(e){var t=ge(),n=f.useRef(null);return f.useLayoutEffect(()=>{n.current===null?t(xC(e)):n.current!==e&&t(kC({prev:n.current,next:e})),n.current=e},[e,t]),f.useLayoutEffect(()=>()=>{n.current&&(t(TC(n.current)),n.current=null)},[t]),null}var sM=e=>{var{yAxisId:t,className:n,width:r,label:a}=e,i=f.useRef(null),s=f.useRef(null),l=V(Ql),c=at(),u=ge(),d="yAxis",h=V(b=>r0(b,t)),m=V(b=>dA(b,t)),p=V(b=>o0(b,d,t,c)),g=V(b=>Ny(b,t));if(f.useLayoutEffect(()=>{if(!(r!=="auto"||!h||iu(a)||f.isValidElement(a)||g==null)){var b=i.current;if(b){var x=b.getCalculatedWidth();Math.round(h.width)!==Math.round(x)&&u(IC({id:t,width:x}))}}},[p,h,u,a,t,r,g]),h==null||m==null||g==null)return null;var v=Fm(e,rM),y=Fm(g,aM);return f.createElement(cu,wl({},v,y,{ref:i,labelRef:s,x:m.x,y:m.y,tickTextProps:r==="auto"?{width:void 0}:{width:r},width:h.width,height:h.height,className:le("recharts-".concat(d," ").concat(d),n),viewBox:l,ticks:p,axisType:d}))},lM={allowDataOverflow:Ae.allowDataOverflow,allowDecimals:Ae.allowDecimals,allowDuplicatedCategory:Ae.allowDuplicatedCategory,angle:Ae.angle,axisLine:Sn.axisLine,hide:!1,includeHidden:Ae.includeHidden,interval:Ae.interval,minTickGap:Ae.minTickGap,mirror:Ae.mirror,orientation:Ae.orientation,padding:Ae.padding,reversed:Ae.reversed,scale:Ae.scale,tick:Ae.tick,tickCount:Ae.tickCount,tickLine:Sn.tickLine,tickSize:Sn.tickSize,type:Ae.type,width:Ae.width,yAxisId:0},cM=e=>{var t=pt(e,lM);return f.createElement(f.Fragment,null,f.createElement(oM,{interval:t.interval,id:t.yAxisId,scale:t.scale,type:t.type,domain:t.domain,allowDataOverflow:t.allowDataOverflow,dataKey:t.dataKey,allowDuplicatedCategory:t.allowDuplicatedCategory,allowDecimals:t.allowDecimals,tickCount:t.tickCount,padding:t.padding,includeHidden:t.includeHidden,reversed:t.reversed,ticks:t.ticks,width:t.width,orientation:t.orientation,mirror:t.mirror,hide:t.hide,unit:t.unit,name:t.name,angle:t.angle,minTickGap:t.minTickGap,tick:t.tick,tickFormatter:t.tickFormatter}),f.createElement(sM,t))},wv=f.memo(cM,vv);wv.displayName="YAxis";var uM=(e,t)=>t,du=S([uM,re,Ty,ke,k0,nn,jS,Ce],ES),hu=e=>{var t=e.currentTarget.getBoundingClientRect(),n=t.width/e.currentTarget.offsetWidth,r=t.height/e.currentTarget.offsetHeight;return{chartX:Math.round((e.clientX-t.left)/n),chartY:Math.round((e.clientY-t.top)/r)}},xv=ht("mouseClick"),kv=aa();kv.startListening({actionCreator:xv,effect:(e,t)=>{var n=e.payload,r=du(t.getState(),hu(n));(r==null?void 0:r.activeIndex)!=null&&t.dispatch(jA({activeIndex:r.activeIndex,activeDataKey:void 0,activeCoordinate:r.activeCoordinate}))}});var xl=ht("mouseMove"),Tv=aa(),Fa=null;Tv.startListening({actionCreator:xl,effect:(e,t)=>{var n=e.payload;Fa!==null&&cancelAnimationFrame(Fa);var r=hu(n);Fa=requestAnimationFrame(()=>{var a=t.getState(),i=Uc(a,a.tooltip.settings.shared);if(i==="axis"){var s=du(a,r);(s==null?void 0:s.activeIndex)!=null?t.dispatch(p0({activeIndex:s.activeIndex,activeDataKey:void 0,activeCoordinate:s.activeCoordinate})):t.dispatch(m0())}Fa=null})}});function dM(e,t){return t instanceof HTMLElement?"HTMLElement <".concat(t.tagName,' class="').concat(t.className,'">'):t===window?"global.window":e==="children"&&typeof t=="object"&&t!==null?"<<CHILDREN>>":t}var Hm={accessibilityLayer:!0,barCategoryGap:"10%",barGap:4,barSize:void 0,className:void 0,maxBarSize:void 0,stackOffset:"none",syncId:void 0,syncMethod:"index",baseValue:void 0,reverseStackOrder:!1},Iv=Ze({name:"rootProps",initialState:Hm,reducers:{updateOptions:(e,t)=>{var n;e.accessibilityLayer=t.payload.accessibilityLayer,e.barCategoryGap=t.payload.barCategoryGap,e.barGap=(n=t.payload.barGap)!==null&&n!==void 0?n:Hm.barGap,e.barSize=t.payload.barSize,e.maxBarSize=t.payload.maxBarSize,e.stackOffset=t.payload.stackOffset,e.syncId=t.payload.syncId,e.syncMethod=t.payload.syncMethod,e.className=t.payload.className,e.baseValue=t.payload.baseValue,e.reverseStackOrder=t.payload.reverseStackOrder}}}),hM=Iv.reducer,{updateOptions:mM}=Iv.actions,jv=Ze({name:"polarOptions",initialState:null,reducers:{updatePolarOptions:(e,t)=>t.payload}});jv.actions;var pM=jv.reducer,Nv=ht("keyDown"),Av=ht("focus"),mu=aa();mu.startListening({actionCreator:Nv,effect:(e,t)=>{var n=t.getState(),r=n.rootProps.accessibilityLayer!==!1;if(r){var{keyboardInteraction:a}=n.tooltip,i=e.payload;if(!(i!=="ArrowRight"&&i!=="ArrowLeft"&&i!=="Enter")){var s=Kc(a,wr(n),pa(n),va(n)),l=s==null?-1:Number(s);if(!(!Number.isFinite(l)||l<0)){var c=nn(n);if(i==="Enter"){var u=Pi(n,"axis","hover",String(a.index));t.dispatch(hl({active:!a.active,activeIndex:a.index,activeCoordinate:u}));return}var d=gA(n),h=d==="left-to-right"?1:-1,m=i==="ArrowRight"?1:-1,p=l+m*h;if(!(c==null||p>=c.length||p<0)){var g=Pi(n,"axis","hover",String(p));t.dispatch(hl({active:!0,activeIndex:p.toString(),activeCoordinate:g}))}}}}}});mu.startListening({actionCreator:Av,effect:(e,t)=>{var n=t.getState(),r=n.rootProps.accessibilityLayer!==!1;if(r){var{keyboardInteraction:a}=n.tooltip;if(!a.active&&a.index==null){var i="0",s=Pi(n,"axis","hover",String(i));t.dispatch(hl({active:!0,activeIndex:i,activeCoordinate:s}))}}}});var lt=ht("externalEvent"),Sv=aa(),vs=new Map;Sv.startListening({actionCreator:lt,effect:(e,t)=>{var{handler:n,reactEvent:r}=e.payload;if(n!=null){r.persist();var a=r.type,i=vs.get(a);i!==void 0&&cancelAnimationFrame(i);var s=requestAnimationFrame(()=>{try{var l=t.getState(),c={activeCoordinate:uS(l),activeDataKey:N0(l),activeIndex:dr(l),activeLabel:j0(l),activeTooltipIndex:dr(l),isTooltipActive:dS(l)};n(c,r)}finally{vs.delete(a)}});vs.set(a,s)}}});var gM=S([vr],e=>e.tooltipItemPayloads),fM=S([gM,ya,(e,t)=>t,(e,t,n)=>n],(e,t,n,r)=>{var a=e.find(l=>l.settings.graphicalItemId===r);if(a!=null){var{positions:i}=a;if(i!=null){var s=t(i,n);return s}}}),Pv=ht("touchMove"),Ov=aa();Ov.startListening({actionCreator:Pv,effect:(e,t)=>{var n=e.payload;if(!(n.touches==null||n.touches.length===0)){var r=t.getState(),a=Uc(r,r.tooltip.settings.shared);if(a==="axis"){var i=n.touches[0];if(i==null)return;var s=du(r,hu({clientX:i.clientX,clientY:i.clientY,currentTarget:n.currentTarget}));(s==null?void 0:s.activeIndex)!=null&&t.dispatch(p0({activeIndex:s.activeIndex,activeDataKey:void 0,activeCoordinate:s.activeCoordinate}))}else if(a==="item"){var l,c=n.touches[0];if(document.elementFromPoint==null||c==null)return;var u=document.elementFromPoint(c.clientX,c.clientY);if(!u||!u.getAttribute)return;var d=u.getAttribute(m1),h=(l=u.getAttribute(p1))!==null&&l!==void 0?l:void 0,m=br(r).find(v=>v.id===h);if(d==null||m==null||h==null)return;var{dataKey:p}=m,g=fM(r,d,h);t.dispatch(h0({activeDataKey:p,activeIndex:d,activeCoordinate:g,activeGraphicalItemId:h}))}}}});var yM=mg({brush:_C,cartesianAxis:jC,chartData:cP,errorBars:b5,graphicalItems:dC,layout:Kk,legend:iT,options:aP,polarAxis:EO,polarOptions:pM,referenceElements:YC,rootProps:hM,tooltip:NA,zIndex:GS}),vM=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"Chart";return bk({reducer:yM,preloadedState:t,middleware:r=>{var a;return r({serializableCheck:!1,immutableCheck:!["commonjs","es6","production"].includes((a="es6")!==null&&a!==void 0?a:"")}).concat([kv.middleware,Tv.middleware,mu.middleware,Sv.middleware,Ov.middleware])},enhancers:r=>{var a=r;return typeof r=="function"&&(a=r()),a.concat(Sg({type:"raf"}))},devTools:{serialize:{replacer:dM},name:"recharts-".concat(n)}})};function bM(e){var{preloadedState:t,children:n,reduxStoreName:r}=e,a=at(),i=f.useRef(null);if(a)return n;i.current==null&&(i.current=vM(t,r));var s=Hl;return f.createElement(K5,{context:s,store:i.current},n)}function wM(e){var{layout:t,margin:n}=e,r=ge(),a=at();return f.useEffect(()=>{a||(r(qk(t)),r(Yk(n)))},[r,a,t,n]),null}var xM=f.memo(wM,uu);function kM(e){var t=ge();return f.useEffect(()=>{t(mM(e))},[t,e]),null}function zm(e){var{zIndex:t,isPanorama:n}=e,r=f.useRef(null),a=ge();return f.useLayoutEffect(()=>(r.current&&a(YS({zIndex:t,element:r.current,isPanorama:n})),()=>{a(qS({zIndex:t,isPanorama:n}))}),[a,t,n]),f.createElement("g",{tabIndex:-1,ref:r})}function Ym(e){var{children:t,isPanorama:n}=e,r=V($S);if(!r||r.length===0)return t;var a=r.filter(s=>s<0),i=r.filter(s=>s>0);return f.createElement(f.Fragment,null,a.map(s=>f.createElement(zm,{key:s,zIndex:s,isPanorama:n})),t,i.map(s=>f.createElement(zm,{key:s,zIndex:s,isPanorama:n})))}var TM=["children"];function IM(e,t){if(e==null)return{};var n,r,a=jM(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function jM(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Di(){return Di=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Di.apply(null,arguments)}var NM={width:"100%",height:"100%",display:"block"},AM=f.forwardRef((e,t)=>{var n=F1(),r=H1(),a=af();if(!hn(n)||!hn(r))return null;var{children:i,otherAttributes:s,title:l,desc:c}=e,u,d;return s!=null&&(typeof s.tabIndex=="number"?u=s.tabIndex:u=a?0:void 0,typeof s.role=="string"?d=s.role:d=a?"application":void 0),f.createElement(gp,Di({},s,{title:l,desc:c,role:d,tabIndex:u,width:n,height:r,style:NM,ref:t}),i)}),SM=e=>{var{children:t}=e,n=V(lo);if(!n)return null;var{width:r,height:a,y:i,x:s}=n;return f.createElement(gp,{width:r,height:a,x:s,y:i},t)},qm=f.forwardRef((e,t)=>{var{children:n}=e,r=IM(e,TM),a=at();return a?f.createElement(SM,null,f.createElement(Ym,{isPanorama:!0},n)):f.createElement(AM,Di({ref:t},r),f.createElement(Ym,{isPanorama:!1},n))});function PM(){var e=ge(),[t,n]=f.useState(null),r=V(h1);return f.useEffect(()=>{if(t!=null){var a=t.getBoundingClientRect(),i=a.width/t.offsetWidth;de(i)&&i!==r&&e(Uk(i))}},[t,e,r]),n}function Gm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function OM(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Gm(Object(n),!0).forEach(function(r){CM(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Gm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function CM(e,t,n){return(t=EM(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function EM(e){var t=MM(e,"string");return typeof t=="symbol"?t:t+""}function MM(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Dn(){return Dn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Dn.apply(null,arguments)}var $M=()=>(vP(),null);function Bi(e){if(typeof e=="number")return e;if(typeof e=="string"){var t=parseFloat(e);if(!Number.isNaN(t))return t}return 0}var DM=f.forwardRef((e,t)=>{var n,r,a=f.useRef(null),[i,s]=f.useState({containerWidth:Bi((n=e.style)===null||n===void 0?void 0:n.width),containerHeight:Bi((r=e.style)===null||r===void 0?void 0:r.height)}),l=f.useCallback((u,d)=>{s(h=>{var m=Math.round(u),p=Math.round(d);return h.containerWidth===m&&h.containerHeight===p?h:{containerWidth:m,containerHeight:p}})},[]),c=f.useCallback(u=>{if(typeof t=="function"&&t(u),u!=null&&typeof ResizeObserver<"u"){var{width:d,height:h}=u.getBoundingClientRect();l(d,h);var m=g=>{var{width:v,height:y}=g[0].contentRect;l(v,y)},p=new ResizeObserver(m);p.observe(u),a.current=p}},[t,l]);return f.useEffect(()=>()=>{var u=a.current;u!=null&&u.disconnect()},[l]),f.createElement(f.Fragment,null,f.createElement(uo,{width:i.containerWidth,height:i.containerHeight}),f.createElement("div",Dn({ref:c},e)))}),BM=f.forwardRef((e,t)=>{var{width:n,height:r}=e,[a,i]=f.useState({containerWidth:Bi(n),containerHeight:Bi(r)}),s=f.useCallback((c,u)=>{i(d=>{var h=Math.round(c),m=Math.round(u);return d.containerWidth===h&&d.containerHeight===m?d:{containerWidth:h,containerHeight:m}})},[]),l=f.useCallback(c=>{if(typeof t=="function"&&t(c),c!=null){var{width:u,height:d}=c.getBoundingClientRect();s(u,d)}},[t,s]);return f.createElement(f.Fragment,null,f.createElement(uo,{width:a.containerWidth,height:a.containerHeight}),f.createElement("div",Dn({ref:l},e)))}),_M=f.forwardRef((e,t)=>{var{width:n,height:r}=e;return f.createElement(f.Fragment,null,f.createElement(uo,{width:n,height:r}),f.createElement("div",Dn({ref:t},e)))}),RM=f.forwardRef((e,t)=>{var{width:n,height:r}=e;return zt(n)||zt(r)?f.createElement(BM,Dn({},e,{ref:t})):f.createElement(_M,Dn({},e,{ref:t}))});function LM(e){return e===!0?DM:RM}var WM=f.forwardRef((e,t)=>{var{children:n,className:r,height:a,onClick:i,onContextMenu:s,onDoubleClick:l,onMouseDown:c,onMouseEnter:u,onMouseLeave:d,onMouseMove:h,onMouseUp:m,onTouchEnd:p,onTouchMove:g,onTouchStart:v,style:y,width:b,responsive:x,dispatchTouchEvents:k=!0}=e,I=f.useRef(null),w=ge(),[T,j]=f.useState(null),[E,C]=f.useState(null),$=PM(),A=ec(),D=(A==null?void 0:A.width)>0?A.width:b,_=(A==null?void 0:A.height)>0?A.height:a,R=f.useCallback(N=>{$(N),typeof t=="function"&&t(N),j(N),C(N),N!=null&&(I.current=N)},[$,t,j,C]),z=f.useCallback(N=>{w(xv(N)),w(lt({handler:i,reactEvent:N}))},[w,i]),K=f.useCallback(N=>{w(xl(N)),w(lt({handler:u,reactEvent:N}))},[w,u]),Y=f.useCallback(N=>{w(m0()),w(lt({handler:d,reactEvent:N}))},[w,d]),Z=f.useCallback(N=>{w(xl(N)),w(lt({handler:h,reactEvent:N}))},[w,h]),q=f.useCallback(()=>{w(Av())},[w]),te=f.useCallback(N=>{w(Nv(N.key))},[w]),he=f.useCallback(N=>{w(lt({handler:s,reactEvent:N}))},[w,s]),Ie=f.useCallback(N=>{w(lt({handler:l,reactEvent:N}))},[w,l]),ze=f.useCallback(N=>{w(lt({handler:c,reactEvent:N}))},[w,c]),fe=f.useCallback(N=>{w(lt({handler:m,reactEvent:N}))},[w,m]),P=f.useCallback(N=>{w(lt({handler:v,reactEvent:N}))},[w,v]),W=f.useCallback(N=>{k&&w(Pv(N)),w(lt({handler:g,reactEvent:N}))},[w,k,g]),B=f.useCallback(N=>{w(lt({handler:p,reactEvent:N}))},[w,p]),F=LM(x);return f.createElement(M0.Provider,{value:T},f.createElement(uw.Provider,{value:E},f.createElement(F,{width:D??(y==null?void 0:y.width),height:_??(y==null?void 0:y.height),className:le("recharts-wrapper",r),style:OM({position:"relative",cursor:"default",width:D,height:_},y),onClick:z,onContextMenu:he,onDoubleClick:Ie,onFocus:q,onKeyDown:te,onMouseDown:ze,onMouseEnter:K,onMouseLeave:Y,onMouseMove:Z,onMouseUp:fe,onTouchEnd:B,onTouchMove:W,onTouchStart:P,ref:R},f.createElement($M,null),n)))}),FM=["width","height","responsive","children","className","style","compact","title","desc"];function HM(e,t){if(e==null)return{};var n,r,a=zM(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function zM(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}var YM=f.forwardRef((e,t)=>{var{width:n,height:r,responsive:a,children:i,className:s,style:l,compact:c,title:u,desc:d}=e,h=HM(e,FM),m=dn(h);return c?f.createElement(f.Fragment,null,f.createElement(uo,{width:n,height:r}),f.createElement(qm,{otherAttributes:m,title:u,desc:d},i)):f.createElement(WM,{className:s,style:l,width:n,height:r,responsive:a??!1,onClick:e.onClick,onMouseLeave:e.onMouseLeave,onMouseEnter:e.onMouseEnter,onMouseMove:e.onMouseMove,onMouseDown:e.onMouseDown,onMouseUp:e.onMouseUp,onContextMenu:e.onContextMenu,onDoubleClick:e.onDoubleClick,onTouchStart:e.onTouchStart,onTouchMove:e.onTouchMove,onTouchEnd:e.onTouchEnd},f.createElement(qm,{otherAttributes:m,title:u,desc:d,ref:t},f.createElement(GC,null,i)))});function kl(){return kl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},kl.apply(null,arguments)}var qM={top:5,right:5,bottom:5,left:5},GM={accessibilityLayer:!0,barCategoryGap:"10%",barGap:4,layout:"horizontal",margin:qM,responsive:!1,reverseStackOrder:!1,stackOffset:"none",syncMethod:"index"},UM=f.forwardRef(function(t,n){var r,a=pt(t.categoricalChartProps,GM),{chartName:i,defaultTooltipEventType:s,validateTooltipEventTypes:l,tooltipPayloadSearcher:c,categoricalChartProps:u}=t,d={chartName:i,defaultTooltipEventType:s,validateTooltipEventTypes:l,tooltipPayloadSearcher:c,eventEmitter:void 0};return f.createElement(bM,{preloadedState:{options:d},reduxStoreName:(r=u.id)!==null&&r!==void 0?r:i},f.createElement(BC,{chartData:u.data}),f.createElement(xM,{layout:a.layout,margin:a.margin}),f.createElement(kM,{baseValue:a.baseValue,accessibilityLayer:a.accessibilityLayer,barCategoryGap:a.barCategoryGap,maxBarSize:a.maxBarSize,stackOffset:a.stackOffset,barGap:a.barGap,barSize:a.barSize,syncId:a.syncId,syncMethod:a.syncMethod,className:a.className,reverseStackOrder:a.reverseStackOrder}),f.createElement(YM,kl({},a,{ref:n})))}),KM=["axis","item"],VM=f.forwardRef((e,t)=>f.createElement(UM,{chartName:"BarChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:KM,tooltipPayloadSearcher:nP,categoricalChartProps:e,ref:t}));const JM=()=>{const[e,t]=f.useState([]),[n,r]=f.useState(!0),[a,i]=f.useState(null),[s,l]=f.useState(new Date),[c,u]=f.useState(!1),[d,h]=f.useState(!1),[m,p]=f.useState(1),[g,v]=f.useState(null),y="Transactions Raw Data",b="A:T",x="Calculations",k="H14",I=f.useCallback(P=>{if(!P)return"$0.00";if(P.includes("$"))return P;const W=P.replace(/[,$]/g,""),B=parseFloat(W);return isNaN(B)?P:B<1e-5?`${B.toFixed(8)}`:B<.001?`${B.toFixed(5)}`:B<1?`${B.toFixed(4)}`:B<100?`${B.toFixed(2)}`:`${B.toLocaleString()}`},[]),w=f.useCallback(P=>{if(!P)return"0";const W=P.replace(/[,$]/g,""),B=parseFloat(W);return isNaN(B)?P:B>=1e6?`${(B/1e6).toFixed(1)}M`:B>=1e3?`${(B/1e3).toFixed(1)}K`:B<1?B.toFixed(3):B.toLocaleString()},[]),T=f.useCallback(P=>{if(!P)return"Unknown";if(P.toLowerCase().includes("today"))return P;try{const W=new Date(P);if(!isNaN(W.getTime())){const B=new Date;return W.toDateString()===B.toDateString()?`Today ${W.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}`:W.toLocaleDateString()+" "+W.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}}catch{}return P},[]),j=f.useCallback(P=>P&&P.toLowerCase().includes("profit goal reached")?"profit_goal_reached":"completed",[]),E=f.useCallback(P=>!P||P.length===0?[]:P.map((W,B)=>{var pu;if(B===0&&((pu=W[0])==null?void 0:pu.toLowerCase())==="coin")return null;const[F,N,L,G,O,Q,X]=W,je=W[19];if(!F||!Q)return null;const Re=parseFloat(Q.toString().replace(/[$,]/g,""))||0;let Nt=null;if(je){const Ev=je.toString().replace(/[%]/g,"").trim(),gu=parseFloat(Ev);isNaN(gu)||(Nt=gu)}return{id:`tx_${Date.now()}_${B}`,coin:(F==null?void 0:F.toString().trim())||"",action:(N==null?void 0:N.toString().trim())||"CLOSE",price:I((L==null?void 0:L.toString())||""),quantity:w((G==null?void 0:G.toString())||""),profit:Re,percentGain:Nt,timestamp:T((X==null?void 0:X.toString())||""),status:j((O==null?void 0:O.toString())||"")}}).filter(W=>W!==null&&W.coin.length>0&&W.profit!==void 0),[I,w,T,j]),C=f.useMemo(()=>{const P={};return e.forEach(W=>{const B=W.timestamp;let F="";if(B.toLowerCase().includes("today")){const N=new Date;F=`${N.toLocaleString("default",{month:"long"})} ${N.getFullYear()}`}else try{const N=new Date(B);if(!isNaN(N.getTime()))F=`${N.toLocaleString("default",{month:"long"})} ${N.getFullYear()}`;else{const L=B.match(/(\d+)\/(\d+)/);if(L){const G=parseInt(L[1]),O=new Date().getFullYear();F=`${new Date(O,G-1).toLocaleString("default",{month:"long"})} ${O}`}else F="Unknown"}}catch{F="Unknown"}P[F]||(P[F]=[]),P[F].push(W)}),P},[e]),$=f.useMemo(()=>Object.keys(C).filter(W=>W!=="Unknown").sort((W,B)=>{const F=new Date(W);return new Date(B).getTime()-F.getTime()}),[C]),A=f.useMemo(()=>{const P=$[m-1];return P?C[P]:[]},[C,$,m]),D=f.useMemo(()=>{const P=A.filter(L=>L.action==="CLOSE"),W=A.filter(L=>L.action==="OPEN"),B=P.reduce((L,G)=>L+G.profit,0),F=P.filter(L=>L.status==="profit_goal_reached").length,N=P.length>0?(P.length/P.length*100).toFixed(1):"100.0";return{totalProfit:`${B.toFixed(2)}`,closedTrades:P.length,openTrades:W.length,totalTrades:A.length,successRate:`${N}%`,profitGoals:F}},[A]),_=$.length,R=$[m-1]||"Unknown",z=P=>{P>=1&&P<=_&&p(P)},K=()=>{const W=[["Coin","Action","Price","Quantity","Profit","% Gain","Status","Timestamp"].join(",")];A.forEach(O=>{const Q=[O.coin,O.action,O.price.replace(/,/g,""),O.quantity.replace(/,/g,""),O.action==="CLOSE"?O.profit.toFixed(2):"0.00",O.action==="CLOSE"&&O.percentGain!==null?O.percentGain.toFixed(2)+"%":"",O.status==="profit_goal_reached"?"Profit Goal Reached":"Completed",`"${O.timestamp}"`];W.push(Q.join(","))});const B=W.join(`
`),F=new Blob([B],{type:"text/csv;charset=utf-8;"}),N=document.createElement("a"),L=URL.createObjectURL(F),G=`${R.replace(" ","_")}_Transactions.csv`;N.setAttribute("href",L),N.setAttribute("download",G),N.style.visibility="hidden",document.body.appendChild(N),N.click(),document.body.removeChild(N)},Y=f.useCallback(()=>{const P=["","","","","","","","","","","",""],W=[["Coin","Action","Price","Quantity","Status","Profit","Timestamp",...P,"% Gain"],["SUI","CLOSE","$3.60","50.9","Profit Goal Reached","$7.34","Today 2:48 AM",...P,"4.01%"],["BONK","CLOSE","$0.00002","10.2M","Profit Goal Reached","$9.03","9/8 12:26 PM",...P,"4.43%"],["DOGE","CLOSE","$0.24","710","Completed","$5.16","9/8 9:19 AM",...P,"3.03%"],["BTC","CLOSE","$43,250.00","0.025","Profit Goal Reached","$12.45","9/7 11:45 PM",...P,"1.15%"],["ETH","CLOSE","$2,650.75","1.8","Completed","$8.92","9/7 6:33 PM",...P,"0.19%"],["ADA","OPEN","$0.45","2,450","Active Position","$0.00","9/7 2:15 PM",...P,""],["SOL","OPEN","$145.32","12.5","Active Position","$0.00","9/7 8:22 AM",...P,""],["MATIC","OPEN","$0.89","1,200","Active Position","$0.00","9/6 11:58 PM",...P,""],["LINK","CLOSE","$11.45","85.3","Completed","$9.87","9/6 7:41 PM",...P,"1.01%"],["DOT","CLOSE","$5.67","180.5","Completed","$7.12","9/6 3:29 PM",...P,"0.70%"]];return E(W)},[E]),Z=f.useCallback(async()=>{const P="1Q8I0kU3TinicEOZCgBjisRbktIOryaKnJ2GaBncxako",W="AIzaSyDNQznjzn8BijyHJWWOesvggVc31FFK-LA";try{const B=`https://sheets.googleapis.com/v4/spreadsheets/${P}/values/${x}!${k}?key=${W}`,F=await fetch(B);if(!F.ok){console.error("Failed to fetch Profits Protected"),v(null);return}const N=await F.json();if(N.values&&N.values[0]&&N.values[0][0]){const L=parseFloat(String(N.values[0][0]).replace(/[$,]/g,""));isNaN(L)||v(L)}}catch(B){console.error("Error fetching Profits Protected:",B),v(null)}},[x,k]),q=f.useCallback(async(P=!0)=>{try{P&&r(!0),i(null),h(!1);const W="1Q8I0kU3TinicEOZCgBjisRbktIOryaKnJ2GaBncxako",B="AIzaSyDNQznjzn8BijyHJWWOesvggVc31FFK-LA";if(W&&B){const N=`${W}_${y}_${b}`;let L=xn.get(N);if(L){t(L),l(new Date),h(!0),r(!1);return}const G=`https://sheets.googleapis.com/v4/spreadsheets/${W}/values/${y}!${b}?key=${B}`;try{const O=await fetch(G);if(!O.ok)throw new Error(`Google Sheets API error: ${O.status}`);const Q=await O.json();if(Q.values&&Q.values.length>0){const X=E(Q.values);xn.set(N,X),t(X),l(new Date),h(!1);return}else i("No data found. Using sample data.")}catch(O){console.error("API error:",O),i("Failed to load data.")}}await new Promise(N=>setTimeout(N,1e3));const F=Y();t(F),l(new Date),h(!1)}catch(W){console.error("Error:",W),i("Error loading data."),t(Y()),h(!1)}finally{r(!1)}},[y,b,E,Y]);f.useEffect(()=>{q(),Z()},[q,Z]);const te=P=>({BTC:"text-orange-400",ETH:"text-blue-400",SUI:"text-purple-400",BONK:"text-yellow-400",DOGE:"text-yellow-300",SOL:"text-purple-500",MATIC:"text-indigo-400",ADA:"text-blue-500",LINK:"text-blue-600",DOT:"text-pink-400",AVAX:"text-red-400",UNI:"text-pink-500",ATOM:"text-purple-500",FTM:"text-blue-600",ALGO:"text-gray-400",XRP:"text-gray-300",LTC:"text-gray-500",BCH:"text-green-500",VET:"text-blue-700",THETA:"text-purple-600",HBAR:"text-gray-600",ICP:"text-orange-300",NEAR:"text-green-300",FLOW:"text-blue-800",MANA:"text-red-300"})[P]||"text-gray-400",he=P=>P>=10?"text-green-300":P>=7?"text-green-400":"text-green-500",Ie=P=>P==="CLOSE"?"bg-green-500/20 text-green-300":"bg-blue-500/20 text-blue-300",ze=()=>a?{text:"SAMPLE",color:"text-gray-300"}:d?{text:"CACHED",color:"text-blue-300"}:{text:"LIVE",color:"text-green-300"};if(n&&e.length===0)return o.jsx("div",{className:"bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/10 p-6 mb-8",children:o.jsxs("div",{className:"flex items-center justify-center py-12",children:[o.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-green-400"}),o.jsx("span",{className:"ml-3 text-gray-300",children:"Loading..."})]})});const fe=ze();return o.jsxs("div",{className:"bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/10 p-4 md:p-6 mb-8 overflow-hidden",children:[o.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4",children:[o.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[o.jsx("div",{className:"w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 p-2 md:p-3 shadow-lg shadow-green-500/40 flex-shrink-0",children:o.jsx(Cb,{className:"w-full h-full text-white"})}),o.jsxs("div",{className:"min-w-0",children:[o.jsx("h3",{className:"text-lg md:text-xl lg:text-2xl font-bold text-white truncate",children:"TRADING SCOREBOARD"}),o.jsx("p",{className:"text-xs md:text-sm text-gray-400 truncate",children:R||new Date().toLocaleString("default",{month:"long",year:"numeric"})})]})]}),o.jsxs("div",{className:"flex items-center gap-3 flex-shrink-0",children:[o.jsx("button",{onClick:()=>u(!c),className:"md:hidden flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full px-3 py-2 border border-white/20 transition-all",children:c?o.jsxs(o.Fragment,{children:[o.jsx(_b,{className:"w-4 h-4 text-gray-300"}),o.jsx("span",{className:"text-sm text-gray-300",children:"Hide"})]}):o.jsxs(o.Fragment,{children:[o.jsx(lp,{className:"w-4 h-4 text-gray-300"}),o.jsx("span",{className:"text-sm text-gray-300",children:"Show"})]})}),o.jsxs("div",{className:"flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-full px-4 py-2 border border-green-400/30",children:[o.jsx("div",{className:`w-2.5 h-2.5 rounded-full ${d?"bg-blue-400":"bg-green-400"} animate-pulse`}),o.jsx("span",{className:`text-sm font-semibold ${fe.color} whitespace-nowrap`,children:fe.text})]}),o.jsxs("button",{onClick:K,className:"flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 backdrop-blur-sm rounded-full px-4 py-2 border border-blue-400/30 hover:border-blue-400/50 transition-all shadow-lg",title:`Download ${R} CSV`,children:[o.jsx(Bb,{className:"w-4 h-4 text-blue-300"}),o.jsx("span",{className:"hidden sm:inline text-sm text-blue-300 font-semibold whitespace-nowrap",children:"Download CSV"}),o.jsx("span",{className:"sm:hidden text-sm text-blue-300 font-semibold",children:"CSV"})]})]})]}),a&&o.jsx("div",{className:"bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3 mb-4",children:o.jsx("p",{className:"text-yellow-400 text-sm break-words",children:a})}),_>1&&o.jsxs("div",{className:"flex items-center justify-center gap-2 mb-6 px-2",children:[o.jsx("button",{onClick:()=>z(m-1),disabled:m===1,className:"p-2 rounded-lg bg-white/8 hover:bg-white/12 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex-shrink-0",children:o.jsx(Iu,{className:"w-5 h-5"})}),o.jsx("div",{className:"flex gap-1 items-center overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent max-w-full px-1",children:Array.from({length:Math.min(8,_)},(P,W)=>{let B;_<=8||m<=4?B=W+1:m>=_-3?B=_-7+W:B=m-3+W;const F=$[B-1];if(!F)return null;const[N,L]=F.split(" "),G=N.substring(0,3),O=L?L.substring(2):"",Q=`${G} ${O}`;return o.jsx("button",{onClick:()=>z(B),className:`px-3 py-1 rounded-lg text-xs font-medium transition-all whitespace-nowrap flex-shrink-0 ${m===B?"bg-blue-500 text-white shadow-lg":"bg-white/8 hover:bg-white/12 text-gray-300"}`,title:F,children:Q},B)})}),o.jsx("button",{onClick:()=>z(m+1),disabled:m===_,className:"p-2 rounded-lg bg-white/8 hover:bg-white/12 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex-shrink-0",children:o.jsx(ju,{className:"w-5 h-5"})})]}),o.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-6",children:[o.jsxs("div",{className:"group relative bg-white/8 backdrop-blur-sm rounded-lg p-2 border border-white/20 hover:border-white/30 transition-all text-center",children:[o.jsx("div",{className:"text-sm lg:text-base font-bold text-green-300 truncate",children:D.totalProfit}),o.jsx("div",{className:"text-[10px] lg:text-xs text-gray-400",children:"Total Profit"})]}),o.jsxs("div",{className:"group relative bg-white/8 backdrop-blur-sm rounded-lg p-2 border border-white/20 hover:border-white/30 transition-all text-center",children:[o.jsx("div",{className:"text-sm lg:text-base font-bold text-green-400",children:D.closedTrades}),o.jsx("div",{className:"text-[10px] lg:text-xs text-gray-400",children:"Closed"})]}),o.jsxs("div",{className:"group relative bg-white/8 backdrop-blur-sm rounded-lg p-2 border border-white/20 hover:border-white/30 transition-all text-center",children:[o.jsx("div",{className:"text-sm lg:text-base font-bold text-blue-300",children:D.openTrades}),o.jsx("div",{className:"text-[10px] lg:text-xs text-gray-400",children:"Open"})]}),o.jsxs("div",{className:"group relative bg-white/8 backdrop-blur-sm rounded-lg p-2 border border-white/20 hover:border-white/30 transition-all text-center",children:[o.jsx("div",{className:"text-sm lg:text-base font-bold text-purple-300",children:D.totalTrades}),o.jsx("div",{className:"text-[10px] lg:text-xs text-gray-400",children:"Total"})]}),o.jsxs("div",{className:"group relative bg-white/8 backdrop-blur-sm rounded-lg p-2 border border-white/20 hover:border-white/30 transition-all text-center",children:[o.jsx("div",{className:"text-sm lg:text-base font-bold text-orange-300",children:D.successRate}),o.jsx("div",{className:"text-[10px] lg:text-xs text-gray-400",children:"Success"})]}),o.jsxs("a",{href:"/blog/the-50-50-strategy",className:"group relative bg-white/8 backdrop-blur-sm rounded-lg p-2 border border-white/20 hover:border-emerald-400/50 transition-all text-center cursor-pointer",children:[o.jsxs("div",{className:"text-sm lg:text-base font-bold text-emerald-300 truncate flex items-center justify-center gap-1",children:[o.jsx(un,{className:"w-3 h-3 text-emerald-400 flex-shrink-0"}),o.jsxs("span",{children:["50% → ",g!==null?`$${g.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:0})}`:"..."]})]}),o.jsx("div",{className:"text-[10px] lg:text-xs text-emerald-400/80",children:"Profits Saved"}),o.jsxs("div",{className:"absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 border border-white/20 rounded-lg text-xs text-gray-200 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10",children:["Half of all profits are automatically saved. Learn more →",o.jsx("div",{className:"absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"})]})]})]}),o.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-1 sm:gap-2 mb-4 px-2",children:[o.jsx(Qr,{className:"w-3 h-3 md:w-4 md:h-4 text-gray-400 flex-shrink-0"}),o.jsxs("span",{className:"text-xs text-gray-400 text-center break-words",children:["Last updated: ",s.toLocaleTimeString(),d&&o.jsx("span",{className:"text-blue-400 ml-1 sm:ml-2",children:"• Cached"}),!d&&fe.text==="LIVE"&&o.jsx("span",{className:"text-green-400 ml-1 sm:ml-2",children:"• Fresh"})]})]}),o.jsxs("div",{className:`bg-black/20 rounded-xl border border-white/5 overflow-hidden ${c?"":"hidden md:block"}`,children:[o.jsx("div",{className:"block md:hidden",children:o.jsx("div",{className:"space-y-2 p-2 max-h-96 overflow-y-auto overflow-x-hidden",children:A.length===0?o.jsxs("div",{className:"p-8 text-center text-gray-400",children:["No transactions for ",R]}):A.map(P=>o.jsxs("div",{className:"bg-white/5 rounded-lg p-3 border-t border-r border-b border-white/10 border-l-4 max-w-full",style:P.action==="OPEN"?{borderLeftColor:"#60a5fa"}:{borderLeftColor:"#4ade80"},children:[o.jsxs("div",{className:"flex items-center justify-between mb-2 gap-2 min-w-0",children:[o.jsxs("div",{className:"flex items-center gap-2 min-w-0 flex-1",children:[o.jsx("span",{className:`font-bold text-sm ${te(P.coin)} flex-shrink-0`,children:P.coin}),o.jsx("span",{className:`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${Ie(P.action)} flex-shrink-0`,children:P.action})]}),o.jsx("div",{className:"text-xs text-gray-400 flex-shrink-0 truncate max-w-[120px]",children:P.timestamp})]}),o.jsxs("div",{className:"flex items-center justify-between mb-2 gap-2",children:[o.jsxs("div",{className:"text-xs text-gray-300 truncate flex-1 min-w-0",children:[o.jsx("span",{className:"text-gray-500",children:"Price:"})," ",o.jsx("span",{className:"font-mono",children:P.price})]}),o.jsxs("div",{className:"text-xs text-gray-300 truncate flex-1 min-w-0 text-right",children:[o.jsx("span",{className:"text-gray-500",children:"Qty:"})," ",o.jsx("span",{className:"font-mono",children:P.quantity})]})]}),o.jsxs("div",{className:"flex items-center justify-between gap-2",children:[o.jsx("div",{className:"flex items-center gap-3 flex-shrink-0",children:P.action==="CLOSE"?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:`font-bold text-sm font-mono ${he(P.profit)}`,children:["+$",P.profit.toFixed(2)]}),P.percentGain!==null&&o.jsxs("div",{className:"font-bold text-sm font-mono text-green-400",children:["(",P.percentGain.toFixed(2),"%)"]})]}):o.jsx("div",{className:"text-gray-500 text-sm",children:"Active"})}),o.jsxs("div",{className:"flex items-center gap-1 flex-shrink-0",children:[P.status==="profit_goal_reached"&&o.jsxs(o.Fragment,{children:[o.jsx(Dr,{className:"w-3 h-3 text-yellow-400"}),o.jsx("span",{className:"text-xs text-yellow-400",children:"Goal"})]}),P.action==="OPEN"&&o.jsxs(o.Fragment,{children:[o.jsx(Ue,{className:"w-3 h-3 text-blue-400"}),o.jsx("span",{className:"text-xs text-blue-400",children:"Active"})]})]})]})]},P.id))})}),o.jsxs("div",{className:"hidden md:block",children:[o.jsx("div",{className:"bg-white/5 px-4 py-3 border-b border-white/5",children:o.jsxs("div",{className:"grid grid-cols-12 gap-2 text-xs font-semibold text-gray-300 uppercase tracking-wider",children:[o.jsx("div",{className:"col-span-1",children:"Coin"}),o.jsx("div",{className:"col-span-2",children:"Action"}),o.jsx("div",{className:"col-span-2",children:"Price"}),o.jsx("div",{className:"col-span-2",children:"Quantity"}),o.jsx("div",{className:"col-span-2",children:"Profit"}),o.jsx("div",{className:"col-span-1",children:"% Gain"}),o.jsx("div",{className:"col-span-2",children:"Time"})]})}),o.jsx("div",{className:"max-h-96 overflow-y-auto",children:A.length===0?o.jsxs("div",{className:"p-8 text-center text-gray-400",children:["No transactions for ",R]}):A.map((P,W)=>o.jsx("div",{className:`px-4 py-3 border-b border-white/5 hover:bg-white/5 ${W%2===0?"bg-white/2":""} border-l-4`,style:P.action==="OPEN"?{borderLeftColor:"#60a5fa"}:{borderLeftColor:"#4ade80"},children:o.jsxs("div",{className:"grid grid-cols-12 gap-2 items-center text-sm",children:[o.jsx("div",{className:"col-span-1",children:o.jsx("div",{className:`font-bold ${te(P.coin)}`,children:P.coin})}),o.jsx("div",{className:"col-span-2",children:o.jsx("span",{className:`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${Ie(P.action)}`,children:P.action})}),o.jsx("div",{className:"col-span-2",children:o.jsx("div",{className:"text-gray-200 font-mono text-xs",children:P.price})}),o.jsx("div",{className:"col-span-2",children:o.jsx("div",{className:"text-gray-300 font-mono text-xs",children:P.quantity})}),o.jsxs("div",{className:"col-span-2",children:[P.action==="CLOSE"?o.jsxs("div",{className:`font-bold font-mono ${he(P.profit)}`,children:["+$",P.profit.toFixed(2)]}):o.jsx("div",{className:"text-gray-500 font-mono text-xs",children:"-"}),P.status==="profit_goal_reached"&&o.jsxs("div",{className:"text-xs text-yellow-400 flex items-center gap-1 mt-1",children:[o.jsx(Dr,{className:"w-3 h-3"}),o.jsx("span",{children:"Goal"})]}),P.action==="OPEN"&&o.jsxs("div",{className:"text-xs text-blue-400 flex items-center gap-1 mt-1",children:[o.jsx(Ue,{className:"w-3 h-3"}),o.jsx("span",{children:"Active"})]})]}),o.jsx("div",{className:"col-span-1",children:P.action==="CLOSE"&&P.percentGain!==null?o.jsxs("div",{className:"font-bold font-mono text-green-400 text-xs",children:[P.percentGain.toFixed(2),"%"]}):o.jsx("div",{className:"text-gray-500 font-mono text-xs",children:"-"})}),o.jsx("div",{className:"col-span-2",children:o.jsx("div",{className:"text-gray-400 text-xs",children:P.timestamp})})]})},P.id))})]})]}),_>1&&o.jsxs("div",{className:"flex items-center justify-center gap-2 mt-6 px-2",children:[o.jsx("button",{onClick:()=>z(m-1),disabled:m===1,className:"p-2 rounded-lg bg-white/8 hover:bg-white/12 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex-shrink-0",children:o.jsx(Iu,{className:"w-5 h-5"})}),o.jsx("div",{className:"flex gap-1 items-center overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent max-w-full px-1",children:Array.from({length:Math.min(8,_)},(P,W)=>{let B;_<=8||m<=4?B=W+1:m>=_-3?B=_-7+W:B=m-3+W;const F=$[B-1];if(!F)return null;const[N,L]=F.split(" "),G=N.substring(0,3),O=L?L.substring(2):"",Q=`${G} ${O}`;return o.jsx("button",{onClick:()=>z(B),className:`px-3 py-1 rounded-lg text-xs font-medium transition-all whitespace-nowrap flex-shrink-0 ${m===B?"bg-blue-500 text-white shadow-lg":"bg-white/8 hover:bg-white/12 text-gray-300"}`,title:F,children:Q},B)})}),o.jsx("button",{onClick:()=>z(m+1),disabled:m===_,className:"p-2 rounded-lg bg-white/8 hover:bg-white/12 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex-shrink-0",children:o.jsx(ju,{className:"w-5 h-5"})})]}),o.jsxs("div",{className:"mt-4 text-center px-2",children:[o.jsxs("p",{className:"text-xs text-gray-500 break-words",children:["✅ Smart Cache enabled • Live data with intelligent caching •"," ",o.jsx("span",{className:"text-green-400 font-medium",children:"Shows both Open & Closed positions"})]}),!c&&o.jsx("p",{className:"text-xs text-gray-500 mt-1 md:hidden",children:'Tap "Show" to view history'})]})]})},ZM=({tradingStats:e,isLoading:t=!1,error:n=null,refreshStats:r=()=>console.log("Refresh not implemented"),cacheInfo:a={isFresh:!1,isRateLimited:!1,timeUntilNextRefresh:0}})=>{var x,k,I,w,T,j,E;const i=Fi(),s=C=>{if(C<=0)return"Available now";const $=Math.floor(C/(1e3*60*60)),A=Math.floor(C%(1e3*60*60)/(1e3*60));return $>0?`${$}h ${A}m`:`${A}m`};if(t)return o.jsx("section",{className:"py-16 px-4 relative overflow-hidden",children:o.jsx("div",{className:"relative max-w-6xl mx-auto text-center",children:o.jsxs("div",{className:"flex items-center justify-center py-12",children:[o.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-green-400 mr-3"}),o.jsx("span",{className:"text-gray-300 text-lg",children:"Loading live trading data..."})]})})});const l=n&&n.trim()!=="",c=e&&typeof e=="object"&&e.totalProfit!==void 0;if(l||!c)return o.jsxs("section",{className:"py-16 px-4 relative overflow-hidden",children:[o.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-red-900/20 to-orange-900/20"}),o.jsxs("div",{className:"relative max-w-6xl mx-auto text-center",children:[o.jsxs("div",{className:"bg-red-500/10 border border-red-500/20 rounded-2xl p-8 mb-8",children:[o.jsx(Eb,{className:"w-12 h-12 text-red-400 mx-auto mb-4"}),o.jsx("h3",{className:"text-xl font-bold text-white mb-4",children:"Unable to Load Live Trading Data"}),o.jsx("p",{className:"text-red-300 mb-6",children:l?n:"Trading data is not available. This could be due to API configuration issues or data loading problems."}),o.jsxs("button",{onClick:r,className:"inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300",children:[o.jsx(qb,{className:"w-4 h-4"}),"Retry Connection"]})]}),o.jsxs("div",{className:"bg-gray-900/50 rounded-lg p-4 text-left max-w-2xl mx-auto",children:[o.jsx("h4",{className:"text-white font-semibold mb-2",children:"Debug Information:"}),o.jsxs("div",{className:"text-gray-300 text-sm space-y-1",children:[o.jsxs("p",{children:["• Sheet ID:"," ","✅ Configured"]}),o.jsxs("p",{children:["• API Key:"," ","✅ Configured"]}),o.jsx("p",{children:'• Expected Tab: "Calculations"'}),o.jsx("p",{children:"• Expected Range: A:G"}),o.jsxs("p",{children:["• Error: ",n||"No specific error message"]}),o.jsxs("p",{children:["• Cache Status: ",a!=null&&a.isFresh?"Fresh":"Stale"]}),o.jsxs("p",{children:["• Rate Limited: ",a!=null&&a.isRateLimited?"Yes":"No"]}),o.jsxs("p",{children:["• Has Trading Stats: ",c?"Yes":"No"]}),o.jsxs("p",{children:["• Trading Stats Type: ",typeof e]}),o.jsxs("p",{children:["• Trading Stats Value:"," ",e===void 0?"undefined":e===null?"null":"has value"]})]})]})]})]});const u=e,d=((x=u.dailyAvg)==null?void 0:x.toFixed(2))||"0.00",h=[],p=[...u.monthlyData||[],...h],g=p.find(C=>C.profit===u.bestMonthProfit)||p[0],v=C=>({Jan:"January",Feb:"February",Mar:"March",Apr:"April",May:"May",Jun:"June",Jul:"July",Aug:"August",Sep:"September",Oct:"October",Nov:"November",Dec:"December"})[C]||C,y=()=>{Ri("start_trading_save_1000","trading_results_section"),Li("https://gobabytrade.com/432706BE","Start Trading Save $1000 Trading Results")},b=C=>{const $=Number(C);return isNaN($)?"0.00":$.toFixed(2)};return o.jsx("section",{id:"trading-results",className:"py-16 px-4 relative overflow-hidden",children:o.jsxs("div",{className:"relative max-w-6xl mx-auto",children:[o.jsxs("div",{className:"text-center mb-12",children:[o.jsxs("div",{className:"inline-flex items-center gap-2 bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 mb-6",children:[o.jsx(ap,{className:"w-4 h-4 text-green-400"}),o.jsx("span",{className:"text-green-300 font-medium",children:u.isLiveData?"LIVE DATA":"REAL RESULTS"}),u.isLiveData&&o.jsx("div",{className:"w-2 h-2 bg-green-400 rounded-full animate-pulse"})]}),o.jsx("h2",{className:"text-3xl md:text-5xl font-bold text-white mb-4",children:"My Trading Results"}),o.jsxs("div",{className:"mb-6",children:[o.jsx("p",{className:"text-xl text-purple-200 font-medium mb-4",children:"Don't just take my word for it - here are my actual trading results:"}),o.jsx("div",{children:o.jsx(Ue,{className:"w-8 h-8 text-green-300 mx-auto animate-bounce"})})]}),o.jsxs("p",{className:"text-xl text-gray-300 max-w-3xl mx-auto",children:["These are my actual profits from using my robotic trader.",o.jsxs("span",{className:"text-green-400 font-semibold",children:[" ","Started January 8, 2025"]})," ","-"," ",u.isLiveData?"Live Updates!":"Stats Updated Monthly!"]}),u.isLiveData&&o.jsx("div",{className:"mt-6 flex justify-center",children:o.jsxs("div",{className:"bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-lg p-4 border border-green-400/30 shadow-lg shadow-green-500/10",children:[o.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[o.jsx("div",{className:"w-3 h-3 bg-green-400 rounded-full animate-pulse"}),o.jsxs("div",{className:"text-center",children:[o.jsx("p",{className:"text-green-300 font-semibold text-sm",children:"Live Data Connected"}),o.jsxs("p",{className:"text-gray-300 text-xs",children:["Last updated:"," ",new Date(u.lastUpdated).toLocaleString()]})]})]}),o.jsxs("div",{className:"flex items-center justify-center gap-4 text-xs text-gray-400 border-t border-green-400/20 pt-2",children:[o.jsxs("div",{className:"flex items-center gap-1",children:[o.jsx(Db,{className:"w-3 h-3"}),o.jsxs("span",{children:["Cache: ",a.isFresh?"Fresh":"Stale"]})]}),a.isRateLimited&&o.jsxs("div",{className:"flex items-center gap-1",children:[o.jsx(Qr,{className:"w-3 h-3"}),o.jsxs("span",{children:["Next update:"," ",s(a.timeUntilNextRefresh)]})]}),o.jsxs("div",{className:"flex items-center gap-1",children:[o.jsx(Vb,{className:"w-3 h-3"}),o.jsx("span",{children:"Auto-updating"})]})]})]})})]}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",children:[o.jsxs("div",{className:"group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-green-500/15",children:[o.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"}),o.jsx("div",{className:"relative w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/40",children:o.jsx(Bn,{className:"w-full h-full text-white"})}),o.jsxs("div",{className:"relative text-center",children:[o.jsxs("div",{className:"text-3xl font-bold text-green-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-300 group-hover:to-emerald-300 group-hover:bg-clip-text transition-all duration-300 font-mono",children:["$",((k=u.totalProfit)==null?void 0:k.toFixed(2))||"0.00"]})," ",o.jsx("div",{className:"text-gray-200 font-medium group-hover:text-white transition-colors duration-300",children:"Total Profits"}),o.jsx("div",{className:"text-green-300 text-sm mt-1",children:i})]}),o.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"})]}),o.jsxs("div",{className:"group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-orange-500/15",children:[o.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"}),o.jsx("div",{className:"relative w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/40",children:o.jsx(Dr,{className:"w-full h-full text-white"})}),o.jsxs("div",{className:"relative text-center",children:[o.jsx("div",{className:"text-3xl font-bold text-orange-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-300 group-hover:to-amber-300 group-hover:bg-clip-text transition-all duration-300 font-mono",children:((I=u.totalTrades)==null?void 0:I.toLocaleString())||"0"}),o.jsx("div",{className:"text-gray-200 font-medium group-hover:text-white transition-colors duration-300",children:"Closed Trades"}),o.jsx("div",{className:"text-orange-300 text-sm mt-1",children:"Consistent & Automated"})]}),o.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"})]}),o.jsxs("div",{className:"group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-purple-500/15",children:[o.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"}),o.jsx("div",{className:"relative w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/40",children:o.jsx(Br,{className:"w-full h-full text-white"})}),o.jsxs("div",{className:"relative text-center",children:[o.jsxs("div",{className:"text-3xl font-bold text-purple-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 group-hover:bg-clip-text transition-all duration-300 font-mono",children:["$",((w=u.avgProfitPerTrade)==null?void 0:w.toFixed(2))||"0.00"]}),o.jsx("div",{className:"text-gray-200 font-medium group-hover:text-white transition-colors duration-300",children:"Avg Per Trade"}),o.jsx("div",{className:"text-purple-300 text-sm mt-1",children:"Steady Gains"})]}),o.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"})]})]}),o.jsx(JM,{}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12",children:[o.jsxs("div",{className:"group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-emerald-500/15",children:[o.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"}),o.jsx("div",{className:"relative w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-emerald-500/40",children:o.jsx(ip,{className:"w-full h-full text-white"})}),o.jsxs("div",{className:"relative text-center",children:[o.jsxs("div",{className:"text-2xl font-bold text-emerald-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-300 group-hover:to-teal-300 group-hover:bg-clip-text transition-all duration-300 font-mono",children:["$",((T=u.monthlyAverage)==null?void 0:T.toFixed(2))||"0.00"]}),o.jsx("div",{className:"text-gray-200 font-medium group-hover:text-white transition-colors duration-300",children:"Monthly Average"}),o.jsx("div",{className:"text-emerald-300 text-sm mt-1",children:"Consistent Performance"})]}),o.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"})]}),o.jsxs("div",{className:"group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-indigo-500/15",children:[o.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"}),o.jsx("div",{className:"relative w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-indigo-500/40",children:o.jsx(Ue,{className:"w-full h-full text-white"})}),o.jsxs("div",{className:"relative text-center",children:[o.jsxs("div",{className:"text-2xl font-bold text-indigo-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-300 group-hover:to-purple-300 group-hover:bg-clip-text transition-all duration-300 font-mono",children:["$",b(d)]}),o.jsx("div",{className:"text-gray-200 font-medium group-hover:text-white transition-colors duration-300",children:"Daily Average"}),o.jsx("div",{className:"text-indigo-300 text-sm mt-1",children:"Steady Growth"})]}),o.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"})]}),o.jsxs("div",{className:"group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-amber-500/15",children:[o.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"}),o.jsx("div",{className:"relative w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-amber-500/40",children:o.jsx(Br,{className:"w-full h-full text-white"})}),o.jsxs("div",{className:"relative text-center",children:[o.jsxs("div",{className:"text-2xl font-bold text-amber-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-amber-300 group-hover:to-orange-300 group-hover:bg-clip-text transition-all duration-300 font-mono",children:["$",((j=u.bestMonthProfit)==null?void 0:j.toFixed(2))||"0.00"]}),o.jsx("div",{className:"text-gray-200 font-medium group-hover:text-white transition-colors duration-300",children:"Best Month"}),o.jsx("div",{className:"text-amber-300 text-sm mt-1",children:g?`${v(g.month)} ${g.year}`:"N/A"})]}),o.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"})]}),o.jsxs("div",{className:"group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-blue-500/15",children:[o.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"}),o.jsx("div",{className:"relative w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/40",children:o.jsx(Yb,{className:"w-full h-full text-white"})}),o.jsxs("div",{className:"relative text-center",children:[o.jsxs("div",{className:"text-2xl font-bold text-cyan-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-cyan-300 group-hover:bg-clip-text transition-all duration-300 font-mono",children:[((E=u.avgPercentGain)==null?void 0:E.toFixed(2))||"0.00","%"]}),o.jsx("div",{className:"text-gray-200 font-medium group-hover:text-white transition-colors duration-300",children:"Avg % Gain"}),o.jsx("div",{className:"text-cyan-300 text-sm mt-1",children:"Per Trade"})]}),o.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"})]})]}),o.jsx("div",{className:"text-center mb-8",children:o.jsx("p",{className:"text-sm text-green-300 bg-green-900/20 backdrop-blur-sm rounded-lg px-4 py-2 inline-block border border-green-500/20",children:"✓ All profits shown are net amounts after trading fees and rebates"})}),p.length>0&&(()=>{var _;const C=p.reduce((R,z)=>{const K=z.year;return R[K]||(R[K]=[]),R[K].push(z),R},{}),$=Object.keys(C).map(Number).sort((R,z)=>z-R),A=p.reduce((R,z)=>z.profit>R.profit?z:R,p[0]),D=R=>R.month===A.month&&R.year===A.year;return o.jsxs(o.Fragment,{children:[$.map(R=>{const z=C[R],K=z.reduce((q,te)=>q+te.profit,0),Y=z.reduce((q,te)=>q+te.trades,0),Z=z.some(D);return o.jsxs("div",{className:"bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-4 md:p-8 mb-6 relative",children:[R===$[0]&&o.jsx("div",{className:"absolute top-4 right-4 opacity-20 pointer-events-none hidden md:block",children:o.jsx("div",{className:"w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 flex items-center justify-center animate-pulse shadow-lg shadow-purple-500/20",children:o.jsx("img",{src:"/robot-trading.png",alt:"Robot Trading",className:"w-12 h-12 object-contain filter brightness-110"})})}),o.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 md:mb-6 gap-2",children:[o.jsxs("h3",{className:"text-xl md:text-2xl font-bold text-white flex items-center gap-3",children:[o.jsxs("span",{children:[R," Performance"]}),o.jsxs("span",{className:"text-sm text-gray-400 font-normal",children:["(",z.length," ",z.length===1?"month":"months",")"]})]}),o.jsxs("div",{className:"text-sm font-semibold text-emerald-300",children:["$",K.toFixed(2)," • ",Y," trades"]})]}),(()=>{const q=Math.max(...z.map(P=>P.profit)),te=z.map(P=>{const W=D(P),B=P.profit===q;return{name:P.month,profit:Math.round(P.profit),trades:P.trades,isBest:W,isYearHighest:B,fill:W?"#f43f5e":B?"#eab308":"#10b981"}}),he=({active:P,payload:W})=>{if(P&&W&&W.length){const B=W[0].payload;return o.jsxs("div",{style:{backgroundColor:"#1e1b4b",border:"2px solid #7c3aed"},className:"rounded-lg p-4 shadow-2xl",children:[o.jsx("p",{className:"text-white font-bold text-base",children:v(B.name)}),o.jsxs("p",{className:"text-green-400 font-mono font-bold text-xl",children:["$",B.profit.toLocaleString()]}),o.jsxs("p",{className:"text-white text-sm",children:[B.trades," trades"]}),B.isBest&&o.jsx("p",{className:"text-yellow-300 text-sm font-bold mt-1",children:"🏆 Best Month Ever!"})]})}return null},Ie=P=>{const{x:W,y:B,width:F,index:N}=P,L=te[N];return L&&L.isBest?o.jsx("text",{x:W+F/2,y:B-25,fill:"#22d3ee",textAnchor:"middle",fontSize:12,fontWeight:"bold",children:"🏆 BEST"}):null},ze=z.length<=3?"50%":z.length<=6?"75%":"100%",fe=P=>{const{x:W,y:B,payload:F}=P,N=te.find(L=>L.name===F.value);return o.jsxs("g",{transform:`translate(${W},${B})`,children:[o.jsx("text",{x:0,y:0,dy:16,textAnchor:"middle",fill:"#9ca3af",fontSize:12,children:F.value}),o.jsx("text",{x:0,y:0,dy:32,textAnchor:"middle",fill:"#6b7280",fontSize:10,children:(N==null?void 0:N.trades)||0})]})};return o.jsxs("div",{className:"w-full",children:[o.jsxs("div",{className:"flex justify-center gap-4 md:gap-6 mb-4 text-xs md:text-sm",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("div",{className:"w-4 h-4 rounded",style:{background:"linear-gradient(to top, #059669, #34d399)"}}),o.jsx("span",{className:"text-gray-300",children:"Monthly"})]}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("div",{className:"w-4 h-4 rounded",style:{background:"linear-gradient(to top, #ea580c, #fb923c)"}}),o.jsx("span",{className:"text-gray-300",children:"Year's Best"})]}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("div",{className:"w-4 h-4 rounded",style:{background:"linear-gradient(to top, #0e7490, #06b6d4)"}}),o.jsx("span",{className:"text-gray-300",children:"All-Time Best"})]})]}),o.jsx("div",{className:"flex justify-center",style:{height:z.length>6?300:270},children:o.jsx("div",{style:{width:ze,height:"100%"},children:o.jsx(R1,{width:"100%",height:"100%",children:o.jsxs(VM,{data:te,margin:{top:40,right:20,left:20,bottom:25},barCategoryGap:"20%",children:[o.jsxs("defs",{children:[o.jsxs("linearGradient",{id:`gradient-green-${R}`,x1:"0",y1:"1",x2:"0",y2:"0",children:[o.jsx("stop",{offset:"0%",stopColor:"#059669"}),o.jsx("stop",{offset:"100%",stopColor:"#34d399"})]}),o.jsxs("linearGradient",{id:`gradient-orange-${R}`,x1:"0",y1:"1",x2:"0",y2:"0",children:[o.jsx("stop",{offset:"0%",stopColor:"#ea580c"}),o.jsx("stop",{offset:"100%",stopColor:"#fb923c"})]}),o.jsxs("linearGradient",{id:`gradient-cyan-${R}`,x1:"0",y1:"1",x2:"0",y2:"0",children:[o.jsx("stop",{offset:"0%",stopColor:"#0e7490"}),o.jsx("stop",{offset:"100%",stopColor:"#06b6d4"})]})]}),o.jsx(bv,{dataKey:"name",tick:o.jsx(fe,{}),axisLine:{stroke:"#374151"},tickLine:!1,interval:0}),o.jsx(wv,{hide:!0}),o.jsx(NP,{content:o.jsx(he,{}),cursor:{fill:"rgba(255,255,255,0.05)"}}),o.jsxs(yv,{dataKey:"profit",radius:[4,4,0,0],maxBarSize:45,minPointSize:3,children:[te.map((P,W)=>o.jsx(ru,{fill:P.isBest?`url(#gradient-cyan-${R})`:P.isYearHighest?`url(#gradient-orange-${R})`:`url(#gradient-green-${R})`,style:{filter:P.isBest?"drop-shadow(0 0 12px rgba(34, 211, 238, 0.8))":P.isYearHighest?"drop-shadow(0 0 8px rgba(251, 146, 60, 0.7))":"none"}},`cell-${W}`)),o.jsx(er,{dataKey:"profit",position:"top",formatter:P=>`$${P}`,style:{fill:"#e5e7eb",fontSize:11,fontWeight:600}}),o.jsx(er,{content:Ie})]})]})})})})]})})(),Z&&o.jsx("div",{className:"text-center",children:o.jsxs("p",{className:"text-cyan-400 font-semibold text-sm md:text-base",children:["🏆 Best month ever: ",A?`${v(A.month)}`:"N/A"," ","with $",(A==null?void 0:A.profit.toFixed(2))||"0.00"]})})]},R)}),o.jsx("div",{className:"text-center mb-6",children:o.jsxs("p",{className:"text-emerald-300 font-semibold text-sm md:text-lg",children:["📈 ",u.totalTrades||0," total trades • $",((_=u.avgProfitPerTrade)==null?void 0:_.toFixed(2))||"0.00"," avg profit/trade • Best month ever: ",A?`${v(A.month)} '${String(A.year).slice(-2)}`:"N/A"," ","with $",(A==null?void 0:A.profit.toFixed(2))||"0.00"]})}),o.jsx("div",{className:"text-center mb-8",children:o.jsxs("div",{className:"bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/30 shadow-lg shadow-purple-500/20",children:[o.jsx("h4",{className:"text-xl font-bold text-white mb-3",children:"Ready to Experience Autonomous Trading?"}),o.jsx("p",{className:"text-gray-200 mb-4 max-w-xl mx-auto",children:"GoBabyTrade is the same AI-enhanced system I use. Use my link to save $1,000!"}),o.jsxs("a",{href:"https://gobabytrade.com/432706BE",target:"_blank",rel:"noopener noreferrer",onClick:y,className:"inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30",children:["Start Trading – Save $1,000",o.jsx(Ue,{className:"w-4 h-4"})]})]})})]})})(),o.jsx("div",{className:"text-center mt-8",children:o.jsxs("p",{className:"text-sm text-gray-400 max-w-2xl mx-auto",children:["* These are my actual trading results from my personal robotic trader account. Started January 8, 2025.",u.isLiveData?" Results updated automatically.":" Results updated regularly.","Past performance does not guarantee future results."]})})]})})},bs=[{icon:Qr,title:"Set It & Forget It",description:"Monitors global markets 24/7, executing trades even while you sleep. Never miss profitable opportunities or stare at charts again.",color:"from-orange-500 to-amber-500",stats:"Always Active"},{icon:un,title:"Never Trades at a Loss",description:"Only sells when your position is profitable—never at a loss unless you choose otherwise. Protects investments while capitalizing on market swings.",color:"from-blue-500 to-cyan-500",stats:"0% Loss Trades"},{icon:Wi,title:"AI-Enhanced Autonomous Trading",description:"Analyzes market patterns and executes trades with AI precision, adapting to changing conditions in real-time. Never worry about charts or timing again.",color:"from-purple-500 to-pink-500",stats:"Unattended Trading"},{icon:Bn,title:"Your Funds Stay Safe",description:"Funds remain secure in your Kraken/Coinbase accounts. Trading-only API access means we can never withdraw or transfer your money.",color:"from-emerald-500 to-teal-500",stats:"Your Keys, Your Crypto"},{icon:Ue,title:"Takes What the Market Gives",description:"Capitalizes on market opportunities as they arise, taking profits when favorable and waiting patiently when not. Smart, patient trading.",color:"from-emerald-500 to-green-500",stats:"Market-Driven Results"},{icon:Br,title:"Lightning Fast Execution",description:"Executes trades in milliseconds, capitalizing on market movements before human traders can react. Speed gives you the competitive edge.",color:"from-yellow-500 to-orange-500",stats:"100ms Execution"},{icon:ap,title:"Real-Time Analytics",description:"Simple position and profit reporting gives you clear visibility into performance and total profits across Coinbase and Kraken.",color:"from-indigo-500 to-purple-500",stats:"Live Tracking"},{icon:dp,title:"Start with Paper Trading",description:"Test the system risk-free with paper trading before going live. Build confidence and see performance without risking real money.",color:"from-pink-500 to-rose-500",stats:"Risk-Free Testing"}],XM=function(){const[e,t]=f.useState(new Array(bs.length).fill(!1));f.useEffect(()=>{const r=new IntersectionObserver(i=>{i.forEach(s=>{if(s.isIntersecting){const l=parseInt(s.target.getAttribute("data-card-index")||"0");t(c=>{const u=[...c];return u[l]=!0,u}),Ka("view","feature_card",bs[l].title,1)}})},{threshold:.1});return document.querySelectorAll("[data-card-index]").forEach(i=>r.observe(i)),()=>r.disconnect()},[]);const n=(r,a)=>{Ka("click","feature_card",`${r}_card_${a+1}`,1)};return o.jsx("section",{className:"py-10 px-4 relative",children:o.jsxs("div",{className:"max-w-7xl mx-auto",children:[o.jsxs("div",{className:"text-center mb-12",children:[o.jsxs("div",{className:"inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-400/40 mb-6 mt-4 shadow-lg shadow-purple-500/20",children:[o.jsx(Br,{className:"w-4 h-4 text-purple-300"}),o.jsx("span",{className:"text-purple-200 font-medium",children:"Powerful Features"})]}),o.jsxs("h2",{className:"text-4xl md:text-5xl font-bold text-white mb-6",children:["Why Choose This",o.jsx("span",{className:"block text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text",children:"Autonomous Trading Platform"})]}),o.jsx("p",{className:"text-xl text-gray-200 max-w-3xl mx-auto",children:"Advanced autonomous technology with comprehensive risk management on trusted exchanges like Coinbase and Kraken."})]}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12",children:[o.jsx("img",{src:"/graphics/homepage-features-01.webp",alt:"The Never-Sell-At-A-Loss Rule - How the system protects your capital",className:"w-full rounded-2xl shadow-xl shadow-blue-500/10 border border-white/10 hover:scale-[1.02] transition-transform duration-300"}),o.jsx("img",{src:"/graphics/homepage-features-02.webp",alt:"24/7 Trading - Markets never sleep, neither does your robot",className:"w-full rounded-2xl shadow-xl shadow-purple-500/10 border border-white/10 hover:scale-[1.02] transition-transform duration-300"})]}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:bs.map((r,a)=>{const i=r.icon;return o.jsxs("div",{"data-card-index":a,onClick:()=>n(r.title,a),className:`group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl shadow-lg cursor-pointer ${e[a]?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,style:{transitionDelay:`${a*100}ms`,boxShadow:`0 8px 32px rgba(${a%2===0?"168, 85, 247":"236, 72, 153"}, 0.15)`},children:[o.jsx("div",{className:`absolute inset-0 bg-gradient-to-br ${r.color} opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300`}),o.jsx("div",{className:`relative w-12 h-12 rounded-xl bg-gradient-to-br ${r.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`,children:o.jsx(i,{className:"w-full h-full text-white"})}),o.jsxs("div",{className:"relative",children:[o.jsx("h3",{className:"text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 group-hover:bg-clip-text transition-all duration-300",children:r.title}),o.jsx("p",{className:"text-gray-300 text-sm leading-relaxed mb-4 group-hover:text-gray-200 transition-colors duration-300",children:r.description}),o.jsx("div",{className:`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${r.color} text-white shadow-md`,children:r.stats})]}),o.jsx("div",{className:`absolute inset-0 rounded-2xl bg-gradient-to-r ${r.color} opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl`})]},a)})})]})})},QM=function(){const e=()=>{Ri("start_trading_save_1000","cta_section"),Li("https://gobabytrade.com/432706BE","Start Trading Save $1000 CTA")};return o.jsxs("section",{className:"py-10 px-4 relative overflow-hidden",children:[o.jsx("div",{className:"absolute top-10 right-10 opacity-8 pointer-events-none hidden xl:block",children:o.jsx("img",{src:"/robot-trading.png",alt:"",className:"w-20 h-20 animate-pulse"})}),o.jsxs("div",{className:"relative max-w-4xl mx-auto text-center",children:[o.jsxs("div",{className:"inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-400/40 mb-6 mt-4 shadow-lg shadow-purple-500/20",children:[o.jsx(Gb,{className:"w-4 h-4 text-purple-300"}),o.jsx("span",{className:"text-purple-200 font-medium",children:"Ready to Start?"})]}),o.jsxs("h2",{className:"text-4xl md:text-6xl font-bold text-white mb-6 leading-tight",children:["Ready for True",o.jsx("span",{className:"block text-transparent bg-gradient-to-r from-green-300 via-blue-400 to-purple-400 bg-clip-text",children:"Set-It-and-Forget-It Trading?"})]}),o.jsx("p",{className:"text-xl text-gray-200 mb-8 max-w-3xl mx-auto",children:"GoBabyTrade is an AI-enhanced autonomous trading system that protects your capital while maximizing profits. Start with paper trading risk-free."}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",children:[o.jsxs("div",{className:"flex items-center justify-center gap-3",children:[o.jsx(We,{className:"w-6 h-6 text-green-300 flex-shrink-0"}),o.jsx("span",{className:"text-gray-200",children:"Never trades at a loss"})]}),o.jsxs("div",{className:"flex items-center justify-center gap-3",children:[o.jsx(We,{className:"w-6 h-6 text-green-300 flex-shrink-0"}),o.jsx("span",{className:"text-gray-200",children:"Your funds stay secure"})]}),o.jsxs("div",{className:"flex items-center justify-center gap-3",children:[o.jsx(We,{className:"w-6 h-6 text-green-300 flex-shrink-0"}),o.jsx("span",{className:"text-gray-200",children:"Set it and forget it"})]})]}),o.jsxs("div",{className:"bg-gray-900/50 rounded-2xl border border-white/10 p-8 mb-8 max-w-3xl mx-auto shadow-lg shadow-purple-500/10 relative",children:[o.jsx("div",{className:"absolute bottom-4 right-4 opacity-10 pointer-events-none hidden md:block",children:o.jsx("img",{src:"/robot-trading.png",alt:"",className:"w-12 h-12"})}),o.jsxs("div",{className:"flex items-center justify-center gap-3 mb-6",children:[o.jsx(Rb,{className:"w-8 h-8 text-green-300"}),o.jsx("h3",{className:"text-2xl md:text-3xl font-bold text-white",children:"Save $1,000 With My Link"})]}),o.jsxs("ul",{className:"text-left space-y-4 mb-6",children:[o.jsxs("li",{className:"flex items-start text-gray-200 group hover:text-white transition-all duration-300 hover:translate-x-2",children:[o.jsx(Pe,{className:"w-5 h-5 text-purple-300 mr-3 mt-1 flex-shrink-0 group-hover:text-pink-300 transition-colors"}),o.jsx("span",{className:"text-lg",children:"AI-enhanced autonomous trading that works 24/7"})]}),o.jsxs("li",{className:"flex items-start text-gray-200 group hover:text-white transition-all duration-300 hover:translate-x-2",children:[o.jsx(Pe,{className:"w-5 h-5 text-purple-300 mr-3 mt-1 flex-shrink-0 group-hover:text-pink-300 transition-colors"}),o.jsx("span",{className:"text-lg",children:"Never sells at a loss – waits for profitable opportunities"})]}),o.jsxs("li",{className:"flex items-start text-gray-200 group hover:text-white transition-all duration-300 hover:translate-x-2",children:[o.jsx(Pe,{className:"w-5 h-5 text-purple-300 mr-3 mt-1 flex-shrink-0 group-hover:text-pink-300 transition-colors"}),o.jsx("span",{className:"text-lg",children:"Your funds stay in your own Coinbase or Kraken account"})]}),o.jsxs("li",{className:"flex items-start text-gray-200 group hover:text-white transition-all duration-300 hover:translate-x-2",children:[o.jsx(Pe,{className:"w-5 h-5 text-purple-300 mr-3 mt-1 flex-shrink-0 group-hover:text-pink-300 transition-colors"}),o.jsx("span",{className:"text-lg",children:"Start with paper trading – zero risk to test the system"})]}),o.jsxs("li",{className:"flex items-start text-gray-200 group hover:text-white transition-all duration-300 hover:translate-x-2",children:[o.jsx(Pe,{className:"w-5 h-5 text-purple-300 mr-3 mt-1 flex-shrink-0 group-hover:text-pink-300 transition-colors"}),o.jsx("span",{className:"text-lg",children:"Same system I use – see my live results above"})]})]}),o.jsx("p",{className:"text-lg text-green-300 font-medium",children:"Use my referral link to get $1,000 off GoBabyTrade!"})]}),o.jsx("div",{className:"flex justify-center mb-8",children:o.jsxs("a",{href:"https://gobabytrade.com/432706BE",onClick:e,target:"_blank",rel:"noopener noreferrer",className:"group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-purple-500/30 flex items-center justify-center gap-2",children:["Start Trading – Save $1,000",o.jsx(Pe,{className:"w-5 h-5 group-hover:translate-x-1 transition-transform"})]})}),o.jsxs("div",{className:"flex items-center justify-center gap-3 text-green-300",children:[o.jsx(Ue,{className:"w-6 h-6"}),o.jsx("span",{className:"text-lg font-semibold",children:"Try Paper Trading First – Zero Risk, Real Results"})]})]})]})},e$=[{question:"Is my money safe?",answer:"Yes! Your funds stay in your own Kraken/Coinbase accounts. The system only connects via API with trading permissions - it can never withdraw or transfer your funds."},{question:"Do I need trading experience?",answer:"No experience required! The AI handles all analysis and decisions. You set your preferences and investment amount - the platform does the rest."},{question:"How much money do I need to start?",answer:"Start with as little as $100. It's recommended to start small to get familiar with the platform before scaling up your investment."},{question:"What if the system makes losing trades?",answer:"The GoBabyTrade protection system never executes losing trades. It waits for profitable opportunities or doesn't trade at all, safeguarding your capital."},{question:"Can I pause or stop the automated trading anytime?",answer:"Yes! You have complete control. Pause or stop anytime directly in the interface. When paused, the system stops making new trades but your existing positions remain untouched."}],t$=({question:e,answer:t})=>{const[n,r]=f.useState(!1);return o.jsxs("div",{className:"bg-gray-900/50 rounded-xl border border-white/10 overflow-hidden hover:border-purple-400/40 transition-all duration-300 shadow-lg shadow-purple-500/10",children:[o.jsxs("button",{onClick:()=>r(!n),className:"w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/10 transition-colors duration-200",children:[o.jsx("span",{className:"text-lg font-semibold text-white pr-4",children:e}),o.jsx("div",{className:"flex-shrink-0",children:n?o.jsx(sp,{className:"w-5 h-5 text-purple-300"}):o.jsx(op,{className:"w-5 h-5 text-purple-300"})})]}),o.jsx("div",{className:`overflow-hidden transition-all duration-300 ease-in-out ${n?"max-h-96 opacity-100":"max-h-0 opacity-0"}`,children:o.jsx("div",{className:"px-6 pb-4 border-t border-white/20",children:o.jsx("div",{className:"text-gray-200 leading-relaxed pt-4",children:t})})})]})},n$=()=>o.jsxs("section",{className:"py-20 px-4 relative overflow-hidden",children:[o.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/30 to-slate-900 -z-10"}),o.jsx("div",{className:"absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"}),o.jsx("div",{className:"absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"}),o.jsxs("div",{className:"max-w-4xl mx-auto relative z-10",children:[o.jsxs("div",{className:"text-center mb-12",children:[o.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-white mb-4",children:"Common Questions"}),o.jsx("p",{className:"text-xl text-gray-300",children:"Quick answers to help you get started"})]}),o.jsx("div",{className:"max-w-2xl mx-auto mb-12",children:o.jsx("img",{src:"/graphics/homepage-faq-01.webp",alt:"3 Steps to Passive Income - Connect, Configure, Collect",className:"w-full rounded-2xl shadow-xl shadow-purple-500/10 border border-white/10"})}),o.jsx("div",{className:"space-y-3 mb-8",children:e$.map((e,t)=>o.jsx(t$,{question:e.question,answer:e.answer},t))}),o.jsx("div",{className:"text-center mb-12",children:o.jsxs(Ge,{to:"/faq",className:"inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-colors duration-200",children:[o.jsx(cp,{className:"w-5 h-5"}),o.jsx("span",{className:"text-lg",children:"View all 30+ questions →"})]})}),o.jsxs("div",{className:"mt-8 text-center bg-gradient-to-r from-gray-900/30 to-purple-900/20 rounded-2xl p-8 border border-white/10 shadow-lg shadow-purple-500/10",children:[o.jsx("h3",{className:"text-2xl font-bold text-white mb-4",children:"Ready to Start Trading?"}),o.jsx("p",{className:"text-gray-200 mb-6",children:"Get started with GoBabyTrade – the same AI-enhanced autonomous trading system I use. Try paper trading first, risk-free."}),o.jsx("a",{href:"https://gobabytrade.com/432706BE",target:"_blank",rel:"noopener noreferrer",className:"inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-8 rounded-xl hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg shadow-purple-500/50",children:"Start Trading – Save $1,000 →"})]})]})]}),ka=[{title:"2025: My First Year with an Autonomous Trader",slug:"first-year-autonomous-trader-2025",published:!0,publishDate:"2025-12-27",date:"2025-12-27T12:00:00Z",heroImage:"/blog-images/first-year-autonomous-trader-2025-hero.webp",imageAlt:"Calendar showing 2025 with trading charts and growth trajectory",excerpt:"985 trades. $4,907 in profit. 100% success rate. I almost dismissed this out of hand. Here's what my first year with an autonomous crypto trader actually looked like.",content:`I almost didn't do this.

When I first heard about autonomous crypto trading, I assumed there would be some catch. Some dashboard I'd have to monitor. Some decisions I'd need to make. Some skill I'd need to develop.

I was ready to dismiss it out of hand.

Then I saw the demonstration. Not a pitch deck with theoretical returns. An actual system, making actual trades, following actual rules that had been refined over 25 years.

No decisions required from me. No monitoring needed. No learning curve.

I signed up in January 2025. Here's what happened.

![My 2025 autonomous trading journey - 985 trades, $4,907 profit](/blog-images/first-year-autonomous-trader-2025-01.webp)

---

## The Numbers Don't Lie

Let me just put it all out there:

**Total trades:** 985

**Total profit:** $4,907.48

**Success rate:** 100%

**Losing trades:** Zero

That last one still feels strange to type. Not a single trade closed at a loss. Not because I'm lucky. Because the system is designed to never sell at a loss - it waits until each position is profitable before closing it.

Here's how the year broke down:

| Month | Trades | Profit |
|-------|--------|--------|
| January | 116 | $502.43 |
| February | 152 | $661.51 |
| March | 75 | $266.28 |
| April | 106 | $554.74 |
| May | 78 | $373.53 |
| June | 72 | $379.26 |
| July | 173 | $823.06 |
| August | 67 | $407.83 |
| September | 42 | $229.06 |
| October | 45 | $259.95 |
| November | 36 | $288.75 |
| December | 23 | $161.08 |

![Monthly trading breakdown for 2025](/blog-images/first-year-autonomous-trader-2025-02.webp)

---

## What Surprised Me Most

**January and February were my best months for capital efficiency.**

This seems backwards. I had the *least* money in the system at the start. But that's exactly why it worked so well - my smaller capital was recycling faster. More trades per dollar. The system was putting every available dollar to work.

**July was my biggest profit month ($823)** - but that was because market volatility picked up, not because I did anything differently. I didn't even notice it happening until I checked the numbers later.

**December has been my quietest month (23 trades)** - and that's fine. The system doesn't force trades when the market isn't moving. It just waits. Patience built into the code.

---

## The Day I Broke My Arm

In October, I was walking my 150-pound Newfoundland, Moses. He saw something. I went down. Broken arm.

Here's the thing: I work from home doing contract work. I type for a living. A broken arm is a big deal.

You know what wasn't a big deal? My trading system.

It just kept going. Buying when conditions were right. Selling when positions hit their targets. Making money while I was figuring out how to eat cereal left-handed.

![The system kept trading while I recovered](/blog-images/first-year-autonomous-trader-2025-03.webp)

If I had been day trading? Options trading? Trying to time the market manually?

I would have had to stop. Or worse - make emotional decisions while stressed and in pain.

The autonomous system doesn't care if I'm having a bad day. It doesn't care if I'm injured, busy, or asleep. It just executes the rules.

---

## What I Would Tell January 2025 Me

**Stop overthinking it.**

I spent weeks researching before I started. Reading about crypto. Watching videos. Trying to understand every detail of how the system worked.

None of that mattered.

What mattered was: Does it work? Is there proof? Can I verify the results myself?

Yes, yes, and yes.

The system has 25 years of development behind it. Ed Barsano, the creator, has been refining these rules since before most people knew what cryptocurrency was. My job isn't to understand every algorithm - my job is to let it run.

**Trust the quiet months.**

When December rolled around with only 23 trades, part of me wondered if something was wrong. It wasn't. The market was flat. The system was waiting for real opportunities instead of forcing trades.

That patience is worth more than any single profitable month.

**The math gets interesting.**

I ran the numbers on what happens if this continues. Using [Calculator.net's investment calculator](https://www.calculator.net/investment-calculator.html), here's what my actual starting capital of ~$16K could become at my real 2.7% monthly return (37.7% annually):

**If I just let it ride (no additional contributions):**

| Year | Balance |
|------|---------|
| 1 | $22,032 |
| 3 | $41,775 |
| 5 | $79,211 |
| 10 | $392,156 |

**If I add $500/month** (which is realistic - I'm already reinvesting 50% of profits plus I can add a bit from my day job):

| Year | Balance |
|------|---------|
| 1 | $29,197 |
| 3 | $72,394 |
| 5 | $154,301 |
| 10 | $838,996 |

That second scenario: I'd contribute $76K total over 10 years. The system would generate $763K. That's 91% of the final balance coming from compound returns - not my contributions.

These aren't promises. Past performance doesn't guarantee future results. But they're based on my actual returns - not some theoretical projection from a sales pitch.

![Compound growth projections based on real 2025 performance](/blog-images/first-year-autonomous-trader-2025-04.webp)

---

## What 2026 Looks Like

More of the same, honestly.

I'm not changing my strategy. I'm not trying to optimize or tinker. I'm letting the system do what it does.

My goals for next year:
- Keep publishing every trade transparently
- Hit $10K total profit milestone
- Help others understand that this option exists

That last one matters to me. I almost dismissed this out of hand. How many other people are doing the same thing right now? How many are stressing over day trading, losing money on options, or gambling on sports betting apps - when a tested, systematic alternative exists?

---

## The Bottom Line

2025 taught me that the best trading strategy is one that doesn't need me.

985 trades. $4,907 in verified profit. Zero losses. One broken arm that didn't matter.

I didn't predict the market. I didn't time anything perfectly. I didn't develop any special skills.

I just let a system with 25 years of refinement do its job.

That's it. That's the whole story.

**Here's to 2026.**

---

My autonomous trading system was developed by Ed Barsano, creator of [GoBabyTrade™](https://gobabytrade.com/432706BE). I publish every single trade live at [myrobotictrader.com](https://myrobotictrader.com) — the good weeks, the quiet weeks, and everything in between.`,category:"Lifestyle",metaDescription:"A transparent look at my first year running an autonomous crypto trading system - the wins, the quiet months, and what I learned along the way."},{title:"Everyone Has an Opinion About Your Money (Here's Why They're Wrong)",slug:"everyone-has-an-opinion",published:!1,publishDate:"2026-01-20",date:"2026-01-20T12:00:00Z",heroImage:"/blog-images/everyone-has-an-opinion-hero.webp",imageAlt:"Person covering ears surrounded by speech bubbles - everyone has an opinion",excerpt:"Your uncle thinks crypto is a scam. Your coworker won't stop talking about his gains. Financial TV is screaming about a crash. Here's how to tune out the noise.",content:`# Everyone Has an Opinion About Your Money (Here's Why They're Wrong)

Thanksgiving dinner. Your uncle leans back, full of turkey and confidence.

"You're still doing that Bitcoin thing? You know that's all a scam, right? It's going to zero. I read an article."

Two days later, your coworker corners you at the coffee machine.

"Dude, I made $15K on this memecoin last week. You're missing out. I can send you the Discord."

That night, you turn on financial news. The chiron screams: **CRYPTO CRASH: IS THIS THE END?** A panel of experts debates whether you should sell everything immediately.

Your phone buzzes. Group chat: "Why aren't you in on this? Everyone's getting rich."

**Everyone has an opinion about your money. Almost none of them should.**

![The Three Types of Bad Advice](/blog-images/everyone-has-an-opinion-01.webp)

---

## The Three Types of Bad Advice

The pressure to make emotional decisions about your investments doesn't just come from market manipulation. It comes from everyone around you—and they fall into predictable categories.

### The Skeptics (Family Edition)

You know them. They've never bought a cryptocurrency, done any research, or spent five minutes understanding what blockchain actually does. But they read a headline once, and now they're experts.

"It's tulip mania all over again."

"You can't hold it in your hand, so it's not real."

"The government is going to ban it."

Their skepticism isn't based on analysis. It's based on fear of what they don't understand, dressed up as concern for your wellbeing.

The problem? When markets dip, their voice gets louder in your head. "Maybe Uncle Jerry was right." That doubt can push you toward selling at exactly the wrong time.

### The Hype Men (Coworker/Friend Edition)

These are the guys who discovered crypto three weeks ago and now won't shut up about it.

"I'm up 400% on this new coin. You HAVE to get in."

"My buddy knows a guy who knows when the next pump is happening."

"This is generational wealth, bro. Don't be left behind."

They're not trying to manipulate you—they genuinely believe what they're saying. But they're also completely ignoring risk, don't have a strategy, and will be suspiciously quiet when their "sure thing" crashes 80%.

Their enthusiasm can push you into FOMO purchases at the worst times. We covered [how that FOMO gets engineered](/blog/fomo-engineering)—your friends are often unwitting amplifiers of that signal.

### The Financial Media (Chaos Edition)

Turn on any financial news channel and you'll see:

**When markets are up:** "Is now the time to buy? Experts weigh in on the rally."

**When markets are down:** "PANIC SELLING: Should you get out before it's too late?"

**When markets are flat:** "What's next for crypto? We ask five analysts with five different opinions."

The business model of financial media isn't to make you wealthy. It's to keep you watching. Fear and greed drive engagement. Calm, rational analysis does not.

Every headline is designed to make you feel like you need to DO something. Check your portfolio. Make a trade. Tune in tomorrow to see what happens next.

![Financial Media Playbook](/blog-images/everyone-has-an-opinion-02.webp)

---

## The Exception: Voices That Actually Care

Not everyone in financial media is selling panic. There are voices that actually think about ordinary investors.

Maria Bartiromo on *Mornings with Maria* is one of the few who consistently asks: "What does this mean for regular people trying to build wealth?"

That question matters. Most financial coverage focuses on institutional moves, hedge fund strategies, and what billionaires are doing. The retail investor—the person trying to build a future with limited capital—is usually an afterthought.

When evaluating any financial voice, ask yourself:

- Are they speaking to people like me, or to Wall Street?
- Are they trying to inform me or scare me?
- Do they acknowledge that I have different goals than a hedge fund?
- Are they selling a product or providing perspective?

The good voices are out there. They're just drowned out by the noise.

---

## Why Everyone's Opinion Hits So Hard

Here's the uncomfortable truth: you're wired to care what others think.

**Social validation:** Humans are tribal. When your family disapproves or your friends are all doing something you're not, it creates genuine psychological discomfort.

**Authority bias:** A "financial expert" on TV feels more credible than your own research, even when they have no idea about your specific situation.

**Recency weighting:** Whoever talked to you most recently has the loudest voice in your head. One skeptical comment from your dad can undo weeks of conviction.

**Uncertainty amplification:** When you're already unsure, outside opinions don't help you think clearly—they amplify whatever doubt already exists.

This is why so many people make emotional decisions about money. It's not just the market. It's everyone around you adding noise to an already difficult process.

![The Pressure Sources](/blog-images/everyone-has-an-opinion-03.webp)

---

## The Only Opinion That Matters

Here's what I've learned: the only opinion that should drive your financial decisions is a systematic one.

Not your uncle's fears. Not your coworker's hype. Not the TV's panic. Not even your own emotions in the moment.

A system.

Rules that execute regardless of what anyone says. Rules that don't hear Thanksgiving skepticism or group chat FOMO. Rules that don't watch financial news.

My AI-enhanced autonomous trading system doesn't have a family. It doesn't have coworkers. It doesn't watch CNBC.

It has rules:

- Buy based on systematic analysis, not hot tips
- Sell at predetermined targets, not when TV says to panic
- Never sell at a loss because someone at dinner said crypto is dead
- Ignore the noise entirely

When Uncle Jerry is predicting doom, my system is executing. When my coworker is screaming about gains, my system is executing. When the TV says the sky is falling, my system is executing.

Same rules. Every time. No opinions required.

![System vs Opinions](/blog-images/everyone-has-an-opinion-04.webp)

---

## How to Handle the Noise

If you're not using an autonomous system, here's how to protect yourself from well-meaning bad advice:

**Create a decision framework BEFORE you need it.** Write down your rules when you're calm. "I will not sell based on a family member's opinion." "I will not buy based on a friend's tip." When the pressure comes, you have something to reference.

**Limit financial media consumption.** Check the news once a day, max. The 24-hour cycle is designed to create urgency that doesn't exist.

**Consider the source.** Has this person actually built wealth doing what they're suggesting? Or are they just loud?

**Remember the incentives.** Your uncle wants to feel smart. Your coworker wants validation. The TV wants viewers. None of them are optimizing for YOUR financial success.

**Find the Maria Bartiromos.** Seek out voices that speak to your situation, not to hedge funds.

---

## The Takeaway

You're going to get advice. From family who doesn't understand. From friends who are caught up in hype. From media that profits from your attention.

None of them will be there when their advice costs you money.

The solution isn't finding better opinions. It's building a system that doesn't need them.

**The noise never stops. But you can stop listening.**

---

My autonomous trading system was developed by Ed Barsano, creator of [GoBabyTrade™](https://gobabytrade.com/432706BE). I publish every single trade live at [myrobotictrader.com](https://myrobotictrader.com) — the good weeks, the quiet weeks, and everything in between.`,category:"Market Psychology",metaDescription:"Your uncle thinks crypto is a scam. Your coworker won't stop talking about his gains. Financial TV is screaming about a crash. Here's how to tune out the noise."},{title:"Why You Always Buy the Top (It's Not Bad Luck)",slug:"fomo-engineering",published:!1,publishDate:"2026-01-13",date:"2026-01-13T12:00:00Z",heroImage:"/blog-images/fomo-engineering-hero.webp",imageAlt:"Fishing hook with crypto coin bait - FOMO is engineered",excerpt:"That urgent feeling that you HAVE to buy right now? It was manufactured. Here's how pumps are engineered to make you the exit liquidity.",content:`# Why You Always Buy the Top (It's Not Bad Luck)

You've seen it happen. Maybe it's happened to you.

A coin starts running. 20% up. Then 50%. Twitter is on fire. Your group chat won't shut up about it. Everyone's posting gains. You told yourself you'd wait for a dip, but it just keeps going.

Finally, you can't take it anymore. You buy.

And within hours—sometimes minutes—it crashes. You're left holding the bag while everyone else celebrates their profits.

**This isn't bad luck. This isn't bad timing. You were targeted.**

![FOMO Engineering Cycle](/blog-images/fomo-engineering-01.webp)

---

## The Anatomy of a Manufactured Pump

That overwhelming urge to buy? It didn't come from nowhere. It was engineered through a precise sequence designed to exploit human psychology.

Here's how it works:

**Phase 1: Accumulation (You Don't Notice)**

Smart money—whales, insiders, coordinated groups—quietly accumulates a position. They buy slowly, keeping the price flat or even suppressing it. This is the [whale accumulation](/blog/whale-accumulation) phase we talked about before.

During this phase, retail is bored or pessimistic. "This coin is dead." Perfect conditions for cheap accumulation.

**Phase 2: The Spark (You Start Watching)**

Once positions are built, the pump begins. Initial price movement triggers algorithms and catches attention. Volume increases. The first wave of retail notices.

You see it. You think, "Interesting, but I'll wait for a pullback."

**Phase 3: The FOMO Cascade (You Can't Look Away)**

This is where the engineering gets sophisticated:

- **Social proof floods in** - Influencers post gains, screenshots of profits everywhere
- **Urgency amplifies** - "This is just getting started!" "Don't miss this!"
- **Scarcity narratives appear** - "Only X supply left!" "Institutions are coming!"
- **Price action confirms the hype** - Every candle green, validating the excitement

Your brain starts doing the math. "If I had bought yesterday, I'd be up 40%." The pain of missing out becomes unbearable.

**Phase 4: Distribution (You Finally Buy)**

Here's the cruel part: the moment you feel like you *have* to buy is precisely when smart money starts selling.

Your FOMO purchase? It's their exit liquidity.

They needed someone to buy their bags at the top. You volunteered.

![The FOMO Trigger Points](/blog-images/fomo-engineering-02.webp)

---

## Why FOMO Works Every Single Time

FOMO isn't a character flaw. It's hardwired into your brain.

**Loss aversion:** Psychologically, missing a gain feels like a loss. And humans hate losses twice as much as they enjoy equivalent gains. Watching others profit while you sit on the sidelines triggers genuine psychological pain.

**Social proof:** When everyone around you is doing something, your brain assumes it must be the right choice. This kept our ancestors alive. In markets, it gets exploited.

**Recency bias:** Whatever is happening right now feels like it will continue forever. A coin up 100% feels like it's going to 200%. A coin down 50% feels like it's going to zero.

**Regret minimization:** Your brain runs simulations. "What if this goes 10x and I didn't buy?" The imagined future regret of missing out overwhelms rational analysis.

The people engineering pumps understand this psychology better than you do. They're not guessing—they're running a playbook that works almost every time.

![Why FOMO Works](/blog-images/fomo-engineering-03.webp)

---

## The Signals You're Being Played

Once you know what to look for, manufactured FOMO becomes obvious:

**Sudden influencer coordination** - Multiple accounts posting about the same coin at the same time? That's not organic discovery. That's a campaign.

**Screenshots of gains everywhere** - Real profits don't need constant proof. When your timeline is flooded with gain porn, someone is creating urgency.

**"Last chance" narratives** - Any time you hear "this is your last chance to buy under $X," someone is trying to manufacture urgency. There's always another opportunity.

**Parabolic price action without news** - Real catalysts cause sustained moves. Pumps without fundamentals are manufactured liquidity events.

**The conversation ratio** - When everyone is talking about buying and no one is talking about selling, guess what's about to happen?

The most dangerous moment in any pump is when it feels safest to buy.

---

## The Only Way to Win

You can't beat FOMO through willpower. The psychology is too strong, and the engineers are too good at exploiting it.

The only way to win is to remove yourself from the game entirely.

![System vs FOMO](/blog-images/fomo-engineering-04.webp)

---

## How I Stopped Playing

My AI-enhanced autonomous trading system doesn't feel FOMO. It doesn't see Twitter. It doesn't know what influencers are saying. It doesn't care that a coin is up 200% this week.

It follows rules:

- Buy at predetermined levels based on systematic analysis
- Sell at predetermined profit targets
- Never chase pumps
- Never panic sell dumps
- Execute without emotion

When a coin is pumping and everyone is screaming to buy, my system is either already in position (from buying during the boring accumulation phase) or it's sitting out entirely.

It doesn't provide exit liquidity for smart money. It doesn't buy tops. It doesn't feel the pain of "missing out" because it doesn't experience FOMO as an emotion.

**The trades I don't make are just as important as the ones I do.**

---

## The Uncomfortable Truth

Here's what nobody wants to hear: if you're buying because of an emotional urge, you're probably too late.

The time to buy was during the boring phase. The accumulation phase. When nobody was talking about it, when charts looked dead, when you thought the opportunity had passed.

By the time FOMO hits, the trade is already over. You're just providing the liquidity for the exit.

The solution isn't better timing. It isn't following different influencers. It isn't finding the "next" pump before everyone else.

The solution is building a system that buys and sells based on rules, not emotions. A system that accumulates when others are bored and takes profits when others are euphoric.

**When you feel like you have to buy, that's the signal not to.**

---

My autonomous trading system was developed by Ed Barsano, creator of [GoBabyTrade™](https://gobabytrade.com/432706BE). I publish every single trade live at [myrobotictrader.com](https://myrobotictrader.com) — the good weeks, the quiet weeks, and everything in between.`,category:"Market Psychology",metaDescription:"That urgent feeling that you HAVE to buy right now? It was manufactured. Here's how pumps are engineered to make you the exit liquidity."},{title:"Why Flat Markets Feel Hopeless (And Why That's Exactly the Point)",slug:"whale-accumulation",published:!1,publishDate:"2026-01-06",date:"2026-01-06T12:00:00Z",heroImage:"/blog-images/whale-accumulation-hero.webp",imageAlt:"Whale with glowing eye watching confused fish - Your frustration is their strategy",excerpt:"When crypto prices stay flat and you feel like giving up, you're experiencing a manufactured emotion. Here's what's really happening behind the scenes.",content:`# Why Flat Markets Feel Hopeless (And Why That's Exactly the Point)

You've been watching your crypto holdings sit flat for weeks. Maybe months. The price bounces between the same levels like it's stuck in purgatory. Every time it starts to climb, something pushes it back down.

You're tired. Frustrated. Starting to wonder if you should just sell and move on.

**That feeling isn't an accident. It was designed.**

![Whale Accumulation Cycle](/blog-images/whale-accumulation-01.webp)

---

## The Game You Didn't Know You Were Playing

In crypto markets, there are players with massive capital—we call them "whales." These aren't mythical creatures. They're hedge funds, institutional traders, and wealthy individuals who can move markets with their orders.

And they have a playbook that most retail investors never learn about: **accumulation through suppression.**

Here's how it works: whales *want* to buy large amounts of crypto at low prices. But if they just started buying, the price would spike from their own demand. So they do something counterintuitive—they keep the price *down* while slowly accumulating.

The goal? Make you feel so hopeless that you sell your coins cheap. Then they scoop them up.

![Suppression Tactics](/blog-images/whale-accumulation-02.webp)

---

## The Tactics They Use

**Sell Walls:** Large sell orders placed at key resistance levels. Every time the price approaches a breakout point, there's a wall of sell orders waiting to crush it. Retail traders see this and think, "It'll never break through."

**Wash Trading:** Creating artificial volume by trading with yourself. This makes it look like there's more selling pressure than actually exists.

**Timing Dumps:** Strategically selling into any rally to crush momentum. Just when retail traders get excited, the price gets slammed back down.

**Spoofing:** Placing large orders they intend to cancel, creating false impressions of supply and demand. It's illegal in traditional markets, but enforcement in crypto is... limited.

---

## Meanwhile, They're Quietly Buying

While retail traders panic and sell, whales are accumulating through:

- **Small incremental buys** that don't move the price
- **OTC (over-the-counter) desks** where trades happen off the public order books
- **Buying the panic sells** they just triggered

It's a psychological operation. The flat, hopeless market isn't natural—it's manufactured to separate you from your coins.

![The Psychology Game](/blog-images/whale-accumulation-03.webp)

---

## The Emotional Trap

Think about what happens during a prolonged flat period:

1. **Excitement fades** - The initial optimism from buying turns to boredom
2. **Doubt creeps in** - "Maybe I was wrong about this"
3. **Opportunity cost anxiety** - "I could have my money in something that's actually moving"
4. **Capitulation** - "I'm done. Taking my loss and moving on."

This is exactly what whales are waiting for. Your capitulation is their accumulation.

And here's the cruel part: once they've accumulated enough and stop suppressing the price, it often rockets upward—without the retail traders who gave up.

---

## Why This Changes Everything

Understanding this dynamic doesn't mean you can predict when accumulation ends or when prices will move. Whales have more capital, more information, and more patience than individual traders.

But knowing this *does* change one critical thing: **your relationship with flat markets.**

When you understand that hopelessness is manufactured, you stop making decisions based on manufactured emotions. You stop playing their game.

![System vs Emotion](/blog-images/whale-accumulation-04.webp)

---

## How I Removed Myself From This Game

I use an AI-enhanced autonomous trading system that doesn't feel hopeless. It doesn't get bored during flat markets. It doesn't experience "opportunity cost anxiety."

It has one simple rule: **never sell at a loss.**

When whales suppress prices, my system doesn't panic sell into their hands. It waits. When prices eventually move (and they always eventually move), it takes profits systematically.

The system doesn't try to outsmart whales. It just refuses to play their psychological game.

December 2025 was a perfect example. Low volatility. Flat markets. My system made only 23 trades the entire month—compared to 173 in July. But every single one was profitable. The system doesn't force action when patience is the better strategy.

---

## The Takeaway

Flat markets that feel hopeless aren't a sign that you should give up. They might be a sign that someone wants you to give up.

The antidote isn't trying to predict whale movements or time the bottom perfectly. The antidote is removing emotion from the equation entirely.

Whether that's through an autonomous system, a strict rules-based approach, or simply understanding that your feelings during flat markets are being manipulated—awareness is the first step.

**The market panics. The system executes.**

---

My autonomous trading system was developed by Ed Barsano, creator of [GoBabyTrade™](https://gobabytrade.com/432706BE). I publish every single trade live at [myrobotictrader.com](https://myrobotictrader.com) — the good weeks, the quiet weeks, and everything in between. Check out my results to see what patience looks like in action.`,category:"Market Psychology",metaDescription:"When crypto prices stay flat and you feel like giving up, you're experiencing a manufactured emotion. Here's what's really happening behind the scenes."},{title:"My AI Trader Made $0 on Christmas Eve. Here's Why That Beats the $1.8B Powerball.",slug:"powerball-vs-patience",published:!0,date:"2025-12-25T12:00:00Z",heroImage:"/blog-images/powerball-vs-patience-hero.webp",imageAlt:"Powerball vs Patience - One winner, millions of losers",excerpt:"One person won $1.8 billion on Christmas Eve. Millions more tore up their tickets. Meanwhile, my autonomous trader did something radical: nothing.",content:`Last night, someone in Arkansas became a billionaire.

One ticket. $1.817 billion. The second-largest lottery jackpot in U.S. history, won on Christmas Eve.

Meanwhile, my AI-enhanced autonomous trader did... absolutely nothing.

No buys. No sells. Just sitting there, watching the market, waiting.

And honestly? That's exactly why I trust it.

![One winner, millions of losers](/blog-images/powerball-vs-patience-01.webp)

---

## The Numbers Nobody Talks About

While everyone celebrates that one Arkansas winner, let's talk about what actually happened:

- **47 consecutive drawings** without a jackpot winner (a record)
- **Odds of winning:** 1 in 292.2 million
- **Millions of tickets sold** across 47 drawings
- **Result:** One winner. Everyone else? Nothing.

That's not investing. That's not even gambling. It's paying for the privilege of hoping.

![The math of lottery vs systematic trading](/blog-images/powerball-vs-patience-02.webp)

---

## What My Trader Did Instead

Here's my December so far:

- **23 trades completed**
- **$161.08 in profit**
- **100% success rate** (never sold at a loss)
- **Last sale:** December 19th

That's my quietest month of the year. Compare that to July, when the system executed 173 trades and generated $823 in profit.

The difference? **Market conditions.**

In July, volatility created opportunities. In December, especially around the holidays, the market has been flat. Bitcoin barely moved 0.37% yesterday.

So my trader waited. Patiently. Systematically. Without emotion.

![Patience is the edge](/blog-images/powerball-vs-patience-03.webp)

---

## The Hardest Part of Trading Is NOT Trading

Here's what most people don't understand about successful trading:

The edge isn't in finding more trades. It's in having the discipline to *not* trade when conditions aren't right.

While millions of people *had* to buy Powerball tickets yesterday—regardless of the odds—my system made a different choice. It looked at the market, saw no edge, and did nothing.

That's not a bug. That's the feature.

**Emotional traders** would've forced trades out of boredom or FOMO.

**Gamblers** would've bought more tickets because "someone has to win."

**My autonomous system** did the math and sat on its hands.

---

## The Real Christmas Miracle

One person woke up a billionaire today. Good for them. Sincerely.

But here's the thing: I can't replicate their result. Neither can you. It was pure, random luck against astronomical odds.

What I *can* replicate:
- **985 trades** over 11 months
- **$4,907.48 in profit**
- **100% success rate**
- **Every trade on record**—you can check them yourself

![A better path forward](/blog-images/powerball-vs-patience-04.webp)

That's not luck. That's a system. And systems can be repeated.

---

## Changing the Legacy

The Powerball winner's life changed overnight. But for the millions who lost? Same financial position. Same habits. Same cycle repeating next week.

What if there was another path?

Not get-rich-quick. Not lottery dreams. Just systematic, boring, consistent growth.

That's what I've been showing all year at [MyRoboticTrader.com](https://myrobotictrader.com). Every trade. Every profit. Every "boring" day when the system does nothing.

Because sometimes doing nothing is the smartest trade you can make.

---

## See For Yourself

I publish every trade live. No screenshots. No cherry-picked results. Just real numbers you can verify yourself.

[Check out my live trading results](https://myrobotictrader.com)

The system I use is built on GoBabyTrade™ software, created by Ed Barsano. It's not magic—it's 25 years of trading logic, automated.

Ready to stop hoping and start building? [Learn how the system works](https://gobabytrade.com/432706BE)

---

*Merry Christmas. May your 2026 be systematic, not lucky.*`,category:"Anti-Gambling",metaDescription:"One person won $1.8 billion on Christmas Eve. Millions more tore up their tickets. Meanwhile, my autonomous trader did something radical: nothing."},{title:"Day Trading Is It Worth It? I Learned 47 Skills. Then I Found a Better Way.",slug:"day-trading-is-it-worth-it",published:!0,date:"2025-12-26T12:00:00Z",publishDate:"2025-12-26",heroImage:"/blog-images/day-trading-is-it-worth-it-hero.webp",imageAlt:"Day trading skills checklist - 47 skills to master before profitability",excerpt:"Day trading requires mastering 47+ skills before you stop losing money. RSI, MACD, Bollinger Bands, candlestick patterns, risk management... or you could use a system with 25 years of that knowledge already built in.",content:`# Day Trading Is It Worth It? I Learned 47 Skills. Then I Found a Better Way.

Here's what nobody tells you about day trading:

Before you make your first profitable trade, you need to master approximately **47 different skills, indicators, and concepts.**

I'm not exaggerating. Let me show you.

---

## The Day Trading Learning Curve (Stocks AND Crypto)

Whether you're trading stocks or crypto, here's what you need to learn:

**Chart Patterns (12+ to memorize):**
- Head and shoulders
- Double tops and bottoms
- Cup and handle
- Ascending/descending triangles
- Bull and bear flags
- Wedges (rising and falling)
- Channel patterns
- Support and resistance levels
- Trend lines
- Fibonacci retracements
- Gap analysis
- Volume profile

**Technical Indicators (15+ to understand):**
- RSI (Relative Strength Index)
- MACD (Moving Average Convergence Divergence)
- Bollinger Bands
- Moving averages (SMA, EMA, WMA)
- Stochastic oscillator
- Average True Range (ATR)
- On-Balance Volume (OBV)
- Ichimoku Cloud
- Parabolic SAR
- Commodity Channel Index (CCI)
- Williams %R
- ADX (Average Directional Index)
- VWAP (Volume Weighted Average Price)
- Pivot points
- Keltner Channels

**Candlestick Patterns (20+ formations):**
- Doji (and its 4 variations)
- Hammer and hanging man
- Engulfing patterns
- Morning and evening stars
- Three white soldiers / three black crows
- Harami patterns
- Shooting star
- Inverted hammer
- Spinning tops
- Marubozu
- Tweezers
- And at least a dozen more...

**Risk Management Concepts:**
- Position sizing
- Stop-loss placement
- Take-profit levels
- Risk-reward ratios
- Maximum drawdown limits
- Portfolio allocation
- Correlation analysis

**Trading Psychology:**
- Emotional discipline
- FOMO management
- Revenge trading prevention
- Loss acceptance
- Profit-taking discipline
- Overtrading recognition

**Platform & Execution:**
- Order types (market, limit, stop, trailing)
- Slippage understanding
- Fee structures
- Hot keys and shortcuts
- Multiple timeframe analysis
- News feed interpretation
- Economic calendar tracking

**Regulatory Knowledge:**
- Pattern day trader rules (stocks)
- Margin requirements
- Tax implications
- Wash sale rules
- Reporting requirements

![The 47 skills required for day trading profitability](/blog-images/day-trading-is-it-worth-it-01.webp)

---

## The Timeline Nobody Talks About

Let's be generous and say you're a fast learner.

| Phase | Duration | What Happens |
|-------|----------|-------------|
| Learning basics | 1-2 months | You feel confident, you know nothing |
| First real trades | 2-4 months | You lose money, learn why theory ≠ practice |
| Developing strategy | 4-8 months | You try everything, nothing works consistently |
| Finding your edge | 8-18 months | Maybe you find something, maybe you quit |
| Consistent profits | 18-36 months | IF you're in the top 10% |

**The statistics are brutal:**
- 80% of day traders lose money
- 70% quit within 2 years
- Average loss before quitting: $5,000-$10,000

And that's just the money. What about:
- The screen time (4-8 hours daily)?
- The stress?
- The missed life moments?
- The constant second-guessing?

![The brutal timeline and statistics of day trading](/blog-images/day-trading-is-it-worth-it-02.webp)

---

## Why I Stopped Learning

I started down this path. I bought the courses. I learned RSI and MACD. I practiced reading candlesticks.

Then I asked myself a simple question:

**Why am I trying to learn in 6 months what the market has been teaching for decades?**

The indicators work. The patterns are real. But they require:
- Years of practice to read correctly
- Emotional discipline I don't always have
- Time I'd rather spend elsewhere
- Constant attention to screens

What if someone had already done that work?

---

## 25 Years vs. 6 Months

A few years ago, a guy named Ed Barsano built something different.

Instead of teaching people to day trade, he built a system that **already knows** what 25 years of market data looks like.

[GoBabyTrade™](https://gobabytrade.com/432706BE) doesn't require you to:
- Learn 47 skills
- Recognize candlestick patterns
- Calculate RSI divergences
- Set stop-losses manually
- Fight your emotions
- Stare at screens all day

It just trades. Automatically. 24/7.

The system has processed decades of price patterns, volatility cycles, and market behavior. Every indicator I listed above? **Already baked in.**

![25 years of trading expertise vs 6 months of learning](/blog-images/day-trading-is-it-worth-it-03.webp)

---

## My Results (No Day Trading Required)

I've been running this system since January 2025.

Here's what happened while I learned exactly **zero** new indicators:

- **~1,000 trades executed**
- **$4,900+ in profits**
- **100% success rate on closed trades**
- **Zero emotional decisions**
- **Zero screen time required**

Every single trade is published on my site. No screenshots. No "trust me bro." Live data from my actual account.

The system trades while I sleep. While I walk my dog. While I'm at my day job. While I'm writing this post.

---

## The Real Question

"Is day trading worth it?"

Here's my honest answer:

**If you genuinely enjoy the process** — the learning, the screen time, the puzzle-solving — then maybe. Some people love it. It becomes their craft.

**If you just want the results** — the profits, the passive income, the financial progress — then no. There's a faster path.

I wanted the results. So I stopped trying to become something I'm not (a professional trader) and started using a system built by someone who already is.

---

## The Math That Changed My Mind

**Day Trading Path:**
- 12-24 months learning
- $5,000+ in likely losses while learning
- 4-8 hours daily screen time
- Maybe profitable, probably not

**Autonomous Trading Path:**
- Setup: Same day
- Learning curve: Near zero
- My result: $4,900+ profit in 11 months
- Screen time: Check results when I feel like it

I chose door #2.

![The math comparison - day trading vs autonomous trading](/blog-images/day-trading-is-it-worth-it-04.webp)

---

## What About You?

You're standing at the same fork I was.

Path A: Spend the next year learning RSI, MACD, Bollinger Bands, candlestick patterns, risk management, position sizing, and emotional discipline. Hope you're in the top 20% who actually make money.

Path B: Let a system with 25 years of built-in expertise do what it was designed to do. Check your results. Live your life.

I can't tell you which path is right for you.

But I can show you what Path B looks like — every trade, every profit, completely transparent.

**[See My Live Results →](https://myrobotictrader.com)**

---

## Ready to Stop Struggling?

Day trading is a skill. A real one. I respect people who master it.

But I'm not interested in spending 2 years and $10,000 to *maybe* become profitable.

I'd rather use a system that's already there.

If you're tired of learning indicators that don't seem to work...

If you're done watching YouTube gurus who make it look easy...

If you're ready for something that just *runs*...

[Start Trading Automatically - Save $1,000](https://gobabytrade.com/432706BE)

The indicators took Ed Barsano 25 years to master. You can access them today.

---

*This post is for educational purposes. Trading involves risk. I'm an affiliate of GoBabyTrade and earn a commission on referrals — but I only promote it because I use it myself, and every result I share is real.*`,category:"Education",metaDescription:"Day trading requires mastering 47+ skills before profitability. RSI, MACD, Bollinger Bands, candlestick patterns... or use a system with 25 years built in."},{title:"Drawing #47: A Powerball Christmas Story",slug:"powerball-christmas-47",published:!0,date:"2025-12-23T08:00:00Z",heroImage:"/blog-images/powerball-christmas-47-hero.webp",imageAlt:"Drawing #47 - Powerball's Christmas Record with $1.7 billion jackpot",excerpt:"No winner again. The jackpot climbs to $1.7 billion. And tomorrow is Christmas Eve. Here's what I genuinely wish for you this holiday season.",content:`# Drawing #47: A Powerball Christmas Story

**No winner again. The jackpot climbs to $1.7 billion. And tomorrow is Christmas Eve.**

---

Last night, millions of Americans watched the Powerball drawing with hope in their hearts.

The numbers came up: 3, 18, 36, 41, 54, and red Powerball 7.

And just like the 46 drawings before it... nobody won.

Tomorrow night—Christmas Eve—the 47th drawing will take place. A new all-time record for consecutive Powerball drawings without a jackpot winner.

The prize? $1.7 billion.

The odds? Still 1 in 292,200,000.

---

## The Numbers Tell a Story

Since September 6th, when two tickets split a $1.787 billion jackpot, here's what's happened:

- **47 consecutive drawings** (and counting)
- **Billions of tickets sold**
- **Jackpot winners: 0**
- **Dreams deferred: Millions**

Yes, 9 people won $1 million last night by matching five numbers. That's genuinely life-changing money for those folks, and I'm happy for them.

But for every million-dollar winner, there are tens of millions of people waking up this morning with losing tickets and lighter wallets.

![47 consecutive drawings without a jackpot winner](/blog-images/powerball-christmas-47-01.webp)

---

## Why People Play

Here's the thing I want to be honest about:

**I get it.**

People don't buy lottery tickets because they're bad at math. They buy them because they want *out*.

Out of the job that drains them. Out of the paycheck-to-paycheck cycle. Out of the feeling that no matter how hard they work, they'll never get ahead.

The lottery sells the most powerful product in the world: **hope**.

And on Christmas Eve? That hope burns even brighter. The fantasy of paying off your parents' mortgage. Surprising your kids with a college fund. Never worrying about money again.

Those aren't silly dreams. Those are beautiful dreams. Everyone deserves financial peace.

The lottery just isn't the path to get there.

![The lottery sells hope](/blog-images/powerball-christmas-47-02.webp)

---

## The Wish Behind the Ticket

When someone buys a Powerball ticket, here's what they're really saying:

*"I want my life to be different."*

*"I want to stop worrying."*

*"I want to build something for my family."*

Those wishes? **They're valid.** They're human. They're *good*.

The problem isn't the wish. The problem is the vehicle.

The lottery takes those beautiful hopes and converts them into a 1-in-292-million longshot. It transforms your dream of financial freedom into a $2 donation to state coffers.

What if there was a way to honor those same wishes—but with math on your side instead of against you?

![The wish behind the ticket](/blog-images/powerball-christmas-47-03.webp)

---

## A Different Kind of Christmas Gift

A few years ago, a guy named Ed Barsano built something remarkable.

Instead of chasing jackpots or gambling on price predictions, he created [GoBabyTrade™](https://gobabytrade.com/432706BE)—an AI-enhanced autonomous trading system that does something radical: it takes small, consistent profits from crypto market volatility, 24/7, without emotion.

No hoping. No wishing. No 1-in-292-million odds.

Just a system that works while you sleep.

I've been running it since January 2025, and I publish every single trade publicly on this site. Not because I have to—because I want you to see what's actually possible when you stop gambling and start systematizing.

**My 2025 so far:**
- ~1,000 trades executed
- $4,800+ in profits
- 100% success rate on closed trades
- Zero lottery tickets purchased

Is it as exciting as a $1.7 billion jackpot? No.

Is it real? Yes.

Ed didn't create a get-rich-quick scheme. He created a *system*—and that's a gift that actually keeps giving.

![A Gift That Actually Keeps Giving](/blog-images/powerball-christmas-47-wishes.webp)

---

## What I Actually Wish for You

Here's my genuine Christmas wish for everyone reading this:

**I hope your dreams come true.**

Not the "win the lottery" fantasy—but the *real* dreams underneath it.

- The dream of waking up without financial anxiety
- The dream of building something that lasts
- The dream of time freedom with the people you love
- The dream of a scoreboard that only goes up

Those dreams are achievable. Not through luck, but through systems.

If you buy a Powerball ticket tomorrow, I'm not going to judge you. It's $2. It's fun. It's Christmas.

But if you're tired of hoping and ready to start building?

There's another way.

---

## Merry Christmas

Whatever you're doing tomorrow night—whether you're watching the drawing, opening presents, or just being with people you love—I hope it's meaningful.

And I hope 2026 is the year you stop playing their game and start building your own.

The lottery will always be there, promising billions.

Your future is waiting for you to stop hoping and start executing.

**Merry Christmas.**

---

**Read the original:** [Christmas Miracle or Christmas Trap?](/blog/christmas-powerball-trap)`,category:"Anti-Gambling",metaDescription:"No winner again. The Powerball jackpot climbs to $1.7 billion for Christmas Eve. Here's what I genuinely wish for you this holiday season."},{title:"Christmas Miracle or Christmas Trap?",slug:"christmas-powerball-trap",published:!0,date:"2025-12-22T12:00:00Z",heroImage:"/blog-images/christmas-powerball-trap-hero.webp",imageAlt:"Elf lady at lottery machine - Christmas Powerball trap",excerpt:"Tonight's $1.6 billion Powerball drawing has millions dreaming of a Christmas miracle. Here's why hoping for lightning to strike isn't a wealth strategy.",content:`# Christmas Miracle or Christmas Trap?

Tonight, millions of Americans will gather around TVs and phones, clutching lottery tickets like children waiting for Santa.

The prize? $1.6 billion. The fourth-largest Powerball jackpot in history.

The odds? 1 in 292,200,000.

And yet, gas stations across the country are packed. Office pools are forming. Coworkers are already planning how they'd split the winnings.

It's the Christmas Escape Fantasy in full bloom.

---

## The Dream vs. The Math

Let's be honest about what's really being sold here.

**The Dream:**
- Quit your job Christmas morning
- Never work again
- Instant millionaire
- Finally tell your boss what you really think

It's intoxicating. I get it. Everyone wants out. Everyone dreams of financial freedom.

But here's what nobody talks about at the office lottery pool:

**The Math:**
- 1 in 292,200,000 odds
- You're 300x more likely to be struck by lightning
- 46 straight drawings without a winner (longest streak in Powerball history)
- After taxes, that $1.6B becomes roughly $400M (if you're the ONE)

![The Christmas Escape Fantasy](/blog-images/christmas-powerball-trap-01.webp)

That "if" is doing a lot of heavy lifting.

---

## 46 Drawings. Zero Winners.

This is the part that should make you pause.

The Powerball jackpot was last won on September 6th. Since then, there have been 45 drawings. Tonight will be the 46th.

That's the longest jackpot drought in Powerball's 33-year history.

Every single one of those drawings, millions of people bought tickets convinced *this* was the one. Every single time, they were wrong.

Not because they picked bad numbers. Not because they weren't lucky enough. Because the math doesn't care about hope.

1 in 292,200,000 is 1 in 292,200,000. Every. Single. Time.

---

## The Powerball Grinch

Here's the uncomfortable truth about tonight's drawing:

![The Powerball Grinch](/blog-images/christmas-powerball-trap-grinch.webp)

The lottery doesn't need to steal your Christmas dreams. You're handing them over willingly, $2 at a time.

Think about it:
- 100+ million Americans will buy tickets this week
- That's $200+ million flowing into a system designed to take your money
- 46 consecutive drawings have produced zero jackpot winners
- But the lottery always wins

The Grinch in this story isn't sneaking down your chimney. He's standing behind the counter at every gas station in America, smiling as you hand over your retirement fund in tiny increments.

---

## The Christmas Escape Fantasy Industrial Complex

Here's what's really happening:

The lottery isn't selling you a chance to win. They're selling you permission to daydream for 48 hours.

That $2 ticket buys you the right to imagine quitting your job, paying off your house, and never worrying about money again. It's a temporary emotional escape wrapped in Christmas lights and holiday music.

And there's nothing wrong with daydreaming.

But there's a massive difference between entertainment and strategy.

The problem is when people confuse the two. When the lottery ticket becomes the retirement plan. When "maybe I'll win" replaces "here's how I'll build."

---

## Meanwhile, a Different Approach

While everyone's refreshing lottery results tonight, my AI-enhanced autonomous trading system will be doing what it does every day:

- Executing trades based on rules, not hope
- Taking profits systematically
- Working while I sleep (and while I open presents)

![Two Christmas Gifts](/blog-images/christmas-powerball-trap-02.webp)

Here's my December so far: **23 trades executed, $161.08 in profit, 100% success rate.**

Not life-changing money. Not $1.6 billion. But real money, in my account, that I can actually spend.

Year-to-date: **985 trades, $4,907.48 in profit.**

No luck required. No 1-in-292-million odds. Just a system that executes.

---

## Two Christmas Gifts

Think of it this way:

**Gift #1: The Lottery Ticket**
- Cost: $2 per hope
- Odds: 1 in 292 million
- Expected result: Almost certainly $0
- Emotion on December 26th: Disappointment (again)

**Gift #2: A System**
- 985 trades executed without emotion
- 100% success rate on closed trades
- $4,907+ profit
- Works while you open presents

One is a gift. One is a gamble dressed like a gift.

---

## I'm Not Against Fun

Look, if you want to buy a Powerball ticket for entertainment, go for it. Seriously. 

Spend $2, daydream about yachts for a few days, have fun with it. That's a cheap movie ticket for your imagination.

But please, *please* don't confuse it with a wealth-building strategy.

Don't skip contributing to your 401k because "you might win."

Don't put off learning about investing because the lottery might solve everything.

Don't let the Christmas Escape Fantasy replace actual planning.

---

## The Real Christmas Miracle

You know what would actually be miraculous?

If everyone who bought a Powerball ticket this week instead put that money into something that compounds. Something with odds in their favor instead of against them.

$20 on lottery tickets this month? That's $240 a year. Over 10 years, that's $2,400 in pure hope-based spending.

$20 a month into a system that actually works? That's a different story entirely.

The real miracle isn't winning despite impossible odds. It's building something that doesn't require miracles at all.

---

## The Bottom Line

Tonight at 11 PM Eastern, someone might win $1.6 billion.

It won't be you. (Sorry, but statistically, it really won't be.)

And tomorrow morning, 99.999997% of ticket holders will wake up exactly where they started, plus a little poorer, plus a little more convinced that "next time" will be different.

Meanwhile, my system will have kept working. No drama. No hope required. Just execution.

Santa isn't real. Neither is your lottery retirement plan.

But systematic wealth building? That's as real as it gets.`,category:"Anti-Gambling",metaDescription:"Tonight's $1.6 billion Powerball drawing has millions dreaming of a Christmas miracle. Here's why hoping for lightning to strike isn't a wealth strategy."},{title:"The 130x Gambling Explosion Nobody's Talking About",slug:"prediction-markets-gambling-explosion",published:!0,date:"2025-12-20T12:00:00Z",heroImage:"/blog-images/prediction-markets-gambling-explosion-hero.webp",imageAlt:"Prediction markets grew 130x in 2 years - from $100M to $13B monthly volume",excerpt:`Prediction markets grew from $100M to $13B monthly in under 2 years. Here's why "financial innovation" is gambling's biggest rebrand.`,content:`# The 130x Gambling Explosion Nobody's Talking About

**Prediction markets grew from $100 million to $13 billion monthly in under 2 years. This isn't innovation. It's gambling's biggest rebrand ever.**

---

While you were watching Bitcoin prices and checking your 401k, something else exploded.

Prediction markets.

You might have heard of them during the 2024 election. Polymarket. Kalshi. Places where people "traded" on whether Trump would win or if the Fed would cut rates.

Sounds sophisticated, right? "Trading on outcomes." "Information markets." "Financial derivatives."

Here's what it actually is: **betting with a rebrand.**

And it just grew 130x in under two years.

---

## The Numbers Are Staggering

Let me show you what just happened:

| Period | Monthly Volume |
|--------|---------------|
| Early 2024 | ~$100 million |
| Mid 2024 | ~$500 million |
| Late 2024 (election) | ~$3 billion |
| November 2025 | **$13+ billion** |

Some reports put November 2025 at $14.5 billion.

That's **130x growth** in under two years.

For context:
- Polymarket went from 4,000 users to over 400,000
- Industry projections: **$1 trillion annually by 2030**
- Robinhood's prediction market product is their "fastest-growing revenue line ever"

This isn't organic growth. This is manufactured addiction finding a new wrapper.

![The 130x financial innovation - prediction market growth timeline](/blog-images/prediction-markets-gambling-explosion-01.webp)

---

## What Prediction Markets Actually Are

Strip away the financial jargon and here's what you're doing:

**Traditional sports betting:** "I bet $100 that the Chiefs win on Sunday."

**Prediction market version:** "I'm purchasing 100 contracts at $0.65 that resolve to $1.00 if the Chiefs win."

Same bet. Different vocabulary.

The outcome depends on something you can't control. You're wagering money on a binary result. If you're right, you profit. If you're wrong, you lose.

That's gambling. Period.

But by calling it "trading" and "contracts" and "derivatives," these platforms sidestep gambling regulations in most states.

---

## Robinhood's "Sports Derivatives" Loophole

Here's where it gets absurd.

Robinhood launched "event contracts" - prediction markets on sports outcomes. NFL games. NBA games. Player props. Parlays.

Their legal argument? **"It's not gambling. It's a regulated derivative instrument."**

Read that again. They rebranded betting on whether Travis Kelce scores a touchdown as a "derivative."

The result:
- **Legal in all 50 states** (sports betting requires state-by-state licensing)
- **No gambling commission oversight**
- **Processed over 2 billion contracts** since launch
- **NFL banned all league personnel** from using the platform
- **Nevada, New Jersey, and Massachusetts** are suing

The NFL - which has massive gambling partnerships - banned their own employees from Robinhood's platform.

That should tell you everything.

![Same thing different name - sports betting to legal sportsbooks to prediction markets](/blog-images/prediction-markets-gambling-explosion-02.webp)

---

## The Rebrand Playbook

This isn't new. It's just the latest iteration:

**1990s:** Sports betting (illegal in most states)

**2018:** Legal sportsbooks (DraftKings, FanDuel) - "It's daily fantasy sports!"

**2024:** Prediction markets (Polymarket, Robinhood) - "It's financial derivatives!"

Each rebrand achieves the same thing: access to markets that gambling laws would otherwise restrict.

The house still wins. The math still doesn't work in your favor. The dopamine hits are still engineered to keep you coming back.

They just found better lawyers.

---

## The Human Cost Nobody Mentions

When gambling was restricted to casinos and state lotteries, there was friction. You had to drive somewhere. You had to make a deliberate choice.

Now?

- Open your phone
- Tap the Robinhood app
- "Trade" on tonight's game
- Do it again. And again. And again.

The same app where people check their retirement accounts is now offering sports gambling with a finance veneer.

Prediction market platforms use the same psychological tricks as casinos:
- Variable reward schedules
- Near-miss mechanics
- Social proof ("10,000 people are trading this!")
- Gamification (streaks, achievements)

But because it's called "trading," it feels productive. Sophisticated. Smart.

It's not. It's gambling with better marketing.

---

## The Escape Fantasy Industrial Complex

Here's what's actually happening in December 2025:

- **Powerball** is at $1.5 billion (odds: 1 in 292 million)
- **Prediction markets** are processing $13 billion monthly (platform takes a cut on every trade)
- **Sports betting** is a $30+ billion US market (ads everywhere, "responsible gaming" disclaimers in tiny print)
- **Office workers** are sitting in year-end reviews wondering if this is their life now

Everyone wants out.

The paths being offered:

1. **Lottery:** 1 in 292 million odds. Hope is a business.
2. **Prediction markets:** 130x growth, "it's not gambling." Perception is profitable.
3. **Sports betting:** $30B market. Distraction is demanded.
4. **Systematic trading:** Verifiable results, no predictions required. Process is paramount.

Three of these sell hope and possibility.

One of these is actually a system.

![The escape fantasy industrial complex - four paths in December 2025](/blog-images/prediction-markets-gambling-explosion-03.webp)

---

## Who Actually Wins in Prediction Markets?

Let's be clear about the economics:

**Winners:**
- Platform operators (fees on every trade)
- Market makers (sophisticated traders providing liquidity)
- Early liquidity providers (got in before the crowds)
- The 5% who got lucky (survivorship bias - you hear about them, not the losses)

**Losers:**
- Everyone else
- The "skilled analysts" who think they have an edge
- The "I did my research" crowd
- The "just one more bet" people

Just like every other form of gambling, most participants lose money over time.

The house always wins. Even when the house calls itself a "prediction market."

![Who wins in prediction markets - the math is the same as gambling](/blog-images/prediction-markets-gambling-explosion-04.webp)

---

## What Actually Builds Wealth

I'm not here to judge anyone who gambles recreationally. A $20 bet on a game you're watching? Entertainment.

But if you're treating prediction markets as an income strategy or an "investment"?

That's where we need to talk.

I use [GoBabyTrade™](https://gobabytrade.com/432706BE), an AI-enhanced autonomous trading system created by 25-year trading veteran Ed Barsano. It's been running for almost a year:

- **981 trades** executed
- **$4,888 in profit** (every trade is public)
- **100% success rate** on closed trades
- **Zero predictions required**
- **Zero hours spent analyzing "markets"**

GoBabyTrade™ doesn't bet on outcomes. It doesn't predict elections or sports scores. It buys systematically on dips and sells when positions profit.

It's boring. It's slow. It works.

While prediction markets are celebrating 130x growth in gambling volume, my scoreboard just keeps going up.

---

## The Bottom Line

Prediction markets aren't evil. They're not scams.

But they ARE gambling, regardless of what the marketing says.

- Calling a bet a "contract" doesn't change the math
- Calling gambling "trading" doesn't create an edge
- 130x growth means 130x more money flowing from many losers to few winners

If you want to bet on sports or elections for entertainment, go ahead. Just know what you're doing.

But if you're looking for actual wealth building? For income that doesn't depend on predicting unpredictable events?

There's a different path. A boring one. One where the scoreboard only goes up.`,category:"Anti-Gambling",metaDescription:`Prediction markets grew 130x in 2 years - from $100M to $13B monthly. Here's why this "financial innovation" is gambling's biggest rebrand ever.`},{title:"The Lottery Lady Called My Numbers (They Weren't What She Expected)",slug:"powerball-lottery-vs-systematic-trading",published:!0,date:"2025-12-19T14:00:00Z",heroImage:"/blog-images/powerball-lottery-lady-hero.webp",imageAlt:"Lottery announcer showing trading results instead of Powerball numbers",excerpt:"The Powerball jackpot hit $1.5 billion this month. Everyone's buying tickets. I ran the math on what happens when you invest that lottery money instead - and why my 981-trade win streak matters more than any jackpot.",content:`# The Lottery Lady Called My Numbers (They Weren't What She Expected)

**$1.5 billion. That's the Powerball jackpot everyone's chasing.**

And somewhere right now, someone is standing in line at a gas station, clutching a $2 bill, dreaming about quitting their job.

I get it. The fantasy is intoxicating.

But let me show you some different numbers. Numbers that actually pay out.

---

## The Math Nobody Wants to Hear

Let's start with the uncomfortable truth:

**Powerball odds:** 1 in 292,201,338

To put that in perspective:
- You're more likely to be struck by lightning twice
- You're more likely to become a movie star
- You're more likely to be killed by a vending machine

But here's the number that really matters:

**Expected return on a $2 Powerball ticket:** Approximately -$1.50

That's right. For every $2 you spend, you can expect to lose about $1.50 on average. The lottery isn't a wealth-building strategy. It's a tax on hope.

![Powerball vs Trading Results](/blog-images/powerball-lottery-lady-03.webp)

Now let's look at some different numbers:

**[GoBabyTrade™](https://gobabytrade.com/432706BE) autonomous trading system:**
- 981 trades executed
- 981 trades won
- 100% success rate on closed trades
- $4,888.72 in profit

One of these is gambling. One of these is math.

---

## The $41,600 Question

Here's a thought experiment that should make you uncomfortable:

The average American spends about $220 per year on lottery tickets. Some demographics spend much more - up to $600-700 per year.

Let's be conservative and say someone spends $20 per week on lottery tickets and scratch-offs. That's $1,040 per year.

Over 40 years? **$41,600.**

Forty-one thousand dollars. Spent on tickets with a negative expected return.

Now imagine putting that same $20 per week into something that actually compounds.

![Change the Channel - Lottery vs Trading](/blog-images/powerball-lottery-lady-01.webp)

---

## What If You Invested It Instead?

I'm not here to give financial advice. But I can share what I've observed:

**$20/week in lottery tickets for 40 years:**
- Total spent: $41,600
- Expected return: Close to $0 (maybe a few small wins)
- Net result: -$40,000+

**$20/week in a simple index fund (7% average return) for 40 years:**
- Total invested: $41,600
- Approximate value: ~$220,000

**$20/week using systematic trading strategies:**
- Results vary, but my system has averaged consistent monthly returns
- The key difference: positive expected value vs. negative expected value

The lottery sells you a 1-in-292-million chance at life-changing money.

Systematic investing gives you a near-certain path to life-improving money.

One is a fantasy. One is a plan.

---

## Why People Choose the Fantasy

I don't say this to judge. I understand the appeal.

When you're working a job you hate, when bills are piling up, when the future feels hopeless - that $2 ticket represents something powerful: **the possibility of escape.**

And that's exactly what the lottery is selling. Not probability. Possibility.

But here's what I've learned: the same energy that makes you dream about winning the lottery could be channeled into something real.

![Technical Difficulties - Lottery Lady](/blog-images/powerball-lottery-lady-02.webp)

The difference is patience.

The lottery promises instant transformation. Systematic wealth-building promises gradual improvement. One sounds exciting. The other sounds boring.

But boring wins.

---

## My Actual Numbers (No Lucky Picks Required)

I started tracking my autonomous trading system almost a year ago. Here's what happened:

- **981 total trades** executed automatically
- **$4,888.72** in profit (every trade is public)
- **100%** success rate on closed trades
- **0** lottery tickets purchased
- **0** lucky numbers needed

The system doesn't hope. It doesn't pray. It doesn't watch lottery drawings with crossed fingers.

It executes. Every day. Based on math, not luck.

Is $4,888 as exciting as $1.5 billion? Obviously not.

But $4,888 is real. It's in my account. And it happened while I was sleeping, working, living my life.

The jackpot winner? They don't exist yet. Statistically, they might never exist (the odds of NO winner in a given drawing are significant).

---

## The Real Winning Numbers

Here are the numbers the lottery lady should be calling:

- **981** - trades executed
- **100%** - win rate
- **$4,888.72** - profit
- **0** - predictions required
- **12** - months of consistent results

These aren't random. They're not lucky. They're the result of a system that executes without emotion, without hope, without watching any drawings.

---

## The Choice

Look, I'm not going to tell you to never buy a lottery ticket. If you can afford $2 for entertainment and a daydream, that's your business.

But if you're buying lottery tickets as a financial strategy? If you're spending $20, $50, $100 a week hoping for an escape?

That money could be building something real.

The lottery sells hope. Systematic trading sells process.

Hope feels better in the moment. Process builds wealth over time.

---

## One Last Thought

The Powerball jackpot is $1.5 billion. The odds are 1 in 292 million.

My trading system has executed 981 trades with a 100% success rate.

One of these requires a miracle.

One of these requires patience.

I know which one I'm betting on.`,category:"Anti-Gambling",metaDescription:"The Powerball jackpot hit $1.5 billion. Everyone's buying tickets. Here's why my 981-trade winning streak matters more than any lottery fantasy."},{title:"Robinhood Made Gambling Look Like Trading. I Made Trading Look Like a Job.",slug:"robinhood-gambling-vs-systematic-trading",published:!0,date:"2025-12-18T12:00:00Z",heroImage:"/blog-images/robinhood-gambling-vs-system-hero.webp",imageAlt:"Side-by-side comparison of gambling disguised as trading versus systematic trading approach",excerpt:"It's year-end review season. Everyone wants out. Robinhood is calling sports betting 'derivatives.' The Powerball is at $1.5 billion. Almost nobody has a system.",category:"Anti-Gambling",metaDescription:"Robinhood rebranded sports betting as 'financial derivatives' to operate in all 50 states. Here's why systematic trading beats gambling with a rebrand.",content:`# Robinhood Made Gambling Look Like Trading. I Made Trading Look Like a Job.

*It's year-end review season. Everyone wants out. Almost nobody has a system.*

---

## The Office Conversation Nobody Will Have

It's mid-December. Your manager scheduled a "quick sync" about your annual review. You're supposed to reflect on your accomplishments, your growth areas, your goals for next year.

But here's what's actually running through your head:

*Is this it? Another year of this? Another 52 weeks of proving I deserve my own job?*

So you do what millions of Americans do. You stop at the gas station on the way home. You buy a Powerball ticket.

**$1.5 billion jackpot. 44 consecutive drawings without a winner. Odds: 1 in 292.2 million.**

And for $2, you buy the fantasy of walking into that meeting tomorrow and saying: "I'm out."

![The Escape Fantasy Industrial Complex](/blog-images/robinhood-gambling-vs-system-01.webp)

## Robinhood Figured Out the Same Thing

Here's what most people missed this week while watching the Powerball number climb:

Robinhood just announced they're expanding sports betting—excuse me, "sports prediction markets"—to include NFL player props and combination contracts. Parlays. The most casino-like product in sports gambling.

They're calling it their **"fastest-growing product line by revenue ever."**

They've processed over **2 billion contracts** since launch.

The NFL banned all league personnel from using the platform.

Nevada, New Jersey, and Massachusetts are suing them.

And Robinhood's defense? **"It's not gambling. It's financial derivatives."**

Read that again.

They rebranded betting on whether Travis Kelce scores a touchdown as a "regulated derivative instrument." Because if you call a slot machine a "randomized outcome contract," suddenly it's finance.

![Robinhood's Not Gambling Gambling](/blog-images/robinhood-gambling-vs-system-03.webp)

The same company that "democratized investing" by letting people buy fractional shares is now "democratizing" gambling by calling it trading.

And it's working. Because the desire to escape is that strong.

## The Escape Fantasy Industrial Complex

Here's what's actually happening in America right now:

- **$1.5 billion** sitting in a Powerball jackpot (odds: 1 in 292 million)
- **$13 billion** monthly volume in prediction markets (up from $100 million in early 2024)
- **Robinhood** offering "sports derivatives" in all 50 states, bypassing gambling laws
- **Office workers** sitting in year-end reviews wondering if this is their life now

Everyone wants out. The paths offered:

1. **Lottery**: 1 in 292 million odds
2. **Robinhood "trading"**: Sports gambling with a stock app UI
3. **Crypto moonshots**: Hope your meme coin 100x's
4. **The system**: Use something that compounds for you

Three of these are gambling wearing different costumes.

One of these is boring, slow, and actually works.

![Hope vs System](/blog-images/robinhood-gambling-vs-system-04.webp)

## The Part Where I Show My Receipts

I'm not going to preach about gambling. I've wasted money on dumb stuff too.

But I will tell you what I actually did instead:

I set up an AI-enhanced autonomous trading system. Not a "robot" that promises 1000% returns. Not a signal group. An actual systematic approach to trading crypto that removes me from the decision-making process.

Here's what that looks like:

- **981 trades** executed this year
- **$4,888.72** in profit
- **100% win rate** (the system only exits at profit or continues holding)
- **Zero emotional decisions**
- **Zero 2am chart-watching**
- **Zero hoping, praying, or picking lucky numbers**

Is $4,888 going to change my life? No.

Is it more than I'd have made buying Powerball tickets twice a week for a year? **Yes, by about $4,680.**

But here's the actual point: **The scoreboard only goes up.**

Every month, the number gets bigger. Not because I got lucky. Not because I picked the right meme coin. Because a system executed a process over and over and over.

## The Year-End Review You Actually Need

Your manager wants to know what you accomplished this year.

Here's a better question: **What system do you have working for you while you sleep?**

- Not "I saved money" → "I have $X automatically invested every paycheck"
- Not "I want passive income" → "I have a system generating $X monthly"
- Not "I want to quit my job" → "My side income covers X% of my expenses"

The people who escape aren't the ones who got lucky. They're the ones who set up boring systems that compound.

Robinhood wants you to think gambling is trading.

The lottery wants you to think luck is a strategy.

Your job wants you to think annual reviews are about your performance (they're about their budget).

None of them want you to set up something that actually sets you free.

## The Math That Nobody Wants to Hear

![The Math Nobody Wants to Hear](/blog-images/robinhood-gambling-vs-system-math.webp)

Let's say you spend $20/week on lottery tickets and Robinhood "prediction markets."

- **Annual cost**: $1,040
- **Expected return**: Approximately $0 (actually negative, but let's be generous)
- **Time spent**: Several hours checking numbers, watching games, hoping

Now let's say you put that same $20/week into a systematic trading approach with a 5% monthly return:

- **Year 1**: ~$1,268
- **Year 2**: ~$2,790
- **Year 3**: ~$4,634
- **Year 5**: ~$9,742

The lottery offers a 1-in-292-million chance at life change.

Systematic trading offers a 100% chance at slow, boring, compounding wealth.

One of these makes for a good Instagram story.

The other actually works.

## What I'm Actually Suggesting

I'm not telling you to sign up for anything. I'm telling you to ask yourself one question:

**Do you have a system, or do you have hope?**

Hope is buying a Powerball ticket.
Hope is thinking Robinhood "derivatives" are different from DraftKings.
Hope is waiting for your annual review to go well.

A system is something that runs whether you're hopeful or not.

I use [GoBabyTrade™](https://gobabytrade.com/432706BE). It's not exciting. It doesn't make good TikTok content. Nobody's going to congratulate me at a party for my "AI-enhanced autonomous trading system."

But every month, the number goes up.

And I've never once had to sit in a meeting and justify my existence to get it.

---

*If you want to see the system I use—the actual setup, the real numbers, the boring process—check out my live results. No hype. No "get rich quick." Just the systematic approach that's worked for me.*

[Learn how the system works →](https://myrobotictrader.com)

---

**Disclaimer**: Trading involves risk. Past performance doesn't guarantee future results. This is my personal experience, not financial advice. I use an affiliate link above because I genuinely use and believe in this system—if you sign up, I may receive compensation at no extra cost to you.`},{title:"100x Leverage Is Not Trading. It's a Casino With Extra Steps.",slug:"100x-leverage-gambling-trap",published:!0,date:"2025-12-15T12:00:00Z",heroImage:"/blog-images/100x-leverage-gambling-trap-hero.webp",imageAlt:"100x leverage crypto trading exposed as gambling - the math BexBack hopes you skip",excerpt:"BexBack promises 500% returns with no KYC and 100x leverage. Here's what their help docs reveal: bonuses that disappear when you're losing, an app Apple rejected, and liquidation warnings that aren't guaranteed.",content:`# 100x Leverage Is Not Trading. It's a Casino With Extra Steps.

**BexBack promises 500% returns with "no KYC." Here's the math they're hoping you skip.**

---

A crypto exchange just launched a campaign promoting 100x leverage, no identity verification, and a "double deposit bonus."

They're calling it "financial freedom."

I'm calling it what it actually is: a casino that doesn't have to follow casino rules.

---

## The Pitch Sounds Amazing

Here's how BexBack markets their platform:

- **100x leverage** – Turn $100 into $100,000 in trading power
- **No KYC** – Trade anonymously in minutes
- **100% deposit bonus** – Deposit 1 BTC, trade with 2 BTC
- **500% ROI** – If Bitcoin moves 5%, you make 500%

Sounds incredible, right?

Now here's the math they left out.

---

## The Math They Don't Advertise

With 100x leverage, you control 100 times your actual money.

That's the upside they promote.

Here's the downside they bury:

**A 1% move against you = 100% loss.**

Not 1% loss. ONE HUNDRED PERCENT.

Your entire position. Liquidated. Gone.

Bitcoin moves 1% against you – which happens multiple times per hour – and you're wiped out.

Let me put that another way:

| **Bitcoin Move** | **Your Result at 100x** |
|------------------|-------------------------|
| +5% | +500% profit |
| +1% | +100% profit |
| -0.5% | -50% loss |
| **-1%** | **-100% = LIQUIDATED** |

They show you the 5% scenario. They don't mention that Bitcoin regularly swings 1-3% in a single hour.

![The math behind 100x leverage - 1% move equals total liquidation](/blog-images/100x-leverage-math.webp)

---

## The "Double Deposit Bonus" Trap

BexBack offers a 100% deposit bonus. Sounds like free money.

But read the fine print: **You can't withdraw the bonus.**

You can only use it as margin. Which means you can take on MORE risk. More leverage. More positions that can get liquidated.

The bonus isn't a gift. It's bait to get you playing longer.

It's exactly like casino "free play" credits – designed to keep you at the table until you lose your real money.

---

## The Bonus Disappears When You Need It Most

But wait – it gets worse.

Buried in BexBack's help documentation is this clause:

> "When the net account value is < reward * 150%, the system will notify the user to make a margin call. If the user does not make a margin call in time, **the bonus may be removed.**"

Read that again. When you're losing, they take away your bonus.

Here's how this trap actually plays out:

| Step | What Happens |
|------|--------------|
| 1 | You deposit 0.1 BTC |
| 2 | They "give" you 0.1 BTC bonus (now 0.2 BTC) |
| 3 | You open a bigger position because you feel rich |
| 4 | Market moves against you |
| 5 | Account drops below 0.15 BTC (150% of bonus) |
| 6 | **They remove your bonus** |
| 7 | Now you're underwater AND margin-called |
| 8 | Liquidation |

The bonus isn't reducing your risk. It's **accelerating your liquidation** when things go wrong.

Think about that. They advertise the bonus as a way to "mitigate the risk of forced liquidation." But the moment you're actually at risk of liquidation – when you'd need that buffer most – they yank it away.

It's like a casino giving you $100 in chips, encouraging you to bet bigger, then taking the chips back when you're down $50. "Good luck with that position you already opened!"

This isn't a bonus. It's a trapdoor.

![The bonus trap - 8 steps to liquidation](/blog-images/bonus-trap-steps.webp)

---

## No KYC = No Protection

BexBack markets "No KYC" as freedom. No identity verification. Trade anonymously.

Here's what that actually means:

- **No regulatory oversight** – They're not accountable to anyone
- **No consumer protection** – If they exit scam, you have no recourse
- **No dispute resolution** – Your word against theirs
- **No withdrawal guarantees** – They can freeze your funds anytime

Traditional casinos have gaming commissions. Banks have FDIC insurance. Even regular crypto exchanges have some accountability.

BexBack has... an email address in Hong Kong.

They're not avoiding KYC for YOUR benefit. They're avoiding it so there's no paper trail when things go wrong.

---

## The App Apple Won't Touch

Here's where it gets genuinely alarming.

BexBack's iOS app isn't available in the App Store. Their own help documentation explains why – and how to install it anyway:

> "Due to regulatory requirements in certain regions, BexBack's no KYC exchange app is not directly available for download from the Apple App Store."

Translation: Apple rejected them.

Their solution? Sideloading via "enterprise certificates" – a method designed for corporations to distribute internal apps to their own employees. Not for public crypto exchanges to bypass App Store security.

Here's what they're asking you to do:

1. Download the app outside the App Store
2. Go to Settings → General → Device Management
3. Find the unknown developer
4. Click "Trust" to disable your phone's security protections
5. Manually install updates (no App Store security scanning, ever)

**This is the same installation method used to distribute malware.**

Apple actively hunts down and revokes enterprise certificates being abused this way. Which means:

- You sideload the app
- You deposit crypto
- You trust an unknown developer with access to your device
- One morning, Apple revokes the certificate
- The app stops working
- Your funds are... where exactly?

They even acknowledge this in their docs: "Manual updates need to be done manually. We will notify you via email."

So your access to your own money depends on:
1. A certificate Apple could revoke any day
2. Email notifications from a no-KYC exchange
3. Hoping the app still works when you need to withdraw

Legitimate exchanges – Coinbase, Kraken, even Binance.US – are in the App Store. They passed Apple's security review. They get automatic updates. They don't ask you to "trust" unknown developers.

BexBack is asking you to bypass every security protection your phone has. For a trading app. That holds your money.

This isn't a red flag. This is a red flag factory.

![The sideloading security risk comparison](/blog-images/sideload-risk.webp)

---

## The Demo Account Hook

They offer a "10 BTC demo account" to practice.

This is classic gambling psychology.

You "win" with fake money. Your brain releases dopamine. You think you've figured out the system. Then you deposit real money.

Except now it's real. And the market doesn't care about your demo success.

Every sports betting app uses the same playbook. Give away free wins, create false confidence, then take the real money.

---

## "We Might Not Warn You"

BexBack's forced liquidation policy contains this remarkable admission:

> "Margin Call notifications on BexBack are sent by email but **are not always guaranteed** due to the changeable market. As such, it is important to proactively monitor your margin level."

Read that again. They're telling you – in their own help documentation – that they might liquidate your entire position without warning.

Here's what happens at 100x leverage:

- Bitcoin drops 1%
- Your margin level craters
- You hit the 30% liquidation threshold
- The system auto-liquidates your position
- The email notification arrives... maybe... eventually

Their advice? "Proactively monitor your margin level."

With 100x leverage, in a market that moves 24/7, where 1% swings happen multiple times per hour, your position can go from healthy to liquidated in *minutes*.

You'd need to watch your screen constantly. No sleep. No bathroom breaks. No life.

And even then, they've pre-emptively told you: if the notification doesn't come in time, that's on you. They said it wasn't guaranteed. You agreed to the terms.

This isn't trading infrastructure. This is a legal liability shield disguised as a help article.

---

## What the Experts Say

This isn't just my interpretation of their help docs. Financial media and compliance experts have flagged the same risks:

**On liquidation cascades:**
High leverage positions create a domino effect. When Bitcoin drops and liquidations trigger, those forced sells push the price lower, triggering more liquidations. Your "safe" position gets swept up in a cascade you didn't cause.

**On whale manipulation:**
No-KYC platforms with thin order books are hunting grounds for large traders. They can create "abnormal wicks" – sudden price spikes designed to liquidate high-leverage positions – then buy back cheaper. At 100x leverage, you're the prey.

**On regulatory risk:**
These platforms operate outside regulatory frameworks, which means they can be blocked, fined, or cut off from banking infrastructure without warning. One day you have access to your funds. The next day, you don't.

**On the tax trap:**
No KYC doesn't mean no taxes. When you move profits back to regulated banks, you'll face questions about where the money came from. The anonymity that felt like freedom becomes a compliance headache.

Business Insider covered BexBack directly, calling it a "high-stakes gamble" that "fuels debate on risk and regulation." When financial media is writing headlines like that, maybe listen.

![Red flag summary from BexBack's own documentation](/blog-images/100x-leverage-red-flags.webp)

---

## What Systematic Trading Actually Looks Like

While BexBack users are getting liquidated on 1% moves, here's what I'm doing with [GoBabyTrade™](https://gobabytrade.com/432706BE):

- **979 trades** executed since January
- **$4,880 in profits** – every trade public
- **100% success rate** on closed positions
- **Zero leverage** – no liquidation risk
- **No 3 AM panic** – the system runs while I sleep

I don't need 100x leverage because I'm not gambling on price direction.

GoBabyTrade™ is an AI-enhanced autonomous trading system created by 25-year trading veteran Ed Barsano. It buys dips systematically and sells when positions profit. It doesn't predict. It executes.

When Bitcoin drops 1%, I don't get liquidated. I get cheaper inventory.

---

## The Comparison They Don't Want You to See

| | **100x Leverage Trading** | **Systematic Autonomous Trading** |
|---|---|---|
| **Win condition** | Guess direction correctly AND time it perfectly | Wait for profit on each trade |
| **1% adverse move** | 100% loss (liquidated) | Unrealized paper loss (temporary) |
| **Stress level** | Watching charts 24/7 | Check results when you feel like it |
| **Track record** | Most lose everything | 979 trades, 100% closed success |
| **Verification** | "Trust me bro" | Every trade public in real-time |

One is designed to extract money from you.

One is designed to build wealth systematically.

![Comparison: 100x leverage vs systematic trading](/blog-images/leverage-vs-systematic.webp)

---

## The Bottom Line

100x leverage isn't sophisticated trading. It's not "maximizing capital efficiency." It's not financial freedom.

It's a slot machine with better marketing.

The house edge on a slot machine is about 5-15%. The effective house edge on 100x leverage – where a 1% move wipes you out in a market that moves 1% constantly – is catastrophic.

BexBack doesn't make money when you win. They make money when you lose.

And with 100x leverage, you will lose. It's mathematics.

---

If you want to build wealth with crypto, there's a better way than praying Bitcoin moves 5% in your direction before it moves 1% against you.

My AI-enhanced autonomous trading system has generated $4,880 in profits across 979 trades. No leverage. No liquidation risk. No 3 AM chart watching.

Check the live results at myrobotictrader.com – every trade, every profit, fully transparent.

The scoreboard only goes up. And I've never been liquidated.`,category:"Anti-Gambling",metaDescription:"BexBack promises 500% returns with 100x leverage and no KYC. Their own help docs reveal the traps: bonuses that vanish when you're losing, an app Apple rejected, and liquidation warnings that aren't guaranteed."},{title:"The Crypto Strategies Everyone's Excited About (And Why I Chose Boring Instead)",slug:"crypto-strategies-everyone-excited-about",published:!0,date:"2025-12-13T12:00:00Z",heroImage:"/blog-images/crypto-strategies-boring-hero.webp",imageAlt:"Comparison of exciting crypto strategies vs boring autonomous trading",excerpt:"Airdrops, perps, and options — everyone on the money club call wanted to learn them. Here's what I discovered about each one, and why I chose the boring path instead.",category:"Education",metaDescription:"Airdrops, perps trading, and options explained. What I learned about each crypto strategy and why I chose boring autonomous trading for actual passive income.",content:`# The Crypto Strategies Everyone's Excited About (And Why I Chose Boring Instead)

*Reading time: 7 minutes*

---

I was on a money club call this week. The leader asked what topics people wanted to explore next.

The answers came quick:

- "Airdrops — I keep hearing about free money"
- "Perp trading — I want to understand leverage"
- "Options — seems like that's where the real gains are"

All valid curiosities. Smart people wanting to learn new strategies.

I've looked into all three myself. Read the books. Watched the tutorials. Did the math.

And I decided to skip all of them.

Not because they're scams. Not because they don't work. But because they don't fit what I actually want: **passive income that doesn't require me to watch screens.**

Here's what I learned about each one — so you can make your own informed decision.

---

## Airdrops: "Free Money" With Hidden Costs

### What they are:

An airdrop is when a crypto project distributes free tokens to early users, wallet holders, or people who complete specific tasks. The idea is to reward early supporters and create buzz.

### The appeal:

- Free tokens just for participating
- Some airdrops have been worth thousands
- Feels like being rewarded for being early

### What I learned:

**The time investment is real.**

Most valuable airdrops require "grinding" — completing tasks, using protocols, making transactions, joining Discords, posting on social media. We're talking 10-40+ hours of work before you even know if you'll get anything.

**The math often doesn't work out.**

| Scenario | Hours Invested | Airdrop Value | Effective Hourly Rate |
|----------|---------------|---------------|----------------------|
| Great airdrop | 20 hours | $2,000 | $100/hr ✓ |
| Average airdrop | 30 hours | $150 | $5/hr |
| No airdrop | 40 hours | $0 | $0/hr |

The problem? You don't know which scenario you're in until months later. Most fall into the average or zero category.

**The security risks are real.**

To qualify for airdrops, you often need to connect your wallet to new protocols and websites. Every connection is a potential attack vector. People lose crypto to fake airdrop claim sites regularly — not because they're careless, but because the scams are sophisticated.

**My take:**

Airdrops can be legitimate windfalls. But treating them as an income strategy means trading your time for uncertain rewards while exposing your wallet to risk. That's not passive income — that's a part-time job with no guaranteed paycheck.

---

## Perps: Leverage Is a Double-Edged Sword

### What they are:

Perpetual futures ("perps") let you trade crypto with leverage. Instead of buying $1,000 of Bitcoin, you can control $10,000 worth (10x leverage) or even $100,000 worth (100x leverage).

Technically, you can trade perps without leverage at 1x. But nobody does that — if you wanted 1x exposure, you'd just buy the actual asset. It's simpler and you don't pay funding rates.

The appeal of perps IS the leverage. And that's exactly where the risk comes from.

### The appeal:

- Amplified gains on correct predictions
- Can profit when prices go down (shorting)
- Feels like the "pro" way to trade

### What I learned:

**The math cuts both ways.**

With 10x leverage:
- Bitcoin goes up 10% → You double your money (+100%)
- Bitcoin goes down 10% → You lose everything (-100%, liquidated)

That 10% move? Bitcoin does that regularly. Sometimes in a single day. Sometimes while you're sleeping.

**Liquidation is brutal and fast.**

When your position moves against you enough, the exchange automatically closes it to prevent further losses. You don't get a warning at 3 AM. You wake up to zero.

**Funding rates eat your profits.**

Holding a leveraged position costs money — funding rates are charged every 8 hours. Even if you're "right" about the direction, fees can consume your gains over time.

**It requires constant attention.**

This is the dealbreaker for me. Perps trading means:
- Watching charts
- Setting stop losses
- Managing positions
- Being available when markets move

That's not passive. That's a job. A stressful one.

**My take:**

Some traders are profitable with perps. They have risk management systems, years of experience, and treat it like the full-time job it is. But "I want to learn perps" often becomes "I got liquidated at 3 AM" faster than people expect.

---

## Options: Smarter Gambling Is Still Gambling

### What they are:

Options give you the right (not obligation) to buy or sell an asset at a specific price by a specific date. They're popular in stock trading and increasingly in crypto.

### The appeal:

The Najarian brothers (CNBC's "Halftime Report" regulars) wrote a book called "It's Not an Option" promoting options trading. Their pitch:

- 356% returns vs. 3.36% stock returns
- "More profitable, efficient, and less risky"
- Control more with less capital

Sounds amazing, right?

### What I learned:

**The fine print matters.**

From their own website: *"Jon & Pete are professional traders. Their results are not typical. Past performance is not an indication of future results."*

They're showing cherry-picked wins. The 356% return examples don't show the options that expired worthless.

**Time decay works against you.**

Options have expiration dates. Every day that passes, your option loses value (theta decay) — even if the stock doesn't move. You're not just betting on direction; you're betting on direction *within a timeframe*.

**It requires early mornings and active management.**

Stock market opens at 9:30 AM Eastern. Options traders are often up at 5-6 AM checking pre-market, planning trades, watching for news. West coast? That's a 6:30 AM market open.

This hit home for me. I asked myself: "Why do options traders have to wake up so early?"

Because markets have hours. Because timing matters. Because it's active, not passive.

**The learning curve is steep.**

Options involve:
- Strike prices
- Expiration dates
- The Greeks (delta, theta, gamma, vega)
- Implied volatility
- Multiple strategy types (calls, puts, spreads, straddles, iron condors...)

It's genuinely complex. That complexity is often marketed as sophistication, but it's really just more ways to lose money if you don't know what you're doing.

**My take:**

Options *can* be used to manage risk and generate income. Professional traders do it successfully. But "I want to learn options" is a multi-month (or multi-year) commitment to learning, practicing, and actively managing positions.

That's not what I want from my income streams.

---

## What I Chose Instead

While the call discussed airdrops, perps, and options, I thought about what I actually wanted:

- **Passive** — I don't want to watch charts or wake up early
- **Consistent** — I'd rather make $5 reliably than maybe make $500
- **Verifiable** — I want to prove it works with real data
- **Low stress** — I want to sleep through market volatility

That's why I use an AI-enhanced autonomous trading system.

![Strategy comparison - which fits your life?](/blog-images/crypto-strategies-boring-01.webp)

Here's how it compares:

| Factor | Airdrops | Perps | Options | Autonomous Trading |
|--------|----------|-------|---------|-------------------|
| Time required | 10-40+ hrs/airdrop | Constant monitoring | Daily management | Set and forget |
| Can lose 100%? | Scam risk | Yes (liquidation) | Yes (expiration) | No (never sells at loss) |
| Learning curve | Medium | High | Very high | Low |
| Passive? | No | No | No | Yes |
| Stress level | Medium | Very high | High | Low |
| Wake up at 3 AM? | Sometimes | Often | No (market hours) | Never |

### My actual results:

- 11 months of trading
- $4,869 in profits
- 978 closed trades
- 100% success rate (never sold at a loss)
- Hours spent watching charts: Zero

Is it as exciting as a 100x perp trade? No.

Could airdrops or options generate higher returns? Possibly.

But I know exactly what I'm getting: consistent, verified, passive income that doesn't require my attention.

---

## The Question I Ask About Any Strategy

![5 questions before learning any strategy](/blog-images/crypto-strategies-boring-02.webp)

Before learning something new, I ask:

1. **Is it actually passive?** Or does "passive income" mean "slightly less active than a day job"?

2. **What's the failure mode?** Can I lose everything? How fast?

3. **What does the daily/weekly commitment look like?** Be honest about the time.

4. **Can I verify results from real people?** Not screenshots. Actual track records.

5. **Does it fit my life?** Early mornings? Constant phone checking? Stress about positions?

Airdrops, perps, and options fail my test on multiple counts. They might pass yours — everyone's situation is different.

But don't let excitement about potential gains blind you to the actual lifestyle those gains require.

---

## The Bottom Line

The people on that call aren't wrong to be curious. Airdrops, perps, and options are legitimate strategies that work for some people.

But they're **active strategies** being marketed with **passive income language**.

"Free money" requires hours of grinding.
"Easy leverage gains" require 24/7 attention.
"Smarter than stocks" requires months of learning.

![The reality of exciting vs boring strategies](/blog-images/crypto-strategies-boring-03.webp)

If that's what you want, go for it. Learn it properly. Manage your risk.

But if you want actual passive income — the kind where you check a dashboard once a week and see profits accumulating while you slept — there's a different path.

I chose boring. Boring is profitable. Boring lets me sleep.

---

---

**Related:**
- [Options Trading: The "Passive Income" That Requires a PhD](/blog/options-trading-passive-income) - Another strategy that sounds passive but isn't
- [How to Make Passive Income with Crypto (Without Day Trading)](/blog/how-to-make-passive-income-crypto) - What actual passive crypto income looks like`},{title:"Secure Your Crypto Exchange Account Before You Trade a Single Dollar",slug:"secure-coinbase-kraken-account",published:!0,date:"2025-12-11T12:00:00Z",heroImage:"/blog-images/secure-coinbase-kraken-account-hero.webp",imageAlt:"Lock and shield protecting crypto exchange accounts - security setup guide",excerpt:"The 15-minute setup that protects your investment from the most common attacks. Hardware security keys, withdrawal whitelisting, and the 2FA mistake that costs people thousands.",category:"Education",metaDescription:"Secure your Coinbase and Kraken accounts in 15 minutes. Learn why SMS 2FA is dangerous, how YubiKeys work, and the settings most people skip that could save your crypto.",content:`# Secure Your Crypto Exchange Account Before You Trade a Single Dollar

**The 15-minute setup that protects your investment from the most common attacks.**

---

You just funded your [Coinbase](https://dailyprofits.link/cba) or [Kraken](https://dailyprofits.link/krak) account. Maybe $500. Maybe $5,000. Maybe more.

Before you make a single trade, there's something more important than picking your first crypto: **making sure nobody can steal it.**

Here's the uncomfortable truth: Crypto exchanges get targeted constantly. Not because the exchanges themselves are insecure, but because the accounts on them often are. Weak passwords. SMS-based two-factor authentication. No withdrawal protections.

Hackers don't need to break into Coinbase. They just need to break into *your* Coinbase account.

The good news? You can make your account extremely difficult to compromise in about 15 minutes. Here's exactly what to do.

---

## Step 1: Fix Your Password (Yes, Really)

I know. You've heard this a million times. But let me ask you:

- Is your exchange password unique? (Not used anywhere else?)
- Is it at least 16 characters?
- Is it stored in a password manager, not your browser or a sticky note?

If you answered "no" to any of these, stop reading and fix it now.

Your exchange password should be:
- **Unique** - Used nowhere else on the internet
- **Long** - 16+ characters minimum
- **Random** - Generated by a password manager, not "MyDog2024!"
- **Stored securely** - In a password manager like 1Password, Bitwarden, or Dashlane

**Why this matters:** Most account compromises happen because people reuse passwords. A data breach at some random website you signed up for in 2019 exposes your email and password. Hackers try that combination on Coinbase. If it works, your crypto is gone.

---

## Step 2: Upgrade Your Two-Factor Authentication (2FA)

Two-factor authentication means you need something beyond your password to log in. But not all 2FA is created equal.

### The 2FA Hierarchy (Worst to Best):

| Method | Security Level | Why |
|--------|----------------|-----|
| SMS/Text Message | ❌ Weak | SIM swap attacks are easy and common |
| Email codes | ❌ Weak | If your email is compromised, so is this |
| Authenticator App | ✅ Good | Google Authenticator, Authy, etc. |
| Hardware Security Key | ✅✅ Best | YubiKey, Google Titan, etc. |

### Why SMS 2FA is Dangerous

SIM swap attacks work like this:
1. Attacker calls your phone carrier
2. Convinces them to transfer your number to a new SIM
3. Now THEY receive your 2FA codes
4. Logs into your exchange, drains your account

This isn't theoretical. It happens constantly. The FBI reported over $68 million lost to SIM swap attacks in 2021 alone—and it's gotten worse since then.

**Bottom line:** If your exchange account is protected by SMS 2FA, you're one social engineering call away from losing everything.

### Authenticator Apps: The Minimum Standard

At minimum, switch to an authenticator app:
- **Google Authenticator** - Simple, works offline
- **Authy** - Allows cloud backup (convenient but slightly less secure)
- **Microsoft Authenticator** - Good if you're in the Microsoft ecosystem

These generate codes on your phone that change every 30 seconds. An attacker would need physical access to your unlocked phone to get them.

**How to set up on [Coinbase](https://dailyprofits.link/cba):**
1. Go to Settings → Security
2. Select "Authenticator App" under 2-Step Verification
3. Scan the QR code with your authenticator app
4. **CRITICAL: Save your backup codes somewhere secure** (not on your phone)

**How to set up on [Kraken](https://dailyprofits.link/krak):**
1. Go to Security → Two-Factor Authentication
2. Select "Authenticator App"
3. Scan the QR code
4. Save your backup Master Key

### Hardware Security Keys: The Gold Standard

If you're serious about security—and you should be if you have any significant amount of crypto—get a hardware security key.

**What is it?** A physical device (looks like a small USB drive) that you plug into your computer or tap against your phone to verify your identity. Without the physical key, nobody can access your account—even if they have your password.

**Popular options:**
- [**YubiKey 5 Series**](https://amzn.to/4q7D69n) (~$50-55) - The industry standard, works with almost everything
- **YubiKey 5C NFC** - USB-C + NFC for phones, my recommendation for most people
- **Google Titan Key** (~$30) - Budget-friendly, Google-backed
- **Thetis FIDO2** (~$25) - Cheapest option that still works

**Why hardware keys are superior:**
- **Phishing-proof** - Even if you click a fake Coinbase link and enter your password, the key won't authenticate on a fake site
- **No codes to intercept** - Nothing to SIM swap, nothing to screenshot
- **Physical requirement** - Attacker needs the actual device in their hand

**How to set up on [Coinbase](https://dailyprofits.link/cba):**
1. Go to Settings → Security
2. Under 2-Step Verification, select "Security Key"
3. Insert your YubiKey and follow the prompts
4. **Buy two keys** - Set up both, keep one as backup in a secure location

**How to set up on [Kraken](https://dailyprofits.link/krak):**
1. Go to Security → Two-Factor Authentication
2. Select "Hardware Security Key"
3. Follow the prompts to register your key

**Pro tip:** [Buy two YubiKeys](https://amzn.to/4q7D69n). Set up both on your accounts. Keep one on your keychain, one in a fireproof safe or safety deposit box. If you lose one, you still have backup access.

![The 2FA security ladder - SMS is weak, hardware keys are best](/blog-images/secure-coinbase-kraken-account-01.webp)

---

## Step 3: Enable Withdrawal Address Whitelisting

This is the feature most people skip—and it's one of the most powerful protections available.

**What it does:** You create a list of approved crypto wallet addresses. The exchange will ONLY send crypto to addresses on that list. Any new address requires a waiting period (24-72 hours) before it's active.

**Why it matters:** Even if someone gets into your account, they can't immediately drain it to their own wallet. They'd have to add their address, wait for the security delay, and hope you don't notice the email notification.

**On [Coinbase](https://dailyprofits.link/cba):**
1. Go to Settings → Security
2. Enable "Allowlist" for withdrawals
3. Add your known addresses (your hardware wallet, other exchanges you use, etc.)
4. New addresses require 48-hour wait period

**On [Kraken](https://dailyprofits.link/krak):**
1. Go to Security → Withdrawal Addresses
2. Enable "Withdrawal Address Lock"
3. Add approved addresses
4. New addresses require waiting period

**Note:** This creates friction for YOU too. If you suddenly need to withdraw to a new address, you'll have to wait. That's the point. The inconvenience is the security.

---

## Step 4: Lock Down Your API Keys (If You Use Automated Trading)

If you're using any automated trading system—including AI-enhanced trading platforms—you're connecting via API keys. These are like a secondary password that gives external software access to your account.

**Critical API key settings:**

1. **Trade-only permissions** - Your API key should be able to execute trades but NOT withdraw funds
2. **IP restrictions** - If possible, limit the API key to specific IP addresses
3. **Never share your secret key** - Treat it like a password
4. **Use separate keys for different services** - Don't reuse API keys

**On [Coinbase](https://dailyprofits.link/cba):**
1. Go to Settings → API
2. Create a new API key
3. **Uncheck** "Transfer" and "Withdraw" permissions
4. Only enable "Trade" permissions
5. Set IP allowlist if the trading service provides their server IPs

**On [Kraken](https://dailyprofits.link/krak):**
1. Go to Security → API
2. Create new key
3. Select only "Query Funds" and "Create & Modify Orders"
4. Do NOT enable "Withdraw Funds"

**The rule:** A trading bot needs to trade. It does NOT need to withdraw your funds to external wallets. Any legitimate automated trading service will work fine with trade-only API permissions.

![15-minute security checklist for crypto exchanges](/blog-images/secure-coinbase-kraken-account-02.webp)

---

## Step 5: Secure Your Email (The Forgotten Weak Link)

Your exchange account is only as secure as the email attached to it.

Think about it: Password reset links go to your email. Security notifications go to your email. If someone controls your email, they potentially control everything connected to it.

**Email security checklist:**
- Strong, unique password (see Step 1)
- 2FA enabled (hardware key or authenticator app)
- Check for unauthorized forwarding rules (attackers set these up to intercept your emails silently)
- Review connected apps and revoke anything suspicious

**Consider a dedicated email:** Some people create a separate email address used ONLY for financial accounts. It's never used for newsletters, social media, or anything else. This dramatically reduces exposure to phishing and data breaches.

---

## Step 6: Platform-Specific Features Worth Enabling

### Coinbase

- **Vault** - Time-delayed withdrawals requiring multiple approvals. Good for long-term holdings you don't need quick access to.
- **Coinbase One** - If you're trading frequently, this subscription removes trading fees and includes priority support. The cost savings add up quickly with active trading. [Get Coinbase One here](https://dailyprofits.link/cba).
- **Session management** - Regularly review and revoke active sessions you don't recognize (Settings → Security → Active Sessions)

### Kraken

- **Global Settings Lock (GSL)** - Locks your security settings for a specified time period. Even if someone gets in, they can't change your 2FA or withdrawal addresses.
- **Master Key** - A separate password required for security changes. Store this securely and separately from your main password.
- **PGP encryption** - Kraken can encrypt emails to you. Advanced, but useful if you want to verify emails are genuinely from Kraken.

[Get started with Kraken here](https://dailyprofits.link/krak).

---

## The 15-Minute Security Checklist

Here's everything above condensed into an actionable checklist:

**Do Today (15 minutes):**
- Change password to unique, 16+ character random string
- Switch from SMS to authenticator app 2FA
- Save backup codes in secure location (NOT on your phone)
- Enable withdrawal address whitelisting

**Do This Week:**
- [Order a YubiKey](https://amzn.to/4q7D69n) (or two)
- Set up hardware key as primary 2FA
- Review and secure your email account
- Check API key permissions if using any trading tools

**Do Monthly:**
- Review active sessions and revoke unknowns
- Check for unauthorized withdrawal addresses
- Verify email forwarding rules haven't been added
- Update backup codes if you've used any

---

## What If You're Already Compromised?

Signs something might be wrong:
- Login notifications from locations you don't recognize
- Password reset emails you didn't request
- 2FA codes sent when you're not logging in
- Missing funds (obviously)

**If you suspect compromise:**
1. Immediately change your password from a different device
2. Revoke all active sessions
3. Contact exchange support directly (not through links in emails)
4. Enable withdrawal address lock if not already active
5. Move funds to a hardware wallet you control
6. File a report with the exchange and local authorities if funds are missing

---

## The Bottom Line

Crypto security isn't complicated. It's just not intuitive, and most people never take the 15 minutes to set it up properly.

The exchanges themselves—[Coinbase](https://dailyprofits.link/cba), [Kraken](https://dailyprofits.link/krak)—have solid security infrastructure. What they can't protect you from is a weak password, SMS-based 2FA, or falling for a phishing email.

A [$50 YubiKey](https://amzn.to/4q7D69n) and 15 minutes of your time can prevent the loss of thousands of dollars. That's probably the best ROI you'll ever get in crypto.

Secure your account first. Then trade.

---

*Already secured your account? See what systematic, AI-enhanced crypto trading looks like: [View My Live Results →](/results)*

---

**Related:**
- [Your Crypto Dies With You (Unless You Plan Ahead)](/blog/crypto-inheritance-planning) - What your family needs to access your crypto
- [How I Make Passive Income with Cryptocurrency](/blog/how-to-make-passive-income-crypto) - After you're secure, here's how to grow it`},{title:"A Billion Dollar Lottery and the Math Nobody Wants to Hear",slug:"powerball-billion-dollar-lottery-math",published:!0,date:"2025-12-11T18:00:00Z",heroImage:"/blog-images/powerball-billion-hero.webp",imageAlt:"Powerball hits $1 billion - the lottery math nobody wants to hear",excerpt:"The Powerball jackpot just hit $1 billion. Lines are forming. Dreams are being sold. Here's the math the lottery commission hopes you'll ignore while you wait in line.",content:`# A Billion Dollar Lottery and the Math Nobody Wants to Hear

**41 drawings. Zero winners. $1 billion in dreams for sale.**

---

The Powerball jackpot just hit $1 billion for Saturday's drawing.

Right now, people are lining up at gas stations. Coworkers are pooling money. Someone's grandma is picking numbers based on her grandchildren's birthdays.

And every single one of them is about to make the same math error.

---

## The Numbers They Put on Billboards

**$1,000,000,000**

That's what you'll see on every news ticker, every convenience store sign, every excited text from your uncle.

But here's what they don't put in giant letters:

**1 in 292,201,338**

That's your odds of winning. One in 292 million.

To put that in perspective:

- You're 300x more likely to be struck by lightning this year
- You're more likely to be killed by a vending machine
- You're more likely to become a movie star
- You're more likely to be attacked by a shark while also being struck by lightning

But sure. This could be your lucky day.

---

## The Real Jackpot (Spoiler: It's Not $1 Billion)

Let's do the math the lottery commission hopes you won't.

**Advertised jackpot:** $1 billion

**If you take the lump sum:** $461.3 million

Already cut in half. But wait, there's more.

**After federal taxes (37%):** ~$290 million

**After state taxes (varies, ~5-10%):** ~$250-270 million

So that "billion dollar" jackpot is actually worth about $260 million in your pocket.

Still life-changing money? Absolutely.

Still worth a $2 ticket for entertainment? Maybe.

Worth building a financial strategy around? Absolutely not.

![Where does $1 billion go - tax breakdown](/blog-images/powerball-billion-01.webp)

---

## The Expected Value Problem

Here's where it gets brutal.

In gambling terms, every bet has an "expected value" - what you'd average out to winning (or losing) if you played that bet millions of times.

For the Powerball:

- **Cost per ticket:** $2
- **Odds of jackpot:** 1 in 292.2 million
- **Expected value of a $2 ticket:** approximately -$0.80 to -$1.00

Translation: For every $2 you spend on lottery tickets, you can expect to lose about a dollar.

But wait, you might say, someone has to win eventually!

True. After 41 consecutive drawings without a winner, someone will eventually match those numbers.

But here's the thing about probability: **it doesn't care about streaks.**

Your odds on Saturday are exactly the same as they were on drawing #1.

1 in 292,201,338.

The jackpot growing doesn't make you more likely to win. It just means more people are playing, which actually increases the odds you'd have to *split* the jackpot if you somehow did win.

---

## What $2 Actually Buys You

I'm not here to tell you never to buy a lottery ticket. A $2 ticket for a billion-dollar fantasy is arguably cheap entertainment.

But let's be honest about what you're actually purchasing:

**You're buying a dream, not an investment.**

The problem isn't the occasional $2 ticket. The problem is when people spend $20, $50, $100 per week on lottery tickets thinking they're "investing" or "building toward something."

Americans spend over $100 billion on lottery tickets every year. The average household spends about $640 annually.

What if that money went somewhere with better odds?

---

## The Alternative Math

Let's compare two approaches:

**Approach A: Lottery Player**
- Spends $50/month on lottery tickets
- Expected return: Loses ~$25-30/month
- 10-year result: Down ~$3,000-3,600
- Odds of life-changing win: 1 in 292 million (per ticket)

**Approach B: Systematic Trader**
- Invests $50/month into systematic trading
- My actual 11-month average: ~$440/month profit on ~$25K capital
- 100% success rate on closed trades
- Compound growth: Math works in your favor, not against you

One approach has the math designed to take your money.

The other has the math designed to grow it.

![Two ways to spend $50 per month - lottery vs systematic trading](/blog-images/powerball-billion-02.webp)

---

## "But Someone Has to Win!"

Yes. Someone will eventually win this jackpot. Probably multiple someones, actually, given how many tickets sell when it hits a billion.

But consider this:

- The last Powerball jackpot ($1.787 billion in September) was split between TWO winners
- The $2.04 billion record was won by ONE person out of hundreds of millions of tickets sold
- Most jackpot winners either take the lump sum (losing half) or the annuity (and many die before collecting it all)

And here's the darkest statistic of all: **70% of lottery winners go broke within a few years.**

Not because winning is bad. Because sudden windfalls without financial systems don't build wealth. They build chaos.

---

## The System vs. The Dream

I started tracking my autonomous trading results in January.

11 months later:

- **Total profit:** $4,900+
- **Total trades:** 980+
- **Success rate on closed trades:** 100%
- **Nights I stayed up watching numbers:** Zero
- **Tickets I bought:** Zero

No billion-dollar fantasy. No standing in line at 7-Eleven. No refreshing a website hoping my numbers match.

Just systematic execution, verified results, and compound growth.

The scoreboard only goes up. Every single month.

Is it a billion dollars? No.

Is it real money in my actual bank account? Yes.

And the odds of my system working tomorrow are exactly the same as they were yesterday: 100% on closed trades, because the system doesn't sell at a loss.

---

## The Bottom Line

Go ahead and buy a Powerball ticket if you want. It's $2 for a few days of daydreaming about yachts and telling your boss what you really think.

But don't confuse entertainment with strategy.

Don't confuse a 1-in-292-million lottery ticket with a financial plan.

And don't spend $50/month on losing tickets when that same money could go into something where the math actually works in your favor.

The lottery is designed to transfer money from players to the state.

My autonomous trading system is designed to compound wealth over time.

One of these has made me money every single month for 11 months.

The other has made the government $100 billion per year.

Choose wisely.

---

**Related:**
- [The 50% Illusion: Why "Prediction Markets" Are Just Gambling With Extra Steps](/blog/forecasttrader-50-percent-illusion) - Another game where the math doesn't work in your favor
- [FanDuel's 25% Profit Boost: Why Boosting a Bad Bet Is Still a Bad Bet](/blog/same-game-parlay-profit-boost-trap) - Sports betting's version of the lottery trap`,category:"Anti-Gambling",metaDescription:"The Powerball jackpot just hit $1 billion. Lines are forming everywhere. Here's the math the lottery commission hopes you'll ignore - and what smart money does instead."},{title:'Options Trading: The "Passive Income" That Requires a PhD',slug:"options-trading-passive-income",published:!0,date:"2025-12-11T12:00:00Z",heroImage:"/blog-images/options-trading-passive-income-hero.webp",imageAlt:"Options trading passive income myth - the complexity they don't show you",excerpt:"They told me it was easy. Then I read the course materials. Here's what 'beginner-friendly' options trading actually requires.",category:"Education",metaDescription:"Options trading is marketed as easy passive income. Here's what it actually requires: Greeks, technical analysis, margin risk, and unlimited loss potential.",content:`# Options Trading: The "Passive Income" That Requires a PhD

They told me it was easy. Then I read the course materials.

I've been getting questions about options trading lately. Friends send me YouTube videos of guys in nice suits promising "passive income" from selling options. The marketing always looks the same: luxury lifestyle, simple strategies, financial freedom.

So I did what I always do - I dug into the actual education materials. I wanted to understand what it really takes.

What I found was... illuminating.

## "Easy" and "Beginner-Friendly" - Really?

Options trading is often marketed as accessible to anyone. Just learn a few strategies, collect premium, watch the money roll in.

Here's what you actually need to learn for those "simple" strategies:

**Options Basics:**
- Calls vs. puts
- Buying vs. selling options
- Strike prices
- Expiration dates
- Assignment and exercise
- Premium calculations

**The Greeks:**
- Delta (how much your option moves per $1 stock movement)
- Theta (how much value bleeds away daily)
- Implied volatility effects
- Intrinsic vs. extrinsic value

**Technical Analysis:**
- Three chart types (line, bar, candlestick)
- Moving averages (SMA vs. EMA)
- RSI (Relative Strength Index)
- MACD (Moving Average Convergence Divergence)
- Bollinger Bands
- Fibonacci Retracement
- Support and resistance levels
- Candlestick patterns (Doji, Hammer, Morning Star, Evening Star)
- Trendlines

**Advanced Concepts:**
- The Wheel Strategy
- LEAPs (Long-term Equity Anticipation Securities)
- Poor Man's Covered Calls
- Open interest and volume analysis
- Bid-ask spread evaluation
- Liquidity assessment

That's not beginner-friendly. That's a finance degree.

## The Part They Gloss Over

Let me explain how options actually work, because this is where it gets scary.

When you **sell a put**, you're signing a contract. You collect a small fee (the premium) upfront - maybe $200. In exchange, you're promising to buy 100 shares at a set price if the stock drops below that level.

Here's the critical part: **you don't get a choice.**

If the stock tanks and goes below your strike price at expiration, your broker doesn't call and ask "Hey, still want to do this?"

The system just executes automatically. You wake up and discover you now own shares at a price way above market value. The money has already been deducted from your account.

## A Real Example

Here's a scenario that plays out regularly in options trading.

A trader sold puts on a popular tech stock trading around $205. He collected some premium upfront. Easy money, right?

Then the stock dropped. And dropped. And dropped. All the way to $117.

He was **forced** to buy 100 shares at $205 each.

- Amount spent: $20,500
- Current value: $11,700
- **Instant loss: $8,800**

And here's the trap - he's now stuck. To generate income on those shares, he'd need to sell calls above his $205 cost basis. But who's buying $205 calls when the stock is at $117? Nobody.

If he sells calls at a lower strike and they get exercised, he locks in the loss permanently.

That's the "black hole" of options trading. Every move makes it worse.

![The Options Black Hole](/blog-images/options-trading-passive-income-01.webp)

## What About "Being the Casino"?

The pitch is always the same: "When you sell options, you're the house. The house always wins."

Except you're not a casino. Here's why:

| Real Casino | You "Being the Casino" |
|---|---|
| House edge is fixed (math guarantees profit) | No guaranteed edge - stocks are unpredictable |
| Max loss = the payout on that bet | Max loss = potentially unlimited |
| Millions of small bets = diversification | Maybe 5-10 positions |
| Roulette odds don't change overnight | A stock can drop 43% in months |
| Can't be forced to "hold" a losing bet | Stuck holding bags for months or years |

The casino's roulette wheel doesn't suddenly pay out 100x because of a Fed announcement or an earnings miss.

![You're Not The Casino](/blog-images/options-trading-passive-income-02.webp)

## The Math That Haunts Options Sellers

Here's how it typically plays out:

- Month 1: +$200 ✓
- Month 2: +$200 ✓
- Month 3: +$200 ✓
- Month 4: +$200 ✓
- Month 5: Stock crashes, you're assigned → **-$8,000**

**Net result after 5 months: -$7,200**

Small wins, small wins, small wins... catastrophic loss.

Sound familiar? It should. That's exactly how gambling works.

## Wait, It Gets Worse: Margin

Many options traders use margin - borrowed money from their broker. This amplifies everything.

If a trade goes bad on margin:

1. **Margin call** - broker demands you deposit money immediately
2. **Forced liquidation** - they sell your other investments to cover
3. **Negative balance** - you can owe money you don't have

Your broker can sell your assets without asking permission. It's automated. No phone call, no negotiation, no "can I have a few more days?"

## The Lifestyle Nobody Shows You

Here's what "passive income" from options actually looks like:

**The Setup Costs:**
- Courses: $500 - $2,000
- Discord subscriptions: $50 - $200/month
- Real-time data feeds: $100 - $300/month
- Analysis software: $50 - $150/month
- Multi-monitor setup: $500 - $1,500

**Year one overhead: $3,000 - $7,000+**

**The Daily Routine:**
- Wake up before market open (9:30 AM ET)
- Monitor positions throughout the day
- Track expiration dates
- Watch Theta decay eat your premiums
- Check Discord for trading signals
- Stress about assignment risk
- Can't vacation during volatile periods

Even experienced traders admit: "You can just make your trading life really really complex."

## The Craps Table Comparison

I'm not joking when I say this: playing craps might have better odds.

| Factor | Craps (Pass Line) | Selling Options |
|---|---|---|
| House edge | 1.41% (known) | Unknown, changes constantly |
| Max loss | Your bet | "Unlimited" |
| Skill required | None | Greeks, charts, analysis |
| Time commitment | 30 seconds | Hours daily |
| Can lose more than bet | No | Yes, and then some |

At least at the craps table:
- You know you're gambling
- The odds are transparent
- You can't lose more than you bet
- Nobody calls it "passive income"

## What I Do Instead

My autonomous trading system has been running for 11+ months. Here's what my "passive income" actually looks like:

**Setup:**
- One-time configuration
- No courses required
- No Greeks to memorize
- No charts to analyze

**Daily routine:**
- Check results when I feel like it
- Usually on my phone while walking my dog

**When a position goes red:**
- I wait
- No expiration forcing my hand
- No contracts obligating me to act
- Eventually it recovers
- I profit

**What I can't lose:**
- More than I invested
- Other assets to margin calls
- Sleep over expiration dates

That trader stuck in "limbo"? He's trapped because contracts have deadlines.

My positions can wait forever. No expiration. No assignment. No black hole.

## The Bottom Line

I'm not saying nobody makes money with options. Professional traders at institutional firms absolutely do. Some retail traders do well too.

But when a strategy requires:
- Hours of education
- Ongoing daily monitoring
- Complex Greek calculations
- Constant expiration management
- Significant capital reserves
- Margin risk
- Unlimited loss potential

...and it's marketed as "easy passive income"?

That disconnect should make you pause.

## There's a Simpler Way

My approach is based on one principle: **the scoreboard should only go up.**

No contracts. No obligations. No deadlines. No forced buying or selling. No margin. No broker with their finger on the liquidation button.

Just systematic entries, patient exits, and profits that compound over time.

I use [GoBabyTrade™](https://gobabytrade.com/432706BE), an AI-enhanced autonomous trading system that's been running for over 25 years. It handles all the execution while I live my life.

---

**Related:**
- [The Crypto Strategies Everyone's Excited About (And Why I Chose Boring Instead)](/blog/crypto-strategies-everyone-excited-about) - More 'exciting' strategies that require constant attention
- [A Crypto Billionaire Says Passive Income Doesn't Exist. He's Almost Right.](/blog/passive-income-myth-autonomous-trading) - What makes income truly passive`},{title:"The Fed Cut Rates Yesterday. I Didn't Watch.",slug:"fed-rate-cut-didnt-watch",published:!0,date:"2025-12-12T14:00:00Z",heroImage:"/blog-images/fed-rate-cut-hero.webp",imageAlt:"Fed rate cut announcement - why systematic traders don't need to watch",excerpt:"While traders were glued to Powell's press conference hoping for signals, my autonomous trading system was doing what it does every day: executing trades without caring what the Fed chair said.",content:`# The Fed Cut Rates Yesterday. I Didn't Watch.

**The financial world stopped. I didn't.**

---

Yesterday at 2:00 PM Eastern, the Federal Reserve announced a 25 basis point rate cut, bringing the target range to 3.50%-3.75%.

Traders everywhere were glued to their screens. Financial Twitter exploded. Analysts dissected every word of Powell's press conference like it was the Zapruder film.

I was making dinner.

Not because I don't care about the economy. But because my trading system doesn't need me to predict what Jerome Powell will say.

---

## The Prediction Game

Here's what "normal" crypto traders did yesterday:

- Refreshed CME FedWatch obsessively (89% probability of a cut!)
- Positioned their trades based on expected announcements
- Watched the press conference live
- Analyzed Powell's tone (was that hawkish? dovish? both?)
- Panic-adjusted positions when the vote wasn't unanimous
- Stayed up reading analyst takes

All to answer one question: **"What should I do with my money right now?"**

Here's what my autonomous trading system did:

- Executed trades based on its programmed strategy
- Held positions until profitable
- Didn't watch TV
- Didn't read Twitter
- Didn't care

---

## The Dirty Secret About "Priced In"

You'll hear this phrase constantly: "The rate cut was already priced in."

What does that actually mean?

It means that by the time you hear news, the market has already moved. The 89% probability of a cut? That wasn't a prediction - it was the market telling you it already happened in terms of price movement.

So when traders position themselves based on Fed expectations, they're not getting ahead of anything. They're reacting to what's already reflected in prices, hoping for a surprise that gives them an edge.

That's not investing. That's gambling on the gap between expectation and reality.

![What priced in actually means](/blog-images/fed-rate-cut-01.webp)

---

## What Actually Happened

The Fed cut rates by 25 basis points. Exactly what everyone expected.

Bitcoin? It bounced around between $91K and $95K. Volatile, but not dramatically different from any other week.

The traders who bet on a bigger cut? Disappointed.

The traders who bet on a hold? Wrong.

The traders who bet on exactly 25 basis points? Right, but the market didn't move much because... it was priced in.

Meanwhile, my system executed trades. Some opened. Some closed at profit. The scoreboard went up. Just like it does every week, regardless of what the Fed says.

---

## The Real Question

Here's what I've learned after 11 months of autonomous trading:

**The question isn't "what will the Fed do?"**

The question is: **"Does my system work in any Fed environment?"**

Rate cuts? System works.
Rate holds? System works.
Rate hikes? System works.

Why? Because the system isn't predicting macro events. It's executing a strategy based on market dynamics that exist regardless of monetary policy.

Buy low. Sell high. Never sell at a loss. Hold until profitable.

That strategy worked when rates were near zero. It worked when rates were above 5%. It's working now at 3.5%.

---

## The Time Cost of Prediction Trading

Let's talk about what Fed-watching actually costs you:

- **Hours of research** reading analyst predictions
- **Emotional energy** stressing about positioning
- **Sleep** staying up for announcements or Asian market reactions
- **Mental bandwidth** that could go toward your actual job, family, life

And for what? To maybe, possibly, get a slight edge on a move that was probably already priced in?

I spent yesterday evening making dinner, playing with my dog, and going to bed at a normal hour. My system made money while I slept.

That's not lazy. That's leverage.

---

## The Irony of "Being Informed"

Financial media wants you to believe that watching every Fed announcement makes you a sophisticated investor.

But here's the irony: the most sophisticated institutional investors aren't watching Powell's press conferences hoping for an edge. They're running systematic strategies that work across all environments.

They're not predicting. They're executing.

The prediction game is for retail traders who think more information equals better returns. In reality, more information often equals more overthinking, more second-guessing, and more emotional decisions.

![What actually matters for building wealth](/blog-images/fed-rate-cut-02.webp)

---

## What Matters More Than the Fed

If you're building wealth through crypto, here's what actually matters:

1. **Do you have a system?** Not a feeling. Not a prediction. A system.

2. **Does your system have an edge?** Not "I think crypto will go up." An actual, demonstrable edge.

3. **Can you execute without emotion?** When the market drops 20%, do you panic sell or follow your rules?

4. **Is it sustainable?** Can you do this for years without burning out?

None of those questions require knowing what the Fed will do next month.

---

## The Bottom Line

The Fed cut rates yesterday. They'll probably cut again in 2026. Or maybe they won't. Inflation might tick up. Employment might soften. Powell might say something hawkish next time.

I genuinely don't know. And more importantly, I don't need to know.

My system has been profitable for 11 consecutive months across rate hikes, rate holds, and rate cuts. It doesn't watch CNBC. It doesn't read Fed minutes. It doesn't care about dot plots.

It just executes.

And while everyone else was stress-watching a press conference yesterday, I was living my life.

That's the actual point of passive income. Not just the money - the time.

---

**Related:**
- [The Fear & Greed Index Hit 11. My AI-Enhanced Autonomous Trader Didn't Even Notice.](/blog/fear-greed-index-11-systematic-trading) - Another day the market panicked while my system traded
- [Trading Disorders Are Real: Why I Let an AI Make Every Trade](/blog/trading-disorders-ai-solution) - Why removing yourself from trading decisions works`,category:"Market Intelligence",metaDescription:"The Fed cut rates by 25 basis points yesterday. Traders panicked. I made dinner. Here's why systematic trading beats prediction trading every time."},{title:"Crypto Is Dead? The SEC Chairman Disagrees.",slug:"crypto-is-dead-sec-depin-web3",published:!0,date:"2025-12-11T10:00:00Z",heroImage:"/blog-images/crypto-is-dead-sec-depin-web3-hero.webp",imageAlt:"Crypto is dead myth busted by SEC Chairman statements on tokenization and DePIN infrastructure growth",excerpt:"Everyone says crypto is dead. Meanwhile, the SEC Chairman says the entire U.S. financial system could be on blockchain within two years. Here's what you're missing about Web3 infrastructure and why systematic traders are quietly accumulating.",category:"Education",metaDescription:"SEC Chairman says U.S. financial system could be on blockchain in 2 years. BlackRock demands tokenization. DePIN grew 270%. Here's what 'crypto is dead' misses.",content:`# Crypto Is Dead? The SEC Chairman Disagrees.

*Reading time: 9 minutes*

---

Everyone says crypto is dead.

Prices are down. The speculation bubble popped. Your coworker who bought Dogecoin at the peak stopped talking about it. The TikTok gurus moved on to dropshipping courses.

And you know what? Good.

Because while retail traders panic-sold and declared the dream over, something much bigger happened. Something most people completely missed.

**The SEC Chairman just said the entire U.S. financial system could be on blockchain within two years.**

Not ten years. Not "someday." Two years.

And BlackRock—the world's largest asset manager with $10 trillion under management—is publicly demanding the SEC fast-track tokenization of stocks and bonds.

But sure. Crypto is "dead."

---

## The $68 Trillion Opportunity Nobody's Talking About

Here's a number that should wake you up:

The U.S. equity market is valued at roughly **$68 trillion**. Right now, only about $670 million of that exists in tokenized form on blockchain.

That's 0.001%.

SEC Chairman Paul Atkins isn't just casually mentioning this—he's calling it "the biggest transformation in the U.S. financial system in decades."

In his own words from a recent Fox Business interview:

> "The next step is coming with digital assets and digitization, tokenization of the market. It's the way the world will be… maybe not even in ten years, maybe even a couple of years from now."

Let that sink in. The head of the SEC—the same agency that spent years fighting crypto—is now saying tokenization is inevitable and imminent.

This isn't some crypto influencer pumping their bags. This is the top financial regulator in the United States.

---

## "But Aren't Crypto Tokens Just Gambling Chips?"

This is where most people get it wrong.

When they hear "crypto," they think of Dogecoin pumping 400% because Elon tweeted a meme. They think of their friend who "invested" his rent money in a coin called "SafeMoonElonCumRocket" and lost everything.

And yeah—that stuff exists. It's gambling dressed up as investing.

**But here's what those same people don't understand:**

Many crypto tokens aren't lottery tickets. They're the infrastructure of Web3.

Think about it like this:

- When the internet was being built, nobody got rich buying "internet coins." They got rich buying shares in the companies building the infrastructure—Cisco, Microsoft, Amazon.
- Web3 is being built right now. And the "shares" in that infrastructure? They're tokens.

---

## What These Tokens Actually Do

Let me break down what's actually happening with some of the tokens that trade on exchanges right now:

### The Graph (GRT) — The Google of Blockchain

Every decentralized application needs to query data from the blockchain. The Graph is the indexing protocol that makes this possible. Without it, Web3 literally doesn't function.

Think of it as the plumbing. Not sexy, but absolutely essential.

### Filecoin (FIL) — Decentralized Cloud Storage

Instead of Amazon or Google controlling your data, Filecoin creates a marketplace where anyone can rent out storage space. It's already being used for AI training data, scientific research, and Web3 applications.

### Render (RNDR) — Decentralized GPU Power

Need massive computing power for AI, graphics rendering, or video processing? Render lets you tap into a distributed network of GPUs instead of paying Amazon Web Services monopoly prices.

### Helium (HNT) — Decentralized Wireless Networks

Community-hosted hotspots providing IoT and 5G coverage. Over 2 million daily active users. Real infrastructure, real usage.

### Aethir (ATH) — Enterprise-Grade Cloud Computing

Over 430,000 GPUs distributed across 94 countries, powering AI and gaming applications without centralized data centers.

![Not lottery tickets - these tokens are Web3 infrastructure](/blog-images/crypto-is-dead-sec-depin-web3-03.webp)

---

## The DePIN Explosion You're Missing

There's a category called **DePIN**—Decentralized Physical Infrastructure Networks. These are blockchain projects that use token incentives to build real-world infrastructure.

The numbers are staggering:

- **1,170+ active DePIN projects** across compute, wireless, energy, and storage
- **41.8 million devices deployed worldwide** supporting these protocols
- **Market cap grew from $5.2 billion to $19.2 billion** in one year—a 270% increase
- The SEC actually issued a **no-action letter** for DePIN tokens, legitimizing the entire sector

This isn't theoretical. It's already happening. Real hardware. Real users. Real infrastructure being built.

And here's the kicker: the SEC's new four-category framework explicitly classifies many of these utility tokens as **non-securities**—meaning they're here to stay.

![DePIN explosion - 41.8 million devices, 270% growth, SEC legitimization](/blog-images/crypto-is-dead-sec-depin-web3-01.webp)

---

## Meanwhile, My System Doesn't Care

Here's what I find interesting about all this.

Right now, my autonomous trading system is actively buying across four different tokens:

- **DOGE** — Yes, the meme coin. The OG.
- **BONK** — Solana ecosystem meme coin.
- **SUI** — Layer 1 blockchain infrastructure (smart contracts, DeFi, gaming).
- **AST** — AirSwap, a decentralized trading protocol (DeFi infrastructure).

Two meme coins. Two infrastructure tokens. The system doesn't discriminate.

Why? Because the strategy isn't about picking which category of crypto will "win." It's about systematically accumulating across the entire ecosystem—and selling for profit when the math says sell.

**I have 152 open positions right now.** DOGE, SHIB, GRT, SUI, XYO... the full spectrum. While retail traders argue about whether memes or utility will dominate, my system is positioning in both.

Every single one of my closed positions is green. 100% success rate. Not because I'm smart—because the system doesn't sell at a loss. It waits.

---

## The Whale Playbook (And Why You're Already Using It)

Here's something that came up on a recent trading webinar I attended:

Big institutional traders have been purposefully loading up at low prices, keeping markets suppressed while they accumulate.

Classic whale behavior. Buy quietly during the "crypto is dead" narrative. Wait for everyone else to give up. Then let it run.

**Here's what's wild:** If you're running a systematic trading approach, you're doing the exact same thing—automatically.

While retail traders:
- Panic sell at lows
- FOMO buy at highs
- Chase whatever's pumping that day

The whales (and systematic traders):
- Quietly accumulate during "boring" markets
- Wait patiently for favorable conditions
- Sell strategically when prices rise

You're not competing against the whales. You're trading like them.

The difference? You're not doing it manually. The system handles it while you sleep, work, or walk your dog.

![Retail traders vs systematic traders - the whale playbook](/blog-images/crypto-is-dead-sec-depin-web3-02.webp)

---

## The Real Question

So here's what you have to ask yourself:

If the SEC Chairman is saying the U.S. financial system is moving to blockchain in two years...

If BlackRock is demanding tokenization of stocks and bonds...

If there are already 41.8 million devices running on DePIN infrastructure worldwide...

If the market cap of decentralized infrastructure grew 270% last year alone...

**Do you really think "crypto is dead"?**

Or is it possible that while everyone was watching prices, the actual infrastructure of Web3 was being built right under their noses?

---

## Two Paths Forward

You basically have two options here:

**Option A: Keep watching from the sidelines**

Wait for mainstream media to tell you crypto is "back." Buy in after the big moves happen. Compete against algorithms and whales with your gut feelings and spare time.

Good luck.

**Option B: Position systematically, starting now**

Let an autonomous system accumulate across the ecosystem—meme coins AND infrastructure tokens—without the emotional gambling.

Don't try to pick winners. Don't time the market. Don't pretend you're smarter than institutional traders with billion-dollar research teams.

Just build positions methodically. Let the system sell when it's profitable. Bank real gains while everyone else watches numbers on a screen.

---

## The Scoreboard Only Goes Up

That's my philosophy. The scoreboard of closed, profitable trades only goes up. I don't sell at a loss. Ever.

Down markets? That's accumulation time.

Red numbers on open positions? That's unrealized—not a loss until you sell.

Green numbers on closed positions? That's money in the bank.

Right now I'm sitting on 152 open lots across 11 different tokens. Infrastructure plays like GRT and SUI. Meme coins like DOGE and BONK. The whole spectrum.

When prices pop—and if the SEC Chairman is right about tokenization, they will—those positions flip green.

And my scoreboard goes up again.

---

## What Happens Next

The "crypto is dead" crowd will keep saying it until prices spike. Then they'll rush back in at the top, panic when it dips, and sell at a loss. Same cycle every time.

Meanwhile, the infrastructure keeps getting built. The regulations keep getting clearer. The institutions keep accumulating.

And systematic traders keep executing—automatically, emotionlessly, profitably.

The question isn't whether Web3 infrastructure is the future. The SEC Chairman already answered that.

The question is: are you going to position for it, or watch from the sidelines?

---

*Want to see how autonomous crypto trading actually works? I publish every trade live—no hidden losses, no cherry-picked results. Check out [myrobotictrader.com](https://myrobotictrader.com) to see the full scoreboard.*

---

**Related:**
- [Why Down Markets Are Actually the Best Time to Start Automated Crypto Trading (With Real Numbers)](/blog/why-start-automated-trading-in-down-markets) - Why skepticism creates opportunity
- [How to Make Passive Income with Crypto (Without Day Trading)](/blog/how-to-make-passive-income-crypto) - How I'm building wealth in crypto right now`},{title:"Renting Hashpower: Mining or Just Gambling With Extra Steps?",slug:"renting-hashpower-mining-or-gambling",published:!0,date:"2025-12-10T14:00:00Z",heroImage:"/blog-images/renting-hashpower-mining-or-gambling-hero.webp",imageAlt:"Renting hashpower - mining or gambling with extra steps",excerpt:"NiceHash's own documentation calls it 'basically gambling' and warns buyers to expect losses. Here's what they tell each side—and why you should pay attention.",category:"Anti-Gambling",metaDescription:"NiceHash calls hashpower rental 'basically gambling' in their own docs. Here's what they tell sellers vs buyers—and why you should pay attention.",content:`# Renting Hashpower: Mining or Just Gambling With Extra Steps?

NiceHash has an appealing pitch: rent computing power from other people's mining rigs, point it at whatever cryptocurrency you want, and collect the rewards. No expensive hardware. No electricity bills. No technical setup.

Sounds like the smart way to mine crypto, right?

Here's the thing—NiceHash's own documentation tells a very different story. And they're surprisingly honest about it.

## What NiceHash Tells Sellers vs. Buyers

NiceHash serves two audiences: **sellers** (people renting out their hardware) and **buyers** (people renting hashpower to mine).

The messaging to each group reveals everything you need to know.

![What NiceHash Tells Each Side](/blog-images/renting-hashpower-mining-or-gambling-03.webp)

**To sellers**, NiceHash says:
> "Buyers are willing to pay a premium... **You (the seller) capture that premium.**"

**To buyers**, NiceHash says:
> "Sixth rule. **You're going to lose money at first**, as you learn. Just accept that. **It's an expensive education.**"

One group captures premiums. The other group pays for an "expensive education."

Which one do you want to be?

## NiceHash Calls It What It Is

Buried in their own buyer's guide, NiceHash addresses why some buyers pay more for hashpower than they'll ever earn back:

![Their Words, Not Ours](/blog-images/renting-hashpower-mining-or-gambling-01.webp)

> "The answer is likely that they are solo mining, and are willing to pay more in the hopes that they will find a block before they've spent the equivalent of a full block's rewards. **It's basically gambling.**"

That's not my interpretation. That's NiceHash's own words.

**It's basically gambling.**

## The Warnings They Give Buyers

NiceHash's buyer documentation reads like a casino's responsible gaming disclaimer. Here's what they tell people before they start:

![What NiceHash Tells Buyers](/blog-images/renting-hashpower-mining-or-gambling-02.webp)

**On profitability:**
> "First rule. Not all algorithms are profitable all the time **(or even some of the time)**."

**On risk:**
> "The shorter your order, the more you are affected by luck. Depending on the payment scheme used, **luck can destroy you.**"

**On losing your investment:**
> "A round that goes long can **wipe out your entire investment** (I've had it happen)."

**On overnight losses:**
> "It's really easy to go to bed with it running and **wake up losing money** because the price of the coin dropped."

**On expected losses:**
> "**You're going to lose money at first**, as you learn. Just accept that."

These aren't warnings from critics. These are warnings from NiceHash themselves, in their official documentation, to their own customers.

## The Premium Data

Meanwhile, NiceHash publishes data showing what buyers actually pay versus market rates:

| Date | NiceHash Rate | Market Rate | Premium Buyers Paid |
|------|---------------|-------------|---------------------|
| Oct 1, 2025 | 0.456 | 0.440 | **+3.56%** |
| Oct 2, 2025 | 0.440 | 0.420 | **+4.76%** |
| Oct 29, 2025 | 0.424 | 0.416 | **+1.81%** |

Buyers consistently pay above market rate. NiceHash tells sellers this is a feature:

> "Because buyers are competing and paying a premium, **you (the seller) capture that premium.**"

The math is simple: If buyers were consistently profitable, there would be no premium for sellers to capture.

## Who Actually Wins?

Let's map this out:

| Role | What NiceHash Says | Reality |
|------|-------------------|--------|
| **NiceHash** | Takes 3% fee + 0.0001 BTC per order | Zero risk, guaranteed income |
| **Sellers** | "Capture the premium" | Low risk, steady income |
| **Buyers** | "You're going to lose money at first" | High risk, "expensive education" |

The sellers are the house. NiceHash is the venue. The buyers are the gamblers.

## The Comparison to Cloud Mining

Here's the wildest part. NiceHash positions itself as better than traditional cloud mining by saying:

> "Unlike classical cloud mining, where you purchase long-term contracts on private mining farms that **typically yield no return**..."

Their sales pitch is literally: "We're better than things that typically yield no return."

That's not a high bar.

## The Alternative: Stop Gambling, Start Systematizing

Here's what I do instead:

I don't gamble on finding blocks. I don't try to time fee spikes. I don't pay premiums hoping the math works out. I don't accept that "losing money at first" is just part of the game.

I use an AI-enhanced autonomous trading system that:

- Buys when prices dip
- Sells when profits are available
- Operates 24/7 without emotions
- Never gambles—only takes confirmed profits

In 11 months, I've closed over 900 trades with a 100% success rate on closed positions. No lottery tickets. No "expensive education." Just systematic profit-taking.

My scoreboard only goes up. NiceHash tells their buyers to expect it to go down first.

## The Bottom Line

NiceHash isn't hiding anything. Their own documentation says:

- ✅ "It's basically gambling"
- ✅ "You're going to lose money at first"
- ✅ "Luck can destroy you"
- ✅ "Wake up losing money"
- ✅ "Wipe out your entire investment"
- ✅ Buyers pay premiums that sellers capture

**For sellers with hardware, NiceHash might make sense. You're the house.**

**For buyers? You're the gambler. And NiceHash is honest enough to tell you that upfront—if you read carefully.**

There's a better way to put your money to work in crypto. One where "losing money at first" isn't an expected outcome.

---

*Sources: All quotes taken directly from official NiceHash documentation, accessed December 10, 2024. Archived copies retained for reference.*

---

**Related:**
- [The 50% Illusion: Why "Prediction Markets" Are Just Gambling With Extra Steps](/blog/forecasttrader-50-percent-illusion) - Another 'investment' that's really just gambling
- [A Billion Dollar Lottery and the Math Nobody Wants to Hear](/blog/powerball-billion-dollar-lottery-math) - When the math is designed against you`},{title:"The 50/50 Strategy: How I Balance Taking Profits and Growing Capital",slug:"the-50-50-strategy",published:!0,date:"2025-12-10T12:00:00Z",heroImage:"/blog-images/the-50-50-strategy-hero.webp",imageAlt:"The 50/50 Strategy - 50% to life, 50% to growth with dollar sign splitting into groceries and compound growth",excerpt:"Everyone asks 'how much should I invest?' But after 11 months of autonomous trading, I've realized that's the wrong question. Here's my 50/50 approach to taking profits AND growing capital.",category:"Education",metaDescription:"Stop hoarding paper gains. My 50/50 strategy: take half your trading profits for real life, reinvest half for growth. Real numbers from 11 months of autonomous trading.",content:`# The 50/50 Strategy: How I Balance Taking Profits and Growing Capital

Everyone asks the same question: "How much should I invest?"

But after 11 months of autonomous trading, I've realized that's the wrong question. The better question is: **"What do I do with what I earn?"**

Here's my approach—and the real story of how I got here.

---

## The Rule Is Simple

**50% of every profit gets saved. 50% gets reinvested.**

When my trading system closes a profitable trade, half of that profit is automatically protected. The other half goes back into the trading pool to compound.

No exceptions. No "just this once." No emotions.

![Three paths for your trading profits - withdraw all, 50/50 split, or reinvest all](/blog-images/the-50-50-strategy-01.webp)

---

## Why 50/50?

Three reasons:

### 1. It Forces Discipline

The hardest part of trading isn't finding opportunities—it's not giving back your gains. Every trader has watched profits evaporate because they got greedy or emotional.

50/50 removes the decision. Half is protected, period. You can't lose what you've already taken off the table.

### 2. It Protects Against the Unknown

Markets crash. Exchanges fail. Life happens. Having half your profits in a protected "savings" bucket means you're never starting from zero.

My trading capital can have a bad month. My savings don't care.

### 3. It Compounds Both Ways

The reinvested 50% grows your trading capital, which means larger position sizes and larger absolute profits over time.

The saved 50% is real money you've actually captured. Not paper gains. Not "if the market holds." Real dollars.

---

## My Real Numbers (11 Months)

Here's what my autonomous trading system has actually generated:

| Month | Profit | 50% Saved | 50% Reinvested |
|-------|--------|-----------|----------------|
| Feb 2025 | $661.51 | $330.76 | $330.76 |
| Mar 2025 | $266.28 | $133.14 | $133.14 |
| Apr 2025 | $554.74 | $277.37 | $277.37 |
| May 2025 | $373.53 | $186.77 | $186.77 |
| Jun 2025 | $379.26 | $189.63 | $189.63 |
| Jul 2025 | $823.06 | $411.53 | $411.53 |
| Aug 2025 | $407.83 | $203.92 | $203.92 |
| Sep 2025 | $229.06 | $114.53 | $114.53 |
| Oct 2025 | $259.95 | $129.98 | $129.98 |
| Nov 2025 | $288.75 | $144.38 | $144.38 |
| Dec 2025* | $122.60 | $61.30 | $61.30 |
| **TOTAL** | **$4,366.57** | **$2,183.29** | **$2,183.29** |

*December is partial month (through Dec 11)*

**Current Status: $1,744 saved** (50% auto-save enabled)

![Compound growth fantasy vs reality - theoretical millions vs actual verified results](/blog-images/the-50-50-strategy-02.webp)

---

## The Real Journey: My Profits Management History

I'm going to show you something most trading influencers would never share: **my actual transaction history for the savings account.**

It's messy. It shows me learning. It shows me making mistakes. That's the point.

| Date | Amount | Old Value | New Value |
|------|--------|-----------|----------|
| 8/13/2025 4:21 PM | $1,210.00 | $0.00 | $1,210.00 |
| 7/13/2025 8:33 PM | ($10.63) | $10.63 | $0.00 |
| 7/13/2025 10:04 AM | ($1,446.39) | $1,446.39 | $0.00 |
| 7/3/2025 8:01 AM | ($0.18) | $1,312.75 | $1,312.57 |
| 7/3/2025 8:00 AM | ($81.56) | $1,394.31 | $1,312.75 |
| 7/3/2025 7:56 AM | $81.68 | $1,312.63 | $1,394.31 |
| 7/3/2025 7:54 AM | ($1,312.50) | $2,625.13 | $1,312.63 |
| 7/3/2025 7:53 AM | ($1,312.50) | $3,937.63 | $2,625.13 |
| 7/3/2025 7:53 AM | $1,312.50 | $2,625.13 | $3,937.63 |
| 7/3/2025 7:51 AM | $2,625.13 | $0.00 | $2,625.13 |
| 7/2/2025 2:09 PM | ($1,787.75) | $1,787.75 | $0.00 |
| 4/21/2025 8:48 AM | ($621.37) | $1,724.37 | $1,103.00 |
| 4/18/2025 7:37 AM | ($0.01) | $1,682.06 | $1,682.05 |
| 4/16/2025 3:06 PM | $43.19 | $1,633.24 | $1,676.43 |
| 4/11/2025 7:22 AM | ($795.03) | $1,590.06 | $795.03 |
| 4/9/2025 3:56 PM | $738.34 | $770.49 | $1,508.83 |
| 3/20/2025 2:54 PM | $31.34 | $668.66 | $700.00 |
| 3/20/2025 2:52 PM | $600.00 | $68.66 | $668.66 |
| 1/17/2025 8:17 PM | ($7.23) | $7.23 | $0.00 |

### What This History Shows

**January-March:** I was just getting started. Small amounts, experimenting with the system. The $7.23 withdrawal in January? I was testing how everything worked.

**April:** Tried different approaches. Withdrew some, added some back. You can see me figuring out what ratio felt right.

**July 2nd-3rd:** This is where it gets interesting. I went through a phase of "let me put everything back into trading" — you can see me emptying the savings ($1,787.75 out), then adding a bunch back, then pulling it out again.

I was second-guessing the strategy. Thinking maybe I should go all-in on growth.

**July 13th:** Pulled everything out again. Savings went to $0.

**August 13th:** Reset. Put $1,210 back in and committed to the 50/50 rule. No more touching it.

Since then? The balance has only gone up. Currently at **$1,744**.

---

## The Messy Middle Is The Point

I could have shown you a clean chart that goes up and to the right. That's what most trading gurus do.

Instead, I'm showing you the reality: **I didn't have this figured out from day one.**

I experimented. I second-guessed myself. I tried going all-in on reinvesting. I tried taking everything out.

What I learned: **The 50/50 rule only works if you actually follow it.**

The months where I kept touching the savings? Stressful. Always wondering if I made the right call.

The months since August where I've just let the 50% rule run? Peaceful. The number goes up automatically. I don't think about it.

![11 months of 50/50 in action - $4,854 total profit split between life and growth](/blog-images/the-50-50-strategy-03.webp)

---

## How The Savings Actually Work

People ask: "Where does the saved money go? Do you transfer it to a bank?"

No. Here's how it works:

**The savings stay in your exchange account** (Coinbase in my case). They're not physically moved anywhere.

**The trading software knows not to touch them.** When my system calculates available capital for trading, it excludes the protected savings amount. That money exists in my account but is "off limits" for new positions.

**No transfers needed.** This is important because:
- No transfer fees
- No tax events from moving money
- Instant access if you truly need it (emergency fund)
- The savings earn the same exchange interest as your trading capital

It's discipline enforced by code, not by physical separation.

---

## The Anti-Gambling Philosophy

This 50/50 approach is core to my anti-gambling message:

- **Gamblers** chase bigger numbers and never cash out
- **Investors** take profits systematically and reinvest intentionally
- **Gamblers** see unrealized gains as "their money"
- **Investors** know only realized profits count

When you protect 50% of every profit, you're *proving* to yourself that this is real. The money is captured. It's not going back into the market. It's yours.

That psychological shift matters more than any compound interest calculator.

---

## Your Strategy, Your Choice

I'm not telling you 50/50 is the only way. I'm telling you it's *my* way—and here's why it works for me:

1. **I actually capture my profits** – This isn't theoretical wealth
2. **My capital still grows** – The reinvested half compounds
3. **I sleep well** – No anxiety about market crashes wiping everything out
4. **I can prove it works** – Real numbers, publicly tracked, messy history and all

Your situation might be different. Maybe you're younger and can afford 30/70 (save less, reinvest more). Maybe you need income now and should do 70/30. The specific ratio matters less than having a *plan* and sticking to it.

---

**The bottom line:** Stop hoarding paper gains hoping they'll turn into something real "someday." Protect your profits. Grow your capital. Do both.

That's the 50/50 strategy.

---

**Related:**
- [My Barber Was Up 40% on Robinhood. He Never Sold. Now He Feels Like He's Losing.](/blog/paper-gains-vs-realized-profits) - Why taking profits matters
- [Why I Show % Gain Instead of "How Much Should I Invest?"](/blog/percent-gain-vs-roi) - How I think about trading returns`},{title:"An NBA Star Made $160 Million. Now He's Facing Federal Charges Over a Gambling Scheme.",slug:"terry-rozier-nba-gambling-scandal",published:!0,date:"2025-12-09T14:00:00Z",heroImage:"/blog-images/terry-rozier-gambling-scandal-hero.webp",imageAlt:"Terry Rozier NBA gambling scandal - $160M career risked for gambling scheme",excerpt:"Terry Rozier had everything. A 10-year NBA career. $160 million in earnings. A starting spot on the Miami Heat. Then the FBI came knocking with Operation Nothing But Bet.",category:"Anti-Gambling",metaDescription:"NBA star Terry Rozier faces federal charges for gambling scheme. He made $160M legally - why risk it all? The psychology of gambling vs systematic trading.",content:`# An NBA Star Made $160 Million. Now He's Facing Federal Charges Over a Gambling Scheme.

**Terry Rozier had everything. A 10-year NBA career. $160 million in earnings. A starting spot on the Miami Heat. Then the FBI came knocking.**

---

## The Headline That Says It All

Miami Heat guard Terry Rozier was arraigned in federal court yesterday on wire fraud and money laundering conspiracy charges.

The allegation? He helped friends win sports bets by telling them he'd fake an injury and leave a game early.

In March 2023, Rozier played exactly 9 minutes and 36 seconds before leaving, citing a "foot issue." He didn't play again that season. Meanwhile, gamblers who knew he'd exit early collected "tens of thousands of dollars" in winnings.

The FBI called it **"Operation Nothing But Bet."**

You can't make this stuff up.

![Terry Rozier gambling scandal - $160M career at risk](/blog-images/terry-rozier-gambling-scandal-01.webp)

---

## The Numbers That Should Make You Think

Let's put this in perspective:

| What Rozier Had | Value |
|-----------------|-------|
| Career earnings | $160,000,000 |
| Current salary | ~$25M/year |
| Years in NBA | 10 |
| Championships played for | Multiple deep playoff runs |

| What He Allegedly Risked It For | |
|--------------------------------|-------|
| Friends' gambling winnings | "Tens of thousands" |
| His cut (if any) | Unknown |
| Potential prison time | Years |
| Career reputation | Destroyed |

A man with $160 million allegedly helped friends win maybe $50,000 in sports bets.

That's not a business decision. That's addiction. That's the gambling mindset.

---

## This Isn't an Isolated Incident

Rozier isn't the only one caught in the FBI's net:

**Chauncey Billups** - Portland Trail Blazers head coach, NBA Hall of Famer. Indicted for allegedly rigging high-stakes poker games using manipulated shuffling machines and X-ray tables. Yes, X-ray tables.

**Damon Jones** - Former NBA player and Lakers assistant coach. Charged with providing non-public injury information about LeBron James and Anthony Davis to sports bettors.

**30+ total arrests** - Including several Mafia figures.

The U.S. Attorney called it "one of the most brazen sports corruption schemes since online sports betting became widely legalized in the United States."

![Operation Nothing But Bet - NBA gambling scandal](/blog-images/terry-rozier-gambling-scandal-02.webp)

---

## The Psychology of "Easy Money"

Here's what I find fascinating about this story:

Terry Rozier has made more money playing basketball than most people will see in ten lifetimes. He doesn't need money. He has generational wealth.

But gambling isn't about needing money. It's about the rush. The feeling of "beating the system." The thrill of inside information. The ego of being a winner.

That psychology is exactly what destroys retail traders too.

How many people have thrown away their savings because they were chasing the feeling of a big win instead of building consistent wealth?

---

## Meanwhile, In My World...

While Terry Rozier was allegedly helping friends game the system, here's what my AI-enhanced autonomous trader was doing:

- Buying when conditions were favorable
- Selling when profit targets hit
- Never once trying to "beat" anything
- Never once needing inside information
- Never once risking everything for a quick score

The result? Consistent profits. Boring, predictable, legal profits.

No FBI. No arraignments. No $3 million bond. Just money in my account.

---

## Two Approaches to "Winning"

Let me show you the contrast:

**The Gambling Approach:**
- Find an edge (even an illegal one)
- Bet big on inside information
- Hope nobody finds out
- Risk everything for a single score
- Result: Federal charges, career destroyed

**The Systematic Approach:**
- Follow a proven system
- Capture small profits consistently
- No inside information needed
- No "edge" required—just volatility
- Result: Steady growth, sleep well at night

One approach lands you in Brooklyn federal court. The other lands you profits.

![Gambling vs Systematic Trading comparison](/blog-images/terry-rozier-gambling-scandal-03.webp)

---

## The Real Cost of Gambling Culture

This story isn't really about Terry Rozier. It's about what gambling culture does to people.

Sports betting is now legal in most states. Every NBA broadcast has betting odds. FanDuel and DraftKings sponsor everything. You can't watch a game without being reminded that you could be betting on it.

And we're surprised when professional athletes—who are surrounded by this culture—get caught up in schemes?

The normalization of gambling is creating a generation of people who think "edge" and "inside information" are the paths to wealth.

They're not.

The path to wealth is boring. It's systematic. It's consistent. It's the opposite of gambling.

---

## What I'd Tell Terry Rozier

If I could sit down with Terry Rozier before all this happened, here's what I'd say:

**"You have $160 million. You don't need schemes. You need systems."**

Put that money in systematic investments. Let it compound. Let the algorithms do the work. Stop trying to beat the house.

But that's not exciting, is it? That doesn't give you the rush.

And that's the problem with the gambling mindset. It's never about the money. It's about the feeling. And that feeling will destroy you.

---

## The Takeaway

Terry Rozier had a 100% legal path to generational wealth. He was already on it. $160 million in career earnings, with more coming.

Instead, he's now facing federal charges, on unpaid leave, with his reputation destroyed—allegedly for helping friends win "tens of thousands" in bets.

That's the gambling trap. You can have everything, and it's still not enough. There's always one more bet. One more scheme. One more edge to exploit.

Or you can step off the hamster wheel entirely.

You can stop trying to beat the system and start using systems that work for you.

You can trade the rush of gambling for the peace of consistent, systematic profits.

It's not as exciting. But it keeps you out of federal court.

![The gambling trap vs systematic wealth](/blog-images/terry-rozier-gambling-scandal-04.webp)

---

While others chase schemes, my autonomous trading system quietly captures market volatility. No inside information. No illegal edges. Just consistent profits from price movements that happen every single day.

Check out the [live trading transparency dashboard](/) to see what systematic trading actually looks like.

---

**Disclaimer:** This article discusses news events and my personal opinions. It is not financial or legal advice. Terry Rozier has pleaded not guilty and is presumed innocent until proven otherwise.

---

**Related:**
- [FanDuel's 25% Profit Boost: Why Boosting a Bad Bet Is Still a Bad Bet](/blog/same-game-parlay-profit-boost-trap) - How sports betting is designed to take your money
- [The 50% Illusion: Why "Prediction Markets" Are Just Gambling With Extra Steps](/blog/forecasttrader-50-percent-illusion) - Why prediction markets aren't investments`},{title:"Update: My Barber's Robinhood Stock Has Wiggled 4 Times. He's Captured $0.",slug:"barber-robinhood-update",published:!0,date:"2025-12-10T10:00:00Z",heroImage:"/blog-images/barber-robinhood-update-hero.webp",imageAlt:"Robinhood stock price chart showing 4 wiggles with $0 profit captured",excerpt:"The stock moved $105 → $150 → $110 → $135. That's over $110 in total movement per share. A systematic trader could have profited multiple times. My barber? Still waiting.",category:"Market Psychology",metaDescription:"Follow-up: Robinhood stock has wiggled 4 times since my barber bought it. He's captured $0 in profit. Here's why systematic traders win.",content:`# Update: My Barber's Robinhood Stock Has Wiggled 4 Times. He's Captured $0.

**The stock moved $105 → $150 → $110 → $135. That's over $70 in total movement per share. A systematic trader could have profited multiple times. My barber? Still waiting.**

---

This is a follow-up to my original post: [Paper Gains vs Realized Profits](/blog/paper-gains-vs-realized-profits)

---

## The Story So Far

A few weeks ago, I wrote about my barber's Robinhood investment. Quick recap:

- He bought HOOD at $105
- Watched it climb to $150
- Never sold a share
- It crashed to $110
- He felt like he was "losing money" despite being up from his entry

At the time, I made a simple point: **Paper gains aren't real. Only realized profits count.**

Well, here's the update.

---

## The Wiggle Continues

Robinhood stock is now trading around $135.

Let me map out what's happened:

| Event | Price | Change from Previous | Barber's Action |
|-------|-------|---------------------|----------------|
| Bought | $105 | — | Bought ✓ |
| Peak | $150 | +$45 (+43%) | Held |
| Crash | $110 | -$40 (-27%) | Held |
| Recovery | $135 | +$25 (+23%) | Still holding |

**Total price movement:** $45 up, then $40 down, then $25 up = **$110 in total movement per share**

**Profit captured by my barber:** $0

![Robinhood price wiggles visualization](/blog-images/barber-robinhood-update-01.webp)

---

## What a Systematic Trader Would Have Done

Here's the difference between paper trading and systematic profit-taking:

**Paper Trader (My Barber):**
- Bought at $105 ✓
- Held through $150 peak
- Held through $110 crash
- Still holding at $135
- **Realized profit: $0**
- **Current paper gain: +$30/share (29%)**

**Systematic Trader:**
- Bought at $105 ✓
- Took partial profits at $140-150 range
- Bought more during the dip to $110
- Took profits again on the bounce to $135
- **Realized profit: Multiple wins**
- **Still has positions for future moves**

The systematic approach doesn't try to time the absolute top or bottom. It just captures **wiggles** - the natural up-and-down movement that happens in every stock.

---

## The Psychology Trap

Here's what I suspect is happening in my barber's head right now:

**At $150:** "It's going to $180! I'm not selling yet."

**At $110:** "I should have sold at $150. I'll wait for it to get back there."

**At $135:** "Almost back to $150. I'll sell when it hits $150 again. Or maybe $160."

See the pattern? **The goal post keeps moving.**

He's not trading with a plan. He's trading with hope. And hope is not a strategy.

Meanwhile, the stock has given him at least three clear opportunities to take profit:
1. The run from $105 to $150
2. The bounce from $110 to $135
3. Any of the smaller wiggles in between

He's captured none of them.

![The hope cycle vs systematic trading](/blog-images/barber-robinhood-update-02.webp)

---

## My System's Approach

I don't trade individual stocks like HOOD. I use an AI-enhanced autonomous trading system for crypto. But the principle is exactly the same:

**The market wiggles. I profit from the wiggles.**

In November 2025 alone, my system executed dozens of trades. Each one captured a small piece of volatility. None of them required me to predict tops or bottoms.

Here's what that looks like:
- System buys when conditions are favorable
- System sells when profit target is hit
- Repeat forever
- Never sell at a loss

The result? Consistent realized profits. Not paper gains that evaporate. Not "I was up 40% but now I'm only up 29%." Actual money in my account.

---

## The $110 Question

Let me ask you this:

If you had bought HOOD at $105 and watched it go to $150, then crash to $110, then recover to $135...

**How would you feel?**

Most people would feel frustrated. Anxious. Maybe a little regretful.

But here's the thing: **The stock gave you multiple opportunities to profit.** You just didn't take them.

The wiggles aren't the problem. The wiggles are the *opportunity*. The problem is not having a system to capture them.

---

## What Happens Next?

I have no idea where Robinhood stock goes from here. Neither does my barber. Neither does anyone.

Maybe it goes to $200. Maybe it crashes to $80. Maybe it wiggles sideways for six months.

But I do know this:

**Whatever happens, there will be wiggles. And whoever has a system to capture those wiggles will make money.**

My barber will probably still be holding. Still waiting. Still hoping.

And the next time I'm in his chair, he'll either be bragging about paper gains or complaining about paper losses.

Either way, he won't have captured any of the wiggles.

---

## The Lesson

This isn't really about my barber or Robinhood stock. It's about a fundamental truth:

**Markets move. That movement is opportunity. But opportunity only becomes profit when you actually take it.**

Paper gains feel good. Realized profits *are* good.

I'd rather make $176 in actual profit than have $4,500 in paper gains that could disappear tomorrow.

What about you?

---

*Want to see how systematic profit-taking works in practice? Check out my [live trading transparency dashboard](/) showing every trade, every profit, every wiggle captured.*

Read the original post: [Paper Gains vs Realized Profits](/blog/paper-gains-vs-realized-profits)

---

**Disclaimer:** *This is my personal experience and opinion, not financial advice. I don't recommend or advise on individual stock picks. My trading system is for crypto, not stocks. Past performance doesn't guarantee future results.*

---

**Related:**
- [My Barber Was Up 40% on Robinhood. He Never Sold. Now He Feels Like He's Losing.](/blog/paper-gains-vs-realized-profits) - The original barber story
- [The 50/50 Strategy: How I Balance Taking Profits and Growing Capital](/blog/the-50-50-strategy) - How I actually capture gains`},{title:"Your Crypto Dies With You (Unless You Plan Ahead)",slug:"crypto-inheritance-planning",published:!0,date:"2025-12-09T12:00:00Z",heroImage:"/blog-images/crypto-inheritance-planning-hero.webp",imageAlt:"Bitcoin gravestone with chains and padlock - your crypto dies with you unless you plan ahead",excerpt:"An estimated $240 billion in Bitcoin is lost forever due to missing keys. Coinbase has no beneficiary feature. Your 2FA codes die with your phone. Here's what your family actually needs to access your crypto when you're gone.",category:"Education",metaDescription:"An estimated $240 billion in Bitcoin is lost forever. Learn what your family needs to access your crypto when you die - and why most people haven't prepared.",content:`# Your Crypto Dies With You (Unless You Plan Ahead)

**What your family actually needs to access your crypto when you're gone—and why most people haven't done it.**

---

My mom has boxes.

Boxes of Beanie Babies. Boxes of Department 56 Snow Village pieces. Boxes of collectibles she swears will be "worth something someday."

When she's gone, someone—probably me—will spend weeks sorting through it all, trying to figure out what's valuable (nothing), what has sentimental meaning (unclear), and what goes straight to Goodwill (most of it).

She has no inventory. No instructions. No plan.

Just boxes.

I used to judge her for this. Then I realized: **I'm doing the exact same thing with my crypto.**

Except my "boxes" are worth actual money. And unlike her Snow Village collection, my assets are protected by passwords, 2FA codes, and encryption that will lock out everyone—including my family—the moment I die.

---

## The $190 Million Cautionary Tale

In December 2018, Gerald Cotten died unexpectedly at age 30.

He was the CEO of QuadrigaCX, Canada's largest cryptocurrency exchange at the time. He was also, allegedly, the only person with access to the cold wallets holding $190 million in customer funds.

When he died, that money became inaccessible.

No backup keys. No succession plan. No way for anyone—not his wife, not his business partners, not the customers—to recover the funds.

The exchange filed for bankruptcy. Investigations followed. But the money? **Gone.**

Now, the QuadrigaCX story has additional layers of complexity (there are theories about whether Cotten faked his death, whether the funds ever existed, whether it was fraud from the start). The story is contested.

But here's what's NOT contested: **Nobody could access the crypto because nobody had the keys.**

Whether it was incompetence, fraud, or genuine tragedy doesn't change the lesson: If you're the only person who can access your crypto, your crypto dies with you.

![What your family needs to access your crypto - and what they probably don't have](/blog-images/crypto-inheritance-planning-01.webp)

---

## The Problem Most Crypto Holders Ignore

Here's what happens when a crypto holder dies:

### Traditional Bank Account:
1. Family presents death certificate
2. Bank verifies beneficiary designation
3. Funds transfer within weeks
4. Done

### Crypto on an Exchange (like Coinbase):
1. Family presents death certificate
2. Exchange requires probate court documents
3. Family needs access to deceased's email to verify
4. Family needs access to deceased's phone for 2FA
5. Exchange's legal team reviews (slowly)
6. Process takes 6-18 months IF everything goes smoothly
7. If 2FA codes are inaccessible? Could be impossible

### Crypto in Personal Wallets:
1. Family needs the seed phrase or private keys
2. Without them? **Funds are gone forever**
3. No customer service to call
4. No recovery process
5. No exceptions

Here's the uncomfortable truth: **Coinbase does not have a beneficiary feature.**

You can't log in and say "if I die, send my crypto to my wife." That feature doesn't exist. Your family will need to navigate a complex legal process while also somehow accessing your 2FA codes—which probably died with your phone.

---

## The 2FA Problem Nobody Talks About

Let's talk about two-factor authentication.

You're a responsible crypto holder. You have 2FA enabled on everything. Google Authenticator, Authy, or your exchange's app generates codes that change every 30 seconds.

Great security practice. **Terrible inheritance planning.**

When you die, your phone gets locked, factory reset, or sits in a drawer. Those 2FA codes? They're gone.

Your family knows your email. Maybe they even know your password. But when they try to log in to Coinbase and it asks for the 2FA code from your Authenticator app?

Dead end.

Yes, there are backup codes. Did you save them? Where? Can your family find them? Do they even know backup codes exist?

Most people set up 2FA once and never think about it again. They definitely don't think: "What happens to these codes when I die?"

---

## What About Active Trading Systems?

Here's something even fewer people consider: **What happens to an active trading system when the owner dies?**

I run an AI-enhanced autonomous trading system. It executes trades 24/7. It's made $4,844 in profits across 974 trades with a 100% success rate.

If I died tomorrow, my trading system would keep running.

It would keep opening positions. Keep closing profitable trades. Keep generating returns. And my family would have no idea it exists, how to access it, or what to do with it.

Is that money just... gone? Does the system run forever until the exchange closes the account? What happens to open positions?

These aren't hypothetical questions for me anymore. They're planning questions.

![The QuadrigaCX cautionary tale - $190M lost when CEO died](/blog-images/crypto-inheritance-planning-02.webp)

---

## My Mom's Boxes vs. My Crypto Plan

I've been sorting through my mom's stuff in my head for years. The collectibles she bought on QVC. The "limited editions" that turned out to be mass-produced. The things she swore would fund her retirement.

It's a mess. And it's a mess because there's no system.

No inventory. No values documented. No instructions on what matters and what doesn't.

I looked at my own crypto holdings and realized: **I'm one accident away from leaving my family the same kind of mess—except locked behind encryption.**

So I started documenting.

![Two approaches to what we leave behind - chaos vs. planning](/blog-images/crypto-inheritance-planning-03.webp)

---

## The Five Things Your Family Actually Needs

If you hold any meaningful amount of crypto, here's what your family needs when you're gone:

### 1. An Inventory of What You Own

Not just "I have some Bitcoin." A list:
- Which exchanges (Coinbase, Kraken, Binance, etc.)
- Which wallets (hardware wallets, software wallets)
- Approximate values (updated periodically)
- What's actively trading vs. long-term holds

### 2. Access Credentials (Stored Securely)

- Exchange login emails and passwords
- 2FA backup codes (this is critical)
- Hardware wallet PINs
- Seed phrases for personal wallets

**Do NOT put this in a regular document on your computer.** Use a secure solution like a safety deposit box, a fireproof safe, or a dedicated password manager with emergency access features.

### 3. A Designated "Crypto Executor"

This person needs to:
- Understand what crypto is (at least basically)
- Know where to find your access credentials
- Have legal authority to act on your behalf
- Ideally, have some experience with the platforms you use

This might not be the same person as your general estate executor. Your lawyer cousin might be great with traditional assets but have no idea how to access a Ledger wallet.

### 4. Step-by-Step Instructions

Don't assume knowledge. Write it out:
- "Log in to Coinbase using [email]. Password is in [location]. 2FA backup codes are in [location]."
- "My hardware wallet is in [location]. PIN is [number]. Seed phrase is in [location]."
- "My trading system runs on [platform]. To stop it, do [steps]. To withdraw funds, do [steps]."

### 5. Regular Updates

Crypto moves fast. Your instructions from 2022 might be useless in 2025 if:
- You've changed exchanges
- You've added new wallets
- Your passwords have changed
- Your 2FA method has changed

Set a calendar reminder. Quarterly review. Update the document. Tell your designated person where the new version is.

![The 5-step crypto inheritance checklist](/blog-images/crypto-inheritance-planning-04.webp)

---

## What I'm Building

I've seen both sides of this problem.

I've seen my mom's physical clutter with no organization. I've seen my own digital assets with no succession plan.

And I realized: **Most people don't plan for this because it's overwhelming and morbid and easy to put off.**

That's why I'm building something at **SaveMyStuff.com**—a simple way to document your digital assets and make sure your family can actually access them when needed.

Not a legal service. Not a custodial solution. Just a straightforward tool to get your digital estate in order before it's too late.

If you want early access when it launches, keep an eye on that domain.

---

## The Bottom Line

An estimated $240 billion in Bitcoin is already lost forever—coins mined in the early days by people who died, forgot their passwords, or threw away hard drives.

Don't add to that number.

Your crypto doesn't have to die with you. But it will, unless you plan ahead.

Your family won't know what you own. They won't know how to access it. They won't know who to call (there's no one to call).

The 20 minutes it takes to document your holdings and store your backup codes could be the difference between your family inheriting your wealth and your crypto joining the $240 billion graveyard.

I learned this watching my mom's boxes pile up. Don't make me learn it again when it's my turn to sort through someone's crypto.

---

**Related:**
- [Secure Your Crypto Exchange Account Before You Trade a Single Dollar](/blog/secure-coinbase-kraken-account) - First step: secure your accounts
- [How to Make Passive Income with Crypto (Without Day Trading)](/blog/how-to-make-passive-income-crypto) - Building crypto wealth worth protecting`},{title:"Adults Are Fighting Over $30 Cups While Their 401k Burns",slug:"collectible-gambling-labubu-bearista",published:!0,date:"2025-12-08T12:00:00Z",heroImage:"/blog-images/collectible-gambling-hero.webp",imageAlt:"Collectible gambling exposed - Labubu dolls and Bearista cups are slot machines with better marketing",excerpt:"Police called to Starbucks. $22,895 spent on blind boxes. Adults fighting over plastic. Labubu dolls and Bearista cups aren't collecting - they're gambling with better marketing.",content:`# Adults Are Fighting Over $30 Cups While Their 401k Burns

**Labubu dolls, Bearista cups, and the dopamine addiction disguised as 'collecting'**

---

Last month, police were called to a Texas Starbucks.

The crime? Adults fighting over a $30 teddy bear cup.

Not a robbery. Not a disturbance. Grown adults physically fighting over a glass cup shaped like a bear.

Meanwhile, on Reddit, a collector confessed to spending $2,500 in a single month chasing rare Labubu dolls. Another documented $22,895 in total "blind box" purchases.

These aren't children. These are adults with jobs, bills, and presumably retirement accounts that need funding.

And they're gambling.

---

## The Blind Box Is a Slot Machine

Let's be honest about what a "blind box" actually is.

You pay $28. You don't know what you're getting. There's a 1-in-144 chance you get the rare one everyone wants.

That's not collecting. That's a slot machine with better marketing.

The mechanics are identical:

- **Variable reward schedule** - You might win, you might not
- **Near-miss effect** - "I got the uncommon one, rare must be next!"
- **Sunk cost escalation** - "I've spent $500, I can't stop now"
- **Social proof** - TikTok unboxing videos showing winners (never the losers)

Casinos have regulated these mechanics for decades. Toy companies repackaged them for your Instagram feed.

![The blind box gambling trap explained](/blog-images/collectible-gambling-01.webp)

---

## The Bearista Cup: Manufactured Chaos

Starbucks released a $30 cup shaped like a bear. Here's what happened:

- People lined up at 4:50 AM (stores opened at 5:00)
- "High volume stores only received 1-2 cups"
- Fights broke out. Police were called. In Texas AND New Jersey.
- Cups appeared on eBay for $500 within 24 hours
- Starbucks issued an apology

But here's the part that should make you angry:

Starbucks admitted they "shipped more Bearista cups than almost any other merchandise item this holiday season."

Read that again. They shipped MORE than almost anything else. And stores got 1-2 each.

This isn't scarcity. This is manufactured chaos designed to generate viral content and $500 resale listings that make you feel like you missed out.

One Twitter user nailed it: "You have $60,000 in credit card debt?" "Just about, yeah." "And you just paid $250 on a Starbucks Teddy Bear Sippy Cup from some scalper on eBay?"

That's not a joke. That's America in 2025.

---

## Labubu: $677 Million in Dopamine Hits

Pop Mart, the company behind Labubu dolls, generated $677 million in revenue in the first half of 2025 alone.

That's not a typo. $677 million for small plastic dolls sold in mystery boxes.

The pitch is brilliant:

- "Ugly-cute" aesthetic that photographs well
- Celebrity endorsements (Rihanna, Kim Kardashian)
- Blind box mystery creates "unboxing content"
- Rare variants create artificial value

The reality is darker:

- One collector spent $22,895 on blind box purchases
- Another spent $2,500 in a single month
- Rare dolls have 1-in-144 odds (0.7%)
- Counterfeit "Lafufus" flood the market
- Most will be worthless within 2 years

"People have very little joy in this world," one commenter observed about the Bearista fights.

That's the saddest part. These aren't bad people. They're people chasing dopamine hits because they don't have a system that actually works.

![The real numbers behind collectible spending vs systematic trading](/blog-images/collectible-gambling-02.webp)

---

## The Collectible Graveyard: A History of "Investments" Gone Wrong

I'm not speaking theoretically here. I've watched this movie before.

A family member of mine collected Beanie Babies and Department 56 Snow Villages throughout the 1990s. Thousands of dollars. Careful storage. Tags preserved. Original boxes kept.

The retirement plan that never retired.

**The Princess Diana Beanie Baby** was supposed to be the holy grail. People expected it to fund college educations. One collector recently found one and checked eBay: "$20 a pop and still not selling."

**Beanie Babies overall:** At their peak, people were paying thousands for rare bears. Divorces fought over them in court. People broke into homes to steal them. In 1999, a man in West Virginia shot and killed a security guard over a dispute about hundreds of dollars in Beanie Babies.

Today? Bins of them at thrift stores for $1 each.

**Funko Pops:** The company literally dumped $30 million worth of inventory into landfills in 2023 because it cost more to store them than they were worth. By late 2025, Funko warned investors of "substantial doubt" about their ability to continue operating. Chapter 11 bankruptcy risk. The "investment" is now warehouse waste.

**Department 56 Snow Villages:** Beautiful ceramic houses that sold for $50-100 each. Collectors built entire rooms around their villages. One person I know inherited 100+ pieces - offered $5 per building, "but the store only wants specific buildings."

**The pattern is always the same:**

1. "Limited edition" creates artificial scarcity
2. Early buyers flip for profit, creating FOMO
3. Mass production floods the market
4. Demand collapses when the next trend arrives
5. Collections become garage sale inventory

One estate sale organizer shared this story: A woman collected every fast food toy since the early 1980s. Cataloged documents. Sealed packages. Boxes upon boxes. "She fully believed that these toys would be her retirement plan."

The entire house sold for about $10,000.

Labubu and Bearista are just the latest chapter. The ending has already been written.

![The collectible graveyard - Beanie Babies, Funko Pops, and what's next](/blog-images/collectible-gambling-04.webp)

---

## The "Investment" Lie

Every collectible craze has the same pitch: "It's an investment!"

Let's check the math.

**Labubu "Investment":**
- Buy blind box: $28
- Odds of rare variant: 0.7%
- Expected rare variants per $1,000 spent: ~0.25
- Most common outcome: $1,000 spent, shelf full of commons worth $50

**Bearista "Investment":**
- Retail price: $30
- Resale price (peak hype): $500
- Resale price (6 months later): $15 at Goodwill
- Return: Negative 50-95%

**Actual Investment (My Trading System):**
- January 2025 start: $0 profit
- December 2025: $4,700+ profit
- Every trade on record
- No gambling. No hoping. Just systematic execution.

Here's what Pop Mart won't tell you: When Beanie Babies crashed, people lost their life savings. When Funko Pops saturated the market, bins of them showed up at dollar stores.

The company made $677 million. The collectors will make nothing.

---

## The Alternative: Systems Over Speculation

While people fight over cups at 5 AM, my autonomous trading system executes trades at 2 AM while I sleep.

While collectors spend $2,500/month chasing 1-in-144 odds, my system generates $440/month average with 100% success rate on closed trades.

While Labubu investors hope their plastic dolls appreciate, I watch profits compound in my actual bank account.

The difference isn't luck. It's approach.

**Collecting** = Variable rewards, emotional decisions, hope-based strategy

**Systematic Trading** = Consistent execution, rules-based decisions, math-based strategy

One is designed to extract money from you through dopamine manipulation.

One is designed to grow your wealth through disciplined execution.

Ed Barsano, creator of [GoBabyTrade™](https://gobabytrade.com/432706BE), spent 25 years building that system. During a 90% market crash, he turned $200,000 into $950,000+ in realized profits.

Not by fighting over cups. By executing a system.

---

## The Bottom Line

I'm not saying don't enjoy things. Buy a Labubu if it makes you happy. Get the Bearista cup if you'll actually use it.

But don't call it investing. Don't spend $2,500/month chasing plastic. Don't fight strangers at Starbucks at 5 AM.

And definitely don't tell yourself "this is different" while your credit card balance grows and your retirement account stays empty.

If you want passive income, there's a better way than blind boxes and artificial scarcity.

The scoreboard only goes up. And I've never had to throw a punch for it.

---

*Ready to stop gambling and start building? [Start with GoBabyTrade™](https://gobabytrade.com/432706BE) - save $1,000 with my link. Or check out my [live results](/) - every trade, every profit, fully transparent. No blind boxes required.*

---

**Related:**
- [The $30 Trillion Collectible: Why Gold Isn't the Investment You Think It Is](/blog/gold-vs-stocks-collectible-tax) - Another collectible that's not the investment you think
- [The 50% Illusion: Why "Prediction Markets" Are Just Gambling With Extra Steps](/blog/forecasttrader-50-percent-illusion) - Speculation disguised as investing`,category:"Anti-Gambling",metaDescription:"Police called to Starbucks. $22,895 spent on blind boxes. Adults fighting over plastic. Labubu dolls and Bearista cups aren't collecting - they're gambling with better marketing."},{title:"FanDuel's 25% Profit Boost: Why Boosting a Bad Bet Is Still a Bad Bet",slug:"same-game-parlay-profit-boost-trap",published:!0,date:"2025-12-07T14:00:00Z",heroImage:"/blog-images/profit-boost-trap-hero.webp",imageAlt:"FanDuel profit boost exposed - the math behind same game parlays",excerpt:"Right now, FanDuel is offering 25% profit boosts on same-game parlays. Sounds like free money, right? Here's the math they're hoping you won't do.",content:`# FanDuel's 25% Profit Boost: Why Boosting a Bad Bet Is Still a Bad Bet

Right now, during NFL Week 14, FanDuel is pushing hard on their promotional machine.

Open the app today and you'll see:
- "Same Game Parlay Central" - Build parlays from multiple bets in one game
- "25% Same-Game Parlay Profit Boost" - Two tokens available (one for Sunday Night Football, one for any game)
- "$100K Daily Shuffle" - Free parlay builder for prizes
- "Pass The Leg" - A new group parlay where friends combine bets (up to 25 legs!)

That 25% profit boost sounds generous, doesn't it? FanDuel is essentially saying: "We'll pay you 25% more if you win!"

But here's what they're hoping you won't do: **the math.**

Let me show you why a 25% boost on a terrible bet is still a terrible bet.

![The real math behind FanDuel's profit boost promotions](/blog-images/profit-boost-trap-01.webp)

---

## Understanding the House Edge

Before we talk about boosts, let's talk about what you're actually betting on.

**Single Bet House Edge:**
When you place a standard single bet at -110 odds (the typical line), the sportsbook takes roughly 4.5% off the top. For every $100 you bet over time, you're expected to lose about $4.50.

That's not great, but it's manageable for entertainment purposes.

**But Same-Game Parlays Are Different.**

Here's where it gets ugly. When you combine multiple bets into a parlay, something mathematically brutal happens: **the house edge compounds.**

| Parlay Legs | Approximate House Edge |
|-------------|------------------------|
| 2 legs | ~10% |
| 3 legs | ~15-20% |
| 4 legs | ~25-30% |
| 5+ legs | ~35%+ |

That "Pass The Leg" promotion with up to 25 legs? The house edge approaches slot machine territory.

![How house edge stacks with each parlay leg](/blog-images/profit-boost-trap-02.webp)

---

## The "Profit Boost" Illusion

Now let's apply that 25% profit boost and see what actually happens.

**Example: A 3-Leg Same-Game Parlay**

You build a same-game parlay with three legs:
- Patrick Mahomes over 275 passing yards
- Travis Kelce anytime touchdown
- Chiefs to win

FanDuel offers you +500 odds (bet $100 to win $500).

**Without the boost:**
- Implied probability: 16.7% (what the odds suggest)
- Real probability: ~10-12% (after house edge)
- Expected value on $100: Lose ~$35-40

**With the 25% boost:**
- New odds: +625 (bet $100 to win $625)
- Your expected loss drops to: ~$25-30

**You're still losing.** You're just losing slightly less badly.

The boost doesn't turn a negative expected value bet into a positive one. It just makes the losing less painful - while making you feel like you got a deal.

---

## The Psychology They're Exploiting

FanDuel isn't stupid. They employ teams of behavioral psychologists and data scientists. These promotions are engineered to exploit specific mental shortcuts:

### 1. "I Was Going to Bet Anyway"

This is the most dangerous thought. The boost makes you feel smart for "getting value" on a bet you were already planning. But you probably weren't planning to bet a same-game parlay - FanDuel is steering you toward their highest-margin product.

### 2. The Reciprocity Trap

"They're giving me something, so I should use it." Those free boost tokens create a sense of obligation. You feel like you're wasting something if you don't use them. But using a coupon for something you don't need isn't saving money - it's spending money.

### 3. Urgency and Scarcity

"Only valid for today's games!" "Limited tokens available!" These time pressures short-circuit your rational thinking. You don't have time to do the math - you just have time to bet.

### 4. The Social Proof Play

"Pass The Leg" isn't just a bet - it's a social activity. Now your friends are involved. You're not just gambling; you're participating in something together. The peer pressure to participate (and keep participating) is built into the product.

### 5. Near-Miss Dopamine

Same-game parlays are designed to feel close even when you lose. Two of your three legs hit? You were SO CLOSE! Better try again. This near-miss effect is the same psychology that keeps people pulling slot machines.

---

## What FanDuel Doesn't Want You to Know

Here are some facts the marketing materials conveniently omit:

**Same-game parlays have WORSE odds than regular parlays.**

Why? Because the outcomes are correlated. If Mahomes throws for 300 yards, the Chiefs are more likely to win. If Kelce scores, Mahomes probably had a good game. FanDuel's algorithms account for these correlations - and adjust the odds against you.

**The boost percentage sounds bigger than it is.**

25% of +500 odds is an extra $125 on a $100 bet. But your probability of winning is still only ~10-12%. That extra $125 is only worth about $12-15 in expected value. On a bet where you're already expected to lose $35-40, a $12 reduction is... still a big loss.

**They're not boosting you - they're boosting their margins.**

Every dollar spent on "boosts" is a marketing expense that drives customers toward their most profitable products. The $125 extra they might pay you is covered many times over by the additional parlay volume the promotion generates.

---

## The Alternative: Math That Actually Works For You

Here's what frustrates me about sports betting promotions: they dress up terrible odds as "deals" while people looking for real returns get burned.

What if instead of needing a "boost" to make your bet slightly less bad, you used a system where the math actually works in your favor?

That's what Ed Barsano, creator of [GoBabyTrade™](https://gobabytrade.com/432706BE), built over 25 years of trading.

**The contrast is stark:**

| FanDuel Parlay | Autonomous Trading |
|----------------|--------------------|
| House edge: 15-35% against you | No house edge |
| "Boost" makes it slightly less bad | System designed to profit |
| One game, one chance | Thousands of opportunities |
| Need to predict outcomes | Profits from volatility |
| Time-limited gimmicks | Runs 24/7/365 |
| Emotional decisions | Systematic execution |

![FanDuel profit boosts vs systematic trading comparison](/blog-images/profit-boost-trap-03.webp)

Ed started with $200,000 in December 2021. The market crashed - his coins dropped 90%+ from entry prices. Alchemy Pay went from $0.12 to $0.01.

His result? **Over $950,000 in realized profits.**

No boosts needed. No promotional gimmicks. Just math that actually works.

---

## The Real Cost of "Entertainment"

I'm not here to tell you gambling is evil. If you set aside $50 for Sunday football and treat it as entertainment, that's your choice.

But be honest about what you're doing.

That "25% profit boost" isn't a financial opportunity. It's a discount on entertainment - like getting 25% off movie tickets. Except at the movies, you know exactly what you're paying. With parlays, the true cost is hidden behind exciting odds and promotional language.

**Here's a thought experiment:**

If FanDuel offered you this deal - "Give us $35, and we'll give you a 12% chance at $625" - would you take it?

That's exactly what the boosted parlay is. It just doesn't feel that way.

---

## What I'd Do With That $100

Instead of putting $100 on a boosted same-game parlay, here's what I actually do:

That $100 goes into my autonomous trading account. Over the past 11 months:

- **$4,700+** in realized profits
- **960+** closed trades
- **100%** success rate (never sold at a loss)
- **Every single month profitable**

No boosts. No promotions. No time pressure. Just systematic execution that compounds over time.

The $100 parlay has about a 12% chance of paying out. My $100 in the trading system has a 100% historical success rate on closed trades.

Which sounds like better math to you?

---

## The Bottom Line

FanDuel's 25% profit boost is brilliant marketing. It makes you feel like you're getting an edge. It creates urgency. It steers you toward their highest-margin products while making you think you're the smart one.

But boosting a bad bet doesn't make it a good bet. It makes it a slightly less bad bet that you probably wouldn't have placed otherwise.

The house always wins - not because they're lucky, but because the math is on their side.

If you want the math on YOUR side, stop looking for boosts and start looking for systems.

Ed Barsano spent 25 years building a system where the math actually works. No gimmicks. No time-limited promos. No 25% boost on already-terrible odds.

Just consistent, verifiable returns that compound while you watch the game instead of sweating your parlay.

---

**Related:**
- [An NBA Star Made $160 Million. Now He's Facing Federal Charges Over a Gambling Scheme.](/blog/terry-rozier-nba-gambling-scandal) - What happens when gambling takes over
- [A Billion Dollar Lottery and the Math Nobody Wants to Hear](/blog/powerball-billion-dollar-lottery-math) - More math the house hopes you'll ignore`,category:"Anti-Gambling",metaDescription:"FanDuel's 25% profit boost on same-game parlays sounds like a deal. Here's the math they hope you won't do - and why boosting a bad bet is still a bad bet."},{title:"A Crypto Billionaire Says Passive Income Doesn't Exist. He's Almost Right.",slug:"passive-income-myth-autonomous-trading",published:!0,date:"2025-12-07T10:00:00Z",heroImage:"/blog-images/passive-income-myth-hero.webp",imageAlt:"Passive income myth debunked - manual vs autonomous trading systems",excerpt:"Raoul Pal, Jaspreet Singh, and Humphrey Yang agree: passive income is a myth. But they're thinking about it wrong. Here's what 25 years of coded trading experience looks like.",content:`# A Crypto Billionaire Says Passive Income Doesn't Exist. He's Almost Right.

I recently watched a fascinating episode of Diary of a CEO featuring three financial heavyweights: Raoul Pal (crypto billionaire and former Goldman Sachs executive), Jaspreet Singh (Minority Mindset founder), and Humphrey Yang (personal finance creator with millions of followers).

The topic? Money, investing, and passive income.

And they all agreed on something that might surprise you: **passive income is basically a myth.**

Raoul Pal was the most direct about it. He called the whole concept an "industrialization complex" - something that's been sold to us but doesn't actually exist in the way we think it does.

Here's the thing: **he's almost right.** But he's missing one crucial piece.

![Manual passive income vs autonomous trading systems comparison](/blog-images/passive-income-myth-01.webp)

---

## The Panel's Argument: Nothing Is Truly Passive

Let me summarize what these experts were saying, because it's worth understanding their logic.

### Raoul Pal on Real Estate

Raoul shared his experience with rental properties. Every time he tried to rent out property, there were endless costs and headaches - maintenance, tenants, repairs, management fees. The "passive" income from real estate required constant attention and capital.

He's right. I've talked to enough landlords to know that rental properties are basically a second job disguised as an investment.

### Jaspreet Singh on Emotional Investing

Jaspreet made a brilliant point about how most people invest emotionally. They're constantly checking their phones, reacting to every market dip, buying high when everyone's excited and selling low when everyone's scared.

This resonated with me. The emotional cycle of investing is exhausting - and it's the opposite of passive.

### The Savings Account Trap

All three panelists agreed that keeping money in a savings account is essentially a "guaranteed loss" thanks to inflation. Your purchasing power erodes while you think you're being safe.

Again, they're right. A 4% savings yield means nothing when inflation is eating 5-6%.

### Dollar-Cost Averaging as the Solution

Their advice? Dollar-cost average into index funds or assets like Bitcoin. Set it up automatically and don't look at it.

It's solid advice. But here's where I think they missed something.

---

## Where I Disagree: The Effort Can Be Front-Loaded

The panelists were thinking about passive income the traditional way:

- **You** manage the rental property
- **You** control your emotions
- **You** decide when to buy and sell
- **You** do the work, forever

But what if the effort wasn't ongoing? What if 25 years of trading expertise, millions of lines of code, and decades of market experience could be **built into a system** that works without your involvement?

That's not hypothetical. That's exactly what Ed Barsano, creator of [GoBabyTrade™](https://gobabytrade.com/432706BE), has done.

---

## Ed Barsano: 25 Years of Effort, Coded Into Software

Ed Barsano has been trading for over 25 years. He didn't just learn the markets - he systematized everything he learned into an AI-enhanced autonomous trading system.

The effort that Raoul Pal says passive income requires? **Ed already did it.** He front-loaded decades of work into software that now executes trades 24/7 without emotional interference.

Here's what that looks like in practice:

- **Started:** December 19, 2021, with $200,000
- **Market conditions:** His coins dropped 90%+ from entry prices
- **Alchemy Pay:** Went from $0.12 to $0.01 (a 92% crash)
- **Result:** Over $950,000 in realized profits

Read that again. During a market crash that would have devastated any emotional investor, Ed's system generated nearly a million dollars in profit.

![Ed Barsano's trading results - $950K+ profit during 90% market crash](/blog-images/passive-income-myth-02.webp)

How? Because the system does what humans can't:

1. **It never sells at a loss** - It waits for profitable exits, no matter how long
2. **It trades 24/7** - Catching opportunities at 3am that you'd sleep through
3. **It has no emotions** - No panic selling, no FOMO buying
4. **It follows rules perfectly** - No "this time is different" rationalization

---

## The Emotional Cycle That Destroys Wealth

Jaspreet Singh's point about emotional investing deserves more attention. He described how people constantly check their phones, obsessing over every market movement.

We've all been there. The market drops 10% and suddenly you're refreshing your portfolio every five minutes, wondering if you should sell everything.

This is exactly the behavior that destroys wealth. And it's exactly what autonomous trading eliminates.

![The emotional investing cycle vs systematic trading](/blog-images/passive-income-myth-03.webp)

Ed Barsano put it perfectly: your DNA has to handle seeing red numbers. When you first start out, you can't handle watching positions go down. You panic. You make emotional decisions.

But a systematic trader? It just executes. Down, buy more. Up, take profit. Repeat forever.

The system doesn't care if Bitcoin drops 50%. It sees that as an opportunity to build inventory at better prices. When the market eventually recovers, it has positions everywhere ready to sell into strength.

---

## Dollar-Cost Averaging... But Better

The Diary of a CEO panelists recommended dollar-cost averaging as the best strategy for most people. And they're right - it's far better than trying to time the market.

But here's what autonomous trading adds:

**Traditional DCA:**
- Buy the same amount every week/month
- Hold forever
- Hope it goes up eventually
- Never take profits until you need the money

**Systematic Trading:**
- Buy as prices drop (automatic DCA)
- Sell on every bounce (take profits)
- Buy more at lower prices (build inventory)
- Repeat forever (compound gains)

The difference? Traditional DCA is passive accumulation. Systematic trading is passive **profit-taking**.

You're not just building a position - you're actively extracting value from market volatility while you sleep.

---

## "But Someone Had to Build the System"

Here's the objection you might be thinking: "Sure, it's passive for you, but Ed Barsano worked for 25 years to build it."

Exactly. **That's the point.**

When Raoul Pal says passive income doesn't exist, he's saying someone always has to do the work. And he's right.

But the question isn't whether work exists - it's **who does it and when.**

- With rental properties, YOU do the work forever
- With day trading, YOU manage emotions forever
- With an autonomous system, the work was done ONCE by someone who spent 25 years mastering it

You're not buying passive income - you're buying access to Ed Barsano's 25 years of effort, coded into software that works while you live your life.

Ed even endorsed what I'm building here at MyRoboticTrader.com. His words: "This is pure GOLD." Coming from someone who's made nearly a million dollars with his own system, that means something.

---

## What "Passive" Actually Means

Let me redefine passive income in a way that actually makes sense:

**Fake Passive Income:**
- Rental properties (you're a landlord)
- Dropshipping (you're running a business)
- Day trading (you're working 24/7)
- Dividend investing (passive, but 2-4% returns)

**Real Passive Income:**
- Systems where the effort was front-loaded by experts
- Automation that executes without your involvement
- Transparent results you can verify
- No emotional decisions required from you

The panelists on Diary of a CEO were thinking about the first category. They forgot the second one exists.

---

## The Savings Account Problem - Solved Differently

Remember how all three experts agreed that savings accounts are "guaranteed losses"?

Their solution was to invest in assets like stocks, real estate, or Bitcoin. But all of those require either:
- Active management (real estate)
- Emotional discipline (stocks/Bitcoin)
- Very long time horizons (all of the above)

Autonomous trading offers something different: **consistent, verifiable profits that compound over time** - without requiring you to make decisions.

My own results over the past 11 months:
- **$4,700+** in realized profits
- **960+** closed trades
- **100%** win rate (never sold at a loss)
- **Every single month** profitable

Is it going to make me a billionaire like Raoul Pal? No. But it's real passive income that I can verify, compound, and grow - without checking my phone every five minutes.

---

## The Bottom Line

Raoul Pal, Jaspreet Singh, and Humphrey Yang are brilliant financial minds. Their core message - that most "passive income" requires ongoing work - is absolutely correct.

But they're missing the category of income where the work was **already done by someone else** and coded into a system.

Ed Barsano spent 25 years learning, failing, iterating, and perfecting his trading approach. He didn't just learn the markets - he turned that knowledge into software that executes trades without human emotion, 24 hours a day, 7 days a week.

That's not fake passive income. That's leveraging someone else's lifetime of effort.

The panelists said you can't escape the work. They're right - but you CAN benefit from work that's already been done.

**That's the difference between renting out a property yourself and investing in a system built by a 25-year veteran who's already made $950,000 with it.**

Passive income doesn't exist? 

Maybe not the way they're thinking about it.

But autonomous trading changes the equation entirely.

---

**Related:**
- [How to Make Passive Income with Crypto (Without Day Trading)](/blog/how-to-make-passive-income-crypto) - How I generate passive income with crypto
- [Trading Disorders Are Real: Why I Let an AI Make Every Trade](/blog/trading-disorders-ai-solution) - Why automation makes passive income possible`,category:"Education",metaDescription:"Raoul Pal says passive income is a myth. He's almost right - but autonomous trading systems change everything. Here's what 25 years of coded expertise looks like."},{title:'Why I Show % Gain Instead of "How Much Should I Invest?"',slug:"percent-gain-vs-roi",published:!0,date:"2025-12-05T12:00:00Z",heroImage:"/blog-images/percent-gain-vs-roi-hero.webp",imageAlt:"Percentage gain chart showing consistent returns regardless of investment size",excerpt:"People always ask how much I've invested. But that's the wrong question. Here's why I show percentage gain per trade instead—and why it matters more than ROI.",content:`# Why I Show % Gain Instead of "How Much Should I Invest?"

One question I get a lot: *"How much do I need to invest to get results like yours?"*

It's a fair question. But I realized it's actually the wrong one—and it points to something bigger about how we've been trained to think about investing.

## The ROI Obsession

We're all conditioned to ask "What's my ROI?" It's the first thing people calculate. Put in $10,000, get back $11,000, that's 10% ROI. Simple, right?

But here's where it gets messy with active trading:

- What if you deposit money at different times?
- What if you withdraw some profits along the way?
- What if you move funds between accounts for safety (like I did during a job transition)?

Suddenly that clean ROI calculation becomes a nightmare. You're tracking deposits, withdrawals, transfers, timing everything perfectly. Most people give up or just guess.

I was there. I have money coming in, profits going out to my debit card, funds I temporarily moved to a safer spot when I was between jobs. Trying to calculate a single "ROI" number was making my head spin—and honestly, it wasn't even that useful.

![Why percentage gain per trade matters more than ROI calculations](/blog-images/percent-gain-vs-roi-01.webp)

## A Better Question

Instead of asking "What's my total ROI?", the better question is: **"How does this system actually perform?"**

And that's where percentage gain per trade becomes powerful.

My autonomous trading system doesn't care if I buy $50 or $500 of a coin. It follows the same principles either way. It buys when conditions are right, holds until the profit target is hit, and never sells at a loss.

The percentage gain per trade is the same regardless of position size.

That's the number that actually matters. Not how much I deposited. Not when I deposited it. Just: **what does each trade return?**

## What The Data Shows

Looking at my 968 closed trades over 11 months:

- **Average profit per trade:** $4.94
- **Average % gain per trade:** ~2-3%
- **Success rate:** 100% (I never sell at a loss)

That 2-3% per trade is consistent whether I'm trading with $5,000 or $25,000. The system performs the same way regardless of account size.

## The Simple Math

Want more dollar profits? The formula is straightforward:

- **More capital = more shares**
- **More shares = more dollar profit on each trade**
- **But the % gain stays the same**

Someone with $5,000 in the system will see the same percentage returns as someone with $50,000. The difference is just the dollar amount—$5 profit vs $50 profit on a 2% trade.

This is why I stopped trying to calculate a complicated ROI and started showing you what actually matters: consistent, profitable trades.

![How position size affects dollar profits but not percentage returns](/blog-images/percent-gain-vs-roi-02.webp)

## What Really Matters

Here's the bottom line: **I'm profitable every month.**

Some months are busier than others. July had 173 trades and $823 in profit. September had 42 trades and $229. The market dictates opportunity—but every single closed trade was profitable.

The scoreboard only goes up.

## See It For Yourself

I've added % Gain to every trade in the transaction log. You can also see the average % gain in the results summary, plus trade counts on the monthly charts so you can see how activity correlates with profit.

Full transparency, as always. No hiding behind vague ROI claims. Just real data from real trades.

Check it out on the [Trading Results](/) page.

---

**Related:**
- [The 50/50 Strategy: How I Balance Taking Profits and Growing Capital](/blog/the-50-50-strategy) - How I balance profits and growth
- [Why Your Crypto Trading System Should Never Sell at a Loss (And How That's Actually Possible)](/blog/never-sell-at-loss-crypto-trading) - Why 100% win rate matters more than ROI`,category:"Education",metaDescription:"Why percentage gain per trade matters more than ROI. Learn why I show % gain instead of asking 'how much to invest' - and what 968 trades reveal about consistent returns."},{title:"The $30 Trillion Collectible: Why Gold Isn't the Investment You Think It Is",slug:"gold-vs-stocks-collectible-tax",published:!0,date:"2025-11-30T12:00:00Z",heroImage:"/blog-images/gold-vs-stocks-collectible-tax-hero.webp",imageAlt:"Gold coins with IRS collectible tax stamp showing 28% rate versus stock market returns",excerpt:"The IRS doesn't classify gold as an investment—it's a 'collectible' taxed at 28%. Here's what the celebrity spokesmen won't tell you about gold's real returns, hidden costs, and why systematic trading beats shiny metals.",content:`# The $30 Trillion Collectible: Why Gold Isn't the Investment You Think It Is
### And why the IRS agrees with me

You've seen the commercials. William Devane, looking trustworthy in his living room, telling you to buy gold. Tom Selleck doing the same thing for reverse mortgages. There's a reason these companies hire the same type of spokesperson—trusted older actors who resonate with their target demographic: retirees watching cable news.

But here's what those commercials won't tell you: **the IRS doesn't even classify gold as an investment.**

Let me show you what I found.

---

## The Returns Nobody Talks About

![Slide: returns-1928]

Since 1928, gold has returned approximately 5% annually. Stocks? 9.9%. That's nearly double.

But it gets worse when you zoom in.

![Slide: reality-check]

Over the last 40 years (1984-2024), gold returned just 4.3% before inflation. After inflation? **A measly 1.5%.** Meanwhile, the S&P 500 delivered 8.6% after inflation.

And if you think gold is a reliable store of value, consider this:

![Slide: lost-decades]

Gold was the **ONLY major asset class** with negative performance across two consecutive decades (1980-2000). While stocks boomed, gold investors lost money for 20 years straight.

---

## The IRS Calls It a "Collectible" (Yes, Really)

Here's the part that shocked me:

![Slide: irs-tax]

According to IRS Topic 409, gold is taxed as a **collectible**—the same category as art, rugs, antiques, stamps, and wine. The maximum tax rate? **28%.**

Compare that to stocks and bonds, which qualify for long-term capital gains rates of 0%, 15%, or 20%.

![Slide: tax-impact]

On a $100,000 profit:
- **Stocks:** $20,000 in taxes (at 20%)
- **Gold:** $28,000 in taxes (at 28%)

That's **$8,000 more to the IRS** on the exact same gain. And in some states with the Net Investment Income Tax, your total rate on gold can hit **54%**.

![IRS collectible tax rates compared to investment tax rates](/blog-images/gold-vs-stocks-collectible-tax-01.webp)

---

## The Hidden Costs They Don't Mention

![Slide: storage-fees]

Physical gold requires storage. The average cost? **0.5% of your gold's value per year.** That's $500 annually on $100,000 worth of gold.

Over 20 years, you've paid **$10,000+ in storage fees alone.** When gold only returns 5% annually, storage is eating 10-20% of your gains before taxes even hit.

![Hidden costs of gold ownership including storage fees](/blog-images/gold-vs-stocks-collectible-tax-02.webp)

---

## The "Free Gold" Trap

![Slide: free-gold-trap]

"Open an account and get $10,000 in FREE silver!"

Sounds great, right? Here's the math:

You invest $100,000. They give you "$10,000 in free silver." Your account shows $110,000.

But here's what the CFTC warns: dealers mark up prices **20% to 400% above spot price.**

Try to sell immediately? You get $82,500 back.

Your "free" gift just cost you **$17,500.**

---

## Coins vs. Bars: The Markup Game

![Slide: coins-vs-bars]

Ever wonder why gold dealers push coins over bars?

**Coins:** 40-200% premiums above spot price (due to "numismatic value")
**Bars:** Much lower premiums, closer to spot price

The CFTC explicitly warns: "Numismatic coins can be difficult to objectively value and the market for proofs or rare coins is not very liquid."

Translation: **They're selling you coins because the margins are higher.** Some customers report losing half their investment to fees when they try to sell.

---

## The Celebrity Spokesperson Machine

![Slide: celebrity-machine]

William Devane has been filming Rosland Capital commercials since 2012. Tom Selleck became the face of AAG reverse mortgages in 2016.

Same playbook:
1. Hire trusted older TV actors
2. Target retirees watching cable news
3. Sell complex financial products using celebrity trust
4. Pass the advertising costs to customers through higher premiums

Rosland Capital was the **top advertiser on \\"The O'Reilly Factor\\"** in 2015-2016. Someone's paying for those ads—and it's not the company eating the cost.

---

## So What's the Alternative?

![Slide: gold-vs-trading]

I'm not here to sell you gold. I'm here to show you what **transparent, systematic trading** actually looks like.

**My results (as of November 30, 2025):**
- **$4,736.15** in total profits
- **957** closed trades
- **100%** success rate (never sold at a loss)
- **$4.95** average profit per trade
- **10 months, 27 days** track record

Every single trade is published publicly. No cherry-picked screenshots. No "free" gimmicks. No celebrity spokespersons.

Just a system that works while I sleep.

---

## The Bottom Line

Gold isn't an investment—it's a collectible. The IRS says so. The returns prove it. And the industry's marketing tactics should tell you everything you need to know about who's really benefiting.

If you want to see what real trading transparency looks like, [check out my live results](https://myrobotictrader.com).

The scoreboard doesn't lie.

---

**Sources:**
- IRS Topic 409: Capital Gains and Losses
- CFTC: Precious Metals Fraud Advisory
- Kiplinger: Capital Gains Tax Rates (2025)
- QuantifiedStrategies: Gold Returns Since 1928
- MyPlanIQ: Gold vs S&P 500 Historical Returns
- Rosland Capital advertising history
- AAG spokesperson announcements

---

**Related:**
- [Adults Are Fighting Over $30 Cups While Their 401k Burns](/blog/collectible-gambling-labubu-bearista) - Another collectible trap
- [How to Make Passive Income with Crypto (Without Day Trading)](/blog/how-to-make-passive-income-crypto) - What I invest in instead`,category:"Education",metaDescription:"The IRS taxes gold as a collectible at 28%—not an investment. Compare gold's 5% returns, hidden fees, and celebrity marketing to transparent systematic trading."},{title:"How to Make Passive Income with Crypto (Without Day Trading)",slug:"how-to-make-passive-income-crypto",published:!0,date:"2025-11-29T14:00:00Z",heroImage:"/blog-images/how-to-make-passive-income-crypto-hero.webp",imageAlt:"Cryptocurrency passive income methods comparison showing staking, lending, and automated trading",excerpt:"I spent months researching every crypto passive income method—staking, lending, DeFi, nodes, mining, and trading. Here's what actually works after 11 months and $4,736 in profits.",content:`# How to Make Passive Income with Crypto (Without Day Trading)

*Reading time: 10 minutes*

---

"How do I make passive income with crypto?"

It's one of the most searched questions in the crypto space—and one of the most misunderstood.

Most answers you'll find involve either:
- **Day trading** (not passive at all)
- **Staking** (passive, but low returns)
- **Yield farming** (passive until you get rugged)
- **Running nodes** (requires technical knowledge and capital)

I spent months researching every option before finding something that actually works for me. After 11 months and $4,736 in profits, I want to share what I learned—including the methods I tried and abandoned, and the one that's actually generating consistent income while I sleep.

---

## The Passive Income Spectrum: From "Set and Forget" to "Full-Time Job"

Let's be honest: most "passive income" in crypto isn't truly passive. Here's how the popular methods actually stack up:

| Method | Passive Level | Typical Returns | Risk Level | My Verdict |
|--------|---------------|-----------------|------------|------------|
| Staking | ⭐⭐⭐⭐⭐ | 4-8% APY | Low-Medium | Truly passive, but slow |
| Lending (CeFi) | ⭐⭐⭐⭐ | 3-10% APY | Medium-High | Platform risk (Celsius, BlockFi) |
| Yield Farming (DeFi) | ⭐⭐⭐ | 10-100%+ APY | Very High | Not passive—constant monitoring |
| Running Nodes | ⭐⭐⭐ | Varies widely | Medium | Technical barrier, capital intensive |
| Crypto Mining | ⭐⭐ | Declining | High | Electricity costs, equipment |
| Day Trading | ⭐ | -90% to +1000% | Very High | NOT passive—it's a full-time job |
| Automated Trading | ⭐⭐⭐⭐ | Varies by system | Medium | Depends on the system |

Let me break down each one—some from personal experience, others from extensive research.

---

## Method 1: Staking

**What it is:** Lock up your crypto to help validate transactions on a blockchain. In return, you earn rewards.

**The good:**
- Truly passive once set up
- Low risk if staking major coins (ETH, SOL, ADA)
- No technical knowledge required on most exchanges

**The bad:**
- Returns are modest (4-8% APY typically)
- Your funds are locked for periods of time
- You're still exposed to the underlying crypto's price swings

**Real example:** Stake $10,000 in ETH at 4% APY = $400/year, or about $33/month.

**My experience:** I have small staking positions in ETH and TIMPI. It's legitimate passive income, and I like supporting networks I believe in. But the returns are slow—$33/month on $10k isn't going to change most people's lives. I treat staking as a long-term hold strategy rather than a primary income source.

---

## Method 2: Crypto Lending (CeFi Platforms)

**What it is:** Lend your crypto to a centralized platform, they pay you interest.

**The good:**
- Higher rates than staking (historically 5-12%)
- Very easy to set up
- Funds often more accessible than staking

**The bad:**
- **Platform risk is real.** Celsius, BlockFi, Voyager—all went bankrupt. Users lost billions.
- You're trusting a company with your crypto
- "Not your keys, not your coins"

**My take:** After watching multiple lending platforms collapse in 2022, I don't use CeFi lending. The extra few percent isn't worth the risk of losing everything.

---

## Method 3: Yield Farming (DeFi)

**What it is:** Provide liquidity to decentralized exchanges or protocols in exchange for fees and token rewards.

**The good:**
- Potentially high returns (sometimes 50-200% APY)
- Decentralized—no company to go bankrupt
- You control your keys

**The bad:**
- **Impermanent loss** can wipe out your gains
- Smart contract risk (hacks, exploits)
- Requires constant monitoring and rebalancing
- High APYs often come from inflationary tokens that crash

**Real talk:** Those 200% APY farms? The token rewards are usually worthless within months. I've watched "passive income" strategies require daily attention to avoid losses.

**My take:** DeFi yield farming is not passive income—it's a part-time job with high risk. Skip it unless you're a DeFi expert.

---

## Method 4: Running Crypto Nodes

**What it is:** Run specialized software that supports a blockchain network. Get paid in crypto for your contribution.

**The good:**
- Can generate meaningful income ($200-2000+/month depending on the project)
- You're supporting decentralization
- Some projects have strong communities

**The bad:**
- High upfront costs (some nodes require $10,000-100,000+ in tokens)
- Technical setup and maintenance
- Node rewards can decrease over time
- Token price volatility affects your returns

**Popular options:** Flux, Presearch, Theta, various DePIN projects

**My take:** Nodes can work, but the barrier to entry is high. You need technical knowledge, significant capital, and the stomach for token volatility. Not beginner-friendly.

---

## Method 5: Crypto Mining

**What it is:** Use computing power to validate transactions and earn crypto rewards.

**The good:**
- Once dominant passive income method
- Can still be profitable with cheap electricity
- You accumulate crypto over time

**The bad:**
- Electricity costs eat profits
- Equipment becomes obsolete quickly
- Increasing difficulty means declining returns
- Noise, heat, maintenance issues

**My take:** Mining made millionaires in 2015. In 2025, it's a tough business unless you have industrial-scale operations with cheap power. Not practical for most individuals.

---

## Method 6: Day Trading (The "Passive Income" Lie)

Let's address the elephant in the room. Scroll TikTok or X for five minutes and you'll see someone claiming they make $10k/month "trading crypto."

**The truth:**
- 80-90% of day traders lose money
- It's a full-time job requiring constant screen time
- Emotional stress is enormous
- Most "gurus" make money selling courses, not trading

**Day trading is the opposite of passive income.** If you're watching charts all day, you have a job—and probably a losing one.

![Comparison of crypto passive income methods by effort and returns](/blog-images/how-to-make-passive-income-crypto-01.webp)

---

## What Actually Worked for Me: Automated Trading

After trying staking (too slow for primary income), researching DeFi (too risky), and watching the lending platform disasters from the sidelines, I found a different approach: **AI-enhanced autonomous trading with [GoBabyTrade™](https://gobabytrade.com/432706BE).**

Created by 25-year trading veteran Ed Barsano, GoBabyTrade™ is a systematic trading system that:
- Monitors the crypto market 24/7
- Executes trades based on algorithms, not emotions
- Most importantly: **never sells at a loss**

That last part is key. The system only closes positions when they're profitable. It might take a day, a week, or a month—but it waits until it can take profit.

### My Actual Results (11 Months)

| Metric | Value |
|--------|-------|
| **Total Profit** | $4,736.15 |
| **Total Trades** | 957 |
| **Win Rate** | 100% |
| **Average Per Trade** | $4.95 |
| **Monthly Average** | $430.56 |
| **Best Month** | $817.31 |

Is $430/month going to make me rich overnight? No. But here's what matters:

1. **It's actually passive.** I check it occasionally but don't manage it daily.
2. **It's consistent.** Every month has been profitable—even when Bitcoin crashed 15%.
3. **It's verifiable.** Every trade is public—anyone can check.

### Monthly Breakdown

| Month | Profit | Trades |
|-------|--------|--------|
| January 2025 | $476.00 | 110 |
| February 2025 | $686.72 | 154 |
| March 2025 | $261.93 | 74 |
| April 2025 | $552.58 | 105 |
| May 2025 | $376.29 | 79 |
| June 2025 | $382.98 | 73 |
| July 2025 | $817.31 | 172 |
| August 2025 | $413.54 | 68 |
| September 2025 | $229.08 | 42 |
| October 2025 | $259.96 | 45 |
| November 2025 | $279.75 | 35 |

Notice how even "slow" months still made money. That's the power of a system that never realizes losses.

![My automated trading results showing consistent monthly profits](/blog-images/how-to-make-passive-income-crypto-02.webp)

---

## The 50/50 Strategy: Building Wealth Systematically

Here's something most passive income "gurus" don't talk about: **what you do with your profits matters as much as how you earn them.**

I use a simple 50/50 rule:
- **50% goes to savings** — This is money I've actually made. It's real. It's mine.
- **50% gets reinvested** — This increases my trading capital, which increases future earnings.

On top of that, I add fresh capital monthly to accelerate growth.

Why does this matter? Because I'm not just earning passive income—I'm building a compounding machine. As my capital grows, my potential profits grow. That $430/month average? It should increase over time as I systematically add to my trading capital.

This is the opposite of gambling, where people risk everything hoping for a big win. I'm playing the long game: consistent profits, systematic reinvestment, growing capital base.

---

## How to Evaluate Any Crypto Passive Income Opportunity

Before you put money into anything, ask these five questions:

### 1. Can I verify the results independently?

Not screenshots—actual transaction history or third-party verification. My trading results are publicly—you can check them yourself. If someone won't show you real proof, walk away.

### 2. What's the actual risk?

Every method has risk. Staking has lock-up risk. Lending has platform risk. DeFi has smart contract risk. Understand what you're exposed to.

### 3. Is it truly passive?

If you need to check it daily, rebalance weekly, or stress about it constantly—that's not passive income. That's a job.

### 4. Where do the returns come from?

Staking returns come from inflation and transaction fees. Lending returns come from borrowers paying interest. If you can't identify the source, you might BE the source (Ponzi).

### 5. What happens in a bear market?

This is the real test. My system made $229 in September 2025 while Bitcoin dropped. Many "passive income" strategies blow up when markets turn.

---

## The Bottom Line

Here's my honest take after a year of research and 11 months of real results:

**For true beginners:** Start with staking on a major exchange. It's slow but safe and teaches you the basics.

**For those with more capital:** Consider a mix of staking and automated trading. Diversify your passive income streams.

**For everyone:** Avoid anything promising unrealistic returns. If someone claims 100%+ APY with no risk, they're either lying or don't understand the risks they're taking.

The best passive income is boring. It's consistent, verifiable, and lets you sleep at night.

My autonomous trading system won't make me a millionaire overnight. But $430/month—growing as I reinvest and add capital—compounding over years while I focus on my actual life? That's the kind of passive income worth having.

The scoreboard only goes up. And unlike the TikTok gurus, you can actually watch it happen.

---

**Want to see the live results?** Check out the full trading transparency dashboard at [myrobotictrader.com](https://myrobotictrader.com)

*Disclaimer: Trading involves risk. Past performance doesn't guarantee future results. This is my personal experience, not financial advice. I am an affiliate for the trading system I use—see full disclosure on my website.*

---

**Related:**
- [A Crypto Billionaire Says Passive Income Doesn't Exist. He's Almost Right.](/blog/passive-income-myth-autonomous-trading) - Why most 'passive income' isn't passive
- [The Bucket and Well: A Simple Analogy That Explains How Automated Crypto Trading Actually Works](/blog/bucket-and-well-automated-trading-analogy) - How automated trading actually works`,category:"Education",metaDescription:"Comprehensive guide to crypto passive income: staking, lending, DeFi, nodes, mining vs automated trading. Real results after 11 months and $4,736 profit."},{title:`The "DM Me" Passive Income Trap: 5 Schemes That Aren't What They Seem`,slug:"dm-me-passive-income-trap",published:!0,date:"2025-11-29T10:00:00Z",heroImage:"/blog-images/dm-me-passive-income-trap-hero.webp",imageAlt:"Social media DM notification representing passive income scams and schemes",excerpt:"TikTok gurus and X reply guys promise easy money—but most make their income selling you courses, not from the methods they teach. Here are 5 'passive income' schemes that aren't passive or transparent, and what real verifiable income looks like.",content:`# The "DM Me" Passive Income Trap: 5 Schemes That Aren't What They Seem (And What Real Passive Income Looks Like)

*Reading time: 8 minutes*

---

You've seen them.

On TikTok, it's someone lounging in a high-rise apartment claiming they make $10k a month. On X (Twitter), it's the reply guy under every viral post: "I made $47k last month. DM me 'INFO' to learn how."

The "DM me" culture has exploded across social media. And behind nearly every one of these messages is the same playbook: hook you with flashy results, funnel you into a "free guide," then upsell you into a $197 ebook, a $499 coaching call, or a $5,000 mastermind group.

Here's the uncomfortable truth: **most of these people make their money teaching you how to make money—not from the method they're selling.**

I know this because I spent months researching passive income options before I found something that actually worked. Along the way, I learned to spot the difference between schemes that sound passive and systems that actually generate income while you sleep.

Let me break down the 5 most common "passive income" opportunities that aren't as passive—or as transparent—as they claim. Then I'll show you what real, verifiable passive income looks like.

---

## The 5 "Passive Income" Traps

### 1. Dropshipping Courses

**The Pitch:** "I made $50k/month dropshipping from my laptop. Buy my course and I'll show you how."

**The Reality:** Dropshipping can work, but it's far from passive. You're dealing with:
- Finding and vetting suppliers (constant work)
- Customer service nightmares when shipping takes 3 weeks
- Razor-thin margins eaten by ad costs
- Constant product research as trends die
- Refund requests and chargebacks

The people selling dropshipping courses often made most of their money... selling dropshipping courses. The screenshots they show? Often from their course sales, not their "dropshipping empire."

**Transparency Score:** Low. You rarely see their actual store analytics, supplier costs, or net profit after ad spend and refunds.

---

### 2. Amazon FBA / KDP "Passive" Publishing

**The Pitch:** "Upload a low-content book to Amazon and let Jeff Bezos send you checks."

**The Reality:** Amazon's self-publishing platforms (FBA for physical products, KDP for books) are legitimate. But "passive"? Not quite.

For KDP, you're competing against millions of other low-content books. One creator tried it and reported: "Got 2 views in 5 days. One was me. The other was probably my mom. Made $0.00."

For FBA, you're dealing with:
- Inventory management and storage fees
- Product sourcing and quality control
- Amazon's constantly changing rules
- Review manipulation wars with competitors
- Account suspension risks

Some people do well, but they're running active businesses—not collecting passive checks.

**Transparency Score:** Medium. Amazon provides real dashboards, but the gurus rarely show their actual royalty statements or net profit after fees.

---

### 3. Crypto "Signals" Groups

**The Pitch:** "Join my private Discord. I called the last 10 pumps. 500% gains this month."

**The Reality:** This is gambling dressed up as expertise. Here's what's really happening:

- **Survivorship bias:** You only hear about the wins. The 50 losing calls? Deleted or ignored.
- **Pump-and-dump schemes:** The "guru" buys first, alerts the group, then sells into your buying pressure.
- **Cherry-picked screenshots:** Easy to show the one trade that hit while hiding the five that didn't.

The FTC and SEC have been cracking down on these operations, but new ones pop up daily. The influencer with 50k followers promoting a "ground floor" crypto opportunity? Classic pump-and-dump.

**Transparency Score:** Almost zero. No verified track record. No public trade history. Just screenshots that could be Photoshopped in 30 seconds.

---

### 4. High-Yield "Staking" and DeFi Protocols

**The Pitch:** "Stake your crypto and earn 200% APY. Passive income on autopilot."

**The Reality:** If something offers 200% APY, ask yourself: where is that yield coming from?

Usually it's:
- **Ponzi mechanics:** Early investors paid with new investor deposits
- **Token inflation:** You're earning tokens that are being printed into worthlessness
- **Rug pull risk:** The protocol disappears overnight with your funds

In 2022 alone, DeFi hacks and rug pulls cost investors over $3 billion. That "passive income" can become a "passive loss" overnight.

Even legitimate staking on major platforms offers 4-8% APY—real, but hardly the life-changing returns advertised by influencers.

**Transparency Score:** Varies wildly. Legitimate protocols are transparent; scams show you a dashboard with fake numbers until they disappear.

---

### 5. "Done For You" Trading Systems (With No Proof)

**The Pitch:** "Our AI trades for you. Just deposit and watch your account grow."

**The Reality:** There ARE legitimate automated trading systems. But the scammy ones share common traits:

- **No verifiable track record:** They show percentage gains but won't show actual trade history
- **"Guaranteed returns":** No legitimate trading system guarantees anything
- **Pressure tactics:** "Only 10 spots left!" or "Price goes up at midnight!"
- **No transparency:** You can't see the trades happening in real-time

The fake crypto inheritance scam making rounds on TikTok is a perfect example: you receive a DM claiming someone left you crypto, log into a fake platform showing a huge balance, then get asked to pay a "VIP fee" to withdraw. The balance was never real.

**Transparency Score:** Usually zero. If they won't show you a live, verifiable record of every trade, run.

![Red flags to watch for in passive income schemes](/blog-images/dm-me-passive-income-trap-01.webp)

---

## What Real Passive Income Looks Like

I got tired of the smoke and mirrors. So I did something different.

I started documenting my journey with an AI-enhanced autonomous trading system in January 2025. Not with screenshots that could be faked. Not with cherry-picked results. With **public records that anyone can check, anytime.**

Here's what 11 months of radical transparency looks like:

| Metric | Value |
|--------|-------|
| **Total Profit** | $4,736.15 |
| **Total Trades** | 957 |
| **Win Rate** | 100% |
| **Average Per Trade** | $4.95 |
| **Monthly Average** | $430.56 |
| **Best Month** | $817.31 (July 2025) |

Is it going to make me rich overnight? No. But here's what it IS doing:
- Generating consistent, verified returns
- Running 24/7 without my involvement
- Building real wealth systematically
- Proving itself publicly, every single day

**The key difference? I'm not asking you to believe me. I'm showing you the receipts.**

---

## The Transparency Test

Before you pursue any "passive income" opportunity, ask these questions:

1. **Can I verify their results independently?** (Not screenshots—actual third-party verification)
2. **Do they show losses as well as wins?** (Everyone has losing periods; if they don't show any, they're lying)
3. **Is the income truly passive, or does it require ongoing work?** (Be honest about the time commitment)
4. **Where does the money actually come from?** (If you can't trace the revenue source, it might be you)
5. **Would they make money if I never bought their course?** (If their income depends on selling you something, their incentives are misaligned)

My trading system passes all five tests. Most "DM me" opportunities fail on question one.

![The transparency test for evaluating passive income claims](/blog-images/dm-me-passive-income-trap-02.webp)

---

## The Boring Truth About Real Passive Income

Real passive income isn't sexy. It doesn't involve rented Lamborghinis or Dubai hotel balconies.

It looks like:
- Consistent small gains that compound over time
- Transparent systems you can verify yourself
- Boring reliability instead of exciting volatility
- Actual numbers, not just percentage claims

I'm not here to sell you a course. I'm not going to ask you to "DM me INFO."

I'm just going to keep posting my results—the real ones, publicly—and let you decide for yourself whether systematic trading beats the "DM me" lottery.

The scoreboard only goes up. And unlike the TikTok gurus, you can actually watch it happen.

---

**Want to see the live results?** Check out the full trading transparency dashboard at [myrobotictrader.com](https://myrobotictrader.com)

*Disclaimer: Trading involves risk. Past performance doesn't guarantee future results. This is my personal experience, not financial advice. I am an affiliate for the trading system I use—see full disclosure on my website.*

---

**Related:**
- [The 50% Illusion: Why "Prediction Markets" Are Just Gambling With Extra Steps](/blog/forecasttrader-50-percent-illusion) - Another scheme that sounds too good to be true
- [How to Make Passive Income with Crypto (Without Day Trading)](/blog/how-to-make-passive-income-crypto) - What real passive income looks like`,category:"Education",metaDescription:"TikTok gurus promise easy money, but most make income selling courses. Learn to spot 5 passive income traps and what real verifiable income looks like."},{title:"Trading Disorders Are Real: Why I Let an AI Make Every Trade",slug:"trading-disorders-ai-solution",published:!0,date:"2025-11-25T10:00:00Z",heroImage:"/blog-images/trading-disorders-ai-solution-hero.webp",excerpt:"Psychology Today confirms 8% of investors meet criteria for problem gambling. Here's why I handed my trading to an AI—and what happened next.",content:`# Trading Disorders Are Real: Why I Let an AI Make Every Trade

*Psychology Today just confirmed what I've been saying for 10 months.*

---

## The Gambling Problem Nobody Talks About

A new Psychology Today article dropped this week that stopped me cold: **"Stock, Options, and Cryptocurrency Trading Disorders."**

Not "risky behavior." Not "bad habits."

*Disorders.*

As in: clinically diagnosable conditions that parallel gambling addiction.

The research is brutal:
- **8% of investors** in financial markets meet the criteria for "problem gambling"
- Researchers created a **Trading Disorder Scale (TDS)** to diagnose when trading becomes pathological
- Features like instant access, zero-commission fees, and gamified interfaces make trading *"more like a casino than a considered investment"*

Read that last part again. **More like a casino.**

---

## The Symptoms Hit Close to Home

According to the research, trading disorder shares the same psychological fingerprints as gambling addiction:

- **Overconfidence** - believing you can outsmart the market
- **Illusion of control** - thinking your analysis gives you an edge
- **Preoccupation** - constantly checking prices, unable to step away
- **Chasing losses** - doubling down after bad trades
- **Progressive inability to stop** - even when you know you should

Sound familiar?

I've been there. Three years ago, I was glued to charts, making emotional trades, revenge-trading after losses, and convincing myself that *this time* I had it figured out.

Spoiler: I didn't.

![Trading disorder symptoms that mirror gambling addiction](/blog-images/trading-disorders-ai-solution-01.webp)

---

## The Casino Always Wins (Until You Stop Playing)

Here's what hit me hardest from the Psychology Today piece:

> *"When leveraged trading becomes frequent, short-term, and speculative, stock traders refer to it as placing bets on stocks rather than investing."*

**Bets.** Not investments. *Bets.*

And yet, right now—today—there's an ad running for a crypto exchange offering:
- No KYC
- 100x leverage
- $50 welcome bonus

That's not an investment platform. That's a casino with extra steps.

The house edge on 100x leverage? It's not just unfavorable—it's designed to liquidate you. Studies show the vast majority of leveraged traders lose money. Not some. Not many. *Most.*

---

## My Breaking Point

In January 2025, I made a decision that felt like giving up.

I handed my trading over to an AI-enhanced autonomous system.

No more chart-watching. No more "gut feelings." No more 3 AM panic sells.

Just systematic rules executed without emotion, without ego, without the psychological traps that turn trading into gambling.

**10 months later:**
- 900+ completed trades
- 100% success rate on closed positions
- Over $4,000 in profit
- Every single transaction publicly visible

The kicker? I barely think about it anymore. The system runs. I live my life.

---

## Why Emotion-Free Trading Works

The Psychology Today article mentions Warren Buffett's warning that *"frequent trading costs drag performance, and active traders underperform."*

But it's not just about frequency. It's about **psychology.**

Human traders face:
- **FOMO** - Fear of missing out drives buying at peaks
- **Loss aversion** - We feel losses 2x more intensely than gains
- **Revenge trading** - Trying to "get back" at the market after losses
- **Confirmation bias** - Seeking information that supports what we already believe

My autonomous system faces none of this.

It doesn't get excited when crypto pumps 20%. It doesn't panic when the market crashes. It doesn't check Twitter for hot takes or get FOMO from Reddit threads.

It just executes. Systematically. Every single time.

![Human trading psychology vs AI systematic execution](/blog-images/trading-disorders-ai-solution-02.webp)

---

## The Uncomfortable Truth

Today's Fear & Greed Index: **20/100 (Extreme Fear)**

Right now, emotional traders are panic-selling. They're locking in losses. They're making decisions from fear instead of strategy.

Meanwhile, my system is doing what it always does: following the rules, ignoring the noise, building wealth one trade at a time.

This isn't about being smarter than the market. It's about being **honest** about human psychology.

Trading disorders are real. The research proves it. And the solution isn't more discipline or better charts or a new strategy.

The solution is removing yourself from the equation entirely.

---

## See It For Yourself

I don't ask you to trust me. I ask you to **verify.**

Every trade my system makes is publicly logged. No cherry-picked screenshots. No hypothetical backtests. Just raw, transparent data showing exactly what happens when you remove emotion from the equation.

**[See My Live Trading Results →](https://myrobotictrader.com)**

Because in a market full of gamblers, the best edge might just be refusing to play their game.

---

*The market doesn't care about your feelings. Why should your trading strategy?*

---

**Related:**
- [The Fear & Greed Index Hit 11. My AI-Enhanced Autonomous Trader Didn't Even Notice.](/blog/fear-greed-index-11-systematic-trading) - When emotions would have cost me money
- [My Barber Was Up 40% on Robinhood. He Never Sold. Now He Feels Like He's Losing.](/blog/paper-gains-vs-realized-profits) - The psychology of holding vs. selling`,category:"Market Psychology",metaDescription:"8% of investors meet criteria for problem gambling. Learn why trading disorders are real and how removing emotion led to 900+ winning trades.",imageAlt:"Split brain illustration showing emotional human trading versus logical AI trading"},{title:'The 50% Illusion: Why "Prediction Markets" Are Just Gambling With Extra Steps',slug:"forecasttrader-50-percent-illusion",published:!0,date:"2025-11-26T10:00:00Z",heroImage:"/blog-images/forecasttrader-50-percent-illusion-hero.webp",excerpt:"Interactive Brokers says you only need to be right 50% of the time. Here's why that's a trap designed to make gambling feel like investing.",content:`# The 50% Illusion: Why "Prediction Markets" Are Just Gambling With Extra Steps

*You only need to be right 50% of the time. How hard can it be?*

---

## The Pitch Sounds So Easy

Interactive Brokers just launched ForecastTrader, a platform where you bet on outcomes: Will CPI come in above expectations? Will tomorrow's temperature hit 80°F?

The marketing is seductive: **You only need to be right slightly more than 50% of the time to profit.**

50%. That's a coin flip. You're smarter than a coin flip, right?

That's exactly what they want you to think.

---

## The Math They Don't Show You

Here's what "just 50%" actually looks like in practice:

**The real break-even isn't 50%.** Once you factor in:
- Bid-ask spreads
- Trading fees
- Slippage (not getting the price you wanted)

Your actual break-even rate is closer to 52-53%. That "tiny edge" just got a lot harder.

**Variance will destroy you.** Let's say you genuinely have a 52% win rate. Sounds profitable, right?

Over 100 trades, normal variance means you could easily go 45-55 or even 40-60. You'd look like a losing trader even with a real edge. And if you sized aggressively during that cold streak? You're bust before your edge ever shows up.

![The 50% illusion breakdown - why the real break-even is higher](/blog-images/forecasttrader-50-percent-illusion-01.webp)

---

## Your Competition Isn't Dumb

Here's the part that really kills the dream.

When you place a bet on ForecastTrader, who's on the other side?

- **Quant traders** with real-time economic data feeds and backtested models
- **Weather nerds** running ensemble forecasts, not checking their phone app
- **Macro specialists** who've been modeling CPI releases for years

That "obvious" prediction you're about to make? They already priced it in hours ago.

To beat 50% after costs, you need either:
- Better data than the pros
- Faster data than the pros
- Better models than the pros

Do you have any of those? Be honest.

![Competition mismatch - retail vs professional traders](/blog-images/forecasttrader-50-percent-illusion-02.webp)

---

## The Sample Size Trap

Let's say you're genuinely skilled. You've got a 53% edge.

**How many trades do you need to prove it's skill and not luck?**

Hundreds. Maybe thousands.

That means:
- Months or years of consistent execution
- Discipline to keep trading through brutal losing streaks
- Mental fortitude to trust your process when you're down 20%

Most people abandon their strategy after a few bad weeks. They tweak, adjust, second-guess. And in doing so, they reset the clock and never let their edge compound.

Sound familiar? It's the same psychology that kills manual crypto traders.

![The sample size trap - how many trades to prove skill](/blog-images/forecasttrader-50-percent-illusion-03.webp)

---

## The Psychological Grind

Even with a good model, execution kills you:

- **You hesitate.** By the time you enter, the price already moved.
- **You overreact.** A few losses and you start changing your stake sizes emotionally.
- **You get bored.** Being "only" 2% better than the market doesn't feel exciting when your results look random for months.

This is the part nobody warns you about. The mental grind of realizing a small edge is exhausting. Most people quit before their skill ever shows up in the numbers.

---

## Wait, This Sounds Familiar...

If you've been reading this blog, you recognize the pattern:

- **Robinhood traders** watching gains evaporate because they never sold
- **100x leverage gamblers** getting liquidated
- **Sports bettors** convinced they have an edge

ForecastTrader is just another flavor of the same trap: **a system designed to make gambling feel like investing.**

The house always wins. Not because they cheat—but because they understand variance, psychology, and sample sizes better than you do.

---

## What Actually Works

Here's what the research shows:

> "Automate as much as possible: question ingestion, signal generation, order placement, and logging, so human error and emotion are minimized."

The only way to consistently beat markets is to **remove yourself from the equation.**

Not because you're dumb. Because you're human. And humans are terrible at:
- Staying disciplined through losing streaks
- Executing the same process thousands of times without deviation
- Ignoring emotional reactions to short-term results

That's why I handed my crypto trading to an AI-enhanced autonomous system 10 months ago.

**The result:**
- 900+ trades executed without emotion
- 100% success rate on closed positions
- Over $4,000 in profit
- Zero 3 AM panic decisions

I don't try to predict anything. I don't compete against quants. I just let the system execute while I live my life.

---

## The Bottom Line

ForecastTrader isn't investing. It's gambling with a finance vocabulary.

The 50% threshold is an illusion. The real bar—out-modeling sophisticated competitors, enduring brutal variance, and executing flawlessly for years—is so high that only a tiny minority will ever be profitable.

**You have two choices:**

1. Spend years trying to build a 2% edge against professional quants, hoping variance doesn't wipe you out first.

2. Let a systematic process do the work while you focus on literally anything else.

I made my choice 10 months ago. The results speak for themselves.

**[See My Live Trading Results →](https://myrobotictrader.com)**

---

*The market doesn't care about your predictions. Why keep making them?*

---

**Related:**
- [FanDuel's 25% Profit Boost: Why Boosting a Bad Bet Is Still a Bad Bet](/blog/same-game-parlay-profit-boost-trap) - Sports betting's version of the same trap
- [Renting Hashpower: Mining or Just Gambling With Extra Steps?](/blog/renting-hashpower-mining-or-gambling) - Another 'investment' that's really gambling`,category:"Education",metaDescription:"ForecastTrader promises easy profits at 50% accuracy. The math, competition, and psychology prove otherwise. Learn why prediction markets are gambling in disguise.",imageAlt:"Dice and stock chart showing the gambling nature of prediction markets"},{title:"My Barber Was Up 40% on Robinhood. He Never Sold. Now He Feels Like He's Losing.",slug:"paper-gains-vs-realized-profits",published:!0,date:"2025-11-23T10:00:00Z",content:`# My Barber Was Up 40% on Robinhood. He Never Sold. Now He Feels Like He's Losing.

**Paper gains vs realized profits: Why I made $176 this month while everyone else is talking about what they "almost" made.**

---

My barber bought Robinhood stock (HOOD) at $105.

It went to $150.

He never sold.

Now it's at $110.

He feels like he's losing money.

But here's the thing: **he never made money in the first place.** He had paper gains. They don't count. They never did.

This is the psychological trap that kills retail traders. They confuse "up on screen" with "money in pocket." And when the screen turns red, they panic.

Meanwhile, my trading system made $176.75 in November 2025. Not a huge number. But it's **real money**. Withdrawn. In my account. Realized profit.

Let me explain why this difference matters more than most people realize.

---

## The Barber Shop Reality Check

I was getting my hair cut last week when my barber started talking stocks.

"Man, I had Robinhood at $105. It went all the way to $150. I was up like 40%!"

Notice the past tense: **was**.

"So you sold at $150?" I asked.

"Nah, I figured it would keep going. I mean, it's Robinhood, right? Everyone uses it."

"What's it at now?"

"$110. So I'm still up a little, but I feel like I'm losing money."

There it is. The trader's paradox:
- He's technically up 4.8% from his entry
- But he *feels* like he lost because he didn't sell at the top
- He compares his current position to the "what could have been"
- And "what could have been" haunts him every time he checks his portfolio

This is what paper gains do to your psychology. They make you feel rich when you're not. Then they make you feel poor when you're actually still profitable.

![Paper gains vs realized profits psychology](/blog-images/paper-gains-vs-realized-profits-01.webp)

---

## The Investment Club Discussion

Last month I sat in on an investment club meeting. Mostly retail traders sharing ideas, talking strategy, patting each other on the back for their "wins."

One guy was talking about a crypto position:

"Yeah, I bought at $2.40, it went to $3.80, now it's back to $2.60. I'm thinking about cutting my losses and moving to something more promising."

Wait. Let me unpack that:

1. He bought at $2.40
2. It went to $3.80 (58% gain on paper)
3. He didn't sell
4. Now it's at $2.60 (8% gain actual)
5. He's calling an **8% gain** a "loss"
6. He wants to sell and move to "something more promising"

This is insanity. But it's *normal* for emotional traders.

He's not comparing his position to his entry price ($2.40 → $2.60 = +8.3% profit). He's comparing it to the **imaginary profit** he never took ($3.80 → $2.60 = -31.6% from peak).

In his mind, he lost 31%. In reality, he's up 8%. But because he rode paper gains up and back down, he **feels** like a loser.

And now? He's about to lock in an actual 8% gain and call it "cutting losses" so he can chase the next "promising" thing.

Guess what happens next? The coin he just sold bounces to $3.20. And he'll watch from the sidelines, kicking himself.

---

## What My System Did Instead

Let me show you my November 2025 numbers.

These aren't projections. These aren't "paper gains." These are closed trades with **realized profits**.

### November 2025 Trading Performance

**Total Profit (Realized):** $176.75

**Trading Activity:**
- Positions Opened: 47
- Positions Closed: 23  
- Total Trades: 70
- Success Rate: 100%

**Position Status:**
- Total Open Positions: 157 (accumulated since January 2025)
- Net New Positions in November: 24 (47 opened - 23 closed)
- Positions Opened Since Nov 20: 8 (3 AST, 2 SUI, 2 DOGE, 1 BONK)

**Profit by Coin:**
- BONK: $66.31
- SUI: $59.84
- AST: $34.19
- DOGE: $16.41

Here's what that looks like in real-time:

![November 2025 Trading Scoreboard](/blog-images/post-5-scoreboard.webp)

*My actual November 2025 trading dashboard showing $176.75 in realized profit, 23 closed trades, 47 open positions, and 100% success rate.*

---

Now let me compare this to what emotional traders are doing:

**My barber:**
- Entry: $105
- Peak: $150 (paper gain: $45)
- Current: $110 (actual position: +$5)
- Profit realized: **$0**
- Feelings: Regret, loss, frustration

**Investment club guy:**
- Entry: $2.40  
- Peak: $3.80 (paper gain: $1.40)
- Current: $2.60 (actual position: +$0.20)
- Profit realized: **$0** (about to sell and call it a "loss")
- Feelings: Disappointment, urgency to "do something"

**My trading system:**
- Multiple entries across 4 coins
- Peak: Doesn't matter (system doesn't track unrealized highs)
- Current: 157 open positions + 23 closed profitable trades
- Profit realized: **$176.75** (actual money withdrawn)
- Feelings: **N/A** (system has no emotions)

See the difference?

---

## The Wiggle Strategy in Action

Here's what my system does that emotional traders can't:

### It Takes Small Wins Consistently

Look at my November closures:
- 23 trades closed
- All profitable (100% success rate)
- Average profit per trade: ~$7.68

That's not sexy. That's not "I just 50X'd my investment!" That's boring, systematic profit-taking.

But you know what? $7.68 × 23 trades = $176.75 in my pocket. Real money. Not paper.

### It Profits From Volatility

Notice I opened 47 positions and closed 23. That means:
- I added 24 net new positions (building inventory)
- I closed 23 positions for profit (taking advantage of bounces)
- The market wiggled, and I got paid on both sides

My barber? He rode HOOD from $105 → $150 → $110 and made **$0**.

I rode BONK, SUI, AST, and DOGE through their wiggles and made **$176.75**.

Who wins?

### It Doesn't Care About the Peak

Emotional traders torture themselves:
- "It hit $150 and I didn't sell!"
- "I was up $5,000 and gave it all back!"
- "If only I had sold at the top!"

My system doesn't know what "the top" is. It doesn't track peaks. It just:
1. Buys when conditions are met
2. Sells when profit targets are hit
3. Repeats forever

There's no "if only." There's no regret. There's just executed trades.

![The wiggle strategy - systematic profit taking](/blog-images/paper-gains-vs-realized-profits-02.webp)

---

## Why Small Systematic Wins Beat Big Paper Gains

Let me show you the math over time.

**Scenario 1: The Paper Gains Trader (My Barber)**

- Month 1: Buys HOOD at $105
- Month 2: Watches it go to $150 (+42.8% unrealized)
- Month 3: Watches it drop to $110 (+4.8% unrealized)  
- Month 4: Still holding, hoping it goes back to $150
- Month 5: Sells at $108 in frustration (+2.8% realized)
- **Total profit after 5 months: +2.8%**

**Scenario 2: The Systematic Trader (My System)**

- Month 1: Opens 15 positions, closes 6 for $52 profit
- Month 2: Opens 18 positions, closes 9 for $78 profit
- Month 3: Opens 12 positions, closes 5 for $43 profit
- Month 4: Opens 20 positions, closes 11 for $95 profit
- Month 5: Opens 14 positions, closes 7 for $61 profit
- **Total profit after 5 months: $329 realized**

Notice the difference:
- Paper trader: ONE trade, riding emotions, minimal profit
- Systematic trader: 38 profitable trades, zero emotions, compounding returns

Over 5 months, on the same starting capital ($10,000):
- Paper trader: Up 2.8% = $10,280
- Systematic trader: Up $329 = $10,329

Not a massive difference yet. But here's what happens in year 2:

**Year 2 for Paper Trader:**
- Still holding a few positions
- Some up, some down
- Hasn't realized much profit
- Probably made 3-5 more trades
- Total: Maybe 10-15% gain if lucky

**Year 2 for Systematic Trader:**
- 200+ closed trades
- Compounding on larger capital base
- Inventory built during dips
- Selling into every rally
- Total: 30-50%+ gains

By year 3? The systematic trader is up 2-3X while the paper trader is still "waiting for the next bull run."

---

## The Psychology of Unrealized Gains

Here's why paper gains are so dangerous:

### 1. They Create False Confidence

When my barber saw HOOD at $150, he felt like a genius:
- "I knew Robinhood was a good buy!"
- "I'm up 42% in a few months!"
- "Maybe I should buy more!"

But he didn't *do* anything. He got lucky on timing and mistook it for skill. Now when it drops, he questions everything.

Systematic traders don't get false confidence because they don't track unrealized peaks. They only track executed trades. You can't get cocky about something you didn't actually do.

### 2. They Make You Greedy

"It went to $150, so it can definitely go to $180, right?"

This is how paper gains become paper losses. You anchor to the peak and convince yourself it's going higher. After all, if it *already* went from $105 to $150, why wouldn't it go to $200?

Meanwhile, systematic traders take profits at predetermined targets. No greed. No "just a little more." The system sells and moves on.

### 3. They Cause Panic When They Evaporate

Going from +42% to +4.8% *feels* like a 37% loss, even though you're still profitable from your entry.

This is when emotional traders:
- Sell in panic (locking in small gains instead of waiting for recovery)
- Hold in denial (refusing to accept they should have taken profit)
- Average down emotionally (buying more without a plan)
- Freeze completely (paralyzed by indecision)

My system? Doesn't feel anything. It just executes the next trade.

---

## Everyone Trades on Paper Until They Panic Sell

Here's the brutal truth:

**Most retail traders have zero realized profits.**

They have:
- Positions that are "up" (for now)
- Positions that are "down" (hoping for recovery)
- Stories about that one time they were "up 80%" (but didn't sell)
- Regrets about selling too early (once)
- Regrets about not selling (a hundred times)

But actual money withdrawn and moved to their bank account? Almost nothing.

They're trading on paper. They're playing a game with unrealized numbers. And when the market turns, they panic sell everything and realize losses.

Look at my November stats again:
- 23 trades closed
- $176.75 **realized**
- 100% success rate

Not one of those trades is "paper." Not one is "unrealized." Every single dollar is real.

That's the difference between trading systematically and trading emotionally.

---

## What Happens Next?

Let me predict the future for three types of traders:

### My Barber (Paper Gains Trader)

**Most likely outcome:**
- HOOD bounces to $125 in 3 months
- He still doesn't sell ("waiting for $150 again")
- It drops back to $105
- He panic sells to "break even"
- Feels relieved to "get out"
- HOOD goes to $160 six months later
- He watches from sidelines, kicking himself
- **Total profit: $0**

### Investment Club Guy (Emotional Loss Avoider)

**Most likely outcome:**
- Sells his $2.60 position "to cut losses"
- Moves to "something more promising"
- That something drops 15% immediately
- Panic sells again
- Original position bounces to $3.20 without him
- New position still down
- Repeat cycle 3-4 more times
- **Total profit: -15% to -25%**

### My Trading System (Systematic Profit Taker)

**Most likely outcome:**
- Continues opening positions
- Continues closing profitable trades
- December: Another $150-250 realized
- January: Another $180-280 realized
- Compounds over time
- Never panics, never regrets, never stops
- **Total profit: Compounding monthly**

Which one do you want to be?

---

## The Compounding Power of Realized Profits

Here's what most people miss:

**Realized profits compound. Paper gains don't.**

Let me show you:

**Paper Gains Approach:**
- Year 1: Portfolio goes from $10,000 to $15,000 (on screen)
- Year 2: Portfolio goes from $15,000 to $12,000 (still on screen)  
- Year 3: Portfolio goes from $12,000 to $18,000 (still on screen)
- Cash withdrawn: $0
- You're "up" 80% but you have $0 to show for it

**Realized Profits Approach:**
- Year 1: Start with $10,000, take $2,000 profits, reinvest $500
- Year 2: Trading with $10,500, take $2,400 profits, reinvest $600  
- Year 3: Trading with $11,100, take $2,800 profits, reinvest $700
- Cash withdrawn: $5,500 (real money in your account)
- Still trading with growing capital: $11,800
- Total value: $17,300 + you have $5,500 in REAL MONEY

One approach *feels* good when you look at the screen.

The other approach *is* good when you look at your bank account.

---

## The Bottom Line: Real Money > Screen Numbers

My barber is a good guy. He works hard. He's trying to build wealth.

But he's playing the wrong game.

He's playing the "watch numbers go up and down" game. That game has no winners—only people who eventually panic sell or hold forever.

I'm playing the "extract real profit systematically" game. That game has winners every single day.

Look at my November again:
- $176.75 realized
- 100% success rate  
- No stress, no charts, no panic

That's not life-changing money. But it's **real**. And it compounds.

Meanwhile, how many retail traders do you know who actually withdrew money from their trading account this month?

Most are still "waiting for the right time to sell."

They'll wait forever.

---

## What About You?

Here's the question you need to answer:

**Are you trading for paper gains or real profits?**

Be honest:
- When's the last time you withdrew profits?
- How many positions are you holding "until they recover"?
- How many times have you watched gains evaporate?
- How much profit have you **actually realized** in the last 12 months?

If the answer makes you uncomfortable, maybe it's time to change strategies.

Maybe it's time to stop:
- Chasing moonshots
- Riding paper gains up and down
- Waiting for the "perfect exit"
- Trading on emotions

And start:
- Taking small systematic profits
- Building positions during dips
- Selling into bounces
- Letting a system remove your emotions

One path leads to regret stories about "what could have been."

The other leads to boring screenshots of real profits deposited in your account.

I know which one I prefer.

---

## Want to See the Real Numbers?

All my trading results are tracked live on public dashboards. No fake screenshots. No cherry-picked trades. Just real numbers you can verify yourself—including all the boring $7 profitable trades that actually add up.

**See the live results at [myrobotictrader.com](https://myrobotictrader.com)**

Because transparency beats hype. And realized profits beat paper gains.

Every single time.

---

*Disclaimer: This is not financial advice. All investments carry risk. Past performance does not guarantee future results. Do your own research and never invest more than you can afford to lose.*

---

**Related:**
- [The 50/50 Strategy: How I Balance Taking Profits and Growing Capital](/blog/the-50-50-strategy) - How I actually lock in profits
- [Update: My Barber's Robinhood Stock Has Wiggled 4 Times. He's Captured $0.](/blog/barber-robinhood-update) - The follow-up to this story`,category:"Market Psychology",metaDescription:"My barber was up 40% on Robinhood but never took profit. I made $176 this month trading systematically. Here's why paper gains vs realized profits matters.",heroImage:"/blog-images/paper-gains-vs-realized-profits-hero.webp",imageAlt:"Financial profit chart showing realized gains versus unrealized paper gains"},{title:"The Fear & Greed Index Hit 11. My AI-Enhanced Autonomous Trader Didn't Even Notice.",slug:"fear-greed-index-11-systematic-trading",published:!0,date:"2025-11-22T18:00:00Z",content:`# The Fear & Greed Index Hit 11. My AI-Enhanced Autonomous Trader Didn't Even Notice.

**The crypto market is in "Extreme Fear" right now. Here's why that doesn't matter if you trade systematically.**

---

The Crypto Fear & Greed Index just crashed to 11 out of 100.

That's "Extreme Fear" territory—the kind of fear that makes traders check their portfolios at 3 AM, panic-sell at lows, and swear off crypto forever. Bitcoin is down 23% over the past 30 days. Starknet plummeted 29% in a single day. If you're on Crypto Twitter right now, you know the vibes: doom, panic, and a whole lot of "I told you so" from people who claimed they sold at the top.

But here's the thing.

While emotional traders are losing sleep over an 11/100 sentiment score, my AI-enhanced autonomous trading system just closed another profitable trade. No panic. No fear. No checking charts at midnight.

Why? Because it doesn't know what fear is.

And that's exactly why it works.

---

## What Is the Fear & Greed Index, Anyway?

If you're new to crypto, the Fear & Greed Index is a daily measurement of market sentiment. It's scored from 0 to 100:

- **0-24**: Extreme Fear (where we are now)
- **25-49**: Fear
- **50**: Neutral
- **51-75**: Greed
- **76-100**: Extreme Greed

The index is calculated using multiple factors: volatility, market momentum, social media sentiment, Bitcoin dominance, and Google Trends data. It's basically a psychological thermometer for the crypto market.

When the index hits 11, it means one thing: **traders are terrified.**

They're selling. They're posting doom on Twitter. They're mentally calculating how much they've lost since the local top. They're checking CoinMarketCap every five minutes, hoping for a green candle that never comes.

And you know what? That fear is *exactly* what makes them lose money.

---

## How Extreme Fear Destroys Portfolios

Here's what happens when emotional traders react to a Fear & Greed score of 11:

### They Panic Sell at Lows

Bitcoin drops 23% in 30 days, and suddenly everyone remembers they "needed that money for bills anyway." They sell at $84,000, swearing they'll buy back in when it's "more stable." Spoiler: they never do. They watch from the sidelines as the market recovers, kicking themselves for selling the bottom.

![Fear and Greed Index explained - what each level means](/blog-images/fear-greed-index-11-systematic-trading-01.webp)

### They Check Charts Obsessively

Extreme fear means you're glued to the 1-minute chart. Every red candle feels personal. Every 2% pump makes you think "this is it, the reversal!" Every 3% dump convinces you it's going to zero. You're not trading—you're gambling on noise.

### They Make Emotional Decisions

"I should've sold at $100k."
"I knew this was a bubble."
"Crypto is dead."

These aren't investment decisions. They're *feelings*. And feelings are expensive when it comes to trading. Research shows that emotional traders underperform systematic strategies by an average of 5-7% annually. In crypto? That gap is even wider.

### They Freeze Completely

Some traders don't panic sell—they just freeze. They can't bring themselves to buy because "what if it drops more?" They can't bring themselves to sell because "what if it pumps tomorrow?" So they do nothing. And doing nothing in a volatile market *is* a decision—usually a bad one.

Look at Starknet today. Down 29% in 24 hours. If you owned STRK and didn't have a systematic exit strategy, you just watched nearly a third of your investment evaporate while you debated what to do.

That's the cost of emotional trading.

---

## How My System Responds to Extreme Fear

Now let me tell you what [GoBabyTrade™](https://gobabytrade.com/432706BE), my AI-enhanced autonomous trading system created by 25-year trading veteran Ed Barsano, did when the Fear & Greed Index hit 11.

Absolutely nothing different.

It doesn't read headlines. It doesn't check sentiment scores. It doesn't know Bitcoin dropped 23% in 30 days. It doesn't *feel* fear.

It just executes the strategy.

Here's how it works:

### 1. The System Buys Based on Logic, Not Fear

When price conditions meet the entry criteria, it buys. Doesn't matter if the Fear & Greed Index is at 11 or 90. Doesn't matter if Twitter is screaming "bull market!" or "crypto is dead!" The system follows the rules.

### 2. The System Sells Based on Profit Targets, Not Panic

Every position has a predetermined profit target. When that target is hit, it sells. No guessing. No "maybe I should hold for more." No FOMO. Just execution.

### 3. The System Never Panic Sells at a Loss

This is the big one. My system has a **100% success rate** because it *never sells at a loss*. Ever. If a trade goes underwater, the system holds until it recovers to profitability. No stop losses. No panic exits. No locking in losses because "it might go lower."

That's why I'm up over $4,617 in profits across 900+ trades since January 2025. Not because I'm smarter than the market. Because I removed emotions from the equation.

![How systematic trading responds to market fear](/blog-images/fear-greed-index-11-systematic-trading-02.webp)

---

## The Real Problem With Trading on Fear

Here's the brutal truth about the Fear & Greed Index: **it measures human psychology, not market fundamentals.**

When the index is at 11, it doesn't mean Bitcoin is worthless. It means traders are scared. And scared traders make terrible decisions.

They buy high (when the index is at 90 and everyone's euphoric) and sell low (when the index is at 11 and everyone's panicking). It's the most expensive habit in trading.

Look at the data:

- Studies show that retail traders underperform the market by 1.5% annually on average
- In crypto, that gap widens to 5-10% due to higher volatility
- The primary cause? Emotional decision-making triggered by fear and greed

Meanwhile, systematic strategies—strategies that don't care about sentiment—consistently outperform. Why? Because they buy the dips that emotional traders are selling and take profits when emotional traders are chasing pumps.

The Fear & Greed Index isn't a trading signal. It's a warning label: **"Human emotions at work. Proceed with caution."**

And the best way to proceed? Remove the human.

---

## Why "Set It and Forget It" Actually Works

When I tell people I use an AI-enhanced autonomous trading system, they usually ask: "But don't you need to monitor it? What if something goes wrong?"

Here's the thing. Monitoring is *exactly* how things go wrong.

Every time you check your portfolio, you're inviting emotions back into the equation. You see a dip and think "should I sell?" You see a pump and think "should I take profits early?" You read a doom headline and start second-guessing the entire strategy.

That's how systematic trading turns into emotional trading.

My system runs 24/7. It executes trades while I sleep. It buys dips while I'm working my day job. It takes profits while I'm walking my dog. And it does all of this *without* consulting me, because consulting me would introduce the very emotions that destroy returns.

This is the entire point of autonomous trading:

- **Emotion-free execution**: The system doesn't feel fear at 11 or greed at 90
- **Consistent strategy**: It follows the same rules every single time
- **No panic selling**: It never locks in losses
- **No FOMO buying**: It doesn't chase pumps
- **No analysis paralysis**: It acts when conditions are met

The result? Over $4,617 in profits with a 100% success rate. All tracked live publicly—anyone can view them.

Not because I'm a genius. Because I built a system that removes my emotions from the equation.

---

## What You Should Do When Fear Hits 11

So the Fear & Greed Index is at 11. Bitcoin is down. Altcoins are bleeding. Crypto Twitter is in shambles.

What should you do?

**If you're trading emotionally:** Probably nothing good. You'll panic sell, watch it pump without you, then FOMO back in at higher prices. Rinse and repeat until your portfolio is toast.

**If you're trading systematically:** You don't do anything. Your system does. And it does exactly what it's programmed to do, regardless of sentiment.

Here's my advice:

### 1. Stop Checking the Fear & Greed Index

Seriously. If you're trading systematically, sentiment doesn't matter. The only thing the index tells you is how scared *other people* are. And you're not trading based on other people's fear—you're trading based on your strategy.

### 2. Trust Your System

If you've built (or bought) a systematic trading approach, *let it work*. The whole point is to remove your emotions from the process. If you start overriding the system because "the market feels scary," you've defeated the purpose.

### 3. Use Extreme Fear as a Contrarian Signal

If you insist on using the Fear & Greed Index, use it backwards. When everyone's scared (index at 11), that's historically been a *good* time to accumulate. When everyone's greedy (index at 90), that's when you should be cautious.

But honestly? If you have to think about it, you're already losing. Systematic trading means you don't think—you execute.

---

## The Bottom Line

The Crypto Fear & Greed Index hit 11 today. That means traders are terrified.

But fear is just an emotion. And emotions don't belong in trading.

While emotional traders are panic-selling Starknet at -29% and swearing off crypto forever, systematic traders are executing their strategies like nothing happened. Because to them, nothing *did* happen. It's just another day in a volatile market.

My AI-enhanced autonomous trading system doesn't know the Fear & Greed Index exists. It doesn't read headlines. It doesn't check sentiment. It doesn't feel fear or greed or FOMO or panic.

It just follows the strategy. Every. Single. Time.

And that's why I'm up $4,617+ with a 100% success rate while emotional traders are losing sleep over an 11/100 sentiment score.

The choice is yours:

1. Keep trading on fear and greed (and watch your portfolio bleed)
2. Build a systematic approach that ignores emotions (and sleep at night)

I know which one works.

---

## Want to See the Results for Yourself?

All my trading results are tracked publicly. No fake screenshots. No cherry-picked trades. Just real numbers you can verify yourself.

**See the live results at [myrobotictrader.com](https://myrobotictrader.com)**

Because transparency beats hype. Every time.

---

*Disclaimer: This is not financial advice. All investments carry risk. Past performance does not guarantee future results. Do your own research and never invest more than you can afford to lose.*

---

**Related:**
- [Trading Disorders Are Real: Why I Let an AI Make Every Trade](/blog/trading-disorders-ai-solution) - Why I don't make emotional trading decisions
- [Why Down Markets Are Actually the Best Time to Start Automated Crypto Trading (With Real Numbers)](/blog/why-start-automated-trading-in-down-markets) - Why fear creates opportunity`,category:"Market Intelligence",metaDescription:"The Crypto Fear & Greed Index hit 11/100 - extreme fear territory. Here's why my AI trading system doesn't care about market sentiment and how systematic trading beats emotions.",heroImage:"/blog-images/fear-greed-index-11-systematic-trading-hero.webp",imageAlt:"Abstract cryptocurrency data visualization showing market sentiment patterns"},{title:"Why Your Crypto Trading System Should Never Sell at a Loss (And How That's Actually Possible)",slug:"never-sell-at-loss-crypto-trading",published:!0,date:"2025-11-21T10:00:00Z",content:`# The One Rule That Changes Everything

Here's something that sounds impossible: What if your trading system was programmed to **never, ever sell at a loss?**

Not "try not to sell at a loss." Not "minimize losses." But literally never sell unless it's profitable.

Most traders would tell you that's impossible. They'd say you need stop losses. That you have to "cut your losers" and "let your winners run." That holding losing positions is how you blow up your account.

But what if everything you've been taught about loss management is backwards?

## The Problem With Traditional Loss Management

Let me share something I learned from Ed Barsano, creator of [GoBabyTrade™](https://gobabytrade.com/432706BE), that really opened my eyes. He's been trading for 25 years and built a system with one core rule: **Never sell at a loss.**

Now, before you think "that's just stubbornness" or "that's how people lose everything," let me explain the math behind why this actually works.

When you're manually trading, selling at a loss makes sense because:
- You're using leverage (borrowed money)
- You're shorting (betting on prices going down)
- You have limited capital
- You need to free up money for the "next opportunity"

![Traditional stop-loss approach vs never-sell-at-loss strategy](/blog-images/never-sell-at-loss-crypto-trading-01.webp)

But what if you removed all those factors? What if you:
- Never used leverage
- Never shorted anything
- Had a system that allocated capital intelligently
- Realized that the "next opportunity" is just the same coin bouncing back up

## Real Example: Making $350,000 While Down $150,000

Here's where it gets interesting. Ed shared his Alchemy Pay (ACH) position:

- The coin dropped from $0.12 to $0.01 (that's a 91% crash)
- His "open inventory" showed down $150,000
- But he had taken **$350,000 in realized profits** along the way
- Net result: **Up $200,000** on a coin that crashed 91%

![Alchemy Pay example - profiting while down on paper](/blog-images/never-sell-at-loss-crypto-trading-02.webp)

How is that possible?

## The Inventory Building Strategy

Here's the key: While the price was falling from $0.12 to $0.01, the system wasn't just "holding and hoping." It was actively:

1. **Buying more as it dropped** (dollar-cost averaging)
2. **Selling on every bounce** (taking profits on volatility)
3. **Never selling the inventory at a loss** (only selling when profitable)

Think about what happens in a typical crypto crash:
- Price drops 5%
- You panic and sell at a loss
- Price bounces back up 3%
- You miss the recovery
- Price drops another 5%
- Repeat this cycle dozens of times

Every time you sell at a loss, you're **locking in permanent damage** and missing the subsequent bounces.

## The 7-Eleven Analogy

Ed used a brilliant analogy. Imagine you own a 7-Eleven:

- You stock your shelves with potato chips
- A school bus full of kids pulls in
- If you only have one bag of chips, you make one sale
- If you have 20 bags, you make 20 sales

Your trading "inventory" works the same way:
- If you only own one "lot" of Bitcoin and it spikes 20%, you make one sale
- If you own 20 lots at different price points, you make 20 sales

But here's the critical insight: **You only build that inventory by buying more as prices drop.**

Most traders do the opposite:
- They buy when prices are high (FOMO)
- They sell when prices are low (panic)
- They never build meaningful inventory
- They miss the big moves when they finally come

## Why This Only Works With Systematic Trading

Now, I have to be honest with you: This strategy **does not work if you're trading manually.**

Why? Because:

1. **Humans panic.** When your position is down 50%, your brain screams "GET OUT!"
2. **You can't watch 24/7.** Crypto markets never sleep. That 3am spike? You missed it.
3. **You'll violate your own rules.** Even if you plan to never sell at a loss, you'll convince yourself "this time is different."
4. **You can't calculate the math in real-time.** Proper position sizing across multiple coins at multiple price points requires constant recalculation.

## The Math That Makes It Work

Here's what proper money management looks like:

- Starting capital: $100,000
- Number of coins: 4 (for example)
- Lots per coin: 25 (default setting)
- Trading window: 75% down from entry

The system pre-allocates your capital across all those potential purchases. So if you have $100,000:
- It doesn't use all $100,000 immediately
- It reserves enough to buy 25 lots as price drops
- It maintains enough cash to "make it down there"
- It can buy and sell along the way

This is called **money management**. And it's the difference between:
- Going all-in at the top and praying
- Building positions systematically and profiting from volatility

## What About the "Opportunity Cost"?

Skeptics will say: "But your money is tied up in losing positions! You're missing other opportunities!"

Here's Ed's counter-argument:

"If the coin drops 50%, your last buy is still there. That's okay. It's the same as buying all the way down like Trump is doing with his $7 billion crypto portfolio. But we're different - we're buying AND selling along the way. We're still accumulating like he is, but we're taking advantage of every wiggle."

In other words:
- The "opportunity" isn't somewhere else
- The opportunity is right there in the volatility
- Every bounce is money on the table
- You just need inventory to sell into those bounces

## Real Results: The Proof

Let me share some actual numbers from active traders:

**Example 1: Edward's Simulator**
- Started: February 2024
- Starting capital: $100,000
- Profit taken: $46,000+
- Time period: 7.5 months
- During a market that was down significantly

**Example 2: Ed's Main Trader**
- Started: February 7, 2023
- Starting capital: $200,000
- Profit taken: $355,000
- Open positions: Down (because coins dropped 90%)
- Net result: Massively profitable despite catastrophic market conditions

**Example 3: Top Trader (from the system)**
- Started: With $3,000
- Profit taken: $15,000
- Time period: 12 months
- Trading: Meme coins (highly volatile)

## The Psychology You Need to Handle

Here's the hard truth: **Your DNA has to handle seeing red numbers.**

When your "open positions" show down $20,000, but you've taken $13,000 in profits, you need to understand:
- You're not actually down $20,000
- You're down $7,000 unrealized (temporary price)
- You're up $13,000 realized (actual money in your pocket)
- The system is working exactly as designed

Ed said it perfectly:

"When you first start out, your DNA can't handle the down. You get in shock. That's why we're all here to help you. This is like therapy. We help you from jumping off that bridge because it is a psychological thing. You're not used to it going down, and your friends and family aren't helping either."

## Why Most People Fail at This

Ed shared something profound:

"Millions of people save their money in a bank, loaning it for basically nothing. But credit card companies charge 31% interest. So you loan your money to the bank for free, but when you need to borrow YOUR OWN MONEY back, you pay 31% interest. Yet hundreds of millions of people do it."

The point? **Most people aren't thinking clearly about money.** They're following the herd:
- Buy when everyone's buying (high prices)
- Sell when everyone's selling (low prices)
- Never build inventory
- Never profit from volatility
- Wonder why they never get ahead

## The Alternative: Systematic Trading

What if instead of trying to outsmart the market, you just:
- Let an AI system handle the 24/7 trading
- Follow rules that have been optimized over 25 years
- Build inventory when prices drop
- Take profits when prices bounce
- Never sell at a loss
- Never use leverage
- Never short anything
- Just systematically accumulate profitable trades

One GoBabyTrade™ member said:

"I walk this planet at peace. I have a Coinbase Visa card that just gives me free money almost every day. It's a crazy feeling like those Twilight Zone movies where every time you open the box, you pull out cash and it's always there."

## The Bottom Line

Never selling at a loss isn't stubbornness. It's **systematic discipline backed by proper money management.**

But it only works if:
1. You have a system that can trade 24/7
2. You never use leverage or short
3. You properly allocate capital across price points
4. You take profits on bounces automatically
5. You can handle the psychology of "down" numbers

Ed summed it up:

"We know one thing: the market is going to wiggle. That's all we really need to know. As long as the coin stays in business, they're going to keep paying me for life."

**That's** the power of never selling at a loss when you have the right system.

---

*Want to see this strategy in action with complete transparency? Check out our public records showing every trade, every profit, and yes, every open position. Because real traders show you everything, not just the wins.*

---

**Related:**
- [The Bucket and Well: A Simple Analogy That Explains How Automated Crypto Trading Actually Works](/blog/bucket-and-well-automated-trading-analogy) - How the system actually works
- [My Barber Was Up 40% on Robinhood. He Never Sold. Now He Feels Like He's Losing.](/blog/paper-gains-vs-realized-profits) - Why selling matters as much as buying`,category:"Education",metaDescription:"Learn why never selling at a loss actually works in crypto trading when combined with systematic money management and AI-enhanced automation.",heroImage:"/blog-images/never-sell-at-loss-crypto-trading-hero.webp",imageAlt:"Dark cryptocurrency trading terminal showing systematic market analysis"},{title:"The Bucket and Well: A Simple Analogy That Explains How Automated Crypto Trading Actually Works",slug:"bucket-and-well-automated-trading-analogy",published:!0,date:"2025-11-20T10:00:00Z",content:`# The Simplest Explanation of Automated Trading You'll Ever Read

I recently watched Ed Barsano, creator of [GoBabyTrade™](https://gobabytrade.com/432706BE), explain his 25-year-old AI-enhanced trading system using an analogy so simple, so elegant, that it made everything click.

He said:

"Think of it like a bucket and a well. Every time the bucket goes down into the well, it brings up water. That's profit. The bucket just keeps going down and coming back up with water. Down, up, profit. Down, up, profit. That's all it does."

And you know what? That's exactly how systematic crypto trading works when you remove all the complexity.

![The Bucket & Well Strategy: A 4-panel timeline showing how the system buys dips, accumulates inventory, sells bounces, and repeats forever](/blog-images/bucket-and-well-automated-trading-analogy-03.webp)

## The Traditional Trading Problem

Most people think about trading like this:

- Buy low
- Sell high
- Hope you timed it right
- Panic when you didn't
- Repeat until broke

That's not trading. That's gambling with extra steps.

The problem is timing. You're trying to predict:
- When "low" is low enough to buy
- When "high" is high enough to sell
- Whether this dip is the dip or just the beginning
- Whether this pump will continue or reverse

It's exhausting. And it doesn't work.

## The Bucket and Well Approach

Now imagine a different system:

The bucket doesn't care if the well is deep or shallow. It doesn't care if the water level is rising or falling. It doesn't try to predict anything.

It just:
1. Goes down
2. Fills up
3. Comes back up
4. Empties into your reservoir
5. Goes down again

Down. Up. Profit.
Down. Up. Profit.
Down. Up. Profit.

**That's it. That's the whole system.**

## How This Maps to Crypto Trading

Let me translate the analogy:

### The Well = The Crypto Market
- Sometimes deep (prices are low)
- Sometimes shallow (prices are high)
- Constantly changing levels (volatility)
- But always has water (always has profit opportunity)

### The Bucket = Your Trading System
- Goes down when prices drop (buys)
- Comes back up when prices rise (sells)
- Captures profit on every trip (takes advantage of volatility)
- Doesn't care about the depth (doesn't try to time the market)

### The Rope = Proper Money Management
- Long enough to reach the bottom (reserves capital for worst-case)
- Strong enough to pull up full buckets (can handle the position sizes)
- Won't break halfway (never runs out of buying power)

### Your Reservoir = Realized Profits
- Every trip adds more water (every closed trade adds profit)
- The total keeps growing (compound returns)
- It's yours to keep (real money, not paper gains)

![The bucket and well trading analogy explained](/blog-images/bucket-and-well-automated-trading-analogy-01.webp)

## Why Traditional Trading Breaks This

Most traders don't use a bucket. They use a thimble.

They:
- Buy once at what they think is the bottom
- Pray it goes up
- Panic if it goes down
- Sell at a loss because "the well is drying up"
- Miss the next rise because they're out of the game

Then they watch the market bounce back and think: "I should have held!"

No. You should have had a bucket.

## The Power of Repetition

Here's what makes the bucket and well analogy so powerful: **it works forever.**

The well never runs dry. Why? Because crypto markets are **volatile**.

Look at Bitcoin:
- It doesn't go straight up
- It doesn't go straight down
- It wiggles

And every wiggle is a trip for the bucket:
- Price drops 3% → Bucket goes down (buy)
- Price bounces 5% → Bucket comes up (sell)
- Profit captured

It doesn't matter if Bitcoin is at $100,000 or $50,000. The bucket doesn't care about the "absolute depth." It only cares about the **relative movement**.

## Real Numbers From the Well

Let me share what this looks like in practice.

One trader shared his numbers:
- Starting capital: $200,000
- Time period: ~4 years
- Market condition: Coins dropped 90%+ from entry prices
- Result: **$950,000+ in profits taken**

How many trips did the bucket make? Thousands.

Some trips were small (2-3% moves). Some were big (20-30% moves). But every single trip brought up water.

![Real trading results using the bucket strategy](/blog-images/bucket-and-well-automated-trading-analogy-02.webp)

The bucket went down into a 90% crash and still came back up with profit. Because it wasn't trying to time the bottom. It was just systematically capturing volatility.

## Why You Can't Do This Manually

Here's the brutal truth: You can't be the bucket.

Why?

### 1. You're Not Available 24/7
The crypto market never closes. That 3am dip when you're asleep? The bucket catches it. You don't.

### 2. You're Emotionally Attached
When the bucket goes down into a deep well (price crash), it doesn't panic. It doesn't think "oh no, what if the well is empty?" It just fills up and comes back.

You? You panic. You check the charts. You read FUD on Twitter. You convince yourself to pull the bucket up early.

### 3. You're Terrible at Repetition
The bucket makes the same trip every time. Down, up, profit. No creativity. No "this time is different." No "gut feelings."

You? You'd get bored. You'd try to optimize. You'd second-guess. You'd ruin it.

### 4. You Can't Calculate Fast Enough
The bucket knows exactly:
- How much to buy (position sizing)
- When to buy (entry points)
- When to sell (profit targets)
- How much capital to reserve (risk management)

You'd need a spreadsheet, a calculator, and perfect discipline. The bucket just executes.

## Ed Barsano's Own Words

Ed put it like this:

"We know one thing: the market is going to wiggle. That's all we really need to know. As long as the coin stays in business, they're going to keep paying me for life."

That's the bucket and well in one sentence.

He doesn't need to predict:
- Whether Bitcoin will hit $200,000
- Whether we're in a bull or bear market
- Whether this coin will "moon"
- Whether that coin will crash

He just needs the market to wiggle. And it always wiggles.

## The Inventory Insight

Here's another piece that makes this analogy even better:

**The bucket gets bigger as it goes deeper.**

When the well is shallow (prices are high), the bucket makes small trips with less water. That's fine. Profit is profit.

When the well is deep (prices are low), the bucket makes more trips and brings up more water. Why? Because it's buying **more inventory at better prices**.

This is the opposite of what most traders do:
- They buy big when prices are high (shallow well, small opportunity)
- They buy small (or not at all) when prices are low (deep well, big opportunity)

The bucket is smarter than that.

## What About the Coins That "Die"?

Fair question. What if the well runs dry? What if a coin goes to zero?

Two answers:

### 1. Diversification
You don't have one bucket in one well. You have multiple buckets in multiple wells.

If one well dries up (coin dies), your other buckets keep working. GoBabyTrade™ runs 4 coins by default. If one fails, you still have three more pulling up profit.

### 2. Established Coins
The system typically trades established coins with real use cases and liquidity. Not shitcoins. Not random meme tokens.

Bitcoin, Ethereum, and established altcoins aren't going to zero. The well might get deeper (price drops), but it's not running dry.

## The Psychology of the Bucket

Here's what makes this analogy so powerful psychologically:

**The bucket doesn't have feelings.**

When you see your portfolio down 30%, you feel:
- Fear ("I'm losing everything")
- Regret ("I should have sold at the top")
- Panic ("I need to get out NOW")

The bucket? It just goes down, fills up, comes back up. No fear. No regret. No panic.

That's why systematic trading works and emotional trading doesn't.

One GoBabyTrade™ member said:

"I walk this planet at peace. I'm not checking charts at 3am. I'm not stressed about dips. The bucket just keeps going down and coming back up with money."

## The Compound Effect

Now here's where it gets really interesting.

Every time the bucket comes up, it doesn't just dump the water and disappear. It:
1. Adds to your reservoir (profit)
2. Gets a little bigger (reinvested capital)
3. Goes back down (ready for the next trip)

This is compound returns in action:
- Trip 1: $100 profit
- Trip 2: $102 profit (2% more capital)
- Trip 3: $104 profit (compound effect)
- Trip 100: Significant profit growth

The bucket gets heavier, the trips get more profitable, the reservoir fills faster.

## The Bottom Line

Automated crypto trading isn't complicated. It's a bucket in a well.

The bucket:
- Doesn't predict the future
- Doesn't try to time the market
- Doesn't panic in crashes
- Doesn't FOMO in pumps
- Just goes down and comes back up with profit

Down. Up. Profit.
Down. Up. Profit.
Down. Up. Profit.

**Forever.**

As long as the market wiggles (and it always will), the bucket keeps working.

The question isn't "will this work?" The question is: "Do you want to be the bucket, or do you want to keep using a thimble?"

---

*Want to see the bucket in action? Check out our live transparency dashboard showing every single trip the bucket makes. No fake screenshots. Just real numbers you can verify yourself.*

---

**Related:**
- [Why Your Crypto Trading System Should Never Sell at a Loss (And How That's Actually Possible)](/blog/never-sell-at-loss-crypto-trading) - The core principle that makes it work
- [How to Make Passive Income with Crypto (Without Day Trading)](/blog/how-to-make-passive-income-crypto) - Getting started with automated trading`,category:"Education",metaDescription:"The bucket-and-well analogy makes automated crypto trading simple to understand. Learn how systematic trading profits from volatility forever.",heroImage:"/blog-images/bucket-and-well-automated-trading-analogy-hero.webp",imageAlt:"Abstract visualization of systematic accumulation strategy in cryptocurrency"},{title:"Why Down Markets Are Actually the Best Time to Start Automated Crypto Trading (With Real Numbers)",slug:"why-start-automated-trading-in-down-markets",published:!0,date:"2025-11-19T10:00:00Z",content:`# The Worst Time to Start... Or Is It?

Bitcoin just dropped from $108,000 to $91,000.

That's a $17,000 drop. A 15.7% crash.

Most people look at that and think: "I'll wait until it starts going back up."

But here's what Ed Barsano, creator of [GoBabyTrade™](https://gobabytrade.com/432706BE) and 25-year trading veteran, shared:

"This is a GIFT for all new people coming on board. You're building inventory. It's just like a 7-Eleven - you load up the shelves, then you sell it. This crashing market is exactly when you want to get in."

Wait, what?

Yes, you read that right. The **crashing** market is when you want to start.

Let me explain why this counter-intuitive advice is actually mathematically correct.

## The Inventory Problem

Imagine you own a 7-Eleven convenience store.

A school bus full of 40 kids pulls into your parking lot.

They all want to buy chips.

**Scenario 1: Empty Shelves**
- You have 1 bag of chips
- You make 1 sale
- 39 kids leave disappointed
- You missed 39 opportunities

**Scenario 2: Fully Stocked**
- You have 40 bags of chips
- You make 40 sales
- Everyone's happy
- You maximize profit

Now apply this to crypto trading:

**Starting in an UP Market:**
- You buy at high prices
- You own 1-2 "lots" of each coin
- Market spikes 20%
- You sell your 1-2 lots
- Profit is limited by lack of inventory

**Starting in a DOWN Market:**
- You buy as prices drop
- System accumulates 10-20 lots at different prices
- Market eventually recovers
- You sell 10-20 lots on the way up
- Profit is 10-20X larger

Ed put it bluntly:

"You don't want to have a 7-Eleven and open the door for business without any product on the shelf. You need inventory. When you first sign up, you don't own any shares. If the market wasn't crashing like it is, you'd be sitting on one lot of each coin. This crash is BUILDING your inventory."

![The 7-Eleven inventory analogy for crypto trading](/blog-images/why-start-automated-trading-in-down-markets-01.webp)

## Real Example: 5X Returns in a 90% Down Market

Let me share actual numbers that prove this point.

Ed Barsano, creator of [GoBabyTrade™](https://gobabytrade.com/432706BE), started with **$200,000** on December 19, 2021.

What happened over the next ~4 years:
- Most of his coins dropped **90%+** from his entry prices
- Alchemy Pay went from $0.12 to $0.01 (92% drop)
- SWIFT crashed hard
- ACH got destroyed
- Everything in his portfolio was "down" on paper

What was his result?

**He took $950,000+ in profits.**

Let me repeat that: In a market where his coins dropped 90%, he **5X'd his money**.

![5X returns example from starting in a down market](/blog-images/why-start-automated-trading-in-down-markets-02.webp)

How?

## The Secret: Dollar-Cost Averaging on Steroids

Here's what happened during that 4-year period:

**Year 1:** Market crashes
- System buys on the way down
- Takes profits on small bounces
- Builds inventory at better prices
- Net result: Down on "open positions," but taking profits

**Year 2:** Market continues dropping
- System keeps buying at even better prices
- Now has massive inventory at rock-bottom prices
- Every tiny bounce = profits
- Still taking money out while buying more

**Year 3:** Market stays low
- System has inventory everywhere
- Can't move without triggering sales
- Profits accumulate
- Waiting for the big move

**Year 4:** Market finally recovers
- MASSIVE inventory sells into the rally
- Years of accumulated positions close profitably
- The "losses" were never real - just unrealized price fluctuations

Ed explained:

"Every day it's going down, that's another opportunity to buy inventory at better prices. Your friends and family will tell you 'Get out! Sell it all! You're going to lose everything!' But the wealthy? The multibillionaires? They're SUCKING UP shares at the bottom. Donald Trump is buying. The whales are loading up. They're trying to corner the market."

## The Psychology You Must Overcome

Let's be honest about the hardest part: **Watching red numbers.**

Here's a real example Ed shared showing current positions:

**BONK:**
- Open inventory: Down $20,000
- Realized profits: +$13,480
- Net: Down $6,520 (temporary)

**WHIFF:**
- Open inventory: Down $17,000  
- Realized profits: +$13,000
- Net: Down $4,000 (temporary)

If you were a "buy and holder":
- You'd just be down $20,000 on BONK
- You'd just be down $17,000 on WHIFF
- Total loss: $37,000
- No profits taken
- Feeling terrible

But with the systematic approach:
- You've already secured $26,480 in real profits
- Your net "down" is only $10,520
- Your inventory is loaded for the recovery
- You're positioned to make massive profits when it bounces

Ed said:

"When you first start out, your DNA can't handle the down. You get in shock. But this is therapy. We help you understand that DOWN IS GOOD when you're building inventory. If you were just buy-and-hold, you'd be down 90% with nothing to show for it."

## Why Waiting for the "Bottom" Doesn't Work

Some people say: "I'll wait until it hits bottom, THEN I'll start."

Three problems with this:

### 1. You'll Never Know When It's the Bottom
"Is $91,000 the bottom for Bitcoin? Or will it go to $80,000? $70,000? Nobody knows. Not even the so-called experts. If they really knew, they wouldn't be on TV - they'd be on a beach."

### 2. You'll Miss the Accumulation Phase
"If you wait for the market to start going up before you jump in, you don't have any inventory to sell. You missed the boat. You want to get in while things are going DOWN because you want to build inventory."

### 3. The Best Profits Come From the Recovery After the Crash
"When we get a 20% spike in the market, your 'down' numbers drop in half, and your 'profit' numbers go up by 50%. That's when you make the real money - but ONLY if you have inventory loaded up."

## The Math of Starting in Different Market Conditions

Let me show you the difference:

**Starting at Market Top (Bitcoin at $108,000):**
- Week 1: Buy 1 lot at $108,000
- Week 2: Market drops to $100,000 - Buy 1 lot
- Week 3: Market drops to $95,000 - Buy 1 lot  
- Week 4: Market drops to $91,000 - Buy 1 lot
- Total: 4 lots, average price ~$98,500
- If it bounces to $100,000: Small profit on 1 lot

**Starting at Market Bottom (Bitcoin at $91,000):**
- Week 1: Buy 1 lot at $91,000
- Week 2: Market drops to $89,000 - Buy 1 lot
- Week 3: Market bounces to $93,000 - Sell 1 lot, profit $4,000
- Week 4: Market drops to $90,000 - Buy 1 lot
- Week 5: Market bounces to $94,000 - Sell 1 lot, profit $4,000
- Total: Same capital deployed, but already taking profits

The difference? **You're profitable faster when you start at lower prices.**

## Real New Trader Example

A GoBabyTrade™ member shared his experience starting just 8 months ago:

**Edward's Paper Trading Account:**
- Started: February 2024 with $100,000
- Coins: BONK, ONDO, PEPE, WHIFF (high volatility meme coins)
- Market condition: Declining/sideways
- Result after 7.5 months: **$46,000+ in realized profits**
- Running at: ~6.5% per month average

He emphasized:

"I started this during a market correction. Everyone thought I was crazy. But look - I'm up over 46% in less than 8 months, and the market is DOWN during this period. THAT'S the power of starting when everyone else is scared."

## The Whales Are Doing the Same Thing

Here's something that should make you think:

**Donald Trump's Crypto Holdings:** $7+ billion
- He didn't buy it all at once
- He's been buying from the top all the way down
- He's dollar-cost averaging into positions
- He's accumulating like crazy

**The Difference:**
- Trump is just buying and holding (accumulating)
- Systematic trading is buying AND selling along the way
- Both build inventory
- But systematic trading takes profits during the accumulation

As Ed said:

"Trump's buying, buying, buying as it goes down. We're doing the same thing - BUT we're also selling on every bounce. We're taking the volatility profits that buy-and-holders completely miss."

## The Current Opportunity (Real-Time)

As of this writing:
- Bitcoin dropped from $108K to $91K
- XRP crashed from recent highs
- Most altcoins down 20-40% from peaks
- Fear is high
- "Experts" are calling for lower lows

Ed's take:

"This is HEAVEN for me. This crashing market is BEAUTIFUL. Especially for new people coming on board. Your benefit is that when you first sign up, you don't own any shares. If the market wasn't crashing, you'd be sitting on one lot with tiny profits. But THIS? This is loading you up at the bottom."

Another added:

"I feel like it's criminal. This can't even be legal. It's so easy. But it is this easy when you put millions of lines of code behind it and 25 years of optimization."

## What About Timing the Market?

One participant asked: "Should I wait 2-3 months to see if it goes lower?"

Ed's response was brilliant:

"You're trying to predict the future. Nobody can do that. I couldn't tell you if my life depended on it what a coin will do tomorrow. Tomorrow might be a huge up day, down day, or flat. Nobody knows. But I DO know my system is going to punish the market no matter what it does."

He continued:

"People want to wait for the 'perfect' entry. There is no perfect entry. The perfect entry is NOW, and then let the system do the math. It will buy and sell regardless of where we are in the cycle. Stop trying to outsmart the market and just start systematically profiting from it."

## The Compounding Effect of Early Entry

Here's the math that most people miss:

**Scenario 1: Start now at lower prices**
- Month 1-3: Build inventory, take small profits
- Month 4-6: Have significant inventory, increasing profits  
- Month 7-12: Loaded with inventory from bottom
- Year 2: When recovery comes, MASSIVE profits from accumulated positions

**Scenario 2: Wait for recovery to start**
- Month 1-3: Watching from sidelines
- Month 4-6: Still waiting for "confirmation"
- Month 7-12: Finally start, but at higher prices
- Year 2: Playing catch-up, missed the best accumulation phase

The difference in total profit after 2 years? **Potentially 2-3X or more.**

## What If It Keeps Dropping?

"What if I start now and Bitcoin goes to $70,000?"

Perfect question. Here's Ed's answer:

"Be my guest. Let it go down. I'll buy more at the bottom. I don't care. I've taken $350,000 of profit off the table on Alchemy Pay while it went from $0.12 to $0.01. I'm down $150,000 on open inventory, but I'm still UP $200,000 total. They can drop it to zero for all I care - I've already won."

The system is designed for 90% drops:
- It pre-allocates capital for worst-case scenarios
- It reserves enough money to "make it down there"
- It maintains buying power at every level
- It never runs out of money (if using default settings)

## The Time Value of Starting Now

Let's do a thought experiment:

**Option A: Start today with $10,000**
- Build inventory over next 6 months
- Take profits along the way
- Positioned for recovery

**Option B: Wait 6 months, then start with $10,000**
- Miss 6 months of accumulation
- Miss 6 months of volatility profits
- Start at potentially higher prices

Which option would you rather have?

Ed framed it perfectly:

"Nine years is going to pass whether you start the trader or not. The question is: Do you want to look back 9 years from now and have $2.5 million? Or do you want to look back and wish you had started?"

## The Bottom Line: Why Fear Is Your Friend

I'll leave you with this insight from Ed Barsano:

"When coins are going down, that's when all your friends and family are screaming 'GET OUT!' But what do people do? They dump it. Meanwhile, the multibillionaires are out there sucking up all the shares they can."

He continued:

"You cannot own enough crypto at these prices. You just can't. But you don't want to go all-in on day one and be top-heavy. Let the software dollar-cost average in properly. It'll buy and sell as you're going, and it'll accumulate at the right times."

**The best time to start automated trading is when:**
- Everyone else is scared
- Prices are down
- "Experts" are bearish
- Your gut says "wait"
- The market looks terrible

**Why? Because that's when:**
- Inventory is cheap
- Whales are accumulating  
- Recovery will be explosive
- Your system builds positions at great prices
- You'll have maximum profit potential when it turns

As one final thought: "This isn't the worst time to start. This is the GIFT. In 12 months, people will look back at $91,000 Bitcoin and say 'I wish I had started then.' Will you be one of them?"

---

*Want to see how systematic trading performs in real down markets? Check our live transparency dashboard showing every trade during market crashes, corrections, and recoveries. Real results, real data, real time.*

---

**Related:**
- [The Fear & Greed Index Hit 11. My AI-Enhanced Autonomous Trader Didn't Even Notice.](/blog/fear-greed-index-11-systematic-trading) - Real results during market fear
- [Crypto Is Dead? The SEC Chairman Disagrees.](/blog/crypto-is-dead-sec-depin-web3) - Why 'crypto is dead' means opportunity`,category:"Education",metaDescription:"Discover why starting automated crypto trading during market crashes is actually the optimal entry point, backed by real numbers and 25 years of data.",heroImage:"/blog-images/why-start-automated-trading-in-down-markets-hero.webp",imageAlt:"Cryptocurrency market downturn chart showing strategic entry opportunity"},{slug:"pionex-research-not-switching",title:"I Researched Pionex. Here's Why I'm Not Switching.",publishDate:"2026-01-06",date:"2026-01-06",published:!1,category:"Market Intelligence",author:"Patrick Jenkins",heroImage:"/blog-images/pionex-research-not-switching-hero.webp",imageAlt:"Pionex trading bot research comparison",excerpt:"After a year of autonomous trading and 985+ verified trades, I researched Pionex to see if I should switch. Here's what I found—and why I'm staying put.",metaDescription:"After a year of autonomous trading and 985+ verified trades, I researched Pionex to see if I should switch. Here's what I found—and why I'm staying put.",content:`After a year of autonomous trading—985+ trades, every single one published—I sometimes get asked: "Have you tried Pionex? It's free!"

I haven't used it. But I've researched it extensively.

When you're committed to transparency and actually publish every trade you make, you want to understand the landscape. So I dug into Pionex: what it does, what users actually experience, and whether "free" means what people think it means.

Here's what I found, and why I'm not switching.

## What Pionex Actually Is

Pionex is a crypto exchange with 16 built-in trading bots. The big selling point? The bots are free. No subscription fees, no monthly costs—just a 0.05% trading fee per transaction.

The platform offers:

**Grid Trading Bot** - Buys low, sells high within a price range you set

**DCA Bot** - Dollar-cost averages into positions automatically

**Arbitrage Bot** - Attempts to profit from price differences

**Martingale Bot** - Doubles down after losses (yes, really)

**Rebalancing Bot** - Keeps your portfolio at target allocations

On paper, it sounds great. Free bots! Automation! Passive income!

But here's where I started asking questions.

## What's Actually Good About Pionex

I believe in being fair, so let me acknowledge what Pionex does well:

**Genuinely free bots.** No subscription fees is rare in this space. Most platforms charge $30-150/month before you make a single trade.

**Low barrier to entry.** You can start with small amounts and experiment without worrying about subscription costs eating your capital.

**Simple interface.** For grid trading specifically, the setup process is straightforward. Pick a range, set your parameters, let it run.

**Built-in exchange.** No API connections to manage. Everything lives in one place.

If you're curious about trading automation and want to experiment with minimal financial risk, Pionex makes that possible.

## What Made Me Keep Looking

Here's where my research got interesting.

**You configure everything.** The bots are free, but the strategy isn't included. You decide the price ranges. You pick the grid spacing. You choose when to start and stop. "Free tool" doesn't mean "free expertise."

**Grid bots have a fundamental problem.** They work great in sideways markets—buying and selling within a range. But crypto doesn't stay sideways. When Bitcoin trends up 40% or crashes 30%, grid bots either miss the upside or hold bags on the downside.

One Reddit user documented their 100-day Pionex experiment with real numbers. Their result? **6.3% total return over 100 days.** That's roughly 23% annualized—which sounds okay until you realize Bitcoin itself was up significantly more during that same period. They would have made more money doing nothing.

**"Free" has a different meaning.** Pionex makes money from trading fees and spread. When something is free, you're usually the product—or you're paying in ways that aren't obvious.

**No strategy, no edge.** The bot executes your plan. But if your plan is "I don't know, let's try a grid from $40K to $50K," that's not a strategy. That's hope with automation.

![Pionex vs Autonomous Trading Comparison](/blog-images/pionex-research-not-switching-01.webp)

## Who Pionex Is Actually For

After all my research, I think Pionex makes sense for a specific type of person:

- You want to learn how trading bots work without spending money on subscriptions
- You have time to research, configure, and monitor your setups
- You understand technical analysis well enough to set meaningful parameters
- You're okay with returns that might underperform buy-and-hold
- You enjoy the process of trading, not just the results

There's nothing wrong with that. Some people like tinkering. Some people want to learn by doing.

I'm just not that person anymore.

## Why I'm Not Switching

After a year of autonomous trading, I know what I value:

**Results over tools.** I don't want to configure bots. I want profits in my account. My system has generated nearly $5,000 in verified profits without me touching a single setting.

**Transparency over promises.** Anyone can claim their bot works. I publish every trade—wins and the occasional open position—for anyone to verify.

**Time over tinkering.** I spent enough of my career optimizing systems. For my trading, I wanted something that runs while I focus on other things. My system averages a trade every 8 hours. I check it when I feel like it.

**Proven over experimental.** After 985+ trades and a 100% win rate on closed positions, I'm not looking to start over with a platform that requires me to build the strategy from scratch.

Pionex is free. But my time isn't. And my capital definitely isn't.

## The Bottom Line

Pionex is a legitimate platform. The free bots are real. For someone who wants to experiment with automation and has time to develop their own strategies, it's a reasonable starting point.

But free tools don't guarantee free profits. And learning to configure grid bots—through trial and error with real money—has its own cost.

I chose a different path: an AI-enhanced system with built-in strategy that I can verify in real-time. Nearly a year and close to 1,000 trades later, I'm glad I did.

Want to see what that looks like? Every trade I make is published live. [See my actual results →](/transparency)

---

*The autonomous trading system I use was developed by Ed Barsano and the GoBabyTrade™ team, who've spent 25+ years refining systematic trading approaches. I'm an affiliate because I use the product—not the other way around.*`},{slug:"coinrule-easy-not-profitable",title:"Coinrule Makes Trading 'Easy.' That's Exactly Why I Passed.",publishDate:"2026-01-13",date:"2026-01-13",published:!1,category:"Market Intelligence",author:"Patrick Jenkins",heroImage:"/blog-images/coinrule-easy-not-profitable-hero.webp",imageAlt:"Coinrule trading automation platform review",excerpt:"Coinrule promises 'if this, then that' trading automation. After researching their 250+ templates, I understood why easy doesn't mean profitable.",metaDescription:"Coinrule promises 'if this, then that' trading automation. After researching their 250+ templates, I understood why easy doesn't mean profitable.",content:`"Build trading rules without code!"
"250+ pre-built templates!"
"If this, then that—it's that simple!"

Coinrule's pitch is compelling. Trading automation for everyone, no technical knowledge required. Just pick a template, customize a few settings, and let the bot work.

When I was researching automated trading options, Coinrule's simplicity caught my attention. After a year of publishing every trade my system makes, I wanted to understand all the alternatives out there.

So I dug into Coinrule. What I found taught me something important about the difference between "easy to build" and "easy to profit."

## What Coinrule Actually Is

Coinrule is a rule-based trading automation platform. Think of it like IFTTT (If This Then That) for crypto trading.

You build rules using their visual editor:
- **IF** Bitcoin drops 5% in one hour...
- **THEN** buy $100 worth
- **AND** set a take-profit at 3%

They offer 250+ pre-built templates covering strategies like:
- Buy the dip
- Accumulate on schedule
- Golden cross trading
- Take profit in stages

The platform connects to major exchanges—Binance, Coinbase, Kraken—and executes trades automatically based on your rules.

They're Y Combinator backed, which adds credibility in the startup world.

## What Coinrule Does Well

Let me be fair about the genuine advantages:

**Truly beginner-friendly.** No coding, no technical complexity. If you can understand "when X happens, do Y," you can build a rule. The interface is clean and intuitive.

**Template library saves time.** 250+ templates means you're not starting from zero. You can see what strategies others have built and modify them.

**Demo mode exists.** Testing rules with simulated money before using real capital is always smart. They make this easy.

**Free tier available.** You can start with limited features without paying, which lowers the barrier to experimentation.

For someone who wants to dip their toes into automation, Coinrule makes the technical side genuinely approachable.

## Why "Easy" Worried Me

Here's where my research shifted.

**Easy to build ≠ easy to profit.** I can build a rule that says "buy when Bitcoin drops 3%." But is that a profitable strategy? Building the rule is simple. Knowing which rule to build? That's where the edge comes from—and no template library provides that.

**Templates aren't strategies.** Having 250+ templates is like having 250+ cookie cutters. You still need to know which one to use, when to use it, and whether it'll work in current market conditions. The template is the tool; the insight is the value.

**Centralized exchanges only.** Coinrule works with major exchanges but doesn't support DeFi or newer platforms. That's not a dealbreaker, but it limits optionality as the crypto space evolves.

**The pricing curve gets steep.** The free tier is limited. Paid plans run $29-449 per month. At the pro level, you're looking at $5,388 per year. That's serious money for what amounts to rule execution—the profitable rules still need to come from you.

![Easy to Build vs Easy to Profit](/blog-images/coinrule-easy-not-profitable-01.webp)

## The Deeper Problem I Saw

This is what ultimately made me pass on Coinrule:

The platform solves the wrong problem.

Most people don't fail at trading because they can't execute rules fast enough. They fail because they don't have rules worth executing. Automating a bad strategy just means you lose money faster and more efficiently.

Coinrule gives you a very nice way to build rules. But when I looked at user discussions and results, the pattern was clear: people who already understood trading could automate their approach. People who didn't understand trading automated their confusion.

The platform doesn't teach you what works. It teaches you how to build. Those aren't the same thing.

## Who Coinrule Is Actually For

Based on my research, Coinrule makes sense if:

- You already have trading ideas you want to test
- You want a visual, low-code way to experiment
- You have time to iterate through different rule combinations
- You understand that templates are starting points, not solutions
- You're okay paying for the premium features as you scale

Basically: people who want to learn by building. There's nothing wrong with that path. It's just not my path.

## Why I Chose Different

After a year of autonomous trading and nearly 1,000 published trades, I know what I was looking for:

**I wanted the strategy, not just the tools.** Coinrule lets me build anything. My system came with a strategy already working. After 985+ trades and a 100% win rate on closed positions, I didn't have to guess which rules might work.

**I wanted transparency over templates.** I can see 250 templates on Coinrule. What I can't see is how many users actually profit with them. My system? Every trade is published. The strategy proves itself daily in a spreadsheet anyone can view.

**I valued simplicity—actual simplicity.** Coinrule is "easy" compared to coding. But I still have to decide what rules to build, test them, iterate, refine. That's a hobby, and some people enjoy it. I wanted something even simpler: watch the results come in.

**I didn't want to learn by losing.** The natural path with Coinrule is: try things → see what fails → try other things → eventually find what works. That learning costs real money. I wanted to skip to "what works" and verify it myself.

## The Bottom Line

Coinrule is a well-designed platform for people who want to build trading automation visually. If you enjoy the process of creating and testing strategies, it's a solid option.

But "easy to use" and "easy to profit" are different things entirely.

Making rule-building simple doesn't make profitable rules simple. And that's where most people actually struggle.

I wanted something where the strategy was the product—not just the tools to build my own. After 985+ trades and nearly $5,000 in verified profits, I'm glad I chose that path.

Curious what results-first looks like? Every trade is published live. [See my actual performance →](/transparency)

---

*The autonomous trading system I use was developed by Ed Barsano and the GoBabyTrade™ team, who've spent 25+ years refining systematic trading approaches. I'm an affiliate because I use the product—not the other way around.*`},{slug:"3commas-million-users",title:"3Commas Has 1 Million Users. I'm Not One of Them. Here's Why.",publishDate:"2026-01-20",date:"2026-01-20",published:!1,category:"Market Intelligence",author:"Patrick Jenkins",heroImage:"/blog-images/3commas-million-users-hero.webp",imageAlt:"3Commas trading platform review",excerpt:"3Commas serves over 1 million traders. After researching their platform extensively, I chose a different path. Here's what I found.",metaDescription:"3Commas serves over 1 million traders. After researching their platform extensively, I chose a different path. Here's what I found and why I'm staying with my current system.",content:`One million users. Over $100 billion in trading volume. A decade in the crypto space.

3Commas has impressive numbers. So when I was researching the automated trading landscape, they were on my list. After a year of publishing every single trade I make, I wanted to understand what else was out there.

I dug deep into 3Commas—features, pricing, user experiences, the good and the bad. Here's what I learned, and why I'm still not signing up.

## What 3Commas Actually Offers

3Commas is a trading bot platform that connects to your existing exchange accounts (Binance, Coinbase, Kraken, and 15+ others). You keep your crypto on your exchange; 3Commas just executes trades based on the bots you configure.

The platform offers:

**DCA Bots** - Dollar-cost average with customizable safety orders

**Grid Bots** - Trade within price ranges automatically

**Signal Bots** - Follow trading signals from third parties

**SmartTrade Terminal** - Advanced manual trading features

**Paper Trading** - Practice without real money

They've been around since 2017, which makes them one of the older players in this space. That's worth something in crypto, where platforms disappear regularly.

## What 3Commas Does Well

Credit where it's due:

**Powerful customization.** If you know exactly what strategy you want to run, 3Commas probably supports it. The DCA bot alone has dozens of configurable parameters.

**Multi-exchange support.** One dashboard controlling bots across multiple exchanges is genuinely useful for active traders managing capital in different places.

**Paper trading.** Testing strategies with fake money before risking real capital is smart. Not every platform offers this.

**Long track record.** They survived the 2018 crash, the 2022 crash, and everything in between. They're not going anywhere tomorrow.

For sophisticated traders who already have a strategy, 3Commas provides the infrastructure to automate it.

## What Gave Me Pause

Here's where my research got real.

**The pricing adds up fast.** 3Commas runs $29-59 per month depending on features. That's $348-708 per year before you make a single profitable trade. If you're starting with a few thousand dollars, subscriptions eat meaningful percentages of your capital.

**You need a strategy before you start.** All those powerful customization options? They require you to know what you're doing. The bots execute your plan—but you have to have a plan worth executing.

**User experience varies dramatically.** I found a review where someone invested $210 and made... $0.06 in three days. Six cents. The official 3Commas response was illuminating: "3Commas never guarantees any profit."

They're right. They don't. That's my point.

**Complexity isn't free.** The learning curve is significant. Multiple users mentioned spending weeks understanding the platform before running real strategies. Time is money, and the education cost is real even if it doesn't show up on a credit card statement.

![3Commas Tools vs Results](/blog-images/3commas-million-users-01.webp)

## Who 3Commas Is Actually For

After my research, the ideal 3Commas user is clear:

- You already have a trading strategy that works
- You want to automate that existing strategy at scale
- You're comfortable with technical complexity
- Your trading capital is large enough that subscription costs are negligible
- You have time to learn the platform properly

If you're an experienced trader looking to automate, 3Commas is a serious option. But that word "experienced" is doing a lot of heavy lifting.

## Why I'm Not Signing Up

My research confirmed what I already suspected: 3Commas is tools, not results.

Here's my thinking:

**I wanted proven, not promising.** 3Commas gives you the capability to build something. My current system came with a strategy already working. Nearly 1,000 trades later, I didn't have to learn anything or configure anything—I just had to verify it was doing what it claimed.

**I value simplicity.** I spent my career building complex systems. For my trading, I wanted the opposite. Check results, reinvest profits, live my life. No parameter tuning, no learning curves, no optimization rabbit holes.

**Transparency matters more than tools.** 3Commas can show me backtests and possibilities. My system shows me actual trades, actually happening, published for anyone to verify. That's not a feature difference—it's a philosophy difference.

**The economics didn't work for me.** Starting out, paying $400-700/year in subscriptions while I learn to configure bots properly? That money could be generating returns instead of paying for access.

## The Deeper Question

Here's what struck me most during my research:

3Commas has served over 1 million users and processed $100 billion in volume. But how many of those users are actually profitable? That number isn't on their website.

They explicitly don't guarantee profits. That's honest—I respect it. But it also tells you something important: even with a decade of development and millions of users, the platform itself doesn't create success. The trader does.

I wanted something different. I wanted a system where the strategy was the product, not just the infrastructure.

## The Bottom Line

3Commas is legitimate. It's powerful. For the right user—someone with an existing strategy, meaningful capital, and time to master the platform—it could be excellent.

I'm just not that user.

After a year of autonomous trading, 985+ verified trades, and nearly $5,000 in actual profits, I'm glad I chose a different path. Not because 3Commas is bad, but because my approach fit what I actually wanted: results without complexity.

Want to see what that looks like in practice? Every single trade is published. [View my live results →](/transparency)

---

*The autonomous trading system I use was developed by Ed Barsano and the GoBabyTrade™ team, who've spent 25+ years refining systematic trading approaches. I'm an affiliate because I use the product—not the other way around.*`},{slug:"bitsgap-everything-simpler",title:"Bitsgap Offers Everything. I Chose Something Simpler.",publishDate:"2026-01-27",date:"2026-01-27",published:!1,category:"Market Intelligence",author:"Patrick Jenkins",heroImage:"/blog-images/bitsgap-everything-simpler-hero.webp",imageAlt:"Bitsgap trading platform review",excerpt:"Bitsgap combines bots, arbitrage, portfolio tracking, and more in one platform. After researching all those features, I chose a simpler path.",metaDescription:"Bitsgap combines bots, arbitrage, portfolio tracking, and more in one platform. After researching all those features, I chose a simpler path. Here's what I found.",content:`Grid bots. DCA bots. Arbitrage scanner. Futures trading. Portfolio tracking. Demo mode. 15+ exchange integrations.

Bitsgap wants to be your everything platform for crypto trading. When I was researching automated trading options, their all-in-one approach stood out. After a year of publishing every single trade I make, I wanted to understand what comprehensive platforms like Bitsgap actually deliver.

I spent real time digging into features, pricing, and what users actually experience. Here's what I learned—and why "everything" wasn't what I was looking for.

## What Bitsgap Actually Is

Bitsgap positions itself as a comprehensive trading platform that combines:

**Multiple bot types** - Grid, DCA, BTD (Buy The Dip), Futures bots

**Arbitrage tools** - Scanner that finds price differences across exchanges

**Smart orders** - Advanced order types for manual traders

**Portfolio tracking** - See all your holdings across exchanges in one view

**Demo mode** - Practice with simulated funds before going live

They support 15+ exchanges including Binance, Coinbase, Kraken, and KuCoin. Connect your API keys, and Bitsgap becomes your unified command center.

The pitch is appealing: why use five different tools when one platform does it all?

## What Bitsgap Does Well

Acknowledging the genuine strengths:

**Demo mode is properly implemented.** You can test strategies with fake money in realistic market conditions. That's valuable for learning without losing.

**Multi-exchange in one dashboard.** If you're trading across multiple platforms, seeing everything unified saves time and mental overhead.

**Clean interface.** For the amount of features packed in, the UI is relatively approachable. They've done good design work.

**Preset bot configurations.** You can start with suggested settings rather than configuring everything from scratch.

For traders who want one platform to rule them all, Bitsgap makes a legitimate case.

## What My Research Revealed

Here's where things got interesting.

**The arbitrage promise vs. reality.** Arbitrage—buying on one exchange where price is lower, selling on another where it's higher—sounds like free money. In theory, Bitsgap's scanner finds these opportunities.

In practice? For retail traders, arbitrage is largely fantasy. By the time you spot the opportunity, transfer funds, and execute trades, the gap has closed. Fees eat profits. Withdrawal times kill timing. The scanner shows opportunities; capturing them is another story entirely.

**Subscriptions stack up quickly.** Bitsgap doesn't have a free tier beyond a 7-day trial. Plans run $28-143 per month. At the Pro level, that's $1,716 per year. For their most advanced features, you're paying before you have any evidence they'll work for you.

**Features create complexity.** Having everything in one place sounds efficient until you're facing a dashboard with grid bots, DCA settings, arbitrage scanners, futures controls, and portfolio graphs all demanding attention. More features mean more decisions. More decisions mean more opportunities to get something wrong.

**The success rate question remains unanswered.** This isn't unique to Bitsgap, but it matters: with all these tools available, what percentage of users actually profit? That number isn't prominently featured anywhere. Features are showcased; results aren't.

![Everything Platform vs Simple Results](/blog-images/bitsgap-everything-simpler-01.webp)

## What Industry Experts Say

While researching, I found this assessment from CoinBureau, a respected crypto education channel:

"Considerably more people lose money using trading bots than make money with them."

That's not specifically about Bitsgap—it's about the entire space. But it's worth sitting with. All these features, all these platforms, all these promises... and the majority of users still lose.

The tools aren't the problem. The tools are often excellent. The problem is that tools without edge are just sophisticated ways to lose money.

## Who Bitsgap Is Actually For

Based on my research, Bitsgap makes sense for a specific profile:

- You're already trading across multiple exchanges
- You want consolidated portfolio visibility
- You have strategies you're ready to automate (not still figuring out)
- You can justify $28-143/month in subscription costs
- You have time to learn and optimize the platform

Active traders managing meaningful portfolios who want a command center—that's the ideal user. Not someone looking for passive income or getting started with automation.

## Why I Chose Simpler

Bitsgap's approach is comprehensive. Mine is different.

After a year of autonomous trading, here's what I know about myself:

**I don't want everything. I want what works.** Bitsgap offers grid bots, DCA bots, arbitrage, futures, portfolio tracking... My system does one thing and does it well. After 985+ trades and nearly $5,000 in profits, simplicity won.

**Features don't equal profits.** More capabilities, more bot types, more tools... none of that generates returns by itself. My system came with strategy included. I didn't need an arsenal of options; I needed one approach that was already proven.

**Transparency beats dashboards.** Bitsgap has beautiful portfolio views and analytics. What I can't see is their users' actual results. My system publishes every trade—wins and open positions—for anyone to verify. That's the transparency that matters to me.

**I was done paying for potential.** $28-143/month to access tools that might help me profit? After a year of actual results without subscription costs, I can tell you: paying for tools vs. paying for outcomes are very different things.

## The Honest Assessment

Bitsgap isn't a bad platform. For the right user, it might be excellent. The features are real, the interface is polished, and the team has clearly invested in building something comprehensive.

But comprehensive isn't the same as effective.

More features don't guarantee better results. And in a space where—according to industry experts—most traders lose money even with sophisticated tools, I had to ask: is more sophistication actually what I need?

I decided it wasn't. I wanted something simpler, with strategy built in, and results I could verify in real-time. After 985+ trades, I'm confident I made the right call.

Want to see simple and transparent in action? Every trade is live. [Check my actual results →](/transparency)

---

*The autonomous trading system I use was developed by Ed Barsano and the GoBabyTrade™ team, who've spent 25+ years refining systematic trading approaches. I'm an affiliate because I use the product—not the other way around.*`},{slug:"985-trades-what-i-know",title:"After 985+ Trades, Here's What I Know About Trading Bots",publishDate:"2026-01-31",date:"2026-01-31",published:!1,category:"Education",author:"Patrick Jenkins",heroImage:"/blog-images/985-trades-what-i-know-hero.webp",imageAlt:"Trading bot lessons from 985 trades",excerpt:"After a year of autonomous trading and 985+ verified trades, I finally have a real answer to whether crypto trading bots are profitable. Here's what I know now.",metaDescription:"After a year of autonomous trading and 985+ verified trades, I finally have a real answer to whether crypto trading bots are profitable. Here's what I know now.",content:`"Are crypto bots profitable?"

I've read dozens of articles trying to answer this question. Most of them fall into two camps: breathless enthusiasm (yes! passive income! financial freedom!) or cynical dismissal (it's all gambling, you'll lose everything).

I have a different perspective: actual experience.

After a year of autonomous trading, 985+ trades, and nearly $5,000 in verified profits—every single transaction published for anyone to verify—I can finally answer this question with something other than theory.

Here's what I actually know about trading bots after using one for real.

## The Short Answer

**Some crypto bots are profitable. Most users are not.**

That's not a contradiction. The tools can work. But tools don't guarantee results. A professional-grade kitchen doesn't make someone a great chef. A premium gym membership doesn't make someone fit.

The same principle applies here.

## What the Industry Data Shows

Let me share something I found during my research. CoinBureau, a respected crypto education channel, put it bluntly:

"Considerably more people lose money using trading bots than make money with them."

This isn't fearmongering. It's pattern recognition across millions of users on dozens of platforms. The tools exist. The capabilities exist. The consistent profits for most users? Don't exist.

Why? Because most trading bots give you tools without strategy. They're infrastructure, not edge.

## The Platforms I Researched

Before settling on my approach, I researched the major players. Here's what I found:

### Pionex: Free Tools, Real Costs

Pionex offers 16 free trading bots—no subscription required. Sounds amazing until you realize:
- You configure everything yourself
- Grid bots fail in trending markets
- One documented user made 6.3% in 100 days... less than just holding Bitcoin

"Free" tools still require paid expertise.

[Read my full research on Pionex →](/blog/pionex-research-not-switching)

### 3Commas: Power Without Direction

Over 1 million users. $100 billion in trading volume. A decade of existence. Impressive numbers.

But one user review stuck with me: invested $210, made $0.06 in three days. 3Commas' official response? "We never guarantee any profit."

They're right. They don't. The tools are powerful. The strategy is your problem.

[Read my full research on 3Commas →](/blog/3commas-million-users)

### Coinrule: Easy Doesn't Mean Profitable

"If this, then that" automation with 250+ templates. Building rules is genuinely simple.

But simple to build ≠ simple to profit. Templates are starting points, not strategies. Knowing which rule to use, and when? That's where the edge comes from.

[Read my full research on Coinrule →](/blog/coinrule-easy-not-profitable)

### Bitsgap: Everything Platform, Same Question

Grid bots, DCA bots, arbitrage scanning, futures trading, portfolio tracking—all in one place. Feature-rich doesn't begin to describe it.

But more features don't equal more profits. With all those capabilities, what percentage of users actually succeed? That number isn't on their website.

[Read my full research on Bitsgap →](/blog/bitsgap-everything-simpler)

![Tools vs Strategy Comparison](/blog-images/985-trades-what-i-know-01.webp)

## The Common Thread

Every platform I researched shares something in common:

**They provide the tools. You provide the strategy.**

That's fine if you already know what works. Most people don't. So they pay for access, configure based on guesswork, lose money, and blame the tools.

The tools usually aren't the problem. The missing edge is the problem.

## What I Learned By Actually Trading

Here's what a year of live autonomous trading taught me:

### Lesson 1: Strategy Must Come First

My system didn't ask me to configure anything. It came with a strategy already working—developed, tested, refined. I didn't have to guess which parameters to set or which approaches might work.

That's the opposite of most bot platforms, where the first thing you do is make decisions you're not qualified to make.

### Lesson 2: Transparency Creates Accountability

I publish every single trade. Anyone can see my wins. Anyone can see my open positions. There's nowhere to hide and nothing to exaggerate.

Most platforms show you backtests and possibilities. I show actual trades, actually happening. That accountability changes how you think about the whole system.

### Lesson 3: Time Horizon Matters

My system averages a trade every 8 hours or so. It's not trying to catch every micro-movement. It's not day trading on 5-minute charts. It's patient, systematic, and willing to hold positions through volatility.

Most bot users get impatient. They want instant results. They tinker with settings after a few hours. That's how strategies die—killed by the person running them.

### Lesson 4: Results Require Patience

My first month wasn't spectacular. Neither was my second. Over time, the compounding effect became clear. After 985+ trades, I've generated nearly $5,000 in verified profits.

But I had to trust the process long enough to see it work. Most people don't.

![My Year in Numbers](/blog-images/985-trades-what-i-know-02.webp)

## So, Are Crypto Bots Profitable?

Here's my honest answer after a year of actual experience:

**Yes—if:**
- The strategy is proven, not experimental
- You're not the one who has to build it from scratch
- You have the patience to let compounding work
- You can verify actual results, not just backtests
- You're focused on systematic growth, not gambling on moonshots

**No—if:**
- You expect tools alone to generate profits
- You want to "set and forget" without any verification
- You're hoping to get rich quick
- You're not willing to think in months and years
- You can't distinguish between platforms and strategies

The tool matters less than the approach. The approach matters less than the discipline to stick with it.

## My Results After One Year

Let me be specific about what I've experienced:

- **Total trades:** 985+
- **Closed trade win rate:** 100%
- **Total verified profit:** Nearly $5,000
- **Average trade frequency:** ~8 hours
- **Manual intervention required:** Zero
- **Every trade published:** Yes, live on my transparency dashboard

These aren't backtested results. They're not simulated. They're actual trades that actually happened, documented in real-time for anyone to verify.

That's what I was looking for when I started researching automated trading. That's what I found. And after a year, I'm still glad I chose this path.

## The Bottom Line

"Are crypto bots profitable?" is the wrong question.

Better questions:
- Does this specific approach have proven results I can verify?
- Is the strategy included, or do I have to build it myself?
- What's the track record—not backtests, but actual trades?
- Can I trust this long enough for compounding to work?

I couldn't answer those questions for most platforms. I could answer them for mine.

After 985+ trades and nearly $5,000 in actual profits, I'm still learning. But I'm learning from real results, not hypothetical scenarios.

Want to see what that looks like? Every trade is published. [View my live transparency dashboard →](/transparency)

---

*The autonomous trading system I use was developed by Ed Barsano and the GoBabyTrade™ team, who've spent 25+ years refining systematic trading approaches. I'm an affiliate because I use the product—not the other way around.*`}];function Cv(e){if(e.published===!1)return!1;if(!e.publishDate)return!0;const t=new Date(e.publishDate),n=new Date;return n.setHours(0,0,0,0),t.setHours(0,0,0,0),t<=n}function zo(e){return e.filter(Cv)}function hr(e){return new Date(e.publishDate||e.date)}function r$(){return typeof window>"u"?!1:new URLSearchParams(window.location.search).get("preview")==="true"}const a$=({maxPosts:e=4})=>{const t=zo(ka).sort((s,l)=>hr(l).getTime()-hr(s).getTime()).slice(0,e),n=s=>new Date(s).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),r=s=>({Education:"from-blue-500 to-cyan-500","Anti-Gambling":"from-red-500 to-orange-500","Market Intelligence":"from-green-500 to-emerald-500",Lifestyle:"from-purple-500 to-pink-500","Market Psychology":"from-amber-500 to-yellow-500"})[s]||"from-purple-500 to-blue-500";if(t.length===0)return null;const[a,...i]=t;return o.jsxs("section",{className:"py-20 px-4 relative overflow-hidden",children:[o.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/30 to-slate-900 -z-10"}),o.jsx("div",{className:"absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"}),o.jsx("div",{className:"absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"}),o.jsxs("div",{className:"max-w-6xl mx-auto relative z-10",children:[o.jsxs("div",{className:"text-center mb-12",children:[o.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-white mb-4",children:"Latest Insights"}),o.jsx("p",{className:"text-gray-300 text-lg max-w-2xl mx-auto",children:"Real talk about trading, building wealth, and avoiding the gambling trap"})]}),o.jsx(Ge,{to:`/blog/${a.slug}`,className:"group block mb-8 bg-gray-900/50 rounded-2xl overflow-hidden border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 shadow-lg shadow-purple-500/10 hover:shadow-xl hover:shadow-purple-500/20",children:o.jsxs("div",{className:"grid md:grid-cols-2 gap-0",children:[o.jsx("div",{className:"aspect-video md:aspect-auto overflow-hidden",children:o.jsx("img",{src:a.heroImage,alt:a.imageAlt||a.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"})}),o.jsxs("div",{className:"p-6 md:p-8 flex flex-col justify-center",children:[o.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[o.jsxs("span",{className:"flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-full",children:[o.jsx(Ue,{className:"w-3 h-3"})," FEATURED"]}),o.jsx("span",{className:`px-3 py-1 bg-gradient-to-r ${r(a.category)} text-white text-xs font-medium rounded-full`,children:a.category})]}),o.jsx("h3",{className:"text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors",children:a.title}),o.jsx("p",{className:"text-gray-300 text-lg mb-6 line-clamp-3",children:a.excerpt||a.metaDescription}),o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("span",{className:"text-gray-500",children:n(a.date)}),o.jsxs("span",{className:"text-purple-400 flex items-center gap-2 font-medium group-hover:gap-3 transition-all",children:["Read article ",o.jsx(Pe,{className:"w-5 h-5"})]})]})]})]})}),i.length>0&&o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:i.map(s=>o.jsxs(Ge,{to:`/blog/${s.slug}`,className:"group block bg-gray-900/50 rounded-xl overflow-hidden border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 shadow-lg shadow-purple-500/10 hover:shadow-xl hover:shadow-purple-500/20",children:[o.jsx("div",{className:"aspect-video overflow-hidden",children:o.jsx("img",{src:s.heroImage,alt:s.imageAlt||s.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",loading:"lazy"})}),o.jsxs("div",{className:"p-5",children:[o.jsx("span",{className:`inline-block px-2.5 py-1 text-xs font-medium bg-gradient-to-r ${r(s.category)} text-white rounded-full mb-3`,children:s.category}),o.jsx("h3",{className:"text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-purple-300 transition-colors",children:s.title}),o.jsx("p",{className:"text-gray-400 text-sm line-clamp-2 mb-4",children:s.excerpt||s.metaDescription}),o.jsxs("div",{className:"flex items-center justify-between text-sm",children:[o.jsx("span",{className:"text-gray-500",children:n(s.date)}),o.jsxs("span",{className:"text-purple-400 flex items-center gap-1 group-hover:gap-2 transition-all",children:["Read ",o.jsx(Pe,{className:"w-4 h-4"})]})]})]})]},s.slug))}),o.jsx("div",{className:"text-center mt-10",children:o.jsxs(Ge,{to:"/blog",className:"inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-colors group",children:[o.jsx(jl,{className:"w-5 h-5"}),o.jsx("span",{children:"View all articles"}),o.jsx(Pe,{className:"w-5 h-5 group-hover:translate-x-1 transition-transform"})]})})]})]})},i$=e=>{const[t,n]=f.useState(()=>typeof window<"u"?window.matchMedia(e).matches:!1);return f.useEffect(()=>{const r=window.matchMedia(e);n(r.matches);const a=i=>n(i.matches);return r.addEventListener("change",a),()=>r.removeEventListener("change",a)},[e]),t},xr=()=>{var h;const e=Um(),[t,n]=f.useState(!1),{tradingStats:r,isLoading:a}=Xr(),i=i$("(min-width: 768px)"),s=()=>{Ri("start_trading_save_1000","full_nav"),Li("https://gobabytrade.com/432706BE","Start Trading Save $1000 Nav")},l=[{label:"Home",path:"/"},{label:"Blog",path:"/blog"},{label:"FAQ",path:"/faq"},{label:"Resources",path:"/resources"}],c=m=>m==="/"?e.pathname==="/":e.pathname.startsWith(m),d=(()=>{if(!(r!=null&&r.totalProfit))return 0;const m=new Date("2025-01-08"),g=Math.floor((new Date().getTime()-m.getTime())/(1e3*60*60*24));return g>0?r.totalProfit/g:0})();return o.jsx("nav",{className:"sticky top-0 z-50 bg-white/8 backdrop-blur-md border-b border-white/10",children:o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[o.jsxs("div",{className:"flex items-center gap-4 h-16",children:[o.jsxs(Ge,{to:"/",className:"flex items-center gap-3 group flex-shrink-0",children:[o.jsx("div",{className:"w-8 h-8 rounded-lg overflow-hidden shadow-md shadow-purple-500/30 bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 group-hover:shadow-lg group-hover:shadow-purple-500/40 transition-all duration-300",children:o.jsx("div",{className:"w-full h-full rounded-md overflow-hidden bg-white/10 backdrop-blur-sm",children:o.jsx("img",{src:"/robot-logo.png",alt:"MyRoboticTrader Robot",className:"w-full h-full object-cover"})})}),o.jsxs("div",{className:"text-lg font-bold",children:[o.jsx("span",{className:"text-white",children:"My"}),o.jsx("span",{className:"text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text",children:"Robotic"}),o.jsx("span",{className:"text-white",children:"Trader"})]})]}),i&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"flex items-center gap-4 flex-1 justify-center max-w-4xl",children:[o.jsxs("div",{className:"flex items-center gap-3 bg-white/10 rounded-lg px-4 py-2 border border-white/20 shadow-sm hover:shadow-md hover:bg-white/[0.12] transition-all duration-200 cursor-default",children:[o.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-green-400 to-emerald-500 p-1.5 flex-shrink-0 shadow-md",children:o.jsx(Bn,{className:"w-full h-full text-white",strokeWidth:2.5})}),o.jsx("div",{className:"min-w-0",children:a?o.jsx("div",{className:"text-sm font-bold text-green-300 animate-pulse",children:"Loading..."}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"text-sm font-bold text-green-300 truncate",children:["$",r==null?void 0:r.totalProfit.toLocaleString("en-US",{minimumFractionDigits:0,maximumFractionDigits:0}),"+"]}),o.jsx("div",{className:"text-xs text-gray-400 font-medium",children:"Total"})]})})]}),o.jsxs("div",{className:"flex items-center gap-3 bg-white/10 rounded-lg px-4 py-2 border border-white/20 shadow-sm hover:shadow-md hover:bg-white/[0.12] transition-all duration-200 cursor-default",children:[o.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-500 p-1.5 flex-shrink-0 shadow-md",children:o.jsx(ip,{className:"w-full h-full text-white",strokeWidth:2.5})}),o.jsx("div",{className:"min-w-0",children:a?o.jsx("div",{className:"text-sm font-bold text-blue-300 animate-pulse",children:"Loading..."}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"text-sm font-bold text-blue-300 truncate",children:["$",((h=r==null?void 0:r.monthlyAverage)==null?void 0:h.toLocaleString("en-US",{minimumFractionDigits:0,maximumFractionDigits:0}))||"0"]}),o.jsx("div",{className:"text-xs text-gray-400 font-medium",children:"Monthly"})]})})]}),o.jsxs("div",{className:"flex items-center gap-3 bg-white/10 rounded-lg px-4 py-2 border border-white/20 shadow-sm hover:shadow-md hover:bg-white/[0.12] transition-all duration-200 cursor-default",children:[o.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-purple-400 to-pink-500 p-1.5 flex-shrink-0 shadow-md",children:o.jsx(Ue,{className:"w-full h-full text-white",strokeWidth:2.5})}),o.jsx("div",{className:"min-w-0",children:a?o.jsx("div",{className:"text-sm font-bold text-purple-300 animate-pulse",children:"Loading..."}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"text-sm font-bold text-purple-300 truncate",children:["$",d.toLocaleString("en-US",{minimumFractionDigits:0,maximumFractionDigits:0})]}),o.jsx("div",{className:"text-xs text-gray-400 font-medium",children:"Daily"})]})})]})]}),o.jsxs("div",{className:"flex items-center gap-6",children:[l.map(m=>o.jsxs(Ge,{to:m.path,className:`text-sm font-semibold transition-all duration-200 relative group ${c(m.path)?"text-white":"text-gray-300 hover:text-white"}`,children:[m.label,c(m.path)&&o.jsx("div",{className:"absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"}),!c(m.path)&&o.jsx("div",{className:"absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-200"})]},m.path)),o.jsxs("a",{href:"https://gobabytrade.com/432706BE",onClick:s,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-purple-600 to-pink-500 hover:from-purple-600 hover:via-pink-500 hover:to-pink-600 text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-xl shadow-lg shadow-purple-500/40 hover:shadow-purple-500/60 flex-shrink-0",children:["Start Trading – Save $1,000",o.jsx(Pe,{className:"w-4 h-4"})]})]})]}),!i&&o.jsx("button",{onClick:()=>n(!t),className:"ml-auto text-white hover:text-purple-300 transition-colors p-2","aria-label":"Toggle menu",children:t?o.jsx(Jb,{className:"w-6 h-6"}):o.jsx(zb,{className:"w-6 h-6"})})]}),!i&&t&&o.jsx("div",{className:"py-4 border-t border-white/10",children:o.jsxs("div",{className:"flex flex-col gap-4",children:[l.map(m=>o.jsx(Ge,{to:m.path,onClick:()=>n(!1),className:`text-sm font-medium transition-colors duration-300 ${c(m.path)?"text-purple-300":"text-gray-200 hover:text-white"}`,children:m.label},m.path)),o.jsxs("a",{href:"https://gobabytrade.com/432706BE",onClick:()=>{s(),n(!1)},target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg shadow-purple-500/30",children:["Start Trading – Save $1,000",o.jsx(Pe,{className:"w-4 h-4"})]})]})})]})})},st=({to:e,children:t})=>o.jsx(Ge,{to:e,className:"text-purple-300 hover:text-purple-200 underline transition-colors duration-200",children:t}),o$=[{category:"My Personal Experience",icon:up,color:"from-purple-500 to-pink-500",questions:[{question:"Why did you start automated trading in January 2025?",answer:o.jsxs(o.Fragment,{children:["I was tired of watching charts and trying to time the market perfectly. I wanted a systematic approach that could work while I lived my life. The idea of a system that only trades when conditions are favorable—and sits patiently when they're not—made sense to me. I started tracking every single trade publicly on this site to prove it works. ",o.jsx(st,{to:"/blog/trading-disorders-ai-solution",children:"Learn why I let an AI make every trade →"})]})},{question:"What surprised you most in your first months of trading?",answer:o.jsxs(o.Fragment,{children:["Two things: First, how truly hands-off it is. I genuinely don't watch it constantly. Second, how patience is everything. Some weeks are quiet with few trades, and that used to make me nervous. Now I understand that's the system being smart—waiting for the right opportunities instead of forcing trades. ",o.jsx(st,{to:"/blog/trading-disorders-ai-solution",children:"Read more about overcoming trading emotions →"})]})},{question:"What happens during flat or low volatility weeks?",answer:"The system thrives on volatility, so when the market is flat, there are fewer trading opportunities. Some weeks I see very few trades. The key lesson I've learned: Don't panic and don't start tweaking settings. Patience is paramount. The system knows what it's doing—it's waiting for better conditions."},{question:"Do you still check it constantly or worry about trades?",answer:"Honestly? In the beginning, yes—I checked it all the time. Now, a few months in, I glance at it maybe once a day, sometimes less. The transparency on this site is actually for YOU to see how it works, not because I'm obsessing over every trade. The system handles it."},{question:"Your profits seem modest. Shouldn't you be making way more money?",answer:o.jsxs(o.Fragment,{children:["I get this question a lot, and I appreciate the honesty. Here's my perspective: I'm not trying to get rich quick—I'm building sustainable, consistent income. Those '$50K in a month!' claims you see everywhere? Usually from huge capital, massive risk, or cherry-picked best months. My results are real, transparent, and conservative. I'm focused on steady growth without gambling. ",o.jsx(st,{to:"/blog/percent-gain-vs-roi",children:"Why I show % gain instead of ROI →"})]})},{question:"Why not scale up and make bigger profits faster?",answer:"Fair question. I could throw more money at it, but I'm being strategic. I'm adding capital gradually as I get more comfortable and as the system proves itself month after month. I'd rather grow methodically and sleep well at night than rush to scale and take on more risk than I'm comfortable with."},{question:"Would you recommend this to a complete beginner?",answer:o.jsxs(o.Fragment,{children:["Yes, but with realistic expectations. This isn't a 'get rich quick' scheme. It's systematic investing that requires patience and trust in the process. If you're willing to let the system do its job without constantly interfering, this works. ",o.jsx(st,{to:"/blog/how-to-make-passive-income-crypto",children:"Read the complete beginner's guide →"})]})},{question:"How do I get started with this system?",answer:o.jsxs(o.Fragment,{children:["The system I use is called GoBabyTrade. You can start with paper trading to test it risk-free before going live. Use my referral link to save $1,000:"," ",o.jsx("a",{href:"https://gobabytrade.com/432706BE",target:"_blank",rel:"noopener noreferrer",className:"text-purple-300 hover:text-purple-200 underline transition-colors duration-200",children:"Get GoBabyTrade – Save $1,000"})]})}]},{category:"About My Trade Log",icon:Ue,color:"from-cyan-500 to-blue-500",questions:[{question:"Why do you publicly show every single trade?",answer:"Because I'm tired of fake affiliate sites with cherry-picked results and photoshopped screenshots. If I'm going to recommend this system, I need to prove it works with real, verifiable data. Every trade you see is real—all my results are public and I update them almost daily."},{question:"How do I know your trade log is real and not faked?",answer:"The data comes directly from my robotic trader's transaction log—and everything traces back to my actual Coinbase transaction history. Plus, I show the flat weeks and quiet periods too, not just the wins. If I were faking it, why would I show the boring weeks?"},{question:"What do all the numbers in the trade log mean?",answer:"Each row shows a completed trade: the cryptocurrency, when I bought it, when I sold it, the quantity, the profit (or if it was a break-even trade), and the strategy used. The 'Trading Results' section summarizes everything—total profits, win rate, average profit per trade, etc."},{question:"Why are some weeks busier with trades than others?",answer:"The system only trades when market conditions are favorable. During high volatility, you'll see lots of trading activity. During flat periods, the system waits patiently. Some weeks have 20+ trades, other weeks might have 2-3. That's normal and expected."},{question:"What happens during down markets? Shouldn't the system stop trading?",answer:o.jsxs(o.Fragment,{children:["Actually, down markets are where the system shines! When prices drop, the trader accumulates inventory at lower prices—building up positions strategically. When prices turn around, you'll have a portfolio of positions ready to sell for profit. ",o.jsx(st,{to:"/blog/why-start-automated-trading-in-down-markets",children:"Why down markets are the best time to start →"})]})},{question:"Your average profit per trade seems small. Why only a few dollars per trade?",answer:o.jsxs(o.Fragment,{children:["Here's what matters more than average profit per trade: I've been profitable every single month since I started. Every. Single. Month. The system isn't trying to hit home runs—it's focused on consistency and never selling at a loss. Small, consistent profits compound over time. ",o.jsx(st,{to:"/blog/percent-gain-vs-roi",children:'Understanding % gain vs "how much should I invest" →'})]})},{question:"Do you ever hide losing trades?",answer:o.jsxs(o.Fragment,{children:["No. Every single trade is shown. However, the system is designed to only sell positions when they're profitable. If a position goes underwater, the system holds it until it can sell for a profit. That's the whole point—patience over panic. ",o.jsx(st,{to:"/blog/never-sell-at-loss-crypto-trading",children:"Why the system never sells at a loss →"})]})},{question:"Can I see trades from specific cryptocurrencies?",answer:"Yes! The trade log shows which coins are being traded—BONK, DOGE, SHIB, and others. You can see which coins generate the most trades, which ones are most profitable, and how the system handles different market conditions for each coin."},{question:"Why is this level of transparency important?",answer:"Because 99% of crypto affiliate sites are full of hype and promises with no proof. I wanted to build something different—a site where you can see the actual performance, not marketing spin. This trade log is my proof and my accountability."},{question:"Why have results dropped from the July highs?",answer:"August and September 2025 saw a market-wide correction after July's peak. During these down markets, the trader accumulates more inventory at better prices—when markets recover, those accumulated positions generate significantly larger profits. Every month remains profitable despite lower activity."},{question:"Can I download the trading data?",answer:"Yes! You can download the complete trade log as a CSV file for your own analysis. Click the download button to export all transactions with timestamps, cryptocurrencies, buy/sell prices, and profit amounts."}]},{category:"Getting Started",icon:cp,color:"from-blue-500 to-purple-500",questions:[{question:"What is robotic crypto trading?",answer:o.jsxs(o.Fragment,{children:["A robotic trader is an automated trading platform that executes buy and sell decisions based on market conditions and your settings. The system monitors markets 24/7 and executes trades in milliseconds without human intervention. ",o.jsx(st,{to:"/blog/bucket-and-well-automated-trading-analogy",children:"Read the simple analogy that explains how it works →"})]})},{question:"Do I need trading experience?",answer:"No experience required! The AI handles all analysis and decisions. You set your preferences and investment amount - the platform does the rest. GoBabyTrade provides support and resources to help you understand the process."},{question:"How much money do I need to start?",answer:"Start with as little as $100. It's recommended to start small to get familiar with the platform before scaling up your investment."},{question:"Can I use this outside the USA?",answer:"Yes! Available worldwide as long as you can trade on Coinbase or Kraken. Simply verify you can create and fund an account with either exchange in your region."},{question:"Should I get Coinbase One?",answer:o.jsxs(o.Fragment,{children:["Absolutely! Coinbase One saves me hundreds monthly with $0 trading fees. When you're making multiple trades daily, those fees add up fast."," ",o.jsx("a",{href:"https://dailyprofits.link/cba",target:"_blank",rel:"noopener noreferrer",className:"text-purple-300 hover:text-purple-200 underline transition-colors duration-200",children:"Get Coinbase One here"})]})}]},{category:"Safety & Security",icon:un,color:"from-green-500 to-blue-500",questions:[{question:"Is my money safe?",answer:"Yes! Your funds stay in your own Kraken/Coinbase accounts. The system only connects via API with trading permissions - it can never withdraw or transfer your funds."},{question:"What if the system makes losing trades?",answer:o.jsxs(o.Fragment,{children:["The GoBabyTrade protection system never executes losing trades. It waits for profitable opportunities or doesn't trade at all, safeguarding your capital. ",o.jsx(st,{to:"/blog/never-sell-at-loss-crypto-trading",children:"Learn how the never-sell-at-loss strategy works →"})]})},{question:"Can I pause or stop the automated trading anytime?",answer:"Yes! You have complete control over the automation. You can pause or stop the robotic trader anytime directly in the trader interface. When paused, the system stops making new trades but your existing positions remain untouched."}]},{category:"Performance & Profits",icon:Ue,color:"from-purple-500 to-pink-500",questions:[{question:"What returns can I expect?",answer:"While past performance doesn't guarantee future results, the GoBabyTrade platform achieves consistent profits by only trading when conditions are favorable. Results vary based on market conditions and your settings."},{question:"How often does it trade?",answer:"The system operates 24/7 and only trades when profitable opportunities arise. May trade multiple times daily during favorable conditions, or wait patiently when conditions aren't optimal."},{question:"What about ROI?",answer:o.jsxs(o.Fragment,{children:["ROI calculations can be misleading since most successful traders grow capital over time. Focus on overall portfolio growth and consistent profitable trades rather than ROI percentages. ",o.jsx(st,{to:"/blog/percent-gain-vs-roi",children:'Why I show % gain instead of "how much should I invest" →'})]})},{question:"Does it ever sell at a loss?",answer:o.jsxs(o.Fragment,{children:["Positions are only sold when profitable, unless you manually choose otherwise. The system waits patiently for opportunities to sell for gains, avoiding locked-in losses. ",o.jsx(st,{to:"/blog/never-sell-at-loss-crypto-trading",children:"Deep dive: Why never selling at a loss is actually possible →"})]})},{question:"Do you guarantee profits?",answer:"No legitimate system can guarantee profits. However, the GoBabyTrade approach of never trading at a loss significantly improves your probability of success."}]},{category:"Money Management",icon:Bn,color:"from-emerald-500 to-teal-500",questions:[{question:"Why doesn't the trader use all my available capital?",answer:"The system is designed to be conservative and patient. It waits for optimal opportunities rather than rushing to deploy all capital at once. This approach protects you from market volatility."},{question:"How does profit management work?",answer:"The system automatically manages profits, and you control whether to reinvest them or keep them separate. You can choose to compound your gains for faster growth or withdraw profits."},{question:"Does the system support dollar cost averaging?",answer:"Yes! There are advanced options where the trader will only buy positions and never sell, effectively creating a dollar cost averaging strategy. Perfect for long-term accumulation."},{question:"Why does the trader buy many positions but not sell during market dips?",answer:o.jsxs(o.Fragment,{children:["Down markets are actually good - this is where you build inventory! The trader takes advantage of lower prices to accumulate positions. When markets recover, you'll have multiple profitable positions ready to sell. ",o.jsx(st,{to:"/blog/why-start-automated-trading-in-down-markets",children:"Why down markets are the best time to start (with real numbers) →"})]})},{question:"Which cryptocurrencies work best for different strategies?",answer:"For active trading, faster-moving currencies often provide more opportunities. However, established coins like BTC and ETH may be better suited for long-term dollar cost averaging strategies. These are examples only - GoBabyTrade provides technical support, not investment advice."},{question:"How do I handle taxes on my trading profits?",answer:o.jsxs(o.Fragment,{children:["Crypto taxes can be complex with hundreds of trades. I personally use CoinTracker to automatically track all my trades and generate tax reports."," ",o.jsx("a",{href:"https://dailyprofits.link/cointracker",target:"_blank",rel:"noopener noreferrer",className:"text-purple-300 hover:text-purple-200 underline transition-colors duration-200",children:"Get CoinTracker here"})]})}]},{category:"Technical & Support",icon:Wi,color:"from-orange-500 to-red-500",questions:[{question:"Why Coinbase and Kraken instead of other exchanges?",answer:"The robotic trading platform was developed specifically for Coinbase and Kraken. These are the only exchanges with approved API integrations from the developer. They also happen to be two of the most reliable and secure exchanges available."},{question:"What exchanges does GoBabyTrade support?",answer:"Coinbase and Kraken exclusively. Seamless integration through secure API connections while keeping your funds safe in your own accounts."},{question:"Do I need to keep my computer running?",answer:"No! The system runs on cloud servers 24/7 even when your computer is off. Monitor trades and adjust settings from any device through the web platform."},{question:"What support is available?",answer:"GoBabyTrade provides comprehensive technical support for setup, configuration, and platform questions. Support is for technical and educational purposes only - no financial advice."}]}],s$=({question:e,answer:t})=>{const[n,r]=f.useState(!1);return o.jsxs("div",{className:"bg-gray-900/50 rounded-xl border border-white/10 overflow-hidden hover:border-purple-400/40 transition-all duration-300 shadow-lg shadow-purple-500/10",children:[o.jsxs("button",{onClick:()=>r(!n),className:"w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/10 transition-colors duration-200",children:[o.jsx("span",{className:"text-lg font-semibold text-white pr-4",children:e}),o.jsx("div",{className:"flex-shrink-0",children:n?o.jsx(sp,{className:"w-5 h-5 text-purple-300"}):o.jsx(op,{className:"w-5 h-5 text-purple-300"})})]}),o.jsx("div",{className:`overflow-hidden transition-all duration-300 ease-in-out ${n?"max-h-[500px] opacity-100":"max-h-0 opacity-0"}`,children:o.jsx("div",{className:"px-6 pb-4 border-t border-white/20",children:o.jsx("div",{className:"text-gray-200 leading-relaxed pt-4",children:t})})})]})},l$=({category:e,icon:t,color:n,questions:r})=>o.jsxs("div",{className:"mb-8",children:[o.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[o.jsx("div",{className:`p-2 rounded-lg bg-gradient-to-br ${n} shadow-lg`,children:o.jsx(t,{className:"w-5 h-5 text-white"})}),o.jsx("h3",{className:"text-2xl font-bold text-white",children:e})]}),o.jsx("div",{className:"space-y-3",children:r.map((a,i)=>o.jsx(s$,{question:a.question,answer:a.answer},i))})]}),c$=()=>o.jsxs("div",{className:"min-h-screen bg-slate-900",children:[o.jsx(xr,{}),o.jsxs("section",{className:"py-20 px-4 relative overflow-hidden",children:[o.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/30 to-slate-900 -z-10"}),o.jsx("div",{className:"absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"}),o.jsx("div",{className:"absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"}),o.jsxs("div",{className:"max-w-4xl mx-auto relative z-10",children:[o.jsxs("div",{className:"text-center mb-12",children:[o.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-white mb-4",children:"Frequently Asked Questions"}),o.jsx("p",{className:"text-xl text-gray-300",children:"Real answers from real experience - no fluff, just transparency"})]}),o.jsx("div",{className:"max-w-2xl mx-auto mb-12",children:o.jsx("img",{src:"/graphics/homepage-faq-01.webp",alt:"3 Steps to Passive Income - Connect, Configure, Collect",className:"w-full rounded-2xl shadow-xl shadow-purple-500/10 border border-white/10"})}),o.jsx("div",{className:"space-y-8 mb-20",children:o$.map((e,t)=>o.jsx(l$,{category:e.category,icon:e.icon,color:e.color,questions:e.questions},t))}),o.jsxs("div",{className:"mt-16 text-center bg-gradient-to-r from-gray-900/30 to-purple-900/20 rounded-2xl p-8 border border-white/10 shadow-lg shadow-purple-500/10",children:[o.jsx("h3",{className:"text-2xl font-bold text-white mb-4",children:"Ready to Start Trading?"}),o.jsx("p",{className:"text-gray-200 mb-6",children:"Get started with GoBabyTrade – the same AI-enhanced autonomous trading system I use. Try paper trading first, risk-free."}),o.jsx("a",{href:"https://gobabytrade.com/432706BE",target:"_blank",rel:"noopener noreferrer",className:"inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-8 rounded-xl hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg shadow-purple-500/50",children:"Start Trading – Save $1,000 →"})]})]})]})]}),u$=function(){return o.jsx("footer",{className:"relative py-16 px-4 border-t border-white/10",children:o.jsxs("div",{className:"max-w-6xl mx-auto",children:[o.jsxs("div",{className:"text-center mb-8",children:[o.jsxs("a",{href:"/",className:"inline-flex items-center justify-center gap-3 mb-6 group",children:[o.jsx("div",{className:"w-8 h-8 rounded-lg overflow-hidden shadow-lg shadow-purple-500/40 bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 group-hover:scale-105 transition-transform",children:o.jsx("div",{className:"w-full h-full rounded overflow-hidden bg-white/10 backdrop-blur-sm",children:o.jsx("img",{src:"/robot-logo.png",alt:"MyRoboticTrader Robot",className:"w-full h-full object-cover"})})}),o.jsxs("div",{className:"text-xl font-bold group-hover:scale-105 transition-transform",children:[o.jsx("span",{className:"text-gray-300",children:"My"}),o.jsx("span",{className:"text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text",children:"Robotic"}),o.jsx("span",{className:"text-gray-300",children:"Trader"}),o.jsx("span",{className:"text-purple-400 text-sm ml-1",children:".com"})]})]}),o.jsx("p",{className:"text-gray-400 mb-8 max-w-2xl mx-auto",children:"Set it and forget it crypto trading that never trades at a loss. Your funds stay secure while AI-Enhanced technology maximizes profits 24/7."}),o.jsxs("div",{className:"flex flex-col sm:flex-row justify-center items-center gap-6 mb-8",children:[o.jsxs("a",{href:"https://gobabytrade.com/432706BE",target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2 group",children:["Start Trading – Save $1,000",o.jsx(Zn,{className:"w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"})]}),o.jsxs("a",{href:"/resources",className:"text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2 group",children:["Recommended Tools",o.jsx(Pe,{className:"w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"})]}),o.jsxs("a",{href:"/privacy",className:"text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2 group",children:[o.jsx(un,{className:"w-4 h-4"}),"Privacy Policy",o.jsx(Pe,{className:"w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"})]}),o.jsxs("a",{href:"https://x.com/myrobotictrader",target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2 group",children:[o.jsx(Kb,{className:"w-4 h-4"}),"Follow Us on X",o.jsx(Zn,{className:"w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"})]})]})]}),o.jsx("div",{className:"border-t border-white/10 pt-8 mb-8",children:o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-gray-500 max-w-5xl mx-auto",children:[o.jsxs("div",{className:"bg-white/5 rounded-lg p-4 border border-white/10",children:[o.jsx("h4",{className:"text-gray-300 font-semibold mb-2",children:"Affiliate Disclosure"}),o.jsx("p",{className:"leading-relaxed mb-3",children:"We earn commissions from recommended products and services. This doesn't affect our recommendations or your costs. We only promote solutions we believe provide real value to traders."}),o.jsxs("p",{className:"leading-relaxed text-purple-300",children:[o.jsx("strong",{children:"Specific Disclosure:"})," We are an affiliate of GoBabyTrade and earn commissions when you sign up through our referral link. Use our link to save $1,000 on your subscription."]})]}),o.jsxs("div",{className:"bg-white/5 rounded-lg p-4 border border-white/10",children:[o.jsx("h4",{className:"text-gray-300 font-semibold mb-2",children:"Risk Warning"}),o.jsx("p",{className:"leading-relaxed",children:"Crypto trading involves risk. Past performance doesn't guarantee future results. Only trade with funds you can afford to lose. Consider your risk tolerance carefully. Always do your own research (DYOR)."})]}),o.jsxs("div",{className:"bg-white/5 rounded-lg p-4 border border-white/10",children:[o.jsx("h4",{className:"text-gray-300 font-semibold mb-2",children:"Platform Disclaimer"}),o.jsx("p",{className:"leading-relaxed",children:"Not affiliated with Facebook, Meta, Coinbase, Kraken, or any trading platform unless explicitly stated. All trademarks belong to their respective owners and are used for identification only."})]}),o.jsxs("div",{className:"bg-white/5 rounded-lg p-4 border border-white/10",children:[o.jsx("h4",{className:"text-gray-300 font-semibold mb-2",children:"Educational Purpose"}),o.jsx("p",{className:"leading-relaxed",children:"Information provided is educational only, not financial advice. Individual results vary. Consult qualified financial professionals before making investment decisions."})]})]})}),o.jsxs("div",{className:"border-t border-white/10 pt-8 text-center",children:[o.jsxs("a",{href:"/",className:"inline-flex items-center justify-center gap-2 mb-3 group",children:[o.jsx("div",{className:"w-5 h-5 rounded overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 group-hover:scale-105 transition-transform",children:o.jsx("div",{className:"w-full h-full rounded overflow-hidden bg-white/10 backdrop-blur-sm",children:o.jsx("img",{src:"/robot-logo.png",alt:"",className:"w-full h-full object-cover"})})}),o.jsxs("span",{className:"text-gray-400 text-sm group-hover:text-purple-400 transition-colors",children:["© ",new Date().getFullYear()," ",o.jsx("span",{className:"text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-semibold",children:"MyRoboticTrader"}),".com"]})]}),o.jsx("div",{className:"text-xs text-gray-500",children:"Independent affiliate marketing website. Not affiliated with any trading platform or exchange unless explicitly disclosed above."}),o.jsxs("button",{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:"mt-6 inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-colors group","aria-label":"Back to top",children:[o.jsx($b,{className:"w-4 h-4 group-hover:-translate-y-1 transition-transform"}),o.jsx("span",{className:"text-sm font-medium",children:"Back to Top"})]})]})]})})},d$=function(){const{tradingStats:e}=Xr(),t=Fi(),n=e!=null&&e.totalProfit?`$${Math.round(e.totalProfit).toLocaleString()}+`:"$5,000+";return o.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900",children:[o.jsx(xr,{}),o.jsxs("section",{className:"py-12 px-4 relative overflow-hidden",children:[o.jsx("div",{className:"absolute top-10 right-10 opacity-10 pointer-events-none hidden lg:block",children:o.jsx("img",{src:"/robot-trading.png",alt:"",className:"w-24 h-24 animate-pulse"})}),o.jsx("div",{className:"relative max-w-6xl mx-auto text-center z-10 mt-8",children:o.jsxs("div",{className:"mb-8",children:[o.jsxs("div",{className:"inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-400/40 mb-6 shadow-lg shadow-purple-500/20",children:[o.jsx(jl,{className:"w-4 h-4 text-purple-300"}),o.jsx("span",{className:"text-purple-200 font-medium",children:"Recommended Tools"})]}),o.jsxs("h1",{className:"text-4xl md:text-6xl font-bold text-white mb-6 leading-tight",children:["Tools I Use &",o.jsx("span",{className:"block text-transparent bg-gradient-to-r from-green-300 via-blue-400 to-purple-400 bg-clip-text",children:"Personally Recommend"})]}),o.jsxs("p",{className:"text-xl text-gray-200 mb-8 max-w-3xl mx-auto",children:["After ",t," of successful automated trading, these are the essential tools and services that have made my crypto journey profitable and stress-free."]}),o.jsx("div",{className:"bg-gradient-to-r from-gray-900/30 to-purple-900/20 rounded-2xl border border-white/10 p-6 max-w-2xl mx-auto",children:o.jsxs("p",{className:"text-blue-200 font-medium",children:["💡 ",o.jsx("strong",{children:"My Promise:"})," I only recommend tools I personally use and believe provide real value. Your success is my success."]})})]})})]}),o.jsx("section",{className:"py-16 px-4 pb-8",children:o.jsxs("div",{className:"max-w-6xl mx-auto",children:[o.jsxs("div",{className:"text-center mb-12",children:[o.jsxs("div",{className:"inline-flex items-center gap-2 bg-gradient-to-r from-green-500/30 to-emerald-500/30 backdrop-blur-sm rounded-full px-4 py-2 border border-green-400/40 mb-6 shadow-lg shadow-green-500/20",children:[o.jsx(Ue,{className:"w-4 h-4 text-green-300"}),o.jsx("span",{className:"text-green-200 font-medium",children:"Trading Platforms"})]}),o.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-white mb-4",children:"Where I Trade & Why"}),o.jsx("p",{className:"text-gray-300 max-w-2xl mx-auto",children:"You need at least one of these exchanges to work with the AI-Enhanced Autonomous Trader. Both are reliable, secure, and perfect for automated trading."})]}),o.jsx("div",{className:"max-w-2xl mx-auto mb-10",children:o.jsx("img",{src:"/graphics/resources-coinbase-01.webp",alt:"Why Coinbase One - Zero fees comparison showing $3,300+ annual savings",className:"w-full rounded-2xl shadow-xl shadow-blue-500/10 border border-white/10"})}),o.jsxs("div",{className:"bg-gradient-to-r from-gray-900/30 to-purple-900/20 rounded-2xl border border-white/10 p-8 mb-8 shadow-lg shadow-purple-500/10 relative",children:[o.jsx("div",{className:"absolute top-4 right-4 md:top-6 md:right-6",children:o.jsx("div",{className:"bg-gradient-to-r from-green-400 to-emerald-400 text-black px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-bold",children:"ESSENTIAL"})}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 items-center",children:[o.jsxs("div",{className:"mt-8 md:mt-0",children:[o.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[o.jsx("div",{className:"w-12 h-12 bg-blue-500 rounded-xl p-3",children:o.jsx(Nu,{className:"w-full h-full text-white"})}),o.jsx("h3",{className:"text-2xl font-bold text-white",children:"Coinbase One"})]}),o.jsx("p",{className:"text-gray-200 mb-6 leading-relaxed",children:"My primary exchange for automated trading. Coinbase One gives you zero trading fees, which is crucial when you're making multiple trades daily. The API integration is rock-solid for robotic trading."}),o.jsxs("div",{className:"space-y-3 mb-6",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx(We,{className:"w-5 h-5 text-green-300 flex-shrink-0"}),o.jsx("span",{className:"text-gray-200",children:"$0 trading fees (saves me hundreds monthly)"})]}),o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx(We,{className:"w-5 h-5 text-green-300 flex-shrink-0"}),o.jsx("span",{className:"text-gray-200",children:"Perfect API for automated trading"})]}),o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx(We,{className:"w-5 h-5 text-green-300 flex-shrink-0"}),o.jsx("span",{className:"text-gray-200",children:"Trusted by millions of traders"})]}),o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx(We,{className:"w-5 h-5 text-green-300 flex-shrink-0"}),o.jsx("span",{className:"text-gray-200",children:"Advanced trading tools included"})]})]}),o.jsxs("a",{href:"https://dailyprofits.link/cba",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/30",children:["Get Coinbase One",o.jsx(Zn,{className:"w-4 h-4"})]})]}),o.jsxs("div",{className:"bg-gray-900/50 rounded-xl p-6 border border-white/10",children:[o.jsx("h4",{className:"text-lg font-semibold text-white mb-4",children:"Why I Choose Coinbase One:"}),o.jsxs("div",{className:"space-y-3 text-sm text-gray-300",children:[o.jsxs("p",{children:["💰 ",o.jsx("strong",{children:"Zero fees"})," mean more profits stay in my pocket"]}),o.jsxs("p",{children:["🤖 ",o.jsx("strong",{children:"API reliability"})," is crucial for automated trading"]}),o.jsxs("p",{children:["🛡️ ",o.jsx("strong",{children:"Security"})," - my funds have always been safe"]}),o.jsxs("p",{children:["📱 ",o.jsx("strong",{children:"Mobile app"})," lets me monitor trades anywhere"]})]})]})]})]}),o.jsxs("div",{className:"bg-gradient-to-r from-gray-900/30 to-purple-900/20 rounded-2xl border border-white/10 p-8 shadow-lg shadow-purple-500/10 relative",children:[o.jsx("div",{className:"absolute top-4 right-4 md:top-6 md:right-6",children:o.jsx("div",{className:"bg-gradient-to-r from-blue-400 to-indigo-400 text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-bold",children:"GREAT ALTERNATIVE"})}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 items-center",children:[o.jsxs("div",{className:"mt-8 md:mt-0",children:[o.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[o.jsx("div",{className:"w-12 h-12 bg-indigo-500 rounded-xl p-3",children:o.jsx(Nu,{className:"w-full h-full text-white"})}),o.jsx("h3",{className:"text-2xl font-bold text-white",children:"Kraken"})]}),o.jsx("p",{className:"text-gray-200 mb-6 leading-relaxed",children:"My alternative exchange for automated trading. Kraken offers excellent API reliability and competitive fees. Great option if you prefer a different platform or want to diversify across exchanges."}),o.jsxs("div",{className:"space-y-3 mb-6",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx(We,{className:"w-5 h-5 text-green-300 flex-shrink-0"}),o.jsx("span",{className:"text-gray-200",children:"Low trading fees and excellent API"})]}),o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx(We,{className:"w-5 h-5 text-green-300 flex-shrink-0"}),o.jsx("span",{className:"text-gray-200",children:"Strong security and reputation"})]}),o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx(We,{className:"w-5 h-5 text-green-300 flex-shrink-0"}),o.jsx("span",{className:"text-gray-200",children:"Works perfectly with robotic trader"})]}),o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx(We,{className:"w-5 h-5 text-green-300 flex-shrink-0"}),o.jsx("span",{className:"text-gray-200",children:"Advanced trading features"})]})]}),o.jsxs("a",{href:"https://dailyprofits.link/krak",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-indigo-500/30",children:["Get Kraken Account",o.jsx(Zn,{className:"w-4 h-4"})]})]}),o.jsxs("div",{className:"bg-gray-900/50 rounded-xl p-6 border border-white/10",children:[o.jsx("h4",{className:"text-lg font-semibold text-white mb-4",children:"Why Kraken Works Great:"}),o.jsxs("div",{className:"space-y-3 text-sm text-gray-300",children:[o.jsxs("p",{children:["🔒 ",o.jsx("strong",{children:"Security first"})," - excellent track record"]}),o.jsxs("p",{children:["⚡ ",o.jsx("strong",{children:"Fast API"})," - reliable for automated trading"]}),o.jsxs("p",{children:["💰 ",o.jsx("strong",{children:"Competitive fees"})," - keep more of your profits"]}),o.jsxs("p",{children:["🌍 ",o.jsx("strong",{children:"Global reach"})," - available in most countries"]})]})]})]})]})]})}),o.jsx("section",{className:"py-8 px-4",children:o.jsxs("div",{className:"max-w-6xl mx-auto",children:[o.jsxs("div",{className:"text-center mb-12",children:[o.jsxs("div",{className:"inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/30 to-red-500/30 backdrop-blur-sm rounded-full px-4 py-2 border border-orange-400/40 mb-6 shadow-lg shadow-orange-500/20",children:[o.jsx(Tu,{className:"w-4 h-4 text-orange-300"}),o.jsx("span",{className:"text-orange-200 font-medium",children:"Tax & Accounting"})]}),o.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-white mb-4",children:"Stay Compliant & Organized"}),o.jsx("p",{className:"text-gray-300 max-w-2xl mx-auto",children:"Crypto taxes can be complex. These tools make it simple and ensure you're always compliant with tax regulations."})]}),o.jsx("div",{className:"max-w-2xl mx-auto mb-10",children:o.jsx("img",{src:"/graphics/resources-taxes-01.webp",alt:"500 Trades Tax Nightmare - DIY vs CoinTracker comparison",className:"w-full rounded-2xl shadow-xl shadow-orange-500/10 border border-white/10"})}),o.jsxs("div",{className:"bg-gradient-to-r from-gray-900/30 to-purple-900/20 rounded-2xl border border-white/10 p-8 shadow-lg shadow-purple-500/10 relative",children:[o.jsx("div",{className:"absolute top-4 right-4 md:top-6 md:right-6",children:o.jsx("div",{className:"bg-gradient-to-r from-green-400 to-emerald-400 text-black px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-bold",children:"ESSENTIAL"})}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 items-center",children:[o.jsxs("div",{className:"mt-8 md:mt-0",children:[o.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[o.jsx("div",{className:"w-12 h-12 bg-orange-500 rounded-xl p-3",children:o.jsx(Tu,{className:"w-full h-full text-white"})}),o.jsx("h3",{className:"text-2xl font-bold text-white",children:"CoinTracker"})]}),o.jsx("p",{className:"text-gray-200 mb-6 leading-relaxed",children:"After making hundreds of profitable trades, tax reporting became crucial. CoinTracker automatically tracks everything and generates the reports I need for my accountant. It's saved me countless hours."}),o.jsxs("div",{className:"space-y-3 mb-6",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx(We,{className:"w-5 h-5 text-green-300 flex-shrink-0"}),o.jsx("span",{className:"text-gray-200",children:"Automatic trade tracking across exchanges"})]}),o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx(We,{className:"w-5 h-5 text-green-300 flex-shrink-0"}),o.jsx("span",{className:"text-gray-200",children:"Tax forms ready for filing (8949, Schedule D)"})]}),o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx(We,{className:"w-5 h-5 text-green-300 flex-shrink-0"}),o.jsx("span",{className:"text-gray-200",children:"Real-time profit/loss tracking"})]}),o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx(We,{className:"w-5 h-5 text-green-300 flex-shrink-0"}),o.jsx("span",{className:"text-gray-200",children:"Connects to Coinbase & Kraken"})]})]}),o.jsxs("a",{href:"https://dailyprofits.link/cointracker",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/30",children:["Get CoinTracker",o.jsx(Zn,{className:"w-4 h-4"})]})]}),o.jsxs("div",{className:"bg-gray-900/50 rounded-xl p-6 border border-white/10",children:[o.jsx("h4",{className:"text-lg font-semibold text-white mb-4",children:"Why Tax Tracking Matters:"}),o.jsxs("div",{className:"space-y-3 text-sm text-gray-300",children:[o.jsxs("p",{children:["📊 ",o.jsx("strong",{children:"Automated reporting"})," saves hours of manual work"]}),o.jsxs("p",{children:["💼 ",o.jsx("strong",{children:"Professional tax forms"})," ready for your accountant"]}),o.jsxs("p",{children:["🎯 ",o.jsx("strong",{children:"Accurate calculations"})," ensure proper tax compliance"]}),o.jsxs("p",{children:["💰 ",o.jsx("strong",{children:"Maximize deductions"})," and minimize tax liability"]})]})]})]})]})]})}),o.jsx("section",{className:"py-16 px-4",children:o.jsx("div",{className:"max-w-4xl mx-auto text-center",children:o.jsxs("div",{className:"bg-gray-900/50 rounded-2xl border border-white/10 p-8 shadow-lg shadow-purple-500/10",children:[o.jsx("h3",{className:"text-2xl md:text-3xl font-bold text-white mb-4",children:"Ready to Start Your Trading Journey?"}),o.jsxs("p",{className:"text-gray-200 mb-6 max-w-2xl mx-auto",children:["These tools have been essential to my ",n," profit success. GoBabyTrade is the AI-enhanced autonomous trading system I use. Use my link to save $1,000!"]}),o.jsx("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:o.jsxs("a",{href:"https://gobabytrade.com/432706BE",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30",children:["Start Trading – Save $1,000",o.jsx(Pe,{className:"w-4 h-4"})]})})]})})}),o.jsx("section",{className:"py-8 px-4 border-t border-white/10",children:o.jsx("div",{className:"max-w-4xl mx-auto",children:o.jsxs("div",{className:"bg-white/5 rounded-lg p-6 border border-white/10",children:[o.jsx("h4",{className:"text-white font-semibold mb-3",children:"📋 Affiliate Disclosure"}),o.jsx("p",{className:"text-gray-400 text-sm leading-relaxed mb-3",children:"I earn commissions from recommended products and services on this page. This doesn't affect your costs or my recommendations. I only promote tools I personally use and believe provide real value to traders."}),o.jsxs("p",{className:"text-gray-400 text-sm leading-relaxed",children:[o.jsx("strong",{children:"Transparency Promise:"})," Every tool listed here is something I actively use in my own trading setup. Your success with these tools directly impacts my reputation, so I'm incentivized to recommend only the best."]})]})})})]})},h$=function(){return o.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900",children:[o.jsx(xr,{}),o.jsx("section",{className:"py-12 px-4 border-b border-white/10 relative overflow-hidden",children:o.jsx("div",{className:"relative max-w-4xl mx-auto text-center mt-8",children:o.jsxs("div",{className:"mb-8",children:[o.jsxs("div",{className:"inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-400/40 mb-6 shadow-lg shadow-purple-500/20",children:[o.jsx(un,{className:"w-4 h-4 text-purple-300"}),o.jsx("span",{className:"text-purple-200 font-medium",children:"Privacy Policy"})]}),o.jsx("h1",{className:"text-3xl md:text-4xl font-bold text-white mb-4",children:"Privacy Policy"}),o.jsx("p",{className:"text-gray-300 max-w-2xl mx-auto",children:"Your privacy is important to us. This policy explains how we collect, use, and protect your information."}),o.jsx("p",{className:"text-sm text-gray-400 mt-2",children:"Last updated: December 6, 2025"})]})})}),o.jsx("div",{className:"max-w-xl mx-auto mb-12 px-4",children:o.jsx("img",{src:"/graphics/privacy-data-01.webp",alt:"What We Collect vs What We Don't - Privacy protection overview",className:"w-full rounded-2xl shadow-xl shadow-blue-500/10 border border-white/10"})}),o.jsx("section",{className:"py-16 px-4",children:o.jsx("div",{className:"max-w-4xl mx-auto",children:o.jsxs("div",{className:"bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/10 p-8 space-y-8",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[o.jsx(lp,{className:"w-6 h-6 text-blue-300"}),o.jsx("h2",{className:"text-2xl font-bold text-white",children:"Information We Collect"})]}),o.jsxs("div",{className:"space-y-4 text-gray-300",children:[o.jsxs("p",{children:[o.jsx("strong",{className:"text-white",children:"Analytics Data:"})," We use Google Analytics to understand how visitors interact with our website. This includes:"]}),o.jsxs("ul",{className:"list-disc list-inside ml-4 space-y-2",children:[o.jsx("li",{children:"Pages visited and time spent on site"}),o.jsx("li",{children:"Device type, browser, and operating system"}),o.jsx("li",{children:"General geographic location (country/city level)"}),o.jsx("li",{children:"Referral sources (how you found our site)"})]}),o.jsxs("p",{children:[o.jsx("strong",{className:"text-white",children:"Cookies:"})," We use cookies to improve your browsing experience and analyze site traffic. You can disable cookies in your browser settings."]})]})]}),o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[o.jsx(un,{className:"w-6 h-6 text-green-300"}),o.jsx("h2",{className:"text-2xl font-bold text-white",children:"How We Use Your Information"})]}),o.jsxs("div",{className:"space-y-4 text-gray-300",children:[o.jsx("p",{children:"We use the information we collect to:"}),o.jsxs("ul",{className:"list-disc list-inside ml-4 space-y-2",children:[o.jsx("li",{children:"Improve our website content and user experience"}),o.jsx("li",{children:"Understand which pages and features are most valuable"}),o.jsx("li",{children:"Analyze traffic patterns and optimize site performance"}),o.jsx("li",{children:"Ensure our content is relevant and helpful"})]}),o.jsxs("p",{children:[o.jsx("strong",{className:"text-white",children:"We do not:"})," Sell, rent, or share your personal information with third parties for marketing purposes."]})]})]}),o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[o.jsx(Fb,{className:"w-6 h-6 text-purple-300"}),o.jsx("h2",{className:"text-2xl font-bold text-white",children:"Affiliate Links & Disclosures"})]}),o.jsx("div",{className:"max-w-lg mx-auto mb-6",children:o.jsx("img",{src:"/graphics/privacy-affiliate-01.webp",alt:"How Affiliate Links Work - Transparency explanation",className:"w-full rounded-xl shadow-lg shadow-purple-500/10 border border-white/10"})}),o.jsxs("div",{className:"space-y-4 text-gray-300",children:[o.jsxs("p",{children:[o.jsx("strong",{className:"text-white",children:"Affiliate Relationships:"})," ","This website contains affiliate links to products and services we recommend. This means:"]}),o.jsxs("ul",{className:"list-disc list-inside ml-4 space-y-2",children:[o.jsx("li",{children:"We may earn a commission if you make a purchase through our links"}),o.jsx("li",{children:"This does not affect the price you pay"}),o.jsx("li",{children:"We only recommend tools and services we personally use and believe in"}),o.jsx("li",{children:"Our recommendations are based on genuine experience and results"})]}),o.jsx("div",{className:"bg-blue-500/10 border border-blue-400/20 rounded-lg p-4 mt-4",children:o.jsxs("p",{className:"text-blue-200",children:[o.jsx("strong",{children:"Transparency Promise:"})," All trading results shown are real and from Patrick's personal trading account. We believe in complete transparency about both our results and our affiliate relationships."]})})]})]}),o.jsxs("div",{children:[o.jsx("h2",{className:"text-2xl font-bold text-white mb-4",children:"Third-Party Services"}),o.jsxs("div",{className:"space-y-4 text-gray-300",children:[o.jsx("p",{children:"Our website uses the following third-party services:"}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mt-4",children:[o.jsxs("div",{className:"bg-white/5 rounded-lg p-4",children:[o.jsx("h3",{className:"text-white font-semibold mb-2",children:"Google Analytics"}),o.jsx("p",{className:"text-sm",children:"Website traffic analysis and user behavior tracking."}),o.jsx("a",{href:"https://policies.google.com/privacy",target:"_blank",rel:"noopener noreferrer",className:"text-blue-300 hover:text-blue-200 text-sm",children:"Google Privacy Policy â†’"})]}),o.jsxs("div",{className:"bg-white/5 rounded-lg p-4",children:[o.jsx("h3",{className:"text-white font-semibold mb-2",children:"Cloudflare Pages"}),o.jsx("p",{className:"text-sm",children:"Website hosting and content delivery network."}),o.jsx("a",{href:"https://www.cloudflare.com/privacy/",target:"_blank",rel:"noopener noreferrer",className:"text-blue-300 hover:text-blue-200 text-sm",children:"Cloudflare Privacy Policy â†’"})]})]})]})]}),o.jsxs("div",{children:[o.jsx("h2",{className:"text-2xl font-bold text-white mb-4",children:"Your Rights & Choices"}),o.jsxs("div",{className:"space-y-4 text-gray-300",children:[o.jsx("p",{children:"You have the right to:"}),o.jsxs("ul",{className:"list-disc list-inside ml-4 space-y-2",children:[o.jsx("li",{children:"Opt out of Google Analytics tracking by using browser settings or extensions"}),o.jsx("li",{children:"Disable cookies in your browser (may affect site functionality)"}),o.jsx("li",{children:"Request information about data we may have collected"}),o.jsx("li",{children:"Contact us with any privacy-related questions or concerns"})]})]})]}),o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[o.jsx(Hb,{className:"w-6 h-6 text-yellow-300"}),o.jsx("h2",{className:"text-2xl font-bold text-white",children:"Contact Us"})]}),o.jsxs("div",{className:"space-y-4 text-gray-300",children:[o.jsx("p",{children:"If you have any questions about this Privacy Policy or our data practices, please contact us:"}),o.jsxs("div",{className:"bg-white/5 rounded-lg p-4",children:[o.jsxs("p",{children:[o.jsx("strong",{className:"text-white",children:"Website:"})," ","MyRoboticTrader.com"]}),o.jsxs("p",{children:[o.jsx("strong",{className:"text-white",children:"Twitter:"})," ","@myrobotictrader"]}),o.jsxs("p",{children:[o.jsx("strong",{className:"text-white",children:"Email:"})," Available through our social media channels"]})]})]})]}),o.jsxs("div",{children:[o.jsx("h2",{className:"text-2xl font-bold text-white mb-4",children:"Policy Updates"}),o.jsx("div",{className:"text-gray-300",children:o.jsx("p",{children:'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last modified" date. We encourage you to review this policy periodically.'})})]})]})})}),o.jsx("section",{className:"py-8 px-4 border-t border-white/10",children:o.jsx("div",{className:"max-w-4xl mx-auto text-center",children:o.jsxs("a",{href:"/",className:"inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30",children:[o.jsx(Mb,{className:"w-4 h-4"}),"Back to MyRoboticTrader"]})})})]})},m$=()=>{var l,c;const{tradingStats:e,isLoading:t}=Xr(),n=Fi(),r="https://gobabytrade.com/432706BE?utm_source=business_card&utm_medium=nfc_qr&utm_campaign=live_results_2025";if(t||!e)return o.jsxs("section",{className:"relative min-h-screen flex items-center justify-center px-4",children:[o.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"}),o.jsx("div",{className:"relative text-white text-xl",children:"Loading live data..."})]});const a=e.dailyAvg.toFixed(2),i=((l=e.monthlyData)==null?void 0:l.length)||0,s=((c=e.monthlyData)==null?void 0:c.filter(u=>u.profit>0).length)||0;return o.jsxs("section",{className:"relative min-h-screen flex items-center justify-center px-4 overflow-hidden pb-10 pt-10",children:[o.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"}),o.jsx("div",{className:"absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-purple-500/15 to-transparent"}),o.jsx("div",{className:"absolute top-8 left-1/2 transform -translate-x-1/2 z-20",children:o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("div",{className:"w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-purple-500/40 bg-gradient-to-br from-purple-500 to-pink-500 p-0.5",children:o.jsx("div",{className:"w-full h-full rounded-lg overflow-hidden bg-white/10 backdrop-blur-sm",children:o.jsx("img",{src:"/robot-logo.png",alt:"MyRoboticTrader Robot",className:"w-full h-full object-cover"})})}),o.jsxs("div",{className:"text-2xl font-bold",children:[o.jsx("span",{className:"text-white",children:"My"}),o.jsx("span",{className:"text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text",children:"Robotic"}),o.jsx("span",{className:"text-white",children:"Trader"}),o.jsx("span",{className:"text-purple-300 text-sm ml-1",children:".com"})]})]})}),o.jsxs("div",{className:"relative max-w-6xl mx-auto text-center z-10 mt-16",children:[o.jsxs("div",{className:"mb-8",children:[o.jsxs("div",{className:"inline-flex items-center gap-2 bg-gradient-to-r from-green-500/30 to-emerald-500/30 backdrop-blur-sm rounded-full px-4 py-2 border border-green-400/40 mb-6 shadow-lg shadow-green-500/20",children:[o.jsx("div",{className:"w-3 h-3 bg-green-400 rounded-full animate-pulse"}),o.jsx("span",{className:"text-green-200 font-medium",children:e.isLiveData?"LIVE DATA":"REAL RESULTS"})]}),o.jsxs("div",{className:"mb-6",children:[o.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-white mb-4 leading-tight",children:"Thanks for scanning my card! 👋"}),o.jsx("p",{className:"text-xl md:text-2xl text-gray-200 mb-2",children:"Here are my LIVE trading results:"}),o.jsx("p",{className:"text-lg text-purple-200",children:"Real profits. Real transparency. Zero BS."})]})]}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10",children:[o.jsxs("div",{className:"group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-green-500/15",children:[o.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"}),o.jsx("div",{className:"relative w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/40",children:o.jsx(Bn,{className:"w-full h-full text-white"})}),o.jsxs("div",{className:"relative text-center",children:[o.jsxs("div",{className:"text-4xl font-bold text-green-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-300 group-hover:to-emerald-300 group-hover:bg-clip-text transition-all duration-300 font-mono",children:["$",e.totalProfit.toLocaleString()]}),o.jsx("div",{className:"text-gray-200 font-medium group-hover:text-white transition-colors duration-300",children:"Total Profits"}),o.jsxs("div",{className:"text-green-300 text-sm mt-1",children:[n," • Always Growing!"]})]}),o.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"})]}),o.jsxs("div",{className:"group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-orange-500/15",children:[o.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"}),o.jsx("div",{className:"relative w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/40",children:o.jsx(Dr,{className:"w-full h-full text-white"})}),o.jsxs("div",{className:"relative text-center",children:[o.jsx("div",{className:"text-4xl font-bold text-orange-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-300 group-hover:to-amber-300 group-hover:bg-clip-text transition-all duration-300 font-mono",children:e.totalTrades.toLocaleString()}),o.jsx("div",{className:"text-gray-200 font-medium group-hover:text-white transition-colors duration-300",children:"Closed Trades"}),o.jsx("div",{className:"text-orange-300 text-sm mt-1",children:"Consistent & Automated"})]}),o.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"})]}),o.jsxs("div",{className:"group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-purple-500/15",children:[o.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"}),o.jsx("div",{className:"relative w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/40",children:o.jsx(Ue,{className:"w-full h-full text-white"})}),o.jsxs("div",{className:"relative text-center",children:[o.jsxs("div",{className:"text-4xl font-bold text-purple-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 group-hover:bg-clip-text transition-all duration-300 font-mono",children:["$",a]}),o.jsx("div",{className:"text-gray-200 font-medium group-hover:text-white transition-colors duration-300",children:"Daily Average"}),o.jsx("div",{className:"text-purple-300 text-sm mt-1",children:"Steady Growth"})]}),o.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"})]})]}),o.jsx("div",{className:"max-w-2xl mx-auto mb-10",children:o.jsxs("div",{className:"bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-2xl border border-green-400/30 p-6 shadow-lg shadow-green-500/20",children:[o.jsxs("div",{className:"flex items-center justify-center gap-3 mb-2",children:[o.jsx("div",{className:"w-3 h-3 bg-green-400 rounded-full animate-pulse"}),o.jsxs("span",{className:"text-green-300 font-bold text-lg",children:[i," Months. ",s," Winning Months."]}),o.jsx("div",{className:"w-3 h-3 bg-green-400 rounded-full animate-pulse"})]}),o.jsx("p",{className:"text-gray-200 text-sm text-center",children:"100% profitable months since January 2025 • Every. Single. Month."})]})}),o.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center mb-12",children:[o.jsxs("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-purple-500/30 flex items-center justify-center gap-2",children:["Start Trading – Save $1,000",o.jsx(Zn,{className:"w-5 h-5 group-hover:translate-x-1 transition-transform"})]}),o.jsxs("a",{href:"/",className:"group border-2 border-white/40 hover:border-white/60 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm hover:bg-white/15 flex items-center justify-center gap-2 shadow-lg shadow-white/10",children:[o.jsx(Ub,{className:"w-5 h-5"}),"Explore Full Site",o.jsx(Pe,{className:"w-5 h-5 group-hover:translate-x-1 transition-transform"})]})]}),o.jsxs("div",{className:"text-center",children:[o.jsx("p",{className:"text-sm text-yellow-300 font-medium mb-4",children:"🎯 GoBabyTrade™ is the AI-enhanced system I use – save $1,000 with my link!"}),o.jsx("p",{className:"text-xs text-gray-500 max-w-sm mx-auto leading-relaxed",children:"* Actual trading results from my personal account. Started January 8, 2025. Past performance does not guarantee future results."})]})]})]})},p$=()=>{const e=zo(ka),[t,n]=St.useState(null),r=[...new Set(e.map(c=>c.category))],i=[...t?e.filter(c=>c.category===t):e].sort((c,u)=>hr(u).getTime()-hr(c).getTime()),s=c=>new Date(c).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),l=(c,u=200)=>{const d=c.replace(/^#+\s/gm,"").replace(/\*\*/g,"").replace(/\*/g,"").replace(/\[([^\]]+)\]\([^\)]+\)/g,"$1").replace(/\n/g," ");return d.length<=u?d:d.substring(0,u).trim()+"..."};return o.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white",children:[o.jsx(xr,{}),o.jsx("section",{className:"py-12 px-4 relative overflow-hidden",children:o.jsx("div",{className:"relative max-w-6xl mx-auto text-center mt-8",children:o.jsxs("div",{className:"mb-8",children:[o.jsx("div",{className:"inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-400/40 mb-6 shadow-lg shadow-purple-500/20",children:o.jsx("span",{className:"text-purple-200 font-medium",children:"Trading Education"})}),o.jsxs("h1",{className:"text-5xl md:text-6xl font-bold mb-6",children:[o.jsx("span",{className:"text-white",children:"Blog & "}),o.jsx("span",{className:"text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text",children:"Insights"})]}),o.jsx("p",{className:"text-xl text-gray-200 max-w-3xl mx-auto",children:"Real insights from building transparent, systematic crypto trading systems. No hype, just facts and lessons learned."})]})})}),o.jsx("div",{className:"relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:o.jsxs("div",{className:"flex flex-wrap gap-4 justify-center",children:[o.jsx("button",{onClick:()=>n(null),className:`px-6 py-3 rounded-full transition-all duration-300 backdrop-blur-sm shadow-lg font-semibold text-sm ${t===null?"bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-2 border-purple-400/60 text-white shadow-purple-500/20":"bg-white/8 hover:bg-white/12 border border-white/20 hover:border-purple-400/30 text-gray-300 hover:text-white"}`,children:"All Posts"}),r.map(c=>o.jsx("button",{onClick:()=>n(c),className:`px-6 py-3 rounded-full transition-all duration-300 backdrop-blur-sm shadow-lg font-semibold text-sm ${t===c?"bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-2 border-purple-400/60 text-white shadow-purple-500/20":"bg-white/8 hover:bg-white/12 border border-white/20 hover:border-purple-400/30 text-gray-300 hover:text-white"}`,children:c},c))]})}),o.jsxs("div",{className:"relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-16",children:[o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:i.map(c=>o.jsx(Ge,{to:`/blog/${c.slug}`,className:"group",children:o.jsxs("article",{className:"h-full rounded-2xl overflow-hidden border border-white/10 hover:border-purple-400/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-purple-500/10 cursor-pointer relative bg-gray-900/50",children:[o.jsx("div",{className:"h-40 overflow-hidden",children:o.jsx("img",{src:c.heroImage,alt:c.imageAlt,className:"w-full h-full object-cover group-hover:scale-110 transition-all duration-300",style:{filter:"brightness(0.85)"}})}),o.jsxs("div",{className:"p-6 relative",children:[o.jsx("h2",{className:"text-2xl font-bold mb-3 text-white group-hover:text-purple-200 transition-colors duration-300",children:c.title}),o.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[o.jsx("span",{className:"inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30",children:c.category}),o.jsx("span",{className:"text-gray-500",children:"•"}),o.jsx("span",{className:"text-gray-400 text-sm",children:s(c.date)})]}),o.jsx("p",{className:"text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300",children:c.excerpt||l(c.content,150)}),o.jsxs("div",{className:"flex items-center text-purple-400 font-semibold group-hover:text-purple-300 transition-colors",children:["Read Full Article",o.jsx("svg",{className:"w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})]})]})]})},c.slug))}),o.jsx("div",{className:"relative mt-8 text-center bg-gray-900/50 rounded-2xl px-8 py-16 md:px-16 md:py-24 border border-white/10 shadow-2xl shadow-purple-500/10",children:o.jsxs("div",{className:"relative",children:[o.jsxs("h2",{className:"text-3xl md:text-4xl font-bold mb-10 leading-tight",children:[o.jsx("span",{className:"text-white",children:"Want to See These "}),o.jsx("span",{className:"text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text",children:"Strategies in Action?"})]}),o.jsx("p",{className:"text-gray-200 text-lg md:text-xl mb-16 max-w-2xl mx-auto leading-relaxed",children:"Check out our live trading dashboard with complete transparency - every trade, every profit, updated automatically."}),o.jsxs(Ge,{to:"/",className:"group inline-flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full font-semibold text-white text-base transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30 hover:shadow-2xl whitespace-nowrap",children:[o.jsx("span",{children:"View Live Results"}),o.jsx("svg",{className:"w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})]})]})})]})]})},g$=({currentSlug:e})=>{const t=zo(ka).filter(n=>n.slug!==e).sort((n,r)=>hr(r).getTime()-hr(n).getTime()).slice(0,5);return o.jsx("div",{children:o.jsxs("div",{className:"bg-slate-900/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-purple-400/30 shadow-lg shadow-purple-500/10",children:[o.jsx("h3",{className:"text-2xl md:text-3xl font-bold mb-6 text-white pb-3 border-b border-purple-400/30",children:"Recent Posts"}),o.jsx("div",{className:"space-y-4",children:t.map(n=>o.jsxs(Ge,{to:`/blog/${n.slug}`,className:"group flex gap-4 transition-all duration-300 hover:translate-x-1",children:[o.jsx("div",{className:"flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden",children:o.jsx("img",{src:n.heroImage,alt:n.imageAlt,className:"w-full h-full object-cover group-hover:scale-110 transition-transform duration-300",style:{filter:"brightness(0.85)"}})}),o.jsxs("div",{className:"flex-1 min-w-0",children:[o.jsx("h4",{className:"text-white font-semibold text-sm leading-tight mb-1 group-hover:text-purple-300 transition-colors line-clamp-2",children:n.title}),o.jsx("span",{className:"text-xs text-purple-400",children:n.category})]})]},n.slug))})]})})},f$=({currentSlug:e,currentCategory:t,maxPosts:n=3})=>{const r=zo(ka),i=(()=>{const l=r.filter(u=>u.slug!==e&&u.category===t);if(l.length>=n)return l.slice(0,n);const c=r.filter(u=>u.slug!==e&&u.category!==t);return[...l,...c].slice(0,n)})();if(i.length===0)return null;const s=l=>new Date(l).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});return o.jsxs("section",{className:"mt-16 pt-12 border-t border-white/10",children:[o.jsxs("div",{className:"flex items-center gap-3 mb-8",children:[o.jsx("div",{className:"p-2 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 shadow-lg",children:o.jsx(jl,{className:"w-5 h-5 text-white"})}),o.jsx("h2",{className:"text-2xl font-bold text-white",children:"Keep Reading"})]}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:i.map(l=>o.jsxs(Ge,{to:`/blog/${l.slug}`,className:"group block bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10",children:[o.jsx("div",{className:"aspect-video overflow-hidden",children:o.jsx("img",{src:l.heroImage,alt:l.imageAlt||l.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",loading:"lazy"})}),o.jsxs("div",{className:"p-4",children:[o.jsx("span",{className:"inline-block px-2 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full mb-3",children:l.category}),o.jsx("h3",{className:"text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-purple-300 transition-colors",children:l.title}),o.jsx("p",{className:"text-gray-400 text-sm line-clamp-2 mb-3",children:l.excerpt||l.metaDescription}),o.jsxs("div",{className:"flex items-center justify-between text-sm",children:[o.jsx("span",{className:"text-gray-500",children:s(l.date)}),o.jsxs("span",{className:"text-purple-400 flex items-center gap-1 group-hover:gap-2 transition-all",children:["Read more ",o.jsx(Pe,{className:"w-4 h-4"})]})]})]})]},l.slug))}),o.jsx("div",{className:"text-center mt-8",children:o.jsxs(Ge,{to:"/blog",className:"inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-medium",children:["View all posts ",o.jsx(Pe,{className:"w-4 h-4"})]})})]})},M={slideContainer:"rounded-2xl overflow-hidden bg-gradient-to-r from-gray-900/80 to-purple-900/40 p-4 md:p-8 lg:p-10 border border-white/10 backdrop-blur-sm",card:"bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20",cardHover:"bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300",cardSm:"bg-white/8 backdrop-blur-sm rounded-xl p-4 border border-white/20",cardInner:"bg-gray-900/50 rounded-xl p-4 border border-white/10",callout:"bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-xl p-4 border border-purple-400/30",calloutWarning:"bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm rounded-xl p-4 border border-red-400/30",calloutSuccess:"bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-xl p-4 border border-green-400/30",table:"w-full text-left border-collapse",tableHeader:"border-b border-purple-400/30",tableHeaderCell:"py-3 px-4 text-purple-300 font-semibold text-sm",tableRow:"border-b border-slate-700/50 hover:bg-slate-800/30",tableCell:"py-3 px-4 text-slate-300 text-sm",slideTitle:"text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 md:mb-2",slideSubtitle:"text-gray-300 text-sm md:text-base",source:"text-center text-gray-500 text-xs italic mt-6",sectionTitle:"text-xl font-bold text-white mb-4",positive:"text-green-400",positiveBold:"text-green-300 font-bold",negative:"text-red-400",negativeBold:"text-red-400 font-bold",gold:"text-yellow-400",goldBold:"text-yellow-400 font-bold",blue:"text-blue-400",blueBold:"text-blue-400 font-bold",orange:"text-orange-400",orangeBold:"text-orange-300 font-bold",purple:"text-purple-400",purpleBold:"text-purple-300 font-bold",muted:"text-gray-400",mutedLight:"text-gray-300",barBlue:"linear-gradient(to top, #2563eb, #60a5fa)",barGreen:"linear-gradient(to top, #16a34a, #4ade80)",barGold:"linear-gradient(to top, #ca8a04, #facc15)",barRed:"linear-gradient(to top, #b91c1c, #ef4444)",avatarGold:"w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-2 border-yellow-400",imageRounded:"rounded-xl object-cover",divider:"border-b border-slate-700/50 pb-2 mb-2",dividerLight:"border-b border-white/10 pb-2 mb-2",slideWrapper:"my-10",textAfterSlide:"mt-8",textBeforeSlide:"mb-6"},$t=({children:e,source:t})=>o.jsxs("div",{className:M.slideContainer,children:[e,t&&o.jsxs("p",{className:M.source,children:["Source: ",t]})]}),Dt=({title:e,subtitle:t})=>o.jsxs("div",{className:"text-center mb-4 md:mb-8",children:[o.jsx("h3",{className:M.slideTitle,children:e}),t&&o.jsx("p",{className:M.slideSubtitle,children:t})]}),y$=()=>o.jsxs($t,{children:[o.jsx(Dt,{title:"Annualized Returns Since 1928",subtitle:"Nearly a century of data tells the story"}),o.jsxs("div",{className:"flex justify-center items-end gap-10 md:gap-20 mt-6 md:mt-8",children:[o.jsxs("div",{className:"flex flex-col items-center",children:[o.jsx("span",{className:"text-2xl md:text-3xl font-bold text-green-400 mb-2",children:"9.9%"}),o.jsx("div",{className:"w-12 md:w-20 rounded-t-lg",style:{height:"140px",backgroundColor:"#4ade80"}}),o.jsx("span",{className:"text-green-400 font-medium mt-2 md:mt-3 text-sm md:text-base",children:"S&P 500"})]}),o.jsxs("div",{className:"flex flex-col items-center",children:[o.jsx("span",{className:"text-2xl md:text-3xl font-bold text-yellow-500 mb-2",children:"5.0%"}),o.jsx("div",{className:"w-12 md:w-20 rounded-t-lg",style:{height:"70px",backgroundColor:"#eab308"}}),o.jsx("span",{className:"text-yellow-500 font-medium mt-2 md:mt-3 text-sm md:text-base",children:"Gold"})]})]})]}),v$=()=>o.jsxs($t,{source:"Kiplinger",children:[o.jsx(Dt,{title:"40-Year Reality Check",subtitle:"1984-2024 Returns: Nominal vs After Inflation"}),o.jsxs("div",{className:"flex justify-center items-end gap-4 md:gap-12 mt-4 md:mt-8",children:[o.jsxs("div",{className:"text-center",children:[o.jsxs("div",{className:"flex items-end gap-1 md:gap-2 justify-center",children:[o.jsxs("div",{className:"flex flex-col items-center",children:[o.jsx("span",{className:`text-sm md:text-lg font-bold ${M.gold} mb-1 md:mb-2`,children:"4.3%"}),o.jsx("div",{className:"w-10 md:w-20 rounded-t-lg",style:{height:"65px",background:M.barGold}})]}),o.jsxs("div",{className:"flex flex-col items-center",children:[o.jsx("span",{className:`text-sm md:text-lg font-bold ${M.negative} mb-1 md:mb-2`,children:"1.5%"}),o.jsx("div",{className:"w-10 md:w-20 rounded-t-lg",style:{height:"23px",background:M.barRed}})]})]}),o.jsx("span",{className:`${M.goldBold} mt-2 md:mt-4 block text-sm md:text-base`,children:"GOLD"})]}),o.jsxs("div",{className:"text-center",children:[o.jsxs("div",{className:"flex items-end gap-1 md:gap-2 justify-center",children:[o.jsxs("div",{className:"flex flex-col items-center",children:[o.jsx("span",{className:`text-sm md:text-lg font-bold ${M.positive} mb-1 md:mb-2`,children:"11.6%"}),o.jsx("div",{className:"w-10 md:w-20 rounded-t-lg",style:{height:"125px",background:M.barBlue}})]}),o.jsxs("div",{className:"flex flex-col items-center",children:[o.jsx("span",{className:`text-sm md:text-lg font-bold ${M.positive} mb-1 md:mb-2`,children:"8.6%"}),o.jsx("div",{className:"w-10 md:w-20 rounded-t-lg",style:{height:"92px",background:M.barGreen}})]})]}),o.jsx("span",{className:`${M.blueBold} mt-2 md:mt-4 block text-sm md:text-base`,children:"S&P 500"})]})]}),o.jsx("p",{className:`${M.muted} text-xs md:text-sm text-center mt-4 md:mt-6`,children:"Darker = Nominal   |   Lighter = After Inflation"})]}),b$=()=>o.jsxs($t,{source:"QuantifiedStrategies.com",children:[o.jsx(Dt,{title:"The Lost Decades",subtitle:"Gold's 20-Year Nightmare: 1980-2000"}),o.jsxs("div",{className:"grid md:grid-cols-2 gap-6 mt-8",children:[o.jsxs("div",{className:`${M.card} text-center`,children:[o.jsx("h4",{className:`${M.goldBold} text-xl mb-4`,children:"GOLD"}),o.jsx("div",{className:"flex items-center justify-center mb-4",children:o.jsx("svg",{className:`w-16 h-16 ${M.negative}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"})})}),o.jsx("p",{className:`${M.negativeBold} text-3xl md:text-4xl mb-2`,children:"-4.0%"}),o.jsx("p",{className:`${M.muted} text-sm`,children:"Total return over 20 years"}),o.jsx("p",{className:`${M.negative} text-xs mt-2`,children:"Lost money for TWO decades straight"})]}),o.jsxs("div",{className:`${M.card} text-center`,children:[o.jsx("h4",{className:`${M.blueBold} text-xl mb-4`,children:"S&P 500"}),o.jsx("div",{className:"flex items-center justify-center mb-4",children:o.jsx("svg",{className:`w-16 h-16 ${M.positive}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})})}),o.jsx("p",{className:`${M.positiveBold} text-3xl md:text-4xl mb-2`,children:"+1,200%"}),o.jsx("p",{className:`${M.muted} text-sm`,children:"Total return over 20 years"}),o.jsx("p",{className:`${M.positive} text-xs mt-2`,children:"Including the 1990s bull market"})]})]}),o.jsx("div",{className:`${M.callout} mt-6 text-center max-w-2xl mx-auto`,children:o.jsxs("p",{className:"text-white font-bold text-base md:text-lg",children:["Gold was the ",o.jsx("span",{className:M.negative,children:"ONLY major asset class"})," with negative returns across two consecutive decades"]})})]}),w$=()=>o.jsxs($t,{source:"IRS Topic 409",children:[o.jsx(Dt,{title:"IRS Tax Treatment",subtitle:'Gold is taxed as a "Collectible" — same as art, rugs, and wine'}),o.jsxs("div",{className:"grid md:grid-cols-2 gap-6 mt-8",children:[o.jsxs("div",{className:M.card,children:[o.jsx("h4",{className:`${M.goldBold} text-xl text-center mb-2`,children:"GOLD"}),o.jsx("p",{className:`${M.muted} text-sm text-center mb-4`,children:"Collectible Tax Rate"}),o.jsx("p",{className:`${M.negativeBold} text-5xl md:text-6xl text-center mb-2`,children:"28%"}),o.jsx("p",{className:`${M.muted} text-sm text-center mb-6`,children:"Maximum Rate"}),o.jsxs("ul",{className:"text-white text-sm space-y-2",children:[o.jsx("li",{className:"text-center",children:"Art & Antiques"}),o.jsx("li",{className:"text-center",children:"Rugs & Stamps"}),o.jsx("li",{className:"text-center",children:"Wine & Coins"})]})]}),o.jsxs("div",{className:M.card,children:[o.jsx("h4",{className:`${M.positiveBold} text-xl text-center mb-2`,children:"STOCKS"}),o.jsx("p",{className:`${M.muted} text-sm text-center mb-4`,children:"Long-Term Capital Gains"}),o.jsx("p",{className:`${M.positiveBold} text-5xl md:text-6xl text-center mb-2`,children:"0-20%"}),o.jsx("p",{className:`${M.muted} text-sm text-center mb-6`,children:"Based on Income"}),o.jsxs("ul",{className:"text-white text-sm space-y-2",children:[o.jsx("li",{className:"text-center",children:"0% (up to $44K)"}),o.jsx("li",{className:"text-center",children:"15% ($44K-$492K)"}),o.jsx("li",{className:"text-center",children:"20% (above $492K)"})]})]})]})]}),x$=()=>o.jsxs($t,{children:[o.jsx(Dt,{title:"Real Tax Impact",subtitle:"$100,000 Profit Scenario"}),o.jsxs("div",{className:"grid md:grid-cols-2 gap-6 mt-8",children:[o.jsxs("div",{className:`${M.card} p-8 text-center`,children:[o.jsx("h4",{className:`${M.positiveBold} text-xl mb-4`,children:"STOCKS"}),o.jsx("p",{className:"text-white font-bold text-4xl md:text-5xl mb-2",children:"$20,000"}),o.jsx("p",{className:M.muted,children:"Tax Owed (20%)"})]}),o.jsxs("div",{className:`${M.card} p-8 text-center`,children:[o.jsx("h4",{className:`${M.goldBold} text-xl mb-4`,children:"GOLD"}),o.jsx("p",{className:`${M.negativeBold} text-4xl md:text-5xl mb-2`,children:"$28,000"}),o.jsx("p",{className:M.muted,children:"Tax Owed (28%)"})]})]}),o.jsxs("div",{className:`${M.calloutWarning} mt-6 text-center max-w-lg mx-auto`,children:[o.jsx("p",{className:`${M.negativeBold} text-lg md:text-xl`,children:"That's $8,000 MORE to the IRS"}),o.jsx("p",{className:"text-white text-sm",children:"on the exact same gain!"})]})]}),k$=()=>o.jsxs($t,{children:[o.jsx(Dt,{title:"Storage Fees Eat Your Gains"}),o.jsxs("div",{className:"space-y-4 md:space-y-6 mt-6 md:mt-8",children:[o.jsxs("div",{className:"flex flex-wrap items-baseline gap-2 md:gap-4",children:[o.jsx("span",{className:`${M.goldBold} text-4xl md:text-6xl`,children:"0.5%"}),o.jsx("span",{className:"text-white text-lg md:text-xl",children:"annual storage fee"})]}),o.jsxs("div",{className:"flex flex-wrap items-baseline gap-2 md:gap-4",children:[o.jsx("span",{className:"text-gray-500 text-2xl md:text-3xl",children:"="}),o.jsx("span",{className:`${M.negativeBold} text-2xl md:text-3xl`,children:"$500/year"}),o.jsx("span",{className:`${M.muted} text-sm md:text-base`,children:"on $100,000"})]})]}),o.jsxs("div",{className:`${M.calloutWarning} mt-6 md:mt-8 text-center`,children:[o.jsx("p",{className:`${M.negativeBold} text-lg md:text-2xl mb-2`,children:"Over 20 years = $10,000+ in storage fees alone"}),o.jsx("p",{className:`${M.muted} text-sm md:text-base mb-2`,children:"With gold returning only ~5% annually..."}),o.jsx("p",{className:"text-white font-bold text-sm md:text-base",children:"Storage eats 10-20% of your total gains!"})]})]}),T$=()=>o.jsxs($t,{source:"CFTC warns of 20-400% dealer markups",children:[o.jsx(Dt,{title:'The "Free Gold" Trap',subtitle:"How 'free' gifts actually cost you thousands"}),o.jsxs("div",{className:"grid md:grid-cols-2 gap-8 mt-8",children:[o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:M.divider+" flex justify-between",children:[o.jsx("span",{className:M.muted,children:"You invest:"}),o.jsx("span",{className:"text-white font-bold",children:"$100,000"})]}),o.jsxs("div",{className:M.divider+" flex justify-between",children:[o.jsx("span",{className:M.muted,children:'+ "Free" gold:'}),o.jsx("span",{className:M.goldBold,children:"$10,000"})]}),o.jsxs("div",{className:M.divider+" flex justify-between",children:[o.jsx("span",{className:M.muted,children:"Account shows:"}),o.jsx("span",{className:"text-white font-bold",children:"$110,000"})]}),o.jsxs("div",{className:M.divider+" flex justify-between",children:[o.jsx("span",{className:M.muted,children:"Try to sell:"}),o.jsx("span",{className:M.negativeBold,children:"-25% markup"})]}),o.jsxs("div",{className:"flex justify-between",children:[o.jsx("span",{className:M.muted,children:"You get back:"}),o.jsx("span",{className:M.negativeBold,children:"$82,500"})]})]}),o.jsxs("div",{className:`${M.card} flex flex-col justify-center`,children:[o.jsx("p",{className:`${M.muted} text-sm text-center mb-2`,children:'YOUR "FREE" GIFT'}),o.jsx("p",{className:"text-white text-center mb-2",children:"Actually cost you"}),o.jsx("p",{className:`${M.negativeBold} text-5xl text-center mb-2`,children:"$17,500"}),o.jsx("p",{className:`${M.muted} text-sm text-center`,children:"in hidden markups"})]})]})]}),I$=()=>o.jsxs($t,{source:"CFTC Consumer Advisory",children:[o.jsx(Dt,{title:"Coins vs Bars: The Markup Game",subtitle:"Why dealers push coins over bars"}),o.jsxs("div",{className:"grid md:grid-cols-2 gap-6 mt-8",children:[o.jsxs("div",{className:M.card,children:[o.jsx("h4",{className:`${M.goldBold} text-xl text-center mb-4`,children:"COINS"}),o.jsx("p",{className:`${M.negativeBold} text-4xl md:text-5xl text-center mb-2`,children:"40-200%"}),o.jsx("p",{className:`${M.muted} text-sm text-center mb-6`,children:"Premium Over Spot"}),o.jsxs("ul",{className:"text-white text-sm space-y-2",children:[o.jsx("li",{className:"text-center",children:'"Rare" & "Collectible"'}),o.jsx("li",{className:"text-center",children:'"Limited Edition"'}),o.jsx("li",{className:"text-center",children:'"Certified" graded'})]}),o.jsx("p",{className:`${M.negativeBold} text-sm text-center mt-4`,children:"= Higher dealer margins"})]}),o.jsxs("div",{className:M.card,children:[o.jsx("h4",{className:"text-white font-bold text-xl text-center mb-4",children:"BARS"}),o.jsx("p",{className:`${M.positiveBold} text-4xl md:text-5xl text-center mb-2`,children:"2-5%"}),o.jsx("p",{className:`${M.muted} text-sm text-center mb-6`,children:"Premium Over Spot"}),o.jsxs("ul",{className:"text-white text-sm space-y-2",children:[o.jsx("li",{className:"text-center",children:'Simple, no "story"'}),o.jsx("li",{className:"text-center",children:"Harder to markup"}),o.jsx("li",{className:"text-center",children:"Lower commissions"})]}),o.jsx("p",{className:`${M.positiveBold} text-sm text-center mt-4`,children:"= Dealers don't push these"})]})]})]}),j$=()=>o.jsxs($t,{children:[o.jsx(Dt,{title:"The Celebrity Trust Machine",subtitle:"Same playbook, different face"}),o.jsxs("div",{className:"grid md:grid-cols-2 gap-6 mt-8",children:[o.jsxs("div",{className:`${M.card} p-4 md:p-6`,children:[o.jsx("div",{className:"flex justify-center mb-4",children:o.jsx("img",{src:"/blog-images/william-devane-gold.jpg",alt:"William Devane in Rosland Capital commercial",className:M.avatarGold})}),o.jsx("h4",{className:"text-white font-bold text-xl text-center mb-1",children:"William Devane"}),o.jsx("p",{className:`${M.gold} text-center mb-1`,children:"Rosland Capital"}),o.jsx("p",{className:`${M.muted} text-sm text-center mb-3`,children:"Since 2012"}),o.jsxs("ul",{className:"text-white text-xs md:text-sm space-y-1",children:[o.jsx("li",{className:"text-center",children:'Known for: "24", "Knots Landing"'}),o.jsx("li",{className:"text-center",children:"Heavy cable news presence"}),o.jsx("li",{className:"text-center",children:"Target: Conservative retirees"})]})]}),o.jsxs("div",{className:`${M.card} p-4 md:p-6`,children:[o.jsx("div",{className:"flex justify-center mb-4",children:o.jsx("img",{src:"/blog-images/tom-selleck-gold.jpg",alt:"Tom Selleck in Goldco commercial",className:M.avatarGold})}),o.jsx("h4",{className:"text-white font-bold text-xl text-center mb-1",children:"Tom Selleck"}),o.jsx("p",{className:`${M.gold} text-center mb-1`,children:"Goldco"}),o.jsx("p",{className:`${M.muted} text-sm text-center mb-3`,children:"Since 2023"}),o.jsxs("ul",{className:"text-white text-xs md:text-sm space-y-1",children:[o.jsx("li",{className:"text-center",children:'Known for: "Magnum P.I.", "Blue Bloods"'}),o.jsx("li",{className:"text-center",children:"Same cable news demographic"}),o.jsx("li",{className:"text-center",children:"Target: Same retiree audience"})]})]})]}),o.jsx("p",{className:`${M.negativeBold} text-center mt-6`,children:"Trusted TV actors → Target retirees → Costs passed to customers"})]}),N$=()=>o.jsxs($t,{children:[o.jsx(Dt,{title:"Gold vs Autonomous Trading",subtitle:"Which would you choose?"}),o.jsxs("div",{className:"grid md:grid-cols-2 gap-6 mt-8",children:[o.jsxs("div",{className:M.card,children:[o.jsx("h4",{className:`${M.goldBold} text-xl text-center mb-6`,children:"GOLD"}),o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{children:[o.jsx("p",{className:`${M.muted} text-sm`,children:"Returns:"}),o.jsx("p",{className:M.negativeBold,children:"~5% annually"})]}),o.jsxs("div",{children:[o.jsx("p",{className:`${M.muted} text-sm`,children:"Tax Rate:"}),o.jsx("p",{className:M.negativeBold,children:"28% (Collectible)"})]}),o.jsxs("div",{children:[o.jsx("p",{className:`${M.muted} text-sm`,children:"Storage:"}),o.jsx("p",{className:M.negativeBold,children:"Fees eat gains"})]}),o.jsxs("div",{children:[o.jsx("p",{className:`${M.muted} text-sm`,children:"Complexity:"}),o.jsx("p",{className:M.negativeBold,children:"Dealers, markups"})]}),o.jsxs("div",{children:[o.jsx("p",{className:`${M.muted} text-sm`,children:"Sales:"}),o.jsx("p",{className:M.negativeBold,children:"Celebrity spokesmen"})]})]})]}),o.jsxs("div",{className:M.card,children:[o.jsx("h4",{className:`${M.positiveBold} text-xl text-center mb-6`,children:"MY SYSTEM"}),o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{children:[o.jsx("p",{className:`${M.muted} text-sm`,children:"Profits:"}),o.jsx("p",{className:M.positiveBold,children:"$4,736.15"})]}),o.jsxs("div",{children:[o.jsx("p",{className:`${M.muted} text-sm`,children:"Trades:"}),o.jsx("p",{className:M.positiveBold,children:"957 closed"})]}),o.jsxs("div",{children:[o.jsx("p",{className:`${M.muted} text-sm`,children:"Success:"}),o.jsx("p",{className:M.positiveBold,children:"100% win rate"})]}),o.jsxs("div",{children:[o.jsx("p",{className:`${M.muted} text-sm`,children:"Storage:"}),o.jsx("p",{className:M.positiveBold,children:"$0 (digital)"})]}),o.jsxs("div",{children:[o.jsx("p",{className:`${M.muted} text-sm`,children:"Transparency:"}),o.jsx("p",{className:M.positiveBold,children:"Live dashboard"})]})]})]})]})]}),A$=({variant:e})=>{switch(e){case"returns-1928":return o.jsx(y$,{});case"reality-check":return o.jsx(v$,{});case"lost-decades":return o.jsx(b$,{});case"irs-tax":return o.jsx(w$,{});case"tax-impact":return o.jsx(x$,{});case"storage-fees":return o.jsx(k$,{});case"free-gold-trap":return o.jsx(T$,{});case"coins-vs-bars":return o.jsx(I$,{});case"celebrity-machine":return o.jsx(j$,{});case"gold-vs-trading":return o.jsx(N$,{});default:return null}},S$=()=>{const{slug:e}=Bv(),t=_v(),[n,r]=f.useState(null);if(f.useEffect(()=>{const u=ka.find(d=>d.slug===e);if(u){if(!Cv(u)&&!r$()){t("/blog");return}r(u),window.scrollTo(0,0)}else t("/blog")},[e,t]),!n)return o.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center",children:o.jsx("div",{className:"text-white text-xl",children:"Loading..."})});const a=u=>new Date(u).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),i=u=>{const d=u.split(`
`),h=[];let m=[],p=!1,g=!1,v=[],y=!1,b=[];const x=()=>{m.length>0&&(h.push(o.jsx("p",{className:"mb-8 text-slate-300 leading-relaxed text-lg",children:s(m.join(" "))},`p-${h.length}`)),m=[])},k=()=>{if(v.length>0){const w=g?"ol":"ul";h.push(o.jsx(w,{className:`mb-6 space-y-2 text-slate-300 text-lg ${g?"list-decimal":"list-disc"} list-inside ml-4`,children:v.map((T,j)=>o.jsx("li",{children:s(T)},j))},`${g?"ol":"ul"}-${h.length}`)),v=[],p=!1,g=!1}},I=()=>{if(b.length>0){const w=b[0],T=b.slice(2),j=$=>$.split("|").slice(1,-1).map(A=>A.trim()),E=j(w),C=T.map(j);h.push(o.jsx("div",{className:"mb-6 overflow-x-auto",children:o.jsxs("table",{className:"w-full text-left border-collapse",children:[o.jsx("thead",{children:o.jsx("tr",{className:"border-b border-purple-400/30",children:E.map(($,A)=>o.jsx("th",{className:"py-3 px-4 text-purple-300 font-semibold text-sm",children:s($)},A))})}),o.jsx("tbody",{children:C.map(($,A)=>o.jsx("tr",{className:"border-b border-slate-700/50 hover:bg-slate-800/30",children:$.map((D,_)=>o.jsx("td",{className:"py-3 px-4 text-slate-300 text-sm",children:s(D)},_))},A))})]})},`table-${h.length}`)),b=[],y=!1}};return d.forEach((w,T)=>{if(w.startsWith("# "))x(),k(),h.push(o.jsx("h1",{className:"text-4xl md:text-5xl font-bold mb-6 mt-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400",children:w.substring(2)},`h1-${T}`));else if(w.startsWith("## "))x(),k(),h.push(o.jsx("h2",{className:"text-3xl font-bold mb-4 mt-8 text-purple-300",children:w.substring(3)},`h2-${T}`));else if(w.startsWith("### "))x(),k(),h.push(o.jsx("h3",{className:"text-2xl font-bold mb-3 mt-6 text-purple-300",children:w.substring(4)},`h3-${T}`));else if(w.trim()==="---")x(),k();else if(w.trim().match(/^!\[([^\]]*)\]\(([^)]+)\)$/)||w.trim().match(/^!\[Slide:\s*([^\]]+)\]$/)){x(),k();const j=w.trim().match(/^!\[Slide:\s*([^\]]+)\]$/);if(j){const E=j[1].trim();h.push(o.jsx("div",{style:{marginTop:"80px",marginBottom:"80px"},children:o.jsx(A$,{variant:E},`slide-${T}`)},`slide-wrapper-${T}`))}else{const E=w.trim().match(/^!\[([^\]]*)\]\(([^)]+)\)$/);if(E){const C=d[T+1];if(C&&C.trim().match(/^\*(.+)\*$/)){const A=C.trim().match(/^\*(.+)\*$/);h.push(o.jsxs("figure",{className:"my-8",children:[o.jsx("img",{src:E[2],alt:E[1],className:"w-full rounded-xl border border-purple-400/30"}),o.jsx("figcaption",{className:"text-center text-slate-400 text-sm italic mt-3",children:A?A[1]:""})]},`fig-${T}`)),d[T+1]=""}else h.push(o.jsx("img",{src:E[2],alt:E[1],className:"w-full rounded-xl my-6 border border-purple-400/30"},`img-${T}`))}}}else w.trim().startsWith("- ")?(x(),I(),p&&g&&k(),p=!0,g=!1,v.push(w.trim().substring(2))):/^\d+\.\s/.test(w.trim())?(x(),I(),p&&!g&&k(),p=!0,g=!0,v.push(w.trim().replace(/^\d+\.\s/,""))):w.trim().startsWith("|")&&w.trim().endsWith("|")?(x(),k(),y=!0,b.push(w.trim())):w.trim()===""?(x(),p||k(),y&&I()):(p&&k(),y&&I(),m.push(w))}),x(),k(),I(),h},s=u=>{const d=[];let h=u,m=0;for(;h.length>0;){const p=h.match(/\*\*([^*]+)\*\*/);if(p){const y=h.substring(0,p.index);y&&d.push(o.jsx("span",{children:y},m++)),d.push(o.jsx("strong",{className:"font-bold text-white",children:p[1]},m++)),h=h.substring(p.index+p[0].length);continue}const g=h.match(/\*([^*]+)\*/);if(g){const y=h.substring(0,g.index);y&&d.push(o.jsx("span",{children:y},m++)),d.push(o.jsx("em",{className:"italic",children:g[1]},m++)),h=h.substring(g.index+g[0].length);continue}const v=h.match(/\[([^\]]+)\]\(([^)]+)\)/);if(v){const y=h.substring(0,v.index);y&&d.push(o.jsx("span",{children:y},m++)),d.push(o.jsx("a",{href:v[2],className:"text-purple-400 hover:text-purple-300 underline",target:"_blank",rel:"noopener noreferrer",children:v[1]},m++)),h=h.substring(v.index+v[0].length);continue}d.push(o.jsx("span",{children:h},m++));break}return d},l=`https://myrobotictrader.com${n.heroImage}`,c=`https://myrobotictrader.com/blog/${n.slug}`;return o.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900",children:[o.jsxs(xb,{children:[o.jsxs("title",{children:[n.title," | MyRoboticTrader"]}),o.jsx("meta",{name:"description",content:n.metaDescription}),o.jsx("link",{rel:"canonical",href:c}),o.jsx("meta",{property:"og:type",content:"article"}),o.jsx("meta",{property:"og:title",content:n.title}),o.jsx("meta",{property:"og:description",content:n.metaDescription}),o.jsx("meta",{property:"og:image",content:l}),o.jsx("meta",{property:"og:url",content:c}),o.jsx("meta",{property:"og:site_name",content:"MyRoboticTrader"}),o.jsx("meta",{property:"article:published_time",content:n.date}),o.jsx("meta",{property:"article:author",content:"Patrick Jenkins"}),o.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),o.jsx("meta",{name:"twitter:site",content:"@myrobotictrader"}),o.jsx("meta",{name:"twitter:creator",content:"@myrobotictrader"}),o.jsx("meta",{name:"twitter:title",content:n.title}),o.jsx("meta",{name:"twitter:description",content:n.metaDescription}),o.jsx("meta",{name:"twitter:image",content:l}),o.jsx("meta",{name:"twitter:image:alt",content:n.imageAlt})]}),o.jsx(xr,{}),o.jsx("section",{className:"relative py-16",children:o.jsxs("article",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8",children:[o.jsx("div",{className:"mb-6",children:o.jsxs(Ge,{to:"/blog",className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-purple-400/30 hover:border-purple-400/50 text-purple-300 hover:text-purple-200 transition-all duration-300 group",children:[o.jsx("svg",{className:"w-4 h-4 transition-transform group-hover:-translate-x-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),o.jsx("span",{className:"text-sm font-medium",children:"Back to Blog"})]})}),o.jsxs("header",{className:"mb-12",children:[o.jsx("div",{className:"mb-4",children:o.jsx("span",{className:"inline-block px-4 py-2 text-sm font-semibold rounded-full bg-purple-600/30 text-purple-300 border border-purple-400/30",children:n.category})}),o.jsx("h1",{className:"text-4xl md:text-5xl font-bold mb-6 text-white leading-tight",children:n.title}),o.jsxs("div",{className:"flex items-center text-slate-400",children:[o.jsx("time",{dateTime:n.date,children:a(n.date)}),o.jsx("span",{className:"mx-3",children:"•"}),o.jsx("span",{children:"Patrick Jenkins"})]})]}),o.jsx("div",{className:"mb-8 rounded-2xl overflow-hidden h-48 md:h-56",children:o.jsx("img",{src:n.heroImage,alt:n.imageAlt,className:"w-full h-full object-cover",style:{filter:"brightness(0.85)"}})}),o.jsx("div",{className:"prose prose-invert prose-lg max-w-none",children:o.jsx("div",{className:"bg-slate-900/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-8 border border-purple-400/30",children:i(n.content)})}),o.jsxs("div",{className:"bg-slate-900/95 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30",children:[o.jsx("h3",{className:"text-2xl font-bold mb-4 text-white",children:"Ready to See Real Trading Results?"}),o.jsx("p",{className:"text-slate-300 mb-6",children:"Everything you just read is based on real trading data. Check out my live dashboard with complete transparency - every trade, every profit, updated multiple times daily."}),o.jsxs(Ge,{to:"/",onClick:()=>window.scrollTo(0,0),className:"inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/30",children:[o.jsx("span",{children:"View Live Results"}),o.jsx("svg",{className:"w-5 h-5 transition-transform group-hover:translate-x-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})]})]}),o.jsx("div",{className:"mt-8 pt-8 border-t border-purple-400/30",children:o.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",children:[o.jsxs("div",{children:[o.jsx("p",{className:"text-slate-300 font-medium mb-1",children:"Found this helpful? Let's connect!"}),o.jsx("p",{className:"text-slate-400 text-sm",children:"I share daily insights about systematic trading and building transparent systems."})]}),o.jsxs("a",{href:"https://twitter.com/myrobotictrader",className:"inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-600/20 hover:bg-purple-600/30 border border-purple-400/40 hover:border-purple-400/60 text-purple-300 hover:text-purple-200 transition-all duration-300 group whitespace-nowrap",target:"_blank",rel:"noopener noreferrer",children:[o.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})}),o.jsx("span",{className:"font-medium",children:"Follow on X"}),o.jsx("svg",{className:"w-4 h-4 group-hover:translate-x-1 transition-transform",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})]})]})}),o.jsx(f$,{currentSlug:n.slug,currentCategory:n.category}),o.jsx("div",{className:"mt-12",children:o.jsx(g$,{currentSlug:n.slug})})]})})]})},P$=()=>o.jsx(Rv,{to:"/blog",replace:!0}),yn={home:{title:"MyRoboticTrader - Set It and Forget It Crypto Trading | Build New Revenue Streams",description:"Discover how I built multiple revenue streams with AI-Enhanced autonomous robotic crypto trading. Real results, proven system. Start your automated trading journey today.",keywords:"robotic trading, crypto trading, automated trading, passive income, cryptocurrency, trading bot, AI trading, revenue streams, financial freedom",ogTitle:"MyRoboticTrader - Set It and Forget It Crypto Trading | Build New Revenue Streams",ogDescription:"Discover how I built multiple revenue streams with AI-Enhanced autonomous robotic crypto trading. Real results, proven system.",ogImage:"https://myrobotictrader.com/api/og-image",twitterTitle:"MyRoboticTrader - Set It and Forget It Crypto Trading | Build New Revenue Streams",twitterDescription:"Discover how I built multiple revenue streams with AI-Enhanced autonomous robotic crypto trading. Real results, proven system.",twitterImage:"https://myrobotictrader.com/api/og-image",canonicalUrl:"https://myrobotictrader.com/",pageType:"home"},resources:{title:"Trading Resources & AI-Enhanced Crypto Guides | Build Your Revenue Stream",description:"Free AI-enhanced crypto trading resources and guides. Learn the automated trading strategies to build sustainable revenue streams with GoBabyTrade.",keywords:"trading guides, crypto resources, trading education, automated trading strategies, financial education",ogTitle:"Free Trading Resources & Guides | MyRoboticTrader",ogDescription:"Access free crypto trading resources, guides, and educational content to build your revenue stream.",ogImage:"https://myrobotictrader.com/api/og-image",twitterTitle:"Trading Resources & Guides",twitterDescription:"Free crypto trading resources and educational content for building sustainable revenue streams.",twitterImage:"https://myrobotictrader.com/api/og-image",canonicalUrl:"https://myrobotictrader.com/resources",pageType:"resources"},privacy:{title:"Privacy Policy | MyRoboticTrader",description:"Privacy policy and data handling practices for MyRoboticTrader.com",keywords:"privacy policy, data protection, terms of service",ogTitle:"Privacy Policy | MyRoboticTrader",ogDescription:"Privacy policy and data handling practices.",ogImage:"https://myrobotictrader.com/api/og-image",twitterTitle:"Privacy Policy",twitterDescription:"Privacy policy and data handling practices.",twitterImage:"https://myrobotictrader.com/api/og-image",canonicalUrl:"https://myrobotictrader.com/privacy",pageType:"privacy"},card:{title:"Live Trading Results - Building Revenue Streams | MyRoboticTrader",description:"See live AI-enhanced robotic trading results. Real revenue streams being built automatically from Patrick's trading system!",keywords:"live trading results, crypto performance, trading dashboard, automated trading results",ogTitle:"Live Trading Results - Building Revenue Streams",ogDescription:"See live AI-enhanced robotic trading results. Real revenue streams being built automatically from Patrick's trading system!",ogImage:"https://myrobotictrader.com/api/og-image",twitterTitle:"Live Trading Results - Building Revenue Streams",twitterDescription:"See live AI-enhanced robotic trading results building sustainable revenue streams automatically!",twitterImage:"https://myrobotictrader.com/api/og-image",canonicalUrl:"https://myrobotictrader.com/card",pageType:"card"},blog:{title:"Trading Education Blog | Real Insights from Autonomous Crypto Trading",description:"Learn systematic crypto trading strategies from real results. No hype, just transparent insights from building an AI-enhanced autonomous trading system.",keywords:"crypto trading blog, automated trading education, systematic trading, AI trading insights, crypto trading strategies, trading transparency",ogTitle:"Trading Education Blog - Real Insights, Real Results",ogDescription:"Learn from real trading results and transparent insights about autonomous crypto trading systems.",ogImage:"https://myrobotictrader.com/api/og-image",twitterTitle:"Trading Education Blog - MyRoboticTrader",twitterDescription:"Real insights from building transparent, systematic crypto trading systems.",twitterImage:"https://myrobotictrader.com/api/og-image",canonicalUrl:"https://myrobotictrader.com/blog",pageType:"blog"},faq:{title:"FAQ - Frequently Asked Questions | MyRoboticTrader",description:"Get answers to common questions about automated crypto trading, AI-enhanced systems, safety, profits, and how to get started with GoBabyTrade.",keywords:"crypto trading FAQ, automated trading questions, trading bot FAQ, GoBabyTrade FAQ, robotic trading help",ogTitle:"Frequently Asked Questions | MyRoboticTrader",ogDescription:"Answers to 30+ questions about automated crypto trading, safety, profits, and getting started.",ogImage:"https://myrobotictrader.com/api/og-image",twitterTitle:"FAQ - MyRoboticTrader",twitterDescription:"Get answers to common questions about automated crypto trading and AI-enhanced systems.",twitterImage:"https://myrobotictrader.com/api/og-image",canonicalUrl:"https://myrobotictrader.com/faq",pageType:"faq"}},O$=({children:e})=>{const t=Um(),n=()=>{if(t.pathname.startsWith("/blog/"))return yn.blog;switch(t.pathname){case"/blog":return yn.blog;case"/faq":return yn.faq;case"/resources":return yn.resources;case"/privacy":return yn.privacy;case"/card":return yn.card;default:return yn.home}};return o.jsxs(o.Fragment,{children:[o.jsx(jb,{...n()}),e]})},C$=()=>{const{tradingStats:e,isLoading:t,error:n,refreshStats:r,cacheInfo:a}=Xr(),i=St.useCallback(()=>{try{r&&typeof r=="function"&&r()}catch(s){console.error("Error in refresh function:",s)}},[r]);return o.jsxs(o.Fragment,{children:[o.jsx(xr,{}),o.jsx(Qb,{}),o.jsx(ew,{tradingStats:e}),o.jsx(ZM,{tradingStats:e,isLoading:t,error:n,refreshStats:r||i,cacheInfo:a||{isFresh:!1,isRateLimited:!1,timeUntilNextRefresh:0}}),o.jsx(XM,{}),o.jsx(QM,{}),o.jsx(n$,{}),o.jsx(a$,{maxPosts:4}),o.jsxs("section",{className:"py-20 px-4 relative overflow-hidden",children:[o.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/30 to-slate-900 -z-10"}),o.jsx("div",{className:"absolute top-0 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"}),o.jsx("div",{className:"absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"}),o.jsxs("div",{className:"max-w-4xl mx-auto relative z-10",children:[o.jsx("div",{className:"text-center mb-8",children:o.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-white mb-4",children:"About MyRoboticTrader"})}),o.jsx("div",{className:"bg-gray-900/50 rounded-2xl p-8 md:p-10 border border-purple-400/30 shadow-lg shadow-purple-500/10",children:o.jsxs("div",{className:"text-gray-300 text-base leading-relaxed space-y-4",children:[o.jsx("p",{children:"MyRoboticTrader showcases real, verified results from an AI-enhanced autonomous cryptocurrency trading system. Unlike manual trading or gambling on price predictions, this system executes trades 24/7 based on market volatility, taking small consistent profits without emotional decision-making. The approach is simple: buy low, sell for profit, repeat—all managed by intelligent automation."}),o.jsx("p",{children:"Every trade is published transparently with complete transaction history available for verification. With nearly 1,000 trades executed and a 100% success rate on closed positions, the results speak for themselves. The system never sells at a loss, holding positions until market conditions become favorable. This patience-based approach eliminates the fear and greed that destroy most traders."}),o.jsx("p",{children:"This isn't get-rich-quick speculation or crypto gambling. It's systematic wealth building through AI-enhanced technology that works while you sleep. Powered by GoBabyTrade™, the system connects securely to exchanges like Coinbase and Kraken, keeping your funds in your own account at all times. Check out the live results dashboard above to see every trade, every profit, updated in real-time."})]})})]})]})]})};function E$(){return f.useEffect(()=>{kb()},[]),o.jsxs("div",{className:"App min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900",children:[o.jsx(Nb,{}),o.jsx(Ab,{}),o.jsx(Lv,{children:o.jsxs(O$,{children:[o.jsxs(Wv,{children:[o.jsx(rn,{path:"/",element:o.jsx(C$,{})}),o.jsx(rn,{path:"/faq",element:o.jsx(c$,{})}),o.jsx(rn,{path:"/resources",element:o.jsx(d$,{})}),o.jsx(rn,{path:"/privacy",element:o.jsx(h$,{})}),o.jsx(rn,{path:"/card",element:o.jsx(m$,{})}),o.jsx(rn,{path:"/blog",element:o.jsx(p$,{})}),o.jsx(rn,{path:"/blog/schedule",element:o.jsx(P$,{})}),o.jsx(rn,{path:"/blog/:slug",element:o.jsx(S$,{})})]}),o.jsx(u$,{})]})})]})}Jm(document.getElementById("root")).render(o.jsx(f.StrictMode,{children:o.jsx(rp,{children:o.jsx(E$,{})})}));
