var i0=Object.defineProperty;var s0=(e,t,n)=>t in e?i0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var $e=(e,t,n)=>(s0(e,typeof t!="symbol"?t+"":t,n),n);import{r as g,a as $l,g as Nt,R as Yt,b as l0}from"./vendor-f817694b.js";import{L as Pn,u as up,_ as Wt,B as c0,R as u0,a as Ge,N as d0}from"./router-619e7a5e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();var dp={exports:{}},Fo={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h0=g,m0=Symbol.for("react.element"),p0=Symbol.for("react.fragment"),g0=Object.prototype.hasOwnProperty,y0=h0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f0={key:!0,ref:!0,__self:!0,__source:!0};function hp(e,t,n){var r,a={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)g0.call(t,r)&&!f0.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:m0,type:e,key:o,ref:i,props:a,_owner:y0.current}}Fo.Fragment=p0;Fo.jsx=hp;Fo.jsxs=hp;dp.exports=Fo;var d=dp.exports,mp,Pu=$l;mp=Pu.createRoot,Pu.hydrateRoot;var v0=typeof Element<"u",b0=typeof Map=="function",w0=typeof Set=="function",x0=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Ya(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,r,a;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!Ya(e[r],t[r]))return!1;return!0}var o;if(b0&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(o=e.entries();!(r=o.next()).done;)if(!t.has(r.value[0]))return!1;for(o=e.entries();!(r=o.next()).done;)if(!Ya(r.value[1],t.get(r.value[0])))return!1;return!0}if(w0&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(o=e.entries();!(r=o.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(x0&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(a=Object.keys(e),n=a.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,a[r]))return!1;if(v0&&e instanceof Element)return!1;for(r=n;r--!==0;)if(!((a[r]==="_owner"||a[r]==="__v"||a[r]==="__o")&&e.$$typeof)&&!Ya(e[a[r]],t[a[r]]))return!1;return!0}return e!==e&&t!==t}var k0=function(t,n){try{return Ya(t,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const T0=Nt(k0);var I0=function(e,t,n,r,a,o,i,s){if(!e){var l;if(t===void 0)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,a,o,i,s],u=0;l=new Error(t.replace(/%s/g,function(){return c[u++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}},A0=I0;const Nu=Nt(A0);var S0=function(t,n,r,a){var o=r?r.call(a,t,n):void 0;if(o!==void 0)return!!o;if(t===n)return!0;if(typeof t!="object"||!t||typeof n!="object"||!n)return!1;var i=Object.keys(t),s=Object.keys(n);if(i.length!==s.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(n),c=0;c<i.length;c++){var u=i[c];if(!l(u))return!1;var h=t[u],m=n[u];if(o=r?r.call(a,h,m,u):void 0,o===!1||o===void 0&&h!==m)return!1}return!0};const P0=Nt(S0);var pp=(e=>(e.BASE="base",e.BODY="body",e.HEAD="head",e.HTML="html",e.LINK="link",e.META="meta",e.NOSCRIPT="noscript",e.SCRIPT="script",e.STYLE="style",e.TITLE="title",e.FRAGMENT="Symbol(react.fragment)",e))(pp||{}),Zi={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},ju=Object.values(pp),Dl={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},N0=Object.entries(Dl).reduce((e,[t,n])=>(e[n]=t,e),{}),Tt="data-rh",Xn={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},Qn=(e,t)=>{for(let n=e.length-1;n>=0;n-=1){const r=e[n];if(Object.prototype.hasOwnProperty.call(r,t))return r[t]}return null},j0=e=>{let t=Qn(e,"title");const n=Qn(e,Xn.TITLE_TEMPLATE);if(Array.isArray(t)&&(t=t.join("")),n&&t)return n.replace(/%s/g,()=>t);const r=Qn(e,Xn.DEFAULT_TITLE);return t||r||void 0},O0=e=>Qn(e,Xn.ON_CHANGE_CLIENT_STATE)||(()=>{}),Xi=(e,t)=>t.filter(n=>typeof n[e]<"u").map(n=>n[e]).reduce((n,r)=>({...n,...r}),{}),C0=(e,t)=>t.filter(n=>typeof n.base<"u").map(n=>n.base).reverse().reduce((n,r)=>{if(!n.length){const a=Object.keys(r);for(let o=0;o<a.length;o+=1){const s=a[o].toLowerCase();if(e.indexOf(s)!==-1&&r[s])return n.concat(r)}}return n},[]),E0=e=>console&&typeof console.warn=="function"&&console.warn(e),xr=(e,t,n)=>{const r={};return n.filter(a=>Array.isArray(a[e])?!0:(typeof a[e]<"u"&&E0(`Helmet: ${e} should be of type "Array". Instead found type "${typeof a[e]}"`),!1)).map(a=>a[e]).reverse().reduce((a,o)=>{const i={};o.filter(l=>{let c;const u=Object.keys(l);for(let m=0;m<u.length;m+=1){const p=u[m],y=p.toLowerCase();t.indexOf(y)!==-1&&!(c==="rel"&&l[c].toLowerCase()==="canonical")&&!(y==="rel"&&l[y].toLowerCase()==="stylesheet")&&(c=y),t.indexOf(p)!==-1&&(p==="innerHTML"||p==="cssText"||p==="itemprop")&&(c=p)}if(!c||!l[c])return!1;const h=l[c].toLowerCase();return r[c]||(r[c]={}),i[c]||(i[c]={}),r[c][h]?!1:(i[c][h]=!0,!0)}).reverse().forEach(l=>a.push(l));const s=Object.keys(i);for(let l=0;l<s.length;l+=1){const c=s[l],u={...r[c],...i[c]};r[c]=u}return a},[]).reverse()},M0=(e,t)=>{if(Array.isArray(e)&&e.length){for(let n=0;n<e.length;n+=1)if(e[n][t])return!0}return!1},$0=e=>({baseTag:C0(["href"],e),bodyAttributes:Xi("bodyAttributes",e),defer:Qn(e,Xn.DEFER),encode:Qn(e,Xn.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Xi("htmlAttributes",e),linkTags:xr("link",["rel","href"],e),metaTags:xr("meta",["name","charset","http-equiv","property","itemprop"],e),noscriptTags:xr("noscript",["innerHTML"],e),onChangeClientState:O0(e),scriptTags:xr("script",["src","innerHTML"],e),styleTags:xr("style",["cssText"],e),title:j0(e),titleAttributes:Xi("titleAttributes",e),prioritizeSeoTags:M0(e,Xn.PRIORITIZE_SEO_TAGS)}),gp=e=>Array.isArray(e)?e.join(""):e,D0=(e,t)=>{const n=Object.keys(e);for(let r=0;r<n.length;r+=1)if(t[n[r]]&&t[n[r]].includes(e[n[r]]))return!0;return!1},Qi=(e,t)=>Array.isArray(e)?e.reduce((n,r)=>(D0(r,t)?n.priority.push(r):n.default.push(r),n),{priority:[],default:[]}):{default:e,priority:[]},Ou=(e,t)=>({...e,[t]:void 0}),B0=["noscript","script","style"],Os=(e,t=!0)=>t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),yp=e=>Object.keys(e).reduce((t,n)=>{const r=typeof e[n]<"u"?`${n}="${e[n]}"`:`${n}`;return t?`${t} ${r}`:r},""),R0=(e,t,n,r)=>{const a=yp(n),o=gp(t);return a?`<${e} ${Tt}="true" ${a}>${Os(o,r)}</${e}>`:`<${e} ${Tt}="true">${Os(o,r)}</${e}>`},_0=(e,t,n=!0)=>t.reduce((r,a)=>{const o=a,i=Object.keys(o).filter(c=>!(c==="innerHTML"||c==="cssText")).reduce((c,u)=>{const h=typeof o[u]>"u"?u:`${u}="${Os(o[u],n)}"`;return c?`${c} ${h}`:h},""),s=o.innerHTML||o.cssText||"",l=B0.indexOf(e)===-1;return`${r}<${e} ${Tt}="true" ${i}${l?"/>":`>${s}</${e}>`}`},""),fp=(e,t={})=>Object.keys(e).reduce((n,r)=>{const a=Dl[r];return n[a||r]=e[r],n},t),W0=(e,t,n)=>{const r={key:t,[Tt]:!0},a=fp(n,r);return[Yt.createElement("title",a,t)]},Ga=(e,t)=>t.map((n,r)=>{const a={key:r,[Tt]:!0};return Object.keys(n).forEach(o=>{const s=Dl[o]||o;if(s==="innerHTML"||s==="cssText"){const l=n.innerHTML||n.cssText;a.dangerouslySetInnerHTML={__html:l}}else a[s]=n[o]}),Yt.createElement(e,a)}),dt=(e,t,n=!0)=>{switch(e){case"title":return{toComponent:()=>W0(e,t.title,t.titleAttributes),toString:()=>R0(e,t.title,t.titleAttributes,n)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>fp(t),toString:()=>yp(t)};default:return{toComponent:()=>Ga(e,t),toString:()=>_0(e,t,n)}}},L0=({metaTags:e,linkTags:t,scriptTags:n,encode:r})=>{const a=Qi(e,Zi.meta),o=Qi(t,Zi.link),i=Qi(n,Zi.script);return{priorityMethods:{toComponent:()=>[...Ga("meta",a.priority),...Ga("link",o.priority),...Ga("script",i.priority)],toString:()=>`${dt("meta",a.priority,r)} ${dt("link",o.priority,r)} ${dt("script",i.priority,r)}`},metaTags:a.default,linkTags:o.default,scriptTags:i.default}},F0=e=>{const{baseTag:t,bodyAttributes:n,encode:r=!0,htmlAttributes:a,noscriptTags:o,styleTags:i,title:s="",titleAttributes:l,prioritizeSeoTags:c}=e;let{linkTags:u,metaTags:h,scriptTags:m}=e,p={toComponent:()=>{},toString:()=>""};return c&&({priorityMethods:p,linkTags:u,metaTags:h,scriptTags:m}=L0(e)),{priority:p,base:dt("base",t,r),bodyAttributes:dt("bodyAttributes",n,r),htmlAttributes:dt("htmlAttributes",a,r),link:dt("link",u,r),meta:dt("meta",h,r),noscript:dt("noscript",o,r),script:dt("script",m,r),style:dt("style",i,r),title:dt("title",{title:s,titleAttributes:l},r)}},Cs=F0,Ia=[],vp=!!(typeof window<"u"&&window.document&&window.document.createElement),Es=class{constructor(e,t){$e(this,"instances",[]);$e(this,"canUseDOM",vp);$e(this,"context");$e(this,"value",{setHelmet:e=>{this.context.helmet=e},helmetInstances:{get:()=>this.canUseDOM?Ia:this.instances,add:e=>{(this.canUseDOM?Ia:this.instances).push(e)},remove:e=>{const t=(this.canUseDOM?Ia:this.instances).indexOf(e);(this.canUseDOM?Ia:this.instances).splice(t,1)}}});this.context=e,this.canUseDOM=t||!1,t||(e.helmet=Cs({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},H0={},bp=Yt.createContext(H0),ar,wp=(ar=class extends g.Component{constructor(n){super(n);$e(this,"helmetData");this.helmetData=new Es(this.props.context||{},ar.canUseDOM)}render(){return Yt.createElement(bp.Provider,{value:this.helmetData.value},this.props.children)}},$e(ar,"canUseDOM",vp),ar),Gn=(e,t)=>{const n=document.head||document.querySelector("head"),r=n.querySelectorAll(`${e}[${Tt}]`),a=[].slice.call(r),o=[];let i;return t&&t.length&&t.forEach(s=>{const l=document.createElement(e);for(const c in s)if(Object.prototype.hasOwnProperty.call(s,c))if(c==="innerHTML")l.innerHTML=s.innerHTML;else if(c==="cssText")l.styleSheet?l.styleSheet.cssText=s.cssText:l.appendChild(document.createTextNode(s.cssText));else{const u=c,h=typeof s[u]>"u"?"":s[u];l.setAttribute(c,h)}l.setAttribute(Tt,"true"),a.some((c,u)=>(i=u,l.isEqualNode(c)))?a.splice(i,1):o.push(l)}),a.forEach(s=>{var l;return(l=s.parentNode)==null?void 0:l.removeChild(s)}),o.forEach(s=>n.appendChild(s)),{oldTags:a,newTags:o}},Ms=(e,t)=>{const n=document.getElementsByTagName(e)[0];if(!n)return;const r=n.getAttribute(Tt),a=r?r.split(","):[],o=[...a],i=Object.keys(t);for(const s of i){const l=t[s]||"";n.getAttribute(s)!==l&&n.setAttribute(s,l),a.indexOf(s)===-1&&a.push(s);const c=o.indexOf(s);c!==-1&&o.splice(c,1)}for(let s=o.length-1;s>=0;s-=1)n.removeAttribute(o[s]);a.length===o.length?n.removeAttribute(Tt):n.getAttribute(Tt)!==i.join(",")&&n.setAttribute(Tt,i.join(","))},z0=(e,t)=>{typeof e<"u"&&document.title!==e&&(document.title=gp(e)),Ms("title",t)},Cu=(e,t)=>{const{baseTag:n,bodyAttributes:r,htmlAttributes:a,linkTags:o,metaTags:i,noscriptTags:s,onChangeClientState:l,scriptTags:c,styleTags:u,title:h,titleAttributes:m}=e;Ms("body",r),Ms("html",a),z0(h,m);const p={baseTag:Gn("base",n),linkTags:Gn("link",o),metaTags:Gn("meta",i),noscriptTags:Gn("noscript",s),scriptTags:Gn("script",c),styleTags:Gn("style",u)},y={},f={};Object.keys(p).forEach(v=>{const{newTags:b,oldTags:w}=p[v];b.length&&(y[v]=b),w.length&&(f[v]=p[v].oldTags)}),t&&t(),l(e,y,f)},kr=null,Y0=e=>{kr&&cancelAnimationFrame(kr),e.defer?kr=requestAnimationFrame(()=>{Cu(e,()=>{kr=null})}):(Cu(e),kr=null)},G0=Y0,Eu=class extends g.Component{constructor(){super(...arguments);$e(this,"rendered",!1)}shouldComponentUpdate(t){return!P0(t,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:t}=this.props.context;t.remove(this),this.emitChange()}emitChange(){const{helmetInstances:t,setHelmet:n}=this.props.context;let r=null;const a=$0(t.get().map(o=>{const i={...o.props};return delete i.context,i}));wp.canUseDOM?G0(a):Cs&&(r=Cs(a)),n(r)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:t}=this.props.context;t.add(this),this.emitChange()}render(){return this.init(),null}},js,BD=(js=class extends g.Component{shouldComponentUpdate(e){return!T0(Ou(this.props,"helmetData"),Ou(e,"helmetData"))}mapNestedChildrenToProps(e,t){if(!t)return null;switch(e.type){case"script":case"noscript":return{innerHTML:t};case"style":return{cssText:t};default:throw new Error(`<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(e,t,n,r){return{...t,[e.type]:[...t[e.type]||[],{...n,...this.mapNestedChildrenToProps(e,r)}]}}mapObjectTypeChildren(e,t,n,r){switch(e.type){case"title":return{...t,[e.type]:r,titleAttributes:{...n}};case"body":return{...t,bodyAttributes:{...n}};case"html":return{...t,htmlAttributes:{...n}};default:return{...t,[e.type]:{...n}}}}mapArrayTypeChildrenToProps(e,t){let n={...t};return Object.keys(e).forEach(r=>{n={...n,[r]:e[r]}}),n}warnOnInvalidChildren(e,t){return Nu(ju.some(n=>e.type===n),typeof e.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${ju.join(", ")} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`),Nu(!t||typeof t=="string"||Array.isArray(t)&&!t.some(n=>typeof n!="string"),`Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(e,t){let n={};return Yt.Children.forEach(e,r=>{if(!r||!r.props)return;const{children:a,...o}=r.props,i=Object.keys(o).reduce((l,c)=>(l[N0[c]||c]=o[c],l),{});let{type:s}=r;switch(typeof s=="symbol"?s=s.toString():this.warnOnInvalidChildren(r,a),s){case"Symbol(react.fragment)":t=this.mapChildrenToProps(a,t);break;case"link":case"meta":case"noscript":case"script":case"style":n=this.flattenArrayTypeChildren(r,n,i,a);break;default:t=this.mapObjectTypeChildren(r,t,i,a);break}}),this.mapArrayTypeChildrenToProps(n,t)}render(){const{children:e,...t}=this.props;let n={...t},{helmetData:r}=t;if(e&&(n=this.mapChildrenToProps(e,n)),r&&!(r instanceof Es)){const a=r;r=new Es(a.context,!0),delete n.helmetData}return r?Yt.createElement(Eu,{...n,context:r.value}):Yt.createElement(bp.Consumer,null,a=>Yt.createElement(Eu,{...n,context:a}))}},$e(js,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),js);const Mu="G-RX3B8PVTHE",q0=()=>{const e=document.createElement("script");e.async=!0,e.src=`https://www.googletagmanager.com/gtag/js?id=${Mu}`,document.head.appendChild(e),window.dataLayer=window.dataLayer||[],window.gtag=function(...n){window.dataLayer.push(n)},window.gtag("js",new Date),window.gtag("config",Mu,{page_title:document.title,page_location:window.location.href})},Za=(e,t,n,r)=>{typeof window.gtag<"u"&&window.gtag("event",e,{event_category:t,event_label:n,value:r})},Ho=(e,t="hero")=>{Za("click","cta_button",`${e}_${t}`,1)},zo=(e,t)=>{Za("click","outbound_link",`${t}_${e}`,1)};class U0{constructor(t="smart_cache",n=!0){$e(this,"data",new Map);$e(this,"stats",{hits:0,misses:0,sets:0,deletes:0,evictions:0,memoryUsage:0,entryCount:0,totalEntries:0,rateLimitedKeys:[],expiredEntries:0,staleEntries:0});$e(this,"defaultTTL",30*60*1e3);$e(this,"localStoragePrefix");$e(this,"persistToLocalStorage");this.localStoragePrefix=t,this.persistToLocalStorage=n,this.persistToLocalStorage&&this.loadFromLocalStorage()}loadFromLocalStorage(){try{const t=Object.keys(localStorage),n=`${this.localStoragePrefix}_`;let r=0;for(const a of t)if(a.startsWith(n)){const o=a.substring(n.length),i=localStorage.getItem(a);if(i){const s=JSON.parse(i);Date.now()-s.time<=this.defaultTTL?(this.data.set(o,s),r++):(localStorage.removeItem(a),this.stats.expiredEntries++)}}this.stats.entryCount=this.data.size,this.stats.totalEntries=this.data.size}catch(t){console.warn("Error loading cache from localStorage:",t)}}saveToLocalStorage(t,n){if(this.persistToLocalStorage)try{const r=`${this.localStoragePrefix}_${String(t)}`;localStorage.setItem(r,JSON.stringify(n))}catch(r){console.warn("Error saving to localStorage:",r)}}removeFromLocalStorage(t){if(this.persistToLocalStorage)try{const n=`${this.localStoragePrefix}_${String(t)}`;localStorage.removeItem(n)}catch(n){console.warn("Error removing from localStorage:",n)}}set(t,n){const r={value:n,time:Date.now()};this.data.set(t,r),this.saveToLocalStorage(t,r),this.stats.sets++,this.stats.entryCount=this.data.size,this.stats.totalEntries=this.data.size}get(t,n){const r=this.data.get(t);if(r){const a=n||this.defaultTTL;if(Date.now()-r.time>a){this.data.delete(t),this.removeFromLocalStorage(t),this.stats.expiredEntries++,this.stats.misses++;return}else return this.stats.hits++,r.value}else{this.stats.misses++;return}}delete(t){const n=this.data.delete(t);return n&&(this.removeFromLocalStorage(t),this.stats.deletes++,this.stats.entryCount=this.data.size,this.stats.totalEntries=this.data.size),n}clear(){const t=Array.from(this.data.keys());if(this.data.clear(),this.persistToLocalStorage)for(const n of t)this.removeFromLocalStorage(n);this.stats.entryCount=0,this.stats.totalEntries=0}size(){return this.data.size}keys(){return Array.from(this.data.keys())}values(){return Array.from(this.data.values()).map(t=>t.value)}has(t){return this.data.has(t)}hasValid(t,n){const r=this.data.get(t);if(!r)return!1;const a=n||this.defaultTTL;return Date.now()-r.time>a?(this.data.delete(t),this.removeFromLocalStorage(t),this.stats.expiredEntries++,!1):!0}getAge(t){const n=this.data.get(t);if(n)return Date.now()-n.time}getTimeUntilExpiration(t,n){const r=this.data.get(t);if(!r)return 0;const a=n||this.defaultTTL,o=Date.now()-r.time,i=a-o;return Math.max(0,i)}getStats(){return{...this.stats,entryCount:this.data.size,totalEntries:this.data.size,memoryUsage:this.calculateMemoryUsage()}}getCacheInfo(){return{totalEntries:this.data.size,rateLimitedKeys:[],expiredEntries:this.stats.expiredEntries,staleEntries:this.stats.staleEntries,memoryUsage:this.calculateMemoryUsage(),hits:this.stats.hits,misses:this.stats.misses}}cleanup(){const t=Date.now();let n=0;for(const[r,a]of this.data.entries())t-a.time>this.defaultTTL&&(this.data.delete(r),this.removeFromLocalStorage(r),n++);this.stats.expiredEntries+=n,this.stats.entryCount=this.data.size,this.stats.totalEntries=this.data.size}getTimeUntilNextRequest(t){return this.getTimeUntilExpiration(t)}setDefaultTTL(t){this.defaultTTL=t}getDefaultTTL(){return this.defaultTTL}calculateMemoryUsage(){let t=0;for(const[n,r]of this.data.entries())t+=JSON.stringify(n).length+JSON.stringify(r).length;return t}}function K0(e,t="smart_cache",n=!0){const r=new U0(t,n);return e&&r.setDefaultTTL(e),r}const bt=K0(30*60*1e3,"trading_data_cache",!0);var xp=(e=>(e[e.ERROR=0]="ERROR",e[e.WARN=1]="WARN",e[e.INFO=2]="INFO",e[e.DEBUG=3]="DEBUG",e[e.VERBOSE=4]="VERBOSE",e))(xp||{});class V0{constructor(){$e(this,"config");$e(this,"isDevelopment");this.isDevelopment=!1,this.config={level:this.isDevelopment?4:1,enableConsole:!0,enableRemote:!this.isDevelopment,remoteEndpoint:"/api/logs"}}shouldLog(t){return t<=this.config.level}formatMessage(t,n,r){const o=`[${new Date().toISOString()}] ${t}: ${n}`;return r?`${o} ${JSON.stringify(r)}`:o}logToConsole(t,n,r){if(!this.config.enableConsole||!this.shouldLog(t))return;const a=this.formatMessage(xp[t],n,r);switch(t){case 0:console.error(a);break;case 1:console.warn(a);break;case 2:console.info(a);break;case 3:case 4:console.log(a);break}}error(t,n){this.logToConsole(0,`❌ ${t}`,n)}warn(t,n){this.logToConsole(1,`⚠️ ${t}`,n)}info(t,n){this.logToConsole(2,`ℹ️ ${t}`,n)}debug(t,n){this.logToConsole(3,`🔍 ${t}`,n)}verbose(t,n){this.logToConsole(4,`📝 ${t}`,n)}cacheHit(t,n){this.debug(`Cache hit: ${t}${n?` (${n})`:""}`)}cacheMiss(t,n){this.debug(`Cache miss: ${t}${n?` (${n})`:""}`)}cacheSet(t,n){this.debug(`Cache set: ${t}${n?` (TTL: ${n}ms)`:""}`)}apiRequest(t,n="GET"){this.debug(`API Request: ${n} ${t}`)}apiResponse(t,n,r){const a=`API Response: ${n} ${t}${r?` (${r}ms)`:""}`;n>=400?this.warn(a):this.debug(a)}apiError(t,n){this.error(`API Error: ${t}`,n)}tradingDataFetch(t,n){this.info(`Trading data fetched from ${t}${n?` (${n} records)`:""}`)}tradingDataParsed(t,n){this.info(`Parsed ${t} trading records from ${n}`)}tradingDataError(t,n){this.error(`Trading data error from ${t}`,n)}performanceStart(t){const n=performance.now();return this.verbose(`Performance start: ${t}`),n}performanceEnd(t,n){const r=performance.now()-n;return this.debug(`Performance end: ${t} (${r.toFixed(2)}ms)`),r}summary(t,n){this.info(`Summary: ${t}`,n)}}const ce=new V0,Bl=()=>{var C;const[e,t]=g.useState(null),[n,r]=g.useState(!0),[a,o]=g.useState(null),[i,s]=g.useState({isFresh:!1,timeUntilNextRefresh:0,isRateLimited:!1}),l="Calculations",c="A:J",u="Coinbase Balance",h="A:D",m="Transactions Raw Data",p="T:T",y="A:F",f=g.useCallback(O=>{var M,$,A,N,D,L,U,_,F,q,H;if(!O||O.length<23)return null;try{const Z=ee=>{if(!ee)return 0;const te=ee.toString().replace(/[$,%]/g,"").trim();return parseFloat(te)||0};return{availableUSDC:Z((M=O[3])==null?void 0:M[1]),openTradingPositions:Z(($=O[4])==null?void 0:$[1]),totalAccountValue:Z((A=O[5])==null?void 0:A[1]),totalCapitalDeposited:Z((N=O[10])==null?void 0:N[1]),profitsWithdrawn:Z((D=O[11])==null?void 0:D[1]),netCapitalAtRisk:Z((L=O[12])==null?void 0:L[1]),realizedProfits:Z((U=O[17])==null?void 0:U[1]),totalTrades:Z((_=O[18])==null?void 0:_[1]),avgProfitPerTrade:Z((F=O[19])==null?void 0:F[1]),totalTradingVolume:Z((q=O[21])==null?void 0:q[1]),profitsSaved:Z((H=O[22])==null?void 0:H[1])}}catch(Z){return ce.error("Error parsing Coinbase Balance",Z),null}},[]),v=g.useCallback(O=>{if(!O||O.length<2)return 0;const M=[];for(let N=1;N<O.length;N++){const D=O[N],L=D==null?void 0:D[0];if(L&&L.toString().trim()!==""){let U=L.toString().replace(/[%]/g,"").trim();const _=parseFloat(U);if(!isNaN(_)&&_!==0){const F=_<1?_*100:_;M.push(F)}}}if(M.length===0)return 0;const A=M.reduce((N,D)=>N+D,0)/M.length;return ce.debug(`Parsed ${M.length} % gains, average: ${A.toFixed(2)}%`),A},[]),b=new Set(["BTC","FX","NCT","XRP"]),w=g.useCallback(O=>{var N,D,L,U,_,F;if(!O||O.length<2)return 0;let M=0,$=0;for(let q=1;q<O.length;q++){const H=(D=(N=O[q])==null?void 0:N[0])==null?void 0:D.toString().trim().toUpperCase(),Z=(U=(L=O[q])==null?void 0:L[1])==null?void 0:U.toString().trim().toUpperCase(),ee=(F=(_=O[q])==null?void 0:_[5])==null?void 0:F.toString().trim();!H||!ee||b.has(H)||(Z==="OPEN"?M++:Z==="CLOSE"&&$++)}const A=Math.max(0,M-$);return ce.debug(`Open positions: ${M} opened - ${$} closed = ${A} net open (excluded: ${[...b].join(", ")})`),A},[]),x=g.useCallback((O,M)=>{var Z,ee,te,Te,de,E,z,B,Y,P,R;if(ce.verbose(`Rows received: ${O==null?void 0:O.length} rows`),!O||O.length<3)return ce.warn(`FALLBACK: Not enough rows (need 3, got ${O==null?void 0:O.length})`),T();let $=null,A=-1;for(let W=O.length-1;W>=0;W--){const S=O[W],J=((Z=S==null?void 0:S[0])==null?void 0:Z.toString().toLowerCase())||"";if(ce.verbose(`Row ${W}: length=${S==null?void 0:S.length}, firstCell="${S==null?void 0:S[0]}"`),S&&S.length>=2&&J.includes("grand total")){$=S,A=W,ce.debug(`Found Grand Total at row ${W}`);break}}if(!$||$.length<2)return ce.warn("FALLBACK: Grand Total row not found or too short"),T();const N=parseFloat((ee=$[1])==null?void 0:ee.toString().replace(/[$,]/g,""))||0,D=parseInt((te=$[2])==null?void 0:te.toString().replace(/[,]/g,""))||0;ce.debug(`Grand Total: $${N}, ${D} trades`);let L=0,U=0,_=0,F=0;for(let W=A-1;W>=1;W--){const S=O[W];if(S&&S.length>=7){const J=parseFloat((Te=S[3])==null?void 0:Te.toString().replace(/[$,]/g,""))||0,X=parseFloat((de=S[4])==null?void 0:de.toString().replace(/[$,]/g,""))||0,pe=parseFloat((E=S[5])==null?void 0:E.toString().replace(/[$,]/g,""))||0,he=parseFloat((z=S[6])==null?void 0:z.toString().replace(/[$,]/g,""))||0;if(J>0||X>0||pe>0||he>0){L=J,U=X,_=pe,F=he,ce.debug(`Found calculated fields in row ${W}: ${S[0]}`);break}}}L===0&&U===0&&ce.warn("Calculated fields not found in any month row");const q=[],H=new Date().getFullYear();ce.verbose(`Parsing monthly data, rows 1 to ${A-1}`);for(let W=1;W<A;W++){const S=O[W];if(S&&S.length>=2){const J=(B=S[0])==null?void 0:B.toString().trim(),X=parseFloat((Y=S[1])==null?void 0:Y.toString().replace(/[$,]/g,""))||0,pe=parseInt((P=S[2])==null?void 0:P.toString().replace(/[,]/g,""))||0;if(J&&J!=="Grand Total"&&J!==""&&!J.toLowerCase().includes("month")){let he=J,ze=H;if(J.includes("-")){const ka=J.split("-");if(ka.length>=2){ze=parseInt(ka[0])||H;const Ta=parseInt(ka[1]);he=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][Ta]||J}}else J.length>3&&(he=J.substring(0,3));const Ct=(R=S[9])==null?void 0:R.toString().trim(),re=Ct?parseFloat(Ct):NaN,Me=!isNaN(re)&&re>=0&&re<=100?Math.round(re):void 0;q.push({month:he,year:ze,profit:X,trades:pe,fearGreed:Me}),ce.verbose(`Added month: ${he} ${ze}, profit: $${X}, trades: ${pe}${Me!==void 0?`, F&G: ${Me}`:""}`)}}}return ce.tradingDataParsed(q.length,"Calculations"),{totalProfit:N,totalTrades:D,avgProfitPerTrade:L,monthlyAverage:U,dailyAvg:_,bestMonthProfit:F,avgPercentGain:0,openPositionCount:0,monthlyData:q,isLiveData:!0,lastUpdated:M}},[]),T=()=>{ce.error("USING MOCK DATA - API parsing failed! Site is showing fallback data instead of real data.");const O=[{month:"Sep",year:2024,profit:312.45,trades:68,fearGreed:39},{month:"Oct",year:2024,profit:445.89,trades:92,fearGreed:56},{month:"Nov",year:2024,profit:523.12,trades:105,fearGreed:78},{month:"Dec",year:2024,profit:398.67,trades:84,fearGreed:73},{month:"Jan",year:2025,profit:477.23,trades:89,fearGreed:65},{month:"Feb",year:2025,profit:686.71,trades:124,fearGreed:49},{month:"Mar",year:2025,profit:261.97,trades:67,fearGreed:34},{month:"Apr",year:2025,profit:552.58,trades:98,fearGreed:28},{month:"May",year:2025,profit:376.3,trades:82,fearGreed:42},{month:"Jun",year:2025,profit:382.97,trades:91,fearGreed:55},{month:"Jul",year:2025,profit:817.31,trades:156,fearGreed:72},{month:"Aug",year:2025,profit:350.32,trades:78,fearGreed:58}],M=O.reduce((A,N)=>A+N.profit,0),$=O.reduce((A,N)=>A+N.trades,0);return{totalProfit:M,totalTrades:$,avgProfitPerTrade:$>0?M/$:0,monthlyAverage:O.length>0?M/O.length:0,dailyAvg:15.5,bestMonthProfit:Math.max(...O.map(A=>A.profit)),avgPercentGain:2.35,openPositionCount:42,monthlyData:O,isLiveData:!1,lastUpdated:new Date().toISOString()}},k=g.useCallback(async(O=!1)=>{var M;try{r(!0),o(null);const $="1Q8I0kU3TinicEOZCgBjisRbktIOryaKnJ2GaBncxako",A="AIzaSyDNQznjzn8BijyHJWWOesvggVc31FFK-LA",N="enhanced_stats";if(!O){const B=bt.get(N);if(B&&B.openPositionCount!==void 0){ce.cacheHit(N,"tradingDataCache"),t(B),s({isFresh:!0,timeUntilNextRefresh:bt.getTimeUntilExpiration(N),isRateLimited:!1}),r(!1);return}B&&B.openPositionCount===void 0?ce.debug("Cache invalidated: missing openPositionCount field"):ce.cacheMiss(N,"tradingDataCache")}const D=new Date().toISOString(),[L,U,_,F]=await Promise.allSettled([fetch(`https://sheets.googleapis.com/v4/spreadsheets/${$}/values/${l}!${c}?key=${A}`),fetch(`https://sheets.googleapis.com/v4/spreadsheets/${$}/values/${u}!${h}?key=${A}`),fetch(`https://sheets.googleapis.com/v4/spreadsheets/${$}/values/${m}!${p}?key=${A}`),fetch(`https://sheets.googleapis.com/v4/spreadsheets/${$}/values/${m}!${y}?key=${A}`)]);ce.debug(`Calculations API response status: ${L.status}`);const q=L.status==="fulfilled"?await L.value.json():null;q?ce.tradingDataFetch("Google Sheets Calculations",(M=q.values)==null?void 0:M.length):ce.error("Calculations API call failed completely");const H=q!=null&&q.values?x(q.values,D):T();ce.info(`Using ${H.isLiveData?"LIVE DATA":"MOCK DATA"}`);const Z=U.status==="fulfilled"?await U.value.json():null,ee=Z?f(Z.values||[]):null,te=_.status==="fulfilled"?await _.value.json():null,Te=te!=null&&te.values?v(te.values):0,de=F.status==="fulfilled"?await F.value.json():null,E=de!=null&&de.values?w(de.values):0,z={...H,avgPercentGain:Te,openPositionCount:E,portfolioSummary:ee||void 0};bt.set(N,z),ce.cacheSet(N),t(z),s({isFresh:!0,timeUntilNextRefresh:bt.getTimeUntilExpiration(N),isRateLimited:!1})}catch($){ce.error("Error fetching enhanced trading stats",$),o($ instanceof Error?$.message:"Failed to load trading data");const A=I();t(A)}finally{r(!1)}},[x,f,v,w]),I=()=>{ce.debug("Using mock data with 2024+2025 for multi-year test");const O=[{month:"Sep",year:2024,profit:312.45,trades:68,fearGreed:39},{month:"Oct",year:2024,profit:445.89,trades:92,fearGreed:56},{month:"Nov",year:2024,profit:523.12,trades:105,fearGreed:78},{month:"Dec",year:2024,profit:398.67,trades:84,fearGreed:73},{month:"Jan",year:2025,profit:477.23,trades:89,fearGreed:65},{month:"Feb",year:2025,profit:686.71,trades:124,fearGreed:49},{month:"Mar",year:2025,profit:261.97,trades:67,fearGreed:34},{month:"Apr",year:2025,profit:552.58,trades:98,fearGreed:28},{month:"May",year:2025,profit:376.3,trades:82,fearGreed:42},{month:"Jun",year:2025,profit:382.97,trades:91,fearGreed:55},{month:"Jul",year:2025,profit:817.31,trades:156,fearGreed:72},{month:"Aug",year:2025,profit:350.32,trades:78,fearGreed:58},{month:"Sep",year:2025,profit:425.6,trades:88,fearGreed:44},{month:"Oct",year:2025,profit:512.45,trades:102,fearGreed:61},{month:"Nov",year:2025,profit:389.2,trades:76,fearGreed:52},{month:"Dec",year:2025,profit:298.5,trades:62,fearGreed:35}],M=O.reduce((A,N)=>A+N.profit,0),$=O.reduce((A,N)=>A+N.trades,0);return{totalProfit:M,totalTrades:$,avgProfitPerTrade:$>0?M/$:0,monthlyAverage:O.length>0?M/O.length:0,dailyAvg:15.5,bestMonthProfit:686.71,avgPercentGain:2.35,openPositionCount:42,monthlyData:O,isLiveData:!1,lastUpdated:new Date().toISOString(),portfolioSummary:void 0}};return g.useEffect(()=>{k()},[k]),{tradingStats:e,isLoading:n,error:a,refreshStats:()=>k(!0),cacheInfo:i,cacheStats:((C=bt==null?void 0:bt.getStats)==null?void 0:C.call(bt))||{hits:0,misses:0,size:0}}},J0=({title:e="MyRoboticTrader - Set It and Forget It Crypto Trading | Build New Revenue Streams",description:t="Discover how I built multiple revenue streams with AI-Enhanced autonomous robotic crypto trading. Real results, proven system. Start your automated trading journey today.",keywords:n="robotic trading, crypto trading, automated trading, passive income, cryptocurrency, trading bot, AI trading, revenue streams",ogTitle:r="MyRoboticTrader - Set It and Forget It Crypto Trading | Build New Revenue Streams",ogDescription:a="Discover how I built multiple revenue streams with AI-Enhanced autonomous robotic crypto trading. Real results, proven system.",ogImage:o="https://5defe27d.myrobotictrader.pages.dev/og-image.png",twitterTitle:i="MyRoboticTrader - Set It and Forget It Crypto Trading | Build New Revenue Streams",twitterDescription:s="Discover how I built multiple revenue streams with AI-Enhanced autonomous robotic crypto trading. Real results, proven system.",twitterImage:l="https://myrobotictrader.com/robot-twitter.png",canonicalUrl:c="https://myrobotictrader.com/",pageType:u="home"})=>(g.useEffect(()=>{document.title=e;const h=(x,T,k)=>{const I=k?`meta[property="${x}"]`:`meta[name="${x}"]`;let C=document.querySelector(I);C||(C=document.createElement("meta"),k?C.setAttribute("property",x):C.setAttribute("name",x),document.head.appendChild(C)),C.setAttribute("content",T)},m=(x,T)=>{let k=document.querySelector(`link[rel="${x}"]`);k||(k=document.createElement("link"),k.setAttribute("rel",x),document.head.appendChild(k)),k.setAttribute("href",T)};h("title",e),h("description",t),h("keywords",n),h("og:type","website",!0),h("og:url",c,!0),h("og:title",r,!0),h("og:description",a,!0),h("og:image",o,!0),h("og:site_name","MyRoboticTrader",!0),h("twitter:card","summary_large_image",!0),h("twitter:url",c,!0),h("twitter:title",i,!0),h("twitter:description",s,!0),h("twitter:image",l,!0),m("canonical",c),document.querySelectorAll('script[type="application/ld+json"]').forEach(x=>{var T;(T=x.id)!=null&&T.startsWith("structured-data-")&&x.remove()});const y=(x,T)=>{const k=document.createElement("script");k.type="application/ld+json",k.id=`structured-data-${T}`,k.textContent=JSON.stringify(x,null,2),document.head.appendChild(k)},f={"@context":"https://schema.org","@type":"WebSite",name:"MyRoboticTrader",alternateName:"My Robotic Trader",url:c,description:t,author:{"@type":"Person",name:"Patrick Jenkins",jobTitle:"Automated Trading Specialist",knowsAbout:["Cryptocurrency Trading","Automated Trading Systems","AI Trading","Passive Income"]},potentialAction:{"@type":"SearchAction",target:{"@type":"EntryPoint",urlTemplate:`${c}search?q={search_term_string}`},"query-input":"required name=search_term_string"}},v={"@context":"https://schema.org","@type":"Organization",name:"MyRoboticTrader",url:c,logo:{"@type":"ImageObject",url:"https://myrobotictrader.com/favicon-32x32.png",width:32,height:32},description:"Leading platform for AI-enhanced autonomous cryptocurrency trading",foundingDate:"2025",founder:{"@type":"Person",name:"Patrick Jenkins"},contactPoint:{"@type":"ContactPoint",contactType:"customer service",email:"support@myrobotictrader.com"},areaServed:"Worldwide",serviceType:"Automated Trading Platform"},b={"@context":"https://schema.org","@type":"Person",name:"Patrick Jenkins",jobTitle:"Automated Trading Specialist & Founder",worksFor:{"@type":"Organization",name:"MyRoboticTrader"},knowsAbout:["Cryptocurrency Trading","Automated Trading Systems","AI Trading Algorithms","Passive Income Generation","Risk Management","Financial Technology"],description:"Expert in AI-enhanced autonomous cryptocurrency trading with proven track record of building sustainable revenue streams",url:c},w={"@context":"https://schema.org","@type":"FAQPage",mainEntity:[{"@type":"Question",name:"How does automated crypto trading work?",acceptedAnswer:{"@type":"Answer",text:"Our AI-enhanced robotic trading system analyzes market conditions 24/7 and executes trades based on proven algorithms. The system runs autonomously, requiring no manual intervention while building sustainable revenue streams."}},{"@type":"Question",name:"Is automated trading safe?",acceptedAnswer:{"@type":"Answer",text:"Yes, when done properly with robust risk management. Our system includes built-in safety features like stop losses, position sizing, and maximum drawdown limits to protect your capital."}},{"@type":"Question",name:"How much money do I need to start?",acceptedAnswer:{"@type":"Answer",text:"You can start with as little as $1,000, though we recommend at least $5,000 for better diversification and risk management. The system scales with your account size."}}]};if(u==="home"){const x={"@context":"https://schema.org","@type":"Article",headline:"AI-Enhanced Autonomous Robotic Crypto Trading Results",description:t,author:{"@type":"Person",name:"Patrick Jenkins"},publisher:{"@type":"Organization",name:"MyRoboticTrader",logo:{"@type":"ImageObject",url:o}},datePublished:"2025-01-08",dateModified:new Date().toISOString().split("T")[0],mainEntityOfPage:{"@type":"WebPage","@id":c},image:{"@type":"ImageObject",url:o,width:1200,height:630},articleSection:"Trading Results",keywords:n};y(x,"article")}u==="resources"&&y({"@context":"https://schema.org","@type":"Course",name:"AI-Enhanced Autonomous Crypto Trading with GoBabyTrade",description:"Comprehensive resources and tools for automated cryptocurrency trading with GoBabyTrade",provider:{"@type":"Organization",name:"MyRoboticTrader"},instructor:{"@type":"Person",name:"Patrick Jenkins"},courseMode:"online",educationalLevel:"Beginner to Advanced",about:"Automated Trading, Cryptocurrency, AI Trading Systems, GoBabyTrade"},"course"),y(f,"website"),y(v,"organization"),y(b,"person"),y(w,"faq")},[e,t,n,r,a,o,i,s,l,c,u]),null),Z0=()=>(g.useEffect(()=>{const e=()=>{const n=document.head;n.querySelectorAll('meta[data-dynamic="true"]').forEach(i=>i.remove()),[{name:"title",content:"MyRoboticTrader | AI Crypto Trading with Verified Results"},{name:"description",content:"Discover how I built multiple revenue streams with AI-Enhanced autonomous robotic crypto trading. Real results, proven system. Start your automated trading journey today."},{name:"keywords",content:"robotic trading, crypto trading, automated trading, passive income, cryptocurrency, trading bot, AI trading, revenue streams"},{name:"robots",content:"index, follow"},{name:"author",content:"Patrick Jenkins"},{name:"theme-color",content:"#8B5CF6"},{property:"og:type",content:"website"},{property:"og:url",content:"https://myrobotictrader.com/"},{property:"og:title",content:"MyRoboticTrader | AI Crypto Trading with Verified Results"},{property:"og:description",content:"Discover how I built multiple revenue streams with AI-Enhanced autonomous robotic crypto trading. Real results, proven system."},{property:"og:image",content:"https://myrobotictrader.com/og-image.png"},{property:"og:image:width",content:"1200"},{property:"og:image:height",content:"630"},{property:"og:image:type",content:"image/png"},{property:"og:site_name",content:"MyRoboticTrader"},{property:"og:locale",content:"en_US"},{property:"twitter:card",content:"summary_large_image"},{property:"twitter:site",content:"@myrobotictrader"},{property:"twitter:creator",content:"@myrobotictrader"},{property:"twitter:url",content:"https://myrobotictrader.com/"},{property:"twitter:title",content:"MyRoboticTrader | AI Crypto Trading with Verified Results"},{property:"twitter:description",content:"Discover how I built multiple revenue streams with AI-Enhanced autonomous robotic crypto trading. Real results, proven system."},{property:"twitter:image",content:"https://myrobotictrader.com/twitter-image.png"},{property:"twitter:image:alt",content:"MyRoboticTrader - Automated Crypto Trading Results"},{property:"linkedin:owner",content:"Patrick Jenkins"},{property:"og:image:secure_url",content:"https://myrobotictrader.com/og-image.png"}].forEach(({name:i,property:s,content:l})=>{const c=document.createElement("meta");c.setAttribute("data-dynamic","true"),i?c.setAttribute("name",i):s&&c.setAttribute("property",s),c.setAttribute("content",l),n.appendChild(c)}),document.title="MyRoboticTrader | AI Crypto Trading with Verified Results";let o=n.querySelector('link[rel="canonical"]');o||(o=document.createElement("link"),o.setAttribute("rel","canonical"),o.setAttribute("data-dynamic","true"),n.appendChild(o)),o.setAttribute("href","https://myrobotictrader.com/")};e(),setTimeout(e,100),(()=>{document.querySelectorAll('script[type="application/ld+json"][data-static="true"]').forEach(a=>a.remove()),[{id:"website-static",data:{"@context":"https://schema.org","@type":"WebSite",name:"MyRoboticTrader",alternateName:"My Robotic Trader",url:"https://myrobotictrader.com/",description:"Discover how I built multiple revenue streams with AI-Enhanced autonomous robotic crypto trading. Real results, proven system.",author:{"@type":"Person",name:"Patrick Jenkins",jobTitle:"Automated Trading Specialist"}}},{id:"organization-static",data:{"@context":"https://schema.org","@type":"Organization",name:"MyRoboticTrader",url:"https://myrobotictrader.com/",logo:{"@type":"ImageObject",url:"https://myrobotictrader.com/og-image.png",width:1200,height:630},description:"Leading platform for AI-enhanced autonomous cryptocurrency trading",founder:{"@type":"Person",name:"Patrick Jenkins"}}}].forEach(({id:a,data:o})=>{const i=document.createElement("script");i.type="application/ld+json",i.setAttribute("data-static","true"),i.id=a,i.textContent=JSON.stringify(o,null,2),document.head.appendChild(i)})})()},[]),null),X0=()=>{const e=g.useRef(null);return g.useEffect(()=>{setTimeout(()=>{const n=e.current;if(!n)return;const r=n.getContext("2d");if(!r)return;n.width=1200,n.height=630;const a=r.createLinearGradient(0,0,1200,630);a.addColorStop(0,"#0f172a"),a.addColorStop(.5,"#7c3aed"),a.addColorStop(1,"#0f172a"),r.fillStyle=a,r.fillRect(0,0,1200,630),r.fillStyle="rgba(139, 92, 246, 0.1)",r.beginPath(),r.arc(200,150,100,0,Math.PI*2),r.fill(),r.fillStyle="rgba(236, 72, 153, 0.1)",r.beginPath(),r.arc(1e3,480,120,0,Math.PI*2),r.fill(),r.fillStyle="#ffffff",r.font="bold 64px Arial, sans-serif",r.textAlign="center",r.fillText("MyRoboticTrader",600,200),r.font="36px Arial, sans-serif",r.fillStyle="#e2e8f0",r.fillText("Set It and Forget It Crypto Trading",600,260),r.font="bold 48px Arial, sans-serif",r.fillStyle="#10b981",r.fillText("$12,450 Total Profits",600,350),r.font="28px Arial, sans-serif",r.fillStyle="#a78bfa",r.fillText("Real Results • 8+ Months Trading • Always Growing",600,400),r.font="bold 32px Arial, sans-serif",r.fillStyle="#fbbf24",r.fillText("Get Free Training Now",600,500),r.fillStyle="#8b5cf6",r.fillRect(550,520,100,60),r.fillStyle="#ffffff",r.font="bold 36px Arial, sans-serif",r.textAlign="center",r.fillText("R",600,560),n.toBlob(o=>{if(o){const i=URL.createObjectURL(o),s=document.querySelector('meta[property="og:image"]'),l=document.querySelector('meta[property="twitter:image"]');s&&s.setAttribute("content",i),l&&l.setAttribute("content",i)}},"image/png",.9)},100)},[]),d.jsx("canvas",{ref:e,style:{display:"none"},width:1200,height:630})};var Q0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const ew=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),tw=(e,t)=>{const n=g.forwardRef(({color:r="currentColor",size:a=24,strokeWidth:o=2,absoluteStrokeWidth:i,children:s,...l},c)=>g.createElement("svg",{ref:c,...Q0,width:a,height:a,stroke:r,strokeWidth:i?Number(o)*24/Number(a):o,className:`lucide lucide-${ew(e)}`,...l},[...t.map(([u,h])=>g.createElement(u,h)),...(Array.isArray(s)?s:[s])||[]]));return n.displayName=`${e}`,n};var Q=tw;const nw=Q("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]),rw=Q("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]),qe=Q("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),aw=Q("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]),kp=Q("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]),ow=Q("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]),Rl=Q("Bot",[["rect",{width:"18",height:"10",x:"3",y:"11",rx:"2",key:"1ofdy3"}],["circle",{cx:"12",cy:"5",r:"2",key:"f1ur92"}],["path",{d:"M12 7v4",key:"xawao1"}],["line",{x1:"8",x2:"8",y1:"16",y2:"16",key:"h6x27f"}],["line",{x1:"16",x2:"16",y1:"16",y2:"16",key:"5lty7f"}]]),Yo=Q("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]),qa=Q("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["polyline",{points:"22 4 12 14.01 9 11.01",key:"6xbx8j"}]]),iw=Q("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),$u=Q("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),Du=Q("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),sw=Q("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]),Zr=Q("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]),lw=Q("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]),Xr=Q("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]),cw=Q("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]),Bu=Q("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]),uw=Q("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]),dw=Q("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),hw=Q("Gift",[["polyline",{points:"20 12 20 22 4 22 4 12",key:"nda8fc"}],["rect",{width:"20",height:"5",x:"2",y:"7",key:"wkgdzj"}],["line",{x1:"12",x2:"12",y1:"22",y2:"7",key:"1n8zgp"}],["path",{d:"M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z",key:"zighg4"}],["path",{d:"M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z",key:"1pa5tk"}]]),mw=Q("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]),pw=Q("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),gw=Q("Layers",[["polygon",{points:"12 2 2 7 12 12 22 7 12 2",key:"1b0ttc"}],["polyline",{points:"2 17 12 22 22 17",key:"imjtdl"}],["polyline",{points:"2 12 12 17 22 12",key:"5dexcv"}]]),yw=Q("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]),fw=Q("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),vw=Q("Percent",[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]]),bw=Q("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]),ww=Q("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]),Qr=Q("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",key:"3xmgem"}]]),er=Q("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]),mt=Q("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]),xw=Q("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]),kw=Q("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]),Tw=Q("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),Tp=Q("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),Iw=Q("Wifi",[["path",{d:"M5 13a10 10 0 0 1 14 0",key:"6v8j51"}],["path",{d:"M8.5 16.5a5 5 0 0 1 7 0",key:"sej527"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["line",{x1:"12",x2:"12.01",y1:"20",y2:"20",key:"of4bc4"}]]),Aw=Q("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),$r=Q("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),Sw=()=>{const e=[{Icon:Rl,delay:"0s",position:"top-20 left-20"},{Icon:mt,delay:"2s",position:"top-32 right-32"},{Icon:Qr,delay:"4s",position:"bottom-40 left-16"},{Icon:Zr,delay:"1s",position:"bottom-32 right-20"},{Icon:$r,delay:"3s",position:"top-1/2 left-8"},{Icon:Xr,delay:"5s",position:"top-1/3 right-8"}];return d.jsx(d.Fragment,{children:e.map(({Icon:t,delay:n,position:r},a)=>d.jsx("div",{className:`absolute ${r} opacity-20 pointer-events-none hidden lg:block animate-float-subtle`,style:{animationDelay:n},children:d.jsx("div",{className:"w-8 h-8 text-purple-300",children:d.jsx(t,{className:"w-full h-full"})})},a))})},Pw=()=>{const e=new Date(2025,0,8),t=new Date;let n=(t.getFullYear()-e.getFullYear())*12;return n+=t.getMonth()-e.getMonth(),t.getDate()<e.getDate()&&n--,Math.max(0,n)},Nw=()=>{const{tradingStats:e,isLoading:t}=Bl(),n=Pw(),r=()=>{Ho("start_trading_save_1000","hero"),zo("/go/gobabytrade?from=hero","Start Trading Save $1000")};return d.jsxs("section",{className:"relative min-h-screen flex items-center justify-center px-4 overflow-hidden pb-10 pt-10",children:[d.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"}),d.jsx("div",{className:"absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-purple-500/15 to-transparent"}),d.jsx(Sw,{}),d.jsxs("div",{className:"relative max-w-6xl mx-auto text-center z-10 mt-32",children:[d.jsxs("div",{className:"mb-8",children:[d.jsxs("div",{className:"inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full px-4 py-2 border border-purple-400/40 mb-2 mt-4 shadow-lg shadow-purple-500/20",children:[d.jsx(Rl,{className:"w-4 h-4 text-purple-300"}),d.jsx("span",{className:"text-purple-200 font-medium",children:"AI-Enhanced Autonomous Trading"})]}),d.jsxs("p",{className:"text-sm text-gray-400 mb-4",children:["Powered by"," ",d.jsx("a",{href:"/go/gobabytrade?from=hero-badge",target:"_blank",rel:"noopener noreferrer",className:"text-purple-300 hover:text-purple-200 transition-colors",children:"GoBabyTrade"})]}),d.jsxs("h1",{className:"text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight px-4",children:[d.jsxs("span",{className:"block md:hidden",children:["Building Revenue Streams",d.jsx("span",{className:"block text-transparent bg-gradient-to-r from-green-300 via-blue-400 to-purple-400 bg-clip-text",children:"Without Watching Charts"})]}),d.jsxs("span",{className:"hidden md:block",children:["How I'm Building Multiple",d.jsx("span",{className:"block text-transparent bg-gradient-to-r from-green-300 via-blue-400 to-purple-400 bg-clip-text",children:"Revenue Streams"}),d.jsx("span",{className:"block text-white",children:"Without Watching Charts"})]})]}),d.jsx("p",{className:"text-lg sm:text-xl md:text-2xl text-gray-200 mb-4 max-w-4xl mx-auto px-4",children:t?d.jsx("span",{className:"text-gray-300",children:"Loading live results..."}):d.jsxs(d.Fragment,{children:[d.jsxs("span",{className:"text-green-300 font-bold",children:["$",e==null?void 0:e.totalProfit.toLocaleString("en-US",{minimumFractionDigits:0,maximumFractionDigits:0}),"+ profit"]})," ","in"," ",d.jsxs("span",{className:"text-blue-300 font-bold",children:[n,"+ months"]})," ","using AI-enhanced autonomous trading most people don't know exists."]})}),d.jsx("p",{className:"text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto px-4",children:"See my live results below."})]}),d.jsx("div",{className:"flex flex-col sm:flex-row gap-4 justify-center mb-16",children:d.jsxs("a",{href:"/go/gobabytrade?from=hero",onClick:r,target:"_blank",rel:"noopener noreferrer",className:"group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-purple-500/30 flex items-center justify-center gap-2",children:["Start Trading – Save $1,000",d.jsx(qe,{className:"w-5 h-5 group-hover:translate-x-1 transition-transform"})]})}),d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10",children:[d.jsxs("div",{className:"group relative bg-slate-800/80 rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-green-500/15",children:[d.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"}),d.jsx("div",{className:"relative w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/40",children:d.jsx(Qr,{className:"w-full h-full text-white"})}),d.jsx("div",{className:"relative text-center",children:t?d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"text-2xl font-bold text-green-300 mb-2 animate-pulse",children:"Loading..."}),d.jsx("div",{className:"text-gray-200 font-medium",children:"Total Profit"})]}):d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"text-4xl font-bold text-green-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-300 group-hover:to-emerald-300 group-hover:bg-clip-text transition-all duration-300",children:["$",e==null?void 0:e.totalProfit.toLocaleString("en-US",{minimumFractionDigits:0,maximumFractionDigits:0}),"+"]}),d.jsx("div",{className:"text-gray-200 font-medium group-hover:text-white transition-colors duration-300",children:"Total Profit"}),(e==null?void 0:e.isLiveData)&&d.jsxs("div",{className:"mt-2 flex items-center justify-center gap-1",children:[d.jsx("div",{className:"w-2 h-2 bg-green-400 rounded-full animate-pulse"}),d.jsx("span",{className:"text-xs text-green-300",children:"LIVE"})]})]})}),d.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"})]}),d.jsxs("div",{className:"group relative bg-slate-800/80 rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-blue-500/15",children:[d.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"}),d.jsx("div",{className:"relative w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/40",children:d.jsx(Zr,{className:"w-full h-full text-white"})}),d.jsx("div",{className:"relative text-center",children:t?d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"text-2xl font-bold text-blue-300 mb-2 animate-pulse",children:"Loading..."}),d.jsx("div",{className:"text-gray-200 font-medium",children:"Profitable"})]}):d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"text-4xl font-bold text-blue-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-cyan-300 group-hover:bg-clip-text transition-all duration-300",children:[n,"+ Months"]}),d.jsx("div",{className:"text-gray-200 font-medium group-hover:text-white transition-colors duration-300",children:"Profitable"})]})}),d.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"})]}),d.jsxs("div",{className:"group relative bg-slate-800/80 rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-purple-500/15",children:[d.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"}),d.jsx("div",{className:"relative w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/40",children:d.jsx(Tp,{className:"w-full h-full text-white"})}),d.jsxs("div",{className:"relative text-center",children:[d.jsx("div",{className:"text-4xl font-bold text-purple-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 group-hover:bg-clip-text transition-all duration-300",children:"Zero"}),d.jsx("div",{className:"text-gray-200 font-medium group-hover:text-white transition-colors duration-300",children:"Losing Months"})]}),d.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"})]})]}),d.jsx("div",{className:"max-w-2xl mx-auto",children:d.jsx("img",{src:"/graphics/homepage-hero-01.webp",alt:"Set It and Forget It - Manual Trading vs Autonomous Trading comparison",className:"w-full rounded-2xl shadow-2xl shadow-purple-500/20 border border-white/10"})})]})]})},Aa=new Date(2025,0,8),Ip=()=>{const e=new Date;let t=(e.getFullYear()-Aa.getFullYear())*12;t+=e.getMonth()-Aa.getMonth();let n=e.getDate()-Aa.getDate();if(n<0){t--;const r=new Date(e.getFullYear(),e.getMonth(),0);n+=r.getDate()}if(t>=1)return n>0?`${t} month${t>1?"s":""}, ${n} day${n>1?"s":""}`:`${t} month${t>1?"s":""}`;{const r=Math.abs(e.getTime()-Aa.getTime()),a=Math.ceil(r/(1e3*60*60*24));return`${a} day${a>1?"s":""}`}},jw=({tradingStats:e})=>{var i;const t=Ip(),r=e||{totalProfit:12450,totalTrades:1247,isLiveData:!1,dailyAvg:89},a=((i=e==null?void 0:e.dailyAvg)==null?void 0:i.toFixed(0))||"89",o=e!==null;return d.jsxs("section",{className:"py-16 px-4 relative overflow-hidden",children:[d.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"}),d.jsxs("div",{className:"relative max-w-6xl mx-auto",children:[d.jsxs("div",{className:"text-center mb-12",children:[d.jsxs("div",{className:"inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full px-4 py-2 border border-blue-400/40 mb-6 shadow-lg shadow-blue-500/20",children:[d.jsx(Tw,{className:"w-4 h-4 text-blue-300"}),d.jsx("span",{className:"text-blue-200 font-medium",children:"My Story"})]}),d.jsxs("h2",{className:"text-3xl md:text-5xl font-bold text-white mb-6",children:["Hi, I'm Patrick",d.jsx("span",{className:"block text-transparent bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text",children:"Here's How I Discovered This System"})]})]}),d.jsxs("div",{className:"bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-400/20 p-8 shadow-lg shadow-blue-500/10 mb-8",children:[d.jsx("img",{src:"/patrick-and-moses.jpeg",alt:"Patrick Jenkins with Moses",className:"hidden lg:block float-right ml-8 mb-6 w-80 h-80 rounded-2xl object-cover border-4 border-white/20 shadow-2xl shadow-purple-500/20"}),d.jsx("div",{className:"lg:hidden flex justify-center mb-8",children:d.jsx("img",{src:"/patrick-and-moses.jpeg",alt:"Patrick Jenkins with Moses",className:"w-64 h-64 rounded-2xl object-cover border-4 border-white/20 shadow-2xl shadow-purple-500/20"})}),d.jsxs("div",{className:"text-lg text-gray-200 leading-relaxed",children:[d.jsxs("h3",{className:"text-2xl font-bold text-blue-300 mb-4 flex items-center gap-2",children:[d.jsx(er,{className:"w-6 h-6"}),"My Journey Started Like Yours"]}),d.jsx("p",{className:"mb-6",children:"I've been following the markets since 2014, and I genuinely love investing. I did okay with my stock investments, but tracking individual stocks became incredibly tedious. I got frustrated with mutual funds because of their fees and average returns - even index funds weren't delivering what I hoped for. Target date funds? Don't get me started on those."}),d.jsxs("h3",{className:"text-2xl font-bold text-blue-300 mb-4 flex items-center gap-2",children:[d.jsx(Xr,{className:"w-6 h-6"}),"Chasing the Dream of Extra Income"]}),d.jsxs("p",{className:"mb-4",children:[d.jsx("span",{className:"text-blue-200 font-semibold",children:"Like many of you, I've always wanted to make extra income in addition to my 9-to-5 job."})," ","Over the years, I invested tens of thousands in various courses and systems - email marketing, affiliate marketing, Amazon wholesale, you name it. Some methods seemed unreliable, and honestly, part of the problem was probably me not putting in full effort or knowing how to position myself properly."]}),d.jsx("p",{className:"mb-6",children:`I was tired of chasing the next "breakthrough" system. Tired of complex strategies that required constant attention. Tired of watching opportunities slip by because I was stuck at work or didn't have time to analyze the market.`}),d.jsxs("h3",{className:"text-2xl font-bold text-yellow-300 mb-4 flex items-center gap-2",children:[d.jsx(yw,{className:"w-6 h-6"}),"Then Everything Changed"]}),d.jsxs("p",{className:"mb-4",children:["So when I discovered this autonomous trading system while researching new opportunities, my first thought was:"," ",d.jsx("span",{className:"italic text-yellow-200 font-semibold",children:`"Here's just another system promising easy money."`})," ","I was naturally skeptical - and you should be too."]}),d.jsxs("p",{className:"mb-6",children:[d.jsx("span",{className:"text-green-300 font-bold",children:"But this one is truly automated!"})," ","I set it up, connected my exchange accounts with trading-only API permissions, and started with a small amount to test it. The autonomous trader trades while I'm working, sleeping, or spending time with family."]}),d.jsxs("h3",{className:"text-2xl font-bold text-green-300 mb-4 flex items-center gap-2",children:[d.jsx(mt,{className:"w-6 h-6"}),"The Results Speak for Themselves"]}),d.jsxs("p",{className:"mb-4",children:[d.jsxs("span",{className:"text-green-400 font-bold text-xl",children:["In just ",t,", my system has generated $",r.totalProfit.toLocaleString()," in realized profits."]})," ","That's an average of"," ",d.jsxs("span",{className:"text-green-300 font-semibold",children:["$",a," per day"]})," ","- money that's been withdrawn and spent on real life."]}),d.jsx("p",{className:"mb-6",children:`This isn't paper gains or "what if" projections. This is actual cash that I use for every day living. As of now, it's giving me the extra money to spend for every day expenses and save for emergencies. I'm also reinvesting a portion of my profits to scale my investment capital.`}),d.jsxs("h3",{className:"text-2xl font-bold text-pink-300 mb-4 flex items-center gap-2",children:[d.jsx(mw,{className:"w-6 h-6"}),"The Best Part: Time with Moses"]}),d.jsx("div",{className:"lg:hidden flex justify-center mb-6",children:d.jsx("img",{src:"/moses-sprinkler.jpeg",alt:"Moses enjoying the sprinkler",className:"w-64 h-64 rounded-2xl object-cover border-4 border-white/20 shadow-2xl shadow-purple-500/20"})}),d.jsx("div",{className:"hidden lg:block",style:{float:"left",marginRight:"2rem",marginBottom:"1.5rem",width:"320px",height:"320px"},children:d.jsx("img",{src:"/moses-sprinkler.jpeg",alt:"Moses enjoying the sprinkler",className:"w-full h-full rounded-2xl object-cover border-4 border-white/20 shadow-2xl shadow-purple-500/20"})}),d.jsxs("p",{className:"mb-4",children:[d.jsx("span",{className:"text-pink-200 font-semibold",children:"I recently got a new dog named Moses, and this automated system gives me something priceless: time."})," ","While my trader works 24/7—executing trades, taking profits, managing positions—I'm at the park with Moses. I'm not glued to charts or stressed about missing opportunities."]}),d.jsx("p",{className:"mb-4",children:`That's what "Set It and Forget It" really means. The system handles everything while I actually live my life. No more choosing between making money and spending time with those I love. I get both.`}),d.jsx("p",{className:"mb-4",children:"Moses and I go to the park almost every day now. Whether it's morning walks, afternoon sprinkler sessions, or just lounging in the yard, I'm actually present for these moments. The autonomous trader is working in the background, but my focus is where it should be—on the simple joys that make life worth living."}),d.jsx("p",{className:"mb-6",children:"This is the freedom I always wanted: the ability to generate income without being chained to a screen, constantly watching markets and second-guessing decisions. The system does the work. I enjoy the life."}),d.jsxs("h3",{className:"text-2xl font-bold text-blue-300 mb-4 flex items-center gap-2",children:[d.jsx(qa,{className:"w-6 h-6"}),"Why I'm Sharing This With You"]}),d.jsx("p",{className:"mb-4",children:"I see people struggling with finances every day - having too much month left at the end of the money. Working overtime just to stay afloat. Missing out on time with family because they need that extra shift."}),d.jsxs("p",{className:"mb-6",children:[d.jsx("span",{className:"text-blue-200 font-semibold",children:"This platform could genuinely help, but not many people know about it."})," ",`That's why I built this site and share what's working for me. As you can see, my total profits are not breaking any records, but it's consistent and reliable - It's truly "Set It and Forget It." My trader only takes what the market GIVES. I'm not a financial guru or marketing expert - I'm just someone who found something that works and wants to help others discover it too.`]})]}),d.jsx("div",{className:"clear-both"})]}),d.jsxs("div",{className:"text-center bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl border border-purple-400/20 p-8",children:[d.jsxs("p",{className:"text-gray-200 max-w-3xl mx-auto text-lg leading-relaxed",children:[d.jsx("span",{className:"text-white font-semibold",children:"Here's the truth:"})," ","I'm not a financial advisor, and I can't promise you'll get the same results I have. But I can show you exactly what's working for me, with real numbers that are updated"," ",o?"live":"regularly"," from my actual trading accounts below."]}),d.jsx("p",{className:"text-blue-300 mt-4 font-medium",children:"If you're ready to explore a different path to financial growth, keep reading."})]})]})]})};function Ap(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(n=Ap(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function ie(){for(var e,t,n=0,r="",a=arguments.length;n<a;n++)(e=arguments[n])&&(t=Ap(e))&&(r&&(r+=" "),r+=t);return r}var Ow=["dangerouslySetInnerHTML","onCopy","onCopyCapture","onCut","onCutCapture","onPaste","onPasteCapture","onCompositionEnd","onCompositionEndCapture","onCompositionStart","onCompositionStartCapture","onCompositionUpdate","onCompositionUpdateCapture","onFocus","onFocusCapture","onBlur","onBlurCapture","onChange","onChangeCapture","onBeforeInput","onBeforeInputCapture","onInput","onInputCapture","onReset","onResetCapture","onSubmit","onSubmitCapture","onInvalid","onInvalidCapture","onLoad","onLoadCapture","onError","onErrorCapture","onKeyDown","onKeyDownCapture","onKeyPress","onKeyPressCapture","onKeyUp","onKeyUpCapture","onAbort","onAbortCapture","onCanPlay","onCanPlayCapture","onCanPlayThrough","onCanPlayThroughCapture","onDurationChange","onDurationChangeCapture","onEmptied","onEmptiedCapture","onEncrypted","onEncryptedCapture","onEnded","onEndedCapture","onLoadedData","onLoadedDataCapture","onLoadedMetadata","onLoadedMetadataCapture","onLoadStart","onLoadStartCapture","onPause","onPauseCapture","onPlay","onPlayCapture","onPlaying","onPlayingCapture","onProgress","onProgressCapture","onRateChange","onRateChangeCapture","onSeeked","onSeekedCapture","onSeeking","onSeekingCapture","onStalled","onStalledCapture","onSuspend","onSuspendCapture","onTimeUpdate","onTimeUpdateCapture","onVolumeChange","onVolumeChangeCapture","onWaiting","onWaitingCapture","onAuxClick","onAuxClickCapture","onClick","onClickCapture","onContextMenu","onContextMenuCapture","onDoubleClick","onDoubleClickCapture","onDrag","onDragCapture","onDragEnd","onDragEndCapture","onDragEnter","onDragEnterCapture","onDragExit","onDragExitCapture","onDragLeave","onDragLeaveCapture","onDragOver","onDragOverCapture","onDragStart","onDragStartCapture","onDrop","onDropCapture","onMouseDown","onMouseDownCapture","onMouseEnter","onMouseLeave","onMouseMove","onMouseMoveCapture","onMouseOut","onMouseOutCapture","onMouseOver","onMouseOverCapture","onMouseUp","onMouseUpCapture","onSelect","onSelectCapture","onTouchCancel","onTouchCancelCapture","onTouchEnd","onTouchEndCapture","onTouchMove","onTouchMoveCapture","onTouchStart","onTouchStartCapture","onPointerDown","onPointerDownCapture","onPointerMove","onPointerMoveCapture","onPointerUp","onPointerUpCapture","onPointerCancel","onPointerCancelCapture","onPointerEnter","onPointerEnterCapture","onPointerLeave","onPointerLeaveCapture","onPointerOver","onPointerOverCapture","onPointerOut","onPointerOutCapture","onGotPointerCapture","onGotPointerCaptureCapture","onLostPointerCapture","onLostPointerCaptureCapture","onScroll","onScrollCapture","onWheel","onWheelCapture","onAnimationStart","onAnimationStartCapture","onAnimationEnd","onAnimationEndCapture","onAnimationIteration","onAnimationIterationCapture","onTransitionEnd","onTransitionEndCapture"];function _l(e){if(typeof e!="string")return!1;var t=Ow;return t.includes(e)}var Cw=["aria-activedescendant","aria-atomic","aria-autocomplete","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colspan","aria-controls","aria-current","aria-describedby","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-modal","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext","className","color","height","id","lang","max","media","method","min","name","style","target","width","role","tabIndex","accentHeight","accumulate","additive","alignmentBaseline","allowReorder","alphabetic","amplitude","arabicForm","ascent","attributeName","attributeType","autoReverse","azimuth","baseFrequency","baselineShift","baseProfile","bbox","begin","bias","by","calcMode","capHeight","clip","clipPath","clipPathUnits","clipRule","colorInterpolation","colorInterpolationFilters","colorProfile","colorRendering","contentScriptType","contentStyleType","cursor","cx","cy","d","decelerate","descent","diffuseConstant","direction","display","divisor","dominantBaseline","dur","dx","dy","edgeMode","elevation","enableBackground","end","exponent","externalResourcesRequired","fill","fillOpacity","fillRule","filter","filterRes","filterUnits","floodColor","floodOpacity","focusable","fontFamily","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontWeight","format","from","fx","fy","g1","g2","glyphName","glyphOrientationHorizontal","glyphOrientationVertical","glyphRef","gradientTransform","gradientUnits","hanging","horizAdvX","horizOriginX","href","ideographic","imageRendering","in2","in","intercept","k1","k2","k3","k4","k","kernelMatrix","kernelUnitLength","kerning","keyPoints","keySplines","keyTimes","lengthAdjust","letterSpacing","lightingColor","limitingConeAngle","local","markerEnd","markerHeight","markerMid","markerStart","markerUnits","markerWidth","mask","maskContentUnits","maskUnits","mathematical","mode","numOctaves","offset","opacity","operator","order","orient","orientation","origin","overflow","overlinePosition","overlineThickness","paintOrder","panose1","pathLength","patternContentUnits","patternTransform","patternUnits","pointerEvents","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","r","radius","refX","refY","renderingIntent","repeatCount","repeatDur","requiredExtensions","requiredFeatures","restart","result","rotate","rx","ry","seed","shapeRendering","slope","spacing","specularConstant","specularExponent","speed","spreadMethod","startOffset","stdDeviation","stemh","stemv","stitchTiles","stopColor","stopOpacity","strikethroughPosition","strikethroughThickness","string","stroke","strokeDasharray","strokeDashoffset","strokeLinecap","strokeLinejoin","strokeMiterlimit","strokeOpacity","strokeWidth","surfaceScale","systemLanguage","tableValues","targetX","targetY","textAnchor","textDecoration","textLength","textRendering","to","transform","u1","u2","underlinePosition","underlineThickness","unicode","unicodeBidi","unicodeRange","unitsPerEm","vAlphabetic","values","vectorEffect","version","vertAdvY","vertOriginX","vertOriginY","vHanging","vIdeographic","viewTarget","visibility","vMathematical","widths","wordSpacing","writingMode","x1","x2","x","xChannelSelector","xHeight","xlinkActuate","xlinkArcrole","xlinkHref","xlinkRole","xlinkShow","xlinkTitle","xlinkType","xmlBase","xmlLang","xmlns","xmlnsXlink","xmlSpace","y1","y2","y","yChannelSelector","z","zoomAndPan","ref","key","angle"],Ew=new Set(Cw);function Sp(e){return typeof e!="string"?!1:Ew.has(e)}function Pp(e){return typeof e=="string"&&e.startsWith("data-")}function Bt(e){if(typeof e!="object"||e===null)return{};var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(Sp(n)||Pp(n))&&(t[n]=e[n]);return t}function ea(e){if(e==null)return null;if(g.isValidElement(e)&&typeof e.props=="object"&&e.props!==null){var t=e.props;return Bt(t)}return typeof e=="object"&&!Array.isArray(e)?Bt(e):null}function Ve(e){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(Sp(n)||Pp(n)||_l(n))&&(t[n]=e[n]);return t}function Mw(e){return e==null?null:g.isValidElement(e)?Ve(e.props):typeof e=="object"&&!Array.isArray(e)?Ve(e):null}var $w=["children","width","height","viewBox","className","style","title","desc"];function $s(){return $s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$s.apply(null,arguments)}function Dw(e,t){if(e==null)return{};var n,r,a=Bw(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function Bw(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}var Np=g.forwardRef((e,t)=>{var{children:n,width:r,height:a,viewBox:o,className:i,style:s,title:l,desc:c}=e,u=Dw(e,$w),h=o||{width:r,height:a,x:0,y:0},m=ie("recharts-surface",i);return g.createElement("svg",$s({},Ve(u),{className:m,width:r,height:a,style:s,viewBox:"".concat(h.x," ").concat(h.y," ").concat(h.width," ").concat(h.height),ref:t}),g.createElement("title",null,l),g.createElement("desc",null,c),n)}),Rw=["children","className"];function Ds(){return Ds=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ds.apply(null,arguments)}function _w(e,t){if(e==null)return{};var n,r,a=Ww(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function Ww(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}var pt=g.forwardRef((e,t)=>{var{children:n,className:r}=e,a=_w(e,Rw),o=ie("recharts-layer",r);return g.createElement("g",Ds({className:o},Ve(a),{ref:t}),n)}),Lw=g.createContext(null);function ue(e){return function(){return e}}const jp=Math.cos,Xa=Math.sin,jt=Math.sqrt,Qa=Math.PI,Go=2*Qa,Bs=Math.PI,Rs=2*Bs,xn=1e-6,Fw=Rs-xn;function Op(e){this._+=e[0];for(let t=1,n=e.length;t<n;++t)this._+=arguments[t]+e[t]}function Hw(e){let t=Math.floor(e);if(!(t>=0))throw new Error(`invalid digits: ${e}`);if(t>15)return Op;const n=10**t;return function(r){this._+=r[0];for(let a=1,o=r.length;a<o;++a)this._+=Math.round(arguments[a]*n)/n+r[a]}}class zw{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=t==null?Op:Hw(t)}moveTo(t,n){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,n){this._append`L${this._x1=+t},${this._y1=+n}`}quadraticCurveTo(t,n,r,a){this._append`Q${+t},${+n},${this._x1=+r},${this._y1=+a}`}bezierCurveTo(t,n,r,a,o,i){this._append`C${+t},${+n},${+r},${+a},${this._x1=+o},${this._y1=+i}`}arcTo(t,n,r,a,o){if(t=+t,n=+n,r=+r,a=+a,o=+o,o<0)throw new Error(`negative radius: ${o}`);let i=this._x1,s=this._y1,l=r-t,c=a-n,u=i-t,h=s-n,m=u*u+h*h;if(this._x1===null)this._append`M${this._x1=t},${this._y1=n}`;else if(m>xn)if(!(Math.abs(h*l-c*u)>xn)||!o)this._append`L${this._x1=t},${this._y1=n}`;else{let p=r-i,y=a-s,f=l*l+c*c,v=p*p+y*y,b=Math.sqrt(f),w=Math.sqrt(m),x=o*Math.tan((Bs-Math.acos((f+m-v)/(2*b*w)))/2),T=x/w,k=x/b;Math.abs(T-1)>xn&&this._append`L${t+T*u},${n+T*h}`,this._append`A${o},${o},0,0,${+(h*p>u*y)},${this._x1=t+k*l},${this._y1=n+k*c}`}}arc(t,n,r,a,o,i){if(t=+t,n=+n,r=+r,i=!!i,r<0)throw new Error(`negative radius: ${r}`);let s=r*Math.cos(a),l=r*Math.sin(a),c=t+s,u=n+l,h=1^i,m=i?a-o:o-a;this._x1===null?this._append`M${c},${u}`:(Math.abs(this._x1-c)>xn||Math.abs(this._y1-u)>xn)&&this._append`L${c},${u}`,r&&(m<0&&(m=m%Rs+Rs),m>Fw?this._append`A${r},${r},0,1,${h},${t-s},${n-l}A${r},${r},0,1,${h},${this._x1=c},${this._y1=u}`:m>xn&&this._append`A${r},${r},0,${+(m>=Bs)},${h},${this._x1=t+r*Math.cos(o)},${this._y1=n+r*Math.sin(o)}`)}rect(t,n,r,a){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}h${r=+r}v${+a}h${-r}Z`}toString(){return this._}}function Wl(e){let t=3;return e.digits=function(n){if(!arguments.length)return t;if(n==null)t=null;else{const r=Math.floor(n);if(!(r>=0))throw new RangeError(`invalid digits: ${n}`);t=r}return e},()=>new zw(t)}function Ll(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function Cp(e){this._context=e}Cp.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:this._context.lineTo(e,t);break}}};function qo(e){return new Cp(e)}function Ep(e){return e[0]}function Mp(e){return e[1]}function $p(e,t){var n=ue(!0),r=null,a=qo,o=null,i=Wl(s);e=typeof e=="function"?e:e===void 0?Ep:ue(e),t=typeof t=="function"?t:t===void 0?Mp:ue(t);function s(l){var c,u=(l=Ll(l)).length,h,m=!1,p;for(r==null&&(o=a(p=i())),c=0;c<=u;++c)!(c<u&&n(h=l[c],c,l))===m&&((m=!m)?o.lineStart():o.lineEnd()),m&&o.point(+e(h,c,l),+t(h,c,l));if(p)return o=null,p+""||null}return s.x=function(l){return arguments.length?(e=typeof l=="function"?l:ue(+l),s):e},s.y=function(l){return arguments.length?(t=typeof l=="function"?l:ue(+l),s):t},s.defined=function(l){return arguments.length?(n=typeof l=="function"?l:ue(!!l),s):n},s.curve=function(l){return arguments.length?(a=l,r!=null&&(o=a(r)),s):a},s.context=function(l){return arguments.length?(l==null?r=o=null:o=a(r=l),s):r},s}function Sa(e,t,n){var r=null,a=ue(!0),o=null,i=qo,s=null,l=Wl(c);e=typeof e=="function"?e:e===void 0?Ep:ue(+e),t=typeof t=="function"?t:ue(t===void 0?0:+t),n=typeof n=="function"?n:n===void 0?Mp:ue(+n);function c(h){var m,p,y,f=(h=Ll(h)).length,v,b=!1,w,x=new Array(f),T=new Array(f);for(o==null&&(s=i(w=l())),m=0;m<=f;++m){if(!(m<f&&a(v=h[m],m,h))===b)if(b=!b)p=m,s.areaStart(),s.lineStart();else{for(s.lineEnd(),s.lineStart(),y=m-1;y>=p;--y)s.point(x[y],T[y]);s.lineEnd(),s.areaEnd()}b&&(x[m]=+e(v,m,h),T[m]=+t(v,m,h),s.point(r?+r(v,m,h):x[m],n?+n(v,m,h):T[m]))}if(w)return s=null,w+""||null}function u(){return $p().defined(a).curve(i).context(o)}return c.x=function(h){return arguments.length?(e=typeof h=="function"?h:ue(+h),r=null,c):e},c.x0=function(h){return arguments.length?(e=typeof h=="function"?h:ue(+h),c):e},c.x1=function(h){return arguments.length?(r=h==null?null:typeof h=="function"?h:ue(+h),c):r},c.y=function(h){return arguments.length?(t=typeof h=="function"?h:ue(+h),n=null,c):t},c.y0=function(h){return arguments.length?(t=typeof h=="function"?h:ue(+h),c):t},c.y1=function(h){return arguments.length?(n=h==null?null:typeof h=="function"?h:ue(+h),c):n},c.lineX0=c.lineY0=function(){return u().x(e).y(t)},c.lineY1=function(){return u().x(e).y(n)},c.lineX1=function(){return u().x(r).y(t)},c.defined=function(h){return arguments.length?(a=typeof h=="function"?h:ue(!!h),c):a},c.curve=function(h){return arguments.length?(i=h,o!=null&&(s=i(o)),c):i},c.context=function(h){return arguments.length?(h==null?o=s=null:s=i(o=h),c):o},c}class Dp{constructor(t,n){this._context=t,this._x=n}areaStart(){this._line=0}areaEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line}point(t,n){switch(t=+t,n=+n,this._point){case 0:{this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break}case 1:this._point=2;default:{this._x?this._context.bezierCurveTo(this._x0=(this._x0+t)/2,this._y0,this._x0,n,t,n):this._context.bezierCurveTo(this._x0,this._y0=(this._y0+n)/2,t,this._y0,t,n);break}}this._x0=t,this._y0=n}}function Yw(e){return new Dp(e,!0)}function Gw(e){return new Dp(e,!1)}const Fl={draw(e,t){const n=jt(t/Qa);e.moveTo(n,0),e.arc(0,0,n,0,Go)}},qw={draw(e,t){const n=jt(t/5)/2;e.moveTo(-3*n,-n),e.lineTo(-n,-n),e.lineTo(-n,-3*n),e.lineTo(n,-3*n),e.lineTo(n,-n),e.lineTo(3*n,-n),e.lineTo(3*n,n),e.lineTo(n,n),e.lineTo(n,3*n),e.lineTo(-n,3*n),e.lineTo(-n,n),e.lineTo(-3*n,n),e.closePath()}},Bp=jt(1/3),Uw=Bp*2,Kw={draw(e,t){const n=jt(t/Uw),r=n*Bp;e.moveTo(0,-n),e.lineTo(r,0),e.lineTo(0,n),e.lineTo(-r,0),e.closePath()}},Vw={draw(e,t){const n=jt(t),r=-n/2;e.rect(r,r,n,n)}},Jw=.8908130915292852,Rp=Xa(Qa/10)/Xa(7*Qa/10),Zw=Xa(Go/10)*Rp,Xw=-jp(Go/10)*Rp,Qw={draw(e,t){const n=jt(t*Jw),r=Zw*n,a=Xw*n;e.moveTo(0,-n),e.lineTo(r,a);for(let o=1;o<5;++o){const i=Go*o/5,s=jp(i),l=Xa(i);e.lineTo(l*n,-s*n),e.lineTo(s*r-l*a,l*r+s*a)}e.closePath()}},es=jt(3),ex={draw(e,t){const n=-jt(t/(es*3));e.moveTo(0,n*2),e.lineTo(-es*n,-n),e.lineTo(es*n,-n),e.closePath()}},lt=-.5,ct=jt(3)/2,_s=1/jt(12),tx=(_s/2+1)*3,nx={draw(e,t){const n=jt(t/tx),r=n/2,a=n*_s,o=r,i=n*_s+n,s=-o,l=i;e.moveTo(r,a),e.lineTo(o,i),e.lineTo(s,l),e.lineTo(lt*r-ct*a,ct*r+lt*a),e.lineTo(lt*o-ct*i,ct*o+lt*i),e.lineTo(lt*s-ct*l,ct*s+lt*l),e.lineTo(lt*r+ct*a,lt*a-ct*r),e.lineTo(lt*o+ct*i,lt*i-ct*o),e.lineTo(lt*s+ct*l,lt*l-ct*s),e.closePath()}};function rx(e,t){let n=null,r=Wl(a);e=typeof e=="function"?e:ue(e||Fl),t=typeof t=="function"?t:ue(t===void 0?64:+t);function a(){let o;if(n||(n=o=r()),e.apply(this,arguments).draw(n,+t.apply(this,arguments)),o)return n=null,o+""||null}return a.type=function(o){return arguments.length?(e=typeof o=="function"?o:ue(o),a):e},a.size=function(o){return arguments.length?(t=typeof o=="function"?o:ue(+o),a):t},a.context=function(o){return arguments.length?(n=o??null,a):n},a}function eo(){}function to(e,t,n){e._context.bezierCurveTo((2*e._x0+e._x1)/3,(2*e._y0+e._y1)/3,(e._x0+2*e._x1)/3,(e._y0+2*e._y1)/3,(e._x0+4*e._x1+t)/6,(e._y0+4*e._y1+n)/6)}function _p(e){this._context=e}_p.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:to(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:to(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function ax(e){return new _p(e)}function Wp(e){this._context=e}Wp.prototype={areaStart:eo,areaEnd:eo,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x2,this._y2),this._context.closePath();break}case 2:{this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break}case 3:{this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4);break}}},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._x2=e,this._y2=t;break;case 1:this._point=2,this._x3=e,this._y3=t;break;case 2:this._point=3,this._x4=e,this._y4=t,this._context.moveTo((this._x0+4*this._x1+e)/6,(this._y0+4*this._y1+t)/6);break;default:to(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function ox(e){return new Wp(e)}function Lp(e){this._context=e}Lp.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var n=(this._x0+4*this._x1+e)/6,r=(this._y0+4*this._y1+t)/6;this._line?this._context.lineTo(n,r):this._context.moveTo(n,r);break;case 3:this._point=4;default:to(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function ix(e){return new Lp(e)}function Fp(e){this._context=e}Fp.prototype={areaStart:eo,areaEnd:eo,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(e,t){e=+e,t=+t,this._point?this._context.lineTo(e,t):(this._point=1,this._context.moveTo(e,t))}};function sx(e){return new Fp(e)}function Ru(e){return e<0?-1:1}function _u(e,t,n){var r=e._x1-e._x0,a=t-e._x1,o=(e._y1-e._y0)/(r||a<0&&-0),i=(n-e._y1)/(a||r<0&&-0),s=(o*a+i*r)/(r+a);return(Ru(o)+Ru(i))*Math.min(Math.abs(o),Math.abs(i),.5*Math.abs(s))||0}function Wu(e,t){var n=e._x1-e._x0;return n?(3*(e._y1-e._y0)/n-t)/2:t}function ts(e,t,n){var r=e._x0,a=e._y0,o=e._x1,i=e._y1,s=(o-r)/3;e._context.bezierCurveTo(r+s,a+s*t,o-s,i-s*n,o,i)}function no(e){this._context=e}no.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:ts(this,this._t0,Wu(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){var n=NaN;if(e=+e,t=+t,!(e===this._x1&&t===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,ts(this,Wu(this,n=_u(this,e,t)),n);break;default:ts(this,this._t0,n=_u(this,e,t));break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t,this._t0=n}}};function Hp(e){this._context=new zp(e)}(Hp.prototype=Object.create(no.prototype)).point=function(e,t){no.prototype.point.call(this,t,e)};function zp(e){this._context=e}zp.prototype={moveTo:function(e,t){this._context.moveTo(t,e)},closePath:function(){this._context.closePath()},lineTo:function(e,t){this._context.lineTo(t,e)},bezierCurveTo:function(e,t,n,r,a,o){this._context.bezierCurveTo(t,e,r,n,o,a)}};function lx(e){return new no(e)}function cx(e){return new Hp(e)}function Yp(e){this._context=e}Yp.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var e=this._x,t=this._y,n=e.length;if(n)if(this._line?this._context.lineTo(e[0],t[0]):this._context.moveTo(e[0],t[0]),n===2)this._context.lineTo(e[1],t[1]);else for(var r=Lu(e),a=Lu(t),o=0,i=1;i<n;++o,++i)this._context.bezierCurveTo(r[0][o],a[0][o],r[1][o],a[1][o],e[i],t[i]);(this._line||this._line!==0&&n===1)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(e,t){this._x.push(+e),this._y.push(+t)}};function Lu(e){var t,n=e.length-1,r,a=new Array(n),o=new Array(n),i=new Array(n);for(a[0]=0,o[0]=2,i[0]=e[0]+2*e[1],t=1;t<n-1;++t)a[t]=1,o[t]=4,i[t]=4*e[t]+2*e[t+1];for(a[n-1]=2,o[n-1]=7,i[n-1]=8*e[n-1]+e[n],t=1;t<n;++t)r=a[t]/o[t-1],o[t]-=r,i[t]-=r*i[t-1];for(a[n-1]=i[n-1]/o[n-1],t=n-2;t>=0;--t)a[t]=(i[t]-a[t+1])/o[t];for(o[n-1]=(e[n]+a[n-1])/2,t=0;t<n-1;++t)o[t]=2*e[t+1]-a[t+1];return[a,o]}function ux(e){return new Yp(e)}function Uo(e,t){this._context=e,this._t=t}Uo.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&this._point===2&&this._context.lineTo(this._x,this._y),(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:{if(this._t<=0)this._context.lineTo(this._x,t),this._context.lineTo(e,t);else{var n=this._x*(1-this._t)+e*this._t;this._context.lineTo(n,this._y),this._context.lineTo(n,t)}break}}this._x=e,this._y=t}};function dx(e){return new Uo(e,.5)}function hx(e){return new Uo(e,0)}function mx(e){return new Uo(e,1)}function En(e,t){if((i=e.length)>1)for(var n=1,r,a,o=e[t[0]],i,s=o.length;n<i;++n)for(a=o,o=e[t[n]],r=0;r<s;++r)o[r][1]+=o[r][0]=isNaN(a[r][1])?a[r][0]:a[r][1]}function Ws(e){for(var t=e.length,n=new Array(t);--t>=0;)n[t]=t;return n}function px(e,t){return e[t]}function gx(e){const t=[];return t.key=e,t}function yx(){var e=ue([]),t=Ws,n=En,r=px;function a(o){var i=Array.from(e.apply(this,arguments),gx),s,l=i.length,c=-1,u;for(const h of o)for(s=0,++c;s<l;++s)(i[s][c]=[0,+r(h,i[s].key,c,o)]).data=h;for(s=0,u=Ll(t(i));s<l;++s)i[u[s]].index=s;return n(i,u),i}return a.keys=function(o){return arguments.length?(e=typeof o=="function"?o:ue(Array.from(o)),a):e},a.value=function(o){return arguments.length?(r=typeof o=="function"?o:ue(+o),a):r},a.order=function(o){return arguments.length?(t=o==null?Ws:typeof o=="function"?o:ue(Array.from(o)),a):t},a.offset=function(o){return arguments.length?(n=o??En,a):n},a}function fx(e,t){if((r=e.length)>0){for(var n,r,a=0,o=e[0].length,i;a<o;++a){for(i=n=0;n<r;++n)i+=e[n][a][1]||0;if(i)for(n=0;n<r;++n)e[n][a][1]/=i}En(e,t)}}function vx(e,t){if((a=e.length)>0){for(var n=0,r=e[t[0]],a,o=r.length;n<o;++n){for(var i=0,s=0;i<a;++i)s+=e[i][n][1]||0;r[n][1]+=r[n][0]=-s/2}En(e,t)}}function bx(e,t){if(!(!((i=e.length)>0)||!((o=(a=e[t[0]]).length)>0))){for(var n=0,r=1,a,o,i;r<o;++r){for(var s=0,l=0,c=0;s<i;++s){for(var u=e[t[s]],h=u[r][1]||0,m=u[r-1][1]||0,p=(h-m)/2,y=0;y<s;++y){var f=e[t[y]],v=f[r][1]||0,b=f[r-1][1]||0;p+=v-b}l+=h,c+=p*h}a[r-1][1]+=a[r-1][0]=n,l&&(n-=c/l)}a[r-1][1]+=a[r-1][0]=n,En(e,t)}}var Ko={},Gp={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n){return n==="__proto__"}e.isUnsafeProperty=t})(Gp);var Hl={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n){switch(typeof n){case"number":case"symbol":return!1;case"string":return n.includes(".")||n.includes("[")||n.includes("]")}}e.isDeepKey=t})(Hl);var Vo={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n){var r;return typeof n=="string"||typeof n=="symbol"?n:Object.is((r=n==null?void 0:n.valueOf)==null?void 0:r.call(n),-0)?"-0":String(n)}e.toKey=t})(Vo);var Jo={},qp={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n){if(n==null)return"";if(typeof n=="string")return n;if(Array.isArray(n))return n.map(t).join(",");const r=String(n);return r==="0"&&Object.is(Number(n),-0)?"-0":r}e.toString=t})(qp);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=qp,n=Vo;function r(a){if(Array.isArray(a))return a.map(n.toKey);if(typeof a=="symbol")return[a];a=t.toString(a);const o=[],i=a.length;if(i===0)return o;let s=0,l="",c="",u=!1;for(a.charCodeAt(0)===46&&(o.push(""),s++);s<i;){const h=a[s];c?h==="\\"&&s+1<i?(s++,l+=a[s]):h===c?c="":l+=h:u?h==='"'||h==="'"?c=h:h==="]"?(u=!1,o.push(l),l=""):l+=h:h==="["?(u=!0,l&&(o.push(l),l="")):h==="."?l&&(o.push(l),l=""):l+=h,s++}return l&&o.push(l),o}e.toPath=r})(Jo);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Gp,n=Hl,r=Vo,a=Jo;function o(s,l,c){if(s==null)return c;switch(typeof l){case"string":{if(t.isUnsafeProperty(l))return c;const u=s[l];return u===void 0?n.isDeepKey(l)?o(s,a.toPath(l),c):c:u}case"number":case"symbol":{typeof l=="number"&&(l=r.toKey(l));const u=s[l];return u===void 0?c:u}default:{if(Array.isArray(l))return i(s,l,c);if(Object.is(l==null?void 0:l.valueOf(),-0)?l="-0":l=String(l),t.isUnsafeProperty(l))return c;const u=s[l];return u===void 0?c:u}}}function i(s,l,c){if(l.length===0)return c;let u=s;for(let h=0;h<l.length;h++){if(u==null||t.isUnsafeProperty(l[h]))return c;u=u[l[h]]}return u===void 0?c:u}e.get=o})(Ko);var wx=Ko.get;const or=Nt(wx);var xx=4;function hn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:xx,n=10**t,r=Math.round(e*n)/n;return Object.is(r,-0)?0:r}function be(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return e.reduce((a,o,i)=>{var s=n[i-1];return typeof s=="string"?a+s+o:s!==void 0?a+hn(s)+o:a+o},"")}var Qe=e=>e===0?0:e>0?1:-1,At=e=>typeof e=="number"&&e!=+e,Kt=e=>typeof e=="string"&&e.indexOf("%")===e.length-1,K=e=>(typeof e=="number"||e instanceof Number)&&!At(e),Rt=e=>K(e)||typeof e=="string",kx=0,Dr=e=>{var t=++kx;return"".concat(e||"").concat(t)},St=function(t,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(!K(t)&&typeof t!="string")return r;var o;if(Kt(t)){if(n==null)return r;var i=t.indexOf("%");o=n*parseFloat(t.slice(0,i))/100}else o=+t;return At(o)&&(o=r),a&&n!=null&&o>n&&(o=n),o},Up=e=>{if(!Array.isArray(e))return!1;for(var t=e.length,n={},r=0;r<t;r++)if(!n[String(e[r])])n[String(e[r])]=!0;else return!0;return!1};function we(e,t,n){return K(e)&&K(t)?hn(e+n*(t-e)):t}function Kp(e,t,n){if(!(!e||!e.length))return e.find(r=>r&&(typeof t=="function"?t(r):or(r,t))===n)}var fe=e=>e===null||typeof e>"u",ta=e=>fe(e)?e:"".concat(e.charAt(0).toUpperCase()).concat(e.slice(1));function Tx(e){return e!=null}function na(){}var Ix=["type","size","sizeType"];function Ls(){return Ls=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ls.apply(null,arguments)}function Fu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Hu(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Fu(Object(n),!0).forEach(function(r){Ax(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Fu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ax(e,t,n){return(t=Sx(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Sx(e){var t=Px(e,"string");return typeof t=="symbol"?t:t+""}function Px(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Nx(e,t){if(e==null)return{};var n,r,a=jx(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function jx(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}var Vp={symbolCircle:Fl,symbolCross:qw,symbolDiamond:Kw,symbolSquare:Vw,symbolStar:Qw,symbolTriangle:ex,symbolWye:nx},Ox=Math.PI/180,Cx=e=>{var t="symbol".concat(ta(e));return Vp[t]||Fl},Ex=(e,t,n)=>{if(t==="area")return e;switch(n){case"cross":return 5*e*e/9;case"diamond":return .5*e*e/Math.sqrt(3);case"square":return e*e;case"star":{var r=18*Ox;return 1.25*e*e*(Math.tan(r)-Math.tan(r*2)*Math.tan(r)**2)}case"triangle":return Math.sqrt(3)*e*e/4;case"wye":return(21-10*Math.sqrt(3))*e*e/8;default:return Math.PI*e*e/4}},Mx=(e,t)=>{Vp["symbol".concat(ta(e))]=t},Jp=e=>{var{type:t="circle",size:n=64,sizeType:r="area"}=e,a=Nx(e,Ix),o=Hu(Hu({},a),{},{type:t,size:n,sizeType:r}),i="circle";typeof t=="string"&&(i=t);var s=()=>{var m=Cx(i),p=rx().type(m).size(Ex(n,r,i)),y=p();if(y!==null)return y},{className:l,cx:c,cy:u}=o,h=Ve(o);return K(c)&&K(u)&&K(n)?g.createElement("path",Ls({},h,{className:ie("recharts-symbols",l),transform:"translate(".concat(c,", ").concat(u,")"),d:s()})):null};Jp.registerSymbol=Mx;var Zp=e=>"radius"in e&&"startAngle"in e&&"endAngle"in e,zl=(e,t)=>{if(!e||typeof e=="function"||typeof e=="boolean")return null;var n=e;if(g.isValidElement(e)&&(n=e.props),typeof n!="object"&&typeof n!="function")return null;var r={};return Object.keys(n).forEach(a=>{_l(a)&&(r[a]=t||(o=>n[a](n,o)))}),r},$x=(e,t,n)=>r=>(e(t,n,r),null),Yl=(e,t,n)=>{if(e===null||typeof e!="object"&&typeof e!="function")return null;var r=null;return Object.keys(e).forEach(a=>{var o=e[a];_l(a)&&typeof o=="function"&&(r||(r={}),r[a]=$x(o,t,n))}),r};function zu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Dx(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?zu(Object(n),!0).forEach(function(r){Bx(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):zu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Bx(e,t,n){return(t=Rx(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Rx(e){var t=_x(e,"string");return typeof t=="symbol"?t:t+""}function _x(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function tt(e,t){var n=Dx({},e),r=t,a=Object.keys(t),o=a.reduce((i,s)=>(i[s]===void 0&&r[s]!==void 0&&(i[s]=r[s]),i),n);return o}var Xp={},Qp={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n,r){const a=new Map;for(let o=0;o<n.length;o++){const i=n[o],s=r(i);a.has(s)||a.set(s,i)}return Array.from(a.values())}e.uniqBy=t})(Qp);var Gl={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n){return n}e.identity=t})(Gl);var eg={},Zo={},tg={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n){return Number.isSafeInteger(n)&&n>=0}e.isLength=t})(tg);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=tg;function n(r){return r!=null&&typeof r!="function"&&t.isLength(r.length)}e.isArrayLike=n})(Zo);var ng={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n){return typeof n=="object"&&n!==null}e.isObjectLike=t})(ng);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Zo,n=ng;function r(a){return n.isObjectLike(a)&&t.isArrayLike(a)}e.isArrayLikeObject=r})(eg);var rg={},ag={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Ko;function n(r){return function(a){return t.get(a,r)}}e.property=n})(ag);var og={},ql={},ig={},Ul={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n){return n!==null&&(typeof n=="object"||typeof n=="function")}e.isObject=t})(Ul);var Kl={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n){return n==null||typeof n!="object"&&typeof n!="function"}e.isPrimitive=t})(Kl);var Vl={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n,r){return n===r||Number.isNaN(n)&&Number.isNaN(r)}e.eq=t})(Vl);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Ul,n=Kl,r=Vl;function a(u,h,m){return typeof m!="function"?a(u,h,()=>{}):o(u,h,function p(y,f,v,b,w,x){const T=m(y,f,v,b,w,x);return T!==void 0?!!T:o(y,f,p,x)},new Map)}function o(u,h,m,p){if(h===u)return!0;switch(typeof h){case"object":return i(u,h,m,p);case"function":return Object.keys(h).length>0?o(u,{...h},m,p):r.eq(u,h);default:return t.isObject(u)?typeof h=="string"?h==="":!0:r.eq(u,h)}}function i(u,h,m,p){if(h==null)return!0;if(Array.isArray(h))return l(u,h,m,p);if(h instanceof Map)return s(u,h,m,p);if(h instanceof Set)return c(u,h,m,p);const y=Object.keys(h);if(u==null||n.isPrimitive(u))return y.length===0;if(y.length===0)return!0;if(p!=null&&p.has(h))return p.get(h)===u;p==null||p.set(h,u);try{for(let f=0;f<y.length;f++){const v=y[f];if(!n.isPrimitive(u)&&!(v in u)||h[v]===void 0&&u[v]!==void 0||h[v]===null&&u[v]!==null||!m(u[v],h[v],v,u,h,p))return!1}return!0}finally{p==null||p.delete(h)}}function s(u,h,m,p){if(h.size===0)return!0;if(!(u instanceof Map))return!1;for(const[y,f]of h.entries()){const v=u.get(y);if(m(v,f,y,u,h,p)===!1)return!1}return!0}function l(u,h,m,p){if(h.length===0)return!0;if(!Array.isArray(u))return!1;const y=new Set;for(let f=0;f<h.length;f++){const v=h[f];let b=!1;for(let w=0;w<u.length;w++){if(y.has(w))continue;const x=u[w];let T=!1;if(m(x,v,f,u,h,p)&&(T=!0),T){y.add(w),b=!0;break}}if(!b)return!1}return!0}function c(u,h,m,p){return h.size===0?!0:u instanceof Set?l([...u],[...h],m,p):!1}e.isMatchWith=a,e.isSetMatch=c})(ig);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=ig;function n(r,a){return t.isMatchWith(r,a,()=>{})}e.isMatch=n})(ql);var sg={},Jl={},lg={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n){return Object.getOwnPropertySymbols(n).filter(r=>Object.prototype.propertyIsEnumerable.call(n,r))}e.getSymbols=t})(lg);var Zl={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n){return n==null?n===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(n)}e.getTag=t})(Zl);var Xl={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t="[object RegExp]",n="[object String]",r="[object Number]",a="[object Boolean]",o="[object Arguments]",i="[object Symbol]",s="[object Date]",l="[object Map]",c="[object Set]",u="[object Array]",h="[object Function]",m="[object ArrayBuffer]",p="[object Object]",y="[object Error]",f="[object DataView]",v="[object Uint8Array]",b="[object Uint8ClampedArray]",w="[object Uint16Array]",x="[object Uint32Array]",T="[object BigUint64Array]",k="[object Int8Array]",I="[object Int16Array]",C="[object Int32Array]",O="[object BigInt64Array]",M="[object Float32Array]",$="[object Float64Array]";e.argumentsTag=o,e.arrayBufferTag=m,e.arrayTag=u,e.bigInt64ArrayTag=O,e.bigUint64ArrayTag=T,e.booleanTag=a,e.dataViewTag=f,e.dateTag=s,e.errorTag=y,e.float32ArrayTag=M,e.float64ArrayTag=$,e.functionTag=h,e.int16ArrayTag=I,e.int32ArrayTag=C,e.int8ArrayTag=k,e.mapTag=l,e.numberTag=r,e.objectTag=p,e.regexpTag=t,e.setTag=c,e.stringTag=n,e.symbolTag=i,e.uint16ArrayTag=w,e.uint32ArrayTag=x,e.uint8ArrayTag=v,e.uint8ClampedArrayTag=b})(Xl);var cg={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}e.isTypedArray=t})(cg);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=lg,n=Zl,r=Xl,a=Kl,o=cg;function i(u,h){return s(u,void 0,u,new Map,h)}function s(u,h,m,p=new Map,y=void 0){const f=y==null?void 0:y(u,h,m,p);if(f!==void 0)return f;if(a.isPrimitive(u))return u;if(p.has(u))return p.get(u);if(Array.isArray(u)){const v=new Array(u.length);p.set(u,v);for(let b=0;b<u.length;b++)v[b]=s(u[b],b,m,p,y);return Object.hasOwn(u,"index")&&(v.index=u.index),Object.hasOwn(u,"input")&&(v.input=u.input),v}if(u instanceof Date)return new Date(u.getTime());if(u instanceof RegExp){const v=new RegExp(u.source,u.flags);return v.lastIndex=u.lastIndex,v}if(u instanceof Map){const v=new Map;p.set(u,v);for(const[b,w]of u)v.set(b,s(w,b,m,p,y));return v}if(u instanceof Set){const v=new Set;p.set(u,v);for(const b of u)v.add(s(b,void 0,m,p,y));return v}if(typeof Buffer<"u"&&Buffer.isBuffer(u))return u.subarray();if(o.isTypedArray(u)){const v=new(Object.getPrototypeOf(u)).constructor(u.length);p.set(u,v);for(let b=0;b<u.length;b++)v[b]=s(u[b],b,m,p,y);return v}if(u instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&u instanceof SharedArrayBuffer)return u.slice(0);if(u instanceof DataView){const v=new DataView(u.buffer.slice(0),u.byteOffset,u.byteLength);return p.set(u,v),l(v,u,m,p,y),v}if(typeof File<"u"&&u instanceof File){const v=new File([u],u.name,{type:u.type});return p.set(u,v),l(v,u,m,p,y),v}if(typeof Blob<"u"&&u instanceof Blob){const v=new Blob([u],{type:u.type});return p.set(u,v),l(v,u,m,p,y),v}if(u instanceof Error){const v=new u.constructor;return p.set(u,v),v.message=u.message,v.name=u.name,v.stack=u.stack,v.cause=u.cause,l(v,u,m,p,y),v}if(u instanceof Boolean){const v=new Boolean(u.valueOf());return p.set(u,v),l(v,u,m,p,y),v}if(u instanceof Number){const v=new Number(u.valueOf());return p.set(u,v),l(v,u,m,p,y),v}if(u instanceof String){const v=new String(u.valueOf());return p.set(u,v),l(v,u,m,p,y),v}if(typeof u=="object"&&c(u)){const v=Object.create(Object.getPrototypeOf(u));return p.set(u,v),l(v,u,m,p,y),v}return u}function l(u,h,m=u,p,y){const f=[...Object.keys(h),...t.getSymbols(h)];for(let v=0;v<f.length;v++){const b=f[v],w=Object.getOwnPropertyDescriptor(u,b);(w==null||w.writable)&&(u[b]=s(h[b],b,m,p,y))}}function c(u){switch(n.getTag(u)){case r.argumentsTag:case r.arrayTag:case r.arrayBufferTag:case r.dataViewTag:case r.booleanTag:case r.dateTag:case r.float32ArrayTag:case r.float64ArrayTag:case r.int8ArrayTag:case r.int16ArrayTag:case r.int32ArrayTag:case r.mapTag:case r.numberTag:case r.objectTag:case r.regexpTag:case r.setTag:case r.stringTag:case r.symbolTag:case r.uint8ArrayTag:case r.uint8ClampedArrayTag:case r.uint16ArrayTag:case r.uint32ArrayTag:return!0;default:return!1}}e.cloneDeepWith=i,e.cloneDeepWithImpl=s,e.copyProperties=l})(Jl);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Jl;function n(r){return t.cloneDeepWithImpl(r,void 0,r,new Map,void 0)}e.cloneDeep=n})(sg);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=ql,n=sg;function r(a){return a=n.cloneDeep(a),o=>t.isMatch(o,a)}e.matches=r})(og);var ug={},dg={},hg={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Jl,n=Xl;function r(a,o){return t.cloneDeepWith(a,(i,s,l,c)=>{const u=o==null?void 0:o(i,s,l,c);if(u!==void 0)return u;if(typeof a=="object")switch(Object.prototype.toString.call(a)){case n.numberTag:case n.stringTag:case n.booleanTag:{const h=new a.constructor(a==null?void 0:a.valueOf());return t.copyProperties(h,a),h}case n.argumentsTag:{const h={};return t.copyProperties(h,a),h.length=a.length,h[Symbol.iterator]=a[Symbol.iterator],h}default:return}})}e.cloneDeepWith=r})(hg);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=hg;function n(r){return t.cloneDeepWith(r)}e.cloneDeep=n})(dg);var mg={},Ql={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=/^(?:0|[1-9]\d*)$/;function n(r,a=Number.MAX_SAFE_INTEGER){switch(typeof r){case"number":return Number.isInteger(r)&&r>=0&&r<a;case"symbol":return!1;case"string":return t.test(r)}}e.isIndex=n})(Ql);var pg={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Zl;function n(r){return r!==null&&typeof r=="object"&&t.getTag(r)==="[object Arguments]"}e.isArguments=n})(pg);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Hl,n=Ql,r=pg,a=Jo;function o(i,s){let l;if(Array.isArray(s)?l=s:typeof s=="string"&&t.isDeepKey(s)&&(i==null?void 0:i[s])==null?l=a.toPath(s):l=[s],l.length===0)return!1;let c=i;for(let u=0;u<l.length;u++){const h=l[u];if((c==null||!Object.hasOwn(c,h))&&!((Array.isArray(c)||r.isArguments(c))&&n.isIndex(h)&&h<c.length))return!1;c=c[h]}return!0}e.has=o})(mg);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=ql,n=Vo,r=dg,a=Ko,o=mg;function i(s,l){switch(typeof s){case"object":{Object.is(s==null?void 0:s.valueOf(),-0)&&(s="-0");break}case"number":{s=n.toKey(s);break}}return l=r.cloneDeep(l),function(c){const u=a.get(c,s);return u===void 0?o.has(c,s):l===void 0?u===void 0:t.isMatch(u,l)}}e.matchesProperty=i})(ug);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Gl,n=ag,r=og,a=ug;function o(i){if(i==null)return t.identity;switch(typeof i){case"function":return i;case"object":return Array.isArray(i)&&i.length===2?a.matchesProperty(i[0],i[1]):r.matches(i);case"string":case"symbol":case"number":return n.property(i)}}e.iteratee=o})(rg);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Qp,n=Gl,r=eg,a=rg;function o(i,s=n.identity){return r.isArrayLikeObject(i)?t.uniqBy(Array.from(i),a.iteratee(s)):[]}e.uniqBy=o})(Xp);var Wx=Xp.uniqBy;const Yu=Nt(Wx);function Lx(e,t,n){return t===!0?Yu(e,n):typeof t=="function"?Yu(e,t):e}var gg={exports:{}},yg={},fg={exports:{}},vg={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ir=g;function Fx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Hx=typeof Object.is=="function"?Object.is:Fx,zx=ir.useState,Yx=ir.useEffect,Gx=ir.useLayoutEffect,qx=ir.useDebugValue;function Ux(e,t){var n=t(),r=zx({inst:{value:n,getSnapshot:t}}),a=r[0].inst,o=r[1];return Gx(function(){a.value=n,a.getSnapshot=t,ns(a)&&o({inst:a})},[e,n,t]),Yx(function(){return ns(a)&&o({inst:a}),e(function(){ns(a)&&o({inst:a})})},[e]),qx(n),n}function ns(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Hx(e,n)}catch{return!0}}function Kx(e,t){return t()}var Vx=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Kx:Ux;vg.useSyncExternalStore=ir.useSyncExternalStore!==void 0?ir.useSyncExternalStore:Vx;fg.exports=vg;var Jx=fg.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xo=g,Zx=Jx;function Xx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Qx=typeof Object.is=="function"?Object.is:Xx,ek=Zx.useSyncExternalStore,tk=Xo.useRef,nk=Xo.useEffect,rk=Xo.useMemo,ak=Xo.useDebugValue;yg.useSyncExternalStoreWithSelector=function(e,t,n,r,a){var o=tk(null);if(o.current===null){var i={hasValue:!1,value:null};o.current=i}else i=o.current;o=rk(function(){function l(p){if(!c){if(c=!0,u=p,p=r(p),a!==void 0&&i.hasValue){var y=i.value;if(a(y,p))return h=y}return h=p}if(y=h,Qx(u,p))return y;var f=r(p);return a!==void 0&&a(y,f)?(u=p,y):(u=p,h=f)}var c=!1,u,h,m=n===void 0?null:n;return[function(){return l(t())},m===null?void 0:function(){return l(m())}]},[t,n,r,a]);var s=ek(e,o[0],o[1]);return nk(function(){i.hasValue=!0,i.value=s},[s]),ak(s),s};gg.exports=yg;var ok=gg.exports,ec=g.createContext(null),ik=e=>e,ke=()=>{var e=g.useContext(ec);return e?e.store.dispatch:ik},Ua=()=>{},sk=()=>Ua,lk=(e,t)=>e===t;function V(e){var t=g.useContext(ec);return ok.useSyncExternalStoreWithSelector(t?t.subscription.addNestedSub:sk,t?t.store.getState:Ua,t?t.store.getState:Ua,t?e:Ua,lk)}function ck(e,t=`expected a function, instead received ${typeof e}`){if(typeof e!="function")throw new TypeError(t)}function uk(e,t=`expected an object, instead received ${typeof e}`){if(typeof e!="object")throw new TypeError(t)}function dk(e,t="expected all items to be functions, instead received the following types: "){if(!e.every(n=>typeof n=="function")){const n=e.map(r=>typeof r=="function"?`function ${r.name||"unnamed"}()`:typeof r).join(", ");throw new TypeError(`${t}[${n}]`)}}var Gu=e=>Array.isArray(e)?e:[e];function hk(e){const t=Array.isArray(e[0])?e[0]:e;return dk(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}function mk(e,t){const n=[],{length:r}=e;for(let a=0;a<r;a++)n.push(e[a].apply(null,t));return n}var pk=class{constructor(e){this.value=e}deref(){return this.value}},gk=typeof WeakRef<"u"?WeakRef:pk,yk=0,qu=1;function Pa(){return{s:yk,v:void 0,o:null,p:null}}function bg(e,t={}){let n=Pa();const{resultEqualityCheck:r}=t;let a,o=0;function i(){var h;let s=n;const{length:l}=arguments;for(let m=0,p=l;m<p;m++){const y=arguments[m];if(typeof y=="function"||typeof y=="object"&&y!==null){let f=s.o;f===null&&(s.o=f=new WeakMap);const v=f.get(y);v===void 0?(s=Pa(),f.set(y,s)):s=v}else{let f=s.p;f===null&&(s.p=f=new Map);const v=f.get(y);v===void 0?(s=Pa(),f.set(y,s)):s=v}}const c=s;let u;if(s.s===qu)u=s.v;else if(u=e.apply(null,arguments),o++,r){const m=((h=a==null?void 0:a.deref)==null?void 0:h.call(a))??a;m!=null&&r(m,u)&&(u=m,o!==0&&o--),a=typeof u=="object"&&u!==null||typeof u=="function"?new gk(u):u}return c.s=qu,c.v=u,u}return i.clearCache=()=>{n=Pa(),i.resetResultsCount()},i.resultsCount=()=>o,i.resetResultsCount=()=>{o=0},i}function fk(e,...t){const n=typeof e=="function"?{memoize:e,memoizeOptions:t}:e,r=(...a)=>{let o=0,i=0,s,l={},c=a.pop();typeof c=="object"&&(l=c,c=a.pop()),ck(c,`createSelector expects an output function after the inputs, but received: [${typeof c}]`);const u={...n,...l},{memoize:h,memoizeOptions:m=[],argsMemoize:p=bg,argsMemoizeOptions:y=[],devModeChecks:f={}}=u,v=Gu(m),b=Gu(y),w=hk(a),x=h(function(){return o++,c.apply(null,arguments)},...v),T=p(function(){i++;const I=mk(w,arguments);return s=x.apply(null,I),s},...b);return Object.assign(T,{resultFunc:c,memoizedResultFunc:x,dependencies:w,dependencyRecomputations:()=>i,resetDependencyRecomputations:()=>{i=0},lastResult:()=>s,recomputations:()=>o,resetRecomputations:()=>{o=0},memoize:h,argsMemoize:p})};return Object.assign(r,{withTypes:()=>r}),r}var j=fk(bg),vk=Object.assign((e,t=j)=>{uk(e,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);const n=Object.keys(e),r=n.map(o=>e[o]);return t(r,(...o)=>o.reduce((i,s,l)=>(i[n[l]]=s,i),{}))},{withTypes:()=>vk}),wg={},xg={},kg={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){return typeof r=="symbol"?1:r===null?2:r===void 0?3:r!==r?4:0}const n=(r,a,o)=>{if(r!==a){const i=t(r),s=t(a);if(i===s&&i===0){if(r<a)return o==="desc"?1:-1;if(r>a)return o==="desc"?-1:1}return o==="desc"?s-i:i-s}return 0};e.compareValues=n})(kg);var Tg={},tc={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n){return typeof n=="symbol"||n instanceof Symbol}e.isSymbol=t})(tc);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=tc,n=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,r=/^\w*$/;function a(o,i){return Array.isArray(o)?!1:typeof o=="number"||typeof o=="boolean"||o==null||t.isSymbol(o)?!0:typeof o=="string"&&(r.test(o)||!n.test(o))||i!=null&&Object.hasOwn(i,o)}e.isKey=a})(Tg);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=kg,n=Tg,r=Jo;function a(o,i,s,l){if(o==null)return[];s=l?void 0:s,Array.isArray(o)||(o=Object.values(o)),Array.isArray(i)||(i=i==null?[null]:[i]),i.length===0&&(i=[null]),Array.isArray(s)||(s=s==null?[]:[s]),s=s.map(p=>String(p));const c=(p,y)=>{let f=p;for(let v=0;v<y.length&&f!=null;++v)f=f[y[v]];return f},u=(p,y)=>y==null||p==null?y:typeof p=="object"&&"key"in p?Object.hasOwn(y,p.key)?y[p.key]:c(y,p.path):typeof p=="function"?p(y):Array.isArray(p)?c(y,p):typeof y=="object"?y[p]:y,h=i.map(p=>(Array.isArray(p)&&p.length===1&&(p=p[0]),p==null||typeof p=="function"||Array.isArray(p)||n.isKey(p)?p:{key:p,path:r.toPath(p)}));return o.map(p=>({original:p,criteria:h.map(y=>u(y,p))})).slice().sort((p,y)=>{for(let f=0;f<h.length;f++){const v=t.compareValues(p.criteria[f],y.criteria[f],s[f]);if(v!==0)return v}return 0}).map(p=>p.original)}e.orderBy=a})(xg);var Ig={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n,r=1){const a=[],o=Math.floor(r),i=(s,l)=>{for(let c=0;c<s.length;c++){const u=s[c];Array.isArray(u)&&l<o?i(u,l+1):a.push(u)}};return i(n,0),a}e.flatten=t})(Ig);var nc={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Ql,n=Zo,r=Ul,a=Vl;function o(i,s,l){return r.isObject(l)&&(typeof s=="number"&&n.isArrayLike(l)&&t.isIndex(s)&&s<l.length||typeof s=="string"&&s in l)?a.eq(l[s],i):!1}e.isIterateeCall=o})(nc);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=xg,n=Ig,r=nc;function a(o,...i){const s=i.length;return s>1&&r.isIterateeCall(o,i[0],i[1])?i=[]:s>2&&r.isIterateeCall(i[0],i[1],i[2])&&(i=[i[0]]),t.orderBy(o,n.flatten(i),["asc"])}e.sortBy=a})(wg);var bk=wg.sortBy;const Qo=Nt(bk);var Ag=e=>e.legend.settings,wk=e=>e.legend.size,xk=e=>e.legend.payload;j([xk,Ag],(e,t)=>{var{itemSorter:n}=t,r=e.flat(1);return n?Qo(r,n):r});var Na=1;function kk(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],[t,n]=g.useState({height:0,left:0,top:0,width:0}),r=g.useCallback(a=>{if(a!=null){var o=a.getBoundingClientRect(),i={height:o.height,left:o.left,top:o.top,width:o.width};(Math.abs(i.height-t.height)>Na||Math.abs(i.left-t.left)>Na||Math.abs(i.top-t.top)>Na||Math.abs(i.width-t.width)>Na)&&n({height:i.height,left:i.left,top:i.top,width:i.width})}},[t.width,t.height,t.top,t.left,...e]);return[t,r]}function Le(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var Tk=(()=>typeof Symbol=="function"&&Symbol.observable||"@@observable")(),Uu=Tk,rs=()=>Math.random().toString(36).substring(7).split("").join("."),Ik={INIT:`@@redux/INIT${rs()}`,REPLACE:`@@redux/REPLACE${rs()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${rs()}`},ro=Ik;function rc(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function Sg(e,t,n){if(typeof e!="function")throw new Error(Le(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Le(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Le(1));return n(Sg)(e,t)}let r=e,a=t,o=new Map,i=o,s=0,l=!1;function c(){i===o&&(i=new Map,o.forEach((v,b)=>{i.set(b,v)}))}function u(){if(l)throw new Error(Le(3));return a}function h(v){if(typeof v!="function")throw new Error(Le(4));if(l)throw new Error(Le(5));let b=!0;c();const w=s++;return i.set(w,v),function(){if(b){if(l)throw new Error(Le(6));b=!1,c(),i.delete(w),o=null}}}function m(v){if(!rc(v))throw new Error(Le(7));if(typeof v.type>"u")throw new Error(Le(8));if(typeof v.type!="string")throw new Error(Le(17));if(l)throw new Error(Le(9));try{l=!0,a=r(a,v)}finally{l=!1}return(o=i).forEach(w=>{w()}),v}function p(v){if(typeof v!="function")throw new Error(Le(10));r=v,m({type:ro.REPLACE})}function y(){const v=h;return{subscribe(b){if(typeof b!="object"||b===null)throw new Error(Le(11));function w(){const T=b;T.next&&T.next(u())}return w(),{unsubscribe:v(w)}},[Uu](){return this}}}return m({type:ro.INIT}),{dispatch:m,subscribe:h,getState:u,replaceReducer:p,[Uu]:y}}function Ak(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:ro.INIT})>"u")throw new Error(Le(12));if(typeof n(void 0,{type:ro.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Le(13))})}function Pg(e){const t=Object.keys(e),n={};for(let o=0;o<t.length;o++){const i=t[o];typeof e[i]=="function"&&(n[i]=e[i])}const r=Object.keys(n);let a;try{Ak(n)}catch(o){a=o}return function(i={},s){if(a)throw a;let l=!1;const c={};for(let u=0;u<r.length;u++){const h=r[u],m=n[h],p=i[h],y=m(p,s);if(typeof y>"u")throw s&&s.type,new Error(Le(14));c[h]=y,l=l||y!==p}return l=l||r.length!==Object.keys(i).length,l?c:i}}function ao(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...r)=>t(n(...r)))}function Sk(...e){return t=>(n,r)=>{const a=t(n,r);let o=()=>{throw new Error(Le(15))};const i={getState:a.getState,dispatch:(l,...c)=>o(l,...c)},s=e.map(l=>l(i));return o=ao(...s)(a.dispatch),{...a,dispatch:o}}}function Ng(e){return rc(e)&&"type"in e&&typeof e.type=="string"}var jg=Symbol.for("immer-nothing"),Ku=Symbol.for("immer-draftable"),Je=Symbol.for("immer-state");function wt(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var ot=Object,sr=ot.getPrototypeOf,oo="constructor",ei="prototype",Fs="configurable",io="enumerable",Ka="writable",Br="value",Vt=e=>!!e&&!!e[Je];function Pt(e){var t;return e?Og(e)||ti(e)||!!e[Ku]||!!((t=e[oo])!=null&&t[Ku])||ni(e)||ri(e):!1}var Pk=ot[ei][oo].toString(),Vu=new WeakMap;function Og(e){if(!e||!ac(e))return!1;const t=sr(e);if(t===null||t===ot[ei])return!0;const n=ot.hasOwnProperty.call(t,oo)&&t[oo];if(n===Object)return!0;if(!Vn(n))return!1;let r=Vu.get(n);return r===void 0&&(r=Function.toString.call(n),Vu.set(n,r)),r===Pk}function ra(e,t,n=!0){aa(e)===0?(n?Reflect.ownKeys(e):ot.keys(e)).forEach(a=>{t(a,e[a],e)}):e.forEach((r,a)=>t(a,r,e))}function aa(e){const t=e[Je];return t?t.type_:ti(e)?1:ni(e)?2:ri(e)?3:0}var Ju=(e,t,n=aa(e))=>n===2?e.has(t):ot[ei].hasOwnProperty.call(e,t),Hs=(e,t,n=aa(e))=>n===2?e.get(t):e[t],so=(e,t,n,r=aa(e))=>{r===2?e.set(t,n):r===3?e.add(n):e[t]=n};function Nk(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}var ti=Array.isArray,ni=e=>e instanceof Map,ri=e=>e instanceof Set,ac=e=>typeof e=="object",Vn=e=>typeof e=="function",as=e=>typeof e=="boolean";function jk(e){const t=+e;return Number.isInteger(t)&&String(t)===e}var Ft=e=>e.copy_||e.base_,oc=e=>e.modified_?e.copy_:e.base_;function zs(e,t){if(ni(e))return new Map(e);if(ri(e))return new Set(e);if(ti(e))return Array[ei].slice.call(e);const n=Og(e);if(t===!0||t==="class_only"&&!n){const r=ot.getOwnPropertyDescriptors(e);delete r[Je];let a=Reflect.ownKeys(r);for(let o=0;o<a.length;o++){const i=a[o],s=r[i];s[Ka]===!1&&(s[Ka]=!0,s[Fs]=!0),(s.get||s.set)&&(r[i]={[Fs]:!0,[Ka]:!0,[io]:s[io],[Br]:e[i]})}return ot.create(sr(e),r)}else{const r=sr(e);if(r!==null&&n)return{...e};const a=ot.create(r);return ot.assign(a,e)}}function ic(e,t=!1){return ai(e)||Vt(e)||!Pt(e)||(aa(e)>1&&ot.defineProperties(e,{set:ja,add:ja,clear:ja,delete:ja}),ot.freeze(e),t&&ra(e,(n,r)=>{ic(r,!0)},!1)),e}function Ok(){wt(2)}var ja={[Br]:Ok};function ai(e){return e===null||!ac(e)?!0:ot.isFrozen(e)}var lo="MapSet",Ys="Patches",Zu="ArrayMethods",Cg={};function Mn(e){const t=Cg[e];return t||wt(0,e),t}var Xu=e=>!!Cg[e],Rr,Eg=()=>Rr,Ck=(e,t)=>({drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0,handledSet_:new Set,processedForPatches_:new Set,mapSetPlugin_:Xu(lo)?Mn(lo):void 0,arrayMethodsPlugin_:Xu(Zu)?Mn(Zu):void 0});function Qu(e,t){t&&(e.patchPlugin_=Mn(Ys),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Gs(e){qs(e),e.drafts_.forEach(Ek),e.drafts_=null}function qs(e){e===Rr&&(Rr=e.parent_)}var ed=e=>Rr=Ck(Rr,e);function Ek(e){const t=e[Je];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function td(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];if(e!==void 0&&e!==n){n[Je].modified_&&(Gs(t),wt(4)),Pt(e)&&(e=nd(t,e));const{patchPlugin_:a}=t;a&&a.generateReplacementPatches_(n[Je].base_,e,t)}else e=nd(t,n);return Mk(t,e,!0),Gs(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==jg?e:void 0}function nd(e,t){if(ai(t))return t;const n=t[Je];if(!n)return sc(t,e.handledSet_,e);if(!oi(n,e))return t;if(!n.modified_)return n.base_;if(!n.finalized_){const{callbacks_:r}=n;if(r)for(;r.length>0;)r.pop()(e);Dg(n,e)}return n.copy_}function Mk(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&ic(t,n)}function Mg(e){e.finalized_=!0,e.scope_.unfinalizedDrafts_--}var oi=(e,t)=>e.scope_===t,$k=[];function $g(e,t,n,r){const a=Ft(e),o=e.type_;if(r!==void 0&&Hs(a,r,o)===t){so(a,r,n,o);return}if(!e.draftLocations_){const s=e.draftLocations_=new Map;ra(a,(l,c)=>{if(Vt(c)){const u=s.get(c)||[];u.push(l),s.set(c,u)}})}const i=e.draftLocations_.get(t)??$k;for(const s of i)so(a,s,n,o)}function Dk(e,t,n){e.callbacks_.push(function(a){var s;const o=t;if(!o||!oi(o,a))return;(s=a.mapSetPlugin_)==null||s.fixSetContents(o);const i=oc(o);$g(e,o.draft_??o,i,n),Dg(o,a)})}function Dg(e,t){var r;if(e.modified_&&!e.finalized_&&(e.type_===3||e.type_===1&&e.allIndicesReassigned_||(((r=e.assigned_)==null?void 0:r.size)??0)>0)){const{patchPlugin_:a}=t;if(a){const o=a.getPath(e);o&&a.generatePatches_(e,o,t)}Mg(e)}}function Bk(e,t,n){const{scope_:r}=e;if(Vt(n)){const a=n[Je];oi(a,r)&&a.callbacks_.push(function(){Va(e);const i=oc(a);$g(e,n,i,t)})}else Pt(n)&&e.callbacks_.push(function(){const o=Ft(e);Hs(o,t,e.type_)===n&&r.drafts_.length>1&&(e.assigned_.get(t)??!1)===!0&&e.copy_&&sc(Hs(e.copy_,t,e.type_),r.handledSet_,r)})}function sc(e,t,n){return!n.immer_.autoFreeze_&&n.unfinalizedDrafts_<1||Vt(e)||t.has(e)||!Pt(e)||ai(e)||(t.add(e),ra(e,(r,a)=>{if(Vt(a)){const o=a[Je];if(oi(o,n)){const i=oc(o);so(e,r,i,e.type_),Mg(o)}}else Pt(a)&&sc(a,t,n)})),e}function Rk(e,t){const n=ti(e),r={type_:n?1:0,scope_:t?t.scope_:Eg(),modified_:!1,finalized_:!1,assigned_:void 0,parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1,callbacks_:void 0};let a=r,o=lc;n&&(a=[r],o=_r);const{revoke:i,proxy:s}=Proxy.revocable(a,o);return r.draft_=s,r.revoke_=i,[s,r]}var lc={get(e,t){if(t===Je)return e;let n=e.scope_.arrayMethodsPlugin_;const r=e.type_===1&&typeof t=="string";if(r&&n!=null&&n.isArrayOperationMethod(t))return n.createMethodInterceptor(e,t);const a=Ft(e);if(!Ju(a,t,e.type_))return _k(e,a,t);const o=a[t];if(e.finalized_||!Pt(o)||r&&e.operationMethod&&(n!=null&&n.isMutatingArrayMethod(e.operationMethod))&&jk(t))return o;if(o===os(e.base_,t)){Va(e);const i=e.type_===1?+t:t,s=Ks(e.scope_,o,e,i);return e.copy_[i]=s}return o},has(e,t){return t in Ft(e)},ownKeys(e){return Reflect.ownKeys(Ft(e))},set(e,t,n){const r=Bg(Ft(e),t);if(r!=null&&r.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const a=os(Ft(e),t),o=a==null?void 0:a[Je];if(o&&o.base_===n)return e.copy_[t]=n,e.assigned_.set(t,!1),!0;if(Nk(n,a)&&(n!==void 0||Ju(e.base_,t,e.type_)))return!0;Va(e),Us(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_.set(t,!0),Bk(e,t,n)),!0},deleteProperty(e,t){return Va(e),os(e.base_,t)!==void 0||t in e.base_?(e.assigned_.set(t,!1),Us(e)):e.assigned_.delete(t),e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=Ft(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{[Ka]:!0,[Fs]:e.type_!==1||t!=="length",[io]:r[io],[Br]:n[t]}},defineProperty(){wt(11)},getPrototypeOf(e){return sr(e.base_)},setPrototypeOf(){wt(12)}},_r={};ra(lc,(e,t)=>{_r[e]=function(){const n=arguments;return n[0]=n[0][0],t.apply(this,n)}});_r.deleteProperty=function(e,t){return _r.set.call(this,e,t,void 0)};_r.set=function(e,t,n){return lc.set.call(this,e[0],t,n,e[0])};function os(e,t){const n=e[Je];return(n?Ft(n):e)[t]}function _k(e,t,n){var a;const r=Bg(t,n);return r?Br in r?r[Br]:(a=r.get)==null?void 0:a.call(e.draft_):void 0}function Bg(e,t){if(!(t in e))return;let n=sr(e);for(;n;){const r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=sr(n)}}function Us(e){e.modified_||(e.modified_=!0,e.parent_&&Us(e.parent_))}function Va(e){e.copy_||(e.assigned_=new Map,e.copy_=zs(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var Wk=class{constructor(t){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!1,this.produce=(n,r,a)=>{if(Vn(n)&&!Vn(r)){const i=r;r=n;const s=this;return function(c=i,...u){return s.produce(c,h=>r.call(this,h,...u))}}Vn(r)||wt(6),a!==void 0&&!Vn(a)&&wt(7);let o;if(Pt(n)){const i=ed(this),s=Ks(i,n,void 0);let l=!0;try{o=r(s),l=!1}finally{l?Gs(i):qs(i)}return Qu(i,a),td(o,i)}else if(!n||!ac(n)){if(o=r(n),o===void 0&&(o=n),o===jg&&(o=void 0),this.autoFreeze_&&ic(o,!0),a){const i=[],s=[];Mn(Ys).generateReplacementPatches_(n,o,{patches_:i,inversePatches_:s}),a(i,s)}return o}else wt(1,n)},this.produceWithPatches=(n,r)=>{if(Vn(n))return(s,...l)=>this.produceWithPatches(s,c=>n(c,...l));let a,o;return[this.produce(n,r,(s,l)=>{a=s,o=l}),a,o]},as(t==null?void 0:t.autoFreeze)&&this.setAutoFreeze(t.autoFreeze),as(t==null?void 0:t.useStrictShallowCopy)&&this.setUseStrictShallowCopy(t.useStrictShallowCopy),as(t==null?void 0:t.useStrictIteration)&&this.setUseStrictIteration(t.useStrictIteration)}createDraft(t){Pt(t)||wt(8),Vt(t)&&(t=It(t));const n=ed(this),r=Ks(n,t,void 0);return r[Je].isManual_=!0,qs(n),r}finishDraft(t,n){const r=t&&t[Je];(!r||!r.isManual_)&&wt(9);const{scope_:a}=r;return Qu(a,n),td(void 0,a)}setAutoFreeze(t){this.autoFreeze_=t}setUseStrictShallowCopy(t){this.useStrictShallowCopy_=t}setUseStrictIteration(t){this.useStrictIteration_=t}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(t,n){let r;for(r=n.length-1;r>=0;r--){const o=n[r];if(o.path.length===0&&o.op==="replace"){t=o.value;break}}r>-1&&(n=n.slice(r+1));const a=Mn(Ys).applyPatches_;return Vt(t)?a(t,n):this.produce(t,o=>a(o,n))}};function Ks(e,t,n,r){const[a,o]=ni(t)?Mn(lo).proxyMap_(t,n):ri(t)?Mn(lo).proxySet_(t,n):Rk(t,n);return((n==null?void 0:n.scope_)??Eg()).drafts_.push(a),o.callbacks_=(n==null?void 0:n.callbacks_)??[],o.key_=r,n&&r!==void 0?Dk(n,o,r):o.callbacks_.push(function(l){var u;(u=l.mapSetPlugin_)==null||u.fixSetContents(o);const{patchPlugin_:c}=l;o.modified_&&c&&c.generatePatches_(o,[],l)}),a}function It(e){return Vt(e)||wt(10,e),Rg(e)}function Rg(e){if(!Pt(e)||ai(e))return e;const t=e[Je];let n,r=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=zs(e,t.scope_.immer_.useStrictShallowCopy_),r=t.scope_.immer_.shouldUseStrictIteration()}else n=zs(e,!0);return ra(n,(a,o)=>{so(n,a,Rg(o))},r),t&&(t.finalized_=!1),n}var Lk=new Wk,_g=Lk.produce;function Wg(e){return({dispatch:n,getState:r})=>a=>o=>typeof o=="function"?o(n,r,e):a(o)}var Fk=Wg(),Hk=Wg,zk=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?ao:ao.apply(null,arguments)};function gt(e,t){function n(...r){if(t){let a=t(...r);if(!a)throw new Error(it(0));return{type:e,payload:a.payload,..."meta"in a&&{meta:a.meta},..."error"in a&&{error:a.error}}}return{type:e,payload:r[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=r=>Ng(r)&&r.type===e,n}var Lg=class Cr extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,Cr.prototype)}static get[Symbol.species](){return Cr}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new Cr(...t[0].concat(this)):new Cr(...t.concat(this))}};function rd(e){return Pt(e)?_g(e,()=>{}):e}function Oa(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}function Yk(e){return typeof e=="boolean"}var Gk=()=>function(t){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:a=!0,actionCreatorCheck:o=!0}=t??{};let i=new Lg;return n&&(Yk(n)?i.push(Fk):i.push(Hk(n.extraArgument))),i},Fg="RTK_autoBatch",ge=()=>e=>({payload:e,meta:{[Fg]:!0}}),ad=e=>t=>{setTimeout(t,e)},Hg=(e={type:"raf"})=>t=>(...n)=>{const r=t(...n);let a=!0,o=!1,i=!1;const s=new Set,l=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:ad(10):e.type==="callback"?e.queueNotification:ad(e.timeout),c=()=>{i=!1,o&&(o=!1,s.forEach(u=>u()))};return Object.assign({},r,{subscribe(u){const h=()=>a&&u(),m=r.subscribe(h);return s.add(u),()=>{m(),s.delete(u)}},dispatch(u){var h;try{return a=!((h=u==null?void 0:u.meta)!=null&&h[Fg]),o=!a,o&&(i||(i=!0,l(c))),r.dispatch(u)}finally{a=!0}}})},qk=e=>function(n){const{autoBatch:r=!0}=n??{};let a=new Lg(e);return r&&a.push(Hg(typeof r=="object"?r:void 0)),a};function Uk(e){const t=Gk(),{reducer:n=void 0,middleware:r,devTools:a=!0,duplicateMiddlewareCheck:o=!0,preloadedState:i=void 0,enhancers:s=void 0}=e||{};let l;if(typeof n=="function")l=n;else if(rc(n))l=Pg(n);else throw new Error(it(1));let c;typeof r=="function"?c=r(t):c=t();let u=ao;a&&(u=zk({trace:!1,...typeof a=="object"&&a}));const h=Sk(...c),m=qk(h);let p=typeof s=="function"?s(m):m();const y=u(...p);return Sg(l,i,y)}function zg(e){const t={},n=[];let r;const a={addCase(o,i){const s=typeof o=="string"?o:o.type;if(!s)throw new Error(it(28));if(s in t)throw new Error(it(29));return t[s]=i,a},addAsyncThunk(o,i){return i.pending&&(t[o.pending.type]=i.pending),i.rejected&&(t[o.rejected.type]=i.rejected),i.fulfilled&&(t[o.fulfilled.type]=i.fulfilled),i.settled&&n.push({matcher:o.settled,reducer:i.settled}),a},addMatcher(o,i){return n.push({matcher:o,reducer:i}),a},addDefaultCase(o){return r=o,a}};return e(a),[t,n,r]}function Kk(e){return typeof e=="function"}function Vk(e,t){let[n,r,a]=zg(t),o;if(Kk(e))o=()=>rd(e());else{const s=rd(e);o=()=>s}function i(s=o(),l){let c=[n[l.type],...r.filter(({matcher:u})=>u(l)).map(({reducer:u})=>u)];return c.filter(u=>!!u).length===0&&(c=[a]),c.reduce((u,h)=>{if(h)if(Vt(u)){const p=h(u,l);return p===void 0?u:p}else{if(Pt(u))return _g(u,m=>h(m,l));{const m=h(u,l);if(m===void 0){if(u===null)return u;throw Error("A case reducer on a non-draftable value must not return undefined")}return m}}return u},s)}return i.getInitialState=o,i}var Jk="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",Zk=(e=21)=>{let t="",n=e;for(;n--;)t+=Jk[Math.random()*64|0];return t},Xk=Symbol.for("rtk-slice-createasyncthunk");function Qk(e,t){return`${e}/${t}`}function eT({creators:e}={}){var n;const t=(n=e==null?void 0:e.asyncThunk)==null?void 0:n[Xk];return function(a){const{name:o,reducerPath:i=o}=a;if(!o)throw new Error(it(11));typeof process<"u";const s=(typeof a.reducers=="function"?a.reducers(nT()):a.reducers)||{},l=Object.keys(s),c={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},u={addCase(T,k){const I=typeof T=="string"?T:T.type;if(!I)throw new Error(it(12));if(I in c.sliceCaseReducersByType)throw new Error(it(13));return c.sliceCaseReducersByType[I]=k,u},addMatcher(T,k){return c.sliceMatchers.push({matcher:T,reducer:k}),u},exposeAction(T,k){return c.actionCreators[T]=k,u},exposeCaseReducer(T,k){return c.sliceCaseReducersByName[T]=k,u}};l.forEach(T=>{const k=s[T],I={reducerName:T,type:Qk(o,T),createNotation:typeof a.reducers=="function"};aT(k)?iT(I,k,u,t):rT(I,k,u)});function h(){const[T={},k=[],I=void 0]=typeof a.extraReducers=="function"?zg(a.extraReducers):[a.extraReducers],C={...T,...c.sliceCaseReducersByType};return Vk(a.initialState,O=>{for(let M in C)O.addCase(M,C[M]);for(let M of c.sliceMatchers)O.addMatcher(M.matcher,M.reducer);for(let M of k)O.addMatcher(M.matcher,M.reducer);I&&O.addDefaultCase(I)})}const m=T=>T,p=new Map,y=new WeakMap;let f;function v(T,k){return f||(f=h()),f(T,k)}function b(){return f||(f=h()),f.getInitialState()}function w(T,k=!1){function I(O){let M=O[T];return typeof M>"u"&&k&&(M=Oa(y,I,b)),M}function C(O=m){const M=Oa(p,k,()=>new WeakMap);return Oa(M,O,()=>{const $={};for(const[A,N]of Object.entries(a.selectors??{}))$[A]=tT(N,O,()=>Oa(y,O,b),k);return $})}return{reducerPath:T,getSelectors:C,get selectors(){return C(I)},selectSlice:I}}const x={name:o,reducer:v,actions:c.actionCreators,caseReducers:c.sliceCaseReducersByName,getInitialState:b,...w(i),injectInto(T,{reducerPath:k,...I}={}){const C=k??i;return T.inject({reducerPath:C,reducer:v},I),{...x,...w(C,!0)}}};return x}}function tT(e,t,n,r){function a(o,...i){let s=t(o);return typeof s>"u"&&r&&(s=n()),e(s,...i)}return a.unwrapped=e,a}var nt=eT();function nT(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function rT({type:e,reducerName:t,createNotation:n},r,a){let o,i;if("reducer"in r){if(n&&!oT(r))throw new Error(it(17));o=r.reducer,i=r.prepare}else o=r;a.addCase(e,o).exposeCaseReducer(t,o).exposeAction(t,i?gt(e,i):gt(e))}function aT(e){return e._reducerDefinitionType==="asyncThunk"}function oT(e){return e._reducerDefinitionType==="reducerWithPrepare"}function iT({type:e,reducerName:t},n,r,a){if(!a)throw new Error(it(18));const{payloadCreator:o,fulfilled:i,pending:s,rejected:l,settled:c,options:u}=n,h=a(e,o,u);r.exposeAction(t,h),i&&r.addCase(h.fulfilled,i),s&&r.addCase(h.pending,s),l&&r.addCase(h.rejected,l),c&&r.addMatcher(h.settled,c),r.exposeCaseReducer(t,{fulfilled:i||Ca,pending:s||Ca,rejected:l||Ca,settled:c||Ca})}function Ca(){}var sT="task",Yg="listener",Gg="completed",cc="cancelled",lT=`task-${cc}`,cT=`task-${Gg}`,Vs=`${Yg}-${cc}`,uT=`${Yg}-${Gg}`,ii=class{constructor(e){$e(this,"name","TaskAbortError");$e(this,"message");this.code=e,this.message=`${sT} ${cc} (reason: ${e})`}},uc=(e,t)=>{if(typeof e!="function")throw new TypeError(it(32))},co=()=>{},qg=(e,t=co)=>(e.catch(t),e),Ug=(e,t)=>(e.addEventListener("abort",t,{once:!0}),()=>e.removeEventListener("abort",t)),Nn=e=>{if(e.aborted)throw new ii(e.reason)};function Kg(e,t){let n=co;return new Promise((r,a)=>{const o=()=>a(new ii(e.reason));if(e.aborted){o();return}n=Ug(e,o),t.finally(()=>n()).then(r,a)}).finally(()=>{n=co})}var dT=async(e,t)=>{try{return await Promise.resolve(),{status:"ok",value:await e()}}catch(n){return{status:n instanceof ii?"cancelled":"rejected",error:n}}finally{t==null||t()}},uo=e=>t=>qg(Kg(e,t).then(n=>(Nn(e),n))),Vg=e=>{const t=uo(e);return n=>t(new Promise(r=>setTimeout(r,n)))},{assign:tr}=Object,od={},si="listenerMiddleware",hT=(e,t)=>{const n=r=>Ug(e,()=>r.abort(e.reason));return(r,a)=>{uc(r);const o=new AbortController;n(o);const i=dT(async()=>{Nn(e),Nn(o.signal);const s=await r({pause:uo(o.signal),delay:Vg(o.signal),signal:o.signal});return Nn(o.signal),s},()=>o.abort(cT));return a!=null&&a.autoJoin&&t.push(i.catch(co)),{result:uo(e)(i),cancel(){o.abort(lT)}}}},mT=(e,t)=>{const n=async(r,a)=>{Nn(t);let o=()=>{};const s=[new Promise((l,c)=>{let u=e({predicate:r,effect:(h,m)=>{m.unsubscribe(),l([h,m.getState(),m.getOriginalState()])}});o=()=>{u(),c()}})];a!=null&&s.push(new Promise(l=>setTimeout(l,a,null)));try{const l=await Kg(t,Promise.race(s));return Nn(t),l}finally{o()}};return(r,a)=>qg(n(r,a))},Jg=e=>{let{type:t,actionCreator:n,matcher:r,predicate:a,effect:o}=e;if(t)a=gt(t).match;else if(n)t=n.type,a=n.match;else if(r)a=r;else if(!a)throw new Error(it(21));return uc(o),{predicate:a,type:t,effect:o}},Zg=tr(e=>{const{type:t,predicate:n,effect:r}=Jg(e);return{id:Zk(),effect:r,type:t,predicate:n,pending:new Set,unsubscribe:()=>{throw new Error(it(22))}}},{withTypes:()=>Zg}),id=(e,t)=>{const{type:n,effect:r,predicate:a}=Jg(t);return Array.from(e.values()).find(o=>(typeof n=="string"?o.type===n:o.predicate===a)&&o.effect===r)},Js=e=>{e.pending.forEach(t=>{t.abort(Vs)})},pT=(e,t)=>()=>{for(const n of t.keys())Js(n);e.clear()},sd=(e,t,n)=>{try{e(t,n)}catch(r){setTimeout(()=>{throw r},0)}},Xg=tr(gt(`${si}/add`),{withTypes:()=>Xg}),gT=gt(`${si}/removeAll`),Qg=tr(gt(`${si}/remove`),{withTypes:()=>Qg}),yT=(...e)=>{console.error(`${si}/error`,...e)},oa=(e={})=>{const t=new Map,n=new Map,r=p=>{const y=n.get(p)??0;n.set(p,y+1)},a=p=>{const y=n.get(p)??1;y===1?n.delete(p):n.set(p,y-1)},{extra:o,onError:i=yT}=e;uc(i);const s=p=>(p.unsubscribe=()=>t.delete(p.id),t.set(p.id,p),y=>{p.unsubscribe(),y!=null&&y.cancelActive&&Js(p)}),l=p=>{const y=id(t,p)??Zg(p);return s(y)};tr(l,{withTypes:()=>l});const c=p=>{const y=id(t,p);return y&&(y.unsubscribe(),p.cancelActive&&Js(y)),!!y};tr(c,{withTypes:()=>c});const u=async(p,y,f,v)=>{const b=new AbortController,w=mT(l,b.signal),x=[];try{p.pending.add(b),r(p),await Promise.resolve(p.effect(y,tr({},f,{getOriginalState:v,condition:(T,k)=>w(T,k).then(Boolean),take:w,delay:Vg(b.signal),pause:uo(b.signal),extra:o,signal:b.signal,fork:hT(b.signal,x),unsubscribe:p.unsubscribe,subscribe:()=>{t.set(p.id,p)},cancelActiveListeners:()=>{p.pending.forEach((T,k,I)=>{T!==b&&(T.abort(Vs),I.delete(T))})},cancel:()=>{b.abort(Vs),p.pending.delete(b)},throwIfCancelled:()=>{Nn(b.signal)}})))}catch(T){T instanceof ii||sd(i,T,{raisedBy:"effect"})}finally{await Promise.all(x),b.abort(uT),a(p),p.pending.delete(b)}},h=pT(t,n);return{middleware:p=>y=>f=>{if(!Ng(f))return y(f);if(Xg.match(f))return l(f.payload);if(gT.match(f)){h();return}if(Qg.match(f))return c(f.payload);let v=p.getState();const b=()=>{if(v===od)throw new Error(it(23));return v};let w;try{if(w=y(f),t.size>0){const x=p.getState(),T=Array.from(t.values());for(const k of T){let I=!1;try{I=k.predicate(f,x,v)}catch(C){I=!1,sd(i,C,{raisedBy:"predicate"})}I&&u(k,f,p,b)}}}finally{v=od}return w},startListening:l,stopListening:c,clearListeners:h}};function it(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var fT={layoutType:"horizontal",width:0,height:0,margin:{top:5,right:5,bottom:5,left:5},scale:1},ey=nt({name:"chartLayout",initialState:fT,reducers:{setLayout(e,t){e.layoutType=t.payload},setChartSize(e,t){e.width=t.payload.width,e.height=t.payload.height},setMargin(e,t){var n,r,a,o;e.margin.top=(n=t.payload.top)!==null&&n!==void 0?n:0,e.margin.right=(r=t.payload.right)!==null&&r!==void 0?r:0,e.margin.bottom=(a=t.payload.bottom)!==null&&a!==void 0?a:0,e.margin.left=(o=t.payload.left)!==null&&o!==void 0?o:0},setScale(e,t){e.scale=t.payload}}}),{setMargin:vT,setLayout:bT,setChartSize:wT,setScale:xT}=ey.actions,kT=ey.reducer;function ty(e,t,n){return Array.isArray(e)&&e&&t+n!==0?e.slice(t,n+1):e}function ve(e){return Number.isFinite(e)}function pn(e){return typeof e=="number"&&e>0&&Number.isFinite(e)}function ld(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Jn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ld(Object(n),!0).forEach(function(r){TT(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ld(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function TT(e,t,n){return(t=IT(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function IT(e){var t=AT(e,"string");return typeof t=="symbol"?t:t+""}function AT(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ae(e,t,n){return fe(e)||fe(t)?n:Rt(t)?or(e,t,n):typeof t=="function"?t(e):n}var ST=(e,t,n)=>{if(t&&n){var{width:r,height:a}=n,{align:o,verticalAlign:i,layout:s}=t;if((s==="vertical"||s==="horizontal"&&i==="middle")&&o!=="center"&&K(e[o]))return Jn(Jn({},e),{},{[o]:e[o]+(r||0)});if((s==="horizontal"||s==="vertical"&&o==="center")&&i!=="middle"&&K(e[i]))return Jn(Jn({},e),{},{[i]:e[i]+(a||0)})}return e},vn=(e,t)=>e==="horizontal"&&t==="xAxis"||e==="vertical"&&t==="yAxis"||e==="centric"&&t==="angleAxis"||e==="radial"&&t==="radiusAxis",_D=(e,t,n,r)=>{if(r)return e.map(s=>s.coordinate);var a,o,i=e.map(s=>(s.coordinate===t&&(a=!0),s.coordinate===n&&(o=!0),s.coordinate));return a||i.push(t),o||i.push(n),i},WD=(e,t,n)=>{if(!e)return null;var{duplicateDomain:r,type:a,range:o,scale:i,realScaleType:s,isCategorical:l,categoricalDomain:c,tickCount:u,ticks:h,niceTicks:m,axisType:p}=e;if(!i)return null;var y=s==="scaleBand"&&i.bandwidth?i.bandwidth()/2:2,f=(t||n)&&a==="category"&&i.bandwidth?i.bandwidth()/y:0;if(f=p==="angleAxis"&&o&&o.length>=2?Qe(o[0]-o[1])*2*f:f,t&&(h||m)){var v=(h||m||[]).map((b,w)=>{var x=r?r.indexOf(b):b;return{coordinate:i(x)+f,value:b,offset:f,index:w}});return v.filter(b=>!At(b.coordinate))}return l&&c?c.map((b,w)=>({coordinate:i(b)+f,value:b,index:w,offset:f})):i.ticks&&!n&&u!=null?i.ticks(u).map((b,w)=>({coordinate:i(b)+f,value:b,offset:f,index:w})):i.domain().map((b,w)=>({coordinate:i(b)+f,value:r?r[b]:b,index:w,offset:f}))},cd=1e-4,PT=e=>{var t=e.domain();if(!(!t||t.length<=2)){var n=t.length,r=e.range(),a=Math.min(r[0],r[1])-cd,o=Math.max(r[0],r[1])+cd,i=e(t[0]),s=e(t[n-1]);(i<a||i>o||s<a||s>o)&&e.domain([t[0],t[n-1]])}},NT=(e,t)=>{if(!t||t.length!==2||!K(t[0])||!K(t[1]))return e;var n=Math.min(t[0],t[1]),r=Math.max(t[0],t[1]),a=[e[0],e[1]];return(!K(e[0])||e[0]<n)&&(a[0]=n),(!K(e[1])||e[1]>r)&&(a[1]=r),a[0]>r&&(a[0]=r),a[1]<n&&(a[1]=n),a},jT=e=>{var t,n=e.length;if(!(n<=0)){var r=(t=e[0])===null||t===void 0?void 0:t.length;if(!(r==null||r<=0))for(var a=0;a<r;++a)for(var o=0,i=0,s=0;s<n;++s){var l=e[s],c=l==null?void 0:l[a];if(c!=null){var u=c[1],h=c[0],m=At(u)?h:u;m>=0?(c[0]=o,c[1]=o+m,o=u):(c[0]=i,c[1]=i+m,i=u)}}}},OT=e=>{var t,n=e.length;if(!(n<=0)){var r=(t=e[0])===null||t===void 0?void 0:t.length;if(!(r==null||r<=0))for(var a=0;a<r;++a)for(var o=0,i=0;i<n;++i){var s=e[i],l=s==null?void 0:s[a];if(l!=null){var c=At(l[1])?l[0]:l[1];c>=0?(l[0]=o,l[1]=o+c,o=l[1]):(l[0]=0,l[1]=0)}}}},CT={sign:jT,expand:fx,none:En,silhouette:vx,wiggle:bx,positive:OT},ET=(e,t,n)=>{var r,a=(r=CT[n])!==null&&r!==void 0?r:En,o=yx().keys(t).value((s,l)=>Number(Ae(s,l,0))).order(Ws).offset(a),i=o(e);return i.forEach((s,l)=>{s.forEach((c,u)=>{var h=Ae(e[u],t[l],0);Array.isArray(h)&&h.length===2&&K(h[0])&&K(h[1])&&(c[0]=h[0],c[1]=h[1])})}),i};function MT(e){return e==null?void 0:String(e)}function ud(e){var{axis:t,ticks:n,bandSize:r,entry:a,index:o,dataKey:i}=e;if(t.type==="category"){if(!t.allowDuplicatedCategory&&t.dataKey&&!fe(a[t.dataKey])){var s=Kp(n,"value",a[t.dataKey]);if(s)return s.coordinate+r/2}return n[o]?n[o].coordinate+r/2:null}var l=Ae(a,fe(i)?t.dataKey:i);return fe(l)?null:t.scale(l)}var dd=e=>{var{axis:t,ticks:n,offset:r,bandSize:a,entry:o,index:i}=e;if(t.type==="category")return n[i]?n[i].coordinate+r:null;var s=Ae(o,t.dataKey,t.scale.domain()[i]);return fe(s)?null:t.scale(s)-a/2+r},$T=e=>{var{numericAxis:t}=e,n=t.scale.domain();if(t.type==="number"){var r=Math.min(n[0],n[1]),a=Math.max(n[0],n[1]);return r<=0&&a>=0?0:a<0?a:r}return n[0]},DT=e=>{var t=e.flat(2).filter(K);return[Math.min(...t),Math.max(...t)]},BT=e=>[e[0]===1/0?0:e[0],e[1]===-1/0?0:e[1]],RT=(e,t,n)=>{if(e!=null)return BT(Object.keys(e).reduce((r,a)=>{var o=e[a];if(!o)return r;var{stackedData:i}=o,s=i.reduce((l,c)=>{var u=ty(c,t,n),h=DT(u);return!ve(h[0])||!ve(h[1])?l:[Math.min(l[0],h[0]),Math.max(l[1],h[1])]},[1/0,-1/0]);return[Math.min(s[0],r[0]),Math.max(s[1],r[1])]},[1/0,-1/0]))},hd=/^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,md=/^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,lr=(e,t,n)=>{if(e&&e.scale&&e.scale.bandwidth){var r=e.scale.bandwidth();if(!n||r>0)return r}if(e&&t&&t.length>=2){for(var a=Qo(t,u=>u.coordinate),o=1/0,i=1,s=a.length;i<s;i++){var l=a[i],c=a[i-1];o=Math.min(((l==null?void 0:l.coordinate)||0)-((c==null?void 0:c.coordinate)||0),o)}return o===1/0?0:o}return n?void 0:0};function pd(e){var{tooltipEntrySettings:t,dataKey:n,payload:r,value:a,name:o}=e;return Jn(Jn({},t),{},{dataKey:n,payload:r,value:a,name:o})}function li(e,t){if(e)return String(e);if(typeof t=="string")return t}var _T=(e,t)=>{if(t==="horizontal")return e.chartX;if(t==="vertical")return e.chartY},WT=(e,t)=>t==="centric"?e.angle:e.radius,tn=e=>e.layout.width,nn=e=>e.layout.height,LT=e=>e.layout.scale,ny=e=>e.layout.margin,ci=j(e=>e.cartesianAxis.xAxis,e=>Object.values(e)),ui=j(e=>e.cartesianAxis.yAxis,e=>Object.values(e)),FT="data-recharts-item-index",HT="data-recharts-item-id",ia=60;function gd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ea(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?gd(Object(n),!0).forEach(function(r){zT(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function zT(e,t,n){return(t=YT(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function YT(e){var t=GT(e,"string");return typeof t=="symbol"?t:t+""}function GT(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var qT=e=>e.brush.height;function UT(e){var t=ui(e);return t.reduce((n,r)=>{if(r.orientation==="left"&&!r.mirror&&!r.hide){var a=typeof r.width=="number"?r.width:ia;return n+a}return n},0)}function KT(e){var t=ui(e);return t.reduce((n,r)=>{if(r.orientation==="right"&&!r.mirror&&!r.hide){var a=typeof r.width=="number"?r.width:ia;return n+a}return n},0)}function VT(e){var t=ci(e);return t.reduce((n,r)=>r.orientation==="top"&&!r.mirror&&!r.hide?n+r.height:n,0)}function JT(e){var t=ci(e);return t.reduce((n,r)=>r.orientation==="bottom"&&!r.mirror&&!r.hide?n+r.height:n,0)}var _e=j([tn,nn,ny,qT,UT,KT,VT,JT,Ag,wk],(e,t,n,r,a,o,i,s,l,c)=>{var u={left:(n.left||0)+a,right:(n.right||0)+o},h={top:(n.top||0)+i,bottom:(n.bottom||0)+s},m=Ea(Ea({},h),u),p=m.bottom;m.bottom+=r,m=ST(m,l,c);var y=e-m.left-m.right,f=t-m.top-m.bottom;return Ea(Ea({brushBottom:p},m),{},{width:Math.max(y,0),height:Math.max(f,0)})}),ZT=j(_e,e=>({x:e.left,y:e.top,width:e.width,height:e.height})),dc=j(tn,nn,(e,t)=>({x:0,y:0,width:e,height:t})),XT=g.createContext(null),Ze=()=>g.useContext(XT)!=null,di=e=>e.brush,hi=j([di,_e,ny],(e,t,n)=>({height:e.height,x:K(e.x)?e.x:t.left,y:K(e.y)?e.y:t.top+t.height+t.brushBottom-((n==null?void 0:n.bottom)||0),width:K(e.width)?e.width:t.width})),ry={},ay={},oy={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n,r,{signal:a,edges:o}={}){let i,s=null;const l=o!=null&&o.includes("leading"),c=o==null||o.includes("trailing"),u=()=>{s!==null&&(n.apply(i,s),i=void 0,s=null)},h=()=>{c&&u(),f()};let m=null;const p=()=>{m!=null&&clearTimeout(m),m=setTimeout(()=>{m=null,h()},r)},y=()=>{m!==null&&(clearTimeout(m),m=null)},f=()=>{y(),i=void 0,s=null},v=()=>{u()},b=function(...w){if(a!=null&&a.aborted)return;i=this,s=w;const x=m==null;p(),l&&x&&u()};return b.schedule=p,b.cancel=f,b.flush=v,a==null||a.addEventListener("abort",f,{once:!0}),b}e.debounce=t})(oy);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=oy;function n(r,a=0,o={}){typeof o!="object"&&(o={});const{leading:i=!1,trailing:s=!0,maxWait:l}=o,c=Array(2);i&&(c[0]="leading"),s&&(c[1]="trailing");let u,h=null;const m=t.debounce(function(...f){u=r.apply(this,f),h=null},a,{edges:c}),p=function(...f){return l!=null&&(h===null&&(h=Date.now()),Date.now()-h>=l)?(u=r.apply(this,f),h=Date.now(),m.cancel(),m.schedule(),u):(m.apply(this,f),u)},y=()=>(m.flush(),u);return p.cancel=m.cancel,p.flush=y,p}e.debounce=n})(ay);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=ay;function n(r,a=0,o={}){const{leading:i=!0,trailing:s=!0}=o;return t.debounce(r,a,{leading:i,maxWait:a,trailing:s})}e.throttle=n})(ry);var QT=ry.throttle;const e1=Nt(QT);var yd=function(t,n){for(var r=arguments.length,a=new Array(r>2?r-2:0),o=2;o<r;o++)a[o-2]=arguments[o];if(typeof console<"u"&&console.warn&&(n===void 0&&console.warn("LogUtils requires an error message argument"),!t))if(n===void 0)console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var i=0;console.warn(n.replace(/%s/g,()=>a[i++]))}},iy=(e,t,n)=>{var{width:r="100%",height:a="100%",aspect:o,maxHeight:i}=n,s=Kt(r)?e:Number(r),l=Kt(a)?t:Number(a);return o&&o>0&&(s?l=s/o:l&&(s=l*o),i&&l!=null&&l>i&&(l=i)),{calculatedWidth:s,calculatedHeight:l}},t1={width:0,height:0,overflow:"visible"},n1={width:0,overflowX:"visible"},r1={height:0,overflowY:"visible"},a1={},o1=e=>{var{width:t,height:n}=e,r=Kt(t),a=Kt(n);return r&&a?t1:r?n1:a?r1:a1};function i1(e){var{width:t,height:n,aspect:r}=e,a=t,o=n;return a===void 0&&o===void 0?(a="100%",o="100%"):a===void 0?a=r&&r>0?void 0:"100%":o===void 0&&(o=r&&r>0?void 0:"100%"),{width:a,height:o}}function Zs(){return Zs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zs.apply(null,arguments)}function fd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function vd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?fd(Object(n),!0).forEach(function(r){s1(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function s1(e,t,n){return(t=l1(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l1(e){var t=c1(e,"string");return typeof t=="symbol"?t:t+""}function c1(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var sy=g.createContext({width:-1,height:-1});function u1(e){return pn(e.width)&&pn(e.height)}function ly(e){var{children:t,width:n,height:r}=e,a=g.useMemo(()=>({width:n,height:r}),[n,r]);return u1(a)?g.createElement(sy.Provider,{value:a},t):null}var hc=()=>g.useContext(sy),d1=g.forwardRef((e,t)=>{var{aspect:n,initialDimension:r={width:-1,height:-1},width:a,height:o,minWidth:i=0,minHeight:s,maxHeight:l,children:c,debounce:u=0,id:h,className:m,onResize:p,style:y={}}=e,f=g.useRef(null),v=g.useRef();v.current=p,g.useImperativeHandle(t,()=>f.current);var[b,w]=g.useState({containerWidth:r.width,containerHeight:r.height}),x=g.useCallback((O,M)=>{w($=>{var A=Math.round(O),N=Math.round(M);return $.containerWidth===A&&$.containerHeight===N?$:{containerWidth:A,containerHeight:N}})},[]);g.useEffect(()=>{if(f.current==null||typeof ResizeObserver>"u")return na;var O=N=>{var D,{width:L,height:U}=N[0].contentRect;x(L,U),(D=v.current)===null||D===void 0||D.call(v,L,U)};u>0&&(O=e1(O,u,{trailing:!0,leading:!1}));var M=new ResizeObserver(O),{width:$,height:A}=f.current.getBoundingClientRect();return x($,A),M.observe(f.current),()=>{M.disconnect()}},[x,u]);var{containerWidth:T,containerHeight:k}=b;yd(!n||n>0,"The aspect(%s) must be greater than zero.",n);var{calculatedWidth:I,calculatedHeight:C}=iy(T,k,{width:a,height:o,aspect:n,maxHeight:l});return yd(I!=null&&I>0||C!=null&&C>0,`The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`,I,C,a,o,i,s,n),g.createElement("div",{id:h?"".concat(h):void 0,className:ie("recharts-responsive-container",m),style:vd(vd({},y),{},{width:a,height:o,minWidth:i,minHeight:s,maxHeight:l}),ref:f},g.createElement("div",{style:o1({width:a,height:o})},g.createElement(ly,{width:I,height:C},c)))}),h1=g.forwardRef((e,t)=>{var n=hc();if(pn(n.width)&&pn(n.height))return e.children;var{width:r,height:a}=i1({width:e.width,height:e.height,aspect:e.aspect}),{calculatedWidth:o,calculatedHeight:i}=iy(void 0,void 0,{width:r,height:a,aspect:e.aspect,maxHeight:e.maxHeight});return K(o)&&K(i)?g.createElement(ly,{width:o,height:i},e.children):g.createElement(d1,Zs({},e,{width:r,height:a,ref:t}))});function cy(e){if(e)return{x:e.x,y:e.y,upperWidth:"upperWidth"in e?e.upperWidth:e.width,lowerWidth:"lowerWidth"in e?e.lowerWidth:e.width,width:e.width,height:e.height}}var mi=()=>{var e,t=Ze(),n=V(ZT),r=V(hi),a=(e=V(di))===null||e===void 0?void 0:e.padding;return!t||!r||!a?n:{width:r.width-a.left-a.right,height:r.height-a.top-a.bottom,x:a.left,y:a.top}},m1={top:0,bottom:0,left:0,right:0,width:0,height:0,brushBottom:0},p1=()=>{var e;return(e=V(_e))!==null&&e!==void 0?e:m1},g1=()=>V(tn),y1=()=>V(nn),ae=e=>e.layout.layoutType,Ln=()=>V(ae),LD=()=>{var e=Ln();if(e==="horizontal"||e==="vertical")return e},f1=()=>{var e=Ln();return e!==void 0},pi=e=>{var t=ke(),n=Ze(),{width:r,height:a}=e,o=hc(),i=r,s=a;return o&&(i=o.width>0?o.width:r,s=o.height>0?o.height:a),g.useEffect(()=>{!n&&pn(i)&&pn(s)&&t(wT({width:i,height:s}))},[t,n,i,s]),null},uy=Symbol.for("immer-nothing"),bd=Symbol.for("immer-draftable"),st=Symbol.for("immer-state");function xt(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Wr=Object.getPrototypeOf;function cr(e){return!!e&&!!e[st]}function $n(e){var t;return e?dy(e)||Array.isArray(e)||!!e[bd]||!!((t=e.constructor)!=null&&t[bd])||sa(e)||yi(e):!1}var v1=Object.prototype.constructor.toString(),wd=new WeakMap;function dy(e){if(!e||typeof e!="object")return!1;const t=Object.getPrototypeOf(e);if(t===null||t===Object.prototype)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;if(n===Object)return!0;if(typeof n!="function")return!1;let r=wd.get(n);return r===void 0&&(r=Function.toString.call(n),wd.set(n,r)),r===v1}function ho(e,t,n=!0){gi(e)===0?(n?Reflect.ownKeys(e):Object.keys(e)).forEach(a=>{t(a,e[a],e)}):e.forEach((r,a)=>t(a,r,e))}function gi(e){const t=e[st];return t?t.type_:Array.isArray(e)?1:sa(e)?2:yi(e)?3:0}function Xs(e,t){return gi(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function hy(e,t,n){const r=gi(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function b1(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function sa(e){return e instanceof Map}function yi(e){return e instanceof Set}function kn(e){return e.copy_||e.base_}function Qs(e,t){if(sa(e))return new Map(e);if(yi(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const n=dy(e);if(t===!0||t==="class_only"&&!n){const r=Object.getOwnPropertyDescriptors(e);delete r[st];let a=Reflect.ownKeys(r);for(let o=0;o<a.length;o++){const i=a[o],s=r[i];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(r[i]={configurable:!0,writable:!0,enumerable:s.enumerable,value:e[i]})}return Object.create(Wr(e),r)}else{const r=Wr(e);if(r!==null&&n)return{...e};const a=Object.create(r);return Object.assign(a,e)}}function mc(e,t=!1){return fi(e)||cr(e)||!$n(e)||(gi(e)>1&&Object.defineProperties(e,{set:Ma,add:Ma,clear:Ma,delete:Ma}),Object.freeze(e),t&&Object.values(e).forEach(n=>mc(n,!0))),e}function w1(){xt(2)}var Ma={value:w1};function fi(e){return e===null||typeof e!="object"?!0:Object.isFrozen(e)}var x1={};function Dn(e){const t=x1[e];return t||xt(0,e),t}var Lr;function my(){return Lr}function k1(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function xd(e,t){t&&(Dn("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function el(e){tl(e),e.drafts_.forEach(T1),e.drafts_=null}function tl(e){e===Lr&&(Lr=e.parent_)}function kd(e){return Lr=k1(Lr,e)}function T1(e){const t=e[st];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function Td(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return e!==void 0&&e!==n?(n[st].modified_&&(el(t),xt(4)),$n(e)&&(e=mo(t,e),t.parent_||po(t,e)),t.patches_&&Dn("Patches").generateReplacementPatches_(n[st].base_,e,t.patches_,t.inversePatches_)):e=mo(t,n,[]),el(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==uy?e:void 0}function mo(e,t,n){if(fi(t))return t;const r=e.immer_.shouldUseStrictIteration(),a=t[st];if(!a)return ho(t,(o,i)=>Id(e,a,t,o,i,n),r),t;if(a.scope_!==e)return t;if(!a.modified_)return po(e,a.base_,!0),a.base_;if(!a.finalized_){a.finalized_=!0,a.scope_.unfinalizedDrafts_--;const o=a.copy_;let i=o,s=!1;a.type_===3&&(i=new Set(o),o.clear(),s=!0),ho(i,(l,c)=>Id(e,a,o,l,c,n,s),r),po(e,o,!1),n&&e.patches_&&Dn("Patches").generatePatches_(a,n,e.patches_,e.inversePatches_)}return a.copy_}function Id(e,t,n,r,a,o,i){if(a==null||typeof a!="object"&&!i)return;const s=fi(a);if(!(s&&!i)){if(cr(a)){const l=o&&t&&t.type_!==3&&!Xs(t.assigned_,r)?o.concat(r):void 0,c=mo(e,a,l);if(hy(n,r,c),cr(c))e.canAutoFreeze_=!1;else return}else i&&n.add(a);if($n(a)&&!s){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1||t&&t.base_&&t.base_[r]===a&&s)return;mo(e,a),(!t||!t.scope_.parent_)&&typeof r!="symbol"&&(sa(n)?n.has(r):Object.prototype.propertyIsEnumerable.call(n,r))&&po(e,a)}}}function po(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&mc(t,n)}function I1(e,t){const n=Array.isArray(e),r={type_:n?1:0,scope_:t?t.scope_:my(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let a=r,o=pc;n&&(a=[r],o=Fr);const{revoke:i,proxy:s}=Proxy.revocable(a,o);return r.draft_=s,r.revoke_=i,s}var pc={get(e,t){if(t===st)return e;const n=kn(e);if(!Xs(n,t))return A1(e,n,t);const r=n[t];return e.finalized_||!$n(r)?r:r===is(e.base_,t)?(ss(e),e.copy_[t]=rl(r,e)):r},has(e,t){return t in kn(e)},ownKeys(e){return Reflect.ownKeys(kn(e))},set(e,t,n){const r=py(kn(e),t);if(r!=null&&r.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const a=is(kn(e),t),o=a==null?void 0:a[st];if(o&&o.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(b1(n,a)&&(n!==void 0||Xs(e.base_,t)))return!0;ss(e),nl(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty(e,t){return is(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,ss(e),nl(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=kn(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty(){xt(11)},getPrototypeOf(e){return Wr(e.base_)},setPrototypeOf(){xt(12)}},Fr={};ho(pc,(e,t)=>{Fr[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});Fr.deleteProperty=function(e,t){return Fr.set.call(this,e,t,void 0)};Fr.set=function(e,t,n){return pc.set.call(this,e[0],t,n,e[0])};function is(e,t){const n=e[st];return(n?kn(n):e)[t]}function A1(e,t,n){var a;const r=py(t,n);return r?"value"in r?r.value:(a=r.get)==null?void 0:a.call(e.draft_):void 0}function py(e,t){if(!(t in e))return;let n=Wr(e);for(;n;){const r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Wr(n)}}function nl(e){e.modified_||(e.modified_=!0,e.parent_&&nl(e.parent_))}function ss(e){e.copy_||(e.copy_=Qs(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var S1=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!0,this.produce=(t,n,r)=>{if(typeof t=="function"&&typeof n!="function"){const o=n;n=t;const i=this;return function(l=o,...c){return i.produce(l,u=>n.call(this,u,...c))}}typeof n!="function"&&xt(6),r!==void 0&&typeof r!="function"&&xt(7);let a;if($n(t)){const o=kd(this),i=rl(t,void 0);let s=!0;try{a=n(i),s=!1}finally{s?el(o):tl(o)}return xd(o,r),Td(a,o)}else if(!t||typeof t!="object"){if(a=n(t),a===void 0&&(a=t),a===uy&&(a=void 0),this.autoFreeze_&&mc(a,!0),r){const o=[],i=[];Dn("Patches").generateReplacementPatches_(t,a,o,i),r(o,i)}return a}else xt(1,t)},this.produceWithPatches=(t,n)=>{if(typeof t=="function")return(i,...s)=>this.produceWithPatches(i,l=>t(l,...s));let r,a;return[this.produce(t,n,(i,s)=>{r=i,a=s}),r,a]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),typeof(e==null?void 0:e.useStrictIteration)=="boolean"&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){$n(e)||xt(8),cr(e)&&(e=P1(e));const t=kd(this),n=rl(e,void 0);return n[st].isManual_=!0,tl(t),n}finishDraft(e,t){const n=e&&e[st];(!n||!n.isManual_)&&xt(9);const{scope_:r}=n;return xd(r,t),Td(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const a=t[n];if(a.path.length===0&&a.op==="replace"){e=a.value;break}}n>-1&&(t=t.slice(n+1));const r=Dn("Patches").applyPatches_;return cr(e)?r(e,t):this.produce(e,a=>r(a,t))}};function rl(e,t){const n=sa(e)?Dn("MapSet").proxyMap_(e,t):yi(e)?Dn("MapSet").proxySet_(e,t):I1(e,t);return(t?t.scope_:my()).drafts_.push(n),n}function P1(e){return cr(e)||xt(10,e),gy(e)}function gy(e){if(!$n(e)||fi(e))return e;const t=e[st];let n,r=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=Qs(e,t.scope_.immer_.useStrictShallowCopy_),r=t.scope_.immer_.shouldUseStrictIteration()}else n=Qs(e,!0);return ho(n,(a,o)=>{hy(n,a,gy(o))},r),t&&(t.finalized_=!1),n}var N1=new S1;N1.produce;var j1={settings:{layout:"horizontal",align:"center",verticalAlign:"middle",itemSorter:"value"},size:{width:0,height:0},payload:[]},yy=nt({name:"legend",initialState:j1,reducers:{setLegendSize(e,t){e.size.width=t.payload.width,e.size.height=t.payload.height},setLegendSettings(e,t){e.settings.align=t.payload.align,e.settings.layout=t.payload.layout,e.settings.verticalAlign=t.payload.verticalAlign,e.settings.itemSorter=t.payload.itemSorter},addLegendPayload:{reducer(e,t){e.payload.push(t.payload)},prepare:ge()},replaceLegendPayload:{reducer(e,t){var{prev:n,next:r}=t.payload,a=It(e).payload.indexOf(n);a>-1&&(e.payload[a]=r)},prepare:ge()},removeLegendPayload:{reducer(e,t){var n=It(e).payload.indexOf(t.payload);n>-1&&e.payload.splice(n,1)},prepare:ge()}}}),{setLegendSize:FD,setLegendSettings:HD,addLegendPayload:O1,replaceLegendPayload:C1,removeLegendPayload:E1}=yy.actions,M1=yy.reducer;function al(){return al=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},al.apply(null,arguments)}function Ad(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ls(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ad(Object(n),!0).forEach(function(r){$1(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ad(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function $1(e,t,n){return(t=D1(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function D1(e){var t=B1(e,"string");return typeof t=="symbol"?t:t+""}function B1(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function R1(e){return Array.isArray(e)&&Rt(e[0])&&Rt(e[1])?e.join(" ~ "):e}var _1=e=>{var{separator:t=" : ",contentStyle:n={},itemStyle:r={},labelStyle:a={},payload:o,formatter:i,itemSorter:s,wrapperClassName:l,labelClassName:c,label:u,labelFormatter:h,accessibilityLayer:m=!1}=e,p=()=>{if(o&&o.length){var k={padding:0,margin:0},I=(s?Qo(o,s):o).map((C,O)=>{if(C.type==="none")return null;var M=C.formatter||i||R1,{value:$,name:A}=C,N=$,D=A;if(M){var L=M($,A,C,O,o);if(Array.isArray(L))[N,D]=L;else if(L!=null)N=L;else return null}var U=ls({display:"block",paddingTop:4,paddingBottom:4,color:C.color||"#000"},r);return g.createElement("li",{className:"recharts-tooltip-item",key:"tooltip-item-".concat(O),style:U},Rt(D)?g.createElement("span",{className:"recharts-tooltip-item-name"},D):null,Rt(D)?g.createElement("span",{className:"recharts-tooltip-item-separator"},t):null,g.createElement("span",{className:"recharts-tooltip-item-value"},N),g.createElement("span",{className:"recharts-tooltip-item-unit"},C.unit||""))});return g.createElement("ul",{className:"recharts-tooltip-item-list",style:k},I)}return null},y=ls({margin:0,padding:10,backgroundColor:"#fff",border:"1px solid #ccc",whiteSpace:"nowrap"},n),f=ls({margin:0},a),v=!fe(u),b=v?u:"",w=ie("recharts-default-tooltip",l),x=ie("recharts-tooltip-label",c);v&&h&&o!==void 0&&o!==null&&(b=h(u,o));var T=m?{role:"status","aria-live":"assertive"}:{};return g.createElement("div",al({className:w,style:y},T),g.createElement("p",{className:x,style:f},g.isValidElement(b)?b:"".concat(b)),p())},Tr="recharts-tooltip-wrapper",W1={visibility:"hidden"};function L1(e){var{coordinate:t,translateX:n,translateY:r}=e;return ie(Tr,{["".concat(Tr,"-right")]:K(n)&&t&&K(t.x)&&n>=t.x,["".concat(Tr,"-left")]:K(n)&&t&&K(t.x)&&n<t.x,["".concat(Tr,"-bottom")]:K(r)&&t&&K(t.y)&&r>=t.y,["".concat(Tr,"-top")]:K(r)&&t&&K(t.y)&&r<t.y})}function Sd(e){var{allowEscapeViewBox:t,coordinate:n,key:r,offsetTopLeft:a,position:o,reverseDirection:i,tooltipDimension:s,viewBox:l,viewBoxDimension:c}=e;if(o&&K(o[r]))return o[r];var u=n[r]-s-(a>0?a:0),h=n[r]+a;if(t[r])return i[r]?u:h;var m=l[r];if(m==null)return 0;if(i[r]){var p=u,y=m;return p<y?Math.max(h,m):Math.max(u,m)}if(c==null)return 0;var f=h+s,v=m+c;return f>v?Math.max(u,m):Math.max(h,m)}function F1(e){var{translateX:t,translateY:n,useTranslate3d:r}=e;return{transform:r?"translate3d(".concat(t,"px, ").concat(n,"px, 0)"):"translate(".concat(t,"px, ").concat(n,"px)")}}function H1(e){var{allowEscapeViewBox:t,coordinate:n,offsetTopLeft:r,position:a,reverseDirection:o,tooltipBox:i,useTranslate3d:s,viewBox:l}=e,c,u,h;return i.height>0&&i.width>0&&n?(u=Sd({allowEscapeViewBox:t,coordinate:n,key:"x",offsetTopLeft:r,position:a,reverseDirection:o,tooltipDimension:i.width,viewBox:l,viewBoxDimension:l.width}),h=Sd({allowEscapeViewBox:t,coordinate:n,key:"y",offsetTopLeft:r,position:a,reverseDirection:o,tooltipDimension:i.height,viewBox:l,viewBoxDimension:l.height}),c=F1({translateX:u,translateY:h,useTranslate3d:s})):c=W1,{cssProperties:c,cssClasses:L1({translateX:u,translateY:h,coordinate:n})}}function Pd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function $a(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Pd(Object(n),!0).forEach(function(r){ol(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ol(e,t,n){return(t=z1(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function z1(e){var t=Y1(e,"string");return typeof t=="symbol"?t:t+""}function Y1(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}class G1 extends g.PureComponent{constructor(){super(...arguments),ol(this,"state",{dismissed:!1,dismissedAtCoordinate:{x:0,y:0}}),ol(this,"handleKeyDown",t=>{if(t.key==="Escape"){var n,r,a,o;this.setState({dismissed:!0,dismissedAtCoordinate:{x:(n=(r=this.props.coordinate)===null||r===void 0?void 0:r.x)!==null&&n!==void 0?n:0,y:(a=(o=this.props.coordinate)===null||o===void 0?void 0:o.y)!==null&&a!==void 0?a:0}})}})}componentDidMount(){document.addEventListener("keydown",this.handleKeyDown)}componentWillUnmount(){document.removeEventListener("keydown",this.handleKeyDown)}componentDidUpdate(){var t,n;this.state.dismissed&&(((t=this.props.coordinate)===null||t===void 0?void 0:t.x)!==this.state.dismissedAtCoordinate.x||((n=this.props.coordinate)===null||n===void 0?void 0:n.y)!==this.state.dismissedAtCoordinate.y)&&(this.state.dismissed=!1)}render(){var{active:t,allowEscapeViewBox:n,animationDuration:r,animationEasing:a,children:o,coordinate:i,hasPayload:s,isAnimationActive:l,offset:c,position:u,reverseDirection:h,useTranslate3d:m,viewBox:p,wrapperStyle:y,lastBoundingBox:f,innerRef:v,hasPortalFromProps:b}=this.props,{cssClasses:w,cssProperties:x}=H1({allowEscapeViewBox:n,coordinate:i,offsetTopLeft:c,position:u,reverseDirection:h,tooltipBox:{height:f.height,width:f.width},useTranslate3d:m,viewBox:p}),T=b?{}:$a($a({transition:l&&t?"transform ".concat(r,"ms ").concat(a):void 0},x),{},{pointerEvents:"none",visibility:!this.state.dismissed&&t&&s?"visible":"hidden",position:"absolute",top:0,left:0}),k=$a($a({},T),{},{visibility:!this.state.dismissed&&t&&s?"visible":"hidden"},y);return g.createElement("div",{xmlns:"http://www.w3.org/1999/xhtml",tabIndex:-1,className:w,style:k,ref:v},o)}}var fy=()=>{var e;return(e=V(t=>t.rootProps.accessibilityLayer))!==null&&e!==void 0?e:!0};function il(){return il=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},il.apply(null,arguments)}function Nd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function jd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Nd(Object(n),!0).forEach(function(r){q1(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Nd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function q1(e,t,n){return(t=U1(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function U1(e){var t=K1(e,"string");return typeof t=="symbol"?t:t+""}function K1(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Od={curveBasisClosed:ox,curveBasisOpen:ix,curveBasis:ax,curveBumpX:Yw,curveBumpY:Gw,curveLinearClosed:sx,curveLinear:qo,curveMonotoneX:lx,curveMonotoneY:cx,curveNatural:ux,curveStep:dx,curveStepAfter:mx,curveStepBefore:hx},go=e=>ve(e.x)&&ve(e.y),Cd=e=>e.base!=null&&go(e.base)&&go(e),Ir=e=>e.x,Ar=e=>e.y,V1=(e,t)=>{if(typeof e=="function")return e;var n="curve".concat(ta(e));return(n==="curveMonotone"||n==="curveBump")&&t?Od["".concat(n).concat(t==="vertical"?"Y":"X")]:Od[n]||qo},J1=e=>{var{type:t="linear",points:n=[],baseLine:r,layout:a,connectNulls:o=!1}=e,i=V1(t,a),s=o?n.filter(go):n,l;if(Array.isArray(r)){var c=n.map((p,y)=>jd(jd({},p),{},{base:r[y]}));a==="vertical"?l=Sa().y(Ar).x1(Ir).x0(p=>p.base.x):l=Sa().x(Ir).y1(Ar).y0(p=>p.base.y);var u=l.defined(Cd).curve(i),h=o?c.filter(Cd):c;return u(h)}a==="vertical"&&K(r)?l=Sa().y(Ar).x1(Ir).x0(r):K(r)?l=Sa().x(Ir).y1(Ar).y0(r):l=$p().x(Ir).y(Ar);var m=l.defined(go).curve(i);return m(s)},vy=e=>{var{className:t,points:n,path:r,pathRef:a}=e,o=Ln();if((!n||!n.length)&&!r)return null;var i={type:e.type,points:e.points,baseLine:e.baseLine,layout:e.layout||o,connectNulls:e.connectNulls},s=n&&n.length?J1(i):r;return g.createElement("path",il({},Bt(e),zl(e),{className:ie("recharts-curve",t),d:s===null?void 0:s,ref:a}))},Z1=["x","y","top","left","width","height","className"];function sl(){return sl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},sl.apply(null,arguments)}function Ed(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function X1(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ed(Object(n),!0).forEach(function(r){Q1(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ed(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Q1(e,t,n){return(t=eI(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function eI(e){var t=tI(e,"string");return typeof t=="symbol"?t:t+""}function tI(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function nI(e,t){if(e==null)return{};var n,r,a=rI(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function rI(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}var aI=(e,t,n,r,a,o)=>"M".concat(e,",").concat(a,"v").concat(r,"M").concat(o,",").concat(t,"h").concat(n),oI=e=>{var{x:t=0,y:n=0,top:r=0,left:a=0,width:o=0,height:i=0,className:s}=e,l=nI(e,Z1),c=X1({x:t,y:n,top:r,left:a,width:o,height:i},l);return!K(t)||!K(n)||!K(o)||!K(i)||!K(r)||!K(a)?null:g.createElement("path",sl({},Ve(c),{className:ie("recharts-cross",s),d:aI(t,n,o,i,r,a)}))};function iI(e,t,n,r){var a=r/2;return{stroke:"none",fill:"#ccc",x:e==="horizontal"?t.x-a:n.left+.5,y:e==="horizontal"?n.top+.5:t.y-a,width:e==="horizontal"?r:n.width-1,height:e==="horizontal"?n.height-1:r}}function Md(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function $d(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Md(Object(n),!0).forEach(function(r){sI(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Md(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function sI(e,t,n){return(t=lI(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function lI(e){var t=cI(e,"string");return typeof t=="symbol"?t:t+""}function cI(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var uI=e=>e.replace(/([A-Z])/g,t=>"-".concat(t.toLowerCase())),by=(e,t,n)=>e.map(r=>"".concat(uI(r)," ").concat(t,"ms ").concat(n)).join(","),dI=(e,t)=>[Object.keys(e),Object.keys(t)].reduce((n,r)=>n.filter(a=>r.includes(a))),Hr=(e,t)=>Object.keys(t).reduce((n,r)=>$d($d({},n),{},{[r]:e(r,t[r])}),{});function Dd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Pe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Dd(Object(n),!0).forEach(function(r){hI(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Dd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function hI(e,t,n){return(t=mI(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function mI(e){var t=pI(e,"string");return typeof t=="symbol"?t:t+""}function pI(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var yo=(e,t,n)=>e+(t-e)*n,ll=e=>{var{from:t,to:n}=e;return t!==n},wy=(e,t,n)=>{var r=Hr((a,o)=>{if(ll(o)){var[i,s]=e(o.from,o.to,o.velocity);return Pe(Pe({},o),{},{from:i,velocity:s})}return o},t);return n<1?Hr((a,o)=>ll(o)&&r[a]!=null?Pe(Pe({},o),{},{velocity:yo(o.velocity,r[a].velocity,n),from:yo(o.from,r[a].from,n)}):o,t):wy(e,r,n-1)};function gI(e,t,n,r,a,o){var i,s=r.reduce((m,p)=>Pe(Pe({},m),{},{[p]:{from:e[p],velocity:0,to:t[p]}}),{}),l=()=>Hr((m,p)=>p.from,s),c=()=>!Object.values(s).filter(ll).length,u=null,h=m=>{i||(i=m);var p=m-i,y=p/n.dt;s=wy(n,s,y),a(Pe(Pe(Pe({},e),t),l())),i=m,c()||(u=o.setTimeout(h))};return()=>(u=o.setTimeout(h),()=>{var m;(m=u)===null||m===void 0||m()})}function yI(e,t,n,r,a,o,i){var s=null,l=a.reduce((h,m)=>{var p=e[m],y=t[m];return p==null||y==null?h:Pe(Pe({},h),{},{[m]:[p,y]})},{}),c,u=h=>{c||(c=h);var m=(h-c)/r,p=Hr((f,v)=>yo(...v,n(m)),l);if(o(Pe(Pe(Pe({},e),t),p)),m<1)s=i.setTimeout(u);else{var y=Hr((f,v)=>yo(...v,n(1)),l);o(Pe(Pe(Pe({},e),t),y))}};return()=>(s=i.setTimeout(u),()=>{var h;(h=s)===null||h===void 0||h()})}const fI=(e,t,n,r,a,o)=>{var i=dI(e,t);return n==null?()=>(a(Pe(Pe({},e),t)),()=>{}):n.isStepper===!0?gI(e,t,n,i,a,o):yI(e,t,n,r,i,a,o)};var fo=1e-4,xy=(e,t)=>[0,3*e,3*t-6*e,3*e-3*t+1],ky=(e,t)=>e.map((n,r)=>n*t**r).reduce((n,r)=>n+r),Bd=(e,t)=>n=>{var r=xy(e,t);return ky(r,n)},vI=(e,t)=>n=>{var r=xy(e,t),a=[...r.map((o,i)=>o*i).slice(1),0];return ky(a,n)},bI=e=>{var t,n=e.split("(");if(n.length!==2||n[0]!=="cubic-bezier")return null;var r=(t=n[1])===null||t===void 0||(t=t.split(")")[0])===null||t===void 0?void 0:t.split(",");if(r==null||r.length!==4)return null;var a=r.map(o=>parseFloat(o));return[a[0],a[1],a[2],a[3]]},wI=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];if(n.length===1)switch(n[0]){case"linear":return[0,0,1,1];case"ease":return[.25,.1,.25,1];case"ease-in":return[.42,0,1,1];case"ease-out":return[.42,0,.58,1];case"ease-in-out":return[0,0,.58,1];default:{var a=bI(n[0]);if(a)return a}}return n.length===4?n:[0,0,1,1]},xI=(e,t,n,r)=>{var a=Bd(e,n),o=Bd(t,r),i=vI(e,n),s=c=>c>1?1:c<0?0:c,l=c=>{for(var u=c>1?1:c,h=u,m=0;m<8;++m){var p=a(h)-u,y=i(h);if(Math.abs(p-u)<fo||y<fo)return o(h);h=s(h-p/y)}return o(h)};return l.isStepper=!1,l},Rd=function(){return xI(...wI(...arguments))},kI=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{stiff:n=100,damping:r=8,dt:a=17}=t,o=(i,s,l)=>{var c=-(i-s)*n,u=l*r,h=l+(c-u)*a/1e3,m=l*a/1e3+i;return Math.abs(m-s)<fo&&Math.abs(h)<fo?[s,0]:[m,h]};return o.isStepper=!0,o.dt=a,o},TI=e=>{if(typeof e=="string")switch(e){case"ease":case"ease-in-out":case"ease-out":case"ease-in":case"linear":return Rd(e);case"spring":return kI();default:if(e.split("(")[0]==="cubic-bezier")return Rd(e)}return typeof e=="function"?e:null};function II(e){var t,n=()=>null,r=!1,a=null,o=i=>{if(!r){if(Array.isArray(i)){if(!i.length)return;var s=i,[l,...c]=s;if(typeof l=="number"){a=e.setTimeout(o.bind(null,c),l);return}o(l),a=e.setTimeout(o.bind(null,c));return}typeof i=="string"&&(t=i,n(t)),typeof i=="object"&&(t=i,n(t)),typeof i=="function"&&i()}};return{stop:()=>{r=!0},start:i=>{r=!1,a&&(a(),a=null),o(i)},subscribe:i=>(n=i,()=>{n=()=>null}),getTimeoutController:()=>e}}class AI{setTimeout(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=performance.now(),a=null,o=i=>{i-r>=n?t(i):typeof requestAnimationFrame=="function"&&(a=requestAnimationFrame(o))};return a=requestAnimationFrame(o),()=>{a!=null&&cancelAnimationFrame(a)}}}function SI(){return II(new AI)}var PI=g.createContext(SI);function NI(e,t){var n=g.useContext(PI);return g.useMemo(()=>t??n(e),[e,t,n])}var jI=()=>!(typeof window<"u"&&window.document&&window.document.createElement&&window.setTimeout),vi={devToolsEnabled:!0,isSsr:jI()},OI={begin:0,duration:1e3,easing:"ease",isActive:!0,canBegin:!0,onAnimationEnd:()=>{},onAnimationStart:()=>{}},_d={t:0},cs={t:1};function bi(e){var t=tt(e,OI),{isActive:n,canBegin:r,duration:a,easing:o,begin:i,onAnimationEnd:s,onAnimationStart:l,children:c}=t,u=n==="auto"?!vi.isSsr:n,h=NI(t.animationId,t.animationManager),[m,p]=g.useState(u?_d:cs),y=g.useRef(null);return g.useEffect(()=>{u||p(cs)},[u]),g.useEffect(()=>{if(!u||!r)return na;var f=fI(_d,cs,TI(o),a,p,h.getTimeoutController()),v=()=>{y.current=f()};return h.start([l,i,v,a,s]),()=>{h.stop(),y.current&&y.current(),s()}},[u,r,a,o,i,l,s,h]),c(m.t)}function wi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"animation-",n=g.useRef(Dr(t)),r=g.useRef(e);return r.current!==e&&(n.current=Dr(t),r.current=e),n.current}var CI=["radius"],EI=["radius"],Wd,Ld,Fd,Hd,zd,Yd,Gd,qd,Ud,Kd;function Vd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Jd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Vd(Object(n),!0).forEach(function(r){MI(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Vd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function MI(e,t,n){return(t=$I(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $I(e){var t=DI(e,"string");return typeof t=="symbol"?t:t+""}function DI(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function vo(){return vo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},vo.apply(null,arguments)}function Zd(e,t){if(e==null)return{};var n,r,a=BI(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function BI(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Et(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var Xd=(e,t,n,r,a)=>{var o=hn(n),i=hn(r),s=Math.min(Math.abs(o)/2,Math.abs(i)/2),l=i>=0?1:-1,c=o>=0?1:-1,u=i>=0&&o>=0||i<0&&o<0?1:0,h;if(s>0&&a instanceof Array){for(var m=[0,0,0,0],p=0,y=4;p<y;p++)m[p]=a[p]>s?s:a[p];h=be(Wd||(Wd=Et(["M",",",""])),e,t+l*m[0]),m[0]>0&&(h+=be(Ld||(Ld=Et(["A ",",",",0,0,",",",",",""])),m[0],m[0],u,e+c*m[0],t)),h+=be(Fd||(Fd=Et(["L ",",",""])),e+n-c*m[1],t),m[1]>0&&(h+=be(Hd||(Hd=Et(["A ",",",",0,0,",`,
        `,",",""])),m[1],m[1],u,e+n,t+l*m[1])),h+=be(zd||(zd=Et(["L ",",",""])),e+n,t+r-l*m[2]),m[2]>0&&(h+=be(Yd||(Yd=Et(["A ",",",",0,0,",`,
        `,",",""])),m[2],m[2],u,e+n-c*m[2],t+r)),h+=be(Gd||(Gd=Et(["L ",",",""])),e+c*m[3],t+r),m[3]>0&&(h+=be(qd||(qd=Et(["A ",",",",0,0,",`,
        `,",",""])),m[3],m[3],u,e,t+r-l*m[3])),h+="Z"}else if(s>0&&a===+a&&a>0){var f=Math.min(s,a);h=be(Ud||(Ud=Et(["M ",",",`
            A `,",",",0,0,",",",",",`
            L `,",",`
            A `,",",",0,0,",",",",",`
            L `,",",`
            A `,",",",0,0,",",",",",`
            L `,",",`
            A `,",",",0,0,",",",","," Z"])),e,t+l*f,f,f,u,e+c*f,t,e+n-c*f,t,f,f,u,e+n,t+l*f,e+n,t+r-l*f,f,f,u,e+n-c*f,t+r,e+c*f,t+r,f,f,u,e,t+r-l*f)}else h=be(Kd||(Kd=Et(["M ",","," h "," v "," h "," Z"])),e,t,n,r,-n);return h},Qd={x:0,y:0,width:0,height:0,radius:0,isAnimationActive:!1,isUpdateAnimationActive:!1,animationBegin:0,animationDuration:1500,animationEasing:"ease"},Ty=e=>{var t=tt(e,Qd),n=g.useRef(null),[r,a]=g.useState(-1);g.useEffect(()=>{if(n.current&&n.current.getTotalLength)try{var _=n.current.getTotalLength();_&&a(_)}catch{}},[]);var{x:o,y:i,width:s,height:l,radius:c,className:u}=t,{animationEasing:h,animationDuration:m,animationBegin:p,isAnimationActive:y,isUpdateAnimationActive:f}=t,v=g.useRef(s),b=g.useRef(l),w=g.useRef(o),x=g.useRef(i),T=g.useMemo(()=>({x:o,y:i,width:s,height:l,radius:c}),[o,i,s,l,c]),k=wi(T,"rectangle-");if(o!==+o||i!==+i||s!==+s||l!==+l||s===0||l===0)return null;var I=ie("recharts-rectangle",u);if(!f){var C=Ve(t),O=Zd(C,CI);return g.createElement("path",vo({},O,{x:hn(o),y:hn(i),width:hn(s),height:hn(l),radius:typeof c=="number"?c:void 0,className:I,d:Xd(o,i,s,l,c)}))}var M=v.current,$=b.current,A=w.current,N=x.current,D="0px ".concat(r===-1?1:r,"px"),L="".concat(r,"px 0px"),U=by(["strokeDasharray"],m,typeof h=="string"?h:Qd.animationEasing);return g.createElement(bi,{animationId:k,key:k,canBegin:r>0,duration:m,easing:h,isActive:f,begin:p},_=>{var F=we(M,s,_),q=we($,l,_),H=we(A,o,_),Z=we(N,i,_);n.current&&(v.current=F,b.current=q,w.current=H,x.current=Z);var ee;y?_>0?ee={transition:U,strokeDasharray:L}:ee={strokeDasharray:D}:ee={strokeDasharray:L};var te=Ve(t),Te=Zd(te,EI);return g.createElement("path",vo({},Te,{radius:typeof c=="number"?c:void 0,className:I,d:Xd(H,Z,F,q,c),ref:n,style:Jd(Jd({},ee),t.style)}))})};function eh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function th(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?eh(Object(n),!0).forEach(function(r){RI(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):eh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function RI(e,t,n){return(t=_I(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _I(e){var t=WI(e,"string");return typeof t=="symbol"?t:t+""}function WI(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var bo=Math.PI/180,LI=e=>e*180/Math.PI,He=(e,t,n,r)=>({x:e+Math.cos(-bo*r)*n,y:t+Math.sin(-bo*r)*n}),FI=function(t,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{top:0,right:0,bottom:0,left:0,width:0,height:0,brushBottom:0};return Math.min(Math.abs(t-(r.left||0)-(r.right||0)),Math.abs(n-(r.top||0)-(r.bottom||0)))/2},HI=(e,t)=>{var{x:n,y:r}=e,{x:a,y:o}=t;return Math.sqrt((n-a)**2+(r-o)**2)},zI=(e,t)=>{var{x:n,y:r}=e,{cx:a,cy:o}=t,i=HI({x:n,y:r},{x:a,y:o});if(i<=0)return{radius:i,angle:0};var s=(n-a)/i,l=Math.acos(s);return r>o&&(l=2*Math.PI-l),{radius:i,angle:LI(l),angleInRadian:l}},YI=e=>{var{startAngle:t,endAngle:n}=e,r=Math.floor(t/360),a=Math.floor(n/360),o=Math.min(r,a);return{startAngle:t-o*360,endAngle:n-o*360}},GI=(e,t)=>{var{startAngle:n,endAngle:r}=t,a=Math.floor(n/360),o=Math.floor(r/360),i=Math.min(a,o);return e+i*360},qI=(e,t)=>{var{chartX:n,chartY:r}=e,{radius:a,angle:o}=zI({x:n,y:r},t),{innerRadius:i,outerRadius:s}=t;if(a<i||a>s||a===0)return null;var{startAngle:l,endAngle:c}=YI(t),u=o,h;if(l<=c){for(;u>c;)u-=360;for(;u<l;)u+=360;h=u>=l&&u<=c}else{for(;u>l;)u-=360;for(;u<c;)u+=360;h=u>=c&&u<=l}return h?th(th({},t),{},{radius:a,angle:GI(u,t)}):null};function Iy(e){var{cx:t,cy:n,radius:r,startAngle:a,endAngle:o}=e,i=He(t,n,r,a),s=He(t,n,r,o);return{points:[i,s],cx:t,cy:n,radius:r,startAngle:a,endAngle:o}}var nh,rh,ah,oh,ih,sh,lh;function cl(){return cl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},cl.apply(null,arguments)}function In(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var UI=(e,t)=>{var n=Qe(t-e),r=Math.min(Math.abs(t-e),359.999);return n*r},Da=e=>{var{cx:t,cy:n,radius:r,angle:a,sign:o,isExternal:i,cornerRadius:s,cornerIsExternal:l}=e,c=s*(i?1:-1)+r,u=Math.asin(s/c)/bo,h=l?a:a+o*u,m=He(t,n,c,h),p=He(t,n,r,h),y=l?a-o*u:a,f=He(t,n,c*Math.cos(u*bo),y);return{center:m,circleTangency:p,lineTangency:f,theta:u}},Ay=e=>{var{cx:t,cy:n,innerRadius:r,outerRadius:a,startAngle:o,endAngle:i}=e,s=UI(o,i),l=o+s,c=He(t,n,a,o),u=He(t,n,a,l),h=be(nh||(nh=In(["M ",",",`
    A `,",",`,0,
    `,",",`,
    `,",",`
  `])),c.x,c.y,a,a,+(Math.abs(s)>180),+(o>l),u.x,u.y);if(r>0){var m=He(t,n,r,o),p=He(t,n,r,l);h+=be(rh||(rh=In(["L ",",",`
            A `,",",`,0,
            `,",",`,
            `,","," Z"])),p.x,p.y,r,r,+(Math.abs(s)>180),+(o<=l),m.x,m.y)}else h+=be(ah||(ah=In(["L ",","," Z"])),t,n);return h},KI=e=>{var{cx:t,cy:n,innerRadius:r,outerRadius:a,cornerRadius:o,forceCornerRadius:i,cornerIsExternal:s,startAngle:l,endAngle:c}=e,u=Qe(c-l),{circleTangency:h,lineTangency:m,theta:p}=Da({cx:t,cy:n,radius:a,angle:l,sign:u,cornerRadius:o,cornerIsExternal:s}),{circleTangency:y,lineTangency:f,theta:v}=Da({cx:t,cy:n,radius:a,angle:c,sign:-u,cornerRadius:o,cornerIsExternal:s}),b=s?Math.abs(l-c):Math.abs(l-c)-p-v;if(b<0)return i?be(oh||(oh=In(["M ",",",`
        a`,",",",0,0,1,",`,0
        a`,",",",0,0,1,",`,0
      `])),m.x,m.y,o,o,o*2,o,o,-o*2):Ay({cx:t,cy:n,innerRadius:r,outerRadius:a,startAngle:l,endAngle:c});var w=be(ih||(ih=In(["M ",",",`
    A`,",",",0,0,",",",",",`
    A`,",",",0,",",",",",",",`
    A`,",",",0,0,",",",",",`
  `])),m.x,m.y,o,o,+(u<0),h.x,h.y,a,a,+(b>180),+(u<0),y.x,y.y,o,o,+(u<0),f.x,f.y);if(r>0){var{circleTangency:x,lineTangency:T,theta:k}=Da({cx:t,cy:n,radius:r,angle:l,sign:u,isExternal:!0,cornerRadius:o,cornerIsExternal:s}),{circleTangency:I,lineTangency:C,theta:O}=Da({cx:t,cy:n,radius:r,angle:c,sign:-u,isExternal:!0,cornerRadius:o,cornerIsExternal:s}),M=s?Math.abs(l-c):Math.abs(l-c)-k-O;if(M<0&&o===0)return"".concat(w,"L").concat(t,",").concat(n,"Z");w+=be(sh||(sh=In(["L",",",`
      A`,",",",0,0,",",",",",`
      A`,",",",0,",",",",",",",`
      A`,",",",0,0,",",",",","Z"])),C.x,C.y,o,o,+(u<0),I.x,I.y,r,r,+(M>180),+(u>0),x.x,x.y,o,o,+(u<0),T.x,T.y)}else w+=be(lh||(lh=In(["L",",","Z"])),t,n);return w},VI={cx:0,cy:0,innerRadius:0,outerRadius:0,startAngle:0,endAngle:0,cornerRadius:0,forceCornerRadius:!1,cornerIsExternal:!1},Sy=e=>{var t=tt(e,VI),{cx:n,cy:r,innerRadius:a,outerRadius:o,cornerRadius:i,forceCornerRadius:s,cornerIsExternal:l,startAngle:c,endAngle:u,className:h}=t;if(o<a||c===u)return null;var m=ie("recharts-sector",h),p=o-a,y=St(i,p,0,!0),f;return y>0&&Math.abs(c-u)<360?f=KI({cx:n,cy:r,innerRadius:a,outerRadius:o,cornerRadius:Math.min(y,p/2),forceCornerRadius:s,cornerIsExternal:l,startAngle:c,endAngle:u}):f=Ay({cx:n,cy:r,innerRadius:a,outerRadius:o,startAngle:c,endAngle:u}),g.createElement("path",cl({},Ve(t),{className:m,d:f}))};function JI(e,t,n){if(e==="horizontal")return[{x:t.x,y:n.top},{x:t.x,y:n.top+n.height}];if(e==="vertical")return[{x:n.left,y:t.y},{x:n.left+n.width,y:t.y}];if(Zp(t)){if(e==="centric"){var{cx:r,cy:a,innerRadius:o,outerRadius:i,angle:s}=t,l=He(r,a,o,s),c=He(r,a,i,s);return[{x:l.x,y:l.y},{x:c.x,y:c.y}]}return Iy(t)}}var Py={},Ny={},jy={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=tc;function n(r){return t.isSymbol(r)?NaN:Number(r)}e.toNumber=n})(jy);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=jy;function n(r){return r?(r=t.toNumber(r),r===1/0||r===-1/0?(r<0?-1:1)*Number.MAX_VALUE:r===r?r:0):r===0?r:0}e.toFinite=n})(Ny);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=nc,n=Ny;function r(a,o,i){i&&typeof i!="number"&&t.isIterateeCall(a,o,i)&&(o=i=void 0),a=n.toFinite(a),o===void 0?(o=a,a=0):o=n.toFinite(o),i=i===void 0?a<o?1:-1:n.toFinite(i);const s=Math.max(Math.ceil((o-a)/(i||1)),0),l=new Array(s);for(let c=0;c<s;c++)l[c]=a,a+=i;return l}e.range=r})(Py);var ZI=Py.range;const Oy=Nt(ZI);function mn(e,t){return e==null||t==null?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function XI(e,t){return e==null||t==null?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function gc(e){let t,n,r;e.length!==2?(t=mn,n=(s,l)=>mn(e(s),l),r=(s,l)=>e(s)-l):(t=e===mn||e===XI?e:QI,n=e,r=e);function a(s,l,c=0,u=s.length){if(c<u){if(t(l,l)!==0)return u;do{const h=c+u>>>1;n(s[h],l)<0?c=h+1:u=h}while(c<u)}return c}function o(s,l,c=0,u=s.length){if(c<u){if(t(l,l)!==0)return u;do{const h=c+u>>>1;n(s[h],l)<=0?c=h+1:u=h}while(c<u)}return c}function i(s,l,c=0,u=s.length){const h=a(s,l,c,u-1);return h>c&&r(s[h-1],l)>-r(s[h],l)?h-1:h}return{left:a,center:i,right:o}}function QI(){return 0}function Cy(e){return e===null?NaN:+e}function*e2(e,t){if(t===void 0)for(let n of e)n!=null&&(n=+n)>=n&&(yield n);else{let n=-1;for(let r of e)(r=t(r,++n,e))!=null&&(r=+r)>=r&&(yield r)}}const t2=gc(mn),n2=t2.right;gc(Cy).center;const la=n2;class ch extends Map{constructor(t,n=o2){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:n}}),t!=null)for(const[r,a]of t)this.set(r,a)}get(t){return super.get(uh(this,t))}has(t){return super.has(uh(this,t))}set(t,n){return super.set(r2(this,t),n)}delete(t){return super.delete(a2(this,t))}}function uh({_intern:e,_key:t},n){const r=t(n);return e.has(r)?e.get(r):n}function r2({_intern:e,_key:t},n){const r=t(n);return e.has(r)?e.get(r):(e.set(r,n),n)}function a2({_intern:e,_key:t},n){const r=t(n);return e.has(r)&&(n=e.get(r),e.delete(r)),n}function o2(e){return e!==null&&typeof e=="object"?e.valueOf():e}function i2(e=mn){if(e===mn)return Ey;if(typeof e!="function")throw new TypeError("compare is not a function");return(t,n)=>{const r=e(t,n);return r||r===0?r:(e(n,n)===0)-(e(t,t)===0)}}function Ey(e,t){return(e==null||!(e>=e))-(t==null||!(t>=t))||(e<t?-1:e>t?1:0)}const s2=Math.sqrt(50),l2=Math.sqrt(10),c2=Math.sqrt(2);function wo(e,t,n){const r=(t-e)/Math.max(0,n),a=Math.floor(Math.log10(r)),o=r/Math.pow(10,a),i=o>=s2?10:o>=l2?5:o>=c2?2:1;let s,l,c;return a<0?(c=Math.pow(10,-a)/i,s=Math.round(e*c),l=Math.round(t*c),s/c<e&&++s,l/c>t&&--l,c=-c):(c=Math.pow(10,a)*i,s=Math.round(e/c),l=Math.round(t/c),s*c<e&&++s,l*c>t&&--l),l<s&&.5<=n&&n<2?wo(e,t,n*2):[s,l,c]}function ul(e,t,n){if(t=+t,e=+e,n=+n,!(n>0))return[];if(e===t)return[e];const r=t<e,[a,o,i]=r?wo(t,e,n):wo(e,t,n);if(!(o>=a))return[];const s=o-a+1,l=new Array(s);if(r)if(i<0)for(let c=0;c<s;++c)l[c]=(o-c)/-i;else for(let c=0;c<s;++c)l[c]=(o-c)*i;else if(i<0)for(let c=0;c<s;++c)l[c]=(a+c)/-i;else for(let c=0;c<s;++c)l[c]=(a+c)*i;return l}function dl(e,t,n){return t=+t,e=+e,n=+n,wo(e,t,n)[2]}function hl(e,t,n){t=+t,e=+e,n=+n;const r=t<e,a=r?dl(t,e,n):dl(e,t,n);return(r?-1:1)*(a<0?1/-a:a)}function dh(e,t){let n;if(t===void 0)for(const r of e)r!=null&&(n<r||n===void 0&&r>=r)&&(n=r);else{let r=-1;for(let a of e)(a=t(a,++r,e))!=null&&(n<a||n===void 0&&a>=a)&&(n=a)}return n}function hh(e,t){let n;if(t===void 0)for(const r of e)r!=null&&(n>r||n===void 0&&r>=r)&&(n=r);else{let r=-1;for(let a of e)(a=t(a,++r,e))!=null&&(n>a||n===void 0&&a>=a)&&(n=a)}return n}function My(e,t,n=0,r=1/0,a){if(t=Math.floor(t),n=Math.floor(Math.max(0,n)),r=Math.floor(Math.min(e.length-1,r)),!(n<=t&&t<=r))return e;for(a=a===void 0?Ey:i2(a);r>n;){if(r-n>600){const l=r-n+1,c=t-n+1,u=Math.log(l),h=.5*Math.exp(2*u/3),m=.5*Math.sqrt(u*h*(l-h)/l)*(c-l/2<0?-1:1),p=Math.max(n,Math.floor(t-c*h/l+m)),y=Math.min(r,Math.floor(t+(l-c)*h/l+m));My(e,t,p,y,a)}const o=e[t];let i=n,s=r;for(Sr(e,n,t),a(e[r],o)>0&&Sr(e,n,r);i<s;){for(Sr(e,i,s),++i,--s;a(e[i],o)<0;)++i;for(;a(e[s],o)>0;)--s}a(e[n],o)===0?Sr(e,n,s):(++s,Sr(e,s,r)),s<=t&&(n=s+1),t<=s&&(r=s-1)}return e}function Sr(e,t,n){const r=e[t];e[t]=e[n],e[n]=r}function u2(e,t,n){if(e=Float64Array.from(e2(e,n)),!(!(r=e.length)||isNaN(t=+t))){if(t<=0||r<2)return hh(e);if(t>=1)return dh(e);var r,a=(r-1)*t,o=Math.floor(a),i=dh(My(e,o).subarray(0,o+1)),s=hh(e.subarray(o+1));return i+(s-i)*(a-o)}}function d2(e,t,n=Cy){if(!(!(r=e.length)||isNaN(t=+t))){if(t<=0||r<2)return+n(e[0],0,e);if(t>=1)return+n(e[r-1],r-1,e);var r,a=(r-1)*t,o=Math.floor(a),i=+n(e[o],o,e),s=+n(e[o+1],o+1,e);return i+(s-i)*(a-o)}}function h2(e,t,n){e=+e,t=+t,n=(a=arguments.length)<2?(t=e,e=0,1):a<3?1:+n;for(var r=-1,a=Math.max(0,Math.ceil((t-e)/n))|0,o=new Array(a);++r<a;)o[r]=e+r*n;return o}function ft(e,t){switch(arguments.length){case 0:break;case 1:this.range(e);break;default:this.range(t).domain(e);break}return this}function rn(e,t){switch(arguments.length){case 0:break;case 1:{typeof e=="function"?this.interpolator(e):this.range(e);break}default:{this.domain(e),typeof t=="function"?this.interpolator(t):this.range(t);break}}return this}const ml=Symbol("implicit");function yc(){var e=new ch,t=[],n=[],r=ml;function a(o){let i=e.get(o);if(i===void 0){if(r!==ml)return r;e.set(o,i=t.push(o)-1)}return n[i%n.length]}return a.domain=function(o){if(!arguments.length)return t.slice();t=[],e=new ch;for(const i of o)e.has(i)||e.set(i,t.push(i)-1);return a},a.range=function(o){return arguments.length?(n=Array.from(o),a):n.slice()},a.unknown=function(o){return arguments.length?(r=o,a):r},a.copy=function(){return yc(t,n).unknown(r)},ft.apply(a,arguments),a}function fc(){var e=yc().unknown(void 0),t=e.domain,n=e.range,r=0,a=1,o,i,s=!1,l=0,c=0,u=.5;delete e.unknown;function h(){var m=t().length,p=a<r,y=p?a:r,f=p?r:a;o=(f-y)/Math.max(1,m-l+c*2),s&&(o=Math.floor(o)),y+=(f-y-o*(m-l))*u,i=o*(1-l),s&&(y=Math.round(y),i=Math.round(i));var v=h2(m).map(function(b){return y+o*b});return n(p?v.reverse():v)}return e.domain=function(m){return arguments.length?(t(m),h()):t()},e.range=function(m){return arguments.length?([r,a]=m,r=+r,a=+a,h()):[r,a]},e.rangeRound=function(m){return[r,a]=m,r=+r,a=+a,s=!0,h()},e.bandwidth=function(){return i},e.step=function(){return o},e.round=function(m){return arguments.length?(s=!!m,h()):s},e.padding=function(m){return arguments.length?(l=Math.min(1,c=+m),h()):l},e.paddingInner=function(m){return arguments.length?(l=Math.min(1,m),h()):l},e.paddingOuter=function(m){return arguments.length?(c=+m,h()):c},e.align=function(m){return arguments.length?(u=Math.max(0,Math.min(1,m)),h()):u},e.copy=function(){return fc(t(),[r,a]).round(s).paddingInner(l).paddingOuter(c).align(u)},ft.apply(h(),arguments)}function $y(e){var t=e.copy;return e.padding=e.paddingOuter,delete e.paddingInner,delete e.paddingOuter,e.copy=function(){return $y(t())},e}function m2(){return $y(fc.apply(null,arguments).paddingInner(1))}function vc(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function Dy(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function ca(){}var zr=.7,xo=1/zr,nr="\\s*([+-]?\\d+)\\s*",Yr="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Dt="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",p2=/^#([0-9a-f]{3,8})$/,g2=new RegExp(`^rgb\\(${nr},${nr},${nr}\\)$`),y2=new RegExp(`^rgb\\(${Dt},${Dt},${Dt}\\)$`),f2=new RegExp(`^rgba\\(${nr},${nr},${nr},${Yr}\\)$`),v2=new RegExp(`^rgba\\(${Dt},${Dt},${Dt},${Yr}\\)$`),b2=new RegExp(`^hsl\\(${Yr},${Dt},${Dt}\\)$`),w2=new RegExp(`^hsla\\(${Yr},${Dt},${Dt},${Yr}\\)$`),mh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};vc(ca,Gr,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:ph,formatHex:ph,formatHex8:x2,formatHsl:k2,formatRgb:gh,toString:gh});function ph(){return this.rgb().formatHex()}function x2(){return this.rgb().formatHex8()}function k2(){return By(this).formatHsl()}function gh(){return this.rgb().formatRgb()}function Gr(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=p2.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?yh(t):n===3?new et(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?Ba(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?Ba(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=g2.exec(e))?new et(t[1],t[2],t[3],1):(t=y2.exec(e))?new et(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=f2.exec(e))?Ba(t[1],t[2],t[3],t[4]):(t=v2.exec(e))?Ba(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=b2.exec(e))?bh(t[1],t[2]/100,t[3]/100,1):(t=w2.exec(e))?bh(t[1],t[2]/100,t[3]/100,t[4]):mh.hasOwnProperty(e)?yh(mh[e]):e==="transparent"?new et(NaN,NaN,NaN,0):null}function yh(e){return new et(e>>16&255,e>>8&255,e&255,1)}function Ba(e,t,n,r){return r<=0&&(e=t=n=NaN),new et(e,t,n,r)}function T2(e){return e instanceof ca||(e=Gr(e)),e?(e=e.rgb(),new et(e.r,e.g,e.b,e.opacity)):new et}function pl(e,t,n,r){return arguments.length===1?T2(e):new et(e,t,n,r??1)}function et(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}vc(et,pl,Dy(ca,{brighter(e){return e=e==null?xo:Math.pow(xo,e),new et(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?zr:Math.pow(zr,e),new et(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new et(jn(this.r),jn(this.g),jn(this.b),ko(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:fh,formatHex:fh,formatHex8:I2,formatRgb:vh,toString:vh}));function fh(){return`#${An(this.r)}${An(this.g)}${An(this.b)}`}function I2(){return`#${An(this.r)}${An(this.g)}${An(this.b)}${An((isNaN(this.opacity)?1:this.opacity)*255)}`}function vh(){const e=ko(this.opacity);return`${e===1?"rgb(":"rgba("}${jn(this.r)}, ${jn(this.g)}, ${jn(this.b)}${e===1?")":`, ${e})`}`}function ko(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function jn(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function An(e){return e=jn(e),(e<16?"0":"")+e.toString(16)}function bh(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new kt(e,t,n,r)}function By(e){if(e instanceof kt)return new kt(e.h,e.s,e.l,e.opacity);if(e instanceof ca||(e=Gr(e)),!e)return new kt;if(e instanceof kt)return e;e=e.rgb();var t=e.r/255,n=e.g/255,r=e.b/255,a=Math.min(t,n,r),o=Math.max(t,n,r),i=NaN,s=o-a,l=(o+a)/2;return s?(t===o?i=(n-r)/s+(n<r)*6:n===o?i=(r-t)/s+2:i=(t-n)/s+4,s/=l<.5?o+a:2-o-a,i*=60):s=l>0&&l<1?0:i,new kt(i,s,l,e.opacity)}function A2(e,t,n,r){return arguments.length===1?By(e):new kt(e,t,n,r??1)}function kt(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}vc(kt,A2,Dy(ca,{brighter(e){return e=e==null?xo:Math.pow(xo,e),new kt(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?zr:Math.pow(zr,e),new kt(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,a=2*n-r;return new et(us(e>=240?e-240:e+120,a,r),us(e,a,r),us(e<120?e+240:e-120,a,r),this.opacity)},clamp(){return new kt(wh(this.h),Ra(this.s),Ra(this.l),ko(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=ko(this.opacity);return`${e===1?"hsl(":"hsla("}${wh(this.h)}, ${Ra(this.s)*100}%, ${Ra(this.l)*100}%${e===1?")":`, ${e})`}`}}));function wh(e){return e=(e||0)%360,e<0?e+360:e}function Ra(e){return Math.max(0,Math.min(1,e||0))}function us(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}const bc=e=>()=>e;function S2(e,t){return function(n){return e+n*t}}function P2(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(r){return Math.pow(e+r*t,n)}}function N2(e){return(e=+e)==1?Ry:function(t,n){return n-t?P2(t,n,e):bc(isNaN(t)?n:t)}}function Ry(e,t){var n=t-e;return n?S2(e,n):bc(isNaN(e)?t:e)}const xh=function e(t){var n=N2(t);function r(a,o){var i=n((a=pl(a)).r,(o=pl(o)).r),s=n(a.g,o.g),l=n(a.b,o.b),c=Ry(a.opacity,o.opacity);return function(u){return a.r=i(u),a.g=s(u),a.b=l(u),a.opacity=c(u),a+""}}return r.gamma=e,r}(1);function j2(e,t){t||(t=[]);var n=e?Math.min(t.length,e.length):0,r=t.slice(),a;return function(o){for(a=0;a<n;++a)r[a]=e[a]*(1-o)+t[a]*o;return r}}function O2(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function C2(e,t){var n=t?t.length:0,r=e?Math.min(n,e.length):0,a=new Array(r),o=new Array(n),i;for(i=0;i<r;++i)a[i]=mr(e[i],t[i]);for(;i<n;++i)o[i]=t[i];return function(s){for(i=0;i<r;++i)o[i]=a[i](s);return o}}function E2(e,t){var n=new Date;return e=+e,t=+t,function(r){return n.setTime(e*(1-r)+t*r),n}}function To(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}function M2(e,t){var n={},r={},a;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(a in t)a in e?n[a]=mr(e[a],t[a]):r[a]=t[a];return function(o){for(a in n)r[a]=n[a](o);return r}}var gl=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,ds=new RegExp(gl.source,"g");function $2(e){return function(){return e}}function D2(e){return function(t){return e(t)+""}}function B2(e,t){var n=gl.lastIndex=ds.lastIndex=0,r,a,o,i=-1,s=[],l=[];for(e=e+"",t=t+"";(r=gl.exec(e))&&(a=ds.exec(t));)(o=a.index)>n&&(o=t.slice(n,o),s[i]?s[i]+=o:s[++i]=o),(r=r[0])===(a=a[0])?s[i]?s[i]+=a:s[++i]=a:(s[++i]=null,l.push({i,x:To(r,a)})),n=ds.lastIndex;return n<t.length&&(o=t.slice(n),s[i]?s[i]+=o:s[++i]=o),s.length<2?l[0]?D2(l[0].x):$2(t):(t=l.length,function(c){for(var u=0,h;u<t;++u)s[(h=l[u]).i]=h.x(c);return s.join("")})}function mr(e,t){var n=typeof t,r;return t==null||n==="boolean"?bc(t):(n==="number"?To:n==="string"?(r=Gr(t))?(t=r,xh):B2:t instanceof Gr?xh:t instanceof Date?E2:O2(t)?j2:Array.isArray(t)?C2:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?M2:To)(e,t)}function wc(e,t){return e=+e,t=+t,function(n){return Math.round(e*(1-n)+t*n)}}function R2(e,t){t===void 0&&(t=e,e=mr);for(var n=0,r=t.length-1,a=t[0],o=new Array(r<0?0:r);n<r;)o[n]=e(a,a=t[++n]);return function(i){var s=Math.max(0,Math.min(r-1,Math.floor(i*=r)));return o[s](i-s)}}function _2(e){return function(){return e}}function Io(e){return+e}var kh=[0,1];function Ke(e){return e}function yl(e,t){return(t-=e=+e)?function(n){return(n-e)/t}:_2(isNaN(t)?NaN:.5)}function W2(e,t){var n;return e>t&&(n=e,e=t,t=n),function(r){return Math.max(e,Math.min(t,r))}}function L2(e,t,n){var r=e[0],a=e[1],o=t[0],i=t[1];return a<r?(r=yl(a,r),o=n(i,o)):(r=yl(r,a),o=n(o,i)),function(s){return o(r(s))}}function F2(e,t,n){var r=Math.min(e.length,t.length)-1,a=new Array(r),o=new Array(r),i=-1;for(e[r]<e[0]&&(e=e.slice().reverse(),t=t.slice().reverse());++i<r;)a[i]=yl(e[i],e[i+1]),o[i]=n(t[i],t[i+1]);return function(s){var l=la(e,s,1,r)-1;return o[l](a[l](s))}}function ua(e,t){return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())}function xi(){var e=kh,t=kh,n=mr,r,a,o,i=Ke,s,l,c;function u(){var m=Math.min(e.length,t.length);return i!==Ke&&(i=W2(e[0],e[m-1])),s=m>2?F2:L2,l=c=null,h}function h(m){return m==null||isNaN(m=+m)?o:(l||(l=s(e.map(r),t,n)))(r(i(m)))}return h.invert=function(m){return i(a((c||(c=s(t,e.map(r),To)))(m)))},h.domain=function(m){return arguments.length?(e=Array.from(m,Io),u()):e.slice()},h.range=function(m){return arguments.length?(t=Array.from(m),u()):t.slice()},h.rangeRound=function(m){return t=Array.from(m),n=wc,u()},h.clamp=function(m){return arguments.length?(i=m?!0:Ke,u()):i!==Ke},h.interpolate=function(m){return arguments.length?(n=m,u()):n},h.unknown=function(m){return arguments.length?(o=m,h):o},function(m,p){return r=m,a=p,u()}}function xc(){return xi()(Ke,Ke)}function H2(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString("en").replace(/,/g,""):e.toString(10)}function Ao(e,t){if((n=(e=t?e.toExponential(t-1):e.toExponential()).indexOf("e"))<0)return null;var n,r=e.slice(0,n);return[r.length>1?r[0]+r.slice(2):r,+e.slice(n+1)]}function ur(e){return e=Ao(Math.abs(e)),e?e[1]:NaN}function z2(e,t){return function(n,r){for(var a=n.length,o=[],i=0,s=e[0],l=0;a>0&&s>0&&(l+s+1>r&&(s=Math.max(1,r-l)),o.push(n.substring(a-=s,a+s)),!((l+=s+1)>r));)s=e[i=(i+1)%e.length];return o.reverse().join(t)}}function Y2(e){return function(t){return t.replace(/[0-9]/g,function(n){return e[+n]})}}var G2=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function qr(e){if(!(t=G2.exec(e)))throw new Error("invalid format: "+e);var t;return new kc({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}qr.prototype=kc.prototype;function kc(e){this.fill=e.fill===void 0?" ":e.fill+"",this.align=e.align===void 0?">":e.align+"",this.sign=e.sign===void 0?"-":e.sign+"",this.symbol=e.symbol===void 0?"":e.symbol+"",this.zero=!!e.zero,this.width=e.width===void 0?void 0:+e.width,this.comma=!!e.comma,this.precision=e.precision===void 0?void 0:+e.precision,this.trim=!!e.trim,this.type=e.type===void 0?"":e.type+""}kc.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function q2(e){e:for(var t=e.length,n=1,r=-1,a;n<t;++n)switch(e[n]){case".":r=a=n;break;case"0":r===0&&(r=n),a=n;break;default:if(!+e[n])break e;r>0&&(r=0);break}return r>0?e.slice(0,r)+e.slice(a+1):e}var _y;function U2(e,t){var n=Ao(e,t);if(!n)return e+"";var r=n[0],a=n[1],o=a-(_y=Math.max(-8,Math.min(8,Math.floor(a/3)))*3)+1,i=r.length;return o===i?r:o>i?r+new Array(o-i+1).join("0"):o>0?r.slice(0,o)+"."+r.slice(o):"0."+new Array(1-o).join("0")+Ao(e,Math.max(0,t+o-1))[0]}function Th(e,t){var n=Ao(e,t);if(!n)return e+"";var r=n[0],a=n[1];return a<0?"0."+new Array(-a).join("0")+r:r.length>a+1?r.slice(0,a+1)+"."+r.slice(a+1):r+new Array(a-r.length+2).join("0")}const Ih={"%":(e,t)=>(e*100).toFixed(t),b:e=>Math.round(e).toString(2),c:e=>e+"",d:H2,e:(e,t)=>e.toExponential(t),f:(e,t)=>e.toFixed(t),g:(e,t)=>e.toPrecision(t),o:e=>Math.round(e).toString(8),p:(e,t)=>Th(e*100,t),r:Th,s:U2,X:e=>Math.round(e).toString(16).toUpperCase(),x:e=>Math.round(e).toString(16)};function Ah(e){return e}var Sh=Array.prototype.map,Ph=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function K2(e){var t=e.grouping===void 0||e.thousands===void 0?Ah:z2(Sh.call(e.grouping,Number),e.thousands+""),n=e.currency===void 0?"":e.currency[0]+"",r=e.currency===void 0?"":e.currency[1]+"",a=e.decimal===void 0?".":e.decimal+"",o=e.numerals===void 0?Ah:Y2(Sh.call(e.numerals,String)),i=e.percent===void 0?"%":e.percent+"",s=e.minus===void 0?"−":e.minus+"",l=e.nan===void 0?"NaN":e.nan+"";function c(h){h=qr(h);var m=h.fill,p=h.align,y=h.sign,f=h.symbol,v=h.zero,b=h.width,w=h.comma,x=h.precision,T=h.trim,k=h.type;k==="n"?(w=!0,k="g"):Ih[k]||(x===void 0&&(x=12),T=!0,k="g"),(v||m==="0"&&p==="=")&&(v=!0,m="0",p="=");var I=f==="$"?n:f==="#"&&/[boxX]/.test(k)?"0"+k.toLowerCase():"",C=f==="$"?r:/[%p]/.test(k)?i:"",O=Ih[k],M=/[defgprs%]/.test(k);x=x===void 0?6:/[gprs]/.test(k)?Math.max(1,Math.min(21,x)):Math.max(0,Math.min(20,x));function $(A){var N=I,D=C,L,U,_;if(k==="c")D=O(A)+D,A="";else{A=+A;var F=A<0||1/A<0;if(A=isNaN(A)?l:O(Math.abs(A),x),T&&(A=q2(A)),F&&+A==0&&y!=="+"&&(F=!1),N=(F?y==="("?y:s:y==="-"||y==="("?"":y)+N,D=(k==="s"?Ph[8+_y/3]:"")+D+(F&&y==="("?")":""),M){for(L=-1,U=A.length;++L<U;)if(_=A.charCodeAt(L),48>_||_>57){D=(_===46?a+A.slice(L+1):A.slice(L))+D,A=A.slice(0,L);break}}}w&&!v&&(A=t(A,1/0));var q=N.length+A.length+D.length,H=q<b?new Array(b-q+1).join(m):"";switch(w&&v&&(A=t(H+A,H.length?b-D.length:1/0),H=""),p){case"<":A=N+A+D+H;break;case"=":A=N+H+A+D;break;case"^":A=H.slice(0,q=H.length>>1)+N+A+D+H.slice(q);break;default:A=H+N+A+D;break}return o(A)}return $.toString=function(){return h+""},$}function u(h,m){var p=c((h=qr(h),h.type="f",h)),y=Math.max(-8,Math.min(8,Math.floor(ur(m)/3)))*3,f=Math.pow(10,-y),v=Ph[8+y/3];return function(b){return p(f*b)+v}}return{format:c,formatPrefix:u}}var _a,Tc,Wy;V2({thousands:",",grouping:[3],currency:["$",""]});function V2(e){return _a=K2(e),Tc=_a.format,Wy=_a.formatPrefix,_a}function J2(e){return Math.max(0,-ur(Math.abs(e)))}function Z2(e,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(ur(t)/3)))*3-ur(Math.abs(e)))}function X2(e,t){return e=Math.abs(e),t=Math.abs(t)-e,Math.max(0,ur(t)-ur(e))+1}function Ly(e,t,n,r){var a=hl(e,t,n),o;switch(r=qr(r??",f"),r.type){case"s":{var i=Math.max(Math.abs(e),Math.abs(t));return r.precision==null&&!isNaN(o=Z2(a,i))&&(r.precision=o),Wy(r,i)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(o=X2(a,Math.max(Math.abs(e),Math.abs(t))))&&(r.precision=o-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(o=J2(a))&&(r.precision=o-(r.type==="%")*2);break}}return Tc(r)}function bn(e){var t=e.domain;return e.ticks=function(n){var r=t();return ul(r[0],r[r.length-1],n??10)},e.tickFormat=function(n,r){var a=t();return Ly(a[0],a[a.length-1],n??10,r)},e.nice=function(n){n==null&&(n=10);var r=t(),a=0,o=r.length-1,i=r[a],s=r[o],l,c,u=10;for(s<i&&(c=i,i=s,s=c,c=a,a=o,o=c);u-- >0;){if(c=dl(i,s,n),c===l)return r[a]=i,r[o]=s,t(r);if(c>0)i=Math.floor(i/c)*c,s=Math.ceil(s/c)*c;else if(c<0)i=Math.ceil(i*c)/c,s=Math.floor(s*c)/c;else break;l=c}return e},e}function Fy(){var e=xc();return e.copy=function(){return ua(e,Fy())},ft.apply(e,arguments),bn(e)}function Hy(e){var t;function n(r){return r==null||isNaN(r=+r)?t:r}return n.invert=n,n.domain=n.range=function(r){return arguments.length?(e=Array.from(r,Io),n):e.slice()},n.unknown=function(r){return arguments.length?(t=r,n):t},n.copy=function(){return Hy(e).unknown(t)},e=arguments.length?Array.from(e,Io):[0,1],bn(n)}function zy(e,t){e=e.slice();var n=0,r=e.length-1,a=e[n],o=e[r],i;return o<a&&(i=n,n=r,r=i,i=a,a=o,o=i),e[n]=t.floor(a),e[r]=t.ceil(o),e}function Nh(e){return Math.log(e)}function jh(e){return Math.exp(e)}function Q2(e){return-Math.log(-e)}function eA(e){return-Math.exp(-e)}function tA(e){return isFinite(e)?+("1e"+e):e<0?0:e}function nA(e){return e===10?tA:e===Math.E?Math.exp:t=>Math.pow(e,t)}function rA(e){return e===Math.E?Math.log:e===10&&Math.log10||e===2&&Math.log2||(e=Math.log(e),t=>Math.log(t)/e)}function Oh(e){return(t,n)=>-e(-t,n)}function Ic(e){const t=e(Nh,jh),n=t.domain;let r=10,a,o;function i(){return a=rA(r),o=nA(r),n()[0]<0?(a=Oh(a),o=Oh(o),e(Q2,eA)):e(Nh,jh),t}return t.base=function(s){return arguments.length?(r=+s,i()):r},t.domain=function(s){return arguments.length?(n(s),i()):n()},t.ticks=s=>{const l=n();let c=l[0],u=l[l.length-1];const h=u<c;h&&([c,u]=[u,c]);let m=a(c),p=a(u),y,f;const v=s==null?10:+s;let b=[];if(!(r%1)&&p-m<v){if(m=Math.floor(m),p=Math.ceil(p),c>0){for(;m<=p;++m)for(y=1;y<r;++y)if(f=m<0?y/o(-m):y*o(m),!(f<c)){if(f>u)break;b.push(f)}}else for(;m<=p;++m)for(y=r-1;y>=1;--y)if(f=m>0?y/o(-m):y*o(m),!(f<c)){if(f>u)break;b.push(f)}b.length*2<v&&(b=ul(c,u,v))}else b=ul(m,p,Math.min(p-m,v)).map(o);return h?b.reverse():b},t.tickFormat=(s,l)=>{if(s==null&&(s=10),l==null&&(l=r===10?"s":","),typeof l!="function"&&(!(r%1)&&(l=qr(l)).precision==null&&(l.trim=!0),l=Tc(l)),s===1/0)return l;const c=Math.max(1,r*s/t.ticks().length);return u=>{let h=u/o(Math.round(a(u)));return h*r<r-.5&&(h*=r),h<=c?l(u):""}},t.nice=()=>n(zy(n(),{floor:s=>o(Math.floor(a(s))),ceil:s=>o(Math.ceil(a(s)))})),t}function Yy(){const e=Ic(xi()).domain([1,10]);return e.copy=()=>ua(e,Yy()).base(e.base()),ft.apply(e,arguments),e}function Ch(e){return function(t){return Math.sign(t)*Math.log1p(Math.abs(t/e))}}function Eh(e){return function(t){return Math.sign(t)*Math.expm1(Math.abs(t))*e}}function Ac(e){var t=1,n=e(Ch(t),Eh(t));return n.constant=function(r){return arguments.length?e(Ch(t=+r),Eh(t)):t},bn(n)}function Gy(){var e=Ac(xi());return e.copy=function(){return ua(e,Gy()).constant(e.constant())},ft.apply(e,arguments)}function Mh(e){return function(t){return t<0?-Math.pow(-t,e):Math.pow(t,e)}}function aA(e){return e<0?-Math.sqrt(-e):Math.sqrt(e)}function oA(e){return e<0?-e*e:e*e}function Sc(e){var t=e(Ke,Ke),n=1;function r(){return n===1?e(Ke,Ke):n===.5?e(aA,oA):e(Mh(n),Mh(1/n))}return t.exponent=function(a){return arguments.length?(n=+a,r()):n},bn(t)}function Pc(){var e=Sc(xi());return e.copy=function(){return ua(e,Pc()).exponent(e.exponent())},ft.apply(e,arguments),e}function iA(){return Pc.apply(null,arguments).exponent(.5)}function $h(e){return Math.sign(e)*e*e}function sA(e){return Math.sign(e)*Math.sqrt(Math.abs(e))}function qy(){var e=xc(),t=[0,1],n=!1,r;function a(o){var i=sA(e(o));return isNaN(i)?r:n?Math.round(i):i}return a.invert=function(o){return e.invert($h(o))},a.domain=function(o){return arguments.length?(e.domain(o),a):e.domain()},a.range=function(o){return arguments.length?(e.range((t=Array.from(o,Io)).map($h)),a):t.slice()},a.rangeRound=function(o){return a.range(o).round(!0)},a.round=function(o){return arguments.length?(n=!!o,a):n},a.clamp=function(o){return arguments.length?(e.clamp(o),a):e.clamp()},a.unknown=function(o){return arguments.length?(r=o,a):r},a.copy=function(){return qy(e.domain(),t).round(n).clamp(e.clamp()).unknown(r)},ft.apply(a,arguments),bn(a)}function Uy(){var e=[],t=[],n=[],r;function a(){var i=0,s=Math.max(1,t.length);for(n=new Array(s-1);++i<s;)n[i-1]=d2(e,i/s);return o}function o(i){return i==null||isNaN(i=+i)?r:t[la(n,i)]}return o.invertExtent=function(i){var s=t.indexOf(i);return s<0?[NaN,NaN]:[s>0?n[s-1]:e[0],s<n.length?n[s]:e[e.length-1]]},o.domain=function(i){if(!arguments.length)return e.slice();e=[];for(let s of i)s!=null&&!isNaN(s=+s)&&e.push(s);return e.sort(mn),a()},o.range=function(i){return arguments.length?(t=Array.from(i),a()):t.slice()},o.unknown=function(i){return arguments.length?(r=i,o):r},o.quantiles=function(){return n.slice()},o.copy=function(){return Uy().domain(e).range(t).unknown(r)},ft.apply(o,arguments)}function Ky(){var e=0,t=1,n=1,r=[.5],a=[0,1],o;function i(l){return l!=null&&l<=l?a[la(r,l,0,n)]:o}function s(){var l=-1;for(r=new Array(n);++l<n;)r[l]=((l+1)*t-(l-n)*e)/(n+1);return i}return i.domain=function(l){return arguments.length?([e,t]=l,e=+e,t=+t,s()):[e,t]},i.range=function(l){return arguments.length?(n=(a=Array.from(l)).length-1,s()):a.slice()},i.invertExtent=function(l){var c=a.indexOf(l);return c<0?[NaN,NaN]:c<1?[e,r[0]]:c>=n?[r[n-1],t]:[r[c-1],r[c]]},i.unknown=function(l){return arguments.length&&(o=l),i},i.thresholds=function(){return r.slice()},i.copy=function(){return Ky().domain([e,t]).range(a).unknown(o)},ft.apply(bn(i),arguments)}function Vy(){var e=[.5],t=[0,1],n,r=1;function a(o){return o!=null&&o<=o?t[la(e,o,0,r)]:n}return a.domain=function(o){return arguments.length?(e=Array.from(o),r=Math.min(e.length,t.length-1),a):e.slice()},a.range=function(o){return arguments.length?(t=Array.from(o),r=Math.min(e.length,t.length-1),a):t.slice()},a.invertExtent=function(o){var i=t.indexOf(o);return[e[i-1],e[i]]},a.unknown=function(o){return arguments.length?(n=o,a):n},a.copy=function(){return Vy().domain(e).range(t).unknown(n)},ft.apply(a,arguments)}const hs=new Date,ms=new Date;function je(e,t,n,r){function a(o){return e(o=arguments.length===0?new Date:new Date(+o)),o}return a.floor=o=>(e(o=new Date(+o)),o),a.ceil=o=>(e(o=new Date(o-1)),t(o,1),e(o),o),a.round=o=>{const i=a(o),s=a.ceil(o);return o-i<s-o?i:s},a.offset=(o,i)=>(t(o=new Date(+o),i==null?1:Math.floor(i)),o),a.range=(o,i,s)=>{const l=[];if(o=a.ceil(o),s=s==null?1:Math.floor(s),!(o<i)||!(s>0))return l;let c;do l.push(c=new Date(+o)),t(o,s),e(o);while(c<o&&o<i);return l},a.filter=o=>je(i=>{if(i>=i)for(;e(i),!o(i);)i.setTime(i-1)},(i,s)=>{if(i>=i)if(s<0)for(;++s<=0;)for(;t(i,-1),!o(i););else for(;--s>=0;)for(;t(i,1),!o(i););}),n&&(a.count=(o,i)=>(hs.setTime(+o),ms.setTime(+i),e(hs),e(ms),Math.floor(n(hs,ms))),a.every=o=>(o=Math.floor(o),!isFinite(o)||!(o>0)?null:o>1?a.filter(r?i=>r(i)%o===0:i=>a.count(0,i)%o===0):a)),a}const So=je(()=>{},(e,t)=>{e.setTime(+e+t)},(e,t)=>t-e);So.every=e=>(e=Math.floor(e),!isFinite(e)||!(e>0)?null:e>1?je(t=>{t.setTime(Math.floor(t/e)*e)},(t,n)=>{t.setTime(+t+n*e)},(t,n)=>(n-t)/e):So);So.range;const Gt=1e3,ht=Gt*60,qt=ht*60,Jt=qt*24,Nc=Jt*7,Dh=Jt*30,ps=Jt*365,Sn=je(e=>{e.setTime(e-e.getMilliseconds())},(e,t)=>{e.setTime(+e+t*Gt)},(e,t)=>(t-e)/Gt,e=>e.getUTCSeconds());Sn.range;const jc=je(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*Gt)},(e,t)=>{e.setTime(+e+t*ht)},(e,t)=>(t-e)/ht,e=>e.getMinutes());jc.range;const Oc=je(e=>{e.setUTCSeconds(0,0)},(e,t)=>{e.setTime(+e+t*ht)},(e,t)=>(t-e)/ht,e=>e.getUTCMinutes());Oc.range;const Cc=je(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*Gt-e.getMinutes()*ht)},(e,t)=>{e.setTime(+e+t*qt)},(e,t)=>(t-e)/qt,e=>e.getHours());Cc.range;const Ec=je(e=>{e.setUTCMinutes(0,0,0)},(e,t)=>{e.setTime(+e+t*qt)},(e,t)=>(t-e)/qt,e=>e.getUTCHours());Ec.range;const da=je(e=>e.setHours(0,0,0,0),(e,t)=>e.setDate(e.getDate()+t),(e,t)=>(t-e-(t.getTimezoneOffset()-e.getTimezoneOffset())*ht)/Jt,e=>e.getDate()-1);da.range;const ki=je(e=>{e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCDate(e.getUTCDate()+t)},(e,t)=>(t-e)/Jt,e=>e.getUTCDate()-1);ki.range;const Jy=je(e=>{e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCDate(e.getUTCDate()+t)},(e,t)=>(t-e)/Jt,e=>Math.floor(e/Jt));Jy.range;function Fn(e){return je(t=>{t.setDate(t.getDate()-(t.getDay()+7-e)%7),t.setHours(0,0,0,0)},(t,n)=>{t.setDate(t.getDate()+n*7)},(t,n)=>(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*ht)/Nc)}const Ti=Fn(0),Po=Fn(1),lA=Fn(2),cA=Fn(3),dr=Fn(4),uA=Fn(5),dA=Fn(6);Ti.range;Po.range;lA.range;cA.range;dr.range;uA.range;dA.range;function Hn(e){return je(t=>{t.setUTCDate(t.getUTCDate()-(t.getUTCDay()+7-e)%7),t.setUTCHours(0,0,0,0)},(t,n)=>{t.setUTCDate(t.getUTCDate()+n*7)},(t,n)=>(n-t)/Nc)}const Ii=Hn(0),No=Hn(1),hA=Hn(2),mA=Hn(3),hr=Hn(4),pA=Hn(5),gA=Hn(6);Ii.range;No.range;hA.range;mA.range;hr.range;pA.range;gA.range;const Mc=je(e=>{e.setDate(1),e.setHours(0,0,0,0)},(e,t)=>{e.setMonth(e.getMonth()+t)},(e,t)=>t.getMonth()-e.getMonth()+(t.getFullYear()-e.getFullYear())*12,e=>e.getMonth());Mc.range;const $c=je(e=>{e.setUTCDate(1),e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCMonth(e.getUTCMonth()+t)},(e,t)=>t.getUTCMonth()-e.getUTCMonth()+(t.getUTCFullYear()-e.getUTCFullYear())*12,e=>e.getUTCMonth());$c.range;const Zt=je(e=>{e.setMonth(0,1),e.setHours(0,0,0,0)},(e,t)=>{e.setFullYear(e.getFullYear()+t)},(e,t)=>t.getFullYear()-e.getFullYear(),e=>e.getFullYear());Zt.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:je(t=>{t.setFullYear(Math.floor(t.getFullYear()/e)*e),t.setMonth(0,1),t.setHours(0,0,0,0)},(t,n)=>{t.setFullYear(t.getFullYear()+n*e)});Zt.range;const Xt=je(e=>{e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCFullYear(e.getUTCFullYear()+t)},(e,t)=>t.getUTCFullYear()-e.getUTCFullYear(),e=>e.getUTCFullYear());Xt.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:je(t=>{t.setUTCFullYear(Math.floor(t.getUTCFullYear()/e)*e),t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},(t,n)=>{t.setUTCFullYear(t.getUTCFullYear()+n*e)});Xt.range;function Zy(e,t,n,r,a,o){const i=[[Sn,1,Gt],[Sn,5,5*Gt],[Sn,15,15*Gt],[Sn,30,30*Gt],[o,1,ht],[o,5,5*ht],[o,15,15*ht],[o,30,30*ht],[a,1,qt],[a,3,3*qt],[a,6,6*qt],[a,12,12*qt],[r,1,Jt],[r,2,2*Jt],[n,1,Nc],[t,1,Dh],[t,3,3*Dh],[e,1,ps]];function s(c,u,h){const m=u<c;m&&([c,u]=[u,c]);const p=h&&typeof h.range=="function"?h:l(c,u,h),y=p?p.range(c,+u+1):[];return m?y.reverse():y}function l(c,u,h){const m=Math.abs(u-c)/h,p=gc(([,,v])=>v).right(i,m);if(p===i.length)return e.every(hl(c/ps,u/ps,h));if(p===0)return So.every(Math.max(hl(c,u,h),1));const[y,f]=i[m/i[p-1][2]<i[p][2]/m?p-1:p];return y.every(f)}return[s,l]}const[yA,fA]=Zy(Xt,$c,Ii,Jy,Ec,Oc),[vA,bA]=Zy(Zt,Mc,Ti,da,Cc,jc);function gs(e){if(0<=e.y&&e.y<100){var t=new Date(-1,e.m,e.d,e.H,e.M,e.S,e.L);return t.setFullYear(e.y),t}return new Date(e.y,e.m,e.d,e.H,e.M,e.S,e.L)}function ys(e){if(0<=e.y&&e.y<100){var t=new Date(Date.UTC(-1,e.m,e.d,e.H,e.M,e.S,e.L));return t.setUTCFullYear(e.y),t}return new Date(Date.UTC(e.y,e.m,e.d,e.H,e.M,e.S,e.L))}function Pr(e,t,n){return{y:e,m:t,d:n,H:0,M:0,S:0,L:0}}function wA(e){var t=e.dateTime,n=e.date,r=e.time,a=e.periods,o=e.days,i=e.shortDays,s=e.months,l=e.shortMonths,c=Nr(a),u=jr(a),h=Nr(o),m=jr(o),p=Nr(i),y=jr(i),f=Nr(s),v=jr(s),b=Nr(l),w=jr(l),x={a:F,A:q,b:H,B:Z,c:null,d:Fh,e:Fh,f:zA,g:QA,G:tS,H:LA,I:FA,j:HA,L:Xy,m:YA,M:GA,p:ee,q:te,Q:Yh,s:Gh,S:qA,u:UA,U:KA,V:VA,w:JA,W:ZA,x:null,X:null,y:XA,Y:eS,Z:nS,"%":zh},T={a:Te,A:de,b:E,B:z,c:null,d:Hh,e:Hh,f:iS,g:yS,G:vS,H:rS,I:aS,j:oS,L:ef,m:sS,M:lS,p:B,q:Y,Q:Yh,s:Gh,S:cS,u:uS,U:dS,V:hS,w:mS,W:pS,x:null,X:null,y:gS,Y:fS,Z:bS,"%":zh},k={a:$,A,b:N,B:D,c:L,d:Wh,e:Wh,f:BA,g:_h,G:Rh,H:Lh,I:Lh,j:EA,L:DA,m:CA,M:MA,p:M,q:OA,Q:_A,s:WA,S:$A,u:AA,U:SA,V:PA,w:IA,W:NA,x:U,X:_,y:_h,Y:Rh,Z:jA,"%":RA};x.x=I(n,x),x.X=I(r,x),x.c=I(t,x),T.x=I(n,T),T.X=I(r,T),T.c=I(t,T);function I(P,R){return function(W){var S=[],J=-1,X=0,pe=P.length,he,ze,Ct;for(W instanceof Date||(W=new Date(+W));++J<pe;)P.charCodeAt(J)===37&&(S.push(P.slice(X,J)),(ze=Bh[he=P.charAt(++J)])!=null?he=P.charAt(++J):ze=he==="e"?" ":"0",(Ct=R[he])&&(he=Ct(W,ze)),S.push(he),X=J+1);return S.push(P.slice(X,J)),S.join("")}}function C(P,R){return function(W){var S=Pr(1900,void 0,1),J=O(S,P,W+="",0),X,pe;if(J!=W.length)return null;if("Q"in S)return new Date(S.Q);if("s"in S)return new Date(S.s*1e3+("L"in S?S.L:0));if(R&&!("Z"in S)&&(S.Z=0),"p"in S&&(S.H=S.H%12+S.p*12),S.m===void 0&&(S.m="q"in S?S.q:0),"V"in S){if(S.V<1||S.V>53)return null;"w"in S||(S.w=1),"Z"in S?(X=ys(Pr(S.y,0,1)),pe=X.getUTCDay(),X=pe>4||pe===0?No.ceil(X):No(X),X=ki.offset(X,(S.V-1)*7),S.y=X.getUTCFullYear(),S.m=X.getUTCMonth(),S.d=X.getUTCDate()+(S.w+6)%7):(X=gs(Pr(S.y,0,1)),pe=X.getDay(),X=pe>4||pe===0?Po.ceil(X):Po(X),X=da.offset(X,(S.V-1)*7),S.y=X.getFullYear(),S.m=X.getMonth(),S.d=X.getDate()+(S.w+6)%7)}else("W"in S||"U"in S)&&("w"in S||(S.w="u"in S?S.u%7:"W"in S?1:0),pe="Z"in S?ys(Pr(S.y,0,1)).getUTCDay():gs(Pr(S.y,0,1)).getDay(),S.m=0,S.d="W"in S?(S.w+6)%7+S.W*7-(pe+5)%7:S.w+S.U*7-(pe+6)%7);return"Z"in S?(S.H+=S.Z/100|0,S.M+=S.Z%100,ys(S)):gs(S)}}function O(P,R,W,S){for(var J=0,X=R.length,pe=W.length,he,ze;J<X;){if(S>=pe)return-1;if(he=R.charCodeAt(J++),he===37){if(he=R.charAt(J++),ze=k[he in Bh?R.charAt(J++):he],!ze||(S=ze(P,W,S))<0)return-1}else if(he!=W.charCodeAt(S++))return-1}return S}function M(P,R,W){var S=c.exec(R.slice(W));return S?(P.p=u.get(S[0].toLowerCase()),W+S[0].length):-1}function $(P,R,W){var S=p.exec(R.slice(W));return S?(P.w=y.get(S[0].toLowerCase()),W+S[0].length):-1}function A(P,R,W){var S=h.exec(R.slice(W));return S?(P.w=m.get(S[0].toLowerCase()),W+S[0].length):-1}function N(P,R,W){var S=b.exec(R.slice(W));return S?(P.m=w.get(S[0].toLowerCase()),W+S[0].length):-1}function D(P,R,W){var S=f.exec(R.slice(W));return S?(P.m=v.get(S[0].toLowerCase()),W+S[0].length):-1}function L(P,R,W){return O(P,t,R,W)}function U(P,R,W){return O(P,n,R,W)}function _(P,R,W){return O(P,r,R,W)}function F(P){return i[P.getDay()]}function q(P){return o[P.getDay()]}function H(P){return l[P.getMonth()]}function Z(P){return s[P.getMonth()]}function ee(P){return a[+(P.getHours()>=12)]}function te(P){return 1+~~(P.getMonth()/3)}function Te(P){return i[P.getUTCDay()]}function de(P){return o[P.getUTCDay()]}function E(P){return l[P.getUTCMonth()]}function z(P){return s[P.getUTCMonth()]}function B(P){return a[+(P.getUTCHours()>=12)]}function Y(P){return 1+~~(P.getUTCMonth()/3)}return{format:function(P){var R=I(P+="",x);return R.toString=function(){return P},R},parse:function(P){var R=C(P+="",!1);return R.toString=function(){return P},R},utcFormat:function(P){var R=I(P+="",T);return R.toString=function(){return P},R},utcParse:function(P){var R=C(P+="",!0);return R.toString=function(){return P},R}}}var Bh={"-":"",_:" ",0:"0"},We=/^\s*\d+/,xA=/^%/,kA=/[\\^$*+?|[\]().{}]/g;function ne(e,t,n){var r=e<0?"-":"",a=(r?-e:e)+"",o=a.length;return r+(o<n?new Array(n-o+1).join(t)+a:a)}function TA(e){return e.replace(kA,"\\$&")}function Nr(e){return new RegExp("^(?:"+e.map(TA).join("|")+")","i")}function jr(e){return new Map(e.map((t,n)=>[t.toLowerCase(),n]))}function IA(e,t,n){var r=We.exec(t.slice(n,n+1));return r?(e.w=+r[0],n+r[0].length):-1}function AA(e,t,n){var r=We.exec(t.slice(n,n+1));return r?(e.u=+r[0],n+r[0].length):-1}function SA(e,t,n){var r=We.exec(t.slice(n,n+2));return r?(e.U=+r[0],n+r[0].length):-1}function PA(e,t,n){var r=We.exec(t.slice(n,n+2));return r?(e.V=+r[0],n+r[0].length):-1}function NA(e,t,n){var r=We.exec(t.slice(n,n+2));return r?(e.W=+r[0],n+r[0].length):-1}function Rh(e,t,n){var r=We.exec(t.slice(n,n+4));return r?(e.y=+r[0],n+r[0].length):-1}function _h(e,t,n){var r=We.exec(t.slice(n,n+2));return r?(e.y=+r[0]+(+r[0]>68?1900:2e3),n+r[0].length):-1}function jA(e,t,n){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n,n+6));return r?(e.Z=r[1]?0:-(r[2]+(r[3]||"00")),n+r[0].length):-1}function OA(e,t,n){var r=We.exec(t.slice(n,n+1));return r?(e.q=r[0]*3-3,n+r[0].length):-1}function CA(e,t,n){var r=We.exec(t.slice(n,n+2));return r?(e.m=r[0]-1,n+r[0].length):-1}function Wh(e,t,n){var r=We.exec(t.slice(n,n+2));return r?(e.d=+r[0],n+r[0].length):-1}function EA(e,t,n){var r=We.exec(t.slice(n,n+3));return r?(e.m=0,e.d=+r[0],n+r[0].length):-1}function Lh(e,t,n){var r=We.exec(t.slice(n,n+2));return r?(e.H=+r[0],n+r[0].length):-1}function MA(e,t,n){var r=We.exec(t.slice(n,n+2));return r?(e.M=+r[0],n+r[0].length):-1}function $A(e,t,n){var r=We.exec(t.slice(n,n+2));return r?(e.S=+r[0],n+r[0].length):-1}function DA(e,t,n){var r=We.exec(t.slice(n,n+3));return r?(e.L=+r[0],n+r[0].length):-1}function BA(e,t,n){var r=We.exec(t.slice(n,n+6));return r?(e.L=Math.floor(r[0]/1e3),n+r[0].length):-1}function RA(e,t,n){var r=xA.exec(t.slice(n,n+1));return r?n+r[0].length:-1}function _A(e,t,n){var r=We.exec(t.slice(n));return r?(e.Q=+r[0],n+r[0].length):-1}function WA(e,t,n){var r=We.exec(t.slice(n));return r?(e.s=+r[0],n+r[0].length):-1}function Fh(e,t){return ne(e.getDate(),t,2)}function LA(e,t){return ne(e.getHours(),t,2)}function FA(e,t){return ne(e.getHours()%12||12,t,2)}function HA(e,t){return ne(1+da.count(Zt(e),e),t,3)}function Xy(e,t){return ne(e.getMilliseconds(),t,3)}function zA(e,t){return Xy(e,t)+"000"}function YA(e,t){return ne(e.getMonth()+1,t,2)}function GA(e,t){return ne(e.getMinutes(),t,2)}function qA(e,t){return ne(e.getSeconds(),t,2)}function UA(e){var t=e.getDay();return t===0?7:t}function KA(e,t){return ne(Ti.count(Zt(e)-1,e),t,2)}function Qy(e){var t=e.getDay();return t>=4||t===0?dr(e):dr.ceil(e)}function VA(e,t){return e=Qy(e),ne(dr.count(Zt(e),e)+(Zt(e).getDay()===4),t,2)}function JA(e){return e.getDay()}function ZA(e,t){return ne(Po.count(Zt(e)-1,e),t,2)}function XA(e,t){return ne(e.getFullYear()%100,t,2)}function QA(e,t){return e=Qy(e),ne(e.getFullYear()%100,t,2)}function eS(e,t){return ne(e.getFullYear()%1e4,t,4)}function tS(e,t){var n=e.getDay();return e=n>=4||n===0?dr(e):dr.ceil(e),ne(e.getFullYear()%1e4,t,4)}function nS(e){var t=e.getTimezoneOffset();return(t>0?"-":(t*=-1,"+"))+ne(t/60|0,"0",2)+ne(t%60,"0",2)}function Hh(e,t){return ne(e.getUTCDate(),t,2)}function rS(e,t){return ne(e.getUTCHours(),t,2)}function aS(e,t){return ne(e.getUTCHours()%12||12,t,2)}function oS(e,t){return ne(1+ki.count(Xt(e),e),t,3)}function ef(e,t){return ne(e.getUTCMilliseconds(),t,3)}function iS(e,t){return ef(e,t)+"000"}function sS(e,t){return ne(e.getUTCMonth()+1,t,2)}function lS(e,t){return ne(e.getUTCMinutes(),t,2)}function cS(e,t){return ne(e.getUTCSeconds(),t,2)}function uS(e){var t=e.getUTCDay();return t===0?7:t}function dS(e,t){return ne(Ii.count(Xt(e)-1,e),t,2)}function tf(e){var t=e.getUTCDay();return t>=4||t===0?hr(e):hr.ceil(e)}function hS(e,t){return e=tf(e),ne(hr.count(Xt(e),e)+(Xt(e).getUTCDay()===4),t,2)}function mS(e){return e.getUTCDay()}function pS(e,t){return ne(No.count(Xt(e)-1,e),t,2)}function gS(e,t){return ne(e.getUTCFullYear()%100,t,2)}function yS(e,t){return e=tf(e),ne(e.getUTCFullYear()%100,t,2)}function fS(e,t){return ne(e.getUTCFullYear()%1e4,t,4)}function vS(e,t){var n=e.getUTCDay();return e=n>=4||n===0?hr(e):hr.ceil(e),ne(e.getUTCFullYear()%1e4,t,4)}function bS(){return"+0000"}function zh(){return"%"}function Yh(e){return+e}function Gh(e){return Math.floor(+e/1e3)}var qn,nf,rf;wS({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});function wS(e){return qn=wA(e),nf=qn.format,qn.parse,rf=qn.utcFormat,qn.utcParse,qn}function xS(e){return new Date(e)}function kS(e){return e instanceof Date?+e:+new Date(+e)}function Dc(e,t,n,r,a,o,i,s,l,c){var u=xc(),h=u.invert,m=u.domain,p=c(".%L"),y=c(":%S"),f=c("%I:%M"),v=c("%I %p"),b=c("%a %d"),w=c("%b %d"),x=c("%B"),T=c("%Y");function k(I){return(l(I)<I?p:s(I)<I?y:i(I)<I?f:o(I)<I?v:r(I)<I?a(I)<I?b:w:n(I)<I?x:T)(I)}return u.invert=function(I){return new Date(h(I))},u.domain=function(I){return arguments.length?m(Array.from(I,kS)):m().map(xS)},u.ticks=function(I){var C=m();return e(C[0],C[C.length-1],I??10)},u.tickFormat=function(I,C){return C==null?k:c(C)},u.nice=function(I){var C=m();return(!I||typeof I.range!="function")&&(I=t(C[0],C[C.length-1],I??10)),I?m(zy(C,I)):u},u.copy=function(){return ua(u,Dc(e,t,n,r,a,o,i,s,l,c))},u}function TS(){return ft.apply(Dc(vA,bA,Zt,Mc,Ti,da,Cc,jc,Sn,nf).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}function IS(){return ft.apply(Dc(yA,fA,Xt,$c,Ii,ki,Ec,Oc,Sn,rf).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)]),arguments)}function Ai(){var e=0,t=1,n,r,a,o,i=Ke,s=!1,l;function c(h){return h==null||isNaN(h=+h)?l:i(a===0?.5:(h=(o(h)-n)*a,s?Math.max(0,Math.min(1,h)):h))}c.domain=function(h){return arguments.length?([e,t]=h,n=o(e=+e),r=o(t=+t),a=n===r?0:1/(r-n),c):[e,t]},c.clamp=function(h){return arguments.length?(s=!!h,c):s},c.interpolator=function(h){return arguments.length?(i=h,c):i};function u(h){return function(m){var p,y;return arguments.length?([p,y]=m,i=h(p,y),c):[i(0),i(1)]}}return c.range=u(mr),c.rangeRound=u(wc),c.unknown=function(h){return arguments.length?(l=h,c):l},function(h){return o=h,n=h(e),r=h(t),a=n===r?0:1/(r-n),c}}function wn(e,t){return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown())}function af(){var e=bn(Ai()(Ke));return e.copy=function(){return wn(e,af())},rn.apply(e,arguments)}function of(){var e=Ic(Ai()).domain([1,10]);return e.copy=function(){return wn(e,of()).base(e.base())},rn.apply(e,arguments)}function sf(){var e=Ac(Ai());return e.copy=function(){return wn(e,sf()).constant(e.constant())},rn.apply(e,arguments)}function Bc(){var e=Sc(Ai());return e.copy=function(){return wn(e,Bc()).exponent(e.exponent())},rn.apply(e,arguments)}function AS(){return Bc.apply(null,arguments).exponent(.5)}function lf(){var e=[],t=Ke;function n(r){if(r!=null&&!isNaN(r=+r))return t((la(e,r,1)-1)/(e.length-1))}return n.domain=function(r){if(!arguments.length)return e.slice();e=[];for(let a of r)a!=null&&!isNaN(a=+a)&&e.push(a);return e.sort(mn),n},n.interpolator=function(r){return arguments.length?(t=r,n):t},n.range=function(){return e.map((r,a)=>t(a/(e.length-1)))},n.quantiles=function(r){return Array.from({length:r+1},(a,o)=>u2(e,o/r))},n.copy=function(){return lf(t).domain(e)},rn.apply(n,arguments)}function Si(){var e=0,t=.5,n=1,r=1,a,o,i,s,l,c=Ke,u,h=!1,m;function p(f){return isNaN(f=+f)?m:(f=.5+((f=+u(f))-o)*(r*f<r*o?s:l),c(h?Math.max(0,Math.min(1,f)):f))}p.domain=function(f){return arguments.length?([e,t,n]=f,a=u(e=+e),o=u(t=+t),i=u(n=+n),s=a===o?0:.5/(o-a),l=o===i?0:.5/(i-o),r=o<a?-1:1,p):[e,t,n]},p.clamp=function(f){return arguments.length?(h=!!f,p):h},p.interpolator=function(f){return arguments.length?(c=f,p):c};function y(f){return function(v){var b,w,x;return arguments.length?([b,w,x]=v,c=R2(f,[b,w,x]),p):[c(0),c(.5),c(1)]}}return p.range=y(mr),p.rangeRound=y(wc),p.unknown=function(f){return arguments.length?(m=f,p):m},function(f){return u=f,a=f(e),o=f(t),i=f(n),s=a===o?0:.5/(o-a),l=o===i?0:.5/(i-o),r=o<a?-1:1,p}}function cf(){var e=bn(Si()(Ke));return e.copy=function(){return wn(e,cf())},rn.apply(e,arguments)}function uf(){var e=Ic(Si()).domain([.1,1,10]);return e.copy=function(){return wn(e,uf()).base(e.base())},rn.apply(e,arguments)}function df(){var e=Ac(Si());return e.copy=function(){return wn(e,df()).constant(e.constant())},rn.apply(e,arguments)}function Rc(){var e=Sc(Si());return e.copy=function(){return wn(e,Rc()).exponent(e.exponent())},rn.apply(e,arguments)}function SS(){return Rc.apply(null,arguments).exponent(.5)}const Er=Object.freeze(Object.defineProperty({__proto__:null,scaleBand:fc,scaleDiverging:cf,scaleDivergingLog:uf,scaleDivergingPow:Rc,scaleDivergingSqrt:SS,scaleDivergingSymlog:df,scaleIdentity:Hy,scaleImplicit:ml,scaleLinear:Fy,scaleLog:Yy,scaleOrdinal:yc,scalePoint:m2,scalePow:Pc,scaleQuantile:Uy,scaleQuantize:Ky,scaleRadial:qy,scaleSequential:af,scaleSequentialLog:of,scaleSequentialPow:Bc,scaleSequentialQuantile:lf,scaleSequentialSqrt:AS,scaleSequentialSymlog:sf,scaleSqrt:iA,scaleSymlog:Gy,scaleThreshold:Vy,scaleTime:TS,scaleUtc:IS,tickFormat:Ly},Symbol.toStringTag,{value:"Module"}));var an=e=>e.chartData,hf=j([an],e=>{var t=e.chartData!=null?e.chartData.length-1:0;return{chartData:e.chartData,computedData:e.computedData,dataEndIndex:t,dataStartIndex:0}}),_c=(e,t,n,r)=>r?hf(e):an(e),PS=(e,t,n)=>n?hf(e):an(e);function gn(e){if(Array.isArray(e)&&e.length===2){var[t,n]=e;if(ve(t)&&ve(n))return!0}return!1}function qh(e,t,n){return n?e:[Math.min(e[0],t[0]),Math.max(e[1],t[1])]}function mf(e,t){if(t&&typeof e!="function"&&Array.isArray(e)&&e.length===2){var[n,r]=e,a,o;if(ve(n))a=n;else if(typeof n=="function")return;if(ve(r))o=r;else if(typeof r=="function")return;var i=[a,o];if(gn(i))return i}}function NS(e,t,n){if(!(!n&&t==null)){if(typeof e=="function"&&t!=null)try{var r=e(t,n);if(gn(r))return qh(r,t,n)}catch{}if(Array.isArray(e)&&e.length===2){var[a,o]=e,i,s;if(a==="auto")t!=null&&(i=Math.min(...t));else if(K(a))i=a;else if(typeof a=="function")try{t!=null&&(i=a(t==null?void 0:t[0]))}catch{}else if(typeof a=="string"&&hd.test(a)){var l=hd.exec(a);if(l==null||l[1]==null||t==null)i=void 0;else{var c=+l[1];i=t[0]-c}}else i=t==null?void 0:t[0];if(o==="auto")t!=null&&(s=Math.max(...t));else if(K(o))s=o;else if(typeof o=="function")try{t!=null&&(s=o(t==null?void 0:t[1]))}catch{}else if(typeof o=="string"&&md.test(o)){var u=md.exec(o);if(u==null||u[1]==null||t==null)s=void 0;else{var h=+u[1];s=t[1]+h}}else s=t==null?void 0:t[1];var m=[i,s];if(gn(m))return t==null?m:qh(m,t,n)}}}var pr=1e9,jS={precision:20,rounding:4,toExpNeg:-7,toExpPos:21,LN10:"2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"},Lc,ye=!0,yt="[DecimalError] ",On=yt+"Invalid argument: ",Wc=yt+"Exponent out of range: ",gr=Math.floor,Tn=Math.pow,OS=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,at,Re=1e7,me=7,pf=9007199254740991,jo=gr(pf/me),G={};G.absoluteValue=G.abs=function(){var e=new this.constructor(this);return e.s&&(e.s=1),e};G.comparedTo=G.cmp=function(e){var t,n,r,a,o=this;if(e=new o.constructor(e),o.s!==e.s)return o.s||-e.s;if(o.e!==e.e)return o.e>e.e^o.s<0?1:-1;for(r=o.d.length,a=e.d.length,t=0,n=r<a?r:a;t<n;++t)if(o.d[t]!==e.d[t])return o.d[t]>e.d[t]^o.s<0?1:-1;return r===a?0:r>a^o.s<0?1:-1};G.decimalPlaces=G.dp=function(){var e=this,t=e.d.length-1,n=(t-e.e)*me;if(t=e.d[t],t)for(;t%10==0;t/=10)n--;return n<0?0:n};G.dividedBy=G.div=function(e){return Ut(this,new this.constructor(e))};G.dividedToIntegerBy=G.idiv=function(e){var t=this,n=t.constructor;return se(Ut(t,new n(e),0,1),n.precision)};G.equals=G.eq=function(e){return!this.cmp(e)};G.exponent=function(){return Se(this)};G.greaterThan=G.gt=function(e){return this.cmp(e)>0};G.greaterThanOrEqualTo=G.gte=function(e){return this.cmp(e)>=0};G.isInteger=G.isint=function(){return this.e>this.d.length-2};G.isNegative=G.isneg=function(){return this.s<0};G.isPositive=G.ispos=function(){return this.s>0};G.isZero=function(){return this.s===0};G.lessThan=G.lt=function(e){return this.cmp(e)<0};G.lessThanOrEqualTo=G.lte=function(e){return this.cmp(e)<1};G.logarithm=G.log=function(e){var t,n=this,r=n.constructor,a=r.precision,o=a+5;if(e===void 0)e=new r(10);else if(e=new r(e),e.s<1||e.eq(at))throw Error(yt+"NaN");if(n.s<1)throw Error(yt+(n.s?"NaN":"-Infinity"));return n.eq(at)?new r(0):(ye=!1,t=Ut(Ur(n,o),Ur(e,o),o),ye=!0,se(t,a))};G.minus=G.sub=function(e){var t=this;return e=new t.constructor(e),t.s==e.s?ff(t,e):gf(t,(e.s=-e.s,e))};G.modulo=G.mod=function(e){var t,n=this,r=n.constructor,a=r.precision;if(e=new r(e),!e.s)throw Error(yt+"NaN");return n.s?(ye=!1,t=Ut(n,e,0,1).times(e),ye=!0,n.minus(t)):se(new r(n),a)};G.naturalExponential=G.exp=function(){return yf(this)};G.naturalLogarithm=G.ln=function(){return Ur(this)};G.negated=G.neg=function(){var e=new this.constructor(this);return e.s=-e.s||0,e};G.plus=G.add=function(e){var t=this;return e=new t.constructor(e),t.s==e.s?gf(t,e):ff(t,(e.s=-e.s,e))};G.precision=G.sd=function(e){var t,n,r,a=this;if(e!==void 0&&e!==!!e&&e!==1&&e!==0)throw Error(On+e);if(t=Se(a)+1,r=a.d.length-1,n=r*me+1,r=a.d[r],r){for(;r%10==0;r/=10)n--;for(r=a.d[0];r>=10;r/=10)n++}return e&&t>n?t:n};G.squareRoot=G.sqrt=function(){var e,t,n,r,a,o,i,s=this,l=s.constructor;if(s.s<1){if(!s.s)return new l(0);throw Error(yt+"NaN")}for(e=Se(s),ye=!1,a=Math.sqrt(+s),a==0||a==1/0?(t=$t(s.d),(t.length+e)%2==0&&(t+="0"),a=Math.sqrt(t),e=gr((e+1)/2)-(e<0||e%2),a==1/0?t="5e"+e:(t=a.toExponential(),t=t.slice(0,t.indexOf("e")+1)+e),r=new l(t)):r=new l(a.toString()),n=l.precision,a=i=n+3;;)if(o=r,r=o.plus(Ut(s,o,i+2)).times(.5),$t(o.d).slice(0,i)===(t=$t(r.d)).slice(0,i)){if(t=t.slice(i-3,i+1),a==i&&t=="4999"){if(se(o,n+1,0),o.times(o).eq(s)){r=o;break}}else if(t!="9999")break;i+=4}return ye=!0,se(r,n)};G.times=G.mul=function(e){var t,n,r,a,o,i,s,l,c,u=this,h=u.constructor,m=u.d,p=(e=new h(e)).d;if(!u.s||!e.s)return new h(0);for(e.s*=u.s,n=u.e+e.e,l=m.length,c=p.length,l<c&&(o=m,m=p,p=o,i=l,l=c,c=i),o=[],i=l+c,r=i;r--;)o.push(0);for(r=c;--r>=0;){for(t=0,a=l+r;a>r;)s=o[a]+p[r]*m[a-r-1]+t,o[a--]=s%Re|0,t=s/Re|0;o[a]=(o[a]+t)%Re|0}for(;!o[--i];)o.pop();return t?++n:o.shift(),e.d=o,e.e=n,ye?se(e,h.precision):e};G.toDecimalPlaces=G.todp=function(e,t){var n=this,r=n.constructor;return n=new r(n),e===void 0?n:(_t(e,0,pr),t===void 0?t=r.rounding:_t(t,0,8),se(n,e+Se(n)+1,t))};G.toExponential=function(e,t){var n,r=this,a=r.constructor;return e===void 0?n=Bn(r,!0):(_t(e,0,pr),t===void 0?t=a.rounding:_t(t,0,8),r=se(new a(r),e+1,t),n=Bn(r,!0,e+1)),n};G.toFixed=function(e,t){var n,r,a=this,o=a.constructor;return e===void 0?Bn(a):(_t(e,0,pr),t===void 0?t=o.rounding:_t(t,0,8),r=se(new o(a),e+Se(a)+1,t),n=Bn(r.abs(),!1,e+Se(r)+1),a.isneg()&&!a.isZero()?"-"+n:n)};G.toInteger=G.toint=function(){var e=this,t=e.constructor;return se(new t(e),Se(e)+1,t.rounding)};G.toNumber=function(){return+this};G.toPower=G.pow=function(e){var t,n,r,a,o,i,s=this,l=s.constructor,c=12,u=+(e=new l(e));if(!e.s)return new l(at);if(s=new l(s),!s.s){if(e.s<1)throw Error(yt+"Infinity");return s}if(s.eq(at))return s;if(r=l.precision,e.eq(at))return se(s,r);if(t=e.e,n=e.d.length-1,i=t>=n,o=s.s,i){if((n=u<0?-u:u)<=pf){for(a=new l(at),t=Math.ceil(r/me+4),ye=!1;n%2&&(a=a.times(s),Kh(a.d,t)),n=gr(n/2),n!==0;)s=s.times(s),Kh(s.d,t);return ye=!0,e.s<0?new l(at).div(a):se(a,r)}}else if(o<0)throw Error(yt+"NaN");return o=o<0&&e.d[Math.max(t,n)]&1?-1:1,s.s=1,ye=!1,a=e.times(Ur(s,r+c)),ye=!0,a=yf(a),a.s=o,a};G.toPrecision=function(e,t){var n,r,a=this,o=a.constructor;return e===void 0?(n=Se(a),r=Bn(a,n<=o.toExpNeg||n>=o.toExpPos)):(_t(e,1,pr),t===void 0?t=o.rounding:_t(t,0,8),a=se(new o(a),e,t),n=Se(a),r=Bn(a,e<=n||n<=o.toExpNeg,e)),r};G.toSignificantDigits=G.tosd=function(e,t){var n=this,r=n.constructor;return e===void 0?(e=r.precision,t=r.rounding):(_t(e,1,pr),t===void 0?t=r.rounding:_t(t,0,8)),se(new r(n),e,t)};G.toString=G.valueOf=G.val=G.toJSON=G[Symbol.for("nodejs.util.inspect.custom")]=function(){var e=this,t=Se(e),n=e.constructor;return Bn(e,t<=n.toExpNeg||t>=n.toExpPos)};function gf(e,t){var n,r,a,o,i,s,l,c,u=e.constructor,h=u.precision;if(!e.s||!t.s)return t.s||(t=new u(e)),ye?se(t,h):t;if(l=e.d,c=t.d,i=e.e,a=t.e,l=l.slice(),o=i-a,o){for(o<0?(r=l,o=-o,s=c.length):(r=c,a=i,s=l.length),i=Math.ceil(h/me),s=i>s?i+1:s+1,o>s&&(o=s,r.length=1),r.reverse();o--;)r.push(0);r.reverse()}for(s=l.length,o=c.length,s-o<0&&(o=s,r=c,c=l,l=r),n=0;o;)n=(l[--o]=l[o]+c[o]+n)/Re|0,l[o]%=Re;for(n&&(l.unshift(n),++a),s=l.length;l[--s]==0;)l.pop();return t.d=l,t.e=a,ye?se(t,h):t}function _t(e,t,n){if(e!==~~e||e<t||e>n)throw Error(On+e)}function $t(e){var t,n,r,a=e.length-1,o="",i=e[0];if(a>0){for(o+=i,t=1;t<a;t++)r=e[t]+"",n=me-r.length,n&&(o+=cn(n)),o+=r;i=e[t],r=i+"",n=me-r.length,n&&(o+=cn(n))}else if(i===0)return"0";for(;i%10===0;)i/=10;return o+i}var Ut=function(){function e(r,a){var o,i=0,s=r.length;for(r=r.slice();s--;)o=r[s]*a+i,r[s]=o%Re|0,i=o/Re|0;return i&&r.unshift(i),r}function t(r,a,o,i){var s,l;if(o!=i)l=o>i?1:-1;else for(s=l=0;s<o;s++)if(r[s]!=a[s]){l=r[s]>a[s]?1:-1;break}return l}function n(r,a,o){for(var i=0;o--;)r[o]-=i,i=r[o]<a[o]?1:0,r[o]=i*Re+r[o]-a[o];for(;!r[0]&&r.length>1;)r.shift()}return function(r,a,o,i){var s,l,c,u,h,m,p,y,f,v,b,w,x,T,k,I,C,O,M=r.constructor,$=r.s==a.s?1:-1,A=r.d,N=a.d;if(!r.s)return new M(r);if(!a.s)throw Error(yt+"Division by zero");for(l=r.e-a.e,C=N.length,k=A.length,p=new M($),y=p.d=[],c=0;N[c]==(A[c]||0);)++c;if(N[c]>(A[c]||0)&&--l,o==null?w=o=M.precision:i?w=o+(Se(r)-Se(a))+1:w=o,w<0)return new M(0);if(w=w/me+2|0,c=0,C==1)for(u=0,N=N[0],w++;(c<k||u)&&w--;c++)x=u*Re+(A[c]||0),y[c]=x/N|0,u=x%N|0;else{for(u=Re/(N[0]+1)|0,u>1&&(N=e(N,u),A=e(A,u),C=N.length,k=A.length),T=C,f=A.slice(0,C),v=f.length;v<C;)f[v++]=0;O=N.slice(),O.unshift(0),I=N[0],N[1]>=Re/2&&++I;do u=0,s=t(N,f,C,v),s<0?(b=f[0],C!=v&&(b=b*Re+(f[1]||0)),u=b/I|0,u>1?(u>=Re&&(u=Re-1),h=e(N,u),m=h.length,v=f.length,s=t(h,f,m,v),s==1&&(u--,n(h,C<m?O:N,m))):(u==0&&(s=u=1),h=N.slice()),m=h.length,m<v&&h.unshift(0),n(f,h,v),s==-1&&(v=f.length,s=t(N,f,C,v),s<1&&(u++,n(f,C<v?O:N,v))),v=f.length):s===0&&(u++,f=[0]),y[c++]=u,s&&f[0]?f[v++]=A[T]||0:(f=[A[T]],v=1);while((T++<k||f[0]!==void 0)&&w--)}return y[0]||y.shift(),p.e=l,se(p,i?o+Se(p)+1:o)}}();function yf(e,t){var n,r,a,o,i,s,l=0,c=0,u=e.constructor,h=u.precision;if(Se(e)>16)throw Error(Wc+Se(e));if(!e.s)return new u(at);for(t==null?(ye=!1,s=h):s=t,i=new u(.03125);e.abs().gte(.1);)e=e.times(i),c+=5;for(r=Math.log(Tn(2,c))/Math.LN10*2+5|0,s+=r,n=a=o=new u(at),u.precision=s;;){if(a=se(a.times(e),s),n=n.times(++l),i=o.plus(Ut(a,n,s)),$t(i.d).slice(0,s)===$t(o.d).slice(0,s)){for(;c--;)o=se(o.times(o),s);return u.precision=h,t==null?(ye=!0,se(o,h)):o}o=i}}function Se(e){for(var t=e.e*me,n=e.d[0];n>=10;n/=10)t++;return t}function fs(e,t,n){if(t>e.LN10.sd())throw ye=!0,n&&(e.precision=n),Error(yt+"LN10 precision limit exceeded");return se(new e(e.LN10),t)}function cn(e){for(var t="";e--;)t+="0";return t}function Ur(e,t){var n,r,a,o,i,s,l,c,u,h=1,m=10,p=e,y=p.d,f=p.constructor,v=f.precision;if(p.s<1)throw Error(yt+(p.s?"NaN":"-Infinity"));if(p.eq(at))return new f(0);if(t==null?(ye=!1,c=v):c=t,p.eq(10))return t==null&&(ye=!0),fs(f,c);if(c+=m,f.precision=c,n=$t(y),r=n.charAt(0),o=Se(p),Math.abs(o)<15e14){for(;r<7&&r!=1||r==1&&n.charAt(1)>3;)p=p.times(e),n=$t(p.d),r=n.charAt(0),h++;o=Se(p),r>1?(p=new f("0."+n),o++):p=new f(r+"."+n.slice(1))}else return l=fs(f,c+2,v).times(o+""),p=Ur(new f(r+"."+n.slice(1)),c-m).plus(l),f.precision=v,t==null?(ye=!0,se(p,v)):p;for(s=i=p=Ut(p.minus(at),p.plus(at),c),u=se(p.times(p),c),a=3;;){if(i=se(i.times(u),c),l=s.plus(Ut(i,new f(a),c)),$t(l.d).slice(0,c)===$t(s.d).slice(0,c))return s=s.times(2),o!==0&&(s=s.plus(fs(f,c+2,v).times(o+""))),s=Ut(s,new f(h),c),f.precision=v,t==null?(ye=!0,se(s,v)):s;s=l,a+=2}}function Uh(e,t){var n,r,a;for((n=t.indexOf("."))>-1&&(t=t.replace(".","")),(r=t.search(/e/i))>0?(n<0&&(n=r),n+=+t.slice(r+1),t=t.substring(0,r)):n<0&&(n=t.length),r=0;t.charCodeAt(r)===48;)++r;for(a=t.length;t.charCodeAt(a-1)===48;)--a;if(t=t.slice(r,a),t){if(a-=r,n=n-r-1,e.e=gr(n/me),e.d=[],r=(n+1)%me,n<0&&(r+=me),r<a){for(r&&e.d.push(+t.slice(0,r)),a-=me;r<a;)e.d.push(+t.slice(r,r+=me));t=t.slice(r),r=me-t.length}else r-=a;for(;r--;)t+="0";if(e.d.push(+t),ye&&(e.e>jo||e.e<-jo))throw Error(Wc+n)}else e.s=0,e.e=0,e.d=[0];return e}function se(e,t,n){var r,a,o,i,s,l,c,u,h=e.d;for(i=1,o=h[0];o>=10;o/=10)i++;if(r=t-i,r<0)r+=me,a=t,c=h[u=0];else{if(u=Math.ceil((r+1)/me),o=h.length,u>=o)return e;for(c=o=h[u],i=1;o>=10;o/=10)i++;r%=me,a=r-me+i}if(n!==void 0&&(o=Tn(10,i-a-1),s=c/o%10|0,l=t<0||h[u+1]!==void 0||c%o,l=n<4?(s||l)&&(n==0||n==(e.s<0?3:2)):s>5||s==5&&(n==4||l||n==6&&(r>0?a>0?c/Tn(10,i-a):0:h[u-1])%10&1||n==(e.s<0?8:7))),t<1||!h[0])return l?(o=Se(e),h.length=1,t=t-o-1,h[0]=Tn(10,(me-t%me)%me),e.e=gr(-t/me)||0):(h.length=1,h[0]=e.e=e.s=0),e;if(r==0?(h.length=u,o=1,u--):(h.length=u+1,o=Tn(10,me-r),h[u]=a>0?(c/Tn(10,i-a)%Tn(10,a)|0)*o:0),l)for(;;)if(u==0){(h[0]+=o)==Re&&(h[0]=1,++e.e);break}else{if(h[u]+=o,h[u]!=Re)break;h[u--]=0,o=1}for(r=h.length;h[--r]===0;)h.pop();if(ye&&(e.e>jo||e.e<-jo))throw Error(Wc+Se(e));return e}function ff(e,t){var n,r,a,o,i,s,l,c,u,h,m=e.constructor,p=m.precision;if(!e.s||!t.s)return t.s?t.s=-t.s:t=new m(e),ye?se(t,p):t;if(l=e.d,h=t.d,r=t.e,c=e.e,l=l.slice(),i=c-r,i){for(u=i<0,u?(n=l,i=-i,s=h.length):(n=h,r=c,s=l.length),a=Math.max(Math.ceil(p/me),s)+2,i>a&&(i=a,n.length=1),n.reverse(),a=i;a--;)n.push(0);n.reverse()}else{for(a=l.length,s=h.length,u=a<s,u&&(s=a),a=0;a<s;a++)if(l[a]!=h[a]){u=l[a]<h[a];break}i=0}for(u&&(n=l,l=h,h=n,t.s=-t.s),s=l.length,a=h.length-s;a>0;--a)l[s++]=0;for(a=h.length;a>i;){if(l[--a]<h[a]){for(o=a;o&&l[--o]===0;)l[o]=Re-1;--l[o],l[a]+=Re}l[a]-=h[a]}for(;l[--s]===0;)l.pop();for(;l[0]===0;l.shift())--r;return l[0]?(t.d=l,t.e=r,ye?se(t,p):t):new m(0)}function Bn(e,t,n){var r,a=Se(e),o=$t(e.d),i=o.length;return t?(n&&(r=n-i)>0?o=o.charAt(0)+"."+o.slice(1)+cn(r):i>1&&(o=o.charAt(0)+"."+o.slice(1)),o=o+(a<0?"e":"e+")+a):a<0?(o="0."+cn(-a-1)+o,n&&(r=n-i)>0&&(o+=cn(r))):a>=i?(o+=cn(a+1-i),n&&(r=n-a-1)>0&&(o=o+"."+cn(r))):((r=a+1)<i&&(o=o.slice(0,r)+"."+o.slice(r)),n&&(r=n-i)>0&&(a+1===i&&(o+="."),o+=cn(r))),e.s<0?"-"+o:o}function Kh(e,t){if(e.length>t)return e.length=t,!0}function vf(e){var t,n,r;function a(o){var i=this;if(!(i instanceof a))return new a(o);if(i.constructor=a,o instanceof a){i.s=o.s,i.e=o.e,i.d=(o=o.d)?o.slice():o;return}if(typeof o=="number"){if(o*0!==0)throw Error(On+o);if(o>0)i.s=1;else if(o<0)o=-o,i.s=-1;else{i.s=0,i.e=0,i.d=[0];return}if(o===~~o&&o<1e7){i.e=0,i.d=[o];return}return Uh(i,o.toString())}else if(typeof o!="string")throw Error(On+o);if(o.charCodeAt(0)===45?(o=o.slice(1),i.s=-1):i.s=1,OS.test(o))Uh(i,o);else throw Error(On+o)}if(a.prototype=G,a.ROUND_UP=0,a.ROUND_DOWN=1,a.ROUND_CEIL=2,a.ROUND_FLOOR=3,a.ROUND_HALF_UP=4,a.ROUND_HALF_DOWN=5,a.ROUND_HALF_EVEN=6,a.ROUND_HALF_CEIL=7,a.ROUND_HALF_FLOOR=8,a.clone=vf,a.config=a.set=CS,e===void 0&&(e={}),e)for(r=["precision","rounding","toExpNeg","toExpPos","LN10"],t=0;t<r.length;)e.hasOwnProperty(n=r[t++])||(e[n]=this[n]);return a.config(e),a}function CS(e){if(!e||typeof e!="object")throw Error(yt+"Object expected");var t,n,r,a=["precision",1,pr,"rounding",0,8,"toExpNeg",-1/0,0,"toExpPos",0,1/0];for(t=0;t<a.length;t+=3)if((r=e[n=a[t]])!==void 0)if(gr(r)===r&&r>=a[t+1]&&r<=a[t+2])this[n]=r;else throw Error(On+n+": "+r);if((r=e[n="LN10"])!==void 0)if(r==Math.LN10)this[n]=new this(r);else throw Error(On+n+": "+r);return this}var Lc=vf(jS);at=new Lc(1);const oe=Lc;var ES=e=>e,bf={"@@functional/placeholder":!0},wf=e=>e===bf,Vh=e=>function t(){return arguments.length===0||arguments.length===1&&wf(arguments.length<=0?void 0:arguments[0])?t:e(...arguments)},xf=(e,t)=>e===1?t:Vh(function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];var o=r.filter(i=>i!==bf).length;return o>=e?t(...r):xf(e-o,Vh(function(){for(var i=arguments.length,s=new Array(i),l=0;l<i;l++)s[l]=arguments[l];var c=r.map(u=>wf(u)?s.shift():u);return t(...c,...s)}))}),MS=e=>xf(e.length,e),fl=(e,t)=>{for(var n=[],r=e;r<t;++r)n[r-e]=r;return n},$S=MS((e,t)=>Array.isArray(t)?t.map(e):Object.keys(t).map(n=>t[n]).map(e)),DS=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];if(!n.length)return ES;var a=n.reverse(),o=a[0],i=a.slice(1);return function(){return i.reduce((s,l)=>l(s),o(...arguments))}};function kf(e){var t;return e===0?t=1:t=Math.floor(new oe(e).abs().log(10).toNumber())+1,t}function Tf(e,t,n){for(var r=new oe(e),a=0,o=[];r.lt(t)&&a<1e5;)o.push(r.toNumber()),r=r.add(n),a++;return o}var If=e=>{var[t,n]=e,[r,a]=[t,n];return t>n&&([r,a]=[n,t]),[r,a]},Af=(e,t,n)=>{if(e.lte(0))return new oe(0);var r=kf(e.toNumber()),a=new oe(10).pow(r),o=e.div(a),i=r!==1?.05:.1,s=new oe(Math.ceil(o.div(i).toNumber())).add(n).mul(i),l=s.mul(a);return t?new oe(l.toNumber()):new oe(Math.ceil(l.toNumber()))},BS=(e,t,n)=>{var r=new oe(1),a=new oe(e);if(!a.isint()&&n){var o=Math.abs(e);o<1?(r=new oe(10).pow(kf(e)-1),a=new oe(Math.floor(a.div(r).toNumber())).mul(r)):o>1&&(a=new oe(Math.floor(e)))}else e===0?a=new oe(Math.floor((t-1)/2)):n||(a=new oe(Math.floor(e)));var i=Math.floor((t-1)/2),s=DS($S(l=>a.add(new oe(l-i).mul(r)).toNumber()),fl);return s(0,t)},Sf=function(t,n,r,a){var o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0;if(!Number.isFinite((n-t)/(r-1)))return{step:new oe(0),tickMin:new oe(0),tickMax:new oe(0)};var i=Af(new oe(n).sub(t).div(r-1),a,o),s;t<=0&&n>=0?s=new oe(0):(s=new oe(t).add(n).div(2),s=s.sub(new oe(s).mod(i)));var l=Math.ceil(s.sub(t).div(i).toNumber()),c=Math.ceil(new oe(n).sub(s).div(i).toNumber()),u=l+c+1;return u>r?Sf(t,n,r,a,o+1):(u<r&&(c=n>0?c+(r-u):c,l=n>0?l:l+(r-u)),{step:i,tickMin:s.sub(new oe(l).mul(i)),tickMax:s.add(new oe(c).mul(i))})},RS=function(t){var[n,r]=t,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:6,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,i=Math.max(a,2),[s,l]=If([n,r]);if(s===-1/0||l===1/0){var c=l===1/0?[s,...fl(0,a-1).map(()=>1/0)]:[...fl(0,a-1).map(()=>-1/0),l];return n>r?c.reverse():c}if(s===l)return BS(s,a,o);var{step:u,tickMin:h,tickMax:m}=Sf(s,l,i,o,0),p=Tf(h,m.add(new oe(.1).mul(u)),u);return n>r?p.reverse():p},_S=function(t,n){var[r,a]=t,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,[i,s]=If([r,a]);if(i===-1/0||s===1/0)return[r,a];if(i===s)return[i];var l=Math.max(n,2),c=Af(new oe(s).sub(i).div(l-1),o,0),u=[...Tf(new oe(i),new oe(s),c),s];return o===!1&&(u=u.map(h=>Math.round(h))),r>a?u.reverse():u},Pf=e=>e.rootProps.maxBarSize,WS=e=>e.rootProps.barGap,Nf=e=>e.rootProps.barCategoryGap,LS=e=>e.rootProps.barSize,Pi=e=>e.rootProps.stackOffset,jf=e=>e.rootProps.reverseStackOrder,Fc=e=>e.options.chartName,Hc=e=>e.rootProps.syncId,Of=e=>e.rootProps.syncMethod,zc=e=>e.options.eventEmitter,zD=e=>e.rootProps.baseValue,Ne={grid:-100,barBackground:-50,area:100,cursorRectangle:200,bar:300,line:400,axis:500,scatter:600,activeBar:1e3,cursorLine:1100,activeDot:1200,label:2e3},Ht={allowDecimals:!1,allowDuplicatedCategory:!0,angleAxisId:0,axisLine:!0,axisLineType:"polygon",cx:0,cy:0,orientation:"outer",reversed:!1,scale:"auto",tick:!0,tickLine:!0,tickSize:8,type:"category",zIndex:Ne.axis},rt={allowDataOverflow:!1,allowDecimals:!1,allowDuplicatedCategory:!0,angle:0,axisLine:!0,includeHidden:!1,hide:!1,label:!1,orientation:"right",radiusAxisId:0,reversed:!1,scale:"auto",stroke:"#ccc",tick:!0,tickCount:5,type:"number",zIndex:Ne.axis},Ni=(e,t)=>{if(!(!e||!t))return e!=null&&e.reversed?[t[1],t[0]]:t},FS={allowDataOverflow:!1,allowDecimals:!1,allowDuplicatedCategory:!1,dataKey:void 0,domain:void 0,id:Ht.angleAxisId,includeHidden:!1,name:void 0,reversed:Ht.reversed,scale:Ht.scale,tick:Ht.tick,tickCount:void 0,ticks:void 0,type:Ht.type,unit:void 0},HS={allowDataOverflow:rt.allowDataOverflow,allowDecimals:!1,allowDuplicatedCategory:rt.allowDuplicatedCategory,dataKey:void 0,domain:void 0,id:rt.radiusAxisId,includeHidden:!1,name:void 0,reversed:!1,scale:rt.scale,tick:rt.tick,tickCount:rt.tickCount,ticks:void 0,type:rt.type,unit:void 0},zS={allowDataOverflow:!1,allowDecimals:!1,allowDuplicatedCategory:Ht.allowDuplicatedCategory,dataKey:void 0,domain:void 0,id:Ht.angleAxisId,includeHidden:!1,name:void 0,reversed:!1,scale:Ht.scale,tick:Ht.tick,tickCount:void 0,ticks:void 0,type:"number",unit:void 0},YS={allowDataOverflow:rt.allowDataOverflow,allowDecimals:!1,allowDuplicatedCategory:rt.allowDuplicatedCategory,dataKey:void 0,domain:void 0,id:rt.radiusAxisId,includeHidden:!1,name:void 0,reversed:!1,scale:rt.scale,tick:rt.tick,tickCount:rt.tickCount,ticks:void 0,type:"category",unit:void 0},Yc=(e,t)=>e.polarAxis.angleAxis[t]!=null?e.polarAxis.angleAxis[t]:e.layout.layoutType==="radial"?zS:FS,Gc=(e,t)=>e.polarAxis.radiusAxis[t]!=null?e.polarAxis.radiusAxis[t]:e.layout.layoutType==="radial"?YS:HS,ji=e=>e.polarOptions,qc=j([tn,nn,_e],FI),Cf=j([ji,qc],(e,t)=>{if(e!=null)return St(e.innerRadius,t,0)}),Ef=j([ji,qc],(e,t)=>{if(e!=null)return St(e.outerRadius,t,t*.8)}),GS=e=>{if(e==null)return[0,0];var{startAngle:t,endAngle:n}=e;return[t,n]},Mf=j([ji],GS);j([Yc,Mf],Ni);var $f=j([qc,Cf,Ef],(e,t,n)=>{if(!(e==null||t==null||n==null))return[t,n]});j([Gc,$f],Ni);var Df=j([ae,ji,Cf,Ef,tn,nn],(e,t,n,r,a,o)=>{if(!(e!=="centric"&&e!=="radial"||t==null||n==null||r==null)){var{cx:i,cy:s,startAngle:l,endAngle:c}=t;return{cx:St(i,a,a/2),cy:St(s,o,o/2),innerRadius:n,outerRadius:r,startAngle:l,endAngle:c,clockWise:!1}}}),Oe=(e,t)=>t,Oi=(e,t,n)=>n;function Uc(e){return e==null?void 0:e.id}function Bf(e,t,n){var{chartData:r=[]}=t,{allowDuplicatedCategory:a,dataKey:o}=n,i=new Map;return e.forEach(s=>{var l,c=(l=s.data)!==null&&l!==void 0?l:r;if(!(c==null||c.length===0)){var u=Uc(s);c.forEach((h,m)=>{var p=o==null||a?m:String(Ae(h,o,null)),y=Ae(h,s.dataKey,0),f;i.has(p)?f=i.get(p):f={},Object.assign(f,{[u]:y}),i.set(p,f)})}}),Array.from(i.values())}function Ci(e){return"stackId"in e&&e.stackId!=null&&e.dataKey!=null}var Ei=(e,t)=>e===t?!0:e==null||t==null?!1:e[0]===t[0]&&e[1]===t[1];function Mi(e,t){return Array.isArray(e)&&Array.isArray(t)&&e.length===0&&t.length===0?!0:e===t}function qS(e,t){if(e.length===t.length){for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return!1}var Ce=e=>{var t=ae(e);return t==="horizontal"?"xAxis":t==="vertical"?"yAxis":t==="centric"?"angleAxis":"radiusAxis"},yr=e=>e.tooltip.settings.axisId;function Jh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Oo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Jh(Object(n),!0).forEach(function(r){US(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Jh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function US(e,t,n){return(t=KS(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function KS(e){var t=VS(e,"string");return typeof t=="symbol"?t:t+""}function VS(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var vl=[0,"auto"],De={allowDataOverflow:!1,allowDecimals:!0,allowDuplicatedCategory:!0,angle:0,dataKey:void 0,domain:void 0,height:30,hide:!0,id:0,includeHidden:!1,interval:"preserveEnd",minTickGap:5,mirror:!1,name:void 0,orientation:"bottom",padding:{left:0,right:0},reversed:!1,scale:"auto",tick:!0,tickCount:5,tickFormatter:void 0,ticks:void 0,type:"category",unit:void 0},Rf=(e,t)=>e.cartesianAxis.xAxis[t],on=(e,t)=>{var n=Rf(e,t);return n??De},Be={allowDataOverflow:!1,allowDecimals:!0,allowDuplicatedCategory:!0,angle:0,dataKey:void 0,domain:vl,hide:!0,id:0,includeHidden:!1,interval:"preserveEnd",minTickGap:5,mirror:!1,name:void 0,orientation:"left",padding:{top:0,bottom:0},reversed:!1,scale:"auto",tick:!0,tickCount:5,tickFormatter:void 0,ticks:void 0,type:"number",unit:void 0,width:ia},_f=(e,t)=>e.cartesianAxis.yAxis[t],sn=(e,t)=>{var n=_f(e,t);return n??Be},JS={domain:[0,"auto"],includeHidden:!1,reversed:!1,allowDataOverflow:!1,allowDuplicatedCategory:!1,dataKey:void 0,id:0,name:"",range:[64,64],scale:"auto",type:"number",unit:""},Kc=(e,t)=>{var n=e.cartesianAxis.zAxis[t];return n??JS},Xe=(e,t,n)=>{switch(t){case"xAxis":return on(e,n);case"yAxis":return sn(e,n);case"zAxis":return Kc(e,n);case"angleAxis":return Yc(e,n);case"radiusAxis":return Gc(e,n);default:throw new Error("Unexpected axis type: ".concat(t))}},ZS=(e,t,n)=>{switch(t){case"xAxis":return on(e,n);case"yAxis":return sn(e,n);default:throw new Error("Unexpected axis type: ".concat(t))}},ha=(e,t,n)=>{switch(t){case"xAxis":return on(e,n);case"yAxis":return sn(e,n);case"angleAxis":return Yc(e,n);case"radiusAxis":return Gc(e,n);default:throw new Error("Unexpected axis type: ".concat(t))}},Wf=e=>e.graphicalItems.cartesianItems.some(t=>t.type==="bar")||e.graphicalItems.polarItems.some(t=>t.type==="radialBar");function Lf(e,t){return n=>{switch(e){case"xAxis":return"xAxisId"in n&&n.xAxisId===t;case"yAxis":return"yAxisId"in n&&n.yAxisId===t;case"zAxis":return"zAxisId"in n&&n.zAxisId===t;case"angleAxis":return"angleAxisId"in n&&n.angleAxisId===t;case"radiusAxis":return"radiusAxisId"in n&&n.radiusAxisId===t;default:return!1}}}var $i=e=>e.graphicalItems.cartesianItems,XS=j([Oe,Oi],Lf),Ff=(e,t,n)=>e.filter(n).filter(r=>(t==null?void 0:t.includeHidden)===!0?!0:!r.hide),ma=j([$i,Xe,XS],Ff,{memoizeOptions:{resultEqualityCheck:Mi}}),Hf=j([ma],e=>e.filter(t=>t.type==="area"||t.type==="bar").filter(Ci)),zf=e=>e.filter(t=>!("stackId"in t)||t.stackId===void 0),QS=j([ma],zf),Yf=e=>e.map(t=>t.data).filter(Boolean).flat(1),eP=j([ma],Yf,{memoizeOptions:{resultEqualityCheck:Mi}}),Gf=(e,t)=>{var{chartData:n=[],dataStartIndex:r,dataEndIndex:a}=t;return e.length>0?e:n.slice(r,a+1)},Vc=j([eP,_c],Gf),qf=(e,t,n)=>(t==null?void 0:t.dataKey)!=null?e.map(r=>({value:Ae(r,t.dataKey)})):n.length>0?n.map(r=>r.dataKey).flatMap(r=>e.map(a=>({value:Ae(a,r)}))):e.map(r=>({value:r})),Di=j([Vc,Xe,ma],qf);function Uf(e,t){switch(e){case"xAxis":return t.direction==="x";case"yAxis":return t.direction==="y";default:return!1}}function Ja(e){if(Rt(e)||e instanceof Date){var t=Number(e);if(ve(t))return t}}function Zh(e){if(Array.isArray(e)){var t=[Ja(e[0]),Ja(e[1])];return gn(t)?t:void 0}var n=Ja(e);if(n!=null)return[n,n]}function Qt(e){return e.map(Ja).filter(Tx)}function tP(e,t,n){return!n||typeof t!="number"||At(t)?[]:n.length?Qt(n.flatMap(r=>{var a=Ae(e,r.dataKey),o,i;if(Array.isArray(a)?[o,i]=a:o=i=a,!(!ve(o)||!ve(i)))return[t-o,t+i]})):[]}var Ee=e=>{var t=Ce(e),n=yr(e);return ha(e,t,n)},pa=j([Ee],e=>e==null?void 0:e.dataKey),nP=j([Hf,_c,Ee],Bf),Kf=(e,t,n,r)=>{var a={},o=t.reduce((i,s)=>{if(s.stackId==null)return i;var l=i[s.stackId];return l==null&&(l=[]),l.push(s),i[s.stackId]=l,i},a);return Object.fromEntries(Object.entries(o).map(i=>{var[s,l]=i,c=r?[...l].reverse():l,u=c.map(Uc);return[s,{stackedData:ET(e,u,n),graphicalItems:c}]}))},bl=j([nP,Hf,Pi,jf],Kf),Vf=(e,t,n,r)=>{var{dataStartIndex:a,dataEndIndex:o}=t;if(r==null&&n!=="zAxis"){var i=RT(e,a,o);if(!(i!=null&&i[0]===0&&i[1]===0))return i}},rP=j([Xe],e=>e.allowDataOverflow),Jc=e=>{var t;if(e==null||!("domain"in e))return vl;if(e.domain!=null)return e.domain;if("ticks"in e&&e.ticks!=null){if(e.type==="number"){var n=Qt(e.ticks);return[Math.min(...n),Math.max(...n)]}if(e.type==="category")return e.ticks.map(String)}return(t=e==null?void 0:e.domain)!==null&&t!==void 0?t:vl},Jf=j([Xe],Jc),Zf=j([Jf,rP],mf),aP=j([bl,an,Oe,Zf],Vf,{memoizeOptions:{resultEqualityCheck:Ei}}),Zc=e=>e.errorBars,oP=(e,t,n)=>e.flatMap(r=>t[r.id]).filter(Boolean).filter(r=>Uf(n,r)),Co=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var a=n.filter(Boolean);if(a.length!==0){var o=a.flat(),i=Math.min(...o),s=Math.max(...o);return[i,s]}},Xf=(e,t,n,r,a)=>{var o,i;if(n.length>0&&e.forEach(s=>{n.forEach(l=>{var c,u,h=(c=r[l.id])===null||c===void 0?void 0:c.filter(b=>Uf(a,b)),m=Ae(s,(u=t.dataKey)!==null&&u!==void 0?u:l.dataKey),p=tP(s,m,h);if(p.length>=2){var y=Math.min(...p),f=Math.max(...p);(o==null||y<o)&&(o=y),(i==null||f>i)&&(i=f)}var v=Zh(m);v!=null&&(o=o==null?v[0]:Math.min(o,v[0]),i=i==null?v[1]:Math.max(i,v[1]))})}),(t==null?void 0:t.dataKey)!=null&&e.forEach(s=>{var l=Zh(Ae(s,t.dataKey));l!=null&&(o=o==null?l[0]:Math.min(o,l[0]),i=i==null?l[1]:Math.max(i,l[1]))}),ve(o)&&ve(i))return[o,i]},iP=j([Vc,Xe,QS,Zc,Oe],Xf,{memoizeOptions:{resultEqualityCheck:Ei}});function sP(e){var{value:t}=e;if(Rt(t)||t instanceof Date)return t}var lP=(e,t,n)=>{var r=e.map(sP).filter(a=>a!=null);return n&&(t.dataKey==null||t.allowDuplicatedCategory&&Up(r))?Oy(0,e.length):t.allowDuplicatedCategory?r:Array.from(new Set(r))},Qf=e=>e.referenceElements.dots,fr=(e,t,n)=>e.filter(r=>r.ifOverflow==="extendDomain").filter(r=>t==="xAxis"?r.xAxisId===n:r.yAxisId===n),cP=j([Qf,Oe,Oi],fr),ev=e=>e.referenceElements.areas,uP=j([ev,Oe,Oi],fr),tv=e=>e.referenceElements.lines,dP=j([tv,Oe,Oi],fr),nv=(e,t)=>{if(e!=null){var n=Qt(e.map(r=>t==="xAxis"?r.x:r.y));if(n.length!==0)return[Math.min(...n),Math.max(...n)]}},hP=j(cP,Oe,nv),rv=(e,t)=>{if(e!=null){var n=Qt(e.flatMap(r=>[t==="xAxis"?r.x1:r.y1,t==="xAxis"?r.x2:r.y2]));if(n.length!==0)return[Math.min(...n),Math.max(...n)]}},mP=j([uP,Oe],rv);function pP(e){var t;if(e.x!=null)return Qt([e.x]);var n=(t=e.segment)===null||t===void 0?void 0:t.map(r=>r.x);return n==null||n.length===0?[]:Qt(n)}function gP(e){var t;if(e.y!=null)return Qt([e.y]);var n=(t=e.segment)===null||t===void 0?void 0:t.map(r=>r.y);return n==null||n.length===0?[]:Qt(n)}var av=(e,t)=>{if(e!=null){var n=e.flatMap(r=>t==="xAxis"?pP(r):gP(r));if(n.length!==0)return[Math.min(...n),Math.max(...n)]}},yP=j([dP,Oe],av),fP=j(hP,yP,mP,(e,t,n)=>Co(e,n,t)),ov=(e,t,n,r,a,o,i,s)=>{if(n!=null)return n;var l=i==="vertical"&&s==="xAxis"||i==="horizontal"&&s==="yAxis",c=l?Co(r,o,a):Co(o,a);return NS(t,c,e.allowDataOverflow)},vP=j([Xe,Jf,Zf,aP,iP,fP,ae,Oe],ov,{memoizeOptions:{resultEqualityCheck:Ei}}),bP=[0,1],iv=(e,t,n,r,a,o,i)=>{if(!((e==null||n==null||n.length===0)&&i===void 0)){var{dataKey:s,type:l}=e,c=vn(t,o);if(c&&s==null){var u;return Oy(0,(u=n==null?void 0:n.length)!==null&&u!==void 0?u:0)}return l==="category"?lP(r,e,c):a==="expand"?bP:i}},Xc=j([Xe,ae,Vc,Di,Pi,Oe,vP],iv),sv=(e,t,n,r,a)=>{if(e!=null){var{scale:o,type:i}=e;if(o==="auto")return t==="radial"&&a==="radiusAxis"?"band":t==="radial"&&a==="angleAxis"?"linear":i==="category"&&r&&(r.indexOf("LineChart")>=0||r.indexOf("AreaChart")>=0||r.indexOf("ComposedChart")>=0&&!n)?"point":i==="category"?"band":"linear";if(typeof o=="string"){var s="scale".concat(ta(o));return s in Er?s:"point"}}},ga=j([Xe,ae,Wf,Fc,Oe],sv);function wP(e){if(e!=null){if(e in Er)return Er[e]();var t="scale".concat(ta(e));if(t in Er)return Er[t]()}}function Qc(e,t,n,r){if(!(n==null||r==null)){if(typeof e.scale=="function")return e.scale.copy().domain(n).range(r);var a=wP(t);if(a!=null){var o=a.domain(n).range(r);return PT(o),o}}}var lv=(e,t,n)=>{var r=Jc(t);if(!(n!=="auto"&&n!=="linear")){if(t!=null&&t.tickCount&&Array.isArray(r)&&(r[0]==="auto"||r[1]==="auto")&&gn(e))return RS(e,t.tickCount,t.allowDecimals);if(t!=null&&t.tickCount&&t.type==="number"&&gn(e))return _S(e,t.tickCount,t.allowDecimals)}},eu=j([Xc,ha,ga],lv),cv=(e,t,n,r)=>{if(r!=="angleAxis"&&(e==null?void 0:e.type)==="number"&&gn(t)&&Array.isArray(n)&&n.length>0){var a=t[0],o=n[0],i=t[1],s=n[n.length-1];return[Math.min(a,o),Math.max(i,s)]}return t},xP=j([Xe,Xc,eu,Oe],cv),kP=j(Di,Xe,(e,t)=>{if(!(!t||t.type!=="number")){var n=1/0,r=Array.from(Qt(e.map(h=>h.value))).sort((h,m)=>h-m),a=r[0],o=r[r.length-1];if(a==null||o==null)return 1/0;var i=o-a;if(i===0)return 1/0;for(var s=0;s<r.length-1;s++){var l=r[s],c=r[s+1];if(!(l==null||c==null)){var u=c-l;n=Math.min(n,u)}}return n/i}}),uv=j(kP,ae,Nf,_e,(e,t,n,r,a)=>a,(e,t,n,r,a)=>{if(!ve(e))return 0;var o=t==="vertical"?r.height:r.width;if(a==="gap")return e*o/2;if(a==="no-gap"){var i=St(n,e*o),s=e*o/2;return s-i-(s-i)/o*i}return 0}),TP=(e,t,n)=>{var r=on(e,t);return r==null||typeof r.padding!="string"?0:uv(e,"xAxis",t,n,r.padding)},IP=(e,t,n)=>{var r=sn(e,t);return r==null||typeof r.padding!="string"?0:uv(e,"yAxis",t,n,r.padding)},AP=j(on,TP,(e,t)=>{var n,r;if(e==null)return{left:0,right:0};var{padding:a}=e;return typeof a=="string"?{left:t,right:t}:{left:((n=a.left)!==null&&n!==void 0?n:0)+t,right:((r=a.right)!==null&&r!==void 0?r:0)+t}}),SP=j(sn,IP,(e,t)=>{var n,r;if(e==null)return{top:0,bottom:0};var{padding:a}=e;return typeof a=="string"?{top:t,bottom:t}:{top:((n=a.top)!==null&&n!==void 0?n:0)+t,bottom:((r=a.bottom)!==null&&r!==void 0?r:0)+t}}),PP=j([_e,AP,hi,di,(e,t,n)=>n],(e,t,n,r,a)=>{var{padding:o}=r;return a?[o.left,n.width-o.right]:[e.left+t.left,e.left+e.width-t.right]}),NP=j([_e,ae,SP,hi,di,(e,t,n)=>n],(e,t,n,r,a,o)=>{var{padding:i}=a;return o?[r.height-i.bottom,i.top]:t==="horizontal"?[e.top+e.height-n.bottom,e.top+n.top]:[e.top+n.top,e.top+e.height-n.bottom]}),ya=(e,t,n,r)=>{var a;switch(t){case"xAxis":return PP(e,n,r);case"yAxis":return NP(e,n,r);case"zAxis":return(a=Kc(e,n))===null||a===void 0?void 0:a.range;case"angleAxis":return Mf(e);case"radiusAxis":return $f(e,n);default:return}},dv=j([Xe,ya],Ni),Bi=j([Xe,ga,xP,dv],Qc);j([ma,Zc,Oe],oP);function hv(e,t){return e.id<t.id?-1:e.id>t.id?1:0}var Ri=(e,t)=>t,_i=(e,t,n)=>n,jP=j(ci,Ri,_i,(e,t,n)=>e.filter(r=>r.orientation===t).filter(r=>r.mirror===n).sort(hv)),OP=j(ui,Ri,_i,(e,t,n)=>e.filter(r=>r.orientation===t).filter(r=>r.mirror===n).sort(hv)),mv=(e,t)=>({width:e.width,height:t.height}),CP=(e,t)=>{var n=typeof t.width=="number"?t.width:ia;return{width:n,height:e.height}},pv=j(_e,on,mv),EP=(e,t,n)=>{switch(t){case"top":return e.top;case"bottom":return n-e.bottom;default:return 0}},MP=(e,t,n)=>{switch(t){case"left":return e.left;case"right":return n-e.right;default:return 0}},$P=j(nn,_e,jP,Ri,_i,(e,t,n,r,a)=>{var o={},i;return n.forEach(s=>{var l=mv(t,s);i==null&&(i=EP(t,r,e));var c=r==="top"&&!a||r==="bottom"&&a;o[s.id]=i-Number(c)*l.height,i+=(c?-1:1)*l.height}),o}),DP=j(tn,_e,OP,Ri,_i,(e,t,n,r,a)=>{var o={},i;return n.forEach(s=>{var l=CP(t,s);i==null&&(i=MP(t,r,e));var c=r==="left"&&!a||r==="right"&&a;o[s.id]=i-Number(c)*l.width,i+=(c?-1:1)*l.width}),o}),BP=(e,t)=>{var n=on(e,t);if(n!=null)return $P(e,n.orientation,n.mirror)},RP=j([_e,on,BP,(e,t)=>t],(e,t,n,r)=>{if(t!=null){var a=n==null?void 0:n[r];return a==null?{x:e.left,y:0}:{x:e.left,y:a}}}),_P=(e,t)=>{var n=sn(e,t);if(n!=null)return DP(e,n.orientation,n.mirror)},WP=j([_e,sn,_P,(e,t)=>t],(e,t,n,r)=>{if(t!=null){var a=n==null?void 0:n[r];return a==null?{x:0,y:e.top}:{x:a,y:e.top}}}),gv=j(_e,sn,(e,t)=>{var n=typeof t.width=="number"?t.width:ia;return{width:n,height:e.height}}),Xh=(e,t,n)=>{switch(t){case"xAxis":return pv(e,n).width;case"yAxis":return gv(e,n).height;default:return}},yv=(e,t,n,r)=>{if(n!=null){var{allowDuplicatedCategory:a,type:o,dataKey:i}=n,s=vn(e,r),l=t.map(c=>c.value);if(i&&s&&o==="category"&&a&&Up(l))return l}},tu=j([ae,Di,Xe,Oe],yv),fv=(e,t,n,r)=>{if(!(n==null||n.dataKey==null)){var{type:a,scale:o}=n,i=vn(e,r);if(i&&(a==="number"||o!=="auto"))return t.map(s=>s.value)}},nu=j([ae,Di,ha,Oe],fv),YD=j([ae,ZS,ga,Bi,tu,nu,ya,eu,Oe],(e,t,n,r,a,o,i,s,l)=>{if(t!=null){var c=vn(e,l);return{angle:t.angle,interval:t.interval,minTickGap:t.minTickGap,orientation:t.orientation,tick:t.tick,tickCount:t.tickCount,tickFormatter:t.tickFormatter,ticks:t.ticks,type:t.type,unit:t.unit,axisType:l,categoricalDomain:o,duplicateDomain:a,isCategorical:c,niceTicks:s,range:i,realScaleType:n,scale:r}}}),LP=(e,t,n,r,a,o,i,s,l)=>{if(!(t==null||r==null)){var c=vn(e,l),{type:u,ticks:h,tickCount:m}=t,p=n==="scaleBand"&&typeof r.bandwidth=="function"?r.bandwidth()/2:2,y=u==="category"&&r.bandwidth?r.bandwidth()/p:0;y=l==="angleAxis"&&o!=null&&o.length>=2?Qe(o[0]-o[1])*2*y:y;var f=h||a;if(f){var v=f.map((b,w)=>{var x=i?i.indexOf(b):b;return{index:w,coordinate:r(x)+y,value:b,offset:y}});return v.filter(b=>ve(b.coordinate))}return c&&s?s.map((b,w)=>({coordinate:r(b)+y,value:b,index:w,offset:y})).filter(b=>ve(b.coordinate)):r.ticks?r.ticks(m).map(b=>({coordinate:r(b)+y,value:b,offset:y})):r.domain().map((b,w)=>({coordinate:r(b)+y,value:i?i[b]:b,index:w,offset:y}))}},vv=j([ae,ha,ga,Bi,eu,ya,tu,nu,Oe],LP),FP=(e,t,n,r,a,o,i)=>{if(!(t==null||n==null||r==null||r[0]===r[1])){var s=vn(e,i),{tickCount:l}=t,c=0;return c=i==="angleAxis"&&(r==null?void 0:r.length)>=2?Qe(r[0]-r[1])*2*c:c,s&&o?o.map((u,h)=>({coordinate:n(u)+c,value:u,index:h,offset:c})):n.ticks?n.ticks(l).map(u=>({coordinate:n(u)+c,value:u,offset:c})):n.domain().map((u,h)=>({coordinate:n(u)+c,value:a?a[u]:u,index:h,offset:c}))}},yn=j([ae,ha,Bi,ya,tu,nu,Oe],FP),fn=j(Xe,Bi,(e,t)=>{if(!(e==null||t==null))return Oo(Oo({},e),{},{scale:t})}),HP=j([Xe,ga,Xc,dv],Qc);j((e,t,n)=>Kc(e,n),HP,(e,t)=>{if(!(e==null||t==null))return Oo(Oo({},e),{},{scale:t})});var zP=j([ae,ci,ui],(e,t,n)=>{switch(e){case"horizontal":return t.some(r=>r.reversed)?"right-to-left":"left-to-right";case"vertical":return n.some(r=>r.reversed)?"bottom-to-top":"top-to-bottom";case"centric":case"radial":return"left-to-right";default:return}}),bv=e=>e.options.defaultTooltipEventType,wv=e=>e.options.validateTooltipEventTypes;function xv(e,t,n){if(e==null)return t;var r=e?"axis":"item";return n==null?t:n.includes(r)?r:t}function ru(e,t){var n=bv(e),r=wv(e);return xv(t,n,r)}function YP(e){return V(t=>ru(t,e))}var kv=(e,t)=>{var n,r=Number(t);if(!(At(r)||t==null))return r>=0?e==null||(n=e[r])===null||n===void 0?void 0:n.value:void 0},GP=e=>e.tooltip.settings,dn={active:!1,index:null,dataKey:void 0,graphicalItemId:void 0,coordinate:void 0},qP={itemInteraction:{click:dn,hover:dn},axisInteraction:{click:dn,hover:dn},keyboardInteraction:dn,syncInteraction:{active:!1,index:null,dataKey:void 0,label:void 0,coordinate:void 0,sourceViewBox:void 0,graphicalItemId:void 0},tooltipItemPayloads:[],settings:{shared:void 0,trigger:"hover",axisId:0,active:!1,defaultIndex:void 0}},Tv=nt({name:"tooltip",initialState:qP,reducers:{addTooltipEntrySettings:{reducer(e,t){e.tooltipItemPayloads.push(t.payload)},prepare:ge()},replaceTooltipEntrySettings:{reducer(e,t){var{prev:n,next:r}=t.payload,a=It(e).tooltipItemPayloads.indexOf(n);a>-1&&(e.tooltipItemPayloads[a]=r)},prepare:ge()},removeTooltipEntrySettings:{reducer(e,t){var n=It(e).tooltipItemPayloads.indexOf(t.payload);n>-1&&e.tooltipItemPayloads.splice(n,1)},prepare:ge()},setTooltipSettingsState(e,t){e.settings=t.payload},setActiveMouseOverItemIndex(e,t){e.syncInteraction.active=!1,e.keyboardInteraction.active=!1,e.itemInteraction.hover.active=!0,e.itemInteraction.hover.index=t.payload.activeIndex,e.itemInteraction.hover.dataKey=t.payload.activeDataKey,e.itemInteraction.hover.graphicalItemId=t.payload.activeGraphicalItemId,e.itemInteraction.hover.coordinate=t.payload.activeCoordinate},mouseLeaveChart(e){e.itemInteraction.hover.active=!1,e.axisInteraction.hover.active=!1},mouseLeaveItem(e){e.itemInteraction.hover.active=!1},setActiveClickItemIndex(e,t){e.syncInteraction.active=!1,e.itemInteraction.click.active=!0,e.keyboardInteraction.active=!1,e.itemInteraction.click.index=t.payload.activeIndex,e.itemInteraction.click.dataKey=t.payload.activeDataKey,e.itemInteraction.click.graphicalItemId=t.payload.activeGraphicalItemId,e.itemInteraction.click.coordinate=t.payload.activeCoordinate},setMouseOverAxisIndex(e,t){e.syncInteraction.active=!1,e.axisInteraction.hover.active=!0,e.keyboardInteraction.active=!1,e.axisInteraction.hover.index=t.payload.activeIndex,e.axisInteraction.hover.dataKey=t.payload.activeDataKey,e.axisInteraction.hover.coordinate=t.payload.activeCoordinate},setMouseClickAxisIndex(e,t){e.syncInteraction.active=!1,e.keyboardInteraction.active=!1,e.axisInteraction.click.active=!0,e.axisInteraction.click.index=t.payload.activeIndex,e.axisInteraction.click.dataKey=t.payload.activeDataKey,e.axisInteraction.click.coordinate=t.payload.activeCoordinate},setSyncInteraction(e,t){e.syncInteraction=t.payload},setKeyboardInteraction(e,t){e.keyboardInteraction.active=t.payload.active,e.keyboardInteraction.index=t.payload.activeIndex,e.keyboardInteraction.coordinate=t.payload.activeCoordinate}}}),{addTooltipEntrySettings:UP,replaceTooltipEntrySettings:KP,removeTooltipEntrySettings:VP,setTooltipSettingsState:JP,setActiveMouseOverItemIndex:Iv,mouseLeaveItem:ZP,mouseLeaveChart:Av,setActiveClickItemIndex:XP,setMouseOverAxisIndex:Sv,setMouseClickAxisIndex:QP,setSyncInteraction:wl,setKeyboardInteraction:xl}=Tv.actions,eN=Tv.reducer;function Qh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Wa(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Qh(Object(n),!0).forEach(function(r){tN(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function tN(e,t,n){return(t=nN(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function nN(e){var t=rN(e,"string");return typeof t=="symbol"?t:t+""}function rN(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function aN(e,t,n){return t==="axis"?n==="click"?e.axisInteraction.click:e.axisInteraction.hover:n==="click"?e.itemInteraction.click:e.itemInteraction.hover}function oN(e){return e.index!=null}var Pv=(e,t,n,r)=>{if(t==null)return dn;var a=aN(e,t,n);if(a==null)return dn;if(a.active)return a;if(e.keyboardInteraction.active)return e.keyboardInteraction;if(e.syncInteraction.active&&e.syncInteraction.index!=null)return e.syncInteraction;var o=e.settings.active===!0;if(oN(a)){if(o)return Wa(Wa({},a),{},{active:!0})}else if(r!=null)return{active:!0,coordinate:void 0,dataKey:void 0,index:r,graphicalItemId:void 0};return Wa(Wa({},dn),{},{coordinate:a.coordinate})};function iN(e){if(typeof e=="number")return Number.isFinite(e)?e:void 0;if(e instanceof Date){var t=e.valueOf();return Number.isFinite(t)?t:void 0}var n=Number(e);return Number.isFinite(n)?n:void 0}function sN(e,t){var n=iN(e),r=t[0],a=t[1];if(n===void 0)return!1;var o=Math.min(r,a),i=Math.max(r,a);return n>=o&&n<=i}function lN(e,t,n){if(n==null||t==null)return!0;var r=Ae(e,t);return r==null||!gn(n)?!0:sN(r,n)}var au=(e,t,n,r)=>{var a=e==null?void 0:e.index;if(a==null)return null;var o=Number(a);if(!ve(o))return a;var i=0,s=1/0;t.length>0&&(s=t.length-1);var l=Math.max(i,Math.min(o,s)),c=t[l];return c==null||lN(c,n,r)?String(l):null},Nv=(e,t,n,r,a,o,i,s)=>{if(!(o==null||s==null)){var l=i[0],c=l==null?void 0:s(l.positions,o);if(c!=null)return c;var u=a==null?void 0:a[Number(o)];if(u)switch(n){case"horizontal":return{x:u.coordinate,y:(r.top+t)/2};default:return{x:(r.left+e)/2,y:u.coordinate}}}},jv=(e,t,n,r)=>{if(t==="axis")return e.tooltipItemPayloads;if(e.tooltipItemPayloads.length===0)return[];var a;if(n==="hover"?a=e.itemInteraction.hover.graphicalItemId:a=e.itemInteraction.click.graphicalItemId,a==null&&r!=null){var o=e.tooltipItemPayloads[0];return o!=null?[o]:[]}return e.tooltipItemPayloads.filter(i=>{var s;return((s=i.settings)===null||s===void 0?void 0:s.graphicalItemId)===a})},fa=e=>e.options.tooltipPayloadSearcher,vr=e=>e.tooltip;function em(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function tm(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?em(Object(n),!0).forEach(function(r){cN(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):em(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function cN(e,t,n){return(t=uN(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function uN(e){var t=dN(e,"string");return typeof t=="symbol"?t:t+""}function dN(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function hN(e,t){return e??t}var Ov=(e,t,n,r,a,o,i)=>{if(!(t==null||o==null)){var{chartData:s,computedData:l,dataStartIndex:c,dataEndIndex:u}=n,h=[];return e.reduce((m,p)=>{var y,{dataDefinedOnItem:f,settings:v}=p,b=hN(f,s),w=Array.isArray(b)?ty(b,c,u):b,x=(y=v==null?void 0:v.dataKey)!==null&&y!==void 0?y:r,T=v==null?void 0:v.nameKey,k;if(r&&Array.isArray(w)&&!Array.isArray(w[0])&&i==="axis"?k=Kp(w,r,a):k=o(w,t,l,T),Array.isArray(k))k.forEach(C=>{var O=tm(tm({},v),{},{name:C.name,unit:C.unit,color:void 0,fill:void 0});m.push(pd({tooltipEntrySettings:O,dataKey:C.dataKey,payload:C.payload,value:Ae(C.payload,C.dataKey),name:C.name}))});else{var I;m.push(pd({tooltipEntrySettings:v,dataKey:x,payload:k,value:Ae(k,x),name:(I=Ae(k,T))!==null&&I!==void 0?I:v==null?void 0:v.name}))}return m},h)}},ou=j([Ee,ae,Wf,Fc,Ce],sv),mN=j([e=>e.graphicalItems.cartesianItems,e=>e.graphicalItems.polarItems],(e,t)=>[...e,...t]),pN=j([Ce,yr],Lf),br=j([mN,Ee,pN],Ff,{memoizeOptions:{resultEqualityCheck:Mi}}),gN=j([br],e=>e.filter(Ci)),yN=j([br],Yf,{memoizeOptions:{resultEqualityCheck:Mi}}),wr=j([yN,an],Gf),fN=j([gN,an,Ee],Bf),iu=j([wr,Ee,br],qf),Cv=j([Ee],Jc),vN=j([Ee],e=>e.allowDataOverflow),Ev=j([Cv,vN],mf),bN=j([br],e=>e.filter(Ci)),wN=j([fN,bN,Pi,jf],Kf),xN=j([wN,an,Ce,Ev],Vf),kN=j([br],zf),TN=j([wr,Ee,kN,Zc,Ce],Xf,{memoizeOptions:{resultEqualityCheck:Ei}}),IN=j([Qf,Ce,yr],fr),AN=j([IN,Ce],nv),SN=j([ev,Ce,yr],fr),PN=j([SN,Ce],rv),NN=j([tv,Ce,yr],fr),jN=j([NN,Ce],av),ON=j([AN,jN,PN],Co),CN=j([Ee,Cv,Ev,xN,TN,ON,ae,Ce],ov),va=j([Ee,ae,wr,iu,Pi,Ce,CN],iv),EN=j([va,Ee,ou],lv),MN=j([Ee,va,EN,Ce],cv),Mv=e=>{var t=Ce(e),n=yr(e),r=!1;return ya(e,t,n,r)},$v=j([Ee,Mv],Ni),Dv=j([Ee,ou,MN,$v],Qc),$N=j([ae,iu,Ee,Ce],yv),DN=j([ae,iu,Ee,Ce],fv),BN=(e,t,n,r,a,o,i,s)=>{if(t){var{type:l}=t,c=vn(e,s);if(r){var u=n==="scaleBand"&&r.bandwidth?r.bandwidth()/2:2,h=l==="category"&&r.bandwidth?r.bandwidth()/u:0;return h=s==="angleAxis"&&a!=null&&(a==null?void 0:a.length)>=2?Qe(a[0]-a[1])*2*h:h,c&&i?i.map((m,p)=>({coordinate:r(m)+h,value:m,index:p,offset:h})):r.domain().map((m,p)=>({coordinate:r(m)+h,value:o?o[m]:m,index:p,offset:h}))}}},ln=j([ae,Ee,ou,Dv,Mv,$N,DN,Ce],BN),su=j([bv,wv,GP],(e,t,n)=>xv(n.shared,e,t)),Bv=e=>e.tooltip.settings.trigger,lu=e=>e.tooltip.settings.defaultIndex,ba=j([vr,su,Bv,lu],Pv),Rn=j([ba,wr,pa,va],au),Rv=j([ln,Rn],kv),_v=j([ba],e=>{if(e)return e.dataKey});j([ba],e=>{if(e)return e.graphicalItemId});var Wv=j([vr,su,Bv,lu],jv),RN=j([tn,nn,ae,_e,ln,lu,Wv,fa],Nv),_N=j([ba,RN],(e,t)=>e!=null&&e.coordinate?e.coordinate:t),WN=j([ba],e=>{var t;return(t=e==null?void 0:e.active)!==null&&t!==void 0?t:!1}),LN=j([Wv,Rn,an,pa,Rv,fa,su],Ov),FN=j([LN],e=>{if(e!=null){var t=e.map(n=>n.payload).filter(n=>n!=null);return Array.from(new Set(t))}});function nm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function rm(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?nm(Object(n),!0).forEach(function(r){HN(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):nm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function HN(e,t,n){return(t=zN(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function zN(e){var t=YN(e,"string");return typeof t=="symbol"?t:t+""}function YN(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var GN=()=>V(Ee),qN=()=>{var e=GN(),t=V(ln),n=V(Dv);return lr(!e||!n?void 0:rm(rm({},e),{},{scale:n}),t)};function am(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Un(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?am(Object(n),!0).forEach(function(r){UN(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):am(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function UN(e,t,n){return(t=KN(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function KN(e){var t=VN(e,"string");return typeof t=="symbol"?t:t+""}function VN(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var JN=(e,t,n,r)=>{var a=t.find(o=>o&&o.index===n);if(a){if(e==="horizontal")return{x:a.coordinate,y:r.chartY};if(e==="vertical")return{x:r.chartX,y:a.coordinate}}return{x:0,y:0}},ZN=(e,t,n,r)=>{var a=t.find(c=>c&&c.index===n);if(a){if(e==="centric"){var o=a.coordinate,{radius:i}=r;return Un(Un(Un({},r),He(r.cx,r.cy,i,o)),{},{angle:o,radius:i})}var s=a.coordinate,{angle:l}=r;return Un(Un(Un({},r),He(r.cx,r.cy,s,l)),{},{angle:l,radius:s})}return{angle:0,clockWise:!1,cx:0,cy:0,endAngle:0,innerRadius:0,outerRadius:0,radius:0,startAngle:0,x:0,y:0}};function XN(e,t){var{chartX:n,chartY:r}=e;return n>=t.left&&n<=t.left+t.width&&r>=t.top&&r<=t.top+t.height}var Lv=(e,t,n,r,a)=>{var o,i=(o=t==null?void 0:t.length)!==null&&o!==void 0?o:0;if(i<=1||e==null)return 0;if(r==="angleAxis"&&a!=null&&Math.abs(Math.abs(a[1]-a[0])-360)<=1e-6)for(var s=0;s<i;s++){var l,c,u,h,m,p=s>0?(l=n[s-1])===null||l===void 0?void 0:l.coordinate:(c=n[i-1])===null||c===void 0?void 0:c.coordinate,y=(u=n[s])===null||u===void 0?void 0:u.coordinate,f=s>=i-1?(h=n[0])===null||h===void 0?void 0:h.coordinate:(m=n[s+1])===null||m===void 0?void 0:m.coordinate,v=void 0;if(!(p==null||y==null||f==null))if(Qe(y-p)!==Qe(f-y)){var b=[];if(Qe(f-y)===Qe(a[1]-a[0])){v=f;var w=y+a[1]-a[0];b[0]=Math.min(w,(w+p)/2),b[1]=Math.max(w,(w+p)/2)}else{v=p;var x=f+a[1]-a[0];b[0]=Math.min(y,(x+y)/2),b[1]=Math.max(y,(x+y)/2)}var T=[Math.min(y,(v+y)/2),Math.max(y,(v+y)/2)];if(e>T[0]&&e<=T[1]||e>=b[0]&&e<=b[1]){var k;return(k=n[s])===null||k===void 0?void 0:k.index}}else{var I=Math.min(p,f),C=Math.max(p,f);if(e>(I+y)/2&&e<=(C+y)/2){var O;return(O=n[s])===null||O===void 0?void 0:O.index}}}else if(t)for(var M=0;M<i;M++){var $=t[M];if($!=null){var A=t[M+1],N=t[M-1];if(M===0&&A!=null&&e<=($.coordinate+A.coordinate)/2||M===i-1&&N!=null&&e>($.coordinate+N.coordinate)/2||M>0&&M<i-1&&N!=null&&A!=null&&e>($.coordinate+N.coordinate)/2&&e<=($.coordinate+A.coordinate)/2)return $.index}}return-1},QN=()=>V(Fc),cu=(e,t)=>t,Fv=(e,t,n)=>n,uu=(e,t,n,r)=>r,ej=j(ln,e=>Qo(e,t=>t.coordinate)),du=j([vr,cu,Fv,uu],Pv),hu=j([du,wr,pa,va],au),tj=(e,t,n)=>{if(t!=null){var r=vr(e);return t==="axis"?n==="hover"?r.axisInteraction.hover.dataKey:r.axisInteraction.click.dataKey:n==="hover"?r.itemInteraction.hover.dataKey:r.itemInteraction.click.dataKey}},Hv=j([vr,cu,Fv,uu],jv),Eo=j([tn,nn,ae,_e,ln,uu,Hv,fa],Nv),nj=j([du,Eo],(e,t)=>{var n;return(n=e.coordinate)!==null&&n!==void 0?n:t}),zv=j([ln,hu],kv),rj=j([Hv,hu,an,pa,zv,fa,cu],Ov),aj=j([du,hu],(e,t)=>({isActive:e.active&&t!=null,activeIndex:t})),oj=(e,t,n,r,a,o,i)=>{if(!(!e||!n||!r||!a)&&XN(e,i)){var s=_T(e,t),l=Lv(s,o,a,n,r),c=JN(t,a,l,e);return{activeIndex:String(l),activeCoordinate:c}}},ij=(e,t,n,r,a,o,i)=>{if(!(!e||!r||!a||!o||!n)){var s=qI(e,n);if(s){var l=WT(s,t),c=Lv(l,i,o,r,a),u=ZN(t,o,c,s);return{activeIndex:String(c),activeCoordinate:u}}}},sj=(e,t,n,r,a,o,i,s)=>{if(!(!e||!t||!r||!a||!o))return t==="horizontal"||t==="vertical"?oj(e,t,r,a,o,i,s):ij(e,t,n,r,a,o,i)},lj=j(e=>e.zIndex.zIndexMap,(e,t)=>t,(e,t,n)=>n,(e,t,n)=>{if(t!=null){var r=e[t];if(r!=null)return n?r.panoramaElement:r.element}}),cj=j(e=>e.zIndex.zIndexMap,e=>{var t=Object.keys(e).map(r=>parseInt(r,10)).concat(Object.values(Ne)),n=Array.from(new Set(t));return n.sort((r,a)=>r-a)},{memoizeOptions:{resultEqualityCheck:qS}});function om(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function im(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?om(Object(n),!0).forEach(function(r){uj(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):om(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function uj(e,t,n){return(t=dj(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function dj(e){var t=hj(e,"string");return typeof t=="symbol"?t:t+""}function hj(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var mj={},pj={zIndexMap:Object.values(Ne).reduce((e,t)=>im(im({},e),{},{[t]:{element:void 0,panoramaElement:void 0,consumers:0}}),mj)},gj=new Set(Object.values(Ne));function yj(e){return gj.has(e)}var Yv=nt({name:"zIndex",initialState:pj,reducers:{registerZIndexPortal:{reducer:(e,t)=>{var{zIndex:n}=t.payload;e.zIndexMap[n]?e.zIndexMap[n].consumers+=1:e.zIndexMap[n]={consumers:1,element:void 0,panoramaElement:void 0}},prepare:ge()},unregisterZIndexPortal:{reducer:(e,t)=>{var{zIndex:n}=t.payload;e.zIndexMap[n]&&(e.zIndexMap[n].consumers-=1,e.zIndexMap[n].consumers<=0&&!yj(n)&&delete e.zIndexMap[n])},prepare:ge()},registerZIndexPortalElement:{reducer:(e,t)=>{var{zIndex:n,element:r,isPanorama:a}=t.payload;e.zIndexMap[n]?a?e.zIndexMap[n].panoramaElement=r:e.zIndexMap[n].element=r:e.zIndexMap[n]={consumers:0,element:a?void 0:r,panoramaElement:a?r:void 0}},prepare:ge()},unregisterZIndexPortalElement:{reducer:(e,t)=>{var{zIndex:n}=t.payload;e.zIndexMap[n]&&(t.payload.isPanorama?e.zIndexMap[n].panoramaElement=void 0:e.zIndexMap[n].element=void 0)},prepare:ge()}}}),{registerZIndexPortal:fj,unregisterZIndexPortal:vj,registerZIndexPortalElement:bj,unregisterZIndexPortalElement:wj}=Yv.actions,xj=Yv.reducer;function Ot(e){var{zIndex:t,children:n}=e,r=f1(),a=r&&t!==void 0&&t!==0,o=Ze(),i=ke();g.useLayoutEffect(()=>a?(i(fj({zIndex:t})),()=>{i(vj({zIndex:t}))}):na,[i,t,a]);var s=V(l=>lj(l,t,o));return a?s?$l.createPortal(n,s):null:n}function kl(){return kl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},kl.apply(null,arguments)}function sm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function La(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?sm(Object(n),!0).forEach(function(r){kj(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):sm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function kj(e,t,n){return(t=Tj(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Tj(e){var t=Ij(e,"string");return typeof t=="symbol"?t:t+""}function Ij(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Aj(e){var{cursor:t,cursorComp:n,cursorProps:r}=e;return g.isValidElement(t)?g.cloneElement(t,r):g.createElement(n,r)}function Sj(e){var t,{coordinate:n,payload:r,index:a,offset:o,tooltipAxisBandSize:i,layout:s,cursor:l,tooltipEventType:c,chartName:u}=e,h=n,m=r,p=a;if(!l||!h||u!=="ScatterChart"&&c!=="axis")return null;var y,f,v;if(u==="ScatterChart")y=h,f=oI,v=Ne.cursorLine;else if(u==="BarChart")y=iI(s,h,o,i),f=Ty,v=Ne.cursorRectangle;else if(s==="radial"&&Zp(h)){var{cx:b,cy:w,radius:x,startAngle:T,endAngle:k}=Iy(h);y={cx:b,cy:w,startAngle:T,endAngle:k,innerRadius:x,outerRadius:x},f=Sy,v=Ne.cursorLine}else y={points:JI(s,h,o)},f=vy,v=Ne.cursorLine;var I=typeof l=="object"&&"className"in l?l.className:void 0,C=La(La(La(La({stroke:"#ccc",pointerEvents:"none"},o),y),ea(l)),{},{payload:m,payloadIndex:p,className:ie("recharts-tooltip-cursor",I)});return g.createElement(Ot,{zIndex:(t=e.zIndex)!==null&&t!==void 0?t:v},g.createElement(Aj,{cursor:l,cursorComp:f,cursorProps:C}))}function Pj(e){var t=qN(),n=p1(),r=Ln(),a=QN();return t==null||n==null||r==null||a==null?null:g.createElement(Sj,kl({},e,{offset:n,layout:r,tooltipAxisBandSize:t,chartName:a}))}var Gv=g.createContext(null),Nj=()=>g.useContext(Gv),qv={exports:{}};(function(e){var t=Object.prototype.hasOwnProperty,n="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(n=!1));function a(l,c,u){this.fn=l,this.context=c,this.once=u||!1}function o(l,c,u,h,m){if(typeof u!="function")throw new TypeError("The listener must be a function");var p=new a(u,h||l,m),y=n?n+c:c;return l._events[y]?l._events[y].fn?l._events[y]=[l._events[y],p]:l._events[y].push(p):(l._events[y]=p,l._eventsCount++),l}function i(l,c){--l._eventsCount===0?l._events=new r:delete l._events[c]}function s(){this._events=new r,this._eventsCount=0}s.prototype.eventNames=function(){var c=[],u,h;if(this._eventsCount===0)return c;for(h in u=this._events)t.call(u,h)&&c.push(n?h.slice(1):h);return Object.getOwnPropertySymbols?c.concat(Object.getOwnPropertySymbols(u)):c},s.prototype.listeners=function(c){var u=n?n+c:c,h=this._events[u];if(!h)return[];if(h.fn)return[h.fn];for(var m=0,p=h.length,y=new Array(p);m<p;m++)y[m]=h[m].fn;return y},s.prototype.listenerCount=function(c){var u=n?n+c:c,h=this._events[u];return h?h.fn?1:h.length:0},s.prototype.emit=function(c,u,h,m,p,y){var f=n?n+c:c;if(!this._events[f])return!1;var v=this._events[f],b=arguments.length,w,x;if(v.fn){switch(v.once&&this.removeListener(c,v.fn,void 0,!0),b){case 1:return v.fn.call(v.context),!0;case 2:return v.fn.call(v.context,u),!0;case 3:return v.fn.call(v.context,u,h),!0;case 4:return v.fn.call(v.context,u,h,m),!0;case 5:return v.fn.call(v.context,u,h,m,p),!0;case 6:return v.fn.call(v.context,u,h,m,p,y),!0}for(x=1,w=new Array(b-1);x<b;x++)w[x-1]=arguments[x];v.fn.apply(v.context,w)}else{var T=v.length,k;for(x=0;x<T;x++)switch(v[x].once&&this.removeListener(c,v[x].fn,void 0,!0),b){case 1:v[x].fn.call(v[x].context);break;case 2:v[x].fn.call(v[x].context,u);break;case 3:v[x].fn.call(v[x].context,u,h);break;case 4:v[x].fn.call(v[x].context,u,h,m);break;default:if(!w)for(k=1,w=new Array(b-1);k<b;k++)w[k-1]=arguments[k];v[x].fn.apply(v[x].context,w)}}return!0},s.prototype.on=function(c,u,h){return o(this,c,u,h,!1)},s.prototype.once=function(c,u,h){return o(this,c,u,h,!0)},s.prototype.removeListener=function(c,u,h,m){var p=n?n+c:c;if(!this._events[p])return this;if(!u)return i(this,p),this;var y=this._events[p];if(y.fn)y.fn===u&&(!m||y.once)&&(!h||y.context===h)&&i(this,p);else{for(var f=0,v=[],b=y.length;f<b;f++)(y[f].fn!==u||m&&!y[f].once||h&&y[f].context!==h)&&v.push(y[f]);v.length?this._events[p]=v.length===1?v[0]:v:i(this,p)}return this},s.prototype.removeAllListeners=function(c){var u;return c?(u=n?n+c:c,this._events[u]&&i(this,u)):(this._events=new r,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=n,s.EventEmitter=s,e.exports=s})(qv);var jj=qv.exports;const Oj=Nt(jj);var Kr=new Oj,Tl="recharts.syncEvent.tooltip",lm="recharts.syncEvent.brush";function Cj(e,t){if(t){var n=Number.parseInt(t,10);if(!At(n))return e==null?void 0:e[n]}}var Ej={chartName:"",tooltipPayloadSearcher:void 0,eventEmitter:void 0,defaultTooltipEventType:"axis"},Uv=nt({name:"options",initialState:Ej,reducers:{createEventEmitter:e=>{e.eventEmitter==null&&(e.eventEmitter=Symbol("rechartsEventEmitter"))}}}),Mj=Uv.reducer,{createEventEmitter:$j}=Uv.actions;function Dj(e){return e.tooltip.syncInteraction}var Bj={chartData:void 0,computedData:void 0,dataStartIndex:0,dataEndIndex:0},Kv=nt({name:"chartData",initialState:Bj,reducers:{setChartData(e,t){if(e.chartData=t.payload,t.payload==null){e.dataStartIndex=0,e.dataEndIndex=0;return}t.payload.length>0&&e.dataEndIndex!==t.payload.length-1&&(e.dataEndIndex=t.payload.length-1)},setComputedData(e,t){e.computedData=t.payload},setDataStartEndIndexes(e,t){var{startIndex:n,endIndex:r}=t.payload;n!=null&&(e.dataStartIndex=n),r!=null&&(e.dataEndIndex=r)}}}),{setChartData:cm,setDataStartEndIndexes:Rj,setComputedData:GD}=Kv.actions,_j=Kv.reducer,Wj=["x","y"];function um(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Kn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?um(Object(n),!0).forEach(function(r){Lj(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):um(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Lj(e,t,n){return(t=Fj(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Fj(e){var t=Hj(e,"string");return typeof t=="symbol"?t:t+""}function Hj(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function zj(e,t){if(e==null)return{};var n,r,a=Yj(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function Yj(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Gj(){var e=V(Hc),t=V(zc),n=ke(),r=V(Of),a=V(ln),o=Ln(),i=mi(),s=V(l=>l.rootProps.className);g.useEffect(()=>{if(e==null)return na;var l=(c,u,h)=>{if(t!==h&&e===c){if(r==="index"){var m;if(i&&u!==null&&u!==void 0&&(m=u.payload)!==null&&m!==void 0&&m.coordinate&&u.payload.sourceViewBox){var p=u.payload.coordinate,{x:y,y:f}=p,v=zj(p,Wj),{x:b,y:w,width:x,height:T}=u.payload.sourceViewBox,k=Kn(Kn({},v),{},{x:i.x+(x?(y-b)/x:0)*i.width,y:i.y+(T?(f-w)/T:0)*i.height});n(Kn(Kn({},u),{},{payload:Kn(Kn({},u.payload),{},{coordinate:k})}))}else n(u);return}if(a!=null){var I;if(typeof r=="function"){var C={activeTooltipIndex:u.payload.index==null?void 0:Number(u.payload.index),isTooltipActive:u.payload.active,activeIndex:u.payload.index==null?void 0:Number(u.payload.index),activeLabel:u.payload.label,activeDataKey:u.payload.dataKey,activeCoordinate:u.payload.coordinate},O=r(a,C);I=a[O]}else r==="value"&&(I=a.find(_=>String(_.value)===u.payload.label));var{coordinate:M}=u.payload;if(I==null||u.payload.active===!1||M==null||i==null){n(wl({active:!1,coordinate:void 0,dataKey:void 0,index:null,label:void 0,sourceViewBox:void 0,graphicalItemId:void 0}));return}var{x:$,y:A}=M,N=Math.min($,i.x+i.width),D=Math.min(A,i.y+i.height),L={x:o==="horizontal"?I.coordinate:N,y:o==="horizontal"?D:I.coordinate},U=wl({active:u.payload.active,coordinate:L,dataKey:u.payload.dataKey,index:String(I.index),label:u.payload.label,sourceViewBox:u.payload.sourceViewBox,graphicalItemId:u.payload.graphicalItemId});n(U)}}};return Kr.on(Tl,l),()=>{Kr.off(Tl,l)}},[s,n,t,e,r,a,o,i])}function qj(){var e=V(Hc),t=V(zc),n=ke();g.useEffect(()=>{if(e==null)return na;var r=(a,o,i)=>{t!==i&&e===a&&n(Rj(o))};return Kr.on(lm,r),()=>{Kr.off(lm,r)}},[n,t,e])}function Uj(){var e=ke();g.useEffect(()=>{e($j())},[e]),Gj(),qj()}function Kj(e,t,n,r,a,o){var i=V(p=>tj(p,e,t)),s=V(zc),l=V(Hc),c=V(Of),u=V(Dj),h=u==null?void 0:u.active,m=mi();g.useEffect(()=>{if(!h&&l!=null&&s!=null){var p=wl({active:o,coordinate:n,dataKey:i,index:a,label:typeof r=="number"?String(r):r,sourceViewBox:m,graphicalItemId:void 0});Kr.emit(Tl,l,p,s)}},[h,n,i,a,r,s,l,c,o,m])}function dm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function hm(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?dm(Object(n),!0).forEach(function(r){Vj(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):dm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Vj(e,t,n){return(t=Jj(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Jj(e){var t=Zj(e,"string");return typeof t=="symbol"?t:t+""}function Zj(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Xj(e){return e.dataKey}function Qj(e,t){return g.isValidElement(e)?g.cloneElement(e,t):typeof e=="function"?g.createElement(e,t):g.createElement(_1,t)}var mm=[],eO={allowEscapeViewBox:{x:!1,y:!1},animationDuration:400,animationEasing:"ease",axisId:0,contentStyle:{},cursor:!0,filterNull:!0,includeHidden:!1,isAnimationActive:"auto",itemSorter:"name",itemStyle:{},labelStyle:{},offset:10,reverseDirection:{x:!1,y:!1},separator:" : ",trigger:"hover",useTranslate3d:!1,wrapperStyle:{}};function tO(e){var t,n,r=tt(e,eO),{active:a,allowEscapeViewBox:o,animationDuration:i,animationEasing:s,content:l,filterNull:c,isAnimationActive:u,offset:h,payloadUniqBy:m,position:p,reverseDirection:y,useTranslate3d:f,wrapperStyle:v,cursor:b,shared:w,trigger:x,defaultIndex:T,portal:k,axisId:I}=r,C=ke(),O=typeof T=="number"?String(T):T;g.useEffect(()=>{C(JP({shared:w,trigger:x,axisId:I,active:a,defaultIndex:O}))},[C,w,x,I,a,O]);var M=mi(),$=fy(),A=YP(w),{activeIndex:N,isActive:D}=(t=V(B=>aj(B,A,x,O)))!==null&&t!==void 0?t:{},L=V(B=>rj(B,A,x,O)),U=V(B=>zv(B,A,x,O)),_=V(B=>nj(B,A,x,O)),F=L,q=Nj(),H=(n=a??D)!==null&&n!==void 0?n:!1,[Z,ee]=kk([F,H]),te=A==="axis"?U:void 0;Kj(A,x,_,te,N,H);var Te=k??q;if(Te==null||M==null||A==null)return null;var de=F??mm;H||(de=mm),c&&de.length&&(de=Lx(de.filter(B=>B.value!=null&&(B.hide!==!0||r.includeHidden)),m,Xj));var E=de.length>0,z=g.createElement(G1,{allowEscapeViewBox:o,animationDuration:i,animationEasing:s,isAnimationActive:u,active:H,coordinate:_,hasPayload:E,offset:h,position:p,reverseDirection:y,useTranslate3d:f,viewBox:M,wrapperStyle:v,lastBoundingBox:Z,innerRef:ee,hasPortalFromProps:!!k},Qj(l,hm(hm({},r),{},{payload:de,label:te,active:H,activeIndex:N,coordinate:_,accessibilityLayer:$})));return g.createElement(g.Fragment,null,$l.createPortal(z,Te),H&&g.createElement(Pj,{cursor:b,tooltipEventType:A,coordinate:_,payload:de,index:N}))}var mu=e=>null;mu.displayName="Cell";function nO(e,t,n){return(t=rO(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function rO(e){var t=aO(e,"string");return typeof t=="symbol"?t:t+""}function aO(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}class oO{constructor(t){nO(this,"cache",new Map),this.maxSize=t}get(t){var n=this.cache.get(t);return n!==void 0&&(this.cache.delete(t),this.cache.set(t,n)),n}set(t,n){if(this.cache.has(t))this.cache.delete(t);else if(this.cache.size>=this.maxSize){var r=this.cache.keys().next().value;r!=null&&this.cache.delete(r)}this.cache.set(t,n)}clear(){this.cache.clear()}size(){return this.cache.size}}function pm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function iO(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?pm(Object(n),!0).forEach(function(r){sO(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function sO(e,t,n){return(t=lO(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function lO(e){var t=cO(e,"string");return typeof t=="symbol"?t:t+""}function cO(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var uO={cacheSize:2e3,enableCache:!0},Vv=iO({},uO),gm=new oO(Vv.cacheSize),dO={position:"absolute",top:"-20000px",left:0,padding:0,margin:0,border:"none",whiteSpace:"pre"},ym="recharts_measurement_span";function hO(e,t){var n=t.fontSize||"",r=t.fontFamily||"",a=t.fontWeight||"",o=t.fontStyle||"",i=t.letterSpacing||"",s=t.textTransform||"";return"".concat(e,"|").concat(n,"|").concat(r,"|").concat(a,"|").concat(o,"|").concat(i,"|").concat(s)}var fm=(e,t)=>{try{var n=document.getElementById(ym);n||(n=document.createElement("span"),n.setAttribute("id",ym),n.setAttribute("aria-hidden","true"),document.body.appendChild(n)),Object.assign(n.style,dO,t),n.textContent="".concat(e);var r=n.getBoundingClientRect();return{width:r.width,height:r.height}}catch{return{width:0,height:0}}},Mr=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(t==null||vi.isSsr)return{width:0,height:0};if(!Vv.enableCache)return fm(t,n);var r=hO(t,n),a=gm.get(r);if(a)return a;var o=fm(t,n);return gm.set(r,o),o},Jv;function mO(e,t,n){return(t=pO(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function pO(e){var t=gO(e,"string");return typeof t=="symbol"?t:t+""}function gO(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var vm=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,bm=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,yO=/^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,fO=/(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,vO={cm:96/2.54,mm:96/25.4,pt:96/72,pc:96/6,in:96,Q:96/(2.54*40),px:1},bO=["cm","mm","pt","pc","in","Q","px"];function wO(e){return bO.includes(e)}var Zn="NaN";function xO(e,t){return e*vO[t]}class Fe{static parse(t){var n,[,r,a]=(n=fO.exec(t))!==null&&n!==void 0?n:[];return r==null?Fe.NaN:new Fe(parseFloat(r),a??"")}constructor(t,n){this.num=t,this.unit=n,this.num=t,this.unit=n,At(t)&&(this.unit=""),n!==""&&!yO.test(n)&&(this.num=NaN,this.unit=""),wO(n)&&(this.num=xO(t,n),this.unit="px")}add(t){return this.unit!==t.unit?new Fe(NaN,""):new Fe(this.num+t.num,this.unit)}subtract(t){return this.unit!==t.unit?new Fe(NaN,""):new Fe(this.num-t.num,this.unit)}multiply(t){return this.unit!==""&&t.unit!==""&&this.unit!==t.unit?new Fe(NaN,""):new Fe(this.num*t.num,this.unit||t.unit)}divide(t){return this.unit!==""&&t.unit!==""&&this.unit!==t.unit?new Fe(NaN,""):new Fe(this.num/t.num,this.unit||t.unit)}toString(){return"".concat(this.num).concat(this.unit)}isNaN(){return At(this.num)}}Jv=Fe;mO(Fe,"NaN",new Jv(NaN,""));function Zv(e){if(e==null||e.includes(Zn))return Zn;for(var t=e;t.includes("*")||t.includes("/");){var n,[,r,a,o]=(n=vm.exec(t))!==null&&n!==void 0?n:[],i=Fe.parse(r??""),s=Fe.parse(o??""),l=a==="*"?i.multiply(s):i.divide(s);if(l.isNaN())return Zn;t=t.replace(vm,l.toString())}for(;t.includes("+")||/.-\d+(?:\.\d+)?/.test(t);){var c,[,u,h,m]=(c=bm.exec(t))!==null&&c!==void 0?c:[],p=Fe.parse(u??""),y=Fe.parse(m??""),f=h==="+"?p.add(y):p.subtract(y);if(f.isNaN())return Zn;t=t.replace(bm,f.toString())}return t}var wm=/\(([^()]*)\)/;function kO(e){for(var t=e,n;(n=wm.exec(t))!=null;){var[,r]=n;t=t.replace(wm,Zv(r))}return t}function TO(e){var t=e.replace(/\s+/g,"");return t=kO(t),t=Zv(t),t}function IO(e){try{return TO(e)}catch{return Zn}}function vs(e){var t=IO(e.slice(5,-1));return t===Zn?"":t}var AO=["x","y","lineHeight","capHeight","fill","scaleToFit","textAnchor","verticalAnchor"],SO=["dx","dy","angle","className","breakAll"];function Il(){return Il=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Il.apply(null,arguments)}function xm(e,t){if(e==null)return{};var n,r,a=PO(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function PO(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}var Xv=/[ \f\n\r\t\v\u2028\u2029]+/,Qv=e=>{var{children:t,breakAll:n,style:r}=e;try{var a=[];fe(t)||(n?a=t.toString().split(""):a=t.toString().split(Xv));var o=a.map(s=>({word:s,width:Mr(s,r).width})),i=n?0:Mr(" ",r).width;return{wordsWithComputedWidth:o,spaceWidth:i}}catch{return null}};function NO(e){return e==="start"||e==="middle"||e==="end"||e==="inherit"}var eb=(e,t,n,r)=>e.reduce((a,o)=>{var{word:i,width:s}=o,l=a[a.length-1];if(l&&s!=null&&(t==null||r||l.width+s+n<Number(t)))l.words.push(i),l.width+=s+n;else{var c={words:[i],width:s};a.push(c)}return a},[]),tb=e=>e.reduce((t,n)=>t.width>n.width?t:n),jO="…",km=(e,t,n,r,a,o,i,s)=>{var l=e.slice(0,t),c=Qv({breakAll:n,style:r,children:l+jO});if(!c)return[!1,[]];var u=eb(c.wordsWithComputedWidth,o,i,s),h=u.length>a||tb(u).width>Number(o);return[h,u]},OO=(e,t,n,r,a)=>{var{maxLines:o,children:i,style:s,breakAll:l}=e,c=K(o),u=String(i),h=eb(t,r,n,a);if(!c||a)return h;var m=h.length>o||tb(h).width>Number(r);if(!m)return h;for(var p=0,y=u.length-1,f=0,v;p<=y&&f<=u.length-1;){var b=Math.floor((p+y)/2),w=b-1,[x,T]=km(u,w,l,s,o,r,n,a),[k]=km(u,b,l,s,o,r,n,a);if(!x&&!k&&(p=b+1),x&&k&&(y=b-1),!x&&k){v=T;break}f++}return v||h},Tm=e=>{var t=fe(e)?[]:e.toString().split(Xv);return[{words:t,width:void 0}]},CO=e=>{var{width:t,scaleToFit:n,children:r,style:a,breakAll:o,maxLines:i}=e;if((t||n)&&!vi.isSsr){var s,l,c=Qv({breakAll:o,children:r,style:a});if(c){var{wordsWithComputedWidth:u,spaceWidth:h}=c;s=u,l=h}else return Tm(r);return OO({breakAll:o,children:r,maxLines:i,style:a},s,l,t,!!n)}return Tm(r)},nb="#808080",EO={angle:0,breakAll:!1,capHeight:"0.71em",fill:nb,lineHeight:"1em",scaleToFit:!1,textAnchor:"start",verticalAnchor:"end",x:0,y:0},pu=g.forwardRef((e,t)=>{var n=tt(e,EO),{x:r,y:a,lineHeight:o,capHeight:i,fill:s,scaleToFit:l,textAnchor:c,verticalAnchor:u}=n,h=xm(n,AO),m=g.useMemo(()=>CO({breakAll:h.breakAll,children:h.children,maxLines:h.maxLines,scaleToFit:l,style:h.style,width:h.width}),[h.breakAll,h.children,h.maxLines,l,h.style,h.width]),{dx:p,dy:y,angle:f,className:v,breakAll:b}=h,w=xm(h,SO);if(!Rt(r)||!Rt(a)||m.length===0)return null;var x=Number(r)+(K(p)?p:0),T=Number(a)+(K(y)?y:0);if(!ve(x)||!ve(T))return null;var k;switch(u){case"start":k=vs("calc(".concat(i,")"));break;case"middle":k=vs("calc(".concat((m.length-1)/2," * -").concat(o," + (").concat(i," / 2))"));break;default:k=vs("calc(".concat(m.length-1," * -").concat(o,")"));break}var I=[];if(l){var C=m[0].width,{width:O}=h;I.push("scale(".concat(K(O)&&K(C)?O/C:1,")"))}return f&&I.push("rotate(".concat(f,", ").concat(x,", ").concat(T,")")),I.length&&(w.transform=I.join(" ")),g.createElement("text",Il({},Ve(w),{ref:t,x,y:T,className:ie("recharts-text",v),textAnchor:c,fill:s.includes("url")?nb:s}),m.map((M,$)=>{var A=M.words.join(b?"":" ");return g.createElement("tspan",{x,dy:$===0?k:o,key:"".concat(A,"-").concat($)},A)}))});pu.displayName="Text";var MO=["labelRef"],$O=["content"];function Im(e,t){if(e==null)return{};var n,r,a=DO(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function DO(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Am(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function xe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Am(Object(n),!0).forEach(function(r){BO(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Am(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function BO(e,t,n){return(t=RO(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function RO(e){var t=_O(e,"string");return typeof t=="symbol"?t:t+""}function _O(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function zt(){return zt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zt.apply(null,arguments)}var rb=g.createContext(null),WO=e=>{var{x:t,y:n,upperWidth:r,lowerWidth:a,width:o,height:i,children:s}=e,l=g.useMemo(()=>({x:t,y:n,upperWidth:r,lowerWidth:a,width:o,height:i}),[t,n,r,a,o,i]);return g.createElement(rb.Provider,{value:l},s)},ab=()=>{var e=g.useContext(rb),t=mi();return e||cy(t)},LO=g.createContext(null),FO=()=>{var e=g.useContext(LO),t=V(Df);return e||t},HO=e=>{var{value:t,formatter:n}=e,r=fe(e.children)?t:e.children;return typeof n=="function"?n(r):r},gu=e=>e!=null&&typeof e=="function",zO=(e,t)=>{var n=Qe(t-e),r=Math.min(Math.abs(t-e),360);return n*r},YO=(e,t,n,r,a)=>{var{offset:o,className:i}=e,{cx:s,cy:l,innerRadius:c,outerRadius:u,startAngle:h,endAngle:m,clockWise:p}=a,y=(c+u)/2,f=zO(h,m),v=f>=0?1:-1,b,w;switch(t){case"insideStart":b=h+v*o,w=p;break;case"insideEnd":b=m-v*o,w=!p;break;case"end":b=m+v*o,w=p;break;default:throw new Error("Unsupported position ".concat(t))}w=f<=0?w:!w;var x=He(s,l,y,b),T=He(s,l,y,b+(w?1:-1)*359),k="M".concat(x.x,",").concat(x.y,`
    A`).concat(y,",").concat(y,",0,1,").concat(w?0:1,`,
    `).concat(T.x,",").concat(T.y),I=fe(e.id)?Dr("recharts-radial-line-"):e.id;return g.createElement("text",zt({},r,{dominantBaseline:"central",className:ie("recharts-radial-bar-label",i)}),g.createElement("defs",null,g.createElement("path",{id:I,d:k})),g.createElement("textPath",{xlinkHref:"#".concat(I)},n))},GO=(e,t,n)=>{var{cx:r,cy:a,innerRadius:o,outerRadius:i,startAngle:s,endAngle:l}=e,c=(s+l)/2;if(n==="outside"){var{x:u,y:h}=He(r,a,i+t,c);return{x:u,y:h,textAnchor:u>=r?"start":"end",verticalAnchor:"middle"}}if(n==="center")return{x:r,y:a,textAnchor:"middle",verticalAnchor:"middle"};if(n==="centerTop")return{x:r,y:a,textAnchor:"middle",verticalAnchor:"start"};if(n==="centerBottom")return{x:r,y:a,textAnchor:"middle",verticalAnchor:"end"};var m=(o+i)/2,{x:p,y}=He(r,a,m,c);return{x:p,y,textAnchor:"middle",verticalAnchor:"middle"}},Al=e=>"cx"in e&&K(e.cx),qO=(e,t)=>{var{parentViewBox:n,offset:r,position:a}=e,o;n!=null&&!Al(n)&&(o=n);var{x:i,y:s,upperWidth:l,lowerWidth:c,height:u}=t,h=i,m=i+(l-c)/2,p=(h+m)/2,y=(l+c)/2,f=h+l/2,v=u>=0?1:-1,b=v*r,w=v>0?"end":"start",x=v>0?"start":"end",T=l>=0?1:-1,k=T*r,I=T>0?"end":"start",C=T>0?"start":"end";if(a==="top"){var O={x:h+l/2,y:s-b,textAnchor:"middle",verticalAnchor:w};return xe(xe({},O),o?{height:Math.max(s-o.y,0),width:l}:{})}if(a==="bottom"){var M={x:m+c/2,y:s+u+b,textAnchor:"middle",verticalAnchor:x};return xe(xe({},M),o?{height:Math.max(o.y+o.height-(s+u),0),width:c}:{})}if(a==="left"){var $={x:p-k,y:s+u/2,textAnchor:I,verticalAnchor:"middle"};return xe(xe({},$),o?{width:Math.max($.x-o.x,0),height:u}:{})}if(a==="right"){var A={x:p+y+k,y:s+u/2,textAnchor:C,verticalAnchor:"middle"};return xe(xe({},A),o?{width:Math.max(o.x+o.width-A.x,0),height:u}:{})}var N=o?{width:y,height:u}:{};return a==="insideLeft"?xe({x:p+k,y:s+u/2,textAnchor:C,verticalAnchor:"middle"},N):a==="insideRight"?xe({x:p+y-k,y:s+u/2,textAnchor:I,verticalAnchor:"middle"},N):a==="insideTop"?xe({x:h+l/2,y:s+b,textAnchor:"middle",verticalAnchor:x},N):a==="insideBottom"?xe({x:m+c/2,y:s+u-b,textAnchor:"middle",verticalAnchor:w},N):a==="insideTopLeft"?xe({x:h+k,y:s+b,textAnchor:C,verticalAnchor:x},N):a==="insideTopRight"?xe({x:h+l-k,y:s+b,textAnchor:I,verticalAnchor:x},N):a==="insideBottomLeft"?xe({x:m+k,y:s+u-b,textAnchor:C,verticalAnchor:w},N):a==="insideBottomRight"?xe({x:m+c-k,y:s+u-b,textAnchor:I,verticalAnchor:w},N):a&&typeof a=="object"&&(K(a.x)||Kt(a.x))&&(K(a.y)||Kt(a.y))?xe({x:i+St(a.x,y),y:s+St(a.y,u),textAnchor:"end",verticalAnchor:"end"},N):xe({x:f,y:s+u/2,textAnchor:"middle",verticalAnchor:"middle"},N)},UO={angle:0,offset:5,zIndex:Ne.label,position:"middle",textBreakAll:!1};function un(e){var t=tt(e,UO),{viewBox:n,position:r,value:a,children:o,content:i,className:s="",textBreakAll:l,labelRef:c}=t,u=FO(),h=ab(),m=r==="center"?h:u??h,p,y,f;if(n==null?p=m:Al(n)?p=n:p=cy(n),!p||fe(a)&&fe(o)&&!g.isValidElement(i)&&typeof i!="function")return null;var v=xe(xe({},t),{},{viewBox:p});if(g.isValidElement(i)){var b=Im(v,MO);return g.cloneElement(i,b)}if(typeof i=="function"){var w=Im(v,$O);if(y=g.createElement(i,w),g.isValidElement(y))return y}else y=HO(t);var x=Ve(t);if(Al(p)){if(r==="insideStart"||r==="insideEnd"||r==="end")return YO(t,r,y,x,p);f=GO(p,t.offset,t.position)}else f=qO(t,p);return g.createElement(Ot,{zIndex:t.zIndex},g.createElement(pu,zt({ref:c,className:ie("recharts-label",s)},x,f,{textAnchor:NO(x.textAnchor)?x.textAnchor:f.textAnchor,breakAll:l}),y))}un.displayName="Label";var KO=(e,t,n)=>{if(!e)return null;var r={viewBox:t,labelRef:n};return e===!0?g.createElement(un,zt({key:"label-implicit"},r)):Rt(e)?g.createElement(un,zt({key:"label-implicit",value:e},r)):g.isValidElement(e)?e.type===un?g.cloneElement(e,xe({key:"label-implicit"},r)):g.createElement(un,zt({key:"label-implicit",content:e},r)):gu(e)?g.createElement(un,zt({key:"label-implicit",content:e},r)):e&&typeof e=="object"?g.createElement(un,zt({},e,{key:"label-implicit"},r)):null};function VO(e){var{label:t,labelRef:n}=e,r=ab();return KO(t,r,n)||null}var ob={},ib={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n){return n[n.length-1]}e.last=t})(ib);var sb={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n){return Array.isArray(n)?n:Array.from(n)}e.toArray=t})(sb);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=ib,n=sb,r=Zo;function a(o){if(r.isArrayLike(o))return t.last(n.toArray(o))}e.last=a})(ob);var JO=ob.last;const ZO=Nt(JO);var XO=["valueAccessor"],QO=["dataKey","clockWise","id","textBreakAll","zIndex"];function Mo(){return Mo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Mo.apply(null,arguments)}function Sm(e,t){if(e==null)return{};var n,r,a=eC(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function eC(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}var tC=e=>Array.isArray(e.value)?ZO(e.value):e.value,lb=g.createContext(void 0),cb=lb.Provider,ub=g.createContext(void 0);ub.Provider;function nC(){return g.useContext(lb)}function rC(){return g.useContext(ub)}function rr(e){var{valueAccessor:t=tC}=e,n=Sm(e,XO),{dataKey:r,clockWise:a,id:o,textBreakAll:i,zIndex:s}=n,l=Sm(n,QO),c=nC(),u=rC(),h=c||u;return!h||!h.length?null:g.createElement(Ot,{zIndex:s??Ne.label},g.createElement(pt,{className:"recharts-label-list"},h.map((m,p)=>{var y,f=fe(r)?t(m,p):Ae(m&&m.payload,r),v=fe(o)?{}:{id:"".concat(o,"-").concat(p)};return g.createElement(un,Mo({key:"label-".concat(p)},Ve(m),l,v,{fill:(y=n.fill)!==null&&y!==void 0?y:m.fill,parentViewBox:m.parentViewBox,value:f,textBreakAll:i,viewBox:m.viewBox,index:p,zIndex:0}))})))}rr.displayName="LabelList";function db(e){var{label:t}=e;return t?t===!0?g.createElement(rr,{key:"labelList-implicit"}):g.isValidElement(t)||gu(t)?g.createElement(rr,{key:"labelList-implicit",content:t}):typeof t=="object"?g.createElement(rr,Mo({key:"labelList-implicit"},t,{type:String(t.type)})):null:null}function Sl(){return Sl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Sl.apply(null,arguments)}var hb=e=>{var{cx:t,cy:n,r,className:a}=e,o=ie("recharts-dot",a);return K(t)&&K(n)&&K(r)?g.createElement("circle",Sl({},Bt(e),zl(e),{className:o,cx:t,cy:n,r})):null},aC={radiusAxis:{},angleAxis:{}},mb=nt({name:"polarAxis",initialState:aC,reducers:{addRadiusAxis(e,t){e.radiusAxis[t.payload.id]=t.payload},removeRadiusAxis(e,t){delete e.radiusAxis[t.payload.id]},addAngleAxis(e,t){e.angleAxis[t.payload.id]=t.payload},removeAngleAxis(e,t){delete e.angleAxis[t.payload.id]}}});mb.actions;var oC=mb.reducer,pb={exports:{}},le={};/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yu=Symbol.for("react.transitional.element"),fu=Symbol.for("react.portal"),Wi=Symbol.for("react.fragment"),Li=Symbol.for("react.strict_mode"),Fi=Symbol.for("react.profiler"),Hi=Symbol.for("react.consumer"),zi=Symbol.for("react.context"),Yi=Symbol.for("react.forward_ref"),Gi=Symbol.for("react.suspense"),qi=Symbol.for("react.suspense_list"),Ui=Symbol.for("react.memo"),Ki=Symbol.for("react.lazy"),iC=Symbol.for("react.view_transition"),sC=Symbol.for("react.client.reference");function vt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case yu:switch(e=e.type,e){case Wi:case Fi:case Li:case Gi:case qi:case iC:return e;default:switch(e=e&&e.$$typeof,e){case zi:case Yi:case Ki:case Ui:return e;case Hi:return e;default:return t}}case fu:return t}}}le.ContextConsumer=Hi;le.ContextProvider=zi;le.Element=yu;le.ForwardRef=Yi;le.Fragment=Wi;le.Lazy=Ki;le.Memo=Ui;le.Portal=fu;le.Profiler=Fi;le.StrictMode=Li;le.Suspense=Gi;le.SuspenseList=qi;le.isContextConsumer=function(e){return vt(e)===Hi};le.isContextProvider=function(e){return vt(e)===zi};le.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===yu};le.isForwardRef=function(e){return vt(e)===Yi};le.isFragment=function(e){return vt(e)===Wi};le.isLazy=function(e){return vt(e)===Ki};le.isMemo=function(e){return vt(e)===Ui};le.isPortal=function(e){return vt(e)===fu};le.isProfiler=function(e){return vt(e)===Fi};le.isStrictMode=function(e){return vt(e)===Li};le.isSuspense=function(e){return vt(e)===Gi};le.isSuspenseList=function(e){return vt(e)===qi};le.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Wi||e===Fi||e===Li||e===Gi||e===qi||typeof e=="object"&&e!==null&&(e.$$typeof===Ki||e.$$typeof===Ui||e.$$typeof===zi||e.$$typeof===Hi||e.$$typeof===Yi||e.$$typeof===sC||e.getModuleId!==void 0)};le.typeOf=vt;pb.exports=le;var lC=pb.exports,Pm=e=>typeof e=="string"?e:e?e.displayName||e.name||"Component":"",Nm=null,bs=null,gb=e=>{if(e===Nm&&Array.isArray(bs))return bs;var t=[];return g.Children.forEach(e,n=>{fe(n)||(lC.isFragment(n)?t=t.concat(gb(n.props.children)):t.push(n))}),bs=t,Nm=e,t};function cC(e,t){var n=[],r=[];return Array.isArray(t)?r=t.map(a=>Pm(a)):r=[Pm(t)],gb(e).forEach(a=>{var o=or(a,"type.displayName")||or(a,"type.name");o&&r.indexOf(o)!==-1&&n.push(a)}),n}var yb=e=>e&&typeof e=="object"&&"clipDot"in e?!!e.clipDot:!0,fb={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n){var a;if(typeof n!="object"||n==null)return!1;if(Object.getPrototypeOf(n)===null)return!0;if(Object.prototype.toString.call(n)!=="[object Object]"){const o=n[Symbol.toStringTag];return o==null||!((a=Object.getOwnPropertyDescriptor(n,Symbol.toStringTag))!=null&&a.writable)?!1:n.toString()===`[object ${o}]`}let r=n;for(;Object.getPrototypeOf(r)!==null;)r=Object.getPrototypeOf(r);return Object.getPrototypeOf(n)===r}e.isPlainObject=t})(fb);var uC=fb.isPlainObject;const dC=Nt(uC);var jm,Om,Cm,Em,Mm;function $m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Dm(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?$m(Object(n),!0).forEach(function(r){hC(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$m(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function hC(e,t,n){return(t=mC(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function mC(e){var t=pC(e,"string");return typeof t=="symbol"?t:t+""}function pC(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function $o(){return $o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$o.apply(null,arguments)}function Or(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var Bm=(e,t,n,r,a)=>{var o=n-r,i;return i=be(jm||(jm=Or(["M ",",",""])),e,t),i+=be(Om||(Om=Or(["L ",",",""])),e+n,t),i+=be(Cm||(Cm=Or(["L ",",",""])),e+n-o/2,t+a),i+=be(Em||(Em=Or(["L ",",",""])),e+n-o/2-r,t+a),i+=be(Mm||(Mm=Or(["L ",","," Z"])),e,t),i},gC={x:0,y:0,upperWidth:0,lowerWidth:0,height:0,isUpdateAnimationActive:!1,animationBegin:0,animationDuration:1500,animationEasing:"ease"},yC=e=>{var t=tt(e,gC),{x:n,y:r,upperWidth:a,lowerWidth:o,height:i,className:s}=t,{animationEasing:l,animationDuration:c,animationBegin:u,isUpdateAnimationActive:h}=t,m=g.useRef(null),[p,y]=g.useState(-1),f=g.useRef(a),v=g.useRef(o),b=g.useRef(i),w=g.useRef(n),x=g.useRef(r),T=wi(e,"trapezoid-");if(g.useEffect(()=>{if(m.current&&m.current.getTotalLength)try{var L=m.current.getTotalLength();L&&y(L)}catch{}},[]),n!==+n||r!==+r||a!==+a||o!==+o||i!==+i||a===0&&o===0||i===0)return null;var k=ie("recharts-trapezoid",s);if(!h)return g.createElement("g",null,g.createElement("path",$o({},Ve(t),{className:k,d:Bm(n,r,a,o,i)})));var I=f.current,C=v.current,O=b.current,M=w.current,$=x.current,A="0px ".concat(p===-1?1:p,"px"),N="".concat(p,"px 0px"),D=by(["strokeDasharray"],c,l);return g.createElement(bi,{animationId:T,key:T,canBegin:p>0,duration:c,easing:l,isActive:h,begin:u},L=>{var U=we(I,a,L),_=we(C,o,L),F=we(O,i,L),q=we(M,n,L),H=we($,r,L);m.current&&(f.current=U,v.current=_,b.current=F,w.current=q,x.current=H);var Z=L>0?{transition:D,strokeDasharray:N}:{strokeDasharray:A};return g.createElement("path",$o({},Ve(t),{className:k,d:Bm(q,H,U,_,F),ref:m,style:Dm(Dm({},Z),t.style)}))})},fC=["option","shapeType","activeClassName"];function vC(e,t){if(e==null)return{};var n,r,a=bC(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function bC(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Rm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Do(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Rm(Object(n),!0).forEach(function(r){wC(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Rm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function wC(e,t,n){return(t=xC(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function xC(e){var t=kC(e,"string");return typeof t=="symbol"?t:t+""}function kC(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function TC(e,t){return Do(Do({},t),e)}function IC(e,t){return e==="symbols"}function _m(e){var{shapeType:t,elementProps:n}=e;switch(t){case"rectangle":return g.createElement(Ty,n);case"trapezoid":return g.createElement(yC,n);case"sector":return g.createElement(Sy,n);case"symbols":if(IC(t))return g.createElement(Jp,n);break;case"curve":return g.createElement(vy,n);default:return null}}function AC(e){return g.isValidElement(e)?e.props:e}function vb(e){var{option:t,shapeType:n,activeClassName:r="recharts-active-shape"}=e,a=vC(e,fC),o;if(g.isValidElement(t))o=g.cloneElement(t,Do(Do({},a),AC(t)));else if(typeof t=="function")o=t(a,a.index);else if(dC(t)&&typeof t!="boolean"){var i=TC(t,a);o=g.createElement(_m,{shapeType:n,elementProps:i})}else{var s=a;o=g.createElement(_m,{shapeType:n,elementProps:s})}return a.isActive?g.createElement(pt,{className:r},o):o}var bb=(e,t,n)=>{var r=ke();return(a,o)=>i=>{e==null||e(a,o,i),r(Iv({activeIndex:String(o),activeDataKey:t,activeCoordinate:a.tooltipPosition,activeGraphicalItemId:n}))}},wb=e=>{var t=ke();return(n,r)=>a=>{e==null||e(n,r,a),t(ZP())}},xb=(e,t,n)=>{var r=ke();return(a,o)=>i=>{e==null||e(a,o,i),r(XP({activeIndex:String(o),activeDataKey:t,activeCoordinate:a.tooltipPosition,activeGraphicalItemId:n}))}};function kb(e){var{tooltipEntrySettings:t}=e,n=ke(),r=Ze(),a=g.useRef(null);return g.useLayoutEffect(()=>{r||(a.current===null?n(UP(t)):a.current!==t&&n(KP({prev:a.current,next:t})),a.current=t)},[t,n,r]),g.useLayoutEffect(()=>()=>{a.current&&(n(VP(a.current)),a.current=null)},[n]),null}function Tb(e){var{legendPayload:t}=e,n=ke(),r=Ze(),a=g.useRef(null);return g.useLayoutEffect(()=>{r||(a.current===null?n(O1(t)):a.current!==t&&n(C1({prev:a.current,next:t})),a.current=t)},[n,r,t]),g.useLayoutEffect(()=>()=>{a.current&&(n(E1(a.current)),a.current=null)},[n]),null}var ws,SC=()=>{var[e]=g.useState(()=>Dr("uid-"));return e},PC=(ws=l0["useId".toString()])!==null&&ws!==void 0?ws:SC;function NC(e,t){var n=PC();return t||(e?"".concat(e,"-").concat(n):n)}var jC=g.createContext(void 0),Ib=e=>{var{id:t,type:n,children:r}=e,a=NC("recharts-".concat(n),t);return g.createElement(jC.Provider,{value:a},r(a))},OC={cartesianItems:[],polarItems:[]},Ab=nt({name:"graphicalItems",initialState:OC,reducers:{addCartesianGraphicalItem:{reducer(e,t){e.cartesianItems.push(t.payload)},prepare:ge()},replaceCartesianGraphicalItem:{reducer(e,t){var{prev:n,next:r}=t.payload,a=It(e).cartesianItems.indexOf(n);a>-1&&(e.cartesianItems[a]=r)},prepare:ge()},removeCartesianGraphicalItem:{reducer(e,t){var n=It(e).cartesianItems.indexOf(t.payload);n>-1&&e.cartesianItems.splice(n,1)},prepare:ge()},addPolarGraphicalItem:{reducer(e,t){e.polarItems.push(t.payload)},prepare:ge()},removePolarGraphicalItem:{reducer(e,t){var n=It(e).polarItems.indexOf(t.payload);n>-1&&e.polarItems.splice(n,1)},prepare:ge()}}}),{addCartesianGraphicalItem:CC,replaceCartesianGraphicalItem:EC,removeCartesianGraphicalItem:MC,addPolarGraphicalItem:qD,removePolarGraphicalItem:UD}=Ab.actions,$C=Ab.reducer,DC=e=>{var t=ke(),n=g.useRef(null);return g.useLayoutEffect(()=>{n.current===null?t(CC(e)):n.current!==e&&t(EC({prev:n.current,next:e})),n.current=e},[t,e]),g.useLayoutEffect(()=>()=>{n.current&&(t(MC(n.current)),n.current=null)},[t]),null},Sb=g.memo(DC),BC=["points"];function Wm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function xs(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Wm(Object(n),!0).forEach(function(r){RC(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Wm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function RC(e,t,n){return(t=_C(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _C(e){var t=WC(e,"string");return typeof t=="symbol"?t:t+""}function WC(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Bo(){return Bo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Bo.apply(null,arguments)}function LC(e,t){if(e==null)return{};var n,r,a=FC(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function FC(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function HC(e){var{option:t,dotProps:n,className:r}=e;if(g.isValidElement(t))return g.cloneElement(t,n);if(typeof t=="function")return t(n);var a=ie(r,typeof t!="boolean"?t.className:""),o=n??{},i=LC(o,BC);return g.createElement(hb,Bo({},i,{className:a}))}function zC(e,t){return e==null?!1:t?!0:e.length===1}function YC(e){var{points:t,dot:n,className:r,dotClassName:a,dataKey:o,baseProps:i,needClip:s,clipPathId:l,zIndex:c=Ne.scatter}=e;if(!zC(t,n))return null;var u=yb(n),h=Mw(n),m=t.map((y,f)=>{var v,b,w=xs(xs(xs({r:3},i),h),{},{index:f,cx:(v=y.x)!==null&&v!==void 0?v:void 0,cy:(b=y.y)!==null&&b!==void 0?b:void 0,dataKey:o,value:y.value,payload:y.payload,points:t});return g.createElement(HC,{key:"dot-".concat(f),option:n,dotProps:w,className:a})}),p={};return s&&l!=null&&(p.clipPath="url(#clipPath-".concat(u?"":"dots-").concat(l,")")),g.createElement(Ot,{zIndex:c},g.createElement(pt,Bo({className:r},p),m))}function Lm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Fm(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Lm(Object(n),!0).forEach(function(r){GC(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Lm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function GC(e,t,n){return(t=qC(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qC(e){var t=UC(e,"string");return typeof t=="symbol"?t:t+""}function UC(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Pb=0,KC={xAxis:{},yAxis:{},zAxis:{}},Nb=nt({name:"cartesianAxis",initialState:KC,reducers:{addXAxis:{reducer(e,t){e.xAxis[t.payload.id]=t.payload},prepare:ge()},replaceXAxis:{reducer(e,t){var{prev:n,next:r}=t.payload;e.xAxis[n.id]!==void 0&&(n.id!==r.id&&delete e.xAxis[n.id],e.xAxis[r.id]=r)},prepare:ge()},removeXAxis:{reducer(e,t){delete e.xAxis[t.payload.id]},prepare:ge()},addYAxis:{reducer(e,t){e.yAxis[t.payload.id]=t.payload},prepare:ge()},replaceYAxis:{reducer(e,t){var{prev:n,next:r}=t.payload;e.yAxis[n.id]!==void 0&&(n.id!==r.id&&delete e.yAxis[n.id],e.yAxis[r.id]=r)},prepare:ge()},removeYAxis:{reducer(e,t){delete e.yAxis[t.payload.id]},prepare:ge()},addZAxis:{reducer(e,t){e.zAxis[t.payload.id]=t.payload},prepare:ge()},replaceZAxis:{reducer(e,t){var{prev:n,next:r}=t.payload;e.zAxis[n.id]!==void 0&&(n.id!==r.id&&delete e.zAxis[n.id],e.zAxis[r.id]=r)},prepare:ge()},removeZAxis:{reducer(e,t){delete e.zAxis[t.payload.id]},prepare:ge()},updateYAxisWidth(e,t){var{id:n,width:r}=t.payload,a=e.yAxis[n];if(a){var o=a.widthHistory||[];if(o.length===3&&o[0]===o[2]&&r===o[1]&&r!==a.width&&Math.abs(r-o[0])<=1)return;var i=[...o,r].slice(-3);e.yAxis[n]=Fm(Fm({},e.yAxis[n]),{},{width:r,widthHistory:i})}}}}),{addXAxis:VC,replaceXAxis:JC,removeXAxis:ZC,addYAxis:XC,replaceYAxis:QC,removeYAxis:eE,addZAxis:KD,replaceZAxis:VD,removeZAxis:JD,updateYAxisWidth:tE}=Nb.actions,nE=Nb.reducer,rE=j([_e],e=>({top:e.top,bottom:e.bottom,left:e.left,right:e.right})),aE=j([rE,tn,nn],(e,t,n)=>{if(!(!e||t==null||n==null))return{x:e.left,y:e.top,width:Math.max(0,t-e.left-e.right),height:Math.max(0,n-e.top-e.bottom)}}),vu=()=>V(aE),oE=()=>V(FN);function Hm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ks(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Hm(Object(n),!0).forEach(function(r){iE(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Hm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function iE(e,t,n){return(t=sE(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function sE(e){var t=lE(e,"string");return typeof t=="symbol"?t:t+""}function lE(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var cE=e=>{var{point:t,childIndex:n,mainColor:r,activeDot:a,dataKey:o,clipPath:i}=e;if(a===!1||t.x==null||t.y==null)return null;var s={index:n,dataKey:o,cx:t.x,cy:t.y,r:4,fill:r??"none",strokeWidth:2,stroke:"#fff",payload:t.payload,value:t.value},l=ks(ks(ks({},s),ea(a)),zl(a)),c;return g.isValidElement(a)?c=g.cloneElement(a,l):typeof a=="function"?c=a(l):c=g.createElement(hb,l),g.createElement(pt,{className:"recharts-active-dot",clipPath:i},c)};function uE(e){var{points:t,mainColor:n,activeDot:r,itemDataKey:a,clipPath:o,zIndex:i=Ne.activeDot}=e,s=V(Rn),l=oE();if(t==null||l==null)return null;var c=t.find(u=>l.includes(u.payload));return fe(c)?null:g.createElement(Ot,{zIndex:i},g.createElement(cE,{point:c,childIndex:Number(s),mainColor:n,dataKey:a,activeDot:r,clipPath:o}))}var zm=(e,t,n)=>{var r=n??e;if(!fe(r))return St(r,t,0)},dE=(e,t,n)=>{var r={},a=e.filter(Ci),o=e.filter(c=>c.stackId==null),i=a.reduce((c,u)=>(c[u.stackId]||(c[u.stackId]=[]),c[u.stackId].push(u),c),r),s=Object.entries(i).map(c=>{var[u,h]=c,m=h.map(y=>y.dataKey),p=zm(t,n,h[0].barSize);return{stackId:u,dataKeys:m,barSize:p}}),l=o.map(c=>{var u=[c.dataKey].filter(m=>m!=null),h=zm(t,n,c.barSize);return{stackId:void 0,dataKeys:u,barSize:h}});return[...s,...l]};function Ym(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Fa(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ym(Object(n),!0).forEach(function(r){hE(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ym(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function hE(e,t,n){return(t=mE(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function mE(e){var t=pE(e,"string");return typeof t=="symbol"?t:t+""}function pE(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function gE(e,t,n,r,a){var o=r.length;if(!(o<1)){var i=St(e,n,0,!0),s,l=[];if(ve(r[0].barSize)){var c=!1,u=n/o,h=r.reduce((b,w)=>b+(w.barSize||0),0);h+=(o-1)*i,h>=n&&(h-=(o-1)*i,i=0),h>=n&&u>0&&(c=!0,u*=.9,h=o*u);var m=(n-h)/2>>0,p={offset:m-i,size:0};s=r.reduce((b,w)=>{var x,T={stackId:w.stackId,dataKeys:w.dataKeys,position:{offset:p.offset+p.size+i,size:c?u:(x=w.barSize)!==null&&x!==void 0?x:0}},k=[...b,T];return p=k[k.length-1].position,k},l)}else{var y=St(t,n,0,!0);n-2*y-(o-1)*i<=0&&(i=0);var f=(n-2*y-(o-1)*i)/o;f>1&&(f>>=0);var v=ve(a)?Math.min(f,a):f;s=r.reduce((b,w,x)=>[...b,{stackId:w.stackId,dataKeys:w.dataKeys,position:{offset:y+(f+i)*x+(f-v)/2,size:v}}],l)}return s}}var yE=(e,t,n,r,a,o,i)=>{var s=fe(i)?t:i,l=gE(n,r,a!==o?a:o,e,s);return a!==o&&l!=null&&(l=l.map(c=>Fa(Fa({},c),{},{position:Fa(Fa({},c.position),{},{offset:c.position.offset-a/2})}))),l},fE=(e,t)=>{var n=Uc(t);if(!(!e||n==null||t==null)){var{stackId:r}=t;if(r!=null){var a=e[r];if(a){var{stackedData:o}=a;if(o)return o.find(i=>i.key===n)}}}};function vE(e,t){return e&&typeof e=="object"&&"zIndex"in e&&typeof e.zIndex=="number"&&ve(e.zIndex)?e.zIndex:t}var bE=e=>{var{chartData:t}=e,n=ke(),r=Ze();return g.useEffect(()=>r?()=>{}:(n(cm(t)),()=>{n(cm(void 0))}),[t,n,r]),null},Gm={x:0,y:0,width:0,height:0,padding:{top:0,right:0,bottom:0,left:0}},jb=nt({name:"brush",initialState:Gm,reducers:{setBrushSettings(e,t){return t.payload==null?Gm:t.payload}}});jb.actions;var wE=jb.reducer;function qm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ha(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?qm(Object(n),!0).forEach(function(r){Ob(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ob(e,t,n){return(t=xE(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function xE(e){var t=kE(e,"string");return typeof t=="symbol"?t:t+""}function kE(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var TE=(e,t)=>{var{x:n,y:r}=e,{x:a,y:o}=t;return{x:Math.min(n,a),y:Math.min(r,o),width:Math.abs(a-n),height:Math.abs(o-r)}},ZD=e=>{var{x1:t,y1:n,x2:r,y2:a}=e;return TE({x:t,y:n},{x:r,y:a})};class Vi{static create(t){return new Vi(t)}constructor(t){this.scale=t}get domain(){return this.scale.domain}get range(){return this.scale.range}get rangeMin(){return this.range()[0]}get rangeMax(){return this.range()[1]}get bandwidth(){return this.scale.bandwidth}apply(t){var{bandAware:n,position:r}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(t!==void 0){if(r)switch(r){case"start":return this.scale(t);case"middle":{var a=this.bandwidth?this.bandwidth()/2:0;return this.scale(t)+a}case"end":{var o=this.bandwidth?this.bandwidth():0;return this.scale(t)+o}default:return this.scale(t)}if(n){var i=this.bandwidth?this.bandwidth()/2:0;return this.scale(t)+i}return this.scale(t)}}isInRange(t){var n=this.range(),r=n[0],a=n[n.length-1];return r<=a?t>=r&&t<=a:t>=a&&t<=r}}Ob(Vi,"EPS",1e-4);var XD=e=>{var t=Object.keys(e).reduce((n,r)=>Ha(Ha({},n),{},{[r]:Vi.create(e[r])}),{});return Ha(Ha({},t),{},{apply(n){var{bandAware:r,position:a}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.fromEntries(Object.entries(n).map(o=>{var[i,s]=o;return[i,t[i].apply(s,{bandAware:r,position:a})]}))},isInRange(n){return Object.keys(n).every(r=>t[r].isInRange(n[r]))}})};function IE(e){return(e%180+180)%180}var AE=function(t){var{width:n,height:r}=t,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,o=IE(a),i=o*Math.PI/180,s=Math.atan(r/n),l=i>s&&i<Math.PI-s?r/Math.sin(i):n/Math.cos(i);return Math.abs(l)},SE={dots:[],areas:[],lines:[]},Cb=nt({name:"referenceElements",initialState:SE,reducers:{addDot:(e,t)=>{e.dots.push(t.payload)},removeDot:(e,t)=>{var n=It(e).dots.findIndex(r=>r===t.payload);n!==-1&&e.dots.splice(n,1)},addArea:(e,t)=>{e.areas.push(t.payload)},removeArea:(e,t)=>{var n=It(e).areas.findIndex(r=>r===t.payload);n!==-1&&e.areas.splice(n,1)},addLine:(e,t)=>{e.lines.push(t.payload)},removeLine:(e,t)=>{var n=It(e).lines.findIndex(r=>r===t.payload);n!==-1&&e.lines.splice(n,1)}}}),{addDot:QD,removeDot:e3,addArea:t3,removeArea:n3,addLine:r3,removeLine:a3}=Cb.actions,PE=Cb.reducer,Eb=g.createContext(void 0),NE=e=>{var{children:t}=e,[n]=g.useState("".concat(Dr("recharts"),"-clip")),r=vu();if(r==null)return null;var{x:a,y:o,width:i,height:s}=r;return g.createElement(Eb.Provider,{value:n},g.createElement("defs",null,g.createElement("clipPath",{id:n},g.createElement("rect",{x:a,y:o,height:s,width:i}))),t)},o3=()=>g.useContext(Eb);function Mb(e,t){if(t<1)return[];if(t===1)return e;for(var n=[],r=0;r<e.length;r+=t){var a=e[r];a!==void 0&&n.push(a)}return n}function jE(e,t,n){var r={width:e.width+t.width,height:e.height+t.height};return AE(r,n)}function OE(e,t,n){var r=n==="width",{x:a,y:o,width:i,height:s}=e;return t===1?{start:r?a:o,end:r?a+i:o+s}:{start:r?a+i:o+s,end:r?a:o}}function Vr(e,t,n,r,a){if(e*t<e*r||e*t>e*a)return!1;var o=n();return e*(t-e*o/2-r)>=0&&e*(t+e*o/2-a)<=0}function CE(e,t){return Mb(e,t+1)}function EE(e,t,n,r,a){for(var o=(r||[]).slice(),{start:i,end:s}=t,l=0,c=1,u=i,h=function(){var y=r==null?void 0:r[l];if(y===void 0)return{v:Mb(r,c)};var f=l,v,b=()=>(v===void 0&&(v=n(y,f)),v),w=y.coordinate,x=l===0||Vr(e,w,b,u,s);x||(l=0,u=i,c+=1),x&&(u=w+e*(b()/2+a),l+=c)},m;c<=o.length;)if(m=h(),m)return m.v;return[]}function ME(e,t,n,r,a){var o=(r||[]).slice(),i=o.length;if(i===0)return[];for(var{start:s,end:l}=t,c=1;c<=i;c++){for(var u=(i-1)%c,h=s,m=!0,p=function(){var w=r[y],x=y,T,k=()=>(T===void 0&&(T=n(w,x)),T),I=w.coordinate,C=y===u||Vr(e,I,k,h,l);if(!C)return m=!1,1;C&&(h=I+e*(k()/2+a))},y=u;y<i&&!p();y+=c);if(m){for(var f=[],v=u;v<i;v+=c)f.push(r[v]);return f}}return[]}function Um(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ye(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Um(Object(n),!0).forEach(function(r){$E(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Um(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function $E(e,t,n){return(t=DE(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function DE(e){var t=BE(e,"string");return typeof t=="symbol"?t:t+""}function BE(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function RE(e,t,n,r,a){for(var o=(r||[]).slice(),i=o.length,{start:s}=t,{end:l}=t,c=function(m){var p=o[m],y,f=()=>(y===void 0&&(y=n(p,m)),y);if(m===i-1){var v=e*(p.coordinate+e*f()/2-l);o[m]=p=Ye(Ye({},p),{},{tickCoord:v>0?p.coordinate-v*e:p.coordinate})}else o[m]=p=Ye(Ye({},p),{},{tickCoord:p.coordinate});if(p.tickCoord!=null){var b=Vr(e,p.tickCoord,f,s,l);b&&(l=p.tickCoord-e*(f()/2+a),o[m]=Ye(Ye({},p),{},{isShow:!0}))}},u=i-1;u>=0;u--)c(u);return o}function _E(e,t,n,r,a,o){var i=(r||[]).slice(),s=i.length,{start:l,end:c}=t;if(o){var u=r[s-1],h=n(u,s-1),m=e*(u.coordinate+e*h/2-c);if(i[s-1]=u=Ye(Ye({},u),{},{tickCoord:m>0?u.coordinate-m*e:u.coordinate}),u.tickCoord!=null){var p=Vr(e,u.tickCoord,()=>h,l,c);p&&(c=u.tickCoord-e*(h/2+a),i[s-1]=Ye(Ye({},u),{},{isShow:!0}))}}for(var y=o?s-1:s,f=function(w){var x=i[w],T,k=()=>(T===void 0&&(T=n(x,w)),T);if(w===0){var I=e*(x.coordinate-e*k()/2-l);i[w]=x=Ye(Ye({},x),{},{tickCoord:I<0?x.coordinate-I*e:x.coordinate})}else i[w]=x=Ye(Ye({},x),{},{tickCoord:x.coordinate});if(x.tickCoord!=null){var C=Vr(e,x.tickCoord,k,l,c);C&&(l=x.tickCoord+e*(k()/2+a),i[w]=Ye(Ye({},x),{},{isShow:!0}))}},v=0;v<y;v++)f(v);return i}function WE(e,t,n){var{tick:r,ticks:a,viewBox:o,minTickGap:i,orientation:s,interval:l,tickFormatter:c,unit:u,angle:h}=e;if(!a||!a.length||!r)return[];if(K(l)||vi.isSsr){var m;return(m=CE(a,K(l)?l:0))!==null&&m!==void 0?m:[]}var p=[],y=s==="top"||s==="bottom"?"width":"height",f=u&&y==="width"?Mr(u,{fontSize:t,letterSpacing:n}):{width:0,height:0},v=(x,T)=>{var k=typeof c=="function"?c(x.value,T):x.value;return y==="width"?jE(Mr(k,{fontSize:t,letterSpacing:n}),f,h):Mr(k,{fontSize:t,letterSpacing:n})[y]},b=a.length>=2?Qe(a[1].coordinate-a[0].coordinate):1,w=OE(o,b,y);return l==="equidistantPreserveStart"?EE(b,w,v,a,i):l==="equidistantPreserveEnd"?ME(b,w,v,a,i):(l==="preserveStart"||l==="preserveStartEnd"?p=_E(b,w,v,a,i,l==="preserveStartEnd"):p=RE(b,w,v,a,i),p.filter(x=>x.isShow))}var LE=e=>{var{ticks:t,label:n,labelGapWithTick:r=5,tickSize:a=0,tickMargin:o=0}=e,i=0;if(t){Array.from(t).forEach(u=>{if(u){var h=u.getBoundingClientRect();h.width>i&&(i=h.width)}});var s=n?n.getBoundingClientRect().width:0,l=a+o,c=i+l+s+(n?r:0);return Math.round(c)}return 0},FE=["axisLine","width","height","className","hide","ticks","axisType"];function HE(e,t){if(e==null)return{};var n,r,a=zE(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function zE(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function _n(){return _n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_n.apply(null,arguments)}function Km(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ie(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Km(Object(n),!0).forEach(function(r){YE(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Km(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function YE(e,t,n){return(t=GE(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function GE(e){var t=qE(e,"string");return typeof t=="symbol"?t:t+""}function qE(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Cn={x:0,y:0,width:0,height:0,viewBox:{x:0,y:0,width:0,height:0},orientation:"bottom",ticks:[],stroke:"#666",tickLine:!0,axisLine:!0,tick:!0,mirror:!1,minTickGap:5,tickSize:6,tickMargin:2,interval:"preserveEnd",zIndex:Ne.axis};function UE(e){var{x:t,y:n,width:r,height:a,orientation:o,mirror:i,axisLine:s,otherSvgProps:l}=e;if(!s)return null;var c=Ie(Ie(Ie({},l),Bt(s)),{},{fill:"none"});if(o==="top"||o==="bottom"){var u=+(o==="top"&&!i||o==="bottom"&&i);c=Ie(Ie({},c),{},{x1:t,y1:n+u*a,x2:t+r,y2:n+u*a})}else{var h=+(o==="left"&&!i||o==="right"&&i);c=Ie(Ie({},c),{},{x1:t+h*r,y1:n,x2:t+h*r,y2:n+a})}return g.createElement("line",_n({},c,{className:ie("recharts-cartesian-axis-line",or(s,"className"))}))}function KE(e,t,n,r,a,o,i,s,l){var c,u,h,m,p,y,f=s?-1:1,v=e.tickSize||i,b=K(e.tickCoord)?e.tickCoord:e.coordinate;switch(o){case"top":c=u=e.coordinate,m=n+ +!s*a,h=m-f*v,y=h-f*l,p=b;break;case"left":h=m=e.coordinate,u=t+ +!s*r,c=u-f*v,p=c-f*l,y=b;break;case"right":h=m=e.coordinate,u=t+ +s*r,c=u+f*v,p=c+f*l,y=b;break;default:c=u=e.coordinate,m=n+ +s*a,h=m+f*v,y=h+f*l,p=b;break}return{line:{x1:c,y1:h,x2:u,y2:m},tick:{x:p,y}}}function VE(e,t){switch(e){case"left":return t?"start":"end";case"right":return t?"end":"start";default:return"middle"}}function JE(e,t){switch(e){case"left":case"right":return"middle";case"top":return t?"start":"end";default:return t?"end":"start"}}function ZE(e){var{option:t,tickProps:n,value:r}=e,a,o=ie(n.className,"recharts-cartesian-axis-tick-value");if(g.isValidElement(t))a=g.cloneElement(t,Ie(Ie({},n),{},{className:o}));else if(typeof t=="function")a=t(Ie(Ie({},n),{},{className:o}));else{var i="recharts-cartesian-axis-tick-value";typeof t!="boolean"&&(i=ie(i,t==null?void 0:t.className)),a=g.createElement(pu,_n({},n,{className:i}),r)}return a}var XE=g.forwardRef((e,t)=>{var{ticks:n=[],tick:r,tickLine:a,stroke:o,tickFormatter:i,unit:s,padding:l,tickTextProps:c,orientation:u,mirror:h,x:m,y:p,width:y,height:f,tickSize:v,tickMargin:b,fontSize:w,letterSpacing:x,getTicksConfig:T,events:k,axisType:I}=e,C=WE(Ie(Ie({},T),{},{ticks:n}),w,x),O=VE(u,h),M=JE(u,h),$=Bt(T),A=ea(r),N={};typeof a=="object"&&(N=a);var D=Ie(Ie({},$),{},{fill:"none"},N),L=C.map(F=>Ie({entry:F},KE(F,m,p,y,f,u,v,h,b))),U=L.map(F=>{var{entry:q,line:H}=F;return g.createElement(pt,{className:"recharts-cartesian-axis-tick",key:"tick-".concat(q.value,"-").concat(q.coordinate,"-").concat(q.tickCoord)},a&&g.createElement("line",_n({},D,H,{className:ie("recharts-cartesian-axis-tick-line",or(a,"className"))})))}),_=L.map((F,q)=>{var{entry:H,tick:Z}=F,ee=Ie(Ie(Ie(Ie({textAnchor:O,verticalAnchor:M},$),{},{stroke:"none",fill:o},A),Z),{},{index:q,payload:H,visibleTicksCount:C.length,tickFormatter:i,padding:l},c);return g.createElement(pt,_n({className:"recharts-cartesian-axis-tick-label",key:"tick-label-".concat(H.value,"-").concat(H.coordinate,"-").concat(H.tickCoord)},Yl(k,H,q)),r&&g.createElement(ZE,{option:r,tickProps:ee,value:"".concat(typeof i=="function"?i(H.value,q):H.value).concat(s||"")}))});return g.createElement("g",{className:"recharts-cartesian-axis-ticks recharts-".concat(I,"-ticks")},_.length>0&&g.createElement(Ot,{zIndex:Ne.label},g.createElement("g",{className:"recharts-cartesian-axis-tick-labels recharts-".concat(I,"-tick-labels"),ref:t},_)),U.length>0&&g.createElement("g",{className:"recharts-cartesian-axis-tick-lines recharts-".concat(I,"-tick-lines")},U))}),QE=g.forwardRef((e,t)=>{var{axisLine:n,width:r,height:a,className:o,hide:i,ticks:s,axisType:l}=e,c=HE(e,FE),[u,h]=g.useState(""),[m,p]=g.useState(""),y=g.useRef(null);g.useImperativeHandle(t,()=>({getCalculatedWidth:()=>{var v;return LE({ticks:y.current,label:(v=e.labelRef)===null||v===void 0?void 0:v.current,labelGapWithTick:5,tickSize:e.tickSize,tickMargin:e.tickMargin})}}));var f=g.useCallback(v=>{if(v){var b=v.getElementsByClassName("recharts-cartesian-axis-tick-value");y.current=b;var w=b[0];if(w){var x=window.getComputedStyle(w),T=x.fontSize,k=x.letterSpacing;(T!==u||k!==m)&&(h(T),p(k))}}},[u,m]);return i||r!=null&&r<=0||a!=null&&a<=0?null:g.createElement(Ot,{zIndex:e.zIndex},g.createElement(pt,{className:ie("recharts-cartesian-axis",o)},g.createElement(UE,{x:e.x,y:e.y,width:r,height:a,orientation:e.orientation,mirror:e.mirror,axisLine:n,otherSvgProps:Bt(e)}),g.createElement(XE,{ref:f,axisType:l,events:c,fontSize:u,getTicksConfig:e,height:e.height,letterSpacing:m,mirror:e.mirror,orientation:e.orientation,padding:e.padding,stroke:e.stroke,tick:e.tick,tickFormatter:e.tickFormatter,tickLine:e.tickLine,tickMargin:e.tickMargin,tickSize:e.tickSize,tickTextProps:e.tickTextProps,ticks:s,unit:e.unit,width:e.width,x:e.x,y:e.y}),g.createElement(WO,{x:e.x,y:e.y,width:e.width,height:e.height,lowerWidth:e.width,upperWidth:e.width},g.createElement(VO,{label:e.label,labelRef:e.labelRef}),e.children)))}),bu=g.forwardRef((e,t)=>{var n=tt(e,Cn);return g.createElement(QE,_n({},n,{ref:t}))});bu.displayName="CartesianAxis";var eM={},$b=nt({name:"errorBars",initialState:eM,reducers:{addErrorBar:(e,t)=>{var{itemId:n,errorBar:r}=t.payload;e[n]||(e[n]=[]),e[n].push(r)},replaceErrorBar:(e,t)=>{var{itemId:n,prev:r,next:a}=t.payload;e[n]&&(e[n]=e[n].map(o=>o.dataKey===r.dataKey&&o.direction===r.direction?a:o))},removeErrorBar:(e,t)=>{var{itemId:n,errorBar:r}=t.payload;e[n]&&(e[n]=e[n].filter(a=>a.dataKey!==r.dataKey||a.direction!==r.direction))}}});$b.actions;var tM=$b.reducer,nM=["children"];function rM(e,t){if(e==null)return{};var n,r,a=aM(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function aM(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}var oM={data:[],xAxisId:"xAxis-0",yAxisId:"yAxis-0",dataPointFormatter:()=>({x:0,y:0,value:0}),errorBarOffset:0},iM=g.createContext(oM);function Db(e){var{children:t}=e,n=rM(e,nM);return g.createElement(iM.Provider,{value:n},t)}function wu(e,t){var n,r,a=V(c=>on(c,e)),o=V(c=>sn(c,t)),i=(n=a==null?void 0:a.allowDataOverflow)!==null&&n!==void 0?n:De.allowDataOverflow,s=(r=o==null?void 0:o.allowDataOverflow)!==null&&r!==void 0?r:Be.allowDataOverflow,l=i||s;return{needClip:l,needClipX:i,needClipY:s}}function Bb(e){var{xAxisId:t,yAxisId:n,clipPathId:r}=e,a=vu(),{needClipX:o,needClipY:i,needClip:s}=wu(t,n);if(!s||!a)return null;var{x:l,y:c,width:u,height:h}=a;return g.createElement("clipPath",{id:"clipPath-".concat(r)},g.createElement("rect",{x:o?l:l-u/2,y:i?c:c-h/2,width:o?u:u*2,height:i?h:h*2}))}var Rb=(e,t,n,r)=>fn(e,"xAxis",t,r),_b=(e,t,n,r)=>yn(e,"xAxis",t,r),Wb=(e,t,n,r)=>fn(e,"yAxis",n,r),Lb=(e,t,n,r)=>yn(e,"yAxis",n,r),sM=j([ae,Rb,Wb,_b,Lb],(e,t,n,r,a)=>vn(e,"xAxis")?lr(t,r,!1):lr(n,a,!1)),lM=(e,t,n,r,a)=>a;function cM(e){return e.type==="line"}var uM=j([$i,lM],(e,t)=>e.filter(cM).find(n=>n.id===t)),dM=j([ae,Rb,Wb,_b,Lb,uM,sM,_c],(e,t,n,r,a,o,i,s)=>{var{chartData:l,dataStartIndex:c,dataEndIndex:u}=s;if(!(o==null||t==null||n==null||r==null||a==null||r.length===0||a.length===0||i==null||e!=="horizontal"&&e!=="vertical")){var{dataKey:h,data:m}=o,p;if(m!=null&&m.length>0?p=m:p=l==null?void 0:l.slice(c,u+1),p!=null)return n$({layout:e,xAxis:t,yAxis:n,xAxisTicks:r,yAxisTicks:a,dataKey:h,bandSize:i,displayedData:p})}});function hM(e){var t=ea(e),n=3,r=2;if(t!=null){var{r:a,strokeWidth:o}=t,i=Number(a),s=Number(o);return(Number.isNaN(i)||i<0)&&(i=n),(Number.isNaN(s)||s<0)&&(s=r),{r:i,strokeWidth:s}}return{r:n,strokeWidth:r}}var mM={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wa=g;function pM(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gM=typeof Object.is=="function"?Object.is:pM,yM=wa.useSyncExternalStore,fM=wa.useRef,vM=wa.useEffect,bM=wa.useMemo,wM=wa.useDebugValue;mM.useSyncExternalStoreWithSelector=function(e,t,n,r,a){var o=fM(null);if(o.current===null){var i={hasValue:!1,value:null};o.current=i}else i=o.current;o=bM(function(){function l(p){if(!c){if(c=!0,u=p,p=r(p),a!==void 0&&i.hasValue){var y=i.value;if(a(y,p))return h=y}return h=p}if(y=h,gM(u,p))return y;var f=r(p);return a!==void 0&&a(y,f)?(u=p,y):(u=p,h=f)}var c=!1,u,h,m=n===void 0?null:n;return[function(){return l(t())},m===null?void 0:function(){return l(m())}]},[t,n,r,a]);var s=yM(e,o[0],o[1]);return vM(function(){i.hasValue=!0,i.value=s},[s]),wM(s),s};function xM(e){e()}function kM(){let e=null,t=null;return{clear(){e=null,t=null},notify(){xM(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=e;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const a=t={callback:n,next:null,prev:t};return a.prev?a.prev.next=a:e=a,function(){!r||e===null||(r=!1,a.next?a.next.prev=a.prev:t=a.prev,a.prev?a.prev.next=a.next:e=a.next)}}}}var Vm={notify(){},get:()=>[]};function TM(e,t){let n,r=Vm,a=0,o=!1;function i(f){u();const v=r.subscribe(f);let b=!1;return()=>{b||(b=!0,v(),h())}}function s(){r.notify()}function l(){y.onStateChange&&y.onStateChange()}function c(){return o}function u(){a++,n||(n=t?t.addNestedSub(l):e.subscribe(l),r=kM())}function h(){a--,n&&a===0&&(n(),n=void 0,r.clear(),r=Vm)}function m(){o||(o=!0,u())}function p(){o&&(o=!1,h())}const y={addNestedSub:i,notifyNestedSubs:s,handleChangeWrapper:l,isSubscribed:c,trySubscribe:m,tryUnsubscribe:p,getListeners:()=>r};return y}var IM=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",AM=IM(),SM=()=>typeof navigator<"u"&&navigator.product==="ReactNative",PM=SM(),NM=()=>AM||PM?g.useLayoutEffect:g.useEffect,jM=NM();function Jm(e,t){return e===t?e!==0||t!==0||1/e===1/t:e!==e&&t!==t}function OM(e,t){if(Jm(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(let a=0;a<n.length;a++)if(!Object.prototype.hasOwnProperty.call(t,n[a])||!Jm(e[n[a]],t[n[a]]))return!1;return!0}var Ts=Symbol.for("react-redux-context"),Is=typeof globalThis<"u"?globalThis:{};function CM(){if(!g.createContext)return{};const e=Is[Ts]??(Is[Ts]=new Map);let t=e.get(g.createContext);return t||(t=g.createContext(null),e.set(g.createContext,t)),t}var EM=CM();function MM(e){const{children:t,context:n,serverState:r,store:a}=e,o=g.useMemo(()=>{const l=TM(a);return{store:a,subscription:l,getServerState:r?()=>r:void 0}},[a,r]),i=g.useMemo(()=>a.getState(),[a]);jM(()=>{const{subscription:l}=o;return l.onStateChange=l.notifyNestedSubs,l.trySubscribe(),i!==a.getState()&&l.notifyNestedSubs(),()=>{l.tryUnsubscribe(),l.onStateChange=void 0}},[o,i]);const s=n||EM;return g.createElement(s.Provider,{value:o},t)}var $M=MM,DM=new Set(["axisLine","tickLine","activeBar","activeDot","activeLabel","activeShape","allowEscapeViewBox","background","cursor","dot","label","line","margin","padding","position","shape","style","tick","wrapperStyle","radius"]);function BM(e,t){return e==null&&t==null?!0:typeof e=="number"&&typeof t=="number"?e===t||e!==e&&t!==t:e===t}function Ji(e,t){var n=new Set([...Object.keys(e),...Object.keys(t)]);for(var r of n)if(DM.has(r)){if(e[r]==null&&t[r]==null)continue;if(!OM(e[r],t[r]))return!1}else if(!BM(e[r],t[r]))return!1;return!0}var RM=["id"],_M=["type","layout","connectNulls","needClip","shape"],WM=["activeDot","animateNewValues","animationBegin","animationDuration","animationEasing","connectNulls","dot","hide","isAnimationActive","label","legendType","xAxisId","yAxisId","id"];function Jr(){return Jr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Jr.apply(null,arguments)}function Zm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Mt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Zm(Object(n),!0).forEach(function(r){LM(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Zm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function LM(e,t,n){return(t=FM(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function FM(e){var t=HM(e,"string");return typeof t=="symbol"?t:t+""}function HM(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function xu(e,t){if(e==null)return{};var n,r,a=zM(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function zM(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}var YM=e=>{var{dataKey:t,name:n,stroke:r,legendType:a,hide:o}=e;return[{inactive:o,dataKey:t,type:a,color:r,value:li(n,t),payload:e}]},GM=g.memo(e=>{var{dataKey:t,data:n,stroke:r,strokeWidth:a,fill:o,name:i,hide:s,unit:l,tooltipType:c,id:u}=e,h={dataDefinedOnItem:n,positions:void 0,settings:{stroke:r,strokeWidth:a,fill:o,dataKey:t,nameKey:void 0,name:li(i,t),hide:s,type:c,color:r,unit:l,graphicalItemId:u}};return g.createElement(kb,{tooltipEntrySettings:h})}),Fb=(e,t)=>"".concat(t,"px ").concat(e-t,"px");function qM(e,t){for(var n=e.length%2!==0?[...e,0]:e,r=[],a=0;a<t;++a)r=[...r,...n];return r}var UM=(e,t,n)=>{var r=n.reduce((h,m)=>h+m);if(!r)return Fb(t,e);for(var a=Math.floor(e/r),o=e%r,i=t-e,s=[],l=0,c=0;l<n.length;c+=n[l],++l)if(c+n[l]>o){s=[...n.slice(0,l),o-c];break}var u=s.length%2===0?[0,i]:[i];return[...qM(n,a),...s,...u].map(h=>"".concat(h,"px")).join(", ")};function KM(e){var{clipPathId:t,points:n,props:r}=e,{dot:a,dataKey:o,needClip:i}=r,s=xu(r,RM),l=Bt(s);return g.createElement(YC,{points:n,dot:a,className:"recharts-line-dots",dotClassName:"recharts-line-dot",dataKey:o,baseProps:l,needClip:i,clipPathId:t})}function VM(e){var{showLabels:t,children:n,points:r}=e,a=g.useMemo(()=>r==null?void 0:r.map(o=>{var i,s,l={x:(i=o.x)!==null&&i!==void 0?i:0,y:(s=o.y)!==null&&s!==void 0?s:0,width:0,lowerWidth:0,upperWidth:0,height:0};return Mt(Mt({},l),{},{value:o.value,payload:o.payload,viewBox:l,parentViewBox:void 0,fill:void 0})}),[r]);return g.createElement(cb,{value:t?a:void 0},n)}function Xm(e){var{clipPathId:t,pathRef:n,points:r,strokeDasharray:a,props:o}=e,{type:i,layout:s,connectNulls:l,needClip:c,shape:u}=o,h=xu(o,_M),m=Mt(Mt({},Ve(h)),{},{fill:"none",className:"recharts-line-curve",clipPath:c?"url(#clipPath-".concat(t,")"):void 0,points:r,type:i,layout:s,connectNulls:l,strokeDasharray:a??o.strokeDasharray});return g.createElement(g.Fragment,null,(r==null?void 0:r.length)>1&&g.createElement(vb,Jr({shapeType:"curve",option:u},m,{pathRef:n})),g.createElement(KM,{points:r,clipPathId:t,props:o}))}function JM(e){try{return e&&e.getTotalLength&&e.getTotalLength()||0}catch{return 0}}function ZM(e){var{clipPathId:t,props:n,pathRef:r,previousPointsRef:a,longestAnimatedLengthRef:o}=e,{points:i,strokeDasharray:s,isAnimationActive:l,animationBegin:c,animationDuration:u,animationEasing:h,animateNewValues:m,width:p,height:y,onAnimationEnd:f,onAnimationStart:v}=n,b=a.current,w=wi(i,"recharts-line-"),x=g.useRef(w),[T,k]=g.useState(!1),I=!T,C=g.useCallback(()=>{typeof f=="function"&&f(),k(!1)},[f]),O=g.useCallback(()=>{typeof v=="function"&&v(),k(!0)},[v]),M=JM(r.current),$=g.useRef(0);x.current!==w&&($.current=o.current,x.current=w);var A=$.current;return g.createElement(VM,{points:i,showLabels:I},n.children,g.createElement(bi,{animationId:w,begin:c,duration:u,isActive:l,easing:h,onAnimationEnd:C,onAnimationStart:O,key:w},N=>{var D=we(A,M+A,N),L=Math.min(D,M),U;if(l)if(s){var _="".concat(s).split(/[,\s]+/gim).map(H=>parseFloat(H));U=UM(L,M,_)}else U=Fb(M,L);else U=s==null?void 0:String(s);if(N>0&&M>0&&(a.current=i,o.current=Math.max(o.current,L)),b){var F=b.length/i.length,q=N===1?i:i.map((H,Z)=>{var ee=Math.floor(Z*F);if(b[ee]){var te=b[ee];return Mt(Mt({},H),{},{x:we(te.x,H.x,N),y:we(te.y,H.y,N)})}return m?Mt(Mt({},H),{},{x:we(p*2,H.x,N),y:we(y/2,H.y,N)}):Mt(Mt({},H),{},{x:H.x,y:H.y})});return a.current=q,g.createElement(Xm,{props:n,points:q,clipPathId:t,pathRef:r,strokeDasharray:U})}return g.createElement(Xm,{props:n,points:i,clipPathId:t,pathRef:r,strokeDasharray:U})}),g.createElement(db,{label:n.label}))}function XM(e){var{clipPathId:t,props:n}=e,r=g.useRef(null),a=g.useRef(0),o=g.useRef(null);return g.createElement(ZM,{props:n,clipPathId:t,previousPointsRef:r,longestAnimatedLengthRef:a,pathRef:o})}var QM=(e,t)=>{var n,r;return{x:(n=e.x)!==null&&n!==void 0?n:void 0,y:(r=e.y)!==null&&r!==void 0?r:void 0,value:e.value,errorVal:Ae(e.payload,t)}};class e$ extends g.Component{render(){var{hide:t,dot:n,points:r,className:a,xAxisId:o,yAxisId:i,top:s,left:l,width:c,height:u,id:h,needClip:m,zIndex:p}=this.props;if(t)return null;var y=ie("recharts-line",a),f=h,{r:v,strokeWidth:b}=hM(n),w=yb(n),x=v*2+b,T=m?"url(#clipPath-".concat(w?"":"dots-").concat(f,")"):void 0;return g.createElement(Ot,{zIndex:p},g.createElement(pt,{className:y},m&&g.createElement("defs",null,g.createElement(Bb,{clipPathId:f,xAxisId:o,yAxisId:i}),!w&&g.createElement("clipPath",{id:"clipPath-dots-".concat(f)},g.createElement("rect",{x:l-x/2,y:s-x/2,width:c+x,height:u+x}))),g.createElement(Db,{xAxisId:o,yAxisId:i,data:r,dataPointFormatter:QM,errorBarOffset:0},g.createElement(XM,{props:this.props,clipPathId:f}))),g.createElement(uE,{activeDot:this.props.activeDot,points:r,mainColor:this.props.stroke,itemDataKey:this.props.dataKey,clipPath:T}))}}var Hb={activeDot:!0,animateNewValues:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",connectNulls:!1,dot:!0,fill:"#fff",hide:!1,isAnimationActive:"auto",label:!1,legendType:"line",stroke:"#3182bd",strokeWidth:1,xAxisId:0,yAxisId:0,zIndex:Ne.line,type:"linear"};function t$(e){var t=tt(e,Hb),{activeDot:n,animateNewValues:r,animationBegin:a,animationDuration:o,animationEasing:i,connectNulls:s,dot:l,hide:c,isAnimationActive:u,label:h,legendType:m,xAxisId:p,yAxisId:y,id:f}=t,v=xu(t,WM),{needClip:b}=wu(p,y),w=vu(),x=Ln(),T=Ze(),k=V($=>dM($,p,y,T,f));if(x!=="horizontal"&&x!=="vertical"||k==null||w==null)return null;var{height:I,width:C,x:O,y:M}=w;return g.createElement(e$,Jr({},v,{id:f,connectNulls:s,dot:l,activeDot:n,animateNewValues:r,animationBegin:a,animationDuration:o,animationEasing:i,isAnimationActive:u,hide:c,label:h,legendType:m,xAxisId:p,yAxisId:y,points:k,layout:x,height:I,width:C,left:O,top:M,needClip:b}))}function n$(e){var{layout:t,xAxis:n,yAxis:r,xAxisTicks:a,yAxisTicks:o,dataKey:i,bandSize:s,displayedData:l}=e;return l.map((c,u)=>{var h=Ae(c,i);if(t==="horizontal"){var m=ud({axis:n,ticks:a,bandSize:s,entry:c,index:u}),p=fe(h)?null:r.scale(h);return{x:m,y:p,value:h,payload:c}}var y=fe(h)?null:n.scale(h),f=ud({axis:r,ticks:o,bandSize:s,entry:c,index:u});return y==null||f==null?null:{x:y,y:f,value:h,payload:c}}).filter(Boolean)}function r$(e){var t=tt(e,Hb),n=Ze();return g.createElement(Ib,{id:t.id,type:"line"},r=>g.createElement(g.Fragment,null,g.createElement(Tb,{legendPayload:YM(t)}),g.createElement(GM,{dataKey:t.dataKey,data:t.data,stroke:t.stroke,strokeWidth:t.strokeWidth,fill:t.fill,name:t.name,hide:t.hide,unit:t.unit,tooltipType:t.tooltipType,id:r}),g.createElement(Sb,{type:"line",id:r,data:t.data,xAxisId:t.xAxisId,yAxisId:t.yAxisId,zAxisId:0,dataKey:t.dataKey,hide:t.hide,isPanorama:n}),g.createElement(t$,Jr({},t,{id:r}))))}var zb=g.memo(r$,Ji);zb.displayName="Line";function zn(e,t){var n,r;return(n=(r=e.graphicalItems.cartesianItems.find(a=>a.id===t))===null||r===void 0?void 0:r.xAxisId)!==null&&n!==void 0?n:Pb}function Yn(e,t){var n,r;return(n=(r=e.graphicalItems.cartesianItems.find(a=>a.id===t))===null||r===void 0?void 0:r.yAxisId)!==null&&n!==void 0?n:Pb}var a$=!0,As="Invariant failed";function o$(e,t){if(!e){if(a$)throw new Error(As);var n=typeof t=="function"?t():t,r=n?"".concat(As,": ").concat(n):As;throw new Error(r)}}function Pl(){return Pl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Pl.apply(null,arguments)}function Ro(e){return g.createElement(vb,Pl({shapeType:"rectangle",activeClassName:"recharts-active-bar"},e))}var i$=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return(r,a)=>{if(K(t))return t;var o=K(r)||fe(r);return o?t(r,a):(o||o$(!1,"minPointSize callback function received a value with type of ".concat(typeof r,". Currently only numbers or null/undefined are supported.")),n)}},s$=(e,t,n)=>n,l$=(e,t)=>t,xa=j([$i,l$],(e,t)=>e.filter(n=>n.type==="bar").find(n=>n.id===t)),c$=j([xa],e=>e==null?void 0:e.maxBarSize),u$=(e,t,n,r)=>r,d$=j([ae,$i,zn,Yn,s$],(e,t,n,r,a)=>t.filter(o=>e==="horizontal"?o.xAxisId===n:o.yAxisId===r).filter(o=>o.isPanorama===a).filter(o=>o.hide===!1).filter(o=>o.type==="bar")),h$=(e,t,n)=>{var r=ae(e),a=zn(e,t),o=Yn(e,t);if(!(a==null||o==null))return r==="horizontal"?bl(e,"yAxis",o,n):bl(e,"xAxis",a,n)},m$=(e,t)=>{var n=ae(e),r=zn(e,t),a=Yn(e,t);if(!(r==null||a==null))return n==="horizontal"?Xh(e,"xAxis",r):Xh(e,"yAxis",a)},p$=j([d$,LS,m$],dE),g$=(e,t,n)=>{var r,a,o=xa(e,t);if(o!=null){var i=zn(e,t),s=Yn(e,t);if(!(i==null||s==null)){var l=ae(e),c=Pf(e),{maxBarSize:u}=o,h=fe(u)?c:u,m,p;return l==="horizontal"?(m=fn(e,"xAxis",i,n),p=yn(e,"xAxis",i,n)):(m=fn(e,"yAxis",s,n),p=yn(e,"yAxis",s,n)),(r=(a=lr(m,p,!0))!==null&&a!==void 0?a:h)!==null&&r!==void 0?r:0}}},Yb=(e,t,n)=>{var r=ae(e),a=zn(e,t),o=Yn(e,t);if(!(a==null||o==null)){var i,s;return r==="horizontal"?(i=fn(e,"xAxis",a,n),s=yn(e,"xAxis",a,n)):(i=fn(e,"yAxis",o,n),s=yn(e,"yAxis",o,n)),lr(i,s)}},y$=j([p$,Pf,WS,Nf,g$,Yb,c$],yE),f$=(e,t,n)=>{var r=zn(e,t);if(r!=null)return fn(e,"xAxis",r,n)},v$=(e,t,n)=>{var r=Yn(e,t);if(r!=null)return fn(e,"yAxis",r,n)},b$=(e,t,n)=>{var r=zn(e,t);if(r!=null)return yn(e,"xAxis",r,n)},w$=(e,t,n)=>{var r=Yn(e,t);if(r!=null)return yn(e,"yAxis",r,n)},x$=j([y$,xa],(e,t)=>{if(!(e==null||t==null)){var n=e.find(r=>r.stackId===t.stackId&&t.dataKey!=null&&r.dataKeys.includes(t.dataKey));if(n!=null)return n.position}}),k$=j([h$,xa],fE),T$=j([_e,dc,f$,v$,b$,w$,x$,ae,PS,Yb,k$,xa,u$],(e,t,n,r,a,o,i,s,l,c,u,h,m)=>{var{chartData:p,dataStartIndex:y,dataEndIndex:f}=l;if(!(h==null||i==null||t==null||s!=="horizontal"&&s!=="vertical"||n==null||r==null||a==null||o==null||c==null)){var{data:v}=h,b;if(v!=null&&v.length>0?b=v:b=p==null?void 0:p.slice(y,f+1),b!=null)return X$({layout:s,barSettings:h,pos:i,parentViewBox:t,bandSize:c,xAxis:n,yAxis:r,xAxisTicks:a,yAxisTicks:o,stackedData:u,displayedData:b,offset:e,cells:m,dataStartIndex:y})}}),I$=["index"];function Nl(){return Nl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Nl.apply(null,arguments)}function A$(e,t){if(e==null)return{};var n,r,a=S$(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function S$(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}var Gb=g.createContext(void 0),P$=e=>{var t=g.useContext(Gb);if(t!=null)return t.stackId;if(e!=null)return MT(e)},N$=(e,t)=>"recharts-bar-stack-clip-path-".concat(e,"-").concat(t),j$=e=>{var t=g.useContext(Gb);if(t!=null){var{stackId:n}=t;return"url(#".concat(N$(n,e),")")}},O$=e=>{var{index:t}=e,n=A$(e,I$),r=j$(t);return g.createElement(pt,Nl({className:"recharts-bar-stack-layer",clipPath:r},n))},C$=["onMouseEnter","onMouseLeave","onClick"],E$=["value","background","tooltipPosition"],M$=["id"],$$=["onMouseEnter","onClick","onMouseLeave"];function en(){return en=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},en.apply(null,arguments)}function Qm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ue(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Qm(Object(n),!0).forEach(function(r){D$(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function D$(e,t,n){return(t=B$(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function B$(e){var t=R$(e,"string");return typeof t=="symbol"?t:t+""}function R$(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function _o(e,t){if(e==null)return{};var n,r,a=_$(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function _$(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}var W$=e=>{var{dataKey:t,name:n,fill:r,legendType:a,hide:o}=e;return[{inactive:o,dataKey:t,type:a,color:r,value:li(n,t),payload:e}]},L$=g.memo(e=>{var{dataKey:t,stroke:n,strokeWidth:r,fill:a,name:o,hide:i,unit:s,tooltipType:l,id:c}=e,u={dataDefinedOnItem:void 0,positions:void 0,settings:{stroke:n,strokeWidth:r,fill:a,dataKey:t,nameKey:void 0,name:li(o,t),hide:i,type:l,color:a,unit:s,graphicalItemId:c}};return g.createElement(kb,{tooltipEntrySettings:u})});function F$(e){var t=V(Rn),{data:n,dataKey:r,background:a,allOtherBarProps:o}=e,{onMouseEnter:i,onMouseLeave:s,onClick:l}=o,c=_o(o,C$),u=bb(i,r,o.id),h=wb(s),m=xb(l,r,o.id);if(!a||n==null)return null;var p=ea(a);return g.createElement(Ot,{zIndex:vE(a,Ne.barBackground)},n.map((y,f)=>{var{value:v,background:b,tooltipPosition:w}=y,x=_o(y,E$);if(!b)return null;var T=u(y,f),k=h(y,f),I=m(y,f),C=Ue(Ue(Ue(Ue(Ue({option:a,isActive:String(f)===t},x),{},{fill:"#eee"},b),p),Yl(c,y,f)),{},{onMouseEnter:T,onMouseLeave:k,onClick:I,dataKey:r,index:f,className:"recharts-bar-background-rectangle"});return g.createElement(Ro,en({key:"background-bar-".concat(f)},C))}))}function H$(e){var{showLabels:t,children:n,rects:r}=e,a=r==null?void 0:r.map(o=>{var i={x:o.x,y:o.y,width:o.width,lowerWidth:o.width,upperWidth:o.width,height:o.height};return Ue(Ue({},i),{},{value:o.value,payload:o.payload,parentViewBox:o.parentViewBox,viewBox:i,fill:o.fill})});return g.createElement(cb,{value:t?a:void 0},n)}function z$(e){var{shape:t,activeBar:n,baseProps:r,entry:a,index:o,dataKey:i}=e,s=V(Rn),l=V(_v),c=n&&String(o)===s&&(l==null||i===l),u=c?n:t;return c?g.createElement(Ot,{zIndex:Ne.activeBar},g.createElement(Ro,en({},r,{name:String(r.name)},a,{isActive:c,option:u,index:o,dataKey:i}))):g.createElement(Ro,en({},r,{name:String(r.name)},a,{isActive:c,option:u,index:o,dataKey:i}))}function Y$(e){var{shape:t,baseProps:n,entry:r,index:a,dataKey:o}=e;return g.createElement(Ro,en({},n,{name:String(n.name)},r,{isActive:!1,option:t,index:a,dataKey:o}))}function G$(e){var t,{data:n,props:r}=e,a=(t=Bt(r))!==null&&t!==void 0?t:{},{id:o}=a,i=_o(a,M$),{shape:s,dataKey:l,activeBar:c}=r,{onMouseEnter:u,onClick:h,onMouseLeave:m}=r,p=_o(r,$$),y=bb(u,l,o),f=wb(m),v=xb(h,l,o);return n?g.createElement(g.Fragment,null,n.map((b,w)=>g.createElement(O$,en({index:w,key:"rectangle-".concat(b==null?void 0:b.x,"-").concat(b==null?void 0:b.y,"-").concat(b==null?void 0:b.value,"-").concat(w),className:"recharts-bar-rectangle"},Yl(p,b,w),{onMouseEnter:y(b,w),onMouseLeave:f(b,w),onClick:v(b,w)}),c?g.createElement(z$,{shape:s,activeBar:c,baseProps:i,entry:b,index:w,dataKey:l}):g.createElement(Y$,{shape:s,baseProps:i,entry:b,index:w,dataKey:l})))):null}function q$(e){var{props:t,previousRectanglesRef:n}=e,{data:r,layout:a,isAnimationActive:o,animationBegin:i,animationDuration:s,animationEasing:l,onAnimationEnd:c,onAnimationStart:u}=t,h=n.current,m=wi(t,"recharts-bar-"),[p,y]=g.useState(!1),f=!p,v=g.useCallback(()=>{typeof c=="function"&&c(),y(!1)},[c]),b=g.useCallback(()=>{typeof u=="function"&&u(),y(!0)},[u]);return g.createElement(H$,{showLabels:f,rects:r},g.createElement(bi,{animationId:m,begin:i,duration:s,isActive:o,easing:l,onAnimationEnd:v,onAnimationStart:b,key:m},w=>{var x=w===1?r:r==null?void 0:r.map((T,k)=>{var I=h&&h[k];if(I)return Ue(Ue({},T),{},{x:we(I.x,T.x,w),y:we(I.y,T.y,w),width:we(I.width,T.width,w),height:we(I.height,T.height,w)});if(a==="horizontal"){var C=we(0,T.height,w),O=we(T.stackedBarStart,T.y,w);return Ue(Ue({},T),{},{y:O,height:C})}var M=we(0,T.width,w),$=we(T.stackedBarStart,T.x,w);return Ue(Ue({},T),{},{width:M,x:$})});return w>0&&(n.current=x??null),x==null?null:g.createElement(pt,null,g.createElement(G$,{props:t,data:x}))}),g.createElement(db,{label:t.label}),t.children)}function U$(e){var t=g.useRef(null);return g.createElement(q$,{previousRectanglesRef:t,props:e})}var qb=0,K$=(e,t)=>{var n=Array.isArray(e.value)?e.value[1]:e.value;return{x:e.x,y:e.y,value:n,errorVal:Ae(e,t)}};class V$ extends g.PureComponent{render(){var{hide:t,data:n,dataKey:r,className:a,xAxisId:o,yAxisId:i,needClip:s,background:l,id:c}=this.props;if(t||n==null)return null;var u=ie("recharts-bar",a),h=c;return g.createElement(pt,{className:u,id:c},s&&g.createElement("defs",null,g.createElement(Bb,{clipPathId:h,xAxisId:o,yAxisId:i})),g.createElement(pt,{className:"recharts-bar-rectangles",clipPath:s?"url(#clipPath-".concat(h,")"):void 0},g.createElement(F$,{data:n,dataKey:r,background:l,allOtherBarProps:this.props}),g.createElement(U$,this.props)))}}var J$={activeBar:!1,animationBegin:0,animationDuration:400,animationEasing:"ease",background:!1,hide:!1,isAnimationActive:"auto",label:!1,legendType:"rect",minPointSize:qb,xAxisId:0,yAxisId:0,zIndex:Ne.bar};function Z$(e){var{xAxisId:t,yAxisId:n,hide:r,legendType:a,minPointSize:o,activeBar:i,animationBegin:s,animationDuration:l,animationEasing:c,isAnimationActive:u}=e,{needClip:h}=wu(t,n),m=Ln(),p=Ze(),y=cC(e.children,mu),f=V(w=>T$(w,e.id,p,y));if(m!=="vertical"&&m!=="horizontal")return null;var v,b=f==null?void 0:f[0];return b==null||b.height==null||b.width==null?v=0:v=m==="vertical"?b.height/2:b.width/2,g.createElement(Db,{xAxisId:t,yAxisId:n,data:f,dataPointFormatter:K$,errorBarOffset:v},g.createElement(V$,en({},e,{layout:m,needClip:h,data:f,xAxisId:t,yAxisId:n,hide:r,legendType:a,minPointSize:o,activeBar:i,animationBegin:s,animationDuration:l,animationEasing:c,isAnimationActive:u})))}function X$(e){var{layout:t,barSettings:{dataKey:n,minPointSize:r},pos:a,bandSize:o,xAxis:i,yAxis:s,xAxisTicks:l,yAxisTicks:c,stackedData:u,displayedData:h,offset:m,cells:p,parentViewBox:y,dataStartIndex:f}=e,v=t==="horizontal"?s:i,b=u?v.scale.domain():null,w=$T({numericAxis:v}),x=v.scale(w);return h.map((T,k)=>{var I,C,O,M,$,A;if(u){var N=u[k+f];if(N==null)return null;I=NT(N,b)}else I=Ae(T,n),Array.isArray(I)||(I=[w,I]);var D=i$(r,qb)(I[1],k);if(t==="horizontal"){var L,[U,_]=[s.scale(I[0]),s.scale(I[1])];C=dd({axis:i,ticks:l,bandSize:o,offset:a.offset,entry:T,index:k}),O=(L=_??U)!==null&&L!==void 0?L:void 0,M=a.size;var F=U-_;if($=At(F)?0:F,A={x:C,y:m.top,width:M,height:m.height},Math.abs(D)>0&&Math.abs($)<Math.abs(D)){var q=Qe($||D)*(Math.abs(D)-Math.abs($));O-=q,$+=q}}else{var[H,Z]=[i.scale(I[0]),i.scale(I[1])];if(C=H,O=dd({axis:s,ticks:c,bandSize:o,offset:a.offset,entry:T,index:k}),M=Z-H,$=a.size,A={x:m.left,y:O,width:m.width,height:$},Math.abs(D)>0&&Math.abs(M)<Math.abs(D)){var ee=Qe(M||D)*(Math.abs(D)-Math.abs(M));M+=ee}}if(C==null||O==null||M==null||$==null)return null;var te=Ue(Ue({},T),{},{stackedBarStart:x,x:C,y:O,width:M,height:$,value:u?I:I[1],payload:T,background:A,tooltipPosition:{x:C+M/2,y:O+$/2},parentViewBox:y},p&&p[k]&&p[k].props);return te}).filter(Boolean)}function Q$(e){var t=tt(e,J$),n=P$(t.stackId),r=Ze();return g.createElement(Ib,{id:t.id,type:"bar"},a=>g.createElement(g.Fragment,null,g.createElement(Tb,{legendPayload:W$(t)}),g.createElement(L$,{dataKey:t.dataKey,stroke:t.stroke,strokeWidth:t.strokeWidth,fill:t.fill,name:t.name,hide:t.hide,unit:t.unit,tooltipType:t.tooltipType,id:a}),g.createElement(Sb,{type:"bar",id:a,data:void 0,xAxisId:t.xAxisId,yAxisId:t.yAxisId,zAxisId:0,dataKey:t.dataKey,stackId:n,hide:t.hide,barSize:t.barSize,minPointSize:t.minPointSize,maxBarSize:t.maxBarSize,isPanorama:r}),g.createElement(Ot,{zIndex:t.zIndex},g.createElement(Z$,en({},t,{id:a})))))}var Ub=g.memo(Q$,Ji);Ub.displayName="Bar";var e5=["domain","range"],t5=["domain","range"];function ep(e,t){if(e==null)return{};var n,r,a=n5(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function n5(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function tp(e,t){return e===t?!0:Array.isArray(e)&&e.length===2&&Array.isArray(t)&&t.length===2?e[0]===t[0]&&e[1]===t[1]:!1}function Kb(e,t){if(e===t)return!0;var{domain:n,range:r}=e,a=ep(e,e5),{domain:o,range:i}=t,s=ep(t,t5);return!tp(n,o)||!tp(r,i)?!1:Ji(a,s)}var r5=["dangerouslySetInnerHTML","ticks","scale"],a5=["id","scale"];function jl(){return jl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},jl.apply(null,arguments)}function np(e,t){if(e==null)return{};var n,r,a=o5(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function o5(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function i5(e){var t=ke(),n=g.useRef(null);return g.useLayoutEffect(()=>{n.current===null?t(VC(e)):n.current!==e&&t(JC({prev:n.current,next:e})),n.current=e},[e,t]),g.useLayoutEffect(()=>()=>{n.current&&(t(ZC(n.current)),n.current=null)},[t]),null}var s5=e=>{var{xAxisId:t,className:n}=e,r=V(dc),a=Ze(),o="xAxis",i=V(m=>vv(m,o,t,a)),s=V(m=>pv(m,t)),l=V(m=>RP(m,t)),c=V(m=>Rf(m,t));if(s==null||l==null||c==null)return null;var u=np(e,r5),h=np(c,a5);return g.createElement(bu,jl({},u,h,{x:l.x,y:l.y,width:s.width,height:s.height,className:ie("recharts-".concat(o," ").concat(o),n),viewBox:r,ticks:i,axisType:o}))},l5={allowDataOverflow:De.allowDataOverflow,allowDecimals:De.allowDecimals,allowDuplicatedCategory:De.allowDuplicatedCategory,angle:De.angle,axisLine:Cn.axisLine,height:De.height,hide:!1,includeHidden:De.includeHidden,interval:De.interval,minTickGap:De.minTickGap,mirror:De.mirror,orientation:De.orientation,padding:De.padding,reversed:De.reversed,scale:De.scale,tick:De.tick,tickCount:De.tickCount,tickLine:Cn.tickLine,tickSize:Cn.tickSize,type:De.type,xAxisId:0},c5=e=>{var t=tt(e,l5);return g.createElement(g.Fragment,null,g.createElement(i5,{allowDataOverflow:t.allowDataOverflow,allowDecimals:t.allowDecimals,allowDuplicatedCategory:t.allowDuplicatedCategory,angle:t.angle,dataKey:t.dataKey,domain:t.domain,height:t.height,hide:t.hide,id:t.xAxisId,includeHidden:t.includeHidden,interval:t.interval,minTickGap:t.minTickGap,mirror:t.mirror,name:t.name,orientation:t.orientation,padding:t.padding,reversed:t.reversed,scale:t.scale,tick:t.tick,tickCount:t.tickCount,tickFormatter:t.tickFormatter,ticks:t.ticks,type:t.type,unit:t.unit}),g.createElement(s5,t))},Vb=g.memo(c5,Kb);Vb.displayName="XAxis";var u5=["dangerouslySetInnerHTML","ticks","scale"],d5=["id","scale"];function Ol(){return Ol=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ol.apply(null,arguments)}function rp(e,t){if(e==null)return{};var n,r,a=h5(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function h5(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function m5(e){var t=ke(),n=g.useRef(null);return g.useLayoutEffect(()=>{n.current===null?t(XC(e)):n.current!==e&&t(QC({prev:n.current,next:e})),n.current=e},[e,t]),g.useLayoutEffect(()=>()=>{n.current&&(t(eE(n.current)),n.current=null)},[t]),null}var p5=e=>{var{yAxisId:t,className:n,width:r,label:a}=e,o=g.useRef(null),i=g.useRef(null),s=V(dc),l=Ze(),c=ke(),u="yAxis",h=V(b=>gv(b,t)),m=V(b=>WP(b,t)),p=V(b=>vv(b,u,t,l)),y=V(b=>_f(b,t));if(g.useLayoutEffect(()=>{if(!(r!=="auto"||!h||gu(a)||g.isValidElement(a)||y==null)){var b=o.current;if(b){var w=b.getCalculatedWidth();Math.round(h.width)!==Math.round(w)&&c(tE({id:t,width:w}))}}},[p,h,c,a,t,r,y]),h==null||m==null||y==null)return null;var f=rp(e,u5),v=rp(y,d5);return g.createElement(bu,Ol({},f,v,{ref:o,labelRef:i,x:m.x,y:m.y,tickTextProps:r==="auto"?{width:void 0}:{width:r},width:h.width,height:h.height,className:ie("recharts-".concat(u," ").concat(u),n),viewBox:s,ticks:p,axisType:u}))},g5={allowDataOverflow:Be.allowDataOverflow,allowDecimals:Be.allowDecimals,allowDuplicatedCategory:Be.allowDuplicatedCategory,angle:Be.angle,axisLine:Cn.axisLine,hide:!1,includeHidden:Be.includeHidden,interval:Be.interval,minTickGap:Be.minTickGap,mirror:Be.mirror,orientation:Be.orientation,padding:Be.padding,reversed:Be.reversed,scale:Be.scale,tick:Be.tick,tickCount:Be.tickCount,tickLine:Cn.tickLine,tickSize:Cn.tickSize,type:Be.type,width:Be.width,yAxisId:0},y5=e=>{var t=tt(e,g5);return g.createElement(g.Fragment,null,g.createElement(m5,{interval:t.interval,id:t.yAxisId,scale:t.scale,type:t.type,domain:t.domain,allowDataOverflow:t.allowDataOverflow,dataKey:t.dataKey,allowDuplicatedCategory:t.allowDuplicatedCategory,allowDecimals:t.allowDecimals,tickCount:t.tickCount,padding:t.padding,includeHidden:t.includeHidden,reversed:t.reversed,ticks:t.ticks,width:t.width,orientation:t.orientation,mirror:t.mirror,hide:t.hide,unit:t.unit,name:t.name,angle:t.angle,minTickGap:t.minTickGap,tick:t.tick,tickFormatter:t.tickFormatter}),g.createElement(p5,t))},Cl=g.memo(y5,Kb);Cl.displayName="YAxis";var f5=(e,t)=>t,ku=j([f5,ae,Df,Ce,$v,ln,ej,_e],sj),Tu=e=>{var t=e.currentTarget.getBoundingClientRect(),n=t.width/e.currentTarget.offsetWidth,r=t.height/e.currentTarget.offsetHeight;return{chartX:Math.round((e.clientX-t.left)/n),chartY:Math.round((e.clientY-t.top)/r)}},Jb=gt("mouseClick"),Zb=oa();Zb.startListening({actionCreator:Jb,effect:(e,t)=>{var n=e.payload,r=ku(t.getState(),Tu(n));(r==null?void 0:r.activeIndex)!=null&&t.dispatch(QP({activeIndex:r.activeIndex,activeDataKey:void 0,activeCoordinate:r.activeCoordinate}))}});var El=gt("mouseMove"),Xb=oa(),za=null;Xb.startListening({actionCreator:El,effect:(e,t)=>{var n=e.payload;za!==null&&cancelAnimationFrame(za);var r=Tu(n);za=requestAnimationFrame(()=>{var a=t.getState(),o=ru(a,a.tooltip.settings.shared);if(o==="axis"){var i=ku(a,r);(i==null?void 0:i.activeIndex)!=null?t.dispatch(Sv({activeIndex:i.activeIndex,activeDataKey:void 0,activeCoordinate:i.activeCoordinate})):t.dispatch(Av())}za=null})}});function v5(e,t){return t instanceof HTMLElement?"HTMLElement <".concat(t.tagName,' class="').concat(t.className,'">'):t===window?"global.window":e==="children"&&typeof t=="object"&&t!==null?"<<CHILDREN>>":t}var ap={accessibilityLayer:!0,barCategoryGap:"10%",barGap:4,barSize:void 0,className:void 0,maxBarSize:void 0,stackOffset:"none",syncId:void 0,syncMethod:"index",baseValue:void 0,reverseStackOrder:!1},Qb=nt({name:"rootProps",initialState:ap,reducers:{updateOptions:(e,t)=>{var n;e.accessibilityLayer=t.payload.accessibilityLayer,e.barCategoryGap=t.payload.barCategoryGap,e.barGap=(n=t.payload.barGap)!==null&&n!==void 0?n:ap.barGap,e.barSize=t.payload.barSize,e.maxBarSize=t.payload.maxBarSize,e.stackOffset=t.payload.stackOffset,e.syncId=t.payload.syncId,e.syncMethod=t.payload.syncMethod,e.className=t.payload.className,e.baseValue=t.payload.baseValue,e.reverseStackOrder=t.payload.reverseStackOrder}}}),b5=Qb.reducer,{updateOptions:w5}=Qb.actions,e0=nt({name:"polarOptions",initialState:null,reducers:{updatePolarOptions:(e,t)=>t.payload}});e0.actions;var x5=e0.reducer,t0=gt("keyDown"),n0=gt("focus"),Iu=oa();Iu.startListening({actionCreator:t0,effect:(e,t)=>{var n=t.getState(),r=n.rootProps.accessibilityLayer!==!1;if(r){var{keyboardInteraction:a}=n.tooltip,o=e.payload;if(!(o!=="ArrowRight"&&o!=="ArrowLeft"&&o!=="Enter")){var i=au(a,wr(n),pa(n),va(n)),s=i==null?-1:Number(i);if(!(!Number.isFinite(s)||s<0)){var l=ln(n);if(o==="Enter"){var c=Eo(n,"axis","hover",String(a.index));t.dispatch(xl({active:!a.active,activeIndex:a.index,activeCoordinate:c}));return}var u=zP(n),h=u==="left-to-right"?1:-1,m=o==="ArrowRight"?1:-1,p=s+m*h;if(!(l==null||p>=l.length||p<0)){var y=Eo(n,"axis","hover",String(p));t.dispatch(xl({active:!0,activeIndex:p.toString(),activeCoordinate:y}))}}}}}});Iu.startListening({actionCreator:n0,effect:(e,t)=>{var n=t.getState(),r=n.rootProps.accessibilityLayer!==!1;if(r){var{keyboardInteraction:a}=n.tooltip;if(!a.active&&a.index==null){var o="0",i=Eo(n,"axis","hover",String(o));t.dispatch(xl({active:!0,activeIndex:o,activeCoordinate:i}))}}}});var ut=gt("externalEvent"),r0=oa(),Ss=new Map;r0.startListening({actionCreator:ut,effect:(e,t)=>{var{handler:n,reactEvent:r}=e.payload;if(n!=null){r.persist();var a=r.type,o=Ss.get(a);o!==void 0&&cancelAnimationFrame(o);var i=requestAnimationFrame(()=>{try{var s=t.getState(),l={activeCoordinate:_N(s),activeDataKey:_v(s),activeIndex:Rn(s),activeLabel:Rv(s),activeTooltipIndex:Rn(s),isTooltipActive:WN(s)};n(l,r)}finally{Ss.delete(a)}});Ss.set(a,i)}}});var k5=j([vr],e=>e.tooltipItemPayloads),T5=j([k5,fa,(e,t)=>t,(e,t,n)=>n],(e,t,n,r)=>{var a=e.find(s=>s.settings.graphicalItemId===r);if(a!=null){var{positions:o}=a;if(o!=null){var i=t(o,n);return i}}}),a0=gt("touchMove"),o0=oa();o0.startListening({actionCreator:a0,effect:(e,t)=>{var n=e.payload;if(!(n.touches==null||n.touches.length===0)){var r=t.getState(),a=ru(r,r.tooltip.settings.shared);if(a==="axis"){var o=n.touches[0];if(o==null)return;var i=ku(r,Tu({clientX:o.clientX,clientY:o.clientY,currentTarget:n.currentTarget}));(i==null?void 0:i.activeIndex)!=null&&t.dispatch(Sv({activeIndex:i.activeIndex,activeDataKey:void 0,activeCoordinate:i.activeCoordinate}))}else if(a==="item"){var s,l=n.touches[0];if(document.elementFromPoint==null||l==null)return;var c=document.elementFromPoint(l.clientX,l.clientY);if(!c||!c.getAttribute)return;var u=c.getAttribute(FT),h=(s=c.getAttribute(HT))!==null&&s!==void 0?s:void 0,m=br(r).find(f=>f.id===h);if(u==null||m==null||h==null)return;var{dataKey:p}=m,y=T5(r,u,h);t.dispatch(Iv({activeDataKey:p,activeIndex:u,activeCoordinate:y,activeGraphicalItemId:h}))}}}});var I5=Pg({brush:wE,cartesianAxis:nE,chartData:_j,errorBars:tM,graphicalItems:$C,layout:kT,legend:M1,options:Mj,polarAxis:oC,polarOptions:x5,referenceElements:PE,rootProps:b5,tooltip:eN,zIndex:xj}),A5=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"Chart";return Uk({reducer:I5,preloadedState:t,middleware:r=>{var a;return r({serializableCheck:!1,immutableCheck:!["commonjs","es6","production"].includes((a="es6")!==null&&a!==void 0?a:"")}).concat([Zb.middleware,Xb.middleware,Iu.middleware,r0.middleware,o0.middleware])},enhancers:r=>{var a=r;return typeof r=="function"&&(a=r()),a.concat(Hg({type:"raf"}))},devTools:{serialize:{replacer:v5},name:"recharts-".concat(n)}})};function S5(e){var{preloadedState:t,children:n,reduxStoreName:r}=e,a=Ze(),o=g.useRef(null);if(a)return n;o.current==null&&(o.current=A5(t,r));var i=ec;return g.createElement($M,{context:i,store:o.current},n)}function P5(e){var{layout:t,margin:n}=e,r=ke(),a=Ze();return g.useEffect(()=>{a||(r(bT(t)),r(vT(n)))},[r,a,t,n]),null}var N5=g.memo(P5,Ji);function j5(e){var t=ke();return g.useEffect(()=>{t(w5(e))},[t,e]),null}function op(e){var{zIndex:t,isPanorama:n}=e,r=g.useRef(null),a=ke();return g.useLayoutEffect(()=>(r.current&&a(bj({zIndex:t,element:r.current,isPanorama:n})),()=>{a(wj({zIndex:t,isPanorama:n}))}),[a,t,n]),g.createElement("g",{tabIndex:-1,ref:r})}function ip(e){var{children:t,isPanorama:n}=e,r=V(cj);if(!r||r.length===0)return t;var a=r.filter(i=>i<0),o=r.filter(i=>i>0);return g.createElement(g.Fragment,null,a.map(i=>g.createElement(op,{key:i,zIndex:i,isPanorama:n})),t,o.map(i=>g.createElement(op,{key:i,zIndex:i,isPanorama:n})))}var O5=["children"];function C5(e,t){if(e==null)return{};var n,r,a=E5(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function E5(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Wo(){return Wo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Wo.apply(null,arguments)}var M5={width:"100%",height:"100%",display:"block"},$5=g.forwardRef((e,t)=>{var n=g1(),r=y1(),a=fy();if(!pn(n)||!pn(r))return null;var{children:o,otherAttributes:i,title:s,desc:l}=e,c,u;return i!=null&&(typeof i.tabIndex=="number"?c=i.tabIndex:c=a?0:void 0,typeof i.role=="string"?u=i.role:u=a?"application":void 0),g.createElement(Np,Wo({},i,{title:s,desc:l,role:u,tabIndex:c,width:n,height:r,style:M5,ref:t}),o)}),D5=e=>{var{children:t}=e,n=V(hi);if(!n)return null;var{width:r,height:a,y:o,x:i}=n;return g.createElement(Np,{width:r,height:a,x:i,y:o},t)},sp=g.forwardRef((e,t)=>{var{children:n}=e,r=C5(e,O5),a=Ze();return a?g.createElement(D5,null,g.createElement(ip,{isPanorama:!0},n)):g.createElement($5,Wo({ref:t},r),g.createElement(ip,{isPanorama:!1},n))});function B5(){var e=ke(),[t,n]=g.useState(null),r=V(LT);return g.useEffect(()=>{if(t!=null){var a=t.getBoundingClientRect(),o=a.width/t.offsetWidth;ve(o)&&o!==r&&e(xT(o))}},[t,e,r]),n}function lp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function R5(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?lp(Object(n),!0).forEach(function(r){_5(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):lp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function _5(e,t,n){return(t=W5(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function W5(e){var t=L5(e,"string");return typeof t=="symbol"?t:t+""}function L5(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Wn(){return Wn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Wn.apply(null,arguments)}var F5=()=>(Uj(),null);function Lo(e){if(typeof e=="number")return e;if(typeof e=="string"){var t=parseFloat(e);if(!Number.isNaN(t))return t}return 0}var H5=g.forwardRef((e,t)=>{var n,r,a=g.useRef(null),[o,i]=g.useState({containerWidth:Lo((n=e.style)===null||n===void 0?void 0:n.width),containerHeight:Lo((r=e.style)===null||r===void 0?void 0:r.height)}),s=g.useCallback((c,u)=>{i(h=>{var m=Math.round(c),p=Math.round(u);return h.containerWidth===m&&h.containerHeight===p?h:{containerWidth:m,containerHeight:p}})},[]),l=g.useCallback(c=>{if(typeof t=="function"&&t(c),c!=null&&typeof ResizeObserver<"u"){var{width:u,height:h}=c.getBoundingClientRect();s(u,h);var m=y=>{var{width:f,height:v}=y[0].contentRect;s(f,v)},p=new ResizeObserver(m);p.observe(c),a.current=p}},[t,s]);return g.useEffect(()=>()=>{var c=a.current;c!=null&&c.disconnect()},[s]),g.createElement(g.Fragment,null,g.createElement(pi,{width:o.containerWidth,height:o.containerHeight}),g.createElement("div",Wn({ref:l},e)))}),z5=g.forwardRef((e,t)=>{var{width:n,height:r}=e,[a,o]=g.useState({containerWidth:Lo(n),containerHeight:Lo(r)}),i=g.useCallback((l,c)=>{o(u=>{var h=Math.round(l),m=Math.round(c);return u.containerWidth===h&&u.containerHeight===m?u:{containerWidth:h,containerHeight:m}})},[]),s=g.useCallback(l=>{if(typeof t=="function"&&t(l),l!=null){var{width:c,height:u}=l.getBoundingClientRect();i(c,u)}},[t,i]);return g.createElement(g.Fragment,null,g.createElement(pi,{width:a.containerWidth,height:a.containerHeight}),g.createElement("div",Wn({ref:s},e)))}),Y5=g.forwardRef((e,t)=>{var{width:n,height:r}=e;return g.createElement(g.Fragment,null,g.createElement(pi,{width:n,height:r}),g.createElement("div",Wn({ref:t},e)))}),G5=g.forwardRef((e,t)=>{var{width:n,height:r}=e;return Kt(n)||Kt(r)?g.createElement(z5,Wn({},e,{ref:t})):g.createElement(Y5,Wn({},e,{ref:t}))});function q5(e){return e===!0?H5:G5}var U5=g.forwardRef((e,t)=>{var{children:n,className:r,height:a,onClick:o,onContextMenu:i,onDoubleClick:s,onMouseDown:l,onMouseEnter:c,onMouseLeave:u,onMouseMove:h,onMouseUp:m,onTouchEnd:p,onTouchMove:y,onTouchStart:f,style:v,width:b,responsive:w,dispatchTouchEvents:x=!0}=e,T=g.useRef(null),k=ke(),[I,C]=g.useState(null),[O,M]=g.useState(null),$=B5(),A=hc(),N=(A==null?void 0:A.width)>0?A.width:b,D=(A==null?void 0:A.height)>0?A.height:a,L=g.useCallback(P=>{$(P),typeof t=="function"&&t(P),C(P),M(P),P!=null&&(T.current=P)},[$,t,C,M]),U=g.useCallback(P=>{k(Jb(P)),k(ut({handler:o,reactEvent:P}))},[k,o]),_=g.useCallback(P=>{k(El(P)),k(ut({handler:c,reactEvent:P}))},[k,c]),F=g.useCallback(P=>{k(Av()),k(ut({handler:u,reactEvent:P}))},[k,u]),q=g.useCallback(P=>{k(El(P)),k(ut({handler:h,reactEvent:P}))},[k,h]),H=g.useCallback(()=>{k(n0())},[k]),Z=g.useCallback(P=>{k(t0(P.key))},[k]),ee=g.useCallback(P=>{k(ut({handler:i,reactEvent:P}))},[k,i]),te=g.useCallback(P=>{k(ut({handler:s,reactEvent:P}))},[k,s]),Te=g.useCallback(P=>{k(ut({handler:l,reactEvent:P}))},[k,l]),de=g.useCallback(P=>{k(ut({handler:m,reactEvent:P}))},[k,m]),E=g.useCallback(P=>{k(ut({handler:f,reactEvent:P}))},[k,f]),z=g.useCallback(P=>{x&&k(a0(P)),k(ut({handler:y,reactEvent:P}))},[k,x,y]),B=g.useCallback(P=>{k(ut({handler:p,reactEvent:P}))},[k,p]),Y=q5(w);return g.createElement(Gv.Provider,{value:I},g.createElement(Lw.Provider,{value:O},g.createElement(Y,{width:N??(v==null?void 0:v.width),height:D??(v==null?void 0:v.height),className:ie("recharts-wrapper",r),style:R5({position:"relative",cursor:"default",width:N,height:D},v),onClick:U,onContextMenu:ee,onDoubleClick:te,onFocus:H,onKeyDown:Z,onMouseDown:Te,onMouseEnter:_,onMouseLeave:F,onMouseMove:q,onMouseUp:de,onTouchEnd:B,onTouchMove:z,onTouchStart:E,ref:L},g.createElement(F5,null),n)))}),K5=["width","height","responsive","children","className","style","compact","title","desc"];function V5(e,t){if(e==null)return{};var n,r,a=J5(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function J5(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}var Z5=g.forwardRef((e,t)=>{var{width:n,height:r,responsive:a,children:o,className:i,style:s,compact:l,title:c,desc:u}=e,h=V5(e,K5),m=Bt(h);return l?g.createElement(g.Fragment,null,g.createElement(pi,{width:n,height:r}),g.createElement(sp,{otherAttributes:m,title:c,desc:u},o)):g.createElement(U5,{className:i,style:s,width:n,height:r,responsive:a??!1,onClick:e.onClick,onMouseLeave:e.onMouseLeave,onMouseEnter:e.onMouseEnter,onMouseMove:e.onMouseMove,onMouseDown:e.onMouseDown,onMouseUp:e.onMouseUp,onContextMenu:e.onContextMenu,onDoubleClick:e.onDoubleClick,onTouchStart:e.onTouchStart,onTouchMove:e.onTouchMove,onTouchEnd:e.onTouchEnd},g.createElement(sp,{otherAttributes:m,title:c,desc:u,ref:t},g.createElement(NE,null,o)))});function Ml(){return Ml=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ml.apply(null,arguments)}var X5={top:5,right:5,bottom:5,left:5},Q5={accessibilityLayer:!0,barCategoryGap:"10%",barGap:4,layout:"horizontal",margin:X5,responsive:!1,reverseStackOrder:!1,stackOffset:"none",syncMethod:"index"},eD=g.forwardRef(function(t,n){var r,a=tt(t.categoricalChartProps,Q5),{chartName:o,defaultTooltipEventType:i,validateTooltipEventTypes:s,tooltipPayloadSearcher:l,categoricalChartProps:c}=t,u={chartName:o,defaultTooltipEventType:i,validateTooltipEventTypes:s,tooltipPayloadSearcher:l,eventEmitter:void 0};return g.createElement(S5,{preloadedState:{options:u},reduxStoreName:(r=c.id)!==null&&r!==void 0?r:o},g.createElement(bE,{chartData:c.data}),g.createElement(N5,{layout:a.layout,margin:a.margin}),g.createElement(j5,{baseValue:a.baseValue,accessibilityLayer:a.accessibilityLayer,barCategoryGap:a.barCategoryGap,maxBarSize:a.maxBarSize,stackOffset:a.stackOffset,barGap:a.barGap,barSize:a.barSize,syncId:a.syncId,syncMethod:a.syncMethod,className:a.className,reverseStackOrder:a.reverseStackOrder}),g.createElement(Z5,Ml({},a,{ref:n})))}),tD=["axis"],nD=g.forwardRef((e,t)=>g.createElement(eD,{chartName:"ComposedChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:tD,tooltipPayloadSearcher:Cj,categoricalChartProps:e,ref:t}));const rD=()=>{const[e,t]=g.useState([]),[n,r]=g.useState(!0),[a,o]=g.useState(null),[i,s]=g.useState(new Date),[l,c]=g.useState(!1),[u,h]=g.useState(!1),[m,p]=g.useState(1),[y,f]=g.useState(null),v="Transactions Raw Data",b="A:T",w="Calculations",x="H14",T=g.useCallback(E=>{if(!E)return"$0.00";if(E.includes("$"))return E;const z=E.replace(/[,$]/g,""),B=parseFloat(z);return isNaN(B)?E:B<1e-5?`${B.toFixed(8)}`:B<.001?`${B.toFixed(5)}`:B<1?`${B.toFixed(4)}`:B<100?`${B.toFixed(2)}`:`${B.toLocaleString()}`},[]),k=g.useCallback(E=>{if(!E)return"0";const z=E.replace(/[,$]/g,""),B=parseFloat(z);return isNaN(B)?E:B>=1e6?`${(B/1e6).toFixed(1)}M`:B>=1e3?`${(B/1e3).toFixed(1)}K`:B<1?B.toFixed(3):B.toLocaleString()},[]),I=g.useCallback(E=>{if(!E)return"Unknown";if(E.toLowerCase().includes("today"))return E;try{const z=new Date(E);if(!isNaN(z.getTime())){const B=new Date;return z.toDateString()===B.toDateString()?`Today ${z.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}`:z.toLocaleDateString()+" "+z.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}}catch{}return E},[]),C=g.useCallback(E=>E&&E.toLowerCase().includes("profit goal reached")?"profit_goal_reached":"completed",[]),O=g.useCallback(E=>!E||E.length===0?[]:E.map((z,B)=>{var Ta;if(B===0&&((Ta=z[0])==null?void 0:Ta.toLowerCase())==="coin")return null;const[Y,P,R,W,S,J,X]=z,pe=z[19];if(!Y||!J)return null;const he=parseFloat(J.toString().replace(/[$,]/g,""))||0;let ze=null;if(pe){const Au=pe.toString().replace(/[%]/g,"").trim(),Su=parseFloat(Au);isNaN(Su)||(ze=Su)}const Ct=parseFloat(((R==null?void 0:R.toString())||"0").replace(/[$,]/g,"")),re=parseFloat(((W==null?void 0:W.toString())||"0").replace(/[$,]/g,"")),Me=!isNaN(Ct)&&!isNaN(re)?Ct*re:0;return{id:`tx_${Date.now()}_${B}`,coin:(Y==null?void 0:Y.toString().trim())||"",action:(P==null?void 0:P.toString().trim())||"CLOSE",price:T((R==null?void 0:R.toString())||""),quantity:k((W==null?void 0:W.toString())||""),amount:Me,profit:he,percentGain:ze,timestamp:I((X==null?void 0:X.toString())||""),status:C((S==null?void 0:S.toString())||"")}}).filter(z=>z!==null&&z.coin.length>0&&z.profit!==void 0),[T,k,I,C]),M=g.useMemo(()=>{const E={};return e.forEach(z=>{const B=z.timestamp;let Y="";if(B.toLowerCase().includes("today")){const P=new Date;Y=`${P.toLocaleString("default",{month:"long"})} ${P.getFullYear()}`}else try{const P=new Date(B);if(!isNaN(P.getTime()))Y=`${P.toLocaleString("default",{month:"long"})} ${P.getFullYear()}`;else{const R=B.match(/(\d+)\/(\d+)/);if(R){const W=parseInt(R[1]),S=new Date().getFullYear();Y=`${new Date(S,W-1).toLocaleString("default",{month:"long"})} ${S}`}else Y="Unknown"}}catch{Y="Unknown"}E[Y]||(E[Y]=[]),E[Y].push(z)}),E},[e]),$=g.useMemo(()=>Object.keys(M).filter(z=>z!=="Unknown").sort((z,B)=>{const Y=new Date(z);return new Date(B).getTime()-Y.getTime()}),[M]),A=g.useMemo(()=>{const E=$[m-1];return E?M[E]:[]},[M,$,m]),N=g.useMemo(()=>{const E=A.filter(re=>re.action==="CLOSE"),z=A.filter(re=>re.action==="OPEN"),B=E.reduce((re,Me)=>re+Me.profit,0),Y=E.filter(re=>re.status==="profit_goal_reached").length,P={};A.forEach(re=>{P[re.coin]=(P[re.coin]||0)+1});const R=Object.entries(P).sort((re,Me)=>Me[1]-re[1])[0],W=R?{coin:R[0],count:R[1]}:null,S=E.length>0?B/E.length:0,J=E.filter(re=>re.percentGain!==null),X=J.length>0?J.reduce((re,Me)=>re+(Me.percentGain||0),0)/J.length:0,pe=A.length>0?A.reduce((re,Me)=>re+Me.amount,0)/A.length:0,he=A.reduce((re,Me)=>re+Me.amount,0),ze=E.length>0?E.reduce((re,Me)=>Me.profit>re.profit?Me:re,E[0]):null,Ct=E.length>0?Y/E.length*100:0;return{totalProfit:`$${B.toFixed(2)}`,closedTrades:E.length,openTrades:z.length,totalTrades:A.length,topCoin:W,profitGoals:Y,avgProfitPerTrade:S,avgPercentGain:X,avgAmount:pe,totalVolume:he,bestTrade:ze,profitGoalPct:Ct}},[A]),D=$.length,L=$[m-1]||"Unknown",U=E=>{E>=1&&E<=D&&p(E)},_=()=>{const z=[["Coin","Action","Price","Quantity","Amount","Profit","% Gain","Status","Timestamp"].join(",")];A.forEach(S=>{const J=[S.coin,S.action,S.price.replace(/,/g,""),S.quantity.replace(/,/g,""),S.amount.toFixed(2),S.action==="CLOSE"?S.profit.toFixed(2):"0.00",S.action==="CLOSE"&&S.percentGain!==null?S.percentGain.toFixed(2)+"%":"",S.status==="profit_goal_reached"?"Profit Goal Reached":"Completed",`"${S.timestamp}"`];z.push(J.join(","))});const B=z.join(`
`),Y=new Blob([B],{type:"text/csv;charset=utf-8;"}),P=document.createElement("a"),R=URL.createObjectURL(Y),W=`${L.replace(" ","_")}_Transactions.csv`;P.setAttribute("href",R),P.setAttribute("download",W),P.style.visibility="hidden",document.body.appendChild(P),P.click(),document.body.removeChild(P)},F=g.useCallback(()=>{const E=["","","","","","","","","","","",""],z=[["Coin","Action","Price","Quantity","Status","Profit","Timestamp",...E,"% Gain"],["SUI","CLOSE","$3.60","50.9","Profit Goal Reached","$7.34","Today 2:48 AM",...E,"4.01%"],["BONK","CLOSE","$0.00002","10.2M","Profit Goal Reached","$9.03","9/8 12:26 PM",...E,"4.43%"],["DOGE","CLOSE","$0.24","710","Completed","$5.16","9/8 9:19 AM",...E,"3.03%"],["BTC","CLOSE","$43,250.00","0.025","Profit Goal Reached","$12.45","9/7 11:45 PM",...E,"1.15%"],["ETH","CLOSE","$2,650.75","1.8","Completed","$8.92","9/7 6:33 PM",...E,"0.19%"],["ADA","OPEN","$0.45","2,450","Active Position","$0.00","9/7 2:15 PM",...E,""],["SOL","OPEN","$145.32","12.5","Active Position","$0.00","9/7 8:22 AM",...E,""],["MATIC","OPEN","$0.89","1,200","Active Position","$0.00","9/6 11:58 PM",...E,""],["LINK","CLOSE","$11.45","85.3","Completed","$9.87","9/6 7:41 PM",...E,"1.01%"],["DOT","CLOSE","$5.67","180.5","Completed","$7.12","9/6 3:29 PM",...E,"0.70%"]];return O(z)},[O]),q=g.useCallback(async()=>{const E="1Q8I0kU3TinicEOZCgBjisRbktIOryaKnJ2GaBncxako",z="AIzaSyDNQznjzn8BijyHJWWOesvggVc31FFK-LA";try{const B=`https://sheets.googleapis.com/v4/spreadsheets/${E}/values/${w}!${x}?key=${z}`,Y=await fetch(B);if(!Y.ok){console.error("Failed to fetch Profits Protected"),f(null);return}const P=await Y.json();if(P.values&&P.values[0]&&P.values[0][0]){const R=parseFloat(String(P.values[0][0]).replace(/[$,]/g,""));isNaN(R)||f(R)}}catch(B){console.error("Error fetching Profits Protected:",B),f(null)}},[w,x]),H=g.useCallback(async(E=!0)=>{try{E&&r(!0),o(null),h(!1);const z="1Q8I0kU3TinicEOZCgBjisRbktIOryaKnJ2GaBncxako",B="AIzaSyDNQznjzn8BijyHJWWOesvggVc31FFK-LA";if(z&&B){const P=`${z}_${v}_${b}`;let R=bt.get(P);if(R){t(R),s(new Date),h(!0),r(!1);return}const W=`https://sheets.googleapis.com/v4/spreadsheets/${z}/values/${v}!${b}?key=${B}`;try{const S=await fetch(W);if(!S.ok)throw new Error(`Google Sheets API error: ${S.status}`);const J=await S.json();if(J.values&&J.values.length>0){const X=O(J.values);bt.set(P,X),t(X),s(new Date),h(!1);return}else o("No data found. Using sample data.")}catch(S){console.error("API error:",S),o("Failed to load data.")}}await new Promise(P=>setTimeout(P,1e3));const Y=F();t(Y),s(new Date),h(!1)}catch(z){console.error("Error:",z),o("Error loading data."),t(F()),h(!1)}finally{r(!1)}},[v,b,O,F]);g.useEffect(()=>{H(),q()},[H,q]);const Z=E=>({BTC:"text-orange-400",ETH:"text-blue-400",SUI:"text-purple-400",BONK:"text-yellow-400",DOGE:"text-yellow-300",SOL:"text-purple-500",MATIC:"text-indigo-400",ADA:"text-blue-500",LINK:"text-blue-600",DOT:"text-pink-400",AVAX:"text-red-400",UNI:"text-pink-500",ATOM:"text-purple-500",FTM:"text-blue-600",ALGO:"text-gray-400",XRP:"text-gray-300",LTC:"text-gray-500",BCH:"text-green-500",VET:"text-blue-700",THETA:"text-purple-600",HBAR:"text-gray-600",ICP:"text-orange-300",NEAR:"text-green-300",FLOW:"text-blue-800",MANA:"text-red-300"})[E]||"text-gray-400",ee=E=>E>=10?"text-green-300":E>=7?"text-green-400":"text-green-500",te=E=>E==="CLOSE"?"bg-green-500/20 text-green-300":"bg-blue-500/20 text-blue-300",Te=()=>a?{text:"SAMPLE",color:"text-gray-300"}:u?{text:"CACHED",color:"text-blue-300"}:{text:"LIVE",color:"text-green-300"};if(n&&e.length===0)return d.jsx("div",{className:"bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl border border-white/10 p-6 mb-8",children:d.jsxs("div",{className:"flex items-center justify-center py-12",children:[d.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-green-400"}),d.jsx("span",{className:"ml-3 text-gray-300",children:"Loading..."})]})});const de=Te();return d.jsxs("div",{className:"bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl border border-white/10 p-4 md:p-6 mb-8 overflow-hidden",children:[d.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4",children:[d.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[d.jsx("div",{className:"w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 p-2 md:p-3 shadow-lg shadow-green-500/40 flex-shrink-0",children:d.jsx(nw,{className:"w-full h-full text-white"})}),d.jsxs("div",{className:"min-w-0",children:[d.jsx("h3",{className:"text-lg md:text-xl lg:text-2xl font-bold text-white truncate",children:"TRADING SCOREBOARD"}),d.jsx("p",{className:"text-xs md:text-sm text-gray-400 truncate",children:L||new Date().toLocaleString("default",{month:"long",year:"numeric"})})]})]}),d.jsxs("div",{className:"flex items-center gap-3 flex-shrink-0",children:[d.jsx("button",{onClick:()=>c(!l),className:"md:hidden flex items-center gap-2 bg-white/10 hover:bg-white/20 rounded-full px-3 py-2 border border-white/20 transition-all",children:l?d.jsxs(d.Fragment,{children:[d.jsx(uw,{className:"w-4 h-4 text-gray-300"}),d.jsx("span",{className:"text-sm text-gray-300",children:"Hide"})]}):d.jsxs(d.Fragment,{children:[d.jsx(dw,{className:"w-4 h-4 text-gray-300"}),d.jsx("span",{className:"text-sm text-gray-300",children:"Show"})]})}),d.jsxs("div",{className:"flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full px-4 py-2 border border-green-400/30",children:[d.jsx("div",{className:`w-2.5 h-2.5 rounded-full ${u?"bg-blue-400":"bg-green-400"} animate-pulse`}),d.jsx("span",{className:`text-sm font-semibold ${de.color} whitespace-nowrap`,children:de.text})]}),d.jsxs("button",{onClick:_,className:"flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 rounded-full px-4 py-2 border border-blue-400/30 hover:border-blue-400/50 transition-all shadow-lg",title:`Download ${L} CSV`,children:[d.jsx(cw,{className:"w-4 h-4 text-blue-300"}),d.jsx("span",{className:"hidden sm:inline text-sm text-blue-300 font-semibold whitespace-nowrap",children:"Download CSV"}),d.jsx("span",{className:"sm:hidden text-sm text-blue-300 font-semibold",children:"CSV"})]})]})]}),a&&d.jsx("div",{className:"bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3 mb-4",children:d.jsx("p",{className:"text-yellow-400 text-sm break-words",children:a})}),D>1&&d.jsxs("div",{className:"flex items-center justify-center gap-2 mb-6 px-2",children:[d.jsx("button",{onClick:()=>U(m-1),disabled:m===1,className:"p-2 rounded-lg bg-white/8 hover:bg-white/12 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex-shrink-0",children:d.jsx($u,{className:"w-5 h-5"})}),d.jsx("div",{className:"flex gap-1 items-center overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent max-w-full px-1",children:Array.from({length:Math.min(8,D)},(E,z)=>{let B;D<=8||m<=4?B=z+1:m>=D-3?B=D-7+z:B=m-3+z;const Y=$[B-1];if(!Y)return null;const[P,R]=Y.split(" "),W=P.substring(0,3),S=R?R.substring(2):"",J=`${W} ${S}`;return d.jsx("button",{onClick:()=>U(B),className:`px-3 py-1 rounded-lg text-xs font-medium transition-all whitespace-nowrap flex-shrink-0 ${m===B?"bg-blue-500 text-white shadow-lg":"bg-white/8 hover:bg-white/12 text-gray-300"}`,title:Y,children:J},B)})}),d.jsx("button",{onClick:()=>U(m+1),disabled:m===D,className:"p-2 rounded-lg bg-white/8 hover:bg-white/12 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex-shrink-0",children:d.jsx(Du,{className:"w-5 h-5"})})]}),d.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[d.jsx(Yo,{className:"w-4 h-4 text-gray-400"}),d.jsxs("span",{className:"text-xs text-gray-400 font-medium uppercase tracking-wide",children:["Monthly Performance — ",L]})]}),d.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-2",children:[d.jsxs("div",{className:"group relative bg-white/8 rounded-lg p-2 border border-white/20 hover:border-white/30 transition-all text-center",children:[d.jsx("div",{className:"text-sm lg:text-base font-bold text-green-300 truncate",children:N.totalProfit}),d.jsx("div",{className:"text-[10px] lg:text-xs text-gray-400",children:"Monthly Profit"})]}),d.jsxs("div",{className:"group relative bg-white/8 rounded-lg p-2 border border-white/20 hover:border-white/30 transition-all text-center",children:[d.jsx("div",{className:"text-sm lg:text-base font-bold text-green-400",children:N.closedTrades}),d.jsx("div",{className:"text-[10px] lg:text-xs text-gray-400",children:"Closed"})]}),d.jsxs("div",{className:"group relative bg-white/8 rounded-lg p-2 border border-white/20 hover:border-white/30 transition-all text-center",children:[d.jsx("div",{className:"text-sm lg:text-base font-bold text-blue-300",children:N.openTrades}),d.jsx("div",{className:"text-[10px] lg:text-xs text-gray-400",children:"Open"})]}),d.jsxs("div",{className:"group relative bg-white/8 rounded-lg p-2 border border-white/20 hover:border-white/30 transition-all text-center",children:[d.jsx("div",{className:"text-sm lg:text-base font-bold text-purple-300",children:N.totalTrades}),d.jsx("div",{className:"text-[10px] lg:text-xs text-gray-400",children:"Total"})]}),d.jsxs("div",{className:"group relative bg-white/8 rounded-lg p-2 border border-white/20 hover:border-white/30 transition-all text-center",children:[d.jsx("div",{className:"text-sm lg:text-base font-bold text-orange-300 truncate",children:N.topCoin?`${N.topCoin.coin} (${N.topCoin.count})`:"-"}),d.jsx("div",{className:"text-[10px] lg:text-xs text-gray-400",children:"Top Traded Coin"})]}),d.jsxs("a",{href:"/blog/the-50-50-strategy",className:"group relative bg-white/8 rounded-lg p-2 border border-white/20 hover:border-emerald-400/50 transition-all text-center cursor-pointer",children:[d.jsxs("div",{className:"text-sm lg:text-base font-bold text-emerald-300 truncate flex items-center justify-center gap-1",children:[d.jsx(Qr,{className:"w-3 h-3 text-emerald-400 flex-shrink-0"}),d.jsxs("span",{children:["50% → ",y!==null?`$${y.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:0})}`:"..."]})]}),d.jsx("div",{className:"text-[10px] lg:text-xs text-emerald-400/80",children:"Profits Saved"}),d.jsxs("div",{className:"absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 border border-white/20 rounded-lg text-xs text-gray-200 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10",children:["Half of all profits are automatically saved. Learn more →",d.jsx("div",{className:"absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"})]})]})]}),d.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-6",children:[d.jsxs("div",{className:"group relative bg-white/8 rounded-lg p-2 border border-white/20 hover:border-white/30 transition-all text-center",children:[d.jsxs("div",{className:"text-sm lg:text-base font-bold text-cyan-300 truncate",children:["$",N.avgProfitPerTrade.toFixed(2)]}),d.jsx("div",{className:"text-[10px] lg:text-xs text-gray-400",children:"Avg Profit/Trade"})]}),d.jsxs("div",{className:"group relative bg-white/8 rounded-lg p-2 border border-white/20 hover:border-white/30 transition-all text-center",children:[d.jsxs("div",{className:"text-sm lg:text-base font-bold text-teal-300 truncate",children:[N.avgPercentGain.toFixed(2),"%"]}),d.jsx("div",{className:"text-[10px] lg:text-xs text-gray-400",children:"Avg % Gain"})]}),d.jsxs("div",{className:"group relative bg-white/8 rounded-lg p-2 border border-white/20 hover:border-white/30 transition-all text-center",children:[d.jsxs("div",{className:"text-sm lg:text-base font-bold text-sky-300 truncate",children:["$",N.avgAmount>=1e3?N.avgAmount.toLocaleString(void 0,{maximumFractionDigits:0}):N.avgAmount.toFixed(2)]}),d.jsx("div",{className:"text-[10px] lg:text-xs text-gray-400",children:"Avg Amount"})]}),d.jsxs("div",{className:"group relative bg-white/8 rounded-lg p-2 border border-white/20 hover:border-white/30 transition-all text-center",children:[d.jsxs("div",{className:"text-sm lg:text-base font-bold text-indigo-300 truncate",children:["$",N.totalVolume>=1e3?N.totalVolume.toLocaleString(void 0,{maximumFractionDigits:0}):N.totalVolume.toFixed(2)]}),d.jsx("div",{className:"text-[10px] lg:text-xs text-gray-400",children:"Total Volume"})]}),d.jsxs("div",{className:"group relative bg-white/8 rounded-lg p-2 border border-white/20 hover:border-white/30 transition-all text-center",children:[d.jsx("div",{className:"text-sm lg:text-base font-bold text-yellow-300 truncate",children:N.bestTrade?`$${N.bestTrade.profit.toFixed(2)}`:"-"}),d.jsxs("div",{className:"text-[10px] lg:text-xs text-gray-400",children:["Best Trade",N.bestTrade?` (${N.bestTrade.coin})`:""]})]}),d.jsxs("div",{className:"group relative bg-white/8 rounded-lg p-2 border border-white/20 hover:border-white/30 transition-all text-center",children:[d.jsxs("div",{className:"text-sm lg:text-base font-bold text-amber-300 truncate",children:[d.jsx(er,{className:"w-3 h-3 inline-block mr-1 text-amber-400"}),N.profitGoalPct.toFixed(0),"%"]}),d.jsx("div",{className:"text-[10px] lg:text-xs text-gray-400",children:"Goal Hit Rate"})]})]}),d.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-1 sm:gap-2 mb-4 px-2",children:[d.jsx(Zr,{className:"w-3 h-3 md:w-4 md:h-4 text-gray-400 flex-shrink-0"}),d.jsxs("span",{className:"text-xs text-gray-400 text-center break-words",children:["Last updated: ",i.toLocaleTimeString(),u&&d.jsx("span",{className:"text-blue-400 ml-1 sm:ml-2",children:"• Cached"}),!u&&de.text==="LIVE"&&d.jsx("span",{className:"text-green-400 ml-1 sm:ml-2",children:"• Fresh"})]})]}),d.jsxs("div",{className:`bg-black/20 rounded-xl border border-white/5 overflow-hidden ${l?"":"hidden md:block"}`,children:[d.jsx("div",{className:"block md:hidden",children:d.jsx("div",{className:"space-y-2 p-2 max-h-96 overflow-y-auto overflow-x-hidden",children:A.length===0?d.jsxs("div",{className:"p-8 text-center text-gray-400",children:["No transactions for ",L]}):A.map(E=>d.jsxs("div",{className:"bg-white/5 rounded-lg p-3 border-t border-r border-b border-white/10 border-l-4 max-w-full",style:E.action==="OPEN"?{borderLeftColor:"#60a5fa"}:{borderLeftColor:"#4ade80"},children:[d.jsxs("div",{className:"flex items-center justify-between mb-2 gap-2 min-w-0",children:[d.jsxs("div",{className:"flex items-center gap-2 min-w-0 flex-1",children:[d.jsx("span",{className:`font-bold text-sm ${Z(E.coin)} flex-shrink-0`,children:E.coin}),d.jsx("span",{className:`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${te(E.action)} flex-shrink-0`,children:E.action})]}),d.jsx("div",{className:"text-xs text-gray-400 flex-shrink-0 truncate max-w-[120px]",children:E.timestamp})]}),d.jsxs("div",{className:"flex items-center justify-between mb-2 gap-2",children:[d.jsxs("div",{className:"text-xs text-gray-300 truncate flex-1 min-w-0",children:[d.jsx("span",{className:"text-gray-500",children:"Price:"})," ",d.jsx("span",{className:"font-mono",children:E.price})]}),d.jsxs("div",{className:"text-xs text-gray-300 truncate flex-1 min-w-0 text-center",children:[d.jsx("span",{className:"text-gray-500",children:"Qty:"})," ",d.jsx("span",{className:"font-mono",children:E.quantity})]}),d.jsxs("div",{className:"text-xs text-gray-300 truncate flex-1 min-w-0 text-right",children:[d.jsx("span",{className:"text-gray-500",children:"Amt:"})," ",d.jsxs("span",{className:"font-mono",children:["$",E.amount>=1e3?E.amount.toLocaleString(void 0,{maximumFractionDigits:0}):E.amount.toFixed(2)]})]})]}),d.jsxs("div",{className:"flex items-center justify-between gap-2",children:[d.jsx("div",{className:"flex items-center gap-3 flex-shrink-0",children:E.action==="CLOSE"?d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:`font-bold text-sm font-mono ${ee(E.profit)}`,children:["+$",E.profit.toFixed(2)]}),E.percentGain!==null&&d.jsxs("div",{className:"font-bold text-sm font-mono text-green-400",children:["(",E.percentGain.toFixed(2),"%)"]})]}):d.jsx("div",{className:"text-gray-500 text-sm",children:"Active"})}),d.jsxs("div",{className:"flex items-center gap-1 flex-shrink-0",children:[E.status==="profit_goal_reached"&&d.jsxs(d.Fragment,{children:[d.jsx(er,{className:"w-3 h-3 text-yellow-400"}),d.jsx("span",{className:"text-xs text-yellow-400",children:"Goal"})]}),E.action==="OPEN"&&d.jsxs(d.Fragment,{children:[d.jsx(mt,{className:"w-3 h-3 text-blue-400"}),d.jsx("span",{className:"text-xs text-blue-400",children:"Active"})]})]})]})]},E.id))})}),d.jsxs("div",{className:"hidden md:block",children:[d.jsx("div",{className:"bg-white/5 px-4 py-3 border-b border-white/5",children:d.jsxs("div",{className:"grid grid-cols-12 gap-2 text-xs font-semibold text-gray-300 uppercase tracking-wider",children:[d.jsx("div",{className:"col-span-1",children:"Coin"}),d.jsx("div",{className:"col-span-1",children:"Action"}),d.jsx("div",{className:"col-span-2",children:"Price"}),d.jsx("div",{className:"col-span-1",children:"Qty"}),d.jsx("div",{className:"col-span-2",children:"Amount"}),d.jsx("div",{className:"col-span-2",children:"Profit"}),d.jsx("div",{className:"col-span-1",children:"% Gain"}),d.jsx("div",{className:"col-span-2",children:"Time"})]})}),d.jsx("div",{className:"max-h-96 overflow-y-auto",children:A.length===0?d.jsxs("div",{className:"p-8 text-center text-gray-400",children:["No transactions for ",L]}):A.map((E,z)=>d.jsx("div",{className:`px-4 py-3 border-b border-white/5 hover:bg-white/5 ${z%2===0?"bg-white/2":""} border-l-4`,style:E.action==="OPEN"?{borderLeftColor:"#60a5fa"}:{borderLeftColor:"#4ade80"},children:d.jsxs("div",{className:"grid grid-cols-12 gap-2 items-center text-sm",children:[d.jsx("div",{className:"col-span-1",children:d.jsx("div",{className:`font-bold ${Z(E.coin)}`,children:E.coin})}),d.jsx("div",{className:"col-span-1",children:d.jsx("span",{className:`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${te(E.action)}`,children:E.action})}),d.jsx("div",{className:"col-span-2",children:d.jsx("div",{className:"text-gray-200 font-mono text-xs",children:E.price})}),d.jsx("div",{className:"col-span-1",children:d.jsx("div",{className:"text-gray-300 font-mono text-xs",children:E.quantity})}),d.jsx("div",{className:"col-span-2",children:d.jsxs("div",{className:"text-gray-200 font-mono text-xs",children:["$",E.amount>=1e3?E.amount.toLocaleString(void 0,{maximumFractionDigits:0}):E.amount.toFixed(2)]})}),d.jsxs("div",{className:"col-span-2",children:[E.action==="CLOSE"?d.jsxs("div",{className:`font-bold font-mono ${ee(E.profit)}`,children:["+$",E.profit.toFixed(2)]}):d.jsx("div",{className:"text-gray-500 font-mono text-xs",children:"-"}),E.status==="profit_goal_reached"&&d.jsxs("div",{className:"text-xs text-yellow-400 flex items-center gap-1 mt-1",children:[d.jsx(er,{className:"w-3 h-3"}),d.jsx("span",{children:"Goal"})]}),E.action==="OPEN"&&d.jsxs("div",{className:"text-xs text-blue-400 flex items-center gap-1 mt-1",children:[d.jsx(mt,{className:"w-3 h-3"}),d.jsx("span",{children:"Active"})]})]}),d.jsx("div",{className:"col-span-1",children:E.action==="CLOSE"&&E.percentGain!==null?d.jsxs("div",{className:"font-bold font-mono text-green-400 text-xs",children:[E.percentGain.toFixed(2),"%"]}):d.jsx("div",{className:"text-gray-500 font-mono text-xs",children:"-"})}),d.jsx("div",{className:"col-span-2",children:d.jsx("div",{className:"text-gray-400 text-xs",children:E.timestamp})})]})},E.id))})]})]}),D>1&&d.jsxs("div",{className:"flex items-center justify-center gap-2 mt-6 px-2",children:[d.jsx("button",{onClick:()=>U(m-1),disabled:m===1,className:"p-2 rounded-lg bg-white/8 hover:bg-white/12 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex-shrink-0",children:d.jsx($u,{className:"w-5 h-5"})}),d.jsx("div",{className:"flex gap-1 items-center overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent max-w-full px-1",children:Array.from({length:Math.min(8,D)},(E,z)=>{let B;D<=8||m<=4?B=z+1:m>=D-3?B=D-7+z:B=m-3+z;const Y=$[B-1];if(!Y)return null;const[P,R]=Y.split(" "),W=P.substring(0,3),S=R?R.substring(2):"",J=`${W} ${S}`;return d.jsx("button",{onClick:()=>U(B),className:`px-3 py-1 rounded-lg text-xs font-medium transition-all whitespace-nowrap flex-shrink-0 ${m===B?"bg-blue-500 text-white shadow-lg":"bg-white/8 hover:bg-white/12 text-gray-300"}`,title:Y,children:J},B)})}),d.jsx("button",{onClick:()=>U(m+1),disabled:m===D,className:"p-2 rounded-lg bg-white/8 hover:bg-white/12 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex-shrink-0",children:d.jsx(Du,{className:"w-5 h-5"})})]}),d.jsxs("div",{className:"mt-4 text-center px-2",children:[d.jsxs("p",{className:"text-xs text-gray-500 break-words",children:["✅ Smart Cache enabled • Live data with intelligent caching •"," ",d.jsx("span",{className:"text-green-400 font-medium",children:"Shows both Open & Closed positions"})]}),!l&&d.jsx("p",{className:"text-xs text-gray-500 mt-1 md:hidden",children:'Tap "Show" to view history'})]})]})},aD=({tradingStats:e,isLoading:t=!1,error:n=null,refreshStats:r=()=>ce.warn("Refresh not implemented"),cacheInfo:a={isFresh:!1,isRateLimited:!1,timeUntilNextRefresh:0}})=>{var x,T,k,I,C,O,M,$;const o=Ip(),i=A=>{if(A<=0)return"Available now";const N=Math.floor(A/(1e3*60*60)),D=Math.floor(A%(1e3*60*60)/(1e3*60));return N>0?`${N}h ${D}m`:`${D}m`};if(t)return d.jsx("section",{className:"py-16 px-4 relative overflow-hidden",children:d.jsx("div",{className:"relative max-w-6xl mx-auto text-center",children:d.jsxs("div",{className:"flex items-center justify-center py-12",children:[d.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-green-400 mr-3"}),d.jsx("span",{className:"text-gray-300 text-lg",children:"Loading live trading data..."})]})})});const s=n&&n.trim()!=="",l=e&&typeof e=="object"&&e.totalProfit!==void 0;if(s||!l)return d.jsxs("section",{className:"py-16 px-4 relative overflow-hidden",children:[d.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-red-900/20 to-orange-900/20"}),d.jsxs("div",{className:"relative max-w-6xl mx-auto text-center",children:[d.jsxs("div",{className:"bg-red-500/10 border border-red-500/20 rounded-2xl p-8 mb-8",children:[d.jsx(rw,{className:"w-12 h-12 text-red-400 mx-auto mb-4"}),d.jsx("h3",{className:"text-xl font-bold text-white mb-4",children:"Unable to Load Live Trading Data"}),d.jsx("p",{className:"text-red-300 mb-6",children:s?n:"Trading data is not available. This could be due to API configuration issues or data loading problems."}),d.jsxs("button",{onClick:r,className:"inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300",children:[d.jsx(bw,{className:"w-4 h-4"}),"Retry Connection"]})]}),d.jsxs("div",{className:"bg-gray-900/50 rounded-lg p-4 text-left max-w-2xl mx-auto",children:[d.jsx("h4",{className:"text-white font-semibold mb-2",children:"Debug Information:"}),d.jsxs("div",{className:"text-gray-300 text-sm space-y-1",children:[d.jsxs("p",{children:["• Sheet ID:"," ","✅ Configured"]}),d.jsxs("p",{children:["• API Key:"," ","✅ Configured"]}),d.jsx("p",{children:'• Expected Tab: "Calculations"'}),d.jsx("p",{children:"• Expected Range: A:J"}),d.jsxs("p",{children:["• Error: ",n||"No specific error message"]}),d.jsxs("p",{children:["• Cache Status: ",a!=null&&a.isFresh?"Fresh":"Stale"]}),d.jsxs("p",{children:["• Rate Limited: ",a!=null&&a.isRateLimited?"Yes":"No"]}),d.jsxs("p",{children:["• Has Trading Stats: ",l?"Yes":"No"]}),d.jsxs("p",{children:["• Trading Stats Type: ",typeof e]}),d.jsxs("p",{children:["• Trading Stats Value:"," ",e===void 0?"undefined":e===null?"null":"has value"]})]})]})]})]});const c=e,u=((x=c.dailyAvg)==null?void 0:x.toFixed(2))||"0.00",h=[],p=[...c.monthlyData||[],...h],y=p.find(A=>A.profit===c.bestMonthProfit)||p[0],f=A=>({Jan:"January",Feb:"February",Mar:"March",Apr:"April",May:"May",Jun:"June",Jul:"July",Aug:"August",Sep:"September",Oct:"October",Nov:"November",Dec:"December"})[A]||A,v=()=>{Ho("start_trading_save_1000","trading_results_section"),zo("https://crypto.gobabytrade.com/signup.aspx?RID=432706BE","Start Trading Save $1000 Trading Results")},b=A=>{const N=Number(A);return isNaN(N)?"0.00":N.toFixed(2)},w=A=>A<=25?{label:"Extreme Fear",color:"#ef4444"}:A<=50?{label:"Fear",color:"#f97316"}:A<=75?{label:"Greed",color:"#22c55e"}:{label:"Extreme Greed",color:"#4ade80"};return d.jsx("section",{id:"trading-results",className:"py-16 px-4 relative overflow-hidden",children:d.jsxs("div",{className:"relative max-w-6xl mx-auto",children:[d.jsxs("div",{className:"text-center mb-12",children:[d.jsxs("div",{className:"inline-flex items-center gap-2 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-full px-4 py-2 border border-white/20 mb-6",children:[d.jsx(kp,{className:"w-4 h-4 text-green-400"}),d.jsx("span",{className:"text-green-300 font-medium",children:c.isLiveData?"LIVE DATA":"REAL RESULTS"}),c.isLiveData&&d.jsx("div",{className:"w-2 h-2 bg-green-400 rounded-full animate-pulse"})]}),d.jsx("h2",{className:"text-3xl md:text-5xl font-bold text-white mb-4",children:"My Trading Results"}),d.jsxs("div",{className:"mb-6",children:[d.jsx("p",{className:"text-xl text-purple-200 font-medium mb-4",children:"Don't just take my word for it - here are my actual trading results:"}),d.jsx("div",{children:d.jsx(mt,{className:"w-8 h-8 text-green-300 mx-auto animate-bounce"})})]}),d.jsxs("p",{className:"text-xl text-gray-300 max-w-3xl mx-auto",children:["These are my actual profits from using my robotic trader.",d.jsxs("span",{className:"text-green-400 font-semibold",children:[" ","Started January 8, 2025"]})," ","-"," ",c.isLiveData?"Live Updates!":"Stats Updated Monthly!"]}),c.isLiveData&&d.jsx("div",{className:"mt-6 flex justify-center",children:d.jsxs("div",{className:"bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-4 border border-green-400/30 shadow-lg shadow-green-500/10",children:[d.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[d.jsx("div",{className:"w-3 h-3 bg-green-400 rounded-full animate-pulse"}),d.jsxs("div",{className:"text-center",children:[d.jsx("p",{className:"text-green-300 font-semibold text-sm",children:"Live Data Connected"}),d.jsxs("p",{className:"text-gray-300 text-xs",children:["Last updated:"," ",new Date(c.lastUpdated).toLocaleString()]})]})]}),d.jsxs("div",{className:"flex items-center justify-center gap-4 text-xs text-gray-400 border-t border-green-400/20 pt-2",children:[d.jsxs("div",{className:"flex items-center gap-1",children:[d.jsx(lw,{className:"w-3 h-3"}),d.jsxs("span",{children:["Cache: ",a.isFresh?"Fresh":"Stale"]})]}),a.isRateLimited&&d.jsxs("div",{className:"flex items-center gap-1",children:[d.jsx(Zr,{className:"w-3 h-3"}),d.jsxs("span",{children:["Next update:"," ",i(a.timeUntilNextRefresh)]})]}),d.jsxs("div",{className:"flex items-center gap-1",children:[d.jsx(Iw,{className:"w-3 h-3"}),d.jsx("span",{children:"Auto-updating"})]})]})]})})]}),d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",children:[d.jsxs("div",{className:"group relative bg-white/8 rounded-2xl p-6 border border-white/20 hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-green-500/15",children:[d.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"}),d.jsx("div",{className:"relative w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/40",children:d.jsx(Xr,{className:"w-full h-full text-white"})}),d.jsxs("div",{className:"relative text-center",children:[d.jsxs("div",{className:"text-3xl font-bold text-green-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-300 group-hover:to-emerald-300 group-hover:bg-clip-text transition-all duration-300 font-mono",children:["$",((T=c.totalProfit)==null?void 0:T.toFixed(2))||"0.00"]})," ",d.jsx("div",{className:"text-gray-200 font-medium group-hover:text-white transition-colors duration-300",children:"Total Profits"}),d.jsx("div",{className:"text-green-300 text-sm mt-1",children:o})]}),d.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"})]}),d.jsxs("div",{className:"group relative bg-white/8 rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-orange-500/15",children:[d.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"}),d.jsx("div",{className:"relative w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/40",children:d.jsx(er,{className:"w-full h-full text-white"})}),d.jsxs("div",{className:"relative text-center",children:[d.jsx("div",{className:"text-3xl font-bold text-orange-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-300 group-hover:to-amber-300 group-hover:bg-clip-text transition-all duration-300 font-mono",children:((k=c.totalTrades)==null?void 0:k.toLocaleString())||"0"}),d.jsx("div",{className:"text-gray-200 font-medium group-hover:text-white transition-colors duration-300",children:"Closed Trades"}),d.jsx("div",{className:"text-orange-300 text-sm mt-1",children:"Consistent & Automated"})]}),d.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"})]}),d.jsxs("div",{className:"group relative bg-white/8 rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-purple-500/15",children:[d.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"}),d.jsx("div",{className:"relative w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/40",children:d.jsx($r,{className:"w-full h-full text-white"})}),d.jsxs("div",{className:"relative text-center",children:[d.jsxs("div",{className:"text-3xl font-bold text-purple-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 group-hover:bg-clip-text transition-all duration-300 font-mono",children:["$",((I=c.avgProfitPerTrade)==null?void 0:I.toFixed(2))||"0.00"]}),d.jsx("div",{className:"text-gray-200 font-medium group-hover:text-white transition-colors duration-300",children:"Avg Per Trade"}),d.jsx("div",{className:"text-purple-300 text-sm mt-1",children:"Steady Gains"})]}),d.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"})]}),d.jsxs("div",{className:"group relative bg-white/8 rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-blue-500/15",children:[d.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"}),d.jsx("div",{className:"relative w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/40",children:d.jsx(gw,{className:"w-full h-full text-white"})}),d.jsxs("div",{className:"relative text-center",children:[d.jsx("div",{className:"text-3xl font-bold text-blue-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-cyan-300 group-hover:bg-clip-text transition-all duration-300 font-mono",children:((C=c.openPositionCount)==null?void 0:C.toLocaleString())||"0"}),d.jsx("div",{className:"text-gray-200 font-medium group-hover:text-white transition-colors duration-300",children:"Open Positions"}),d.jsx("div",{className:"text-blue-300 text-sm mt-1",children:"Inventory Ready to Sell"})]}),d.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"})]})]}),d.jsx(rD,{}),d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12",children:[d.jsxs("div",{className:"group relative bg-white/8 rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-emerald-500/15",children:[d.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"}),d.jsx("div",{className:"relative w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-emerald-500/40",children:d.jsx(Yo,{className:"w-full h-full text-white"})}),d.jsxs("div",{className:"relative text-center",children:[d.jsxs("div",{className:"text-2xl font-bold text-emerald-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-300 group-hover:to-teal-300 group-hover:bg-clip-text transition-all duration-300 font-mono",children:["$",((O=c.monthlyAverage)==null?void 0:O.toFixed(2))||"0.00"]}),d.jsx("div",{className:"text-gray-200 font-medium group-hover:text-white transition-colors duration-300",children:"Monthly Average"}),d.jsx("div",{className:"text-emerald-300 text-sm mt-1",children:"Consistent Performance"})]}),d.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"})]}),d.jsxs("div",{className:"group relative bg-white/8 rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-indigo-500/15",children:[d.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"}),d.jsx("div",{className:"relative w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-indigo-500/40",children:d.jsx(mt,{className:"w-full h-full text-white"})}),d.jsxs("div",{className:"relative text-center",children:[d.jsxs("div",{className:"text-2xl font-bold text-indigo-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-300 group-hover:to-purple-300 group-hover:bg-clip-text transition-all duration-300 font-mono",children:["$",b(u)]}),d.jsx("div",{className:"text-gray-200 font-medium group-hover:text-white transition-colors duration-300",children:"Daily Average"}),d.jsx("div",{className:"text-indigo-300 text-sm mt-1",children:"Steady Growth"})]}),d.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"})]}),d.jsxs("div",{className:"group relative bg-white/8 rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-amber-500/15",children:[d.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"}),d.jsx("div",{className:"relative w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-amber-500/40",children:d.jsx($r,{className:"w-full h-full text-white"})}),d.jsxs("div",{className:"relative text-center",children:[d.jsxs("div",{className:"text-2xl font-bold text-amber-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-amber-300 group-hover:to-orange-300 group-hover:bg-clip-text transition-all duration-300 font-mono",children:["$",((M=c.bestMonthProfit)==null?void 0:M.toFixed(2))||"0.00"]}),d.jsx("div",{className:"text-gray-200 font-medium group-hover:text-white transition-colors duration-300",children:"Best Month"}),d.jsx("div",{className:"text-amber-300 text-sm mt-1",children:y?`${f(y.month)} ${y.year}`:"N/A"})]}),d.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"})]}),d.jsxs("div",{className:"group relative bg-white/8 rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-blue-500/15",children:[d.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"}),d.jsx("div",{className:"relative w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/40",children:d.jsx(vw,{className:"w-full h-full text-white"})}),d.jsxs("div",{className:"relative text-center",children:[d.jsxs("div",{className:"text-2xl font-bold text-cyan-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-cyan-300 group-hover:bg-clip-text transition-all duration-300 font-mono",children:[(($=c.avgPercentGain)==null?void 0:$.toFixed(2))||"0.00","%"]}),d.jsx("div",{className:"text-gray-200 font-medium group-hover:text-white transition-colors duration-300",children:"Avg % Gain"}),d.jsx("div",{className:"text-cyan-300 text-sm mt-1",children:"Per Trade"})]}),d.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"})]})]}),d.jsx("div",{className:"text-center mb-8",children:d.jsx("p",{className:"text-sm text-green-300 bg-green-900/20 rounded-lg px-4 py-2 inline-block border border-green-500/20",children:"✓ All profits shown are net amounts after trading fees and rebates"})}),p.length>0&&(()=>{var U;const A=p.reduce((_,F)=>{const q=F.year;return _[q]||(_[q]=[]),_[q].push(F),_},{}),N=Object.keys(A).map(Number).sort((_,F)=>F-_),D=p.reduce((_,F)=>F.profit>_.profit?F:_,p[0]),L=_=>_.month===D.month&&_.year===D.year;return d.jsxs(d.Fragment,{children:[N.map(_=>{const F=A[_],q=F.reduce((ee,te)=>ee+te.profit,0),H=F.reduce((ee,te)=>ee+te.trades,0),Z=F.some(L);return d.jsxs("div",{className:"bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl p-4 md:p-8 mb-6 relative",children:[_===N[0]&&d.jsx("div",{className:"absolute top-4 right-4 opacity-20 pointer-events-none hidden md:block",children:d.jsx("div",{className:"w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30 flex items-center justify-center animate-pulse shadow-lg shadow-purple-500/20",children:d.jsx("img",{src:"/robot-trading.png",alt:"Robot Trading",className:"w-12 h-12 object-contain filter brightness-110"})})}),d.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 md:mb-6 gap-2",children:[d.jsxs("h3",{className:"text-xl md:text-2xl font-bold text-white flex items-center gap-3",children:[d.jsxs("span",{children:[_," Performance"]}),d.jsxs("span",{className:"text-sm text-gray-400 font-normal",children:["(",F.length," ",F.length===1?"month":"months",")"]})]}),d.jsxs("div",{className:"text-sm font-semibold text-emerald-300",children:["$",q.toFixed(2)," • ",H," trades"]})]}),(()=>{const ee=Math.max(...F.map(Y=>Y.profit)),te=F.some(Y=>Y.fearGreed!==void 0),Te=F.map(Y=>{const P=L(Y),R=Y.profit===ee;return{name:Y.month,profit:Math.round(Y.profit),trades:Y.trades,fearGreed:Y.fearGreed??null,isBest:P,isYearHighest:R,fill:P?"#f43f5e":R?"#eab308":"#10b981"}}),de=({active:Y,payload:P})=>{if(Y&&P&&P.length){const R=P[0].payload,W=R.fearGreed,S=W!==null?w(W):null;return d.jsxs("div",{style:{backgroundColor:"#1e1b4b",border:"2px solid #7c3aed"},className:"rounded-lg p-4 shadow-2xl",children:[d.jsx("p",{className:"text-white font-bold text-base",children:f(R.name)}),d.jsxs("p",{className:"text-green-400 font-mono font-bold text-xl",children:["$",R.profit.toLocaleString()]}),d.jsxs("p",{className:"text-white text-sm",children:[R.trades," trades"]}),S&&d.jsxs("p",{className:"text-sm mt-1",style:{color:S.color},children:["F&G: ",W," - ",S.label]}),R.isBest&&d.jsx("p",{className:"text-yellow-300 text-sm font-bold mt-1",children:"🏆 Best Month Ever!"})]})}return null},E=Y=>{const{x:P,y:R,width:W,index:S}=Y,J=Te[S];return J&&J.isBest?d.jsx("text",{x:P+W/2,y:R-25,fill:"#22d3ee",textAnchor:"middle",fontSize:12,fontWeight:"bold",children:"🏆 BEST"}):null},z=F.length<=3?"50%":F.length<=6?"75%":"100%",B=Y=>{const{x:P,y:R,payload:W}=Y,S=Te.find(J=>J.name===W.value);return d.jsxs("g",{transform:`translate(${P},${R})`,children:[d.jsx("text",{x:0,y:0,dy:16,textAnchor:"middle",fill:"#9ca3af",fontSize:12,children:W.value}),d.jsx("text",{x:0,y:0,dy:32,textAnchor:"middle",fill:"#6b7280",fontSize:10,children:(S==null?void 0:S.trades)||0})]})};return d.jsxs("div",{className:"w-full",children:[d.jsxs("div",{className:"flex justify-center gap-4 md:gap-6 mb-4 text-xs md:text-sm",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("div",{className:"w-4 h-4 rounded",style:{background:"linear-gradient(to top, #059669, #34d399)"}}),d.jsx("span",{className:"text-gray-300",children:"Monthly"})]}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("div",{className:"w-4 h-4 rounded",style:{background:"linear-gradient(to top, #ea580c, #fb923c)"}}),d.jsx("span",{className:"text-gray-300",children:"Year's Best"})]}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("div",{className:"w-4 h-4 rounded",style:{background:"linear-gradient(to top, #0e7490, #06b6d4)"}}),d.jsx("span",{className:"text-gray-300",children:"All-Time Best"})]})]}),te&&d.jsxs("div",{className:"flex justify-center gap-3 md:gap-5 mb-4 text-xs",children:[d.jsx("span",{className:"text-gray-400",children:"F&G Index:"}),d.jsxs("div",{className:"flex items-center gap-1.5",children:[d.jsx("div",{className:"w-2.5 h-2.5 rounded-full",style:{backgroundColor:"#ef4444"}}),d.jsx("span",{className:"text-gray-400",children:"Extreme Fear"})]}),d.jsxs("div",{className:"flex items-center gap-1.5",children:[d.jsx("div",{className:"w-2.5 h-2.5 rounded-full",style:{backgroundColor:"#f97316"}}),d.jsx("span",{className:"text-gray-400",children:"Fear"})]}),d.jsxs("div",{className:"flex items-center gap-1.5",children:[d.jsx("div",{className:"w-2.5 h-2.5 rounded-full",style:{backgroundColor:"#22c55e"}}),d.jsx("span",{className:"text-gray-400",children:"Greed"})]}),d.jsxs("div",{className:"flex items-center gap-1.5",children:[d.jsx("div",{className:"w-2.5 h-2.5 rounded-full",style:{backgroundColor:"#4ade80"}}),d.jsx("span",{className:"text-gray-400",children:"Extreme Greed"})]})]}),d.jsx("div",{className:"flex justify-center",style:{height:F.length>6?300:270},children:d.jsx("div",{style:{width:z,height:"100%"},children:d.jsx(h1,{width:"100%",height:"100%",children:d.jsxs(nD,{data:Te,margin:{top:40,right:te?45:20,left:20,bottom:25},barCategoryGap:"20%",children:[d.jsxs("defs",{children:[d.jsxs("linearGradient",{id:`gradient-green-${_}`,x1:"0",y1:"1",x2:"0",y2:"0",children:[d.jsx("stop",{offset:"0%",stopColor:"#059669"}),d.jsx("stop",{offset:"100%",stopColor:"#34d399"})]}),d.jsxs("linearGradient",{id:`gradient-orange-${_}`,x1:"0",y1:"1",x2:"0",y2:"0",children:[d.jsx("stop",{offset:"0%",stopColor:"#ea580c"}),d.jsx("stop",{offset:"100%",stopColor:"#fb923c"})]}),d.jsxs("linearGradient",{id:`gradient-cyan-${_}`,x1:"0",y1:"1",x2:"0",y2:"0",children:[d.jsx("stop",{offset:"0%",stopColor:"#0e7490"}),d.jsx("stop",{offset:"100%",stopColor:"#06b6d4"})]})]}),d.jsx(Vb,{dataKey:"name",tick:d.jsx(B,{}),axisLine:{stroke:"#374151"},tickLine:!1,interval:0}),d.jsx(Cl,{yAxisId:"left",hide:!0}),te&&d.jsx(Cl,{yAxisId:"right",orientation:"right",domain:[0,100],tick:{fill:"#9ca3af",fontSize:10},axisLine:{stroke:"#374151"},tickLine:!1,width:35,label:{value:"F&G",angle:-90,position:"insideRight",offset:10,style:{fill:"#9ca3af",fontSize:10}}}),d.jsx(tO,{content:d.jsx(de,{}),cursor:{fill:"rgba(255,255,255,0.05)"}}),d.jsxs(Ub,{yAxisId:"left",dataKey:"profit",radius:[4,4,0,0],maxBarSize:45,minPointSize:3,children:[Te.map((Y,P)=>d.jsx(mu,{fill:Y.isBest?`url(#gradient-cyan-${_})`:Y.isYearHighest?`url(#gradient-orange-${_})`:`url(#gradient-green-${_})`,style:{filter:Y.isBest?"drop-shadow(0 0 12px rgba(34, 211, 238, 0.8))":Y.isYearHighest?"drop-shadow(0 0 8px rgba(251, 146, 60, 0.7))":"none"}},`cell-${P}`)),d.jsx(rr,{dataKey:"profit",position:"top",formatter:Y=>`$${Y}`,style:{fill:"#e5e7eb",fontSize:11,fontWeight:600}}),d.jsx(rr,{content:E})]}),te&&d.jsx(zb,{yAxisId:"right",type:"monotone",dataKey:"fearGreed",stroke:"#9ca3af",strokeWidth:2,connectNulls:!1,dot:Y=>{const{cx:P,cy:R,payload:W}=Y;if(W.fearGreed===null)return d.jsx("g",{},`dot-${P}`);const S=w(W.fearGreed);return d.jsx("circle",{cx:P,cy:R,r:5,fill:S.color,stroke:"#1e1b4b",strokeWidth:2},`dot-${P}`)},activeDot:!1})]})})})})]})})(),Z&&d.jsx("div",{className:"text-center",children:d.jsxs("p",{className:"text-cyan-400 font-semibold text-sm md:text-base",children:["🏆 Best month ever: ",D?`${f(D.month)}`:"N/A"," ","with $",(D==null?void 0:D.profit.toFixed(2))||"0.00"]})})]},_)}),d.jsx("div",{className:"text-center mb-6",children:d.jsxs("p",{className:"text-emerald-300 font-semibold text-sm md:text-lg",children:["📈 ",c.totalTrades||0," total trades • $",((U=c.avgProfitPerTrade)==null?void 0:U.toFixed(2))||"0.00"," avg profit/trade • Best month ever: ",D?`${f(D.month)} '${String(D.year).slice(-2)}`:"N/A"," ","with $",(D==null?void 0:D.profit.toFixed(2))||"0.00"]})}),d.jsx("div",{className:"text-center mb-8",children:d.jsxs("div",{className:"bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-6 border border-purple-400/30 shadow-lg shadow-purple-500/20",children:[d.jsx("h4",{className:"text-xl font-bold text-white mb-3",children:"Ready to Experience Autonomous Trading?"}),d.jsx("p",{className:"text-gray-200 mb-4 max-w-xl mx-auto",children:"GoBabyTrade is the same AI-enhanced system I use. Use my link to save $1,000!"}),d.jsxs("a",{href:"https://crypto.gobabytrade.com/signup.aspx?RID=432706BE",target:"_blank",rel:"noopener noreferrer",onClick:v,className:"inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30",children:["Start Trading – Save $1,000",d.jsx(mt,{className:"w-4 h-4"})]})]})})]})})(),d.jsx("div",{className:"text-center mt-8",children:d.jsxs("p",{className:"text-sm text-gray-400 max-w-2xl mx-auto",children:["* These are my actual trading results from my personal robotic trader account. Started January 8, 2025.",c.isLiveData?" Results updated automatically.":" Results updated regularly.","Past performance does not guarantee future results."]})})]})})},Ps=[{icon:Zr,title:"Set It & Forget It",description:"Monitors global markets 24/7, executing trades even while you sleep. Never miss profitable opportunities or stare at charts again.",color:"from-orange-500 to-amber-500",stats:"Always Active"},{icon:Qr,title:"Never Trades at a Loss",description:"Only sells when your position is profitable—never at a loss unless you choose otherwise. Protects investments while capitalizing on market swings.",color:"from-blue-500 to-cyan-500",stats:"0% Loss Trades"},{icon:Rl,title:"AI-Enhanced Autonomous Trading",description:"Analyzes market patterns and executes trades with AI precision, adapting to changing conditions in real-time. Never worry about charts or timing again.",color:"from-purple-500 to-pink-500",stats:"Unattended Trading"},{icon:Xr,title:"Your Funds Stay Safe",description:"Funds remain secure in your Kraken/Coinbase accounts. Trading-only API access means we can never withdraw or transfer your money.",color:"from-emerald-500 to-teal-500",stats:"Your Keys, Your Crypto"},{icon:mt,title:"Takes What the Market Gives",description:"Capitalizes on market opportunities as they arise, taking profits when favorable and waiting patiently when not. Smart, patient trading.",color:"from-emerald-500 to-green-500",stats:"Market-Driven Results"},{icon:$r,title:"Lightning Fast Execution",description:"Executes trades in milliseconds, capitalizing on market movements before human traders can react. Speed gives you the competitive edge.",color:"from-yellow-500 to-orange-500",stats:"100ms Execution"},{icon:kp,title:"Real-Time Analytics",description:"Simple position and profit reporting gives you clear visibility into performance and total profits across Coinbase and Kraken.",color:"from-indigo-500 to-purple-500",stats:"Live Tracking"},{icon:Tp,title:"Start with Paper Trading",description:"Test the system risk-free with paper trading before going live. Build confidence and see performance without risking real money.",color:"from-pink-500 to-rose-500",stats:"Risk-Free Testing"}],oD=function(){const[e,t]=g.useState(new Array(Ps.length).fill(!1));g.useEffect(()=>{const r=new IntersectionObserver(o=>{o.forEach(i=>{if(i.isIntersecting){const s=parseInt(i.target.getAttribute("data-card-index")||"0");t(l=>{const c=[...l];return c[s]=!0,c}),Za("view","feature_card",Ps[s].title,1)}})},{threshold:.1});return document.querySelectorAll("[data-card-index]").forEach(o=>r.observe(o)),()=>r.disconnect()},[]);const n=(r,a)=>{Za("click","feature_card",`${r}_card_${a+1}`,1)};return d.jsx("section",{className:"py-10 px-4 relative",children:d.jsxs("div",{className:"max-w-7xl mx-auto",children:[d.jsxs("div",{className:"text-center mb-12",children:[d.jsxs("div",{className:"inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/30 to-pink-500/30  rounded-full px-4 py-2 border border-purple-400/40 mb-6 mt-4 shadow-lg shadow-purple-500/20",children:[d.jsx($r,{className:"w-4 h-4 text-purple-300"}),d.jsx("span",{className:"text-purple-200 font-medium",children:"Powerful Features"})]}),d.jsxs("h2",{className:"text-4xl md:text-5xl font-bold text-white mb-6",children:["Why Choose This",d.jsx("span",{className:"block text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text",children:"Autonomous Trading Platform"})]}),d.jsx("p",{className:"text-xl text-gray-200 max-w-3xl mx-auto",children:"Advanced autonomous technology with comprehensive risk management on trusted exchanges like Coinbase and Kraken."})]}),d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12",children:[d.jsx("img",{src:"/graphics/homepage-features-01.webp",alt:"The Never-Sell-At-A-Loss Rule - How the system protects your capital",className:"w-full rounded-2xl shadow-xl shadow-blue-500/10 border border-white/10 hover:scale-[1.02] transition-transform duration-300"}),d.jsx("img",{src:"/graphics/homepage-features-02.webp",alt:"24/7 Trading - Markets never sleep, neither does your robot",className:"w-full rounded-2xl shadow-xl shadow-purple-500/10 border border-white/10 hover:scale-[1.02] transition-transform duration-300"})]}),d.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:Ps.map((r,a)=>{const o=r.icon;return d.jsxs("div",{"data-card-index":a,onClick:()=>n(r.title,a),className:`group relative bg-white/8  rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl shadow-lg cursor-pointer ${e[a]?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,style:{transitionDelay:`${a*100}ms`,boxShadow:`0 8px 32px rgba(${a%2===0?"168, 85, 247":"236, 72, 153"}, 0.15)`},children:[d.jsx("div",{className:`absolute inset-0 bg-gradient-to-br ${r.color} opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300`}),d.jsx("div",{className:`relative w-12 h-12 rounded-xl bg-gradient-to-br ${r.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`,children:d.jsx(o,{className:"w-full h-full text-white"})}),d.jsxs("div",{className:"relative",children:[d.jsx("h3",{className:"text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 group-hover:bg-clip-text transition-all duration-300",children:r.title}),d.jsx("p",{className:"text-gray-300 text-sm leading-relaxed mb-4 group-hover:text-gray-200 transition-colors duration-300",children:r.description}),d.jsx("div",{className:`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${r.color} text-white shadow-md`,children:r.stats})]}),d.jsx("div",{className:`absolute inset-0 rounded-2xl bg-gradient-to-r ${r.color} opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl`})]},a)})})]})})},iD=function(){const e=()=>{Ho("start_trading_save_1000","cta_section"),zo("/go/gobabytrade?from=cta","Start Trading Save $1000 CTA")};return d.jsxs("section",{className:"py-10 px-4 relative overflow-hidden",children:[d.jsx("div",{className:"absolute top-10 right-10 opacity-8 pointer-events-none hidden xl:block",children:d.jsx("img",{src:"/robot-trading.png",alt:"",className:"w-20 h-20 animate-pulse"})}),d.jsxs("div",{className:"relative max-w-4xl mx-auto text-center",children:[d.jsxs("div",{className:"inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/30 to-pink-500/30  rounded-full px-4 py-2 border border-purple-400/40 mb-6 mt-4 shadow-lg shadow-purple-500/20",children:[d.jsx(ww,{className:"w-4 h-4 text-purple-300"}),d.jsx("span",{className:"text-purple-200 font-medium",children:"Ready to Start?"})]}),d.jsxs("h2",{className:"text-4xl md:text-6xl font-bold text-white mb-6 leading-tight",children:["Ready for True",d.jsx("span",{className:"block text-transparent bg-gradient-to-r from-green-300 via-blue-400 to-purple-400 bg-clip-text",children:"Set-It-and-Forget-It Trading?"})]}),d.jsx("p",{className:"text-xl text-gray-200 mb-8 max-w-3xl mx-auto",children:"GoBabyTrade is an AI-enhanced autonomous trading system that protects your capital while maximizing profits. Start with paper trading risk-free."}),d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",children:[d.jsxs("div",{className:"flex items-center justify-center gap-3",children:[d.jsx(qa,{className:"w-6 h-6 text-green-300 flex-shrink-0"}),d.jsx("span",{className:"text-gray-200",children:"Never trades at a loss"})]}),d.jsxs("div",{className:"flex items-center justify-center gap-3",children:[d.jsx(qa,{className:"w-6 h-6 text-green-300 flex-shrink-0"}),d.jsx("span",{className:"text-gray-200",children:"Your funds stay secure"})]}),d.jsxs("div",{className:"flex items-center justify-center gap-3",children:[d.jsx(qa,{className:"w-6 h-6 text-green-300 flex-shrink-0"}),d.jsx("span",{className:"text-gray-200",children:"Set it and forget it"})]})]}),d.jsxs("div",{className:"bg-gray-900/50 rounded-2xl border border-white/10 p-8 mb-8 max-w-3xl mx-auto shadow-lg shadow-purple-500/10 relative",children:[d.jsx("div",{className:"absolute bottom-4 right-4 opacity-10 pointer-events-none hidden md:block",children:d.jsx("img",{src:"/robot-trading.png",alt:"",className:"w-12 h-12"})}),d.jsxs("div",{className:"flex items-center justify-center gap-3 mb-6",children:[d.jsx(hw,{className:"w-8 h-8 text-green-300"}),d.jsx("h3",{className:"text-2xl md:text-3xl font-bold text-white",children:"Save $1,000 With My Link"})]}),d.jsxs("ul",{className:"text-left space-y-4 mb-6",children:[d.jsxs("li",{className:"flex items-start text-gray-200 group hover:text-white transition-all duration-300 hover:translate-x-2",children:[d.jsx(qe,{className:"w-5 h-5 text-purple-300 mr-3 mt-1 flex-shrink-0 group-hover:text-pink-300 transition-colors"}),d.jsx("span",{className:"text-lg",children:"AI-enhanced autonomous trading that works 24/7"})]}),d.jsxs("li",{className:"flex items-start text-gray-200 group hover:text-white transition-all duration-300 hover:translate-x-2",children:[d.jsx(qe,{className:"w-5 h-5 text-purple-300 mr-3 mt-1 flex-shrink-0 group-hover:text-pink-300 transition-colors"}),d.jsx("span",{className:"text-lg",children:"Never sells at a loss – waits for profitable opportunities"})]}),d.jsxs("li",{className:"flex items-start text-gray-200 group hover:text-white transition-all duration-300 hover:translate-x-2",children:[d.jsx(qe,{className:"w-5 h-5 text-purple-300 mr-3 mt-1 flex-shrink-0 group-hover:text-pink-300 transition-colors"}),d.jsx("span",{className:"text-lg",children:"Your funds stay in your own Coinbase or Kraken account"})]}),d.jsxs("li",{className:"flex items-start text-gray-200 group hover:text-white transition-all duration-300 hover:translate-x-2",children:[d.jsx(qe,{className:"w-5 h-5 text-purple-300 mr-3 mt-1 flex-shrink-0 group-hover:text-pink-300 transition-colors"}),d.jsx("span",{className:"text-lg",children:"Start with paper trading – zero risk to test the system"})]}),d.jsxs("li",{className:"flex items-start text-gray-200 group hover:text-white transition-all duration-300 hover:translate-x-2",children:[d.jsx(qe,{className:"w-5 h-5 text-purple-300 mr-3 mt-1 flex-shrink-0 group-hover:text-pink-300 transition-colors"}),d.jsx("span",{className:"text-lg",children:"Same system I use – see my live results above"})]})]}),d.jsx("p",{className:"text-lg text-green-300 font-medium",children:"Use my referral link to get $1,000 off GoBabyTrade!"})]}),d.jsx("div",{className:"flex justify-center mb-8",children:d.jsxs("a",{href:"/go/gobabytrade?from=cta",onClick:e,target:"_blank",rel:"noopener noreferrer",className:"group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-purple-500/30 flex items-center justify-center gap-2",children:["Start Trading – Save $1,000",d.jsx(qe,{className:"w-5 h-5 group-hover:translate-x-1 transition-transform"})]})}),d.jsxs("div",{className:"flex items-center justify-center gap-3 text-green-300",children:[d.jsx(mt,{className:"w-6 h-6"}),d.jsx("span",{className:"text-lg font-semibold",children:"Try Paper Trading First – Zero Risk, Real Results"})]})]})]})},sD=[{question:"Is my money safe?",answer:"Yes! Your funds stay in your own Kraken/Coinbase accounts. The system only connects via API with trading permissions - it can never withdraw or transfer your funds."},{question:"Do I need trading experience?",answer:"No experience required! The AI handles all analysis and decisions. You set your preferences and investment amount - the platform does the rest."},{question:"How much money do I need to start?",answer:"Start with as little as $100. It's recommended to start small to get familiar with the platform before scaling up your investment."},{question:"What if the system makes losing trades?",answer:"The GoBabyTrade protection system never executes losing trades. It waits for profitable opportunities or doesn't trade at all, safeguarding your capital."},{question:"Can I pause or stop the automated trading anytime?",answer:"Yes! You have complete control. Pause or stop anytime directly in the interface. When paused, the system stops making new trades but your existing positions remain untouched."}],lD=({question:e,answer:t})=>{const[n,r]=g.useState(!1);return d.jsxs("div",{className:"bg-gray-900/50 rounded-xl border border-white/10 overflow-hidden hover:border-purple-400/40 transition-all duration-300 shadow-lg shadow-purple-500/10",children:[d.jsxs("button",{onClick:()=>r(!n),className:"w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/10 transition-colors duration-200",children:[d.jsx("span",{className:"text-lg font-semibold text-white pr-4",children:e}),d.jsx("div",{className:"flex-shrink-0",children:n?d.jsx(sw,{className:"w-5 h-5 text-purple-300"}):d.jsx(iw,{className:"w-5 h-5 text-purple-300"})})]}),d.jsx("div",{className:`overflow-hidden transition-all duration-300 ease-in-out ${n?"max-h-96 opacity-100":"max-h-0 opacity-0"}`,children:d.jsx("div",{className:"px-6 pb-4 border-t border-white/20",children:d.jsx("div",{className:"text-gray-200 leading-relaxed pt-4",children:t})})})]})},cD=()=>d.jsxs("section",{className:"py-20 px-4 relative overflow-hidden",children:[d.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/30 to-slate-900 -z-10"}),d.jsx("div",{className:"absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-purple-500/10 to-transparent rounded-full -z-10 opacity-60"}),d.jsx("div",{className:"absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-radial from-blue-500/10 to-transparent rounded-full -z-10 opacity-60"}),d.jsxs("div",{className:"max-w-4xl mx-auto relative z-10",children:[d.jsxs("div",{className:"text-center mb-12",children:[d.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-white mb-4",children:"Common Questions"}),d.jsx("p",{className:"text-xl text-gray-300",children:"Quick answers to help you get started"})]}),d.jsx("div",{className:"max-w-2xl mx-auto mb-12",children:d.jsx("img",{src:"/graphics/homepage-faq-01.webp",alt:"3 Steps to Passive Income - Connect, Configure, Collect",className:"w-full rounded-2xl shadow-xl shadow-purple-500/10 border border-white/10"})}),d.jsx("div",{className:"space-y-3 mb-8",children:sD.map((e,t)=>d.jsx(lD,{question:e.question,answer:e.answer},t))}),d.jsx("div",{className:"text-center mb-12",children:d.jsxs(Pn,{to:"/faq",className:"inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-colors duration-200",children:[d.jsx(pw,{className:"w-5 h-5"}),d.jsx("span",{className:"text-lg",children:"View all 30+ questions →"})]})}),d.jsxs("div",{className:"mt-8 text-center bg-gradient-to-r from-gray-900/30 to-purple-900/20 rounded-2xl p-8 border border-white/10 shadow-lg shadow-purple-500/10",children:[d.jsx("h3",{className:"text-2xl font-bold text-white mb-4",children:"Ready to Start Trading?"}),d.jsx("p",{className:"text-gray-200 mb-6",children:"Get started with GoBabyTrade – the same AI-enhanced autonomous trading system I use. Try paper trading first, risk-free."}),d.jsx("a",{href:"https://crypto.gobabytrade.com/signup.aspx?RID=432706BE",target:"_blank",rel:"noopener noreferrer",className:"inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-8 rounded-xl hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg shadow-purple-500/50",children:"Start Trading – Save $1,000 →"})]})]})]}),uD=[{title:"13 Coins. 1,115 Trades. Zero Losers. Here's the Full Breakdown.",slug:"13-coins-zero-losers",published:!0,publishDate:"2026-03-17",date:"2026-03-17T12:00:00Z",heroImage:"/blog-images/13-coins-zero-losers-hero.webp",imageAlt:"13 coins, 1,115 trades, zero losers — full profit breakdown of AI-enhanced autonomous crypto trading",excerpt:"My AI-Enhanced Autonomous Trader runs 13 coins simultaneously. Every single one is profitable. Here's the full breakdown of 1,115 trades across 15 months.",metaDescription:"My AI-Enhanced Autonomous Trader runs 13 coins simultaneously. Every single one is profitable. Here's the full breakdown of 1,115 trades across 15 months.",category:"Education",author:"Patrick Jenkins",content:`# 13 Coins. 1,115 Trades. Zero Losers. Here's the Full Breakdown.

*Disclosure: I'm an affiliate for GoBabyTrade™. If you purchase through my link I earn a commission at no extra cost to you. I only promote what I personally use and pay for.*

I've always believed in diversification.

Whether it was long-term holding or short-term trading, putting everything on one bet never made sense to me. Spread the risk. Keep more options working. Let the portfolio breathe.

That instinct paid off in a way I didn't expect when I started running my AI-Enhanced Autonomous Trader.

Early on I was running 4-5 coins. The system was working — positions were open, rules were checking — but some stretches were just quiet. Meanwhile I'd glance at the market and see other coins moving. Volatility somewhere else. Opportunities the system couldn't touch because those lines weren't in the water.

So I added more coins.

What I didn't fully appreciate until it happened: adding coins doesn't just mean more trades. It means more inventory. Every new coin the system opens positions in is another set of entry points across different price levels and different market conditions. When one coin is flat, another is volatile. When the market shifts, some coins respond immediately while others take time. More coins means the portfolio is positioned for more scenarios simultaneously — not just more of the same.

Yes, the profits per individual trade got a little smaller. But here's what happened to the overall numbers — and why I think diversification isn't just a long-term investing principle. It's a short-term trading strategy too.

---

## Every Line Has Caught Something

My AI-Enhanced Autonomous Trader currently runs 13 coins simultaneously. Not because I think they're all going to pump. Because the system doesn't need them to.

Here's the all-time profit breakdown by coin:

![All-time profit breakdown by coin — every coin profitable](/blog-images/13-coins-zero-losers-01.webp)

| Coin | Total Profit |
|------|-------------|
| XYO | $1,084.88 |
| BONK | $925.49 |
| ACH | $613.73 |
| SWFTC | $498.63 |
| SUI | $449.96 |
| DOGE | $426.69 |
| GRT | $289.16 |
| SHIB | $284.57 |
| SPA | $277.40 |
| XCN | $197.05 |
| AST | $193.77 |
| PRCL | $51.85 |
| ZEC | $39.96 |

**Every single coin is profitable. Not one loser.**

That's not a hot streak. That's 15 months of a system doing exactly what it's designed to do — set a profit goal, wait for price to hit it, close the trade, reset.

---

## The Tiers Tell the Story

Looking at this data, four natural groups emerge.

![Profit tiers — workhorses, mid-tier, quiet contributors, and newest additions](/blog-images/13-coins-zero-losers-02.webp)

**The workhorses:** XYO and BONK together account for over $2,000 — nearly 38% of total profit from just two coins. These have been running the longest and have had the most trading activity.

**The reliable mid-tier:** ACH, SWFTC, SUI, and DOGE are all between $400 and $615. Consistent. Steady. Not flashy, just profitable month after month.

**The quiet contributors:** GRT, SHIB, and SPA sit between $270 and $290 each. Three coins that almost never make headlines but collectively add nearly $850 to the total.

**The newest additions:** XCN, AST, PRCL, and ZEC are still ramping up. ZEC was closing trades just yesterday. PRCL crossed $50 within its first few months.

---

## The Gray Bars Are Tomorrow's Blue Bars

Here's what I find most interesting about this breakdown.

XYO and BONK weren't always at the top. They started at $0 — just like PRCL and ZEC are today. The difference is time and trading activity.

Every coin in the newer tier right now is going through the same process the top earners went through. The system opens positions, waits for profit goals to trigger, closes them, and reinvests. Given enough time and market movement, the newest coins climb the ranks.

That's not optimism. That's math.

---

## Why Not Just Run the Top Coins?

This is the question I get asked most often.

If XYO and BONK are doing the heavy lifting, why bother with the others?

Because on any given day, you don't know which coin is going to be active.

When I was running 4-5 coins, there were quiet stretches — the system was working, positions were open, but nothing was closing. The fishing lines were in the water, just not getting bites.

Now with 13 coins running simultaneously, something is almost always closing. ZEC had 8 closes in a single day last week. ACH closed while ZEC was resetting. SWFTC closed while both were cycling.

The individual trade amounts are smaller. But the cooler is never empty.

---

## Is This Right for You?

Before you read this post and think "I should run 13 coins too" — let me be direct.

**Start with 4-5 coins.** That's the guidance from GoBabyTrade™ support, and it's right. More coins requires more capital deployed across more positions. If you spread too thin too early, you can actually dilute your results rather than amplify them.

What you're looking at in this post is what 15 months of portfolio growth looks like — not a starting point.

The path I took:
- Started with 4-5 coins and let the system run
- Watched the portfolio grow and positions mature
- Added coins gradually as capacity and capital allowed
- Reached maximum open positions per coin before expanding further

The community wisdom about staying focused early isn't wrong. It's actually what makes the expanded portfolio possible later. You can't skip to 13 coins — you have to earn your way there by letting the system do its work first.

If you're just getting started, follow GoBabyTrade™ support's guidance on coin selection and sizing. The 13-coin portfolio is the destination. The 4-5 coin portfolio is how you get there.

[Ready to see how autonomous trading works? Start here →](/go/gobabytrade)

*These are my personal opinions based on my own experience — not financial advice. Every trader's situation is different. Do your own research and make decisions that are right for you.*

---

## The Transparency Is the Point

Every trade in this breakdown is published on my transparency dashboard at myrobotictrader.com — the quiet days, the busy days, and everything in between.

No cherry-picking. No "my system made $X this month" without showing you the actual trades.

If you've been watching from the sidelines wondering whether this is real, the data is there. All 1,115 closed trades. Every coin. Every close.

*Not financial advice. Crypto trading involves significant risk. Past results don't guarantee future performance.*`},{title:"Why Your Account Value Is the Wrong Number to Watch (And What to Look At Instead)",slug:"why-account-value-lies-gobabytrade",published:!0,publishDate:"2026-03-12",date:"2026-03-12T12:00:00Z",heroImage:"/blog-images/why-account-value-lies-gobabytrade-hero.webp",imageAlt:"Why your account value is the wrong number to watch — understanding GoBabyTrade dashboard metrics",excerpt:"Every new GoBabyTrade™ user stares at the same number and feels the same anxiety. Here's why that number is designed to look bad — and what actually tells you if the system is working.",metaDescription:"Every new GoBabyTrade™ user stares at the same number and feels the same anxiety. Here's why that number is designed to look bad — and what actually tells you if the system is working.",category:"Education",author:"Patrick Jenkins",content:`# Why Your Account Value Is the Wrong Number to Watch (And What to Look At Instead)

*Disclosure: I'm an affiliate for GoBabyTrade™. If you purchase through my link, I earn a commission and you save $1,000. I only recommend it because I use it myself and the results are publicly documented on this site.*

---

I still think about it.

Not obsessively. But when I open my trader dashboard first thing in the morning, there it is — the account value — sitting right at the top of the screen, front and center, doing its best to make me nervous.

Ed Barsano, the creator of GoBabyTrade™, will tell you to ignore it. He says this on the webinar. He explains it clearly and it makes complete sense in the moment. Then the webinar ends, you log into your own dashboard for the first time, and that number stares back at you and none of it feels as clear anymore.

That's the gap I want to close with this post. Because Ed covers this well — it's just that webinars disappear. This doesn't.

---

## The Design Contradiction at the Heart of GoBabyTrade™

Here's something I've thought about more than I probably should: why is account value the *first* thing you see?

Ed tells you to ignore it. It's right at the top. That's a contradiction that causes real anxiety for real users, especially in the early weeks when you don't have months of closed trade history to anchor your confidence.

I don't say this to criticize Ed — the system itself is sound and my results prove it. But if I were advising him on one UX change, it would be this: move account value out of the top spot. Or remove it entirely. Your closed trade profit is the number that actually tells the story.

Here's why.

---

## What Account Value Actually Measures

Account value is a snapshot of everything in your portfolio at this exact moment — including every coin the system currently holds that hasn't been sold yet.

Those unsold coins were bought at specific prices. The system buys in layers, so if BTC is trending down, it might have bought at $45,000, $43,000, and $41,000. Right now BTC might be trading at $40,500. All three of those positions are "underwater" if you're looking at current market price vs. buy price.

Account value adds all of that up and shows you the total. On a day when the market is down, it looks like you're losing money.

You're not losing money. You're holding inventory.

---

## The 7-Eleven Principle

Think about a convenience store. When the store is fully stocked — shelves loaded with inventory — the owner has a lot of cash tied up in product. If you walked in and said "how much money do you have right now?" they might say "not much, it's all in the shelves."

That's not a crisis. That's the business working correctly. The money comes back when customers buy the inventory.

GoBabyTrade™ works the same way. The system buys crypto at strategic price points and holds it until the price rises enough to sell at a profit. When the market is down, you're stocked with inventory. When the market recovers, the system sells and the profit hits your closed trade count.

A lower account value often means the system is doing exactly what it's supposed to do: accumulating inventory at discounted prices.

![The 7-Eleven Principle — why a fully stocked portfolio isn't a problem](/blog-images/why-account-value-lies-gobabytrade-01.webp)

---

## The More Inventory, The Bigger the Dip

This is the part that took me a while to really internalize.

The more coins you have running in your portfolio, the more dramatic the account value dip will look during a down market. If you have 15 coins loaded and the market dips 10%, your account value is going to look rough. Not because you're losing — but because all 15 coins are holding positions that haven't been sold yet.

A smaller portfolio with 3 coins will show a much smaller dip. But it'll also generate fewer closed trades and less total profit over time.

This is why Ed suggests sizing your portfolio to what you're comfortable seeing in red. It's not a trading strategy question. It's a psychological tolerance question. How much can you see that number drop before you do something that undermines the system?

---

## What to Watch Instead

Here's my actual morning routine. I open the dashboard and I skip the account value. I go straight to:

**1. Closed Trades and Total Profit**
This is the scoreboard. Every closed trade is a real, realized gain. It doesn't matter what the market did today — if you have 847 closed trades at 100% success rate, the system is working. That number only goes up.

**2. Loaded Inventory**
How many coins are currently holding positions? This tells me the system is active and deployed. Full inventory in a down market means the system is positioned to profit when things turn around.

**3. Recent Sell Activity**
If I see sells happening, the market is cooperating and positions are closing. If it's quiet, the market is in accumulation mode. Both are fine.

That's it. Three data points. Takes about 30 seconds.

The account value? I see it, I acknowledge it exists, and I move on.

![What to watch instead — the three numbers that actually matter](/blog-images/why-account-value-lies-gobabytrade-02.webp)

---

## Why This Is Hard to Explain Outside a Webinar

Ed covers all of this in the weekly sessions with CryptoCasey and the FI4U team. He's good at it — personable, clear, and he shows his live trader which helps people see it in real time.

The problem is context evaporates. You watch a 90-minute webinar, you understand everything, you buy the software, and three weeks later the market dips and you're staring at a red number and trying to remember what Ed said about it.

That's what this post is for. Bookmark it. Come back to it the first time your account value drops and you start second-guessing yourself. Read the 7-Eleven section again. Look at your closed trades. Remember that the inventory is the strategy, not the problem.

---

## My Own Numbers, for Reference

As of this writing, my AI-Enhanced Autonomous Trader has:
- **1,000+ closed trades**
- **100% success rate on closed positions**
- **$5,000+ in verified profit**

My account value has dipped. Multiple times. It'll dip again. And every time it does, my closed trade count keeps climbing.

That's the system working.

You can see my full trade history on the [transparency dashboard](/results) — every trade, every coin, every profit. Not cherry-picked. Not screenshots. Live data.

---

## If You're Considering GoBabyTrade™

Understanding account value vs. closed trade profit before you buy is actually a big deal. Most people figure this out in the first month of owning the system. A few people don't figure it out and make a decision they regret.

Now you know before you buy.

If you're ready to explore it, you can get GoBabyTrade™ through my affiliate link below. You'll save $1,000 off the purchase price, and you'll have this site — and posts like this one — as a resource for the lifetime of your subscription.

→ **[Get GoBabyTrade™ — Save $1,000](/go/gobabytrade?from=blog-why-account-value-lies-gobabytrade)**

*Not financial advice. Crypto trading carries risk. My results are documented and real, but past performance doesn't guarantee future results.*

---

*Ed Barsano created GoBabyTrade™. This post reflects my own experience as a user and affiliate. I receive a commission on qualifying purchases.*`},{title:"How to Make Money Online Without Trading Your Time",slug:"how-to-make-money-online-without-trading-your-time",published:!0,publishDate:"2026-03-10",date:"2026-03-10T12:00:00Z",heroImage:"/blog-images/how-to-make-money-online-without-trading-your-time-hero.webp",imageAlt:"How to make money online without trading your time — passive income vs autonomous trading systems",excerpt:"Everyone online is selling 'passive income.' But most of it still needs you. Here's the difference between trading your time and actually building a system that runs without you.",metaDescription:"Everyone online is selling 'passive income.' But most of it still needs you. Here's the difference between trading your time and actually building a system that runs without you.",category:"Education",author:"Patrick Jenkins",content:`# How to Make Money Online Without Trading Your Time

I've been trying to crack the passive income code for years.

I tried Amazon FBA. I tried DePIN hardware nodes. I looked into dropshipping, affiliate blogging, digital products, and a dozen other "while you sleep" ideas.

And here's what I found: **most of what gets sold as passive income is actually just a different job.**

---

## The Side Hustle Lie Nobody Talks About

Here's the pitch you've seen a thousand times:

*"Make $5,000/month from home. Work 2 hours a week. Laptop lifestyle. Financial freedom."*

It sounds amazing. And some of it is technically true — for a little while.

But dig one layer deeper and the math usually looks like this:

**Amazon FBA:** I ran a textbook arbitrage business on Amazon. The model was simple — buy used textbooks from Amazon and AbeBooks sellers at low prices, time the resale around back-to-school rushes when demand spikes, and capture the margin in between. I had a processor who would receive the books, grade them, and ship them back into Amazon's fulfillment network. Clean operation. Legitimate sources. Amazon's own platform selling me the inventory.

Then one of my books sold — and Amazon audited me to prove I hadn't sold a fraudulent or pirated book.

A book they had listed. A book I bought from their own marketplace. A book their fulfillment center had been holding the whole time.

I had to jump on meetings, pull documentation, and defend myself against a fraud allegation for inventory Amazon sold me. That's not passive income. That's unpaid compliance work triggered at random with no warning and no recourse. The moment you build on their platform, they own the relationship — with your customers, your inventory, and your time.

**Dropshipping:** You're managing supplier relationships, handling returns, running ads, and testing products constantly. That's a part-time job dressed up as passive income.

**Content creation / blogging:** Takes 12-18 months to build enough traffic to earn meaningful money. You're writing 3-5 posts a week the whole time. Also a job.

**Selling digital products / courses:** Creating the product is months of work. Then you need an audience to sell to. Then ads, email funnels, customer support. Still trading time.

**Dividend investing:** Actually pretty passive — but you need $300,000 to $500,000 invested just to generate $1,000/month in dividends. Not a starter strategy.

None of these are *bad* ideas. I still run some of them. But none of them are truly passive in the way they're marketed. They're all built on the same model:

**Your input → Your output. Stop inputting, stop earning.**

---

## The Real Question to Ask

Before you invest time (or money) into any income stream, ask this:

> *"Does this system require me to keep showing up for it to keep working?"*

If the answer is yes — it's a job. It might be a flexible job, a job you love, or a job with great upside. But it's still a job.

The only income models that pass that test are ones where **a system does the work, not you.**

---

## What Actual Time-Independent Income Looks Like

Let me show you what my week looks like right now.

I have an AI-Enhanced Autonomous Trader running on my Coinbase account. It executes trades 24/7 using a systematic strategy built around one rule: **never sell at a loss.**

Every trade targets a 5% profit. When the market cooperates, it closes. When it doesn't, the position stays open and waits. No panic selling. No late-night chart watching. No emotional decisions.

Here's what I did this week to "manage" it:

- Checked my dashboard: 5 minutes
- Read a notification that two trades closed: 2 minutes
- Wrote this blog post: 45 minutes

That's it.

The system ran over **1,000 trades** last year. I didn't execute a single one manually. Every closed trade hit its profit target. The only "work" I did was setting it up and occasionally adding capital when I wanted to grow faster.

![How money flows through an autonomous trading system](/blog-images/how-to-make-money-online-without-trading-your-time-01.webp)

---

## Why This Works When Everything Else Doesn't

Most passive income ideas fail because they depend on *you* making good decisions consistently over time.

Trading manually? Your emotions will eventually cost you. Studies consistently show that retail investors underperform the market because they buy high out of excitement and sell low out of fear.

An autonomous trading system removes that variable entirely. The system doesn't have fear. It doesn't panic during a red week. It doesn't get greedy during a green week. It just executes the same strategy, over and over, at whatever hour the opportunity arrives.

I run 13 coins across my portfolio — diversified so no single coin makes or breaks my month. When one position is waiting for its target, others are closing and generating profit.

Last week the market was mostly red. Two trades closed anyway. That's the diversification working exactly as designed.

![Side-by-side comparison of emotional trading vs systematic trading](/blog-images/how-to-make-money-online-without-trading-your-time-02.webp)

---

## "But Crypto Is Risky"

Yes. And so is every other online income model.

The Amazon algorithm can de-rank your product overnight. The platform you built an audience on can change its algorithm and kill your traffic. Ad costs can make your dropshipping margins disappear. These are real risks that most passive income content completely ignores.

What makes my approach different isn't that it's risk-free — nothing is. What makes it different is:

1. **The risk is systematic, not emotional.** The rules don't change based on how I feel on a given Tuesday.
2. **The results are public.** Every trade I've made — wins and open positions — is published on this site. No cherry-picking. No hidden losses. All of it.
3. **The downside is defined.** Open positions aren't losses. The system never sells at a loss. They're positions waiting for their moment.

If you want to evaluate this honestly, go look at my [trading results](/results). Not the highlights. All of it.

---

## The Honest Version of the Promise

I'm not going to tell you this makes money "while you sleep" in the cheesy way that phrase usually gets used.

I'll tell you what I actually experience:

- I set up the system once
- I check in when I feel like it
- Trades close when the market hits the target
- I reinvest half the profits, bank the other half
- I'm building toward a number, not grinding toward it

That's the closest thing to genuinely time-independent online income I've found in 20+ years of looking.

Everything else I've tried — including the things that *are* working for me — still requires me to show up. This one doesn't.

---

## "But Wait — You're Running a Blog Right Now"

Fair point. And I'm glad you're paying attention.

Yes, I run this blog. I also run DePIN hardware nodes and I'm building a PKI compliance platform called FixMyCert. None of those are passive in the way the trader is. They all require me to keep showing up.

Here's the honest difference: **the trader doesn't care whether I blog or not.**

If I stopped writing tomorrow, the system would keep executing trades. The positions would still close at their targets. The profit would still compound. The blog is something I *choose* to build on top of the trader because it generates affiliate income and I genuinely enjoy documenting the journey.

But it's a choice — not a requirement.

That's the test I mentioned earlier. The trader passes it. The blog doesn't, and I'm not pretending otherwise.

What I'm working toward is the day the trader is my primary income — when the trading profits are large enough that the consulting work, the content, and the side projects become optional. That's the goal. I'm not there yet. But every closed trade is a step in that direction, and I'm not going to hide where I am in the journey just to make the pitch sound cleaner.

And honestly? This site is my scoreboard.

On a flat week, when the market is red and nothing has closed, I come back here and look at the full trade history. I look at how many trades have closed at a profit. I look at how long I've been running this. And it reminds me that the process is working — even when the day-to-day doesn't feel like it.

That's not a small thing. Staying focused during a slow stretch is where most people quit. The scoreboard keeps me from becoming one of them.

The other reason I write is simpler: most people have never heard of this trader. They're out there grinding side hustles, watching charts they don't understand, or getting burned by platforms that are closer to casinos than investing tools. If I can put this in front of even a handful of people who genuinely need it, that matters to me. This is one of the most underrated tools in the passive income space and I think more people deserve to know it exists.

---

## Ready to Stop Trading Your Time?

The system I use is called GoBabyTrade™, created by Ed Barsano. It's the engine running my autonomous trading operation.

I'm an affiliate, so I'll be upfront: I earn a $1,000 commission if you buy through my link. In exchange, you get **$1,000 off the purchase price** — so the deal is identical either way.

What you get is the same system I'm running, with the same strategy, the same diversification approach, and access to the same community.

If you're done reading about passive income and ready to actually build something that doesn't require you to keep showing up — [take a look here](/go/gobabytrade?from=blog-how-to-make-money-online-without-trading-your-time).

Still deciding? Browse my [complete trade history](/results) first. Every trade. Every coin. Full transparency.

*Affiliate disclosure: I earn a $1,000 commission on qualifying purchases. You save $1,000 off the standard price using my link. Crypto trading involves risk. Results shown are my personal results and are not a guarantee of future performance. This is not financial advice.*`},{title:"The CLARITY Act: What It Means for Crypto in Plain English",slug:"clarity-act-crypto-plain-english",published:!0,publishDate:"2026-03-08",date:"2026-03-08T12:00:00Z",heroImage:"/blog-images/clarity-act-crypto-plain-english-hero.webp",imageAlt:"The CLARITY Act explained — what crypto regulation means for systematic traders",excerpt:"Everyone's nervous about crypto regulation. Systematic traders shouldn't be. Here's what the CLARITY Act actually means — and why your 'safe' investments might be more complex than you think.",metaDescription:"Everyone's nervous about crypto regulation. Systematic traders shouldn't be. Here's what the CLARITY Act actually means — and why your 'safe' investments might be more complex than you think.",category:"Education",author:"Patrick Jenkins",content:`# The CLARITY Act: What It Means for Crypto in Plain English

*You don't need to follow every move in Washington to be a smart crypto participant. But understanding what's changing — and why — might surprise you.*

---

Every time regulation gets mentioned in crypto circles, people panic.

Sell buttons get clicked. Twitter erupts. Everyone has an opinion about government overreach and the death of decentralization.

I think most of them are missing the point entirely.

The CLARITY Act is working its way through Congress right now — and for systematic, rules-based crypto traders, it might be one of the most positive developments in years. Let me explain why.

But first, let's have an honest conversation about "safe" investments.

---

## The Complexity Nobody Talks About

When people tell me crypto is too complex, too volatile, or too risky, I always want to ask: compared to what, exactly?

**Bonds.** The classic "safe" investment. What most people don't realize is that bonds are deeply sensitive to interest rates. When rates rise, bond values fall — sometimes significantly. Duration risk, yield curves, credit spreads — most bond holders couldn't explain what they actually own. They just see "bonds" on their statement and feel safe. The 2022 bond market was one of the worst on record. Safe is relative.

**Options.** Here's one I'll be honest about — I had no idea options were quietly embedded inside mainstream funds until I started digging into this. Funds like JEPI, QYLD, and XYLD are funds you can buy right now on Vanguard or Fidelity, marketed as income-generating and conservative. What most buyers don't realize is that these funds systematically sell call options against their holdings to generate that yield. It's right there in the prospectus. But who reads the prospectus?

Here's why that matters: when you sell a call option, you collect premium income — but you cap your upside in exchange. In a big bull market rally, these funds miss a chunk of the gains. That juicy 8-10% yield can look great on paper while the underlying holdings quietly underperform. The complexity is hidden behind a yield number. Most people buying these for "safe income" have no idea that tradeoff exists.

That's not necessarily wrong — it's just not what most people think they're buying.

Now here's the contrast that stops me every time I think about it:

**A systematic crypto trader does one thing: buy low, sell high, take the profit, repeat.**

No Greeks. No capped upside. No hidden mechanics buried in a prospectus. Just the most fundamental concept in all of investing — executed by rules instead of emotions, with every single trade published for anyone to verify.

The "complex, risky" investment is actually the simplest instrument in this comparison. Every asset class has complexity. Only one publishes the entire rulebook.

![Complexity comparison infographic](/blog-images/clarity-act-crypto-plain-english-01.webp)

---

## So What Is the CLARITY Act?

The CLARITY Act — short for the Digital Asset Market Clarity Act — attempts to do something the crypto industry has needed for years: draw a clear legal line between what counts as a security and what counts as a commodity in the digital asset world.

Why does that distinction matter?

Right now, the SEC (Securities and Exchange Commission) and the CFTC (Commodity Futures Trading Commission) have been in a turf war over crypto. The SEC claims many tokens are securities. The CFTC says many are commodities. Exchanges, developers, and investors have been operating in a gray zone with no clear rulebook.

The CLARITY Act aims to resolve that by establishing defined criteria for classification — essentially creating a framework that tells everyone which rules apply, who enforces them, and what compliance looks like.

In plain English: it's the crypto industry getting a proper rulebook for the first time.

---

## What Changes for Everyday Crypto Holders?

For someone holding Bitcoin or trading on Coinbase, the day-to-day experience doesn't change dramatically. But the environment does:

**Less regulatory anxiety.** A significant portion of crypto's volatility comes from regulatory uncertainty — the "will this exchange get shut down?" or "is this coin about to be declared a security?" fear that triggers panic selling. Clearer rules reduce that specific flavor of chaos.

**Stronger exchange standards get formalized.** Exchanges like Coinbase and Kraken already apply strict listing requirements — security audits, compliance checks, liquidity standards. The CLARITY Act gives formal regulatory backing to those standards across the board. The coins that have already passed those filters get a more stable operating environment.

**Scam coins and rug pulls get harder to run.** Clearer classification and enforcement makes the sketchy end of the market harder to operate. That's noise reduction for legitimate participants.

**Institutional money gets a green light.** Large institutional investors — pension funds, endowments, asset managers — have been sitting on the sidelines waiting for regulatory clarity before allocating to crypto. That capital doesn't come in all at once, but the door opens. More liquidity generally means a more mature, stable market.

![What the CLARITY Act changes infographic](/blog-images/clarity-act-crypto-plain-english-02.webp)

---

## Will It Reduce Volatility?

This is the interesting question — and the honest answer is: probably somewhat, but not entirely. And that's actually fine.

The case for reduced volatility is real. Institutional capital trades differently than retail emotion. Big funds don't panic sell because of a tweet. They have mandates, risk limits, and long time horizons. More institutional participation should dampen the extreme regulatory panic spikes — the 20-30% single-day drops that happen when an SEC headline hits.

But crypto's volatility isn't going away. Here's why:

It trades 24 hours a day, 7 days a week, 365 days a year. It's a global market with participants in every time zone reacting to sentiment in real time. Some of the coins in the market — DOGE, SHIB — are inherently sentiment-driven assets. Regulation doesn't rewire human psychology.

Compare that to bonds, which people assume are stable: in 2022, long-duration bond funds dropped 30% or more as rates rose. Or options, which can expire worthless overnight regardless of how "safe" the underlying strategy seemed.

Volatility exists everywhere. The question is whether you have a system for navigating it — or whether you're reacting to it emotionally.

---

## Why This Is Good News for Systematic Traders

Here's the angle most people miss entirely.

A systematic, rules-based trading approach is almost perfectly positioned for a post-CLARITY Act crypto market:

**Regulatory clarity rewards transparency.** My trading system already operates on a voluntary transparency model — every trade published, every result verifiable. That's exactly the kind of approach a regulated environment rewards and the kind of approach that builds long-term trust.

**More liquidity means better execution.** Institutional money entering the market improves liquidity across the board. Better liquidity means tighter spreads and more efficient order execution for everyone — including autonomous trading systems working on 5% profit targets.

**The noise gets filtered out.** Scam coins disappearing, sketchy exchanges getting shut down, clearer rules about what's legitimate — all of that cleans up the environment systematic traders operate in. Less noise, more signal.

**The system doesn't care about the news cycle.** While everyone else is debating whether regulation is good or bad, an autonomous trading system just keeps executing its rules. There's no panic. No paralysis. No 3 AM decisions driven by a Washington headline. The rules run regardless.

My system, powered by GoBabyTrade™ technology created by Ed Barsano, has been running through regulatory uncertainty, market downturns, and everything in between. The positions that are open stay open until they hit profit targets. The system doesn't read the news. It just executes.

![Why systematic traders benefit infographic](/blog-images/clarity-act-crypto-plain-english-03.webp)

---

## The Bottom Line

The CLARITY Act isn't the death of crypto. It's the beginning of crypto becoming something that institutional money — and Main Street — can participate in with a proper framework.

Will it solve everything? No. Will some aspects of the regulation create friction for certain projects? Probably. Is the final form of the legislation uncertain? Absolutely — it's still moving through Congress and the details will evolve.

But the direction of travel is clear: crypto is moving toward structure, transparency, and legitimacy.

For a systematic trader who was already operating transparently on regulated exchanges, that's not a threat.

It's a tailwind.

---

## Curious What Systematic Trading Actually Looks Like?

Every trade I make is published on my results dashboard — open positions, closed trades, running totals. No cherry-picking, no hiding the slow months.

👉 [See the live trading results at MyRoboticTrader.com](https://myrobotictrader.com)

---

*This post is for educational purposes only and is not financial or legal advice. The CLARITY Act is still working through the legislative process — consult appropriate professionals for guidance specific to your situation. Crypto involves real risk, including the potential loss of principal.*

*Disclosure: I earn a commission if you purchase the GoBabyTrade™ system through my affiliate link. I only recommend tools I personally use.*`},{title:"What Is Crypto Trading, Really? (It's Not What Most People Think)",slug:"what-is-crypto-trading-really",published:!0,publishDate:"2026-03-07",date:"2026-03-07T12:00:00Z",heroImage:"/blog-images/what-is-crypto-trading-really-hero.webp",imageAlt:"What is crypto trading explained — speculating vs investing vs systematic trading",excerpt:"Most people think crypto trading means staring at charts and making split-second decisions. They're wrong. Here's what's actually happening — and why it matters for your money.",metaDescription:"Most people think crypto trading means staring at charts and making split-second decisions. They're wrong. Here's what's actually happening — and why it matters for your money.",category:"Education",author:"Patrick Jenkins",content:`# What Is Crypto Trading, Really? (It's Not What Most People Think)

*You don't need to know this to use an autonomous trading system. But understanding it might change how you think about crypto entirely.*

---

When most people hear "crypto trading," they picture one of two things:

A hoodie-wearing twenty-something in a dark room with six monitors, screaming at charts. Or a get-rich-quick scheme their cousin won't stop texting about.

Neither is accurate. And the confusion between those two extremes is exactly why most people either jump in recklessly or never get started at all.

Let me give you the real explanation — the one nobody bothered to give me when I started.

---

## First, Let's Separate Three Things People Constantly Confuse

There are actually three distinct activities people lump together under "crypto trading." They're completely different, and mixing them up leads to bad decisions.

**1. Speculating** — This is what most retail participants are doing, even if they don't realize it. You buy a coin hoping the price goes up, then sell when it does (or panic when it doesn't). There's no system, no strategy — just prediction and hope. This is the closest thing to gambling that exists in the crypto space. Most people who "lose money in crypto" were speculating.

**2. Investing** — You buy a digital asset because you believe in its long-term value and you're willing to hold through volatility. Think of it like buying stock in a company you believe in. Longer time horizon, less panic over daily moves.

**3. Trading** — This is where it gets interesting. Trading is systematic buying and selling based on defined rules — not feelings, not predictions, not hoping. You set criteria for when to buy, when to sell, and what price targets trigger action. Done right, it removes emotion from the equation entirely.

Most of the noise you see online? That's speculating dressed up as trading. Real trading is boring by design.

![What Is Crypto Trading infographic](/blog-images/what-is-crypto-trading-really-01.webp)

---

## So What's Actually Happening When Someone "Trades Crypto"?

At its most basic level, crypto trading is exchanging one digital asset for another — or exchanging dollars for a digital asset and back again — with the goal of ending up with more than you started with.

Here's a simple example:

You buy 1,000 units of a coin at $0.10 each. That's a $100 purchase. The coin rises to $0.105. You sell all 1,000 units for $105. You just made $5.

That's a trade. A $5 profit on a $100 position. 5%.

Now imagine doing that systematically — with rules that trigger automatically, across 12 different coins, hundreds of times a year — without you watching a single chart.

That's what an autonomous trading system does. That's what I run at MyRoboticTrader.

---

## Why Do Prices Move in the First Place?

This is where people get lost in technical analysis — all those charts with lines and indicators that look like a heart monitor during a panic attack.

Here's the simple truth: prices move because of supply and demand. That's it.

When more people want to buy a coin than sell it, the price goes up. When more people want to sell than buy, it goes down. Everything else — the charts, the indicators, the "signals" — is just people trying to predict which direction that imbalance is heading next.

What most traders get wrong is thinking they can predict those moves accurately and consistently. Professional traders with millions in technology and research behind them struggle to do this reliably. Regular people doing it from their phones? The math doesn't work in their favor.

This is exactly why a rules-based system clicked for me. Before this, my investing experience was reading Value Line reports for my 401K — solid research, but I was still essentially picking stocks and hoping. There was no system triggering buys and sells. The autonomous trader changed that entirely. It has one job: execute the rules, take the profits, repeat.

---

## What Makes Crypto Different From Stocks?

A few things worth understanding:

**It trades 24/7/365.** The stock market closes at 4 PM. Crypto never sleeps. This is why autonomous systems are so well-suited to it — a human literally cannot monitor positions around the clock. A system can.

**It's more volatile.** A stock moving 5% in a day is a big deal. In crypto, 5% is Tuesday. That volatility creates more frequent opportunities for systematic profit-taking — but it also creates more risk for people trading emotionally.

**It's borderless.** No broker, no approval process, no middleman required. Anyone with internet access can participate. That's both the opportunity and the danger — it's accessible to people who've never learned the rules.

**It's more transparent than traditional finance by nature.** When people transact directly — swapping coins from personal wallets or using decentralized platforms — those transactions are recorded permanently on a public blockchain that anyone can view. That's the transparency crypto is famous for. Trading on a centralized exchange like Coinbase is different — those trades are recorded by the broker, not on-chain. On my end, I take that a step further by voluntarily publishing my own trading results. Every trade, every result, openly shared on my dashboard. Anyone can verify what the system produces. That kind of voluntary transparency is almost unheard of in investing.

![Crypto vs Stocks comparison infographic](/blog-images/what-is-crypto-trading-really-02.webp)

---

## The Part Nobody Talks About: Most "Traders" Aren't Trading

Here's an uncomfortable truth: the vast majority of people in crypto are speculating, not trading.

The difference matters enormously.

A speculator buys and hopes. When the price drops, they hold and hope harder. When it drops more, they either panic-sell at a loss or go numb and check the price every five minutes. This is gambling behavior with a technical-looking dashboard on top of it.

A systematic trader has rules. When to buy, when to sell, what profit target triggers a sale, what happens when prices decline. There's no hoping involved — just execution.

I'll be honest with you: before running a systematic trader, my crypto experience was buying and holding Bitcoin — and doing some mining. Classic long-term hold mentality. Not wrong, but also not a system. No defined rules for when to buy more, when to take profits, nothing. The autonomous trader brought the structure that was missing. The rules are set. The system executes. I check in periodically but I'm not watching candles at 2 AM anymore.

---

## Does This Mean Crypto Is "Safe"?

No. Let's be clear about that.

Any individual coin can go to zero — that's a real risk. However, coins traded on major exchanges like Coinbase and Kraken have to pass strict listing requirements covering security, compliance, and legitimacy. That's not a guarantee, but it's a meaningful filter compared to random tokens on unregulated platforms.

There's also something important to understand about account value: if you're running a systematic trader, your account balance on any given day can look discouraging. Open positions sitting below your buy price will drag the number down. But for a systematic trader, that number is misleading. Those aren't losses — they're positions waiting to hit their profit targets. The only number that matters is closed trade profit. Account value is a snapshot, not the scoreboard.

What systematic trading does is manage the risk through rules rather than reactions. My system, powered by GoBabyTrade™ technology created by Ed Barsano, operates on a "never sell at a loss" principle — meaning open positions stay open until they hit profit targets. An open position isn't a loss. It's an order waiting to be filled.

But that philosophy requires patience, capital management, and a system you trust. It's not magic. It's methodology.

*This is not financial advice. Crypto carries real risk. Do your own research and never invest more than you're comfortable losing.*

---

## Why Any of This Matters

Understanding what trading actually is — versus what you see hyped on social media — changes how you evaluate opportunities.

When someone shows you a screenshot of massive gains, you can now ask: was that a trade, or speculation that happened to work out? Is there a system behind it, or luck dressed up as skill?

When you see someone panicking about a market dip, you understand why: they're speculating with no rules, and fear is running the show.

And when you see a transparency dashboard showing hundreds of closed trades, all profitable, over a period of years — you know what to look for. Consistency. Rules. Methodology. Not fireworks.

That's what I've been building at MyRoboticTrader. Every trade published. Every result verifiable. No hype, no promises — just a documented, systematic approach to a market most people are approaching like a casino.

---

## Want to See What Systematic Trading Actually Looks Like?

I publish every trade — open and closed — on my live results dashboard. No cherry-picking, no hiding the down months. You can see exactly how the system performs over time.

👉 [Check out the live trading results at MyRoboticTrader.com](https://myrobotictrader.com)

---

![Systematic trading vs speculation — why rules beat emotions](/blog-images/what-is-crypto-trading-really-03.webp)

*Disclosure: I earn a commission if you purchase the GoBabyTrade™ system through my affiliate link. I only recommend tools I personally use. Results vary — past performance is not indicative of future results.*`},{title:"I Just Rebalanced My Portfolio: Here's Exactly What I Changed and Why",slug:"portfolio-rebalance-march-2026",published:!0,publishDate:"2026-03-05",date:"2026-03-05T12:00:00Z",heroImage:"/blog-images/portfolio-rebalance-march-2026-hero.webp",imageAlt:"Portfolio rebalance breakdown showing 13 coin allocations and lot depth strategy for March 2026",excerpt:"Full transparency: I just made changes to my AI-Enhanced Autonomous Trader portfolio. Here's every coin, every allocation, and the reasoning behind why I run 10+ active coins instead of the conventional 4-5.",metaDescription:"Full transparency: I just made changes to my AI-Enhanced Autonomous Trader portfolio. Here's every coin, every allocation, and the reasoning behind why I run 10+ active coins instead of the conventional 4-5.",category:"Education",author:"Patrick Jenkins",content:`# I Just Rebalanced My Portfolio: Here's Exactly What I Changed and Why

*Affiliate disclosure: This post contains links to GoBabyTrade™. I earn a commission if you purchase through my link, at no extra cost to you. I only promote tools I personally use.*

One of the things I've committed to with MyRoboticTrader is radical transparency. Not just publishing closed trades — but showing you the actual decisions I make with my portfolio, the reasoning behind them, and yes, the open positions that are still sitting in the red.

So here it is. A full look at my March 2026 portfolio rebalance.

---

## What My Portfolio Looks Like Right Now

My AI-Enhanced Autonomous Trader is currently running across **13 coins total** — 10 actively funded, and 3 sitting on the bench at zero allocation (but still holding open positions).

Here's the full breakdown:

| Coin | Allocation | Open Positions | Current P&L |
|------|-----------|----------------|-------------|
| BONK | 20% | 26 | -$2,583 |
| SUI | 14% | 20 | -$1,859 |
| AST | 9% | 18 | -$655 |
| GRT | 9% | 17 | -$1,166 |
| SPA | 9% | 12 | -$896 |
| SWFTC | 9% | 19 | -$1,084 |
| ACH | 8% | 16 | -$827 |
| XCN | 8% | 19 | -$948 |
| ZEC | 7% | 2 | **+$10** |
| PRCL | 7% | 1 | -$2 |
| DOGE | 0% (benched) | 19 | -$1,318 |
| XYO | 0% (benched) | 22 | -$879 |
| SHIB | 0% (benched) | 16 | -$682 |

**Cash remaining: $8,917**

![My current portfolio allocation breakdown](/blog-images/portfolio-rebalance-march-2026-01.webp)

Yes, most of those P&L numbers are red. That's intentional — and I'll explain why that's actually the point in a moment.

---

## What I Changed (And Why)

**I reduced BONK from a higher allocation.** BONK had accumulated 26 open positions — the most of any coin in my portfolio. With a 30-lot maximum in the system settings, it was getting close to the ceiling. Trimming the allocation percentage gives the system room to breathe rather than hitting the lot cap and going idle.

**I added PRCL as a new coin.** PRCL is a Real World Asset (RWA) tokenization play — essentially blockchain-based real estate exposure. RWA tokens are one of the few sectors with genuine institutional narrative momentum right now. With only 1 open position at a nearly breakeven P&L, it's a clean, low-baggage entry. I'm watching it.

**I benched DOGE, SHIB, and XYO at 0%.** These three coins have significant open positions (19, 16, and 22 respectively) but I've stopped adding new capital. They're not abandoned — they're loaded springs. When prices recover, those positions will close profitably. Until then, I'm not throwing more fuel on the fire.

---

## Why I Run 10+ Coins Instead of the Conventional 4-5

Here's where I'll push back a little on conventional wisdom in the GoBabyTrade™ community.

The standard guidance is to run 4-5 coins. And for a smaller capital base, that makes complete sense — your system needs enough depth per coin to ride it down and still have buying power.

But here's the thing the 4-coin rule doesn't account for: **the 30-lot maximum.**

Each coin in the system has a maximum of 30 lots before it stops buying. In a prolonged bear market (exactly the environment we're in), aggressive coins can hit that ceiling and go idle — they're just holding positions and waiting. If you're only running 4 coins and all 4 hit their lot cap, your system has essentially stopped working. It's just waiting.

More coins = more active trading engines at different lot depths.

Look at my current portfolio through that lens:
- BONK: 26 lots — nearly capped, buying slowing down
- SUI: 20 lots — still active but getting deep
- SWFTC: 19 lots — same
- **PRCL: 1 lot — wide open, actively working**
- **ZEC: 2 lots — wide open, actively working**

At any given moment, some coin in my portfolio is always in active trading territory while others are holding and accumulating. That's not dilution — that's staggered lot utilization.

![Why more coins means more active trading engines](/blog-images/portfolio-rebalance-march-2026-02.webp)

The counterargument is that spreading capital thinner across more coins reduces how deeply each coin can build inventory. That's a fair point. My answer: I have enough capital deployed that each active coin still has meaningful allocation, and I still have $8,917 in reserve.

---

## The $8,917 That Matters

I want to address something directly: looking at a portfolio full of red numbers, someone might assume I'm stretched thin and just hoping for a recovery.

I'm not.

I have $8,917 in undeployed cash sitting in reserve. My three benched coins (DOGE, SHIB, XYO) are holding their positions and waiting — not burning capital. And my 10 active coins are spread across different lot depths, meaning the system always has somewhere to work.

This isn't a portfolio under stress. It's a portfolio that's been strategically built during a down market — exactly when the system is designed to accumulate inventory.

Every open position is a trade the system made at a specific price, targeting a 5% profit to close. When prices recover, those positions don't disappear — they become the inventory that drives the next wave of realized profits.

---

## The Open Positions Are Not Losses

I say this often, but it bears repeating: **open positions are not losses.**

A loss is when you sell below your purchase price and lock in the damage permanently. My system doesn't do that. Every one of those 200+ open positions across my portfolio is waiting for a 5% price recovery to close profitably.

The red numbers you see in the P&L column represent the current unrealized gap between what I paid and today's price. In a down market, that gap can be wide. But the positions are still there. The inventory is still there. And when the market turns, the system will work through that inventory systematically — just like it always has.

![Open positions vs actual losses - the key difference](/blog-images/portfolio-rebalance-march-2026-03.webp)

---

## What I'm Watching Next

A few things I'm keeping an eye on as this portfolio settles:

**PRCL's activity.** RWA as a sector is early but has real legs. I want to see how the system interacts with it over the next 30-60 days before I consider increasing the allocation.

**ZEC's performance.** ZEC is already profitable (+$10) with only 2 open positions. That's a great early sign — it means the system was able to close trades without needing to build deep inventory first.

**The benched coins.** DOGE especially has 19 open positions and solid historical trade velocity (69 trades in the last 3 months at the platform level). When I decide to re-activate it, it'll hit the ground running.

---

## The Bottom Line

I rebalanced because the portfolio needed it — BONK was getting heavy, I wanted fresh exposure in RWA, and the lot depth across coins wasn't as staggered as I'd like.

The result: 10 active coins at varied lot depths, 3 loaded springs on the bench, and nearly $9,000 in reserve. The system is working. The inventory is building. The scoreboard will keep going up.

If you want to see every trade — open and closed — in real time, my full results are published publicly on this site. No cherry-picking, no hiding the red.

That's the whole point.

*Want to learn more about how the GoBabyTrade™ system works? [Check out my results page](/results) and see the verified trade history for yourself. If you decide it's right for you, you can get started [here](/go/gobabytrade?from=blog-portfolio-rebalance-march-2026) — I offer a $1,000 discount to anyone who reaches out before purchasing.*

---

*Risk disclaimer: Cryptocurrency trading involves substantial risk of loss. Past results are not indicative of future performance. This post is for educational purposes only and is not financial advice. Always do your own research before investing.*`},{title:"Crypto Trading Bots: Do They Actually Work? (My $5,363 Answer)",slug:"crypto-trading-bots-do-they-work",published:!0,publishDate:"2026-03-01",date:"2026-03-01T12:00:00Z",heroImage:"/blog-images/crypto-trading-bots-do-they-work-hero.webp",imageAlt:"Crypto trading bot analysis with real trading data showing $5,363 in verified profits",excerpt:"The internet is full of opinions on crypto trading bots. I have 1,072 trades and $5,363 in verified profits. Let me show you what actually works.",metaDescription:"The internet is full of opinions on crypto trading bots. I have 1,072 trades and $5,363 in verified profits. Let me show you what actually works.",category:"Education",author:"Patrick Jenkins",content:`The internet is full of opinions on crypto trading bots.

YouTube influencers say they're the secret to passive income. Reddit says they're all scams. Twitter says you need to code your own. Everyone has a take.

I have something better than an opinion.

I have **1,072 trades**, a **100% win rate on closed positions**, and **$5,363.92 in verified, realized profits** — every single trade published publicly for anyone to see.

So let me give you the honest answer that nobody else will.

---

## First, Let's Define "Crypto Trading Bot"

Here's where most conversations go wrong immediately.

When people say "crypto trading bot," they usually mean one of three very different things:

**1. Signal bots** — They send you alerts telling you when to buy or sell. You still have to execute manually. These aren't really bots at all.

**2. Simple automation tools** — Platforms like 3Commas, Pionex, or Cryptohopper that let you set basic rules. "Buy when RSI drops below 30, sell when it rises above 70." Simple, rigid, and easy to break.

**3. AI-enhanced autonomous trading systems** — Sophisticated software that monitors markets 24/7, executes trades based on dynamic logic, and adapts to changing conditions. This is what I use.

Most people asking "do crypto trading bots work?" are thinking about category 2. The honest answer there is: *sometimes, for some people, with a lot of babysitting.*

But category 3? That's a completely different conversation.

![Which bot type actually wins — bracket-style comparison](/blog-images/crypto-trading-bots-do-they-work-01.webp)

---

## What the Data Actually Shows

Let me show you my real numbers — not projections, not backtests, not paper trades. Real money, real trades, fully public.

**Overall Performance (January 2025 – February 2026):**

| Month | Trades | Profit |
|-------|--------|--------|
| January 2025 | 116 | $502.43 |
| February 2025 | 152 | $661.51 |
| March 2025 | 75 | $266.28 |
| April 2025 | 106 | $554.74 |
| May 2025 | 78 | $373.53 |
| June 2025 | 72 | $379.26 |
| July 2025 | 173 | $823.06 |
| August 2025 | 67 | $407.83 |
| September 2025 | 42 | $229.06 |
| October 2025 | 45 | $259.95 |
| November 2025 | 36 | $288.75 |
| December 2025 | 27 | $180.38 |
| January 2026 | 53 | $211.70 |
| February 2026 | 30 | $225.44 |
| **TOTAL** | **1,072** | **$5,363.92** |

Notice something? **Every single month is green.**

Not because the crypto market went up every month — it didn't. Because the system's logic doesn't require the market to cooperate.

---

## The "Never Sell at a Loss" Philosophy

Here's the core principle that makes this work, and why it's fundamentally different from what most bots do.

Most trading bots have stop-losses. When a trade goes against them, they sell at a loss to "protect capital." This sounds smart. It isn't.

Every time you sell at a loss, you:
1. Lock in a real loss permanently
2. Miss the recovery when it happens
3. Pay taxes on your realized loss
4. Have to make MORE profit just to break even

My system never sells at a loss. Ever.

Instead, it **accumulates positions in declining markets** and **profits as prices recover**. Think of it like a store stocking shelves at discount prices. The inventory isn't worth less — you just haven't sold it yet.

The scoreboard only goes up because losses are never made permanent.

---

## What Happened While I Was Writing This Post

Here's something I think illustrates this perfectly.

While I was sitting at my computer doing SEO research on a Saturday night — not watching charts, not monitoring anything — my system closed three trades:

- **ZEC** — closed for $4.38 profit
- **BONK** — closed for $6.95 profit
- **SWFTC** — closed for $3.26 profit

That's $14.59 in the time it took me to analyze some keywords. Two of those trades closed in the same minute. No human could have executed that.

That's what "autonomous" actually means. Not "semi-automatic with you watching." Fully autonomous. While you live your life.

---

## Why Most Crypto Bots Fail

If autonomous trading works, why do so many people report losing money with crypto bots?

A few reasons:

**They use leverage.** Platforms that offer 10x, 50x, or 100x leverage are gambling tools dressed up as trading systems. One bad move wipes you out. My system uses zero leverage.

**They try to predict direction.** Most bots are built around the idea of "buy low, sell high by predicting where prices go." This is extraordinarily difficult even for professionals. My system doesn't predict. It accumulates and waits.

**They sell at losses.** Stop-losses feel safe. They aren't. They guarantee you lock in losses. Every. Single. Time.

**They're not truly autonomous.** Many "bots" require constant monitoring, manual adjustments, and emotional decisions. The moment emotions enter trading, results get worse.

**They're built for bull markets only.** Strategies that worked in 2021 got destroyed in 2022. A system that works in all market conditions — up, down, sideways — is what you actually need.

![The losing playbook — five plays that eliminate most crypto bots](/blog-images/crypto-trading-bots-do-they-work-02.webp)

---

## The Honest Limitations

I'm not going to pretend this is perfect or instant.

**It requires capital.** You need real money working for you. This isn't a $50 experiment.

**Quiet markets mean fewer trades.** My best month was July 2025 with $823. My slowest was December 2025 with $180. The system doesn't force trades when conditions aren't right. That patience is a feature, not a bug.

**Open positions exist.** Right now I have 145+ open positions across 11 different coins. They're not losses — they're inventory waiting to be sold at profit. But they do require capital to hold.

**Results vary.** My results reflect my capital, my settings, and my market conditions. Your results will be different. Anyone promising you specific returns is lying.

---

## So Do Crypto Trading Bots Work?

Here's my honest answer after 1,072 trades:

**Simple bots with rigid rules?** Mostly no. They require too much maintenance and break in changing market conditions.

**AI-enhanced autonomous trading systems with sound logic?** Yes — but only if the underlying philosophy is correct. No leverage. Never sell at a loss. True autonomy. Patience over prediction.

The technology works. What matters is the strategy baked into it.

![The box score — typical bots vs AI-enhanced autonomous system](/blog-images/crypto-trading-bots-do-they-work-03.webp)

I use GoBabyTrade™, created by Ed Barsano — a system built on 25+ years of trading experience, designed specifically to generate consistent profits through systematic accumulation rather than prediction or gambling.

Every trade I've ever made is published publicly on my site. No cherry-picked screenshots. No fake results. Just a running ledger that anyone can verify.

That's the answer 1,072 trades gave me.

---

## Stop Wondering. Start Running Your Own Numbers.

You've seen my results. You've seen the logic. You know the difference between real autonomous trading and the garbage being sold on YouTube.

The question isn't whether this works.

The question is whether you're going to keep sitting on the sidelines while people like me stack profits every single month — or whether you're ready to do something about it.

**[Stop gambling on opinions. See my verified results and get started →](/go/gobabytrade?from=blog-crypto-trading-bots-do-they-work)**

*Every trade I've made is published publicly at MyRoboticTrader.com. See the full transparency dashboard before you decide.*`},{title:"Fear & Greed Doesn't Matter When You Have a System",slug:"fear-greed-doesnt-matter",published:!0,publishDate:"2026-02-20",date:"2026-02-20T12:00:00Z",heroImage:"/blog-images/fear-greed-doesnt-matter-hero.webp",imageAlt:"Fear and Greed Index showing Extreme Fear while autonomous trading system profits remain positive",excerpt:"The Fear & Greed Index swings from 7 to 90. My profits don't care. 14 months of data prove systematic trading works in every market condition.",metaDescription:"The Fear & Greed Index swings from 7 to 90. My profits don't care. 14 months of data prove systematic trading works in every market condition.",category:"Education",author:"Patrick Jenkins",content:`# Fear & Greed Doesn't Matter When You Have a System

Right now, the Crypto Fear & Greed Index is sitting at **7 out of 100**. That's Extreme Fear. The kind of number that makes most people panic-sell, close their apps, and swear off crypto forever.

And I just made money.

Not because I'm smarter than anyone else. Not because I predicted anything. Because I have a system that doesn't care what the Fear & Greed Index says.

## What Is the Fear & Greed Index?

If you're new to crypto, the Fear & Greed Index is a number from 0 to 100 that measures market sentiment. It looks at volatility, trading volume, social media buzz, surveys, and Bitcoin dominance to figure out how the market is "feeling."

- **0-24:** Extreme Fear (people are terrified)
- **25-49:** Fear (people are nervous)
- **50-74:** Greed (people are getting confident)
- **75-100:** Extreme Greed (people are FOMO-buying everything)

The theory is simple: when people are fearful, they sell too cheap. When they're greedy, they buy too expensive. Most traders try to use this index to time the market — buy during fear, sell during greed.

Sounds logical. In practice? Almost nobody can actually do it. Because when the index hits 7, your gut is screaming at you to sell everything and hide under a blanket.

![How the Fear and Greed Index works](/blog-images/fear-greed-doesnt-matter-01.webp)

## 14 Months of Proof: Every Sentiment Zone, Every Month Profitable

Here's where it gets interesting. I've been running my AI-Enhanced Autonomous Trading system since January 2025. That's 14 months of live, verified, every-trade-published data.

Let me walk you through what the Fear & Greed Index looked like during each of those months — and what my system did anyway:

**2025 Performance — $4,926.78 across 989 trades:**

- **January** — Extreme Fear: **$502 profit**
- **February** — Fear: **$662 profit**
- **March** — Fear: **$266 profit**
- **April** — Fear: **$555 profit**
- **May** — Greed: **$374 profit**
- **June** — Greed: **$379 profit**
- **July** — Greed: **$823 profit** (best month ever 🏆)
- **August** — Greed: **$408 profit**
- **September** — Fear: **$229 profit**
- **October** — Greed: **$260 profit**
- **November** — Fear: **$289 profit**
- **December** — Fear: **$180 profit**

**2026 Performance — $378.82 across 75 trades (and counting):**

- **January** — Fear: **$212 profit**
- **February** — Extreme Fear (7/100!): **$167 profit** (month still going)

Every. Single. Month. Profitable.

The Fear & Greed Index bounced from Extreme Fear to Greed and back again. The bars on my chart? They just kept going up.

![14 months of profits across every market sentiment](/blog-images/fear-greed-doesnt-matter-02.webp)

## Why Most People Lose Money in Both Directions

Here's the thing most people don't talk about: the Fear & Greed Index doesn't just describe the market — it describes **you**.

When the index hits Extreme Greed, regular traders FOMO in at the top. They buy Bitcoin at $100K because "it's going to $200K!" When the index crashes to Extreme Fear, those same traders panic-sell at a loss because "crypto is dead."

They buy high. They sell low. The exact opposite of what they should do.

It's not because they're dumb. It's because they're human. Our brains are literally wired to follow the herd. When everyone is buying, it feels safe to buy. When everyone is selling, it feels dangerous to hold.

This is why 80% of day traders lose money. Not because the market is rigged — because human psychology is predictable, and it works against you.

![Why emotions make traders buy high and sell low](/blog-images/fear-greed-doesnt-matter-03.webp)

## The System Doesn't Have Feelings

My autonomous trading system doesn't check the Fear & Greed Index before making a trade. It doesn't read crypto Twitter. It doesn't feel nervous when Bitcoin drops 10% overnight.

It executes a strategy designed by Ed Barsano with over 25 years of trading experience baked into the GoBabyTrade™ software. The system buys strategically, manages positions mathematically, and only sells for a profit.

That last part is key: **the system never sells at a loss.** That's why my success rate on closed trades is 100%. Not because every trade goes up immediately — they don't. But because the system is designed to hold positions and manage them until they turn profitable.

When the Fear & Greed Index hits 7? The system sees discounted assets and keeps buying strategically. When it hits 90? The system finds selling opportunities from positions it accumulated during the fear.

The market panics. The system executes.

## The Real Question Isn't "When to Trade"

Most people spend their energy trying to figure out the perfect time to enter the market. They watch charts, follow influencers, study patterns, and try to time the bottom.

The real question isn't when. It's **how**.

Are you going to trade with a system that has rules, discipline, and 14 months of proven results? Or are you going to keep checking the Fear & Greed Index and letting your emotions make decisions for you?

I stopped trying to predict the market in January 2025. Since then, I've accumulated over **$5,300 in verified profits** across more than **1,060 trades**. Every single one is published on my website for anyone to verify.

![System vs emotional trading comparison](/blog-images/fear-greed-doesnt-matter-04.webp)

## What This Means for You

Right now, the index says Extreme Fear. Most people are paralyzed. Some are panic-selling. Very few are thinking clearly.

My system? It's running right now. Doesn't know it's supposed to be afraid.

If you're tired of the emotional rollercoaster — checking prices at 3 AM, panic-selling during dips, FOMO-buying during pumps — there's another way. A systematic approach that doesn't care about fear or greed because it was never designed to feel either one.

I publish every trade publicly at [myrobotictrader.com](https://myrobotictrader.com). No cherry-picked screenshots. No "trust me bro." Just raw data, every transaction, since day one.

**14 months. Every sentiment zone. Every month profitable. See what's possible.**

👉 [View my live trading results](https://myrobotictrader.com)

---

*My autonomous trading system is powered by GoBabyTrade™ software, designed by Ed Barsano. The system runs 24/7, executing trades based on systematic rules — not predictions, not emotions, not the Fear & Greed Index. Results shown are my actual verified performance. Past results don't guarantee future performance, but 14 months of data across every market condition tells a compelling story.*`},{title:"24% Annualized Return in a Down Crypto Market: How My Autonomous Trader Beat the Odds",slug:"24-percent-return-down-market",published:!0,publishDate:"2026-01-22",date:"2026-01-22T12:00:00Z",heroImage:"/blog-images/24-percent-return-down-market-hero.webp",imageAlt:"Robot trader celebrating 24% annualized return with crypto charts showing down market",excerpt:"While most crypto traders lost money in 2025, my autonomous trading system delivered a 24.6% annualized return with a 100% win rate across 1,036 trades. Here's the data.",metaDescription:"While most crypto traders lost money in 2025, my autonomous system delivered 24.6% annualized return with a 100% win rate across 1,036 trades.",category:"Market-Intelligence",author:"Patrick Jenkins",content:`Most crypto traders would rather not talk about 2025.

Altcoins crashed 40-70% from their highs. Bitcoin whipsawed between hope and despair. Social media "experts" quietly deleted their losing calls. And retail traders? Many panic-sold at the worst possible moments, locking in devastating losses.

Meanwhile, my autonomous trading system just kept doing its thing.

**The result: a 24.6% annualized return with a 100% win rate across 1,036 closed trades.**

Let me show you exactly how that happened.

![2025 Crypto Market Reality](/blog-images/24-percent-return-down-market-01.webp)

## The Numbers Don't Lie

Here's my actual trading performance from January 2025 through January 2026:

| Metric | Result |
|--------|--------|
| **Total Closed Trades** | 1,036 |
| **Total Realized Profit** | $5,112.40 |
| **Win Rate** | 100% |
| **Capital Deployed** | $19,960.81 |
| **Trading Period** | 379 days |
| **Annualized Return** | 24.6% |

You can verify every single trade on my [live trading dashboard](/). No screenshots. No cherry-picking. Just raw, transparent data.

![My Trading Results vs Market](/blog-images/24-percent-return-down-market-02.webp)

## How Does This Compare?

Let's put 24.6% in perspective:

| Investment | Typical Annual Return |
|------------|----------------------|
| S&P 500 (historical average) | ~10% |
| High-yield savings account | ~5% |
| Most crypto traders in 2025 | Negative |
| **My Autonomous Trader** | **24.6%** |

The S&P 500 is considered a solid investment if you can stomach the volatility. High-yield savings is "safe" but barely keeps pace with inflation.

My autonomous system more than doubled the stock market's historical average—in a year when crypto was supposed to be dead.

## The Secret: I Never Sell at a Loss

Here's what separates my approach from typical crypto trading:

**What most traders do:**
- Buy on FOMO when prices are high
- Panic sell when prices drop
- Lock in losses permanently
- Repeat the cycle

**What my autonomous system does:**
- Buys systematically on dips
- Holds through volatility
- Only sells at profit targets
- Banks small wins that compound

The system doesn't care about market sentiment. It doesn't panic. It doesn't get greedy. It just executes the strategy over and over again.

![The Difference: Emotional vs Systematic](/blog-images/24-percent-return-down-market-03.webp)

## "But What About Your Open Positions?"

Fair question. Yes, I have 180 open positions right now. Some are down on paper.

But here's the thing: **paper losses aren't real losses.**

Those positions will eventually hit their profit targets. The market always moves. And when they close, they'll add to my win column—just like the 1,036 trades before them.

This is the "scoreboard only goes up" philosophy in action. Every closed trade is a win. The only question is how long each position takes to get there.

## Why This Matters for You

I'm not sharing this to brag. I'm sharing it because most people have been fed a lie about crypto:

> "You have to time the market perfectly."
> "You need to be glued to charts 24/7."
> "It's basically gambling."

None of that is true—if you have the right system.

The AI-Enhanced Autonomous Trader I use, built on GoBabyTrade™ software created by Ed Barsano, removes emotion from the equation. It executes a proven strategy while I live my life, walk my dog, and sleep through the night.

![Autonomous Trading: Set It and Forget It](/blog-images/24-percent-return-down-market-04.webp)

## Ready to Stop Gambling and Start Building?

If you're tired of the emotional rollercoaster of trying to time the market, there's a better way.

The same system I use is available through GoBabyTrade™. I've negotiated a **$1,000 discount** for anyone who signs up through my link—and I'm so confident in the system that I stake my reputation on it every day with my public results.

[Learn more about GoBabyTrade™ →](/go/gobabytrade?from=blog-24-percent-return-down-market)

---

*Trading involves risk. Past performance doesn't guarantee future results. But a 24.6% annualized return in a down market? That's the kind of risk-adjusted performance I'll take any day.*`},{title:"The Entire Game Was Rigged: What the College Basketball Scandal Teaches Us About Gambling",slug:"college-basketball-gambling-scandal-2026",date:"2026-01-19T16:00:00Z",content:`# The Entire Game Was Rigged: What the College Basketball Scandal Teaches Us About Gambling

You thought you were betting on basketball. You were betting on a script.

On January 15th, the FBI unsealed "Operation Nothing But Bet" — and the numbers are staggering:

- **26 people charged**
- **39+ players involved** across 17 Division I teams
- **29+ games allegedly fixed** over two seasons
- **Bribes of $10,000 to $30,000** per player

![How the Fix Worked](/blog-images/college-basketball-gambling-scandal-2026-01.webp)

This wasn't some underground operation. Four of the players charged were still playing games *this week*. Kennesaw State's preseason Conference USA Player of the Year? Suspended. The fix was in while fans were cheering and bettors were losing money on games that were never real competitions.

## They Targeted the Vulnerable

Here's the part that should make you angry: the fixers specifically targeted players at smaller schools — kids without lucrative NIL deals. As prosecutors noted, they recruited players "for whom the bribe payments would meaningfully supplement or exceed legitimate NIL opportunities."

They preyed on young athletes who weren't getting the big endorsement checks. A $20,000 bribe looks pretty good when your classmates at Duke are making six figures.

## The Illusion of a Fair Bet

Every sports bettor operates on one assumption: the game is real. Both teams are trying to win. The better team, the smarter analysis, the sharper odds — that's what determines the outcome.

But what if one player is trying to lose?

In basketball, as the U.S. Attorney noted, "one player can substantially influence a game." You can do everything right — study the matchups, analyze the trends, place a calculated bet — and still lose because someone on the court is working against you.

That's not investing. That's not even gambling. It's a rigged carnival game.

## This Is Just the Latest Scandal

The college basketball indictment follows:

- [Terry Rozier (NBA) arrested for insider betting schemes](/blog/terry-rozier-nba-gambling-scandal) — also part of Operation Nothing But Bet
- **Cleveland Guardians pitchers** arrested for fixing individual pitches
- **Jontay Porter** banned from the NBA for manipulating his own stats
- **30+ illegal gambling arrests** tied to professional basketball

A new book coming out this month is literally titled *"Everybody Loses."*

More than half of sports bettors now say these scandals have reduced their trust in professional sports. They're right to be skeptical.

## The House Always Wins (Even When You Don't Know It)

Sports betting was legalized with promises of "entertainment" and "harmless fun." Instead, we got:

- College kids being bribed to throw games
- Professional athletes fixing their own performances
- Billion-dollar industries profiting while fans get played
- An NCAA president now begging for prop bets to be banned

The sportsbooks made $11 billion in the first three quarters of last year alone. Someone is winning. It's not the bettors.

![Sports Betting vs Systematic Trading](/blog-images/college-basketball-gambling-scandal-2026-02.webp)

## There's a Better Way

I stopped gambling on predictions years ago. Instead of betting on games I can't control (and apparently, can't even trust), I use an AI-enhanced autonomous trading system that executes a proven strategy without emotion, without inside information, and without needing to trust that the game is fair.

The software I use — GoBabyTrade™, created by Ed Barsano — doesn't care about point spreads or player bribes. It follows a systematic approach: buy low, sell high, never sell at a loss. Simple math. No corruption required.

My results are published. Every trade is logged. No one is bribing my algorithm to underperform.

When the game is rigged, the only winning move is not to play.

---

**Ready to stop gambling and start building wealth systematically?** [Check out my verified trading results →](/)

Or if you want to see the exact system I use: [Learn about GoBabyTrade™](/go/gobabytrade?from=blog-college-basketball-gambling-scandal-2026)`,category:"Anti-Gambling",metaDescription:"26 people charged, 39 players involved, 29 games fixed. The FBI's 'Operation Nothing But Bet' reveals why sports betting is never a fair game.",heroImage:"/blog-images/college-basketball-gambling-scandal-2026-hero.webp",imageAlt:"College basketball gambling scandal - FBI Operation Nothing But Bet",excerpt:"26 people charged, 39 players involved, 29 games fixed. The FBI's 'Operation Nothing But Bet' reveals why sports betting is never a fair game.",relatedPosts:["terry-rozier-nba-gambling-scandal"]},{title:"While Everyone Waits for the Next Moonshot, I'm Quietly Accumulating",slug:"quiet-accumulation-undervalued-crypto-utility-tokens",date:"2026-01-19T12:00:00Z",content:`# While Everyone Waits for the Next Moonshot, I'm Quietly Accumulating

**Fidelity just released their 2026 crypto outlook. The takeaway? The wild volatility era may be ending. Most traders see that as bad news. I see it as the perfect setup.**

---

Last week, Fidelity's Director of Research Chris Kyper dropped some fascinating insights in an interview. His core thesis: as institutions mature the crypto market through ETFs, derivatives, and treasury products, we're likely entering an era of reduced volatility.

No more 80% crashes. But also—no more 10x moonshots in a month.

Most crypto Twitter saw this as bearish. "Where's my lambo money coming from now?"

But here's what they're missing: **systematic accumulation works in ANY volatility environment.** And right now, some of the most useful tokens in crypto are trading at 95%+ discounts from their highs.

While everyone waits for the next meme coin to pump, I'm quietly building positions in real infrastructure.

---

## The Fidelity Thesis: What's Actually Changing

Chris Kyper made a compelling argument. Before Wall Street entered crypto, the market was driven by retail emotion—wild pumps, devastating crashes, leverage cascades. Pure chaos.

Now? We have:

- Spot ETFs with billions in AUM
- Institutional derivatives markets
- Digital asset treasury companies
- Professional volatility traders on both sides

All of this creates what Kyper calls a "structural bid" for Bitcoin and major assets. More players willing to take both sides of trades means more balance. Less extreme moves in either direction.

His prediction: fewer blow-off tops, but also fewer 80% drawdowns. A maturing market that moves more like traditional assets.

Some see this as crypto losing its edge. I see it as crypto becoming investable for the long haul.

And here's the thing—**my AI-enhanced autonomous trading system doesn't care either way.**

It accumulates when prices drop. It takes profits when prices rise. Whether volatility is 100% or 10%, the system executes without emotion.

![The Price vs Reality Disconnect](/blog-images/quiet-accumulation-undervalued-crypto-utility-tokens-01.webp)

---

## The Real Opportunity: Utility Tokens at Extreme Lows

While Bitcoin trades sideways and everyone debates whether we'll see another blow-off top, something interesting is happening in the altcoin market.

Tokens with massive real-world utility—tokens that power actual infrastructure used by millions—are trading at prices that make no fundamental sense.

Let me show you two examples from my trading portfolio.

---

## Alchemy Pay (ACH): $0.01 for a Global Payment Network

**Current price:** $0.01  
**All-time high:** $0.20  
**Discount from ATH:** 95%

Here's what Alchemy Pay actually does:

- Operates in **70+ countries** with **300+ payment channels**
- Touchpoints with over **2 million merchants** through partnerships with Binance, Shopify, and Visa
- Licensed as a money transmitter in **13 US states** (just added South Dakota last week)
- Registered under **Visa's Ramp Provider Program**
- Processing fiat-to-crypto and crypto-to-fiat transactions for millions of users

This isn't a meme coin. This isn't a promise. This is live, working infrastructure that businesses actually use every single day.

And it's trading at ONE CENT.

Alchemy Pay is also launching their own blockchain (Alchemy Chain) in Q1-Q2 2026—a stablecoin-optimized payment chain that will use ACH for gas fees. More utility, more demand, same limited supply.

The market is pricing this like it's going to zero. The fundamentals say otherwise.

---

## The Graph (GRT): $0.04 for the "Google of Blockchains"

**Current price:** $0.04  
**All-time high:** $2.88  
**Discount from ATH:** 98%

The Graph is even more mind-boggling. Bloomberg literally called it "the Google of blockchains."

Here's the reality:

- Processes **65 billion daily queries** across 50,000+ subgraphs
- Indexes data from **40+ blockchains** including Ethereum, Solana, Arbitrum, and Polygon
- Powers major DeFi protocols like **Uniswap, Aave, and Curve**
- Query volumes surged **210%** in late 2025 due to AI agent integration
- **37% of new Token API users are AI agents** needing blockchain data

Every time you use a DeFi app, there's a good chance The Graph is working behind the scenes to fetch that data. It's essential infrastructure—the plumbing that makes Web3 work.

And it's trading at four cents.

Down 98% from its high. Processing more queries than ever. Being integrated into AI systems. The price and the utility have completely diverged.

![Two Paths One Winner](/blog-images/quiet-accumulation-undervalued-crypto-utility-tokens-02.webp)

---

## Why This Matters for Systematic Traders

Here's the insight that most people miss:

**You don't need to predict when these tokens will recover. You just need a system that accumulates at lows and takes profits at highs.**

My AI-enhanced autonomous trading system has been doing exactly this:

- **$5,000+ in verified profits** since January 2025
- **1,000+ trades executed** without emotion
- **100% profitable months**—every single one
- **Zero 3 AM panic decisions**

The system doesn't know that ACH is "down 95%." It doesn't care that GRT is at "extreme lows." It just sees opportunities to buy low and sell high, over and over, systematically.

When markets recover—and they always do—I'll have positions built at these prices. Positions accumulated without stress, without chart-watching, without trying to time the bottom.

![What Fidelity Is Really Saying](/blog-images/quiet-accumulation-undervalued-crypto-utility-tokens-03.webp)

---

## The Fidelity Connection

This brings me back to the Fidelity thesis.

If volatility is truly decreasing, what does that mean for traders?

**For day traders:** Smaller swings mean smaller profits. The gambling-style "catch the pump" approach becomes even less viable.

**For systematic traders:** Less volatility actually makes execution cleaner. Fewer flash crashes, more predictable accumulation, steadier compounding.

Kyper made an interesting point: the introduction of derivatives markets historically *lowers* volatility over time. More players hedging, more liquidity, more balance.

The crypto market is growing up. And grown-up markets reward patience over gambling.

---

## The Math They Don't Want You to See

Let me break this down simply.

**The Moonshot Approach:**
- Wait for the next 100x
- Probably buy after it's already pumped 50%
- Watch gains evaporate when it crashes
- Repeat cycle, maybe catch one winner in ten tries
- Net result: Emotional exhaustion, probably break-even

**The Systematic Approach:**
- Accumulate useful tokens at extreme discounts
- Let the system take small profits continuously
- Compound those profits over months and years
- Don't care about daily volatility
- Net result: $5,000+ in verified profits, zero stress

One approach requires you to be lucky. The other requires you to be patient.

I know which one I'm betting on.

---

## What I'm Actually Doing

Right now, my trading system is:

1. **Accumulating positions** in utility tokens during this "boring" market
2. **Taking profits** whenever small bounces occur
3. **Reinvesting half** of all profits back into trading capital
4. **Saving half** in stable value (my 50/50 rule)

I'm not trying to predict when ACH goes back to $0.20 or when GRT hits $2 again. I don't need to.

I just need the system to keep doing what it does: buy low, sell high, repeat forever.

The Fidelity thesis actually makes me more confident, not less. A maturing market with structural demand for crypto assets? That's exactly the environment where systematic investing thrives.

---

## The Bottom Line

Everyone's waiting for the next moonshot. The next Dogecoin. The next Shiba. The next 100x meme coin that makes them rich overnight.

Meanwhile:

- A global payment network processing millions of transactions trades at $0.01
- The infrastructure powering all of DeFi trades at $0.04
- Fidelity says the wild volatility era may be ending
- Institutions are building long-term positions

I'm not waiting for moonshots. I'm systematically accumulating real utility at historic discounts.

When the market figures out what these tokens are actually worth, I'll have positions. Positions built without stress, without gambling, without watching charts at 3 AM.

That's not exciting. It won't get likes on Twitter.

But my bank account doesn't care about excitement. It just cares about results.

**$5,000+ in verified profits. 100% winning months. Zero moonshots required.**

---

## See the Proof

All my trading results are published live at [myrobotictrader.com](https://myrobotictrader.com). Every trade. Every profit. Every "boring" $4 gain that adds up over time.

No fake screenshots. No cherry-picked results. Just raw data you can verify yourself.

Because in a market full of hype, transparency is the ultimate edge.

**Ready to stop gambling and start building?** [See how the system works →](/go/gobabytrade?from=blog-quiet-accumulation-undervalued-crypto-utility-tokens)

---

*The AI-enhanced autonomous trading system I use is GoBabyTrade™, created by Ed Barsano. I'm an affiliate because I believe in the product—and I put my money where my mouth is every single day.*

*Disclaimer: This is not financial advice. All investments carry risk. Past performance does not guarantee future results. The tokens mentioned (ACH, GRT) are examples from my trading activity and not recommendations to buy. Do your own research and never invest more than you can afford to lose.*`,category:"Market Intelligence",metaDescription:"Fidelity predicts crypto volatility is decreasing. Here's why I'm accumulating undervalued utility tokens like ACH and GRT instead of chasing moonshots.",heroImage:"/blog-images/quiet-accumulation-undervalued-crypto-utility-tokens-hero.webp",imageAlt:"Systematic crypto accumulation versus waiting for moonshots comparison"},{title:"The Man Behind the Code: How Ed Barsano Turned a Market Crash Into a 25-Year Mission",slug:"ed-barsano-creator-gobabytrade",publishDate:"2026-01-18",date:"2026-01-18T12:00:00Z",heroImage:"/blog-images/ed-barsano-creator-gobabytrade-hero.webp",imageAlt:"Ed Barsano - creator of GoBabyTrade autonomous trading system",excerpt:"Over 50 years of programming. Early Microsoft engineer. Got wiped out in 2000. Then spent 25 years building what nobody said was possible.",content:`# The Man Behind the Code: How Ed Barsano Turned a Market Crash Into a 25-Year Mission

I talk a lot about my autonomous trading results here. The $5,000+ in profits. The 1,000+ trades. The 100% success rate.

But I don't talk enough about the person who made it all possible.

His name is **Ed Barsano**. And his story is one of the most compelling in fintech — even if you've never heard of him.

![Ed Barsano's Journey](/blog-images/ed-barsano-creator-gobabytrade-01.webp)

## From the Navy to Microsoft

Ed Barsano started programming in 1974—over 50 years ago. After serving in the Navy, he joined Microsoft in 1987 during its explosive post-IPO growth years.

For eight years, he was a programming engineer at Microsoft. By the time he left, he'd retired young with the skills and resources to do whatever he wanted.

So what did he do? He invested in tech stocks.

**And then the 2000 crash happened.**

## The Crash That Changed Everything

Like millions of others, Ed got wiped out when the dot-com bubble burst. Years of gains — gone.

But unlike most people who just accepted the loss and moved on, Ed got mad. Really mad.

He looked at Wall Street and saw a rigged game. Professional quants with million-dollar algorithms. Hedge funds with information advantages. Average people left holding the bag every time the market turned.

Ed decided to level the playing field.

![The Problem Ed Solved](/blog-images/ed-barsano-creator-gobabytrade-02.webp)

## 25 Years of Relentless Development

In 2001, Ed launched his first autonomous stock trading platform. The concept was simple but revolutionary:

- **No trading knowledge required** — the system handles everything
- **No emotional decisions** — algorithms don't panic sell
- **No stop-losses** — the system never sells at a loss
- **No leverage** — no risk of liquidation

People said it couldn't be done. Then Ed did it.

The stock trader worked so well that major brokerages came calling. TD Ameritrade, Charles Schwab, E*Trade — they all reached out to Ed (not the other way around) asking to integrate his system with their platforms.

Eventually, a hedge fund bought multiple licenses. That's when you know something actually works — when the professionals want in.

## The Crypto Evolution

In December 2021, Ed launched the crypto version of his trader. And something remarkable happened.

The crypto market proceeded to crash over 90% from its highs. The worst bear market in crypto history.

**Ed's results during that period?**

He started with $200,000. Using just three coins, never changing his strategy, he generated **over $1 million in profit**.

That's 5x returns. In a 90% down market. While everyone else was getting liquidated.

![Ed's Results](/blog-images/ed-barsano-creator-gobabytrade-03.webp)

## The Secret: 3 Million Lines of Code

What makes GoBabyTrade™ different isn't just one clever algorithm. It's 25 years of refinement compressed into over 3 million lines of code.

The system includes two AI agents that have evolved from 35% accuracy when first implemented to **98% accuracy today**. They predict market direction roughly 20 minutes ahead, deciding when to take profits and when to wait for more.

Every trader running the software writes data back to a central database every minute. Tens of thousands of traders, all contributing to collective intelligence that makes the AI smarter every single day.

And here's what I respect most about Ed: **every upgrade is free**. When you buy a license, you get every improvement he makes — and he's been making improvements weekly for 25 years.

## Why This Matters to Me

I've been running GoBabyTrade™ since January 2025. In that time:

- ✅ 1,000+ trades executed automatically
- ✅ $5,000+ in verified profits
- ✅ 100% success rate (never sold at a loss)
- ✅ Zero 3am panic decisions

But more than the numbers, what I appreciate is the philosophy behind the system.

Ed didn't build this for hedge funds (though they wanted it). He built it because he believed average people deserved the same tools the wealthy use to grow their money.

He got burned by the system, so he built a better one. Then he spent 25 years perfecting it.

## The Quiet Genius

![float-left: Ed Barsano, creator of GoBabyTrade™](/blog-images/ed-barsano-creator-gobabytrade-headshot.webp)

Ed Barsano doesn't do flashy marketing. He doesn't have a YouTube channel with lambos and lifestyle content. According to his team, he barely comes out of the basement — he's too busy improving the code.

That's the kind of person I want building the system that manages my money.

Not a marketer. Not a hype man. A programmer with over 50 years of experience who's been obsessed with one problem for a quarter century.

## My Small Contribution

I started MyRoboticTrader.com because I wanted to document what's actually possible with systematic, AI-enhanced autonomous trading. Every trade I make is published. Nothing hidden.

Ed built the engine. I'm just showing people what it can do.

If you're curious about the results, check out my [live trading transparency dashboard](/results). Every profit, every position, fully documented.

And if you want to learn more about the system Ed created, [see what's possible with GoBabyTrade™](/go/gobabytrade?from=blog-ed-barsano-creator-gobabytrade).

*Here's to the quiet geniuses who build things that actually work.*`,category:"Education",metaDescription:"Over 50 years of programming. Early Microsoft engineer. Got wiped out in 2000. Then spent 25 years building what nobody said was possible.",relatedPosts:["bucket-and-well-automated-trading-analogy","one-year-5k-milestone"]},{title:"Uber's Robot Army Is Coming — Here's How to Be the Owner, Not the Replaced",slug:"uber-robots-automation",publishDate:"2026-01-17",date:"2026-01-17T12:00:00Z",heroImage:"/blog-images/uber-robots-automation-hero.webp",imageAlt:"Uber robotaxi with driver being replaced - automation ownership concept",excerpt:"Uber just announced 20,000 robotaxis and 12,000 delivery bots. Gig workers are being replaced. But the same automation can work FOR you instead.",content:`# Uber's Robot Army Is Coming — Here's How to Be the Owner, Not the Replaced

Uber just unveiled their robotaxi at CES 2026. It's not a concept car—it's already being tested on Bay Area roads. By late 2026, driverless Ubers will be picking up passengers in San Francisco.

But that's just the start:

- **20,000+** Lucid Gravity robotaxis planned over the next 6 years
- **12,000** Starship delivery robots by 2027
- **100,000** autonomous vehicles by 2027 (NVIDIA partnership)
- **10+ cities** with robotaxis by end of 2026

If you're a gig worker—or anyone trading time for money—this should wake you up.

But here's the thing most people miss: **the same automation that's replacing workers can work FOR you instead.**

![Gig Economy vs Automation Ownership](/blog-images/uber-robots-automation-01.webp)

## The Gig Economy Promise vs. Reality

Remember what they sold you?

- "Be your own boss"
- "Flexible hours"
- "Unlimited earning potential"

Here's the reality:

- You're still trading time for money
- An algorithm tells you where to go
- You compete against thousands for the same rides
- No benefits, no equity, no ownership
- Your "flexibility" means working peak hours or earning nothing

**The uncomfortable truth:** Gig workers were never the bosses. They were always the labor force for someone else's automated system.

Now the final piece is clicking into place: Why pay human drivers when robots can do it 24/7 without bathroom breaks, sick days, or surge pricing complaints?

![Uber Automation Timeline](/blog-images/uber-robots-automation-02.webp)

## The Automation Playbook

Uber's strategy reveals a pattern that applies far beyond ride-sharing:

1. **Remove human variability** (emotion, fatigue, inconsistency)
2. **Execute 24/7** without breaks
3. **Scale without proportional cost increase**
4. **Let AI optimize** in real-time

Here's the insight: This isn't just a transportation strategy. It's the same principle behind every successful automated system—**including autonomous trading.**

| Gig Economy | Autonomous Trading |
|-------------|-------------------|
| You are the labor | The algorithm is the labor |
| Algorithm tells YOU what to do | Algorithm executes YOUR strategy |
| Compete with thousands | Compete with no one |
| Trade time for money | Trade capital for returns |
| No equity, no ownership | Full ownership of profits |

The question isn't whether automation works. Uber is betting billions that it does.

**The question is: which side of it will you be on?**

![Two Paths Forward](/blog-images/uber-robots-automation-03.webp)

## My Journey from Emotional Trader to System Owner

I used to trade crypto like most people:

- Panic selling every dip
- FOMO buying every pump
- Checking charts at 3am
- Making decisions based on Twitter sentiment

It was exhausting. And my results? Inconsistent at best.

When I discovered AI-enhanced autonomous trading, I recognized the same pattern Uber is now deploying:

- Remove my emotional interference
- Execute systematically 24/7
- Let the algorithm handle the decisions

**The results since January 2025:**

- ✅ 1,000+ trades executed
- ✅ $5,000+ in verified profits
- ✅ 100% success rate (the system never sells at a loss)
- ✅ Every single trade published for full transparency

I didn't become a better trader. I stopped being the trader entirely. I became the **owner** of an automated system instead.

The software that powers my system is GoBabyTrade™, created by Ed Barsano. It's the same systematic approach I've been documenting here—just executed by AI instead of emotion.

## The Two Paths Forward

**Path 1: Get replaced**
- Keep trading time for money
- Hope automation "takes a while"
- Wait for someone to solve it for you
- End up competing with robots (you'll lose)

**Path 2: Own the automation**
- Recognize the pattern
- Put automation to work FOR you
- Build passive income streams
- Let robots generate returns while you sleep

The timeline is shorter than you think:
- Uber robotaxis: Launching 2026
- Delivery robots: Already in operation
- Autonomous trading: **Available right now**

## Why This Matters for Crypto Specifically

Crypto markets are uniquely suited for autonomous trading:

- **24/7/365** — no human can monitor constantly
- **Highly volatile** — emotions destroy returns
- **Global** — opportunity happens while you sleep
- **Pattern-driven** — perfect for systematic approaches

The volatility that wrecks emotional traders creates systematic opportunities for AI-enhanced systems.

This is exactly why I stopped trying to "beat the market" and started letting a system handle it instead.

## The Choice Is Yours

Uber is betting billions that automation beats human labor. They're probably right.

You can either:
1. Be the human getting replaced
2. Be the owner letting automation work for you

I made my choice in January 2025. My autonomous trading system has generated $5,000+ in verified profits since then—every trade published, no cherry-picked screenshots, complete transparency.

**Want to see how it works?**

Check out my [live trading results](/) — every trade documented, nothing hidden.

Or if you're ready to explore autonomous trading for yourself, [see what's possible with GoBabyTrade™](/go/gobabytrade?from=blog-uber-robots-automation).

*The robots are coming. Make sure they're working for you.*`,category:"Education",metaDescription:"Uber just announced 20,000 robotaxis and 12,000 delivery bots. Gig workers are being replaced. But the same automation can work FOR you instead."},{title:"I Watched the Pionex Tutorial They Recommend—So You Don't Have To",slug:"pionex-youtube-tutorial-analysis",publishDate:"2026-01-12",date:"2026-01-12T12:00:00Z",heroImage:"/blog-images/pionex-youtube-tutorial-analysis-hero.webp",imageAlt:"Pionex YouTube tutorial analysis - overwhelmed trader watching 13 bot options",excerpt:"Pionex features a YouTube tutorial on their website. It has nearly a million views—and a comments section full of confused traders. Here's what I learned.",content:`When I went to Pionex's website, the first thing I saw was a carousel of YouTube influencers on their homepage. Front and center: a video called "I Spent $10,000 on Pionex Crypto Trading Bots" by Max Maher (995K subscribers).

![Pionex Homepage](/blog-images/pionex-youtube-tutorial-analysis-homepage.webp)
*Screenshot from Pionex.com homepage, January 2026*

This is their featured content. Their best foot forward. So I watched it.

After 16 days, he reported $263 in "profit."

Sounds pretty good, right? Here's the thing—only $47 of that was *realized* profit. The other $216 was unrealized. Paper gains. Money that exists only if everything goes perfectly from here.

And the comments? Absolute chaos. This is Pionex's own recommended tutorial, and people *still* can't figure out how it works.

![Pionex Confusion](/blog-images/pionex-youtube-tutorial-analysis-01.webp)

## 13 Bot Types. Endless Decisions.

The video walks through Pionex's bot offerings. All 13+ of them:

- Grid Trading Bot
- Martingale Bot
- Rebalancing Bot
- DCA Bot
- TWAP Bot
- Stop Limit Bot
- Smart Trade Bot
- Trailing Sell Bot
- Trailing Buy Bot
- Infinity Grid Bot
- Leveraged Grid Bot
- Margin Grid Bot
- Reverse Grid Bot
- Moon Bots (BTC and ETH)

By the time he finished explaining them, I needed a nap. And I've been running an autonomous trading system for over a year.

The pinned comment on their featured video? "Take a shot every time Max says 'Bot.'" It has 176 likes. Even the audience knows it's overwhelming.

## The Comments Tell the Real Story

Remember: Pionex chose to feature this video. It's their best foot forward. Here's what viewers are *still* asking:

> "What is the difference between a grid bot and a btc moon bot? Can someone explain?"

> "What is the difference between the grid bot and the moon bot? They both seem to be doing the same job."

> "Infinity grid vs moon..."

> "Could you share the grid parameters you had set?"

> "Need more videos on how to set up and what are the risks"

These aren't dumb questions. These are *exactly* the right questions. The problem is that you need a PhD in bot-ology just to get started—even after watching the tutorial Pionex recommends.

One commenter even second-guessed the YouTuber's entire approach:

> "He made a big mistake of running the bot with 10k. He should have done dollar cost averaging and started 10 bots at different times with 1k."

So now you need to not only pick the right bot, but also figure out the optimal deployment strategy? Got it.

![Analysis Paralysis](/blog-images/pionex-youtube-tutorial-analysis-02.webp)

## The "Set and Forget" That Wasn't

The YouTuber admitted something important: He started his bot at "a terrible time"—right when Bitcoin hit a new all-time high. The price dropped, and at one point he was down 4.5%.

His words: "It had to climb out of that hole."

That's not set-and-forget. That's set-and-hope.

He also said he "didn't check it for this whole period" because he trusted the system. But here's the thing—the system still lost money initially. The only reason he ended up positive was because Bitcoin's price recovered.

What happens when it doesn't recover? The comments have that answer too:

> "I need help. I'm losing money on the bots."

> "Most bot videos I've seen the person ends up losing money right away."

> "How can you even trust anything like that?"

## The Tax Nightmare Nobody Talks About

Multiple commenters raised this concern:

> "This sounds like a nightmare come tax time."

> "Wouldn't it be difficult to file tax from it since the bot is always making transactions like selling?"

> "As a US citizen how do you keep track of all transaction history for tax purposes?"

Grid bots make dozens or hundreds of micro-transactions. Every single one is potentially a taxable event. Good luck explaining that to your accountant.

![Tax Complexity](/blog-images/pionex-youtube-tutorial-analysis-03.webp)

## What I Do Instead

I watched Pionex's featured tutorial and felt exhausted *for* the viewers. All those decisions. All those parameters. All that second-guessing. And this is the video they're *proud* of.

Here's my approach: I use an AI-enhanced autonomous trading system that makes zero decisions on my part.

- No picking which of 13 bots to use
- No setting price parameters
- No wondering if I "started at a bad time"
- No staring at grids wondering if I configured them right

The system handles entry. The system handles exit. I handle... nothing, actually.

My rule is simple: never sell at a loss. The AI waits for favorable conditions. In over 1,000 closed trades, that approach has worked every single time.

Not $47 in realized profit over 16 days. Over $5,000 in *actual realized profit* over 12 months. Every trade published. Every result verified.

## The Real Difference

Pionex gives you tools. Lots of them. Maybe too many.

But tools still require a craftsman. You still need to:
- Choose the right bot
- Set the right parameters
- Time your entry correctly
- Hope the market cooperates
- Track hundreds of transactions for taxes

My system gives me results. Not tools to hopefully get results—*actual results*.

![Simple vs Complex](/blog-images/pionex-youtube-tutorial-analysis-04.webp)

## See For Yourself

I'm not here to trash Pionex. It might work great for people who want to tinker with 13 different bot types and optimize grid parameters.

But if you're like me—if you want passive income without a part-time job managing it—there's a simpler path.

Check out my [live trading results](/). Every trade. Every profit. Every month. No paper gains, no "climbing out of holes," no configuration required.

And if you're ready to stop choosing between 13 bot types and start building actual wealth, [see what's possible with autonomous trading](/go/gobabytrade?from=blog-pionex-youtube-tutorial-analysis).

---

*The AI-enhanced autonomous trading system I use was created by Ed Barsano and is powered by GoBabyTrade™ technology. I'm a licensed affiliate because I believe in radical transparency—and because it actually works.*`,category:"Education",metaDescription:"Pionex features a YouTube tutorial on their website. It has nearly a million views—and a comments section full of confused traders. Here's what I learned."},{title:"My Crypto System's First Birthday: $5,005.96 From 1,002 Trades",slug:"one-year-5k-milestone",published:!0,publishDate:"2026-01-05",date:"2026-01-05T12:00:00Z",heroImage:"/blog-images/one-year-5k-milestone-hero.webp",imageAlt:"Robot celebrating first birthday with cake - $5,005.96 milestone",excerpt:"One year ago, I stopped gambling on crypto and started systematically trading it. 1,002 trades later, I've got $5,005.96 in verified profit and zero sleepless nights.",content:`One year ago today, I made a decision that changed everything.

I stopped trying to predict the crypto market. I stopped watching charts at 2 AM. I stopped the emotional rollercoaster of "should I buy? should I sell? is this the top?"

Instead, I handed the keys to an AI-enhanced autonomous trading system and told it one simple thing: **never sell at a loss.**

362 days later, the scoreboard reads: **$5,005.96 in verified profit from 1,002 trades.**

## The Numbers Don't Lie

Let me be clear about what "verified" means. Every single trade is published on my website. Not screenshots. Not cherry-picked winners. **Every. Single. Trade.**

Here's what one year of systematic trading looks like:

- **Total Profit:** $5,005.96
- **Closed Trades:** 1,002
- **Average Per Trade:** $5.00 (you can't make this up)
- **Win Rate on Closed Trades:** 100%
- **3 AM Panic Decisions:** Zero
- **Trades I Manually Executed:** Zero

That last one is important. I didn't make these trades. The system did. I was sleeping, working, living my life.

![One year trading results breakdown](/blog-images/one-year-5k-milestone-01.webp)

## What I Learned About Patience

The first few months were... quiet.

The system was buying. Building inventory. Accumulating positions across multiple cryptocurrencies. Some days, nothing happened. Some weeks, nothing happened.

I'd be lying if I said I wasn't tempted to intervene. To "help" the system. To override it because I *felt* like the market was about to move.

I didn't.

And that's probably the most important decision I made all year.

## The 7-Eleven Method

Here's the analogy that keeps me sane: **You can't sell what you don't own.**

Imagine you run a 7-Eleven. A school bus pulls up with 40 hungry kids. If you only have 1 bag of chips, you make 1 sale. If you stocked up beforehand? You make 40 sales.

Down markets aren't disasters. They're **stocking opportunities.**

My system spent months buying inventory at discount prices. Then, when the market moved—like it did this week with BONK up 25%—it had something to sell.

11 trades in 4 days. All sells. All profit. That's the 7-Eleven method in action.

![7-Eleven inventory analogy for trading](/blog-images/one-year-5k-milestone-02.webp)

## What This Isn't

Let me be real about what I'm NOT selling you:

- **Get rich quick.** $5,005.96 in a year is not lambo money. It's steady, boring wealth building.
- **Guaranteed returns.** Past performance doesn't guarantee future results. I could have a rough year ahead.
- **A hands-off miracle.** I still check in. I still monitor. I just don't trade.

What this IS: **proof that systematic beats emotional.**

While crypto Twitter was panicking about crashes, celebrating pumps, and making "life-changing" bets... my system just quietly executed 1,002 trades.

## The Scoreboard Only Goes Up

Here's the beautiful thing about never selling at a loss: **the scoreboard only goes up.**

Some months are bigger than others. Some weeks are quiet. But because the system only realizes profits—never losses—every closed trade adds to the total.

There's no "I was up 40% but then gave it all back." No unrealized gains that evaporated. Just steady, verified, published profits.

$5.00 average per trade. 1,002 times. That's it. That's the whole strategy.

![Scoreboard only goes up concept](/blog-images/one-year-5k-milestone-03.webp)

## Year Two Begins

As I write this, my system is already working on year two. It doesn't care about anniversaries. It doesn't celebrate milestones. It just executes.

That's exactly how I want it.

January 2026 is already off to a strong start—$79.18 profit from 13 trades in the first week alone. The system didn't take a holiday break. It doesn't know what holidays are.

If you're tired of the emotional rollercoaster—tired of watching charts, second-guessing yourself, and hoping this time will be different—maybe it's time to consider a different approach.

**Not gambling. Not predicting. Just systematic, patient, autonomous trading.**

![Trading not gambling - systematic approach](/blog-images/one-year-5k-milestone-meme.webp)

---

## See It For Yourself

I publish every trade on my [Live Results Dashboard](/). No hiding. No cherry-picking. Complete transparency.

This system was built by Ed Barsano, who's been refining it for over 25 years. I'm just the guy crazy enough to publish every result.

**Ready to see what systematic trading looks like?**

[Check out the GoBabyTrade™ system](/go/gobabytrade?from=blog-one-year-5k-milestone) and see if it's right for you.

---

*Patrick Jenkins is the founder of MyRoboticTrader.com, where he publishes every trade from his AI-enhanced autonomous trading system. He believes in transparency, patience, and letting robots do the boring work.*`,category:"Lifestyle",metaDescription:"I stopped gambling on crypto and started systematically trading it. 1,002 trades later: $5,005.96 in verified profit and zero sleepless nights."},{title:"2025: My First Year with an Autonomous Trader",slug:"first-year-autonomous-trader-2025",published:!0,publishDate:"2025-12-27",date:"2025-12-27T12:00:00Z",heroImage:"/blog-images/first-year-autonomous-trader-2025-hero.webp",imageAlt:"Calendar showing 2025 with trading charts and growth trajectory",excerpt:"985 trades. $4,907 in profit. 100% success rate. I almost dismissed this out of hand. Here's what my first year with an autonomous crypto trader actually looked like.",content:`I almost didn't do this.

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

My autonomous trading system was developed by Ed Barsano, creator of [GoBabyTrade™](/go/gobabytrade?from=blog-first-year-autonomous-trader-2025). I publish every single trade live at [myrobotictrader.com](https://myrobotictrader.com) — the good weeks, the quiet weeks, and everything in between.`,category:"Lifestyle",metaDescription:"A transparent look at my first year running an autonomous crypto trading system - the wins, the quiet months, and what I learned along the way."},{title:"Everyone Has an Opinion About Your Money (Here's Why They're Wrong)",slug:"everyone-has-an-opinion",publishDate:"2026-01-20",date:"2026-01-20T12:00:00Z",heroImage:"/blog-images/everyone-has-an-opinion-hero.webp",imageAlt:"Person covering ears surrounded by speech bubbles - everyone has an opinion",excerpt:"Your uncle thinks crypto is a scam. Your coworker won't stop talking about his gains. Financial TV is screaming about a crash. Here's how to tune out the noise.",content:`# Everyone Has an Opinion About Your Money (Here's Why They're Wrong)

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

My autonomous trading system was developed by Ed Barsano, creator of [GoBabyTrade™](/go/gobabytrade?from=blog-everyone-has-an-opinion). I publish every single trade live at [myrobotictrader.com](https://myrobotictrader.com) — the good weeks, the quiet weeks, and everything in between.`,category:"Market Psychology",metaDescription:"Your uncle thinks crypto is a scam. Your coworker won't stop talking about his gains. Financial TV is screaming about a crash. Here's how to tune out the noise."},{title:"Why You Always Buy the Top (It's Not Bad Luck)",slug:"fomo-engineering",published:!0,publishDate:"2026-01-08",date:"2026-01-08T12:00:00Z",heroImage:"/blog-images/fomo-engineering-hero.webp",imageAlt:"Fishing hook with crypto coin bait - FOMO is engineered",excerpt:"That urgent feeling that you HAVE to buy right now? It was manufactured. Here's how pumps are engineered to make you the exit liquidity.",content:`# Why You Always Buy the Top (It's Not Bad Luck)

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

My autonomous trading system was developed by Ed Barsano, creator of [GoBabyTrade™](/go/gobabytrade?from=blog-fomo-engineering). I publish every single trade live at [myrobotictrader.com](https://myrobotictrader.com) — the good weeks, the quiet weeks, and everything in between.`,category:"Market Psychology",metaDescription:"That urgent feeling that you HAVE to buy right now? It was manufactured. Here's how pumps are engineered to make you the exit liquidity."},{title:"Why Flat Markets Feel Hopeless (And Why That's Exactly the Point)",slug:"whale-accumulation",published:!0,publishDate:"2026-01-01",date:"2026-01-01T12:00:00Z",heroImage:"/blog-images/whale-accumulation-hero.webp",imageAlt:"Whale with glowing eye watching confused fish - Your frustration is their strategy",excerpt:"When crypto prices stay flat and you feel like giving up, you're experiencing a manufactured emotion. Here's what's really happening behind the scenes.",content:`# Why Flat Markets Feel Hopeless (And Why That's Exactly the Point)

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

My autonomous trading system was developed by Ed Barsano, creator of [GoBabyTrade™](/go/gobabytrade?from=blog-whale-accumulation). I publish every single trade live at [myrobotictrader.com](https://myrobotictrader.com) — the good weeks, the quiet weeks, and everything in between. Check out my results to see what patience looks like in action.`,category:"Market Psychology",metaDescription:"When crypto prices stay flat and you feel like giving up, you're experiencing a manufactured emotion. Here's what's really happening behind the scenes."},{title:"My AI Trader Made $0 on Christmas Eve. Here's Why That Beats the $1.8B Powerball.",slug:"powerball-vs-patience",published:!0,date:"2025-12-25T12:00:00Z",heroImage:"/blog-images/powerball-vs-patience-hero.webp",imageAlt:"Powerball vs Patience - One winner, millions of losers",excerpt:"One person won $1.8 billion on Christmas Eve. Millions more tore up their tickets. Meanwhile, my autonomous trader did something radical: nothing.",content:`Last night, someone in Arkansas became a billionaire.

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

Ready to stop hoping and start building? [Learn how the system works](/go/gobabytrade?from=blog-powerball-vs-patience)

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

[GoBabyTrade™](/go/gobabytrade?from=blog-day-trading-is-it-worth-it) doesn't require you to:
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

[Start Trading Automatically - Save $1,000](/go/gobabytrade?from=blog-day-trading-is-it-worth-it)

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

Instead of chasing jackpots or gambling on price predictions, he created [GoBabyTrade™](/go/gobabytrade?from=blog-powerball-christmas-47)—an AI-enhanced autonomous trading system that does something radical: it takes small, consistent profits from crypto market volatility, 24/7, without emotion.

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

I use [GoBabyTrade™](/go/gobabytrade?from=blog-prediction-markets-gambling-explosion), an AI-enhanced autonomous trading system created by 25-year trading veteran Ed Barsano. It's been running for almost a year:

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

**[GoBabyTrade™](/go/gobabytrade?from=blog-powerball-lottery-vs-systematic-trading) autonomous trading system:**
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

I use [GoBabyTrade™](/go/gobabytrade?from=blog-robinhood-gambling-vs-systematic-trading). It's not exciting. It doesn't make good TikTok content. Nobody's going to congratulate me at a party for my "AI-enhanced autonomous trading system."

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

While BexBack users are getting liquidated on 1% moves, here's what I'm doing with [GoBabyTrade™](/go/gobabytrade?from=blog-100x-leverage-gambling-trap):

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

The scoreboard only goes up. And I've never been liquidated.`,category:"Anti-Gambling",metaDescription:"BexBack promises 500% returns with 100x leverage. Their own help docs reveal the traps: vanishing bonuses, Apple rejection, and hidden risks."},{title:"The Crypto Strategies Everyone's Excited About (And Why I Chose Boring Instead)",slug:"crypto-strategies-everyone-excited-about",published:!0,date:"2025-12-13T12:00:00Z",heroImage:"/blog-images/crypto-strategies-boring-hero.webp",imageAlt:"Comparison of exciting crypto strategies vs boring autonomous trading",excerpt:"Airdrops, perps, and options — everyone on the money club call wanted to learn them. Here's what I discovered about each one, and why I chose the boring path instead.",category:"Education",metaDescription:"Airdrops, perps trading, and options explained. What I learned about each crypto strategy and why I chose boring autonomous trading for actual passive income.",content:`# The Crypto Strategies Everyone's Excited About (And Why I Chose Boring Instead)

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
- [How to Make Passive Income with Crypto (Without Day Trading)](/blog/how-to-make-passive-income-crypto) - What actual passive crypto income looks like`},{title:"Secure Your Crypto Exchange Account Before You Trade a Single Dollar",slug:"secure-coinbase-kraken-account",published:!0,date:"2025-12-11T12:00:00Z",heroImage:"/blog-images/secure-coinbase-kraken-account-hero.webp",imageAlt:"Lock and shield protecting crypto exchange accounts - security setup guide",excerpt:"The 15-minute setup that protects your investment from the most common attacks. Hardware security keys, withdrawal whitelisting, and the 2FA mistake that costs people thousands.",category:"Education",metaDescription:"Secure your Coinbase and Kraken accounts in 15 minutes. Why SMS 2FA is dangerous, how YubiKeys work, and the settings most people skip.",content:`# Secure Your Crypto Exchange Account Before You Trade a Single Dollar

**The 15-minute setup that protects your investment from the most common attacks.**

---

You just funded your [Coinbase](/go/coinbase) or [Kraken](/go/kraken) account. Maybe $500. Maybe $5,000. Maybe more.

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

**How to set up on [Coinbase](/go/coinbase):**
1. Go to Settings → Security
2. Select "Authenticator App" under 2-Step Verification
3. Scan the QR code with your authenticator app
4. **CRITICAL: Save your backup codes somewhere secure** (not on your phone)

**How to set up on [Kraken](/go/kraken):**
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

**How to set up on [Coinbase](/go/coinbase):**
1. Go to Settings → Security
2. Under 2-Step Verification, select "Security Key"
3. Insert your YubiKey and follow the prompts
4. **Buy two keys** - Set up both, keep one as backup in a secure location

**How to set up on [Kraken](/go/kraken):**
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

**On [Coinbase](/go/coinbase):**
1. Go to Settings → Security
2. Enable "Allowlist" for withdrawals
3. Add your known addresses (your hardware wallet, other exchanges you use, etc.)
4. New addresses require 48-hour wait period

**On [Kraken](/go/kraken):**
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

**On [Coinbase](/go/coinbase):**
1. Go to Settings → API
2. Create a new API key
3. **Uncheck** "Transfer" and "Withdraw" permissions
4. Only enable "Trade" permissions
5. Set IP allowlist if the trading service provides their server IPs

**On [Kraken](/go/kraken):**
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
- **Coinbase One** - If you're trading frequently, this subscription removes trading fees and includes priority support. The cost savings add up quickly with active trading. [Get Coinbase One here](/go/coinbase).
- **Session management** - Regularly review and revoke active sessions you don't recognize (Settings → Security → Active Sessions)

### Kraken

- **Global Settings Lock (GSL)** - Locks your security settings for a specified time period. Even if someone gets in, they can't change your 2FA or withdrawal addresses.
- **Master Key** - A separate password required for security changes. Store this securely and separately from your main password.
- **PGP encryption** - Kraken can encrypt emails to you. Advanced, but useful if you want to verify emails are genuinely from Kraken.

[Get started with Kraken here](/go/kraken).

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

The exchanges themselves—[Coinbase](/go/coinbase), [Kraken](/go/kraken)—have solid security infrastructure. What they can't protect you from is a weak password, SMS-based 2FA, or falling for a phishing email.

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
- [FanDuel's 25% Profit Boost: Why Boosting a Bad Bet Is Still a Bad Bet](/blog/same-game-parlay-profit-boost-trap) - Sports betting's version of the lottery trap`,category:"Anti-Gambling",metaDescription:"The Powerball jackpot hit $1 billion. Lines are forming everywhere. Here's the math the lottery commission hopes you'll ignore."},{title:'Options Trading: The "Passive Income" That Requires a PhD',slug:"options-trading-passive-income",published:!0,date:"2025-12-11T12:00:00Z",heroImage:"/blog-images/options-trading-passive-income-hero.webp",imageAlt:"Options trading passive income myth - the complexity they don't show you",excerpt:"They told me it was easy. Then I read the course materials. Here's what 'beginner-friendly' options trading actually requires.",category:"Education",metaDescription:"Options trading is marketed as easy passive income. Here's what it actually requires: Greeks, technical analysis, margin risk, and unlimited loss potential.",content:`# Options Trading: The "Passive Income" That Requires a PhD

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

I use [GoBabyTrade™](/go/gobabytrade?from=blog-options-trading-passive-income), an AI-enhanced autonomous trading system that's been running for over 25 years. It handles all the execution while I live my life.

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
- [A Billion Dollar Lottery and the Math Nobody Wants to Hear](/blog/powerball-billion-dollar-lottery-math) - When the math is designed against you`},{title:"The 50/50 Strategy: How I Balance Taking Profits and Growing Capital",slug:"the-50-50-strategy",published:!0,date:"2025-12-10T12:00:00Z",heroImage:"/blog-images/the-50-50-strategy-hero.webp",imageAlt:"The 50/50 Strategy - 50% to life, 50% to growth with dollar sign splitting into groceries and compound growth",excerpt:"Everyone asks 'how much should I invest?' But after 11 months of autonomous trading, I've realized that's the wrong question. Here's my 50/50 approach to taking profits AND growing capital.",category:"Education",metaDescription:"Stop hoarding paper gains. My 50/50 strategy: take half your trading profits for real life, reinvest half for growth. Real numbers inside.",content:`# The 50/50 Strategy: How I Balance Taking Profits and Growing Capital

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

Ed Barsano, creator of [GoBabyTrade™](/go/gobabytrade?from=blog-collectible-gambling-labubu-bearista), spent 25 years building that system. During a 90% market crash, he turned $200,000 into $950,000+ in realized profits.

Not by fighting over cups. By executing a system.

---

## The Bottom Line

I'm not saying don't enjoy things. Buy a Labubu if it makes you happy. Get the Bearista cup if you'll actually use it.

But don't call it investing. Don't spend $2,500/month chasing plastic. Don't fight strangers at Starbucks at 5 AM.

And definitely don't tell yourself "this is different" while your credit card balance grows and your retirement account stays empty.

If you want passive income, there's a better way than blind boxes and artificial scarcity.

The scoreboard only goes up. And I've never had to throw a punch for it.

---

*Ready to stop gambling and start building? [Start with GoBabyTrade™](/go/gobabytrade?from=blog-collectible-gambling-labubu-bearista) - save $1,000 with my link. Or check out my [live results](/) - every trade, every profit, fully transparent. No blind boxes required.*

---

**Related:**
- [The $30 Trillion Collectible: Why Gold Isn't the Investment You Think It Is](/blog/gold-vs-stocks-collectible-tax) - Another collectible that's not the investment you think
- [The 50% Illusion: Why "Prediction Markets" Are Just Gambling With Extra Steps](/blog/forecasttrader-50-percent-illusion) - Speculation disguised as investing`,category:"Anti-Gambling",metaDescription:"Police called to Starbucks. $22,895 on blind boxes. Adults fighting over plastic. Labubu dolls and Bearista cups aren't collecting—they're gambling."},{title:"FanDuel's 25% Profit Boost: Why Boosting a Bad Bet Is Still a Bad Bet",slug:"same-game-parlay-profit-boost-trap",published:!0,date:"2025-12-07T14:00:00Z",heroImage:"/blog-images/profit-boost-trap-hero.webp",imageAlt:"FanDuel profit boost exposed - the math behind same game parlays",excerpt:"Right now, FanDuel is offering 25% profit boosts on same-game parlays. Sounds like free money, right? Here's the math they're hoping you won't do.",content:`# FanDuel's 25% Profit Boost: Why Boosting a Bad Bet Is Still a Bad Bet

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

That's what Ed Barsano, creator of [GoBabyTrade™](/go/gobabytrade?from=blog-same-game-parlay-profit-boost-trap), built over 25 years of trading.

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

That's not hypothetical. That's exactly what Ed Barsano, creator of [GoBabyTrade™](/go/gobabytrade?from=blog-passive-income-myth-autonomous-trading), has done.

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
- [Trading Disorders Are Real: Why I Let an AI Make Every Trade](/blog/trading-disorders-ai-solution) - Why automation makes passive income possible`,category:"Education",metaDescription:"Raoul Pal says passive income is a myth. He's almost right—but autonomous trading systems change everything. 25 years of coded expertise."},{title:'Why I Show % Gain Instead of "How Much Should I Invest?"',slug:"percent-gain-vs-roi",published:!0,date:"2025-12-05T12:00:00Z",heroImage:"/blog-images/percent-gain-vs-roi-hero.webp",imageAlt:"Percentage gain chart showing consistent returns regardless of investment size",excerpt:"People always ask how much I've invested. But that's the wrong question. Here's why I show percentage gain per trade instead—and why it matters more than ROI.",content:`# Why I Show % Gain Instead of "How Much Should I Invest?"

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
- [Why Your Crypto Trading System Should Never Sell at a Loss (And How That's Actually Possible)](/blog/never-sell-at-loss-crypto-trading) - Why 100% win rate matters more than ROI`,category:"Education",metaDescription:"Why percentage gain per trade matters more than ROI. What 968 trades reveal about consistent returns and why 'how much to invest' is the wrong question."},{title:"The $30 Trillion Collectible: Why Gold Isn't the Investment You Think It Is",slug:"gold-vs-stocks-collectible-tax",published:!0,date:"2025-11-30T12:00:00Z",heroImage:"/blog-images/gold-vs-stocks-collectible-tax-hero.webp",imageAlt:"Gold coins with IRS collectible tax stamp showing 28% rate versus stock market returns",excerpt:"The IRS doesn't classify gold as an investment—it's a 'collectible' taxed at 28%. Here's what the celebrity spokesmen won't tell you about gold's real returns, hidden costs, and why systematic trading beats shiny metals.",content:`# The $30 Trillion Collectible: Why Gold Isn't the Investment You Think It Is
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

After trying staking (too slow for primary income), researching DeFi (too risky), and watching the lending platform disasters from the sidelines, I found a different approach: **AI-enhanced autonomous trading with [GoBabyTrade™](/go/gobabytrade?from=blog-how-to-make-passive-income-crypto).**

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
- [Renting Hashpower: Mining or Just Gambling With Extra Steps?](/blog/renting-hashpower-mining-or-gambling) - Another 'investment' that's really gambling`,category:"Education",metaDescription:"ForecastTrader promises easy profits at 50% accuracy. The math and psychology prove otherwise. Prediction markets are gambling in disguise.",imageAlt:"Dice and stock chart showing the gambling nature of prediction markets"},{title:"My Barber Was Up 40% on Robinhood. He Never Sold. Now He Feels Like He's Losing.",slug:"paper-gains-vs-realized-profits",published:!0,date:"2025-11-23T10:00:00Z",content:`# My Barber Was Up 40% on Robinhood. He Never Sold. Now He Feels Like He's Losing.

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

Now let me tell you what [GoBabyTrade™](/go/gobabytrade?from=blog-fear-greed-index-11-systematic-trading), my AI-enhanced autonomous trading system created by 25-year trading veteran Ed Barsano, did when the Fear & Greed Index hit 11.

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
- [Why Down Markets Are Actually the Best Time to Start Automated Crypto Trading (With Real Numbers)](/blog/why-start-automated-trading-in-down-markets) - Why fear creates opportunity`,category:"Market Intelligence",metaDescription:"The Crypto Fear & Greed Index hit 11/100. Here's why my AI trading system ignores market sentiment and how systematic trading beats emotions.",heroImage:"/blog-images/fear-greed-index-11-systematic-trading-hero.webp",imageAlt:"Abstract cryptocurrency data visualization showing market sentiment patterns"},{title:"Why Your Crypto Trading System Should Never Sell at a Loss (And How That's Actually Possible)",slug:"never-sell-at-loss-crypto-trading",published:!0,date:"2025-11-21T10:00:00Z",content:`# The One Rule That Changes Everything

Here's something that sounds impossible: What if your trading system was programmed to **never, ever sell at a loss?**

Not "try not to sell at a loss." Not "minimize losses." But literally never sell unless it's profitable.

Most traders would tell you that's impossible. They'd say you need stop losses. That you have to "cut your losers" and "let your winners run." That holding losing positions is how you blow up your account.

But what if everything you've been taught about loss management is backwards?

## The Problem With Traditional Loss Management

Let me share something I learned from Ed Barsano, creator of [GoBabyTrade™](/go/gobabytrade?from=blog-never-sell-at-loss-crypto-trading), that really opened my eyes. He's been trading for 25 years and built a system with one core rule: **Never sell at a loss.**

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

I recently watched Ed Barsano, creator of [GoBabyTrade™](/go/gobabytrade?from=blog-bucket-and-well-automated-trading-analogy), explain his 25-year-old AI-enhanced trading system using an analogy so simple, so elegant, that it made everything click.

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

But here's what Ed Barsano, creator of [GoBabyTrade™](/go/gobabytrade?from=blog-why-start-automated-trading-in-down-markets) and 25-year trading veteran, shared:

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

Ed Barsano, creator of [GoBabyTrade™](/go/gobabytrade?from=blog-why-start-automated-trading-in-down-markets), started with **$200,000** on December 19, 2021.

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
- [Crypto Is Dead? The SEC Chairman Disagrees.](/blog/crypto-is-dead-sec-depin-web3) - Why 'crypto is dead' means opportunity`,category:"Education",metaDescription:"Discover why starting automated crypto trading during market crashes is actually the optimal entry point, backed by real numbers and 25 years of data.",heroImage:"/blog-images/why-start-automated-trading-in-down-markets-hero.webp",imageAlt:"Cryptocurrency market downturn chart showing strategic entry opportunity"},{slug:"pionex-research-not-switching",title:"I Researched Pionex. Here's Why I'm Not Switching.",publishDate:"2026-01-02",date:"2026-01-02T12:00:00Z",published:!0,category:"Market Intelligence",author:"Patrick Jenkins",heroImage:"/blog-images/pionex-research-not-switching-hero.webp",imageAlt:"Pionex trading bot research comparison",excerpt:"After a year of autonomous trading and 1,000+ verified trades, I researched Pionex to see if I should switch. Here's what I found—and why I'm staying put.",metaDescription:"After a year of autonomous trading and 1,000+ verified trades, I researched Pionex to see if I should switch. Here's what I found—and why I'm staying put.",content:`After a year of autonomous trading—1,000+ trades, every single one published—I sometimes get asked: "Have you tried Pionex? It's free!"

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

**Results over tools.** I don't want to configure bots. I want profits in my account. My system has generated over $5,000 in verified profits without me touching a single setting.

**Transparency over promises.** Anyone can claim their bot works. I publish every trade—wins and the occasional open position—for anyone to verify.

**Time over tinkering.** I spent enough of my career optimizing systems. For my trading, I wanted something that runs while I focus on other things. My system averages a trade every 8 hours. I check it when I feel like it.

**Proven over experimental.** After 1,000+ trades and a 100% win rate on closed positions, I'm not looking to start over with a platform that requires me to build the strategy from scratch.

Pionex is free. But my time isn't. And my capital definitely isn't.

## The Bottom Line

Pionex is a legitimate platform. The free bots are real. For someone who wants to experiment with automation and has time to develop their own strategies, it's a reasonable starting point.

But free tools don't guarantee free profits. And learning to configure grid bots—through trial and error with real money—has its own cost.

I chose a different path: an AI-enhanced system with built-in strategy that I can verify in real-time. Over a year and 1,000+ trades later, I'm glad I did.

Want to see what that looks like? Every trade I make is published live. [See my actual results →](/)

---

*The autonomous trading system I use was developed by Ed Barsano and the GoBabyTrade™ team, who've spent 25+ years refining systematic trading approaches. I'm an affiliate because I use the product—not the other way around.*`},{slug:"coinrule-easy-not-profitable",title:"Coinrule Makes Trading 'Easy.' That's Exactly Why I Passed.",publishDate:"2026-01-06",date:"2026-01-06T12:00:00Z",published:!0,category:"Market Intelligence",author:"Patrick Jenkins",heroImage:"/blog-images/coinrule-easy-not-profitable-hero.webp",imageAlt:"Coinrule trading automation platform review",excerpt:"Coinrule promises 'if this, then that' trading automation. After researching their 250+ templates, I understood why easy doesn't mean profitable.",metaDescription:"Coinrule promises 'if this, then that' trading automation. After researching their 250+ templates, I understood why easy doesn't mean profitable.",content:`"Build trading rules without code!"
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

After a year of autonomous trading and 1,000+ published trades, I know what I was looking for:

**I wanted the strategy, not just the tools.** Coinrule lets me build anything. My system came with a strategy already working. After 1,000+ trades and a 100% win rate on closed positions, I didn't have to guess which rules might work.

**I wanted transparency over templates.** I can see 250 templates on Coinrule. What I can't see is how many users actually profit with them. My system? Every trade is published. The strategy proves itself daily in a spreadsheet anyone can view.

**I valued simplicity—actual simplicity.** Coinrule is "easy" compared to coding. But I still have to decide what rules to build, test them, iterate, refine. That's a hobby, and some people enjoy it. I wanted something even simpler: watch the results come in.

**I didn't want to learn by losing.** The natural path with Coinrule is: try things → see what fails → try other things → eventually find what works. That learning costs real money. I wanted to skip to "what works" and verify it myself.

## The Bottom Line

Coinrule is a well-designed platform for people who want to build trading automation visually. If you enjoy the process of creating and testing strategies, it's a solid option.

But "easy to use" and "easy to profit" are different things entirely.

Making rule-building simple doesn't make profitable rules simple. And that's where most people actually struggle.

I wanted something where the strategy was the product—not just the tools to build my own. After 1,000+ trades and over $5,000 in verified profits, I'm glad I chose that path.

Curious what results-first looks like? Every trade is published live. [See my actual performance →](/)

---

*The autonomous trading system I use was developed by Ed Barsano and the GoBabyTrade™ team, who've spent 25+ years refining systematic trading approaches. I'm an affiliate because I use the product—not the other way around.*`},{slug:"3commas-million-users",title:"3Commas Has 1 Million Users. I'm Not One of Them. Here's Why.",publishDate:"2026-01-11",date:"2026-01-11T12:00:00Z",category:"Market Intelligence",author:"Patrick Jenkins",heroImage:"/blog-images/3commas-million-users-hero.webp",imageAlt:"3Commas trading platform review",excerpt:"3Commas serves over 1 million traders. After researching their platform extensively, I chose a different path. Here's what I found.",metaDescription:"3Commas serves over 1 million traders. After researching their platform, I chose a different path. Here's what I found and why I'm staying put.",content:`One million users. Over $100 billion in trading volume. A decade in the crypto space.

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

**I wanted proven, not promising.** 3Commas gives you the capability to build something. My current system came with a strategy already working. 1,000+ trades later, I didn't have to learn anything or configure anything—I just had to verify it was doing what it claimed.

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

After a year of autonomous trading, 1,000+ verified trades, and over $5,000 in actual profits, I'm glad I chose a different path. Not because 3Commas is bad, but because my approach fit what I actually wanted: results without complexity.

Want to see what that looks like in practice? Every single trade is published. [View my live results →](/)

---

*The autonomous trading system I use was developed by Ed Barsano and the GoBabyTrade™ team, who've spent 25+ years refining systematic trading approaches. I'm an affiliate because I use the product—not the other way around.*`},{slug:"bitsgap-everything-simpler",title:"Bitsgap Offers Everything. I Chose Something Simpler.",publishDate:"2026-01-27",date:"2026-01-27",category:"Market Intelligence",author:"Patrick Jenkins",heroImage:"/blog-images/bitsgap-everything-simpler-hero.webp",imageAlt:"Bitsgap trading platform review",excerpt:"Bitsgap combines bots, arbitrage, portfolio tracking, and more in one platform. After researching all those features, I chose a simpler path.",metaDescription:"Bitsgap combines bots, arbitrage, and portfolio tracking in one platform. After researching all those features, I chose a simpler path.",content:`Grid bots. DCA bots. Arbitrage scanner. Futures trading. Portfolio tracking. Demo mode. 15+ exchange integrations.

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

**I don't want everything. I want what works.** Bitsgap offers grid bots, DCA bots, arbitrage, futures, portfolio tracking... My system does one thing and does it well. After 1,000+ trades and over $5,000 in profits, simplicity won.

**Features don't equal profits.** More capabilities, more bot types, more tools... none of that generates returns by itself. My system came with strategy included. I didn't need an arsenal of options; I needed one approach that was already proven.

**Transparency beats dashboards.** Bitsgap has beautiful portfolio views and analytics. What I can't see is their users' actual results. My system publishes every trade—wins and open positions—for anyone to verify. That's the transparency that matters to me.

**I was done paying for potential.** $28-143/month to access tools that might help me profit? After a year of actual results without subscription costs, I can tell you: paying for tools vs. paying for outcomes are very different things.

## The Honest Assessment

Bitsgap isn't a bad platform. For the right user, it might be excellent. The features are real, the interface is polished, and the team has clearly invested in building something comprehensive.

But comprehensive isn't the same as effective.

More features don't guarantee better results. And in a space where—according to industry experts—most traders lose money even with sophisticated tools, I had to ask: is more sophistication actually what I need?

I decided it wasn't. I wanted something simpler, with strategy built in, and results I could verify in real-time. After 1,000+ trades, I'm confident I made the right call.

Want to see simple and transparent in action? Every trade is live. [Check my actual results →](/)

---

*The autonomous trading system I use was developed by Ed Barsano and the GoBabyTrade™ team, who've spent 25+ years refining systematic trading approaches. I'm an affiliate because I use the product—not the other way around.*`},{slug:"1000-trades-what-i-know",title:"After 1,000+ Trades, Here's What I Actually Know About Crypto Trading Bots",publishDate:"2026-01-30",date:"2026-01-30",category:"Education",author:"Patrick Jenkins",heroImage:"/blog-images/1000-trades-what-i-know-hero.webp",imageAlt:"What I learned after 1000 crypto bot trades",excerpt:"After a year of autonomous trading and over 1,000 verified trades, I finally have a real answer to whether crypto trading bots are profitable. Here's what I know now.",metaDescription:"After 1,000+ verified trades, I finally have a real answer to whether crypto trading bots are profitable. Here's what I know now.",content:`"Are crypto bots profitable?"

I've read dozens of articles trying to answer this question. Most of them fall into two camps: breathless enthusiasm (yes! passive income! financial freedom!) or cynical dismissal (it's all gambling, you'll lose everything).

I have a different perspective: actual experience.

After a year of autonomous trading, over 1,000 trades, and more than $5,000 in verified profits—every single transaction published for anyone to verify—I can finally answer this question with something other than theory.

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

![Tools vs Strategy Comparison](/blog-images/1000-trades-what-i-know-01.webp)

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

My first month wasn't spectacular. Neither was my second. Over time, the compounding effect became clear. After 1,000+ trades, I've generated over $5,000 in verified profits.

But I had to trust the process long enough to see it work. Most people don't.

![My Year in Numbers](/blog-images/1000-trades-what-i-know-02.webp)

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

- **Total trades:** 1,000+
- **Closed trade win rate:** 100%
- **Total verified profit:** Over $5,000
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

After 1,000+ trades and over $5,000 in actual profits, I'm still learning. But I'm learning from real results, not hypothetical scenarios.

Want to see what that looks like? Every trade is published. [View my live transparency dashboard →](/)

---

*The autonomous trading system I use was developed by Ed Barsano and the GoBabyTrade™ team, who've spent 25+ years refining systematic trading approaches. I'm an affiliate because I use the product—not the other way around.*`}];function dD(e){if(e.published===!1)return!1;if(!e.publishDate)return!0;const t=new Date(e.publishDate),n=new Date;return n.setHours(0,0,0,0),t.setHours(0,0,0,0),t<=n}function hD(e){return e.filter(dD)}function cp(e){return new Date(e.publishDate||e.date)}function i3(){return typeof window>"u"?!1:new URLSearchParams(window.location.search).get("preview")==="true"}const mD=({maxPosts:e=4})=>{const t=hD(uD).sort((i,s)=>cp(s).getTime()-cp(i).getTime()).slice(0,e),n=i=>new Date(i).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),r=i=>({Education:"from-blue-500 to-cyan-500","Anti-Gambling":"from-red-500 to-orange-500","Market Intelligence":"from-green-500 to-emerald-500",Lifestyle:"from-purple-500 to-pink-500","Market Psychology":"from-amber-500 to-yellow-500"})[i]||"from-purple-500 to-blue-500";if(t.length===0)return null;const[a,...o]=t;return d.jsxs("section",{className:"py-20 px-4 relative overflow-hidden",children:[d.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/30 to-slate-900 -z-10"}),d.jsx("div",{className:"absolute top-0 right-1/4 w-96 h-96 bg-gradient-radial from-purple-500/10 to-transparent rounded-full -z-10 opacity-60"}),d.jsx("div",{className:"absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-radial from-blue-500/10 to-transparent rounded-full -z-10 opacity-60"}),d.jsxs("div",{className:"max-w-6xl mx-auto relative z-10",children:[d.jsxs("div",{className:"text-center mb-12",children:[d.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-white mb-4",children:"Latest Insights"}),d.jsx("p",{className:"text-gray-300 text-lg max-w-2xl mx-auto",children:"Real talk about trading, building wealth, and avoiding the gambling trap"})]}),d.jsx(Pn,{to:`/blog/${a.slug}`,className:"group block mb-8 bg-gray-900/50 rounded-2xl overflow-hidden border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 shadow-lg shadow-purple-500/10 hover:shadow-xl hover:shadow-purple-500/20",children:d.jsxs("div",{className:"grid md:grid-cols-2 gap-0",children:[d.jsx("div",{className:"aspect-video md:aspect-auto overflow-hidden",children:d.jsx("img",{src:a.heroImage,alt:a.imageAlt||a.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"})}),d.jsxs("div",{className:"p-6 md:p-8 flex flex-col justify-center",children:[d.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[d.jsxs("span",{className:"flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-full",children:[d.jsx(mt,{className:"w-3 h-3"})," FEATURED"]}),d.jsx("span",{className:`px-3 py-1 bg-gradient-to-r ${r(a.category)} text-white text-xs font-medium rounded-full`,children:a.category})]}),d.jsx("h3",{className:"text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors",children:a.title}),d.jsx("p",{className:"text-gray-300 text-lg mb-6 line-clamp-3",children:a.excerpt||a.metaDescription}),d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsx("span",{className:"text-gray-500",children:n(a.date)}),d.jsxs("span",{className:"text-purple-400 flex items-center gap-2 font-medium group-hover:gap-3 transition-all",children:["Read article ",d.jsx(qe,{className:"w-5 h-5"})]})]})]})]})}),o.length>0&&d.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:o.map(i=>d.jsxs(Pn,{to:`/blog/${i.slug}`,className:"group block bg-gray-900/50 rounded-xl overflow-hidden border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 shadow-lg shadow-purple-500/10 hover:shadow-xl hover:shadow-purple-500/20",children:[d.jsx("div",{className:"aspect-video overflow-hidden",children:d.jsx("img",{src:i.heroImage,alt:i.imageAlt||i.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",loading:"lazy"})}),d.jsxs("div",{className:"p-5",children:[d.jsx("span",{className:`inline-block px-2.5 py-1 text-xs font-medium bg-gradient-to-r ${r(i.category)} text-white rounded-full mb-3`,children:i.category}),d.jsx("h3",{className:"text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-purple-300 transition-colors",children:i.title}),d.jsx("p",{className:"text-gray-400 text-sm line-clamp-2 mb-4",children:i.excerpt||i.metaDescription}),d.jsxs("div",{className:"flex items-center justify-between text-sm",children:[d.jsx("span",{className:"text-gray-500",children:n(i.date)}),d.jsxs("span",{className:"text-purple-400 flex items-center gap-1 group-hover:gap-2 transition-all",children:["Read ",d.jsx(qe,{className:"w-4 h-4"})]})]})]})]},i.slug))}),d.jsx("div",{className:"text-center mt-10",children:d.jsxs(Pn,{to:"/blog",className:"inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-colors group",children:[d.jsx(ow,{className:"w-5 h-5"}),d.jsx("span",{children:"View all articles"}),d.jsx(qe,{className:"w-5 h-5 group-hover:translate-x-1 transition-transform"})]})})]})]})},pD=[{id:"1-year-5k",date:"January 2026",title:"$5,000 Profit Milestone",description:"One year of systematic trading. 1,002 trades executed autonomously with 100% success rate on closed positions.",stats:[{label:"Total Profit",value:"$5,005.96"},{label:"Closed Trades",value:"1,002"},{label:"Avg Per Trade",value:"$5.00"},{label:"Win Rate",value:"100%"}],icon:"trophy",featured:!0,blogSlug:"one-year-5k-milestone"}],gD={trophy:xw,calendar:Yo,trending:mt,target:er},yD=()=>d.jsx("section",{className:"py-16 px-4",children:d.jsxs("div",{className:"max-w-4xl mx-auto",children:[d.jsxs("div",{className:"text-center mb-12",children:[d.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-white mb-4",children:"Milestones"}),d.jsx("p",{className:"text-xl text-gray-300 max-w-2xl mx-auto",children:"Real achievements from systematic trading. Every number verified, every trade published."})]}),d.jsx("div",{className:"space-y-6",children:pD.map(e=>{const t=gD[e.icon];return d.jsxs("div",{className:"group relative bg-white/8  rounded-2xl p-6 md:p-8 border border-white/20 hover:border-green-400/40 transition-all duration-300 shadow-lg",children:[d.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[d.jsx("div",{className:"w-11 h-11 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 p-2.5 shadow-lg shadow-green-500/30 flex-shrink-0",children:d.jsx(t,{className:"w-full h-full text-white"})}),d.jsx("h3",{className:"text-2xl md:text-3xl font-bold text-white",children:e.title}),d.jsx("span",{className:"text-sm text-gray-400",children:e.date}),e.featured&&d.jsxs("span",{className:"inline-flex items-center gap-1.5 bg-green-500/20 rounded-full px-2.5 py-0.5 border border-green-400/40",children:[d.jsx("span",{className:"w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"}),d.jsx("span",{className:"text-green-300 text-xs font-medium",children:"New"})]})]}),d.jsx("p",{className:"text-gray-300 mb-6",children:e.description}),d.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:e.stats.map((n,r)=>{const a=n.label==="Total Profit"?"text-green-300":n.label==="Closed Trades"?"text-orange-300":n.label==="Avg Per Trade"?"text-purple-300":n.label==="Win Rate"?"text-cyan-300":"text-green-300";return d.jsxs("div",{className:"bg-white/5  rounded-xl p-4 text-center border border-white/10",children:[d.jsx("div",{className:`text-xl md:text-2xl font-bold ${a}`,children:n.value}),d.jsx("div",{className:"text-sm text-gray-400 mt-1",children:n.label})]},r)})}),e.blogSlug&&d.jsx("a",{href:`/blog/${e.blogSlug}`,className:"inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-medium transition-colors mt-5",children:"Read the full story →"})]},e.id)})})]})}),fD=function(){return d.jsx("footer",{className:"relative py-16 px-4 border-t border-white/10",children:d.jsxs("div",{className:"max-w-6xl mx-auto",children:[d.jsxs("div",{className:"text-center mb-8",children:[d.jsxs("a",{href:"/",className:"inline-flex items-center justify-center gap-3 mb-6 group",children:[d.jsx("div",{className:"w-8 h-8 rounded-lg overflow-hidden shadow-lg shadow-purple-500/40 bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 group-hover:scale-105 transition-transform",children:d.jsx("div",{className:"w-full h-full rounded overflow-hidden bg-white/10 ",children:d.jsx("img",{src:"/robot-logo.png",alt:"MyRoboticTrader Robot",className:"w-full h-full object-cover"})})}),d.jsxs("div",{className:"text-xl font-bold group-hover:scale-105 transition-transform",children:[d.jsx("span",{className:"text-gray-300",children:"My"}),d.jsx("span",{className:"text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text",children:"Robotic"}),d.jsx("span",{className:"text-gray-300",children:"Trader"}),d.jsx("span",{className:"text-purple-400 text-sm ml-1",children:".com"})]})]}),d.jsx("p",{className:"text-gray-400 mb-8 max-w-2xl mx-auto",children:"Set it and forget it crypto trading that never trades at a loss. Your funds stay secure while AI-Enhanced technology maximizes profits 24/7."}),d.jsxs("div",{className:"flex flex-col sm:flex-row justify-center items-center gap-6 mb-8",children:[d.jsxs("a",{href:"/go/gobabytrade?from=footer",target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2 group",children:["Start Trading – Save $1,000",d.jsx(Bu,{className:"w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"})]}),d.jsxs("a",{href:"/resources",className:"text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2 group",children:["Recommended Tools",d.jsx(qe,{className:"w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"})]}),d.jsxs("a",{href:"/archive",className:"text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2 group",children:["Article Archive",d.jsx(qe,{className:"w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"})]}),d.jsxs("a",{href:"/privacy",className:"text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2 group",children:[d.jsx(Qr,{className:"w-4 h-4"}),"Privacy Policy",d.jsx(qe,{className:"w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"})]}),d.jsxs("a",{href:"https://x.com/myrobotictrader",target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2 group",children:[d.jsx(kw,{className:"w-4 h-4"}),"Follow Us on X",d.jsx(Bu,{className:"w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"})]})]})]}),d.jsx("div",{className:"border-t border-white/10 pt-8 mb-8",children:d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-gray-500 max-w-5xl mx-auto",children:[d.jsxs("div",{className:"bg-white/5 rounded-lg p-4 border border-white/10",children:[d.jsx("h4",{className:"text-gray-300 font-semibold mb-2",children:"Affiliate Disclosure"}),d.jsx("p",{className:"leading-relaxed mb-3",children:"We earn commissions from recommended products and services. This doesn't affect our recommendations or your costs. We only promote solutions we believe provide real value to traders."}),d.jsxs("p",{className:"leading-relaxed text-purple-300",children:[d.jsx("strong",{children:"Specific Disclosure:"})," We are an affiliate of GoBabyTrade and earn commissions when you sign up through our referral link. Use our link to save $1,000 on your subscription."]})]}),d.jsxs("div",{className:"bg-white/5 rounded-lg p-4 border border-white/10",children:[d.jsx("h4",{className:"text-gray-300 font-semibold mb-2",children:"Risk Warning"}),d.jsx("p",{className:"leading-relaxed",children:"Crypto trading involves risk. Past performance doesn't guarantee future results. Only trade with funds you can afford to lose. Consider your risk tolerance carefully. Always do your own research (DYOR)."})]}),d.jsxs("div",{className:"bg-white/5 rounded-lg p-4 border border-white/10",children:[d.jsx("h4",{className:"text-gray-300 font-semibold mb-2",children:"Platform Disclaimer"}),d.jsx("p",{className:"leading-relaxed",children:"Not affiliated with Facebook, Meta, Coinbase, Kraken, or any trading platform unless explicitly stated. All trademarks belong to their respective owners and are used for identification only."})]}),d.jsxs("div",{className:"bg-white/5 rounded-lg p-4 border border-white/10",children:[d.jsx("h4",{className:"text-gray-300 font-semibold mb-2",children:"Educational Purpose"}),d.jsx("p",{className:"leading-relaxed",children:"Information provided is educational only, not financial advice. Individual results vary. Consult qualified financial professionals before making investment decisions."})]})]})}),d.jsxs("div",{className:"border-t border-white/10 pt-8 text-center",children:[d.jsxs("a",{href:"/",className:"inline-flex items-center justify-center gap-2 mb-3 group",children:[d.jsx("div",{className:"w-5 h-5 rounded overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 group-hover:scale-105 transition-transform",children:d.jsx("div",{className:"w-full h-full rounded overflow-hidden bg-white/10 ",children:d.jsx("img",{src:"/robot-logo.png",alt:"",className:"w-full h-full object-cover"})})}),d.jsxs("span",{className:"text-gray-400 text-sm group-hover:text-purple-400 transition-colors",children:["© ",new Date().getFullYear()," ",d.jsx("span",{className:"text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-semibold",children:"MyRoboticTrader"}),".com"]})]}),d.jsx("div",{className:"text-xs text-gray-500",children:"Independent affiliate marketing website. Not affiliated with any trading platform or exchange unless explicitly disclosed above."}),d.jsxs("button",{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:"mt-6 inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-colors group","aria-label":"Back to top",children:[d.jsx(aw,{className:"w-4 h-4 group-hover:-translate-y-1 transition-transform"}),d.jsx("span",{className:"text-sm font-medium",children:"Back to Top"})]})]})]})})},vD=e=>{const[t,n]=g.useState(()=>typeof window<"u"?window.matchMedia(e).matches:!1);return g.useEffect(()=>{const r=window.matchMedia(e);n(r.matches);const a=o=>n(o.matches);return r.addEventListener("change",a),()=>r.removeEventListener("change",a)},[e]),t},bD=()=>{var h;const e=up(),[t,n]=g.useState(!1),{tradingStats:r,isLoading:a}=Bl(),o=vD("(min-width: 768px)"),i=()=>{Ho("start_trading_save_1000","full_nav"),zo("/go/gobabytrade?from=nav","Start Trading Save $1000 Nav")},s=[{label:"Home",path:"/"},{label:"Blog",path:"/blog"},{label:"FAQ",path:"/faq"},{label:"Resources",path:"/resources"},{label:"How to Buy",path:"/gobabytrade-setup-guide"}],l=m=>m==="/"?e.pathname==="/":e.pathname.startsWith(m),u=(()=>{if(!(r!=null&&r.totalProfit))return 0;const m=new Date("2025-01-08"),y=Math.floor((new Date().getTime()-m.getTime())/(1e3*60*60*24));return y>0?r.totalProfit/y:0})();return d.jsx("nav",{className:"sticky top-0 z-50 bg-slate-900/95 border-b border-white/10",children:d.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[d.jsxs("div",{className:"flex items-center gap-4 h-16",children:[d.jsxs(Pn,{to:"/",className:"flex items-center gap-3 group flex-shrink-0",children:[d.jsx("div",{className:"w-8 h-8 rounded-lg overflow-hidden shadow-md shadow-purple-500/30 bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 group-hover:shadow-lg group-hover:shadow-purple-500/40 transition-all duration-300",children:d.jsx("div",{className:"w-full h-full rounded-md overflow-hidden bg-white/10",children:d.jsx("img",{src:"/robot-logo.png",alt:"MyRoboticTrader Robot",className:"w-full h-full object-cover"})})}),d.jsxs("div",{className:"text-lg font-bold",children:[d.jsx("span",{className:"text-white",children:"My"}),d.jsx("span",{className:"text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text",children:"Robotic"}),d.jsx("span",{className:"text-white",children:"Trader"})]})]}),o&&d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"flex items-center gap-4 flex-1 justify-center max-w-4xl",children:[d.jsxs("div",{className:"flex items-center gap-3 bg-white/10 rounded-lg px-4 py-2 border border-white/20 shadow-sm hover:shadow-md hover:bg-white/[0.12] transition-all duration-200 cursor-default",children:[d.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-green-400 to-emerald-500 p-1.5 flex-shrink-0 shadow-md",children:d.jsx(Xr,{className:"w-full h-full text-white",strokeWidth:2.5})}),d.jsx("div",{className:"min-w-0",children:a?d.jsx("div",{className:"text-sm font-bold text-green-300 animate-pulse",children:"Loading..."}):d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"text-sm font-bold text-green-300 truncate",children:["$",r==null?void 0:r.totalProfit.toLocaleString("en-US",{minimumFractionDigits:0,maximumFractionDigits:0}),"+"]}),d.jsx("div",{className:"text-xs text-gray-400 font-medium",children:"Total"})]})})]}),d.jsxs("div",{className:"flex items-center gap-3 bg-white/10 rounded-lg px-4 py-2 border border-white/20 shadow-sm hover:shadow-md hover:bg-white/[0.12] transition-all duration-200 cursor-default",children:[d.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-500 p-1.5 flex-shrink-0 shadow-md",children:d.jsx(Yo,{className:"w-full h-full text-white",strokeWidth:2.5})}),d.jsx("div",{className:"min-w-0",children:a?d.jsx("div",{className:"text-sm font-bold text-blue-300 animate-pulse",children:"Loading..."}):d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"text-sm font-bold text-blue-300 truncate",children:["$",((h=r==null?void 0:r.monthlyAverage)==null?void 0:h.toLocaleString("en-US",{minimumFractionDigits:0,maximumFractionDigits:0}))||"0"]}),d.jsx("div",{className:"text-xs text-gray-400 font-medium",children:"Monthly"})]})})]}),d.jsxs("div",{className:"flex items-center gap-3 bg-white/10 rounded-lg px-4 py-2 border border-white/20 shadow-sm hover:shadow-md hover:bg-white/[0.12] transition-all duration-200 cursor-default",children:[d.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-purple-400 to-pink-500 p-1.5 flex-shrink-0 shadow-md",children:d.jsx(mt,{className:"w-full h-full text-white",strokeWidth:2.5})}),d.jsx("div",{className:"min-w-0",children:a?d.jsx("div",{className:"text-sm font-bold text-purple-300 animate-pulse",children:"Loading..."}):d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"text-sm font-bold text-purple-300 truncate",children:["$",u.toLocaleString("en-US",{minimumFractionDigits:0,maximumFractionDigits:0})]}),d.jsx("div",{className:"text-xs text-gray-400 font-medium",children:"Daily"})]})})]})]}),d.jsxs("div",{className:"flex items-center gap-6",children:[s.map(m=>d.jsxs(Pn,{to:m.path,className:`text-sm font-semibold transition-all duration-200 relative group ${l(m.path)?"text-white":"text-gray-300 hover:text-white"}`,children:[m.label,l(m.path)&&d.jsx("div",{className:"absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"}),!l(m.path)&&d.jsx("div",{className:"absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-200"})]},m.path)),d.jsxs("a",{href:"/go/gobabytrade?from=nav",onClick:i,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-purple-600 to-pink-500 hover:from-purple-600 hover:via-pink-500 hover:to-pink-600 text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-xl shadow-lg shadow-purple-500/40 hover:shadow-purple-500/60 flex-shrink-0",children:["Start Trading – Save $1,000",d.jsx(qe,{className:"w-4 h-4"})]})]})]}),!o&&d.jsx("button",{onClick:()=>n(!t),className:"ml-auto text-white hover:text-purple-300 transition-colors p-2","aria-label":"Toggle menu",children:t?d.jsx(Aw,{className:"w-6 h-6"}):d.jsx(fw,{className:"w-6 h-6"})})]}),!o&&t&&d.jsx("div",{className:"py-4 border-t border-white/10",children:d.jsxs("div",{className:"flex flex-col gap-4",children:[s.map(m=>d.jsx(Pn,{to:m.path,onClick:()=>n(!1),className:`text-sm font-medium transition-colors duration-300 ${l(m.path)?"text-purple-300":"text-gray-200 hover:text-white"}`,children:m.label},m.path)),d.jsxs("a",{href:"/go/gobabytrade?from=nav",onClick:()=>{i(),n(!1)},target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg shadow-purple-500/30",children:["Start Trading – Save $1,000",d.jsx(qe,{className:"w-4 h-4"})]})]})})]})})},wD=g.lazy(()=>Wt(()=>import("./FAQPage-9dbcf30d.js"),["assets/FAQPage-9dbcf30d.js","assets/vendor-f817694b.js","assets/router-619e7a5e.js"])),xD=g.lazy(()=>Wt(()=>import("./ResourcesPage-abe43a44.js"),["assets/ResourcesPage-abe43a44.js","assets/vendor-f817694b.js","assets/router-619e7a5e.js"]).then(e=>({default:e.ResourcesPage}))),kD=g.lazy(()=>Wt(()=>import("./PrivacyPage-99f4db2c.js"),["assets/PrivacyPage-99f4db2c.js","assets/mail-05971232.js","assets/vendor-f817694b.js","assets/router-619e7a5e.js"]).then(e=>({default:e.PrivacyPage}))),TD=g.lazy(()=>Wt(()=>import("./BusinessCardLanding-61e8d060.js"),["assets/BusinessCardLanding-61e8d060.js","assets/vendor-f817694b.js","assets/router-619e7a5e.js"]).then(e=>({default:e.BusinessCardLanding}))),ID=g.lazy(()=>Wt(()=>import("./BlogListPage-cd3e4095.js"),["assets/BlogListPage-cd3e4095.js","assets/vendor-f817694b.js","assets/router-619e7a5e.js"]).then(e=>({default:e.BlogListPage}))),AD=g.lazy(()=>Wt(()=>import("./BlogPostPage-7781edce.js"),["assets/BlogPostPage-7781edce.js","assets/vendor-f817694b.js","assets/router-619e7a5e.js"]).then(e=>({default:e.BlogPostPage}))),SD=g.lazy(()=>Wt(()=>import("./BlogSchedulePage-ad05bdde.js"),["assets/BlogSchedulePage-ad05bdde.js","assets/vendor-f817694b.js","assets/router-619e7a5e.js"])),PD=g.lazy(()=>Wt(()=>import("./InvestmentSimulatorPage-133fa747.js"),["assets/InvestmentSimulatorPage-133fa747.js","assets/vendor-f817694b.js","assets/router-619e7a5e.js"]).then(e=>({default:e.InvestmentSimulatorPage}))),ND=g.lazy(()=>Wt(()=>import("./HowToPurchase-5f6a85d4.js"),["assets/HowToPurchase-5f6a85d4.js","assets/mail-05971232.js","assets/router-619e7a5e.js","assets/vendor-f817694b.js"])),jD=g.lazy(()=>Wt(()=>import("./ArticleArchive-780c9e89.js"),["assets/ArticleArchive-780c9e89.js","assets/router-619e7a5e.js","assets/vendor-f817694b.js"]).then(e=>({default:e.ArticleArchive}))),Ns=({to:e})=>(g.useEffect(()=>{window.location.replace(e)},[e]),null),Lt={home:{title:"MyRoboticTrader - Set It and Forget It Crypto Trading | Build New Revenue Streams",description:"Discover how I built multiple revenue streams with AI-Enhanced autonomous robotic crypto trading. Real results, proven system. Start your automated trading journey today.",keywords:"robotic trading, crypto trading, automated trading, passive income, cryptocurrency, trading bot, AI trading, revenue streams, financial freedom",ogTitle:"MyRoboticTrader - Set It and Forget It Crypto Trading | Build New Revenue Streams",ogDescription:"Discover how I built multiple revenue streams with AI-Enhanced autonomous robotic crypto trading. Real results, proven system.",ogImage:"https://myrobotictrader.com/api/og-image",twitterTitle:"MyRoboticTrader - Set It and Forget It Crypto Trading | Build New Revenue Streams",twitterDescription:"Discover how I built multiple revenue streams with AI-Enhanced autonomous robotic crypto trading. Real results, proven system.",twitterImage:"https://myrobotictrader.com/api/og-image",canonicalUrl:"https://myrobotictrader.com/",pageType:"home"},resources:{title:"Trading Resources & AI-Enhanced Crypto Guides | Build Your Revenue Stream",description:"Free AI-enhanced crypto trading resources and guides. Learn the automated trading strategies to build sustainable revenue streams with GoBabyTrade.",keywords:"trading guides, crypto resources, trading education, automated trading strategies, financial education",ogTitle:"Free Trading Resources & Guides | MyRoboticTrader",ogDescription:"Access free crypto trading resources, guides, and educational content to build your revenue stream.",ogImage:"https://myrobotictrader.com/api/og-image",twitterTitle:"Trading Resources & Guides",twitterDescription:"Free crypto trading resources and educational content for building sustainable revenue streams.",twitterImage:"https://myrobotictrader.com/api/og-image",canonicalUrl:"https://myrobotictrader.com/resources",pageType:"resources"},privacy:{title:"Privacy Policy | MyRoboticTrader",description:"Privacy policy and data handling practices for MyRoboticTrader.com",keywords:"privacy policy, data protection, terms of service",ogTitle:"Privacy Policy | MyRoboticTrader",ogDescription:"Privacy policy and data handling practices.",ogImage:"https://myrobotictrader.com/api/og-image",twitterTitle:"Privacy Policy",twitterDescription:"Privacy policy and data handling practices.",twitterImage:"https://myrobotictrader.com/api/og-image",canonicalUrl:"https://myrobotictrader.com/privacy",pageType:"privacy"},card:{title:"Live Trading Results - Building Revenue Streams | MyRoboticTrader",description:"See live AI-enhanced robotic trading results. Real revenue streams being built automatically from Patrick's trading system!",keywords:"live trading results, crypto performance, trading dashboard, automated trading results",ogTitle:"Live Trading Results - Building Revenue Streams",ogDescription:"See live AI-enhanced robotic trading results. Real revenue streams being built automatically from Patrick's trading system!",ogImage:"https://myrobotictrader.com/api/og-image",twitterTitle:"Live Trading Results - Building Revenue Streams",twitterDescription:"See live AI-enhanced robotic trading results building sustainable revenue streams automatically!",twitterImage:"https://myrobotictrader.com/api/og-image",canonicalUrl:"https://myrobotictrader.com/card",pageType:"card"},blog:{title:"Trading Education Blog | Real Insights from Autonomous Crypto Trading",description:"Learn systematic crypto trading strategies from real results. No hype, just transparent insights from building an AI-enhanced autonomous trading system.",keywords:"crypto trading blog, automated trading education, systematic trading, AI trading insights, crypto trading strategies, trading transparency",ogTitle:"Trading Education Blog - Real Insights, Real Results",ogDescription:"Learn from real trading results and transparent insights about autonomous crypto trading systems.",ogImage:"https://myrobotictrader.com/api/og-image",twitterTitle:"Trading Education Blog - MyRoboticTrader",twitterDescription:"Real insights from building transparent, systematic crypto trading systems.",twitterImage:"https://myrobotictrader.com/api/og-image",canonicalUrl:"https://myrobotictrader.com/blog",pageType:"blog"},faq:{title:"FAQ - Frequently Asked Questions | MyRoboticTrader",description:"Get answers to common questions about automated crypto trading, AI-enhanced systems, safety, profits, and how to get started with GoBabyTrade.",keywords:"crypto trading FAQ, automated trading questions, trading bot FAQ, GoBabyTrade FAQ, robotic trading help",ogTitle:"Frequently Asked Questions | MyRoboticTrader",ogDescription:"Answers to 30+ questions about automated crypto trading, safety, profits, and getting started.",ogImage:"https://myrobotictrader.com/api/og-image",twitterTitle:"FAQ - MyRoboticTrader",twitterDescription:"Get answers to common questions about automated crypto trading and AI-enhanced systems.",twitterImage:"https://myrobotictrader.com/api/og-image",canonicalUrl:"https://myrobotictrader.com/faq",pageType:"faq"},simulator:{title:"Trading Simulator | See What Your Money Could Do | MyRoboticTrader",description:"Use real trading data to simulate what your investment could have earned. Based on 1,000+ real closed trades with a 100% profit goal hit rate.",keywords:"crypto trading simulator, trading calculator, investment simulator, automated trading results, passive income calculator",ogTitle:"Trading Simulator - See What Your Money Could Do",ogDescription:"Simulate returns using real month-by-month trading data. 100% profit goal hit rate across 1,000+ closed trades.",ogImage:"https://myrobotictrader.com/api/og-image",twitterTitle:"Trading Simulator | MyRoboticTrader",twitterDescription:"Use real trading data to simulate what your investment could have earned with autonomous crypto trading.",twitterImage:"https://myrobotictrader.com/api/og-image",canonicalUrl:"https://myrobotictrader.com/simulator",pageType:"simulator"},howToPurchase:{title:"GoBabyTrade™ Setup Guide: How to Get Started | MyRoboticTrader",description:"Step-by-step setup guide for your GoBabyTrade™ account. Everything you need to get your AI-enhanced autonomous trader running — from purchase to first trade.",keywords:"GoBabyTrade setup guide, buy GoBabyTrade, GoBabyTrade payment options, Affirm financing crypto trading, automated trading license",ogTitle:"GoBabyTrade™ Setup Guide: How to Get Started | MyRoboticTrader",ogDescription:"Step-by-step setup guide for your GoBabyTrade™ account. From purchase to first trade.",ogImage:"https://myrobotictrader.com/api/og-image",twitterTitle:"GoBabyTrade™ Setup Guide | MyRoboticTrader",twitterDescription:"Step-by-step setup guide for your GoBabyTrade™ account. From purchase to first trade.",twitterImage:"https://myrobotictrader.com/api/og-image",canonicalUrl:"https://myrobotictrader.com/gobabytrade-setup-guide",pageType:"howToPurchase"}},OD=({children:e})=>{const t=up(),n=()=>{if(t.pathname.startsWith("/blog/"))return Lt.blog;switch(t.pathname){case"/blog":return Lt.blog;case"/faq":return Lt.faq;case"/resources":return Lt.resources;case"/privacy":return Lt.privacy;case"/card":return Lt.card;case"/simulator":return Lt.simulator;case"/gobabytrade-setup-guide":return Lt.howToPurchase;default:return Lt.home}};return d.jsxs(d.Fragment,{children:[d.jsx(J0,{...n()}),e]})},CD=()=>{const{tradingStats:e,isLoading:t,error:n,refreshStats:r,cacheInfo:a}=Bl(),o=Yt.useCallback(()=>{try{r&&typeof r=="function"&&r()}catch(i){console.error("Error in refresh function:",i)}},[r]);return d.jsxs(d.Fragment,{children:[d.jsx(bD,{}),d.jsx(Nw,{}),d.jsx(jw,{tradingStats:e}),d.jsx(aD,{tradingStats:e,isLoading:t,error:n,refreshStats:r||o,cacheInfo:a||{isFresh:!1,isRateLimited:!1,timeUntilNextRefresh:0}}),d.jsx(yD,{}),d.jsx(oD,{}),d.jsx(iD,{}),d.jsx(cD,{}),d.jsx(mD,{maxPosts:4}),d.jsxs("section",{className:"py-20 px-4 relative overflow-hidden",children:[d.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/30 to-slate-900 -z-10"}),d.jsx("div",{className:"absolute top-0 left-1/3 w-96 h-96 bg-gradient-radial from-blue-500/10 to-transparent rounded-full -z-10 opacity-60"}),d.jsx("div",{className:"absolute bottom-0 right-1/3 w-96 h-96 bg-gradient-radial from-purple-500/10 to-transparent rounded-full -z-10 opacity-60"}),d.jsxs("div",{className:"max-w-4xl mx-auto relative z-10",children:[d.jsx("div",{className:"text-center mb-8",children:d.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-white mb-4",children:"About MyRoboticTrader"})}),d.jsx("div",{className:"bg-gray-900/50 rounded-2xl p-8 md:p-10 border border-purple-400/30 shadow-lg shadow-purple-500/10",children:d.jsxs("div",{className:"text-gray-300 text-base leading-relaxed space-y-4",children:[d.jsx("p",{children:"MyRoboticTrader showcases real, verified results from an AI-enhanced autonomous cryptocurrency trading system. Unlike manual trading or gambling on price predictions, this system executes trades 24/7 based on market volatility, taking small consistent profits without emotional decision-making. The approach is simple: buy low, sell for profit, repeat—all managed by intelligent automation."}),d.jsx("p",{children:"Every trade is published transparently with complete transaction history available for verification. With nearly 1,000 trades executed and a 100% success rate on closed positions, the results speak for themselves. The system never sells at a loss, holding positions until market conditions become favorable. This patience-based approach eliminates the fear and greed that destroy most traders."}),d.jsx("p",{children:"This isn't get-rich-quick speculation or crypto gambling. It's systematic wealth building through AI-enhanced technology that works while you sleep. Powered by GoBabyTrade™, the system connects securely to exchanges like Coinbase and Kraken, keeping your funds in your own account at all times. Check out the live results dashboard above to see every trade, every profit, updated in real-time."})]})})]})]})]})};function ED(){return g.useEffect(()=>{q0()},[]),d.jsxs("div",{className:"App min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900",children:[d.jsx(Z0,{}),d.jsx(X0,{}),d.jsx(c0,{children:d.jsxs(OD,{children:[d.jsx(g.Suspense,{fallback:d.jsx("div",{className:"min-h-screen"}),children:d.jsxs(u0,{children:[d.jsx(Ge,{path:"/",element:d.jsx(CD,{})}),d.jsx(Ge,{path:"/faq",element:d.jsx(wD,{})}),d.jsx(Ge,{path:"/resources",element:d.jsx(xD,{})}),d.jsx(Ge,{path:"/privacy",element:d.jsx(kD,{})}),d.jsx(Ge,{path:"/card",element:d.jsx(TD,{})}),d.jsx(Ge,{path:"/simulator",element:d.jsx(PD,{})}),d.jsx(Ge,{path:"/gobabytrade-setup-guide",element:d.jsx(ND,{})}),d.jsx(Ge,{path:"/how-to-purchase",element:d.jsx(d0,{to:"/gobabytrade-setup-guide",replace:!0})}),d.jsx(Ge,{path:"/go/coinbase",element:d.jsx(Ns,{to:"https://www.coinbase.com/join/MEK5UVP?utm_source=site?origin=advanced"})}),d.jsx(Ge,{path:"/go/kraken",element:d.jsx(Ns,{to:"https://invite.kraken.com/JDNW/npntkd32"})}),d.jsx(Ge,{path:"/go/cointracker",element:d.jsx(Ns,{to:"https://cointracker.cello.so/UCvkiCU21IO"})}),d.jsx(Ge,{path:"/blog",element:d.jsx(ID,{})}),d.jsx(Ge,{path:"/blog/schedule",element:d.jsx(SD,{})}),d.jsx(Ge,{path:"/blog/:slug",element:d.jsx(AD,{})}),d.jsx(Ge,{path:"/archive",element:d.jsx(jD,{})})]})}),d.jsx(fD,{})]})})]})}mp(document.getElementById("root")).render(d.jsx(g.StrictMode,{children:d.jsx(wp,{children:d.jsx(ED,{})})}));export{yd as $,qe as A,Rl as B,sw as C,Xr as D,Bu as E,bD as F,XD as G,pw as H,Ve as I,ZD as J,ie as K,pt as L,WO as M,VO as N,ve as O,Rt as P,At as Q,Ne as R,Qr as S,mt as T,Tw as U,g1 as V,y1 as W,p1 as X,K as Y,Ot as Z,pn as _,iw as a,_D as a0,WE as a1,WD as a2,Cn as a3,YD as a4,Bt as a5,j as a6,ae as a7,vn as a8,lr as a9,ud as aA,wi as aB,LD as aC,bi as aD,we as aE,fe as aF,db as aG,cb as aH,vy as aI,YC as aJ,eD as aK,Cj as aL,h1 as aM,Vb as aN,Cl as aO,tO as aP,mw as aQ,Ho as aR,zo as aS,fD as aT,$i as aa,Uc as ab,PS as ac,zD as ad,fn as ae,zn as af,yn as ag,Yn as ah,bl as ai,Ji as aj,Ib as ak,Tb as al,Sb as am,MT as an,li as ao,kb as ap,Ln as aq,QN as ar,wu as as,vu as at,vi as au,hM as av,yb as aw,Bb as ax,uE as ay,Ae as az,Ip as b,Q as c,ow as d,qa as e,dw as f,er as g,hD as h,cp as i,d as j,BD as k,dD as l,i3 as m,ke as n,r3 as o,uD as p,a3 as q,tt as r,Ze as s,o3 as t,Bl as u,V as v,on as w,sn as x,Bi as y,mi as z};
