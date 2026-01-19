var Mb=Object.defineProperty;var $b=(e,t,n)=>t in e?Mb(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var We=(e,t,n)=>($b(e,typeof t!="symbol"?t+"":t,n),n);import{r as f,a as Tl,g as It,R as St,b as Db}from"./vendor-f817694b.js";import{L as Ue,u as Km,a as Bb,b as Rb,N as _b,B as Wb,R as Lb,c as rn}from"./router-43b217db.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();var Vm={exports:{}},_o={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fb=f,Hb=Symbol.for("react.element"),Yb=Symbol.for("react.fragment"),zb=Object.prototype.hasOwnProperty,Gb=Fb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qb={key:!0,ref:!0,__self:!0,__source:!0};function Jm(e,t,n){var r,a={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)zb.call(t,r)&&!qb.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:Hb,type:e,key:o,ref:s,props:a,_owner:Gb.current}}_o.Fragment=Yb;_o.jsx=Jm;_o.jsxs=Jm;Vm.exports=_o;var i=Vm.exports,Zm,yu=Tl;Zm=yu.createRoot,yu.hydrateRoot;var Ub=typeof Element<"u",Kb=typeof Map=="function",Vb=typeof Set=="function",Jb=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Ha(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,r,a;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!Ha(e[r],t[r]))return!1;return!0}var o;if(Kb&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(o=e.entries();!(r=o.next()).done;)if(!t.has(r.value[0]))return!1;for(o=e.entries();!(r=o.next()).done;)if(!Ha(r.value[1],t.get(r.value[0])))return!1;return!0}if(Vb&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(o=e.entries();!(r=o.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(Jb&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(a=Object.keys(e),n=a.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,a[r]))return!1;if(Ub&&e instanceof Element)return!1;for(r=n;r--!==0;)if(!((a[r]==="_owner"||a[r]==="__v"||a[r]==="__o")&&e.$$typeof)&&!Ha(e[a[r]],t[a[r]]))return!1;return!0}return e!==e&&t!==t}var Zb=function(t,n){try{return Ha(t,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const Xb=It(Zb);var Qb=function(e,t,n,r,a,o,s,l){if(!e){var c;if(t===void 0)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,a,o,s,l],d=0;c=new Error(t.replace(/%s/g,function(){return u[d++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}},ev=Qb;const bu=It(ev);var tv=function(t,n,r,a){var o=r?r.call(a,t,n):void 0;if(o!==void 0)return!!o;if(t===n)return!0;if(typeof t!="object"||!t||typeof n!="object"||!n)return!1;var s=Object.keys(t),l=Object.keys(n);if(s.length!==l.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(n),u=0;u<s.length;u++){var d=s[u];if(!c(d))return!1;var h=t[d],m=n[d];if(o=r?r.call(a,h,m,d):void 0,o===!1||o===void 0&&h!==m)return!1}return!0};const nv=It(tv);var Xm=(e=>(e.BASE="base",e.BODY="body",e.HEAD="head",e.HTML="html",e.LINK="link",e.META="meta",e.NOSCRIPT="noscript",e.SCRIPT="script",e.STYLE="style",e.TITLE="title",e.FRAGMENT="Symbol(react.fragment)",e))(Xm||{}),Gi={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},vu=Object.values(Xm),Il={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},rv=Object.entries(Il).reduce((e,[t,n])=>(e[n]=t,e),{}),wt="data-rh",Vn={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},Jn=(e,t)=>{for(let n=e.length-1;n>=0;n-=1){const r=e[n];if(Object.prototype.hasOwnProperty.call(r,t))return r[t]}return null},av=e=>{let t=Jn(e,"title");const n=Jn(e,Vn.TITLE_TEMPLATE);if(Array.isArray(t)&&(t=t.join("")),n&&t)return n.replace(/%s/g,()=>t);const r=Jn(e,Vn.DEFAULT_TITLE);return t||r||void 0},ov=e=>Jn(e,Vn.ON_CHANGE_CLIENT_STATE)||(()=>{}),qi=(e,t)=>t.filter(n=>typeof n[e]<"u").map(n=>n[e]).reduce((n,r)=>({...n,...r}),{}),iv=(e,t)=>t.filter(n=>typeof n.base<"u").map(n=>n.base).reverse().reduce((n,r)=>{if(!n.length){const a=Object.keys(r);for(let o=0;o<a.length;o+=1){const l=a[o].toLowerCase();if(e.indexOf(l)!==-1&&r[l])return n.concat(r)}}return n},[]),sv=e=>console&&typeof console.warn=="function"&&console.warn(e),Tr=(e,t,n)=>{const r={};return n.filter(a=>Array.isArray(a[e])?!0:(typeof a[e]<"u"&&sv(`Helmet: ${e} should be of type "Array". Instead found type "${typeof a[e]}"`),!1)).map(a=>a[e]).reverse().reduce((a,o)=>{const s={};o.filter(c=>{let u;const d=Object.keys(c);for(let m=0;m<d.length;m+=1){const p=d[m],g=p.toLowerCase();t.indexOf(g)!==-1&&!(u==="rel"&&c[u].toLowerCase()==="canonical")&&!(g==="rel"&&c[g].toLowerCase()==="stylesheet")&&(u=g),t.indexOf(p)!==-1&&(p==="innerHTML"||p==="cssText"||p==="itemprop")&&(u=p)}if(!u||!c[u])return!1;const h=c[u].toLowerCase();return r[u]||(r[u]={}),s[u]||(s[u]={}),r[u][h]?!1:(s[u][h]=!0,!0)}).reverse().forEach(c=>a.push(c));const l=Object.keys(s);for(let c=0;c<l.length;c+=1){const u=l[c],d={...r[u],...s[u]};r[u]=d}return a},[]).reverse()},lv=(e,t)=>{if(Array.isArray(e)&&e.length){for(let n=0;n<e.length;n+=1)if(e[n][t])return!0}return!1},cv=e=>({baseTag:iv(["href"],e),bodyAttributes:qi("bodyAttributes",e),defer:Jn(e,Vn.DEFER),encode:Jn(e,Vn.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:qi("htmlAttributes",e),linkTags:Tr("link",["rel","href"],e),metaTags:Tr("meta",["name","charset","http-equiv","property","itemprop"],e),noscriptTags:Tr("noscript",["innerHTML"],e),onChangeClientState:ov(e),scriptTags:Tr("script",["src","innerHTML"],e),styleTags:Tr("style",["cssText"],e),title:av(e),titleAttributes:qi("titleAttributes",e),prioritizeSeoTags:lv(e,Vn.PRIORITIZE_SEO_TAGS)}),Qm=e=>Array.isArray(e)?e.join(""):e,uv=(e,t)=>{const n=Object.keys(e);for(let r=0;r<n.length;r+=1)if(t[n[r]]&&t[n[r]].includes(e[n[r]]))return!0;return!1},Ui=(e,t)=>Array.isArray(e)?e.reduce((n,r)=>(uv(r,t)?n.priority.push(r):n.default.push(r),n),{priority:[],default:[]}):{default:e,priority:[]},wu=(e,t)=>({...e,[t]:void 0}),dv=["noscript","script","style"],xs=(e,t=!0)=>t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),ep=e=>Object.keys(e).reduce((t,n)=>{const r=typeof e[n]<"u"?`${n}="${e[n]}"`:`${n}`;return t?`${t} ${r}`:r},""),hv=(e,t,n,r)=>{const a=ep(n),o=Qm(t);return a?`<${e} ${wt}="true" ${a}>${xs(o,r)}</${e}>`:`<${e} ${wt}="true">${xs(o,r)}</${e}>`},mv=(e,t,n=!0)=>t.reduce((r,a)=>{const o=a,s=Object.keys(o).filter(u=>!(u==="innerHTML"||u==="cssText")).reduce((u,d)=>{const h=typeof o[d]>"u"?d:`${d}="${xs(o[d],n)}"`;return u?`${u} ${h}`:h},""),l=o.innerHTML||o.cssText||"",c=dv.indexOf(e)===-1;return`${r}<${e} ${wt}="true" ${s}${c?"/>":`>${l}</${e}>`}`},""),tp=(e,t={})=>Object.keys(e).reduce((n,r)=>{const a=Il[r];return n[a||r]=e[r],n},t),pv=(e,t,n)=>{const r={key:t,[wt]:!0},a=tp(n,r);return[St.createElement("title",a,t)]},Ya=(e,t)=>t.map((n,r)=>{const a={key:r,[wt]:!0};return Object.keys(n).forEach(o=>{const l=Il[o]||o;if(l==="innerHTML"||l==="cssText"){const c=n.innerHTML||n.cssText;a.dangerouslySetInnerHTML={__html:c}}else a[l]=n[o]}),St.createElement(e,a)}),ct=(e,t,n=!0)=>{switch(e){case"title":return{toComponent:()=>pv(e,t.title,t.titleAttributes),toString:()=>hv(e,t.title,t.titleAttributes,n)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>tp(t),toString:()=>ep(t)};default:return{toComponent:()=>Ya(e,t),toString:()=>mv(e,t,n)}}},gv=({metaTags:e,linkTags:t,scriptTags:n,encode:r})=>{const a=Ui(e,Gi.meta),o=Ui(t,Gi.link),s=Ui(n,Gi.script);return{priorityMethods:{toComponent:()=>[...Ya("meta",a.priority),...Ya("link",o.priority),...Ya("script",s.priority)],toString:()=>`${ct("meta",a.priority,r)} ${ct("link",o.priority,r)} ${ct("script",s.priority,r)}`},metaTags:a.default,linkTags:o.default,scriptTags:s.default}},fv=e=>{const{baseTag:t,bodyAttributes:n,encode:r=!0,htmlAttributes:a,noscriptTags:o,styleTags:s,title:l="",titleAttributes:c,prioritizeSeoTags:u}=e;let{linkTags:d,metaTags:h,scriptTags:m}=e,p={toComponent:()=>{},toString:()=>""};return u&&({priorityMethods:p,linkTags:d,metaTags:h,scriptTags:m}=gv(e)),{priority:p,base:ct("base",t,r),bodyAttributes:ct("bodyAttributes",n,r),htmlAttributes:ct("htmlAttributes",a,r),link:ct("link",d,r),meta:ct("meta",h,r),noscript:ct("noscript",o,r),script:ct("script",m,r),style:ct("style",s,r),title:ct("title",{title:l,titleAttributes:c},r)}},ks=fv,Ta=[],np=!!(typeof window<"u"&&window.document&&window.document.createElement),Ts=class{constructor(e,t){We(this,"instances",[]);We(this,"canUseDOM",np);We(this,"context");We(this,"value",{setHelmet:e=>{this.context.helmet=e},helmetInstances:{get:()=>this.canUseDOM?Ta:this.instances,add:e=>{(this.canUseDOM?Ta:this.instances).push(e)},remove:e=>{const t=(this.canUseDOM?Ta:this.instances).indexOf(e);(this.canUseDOM?Ta:this.instances).splice(t,1)}}});this.context=e,this.canUseDOM=t||!1,t||(e.helmet=ks({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},yv={},rp=St.createContext(yv),tr,ap=(tr=class extends f.Component{constructor(n){super(n);We(this,"helmetData");this.helmetData=new Ts(this.props.context||{},tr.canUseDOM)}render(){return St.createElement(rp.Provider,{value:this.helmetData.value},this.props.children)}},We(tr,"canUseDOM",np),tr),Hn=(e,t)=>{const n=document.head||document.querySelector("head"),r=n.querySelectorAll(`${e}[${wt}]`),a=[].slice.call(r),o=[];let s;return t&&t.length&&t.forEach(l=>{const c=document.createElement(e);for(const u in l)if(Object.prototype.hasOwnProperty.call(l,u))if(u==="innerHTML")c.innerHTML=l.innerHTML;else if(u==="cssText")c.styleSheet?c.styleSheet.cssText=l.cssText:c.appendChild(document.createTextNode(l.cssText));else{const d=u,h=typeof l[d]>"u"?"":l[d];c.setAttribute(u,h)}c.setAttribute(wt,"true"),a.some((u,d)=>(s=d,c.isEqualNode(u)))?a.splice(s,1):o.push(c)}),a.forEach(l=>{var c;return(c=l.parentNode)==null?void 0:c.removeChild(l)}),o.forEach(l=>n.appendChild(l)),{oldTags:a,newTags:o}},Is=(e,t)=>{const n=document.getElementsByTagName(e)[0];if(!n)return;const r=n.getAttribute(wt),a=r?r.split(","):[],o=[...a],s=Object.keys(t);for(const l of s){const c=t[l]||"";n.getAttribute(l)!==c&&n.setAttribute(l,c),a.indexOf(l)===-1&&a.push(l);const u=o.indexOf(l);u!==-1&&o.splice(u,1)}for(let l=o.length-1;l>=0;l-=1)n.removeAttribute(o[l]);a.length===o.length?n.removeAttribute(wt):n.getAttribute(wt)!==s.join(",")&&n.setAttribute(wt,s.join(","))},bv=(e,t)=>{typeof e<"u"&&document.title!==e&&(document.title=Qm(e)),Is("title",t)},xu=(e,t)=>{const{baseTag:n,bodyAttributes:r,htmlAttributes:a,linkTags:o,metaTags:s,noscriptTags:l,onChangeClientState:c,scriptTags:u,styleTags:d,title:h,titleAttributes:m}=e;Is("body",r),Is("html",a),bv(h,m);const p={baseTag:Hn("base",n),linkTags:Hn("link",o),metaTags:Hn("meta",s),noscriptTags:Hn("noscript",l),scriptTags:Hn("script",u),styleTags:Hn("style",d)},g={},b={};Object.keys(p).forEach(y=>{const{newTags:v,oldTags:x}=p[y];v.length&&(g[y]=v),x.length&&(b[y]=p[y].oldTags)}),t&&t(),c(e,g,b)},Ir=null,vv=e=>{Ir&&cancelAnimationFrame(Ir),e.defer?Ir=requestAnimationFrame(()=>{xu(e,()=>{Ir=null})}):(xu(e),Ir=null)},wv=vv,ku=class extends f.Component{constructor(){super(...arguments);We(this,"rendered",!1)}shouldComponentUpdate(t){return!nv(t,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:t}=this.props.context;t.remove(this),this.emitChange()}emitChange(){const{helmetInstances:t,setHelmet:n}=this.props.context;let r=null;const a=cv(t.get().map(o=>{const s={...o.props};return delete s.context,s}));ap.canUseDOM?wv(a):ks&&(r=ks(a)),n(r)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:t}=this.props.context;t.add(this),this.emitChange()}render(){return this.init(),null}},ws,xv=(ws=class extends f.Component{shouldComponentUpdate(e){return!Xb(wu(this.props,"helmetData"),wu(e,"helmetData"))}mapNestedChildrenToProps(e,t){if(!t)return null;switch(e.type){case"script":case"noscript":return{innerHTML:t};case"style":return{cssText:t};default:throw new Error(`<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(e,t,n,r){return{...t,[e.type]:[...t[e.type]||[],{...n,...this.mapNestedChildrenToProps(e,r)}]}}mapObjectTypeChildren(e,t,n,r){switch(e.type){case"title":return{...t,[e.type]:r,titleAttributes:{...n}};case"body":return{...t,bodyAttributes:{...n}};case"html":return{...t,htmlAttributes:{...n}};default:return{...t,[e.type]:{...n}}}}mapArrayTypeChildrenToProps(e,t){let n={...t};return Object.keys(e).forEach(r=>{n={...n,[r]:e[r]}}),n}warnOnInvalidChildren(e,t){return bu(vu.some(n=>e.type===n),typeof e.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${vu.join(", ")} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`),bu(!t||typeof t=="string"||Array.isArray(t)&&!t.some(n=>typeof n!="string"),`Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(e,t){let n={};return St.Children.forEach(e,r=>{if(!r||!r.props)return;const{children:a,...o}=r.props,s=Object.keys(o).reduce((c,u)=>(c[rv[u]||u]=o[u],c),{});let{type:l}=r;switch(typeof l=="symbol"?l=l.toString():this.warnOnInvalidChildren(r,a),l){case"Symbol(react.fragment)":t=this.mapChildrenToProps(a,t);break;case"link":case"meta":case"noscript":case"script":case"style":n=this.flattenArrayTypeChildren(r,n,s,a);break;default:t=this.mapObjectTypeChildren(r,t,s,a);break}}),this.mapArrayTypeChildrenToProps(n,t)}render(){const{children:e,...t}=this.props;let n={...t},{helmetData:r}=t;if(e&&(n=this.mapChildrenToProps(e,n)),r&&!(r instanceof Ts)){const a=r;r=new Ts(a.context,!0),delete n.helmetData}return r?St.createElement(ku,{...n,context:r.value}):St.createElement(rp.Consumer,null,a=>St.createElement(ku,{...n,context:a}))}},We(ws,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),ws);const Tu="G-RX3B8PVTHE",kv=()=>{const e=document.createElement("script");e.async=!0,e.src=`https://www.googletagmanager.com/gtag/js?id=${Tu}`,document.head.appendChild(e),window.dataLayer=window.dataLayer||[],window.gtag=function(...n){window.dataLayer.push(n)},window.gtag("js",new Date),window.gtag("config",Tu,{page_title:document.title,page_location:window.location.href})},Ka=(e,t,n,r)=>{typeof window.gtag<"u"&&window.gtag("event",e,{event_category:t,event_label:n,value:r})},Wo=(e,t="hero")=>{Ka("click","cta_button",`${e}_${t}`,1)},Lo=(e,t)=>{Ka("click","outbound_link",`${t}_${e}`,1)};class Tv{constructor(t="smart_cache",n=!0){We(this,"data",new Map);We(this,"stats",{hits:0,misses:0,sets:0,deletes:0,evictions:0,memoryUsage:0,entryCount:0,totalEntries:0,rateLimitedKeys:[],expiredEntries:0,staleEntries:0});We(this,"defaultTTL",30*60*1e3);We(this,"localStoragePrefix");We(this,"persistToLocalStorage");this.localStoragePrefix=t,this.persistToLocalStorage=n,this.persistToLocalStorage&&this.loadFromLocalStorage()}loadFromLocalStorage(){try{const t=Object.keys(localStorage),n=`${this.localStoragePrefix}_`;let r=0;for(const a of t)if(a.startsWith(n)){const o=a.substring(n.length),s=localStorage.getItem(a);if(s){const l=JSON.parse(s);Date.now()-l.time<=this.defaultTTL?(this.data.set(o,l),r++):(localStorage.removeItem(a),this.stats.expiredEntries++)}}this.stats.entryCount=this.data.size,this.stats.totalEntries=this.data.size}catch(t){console.warn("Error loading cache from localStorage:",t)}}saveToLocalStorage(t,n){if(this.persistToLocalStorage)try{const r=`${this.localStoragePrefix}_${String(t)}`;localStorage.setItem(r,JSON.stringify(n))}catch(r){console.warn("Error saving to localStorage:",r)}}removeFromLocalStorage(t){if(this.persistToLocalStorage)try{const n=`${this.localStoragePrefix}_${String(t)}`;localStorage.removeItem(n)}catch(n){console.warn("Error removing from localStorage:",n)}}set(t,n){const r={value:n,time:Date.now()};this.data.set(t,r),this.saveToLocalStorage(t,r),this.stats.sets++,this.stats.entryCount=this.data.size,this.stats.totalEntries=this.data.size}get(t,n){const r=this.data.get(t);if(r){const a=n||this.defaultTTL;if(Date.now()-r.time>a){this.data.delete(t),this.removeFromLocalStorage(t),this.stats.expiredEntries++,this.stats.misses++;return}else return this.stats.hits++,r.value}else{this.stats.misses++;return}}delete(t){const n=this.data.delete(t);return n&&(this.removeFromLocalStorage(t),this.stats.deletes++,this.stats.entryCount=this.data.size,this.stats.totalEntries=this.data.size),n}clear(){const t=Array.from(this.data.keys());if(this.data.clear(),this.persistToLocalStorage)for(const n of t)this.removeFromLocalStorage(n);this.stats.entryCount=0,this.stats.totalEntries=0}size(){return this.data.size}keys(){return Array.from(this.data.keys())}values(){return Array.from(this.data.values()).map(t=>t.value)}has(t){return this.data.has(t)}hasValid(t,n){const r=this.data.get(t);if(!r)return!1;const a=n||this.defaultTTL;return Date.now()-r.time>a?(this.data.delete(t),this.removeFromLocalStorage(t),this.stats.expiredEntries++,!1):!0}getAge(t){const n=this.data.get(t);if(n)return Date.now()-n.time}getTimeUntilExpiration(t,n){const r=this.data.get(t);if(!r)return 0;const a=n||this.defaultTTL,o=Date.now()-r.time,s=a-o;return Math.max(0,s)}getStats(){return{...this.stats,entryCount:this.data.size,totalEntries:this.data.size,memoryUsage:this.calculateMemoryUsage()}}getCacheInfo(){return{totalEntries:this.data.size,rateLimitedKeys:[],expiredEntries:this.stats.expiredEntries,staleEntries:this.stats.staleEntries,memoryUsage:this.calculateMemoryUsage(),hits:this.stats.hits,misses:this.stats.misses}}cleanup(){const t=Date.now();let n=0;for(const[r,a]of this.data.entries())t-a.time>this.defaultTTL&&(this.data.delete(r),this.removeFromLocalStorage(r),n++);this.stats.expiredEntries+=n,this.stats.entryCount=this.data.size,this.stats.totalEntries=this.data.size}getTimeUntilNextRequest(t){return this.getTimeUntilExpiration(t)}setDefaultTTL(t){this.defaultTTL=t}getDefaultTTL(){return this.defaultTTL}calculateMemoryUsage(){let t=0;for(const[n,r]of this.data.entries())t+=JSON.stringify(n).length+JSON.stringify(r).length;return t}}function Iv(e,t="smart_cache",n=!0){const r=new Tv(t,n);return e&&r.setDefaultTTL(e),r}const xn=Iv(30*60*1e3,"trading_data_cache",!0),Xr=()=>{var I;const[e,t]=f.useState(null),[n,r]=f.useState(!0),[a,o]=f.useState(null),[s,l]=f.useState({isFresh:!1,timeUntilNextRefresh:0,isRateLimited:!1}),c="Calculations",u="A:G",d="Coinbase Balance",h="A:D",m="Transactions Raw Data",p="T:T",g=f.useCallback(w=>{var T,j,E,O,$,N,D,R,_,F,G;if(!w||w.length<23)return null;try{const z=Z=>{if(!Z)return 0;const q=Z.toString().replace(/[$,%]/g,"").trim();return parseFloat(q)||0};return{availableUSDC:z((T=w[3])==null?void 0:T[1]),openTradingPositions:z((j=w[4])==null?void 0:j[1]),totalAccountValue:z((E=w[5])==null?void 0:E[1]),totalCapitalDeposited:z((O=w[10])==null?void 0:O[1]),profitsWithdrawn:z(($=w[11])==null?void 0:$[1]),netCapitalAtRisk:z((N=w[12])==null?void 0:N[1]),realizedProfits:z((D=w[17])==null?void 0:D[1]),totalTrades:z((R=w[18])==null?void 0:R[1]),avgProfitPerTrade:z((_=w[19])==null?void 0:_[1]),totalTradingVolume:z((F=w[21])==null?void 0:F[1]),profitsSaved:z((G=w[22])==null?void 0:G[1])}}catch(z){return console.error("Error parsing Coinbase Balance:",z),null}},[]),b=f.useCallback(w=>{if(!w||w.length<2)return 0;const T=[];for(let O=1;O<w.length;O++){const $=w[O],N=$==null?void 0:$[0];if(N&&N.toString().trim()!==""){let D=N.toString().replace(/[%]/g,"").trim();const R=parseFloat(D);if(!isNaN(R)&&R!==0){const _=R<1?R*100:R;T.push(_)}}}if(T.length===0)return 0;const E=T.reduce((O,$)=>O+$,0)/T.length;return console.log(`[parsePercentGainColumn] Parsed ${T.length} % gains, average: ${E.toFixed(2)}%`),E},[]),y=f.useCallback((w,T)=>{var z,Z,q,te,he,Ie,ze,fe,P,L;if(console.log("[parseCalculationsData] Rows received:",w==null?void 0:w.length,"rows"),console.log("[parseCalculationsData] First row (headers):",w==null?void 0:w[0]),console.log("[parseCalculationsData] Last 3 rows:",w==null?void 0:w.slice(-3)),!w||w.length<3)return console.warn("[parseCalculationsData] FALLBACK: Not enough rows (need 3, got",w==null?void 0:w.length,")"),v();let j=null,E=-1;for(let B=w.length-1;B>=0;B--){const H=w[B],A=((z=H==null?void 0:H[0])==null?void 0:z.toString().toLowerCase())||"";if(console.log(`[parseCalculationsData] Row ${B}: length=${H==null?void 0:H.length}, firstCell="${H==null?void 0:H[0]}"`),H&&H.length>=2&&A.includes("grand total")){j=H,E=B,console.log("[parseCalculationsData] FOUND Grand Total at row",B,":",H);break}}if(!j||j.length<2)return console.warn("[parseCalculationsData] FALLBACK: Grand Total row not found or too short"),console.warn("[parseCalculationsData] grandTotalRow:",j),v();const O=parseFloat((Z=j[1])==null?void 0:Z.toString().replace(/[$,]/g,""))||0,$=parseInt((q=j[2])==null?void 0:q.toString().replace(/[,]/g,""))||0;console.log("[parseCalculationsData] Grand Total: $"+O+", "+$+" trades");let N=0,D=0,R=0,_=0;for(let B=E-1;B>=1;B--){const H=w[B];if(H&&H.length>=7){const A=parseFloat((te=H[3])==null?void 0:te.toString().replace(/[$,]/g,""))||0,W=parseFloat((he=H[4])==null?void 0:he.toString().replace(/[$,]/g,""))||0,U=parseFloat((Ie=H[5])==null?void 0:Ie.toString().replace(/[$,]/g,""))||0,C=parseFloat((ze=H[6])==null?void 0:ze.toString().replace(/[$,]/g,""))||0;if(A>0||W>0||U>0||C>0){N=A,D=W,R=U,_=C,console.log("[parseCalculationsData] Found calculated fields in row",B,":",H[0]),console.log("[parseCalculationsData] Calculated fields:",{avgProfitPerTrade:N,monthlyAverage:D,dailyAvg:R,bestMonthProfit:_});break}}}N===0&&D===0&&console.warn("[parseCalculationsData] WARNING: Calculated fields not found in any month row");const F=[],G=new Date().getFullYear();console.log("[parseCalculationsData] Parsing monthly data, rows 1 to",E-1);for(let B=1;B<E;B++){const H=w[B];if(H&&H.length>=2){const A=(fe=H[0])==null?void 0:fe.toString().trim(),W=parseFloat((P=H[1])==null?void 0:P.toString().replace(/[$,]/g,""))||0,U=parseInt((L=H[2])==null?void 0:L.toString().replace(/[,]/g,""))||0;if(A&&A!=="Grand Total"&&A!==""&&!A.toLowerCase().includes("month")){let C=A,Q=G;if(A.includes("-")){const X=A.split("-");if(X.length>=2){Q=parseInt(X[0])||G;const je=parseInt(X[1]);C=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][je]||A}}else A.length>3&&(C=A.substring(0,3));F.push({month:C,year:Q,profit:W,trades:U}),console.log(`[parseCalculationsData] Added month: ${C} ${Q}, profit: $${W}, trades: ${U}`)}}}return console.log("[parseCalculationsData] SUCCESS: Parsed",F.length,"months of data"),console.log("[parseCalculationsData] Final totals: $"+O.toFixed(2)+", "+$+" trades"),{totalProfit:O,totalTrades:$,avgProfitPerTrade:N,monthlyAverage:D,dailyAvg:R,bestMonthProfit:_,avgPercentGain:0,monthlyData:F,isLiveData:!0,lastUpdated:T}},[]),v=()=>{console.error("⚠️ [getMockTradingStatsBase] USING MOCK DATA - API parsing failed!"),console.error("⚠️ This means the site is showing FAKE data of $3,905.39 instead of real data."),console.error("⚠️ Check the parsing logs above to see why.");const w=[{month:"Sep",year:2024,profit:312.45,trades:68},{month:"Oct",year:2024,profit:445.89,trades:92},{month:"Nov",year:2024,profit:523.12,trades:105},{month:"Dec",year:2024,profit:398.67,trades:84},{month:"Jan",year:2025,profit:477.23,trades:89},{month:"Feb",year:2025,profit:686.71,trades:124},{month:"Mar",year:2025,profit:261.97,trades:67},{month:"Apr",year:2025,profit:552.58,trades:98},{month:"May",year:2025,profit:376.3,trades:82},{month:"Jun",year:2025,profit:382.97,trades:91},{month:"Jul",year:2025,profit:817.31,trades:156},{month:"Aug",year:2025,profit:350.32,trades:78}],T=w.reduce((E,O)=>E+O.profit,0),j=w.reduce((E,O)=>E+O.trades,0);return{totalProfit:T,totalTrades:j,avgProfitPerTrade:j>0?T/j:0,monthlyAverage:w.length>0?T/w.length:0,dailyAvg:15.5,bestMonthProfit:Math.max(...w.map(E=>E.profit)),avgPercentGain:2.35,monthlyData:w,isLiveData:!1,lastUpdated:new Date().toISOString()}},x=f.useCallback(async(w=!1)=>{var T;try{r(!0),o(null);const j="1Q8I0kU3TinicEOZCgBjisRbktIOryaKnJ2GaBncxako",E="AIzaSyDNQznjzn8BijyHJWWOesvggVc31FFK-LA",O=new Date().toISOString(),[$,N,D]=await Promise.allSettled([fetch(`https://sheets.googleapis.com/v4/spreadsheets/${j}/values/${c}!${u}?key=${E}`),fetch(`https://sheets.googleapis.com/v4/spreadsheets/${j}/values/${d}!${h}?key=${E}`),fetch(`https://sheets.googleapis.com/v4/spreadsheets/${j}/values/${m}!${p}?key=${E}`)]);console.log("[fetchEnhancedTradingStats] Calculations API response status:",$.status);const R=$.status==="fulfilled"?await $.value.json():null;R?console.log("[fetchEnhancedTradingStats] Calculations data received:",(T=R.values)==null?void 0:T.length,"rows"):console.error("[fetchEnhancedTradingStats] Calculations API call failed completely");const _=R!=null&&R.values?y(R.values,O):v();console.log("[fetchEnhancedTradingStats] Using",_.isLiveData?"✅ LIVE DATA":"❌ MOCK DATA");const F=N.status==="fulfilled"?await N.value.json():null,G=F?g(F.values||[]):null,z=D.status==="fulfilled"?await D.value.json():null,Z=z!=null&&z.values?b(z.values):0,q={..._,avgPercentGain:Z,portfolioSummary:G||void 0};t(q),l({isFresh:!w,timeUntilNextRefresh:0,isRateLimited:!1})}catch(j){console.error("Error fetching enhanced trading stats:",j),o(j instanceof Error?j.message:"Failed to load trading data");const E=k();t(E)}finally{r(!1)}},[y,g,b]),k=()=>{console.log("🧪 [getEnhancedMockTradingStats] Using mock data with 2024+2025 for multi-year test");const w=[{month:"Sep",year:2024,profit:312.45,trades:68},{month:"Oct",year:2024,profit:445.89,trades:92},{month:"Nov",year:2024,profit:523.12,trades:105},{month:"Dec",year:2024,profit:398.67,trades:84},{month:"Jan",year:2025,profit:477.23,trades:89},{month:"Feb",year:2025,profit:686.71,trades:124},{month:"Mar",year:2025,profit:261.97,trades:67},{month:"Apr",year:2025,profit:552.58,trades:98},{month:"May",year:2025,profit:376.3,trades:82},{month:"Jun",year:2025,profit:382.97,trades:91},{month:"Jul",year:2025,profit:817.31,trades:156},{month:"Aug",year:2025,profit:350.32,trades:78},{month:"Sep",year:2025,profit:425.6,trades:88},{month:"Oct",year:2025,profit:512.45,trades:102},{month:"Nov",year:2025,profit:389.2,trades:76},{month:"Dec",year:2025,profit:298.5,trades:62}],T=w.reduce((E,O)=>E+O.profit,0),j=w.reduce((E,O)=>E+O.trades,0);return{totalProfit:T,totalTrades:j,avgProfitPerTrade:j>0?T/j:0,monthlyAverage:w.length>0?T/w.length:0,dailyAvg:15.5,bestMonthProfit:686.71,avgPercentGain:2.35,monthlyData:w,isLiveData:!1,lastUpdated:new Date().toISOString(),portfolioSummary:void 0}};return f.useEffect(()=>{x()},[x]),{tradingStats:e,isLoading:n,error:a,refreshStats:()=>x(!0),cacheInfo:s,cacheStats:((I=xn==null?void 0:xn.getStats)==null?void 0:I.call(xn))||{hits:0,misses:0,size:0}}},jv=({title:e="MyRoboticTrader - Set It and Forget It Crypto Trading | Build New Revenue Streams",description:t="Discover how I built multiple revenue streams with AI-Enhanced autonomous robotic crypto trading. Real results, proven system. Start your automated trading journey today.",keywords:n="robotic trading, crypto trading, automated trading, passive income, cryptocurrency, trading bot, AI trading, revenue streams",ogTitle:r="MyRoboticTrader - Set It and Forget It Crypto Trading | Build New Revenue Streams",ogDescription:a="Discover how I built multiple revenue streams with AI-Enhanced autonomous robotic crypto trading. Real results, proven system.",ogImage:o="https://5defe27d.myrobotictrader.pages.dev/og-image.png",twitterTitle:s="MyRoboticTrader - Set It and Forget It Crypto Trading | Build New Revenue Streams",twitterDescription:l="Discover how I built multiple revenue streams with AI-Enhanced autonomous robotic crypto trading. Real results, proven system.",twitterImage:c="https://myrobotictrader.com/robot-twitter.png",canonicalUrl:u="https://myrobotictrader.com/",pageType:d="home"})=>(f.useEffect(()=>{document.title=e;const h=(k,I,w)=>{const T=w?`meta[property="${k}"]`:`meta[name="${k}"]`;let j=document.querySelector(T);j||(j=document.createElement("meta"),w?j.setAttribute("property",k):j.setAttribute("name",k),document.head.appendChild(j)),j.setAttribute("content",I)},m=(k,I)=>{let w=document.querySelector(`link[rel="${k}"]`);w||(w=document.createElement("link"),w.setAttribute("rel",k),document.head.appendChild(w)),w.setAttribute("href",I)};h("title",e),h("description",t),h("keywords",n),h("og:type","website",!0),h("og:url",u,!0),h("og:title",r,!0),h("og:description",a,!0),h("og:image",o,!0),h("og:site_name","MyRoboticTrader",!0),h("twitter:card","summary_large_image",!0),h("twitter:url",u,!0),h("twitter:title",s,!0),h("twitter:description",l,!0),h("twitter:image",c,!0),m("canonical",u),document.querySelectorAll('script[type="application/ld+json"]').forEach(k=>{var I;(I=k.id)!=null&&I.startsWith("structured-data-")&&k.remove()});const g=(k,I)=>{const w=document.createElement("script");w.type="application/ld+json",w.id=`structured-data-${I}`,w.textContent=JSON.stringify(k,null,2),document.head.appendChild(w)},b={"@context":"https://schema.org","@type":"WebSite",name:"MyRoboticTrader",alternateName:"My Robotic Trader",url:u,description:t,author:{"@type":"Person",name:"Patrick Jenkins",jobTitle:"Automated Trading Specialist",knowsAbout:["Cryptocurrency Trading","Automated Trading Systems","AI Trading","Passive Income"]},potentialAction:{"@type":"SearchAction",target:{"@type":"EntryPoint",urlTemplate:`${u}search?q={search_term_string}`},"query-input":"required name=search_term_string"}},y={"@context":"https://schema.org","@type":"Organization",name:"MyRoboticTrader",url:u,logo:{"@type":"ImageObject",url:"https://myrobotictrader.com/favicon-32x32.png",width:32,height:32},description:"Leading platform for AI-enhanced autonomous cryptocurrency trading",foundingDate:"2025",founder:{"@type":"Person",name:"Patrick Jenkins"},contactPoint:{"@type":"ContactPoint",contactType:"customer service",email:"support@myrobotictrader.com"},areaServed:"Worldwide",serviceType:"Automated Trading Platform"},v={"@context":"https://schema.org","@type":"Person",name:"Patrick Jenkins",jobTitle:"Automated Trading Specialist & Founder",worksFor:{"@type":"Organization",name:"MyRoboticTrader"},knowsAbout:["Cryptocurrency Trading","Automated Trading Systems","AI Trading Algorithms","Passive Income Generation","Risk Management","Financial Technology"],description:"Expert in AI-enhanced autonomous cryptocurrency trading with proven track record of building sustainable revenue streams",url:u},x={"@context":"https://schema.org","@type":"FAQPage",mainEntity:[{"@type":"Question",name:"How does automated crypto trading work?",acceptedAnswer:{"@type":"Answer",text:"Our AI-enhanced robotic trading system analyzes market conditions 24/7 and executes trades based on proven algorithms. The system runs autonomously, requiring no manual intervention while building sustainable revenue streams."}},{"@type":"Question",name:"Is automated trading safe?",acceptedAnswer:{"@type":"Answer",text:"Yes, when done properly with robust risk management. Our system includes built-in safety features like stop losses, position sizing, and maximum drawdown limits to protect your capital."}},{"@type":"Question",name:"How much money do I need to start?",acceptedAnswer:{"@type":"Answer",text:"You can start with as little as $1,000, though we recommend at least $5,000 for better diversification and risk management. The system scales with your account size."}}]};if(d==="home"){const k={"@context":"https://schema.org","@type":"Article",headline:"AI-Enhanced Autonomous Robotic Crypto Trading Results",description:t,author:{"@type":"Person",name:"Patrick Jenkins"},publisher:{"@type":"Organization",name:"MyRoboticTrader",logo:{"@type":"ImageObject",url:o}},datePublished:"2025-01-08",dateModified:new Date().toISOString().split("T")[0],mainEntityOfPage:{"@type":"WebPage","@id":u},image:{"@type":"ImageObject",url:o,width:1200,height:630},articleSection:"Trading Results",keywords:n};g(k,"article")}d==="resources"&&g({"@context":"https://schema.org","@type":"Course",name:"AI-Enhanced Autonomous Crypto Trading with GoBabyTrade",description:"Comprehensive resources and tools for automated cryptocurrency trading with GoBabyTrade",provider:{"@type":"Organization",name:"MyRoboticTrader"},instructor:{"@type":"Person",name:"Patrick Jenkins"},courseMode:"online",educationalLevel:"Beginner to Advanced",about:"Automated Trading, Cryptocurrency, AI Trading Systems, GoBabyTrade"},"course"),g(b,"website"),g(y,"organization"),g(v,"person"),g(x,"faq")},[e,t,n,r,a,o,s,l,c,u,d]),null),Av=()=>(f.useEffect(()=>{const e=()=>{const n=document.head;n.querySelectorAll('meta[data-dynamic="true"]').forEach(s=>s.remove()),[{name:"title",content:"MyRoboticTrader | AI Crypto Trading with Verified Results"},{name:"description",content:"Discover how I built multiple revenue streams with AI-Enhanced autonomous robotic crypto trading. Real results, proven system. Start your automated trading journey today."},{name:"keywords",content:"robotic trading, crypto trading, automated trading, passive income, cryptocurrency, trading bot, AI trading, revenue streams"},{name:"robots",content:"index, follow"},{name:"author",content:"Patrick Jenkins"},{name:"theme-color",content:"#8B5CF6"},{property:"og:type",content:"website"},{property:"og:url",content:"https://myrobotictrader.com/"},{property:"og:title",content:"MyRoboticTrader | AI Crypto Trading with Verified Results"},{property:"og:description",content:"Discover how I built multiple revenue streams with AI-Enhanced autonomous robotic crypto trading. Real results, proven system."},{property:"og:image",content:"https://myrobotictrader.com/og-image.png"},{property:"og:image:width",content:"1200"},{property:"og:image:height",content:"630"},{property:"og:image:type",content:"image/png"},{property:"og:site_name",content:"MyRoboticTrader"},{property:"og:locale",content:"en_US"},{property:"twitter:card",content:"summary_large_image"},{property:"twitter:site",content:"@myrobotictrader"},{property:"twitter:creator",content:"@myrobotictrader"},{property:"twitter:url",content:"https://myrobotictrader.com/"},{property:"twitter:title",content:"MyRoboticTrader | AI Crypto Trading with Verified Results"},{property:"twitter:description",content:"Discover how I built multiple revenue streams with AI-Enhanced autonomous robotic crypto trading. Real results, proven system."},{property:"twitter:image",content:"https://myrobotictrader.com/twitter-image.png"},{property:"twitter:image:alt",content:"MyRoboticTrader - Automated Crypto Trading Results"},{property:"linkedin:owner",content:"Patrick Jenkins"},{property:"og:image:secure_url",content:"https://myrobotictrader.com/og-image.png"}].forEach(({name:s,property:l,content:c})=>{const u=document.createElement("meta");u.setAttribute("data-dynamic","true"),s?u.setAttribute("name",s):l&&u.setAttribute("property",l),u.setAttribute("content",c),n.appendChild(u)}),document.title="MyRoboticTrader | AI Crypto Trading with Verified Results";let o=n.querySelector('link[rel="canonical"]');o||(o=document.createElement("link"),o.setAttribute("rel","canonical"),o.setAttribute("data-dynamic","true"),n.appendChild(o)),o.setAttribute("href","https://myrobotictrader.com/")};e(),setTimeout(e,100),(()=>{document.querySelectorAll('script[type="application/ld+json"][data-static="true"]').forEach(a=>a.remove()),[{id:"website-static",data:{"@context":"https://schema.org","@type":"WebSite",name:"MyRoboticTrader",alternateName:"My Robotic Trader",url:"https://myrobotictrader.com/",description:"Discover how I built multiple revenue streams with AI-Enhanced autonomous robotic crypto trading. Real results, proven system.",author:{"@type":"Person",name:"Patrick Jenkins",jobTitle:"Automated Trading Specialist"}}},{id:"organization-static",data:{"@context":"https://schema.org","@type":"Organization",name:"MyRoboticTrader",url:"https://myrobotictrader.com/",logo:{"@type":"ImageObject",url:"https://myrobotictrader.com/og-image.png",width:1200,height:630},description:"Leading platform for AI-enhanced autonomous cryptocurrency trading",founder:{"@type":"Person",name:"Patrick Jenkins"}}}].forEach(({id:a,data:o})=>{const s=document.createElement("script");s.type="application/ld+json",s.setAttribute("data-static","true"),s.id=a,s.textContent=JSON.stringify(o,null,2),document.head.appendChild(s)})})()},[]),null),Nv=()=>{const e=f.useRef(null);return f.useEffect(()=>{setTimeout(()=>{const n=e.current;if(!n)return;const r=n.getContext("2d");if(!r)return;n.width=1200,n.height=630;const a=r.createLinearGradient(0,0,1200,630);a.addColorStop(0,"#0f172a"),a.addColorStop(.5,"#7c3aed"),a.addColorStop(1,"#0f172a"),r.fillStyle=a,r.fillRect(0,0,1200,630),r.fillStyle="rgba(139, 92, 246, 0.1)",r.beginPath(),r.arc(200,150,100,0,Math.PI*2),r.fill(),r.fillStyle="rgba(236, 72, 153, 0.1)",r.beginPath(),r.arc(1e3,480,120,0,Math.PI*2),r.fill(),r.fillStyle="#ffffff",r.font="bold 64px Arial, sans-serif",r.textAlign="center",r.fillText("MyRoboticTrader",600,200),r.font="36px Arial, sans-serif",r.fillStyle="#e2e8f0",r.fillText("Set It and Forget It Crypto Trading",600,260),r.font="bold 48px Arial, sans-serif",r.fillStyle="#10b981",r.fillText("$12,450 Total Profits",600,350),r.font="28px Arial, sans-serif",r.fillStyle="#a78bfa",r.fillText("Real Results • 8+ Months Trading • Always Growing",600,400),r.font="bold 32px Arial, sans-serif",r.fillStyle="#fbbf24",r.fillText("Get Free Training Now",600,500),r.fillStyle="#8b5cf6",r.fillRect(550,520,100,60),r.fillStyle="#ffffff",r.font="bold 36px Arial, sans-serif",r.textAlign="center",r.fillText("R",600,560),n.toBlob(o=>{if(o){const s=URL.createObjectURL(o),l=document.querySelector('meta[property="og:image"]'),c=document.querySelector('meta[property="twitter:image"]');l&&l.setAttribute("content",s),c&&c.setAttribute("content",s)}},"image/png",.9)},100)},[]),i.jsx("canvas",{ref:e,style:{display:"none"},width:1200,height:630})};var Sv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Pv=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Cv=(e,t)=>{const n=f.forwardRef(({color:r="currentColor",size:a=24,strokeWidth:o=2,absoluteStrokeWidth:s,children:l,...c},u)=>f.createElement("svg",{ref:u,...Sv,width:a,height:a,stroke:r,strokeWidth:s?Number(o)*24/Number(a):o,className:`lucide lucide-${Pv(e)}`,...c},[...t.map(([d,h])=>f.createElement(d,h)),...(Array.isArray(l)?l:[l])||[]]));return n.displayName=`${e}`,n};var J=Cv;const Ov=J("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]),Ev=J("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]),Mv=J("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]),Pe=J("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),$v=J("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]),op=J("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]),jl=J("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]),Fo=J("Bot",[["rect",{width:"18",height:"10",x:"3",y:"11",rx:"2",key:"1ofdy3"}],["circle",{cx:"12",cy:"5",r:"2",key:"f1ur92"}],["path",{d:"M12 7v4",key:"xawao1"}],["line",{x1:"8",x2:"8",y1:"16",y2:"16",key:"h6x27f"}],["line",{x1:"16",x2:"16",y1:"16",y2:"16",key:"5lty7f"}]]),Iu=J("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]),Al=J("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]),Le=J("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["polyline",{points:"22 4 12 14.01 9 11.01",key:"6xbx8j"}]]),ip=J("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),ju=J("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),Au=J("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),sp=J("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]),Qr=J("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]),Dv=J("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]),Bn=J("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]),Bv=J("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]),Zn=J("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]),Rv=J("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]),lp=J("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),_v=J("Gift",[["polyline",{points:"20 12 20 22 4 22 4 12",key:"nda8fc"}],["rect",{width:"20",height:"5",x:"2",y:"7",key:"wkgdzj"}],["line",{x1:"12",x2:"12",y1:"22",y2:"7",key:"1n8zgp"}],["path",{d:"M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z",key:"zighg4"}],["path",{d:"M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z",key:"1pa5tk"}]]),Wv=J("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]),cp=J("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),Lv=J("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]),Fv=J("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]),Hv=J("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),Yv=J("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),zv=J("Percent",[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]]),Gv=J("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]),qv=J("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]),un=J("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",key:"3xmgem"}]]),Uv=J("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]),nr=J("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]),Ye=J("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]),Kv=J("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]),Vv=J("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]),up=J("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),dp=J("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),Nu=J("Wallet",[["path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4",key:"195gfw"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5",key:"195n9w"}],["path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z",key:"vllfpd"}]]),Jv=J("Wifi",[["path",{d:"M5 13a10 10 0 0 1 14 0",key:"6v8j51"}],["path",{d:"M8.5 16.5a5 5 0 0 1 7 0",key:"sej527"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["line",{x1:"12",x2:"12.01",y1:"20",y2:"20",key:"of4bc4"}]]),Zv=J("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Br=J("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),Xv=()=>{const e=[{Icon:Fo,delay:"0s",position:"top-20 left-20"},{Icon:Ye,delay:"2s",position:"top-32 right-32"},{Icon:un,delay:"4s",position:"bottom-40 left-16"},{Icon:Qr,delay:"1s",position:"bottom-32 right-20"},{Icon:Br,delay:"3s",position:"top-1/2 left-8"},{Icon:Bn,delay:"5s",position:"top-1/3 right-8"}];return i.jsx(i.Fragment,{children:e.map(({Icon:t,delay:n,position:r},a)=>i.jsx("div",{className:`absolute ${r} opacity-20 pointer-events-none hidden lg:block animate-float-subtle`,style:{animationDelay:n},children:i.jsx("div",{className:"w-8 h-8 text-purple-300",children:i.jsx(t,{className:"w-full h-full"})})},a))})},Qv=()=>{const e=new Date(2025,0,8),t=new Date;let n=(t.getFullYear()-e.getFullYear())*12;return n+=t.getMonth()-e.getMonth(),t.getDate()<e.getDate()&&n--,Math.max(0,n)},ew=()=>{const{tradingStats:e,isLoading:t}=Xr(),n=Qv(),r=()=>{Wo("start_trading_save_1000","hero"),Lo("https://gobabytrade.com/432706BE","Start Trading Save $1000")};return i.jsxs("section",{className:"relative min-h-screen flex items-center justify-center px-4 overflow-hidden pb-10 pt-10",children:[i.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"}),i.jsx("div",{className:"absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-purple-500/15 to-transparent"}),i.jsx(Xv,{}),i.jsxs("div",{className:"relative max-w-6xl mx-auto text-center z-10 mt-32",children:[i.jsxs("div",{className:"mb-8",children:[i.jsxs("div",{className:"inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-400/40 mb-2 mt-4 shadow-lg shadow-purple-500/20",children:[i.jsx(Fo,{className:"w-4 h-4 text-purple-300"}),i.jsx("span",{className:"text-purple-200 font-medium",children:"AI-Enhanced Autonomous Trading"})]}),i.jsxs("p",{className:"text-sm text-gray-400 mb-4",children:["Powered by"," ",i.jsx("a",{href:"https://gobabytrade.com/432706BE",target:"_blank",rel:"noopener noreferrer",className:"text-purple-300 hover:text-purple-200 transition-colors",children:"GoBabyTrade"})]}),i.jsxs("h1",{className:"text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight px-4",children:[i.jsxs("span",{className:"block md:hidden",children:["Building Revenue Streams",i.jsx("span",{className:"block text-transparent bg-gradient-to-r from-green-300 via-blue-400 to-purple-400 bg-clip-text",children:"Without Watching Charts"})]}),i.jsxs("span",{className:"hidden md:block",children:["How I'm Building Multiple",i.jsx("span",{className:"block text-transparent bg-gradient-to-r from-green-300 via-blue-400 to-purple-400 bg-clip-text",children:"Revenue Streams"}),i.jsx("span",{className:"block text-white",children:"Without Watching Charts"})]})]}),i.jsx("p",{className:"text-lg sm:text-xl md:text-2xl text-gray-200 mb-4 max-w-4xl mx-auto px-4",children:t?i.jsx("span",{className:"text-gray-300",children:"Loading live results..."}):i.jsxs(i.Fragment,{children:[i.jsxs("span",{className:"text-green-300 font-bold",children:["$",e==null?void 0:e.totalProfit.toLocaleString("en-US",{minimumFractionDigits:0,maximumFractionDigits:0}),"+ profit"]})," ","in"," ",i.jsxs("span",{className:"text-blue-300 font-bold",children:[n,"+ months"]})," ","using AI-enhanced autonomous trading most people don't know exists."]})}),i.jsx("p",{className:"text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto px-4",children:"See my live results below."})]}),i.jsx("div",{className:"flex flex-col sm:flex-row gap-4 justify-center mb-16",children:i.jsxs("a",{href:"https://gobabytrade.com/432706BE",onClick:r,target:"_blank",rel:"noopener noreferrer",className:"group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-purple-500/30 flex items-center justify-center gap-2",children:["Start Trading – Save $1,000",i.jsx(Pe,{className:"w-5 h-5 group-hover:translate-x-1 transition-transform"})]})}),i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10",children:[i.jsxs("div",{className:"group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-green-500/15",children:[i.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"}),i.jsx("div",{className:"relative w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/40",children:i.jsx(un,{className:"w-full h-full text-white"})}),i.jsx("div",{className:"relative text-center",children:t?i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"text-2xl font-bold text-green-300 mb-2 animate-pulse",children:"Loading..."}),i.jsx("div",{className:"text-gray-200 font-medium",children:"Total Profit"})]}):i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"text-4xl font-bold text-green-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-300 group-hover:to-emerald-300 group-hover:bg-clip-text transition-all duration-300",children:["$",e==null?void 0:e.totalProfit.toLocaleString("en-US",{minimumFractionDigits:0,maximumFractionDigits:0}),"+"]}),i.jsx("div",{className:"text-gray-200 font-medium group-hover:text-white transition-colors duration-300",children:"Total Profit"}),(e==null?void 0:e.isLiveData)&&i.jsxs("div",{className:"mt-2 flex items-center justify-center gap-1",children:[i.jsx("div",{className:"w-2 h-2 bg-green-400 rounded-full animate-pulse"}),i.jsx("span",{className:"text-xs text-green-300",children:"LIVE"})]})]})}),i.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"})]}),i.jsxs("div",{className:"group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-blue-500/15",children:[i.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"}),i.jsx("div",{className:"relative w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/40",children:i.jsx(Qr,{className:"w-full h-full text-white"})}),i.jsx("div",{className:"relative text-center",children:t?i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"text-2xl font-bold text-blue-300 mb-2 animate-pulse",children:"Loading..."}),i.jsx("div",{className:"text-gray-200 font-medium",children:"Profitable"})]}):i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"text-4xl font-bold text-blue-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-cyan-300 group-hover:bg-clip-text transition-all duration-300",children:[n,"+ Months"]}),i.jsx("div",{className:"text-gray-200 font-medium group-hover:text-white transition-colors duration-300",children:"Profitable"})]})}),i.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"})]}),i.jsxs("div",{className:"group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-purple-500/15",children:[i.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"}),i.jsx("div",{className:"relative w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/40",children:i.jsx(dp,{className:"w-full h-full text-white"})}),i.jsxs("div",{className:"relative text-center",children:[i.jsx("div",{className:"text-4xl font-bold text-purple-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 group-hover:bg-clip-text transition-all duration-300",children:"Zero"}),i.jsx("div",{className:"text-gray-200 font-medium group-hover:text-white transition-colors duration-300",children:"Losing Months"})]}),i.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"})]})]}),i.jsx("div",{className:"max-w-2xl mx-auto",children:i.jsx("img",{src:"/graphics/homepage-hero-01.webp",alt:"Set It and Forget It - Manual Trading vs Autonomous Trading comparison",className:"w-full rounded-2xl shadow-2xl shadow-purple-500/20 border border-white/10"})})]})]})},Ia=new Date(2025,0,8),Ho=()=>{const e=new Date;let t=(e.getFullYear()-Ia.getFullYear())*12;t+=e.getMonth()-Ia.getMonth();let n=e.getDate()-Ia.getDate();if(n<0){t--;const r=new Date(e.getFullYear(),e.getMonth(),0);n+=r.getDate()}if(t>=1)return n>0?`${t} month${t>1?"s":""}, ${n} day${n>1?"s":""}`:`${t} month${t>1?"s":""}`;{const r=Math.abs(e.getTime()-Ia.getTime()),a=Math.ceil(r/(1e3*60*60*24));return`${a} day${a>1?"s":""}`}},tw=({tradingStats:e})=>{var s;const t=Ho(),r=e||{totalProfit:12450,totalTrades:1247,isLiveData:!1,dailyAvg:89},a=((s=e==null?void 0:e.dailyAvg)==null?void 0:s.toFixed(0))||"89",o=e!==null;return i.jsxs("section",{className:"py-16 px-4 relative overflow-hidden",children:[i.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"}),i.jsxs("div",{className:"relative max-w-6xl mx-auto",children:[i.jsxs("div",{className:"text-center mb-12",children:[i.jsxs("div",{className:"inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/30 to-purple-500/30 backdrop-blur-sm rounded-full px-4 py-2 border border-blue-400/40 mb-6 shadow-lg shadow-blue-500/20",children:[i.jsx(up,{className:"w-4 h-4 text-blue-300"}),i.jsx("span",{className:"text-blue-200 font-medium",children:"My Story"})]}),i.jsxs("h2",{className:"text-3xl md:text-5xl font-bold text-white mb-6",children:["Hi, I'm Patrick",i.jsx("span",{className:"block text-transparent bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text",children:"Here's How I Discovered This System"})]})]}),i.jsxs("div",{className:"bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl border border-blue-400/20 p-8 shadow-lg shadow-blue-500/10 mb-8",children:[i.jsx("img",{src:"/patrick-and-moses.jpeg",alt:"Patrick Jenkins with Moses",className:"hidden lg:block float-right ml-8 mb-6 w-80 h-80 rounded-2xl object-cover border-4 border-white/20 shadow-2xl shadow-purple-500/20"}),i.jsx("div",{className:"lg:hidden flex justify-center mb-8",children:i.jsx("img",{src:"/patrick-and-moses.jpeg",alt:"Patrick Jenkins with Moses",className:"w-64 h-64 rounded-2xl object-cover border-4 border-white/20 shadow-2xl shadow-purple-500/20"})}),i.jsxs("div",{className:"text-lg text-gray-200 leading-relaxed",children:[i.jsxs("h3",{className:"text-2xl font-bold text-blue-300 mb-4 flex items-center gap-2",children:[i.jsx(nr,{className:"w-6 h-6"}),"My Journey Started Like Yours"]}),i.jsx("p",{className:"mb-6",children:"I've been following the markets since 2014, and I genuinely love investing. I did okay with my stock investments, but tracking individual stocks became incredibly tedious. I got frustrated with mutual funds because of their fees and average returns - even index funds weren't delivering what I hoped for. Target date funds? Don't get me started on those."}),i.jsxs("h3",{className:"text-2xl font-bold text-blue-300 mb-4 flex items-center gap-2",children:[i.jsx(Bn,{className:"w-6 h-6"}),"Chasing the Dream of Extra Income"]}),i.jsxs("p",{className:"mb-4",children:[i.jsx("span",{className:"text-blue-200 font-semibold",children:"Like many of you, I've always wanted to make extra income in addition to my 9-to-5 job."})," ","Over the years, I invested tens of thousands in various courses and systems - email marketing, affiliate marketing, Amazon wholesale, you name it. Some methods seemed unreliable, and honestly, part of the problem was probably me not putting in full effort or knowing how to position myself properly."]}),i.jsx("p",{className:"mb-6",children:`I was tired of chasing the next "breakthrough" system. Tired of complex strategies that required constant attention. Tired of watching opportunities slip by because I was stuck at work or didn't have time to analyze the market.`}),i.jsxs("h3",{className:"text-2xl font-bold text-yellow-300 mb-4 flex items-center gap-2",children:[i.jsx(Lv,{className:"w-6 h-6"}),"Then Everything Changed"]}),i.jsxs("p",{className:"mb-4",children:["So when I discovered this autonomous trading system while researching new opportunities, my first thought was:"," ",i.jsx("span",{className:"italic text-yellow-200 font-semibold",children:`"Here's just another system promising easy money."`})," ","I was naturally skeptical - and you should be too."]}),i.jsxs("p",{className:"mb-6",children:[i.jsx("span",{className:"text-green-300 font-bold",children:"But this one is truly automated!"})," ","I set it up, connected my exchange accounts with trading-only API permissions, and started with a small amount to test it. The autonomous trader trades while I'm working, sleeping, or spending time with family."]}),i.jsxs("h3",{className:"text-2xl font-bold text-green-300 mb-4 flex items-center gap-2",children:[i.jsx(Ye,{className:"w-6 h-6"}),"The Results Speak for Themselves"]}),i.jsxs("p",{className:"mb-4",children:[i.jsxs("span",{className:"text-green-400 font-bold text-xl",children:["In just ",t,", my system has generated $",r.totalProfit.toLocaleString()," in realized profits."]})," ","That's an average of"," ",i.jsxs("span",{className:"text-green-300 font-semibold",children:["$",a," per day"]})," ","- money that's been withdrawn and spent on real life."]}),i.jsx("p",{className:"mb-6",children:`This isn't paper gains or "what if" projections. This is actual cash that I use for every day living. As of now, it's giving me the extra money to spend for every day expenses and save for emergencies. I'm also reinvesting a portion of my profits to scale my investment capital.`}),i.jsxs("h3",{className:"text-2xl font-bold text-pink-300 mb-4 flex items-center gap-2",children:[i.jsx(Wv,{className:"w-6 h-6"}),"The Best Part: Time with Moses"]}),i.jsx("div",{className:"lg:hidden flex justify-center mb-6",children:i.jsx("img",{src:"/moses-sprinkler.jpeg",alt:"Moses enjoying the sprinkler",className:"w-64 h-64 rounded-2xl object-cover border-4 border-white/20 shadow-2xl shadow-purple-500/20"})}),i.jsx("div",{className:"hidden lg:block",style:{float:"left",marginRight:"2rem",marginBottom:"1.5rem",width:"320px",height:"320px"},children:i.jsx("img",{src:"/moses-sprinkler.jpeg",alt:"Moses enjoying the sprinkler",className:"w-full h-full rounded-2xl object-cover border-4 border-white/20 shadow-2xl shadow-purple-500/20"})}),i.jsxs("p",{className:"mb-4",children:[i.jsx("span",{className:"text-pink-200 font-semibold",children:"I recently got a new dog named Moses, and this automated system gives me something priceless: time."})," ","While my trader works 24/7—executing trades, taking profits, managing positions—I'm at the park with Moses. I'm not glued to charts or stressed about missing opportunities."]}),i.jsx("p",{className:"mb-4",children:`That's what "Set It and Forget It" really means. The system handles everything while I actually live my life. No more choosing between making money and spending time with those I love. I get both.`}),i.jsx("p",{className:"mb-4",children:"Moses and I go to the park almost every day now. Whether it's morning walks, afternoon sprinkler sessions, or just lounging in the yard, I'm actually present for these moments. The autonomous trader is working in the background, but my focus is where it should be—on the simple joys that make life worth living."}),i.jsx("p",{className:"mb-6",children:"This is the freedom I always wanted: the ability to generate income without being chained to a screen, constantly watching markets and second-guessing decisions. The system does the work. I enjoy the life."}),i.jsxs("h3",{className:"text-2xl font-bold text-blue-300 mb-4 flex items-center gap-2",children:[i.jsx(Le,{className:"w-6 h-6"}),"Why I'm Sharing This With You"]}),i.jsx("p",{className:"mb-4",children:"I see people struggling with finances every day - having too much month left at the end of the money. Working overtime just to stay afloat. Missing out on time with family because they need that extra shift."}),i.jsxs("p",{className:"mb-6",children:[i.jsx("span",{className:"text-blue-200 font-semibold",children:"This platform could genuinely help, but not many people know about it."})," ",`That's why I built this site and share what's working for me. As you can see, my total profits are not breaking any records, but it's consistent and reliable - It's truly "Set It and Forget It." My trader only takes what the market GIVES. I'm not a financial guru or marketing expert - I'm just someone who found something that works and wants to help others discover it too.`]})]}),i.jsx("div",{className:"clear-both"})]}),i.jsxs("div",{className:"text-center bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl border border-purple-400/20 p-8",children:[i.jsxs("p",{className:"text-gray-200 max-w-3xl mx-auto text-lg leading-relaxed",children:[i.jsx("span",{className:"text-white font-semibold",children:"Here's the truth:"})," ","I'm not a financial advisor, and I can't promise you'll get the same results I have. But I can show you exactly what's working for me, with real numbers that are updated"," ",o?"live":"regularly"," from my actual trading accounts below."]}),i.jsx("p",{className:"text-blue-300 mt-4 font-medium",children:"If you're ready to explore a different path to financial growth, keep reading."})]})]})]})};function hp(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(n=hp(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function le(){for(var e,t,n=0,r="",a=arguments.length;n<a;n++)(e=arguments[n])&&(t=hp(e))&&(r&&(r+=" "),r+=t);return r}var nw=["dangerouslySetInnerHTML","onCopy","onCopyCapture","onCut","onCutCapture","onPaste","onPasteCapture","onCompositionEnd","onCompositionEndCapture","onCompositionStart","onCompositionStartCapture","onCompositionUpdate","onCompositionUpdateCapture","onFocus","onFocusCapture","onBlur","onBlurCapture","onChange","onChangeCapture","onBeforeInput","onBeforeInputCapture","onInput","onInputCapture","onReset","onResetCapture","onSubmit","onSubmitCapture","onInvalid","onInvalidCapture","onLoad","onLoadCapture","onError","onErrorCapture","onKeyDown","onKeyDownCapture","onKeyPress","onKeyPressCapture","onKeyUp","onKeyUpCapture","onAbort","onAbortCapture","onCanPlay","onCanPlayCapture","onCanPlayThrough","onCanPlayThroughCapture","onDurationChange","onDurationChangeCapture","onEmptied","onEmptiedCapture","onEncrypted","onEncryptedCapture","onEnded","onEndedCapture","onLoadedData","onLoadedDataCapture","onLoadedMetadata","onLoadedMetadataCapture","onLoadStart","onLoadStartCapture","onPause","onPauseCapture","onPlay","onPlayCapture","onPlaying","onPlayingCapture","onProgress","onProgressCapture","onRateChange","onRateChangeCapture","onSeeked","onSeekedCapture","onSeeking","onSeekingCapture","onStalled","onStalledCapture","onSuspend","onSuspendCapture","onTimeUpdate","onTimeUpdateCapture","onVolumeChange","onVolumeChangeCapture","onWaiting","onWaitingCapture","onAuxClick","onAuxClickCapture","onClick","onClickCapture","onContextMenu","onContextMenuCapture","onDoubleClick","onDoubleClickCapture","onDrag","onDragCapture","onDragEnd","onDragEndCapture","onDragEnter","onDragEnterCapture","onDragExit","onDragExitCapture","onDragLeave","onDragLeaveCapture","onDragOver","onDragOverCapture","onDragStart","onDragStartCapture","onDrop","onDropCapture","onMouseDown","onMouseDownCapture","onMouseEnter","onMouseLeave","onMouseMove","onMouseMoveCapture","onMouseOut","onMouseOutCapture","onMouseOver","onMouseOverCapture","onMouseUp","onMouseUpCapture","onSelect","onSelectCapture","onTouchCancel","onTouchCancelCapture","onTouchEnd","onTouchEndCapture","onTouchMove","onTouchMoveCapture","onTouchStart","onTouchStartCapture","onPointerDown","onPointerDownCapture","onPointerMove","onPointerMoveCapture","onPointerUp","onPointerUpCapture","onPointerCancel","onPointerCancelCapture","onPointerEnter","onPointerEnterCapture","onPointerLeave","onPointerLeaveCapture","onPointerOver","onPointerOverCapture","onPointerOut","onPointerOutCapture","onGotPointerCapture","onGotPointerCaptureCapture","onLostPointerCapture","onLostPointerCaptureCapture","onScroll","onScrollCapture","onWheel","onWheelCapture","onAnimationStart","onAnimationStartCapture","onAnimationEnd","onAnimationEndCapture","onAnimationIteration","onAnimationIterationCapture","onTransitionEnd","onTransitionEndCapture"];function Nl(e){if(typeof e!="string")return!1;var t=nw;return t.includes(e)}var rw=["aria-activedescendant","aria-atomic","aria-autocomplete","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colspan","aria-controls","aria-current","aria-describedby","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-modal","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext","className","color","height","id","lang","max","media","method","min","name","style","target","width","role","tabIndex","accentHeight","accumulate","additive","alignmentBaseline","allowReorder","alphabetic","amplitude","arabicForm","ascent","attributeName","attributeType","autoReverse","azimuth","baseFrequency","baselineShift","baseProfile","bbox","begin","bias","by","calcMode","capHeight","clip","clipPath","clipPathUnits","clipRule","colorInterpolation","colorInterpolationFilters","colorProfile","colorRendering","contentScriptType","contentStyleType","cursor","cx","cy","d","decelerate","descent","diffuseConstant","direction","display","divisor","dominantBaseline","dur","dx","dy","edgeMode","elevation","enableBackground","end","exponent","externalResourcesRequired","fill","fillOpacity","fillRule","filter","filterRes","filterUnits","floodColor","floodOpacity","focusable","fontFamily","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontWeight","format","from","fx","fy","g1","g2","glyphName","glyphOrientationHorizontal","glyphOrientationVertical","glyphRef","gradientTransform","gradientUnits","hanging","horizAdvX","horizOriginX","href","ideographic","imageRendering","in2","in","intercept","k1","k2","k3","k4","k","kernelMatrix","kernelUnitLength","kerning","keyPoints","keySplines","keyTimes","lengthAdjust","letterSpacing","lightingColor","limitingConeAngle","local","markerEnd","markerHeight","markerMid","markerStart","markerUnits","markerWidth","mask","maskContentUnits","maskUnits","mathematical","mode","numOctaves","offset","opacity","operator","order","orient","orientation","origin","overflow","overlinePosition","overlineThickness","paintOrder","panose1","pathLength","patternContentUnits","patternTransform","patternUnits","pointerEvents","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","r","radius","refX","refY","renderingIntent","repeatCount","repeatDur","requiredExtensions","requiredFeatures","restart","result","rotate","rx","ry","seed","shapeRendering","slope","spacing","specularConstant","specularExponent","speed","spreadMethod","startOffset","stdDeviation","stemh","stemv","stitchTiles","stopColor","stopOpacity","strikethroughPosition","strikethroughThickness","string","stroke","strokeDasharray","strokeDashoffset","strokeLinecap","strokeLinejoin","strokeMiterlimit","strokeOpacity","strokeWidth","surfaceScale","systemLanguage","tableValues","targetX","targetY","textAnchor","textDecoration","textLength","textRendering","to","transform","u1","u2","underlinePosition","underlineThickness","unicode","unicodeBidi","unicodeRange","unitsPerEm","vAlphabetic","values","vectorEffect","version","vertAdvY","vertOriginX","vertOriginY","vHanging","vIdeographic","viewTarget","visibility","vMathematical","widths","wordSpacing","writingMode","x1","x2","x","xChannelSelector","xHeight","xlinkActuate","xlinkArcrole","xlinkHref","xlinkRole","xlinkShow","xlinkTitle","xlinkType","xmlBase","xmlLang","xmlns","xmlnsXlink","xmlSpace","y1","y2","y","yChannelSelector","z","zoomAndPan","ref","key","angle"],aw=new Set(rw);function mp(e){return typeof e!="string"?!1:aw.has(e)}function pp(e){return typeof e=="string"&&e.startsWith("data-")}function dn(e){if(typeof e!="object"||e===null)return{};var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(mp(n)||pp(n))&&(t[n]=e[n]);return t}function Sl(e){if(e==null)return null;if(f.isValidElement(e)&&typeof e.props=="object"&&e.props!==null){var t=e.props;return dn(t)}return typeof e=="object"&&!Array.isArray(e)?dn(e):null}function dt(e){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(mp(n)||pp(n)||Nl(n))&&(t[n]=e[n]);return t}var ow=["children","width","height","viewBox","className","style","title","desc"];function js(){return js=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},js.apply(null,arguments)}function iw(e,t){if(e==null)return{};var n,r,a=sw(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function sw(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}var gp=f.forwardRef((e,t)=>{var{children:n,width:r,height:a,viewBox:o,className:s,style:l,title:c,desc:u}=e,d=iw(e,ow),h=o||{width:r,height:a,x:0,y:0},m=le("recharts-surface",s);return f.createElement("svg",js({},dt(d),{className:m,width:r,height:a,style:l,viewBox:"".concat(h.x," ").concat(h.y," ").concat(h.width," ").concat(h.height),ref:t}),f.createElement("title",null,c),f.createElement("desc",null,u),n)}),lw=["children","className"];function As(){return As=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},As.apply(null,arguments)}function cw(e,t){if(e==null)return{};var n,r,a=uw(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function uw(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}var Ht=f.forwardRef((e,t)=>{var{children:n,className:r}=e,a=cw(e,lw),o=le("recharts-layer",r);return f.createElement("g",As({className:o},dt(a),{ref:t}),n)}),dw=f.createContext(null);function ie(e){return function(){return e}}const fp=Math.cos,Va=Math.sin,jt=Math.sqrt,Ja=Math.PI,Yo=2*Ja,Ns=Math.PI,Ss=2*Ns,bn=1e-6,hw=Ss-bn;function yp(e){this._+=e[0];for(let t=1,n=e.length;t<n;++t)this._+=arguments[t]+e[t]}function mw(e){let t=Math.floor(e);if(!(t>=0))throw new Error(`invalid digits: ${e}`);if(t>15)return yp;const n=10**t;return function(r){this._+=r[0];for(let a=1,o=r.length;a<o;++a)this._+=Math.round(arguments[a]*n)/n+r[a]}}class pw{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=t==null?yp:mw(t)}moveTo(t,n){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,n){this._append`L${this._x1=+t},${this._y1=+n}`}quadraticCurveTo(t,n,r,a){this._append`Q${+t},${+n},${this._x1=+r},${this._y1=+a}`}bezierCurveTo(t,n,r,a,o,s){this._append`C${+t},${+n},${+r},${+a},${this._x1=+o},${this._y1=+s}`}arcTo(t,n,r,a,o){if(t=+t,n=+n,r=+r,a=+a,o=+o,o<0)throw new Error(`negative radius: ${o}`);let s=this._x1,l=this._y1,c=r-t,u=a-n,d=s-t,h=l-n,m=d*d+h*h;if(this._x1===null)this._append`M${this._x1=t},${this._y1=n}`;else if(m>bn)if(!(Math.abs(h*c-u*d)>bn)||!o)this._append`L${this._x1=t},${this._y1=n}`;else{let p=r-s,g=a-l,b=c*c+u*u,y=p*p+g*g,v=Math.sqrt(b),x=Math.sqrt(m),k=o*Math.tan((Ns-Math.acos((b+m-y)/(2*v*x)))/2),I=k/x,w=k/v;Math.abs(I-1)>bn&&this._append`L${t+I*d},${n+I*h}`,this._append`A${o},${o},0,0,${+(h*p>d*g)},${this._x1=t+w*c},${this._y1=n+w*u}`}}arc(t,n,r,a,o,s){if(t=+t,n=+n,r=+r,s=!!s,r<0)throw new Error(`negative radius: ${r}`);let l=r*Math.cos(a),c=r*Math.sin(a),u=t+l,d=n+c,h=1^s,m=s?a-o:o-a;this._x1===null?this._append`M${u},${d}`:(Math.abs(this._x1-u)>bn||Math.abs(this._y1-d)>bn)&&this._append`L${u},${d}`,r&&(m<0&&(m=m%Ss+Ss),m>hw?this._append`A${r},${r},0,1,${h},${t-l},${n-c}A${r},${r},0,1,${h},${this._x1=u},${this._y1=d}`:m>bn&&this._append`A${r},${r},0,${+(m>=Ns)},${h},${this._x1=t+r*Math.cos(o)},${this._y1=n+r*Math.sin(o)}`)}rect(t,n,r,a){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}h${r=+r}v${+a}h${-r}Z`}toString(){return this._}}function Pl(e){let t=3;return e.digits=function(n){if(!arguments.length)return t;if(n==null)t=null;else{const r=Math.floor(n);if(!(r>=0))throw new RangeError(`invalid digits: ${n}`);t=r}return e},()=>new pw(t)}function Cl(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function bp(e){this._context=e}bp.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:this._context.lineTo(e,t);break}}};function zo(e){return new bp(e)}function vp(e){return e[0]}function wp(e){return e[1]}function xp(e,t){var n=ie(!0),r=null,a=zo,o=null,s=Pl(l);e=typeof e=="function"?e:e===void 0?vp:ie(e),t=typeof t=="function"?t:t===void 0?wp:ie(t);function l(c){var u,d=(c=Cl(c)).length,h,m=!1,p;for(r==null&&(o=a(p=s())),u=0;u<=d;++u)!(u<d&&n(h=c[u],u,c))===m&&((m=!m)?o.lineStart():o.lineEnd()),m&&o.point(+e(h,u,c),+t(h,u,c));if(p)return o=null,p+""||null}return l.x=function(c){return arguments.length?(e=typeof c=="function"?c:ie(+c),l):e},l.y=function(c){return arguments.length?(t=typeof c=="function"?c:ie(+c),l):t},l.defined=function(c){return arguments.length?(n=typeof c=="function"?c:ie(!!c),l):n},l.curve=function(c){return arguments.length?(a=c,r!=null&&(o=a(r)),l):a},l.context=function(c){return arguments.length?(c==null?r=o=null:o=a(r=c),l):r},l}function ja(e,t,n){var r=null,a=ie(!0),o=null,s=zo,l=null,c=Pl(u);e=typeof e=="function"?e:e===void 0?vp:ie(+e),t=typeof t=="function"?t:ie(t===void 0?0:+t),n=typeof n=="function"?n:n===void 0?wp:ie(+n);function u(h){var m,p,g,b=(h=Cl(h)).length,y,v=!1,x,k=new Array(b),I=new Array(b);for(o==null&&(l=s(x=c())),m=0;m<=b;++m){if(!(m<b&&a(y=h[m],m,h))===v)if(v=!v)p=m,l.areaStart(),l.lineStart();else{for(l.lineEnd(),l.lineStart(),g=m-1;g>=p;--g)l.point(k[g],I[g]);l.lineEnd(),l.areaEnd()}v&&(k[m]=+e(y,m,h),I[m]=+t(y,m,h),l.point(r?+r(y,m,h):k[m],n?+n(y,m,h):I[m]))}if(x)return l=null,x+""||null}function d(){return xp().defined(a).curve(s).context(o)}return u.x=function(h){return arguments.length?(e=typeof h=="function"?h:ie(+h),r=null,u):e},u.x0=function(h){return arguments.length?(e=typeof h=="function"?h:ie(+h),u):e},u.x1=function(h){return arguments.length?(r=h==null?null:typeof h=="function"?h:ie(+h),u):r},u.y=function(h){return arguments.length?(t=typeof h=="function"?h:ie(+h),n=null,u):t},u.y0=function(h){return arguments.length?(t=typeof h=="function"?h:ie(+h),u):t},u.y1=function(h){return arguments.length?(n=h==null?null:typeof h=="function"?h:ie(+h),u):n},u.lineX0=u.lineY0=function(){return d().x(e).y(t)},u.lineY1=function(){return d().x(e).y(n)},u.lineX1=function(){return d().x(r).y(t)},u.defined=function(h){return arguments.length?(a=typeof h=="function"?h:ie(!!h),u):a},u.curve=function(h){return arguments.length?(s=h,o!=null&&(l=s(o)),u):s},u.context=function(h){return arguments.length?(h==null?o=l=null:l=s(o=h),u):o},u}class kp{constructor(t,n){this._context=t,this._x=n}areaStart(){this._line=0}areaEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line}point(t,n){switch(t=+t,n=+n,this._point){case 0:{this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break}case 1:this._point=2;default:{this._x?this._context.bezierCurveTo(this._x0=(this._x0+t)/2,this._y0,this._x0,n,t,n):this._context.bezierCurveTo(this._x0,this._y0=(this._y0+n)/2,t,this._y0,t,n);break}}this._x0=t,this._y0=n}}function gw(e){return new kp(e,!0)}function fw(e){return new kp(e,!1)}const Ol={draw(e,t){const n=jt(t/Ja);e.moveTo(n,0),e.arc(0,0,n,0,Yo)}},yw={draw(e,t){const n=jt(t/5)/2;e.moveTo(-3*n,-n),e.lineTo(-n,-n),e.lineTo(-n,-3*n),e.lineTo(n,-3*n),e.lineTo(n,-n),e.lineTo(3*n,-n),e.lineTo(3*n,n),e.lineTo(n,n),e.lineTo(n,3*n),e.lineTo(-n,3*n),e.lineTo(-n,n),e.lineTo(-3*n,n),e.closePath()}},Tp=jt(1/3),bw=Tp*2,vw={draw(e,t){const n=jt(t/bw),r=n*Tp;e.moveTo(0,-n),e.lineTo(r,0),e.lineTo(0,n),e.lineTo(-r,0),e.closePath()}},ww={draw(e,t){const n=jt(t),r=-n/2;e.rect(r,r,n,n)}},xw=.8908130915292852,Ip=Va(Ja/10)/Va(7*Ja/10),kw=Va(Yo/10)*Ip,Tw=-fp(Yo/10)*Ip,Iw={draw(e,t){const n=jt(t*xw),r=kw*n,a=Tw*n;e.moveTo(0,-n),e.lineTo(r,a);for(let o=1;o<5;++o){const s=Yo*o/5,l=fp(s),c=Va(s);e.lineTo(c*n,-l*n),e.lineTo(l*r-c*a,c*r+l*a)}e.closePath()}},Ki=jt(3),jw={draw(e,t){const n=-jt(t/(Ki*3));e.moveTo(0,n*2),e.lineTo(-Ki*n,-n),e.lineTo(Ki*n,-n),e.closePath()}},ot=-.5,it=jt(3)/2,Ps=1/jt(12),Aw=(Ps/2+1)*3,Nw={draw(e,t){const n=jt(t/Aw),r=n/2,a=n*Ps,o=r,s=n*Ps+n,l=-o,c=s;e.moveTo(r,a),e.lineTo(o,s),e.lineTo(l,c),e.lineTo(ot*r-it*a,it*r+ot*a),e.lineTo(ot*o-it*s,it*o+ot*s),e.lineTo(ot*l-it*c,it*l+ot*c),e.lineTo(ot*r+it*a,ot*a-it*r),e.lineTo(ot*o+it*s,ot*s-it*o),e.lineTo(ot*l+it*c,ot*c-it*l),e.closePath()}};function Sw(e,t){let n=null,r=Pl(a);e=typeof e=="function"?e:ie(e||Ol),t=typeof t=="function"?t:ie(t===void 0?64:+t);function a(){let o;if(n||(n=o=r()),e.apply(this,arguments).draw(n,+t.apply(this,arguments)),o)return n=null,o+""||null}return a.type=function(o){return arguments.length?(e=typeof o=="function"?o:ie(o),a):e},a.size=function(o){return arguments.length?(t=typeof o=="function"?o:ie(+o),a):t},a.context=function(o){return arguments.length?(n=o??null,a):n},a}function Za(){}function Xa(e,t,n){e._context.bezierCurveTo((2*e._x0+e._x1)/3,(2*e._y0+e._y1)/3,(e._x0+2*e._x1)/3,(e._y0+2*e._y1)/3,(e._x0+4*e._x1+t)/6,(e._y0+4*e._y1+n)/6)}function jp(e){this._context=e}jp.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:Xa(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:Xa(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function Pw(e){return new jp(e)}function Ap(e){this._context=e}Ap.prototype={areaStart:Za,areaEnd:Za,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x2,this._y2),this._context.closePath();break}case 2:{this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break}case 3:{this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4);break}}},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._x2=e,this._y2=t;break;case 1:this._point=2,this._x3=e,this._y3=t;break;case 2:this._point=3,this._x4=e,this._y4=t,this._context.moveTo((this._x0+4*this._x1+e)/6,(this._y0+4*this._y1+t)/6);break;default:Xa(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function Cw(e){return new Ap(e)}function Np(e){this._context=e}Np.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var n=(this._x0+4*this._x1+e)/6,r=(this._y0+4*this._y1+t)/6;this._line?this._context.lineTo(n,r):this._context.moveTo(n,r);break;case 3:this._point=4;default:Xa(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function Ow(e){return new Np(e)}function Sp(e){this._context=e}Sp.prototype={areaStart:Za,areaEnd:Za,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(e,t){e=+e,t=+t,this._point?this._context.lineTo(e,t):(this._point=1,this._context.moveTo(e,t))}};function Ew(e){return new Sp(e)}function Su(e){return e<0?-1:1}function Pu(e,t,n){var r=e._x1-e._x0,a=t-e._x1,o=(e._y1-e._y0)/(r||a<0&&-0),s=(n-e._y1)/(a||r<0&&-0),l=(o*a+s*r)/(r+a);return(Su(o)+Su(s))*Math.min(Math.abs(o),Math.abs(s),.5*Math.abs(l))||0}function Cu(e,t){var n=e._x1-e._x0;return n?(3*(e._y1-e._y0)/n-t)/2:t}function Vi(e,t,n){var r=e._x0,a=e._y0,o=e._x1,s=e._y1,l=(o-r)/3;e._context.bezierCurveTo(r+l,a+l*t,o-l,s-l*n,o,s)}function Qa(e){this._context=e}Qa.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:Vi(this,this._t0,Cu(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){var n=NaN;if(e=+e,t=+t,!(e===this._x1&&t===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,Vi(this,Cu(this,n=Pu(this,e,t)),n);break;default:Vi(this,this._t0,n=Pu(this,e,t));break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t,this._t0=n}}};function Pp(e){this._context=new Cp(e)}(Pp.prototype=Object.create(Qa.prototype)).point=function(e,t){Qa.prototype.point.call(this,t,e)};function Cp(e){this._context=e}Cp.prototype={moveTo:function(e,t){this._context.moveTo(t,e)},closePath:function(){this._context.closePath()},lineTo:function(e,t){this._context.lineTo(t,e)},bezierCurveTo:function(e,t,n,r,a,o){this._context.bezierCurveTo(t,e,r,n,o,a)}};function Mw(e){return new Qa(e)}function $w(e){return new Pp(e)}function Op(e){this._context=e}Op.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var e=this._x,t=this._y,n=e.length;if(n)if(this._line?this._context.lineTo(e[0],t[0]):this._context.moveTo(e[0],t[0]),n===2)this._context.lineTo(e[1],t[1]);else for(var r=Ou(e),a=Ou(t),o=0,s=1;s<n;++o,++s)this._context.bezierCurveTo(r[0][o],a[0][o],r[1][o],a[1][o],e[s],t[s]);(this._line||this._line!==0&&n===1)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(e,t){this._x.push(+e),this._y.push(+t)}};function Ou(e){var t,n=e.length-1,r,a=new Array(n),o=new Array(n),s=new Array(n);for(a[0]=0,o[0]=2,s[0]=e[0]+2*e[1],t=1;t<n-1;++t)a[t]=1,o[t]=4,s[t]=4*e[t]+2*e[t+1];for(a[n-1]=2,o[n-1]=7,s[n-1]=8*e[n-1]+e[n],t=1;t<n;++t)r=a[t]/o[t-1],o[t]-=r,s[t]-=r*s[t-1];for(a[n-1]=s[n-1]/o[n-1],t=n-2;t>=0;--t)a[t]=(s[t]-a[t+1])/o[t];for(o[n-1]=(e[n]+a[n-1])/2,t=0;t<n-1;++t)o[t]=2*e[t+1]-a[t+1];return[a,o]}function Dw(e){return new Op(e)}function Go(e,t){this._context=e,this._t=t}Go.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&this._point===2&&this._context.lineTo(this._x,this._y),(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:{if(this._t<=0)this._context.lineTo(this._x,t),this._context.lineTo(e,t);else{var n=this._x*(1-this._t)+e*this._t;this._context.lineTo(n,this._y),this._context.lineTo(n,t)}break}}this._x=e,this._y=t}};function Bw(e){return new Go(e,.5)}function Rw(e){return new Go(e,0)}function _w(e){return new Go(e,1)}function Pn(e,t){if((s=e.length)>1)for(var n=1,r,a,o=e[t[0]],s,l=o.length;n<s;++n)for(a=o,o=e[t[n]],r=0;r<l;++r)o[r][1]+=o[r][0]=isNaN(a[r][1])?a[r][0]:a[r][1]}function Cs(e){for(var t=e.length,n=new Array(t);--t>=0;)n[t]=t;return n}function Ww(e,t){return e[t]}function Lw(e){const t=[];return t.key=e,t}function Fw(){var e=ie([]),t=Cs,n=Pn,r=Ww;function a(o){var s=Array.from(e.apply(this,arguments),Lw),l,c=s.length,u=-1,d;for(const h of o)for(l=0,++u;l<c;++l)(s[l][u]=[0,+r(h,s[l].key,u,o)]).data=h;for(l=0,d=Cl(t(s));l<c;++l)s[d[l]].index=l;return n(s,d),s}return a.keys=function(o){return arguments.length?(e=typeof o=="function"?o:ie(Array.from(o)),a):e},a.value=function(o){return arguments.length?(r=typeof o=="function"?o:ie(+o),a):r},a.order=function(o){return arguments.length?(t=o==null?Cs:typeof o=="function"?o:ie(Array.from(o)),a):t},a.offset=function(o){return arguments.length?(n=o??Pn,a):n},a}function Hw(e,t){if((r=e.length)>0){for(var n,r,a=0,o=e[0].length,s;a<o;++a){for(s=n=0;n<r;++n)s+=e[n][a][1]||0;if(s)for(n=0;n<r;++n)e[n][a][1]/=s}Pn(e,t)}}function Yw(e,t){if((a=e.length)>0){for(var n=0,r=e[t[0]],a,o=r.length;n<o;++n){for(var s=0,l=0;s<a;++s)l+=e[s][n][1]||0;r[n][1]+=r[n][0]=-l/2}Pn(e,t)}}function zw(e,t){if(!(!((s=e.length)>0)||!((o=(a=e[t[0]]).length)>0))){for(var n=0,r=1,a,o,s;r<o;++r){for(var l=0,c=0,u=0;l<s;++l){for(var d=e[t[l]],h=d[r][1]||0,m=d[r-1][1]||0,p=(h-m)/2,g=0;g<l;++g){var b=e[t[g]],y=b[r][1]||0,v=b[r-1][1]||0;p+=y-v}c+=h,u+=p*h}a[r-1][1]+=a[r-1][0]=n,c&&(n-=u/c)}a[r-1][1]+=a[r-1][0]=n,Pn(e,t)}}var qo={},Ep={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n){return n==="__proto__"}e.isUnsafeProperty=t})(Ep);var El={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n){switch(typeof n){case"number":case"symbol":return!1;case"string":return n.includes(".")||n.includes("[")||n.includes("]")}}e.isDeepKey=t})(El);var Uo={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n){var r;return typeof n=="string"||typeof n=="symbol"?n:Object.is((r=n==null?void 0:n.valueOf)==null?void 0:r.call(n),-0)?"-0":String(n)}e.toKey=t})(Uo);var Ko={},Mp={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n){if(n==null)return"";if(typeof n=="string")return n;if(Array.isArray(n))return n.map(t).join(",");const r=String(n);return r==="0"&&Object.is(Number(n),-0)?"-0":r}e.toString=t})(Mp);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Mp,n=Uo;function r(a){if(Array.isArray(a))return a.map(n.toKey);if(typeof a=="symbol")return[a];a=t.toString(a);const o=[],s=a.length;if(s===0)return o;let l=0,c="",u="",d=!1;for(a.charCodeAt(0)===46&&(o.push(""),l++);l<s;){const h=a[l];u?h==="\\"&&l+1<s?(l++,c+=a[l]):h===u?u="":c+=h:d?h==='"'||h==="'"?u=h:h==="]"?(d=!1,o.push(c),c=""):c+=h:h==="["?(d=!0,c&&(o.push(c),c="")):h==="."?c&&(o.push(c),c=""):c+=h,l++}return c&&o.push(c),o}e.toPath=r})(Ko);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Ep,n=El,r=Uo,a=Ko;function o(l,c,u){if(l==null)return u;switch(typeof c){case"string":{if(t.isUnsafeProperty(c))return u;const d=l[c];return d===void 0?n.isDeepKey(c)?o(l,a.toPath(c),u):u:d}case"number":case"symbol":{typeof c=="number"&&(c=r.toKey(c));const d=l[c];return d===void 0?u:d}default:{if(Array.isArray(c))return s(l,c,u);if(Object.is(c==null?void 0:c.valueOf(),-0)?c="-0":c=String(c),t.isUnsafeProperty(c))return u;const d=l[c];return d===void 0?u:d}}}function s(l,c,u){if(c.length===0)return u;let d=l;for(let h=0;h<c.length;h++){if(d==null||t.isUnsafeProperty(c[h]))return u;d=d[c[h]]}return d===void 0?u:d}e.get=o})(qo);var Gw=qo.get;const rr=It(Gw);var qw=4;function ln(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:qw,n=10**t,r=Math.round(e*n)/n;return Object.is(r,-0)?0:r}function me(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return e.reduce((a,o,s)=>{var l=n[s-1];return typeof l=="string"?a+l+o:l!==void 0?a+ln(l)+o:a+o},"")}var et=e=>e===0?0:e>0?1:-1,Ot=e=>typeof e=="number"&&e!=+e,Yt=e=>typeof e=="string"&&e.indexOf("%")===e.length-1,K=e=>(typeof e=="number"||e instanceof Number)&&!Ot(e),Et=e=>K(e)||typeof e=="string",Uw=0,Rr=e=>{var t=++Uw;return"".concat(e||"").concat(t)},kt=function(t,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(!K(t)&&typeof t!="string")return r;var o;if(Yt(t)){if(n==null)return r;var s=t.indexOf("%");o=n*parseFloat(t.slice(0,s))/100}else o=+t;return Ot(o)&&(o=r),a&&n!=null&&o>n&&(o=n),o},$p=e=>{if(!Array.isArray(e))return!1;for(var t=e.length,n={},r=0;r<t;r++)if(!n[String(e[r])])n[String(e[r])]=!0;else return!0;return!1};function De(e,t,n){return K(e)&&K(t)?ln(e+n*(t-e)):t}function Kw(e,t,n){if(!(!e||!e.length))return e.find(r=>r&&(typeof t=="function"?t(r):rr(r,t))===n)}var Ce=e=>e===null||typeof e>"u",ea=e=>Ce(e)?e:"".concat(e.charAt(0).toUpperCase()).concat(e.slice(1));function Vw(e){return e!=null}function ta(){}var Jw=["type","size","sizeType"];function Os(){return Os=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Os.apply(null,arguments)}function Eu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Mu(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Eu(Object(n),!0).forEach(function(r){Zw(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Eu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Zw(e,t,n){return(t=Xw(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Xw(e){var t=Qw(e,"string");return typeof t=="symbol"?t:t+""}function Qw(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ex(e,t){if(e==null)return{};var n,r,a=tx(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function tx(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}var Dp={symbolCircle:Ol,symbolCross:yw,symbolDiamond:vw,symbolSquare:ww,symbolStar:Iw,symbolTriangle:jw,symbolWye:Nw},nx=Math.PI/180,rx=e=>{var t="symbol".concat(ea(e));return Dp[t]||Ol},ax=(e,t,n)=>{if(t==="area")return e;switch(n){case"cross":return 5*e*e/9;case"diamond":return .5*e*e/Math.sqrt(3);case"square":return e*e;case"star":{var r=18*nx;return 1.25*e*e*(Math.tan(r)-Math.tan(r*2)*Math.tan(r)**2)}case"triangle":return Math.sqrt(3)*e*e/4;case"wye":return(21-10*Math.sqrt(3))*e*e/8;default:return Math.PI*e*e/4}},ox=(e,t)=>{Dp["symbol".concat(ea(e))]=t},Bp=e=>{var{type:t="circle",size:n=64,sizeType:r="area"}=e,a=ex(e,Jw),o=Mu(Mu({},a),{},{type:t,size:n,sizeType:r}),s="circle";typeof t=="string"&&(s=t);var l=()=>{var m=rx(s),p=Sw().type(m).size(ax(n,r,s)),g=p();if(g!==null)return g},{className:c,cx:u,cy:d}=o,h=dt(o);return K(u)&&K(d)&&K(n)?f.createElement("path",Os({},h,{className:le("recharts-symbols",c),transform:"translate(".concat(u,", ").concat(d,")"),d:l()})):null};Bp.registerSymbol=ox;var Rp=e=>"radius"in e&&"startAngle"in e&&"endAngle"in e,ix=(e,t)=>{if(!e||typeof e=="function"||typeof e=="boolean")return null;var n=e;if(f.isValidElement(e)&&(n=e.props),typeof n!="object"&&typeof n!="function")return null;var r={};return Object.keys(n).forEach(a=>{Nl(a)&&(r[a]=t||(o=>n[a](n,o)))}),r},sx=(e,t,n)=>r=>(e(t,n,r),null),Ml=(e,t,n)=>{if(e===null||typeof e!="object"&&typeof e!="function")return null;var r=null;return Object.keys(e).forEach(a=>{var o=e[a];Nl(a)&&typeof o=="function"&&(r||(r={}),r[a]=sx(o,t,n))}),r};function $u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function lx(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?$u(Object(n),!0).forEach(function(r){cx(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$u(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function cx(e,t,n){return(t=ux(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ux(e){var t=dx(e,"string");return typeof t=="symbol"?t:t+""}function dx(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function pt(e,t){var n=lx({},e),r=t,a=Object.keys(t),o=a.reduce((s,l)=>(s[l]===void 0&&r[l]!==void 0&&(s[l]=r[l]),s),n);return o}var _p={},Wp={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n,r){const a=new Map;for(let o=0;o<n.length;o++){const s=n[o],l=r(s);a.has(l)||a.set(l,s)}return Array.from(a.values())}e.uniqBy=t})(Wp);var $l={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n){return n}e.identity=t})($l);var Lp={},Vo={},Fp={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n){return Number.isSafeInteger(n)&&n>=0}e.isLength=t})(Fp);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Fp;function n(r){return r!=null&&typeof r!="function"&&t.isLength(r.length)}e.isArrayLike=n})(Vo);var Hp={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n){return typeof n=="object"&&n!==null}e.isObjectLike=t})(Hp);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Vo,n=Hp;function r(a){return n.isObjectLike(a)&&t.isArrayLike(a)}e.isArrayLikeObject=r})(Lp);var Yp={},zp={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=qo;function n(r){return function(a){return t.get(a,r)}}e.property=n})(zp);var Gp={},Dl={},qp={},Bl={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n){return n!==null&&(typeof n=="object"||typeof n=="function")}e.isObject=t})(Bl);var Rl={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n){return n==null||typeof n!="object"&&typeof n!="function"}e.isPrimitive=t})(Rl);var _l={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n,r){return n===r||Number.isNaN(n)&&Number.isNaN(r)}e.eq=t})(_l);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Bl,n=Rl,r=_l;function a(d,h,m){return typeof m!="function"?a(d,h,()=>{}):o(d,h,function p(g,b,y,v,x,k){const I=m(g,b,y,v,x,k);return I!==void 0?!!I:o(g,b,p,k)},new Map)}function o(d,h,m,p){if(h===d)return!0;switch(typeof h){case"object":return s(d,h,m,p);case"function":return Object.keys(h).length>0?o(d,{...h},m,p):r.eq(d,h);default:return t.isObject(d)?typeof h=="string"?h==="":!0:r.eq(d,h)}}function s(d,h,m,p){if(h==null)return!0;if(Array.isArray(h))return c(d,h,m,p);if(h instanceof Map)return l(d,h,m,p);if(h instanceof Set)return u(d,h,m,p);const g=Object.keys(h);if(d==null||n.isPrimitive(d))return g.length===0;if(g.length===0)return!0;if(p!=null&&p.has(h))return p.get(h)===d;p==null||p.set(h,d);try{for(let b=0;b<g.length;b++){const y=g[b];if(!n.isPrimitive(d)&&!(y in d)||h[y]===void 0&&d[y]!==void 0||h[y]===null&&d[y]!==null||!m(d[y],h[y],y,d,h,p))return!1}return!0}finally{p==null||p.delete(h)}}function l(d,h,m,p){if(h.size===0)return!0;if(!(d instanceof Map))return!1;for(const[g,b]of h.entries()){const y=d.get(g);if(m(y,b,g,d,h,p)===!1)return!1}return!0}function c(d,h,m,p){if(h.length===0)return!0;if(!Array.isArray(d))return!1;const g=new Set;for(let b=0;b<h.length;b++){const y=h[b];let v=!1;for(let x=0;x<d.length;x++){if(g.has(x))continue;const k=d[x];let I=!1;if(m(k,y,b,d,h,p)&&(I=!0),I){g.add(x),v=!0;break}}if(!v)return!1}return!0}function u(d,h,m,p){return h.size===0?!0:d instanceof Set?c([...d],[...h],m,p):!1}e.isMatchWith=a,e.isSetMatch=u})(qp);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=qp;function n(r,a){return t.isMatchWith(r,a,()=>{})}e.isMatch=n})(Dl);var Up={},Wl={},Kp={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n){return Object.getOwnPropertySymbols(n).filter(r=>Object.prototype.propertyIsEnumerable.call(n,r))}e.getSymbols=t})(Kp);var Ll={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n){return n==null?n===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(n)}e.getTag=t})(Ll);var Fl={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t="[object RegExp]",n="[object String]",r="[object Number]",a="[object Boolean]",o="[object Arguments]",s="[object Symbol]",l="[object Date]",c="[object Map]",u="[object Set]",d="[object Array]",h="[object Function]",m="[object ArrayBuffer]",p="[object Object]",g="[object Error]",b="[object DataView]",y="[object Uint8Array]",v="[object Uint8ClampedArray]",x="[object Uint16Array]",k="[object Uint32Array]",I="[object BigUint64Array]",w="[object Int8Array]",T="[object Int16Array]",j="[object Int32Array]",E="[object BigInt64Array]",O="[object Float32Array]",$="[object Float64Array]";e.argumentsTag=o,e.arrayBufferTag=m,e.arrayTag=d,e.bigInt64ArrayTag=E,e.bigUint64ArrayTag=I,e.booleanTag=a,e.dataViewTag=b,e.dateTag=l,e.errorTag=g,e.float32ArrayTag=O,e.float64ArrayTag=$,e.functionTag=h,e.int16ArrayTag=T,e.int32ArrayTag=j,e.int8ArrayTag=w,e.mapTag=c,e.numberTag=r,e.objectTag=p,e.regexpTag=t,e.setTag=u,e.stringTag=n,e.symbolTag=s,e.uint16ArrayTag=x,e.uint32ArrayTag=k,e.uint8ArrayTag=y,e.uint8ClampedArrayTag=v})(Fl);var Vp={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}e.isTypedArray=t})(Vp);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Kp,n=Ll,r=Fl,a=Rl,o=Vp;function s(d,h){return l(d,void 0,d,new Map,h)}function l(d,h,m,p=new Map,g=void 0){const b=g==null?void 0:g(d,h,m,p);if(b!==void 0)return b;if(a.isPrimitive(d))return d;if(p.has(d))return p.get(d);if(Array.isArray(d)){const y=new Array(d.length);p.set(d,y);for(let v=0;v<d.length;v++)y[v]=l(d[v],v,m,p,g);return Object.hasOwn(d,"index")&&(y.index=d.index),Object.hasOwn(d,"input")&&(y.input=d.input),y}if(d instanceof Date)return new Date(d.getTime());if(d instanceof RegExp){const y=new RegExp(d.source,d.flags);return y.lastIndex=d.lastIndex,y}if(d instanceof Map){const y=new Map;p.set(d,y);for(const[v,x]of d)y.set(v,l(x,v,m,p,g));return y}if(d instanceof Set){const y=new Set;p.set(d,y);for(const v of d)y.add(l(v,void 0,m,p,g));return y}if(typeof Buffer<"u"&&Buffer.isBuffer(d))return d.subarray();if(o.isTypedArray(d)){const y=new(Object.getPrototypeOf(d)).constructor(d.length);p.set(d,y);for(let v=0;v<d.length;v++)y[v]=l(d[v],v,m,p,g);return y}if(d instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&d instanceof SharedArrayBuffer)return d.slice(0);if(d instanceof DataView){const y=new DataView(d.buffer.slice(0),d.byteOffset,d.byteLength);return p.set(d,y),c(y,d,m,p,g),y}if(typeof File<"u"&&d instanceof File){const y=new File([d],d.name,{type:d.type});return p.set(d,y),c(y,d,m,p,g),y}if(typeof Blob<"u"&&d instanceof Blob){const y=new Blob([d],{type:d.type});return p.set(d,y),c(y,d,m,p,g),y}if(d instanceof Error){const y=new d.constructor;return p.set(d,y),y.message=d.message,y.name=d.name,y.stack=d.stack,y.cause=d.cause,c(y,d,m,p,g),y}if(d instanceof Boolean){const y=new Boolean(d.valueOf());return p.set(d,y),c(y,d,m,p,g),y}if(d instanceof Number){const y=new Number(d.valueOf());return p.set(d,y),c(y,d,m,p,g),y}if(d instanceof String){const y=new String(d.valueOf());return p.set(d,y),c(y,d,m,p,g),y}if(typeof d=="object"&&u(d)){const y=Object.create(Object.getPrototypeOf(d));return p.set(d,y),c(y,d,m,p,g),y}return d}function c(d,h,m=d,p,g){const b=[...Object.keys(h),...t.getSymbols(h)];for(let y=0;y<b.length;y++){const v=b[y],x=Object.getOwnPropertyDescriptor(d,v);(x==null||x.writable)&&(d[v]=l(h[v],v,m,p,g))}}function u(d){switch(n.getTag(d)){case r.argumentsTag:case r.arrayTag:case r.arrayBufferTag:case r.dataViewTag:case r.booleanTag:case r.dateTag:case r.float32ArrayTag:case r.float64ArrayTag:case r.int8ArrayTag:case r.int16ArrayTag:case r.int32ArrayTag:case r.mapTag:case r.numberTag:case r.objectTag:case r.regexpTag:case r.setTag:case r.stringTag:case r.symbolTag:case r.uint8ArrayTag:case r.uint8ClampedArrayTag:case r.uint16ArrayTag:case r.uint32ArrayTag:return!0;default:return!1}}e.cloneDeepWith=s,e.cloneDeepWithImpl=l,e.copyProperties=c})(Wl);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Wl;function n(r){return t.cloneDeepWithImpl(r,void 0,r,new Map,void 0)}e.cloneDeep=n})(Up);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Dl,n=Up;function r(a){return a=n.cloneDeep(a),o=>t.isMatch(o,a)}e.matches=r})(Gp);var Jp={},Zp={},Xp={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Wl,n=Fl;function r(a,o){return t.cloneDeepWith(a,(s,l,c,u)=>{const d=o==null?void 0:o(s,l,c,u);if(d!==void 0)return d;if(typeof a=="object")switch(Object.prototype.toString.call(a)){case n.numberTag:case n.stringTag:case n.booleanTag:{const h=new a.constructor(a==null?void 0:a.valueOf());return t.copyProperties(h,a),h}case n.argumentsTag:{const h={};return t.copyProperties(h,a),h.length=a.length,h[Symbol.iterator]=a[Symbol.iterator],h}default:return}})}e.cloneDeepWith=r})(Xp);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Xp;function n(r){return t.cloneDeepWith(r)}e.cloneDeep=n})(Zp);var Qp={},Hl={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=/^(?:0|[1-9]\d*)$/;function n(r,a=Number.MAX_SAFE_INTEGER){switch(typeof r){case"number":return Number.isInteger(r)&&r>=0&&r<a;case"symbol":return!1;case"string":return t.test(r)}}e.isIndex=n})(Hl);var eg={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Ll;function n(r){return r!==null&&typeof r=="object"&&t.getTag(r)==="[object Arguments]"}e.isArguments=n})(eg);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=El,n=Hl,r=eg,a=Ko;function o(s,l){let c;if(Array.isArray(l)?c=l:typeof l=="string"&&t.isDeepKey(l)&&(s==null?void 0:s[l])==null?c=a.toPath(l):c=[l],c.length===0)return!1;let u=s;for(let d=0;d<c.length;d++){const h=c[d];if((u==null||!Object.hasOwn(u,h))&&!((Array.isArray(u)||r.isArguments(u))&&n.isIndex(h)&&h<u.length))return!1;u=u[h]}return!0}e.has=o})(Qp);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Dl,n=Uo,r=Zp,a=qo,o=Qp;function s(l,c){switch(typeof l){case"object":{Object.is(l==null?void 0:l.valueOf(),-0)&&(l="-0");break}case"number":{l=n.toKey(l);break}}return c=r.cloneDeep(c),function(u){const d=a.get(u,l);return d===void 0?o.has(u,l):c===void 0?d===void 0:t.isMatch(d,c)}}e.matchesProperty=s})(Jp);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=$l,n=zp,r=Gp,a=Jp;function o(s){if(s==null)return t.identity;switch(typeof s){case"function":return s;case"object":return Array.isArray(s)&&s.length===2?a.matchesProperty(s[0],s[1]):r.matches(s);case"string":case"symbol":case"number":return n.property(s)}}e.iteratee=o})(Yp);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Wp,n=$l,r=Lp,a=Yp;function o(s,l=n.identity){return r.isArrayLikeObject(s)?t.uniqBy(Array.from(s),a.iteratee(l)):[]}e.uniqBy=o})(_p);var hx=_p.uniqBy;const Du=It(hx);function mx(e,t,n){return t===!0?Du(e,n):typeof t=="function"?Du(e,t):e}var tg={exports:{}},ng={},rg={exports:{}},ag={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ar=f;function px(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gx=typeof Object.is=="function"?Object.is:px,fx=ar.useState,yx=ar.useEffect,bx=ar.useLayoutEffect,vx=ar.useDebugValue;function wx(e,t){var n=t(),r=fx({inst:{value:n,getSnapshot:t}}),a=r[0].inst,o=r[1];return bx(function(){a.value=n,a.getSnapshot=t,Ji(a)&&o({inst:a})},[e,n,t]),yx(function(){return Ji(a)&&o({inst:a}),e(function(){Ji(a)&&o({inst:a})})},[e]),vx(n),n}function Ji(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!gx(e,n)}catch{return!0}}function xx(e,t){return t()}var kx=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?xx:wx;ag.useSyncExternalStore=ar.useSyncExternalStore!==void 0?ar.useSyncExternalStore:kx;rg.exports=ag;var Tx=rg.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jo=f,Ix=Tx;function jx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ax=typeof Object.is=="function"?Object.is:jx,Nx=Ix.useSyncExternalStore,Sx=Jo.useRef,Px=Jo.useEffect,Cx=Jo.useMemo,Ox=Jo.useDebugValue;ng.useSyncExternalStoreWithSelector=function(e,t,n,r,a){var o=Sx(null);if(o.current===null){var s={hasValue:!1,value:null};o.current=s}else s=o.current;o=Cx(function(){function c(p){if(!u){if(u=!0,d=p,p=r(p),a!==void 0&&s.hasValue){var g=s.value;if(a(g,p))return h=g}return h=p}if(g=h,Ax(d,p))return g;var b=r(p);return a!==void 0&&a(g,b)?(d=p,g):(d=p,h=b)}var u=!1,d,h,m=n===void 0?null:n;return[function(){return c(t())},m===null?void 0:function(){return c(m())}]},[t,n,r,a]);var l=Nx(e,o[0],o[1]);return Px(function(){s.hasValue=!0,s.value=l},[l]),Ox(l),l};tg.exports=ng;var Ex=tg.exports,Yl=f.createContext(null),Mx=e=>e,ge=()=>{var e=f.useContext(Yl);return e?e.store.dispatch:Mx},za=()=>{},$x=()=>za,Dx=(e,t)=>e===t;function V(e){var t=f.useContext(Yl);return Ex.useSyncExternalStoreWithSelector(t?t.subscription.addNestedSub:$x,t?t.store.getState:za,t?t.store.getState:za,t?e:za,Dx)}function Bx(e,t=`expected a function, instead received ${typeof e}`){if(typeof e!="function")throw new TypeError(t)}function Rx(e,t=`expected an object, instead received ${typeof e}`){if(typeof e!="object")throw new TypeError(t)}function _x(e,t="expected all items to be functions, instead received the following types: "){if(!e.every(n=>typeof n=="function")){const n=e.map(r=>typeof r=="function"?`function ${r.name||"unnamed"}()`:typeof r).join(", ");throw new TypeError(`${t}[${n}]`)}}var Bu=e=>Array.isArray(e)?e:[e];function Wx(e){const t=Array.isArray(e[0])?e[0]:e;return _x(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}function Lx(e,t){const n=[],{length:r}=e;for(let a=0;a<r;a++)n.push(e[a].apply(null,t));return n}var Fx=class{constructor(e){this.value=e}deref(){return this.value}},Hx=typeof WeakRef<"u"?WeakRef:Fx,Yx=0,Ru=1;function Aa(){return{s:Yx,v:void 0,o:null,p:null}}function og(e,t={}){let n=Aa();const{resultEqualityCheck:r}=t;let a,o=0;function s(){var h;let l=n;const{length:c}=arguments;for(let m=0,p=c;m<p;m++){const g=arguments[m];if(typeof g=="function"||typeof g=="object"&&g!==null){let b=l.o;b===null&&(l.o=b=new WeakMap);const y=b.get(g);y===void 0?(l=Aa(),b.set(g,l)):l=y}else{let b=l.p;b===null&&(l.p=b=new Map);const y=b.get(g);y===void 0?(l=Aa(),b.set(g,l)):l=y}}const u=l;let d;if(l.s===Ru)d=l.v;else if(d=e.apply(null,arguments),o++,r){const m=((h=a==null?void 0:a.deref)==null?void 0:h.call(a))??a;m!=null&&r(m,d)&&(d=m,o!==0&&o--),a=typeof d=="object"&&d!==null||typeof d=="function"?new Hx(d):d}return u.s=Ru,u.v=d,d}return s.clearCache=()=>{n=Aa(),s.resetResultsCount()},s.resultsCount=()=>o,s.resetResultsCount=()=>{o=0},s}function zx(e,...t){const n=typeof e=="function"?{memoize:e,memoizeOptions:t}:e,r=(...a)=>{let o=0,s=0,l,c={},u=a.pop();typeof u=="object"&&(c=u,u=a.pop()),Bx(u,`createSelector expects an output function after the inputs, but received: [${typeof u}]`);const d={...n,...c},{memoize:h,memoizeOptions:m=[],argsMemoize:p=og,argsMemoizeOptions:g=[],devModeChecks:b={}}=d,y=Bu(m),v=Bu(g),x=Wx(a),k=h(function(){return o++,u.apply(null,arguments)},...y),I=p(function(){s++;const T=Lx(x,arguments);return l=k.apply(null,T),l},...v);return Object.assign(I,{resultFunc:u,memoizedResultFunc:k,dependencies:x,dependencyRecomputations:()=>s,resetDependencyRecomputations:()=>{s=0},lastResult:()=>l,recomputations:()=>o,resetRecomputations:()=>{o=0},memoize:h,argsMemoize:p})};return Object.assign(r,{withTypes:()=>r}),r}var S=zx(og),Gx=Object.assign((e,t=S)=>{Rx(e,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);const n=Object.keys(e),r=n.map(o=>e[o]);return t(r,(...o)=>o.reduce((s,l,c)=>(s[n[c]]=l,s),{}))},{withTypes:()=>Gx}),ig={},sg={},lg={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){return typeof r=="symbol"?1:r===null?2:r===void 0?3:r!==r?4:0}const n=(r,a,o)=>{if(r!==a){const s=t(r),l=t(a);if(s===l&&s===0){if(r<a)return o==="desc"?1:-1;if(r>a)return o==="desc"?-1:1}return o==="desc"?l-s:s-l}return 0};e.compareValues=n})(lg);var cg={},zl={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n){return typeof n=="symbol"||n instanceof Symbol}e.isSymbol=t})(zl);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=zl,n=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,r=/^\w*$/;function a(o,s){return Array.isArray(o)?!1:typeof o=="number"||typeof o=="boolean"||o==null||t.isSymbol(o)?!0:typeof o=="string"&&(r.test(o)||!n.test(o))||s!=null&&Object.hasOwn(s,o)}e.isKey=a})(cg);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=lg,n=cg,r=Ko;function a(o,s,l,c){if(o==null)return[];l=c?void 0:l,Array.isArray(o)||(o=Object.values(o)),Array.isArray(s)||(s=s==null?[null]:[s]),s.length===0&&(s=[null]),Array.isArray(l)||(l=l==null?[]:[l]),l=l.map(p=>String(p));const u=(p,g)=>{let b=p;for(let y=0;y<g.length&&b!=null;++y)b=b[g[y]];return b},d=(p,g)=>g==null||p==null?g:typeof p=="object"&&"key"in p?Object.hasOwn(g,p.key)?g[p.key]:u(g,p.path):typeof p=="function"?p(g):Array.isArray(p)?u(g,p):typeof g=="object"?g[p]:g,h=s.map(p=>(Array.isArray(p)&&p.length===1&&(p=p[0]),p==null||typeof p=="function"||Array.isArray(p)||n.isKey(p)?p:{key:p,path:r.toPath(p)}));return o.map(p=>({original:p,criteria:h.map(g=>d(g,p))})).slice().sort((p,g)=>{for(let b=0;b<h.length;b++){const y=t.compareValues(p.criteria[b],g.criteria[b],l[b]);if(y!==0)return y}return 0}).map(p=>p.original)}e.orderBy=a})(sg);var ug={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n,r=1){const a=[],o=Math.floor(r),s=(l,c)=>{for(let u=0;u<l.length;u++){const d=l[u];Array.isArray(d)&&c<o?s(d,c+1):a.push(d)}};return s(n,0),a}e.flatten=t})(ug);var Gl={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Hl,n=Vo,r=Bl,a=_l;function o(s,l,c){return r.isObject(c)&&(typeof l=="number"&&n.isArrayLike(c)&&t.isIndex(l)&&l<c.length||typeof l=="string"&&l in c)?a.eq(c[l],s):!1}e.isIterateeCall=o})(Gl);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=sg,n=ug,r=Gl;function a(o,...s){const l=s.length;return l>1&&r.isIterateeCall(o,s[0],s[1])?s=[]:l>2&&r.isIterateeCall(s[0],s[1],s[2])&&(s=[s[0]]),t.orderBy(o,n.flatten(s),["asc"])}e.sortBy=a})(ig);var qx=ig.sortBy;const Zo=It(qx);var dg=e=>e.legend.settings,Ux=e=>e.legend.size,Kx=e=>e.legend.payload;S([Kx,dg],(e,t)=>{var{itemSorter:n}=t,r=e.flat(1);return n?Zo(r,n):r});var Na=1;function Vx(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],[t,n]=f.useState({height:0,left:0,top:0,width:0}),r=f.useCallback(a=>{if(a!=null){var o=a.getBoundingClientRect(),s={height:o.height,left:o.left,top:o.top,width:o.width};(Math.abs(s.height-t.height)>Na||Math.abs(s.left-t.left)>Na||Math.abs(s.top-t.top)>Na||Math.abs(s.width-t.width)>Na)&&n({height:s.height,left:s.left,top:s.top,width:s.width})}},[t.width,t.height,t.top,t.left,...e]);return[t,r]}function Me(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var Jx=(()=>typeof Symbol=="function"&&Symbol.observable||"@@observable")(),_u=Jx,Zi=()=>Math.random().toString(36).substring(7).split("").join("."),Zx={INIT:`@@redux/INIT${Zi()}`,REPLACE:`@@redux/REPLACE${Zi()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Zi()}`},eo=Zx;function ql(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function hg(e,t,n){if(typeof e!="function")throw new Error(Me(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Me(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Me(1));return n(hg)(e,t)}let r=e,a=t,o=new Map,s=o,l=0,c=!1;function u(){s===o&&(s=new Map,o.forEach((y,v)=>{s.set(v,y)}))}function d(){if(c)throw new Error(Me(3));return a}function h(y){if(typeof y!="function")throw new Error(Me(4));if(c)throw new Error(Me(5));let v=!0;u();const x=l++;return s.set(x,y),function(){if(v){if(c)throw new Error(Me(6));v=!1,u(),s.delete(x),o=null}}}function m(y){if(!ql(y))throw new Error(Me(7));if(typeof y.type>"u")throw new Error(Me(8));if(typeof y.type!="string")throw new Error(Me(17));if(c)throw new Error(Me(9));try{c=!0,a=r(a,y)}finally{c=!1}return(o=s).forEach(x=>{x()}),y}function p(y){if(typeof y!="function")throw new Error(Me(10));r=y,m({type:eo.REPLACE})}function g(){const y=h;return{subscribe(v){if(typeof v!="object"||v===null)throw new Error(Me(11));function x(){const I=v;I.next&&I.next(d())}return x(),{unsubscribe:y(x)}},[_u](){return this}}}return m({type:eo.INIT}),{dispatch:m,subscribe:h,getState:d,replaceReducer:p,[_u]:g}}function Xx(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:eo.INIT})>"u")throw new Error(Me(12));if(typeof n(void 0,{type:eo.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Me(13))})}function mg(e){const t=Object.keys(e),n={};for(let o=0;o<t.length;o++){const s=t[o];typeof e[s]=="function"&&(n[s]=e[s])}const r=Object.keys(n);let a;try{Xx(n)}catch(o){a=o}return function(s={},l){if(a)throw a;let c=!1;const u={};for(let d=0;d<r.length;d++){const h=r[d],m=n[h],p=s[h],g=m(p,l);if(typeof g>"u")throw l&&l.type,new Error(Me(14));u[h]=g,c=c||g!==p}return c=c||r.length!==Object.keys(s).length,c?u:s}}function to(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...r)=>t(n(...r)))}function Qx(...e){return t=>(n,r)=>{const a=t(n,r);let o=()=>{throw new Error(Me(15))};const s={getState:a.getState,dispatch:(c,...u)=>o(c,...u)},l=e.map(c=>c(s));return o=to(...l)(a.dispatch),{...a,dispatch:o}}}function pg(e){return ql(e)&&"type"in e&&typeof e.type=="string"}var gg=Symbol.for("immer-nothing"),Wu=Symbol.for("immer-draftable"),Ke=Symbol.for("immer-state");function yt(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var tt=Object,or=tt.getPrototypeOf,no="constructor",Xo="prototype",Es="configurable",ro="enumerable",Ga="writable",_r="value",zt=e=>!!e&&!!e[Ke];function Tt(e){var t;return e?fg(e)||Qo(e)||!!e[Wu]||!!((t=e[no])!=null&&t[Wu])||ei(e)||ti(e):!1}var ek=tt[Xo][no].toString(),Lu=new WeakMap;function fg(e){if(!e||!Ul(e))return!1;const t=or(e);if(t===null||t===tt[Xo])return!0;const n=tt.hasOwnProperty.call(t,no)&&t[no];if(n===Object)return!0;if(!qn(n))return!1;let r=Lu.get(n);return r===void 0&&(r=Function.toString.call(n),Lu.set(n,r)),r===ek}function na(e,t,n=!0){ra(e)===0?(n?Reflect.ownKeys(e):tt.keys(e)).forEach(a=>{t(a,e[a],e)}):e.forEach((r,a)=>t(a,r,e))}function ra(e){const t=e[Ke];return t?t.type_:Qo(e)?1:ei(e)?2:ti(e)?3:0}var Fu=(e,t,n=ra(e))=>n===2?e.has(t):tt[Xo].hasOwnProperty.call(e,t),Ms=(e,t,n=ra(e))=>n===2?e.get(t):e[t],ao=(e,t,n,r=ra(e))=>{r===2?e.set(t,n):r===3?e.add(n):e[t]=n};function tk(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}var Qo=Array.isArray,ei=e=>e instanceof Map,ti=e=>e instanceof Set,Ul=e=>typeof e=="object",qn=e=>typeof e=="function",Xi=e=>typeof e=="boolean";function nk(e){const t=+e;return Number.isInteger(t)&&String(t)===e}var Bt=e=>e.copy_||e.base_,Kl=e=>e.modified_?e.copy_:e.base_;function $s(e,t){if(ei(e))return new Map(e);if(ti(e))return new Set(e);if(Qo(e))return Array[Xo].slice.call(e);const n=fg(e);if(t===!0||t==="class_only"&&!n){const r=tt.getOwnPropertyDescriptors(e);delete r[Ke];let a=Reflect.ownKeys(r);for(let o=0;o<a.length;o++){const s=a[o],l=r[s];l[Ga]===!1&&(l[Ga]=!0,l[Es]=!0),(l.get||l.set)&&(r[s]={[Es]:!0,[Ga]:!0,[ro]:l[ro],[_r]:e[s]})}return tt.create(or(e),r)}else{const r=or(e);if(r!==null&&n)return{...e};const a=tt.create(r);return tt.assign(a,e)}}function Vl(e,t=!1){return ni(e)||zt(e)||!Tt(e)||(ra(e)>1&&tt.defineProperties(e,{set:Sa,add:Sa,clear:Sa,delete:Sa}),tt.freeze(e),t&&na(e,(n,r)=>{Vl(r,!0)},!1)),e}function rk(){yt(2)}var Sa={[_r]:rk};function ni(e){return e===null||!Ul(e)?!0:tt.isFrozen(e)}var oo="MapSet",Ds="Patches",Hu="ArrayMethods",yg={};function Cn(e){const t=yg[e];return t||yt(0,e),t}var Yu=e=>!!yg[e],Wr,bg=()=>Wr,ak=(e,t)=>({drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0,handledSet_:new Set,processedForPatches_:new Set,mapSetPlugin_:Yu(oo)?Cn(oo):void 0,arrayMethodsPlugin_:Yu(Hu)?Cn(Hu):void 0});function zu(e,t){t&&(e.patchPlugin_=Cn(Ds),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Bs(e){Rs(e),e.drafts_.forEach(ok),e.drafts_=null}function Rs(e){e===Wr&&(Wr=e.parent_)}var Gu=e=>Wr=ak(Wr,e);function ok(e){const t=e[Ke];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function qu(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];if(e!==void 0&&e!==n){n[Ke].modified_&&(Bs(t),yt(4)),Tt(e)&&(e=Uu(t,e));const{patchPlugin_:a}=t;a&&a.generateReplacementPatches_(n[Ke].base_,e,t)}else e=Uu(t,n);return ik(t,e,!0),Bs(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==gg?e:void 0}function Uu(e,t){if(ni(t))return t;const n=t[Ke];if(!n)return Jl(t,e.handledSet_,e);if(!ri(n,e))return t;if(!n.modified_)return n.base_;if(!n.finalized_){const{callbacks_:r}=n;if(r)for(;r.length>0;)r.pop()(e);xg(n,e)}return n.copy_}function ik(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Vl(t,n)}function vg(e){e.finalized_=!0,e.scope_.unfinalizedDrafts_--}var ri=(e,t)=>e.scope_===t,sk=[];function wg(e,t,n,r){const a=Bt(e),o=e.type_;if(r!==void 0&&Ms(a,r,o)===t){ao(a,r,n,o);return}if(!e.draftLocations_){const l=e.draftLocations_=new Map;na(a,(c,u)=>{if(zt(u)){const d=l.get(u)||[];d.push(c),l.set(u,d)}})}const s=e.draftLocations_.get(t)??sk;for(const l of s)ao(a,l,n,o)}function lk(e,t,n){e.callbacks_.push(function(a){var l;const o=t;if(!o||!ri(o,a))return;(l=a.mapSetPlugin_)==null||l.fixSetContents(o);const s=Kl(o);wg(e,o.draft_??o,s,n),xg(o,a)})}function xg(e,t){var r;if(e.modified_&&!e.finalized_&&(e.type_===3||e.type_===1&&e.allIndicesReassigned_||(((r=e.assigned_)==null?void 0:r.size)??0)>0)){const{patchPlugin_:a}=t;if(a){const o=a.getPath(e);o&&a.generatePatches_(e,o,t)}vg(e)}}function ck(e,t,n){const{scope_:r}=e;if(zt(n)){const a=n[Ke];ri(a,r)&&a.callbacks_.push(function(){qa(e);const s=Kl(a);wg(e,n,s,t)})}else Tt(n)&&e.callbacks_.push(function(){const o=Bt(e);Ms(o,t,e.type_)===n&&r.drafts_.length>1&&(e.assigned_.get(t)??!1)===!0&&e.copy_&&Jl(Ms(e.copy_,t,e.type_),r.handledSet_,r)})}function Jl(e,t,n){return!n.immer_.autoFreeze_&&n.unfinalizedDrafts_<1||zt(e)||t.has(e)||!Tt(e)||ni(e)||(t.add(e),na(e,(r,a)=>{if(zt(a)){const o=a[Ke];if(ri(o,n)){const s=Kl(o);ao(e,r,s,e.type_),vg(o)}}else Tt(a)&&Jl(a,t,n)})),e}function uk(e,t){const n=Qo(e),r={type_:n?1:0,scope_:t?t.scope_:bg(),modified_:!1,finalized_:!1,assigned_:void 0,parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1,callbacks_:void 0};let a=r,o=Zl;n&&(a=[r],o=Lr);const{revoke:s,proxy:l}=Proxy.revocable(a,o);return r.draft_=l,r.revoke_=s,[l,r]}var Zl={get(e,t){if(t===Ke)return e;let n=e.scope_.arrayMethodsPlugin_;const r=e.type_===1&&typeof t=="string";if(r&&n!=null&&n.isArrayOperationMethod(t))return n.createMethodInterceptor(e,t);const a=Bt(e);if(!Fu(a,t,e.type_))return dk(e,a,t);const o=a[t];if(e.finalized_||!Tt(o)||r&&e.operationMethod&&(n!=null&&n.isMutatingArrayMethod(e.operationMethod))&&nk(t))return o;if(o===Qi(e.base_,t)){qa(e);const s=e.type_===1?+t:t,l=Ws(e.scope_,o,e,s);return e.copy_[s]=l}return o},has(e,t){return t in Bt(e)},ownKeys(e){return Reflect.ownKeys(Bt(e))},set(e,t,n){const r=kg(Bt(e),t);if(r!=null&&r.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const a=Qi(Bt(e),t),o=a==null?void 0:a[Ke];if(o&&o.base_===n)return e.copy_[t]=n,e.assigned_.set(t,!1),!0;if(tk(n,a)&&(n!==void 0||Fu(e.base_,t,e.type_)))return!0;qa(e),_s(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_.set(t,!0),ck(e,t,n)),!0},deleteProperty(e,t){return qa(e),Qi(e.base_,t)!==void 0||t in e.base_?(e.assigned_.set(t,!1),_s(e)):e.assigned_.delete(t),e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=Bt(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{[Ga]:!0,[Es]:e.type_!==1||t!=="length",[ro]:r[ro],[_r]:n[t]}},defineProperty(){yt(11)},getPrototypeOf(e){return or(e.base_)},setPrototypeOf(){yt(12)}},Lr={};na(Zl,(e,t)=>{Lr[e]=function(){const n=arguments;return n[0]=n[0][0],t.apply(this,n)}});Lr.deleteProperty=function(e,t){return Lr.set.call(this,e,t,void 0)};Lr.set=function(e,t,n){return Zl.set.call(this,e[0],t,n,e[0])};function Qi(e,t){const n=e[Ke];return(n?Bt(n):e)[t]}function dk(e,t,n){var a;const r=kg(t,n);return r?_r in r?r[_r]:(a=r.get)==null?void 0:a.call(e.draft_):void 0}function kg(e,t){if(!(t in e))return;let n=or(e);for(;n;){const r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=or(n)}}function _s(e){e.modified_||(e.modified_=!0,e.parent_&&_s(e.parent_))}function qa(e){e.copy_||(e.assigned_=new Map,e.copy_=$s(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var hk=class{constructor(t){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!1,this.produce=(n,r,a)=>{if(qn(n)&&!qn(r)){const s=r;r=n;const l=this;return function(u=s,...d){return l.produce(u,h=>r.call(this,h,...d))}}qn(r)||yt(6),a!==void 0&&!qn(a)&&yt(7);let o;if(Tt(n)){const s=Gu(this),l=Ws(s,n,void 0);let c=!0;try{o=r(l),c=!1}finally{c?Bs(s):Rs(s)}return zu(s,a),qu(o,s)}else if(!n||!Ul(n)){if(o=r(n),o===void 0&&(o=n),o===gg&&(o=void 0),this.autoFreeze_&&Vl(o,!0),a){const s=[],l=[];Cn(Ds).generateReplacementPatches_(n,o,{patches_:s,inversePatches_:l}),a(s,l)}return o}else yt(1,n)},this.produceWithPatches=(n,r)=>{if(qn(n))return(l,...c)=>this.produceWithPatches(l,u=>n(u,...c));let a,o;return[this.produce(n,r,(l,c)=>{a=l,o=c}),a,o]},Xi(t==null?void 0:t.autoFreeze)&&this.setAutoFreeze(t.autoFreeze),Xi(t==null?void 0:t.useStrictShallowCopy)&&this.setUseStrictShallowCopy(t.useStrictShallowCopy),Xi(t==null?void 0:t.useStrictIteration)&&this.setUseStrictIteration(t.useStrictIteration)}createDraft(t){Tt(t)||yt(8),zt(t)&&(t=xt(t));const n=Gu(this),r=Ws(n,t,void 0);return r[Ke].isManual_=!0,Rs(n),r}finishDraft(t,n){const r=t&&t[Ke];(!r||!r.isManual_)&&yt(9);const{scope_:a}=r;return zu(a,n),qu(void 0,a)}setAutoFreeze(t){this.autoFreeze_=t}setUseStrictShallowCopy(t){this.useStrictShallowCopy_=t}setUseStrictIteration(t){this.useStrictIteration_=t}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(t,n){let r;for(r=n.length-1;r>=0;r--){const o=n[r];if(o.path.length===0&&o.op==="replace"){t=o.value;break}}r>-1&&(n=n.slice(r+1));const a=Cn(Ds).applyPatches_;return zt(t)?a(t,n):this.produce(t,o=>a(o,n))}};function Ws(e,t,n,r){const[a,o]=ei(t)?Cn(oo).proxyMap_(t,n):ti(t)?Cn(oo).proxySet_(t,n):uk(t,n);return((n==null?void 0:n.scope_)??bg()).drafts_.push(a),o.callbacks_=(n==null?void 0:n.callbacks_)??[],o.key_=r,n&&r!==void 0?lk(n,o,r):o.callbacks_.push(function(c){var d;(d=c.mapSetPlugin_)==null||d.fixSetContents(o);const{patchPlugin_:u}=c;o.modified_&&u&&u.generatePatches_(o,[],c)}),a}function xt(e){return zt(e)||yt(10,e),Tg(e)}function Tg(e){if(!Tt(e)||ni(e))return e;const t=e[Ke];let n,r=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=$s(e,t.scope_.immer_.useStrictShallowCopy_),r=t.scope_.immer_.shouldUseStrictIteration()}else n=$s(e,!0);return na(n,(a,o)=>{ao(n,a,Tg(o))},r),t&&(t.finalized_=!1),n}var mk=new hk,Ig=mk.produce;function jg(e){return({dispatch:n,getState:r})=>a=>o=>typeof o=="function"?o(n,r,e):a(o)}var pk=jg(),gk=jg,fk=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?to:to.apply(null,arguments)};function ht(e,t){function n(...r){if(t){let a=t(...r);if(!a)throw new Error(nt(0));return{type:e,payload:a.payload,..."meta"in a&&{meta:a.meta},..."error"in a&&{error:a.error}}}return{type:e,payload:r[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=r=>pg(r)&&r.type===e,n}var Ag=class Mr extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,Mr.prototype)}static get[Symbol.species](){return Mr}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new Mr(...t[0].concat(this)):new Mr(...t.concat(this))}};function Ku(e){return Tt(e)?Ig(e,()=>{}):e}function Pa(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}function yk(e){return typeof e=="boolean"}var bk=()=>function(t){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:a=!0,actionCreatorCheck:o=!0}=t??{};let s=new Ag;return n&&(yk(n)?s.push(pk):s.push(gk(n.extraArgument))),s},Ng="RTK_autoBatch",ce=()=>e=>({payload:e,meta:{[Ng]:!0}}),Vu=e=>t=>{setTimeout(t,e)},Sg=(e={type:"raf"})=>t=>(...n)=>{const r=t(...n);let a=!0,o=!1,s=!1;const l=new Set,c=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:Vu(10):e.type==="callback"?e.queueNotification:Vu(e.timeout),u=()=>{s=!1,o&&(o=!1,l.forEach(d=>d()))};return Object.assign({},r,{subscribe(d){const h=()=>a&&d(),m=r.subscribe(h);return l.add(d),()=>{m(),l.delete(d)}},dispatch(d){var h;try{return a=!((h=d==null?void 0:d.meta)!=null&&h[Ng]),o=!a,o&&(s||(s=!0,c(u))),r.dispatch(d)}finally{a=!0}}})},vk=e=>function(n){const{autoBatch:r=!0}=n??{};let a=new Ag(e);return r&&a.push(Sg(typeof r=="object"?r:void 0)),a};function wk(e){const t=bk(),{reducer:n=void 0,middleware:r,devTools:a=!0,duplicateMiddlewareCheck:o=!0,preloadedState:s=void 0,enhancers:l=void 0}=e||{};let c;if(typeof n=="function")c=n;else if(ql(n))c=mg(n);else throw new Error(nt(1));let u;typeof r=="function"?u=r(t):u=t();let d=to;a&&(d=fk({trace:!1,...typeof a=="object"&&a}));const h=Qx(...u),m=vk(h);let p=typeof l=="function"?l(m):m();const g=d(...p);return hg(c,s,g)}function Pg(e){const t={},n=[];let r;const a={addCase(o,s){const l=typeof o=="string"?o:o.type;if(!l)throw new Error(nt(28));if(l in t)throw new Error(nt(29));return t[l]=s,a},addAsyncThunk(o,s){return s.pending&&(t[o.pending.type]=s.pending),s.rejected&&(t[o.rejected.type]=s.rejected),s.fulfilled&&(t[o.fulfilled.type]=s.fulfilled),s.settled&&n.push({matcher:o.settled,reducer:s.settled}),a},addMatcher(o,s){return n.push({matcher:o,reducer:s}),a},addDefaultCase(o){return r=o,a}};return e(a),[t,n,r]}function xk(e){return typeof e=="function"}function kk(e,t){let[n,r,a]=Pg(t),o;if(xk(e))o=()=>Ku(e());else{const l=Ku(e);o=()=>l}function s(l=o(),c){let u=[n[c.type],...r.filter(({matcher:d})=>d(c)).map(({reducer:d})=>d)];return u.filter(d=>!!d).length===0&&(u=[a]),u.reduce((d,h)=>{if(h)if(zt(d)){const p=h(d,c);return p===void 0?d:p}else{if(Tt(d))return Ig(d,m=>h(m,c));{const m=h(d,c);if(m===void 0){if(d===null)return d;throw Error("A case reducer on a non-draftable value must not return undefined")}return m}}return d},l)}return s.getInitialState=o,s}var Tk="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",Ik=(e=21)=>{let t="",n=e;for(;n--;)t+=Tk[Math.random()*64|0];return t},jk=Symbol.for("rtk-slice-createasyncthunk");function Ak(e,t){return`${e}/${t}`}function Nk({creators:e}={}){var n;const t=(n=e==null?void 0:e.asyncThunk)==null?void 0:n[jk];return function(a){const{name:o,reducerPath:s=o}=a;if(!o)throw new Error(nt(11));typeof process<"u";const l=(typeof a.reducers=="function"?a.reducers(Pk()):a.reducers)||{},c=Object.keys(l),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},d={addCase(I,w){const T=typeof I=="string"?I:I.type;if(!T)throw new Error(nt(12));if(T in u.sliceCaseReducersByType)throw new Error(nt(13));return u.sliceCaseReducersByType[T]=w,d},addMatcher(I,w){return u.sliceMatchers.push({matcher:I,reducer:w}),d},exposeAction(I,w){return u.actionCreators[I]=w,d},exposeCaseReducer(I,w){return u.sliceCaseReducersByName[I]=w,d}};c.forEach(I=>{const w=l[I],T={reducerName:I,type:Ak(o,I),createNotation:typeof a.reducers=="function"};Ok(w)?Mk(T,w,d,t):Ck(T,w,d)});function h(){const[I={},w=[],T=void 0]=typeof a.extraReducers=="function"?Pg(a.extraReducers):[a.extraReducers],j={...I,...u.sliceCaseReducersByType};return kk(a.initialState,E=>{for(let O in j)E.addCase(O,j[O]);for(let O of u.sliceMatchers)E.addMatcher(O.matcher,O.reducer);for(let O of w)E.addMatcher(O.matcher,O.reducer);T&&E.addDefaultCase(T)})}const m=I=>I,p=new Map,g=new WeakMap;let b;function y(I,w){return b||(b=h()),b(I,w)}function v(){return b||(b=h()),b.getInitialState()}function x(I,w=!1){function T(E){let O=E[I];return typeof O>"u"&&w&&(O=Pa(g,T,v)),O}function j(E=m){const O=Pa(p,w,()=>new WeakMap);return Pa(O,E,()=>{const $={};for(const[N,D]of Object.entries(a.selectors??{}))$[N]=Sk(D,E,()=>Pa(g,E,v),w);return $})}return{reducerPath:I,getSelectors:j,get selectors(){return j(T)},selectSlice:T}}const k={name:o,reducer:y,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:v,...x(s),injectInto(I,{reducerPath:w,...T}={}){const j=w??s;return I.inject({reducerPath:j,reducer:y},T),{...k,...x(j,!0)}}};return k}}function Sk(e,t,n,r){function a(o,...s){let l=t(o);return typeof l>"u"&&r&&(l=n()),e(l,...s)}return a.unwrapped=e,a}var Ze=Nk();function Pk(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function Ck({type:e,reducerName:t,createNotation:n},r,a){let o,s;if("reducer"in r){if(n&&!Ek(r))throw new Error(nt(17));o=r.reducer,s=r.prepare}else o=r;a.addCase(e,o).exposeCaseReducer(t,o).exposeAction(t,s?ht(e,s):ht(e))}function Ok(e){return e._reducerDefinitionType==="asyncThunk"}function Ek(e){return e._reducerDefinitionType==="reducerWithPrepare"}function Mk({type:e,reducerName:t},n,r,a){if(!a)throw new Error(nt(18));const{payloadCreator:o,fulfilled:s,pending:l,rejected:c,settled:u,options:d}=n,h=a(e,o,d);r.exposeAction(t,h),s&&r.addCase(h.fulfilled,s),l&&r.addCase(h.pending,l),c&&r.addCase(h.rejected,c),u&&r.addMatcher(h.settled,u),r.exposeCaseReducer(t,{fulfilled:s||Ca,pending:l||Ca,rejected:c||Ca,settled:u||Ca})}function Ca(){}var $k="task",Cg="listener",Og="completed",Xl="cancelled",Dk=`task-${Xl}`,Bk=`task-${Og}`,Ls=`${Cg}-${Xl}`,Rk=`${Cg}-${Og}`,ai=class{constructor(e){We(this,"name","TaskAbortError");We(this,"message");this.code=e,this.message=`${$k} ${Xl} (reason: ${e})`}},Ql=(e,t)=>{if(typeof e!="function")throw new TypeError(nt(32))},io=()=>{},Eg=(e,t=io)=>(e.catch(t),e),Mg=(e,t)=>(e.addEventListener("abort",t,{once:!0}),()=>e.removeEventListener("abort",t)),jn=e=>{if(e.aborted)throw new ai(e.reason)};function $g(e,t){let n=io;return new Promise((r,a)=>{const o=()=>a(new ai(e.reason));if(e.aborted){o();return}n=Mg(e,o),t.finally(()=>n()).then(r,a)}).finally(()=>{n=io})}var _k=async(e,t)=>{try{return await Promise.resolve(),{status:"ok",value:await e()}}catch(n){return{status:n instanceof ai?"cancelled":"rejected",error:n}}finally{t==null||t()}},so=e=>t=>Eg($g(e,t).then(n=>(jn(e),n))),Dg=e=>{const t=so(e);return n=>t(new Promise(r=>setTimeout(r,n)))},{assign:Xn}=Object,Ju={},oi="listenerMiddleware",Wk=(e,t)=>{const n=r=>Mg(e,()=>r.abort(e.reason));return(r,a)=>{Ql(r);const o=new AbortController;n(o);const s=_k(async()=>{jn(e),jn(o.signal);const l=await r({pause:so(o.signal),delay:Dg(o.signal),signal:o.signal});return jn(o.signal),l},()=>o.abort(Bk));return a!=null&&a.autoJoin&&t.push(s.catch(io)),{result:so(e)(s),cancel(){o.abort(Dk)}}}},Lk=(e,t)=>{const n=async(r,a)=>{jn(t);let o=()=>{};const l=[new Promise((c,u)=>{let d=e({predicate:r,effect:(h,m)=>{m.unsubscribe(),c([h,m.getState(),m.getOriginalState()])}});o=()=>{d(),u()}})];a!=null&&l.push(new Promise(c=>setTimeout(c,a,null)));try{const c=await $g(t,Promise.race(l));return jn(t),c}finally{o()}};return(r,a)=>Eg(n(r,a))},Bg=e=>{let{type:t,actionCreator:n,matcher:r,predicate:a,effect:o}=e;if(t)a=ht(t).match;else if(n)t=n.type,a=n.match;else if(r)a=r;else if(!a)throw new Error(nt(21));return Ql(o),{predicate:a,type:t,effect:o}},Rg=Xn(e=>{const{type:t,predicate:n,effect:r}=Bg(e);return{id:Ik(),effect:r,type:t,predicate:n,pending:new Set,unsubscribe:()=>{throw new Error(nt(22))}}},{withTypes:()=>Rg}),Zu=(e,t)=>{const{type:n,effect:r,predicate:a}=Bg(t);return Array.from(e.values()).find(o=>(typeof n=="string"?o.type===n:o.predicate===a)&&o.effect===r)},Fs=e=>{e.pending.forEach(t=>{t.abort(Ls)})},Fk=(e,t)=>()=>{for(const n of t.keys())Fs(n);e.clear()},Xu=(e,t,n)=>{try{e(t,n)}catch(r){setTimeout(()=>{throw r},0)}},_g=Xn(ht(`${oi}/add`),{withTypes:()=>_g}),Hk=ht(`${oi}/removeAll`),Wg=Xn(ht(`${oi}/remove`),{withTypes:()=>Wg}),Yk=(...e)=>{console.error(`${oi}/error`,...e)},aa=(e={})=>{const t=new Map,n=new Map,r=p=>{const g=n.get(p)??0;n.set(p,g+1)},a=p=>{const g=n.get(p)??1;g===1?n.delete(p):n.set(p,g-1)},{extra:o,onError:s=Yk}=e;Ql(s);const l=p=>(p.unsubscribe=()=>t.delete(p.id),t.set(p.id,p),g=>{p.unsubscribe(),g!=null&&g.cancelActive&&Fs(p)}),c=p=>{const g=Zu(t,p)??Rg(p);return l(g)};Xn(c,{withTypes:()=>c});const u=p=>{const g=Zu(t,p);return g&&(g.unsubscribe(),p.cancelActive&&Fs(g)),!!g};Xn(u,{withTypes:()=>u});const d=async(p,g,b,y)=>{const v=new AbortController,x=Lk(c,v.signal),k=[];try{p.pending.add(v),r(p),await Promise.resolve(p.effect(g,Xn({},b,{getOriginalState:y,condition:(I,w)=>x(I,w).then(Boolean),take:x,delay:Dg(v.signal),pause:so(v.signal),extra:o,signal:v.signal,fork:Wk(v.signal,k),unsubscribe:p.unsubscribe,subscribe:()=>{t.set(p.id,p)},cancelActiveListeners:()=>{p.pending.forEach((I,w,T)=>{I!==v&&(I.abort(Ls),T.delete(I))})},cancel:()=>{v.abort(Ls),p.pending.delete(v)},throwIfCancelled:()=>{jn(v.signal)}})))}catch(I){I instanceof ai||Xu(s,I,{raisedBy:"effect"})}finally{await Promise.all(k),v.abort(Rk),a(p),p.pending.delete(v)}},h=Fk(t,n);return{middleware:p=>g=>b=>{if(!pg(b))return g(b);if(_g.match(b))return c(b.payload);if(Hk.match(b)){h();return}if(Wg.match(b))return u(b.payload);let y=p.getState();const v=()=>{if(y===Ju)throw new Error(nt(23));return y};let x;try{if(x=g(b),t.size>0){const k=p.getState(),I=Array.from(t.values());for(const w of I){let T=!1;try{T=w.predicate(b,k,y)}catch(j){T=!1,Xu(s,j,{raisedBy:"predicate"})}T&&d(w,b,p,v)}}}finally{y=Ju}return x},startListening:c,stopListening:u,clearListeners:h}};function nt(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var zk={layoutType:"horizontal",width:0,height:0,margin:{top:5,right:5,bottom:5,left:5},scale:1},Lg=Ze({name:"chartLayout",initialState:zk,reducers:{setLayout(e,t){e.layoutType=t.payload},setChartSize(e,t){e.width=t.payload.width,e.height=t.payload.height},setMargin(e,t){var n,r,a,o;e.margin.top=(n=t.payload.top)!==null&&n!==void 0?n:0,e.margin.right=(r=t.payload.right)!==null&&r!==void 0?r:0,e.margin.bottom=(a=t.payload.bottom)!==null&&a!==void 0?a:0,e.margin.left=(o=t.payload.left)!==null&&o!==void 0?o:0},setScale(e,t){e.scale=t.payload}}}),{setMargin:Gk,setLayout:qk,setChartSize:Uk,setScale:Kk}=Lg.actions,Vk=Lg.reducer;function Fg(e,t,n){return Array.isArray(e)&&e&&t+n!==0?e.slice(t,n+1):e}function de(e){return Number.isFinite(e)}function hn(e){return typeof e=="number"&&e>0&&Number.isFinite(e)}function Qu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Un(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Qu(Object(n),!0).forEach(function(r){Jk(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Jk(e,t,n){return(t=Zk(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Zk(e){var t=Xk(e,"string");return typeof t=="symbol"?t:t+""}function Xk(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Re(e,t,n){return Ce(e)||Ce(t)?n:Et(t)?rr(e,t,n):typeof t=="function"?t(e):n}var Qk=(e,t,n)=>{if(t&&n){var{width:r,height:a}=n,{align:o,verticalAlign:s,layout:l}=t;if((l==="vertical"||l==="horizontal"&&s==="middle")&&o!=="center"&&K(e[o]))return Un(Un({},e),{},{[o]:e[o]+(r||0)});if((l==="horizontal"||l==="vertical"&&o==="center")&&s!=="middle"&&K(e[s]))return Un(Un({},e),{},{[s]:e[s]+(a||0)})}return e},Rn=(e,t)=>e==="horizontal"&&t==="xAxis"||e==="vertical"&&t==="yAxis"||e==="centric"&&t==="angleAxis"||e==="radial"&&t==="radiusAxis",ed=1e-4,e1=e=>{var t=e.domain();if(!(!t||t.length<=2)){var n=t.length,r=e.range(),a=Math.min(r[0],r[1])-ed,o=Math.max(r[0],r[1])+ed,s=e(t[0]),l=e(t[n-1]);(s<a||s>o||l<a||l>o)&&e.domain([t[0],t[n-1]])}},t1=(e,t)=>{if(!t||t.length!==2||!K(t[0])||!K(t[1]))return e;var n=Math.min(t[0],t[1]),r=Math.max(t[0],t[1]),a=[e[0],e[1]];return(!K(e[0])||e[0]<n)&&(a[0]=n),(!K(e[1])||e[1]>r)&&(a[1]=r),a[0]>r&&(a[0]=r),a[1]<n&&(a[1]=n),a},n1=e=>{var t,n=e.length;if(!(n<=0)){var r=(t=e[0])===null||t===void 0?void 0:t.length;if(!(r==null||r<=0))for(var a=0;a<r;++a)for(var o=0,s=0,l=0;l<n;++l){var c=e[l],u=c==null?void 0:c[a];if(u!=null){var d=u[1],h=u[0],m=Ot(d)?h:d;m>=0?(u[0]=o,u[1]=o+m,o=d):(u[0]=s,u[1]=s+m,s=d)}}}},r1=e=>{var t,n=e.length;if(!(n<=0)){var r=(t=e[0])===null||t===void 0?void 0:t.length;if(!(r==null||r<=0))for(var a=0;a<r;++a)for(var o=0,s=0;s<n;++s){var l=e[s],c=l==null?void 0:l[a];if(c!=null){var u=Ot(c[1])?c[0]:c[1];u>=0?(c[0]=o,c[1]=o+u,o=c[1]):(c[0]=0,c[1]=0)}}}},a1={sign:n1,expand:Hw,none:Pn,silhouette:Yw,wiggle:zw,positive:r1},o1=(e,t,n)=>{var r,a=(r=a1[n])!==null&&r!==void 0?r:Pn,o=Fw().keys(t).value((l,c)=>Number(Re(l,c,0))).order(Cs).offset(a),s=o(e);return s.forEach((l,c)=>{l.forEach((u,d)=>{var h=Re(e[d],t[c],0);Array.isArray(h)&&h.length===2&&K(h[0])&&K(h[1])&&(u[0]=h[0],u[1]=h[1])})}),s};function i1(e){return e==null?void 0:String(e)}var td=e=>{var{axis:t,ticks:n,offset:r,bandSize:a,entry:o,index:s}=e;if(t.type==="category")return n[s]?n[s].coordinate+r:null;var l=Re(o,t.dataKey,t.scale.domain()[s]);return Ce(l)?null:t.scale(l)-a/2+r},s1=e=>{var{numericAxis:t}=e,n=t.scale.domain();if(t.type==="number"){var r=Math.min(n[0],n[1]),a=Math.max(n[0],n[1]);return r<=0&&a>=0?0:a<0?a:r}return n[0]},l1=e=>{var t=e.flat(2).filter(K);return[Math.min(...t),Math.max(...t)]},c1=e=>[e[0]===1/0?0:e[0],e[1]===-1/0?0:e[1]],u1=(e,t,n)=>{if(e!=null)return c1(Object.keys(e).reduce((r,a)=>{var o=e[a];if(!o)return r;var{stackedData:s}=o,l=s.reduce((c,u)=>{var d=Fg(u,t,n),h=l1(d);return!de(h[0])||!de(h[1])?c:[Math.min(c[0],h[0]),Math.max(c[1],h[1])]},[1/0,-1/0]);return[Math.min(l[0],r[0]),Math.max(l[1],r[1])]},[1/0,-1/0]))},nd=/^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,rd=/^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,lo=(e,t,n)=>{if(e&&e.scale&&e.scale.bandwidth){var r=e.scale.bandwidth();if(!n||r>0)return r}if(e&&t&&t.length>=2){for(var a=Zo(t,d=>d.coordinate),o=1/0,s=1,l=a.length;s<l;s++){var c=a[s],u=a[s-1];o=Math.min(((c==null?void 0:c.coordinate)||0)-((u==null?void 0:u.coordinate)||0),o)}return o===1/0?0:o}return n?void 0:0};function ad(e){var{tooltipEntrySettings:t,dataKey:n,payload:r,value:a,name:o}=e;return Un(Un({},t),{},{dataKey:n,payload:r,value:a,name:o})}function Hg(e,t){if(e)return String(e);if(typeof t=="string")return t}var d1=(e,t)=>{if(t==="horizontal")return e.chartX;if(t==="vertical")return e.chartY},h1=(e,t)=>t==="centric"?e.angle:e.radius,Jt=e=>e.layout.width,Zt=e=>e.layout.height,m1=e=>e.layout.scale,Yg=e=>e.layout.margin,ii=S(e=>e.cartesianAxis.xAxis,e=>Object.values(e)),si=S(e=>e.cartesianAxis.yAxis,e=>Object.values(e)),p1="data-recharts-item-index",g1="data-recharts-item-id",oa=60;function od(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Oa(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?od(Object(n),!0).forEach(function(r){f1(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):od(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function f1(e,t,n){return(t=y1(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y1(e){var t=b1(e,"string");return typeof t=="symbol"?t:t+""}function b1(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var v1=e=>e.brush.height;function w1(e){var t=si(e);return t.reduce((n,r)=>{if(r.orientation==="left"&&!r.mirror&&!r.hide){var a=typeof r.width=="number"?r.width:oa;return n+a}return n},0)}function x1(e){var t=si(e);return t.reduce((n,r)=>{if(r.orientation==="right"&&!r.mirror&&!r.hide){var a=typeof r.width=="number"?r.width:oa;return n+a}return n},0)}function k1(e){var t=ii(e);return t.reduce((n,r)=>r.orientation==="top"&&!r.mirror&&!r.hide?n+r.height:n,0)}function T1(e){var t=ii(e);return t.reduce((n,r)=>r.orientation==="bottom"&&!r.mirror&&!r.hide?n+r.height:n,0)}var Oe=S([Jt,Zt,Yg,v1,w1,x1,k1,T1,dg,Ux],(e,t,n,r,a,o,s,l,c,u)=>{var d={left:(n.left||0)+a,right:(n.right||0)+o},h={top:(n.top||0)+s,bottom:(n.bottom||0)+l},m=Oa(Oa({},h),d),p=m.bottom;m.bottom+=r,m=Qk(m,c,u);var g=e-m.left-m.right,b=t-m.top-m.bottom;return Oa(Oa({brushBottom:p},m),{},{width:Math.max(g,0),height:Math.max(b,0)})}),I1=S(Oe,e=>({x:e.left,y:e.top,width:e.width,height:e.height})),ec=S(Jt,Zt,(e,t)=>({x:0,y:0,width:e,height:t})),j1=f.createContext(null),at=()=>f.useContext(j1)!=null,li=e=>e.brush,ci=S([li,Oe,Yg],(e,t,n)=>({height:e.height,x:K(e.x)?e.x:t.left,y:K(e.y)?e.y:t.top+t.height+t.brushBottom-((n==null?void 0:n.bottom)||0),width:K(e.width)?e.width:t.width})),zg={},Gg={},qg={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n,r,{signal:a,edges:o}={}){let s,l=null;const c=o!=null&&o.includes("leading"),u=o==null||o.includes("trailing"),d=()=>{l!==null&&(n.apply(s,l),s=void 0,l=null)},h=()=>{u&&d(),b()};let m=null;const p=()=>{m!=null&&clearTimeout(m),m=setTimeout(()=>{m=null,h()},r)},g=()=>{m!==null&&(clearTimeout(m),m=null)},b=()=>{g(),s=void 0,l=null},y=()=>{d()},v=function(...x){if(a!=null&&a.aborted)return;s=this,l=x;const k=m==null;p(),c&&k&&d()};return v.schedule=p,v.cancel=b,v.flush=y,a==null||a.addEventListener("abort",b,{once:!0}),v}e.debounce=t})(qg);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=qg;function n(r,a=0,o={}){typeof o!="object"&&(o={});const{leading:s=!1,trailing:l=!0,maxWait:c}=o,u=Array(2);s&&(u[0]="leading"),l&&(u[1]="trailing");let d,h=null;const m=t.debounce(function(...b){d=r.apply(this,b),h=null},a,{edges:u}),p=function(...b){return c!=null&&(h===null&&(h=Date.now()),Date.now()-h>=c)?(d=r.apply(this,b),h=Date.now(),m.cancel(),m.schedule(),d):(m.apply(this,b),d)},g=()=>(m.flush(),d);return p.cancel=m.cancel,p.flush=g,p}e.debounce=n})(Gg);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Gg;function n(r,a=0,o={}){const{leading:s=!0,trailing:l=!0}=o;return t.debounce(r,a,{leading:s,maxWait:a,trailing:l})}e.throttle=n})(zg);var A1=zg.throttle;const N1=It(A1);var id=function(t,n){for(var r=arguments.length,a=new Array(r>2?r-2:0),o=2;o<r;o++)a[o-2]=arguments[o];if(typeof console<"u"&&console.warn&&(n===void 0&&console.warn("LogUtils requires an error message argument"),!t))if(n===void 0)console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=0;console.warn(n.replace(/%s/g,()=>a[s++]))}},Ug=(e,t,n)=>{var{width:r="100%",height:a="100%",aspect:o,maxHeight:s}=n,l=Yt(r)?e:Number(r),c=Yt(a)?t:Number(a);return o&&o>0&&(l?c=l/o:c&&(l=c*o),s&&c!=null&&c>s&&(c=s)),{calculatedWidth:l,calculatedHeight:c}},S1={width:0,height:0,overflow:"visible"},P1={width:0,overflowX:"visible"},C1={height:0,overflowY:"visible"},O1={},E1=e=>{var{width:t,height:n}=e,r=Yt(t),a=Yt(n);return r&&a?S1:r?P1:a?C1:O1};function M1(e){var{width:t,height:n,aspect:r}=e,a=t,o=n;return a===void 0&&o===void 0?(a="100%",o="100%"):a===void 0?a=r&&r>0?void 0:"100%":o===void 0&&(o=r&&r>0?void 0:"100%"),{width:a,height:o}}function Hs(){return Hs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Hs.apply(null,arguments)}function sd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ld(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?sd(Object(n),!0).forEach(function(r){$1(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):sd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function $1(e,t,n){return(t=D1(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function D1(e){var t=B1(e,"string");return typeof t=="symbol"?t:t+""}function B1(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Kg=f.createContext({width:-1,height:-1});function R1(e){return hn(e.width)&&hn(e.height)}function Vg(e){var{children:t,width:n,height:r}=e,a=f.useMemo(()=>({width:n,height:r}),[n,r]);return R1(a)?f.createElement(Kg.Provider,{value:a},t):null}var tc=()=>f.useContext(Kg),_1=f.forwardRef((e,t)=>{var{aspect:n,initialDimension:r={width:-1,height:-1},width:a,height:o,minWidth:s=0,minHeight:l,maxHeight:c,children:u,debounce:d=0,id:h,className:m,onResize:p,style:g={}}=e,b=f.useRef(null),y=f.useRef();y.current=p,f.useImperativeHandle(t,()=>b.current);var[v,x]=f.useState({containerWidth:r.width,containerHeight:r.height}),k=f.useCallback((E,O)=>{x($=>{var N=Math.round(E),D=Math.round(O);return $.containerWidth===N&&$.containerHeight===D?$:{containerWidth:N,containerHeight:D}})},[]);f.useEffect(()=>{if(b.current==null||typeof ResizeObserver>"u")return ta;var E=D=>{var R,{width:_,height:F}=D[0].contentRect;k(_,F),(R=y.current)===null||R===void 0||R.call(y,_,F)};d>0&&(E=N1(E,d,{trailing:!0,leading:!1}));var O=new ResizeObserver(E),{width:$,height:N}=b.current.getBoundingClientRect();return k($,N),O.observe(b.current),()=>{O.disconnect()}},[k,d]);var{containerWidth:I,containerHeight:w}=v;id(!n||n>0,"The aspect(%s) must be greater than zero.",n);var{calculatedWidth:T,calculatedHeight:j}=Ug(I,w,{width:a,height:o,aspect:n,maxHeight:c});return id(T!=null&&T>0||j!=null&&j>0,`The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`,T,j,a,o,s,l,n),f.createElement("div",{id:h?"".concat(h):void 0,className:le("recharts-responsive-container",m),style:ld(ld({},g),{},{width:a,height:o,minWidth:s,minHeight:l,maxHeight:c}),ref:b},f.createElement("div",{style:E1({width:a,height:o})},f.createElement(Vg,{width:T,height:j},u)))}),W1=f.forwardRef((e,t)=>{var n=tc();if(hn(n.width)&&hn(n.height))return e.children;var{width:r,height:a}=M1({width:e.width,height:e.height,aspect:e.aspect}),{calculatedWidth:o,calculatedHeight:s}=Ug(void 0,void 0,{width:r,height:a,aspect:e.aspect,maxHeight:e.maxHeight});return K(o)&&K(s)?f.createElement(Vg,{width:o,height:s},e.children):f.createElement(_1,Hs({},e,{width:r,height:a,ref:t}))});function Jg(e){if(e)return{x:e.x,y:e.y,upperWidth:"upperWidth"in e?e.upperWidth:e.width,lowerWidth:"lowerWidth"in e?e.lowerWidth:e.width,width:e.width,height:e.height}}var ui=()=>{var e,t=at(),n=V(I1),r=V(ci),a=(e=V(li))===null||e===void 0?void 0:e.padding;return!t||!r||!a?n:{width:r.width-a.left-a.right,height:r.height-a.top-a.bottom,x:a.left,y:a.top}},L1={top:0,bottom:0,left:0,right:0,width:0,height:0,brushBottom:0},F1=()=>{var e;return(e=V(Oe))!==null&&e!==void 0?e:L1},H1=()=>V(Jt),Y1=()=>V(Zt),re=e=>e.layout.layoutType,ia=()=>V(re),z1=()=>{var e=ia();return e!==void 0},di=e=>{var t=ge(),n=at(),{width:r,height:a}=e,o=tc(),s=r,l=a;return o&&(s=o.width>0?o.width:r,l=o.height>0?o.height:a),f.useEffect(()=>{!n&&hn(s)&&hn(l)&&t(Uk({width:s,height:l}))},[t,n,s,l]),null},Zg=Symbol.for("immer-nothing"),cd=Symbol.for("immer-draftable"),rt=Symbol.for("immer-state");function bt(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Fr=Object.getPrototypeOf;function ir(e){return!!e&&!!e[rt]}function On(e){var t;return e?Xg(e)||Array.isArray(e)||!!e[cd]||!!((t=e.constructor)!=null&&t[cd])||sa(e)||mi(e):!1}var G1=Object.prototype.constructor.toString(),ud=new WeakMap;function Xg(e){if(!e||typeof e!="object")return!1;const t=Object.getPrototypeOf(e);if(t===null||t===Object.prototype)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;if(n===Object)return!0;if(typeof n!="function")return!1;let r=ud.get(n);return r===void 0&&(r=Function.toString.call(n),ud.set(n,r)),r===G1}function co(e,t,n=!0){hi(e)===0?(n?Reflect.ownKeys(e):Object.keys(e)).forEach(a=>{t(a,e[a],e)}):e.forEach((r,a)=>t(a,r,e))}function hi(e){const t=e[rt];return t?t.type_:Array.isArray(e)?1:sa(e)?2:mi(e)?3:0}function Ys(e,t){return hi(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function Qg(e,t,n){const r=hi(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function q1(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function sa(e){return e instanceof Map}function mi(e){return e instanceof Set}function vn(e){return e.copy_||e.base_}function zs(e,t){if(sa(e))return new Map(e);if(mi(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const n=Xg(e);if(t===!0||t==="class_only"&&!n){const r=Object.getOwnPropertyDescriptors(e);delete r[rt];let a=Reflect.ownKeys(r);for(let o=0;o<a.length;o++){const s=a[o],l=r[s];l.writable===!1&&(l.writable=!0,l.configurable=!0),(l.get||l.set)&&(r[s]={configurable:!0,writable:!0,enumerable:l.enumerable,value:e[s]})}return Object.create(Fr(e),r)}else{const r=Fr(e);if(r!==null&&n)return{...e};const a=Object.create(r);return Object.assign(a,e)}}function nc(e,t=!1){return pi(e)||ir(e)||!On(e)||(hi(e)>1&&Object.defineProperties(e,{set:Ea,add:Ea,clear:Ea,delete:Ea}),Object.freeze(e),t&&Object.values(e).forEach(n=>nc(n,!0))),e}function U1(){bt(2)}var Ea={value:U1};function pi(e){return e===null||typeof e!="object"?!0:Object.isFrozen(e)}var K1={};function En(e){const t=K1[e];return t||bt(0,e),t}var Hr;function ef(){return Hr}function V1(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function dd(e,t){t&&(En("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Gs(e){qs(e),e.drafts_.forEach(J1),e.drafts_=null}function qs(e){e===Hr&&(Hr=e.parent_)}function hd(e){return Hr=V1(Hr,e)}function J1(e){const t=e[rt];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function md(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return e!==void 0&&e!==n?(n[rt].modified_&&(Gs(t),bt(4)),On(e)&&(e=uo(t,e),t.parent_||ho(t,e)),t.patches_&&En("Patches").generateReplacementPatches_(n[rt].base_,e,t.patches_,t.inversePatches_)):e=uo(t,n,[]),Gs(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==Zg?e:void 0}function uo(e,t,n){if(pi(t))return t;const r=e.immer_.shouldUseStrictIteration(),a=t[rt];if(!a)return co(t,(o,s)=>pd(e,a,t,o,s,n),r),t;if(a.scope_!==e)return t;if(!a.modified_)return ho(e,a.base_,!0),a.base_;if(!a.finalized_){a.finalized_=!0,a.scope_.unfinalizedDrafts_--;const o=a.copy_;let s=o,l=!1;a.type_===3&&(s=new Set(o),o.clear(),l=!0),co(s,(c,u)=>pd(e,a,o,c,u,n,l),r),ho(e,o,!1),n&&e.patches_&&En("Patches").generatePatches_(a,n,e.patches_,e.inversePatches_)}return a.copy_}function pd(e,t,n,r,a,o,s){if(a==null||typeof a!="object"&&!s)return;const l=pi(a);if(!(l&&!s)){if(ir(a)){const c=o&&t&&t.type_!==3&&!Ys(t.assigned_,r)?o.concat(r):void 0,u=uo(e,a,c);if(Qg(n,r,u),ir(u))e.canAutoFreeze_=!1;else return}else s&&n.add(a);if(On(a)&&!l){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1||t&&t.base_&&t.base_[r]===a&&l)return;uo(e,a),(!t||!t.scope_.parent_)&&typeof r!="symbol"&&(sa(n)?n.has(r):Object.prototype.propertyIsEnumerable.call(n,r))&&ho(e,a)}}}function ho(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&nc(t,n)}function Z1(e,t){const n=Array.isArray(e),r={type_:n?1:0,scope_:t?t.scope_:ef(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let a=r,o=rc;n&&(a=[r],o=Yr);const{revoke:s,proxy:l}=Proxy.revocable(a,o);return r.draft_=l,r.revoke_=s,l}var rc={get(e,t){if(t===rt)return e;const n=vn(e);if(!Ys(n,t))return X1(e,n,t);const r=n[t];return e.finalized_||!On(r)?r:r===es(e.base_,t)?(ts(e),e.copy_[t]=Ks(r,e)):r},has(e,t){return t in vn(e)},ownKeys(e){return Reflect.ownKeys(vn(e))},set(e,t,n){const r=tf(vn(e),t);if(r!=null&&r.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const a=es(vn(e),t),o=a==null?void 0:a[rt];if(o&&o.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(q1(n,a)&&(n!==void 0||Ys(e.base_,t)))return!0;ts(e),Us(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty(e,t){return es(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,ts(e),Us(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=vn(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty(){bt(11)},getPrototypeOf(e){return Fr(e.base_)},setPrototypeOf(){bt(12)}},Yr={};co(rc,(e,t)=>{Yr[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});Yr.deleteProperty=function(e,t){return Yr.set.call(this,e,t,void 0)};Yr.set=function(e,t,n){return rc.set.call(this,e[0],t,n,e[0])};function es(e,t){const n=e[rt];return(n?vn(n):e)[t]}function X1(e,t,n){var a;const r=tf(t,n);return r?"value"in r?r.value:(a=r.get)==null?void 0:a.call(e.draft_):void 0}function tf(e,t){if(!(t in e))return;let n=Fr(e);for(;n;){const r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Fr(n)}}function Us(e){e.modified_||(e.modified_=!0,e.parent_&&Us(e.parent_))}function ts(e){e.copy_||(e.copy_=zs(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var Q1=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!0,this.produce=(t,n,r)=>{if(typeof t=="function"&&typeof n!="function"){const o=n;n=t;const s=this;return function(c=o,...u){return s.produce(c,d=>n.call(this,d,...u))}}typeof n!="function"&&bt(6),r!==void 0&&typeof r!="function"&&bt(7);let a;if(On(t)){const o=hd(this),s=Ks(t,void 0);let l=!0;try{a=n(s),l=!1}finally{l?Gs(o):qs(o)}return dd(o,r),md(a,o)}else if(!t||typeof t!="object"){if(a=n(t),a===void 0&&(a=t),a===Zg&&(a=void 0),this.autoFreeze_&&nc(a,!0),r){const o=[],s=[];En("Patches").generateReplacementPatches_(t,a,o,s),r(o,s)}return a}else bt(1,t)},this.produceWithPatches=(t,n)=>{if(typeof t=="function")return(s,...l)=>this.produceWithPatches(s,c=>t(c,...l));let r,a;return[this.produce(t,n,(s,l)=>{r=s,a=l}),r,a]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),typeof(e==null?void 0:e.useStrictIteration)=="boolean"&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){On(e)||bt(8),ir(e)&&(e=eT(e));const t=hd(this),n=Ks(e,void 0);return n[rt].isManual_=!0,qs(t),n}finishDraft(e,t){const n=e&&e[rt];(!n||!n.isManual_)&&bt(9);const{scope_:r}=n;return dd(r,t),md(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const a=t[n];if(a.path.length===0&&a.op==="replace"){e=a.value;break}}n>-1&&(t=t.slice(n+1));const r=En("Patches").applyPatches_;return ir(e)?r(e,t):this.produce(e,a=>r(a,t))}};function Ks(e,t){const n=sa(e)?En("MapSet").proxyMap_(e,t):mi(e)?En("MapSet").proxySet_(e,t):Z1(e,t);return(t?t.scope_:ef()).drafts_.push(n),n}function eT(e){return ir(e)||bt(10,e),nf(e)}function nf(e){if(!On(e)||pi(e))return e;const t=e[rt];let n,r=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=zs(e,t.scope_.immer_.useStrictShallowCopy_),r=t.scope_.immer_.shouldUseStrictIteration()}else n=zs(e,!0);return co(n,(a,o)=>{Qg(n,a,nf(o))},r),t&&(t.finalized_=!1),n}var tT=new Q1;tT.produce;var nT={settings:{layout:"horizontal",align:"center",verticalAlign:"middle",itemSorter:"value"},size:{width:0,height:0},payload:[]},rf=Ze({name:"legend",initialState:nT,reducers:{setLegendSize(e,t){e.size.width=t.payload.width,e.size.height=t.payload.height},setLegendSettings(e,t){e.settings.align=t.payload.align,e.settings.layout=t.payload.layout,e.settings.verticalAlign=t.payload.verticalAlign,e.settings.itemSorter=t.payload.itemSorter},addLegendPayload:{reducer(e,t){e.payload.push(t.payload)},prepare:ce()},replaceLegendPayload:{reducer(e,t){var{prev:n,next:r}=t.payload,a=xt(e).payload.indexOf(n);a>-1&&(e.payload[a]=r)},prepare:ce()},removeLegendPayload:{reducer(e,t){var n=xt(e).payload.indexOf(t.payload);n>-1&&e.payload.splice(n,1)},prepare:ce()}}}),{setLegendSize:F$,setLegendSettings:H$,addLegendPayload:rT,replaceLegendPayload:aT,removeLegendPayload:oT}=rf.actions,iT=rf.reducer;function Vs(){return Vs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vs.apply(null,arguments)}function gd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ns(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?gd(Object(n),!0).forEach(function(r){sT(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function sT(e,t,n){return(t=lT(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function lT(e){var t=cT(e,"string");return typeof t=="symbol"?t:t+""}function cT(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function uT(e){return Array.isArray(e)&&Et(e[0])&&Et(e[1])?e.join(" ~ "):e}var dT=e=>{var{separator:t=" : ",contentStyle:n={},itemStyle:r={},labelStyle:a={},payload:o,formatter:s,itemSorter:l,wrapperClassName:c,labelClassName:u,label:d,labelFormatter:h,accessibilityLayer:m=!1}=e,p=()=>{if(o&&o.length){var w={padding:0,margin:0},T=(l?Zo(o,l):o).map((j,E)=>{if(j.type==="none")return null;var O=j.formatter||s||uT,{value:$,name:N}=j,D=$,R=N;if(O){var _=O($,N,j,E,o);if(Array.isArray(_))[D,R]=_;else if(_!=null)D=_;else return null}var F=ns({display:"block",paddingTop:4,paddingBottom:4,color:j.color||"#000"},r);return f.createElement("li",{className:"recharts-tooltip-item",key:"tooltip-item-".concat(E),style:F},Et(R)?f.createElement("span",{className:"recharts-tooltip-item-name"},R):null,Et(R)?f.createElement("span",{className:"recharts-tooltip-item-separator"},t):null,f.createElement("span",{className:"recharts-tooltip-item-value"},D),f.createElement("span",{className:"recharts-tooltip-item-unit"},j.unit||""))});return f.createElement("ul",{className:"recharts-tooltip-item-list",style:w},T)}return null},g=ns({margin:0,padding:10,backgroundColor:"#fff",border:"1px solid #ccc",whiteSpace:"nowrap"},n),b=ns({margin:0},a),y=!Ce(d),v=y?d:"",x=le("recharts-default-tooltip",c),k=le("recharts-tooltip-label",u);y&&h&&o!==void 0&&o!==null&&(v=h(d,o));var I=m?{role:"status","aria-live":"assertive"}:{};return f.createElement("div",Vs({className:x,style:g},I),f.createElement("p",{className:k,style:b},f.isValidElement(v)?v:"".concat(v)),p())},jr="recharts-tooltip-wrapper",hT={visibility:"hidden"};function mT(e){var{coordinate:t,translateX:n,translateY:r}=e;return le(jr,{["".concat(jr,"-right")]:K(n)&&t&&K(t.x)&&n>=t.x,["".concat(jr,"-left")]:K(n)&&t&&K(t.x)&&n<t.x,["".concat(jr,"-bottom")]:K(r)&&t&&K(t.y)&&r>=t.y,["".concat(jr,"-top")]:K(r)&&t&&K(t.y)&&r<t.y})}function fd(e){var{allowEscapeViewBox:t,coordinate:n,key:r,offsetTopLeft:a,position:o,reverseDirection:s,tooltipDimension:l,viewBox:c,viewBoxDimension:u}=e;if(o&&K(o[r]))return o[r];var d=n[r]-l-(a>0?a:0),h=n[r]+a;if(t[r])return s[r]?d:h;var m=c[r];if(m==null)return 0;if(s[r]){var p=d,g=m;return p<g?Math.max(h,m):Math.max(d,m)}if(u==null)return 0;var b=h+l,y=m+u;return b>y?Math.max(d,m):Math.max(h,m)}function pT(e){var{translateX:t,translateY:n,useTranslate3d:r}=e;return{transform:r?"translate3d(".concat(t,"px, ").concat(n,"px, 0)"):"translate(".concat(t,"px, ").concat(n,"px)")}}function gT(e){var{allowEscapeViewBox:t,coordinate:n,offsetTopLeft:r,position:a,reverseDirection:o,tooltipBox:s,useTranslate3d:l,viewBox:c}=e,u,d,h;return s.height>0&&s.width>0&&n?(d=fd({allowEscapeViewBox:t,coordinate:n,key:"x",offsetTopLeft:r,position:a,reverseDirection:o,tooltipDimension:s.width,viewBox:c,viewBoxDimension:c.width}),h=fd({allowEscapeViewBox:t,coordinate:n,key:"y",offsetTopLeft:r,position:a,reverseDirection:o,tooltipDimension:s.height,viewBox:c,viewBoxDimension:c.height}),u=pT({translateX:d,translateY:h,useTranslate3d:l})):u=hT,{cssProperties:u,cssClasses:mT({translateX:d,translateY:h,coordinate:n})}}function yd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ma(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?yd(Object(n),!0).forEach(function(r){Js(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Js(e,t,n){return(t=fT(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function fT(e){var t=yT(e,"string");return typeof t=="symbol"?t:t+""}function yT(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}class bT extends f.PureComponent{constructor(){super(...arguments),Js(this,"state",{dismissed:!1,dismissedAtCoordinate:{x:0,y:0}}),Js(this,"handleKeyDown",t=>{if(t.key==="Escape"){var n,r,a,o;this.setState({dismissed:!0,dismissedAtCoordinate:{x:(n=(r=this.props.coordinate)===null||r===void 0?void 0:r.x)!==null&&n!==void 0?n:0,y:(a=(o=this.props.coordinate)===null||o===void 0?void 0:o.y)!==null&&a!==void 0?a:0}})}})}componentDidMount(){document.addEventListener("keydown",this.handleKeyDown)}componentWillUnmount(){document.removeEventListener("keydown",this.handleKeyDown)}componentDidUpdate(){var t,n;this.state.dismissed&&(((t=this.props.coordinate)===null||t===void 0?void 0:t.x)!==this.state.dismissedAtCoordinate.x||((n=this.props.coordinate)===null||n===void 0?void 0:n.y)!==this.state.dismissedAtCoordinate.y)&&(this.state.dismissed=!1)}render(){var{active:t,allowEscapeViewBox:n,animationDuration:r,animationEasing:a,children:o,coordinate:s,hasPayload:l,isAnimationActive:c,offset:u,position:d,reverseDirection:h,useTranslate3d:m,viewBox:p,wrapperStyle:g,lastBoundingBox:b,innerRef:y,hasPortalFromProps:v}=this.props,{cssClasses:x,cssProperties:k}=gT({allowEscapeViewBox:n,coordinate:s,offsetTopLeft:u,position:d,reverseDirection:h,tooltipBox:{height:b.height,width:b.width},useTranslate3d:m,viewBox:p}),I=v?{}:Ma(Ma({transition:c&&t?"transform ".concat(r,"ms ").concat(a):void 0},k),{},{pointerEvents:"none",visibility:!this.state.dismissed&&t&&l?"visible":"hidden",position:"absolute",top:0,left:0}),w=Ma(Ma({},I),{},{visibility:!this.state.dismissed&&t&&l?"visible":"hidden"},g);return f.createElement("div",{xmlns:"http://www.w3.org/1999/xhtml",tabIndex:-1,className:x,style:w,ref:y},o)}}var af=()=>{var e;return(e=V(t=>t.rootProps.accessibilityLayer))!==null&&e!==void 0?e:!0};function Zs(){return Zs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zs.apply(null,arguments)}function bd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function vd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?bd(Object(n),!0).forEach(function(r){vT(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):bd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function vT(e,t,n){return(t=wT(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function wT(e){var t=xT(e,"string");return typeof t=="symbol"?t:t+""}function xT(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var wd={curveBasisClosed:Cw,curveBasisOpen:Ow,curveBasis:Pw,curveBumpX:gw,curveBumpY:fw,curveLinearClosed:Ew,curveLinear:zo,curveMonotoneX:Mw,curveMonotoneY:$w,curveNatural:Dw,curveStep:Bw,curveStepAfter:_w,curveStepBefore:Rw},mo=e=>de(e.x)&&de(e.y),xd=e=>e.base!=null&&mo(e.base)&&mo(e),Ar=e=>e.x,Nr=e=>e.y,kT=(e,t)=>{if(typeof e=="function")return e;var n="curve".concat(ea(e));return(n==="curveMonotone"||n==="curveBump")&&t?wd["".concat(n).concat(t==="vertical"?"Y":"X")]:wd[n]||zo},TT=e=>{var{type:t="linear",points:n=[],baseLine:r,layout:a,connectNulls:o=!1}=e,s=kT(t,a),l=o?n.filter(mo):n,c;if(Array.isArray(r)){var u=n.map((p,g)=>vd(vd({},p),{},{base:r[g]}));a==="vertical"?c=ja().y(Nr).x1(Ar).x0(p=>p.base.x):c=ja().x(Ar).y1(Nr).y0(p=>p.base.y);var d=c.defined(xd).curve(s),h=o?u.filter(xd):u;return d(h)}a==="vertical"&&K(r)?c=ja().y(Nr).x1(Ar).x0(r):K(r)?c=ja().x(Ar).y1(Nr).y0(r):c=xp().x(Ar).y(Nr);var m=c.defined(mo).curve(s);return m(l)},of=e=>{var{className:t,points:n,path:r,pathRef:a}=e,o=ia();if((!n||!n.length)&&!r)return null;var s={type:e.type,points:e.points,baseLine:e.baseLine,layout:e.layout||o,connectNulls:e.connectNulls},l=n&&n.length?TT(s):r;return f.createElement("path",Zs({},dn(e),ix(e),{className:le("recharts-curve",t),d:l===null?void 0:l,ref:a}))},IT=["x","y","top","left","width","height","className"];function Xs(){return Xs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xs.apply(null,arguments)}function kd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function jT(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?kd(Object(n),!0).forEach(function(r){AT(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):kd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function AT(e,t,n){return(t=NT(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function NT(e){var t=ST(e,"string");return typeof t=="symbol"?t:t+""}function ST(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function PT(e,t){if(e==null)return{};var n,r,a=CT(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function CT(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}var OT=(e,t,n,r,a,o)=>"M".concat(e,",").concat(a,"v").concat(r,"M").concat(o,",").concat(t,"h").concat(n),ET=e=>{var{x:t=0,y:n=0,top:r=0,left:a=0,width:o=0,height:s=0,className:l}=e,c=PT(e,IT),u=jT({x:t,y:n,top:r,left:a,width:o,height:s},c);return!K(t)||!K(n)||!K(o)||!K(s)||!K(r)||!K(a)?null:f.createElement("path",Xs({},dt(u),{className:le("recharts-cross",l),d:OT(t,n,o,s,r,a)}))};function MT(e,t,n,r){var a=r/2;return{stroke:"none",fill:"#ccc",x:e==="horizontal"?t.x-a:n.left+.5,y:e==="horizontal"?n.top+.5:t.y-a,width:e==="horizontal"?r:n.width-1,height:e==="horizontal"?n.height-1:r}}function Td(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Id(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Td(Object(n),!0).forEach(function(r){$T(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Td(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function $T(e,t,n){return(t=DT(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function DT(e){var t=BT(e,"string");return typeof t=="symbol"?t:t+""}function BT(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var RT=e=>e.replace(/([A-Z])/g,t=>"-".concat(t.toLowerCase())),sf=(e,t,n)=>e.map(r=>"".concat(RT(r)," ").concat(t,"ms ").concat(n)).join(","),_T=(e,t)=>[Object.keys(e),Object.keys(t)].reduce((n,r)=>n.filter(a=>r.includes(a))),zr=(e,t)=>Object.keys(t).reduce((n,r)=>Id(Id({},n),{},{[r]:e(r,t[r])}),{});function jd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ve(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?jd(Object(n),!0).forEach(function(r){WT(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):jd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function WT(e,t,n){return(t=LT(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function LT(e){var t=FT(e,"string");return typeof t=="symbol"?t:t+""}function FT(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var po=(e,t,n)=>e+(t-e)*n,Qs=e=>{var{from:t,to:n}=e;return t!==n},lf=(e,t,n)=>{var r=zr((a,o)=>{if(Qs(o)){var[s,l]=e(o.from,o.to,o.velocity);return ve(ve({},o),{},{from:s,velocity:l})}return o},t);return n<1?zr((a,o)=>Qs(o)&&r[a]!=null?ve(ve({},o),{},{velocity:po(o.velocity,r[a].velocity,n),from:po(o.from,r[a].from,n)}):o,t):lf(e,r,n-1)};function HT(e,t,n,r,a,o){var s,l=r.reduce((m,p)=>ve(ve({},m),{},{[p]:{from:e[p],velocity:0,to:t[p]}}),{}),c=()=>zr((m,p)=>p.from,l),u=()=>!Object.values(l).filter(Qs).length,d=null,h=m=>{s||(s=m);var p=m-s,g=p/n.dt;l=lf(n,l,g),a(ve(ve(ve({},e),t),c())),s=m,u()||(d=o.setTimeout(h))};return()=>(d=o.setTimeout(h),()=>{var m;(m=d)===null||m===void 0||m()})}function YT(e,t,n,r,a,o,s){var l=null,c=a.reduce((h,m)=>{var p=e[m],g=t[m];return p==null||g==null?h:ve(ve({},h),{},{[m]:[p,g]})},{}),u,d=h=>{u||(u=h);var m=(h-u)/r,p=zr((b,y)=>po(...y,n(m)),c);if(o(ve(ve(ve({},e),t),p)),m<1)l=s.setTimeout(d);else{var g=zr((b,y)=>po(...y,n(1)),c);o(ve(ve(ve({},e),t),g))}};return()=>(l=s.setTimeout(d),()=>{var h;(h=l)===null||h===void 0||h()})}const zT=(e,t,n,r,a,o)=>{var s=_T(e,t);return n==null?()=>(a(ve(ve({},e),t)),()=>{}):n.isStepper===!0?HT(e,t,n,s,a,o):YT(e,t,n,r,s,a,o)};var go=1e-4,cf=(e,t)=>[0,3*e,3*t-6*e,3*e-3*t+1],uf=(e,t)=>e.map((n,r)=>n*t**r).reduce((n,r)=>n+r),Ad=(e,t)=>n=>{var r=cf(e,t);return uf(r,n)},GT=(e,t)=>n=>{var r=cf(e,t),a=[...r.map((o,s)=>o*s).slice(1),0];return uf(a,n)},qT=e=>{var t,n=e.split("(");if(n.length!==2||n[0]!=="cubic-bezier")return null;var r=(t=n[1])===null||t===void 0||(t=t.split(")")[0])===null||t===void 0?void 0:t.split(",");if(r==null||r.length!==4)return null;var a=r.map(o=>parseFloat(o));return[a[0],a[1],a[2],a[3]]},UT=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];if(n.length===1)switch(n[0]){case"linear":return[0,0,1,1];case"ease":return[.25,.1,.25,1];case"ease-in":return[.42,0,1,1];case"ease-out":return[.42,0,.58,1];case"ease-in-out":return[0,0,.58,1];default:{var a=qT(n[0]);if(a)return a}}return n.length===4?n:[0,0,1,1]},KT=(e,t,n,r)=>{var a=Ad(e,n),o=Ad(t,r),s=GT(e,n),l=u=>u>1?1:u<0?0:u,c=u=>{for(var d=u>1?1:u,h=d,m=0;m<8;++m){var p=a(h)-d,g=s(h);if(Math.abs(p-d)<go||g<go)return o(h);h=l(h-p/g)}return o(h)};return c.isStepper=!1,c},Nd=function(){return KT(...UT(...arguments))},VT=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{stiff:n=100,damping:r=8,dt:a=17}=t,o=(s,l,c)=>{var u=-(s-l)*n,d=c*r,h=c+(u-d)*a/1e3,m=c*a/1e3+s;return Math.abs(m-l)<go&&Math.abs(h)<go?[l,0]:[m,h]};return o.isStepper=!0,o.dt=a,o},JT=e=>{if(typeof e=="string")switch(e){case"ease":case"ease-in-out":case"ease-out":case"ease-in":case"linear":return Nd(e);case"spring":return VT();default:if(e.split("(")[0]==="cubic-bezier")return Nd(e)}return typeof e=="function"?e:null};function ZT(e){var t,n=()=>null,r=!1,a=null,o=s=>{if(!r){if(Array.isArray(s)){if(!s.length)return;var l=s,[c,...u]=l;if(typeof c=="number"){a=e.setTimeout(o.bind(null,u),c);return}o(c),a=e.setTimeout(o.bind(null,u));return}typeof s=="string"&&(t=s,n(t)),typeof s=="object"&&(t=s,n(t)),typeof s=="function"&&s()}};return{stop:()=>{r=!0},start:s=>{r=!1,a&&(a(),a=null),o(s)},subscribe:s=>(n=s,()=>{n=()=>null}),getTimeoutController:()=>e}}class XT{setTimeout(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=performance.now(),a=null,o=s=>{s-r>=n?t(s):typeof requestAnimationFrame=="function"&&(a=requestAnimationFrame(o))};return a=requestAnimationFrame(o),()=>{a!=null&&cancelAnimationFrame(a)}}}function QT(){return ZT(new XT)}var e2=f.createContext(QT);function t2(e,t){var n=f.useContext(e2);return f.useMemo(()=>t??n(e),[e,t,n])}var n2=()=>!(typeof window<"u"&&window.document&&window.document.createElement&&window.setTimeout),gi={devToolsEnabled:!0,isSsr:n2()},r2={begin:0,duration:1e3,easing:"ease",isActive:!0,canBegin:!0,onAnimationEnd:()=>{},onAnimationStart:()=>{}},Sd={t:0},rs={t:1};function ac(e){var t=pt(e,r2),{isActive:n,canBegin:r,duration:a,easing:o,begin:s,onAnimationEnd:l,onAnimationStart:c,children:u}=t,d=n==="auto"?!gi.isSsr:n,h=t2(t.animationId,t.animationManager),[m,p]=f.useState(d?Sd:rs),g=f.useRef(null);return f.useEffect(()=>{d||p(rs)},[d]),f.useEffect(()=>{if(!d||!r)return ta;var b=zT(Sd,rs,JT(o),a,p,h.getTimeoutController()),y=()=>{g.current=b()};return h.start([c,s,y,a,l]),()=>{h.stop(),g.current&&g.current(),l()}},[d,r,a,o,s,c,l,h]),u(m.t)}function oc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"animation-",n=f.useRef(Rr(t)),r=f.useRef(e);return r.current!==e&&(n.current=Rr(t),r.current=e),n.current}var a2=["radius"],o2=["radius"],Pd,Cd,Od,Ed,Md,$d,Dd,Bd,Rd,_d;function Wd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ld(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Wd(Object(n),!0).forEach(function(r){i2(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Wd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function i2(e,t,n){return(t=s2(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s2(e){var t=l2(e,"string");return typeof t=="symbol"?t:t+""}function l2(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function fo(){return fo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fo.apply(null,arguments)}function Fd(e,t){if(e==null)return{};var n,r,a=c2(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function c2(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Nt(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var Hd=(e,t,n,r,a)=>{var o=ln(n),s=ln(r),l=Math.min(Math.abs(o)/2,Math.abs(s)/2),c=s>=0?1:-1,u=o>=0?1:-1,d=s>=0&&o>=0||s<0&&o<0?1:0,h;if(l>0&&a instanceof Array){for(var m=[0,0,0,0],p=0,g=4;p<g;p++)m[p]=a[p]>l?l:a[p];h=me(Pd||(Pd=Nt(["M",",",""])),e,t+c*m[0]),m[0]>0&&(h+=me(Cd||(Cd=Nt(["A ",",",",0,0,",",",",",""])),m[0],m[0],d,e+u*m[0],t)),h+=me(Od||(Od=Nt(["L ",",",""])),e+n-u*m[1],t),m[1]>0&&(h+=me(Ed||(Ed=Nt(["A ",",",",0,0,",`,
        `,",",""])),m[1],m[1],d,e+n,t+c*m[1])),h+=me(Md||(Md=Nt(["L ",",",""])),e+n,t+r-c*m[2]),m[2]>0&&(h+=me($d||($d=Nt(["A ",",",",0,0,",`,
        `,",",""])),m[2],m[2],d,e+n-u*m[2],t+r)),h+=me(Dd||(Dd=Nt(["L ",",",""])),e+u*m[3],t+r),m[3]>0&&(h+=me(Bd||(Bd=Nt(["A ",",",",0,0,",`,
        `,",",""])),m[3],m[3],d,e,t+r-c*m[3])),h+="Z"}else if(l>0&&a===+a&&a>0){var b=Math.min(l,a);h=me(Rd||(Rd=Nt(["M ",",",`
            A `,",",",0,0,",",",",",`
            L `,",",`
            A `,",",",0,0,",",",",",`
            L `,",",`
            A `,",",",0,0,",",",",",`
            L `,",",`
            A `,",",",0,0,",",",","," Z"])),e,t+c*b,b,b,d,e+u*b,t,e+n-u*b,t,b,b,d,e+n,t+c*b,e+n,t+r-c*b,b,b,d,e+n-u*b,t+r,e+u*b,t+r,b,b,d,e,t+r-c*b)}else h=me(_d||(_d=Nt(["M ",","," h "," v "," h "," Z"])),e,t,n,r,-n);return h},Yd={x:0,y:0,width:0,height:0,radius:0,isAnimationActive:!1,isUpdateAnimationActive:!1,animationBegin:0,animationDuration:1500,animationEasing:"ease"},df=e=>{var t=pt(e,Yd),n=f.useRef(null),[r,a]=f.useState(-1);f.useEffect(()=>{if(n.current&&n.current.getTotalLength)try{var G=n.current.getTotalLength();G&&a(G)}catch{}},[]);var{x:o,y:s,width:l,height:c,radius:u,className:d}=t,{animationEasing:h,animationDuration:m,animationBegin:p,isAnimationActive:g,isUpdateAnimationActive:b}=t,y=f.useRef(l),v=f.useRef(c),x=f.useRef(o),k=f.useRef(s),I=f.useMemo(()=>({x:o,y:s,width:l,height:c,radius:u}),[o,s,l,c,u]),w=oc(I,"rectangle-");if(o!==+o||s!==+s||l!==+l||c!==+c||l===0||c===0)return null;var T=le("recharts-rectangle",d);if(!b){var j=dt(t),E=Fd(j,a2);return f.createElement("path",fo({},E,{x:ln(o),y:ln(s),width:ln(l),height:ln(c),radius:typeof u=="number"?u:void 0,className:T,d:Hd(o,s,l,c,u)}))}var O=y.current,$=v.current,N=x.current,D=k.current,R="0px ".concat(r===-1?1:r,"px"),_="".concat(r,"px 0px"),F=sf(["strokeDasharray"],m,typeof h=="string"?h:Yd.animationEasing);return f.createElement(ac,{animationId:w,key:w,canBegin:r>0,duration:m,easing:h,isActive:b,begin:p},G=>{var z=De(O,l,G),Z=De($,c,G),q=De(N,o,G),te=De(D,s,G);n.current&&(y.current=z,v.current=Z,x.current=q,k.current=te);var he;g?G>0?he={transition:F,strokeDasharray:_}:he={strokeDasharray:R}:he={strokeDasharray:_};var Ie=dt(t),ze=Fd(Ie,o2);return f.createElement("path",fo({},ze,{radius:typeof u=="number"?u:void 0,className:T,d:Hd(q,te,z,Z,u),ref:n,style:Ld(Ld({},he),t.style)}))})};function zd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Gd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?zd(Object(n),!0).forEach(function(r){u2(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):zd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function u2(e,t,n){return(t=d2(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d2(e){var t=h2(e,"string");return typeof t=="symbol"?t:t+""}function h2(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var yo=Math.PI/180,m2=e=>e*180/Math.PI,Be=(e,t,n,r)=>({x:e+Math.cos(-yo*r)*n,y:t+Math.sin(-yo*r)*n}),p2=function(t,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{top:0,right:0,bottom:0,left:0,width:0,height:0,brushBottom:0};return Math.min(Math.abs(t-(r.left||0)-(r.right||0)),Math.abs(n-(r.top||0)-(r.bottom||0)))/2},g2=(e,t)=>{var{x:n,y:r}=e,{x:a,y:o}=t;return Math.sqrt((n-a)**2+(r-o)**2)},f2=(e,t)=>{var{x:n,y:r}=e,{cx:a,cy:o}=t,s=g2({x:n,y:r},{x:a,y:o});if(s<=0)return{radius:s,angle:0};var l=(n-a)/s,c=Math.acos(l);return r>o&&(c=2*Math.PI-c),{radius:s,angle:m2(c),angleInRadian:c}},y2=e=>{var{startAngle:t,endAngle:n}=e,r=Math.floor(t/360),a=Math.floor(n/360),o=Math.min(r,a);return{startAngle:t-o*360,endAngle:n-o*360}},b2=(e,t)=>{var{startAngle:n,endAngle:r}=t,a=Math.floor(n/360),o=Math.floor(r/360),s=Math.min(a,o);return e+s*360},v2=(e,t)=>{var{chartX:n,chartY:r}=e,{radius:a,angle:o}=f2({x:n,y:r},t),{innerRadius:s,outerRadius:l}=t;if(a<s||a>l||a===0)return null;var{startAngle:c,endAngle:u}=y2(t),d=o,h;if(c<=u){for(;d>u;)d-=360;for(;d<c;)d+=360;h=d>=c&&d<=u}else{for(;d>c;)d-=360;for(;d<u;)d+=360;h=d>=u&&d<=c}return h?Gd(Gd({},t),{},{radius:a,angle:b2(d,t)}):null};function hf(e){var{cx:t,cy:n,radius:r,startAngle:a,endAngle:o}=e,s=Be(t,n,r,a),l=Be(t,n,r,o);return{points:[s,l],cx:t,cy:n,radius:r,startAngle:a,endAngle:o}}var qd,Ud,Kd,Vd,Jd,Zd,Xd;function el(){return el=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},el.apply(null,arguments)}function kn(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var w2=(e,t)=>{var n=et(t-e),r=Math.min(Math.abs(t-e),359.999);return n*r},$a=e=>{var{cx:t,cy:n,radius:r,angle:a,sign:o,isExternal:s,cornerRadius:l,cornerIsExternal:c}=e,u=l*(s?1:-1)+r,d=Math.asin(l/u)/yo,h=c?a:a+o*d,m=Be(t,n,u,h),p=Be(t,n,r,h),g=c?a-o*d:a,b=Be(t,n,u*Math.cos(d*yo),g);return{center:m,circleTangency:p,lineTangency:b,theta:d}},mf=e=>{var{cx:t,cy:n,innerRadius:r,outerRadius:a,startAngle:o,endAngle:s}=e,l=w2(o,s),c=o+l,u=Be(t,n,a,o),d=Be(t,n,a,c),h=me(qd||(qd=kn(["M ",",",`
    A `,",",`,0,
    `,",",`,
    `,",",`
  `])),u.x,u.y,a,a,+(Math.abs(l)>180),+(o>c),d.x,d.y);if(r>0){var m=Be(t,n,r,o),p=Be(t,n,r,c);h+=me(Ud||(Ud=kn(["L ",",",`
            A `,",",`,0,
            `,",",`,
            `,","," Z"])),p.x,p.y,r,r,+(Math.abs(l)>180),+(o<=c),m.x,m.y)}else h+=me(Kd||(Kd=kn(["L ",","," Z"])),t,n);return h},x2=e=>{var{cx:t,cy:n,innerRadius:r,outerRadius:a,cornerRadius:o,forceCornerRadius:s,cornerIsExternal:l,startAngle:c,endAngle:u}=e,d=et(u-c),{circleTangency:h,lineTangency:m,theta:p}=$a({cx:t,cy:n,radius:a,angle:c,sign:d,cornerRadius:o,cornerIsExternal:l}),{circleTangency:g,lineTangency:b,theta:y}=$a({cx:t,cy:n,radius:a,angle:u,sign:-d,cornerRadius:o,cornerIsExternal:l}),v=l?Math.abs(c-u):Math.abs(c-u)-p-y;if(v<0)return s?me(Vd||(Vd=kn(["M ",",",`
        a`,",",",0,0,1,",`,0
        a`,",",",0,0,1,",`,0
      `])),m.x,m.y,o,o,o*2,o,o,-o*2):mf({cx:t,cy:n,innerRadius:r,outerRadius:a,startAngle:c,endAngle:u});var x=me(Jd||(Jd=kn(["M ",",",`
    A`,",",",0,0,",",",",",`
    A`,",",",0,",",",",",",",`
    A`,",",",0,0,",",",",",`
  `])),m.x,m.y,o,o,+(d<0),h.x,h.y,a,a,+(v>180),+(d<0),g.x,g.y,o,o,+(d<0),b.x,b.y);if(r>0){var{circleTangency:k,lineTangency:I,theta:w}=$a({cx:t,cy:n,radius:r,angle:c,sign:d,isExternal:!0,cornerRadius:o,cornerIsExternal:l}),{circleTangency:T,lineTangency:j,theta:E}=$a({cx:t,cy:n,radius:r,angle:u,sign:-d,isExternal:!0,cornerRadius:o,cornerIsExternal:l}),O=l?Math.abs(c-u):Math.abs(c-u)-w-E;if(O<0&&o===0)return"".concat(x,"L").concat(t,",").concat(n,"Z");x+=me(Zd||(Zd=kn(["L",",",`
      A`,",",",0,0,",",",",",`
      A`,",",",0,",",",",",",",`
      A`,",",",0,0,",",",",","Z"])),j.x,j.y,o,o,+(d<0),T.x,T.y,r,r,+(O>180),+(d>0),k.x,k.y,o,o,+(d<0),I.x,I.y)}else x+=me(Xd||(Xd=kn(["L",",","Z"])),t,n);return x},k2={cx:0,cy:0,innerRadius:0,outerRadius:0,startAngle:0,endAngle:0,cornerRadius:0,forceCornerRadius:!1,cornerIsExternal:!1},pf=e=>{var t=pt(e,k2),{cx:n,cy:r,innerRadius:a,outerRadius:o,cornerRadius:s,forceCornerRadius:l,cornerIsExternal:c,startAngle:u,endAngle:d,className:h}=t;if(o<a||u===d)return null;var m=le("recharts-sector",h),p=o-a,g=kt(s,p,0,!0),b;return g>0&&Math.abs(u-d)<360?b=x2({cx:n,cy:r,innerRadius:a,outerRadius:o,cornerRadius:Math.min(g,p/2),forceCornerRadius:l,cornerIsExternal:c,startAngle:u,endAngle:d}):b=mf({cx:n,cy:r,innerRadius:a,outerRadius:o,startAngle:u,endAngle:d}),f.createElement("path",el({},dt(t),{className:m,d:b}))};function T2(e,t,n){if(e==="horizontal")return[{x:t.x,y:n.top},{x:t.x,y:n.top+n.height}];if(e==="vertical")return[{x:n.left,y:t.y},{x:n.left+n.width,y:t.y}];if(Rp(t)){if(e==="centric"){var{cx:r,cy:a,innerRadius:o,outerRadius:s,angle:l}=t,c=Be(r,a,o,l),u=Be(r,a,s,l);return[{x:c.x,y:c.y},{x:u.x,y:u.y}]}return hf(t)}}var gf={},ff={},yf={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=zl;function n(r){return t.isSymbol(r)?NaN:Number(r)}e.toNumber=n})(yf);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=yf;function n(r){return r?(r=t.toNumber(r),r===1/0||r===-1/0?(r<0?-1:1)*Number.MAX_VALUE:r===r?r:0):r===0?r:0}e.toFinite=n})(ff);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Gl,n=ff;function r(a,o,s){s&&typeof s!="number"&&t.isIterateeCall(a,o,s)&&(o=s=void 0),a=n.toFinite(a),o===void 0?(o=a,a=0):o=n.toFinite(o),s=s===void 0?a<o?1:-1:n.toFinite(s);const l=Math.max(Math.ceil((o-a)/(s||1)),0),c=new Array(l);for(let u=0;u<l;u++)c[u]=a,a+=s;return c}e.range=r})(gf);var I2=gf.range;const bf=It(I2);function cn(e,t){return e==null||t==null?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function j2(e,t){return e==null||t==null?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function ic(e){let t,n,r;e.length!==2?(t=cn,n=(l,c)=>cn(e(l),c),r=(l,c)=>e(l)-c):(t=e===cn||e===j2?e:A2,n=e,r=e);function a(l,c,u=0,d=l.length){if(u<d){if(t(c,c)!==0)return d;do{const h=u+d>>>1;n(l[h],c)<0?u=h+1:d=h}while(u<d)}return u}function o(l,c,u=0,d=l.length){if(u<d){if(t(c,c)!==0)return d;do{const h=u+d>>>1;n(l[h],c)<=0?u=h+1:d=h}while(u<d)}return u}function s(l,c,u=0,d=l.length){const h=a(l,c,u,d-1);return h>u&&r(l[h-1],c)>-r(l[h],c)?h-1:h}return{left:a,center:s,right:o}}function A2(){return 0}function vf(e){return e===null?NaN:+e}function*N2(e,t){if(t===void 0)for(let n of e)n!=null&&(n=+n)>=n&&(yield n);else{let n=-1;for(let r of e)(r=t(r,++n,e))!=null&&(r=+r)>=r&&(yield r)}}const S2=ic(cn),P2=S2.right;ic(vf).center;const la=P2;class Qd extends Map{constructor(t,n=E2){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:n}}),t!=null)for(const[r,a]of t)this.set(r,a)}get(t){return super.get(eh(this,t))}has(t){return super.has(eh(this,t))}set(t,n){return super.set(C2(this,t),n)}delete(t){return super.delete(O2(this,t))}}function eh({_intern:e,_key:t},n){const r=t(n);return e.has(r)?e.get(r):n}function C2({_intern:e,_key:t},n){const r=t(n);return e.has(r)?e.get(r):(e.set(r,n),n)}function O2({_intern:e,_key:t},n){const r=t(n);return e.has(r)&&(n=e.get(r),e.delete(r)),n}function E2(e){return e!==null&&typeof e=="object"?e.valueOf():e}function M2(e=cn){if(e===cn)return wf;if(typeof e!="function")throw new TypeError("compare is not a function");return(t,n)=>{const r=e(t,n);return r||r===0?r:(e(n,n)===0)-(e(t,t)===0)}}function wf(e,t){return(e==null||!(e>=e))-(t==null||!(t>=t))||(e<t?-1:e>t?1:0)}const $2=Math.sqrt(50),D2=Math.sqrt(10),B2=Math.sqrt(2);function bo(e,t,n){const r=(t-e)/Math.max(0,n),a=Math.floor(Math.log10(r)),o=r/Math.pow(10,a),s=o>=$2?10:o>=D2?5:o>=B2?2:1;let l,c,u;return a<0?(u=Math.pow(10,-a)/s,l=Math.round(e*u),c=Math.round(t*u),l/u<e&&++l,c/u>t&&--c,u=-u):(u=Math.pow(10,a)*s,l=Math.round(e/u),c=Math.round(t/u),l*u<e&&++l,c*u>t&&--c),c<l&&.5<=n&&n<2?bo(e,t,n*2):[l,c,u]}function tl(e,t,n){if(t=+t,e=+e,n=+n,!(n>0))return[];if(e===t)return[e];const r=t<e,[a,o,s]=r?bo(t,e,n):bo(e,t,n);if(!(o>=a))return[];const l=o-a+1,c=new Array(l);if(r)if(s<0)for(let u=0;u<l;++u)c[u]=(o-u)/-s;else for(let u=0;u<l;++u)c[u]=(o-u)*s;else if(s<0)for(let u=0;u<l;++u)c[u]=(a+u)/-s;else for(let u=0;u<l;++u)c[u]=(a+u)*s;return c}function nl(e,t,n){return t=+t,e=+e,n=+n,bo(e,t,n)[2]}function rl(e,t,n){t=+t,e=+e,n=+n;const r=t<e,a=r?nl(t,e,n):nl(e,t,n);return(r?-1:1)*(a<0?1/-a:a)}function th(e,t){let n;if(t===void 0)for(const r of e)r!=null&&(n<r||n===void 0&&r>=r)&&(n=r);else{let r=-1;for(let a of e)(a=t(a,++r,e))!=null&&(n<a||n===void 0&&a>=a)&&(n=a)}return n}function nh(e,t){let n;if(t===void 0)for(const r of e)r!=null&&(n>r||n===void 0&&r>=r)&&(n=r);else{let r=-1;for(let a of e)(a=t(a,++r,e))!=null&&(n>a||n===void 0&&a>=a)&&(n=a)}return n}function xf(e,t,n=0,r=1/0,a){if(t=Math.floor(t),n=Math.floor(Math.max(0,n)),r=Math.floor(Math.min(e.length-1,r)),!(n<=t&&t<=r))return e;for(a=a===void 0?wf:M2(a);r>n;){if(r-n>600){const c=r-n+1,u=t-n+1,d=Math.log(c),h=.5*Math.exp(2*d/3),m=.5*Math.sqrt(d*h*(c-h)/c)*(u-c/2<0?-1:1),p=Math.max(n,Math.floor(t-u*h/c+m)),g=Math.min(r,Math.floor(t+(c-u)*h/c+m));xf(e,t,p,g,a)}const o=e[t];let s=n,l=r;for(Sr(e,n,t),a(e[r],o)>0&&Sr(e,n,r);s<l;){for(Sr(e,s,l),++s,--l;a(e[s],o)<0;)++s;for(;a(e[l],o)>0;)--l}a(e[n],o)===0?Sr(e,n,l):(++l,Sr(e,l,r)),l<=t&&(n=l+1),t<=l&&(r=l-1)}return e}function Sr(e,t,n){const r=e[t];e[t]=e[n],e[n]=r}function R2(e,t,n){if(e=Float64Array.from(N2(e,n)),!(!(r=e.length)||isNaN(t=+t))){if(t<=0||r<2)return nh(e);if(t>=1)return th(e);var r,a=(r-1)*t,o=Math.floor(a),s=th(xf(e,o).subarray(0,o+1)),l=nh(e.subarray(o+1));return s+(l-s)*(a-o)}}function _2(e,t,n=vf){if(!(!(r=e.length)||isNaN(t=+t))){if(t<=0||r<2)return+n(e[0],0,e);if(t>=1)return+n(e[r-1],r-1,e);var r,a=(r-1)*t,o=Math.floor(a),s=+n(e[o],o,e),l=+n(e[o+1],o+1,e);return s+(l-s)*(a-o)}}function W2(e,t,n){e=+e,t=+t,n=(a=arguments.length)<2?(t=e,e=0,1):a<3?1:+n;for(var r=-1,a=Math.max(0,Math.ceil((t-e)/n))|0,o=new Array(a);++r<a;)o[r]=e+r*n;return o}function gt(e,t){switch(arguments.length){case 0:break;case 1:this.range(e);break;default:this.range(t).domain(e);break}return this}function Xt(e,t){switch(arguments.length){case 0:break;case 1:{typeof e=="function"?this.interpolator(e):this.range(e);break}default:{this.domain(e),typeof t=="function"?this.interpolator(t):this.range(t);break}}return this}const al=Symbol("implicit");function sc(){var e=new Qd,t=[],n=[],r=al;function a(o){let s=e.get(o);if(s===void 0){if(r!==al)return r;e.set(o,s=t.push(o)-1)}return n[s%n.length]}return a.domain=function(o){if(!arguments.length)return t.slice();t=[],e=new Qd;for(const s of o)e.has(s)||e.set(s,t.push(s)-1);return a},a.range=function(o){return arguments.length?(n=Array.from(o),a):n.slice()},a.unknown=function(o){return arguments.length?(r=o,a):r},a.copy=function(){return sc(t,n).unknown(r)},gt.apply(a,arguments),a}function lc(){var e=sc().unknown(void 0),t=e.domain,n=e.range,r=0,a=1,o,s,l=!1,c=0,u=0,d=.5;delete e.unknown;function h(){var m=t().length,p=a<r,g=p?a:r,b=p?r:a;o=(b-g)/Math.max(1,m-c+u*2),l&&(o=Math.floor(o)),g+=(b-g-o*(m-c))*d,s=o*(1-c),l&&(g=Math.round(g),s=Math.round(s));var y=W2(m).map(function(v){return g+o*v});return n(p?y.reverse():y)}return e.domain=function(m){return arguments.length?(t(m),h()):t()},e.range=function(m){return arguments.length?([r,a]=m,r=+r,a=+a,h()):[r,a]},e.rangeRound=function(m){return[r,a]=m,r=+r,a=+a,l=!0,h()},e.bandwidth=function(){return s},e.step=function(){return o},e.round=function(m){return arguments.length?(l=!!m,h()):l},e.padding=function(m){return arguments.length?(c=Math.min(1,u=+m),h()):c},e.paddingInner=function(m){return arguments.length?(c=Math.min(1,m),h()):c},e.paddingOuter=function(m){return arguments.length?(u=+m,h()):u},e.align=function(m){return arguments.length?(d=Math.max(0,Math.min(1,m)),h()):d},e.copy=function(){return lc(t(),[r,a]).round(l).paddingInner(c).paddingOuter(u).align(d)},gt.apply(h(),arguments)}function kf(e){var t=e.copy;return e.padding=e.paddingOuter,delete e.paddingInner,delete e.paddingOuter,e.copy=function(){return kf(t())},e}function L2(){return kf(lc.apply(null,arguments).paddingInner(1))}function cc(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function Tf(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function ca(){}var Gr=.7,vo=1/Gr,Qn="\\s*([+-]?\\d+)\\s*",qr="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Ct="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",F2=/^#([0-9a-f]{3,8})$/,H2=new RegExp(`^rgb\\(${Qn},${Qn},${Qn}\\)$`),Y2=new RegExp(`^rgb\\(${Ct},${Ct},${Ct}\\)$`),z2=new RegExp(`^rgba\\(${Qn},${Qn},${Qn},${qr}\\)$`),G2=new RegExp(`^rgba\\(${Ct},${Ct},${Ct},${qr}\\)$`),q2=new RegExp(`^hsl\\(${qr},${Ct},${Ct}\\)$`),U2=new RegExp(`^hsla\\(${qr},${Ct},${Ct},${qr}\\)$`),rh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};cc(ca,Ur,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:ah,formatHex:ah,formatHex8:K2,formatHsl:V2,formatRgb:oh,toString:oh});function ah(){return this.rgb().formatHex()}function K2(){return this.rgb().formatHex8()}function V2(){return If(this).formatHsl()}function oh(){return this.rgb().formatRgb()}function Ur(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=F2.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?ih(t):n===3?new Je(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?Da(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?Da(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=H2.exec(e))?new Je(t[1],t[2],t[3],1):(t=Y2.exec(e))?new Je(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=z2.exec(e))?Da(t[1],t[2],t[3],t[4]):(t=G2.exec(e))?Da(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=q2.exec(e))?ch(t[1],t[2]/100,t[3]/100,1):(t=U2.exec(e))?ch(t[1],t[2]/100,t[3]/100,t[4]):rh.hasOwnProperty(e)?ih(rh[e]):e==="transparent"?new Je(NaN,NaN,NaN,0):null}function ih(e){return new Je(e>>16&255,e>>8&255,e&255,1)}function Da(e,t,n,r){return r<=0&&(e=t=n=NaN),new Je(e,t,n,r)}function J2(e){return e instanceof ca||(e=Ur(e)),e?(e=e.rgb(),new Je(e.r,e.g,e.b,e.opacity)):new Je}function ol(e,t,n,r){return arguments.length===1?J2(e):new Je(e,t,n,r??1)}function Je(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}cc(Je,ol,Tf(ca,{brighter(e){return e=e==null?vo:Math.pow(vo,e),new Je(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?Gr:Math.pow(Gr,e),new Je(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new Je(An(this.r),An(this.g),An(this.b),wo(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:sh,formatHex:sh,formatHex8:Z2,formatRgb:lh,toString:lh}));function sh(){return`#${Tn(this.r)}${Tn(this.g)}${Tn(this.b)}`}function Z2(){return`#${Tn(this.r)}${Tn(this.g)}${Tn(this.b)}${Tn((isNaN(this.opacity)?1:this.opacity)*255)}`}function lh(){const e=wo(this.opacity);return`${e===1?"rgb(":"rgba("}${An(this.r)}, ${An(this.g)}, ${An(this.b)}${e===1?")":`, ${e})`}`}function wo(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function An(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function Tn(e){return e=An(e),(e<16?"0":"")+e.toString(16)}function ch(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new vt(e,t,n,r)}function If(e){if(e instanceof vt)return new vt(e.h,e.s,e.l,e.opacity);if(e instanceof ca||(e=Ur(e)),!e)return new vt;if(e instanceof vt)return e;e=e.rgb();var t=e.r/255,n=e.g/255,r=e.b/255,a=Math.min(t,n,r),o=Math.max(t,n,r),s=NaN,l=o-a,c=(o+a)/2;return l?(t===o?s=(n-r)/l+(n<r)*6:n===o?s=(r-t)/l+2:s=(t-n)/l+4,l/=c<.5?o+a:2-o-a,s*=60):l=c>0&&c<1?0:s,new vt(s,l,c,e.opacity)}function X2(e,t,n,r){return arguments.length===1?If(e):new vt(e,t,n,r??1)}function vt(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}cc(vt,X2,Tf(ca,{brighter(e){return e=e==null?vo:Math.pow(vo,e),new vt(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Gr:Math.pow(Gr,e),new vt(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,a=2*n-r;return new Je(as(e>=240?e-240:e+120,a,r),as(e,a,r),as(e<120?e+240:e-120,a,r),this.opacity)},clamp(){return new vt(uh(this.h),Ba(this.s),Ba(this.l),wo(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=wo(this.opacity);return`${e===1?"hsl(":"hsla("}${uh(this.h)}, ${Ba(this.s)*100}%, ${Ba(this.l)*100}%${e===1?")":`, ${e})`}`}}));function uh(e){return e=(e||0)%360,e<0?e+360:e}function Ba(e){return Math.max(0,Math.min(1,e||0))}function as(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}const uc=e=>()=>e;function Q2(e,t){return function(n){return e+n*t}}function eI(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(r){return Math.pow(e+r*t,n)}}function tI(e){return(e=+e)==1?jf:function(t,n){return n-t?eI(t,n,e):uc(isNaN(t)?n:t)}}function jf(e,t){var n=t-e;return n?Q2(e,n):uc(isNaN(e)?t:e)}const dh=function e(t){var n=tI(t);function r(a,o){var s=n((a=ol(a)).r,(o=ol(o)).r),l=n(a.g,o.g),c=n(a.b,o.b),u=jf(a.opacity,o.opacity);return function(d){return a.r=s(d),a.g=l(d),a.b=c(d),a.opacity=u(d),a+""}}return r.gamma=e,r}(1);function nI(e,t){t||(t=[]);var n=e?Math.min(t.length,e.length):0,r=t.slice(),a;return function(o){for(a=0;a<n;++a)r[a]=e[a]*(1-o)+t[a]*o;return r}}function rI(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function aI(e,t){var n=t?t.length:0,r=e?Math.min(n,e.length):0,a=new Array(r),o=new Array(n),s;for(s=0;s<r;++s)a[s]=pr(e[s],t[s]);for(;s<n;++s)o[s]=t[s];return function(l){for(s=0;s<r;++s)o[s]=a[s](l);return o}}function oI(e,t){var n=new Date;return e=+e,t=+t,function(r){return n.setTime(e*(1-r)+t*r),n}}function xo(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}function iI(e,t){var n={},r={},a;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(a in t)a in e?n[a]=pr(e[a],t[a]):r[a]=t[a];return function(o){for(a in n)r[a]=n[a](o);return r}}var il=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,os=new RegExp(il.source,"g");function sI(e){return function(){return e}}function lI(e){return function(t){return e(t)+""}}function cI(e,t){var n=il.lastIndex=os.lastIndex=0,r,a,o,s=-1,l=[],c=[];for(e=e+"",t=t+"";(r=il.exec(e))&&(a=os.exec(t));)(o=a.index)>n&&(o=t.slice(n,o),l[s]?l[s]+=o:l[++s]=o),(r=r[0])===(a=a[0])?l[s]?l[s]+=a:l[++s]=a:(l[++s]=null,c.push({i:s,x:xo(r,a)})),n=os.lastIndex;return n<t.length&&(o=t.slice(n),l[s]?l[s]+=o:l[++s]=o),l.length<2?c[0]?lI(c[0].x):sI(t):(t=c.length,function(u){for(var d=0,h;d<t;++d)l[(h=c[d]).i]=h.x(u);return l.join("")})}function pr(e,t){var n=typeof t,r;return t==null||n==="boolean"?uc(t):(n==="number"?xo:n==="string"?(r=Ur(t))?(t=r,dh):cI:t instanceof Ur?dh:t instanceof Date?oI:rI(t)?nI:Array.isArray(t)?aI:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?iI:xo)(e,t)}function dc(e,t){return e=+e,t=+t,function(n){return Math.round(e*(1-n)+t*n)}}function uI(e,t){t===void 0&&(t=e,e=pr);for(var n=0,r=t.length-1,a=t[0],o=new Array(r<0?0:r);n<r;)o[n]=e(a,a=t[++n]);return function(s){var l=Math.max(0,Math.min(r-1,Math.floor(s*=r)));return o[l](s-l)}}function dI(e){return function(){return e}}function ko(e){return+e}var hh=[0,1];function qe(e){return e}function sl(e,t){return(t-=e=+e)?function(n){return(n-e)/t}:dI(isNaN(t)?NaN:.5)}function hI(e,t){var n;return e>t&&(n=e,e=t,t=n),function(r){return Math.max(e,Math.min(t,r))}}function mI(e,t,n){var r=e[0],a=e[1],o=t[0],s=t[1];return a<r?(r=sl(a,r),o=n(s,o)):(r=sl(r,a),o=n(o,s)),function(l){return o(r(l))}}function pI(e,t,n){var r=Math.min(e.length,t.length)-1,a=new Array(r),o=new Array(r),s=-1;for(e[r]<e[0]&&(e=e.slice().reverse(),t=t.slice().reverse());++s<r;)a[s]=sl(e[s],e[s+1]),o[s]=n(t[s],t[s+1]);return function(l){var c=la(e,l,1,r)-1;return o[c](a[c](l))}}function ua(e,t){return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())}function fi(){var e=hh,t=hh,n=pr,r,a,o,s=qe,l,c,u;function d(){var m=Math.min(e.length,t.length);return s!==qe&&(s=hI(e[0],e[m-1])),l=m>2?pI:mI,c=u=null,h}function h(m){return m==null||isNaN(m=+m)?o:(c||(c=l(e.map(r),t,n)))(r(s(m)))}return h.invert=function(m){return s(a((u||(u=l(t,e.map(r),xo)))(m)))},h.domain=function(m){return arguments.length?(e=Array.from(m,ko),d()):e.slice()},h.range=function(m){return arguments.length?(t=Array.from(m),d()):t.slice()},h.rangeRound=function(m){return t=Array.from(m),n=dc,d()},h.clamp=function(m){return arguments.length?(s=m?!0:qe,d()):s!==qe},h.interpolate=function(m){return arguments.length?(n=m,d()):n},h.unknown=function(m){return arguments.length?(o=m,h):o},function(m,p){return r=m,a=p,d()}}function hc(){return fi()(qe,qe)}function gI(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString("en").replace(/,/g,""):e.toString(10)}function To(e,t){if((n=(e=t?e.toExponential(t-1):e.toExponential()).indexOf("e"))<0)return null;var n,r=e.slice(0,n);return[r.length>1?r[0]+r.slice(2):r,+e.slice(n+1)]}function sr(e){return e=To(Math.abs(e)),e?e[1]:NaN}function fI(e,t){return function(n,r){for(var a=n.length,o=[],s=0,l=e[0],c=0;a>0&&l>0&&(c+l+1>r&&(l=Math.max(1,r-c)),o.push(n.substring(a-=l,a+l)),!((c+=l+1)>r));)l=e[s=(s+1)%e.length];return o.reverse().join(t)}}function yI(e){return function(t){return t.replace(/[0-9]/g,function(n){return e[+n]})}}var bI=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Kr(e){if(!(t=bI.exec(e)))throw new Error("invalid format: "+e);var t;return new mc({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}Kr.prototype=mc.prototype;function mc(e){this.fill=e.fill===void 0?" ":e.fill+"",this.align=e.align===void 0?">":e.align+"",this.sign=e.sign===void 0?"-":e.sign+"",this.symbol=e.symbol===void 0?"":e.symbol+"",this.zero=!!e.zero,this.width=e.width===void 0?void 0:+e.width,this.comma=!!e.comma,this.precision=e.precision===void 0?void 0:+e.precision,this.trim=!!e.trim,this.type=e.type===void 0?"":e.type+""}mc.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function vI(e){e:for(var t=e.length,n=1,r=-1,a;n<t;++n)switch(e[n]){case".":r=a=n;break;case"0":r===0&&(r=n),a=n;break;default:if(!+e[n])break e;r>0&&(r=0);break}return r>0?e.slice(0,r)+e.slice(a+1):e}var Af;function wI(e,t){var n=To(e,t);if(!n)return e+"";var r=n[0],a=n[1],o=a-(Af=Math.max(-8,Math.min(8,Math.floor(a/3)))*3)+1,s=r.length;return o===s?r:o>s?r+new Array(o-s+1).join("0"):o>0?r.slice(0,o)+"."+r.slice(o):"0."+new Array(1-o).join("0")+To(e,Math.max(0,t+o-1))[0]}function mh(e,t){var n=To(e,t);if(!n)return e+"";var r=n[0],a=n[1];return a<0?"0."+new Array(-a).join("0")+r:r.length>a+1?r.slice(0,a+1)+"."+r.slice(a+1):r+new Array(a-r.length+2).join("0")}const ph={"%":(e,t)=>(e*100).toFixed(t),b:e=>Math.round(e).toString(2),c:e=>e+"",d:gI,e:(e,t)=>e.toExponential(t),f:(e,t)=>e.toFixed(t),g:(e,t)=>e.toPrecision(t),o:e=>Math.round(e).toString(8),p:(e,t)=>mh(e*100,t),r:mh,s:wI,X:e=>Math.round(e).toString(16).toUpperCase(),x:e=>Math.round(e).toString(16)};function gh(e){return e}var fh=Array.prototype.map,yh=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function xI(e){var t=e.grouping===void 0||e.thousands===void 0?gh:fI(fh.call(e.grouping,Number),e.thousands+""),n=e.currency===void 0?"":e.currency[0]+"",r=e.currency===void 0?"":e.currency[1]+"",a=e.decimal===void 0?".":e.decimal+"",o=e.numerals===void 0?gh:yI(fh.call(e.numerals,String)),s=e.percent===void 0?"%":e.percent+"",l=e.minus===void 0?"−":e.minus+"",c=e.nan===void 0?"NaN":e.nan+"";function u(h){h=Kr(h);var m=h.fill,p=h.align,g=h.sign,b=h.symbol,y=h.zero,v=h.width,x=h.comma,k=h.precision,I=h.trim,w=h.type;w==="n"?(x=!0,w="g"):ph[w]||(k===void 0&&(k=12),I=!0,w="g"),(y||m==="0"&&p==="=")&&(y=!0,m="0",p="=");var T=b==="$"?n:b==="#"&&/[boxX]/.test(w)?"0"+w.toLowerCase():"",j=b==="$"?r:/[%p]/.test(w)?s:"",E=ph[w],O=/[defgprs%]/.test(w);k=k===void 0?6:/[gprs]/.test(w)?Math.max(1,Math.min(21,k)):Math.max(0,Math.min(20,k));function $(N){var D=T,R=j,_,F,G;if(w==="c")R=E(N)+R,N="";else{N=+N;var z=N<0||1/N<0;if(N=isNaN(N)?c:E(Math.abs(N),k),I&&(N=vI(N)),z&&+N==0&&g!=="+"&&(z=!1),D=(z?g==="("?g:l:g==="-"||g==="("?"":g)+D,R=(w==="s"?yh[8+Af/3]:"")+R+(z&&g==="("?")":""),O){for(_=-1,F=N.length;++_<F;)if(G=N.charCodeAt(_),48>G||G>57){R=(G===46?a+N.slice(_+1):N.slice(_))+R,N=N.slice(0,_);break}}}x&&!y&&(N=t(N,1/0));var Z=D.length+N.length+R.length,q=Z<v?new Array(v-Z+1).join(m):"";switch(x&&y&&(N=t(q+N,q.length?v-R.length:1/0),q=""),p){case"<":N=D+N+R+q;break;case"=":N=D+q+N+R;break;case"^":N=q.slice(0,Z=q.length>>1)+D+N+R+q.slice(Z);break;default:N=q+D+N+R;break}return o(N)}return $.toString=function(){return h+""},$}function d(h,m){var p=u((h=Kr(h),h.type="f",h)),g=Math.max(-8,Math.min(8,Math.floor(sr(m)/3)))*3,b=Math.pow(10,-g),y=yh[8+g/3];return function(v){return p(b*v)+y}}return{format:u,formatPrefix:d}}var Ra,pc,Nf;kI({thousands:",",grouping:[3],currency:["$",""]});function kI(e){return Ra=xI(e),pc=Ra.format,Nf=Ra.formatPrefix,Ra}function TI(e){return Math.max(0,-sr(Math.abs(e)))}function II(e,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(sr(t)/3)))*3-sr(Math.abs(e)))}function jI(e,t){return e=Math.abs(e),t=Math.abs(t)-e,Math.max(0,sr(t)-sr(e))+1}function Sf(e,t,n,r){var a=rl(e,t,n),o;switch(r=Kr(r??",f"),r.type){case"s":{var s=Math.max(Math.abs(e),Math.abs(t));return r.precision==null&&!isNaN(o=II(a,s))&&(r.precision=o),Nf(r,s)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(o=jI(a,Math.max(Math.abs(e),Math.abs(t))))&&(r.precision=o-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(o=TI(a))&&(r.precision=o-(r.type==="%")*2);break}}return pc(r)}function pn(e){var t=e.domain;return e.ticks=function(n){var r=t();return tl(r[0],r[r.length-1],n??10)},e.tickFormat=function(n,r){var a=t();return Sf(a[0],a[a.length-1],n??10,r)},e.nice=function(n){n==null&&(n=10);var r=t(),a=0,o=r.length-1,s=r[a],l=r[o],c,u,d=10;for(l<s&&(u=s,s=l,l=u,u=a,a=o,o=u);d-- >0;){if(u=nl(s,l,n),u===c)return r[a]=s,r[o]=l,t(r);if(u>0)s=Math.floor(s/u)*u,l=Math.ceil(l/u)*u;else if(u<0)s=Math.ceil(s*u)/u,l=Math.floor(l*u)/u;else break;c=u}return e},e}function Pf(){var e=hc();return e.copy=function(){return ua(e,Pf())},gt.apply(e,arguments),pn(e)}function Cf(e){var t;function n(r){return r==null||isNaN(r=+r)?t:r}return n.invert=n,n.domain=n.range=function(r){return arguments.length?(e=Array.from(r,ko),n):e.slice()},n.unknown=function(r){return arguments.length?(t=r,n):t},n.copy=function(){return Cf(e).unknown(t)},e=arguments.length?Array.from(e,ko):[0,1],pn(n)}function Of(e,t){e=e.slice();var n=0,r=e.length-1,a=e[n],o=e[r],s;return o<a&&(s=n,n=r,r=s,s=a,a=o,o=s),e[n]=t.floor(a),e[r]=t.ceil(o),e}function bh(e){return Math.log(e)}function vh(e){return Math.exp(e)}function AI(e){return-Math.log(-e)}function NI(e){return-Math.exp(-e)}function SI(e){return isFinite(e)?+("1e"+e):e<0?0:e}function PI(e){return e===10?SI:e===Math.E?Math.exp:t=>Math.pow(e,t)}function CI(e){return e===Math.E?Math.log:e===10&&Math.log10||e===2&&Math.log2||(e=Math.log(e),t=>Math.log(t)/e)}function wh(e){return(t,n)=>-e(-t,n)}function gc(e){const t=e(bh,vh),n=t.domain;let r=10,a,o;function s(){return a=CI(r),o=PI(r),n()[0]<0?(a=wh(a),o=wh(o),e(AI,NI)):e(bh,vh),t}return t.base=function(l){return arguments.length?(r=+l,s()):r},t.domain=function(l){return arguments.length?(n(l),s()):n()},t.ticks=l=>{const c=n();let u=c[0],d=c[c.length-1];const h=d<u;h&&([u,d]=[d,u]);let m=a(u),p=a(d),g,b;const y=l==null?10:+l;let v=[];if(!(r%1)&&p-m<y){if(m=Math.floor(m),p=Math.ceil(p),u>0){for(;m<=p;++m)for(g=1;g<r;++g)if(b=m<0?g/o(-m):g*o(m),!(b<u)){if(b>d)break;v.push(b)}}else for(;m<=p;++m)for(g=r-1;g>=1;--g)if(b=m>0?g/o(-m):g*o(m),!(b<u)){if(b>d)break;v.push(b)}v.length*2<y&&(v=tl(u,d,y))}else v=tl(m,p,Math.min(p-m,y)).map(o);return h?v.reverse():v},t.tickFormat=(l,c)=>{if(l==null&&(l=10),c==null&&(c=r===10?"s":","),typeof c!="function"&&(!(r%1)&&(c=Kr(c)).precision==null&&(c.trim=!0),c=pc(c)),l===1/0)return c;const u=Math.max(1,r*l/t.ticks().length);return d=>{let h=d/o(Math.round(a(d)));return h*r<r-.5&&(h*=r),h<=u?c(d):""}},t.nice=()=>n(Of(n(),{floor:l=>o(Math.floor(a(l))),ceil:l=>o(Math.ceil(a(l)))})),t}function Ef(){const e=gc(fi()).domain([1,10]);return e.copy=()=>ua(e,Ef()).base(e.base()),gt.apply(e,arguments),e}function xh(e){return function(t){return Math.sign(t)*Math.log1p(Math.abs(t/e))}}function kh(e){return function(t){return Math.sign(t)*Math.expm1(Math.abs(t))*e}}function fc(e){var t=1,n=e(xh(t),kh(t));return n.constant=function(r){return arguments.length?e(xh(t=+r),kh(t)):t},pn(n)}function Mf(){var e=fc(fi());return e.copy=function(){return ua(e,Mf()).constant(e.constant())},gt.apply(e,arguments)}function Th(e){return function(t){return t<0?-Math.pow(-t,e):Math.pow(t,e)}}function OI(e){return e<0?-Math.sqrt(-e):Math.sqrt(e)}function EI(e){return e<0?-e*e:e*e}function yc(e){var t=e(qe,qe),n=1;function r(){return n===1?e(qe,qe):n===.5?e(OI,EI):e(Th(n),Th(1/n))}return t.exponent=function(a){return arguments.length?(n=+a,r()):n},pn(t)}function bc(){var e=yc(fi());return e.copy=function(){return ua(e,bc()).exponent(e.exponent())},gt.apply(e,arguments),e}function MI(){return bc.apply(null,arguments).exponent(.5)}function Ih(e){return Math.sign(e)*e*e}function $I(e){return Math.sign(e)*Math.sqrt(Math.abs(e))}function $f(){var e=hc(),t=[0,1],n=!1,r;function a(o){var s=$I(e(o));return isNaN(s)?r:n?Math.round(s):s}return a.invert=function(o){return e.invert(Ih(o))},a.domain=function(o){return arguments.length?(e.domain(o),a):e.domain()},a.range=function(o){return arguments.length?(e.range((t=Array.from(o,ko)).map(Ih)),a):t.slice()},a.rangeRound=function(o){return a.range(o).round(!0)},a.round=function(o){return arguments.length?(n=!!o,a):n},a.clamp=function(o){return arguments.length?(e.clamp(o),a):e.clamp()},a.unknown=function(o){return arguments.length?(r=o,a):r},a.copy=function(){return $f(e.domain(),t).round(n).clamp(e.clamp()).unknown(r)},gt.apply(a,arguments),pn(a)}function Df(){var e=[],t=[],n=[],r;function a(){var s=0,l=Math.max(1,t.length);for(n=new Array(l-1);++s<l;)n[s-1]=_2(e,s/l);return o}function o(s){return s==null||isNaN(s=+s)?r:t[la(n,s)]}return o.invertExtent=function(s){var l=t.indexOf(s);return l<0?[NaN,NaN]:[l>0?n[l-1]:e[0],l<n.length?n[l]:e[e.length-1]]},o.domain=function(s){if(!arguments.length)return e.slice();e=[];for(let l of s)l!=null&&!isNaN(l=+l)&&e.push(l);return e.sort(cn),a()},o.range=function(s){return arguments.length?(t=Array.from(s),a()):t.slice()},o.unknown=function(s){return arguments.length?(r=s,o):r},o.quantiles=function(){return n.slice()},o.copy=function(){return Df().domain(e).range(t).unknown(r)},gt.apply(o,arguments)}function Bf(){var e=0,t=1,n=1,r=[.5],a=[0,1],o;function s(c){return c!=null&&c<=c?a[la(r,c,0,n)]:o}function l(){var c=-1;for(r=new Array(n);++c<n;)r[c]=((c+1)*t-(c-n)*e)/(n+1);return s}return s.domain=function(c){return arguments.length?([e,t]=c,e=+e,t=+t,l()):[e,t]},s.range=function(c){return arguments.length?(n=(a=Array.from(c)).length-1,l()):a.slice()},s.invertExtent=function(c){var u=a.indexOf(c);return u<0?[NaN,NaN]:u<1?[e,r[0]]:u>=n?[r[n-1],t]:[r[u-1],r[u]]},s.unknown=function(c){return arguments.length&&(o=c),s},s.thresholds=function(){return r.slice()},s.copy=function(){return Bf().domain([e,t]).range(a).unknown(o)},gt.apply(pn(s),arguments)}function Rf(){var e=[.5],t=[0,1],n,r=1;function a(o){return o!=null&&o<=o?t[la(e,o,0,r)]:n}return a.domain=function(o){return arguments.length?(e=Array.from(o),r=Math.min(e.length,t.length-1),a):e.slice()},a.range=function(o){return arguments.length?(t=Array.from(o),r=Math.min(e.length,t.length-1),a):t.slice()},a.invertExtent=function(o){var s=t.indexOf(o);return[e[s-1],e[s]]},a.unknown=function(o){return arguments.length?(n=o,a):n},a.copy=function(){return Rf().domain(e).range(t).unknown(n)},gt.apply(a,arguments)}const is=new Date,ss=new Date;function we(e,t,n,r){function a(o){return e(o=arguments.length===0?new Date:new Date(+o)),o}return a.floor=o=>(e(o=new Date(+o)),o),a.ceil=o=>(e(o=new Date(o-1)),t(o,1),e(o),o),a.round=o=>{const s=a(o),l=a.ceil(o);return o-s<l-o?s:l},a.offset=(o,s)=>(t(o=new Date(+o),s==null?1:Math.floor(s)),o),a.range=(o,s,l)=>{const c=[];if(o=a.ceil(o),l=l==null?1:Math.floor(l),!(o<s)||!(l>0))return c;let u;do c.push(u=new Date(+o)),t(o,l),e(o);while(u<o&&o<s);return c},a.filter=o=>we(s=>{if(s>=s)for(;e(s),!o(s);)s.setTime(s-1)},(s,l)=>{if(s>=s)if(l<0)for(;++l<=0;)for(;t(s,-1),!o(s););else for(;--l>=0;)for(;t(s,1),!o(s););}),n&&(a.count=(o,s)=>(is.setTime(+o),ss.setTime(+s),e(is),e(ss),Math.floor(n(is,ss))),a.every=o=>(o=Math.floor(o),!isFinite(o)||!(o>0)?null:o>1?a.filter(r?s=>r(s)%o===0:s=>a.count(0,s)%o===0):a)),a}const Io=we(()=>{},(e,t)=>{e.setTime(+e+t)},(e,t)=>t-e);Io.every=e=>(e=Math.floor(e),!isFinite(e)||!(e>0)?null:e>1?we(t=>{t.setTime(Math.floor(t/e)*e)},(t,n)=>{t.setTime(+t+n*e)},(t,n)=>(n-t)/e):Io);Io.range;const Wt=1e3,ut=Wt*60,Lt=ut*60,Gt=Lt*24,vc=Gt*7,jh=Gt*30,ls=Gt*365,In=we(e=>{e.setTime(e-e.getMilliseconds())},(e,t)=>{e.setTime(+e+t*Wt)},(e,t)=>(t-e)/Wt,e=>e.getUTCSeconds());In.range;const wc=we(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*Wt)},(e,t)=>{e.setTime(+e+t*ut)},(e,t)=>(t-e)/ut,e=>e.getMinutes());wc.range;const xc=we(e=>{e.setUTCSeconds(0,0)},(e,t)=>{e.setTime(+e+t*ut)},(e,t)=>(t-e)/ut,e=>e.getUTCMinutes());xc.range;const kc=we(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*Wt-e.getMinutes()*ut)},(e,t)=>{e.setTime(+e+t*Lt)},(e,t)=>(t-e)/Lt,e=>e.getHours());kc.range;const Tc=we(e=>{e.setUTCMinutes(0,0,0)},(e,t)=>{e.setTime(+e+t*Lt)},(e,t)=>(t-e)/Lt,e=>e.getUTCHours());Tc.range;const da=we(e=>e.setHours(0,0,0,0),(e,t)=>e.setDate(e.getDate()+t),(e,t)=>(t-e-(t.getTimezoneOffset()-e.getTimezoneOffset())*ut)/Gt,e=>e.getDate()-1);da.range;const yi=we(e=>{e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCDate(e.getUTCDate()+t)},(e,t)=>(t-e)/Gt,e=>e.getUTCDate()-1);yi.range;const _f=we(e=>{e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCDate(e.getUTCDate()+t)},(e,t)=>(t-e)/Gt,e=>Math.floor(e/Gt));_f.range;function _n(e){return we(t=>{t.setDate(t.getDate()-(t.getDay()+7-e)%7),t.setHours(0,0,0,0)},(t,n)=>{t.setDate(t.getDate()+n*7)},(t,n)=>(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*ut)/vc)}const bi=_n(0),jo=_n(1),DI=_n(2),BI=_n(3),lr=_n(4),RI=_n(5),_I=_n(6);bi.range;jo.range;DI.range;BI.range;lr.range;RI.range;_I.range;function Wn(e){return we(t=>{t.setUTCDate(t.getUTCDate()-(t.getUTCDay()+7-e)%7),t.setUTCHours(0,0,0,0)},(t,n)=>{t.setUTCDate(t.getUTCDate()+n*7)},(t,n)=>(n-t)/vc)}const vi=Wn(0),Ao=Wn(1),WI=Wn(2),LI=Wn(3),cr=Wn(4),FI=Wn(5),HI=Wn(6);vi.range;Ao.range;WI.range;LI.range;cr.range;FI.range;HI.range;const Ic=we(e=>{e.setDate(1),e.setHours(0,0,0,0)},(e,t)=>{e.setMonth(e.getMonth()+t)},(e,t)=>t.getMonth()-e.getMonth()+(t.getFullYear()-e.getFullYear())*12,e=>e.getMonth());Ic.range;const jc=we(e=>{e.setUTCDate(1),e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCMonth(e.getUTCMonth()+t)},(e,t)=>t.getUTCMonth()-e.getUTCMonth()+(t.getUTCFullYear()-e.getUTCFullYear())*12,e=>e.getUTCMonth());jc.range;const qt=we(e=>{e.setMonth(0,1),e.setHours(0,0,0,0)},(e,t)=>{e.setFullYear(e.getFullYear()+t)},(e,t)=>t.getFullYear()-e.getFullYear(),e=>e.getFullYear());qt.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:we(t=>{t.setFullYear(Math.floor(t.getFullYear()/e)*e),t.setMonth(0,1),t.setHours(0,0,0,0)},(t,n)=>{t.setFullYear(t.getFullYear()+n*e)});qt.range;const Ut=we(e=>{e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCFullYear(e.getUTCFullYear()+t)},(e,t)=>t.getUTCFullYear()-e.getUTCFullYear(),e=>e.getUTCFullYear());Ut.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:we(t=>{t.setUTCFullYear(Math.floor(t.getUTCFullYear()/e)*e),t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},(t,n)=>{t.setUTCFullYear(t.getUTCFullYear()+n*e)});Ut.range;function Wf(e,t,n,r,a,o){const s=[[In,1,Wt],[In,5,5*Wt],[In,15,15*Wt],[In,30,30*Wt],[o,1,ut],[o,5,5*ut],[o,15,15*ut],[o,30,30*ut],[a,1,Lt],[a,3,3*Lt],[a,6,6*Lt],[a,12,12*Lt],[r,1,Gt],[r,2,2*Gt],[n,1,vc],[t,1,jh],[t,3,3*jh],[e,1,ls]];function l(u,d,h){const m=d<u;m&&([u,d]=[d,u]);const p=h&&typeof h.range=="function"?h:c(u,d,h),g=p?p.range(u,+d+1):[];return m?g.reverse():g}function c(u,d,h){const m=Math.abs(d-u)/h,p=ic(([,,y])=>y).right(s,m);if(p===s.length)return e.every(rl(u/ls,d/ls,h));if(p===0)return Io.every(Math.max(rl(u,d,h),1));const[g,b]=s[m/s[p-1][2]<s[p][2]/m?p-1:p];return g.every(b)}return[l,c]}const[YI,zI]=Wf(Ut,jc,vi,_f,Tc,xc),[GI,qI]=Wf(qt,Ic,bi,da,kc,wc);function cs(e){if(0<=e.y&&e.y<100){var t=new Date(-1,e.m,e.d,e.H,e.M,e.S,e.L);return t.setFullYear(e.y),t}return new Date(e.y,e.m,e.d,e.H,e.M,e.S,e.L)}function us(e){if(0<=e.y&&e.y<100){var t=new Date(Date.UTC(-1,e.m,e.d,e.H,e.M,e.S,e.L));return t.setUTCFullYear(e.y),t}return new Date(Date.UTC(e.y,e.m,e.d,e.H,e.M,e.S,e.L))}function Pr(e,t,n){return{y:e,m:t,d:n,H:0,M:0,S:0,L:0}}function UI(e){var t=e.dateTime,n=e.date,r=e.time,a=e.periods,o=e.days,s=e.shortDays,l=e.months,c=e.shortMonths,u=Cr(a),d=Or(a),h=Cr(o),m=Or(o),p=Cr(s),g=Or(s),b=Cr(l),y=Or(l),v=Cr(c),x=Or(c),k={a:z,A:Z,b:q,B:te,c:null,d:Oh,e:Oh,f:fj,g:Aj,G:Sj,H:mj,I:pj,j:gj,L:Lf,m:yj,M:bj,p:he,q:Ie,Q:$h,s:Dh,S:vj,u:wj,U:xj,V:kj,w:Tj,W:Ij,x:null,X:null,y:jj,Y:Nj,Z:Pj,"%":Mh},I={a:ze,A:fe,b:P,B:L,c:null,d:Eh,e:Eh,f:Mj,g:Yj,G:Gj,H:Cj,I:Oj,j:Ej,L:Hf,m:$j,M:Dj,p:B,q:H,Q:$h,s:Dh,S:Bj,u:Rj,U:_j,V:Wj,w:Lj,W:Fj,x:null,X:null,y:Hj,Y:zj,Z:qj,"%":Mh},w={a:$,A:N,b:D,B:R,c:_,d:Ph,e:Ph,f:cj,g:Sh,G:Nh,H:Ch,I:Ch,j:oj,L:lj,m:aj,M:ij,p:O,q:rj,Q:dj,s:hj,S:sj,u:XI,U:QI,V:ej,w:ZI,W:tj,x:F,X:G,y:Sh,Y:Nh,Z:nj,"%":uj};k.x=T(n,k),k.X=T(r,k),k.c=T(t,k),I.x=T(n,I),I.X=T(r,I),I.c=T(t,I);function T(A,W){return function(U){var C=[],Q=-1,X=0,je=A.length,_e,At,zi;for(U instanceof Date||(U=new Date(+U));++Q<je;)A.charCodeAt(Q)===37&&(C.push(A.slice(X,Q)),(At=Ah[_e=A.charAt(++Q)])!=null?_e=A.charAt(++Q):At=_e==="e"?" ":"0",(zi=W[_e])&&(_e=zi(U,At)),C.push(_e),X=Q+1);return C.push(A.slice(X,Q)),C.join("")}}function j(A,W){return function(U){var C=Pr(1900,void 0,1),Q=E(C,A,U+="",0),X,je;if(Q!=U.length)return null;if("Q"in C)return new Date(C.Q);if("s"in C)return new Date(C.s*1e3+("L"in C?C.L:0));if(W&&!("Z"in C)&&(C.Z=0),"p"in C&&(C.H=C.H%12+C.p*12),C.m===void 0&&(C.m="q"in C?C.q:0),"V"in C){if(C.V<1||C.V>53)return null;"w"in C||(C.w=1),"Z"in C?(X=us(Pr(C.y,0,1)),je=X.getUTCDay(),X=je>4||je===0?Ao.ceil(X):Ao(X),X=yi.offset(X,(C.V-1)*7),C.y=X.getUTCFullYear(),C.m=X.getUTCMonth(),C.d=X.getUTCDate()+(C.w+6)%7):(X=cs(Pr(C.y,0,1)),je=X.getDay(),X=je>4||je===0?jo.ceil(X):jo(X),X=da.offset(X,(C.V-1)*7),C.y=X.getFullYear(),C.m=X.getMonth(),C.d=X.getDate()+(C.w+6)%7)}else("W"in C||"U"in C)&&("w"in C||(C.w="u"in C?C.u%7:"W"in C?1:0),je="Z"in C?us(Pr(C.y,0,1)).getUTCDay():cs(Pr(C.y,0,1)).getDay(),C.m=0,C.d="W"in C?(C.w+6)%7+C.W*7-(je+5)%7:C.w+C.U*7-(je+6)%7);return"Z"in C?(C.H+=C.Z/100|0,C.M+=C.Z%100,us(C)):cs(C)}}function E(A,W,U,C){for(var Q=0,X=W.length,je=U.length,_e,At;Q<X;){if(C>=je)return-1;if(_e=W.charCodeAt(Q++),_e===37){if(_e=W.charAt(Q++),At=w[_e in Ah?W.charAt(Q++):_e],!At||(C=At(A,U,C))<0)return-1}else if(_e!=U.charCodeAt(C++))return-1}return C}function O(A,W,U){var C=u.exec(W.slice(U));return C?(A.p=d.get(C[0].toLowerCase()),U+C[0].length):-1}function $(A,W,U){var C=p.exec(W.slice(U));return C?(A.w=g.get(C[0].toLowerCase()),U+C[0].length):-1}function N(A,W,U){var C=h.exec(W.slice(U));return C?(A.w=m.get(C[0].toLowerCase()),U+C[0].length):-1}function D(A,W,U){var C=v.exec(W.slice(U));return C?(A.m=x.get(C[0].toLowerCase()),U+C[0].length):-1}function R(A,W,U){var C=b.exec(W.slice(U));return C?(A.m=y.get(C[0].toLowerCase()),U+C[0].length):-1}function _(A,W,U){return E(A,t,W,U)}function F(A,W,U){return E(A,n,W,U)}function G(A,W,U){return E(A,r,W,U)}function z(A){return s[A.getDay()]}function Z(A){return o[A.getDay()]}function q(A){return c[A.getMonth()]}function te(A){return l[A.getMonth()]}function he(A){return a[+(A.getHours()>=12)]}function Ie(A){return 1+~~(A.getMonth()/3)}function ze(A){return s[A.getUTCDay()]}function fe(A){return o[A.getUTCDay()]}function P(A){return c[A.getUTCMonth()]}function L(A){return l[A.getUTCMonth()]}function B(A){return a[+(A.getUTCHours()>=12)]}function H(A){return 1+~~(A.getUTCMonth()/3)}return{format:function(A){var W=T(A+="",k);return W.toString=function(){return A},W},parse:function(A){var W=j(A+="",!1);return W.toString=function(){return A},W},utcFormat:function(A){var W=T(A+="",I);return W.toString=function(){return A},W},utcParse:function(A){var W=j(A+="",!0);return W.toString=function(){return A},W}}}var Ah={"-":"",_:" ",0:"0"},Ee=/^\s*\d+/,KI=/^%/,VI=/[\\^$*+?|[\]().{}]/g;function ee(e,t,n){var r=e<0?"-":"",a=(r?-e:e)+"",o=a.length;return r+(o<n?new Array(n-o+1).join(t)+a:a)}function JI(e){return e.replace(VI,"\\$&")}function Cr(e){return new RegExp("^(?:"+e.map(JI).join("|")+")","i")}function Or(e){return new Map(e.map((t,n)=>[t.toLowerCase(),n]))}function ZI(e,t,n){var r=Ee.exec(t.slice(n,n+1));return r?(e.w=+r[0],n+r[0].length):-1}function XI(e,t,n){var r=Ee.exec(t.slice(n,n+1));return r?(e.u=+r[0],n+r[0].length):-1}function QI(e,t,n){var r=Ee.exec(t.slice(n,n+2));return r?(e.U=+r[0],n+r[0].length):-1}function ej(e,t,n){var r=Ee.exec(t.slice(n,n+2));return r?(e.V=+r[0],n+r[0].length):-1}function tj(e,t,n){var r=Ee.exec(t.slice(n,n+2));return r?(e.W=+r[0],n+r[0].length):-1}function Nh(e,t,n){var r=Ee.exec(t.slice(n,n+4));return r?(e.y=+r[0],n+r[0].length):-1}function Sh(e,t,n){var r=Ee.exec(t.slice(n,n+2));return r?(e.y=+r[0]+(+r[0]>68?1900:2e3),n+r[0].length):-1}function nj(e,t,n){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n,n+6));return r?(e.Z=r[1]?0:-(r[2]+(r[3]||"00")),n+r[0].length):-1}function rj(e,t,n){var r=Ee.exec(t.slice(n,n+1));return r?(e.q=r[0]*3-3,n+r[0].length):-1}function aj(e,t,n){var r=Ee.exec(t.slice(n,n+2));return r?(e.m=r[0]-1,n+r[0].length):-1}function Ph(e,t,n){var r=Ee.exec(t.slice(n,n+2));return r?(e.d=+r[0],n+r[0].length):-1}function oj(e,t,n){var r=Ee.exec(t.slice(n,n+3));return r?(e.m=0,e.d=+r[0],n+r[0].length):-1}function Ch(e,t,n){var r=Ee.exec(t.slice(n,n+2));return r?(e.H=+r[0],n+r[0].length):-1}function ij(e,t,n){var r=Ee.exec(t.slice(n,n+2));return r?(e.M=+r[0],n+r[0].length):-1}function sj(e,t,n){var r=Ee.exec(t.slice(n,n+2));return r?(e.S=+r[0],n+r[0].length):-1}function lj(e,t,n){var r=Ee.exec(t.slice(n,n+3));return r?(e.L=+r[0],n+r[0].length):-1}function cj(e,t,n){var r=Ee.exec(t.slice(n,n+6));return r?(e.L=Math.floor(r[0]/1e3),n+r[0].length):-1}function uj(e,t,n){var r=KI.exec(t.slice(n,n+1));return r?n+r[0].length:-1}function dj(e,t,n){var r=Ee.exec(t.slice(n));return r?(e.Q=+r[0],n+r[0].length):-1}function hj(e,t,n){var r=Ee.exec(t.slice(n));return r?(e.s=+r[0],n+r[0].length):-1}function Oh(e,t){return ee(e.getDate(),t,2)}function mj(e,t){return ee(e.getHours(),t,2)}function pj(e,t){return ee(e.getHours()%12||12,t,2)}function gj(e,t){return ee(1+da.count(qt(e),e),t,3)}function Lf(e,t){return ee(e.getMilliseconds(),t,3)}function fj(e,t){return Lf(e,t)+"000"}function yj(e,t){return ee(e.getMonth()+1,t,2)}function bj(e,t){return ee(e.getMinutes(),t,2)}function vj(e,t){return ee(e.getSeconds(),t,2)}function wj(e){var t=e.getDay();return t===0?7:t}function xj(e,t){return ee(bi.count(qt(e)-1,e),t,2)}function Ff(e){var t=e.getDay();return t>=4||t===0?lr(e):lr.ceil(e)}function kj(e,t){return e=Ff(e),ee(lr.count(qt(e),e)+(qt(e).getDay()===4),t,2)}function Tj(e){return e.getDay()}function Ij(e,t){return ee(jo.count(qt(e)-1,e),t,2)}function jj(e,t){return ee(e.getFullYear()%100,t,2)}function Aj(e,t){return e=Ff(e),ee(e.getFullYear()%100,t,2)}function Nj(e,t){return ee(e.getFullYear()%1e4,t,4)}function Sj(e,t){var n=e.getDay();return e=n>=4||n===0?lr(e):lr.ceil(e),ee(e.getFullYear()%1e4,t,4)}function Pj(e){var t=e.getTimezoneOffset();return(t>0?"-":(t*=-1,"+"))+ee(t/60|0,"0",2)+ee(t%60,"0",2)}function Eh(e,t){return ee(e.getUTCDate(),t,2)}function Cj(e,t){return ee(e.getUTCHours(),t,2)}function Oj(e,t){return ee(e.getUTCHours()%12||12,t,2)}function Ej(e,t){return ee(1+yi.count(Ut(e),e),t,3)}function Hf(e,t){return ee(e.getUTCMilliseconds(),t,3)}function Mj(e,t){return Hf(e,t)+"000"}function $j(e,t){return ee(e.getUTCMonth()+1,t,2)}function Dj(e,t){return ee(e.getUTCMinutes(),t,2)}function Bj(e,t){return ee(e.getUTCSeconds(),t,2)}function Rj(e){var t=e.getUTCDay();return t===0?7:t}function _j(e,t){return ee(vi.count(Ut(e)-1,e),t,2)}function Yf(e){var t=e.getUTCDay();return t>=4||t===0?cr(e):cr.ceil(e)}function Wj(e,t){return e=Yf(e),ee(cr.count(Ut(e),e)+(Ut(e).getUTCDay()===4),t,2)}function Lj(e){return e.getUTCDay()}function Fj(e,t){return ee(Ao.count(Ut(e)-1,e),t,2)}function Hj(e,t){return ee(e.getUTCFullYear()%100,t,2)}function Yj(e,t){return e=Yf(e),ee(e.getUTCFullYear()%100,t,2)}function zj(e,t){return ee(e.getUTCFullYear()%1e4,t,4)}function Gj(e,t){var n=e.getUTCDay();return e=n>=4||n===0?cr(e):cr.ceil(e),ee(e.getUTCFullYear()%1e4,t,4)}function qj(){return"+0000"}function Mh(){return"%"}function $h(e){return+e}function Dh(e){return Math.floor(+e/1e3)}var Yn,zf,Gf;Uj({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});function Uj(e){return Yn=UI(e),zf=Yn.format,Yn.parse,Gf=Yn.utcFormat,Yn.utcParse,Yn}function Kj(e){return new Date(e)}function Vj(e){return e instanceof Date?+e:+new Date(+e)}function Ac(e,t,n,r,a,o,s,l,c,u){var d=hc(),h=d.invert,m=d.domain,p=u(".%L"),g=u(":%S"),b=u("%I:%M"),y=u("%I %p"),v=u("%a %d"),x=u("%b %d"),k=u("%B"),I=u("%Y");function w(T){return(c(T)<T?p:l(T)<T?g:s(T)<T?b:o(T)<T?y:r(T)<T?a(T)<T?v:x:n(T)<T?k:I)(T)}return d.invert=function(T){return new Date(h(T))},d.domain=function(T){return arguments.length?m(Array.from(T,Vj)):m().map(Kj)},d.ticks=function(T){var j=m();return e(j[0],j[j.length-1],T??10)},d.tickFormat=function(T,j){return j==null?w:u(j)},d.nice=function(T){var j=m();return(!T||typeof T.range!="function")&&(T=t(j[0],j[j.length-1],T??10)),T?m(Of(j,T)):d},d.copy=function(){return ua(d,Ac(e,t,n,r,a,o,s,l,c,u))},d}function Jj(){return gt.apply(Ac(GI,qI,qt,Ic,bi,da,kc,wc,In,zf).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}function Zj(){return gt.apply(Ac(YI,zI,Ut,jc,vi,yi,Tc,xc,In,Gf).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)]),arguments)}function wi(){var e=0,t=1,n,r,a,o,s=qe,l=!1,c;function u(h){return h==null||isNaN(h=+h)?c:s(a===0?.5:(h=(o(h)-n)*a,l?Math.max(0,Math.min(1,h)):h))}u.domain=function(h){return arguments.length?([e,t]=h,n=o(e=+e),r=o(t=+t),a=n===r?0:1/(r-n),u):[e,t]},u.clamp=function(h){return arguments.length?(l=!!h,u):l},u.interpolator=function(h){return arguments.length?(s=h,u):s};function d(h){return function(m){var p,g;return arguments.length?([p,g]=m,s=h(p,g),u):[s(0),s(1)]}}return u.range=d(pr),u.rangeRound=d(dc),u.unknown=function(h){return arguments.length?(c=h,u):c},function(h){return o=h,n=h(e),r=h(t),a=n===r?0:1/(r-n),u}}function gn(e,t){return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown())}function qf(){var e=pn(wi()(qe));return e.copy=function(){return gn(e,qf())},Xt.apply(e,arguments)}function Uf(){var e=gc(wi()).domain([1,10]);return e.copy=function(){return gn(e,Uf()).base(e.base())},Xt.apply(e,arguments)}function Kf(){var e=fc(wi());return e.copy=function(){return gn(e,Kf()).constant(e.constant())},Xt.apply(e,arguments)}function Nc(){var e=yc(wi());return e.copy=function(){return gn(e,Nc()).exponent(e.exponent())},Xt.apply(e,arguments)}function Xj(){return Nc.apply(null,arguments).exponent(.5)}function Vf(){var e=[],t=qe;function n(r){if(r!=null&&!isNaN(r=+r))return t((la(e,r,1)-1)/(e.length-1))}return n.domain=function(r){if(!arguments.length)return e.slice();e=[];for(let a of r)a!=null&&!isNaN(a=+a)&&e.push(a);return e.sort(cn),n},n.interpolator=function(r){return arguments.length?(t=r,n):t},n.range=function(){return e.map((r,a)=>t(a/(e.length-1)))},n.quantiles=function(r){return Array.from({length:r+1},(a,o)=>R2(e,o/r))},n.copy=function(){return Vf(t).domain(e)},Xt.apply(n,arguments)}function xi(){var e=0,t=.5,n=1,r=1,a,o,s,l,c,u=qe,d,h=!1,m;function p(b){return isNaN(b=+b)?m:(b=.5+((b=+d(b))-o)*(r*b<r*o?l:c),u(h?Math.max(0,Math.min(1,b)):b))}p.domain=function(b){return arguments.length?([e,t,n]=b,a=d(e=+e),o=d(t=+t),s=d(n=+n),l=a===o?0:.5/(o-a),c=o===s?0:.5/(s-o),r=o<a?-1:1,p):[e,t,n]},p.clamp=function(b){return arguments.length?(h=!!b,p):h},p.interpolator=function(b){return arguments.length?(u=b,p):u};function g(b){return function(y){var v,x,k;return arguments.length?([v,x,k]=y,u=uI(b,[v,x,k]),p):[u(0),u(.5),u(1)]}}return p.range=g(pr),p.rangeRound=g(dc),p.unknown=function(b){return arguments.length?(m=b,p):m},function(b){return d=b,a=b(e),o=b(t),s=b(n),l=a===o?0:.5/(o-a),c=o===s?0:.5/(s-o),r=o<a?-1:1,p}}function Jf(){var e=pn(xi()(qe));return e.copy=function(){return gn(e,Jf())},Xt.apply(e,arguments)}function Zf(){var e=gc(xi()).domain([.1,1,10]);return e.copy=function(){return gn(e,Zf()).base(e.base())},Xt.apply(e,arguments)}function Xf(){var e=fc(xi());return e.copy=function(){return gn(e,Xf()).constant(e.constant())},Xt.apply(e,arguments)}function Sc(){var e=yc(xi());return e.copy=function(){return gn(e,Sc()).exponent(e.exponent())},Xt.apply(e,arguments)}function Qj(){return Sc.apply(null,arguments).exponent(.5)}const $r=Object.freeze(Object.defineProperty({__proto__:null,scaleBand:lc,scaleDiverging:Jf,scaleDivergingLog:Zf,scaleDivergingPow:Sc,scaleDivergingSqrt:Qj,scaleDivergingSymlog:Xf,scaleIdentity:Cf,scaleImplicit:al,scaleLinear:Pf,scaleLog:Ef,scaleOrdinal:sc,scalePoint:L2,scalePow:bc,scaleQuantile:Df,scaleQuantize:Bf,scaleRadial:$f,scaleSequential:qf,scaleSequentialLog:Uf,scaleSequentialPow:Nc,scaleSequentialQuantile:Vf,scaleSequentialSqrt:Xj,scaleSequentialSymlog:Kf,scaleSqrt:MI,scaleSymlog:Mf,scaleThreshold:Rf,scaleTime:Jj,scaleUtc:Zj,tickFormat:Sf},Symbol.toStringTag,{value:"Module"}));var Qt=e=>e.chartData,Qf=S([Qt],e=>{var t=e.chartData!=null?e.chartData.length-1:0;return{chartData:e.chartData,computedData:e.computedData,dataEndIndex:t,dataStartIndex:0}}),ey=(e,t,n,r)=>r?Qf(e):Qt(e),eA=(e,t,n)=>n?Qf(e):Qt(e);function mn(e){if(Array.isArray(e)&&e.length===2){var[t,n]=e;if(de(t)&&de(n))return!0}return!1}function Bh(e,t,n){return n?e:[Math.min(e[0],t[0]),Math.max(e[1],t[1])]}function ty(e,t){if(t&&typeof e!="function"&&Array.isArray(e)&&e.length===2){var[n,r]=e,a,o;if(de(n))a=n;else if(typeof n=="function")return;if(de(r))o=r;else if(typeof r=="function")return;var s=[a,o];if(mn(s))return s}}function tA(e,t,n){if(!(!n&&t==null)){if(typeof e=="function"&&t!=null)try{var r=e(t,n);if(mn(r))return Bh(r,t,n)}catch{}if(Array.isArray(e)&&e.length===2){var[a,o]=e,s,l;if(a==="auto")t!=null&&(s=Math.min(...t));else if(K(a))s=a;else if(typeof a=="function")try{t!=null&&(s=a(t==null?void 0:t[0]))}catch{}else if(typeof a=="string"&&nd.test(a)){var c=nd.exec(a);if(c==null||c[1]==null||t==null)s=void 0;else{var u=+c[1];s=t[0]-u}}else s=t==null?void 0:t[0];if(o==="auto")t!=null&&(l=Math.max(...t));else if(K(o))l=o;else if(typeof o=="function")try{t!=null&&(l=o(t==null?void 0:t[1]))}catch{}else if(typeof o=="string"&&rd.test(o)){var d=rd.exec(o);if(d==null||d[1]==null||t==null)l=void 0;else{var h=+d[1];l=t[1]+h}}else l=t==null?void 0:t[1];var m=[s,l];if(mn(m))return t==null?m:Bh(m,t,n)}}}var gr=1e9,nA={precision:20,rounding:4,toExpNeg:-7,toExpPos:21,LN10:"2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"},Cc,ue=!0,mt="[DecimalError] ",Nn=mt+"Invalid argument: ",Pc=mt+"Exponent out of range: ",fr=Math.floor,wn=Math.pow,rA=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,Qe,Se=1e7,se=7,ny=9007199254740991,No=fr(ny/se),Y={};Y.absoluteValue=Y.abs=function(){var e=new this.constructor(this);return e.s&&(e.s=1),e};Y.comparedTo=Y.cmp=function(e){var t,n,r,a,o=this;if(e=new o.constructor(e),o.s!==e.s)return o.s||-e.s;if(o.e!==e.e)return o.e>e.e^o.s<0?1:-1;for(r=o.d.length,a=e.d.length,t=0,n=r<a?r:a;t<n;++t)if(o.d[t]!==e.d[t])return o.d[t]>e.d[t]^o.s<0?1:-1;return r===a?0:r>a^o.s<0?1:-1};Y.decimalPlaces=Y.dp=function(){var e=this,t=e.d.length-1,n=(t-e.e)*se;if(t=e.d[t],t)for(;t%10==0;t/=10)n--;return n<0?0:n};Y.dividedBy=Y.div=function(e){return Ft(this,new this.constructor(e))};Y.dividedToIntegerBy=Y.idiv=function(e){var t=this,n=t.constructor;return ae(Ft(t,new n(e),0,1),n.precision)};Y.equals=Y.eq=function(e){return!this.cmp(e)};Y.exponent=function(){return be(this)};Y.greaterThan=Y.gt=function(e){return this.cmp(e)>0};Y.greaterThanOrEqualTo=Y.gte=function(e){return this.cmp(e)>=0};Y.isInteger=Y.isint=function(){return this.e>this.d.length-2};Y.isNegative=Y.isneg=function(){return this.s<0};Y.isPositive=Y.ispos=function(){return this.s>0};Y.isZero=function(){return this.s===0};Y.lessThan=Y.lt=function(e){return this.cmp(e)<0};Y.lessThanOrEqualTo=Y.lte=function(e){return this.cmp(e)<1};Y.logarithm=Y.log=function(e){var t,n=this,r=n.constructor,a=r.precision,o=a+5;if(e===void 0)e=new r(10);else if(e=new r(e),e.s<1||e.eq(Qe))throw Error(mt+"NaN");if(n.s<1)throw Error(mt+(n.s?"NaN":"-Infinity"));return n.eq(Qe)?new r(0):(ue=!1,t=Ft(Vr(n,o),Vr(e,o),o),ue=!0,ae(t,a))};Y.minus=Y.sub=function(e){var t=this;return e=new t.constructor(e),t.s==e.s?oy(t,e):ry(t,(e.s=-e.s,e))};Y.modulo=Y.mod=function(e){var t,n=this,r=n.constructor,a=r.precision;if(e=new r(e),!e.s)throw Error(mt+"NaN");return n.s?(ue=!1,t=Ft(n,e,0,1).times(e),ue=!0,n.minus(t)):ae(new r(n),a)};Y.naturalExponential=Y.exp=function(){return ay(this)};Y.naturalLogarithm=Y.ln=function(){return Vr(this)};Y.negated=Y.neg=function(){var e=new this.constructor(this);return e.s=-e.s||0,e};Y.plus=Y.add=function(e){var t=this;return e=new t.constructor(e),t.s==e.s?ry(t,e):oy(t,(e.s=-e.s,e))};Y.precision=Y.sd=function(e){var t,n,r,a=this;if(e!==void 0&&e!==!!e&&e!==1&&e!==0)throw Error(Nn+e);if(t=be(a)+1,r=a.d.length-1,n=r*se+1,r=a.d[r],r){for(;r%10==0;r/=10)n--;for(r=a.d[0];r>=10;r/=10)n++}return e&&t>n?t:n};Y.squareRoot=Y.sqrt=function(){var e,t,n,r,a,o,s,l=this,c=l.constructor;if(l.s<1){if(!l.s)return new c(0);throw Error(mt+"NaN")}for(e=be(l),ue=!1,a=Math.sqrt(+l),a==0||a==1/0?(t=Pt(l.d),(t.length+e)%2==0&&(t+="0"),a=Math.sqrt(t),e=fr((e+1)/2)-(e<0||e%2),a==1/0?t="5e"+e:(t=a.toExponential(),t=t.slice(0,t.indexOf("e")+1)+e),r=new c(t)):r=new c(a.toString()),n=c.precision,a=s=n+3;;)if(o=r,r=o.plus(Ft(l,o,s+2)).times(.5),Pt(o.d).slice(0,s)===(t=Pt(r.d)).slice(0,s)){if(t=t.slice(s-3,s+1),a==s&&t=="4999"){if(ae(o,n+1,0),o.times(o).eq(l)){r=o;break}}else if(t!="9999")break;s+=4}return ue=!0,ae(r,n)};Y.times=Y.mul=function(e){var t,n,r,a,o,s,l,c,u,d=this,h=d.constructor,m=d.d,p=(e=new h(e)).d;if(!d.s||!e.s)return new h(0);for(e.s*=d.s,n=d.e+e.e,c=m.length,u=p.length,c<u&&(o=m,m=p,p=o,s=c,c=u,u=s),o=[],s=c+u,r=s;r--;)o.push(0);for(r=u;--r>=0;){for(t=0,a=c+r;a>r;)l=o[a]+p[r]*m[a-r-1]+t,o[a--]=l%Se|0,t=l/Se|0;o[a]=(o[a]+t)%Se|0}for(;!o[--s];)o.pop();return t?++n:o.shift(),e.d=o,e.e=n,ue?ae(e,h.precision):e};Y.toDecimalPlaces=Y.todp=function(e,t){var n=this,r=n.constructor;return n=new r(n),e===void 0?n:(Mt(e,0,gr),t===void 0?t=r.rounding:Mt(t,0,8),ae(n,e+be(n)+1,t))};Y.toExponential=function(e,t){var n,r=this,a=r.constructor;return e===void 0?n=Mn(r,!0):(Mt(e,0,gr),t===void 0?t=a.rounding:Mt(t,0,8),r=ae(new a(r),e+1,t),n=Mn(r,!0,e+1)),n};Y.toFixed=function(e,t){var n,r,a=this,o=a.constructor;return e===void 0?Mn(a):(Mt(e,0,gr),t===void 0?t=o.rounding:Mt(t,0,8),r=ae(new o(a),e+be(a)+1,t),n=Mn(r.abs(),!1,e+be(r)+1),a.isneg()&&!a.isZero()?"-"+n:n)};Y.toInteger=Y.toint=function(){var e=this,t=e.constructor;return ae(new t(e),be(e)+1,t.rounding)};Y.toNumber=function(){return+this};Y.toPower=Y.pow=function(e){var t,n,r,a,o,s,l=this,c=l.constructor,u=12,d=+(e=new c(e));if(!e.s)return new c(Qe);if(l=new c(l),!l.s){if(e.s<1)throw Error(mt+"Infinity");return l}if(l.eq(Qe))return l;if(r=c.precision,e.eq(Qe))return ae(l,r);if(t=e.e,n=e.d.length-1,s=t>=n,o=l.s,s){if((n=d<0?-d:d)<=ny){for(a=new c(Qe),t=Math.ceil(r/se+4),ue=!1;n%2&&(a=a.times(l),_h(a.d,t)),n=fr(n/2),n!==0;)l=l.times(l),_h(l.d,t);return ue=!0,e.s<0?new c(Qe).div(a):ae(a,r)}}else if(o<0)throw Error(mt+"NaN");return o=o<0&&e.d[Math.max(t,n)]&1?-1:1,l.s=1,ue=!1,a=e.times(Vr(l,r+u)),ue=!0,a=ay(a),a.s=o,a};Y.toPrecision=function(e,t){var n,r,a=this,o=a.constructor;return e===void 0?(n=be(a),r=Mn(a,n<=o.toExpNeg||n>=o.toExpPos)):(Mt(e,1,gr),t===void 0?t=o.rounding:Mt(t,0,8),a=ae(new o(a),e,t),n=be(a),r=Mn(a,e<=n||n<=o.toExpNeg,e)),r};Y.toSignificantDigits=Y.tosd=function(e,t){var n=this,r=n.constructor;return e===void 0?(e=r.precision,t=r.rounding):(Mt(e,1,gr),t===void 0?t=r.rounding:Mt(t,0,8)),ae(new r(n),e,t)};Y.toString=Y.valueOf=Y.val=Y.toJSON=Y[Symbol.for("nodejs.util.inspect.custom")]=function(){var e=this,t=be(e),n=e.constructor;return Mn(e,t<=n.toExpNeg||t>=n.toExpPos)};function ry(e,t){var n,r,a,o,s,l,c,u,d=e.constructor,h=d.precision;if(!e.s||!t.s)return t.s||(t=new d(e)),ue?ae(t,h):t;if(c=e.d,u=t.d,s=e.e,a=t.e,c=c.slice(),o=s-a,o){for(o<0?(r=c,o=-o,l=u.length):(r=u,a=s,l=c.length),s=Math.ceil(h/se),l=s>l?s+1:l+1,o>l&&(o=l,r.length=1),r.reverse();o--;)r.push(0);r.reverse()}for(l=c.length,o=u.length,l-o<0&&(o=l,r=u,u=c,c=r),n=0;o;)n=(c[--o]=c[o]+u[o]+n)/Se|0,c[o]%=Se;for(n&&(c.unshift(n),++a),l=c.length;c[--l]==0;)c.pop();return t.d=c,t.e=a,ue?ae(t,h):t}function Mt(e,t,n){if(e!==~~e||e<t||e>n)throw Error(Nn+e)}function Pt(e){var t,n,r,a=e.length-1,o="",s=e[0];if(a>0){for(o+=s,t=1;t<a;t++)r=e[t]+"",n=se-r.length,n&&(o+=an(n)),o+=r;s=e[t],r=s+"",n=se-r.length,n&&(o+=an(n))}else if(s===0)return"0";for(;s%10===0;)s/=10;return o+s}var Ft=function(){function e(r,a){var o,s=0,l=r.length;for(r=r.slice();l--;)o=r[l]*a+s,r[l]=o%Se|0,s=o/Se|0;return s&&r.unshift(s),r}function t(r,a,o,s){var l,c;if(o!=s)c=o>s?1:-1;else for(l=c=0;l<o;l++)if(r[l]!=a[l]){c=r[l]>a[l]?1:-1;break}return c}function n(r,a,o){for(var s=0;o--;)r[o]-=s,s=r[o]<a[o]?1:0,r[o]=s*Se+r[o]-a[o];for(;!r[0]&&r.length>1;)r.shift()}return function(r,a,o,s){var l,c,u,d,h,m,p,g,b,y,v,x,k,I,w,T,j,E,O=r.constructor,$=r.s==a.s?1:-1,N=r.d,D=a.d;if(!r.s)return new O(r);if(!a.s)throw Error(mt+"Division by zero");for(c=r.e-a.e,j=D.length,w=N.length,p=new O($),g=p.d=[],u=0;D[u]==(N[u]||0);)++u;if(D[u]>(N[u]||0)&&--c,o==null?x=o=O.precision:s?x=o+(be(r)-be(a))+1:x=o,x<0)return new O(0);if(x=x/se+2|0,u=0,j==1)for(d=0,D=D[0],x++;(u<w||d)&&x--;u++)k=d*Se+(N[u]||0),g[u]=k/D|0,d=k%D|0;else{for(d=Se/(D[0]+1)|0,d>1&&(D=e(D,d),N=e(N,d),j=D.length,w=N.length),I=j,b=N.slice(0,j),y=b.length;y<j;)b[y++]=0;E=D.slice(),E.unshift(0),T=D[0],D[1]>=Se/2&&++T;do d=0,l=t(D,b,j,y),l<0?(v=b[0],j!=y&&(v=v*Se+(b[1]||0)),d=v/T|0,d>1?(d>=Se&&(d=Se-1),h=e(D,d),m=h.length,y=b.length,l=t(h,b,m,y),l==1&&(d--,n(h,j<m?E:D,m))):(d==0&&(l=d=1),h=D.slice()),m=h.length,m<y&&h.unshift(0),n(b,h,y),l==-1&&(y=b.length,l=t(D,b,j,y),l<1&&(d++,n(b,j<y?E:D,y))),y=b.length):l===0&&(d++,b=[0]),g[u++]=d,l&&b[0]?b[y++]=N[I]||0:(b=[N[I]],y=1);while((I++<w||b[0]!==void 0)&&x--)}return g[0]||g.shift(),p.e=c,ae(p,s?o+be(p)+1:o)}}();function ay(e,t){var n,r,a,o,s,l,c=0,u=0,d=e.constructor,h=d.precision;if(be(e)>16)throw Error(Pc+be(e));if(!e.s)return new d(Qe);for(t==null?(ue=!1,l=h):l=t,s=new d(.03125);e.abs().gte(.1);)e=e.times(s),u+=5;for(r=Math.log(wn(2,u))/Math.LN10*2+5|0,l+=r,n=a=o=new d(Qe),d.precision=l;;){if(a=ae(a.times(e),l),n=n.times(++c),s=o.plus(Ft(a,n,l)),Pt(s.d).slice(0,l)===Pt(o.d).slice(0,l)){for(;u--;)o=ae(o.times(o),l);return d.precision=h,t==null?(ue=!0,ae(o,h)):o}o=s}}function be(e){for(var t=e.e*se,n=e.d[0];n>=10;n/=10)t++;return t}function ds(e,t,n){if(t>e.LN10.sd())throw ue=!0,n&&(e.precision=n),Error(mt+"LN10 precision limit exceeded");return ae(new e(e.LN10),t)}function an(e){for(var t="";e--;)t+="0";return t}function Vr(e,t){var n,r,a,o,s,l,c,u,d,h=1,m=10,p=e,g=p.d,b=p.constructor,y=b.precision;if(p.s<1)throw Error(mt+(p.s?"NaN":"-Infinity"));if(p.eq(Qe))return new b(0);if(t==null?(ue=!1,u=y):u=t,p.eq(10))return t==null&&(ue=!0),ds(b,u);if(u+=m,b.precision=u,n=Pt(g),r=n.charAt(0),o=be(p),Math.abs(o)<15e14){for(;r<7&&r!=1||r==1&&n.charAt(1)>3;)p=p.times(e),n=Pt(p.d),r=n.charAt(0),h++;o=be(p),r>1?(p=new b("0."+n),o++):p=new b(r+"."+n.slice(1))}else return c=ds(b,u+2,y).times(o+""),p=Vr(new b(r+"."+n.slice(1)),u-m).plus(c),b.precision=y,t==null?(ue=!0,ae(p,y)):p;for(l=s=p=Ft(p.minus(Qe),p.plus(Qe),u),d=ae(p.times(p),u),a=3;;){if(s=ae(s.times(d),u),c=l.plus(Ft(s,new b(a),u)),Pt(c.d).slice(0,u)===Pt(l.d).slice(0,u))return l=l.times(2),o!==0&&(l=l.plus(ds(b,u+2,y).times(o+""))),l=Ft(l,new b(h),u),b.precision=y,t==null?(ue=!0,ae(l,y)):l;l=c,a+=2}}function Rh(e,t){var n,r,a;for((n=t.indexOf("."))>-1&&(t=t.replace(".","")),(r=t.search(/e/i))>0?(n<0&&(n=r),n+=+t.slice(r+1),t=t.substring(0,r)):n<0&&(n=t.length),r=0;t.charCodeAt(r)===48;)++r;for(a=t.length;t.charCodeAt(a-1)===48;)--a;if(t=t.slice(r,a),t){if(a-=r,n=n-r-1,e.e=fr(n/se),e.d=[],r=(n+1)%se,n<0&&(r+=se),r<a){for(r&&e.d.push(+t.slice(0,r)),a-=se;r<a;)e.d.push(+t.slice(r,r+=se));t=t.slice(r),r=se-t.length}else r-=a;for(;r--;)t+="0";if(e.d.push(+t),ue&&(e.e>No||e.e<-No))throw Error(Pc+n)}else e.s=0,e.e=0,e.d=[0];return e}function ae(e,t,n){var r,a,o,s,l,c,u,d,h=e.d;for(s=1,o=h[0];o>=10;o/=10)s++;if(r=t-s,r<0)r+=se,a=t,u=h[d=0];else{if(d=Math.ceil((r+1)/se),o=h.length,d>=o)return e;for(u=o=h[d],s=1;o>=10;o/=10)s++;r%=se,a=r-se+s}if(n!==void 0&&(o=wn(10,s-a-1),l=u/o%10|0,c=t<0||h[d+1]!==void 0||u%o,c=n<4?(l||c)&&(n==0||n==(e.s<0?3:2)):l>5||l==5&&(n==4||c||n==6&&(r>0?a>0?u/wn(10,s-a):0:h[d-1])%10&1||n==(e.s<0?8:7))),t<1||!h[0])return c?(o=be(e),h.length=1,t=t-o-1,h[0]=wn(10,(se-t%se)%se),e.e=fr(-t/se)||0):(h.length=1,h[0]=e.e=e.s=0),e;if(r==0?(h.length=d,o=1,d--):(h.length=d+1,o=wn(10,se-r),h[d]=a>0?(u/wn(10,s-a)%wn(10,a)|0)*o:0),c)for(;;)if(d==0){(h[0]+=o)==Se&&(h[0]=1,++e.e);break}else{if(h[d]+=o,h[d]!=Se)break;h[d--]=0,o=1}for(r=h.length;h[--r]===0;)h.pop();if(ue&&(e.e>No||e.e<-No))throw Error(Pc+be(e));return e}function oy(e,t){var n,r,a,o,s,l,c,u,d,h,m=e.constructor,p=m.precision;if(!e.s||!t.s)return t.s?t.s=-t.s:t=new m(e),ue?ae(t,p):t;if(c=e.d,h=t.d,r=t.e,u=e.e,c=c.slice(),s=u-r,s){for(d=s<0,d?(n=c,s=-s,l=h.length):(n=h,r=u,l=c.length),a=Math.max(Math.ceil(p/se),l)+2,s>a&&(s=a,n.length=1),n.reverse(),a=s;a--;)n.push(0);n.reverse()}else{for(a=c.length,l=h.length,d=a<l,d&&(l=a),a=0;a<l;a++)if(c[a]!=h[a]){d=c[a]<h[a];break}s=0}for(d&&(n=c,c=h,h=n,t.s=-t.s),l=c.length,a=h.length-l;a>0;--a)c[l++]=0;for(a=h.length;a>s;){if(c[--a]<h[a]){for(o=a;o&&c[--o]===0;)c[o]=Se-1;--c[o],c[a]+=Se}c[a]-=h[a]}for(;c[--l]===0;)c.pop();for(;c[0]===0;c.shift())--r;return c[0]?(t.d=c,t.e=r,ue?ae(t,p):t):new m(0)}function Mn(e,t,n){var r,a=be(e),o=Pt(e.d),s=o.length;return t?(n&&(r=n-s)>0?o=o.charAt(0)+"."+o.slice(1)+an(r):s>1&&(o=o.charAt(0)+"."+o.slice(1)),o=o+(a<0?"e":"e+")+a):a<0?(o="0."+an(-a-1)+o,n&&(r=n-s)>0&&(o+=an(r))):a>=s?(o+=an(a+1-s),n&&(r=n-a-1)>0&&(o=o+"."+an(r))):((r=a+1)<s&&(o=o.slice(0,r)+"."+o.slice(r)),n&&(r=n-s)>0&&(a+1===s&&(o+="."),o+=an(r))),e.s<0?"-"+o:o}function _h(e,t){if(e.length>t)return e.length=t,!0}function iy(e){var t,n,r;function a(o){var s=this;if(!(s instanceof a))return new a(o);if(s.constructor=a,o instanceof a){s.s=o.s,s.e=o.e,s.d=(o=o.d)?o.slice():o;return}if(typeof o=="number"){if(o*0!==0)throw Error(Nn+o);if(o>0)s.s=1;else if(o<0)o=-o,s.s=-1;else{s.s=0,s.e=0,s.d=[0];return}if(o===~~o&&o<1e7){s.e=0,s.d=[o];return}return Rh(s,o.toString())}else if(typeof o!="string")throw Error(Nn+o);if(o.charCodeAt(0)===45?(o=o.slice(1),s.s=-1):s.s=1,rA.test(o))Rh(s,o);else throw Error(Nn+o)}if(a.prototype=Y,a.ROUND_UP=0,a.ROUND_DOWN=1,a.ROUND_CEIL=2,a.ROUND_FLOOR=3,a.ROUND_HALF_UP=4,a.ROUND_HALF_DOWN=5,a.ROUND_HALF_EVEN=6,a.ROUND_HALF_CEIL=7,a.ROUND_HALF_FLOOR=8,a.clone=iy,a.config=a.set=aA,e===void 0&&(e={}),e)for(r=["precision","rounding","toExpNeg","toExpPos","LN10"],t=0;t<r.length;)e.hasOwnProperty(n=r[t++])||(e[n]=this[n]);return a.config(e),a}function aA(e){if(!e||typeof e!="object")throw Error(mt+"Object expected");var t,n,r,a=["precision",1,gr,"rounding",0,8,"toExpNeg",-1/0,0,"toExpPos",0,1/0];for(t=0;t<a.length;t+=3)if((r=e[n=a[t]])!==void 0)if(fr(r)===r&&r>=a[t+1]&&r<=a[t+2])this[n]=r;else throw Error(Nn+n+": "+r);if((r=e[n="LN10"])!==void 0)if(r==Math.LN10)this[n]=new this(r);else throw Error(Nn+n+": "+r);return this}var Cc=iy(nA);Qe=new Cc(1);const ne=Cc;var oA=e=>e,sy={"@@functional/placeholder":!0},ly=e=>e===sy,Wh=e=>function t(){return arguments.length===0||arguments.length===1&&ly(arguments.length<=0?void 0:arguments[0])?t:e(...arguments)},cy=(e,t)=>e===1?t:Wh(function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];var o=r.filter(s=>s!==sy).length;return o>=e?t(...r):cy(e-o,Wh(function(){for(var s=arguments.length,l=new Array(s),c=0;c<s;c++)l[c]=arguments[c];var u=r.map(d=>ly(d)?l.shift():d);return t(...u,...l)}))}),iA=e=>cy(e.length,e),ll=(e,t)=>{for(var n=[],r=e;r<t;++r)n[r-e]=r;return n},sA=iA((e,t)=>Array.isArray(t)?t.map(e):Object.keys(t).map(n=>t[n]).map(e)),lA=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];if(!n.length)return oA;var a=n.reverse(),o=a[0],s=a.slice(1);return function(){return s.reduce((l,c)=>c(l),o(...arguments))}};function uy(e){var t;return e===0?t=1:t=Math.floor(new ne(e).abs().log(10).toNumber())+1,t}function dy(e,t,n){for(var r=new ne(e),a=0,o=[];r.lt(t)&&a<1e5;)o.push(r.toNumber()),r=r.add(n),a++;return o}var hy=e=>{var[t,n]=e,[r,a]=[t,n];return t>n&&([r,a]=[n,t]),[r,a]},my=(e,t,n)=>{if(e.lte(0))return new ne(0);var r=uy(e.toNumber()),a=new ne(10).pow(r),o=e.div(a),s=r!==1?.05:.1,l=new ne(Math.ceil(o.div(s).toNumber())).add(n).mul(s),c=l.mul(a);return t?new ne(c.toNumber()):new ne(Math.ceil(c.toNumber()))},cA=(e,t,n)=>{var r=new ne(1),a=new ne(e);if(!a.isint()&&n){var o=Math.abs(e);o<1?(r=new ne(10).pow(uy(e)-1),a=new ne(Math.floor(a.div(r).toNumber())).mul(r)):o>1&&(a=new ne(Math.floor(e)))}else e===0?a=new ne(Math.floor((t-1)/2)):n||(a=new ne(Math.floor(e)));var s=Math.floor((t-1)/2),l=lA(sA(c=>a.add(new ne(c-s).mul(r)).toNumber()),ll);return l(0,t)},py=function(t,n,r,a){var o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0;if(!Number.isFinite((n-t)/(r-1)))return{step:new ne(0),tickMin:new ne(0),tickMax:new ne(0)};var s=my(new ne(n).sub(t).div(r-1),a,o),l;t<=0&&n>=0?l=new ne(0):(l=new ne(t).add(n).div(2),l=l.sub(new ne(l).mod(s)));var c=Math.ceil(l.sub(t).div(s).toNumber()),u=Math.ceil(new ne(n).sub(l).div(s).toNumber()),d=c+u+1;return d>r?py(t,n,r,a,o+1):(d<r&&(u=n>0?u+(r-d):u,c=n>0?c:c+(r-d)),{step:s,tickMin:l.sub(new ne(c).mul(s)),tickMax:l.add(new ne(u).mul(s))})},uA=function(t){var[n,r]=t,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:6,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,s=Math.max(a,2),[l,c]=hy([n,r]);if(l===-1/0||c===1/0){var u=c===1/0?[l,...ll(0,a-1).map(()=>1/0)]:[...ll(0,a-1).map(()=>-1/0),c];return n>r?u.reverse():u}if(l===c)return cA(l,a,o);var{step:d,tickMin:h,tickMax:m}=py(l,c,s,o,0),p=dy(h,m.add(new ne(.1).mul(d)),d);return n>r?p.reverse():p},dA=function(t,n){var[r,a]=t,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,[s,l]=hy([r,a]);if(s===-1/0||l===1/0)return[r,a];if(s===l)return[s];var c=Math.max(n,2),u=my(new ne(l).sub(s).div(c-1),o,0),d=[...dy(new ne(s),new ne(l),u),l];return o===!1&&(d=d.map(h=>Math.round(h))),r>a?d.reverse():d},gy=e=>e.rootProps.maxBarSize,hA=e=>e.rootProps.barGap,fy=e=>e.rootProps.barCategoryGap,mA=e=>e.rootProps.barSize,ki=e=>e.rootProps.stackOffset,yy=e=>e.rootProps.reverseStackOrder,Oc=e=>e.options.chartName,Ec=e=>e.rootProps.syncId,by=e=>e.rootProps.syncMethod,Mc=e=>e.options.eventEmitter,He={grid:-100,barBackground:-50,area:100,cursorRectangle:200,bar:300,line:400,axis:500,scatter:600,activeBar:1e3,cursorLine:1100,activeDot:1200,label:2e3},Rt={allowDecimals:!1,allowDuplicatedCategory:!0,angleAxisId:0,axisLine:!0,axisLineType:"polygon",cx:0,cy:0,orientation:"outer",reversed:!1,scale:"auto",tick:!0,tickLine:!0,tickSize:8,type:"category",zIndex:He.axis},Xe={allowDataOverflow:!1,allowDecimals:!1,allowDuplicatedCategory:!0,angle:0,axisLine:!0,includeHidden:!1,hide:!1,label:!1,orientation:"right",radiusAxisId:0,reversed:!1,scale:"auto",stroke:"#ccc",tick:!0,tickCount:5,type:"number",zIndex:He.axis},Ti=(e,t)=>{if(!(!e||!t))return e!=null&&e.reversed?[t[1],t[0]]:t},pA={allowDataOverflow:!1,allowDecimals:!1,allowDuplicatedCategory:!1,dataKey:void 0,domain:void 0,id:Rt.angleAxisId,includeHidden:!1,name:void 0,reversed:Rt.reversed,scale:Rt.scale,tick:Rt.tick,tickCount:void 0,ticks:void 0,type:Rt.type,unit:void 0},gA={allowDataOverflow:Xe.allowDataOverflow,allowDecimals:!1,allowDuplicatedCategory:Xe.allowDuplicatedCategory,dataKey:void 0,domain:void 0,id:Xe.radiusAxisId,includeHidden:!1,name:void 0,reversed:!1,scale:Xe.scale,tick:Xe.tick,tickCount:Xe.tickCount,ticks:void 0,type:Xe.type,unit:void 0},fA={allowDataOverflow:!1,allowDecimals:!1,allowDuplicatedCategory:Rt.allowDuplicatedCategory,dataKey:void 0,domain:void 0,id:Rt.angleAxisId,includeHidden:!1,name:void 0,reversed:!1,scale:Rt.scale,tick:Rt.tick,tickCount:void 0,ticks:void 0,type:"number",unit:void 0},yA={allowDataOverflow:Xe.allowDataOverflow,allowDecimals:!1,allowDuplicatedCategory:Xe.allowDuplicatedCategory,dataKey:void 0,domain:void 0,id:Xe.radiusAxisId,includeHidden:!1,name:void 0,reversed:!1,scale:Xe.scale,tick:Xe.tick,tickCount:Xe.tickCount,ticks:void 0,type:"category",unit:void 0},$c=(e,t)=>e.polarAxis.angleAxis[t]!=null?e.polarAxis.angleAxis[t]:e.layout.layoutType==="radial"?fA:pA,Dc=(e,t)=>e.polarAxis.radiusAxis[t]!=null?e.polarAxis.radiusAxis[t]:e.layout.layoutType==="radial"?yA:gA,Ii=e=>e.polarOptions,Bc=S([Jt,Zt,Oe],p2),vy=S([Ii,Bc],(e,t)=>{if(e!=null)return kt(e.innerRadius,t,0)}),wy=S([Ii,Bc],(e,t)=>{if(e!=null)return kt(e.outerRadius,t,t*.8)}),bA=e=>{if(e==null)return[0,0];var{startAngle:t,endAngle:n}=e;return[t,n]},xy=S([Ii],bA);S([$c,xy],Ti);var ky=S([Bc,vy,wy],(e,t,n)=>{if(!(e==null||t==null||n==null))return[t,n]});S([Dc,ky],Ti);var Ty=S([re,Ii,vy,wy,Jt,Zt],(e,t,n,r,a,o)=>{if(!(e!=="centric"&&e!=="radial"||t==null||n==null||r==null)){var{cx:s,cy:l,startAngle:c,endAngle:u}=t;return{cx:kt(s,a,a/2),cy:kt(l,o,o/2),innerRadius:n,outerRadius:r,startAngle:c,endAngle:u,clockWise:!1}}}),xe=(e,t)=>t,ji=(e,t,n)=>n;function Rc(e){return e==null?void 0:e.id}function Iy(e,t,n){var{chartData:r=[]}=t,{allowDuplicatedCategory:a,dataKey:o}=n,s=new Map;return e.forEach(l=>{var c,u=(c=l.data)!==null&&c!==void 0?c:r;if(!(u==null||u.length===0)){var d=Rc(l);u.forEach((h,m)=>{var p=o==null||a?m:String(Re(h,o,null)),g=Re(h,l.dataKey,0),b;s.has(p)?b=s.get(p):b={},Object.assign(b,{[d]:g}),s.set(p,b)})}}),Array.from(s.values())}function Ai(e){return"stackId"in e&&e.stackId!=null&&e.dataKey!=null}var Ni=(e,t)=>e===t?!0:e==null||t==null?!1:e[0]===t[0]&&e[1]===t[1];function Si(e,t){return Array.isArray(e)&&Array.isArray(t)&&e.length===0&&t.length===0?!0:e===t}function vA(e,t){if(e.length===t.length){for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return!1}var ke=e=>{var t=re(e);return t==="horizontal"?"xAxis":t==="vertical"?"yAxis":t==="centric"?"angleAxis":"radiusAxis"},yr=e=>e.tooltip.settings.axisId;function Lh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function So(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Lh(Object(n),!0).forEach(function(r){wA(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Lh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function wA(e,t,n){return(t=xA(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function xA(e){var t=kA(e,"string");return typeof t=="symbol"?t:t+""}function kA(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var cl=[0,"auto"],Ae={allowDataOverflow:!1,allowDecimals:!0,allowDuplicatedCategory:!0,angle:0,dataKey:void 0,domain:void 0,height:30,hide:!0,id:0,includeHidden:!1,interval:"preserveEnd",minTickGap:5,mirror:!1,name:void 0,orientation:"bottom",padding:{left:0,right:0},reversed:!1,scale:"auto",tick:!0,tickCount:5,tickFormatter:void 0,ticks:void 0,type:"category",unit:void 0},jy=(e,t)=>e.cartesianAxis.xAxis[t],en=(e,t)=>{var n=jy(e,t);return n??Ae},Ne={allowDataOverflow:!1,allowDecimals:!0,allowDuplicatedCategory:!0,angle:0,dataKey:void 0,domain:cl,hide:!0,id:0,includeHidden:!1,interval:"preserveEnd",minTickGap:5,mirror:!1,name:void 0,orientation:"left",padding:{top:0,bottom:0},reversed:!1,scale:"auto",tick:!0,tickCount:5,tickFormatter:void 0,ticks:void 0,type:"number",unit:void 0,width:oa},Ay=(e,t)=>e.cartesianAxis.yAxis[t],tn=(e,t)=>{var n=Ay(e,t);return n??Ne},TA={domain:[0,"auto"],includeHidden:!1,reversed:!1,allowDataOverflow:!1,allowDuplicatedCategory:!1,dataKey:void 0,id:0,name:"",range:[64,64],scale:"auto",type:"number",unit:""},_c=(e,t)=>{var n=e.cartesianAxis.zAxis[t];return n??TA},Ve=(e,t,n)=>{switch(t){case"xAxis":return en(e,n);case"yAxis":return tn(e,n);case"zAxis":return _c(e,n);case"angleAxis":return $c(e,n);case"radiusAxis":return Dc(e,n);default:throw new Error("Unexpected axis type: ".concat(t))}},IA=(e,t,n)=>{switch(t){case"xAxis":return en(e,n);case"yAxis":return tn(e,n);default:throw new Error("Unexpected axis type: ".concat(t))}},ha=(e,t,n)=>{switch(t){case"xAxis":return en(e,n);case"yAxis":return tn(e,n);case"angleAxis":return $c(e,n);case"radiusAxis":return Dc(e,n);default:throw new Error("Unexpected axis type: ".concat(t))}},Ny=e=>e.graphicalItems.cartesianItems.some(t=>t.type==="bar")||e.graphicalItems.polarItems.some(t=>t.type==="radialBar");function Sy(e,t){return n=>{switch(e){case"xAxis":return"xAxisId"in n&&n.xAxisId===t;case"yAxis":return"yAxisId"in n&&n.yAxisId===t;case"zAxis":return"zAxisId"in n&&n.zAxisId===t;case"angleAxis":return"angleAxisId"in n&&n.angleAxisId===t;case"radiusAxis":return"radiusAxisId"in n&&n.radiusAxisId===t;default:return!1}}}var Wc=e=>e.graphicalItems.cartesianItems,jA=S([xe,ji],Sy),Py=(e,t,n)=>e.filter(n).filter(r=>(t==null?void 0:t.includeHidden)===!0?!0:!r.hide),ma=S([Wc,Ve,jA],Py,{memoizeOptions:{resultEqualityCheck:Si}}),Cy=S([ma],e=>e.filter(t=>t.type==="area"||t.type==="bar").filter(Ai)),Oy=e=>e.filter(t=>!("stackId"in t)||t.stackId===void 0),AA=S([ma],Oy),Ey=e=>e.map(t=>t.data).filter(Boolean).flat(1),NA=S([ma],Ey,{memoizeOptions:{resultEqualityCheck:Si}}),My=(e,t)=>{var{chartData:n=[],dataStartIndex:r,dataEndIndex:a}=t;return e.length>0?e:n.slice(r,a+1)},Lc=S([NA,ey],My),$y=(e,t,n)=>(t==null?void 0:t.dataKey)!=null?e.map(r=>({value:Re(r,t.dataKey)})):n.length>0?n.map(r=>r.dataKey).flatMap(r=>e.map(a=>({value:Re(a,r)}))):e.map(r=>({value:r})),Pi=S([Lc,Ve,ma],$y);function Dy(e,t){switch(e){case"xAxis":return t.direction==="x";case"yAxis":return t.direction==="y";default:return!1}}function Ua(e){if(Et(e)||e instanceof Date){var t=Number(e);if(de(t))return t}}function Fh(e){if(Array.isArray(e)){var t=[Ua(e[0]),Ua(e[1])];return mn(t)?t:void 0}var n=Ua(e);if(n!=null)return[n,n]}function Kt(e){return e.map(Ua).filter(Vw)}function SA(e,t,n){return!n||typeof t!="number"||Ot(t)?[]:n.length?Kt(n.flatMap(r=>{var a=Re(e,r.dataKey),o,s;if(Array.isArray(a)?[o,s]=a:o=s=a,!(!de(o)||!de(s)))return[t-o,t+s]})):[]}var Te=e=>{var t=ke(e),n=yr(e);return ha(e,t,n)},pa=S([Te],e=>e==null?void 0:e.dataKey),PA=S([Cy,ey,Te],Iy),By=(e,t,n,r)=>{var a={},o=t.reduce((s,l)=>{if(l.stackId==null)return s;var c=s[l.stackId];return c==null&&(c=[]),c.push(l),s[l.stackId]=c,s},a);return Object.fromEntries(Object.entries(o).map(s=>{var[l,c]=s,u=r?[...c].reverse():c,d=u.map(Rc);return[l,{stackedData:o1(e,d,n),graphicalItems:u}]}))},ul=S([PA,Cy,ki,yy],By),Ry=(e,t,n,r)=>{var{dataStartIndex:a,dataEndIndex:o}=t;if(r==null&&n!=="zAxis"){var s=u1(e,a,o);if(!(s!=null&&s[0]===0&&s[1]===0))return s}},CA=S([Ve],e=>e.allowDataOverflow),Fc=e=>{var t;if(e==null||!("domain"in e))return cl;if(e.domain!=null)return e.domain;if("ticks"in e&&e.ticks!=null){if(e.type==="number"){var n=Kt(e.ticks);return[Math.min(...n),Math.max(...n)]}if(e.type==="category")return e.ticks.map(String)}return(t=e==null?void 0:e.domain)!==null&&t!==void 0?t:cl},_y=S([Ve],Fc),Wy=S([_y,CA],ty),OA=S([ul,Qt,xe,Wy],Ry,{memoizeOptions:{resultEqualityCheck:Ni}}),Hc=e=>e.errorBars,EA=(e,t,n)=>e.flatMap(r=>t[r.id]).filter(Boolean).filter(r=>Dy(n,r)),Po=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var a=n.filter(Boolean);if(a.length!==0){var o=a.flat(),s=Math.min(...o),l=Math.max(...o);return[s,l]}},Ly=(e,t,n,r,a)=>{var o,s;if(n.length>0&&e.forEach(l=>{n.forEach(c=>{var u,d,h=(u=r[c.id])===null||u===void 0?void 0:u.filter(v=>Dy(a,v)),m=Re(l,(d=t.dataKey)!==null&&d!==void 0?d:c.dataKey),p=SA(l,m,h);if(p.length>=2){var g=Math.min(...p),b=Math.max(...p);(o==null||g<o)&&(o=g),(s==null||b>s)&&(s=b)}var y=Fh(m);y!=null&&(o=o==null?y[0]:Math.min(o,y[0]),s=s==null?y[1]:Math.max(s,y[1]))})}),(t==null?void 0:t.dataKey)!=null&&e.forEach(l=>{var c=Fh(Re(l,t.dataKey));c!=null&&(o=o==null?c[0]:Math.min(o,c[0]),s=s==null?c[1]:Math.max(s,c[1]))}),de(o)&&de(s))return[o,s]},MA=S([Lc,Ve,AA,Hc,xe],Ly,{memoizeOptions:{resultEqualityCheck:Ni}});function $A(e){var{value:t}=e;if(Et(t)||t instanceof Date)return t}var DA=(e,t,n)=>{var r=e.map($A).filter(a=>a!=null);return n&&(t.dataKey==null||t.allowDuplicatedCategory&&$p(r))?bf(0,e.length):t.allowDuplicatedCategory?r:Array.from(new Set(r))},Fy=e=>e.referenceElements.dots,br=(e,t,n)=>e.filter(r=>r.ifOverflow==="extendDomain").filter(r=>t==="xAxis"?r.xAxisId===n:r.yAxisId===n),BA=S([Fy,xe,ji],br),Hy=e=>e.referenceElements.areas,RA=S([Hy,xe,ji],br),Yy=e=>e.referenceElements.lines,_A=S([Yy,xe,ji],br),zy=(e,t)=>{if(e!=null){var n=Kt(e.map(r=>t==="xAxis"?r.x:r.y));if(n.length!==0)return[Math.min(...n),Math.max(...n)]}},WA=S(BA,xe,zy),Gy=(e,t)=>{if(e!=null){var n=Kt(e.flatMap(r=>[t==="xAxis"?r.x1:r.y1,t==="xAxis"?r.x2:r.y2]));if(n.length!==0)return[Math.min(...n),Math.max(...n)]}},LA=S([RA,xe],Gy);function FA(e){var t;if(e.x!=null)return Kt([e.x]);var n=(t=e.segment)===null||t===void 0?void 0:t.map(r=>r.x);return n==null||n.length===0?[]:Kt(n)}function HA(e){var t;if(e.y!=null)return Kt([e.y]);var n=(t=e.segment)===null||t===void 0?void 0:t.map(r=>r.y);return n==null||n.length===0?[]:Kt(n)}var qy=(e,t)=>{if(e!=null){var n=e.flatMap(r=>t==="xAxis"?FA(r):HA(r));if(n.length!==0)return[Math.min(...n),Math.max(...n)]}},YA=S([_A,xe],qy),zA=S(WA,YA,LA,(e,t,n)=>Po(e,n,t)),Uy=(e,t,n,r,a,o,s,l)=>{if(n!=null)return n;var c=s==="vertical"&&l==="xAxis"||s==="horizontal"&&l==="yAxis",u=c?Po(r,o,a):Po(o,a);return tA(t,u,e.allowDataOverflow)},GA=S([Ve,_y,Wy,OA,MA,zA,re,xe],Uy,{memoizeOptions:{resultEqualityCheck:Ni}}),qA=[0,1],Ky=(e,t,n,r,a,o,s)=>{if(!((e==null||n==null||n.length===0)&&s===void 0)){var{dataKey:l,type:c}=e,u=Rn(t,o);if(u&&l==null){var d;return bf(0,(d=n==null?void 0:n.length)!==null&&d!==void 0?d:0)}return c==="category"?DA(r,e,u):a==="expand"?qA:s}},Yc=S([Ve,re,Lc,Pi,ki,xe,GA],Ky),Vy=(e,t,n,r,a)=>{if(e!=null){var{scale:o,type:s}=e;if(o==="auto")return t==="radial"&&a==="radiusAxis"?"band":t==="radial"&&a==="angleAxis"?"linear":s==="category"&&r&&(r.indexOf("LineChart")>=0||r.indexOf("AreaChart")>=0||r.indexOf("ComposedChart")>=0&&!n)?"point":s==="category"?"band":"linear";if(typeof o=="string"){var l="scale".concat(ea(o));return l in $r?l:"point"}}},ga=S([Ve,re,Ny,Oc,xe],Vy);function UA(e){if(e!=null){if(e in $r)return $r[e]();var t="scale".concat(ea(e));if(t in $r)return $r[t]()}}function zc(e,t,n,r){if(!(n==null||r==null)){if(typeof e.scale=="function")return e.scale.copy().domain(n).range(r);var a=UA(t);if(a!=null){var o=a.domain(n).range(r);return e1(o),o}}}var Jy=(e,t,n)=>{var r=Fc(t);if(!(n!=="auto"&&n!=="linear")){if(t!=null&&t.tickCount&&Array.isArray(r)&&(r[0]==="auto"||r[1]==="auto")&&mn(e))return uA(e,t.tickCount,t.allowDecimals);if(t!=null&&t.tickCount&&t.type==="number"&&mn(e))return dA(e,t.tickCount,t.allowDecimals)}},Gc=S([Yc,ha,ga],Jy),Zy=(e,t,n,r)=>{if(r!=="angleAxis"&&(e==null?void 0:e.type)==="number"&&mn(t)&&Array.isArray(n)&&n.length>0){var a=t[0],o=n[0],s=t[1],l=n[n.length-1];return[Math.min(a,o),Math.max(s,l)]}return t},KA=S([Ve,Yc,Gc,xe],Zy),VA=S(Pi,Ve,(e,t)=>{if(!(!t||t.type!=="number")){var n=1/0,r=Array.from(Kt(e.map(h=>h.value))).sort((h,m)=>h-m),a=r[0],o=r[r.length-1];if(a==null||o==null)return 1/0;var s=o-a;if(s===0)return 1/0;for(var l=0;l<r.length-1;l++){var c=r[l],u=r[l+1];if(!(c==null||u==null)){var d=u-c;n=Math.min(n,d)}}return n/s}}),Xy=S(VA,re,fy,Oe,(e,t,n,r,a)=>a,(e,t,n,r,a)=>{if(!de(e))return 0;var o=t==="vertical"?r.height:r.width;if(a==="gap")return e*o/2;if(a==="no-gap"){var s=kt(n,e*o),l=e*o/2;return l-s-(l-s)/o*s}return 0}),JA=(e,t,n)=>{var r=en(e,t);return r==null||typeof r.padding!="string"?0:Xy(e,"xAxis",t,n,r.padding)},ZA=(e,t,n)=>{var r=tn(e,t);return r==null||typeof r.padding!="string"?0:Xy(e,"yAxis",t,n,r.padding)},XA=S(en,JA,(e,t)=>{var n,r;if(e==null)return{left:0,right:0};var{padding:a}=e;return typeof a=="string"?{left:t,right:t}:{left:((n=a.left)!==null&&n!==void 0?n:0)+t,right:((r=a.right)!==null&&r!==void 0?r:0)+t}}),QA=S(tn,ZA,(e,t)=>{var n,r;if(e==null)return{top:0,bottom:0};var{padding:a}=e;return typeof a=="string"?{top:t,bottom:t}:{top:((n=a.top)!==null&&n!==void 0?n:0)+t,bottom:((r=a.bottom)!==null&&r!==void 0?r:0)+t}}),eN=S([Oe,XA,ci,li,(e,t,n)=>n],(e,t,n,r,a)=>{var{padding:o}=r;return a?[o.left,n.width-o.right]:[e.left+t.left,e.left+e.width-t.right]}),tN=S([Oe,re,QA,ci,li,(e,t,n)=>n],(e,t,n,r,a,o)=>{var{padding:s}=a;return o?[r.height-s.bottom,s.top]:t==="horizontal"?[e.top+e.height-n.bottom,e.top+n.top]:[e.top+n.top,e.top+e.height-n.bottom]}),fa=(e,t,n,r)=>{var a;switch(t){case"xAxis":return eN(e,n,r);case"yAxis":return tN(e,n,r);case"zAxis":return(a=_c(e,n))===null||a===void 0?void 0:a.range;case"angleAxis":return xy(e);case"radiusAxis":return ky(e,n);default:return}},Qy=S([Ve,fa],Ti),Ci=S([Ve,ga,KA,Qy],zc);S([ma,Hc,xe],EA);function e0(e,t){return e.id<t.id?-1:e.id>t.id?1:0}var Oi=(e,t)=>t,Ei=(e,t,n)=>n,nN=S(ii,Oi,Ei,(e,t,n)=>e.filter(r=>r.orientation===t).filter(r=>r.mirror===n).sort(e0)),rN=S(si,Oi,Ei,(e,t,n)=>e.filter(r=>r.orientation===t).filter(r=>r.mirror===n).sort(e0)),t0=(e,t)=>({width:e.width,height:t.height}),aN=(e,t)=>{var n=typeof t.width=="number"?t.width:oa;return{width:n,height:e.height}},n0=S(Oe,en,t0),oN=(e,t,n)=>{switch(t){case"top":return e.top;case"bottom":return n-e.bottom;default:return 0}},iN=(e,t,n)=>{switch(t){case"left":return e.left;case"right":return n-e.right;default:return 0}},sN=S(Zt,Oe,nN,Oi,Ei,(e,t,n,r,a)=>{var o={},s;return n.forEach(l=>{var c=t0(t,l);s==null&&(s=oN(t,r,e));var u=r==="top"&&!a||r==="bottom"&&a;o[l.id]=s-Number(u)*c.height,s+=(u?-1:1)*c.height}),o}),lN=S(Jt,Oe,rN,Oi,Ei,(e,t,n,r,a)=>{var o={},s;return n.forEach(l=>{var c=aN(t,l);s==null&&(s=iN(t,r,e));var u=r==="left"&&!a||r==="right"&&a;o[l.id]=s-Number(u)*c.width,s+=(u?-1:1)*c.width}),o}),cN=(e,t)=>{var n=en(e,t);if(n!=null)return sN(e,n.orientation,n.mirror)},uN=S([Oe,en,cN,(e,t)=>t],(e,t,n,r)=>{if(t!=null){var a=n==null?void 0:n[r];return a==null?{x:e.left,y:0}:{x:e.left,y:a}}}),dN=(e,t)=>{var n=tn(e,t);if(n!=null)return lN(e,n.orientation,n.mirror)},hN=S([Oe,tn,dN,(e,t)=>t],(e,t,n,r)=>{if(t!=null){var a=n==null?void 0:n[r];return a==null?{x:0,y:e.top}:{x:a,y:e.top}}}),r0=S(Oe,tn,(e,t)=>{var n=typeof t.width=="number"?t.width:oa;return{width:n,height:e.height}}),Hh=(e,t,n)=>{switch(t){case"xAxis":return n0(e,n).width;case"yAxis":return r0(e,n).height;default:return}},a0=(e,t,n,r)=>{if(n!=null){var{allowDuplicatedCategory:a,type:o,dataKey:s}=n,l=Rn(e,r),c=t.map(u=>u.value);if(s&&l&&o==="category"&&a&&$p(c))return c}},qc=S([re,Pi,Ve,xe],a0),o0=(e,t,n,r)=>{if(!(n==null||n.dataKey==null)){var{type:a,scale:o}=n,s=Rn(e,r);if(s&&(a==="number"||o!=="auto"))return t.map(l=>l.value)}},Uc=S([re,Pi,ha,xe],o0);S([re,IA,ga,Ci,qc,Uc,fa,Gc,xe],(e,t,n,r,a,o,s,l,c)=>{if(t!=null){var u=Rn(e,c);return{angle:t.angle,interval:t.interval,minTickGap:t.minTickGap,orientation:t.orientation,tick:t.tick,tickCount:t.tickCount,tickFormatter:t.tickFormatter,ticks:t.ticks,type:t.type,unit:t.unit,axisType:c,categoricalDomain:o,duplicateDomain:a,isCategorical:u,niceTicks:l,range:s,realScaleType:n,scale:r}}});var mN=(e,t,n,r,a,o,s,l,c)=>{if(!(t==null||r==null)){var u=Rn(e,c),{type:d,ticks:h,tickCount:m}=t,p=n==="scaleBand"&&typeof r.bandwidth=="function"?r.bandwidth()/2:2,g=d==="category"&&r.bandwidth?r.bandwidth()/p:0;g=c==="angleAxis"&&o!=null&&o.length>=2?et(o[0]-o[1])*2*g:g;var b=h||a;if(b){var y=b.map((v,x)=>{var k=s?s.indexOf(v):v;return{index:x,coordinate:r(k)+g,value:v,offset:g}});return y.filter(v=>de(v.coordinate))}return u&&l?l.map((v,x)=>({coordinate:r(v)+g,value:v,index:x,offset:g})).filter(v=>de(v.coordinate)):r.ticks?r.ticks(m).map(v=>({coordinate:r(v)+g,value:v,offset:g})):r.domain().map((v,x)=>({coordinate:r(v)+g,value:s?s[v]:v,index:x,offset:g}))}},i0=S([re,ha,ga,Ci,Gc,fa,qc,Uc,xe],mN),pN=(e,t,n,r,a,o,s)=>{if(!(t==null||n==null||r==null||r[0]===r[1])){var l=Rn(e,s),{tickCount:c}=t,u=0;return u=s==="angleAxis"&&(r==null?void 0:r.length)>=2?et(r[0]-r[1])*2*u:u,l&&o?o.map((d,h)=>({coordinate:n(d)+u,value:d,index:h,offset:u})):n.ticks?n.ticks(c).map(d=>({coordinate:n(d)+u,value:d,offset:u})):n.domain().map((d,h)=>({coordinate:n(d)+u,value:a?a[d]:d,index:h,offset:u}))}},ur=S([re,ha,Ci,fa,qc,Uc,xe],pN),dr=S(Ve,Ci,(e,t)=>{if(!(e==null||t==null))return So(So({},e),{},{scale:t})}),gN=S([Ve,ga,Yc,Qy],zc);S((e,t,n)=>_c(e,n),gN,(e,t)=>{if(!(e==null||t==null))return So(So({},e),{},{scale:t})});var fN=S([re,ii,si],(e,t,n)=>{switch(e){case"horizontal":return t.some(r=>r.reversed)?"right-to-left":"left-to-right";case"vertical":return n.some(r=>r.reversed)?"bottom-to-top":"top-to-bottom";case"centric":case"radial":return"left-to-right";default:return}}),s0=e=>e.options.defaultTooltipEventType,l0=e=>e.options.validateTooltipEventTypes;function c0(e,t,n){if(e==null)return t;var r=e?"axis":"item";return n==null?t:n.includes(r)?r:t}function Kc(e,t){var n=s0(e),r=l0(e);return c0(t,n,r)}function yN(e){return V(t=>Kc(t,e))}var u0=(e,t)=>{var n,r=Number(t);if(!(Ot(r)||t==null))return r>=0?e==null||(n=e[r])===null||n===void 0?void 0:n.value:void 0},bN=e=>e.tooltip.settings,sn={active:!1,index:null,dataKey:void 0,graphicalItemId:void 0,coordinate:void 0},vN={itemInteraction:{click:sn,hover:sn},axisInteraction:{click:sn,hover:sn},keyboardInteraction:sn,syncInteraction:{active:!1,index:null,dataKey:void 0,label:void 0,coordinate:void 0,sourceViewBox:void 0,graphicalItemId:void 0},tooltipItemPayloads:[],settings:{shared:void 0,trigger:"hover",axisId:0,active:!1,defaultIndex:void 0}},d0=Ze({name:"tooltip",initialState:vN,reducers:{addTooltipEntrySettings:{reducer(e,t){e.tooltipItemPayloads.push(t.payload)},prepare:ce()},replaceTooltipEntrySettings:{reducer(e,t){var{prev:n,next:r}=t.payload,a=xt(e).tooltipItemPayloads.indexOf(n);a>-1&&(e.tooltipItemPayloads[a]=r)},prepare:ce()},removeTooltipEntrySettings:{reducer(e,t){var n=xt(e).tooltipItemPayloads.indexOf(t.payload);n>-1&&e.tooltipItemPayloads.splice(n,1)},prepare:ce()},setTooltipSettingsState(e,t){e.settings=t.payload},setActiveMouseOverItemIndex(e,t){e.syncInteraction.active=!1,e.keyboardInteraction.active=!1,e.itemInteraction.hover.active=!0,e.itemInteraction.hover.index=t.payload.activeIndex,e.itemInteraction.hover.dataKey=t.payload.activeDataKey,e.itemInteraction.hover.graphicalItemId=t.payload.activeGraphicalItemId,e.itemInteraction.hover.coordinate=t.payload.activeCoordinate},mouseLeaveChart(e){e.itemInteraction.hover.active=!1,e.axisInteraction.hover.active=!1},mouseLeaveItem(e){e.itemInteraction.hover.active=!1},setActiveClickItemIndex(e,t){e.syncInteraction.active=!1,e.itemInteraction.click.active=!0,e.keyboardInteraction.active=!1,e.itemInteraction.click.index=t.payload.activeIndex,e.itemInteraction.click.dataKey=t.payload.activeDataKey,e.itemInteraction.click.graphicalItemId=t.payload.activeGraphicalItemId,e.itemInteraction.click.coordinate=t.payload.activeCoordinate},setMouseOverAxisIndex(e,t){e.syncInteraction.active=!1,e.axisInteraction.hover.active=!0,e.keyboardInteraction.active=!1,e.axisInteraction.hover.index=t.payload.activeIndex,e.axisInteraction.hover.dataKey=t.payload.activeDataKey,e.axisInteraction.hover.coordinate=t.payload.activeCoordinate},setMouseClickAxisIndex(e,t){e.syncInteraction.active=!1,e.keyboardInteraction.active=!1,e.axisInteraction.click.active=!0,e.axisInteraction.click.index=t.payload.activeIndex,e.axisInteraction.click.dataKey=t.payload.activeDataKey,e.axisInteraction.click.coordinate=t.payload.activeCoordinate},setSyncInteraction(e,t){e.syncInteraction=t.payload},setKeyboardInteraction(e,t){e.keyboardInteraction.active=t.payload.active,e.keyboardInteraction.index=t.payload.activeIndex,e.keyboardInteraction.coordinate=t.payload.activeCoordinate}}}),{addTooltipEntrySettings:wN,replaceTooltipEntrySettings:xN,removeTooltipEntrySettings:kN,setTooltipSettingsState:TN,setActiveMouseOverItemIndex:h0,mouseLeaveItem:IN,mouseLeaveChart:m0,setActiveClickItemIndex:jN,setMouseOverAxisIndex:p0,setMouseClickAxisIndex:AN,setSyncInteraction:dl,setKeyboardInteraction:hl}=d0.actions,NN=d0.reducer;function Yh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function _a(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Yh(Object(n),!0).forEach(function(r){SN(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Yh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function SN(e,t,n){return(t=PN(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function PN(e){var t=CN(e,"string");return typeof t=="symbol"?t:t+""}function CN(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ON(e,t,n){return t==="axis"?n==="click"?e.axisInteraction.click:e.axisInteraction.hover:n==="click"?e.itemInteraction.click:e.itemInteraction.hover}function EN(e){return e.index!=null}var g0=(e,t,n,r)=>{if(t==null)return sn;var a=ON(e,t,n);if(a==null)return sn;if(a.active)return a;if(e.keyboardInteraction.active)return e.keyboardInteraction;if(e.syncInteraction.active&&e.syncInteraction.index!=null)return e.syncInteraction;var o=e.settings.active===!0;if(EN(a)){if(o)return _a(_a({},a),{},{active:!0})}else if(r!=null)return{active:!0,coordinate:void 0,dataKey:void 0,index:r,graphicalItemId:void 0};return _a(_a({},sn),{},{coordinate:a.coordinate})};function MN(e){if(typeof e=="number")return Number.isFinite(e)?e:void 0;if(e instanceof Date){var t=e.valueOf();return Number.isFinite(t)?t:void 0}var n=Number(e);return Number.isFinite(n)?n:void 0}function $N(e,t){var n=MN(e),r=t[0],a=t[1];if(n===void 0)return!1;var o=Math.min(r,a),s=Math.max(r,a);return n>=o&&n<=s}function DN(e,t,n){if(n==null||t==null)return!0;var r=Re(e,t);return r==null||!mn(n)?!0:$N(r,n)}var Vc=(e,t,n,r)=>{var a=e==null?void 0:e.index;if(a==null)return null;var o=Number(a);if(!de(o))return a;var s=0,l=1/0;t.length>0&&(l=t.length-1);var c=Math.max(s,Math.min(o,l)),u=t[c];return u==null||DN(u,n,r)?String(c):null},f0=(e,t,n,r,a,o,s,l)=>{if(!(o==null||l==null)){var c=s[0],u=c==null?void 0:l(c.positions,o);if(u!=null)return u;var d=a==null?void 0:a[Number(o)];if(d)switch(n){case"horizontal":return{x:d.coordinate,y:(r.top+t)/2};default:return{x:(r.left+e)/2,y:d.coordinate}}}},y0=(e,t,n,r)=>{if(t==="axis")return e.tooltipItemPayloads;if(e.tooltipItemPayloads.length===0)return[];var a;if(n==="hover"?a=e.itemInteraction.hover.graphicalItemId:a=e.itemInteraction.click.graphicalItemId,a==null&&r!=null){var o=e.tooltipItemPayloads[0];return o!=null?[o]:[]}return e.tooltipItemPayloads.filter(s=>{var l;return((l=s.settings)===null||l===void 0?void 0:l.graphicalItemId)===a})},ya=e=>e.options.tooltipPayloadSearcher,vr=e=>e.tooltip;function zh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Gh(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?zh(Object(n),!0).forEach(function(r){BN(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):zh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function BN(e,t,n){return(t=RN(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function RN(e){var t=_N(e,"string");return typeof t=="symbol"?t:t+""}function _N(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function WN(e,t){return e??t}var b0=(e,t,n,r,a,o,s)=>{if(!(t==null||o==null)){var{chartData:l,computedData:c,dataStartIndex:u,dataEndIndex:d}=n,h=[];return e.reduce((m,p)=>{var g,{dataDefinedOnItem:b,settings:y}=p,v=WN(b,l),x=Array.isArray(v)?Fg(v,u,d):v,k=(g=y==null?void 0:y.dataKey)!==null&&g!==void 0?g:r,I=y==null?void 0:y.nameKey,w;if(r&&Array.isArray(x)&&!Array.isArray(x[0])&&s==="axis"?w=Kw(x,r,a):w=o(x,t,c,I),Array.isArray(w))w.forEach(j=>{var E=Gh(Gh({},y),{},{name:j.name,unit:j.unit,color:void 0,fill:void 0});m.push(ad({tooltipEntrySettings:E,dataKey:j.dataKey,payload:j.payload,value:Re(j.payload,j.dataKey),name:j.name}))});else{var T;m.push(ad({tooltipEntrySettings:y,dataKey:k,payload:w,value:Re(w,k),name:(T=Re(w,I))!==null&&T!==void 0?T:y==null?void 0:y.name}))}return m},h)}},Jc=S([Te,re,Ny,Oc,ke],Vy),LN=S([e=>e.graphicalItems.cartesianItems,e=>e.graphicalItems.polarItems],(e,t)=>[...e,...t]),FN=S([ke,yr],Sy),wr=S([LN,Te,FN],Py,{memoizeOptions:{resultEqualityCheck:Si}}),HN=S([wr],e=>e.filter(Ai)),YN=S([wr],Ey,{memoizeOptions:{resultEqualityCheck:Si}}),xr=S([YN,Qt],My),zN=S([HN,Qt,Te],Iy),Zc=S([xr,Te,wr],$y),v0=S([Te],Fc),GN=S([Te],e=>e.allowDataOverflow),w0=S([v0,GN],ty),qN=S([wr],e=>e.filter(Ai)),UN=S([zN,qN,ki,yy],By),KN=S([UN,Qt,ke,w0],Ry),VN=S([wr],Oy),JN=S([xr,Te,VN,Hc,ke],Ly,{memoizeOptions:{resultEqualityCheck:Ni}}),ZN=S([Fy,ke,yr],br),XN=S([ZN,ke],zy),QN=S([Hy,ke,yr],br),eS=S([QN,ke],Gy),tS=S([Yy,ke,yr],br),nS=S([tS,ke],qy),rS=S([XN,nS,eS],Po),aS=S([Te,v0,w0,KN,JN,rS,re,ke],Uy),ba=S([Te,re,xr,Zc,ki,ke,aS],Ky),oS=S([ba,Te,Jc],Jy),iS=S([Te,ba,oS,ke],Zy),x0=e=>{var t=ke(e),n=yr(e),r=!1;return fa(e,t,n,r)},k0=S([Te,x0],Ti),T0=S([Te,Jc,iS,k0],zc),sS=S([re,Zc,Te,ke],a0),lS=S([re,Zc,Te,ke],o0),cS=(e,t,n,r,a,o,s,l)=>{if(t){var{type:c}=t,u=Rn(e,l);if(r){var d=n==="scaleBand"&&r.bandwidth?r.bandwidth()/2:2,h=c==="category"&&r.bandwidth?r.bandwidth()/d:0;return h=l==="angleAxis"&&a!=null&&(a==null?void 0:a.length)>=2?et(a[0]-a[1])*2*h:h,u&&s?s.map((m,p)=>({coordinate:r(m)+h,value:m,index:p,offset:h})):r.domain().map((m,p)=>({coordinate:r(m)+h,value:o?o[m]:m,index:p,offset:h}))}}},nn=S([re,Te,Jc,T0,x0,sS,lS,ke],cS),Xc=S([s0,l0,bN],(e,t,n)=>c0(n.shared,e,t)),I0=e=>e.tooltip.settings.trigger,Qc=e=>e.tooltip.settings.defaultIndex,va=S([vr,Xc,I0,Qc],g0),hr=S([va,xr,pa,ba],Vc),j0=S([nn,hr],u0),A0=S([va],e=>{if(e)return e.dataKey});S([va],e=>{if(e)return e.graphicalItemId});var N0=S([vr,Xc,I0,Qc],y0),uS=S([Jt,Zt,re,Oe,nn,Qc,N0,ya],f0),dS=S([va,uS],(e,t)=>e!=null&&e.coordinate?e.coordinate:t),hS=S([va],e=>{var t;return(t=e==null?void 0:e.active)!==null&&t!==void 0?t:!1}),mS=S([N0,hr,Qt,pa,j0,ya,Xc],b0);S([mS],e=>{if(e!=null){var t=e.map(n=>n.payload).filter(n=>n!=null);return Array.from(new Set(t))}});function qh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Uh(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?qh(Object(n),!0).forEach(function(r){pS(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function pS(e,t,n){return(t=gS(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function gS(e){var t=fS(e,"string");return typeof t=="symbol"?t:t+""}function fS(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var yS=()=>V(Te),bS=()=>{var e=yS(),t=V(nn),n=V(T0);return lo(!e||!n?void 0:Uh(Uh({},e),{},{scale:n}),t)};function Kh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function zn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Kh(Object(n),!0).forEach(function(r){vS(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Kh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function vS(e,t,n){return(t=wS(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function wS(e){var t=xS(e,"string");return typeof t=="symbol"?t:t+""}function xS(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var kS=(e,t,n,r)=>{var a=t.find(o=>o&&o.index===n);if(a){if(e==="horizontal")return{x:a.coordinate,y:r.chartY};if(e==="vertical")return{x:r.chartX,y:a.coordinate}}return{x:0,y:0}},TS=(e,t,n,r)=>{var a=t.find(u=>u&&u.index===n);if(a){if(e==="centric"){var o=a.coordinate,{radius:s}=r;return zn(zn(zn({},r),Be(r.cx,r.cy,s,o)),{},{angle:o,radius:s})}var l=a.coordinate,{angle:c}=r;return zn(zn(zn({},r),Be(r.cx,r.cy,l,c)),{},{angle:c,radius:l})}return{angle:0,clockWise:!1,cx:0,cy:0,endAngle:0,innerRadius:0,outerRadius:0,radius:0,startAngle:0,x:0,y:0}};function IS(e,t){var{chartX:n,chartY:r}=e;return n>=t.left&&n<=t.left+t.width&&r>=t.top&&r<=t.top+t.height}var S0=(e,t,n,r,a)=>{var o,s=(o=t==null?void 0:t.length)!==null&&o!==void 0?o:0;if(s<=1||e==null)return 0;if(r==="angleAxis"&&a!=null&&Math.abs(Math.abs(a[1]-a[0])-360)<=1e-6)for(var l=0;l<s;l++){var c,u,d,h,m,p=l>0?(c=n[l-1])===null||c===void 0?void 0:c.coordinate:(u=n[s-1])===null||u===void 0?void 0:u.coordinate,g=(d=n[l])===null||d===void 0?void 0:d.coordinate,b=l>=s-1?(h=n[0])===null||h===void 0?void 0:h.coordinate:(m=n[l+1])===null||m===void 0?void 0:m.coordinate,y=void 0;if(!(p==null||g==null||b==null))if(et(g-p)!==et(b-g)){var v=[];if(et(b-g)===et(a[1]-a[0])){y=b;var x=g+a[1]-a[0];v[0]=Math.min(x,(x+p)/2),v[1]=Math.max(x,(x+p)/2)}else{y=p;var k=b+a[1]-a[0];v[0]=Math.min(g,(k+g)/2),v[1]=Math.max(g,(k+g)/2)}var I=[Math.min(g,(y+g)/2),Math.max(g,(y+g)/2)];if(e>I[0]&&e<=I[1]||e>=v[0]&&e<=v[1]){var w;return(w=n[l])===null||w===void 0?void 0:w.index}}else{var T=Math.min(p,b),j=Math.max(p,b);if(e>(T+g)/2&&e<=(j+g)/2){var E;return(E=n[l])===null||E===void 0?void 0:E.index}}}else if(t)for(var O=0;O<s;O++){var $=t[O];if($!=null){var N=t[O+1],D=t[O-1];if(O===0&&N!=null&&e<=($.coordinate+N.coordinate)/2||O===s-1&&D!=null&&e>($.coordinate+D.coordinate)/2||O>0&&O<s-1&&D!=null&&N!=null&&e>($.coordinate+D.coordinate)/2&&e<=($.coordinate+N.coordinate)/2)return $.index}}return-1},jS=()=>V(Oc),eu=(e,t)=>t,P0=(e,t,n)=>n,tu=(e,t,n,r)=>r,AS=S(nn,e=>Zo(e,t=>t.coordinate)),nu=S([vr,eu,P0,tu],g0),ru=S([nu,xr,pa,ba],Vc),NS=(e,t,n)=>{if(t!=null){var r=vr(e);return t==="axis"?n==="hover"?r.axisInteraction.hover.dataKey:r.axisInteraction.click.dataKey:n==="hover"?r.itemInteraction.hover.dataKey:r.itemInteraction.click.dataKey}},C0=S([vr,eu,P0,tu],y0),Co=S([Jt,Zt,re,Oe,nn,tu,C0,ya],f0),SS=S([nu,Co],(e,t)=>{var n;return(n=e.coordinate)!==null&&n!==void 0?n:t}),O0=S([nn,ru],u0),PS=S([C0,ru,Qt,pa,O0,ya,eu],b0),CS=S([nu,ru],(e,t)=>({isActive:e.active&&t!=null,activeIndex:t})),OS=(e,t,n,r,a,o,s)=>{if(!(!e||!n||!r||!a)&&IS(e,s)){var l=d1(e,t),c=S0(l,o,a,n,r),u=kS(t,a,c,e);return{activeIndex:String(c),activeCoordinate:u}}},ES=(e,t,n,r,a,o,s)=>{if(!(!e||!r||!a||!o||!n)){var l=v2(e,n);if(l){var c=h1(l,t),u=S0(c,s,o,r,a),d=TS(t,o,u,l);return{activeIndex:String(u),activeCoordinate:d}}}},MS=(e,t,n,r,a,o,s,l)=>{if(!(!e||!t||!r||!a||!o))return t==="horizontal"||t==="vertical"?OS(e,t,r,a,o,s,l):ES(e,t,n,r,a,o,s)},$S=S(e=>e.zIndex.zIndexMap,(e,t)=>t,(e,t,n)=>n,(e,t,n)=>{if(t!=null){var r=e[t];if(r!=null)return n?r.panoramaElement:r.element}}),DS=S(e=>e.zIndex.zIndexMap,e=>{var t=Object.keys(e).map(r=>parseInt(r,10)).concat(Object.values(He)),n=Array.from(new Set(t));return n.sort((r,a)=>r-a)},{memoizeOptions:{resultEqualityCheck:vA}});function Vh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Jh(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Vh(Object(n),!0).forEach(function(r){BS(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Vh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function BS(e,t,n){return(t=RS(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function RS(e){var t=_S(e,"string");return typeof t=="symbol"?t:t+""}function _S(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var WS={},LS={zIndexMap:Object.values(He).reduce((e,t)=>Jh(Jh({},e),{},{[t]:{element:void 0,panoramaElement:void 0,consumers:0}}),WS)},FS=new Set(Object.values(He));function HS(e){return FS.has(e)}var E0=Ze({name:"zIndex",initialState:LS,reducers:{registerZIndexPortal:{reducer:(e,t)=>{var{zIndex:n}=t.payload;e.zIndexMap[n]?e.zIndexMap[n].consumers+=1:e.zIndexMap[n]={consumers:1,element:void 0,panoramaElement:void 0}},prepare:ce()},unregisterZIndexPortal:{reducer:(e,t)=>{var{zIndex:n}=t.payload;e.zIndexMap[n]&&(e.zIndexMap[n].consumers-=1,e.zIndexMap[n].consumers<=0&&!HS(n)&&delete e.zIndexMap[n])},prepare:ce()},registerZIndexPortalElement:{reducer:(e,t)=>{var{zIndex:n,element:r,isPanorama:a}=t.payload;e.zIndexMap[n]?a?e.zIndexMap[n].panoramaElement=r:e.zIndexMap[n].element=r:e.zIndexMap[n]={consumers:0,element:a?void 0:r,panoramaElement:a?r:void 0}},prepare:ce()},unregisterZIndexPortalElement:{reducer:(e,t)=>{var{zIndex:n}=t.payload;e.zIndexMap[n]&&(t.payload.isPanorama?e.zIndexMap[n].panoramaElement=void 0:e.zIndexMap[n].element=void 0)},prepare:ce()}}}),{registerZIndexPortal:YS,unregisterZIndexPortal:zS,registerZIndexPortalElement:GS,unregisterZIndexPortalElement:qS}=E0.actions,US=E0.reducer;function fn(e){var{zIndex:t,children:n}=e,r=z1(),a=r&&t!==void 0&&t!==0,o=at(),s=ge();f.useLayoutEffect(()=>a?(s(YS({zIndex:t})),()=>{s(zS({zIndex:t}))}):ta,[s,t,a]);var l=V(c=>$S(c,t,o));return a?l?Tl.createPortal(n,l):null:n}function ml(){return ml=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ml.apply(null,arguments)}function Zh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Wa(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Zh(Object(n),!0).forEach(function(r){KS(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Zh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function KS(e,t,n){return(t=VS(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function VS(e){var t=JS(e,"string");return typeof t=="symbol"?t:t+""}function JS(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ZS(e){var{cursor:t,cursorComp:n,cursorProps:r}=e;return f.isValidElement(t)?f.cloneElement(t,r):f.createElement(n,r)}function XS(e){var t,{coordinate:n,payload:r,index:a,offset:o,tooltipAxisBandSize:s,layout:l,cursor:c,tooltipEventType:u,chartName:d}=e,h=n,m=r,p=a;if(!c||!h||d!=="ScatterChart"&&u!=="axis")return null;var g,b,y;if(d==="ScatterChart")g=h,b=ET,y=He.cursorLine;else if(d==="BarChart")g=MT(l,h,o,s),b=df,y=He.cursorRectangle;else if(l==="radial"&&Rp(h)){var{cx:v,cy:x,radius:k,startAngle:I,endAngle:w}=hf(h);g={cx:v,cy:x,startAngle:I,endAngle:w,innerRadius:k,outerRadius:k},b=pf,y=He.cursorLine}else g={points:T2(l,h,o)},b=of,y=He.cursorLine;var T=typeof c=="object"&&"className"in c?c.className:void 0,j=Wa(Wa(Wa(Wa({stroke:"#ccc",pointerEvents:"none"},o),g),Sl(c)),{},{payload:m,payloadIndex:p,className:le("recharts-tooltip-cursor",T)});return f.createElement(fn,{zIndex:(t=e.zIndex)!==null&&t!==void 0?t:y},f.createElement(ZS,{cursor:c,cursorComp:b,cursorProps:j}))}function QS(e){var t=bS(),n=F1(),r=ia(),a=jS();return t==null||n==null||r==null||a==null?null:f.createElement(XS,ml({},e,{offset:n,layout:r,tooltipAxisBandSize:t,chartName:a}))}var M0=f.createContext(null),eP=()=>f.useContext(M0),$0={exports:{}};(function(e){var t=Object.prototype.hasOwnProperty,n="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(n=!1));function a(c,u,d){this.fn=c,this.context=u,this.once=d||!1}function o(c,u,d,h,m){if(typeof d!="function")throw new TypeError("The listener must be a function");var p=new a(d,h||c,m),g=n?n+u:u;return c._events[g]?c._events[g].fn?c._events[g]=[c._events[g],p]:c._events[g].push(p):(c._events[g]=p,c._eventsCount++),c}function s(c,u){--c._eventsCount===0?c._events=new r:delete c._events[u]}function l(){this._events=new r,this._eventsCount=0}l.prototype.eventNames=function(){var u=[],d,h;if(this._eventsCount===0)return u;for(h in d=this._events)t.call(d,h)&&u.push(n?h.slice(1):h);return Object.getOwnPropertySymbols?u.concat(Object.getOwnPropertySymbols(d)):u},l.prototype.listeners=function(u){var d=n?n+u:u,h=this._events[d];if(!h)return[];if(h.fn)return[h.fn];for(var m=0,p=h.length,g=new Array(p);m<p;m++)g[m]=h[m].fn;return g},l.prototype.listenerCount=function(u){var d=n?n+u:u,h=this._events[d];return h?h.fn?1:h.length:0},l.prototype.emit=function(u,d,h,m,p,g){var b=n?n+u:u;if(!this._events[b])return!1;var y=this._events[b],v=arguments.length,x,k;if(y.fn){switch(y.once&&this.removeListener(u,y.fn,void 0,!0),v){case 1:return y.fn.call(y.context),!0;case 2:return y.fn.call(y.context,d),!0;case 3:return y.fn.call(y.context,d,h),!0;case 4:return y.fn.call(y.context,d,h,m),!0;case 5:return y.fn.call(y.context,d,h,m,p),!0;case 6:return y.fn.call(y.context,d,h,m,p,g),!0}for(k=1,x=new Array(v-1);k<v;k++)x[k-1]=arguments[k];y.fn.apply(y.context,x)}else{var I=y.length,w;for(k=0;k<I;k++)switch(y[k].once&&this.removeListener(u,y[k].fn,void 0,!0),v){case 1:y[k].fn.call(y[k].context);break;case 2:y[k].fn.call(y[k].context,d);break;case 3:y[k].fn.call(y[k].context,d,h);break;case 4:y[k].fn.call(y[k].context,d,h,m);break;default:if(!x)for(w=1,x=new Array(v-1);w<v;w++)x[w-1]=arguments[w];y[k].fn.apply(y[k].context,x)}}return!0},l.prototype.on=function(u,d,h){return o(this,u,d,h,!1)},l.prototype.once=function(u,d,h){return o(this,u,d,h,!0)},l.prototype.removeListener=function(u,d,h,m){var p=n?n+u:u;if(!this._events[p])return this;if(!d)return s(this,p),this;var g=this._events[p];if(g.fn)g.fn===d&&(!m||g.once)&&(!h||g.context===h)&&s(this,p);else{for(var b=0,y=[],v=g.length;b<v;b++)(g[b].fn!==d||m&&!g[b].once||h&&g[b].context!==h)&&y.push(g[b]);y.length?this._events[p]=y.length===1?y[0]:y:s(this,p)}return this},l.prototype.removeAllListeners=function(u){var d;return u?(d=n?n+u:u,this._events[d]&&s(this,d)):(this._events=new r,this._eventsCount=0),this},l.prototype.off=l.prototype.removeListener,l.prototype.addListener=l.prototype.on,l.prefixed=n,l.EventEmitter=l,e.exports=l})($0);var tP=$0.exports;const nP=It(tP);var Jr=new nP,pl="recharts.syncEvent.tooltip",Xh="recharts.syncEvent.brush";function rP(e,t){if(t){var n=Number.parseInt(t,10);if(!Ot(n))return e==null?void 0:e[n]}}var aP={chartName:"",tooltipPayloadSearcher:void 0,eventEmitter:void 0,defaultTooltipEventType:"axis"},D0=Ze({name:"options",initialState:aP,reducers:{createEventEmitter:e=>{e.eventEmitter==null&&(e.eventEmitter=Symbol("rechartsEventEmitter"))}}}),oP=D0.reducer,{createEventEmitter:iP}=D0.actions;function sP(e){return e.tooltip.syncInteraction}var lP={chartData:void 0,computedData:void 0,dataStartIndex:0,dataEndIndex:0},B0=Ze({name:"chartData",initialState:lP,reducers:{setChartData(e,t){if(e.chartData=t.payload,t.payload==null){e.dataStartIndex=0,e.dataEndIndex=0;return}t.payload.length>0&&e.dataEndIndex!==t.payload.length-1&&(e.dataEndIndex=t.payload.length-1)},setComputedData(e,t){e.computedData=t.payload},setDataStartEndIndexes(e,t){var{startIndex:n,endIndex:r}=t.payload;n!=null&&(e.dataStartIndex=n),r!=null&&(e.dataEndIndex=r)}}}),{setChartData:Qh,setDataStartEndIndexes:cP,setComputedData:Y$}=B0.actions,uP=B0.reducer,dP=["x","y"];function em(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Gn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?em(Object(n),!0).forEach(function(r){hP(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):em(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function hP(e,t,n){return(t=mP(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function mP(e){var t=pP(e,"string");return typeof t=="symbol"?t:t+""}function pP(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function gP(e,t){if(e==null)return{};var n,r,a=fP(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function fP(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function yP(){var e=V(Ec),t=V(Mc),n=ge(),r=V(by),a=V(nn),o=ia(),s=ui(),l=V(c=>c.rootProps.className);f.useEffect(()=>{if(e==null)return ta;var c=(u,d,h)=>{if(t!==h&&e===u){if(r==="index"){var m;if(s&&d!==null&&d!==void 0&&(m=d.payload)!==null&&m!==void 0&&m.coordinate&&d.payload.sourceViewBox){var p=d.payload.coordinate,{x:g,y:b}=p,y=gP(p,dP),{x:v,y:x,width:k,height:I}=d.payload.sourceViewBox,w=Gn(Gn({},y),{},{x:s.x+(k?(g-v)/k:0)*s.width,y:s.y+(I?(b-x)/I:0)*s.height});n(Gn(Gn({},d),{},{payload:Gn(Gn({},d.payload),{},{coordinate:w})}))}else n(d);return}if(a!=null){var T;if(typeof r=="function"){var j={activeTooltipIndex:d.payload.index==null?void 0:Number(d.payload.index),isTooltipActive:d.payload.active,activeIndex:d.payload.index==null?void 0:Number(d.payload.index),activeLabel:d.payload.label,activeDataKey:d.payload.dataKey,activeCoordinate:d.payload.coordinate},E=r(a,j);T=a[E]}else r==="value"&&(T=a.find(G=>String(G.value)===d.payload.label));var{coordinate:O}=d.payload;if(T==null||d.payload.active===!1||O==null||s==null){n(dl({active:!1,coordinate:void 0,dataKey:void 0,index:null,label:void 0,sourceViewBox:void 0,graphicalItemId:void 0}));return}var{x:$,y:N}=O,D=Math.min($,s.x+s.width),R=Math.min(N,s.y+s.height),_={x:o==="horizontal"?T.coordinate:D,y:o==="horizontal"?R:T.coordinate},F=dl({active:d.payload.active,coordinate:_,dataKey:d.payload.dataKey,index:String(T.index),label:d.payload.label,sourceViewBox:d.payload.sourceViewBox,graphicalItemId:d.payload.graphicalItemId});n(F)}}};return Jr.on(pl,c),()=>{Jr.off(pl,c)}},[l,n,t,e,r,a,o,s])}function bP(){var e=V(Ec),t=V(Mc),n=ge();f.useEffect(()=>{if(e==null)return ta;var r=(a,o,s)=>{t!==s&&e===a&&n(cP(o))};return Jr.on(Xh,r),()=>{Jr.off(Xh,r)}},[n,t,e])}function vP(){var e=ge();f.useEffect(()=>{e(iP())},[e]),yP(),bP()}function wP(e,t,n,r,a,o){var s=V(p=>NS(p,e,t)),l=V(Mc),c=V(Ec),u=V(by),d=V(sP),h=d==null?void 0:d.active,m=ui();f.useEffect(()=>{if(!h&&c!=null&&l!=null){var p=dl({active:o,coordinate:n,dataKey:s,index:a,label:typeof r=="number"?String(r):r,sourceViewBox:m,graphicalItemId:void 0});Jr.emit(pl,c,p,l)}},[h,n,s,a,r,l,c,u,o,m])}function tm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function nm(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?tm(Object(n),!0).forEach(function(r){xP(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):tm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function xP(e,t,n){return(t=kP(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function kP(e){var t=TP(e,"string");return typeof t=="symbol"?t:t+""}function TP(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function IP(e){return e.dataKey}function jP(e,t){return f.isValidElement(e)?f.cloneElement(e,t):typeof e=="function"?f.createElement(e,t):f.createElement(dT,t)}var rm=[],AP={allowEscapeViewBox:{x:!1,y:!1},animationDuration:400,animationEasing:"ease",axisId:0,contentStyle:{},cursor:!0,filterNull:!0,includeHidden:!1,isAnimationActive:"auto",itemSorter:"name",itemStyle:{},labelStyle:{},offset:10,reverseDirection:{x:!1,y:!1},separator:" : ",trigger:"hover",useTranslate3d:!1,wrapperStyle:{}};function NP(e){var t,n,r=pt(e,AP),{active:a,allowEscapeViewBox:o,animationDuration:s,animationEasing:l,content:c,filterNull:u,isAnimationActive:d,offset:h,payloadUniqBy:m,position:p,reverseDirection:g,useTranslate3d:b,wrapperStyle:y,cursor:v,shared:x,trigger:k,defaultIndex:I,portal:w,axisId:T}=r,j=ge(),E=typeof I=="number"?String(I):I;f.useEffect(()=>{j(TN({shared:x,trigger:k,axisId:T,active:a,defaultIndex:E}))},[j,x,k,T,a,E]);var O=ui(),$=af(),N=yN(x),{activeIndex:D,isActive:R}=(t=V(B=>CS(B,N,k,E)))!==null&&t!==void 0?t:{},_=V(B=>PS(B,N,k,E)),F=V(B=>O0(B,N,k,E)),G=V(B=>SS(B,N,k,E)),z=_,Z=eP(),q=(n=a??R)!==null&&n!==void 0?n:!1,[te,he]=Vx([z,q]),Ie=N==="axis"?F:void 0;wP(N,k,G,Ie,D,q);var ze=w??Z;if(ze==null||O==null||N==null)return null;var fe=z??rm;q||(fe=rm),u&&fe.length&&(fe=mx(fe.filter(B=>B.value!=null&&(B.hide!==!0||r.includeHidden)),m,IP));var P=fe.length>0,L=f.createElement(bT,{allowEscapeViewBox:o,animationDuration:s,animationEasing:l,isAnimationActive:d,active:q,coordinate:G,hasPayload:P,offset:h,position:p,reverseDirection:g,useTranslate3d:b,viewBox:O,wrapperStyle:y,lastBoundingBox:te,innerRef:he,hasPortalFromProps:!!w},jP(c,nm(nm({},r),{},{payload:fe,label:Ie,active:q,activeIndex:D,coordinate:G,accessibilityLayer:$})));return f.createElement(f.Fragment,null,Tl.createPortal(L,ze),q&&f.createElement(QS,{cursor:v,tooltipEventType:N,coordinate:G,payload:fe,index:D}))}var au=e=>null;au.displayName="Cell";function SP(e,t,n){return(t=PP(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function PP(e){var t=CP(e,"string");return typeof t=="symbol"?t:t+""}function CP(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}class OP{constructor(t){SP(this,"cache",new Map),this.maxSize=t}get(t){var n=this.cache.get(t);return n!==void 0&&(this.cache.delete(t),this.cache.set(t,n)),n}set(t,n){if(this.cache.has(t))this.cache.delete(t);else if(this.cache.size>=this.maxSize){var r=this.cache.keys().next().value;r!=null&&this.cache.delete(r)}this.cache.set(t,n)}clear(){this.cache.clear()}size(){return this.cache.size}}function am(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function EP(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?am(Object(n),!0).forEach(function(r){MP(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):am(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function MP(e,t,n){return(t=$P(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $P(e){var t=DP(e,"string");return typeof t=="symbol"?t:t+""}function DP(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var BP={cacheSize:2e3,enableCache:!0},R0=EP({},BP),om=new OP(R0.cacheSize),RP={position:"absolute",top:"-20000px",left:0,padding:0,margin:0,border:"none",whiteSpace:"pre"},im="recharts_measurement_span";function _P(e,t){var n=t.fontSize||"",r=t.fontFamily||"",a=t.fontWeight||"",o=t.fontStyle||"",s=t.letterSpacing||"",l=t.textTransform||"";return"".concat(e,"|").concat(n,"|").concat(r,"|").concat(a,"|").concat(o,"|").concat(s,"|").concat(l)}var sm=(e,t)=>{try{var n=document.getElementById(im);n||(n=document.createElement("span"),n.setAttribute("id",im),n.setAttribute("aria-hidden","true"),document.body.appendChild(n)),Object.assign(n.style,RP,t),n.textContent="".concat(e);var r=n.getBoundingClientRect();return{width:r.width,height:r.height}}catch{return{width:0,height:0}}},Dr=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(t==null||gi.isSsr)return{width:0,height:0};if(!R0.enableCache)return sm(t,n);var r=_P(t,n),a=om.get(r);if(a)return a;var o=sm(t,n);return om.set(r,o),o},_0;function WP(e,t,n){return(t=LP(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function LP(e){var t=FP(e,"string");return typeof t=="symbol"?t:t+""}function FP(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var lm=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,cm=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,HP=/^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,YP=/(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,zP={cm:96/2.54,mm:96/25.4,pt:96/72,pc:96/6,in:96,Q:96/(2.54*40),px:1},GP=["cm","mm","pt","pc","in","Q","px"];function qP(e){return GP.includes(e)}var Kn="NaN";function UP(e,t){return e*zP[t]}class $e{static parse(t){var n,[,r,a]=(n=YP.exec(t))!==null&&n!==void 0?n:[];return r==null?$e.NaN:new $e(parseFloat(r),a??"")}constructor(t,n){this.num=t,this.unit=n,this.num=t,this.unit=n,Ot(t)&&(this.unit=""),n!==""&&!HP.test(n)&&(this.num=NaN,this.unit=""),qP(n)&&(this.num=UP(t,n),this.unit="px")}add(t){return this.unit!==t.unit?new $e(NaN,""):new $e(this.num+t.num,this.unit)}subtract(t){return this.unit!==t.unit?new $e(NaN,""):new $e(this.num-t.num,this.unit)}multiply(t){return this.unit!==""&&t.unit!==""&&this.unit!==t.unit?new $e(NaN,""):new $e(this.num*t.num,this.unit||t.unit)}divide(t){return this.unit!==""&&t.unit!==""&&this.unit!==t.unit?new $e(NaN,""):new $e(this.num/t.num,this.unit||t.unit)}toString(){return"".concat(this.num).concat(this.unit)}isNaN(){return Ot(this.num)}}_0=$e;WP($e,"NaN",new _0(NaN,""));function W0(e){if(e==null||e.includes(Kn))return Kn;for(var t=e;t.includes("*")||t.includes("/");){var n,[,r,a,o]=(n=lm.exec(t))!==null&&n!==void 0?n:[],s=$e.parse(r??""),l=$e.parse(o??""),c=a==="*"?s.multiply(l):s.divide(l);if(c.isNaN())return Kn;t=t.replace(lm,c.toString())}for(;t.includes("+")||/.-\d+(?:\.\d+)?/.test(t);){var u,[,d,h,m]=(u=cm.exec(t))!==null&&u!==void 0?u:[],p=$e.parse(d??""),g=$e.parse(m??""),b=h==="+"?p.add(g):p.subtract(g);if(b.isNaN())return Kn;t=t.replace(cm,b.toString())}return t}var um=/\(([^()]*)\)/;function KP(e){for(var t=e,n;(n=um.exec(t))!=null;){var[,r]=n;t=t.replace(um,W0(r))}return t}function VP(e){var t=e.replace(/\s+/g,"");return t=KP(t),t=W0(t),t}function JP(e){try{return VP(e)}catch{return Kn}}function hs(e){var t=JP(e.slice(5,-1));return t===Kn?"":t}var ZP=["x","y","lineHeight","capHeight","fill","scaleToFit","textAnchor","verticalAnchor"],XP=["dx","dy","angle","className","breakAll"];function gl(){return gl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gl.apply(null,arguments)}function dm(e,t){if(e==null)return{};var n,r,a=QP(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function QP(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}var L0=/[ \f\n\r\t\v\u2028\u2029]+/,F0=e=>{var{children:t,breakAll:n,style:r}=e;try{var a=[];Ce(t)||(n?a=t.toString().split(""):a=t.toString().split(L0));var o=a.map(l=>({word:l,width:Dr(l,r).width})),s=n?0:Dr(" ",r).width;return{wordsWithComputedWidth:o,spaceWidth:s}}catch{return null}};function eC(e){return e==="start"||e==="middle"||e==="end"||e==="inherit"}var H0=(e,t,n,r)=>e.reduce((a,o)=>{var{word:s,width:l}=o,c=a[a.length-1];if(c&&l!=null&&(t==null||r||c.width+l+n<Number(t)))c.words.push(s),c.width+=l+n;else{var u={words:[s],width:l};a.push(u)}return a},[]),Y0=e=>e.reduce((t,n)=>t.width>n.width?t:n),tC="…",hm=(e,t,n,r,a,o,s,l)=>{var c=e.slice(0,t),u=F0({breakAll:n,style:r,children:c+tC});if(!u)return[!1,[]];var d=H0(u.wordsWithComputedWidth,o,s,l),h=d.length>a||Y0(d).width>Number(o);return[h,d]},nC=(e,t,n,r,a)=>{var{maxLines:o,children:s,style:l,breakAll:c}=e,u=K(o),d=String(s),h=H0(t,r,n,a);if(!u||a)return h;var m=h.length>o||Y0(h).width>Number(r);if(!m)return h;for(var p=0,g=d.length-1,b=0,y;p<=g&&b<=d.length-1;){var v=Math.floor((p+g)/2),x=v-1,[k,I]=hm(d,x,c,l,o,r,n,a),[w]=hm(d,v,c,l,o,r,n,a);if(!k&&!w&&(p=v+1),k&&w&&(g=v-1),!k&&w){y=I;break}b++}return y||h},mm=e=>{var t=Ce(e)?[]:e.toString().split(L0);return[{words:t,width:void 0}]},rC=e=>{var{width:t,scaleToFit:n,children:r,style:a,breakAll:o,maxLines:s}=e;if((t||n)&&!gi.isSsr){var l,c,u=F0({breakAll:o,children:r,style:a});if(u){var{wordsWithComputedWidth:d,spaceWidth:h}=u;l=d,c=h}else return mm(r);return nC({breakAll:o,children:r,maxLines:s,style:a},l,c,t,!!n)}return mm(r)},z0="#808080",aC={angle:0,breakAll:!1,capHeight:"0.71em",fill:z0,lineHeight:"1em",scaleToFit:!1,textAnchor:"start",verticalAnchor:"end",x:0,y:0},ou=f.forwardRef((e,t)=>{var n=pt(e,aC),{x:r,y:a,lineHeight:o,capHeight:s,fill:l,scaleToFit:c,textAnchor:u,verticalAnchor:d}=n,h=dm(n,ZP),m=f.useMemo(()=>rC({breakAll:h.breakAll,children:h.children,maxLines:h.maxLines,scaleToFit:c,style:h.style,width:h.width}),[h.breakAll,h.children,h.maxLines,c,h.style,h.width]),{dx:p,dy:g,angle:b,className:y,breakAll:v}=h,x=dm(h,XP);if(!Et(r)||!Et(a)||m.length===0)return null;var k=Number(r)+(K(p)?p:0),I=Number(a)+(K(g)?g:0);if(!de(k)||!de(I))return null;var w;switch(d){case"start":w=hs("calc(".concat(s,")"));break;case"middle":w=hs("calc(".concat((m.length-1)/2," * -").concat(o," + (").concat(s," / 2))"));break;default:w=hs("calc(".concat(m.length-1," * -").concat(o,")"));break}var T=[];if(c){var j=m[0].width,{width:E}=h;T.push("scale(".concat(K(E)&&K(j)?E/j:1,")"))}return b&&T.push("rotate(".concat(b,", ").concat(k,", ").concat(I,")")),T.length&&(x.transform=T.join(" ")),f.createElement("text",gl({},dt(x),{ref:t,x:k,y:I,className:le("recharts-text",y),textAnchor:u,fill:l.includes("url")?z0:l}),m.map((O,$)=>{var N=O.words.join(v?"":" ");return f.createElement("tspan",{x:k,dy:$===0?w:o,key:"".concat(N,"-").concat($)},N)}))});ou.displayName="Text";var oC=["labelRef"],iC=["content"];function pm(e,t){if(e==null)return{};var n,r,a=sC(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function sC(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function gm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function pe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?gm(Object(n),!0).forEach(function(r){lC(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function lC(e,t,n){return(t=cC(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function cC(e){var t=uC(e,"string");return typeof t=="symbol"?t:t+""}function uC(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function _t(){return _t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_t.apply(null,arguments)}var G0=f.createContext(null),dC=e=>{var{x:t,y:n,upperWidth:r,lowerWidth:a,width:o,height:s,children:l}=e,c=f.useMemo(()=>({x:t,y:n,upperWidth:r,lowerWidth:a,width:o,height:s}),[t,n,r,a,o,s]);return f.createElement(G0.Provider,{value:c},l)},q0=()=>{var e=f.useContext(G0),t=ui();return e||Jg(t)},hC=f.createContext(null),mC=()=>{var e=f.useContext(hC),t=V(Ty);return e||t},pC=e=>{var{value:t,formatter:n}=e,r=Ce(e.children)?t:e.children;return typeof n=="function"?n(r):r},iu=e=>e!=null&&typeof e=="function",gC=(e,t)=>{var n=et(t-e),r=Math.min(Math.abs(t-e),360);return n*r},fC=(e,t,n,r,a)=>{var{offset:o,className:s}=e,{cx:l,cy:c,innerRadius:u,outerRadius:d,startAngle:h,endAngle:m,clockWise:p}=a,g=(u+d)/2,b=gC(h,m),y=b>=0?1:-1,v,x;switch(t){case"insideStart":v=h+y*o,x=p;break;case"insideEnd":v=m-y*o,x=!p;break;case"end":v=m+y*o,x=p;break;default:throw new Error("Unsupported position ".concat(t))}x=b<=0?x:!x;var k=Be(l,c,g,v),I=Be(l,c,g,v+(x?1:-1)*359),w="M".concat(k.x,",").concat(k.y,`
    A`).concat(g,",").concat(g,",0,1,").concat(x?0:1,`,
    `).concat(I.x,",").concat(I.y),T=Ce(e.id)?Rr("recharts-radial-line-"):e.id;return f.createElement("text",_t({},r,{dominantBaseline:"central",className:le("recharts-radial-bar-label",s)}),f.createElement("defs",null,f.createElement("path",{id:T,d:w})),f.createElement("textPath",{xlinkHref:"#".concat(T)},n))},yC=(e,t,n)=>{var{cx:r,cy:a,innerRadius:o,outerRadius:s,startAngle:l,endAngle:c}=e,u=(l+c)/2;if(n==="outside"){var{x:d,y:h}=Be(r,a,s+t,u);return{x:d,y:h,textAnchor:d>=r?"start":"end",verticalAnchor:"middle"}}if(n==="center")return{x:r,y:a,textAnchor:"middle",verticalAnchor:"middle"};if(n==="centerTop")return{x:r,y:a,textAnchor:"middle",verticalAnchor:"start"};if(n==="centerBottom")return{x:r,y:a,textAnchor:"middle",verticalAnchor:"end"};var m=(o+s)/2,{x:p,y:g}=Be(r,a,m,u);return{x:p,y:g,textAnchor:"middle",verticalAnchor:"middle"}},fl=e=>"cx"in e&&K(e.cx),bC=(e,t)=>{var{parentViewBox:n,offset:r,position:a}=e,o;n!=null&&!fl(n)&&(o=n);var{x:s,y:l,upperWidth:c,lowerWidth:u,height:d}=t,h=s,m=s+(c-u)/2,p=(h+m)/2,g=(c+u)/2,b=h+c/2,y=d>=0?1:-1,v=y*r,x=y>0?"end":"start",k=y>0?"start":"end",I=c>=0?1:-1,w=I*r,T=I>0?"end":"start",j=I>0?"start":"end";if(a==="top"){var E={x:h+c/2,y:l-v,textAnchor:"middle",verticalAnchor:x};return pe(pe({},E),o?{height:Math.max(l-o.y,0),width:c}:{})}if(a==="bottom"){var O={x:m+u/2,y:l+d+v,textAnchor:"middle",verticalAnchor:k};return pe(pe({},O),o?{height:Math.max(o.y+o.height-(l+d),0),width:u}:{})}if(a==="left"){var $={x:p-w,y:l+d/2,textAnchor:T,verticalAnchor:"middle"};return pe(pe({},$),o?{width:Math.max($.x-o.x,0),height:d}:{})}if(a==="right"){var N={x:p+g+w,y:l+d/2,textAnchor:j,verticalAnchor:"middle"};return pe(pe({},N),o?{width:Math.max(o.x+o.width-N.x,0),height:d}:{})}var D=o?{width:g,height:d}:{};return a==="insideLeft"?pe({x:p+w,y:l+d/2,textAnchor:j,verticalAnchor:"middle"},D):a==="insideRight"?pe({x:p+g-w,y:l+d/2,textAnchor:T,verticalAnchor:"middle"},D):a==="insideTop"?pe({x:h+c/2,y:l+v,textAnchor:"middle",verticalAnchor:k},D):a==="insideBottom"?pe({x:m+u/2,y:l+d-v,textAnchor:"middle",verticalAnchor:x},D):a==="insideTopLeft"?pe({x:h+w,y:l+v,textAnchor:j,verticalAnchor:k},D):a==="insideTopRight"?pe({x:h+c-w,y:l+v,textAnchor:T,verticalAnchor:k},D):a==="insideBottomLeft"?pe({x:m+w,y:l+d-v,textAnchor:j,verticalAnchor:x},D):a==="insideBottomRight"?pe({x:m+u-w,y:l+d-v,textAnchor:T,verticalAnchor:x},D):a&&typeof a=="object"&&(K(a.x)||Yt(a.x))&&(K(a.y)||Yt(a.y))?pe({x:s+kt(a.x,g),y:l+kt(a.y,d),textAnchor:"end",verticalAnchor:"end"},D):pe({x:b,y:l+d/2,textAnchor:"middle",verticalAnchor:"middle"},D)},vC={angle:0,offset:5,zIndex:He.label,position:"middle",textBreakAll:!1};function on(e){var t=pt(e,vC),{viewBox:n,position:r,value:a,children:o,content:s,className:l="",textBreakAll:c,labelRef:u}=t,d=mC(),h=q0(),m=r==="center"?h:d??h,p,g,b;if(n==null?p=m:fl(n)?p=n:p=Jg(n),!p||Ce(a)&&Ce(o)&&!f.isValidElement(s)&&typeof s!="function")return null;var y=pe(pe({},t),{},{viewBox:p});if(f.isValidElement(s)){var v=pm(y,oC);return f.cloneElement(s,v)}if(typeof s=="function"){var x=pm(y,iC);if(g=f.createElement(s,x),f.isValidElement(g))return g}else g=pC(t);var k=dt(t);if(fl(p)){if(r==="insideStart"||r==="insideEnd"||r==="end")return fC(t,r,g,k,p);b=yC(p,t.offset,t.position)}else b=bC(t,p);return f.createElement(fn,{zIndex:t.zIndex},f.createElement(ou,_t({ref:u,className:le("recharts-label",l)},k,b,{textAnchor:eC(k.textAnchor)?k.textAnchor:b.textAnchor,breakAll:c}),g))}on.displayName="Label";var wC=(e,t,n)=>{if(!e)return null;var r={viewBox:t,labelRef:n};return e===!0?f.createElement(on,_t({key:"label-implicit"},r)):Et(e)?f.createElement(on,_t({key:"label-implicit",value:e},r)):f.isValidElement(e)?e.type===on?f.cloneElement(e,pe({key:"label-implicit"},r)):f.createElement(on,_t({key:"label-implicit",content:e},r)):iu(e)?f.createElement(on,_t({key:"label-implicit",content:e},r)):e&&typeof e=="object"?f.createElement(on,_t({},e,{key:"label-implicit"},r)):null};function xC(e){var{label:t,labelRef:n}=e,r=q0();return wC(t,r,n)||null}var U0={},K0={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n){return n[n.length-1]}e.last=t})(K0);var V0={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n){return Array.isArray(n)?n:Array.from(n)}e.toArray=t})(V0);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=K0,n=V0,r=Vo;function a(o){if(r.isArrayLike(o))return t.last(n.toArray(o))}e.last=a})(U0);var kC=U0.last;const TC=It(kC);var IC=["valueAccessor"],jC=["dataKey","clockWise","id","textBreakAll","zIndex"];function Oo(){return Oo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Oo.apply(null,arguments)}function fm(e,t){if(e==null)return{};var n,r,a=AC(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function AC(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}var NC=e=>Array.isArray(e.value)?TC(e.value):e.value,J0=f.createContext(void 0),SC=J0.Provider,Z0=f.createContext(void 0);Z0.Provider;function PC(){return f.useContext(J0)}function CC(){return f.useContext(Z0)}function er(e){var{valueAccessor:t=NC}=e,n=fm(e,IC),{dataKey:r,clockWise:a,id:o,textBreakAll:s,zIndex:l}=n,c=fm(n,jC),u=PC(),d=CC(),h=u||d;return!h||!h.length?null:f.createElement(fn,{zIndex:l??He.label},f.createElement(Ht,{className:"recharts-label-list"},h.map((m,p)=>{var g,b=Ce(r)?t(m,p):Re(m&&m.payload,r),y=Ce(o)?{}:{id:"".concat(o,"-").concat(p)};return f.createElement(on,Oo({key:"label-".concat(p)},dt(m),c,y,{fill:(g=n.fill)!==null&&g!==void 0?g:m.fill,parentViewBox:m.parentViewBox,value:b,textBreakAll:s,viewBox:m.viewBox,index:p,zIndex:0}))})))}er.displayName="LabelList";function OC(e){var{label:t}=e;return t?t===!0?f.createElement(er,{key:"labelList-implicit"}):f.isValidElement(t)||iu(t)?f.createElement(er,{key:"labelList-implicit",content:t}):typeof t=="object"?f.createElement(er,Oo({key:"labelList-implicit"},t,{type:String(t.type)})):null:null}var EC={radiusAxis:{},angleAxis:{}},X0=Ze({name:"polarAxis",initialState:EC,reducers:{addRadiusAxis(e,t){e.radiusAxis[t.payload.id]=t.payload},removeRadiusAxis(e,t){delete e.radiusAxis[t.payload.id]},addAngleAxis(e,t){e.angleAxis[t.payload.id]=t.payload},removeAngleAxis(e,t){delete e.angleAxis[t.payload.id]}}});X0.actions;var MC=X0.reducer,Q0={exports:{}},oe={};/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var su=Symbol.for("react.transitional.element"),lu=Symbol.for("react.portal"),Mi=Symbol.for("react.fragment"),$i=Symbol.for("react.strict_mode"),Di=Symbol.for("react.profiler"),Bi=Symbol.for("react.consumer"),Ri=Symbol.for("react.context"),_i=Symbol.for("react.forward_ref"),Wi=Symbol.for("react.suspense"),Li=Symbol.for("react.suspense_list"),Fi=Symbol.for("react.memo"),Hi=Symbol.for("react.lazy"),$C=Symbol.for("react.view_transition"),DC=Symbol.for("react.client.reference");function ft(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case su:switch(e=e.type,e){case Mi:case Di:case $i:case Wi:case Li:case $C:return e;default:switch(e=e&&e.$$typeof,e){case Ri:case _i:case Hi:case Fi:return e;case Bi:return e;default:return t}}case lu:return t}}}oe.ContextConsumer=Bi;oe.ContextProvider=Ri;oe.Element=su;oe.ForwardRef=_i;oe.Fragment=Mi;oe.Lazy=Hi;oe.Memo=Fi;oe.Portal=lu;oe.Profiler=Di;oe.StrictMode=$i;oe.Suspense=Wi;oe.SuspenseList=Li;oe.isContextConsumer=function(e){return ft(e)===Bi};oe.isContextProvider=function(e){return ft(e)===Ri};oe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===su};oe.isForwardRef=function(e){return ft(e)===_i};oe.isFragment=function(e){return ft(e)===Mi};oe.isLazy=function(e){return ft(e)===Hi};oe.isMemo=function(e){return ft(e)===Fi};oe.isPortal=function(e){return ft(e)===lu};oe.isProfiler=function(e){return ft(e)===Di};oe.isStrictMode=function(e){return ft(e)===$i};oe.isSuspense=function(e){return ft(e)===Wi};oe.isSuspenseList=function(e){return ft(e)===Li};oe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Mi||e===Di||e===$i||e===Wi||e===Li||typeof e=="object"&&e!==null&&(e.$$typeof===Hi||e.$$typeof===Fi||e.$$typeof===Ri||e.$$typeof===Bi||e.$$typeof===_i||e.$$typeof===DC||e.getModuleId!==void 0)};oe.typeOf=ft;Q0.exports=oe;var BC=Q0.exports,ym=e=>typeof e=="string"?e:e?e.displayName||e.name||"Component":"",bm=null,ms=null,eb=e=>{if(e===bm&&Array.isArray(ms))return ms;var t=[];return f.Children.forEach(e,n=>{Ce(n)||(BC.isFragment(n)?t=t.concat(eb(n.props.children)):t.push(n))}),ms=t,bm=e,t};function RC(e,t){var n=[],r=[];return Array.isArray(t)?r=t.map(a=>ym(a)):r=[ym(t)],eb(e).forEach(a=>{var o=rr(a,"type.displayName")||rr(a,"type.name");o&&r.indexOf(o)!==-1&&n.push(a)}),n}var tb={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n){var a;if(typeof n!="object"||n==null)return!1;if(Object.getPrototypeOf(n)===null)return!0;if(Object.prototype.toString.call(n)!=="[object Object]"){const o=n[Symbol.toStringTag];return o==null||!((a=Object.getOwnPropertyDescriptor(n,Symbol.toStringTag))!=null&&a.writable)?!1:n.toString()===`[object ${o}]`}let r=n;for(;Object.getPrototypeOf(r)!==null;)r=Object.getPrototypeOf(r);return Object.getPrototypeOf(n)===r}e.isPlainObject=t})(tb);var _C=tb.isPlainObject;const WC=It(_C);var vm,wm,xm,km,Tm;function Im(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function jm(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Im(Object(n),!0).forEach(function(r){LC(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Im(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function LC(e,t,n){return(t=FC(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function FC(e){var t=HC(e,"string");return typeof t=="symbol"?t:t+""}function HC(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Eo(){return Eo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Eo.apply(null,arguments)}function Er(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var Am=(e,t,n,r,a)=>{var o=n-r,s;return s=me(vm||(vm=Er(["M ",",",""])),e,t),s+=me(wm||(wm=Er(["L ",",",""])),e+n,t),s+=me(xm||(xm=Er(["L ",",",""])),e+n-o/2,t+a),s+=me(km||(km=Er(["L ",",",""])),e+n-o/2-r,t+a),s+=me(Tm||(Tm=Er(["L ",","," Z"])),e,t),s},YC={x:0,y:0,upperWidth:0,lowerWidth:0,height:0,isUpdateAnimationActive:!1,animationBegin:0,animationDuration:1500,animationEasing:"ease"},zC=e=>{var t=pt(e,YC),{x:n,y:r,upperWidth:a,lowerWidth:o,height:s,className:l}=t,{animationEasing:c,animationDuration:u,animationBegin:d,isUpdateAnimationActive:h}=t,m=f.useRef(null),[p,g]=f.useState(-1),b=f.useRef(a),y=f.useRef(o),v=f.useRef(s),x=f.useRef(n),k=f.useRef(r),I=oc(e,"trapezoid-");if(f.useEffect(()=>{if(m.current&&m.current.getTotalLength)try{var _=m.current.getTotalLength();_&&g(_)}catch{}},[]),n!==+n||r!==+r||a!==+a||o!==+o||s!==+s||a===0&&o===0||s===0)return null;var w=le("recharts-trapezoid",l);if(!h)return f.createElement("g",null,f.createElement("path",Eo({},dt(t),{className:w,d:Am(n,r,a,o,s)})));var T=b.current,j=y.current,E=v.current,O=x.current,$=k.current,N="0px ".concat(p===-1?1:p,"px"),D="".concat(p,"px 0px"),R=sf(["strokeDasharray"],u,c);return f.createElement(ac,{animationId:I,key:I,canBegin:p>0,duration:u,easing:c,isActive:h,begin:d},_=>{var F=De(T,a,_),G=De(j,o,_),z=De(E,s,_),Z=De(O,n,_),q=De($,r,_);m.current&&(b.current=F,y.current=G,v.current=z,x.current=Z,k.current=q);var te=_>0?{transition:R,strokeDasharray:D}:{strokeDasharray:N};return f.createElement("path",Eo({},dt(t),{className:w,d:Am(Z,q,F,G,z),ref:m,style:jm(jm({},te),t.style)}))})},GC=["option","shapeType","activeClassName"];function qC(e,t){if(e==null)return{};var n,r,a=UC(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function UC(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Nm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Mo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Nm(Object(n),!0).forEach(function(r){KC(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Nm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function KC(e,t,n){return(t=VC(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function VC(e){var t=JC(e,"string");return typeof t=="symbol"?t:t+""}function JC(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ZC(e,t){return Mo(Mo({},t),e)}function XC(e,t){return e==="symbols"}function Sm(e){var{shapeType:t,elementProps:n}=e;switch(t){case"rectangle":return f.createElement(df,n);case"trapezoid":return f.createElement(zC,n);case"sector":return f.createElement(pf,n);case"symbols":if(XC(t))return f.createElement(Bp,n);break;case"curve":return f.createElement(of,n);default:return null}}function QC(e){return f.isValidElement(e)?e.props:e}function e5(e){var{option:t,shapeType:n,activeClassName:r="recharts-active-shape"}=e,a=qC(e,GC),o;if(f.isValidElement(t))o=f.cloneElement(t,Mo(Mo({},a),QC(t)));else if(typeof t=="function")o=t(a,a.index);else if(WC(t)&&typeof t!="boolean"){var s=ZC(t,a);o=f.createElement(Sm,{shapeType:n,elementProps:s})}else{var l=a;o=f.createElement(Sm,{shapeType:n,elementProps:l})}return a.isActive?f.createElement(Ht,{className:r},o):o}var nb=(e,t,n)=>{var r=ge();return(a,o)=>s=>{e==null||e(a,o,s),r(h0({activeIndex:String(o),activeDataKey:t,activeCoordinate:a.tooltipPosition,activeGraphicalItemId:n}))}},rb=e=>{var t=ge();return(n,r)=>a=>{e==null||e(n,r,a),t(IN())}},ab=(e,t,n)=>{var r=ge();return(a,o)=>s=>{e==null||e(a,o,s),r(jN({activeIndex:String(o),activeDataKey:t,activeCoordinate:a.tooltipPosition,activeGraphicalItemId:n}))}};function t5(e){var{tooltipEntrySettings:t}=e,n=ge(),r=at(),a=f.useRef(null);return f.useLayoutEffect(()=>{r||(a.current===null?n(wN(t)):a.current!==t&&n(xN({prev:a.current,next:t})),a.current=t)},[t,n,r]),f.useLayoutEffect(()=>()=>{a.current&&(n(kN(a.current)),a.current=null)},[n]),null}function n5(e){var{legendPayload:t}=e,n=ge(),r=at(),a=f.useRef(null);return f.useLayoutEffect(()=>{r||(a.current===null?n(rT(t)):a.current!==t&&n(aT({prev:a.current,next:t})),a.current=t)},[n,r,t]),f.useLayoutEffect(()=>()=>{a.current&&(n(oT(a.current)),a.current=null)},[n]),null}var ps,r5=()=>{var[e]=f.useState(()=>Rr("uid-"));return e},a5=(ps=Db["useId".toString()])!==null&&ps!==void 0?ps:r5;function o5(e,t){var n=a5();return t||(e?"".concat(e,"-").concat(n):n)}var i5=f.createContext(void 0),s5=e=>{var{id:t,type:n,children:r}=e,a=o5("recharts-".concat(n),t);return f.createElement(i5.Provider,{value:a},r(a))},l5={cartesianItems:[],polarItems:[]},ob=Ze({name:"graphicalItems",initialState:l5,reducers:{addCartesianGraphicalItem:{reducer(e,t){e.cartesianItems.push(t.payload)},prepare:ce()},replaceCartesianGraphicalItem:{reducer(e,t){var{prev:n,next:r}=t.payload,a=xt(e).cartesianItems.indexOf(n);a>-1&&(e.cartesianItems[a]=r)},prepare:ce()},removeCartesianGraphicalItem:{reducer(e,t){var n=xt(e).cartesianItems.indexOf(t.payload);n>-1&&e.cartesianItems.splice(n,1)},prepare:ce()},addPolarGraphicalItem:{reducer(e,t){e.polarItems.push(t.payload)},prepare:ce()},removePolarGraphicalItem:{reducer(e,t){var n=xt(e).polarItems.indexOf(t.payload);n>-1&&e.polarItems.splice(n,1)},prepare:ce()}}}),{addCartesianGraphicalItem:c5,replaceCartesianGraphicalItem:u5,removeCartesianGraphicalItem:d5,addPolarGraphicalItem:z$,removePolarGraphicalItem:G$}=ob.actions,h5=ob.reducer,m5=e=>{var t=ge(),n=f.useRef(null);return f.useLayoutEffect(()=>{n.current===null?t(c5(e)):n.current!==e&&t(u5({prev:n.current,next:e})),n.current=e},[t,e]),f.useLayoutEffect(()=>()=>{n.current&&(t(d5(n.current)),n.current=null)},[t]),null},p5=f.memo(m5);function Pm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Cm(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Pm(Object(n),!0).forEach(function(r){g5(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function g5(e,t,n){return(t=f5(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f5(e){var t=y5(e,"string");return typeof t=="symbol"?t:t+""}function y5(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var ib=0,b5={xAxis:{},yAxis:{},zAxis:{}},sb=Ze({name:"cartesianAxis",initialState:b5,reducers:{addXAxis:{reducer(e,t){e.xAxis[t.payload.id]=t.payload},prepare:ce()},replaceXAxis:{reducer(e,t){var{prev:n,next:r}=t.payload;e.xAxis[n.id]!==void 0&&(n.id!==r.id&&delete e.xAxis[n.id],e.xAxis[r.id]=r)},prepare:ce()},removeXAxis:{reducer(e,t){delete e.xAxis[t.payload.id]},prepare:ce()},addYAxis:{reducer(e,t){e.yAxis[t.payload.id]=t.payload},prepare:ce()},replaceYAxis:{reducer(e,t){var{prev:n,next:r}=t.payload;e.yAxis[n.id]!==void 0&&(n.id!==r.id&&delete e.yAxis[n.id],e.yAxis[r.id]=r)},prepare:ce()},removeYAxis:{reducer(e,t){delete e.yAxis[t.payload.id]},prepare:ce()},addZAxis:{reducer(e,t){e.zAxis[t.payload.id]=t.payload},prepare:ce()},replaceZAxis:{reducer(e,t){var{prev:n,next:r}=t.payload;e.zAxis[n.id]!==void 0&&(n.id!==r.id&&delete e.zAxis[n.id],e.zAxis[r.id]=r)},prepare:ce()},removeZAxis:{reducer(e,t){delete e.zAxis[t.payload.id]},prepare:ce()},updateYAxisWidth(e,t){var{id:n,width:r}=t.payload,a=e.yAxis[n];if(a){var o=a.widthHistory||[];if(o.length===3&&o[0]===o[2]&&r===o[1]&&r!==a.width&&Math.abs(r-o[0])<=1)return;var s=[...o,r].slice(-3);e.yAxis[n]=Cm(Cm({},e.yAxis[n]),{},{width:r,widthHistory:s})}}}}),{addXAxis:v5,replaceXAxis:w5,removeXAxis:x5,addYAxis:k5,replaceYAxis:T5,removeYAxis:I5,addZAxis:q$,replaceZAxis:U$,removeZAxis:K$,updateYAxisWidth:j5}=sb.actions,A5=sb.reducer,N5=S([Oe],e=>({top:e.top,bottom:e.bottom,left:e.left,right:e.right})),S5=S([N5,Jt,Zt],(e,t,n)=>{if(!(!e||t==null||n==null))return{x:e.left,y:e.top,width:Math.max(0,t-e.left-e.right),height:Math.max(0,n-e.top-e.bottom)}}),lb=()=>V(S5),Om=(e,t,n)=>{var r=n??e;if(!Ce(r))return kt(r,t,0)},P5=(e,t,n)=>{var r={},a=e.filter(Ai),o=e.filter(u=>u.stackId==null),s=a.reduce((u,d)=>(u[d.stackId]||(u[d.stackId]=[]),u[d.stackId].push(d),u),r),l=Object.entries(s).map(u=>{var[d,h]=u,m=h.map(g=>g.dataKey),p=Om(t,n,h[0].barSize);return{stackId:d,dataKeys:m,barSize:p}}),c=o.map(u=>{var d=[u.dataKey].filter(m=>m!=null),h=Om(t,n,u.barSize);return{stackId:void 0,dataKeys:d,barSize:h}});return[...l,...c]};function Em(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function La(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Em(Object(n),!0).forEach(function(r){C5(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Em(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function C5(e,t,n){return(t=O5(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O5(e){var t=E5(e,"string");return typeof t=="symbol"?t:t+""}function E5(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function M5(e,t,n,r,a){var o=r.length;if(!(o<1)){var s=kt(e,n,0,!0),l,c=[];if(de(r[0].barSize)){var u=!1,d=n/o,h=r.reduce((v,x)=>v+(x.barSize||0),0);h+=(o-1)*s,h>=n&&(h-=(o-1)*s,s=0),h>=n&&d>0&&(u=!0,d*=.9,h=o*d);var m=(n-h)/2>>0,p={offset:m-s,size:0};l=r.reduce((v,x)=>{var k,I={stackId:x.stackId,dataKeys:x.dataKeys,position:{offset:p.offset+p.size+s,size:u?d:(k=x.barSize)!==null&&k!==void 0?k:0}},w=[...v,I];return p=w[w.length-1].position,w},c)}else{var g=kt(t,n,0,!0);n-2*g-(o-1)*s<=0&&(s=0);var b=(n-2*g-(o-1)*s)/o;b>1&&(b>>=0);var y=de(a)?Math.min(b,a):b;l=r.reduce((v,x,k)=>[...v,{stackId:x.stackId,dataKeys:x.dataKeys,position:{offset:g+(b+s)*k+(b-y)/2,size:y}}],c)}return l}}var $5=(e,t,n,r,a,o,s)=>{var l=Ce(s)?t:s,c=M5(n,r,a!==o?a:o,e,l);return a!==o&&c!=null&&(c=c.map(u=>La(La({},u),{},{position:La(La({},u.position),{},{offset:u.position.offset-a/2})}))),c},D5=(e,t)=>{var n=Rc(t);if(!(!e||n==null||t==null)){var{stackId:r}=t;if(r!=null){var a=e[r];if(a){var{stackedData:o}=a;if(o)return o.find(s=>s.key===n)}}}};function B5(e,t){return e&&typeof e=="object"&&"zIndex"in e&&typeof e.zIndex=="number"&&de(e.zIndex)?e.zIndex:t}var R5=e=>{var{chartData:t}=e,n=ge(),r=at();return f.useEffect(()=>r?()=>{}:(n(Qh(t)),()=>{n(Qh(void 0))}),[t,n,r]),null},Mm={x:0,y:0,width:0,height:0,padding:{top:0,right:0,bottom:0,left:0}},cb=Ze({name:"brush",initialState:Mm,reducers:{setBrushSettings(e,t){return t.payload==null?Mm:t.payload}}});cb.actions;var _5=cb.reducer;function W5(e,t,n){return(t=L5(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function L5(e){var t=F5(e,"string");return typeof t=="symbol"?t:t+""}function F5(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}class cu{static create(t){return new cu(t)}constructor(t){this.scale=t}get domain(){return this.scale.domain}get range(){return this.scale.range}get rangeMin(){return this.range()[0]}get rangeMax(){return this.range()[1]}get bandwidth(){return this.scale.bandwidth}apply(t){var{bandAware:n,position:r}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(t!==void 0){if(r)switch(r){case"start":return this.scale(t);case"middle":{var a=this.bandwidth?this.bandwidth()/2:0;return this.scale(t)+a}case"end":{var o=this.bandwidth?this.bandwidth():0;return this.scale(t)+o}default:return this.scale(t)}if(n){var s=this.bandwidth?this.bandwidth()/2:0;return this.scale(t)+s}return this.scale(t)}}isInRange(t){var n=this.range(),r=n[0],a=n[n.length-1];return r<=a?t>=r&&t<=a:t>=a&&t<=r}}W5(cu,"EPS",1e-4);function H5(e){return(e%180+180)%180}var Y5=function(t){var{width:n,height:r}=t,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,o=H5(a),s=o*Math.PI/180,l=Math.atan(r/n),c=s>l&&s<Math.PI-l?r/Math.sin(s):n/Math.cos(s);return Math.abs(c)},z5={dots:[],areas:[],lines:[]},ub=Ze({name:"referenceElements",initialState:z5,reducers:{addDot:(e,t)=>{e.dots.push(t.payload)},removeDot:(e,t)=>{var n=xt(e).dots.findIndex(r=>r===t.payload);n!==-1&&e.dots.splice(n,1)},addArea:(e,t)=>{e.areas.push(t.payload)},removeArea:(e,t)=>{var n=xt(e).areas.findIndex(r=>r===t.payload);n!==-1&&e.areas.splice(n,1)},addLine:(e,t)=>{e.lines.push(t.payload)},removeLine:(e,t)=>{var n=xt(e).lines.findIndex(r=>r===t.payload);n!==-1&&e.lines.splice(n,1)}}});ub.actions;var G5=ub.reducer,q5=f.createContext(void 0),U5=e=>{var{children:t}=e,[n]=f.useState("".concat(Rr("recharts"),"-clip")),r=lb();if(r==null)return null;var{x:a,y:o,width:s,height:l}=r;return f.createElement(q5.Provider,{value:n},f.createElement("defs",null,f.createElement("clipPath",{id:n},f.createElement("rect",{x:a,y:o,height:l,width:s}))),t)};function db(e,t){if(t<1)return[];if(t===1)return e;for(var n=[],r=0;r<e.length;r+=t){var a=e[r];a!==void 0&&n.push(a)}return n}function K5(e,t,n){var r={width:e.width+t.width,height:e.height+t.height};return Y5(r,n)}function V5(e,t,n){var r=n==="width",{x:a,y:o,width:s,height:l}=e;return t===1?{start:r?a:o,end:r?a+s:o+l}:{start:r?a+s:o+l,end:r?a:o}}function Zr(e,t,n,r,a){if(e*t<e*r||e*t>e*a)return!1;var o=n();return e*(t-e*o/2-r)>=0&&e*(t+e*o/2-a)<=0}function J5(e,t){return db(e,t+1)}function Z5(e,t,n,r,a){for(var o=(r||[]).slice(),{start:s,end:l}=t,c=0,u=1,d=s,h=function(){var g=r==null?void 0:r[c];if(g===void 0)return{v:db(r,u)};var b=c,y,v=()=>(y===void 0&&(y=n(g,b)),y),x=g.coordinate,k=c===0||Zr(e,x,v,d,l);k||(c=0,d=s,u+=1),k&&(d=x+e*(v()/2+a),c+=u)},m;u<=o.length;)if(m=h(),m)return m.v;return[]}function X5(e,t,n,r,a){var o=(r||[]).slice(),s=o.length;if(s===0)return[];for(var{start:l,end:c}=t,u=1;u<=s;u++){for(var d=(s-1)%u,h=l,m=!0,p=function(){var x=r[g],k=g,I,w=()=>(I===void 0&&(I=n(x,k)),I),T=x.coordinate,j=g===d||Zr(e,T,w,h,c);if(!j)return m=!1,1;j&&(h=T+e*(w()/2+a))},g=d;g<s&&!p();g+=u);if(m){for(var b=[],y=d;y<s;y+=u)b.push(r[y]);return b}}return[]}function $m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Fe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?$m(Object(n),!0).forEach(function(r){Q5(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$m(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Q5(e,t,n){return(t=eO(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function eO(e){var t=tO(e,"string");return typeof t=="symbol"?t:t+""}function tO(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function nO(e,t,n,r,a){for(var o=(r||[]).slice(),s=o.length,{start:l}=t,{end:c}=t,u=function(m){var p=o[m],g,b=()=>(g===void 0&&(g=n(p,m)),g);if(m===s-1){var y=e*(p.coordinate+e*b()/2-c);o[m]=p=Fe(Fe({},p),{},{tickCoord:y>0?p.coordinate-y*e:p.coordinate})}else o[m]=p=Fe(Fe({},p),{},{tickCoord:p.coordinate});if(p.tickCoord!=null){var v=Zr(e,p.tickCoord,b,l,c);v&&(c=p.tickCoord-e*(b()/2+a),o[m]=Fe(Fe({},p),{},{isShow:!0}))}},d=s-1;d>=0;d--)u(d);return o}function rO(e,t,n,r,a,o){var s=(r||[]).slice(),l=s.length,{start:c,end:u}=t;if(o){var d=r[l-1],h=n(d,l-1),m=e*(d.coordinate+e*h/2-u);if(s[l-1]=d=Fe(Fe({},d),{},{tickCoord:m>0?d.coordinate-m*e:d.coordinate}),d.tickCoord!=null){var p=Zr(e,d.tickCoord,()=>h,c,u);p&&(u=d.tickCoord-e*(h/2+a),s[l-1]=Fe(Fe({},d),{},{isShow:!0}))}}for(var g=o?l-1:l,b=function(x){var k=s[x],I,w=()=>(I===void 0&&(I=n(k,x)),I);if(x===0){var T=e*(k.coordinate-e*w()/2-c);s[x]=k=Fe(Fe({},k),{},{tickCoord:T<0?k.coordinate-T*e:k.coordinate})}else s[x]=k=Fe(Fe({},k),{},{tickCoord:k.coordinate});if(k.tickCoord!=null){var j=Zr(e,k.tickCoord,w,c,u);j&&(c=k.tickCoord+e*(w()/2+a),s[x]=Fe(Fe({},k),{},{isShow:!0}))}},y=0;y<g;y++)b(y);return s}function aO(e,t,n){var{tick:r,ticks:a,viewBox:o,minTickGap:s,orientation:l,interval:c,tickFormatter:u,unit:d,angle:h}=e;if(!a||!a.length||!r)return[];if(K(c)||gi.isSsr){var m;return(m=J5(a,K(c)?c:0))!==null&&m!==void 0?m:[]}var p=[],g=l==="top"||l==="bottom"?"width":"height",b=d&&g==="width"?Dr(d,{fontSize:t,letterSpacing:n}):{width:0,height:0},y=(k,I)=>{var w=typeof u=="function"?u(k.value,I):k.value;return g==="width"?K5(Dr(w,{fontSize:t,letterSpacing:n}),b,h):Dr(w,{fontSize:t,letterSpacing:n})[g]},v=a.length>=2?et(a[1].coordinate-a[0].coordinate):1,x=V5(o,v,g);return c==="equidistantPreserveStart"?Z5(v,x,y,a,s):c==="equidistantPreserveEnd"?X5(v,x,y,a,s):(c==="preserveStart"||c==="preserveStartEnd"?p=rO(v,x,y,a,s,c==="preserveStartEnd"):p=nO(v,x,y,a,s),p.filter(k=>k.isShow))}var oO=e=>{var{ticks:t,label:n,labelGapWithTick:r=5,tickSize:a=0,tickMargin:o=0}=e,s=0;if(t){Array.from(t).forEach(d=>{if(d){var h=d.getBoundingClientRect();h.width>s&&(s=h.width)}});var l=n?n.getBoundingClientRect().width:0,c=a+o,u=s+c+l+(n?r:0);return Math.round(u)}return 0},iO=["axisLine","width","height","className","hide","ticks","axisType"];function sO(e,t){if(e==null)return{};var n,r,a=lO(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function lO(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function $n(){return $n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$n.apply(null,arguments)}function Dm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ye(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Dm(Object(n),!0).forEach(function(r){cO(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Dm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function cO(e,t,n){return(t=uO(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function uO(e){var t=dO(e,"string");return typeof t=="symbol"?t:t+""}function dO(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Sn={x:0,y:0,width:0,height:0,viewBox:{x:0,y:0,width:0,height:0},orientation:"bottom",ticks:[],stroke:"#666",tickLine:!0,axisLine:!0,tick:!0,mirror:!1,minTickGap:5,tickSize:6,tickMargin:2,interval:"preserveEnd",zIndex:He.axis};function hO(e){var{x:t,y:n,width:r,height:a,orientation:o,mirror:s,axisLine:l,otherSvgProps:c}=e;if(!l)return null;var u=ye(ye(ye({},c),dn(l)),{},{fill:"none"});if(o==="top"||o==="bottom"){var d=+(o==="top"&&!s||o==="bottom"&&s);u=ye(ye({},u),{},{x1:t,y1:n+d*a,x2:t+r,y2:n+d*a})}else{var h=+(o==="left"&&!s||o==="right"&&s);u=ye(ye({},u),{},{x1:t+h*r,y1:n,x2:t+h*r,y2:n+a})}return f.createElement("line",$n({},u,{className:le("recharts-cartesian-axis-line",rr(l,"className"))}))}function mO(e,t,n,r,a,o,s,l,c){var u,d,h,m,p,g,b=l?-1:1,y=e.tickSize||s,v=K(e.tickCoord)?e.tickCoord:e.coordinate;switch(o){case"top":u=d=e.coordinate,m=n+ +!l*a,h=m-b*y,g=h-b*c,p=v;break;case"left":h=m=e.coordinate,d=t+ +!l*r,u=d-b*y,p=u-b*c,g=v;break;case"right":h=m=e.coordinate,d=t+ +l*r,u=d+b*y,p=u+b*c,g=v;break;default:u=d=e.coordinate,m=n+ +l*a,h=m+b*y,g=h+b*c,p=v;break}return{line:{x1:u,y1:h,x2:d,y2:m},tick:{x:p,y:g}}}function pO(e,t){switch(e){case"left":return t?"start":"end";case"right":return t?"end":"start";default:return"middle"}}function gO(e,t){switch(e){case"left":case"right":return"middle";case"top":return t?"start":"end";default:return t?"end":"start"}}function fO(e){var{option:t,tickProps:n,value:r}=e,a,o=le(n.className,"recharts-cartesian-axis-tick-value");if(f.isValidElement(t))a=f.cloneElement(t,ye(ye({},n),{},{className:o}));else if(typeof t=="function")a=t(ye(ye({},n),{},{className:o}));else{var s="recharts-cartesian-axis-tick-value";typeof t!="boolean"&&(s=le(s,t==null?void 0:t.className)),a=f.createElement(ou,$n({},n,{className:s}),r)}return a}var yO=f.forwardRef((e,t)=>{var{ticks:n=[],tick:r,tickLine:a,stroke:o,tickFormatter:s,unit:l,padding:c,tickTextProps:u,orientation:d,mirror:h,x:m,y:p,width:g,height:b,tickSize:y,tickMargin:v,fontSize:x,letterSpacing:k,getTicksConfig:I,events:w,axisType:T}=e,j=aO(ye(ye({},I),{},{ticks:n}),x,k),E=pO(d,h),O=gO(d,h),$=dn(I),N=Sl(r),D={};typeof a=="object"&&(D=a);var R=ye(ye({},$),{},{fill:"none"},D),_=j.map(z=>ye({entry:z},mO(z,m,p,g,b,d,y,h,v))),F=_.map(z=>{var{entry:Z,line:q}=z;return f.createElement(Ht,{className:"recharts-cartesian-axis-tick",key:"tick-".concat(Z.value,"-").concat(Z.coordinate,"-").concat(Z.tickCoord)},a&&f.createElement("line",$n({},R,q,{className:le("recharts-cartesian-axis-tick-line",rr(a,"className"))})))}),G=_.map((z,Z)=>{var{entry:q,tick:te}=z,he=ye(ye(ye(ye({textAnchor:E,verticalAnchor:O},$),{},{stroke:"none",fill:o},N),te),{},{index:Z,payload:q,visibleTicksCount:j.length,tickFormatter:s,padding:c},u);return f.createElement(Ht,$n({className:"recharts-cartesian-axis-tick-label",key:"tick-label-".concat(q.value,"-").concat(q.coordinate,"-").concat(q.tickCoord)},Ml(w,q,Z)),r&&f.createElement(fO,{option:r,tickProps:he,value:"".concat(typeof s=="function"?s(q.value,Z):q.value).concat(l||"")}))});return f.createElement("g",{className:"recharts-cartesian-axis-ticks recharts-".concat(T,"-ticks")},G.length>0&&f.createElement(fn,{zIndex:He.label},f.createElement("g",{className:"recharts-cartesian-axis-tick-labels recharts-".concat(T,"-tick-labels"),ref:t},G)),F.length>0&&f.createElement("g",{className:"recharts-cartesian-axis-tick-lines recharts-".concat(T,"-tick-lines")},F))}),bO=f.forwardRef((e,t)=>{var{axisLine:n,width:r,height:a,className:o,hide:s,ticks:l,axisType:c}=e,u=sO(e,iO),[d,h]=f.useState(""),[m,p]=f.useState(""),g=f.useRef(null);f.useImperativeHandle(t,()=>({getCalculatedWidth:()=>{var y;return oO({ticks:g.current,label:(y=e.labelRef)===null||y===void 0?void 0:y.current,labelGapWithTick:5,tickSize:e.tickSize,tickMargin:e.tickMargin})}}));var b=f.useCallback(y=>{if(y){var v=y.getElementsByClassName("recharts-cartesian-axis-tick-value");g.current=v;var x=v[0];if(x){var k=window.getComputedStyle(x),I=k.fontSize,w=k.letterSpacing;(I!==d||w!==m)&&(h(I),p(w))}}},[d,m]);return s||r!=null&&r<=0||a!=null&&a<=0?null:f.createElement(fn,{zIndex:e.zIndex},f.createElement(Ht,{className:le("recharts-cartesian-axis",o)},f.createElement(hO,{x:e.x,y:e.y,width:r,height:a,orientation:e.orientation,mirror:e.mirror,axisLine:n,otherSvgProps:dn(e)}),f.createElement(yO,{ref:b,axisType:c,events:u,fontSize:d,getTicksConfig:e,height:e.height,letterSpacing:m,mirror:e.mirror,orientation:e.orientation,padding:e.padding,stroke:e.stroke,tick:e.tick,tickFormatter:e.tickFormatter,tickLine:e.tickLine,tickMargin:e.tickMargin,tickSize:e.tickSize,tickTextProps:e.tickTextProps,ticks:l,unit:e.unit,width:e.width,x:e.x,y:e.y}),f.createElement(dC,{x:e.x,y:e.y,width:e.width,height:e.height,lowerWidth:e.width,upperWidth:e.width},f.createElement(xC,{label:e.label,labelRef:e.labelRef}),e.children)))}),uu=f.forwardRef((e,t)=>{var n=pt(e,Sn);return f.createElement(bO,$n({},n,{ref:t}))});uu.displayName="CartesianAxis";var vO={},hb=Ze({name:"errorBars",initialState:vO,reducers:{addErrorBar:(e,t)=>{var{itemId:n,errorBar:r}=t.payload;e[n]||(e[n]=[]),e[n].push(r)},replaceErrorBar:(e,t)=>{var{itemId:n,prev:r,next:a}=t.payload;e[n]&&(e[n]=e[n].map(o=>o.dataKey===r.dataKey&&o.direction===r.direction?a:o))},removeErrorBar:(e,t)=>{var{itemId:n,errorBar:r}=t.payload;e[n]&&(e[n]=e[n].filter(a=>a.dataKey!==r.dataKey||a.direction!==r.direction))}}});hb.actions;var wO=hb.reducer,xO=["children"];function kO(e,t){if(e==null)return{};var n,r,a=TO(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function TO(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}var IO={data:[],xAxisId:"xAxis-0",yAxisId:"yAxis-0",dataPointFormatter:()=>({x:0,y:0,value:0}),errorBarOffset:0},jO=f.createContext(IO);function AO(e){var{children:t}=e,n=kO(e,xO);return f.createElement(jO.Provider,{value:n},t)}function mb(e,t){var n,r,a=V(u=>en(u,e)),o=V(u=>tn(u,t)),s=(n=a==null?void 0:a.allowDataOverflow)!==null&&n!==void 0?n:Ae.allowDataOverflow,l=(r=o==null?void 0:o.allowDataOverflow)!==null&&r!==void 0?r:Ne.allowDataOverflow,c=s||l;return{needClip:c,needClipX:s,needClipY:l}}function NO(e){var{xAxisId:t,yAxisId:n,clipPathId:r}=e,a=lb(),{needClipX:o,needClipY:s,needClip:l}=mb(t,n);if(!l||!a)return null;var{x:c,y:u,width:d,height:h}=a;return f.createElement("clipPath",{id:"clipPath-".concat(r)},f.createElement("rect",{x:o?c:c-d/2,y:s?u:u-h/2,width:o?d:d*2,height:s?h:h*2}))}var SO={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wa=f;function PO(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var CO=typeof Object.is=="function"?Object.is:PO,OO=wa.useSyncExternalStore,EO=wa.useRef,MO=wa.useEffect,$O=wa.useMemo,DO=wa.useDebugValue;SO.useSyncExternalStoreWithSelector=function(e,t,n,r,a){var o=EO(null);if(o.current===null){var s={hasValue:!1,value:null};o.current=s}else s=o.current;o=$O(function(){function c(p){if(!u){if(u=!0,d=p,p=r(p),a!==void 0&&s.hasValue){var g=s.value;if(a(g,p))return h=g}return h=p}if(g=h,CO(d,p))return g;var b=r(p);return a!==void 0&&a(g,b)?(d=p,g):(d=p,h=b)}var u=!1,d,h,m=n===void 0?null:n;return[function(){return c(t())},m===null?void 0:function(){return c(m())}]},[t,n,r,a]);var l=OO(e,o[0],o[1]);return MO(function(){s.hasValue=!0,s.value=l},[l]),DO(l),l};function BO(e){e()}function RO(){let e=null,t=null;return{clear(){e=null,t=null},notify(){BO(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=e;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const a=t={callback:n,next:null,prev:t};return a.prev?a.prev.next=a:e=a,function(){!r||e===null||(r=!1,a.next?a.next.prev=a.prev:t=a.prev,a.prev?a.prev.next=a.next:e=a.next)}}}}var Bm={notify(){},get:()=>[]};function _O(e,t){let n,r=Bm,a=0,o=!1;function s(b){d();const y=r.subscribe(b);let v=!1;return()=>{v||(v=!0,y(),h())}}function l(){r.notify()}function c(){g.onStateChange&&g.onStateChange()}function u(){return o}function d(){a++,n||(n=t?t.addNestedSub(c):e.subscribe(c),r=RO())}function h(){a--,n&&a===0&&(n(),n=void 0,r.clear(),r=Bm)}function m(){o||(o=!0,d())}function p(){o&&(o=!1,h())}const g={addNestedSub:s,notifyNestedSubs:l,handleChangeWrapper:c,isSubscribed:u,trySubscribe:m,tryUnsubscribe:p,getListeners:()=>r};return g}var WO=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",LO=WO(),FO=()=>typeof navigator<"u"&&navigator.product==="ReactNative",HO=FO(),YO=()=>LO||HO?f.useLayoutEffect:f.useEffect,zO=YO();function Rm(e,t){return e===t?e!==0||t!==0||1/e===1/t:e!==e&&t!==t}function GO(e,t){if(Rm(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(let a=0;a<n.length;a++)if(!Object.prototype.hasOwnProperty.call(t,n[a])||!Rm(e[n[a]],t[n[a]]))return!1;return!0}var gs=Symbol.for("react-redux-context"),fs=typeof globalThis<"u"?globalThis:{};function qO(){if(!f.createContext)return{};const e=fs[gs]??(fs[gs]=new Map);let t=e.get(f.createContext);return t||(t=f.createContext(null),e.set(f.createContext,t)),t}var UO=qO();function KO(e){const{children:t,context:n,serverState:r,store:a}=e,o=f.useMemo(()=>{const c=_O(a);return{store:a,subscription:c,getServerState:r?()=>r:void 0}},[a,r]),s=f.useMemo(()=>a.getState(),[a]);zO(()=>{const{subscription:c}=o;return c.onStateChange=c.notifyNestedSubs,c.trySubscribe(),s!==a.getState()&&c.notifyNestedSubs(),()=>{c.tryUnsubscribe(),c.onStateChange=void 0}},[o,s]);const l=n||UO;return f.createElement(l.Provider,{value:o},t)}var VO=KO,JO=new Set(["axisLine","tickLine","activeBar","activeDot","activeLabel","activeShape","allowEscapeViewBox","background","cursor","dot","label","line","margin","padding","position","shape","style","tick","wrapperStyle","radius"]);function ZO(e,t){return e==null&&t==null?!0:typeof e=="number"&&typeof t=="number"?e===t||e!==e&&t!==t:e===t}function du(e,t){var n=new Set([...Object.keys(e),...Object.keys(t)]);for(var r of n)if(JO.has(r)){if(e[r]==null&&t[r]==null)continue;if(!GO(e[r],t[r]))return!1}else if(!ZO(e[r],t[r]))return!1;return!0}function Ln(e,t){var n,r;return(n=(r=e.graphicalItems.cartesianItems.find(a=>a.id===t))===null||r===void 0?void 0:r.xAxisId)!==null&&n!==void 0?n:ib}function Fn(e,t){var n,r;return(n=(r=e.graphicalItems.cartesianItems.find(a=>a.id===t))===null||r===void 0?void 0:r.yAxisId)!==null&&n!==void 0?n:ib}var XO=!0,ys="Invariant failed";function QO(e,t){if(!e){if(XO)throw new Error(ys);var n=typeof t=="function"?t():t,r=n?"".concat(ys,": ").concat(n):ys;throw new Error(r)}}function yl(){return yl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yl.apply(null,arguments)}function $o(e){return f.createElement(e5,yl({shapeType:"rectangle",activeClassName:"recharts-active-bar"},e))}var eE=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return(r,a)=>{if(K(t))return t;var o=K(r)||Ce(r);return o?t(r,a):(o||QO(!1,"minPointSize callback function received a value with type of ".concat(typeof r,". Currently only numbers or null/undefined are supported.")),n)}},tE=(e,t,n)=>n,nE=(e,t)=>t,xa=S([Wc,nE],(e,t)=>e.filter(n=>n.type==="bar").find(n=>n.id===t)),rE=S([xa],e=>e==null?void 0:e.maxBarSize),aE=(e,t,n,r)=>r,oE=S([re,Wc,Ln,Fn,tE],(e,t,n,r,a)=>t.filter(o=>e==="horizontal"?o.xAxisId===n:o.yAxisId===r).filter(o=>o.isPanorama===a).filter(o=>o.hide===!1).filter(o=>o.type==="bar")),iE=(e,t,n)=>{var r=re(e),a=Ln(e,t),o=Fn(e,t);if(!(a==null||o==null))return r==="horizontal"?ul(e,"yAxis",o,n):ul(e,"xAxis",a,n)},sE=(e,t)=>{var n=re(e),r=Ln(e,t),a=Fn(e,t);if(!(r==null||a==null))return n==="horizontal"?Hh(e,"xAxis",r):Hh(e,"yAxis",a)},lE=S([oE,mA,sE],P5),cE=(e,t,n)=>{var r,a,o=xa(e,t);if(o!=null){var s=Ln(e,t),l=Fn(e,t);if(!(s==null||l==null)){var c=re(e),u=gy(e),{maxBarSize:d}=o,h=Ce(d)?u:d,m,p;return c==="horizontal"?(m=dr(e,"xAxis",s,n),p=ur(e,"xAxis",s,n)):(m=dr(e,"yAxis",l,n),p=ur(e,"yAxis",l,n)),(r=(a=lo(m,p,!0))!==null&&a!==void 0?a:h)!==null&&r!==void 0?r:0}}},pb=(e,t,n)=>{var r=re(e),a=Ln(e,t),o=Fn(e,t);if(!(a==null||o==null)){var s,l;return r==="horizontal"?(s=dr(e,"xAxis",a,n),l=ur(e,"xAxis",a,n)):(s=dr(e,"yAxis",o,n),l=ur(e,"yAxis",o,n)),lo(s,l)}},uE=S([lE,gy,hA,fy,cE,pb,rE],$5),dE=(e,t,n)=>{var r=Ln(e,t);if(r!=null)return dr(e,"xAxis",r,n)},hE=(e,t,n)=>{var r=Fn(e,t);if(r!=null)return dr(e,"yAxis",r,n)},mE=(e,t,n)=>{var r=Ln(e,t);if(r!=null)return ur(e,"xAxis",r,n)},pE=(e,t,n)=>{var r=Fn(e,t);if(r!=null)return ur(e,"yAxis",r,n)},gE=S([uE,xa],(e,t)=>{if(!(e==null||t==null)){var n=e.find(r=>r.stackId===t.stackId&&t.dataKey!=null&&r.dataKeys.includes(t.dataKey));if(n!=null)return n.position}}),fE=S([iE,xa],D5),yE=S([Oe,ec,dE,hE,mE,pE,gE,re,eA,pb,fE,xa,aE],(e,t,n,r,a,o,s,l,c,u,d,h,m)=>{var{chartData:p,dataStartIndex:g,dataEndIndex:b}=c;if(!(h==null||s==null||t==null||l!=="horizontal"&&l!=="vertical"||n==null||r==null||a==null||o==null||u==null)){var{data:y}=h,v;if(y!=null&&y.length>0?v=y:v=p==null?void 0:p.slice(g,b+1),v!=null)return qE({layout:l,barSettings:h,pos:s,parentViewBox:t,bandSize:u,xAxis:n,yAxis:r,xAxisTicks:a,yAxisTicks:o,stackedData:d,displayedData:v,offset:e,cells:m,dataStartIndex:g})}}),bE=["index"];function bl(){return bl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},bl.apply(null,arguments)}function vE(e,t){if(e==null)return{};var n,r,a=wE(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function wE(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}var gb=f.createContext(void 0),xE=e=>{var t=f.useContext(gb);if(t!=null)return t.stackId;if(e!=null)return i1(e)},kE=(e,t)=>"recharts-bar-stack-clip-path-".concat(e,"-").concat(t),TE=e=>{var t=f.useContext(gb);if(t!=null){var{stackId:n}=t;return"url(#".concat(kE(n,e),")")}},IE=e=>{var{index:t}=e,n=vE(e,bE),r=TE(t);return f.createElement(Ht,bl({className:"recharts-bar-stack-layer",clipPath:r},n))},jE=["onMouseEnter","onMouseLeave","onClick"],AE=["value","background","tooltipPosition"],NE=["id"],SE=["onMouseEnter","onClick","onMouseLeave"];function Vt(){return Vt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vt.apply(null,arguments)}function _m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ge(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?_m(Object(n),!0).forEach(function(r){PE(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_m(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function PE(e,t,n){return(t=CE(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function CE(e){var t=OE(e,"string");return typeof t=="symbol"?t:t+""}function OE(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Do(e,t){if(e==null)return{};var n,r,a=EE(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function EE(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}var ME=e=>{var{dataKey:t,name:n,fill:r,legendType:a,hide:o}=e;return[{inactive:o,dataKey:t,type:a,color:r,value:Hg(n,t),payload:e}]},$E=f.memo(e=>{var{dataKey:t,stroke:n,strokeWidth:r,fill:a,name:o,hide:s,unit:l,tooltipType:c,id:u}=e,d={dataDefinedOnItem:void 0,positions:void 0,settings:{stroke:n,strokeWidth:r,fill:a,dataKey:t,nameKey:void 0,name:Hg(o,t),hide:s,type:c,color:a,unit:l,graphicalItemId:u}};return f.createElement(t5,{tooltipEntrySettings:d})});function DE(e){var t=V(hr),{data:n,dataKey:r,background:a,allOtherBarProps:o}=e,{onMouseEnter:s,onMouseLeave:l,onClick:c}=o,u=Do(o,jE),d=nb(s,r,o.id),h=rb(l),m=ab(c,r,o.id);if(!a||n==null)return null;var p=Sl(a);return f.createElement(fn,{zIndex:B5(a,He.barBackground)},n.map((g,b)=>{var{value:y,background:v,tooltipPosition:x}=g,k=Do(g,AE);if(!v)return null;var I=d(g,b),w=h(g,b),T=m(g,b),j=Ge(Ge(Ge(Ge(Ge({option:a,isActive:String(b)===t},k),{},{fill:"#eee"},v),p),Ml(u,g,b)),{},{onMouseEnter:I,onMouseLeave:w,onClick:T,dataKey:r,index:b,className:"recharts-bar-background-rectangle"});return f.createElement($o,Vt({key:"background-bar-".concat(b)},j))}))}function BE(e){var{showLabels:t,children:n,rects:r}=e,a=r==null?void 0:r.map(o=>{var s={x:o.x,y:o.y,width:o.width,lowerWidth:o.width,upperWidth:o.width,height:o.height};return Ge(Ge({},s),{},{value:o.value,payload:o.payload,parentViewBox:o.parentViewBox,viewBox:s,fill:o.fill})});return f.createElement(SC,{value:t?a:void 0},n)}function RE(e){var{shape:t,activeBar:n,baseProps:r,entry:a,index:o,dataKey:s}=e,l=V(hr),c=V(A0),u=n&&String(o)===l&&(c==null||s===c),d=u?n:t;return u?f.createElement(fn,{zIndex:He.activeBar},f.createElement($o,Vt({},r,{name:String(r.name)},a,{isActive:u,option:d,index:o,dataKey:s}))):f.createElement($o,Vt({},r,{name:String(r.name)},a,{isActive:u,option:d,index:o,dataKey:s}))}function _E(e){var{shape:t,baseProps:n,entry:r,index:a,dataKey:o}=e;return f.createElement($o,Vt({},n,{name:String(n.name)},r,{isActive:!1,option:t,index:a,dataKey:o}))}function WE(e){var t,{data:n,props:r}=e,a=(t=dn(r))!==null&&t!==void 0?t:{},{id:o}=a,s=Do(a,NE),{shape:l,dataKey:c,activeBar:u}=r,{onMouseEnter:d,onClick:h,onMouseLeave:m}=r,p=Do(r,SE),g=nb(d,c,o),b=rb(m),y=ab(h,c,o);return n?f.createElement(f.Fragment,null,n.map((v,x)=>f.createElement(IE,Vt({index:x,key:"rectangle-".concat(v==null?void 0:v.x,"-").concat(v==null?void 0:v.y,"-").concat(v==null?void 0:v.value,"-").concat(x),className:"recharts-bar-rectangle"},Ml(p,v,x),{onMouseEnter:g(v,x),onMouseLeave:b(v,x),onClick:y(v,x)}),u?f.createElement(RE,{shape:l,activeBar:u,baseProps:s,entry:v,index:x,dataKey:c}):f.createElement(_E,{shape:l,baseProps:s,entry:v,index:x,dataKey:c})))):null}function LE(e){var{props:t,previousRectanglesRef:n}=e,{data:r,layout:a,isAnimationActive:o,animationBegin:s,animationDuration:l,animationEasing:c,onAnimationEnd:u,onAnimationStart:d}=t,h=n.current,m=oc(t,"recharts-bar-"),[p,g]=f.useState(!1),b=!p,y=f.useCallback(()=>{typeof u=="function"&&u(),g(!1)},[u]),v=f.useCallback(()=>{typeof d=="function"&&d(),g(!0)},[d]);return f.createElement(BE,{showLabels:b,rects:r},f.createElement(ac,{animationId:m,begin:s,duration:l,isActive:o,easing:c,onAnimationEnd:y,onAnimationStart:v,key:m},x=>{var k=x===1?r:r==null?void 0:r.map((I,w)=>{var T=h&&h[w];if(T)return Ge(Ge({},I),{},{x:De(T.x,I.x,x),y:De(T.y,I.y,x),width:De(T.width,I.width,x),height:De(T.height,I.height,x)});if(a==="horizontal"){var j=De(0,I.height,x),E=De(I.stackedBarStart,I.y,x);return Ge(Ge({},I),{},{y:E,height:j})}var O=De(0,I.width,x),$=De(I.stackedBarStart,I.x,x);return Ge(Ge({},I),{},{width:O,x:$})});return x>0&&(n.current=k??null),k==null?null:f.createElement(Ht,null,f.createElement(WE,{props:t,data:k}))}),f.createElement(OC,{label:t.label}),t.children)}function FE(e){var t=f.useRef(null);return f.createElement(LE,{previousRectanglesRef:t,props:e})}var fb=0,HE=(e,t)=>{var n=Array.isArray(e.value)?e.value[1]:e.value;return{x:e.x,y:e.y,value:n,errorVal:Re(e,t)}};class YE extends f.PureComponent{render(){var{hide:t,data:n,dataKey:r,className:a,xAxisId:o,yAxisId:s,needClip:l,background:c,id:u}=this.props;if(t||n==null)return null;var d=le("recharts-bar",a),h=u;return f.createElement(Ht,{className:d,id:u},l&&f.createElement("defs",null,f.createElement(NO,{clipPathId:h,xAxisId:o,yAxisId:s})),f.createElement(Ht,{className:"recharts-bar-rectangles",clipPath:l?"url(#clipPath-".concat(h,")"):void 0},f.createElement(DE,{data:n,dataKey:r,background:c,allOtherBarProps:this.props}),f.createElement(FE,this.props)))}}var zE={activeBar:!1,animationBegin:0,animationDuration:400,animationEasing:"ease",background:!1,hide:!1,isAnimationActive:"auto",label:!1,legendType:"rect",minPointSize:fb,xAxisId:0,yAxisId:0,zIndex:He.bar};function GE(e){var{xAxisId:t,yAxisId:n,hide:r,legendType:a,minPointSize:o,activeBar:s,animationBegin:l,animationDuration:c,animationEasing:u,isAnimationActive:d}=e,{needClip:h}=mb(t,n),m=ia(),p=at(),g=RC(e.children,au),b=V(x=>yE(x,e.id,p,g));if(m!=="vertical"&&m!=="horizontal")return null;var y,v=b==null?void 0:b[0];return v==null||v.height==null||v.width==null?y=0:y=m==="vertical"?v.height/2:v.width/2,f.createElement(AO,{xAxisId:t,yAxisId:n,data:b,dataPointFormatter:HE,errorBarOffset:y},f.createElement(YE,Vt({},e,{layout:m,needClip:h,data:b,xAxisId:t,yAxisId:n,hide:r,legendType:a,minPointSize:o,activeBar:s,animationBegin:l,animationDuration:c,animationEasing:u,isAnimationActive:d})))}function qE(e){var{layout:t,barSettings:{dataKey:n,minPointSize:r},pos:a,bandSize:o,xAxis:s,yAxis:l,xAxisTicks:c,yAxisTicks:u,stackedData:d,displayedData:h,offset:m,cells:p,parentViewBox:g,dataStartIndex:b}=e,y=t==="horizontal"?l:s,v=d?y.scale.domain():null,x=s1({numericAxis:y}),k=y.scale(x);return h.map((I,w)=>{var T,j,E,O,$,N;if(d){var D=d[w+b];if(D==null)return null;T=t1(D,v)}else T=Re(I,n),Array.isArray(T)||(T=[x,T]);var R=eE(r,fb)(T[1],w);if(t==="horizontal"){var _,[F,G]=[l.scale(T[0]),l.scale(T[1])];j=td({axis:s,ticks:c,bandSize:o,offset:a.offset,entry:I,index:w}),E=(_=G??F)!==null&&_!==void 0?_:void 0,O=a.size;var z=F-G;if($=Ot(z)?0:z,N={x:j,y:m.top,width:O,height:m.height},Math.abs(R)>0&&Math.abs($)<Math.abs(R)){var Z=et($||R)*(Math.abs(R)-Math.abs($));E-=Z,$+=Z}}else{var[q,te]=[s.scale(T[0]),s.scale(T[1])];if(j=q,E=td({axis:l,ticks:u,bandSize:o,offset:a.offset,entry:I,index:w}),O=te-q,$=a.size,N={x:m.left,y:E,width:m.width,height:$},Math.abs(R)>0&&Math.abs(O)<Math.abs(R)){var he=et(O||R)*(Math.abs(R)-Math.abs(O));O+=he}}if(j==null||E==null||O==null||$==null)return null;var Ie=Ge(Ge({},I),{},{stackedBarStart:k,x:j,y:E,width:O,height:$,value:d?T:T[1],payload:I,background:N,tooltipPosition:{x:j+O/2,y:E+$/2},parentViewBox:g},p&&p[w]&&p[w].props);return Ie}).filter(Boolean)}function UE(e){var t=pt(e,zE),n=xE(t.stackId),r=at();return f.createElement(s5,{id:t.id,type:"bar"},a=>f.createElement(f.Fragment,null,f.createElement(n5,{legendPayload:ME(t)}),f.createElement($E,{dataKey:t.dataKey,stroke:t.stroke,strokeWidth:t.strokeWidth,fill:t.fill,name:t.name,hide:t.hide,unit:t.unit,tooltipType:t.tooltipType,id:a}),f.createElement(p5,{type:"bar",id:a,data:void 0,xAxisId:t.xAxisId,yAxisId:t.yAxisId,zAxisId:0,dataKey:t.dataKey,stackId:n,hide:t.hide,barSize:t.barSize,minPointSize:t.minPointSize,maxBarSize:t.maxBarSize,isPanorama:r}),f.createElement(fn,{zIndex:t.zIndex},f.createElement(GE,Vt({},t,{id:a})))))}var yb=f.memo(UE,du);yb.displayName="Bar";var KE=["domain","range"],VE=["domain","range"];function Wm(e,t){if(e==null)return{};var n,r,a=JE(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function JE(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Lm(e,t){return e===t?!0:Array.isArray(e)&&e.length===2&&Array.isArray(t)&&t.length===2?e[0]===t[0]&&e[1]===t[1]:!1}function bb(e,t){if(e===t)return!0;var{domain:n,range:r}=e,a=Wm(e,KE),{domain:o,range:s}=t,l=Wm(t,VE);return!Lm(n,o)||!Lm(r,s)?!1:du(a,l)}var ZE=["dangerouslySetInnerHTML","ticks","scale"],XE=["id","scale"];function vl(){return vl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},vl.apply(null,arguments)}function Fm(e,t){if(e==null)return{};var n,r,a=QE(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function QE(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function eM(e){var t=ge(),n=f.useRef(null);return f.useLayoutEffect(()=>{n.current===null?t(v5(e)):n.current!==e&&t(w5({prev:n.current,next:e})),n.current=e},[e,t]),f.useLayoutEffect(()=>()=>{n.current&&(t(x5(n.current)),n.current=null)},[t]),null}var tM=e=>{var{xAxisId:t,className:n}=e,r=V(ec),a=at(),o="xAxis",s=V(m=>i0(m,o,t,a)),l=V(m=>n0(m,t)),c=V(m=>uN(m,t)),u=V(m=>jy(m,t));if(l==null||c==null||u==null)return null;var d=Fm(e,ZE),h=Fm(u,XE);return f.createElement(uu,vl({},d,h,{x:c.x,y:c.y,width:l.width,height:l.height,className:le("recharts-".concat(o," ").concat(o),n),viewBox:r,ticks:s,axisType:o}))},nM={allowDataOverflow:Ae.allowDataOverflow,allowDecimals:Ae.allowDecimals,allowDuplicatedCategory:Ae.allowDuplicatedCategory,angle:Ae.angle,axisLine:Sn.axisLine,height:Ae.height,hide:!1,includeHidden:Ae.includeHidden,interval:Ae.interval,minTickGap:Ae.minTickGap,mirror:Ae.mirror,orientation:Ae.orientation,padding:Ae.padding,reversed:Ae.reversed,scale:Ae.scale,tick:Ae.tick,tickCount:Ae.tickCount,tickLine:Sn.tickLine,tickSize:Sn.tickSize,type:Ae.type,xAxisId:0},rM=e=>{var t=pt(e,nM);return f.createElement(f.Fragment,null,f.createElement(eM,{allowDataOverflow:t.allowDataOverflow,allowDecimals:t.allowDecimals,allowDuplicatedCategory:t.allowDuplicatedCategory,angle:t.angle,dataKey:t.dataKey,domain:t.domain,height:t.height,hide:t.hide,id:t.xAxisId,includeHidden:t.includeHidden,interval:t.interval,minTickGap:t.minTickGap,mirror:t.mirror,name:t.name,orientation:t.orientation,padding:t.padding,reversed:t.reversed,scale:t.scale,tick:t.tick,tickCount:t.tickCount,tickFormatter:t.tickFormatter,ticks:t.ticks,type:t.type,unit:t.unit}),f.createElement(tM,t))},vb=f.memo(rM,bb);vb.displayName="XAxis";var aM=["dangerouslySetInnerHTML","ticks","scale"],oM=["id","scale"];function wl(){return wl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wl.apply(null,arguments)}function Hm(e,t){if(e==null)return{};var n,r,a=iM(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function iM(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function sM(e){var t=ge(),n=f.useRef(null);return f.useLayoutEffect(()=>{n.current===null?t(k5(e)):n.current!==e&&t(T5({prev:n.current,next:e})),n.current=e},[e,t]),f.useLayoutEffect(()=>()=>{n.current&&(t(I5(n.current)),n.current=null)},[t]),null}var lM=e=>{var{yAxisId:t,className:n,width:r,label:a}=e,o=f.useRef(null),s=f.useRef(null),l=V(ec),c=at(),u=ge(),d="yAxis",h=V(v=>r0(v,t)),m=V(v=>hN(v,t)),p=V(v=>i0(v,d,t,c)),g=V(v=>Ay(v,t));if(f.useLayoutEffect(()=>{if(!(r!=="auto"||!h||iu(a)||f.isValidElement(a)||g==null)){var v=o.current;if(v){var x=v.getCalculatedWidth();Math.round(h.width)!==Math.round(x)&&u(j5({id:t,width:x}))}}},[p,h,u,a,t,r,g]),h==null||m==null||g==null)return null;var b=Hm(e,aM),y=Hm(g,oM);return f.createElement(uu,wl({},b,y,{ref:o,labelRef:s,x:m.x,y:m.y,tickTextProps:r==="auto"?{width:void 0}:{width:r},width:h.width,height:h.height,className:le("recharts-".concat(d," ").concat(d),n),viewBox:l,ticks:p,axisType:d}))},cM={allowDataOverflow:Ne.allowDataOverflow,allowDecimals:Ne.allowDecimals,allowDuplicatedCategory:Ne.allowDuplicatedCategory,angle:Ne.angle,axisLine:Sn.axisLine,hide:!1,includeHidden:Ne.includeHidden,interval:Ne.interval,minTickGap:Ne.minTickGap,mirror:Ne.mirror,orientation:Ne.orientation,padding:Ne.padding,reversed:Ne.reversed,scale:Ne.scale,tick:Ne.tick,tickCount:Ne.tickCount,tickLine:Sn.tickLine,tickSize:Sn.tickSize,type:Ne.type,width:Ne.width,yAxisId:0},uM=e=>{var t=pt(e,cM);return f.createElement(f.Fragment,null,f.createElement(sM,{interval:t.interval,id:t.yAxisId,scale:t.scale,type:t.type,domain:t.domain,allowDataOverflow:t.allowDataOverflow,dataKey:t.dataKey,allowDuplicatedCategory:t.allowDuplicatedCategory,allowDecimals:t.allowDecimals,tickCount:t.tickCount,padding:t.padding,includeHidden:t.includeHidden,reversed:t.reversed,ticks:t.ticks,width:t.width,orientation:t.orientation,mirror:t.mirror,hide:t.hide,unit:t.unit,name:t.name,angle:t.angle,minTickGap:t.minTickGap,tick:t.tick,tickFormatter:t.tickFormatter}),f.createElement(lM,t))},wb=f.memo(uM,bb);wb.displayName="YAxis";var dM=(e,t)=>t,hu=S([dM,re,Ty,ke,k0,nn,AS,Oe],MS),mu=e=>{var t=e.currentTarget.getBoundingClientRect(),n=t.width/e.currentTarget.offsetWidth,r=t.height/e.currentTarget.offsetHeight;return{chartX:Math.round((e.clientX-t.left)/n),chartY:Math.round((e.clientY-t.top)/r)}},xb=ht("mouseClick"),kb=aa();kb.startListening({actionCreator:xb,effect:(e,t)=>{var n=e.payload,r=hu(t.getState(),mu(n));(r==null?void 0:r.activeIndex)!=null&&t.dispatch(AN({activeIndex:r.activeIndex,activeDataKey:void 0,activeCoordinate:r.activeCoordinate}))}});var xl=ht("mouseMove"),Tb=aa(),Fa=null;Tb.startListening({actionCreator:xl,effect:(e,t)=>{var n=e.payload;Fa!==null&&cancelAnimationFrame(Fa);var r=mu(n);Fa=requestAnimationFrame(()=>{var a=t.getState(),o=Kc(a,a.tooltip.settings.shared);if(o==="axis"){var s=hu(a,r);(s==null?void 0:s.activeIndex)!=null?t.dispatch(p0({activeIndex:s.activeIndex,activeDataKey:void 0,activeCoordinate:s.activeCoordinate})):t.dispatch(m0())}Fa=null})}});function hM(e,t){return t instanceof HTMLElement?"HTMLElement <".concat(t.tagName,' class="').concat(t.className,'">'):t===window?"global.window":e==="children"&&typeof t=="object"&&t!==null?"<<CHILDREN>>":t}var Ym={accessibilityLayer:!0,barCategoryGap:"10%",barGap:4,barSize:void 0,className:void 0,maxBarSize:void 0,stackOffset:"none",syncId:void 0,syncMethod:"index",baseValue:void 0,reverseStackOrder:!1},Ib=Ze({name:"rootProps",initialState:Ym,reducers:{updateOptions:(e,t)=>{var n;e.accessibilityLayer=t.payload.accessibilityLayer,e.barCategoryGap=t.payload.barCategoryGap,e.barGap=(n=t.payload.barGap)!==null&&n!==void 0?n:Ym.barGap,e.barSize=t.payload.barSize,e.maxBarSize=t.payload.maxBarSize,e.stackOffset=t.payload.stackOffset,e.syncId=t.payload.syncId,e.syncMethod=t.payload.syncMethod,e.className=t.payload.className,e.baseValue=t.payload.baseValue,e.reverseStackOrder=t.payload.reverseStackOrder}}}),mM=Ib.reducer,{updateOptions:pM}=Ib.actions,jb=Ze({name:"polarOptions",initialState:null,reducers:{updatePolarOptions:(e,t)=>t.payload}});jb.actions;var gM=jb.reducer,Ab=ht("keyDown"),Nb=ht("focus"),pu=aa();pu.startListening({actionCreator:Ab,effect:(e,t)=>{var n=t.getState(),r=n.rootProps.accessibilityLayer!==!1;if(r){var{keyboardInteraction:a}=n.tooltip,o=e.payload;if(!(o!=="ArrowRight"&&o!=="ArrowLeft"&&o!=="Enter")){var s=Vc(a,xr(n),pa(n),ba(n)),l=s==null?-1:Number(s);if(!(!Number.isFinite(l)||l<0)){var c=nn(n);if(o==="Enter"){var u=Co(n,"axis","hover",String(a.index));t.dispatch(hl({active:!a.active,activeIndex:a.index,activeCoordinate:u}));return}var d=fN(n),h=d==="left-to-right"?1:-1,m=o==="ArrowRight"?1:-1,p=l+m*h;if(!(c==null||p>=c.length||p<0)){var g=Co(n,"axis","hover",String(p));t.dispatch(hl({active:!0,activeIndex:p.toString(),activeCoordinate:g}))}}}}}});pu.startListening({actionCreator:Nb,effect:(e,t)=>{var n=t.getState(),r=n.rootProps.accessibilityLayer!==!1;if(r){var{keyboardInteraction:a}=n.tooltip;if(!a.active&&a.index==null){var o="0",s=Co(n,"axis","hover",String(o));t.dispatch(hl({active:!0,activeIndex:o,activeCoordinate:s}))}}}});var lt=ht("externalEvent"),Sb=aa(),bs=new Map;Sb.startListening({actionCreator:lt,effect:(e,t)=>{var{handler:n,reactEvent:r}=e.payload;if(n!=null){r.persist();var a=r.type,o=bs.get(a);o!==void 0&&cancelAnimationFrame(o);var s=requestAnimationFrame(()=>{try{var l=t.getState(),c={activeCoordinate:dS(l),activeDataKey:A0(l),activeIndex:hr(l),activeLabel:j0(l),activeTooltipIndex:hr(l),isTooltipActive:hS(l)};n(c,r)}finally{bs.delete(a)}});bs.set(a,s)}}});var fM=S([vr],e=>e.tooltipItemPayloads),yM=S([fM,ya,(e,t)=>t,(e,t,n)=>n],(e,t,n,r)=>{var a=e.find(l=>l.settings.graphicalItemId===r);if(a!=null){var{positions:o}=a;if(o!=null){var s=t(o,n);return s}}}),Pb=ht("touchMove"),Cb=aa();Cb.startListening({actionCreator:Pb,effect:(e,t)=>{var n=e.payload;if(!(n.touches==null||n.touches.length===0)){var r=t.getState(),a=Kc(r,r.tooltip.settings.shared);if(a==="axis"){var o=n.touches[0];if(o==null)return;var s=hu(r,mu({clientX:o.clientX,clientY:o.clientY,currentTarget:n.currentTarget}));(s==null?void 0:s.activeIndex)!=null&&t.dispatch(p0({activeIndex:s.activeIndex,activeDataKey:void 0,activeCoordinate:s.activeCoordinate}))}else if(a==="item"){var l,c=n.touches[0];if(document.elementFromPoint==null||c==null)return;var u=document.elementFromPoint(c.clientX,c.clientY);if(!u||!u.getAttribute)return;var d=u.getAttribute(p1),h=(l=u.getAttribute(g1))!==null&&l!==void 0?l:void 0,m=wr(r).find(b=>b.id===h);if(d==null||m==null||h==null)return;var{dataKey:p}=m,g=yM(r,d,h);t.dispatch(h0({activeDataKey:p,activeIndex:d,activeCoordinate:g,activeGraphicalItemId:h}))}}}});var bM=mg({brush:_5,cartesianAxis:A5,chartData:uP,errorBars:wO,graphicalItems:h5,layout:Vk,legend:iT,options:oP,polarAxis:MC,polarOptions:gM,referenceElements:G5,rootProps:mM,tooltip:NN,zIndex:US}),vM=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"Chart";return wk({reducer:bM,preloadedState:t,middleware:r=>{var a;return r({serializableCheck:!1,immutableCheck:!["commonjs","es6","production"].includes((a="es6")!==null&&a!==void 0?a:"")}).concat([kb.middleware,Tb.middleware,pu.middleware,Sb.middleware,Cb.middleware])},enhancers:r=>{var a=r;return typeof r=="function"&&(a=r()),a.concat(Sg({type:"raf"}))},devTools:{serialize:{replacer:hM},name:"recharts-".concat(n)}})};function wM(e){var{preloadedState:t,children:n,reduxStoreName:r}=e,a=at(),o=f.useRef(null);if(a)return n;o.current==null&&(o.current=vM(t,r));var s=Yl;return f.createElement(VO,{context:s,store:o.current},n)}function xM(e){var{layout:t,margin:n}=e,r=ge(),a=at();return f.useEffect(()=>{a||(r(qk(t)),r(Gk(n)))},[r,a,t,n]),null}var kM=f.memo(xM,du);function TM(e){var t=ge();return f.useEffect(()=>{t(pM(e))},[t,e]),null}function zm(e){var{zIndex:t,isPanorama:n}=e,r=f.useRef(null),a=ge();return f.useLayoutEffect(()=>(r.current&&a(GS({zIndex:t,element:r.current,isPanorama:n})),()=>{a(qS({zIndex:t,isPanorama:n}))}),[a,t,n]),f.createElement("g",{tabIndex:-1,ref:r})}function Gm(e){var{children:t,isPanorama:n}=e,r=V(DS);if(!r||r.length===0)return t;var a=r.filter(s=>s<0),o=r.filter(s=>s>0);return f.createElement(f.Fragment,null,a.map(s=>f.createElement(zm,{key:s,zIndex:s,isPanorama:n})),t,o.map(s=>f.createElement(zm,{key:s,zIndex:s,isPanorama:n})))}var IM=["children"];function jM(e,t){if(e==null)return{};var n,r,a=AM(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function AM(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Bo(){return Bo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Bo.apply(null,arguments)}var NM={width:"100%",height:"100%",display:"block"},SM=f.forwardRef((e,t)=>{var n=H1(),r=Y1(),a=af();if(!hn(n)||!hn(r))return null;var{children:o,otherAttributes:s,title:l,desc:c}=e,u,d;return s!=null&&(typeof s.tabIndex=="number"?u=s.tabIndex:u=a?0:void 0,typeof s.role=="string"?d=s.role:d=a?"application":void 0),f.createElement(gp,Bo({},s,{title:l,desc:c,role:d,tabIndex:u,width:n,height:r,style:NM,ref:t}),o)}),PM=e=>{var{children:t}=e,n=V(ci);if(!n)return null;var{width:r,height:a,y:o,x:s}=n;return f.createElement(gp,{width:r,height:a,x:s,y:o},t)},qm=f.forwardRef((e,t)=>{var{children:n}=e,r=jM(e,IM),a=at();return a?f.createElement(PM,null,f.createElement(Gm,{isPanorama:!0},n)):f.createElement(SM,Bo({ref:t},r),f.createElement(Gm,{isPanorama:!1},n))});function CM(){var e=ge(),[t,n]=f.useState(null),r=V(m1);return f.useEffect(()=>{if(t!=null){var a=t.getBoundingClientRect(),o=a.width/t.offsetWidth;de(o)&&o!==r&&e(Kk(o))}},[t,e,r]),n}function Um(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function OM(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Um(Object(n),!0).forEach(function(r){EM(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Um(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function EM(e,t,n){return(t=MM(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function MM(e){var t=$M(e,"string");return typeof t=="symbol"?t:t+""}function $M(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Dn(){return Dn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Dn.apply(null,arguments)}var DM=()=>(vP(),null);function Ro(e){if(typeof e=="number")return e;if(typeof e=="string"){var t=parseFloat(e);if(!Number.isNaN(t))return t}return 0}var BM=f.forwardRef((e,t)=>{var n,r,a=f.useRef(null),[o,s]=f.useState({containerWidth:Ro((n=e.style)===null||n===void 0?void 0:n.width),containerHeight:Ro((r=e.style)===null||r===void 0?void 0:r.height)}),l=f.useCallback((u,d)=>{s(h=>{var m=Math.round(u),p=Math.round(d);return h.containerWidth===m&&h.containerHeight===p?h:{containerWidth:m,containerHeight:p}})},[]),c=f.useCallback(u=>{if(typeof t=="function"&&t(u),u!=null&&typeof ResizeObserver<"u"){var{width:d,height:h}=u.getBoundingClientRect();l(d,h);var m=g=>{var{width:b,height:y}=g[0].contentRect;l(b,y)},p=new ResizeObserver(m);p.observe(u),a.current=p}},[t,l]);return f.useEffect(()=>()=>{var u=a.current;u!=null&&u.disconnect()},[l]),f.createElement(f.Fragment,null,f.createElement(di,{width:o.containerWidth,height:o.containerHeight}),f.createElement("div",Dn({ref:c},e)))}),RM=f.forwardRef((e,t)=>{var{width:n,height:r}=e,[a,o]=f.useState({containerWidth:Ro(n),containerHeight:Ro(r)}),s=f.useCallback((c,u)=>{o(d=>{var h=Math.round(c),m=Math.round(u);return d.containerWidth===h&&d.containerHeight===m?d:{containerWidth:h,containerHeight:m}})},[]),l=f.useCallback(c=>{if(typeof t=="function"&&t(c),c!=null){var{width:u,height:d}=c.getBoundingClientRect();s(u,d)}},[t,s]);return f.createElement(f.Fragment,null,f.createElement(di,{width:a.containerWidth,height:a.containerHeight}),f.createElement("div",Dn({ref:l},e)))}),_M=f.forwardRef((e,t)=>{var{width:n,height:r}=e;return f.createElement(f.Fragment,null,f.createElement(di,{width:n,height:r}),f.createElement("div",Dn({ref:t},e)))}),WM=f.forwardRef((e,t)=>{var{width:n,height:r}=e;return Yt(n)||Yt(r)?f.createElement(RM,Dn({},e,{ref:t})):f.createElement(_M,Dn({},e,{ref:t}))});function LM(e){return e===!0?BM:WM}var FM=f.forwardRef((e,t)=>{var{children:n,className:r,height:a,onClick:o,onContextMenu:s,onDoubleClick:l,onMouseDown:c,onMouseEnter:u,onMouseLeave:d,onMouseMove:h,onMouseUp:m,onTouchEnd:p,onTouchMove:g,onTouchStart:b,style:y,width:v,responsive:x,dispatchTouchEvents:k=!0}=e,I=f.useRef(null),w=ge(),[T,j]=f.useState(null),[E,O]=f.useState(null),$=CM(),N=tc(),D=(N==null?void 0:N.width)>0?N.width:v,R=(N==null?void 0:N.height)>0?N.height:a,_=f.useCallback(A=>{$(A),typeof t=="function"&&t(A),j(A),O(A),A!=null&&(I.current=A)},[$,t,j,O]),F=f.useCallback(A=>{w(xb(A)),w(lt({handler:o,reactEvent:A}))},[w,o]),G=f.useCallback(A=>{w(xl(A)),w(lt({handler:u,reactEvent:A}))},[w,u]),z=f.useCallback(A=>{w(m0()),w(lt({handler:d,reactEvent:A}))},[w,d]),Z=f.useCallback(A=>{w(xl(A)),w(lt({handler:h,reactEvent:A}))},[w,h]),q=f.useCallback(()=>{w(Nb())},[w]),te=f.useCallback(A=>{w(Ab(A.key))},[w]),he=f.useCallback(A=>{w(lt({handler:s,reactEvent:A}))},[w,s]),Ie=f.useCallback(A=>{w(lt({handler:l,reactEvent:A}))},[w,l]),ze=f.useCallback(A=>{w(lt({handler:c,reactEvent:A}))},[w,c]),fe=f.useCallback(A=>{w(lt({handler:m,reactEvent:A}))},[w,m]),P=f.useCallback(A=>{w(lt({handler:b,reactEvent:A}))},[w,b]),L=f.useCallback(A=>{k&&w(Pb(A)),w(lt({handler:g,reactEvent:A}))},[w,k,g]),B=f.useCallback(A=>{w(lt({handler:p,reactEvent:A}))},[w,p]),H=LM(x);return f.createElement(M0.Provider,{value:T},f.createElement(dw.Provider,{value:E},f.createElement(H,{width:D??(y==null?void 0:y.width),height:R??(y==null?void 0:y.height),className:le("recharts-wrapper",r),style:OM({position:"relative",cursor:"default",width:D,height:R},y),onClick:F,onContextMenu:he,onDoubleClick:Ie,onFocus:q,onKeyDown:te,onMouseDown:ze,onMouseEnter:G,onMouseLeave:z,onMouseMove:Z,onMouseUp:fe,onTouchEnd:B,onTouchMove:L,onTouchStart:P,ref:_},f.createElement(DM,null),n)))}),HM=["width","height","responsive","children","className","style","compact","title","desc"];function YM(e,t){if(e==null)return{};var n,r,a=zM(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function zM(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}var GM=f.forwardRef((e,t)=>{var{width:n,height:r,responsive:a,children:o,className:s,style:l,compact:c,title:u,desc:d}=e,h=YM(e,HM),m=dn(h);return c?f.createElement(f.Fragment,null,f.createElement(di,{width:n,height:r}),f.createElement(qm,{otherAttributes:m,title:u,desc:d},o)):f.createElement(FM,{className:s,style:l,width:n,height:r,responsive:a??!1,onClick:e.onClick,onMouseLeave:e.onMouseLeave,onMouseEnter:e.onMouseEnter,onMouseMove:e.onMouseMove,onMouseDown:e.onMouseDown,onMouseUp:e.onMouseUp,onContextMenu:e.onContextMenu,onDoubleClick:e.onDoubleClick,onTouchStart:e.onTouchStart,onTouchMove:e.onTouchMove,onTouchEnd:e.onTouchEnd},f.createElement(qm,{otherAttributes:m,title:u,desc:d,ref:t},f.createElement(U5,null,o)))});function kl(){return kl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},kl.apply(null,arguments)}var qM={top:5,right:5,bottom:5,left:5},UM={accessibilityLayer:!0,barCategoryGap:"10%",barGap:4,layout:"horizontal",margin:qM,responsive:!1,reverseStackOrder:!1,stackOffset:"none",syncMethod:"index"},KM=f.forwardRef(function(t,n){var r,a=pt(t.categoricalChartProps,UM),{chartName:o,defaultTooltipEventType:s,validateTooltipEventTypes:l,tooltipPayloadSearcher:c,categoricalChartProps:u}=t,d={chartName:o,defaultTooltipEventType:s,validateTooltipEventTypes:l,tooltipPayloadSearcher:c,eventEmitter:void 0};return f.createElement(wM,{preloadedState:{options:d},reduxStoreName:(r=u.id)!==null&&r!==void 0?r:o},f.createElement(R5,{chartData:u.data}),f.createElement(kM,{layout:a.layout,margin:a.margin}),f.createElement(TM,{baseValue:a.baseValue,accessibilityLayer:a.accessibilityLayer,barCategoryGap:a.barCategoryGap,maxBarSize:a.maxBarSize,stackOffset:a.stackOffset,barGap:a.barGap,barSize:a.barSize,syncId:a.syncId,syncMethod:a.syncMethod,className:a.className,reverseStackOrder:a.reverseStackOrder}),f.createElement(GM,kl({},a,{ref:n})))}),VM=["axis","item"],JM=f.forwardRef((e,t)=>f.createElement(KM,{chartName:"BarChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:VM,tooltipPayloadSearcher:rP,categoricalChartProps:e,ref:t}));const ZM=()=>{const[e,t]=f.useState([]),[n,r]=f.useState(!0),[a,o]=f.useState(null),[s,l]=f.useState(new Date),[c,u]=f.useState(!1),[d,h]=f.useState(!1),[m,p]=f.useState(1),[g,b]=f.useState(null),y="Transactions Raw Data",v="A:T",x="Calculations",k="H14",I=f.useCallback(P=>{if(!P)return"$0.00";if(P.includes("$"))return P;const L=P.replace(/[,$]/g,""),B=parseFloat(L);return isNaN(B)?P:B<1e-5?`${B.toFixed(8)}`:B<.001?`${B.toFixed(5)}`:B<1?`${B.toFixed(4)}`:B<100?`${B.toFixed(2)}`:`${B.toLocaleString()}`},[]),w=f.useCallback(P=>{if(!P)return"0";const L=P.replace(/[,$]/g,""),B=parseFloat(L);return isNaN(B)?P:B>=1e6?`${(B/1e6).toFixed(1)}M`:B>=1e3?`${(B/1e3).toFixed(1)}K`:B<1?B.toFixed(3):B.toLocaleString()},[]),T=f.useCallback(P=>{if(!P)return"Unknown";if(P.toLowerCase().includes("today"))return P;try{const L=new Date(P);if(!isNaN(L.getTime())){const B=new Date;return L.toDateString()===B.toDateString()?`Today ${L.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}`:L.toLocaleDateString()+" "+L.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}}catch{}return P},[]),j=f.useCallback(P=>P&&P.toLowerCase().includes("profit goal reached")?"profit_goal_reached":"completed",[]),E=f.useCallback(P=>!P||P.length===0?[]:P.map((L,B)=>{var gu;if(B===0&&((gu=L[0])==null?void 0:gu.toLowerCase())==="coin")return null;const[H,A,W,U,C,Q,X]=L,je=L[19];if(!H||!Q)return null;const _e=parseFloat(Q.toString().replace(/[$,]/g,""))||0;let At=null;if(je){const Eb=je.toString().replace(/[%]/g,"").trim(),fu=parseFloat(Eb);isNaN(fu)||(At=fu)}return{id:`tx_${Date.now()}_${B}`,coin:(H==null?void 0:H.toString().trim())||"",action:(A==null?void 0:A.toString().trim())||"CLOSE",price:I((W==null?void 0:W.toString())||""),quantity:w((U==null?void 0:U.toString())||""),profit:_e,percentGain:At,timestamp:T((X==null?void 0:X.toString())||""),status:j((C==null?void 0:C.toString())||"")}}).filter(L=>L!==null&&L.coin.length>0&&L.profit!==void 0),[I,w,T,j]),O=f.useMemo(()=>{const P={};return e.forEach(L=>{const B=L.timestamp;let H="";if(B.toLowerCase().includes("today")){const A=new Date;H=`${A.toLocaleString("default",{month:"long"})} ${A.getFullYear()}`}else try{const A=new Date(B);if(!isNaN(A.getTime()))H=`${A.toLocaleString("default",{month:"long"})} ${A.getFullYear()}`;else{const W=B.match(/(\d+)\/(\d+)/);if(W){const U=parseInt(W[1]),C=new Date().getFullYear();H=`${new Date(C,U-1).toLocaleString("default",{month:"long"})} ${C}`}else H="Unknown"}}catch{H="Unknown"}P[H]||(P[H]=[]),P[H].push(L)}),P},[e]),$=f.useMemo(()=>Object.keys(O).filter(L=>L!=="Unknown").sort((L,B)=>{const H=new Date(L);return new Date(B).getTime()-H.getTime()}),[O]),N=f.useMemo(()=>{const P=$[m-1];return P?O[P]:[]},[O,$,m]),D=f.useMemo(()=>{const P=N.filter(W=>W.action==="CLOSE"),L=N.filter(W=>W.action==="OPEN"),B=P.reduce((W,U)=>W+U.profit,0),H=P.filter(W=>W.status==="profit_goal_reached").length,A=P.length>0?(P.length/P.length*100).toFixed(1):"100.0";return{totalProfit:`${B.toFixed(2)}`,closedTrades:P.length,openTrades:L.length,totalTrades:N.length,successRate:`${A}%`,profitGoals:H}},[N]),R=$.length,_=$[m-1]||"Unknown",F=P=>{P>=1&&P<=R&&p(P)},G=()=>{const L=[["Coin","Action","Price","Quantity","Profit","% Gain","Status","Timestamp"].join(",")];N.forEach(C=>{const Q=[C.coin,C.action,C.price.replace(/,/g,""),C.quantity.replace(/,/g,""),C.action==="CLOSE"?C.profit.toFixed(2):"0.00",C.action==="CLOSE"&&C.percentGain!==null?C.percentGain.toFixed(2)+"%":"",C.status==="profit_goal_reached"?"Profit Goal Reached":"Completed",`"${C.timestamp}"`];L.push(Q.join(","))});const B=L.join(`
`),H=new Blob([B],{type:"text/csv;charset=utf-8;"}),A=document.createElement("a"),W=URL.createObjectURL(H),U=`${_.replace(" ","_")}_Transactions.csv`;A.setAttribute("href",W),A.setAttribute("download",U),A.style.visibility="hidden",document.body.appendChild(A),A.click(),document.body.removeChild(A)},z=f.useCallback(()=>{const P=["","","","","","","","","","","",""],L=[["Coin","Action","Price","Quantity","Status","Profit","Timestamp",...P,"% Gain"],["SUI","CLOSE","$3.60","50.9","Profit Goal Reached","$7.34","Today 2:48 AM",...P,"4.01%"],["BONK","CLOSE","$0.00002","10.2M","Profit Goal Reached","$9.03","9/8 12:26 PM",...P,"4.43%"],["DOGE","CLOSE","$0.24","710","Completed","$5.16","9/8 9:19 AM",...P,"3.03%"],["BTC","CLOSE","$43,250.00","0.025","Profit Goal Reached","$12.45","9/7 11:45 PM",...P,"1.15%"],["ETH","CLOSE","$2,650.75","1.8","Completed","$8.92","9/7 6:33 PM",...P,"0.19%"],["ADA","OPEN","$0.45","2,450","Active Position","$0.00","9/7 2:15 PM",...P,""],["SOL","OPEN","$145.32","12.5","Active Position","$0.00","9/7 8:22 AM",...P,""],["MATIC","OPEN","$0.89","1,200","Active Position","$0.00","9/6 11:58 PM",...P,""],["LINK","CLOSE","$11.45","85.3","Completed","$9.87","9/6 7:41 PM",...P,"1.01%"],["DOT","CLOSE","$5.67","180.5","Completed","$7.12","9/6 3:29 PM",...P,"0.70%"]];return E(L)},[E]),Z=f.useCallback(async()=>{const P="1Q8I0kU3TinicEOZCgBjisRbktIOryaKnJ2GaBncxako",L="AIzaSyDNQznjzn8BijyHJWWOesvggVc31FFK-LA";try{const B=`https://sheets.googleapis.com/v4/spreadsheets/${P}/values/${x}!${k}?key=${L}`,H=await fetch(B);if(!H.ok){console.error("Failed to fetch Profits Protected"),b(null);return}const A=await H.json();if(A.values&&A.values[0]&&A.values[0][0]){const W=parseFloat(String(A.values[0][0]).replace(/[$,]/g,""));isNaN(W)||b(W)}}catch(B){console.error("Error fetching Profits Protected:",B),b(null)}},[x,k]),q=f.useCallback(async(P=!0)=>{try{P&&r(!0),o(null),h(!1);const L="1Q8I0kU3TinicEOZCgBjisRbktIOryaKnJ2GaBncxako",B="AIzaSyDNQznjzn8BijyHJWWOesvggVc31FFK-LA";if(L&&B){const A=`${L}_${y}_${v}`;let W=xn.get(A);if(W){t(W),l(new Date),h(!0),r(!1);return}const U=`https://sheets.googleapis.com/v4/spreadsheets/${L}/values/${y}!${v}?key=${B}`;try{const C=await fetch(U);if(!C.ok)throw new Error(`Google Sheets API error: ${C.status}`);const Q=await C.json();if(Q.values&&Q.values.length>0){const X=E(Q.values);xn.set(A,X),t(X),l(new Date),h(!1);return}else o("No data found. Using sample data.")}catch(C){console.error("API error:",C),o("Failed to load data.")}}await new Promise(A=>setTimeout(A,1e3));const H=z();t(H),l(new Date),h(!1)}catch(L){console.error("Error:",L),o("Error loading data."),t(z()),h(!1)}finally{r(!1)}},[y,v,E,z]);f.useEffect(()=>{q(),Z()},[q,Z]);const te=P=>({BTC:"text-orange-400",ETH:"text-blue-400",SUI:"text-purple-400",BONK:"text-yellow-400",DOGE:"text-yellow-300",SOL:"text-purple-500",MATIC:"text-indigo-400",ADA:"text-blue-500",LINK:"text-blue-600",DOT:"text-pink-400",AVAX:"text-red-400",UNI:"text-pink-500",ATOM:"text-purple-500",FTM:"text-blue-600",ALGO:"text-gray-400",XRP:"text-gray-300",LTC:"text-gray-500",BCH:"text-green-500",VET:"text-blue-700",THETA:"text-purple-600",HBAR:"text-gray-600",ICP:"text-orange-300",NEAR:"text-green-300",FLOW:"text-blue-800",MANA:"text-red-300"})[P]||"text-gray-400",he=P=>P>=10?"text-green-300":P>=7?"text-green-400":"text-green-500",Ie=P=>P==="CLOSE"?"bg-green-500/20 text-green-300":"bg-blue-500/20 text-blue-300",ze=()=>a?{text:"SAMPLE",color:"text-gray-300"}:d?{text:"CACHED",color:"text-blue-300"}:{text:"LIVE",color:"text-green-300"};if(n&&e.length===0)return i.jsx("div",{className:"bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/10 p-6 mb-8",children:i.jsxs("div",{className:"flex items-center justify-center py-12",children:[i.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-green-400"}),i.jsx("span",{className:"ml-3 text-gray-300",children:"Loading..."})]})});const fe=ze();return i.jsxs("div",{className:"bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/10 p-4 md:p-6 mb-8 overflow-hidden",children:[i.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4",children:[i.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[i.jsx("div",{className:"w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 p-2 md:p-3 shadow-lg shadow-green-500/40 flex-shrink-0",children:i.jsx(Ov,{className:"w-full h-full text-white"})}),i.jsxs("div",{className:"min-w-0",children:[i.jsx("h3",{className:"text-lg md:text-xl lg:text-2xl font-bold text-white truncate",children:"TRADING SCOREBOARD"}),i.jsx("p",{className:"text-xs md:text-sm text-gray-400 truncate",children:_||new Date().toLocaleString("default",{month:"long",year:"numeric"})})]})]}),i.jsxs("div",{className:"flex items-center gap-3 flex-shrink-0",children:[i.jsx("button",{onClick:()=>u(!c),className:"md:hidden flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full px-3 py-2 border border-white/20 transition-all",children:c?i.jsxs(i.Fragment,{children:[i.jsx(Rv,{className:"w-4 h-4 text-gray-300"}),i.jsx("span",{className:"text-sm text-gray-300",children:"Hide"})]}):i.jsxs(i.Fragment,{children:[i.jsx(lp,{className:"w-4 h-4 text-gray-300"}),i.jsx("span",{className:"text-sm text-gray-300",children:"Show"})]})}),i.jsxs("div",{className:"flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-full px-4 py-2 border border-green-400/30",children:[i.jsx("div",{className:`w-2.5 h-2.5 rounded-full ${d?"bg-blue-400":"bg-green-400"} animate-pulse`}),i.jsx("span",{className:`text-sm font-semibold ${fe.color} whitespace-nowrap`,children:fe.text})]}),i.jsxs("button",{onClick:G,className:"flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 backdrop-blur-sm rounded-full px-4 py-2 border border-blue-400/30 hover:border-blue-400/50 transition-all shadow-lg",title:`Download ${_} CSV`,children:[i.jsx(Bv,{className:"w-4 h-4 text-blue-300"}),i.jsx("span",{className:"hidden sm:inline text-sm text-blue-300 font-semibold whitespace-nowrap",children:"Download CSV"}),i.jsx("span",{className:"sm:hidden text-sm text-blue-300 font-semibold",children:"CSV"})]})]})]}),a&&i.jsx("div",{className:"bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3 mb-4",children:i.jsx("p",{className:"text-yellow-400 text-sm break-words",children:a})}),R>1&&i.jsxs("div",{className:"flex items-center justify-center gap-2 mb-6 px-2",children:[i.jsx("button",{onClick:()=>F(m-1),disabled:m===1,className:"p-2 rounded-lg bg-white/8 hover:bg-white/12 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex-shrink-0",children:i.jsx(ju,{className:"w-5 h-5"})}),i.jsx("div",{className:"flex gap-1 items-center overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent max-w-full px-1",children:Array.from({length:Math.min(8,R)},(P,L)=>{let B;R<=8||m<=4?B=L+1:m>=R-3?B=R-7+L:B=m-3+L;const H=$[B-1];if(!H)return null;const[A,W]=H.split(" "),U=A.substring(0,3),C=W?W.substring(2):"",Q=`${U} ${C}`;return i.jsx("button",{onClick:()=>F(B),className:`px-3 py-1 rounded-lg text-xs font-medium transition-all whitespace-nowrap flex-shrink-0 ${m===B?"bg-blue-500 text-white shadow-lg":"bg-white/8 hover:bg-white/12 text-gray-300"}`,title:H,children:Q},B)})}),i.jsx("button",{onClick:()=>F(m+1),disabled:m===R,className:"p-2 rounded-lg bg-white/8 hover:bg-white/12 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex-shrink-0",children:i.jsx(Au,{className:"w-5 h-5"})})]}),i.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-6",children:[i.jsxs("div",{className:"group relative bg-white/8 backdrop-blur-sm rounded-lg p-2 border border-white/20 hover:border-white/30 transition-all text-center",children:[i.jsx("div",{className:"text-sm lg:text-base font-bold text-green-300 truncate",children:D.totalProfit}),i.jsx("div",{className:"text-[10px] lg:text-xs text-gray-400",children:"Total Profit"})]}),i.jsxs("div",{className:"group relative bg-white/8 backdrop-blur-sm rounded-lg p-2 border border-white/20 hover:border-white/30 transition-all text-center",children:[i.jsx("div",{className:"text-sm lg:text-base font-bold text-green-400",children:D.closedTrades}),i.jsx("div",{className:"text-[10px] lg:text-xs text-gray-400",children:"Closed"})]}),i.jsxs("div",{className:"group relative bg-white/8 backdrop-blur-sm rounded-lg p-2 border border-white/20 hover:border-white/30 transition-all text-center",children:[i.jsx("div",{className:"text-sm lg:text-base font-bold text-blue-300",children:D.openTrades}),i.jsx("div",{className:"text-[10px] lg:text-xs text-gray-400",children:"Open"})]}),i.jsxs("div",{className:"group relative bg-white/8 backdrop-blur-sm rounded-lg p-2 border border-white/20 hover:border-white/30 transition-all text-center",children:[i.jsx("div",{className:"text-sm lg:text-base font-bold text-purple-300",children:D.totalTrades}),i.jsx("div",{className:"text-[10px] lg:text-xs text-gray-400",children:"Total"})]}),i.jsxs("div",{className:"group relative bg-white/8 backdrop-blur-sm rounded-lg p-2 border border-white/20 hover:border-white/30 transition-all text-center",children:[i.jsx("div",{className:"text-sm lg:text-base font-bold text-orange-300",children:D.successRate}),i.jsx("div",{className:"text-[10px] lg:text-xs text-gray-400",children:"Success"})]}),i.jsxs("a",{href:"/blog/the-50-50-strategy",className:"group relative bg-white/8 backdrop-blur-sm rounded-lg p-2 border border-white/20 hover:border-emerald-400/50 transition-all text-center cursor-pointer",children:[i.jsxs("div",{className:"text-sm lg:text-base font-bold text-emerald-300 truncate flex items-center justify-center gap-1",children:[i.jsx(un,{className:"w-3 h-3 text-emerald-400 flex-shrink-0"}),i.jsxs("span",{children:["50% → ",g!==null?`$${g.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:0})}`:"..."]})]}),i.jsx("div",{className:"text-[10px] lg:text-xs text-emerald-400/80",children:"Profits Saved"}),i.jsxs("div",{className:"absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 border border-white/20 rounded-lg text-xs text-gray-200 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10",children:["Half of all profits are automatically saved. Learn more →",i.jsx("div",{className:"absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"})]})]})]}),i.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-1 sm:gap-2 mb-4 px-2",children:[i.jsx(Qr,{className:"w-3 h-3 md:w-4 md:h-4 text-gray-400 flex-shrink-0"}),i.jsxs("span",{className:"text-xs text-gray-400 text-center break-words",children:["Last updated: ",s.toLocaleTimeString(),d&&i.jsx("span",{className:"text-blue-400 ml-1 sm:ml-2",children:"• Cached"}),!d&&fe.text==="LIVE"&&i.jsx("span",{className:"text-green-400 ml-1 sm:ml-2",children:"• Fresh"})]})]}),i.jsxs("div",{className:`bg-black/20 rounded-xl border border-white/5 overflow-hidden ${c?"":"hidden md:block"}`,children:[i.jsx("div",{className:"block md:hidden",children:i.jsx("div",{className:"space-y-2 p-2 max-h-96 overflow-y-auto overflow-x-hidden",children:N.length===0?i.jsxs("div",{className:"p-8 text-center text-gray-400",children:["No transactions for ",_]}):N.map(P=>i.jsxs("div",{className:"bg-white/5 rounded-lg p-3 border-t border-r border-b border-white/10 border-l-4 max-w-full",style:P.action==="OPEN"?{borderLeftColor:"#60a5fa"}:{borderLeftColor:"#4ade80"},children:[i.jsxs("div",{className:"flex items-center justify-between mb-2 gap-2 min-w-0",children:[i.jsxs("div",{className:"flex items-center gap-2 min-w-0 flex-1",children:[i.jsx("span",{className:`font-bold text-sm ${te(P.coin)} flex-shrink-0`,children:P.coin}),i.jsx("span",{className:`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${Ie(P.action)} flex-shrink-0`,children:P.action})]}),i.jsx("div",{className:"text-xs text-gray-400 flex-shrink-0 truncate max-w-[120px]",children:P.timestamp})]}),i.jsxs("div",{className:"flex items-center justify-between mb-2 gap-2",children:[i.jsxs("div",{className:"text-xs text-gray-300 truncate flex-1 min-w-0",children:[i.jsx("span",{className:"text-gray-500",children:"Price:"})," ",i.jsx("span",{className:"font-mono",children:P.price})]}),i.jsxs("div",{className:"text-xs text-gray-300 truncate flex-1 min-w-0 text-right",children:[i.jsx("span",{className:"text-gray-500",children:"Qty:"})," ",i.jsx("span",{className:"font-mono",children:P.quantity})]})]}),i.jsxs("div",{className:"flex items-center justify-between gap-2",children:[i.jsx("div",{className:"flex items-center gap-3 flex-shrink-0",children:P.action==="CLOSE"?i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:`font-bold text-sm font-mono ${he(P.profit)}`,children:["+$",P.profit.toFixed(2)]}),P.percentGain!==null&&i.jsxs("div",{className:"font-bold text-sm font-mono text-green-400",children:["(",P.percentGain.toFixed(2),"%)"]})]}):i.jsx("div",{className:"text-gray-500 text-sm",children:"Active"})}),i.jsxs("div",{className:"flex items-center gap-1 flex-shrink-0",children:[P.status==="profit_goal_reached"&&i.jsxs(i.Fragment,{children:[i.jsx(nr,{className:"w-3 h-3 text-yellow-400"}),i.jsx("span",{className:"text-xs text-yellow-400",children:"Goal"})]}),P.action==="OPEN"&&i.jsxs(i.Fragment,{children:[i.jsx(Ye,{className:"w-3 h-3 text-blue-400"}),i.jsx("span",{className:"text-xs text-blue-400",children:"Active"})]})]})]})]},P.id))})}),i.jsxs("div",{className:"hidden md:block",children:[i.jsx("div",{className:"bg-white/5 px-4 py-3 border-b border-white/5",children:i.jsxs("div",{className:"grid grid-cols-12 gap-2 text-xs font-semibold text-gray-300 uppercase tracking-wider",children:[i.jsx("div",{className:"col-span-1",children:"Coin"}),i.jsx("div",{className:"col-span-2",children:"Action"}),i.jsx("div",{className:"col-span-2",children:"Price"}),i.jsx("div",{className:"col-span-2",children:"Quantity"}),i.jsx("div",{className:"col-span-2",children:"Profit"}),i.jsx("div",{className:"col-span-1",children:"% Gain"}),i.jsx("div",{className:"col-span-2",children:"Time"})]})}),i.jsx("div",{className:"max-h-96 overflow-y-auto",children:N.length===0?i.jsxs("div",{className:"p-8 text-center text-gray-400",children:["No transactions for ",_]}):N.map((P,L)=>i.jsx("div",{className:`px-4 py-3 border-b border-white/5 hover:bg-white/5 ${L%2===0?"bg-white/2":""} border-l-4`,style:P.action==="OPEN"?{borderLeftColor:"#60a5fa"}:{borderLeftColor:"#4ade80"},children:i.jsxs("div",{className:"grid grid-cols-12 gap-2 items-center text-sm",children:[i.jsx("div",{className:"col-span-1",children:i.jsx("div",{className:`font-bold ${te(P.coin)}`,children:P.coin})}),i.jsx("div",{className:"col-span-2",children:i.jsx("span",{className:`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${Ie(P.action)}`,children:P.action})}),i.jsx("div",{className:"col-span-2",children:i.jsx("div",{className:"text-gray-200 font-mono text-xs",children:P.price})}),i.jsx("div",{className:"col-span-2",children:i.jsx("div",{className:"text-gray-300 font-mono text-xs",children:P.quantity})}),i.jsxs("div",{className:"col-span-2",children:[P.action==="CLOSE"?i.jsxs("div",{className:`font-bold font-mono ${he(P.profit)}`,children:["+$",P.profit.toFixed(2)]}):i.jsx("div",{className:"text-gray-500 font-mono text-xs",children:"-"}),P.status==="profit_goal_reached"&&i.jsxs("div",{className:"text-xs text-yellow-400 flex items-center gap-1 mt-1",children:[i.jsx(nr,{className:"w-3 h-3"}),i.jsx("span",{children:"Goal"})]}),P.action==="OPEN"&&i.jsxs("div",{className:"text-xs text-blue-400 flex items-center gap-1 mt-1",children:[i.jsx(Ye,{className:"w-3 h-3"}),i.jsx("span",{children:"Active"})]})]}),i.jsx("div",{className:"col-span-1",children:P.action==="CLOSE"&&P.percentGain!==null?i.jsxs("div",{className:"font-bold font-mono text-green-400 text-xs",children:[P.percentGain.toFixed(2),"%"]}):i.jsx("div",{className:"text-gray-500 font-mono text-xs",children:"-"})}),i.jsx("div",{className:"col-span-2",children:i.jsx("div",{className:"text-gray-400 text-xs",children:P.timestamp})})]})},P.id))})]})]}),R>1&&i.jsxs("div",{className:"flex items-center justify-center gap-2 mt-6 px-2",children:[i.jsx("button",{onClick:()=>F(m-1),disabled:m===1,className:"p-2 rounded-lg bg-white/8 hover:bg-white/12 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex-shrink-0",children:i.jsx(ju,{className:"w-5 h-5"})}),i.jsx("div",{className:"flex gap-1 items-center overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent max-w-full px-1",children:Array.from({length:Math.min(8,R)},(P,L)=>{let B;R<=8||m<=4?B=L+1:m>=R-3?B=R-7+L:B=m-3+L;const H=$[B-1];if(!H)return null;const[A,W]=H.split(" "),U=A.substring(0,3),C=W?W.substring(2):"",Q=`${U} ${C}`;return i.jsx("button",{onClick:()=>F(B),className:`px-3 py-1 rounded-lg text-xs font-medium transition-all whitespace-nowrap flex-shrink-0 ${m===B?"bg-blue-500 text-white shadow-lg":"bg-white/8 hover:bg-white/12 text-gray-300"}`,title:H,children:Q},B)})}),i.jsx("button",{onClick:()=>F(m+1),disabled:m===R,className:"p-2 rounded-lg bg-white/8 hover:bg-white/12 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex-shrink-0",children:i.jsx(Au,{className:"w-5 h-5"})})]}),i.jsxs("div",{className:"mt-4 text-center px-2",children:[i.jsxs("p",{className:"text-xs text-gray-500 break-words",children:["✅ Smart Cache enabled • Live data with intelligent caching •"," ",i.jsx("span",{className:"text-green-400 font-medium",children:"Shows both Open & Closed positions"})]}),!c&&i.jsx("p",{className:"text-xs text-gray-500 mt-1 md:hidden",children:'Tap "Show" to view history'})]})]})},XM=({tradingStats:e,isLoading:t=!1,error:n=null,refreshStats:r=()=>console.log("Refresh not implemented"),cacheInfo:a={isFresh:!1,isRateLimited:!1,timeUntilNextRefresh:0}})=>{var x,k,I,w,T,j,E;const o=Ho(),s=O=>{if(O<=0)return"Available now";const $=Math.floor(O/(1e3*60*60)),N=Math.floor(O%(1e3*60*60)/(1e3*60));return $>0?`${$}h ${N}m`:`${N}m`};if(t)return i.jsx("section",{className:"py-16 px-4 relative overflow-hidden",children:i.jsx("div",{className:"relative max-w-6xl mx-auto text-center",children:i.jsxs("div",{className:"flex items-center justify-center py-12",children:[i.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-green-400 mr-3"}),i.jsx("span",{className:"text-gray-300 text-lg",children:"Loading live trading data..."})]})})});const l=n&&n.trim()!=="",c=e&&typeof e=="object"&&e.totalProfit!==void 0;if(l||!c)return i.jsxs("section",{className:"py-16 px-4 relative overflow-hidden",children:[i.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-red-900/20 to-orange-900/20"}),i.jsxs("div",{className:"relative max-w-6xl mx-auto text-center",children:[i.jsxs("div",{className:"bg-red-500/10 border border-red-500/20 rounded-2xl p-8 mb-8",children:[i.jsx(Ev,{className:"w-12 h-12 text-red-400 mx-auto mb-4"}),i.jsx("h3",{className:"text-xl font-bold text-white mb-4",children:"Unable to Load Live Trading Data"}),i.jsx("p",{className:"text-red-300 mb-6",children:l?n:"Trading data is not available. This could be due to API configuration issues or data loading problems."}),i.jsxs("button",{onClick:r,className:"inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300",children:[i.jsx(Gv,{className:"w-4 h-4"}),"Retry Connection"]})]}),i.jsxs("div",{className:"bg-gray-900/50 rounded-lg p-4 text-left max-w-2xl mx-auto",children:[i.jsx("h4",{className:"text-white font-semibold mb-2",children:"Debug Information:"}),i.jsxs("div",{className:"text-gray-300 text-sm space-y-1",children:[i.jsxs("p",{children:["• Sheet ID:"," ","✅ Configured"]}),i.jsxs("p",{children:["• API Key:"," ","✅ Configured"]}),i.jsx("p",{children:'• Expected Tab: "Calculations"'}),i.jsx("p",{children:"• Expected Range: A:G"}),i.jsxs("p",{children:["• Error: ",n||"No specific error message"]}),i.jsxs("p",{children:["• Cache Status: ",a!=null&&a.isFresh?"Fresh":"Stale"]}),i.jsxs("p",{children:["• Rate Limited: ",a!=null&&a.isRateLimited?"Yes":"No"]}),i.jsxs("p",{children:["• Has Trading Stats: ",c?"Yes":"No"]}),i.jsxs("p",{children:["• Trading Stats Type: ",typeof e]}),i.jsxs("p",{children:["• Trading Stats Value:"," ",e===void 0?"undefined":e===null?"null":"has value"]})]})]})]})]});const u=e,d=((x=u.dailyAvg)==null?void 0:x.toFixed(2))||"0.00",h=[],p=[...u.monthlyData||[],...h],g=p.find(O=>O.profit===u.bestMonthProfit)||p[0],b=O=>({Jan:"January",Feb:"February",Mar:"March",Apr:"April",May:"May",Jun:"June",Jul:"July",Aug:"August",Sep:"September",Oct:"October",Nov:"November",Dec:"December"})[O]||O,y=()=>{Wo("start_trading_save_1000","trading_results_section"),Lo("https://gobabytrade.com/432706BE","Start Trading Save $1000 Trading Results")},v=O=>{const $=Number(O);return isNaN($)?"0.00":$.toFixed(2)};return i.jsx("section",{id:"trading-results",className:"py-16 px-4 relative overflow-hidden",children:i.jsxs("div",{className:"relative max-w-6xl mx-auto",children:[i.jsxs("div",{className:"text-center mb-12",children:[i.jsxs("div",{className:"inline-flex items-center gap-2 bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 mb-6",children:[i.jsx(op,{className:"w-4 h-4 text-green-400"}),i.jsx("span",{className:"text-green-300 font-medium",children:u.isLiveData?"LIVE DATA":"REAL RESULTS"}),u.isLiveData&&i.jsx("div",{className:"w-2 h-2 bg-green-400 rounded-full animate-pulse"})]}),i.jsx("h2",{className:"text-3xl md:text-5xl font-bold text-white mb-4",children:"My Trading Results"}),i.jsxs("div",{className:"mb-6",children:[i.jsx("p",{className:"text-xl text-purple-200 font-medium mb-4",children:"Don't just take my word for it - here are my actual trading results:"}),i.jsx("div",{children:i.jsx(Ye,{className:"w-8 h-8 text-green-300 mx-auto animate-bounce"})})]}),i.jsxs("p",{className:"text-xl text-gray-300 max-w-3xl mx-auto",children:["These are my actual profits from using my robotic trader.",i.jsxs("span",{className:"text-green-400 font-semibold",children:[" ","Started January 8, 2025"]})," ","-"," ",u.isLiveData?"Live Updates!":"Stats Updated Monthly!"]}),u.isLiveData&&i.jsx("div",{className:"mt-6 flex justify-center",children:i.jsxs("div",{className:"bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-lg p-4 border border-green-400/30 shadow-lg shadow-green-500/10",children:[i.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[i.jsx("div",{className:"w-3 h-3 bg-green-400 rounded-full animate-pulse"}),i.jsxs("div",{className:"text-center",children:[i.jsx("p",{className:"text-green-300 font-semibold text-sm",children:"Live Data Connected"}),i.jsxs("p",{className:"text-gray-300 text-xs",children:["Last updated:"," ",new Date(u.lastUpdated).toLocaleString()]})]})]}),i.jsxs("div",{className:"flex items-center justify-center gap-4 text-xs text-gray-400 border-t border-green-400/20 pt-2",children:[i.jsxs("div",{className:"flex items-center gap-1",children:[i.jsx(Dv,{className:"w-3 h-3"}),i.jsxs("span",{children:["Cache: ",a.isFresh?"Fresh":"Stale"]})]}),a.isRateLimited&&i.jsxs("div",{className:"flex items-center gap-1",children:[i.jsx(Qr,{className:"w-3 h-3"}),i.jsxs("span",{children:["Next update:"," ",s(a.timeUntilNextRefresh)]})]}),i.jsxs("div",{className:"flex items-center gap-1",children:[i.jsx(Jv,{className:"w-3 h-3"}),i.jsx("span",{children:"Auto-updating"})]})]})]})})]}),i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",children:[i.jsxs("div",{className:"group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-green-500/15",children:[i.jsx("div",{className:"absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg shadow-purple-500/40 animate-pulse z-10",children:"🎉 1 YEAR!"}),i.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"}),i.jsx("div",{className:"relative w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/40",children:i.jsx(Bn,{className:"w-full h-full text-white"})}),i.jsxs("div",{className:"relative text-center",children:[i.jsxs("div",{className:"text-3xl font-bold text-green-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-300 group-hover:to-emerald-300 group-hover:bg-clip-text transition-all duration-300 font-mono",children:["$",((k=u.totalProfit)==null?void 0:k.toFixed(2))||"0.00"]})," ",i.jsx("div",{className:"text-gray-200 font-medium group-hover:text-white transition-colors duration-300",children:"Total Profits"}),i.jsx("div",{className:"text-green-300 text-sm mt-1",children:o})]}),i.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"})]}),i.jsxs("div",{className:"group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-orange-500/15",children:[i.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"}),i.jsx("div",{className:"relative w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/40",children:i.jsx(nr,{className:"w-full h-full text-white"})}),i.jsxs("div",{className:"relative text-center",children:[i.jsx("div",{className:"text-3xl font-bold text-orange-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-300 group-hover:to-amber-300 group-hover:bg-clip-text transition-all duration-300 font-mono",children:((I=u.totalTrades)==null?void 0:I.toLocaleString())||"0"}),i.jsx("div",{className:"text-gray-200 font-medium group-hover:text-white transition-colors duration-300",children:"Closed Trades"}),i.jsx("div",{className:"text-orange-300 text-sm mt-1",children:"Consistent & Automated"})]}),i.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"})]}),i.jsxs("div",{className:"group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-purple-500/15",children:[i.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"}),i.jsx("div",{className:"relative w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/40",children:i.jsx(Br,{className:"w-full h-full text-white"})}),i.jsxs("div",{className:"relative text-center",children:[i.jsxs("div",{className:"text-3xl font-bold text-purple-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 group-hover:bg-clip-text transition-all duration-300 font-mono",children:["$",((w=u.avgProfitPerTrade)==null?void 0:w.toFixed(2))||"0.00"]}),i.jsx("div",{className:"text-gray-200 font-medium group-hover:text-white transition-colors duration-300",children:"Avg Per Trade"}),i.jsx("div",{className:"text-purple-300 text-sm mt-1",children:"Steady Gains"})]}),i.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"})]})]}),i.jsx(ZM,{}),i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12",children:[i.jsxs("div",{className:"group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-emerald-500/15",children:[i.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"}),i.jsx("div",{className:"relative w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-emerald-500/40",children:i.jsx(Al,{className:"w-full h-full text-white"})}),i.jsxs("div",{className:"relative text-center",children:[i.jsxs("div",{className:"text-2xl font-bold text-emerald-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-300 group-hover:to-teal-300 group-hover:bg-clip-text transition-all duration-300 font-mono",children:["$",((T=u.monthlyAverage)==null?void 0:T.toFixed(2))||"0.00"]}),i.jsx("div",{className:"text-gray-200 font-medium group-hover:text-white transition-colors duration-300",children:"Monthly Average"}),i.jsx("div",{className:"text-emerald-300 text-sm mt-1",children:"Consistent Performance"})]}),i.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"})]}),i.jsxs("div",{className:"group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-indigo-500/15",children:[i.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"}),i.jsx("div",{className:"relative w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-indigo-500/40",children:i.jsx(Ye,{className:"w-full h-full text-white"})}),i.jsxs("div",{className:"relative text-center",children:[i.jsxs("div",{className:"text-2xl font-bold text-indigo-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-300 group-hover:to-purple-300 group-hover:bg-clip-text transition-all duration-300 font-mono",children:["$",v(d)]}),i.jsx("div",{className:"text-gray-200 font-medium group-hover:text-white transition-colors duration-300",children:"Daily Average"}),i.jsx("div",{className:"text-indigo-300 text-sm mt-1",children:"Steady Growth"})]}),i.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"})]}),i.jsxs("div",{className:"group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-amber-500/15",children:[i.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"}),i.jsx("div",{className:"relative w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-amber-500/40",children:i.jsx(Br,{className:"w-full h-full text-white"})}),i.jsxs("div",{className:"relative text-center",children:[i.jsxs("div",{className:"text-2xl font-bold text-amber-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-amber-300 group-hover:to-orange-300 group-hover:bg-clip-text transition-all duration-300 font-mono",children:["$",((j=u.bestMonthProfit)==null?void 0:j.toFixed(2))||"0.00"]}),i.jsx("div",{className:"text-gray-200 font-medium group-hover:text-white transition-colors duration-300",children:"Best Month"}),i.jsx("div",{className:"text-amber-300 text-sm mt-1",children:g?`${b(g.month)} ${g.year}`:"N/A"})]}),i.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"})]}),i.jsxs("div",{className:"group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-blue-500/15",children:[i.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"}),i.jsx("div",{className:"relative w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/40",children:i.jsx(zv,{className:"w-full h-full text-white"})}),i.jsxs("div",{className:"relative text-center",children:[i.jsxs("div",{className:"text-2xl font-bold text-cyan-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-cyan-300 group-hover:bg-clip-text transition-all duration-300 font-mono",children:[((E=u.avgPercentGain)==null?void 0:E.toFixed(2))||"0.00","%"]}),i.jsx("div",{className:"text-gray-200 font-medium group-hover:text-white transition-colors duration-300",children:"Avg % Gain"}),i.jsx("div",{className:"text-cyan-300 text-sm mt-1",children:"Per Trade"})]}),i.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"})]})]}),i.jsx("div",{className:"text-center mb-8",children:i.jsx("p",{className:"text-sm text-green-300 bg-green-900/20 backdrop-blur-sm rounded-lg px-4 py-2 inline-block border border-green-500/20",children:"✓ All profits shown are net amounts after trading fees and rebates"})}),p.length>0&&(()=>{var R;const O=p.reduce((_,F)=>{const G=F.year;return _[G]||(_[G]=[]),_[G].push(F),_},{}),$=Object.keys(O).map(Number).sort((_,F)=>F-_),N=p.reduce((_,F)=>F.profit>_.profit?F:_,p[0]),D=_=>_.month===N.month&&_.year===N.year;return i.jsxs(i.Fragment,{children:[$.map(_=>{const F=O[_],G=F.reduce((q,te)=>q+te.profit,0),z=F.reduce((q,te)=>q+te.trades,0),Z=F.some(D);return i.jsxs("div",{className:"bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-4 md:p-8 mb-6 relative",children:[_===$[0]&&i.jsx("div",{className:"absolute top-4 right-4 opacity-20 pointer-events-none hidden md:block",children:i.jsx("div",{className:"w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 flex items-center justify-center animate-pulse shadow-lg shadow-purple-500/20",children:i.jsx("img",{src:"/robot-trading.png",alt:"Robot Trading",className:"w-12 h-12 object-contain filter brightness-110"})})}),i.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 md:mb-6 gap-2",children:[i.jsxs("h3",{className:"text-xl md:text-2xl font-bold text-white flex items-center gap-3",children:[i.jsxs("span",{children:[_," Performance"]}),i.jsxs("span",{className:"text-sm text-gray-400 font-normal",children:["(",F.length," ",F.length===1?"month":"months",")"]})]}),i.jsxs("div",{className:"text-sm font-semibold text-emerald-300",children:["$",G.toFixed(2)," • ",z," trades"]})]}),(()=>{const q=Math.max(...F.map(P=>P.profit)),te=F.map(P=>{const L=D(P),B=P.profit===q;return{name:P.month,profit:Math.round(P.profit),trades:P.trades,isBest:L,isYearHighest:B,fill:L?"#f43f5e":B?"#eab308":"#10b981"}}),he=({active:P,payload:L})=>{if(P&&L&&L.length){const B=L[0].payload;return i.jsxs("div",{style:{backgroundColor:"#1e1b4b",border:"2px solid #7c3aed"},className:"rounded-lg p-4 shadow-2xl",children:[i.jsx("p",{className:"text-white font-bold text-base",children:b(B.name)}),i.jsxs("p",{className:"text-green-400 font-mono font-bold text-xl",children:["$",B.profit.toLocaleString()]}),i.jsxs("p",{className:"text-white text-sm",children:[B.trades," trades"]}),B.isBest&&i.jsx("p",{className:"text-yellow-300 text-sm font-bold mt-1",children:"🏆 Best Month Ever!"})]})}return null},Ie=P=>{const{x:L,y:B,width:H,index:A}=P,W=te[A];return W&&W.isBest?i.jsx("text",{x:L+H/2,y:B-25,fill:"#22d3ee",textAnchor:"middle",fontSize:12,fontWeight:"bold",children:"🏆 BEST"}):null},ze=F.length<=3?"50%":F.length<=6?"75%":"100%",fe=P=>{const{x:L,y:B,payload:H}=P,A=te.find(W=>W.name===H.value);return i.jsxs("g",{transform:`translate(${L},${B})`,children:[i.jsx("text",{x:0,y:0,dy:16,textAnchor:"middle",fill:"#9ca3af",fontSize:12,children:H.value}),i.jsx("text",{x:0,y:0,dy:32,textAnchor:"middle",fill:"#6b7280",fontSize:10,children:(A==null?void 0:A.trades)||0})]})};return i.jsxs("div",{className:"w-full",children:[i.jsxs("div",{className:"flex justify-center gap-4 md:gap-6 mb-4 text-xs md:text-sm",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("div",{className:"w-4 h-4 rounded",style:{background:"linear-gradient(to top, #059669, #34d399)"}}),i.jsx("span",{className:"text-gray-300",children:"Monthly"})]}),i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("div",{className:"w-4 h-4 rounded",style:{background:"linear-gradient(to top, #ea580c, #fb923c)"}}),i.jsx("span",{className:"text-gray-300",children:"Year's Best"})]}),i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("div",{className:"w-4 h-4 rounded",style:{background:"linear-gradient(to top, #0e7490, #06b6d4)"}}),i.jsx("span",{className:"text-gray-300",children:"All-Time Best"})]})]}),i.jsx("div",{className:"flex justify-center",style:{height:F.length>6?300:270},children:i.jsx("div",{style:{width:ze,height:"100%"},children:i.jsx(W1,{width:"100%",height:"100%",children:i.jsxs(JM,{data:te,margin:{top:40,right:20,left:20,bottom:25},barCategoryGap:"20%",children:[i.jsxs("defs",{children:[i.jsxs("linearGradient",{id:`gradient-green-${_}`,x1:"0",y1:"1",x2:"0",y2:"0",children:[i.jsx("stop",{offset:"0%",stopColor:"#059669"}),i.jsx("stop",{offset:"100%",stopColor:"#34d399"})]}),i.jsxs("linearGradient",{id:`gradient-orange-${_}`,x1:"0",y1:"1",x2:"0",y2:"0",children:[i.jsx("stop",{offset:"0%",stopColor:"#ea580c"}),i.jsx("stop",{offset:"100%",stopColor:"#fb923c"})]}),i.jsxs("linearGradient",{id:`gradient-cyan-${_}`,x1:"0",y1:"1",x2:"0",y2:"0",children:[i.jsx("stop",{offset:"0%",stopColor:"#0e7490"}),i.jsx("stop",{offset:"100%",stopColor:"#06b6d4"})]})]}),i.jsx(vb,{dataKey:"name",tick:i.jsx(fe,{}),axisLine:{stroke:"#374151"},tickLine:!1,interval:0}),i.jsx(wb,{hide:!0}),i.jsx(NP,{content:i.jsx(he,{}),cursor:{fill:"rgba(255,255,255,0.05)"}}),i.jsxs(yb,{dataKey:"profit",radius:[4,4,0,0],maxBarSize:45,minPointSize:3,children:[te.map((P,L)=>i.jsx(au,{fill:P.isBest?`url(#gradient-cyan-${_})`:P.isYearHighest?`url(#gradient-orange-${_})`:`url(#gradient-green-${_})`,style:{filter:P.isBest?"drop-shadow(0 0 12px rgba(34, 211, 238, 0.8))":P.isYearHighest?"drop-shadow(0 0 8px rgba(251, 146, 60, 0.7))":"none"}},`cell-${L}`)),i.jsx(er,{dataKey:"profit",position:"top",formatter:P=>`$${P}`,style:{fill:"#e5e7eb",fontSize:11,fontWeight:600}}),i.jsx(er,{content:Ie})]})]})})})})]})})(),Z&&i.jsx("div",{className:"text-center",children:i.jsxs("p",{className:"text-cyan-400 font-semibold text-sm md:text-base",children:["🏆 Best month ever: ",N?`${b(N.month)}`:"N/A"," ","with $",(N==null?void 0:N.profit.toFixed(2))||"0.00"]})})]},_)}),i.jsx("div",{className:"text-center mb-6",children:i.jsxs("p",{className:"text-emerald-300 font-semibold text-sm md:text-lg",children:["📈 ",u.totalTrades||0," total trades • $",((R=u.avgProfitPerTrade)==null?void 0:R.toFixed(2))||"0.00"," avg profit/trade • Best month ever: ",N?`${b(N.month)} '${String(N.year).slice(-2)}`:"N/A"," ","with $",(N==null?void 0:N.profit.toFixed(2))||"0.00"]})}),i.jsx("div",{className:"text-center mb-8",children:i.jsxs("div",{className:"bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/30 shadow-lg shadow-purple-500/20",children:[i.jsx("h4",{className:"text-xl font-bold text-white mb-3",children:"Ready to Experience Autonomous Trading?"}),i.jsx("p",{className:"text-gray-200 mb-4 max-w-xl mx-auto",children:"GoBabyTrade is the same AI-enhanced system I use. Use my link to save $1,000!"}),i.jsxs("a",{href:"https://gobabytrade.com/432706BE",target:"_blank",rel:"noopener noreferrer",onClick:y,className:"inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30",children:["Start Trading – Save $1,000",i.jsx(Ye,{className:"w-4 h-4"})]})]})})]})})(),i.jsx("div",{className:"text-center mt-8",children:i.jsxs("p",{className:"text-sm text-gray-400 max-w-2xl mx-auto",children:["* These are my actual trading results from my personal robotic trader account. Started January 8, 2025.",u.isLiveData?" Results updated automatically.":" Results updated regularly.","Past performance does not guarantee future results."]})})]})})},vs=[{icon:Qr,title:"Set It & Forget It",description:"Monitors global markets 24/7, executing trades even while you sleep. Never miss profitable opportunities or stare at charts again.",color:"from-orange-500 to-amber-500",stats:"Always Active"},{icon:un,title:"Never Trades at a Loss",description:"Only sells when your position is profitable—never at a loss unless you choose otherwise. Protects investments while capitalizing on market swings.",color:"from-blue-500 to-cyan-500",stats:"0% Loss Trades"},{icon:Fo,title:"AI-Enhanced Autonomous Trading",description:"Analyzes market patterns and executes trades with AI precision, adapting to changing conditions in real-time. Never worry about charts or timing again.",color:"from-purple-500 to-pink-500",stats:"Unattended Trading"},{icon:Bn,title:"Your Funds Stay Safe",description:"Funds remain secure in your Kraken/Coinbase accounts. Trading-only API access means we can never withdraw or transfer your money.",color:"from-emerald-500 to-teal-500",stats:"Your Keys, Your Crypto"},{icon:Ye,title:"Takes What the Market Gives",description:"Capitalizes on market opportunities as they arise, taking profits when favorable and waiting patiently when not. Smart, patient trading.",color:"from-emerald-500 to-green-500",stats:"Market-Driven Results"},{icon:Br,title:"Lightning Fast Execution",description:"Executes trades in milliseconds, capitalizing on market movements before human traders can react. Speed gives you the competitive edge.",color:"from-yellow-500 to-orange-500",stats:"100ms Execution"},{icon:op,title:"Real-Time Analytics",description:"Simple position and profit reporting gives you clear visibility into performance and total profits across Coinbase and Kraken.",color:"from-indigo-500 to-purple-500",stats:"Live Tracking"},{icon:dp,title:"Start with Paper Trading",description:"Test the system risk-free with paper trading before going live. Build confidence and see performance without risking real money.",color:"from-pink-500 to-rose-500",stats:"Risk-Free Testing"}],QM=function(){const[e,t]=f.useState(new Array(vs.length).fill(!1));f.useEffect(()=>{const r=new IntersectionObserver(o=>{o.forEach(s=>{if(s.isIntersecting){const l=parseInt(s.target.getAttribute("data-card-index")||"0");t(c=>{const u=[...c];return u[l]=!0,u}),Ka("view","feature_card",vs[l].title,1)}})},{threshold:.1});return document.querySelectorAll("[data-card-index]").forEach(o=>r.observe(o)),()=>r.disconnect()},[]);const n=(r,a)=>{Ka("click","feature_card",`${r}_card_${a+1}`,1)};return i.jsx("section",{className:"py-10 px-4 relative",children:i.jsxs("div",{className:"max-w-7xl mx-auto",children:[i.jsxs("div",{className:"text-center mb-12",children:[i.jsxs("div",{className:"inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-400/40 mb-6 mt-4 shadow-lg shadow-purple-500/20",children:[i.jsx(Br,{className:"w-4 h-4 text-purple-300"}),i.jsx("span",{className:"text-purple-200 font-medium",children:"Powerful Features"})]}),i.jsxs("h2",{className:"text-4xl md:text-5xl font-bold text-white mb-6",children:["Why Choose This",i.jsx("span",{className:"block text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text",children:"Autonomous Trading Platform"})]}),i.jsx("p",{className:"text-xl text-gray-200 max-w-3xl mx-auto",children:"Advanced autonomous technology with comprehensive risk management on trusted exchanges like Coinbase and Kraken."})]}),i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12",children:[i.jsx("img",{src:"/graphics/homepage-features-01.webp",alt:"The Never-Sell-At-A-Loss Rule - How the system protects your capital",className:"w-full rounded-2xl shadow-xl shadow-blue-500/10 border border-white/10 hover:scale-[1.02] transition-transform duration-300"}),i.jsx("img",{src:"/graphics/homepage-features-02.webp",alt:"24/7 Trading - Markets never sleep, neither does your robot",className:"w-full rounded-2xl shadow-xl shadow-purple-500/10 border border-white/10 hover:scale-[1.02] transition-transform duration-300"})]}),i.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:vs.map((r,a)=>{const o=r.icon;return i.jsxs("div",{"data-card-index":a,onClick:()=>n(r.title,a),className:`group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl shadow-lg cursor-pointer ${e[a]?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,style:{transitionDelay:`${a*100}ms`,boxShadow:`0 8px 32px rgba(${a%2===0?"168, 85, 247":"236, 72, 153"}, 0.15)`},children:[i.jsx("div",{className:`absolute inset-0 bg-gradient-to-br ${r.color} opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300`}),i.jsx("div",{className:`relative w-12 h-12 rounded-xl bg-gradient-to-br ${r.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`,children:i.jsx(o,{className:"w-full h-full text-white"})}),i.jsxs("div",{className:"relative",children:[i.jsx("h3",{className:"text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 group-hover:bg-clip-text transition-all duration-300",children:r.title}),i.jsx("p",{className:"text-gray-300 text-sm leading-relaxed mb-4 group-hover:text-gray-200 transition-colors duration-300",children:r.description}),i.jsx("div",{className:`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${r.color} text-white shadow-md`,children:r.stats})]}),i.jsx("div",{className:`absolute inset-0 rounded-2xl bg-gradient-to-r ${r.color} opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl`})]},a)})})]})})},e$=function(){const e=()=>{Wo("start_trading_save_1000","cta_section"),Lo("https://gobabytrade.com/432706BE","Start Trading Save $1000 CTA")};return i.jsxs("section",{className:"py-10 px-4 relative overflow-hidden",children:[i.jsx("div",{className:"absolute top-10 right-10 opacity-8 pointer-events-none hidden xl:block",children:i.jsx("img",{src:"/robot-trading.png",alt:"",className:"w-20 h-20 animate-pulse"})}),i.jsxs("div",{className:"relative max-w-4xl mx-auto text-center",children:[i.jsxs("div",{className:"inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-400/40 mb-6 mt-4 shadow-lg shadow-purple-500/20",children:[i.jsx(qv,{className:"w-4 h-4 text-purple-300"}),i.jsx("span",{className:"text-purple-200 font-medium",children:"Ready to Start?"})]}),i.jsxs("h2",{className:"text-4xl md:text-6xl font-bold text-white mb-6 leading-tight",children:["Ready for True",i.jsx("span",{className:"block text-transparent bg-gradient-to-r from-green-300 via-blue-400 to-purple-400 bg-clip-text",children:"Set-It-and-Forget-It Trading?"})]}),i.jsx("p",{className:"text-xl text-gray-200 mb-8 max-w-3xl mx-auto",children:"GoBabyTrade is an AI-enhanced autonomous trading system that protects your capital while maximizing profits. Start with paper trading risk-free."}),i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",children:[i.jsxs("div",{className:"flex items-center justify-center gap-3",children:[i.jsx(Le,{className:"w-6 h-6 text-green-300 flex-shrink-0"}),i.jsx("span",{className:"text-gray-200",children:"Never trades at a loss"})]}),i.jsxs("div",{className:"flex items-center justify-center gap-3",children:[i.jsx(Le,{className:"w-6 h-6 text-green-300 flex-shrink-0"}),i.jsx("span",{className:"text-gray-200",children:"Your funds stay secure"})]}),i.jsxs("div",{className:"flex items-center justify-center gap-3",children:[i.jsx(Le,{className:"w-6 h-6 text-green-300 flex-shrink-0"}),i.jsx("span",{className:"text-gray-200",children:"Set it and forget it"})]})]}),i.jsxs("div",{className:"bg-gray-900/50 rounded-2xl border border-white/10 p-8 mb-8 max-w-3xl mx-auto shadow-lg shadow-purple-500/10 relative",children:[i.jsx("div",{className:"absolute bottom-4 right-4 opacity-10 pointer-events-none hidden md:block",children:i.jsx("img",{src:"/robot-trading.png",alt:"",className:"w-12 h-12"})}),i.jsxs("div",{className:"flex items-center justify-center gap-3 mb-6",children:[i.jsx(_v,{className:"w-8 h-8 text-green-300"}),i.jsx("h3",{className:"text-2xl md:text-3xl font-bold text-white",children:"Save $1,000 With My Link"})]}),i.jsxs("ul",{className:"text-left space-y-4 mb-6",children:[i.jsxs("li",{className:"flex items-start text-gray-200 group hover:text-white transition-all duration-300 hover:translate-x-2",children:[i.jsx(Pe,{className:"w-5 h-5 text-purple-300 mr-3 mt-1 flex-shrink-0 group-hover:text-pink-300 transition-colors"}),i.jsx("span",{className:"text-lg",children:"AI-enhanced autonomous trading that works 24/7"})]}),i.jsxs("li",{className:"flex items-start text-gray-200 group hover:text-white transition-all duration-300 hover:translate-x-2",children:[i.jsx(Pe,{className:"w-5 h-5 text-purple-300 mr-3 mt-1 flex-shrink-0 group-hover:text-pink-300 transition-colors"}),i.jsx("span",{className:"text-lg",children:"Never sells at a loss – waits for profitable opportunities"})]}),i.jsxs("li",{className:"flex items-start text-gray-200 group hover:text-white transition-all duration-300 hover:translate-x-2",children:[i.jsx(Pe,{className:"w-5 h-5 text-purple-300 mr-3 mt-1 flex-shrink-0 group-hover:text-pink-300 transition-colors"}),i.jsx("span",{className:"text-lg",children:"Your funds stay in your own Coinbase or Kraken account"})]}),i.jsxs("li",{className:"flex items-start text-gray-200 group hover:text-white transition-all duration-300 hover:translate-x-2",children:[i.jsx(Pe,{className:"w-5 h-5 text-purple-300 mr-3 mt-1 flex-shrink-0 group-hover:text-pink-300 transition-colors"}),i.jsx("span",{className:"text-lg",children:"Start with paper trading – zero risk to test the system"})]}),i.jsxs("li",{className:"flex items-start text-gray-200 group hover:text-white transition-all duration-300 hover:translate-x-2",children:[i.jsx(Pe,{className:"w-5 h-5 text-purple-300 mr-3 mt-1 flex-shrink-0 group-hover:text-pink-300 transition-colors"}),i.jsx("span",{className:"text-lg",children:"Same system I use – see my live results above"})]})]}),i.jsx("p",{className:"text-lg text-green-300 font-medium",children:"Use my referral link to get $1,000 off GoBabyTrade!"})]}),i.jsx("div",{className:"flex justify-center mb-8",children:i.jsxs("a",{href:"https://gobabytrade.com/432706BE",onClick:e,target:"_blank",rel:"noopener noreferrer",className:"group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-purple-500/30 flex items-center justify-center gap-2",children:["Start Trading – Save $1,000",i.jsx(Pe,{className:"w-5 h-5 group-hover:translate-x-1 transition-transform"})]})}),i.jsxs("div",{className:"flex items-center justify-center gap-3 text-green-300",children:[i.jsx(Ye,{className:"w-6 h-6"}),i.jsx("span",{className:"text-lg font-semibold",children:"Try Paper Trading First – Zero Risk, Real Results"})]})]})]})},t$=[{question:"Is my money safe?",answer:"Yes! Your funds stay in your own Kraken/Coinbase accounts. The system only connects via API with trading permissions - it can never withdraw or transfer your funds."},{question:"Do I need trading experience?",answer:"No experience required! The AI handles all analysis and decisions. You set your preferences and investment amount - the platform does the rest."},{question:"How much money do I need to start?",answer:"Start with as little as $100. It's recommended to start small to get familiar with the platform before scaling up your investment."},{question:"What if the system makes losing trades?",answer:"The GoBabyTrade protection system never executes losing trades. It waits for profitable opportunities or doesn't trade at all, safeguarding your capital."},{question:"Can I pause or stop the automated trading anytime?",answer:"Yes! You have complete control. Pause or stop anytime directly in the interface. When paused, the system stops making new trades but your existing positions remain untouched."}],n$=({question:e,answer:t})=>{const[n,r]=f.useState(!1);return i.jsxs("div",{className:"bg-gray-900/50 rounded-xl border border-white/10 overflow-hidden hover:border-purple-400/40 transition-all duration-300 shadow-lg shadow-purple-500/10",children:[i.jsxs("button",{onClick:()=>r(!n),className:"w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/10 transition-colors duration-200",children:[i.jsx("span",{className:"text-lg font-semibold text-white pr-4",children:e}),i.jsx("div",{className:"flex-shrink-0",children:n?i.jsx(sp,{className:"w-5 h-5 text-purple-300"}):i.jsx(ip,{className:"w-5 h-5 text-purple-300"})})]}),i.jsx("div",{className:`overflow-hidden transition-all duration-300 ease-in-out ${n?"max-h-96 opacity-100":"max-h-0 opacity-0"}`,children:i.jsx("div",{className:"px-6 pb-4 border-t border-white/20",children:i.jsx("div",{className:"text-gray-200 leading-relaxed pt-4",children:t})})})]})},r$=()=>i.jsxs("section",{className:"py-20 px-4 relative overflow-hidden",children:[i.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/30 to-slate-900 -z-10"}),i.jsx("div",{className:"absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"}),i.jsx("div",{className:"absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"}),i.jsxs("div",{className:"max-w-4xl mx-auto relative z-10",children:[i.jsxs("div",{className:"text-center mb-12",children:[i.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-white mb-4",children:"Common Questions"}),i.jsx("p",{className:"text-xl text-gray-300",children:"Quick answers to help you get started"})]}),i.jsx("div",{className:"max-w-2xl mx-auto mb-12",children:i.jsx("img",{src:"/graphics/homepage-faq-01.webp",alt:"3 Steps to Passive Income - Connect, Configure, Collect",className:"w-full rounded-2xl shadow-xl shadow-purple-500/10 border border-white/10"})}),i.jsx("div",{className:"space-y-3 mb-8",children:t$.map((e,t)=>i.jsx(n$,{question:e.question,answer:e.answer},t))}),i.jsx("div",{className:"text-center mb-12",children:i.jsxs(Ue,{to:"/faq",className:"inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-colors duration-200",children:[i.jsx(cp,{className:"w-5 h-5"}),i.jsx("span",{className:"text-lg",children:"View all 30+ questions →"})]})}),i.jsxs("div",{className:"mt-8 text-center bg-gradient-to-r from-gray-900/30 to-purple-900/20 rounded-2xl p-8 border border-white/10 shadow-lg shadow-purple-500/10",children:[i.jsx("h3",{className:"text-2xl font-bold text-white mb-4",children:"Ready to Start Trading?"}),i.jsx("p",{className:"text-gray-200 mb-6",children:"Get started with GoBabyTrade – the same AI-enhanced autonomous trading system I use. Try paper trading first, risk-free."}),i.jsx("a",{href:"https://gobabytrade.com/432706BE",target:"_blank",rel:"noopener noreferrer",className:"inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-8 rounded-xl hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg shadow-purple-500/50",children:"Start Trading – Save $1,000 →"})]})]})]}),ka=[{title:"The Entire Game Was Rigged: What the College Basketball Scandal Teaches Us About Gambling",slug:"college-basketball-gambling-scandal-2026",date:"2026-01-19T16:00:00Z",content:`# The Entire Game Was Rigged: What the College Basketball Scandal Teaches Us About Gambling

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

Or if you want to see the exact system I use: [Learn about GoBabyTrade™](https://gobabytrade.com/432706BE)`,category:"Anti-Gambling",metaDescription:"26 people charged, 39 players involved, 29 games fixed. The FBI's 'Operation Nothing But Bet' reveals why sports betting is never a fair game.",heroImage:"/blog-images/college-basketball-gambling-scandal-2026-hero.webp",imageAlt:"College basketball gambling scandal - FBI Operation Nothing But Bet",excerpt:"26 people charged, 39 players involved, 29 games fixed. The FBI's 'Operation Nothing But Bet' reveals why sports betting is never a fair game."},{title:"While Everyone Waits for the Next Moonshot, I'm Quietly Accumulating",slug:"quiet-accumulation-undervalued-crypto-utility-tokens",date:"2026-01-19T12:00:00Z",content:`# While Everyone Waits for the Next Moonshot, I'm Quietly Accumulating

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

**Ready to stop gambling and start building?** [See how the system works →](https://gobabytrade.com/432706BE)

---

*The AI-enhanced autonomous trading system I use is GoBabyTrade™, created by Ed Barsano. I'm an affiliate because I believe in the product—and I put my money where my mouth is every single day.*

*Disclaimer: This is not financial advice. All investments carry risk. Past performance does not guarantee future results. The tokens mentioned (ACH, GRT) are examples from my trading activity and not recommendations to buy. Do your own research and never invest more than you can afford to lose.*`,category:"Market Intelligence",metaDescription:"Fidelity predicts crypto volatility is decreasing. Here's why I'm systematically accumulating undervalued utility tokens like ACH and GRT while everyone else waits for moonshots.",heroImage:"/blog-images/quiet-accumulation-undervalued-crypto-utility-tokens-hero.webp",imageAlt:"Systematic crypto accumulation versus waiting for moonshots comparison"},{title:"The Man Behind the Code: How Ed Barsano Turned a Market Crash Into a 25-Year Mission",slug:"ed-barsano-creator-gobabytrade",publishDate:"2026-01-18",date:"2026-01-18T12:00:00Z",heroImage:"/blog-images/ed-barsano-creator-gobabytrade-hero.webp",imageAlt:"Ed Barsano - creator of GoBabyTrade autonomous trading system",excerpt:"51 years of programming. Early Microsoft hire. Got wiped out in 2000. Then spent 25 years building what nobody said was possible.",content:`# The Man Behind the Code: How Ed Barsano Turned a Market Crash Into a 25-Year Mission

I talk a lot about my autonomous trading results here. The $5,000+ in profits. The 1,000+ trades. The 100% success rate.

But I don't talk enough about the person who made it all possible.

His name is **Ed Barsano**. And his story is one of the most compelling in fintech — even if you've never heard of him.

![Ed Barsano's Journey](/blog-images/ed-barsano-creator-gobabytrade-01.webp)

## From the Navy to Microsoft's First 300

Ed Barsano started programming 51 years ago. After serving in the Navy, he became one of the first 300 employees hired at Microsoft — recruited directly by Bill Gates in the company's earliest days.

For nine years, he was a programming engineer at Microsoft during its explosive growth period. By the time he left, he'd retired young with the skills and resources to do whatever he wanted.

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

Not a marketer. Not a hype man. A programmer with 51 years of experience who's been obsessed with one problem for a quarter century.

## My Small Contribution

I started MyRoboticTrader.com because I wanted to document what's actually possible with systematic, AI-enhanced autonomous trading. Every trade I make is published. Nothing hidden.

Ed built the engine. I'm just showing people what it can do.

If you're curious about the results, check out my [live trading transparency dashboard](/results). Every profit, every position, fully documented.

And if you want to learn more about the system Ed created, [see what's possible with GoBabyTrade™](https://gobabytrade.com/432706BE).

*Here's to the quiet geniuses who build things that actually work.*`,category:"Education",metaDescription:"51 years of programming. Early Microsoft hire. Got wiped out in 2000. Then spent 25 years building what nobody said was possible."},{title:"Uber's Robot Army Is Coming — Here's How to Be the Owner, Not the Replaced",slug:"uber-robots-automation",publishDate:"2026-01-17",date:"2026-01-17T12:00:00Z",heroImage:"/blog-images/uber-robots-automation-hero.webp",imageAlt:"Uber robotaxi with driver being replaced - automation ownership concept",excerpt:"Uber just announced 20,000 robotaxis and 12,000 delivery bots. Gig workers are being replaced. But the same automation can work FOR you instead.",content:`# Uber's Robot Army Is Coming — Here's How to Be the Owner, Not the Replaced

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

Or if you're ready to explore autonomous trading for yourself, [see what's possible with GoBabyTrade™](https://gobabytrade.com/432706BE).

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

And if you're ready to stop choosing between 13 bot types and start building actual wealth, [see what's possible with autonomous trading](https://gobabytrade.com/432706BE).

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

I publish every trade on my [Live Results Dashboard](/transparency). No hiding. No cherry-picking. Complete transparency.

This system was built by Ed Barsano, who's been refining it for over 25 years. I'm just the guy crazy enough to publish every result.

**Ready to see what systematic trading looks like?**

[Check out the GoBabyTrade™ system](https://gobabytrade.com/432706BE) and see if it's right for you.

---

*Patrick Jenkins is the founder of MyRoboticTrader.com, where he publishes every trade from his AI-enhanced autonomous trading system. He believes in transparency, patience, and letting robots do the boring work.*`,category:"Lifestyle",metaDescription:"One year ago, I stopped gambling on crypto and started systematically trading it. 1,002 trades later, I've got $5,005.96 in verified profit and zero sleepless nights."},{title:"2025: My First Year with an Autonomous Trader",slug:"first-year-autonomous-trader-2025",published:!0,publishDate:"2025-12-27",date:"2025-12-27T12:00:00Z",heroImage:"/blog-images/first-year-autonomous-trader-2025-hero.webp",imageAlt:"Calendar showing 2025 with trading charts and growth trajectory",excerpt:"985 trades. $4,907 in profit. 100% success rate. I almost dismissed this out of hand. Here's what my first year with an autonomous crypto trader actually looked like.",content:`I almost didn't do this.

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

My autonomous trading system was developed by Ed Barsano, creator of [GoBabyTrade™](https://gobabytrade.com/432706BE). I publish every single trade live at [myrobotictrader.com](https://myrobotictrader.com) — the good weeks, the quiet weeks, and everything in between.`,category:"Lifestyle",metaDescription:"A transparent look at my first year running an autonomous crypto trading system - the wins, the quiet months, and what I learned along the way."},{title:"Everyone Has an Opinion About Your Money (Here's Why They're Wrong)",slug:"everyone-has-an-opinion",publishDate:"2026-01-20",date:"2026-01-20T12:00:00Z",heroImage:"/blog-images/everyone-has-an-opinion-hero.webp",imageAlt:"Person covering ears surrounded by speech bubbles - everyone has an opinion",excerpt:"Your uncle thinks crypto is a scam. Your coworker won't stop talking about his gains. Financial TV is screaming about a crash. Here's how to tune out the noise.",content:`# Everyone Has an Opinion About Your Money (Here's Why They're Wrong)

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

My autonomous trading system was developed by Ed Barsano, creator of [GoBabyTrade™](https://gobabytrade.com/432706BE). I publish every single trade live at [myrobotictrader.com](https://myrobotictrader.com) — the good weeks, the quiet weeks, and everything in between.`,category:"Market Psychology",metaDescription:"Your uncle thinks crypto is a scam. Your coworker won't stop talking about his gains. Financial TV is screaming about a crash. Here's how to tune out the noise."},{title:"Why You Always Buy the Top (It's Not Bad Luck)",slug:"fomo-engineering",published:!0,publishDate:"2026-01-08",date:"2026-01-08T12:00:00Z",heroImage:"/blog-images/fomo-engineering-hero.webp",imageAlt:"Fishing hook with crypto coin bait - FOMO is engineered",excerpt:"That urgent feeling that you HAVE to buy right now? It was manufactured. Here's how pumps are engineered to make you the exit liquidity.",content:`# Why You Always Buy the Top (It's Not Bad Luck)

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

My autonomous trading system was developed by Ed Barsano, creator of [GoBabyTrade™](https://gobabytrade.com/432706BE). I publish every single trade live at [myrobotictrader.com](https://myrobotictrader.com) — the good weeks, the quiet weeks, and everything in between.`,category:"Market Psychology",metaDescription:"That urgent feeling that you HAVE to buy right now? It was manufactured. Here's how pumps are engineered to make you the exit liquidity."},{title:"Why Flat Markets Feel Hopeless (And Why That's Exactly the Point)",slug:"whale-accumulation",published:!0,publishDate:"2026-01-01",date:"2026-01-01T12:00:00Z",heroImage:"/blog-images/whale-accumulation-hero.webp",imageAlt:"Whale with glowing eye watching confused fish - Your frustration is their strategy",excerpt:"When crypto prices stay flat and you feel like giving up, you're experiencing a manufactured emotion. Here's what's really happening behind the scenes.",content:`# Why Flat Markets Feel Hopeless (And Why That's Exactly the Point)

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

Want to see what that looks like? Every trade I make is published live. [See my actual results →](/transparency)

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

Curious what results-first looks like? Every trade is published live. [See my actual performance →](/transparency)

---

*The autonomous trading system I use was developed by Ed Barsano and the GoBabyTrade™ team, who've spent 25+ years refining systematic trading approaches. I'm an affiliate because I use the product—not the other way around.*`},{slug:"3commas-million-users",title:"3Commas Has 1 Million Users. I'm Not One of Them. Here's Why.",publishDate:"2026-01-11",date:"2026-01-11T12:00:00Z",category:"Market Intelligence",author:"Patrick Jenkins",heroImage:"/blog-images/3commas-million-users-hero.webp",imageAlt:"3Commas trading platform review",excerpt:"3Commas serves over 1 million traders. After researching their platform extensively, I chose a different path. Here's what I found.",metaDescription:"3Commas serves over 1 million traders. After researching their platform extensively, I chose a different path. Here's what I found and why I'm staying with my current system.",content:`One million users. Over $100 billion in trading volume. A decade in the crypto space.

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

Want to see what that looks like in practice? Every single trade is published. [View my live results →](/transparency)

---

*The autonomous trading system I use was developed by Ed Barsano and the GoBabyTrade™ team, who've spent 25+ years refining systematic trading approaches. I'm an affiliate because I use the product—not the other way around.*`},{slug:"bitsgap-everything-simpler",title:"Bitsgap Offers Everything. I Chose Something Simpler.",publishDate:"2026-01-27",date:"2026-01-27",category:"Market Intelligence",author:"Patrick Jenkins",heroImage:"/blog-images/bitsgap-everything-simpler-hero.webp",imageAlt:"Bitsgap trading platform review",excerpt:"Bitsgap combines bots, arbitrage, portfolio tracking, and more in one platform. After researching all those features, I chose a simpler path.",metaDescription:"Bitsgap combines bots, arbitrage, portfolio tracking, and more in one platform. After researching all those features, I chose a simpler path. Here's what I found.",content:`Grid bots. DCA bots. Arbitrage scanner. Futures trading. Portfolio tracking. Demo mode. 15+ exchange integrations.

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

Want to see simple and transparent in action? Every trade is live. [Check my actual results →](/transparency)

---

*The autonomous trading system I use was developed by Ed Barsano and the GoBabyTrade™ team, who've spent 25+ years refining systematic trading approaches. I'm an affiliate because I use the product—not the other way around.*`},{slug:"1000-trades-what-i-know",title:"After 1,000+ Trades, Here's What I Actually Know About Crypto Trading Bots",publishDate:"2026-01-30",date:"2026-01-30",category:"Education",author:"Patrick Jenkins",heroImage:"/blog-images/1000-trades-what-i-know-hero.webp",imageAlt:"What I learned after 1000 crypto bot trades",excerpt:"After a year of autonomous trading and over 1,000 verified trades, I finally have a real answer to whether crypto trading bots are profitable. Here's what I know now.",metaDescription:"After a year of autonomous trading and over 1,000 verified trades, I finally have a real answer to whether crypto trading bots are profitable. Here's what I know now.",content:`"Are crypto bots profitable?"

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

Want to see what that looks like? Every trade is published. [View my live transparency dashboard →](/transparency)

---

*The autonomous trading system I use was developed by Ed Barsano and the GoBabyTrade™ team, who've spent 25+ years refining systematic trading approaches. I'm an affiliate because I use the product—not the other way around.*`}];function Ob(e){if(e.published===!1)return!1;if(!e.publishDate)return!0;const t=new Date(e.publishDate),n=new Date;return n.setHours(0,0,0,0),t.setHours(0,0,0,0),t<=n}function Yi(e){return e.filter(Ob)}function mr(e){return new Date(e.publishDate||e.date)}function a$(){return typeof window>"u"?!1:new URLSearchParams(window.location.search).get("preview")==="true"}const o$=({maxPosts:e=4})=>{const t=Yi(ka).sort((s,l)=>mr(l).getTime()-mr(s).getTime()).slice(0,e),n=s=>new Date(s).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),r=s=>({Education:"from-blue-500 to-cyan-500","Anti-Gambling":"from-red-500 to-orange-500","Market Intelligence":"from-green-500 to-emerald-500",Lifestyle:"from-purple-500 to-pink-500","Market Psychology":"from-amber-500 to-yellow-500"})[s]||"from-purple-500 to-blue-500";if(t.length===0)return null;const[a,...o]=t;return i.jsxs("section",{className:"py-20 px-4 relative overflow-hidden",children:[i.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/30 to-slate-900 -z-10"}),i.jsx("div",{className:"absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"}),i.jsx("div",{className:"absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"}),i.jsxs("div",{className:"max-w-6xl mx-auto relative z-10",children:[i.jsxs("div",{className:"text-center mb-12",children:[i.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-white mb-4",children:"Latest Insights"}),i.jsx("p",{className:"text-gray-300 text-lg max-w-2xl mx-auto",children:"Real talk about trading, building wealth, and avoiding the gambling trap"})]}),i.jsx(Ue,{to:`/blog/${a.slug}`,className:"group block mb-8 bg-gray-900/50 rounded-2xl overflow-hidden border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 shadow-lg shadow-purple-500/10 hover:shadow-xl hover:shadow-purple-500/20",children:i.jsxs("div",{className:"grid md:grid-cols-2 gap-0",children:[i.jsx("div",{className:"aspect-video md:aspect-auto overflow-hidden",children:i.jsx("img",{src:a.heroImage,alt:a.imageAlt||a.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"})}),i.jsxs("div",{className:"p-6 md:p-8 flex flex-col justify-center",children:[i.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[i.jsxs("span",{className:"flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-full",children:[i.jsx(Ye,{className:"w-3 h-3"})," FEATURED"]}),i.jsx("span",{className:`px-3 py-1 bg-gradient-to-r ${r(a.category)} text-white text-xs font-medium rounded-full`,children:a.category})]}),i.jsx("h3",{className:"text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors",children:a.title}),i.jsx("p",{className:"text-gray-300 text-lg mb-6 line-clamp-3",children:a.excerpt||a.metaDescription}),i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsx("span",{className:"text-gray-500",children:n(a.date)}),i.jsxs("span",{className:"text-purple-400 flex items-center gap-2 font-medium group-hover:gap-3 transition-all",children:["Read article ",i.jsx(Pe,{className:"w-5 h-5"})]})]})]})]})}),o.length>0&&i.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:o.map(s=>i.jsxs(Ue,{to:`/blog/${s.slug}`,className:"group block bg-gray-900/50 rounded-xl overflow-hidden border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 shadow-lg shadow-purple-500/10 hover:shadow-xl hover:shadow-purple-500/20",children:[i.jsx("div",{className:"aspect-video overflow-hidden",children:i.jsx("img",{src:s.heroImage,alt:s.imageAlt||s.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",loading:"lazy"})}),i.jsxs("div",{className:"p-5",children:[i.jsx("span",{className:`inline-block px-2.5 py-1 text-xs font-medium bg-gradient-to-r ${r(s.category)} text-white rounded-full mb-3`,children:s.category}),i.jsx("h3",{className:"text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-purple-300 transition-colors",children:s.title}),i.jsx("p",{className:"text-gray-400 text-sm line-clamp-2 mb-4",children:s.excerpt||s.metaDescription}),i.jsxs("div",{className:"flex items-center justify-between text-sm",children:[i.jsx("span",{className:"text-gray-500",children:n(s.date)}),i.jsxs("span",{className:"text-purple-400 flex items-center gap-1 group-hover:gap-2 transition-all",children:["Read ",i.jsx(Pe,{className:"w-4 h-4"})]})]})]})]},s.slug))}),i.jsx("div",{className:"text-center mt-10",children:i.jsxs(Ue,{to:"/blog",className:"inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-colors group",children:[i.jsx(jl,{className:"w-5 h-5"}),i.jsx("span",{children:"View all articles"}),i.jsx(Pe,{className:"w-5 h-5 group-hover:translate-x-1 transition-transform"})]})})]})]})},i$=[{id:"1-year-5k",date:"January 2026",title:"$5,000 Profit Milestone",description:"One year of systematic trading. 1,002 trades executed autonomously with 100% success rate on closed positions.",stats:[{label:"Total Profit",value:"$5,005.96"},{label:"Closed Trades",value:"1,002"},{label:"Avg Per Trade",value:"$5.00"},{label:"Win Rate",value:"100%"}],icon:"trophy",featured:!0,blogSlug:"one-year-5k-milestone"}],s$={trophy:Kv,calendar:Al,trending:Ye,target:nr},l$=()=>i.jsx("section",{className:"py-16 px-4",children:i.jsxs("div",{className:"max-w-4xl mx-auto",children:[i.jsxs("div",{className:"text-center mb-12",children:[i.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-white mb-4",children:"Milestones"}),i.jsx("p",{className:"text-xl text-gray-300 max-w-2xl mx-auto",children:"Real achievements from systematic trading. Every number verified, every trade published."})]}),i.jsx("div",{className:"space-y-6",children:i$.map(e=>{const t=s$[e.icon];return i.jsxs("div",{className:"group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 hover:border-green-400/40 transition-all duration-300 shadow-lg",children:[i.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[i.jsx("div",{className:"w-11 h-11 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 p-2.5 shadow-lg shadow-green-500/30 flex-shrink-0",children:i.jsx(t,{className:"w-full h-full text-white"})}),i.jsx("h3",{className:"text-2xl md:text-3xl font-bold text-white",children:e.title}),i.jsx("span",{className:"text-sm text-gray-400",children:e.date}),e.featured&&i.jsxs("span",{className:"inline-flex items-center gap-1.5 bg-green-500/20 rounded-full px-2.5 py-0.5 border border-green-400/40",children:[i.jsx("span",{className:"w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"}),i.jsx("span",{className:"text-green-300 text-xs font-medium",children:"New"})]})]}),i.jsx("p",{className:"text-gray-300 mb-6",children:e.description}),i.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:e.stats.map((n,r)=>{const a=n.label==="Total Profit"?"text-green-300":n.label==="Closed Trades"?"text-orange-300":n.label==="Avg Per Trade"?"text-purple-300":n.label==="Win Rate"?"text-cyan-300":"text-green-300";return i.jsxs("div",{className:"bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10",children:[i.jsx("div",{className:`text-xl md:text-2xl font-bold ${a}`,children:n.value}),i.jsx("div",{className:"text-sm text-gray-400 mt-1",children:n.label})]},r)})}),e.blogSlug&&i.jsx("a",{href:`/blog/${e.blogSlug}`,className:"inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-medium transition-colors mt-5",children:"Read the full story →"})]},e.id)})})]})}),c$=e=>{const[t,n]=f.useState(()=>typeof window<"u"?window.matchMedia(e).matches:!1);return f.useEffect(()=>{const r=window.matchMedia(e);n(r.matches);const a=o=>n(o.matches);return r.addEventListener("change",a),()=>r.removeEventListener("change",a)},[e]),t},kr=()=>{var h;const e=Km(),[t,n]=f.useState(!1),{tradingStats:r,isLoading:a}=Xr(),o=c$("(min-width: 768px)"),s=()=>{Wo("start_trading_save_1000","full_nav"),Lo("https://gobabytrade.com/432706BE","Start Trading Save $1000 Nav")},l=[{label:"Home",path:"/"},{label:"Blog",path:"/blog"},{label:"FAQ",path:"/faq"},{label:"Resources",path:"/resources"}],c=m=>m==="/"?e.pathname==="/":e.pathname.startsWith(m),d=(()=>{if(!(r!=null&&r.totalProfit))return 0;const m=new Date("2025-01-08"),g=Math.floor((new Date().getTime()-m.getTime())/(1e3*60*60*24));return g>0?r.totalProfit/g:0})();return i.jsx("nav",{className:"sticky top-0 z-50 bg-white/8 backdrop-blur-md border-b border-white/10",children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsxs("div",{className:"flex items-center gap-4 h-16",children:[i.jsxs(Ue,{to:"/",className:"flex items-center gap-3 group flex-shrink-0",children:[i.jsx("div",{className:"w-8 h-8 rounded-lg overflow-hidden shadow-md shadow-purple-500/30 bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 group-hover:shadow-lg group-hover:shadow-purple-500/40 transition-all duration-300",children:i.jsx("div",{className:"w-full h-full rounded-md overflow-hidden bg-white/10 backdrop-blur-sm",children:i.jsx("img",{src:"/robot-logo.png",alt:"MyRoboticTrader Robot",className:"w-full h-full object-cover"})})}),i.jsxs("div",{className:"text-lg font-bold",children:[i.jsx("span",{className:"text-white",children:"My"}),i.jsx("span",{className:"text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text",children:"Robotic"}),i.jsx("span",{className:"text-white",children:"Trader"})]})]}),o&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"flex items-center gap-4 flex-1 justify-center max-w-4xl",children:[i.jsxs("div",{className:"flex items-center gap-3 bg-white/10 rounded-lg px-4 py-2 border border-white/20 shadow-sm hover:shadow-md hover:bg-white/[0.12] transition-all duration-200 cursor-default",children:[i.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-green-400 to-emerald-500 p-1.5 flex-shrink-0 shadow-md",children:i.jsx(Bn,{className:"w-full h-full text-white",strokeWidth:2.5})}),i.jsx("div",{className:"min-w-0",children:a?i.jsx("div",{className:"text-sm font-bold text-green-300 animate-pulse",children:"Loading..."}):i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"text-sm font-bold text-green-300 truncate",children:["$",r==null?void 0:r.totalProfit.toLocaleString("en-US",{minimumFractionDigits:0,maximumFractionDigits:0}),"+"]}),i.jsx("div",{className:"text-xs text-gray-400 font-medium",children:"Total"})]})})]}),i.jsxs("div",{className:"flex items-center gap-3 bg-white/10 rounded-lg px-4 py-2 border border-white/20 shadow-sm hover:shadow-md hover:bg-white/[0.12] transition-all duration-200 cursor-default",children:[i.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-500 p-1.5 flex-shrink-0 shadow-md",children:i.jsx(Al,{className:"w-full h-full text-white",strokeWidth:2.5})}),i.jsx("div",{className:"min-w-0",children:a?i.jsx("div",{className:"text-sm font-bold text-blue-300 animate-pulse",children:"Loading..."}):i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"text-sm font-bold text-blue-300 truncate",children:["$",((h=r==null?void 0:r.monthlyAverage)==null?void 0:h.toLocaleString("en-US",{minimumFractionDigits:0,maximumFractionDigits:0}))||"0"]}),i.jsx("div",{className:"text-xs text-gray-400 font-medium",children:"Monthly"})]})})]}),i.jsxs("div",{className:"flex items-center gap-3 bg-white/10 rounded-lg px-4 py-2 border border-white/20 shadow-sm hover:shadow-md hover:bg-white/[0.12] transition-all duration-200 cursor-default",children:[i.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-purple-400 to-pink-500 p-1.5 flex-shrink-0 shadow-md",children:i.jsx(Ye,{className:"w-full h-full text-white",strokeWidth:2.5})}),i.jsx("div",{className:"min-w-0",children:a?i.jsx("div",{className:"text-sm font-bold text-purple-300 animate-pulse",children:"Loading..."}):i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"text-sm font-bold text-purple-300 truncate",children:["$",d.toLocaleString("en-US",{minimumFractionDigits:0,maximumFractionDigits:0})]}),i.jsx("div",{className:"text-xs text-gray-400 font-medium",children:"Daily"})]})})]})]}),i.jsxs("div",{className:"flex items-center gap-6",children:[l.map(m=>i.jsxs(Ue,{to:m.path,className:`text-sm font-semibold transition-all duration-200 relative group ${c(m.path)?"text-white":"text-gray-300 hover:text-white"}`,children:[m.label,c(m.path)&&i.jsx("div",{className:"absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"}),!c(m.path)&&i.jsx("div",{className:"absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-200"})]},m.path)),i.jsxs("a",{href:"https://gobabytrade.com/432706BE",onClick:s,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-purple-600 to-pink-500 hover:from-purple-600 hover:via-pink-500 hover:to-pink-600 text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-xl shadow-lg shadow-purple-500/40 hover:shadow-purple-500/60 flex-shrink-0",children:["Start Trading – Save $1,000",i.jsx(Pe,{className:"w-4 h-4"})]})]})]}),!o&&i.jsx("button",{onClick:()=>n(!t),className:"ml-auto text-white hover:text-purple-300 transition-colors p-2","aria-label":"Toggle menu",children:t?i.jsx(Zv,{className:"w-6 h-6"}):i.jsx(Yv,{className:"w-6 h-6"})})]}),!o&&t&&i.jsx("div",{className:"py-4 border-t border-white/10",children:i.jsxs("div",{className:"flex flex-col gap-4",children:[l.map(m=>i.jsx(Ue,{to:m.path,onClick:()=>n(!1),className:`text-sm font-medium transition-colors duration-300 ${c(m.path)?"text-purple-300":"text-gray-200 hover:text-white"}`,children:m.label},m.path)),i.jsxs("a",{href:"https://gobabytrade.com/432706BE",onClick:()=>{s(),n(!1)},target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg shadow-purple-500/30",children:["Start Trading – Save $1,000",i.jsx(Pe,{className:"w-4 h-4"})]})]})})]})})},st=({to:e,children:t})=>i.jsx(Ue,{to:e,className:"text-purple-300 hover:text-purple-200 underline transition-colors duration-200",children:t}),u$=[{category:"My Personal Experience",icon:up,color:"from-purple-500 to-pink-500",questions:[{question:"Why did you start automated trading in January 2025?",answer:i.jsxs(i.Fragment,{children:["I was tired of watching charts and trying to time the market perfectly. I wanted a systematic approach that could work while I lived my life. The idea of a system that only trades when conditions are favorable—and sits patiently when they're not—made sense to me. I started tracking every single trade publicly on this site to prove it works. ",i.jsx(st,{to:"/blog/trading-disorders-ai-solution",children:"Learn why I let an AI make every trade →"})]})},{question:"What surprised you most in your first months of trading?",answer:i.jsxs(i.Fragment,{children:["Two things: First, how truly hands-off it is. I genuinely don't watch it constantly. Second, how patience is everything. Some weeks are quiet with few trades, and that used to make me nervous. Now I understand that's the system being smart—waiting for the right opportunities instead of forcing trades. ",i.jsx(st,{to:"/blog/trading-disorders-ai-solution",children:"Read more about overcoming trading emotions →"})]})},{question:"What happens during flat or low volatility weeks?",answer:"The system thrives on volatility, so when the market is flat, there are fewer trading opportunities. Some weeks I see very few trades. The key lesson I've learned: Don't panic and don't start tweaking settings. Patience is paramount. The system knows what it's doing—it's waiting for better conditions."},{question:"Do you still check it constantly or worry about trades?",answer:"Honestly? In the beginning, yes—I checked it all the time. Now, a few months in, I glance at it maybe once a day, sometimes less. The transparency on this site is actually for YOU to see how it works, not because I'm obsessing over every trade. The system handles it."},{question:"Your profits seem modest. Shouldn't you be making way more money?",answer:i.jsxs(i.Fragment,{children:["I get this question a lot, and I appreciate the honesty. Here's my perspective: I'm not trying to get rich quick—I'm building sustainable, consistent income. Those '$50K in a month!' claims you see everywhere? Usually from huge capital, massive risk, or cherry-picked best months. My results are real, transparent, and conservative. I'm focused on steady growth without gambling. ",i.jsx(st,{to:"/blog/percent-gain-vs-roi",children:"Why I show % gain instead of ROI →"})]})},{question:"Why not scale up and make bigger profits faster?",answer:"Fair question. I could throw more money at it, but I'm being strategic. I'm adding capital gradually as I get more comfortable and as the system proves itself month after month. I'd rather grow methodically and sleep well at night than rush to scale and take on more risk than I'm comfortable with."},{question:"Would you recommend this to a complete beginner?",answer:i.jsxs(i.Fragment,{children:["Yes, but with realistic expectations. This isn't a 'get rich quick' scheme. It's systematic investing that requires patience and trust in the process. If you're willing to let the system do its job without constantly interfering, this works. ",i.jsx(st,{to:"/blog/how-to-make-passive-income-crypto",children:"Read the complete beginner's guide →"})]})},{question:"How do I get started with this system?",answer:i.jsxs(i.Fragment,{children:["The system I use is called GoBabyTrade. You can start with paper trading to test it risk-free before going live. Use my referral link to save $1,000:"," ",i.jsx("a",{href:"https://gobabytrade.com/432706BE",target:"_blank",rel:"noopener noreferrer",className:"text-purple-300 hover:text-purple-200 underline transition-colors duration-200",children:"Get GoBabyTrade – Save $1,000"})]})}]},{category:"About My Trade Log",icon:Ye,color:"from-cyan-500 to-blue-500",questions:[{question:"Why do you publicly show every single trade?",answer:"Because I'm tired of fake affiliate sites with cherry-picked results and photoshopped screenshots. If I'm going to recommend this system, I need to prove it works with real, verifiable data. Every trade you see is real—all my results are public and I update them almost daily."},{question:"How do I know your trade log is real and not faked?",answer:"The data comes directly from my robotic trader's transaction log—and everything traces back to my actual Coinbase transaction history. Plus, I show the flat weeks and quiet periods too, not just the wins. If I were faking it, why would I show the boring weeks?"},{question:"What do all the numbers in the trade log mean?",answer:"Each row shows a completed trade: the cryptocurrency, when I bought it, when I sold it, the quantity, the profit (or if it was a break-even trade), and the strategy used. The 'Trading Results' section summarizes everything—total profits, win rate, average profit per trade, etc."},{question:"Why are some weeks busier with trades than others?",answer:"The system only trades when market conditions are favorable. During high volatility, you'll see lots of trading activity. During flat periods, the system waits patiently. Some weeks have 20+ trades, other weeks might have 2-3. That's normal and expected."},{question:"What happens during down markets? Shouldn't the system stop trading?",answer:i.jsxs(i.Fragment,{children:["Actually, down markets are where the system shines! When prices drop, the trader accumulates inventory at lower prices—building up positions strategically. When prices turn around, you'll have a portfolio of positions ready to sell for profit. ",i.jsx(st,{to:"/blog/why-start-automated-trading-in-down-markets",children:"Why down markets are the best time to start →"})]})},{question:"Your average profit per trade seems small. Why only a few dollars per trade?",answer:i.jsxs(i.Fragment,{children:["Here's what matters more than average profit per trade: I've been profitable every single month since I started. Every. Single. Month. The system isn't trying to hit home runs—it's focused on consistency and never selling at a loss. Small, consistent profits compound over time. ",i.jsx(st,{to:"/blog/percent-gain-vs-roi",children:'Understanding % gain vs "how much should I invest" →'})]})},{question:"Do you ever hide losing trades?",answer:i.jsxs(i.Fragment,{children:["No. Every single trade is shown. However, the system is designed to only sell positions when they're profitable. If a position goes underwater, the system holds it until it can sell for a profit. That's the whole point—patience over panic. ",i.jsx(st,{to:"/blog/never-sell-at-loss-crypto-trading",children:"Why the system never sells at a loss →"})]})},{question:"Can I see trades from specific cryptocurrencies?",answer:"Yes! The trade log shows which coins are being traded—BONK, DOGE, SHIB, and others. You can see which coins generate the most trades, which ones are most profitable, and how the system handles different market conditions for each coin."},{question:"Why is this level of transparency important?",answer:"Because 99% of crypto affiliate sites are full of hype and promises with no proof. I wanted to build something different—a site where you can see the actual performance, not marketing spin. This trade log is my proof and my accountability."},{question:"Why have results dropped from the July highs?",answer:"August and September 2025 saw a market-wide correction after July's peak. During these down markets, the trader accumulates more inventory at better prices—when markets recover, those accumulated positions generate significantly larger profits. Every month remains profitable despite lower activity."},{question:"Can I download the trading data?",answer:"Yes! You can download the complete trade log as a CSV file for your own analysis. Click the download button to export all transactions with timestamps, cryptocurrencies, buy/sell prices, and profit amounts."}]},{category:"Getting Started",icon:cp,color:"from-blue-500 to-purple-500",questions:[{question:"What is robotic crypto trading?",answer:i.jsxs(i.Fragment,{children:["A robotic trader is an automated trading platform that executes buy and sell decisions based on market conditions and your settings. The system monitors markets 24/7 and executes trades in milliseconds without human intervention. ",i.jsx(st,{to:"/blog/bucket-and-well-automated-trading-analogy",children:"Read the simple analogy that explains how it works →"})]})},{question:"Do I need trading experience?",answer:"No experience required! The AI handles all analysis and decisions. You set your preferences and investment amount - the platform does the rest. GoBabyTrade provides support and resources to help you understand the process."},{question:"How much money do I need to start?",answer:"Start with as little as $100. It's recommended to start small to get familiar with the platform before scaling up your investment."},{question:"Can I use this outside the USA?",answer:"Yes! Available worldwide as long as you can trade on Coinbase or Kraken. Simply verify you can create and fund an account with either exchange in your region."},{question:"Should I get Coinbase One?",answer:i.jsxs(i.Fragment,{children:["Absolutely! Coinbase One saves me hundreds monthly with $0 trading fees. When you're making multiple trades daily, those fees add up fast."," ",i.jsx("a",{href:"https://dailyprofits.link/cba",target:"_blank",rel:"noopener noreferrer",className:"text-purple-300 hover:text-purple-200 underline transition-colors duration-200",children:"Get Coinbase One here"})]})}]},{category:"Safety & Security",icon:un,color:"from-green-500 to-blue-500",questions:[{question:"Is my money safe?",answer:"Yes! Your funds stay in your own Kraken/Coinbase accounts. The system only connects via API with trading permissions - it can never withdraw or transfer your funds."},{question:"What if the system makes losing trades?",answer:i.jsxs(i.Fragment,{children:["The GoBabyTrade protection system never executes losing trades. It waits for profitable opportunities or doesn't trade at all, safeguarding your capital. ",i.jsx(st,{to:"/blog/never-sell-at-loss-crypto-trading",children:"Learn how the never-sell-at-loss strategy works →"})]})},{question:"Can I pause or stop the automated trading anytime?",answer:"Yes! You have complete control over the automation. You can pause or stop the robotic trader anytime directly in the trader interface. When paused, the system stops making new trades but your existing positions remain untouched."}]},{category:"Performance & Profits",icon:Ye,color:"from-purple-500 to-pink-500",questions:[{question:"What returns can I expect?",answer:"While past performance doesn't guarantee future results, the GoBabyTrade platform achieves consistent profits by only trading when conditions are favorable. Results vary based on market conditions and your settings."},{question:"How often does it trade?",answer:"The system operates 24/7 and only trades when profitable opportunities arise. May trade multiple times daily during favorable conditions, or wait patiently when conditions aren't optimal."},{question:"What about ROI?",answer:i.jsxs(i.Fragment,{children:["ROI calculations can be misleading since most successful traders grow capital over time. Focus on overall portfolio growth and consistent profitable trades rather than ROI percentages. ",i.jsx(st,{to:"/blog/percent-gain-vs-roi",children:'Why I show % gain instead of "how much should I invest" →'})]})},{question:"Does it ever sell at a loss?",answer:i.jsxs(i.Fragment,{children:["Positions are only sold when profitable, unless you manually choose otherwise. The system waits patiently for opportunities to sell for gains, avoiding locked-in losses. ",i.jsx(st,{to:"/blog/never-sell-at-loss-crypto-trading",children:"Deep dive: Why never selling at a loss is actually possible →"})]})},{question:"Do you guarantee profits?",answer:"No legitimate system can guarantee profits. However, the GoBabyTrade approach of never trading at a loss significantly improves your probability of success."}]},{category:"Money Management",icon:Bn,color:"from-emerald-500 to-teal-500",questions:[{question:"Why doesn't the trader use all my available capital?",answer:"The system is designed to be conservative and patient. It waits for optimal opportunities rather than rushing to deploy all capital at once. This approach protects you from market volatility."},{question:"How does profit management work?",answer:"The system automatically manages profits, and you control whether to reinvest them or keep them separate. You can choose to compound your gains for faster growth or withdraw profits."},{question:"Does the system support dollar cost averaging?",answer:"Yes! There are advanced options where the trader will only buy positions and never sell, effectively creating a dollar cost averaging strategy. Perfect for long-term accumulation."},{question:"Why does the trader buy many positions but not sell during market dips?",answer:i.jsxs(i.Fragment,{children:["Down markets are actually good - this is where you build inventory! The trader takes advantage of lower prices to accumulate positions. When markets recover, you'll have multiple profitable positions ready to sell. ",i.jsx(st,{to:"/blog/why-start-automated-trading-in-down-markets",children:"Why down markets are the best time to start (with real numbers) →"})]})},{question:"Which cryptocurrencies work best for different strategies?",answer:"For active trading, faster-moving currencies often provide more opportunities. However, established coins like BTC and ETH may be better suited for long-term dollar cost averaging strategies. These are examples only - GoBabyTrade provides technical support, not investment advice."},{question:"How do I handle taxes on my trading profits?",answer:i.jsxs(i.Fragment,{children:["Crypto taxes can be complex with hundreds of trades. I personally use CoinTracker to automatically track all my trades and generate tax reports."," ",i.jsx("a",{href:"https://dailyprofits.link/cointracker",target:"_blank",rel:"noopener noreferrer",className:"text-purple-300 hover:text-purple-200 underline transition-colors duration-200",children:"Get CoinTracker here"})]})}]},{category:"Technical & Support",icon:Fo,color:"from-orange-500 to-red-500",questions:[{question:"Why Coinbase and Kraken instead of other exchanges?",answer:"The robotic trading platform was developed specifically for Coinbase and Kraken. These are the only exchanges with approved API integrations from the developer. They also happen to be two of the most reliable and secure exchanges available."},{question:"What exchanges does GoBabyTrade support?",answer:"Coinbase and Kraken exclusively. Seamless integration through secure API connections while keeping your funds safe in your own accounts."},{question:"Do I need to keep my computer running?",answer:"No! The system runs on cloud servers 24/7 even when your computer is off. Monitor trades and adjust settings from any device through the web platform."},{question:"What support is available?",answer:"GoBabyTrade provides comprehensive technical support for setup, configuration, and platform questions. Support is for technical and educational purposes only - no financial advice."}]}],d$=({question:e,answer:t})=>{const[n,r]=f.useState(!1);return i.jsxs("div",{className:"bg-gray-900/50 rounded-xl border border-white/10 overflow-hidden hover:border-purple-400/40 transition-all duration-300 shadow-lg shadow-purple-500/10",children:[i.jsxs("button",{onClick:()=>r(!n),className:"w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/10 transition-colors duration-200",children:[i.jsx("span",{className:"text-lg font-semibold text-white pr-4",children:e}),i.jsx("div",{className:"flex-shrink-0",children:n?i.jsx(sp,{className:"w-5 h-5 text-purple-300"}):i.jsx(ip,{className:"w-5 h-5 text-purple-300"})})]}),i.jsx("div",{className:`overflow-hidden transition-all duration-300 ease-in-out ${n?"max-h-[500px] opacity-100":"max-h-0 opacity-0"}`,children:i.jsx("div",{className:"px-6 pb-4 border-t border-white/20",children:i.jsx("div",{className:"text-gray-200 leading-relaxed pt-4",children:t})})})]})},h$=({category:e,icon:t,color:n,questions:r})=>i.jsxs("div",{className:"mb-8",children:[i.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[i.jsx("div",{className:`p-2 rounded-lg bg-gradient-to-br ${n} shadow-lg`,children:i.jsx(t,{className:"w-5 h-5 text-white"})}),i.jsx("h3",{className:"text-2xl font-bold text-white",children:e})]}),i.jsx("div",{className:"space-y-3",children:r.map((a,o)=>i.jsx(d$,{question:a.question,answer:a.answer},o))})]}),m$=()=>i.jsxs("div",{className:"min-h-screen bg-slate-900",children:[i.jsx(kr,{}),i.jsxs("section",{className:"py-20 px-4 relative overflow-hidden",children:[i.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/30 to-slate-900 -z-10"}),i.jsx("div",{className:"absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"}),i.jsx("div",{className:"absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"}),i.jsxs("div",{className:"max-w-4xl mx-auto relative z-10",children:[i.jsxs("div",{className:"text-center mb-12",children:[i.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-white mb-4",children:"Frequently Asked Questions"}),i.jsx("p",{className:"text-xl text-gray-300",children:"Real answers from real experience - no fluff, just transparency"})]}),i.jsx("div",{className:"max-w-2xl mx-auto mb-12",children:i.jsx("img",{src:"/graphics/homepage-faq-01.webp",alt:"3 Steps to Passive Income - Connect, Configure, Collect",className:"w-full rounded-2xl shadow-xl shadow-purple-500/10 border border-white/10"})}),i.jsx("div",{className:"space-y-8 mb-20",children:u$.map((e,t)=>i.jsx(h$,{category:e.category,icon:e.icon,color:e.color,questions:e.questions},t))}),i.jsxs("div",{className:"mt-16 text-center bg-gradient-to-r from-gray-900/30 to-purple-900/20 rounded-2xl p-8 border border-white/10 shadow-lg shadow-purple-500/10",children:[i.jsx("h3",{className:"text-2xl font-bold text-white mb-4",children:"Ready to Start Trading?"}),i.jsx("p",{className:"text-gray-200 mb-6",children:"Get started with GoBabyTrade – the same AI-enhanced autonomous trading system I use. Try paper trading first, risk-free."}),i.jsx("a",{href:"https://gobabytrade.com/432706BE",target:"_blank",rel:"noopener noreferrer",className:"inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-8 rounded-xl hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg shadow-purple-500/50",children:"Start Trading – Save $1,000 →"})]})]})]})]}),p$=function(){return i.jsx("footer",{className:"relative py-16 px-4 border-t border-white/10",children:i.jsxs("div",{className:"max-w-6xl mx-auto",children:[i.jsxs("div",{className:"text-center mb-8",children:[i.jsxs("a",{href:"/",className:"inline-flex items-center justify-center gap-3 mb-6 group",children:[i.jsx("div",{className:"w-8 h-8 rounded-lg overflow-hidden shadow-lg shadow-purple-500/40 bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 group-hover:scale-105 transition-transform",children:i.jsx("div",{className:"w-full h-full rounded overflow-hidden bg-white/10 backdrop-blur-sm",children:i.jsx("img",{src:"/robot-logo.png",alt:"MyRoboticTrader Robot",className:"w-full h-full object-cover"})})}),i.jsxs("div",{className:"text-xl font-bold group-hover:scale-105 transition-transform",children:[i.jsx("span",{className:"text-gray-300",children:"My"}),i.jsx("span",{className:"text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text",children:"Robotic"}),i.jsx("span",{className:"text-gray-300",children:"Trader"}),i.jsx("span",{className:"text-purple-400 text-sm ml-1",children:".com"})]})]}),i.jsx("p",{className:"text-gray-400 mb-8 max-w-2xl mx-auto",children:"Set it and forget it crypto trading that never trades at a loss. Your funds stay secure while AI-Enhanced technology maximizes profits 24/7."}),i.jsxs("div",{className:"flex flex-col sm:flex-row justify-center items-center gap-6 mb-8",children:[i.jsxs("a",{href:"https://gobabytrade.com/432706BE",target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2 group",children:["Start Trading – Save $1,000",i.jsx(Zn,{className:"w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"})]}),i.jsxs("a",{href:"/resources",className:"text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2 group",children:["Recommended Tools",i.jsx(Pe,{className:"w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"})]}),i.jsxs("a",{href:"/privacy",className:"text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2 group",children:[i.jsx(un,{className:"w-4 h-4"}),"Privacy Policy",i.jsx(Pe,{className:"w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"})]}),i.jsxs("a",{href:"https://x.com/myrobotictrader",target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2 group",children:[i.jsx(Vv,{className:"w-4 h-4"}),"Follow Us on X",i.jsx(Zn,{className:"w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"})]})]})]}),i.jsx("div",{className:"border-t border-white/10 pt-8 mb-8",children:i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-gray-500 max-w-5xl mx-auto",children:[i.jsxs("div",{className:"bg-white/5 rounded-lg p-4 border border-white/10",children:[i.jsx("h4",{className:"text-gray-300 font-semibold mb-2",children:"Affiliate Disclosure"}),i.jsx("p",{className:"leading-relaxed mb-3",children:"We earn commissions from recommended products and services. This doesn't affect our recommendations or your costs. We only promote solutions we believe provide real value to traders."}),i.jsxs("p",{className:"leading-relaxed text-purple-300",children:[i.jsx("strong",{children:"Specific Disclosure:"})," We are an affiliate of GoBabyTrade and earn commissions when you sign up through our referral link. Use our link to save $1,000 on your subscription."]})]}),i.jsxs("div",{className:"bg-white/5 rounded-lg p-4 border border-white/10",children:[i.jsx("h4",{className:"text-gray-300 font-semibold mb-2",children:"Risk Warning"}),i.jsx("p",{className:"leading-relaxed",children:"Crypto trading involves risk. Past performance doesn't guarantee future results. Only trade with funds you can afford to lose. Consider your risk tolerance carefully. Always do your own research (DYOR)."})]}),i.jsxs("div",{className:"bg-white/5 rounded-lg p-4 border border-white/10",children:[i.jsx("h4",{className:"text-gray-300 font-semibold mb-2",children:"Platform Disclaimer"}),i.jsx("p",{className:"leading-relaxed",children:"Not affiliated with Facebook, Meta, Coinbase, Kraken, or any trading platform unless explicitly stated. All trademarks belong to their respective owners and are used for identification only."})]}),i.jsxs("div",{className:"bg-white/5 rounded-lg p-4 border border-white/10",children:[i.jsx("h4",{className:"text-gray-300 font-semibold mb-2",children:"Educational Purpose"}),i.jsx("p",{className:"leading-relaxed",children:"Information provided is educational only, not financial advice. Individual results vary. Consult qualified financial professionals before making investment decisions."})]})]})}),i.jsxs("div",{className:"border-t border-white/10 pt-8 text-center",children:[i.jsxs("a",{href:"/",className:"inline-flex items-center justify-center gap-2 mb-3 group",children:[i.jsx("div",{className:"w-5 h-5 rounded overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 group-hover:scale-105 transition-transform",children:i.jsx("div",{className:"w-full h-full rounded overflow-hidden bg-white/10 backdrop-blur-sm",children:i.jsx("img",{src:"/robot-logo.png",alt:"",className:"w-full h-full object-cover"})})}),i.jsxs("span",{className:"text-gray-400 text-sm group-hover:text-purple-400 transition-colors",children:["© ",new Date().getFullYear()," ",i.jsx("span",{className:"text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-semibold",children:"MyRoboticTrader"}),".com"]})]}),i.jsx("div",{className:"text-xs text-gray-500",children:"Independent affiliate marketing website. Not affiliated with any trading platform or exchange unless explicitly disclosed above."}),i.jsxs("button",{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:"mt-6 inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-colors group","aria-label":"Back to top",children:[i.jsx($v,{className:"w-4 h-4 group-hover:-translate-y-1 transition-transform"}),i.jsx("span",{className:"text-sm font-medium",children:"Back to Top"})]})]})]})})},g$=function(){const{tradingStats:e}=Xr(),t=Ho(),n=e!=null&&e.totalProfit?`$${Math.round(e.totalProfit).toLocaleString()}+`:"$5,000+";return i.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900",children:[i.jsx(kr,{}),i.jsxs("section",{className:"py-12 px-4 relative overflow-hidden",children:[i.jsx("div",{className:"absolute top-10 right-10 opacity-10 pointer-events-none hidden lg:block",children:i.jsx("img",{src:"/robot-trading.png",alt:"",className:"w-24 h-24 animate-pulse"})}),i.jsx("div",{className:"relative max-w-6xl mx-auto text-center z-10 mt-8",children:i.jsxs("div",{className:"mb-8",children:[i.jsxs("div",{className:"inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-400/40 mb-6 shadow-lg shadow-purple-500/20",children:[i.jsx(jl,{className:"w-4 h-4 text-purple-300"}),i.jsx("span",{className:"text-purple-200 font-medium",children:"Recommended Tools"})]}),i.jsxs("h1",{className:"text-4xl md:text-6xl font-bold text-white mb-6 leading-tight",children:["Tools I Use &",i.jsx("span",{className:"block text-transparent bg-gradient-to-r from-green-300 via-blue-400 to-purple-400 bg-clip-text",children:"Personally Recommend"})]}),i.jsxs("p",{className:"text-xl text-gray-200 mb-8 max-w-3xl mx-auto",children:["After ",t," of successful automated trading, these are the essential tools and services that have made my crypto journey profitable and stress-free."]}),i.jsx("div",{className:"bg-gradient-to-r from-gray-900/30 to-purple-900/20 rounded-2xl border border-white/10 p-6 max-w-2xl mx-auto",children:i.jsxs("p",{className:"text-blue-200 font-medium",children:["💡 ",i.jsx("strong",{children:"My Promise:"})," I only recommend tools I personally use and believe provide real value. Your success is my success."]})})]})})]}),i.jsx("section",{className:"py-16 px-4 pb-8",children:i.jsxs("div",{className:"max-w-6xl mx-auto",children:[i.jsxs("div",{className:"text-center mb-12",children:[i.jsxs("div",{className:"inline-flex items-center gap-2 bg-gradient-to-r from-green-500/30 to-emerald-500/30 backdrop-blur-sm rounded-full px-4 py-2 border border-green-400/40 mb-6 shadow-lg shadow-green-500/20",children:[i.jsx(Ye,{className:"w-4 h-4 text-green-300"}),i.jsx("span",{className:"text-green-200 font-medium",children:"Trading Platforms"})]}),i.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-white mb-4",children:"Where I Trade & Why"}),i.jsx("p",{className:"text-gray-300 max-w-2xl mx-auto",children:"You need at least one of these exchanges to work with the AI-Enhanced Autonomous Trader. Both are reliable, secure, and perfect for automated trading."})]}),i.jsx("div",{className:"max-w-2xl mx-auto mb-10",children:i.jsx("img",{src:"/graphics/resources-coinbase-01.webp",alt:"Why Coinbase One - Zero fees comparison showing $3,300+ annual savings",className:"w-full rounded-2xl shadow-xl shadow-blue-500/10 border border-white/10"})}),i.jsxs("div",{className:"bg-gradient-to-r from-gray-900/30 to-purple-900/20 rounded-2xl border border-white/10 p-8 mb-8 shadow-lg shadow-purple-500/10 relative",children:[i.jsx("div",{className:"absolute top-4 right-4 md:top-6 md:right-6",children:i.jsx("div",{className:"bg-gradient-to-r from-green-400 to-emerald-400 text-black px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-bold",children:"ESSENTIAL"})}),i.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 items-center",children:[i.jsxs("div",{className:"mt-8 md:mt-0",children:[i.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[i.jsx("div",{className:"w-12 h-12 bg-blue-500 rounded-xl p-3",children:i.jsx(Nu,{className:"w-full h-full text-white"})}),i.jsx("h3",{className:"text-2xl font-bold text-white",children:"Coinbase One"})]}),i.jsx("p",{className:"text-gray-200 mb-6 leading-relaxed",children:"My primary exchange for automated trading. Coinbase One gives you zero trading fees, which is crucial when you're making multiple trades daily. The API integration is rock-solid for robotic trading."}),i.jsxs("div",{className:"space-y-3 mb-6",children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx(Le,{className:"w-5 h-5 text-green-300 flex-shrink-0"}),i.jsx("span",{className:"text-gray-200",children:"$0 trading fees (saves me hundreds monthly)"})]}),i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx(Le,{className:"w-5 h-5 text-green-300 flex-shrink-0"}),i.jsx("span",{className:"text-gray-200",children:"Perfect API for automated trading"})]}),i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx(Le,{className:"w-5 h-5 text-green-300 flex-shrink-0"}),i.jsx("span",{className:"text-gray-200",children:"Trusted by millions of traders"})]}),i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx(Le,{className:"w-5 h-5 text-green-300 flex-shrink-0"}),i.jsx("span",{className:"text-gray-200",children:"Advanced trading tools included"})]})]}),i.jsxs("a",{href:"https://dailyprofits.link/cba",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/30",children:["Get Coinbase One",i.jsx(Zn,{className:"w-4 h-4"})]})]}),i.jsxs("div",{className:"bg-gray-900/50 rounded-xl p-6 border border-white/10",children:[i.jsx("h4",{className:"text-lg font-semibold text-white mb-4",children:"Why I Choose Coinbase One:"}),i.jsxs("div",{className:"space-y-3 text-sm text-gray-300",children:[i.jsxs("p",{children:["💰 ",i.jsx("strong",{children:"Zero fees"})," mean more profits stay in my pocket"]}),i.jsxs("p",{children:["🤖 ",i.jsx("strong",{children:"API reliability"})," is crucial for automated trading"]}),i.jsxs("p",{children:["🛡️ ",i.jsx("strong",{children:"Security"})," - my funds have always been safe"]}),i.jsxs("p",{children:["📱 ",i.jsx("strong",{children:"Mobile app"})," lets me monitor trades anywhere"]})]})]})]})]}),i.jsxs("div",{className:"bg-gradient-to-r from-gray-900/30 to-purple-900/20 rounded-2xl border border-white/10 p-8 shadow-lg shadow-purple-500/10 relative",children:[i.jsx("div",{className:"absolute top-4 right-4 md:top-6 md:right-6",children:i.jsx("div",{className:"bg-gradient-to-r from-blue-400 to-indigo-400 text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-bold",children:"GREAT ALTERNATIVE"})}),i.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 items-center",children:[i.jsxs("div",{className:"mt-8 md:mt-0",children:[i.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[i.jsx("div",{className:"w-12 h-12 bg-indigo-500 rounded-xl p-3",children:i.jsx(Nu,{className:"w-full h-full text-white"})}),i.jsx("h3",{className:"text-2xl font-bold text-white",children:"Kraken"})]}),i.jsx("p",{className:"text-gray-200 mb-6 leading-relaxed",children:"My alternative exchange for automated trading. Kraken offers excellent API reliability and competitive fees. Great option if you prefer a different platform or want to diversify across exchanges."}),i.jsxs("div",{className:"space-y-3 mb-6",children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx(Le,{className:"w-5 h-5 text-green-300 flex-shrink-0"}),i.jsx("span",{className:"text-gray-200",children:"Low trading fees and excellent API"})]}),i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx(Le,{className:"w-5 h-5 text-green-300 flex-shrink-0"}),i.jsx("span",{className:"text-gray-200",children:"Strong security and reputation"})]}),i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx(Le,{className:"w-5 h-5 text-green-300 flex-shrink-0"}),i.jsx("span",{className:"text-gray-200",children:"Works perfectly with robotic trader"})]}),i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx(Le,{className:"w-5 h-5 text-green-300 flex-shrink-0"}),i.jsx("span",{className:"text-gray-200",children:"Advanced trading features"})]})]}),i.jsxs("a",{href:"https://dailyprofits.link/krak",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-indigo-500/30",children:["Get Kraken Account",i.jsx(Zn,{className:"w-4 h-4"})]})]}),i.jsxs("div",{className:"bg-gray-900/50 rounded-xl p-6 border border-white/10",children:[i.jsx("h4",{className:"text-lg font-semibold text-white mb-4",children:"Why Kraken Works Great:"}),i.jsxs("div",{className:"space-y-3 text-sm text-gray-300",children:[i.jsxs("p",{children:["🔒 ",i.jsx("strong",{children:"Security first"})," - excellent track record"]}),i.jsxs("p",{children:["⚡ ",i.jsx("strong",{children:"Fast API"})," - reliable for automated trading"]}),i.jsxs("p",{children:["💰 ",i.jsx("strong",{children:"Competitive fees"})," - keep more of your profits"]}),i.jsxs("p",{children:["🌍 ",i.jsx("strong",{children:"Global reach"})," - available in most countries"]})]})]})]})]})]})}),i.jsx("section",{className:"py-8 px-4",children:i.jsxs("div",{className:"max-w-6xl mx-auto",children:[i.jsxs("div",{className:"text-center mb-12",children:[i.jsxs("div",{className:"inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/30 to-red-500/30 backdrop-blur-sm rounded-full px-4 py-2 border border-orange-400/40 mb-6 shadow-lg shadow-orange-500/20",children:[i.jsx(Iu,{className:"w-4 h-4 text-orange-300"}),i.jsx("span",{className:"text-orange-200 font-medium",children:"Tax & Accounting"})]}),i.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-white mb-4",children:"Stay Compliant & Organized"}),i.jsx("p",{className:"text-gray-300 max-w-2xl mx-auto",children:"Crypto taxes can be complex. These tools make it simple and ensure you're always compliant with tax regulations."})]}),i.jsx("div",{className:"max-w-2xl mx-auto mb-10",children:i.jsx("img",{src:"/graphics/resources-taxes-01.webp",alt:"500 Trades Tax Nightmare - DIY vs CoinTracker comparison",className:"w-full rounded-2xl shadow-xl shadow-orange-500/10 border border-white/10"})}),i.jsxs("div",{className:"bg-gradient-to-r from-gray-900/30 to-purple-900/20 rounded-2xl border border-white/10 p-8 shadow-lg shadow-purple-500/10 relative",children:[i.jsx("div",{className:"absolute top-4 right-4 md:top-6 md:right-6",children:i.jsx("div",{className:"bg-gradient-to-r from-green-400 to-emerald-400 text-black px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-bold",children:"ESSENTIAL"})}),i.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 items-center",children:[i.jsxs("div",{className:"mt-8 md:mt-0",children:[i.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[i.jsx("div",{className:"w-12 h-12 bg-orange-500 rounded-xl p-3",children:i.jsx(Iu,{className:"w-full h-full text-white"})}),i.jsx("h3",{className:"text-2xl font-bold text-white",children:"CoinTracker"})]}),i.jsx("p",{className:"text-gray-200 mb-6 leading-relaxed",children:"After making hundreds of profitable trades, tax reporting became crucial. CoinTracker automatically tracks everything and generates the reports I need for my accountant. It's saved me countless hours."}),i.jsxs("div",{className:"space-y-3 mb-6",children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx(Le,{className:"w-5 h-5 text-green-300 flex-shrink-0"}),i.jsx("span",{className:"text-gray-200",children:"Automatic trade tracking across exchanges"})]}),i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx(Le,{className:"w-5 h-5 text-green-300 flex-shrink-0"}),i.jsx("span",{className:"text-gray-200",children:"Tax forms ready for filing (8949, Schedule D)"})]}),i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx(Le,{className:"w-5 h-5 text-green-300 flex-shrink-0"}),i.jsx("span",{className:"text-gray-200",children:"Real-time profit/loss tracking"})]}),i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx(Le,{className:"w-5 h-5 text-green-300 flex-shrink-0"}),i.jsx("span",{className:"text-gray-200",children:"Connects to Coinbase & Kraken"})]})]}),i.jsxs("a",{href:"https://dailyprofits.link/cointracker",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/30",children:["Get CoinTracker",i.jsx(Zn,{className:"w-4 h-4"})]})]}),i.jsxs("div",{className:"bg-gray-900/50 rounded-xl p-6 border border-white/10",children:[i.jsx("h4",{className:"text-lg font-semibold text-white mb-4",children:"Why Tax Tracking Matters:"}),i.jsxs("div",{className:"space-y-3 text-sm text-gray-300",children:[i.jsxs("p",{children:["📊 ",i.jsx("strong",{children:"Automated reporting"})," saves hours of manual work"]}),i.jsxs("p",{children:["💼 ",i.jsx("strong",{children:"Professional tax forms"})," ready for your accountant"]}),i.jsxs("p",{children:["🎯 ",i.jsx("strong",{children:"Accurate calculations"})," ensure proper tax compliance"]}),i.jsxs("p",{children:["💰 ",i.jsx("strong",{children:"Maximize deductions"})," and minimize tax liability"]})]})]})]})]})]})}),i.jsx("section",{className:"py-16 px-4",children:i.jsx("div",{className:"max-w-4xl mx-auto text-center",children:i.jsxs("div",{className:"bg-gray-900/50 rounded-2xl border border-white/10 p-8 shadow-lg shadow-purple-500/10",children:[i.jsx("h3",{className:"text-2xl md:text-3xl font-bold text-white mb-4",children:"Ready to Start Your Trading Journey?"}),i.jsxs("p",{className:"text-gray-200 mb-6 max-w-2xl mx-auto",children:["These tools have been essential to my ",n," profit success. GoBabyTrade is the AI-enhanced autonomous trading system I use. Use my link to save $1,000!"]}),i.jsx("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:i.jsxs("a",{href:"https://gobabytrade.com/432706BE",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30",children:["Start Trading – Save $1,000",i.jsx(Pe,{className:"w-4 h-4"})]})})]})})}),i.jsx("section",{className:"py-8 px-4 border-t border-white/10",children:i.jsx("div",{className:"max-w-4xl mx-auto",children:i.jsxs("div",{className:"bg-white/5 rounded-lg p-6 border border-white/10",children:[i.jsx("h4",{className:"text-white font-semibold mb-3",children:"📋 Affiliate Disclosure"}),i.jsx("p",{className:"text-gray-400 text-sm leading-relaxed mb-3",children:"I earn commissions from recommended products and services on this page. This doesn't affect your costs or my recommendations. I only promote tools I personally use and believe provide real value to traders."}),i.jsxs("p",{className:"text-gray-400 text-sm leading-relaxed",children:[i.jsx("strong",{children:"Transparency Promise:"})," Every tool listed here is something I actively use in my own trading setup. Your success with these tools directly impacts my reputation, so I'm incentivized to recommend only the best."]})]})})})]})},f$=function(){return i.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900",children:[i.jsx(kr,{}),i.jsx("section",{className:"py-12 px-4 border-b border-white/10 relative overflow-hidden",children:i.jsx("div",{className:"relative max-w-4xl mx-auto text-center mt-8",children:i.jsxs("div",{className:"mb-8",children:[i.jsxs("div",{className:"inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-400/40 mb-6 shadow-lg shadow-purple-500/20",children:[i.jsx(un,{className:"w-4 h-4 text-purple-300"}),i.jsx("span",{className:"text-purple-200 font-medium",children:"Privacy Policy"})]}),i.jsx("h1",{className:"text-3xl md:text-4xl font-bold text-white mb-4",children:"Privacy Policy"}),i.jsx("p",{className:"text-gray-300 max-w-2xl mx-auto",children:"Your privacy is important to us. This policy explains how we collect, use, and protect your information."}),i.jsx("p",{className:"text-sm text-gray-400 mt-2",children:"Last updated: December 6, 2025"})]})})}),i.jsx("div",{className:"max-w-xl mx-auto mb-12 px-4",children:i.jsx("img",{src:"/graphics/privacy-data-01.webp",alt:"What We Collect vs What We Don't - Privacy protection overview",className:"w-full rounded-2xl shadow-xl shadow-blue-500/10 border border-white/10"})}),i.jsx("section",{className:"py-16 px-4",children:i.jsx("div",{className:"max-w-4xl mx-auto",children:i.jsxs("div",{className:"bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/10 p-8 space-y-8",children:[i.jsxs("div",{children:[i.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[i.jsx(lp,{className:"w-6 h-6 text-blue-300"}),i.jsx("h2",{className:"text-2xl font-bold text-white",children:"Information We Collect"})]}),i.jsxs("div",{className:"space-y-4 text-gray-300",children:[i.jsxs("p",{children:[i.jsx("strong",{className:"text-white",children:"Analytics Data:"})," We use Google Analytics to understand how visitors interact with our website. This includes:"]}),i.jsxs("ul",{className:"list-disc list-inside ml-4 space-y-2",children:[i.jsx("li",{children:"Pages visited and time spent on site"}),i.jsx("li",{children:"Device type, browser, and operating system"}),i.jsx("li",{children:"General geographic location (country/city level)"}),i.jsx("li",{children:"Referral sources (how you found our site)"})]}),i.jsxs("p",{children:[i.jsx("strong",{className:"text-white",children:"Cookies:"})," We use cookies to improve your browsing experience and analyze site traffic. You can disable cookies in your browser settings."]})]})]}),i.jsxs("div",{children:[i.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[i.jsx(un,{className:"w-6 h-6 text-green-300"}),i.jsx("h2",{className:"text-2xl font-bold text-white",children:"How We Use Your Information"})]}),i.jsxs("div",{className:"space-y-4 text-gray-300",children:[i.jsx("p",{children:"We use the information we collect to:"}),i.jsxs("ul",{className:"list-disc list-inside ml-4 space-y-2",children:[i.jsx("li",{children:"Improve our website content and user experience"}),i.jsx("li",{children:"Understand which pages and features are most valuable"}),i.jsx("li",{children:"Analyze traffic patterns and optimize site performance"}),i.jsx("li",{children:"Ensure our content is relevant and helpful"})]}),i.jsxs("p",{children:[i.jsx("strong",{className:"text-white",children:"We do not:"})," Sell, rent, or share your personal information with third parties for marketing purposes."]})]})]}),i.jsxs("div",{children:[i.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[i.jsx(Fv,{className:"w-6 h-6 text-purple-300"}),i.jsx("h2",{className:"text-2xl font-bold text-white",children:"Affiliate Links & Disclosures"})]}),i.jsx("div",{className:"max-w-lg mx-auto mb-6",children:i.jsx("img",{src:"/graphics/privacy-affiliate-01.webp",alt:"How Affiliate Links Work - Transparency explanation",className:"w-full rounded-xl shadow-lg shadow-purple-500/10 border border-white/10"})}),i.jsxs("div",{className:"space-y-4 text-gray-300",children:[i.jsxs("p",{children:[i.jsx("strong",{className:"text-white",children:"Affiliate Relationships:"})," ","This website contains affiliate links to products and services we recommend. This means:"]}),i.jsxs("ul",{className:"list-disc list-inside ml-4 space-y-2",children:[i.jsx("li",{children:"We may earn a commission if you make a purchase through our links"}),i.jsx("li",{children:"This does not affect the price you pay"}),i.jsx("li",{children:"We only recommend tools and services we personally use and believe in"}),i.jsx("li",{children:"Our recommendations are based on genuine experience and results"})]}),i.jsx("div",{className:"bg-blue-500/10 border border-blue-400/20 rounded-lg p-4 mt-4",children:i.jsxs("p",{className:"text-blue-200",children:[i.jsx("strong",{children:"Transparency Promise:"})," All trading results shown are real and from Patrick's personal trading account. We believe in complete transparency about both our results and our affiliate relationships."]})})]})]}),i.jsxs("div",{children:[i.jsx("h2",{className:"text-2xl font-bold text-white mb-4",children:"Third-Party Services"}),i.jsxs("div",{className:"space-y-4 text-gray-300",children:[i.jsx("p",{children:"Our website uses the following third-party services:"}),i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mt-4",children:[i.jsxs("div",{className:"bg-white/5 rounded-lg p-4",children:[i.jsx("h3",{className:"text-white font-semibold mb-2",children:"Google Analytics"}),i.jsx("p",{className:"text-sm",children:"Website traffic analysis and user behavior tracking."}),i.jsx("a",{href:"https://policies.google.com/privacy",target:"_blank",rel:"noopener noreferrer",className:"text-blue-300 hover:text-blue-200 text-sm",children:"Google Privacy Policy â†’"})]}),i.jsxs("div",{className:"bg-white/5 rounded-lg p-4",children:[i.jsx("h3",{className:"text-white font-semibold mb-2",children:"Cloudflare Pages"}),i.jsx("p",{className:"text-sm",children:"Website hosting and content delivery network."}),i.jsx("a",{href:"https://www.cloudflare.com/privacy/",target:"_blank",rel:"noopener noreferrer",className:"text-blue-300 hover:text-blue-200 text-sm",children:"Cloudflare Privacy Policy â†’"})]})]})]})]}),i.jsxs("div",{children:[i.jsx("h2",{className:"text-2xl font-bold text-white mb-4",children:"Your Rights & Choices"}),i.jsxs("div",{className:"space-y-4 text-gray-300",children:[i.jsx("p",{children:"You have the right to:"}),i.jsxs("ul",{className:"list-disc list-inside ml-4 space-y-2",children:[i.jsx("li",{children:"Opt out of Google Analytics tracking by using browser settings or extensions"}),i.jsx("li",{children:"Disable cookies in your browser (may affect site functionality)"}),i.jsx("li",{children:"Request information about data we may have collected"}),i.jsx("li",{children:"Contact us with any privacy-related questions or concerns"})]})]})]}),i.jsxs("div",{children:[i.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[i.jsx(Hv,{className:"w-6 h-6 text-yellow-300"}),i.jsx("h2",{className:"text-2xl font-bold text-white",children:"Contact Us"})]}),i.jsxs("div",{className:"space-y-4 text-gray-300",children:[i.jsx("p",{children:"If you have any questions about this Privacy Policy or our data practices, please contact us:"}),i.jsxs("div",{className:"bg-white/5 rounded-lg p-4",children:[i.jsxs("p",{children:[i.jsx("strong",{className:"text-white",children:"Website:"})," ","MyRoboticTrader.com"]}),i.jsxs("p",{children:[i.jsx("strong",{className:"text-white",children:"Twitter:"})," ","@myrobotictrader"]}),i.jsxs("p",{children:[i.jsx("strong",{className:"text-white",children:"Email:"})," Available through our social media channels"]})]})]})]}),i.jsxs("div",{children:[i.jsx("h2",{className:"text-2xl font-bold text-white mb-4",children:"Policy Updates"}),i.jsx("div",{className:"text-gray-300",children:i.jsx("p",{children:'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last modified" date. We encourage you to review this policy periodically.'})})]})]})})}),i.jsx("section",{className:"py-8 px-4 border-t border-white/10",children:i.jsx("div",{className:"max-w-4xl mx-auto text-center",children:i.jsxs("a",{href:"/",className:"inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30",children:[i.jsx(Mv,{className:"w-4 h-4"}),"Back to MyRoboticTrader"]})})})]})},y$=()=>{var l,c;const{tradingStats:e,isLoading:t}=Xr(),n=Ho(),r="https://gobabytrade.com/432706BE?utm_source=business_card&utm_medium=nfc_qr&utm_campaign=live_results_2025";if(t||!e)return i.jsxs("section",{className:"relative min-h-screen flex items-center justify-center px-4",children:[i.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"}),i.jsx("div",{className:"relative text-white text-xl",children:"Loading live data..."})]});const a=e.dailyAvg.toFixed(2),o=((l=e.monthlyData)==null?void 0:l.length)||0,s=((c=e.monthlyData)==null?void 0:c.filter(u=>u.profit>0).length)||0;return i.jsxs("section",{className:"relative min-h-screen flex items-center justify-center px-4 overflow-hidden pb-10 pt-10",children:[i.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"}),i.jsx("div",{className:"absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-purple-500/15 to-transparent"}),i.jsx("div",{className:"absolute top-8 left-1/2 transform -translate-x-1/2 z-20",children:i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx("div",{className:"w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-purple-500/40 bg-gradient-to-br from-purple-500 to-pink-500 p-0.5",children:i.jsx("div",{className:"w-full h-full rounded-lg overflow-hidden bg-white/10 backdrop-blur-sm",children:i.jsx("img",{src:"/robot-logo.png",alt:"MyRoboticTrader Robot",className:"w-full h-full object-cover"})})}),i.jsxs("div",{className:"text-2xl font-bold",children:[i.jsx("span",{className:"text-white",children:"My"}),i.jsx("span",{className:"text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text",children:"Robotic"}),i.jsx("span",{className:"text-white",children:"Trader"}),i.jsx("span",{className:"text-purple-300 text-sm ml-1",children:".com"})]})]})}),i.jsxs("div",{className:"relative max-w-6xl mx-auto text-center z-10 mt-16",children:[i.jsxs("div",{className:"mb-8",children:[i.jsxs("div",{className:"inline-flex items-center gap-2 bg-gradient-to-r from-green-500/30 to-emerald-500/30 backdrop-blur-sm rounded-full px-4 py-2 border border-green-400/40 mb-6 shadow-lg shadow-green-500/20",children:[i.jsx("div",{className:"w-3 h-3 bg-green-400 rounded-full animate-pulse"}),i.jsx("span",{className:"text-green-200 font-medium",children:e.isLiveData?"LIVE DATA":"REAL RESULTS"})]}),i.jsxs("div",{className:"mb-6",children:[i.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-white mb-4 leading-tight",children:"Thanks for scanning my card! 👋"}),i.jsx("p",{className:"text-xl md:text-2xl text-gray-200 mb-2",children:"Here are my LIVE trading results:"}),i.jsx("p",{className:"text-lg text-purple-200",children:"Real profits. Real transparency. Zero BS."})]})]}),i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10",children:[i.jsxs("div",{className:"group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-green-500/15",children:[i.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"}),i.jsx("div",{className:"relative w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/40",children:i.jsx(Bn,{className:"w-full h-full text-white"})}),i.jsxs("div",{className:"relative text-center",children:[i.jsxs("div",{className:"text-4xl font-bold text-green-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-300 group-hover:to-emerald-300 group-hover:bg-clip-text transition-all duration-300 font-mono",children:["$",e.totalProfit.toLocaleString()]}),i.jsx("div",{className:"text-gray-200 font-medium group-hover:text-white transition-colors duration-300",children:"Total Profits"}),i.jsxs("div",{className:"text-green-300 text-sm mt-1",children:[n," • Always Growing!"]})]}),i.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"})]}),i.jsxs("div",{className:"group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-orange-500/15",children:[i.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"}),i.jsx("div",{className:"relative w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/40",children:i.jsx(nr,{className:"w-full h-full text-white"})}),i.jsxs("div",{className:"relative text-center",children:[i.jsx("div",{className:"text-4xl font-bold text-orange-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-300 group-hover:to-amber-300 group-hover:bg-clip-text transition-all duration-300 font-mono",children:e.totalTrades.toLocaleString()}),i.jsx("div",{className:"text-gray-200 font-medium group-hover:text-white transition-colors duration-300",children:"Closed Trades"}),i.jsx("div",{className:"text-orange-300 text-sm mt-1",children:"Consistent & Automated"})]}),i.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"})]}),i.jsxs("div",{className:"group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-purple-500/15",children:[i.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"}),i.jsx("div",{className:"relative w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/40",children:i.jsx(Ye,{className:"w-full h-full text-white"})}),i.jsxs("div",{className:"relative text-center",children:[i.jsxs("div",{className:"text-4xl font-bold text-purple-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 group-hover:bg-clip-text transition-all duration-300 font-mono",children:["$",a]}),i.jsx("div",{className:"text-gray-200 font-medium group-hover:text-white transition-colors duration-300",children:"Daily Average"}),i.jsx("div",{className:"text-purple-300 text-sm mt-1",children:"Steady Growth"})]}),i.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"})]})]}),i.jsx("div",{className:"max-w-2xl mx-auto mb-10",children:i.jsxs("div",{className:"bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-2xl border border-green-400/30 p-6 shadow-lg shadow-green-500/20",children:[i.jsxs("div",{className:"flex items-center justify-center gap-3 mb-2",children:[i.jsx("div",{className:"w-3 h-3 bg-green-400 rounded-full animate-pulse"}),i.jsxs("span",{className:"text-green-300 font-bold text-lg",children:[o," Months. ",s," Winning Months."]}),i.jsx("div",{className:"w-3 h-3 bg-green-400 rounded-full animate-pulse"})]}),i.jsx("p",{className:"text-gray-200 text-sm text-center",children:"100% profitable months since January 2025 • Every. Single. Month."})]})}),i.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center mb-12",children:[i.jsxs("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-purple-500/30 flex items-center justify-center gap-2",children:["Start Trading – Save $1,000",i.jsx(Zn,{className:"w-5 h-5 group-hover:translate-x-1 transition-transform"})]}),i.jsxs("a",{href:"/",className:"group border-2 border-white/40 hover:border-white/60 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm hover:bg-white/15 flex items-center justify-center gap-2 shadow-lg shadow-white/10",children:[i.jsx(Uv,{className:"w-5 h-5"}),"Explore Full Site",i.jsx(Pe,{className:"w-5 h-5 group-hover:translate-x-1 transition-transform"})]})]}),i.jsxs("div",{className:"text-center",children:[i.jsx("p",{className:"text-sm text-yellow-300 font-medium mb-4",children:"🎯 GoBabyTrade™ is the AI-enhanced system I use – save $1,000 with my link!"}),i.jsx("p",{className:"text-xs text-gray-500 max-w-sm mx-auto leading-relaxed",children:"* Actual trading results from my personal account. Started January 8, 2025. Past performance does not guarantee future results."})]})]})]})},b$=()=>{const e=Yi(ka),[t,n]=St.useState(null),r=[...new Set(e.map(c=>c.category))],o=[...t?e.filter(c=>c.category===t):e].sort((c,u)=>mr(u).getTime()-mr(c).getTime()),s=c=>new Date(c).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),l=(c,u=200)=>{const d=c.replace(/^#+\s/gm,"").replace(/\*\*/g,"").replace(/\*/g,"").replace(/\[([^\]]+)\]\([^\)]+\)/g,"$1").replace(/\n/g," ");return d.length<=u?d:d.substring(0,u).trim()+"..."};return i.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white",children:[i.jsx(kr,{}),i.jsx("section",{className:"py-12 px-4 relative overflow-hidden",children:i.jsx("div",{className:"relative max-w-6xl mx-auto text-center mt-8",children:i.jsxs("div",{className:"mb-8",children:[i.jsx("div",{className:"inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-400/40 mb-6 shadow-lg shadow-purple-500/20",children:i.jsx("span",{className:"text-purple-200 font-medium",children:"Trading Education"})}),i.jsxs("h1",{className:"text-5xl md:text-6xl font-bold mb-6",children:[i.jsx("span",{className:"text-white",children:"Blog & "}),i.jsx("span",{className:"text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text",children:"Insights"})]}),i.jsx("p",{className:"text-xl text-gray-200 max-w-3xl mx-auto",children:"Real insights from building transparent, systematic crypto trading systems. No hype, just facts and lessons learned."})]})})}),i.jsx("div",{className:"relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:i.jsxs("div",{className:"flex flex-wrap gap-4 justify-center",children:[i.jsx("button",{onClick:()=>n(null),className:`px-6 py-3 rounded-full transition-all duration-300 backdrop-blur-sm shadow-lg font-semibold text-sm ${t===null?"bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-2 border-purple-400/60 text-white shadow-purple-500/20":"bg-white/8 hover:bg-white/12 border border-white/20 hover:border-purple-400/30 text-gray-300 hover:text-white"}`,children:"All Posts"}),r.map(c=>i.jsx("button",{onClick:()=>n(c),className:`px-6 py-3 rounded-full transition-all duration-300 backdrop-blur-sm shadow-lg font-semibold text-sm ${t===c?"bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-2 border-purple-400/60 text-white shadow-purple-500/20":"bg-white/8 hover:bg-white/12 border border-white/20 hover:border-purple-400/30 text-gray-300 hover:text-white"}`,children:c},c))]})}),i.jsxs("div",{className:"relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-16",children:[i.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:o.map(c=>i.jsx(Ue,{to:`/blog/${c.slug}`,className:"group",children:i.jsxs("article",{className:"h-full rounded-2xl overflow-hidden border border-white/10 hover:border-purple-400/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-purple-500/10 cursor-pointer relative bg-gray-900/50",children:[i.jsx("div",{className:"h-40 overflow-hidden",children:i.jsx("img",{src:c.heroImage,alt:c.imageAlt,className:"w-full h-full object-cover group-hover:scale-110 transition-all duration-300",style:{filter:"brightness(0.85)"}})}),i.jsxs("div",{className:"p-6 relative",children:[i.jsx("h2",{className:"text-2xl font-bold mb-3 text-white group-hover:text-purple-200 transition-colors duration-300",children:c.title}),i.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[i.jsx("span",{className:"inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30",children:c.category}),i.jsx("span",{className:"text-gray-500",children:"•"}),i.jsx("span",{className:"text-gray-400 text-sm",children:s(c.date)})]}),i.jsx("p",{className:"text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300",children:c.excerpt||l(c.content,150)}),i.jsxs("div",{className:"flex items-center text-purple-400 font-semibold group-hover:text-purple-300 transition-colors",children:["Read Full Article",i.jsx("svg",{className:"w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})]})]})]})},c.slug))}),i.jsx("div",{className:"relative mt-8 text-center bg-gray-900/50 rounded-2xl px-8 py-16 md:px-16 md:py-24 border border-white/10 shadow-2xl shadow-purple-500/10",children:i.jsxs("div",{className:"relative",children:[i.jsxs("h2",{className:"text-3xl md:text-4xl font-bold mb-10 leading-tight",children:[i.jsx("span",{className:"text-white",children:"Want to See These "}),i.jsx("span",{className:"text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text",children:"Strategies in Action?"})]}),i.jsx("p",{className:"text-gray-200 text-lg md:text-xl mb-16 max-w-2xl mx-auto leading-relaxed",children:"Check out our live trading dashboard with complete transparency - every trade, every profit, updated automatically."}),i.jsxs(Ue,{to:"/",className:"group inline-flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full font-semibold text-white text-base transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30 hover:shadow-2xl whitespace-nowrap",children:[i.jsx("span",{children:"View Live Results"}),i.jsx("svg",{className:"w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})]})]})})]})]})},v$=({currentSlug:e})=>{const t=Yi(ka).filter(n=>n.slug!==e).sort((n,r)=>mr(r).getTime()-mr(n).getTime()).slice(0,5);return i.jsx("div",{children:i.jsxs("div",{className:"bg-slate-900/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-purple-400/30 shadow-lg shadow-purple-500/10",children:[i.jsx("h3",{className:"text-2xl md:text-3xl font-bold mb-6 text-white pb-3 border-b border-purple-400/30",children:"Recent Posts"}),i.jsx("div",{className:"space-y-4",children:t.map(n=>i.jsxs(Ue,{to:`/blog/${n.slug}`,className:"group flex gap-4 transition-all duration-300 hover:translate-x-1",children:[i.jsx("div",{className:"flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden",children:i.jsx("img",{src:n.heroImage,alt:n.imageAlt,className:"w-full h-full object-cover group-hover:scale-110 transition-transform duration-300",style:{filter:"brightness(0.85)"}})}),i.jsxs("div",{className:"flex-1 min-w-0",children:[i.jsx("h4",{className:"text-white font-semibold text-sm leading-tight mb-1 group-hover:text-purple-300 transition-colors line-clamp-2",children:n.title}),i.jsx("span",{className:"text-xs text-purple-400",children:n.category})]})]},n.slug))})]})})},w$=({currentSlug:e,currentCategory:t,maxPosts:n=3})=>{const r=Yi(ka),o=(()=>{const l=r.filter(u=>u.slug!==e&&u.category===t);if(l.length>=n)return l.slice(0,n);const c=r.filter(u=>u.slug!==e&&u.category!==t);return[...l,...c].slice(0,n)})();if(o.length===0)return null;const s=l=>new Date(l).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});return i.jsxs("section",{className:"mt-16 pt-12 border-t border-white/10",children:[i.jsxs("div",{className:"flex items-center gap-3 mb-8",children:[i.jsx("div",{className:"p-2 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 shadow-lg",children:i.jsx(jl,{className:"w-5 h-5 text-white"})}),i.jsx("h2",{className:"text-2xl font-bold text-white",children:"Keep Reading"})]}),i.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:o.map(l=>i.jsxs(Ue,{to:`/blog/${l.slug}`,className:"group block bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10",children:[i.jsx("div",{className:"aspect-video overflow-hidden",children:i.jsx("img",{src:l.heroImage,alt:l.imageAlt||l.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",loading:"lazy"})}),i.jsxs("div",{className:"p-4",children:[i.jsx("span",{className:"inline-block px-2 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full mb-3",children:l.category}),i.jsx("h3",{className:"text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-purple-300 transition-colors",children:l.title}),i.jsx("p",{className:"text-gray-400 text-sm line-clamp-2 mb-3",children:l.excerpt||l.metaDescription}),i.jsxs("div",{className:"flex items-center justify-between text-sm",children:[i.jsx("span",{className:"text-gray-500",children:s(l.date)}),i.jsxs("span",{className:"text-purple-400 flex items-center gap-1 group-hover:gap-2 transition-all",children:["Read more ",i.jsx(Pe,{className:"w-4 h-4"})]})]})]})]},l.slug))}),i.jsx("div",{className:"text-center mt-8",children:i.jsxs(Ue,{to:"/blog",className:"inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-medium",children:["View all posts ",i.jsx(Pe,{className:"w-4 h-4"})]})})]})},M={slideContainer:"rounded-2xl overflow-hidden bg-gradient-to-r from-gray-900/80 to-purple-900/40 p-4 md:p-8 lg:p-10 border border-white/10 backdrop-blur-sm",card:"bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20",cardHover:"bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300",cardSm:"bg-white/8 backdrop-blur-sm rounded-xl p-4 border border-white/20",cardInner:"bg-gray-900/50 rounded-xl p-4 border border-white/10",callout:"bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-xl p-4 border border-purple-400/30",calloutWarning:"bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm rounded-xl p-4 border border-red-400/30",calloutSuccess:"bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-xl p-4 border border-green-400/30",table:"w-full text-left border-collapse",tableHeader:"border-b border-purple-400/30",tableHeaderCell:"py-3 px-4 text-purple-300 font-semibold text-sm",tableRow:"border-b border-slate-700/50 hover:bg-slate-800/30",tableCell:"py-3 px-4 text-slate-300 text-sm",slideTitle:"text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 md:mb-2",slideSubtitle:"text-gray-300 text-sm md:text-base",source:"text-center text-gray-500 text-xs italic mt-6",sectionTitle:"text-xl font-bold text-white mb-4",positive:"text-green-400",positiveBold:"text-green-300 font-bold",negative:"text-red-400",negativeBold:"text-red-400 font-bold",gold:"text-yellow-400",goldBold:"text-yellow-400 font-bold",blue:"text-blue-400",blueBold:"text-blue-400 font-bold",orange:"text-orange-400",orangeBold:"text-orange-300 font-bold",purple:"text-purple-400",purpleBold:"text-purple-300 font-bold",muted:"text-gray-400",mutedLight:"text-gray-300",barBlue:"linear-gradient(to top, #2563eb, #60a5fa)",barGreen:"linear-gradient(to top, #16a34a, #4ade80)",barGold:"linear-gradient(to top, #ca8a04, #facc15)",barRed:"linear-gradient(to top, #b91c1c, #ef4444)",avatarGold:"w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-2 border-yellow-400",imageRounded:"rounded-xl object-cover",divider:"border-b border-slate-700/50 pb-2 mb-2",dividerLight:"border-b border-white/10 pb-2 mb-2",slideWrapper:"my-10",textAfterSlide:"mt-8",textBeforeSlide:"mb-6"},$t=({children:e,source:t})=>i.jsxs("div",{className:M.slideContainer,children:[e,t&&i.jsxs("p",{className:M.source,children:["Source: ",t]})]}),Dt=({title:e,subtitle:t})=>i.jsxs("div",{className:"text-center mb-4 md:mb-8",children:[i.jsx("h3",{className:M.slideTitle,children:e}),t&&i.jsx("p",{className:M.slideSubtitle,children:t})]}),x$=()=>i.jsxs($t,{children:[i.jsx(Dt,{title:"Annualized Returns Since 1928",subtitle:"Nearly a century of data tells the story"}),i.jsxs("div",{className:"flex justify-center items-end gap-10 md:gap-20 mt-6 md:mt-8",children:[i.jsxs("div",{className:"flex flex-col items-center",children:[i.jsx("span",{className:"text-2xl md:text-3xl font-bold text-green-400 mb-2",children:"9.9%"}),i.jsx("div",{className:"w-12 md:w-20 rounded-t-lg",style:{height:"140px",backgroundColor:"#4ade80"}}),i.jsx("span",{className:"text-green-400 font-medium mt-2 md:mt-3 text-sm md:text-base",children:"S&P 500"})]}),i.jsxs("div",{className:"flex flex-col items-center",children:[i.jsx("span",{className:"text-2xl md:text-3xl font-bold text-yellow-500 mb-2",children:"5.0%"}),i.jsx("div",{className:"w-12 md:w-20 rounded-t-lg",style:{height:"70px",backgroundColor:"#eab308"}}),i.jsx("span",{className:"text-yellow-500 font-medium mt-2 md:mt-3 text-sm md:text-base",children:"Gold"})]})]})]}),k$=()=>i.jsxs($t,{source:"Kiplinger",children:[i.jsx(Dt,{title:"40-Year Reality Check",subtitle:"1984-2024 Returns: Nominal vs After Inflation"}),i.jsxs("div",{className:"flex justify-center items-end gap-4 md:gap-12 mt-4 md:mt-8",children:[i.jsxs("div",{className:"text-center",children:[i.jsxs("div",{className:"flex items-end gap-1 md:gap-2 justify-center",children:[i.jsxs("div",{className:"flex flex-col items-center",children:[i.jsx("span",{className:`text-sm md:text-lg font-bold ${M.gold} mb-1 md:mb-2`,children:"4.3%"}),i.jsx("div",{className:"w-10 md:w-20 rounded-t-lg",style:{height:"65px",background:M.barGold}})]}),i.jsxs("div",{className:"flex flex-col items-center",children:[i.jsx("span",{className:`text-sm md:text-lg font-bold ${M.negative} mb-1 md:mb-2`,children:"1.5%"}),i.jsx("div",{className:"w-10 md:w-20 rounded-t-lg",style:{height:"23px",background:M.barRed}})]})]}),i.jsx("span",{className:`${M.goldBold} mt-2 md:mt-4 block text-sm md:text-base`,children:"GOLD"})]}),i.jsxs("div",{className:"text-center",children:[i.jsxs("div",{className:"flex items-end gap-1 md:gap-2 justify-center",children:[i.jsxs("div",{className:"flex flex-col items-center",children:[i.jsx("span",{className:`text-sm md:text-lg font-bold ${M.positive} mb-1 md:mb-2`,children:"11.6%"}),i.jsx("div",{className:"w-10 md:w-20 rounded-t-lg",style:{height:"125px",background:M.barBlue}})]}),i.jsxs("div",{className:"flex flex-col items-center",children:[i.jsx("span",{className:`text-sm md:text-lg font-bold ${M.positive} mb-1 md:mb-2`,children:"8.6%"}),i.jsx("div",{className:"w-10 md:w-20 rounded-t-lg",style:{height:"92px",background:M.barGreen}})]})]}),i.jsx("span",{className:`${M.blueBold} mt-2 md:mt-4 block text-sm md:text-base`,children:"S&P 500"})]})]}),i.jsx("p",{className:`${M.muted} text-xs md:text-sm text-center mt-4 md:mt-6`,children:"Darker = Nominal   |   Lighter = After Inflation"})]}),T$=()=>i.jsxs($t,{source:"QuantifiedStrategies.com",children:[i.jsx(Dt,{title:"The Lost Decades",subtitle:"Gold's 20-Year Nightmare: 1980-2000"}),i.jsxs("div",{className:"grid md:grid-cols-2 gap-6 mt-8",children:[i.jsxs("div",{className:`${M.card} text-center`,children:[i.jsx("h4",{className:`${M.goldBold} text-xl mb-4`,children:"GOLD"}),i.jsx("div",{className:"flex items-center justify-center mb-4",children:i.jsx("svg",{className:`w-16 h-16 ${M.negative}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"})})}),i.jsx("p",{className:`${M.negativeBold} text-3xl md:text-4xl mb-2`,children:"-4.0%"}),i.jsx("p",{className:`${M.muted} text-sm`,children:"Total return over 20 years"}),i.jsx("p",{className:`${M.negative} text-xs mt-2`,children:"Lost money for TWO decades straight"})]}),i.jsxs("div",{className:`${M.card} text-center`,children:[i.jsx("h4",{className:`${M.blueBold} text-xl mb-4`,children:"S&P 500"}),i.jsx("div",{className:"flex items-center justify-center mb-4",children:i.jsx("svg",{className:`w-16 h-16 ${M.positive}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})})}),i.jsx("p",{className:`${M.positiveBold} text-3xl md:text-4xl mb-2`,children:"+1,200%"}),i.jsx("p",{className:`${M.muted} text-sm`,children:"Total return over 20 years"}),i.jsx("p",{className:`${M.positive} text-xs mt-2`,children:"Including the 1990s bull market"})]})]}),i.jsx("div",{className:`${M.callout} mt-6 text-center max-w-2xl mx-auto`,children:i.jsxs("p",{className:"text-white font-bold text-base md:text-lg",children:["Gold was the ",i.jsx("span",{className:M.negative,children:"ONLY major asset class"})," with negative returns across two consecutive decades"]})})]}),I$=()=>i.jsxs($t,{source:"IRS Topic 409",children:[i.jsx(Dt,{title:"IRS Tax Treatment",subtitle:'Gold is taxed as a "Collectible" — same as art, rugs, and wine'}),i.jsxs("div",{className:"grid md:grid-cols-2 gap-6 mt-8",children:[i.jsxs("div",{className:M.card,children:[i.jsx("h4",{className:`${M.goldBold} text-xl text-center mb-2`,children:"GOLD"}),i.jsx("p",{className:`${M.muted} text-sm text-center mb-4`,children:"Collectible Tax Rate"}),i.jsx("p",{className:`${M.negativeBold} text-5xl md:text-6xl text-center mb-2`,children:"28%"}),i.jsx("p",{className:`${M.muted} text-sm text-center mb-6`,children:"Maximum Rate"}),i.jsxs("ul",{className:"text-white text-sm space-y-2",children:[i.jsx("li",{className:"text-center",children:"Art & Antiques"}),i.jsx("li",{className:"text-center",children:"Rugs & Stamps"}),i.jsx("li",{className:"text-center",children:"Wine & Coins"})]})]}),i.jsxs("div",{className:M.card,children:[i.jsx("h4",{className:`${M.positiveBold} text-xl text-center mb-2`,children:"STOCKS"}),i.jsx("p",{className:`${M.muted} text-sm text-center mb-4`,children:"Long-Term Capital Gains"}),i.jsx("p",{className:`${M.positiveBold} text-5xl md:text-6xl text-center mb-2`,children:"0-20%"}),i.jsx("p",{className:`${M.muted} text-sm text-center mb-6`,children:"Based on Income"}),i.jsxs("ul",{className:"text-white text-sm space-y-2",children:[i.jsx("li",{className:"text-center",children:"0% (up to $44K)"}),i.jsx("li",{className:"text-center",children:"15% ($44K-$492K)"}),i.jsx("li",{className:"text-center",children:"20% (above $492K)"})]})]})]})]}),j$=()=>i.jsxs($t,{children:[i.jsx(Dt,{title:"Real Tax Impact",subtitle:"$100,000 Profit Scenario"}),i.jsxs("div",{className:"grid md:grid-cols-2 gap-6 mt-8",children:[i.jsxs("div",{className:`${M.card} p-8 text-center`,children:[i.jsx("h4",{className:`${M.positiveBold} text-xl mb-4`,children:"STOCKS"}),i.jsx("p",{className:"text-white font-bold text-4xl md:text-5xl mb-2",children:"$20,000"}),i.jsx("p",{className:M.muted,children:"Tax Owed (20%)"})]}),i.jsxs("div",{className:`${M.card} p-8 text-center`,children:[i.jsx("h4",{className:`${M.goldBold} text-xl mb-4`,children:"GOLD"}),i.jsx("p",{className:`${M.negativeBold} text-4xl md:text-5xl mb-2`,children:"$28,000"}),i.jsx("p",{className:M.muted,children:"Tax Owed (28%)"})]})]}),i.jsxs("div",{className:`${M.calloutWarning} mt-6 text-center max-w-lg mx-auto`,children:[i.jsx("p",{className:`${M.negativeBold} text-lg md:text-xl`,children:"That's $8,000 MORE to the IRS"}),i.jsx("p",{className:"text-white text-sm",children:"on the exact same gain!"})]})]}),A$=()=>i.jsxs($t,{children:[i.jsx(Dt,{title:"Storage Fees Eat Your Gains"}),i.jsxs("div",{className:"space-y-4 md:space-y-6 mt-6 md:mt-8",children:[i.jsxs("div",{className:"flex flex-wrap items-baseline gap-2 md:gap-4",children:[i.jsx("span",{className:`${M.goldBold} text-4xl md:text-6xl`,children:"0.5%"}),i.jsx("span",{className:"text-white text-lg md:text-xl",children:"annual storage fee"})]}),i.jsxs("div",{className:"flex flex-wrap items-baseline gap-2 md:gap-4",children:[i.jsx("span",{className:"text-gray-500 text-2xl md:text-3xl",children:"="}),i.jsx("span",{className:`${M.negativeBold} text-2xl md:text-3xl`,children:"$500/year"}),i.jsx("span",{className:`${M.muted} text-sm md:text-base`,children:"on $100,000"})]})]}),i.jsxs("div",{className:`${M.calloutWarning} mt-6 md:mt-8 text-center`,children:[i.jsx("p",{className:`${M.negativeBold} text-lg md:text-2xl mb-2`,children:"Over 20 years = $10,000+ in storage fees alone"}),i.jsx("p",{className:`${M.muted} text-sm md:text-base mb-2`,children:"With gold returning only ~5% annually..."}),i.jsx("p",{className:"text-white font-bold text-sm md:text-base",children:"Storage eats 10-20% of your total gains!"})]})]}),N$=()=>i.jsxs($t,{source:"CFTC warns of 20-400% dealer markups",children:[i.jsx(Dt,{title:'The "Free Gold" Trap',subtitle:"How 'free' gifts actually cost you thousands"}),i.jsxs("div",{className:"grid md:grid-cols-2 gap-8 mt-8",children:[i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{className:M.divider+" flex justify-between",children:[i.jsx("span",{className:M.muted,children:"You invest:"}),i.jsx("span",{className:"text-white font-bold",children:"$100,000"})]}),i.jsxs("div",{className:M.divider+" flex justify-between",children:[i.jsx("span",{className:M.muted,children:'+ "Free" gold:'}),i.jsx("span",{className:M.goldBold,children:"$10,000"})]}),i.jsxs("div",{className:M.divider+" flex justify-between",children:[i.jsx("span",{className:M.muted,children:"Account shows:"}),i.jsx("span",{className:"text-white font-bold",children:"$110,000"})]}),i.jsxs("div",{className:M.divider+" flex justify-between",children:[i.jsx("span",{className:M.muted,children:"Try to sell:"}),i.jsx("span",{className:M.negativeBold,children:"-25% markup"})]}),i.jsxs("div",{className:"flex justify-between",children:[i.jsx("span",{className:M.muted,children:"You get back:"}),i.jsx("span",{className:M.negativeBold,children:"$82,500"})]})]}),i.jsxs("div",{className:`${M.card} flex flex-col justify-center`,children:[i.jsx("p",{className:`${M.muted} text-sm text-center mb-2`,children:'YOUR "FREE" GIFT'}),i.jsx("p",{className:"text-white text-center mb-2",children:"Actually cost you"}),i.jsx("p",{className:`${M.negativeBold} text-5xl text-center mb-2`,children:"$17,500"}),i.jsx("p",{className:`${M.muted} text-sm text-center`,children:"in hidden markups"})]})]})]}),S$=()=>i.jsxs($t,{source:"CFTC Consumer Advisory",children:[i.jsx(Dt,{title:"Coins vs Bars: The Markup Game",subtitle:"Why dealers push coins over bars"}),i.jsxs("div",{className:"grid md:grid-cols-2 gap-6 mt-8",children:[i.jsxs("div",{className:M.card,children:[i.jsx("h4",{className:`${M.goldBold} text-xl text-center mb-4`,children:"COINS"}),i.jsx("p",{className:`${M.negativeBold} text-4xl md:text-5xl text-center mb-2`,children:"40-200%"}),i.jsx("p",{className:`${M.muted} text-sm text-center mb-6`,children:"Premium Over Spot"}),i.jsxs("ul",{className:"text-white text-sm space-y-2",children:[i.jsx("li",{className:"text-center",children:'"Rare" & "Collectible"'}),i.jsx("li",{className:"text-center",children:'"Limited Edition"'}),i.jsx("li",{className:"text-center",children:'"Certified" graded'})]}),i.jsx("p",{className:`${M.negativeBold} text-sm text-center mt-4`,children:"= Higher dealer margins"})]}),i.jsxs("div",{className:M.card,children:[i.jsx("h4",{className:"text-white font-bold text-xl text-center mb-4",children:"BARS"}),i.jsx("p",{className:`${M.positiveBold} text-4xl md:text-5xl text-center mb-2`,children:"2-5%"}),i.jsx("p",{className:`${M.muted} text-sm text-center mb-6`,children:"Premium Over Spot"}),i.jsxs("ul",{className:"text-white text-sm space-y-2",children:[i.jsx("li",{className:"text-center",children:'Simple, no "story"'}),i.jsx("li",{className:"text-center",children:"Harder to markup"}),i.jsx("li",{className:"text-center",children:"Lower commissions"})]}),i.jsx("p",{className:`${M.positiveBold} text-sm text-center mt-4`,children:"= Dealers don't push these"})]})]})]}),P$=()=>i.jsxs($t,{children:[i.jsx(Dt,{title:"The Celebrity Trust Machine",subtitle:"Same playbook, different face"}),i.jsxs("div",{className:"grid md:grid-cols-2 gap-6 mt-8",children:[i.jsxs("div",{className:`${M.card} p-4 md:p-6`,children:[i.jsx("div",{className:"flex justify-center mb-4",children:i.jsx("img",{src:"/blog-images/william-devane-gold.jpg",alt:"William Devane in Rosland Capital commercial",className:M.avatarGold})}),i.jsx("h4",{className:"text-white font-bold text-xl text-center mb-1",children:"William Devane"}),i.jsx("p",{className:`${M.gold} text-center mb-1`,children:"Rosland Capital"}),i.jsx("p",{className:`${M.muted} text-sm text-center mb-3`,children:"Since 2012"}),i.jsxs("ul",{className:"text-white text-xs md:text-sm space-y-1",children:[i.jsx("li",{className:"text-center",children:'Known for: "24", "Knots Landing"'}),i.jsx("li",{className:"text-center",children:"Heavy cable news presence"}),i.jsx("li",{className:"text-center",children:"Target: Conservative retirees"})]})]}),i.jsxs("div",{className:`${M.card} p-4 md:p-6`,children:[i.jsx("div",{className:"flex justify-center mb-4",children:i.jsx("img",{src:"/blog-images/tom-selleck-gold.jpg",alt:"Tom Selleck in Goldco commercial",className:M.avatarGold})}),i.jsx("h4",{className:"text-white font-bold text-xl text-center mb-1",children:"Tom Selleck"}),i.jsx("p",{className:`${M.gold} text-center mb-1`,children:"Goldco"}),i.jsx("p",{className:`${M.muted} text-sm text-center mb-3`,children:"Since 2023"}),i.jsxs("ul",{className:"text-white text-xs md:text-sm space-y-1",children:[i.jsx("li",{className:"text-center",children:'Known for: "Magnum P.I.", "Blue Bloods"'}),i.jsx("li",{className:"text-center",children:"Same cable news demographic"}),i.jsx("li",{className:"text-center",children:"Target: Same retiree audience"})]})]})]}),i.jsx("p",{className:`${M.negativeBold} text-center mt-6`,children:"Trusted TV actors → Target retirees → Costs passed to customers"})]}),C$=()=>i.jsxs($t,{children:[i.jsx(Dt,{title:"Gold vs Autonomous Trading",subtitle:"Which would you choose?"}),i.jsxs("div",{className:"grid md:grid-cols-2 gap-6 mt-8",children:[i.jsxs("div",{className:M.card,children:[i.jsx("h4",{className:`${M.goldBold} text-xl text-center mb-6`,children:"GOLD"}),i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{children:[i.jsx("p",{className:`${M.muted} text-sm`,children:"Returns:"}),i.jsx("p",{className:M.negativeBold,children:"~5% annually"})]}),i.jsxs("div",{children:[i.jsx("p",{className:`${M.muted} text-sm`,children:"Tax Rate:"}),i.jsx("p",{className:M.negativeBold,children:"28% (Collectible)"})]}),i.jsxs("div",{children:[i.jsx("p",{className:`${M.muted} text-sm`,children:"Storage:"}),i.jsx("p",{className:M.negativeBold,children:"Fees eat gains"})]}),i.jsxs("div",{children:[i.jsx("p",{className:`${M.muted} text-sm`,children:"Complexity:"}),i.jsx("p",{className:M.negativeBold,children:"Dealers, markups"})]}),i.jsxs("div",{children:[i.jsx("p",{className:`${M.muted} text-sm`,children:"Sales:"}),i.jsx("p",{className:M.negativeBold,children:"Celebrity spokesmen"})]})]})]}),i.jsxs("div",{className:M.card,children:[i.jsx("h4",{className:`${M.positiveBold} text-xl text-center mb-6`,children:"MY SYSTEM"}),i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{children:[i.jsx("p",{className:`${M.muted} text-sm`,children:"Profits:"}),i.jsx("p",{className:M.positiveBold,children:"$4,736.15"})]}),i.jsxs("div",{children:[i.jsx("p",{className:`${M.muted} text-sm`,children:"Trades:"}),i.jsx("p",{className:M.positiveBold,children:"957 closed"})]}),i.jsxs("div",{children:[i.jsx("p",{className:`${M.muted} text-sm`,children:"Success:"}),i.jsx("p",{className:M.positiveBold,children:"100% win rate"})]}),i.jsxs("div",{children:[i.jsx("p",{className:`${M.muted} text-sm`,children:"Storage:"}),i.jsx("p",{className:M.positiveBold,children:"$0 (digital)"})]}),i.jsxs("div",{children:[i.jsx("p",{className:`${M.muted} text-sm`,children:"Transparency:"}),i.jsx("p",{className:M.positiveBold,children:"Live dashboard"})]})]})]})]})]}),O$=({variant:e})=>{switch(e){case"returns-1928":return i.jsx(x$,{});case"reality-check":return i.jsx(k$,{});case"lost-decades":return i.jsx(T$,{});case"irs-tax":return i.jsx(I$,{});case"tax-impact":return i.jsx(j$,{});case"storage-fees":return i.jsx(A$,{});case"free-gold-trap":return i.jsx(N$,{});case"coins-vs-bars":return i.jsx(S$,{});case"celebrity-machine":return i.jsx(P$,{});case"gold-vs-trading":return i.jsx(C$,{});default:return null}},E$=()=>{const{slug:e}=Bb(),t=Rb(),[n,r]=f.useState(null);if(f.useEffect(()=>{const u=ka.find(d=>d.slug===e);if(u){if(!Ob(u)&&!a$()){t("/blog");return}r(u),window.scrollTo(0,0)}else t("/blog")},[e,t]),!n)return i.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center",children:i.jsx("div",{className:"text-white text-xl",children:"Loading..."})});const a=u=>new Date(u).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),o=u=>{const d=u.split(`
`),h=[];let m=[],p=!1,g=!1,b=[],y=!1,v=[];const x=()=>{m.length>0&&(h.push(i.jsx("p",{className:"mb-8 text-slate-300 leading-relaxed text-lg",children:s(m.join(" "))},`p-${h.length}`)),m=[])},k=()=>{if(b.length>0){const w=g?"ol":"ul";h.push(i.jsx(w,{className:`mb-6 space-y-2 text-slate-300 text-lg ${g?"list-decimal":"list-disc"} list-inside ml-4`,children:b.map((T,j)=>i.jsx("li",{children:s(T)},j))},`${g?"ol":"ul"}-${h.length}`)),b=[],p=!1,g=!1}},I=()=>{if(v.length>0){const w=v[0],T=v.slice(2),j=$=>$.split("|").slice(1,-1).map(N=>N.trim()),E=j(w),O=T.map(j);h.push(i.jsx("div",{className:"mb-6 overflow-x-auto",children:i.jsxs("table",{className:"w-full text-left border-collapse",children:[i.jsx("thead",{children:i.jsx("tr",{className:"border-b border-purple-400/30",children:E.map(($,N)=>i.jsx("th",{className:"py-3 px-4 text-purple-300 font-semibold text-sm",children:s($)},N))})}),i.jsx("tbody",{children:O.map(($,N)=>i.jsx("tr",{className:"border-b border-slate-700/50 hover:bg-slate-800/30",children:$.map((D,R)=>i.jsx("td",{className:"py-3 px-4 text-slate-300 text-sm",children:s(D)},R))},N))})]})},`table-${h.length}`)),v=[],y=!1}};return d.forEach((w,T)=>{if(w.startsWith("# "))x(),k(),h.push(i.jsx("h1",{className:"text-4xl md:text-5xl font-bold mb-6 mt-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400",children:w.substring(2)},`h1-${T}`));else if(w.startsWith("## "))x(),k(),h.push(i.jsx("h2",{className:"text-3xl font-bold mb-4 mt-8 text-purple-300",children:w.substring(3)},`h2-${T}`));else if(w.startsWith("### "))x(),k(),h.push(i.jsx("h3",{className:"text-2xl font-bold mb-3 mt-6 text-purple-300",children:w.substring(4)},`h3-${T}`));else if(w.trim()==="---")x(),k();else if(w.trim().match(/^!\[([^\]]*)\]\(([^)]+)\)$/)||w.trim().match(/^!\[Slide:\s*([^\]]+)\]$/)){x(),k();const j=w.trim().match(/^!\[Slide:\s*([^\]]+)\]$/);if(j){const E=j[1].trim();h.push(i.jsx("div",{style:{marginTop:"80px",marginBottom:"80px"},children:i.jsx(O$,{variant:E},`slide-${T}`)},`slide-wrapper-${T}`))}else{const E=w.trim().match(/^!\[([^\]]*)\]\(([^)]+)\)$/);if(E){const O=E[1],$=E[2],N=O.toLowerCase().startsWith("float-left:"),D=O.toLowerCase().startsWith("float-right:");if(N||D){const R=O.replace(/^float-(left|right):\s*/i,""),_=[];let F=T+1;for(;F<d.length;){const G=d[F];if(G.startsWith("#")||G.match(/^!\[/)||G.startsWith("|")||G.trim().startsWith("- "))break;if(G.trim()===""){const z=d[F+1];if(z&&z.startsWith("#"))break}G.trim()&&(_.push(G),d[F]=""),F++}h.push(i.jsxs("div",{className:"overflow-hidden mb-6",children:[i.jsx("img",{src:$,alt:R,style:{float:N?"left":"right",width:"150px",marginRight:N?"16px":"0",marginLeft:N?"0":"16px",marginBottom:"8px",borderRadius:"8px",border:"1px solid rgba(192, 132, 252, 0.3)"}}),_.map((G,z)=>i.jsx("p",{className:"text-slate-300 leading-relaxed text-lg mb-4",children:s(G)},`float-p-${T}-${z}`))]},`float-wrap-${T}`))}else{const R=d[T+1];if(R&&R.trim().match(/^\*(.+)\*$/)){const F=R.trim().match(/^\*(.+)\*$/);h.push(i.jsxs("figure",{className:"my-8",children:[i.jsx("img",{src:E[2],alt:E[1],className:"w-full rounded-xl border border-purple-400/30"}),i.jsx("figcaption",{className:"text-center text-slate-400 text-sm italic mt-3",children:F?F[1]:""})]},`fig-${T}`)),d[T+1]=""}else h.push(i.jsx("img",{src:E[2],alt:E[1],className:"w-full rounded-xl my-6 border border-purple-400/30"},`img-${T}`))}}}}else w.trim().startsWith("- ")?(x(),I(),p&&g&&k(),p=!0,g=!1,b.push(w.trim().substring(2))):/^\d+\.\s/.test(w.trim())?(x(),I(),p&&!g&&k(),p=!0,g=!0,b.push(w.trim().replace(/^\d+\.\s/,""))):w.trim().startsWith("|")&&w.trim().endsWith("|")?(x(),k(),y=!0,v.push(w.trim())):w.trim()===""?(x(),p||k(),y&&I()):(p&&k(),y&&I(),m.push(w))}),x(),k(),I(),h},s=u=>{const d=[];let h=u,m=0;for(;h.length>0;){const p=h.match(/\*\*([^*]+)\*\*/),g=h.match(new RegExp("(?<!\\*)\\*([^*]+)\\*(?!\\*)")),b=h.match(/\[([^\]]+)\]\(([^)]+)\)/),y=[{type:"bold",match:p,index:(p==null?void 0:p.index)??1/0},{type:"italic",match:g,index:(g==null?void 0:g.index)??1/0},{type:"link",match:b,index:(b==null?void 0:b.index)??1/0}].filter(k=>k.match!==null);if(y.length===0){d.push(i.jsx("span",{children:h},m++));break}y.sort((k,I)=>k.index-I.index);const v=y[0],x=h.substring(0,v.index);if(x&&d.push(i.jsx("span",{children:x},m++)),v.type==="link"&&b){const k=b[1],I=b[2],w=I.startsWith("/");d.push(i.jsx("a",{href:I,className:"text-purple-400 hover:text-purple-300 underline",target:w?void 0:"_blank",rel:w?void 0:"noopener noreferrer",children:s(k)},m++)),h=h.substring(b.index+b[0].length)}else v.type==="bold"&&p?(d.push(i.jsx("strong",{className:"font-bold text-white",children:p[1]},m++)),h=h.substring(p.index+p[0].length)):v.type==="italic"&&g&&(d.push(i.jsx("em",{className:"italic",children:g[1]},m++)),h=h.substring(g.index+g[0].length))}return d},l=`https://myrobotictrader.com${n.heroImage}`,c=`https://myrobotictrader.com/blog/${n.slug}`;return i.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900",children:[i.jsxs(xv,{children:[i.jsxs("title",{children:[n.title," | MyRoboticTrader"]}),i.jsx("meta",{name:"description",content:n.metaDescription}),i.jsx("link",{rel:"canonical",href:c}),i.jsx("meta",{property:"og:type",content:"article"}),i.jsx("meta",{property:"og:title",content:n.title}),i.jsx("meta",{property:"og:description",content:n.metaDescription}),i.jsx("meta",{property:"og:image",content:l}),i.jsx("meta",{property:"og:url",content:c}),i.jsx("meta",{property:"og:site_name",content:"MyRoboticTrader"}),i.jsx("meta",{property:"article:published_time",content:n.date}),i.jsx("meta",{property:"article:author",content:"Patrick Jenkins"}),i.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),i.jsx("meta",{name:"twitter:site",content:"@myrobotictrader"}),i.jsx("meta",{name:"twitter:creator",content:"@myrobotictrader"}),i.jsx("meta",{name:"twitter:title",content:n.title}),i.jsx("meta",{name:"twitter:description",content:n.metaDescription}),i.jsx("meta",{name:"twitter:image",content:l}),i.jsx("meta",{name:"twitter:image:alt",content:n.imageAlt})]}),i.jsx(kr,{}),i.jsx("section",{className:"relative py-16",children:i.jsxs("article",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8",children:[i.jsx("div",{className:"mb-6",children:i.jsxs(Ue,{to:"/blog",className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-purple-400/30 hover:border-purple-400/50 text-purple-300 hover:text-purple-200 transition-all duration-300 group",children:[i.jsx("svg",{className:"w-4 h-4 transition-transform group-hover:-translate-x-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),i.jsx("span",{className:"text-sm font-medium",children:"Back to Blog"})]})}),i.jsxs("header",{className:"mb-12",children:[i.jsx("div",{className:"mb-4",children:i.jsx("span",{className:"inline-block px-4 py-2 text-sm font-semibold rounded-full bg-purple-600/30 text-purple-300 border border-purple-400/30",children:n.category})}),i.jsx("h1",{className:"text-4xl md:text-5xl font-bold mb-6 text-white leading-tight",children:n.title}),i.jsxs("div",{className:"flex items-center text-slate-400",children:[i.jsx("time",{dateTime:n.date,children:a(n.date)}),i.jsx("span",{className:"mx-3",children:"•"}),i.jsx("span",{children:"Patrick Jenkins"})]})]}),i.jsx("div",{className:"mb-8 rounded-2xl overflow-hidden h-48 md:h-56",children:i.jsx("img",{src:n.heroImage,alt:n.imageAlt,className:"w-full h-full object-cover",style:{filter:"brightness(0.85)"}})}),i.jsx("div",{className:"prose prose-invert prose-lg max-w-none",children:i.jsx("div",{className:"bg-slate-900/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-8 border border-purple-400/30 overflow-hidden",children:o(n.content)})}),i.jsxs("div",{className:"bg-slate-900/95 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30",children:[i.jsx("h3",{className:"text-2xl font-bold mb-4 text-white",children:"Ready to See Real Trading Results?"}),i.jsx("p",{className:"text-slate-300 mb-6",children:"Everything you just read is based on real trading data. Check out my live dashboard with complete transparency - every trade, every profit, updated multiple times daily."}),i.jsxs(Ue,{to:"/",onClick:()=>window.scrollTo(0,0),className:"inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/30",children:[i.jsx("span",{children:"View Live Results"}),i.jsx("svg",{className:"w-5 h-5 transition-transform group-hover:translate-x-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})]})]}),i.jsx("div",{className:"mt-8 pt-8 border-t border-purple-400/30",children:i.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",children:[i.jsxs("div",{children:[i.jsx("p",{className:"text-slate-300 font-medium mb-1",children:"Found this helpful? Let's connect!"}),i.jsx("p",{className:"text-slate-400 text-sm",children:"I share daily insights about systematic trading and building transparent systems."})]}),i.jsxs("a",{href:"https://twitter.com/myrobotictrader",className:"inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-600/20 hover:bg-purple-600/30 border border-purple-400/40 hover:border-purple-400/60 text-purple-300 hover:text-purple-200 transition-all duration-300 group whitespace-nowrap",target:"_blank",rel:"noopener noreferrer",children:[i.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24",children:i.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})}),i.jsx("span",{className:"font-medium",children:"Follow on X"}),i.jsx("svg",{className:"w-4 h-4 group-hover:translate-x-1 transition-transform",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})]})]})}),i.jsx(w$,{currentSlug:n.slug,currentCategory:n.category}),i.jsx("div",{className:"mt-12",children:i.jsx(v$,{currentSlug:n.slug})})]})})]})},M$=()=>i.jsx(_b,{to:"/blog",replace:!0}),yn={home:{title:"MyRoboticTrader - Set It and Forget It Crypto Trading | Build New Revenue Streams",description:"Discover how I built multiple revenue streams with AI-Enhanced autonomous robotic crypto trading. Real results, proven system. Start your automated trading journey today.",keywords:"robotic trading, crypto trading, automated trading, passive income, cryptocurrency, trading bot, AI trading, revenue streams, financial freedom",ogTitle:"MyRoboticTrader - Set It and Forget It Crypto Trading | Build New Revenue Streams",ogDescription:"Discover how I built multiple revenue streams with AI-Enhanced autonomous robotic crypto trading. Real results, proven system.",ogImage:"https://myrobotictrader.com/api/og-image",twitterTitle:"MyRoboticTrader - Set It and Forget It Crypto Trading | Build New Revenue Streams",twitterDescription:"Discover how I built multiple revenue streams with AI-Enhanced autonomous robotic crypto trading. Real results, proven system.",twitterImage:"https://myrobotictrader.com/api/og-image",canonicalUrl:"https://myrobotictrader.com/",pageType:"home"},resources:{title:"Trading Resources & AI-Enhanced Crypto Guides | Build Your Revenue Stream",description:"Free AI-enhanced crypto trading resources and guides. Learn the automated trading strategies to build sustainable revenue streams with GoBabyTrade.",keywords:"trading guides, crypto resources, trading education, automated trading strategies, financial education",ogTitle:"Free Trading Resources & Guides | MyRoboticTrader",ogDescription:"Access free crypto trading resources, guides, and educational content to build your revenue stream.",ogImage:"https://myrobotictrader.com/api/og-image",twitterTitle:"Trading Resources & Guides",twitterDescription:"Free crypto trading resources and educational content for building sustainable revenue streams.",twitterImage:"https://myrobotictrader.com/api/og-image",canonicalUrl:"https://myrobotictrader.com/resources",pageType:"resources"},privacy:{title:"Privacy Policy | MyRoboticTrader",description:"Privacy policy and data handling practices for MyRoboticTrader.com",keywords:"privacy policy, data protection, terms of service",ogTitle:"Privacy Policy | MyRoboticTrader",ogDescription:"Privacy policy and data handling practices.",ogImage:"https://myrobotictrader.com/api/og-image",twitterTitle:"Privacy Policy",twitterDescription:"Privacy policy and data handling practices.",twitterImage:"https://myrobotictrader.com/api/og-image",canonicalUrl:"https://myrobotictrader.com/privacy",pageType:"privacy"},card:{title:"Live Trading Results - Building Revenue Streams | MyRoboticTrader",description:"See live AI-enhanced robotic trading results. Real revenue streams being built automatically from Patrick's trading system!",keywords:"live trading results, crypto performance, trading dashboard, automated trading results",ogTitle:"Live Trading Results - Building Revenue Streams",ogDescription:"See live AI-enhanced robotic trading results. Real revenue streams being built automatically from Patrick's trading system!",ogImage:"https://myrobotictrader.com/api/og-image",twitterTitle:"Live Trading Results - Building Revenue Streams",twitterDescription:"See live AI-enhanced robotic trading results building sustainable revenue streams automatically!",twitterImage:"https://myrobotictrader.com/api/og-image",canonicalUrl:"https://myrobotictrader.com/card",pageType:"card"},blog:{title:"Trading Education Blog | Real Insights from Autonomous Crypto Trading",description:"Learn systematic crypto trading strategies from real results. No hype, just transparent insights from building an AI-enhanced autonomous trading system.",keywords:"crypto trading blog, automated trading education, systematic trading, AI trading insights, crypto trading strategies, trading transparency",ogTitle:"Trading Education Blog - Real Insights, Real Results",ogDescription:"Learn from real trading results and transparent insights about autonomous crypto trading systems.",ogImage:"https://myrobotictrader.com/api/og-image",twitterTitle:"Trading Education Blog - MyRoboticTrader",twitterDescription:"Real insights from building transparent, systematic crypto trading systems.",twitterImage:"https://myrobotictrader.com/api/og-image",canonicalUrl:"https://myrobotictrader.com/blog",pageType:"blog"},faq:{title:"FAQ - Frequently Asked Questions | MyRoboticTrader",description:"Get answers to common questions about automated crypto trading, AI-enhanced systems, safety, profits, and how to get started with GoBabyTrade.",keywords:"crypto trading FAQ, automated trading questions, trading bot FAQ, GoBabyTrade FAQ, robotic trading help",ogTitle:"Frequently Asked Questions | MyRoboticTrader",ogDescription:"Answers to 30+ questions about automated crypto trading, safety, profits, and getting started.",ogImage:"https://myrobotictrader.com/api/og-image",twitterTitle:"FAQ - MyRoboticTrader",twitterDescription:"Get answers to common questions about automated crypto trading and AI-enhanced systems.",twitterImage:"https://myrobotictrader.com/api/og-image",canonicalUrl:"https://myrobotictrader.com/faq",pageType:"faq"}},$$=({children:e})=>{const t=Km(),n=()=>{if(t.pathname.startsWith("/blog/"))return yn.blog;switch(t.pathname){case"/blog":return yn.blog;case"/faq":return yn.faq;case"/resources":return yn.resources;case"/privacy":return yn.privacy;case"/card":return yn.card;default:return yn.home}};return i.jsxs(i.Fragment,{children:[i.jsx(jv,{...n()}),e]})},D$=()=>{const{tradingStats:e,isLoading:t,error:n,refreshStats:r,cacheInfo:a}=Xr(),o=St.useCallback(()=>{try{r&&typeof r=="function"&&r()}catch(s){console.error("Error in refresh function:",s)}},[r]);return i.jsxs(i.Fragment,{children:[i.jsx(kr,{}),i.jsx(ew,{}),i.jsx(tw,{tradingStats:e}),i.jsx(XM,{tradingStats:e,isLoading:t,error:n,refreshStats:r||o,cacheInfo:a||{isFresh:!1,isRateLimited:!1,timeUntilNextRefresh:0}}),i.jsx(l$,{}),i.jsx(QM,{}),i.jsx(e$,{}),i.jsx(r$,{}),i.jsx(o$,{maxPosts:4}),i.jsxs("section",{className:"py-20 px-4 relative overflow-hidden",children:[i.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/30 to-slate-900 -z-10"}),i.jsx("div",{className:"absolute top-0 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"}),i.jsx("div",{className:"absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"}),i.jsxs("div",{className:"max-w-4xl mx-auto relative z-10",children:[i.jsx("div",{className:"text-center mb-8",children:i.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-white mb-4",children:"About MyRoboticTrader"})}),i.jsx("div",{className:"bg-gray-900/50 rounded-2xl p-8 md:p-10 border border-purple-400/30 shadow-lg shadow-purple-500/10",children:i.jsxs("div",{className:"text-gray-300 text-base leading-relaxed space-y-4",children:[i.jsx("p",{children:"MyRoboticTrader showcases real, verified results from an AI-enhanced autonomous cryptocurrency trading system. Unlike manual trading or gambling on price predictions, this system executes trades 24/7 based on market volatility, taking small consistent profits without emotional decision-making. The approach is simple: buy low, sell for profit, repeat—all managed by intelligent automation."}),i.jsx("p",{children:"Every trade is published transparently with complete transaction history available for verification. With nearly 1,000 trades executed and a 100% success rate on closed positions, the results speak for themselves. The system never sells at a loss, holding positions until market conditions become favorable. This patience-based approach eliminates the fear and greed that destroy most traders."}),i.jsx("p",{children:"This isn't get-rich-quick speculation or crypto gambling. It's systematic wealth building through AI-enhanced technology that works while you sleep. Powered by GoBabyTrade™, the system connects securely to exchanges like Coinbase and Kraken, keeping your funds in your own account at all times. Check out the live results dashboard above to see every trade, every profit, updated in real-time."})]})})]})]})]})};function B$(){return f.useEffect(()=>{kv()},[]),i.jsxs("div",{className:"App min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900",children:[i.jsx(Av,{}),i.jsx(Nv,{}),i.jsx(Wb,{children:i.jsxs($$,{children:[i.jsxs(Lb,{children:[i.jsx(rn,{path:"/",element:i.jsx(D$,{})}),i.jsx(rn,{path:"/faq",element:i.jsx(m$,{})}),i.jsx(rn,{path:"/resources",element:i.jsx(g$,{})}),i.jsx(rn,{path:"/privacy",element:i.jsx(f$,{})}),i.jsx(rn,{path:"/card",element:i.jsx(y$,{})}),i.jsx(rn,{path:"/blog",element:i.jsx(b$,{})}),i.jsx(rn,{path:"/blog/schedule",element:i.jsx(M$,{})}),i.jsx(rn,{path:"/blog/:slug",element:i.jsx(E$,{})})]}),i.jsx(p$,{})]})})]})}Zm(document.getElementById("root")).render(i.jsx(f.StrictMode,{children:i.jsx(ap,{children:i.jsx(B$,{})})}));
