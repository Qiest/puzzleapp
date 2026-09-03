(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Rw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var eg={exports:{}},Zl={},tg={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vo=Symbol.for("react.element"),Aw=Symbol.for("react.portal"),bw=Symbol.for("react.fragment"),Ow=Symbol.for("react.strict_mode"),Dw=Symbol.for("react.profiler"),Mw=Symbol.for("react.provider"),Lw=Symbol.for("react.context"),jw=Symbol.for("react.forward_ref"),Fw=Symbol.for("react.suspense"),zw=Symbol.for("react.memo"),Uw=Symbol.for("react.lazy"),xf=Symbol.iterator;function $w(t){return t===null||typeof t!="object"?null:(t=xf&&t[xf]||t["@@iterator"],typeof t=="function"?t:null)}var ng={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},rg=Object.assign,ig={};function gs(t,e,n){this.props=t,this.context=e,this.refs=ig,this.updater=n||ng}gs.prototype.isReactComponent={};gs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};gs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function sg(){}sg.prototype=gs.prototype;function Ld(t,e,n){this.props=t,this.context=e,this.refs=ig,this.updater=n||ng}var jd=Ld.prototype=new sg;jd.constructor=Ld;rg(jd,gs.prototype);jd.isPureReactComponent=!0;var Pf=Array.isArray,og=Object.prototype.hasOwnProperty,Fd={current:null},ag={key:!0,ref:!0,__self:!0,__source:!0};function lg(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)og.call(e,r)&&!ag.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Vo,type:t,key:s,ref:o,props:i,_owner:Fd.current}}function Bw(t,e){return{$$typeof:Vo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function zd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Vo}function Ww(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Rf=/\/+/g;function Oc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ww(""+t.key):e.toString(36)}function $a(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Vo:case Aw:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Oc(o,0):r,Pf(i)?(n="",t!=null&&(n=t.replace(Rf,"$&/")+"/"),$a(i,e,n,"",function(c){return c})):i!=null&&(zd(i)&&(i=Bw(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Rf,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Pf(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Oc(s,a);o+=$a(s,e,n,l,i)}else if(l=$w(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Oc(s,a++),o+=$a(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function wa(t,e,n){if(t==null)return t;var r=[],i=0;return $a(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Hw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var dt={current:null},Ba={transition:null},Vw={ReactCurrentDispatcher:dt,ReactCurrentBatchConfig:Ba,ReactCurrentOwner:Fd};function cg(){throw Error("act(...) is not supported in production builds of React.")}se.Children={map:wa,forEach:function(t,e,n){wa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return wa(t,function(){e++}),e},toArray:function(t){return wa(t,function(e){return e})||[]},only:function(t){if(!zd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};se.Component=gs;se.Fragment=bw;se.Profiler=Dw;se.PureComponent=Ld;se.StrictMode=Ow;se.Suspense=Fw;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vw;se.act=cg;se.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=rg({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Fd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)og.call(e,l)&&!ag.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Vo,type:t.type,key:i,ref:s,props:r,_owner:o}};se.createContext=function(t){return t={$$typeof:Lw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Mw,_context:t},t.Consumer=t};se.createElement=lg;se.createFactory=function(t){var e=lg.bind(null,t);return e.type=t,e};se.createRef=function(){return{current:null}};se.forwardRef=function(t){return{$$typeof:jw,render:t}};se.isValidElement=zd;se.lazy=function(t){return{$$typeof:Uw,_payload:{_status:-1,_result:t},_init:Hw}};se.memo=function(t,e){return{$$typeof:zw,type:t,compare:e===void 0?null:e}};se.startTransition=function(t){var e=Ba.transition;Ba.transition={};try{t()}finally{Ba.transition=e}};se.unstable_act=cg;se.useCallback=function(t,e){return dt.current.useCallback(t,e)};se.useContext=function(t){return dt.current.useContext(t)};se.useDebugValue=function(){};se.useDeferredValue=function(t){return dt.current.useDeferredValue(t)};se.useEffect=function(t,e){return dt.current.useEffect(t,e)};se.useId=function(){return dt.current.useId()};se.useImperativeHandle=function(t,e,n){return dt.current.useImperativeHandle(t,e,n)};se.useInsertionEffect=function(t,e){return dt.current.useInsertionEffect(t,e)};se.useLayoutEffect=function(t,e){return dt.current.useLayoutEffect(t,e)};se.useMemo=function(t,e){return dt.current.useMemo(t,e)};se.useReducer=function(t,e,n){return dt.current.useReducer(t,e,n)};se.useRef=function(t){return dt.current.useRef(t)};se.useState=function(t){return dt.current.useState(t)};se.useSyncExternalStore=function(t,e,n){return dt.current.useSyncExternalStore(t,e,n)};se.useTransition=function(){return dt.current.useTransition()};se.version="18.3.1";tg.exports=se;var S=tg.exports;const Gw=Rw(S);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kw=S,Yw=Symbol.for("react.element"),qw=Symbol.for("react.fragment"),Qw=Object.prototype.hasOwnProperty,Xw=Kw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Jw={key:!0,ref:!0,__self:!0,__source:!0};function ug(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Qw.call(e,r)&&!Jw.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Yw,type:t,key:s,ref:o,props:i,_owner:Xw.current}}Zl.Fragment=qw;Zl.jsx=ug;Zl.jsxs=ug;eg.exports=Zl;var u=eg.exports,wu={},dg={exports:{}},Pt={},hg={exports:{}},fg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(x,q){var Z=x.length;x.push(q);e:for(;0<Z;){var ce=Z-1>>>1,xe=x[ce];if(0<i(xe,q))x[ce]=q,x[Z]=xe,Z=ce;else break e}}function n(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var q=x[0],Z=x.pop();if(Z!==q){x[0]=Z;e:for(var ce=0,xe=x.length,ue=xe>>>1;ce<ue;){var Ye=2*(ce+1)-1,Et=x[Ye],qe=Ye+1,yn=x[qe];if(0>i(Et,Z))qe<xe&&0>i(yn,Et)?(x[ce]=yn,x[qe]=Z,ce=qe):(x[ce]=Et,x[Ye]=Z,ce=Ye);else if(qe<xe&&0>i(yn,Z))x[ce]=yn,x[qe]=Z,ce=qe;else break e}}return q}function i(x,q){var Z=x.sortIndex-q.sortIndex;return Z!==0?Z:x.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,p=null,f=3,v=!1,w=!1,C=!1,W=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(x){for(var q=n(c);q!==null;){if(q.callback===null)r(c);else if(q.startTime<=x)r(c),q.sortIndex=q.expirationTime,e(l,q);else break;q=n(c)}}function k(x){if(C=!1,_(x),!w)if(n(l)!==null)w=!0,Bt(j);else{var q=n(c);q!==null&&sn(k,q.startTime-x)}}function j(x,q){w=!1,C&&(C=!1,g(V),V=-1),v=!0;var Z=f;try{for(_(q),p=n(l);p!==null&&(!(p.expirationTime>q)||x&&!Ue());){var ce=p.callback;if(typeof ce=="function"){p.callback=null,f=p.priorityLevel;var xe=ce(p.expirationTime<=q);q=t.unstable_now(),typeof xe=="function"?p.callback=xe:p===n(l)&&r(l),_(q)}else r(l);p=n(l)}if(p!==null)var ue=!0;else{var Ye=n(c);Ye!==null&&sn(k,Ye.startTime-q),ue=!1}return ue}finally{p=null,f=Z,v=!1}}var z=!1,I=null,V=-1,le=5,J=-1;function Ue(){return!(t.unstable_now()-J<le)}function it(){if(I!==null){var x=t.unstable_now();J=x;var q=!0;try{q=I(!0,x)}finally{q?be():(z=!1,I=null)}}else z=!1}var be;if(typeof m=="function")be=function(){m(it)};else if(typeof MessageChannel<"u"){var wt=new MessageChannel,Or=wt.port2;wt.port1.onmessage=it,be=function(){Or.postMessage(null)}}else be=function(){W(it,0)};function Bt(x){I=x,z||(z=!0,be())}function sn(x,q){V=W(function(){x(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(x){x.callback=null},t.unstable_continueExecution=function(){w||v||(w=!0,Bt(j))},t.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):le=0<x?Math.floor(1e3/x):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(x){switch(f){case 1:case 2:case 3:var q=3;break;default:q=f}var Z=f;f=q;try{return x()}finally{f=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(x,q){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var Z=f;f=x;try{return q()}finally{f=Z}},t.unstable_scheduleCallback=function(x,q,Z){var ce=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ce+Z:ce):Z=ce,x){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=Z+xe,x={id:d++,callback:q,priorityLevel:x,startTime:Z,expirationTime:xe,sortIndex:-1},Z>ce?(x.sortIndex=Z,e(c,x),n(l)===null&&x===n(c)&&(C?(g(V),V=-1):C=!0,sn(k,Z-ce))):(x.sortIndex=xe,e(l,x),w||v||(w=!0,Bt(j))),x},t.unstable_shouldYield=Ue,t.unstable_wrapCallback=function(x){var q=f;return function(){var Z=f;f=q;try{return x.apply(this,arguments)}finally{f=Z}}}})(fg);hg.exports=fg;var Zw=hg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e0=S,xt=Zw;function P(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pg=new Set,vo={};function hi(t,e){Zi(t,e),Zi(t+"Capture",e)}function Zi(t,e){for(vo[t]=e,t=0;t<e.length;t++)pg.add(e[t])}var An=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Eu=Object.prototype.hasOwnProperty,t0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Af={},bf={};function n0(t){return Eu.call(bf,t)?!0:Eu.call(Af,t)?!1:t0.test(t)?bf[t]=!0:(Af[t]=!0,!1)}function r0(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function i0(t,e,n,r){if(e===null||typeof e>"u"||r0(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ht(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Je[t]=new ht(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Je[e]=new ht(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Je[t]=new ht(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Je[t]=new ht(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Je[t]=new ht(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Je[t]=new ht(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Je[t]=new ht(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Je[t]=new ht(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Je[t]=new ht(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ud=/[\-:]([a-z])/g;function $d(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ud,$d);Je[e]=new ht(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ud,$d);Je[e]=new ht(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ud,$d);Je[e]=new ht(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Je[t]=new ht(t,1,!1,t.toLowerCase(),null,!1,!1)});Je.xlinkHref=new ht("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Je[t]=new ht(t,1,!1,t.toLowerCase(),null,!0,!0)});function Bd(t,e,n,r){var i=Je.hasOwnProperty(e)?Je[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(i0(e,n,i,r)&&(n=null),r||i===null?n0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var zn=e0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ea=Symbol.for("react.element"),xi=Symbol.for("react.portal"),Pi=Symbol.for("react.fragment"),Wd=Symbol.for("react.strict_mode"),Cu=Symbol.for("react.profiler"),mg=Symbol.for("react.provider"),gg=Symbol.for("react.context"),Hd=Symbol.for("react.forward_ref"),ku=Symbol.for("react.suspense"),Su=Symbol.for("react.suspense_list"),Vd=Symbol.for("react.memo"),Xn=Symbol.for("react.lazy"),_g=Symbol.for("react.offscreen"),Of=Symbol.iterator;function Ms(t){return t===null||typeof t!="object"?null:(t=Of&&t[Of]||t["@@iterator"],typeof t=="function"?t:null)}var Ne=Object.assign,Dc;function qs(t){if(Dc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Dc=e&&e[1]||""}return`
`+Dc+t}var Mc=!1;function Lc(t,e){if(!t||Mc)return"";Mc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Mc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?qs(t):""}function s0(t){switch(t.tag){case 5:return qs(t.type);case 16:return qs("Lazy");case 13:return qs("Suspense");case 19:return qs("SuspenseList");case 0:case 2:case 15:return t=Lc(t.type,!1),t;case 11:return t=Lc(t.type.render,!1),t;case 1:return t=Lc(t.type,!0),t;default:return""}}function Iu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Pi:return"Fragment";case xi:return"Portal";case Cu:return"Profiler";case Wd:return"StrictMode";case ku:return"Suspense";case Su:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case gg:return(t.displayName||"Context")+".Consumer";case mg:return(t._context.displayName||"Context")+".Provider";case Hd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Vd:return e=t.displayName||null,e!==null?e:Iu(t.type)||"Memo";case Xn:e=t._payload,t=t._init;try{return Iu(t(e))}catch{}}return null}function o0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Iu(e);case 8:return e===Wd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Cr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function vg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function a0(t){var e=vg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ca(t){t._valueTracker||(t._valueTracker=a0(t))}function yg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=vg(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function il(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Tu(t,e){var n=e.checked;return Ne({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Df(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Cr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function wg(t,e){e=e.checked,e!=null&&Bd(t,"checked",e,!1)}function Nu(t,e){wg(t,e);var n=Cr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?xu(t,e.type,n):e.hasOwnProperty("defaultValue")&&xu(t,e.type,Cr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Mf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function xu(t,e,n){(e!=="number"||il(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Qs=Array.isArray;function Bi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Cr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Pu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(P(91));return Ne({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Lf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(P(92));if(Qs(n)){if(1<n.length)throw Error(P(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Cr(n)}}function Eg(t,e){var n=Cr(e.value),r=Cr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function jf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Cg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ru(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Cg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ka,kg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ka=ka||document.createElement("div"),ka.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ka.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function yo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var to={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},l0=["Webkit","ms","Moz","O"];Object.keys(to).forEach(function(t){l0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),to[e]=to[t]})});function Sg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||to.hasOwnProperty(t)&&to[t]?(""+e).trim():e+"px"}function Ig(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Sg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var c0=Ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Au(t,e){if(e){if(c0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(P(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(P(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(P(61))}if(e.style!=null&&typeof e.style!="object")throw Error(P(62))}}function bu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ou=null;function Gd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Du=null,Wi=null,Hi=null;function Ff(t){if(t=Yo(t)){if(typeof Du!="function")throw Error(P(280));var e=t.stateNode;e&&(e=ic(e),Du(t.stateNode,t.type,e))}}function Tg(t){Wi?Hi?Hi.push(t):Hi=[t]:Wi=t}function Ng(){if(Wi){var t=Wi,e=Hi;if(Hi=Wi=null,Ff(t),e)for(t=0;t<e.length;t++)Ff(e[t])}}function xg(t,e){return t(e)}function Pg(){}var jc=!1;function Rg(t,e,n){if(jc)return t(e,n);jc=!0;try{return xg(t,e,n)}finally{jc=!1,(Wi!==null||Hi!==null)&&(Pg(),Ng())}}function wo(t,e){var n=t.stateNode;if(n===null)return null;var r=ic(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(P(231,e,typeof n));return n}var Mu=!1;if(An)try{var Ls={};Object.defineProperty(Ls,"passive",{get:function(){Mu=!0}}),window.addEventListener("test",Ls,Ls),window.removeEventListener("test",Ls,Ls)}catch{Mu=!1}function u0(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var no=!1,sl=null,ol=!1,Lu=null,d0={onError:function(t){no=!0,sl=t}};function h0(t,e,n,r,i,s,o,a,l){no=!1,sl=null,u0.apply(d0,arguments)}function f0(t,e,n,r,i,s,o,a,l){if(h0.apply(this,arguments),no){if(no){var c=sl;no=!1,sl=null}else throw Error(P(198));ol||(ol=!0,Lu=c)}}function fi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ag(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function zf(t){if(fi(t)!==t)throw Error(P(188))}function p0(t){var e=t.alternate;if(!e){if(e=fi(t),e===null)throw Error(P(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return zf(i),t;if(s===r)return zf(i),e;s=s.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?t:e}function bg(t){return t=p0(t),t!==null?Og(t):null}function Og(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Og(t);if(e!==null)return e;t=t.sibling}return null}var Dg=xt.unstable_scheduleCallback,Uf=xt.unstable_cancelCallback,m0=xt.unstable_shouldYield,g0=xt.unstable_requestPaint,Ae=xt.unstable_now,_0=xt.unstable_getCurrentPriorityLevel,Kd=xt.unstable_ImmediatePriority,Mg=xt.unstable_UserBlockingPriority,al=xt.unstable_NormalPriority,v0=xt.unstable_LowPriority,Lg=xt.unstable_IdlePriority,ec=null,hn=null;function y0(t){if(hn&&typeof hn.onCommitFiberRoot=="function")try{hn.onCommitFiberRoot(ec,t,void 0,(t.current.flags&128)===128)}catch{}}var Jt=Math.clz32?Math.clz32:C0,w0=Math.log,E0=Math.LN2;function C0(t){return t>>>=0,t===0?32:31-(w0(t)/E0|0)|0}var Sa=64,Ia=4194304;function Xs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ll(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Xs(a):(s&=o,s!==0&&(r=Xs(s)))}else o=n&~i,o!==0?r=Xs(o):s!==0&&(r=Xs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Jt(e),i=1<<n,r|=t[n],e&=~i;return r}function k0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function S0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Jt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=k0(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function ju(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function jg(){var t=Sa;return Sa<<=1,!(Sa&4194240)&&(Sa=64),t}function Fc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Go(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Jt(e),t[e]=n}function I0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Jt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Yd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Jt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var he=0;function Fg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var zg,qd,Ug,$g,Bg,Fu=!1,Ta=[],lr=null,cr=null,ur=null,Eo=new Map,Co=new Map,Zn=[],T0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $f(t,e){switch(t){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":cr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":Eo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Co.delete(e.pointerId)}}function js(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Yo(e),e!==null&&qd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function N0(t,e,n,r,i){switch(e){case"focusin":return lr=js(lr,t,e,n,r,i),!0;case"dragenter":return cr=js(cr,t,e,n,r,i),!0;case"mouseover":return ur=js(ur,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Eo.set(s,js(Eo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Co.set(s,js(Co.get(s)||null,t,e,n,r,i)),!0}return!1}function Wg(t){var e=Kr(t.target);if(e!==null){var n=fi(e);if(n!==null){if(e=n.tag,e===13){if(e=Ag(n),e!==null){t.blockedOn=e,Bg(t.priority,function(){Ug(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=zu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ou=r,n.target.dispatchEvent(r),Ou=null}else return e=Yo(n),e!==null&&qd(e),t.blockedOn=n,!1;e.shift()}return!0}function Bf(t,e,n){Wa(t)&&n.delete(e)}function x0(){Fu=!1,lr!==null&&Wa(lr)&&(lr=null),cr!==null&&Wa(cr)&&(cr=null),ur!==null&&Wa(ur)&&(ur=null),Eo.forEach(Bf),Co.forEach(Bf)}function Fs(t,e){t.blockedOn===e&&(t.blockedOn=null,Fu||(Fu=!0,xt.unstable_scheduleCallback(xt.unstable_NormalPriority,x0)))}function ko(t){function e(i){return Fs(i,t)}if(0<Ta.length){Fs(Ta[0],t);for(var n=1;n<Ta.length;n++){var r=Ta[n];r.blockedOn===t&&(r.blockedOn=null)}}for(lr!==null&&Fs(lr,t),cr!==null&&Fs(cr,t),ur!==null&&Fs(ur,t),Eo.forEach(e),Co.forEach(e),n=0;n<Zn.length;n++)r=Zn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Zn.length&&(n=Zn[0],n.blockedOn===null);)Wg(n),n.blockedOn===null&&Zn.shift()}var Vi=zn.ReactCurrentBatchConfig,cl=!0;function P0(t,e,n,r){var i=he,s=Vi.transition;Vi.transition=null;try{he=1,Qd(t,e,n,r)}finally{he=i,Vi.transition=s}}function R0(t,e,n,r){var i=he,s=Vi.transition;Vi.transition=null;try{he=4,Qd(t,e,n,r)}finally{he=i,Vi.transition=s}}function Qd(t,e,n,r){if(cl){var i=zu(t,e,n,r);if(i===null)Yc(t,e,r,ul,n),$f(t,r);else if(N0(i,t,e,n,r))r.stopPropagation();else if($f(t,r),e&4&&-1<T0.indexOf(t)){for(;i!==null;){var s=Yo(i);if(s!==null&&zg(s),s=zu(t,e,n,r),s===null&&Yc(t,e,r,ul,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Yc(t,e,r,null,n)}}var ul=null;function zu(t,e,n,r){if(ul=null,t=Gd(r),t=Kr(t),t!==null)if(e=fi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ag(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ul=t,null}function Hg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_0()){case Kd:return 1;case Mg:return 4;case al:case v0:return 16;case Lg:return 536870912;default:return 16}default:return 16}}var sr=null,Xd=null,Ha=null;function Vg(){if(Ha)return Ha;var t,e=Xd,n=e.length,r,i="value"in sr?sr.value:sr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ha=i.slice(t,1<r?1-r:void 0)}function Va(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Na(){return!0}function Wf(){return!1}function Rt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Na:Wf,this.isPropagationStopped=Wf,this}return Ne(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Na)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Na)},persist:function(){},isPersistent:Na}),e}var _s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jd=Rt(_s),Ko=Ne({},_s,{view:0,detail:0}),A0=Rt(Ko),zc,Uc,zs,tc=Ne({},Ko,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==zs&&(zs&&t.type==="mousemove"?(zc=t.screenX-zs.screenX,Uc=t.screenY-zs.screenY):Uc=zc=0,zs=t),zc)},movementY:function(t){return"movementY"in t?t.movementY:Uc}}),Hf=Rt(tc),b0=Ne({},tc,{dataTransfer:0}),O0=Rt(b0),D0=Ne({},Ko,{relatedTarget:0}),$c=Rt(D0),M0=Ne({},_s,{animationName:0,elapsedTime:0,pseudoElement:0}),L0=Rt(M0),j0=Ne({},_s,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),F0=Rt(j0),z0=Ne({},_s,{data:0}),Vf=Rt(z0),U0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},B0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function W0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=B0[t])?!!e[t]:!1}function Zd(){return W0}var H0=Ne({},Ko,{key:function(t){if(t.key){var e=U0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Va(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zd,charCode:function(t){return t.type==="keypress"?Va(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Va(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),V0=Rt(H0),G0=Ne({},tc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gf=Rt(G0),K0=Ne({},Ko,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zd}),Y0=Rt(K0),q0=Ne({},_s,{propertyName:0,elapsedTime:0,pseudoElement:0}),Q0=Rt(q0),X0=Ne({},tc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),J0=Rt(X0),Z0=[9,13,27,32],eh=An&&"CompositionEvent"in window,ro=null;An&&"documentMode"in document&&(ro=document.documentMode);var eE=An&&"TextEvent"in window&&!ro,Gg=An&&(!eh||ro&&8<ro&&11>=ro),Kf=" ",Yf=!1;function Kg(t,e){switch(t){case"keyup":return Z0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ri=!1;function tE(t,e){switch(t){case"compositionend":return Yg(e);case"keypress":return e.which!==32?null:(Yf=!0,Kf);case"textInput":return t=e.data,t===Kf&&Yf?null:t;default:return null}}function nE(t,e){if(Ri)return t==="compositionend"||!eh&&Kg(t,e)?(t=Vg(),Ha=Xd=sr=null,Ri=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Gg&&e.locale!=="ko"?null:e.data;default:return null}}var rE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!rE[t.type]:e==="textarea"}function qg(t,e,n,r){Tg(r),e=dl(e,"onChange"),0<e.length&&(n=new Jd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var io=null,So=null;function iE(t){o_(t,0)}function nc(t){var e=Oi(t);if(yg(e))return t}function sE(t,e){if(t==="change")return e}var Qg=!1;if(An){var Bc;if(An){var Wc="oninput"in document;if(!Wc){var Qf=document.createElement("div");Qf.setAttribute("oninput","return;"),Wc=typeof Qf.oninput=="function"}Bc=Wc}else Bc=!1;Qg=Bc&&(!document.documentMode||9<document.documentMode)}function Xf(){io&&(io.detachEvent("onpropertychange",Xg),So=io=null)}function Xg(t){if(t.propertyName==="value"&&nc(So)){var e=[];qg(e,So,t,Gd(t)),Rg(iE,e)}}function oE(t,e,n){t==="focusin"?(Xf(),io=e,So=n,io.attachEvent("onpropertychange",Xg)):t==="focusout"&&Xf()}function aE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return nc(So)}function lE(t,e){if(t==="click")return nc(e)}function cE(t,e){if(t==="input"||t==="change")return nc(e)}function uE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var tn=typeof Object.is=="function"?Object.is:uE;function Io(t,e){if(tn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Eu.call(e,i)||!tn(t[i],e[i]))return!1}return!0}function Jf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Zf(t,e){var n=Jf(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Jf(n)}}function Jg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Jg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Zg(){for(var t=window,e=il();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=il(t.document)}return e}function th(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function dE(t){var e=Zg(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Jg(n.ownerDocument.documentElement,n)){if(r!==null&&th(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Zf(n,s);var o=Zf(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var hE=An&&"documentMode"in document&&11>=document.documentMode,Ai=null,Uu=null,so=null,$u=!1;function ep(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$u||Ai==null||Ai!==il(r)||(r=Ai,"selectionStart"in r&&th(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),so&&Io(so,r)||(so=r,r=dl(Uu,"onSelect"),0<r.length&&(e=new Jd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ai)))}function xa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var bi={animationend:xa("Animation","AnimationEnd"),animationiteration:xa("Animation","AnimationIteration"),animationstart:xa("Animation","AnimationStart"),transitionend:xa("Transition","TransitionEnd")},Hc={},e_={};An&&(e_=document.createElement("div").style,"AnimationEvent"in window||(delete bi.animationend.animation,delete bi.animationiteration.animation,delete bi.animationstart.animation),"TransitionEvent"in window||delete bi.transitionend.transition);function rc(t){if(Hc[t])return Hc[t];if(!bi[t])return t;var e=bi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in e_)return Hc[t]=e[n];return t}var t_=rc("animationend"),n_=rc("animationiteration"),r_=rc("animationstart"),i_=rc("transitionend"),s_=new Map,tp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xr(t,e){s_.set(t,e),hi(e,[t])}for(var Vc=0;Vc<tp.length;Vc++){var Gc=tp[Vc],fE=Gc.toLowerCase(),pE=Gc[0].toUpperCase()+Gc.slice(1);xr(fE,"on"+pE)}xr(t_,"onAnimationEnd");xr(n_,"onAnimationIteration");xr(r_,"onAnimationStart");xr("dblclick","onDoubleClick");xr("focusin","onFocus");xr("focusout","onBlur");xr(i_,"onTransitionEnd");Zi("onMouseEnter",["mouseout","mouseover"]);Zi("onMouseLeave",["mouseout","mouseover"]);Zi("onPointerEnter",["pointerout","pointerover"]);Zi("onPointerLeave",["pointerout","pointerover"]);hi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hi("onBeforeInput",["compositionend","keypress","textInput","paste"]);hi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Js="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Js));function np(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,f0(r,e,void 0,t),t.currentTarget=null}function o_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;np(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;np(i,a,c),s=l}}}if(ol)throw t=Lu,ol=!1,Lu=null,t}function ye(t,e){var n=e[Gu];n===void 0&&(n=e[Gu]=new Set);var r=t+"__bubble";n.has(r)||(a_(e,t,2,!1),n.add(r))}function Kc(t,e,n){var r=0;e&&(r|=4),a_(n,t,r,e)}var Pa="_reactListening"+Math.random().toString(36).slice(2);function To(t){if(!t[Pa]){t[Pa]=!0,pg.forEach(function(n){n!=="selectionchange"&&(mE.has(n)||Kc(n,!1,t),Kc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Pa]||(e[Pa]=!0,Kc("selectionchange",!1,e))}}function a_(t,e,n,r){switch(Hg(e)){case 1:var i=P0;break;case 4:i=R0;break;default:i=Qd}n=i.bind(null,e,n,t),i=void 0,!Mu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Yc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Kr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Rg(function(){var c=s,d=Gd(n),p=[];e:{var f=s_.get(t);if(f!==void 0){var v=Jd,w=t;switch(t){case"keypress":if(Va(n)===0)break e;case"keydown":case"keyup":v=V0;break;case"focusin":w="focus",v=$c;break;case"focusout":w="blur",v=$c;break;case"beforeblur":case"afterblur":v=$c;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Hf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=O0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Y0;break;case t_:case n_:case r_:v=L0;break;case i_:v=Q0;break;case"scroll":v=A0;break;case"wheel":v=J0;break;case"copy":case"cut":case"paste":v=F0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Gf}var C=(e&4)!==0,W=!C&&t==="scroll",g=C?f!==null?f+"Capture":null:f;C=[];for(var m=c,_;m!==null;){_=m;var k=_.stateNode;if(_.tag===5&&k!==null&&(_=k,g!==null&&(k=wo(m,g),k!=null&&C.push(No(m,k,_)))),W)break;m=m.return}0<C.length&&(f=new v(f,w,null,n,d),p.push({event:f,listeners:C}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",f&&n!==Ou&&(w=n.relatedTarget||n.fromElement)&&(Kr(w)||w[bn]))break e;if((v||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,v?(w=n.relatedTarget||n.toElement,v=c,w=w?Kr(w):null,w!==null&&(W=fi(w),w!==W||w.tag!==5&&w.tag!==6)&&(w=null)):(v=null,w=c),v!==w)){if(C=Hf,k="onMouseLeave",g="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(C=Gf,k="onPointerLeave",g="onPointerEnter",m="pointer"),W=v==null?f:Oi(v),_=w==null?f:Oi(w),f=new C(k,m+"leave",v,n,d),f.target=W,f.relatedTarget=_,k=null,Kr(d)===c&&(C=new C(g,m+"enter",w,n,d),C.target=_,C.relatedTarget=W,k=C),W=k,v&&w)t:{for(C=v,g=w,m=0,_=C;_;_=Ti(_))m++;for(_=0,k=g;k;k=Ti(k))_++;for(;0<m-_;)C=Ti(C),m--;for(;0<_-m;)g=Ti(g),_--;for(;m--;){if(C===g||g!==null&&C===g.alternate)break t;C=Ti(C),g=Ti(g)}C=null}else C=null;v!==null&&rp(p,f,v,C,!1),w!==null&&W!==null&&rp(p,W,w,C,!0)}}e:{if(f=c?Oi(c):window,v=f.nodeName&&f.nodeName.toLowerCase(),v==="select"||v==="input"&&f.type==="file")var j=sE;else if(qf(f))if(Qg)j=cE;else{j=aE;var z=oE}else(v=f.nodeName)&&v.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(j=lE);if(j&&(j=j(t,c))){qg(p,j,n,d);break e}z&&z(t,f,c),t==="focusout"&&(z=f._wrapperState)&&z.controlled&&f.type==="number"&&xu(f,"number",f.value)}switch(z=c?Oi(c):window,t){case"focusin":(qf(z)||z.contentEditable==="true")&&(Ai=z,Uu=c,so=null);break;case"focusout":so=Uu=Ai=null;break;case"mousedown":$u=!0;break;case"contextmenu":case"mouseup":case"dragend":$u=!1,ep(p,n,d);break;case"selectionchange":if(hE)break;case"keydown":case"keyup":ep(p,n,d)}var I;if(eh)e:{switch(t){case"compositionstart":var V="onCompositionStart";break e;case"compositionend":V="onCompositionEnd";break e;case"compositionupdate":V="onCompositionUpdate";break e}V=void 0}else Ri?Kg(t,n)&&(V="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(V="onCompositionStart");V&&(Gg&&n.locale!=="ko"&&(Ri||V!=="onCompositionStart"?V==="onCompositionEnd"&&Ri&&(I=Vg()):(sr=d,Xd="value"in sr?sr.value:sr.textContent,Ri=!0)),z=dl(c,V),0<z.length&&(V=new Vf(V,t,null,n,d),p.push({event:V,listeners:z}),I?V.data=I:(I=Yg(n),I!==null&&(V.data=I)))),(I=eE?tE(t,n):nE(t,n))&&(c=dl(c,"onBeforeInput"),0<c.length&&(d=new Vf("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=I))}o_(p,e)})}function No(t,e,n){return{instance:t,listener:e,currentTarget:n}}function dl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=wo(t,n),s!=null&&r.unshift(No(t,s,i)),s=wo(t,e),s!=null&&r.push(No(t,s,i))),t=t.return}return r}function Ti(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function rp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=wo(n,s),l!=null&&o.unshift(No(n,l,a))):i||(l=wo(n,s),l!=null&&o.push(No(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var gE=/\r\n?/g,_E=/\u0000|\uFFFD/g;function ip(t){return(typeof t=="string"?t:""+t).replace(gE,`
`).replace(_E,"")}function Ra(t,e,n){if(e=ip(e),ip(t)!==e&&n)throw Error(P(425))}function hl(){}var Bu=null,Wu=null;function Hu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Vu=typeof setTimeout=="function"?setTimeout:void 0,vE=typeof clearTimeout=="function"?clearTimeout:void 0,sp=typeof Promise=="function"?Promise:void 0,yE=typeof queueMicrotask=="function"?queueMicrotask:typeof sp<"u"?function(t){return sp.resolve(null).then(t).catch(wE)}:Vu;function wE(t){setTimeout(function(){throw t})}function qc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ko(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ko(e)}function dr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function op(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var vs=Math.random().toString(36).slice(2),un="__reactFiber$"+vs,xo="__reactProps$"+vs,bn="__reactContainer$"+vs,Gu="__reactEvents$"+vs,EE="__reactListeners$"+vs,CE="__reactHandles$"+vs;function Kr(t){var e=t[un];if(e)return e;for(var n=t.parentNode;n;){if(e=n[bn]||n[un]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=op(t);t!==null;){if(n=t[un])return n;t=op(t)}return e}t=n,n=t.parentNode}return null}function Yo(t){return t=t[un]||t[bn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Oi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(P(33))}function ic(t){return t[xo]||null}var Ku=[],Di=-1;function Pr(t){return{current:t}}function we(t){0>Di||(t.current=Ku[Di],Ku[Di]=null,Di--)}function ve(t,e){Di++,Ku[Di]=t.current,t.current=e}var kr={},rt=Pr(kr),_t=Pr(!1),ei=kr;function es(t,e){var n=t.type.contextTypes;if(!n)return kr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function vt(t){return t=t.childContextTypes,t!=null}function fl(){we(_t),we(rt)}function ap(t,e,n){if(rt.current!==kr)throw Error(P(168));ve(rt,e),ve(_t,n)}function l_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(P(108,o0(t)||"Unknown",i));return Ne({},n,r)}function pl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||kr,ei=rt.current,ve(rt,t),ve(_t,_t.current),!0}function lp(t,e,n){var r=t.stateNode;if(!r)throw Error(P(169));n?(t=l_(t,e,ei),r.__reactInternalMemoizedMergedChildContext=t,we(_t),we(rt),ve(rt,t)):we(_t),ve(_t,n)}var kn=null,sc=!1,Qc=!1;function c_(t){kn===null?kn=[t]:kn.push(t)}function kE(t){sc=!0,c_(t)}function Rr(){if(!Qc&&kn!==null){Qc=!0;var t=0,e=he;try{var n=kn;for(he=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}kn=null,sc=!1}catch(i){throw kn!==null&&(kn=kn.slice(t+1)),Dg(Kd,Rr),i}finally{he=e,Qc=!1}}return null}var Mi=[],Li=0,ml=null,gl=0,Dt=[],Mt=0,ti=null,Sn=1,In="";function Wr(t,e){Mi[Li++]=gl,Mi[Li++]=ml,ml=t,gl=e}function u_(t,e,n){Dt[Mt++]=Sn,Dt[Mt++]=In,Dt[Mt++]=ti,ti=t;var r=Sn;t=In;var i=32-Jt(r)-1;r&=~(1<<i),n+=1;var s=32-Jt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Sn=1<<32-Jt(e)+i|n<<i|r,In=s+t}else Sn=1<<s|n<<i|r,In=t}function nh(t){t.return!==null&&(Wr(t,1),u_(t,1,0))}function rh(t){for(;t===ml;)ml=Mi[--Li],Mi[Li]=null,gl=Mi[--Li],Mi[Li]=null;for(;t===ti;)ti=Dt[--Mt],Dt[Mt]=null,In=Dt[--Mt],Dt[Mt]=null,Sn=Dt[--Mt],Dt[Mt]=null}var Nt=null,Tt=null,Ce=!1,Yt=null;function d_(t,e){var n=Lt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function cp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Nt=t,Tt=dr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Nt=t,Tt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ti!==null?{id:Sn,overflow:In}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Lt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Nt=t,Tt=null,!0):!1;default:return!1}}function Yu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function qu(t){if(Ce){var e=Tt;if(e){var n=e;if(!cp(t,e)){if(Yu(t))throw Error(P(418));e=dr(n.nextSibling);var r=Nt;e&&cp(t,e)?d_(r,n):(t.flags=t.flags&-4097|2,Ce=!1,Nt=t)}}else{if(Yu(t))throw Error(P(418));t.flags=t.flags&-4097|2,Ce=!1,Nt=t}}}function up(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Nt=t}function Aa(t){if(t!==Nt)return!1;if(!Ce)return up(t),Ce=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Hu(t.type,t.memoizedProps)),e&&(e=Tt)){if(Yu(t))throw h_(),Error(P(418));for(;e;)d_(t,e),e=dr(e.nextSibling)}if(up(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(P(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Tt=dr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Tt=null}}else Tt=Nt?dr(t.stateNode.nextSibling):null;return!0}function h_(){for(var t=Tt;t;)t=dr(t.nextSibling)}function ts(){Tt=Nt=null,Ce=!1}function ih(t){Yt===null?Yt=[t]:Yt.push(t)}var SE=zn.ReactCurrentBatchConfig;function Us(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,t))}return t}function ba(t,e){throw t=Object.prototype.toString.call(e),Error(P(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function dp(t){var e=t._init;return e(t._payload)}function f_(t){function e(g,m){if(t){var _=g.deletions;_===null?(g.deletions=[m],g.flags|=16):_.push(m)}}function n(g,m){if(!t)return null;for(;m!==null;)e(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function i(g,m){return g=mr(g,m),g.index=0,g.sibling=null,g}function s(g,m,_){return g.index=_,t?(_=g.alternate,_!==null?(_=_.index,_<m?(g.flags|=2,m):_):(g.flags|=2,m)):(g.flags|=1048576,m)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,m,_,k){return m===null||m.tag!==6?(m=ru(_,g.mode,k),m.return=g,m):(m=i(m,_),m.return=g,m)}function l(g,m,_,k){var j=_.type;return j===Pi?d(g,m,_.props.children,k,_.key):m!==null&&(m.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Xn&&dp(j)===m.type)?(k=i(m,_.props),k.ref=Us(g,m,_),k.return=g,k):(k=Ja(_.type,_.key,_.props,null,g.mode,k),k.ref=Us(g,m,_),k.return=g,k)}function c(g,m,_,k){return m===null||m.tag!==4||m.stateNode.containerInfo!==_.containerInfo||m.stateNode.implementation!==_.implementation?(m=iu(_,g.mode,k),m.return=g,m):(m=i(m,_.children||[]),m.return=g,m)}function d(g,m,_,k,j){return m===null||m.tag!==7?(m=Zr(_,g.mode,k,j),m.return=g,m):(m=i(m,_),m.return=g,m)}function p(g,m,_){if(typeof m=="string"&&m!==""||typeof m=="number")return m=ru(""+m,g.mode,_),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ea:return _=Ja(m.type,m.key,m.props,null,g.mode,_),_.ref=Us(g,null,m),_.return=g,_;case xi:return m=iu(m,g.mode,_),m.return=g,m;case Xn:var k=m._init;return p(g,k(m._payload),_)}if(Qs(m)||Ms(m))return m=Zr(m,g.mode,_,null),m.return=g,m;ba(g,m)}return null}function f(g,m,_,k){var j=m!==null?m.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return j!==null?null:a(g,m,""+_,k);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ea:return _.key===j?l(g,m,_,k):null;case xi:return _.key===j?c(g,m,_,k):null;case Xn:return j=_._init,f(g,m,j(_._payload),k)}if(Qs(_)||Ms(_))return j!==null?null:d(g,m,_,k,null);ba(g,_)}return null}function v(g,m,_,k,j){if(typeof k=="string"&&k!==""||typeof k=="number")return g=g.get(_)||null,a(m,g,""+k,j);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Ea:return g=g.get(k.key===null?_:k.key)||null,l(m,g,k,j);case xi:return g=g.get(k.key===null?_:k.key)||null,c(m,g,k,j);case Xn:var z=k._init;return v(g,m,_,z(k._payload),j)}if(Qs(k)||Ms(k))return g=g.get(_)||null,d(m,g,k,j,null);ba(m,k)}return null}function w(g,m,_,k){for(var j=null,z=null,I=m,V=m=0,le=null;I!==null&&V<_.length;V++){I.index>V?(le=I,I=null):le=I.sibling;var J=f(g,I,_[V],k);if(J===null){I===null&&(I=le);break}t&&I&&J.alternate===null&&e(g,I),m=s(J,m,V),z===null?j=J:z.sibling=J,z=J,I=le}if(V===_.length)return n(g,I),Ce&&Wr(g,V),j;if(I===null){for(;V<_.length;V++)I=p(g,_[V],k),I!==null&&(m=s(I,m,V),z===null?j=I:z.sibling=I,z=I);return Ce&&Wr(g,V),j}for(I=r(g,I);V<_.length;V++)le=v(I,g,V,_[V],k),le!==null&&(t&&le.alternate!==null&&I.delete(le.key===null?V:le.key),m=s(le,m,V),z===null?j=le:z.sibling=le,z=le);return t&&I.forEach(function(Ue){return e(g,Ue)}),Ce&&Wr(g,V),j}function C(g,m,_,k){var j=Ms(_);if(typeof j!="function")throw Error(P(150));if(_=j.call(_),_==null)throw Error(P(151));for(var z=j=null,I=m,V=m=0,le=null,J=_.next();I!==null&&!J.done;V++,J=_.next()){I.index>V?(le=I,I=null):le=I.sibling;var Ue=f(g,I,J.value,k);if(Ue===null){I===null&&(I=le);break}t&&I&&Ue.alternate===null&&e(g,I),m=s(Ue,m,V),z===null?j=Ue:z.sibling=Ue,z=Ue,I=le}if(J.done)return n(g,I),Ce&&Wr(g,V),j;if(I===null){for(;!J.done;V++,J=_.next())J=p(g,J.value,k),J!==null&&(m=s(J,m,V),z===null?j=J:z.sibling=J,z=J);return Ce&&Wr(g,V),j}for(I=r(g,I);!J.done;V++,J=_.next())J=v(I,g,V,J.value,k),J!==null&&(t&&J.alternate!==null&&I.delete(J.key===null?V:J.key),m=s(J,m,V),z===null?j=J:z.sibling=J,z=J);return t&&I.forEach(function(it){return e(g,it)}),Ce&&Wr(g,V),j}function W(g,m,_,k){if(typeof _=="object"&&_!==null&&_.type===Pi&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Ea:e:{for(var j=_.key,z=m;z!==null;){if(z.key===j){if(j=_.type,j===Pi){if(z.tag===7){n(g,z.sibling),m=i(z,_.props.children),m.return=g,g=m;break e}}else if(z.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Xn&&dp(j)===z.type){n(g,z.sibling),m=i(z,_.props),m.ref=Us(g,z,_),m.return=g,g=m;break e}n(g,z);break}else e(g,z);z=z.sibling}_.type===Pi?(m=Zr(_.props.children,g.mode,k,_.key),m.return=g,g=m):(k=Ja(_.type,_.key,_.props,null,g.mode,k),k.ref=Us(g,m,_),k.return=g,g=k)}return o(g);case xi:e:{for(z=_.key;m!==null;){if(m.key===z)if(m.tag===4&&m.stateNode.containerInfo===_.containerInfo&&m.stateNode.implementation===_.implementation){n(g,m.sibling),m=i(m,_.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else e(g,m);m=m.sibling}m=iu(_,g.mode,k),m.return=g,g=m}return o(g);case Xn:return z=_._init,W(g,m,z(_._payload),k)}if(Qs(_))return w(g,m,_,k);if(Ms(_))return C(g,m,_,k);ba(g,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,m!==null&&m.tag===6?(n(g,m.sibling),m=i(m,_),m.return=g,g=m):(n(g,m),m=ru(_,g.mode,k),m.return=g,g=m),o(g)):n(g,m)}return W}var ns=f_(!0),p_=f_(!1),_l=Pr(null),vl=null,ji=null,sh=null;function oh(){sh=ji=vl=null}function ah(t){var e=_l.current;we(_l),t._currentValue=e}function Qu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Gi(t,e){vl=t,sh=ji=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(mt=!0),t.firstContext=null)}function zt(t){var e=t._currentValue;if(sh!==t)if(t={context:t,memoizedValue:e,next:null},ji===null){if(vl===null)throw Error(P(308));ji=t,vl.dependencies={lanes:0,firstContext:t}}else ji=ji.next=t;return e}var Yr=null;function lh(t){Yr===null?Yr=[t]:Yr.push(t)}function m_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,lh(e)):(n.next=i.next,i.next=n),e.interleaved=n,On(t,r)}function On(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Jn=!1;function ch(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function g_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function hr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,On(t,n)}return i=r.interleaved,i===null?(e.next=e,lh(r)):(e.next=i.next,i.next=e),r.interleaved=e,On(t,n)}function Ga(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Yd(t,n)}}function hp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function yl(t,e,n,r){var i=t.updateQueue;Jn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var p=i.baseState;o=0,d=c=l=null,a=s;do{var f=a.lane,v=a.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=t,C=a;switch(f=e,v=n,C.tag){case 1:if(w=C.payload,typeof w=="function"){p=w.call(v,p,f);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=C.payload,f=typeof w=="function"?w.call(v,p,f):w,f==null)break e;p=Ne({},p,f);break e;case 2:Jn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else v={eventTime:v,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=v,l=p):d=d.next=v,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(l=p),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ri|=o,t.lanes=o,t.memoizedState=p}}function fp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var qo={},fn=Pr(qo),Po=Pr(qo),Ro=Pr(qo);function qr(t){if(t===qo)throw Error(P(174));return t}function uh(t,e){switch(ve(Ro,e),ve(Po,t),ve(fn,qo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ru(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ru(e,t)}we(fn),ve(fn,e)}function rs(){we(fn),we(Po),we(Ro)}function __(t){qr(Ro.current);var e=qr(fn.current),n=Ru(e,t.type);e!==n&&(ve(Po,t),ve(fn,n))}function dh(t){Po.current===t&&(we(fn),we(Po))}var ke=Pr(0);function wl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Xc=[];function hh(){for(var t=0;t<Xc.length;t++)Xc[t]._workInProgressVersionPrimary=null;Xc.length=0}var Ka=zn.ReactCurrentDispatcher,Jc=zn.ReactCurrentBatchConfig,ni=0,Te=null,je=null,We=null,El=!1,oo=!1,Ao=0,IE=0;function Ze(){throw Error(P(321))}function fh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!tn(t[n],e[n]))return!1;return!0}function ph(t,e,n,r,i,s){if(ni=s,Te=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ka.current=t===null||t.memoizedState===null?PE:RE,t=n(r,i),oo){s=0;do{if(oo=!1,Ao=0,25<=s)throw Error(P(301));s+=1,We=je=null,e.updateQueue=null,Ka.current=AE,t=n(r,i)}while(oo)}if(Ka.current=Cl,e=je!==null&&je.next!==null,ni=0,We=je=Te=null,El=!1,e)throw Error(P(300));return t}function mh(){var t=Ao!==0;return Ao=0,t}function cn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?Te.memoizedState=We=t:We=We.next=t,We}function Ut(){if(je===null){var t=Te.alternate;t=t!==null?t.memoizedState:null}else t=je.next;var e=We===null?Te.memoizedState:We.next;if(e!==null)We=e,je=t;else{if(t===null)throw Error(P(310));je=t,t={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},We===null?Te.memoizedState=We=t:We=We.next=t}return We}function bo(t,e){return typeof e=="function"?e(t):e}function Zc(t){var e=Ut(),n=e.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=t;var r=je,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((ni&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=p,o=r):l=l.next=p,Te.lanes|=d,ri|=d}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,tn(r,e.memoizedState)||(mt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Te.lanes|=s,ri|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function eu(t){var e=Ut(),n=e.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);tn(s,e.memoizedState)||(mt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function v_(){}function y_(t,e){var n=Te,r=Ut(),i=e(),s=!tn(r.memoizedState,i);if(s&&(r.memoizedState=i,mt=!0),r=r.queue,gh(C_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||We!==null&&We.memoizedState.tag&1){if(n.flags|=2048,Oo(9,E_.bind(null,n,r,i,e),void 0,null),Ge===null)throw Error(P(349));ni&30||w_(n,e,i)}return i}function w_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function E_(t,e,n,r){e.value=n,e.getSnapshot=r,k_(e)&&S_(t)}function C_(t,e,n){return n(function(){k_(e)&&S_(t)})}function k_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!tn(t,n)}catch{return!0}}function S_(t){var e=On(t,1);e!==null&&Zt(e,t,1,-1)}function pp(t){var e=cn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bo,lastRenderedState:t},e.queue=t,t=t.dispatch=xE.bind(null,Te,t),[e.memoizedState,t]}function Oo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function I_(){return Ut().memoizedState}function Ya(t,e,n,r){var i=cn();Te.flags|=t,i.memoizedState=Oo(1|e,n,void 0,r===void 0?null:r)}function oc(t,e,n,r){var i=Ut();r=r===void 0?null:r;var s=void 0;if(je!==null){var o=je.memoizedState;if(s=o.destroy,r!==null&&fh(r,o.deps)){i.memoizedState=Oo(e,n,s,r);return}}Te.flags|=t,i.memoizedState=Oo(1|e,n,s,r)}function mp(t,e){return Ya(8390656,8,t,e)}function gh(t,e){return oc(2048,8,t,e)}function T_(t,e){return oc(4,2,t,e)}function N_(t,e){return oc(4,4,t,e)}function x_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function P_(t,e,n){return n=n!=null?n.concat([t]):null,oc(4,4,x_.bind(null,e,t),n)}function _h(){}function R_(t,e){var n=Ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&fh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function A_(t,e){var n=Ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&fh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function b_(t,e,n){return ni&21?(tn(n,e)||(n=jg(),Te.lanes|=n,ri|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,mt=!0),t.memoizedState=n)}function TE(t,e){var n=he;he=n!==0&&4>n?n:4,t(!0);var r=Jc.transition;Jc.transition={};try{t(!1),e()}finally{he=n,Jc.transition=r}}function O_(){return Ut().memoizedState}function NE(t,e,n){var r=pr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},D_(t))M_(e,n);else if(n=m_(t,e,n,r),n!==null){var i=lt();Zt(n,t,r,i),L_(n,e,r)}}function xE(t,e,n){var r=pr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(D_(t))M_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,tn(a,o)){var l=e.interleaved;l===null?(i.next=i,lh(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=m_(t,e,i,r),n!==null&&(i=lt(),Zt(n,t,r,i),L_(n,e,r))}}function D_(t){var e=t.alternate;return t===Te||e!==null&&e===Te}function M_(t,e){oo=El=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function L_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Yd(t,n)}}var Cl={readContext:zt,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useInsertionEffect:Ze,useLayoutEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useMutableSource:Ze,useSyncExternalStore:Ze,useId:Ze,unstable_isNewReconciler:!1},PE={readContext:zt,useCallback:function(t,e){return cn().memoizedState=[t,e===void 0?null:e],t},useContext:zt,useEffect:mp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ya(4194308,4,x_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ya(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ya(4,2,t,e)},useMemo:function(t,e){var n=cn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=cn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=NE.bind(null,Te,t),[r.memoizedState,t]},useRef:function(t){var e=cn();return t={current:t},e.memoizedState=t},useState:pp,useDebugValue:_h,useDeferredValue:function(t){return cn().memoizedState=t},useTransition:function(){var t=pp(!1),e=t[0];return t=TE.bind(null,t[1]),cn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Te,i=cn();if(Ce){if(n===void 0)throw Error(P(407));n=n()}else{if(n=e(),Ge===null)throw Error(P(349));ni&30||w_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,mp(C_.bind(null,r,s,t),[t]),r.flags|=2048,Oo(9,E_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=cn(),e=Ge.identifierPrefix;if(Ce){var n=In,r=Sn;n=(r&~(1<<32-Jt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ao++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=IE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},RE={readContext:zt,useCallback:R_,useContext:zt,useEffect:gh,useImperativeHandle:P_,useInsertionEffect:T_,useLayoutEffect:N_,useMemo:A_,useReducer:Zc,useRef:I_,useState:function(){return Zc(bo)},useDebugValue:_h,useDeferredValue:function(t){var e=Ut();return b_(e,je.memoizedState,t)},useTransition:function(){var t=Zc(bo)[0],e=Ut().memoizedState;return[t,e]},useMutableSource:v_,useSyncExternalStore:y_,useId:O_,unstable_isNewReconciler:!1},AE={readContext:zt,useCallback:R_,useContext:zt,useEffect:gh,useImperativeHandle:P_,useInsertionEffect:T_,useLayoutEffect:N_,useMemo:A_,useReducer:eu,useRef:I_,useState:function(){return eu(bo)},useDebugValue:_h,useDeferredValue:function(t){var e=Ut();return je===null?e.memoizedState=t:b_(e,je.memoizedState,t)},useTransition:function(){var t=eu(bo)[0],e=Ut().memoizedState;return[t,e]},useMutableSource:v_,useSyncExternalStore:y_,useId:O_,unstable_isNewReconciler:!1};function Vt(t,e){if(t&&t.defaultProps){e=Ne({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Xu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ne({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ac={isMounted:function(t){return(t=t._reactInternals)?fi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=lt(),i=pr(t),s=Pn(r,i);s.payload=e,n!=null&&(s.callback=n),e=hr(t,s,i),e!==null&&(Zt(e,t,i,r),Ga(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=lt(),i=pr(t),s=Pn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=hr(t,s,i),e!==null&&(Zt(e,t,i,r),Ga(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=lt(),r=pr(t),i=Pn(n,r);i.tag=2,e!=null&&(i.callback=e),e=hr(t,i,r),e!==null&&(Zt(e,t,r,n),Ga(e,t,r))}};function gp(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Io(n,r)||!Io(i,s):!0}function j_(t,e,n){var r=!1,i=kr,s=e.contextType;return typeof s=="object"&&s!==null?s=zt(s):(i=vt(e)?ei:rt.current,r=e.contextTypes,s=(r=r!=null)?es(t,i):kr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ac,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function _p(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ac.enqueueReplaceState(e,e.state,null)}function Ju(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},ch(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=zt(s):(s=vt(e)?ei:rt.current,i.context=es(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Xu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ac.enqueueReplaceState(i,i.state,null),yl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function is(t,e){try{var n="",r=e;do n+=s0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function tu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Zu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var bE=typeof WeakMap=="function"?WeakMap:Map;function F_(t,e,n){n=Pn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Sl||(Sl=!0,cd=r),Zu(t,e)},n}function z_(t,e,n){n=Pn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Zu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Zu(t,e),typeof r!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function vp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new bE;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=GE.bind(null,t,e,n),e.then(t,t))}function yp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function wp(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Pn(-1,1),e.tag=2,hr(n,e,1))),n.lanes|=1),t)}var OE=zn.ReactCurrentOwner,mt=!1;function ot(t,e,n,r){e.child=t===null?p_(e,null,n,r):ns(e,t.child,n,r)}function Ep(t,e,n,r,i){n=n.render;var s=e.ref;return Gi(e,i),r=ph(t,e,n,r,s,i),n=mh(),t!==null&&!mt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Dn(t,e,i)):(Ce&&n&&nh(e),e.flags|=1,ot(t,e,r,i),e.child)}function Cp(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Ih(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,U_(t,e,s,r,i)):(t=Ja(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Io,n(o,r)&&t.ref===e.ref)return Dn(t,e,i)}return e.flags|=1,t=mr(s,r),t.ref=e.ref,t.return=e,e.child=t}function U_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Io(s,r)&&t.ref===e.ref)if(mt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(mt=!0);else return e.lanes=t.lanes,Dn(t,e,i)}return ed(t,e,n,r,i)}function $_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(zi,St),St|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ve(zi,St),St|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ve(zi,St),St|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ve(zi,St),St|=r;return ot(t,e,i,n),e.child}function B_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ed(t,e,n,r,i){var s=vt(n)?ei:rt.current;return s=es(e,s),Gi(e,i),n=ph(t,e,n,r,s,i),r=mh(),t!==null&&!mt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Dn(t,e,i)):(Ce&&r&&nh(e),e.flags|=1,ot(t,e,n,i),e.child)}function kp(t,e,n,r,i){if(vt(n)){var s=!0;pl(e)}else s=!1;if(Gi(e,i),e.stateNode===null)qa(t,e),j_(e,n,r),Ju(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=zt(c):(c=vt(n)?ei:rt.current,c=es(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&_p(e,o,r,c),Jn=!1;var f=e.memoizedState;o.state=f,yl(e,r,o,i),l=e.memoizedState,a!==r||f!==l||_t.current||Jn?(typeof d=="function"&&(Xu(e,n,d,r),l=e.memoizedState),(a=Jn||gp(e,n,a,r,f,l,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,g_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Vt(e.type,a),o.props=c,p=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=zt(l):(l=vt(n)?ei:rt.current,l=es(e,l));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||f!==l)&&_p(e,o,r,l),Jn=!1,f=e.memoizedState,o.state=f,yl(e,r,o,i);var w=e.memoizedState;a!==p||f!==w||_t.current||Jn?(typeof v=="function"&&(Xu(e,n,v,r),w=e.memoizedState),(c=Jn||gp(e,n,c,r,f,w,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=w),o.props=r,o.state=w,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return td(t,e,n,r,s,i)}function td(t,e,n,r,i,s){B_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&lp(e,n,!1),Dn(t,e,s);r=e.stateNode,OE.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ns(e,t.child,null,s),e.child=ns(e,null,a,s)):ot(t,e,a,s),e.memoizedState=r.state,i&&lp(e,n,!0),e.child}function W_(t){var e=t.stateNode;e.pendingContext?ap(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ap(t,e.context,!1),uh(t,e.containerInfo)}function Sp(t,e,n,r,i){return ts(),ih(i),e.flags|=256,ot(t,e,n,r),e.child}var nd={dehydrated:null,treeContext:null,retryLane:0};function rd(t){return{baseLanes:t,cachePool:null,transitions:null}}function H_(t,e,n){var r=e.pendingProps,i=ke.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ve(ke,i&1),t===null)return qu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=uc(o,r,0,null),t=Zr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=rd(n),e.memoizedState=nd,t):vh(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return DE(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=mr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=mr(a,s):(s=Zr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?rd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=nd,r}return s=t.child,t=s.sibling,r=mr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function vh(t,e){return e=uc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Oa(t,e,n,r){return r!==null&&ih(r),ns(e,t.child,null,n),t=vh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function DE(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=tu(Error(P(422))),Oa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=uc({mode:"visible",children:r.children},i,0,null),s=Zr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ns(e,t.child,null,o),e.child.memoizedState=rd(o),e.memoizedState=nd,s);if(!(e.mode&1))return Oa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(P(419)),r=tu(s,r,void 0),Oa(t,e,o,r)}if(a=(o&t.childLanes)!==0,mt||a){if(r=Ge,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,On(t,i),Zt(r,t,i,-1))}return Sh(),r=tu(Error(P(421))),Oa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=KE.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Tt=dr(i.nextSibling),Nt=e,Ce=!0,Yt=null,t!==null&&(Dt[Mt++]=Sn,Dt[Mt++]=In,Dt[Mt++]=ti,Sn=t.id,In=t.overflow,ti=e),e=vh(e,r.children),e.flags|=4096,e)}function Ip(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Qu(t.return,e,n)}function nu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function V_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ot(t,e,r.children,n),r=ke.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ip(t,n,e);else if(t.tag===19)Ip(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ve(ke,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&wl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),nu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&wl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}nu(e,!0,n,null,s);break;case"together":nu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function qa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Dn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ri|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(P(153));if(e.child!==null){for(t=e.child,n=mr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=mr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ME(t,e,n){switch(e.tag){case 3:W_(e),ts();break;case 5:__(e);break;case 1:vt(e.type)&&pl(e);break;case 4:uh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ve(_l,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ve(ke,ke.current&1),e.flags|=128,null):n&e.child.childLanes?H_(t,e,n):(ve(ke,ke.current&1),t=Dn(t,e,n),t!==null?t.sibling:null);ve(ke,ke.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return V_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ve(ke,ke.current),r)break;return null;case 22:case 23:return e.lanes=0,$_(t,e,n)}return Dn(t,e,n)}var G_,id,K_,Y_;G_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};id=function(){};K_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,qr(fn.current);var s=null;switch(n){case"input":i=Tu(t,i),r=Tu(t,r),s=[];break;case"select":i=Ne({},i,{value:void 0}),r=Ne({},r,{value:void 0}),s=[];break;case"textarea":i=Pu(t,i),r=Pu(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=hl)}Au(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(vo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(vo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ye("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Y_=function(t,e,n,r){n!==r&&(e.flags|=4)};function $s(t,e){if(!Ce)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function et(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function LE(t,e,n){var r=e.pendingProps;switch(rh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(e),null;case 1:return vt(e.type)&&fl(),et(e),null;case 3:return r=e.stateNode,rs(),we(_t),we(rt),hh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Aa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Yt!==null&&(hd(Yt),Yt=null))),id(t,e),et(e),null;case 5:dh(e);var i=qr(Ro.current);if(n=e.type,t!==null&&e.stateNode!=null)K_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(P(166));return et(e),null}if(t=qr(fn.current),Aa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[un]=e,r[xo]=s,t=(e.mode&1)!==0,n){case"dialog":ye("cancel",r),ye("close",r);break;case"iframe":case"object":case"embed":ye("load",r);break;case"video":case"audio":for(i=0;i<Js.length;i++)ye(Js[i],r);break;case"source":ye("error",r);break;case"img":case"image":case"link":ye("error",r),ye("load",r);break;case"details":ye("toggle",r);break;case"input":Df(r,s),ye("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ye("invalid",r);break;case"textarea":Lf(r,s),ye("invalid",r)}Au(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ra(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ra(r.textContent,a,t),i=["children",""+a]):vo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ye("scroll",r)}switch(n){case"input":Ca(r),Mf(r,s,!0);break;case"textarea":Ca(r),jf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=hl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Cg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[un]=e,t[xo]=r,G_(t,e,!1,!1),e.stateNode=t;e:{switch(o=bu(n,r),n){case"dialog":ye("cancel",t),ye("close",t),i=r;break;case"iframe":case"object":case"embed":ye("load",t),i=r;break;case"video":case"audio":for(i=0;i<Js.length;i++)ye(Js[i],t);i=r;break;case"source":ye("error",t),i=r;break;case"img":case"image":case"link":ye("error",t),ye("load",t),i=r;break;case"details":ye("toggle",t),i=r;break;case"input":Df(t,r),i=Tu(t,r),ye("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ne({},r,{value:void 0}),ye("invalid",t);break;case"textarea":Lf(t,r),i=Pu(t,r),ye("invalid",t);break;default:i=r}Au(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Ig(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&kg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&yo(t,l):typeof l=="number"&&yo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(vo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ye("scroll",t):l!=null&&Bd(t,s,l,o))}switch(n){case"input":Ca(t),Mf(t,r,!1);break;case"textarea":Ca(t),jf(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Cr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Bi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Bi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=hl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return et(e),null;case 6:if(t&&e.stateNode!=null)Y_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(P(166));if(n=qr(Ro.current),qr(fn.current),Aa(e)){if(r=e.stateNode,n=e.memoizedProps,r[un]=e,(s=r.nodeValue!==n)&&(t=Nt,t!==null))switch(t.tag){case 3:Ra(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ra(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[un]=e,e.stateNode=r}return et(e),null;case 13:if(we(ke),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ce&&Tt!==null&&e.mode&1&&!(e.flags&128))h_(),ts(),e.flags|=98560,s=!1;else if(s=Aa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(P(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(P(317));s[un]=e}else ts(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;et(e),s=!1}else Yt!==null&&(hd(Yt),Yt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ke.current&1?ze===0&&(ze=3):Sh())),e.updateQueue!==null&&(e.flags|=4),et(e),null);case 4:return rs(),id(t,e),t===null&&To(e.stateNode.containerInfo),et(e),null;case 10:return ah(e.type._context),et(e),null;case 17:return vt(e.type)&&fl(),et(e),null;case 19:if(we(ke),s=e.memoizedState,s===null)return et(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)$s(s,!1);else{if(ze!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=wl(t),o!==null){for(e.flags|=128,$s(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ve(ke,ke.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ae()>ss&&(e.flags|=128,r=!0,$s(s,!1),e.lanes=4194304)}else{if(!r)if(t=wl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),$s(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ce)return et(e),null}else 2*Ae()-s.renderingStartTime>ss&&n!==1073741824&&(e.flags|=128,r=!0,$s(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ae(),e.sibling=null,n=ke.current,ve(ke,r?n&1|2:n&1),e):(et(e),null);case 22:case 23:return kh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?St&1073741824&&(et(e),e.subtreeFlags&6&&(e.flags|=8192)):et(e),null;case 24:return null;case 25:return null}throw Error(P(156,e.tag))}function jE(t,e){switch(rh(e),e.tag){case 1:return vt(e.type)&&fl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return rs(),we(_t),we(rt),hh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return dh(e),null;case 13:if(we(ke),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(P(340));ts()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return we(ke),null;case 4:return rs(),null;case 10:return ah(e.type._context),null;case 22:case 23:return kh(),null;case 24:return null;default:return null}}var Da=!1,nt=!1,FE=typeof WeakSet=="function"?WeakSet:Set,$=null;function Fi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Pe(t,e,r)}else n.current=null}function sd(t,e,n){try{n()}catch(r){Pe(t,e,r)}}var Tp=!1;function zE(t,e){if(Bu=cl,t=Zg(),th(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,p=t,f=null;t:for(;;){for(var v;p!==n||i!==0&&p.nodeType!==3||(a=o+i),p!==s||r!==0&&p.nodeType!==3||(l=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(v=p.firstChild)!==null;)f=p,p=v;for(;;){if(p===t)break t;if(f===n&&++c===i&&(a=o),f===s&&++d===r&&(l=o),(v=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Wu={focusedElem:t,selectionRange:n},cl=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var w=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var C=w.memoizedProps,W=w.memoizedState,g=e.stateNode,m=g.getSnapshotBeforeUpdate(e.elementType===e.type?C:Vt(e.type,C),W);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(k){Pe(e,e.return,k)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return w=Tp,Tp=!1,w}function ao(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&sd(e,n,s)}i=i.next}while(i!==r)}}function lc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function od(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function q_(t){var e=t.alternate;e!==null&&(t.alternate=null,q_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[un],delete e[xo],delete e[Gu],delete e[EE],delete e[CE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Q_(t){return t.tag===5||t.tag===3||t.tag===4}function Np(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Q_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ad(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=hl));else if(r!==4&&(t=t.child,t!==null))for(ad(t,e,n),t=t.sibling;t!==null;)ad(t,e,n),t=t.sibling}function ld(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ld(t,e,n),t=t.sibling;t!==null;)ld(t,e,n),t=t.sibling}var Qe=null,Gt=!1;function qn(t,e,n){for(n=n.child;n!==null;)X_(t,e,n),n=n.sibling}function X_(t,e,n){if(hn&&typeof hn.onCommitFiberUnmount=="function")try{hn.onCommitFiberUnmount(ec,n)}catch{}switch(n.tag){case 5:nt||Fi(n,e);case 6:var r=Qe,i=Gt;Qe=null,qn(t,e,n),Qe=r,Gt=i,Qe!==null&&(Gt?(t=Qe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Qe.removeChild(n.stateNode));break;case 18:Qe!==null&&(Gt?(t=Qe,n=n.stateNode,t.nodeType===8?qc(t.parentNode,n):t.nodeType===1&&qc(t,n),ko(t)):qc(Qe,n.stateNode));break;case 4:r=Qe,i=Gt,Qe=n.stateNode.containerInfo,Gt=!0,qn(t,e,n),Qe=r,Gt=i;break;case 0:case 11:case 14:case 15:if(!nt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&sd(n,e,o),i=i.next}while(i!==r)}qn(t,e,n);break;case 1:if(!nt&&(Fi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Pe(n,e,a)}qn(t,e,n);break;case 21:qn(t,e,n);break;case 22:n.mode&1?(nt=(r=nt)||n.memoizedState!==null,qn(t,e,n),nt=r):qn(t,e,n);break;default:qn(t,e,n)}}function xp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new FE),e.forEach(function(r){var i=YE.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ht(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Qe=a.stateNode,Gt=!1;break e;case 3:Qe=a.stateNode.containerInfo,Gt=!0;break e;case 4:Qe=a.stateNode.containerInfo,Gt=!0;break e}a=a.return}if(Qe===null)throw Error(P(160));X_(s,o,i),Qe=null,Gt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){Pe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)J_(e,t),e=e.sibling}function J_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ht(e,t),ln(t),r&4){try{ao(3,t,t.return),lc(3,t)}catch(C){Pe(t,t.return,C)}try{ao(5,t,t.return)}catch(C){Pe(t,t.return,C)}}break;case 1:Ht(e,t),ln(t),r&512&&n!==null&&Fi(n,n.return);break;case 5:if(Ht(e,t),ln(t),r&512&&n!==null&&Fi(n,n.return),t.flags&32){var i=t.stateNode;try{yo(i,"")}catch(C){Pe(t,t.return,C)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&wg(i,s),bu(a,o);var c=bu(a,s);for(o=0;o<l.length;o+=2){var d=l[o],p=l[o+1];d==="style"?Ig(i,p):d==="dangerouslySetInnerHTML"?kg(i,p):d==="children"?yo(i,p):Bd(i,d,p,c)}switch(a){case"input":Nu(i,s);break;case"textarea":Eg(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?Bi(i,!!s.multiple,v,!1):f!==!!s.multiple&&(s.defaultValue!=null?Bi(i,!!s.multiple,s.defaultValue,!0):Bi(i,!!s.multiple,s.multiple?[]:"",!1))}i[xo]=s}catch(C){Pe(t,t.return,C)}}break;case 6:if(Ht(e,t),ln(t),r&4){if(t.stateNode===null)throw Error(P(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(C){Pe(t,t.return,C)}}break;case 3:if(Ht(e,t),ln(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ko(e.containerInfo)}catch(C){Pe(t,t.return,C)}break;case 4:Ht(e,t),ln(t);break;case 13:Ht(e,t),ln(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Eh=Ae())),r&4&&xp(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(nt=(c=nt)||d,Ht(e,t),nt=c):Ht(e,t),ln(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for($=t,d=t.child;d!==null;){for(p=$=d;$!==null;){switch(f=$,v=f.child,f.tag){case 0:case 11:case 14:case 15:ao(4,f,f.return);break;case 1:Fi(f,f.return);var w=f.stateNode;if(typeof w.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,w.props=e.memoizedProps,w.state=e.memoizedState,w.componentWillUnmount()}catch(C){Pe(r,n,C)}}break;case 5:Fi(f,f.return);break;case 22:if(f.memoizedState!==null){Rp(p);continue}}v!==null?(v.return=f,$=v):Rp(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,l=p.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Sg("display",o))}catch(C){Pe(t,t.return,C)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(C){Pe(t,t.return,C)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ht(e,t),ln(t),r&4&&xp(t);break;case 21:break;default:Ht(e,t),ln(t)}}function ln(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Q_(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(yo(i,""),r.flags&=-33);var s=Np(t);ld(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Np(t);ad(t,a,o);break;default:throw Error(P(161))}}catch(l){Pe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function UE(t,e,n){$=t,Z_(t)}function Z_(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Da;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||nt;a=Da;var c=nt;if(Da=o,(nt=l)&&!c)for($=i;$!==null;)o=$,l=o.child,o.tag===22&&o.memoizedState!==null?Ap(i):l!==null?(l.return=o,$=l):Ap(i);for(;s!==null;)$=s,Z_(s),s=s.sibling;$=i,Da=a,nt=c}Pp(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):Pp(t)}}function Pp(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:nt||lc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!nt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Vt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&fp(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}fp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&ko(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}nt||e.flags&512&&od(e)}catch(f){Pe(e,e.return,f)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function Rp(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function Ap(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{lc(4,e)}catch(l){Pe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Pe(e,i,l)}}var s=e.return;try{od(e)}catch(l){Pe(e,s,l)}break;case 5:var o=e.return;try{od(e)}catch(l){Pe(e,o,l)}}}catch(l){Pe(e,e.return,l)}if(e===t){$=null;break}var a=e.sibling;if(a!==null){a.return=e.return,$=a;break}$=e.return}}var $E=Math.ceil,kl=zn.ReactCurrentDispatcher,yh=zn.ReactCurrentOwner,Ft=zn.ReactCurrentBatchConfig,oe=0,Ge=null,Oe=null,Xe=0,St=0,zi=Pr(0),ze=0,Do=null,ri=0,cc=0,wh=0,lo=null,pt=null,Eh=0,ss=1/0,Cn=null,Sl=!1,cd=null,fr=null,Ma=!1,or=null,Il=0,co=0,ud=null,Qa=-1,Xa=0;function lt(){return oe&6?Ae():Qa!==-1?Qa:Qa=Ae()}function pr(t){return t.mode&1?oe&2&&Xe!==0?Xe&-Xe:SE.transition!==null?(Xa===0&&(Xa=jg()),Xa):(t=he,t!==0||(t=window.event,t=t===void 0?16:Hg(t.type)),t):1}function Zt(t,e,n,r){if(50<co)throw co=0,ud=null,Error(P(185));Go(t,n,r),(!(oe&2)||t!==Ge)&&(t===Ge&&(!(oe&2)&&(cc|=n),ze===4&&er(t,Xe)),yt(t,r),n===1&&oe===0&&!(e.mode&1)&&(ss=Ae()+500,sc&&Rr()))}function yt(t,e){var n=t.callbackNode;S0(t,e);var r=ll(t,t===Ge?Xe:0);if(r===0)n!==null&&Uf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Uf(n),e===1)t.tag===0?kE(bp.bind(null,t)):c_(bp.bind(null,t)),yE(function(){!(oe&6)&&Rr()}),n=null;else{switch(Fg(r)){case 1:n=Kd;break;case 4:n=Mg;break;case 16:n=al;break;case 536870912:n=Lg;break;default:n=al}n=av(n,ev.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ev(t,e){if(Qa=-1,Xa=0,oe&6)throw Error(P(327));var n=t.callbackNode;if(Ki()&&t.callbackNode!==n)return null;var r=ll(t,t===Ge?Xe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Tl(t,r);else{e=r;var i=oe;oe|=2;var s=nv();(Ge!==t||Xe!==e)&&(Cn=null,ss=Ae()+500,Jr(t,e));do try{HE();break}catch(a){tv(t,a)}while(!0);oh(),kl.current=s,oe=i,Oe!==null?e=0:(Ge=null,Xe=0,e=ze)}if(e!==0){if(e===2&&(i=ju(t),i!==0&&(r=i,e=dd(t,i))),e===1)throw n=Do,Jr(t,0),er(t,r),yt(t,Ae()),n;if(e===6)er(t,r);else{if(i=t.current.alternate,!(r&30)&&!BE(i)&&(e=Tl(t,r),e===2&&(s=ju(t),s!==0&&(r=s,e=dd(t,s))),e===1))throw n=Do,Jr(t,0),er(t,r),yt(t,Ae()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(P(345));case 2:Hr(t,pt,Cn);break;case 3:if(er(t,r),(r&130023424)===r&&(e=Eh+500-Ae(),10<e)){if(ll(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){lt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Vu(Hr.bind(null,t,pt,Cn),e);break}Hr(t,pt,Cn);break;case 4:if(er(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Jt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*$E(r/1960))-r,10<r){t.timeoutHandle=Vu(Hr.bind(null,t,pt,Cn),r);break}Hr(t,pt,Cn);break;case 5:Hr(t,pt,Cn);break;default:throw Error(P(329))}}}return yt(t,Ae()),t.callbackNode===n?ev.bind(null,t):null}function dd(t,e){var n=lo;return t.current.memoizedState.isDehydrated&&(Jr(t,e).flags|=256),t=Tl(t,e),t!==2&&(e=pt,pt=n,e!==null&&hd(e)),t}function hd(t){pt===null?pt=t:pt.push.apply(pt,t)}function BE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!tn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function er(t,e){for(e&=~wh,e&=~cc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Jt(e),r=1<<n;t[n]=-1,e&=~r}}function bp(t){if(oe&6)throw Error(P(327));Ki();var e=ll(t,0);if(!(e&1))return yt(t,Ae()),null;var n=Tl(t,e);if(t.tag!==0&&n===2){var r=ju(t);r!==0&&(e=r,n=dd(t,r))}if(n===1)throw n=Do,Jr(t,0),er(t,e),yt(t,Ae()),n;if(n===6)throw Error(P(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Hr(t,pt,Cn),yt(t,Ae()),null}function Ch(t,e){var n=oe;oe|=1;try{return t(e)}finally{oe=n,oe===0&&(ss=Ae()+500,sc&&Rr())}}function ii(t){or!==null&&or.tag===0&&!(oe&6)&&Ki();var e=oe;oe|=1;var n=Ft.transition,r=he;try{if(Ft.transition=null,he=1,t)return t()}finally{he=r,Ft.transition=n,oe=e,!(oe&6)&&Rr()}}function kh(){St=zi.current,we(zi)}function Jr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,vE(n)),Oe!==null)for(n=Oe.return;n!==null;){var r=n;switch(rh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&fl();break;case 3:rs(),we(_t),we(rt),hh();break;case 5:dh(r);break;case 4:rs();break;case 13:we(ke);break;case 19:we(ke);break;case 10:ah(r.type._context);break;case 22:case 23:kh()}n=n.return}if(Ge=t,Oe=t=mr(t.current,null),Xe=St=e,ze=0,Do=null,wh=cc=ri=0,pt=lo=null,Yr!==null){for(e=0;e<Yr.length;e++)if(n=Yr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Yr=null}return t}function tv(t,e){do{var n=Oe;try{if(oh(),Ka.current=Cl,El){for(var r=Te.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}El=!1}if(ni=0,We=je=Te=null,oo=!1,Ao=0,yh.current=null,n===null||n.return===null){ze=1,Do=e,Oe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Xe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=yp(o);if(v!==null){v.flags&=-257,wp(v,o,a,s,e),v.mode&1&&vp(s,c,e),e=v,l=c;var w=e.updateQueue;if(w===null){var C=new Set;C.add(l),e.updateQueue=C}else w.add(l);break e}else{if(!(e&1)){vp(s,c,e),Sh();break e}l=Error(P(426))}}else if(Ce&&a.mode&1){var W=yp(o);if(W!==null){!(W.flags&65536)&&(W.flags|=256),wp(W,o,a,s,e),ih(is(l,a));break e}}s=l=is(l,a),ze!==4&&(ze=2),lo===null?lo=[s]:lo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=F_(s,l,e);hp(s,g);break e;case 1:a=l;var m=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(fr===null||!fr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var k=z_(s,a,e);hp(s,k);break e}}s=s.return}while(s!==null)}iv(n)}catch(j){e=j,Oe===n&&n!==null&&(Oe=n=n.return);continue}break}while(!0)}function nv(){var t=kl.current;return kl.current=Cl,t===null?Cl:t}function Sh(){(ze===0||ze===3||ze===2)&&(ze=4),Ge===null||!(ri&268435455)&&!(cc&268435455)||er(Ge,Xe)}function Tl(t,e){var n=oe;oe|=2;var r=nv();(Ge!==t||Xe!==e)&&(Cn=null,Jr(t,e));do try{WE();break}catch(i){tv(t,i)}while(!0);if(oh(),oe=n,kl.current=r,Oe!==null)throw Error(P(261));return Ge=null,Xe=0,ze}function WE(){for(;Oe!==null;)rv(Oe)}function HE(){for(;Oe!==null&&!m0();)rv(Oe)}function rv(t){var e=ov(t.alternate,t,St);t.memoizedProps=t.pendingProps,e===null?iv(t):Oe=e,yh.current=null}function iv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=jE(n,e),n!==null){n.flags&=32767,Oe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ze=6,Oe=null;return}}else if(n=LE(n,e,St),n!==null){Oe=n;return}if(e=e.sibling,e!==null){Oe=e;return}Oe=e=t}while(e!==null);ze===0&&(ze=5)}function Hr(t,e,n){var r=he,i=Ft.transition;try{Ft.transition=null,he=1,VE(t,e,n,r)}finally{Ft.transition=i,he=r}return null}function VE(t,e,n,r){do Ki();while(or!==null);if(oe&6)throw Error(P(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(P(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(I0(t,s),t===Ge&&(Oe=Ge=null,Xe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ma||(Ma=!0,av(al,function(){return Ki(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ft.transition,Ft.transition=null;var o=he;he=1;var a=oe;oe|=4,yh.current=null,zE(t,n),J_(n,t),dE(Wu),cl=!!Bu,Wu=Bu=null,t.current=n,UE(n),g0(),oe=a,he=o,Ft.transition=s}else t.current=n;if(Ma&&(Ma=!1,or=t,Il=i),s=t.pendingLanes,s===0&&(fr=null),y0(n.stateNode),yt(t,Ae()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Sl)throw Sl=!1,t=cd,cd=null,t;return Il&1&&t.tag!==0&&Ki(),s=t.pendingLanes,s&1?t===ud?co++:(co=0,ud=t):co=0,Rr(),null}function Ki(){if(or!==null){var t=Fg(Il),e=Ft.transition,n=he;try{if(Ft.transition=null,he=16>t?16:t,or===null)var r=!1;else{if(t=or,or=null,Il=0,oe&6)throw Error(P(331));var i=oe;for(oe|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for($=c;$!==null;){var d=$;switch(d.tag){case 0:case 11:case 15:ao(8,d,s)}var p=d.child;if(p!==null)p.return=d,$=p;else for(;$!==null;){d=$;var f=d.sibling,v=d.return;if(q_(d),d===c){$=null;break}if(f!==null){f.return=v,$=f;break}$=v}}}var w=s.alternate;if(w!==null){var C=w.child;if(C!==null){w.child=null;do{var W=C.sibling;C.sibling=null,C=W}while(C!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ao(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,$=g;break e}$=s.return}}var m=t.current;for($=m;$!==null;){o=$;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,$=_;else e:for(o=m;$!==null;){if(a=$,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:lc(9,a)}}catch(j){Pe(a,a.return,j)}if(a===o){$=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,$=k;break e}$=a.return}}if(oe=i,Rr(),hn&&typeof hn.onPostCommitFiberRoot=="function")try{hn.onPostCommitFiberRoot(ec,t)}catch{}r=!0}return r}finally{he=n,Ft.transition=e}}return!1}function Op(t,e,n){e=is(n,e),e=F_(t,e,1),t=hr(t,e,1),e=lt(),t!==null&&(Go(t,1,e),yt(t,e))}function Pe(t,e,n){if(t.tag===3)Op(t,t,n);else for(;e!==null;){if(e.tag===3){Op(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fr===null||!fr.has(r))){t=is(n,t),t=z_(e,t,1),e=hr(e,t,1),t=lt(),e!==null&&(Go(e,1,t),yt(e,t));break}}e=e.return}}function GE(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=lt(),t.pingedLanes|=t.suspendedLanes&n,Ge===t&&(Xe&n)===n&&(ze===4||ze===3&&(Xe&130023424)===Xe&&500>Ae()-Eh?Jr(t,0):wh|=n),yt(t,e)}function sv(t,e){e===0&&(t.mode&1?(e=Ia,Ia<<=1,!(Ia&130023424)&&(Ia=4194304)):e=1);var n=lt();t=On(t,e),t!==null&&(Go(t,e,n),yt(t,n))}function KE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),sv(t,n)}function YE(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(e),sv(t,n)}var ov;ov=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||_t.current)mt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return mt=!1,ME(t,e,n);mt=!!(t.flags&131072)}else mt=!1,Ce&&e.flags&1048576&&u_(e,gl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;qa(t,e),t=e.pendingProps;var i=es(e,rt.current);Gi(e,n),i=ph(null,e,r,t,i,n);var s=mh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vt(r)?(s=!0,pl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ch(e),i.updater=ac,e.stateNode=i,i._reactInternals=e,Ju(e,r,t,n),e=td(null,e,r,!0,s,n)):(e.tag=0,Ce&&s&&nh(e),ot(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(qa(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=QE(r),t=Vt(r,t),i){case 0:e=ed(null,e,r,t,n);break e;case 1:e=kp(null,e,r,t,n);break e;case 11:e=Ep(null,e,r,t,n);break e;case 14:e=Cp(null,e,r,Vt(r.type,t),n);break e}throw Error(P(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),ed(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),kp(t,e,r,i,n);case 3:e:{if(W_(e),t===null)throw Error(P(387));r=e.pendingProps,s=e.memoizedState,i=s.element,g_(t,e),yl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=is(Error(P(423)),e),e=Sp(t,e,r,n,i);break e}else if(r!==i){i=is(Error(P(424)),e),e=Sp(t,e,r,n,i);break e}else for(Tt=dr(e.stateNode.containerInfo.firstChild),Nt=e,Ce=!0,Yt=null,n=p_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ts(),r===i){e=Dn(t,e,n);break e}ot(t,e,r,n)}e=e.child}return e;case 5:return __(e),t===null&&qu(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Hu(r,i)?o=null:s!==null&&Hu(r,s)&&(e.flags|=32),B_(t,e),ot(t,e,o,n),e.child;case 6:return t===null&&qu(e),null;case 13:return H_(t,e,n);case 4:return uh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ns(e,null,r,n):ot(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),Ep(t,e,r,i,n);case 7:return ot(t,e,e.pendingProps,n),e.child;case 8:return ot(t,e,e.pendingProps.children,n),e.child;case 12:return ot(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ve(_l,r._currentValue),r._currentValue=o,s!==null)if(tn(s.value,o)){if(s.children===i.children&&!_t.current){e=Dn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Pn(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Qu(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(P(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Qu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ot(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Gi(e,n),i=zt(i),r=r(i),e.flags|=1,ot(t,e,r,n),e.child;case 14:return r=e.type,i=Vt(r,e.pendingProps),i=Vt(r.type,i),Cp(t,e,r,i,n);case 15:return U_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),qa(t,e),e.tag=1,vt(r)?(t=!0,pl(e)):t=!1,Gi(e,n),j_(e,r,i),Ju(e,r,i,n),td(null,e,r,!0,t,n);case 19:return V_(t,e,n);case 22:return $_(t,e,n)}throw Error(P(156,e.tag))};function av(t,e){return Dg(t,e)}function qE(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Lt(t,e,n,r){return new qE(t,e,n,r)}function Ih(t){return t=t.prototype,!(!t||!t.isReactComponent)}function QE(t){if(typeof t=="function")return Ih(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Hd)return 11;if(t===Vd)return 14}return 2}function mr(t,e){var n=t.alternate;return n===null?(n=Lt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ja(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Ih(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Pi:return Zr(n.children,i,s,e);case Wd:o=8,i|=8;break;case Cu:return t=Lt(12,n,e,i|2),t.elementType=Cu,t.lanes=s,t;case ku:return t=Lt(13,n,e,i),t.elementType=ku,t.lanes=s,t;case Su:return t=Lt(19,n,e,i),t.elementType=Su,t.lanes=s,t;case _g:return uc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case mg:o=10;break e;case gg:o=9;break e;case Hd:o=11;break e;case Vd:o=14;break e;case Xn:o=16,r=null;break e}throw Error(P(130,t==null?t:typeof t,""))}return e=Lt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Zr(t,e,n,r){return t=Lt(7,t,r,e),t.lanes=n,t}function uc(t,e,n,r){return t=Lt(22,t,r,e),t.elementType=_g,t.lanes=n,t.stateNode={isHidden:!1},t}function ru(t,e,n){return t=Lt(6,t,null,e),t.lanes=n,t}function iu(t,e,n){return e=Lt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function XE(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fc(0),this.expirationTimes=Fc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Th(t,e,n,r,i,s,o,a,l){return t=new XE(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Lt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ch(s),t}function JE(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function lv(t){if(!t)return kr;t=t._reactInternals;e:{if(fi(t)!==t||t.tag!==1)throw Error(P(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(P(171))}if(t.tag===1){var n=t.type;if(vt(n))return l_(t,n,e)}return e}function cv(t,e,n,r,i,s,o,a,l){return t=Th(n,r,!0,t,i,s,o,a,l),t.context=lv(null),n=t.current,r=lt(),i=pr(n),s=Pn(r,i),s.callback=e??null,hr(n,s,i),t.current.lanes=i,Go(t,i,r),yt(t,r),t}function dc(t,e,n,r){var i=e.current,s=lt(),o=pr(i);return n=lv(n),e.context===null?e.context=n:e.pendingContext=n,e=Pn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=hr(i,e,o),t!==null&&(Zt(t,i,o,s),Ga(t,i,o)),o}function Nl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Dp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Nh(t,e){Dp(t,e),(t=t.alternate)&&Dp(t,e)}function ZE(){return null}var uv=typeof reportError=="function"?reportError:function(t){console.error(t)};function xh(t){this._internalRoot=t}hc.prototype.render=xh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(P(409));dc(t,e,null,null)};hc.prototype.unmount=xh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ii(function(){dc(null,t,null,null)}),e[bn]=null}};function hc(t){this._internalRoot=t}hc.prototype.unstable_scheduleHydration=function(t){if(t){var e=$g();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Zn.length&&e!==0&&e<Zn[n].priority;n++);Zn.splice(n,0,t),n===0&&Wg(t)}};function Ph(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function fc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Mp(){}function eC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Nl(o);s.call(c)}}var o=cv(e,r,t,0,null,!1,!1,"",Mp);return t._reactRootContainer=o,t[bn]=o.current,To(t.nodeType===8?t.parentNode:t),ii(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Nl(l);a.call(c)}}var l=Th(t,0,!1,null,null,!1,!1,"",Mp);return t._reactRootContainer=l,t[bn]=l.current,To(t.nodeType===8?t.parentNode:t),ii(function(){dc(e,l,n,r)}),l}function pc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Nl(o);a.call(l)}}dc(e,o,t,i)}else o=eC(n,e,t,i,r);return Nl(o)}zg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Xs(e.pendingLanes);n!==0&&(Yd(e,n|1),yt(e,Ae()),!(oe&6)&&(ss=Ae()+500,Rr()))}break;case 13:ii(function(){var r=On(t,1);if(r!==null){var i=lt();Zt(r,t,1,i)}}),Nh(t,1)}};qd=function(t){if(t.tag===13){var e=On(t,134217728);if(e!==null){var n=lt();Zt(e,t,134217728,n)}Nh(t,134217728)}};Ug=function(t){if(t.tag===13){var e=pr(t),n=On(t,e);if(n!==null){var r=lt();Zt(n,t,e,r)}Nh(t,e)}};$g=function(){return he};Bg=function(t,e){var n=he;try{return he=t,e()}finally{he=n}};Du=function(t,e,n){switch(e){case"input":if(Nu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ic(r);if(!i)throw Error(P(90));yg(r),Nu(r,i)}}}break;case"textarea":Eg(t,n);break;case"select":e=n.value,e!=null&&Bi(t,!!n.multiple,e,!1)}};xg=Ch;Pg=ii;var tC={usingClientEntryPoint:!1,Events:[Yo,Oi,ic,Tg,Ng,Ch]},Bs={findFiberByHostInstance:Kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nC={bundleType:Bs.bundleType,version:Bs.version,rendererPackageName:Bs.rendererPackageName,rendererConfig:Bs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=bg(t),t===null?null:t.stateNode},findFiberByHostInstance:Bs.findFiberByHostInstance||ZE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var La=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!La.isDisabled&&La.supportsFiber)try{ec=La.inject(nC),hn=La}catch{}}Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tC;Pt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ph(e))throw Error(P(200));return JE(t,e,null,n)};Pt.createRoot=function(t,e){if(!Ph(t))throw Error(P(299));var n=!1,r="",i=uv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Th(t,1,!1,null,null,n,!1,r,i),t[bn]=e.current,To(t.nodeType===8?t.parentNode:t),new xh(e)};Pt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(P(188)):(t=Object.keys(t).join(","),Error(P(268,t)));return t=bg(e),t=t===null?null:t.stateNode,t};Pt.flushSync=function(t){return ii(t)};Pt.hydrate=function(t,e,n){if(!fc(e))throw Error(P(200));return pc(null,t,e,!0,n)};Pt.hydrateRoot=function(t,e,n){if(!Ph(t))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=uv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=cv(e,null,t,1,n??null,i,!1,s,o),t[bn]=e.current,To(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new hc(e)};Pt.render=function(t,e,n){if(!fc(e))throw Error(P(200));return pc(null,t,e,!1,n)};Pt.unmountComponentAtNode=function(t){if(!fc(t))throw Error(P(40));return t._reactRootContainer?(ii(function(){pc(null,null,t,!1,function(){t._reactRootContainer=null,t[bn]=null})}),!0):!1};Pt.unstable_batchedUpdates=Ch;Pt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!fc(n))throw Error(P(200));if(t==null||t._reactInternals===void 0)throw Error(P(38));return pc(t,e,n,!1,r)};Pt.version="18.3.1-next-f1338f8080-20240426";function dv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dv)}catch(t){console.error(t)}}dv(),dg.exports=Pt;var rC=dg.exports,Lp=rC;wu.createRoot=Lp.createRoot,wu.hydrateRoot=Lp.hydrateRoot;const iC=()=>{};var jp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hv={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O=function(t,e){if(!t)throw ys(e)},ys=function(t){return new Error("Firebase Database ("+hv.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},sC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Rh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,d=s>>2,p=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,v=c&63;l||(v=64,o||(f=64)),r.push(n[d],n[p],n[f],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(fv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):sC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||p==null)throw new oC;const f=s<<2|a>>4;if(r.push(f),c!==64){const v=a<<4&240|c>>2;if(r.push(v),p!==64){const w=c<<6&192|p;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class oC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pv=function(t){const e=fv(t);return Rh.encodeByteArray(e,!0)},xl=function(t){return pv(t).replace(/\./g,"")},Pl=function(t){try{return Rh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aC(t){return mv(void 0,t)}function mv(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!lC(n)||(t[n]=mv(t[n],e[n]));return t}function lC(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uC=()=>cC().__FIREBASE_DEFAULTS__,dC=()=>{if(typeof process>"u"||typeof jp>"u")return;const t=jp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},hC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Pl(t[1]);return e&&JSON.parse(e)},Ah=()=>{try{return iC()||uC()||dC()||hC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},gv=t=>{var e,n;return(n=(e=Ah())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},fC=t=>{const e=gv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},_v=()=>{var t;return(t=Ah())===null||t===void 0?void 0:t.config},vv=t=>{var e;return(e=Ah())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function yv(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[xl(JSON.stringify(n)),xl(JSON.stringify(o)),""].join(".")}const uo={};function mC(){const t={prod:[],emulator:[]};for(const e of Object.keys(uo))uo[e]?t.emulator.push(e):t.prod.push(e);return t}function gC(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Fp=!1;function wv(t,e){if(typeof window>"u"||typeof document>"u"||!ws(window.location.host)||uo[t]===e||uo[t]||Fp)return;uo[t]=e;function n(f){return`__firebase__banner__${f}`}const r="__firebase__banner",s=mC().prod.length>0;function o(){const f=document.getElementById(r);f&&f.remove()}function a(f){f.style.display="flex",f.style.background="#7faaf0",f.style.position="fixed",f.style.bottom="5px",f.style.left="5px",f.style.padding=".5em",f.style.borderRadius="5px",f.style.alignItems="center"}function l(f,v){f.setAttribute("width","24"),f.setAttribute("id",v),f.setAttribute("height","24"),f.setAttribute("viewBox","0 0 24 24"),f.setAttribute("fill","none"),f.style.marginLeft="-6px"}function c(){const f=document.createElement("span");return f.style.cursor="pointer",f.style.marginLeft="16px",f.style.fontSize="24px",f.innerHTML=" &times;",f.onclick=()=>{Fp=!0,o()},f}function d(f,v){f.setAttribute("id",v),f.innerText="Learn more",f.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",f.setAttribute("target","__blank"),f.style.paddingLeft="5px",f.style.textDecoration="underline"}function p(){const f=gC(r),v=n("text"),w=document.getElementById(v)||document.createElement("span"),C=n("learnmore"),W=document.getElementById(C)||document.createElement("a"),g=n("preprendIcon"),m=document.getElementById(g)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(f.created){const _=f.element;a(_),d(W,C);const k=c();l(m,g),_.append(m,w,W,k),document.body.appendChild(_)}s?(w.innerText="Preview backend disconnected.",m.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(m.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,w.innerText="Preview backend running in this workspace."),w.setAttribute("id",v)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function _C(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function vC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ev(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yC(){const t=ut();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function wC(){return hv.NODE_ADMIN===!0}function EC(){try{return typeof indexedDB=="object"}catch{return!1}}function CC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kC="FirebaseError";class Ar extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=kC,Object.setPrototypeOf(this,Ar.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qo.prototype.create)}}class Qo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?SC(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ar(i,a,r)}}function SC(t,e){return t.replace(IC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const IC=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(t){return JSON.parse(t)}function Fe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Mo(Pl(s[0])||""),n=Mo(Pl(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},TC=function(t){const e=Cv(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},NC=function(t){const e=Cv(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function os(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Rl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Al(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function si(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(zp(s)&&zp(o)){if(!si(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function zp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Zs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function eo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let p=0;p<16;p++)r[p]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let p=0;p<16;p++)r[p]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let p=16;p<80;p++){const f=r[p-3]^r[p-8]^r[p-14]^r[p-16];r[p]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,d;for(let p=0;p<80;p++){p<40?p<20?(c=a^s&(o^a),d=1518500249):(c=s^o^a,d=1859775393):p<60?(c=s&o|a&(s|o),d=2400959708):(c=s^o^a,d=3395469782);const f=(i<<5|i>>>27)+c+l+d+r[p]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function PC(t,e){const n=new RC(t,e);return n.subscribe.bind(n)}class RC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");AC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=su),i.error===void 0&&(i.error=su),i.complete===void 0&&(i.complete=su);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function AC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function su(){}function as(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,O(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},mc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(t){return t&&t._delegate?t._delegate:t}class oi{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new dn;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(MC(e))try{this.getOrInitializeService({instanceIdentifier:Vr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Vr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vr){return this.instances.has(e)}getOptions(e=Vr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:DC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Vr){return this.component?this.component.multipleInstances?e:Vr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function DC(t){return t===Vr?void 0:t}function MC(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new OC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const jC={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},FC=pe.INFO,zC={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},UC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=zC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Oh{constructor(e){this.name=e,this._logLevel=FC,this._logHandler=UC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?jC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const $C=(t,e)=>e.some(n=>t instanceof n);let Up,$p;function BC(){return Up||(Up=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function WC(){return $p||($p=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kv=new WeakMap,fd=new WeakMap,Sv=new WeakMap,ou=new WeakMap,Dh=new WeakMap;function HC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(gr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&kv.set(n,t)}).catch(()=>{}),Dh.set(e,t),e}function VC(t){if(fd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});fd.set(t,e)}let pd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return fd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Sv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function GC(t){pd=t(pd)}function KC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(au(this),e,...n);return Sv.set(r,e.sort?e.sort():[e]),gr(r)}:WC().includes(t)?function(...e){return t.apply(au(this),e),gr(kv.get(this))}:function(...e){return gr(t.apply(au(this),e))}}function YC(t){return typeof t=="function"?KC(t):(t instanceof IDBTransaction&&VC(t),$C(t,BC())?new Proxy(t,pd):t)}function gr(t){if(t instanceof IDBRequest)return HC(t);if(ou.has(t))return ou.get(t);const e=YC(t);return e!==t&&(ou.set(t,e),Dh.set(e,t)),e}const au=t=>Dh.get(t);function qC(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=gr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(gr(o.result),l.oldVersion,l.newVersion,gr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const QC=["get","getKey","getAll","getAllKeys","count"],XC=["put","add","delete","clear"],lu=new Map;function Bp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(lu.get(e))return lu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=XC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||QC.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return lu.set(e,s),s}GC(t=>({...t,get:(e,n,r)=>Bp(e,n)||t.get(e,n,r),has:(e,n)=>!!Bp(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ZC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ZC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const md="@firebase/app",Wp="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn=new Oh("@firebase/app"),ek="@firebase/app-compat",tk="@firebase/analytics-compat",nk="@firebase/analytics",rk="@firebase/app-check-compat",ik="@firebase/app-check",sk="@firebase/auth",ok="@firebase/auth-compat",ak="@firebase/database",lk="@firebase/data-connect",ck="@firebase/database-compat",uk="@firebase/functions",dk="@firebase/functions-compat",hk="@firebase/installations",fk="@firebase/installations-compat",pk="@firebase/messaging",mk="@firebase/messaging-compat",gk="@firebase/performance",_k="@firebase/performance-compat",vk="@firebase/remote-config",yk="@firebase/remote-config-compat",wk="@firebase/storage",Ek="@firebase/storage-compat",Ck="@firebase/firestore",kk="@firebase/ai",Sk="@firebase/firestore-compat",Ik="firebase",Tk="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gd="[DEFAULT]",Nk={[md]:"fire-core",[ek]:"fire-core-compat",[nk]:"fire-analytics",[tk]:"fire-analytics-compat",[ik]:"fire-app-check",[rk]:"fire-app-check-compat",[sk]:"fire-auth",[ok]:"fire-auth-compat",[ak]:"fire-rtdb",[lk]:"fire-data-connect",[ck]:"fire-rtdb-compat",[uk]:"fire-fn",[dk]:"fire-fn-compat",[hk]:"fire-iid",[fk]:"fire-iid-compat",[pk]:"fire-fcm",[mk]:"fire-fcm-compat",[gk]:"fire-perf",[_k]:"fire-perf-compat",[vk]:"fire-rc",[yk]:"fire-rc-compat",[wk]:"fire-gcs",[Ek]:"fire-gcs-compat",[Ck]:"fire-fst",[Sk]:"fire-fst-compat",[kk]:"fire-vertex","fire-js":"fire-js",[Ik]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl=new Map,xk=new Map,_d=new Map;function Hp(t,e){try{t.container.addComponent(e)}catch(n){Mn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ls(t){const e=t.name;if(_d.has(e))return Mn.debug(`There were multiple attempts to register component ${e}.`),!1;_d.set(e,t);for(const n of bl.values())Hp(n,t);for(const n of xk.values())Hp(n,t);return!0}function Mh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function It(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_r=new Qo("app","Firebase",Pk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new oi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _r.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs=Tk;function Iv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:gd,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw _r.create("bad-app-name",{appName:String(i)});if(n||(n=_v()),!n)throw _r.create("no-options");const s=bl.get(i);if(s){if(si(n,s.options)&&si(r,s.config))return s;throw _r.create("duplicate-app",{appName:i})}const o=new LC(i);for(const l of _d.values())o.addComponent(l);const a=new Rk(n,r,o);return bl.set(i,a),a}function Tv(t=gd){const e=bl.get(t);if(!e&&t===gd&&_v())return Iv();if(!e)throw _r.create("no-app",{appName:t});return e}function vr(t,e,n){var r;let i=(r=Nk[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mn.warn(a.join(" "));return}ls(new oi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ak="firebase-heartbeat-database",bk=1,Lo="firebase-heartbeat-store";let cu=null;function Nv(){return cu||(cu=qC(Ak,bk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Lo)}catch(n){console.warn(n)}}}}).catch(t=>{throw _r.create("idb-open",{originalErrorMessage:t.message})})),cu}async function Ok(t){try{const n=(await Nv()).transaction(Lo),r=await n.objectStore(Lo).get(xv(t));return await n.done,r}catch(e){if(e instanceof Ar)Mn.warn(e.message);else{const n=_r.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Mn.warn(n.message)}}}async function Vp(t,e){try{const r=(await Nv()).transaction(Lo,"readwrite");await r.objectStore(Lo).put(e,xv(t)),await r.done}catch(n){if(n instanceof Ar)Mn.warn(n.message);else{const r=_r.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Mn.warn(r.message)}}}function xv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dk=1024,Mk=30;class Lk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Fk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Gp();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>Mk){const o=zk(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Mn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Gp(),{heartbeatsToSend:r,unsentEntries:i}=jk(this._heartbeatsCache.heartbeats),s=xl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Mn.warn(n),""}}}function Gp(){return new Date().toISOString().substring(0,10)}function jk(t,e=Dk){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Kp(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Kp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Fk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return EC()?CC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ok(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Kp(t){return xl(JSON.stringify({version:2,heartbeats:t})).length}function zk(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uk(t){ls(new oi("platform-logger",e=>new JC(e),"PRIVATE")),ls(new oi("heartbeat",e=>new Lk(e),"PRIVATE")),vr(md,Wp,t),vr(md,Wp,"esm2017"),vr("fire-js","")}Uk("");var Yp={};const qp="@firebase/database",Qp="1.0.20";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pv="";function $k(t){Pv=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Fe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Mo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return _n(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Bk(e)}}catch{}return new Wk},Qr=Rv("localStorage"),Hk=Rv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi=new Oh("@firebase/database"),Vk=function(){let t=1;return function(){return t++}}(),Av=function(t){const e=bC(t),n=new xC;n.update(e);const r=n.digest();return Rh.encodeByteArray(r)},Xo=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Xo.apply(null,r):typeof r=="object"?e+=Fe(r):e+=r,e+=" "}return e};let ho=null,Xp=!0;const Gk=function(t,e){O(!0,"Can't turn on custom loggers persistently."),Yi.logLevel=pe.VERBOSE,ho=Yi.log.bind(Yi)},Ve=function(...t){if(Xp===!0&&(Xp=!1,ho===null&&Hk.get("logging_enabled")===!0&&Gk()),ho){const e=Xo.apply(null,t);ho(e)}},Jo=function(t){return function(...e){Ve(t,...e)}},vd=function(...t){const e="FIREBASE INTERNAL ERROR: "+Xo(...t);Yi.error(e)},Ln=function(...t){const e=`FIREBASE FATAL ERROR: ${Xo(...t)}`;throw Yi.error(e),new Error(e)},ct=function(...t){const e="FIREBASE WARNING: "+Xo(...t);Yi.warn(e)},Kk=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ct("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},gc=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Yk=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},cs="[MIN_NAME]",ai="[MAX_NAME]",pi=function(t,e){if(t===e)return 0;if(t===cs||e===ai)return-1;if(e===cs||t===ai)return 1;{const n=Jp(t),r=Jp(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},qk=function(t,e){return t===e?0:t<e?-1:1},Ws=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Fe(e))},Lh=function(t){if(typeof t!="object"||t===null)return Fe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Fe(e[r]),n+=":",n+=Lh(t[e[r]]);return n+="}",n},bv=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Ke(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Ov=function(t){O(!gc(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const d=c.join("");let p="";for(l=0;l<64;l+=8){let f=parseInt(d.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),p=p+f}return p.toLowerCase()},Qk=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Xk=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Jk(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const Zk=new RegExp("^-?(0*)\\d{1,10}$"),eS=-2147483648,tS=2147483647,Jp=function(t){if(Zk.test(t)){const e=Number(t);if(e>=eS&&e<=tS)return e}return null},ks=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ct("Exception was thrown by user callback.",n),e},Math.floor(0))}},nS=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},fo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,It(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){ct(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ve("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ct(e)}}class Za{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Za.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh="5",Dv="v",Mv="s",Lv="r",jv="f",Fv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,zv="ls",Uv="p",yd="ac",$v="websocket",Bv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1,c=null){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Qr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Qr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function sS(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Hv(t,e,n){O(typeof e=="string","typeof type must == string"),O(typeof n=="object","typeof params must == object");let r;if(e===$v)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Bv)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);sS(t)&&(n.ns=t.namespace);const i=[];return Ke(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(){this.counters_={}}incrementCounter(e,n=1){_n(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return aC(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu={},du={};function Fh(t){const e=t.toString();return uu[e]||(uu[e]=new oS),uu[e]}function aS(t,e){const n=t.toString();return du[n]||(du[n]=e()),du[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ks(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp="start",cS="close",uS="pLPCommand",dS="pRTLPCB",Vv="id",Gv="pw",Kv="ser",hS="cb",fS="seg",pS="ts",mS="d",gS="dframe",Yv=1870,qv=30,_S=Yv-qv,vS=25e3,yS=3e4;class Ui{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Jo(e),this.stats_=Fh(n),this.urlFn=l=>(this.appCheckToken&&(l[yd]=this.appCheckToken),Hv(n,Bv,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new lS(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(yS)),Yk(()=>{if(this.isClosed_)return;this.scriptTagHolder=new zh((...s)=>{const[o,a,l,c,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Zp)this.id=a,this.password=l;else if(o===cS)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Zp]="t",r[Kv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[hS]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Dv]=jh,this.transportSessionId&&(r[Mv]=this.transportSessionId),this.lastSessionId&&(r[zv]=this.lastSessionId),this.applicationId&&(r[Uv]=this.applicationId),this.appCheckToken&&(r[yd]=this.appCheckToken),typeof location<"u"&&location.hostname&&Fv.test(location.hostname)&&(r[Lv]=jv);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ui.forceAllow_=!0}static forceDisallow(){Ui.forceDisallow_=!0}static isAvailable(){return Ui.forceAllow_?!0:!Ui.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Qk()&&!Xk()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Fe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=pv(n),i=bv(r,_S);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[gS]="t",r[Vv]=e,r[Gv]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Fe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class zh{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Vk(),window[uS+this.uniqueCallbackIdentifier]=e,window[dS+this.uniqueCallbackIdentifier]=n,this.myIFrame=zh.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ve("frame writing exception"),a.stack&&Ve(a.stack),Ve(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ve("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Vv]=this.myID,e[Gv]=this.myPW,e[Kv]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+qv+r.length<=Yv;){const o=this.pendingSegs.shift();r=r+"&"+fS+i+"="+o.seg+"&"+pS+i+"="+o.ts+"&"+mS+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(vS)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ve("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS=16384,ES=45e3;let Ol=null;typeof MozWebSocket<"u"?Ol=MozWebSocket:typeof WebSocket<"u"&&(Ol=WebSocket);class qt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Jo(this.connId),this.stats_=Fh(n),this.connURL=qt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Dv]=jh,typeof location<"u"&&location.hostname&&Fv.test(location.hostname)&&(o[Lv]=jv),n&&(o[Mv]=n),r&&(o[zv]=r),i&&(o[yd]=i),s&&(o[Uv]=s),Hv(e,$v,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Qr.set("previous_websocket_failure",!0);try{let r;wC(),this.mySock=new Ol(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){qt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ol!==null&&!qt.forceDisallow_}static previouslyFailed(){return Qr.isInMemoryStorage||Qr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Qr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Mo(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(O(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Fe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=bv(n,wS);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(ES))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}qt.responsesRequiredToBeHealthy=2;qt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{static get ALL_TRANSPORTS(){return[Ui,qt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=qt&&qt.isAvailable();let r=n&&!qt.previouslyFailed();if(e.webSocketOnly&&(n||ct("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[qt];else{const i=this.transports_=[];for(const s of jo.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);jo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}jo.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CS=6e4,kS=5e3,SS=10*1024,IS=100*1024,hu="t",em="d",TS="s",tm="r",NS="e",nm="o",rm="a",im="n",sm="p",xS="h";class PS{constructor(e,n,r,i,s,o,a,l,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Jo("c:"+this.id+":"),this.transportManager_=new jo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=fo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>IS?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>SS?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(hu in e){const n=e[hu];n===rm?this.upgradeIfSecondaryHealthy_():n===tm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===nm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ws("t",e),r=Ws("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:sm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:rm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:im,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ws("t",e),r=Ws("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ws(hu,e);if(em in e){const r=e[em];if(n===xS){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===im){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===TS?this.onConnectionShutdown_(r):n===tm?this.onReset_(r):n===NS?vd("Server Error: "+r):n===nm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):vd("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),jh!==r&&ct("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),fo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(CS))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):fo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(kS))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:sm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Qr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(e){this.allowedEvents_=e,this.listeners_={},O(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){O(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl extends Xv{static getInstance(){return new Dl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!bh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return O(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om=32,am=768;class fe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ae(){return new fe("")}function ne(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Sr(t){return t.pieces_.length-t.pieceNum_}function ge(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new fe(t.pieces_,e)}function Uh(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function RS(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Fo(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Jv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new fe(e,0)}function Se(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof fe)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new fe(n,0)}function re(t){return t.pieceNum_>=t.pieces_.length}function at(t,e){const n=ne(t),r=ne(e);if(n===null)return e;if(n===r)return at(ge(t),ge(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function AS(t,e){const n=Fo(t,0),r=Fo(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=pi(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function $h(t,e){if(Sr(t)!==Sr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function jt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Sr(t)>Sr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class bS{constructor(e,n){this.errorPrefix_=n,this.parts_=Fo(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=mc(this.parts_[r]);Zv(this)}}function OS(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=mc(e),Zv(t)}function DS(t){const e=t.parts_.pop();t.byteLength_-=mc(e),t.parts_.length>0&&(t.byteLength_-=1)}function Zv(t){if(t.byteLength_>am)throw new Error(t.errorPrefix_+"has a key path longer than "+am+" bytes ("+t.byteLength_+").");if(t.parts_.length>om)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+om+") or object contains a cycle "+Gr(t))}function Gr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh extends Xv{static getInstance(){return new Bh}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return O(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs=1e3,MS=60*5*1e3,lm=30*1e3,LS=1.3,jS=3e4,FS="server_kill",cm=3;class Rn extends Qv{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Rn.nextPersistentConnectionId_++,this.log_=Jo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Hs,this.maxReconnectDelay_=MS,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Bh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Dl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Fe(s)),O(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new dn,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),O(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;Rn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&_n(e,"w")){const r=os(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();ct(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||NC(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=lm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=TC(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Fe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):vd("Unrecognized action received from server: "+Fe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){O(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Hs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Hs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>jS&&(this.reconnectDelay_=Hs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*LS)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Rn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(p){O(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(p)};this.realtime_={close:l,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[p,f]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Ve("getToken() completed but was canceled"):(Ve("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=f&&f.token,a=new PS(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,v=>{ct(v+" ("+this.repoInfo_.toString()+")"),this.interrupt(FS)},s))}catch(p){this.log_("Failed to get token: "+p),o||(this.repoInfo_.nodeAdmin&&ct(p),l())}}}interrupt(e){Ve("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ve("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Rl(this.interruptReasons_)&&(this.reconnectDelay_=Hs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Lh(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new fe(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ve("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=cm&&(this.reconnectDelay_=lm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ve("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=cm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Pv.replace(/\./g,"-")]=1,bh()?e["framework.cordova"]=1:Ev()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Dl.getInstance().currentlyOnline();return Rl(this.interruptReasons_)&&e}}Rn.nextPersistentConnectionId_=0;Rn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ie(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new ie(cs,e),i=new ie(cs,n);return this.compare(r,i)!==0}minPost(){return ie.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ja;class ey extends _c{static get __EMPTY_NODE(){return ja}static set __EMPTY_NODE(e){ja=e}compare(e,n){return pi(e.name,n.name)}isDefinedOn(e){throw ys("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ie.MIN}maxPost(){return new ie(ai,ja)}makePost(e,n){return O(typeof e=="string","KeyIndex indexValue must always be a string."),new ie(e,ja)}toString(){return".key"}}const qi=new ey;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class He{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??He.RED,this.left=i??gt.EMPTY_NODE,this.right=s??gt.EMPTY_NODE}copy(e,n,r,i,s){return new He(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return gt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return gt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}He.RED=!0;He.BLACK=!1;class zS{copy(e,n,r,i,s){return this}insert(e,n,r){return new He(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class gt{constructor(e,n=gt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new gt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,He.BLACK,null,null))}remove(e){return new gt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,He.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Fa(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Fa(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Fa(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Fa(this.root_,null,this.comparator_,!0,e)}}gt.EMPTY_NODE=new zS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function US(t,e){return pi(t.name,e.name)}function Wh(t,e){return pi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wd;function $S(t){wd=t}const ty=function(t){return typeof t=="number"?"number:"+Ov(t):"string:"+t},ny=function(t){if(t.isLeafNode()){const e=t.val();O(typeof e=="string"||typeof e=="number"||typeof e=="object"&&_n(e,".sv"),"Priority must be a string or number.")}else O(t===wd||t.isEmpty(),"priority of unexpected type.");O(t===wd||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let um;class Be{static set __childrenNodeConstructor(e){um=e}static get __childrenNodeConstructor(){return um}constructor(e,n=Be.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,O(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ny(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Be(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Be.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return re(e)?this:ne(e)===".priority"?this.priorityNode_:Be.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Be.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ne(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(O(r!==".priority"||Sr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Be.__childrenNodeConstructor.EMPTY_NODE.updateChild(ge(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ty(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Ov(this.value_):e+=this.value_,this.lazyHash_=Av(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Be.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Be.__childrenNodeConstructor?-1:(O(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Be.VALUE_TYPE_ORDER.indexOf(n),s=Be.VALUE_TYPE_ORDER.indexOf(r);return O(i>=0,"Unknown leaf type: "+n),O(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Be.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ry,iy;function BS(t){ry=t}function WS(t){iy=t}class HS extends _c{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?pi(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ie.MIN}maxPost(){return new ie(ai,new Be("[PRIORITY-POST]",iy))}makePost(e,n){const r=ry(e);return new ie(n,new Be("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ie=new HS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS=Math.log(2);class GS{constructor(e){const n=s=>parseInt(Math.log(s)/VS,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ml=function(t,e,n,r){t.sort(e);const i=function(l,c){const d=c-l;let p,f;if(d===0)return null;if(d===1)return p=t[l],f=n?n(p):p,new He(f,p.node,He.BLACK,null,null);{const v=parseInt(d/2,10)+l,w=i(l,v),C=i(v+1,c);return p=t[v],f=n?n(p):p,new He(f,p.node,He.BLACK,w,C)}},s=function(l){let c=null,d=null,p=t.length;const f=function(w,C){const W=p-w,g=p;p-=w;const m=i(W+1,g),_=t[W],k=n?n(_):_;v(new He(k,_.node,C,null,m))},v=function(w){c?(c.left=w,c=w):(d=w,c=w)};for(let w=0;w<l.count;++w){const C=l.nextBitIsOne(),W=Math.pow(2,l.count-(w+1));C?f(W,He.BLACK):(f(W,He.BLACK),f(W,He.RED))}return d},o=new GS(t.length),a=s(o);return new gt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fu;const Ni={};class Tn{static get Default(){return O(Ni&&Ie,"ChildrenNode.ts has not been loaded"),fu=fu||new Tn({".priority":Ni},{".priority":Ie}),fu}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=os(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof gt?n:null}hasIndex(e){return _n(this.indexSet_,e.toString())}addIndex(e,n){O(e!==qi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(ie.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Ml(r,e.getCompare()):a=Ni;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new Tn(d,c)}addToIndexes(e,n){const r=Al(this.indexes_,(i,s)=>{const o=os(this.indexSet_,s);if(O(o,"Missing index implementation for "+s),i===Ni)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ie.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Ml(a,o.getCompare())}else return Ni;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new ie(e.name,a))),l.insert(e,e.node)}});return new Tn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Al(this.indexes_,i=>{if(i===Ni)return i;{const s=n.get(e.name);return s?i.remove(new ie(e.name,s)):i}});return new Tn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vs;class X{static get EMPTY_NODE(){return Vs||(Vs=new X(new gt(Wh),null,Tn.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&ny(this.priorityNode_),this.children_.isEmpty()&&O(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Vs}updatePriority(e){return this.children_.isEmpty()?this:new X(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Vs:n}}getChild(e){const n=ne(e);return n===null?this:this.getImmediateChild(n).getChild(ge(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(O(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new ie(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Vs:this.priorityNode_;return new X(i,o,s)}}updateChild(e,n){const r=ne(e);if(r===null)return n;{O(ne(e)!==".priority"||Sr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ge(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Ie,(o,a)=>{n[o]=a.val(e),r++,s&&X.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ty(this.getPriority().val())+":"),this.forEachChild(Ie,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Av(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new ie(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ie(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ie(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ie.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ie.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Zo?-1:0}withIndex(e){if(e===qi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new X(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===qi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Ie),i=n.getIterator(Ie);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===qi?null:this.indexMap_.get(e.toString())}}X.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class KS extends X{constructor(){super(new gt(Wh),X.EMPTY_NODE,Tn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return X.EMPTY_NODE}isEmpty(){return!1}}const Zo=new KS;Object.defineProperties(ie,{MIN:{value:new ie(cs,X.EMPTY_NODE)},MAX:{value:new ie(ai,Zo)}});ey.__EMPTY_NODE=X.EMPTY_NODE;Be.__childrenNodeConstructor=X;$S(Zo);WS(Zo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YS=!0;function Re(t,e=null){if(t===null)return X.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),O(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Be(n,Re(e))}if(!(t instanceof Array)&&YS){const n=[];let r=!1;if(Ke(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Re(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new ie(o,l)))}}),n.length===0)return X.EMPTY_NODE;const s=Ml(n,US,o=>o.name,Wh);if(r){const o=Ml(n,Ie.getCompare());return new X(s,Re(e),new Tn({".priority":o},{".priority":Ie}))}else return new X(s,Re(e),Tn.Default)}else{let n=X.EMPTY_NODE;return Ke(t,(r,i)=>{if(_n(t,r)&&r.substring(0,1)!=="."){const s=Re(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Re(e))}}BS(Re);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS extends _c{constructor(e){super(),this.indexPath_=e,O(!re(e)&&ne(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?pi(e.name,n.name):s}makePost(e,n){const r=Re(e),i=X.EMPTY_NODE.updateChild(this.indexPath_,r);return new ie(n,i)}maxPost(){const e=X.EMPTY_NODE.updateChild(this.indexPath_,Zo);return new ie(ai,e)}toString(){return Fo(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS extends _c{compare(e,n){const r=e.node.compareTo(n.node);return r===0?pi(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ie.MIN}maxPost(){return ie.MAX}makePost(e,n){const r=Re(e);return new ie(n,r)}toString(){return".value"}}const XS=new QS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sy(t){return{type:"value",snapshotNode:t}}function us(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function zo(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Uo(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function JS(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){O(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(zo(n,a)):O(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(us(n,r)):o.trackChildChange(Uo(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Ie,(i,s)=>{n.hasChild(i)||r.trackChildChange(zo(i,s))}),n.isLeafNode()||n.forEachChild(Ie,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Uo(i,s,o))}else r.trackChildChange(us(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?X.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e){this.indexedFilter_=new Hh(e.getIndex()),this.index_=e.getIndex(),this.startPost_=$o.getStartPost_(e),this.endPost_=$o.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new ie(n,r))||(r=X.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=X.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(X.EMPTY_NODE);const s=this;return n.forEachChild(Ie,(o,a)=>{s.matches(new ie(o,a))||(i=i.updateImmediateChild(o,X.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new $o(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new ie(n,r))||(r=X.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=X.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=X.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(X.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,X.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const p=this.index_.getCompare();o=(f,v)=>p(v,f)}else o=this.index_.getCompare();const a=e;O(a.numChildren()===this.limit_,"");const l=new ie(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const p=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const v=f==null?1:o(f,l);if(d&&!r.isEmpty()&&v>=0)return s!=null&&s.trackChildChange(Uo(n,r,p)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(zo(n,p));const C=a.updateImmediateChild(n,X.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(us(f.name,f.node)),C.updateImmediateChild(f.name,f.node)):C}}else return r.isEmpty()?e:d&&o(c,l)>=0?(s!=null&&(s.trackChildChange(zo(c.name,c.node)),s.trackChildChange(us(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,X.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ie}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return O(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return O(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:cs}hasEnd(){return this.endSet_}getIndexEndValue(){return O(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return O(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ai}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return O(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ie}copy(){const e=new Vh;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function eI(t){return t.loadsAllData()?new Hh(t.getIndex()):t.hasLimit()?new ZS(t):new $o(t)}function dm(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ie?n="$priority":t.index_===XS?n="$value":t.index_===qi?n="$key":(O(t.index_ instanceof qS,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Fe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Fe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Fe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Fe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Fe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function hm(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ie&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll extends Qv{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(O(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Jo("p:rest:"),this.listens_={}}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Ll.getListenId_(e,r),a={};this.listens_[o]=a;const l=dm(e._queryParams);this.restRequest_(s+".json",l,(c,d)=>{let p=d;if(c===404&&(p=null,c=null),c===null&&this.onDataUpdate_(s,p,!1,r),os(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const r=Ll.getListenId_(e,n);delete this.listens_[r]}get(e){const n=dm(e._queryParams),r=e._path.toString(),i=new dn;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Es(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Mo(a.responseText)}catch{ct("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&ct("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(){this.rootNode_=X.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl(){return{value:null,children:new Map}}function Ss(t,e,n){if(re(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ne(e);t.children.has(r)||t.children.set(r,jl());const i=t.children.get(r);e=ge(e),Ss(i,e,n)}}function Ed(t,e){if(re(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(Ie,(r,i)=>{Ss(t,new fe(r),i)}),Ed(t,e)}}else if(t.children.size>0){const n=ne(e);return e=ge(e),t.children.has(n)&&Ed(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function Cd(t,e,n){t.value!==null?n(e,t.value):nI(t,(r,i)=>{const s=new fe(e.toString()+"/"+r);Cd(i,s,n)})}function nI(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ke(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm=10*1e3,iI=30*1e3,sI=5*60*1e3;class oI{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new rI(e);const r=fm+(iI-fm)*Math.random();fo(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ke(e,(i,s)=>{s>0&&_n(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),fo(this.reportStats_.bind(this),Math.floor(Math.random()*2*sI))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Qt||(Qt={}));function Gh(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Kh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Yh(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Qt.ACK_USER_WRITE,this.source=Gh()}operationForChild(e){if(re(this.path)){if(this.affectedTree.value!=null)return O(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new fe(e));return new Fl(ae(),n,this.revert)}}else return O(ne(this.path)===e,"operationForChild called for unrelated child."),new Fl(ge(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e,n){this.source=e,this.path=n,this.type=Qt.LISTEN_COMPLETE}operationForChild(e){return re(this.path)?new Bo(this.source,ae()):new Bo(this.source,ge(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Qt.OVERWRITE}operationForChild(e){return re(this.path)?new li(this.source,ae(),this.snap.getImmediateChild(e)):new li(this.source,ge(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Qt.MERGE}operationForChild(e){if(re(this.path)){const n=this.children.subtree(new fe(e));return n.isEmpty()?null:n.value?new li(this.source,ae(),n.value):new ds(this.source,ae(),n)}else return O(ne(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ds(this.source,ge(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(re(e))return this.isFullyInitialized()&&!this.filtered_;const n=ne(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function lI(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(JS(o.childName,o.snapshotNode))}),Gs(t,i,"child_removed",e,r,n),Gs(t,i,"child_added",e,r,n),Gs(t,i,"child_moved",s,r,n),Gs(t,i,"child_changed",e,r,n),Gs(t,i,"value",e,r,n),i}function Gs(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>uI(t,a,l)),o.forEach(a=>{const l=cI(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function cI(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function uI(t,e,n){if(e.childName==null||n.childName==null)throw ys("Should only compare child_ events.");const r=new ie(e.childName,e.snapshotNode),i=new ie(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vc(t,e){return{eventCache:t,serverCache:e}}function po(t,e,n,r){return vc(new Ir(e,n,r),t.serverCache)}function oy(t,e,n,r){return vc(t.eventCache,new Ir(e,n,r))}function zl(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ci(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pu;const dI=()=>(pu||(pu=new gt(qk)),pu);class _e{static fromObject(e){let n=new _e(null);return Ke(e,(r,i)=>{n=n.set(new fe(r),i)}),n}constructor(e,n=dI()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ae(),value:this.value};if(re(e))return null;{const r=ne(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ge(e),n);return s!=null?{path:Se(new fe(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(re(e))return this;{const n=ne(e),r=this.children.get(n);return r!==null?r.subtree(ge(e)):new _e(null)}}set(e,n){if(re(e))return new _e(n,this.children);{const r=ne(e),s=(this.children.get(r)||new _e(null)).set(ge(e),n),o=this.children.insert(r,s);return new _e(this.value,o)}}remove(e){if(re(e))return this.children.isEmpty()?new _e(null):new _e(null,this.children);{const n=ne(e),r=this.children.get(n);if(r){const i=r.remove(ge(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new _e(null):new _e(this.value,s)}else return this}}get(e){if(re(e))return this.value;{const n=ne(e),r=this.children.get(n);return r?r.get(ge(e)):null}}setTree(e,n){if(re(e))return n;{const r=ne(e),s=(this.children.get(r)||new _e(null)).setTree(ge(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new _e(this.value,o)}}fold(e){return this.fold_(ae(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Se(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ae(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(re(e))return null;{const s=ne(e),o=this.children.get(s);return o?o.findOnPath_(ge(e),Se(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ae(),n)}foreachOnPath_(e,n,r){if(re(e))return this;{this.value&&r(n,this.value);const i=ne(e),s=this.children.get(i);return s?s.foreachOnPath_(ge(e),Se(n,i),r):new _e(null)}}foreach(e){this.foreach_(ae(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Se(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.writeTree_=e}static empty(){return new en(new _e(null))}}function mo(t,e,n){if(re(e))return new en(new _e(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=at(i,e);return s=s.updateChild(o,n),new en(t.writeTree_.set(i,s))}else{const i=new _e(n),s=t.writeTree_.setTree(e,i);return new en(s)}}}function kd(t,e,n){let r=t;return Ke(n,(i,s)=>{r=mo(r,Se(e,i),s)}),r}function pm(t,e){if(re(e))return en.empty();{const n=t.writeTree_.setTree(e,new _e(null));return new en(n)}}function Sd(t,e){return mi(t,e)!=null}function mi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(at(n.path,e)):null}function mm(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ie,(r,i)=>{e.push(new ie(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new ie(r,i.value))}),e}function yr(t,e){if(re(e))return t;{const n=mi(t,e);return n!=null?new en(new _e(n)):new en(t.writeTree_.subtree(e))}}function Id(t){return t.writeTree_.isEmpty()}function hs(t,e){return ay(ae(),t.writeTree_,e)}function ay(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(O(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=ay(Se(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Se(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yc(t,e){return dy(e,t)}function hI(t,e,n,r,i){O(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=mo(t.visibleWrites,e,n)),t.lastWriteId=r}function fI(t,e,n,r){O(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=kd(t.visibleWrites,e,n),t.lastWriteId=r}function pI(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function mI(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);O(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&gI(a,r.path)?i=!1:jt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return _I(t),!0;if(r.snap)t.visibleWrites=pm(t.visibleWrites,r.path);else{const a=r.children;Ke(a,l=>{t.visibleWrites=pm(t.visibleWrites,Se(r.path,l))})}return!0}else return!1}function gI(t,e){if(t.snap)return jt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&jt(Se(t.path,n),e))return!0;return!1}function _I(t){t.visibleWrites=ly(t.allWrites,vI,ae()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function vI(t){return t.visible}function ly(t,e,n){let r=en.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)jt(n,o)?(a=at(n,o),r=mo(r,a,s.snap)):jt(o,n)&&(a=at(o,n),r=mo(r,ae(),s.snap.getChild(a)));else if(s.children){if(jt(n,o))a=at(n,o),r=kd(r,a,s.children);else if(jt(o,n))if(a=at(o,n),re(a))r=kd(r,ae(),s.children);else{const l=os(s.children,ne(a));if(l){const c=l.getChild(ge(a));r=mo(r,ae(),c)}}}else throw ys("WriteRecord should have .snap or .children")}}return r}function cy(t,e,n,r,i){if(!r&&!i){const s=mi(t.visibleWrites,e);if(s!=null)return s;{const o=yr(t.visibleWrites,e);if(Id(o))return n;if(n==null&&!Sd(o,ae()))return null;{const a=n||X.EMPTY_NODE;return hs(o,a)}}}else{const s=yr(t.visibleWrites,e);if(!i&&Id(s))return n;if(!i&&n==null&&!Sd(s,ae()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(jt(c.path,e)||jt(e,c.path))},a=ly(t.allWrites,o,e),l=n||X.EMPTY_NODE;return hs(a,l)}}}function yI(t,e,n){let r=X.EMPTY_NODE;const i=mi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ie,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=yr(t.visibleWrites,e);return n.forEachChild(Ie,(o,a)=>{const l=hs(yr(s,new fe(o)),a);r=r.updateImmediateChild(o,l)}),mm(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=yr(t.visibleWrites,e);return mm(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function wI(t,e,n,r,i){O(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Se(e,n);if(Sd(t.visibleWrites,s))return null;{const o=yr(t.visibleWrites,s);return Id(o)?i.getChild(n):hs(o,i.getChild(n))}}function EI(t,e,n,r){const i=Se(e,n),s=mi(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=yr(t.visibleWrites,i);return hs(o,r.getNode().getImmediateChild(n))}else return null}function CI(t,e){return mi(t.visibleWrites,e)}function kI(t,e,n,r,i,s,o){let a;const l=yr(t.visibleWrites,e),c=mi(l,ae());if(c!=null)a=c;else if(n!=null)a=hs(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],p=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let v=f.getNext();for(;v&&d.length<i;)p(v,r)!==0&&d.push(v),v=f.getNext();return d}else return[]}function SI(){return{visibleWrites:en.empty(),allWrites:[],lastWriteId:-1}}function Ul(t,e,n,r){return cy(t.writeTree,t.treePath,e,n,r)}function qh(t,e){return yI(t.writeTree,t.treePath,e)}function gm(t,e,n,r){return wI(t.writeTree,t.treePath,e,n,r)}function $l(t,e){return CI(t.writeTree,Se(t.treePath,e))}function II(t,e,n,r,i,s){return kI(t.writeTree,t.treePath,e,n,r,i,s)}function Qh(t,e,n){return EI(t.writeTree,t.treePath,e,n)}function uy(t,e){return dy(Se(t.treePath,e),t.writeTree)}function dy(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;O(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),O(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Uo(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,zo(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,us(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Uo(r,e.snapshotNode,i.oldSnap));else throw ys("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const hy=new NI;class Xh{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Ir(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Qh(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ci(this.viewCache_),s=II(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xI(t){return{filter:t}}function PI(t,e){O(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),O(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function RI(t,e,n,r,i){const s=new TI;let o,a;if(n.type===Qt.OVERWRITE){const c=n;c.source.fromUser?o=Td(t,e,c.path,c.snap,r,i,s):(O(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!re(c.path),o=Bl(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===Qt.MERGE){const c=n;c.source.fromUser?o=bI(t,e,c.path,c.children,r,i,s):(O(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Nd(t,e,c.path,c.children,r,i,a,s))}else if(n.type===Qt.ACK_USER_WRITE){const c=n;c.revert?o=MI(t,e,c.path,r,i,s):o=OI(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===Qt.LISTEN_COMPLETE)o=DI(t,e,n.path,r,s);else throw ys("Unknown operation type: "+n.type);const l=s.getChanges();return AI(e,o,l),{viewCache:o,changes:l}}function AI(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=zl(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(sy(zl(e)))}}function fy(t,e,n,r,i,s){const o=e.eventCache;if($l(r,n)!=null)return e;{let a,l;if(re(n))if(O(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ci(e),d=c instanceof X?c:X.EMPTY_NODE,p=qh(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),p,s)}else{const c=Ul(r,ci(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=ne(n);if(c===".priority"){O(Sr(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const p=gm(r,n,d,l);p!=null?a=t.filter.updatePriority(d,p):a=o.getNode()}else{const d=ge(n);let p;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=gm(r,n,o.getNode(),l);f!=null?p=o.getNode().getImmediateChild(c).updateChild(d,f):p=o.getNode().getImmediateChild(c)}else p=Qh(r,c,e.serverCache);p!=null?a=t.filter.updateChild(o.getNode(),c,p,d,i,s):a=o.getNode()}}return po(e,a,o.isFullyInitialized()||re(n),t.filter.filtersNodes())}}function Bl(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(re(n))c=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const v=l.getNode().updateChild(n,r);c=d.updateFullNode(l.getNode(),v,null)}else{const v=ne(n);if(!l.isCompleteForPath(n)&&Sr(n)>1)return e;const w=ge(n),W=l.getNode().getImmediateChild(v).updateChild(w,r);v===".priority"?c=d.updatePriority(l.getNode(),W):c=d.updateChild(l.getNode(),v,W,w,hy,null)}const p=oy(e,c,l.isFullyInitialized()||re(n),d.filtersNodes()),f=new Xh(i,p,s);return fy(t,p,n,i,f,a)}function Td(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const d=new Xh(i,e,s);if(re(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=po(e,c,!0,t.filter.filtersNodes());else{const p=ne(n);if(p===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=po(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=ge(n),v=a.getNode().getImmediateChild(p);let w;if(re(f))w=r;else{const C=d.getCompleteChild(p);C!=null?Uh(f)===".priority"&&C.getChild(Jv(f)).isEmpty()?w=C:w=C.updateChild(f,r):w=X.EMPTY_NODE}if(v.equals(w))l=e;else{const C=t.filter.updateChild(a.getNode(),p,w,f,d,o);l=po(e,C,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function _m(t,e){return t.eventCache.isCompleteForChild(e)}function bI(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const d=Se(n,l);_m(e,ne(d))&&(a=Td(t,a,d,c,i,s,o))}),r.foreach((l,c)=>{const d=Se(n,l);_m(e,ne(d))||(a=Td(t,a,d,c,i,s,o))}),a}function vm(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Nd(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;re(n)?c=r:c=new _e(null).setTree(n,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((p,f)=>{if(d.hasChild(p)){const v=e.serverCache.getNode().getImmediateChild(p),w=vm(t,v,f);l=Bl(t,l,new fe(p),w,i,s,o,a)}}),c.children.inorderTraversal((p,f)=>{const v=!e.serverCache.isCompleteForChild(p)&&f.value===null;if(!d.hasChild(p)&&!v){const w=e.serverCache.getNode().getImmediateChild(p),C=vm(t,w,f);l=Bl(t,l,new fe(p),C,i,s,o,a)}}),l}function OI(t,e,n,r,i,s,o){if($l(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(re(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Bl(t,e,n,l.getNode().getChild(n),i,s,a,o);if(re(n)){let c=new _e(null);return l.getNode().forEachChild(qi,(d,p)=>{c=c.set(new fe(d),p)}),Nd(t,e,n,c,i,s,a,o)}else return e}else{let c=new _e(null);return r.foreach((d,p)=>{const f=Se(n,d);l.isCompleteForPath(f)&&(c=c.set(d,l.getNode().getChild(f)))}),Nd(t,e,n,c,i,s,a,o)}}function DI(t,e,n,r,i){const s=e.serverCache,o=oy(e,s.getNode(),s.isFullyInitialized()||re(n),s.isFiltered());return fy(t,o,n,r,hy,i)}function MI(t,e,n,r,i,s){let o;if($l(r,n)!=null)return e;{const a=new Xh(r,e,i),l=e.eventCache.getNode();let c;if(re(n)||ne(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Ul(r,ci(e));else{const p=e.serverCache.getNode();O(p instanceof X,"serverChildren would be complete if leaf node"),d=qh(r,p)}d=d,c=t.filter.updateFullNode(l,d,s)}else{const d=ne(n);let p=Qh(r,d,e.serverCache);p==null&&e.serverCache.isCompleteForChild(d)&&(p=l.getImmediateChild(d)),p!=null?c=t.filter.updateChild(l,d,p,ge(n),a,s):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(l,d,X.EMPTY_NODE,ge(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ul(r,ci(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||$l(r,ae())!=null,po(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Hh(r.getIndex()),s=eI(r);this.processor_=xI(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(X.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(X.EMPTY_NODE,a.getNode(),null),d=new Ir(l,o.isFullyInitialized(),i.filtersNodes()),p=new Ir(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=vc(p,d),this.eventGenerator_=new aI(this.query_)}get query(){return this.query_}}function jI(t){return t.viewCache_.serverCache.getNode()}function FI(t){return zl(t.viewCache_)}function zI(t,e){const n=ci(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!re(e)&&!n.getImmediateChild(ne(e)).isEmpty())?n.getChild(e):null}function ym(t){return t.eventRegistrations_.length===0}function UI(t,e){t.eventRegistrations_.push(e)}function wm(t,e,n){const r=[];if(n){O(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Em(t,e,n,r){e.type===Qt.MERGE&&e.source.queryId!==null&&(O(ci(t.viewCache_),"We should always have a full cache before handling merges"),O(zl(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=RI(t.processor_,i,e,n,r);return PI(t.processor_,s.viewCache),O(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,py(t,s.changes,s.viewCache.eventCache.getNode(),null)}function $I(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ie,(s,o)=>{r.push(us(s,o))}),n.isFullyInitialized()&&r.push(sy(n.getNode())),py(t,r,n.getNode(),e)}function py(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return lI(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wl;class my{constructor(){this.views=new Map}}function BI(t){O(!Wl,"__referenceConstructor has already been defined"),Wl=t}function WI(){return O(Wl,"Reference.ts has not been loaded"),Wl}function HI(t){return t.views.size===0}function Jh(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return O(s!=null,"SyncTree gave us an op for an invalid query."),Em(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Em(o,e,n,r));return s}}function gy(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Ul(n,i?r:null),l=!1;a?l=!0:r instanceof X?(a=qh(n,r),l=!1):(a=X.EMPTY_NODE,l=!1);const c=vc(new Ir(a,l,!1),new Ir(r,i,!1));return new LI(e,c)}return o}function VI(t,e,n,r,i,s){const o=gy(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),UI(o,n),$I(o,n)}function GI(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Tr(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(wm(c,n,r)),ym(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(wm(l,n,r)),ym(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Tr(t)&&s.push(new(WI())(e._repo,e._path)),{removed:s,events:o}}function _y(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function wr(t,e){let n=null;for(const r of t.views.values())n=n||zI(r,e);return n}function vy(t,e){if(e._queryParams.loadsAllData())return wc(t);{const r=e._queryIdentifier;return t.views.get(r)}}function yy(t,e){return vy(t,e)!=null}function Tr(t){return wc(t)!=null}function wc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hl;function KI(t){O(!Hl,"__referenceConstructor has already been defined"),Hl=t}function YI(){return O(Hl,"Reference.ts has not been loaded"),Hl}let qI=1;class Cm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new _e(null),this.pendingWriteTree_=SI(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function wy(t,e,n,r,i){return hI(t.pendingWriteTree_,e,n,r,i),i?Is(t,new li(Gh(),e,n)):[]}function QI(t,e,n,r){fI(t.pendingWriteTree_,e,n,r);const i=_e.fromObject(n);return Is(t,new ds(Gh(),e,i))}function ar(t,e,n=!1){const r=pI(t.pendingWriteTree_,e);if(mI(t.pendingWriteTree_,e)){let s=new _e(null);return r.snap!=null?s=s.set(ae(),!0):Ke(r.children,o=>{s=s.set(new fe(o),!0)}),Is(t,new Fl(r.path,s,n))}else return[]}function ea(t,e,n){return Is(t,new li(Kh(),e,n))}function XI(t,e,n){const r=_e.fromObject(n);return Is(t,new ds(Kh(),e,r))}function JI(t,e){return Is(t,new Bo(Kh(),e))}function ZI(t,e,n){const r=ef(t,n);if(r){const i=tf(r),s=i.path,o=i.queryId,a=at(s,e),l=new Bo(Yh(o),a);return nf(t,s,l)}else return[]}function Vl(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||yy(o,e))){const l=GI(o,e,n,r);HI(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const d=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,p=t.syncPointTree_.findOnPath(s,(f,v)=>Tr(v));if(d&&!p){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const v=n1(f);for(let w=0;w<v.length;++w){const C=v[w],W=C.query,g=Sy(t,C);t.listenProvider_.startListening(go(W),Wo(t,W),g.hashFn,g.onComplete)}}}!p&&c.length>0&&!r&&(d?t.listenProvider_.stopListening(go(e),null):c.forEach(f=>{const v=t.queryToTagMap.get(Ec(f));t.listenProvider_.stopListening(go(f),v)}))}r1(t,c)}return a}function Ey(t,e,n,r){const i=ef(t,r);if(i!=null){const s=tf(i),o=s.path,a=s.queryId,l=at(o,e),c=new li(Yh(a),l,n);return nf(t,o,c)}else return[]}function e1(t,e,n,r){const i=ef(t,r);if(i){const s=tf(i),o=s.path,a=s.queryId,l=at(o,e),c=_e.fromObject(n),d=new ds(Yh(a),l,c);return nf(t,o,d)}else return[]}function xd(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,v)=>{const w=at(f,i);s=s||wr(v,w),o=o||Tr(v)});let a=t.syncPointTree_.get(i);a?(o=o||Tr(a),s=s||wr(a,ae())):(a=new my,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=X.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((v,w)=>{const C=wr(w,ae());C&&(s=s.updateImmediateChild(v,C))}));const c=yy(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=Ec(e);O(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const v=i1();t.queryToTagMap.set(f,v),t.tagToQueryMap.set(v,f)}const d=yc(t.pendingWriteTree_,i);let p=VI(a,e,n,d,s,l);if(!c&&!o&&!r){const f=vy(a,e);p=p.concat(s1(t,e,f))}return p}function Zh(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=at(o,e),c=wr(a,l);if(c)return c});return cy(i,e,s,n,!0)}function t1(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,d)=>{const p=at(c,n);r=r||wr(d,p)});let i=t.syncPointTree_.get(n);i?r=r||wr(i,ae()):(i=new my,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Ir(r,!0,!1):null,a=yc(t.pendingWriteTree_,e._path),l=gy(i,e,a,s?o.getNode():X.EMPTY_NODE,s);return FI(l)}function Is(t,e){return Cy(e,t.syncPointTree_,null,yc(t.pendingWriteTree_,ae()))}function Cy(t,e,n,r){if(re(t.path))return ky(t,e,n,r);{const i=e.get(ae());n==null&&i!=null&&(n=wr(i,ae()));let s=[];const o=ne(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,d=uy(r,o);s=s.concat(Cy(a,l,c,d))}return i&&(s=s.concat(Jh(i,t,r,n))),s}}function ky(t,e,n,r){const i=e.get(ae());n==null&&i!=null&&(n=wr(i,ae()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=uy(r,o),d=t.operationForChild(o);d&&(s=s.concat(ky(d,a,l,c)))}),i&&(s=s.concat(Jh(i,t,r,n))),s}function Sy(t,e){const n=e.query,r=Wo(t,n);return{hashFn:()=>(jI(e)||X.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?ZI(t,n._path,r):JI(t,n._path);{const s=Jk(i,n);return Vl(t,n,null,s)}}}}function Wo(t,e){const n=Ec(e);return t.queryToTagMap.get(n)}function Ec(t){return t._path.toString()+"$"+t._queryIdentifier}function ef(t,e){return t.tagToQueryMap.get(e)}function tf(t){const e=t.indexOf("$");return O(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new fe(t.substr(0,e))}}function nf(t,e,n){const r=t.syncPointTree_.get(e);O(r,"Missing sync point for query tag that we're tracking");const i=yc(t.pendingWriteTree_,e);return Jh(r,n,i,null)}function n1(t){return t.fold((e,n,r)=>{if(n&&Tr(n))return[wc(n)];{let i=[];return n&&(i=_y(n)),Ke(r,(s,o)=>{i=i.concat(o)}),i}})}function go(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(YI())(t._repo,t._path):t}function r1(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Ec(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function i1(){return qI++}function s1(t,e,n){const r=e._path,i=Wo(t,e),s=Sy(t,n),o=t.listenProvider_.startListening(go(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)O(!Tr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,d,p)=>{if(!re(c)&&d&&Tr(d))return[wc(d).query];{let f=[];return d&&(f=f.concat(_y(d).map(v=>v.query))),Ke(p,(v,w)=>{f=f.concat(w)}),f}});for(let c=0;c<l.length;++c){const d=l[c];t.listenProvider_.stopListening(go(d),Wo(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new rf(n)}node(){return this.node_}}class sf{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Se(this.path_,e);return new sf(this.syncTree_,n)}node(){return Zh(this.syncTree_,this.path_)}}const o1=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},km=function(t,e,n){if(!t||typeof t!="object")return t;if(O(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return a1(t[".sv"],e,n);if(typeof t[".sv"]=="object")return l1(t[".sv"],e);O(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},a1=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:O(!1,"Unexpected server value: "+t)}},l1=function(t,e,n){t.hasOwnProperty("increment")||O(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&O(!1,"Unexpected increment value: "+r);const i=e.node();if(O(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},Iy=function(t,e,n,r){return of(e,new sf(n,t),r)},Ty=function(t,e,n){return of(t,new rf(e),n)};function of(t,e,n){const r=t.getPriority().val(),i=km(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=km(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Be(a,Re(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Be(i))),o.forEachChild(Ie,(a,l)=>{const c=of(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function lf(t,e){let n=e instanceof fe?e:new fe(e),r=t,i=ne(n);for(;i!==null;){const s=os(r.node.children,i)||{children:{},childCount:0};r=new af(i,r,s),n=ge(n),i=ne(n)}return r}function Ts(t){return t.node.value}function Ny(t,e){t.node.value=e,Pd(t)}function xy(t){return t.node.childCount>0}function c1(t){return Ts(t)===void 0&&!xy(t)}function Cc(t,e){Ke(t.node.children,(n,r)=>{e(new af(n,t,r))})}function Py(t,e,n,r){n&&e(t),Cc(t,i=>{Py(i,e,!0)})}function u1(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function ta(t){return new fe(t.parent===null?t.name:ta(t.parent)+"/"+t.name)}function Pd(t){t.parent!==null&&d1(t.parent,t.name,t)}function d1(t,e,n){const r=c1(n),i=_n(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Pd(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Pd(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h1=/[\[\].#$\/\u0000-\u001F\u007F]/,f1=/[\[\].#$\u0000-\u001F\u007F]/,mu=10*1024*1024,cf=function(t){return typeof t=="string"&&t.length!==0&&!h1.test(t)},Ry=function(t){return typeof t=="string"&&t.length!==0&&!f1.test(t)},p1=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ry(t)},Ay=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!gc(t)||t&&typeof t=="object"&&_n(t,".sv")},Gl=function(t,e,n,r){r&&e===void 0||kc(as(t,"value"),e,n)},kc=function(t,e,n){const r=n instanceof fe?new bS(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Gr(r));if(typeof e=="function")throw new Error(t+"contains a function "+Gr(r)+" with contents = "+e.toString());if(gc(e))throw new Error(t+"contains "+e.toString()+" "+Gr(r));if(typeof e=="string"&&e.length>mu/3&&mc(e)>mu)throw new Error(t+"contains a string greater than "+mu+" utf8 bytes "+Gr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Ke(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!cf(o)))throw new Error(t+" contains an invalid key ("+o+") "+Gr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);OS(r,o),kc(t,a,r),DS(r)}),i&&s)throw new Error(t+' contains ".value" child '+Gr(r)+" in addition to actual children.")}},m1=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Fo(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!cf(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(AS);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&jt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},by=function(t,e,n,r){const i=as(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Ke(e,(o,a)=>{const l=new fe(o);if(kc(i,a,Se(n,l)),Uh(l)===".priority"&&!Ay(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),m1(i,s)},g1=function(t,e,n){if(gc(e))throw new Error(as(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Ay(e))throw new Error(as(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},Oy=function(t,e,n,r){if(!Ry(n))throw new Error(as(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},_1=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Oy(t,e,n)},Xr=function(t,e){if(ne(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},v1=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!cf(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!p1(n))throw new Error(as(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Sc(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!$h(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Dy(t,e,n){Sc(t,n),My(t,r=>$h(r,e))}function $t(t,e,n){Sc(t,n),My(t,r=>jt(r,e)||jt(e,r))}function My(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(w1(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function w1(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();ho&&Ve("event: "+n.toString()),ks(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E1="repo_interrupt",C1=25;class k1{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new y1,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=jl(),this.transactionQueueTree_=new af,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function S1(t,e,n){if(t.stats_=Fh(t.repoInfo_),t.forceRestClient_||nS())t.server_=new Ll(t.repoInfo_,(r,i,s,o)=>{Sm(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Im(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Fe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Rn(t.repoInfo_,e,(r,i,s,o)=>{Sm(t,r,i,s,o)},r=>{Im(t,r)},r=>{I1(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=aS(t.repoInfo_,()=>new oI(t.stats_,t.server_)),t.infoData_=new tI,t.infoSyncTree_=new Cm({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=ea(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),uf(t,"connected",!1),t.serverSyncTree_=new Cm({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);$t(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function Ly(t){const n=t.infoData_.getNode(new fe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ic(t){return o1({timestamp:Ly(t)})}function Sm(t,e,n,r,i){t.dataUpdateCount++;const s=new fe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Al(n,c=>Re(c));o=e1(t.serverSyncTree_,s,l,i)}else{const l=Re(n);o=Ey(t.serverSyncTree_,s,l,i)}else if(r){const l=Al(n,c=>Re(c));o=XI(t.serverSyncTree_,s,l)}else{const l=Re(n);o=ea(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=fs(t,s)),$t(t.eventQueue_,a,o)}function Im(t,e){uf(t,"connected",e),e===!1&&P1(t)}function I1(t,e){Ke(e,(n,r)=>{uf(t,n,r)})}function uf(t,e,n){const r=new fe("/.info/"+e),i=Re(n);t.infoData_.updateSnapshot(r,i);const s=ea(t.infoSyncTree_,r,i);$t(t.eventQueue_,r,s)}function df(t){return t.nextWriteId_++}function T1(t,e,n){const r=t1(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=Re(i).withIndex(e._queryParams.getIndex());xd(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=ea(t.serverSyncTree_,e._path,s);else{const a=Wo(t.serverSyncTree_,e);o=Ey(t.serverSyncTree_,e._path,s,a)}return $t(t.eventQueue_,e._path,o),Vl(t.serverSyncTree_,e,n,null,!0),s},i=>(na(t,"get for query "+Fe(e)+" failed: "+i),Promise.reject(new Error(i))))}function N1(t,e,n,r,i){na(t,"set",{path:e.toString(),value:n,priority:r});const s=Ic(t),o=Re(n,r),a=Zh(t.serverSyncTree_,e),l=Ty(o,a,s),c=df(t),d=wy(t.serverSyncTree_,e,l,c,!0);Sc(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(f,v)=>{const w=f==="ok";w||ct("set at "+e+" failed: "+f);const C=ar(t.serverSyncTree_,c,!w);$t(t.eventQueue_,e,C),Nr(t,i,f,v)});const p=ff(t,e);fs(t,p),$t(t.eventQueue_,p,[])}function x1(t,e,n,r){na(t,"update",{path:e.toString(),value:n});let i=!0;const s=Ic(t),o={};if(Ke(n,(a,l)=>{i=!1,o[a]=Iy(Se(e,a),Re(l),t.serverSyncTree_,s)}),i)Ve("update() called with empty data.  Don't do anything."),Nr(t,r,"ok",void 0);else{const a=df(t),l=QI(t.serverSyncTree_,e,o,a);Sc(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,d)=>{const p=c==="ok";p||ct("update at "+e+" failed: "+c);const f=ar(t.serverSyncTree_,a,!p),v=f.length>0?fs(t,e):e;$t(t.eventQueue_,v,f),Nr(t,r,c,d)}),Ke(n,c=>{const d=ff(t,Se(e,c));fs(t,d)}),$t(t.eventQueue_,e,[])}}function P1(t){na(t,"onDisconnectEvents");const e=Ic(t),n=jl();Cd(t.onDisconnect_,ae(),(i,s)=>{const o=Iy(i,s,t.serverSyncTree_,e);Ss(n,i,o)});let r=[];Cd(n,ae(),(i,s)=>{r=r.concat(ea(t.serverSyncTree_,i,s));const o=ff(t,i);fs(t,o)}),t.onDisconnect_=jl(),$t(t.eventQueue_,ae(),r)}function R1(t,e,n){t.server_.onDisconnectCancel(e.toString(),(r,i)=>{r==="ok"&&Ed(t.onDisconnect_,e),Nr(t,n,r,i)})}function Tm(t,e,n,r){const i=Re(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),(s,o)=>{s==="ok"&&Ss(t.onDisconnect_,e,i),Nr(t,r,s,o)})}function A1(t,e,n,r,i){const s=Re(n,r);t.server_.onDisconnectPut(e.toString(),s.val(!0),(o,a)=>{o==="ok"&&Ss(t.onDisconnect_,e,s),Nr(t,i,o,a)})}function b1(t,e,n,r){if(Rl(n)){Ve("onDisconnect().update() called with empty data.  Don't do anything."),Nr(t,r,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(i,s)=>{i==="ok"&&Ke(n,(o,a)=>{const l=Re(a);Ss(t.onDisconnect_,Se(e,o),l)}),Nr(t,r,i,s)})}function O1(t,e,n){let r;ne(e._path)===".info"?r=xd(t.infoSyncTree_,e,n):r=xd(t.serverSyncTree_,e,n),Dy(t.eventQueue_,e._path,r)}function jy(t,e,n){let r;ne(e._path)===".info"?r=Vl(t.infoSyncTree_,e,n):r=Vl(t.serverSyncTree_,e,n),Dy(t.eventQueue_,e._path,r)}function D1(t){t.persistentConnection_&&t.persistentConnection_.interrupt(E1)}function na(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ve(n,...e)}function Nr(t,e,n,r){e&&ks(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function Fy(t,e,n){return Zh(t.serverSyncTree_,e,n)||X.EMPTY_NODE}function hf(t,e=t.transactionQueueTree_){if(e||Tc(t,e),Ts(e)){const n=Uy(t,e);O(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&M1(t,ta(e),n)}else xy(e)&&Cc(e,n=>{hf(t,n)})}function M1(t,e,n){const r=n.map(c=>c.currentWriteId),i=Fy(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const d=n[c];O(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const p=at(e,d.path);s=s.updateChild(p,d.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{na(t,"transaction put response",{path:l.toString(),status:c});let d=[];if(c==="ok"){const p=[];for(let f=0;f<n.length;f++)n[f].status=2,d=d.concat(ar(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&p.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Tc(t,lf(t.transactionQueueTree_,e)),hf(t,t.transactionQueueTree_),$t(t.eventQueue_,e,d);for(let f=0;f<p.length;f++)ks(p[f])}else{if(c==="datastale")for(let p=0;p<n.length;p++)n[p].status===3?n[p].status=4:n[p].status=0;else{ct("transaction at "+l.toString()+" failed: "+c);for(let p=0;p<n.length;p++)n[p].status=4,n[p].abortReason=c}fs(t,e)}},o)}function fs(t,e){const n=zy(t,e),r=ta(n),i=Uy(t,n);return L1(t,i,r),r}function L1(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=at(n,l.path);let d=!1,p;if(O(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,p=l.abortReason,i=i.concat(ar(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=C1)d=!0,p="maxretry",i=i.concat(ar(t.serverSyncTree_,l.currentWriteId,!0));else{const f=Fy(t,l.path,o);l.currentInputSnapshot=f;const v=e[a].update(f.val());if(v!==void 0){kc("transaction failed: Data returned ",v,l.path);let w=Re(v);typeof v=="object"&&v!=null&&_n(v,".priority")||(w=w.updatePriority(f.getPriority()));const W=l.currentWriteId,g=Ic(t),m=Ty(w,f,g);l.currentOutputSnapshotRaw=w,l.currentOutputSnapshotResolved=m,l.currentWriteId=df(t),o.splice(o.indexOf(W),1),i=i.concat(wy(t.serverSyncTree_,l.path,m,l.currentWriteId,l.applyLocally)),i=i.concat(ar(t.serverSyncTree_,W,!0))}else d=!0,p="nodata",i=i.concat(ar(t.serverSyncTree_,l.currentWriteId,!0))}$t(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(p==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(p),!1,null))))}Tc(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)ks(r[a]);hf(t,t.transactionQueueTree_)}function zy(t,e){let n,r=t.transactionQueueTree_;for(n=ne(e);n!==null&&Ts(r)===void 0;)r=lf(r,n),e=ge(e),n=ne(e);return r}function Uy(t,e){const n=[];return $y(t,e,n),n.sort((r,i)=>r.order-i.order),n}function $y(t,e,n){const r=Ts(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Cc(e,i=>{$y(t,i,n)})}function Tc(t,e){const n=Ts(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Ny(e,n.length>0?n:void 0)}Cc(e,r=>{Tc(t,r)})}function ff(t,e){const n=ta(zy(t,e)),r=lf(t.transactionQueueTree_,e);return u1(r,i=>{gu(t,i)}),gu(t,r),Py(r,i=>{gu(t,i)}),n}function gu(t,e){const n=Ts(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(O(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(O(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(ar(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Ny(e,void 0):n.length=s+1,$t(t.eventQueue_,ta(e),i);for(let o=0;o<r.length;o++)ks(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j1(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function F1(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):ct(`Invalid query segment '${n}' in query '${t}'`)}return e}const Nm=function(t,e){const n=z1(t),r=n.namespace;n.domain==="firebase.com"&&Ln(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Ln("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Kk();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Wv(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new fe(n.pathString)}},z1=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let p=t.indexOf("?");p===-1&&(p=t.length),e=t.substring(0,Math.min(d,p)),d<p&&(i=j1(t.substring(d,p)));const f=F1(t.substring(Math.min(t.length,p)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const v=e.slice(0,c);if(v.toLowerCase()==="localhost")n="localhost";else if(v.split(".").length<=2)n=v;else{const w=e.indexOf(".");r=e.substring(0,w).toLowerCase(),n=e.substring(w+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",U1=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=xm.charAt(n%64),n=Math.floor(n/64);O(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=xm.charAt(e[i]);return O(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Fe(this.snapshot.exportVal())}}class Wy{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return O(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new dn;return R1(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Xr("OnDisconnect.remove",this._path);const e=new dn;return Tm(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Xr("OnDisconnect.set",this._path),Gl("OnDisconnect.set",e,this._path,!1);const n=new dn;return Tm(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){Xr("OnDisconnect.setWithPriority",this._path),Gl("OnDisconnect.setWithPriority",e,this._path,!1),g1("OnDisconnect.setWithPriority",n);const r=new dn;return A1(this._repo,this._path,e,n,r.wrapCallback(()=>{})),r.promise}update(e){Xr("OnDisconnect.update",this._path),by("OnDisconnect.update",e,this._path);const n=new dn;return b1(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return re(this._path)?null:Uh(this._path)}get ref(){return new vn(this._repo,this._path)}get _queryIdentifier(){const e=hm(this._queryParams),n=Lh(e);return n==="{}"?"default":n}get _queryObject(){return hm(this._queryParams)}isEqual(e){if(e=De(e),!(e instanceof mf))return!1;const n=this._repo===e._repo,r=$h(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+RS(this._path)}}class vn extends mf{constructor(e,n){super(e,n,new Vh,!1)}get parent(){const e=Jv(this._path);return e===null?null:new vn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ps{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new fe(e),r=ms(this.ref,e);return new ps(this._node.getChild(n),r,Ie)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new ps(i,ms(this.ref,r),Ie)))}hasChild(e){const n=new fe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function G(t,e){return t=De(t),t._checkNotDeleted("ref"),e!==void 0?ms(t._root,e):t._root}function ms(t,e){return t=De(t),ne(t._path)===null?_1("child","path",e):Oy("child","path",e),new vn(t._repo,Se(t._path,e))}function B1(t){return t=De(t),new $1(t._repo,t._path)}function W1(t,e){t=De(t),Xr("push",t._path),Gl("push",e,t._path,!0);const n=Ly(t._repo),r=U1(n),i=ms(t,r),s=ms(t,r);let o;return o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Ks(t){return Xr("remove",t._path),Er(t,null)}function Er(t,e){t=De(t),Xr("set",t._path),Gl("set",e,t._path,!1);const n=new dn;return N1(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function tt(t,e){by("update",e,t._path);const n=new dn;return x1(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function st(t){t=De(t);const e=new pf(()=>{}),n=new ra(e);return T1(t._repo,t,n).then(r=>new ps(r,new vn(t._repo,t._path),t._queryParams.getIndex()))}class ra{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new By("value",this,new ps(e.snapshotNode,new vn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Wy(this,e,n):null}matches(e){return e instanceof ra?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Nc{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Wy(this,e,n):null}createEvent(e,n){O(e.childName!=null,"Child events should have a childName.");const r=ms(new vn(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new By(e.type,this,new ps(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Nc?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function gf(t,e,n,r,i){const s=new pf(n,void 0),o=e==="value"?new ra(s):new Nc(e,s);return O1(t._repo,t,o),()=>jy(t._repo,t,o)}function Ot(t,e,n,r){return gf(t,"value",e)}function H1(t,e,n,r){return gf(t,"child_added",e)}function V1(t,e,n,r){return gf(t,"child_changed",e)}function Pm(t,e,n){let r=null;const i=n?new pf(n):null;e==="value"?r=new ra(i):e&&(r=new Nc(e,i)),jy(t._repo,t,r)}BI(vn);KI(vn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G1="FIREBASE_DATABASE_EMULATOR_HOST",Rd={};let K1=!1;function Y1(t,e,n,r){const i=e.lastIndexOf(":"),s=e.substring(0,i),o=ws(s);t.repoInfo_=new Wv(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function q1(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Ln("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ve("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Nm(s,i),a=o.repoInfo,l;typeof process<"u"&&Yp&&(l=Yp[G1]),l?(s=`http://${l}?ns=${a.namespace}`,o=Nm(s,i),a=o.repoInfo):o.repoInfo.secure;const c=new iS(t.name,t.options,e);v1("Invalid Firebase Database URL",o),re(o.path)||Ln("Database URL must point to the root of a Firebase Database (not including a child path).");const d=X1(a,t,c,new rS(t,n));return new J1(d,t)}function Q1(t,e){const n=Rd[e];(!n||n[t.key]!==t)&&Ln(`Database ${e}(${t.repoInfo_}) has already been deleted.`),D1(t),delete n[t.key]}function X1(t,e,n,r){let i=Rd[e.name];i||(i={},Rd[e.name]=i);let s=i[t.toURLString()];return s&&Ln("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new k1(t,K1,n,r),i[t.toURLString()]=s,s}class J1{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(S1(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new vn(this._repo,ae())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Q1(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ln("Cannot call "+e+" on a deleted database.")}}function Z1(t=Tv(),e){const n=Mh(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=fC("database");r&&eT(n,...r)}return n}function eT(t,e,n,r={}){t=De(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,s=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&si(r,s.repoInfo_.emulatorOptions))return;Ln("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&Ln('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Za(Za.OWNER);else if(r.mockUserToken){const a=typeof r.mockUserToken=="string"?r.mockUserToken:pC(r.mockUserToken,t.app.options.projectId);o=new Za(a)}ws(e)&&(yv(e),wv("Database",!0)),Y1(s,i,r,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tT(t){$k(Cs),ls(new oi("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return q1(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),vr(qp,Qp,t),vr(qp,Qp,"esm2017")}Rn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Rn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};tT();var nT="firebase",rT="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vr(nT,rT,"app");function _f(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Hy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const iT=Hy,Vy=new Qo("auth","Firebase",Hy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kl=new Oh("@firebase/auth");function sT(t,...e){Kl.logLevel<=pe.WARN&&Kl.warn(`Auth (${Cs}): ${t}`,...e)}function el(t,...e){Kl.logLevel<=pe.ERROR&&Kl.error(`Auth (${Cs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(t,...e){throw vf(t,...e)}function pn(t,...e){return vf(t,...e)}function Gy(t,e,n){const r=Object.assign(Object.assign({},iT()),{[e]:n});return new Qo("auth","Firebase",r).create(e,{appName:t.name})}function mn(t){return Gy(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function vf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Vy.create(t,...e)}function Q(t,e,...n){if(!t)throw vf(e,...n)}function Nn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw el(e),new Error(e)}function jn(t,e){t||Nn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function oT(){return Rm()==="http:"||Rm()==="https:"}function Rm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(oT()||vC()||"connection"in navigator)?navigator.onLine:!0}function lT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,n){this.shortDelay=e,this.longDelay=n,jn(n>e,"Short delay should be less than long delay!"),this.isMobile=bh()||Ev()}get(){return aT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(t,e){jn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Nn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Nn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Nn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],dT=new ia(3e4,6e4);function Un(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function rn(t,e,n,r,i={}){return Yy(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Es(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},s);return _C()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&ws(t.emulatorConfig.host)&&(c.credentials="include"),Ky.fetch()(await qy(t,t.config.apiHost,n,a),c)})}async function Yy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},cT),e);try{const i=new fT(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw za(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw za(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw za(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw za(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Gy(t,d,c);nn(t,d)}}catch(i){if(i instanceof Ar)throw i;nn(t,"network-request-failed",{message:String(i)})}}async function sa(t,e,n,r,i={}){const s=await rn(t,e,n,r,i);return"mfaPendingCredential"in s&&nn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function qy(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?yf(t.config,i):`${t.config.apiScheme}://${i}`;return uT.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function hT(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class fT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(pn(this.auth,"network-request-failed")),dT.get())})}}function za(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=pn(t,e,r);return i.customData._tokenResponse=n,i}function Am(t){return t!==void 0&&t.enterprise!==void 0}class pT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return hT(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function mT(t,e){return rn(t,"GET","/v2/recaptchaConfig",Un(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gT(t,e){return rn(t,"POST","/v1/accounts:delete",e)}async function Yl(t,e){return rn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _T(t,e=!1){const n=De(t),r=await n.getIdToken(e),i=wf(r);Q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:_o(_u(i.auth_time)),issuedAtTime:_o(_u(i.iat)),expirationTime:_o(_u(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function _u(t){return Number(t)*1e3}function wf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return el("JWT malformed, contained fewer than 3 sections"),null;try{const i=Pl(n);return i?JSON.parse(i):(el("Failed to decode base64 JWT payload"),null)}catch(i){return el("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function bm(t){const e=wf(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ui(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ar&&vT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function vT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=_o(this.lastLoginAt),this.creationTime=_o(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ql(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ui(t,Yl(n,{idToken:r}));Q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Qy(s.providerUserInfo):[],a=wT(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new bd(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function Od(t){const e=De(t);await ql(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function wT(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Qy(t){return t.map(e=>{var{providerId:n}=e,r=_f(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ET(t,e){const n=await Yy(t,{},async()=>{const r=Es({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await qy(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return t.emulatorConfig&&ws(t.emulatorConfig.host)&&(l.credentials="include"),Ky.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function CT(t,e){return rn(t,"POST","/v2/accounts:revokeToken",Un(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):bm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const n=bm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await ET(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Qi;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qi,this.toJSON())}_performRefresh(){return Nn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Xt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=_f(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new yT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new bd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ui(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return _T(this,e)}reload(){return Od(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Xt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ql(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(It(this.auth.app))return Promise.reject(mn(this.auth));const e=await this.getIdToken();return await ui(this,gT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,W=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(c=n.createdAt)!==null&&c!==void 0?c:void 0,m=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:_,emailVerified:k,isAnonymous:j,providerData:z,stsTokenManager:I}=n;Q(_&&I,e,"internal-error");const V=Qi.fromJSON(this.name,I);Q(typeof _=="string",e,"internal-error"),Qn(p,e.name),Qn(f,e.name),Q(typeof k=="boolean",e,"internal-error"),Q(typeof j=="boolean",e,"internal-error"),Qn(v,e.name),Qn(w,e.name),Qn(C,e.name),Qn(W,e.name),Qn(g,e.name),Qn(m,e.name);const le=new Xt({uid:_,auth:e,email:f,emailVerified:k,displayName:p,isAnonymous:j,photoURL:w,phoneNumber:v,tenantId:C,stsTokenManager:V,createdAt:g,lastLoginAt:m});return z&&Array.isArray(z)&&(le.providerData=z.map(J=>Object.assign({},J))),W&&(le._redirectEventId=W),le}static async _fromIdTokenResponse(e,n,r=!1){const i=new Qi;i.updateFromServerResponse(n);const s=new Xt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ql(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Qy(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Qi;a.updateFromIdToken(r);const l=new Xt({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new bd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om=new Map;function xn(t){jn(t instanceof Function,"Expected a class definition");let e=Om.get(t);return e?(jn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Om.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Xy.type="NONE";const Dm=Xy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(t,e,n){return`firebase:${t}:${e}:${n}`}class Xi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=tl(this.userKey,i.apiKey,s),this.fullPersistenceKey=tl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Yl(this.auth,{idToken:e}).catch(()=>{});return n?Xt._fromGetAccountInfoResponse(this.auth,n,e):null}return Xt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Xi(xn(Dm),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||xn(Dm);const o=tl(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){let p;if(typeof d=="string"){const f=await Yl(e,{idToken:d}).catch(()=>{});if(!f)break;p=await Xt._fromGetAccountInfoResponse(e,f,d)}else p=Xt._fromJSON(e,d);c!==s&&(a=p),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Xi(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Xi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(tw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Jy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(rw(e))return"Blackberry";if(iw(e))return"Webos";if(Zy(e))return"Safari";if((e.includes("chrome/")||ew(e))&&!e.includes("edge/"))return"Chrome";if(nw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Jy(t=ut()){return/firefox\//i.test(t)}function Zy(t=ut()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ew(t=ut()){return/crios\//i.test(t)}function tw(t=ut()){return/iemobile/i.test(t)}function nw(t=ut()){return/android/i.test(t)}function rw(t=ut()){return/blackberry/i.test(t)}function iw(t=ut()){return/webos/i.test(t)}function Ef(t=ut()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function kT(t=ut()){var e;return Ef(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ST(){return yC()&&document.documentMode===10}function sw(t=ut()){return Ef(t)||nw(t)||iw(t)||rw(t)||/windows phone/i.test(t)||tw(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ow(t,e=[]){let n;switch(t){case"Browser":n=Mm(ut());break;case"Worker":n=`${Mm(ut())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Cs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TT(t,e={}){return rn(t,"GET","/v2/passwordPolicy",Un(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT=6;class xT{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:NT,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lm(this),this.idTokenSubscription=new Lm(this),this.beforeStateQueue=new IT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=xn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Xi.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Yl(this,{idToken:e}),r=await Xt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(It(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ql(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(It(this.app))return Promise.reject(mn(this));const n=e?De(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return It(this.app)?Promise.reject(mn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return It(this.app)?Promise.reject(mn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(xn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await TT(this),n=new xT(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Qo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await CT(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&xn(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await Xi.create(this,[xn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ow(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(It(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&sT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function br(t){return De(t)}class Lm{constructor(e){this.auth=e,this.observer=null,this.addObserver=PC(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function RT(t){xc=t}function aw(t){return xc.loadJS(t)}function AT(){return xc.recaptchaEnterpriseScript}function bT(){return xc.gapiScript}function OT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class DT{constructor(){this.enterprise=new MT}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class MT{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const LT="recaptcha-enterprise",lw="NO_RECAPTCHA";class jT{constructor(e){this.type=LT,this.auth=br(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{mT(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new pT(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Am(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(lw)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new DT().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Am(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=AT();l.length!==0&&(l+=a),aw(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function jm(t,e,n,r=!1,i=!1){const s=new jT(t);let o;if(i)o=lw;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Dd(t,e,n,r,i){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await jm(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await jm(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FT(t,e){const n=Mh(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(si(s,e??{}))return i;nn(i,"already-initialized")}return n.initialize({options:e})}function zT(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(xn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function UT(t,e,n){const r=br(t);Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=cw(e),{host:o,port:a}=$T(e),l=a===null?"":`:${a}`,c={url:`${s}//${o}${l}/`},d=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){Q(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Q(si(c,r.config.emulator)&&si(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,ws(o)?(yv(`${s}//${o}${l}`),wv("Auth",!0)):BT()}function cw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function $T(t){const e=cw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Fm(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Fm(o)}}}function Fm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function BT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Nn("not implemented")}_getIdTokenResponse(e){return Nn("not implemented")}_linkToIdToken(e,n){return Nn("not implemented")}_getReauthenticationResolver(e){return Nn("not implemented")}}async function WT(t,e){return rn(t,"POST","/v1/accounts:update",e)}async function HT(t,e){return rn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VT(t,e){return sa(t,"POST","/v1/accounts:signInWithPassword",Un(t,e))}async function GT(t,e){return rn(t,"POST","/v1/accounts:sendOobCode",Un(t,e))}async function KT(t,e){return GT(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YT(t,e){return sa(t,"POST","/v1/accounts:signInWithEmailLink",Un(t,e))}async function qT(t,e){return sa(t,"POST","/v1/accounts:signInWithEmailLink",Un(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho extends Cf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ho(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ho(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Dd(e,n,"signInWithPassword",VT);case"emailLink":return YT(e,{email:this._email,oobCode:this._password});default:nn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Dd(e,r,"signUpPassword",HT);case"emailLink":return qT(e,{idToken:n,email:this._email,oobCode:this._password});default:nn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ji(t,e){return sa(t,"POST","/v1/accounts:signInWithIdp",Un(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT="http://localhost";class di extends Cf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new di(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):nn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=_f(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new di(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ji(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ji(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ji(e,n)}buildRequest(){const e={requestUri:QT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Es(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XT(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function JT(t){const e=Zs(eo(t)).link,n=e?Zs(eo(e)).deep_link_id:null,r=Zs(eo(t)).deep_link_id;return(r?Zs(eo(r)).link:null)||r||n||e||t}class kf{constructor(e){var n,r,i,s,o,a;const l=Zs(eo(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,p=XT((i=l.mode)!==null&&i!==void 0?i:null);Q(c&&d&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.lang)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=JT(e);try{return new kf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(){this.providerId=Ns.PROVIDER_ID}static credential(e,n){return Ho._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=kf.parseLink(n);return Q(r,"argument-error"),Ho._fromEmailAndCode(e,r.code,r.tenantId)}}Ns.PROVIDER_ID="password";Ns.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ns.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa extends uw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends oa{constructor(){super("facebook.com")}static credential(e){return di._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tr.credential(e.oauthAccessToken)}catch{return null}}}tr.FACEBOOK_SIGN_IN_METHOD="facebook.com";tr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends oa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return di._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return nr.credential(n,r)}catch{return null}}}nr.GOOGLE_SIGN_IN_METHOD="google.com";nr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends oa{constructor(){super("github.com")}static credential(e){return di._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rr.credential(e.oauthAccessToken)}catch{return null}}}rr.GITHUB_SIGN_IN_METHOD="github.com";rr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends oa{constructor(){super("twitter.com")}static credential(e,n){return di._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ir.credential(n,r)}catch{return null}}}ir.TWITTER_SIGN_IN_METHOD="twitter.com";ir.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dw(t,e){return sa(t,"POST","/v1/accounts:signUp",Un(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Xt._fromIdTokenResponse(e,r,i),o=zm(r);return new Fn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=zm(r);return new Fn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function zm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZT(t){var e;if(It(t.app))return Promise.reject(mn(t));const n=br(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Fn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await dw(n,{returnSecureToken:!0}),i=await Fn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql extends Ar{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ql.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ql(e,n,r,i)}}function hw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ql._fromErrorAndOperation(t,s,e,r):s})}async function eN(t,e,n=!1){const r=await ui(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Fn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tN(t,e,n=!1){const{auth:r}=t;if(It(r.app))return Promise.reject(mn(r));const i="reauthenticate";try{const s=await ui(t,hw(r,i,e,t),n);Q(s.idToken,r,"internal-error");const o=wf(s.idToken);Q(o,r,"internal-error");const{sub:a}=o;return Q(t.uid===a,r,"user-mismatch"),Fn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&nn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fw(t,e,n=!1){if(It(t.app))return Promise.reject(mn(t));const r="signIn",i=await hw(t,r,e),s=await Fn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function nN(t,e){return fw(br(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pw(t){const e=br(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function rN(t,e,n){if(It(t.app))return Promise.reject(mn(t));const r=br(t),o=await Dd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",dw).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&pw(t),l}),a=await Fn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function iN(t,e,n){return It(t.app)?Promise.reject(mn(t)):nN(De(t),Ns.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&pw(t),r})}async function Um(t,e){const n=De(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()},{email:s}=await KT(n.auth,i);s!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sN(t,e){return rn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oN(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=De(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ui(r,sN(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function aN(t,e){return lN(De(t),null,e)}async function lN(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};n&&(s.password=n);const o=await ui(t,WT(r,s));await t._updateTokensIfNecessary(o,!0)}function cN(t,e,n,r){return De(t).onIdTokenChanged(e,n,r)}function uN(t,e,n){return De(t).beforeAuthStateChanged(e,n)}function dN(t,e,n,r){return De(t).onAuthStateChanged(e,n,r)}function mw(t){return De(t).signOut()}const Xl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xl,"1"),this.storage.removeItem(Xl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hN=1e3,fN=10;class _w extends gw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=sw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);ST()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,fN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},hN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}_w.type="LOCAL";const pN=_w;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw extends gw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}vw.type="SESSION";const yw=vw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Pc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await mN(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Sf("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const f=p;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(){return window}function _N(t){gn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ww(){return typeof gn().WorkerGlobalScope<"u"&&typeof gn().importScripts=="function"}async function vN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function yN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function wN(){return ww()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew="firebaseLocalStorageDb",EN=1,Jl="firebaseLocalStorage",Cw="fbase_key";class aa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Rc(t,e){return t.transaction([Jl],e?"readwrite":"readonly").objectStore(Jl)}function CN(){const t=indexedDB.deleteDatabase(Ew);return new aa(t).toPromise()}function Md(){const t=indexedDB.open(Ew,EN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Jl,{keyPath:Cw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Jl)?e(r):(r.close(),await CN(),e(await Md()))})})}async function $m(t,e,n){const r=Rc(t,!0).put({[Cw]:e,value:n});return new aa(r).toPromise()}async function kN(t,e){const n=Rc(t,!1).get(e),r=await new aa(n).toPromise();return r===void 0?null:r.value}function Bm(t,e){const n=Rc(t,!0).delete(e);return new aa(n).toPromise()}const SN=800,IN=3;class kw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Md(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>IN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ww()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pc._getInstance(wN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await vN(),!this.activeServiceWorker)return;this.sender=new gN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||yN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Md();return await $m(e,Xl,"1"),await Bm(e,Xl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>$m(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>kN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Bm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Rc(i,!1).getAll();return new aa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),SN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}kw.type="LOCAL";const TN=kw;new ia(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NN(t,e){return e?xn(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If extends Cf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ji(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ji(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ji(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function xN(t){return fw(t.auth,new If(t),t.bypassAuthState)}function PN(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),tN(n,new If(t),t.bypassAuthState)}async function RN(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),eN(n,new If(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xN;case"linkViaPopup":case"linkViaRedirect":return RN;case"reauthViaPopup":case"reauthViaRedirect":return PN;default:nn(this.auth,"internal-error")}}resolve(e){jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AN=new ia(2e3,1e4);class $i extends Sw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,$i.currentPopupAction&&$i.currentPopupAction.cancel(),$i.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){jn(this.filter.length===1,"Popup operations only handle one event");const e=Sf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(pn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(pn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$i.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,AN.get())};e()}}$i.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bN="pendingRedirect",nl=new Map;class ON extends Sw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=nl.get(this.auth._key());if(!e){try{const r=await DN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}nl.set(this.auth._key(),e)}return this.bypassAuthState||nl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function DN(t,e){const n=jN(e),r=LN(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function MN(t,e){nl.set(t._key(),e)}function LN(t){return xn(t._redirectPersistence)}function jN(t){return tl(bN,t.config.apiKey,t.name)}async function FN(t,e,n=!1){if(It(t.app))return Promise.reject(mn(t));const r=br(t),i=NN(r,e),o=await new ON(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zN=10*60*1e3;class UN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$N(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Iw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(pn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=zN&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wm(e))}saveEventToCache(e){this.cachedEventUids.add(Wm(e)),this.lastProcessedEventTime=Date.now()}}function Wm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Iw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $N(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Iw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BN(t,e={}){return rn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,HN=/^https?/;async function VN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await BN(t);for(const n of e)try{if(GN(n))return}catch{}nn(t,"unauthorized-domain")}function GN(t){const e=Ad(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!HN.test(n))return!1;if(WN.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KN=new ia(3e4,6e4);function Hm(){const t=gn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function YN(t){return new Promise((e,n)=>{var r,i,s;function o(){Hm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Hm(),n(pn(t,"network-request-failed"))},timeout:KN.get()})}if(!((i=(r=gn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=gn().gapi)===null||s===void 0)&&s.load)o();else{const a=OT("iframefcb");return gn()[a]=()=>{gapi.load?o():n(pn(t,"network-request-failed"))},aw(`${bT()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw rl=null,e})}let rl=null;function qN(t){return rl=rl||YN(t),rl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QN=new ia(5e3,15e3),XN="__/auth/iframe",JN="emulator/auth/iframe",ZN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ex=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tx(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?yf(e,JN):`https://${t.config.authDomain}/${XN}`,r={apiKey:e.apiKey,appName:t.name,v:Cs},i=ex.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Es(r).slice(1)}`}async function nx(t){const e=await qN(t),n=gn().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:tx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ZN,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=pn(t,"network-request-failed"),a=gn().setTimeout(()=>{s(o)},QN.get());function l(){gn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ix=500,sx=600,ox="_blank",ax="http://localhost";class Vm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lx(t,e,n,r=ix,i=sx){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},rx),{width:r.toString(),height:i.toString(),top:s,left:o}),c=ut().toLowerCase();n&&(a=ew(c)?ox:n),Jy(c)&&(e=e||ax,l.scrollbars="yes");const d=Object.entries(l).reduce((f,[v,w])=>`${f}${v}=${w},`,"");if(kT(c)&&a!=="_self")return cx(e||"",a),new Vm(null);const p=window.open(e||"",a,d);Q(p,t,"popup-blocked");try{p.focus()}catch{}return new Vm(p)}function cx(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ux="__/auth/handler",dx="emulator/auth/handler",hx=encodeURIComponent("fac");async function Gm(t,e,n,r,i,s){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Cs,eventId:i};if(e instanceof uw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Rl(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof oa){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),c=l?`#${hx}=${encodeURIComponent(l)}`:"";return`${fx(t)}?${Es(a).slice(1)}${c}`}function fx({config:t}){return t.emulator?yf(t,dx):`https://${t.authDomain}/${ux}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vu="webStorageSupport";class px{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yw,this._completeRedirectFn=FN,this._overrideRedirectResult=MN}async _openPopup(e,n,r,i){var s;jn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Gm(e,n,r,Ad(),i);return lx(e,o,Sf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Gm(e,n,r,Ad(),i);return _N(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(jn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await nx(e),r=new UN(e);return n.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(vu,{type:vu},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[vu];o!==void 0&&n(!!o),nn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=VN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return sw()||Zy()||Ef()}}const mx=px;var Km="@firebase/auth",Ym="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _x(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function vx(t){ls(new oi("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ow(t)},c=new PT(r,i,s,l);return zT(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ls(new oi("auth-internal",e=>{const n=br(e.getProvider("auth").getImmediate());return(r=>new gx(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),vr(Km,Ym,_x(t)),vr(Km,Ym,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yx=5*60,wx=vv("authIdTokenMaxAge")||yx;let qm=null;const Ex=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>wx)return;const i=n==null?void 0:n.token;qm!==i&&(qm=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Cx(t=Tv()){const e=Mh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=FT(t,{popupRedirectResolver:mx,persistence:[TN,pN,yw]}),r=vv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Ex(s.toString());uN(n,o,()=>o(n.currentUser)),cN(n,a=>o(a))}}const i=gv("auth");return i&&UT(n,`http://${i}`),n}function kx(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}RT({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=pn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",kx().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});vx("Browser");const Sx={apiKey:"AIzaSyAJ4sGcHNhzcKSvGvqbYnqt9TtNj-owksM",authDomain:"puzzle-907d0.firebaseapp.com",databaseURL:"https://puzzle-907d0-default-rtdb.firebaseio.com/",projectId:"puzzle-907d0",storageBucket:"puzzle-907d0.firebasestorage.app",messagingSenderId:"443092750922",appId:"1:443092750922:web:f7a6520020788aead5ccb3"},Tw=Iv(Sx),K=Z1(Tw),Kt=Cx(Tw);function Tf(t){let e=t;return function(){e|=0,e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function Ix(t,e,n=500){return t>=e?{cols:25,rows:20}:{cols:20,rows:25}}function Nw(t,e,n){const r=Tf(n),i=Array.from({length:t},()=>Array.from({length:e-1},()=>r()>.5?1:-1)),s=Array.from({length:t-1},()=>Array.from({length:e},()=>r()>.5?1:-1));return{edgesV:i,edgesH:s}}function xw(t,e,n,r,i,s){return{top:t===0?0:-s[t-1][e],bottom:t===n-1?0:s[t][e],left:e===0?0:-i[t][e-1],right:e===r-1?0:i[t][e]}}function Ua(t,e,n,r,i,s){if(s===0){t.lineTo(r,i);return}const o=r-e,a=i-n,l=Math.hypot(o,a),c=o/l,d=a/l,p=-d,f=c,v=l*.22*s,w=k=>({x:e+c*l*k,y:n+d*l*k}),C=w(.35),W=w(.65),g=w(.5),m=g.x+p*v,_=g.y+f*v;t.lineTo(C.x,C.y),t.bezierCurveTo(C.x+p*v*.7,C.y+f*v*.7,m-c*l*.18,_-d*l*.18,m,_),t.bezierCurveTo(m+c*l*.18,_+d*l*.18,W.x+p*v*.7,W.y+f*v*.7,W.x,W.y),t.lineTo(r,i)}function Qm(t,e,n,r,i){t.beginPath(),t.moveTo(r,r),Ua(t,r,r,r+e,r,i.top),Ua(t,r+e,r,r+e,r+n,i.right),Ua(t,r+e,r+n,r,r+n,i.bottom),Ua(t,r,r+n,r,r,i.left),t.closePath()}function Tx(t,e,n,r,i,s,o,a,l){const c=a/r,d=Math.floor(l()*r),p=Math.floor((t*r+e)/r),f=(l()-.5)*(c-i)*.8,v=(l()-.5)*(s*.5);return{x:d*c+(c-i)/2+f,y:o+p*s*1.15+v}}function Nx(t,e){const n=Array.from({length:t},(i,s)=>s),r=Tf(e^2654435769);for(let i=n.length-1;i>0;i--){const s=Math.floor(r()*(i+1));[n[i],n[s]]=[n[s],n[i]]}return n}function Xm(){const t="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let e="";for(let n=0;n<5;n++)e+=t[Math.floor(Math.random()*t.length)];return e}const yu=[{id:"relaxed",name:"Rahat",pieces:50,rotate:!1,hints:5,preview:!0,desc:"Kısa ve keyifli"},{id:"classic",name:"Klasik",pieces:100,rotate:!1,hints:3,preview:!0,desc:"Dengeli deneyim"},{id:"master",name:"Usta",pieces:100,rotate:!0,hints:2,preview:!0,desc:"Parçalar dönebilir"},{id:"chaos",name:"Çılgın",pieces:200,rotate:!0,hints:1,preview:!0,desc:"Daha çok parça"},{id:"expert",name:"Uzman",pieces:200,rotate:!0,hints:0,preview:!1,desc:"Fotoğraf önizlemesi yok"}],Jm=[{id:"first",name:"İlk Adım",desc:"İlk puzzle'ını tamamla"},{id:"team",name:"İkili Ekip",desc:"Birlikte puzzle tamamla"},{id:"hundred",name:"100 Parça",desc:"100 parçalık puzzle tamamla"},{id:"twohundred",name:"200 Parça",desc:"200 parçalık puzzle tamamla"},{id:"rotator",name:"Döndürme Ustası",desc:"Döndürmeli puzzle tamamla"},{id:"perfect",name:"Kusursuz",desc:"Hiç ipucu kullanmadan bitir"}];function xx(t){const e=Math.max(0,Number(t)||0);return`${String(Math.floor(e/60)).padStart(2,"0")}:${String(Math.floor(e%60)).padStart(2,"0")}`}function En(t,e=0){const n=Number(t);return Number.isFinite(n)?n:e}function Ys(t){return Math.max(1,Math.floor(Math.max(0,En(t))/500)+1)}function Px(t){return new Promise((e,n)=>{const r=new Image,i=new FileReader;i.onload=s=>{r.src=s.target.result},i.onerror=n,r.onload=()=>{const s=Math.min(1,1e3/r.width),o=Math.max(1,Math.round(r.width*s)),a=Math.max(1,Math.round(r.height*s)),l=document.createElement("canvas");l.width=o,l.height=a;const c=l.getContext("2d");if(!c)return n(new Error("Canvas oluşturulamadı."));c.drawImage(r,0,0,o,a),e({dataUrl:l.toDataURL("image/jpeg",.65),width:o,height:a})},r.onerror=()=>n(new Error("Fotoğraf yüklenemedi.")),i.readAsDataURL(t)})}function Rx({onEnterRoom:t,user:e,playerName:n}){var F;const[r,i]=S.useState("choose"),[s,o]=S.useState(""),[a,l]=S.useState(""),[c,d]=S.useState(null),[p,f]=S.useState(!1),[v,w]=S.useState(""),[C,W]=S.useState(null),[g,m]=S.useState(!0),[_,k]=S.useState("classic"),[j,z]=S.useState(!1),[I,V]=S.useState(null),[le,J]=S.useState(""),[Ue,it]=S.useState([]),[be,wt]=S.useState([]),[Or,Bt]=S.useState(!1),[sn,x]=S.useState(""),[q,Z]=S.useState([]),[ce,xe]=S.useState({}),[ue,Ye]=S.useState(null),[Et,qe]=S.useState(null),[yn,gi]=S.useState([]),[Dr,_i]=S.useState(""),[vi,la]=S.useState([]),[Mr,Ac]=S.useState([]),[ca,$n]=S.useState({}),[Lr,$e]=S.useState({}),[on,At]=S.useState([]),[ua,Ct]=S.useState(!1),xs=on.filter(h=>{const y=Number(localStorage.getItem(`notificationRead:${h.id}`)||0);return Number(h.at||0)>y}).length;function da(h=on){const y=Date.now();h.forEach(N=>localStorage.setItem(`notificationRead:${N.id}`,String(y)))}const[Me,Bn]=S.useState(""),[bc,Wn]=S.useState(!1),[jr,yi]=S.useState("profile"),[wi,Hn]=S.useState(""),[Fr,Ps]=S.useState(""),[Ei,Rs]=S.useState(""),[Ci,ha]=S.useState(!0),[ki,fa]=S.useState(!0),[zr,pa]=S.useState(!0),[As,Ur]=S.useState([]),[Vn,Si]=S.useState(!1),[Ii,wn]=S.useState(null),ft=yu.find(h=>h.id===_)||yu[1];S.useEffect(()=>{let h=!1;async function y(){if(!(e!=null&&e.uid)){W(null),m(!1);return}try{const A=(await st(G(K,`users/${e.uid}`))).val()||{},L=A.blocked||{};h||$e(L);const b=Object.keys(L),Y=[];for(const H of b.slice(0,50)){const U=await st(G(K,`publicProfiles/${H}`));U.exists()&&Y.push({uid:H,...U.val()})}h||Ur(Y);const B={...A,profileVisible:A.profileVisible!==!1,allowFriendRequests:A.allowFriendRequests!==!1,allowMessages:A.allowMessages!==!1,avatar:typeof A.avatar=="string"?A.avatar:"",name:typeof A.name=="string"&&A.name.trim()?A.name.trim().slice(0,40):n||"Oyuncu",email:typeof A.email=="string"?A.email:e.email||"",puzzlesRemaining:A.puzzlesRemaining===void 0?3:Math.max(0,Math.floor(En(A.puzzlesRemaining,0))),xp:Math.max(0,En(A.xp,0)),completedPuzzles:Math.max(0,Math.floor(En(A.completedPuzzles,0))),togetherPuzzles:Math.max(0,Math.floor(En(A.togetherPuzzles,0))),totalTime:Math.max(0,En(A.totalTime,0)),bestTime:Math.max(0,En(A.bestTime,0)),badges:Array.isArray(A.badges)?A.badges:[],history:Array.isArray(A.history)?A.history:[]};if(await tt(G(K,`users/${e.uid}`),B),!e.isAnonymous){await tt(G(K,`publicProfiles/${e.uid}`),{name:B.name,email:B.email,avatar:B.avatar||"",xp:B.xp,completedPuzzles:B.completedPuzzles,badges:B.badges,profileVisible:B.profileVisible!==!1,allowFriendRequests:B.allowFriendRequests!==!1,allowMessages:B.allowMessages!==!1});const U=(await st(G(K,`users/${e.uid}/friends`))).val()||{},te=Object.keys(U),me=[];for(const Ee of te.slice(0,30)){const kt=await st(G(K,`publicProfiles/${Ee}`));kt.exists()&&me.push({uid:Ee,...kt.val()})}h||wt(me)}h||(W(B.puzzlesRemaining),V(B),Bn(B.avatar||""),Hn(B.name||""),ha(B.profileVisible!==!1),fa(B.allowFriendRequests!==!1),pa(B.allowMessages!==!1))}catch(N){console.error("Hesap bilgisi yüklenemedi:",N),h||W(3)}finally{h||m(!1)}}return y(),()=>{h=!0}},[e==null?void 0:e.uid,e==null?void 0:e.email,n]);async function ma(h){if(!(!h||!(e!=null&&e.uid)||e.isAnonymous))try{const y=await new Promise((N,A)=>{const L=new Image,b=new FileReader;b.onload=Y=>{L.src=Y.target.result},b.onerror=A,L.onload=()=>{const B=document.createElement("canvas");B.width=180,B.height=180;const H=B.getContext("2d");if(!H)return A(new Error("Canvas oluşturulamadı."));const U=Math.max(180/L.width,180/L.height),te=L.width*U,me=L.height*U;H.drawImage(L,(180-te)/2,(180-me)/2,te,me),N(B.toDataURL("image/jpeg",.72))},L.onerror=()=>A(new Error("Profil fotoğrafı okunamadı.")),b.readAsDataURL(h)});await tt(G(K),{[`users/${e.uid}/avatar`]:y,[`publicProfiles/${e.uid}/avatar`]:y}),Bn(y),V(N=>({...N||{},avatar:y})),x("Profil fotoğrafın güncellendi.")}catch(y){console.error(y),x("Profil fotoğrafı güncellenemedi.")}}async function ga(){const h=le.trim().toLowerCase();if(!h||e!=null&&e.isAnonymous){it([]);return}Bt(!0),x("");try{const N=(await st(G(K,"publicProfiles"))).val()||{},A=Object.entries(N).filter(([L,b])=>L!==e.uid&&(b==null?void 0:b.profileVisible)!==!1&&String((b==null?void 0:b.name)||"").toLowerCase().includes(h)).slice(0,8).map(([L,b])=>({uid:L,...b}));it(A),A.length||x("Bu isimle oyuncu bulunamadı.")}catch(y){console.error(y),x("Oyuncular aranamadı.")}finally{Bt(!1)}}async function Gn(h){if(!(!e||e.isAnonymous||!(h!=null&&h.uid))){Bt(!0),x("");try{await tt(G(K),{[`friendRequests/${h.uid}/${e.uid}`]:{name:(I==null?void 0:I.name)||n||"Oyuncu",avatar:Me||(I==null?void 0:I.avatar)||"",at:Date.now()},[`users/${e.uid}/sentFriendRequests/${h.uid}`]:!0}),x(`${h.name||"Oyuncu"} için arkadaşlık isteği gönderildi.`)}catch(y){console.error(y),x("İstek gönderilemedi.")}finally{Bt(!1)}}}S.useEffect(()=>{if(!(e!=null&&e.uid)||e.isAnonymous){At([]);return}const h=[],y=G(K,`friendRequests/${e.uid}`),N=Ot(y,b=>{const Y=b.val()||{},B=Object.entries(Y).map(([H,U])=>({id:`friend:${H}:${Number((U==null?void 0:U.at)||0)}`,type:"friend",uid:H,name:(U==null?void 0:U.name)||"Oyuncu",avatar:(U==null?void 0:U.avatar)||"",at:Number((U==null?void 0:U.at)||0)}));At(H=>[...H.filter(U=>U.type!=="friend"),...B].sort((U,te)=>te.at-U.at))});h.push(N);const A=G(K,`roomInvites/${e.uid}`),L=Ot(A,b=>{const Y=b.val()||{},B=Object.entries(Y).map(([H,U])=>({id:`invite:${H}:${Number((U==null?void 0:U.at)||0)}`,type:"invite",code:H,fromUid:U==null?void 0:U.fromUid,name:(U==null?void 0:U.fromName)||"Oyuncu",at:Number((U==null?void 0:U.at)||0)}));At(H=>[...H.filter(U=>U.type!=="invite"),...B].sort((U,te)=>te.at-U.at))});return h.push(L),()=>h.forEach(b=>b==null?void 0:b())},[e==null?void 0:e.uid,e==null?void 0:e.isAnonymous]),S.useEffect(()=>{if(!(e!=null&&e.uid)||e.isAnonymous){Z([]),xe({}),wt([]);return}const h=G(K,`friendRequests/${e.uid}`),y=Ot(h,Y=>{const B=Y.val()||{};Z(Object.entries(B).map(([H,U])=>({uid:H,...U||{}})))}),N=G(K,`users/${e.uid}/sentFriendRequests`),A=Ot(N,Y=>xe(Y.val()||{})),L=G(K,`users/${e.uid}/friends`),b=Ot(L,async Y=>{const B=Y.val()||{},H=Object.keys(B).filter(te=>B[te]),U=await Promise.all(H.slice(0,50).map(async te=>{try{const me=await st(G(K,`publicProfiles/${te}`));if(!me.exists())return{uid:te,name:"Oyuncu",avatar:""};const Ee=me.val()||{};return{uid:te,...Ee,name:Ee.name||"Oyuncu",avatar:Ee.avatar||""}}catch{return{uid:te,name:"Oyuncu",avatar:""}}}));wt(U)});return()=>{y==null||y(),A==null||A(),b==null||b()}},[e==null?void 0:e.uid,e==null?void 0:e.isAnonymous]),S.useEffect(()=>{if(!(e!=null&&e.uid)||e.isAnonymous)return;const h=G(K,`roomInvites/${e.uid}`),y=Ot(h,N=>{const A=N.val()||{};Ac(Object.entries(A).map(([L,b])=>({code:L,...b||{}})))});return()=>y==null?void 0:y()},[e==null?void 0:e.uid,e==null?void 0:e.isAnonymous]),S.useEffect(()=>{if(!(e!=null&&e.uid)||e.isAnonymous||!be.length){$n({});return}const h=[];return be.forEach(y=>{const N=[e.uid,y.uid].sort(),A=G(K,`chats/${N[0]}/${N[1]}/messages`),L=Ot(A,b=>{const Y=b.val()||{},B=Object.values(Y).sort((te,me)=>Number(te.at||0)-Number(me.at||0)),H=B[B.length-1],U=Number(localStorage.getItem(`chatRead:${y.uid}`)||0);$n(te=>({...te,[y.uid]:!!(H&&H.senderId!==e.uid&&Number(H.at||0)>U)}))});h.push(L)}),()=>h.forEach(y=>y==null?void 0:y())},[e==null?void 0:e.uid,e==null?void 0:e.isAnonymous,be]);async function bs(h){if(!(!(e!=null&&e.uid)||e.isAnonymous||!(h!=null&&h.uid)))try{await tt(G(K),{[`users/${e.uid}/friends/${h.uid}`]:!0,[`users/${h.uid}/friends/${e.uid}`]:!0,[`friendRequests/${e.uid}/${h.uid}`]:null,[`users/${h.uid}/sentFriendRequests/${e.uid}`]:null}),x(`${h.name||"Oyuncu"} artık arkadaşın.`);const y=await st(G(K,`publicProfiles/${h.uid}`)),N=y.exists()?y.val():{},A={uid:h.uid,name:N.name||h.name||"Oyuncu",avatar:N.avatar||h.avatar||"",...N};wt(L=>L.some(b=>b.uid===h.uid)?L:[...L,A])}catch(y){console.error(y),x("Arkadaşlık isteği kabul edilemedi.")}}async function Os(h){if(!(!(e!=null&&e.uid)||e.isAnonymous||!(h!=null&&h.uid)))try{await Ks(G(K,`friendRequests/${e.uid}/${h.uid}`)),x("İstek kaldırıldı.")}catch(y){console.error(y),x("İstek kaldırılamadı.")}}async function de(h){if(qe(h),h!=null&&h.uid&&(localStorage.setItem(`chatRead:${h.uid}`,String(Date.now())),$n(A=>({...A,[h.uid]:!1}))),_i(""),!(e!=null&&e.uid)||!(h!=null&&h.uid))return;const y=[e.uid,h.uid].sort(),N=G(K,`chats/${y[0]}/${y[1]}/messages`);Ot(N,A=>{const L=A.val()||{};gi(Object.entries(L).map(([b,Y])=>({id:b,...Y||{}})).sort((b,Y)=>Number(b.at||0)-Number(Y.at||0)).slice(-80))})}async function Le(){const h=Dr.trim();if(!h||!(e!=null&&e.uid)||e.isAnonymous||!(Et!=null&&Et.uid))return;const y=[e.uid,Et.uid].sort(),N=G(K,`chats/${y[0]}/${y[1]}/messages`);await Er(W1(N),{senderId:e.uid,senderName:(I==null?void 0:I.name)||n||"Oyuncu",text:h.slice(0,500),at:Date.now()}),_i("")}async function Kn(h){if(h!=null&&h.uid)try{const y=await st(G(K,`publicProfiles/${h.uid}`));y.exists()?Ye({uid:h.uid,...y.val()}):Ye(h)}catch{Ye(h)}}async function _a(h){if(!(!(e!=null&&e.uid)||e.isAnonymous||!(h!=null&&h.uid))&&window.confirm(`${h.name||"Bu oyuncu"} arkadaşlıktan çıkarılsın mı?`))try{await tt(G(K),{[`users/${e.uid}/friends/${h.uid}`]:null,[`users/${h.uid}/friends/${e.uid}`]:null,[`chats/${[e.uid,h.uid].sort()[0]}/${[e.uid,h.uid].sort()[1]}/messages`]:null}),wt(y=>y.filter(N=>N.uid!==h.uid)),qe(null),x("Arkadaş kaldırıldı.")}catch(y){console.error(y),x("Arkadaş kaldırılamadı.")}}async function va(h){if(!(!(e!=null&&e.uid)||e.isAnonymous||!(h!=null&&h.uid))&&window.confirm(`${h.name||"Bu oyuncu"} engellensin mi?`))try{await tt(G(K),{[`users/${e.uid}/blocked/${h.uid}`]:!0,[`users/${e.uid}/friends/${h.uid}`]:null,[`users/${h.uid}/friends/${e.uid}`]:null,[`friendRequests/${e.uid}/${h.uid}`]:null,[`friendRequests/${h.uid}/${e.uid}`]:null}),$e(y=>({...y,[h.uid]:!0})),wt(y=>y.filter(N=>N.uid!==h.uid)),Ye(null),qe(null),x("Oyuncu engellendi.")}catch(y){console.error(y),x("Oyuncu engellenemedi.")}}async function ya(h){if(!(!(e!=null&&e.uid)||e.isAnonymous||!(h!=null&&h.uid)))try{await Ks(G(K,`users/${e.uid}/blocked/${h.uid}`)),$e(y=>{const N={...y};return delete N[h.uid],N}),Ur(y=>y.filter(N=>N.uid!==h.uid)),x(`${h.name||"Oyuncu"} için engel kaldırıldı.`)}catch(y){console.error(y),x("Engel kaldırılamadı.")}}async function Ds(){if(!(e!=null&&e.uid)||e.isAnonymous)return;const h=wi.trim().slice(0,40);if(!h){x("Ad boş bırakılamaz.");return}Si(!0);try{await tt(G(K),{[`users/${e.uid}/name`]:h,[`users/${e.uid}/profileVisible`]:Ci,[`users/${e.uid}/allowFriendRequests`]:ki,[`users/${e.uid}/allowMessages`]:zr,[`publicProfiles/${e.uid}/name`]:h,[`publicProfiles/${e.uid}/avatar`]:Me||"",[`publicProfiles/${e.uid}/profileVisible`]:Ci,[`publicProfiles/${e.uid}/allowFriendRequests`]:ki,[`publicProfiles/${e.uid}/allowMessages`]:zr}),V(y=>({...y||{},name:h,profileVisible:Ci,allowFriendRequests:ki,allowMessages:zr})),x("Profil ayarların kaydedildi."),Wn(!1)}catch(y){console.error(y),x("Profil ayarları kaydedilemedi.")}finally{Si(!1)}}async function E(){if(!(!(e!=null&&e.uid)||e.isAnonymous)){if(Fr.length<6){x("Yeni şifre en az 6 karakter olmalı.");return}if(Fr!==Ei){x("Şifreler eşleşmiyor.");return}Si(!0);try{await aN(e,Fr),Ps(""),Rs(""),x("Şifren başarıyla değiştirildi.")}catch(h){console.error(h),x((h==null?void 0:h.code)==="auth/requires-recent-login"?"Güvenlik için yeniden giriş yapman gerekiyor.":(h==null?void 0:h.message)||"Şifre değiştirilemedi.")}finally{Si(!1)}}}async function T(h){if(!(!(h!=null&&h.roomCode)||!(e!=null&&e.uid)))try{if(!(await st(G(K,`rooms/${h.roomCode}`))).exists()){x("Bu puzzle odası artık mevcut değil."),await Ks(G(K,`roomInvites/${e.uid}/${h.roomCode}`));return}await Ks(G(K,`roomInvites/${e.uid}/${h.roomCode}`)),t(h.roomCode,(I==null?void 0:I.name)||n||"Oyuncu",!0)}catch(y){console.error(y),x("Puzzle daveti açılamadı.")}}async function M(h){!(e!=null&&e.uid)||!(h!=null&&h.roomCode)||await Ks(G(K,`roomInvites/${e.uid}/${h.roomCode}`))}async function R(){if(e!=null&&e.isAnonymous)return w("Misafir oyuncular puzzle oluşturamaz. Bir hesapla devam et.");if(!c)return w("Önce bir fotoğraf seç.");if(C!==null&&C<=0)return w("Puzzle hakkın kalmadı.");f(!0),w("");try{const{dataUrl:h,width:y,height:N}=await Px(c),{cols:A,rows:L}=Ix(y,N,ft.id),b=ft.pieces===200?1e3:900,Y=Math.max(360,Math.round(N/y*b)),B=b/A,H=Y/L;let U=Xm();for(let Wt=0;Wt<8&&(await st(G(K,`rooms/${U}`))).exists();Wt++)U=Xm();const te=Math.floor(Math.random()*4294967295),me=Tf(te+1),Ee=Nw(L,A,te),kt=Nx(L*A,te),$r=Y+70,an={};for(let Wt=0;Wt<L;Wt++)for(let Yn=0;Yn<A;Yn++){const Pw=`${Wt}_${Yn}`,Nf=Tx(Wt,Yn,L,A,B,H,$r,b,me,kt);an[Pw]={edges:xw(Wt,Yn,L,A,Ee.edgesV,Ee.edgesH),x:Math.round(Nf.x),y:Math.round(Nf.y),placed:!1,placedBy:null,movedBy:null,movedAt:0,rotation:ft.rotate?[0,90,180,270][Math.floor(me()*4)]:0}}await Er(G(K,`rooms/${U}`),{ownerUid:e.uid,image:h,imgWidth:y,imgHeight:N,rows:L,cols:A,seed:te,boardW:b,boardH:Y,edges:Ee,difficulty:ft.id,difficultyName:ft.name,totalPieces:ft.pieces,rotatePieces:ft.rotate,hintsAllowed:ft.hints,previewAllowed:ft.preview,createdAt:Date.now(),pieces:an,players:{}});const bt=Math.max(0,(Number(C)||3)-1);if(await Er(G(K,`users/${e.uid}/puzzlesRemaining`),bt),W(bt),window.__lastCreatedRoomCode=U,vi.length){const Wt={};vi.forEach(Yn=>{Wt[`roomInvites/${Yn}/${U}`]={roomCode:U,fromUid:e.uid,fromName:(I==null?void 0:I.name)||s.trim()||n||"Oyuncu",at:Date.now(),status:"pending"}}),await tt(G(K),Wt)}t(U,s.trim()||n||"Oyuncu")}catch(h){console.error(h),w((h==null?void 0:h.code)==="PERMISSION_DENIED"?"Firebase erişim izni vermedi.":(h==null?void 0:h.message)||"Bir şeyler ters gitti.")}finally{f(!1)}}async function D(){const h=a.trim().toUpperCase();if(!h)return w("Oda kodunu gir.");f(!0),w("");try{if(!(await st(G(K,`rooms/${h}`))).exists())return w("Böyle bir oda bulunamadı.");t(h,s.trim()||n||"Oyuncu",!0)}catch(y){console.error(y),w((y==null?void 0:y.message)||"Odaya bağlanılamadı.")}finally{f(!1)}}return u.jsxs("main",{className:"home-shell",children:[u.jsxs("div",{className:"home-decoration","aria-hidden":"true",children:[u.jsx("span",{}),u.jsx("span",{}),u.jsx("span",{}),u.jsx("span",{})]}),u.jsxs("section",{className:"home-card premium-card",children:[u.jsxs("div",{className:"brand-mark","aria-hidden":"true",children:[u.jsx("i",{}),u.jsx("i",{}),u.jsx("i",{}),u.jsx("i",{})]}),u.jsx("div",{className:"eyebrow",children:"BİRLİKTE TAMAMLA"}),u.jsxs("h1",{children:["Bir fotoğrafı",u.jsx("br",{}),u.jsx("em",{children:"anıya"})," dönüştür."]}),u.jsx("p",{className:"subtitle",children:"Fotoğrafını seç, kendi puzzle'ını oluştur ve başka biriyle aynı anda çöz."}),u.jsxs("div",{className:"top-nav",children:[u.jsxs("div",{className:"top-brand-status",children:[u.jsx("span",{className:"online-pulse"}),u.jsx("span",{children:g?"Hesap yükleniyor...":`${C??0} puzzle hakkı`})]}),u.jsxs("div",{className:"top-user-actions",children:[u.jsx("span",{className:"top-user-name",children:(I==null?void 0:I.name)||n||"Oyuncu"}),u.jsx("button",{className:"icon-profile-button",title:"Profil",onClick:()=>{w(""),z(!0)},children:Me?u.jsx("img",{src:Me,alt:""}):u.jsx("span",{children:(n||"O").slice(0,1).toUpperCase()})}),u.jsxs("button",{className:"icon-notification-button",title:"Bildirimler",onClick:()=>{Ct(h=>{const y=!h;return y&&da(),y})},children:[u.jsx("span",{className:"bell-icon"}),xs>0&&u.jsx("b",{children:Math.min(99,xs)})]}),u.jsx("button",{className:"text-button top-logout",onClick:()=>mw(Kt),children:"Çıkış"})]})]}),r==="choose"&&!(e!=null&&e.isAnonymous)&&I&&u.jsxs("div",{className:"home-dashboard",children:[u.jsxs("div",{className:"home-dashboard-head",children:[u.jsxs("div",{children:[u.jsx("span",{className:"panel-kicker",children:"HESABIN"}),u.jsx("strong",{children:I.name||"Oyuncu"}),u.jsx("span",{children:"İlerlemen ve oyun istatistiklerin"})]}),u.jsx("button",{className:"home-profile-link",onClick:()=>z(!0),children:"Profil"})]}),u.jsxs("div",{className:"home-stat-strip",children:[u.jsxs("div",{children:[u.jsx("span",{children:"Seviye"}),u.jsx("b",{children:Ys(I.xp)})]}),u.jsxs("div",{children:[u.jsx("span",{children:"XP"}),u.jsx("b",{children:En(I.xp)})]}),u.jsxs("div",{children:[u.jsx("span",{children:"Tamamlanan"}),u.jsx("b",{children:En(I.completedPuzzles)})]}),u.jsxs("div",{children:[u.jsx("span",{children:"Arkadaş"}),u.jsx("b",{children:be.length})]})]})]}),r==="choose"&&u.jsxs("div",{className:"choice-grid",children:[u.jsxs("button",{className:"big-choice blue",onClick:()=>{w(""),i("create")},children:[u.jsx("span",{children:"Yeni puzzle"}),u.jsx("small",{children:"Fotoğrafından bir oda oluştur"})]}),u.jsxs("button",{className:"big-choice pink",onClick:()=>{w(""),i("join")},children:[u.jsx("span",{children:"Odaya katıl"}),u.jsx("small",{children:"Bir arkadaşının kodunu kullan"})]})]}),r==="create"&&u.jsxs("div",{className:"create-flow",children:[u.jsxs("div",{className:"section-title",children:[u.jsx("span",{children:"01"})," Fotoğrafını seç"]}),u.jsxs("label",{className:"upload-zone",children:[u.jsx("input",{type:"file",accept:"image/*",disabled:p,onChange:h=>{var y;d(((y=h.target.files)==null?void 0:y[0])||null),w("")}}),u.jsxs("div",{className:"upload-art",children:[u.jsx("i",{}),u.jsx("i",{}),u.jsx("i",{})]}),u.jsx("strong",{children:c?c.name:"Fotoğrafı buraya bırak"}),u.jsx("small",{children:c?"Fotoğraf hazır":"veya seçmek için tıkla"})]}),u.jsxs("div",{className:"section-title",children:[u.jsx("span",{children:"02"})," Zorluk seç"]}),u.jsx("div",{className:"difficulty-grid",children:yu.map(h=>u.jsxs("button",{className:`difficulty ${_===h.id?"active":""}`,onClick:()=>k(h.id),children:[u.jsx("b",{children:h.name}),u.jsxs("small",{children:[h.pieces," parça · ",h.rotate?"döndürme açık":"sabit"]}),u.jsx("em",{children:h.desc})]},h.id))}),u.jsxs("div",{className:"difficulty-info",children:[u.jsx("strong",{children:ft.name}),u.jsxs("span",{children:[ft.hints," yardım hakkı · ",ft.preview?"fotoğraf önizlemesi açık":"önizleme kapalı"]})]}),u.jsxs("label",{className:"field",children:[u.jsx("span",{children:"Adın"}),u.jsx("input",{value:s,onChange:h=>o(h.target.value),placeholder:"Oyuncu",disabled:p})]}),u.jsxs("label",{className:"field",children:[u.jsx("span",{children:"Arkadaşlarını doğrudan davet et"}),u.jsx("div",{className:"friend-invite-picker",children:be.length?be.map(h=>u.jsxs("label",{className:`friend-invite-chip ${vi.includes(h.uid)?"selected":""}`,children:[u.jsx("input",{type:"checkbox",checked:vi.includes(h.uid),onChange:y=>la(N=>y.target.checked?[...N,h.uid]:N.filter(A=>A!==h.uid))}),u.jsx("span",{children:h.name})]},h.uid)):u.jsx("small",{children:"Henüz arkadaşın yok. Puzzle'ı oluşturduktan sonra da davet linkini kullanabilirsin."})})]}),v&&u.jsx("div",{className:"error",children:v}),u.jsxs("div",{className:"row-buttons",children:[u.jsx("button",{className:"btn ghost",onClick:()=>i("choose"),disabled:p,children:"Geri"}),u.jsx("button",{className:"btn primary",disabled:p||g||C===0,onClick:R,children:p?"Hazırlanıyor...":"Puzzle'ı oluştur"})]})]}),r==="join"&&u.jsxs("div",{className:"create-flow",children:[u.jsxs("div",{className:"section-title",children:[u.jsx("span",{children:"01"})," Oda kodunu gir"]}),u.jsxs("label",{className:"field",children:[u.jsx("span",{children:"Oda kodu"}),u.jsx("input",{value:a,onChange:h=>l(h.target.value.toUpperCase()),placeholder:"ABC123",maxLength:8,disabled:p})]}),u.jsxs("label",{className:"field",children:[u.jsx("span",{children:"Adın"}),u.jsx("input",{value:s,onChange:h=>o(h.target.value),placeholder:"Oyuncu",disabled:p})]}),v&&u.jsx("div",{className:"error",children:v}),u.jsxs("div",{className:"row-buttons",children:[u.jsx("button",{className:"btn ghost",onClick:()=>i("choose"),disabled:p,children:"Geri"}),u.jsx("button",{className:"btn primary",disabled:p,onClick:D,children:p?"Bağlanıyor...":"Odaya katıl"})]})]})]}),ua&&on.length>0&&u.jsx("div",{className:"notification-modal-backdrop",onClick:()=>Ct(!1),children:u.jsxs("section",{className:"notification-modal",onClick:h=>h.stopPropagation(),children:[u.jsxs("div",{className:"notification-modal-head",children:[u.jsxs("div",{children:[u.jsx("span",{className:"panel-kicker",children:"BİLDİRİMLER"}),u.jsx("h3",{children:"Bekleyenler"})]}),u.jsx("button",{className:"drawer-close",onClick:()=>Ct(!1),children:"×"})]}),u.jsx("div",{className:"notification-list",children:on.map(h=>u.jsxs("div",{className:"notification-card",children:[u.jsx("div",{className:`notification-symbol ${h.type}`,children:h.type==="friend"&&h.avatar?u.jsx("img",{src:h.avatar,alt:""}):h.type==="friend"?"＋":"◆"}),u.jsxs("div",{className:"notification-copy",children:[u.jsx("strong",{children:h.type==="friend"?`${h.name} arkadaşlık isteği gönderdi`:`${h.name} seni puzzle'a davet etti`}),u.jsx("span",{children:h.type==="friend"?"Profiline bakabilir veya isteği kabul edebilirsin.":"Ortak puzzle'a katılmak için seç."})]}),h.type==="friend"?u.jsxs("div",{className:"notification-actions",children:[u.jsx("button",{className:"btn primary tiny",onClick:()=>{const y=q.find(N=>N.uid===h.uid);y&&bs(y),Ct(!1)},children:"Kabul"}),u.jsx("button",{className:"btn ghost tiny",onClick:()=>{const y=q.find(N=>N.uid===h.uid);y&&Os(y)},children:"Reddet"}),u.jsx("button",{className:"btn ghost tiny",onClick:()=>{Kn({uid:h.uid,name:h.name}),Ct(!1)},children:"Profil"})]}):u.jsxs("div",{className:"notification-actions",children:[u.jsx("button",{className:"btn primary tiny",onClick:()=>{const y=Mr.find(N=>N.roomCode===h.code||N.code===h.code);y&&T(y),Ct(!1)},children:"Katıl"}),u.jsx("button",{className:"btn ghost tiny",onClick:()=>M({roomCode:h.code}),children:"Reddet"})]})]},h.id))})]})}),j&&I&&u.jsx("div",{className:"profile-drawer-backdrop",onClick:()=>z(!1),children:u.jsxs("aside",{className:"profile-drawer",onClick:h=>h.stopPropagation(),children:[u.jsxs("div",{className:"drawer-top",children:[u.jsxs("div",{children:[u.jsx("span",{className:"panel-kicker",children:"OYUNCU ALANI"}),u.jsx("h2",{children:"Profilin"}),u.jsx("p",{children:"İlerlemeni, rozetlerini ve arkadaşlarını burada yönet."})]}),u.jsx("button",{className:"drawer-close",onClick:()=>z(!1),children:"×"})]}),u.jsxs("div",{className:"drawer-identity",children:[u.jsxs("label",{className:"profile-avatar profile-avatar-large profile-avatar-edit",title:"Profil fotoğrafını değiştir",children:[Me?u.jsx("img",{src:Me,alt:""}):u.jsx("span",{children:(I.name||"O").slice(0,1).toUpperCase()}),u.jsx("input",{type:"file",accept:"image/*",onChange:h=>{var y;return ma((y=h.target.files)==null?void 0:y[0])}}),u.jsx("i",{children:"+"})]}),u.jsxs("div",{children:[u.jsx("strong",{children:I.name||"Oyuncu"}),u.jsxs("span",{children:["Seviye ",Ys(I.xp)," · ",I.xp||0," XP"]})]})]}),u.jsx("div",{className:"drawer-account-actions",children:u.jsx("button",{className:"btn primary",onClick:()=>{Hn(I.name||""),yi("profile"),Wn(!0)},children:"Profili düzenle"})}),u.jsxs("div",{className:"drawer-xp",children:[u.jsxs("div",{children:[u.jsx("span",{children:"Seviye ilerlemesi"}),u.jsxs("b",{children:[(I.xp||0)%500," / 500 XP"]})]}),u.jsx("div",{className:"xp-track",children:u.jsx("i",{style:{width:`${Math.min(100,(I.xp||0)%500/5)}%`}})})]}),u.jsxs("div",{className:"drawer-stat-grid",children:[u.jsxs("div",{children:[u.jsx("b",{children:I.completedPuzzles||0}),u.jsx("span",{children:"Puzzle"})]}),u.jsxs("div",{children:[u.jsx("b",{children:I.togetherPuzzles||0}),u.jsx("span",{children:"Birlikte"})]}),u.jsxs("div",{children:[u.jsx("b",{children:I.bestTime?xx(I.bestTime):"—"}),u.jsx("span",{children:"Rekor"})]})]}),u.jsxs("section",{className:"drawer-section",children:[u.jsxs("div",{className:"drawer-section-title",children:[u.jsx("span",{children:"ROZETLER"}),u.jsxs("b",{children:[((F=I.badges)==null?void 0:F.length)||0," / ",Jm.length]})]}),u.jsx("div",{className:"drawer-badges",children:Jm.map(h=>{var N;const y=(N=I.badges)==null?void 0:N.includes(h.id);return u.jsxs("div",{className:`drawer-badge ${y?"earned":"locked"}`,children:[u.jsx("i",{children:y?"✓":"·"}),u.jsx("span",{children:h.name})]},h.id)})})]}),!(e!=null&&e.isAnonymous)&&u.jsxs("section",{className:"drawer-section social-section",children:[u.jsxs("div",{className:"drawer-section-title",children:[u.jsx("span",{children:"SOSYAL"}),u.jsxs("b",{children:[be.length," arkadaş"]})]}),u.jsxs("div",{className:"social-search",children:[u.jsx("input",{value:le,onChange:h=>J(h.target.value),onKeyDown:h=>{h.key==="Enter"&&ga()},placeholder:"Oyuncu adı ara"}),u.jsx("button",{className:"btn primary",onClick:ga,disabled:Or,children:Or?"...":"Ara"})]}),sn&&u.jsx("div",{className:"social-message",children:sn}),Ue.length>0&&u.jsx("div",{className:"social-results",children:Ue.map(h=>u.jsxs("div",{className:"social-result",children:[u.jsx("div",{className:"mini-avatar avatar-click",onClick:()=>h.avatar&&wn({src:h.avatar,name:h.name||"Oyuncu"}),children:h.avatar?u.jsx("img",{src:h.avatar,alt:""}):(h.name||"O").slice(0,1).toUpperCase()}),u.jsxs("div",{children:[u.jsx("strong",{children:h.name||"Oyuncu"}),u.jsxs("span",{children:["Seviye ",Ys(h.xp)," · ",h.completedPuzzles||0," puzzle"]})]}),u.jsx("button",{className:"btn tiny ghost",onClick:()=>Kn(h),children:"Profil"}),u.jsx("button",{className:"btn tiny ghost",disabled:!!ce[h.uid],onClick:()=>Gn(h),children:ce[h.uid]?"Gönderildi":"Ekle"})]},h.uid))}),u.jsxs("div",{className:"friend-list",children:[be.map(h=>u.jsxs("div",{className:"friend-row",children:[u.jsx("div",{className:"mini-avatar",onClick:()=>Kn(h),children:h.avatar?u.jsx("img",{src:h.avatar,alt:""}):(h.name||"O").slice(0,1).toUpperCase()}),u.jsxs("div",{onClick:()=>Kn(h),className:"friend-main",children:[u.jsx("strong",{children:h.name}),u.jsxs("span",{children:[h.completedPuzzles||0," puzzle · Seviye ",Ys(h.xp)]})]}),u.jsxs("div",{className:"friend-row-actions",children:[u.jsxs("button",{className:"mini-action",onClick:()=>de(h),children:["Sohbet",ca[h.uid]?u.jsx("i",{className:"unread-dot"}):null]}),u.jsx("button",{className:"mini-action",onClick:()=>Kn(h),children:"Profil"}),u.jsx("button",{className:"mini-action danger",onClick:()=>_a(h),children:"Sil"})]})]},h.uid)),!be.length&&!Ue.length&&u.jsx("div",{className:"social-empty",children:"Arkadaşlarını isimleriyle bul. Eşleştiğinizde davet linkiyle aynı odada oynayabilirsiniz."})]}),As.length>0&&u.jsxs("div",{className:"request-box blocked-box",children:[u.jsxs("div",{className:"drawer-section-title",children:[u.jsx("span",{children:"ENGELLENENLER"}),u.jsx("b",{children:As.length})]}),As.map(h=>u.jsxs("div",{className:"social-result",children:[u.jsx("div",{className:"mini-avatar avatar-click",onClick:()=>h.avatar&&wn({src:h.avatar,name:h.name||"Oyuncu"}),children:h.avatar?u.jsx("img",{src:h.avatar,alt:""}):(h.name||"O").slice(0,1).toUpperCase()}),u.jsxs("div",{children:[u.jsx("strong",{children:h.name||"Oyuncu"}),u.jsx("span",{children:"Engellenmiş hesap"})]}),u.jsx("button",{className:"btn tiny ghost",onClick:()=>ya(h),children:"Engeli kaldır"})]},h.uid))]}),q.length>0&&u.jsxs("div",{className:"request-box",children:[u.jsxs("div",{className:"drawer-section-title",children:[u.jsx("span",{children:"GELEN İSTEKLER"}),u.jsx("b",{children:q.length})]}),q.map(h=>u.jsxs("div",{className:"social-result",children:[u.jsx("div",{className:"mini-avatar avatar-click",onClick:()=>h.avatar&&wn({src:h.avatar,name:h.name||"Oyuncu"}),children:h.avatar?u.jsx("img",{src:h.avatar,alt:""}):(h.name||"O").slice(0,1).toUpperCase()}),u.jsxs("div",{children:[u.jsx("strong",{children:h.name||"Oyuncu"}),u.jsx("span",{children:"Seninle arkadaş olmak istiyor"})]}),u.jsx("button",{className:"btn tiny primary",onClick:()=>bs(h),children:"Kabul"}),u.jsx("button",{className:"btn tiny ghost",onClick:()=>Os(h),children:"Sil"})]},h.uid))]}),Mr.length>0&&u.jsxs("div",{className:"request-box room-invites",children:[u.jsxs("div",{className:"drawer-section-title",children:[u.jsx("span",{children:"PUZZLE DAVETLERİ"}),u.jsx("b",{children:Mr.length})]}),Mr.map(h=>u.jsxs("div",{className:"social-result",children:[u.jsx("div",{className:"mini-avatar",children:(h.fromName||"O").slice(0,1).toUpperCase()}),u.jsxs("div",{children:[u.jsx("strong",{children:h.fromName||"Oyuncu"}),u.jsx("span",{children:"Seni ortak puzzle'a davet etti"})]}),u.jsx("button",{className:"btn tiny primary",onClick:()=>T(h),children:"Katıl"}),u.jsx("button",{className:"btn tiny ghost",onClick:()=>M(h),children:"Sil"})]},h.code))]}),Et&&u.jsxs("div",{className:"chat-panel",children:[u.jsxs("div",{className:"chat-head",children:[u.jsx("strong",{children:Et.name}),u.jsx("button",{className:"drawer-close",onClick:()=>qe(null),children:"×"})]}),u.jsx("div",{className:"chat-messages",children:yn.map(h=>u.jsxs("div",{className:`chat-bubble ${h.senderId===e.uid?"mine":""}`,children:[u.jsx("span",{children:h.text}),u.jsx("small",{children:new Date(h.at).toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"})})]},h.id))}),u.jsxs("div",{className:"chat-compose",children:[u.jsx("input",{value:Dr,onChange:h=>_i(h.target.value),onKeyDown:h=>{h.key==="Enter"&&Le()},placeholder:"Mesaj yaz..."}),u.jsx("button",{className:"btn primary",onClick:Le,children:"Gönder"})]})]}),ue&&u.jsxs("div",{className:"selected-profile-card",children:[u.jsxs("div",{className:"selected-profile-head",children:[u.jsx("button",{className:"drawer-close",onClick:()=>Ye(null),children:"×"}),u.jsx("div",{className:"profile-avatar profile-avatar-large avatar-click",onClick:()=>ue.avatar&&wn({src:ue.avatar,name:ue.name||"Oyuncu"}),children:ue.avatar?u.jsx("img",{src:ue.avatar,alt:""}):(ue.name||"O").slice(0,1).toUpperCase()}),u.jsxs("div",{children:[u.jsx("span",{className:"panel-kicker",children:"OYUNCU PROFİLİ"}),u.jsx("h3",{children:ue.name||"Oyuncu"}),u.jsxs("p",{children:["Seviye ",Ys(ue.xp)," · ",ue.xp||0," XP"]})]})]}),u.jsxs("div",{className:"profile-stat-grid compact",children:[u.jsxs("div",{className:"profile-stat-card",children:[u.jsx("b",{children:ue.completedPuzzles||0}),u.jsx("span",{children:"Puzzle"})]}),u.jsxs("div",{className:"profile-stat-card accent-pink",children:[u.jsx("b",{children:ue.togetherPuzzles||0}),u.jsx("span",{children:"Birlikte"})]})]}),u.jsxs("div",{className:"selected-profile-actions",children:[u.jsxs("button",{className:"btn primary",onClick:()=>Gn(ue),disabled:ue.uid===e.uid||!!be.some(h=>h.uid===ue.uid)||!!ce[ue.uid],children:[" ",be.some(h=>h.uid===ue.uid)?"Arkadaşsınız":ce[ue.uid]?"İstek gönderildi":"Arkadaş ekle"]}),be.some(h=>h.uid===ue.uid)&&u.jsx("button",{className:"btn ghost",onClick:()=>de(ue),children:"Sohbet"}),u.jsx("button",{className:"btn ghost danger-btn",onClick:()=>va(ue),children:"Engelle"})]})]})]})]})}),Ii&&u.jsx("div",{className:"avatar-viewer-backdrop",onClick:()=>wn(null),children:u.jsxs("div",{className:"avatar-viewer",onClick:h=>h.stopPropagation(),children:[u.jsx("button",{className:"avatar-viewer-close",onClick:()=>wn(null),"aria-label":"Kapat",children:"×"}),u.jsx("img",{src:Ii.src,alt:Ii.name||"Profil fotoğrafı"}),u.jsx("strong",{children:Ii.name||"Oyuncu"})]})}),bc&&I&&u.jsx("div",{className:"settings-modal-backdrop",onClick:()=>Wn(!1),children:u.jsxs("section",{className:"settings-modal",onClick:h=>h.stopPropagation(),children:[u.jsxs("div",{className:"settings-head",children:[u.jsxs("div",{children:[u.jsx("span",{className:"panel-kicker",children:"HESAP AYARLARI"}),u.jsx("h3",{children:"Profilini yönet"})]}),u.jsx("button",{className:"drawer-close",onClick:()=>Wn(!1),children:"×"})]}),u.jsxs("div",{className:"settings-tabs",children:[u.jsx("button",{className:jr==="profile"?"active":"",onClick:()=>yi("profile"),children:"Profil"}),u.jsx("button",{className:jr==="security"?"active":"",onClick:()=>yi("security"),children:"Güvenlik"})]}),jr==="profile"?u.jsxs("div",{className:"settings-form",children:[u.jsxs("label",{className:"settings-avatar profile-avatar profile-avatar-large profile-avatar-edit",children:[Me?u.jsx("img",{src:Me,alt:""}):u.jsx("span",{children:(wi||"O").slice(0,1).toUpperCase()}),u.jsx("input",{type:"file",accept:"image/*",onChange:h=>{var y;return ma((y=h.target.files)==null?void 0:y[0])}}),u.jsx("i",{children:"+"})]}),u.jsxs("label",{className:"field",children:[u.jsx("span",{children:"Görünen ad"}),u.jsx("input",{value:wi,onChange:h=>Hn(h.target.value),maxLength:40})]}),u.jsx("button",{className:"btn primary settings-save",disabled:Vn,onClick:Ds,children:Vn?"Kaydediliyor...":"Değişiklikleri kaydet"})]}):u.jsxs("div",{className:"settings-form",children:[u.jsxs("div",{className:"security-note",children:[u.jsx("strong",{children:"Şifre"}),u.jsx("span",{children:"Hesabının giriş şifresini buradan değiştirebilirsin."})]}),u.jsxs("label",{className:"field",children:[u.jsx("span",{children:"Yeni şifre"}),u.jsx("input",{type:"password",value:Fr,onChange:h=>Ps(h.target.value),placeholder:"En az 6 karakter"})]}),u.jsxs("label",{className:"field",children:[u.jsx("span",{children:"Yeni şifre tekrar"}),u.jsx("input",{type:"password",value:Ei,onChange:h=>Rs(h.target.value),placeholder:"Şifreyi tekrar yaz"})]}),u.jsx("button",{className:"btn primary settings-save",disabled:Vn,onClick:E,children:Vn?"Değiştiriliyor...":"Şifreyi değiştir"}),u.jsx("div",{className:"security-divider",children:u.jsx("span",{children:"GÖRÜNÜRLÜK VE ERİŞİM"})}),u.jsxs("div",{className:"settings-option",children:[u.jsxs("div",{children:[u.jsx("strong",{children:"Profilim aramalarda görünsün"}),u.jsx("span",{children:"Diğer oyuncular seni isimle bulabilsin."})]}),u.jsx("button",{className:`switch ${Ci?"on":""}`,onClick:()=>ha(h=>!h),children:u.jsx("i",{})})]}),u.jsxs("div",{className:"settings-option",children:[u.jsxs("div",{children:[u.jsx("strong",{children:"Arkadaşlık isteklerine izin ver"}),u.jsx("span",{children:"Sana yeni arkadaşlık isteği gönderilebilsin."})]}),u.jsx("button",{className:`switch ${ki?"on":""}`,onClick:()=>fa(h=>!h),children:u.jsx("i",{})})]}),u.jsxs("div",{className:"settings-option",children:[u.jsxs("div",{children:[u.jsx("strong",{children:"Mesajlara izin ver"}),u.jsx("span",{children:"Arkadaşların sana özel mesaj gönderebilsin."})]}),u.jsx("button",{className:`switch ${zr?"on":""}`,onClick:()=>pa(h=>!h),children:u.jsx("i",{})})]}),u.jsx("button",{className:"btn primary settings-save",disabled:Vn,onClick:Ds,children:Vn?"Kaydediliyor...":"Güvenlik ve görünürlük ayarlarını kaydet"})]})]})})]})}const ee=30,Br=["#ff6f9c","#7c83fd"],Ax=.08,bx=100;function Ox(t,e){return t*e}function Dx({roomCode:t,playerId:e,playerName:n,isGuest:r=!1,pendingJoin:i,onLeave:s}){var _a,va,ya,Ds;const[o,a]=S.useState(i&&!n),[l,c]=S.useState(""),[d,p]=S.useState(null),[f,v]=S.useState({}),[w,C]=S.useState({mine:0,partner:0,total:0}),[W,g]=S.useState(""),[m,_]=S.useState(!1),[k,j]=S.useState(!1),[z,I]=S.useState(!1),[V,le]=S.useState(null),[J,Ue]=S.useState(null),[it,be]=S.useState(0),[wt,Or]=S.useState(!1),[Bt,sn]=S.useState(1),[x,q]=S.useState(!1),[Z,ce]=S.useState(null),[xe,ue]=S.useState(""),[Ye,Et]=S.useState(null),[qe,yn]=S.useState(!1),[gi,Dr]=S.useState(null),[_i,vi]=S.useState([]),[la,Mr]=S.useState(""),[Ac,ca]=S.useState(!1),$n=S.useRef(null),Lr=S.useRef(null),$e=S.useRef({}),on=S.useRef({}),At=S.useRef({}),ua=S.useRef(1),Ct=S.useRef(null),xs=S.useRef(0),da=S.useRef(!1),Me=S.useRef(!0),Bn=S.useRef({key:null,until:0}),bc=S.useRef(Br[0]),Wn=S.useRef(!1),jr=S.useRef(!1),yi=S.useRef(!1),wi=S.useCallback(async()=>{if(r||Wn.current||jr.current||d!=null&&d.cheatedBy||!d)return;Wn.current=!0;const E=d.totalPieces||d.rows*d.cols,T=(E>=200?250:E>=100?100:50)+(d.rotatePieces?50:0);try{const M=G(K,`users/${e}`),D=(await st(M)).val()||{},F=Number(D.completedPuzzles||0)+1,h=Array.isArray(D.history)?D.history:[];h.unshift({roomCode:t,pieces:E,time:it,difficulty:d.difficultyName||"Klasik",completedAt:Date.now()});const y=Array.isArray(D.badges)?D.badges:[],N=[...y],A=Y=>{N.includes(Y)||N.push(Y)};F===1&&A("first"),E>=100&&A("hundred"),E>=200&&A("twohundred"),d.rotatePieces&&A("rotator"),(J??0)===(d.hintsAllowed??0)&&A("perfect");const L=Object.values(f||{}).filter(Y=>(Y==null?void 0:Y.connected)===!0);L.length>=2&&A("team");const b=Number(D.xp||0)+T;await tt(M,{name:D.name||n||"Oyuncu",xp:b,completedPuzzles:F,togetherPuzzles:Number(D.togetherPuzzles||0)+(L.length>=2?1:0),totalTime:Number(D.totalTime||0)+it,bestTime:Math.min(Number(D.bestTime||1/0),it),badges:N,history:h.slice(0,20)}),ce({gainedXp:T,level:Math.floor(b/500)+1,newBadges:N.filter(Y=>!y.includes(Y))})}catch(M){console.error("Ödül kaydı hatası:",M),Wn.current=!1,ce(null)}},[d,e,n,t,it,J,f,r]),Hn=S.useCallback(()=>{const E=Object.values($e.current),T=E.length;if(!T)return;const M=E.filter(h=>h.placed&&h.placedBy===e).length,R=E.filter(h=>h.placed&&h.placedBy&&h.placedBy!==e).length;C(h=>({...h,mine:M,partner:R,total:T}));const D=E.filter(h=>h.placed).length,F=!!(d!=null&&d.cheatedBy)||E.some(h=>(h==null?void 0:h.movedBy)==="cheat");T>0&&D===T&&(yi.current||I(!0),F?ce(null):wi())},[e,wi]);S.useEffect(()=>{if(o)return;let E=!1;return(async()=>{var T,M;try{const R=G(K,`rooms/${t}/players`),F=(await st(R)).val()||{},h=Object.values(F).filter(b=>(b==null?void 0:b.connected)===!0);if(!F[e]&&h.length>=2){E||_(!0);return}const N=Object.entries(F).filter(([b,Y])=>b!==e&&(Y==null?void 0:Y.connected)===!0).map(([,b])=>b==null?void 0:b.color),A=((T=F[e])==null?void 0:T.color)||Br.find(b=>!N.includes(b))||Br[0];bc.current=A;const L=G(K,`rooms/${t}/players/${e}`);await B1(L).remove(),await Er(L,{name:(n||l||"Sen").trim()||"Sen",color:A,connected:!0,joinedAt:((M=F[e])==null?void 0:M.joinedAt)||Date.now()})}catch(R){console.error("Oyuncu kaydı hatası:",R)}})(),()=>{E=!0}},[o,t,e,n,l]),S.useEffect(()=>{o||(async()=>{try{const E=await st(G(K,`rooms/${t}`));if(!E.exists()){_(!0);return}p(E.val())}catch(E){console.error("Oda yükleme hatası:",E)}})()},[o,t]),S.useEffect(()=>{if(o)return;const E=G(K,`rooms/${t}/players`),T=Ot(E,M=>{v(M.val()||{})});return()=>{T==null||T()}},[o,t]),S.useEffect(()=>{if(o||!Object.keys(f||{}).length)return;let E=!1;return(async()=>{const T=await Promise.all(Object.entries(f).map(async([R,D])=>{if(D!=null&&D.avatar)return[R,D];try{const h=(await st(G(K,`publicProfiles/${R}`))).val()||{};return[R,{...D,avatar:typeof h.avatar=="string"?h.avatar:""}]}catch{return[R,D]}}));if(E)return;const M=Object.fromEntries(T);v(R=>{let D=!1;const F={...R};return Object.entries(M).forEach(([h,y])=>{var N;y!=null&&y.avatar&&y.avatar!==((N=R[h])==null?void 0:N.avatar)&&(F[h]={...R[h],avatar:y.avatar},D=!0)}),D?F:R})})(),()=>{E=!0}},[o,f]),S.useEffect(()=>{if(o)return;const E=G(K,`rooms/${t}/cheatedBy`),T=Ot(E,M=>{const R=M.val()||null;R&&(jr.current=!0,p(D=>D&&{...D,cheatedBy:R}),ce(null))});return()=>T==null?void 0:T()},[o,t]),S.useEffect(()=>{if(!d||!t)return;const E=G(K,`rooms/${t}/chat`),T=Ot(E,M=>{const R=M.val()||{},D=Object.entries(R).map(([y,N])=>({id:y,...N||{}})).sort((y,N)=>Number(y.at||0)-Number(N.at||0)).slice(-100);vi(D);const F=Number(localStorage.getItem(`roomChatRead:${t}:${e}`)||0),h=[...D].reverse().find(y=>y.senderId!==e);ca(!qe&&!!h&&Number(h.at||0)>F)});return()=>T==null?void 0:T()},[d,t,e,qe]);async function Fr(){const E=la.trim();if(!E||!t)return;const T=`${e}_${Date.now()}`;await Er(G(K,`rooms/${t}/chat/${T}`),{senderId:e,name:(de==null?void 0:de.name)||n||"Oyuncu",text:E.slice(0,300),at:Date.now()}),Mr("")}S.useEffect(()=>{var Y,B;if(!d)return;Ue(Number.isFinite(Number(d.hintsAllowed))?Number(d.hintsAllowed):3),Or(!1),$n.current||($n.current=Date.now());const{rows:E,cols:T,boardW:M,boardH:R,seed:D,image:F}=d,h=M/T,y=R/E,N=Nw(E,T,D),A=((Y=d.edges)==null?void 0:Y.edgesV)||N.edgesV,L=((B=d.edges)==null?void 0:B.edgesH)||N.edgesH,b=new Image;b.onload=()=>{const H=document.createElement("canvas");H.width=M+ee*2,H.height=R+ee*2,H.getContext("2d").drawImage(b,ee,ee,M,R);const te=document.createElement("canvas");te.width=M,te.height=R,te.getContext("2d").drawImage(b,0,0,M,R),on.current.__ghost=te;for(let me=0;me<E;me++)for(let Ee=0;Ee<T;Ee++){const kt=`${me}_${Ee}`,$r=xw(me,Ee,E,T,A,L),an=document.createElement("canvas");an.width=h+ee*2,an.height=y+ee*2;const bt=an.getContext("2d");Qm(bt,h,y,ee,$r),bt.save(),bt.clip(),bt.drawImage(b,Math.max(0,Ee*h-ee),Math.max(0,me*y-ee),Math.min(b.width-Math.max(0,Ee*h-ee),h+ee*2),Math.min(b.height-Math.max(0,me*y-ee),y+ee*2),Ee===0?ee:0,me===0?ee:0,Math.min(h+ee*2,b.width-Math.max(0,Ee*h-ee)),Math.min(y+ee*2,b.height-Math.max(0,me*y-ee))),bt.restore(),Qm(bt,h,y,ee,$r),bt.lineWidth=2.2,bt.strokeStyle="rgba(60,40,50,0.32)",bt.stroke(),on.current[kt]=an,At.current[kt]=0}Me.current=!0},b.src=F},[d]),S.useEffect(()=>{if(!d)return;const E=G(K,`rooms/${t}/reactions`),T=Ot(E,M=>{var y;const R=M.val()||{},F=(y=Object.entries(R).filter(([N,A])=>N!==e&&(A==null?void 0:A.text)).sort((N,A)=>{var L,b;return Number(((L=A[1])==null?void 0:L.at)||0)-Number(((b=N[1])==null?void 0:b.at)||0)})[0])==null?void 0:y[1];if(!F)return;const h=Date.now()-Number(F.at||0);h>2500||(Et({name:F.name||"Diğer oyuncu",text:F.text,at:F.at}),window.clearTimeout(window.__partnerReactionTimer),window.__partnerReactionTimer=window.setTimeout(()=>{Et(null)},Math.max(300,2500-h)))});return()=>{T==null||T(),window.clearTimeout(window.__partnerReactionTimer)}},[d,t,e]),S.useEffect(()=>{if(!d)return;const E=G(K,`rooms/${t}/pieces`),T=(D,F)=>{var y;if(!F||Ct.current&&Ct.current.key===D)return;const h=$e.current[D];if($e.current[D]=F,da.current&&F.movedBy&&F.movedBy!==e&&F.movedAt&&(!(h!=null&&h.movedAt)||F.movedAt>h.movedAt)){Bn.current={key:D,until:Date.now()+700};const N=((y=f[F.movedBy])==null?void 0:y.name)||"Diğer oyuncu";g(`${N} bir parça oynattı`),clearTimeout(window.__toastTimer),window.__toastTimer=window.setTimeout(()=>{g("")},900)}Me.current=!0,Hn()},M=H1(E,D=>{T(D.key,D.val()),Object.keys($e.current).length>=d.rows*d.cols&&(da.current=!0,Hn())}),R=V1(E,D=>{T(D.key,D.val())});return()=>{Pm(E,"child_added",M),Pm(E,"child_changed",R)}},[d,t,e,f,Hn]),S.useEffect(()=>{if(!d||z)return;const E=setInterval(()=>{$n.current&&be(Math.floor((Date.now()-$n.current)/1e3))},1e3);return()=>clearInterval(E)},[d,z]);function Ps(E){const T=Math.floor(E/60).toString().padStart(2,"0"),M=Math.floor(E%60).toString().padStart(2,"0");return`${T}:${M}`}function Ei(E){if(!(d!=null&&d.rotatePieces)||!E)return;const T=$e.current[E];!T||T.placed||(T.rotation=((Number(T.rotation)||0)+90)%360,le(E),Me.current=!0,tt(G(K,`rooms/${t}/pieces/${E}`),{rotation:T.rotation,movedBy:e,movedAt:Date.now()}).catch(()=>{}))}function Rs(E,T){if(!d)return null;const M=d.boardW/d.cols,R=d.boardH/d.rows,D=Object.keys($e.current).sort((F,h)=>(At.current[h]||0)-(At.current[F]||0));for(const F of D){const h=$e.current[F];if(!h||h.placed)continue;const y=-((Number(h.rotation)||0)*Math.PI)/180,N=h.x+M/2,A=h.y+R/2,L=E-N,b=T-A,Y=L*Math.cos(y)-b*Math.sin(y)+M/2,B=L*Math.sin(y)+b*Math.cos(y)+R/2;if(Y>=-ee&&Y<=M+ee&&B>=-ee&&B<=R+ee)return F}return null}function Ci(){Ei(V)}function ha(E){if(!(d!=null&&d.rotatePieces))return;const T=Lr.current;if(!T)return;const M=T.getBoundingClientRect(),R=T.width/M.width,D=T.height/M.height,F=(E.clientX-M.left)*R,h=(E.clientY-M.top)*D,y=Rs(F,h);y&&Ei(y)}S.useEffect(()=>{let E;function T(){if(E=requestAnimationFrame(T),!Me.current||!d)return;Me.current=!1;const M=Lr.current;if(!M)return;const R=M.getContext("2d"),{boardW:D,boardH:F,rows:h,cols:y}=d;R.clearRect(0,0,M.width,M.height),R.fillStyle="#fff5f7",Ur(R,0,0,D,F,18),R.fill();const N=on.current.__ghost;N&&d.previewAllowed!==!1&&wt&&(R.save(),R.globalAlpha=Ax,Ur(R,0,0,D,F,18),R.clip(),R.drawImage(N,0,0),R.restore()),R.strokeStyle="rgba(255,111,156,0.28)",R.lineWidth=2,Ur(R,1,1,D-2,F-2,18),R.stroke();const A=F+50;R.fillStyle="#faf3f6",Ur(R,0,A,D,M.height-A-10,18),R.fill();const L=D/y,b=F/h,Y=Object.keys(on.current).filter(B=>B!=="__ghost");Y.sort((B,H)=>(At.current[B]||0)-(At.current[H]||0));for(const B of Y){const H=$e.current[B];if(!H)continue;const U=on.current[B];if(!U)continue;R.save(),H.placed?(R.shadowColor="rgba(120,90,100,0.18)",R.shadowBlur=2):(R.shadowColor="rgba(0,0,0,0.18)",R.shadowBlur=4,R.shadowOffsetY=1);const te=Number(H.rotation)||0;te?(R.translate(H.x+L/2,H.y+b/2),R.rotate(te*Math.PI/180),R.drawImage(U,-L/2-ee,-b/2-ee)):R.drawImage(U,H.x-ee,H.y-ee),R.restore(),Bn.current.key===B&&Date.now()<Bn.current.until&&(R.save(),R.strokeStyle="#ffd166",R.lineWidth=3,R.globalAlpha=.85,R.strokeRect(H.x-ee*.6,H.y-ee*.6,L+ee*1.2,b+ee*1.2),R.restore(),Me.current=!0)}}return T(),()=>{cancelAnimationFrame(E)}},[d,f,wt]);function ki(E){if(E.button===2){if(E.preventDefault(),!(d!=null&&d.rotatePieces))return;const B=Lr.current;if(!B)return;const H=B.getBoundingClientRect(),U=B.width/H.width,te=B.height/H.height,me=(E.clientX-H.left)*U,Ee=(E.clientY-H.top)*te,kt=Rs(me,Ee);kt&&Ei(kt);return}const T=Lr.current;if(!T||!d)return;const M=T.getBoundingClientRect(),R=T.width/M.width,D=T.height/M.height,F=(E.clientX-M.left)*R,h=(E.clientY-M.top)*D,{cols:y,boardW:N,boardH:A}=d,L=N/y,b=A/d.rows,Y=Object.keys($e.current).sort((B,H)=>(At.current[H]||0)-(At.current[B]||0));for(const B of Y){const H=$e.current[B];if(!H||H.placed)continue;const U=(Number(H.rotation)||0)*Math.PI/180,te=F-(H.x+L/2),me=h-(H.y+b/2),Ee=Math.cos(-U),kt=Math.sin(-U),$r=te*Ee-me*kt+L/2,an=te*kt+me*Ee+b/2;if($r>=-ee&&$r<=L+ee&&an>=-ee&&an<=b+ee){Ct.current={key:B,offsetX:F-H.x,offsetY:h-H.y},le(B),ua.current+=1,At.current[B]=ua.current,T.setPointerCapture(E.pointerId);break}}}function fa(E){const T=Ct.current;if(!T||!d)return;const M=Lr.current,R=M.getBoundingClientRect(),D=M.width/R.width,F=M.height/R.height,h=(E.clientX-R.left)*D,y=(E.clientY-R.top)*F,N=$e.current[T.key];if(!N)return;const A=d.boardW/d.cols,L=d.boardH/d.rows;N.x=Math.max(-ee,Math.min(M.width-A+ee,h-T.offsetX)),N.y=Math.max(-ee,Math.min(M.height-L+ee,y-T.offsetY)),Me.current=!0;const b=Date.now();b-xs.current>=bx&&(xs.current=b,tt(G(K,`rooms/${t}/pieces/${T.key}`),{x:Math.round(N.x),y:Math.round(N.y),movedBy:e,movedAt:b}).catch(Y=>{console.error("Parça senkronizasyon hatası:",Y)}),tt(G(K,`rooms/${t}/liveMoves/${e}`),{key:T.key,x:Math.round(N.x),y:Math.round(N.y),movedAt:b}).catch(()=>{}))}function zr(){const E=Ct.current;if(!E||!d)return;Ct.current=null;const{cols:T,boardW:M,boardH:R}=d,D=M/T,F=R/d.rows,[h,y]=E.key.split("_").map(Number),N=y*D,A=h*F,L=$e.current[E.key];if(!L)return;const b=Math.min(D,F)*.4,Y=Math.abs(L.x-N),B=Math.abs(L.y-A);let H=!1;(Number(L.rotation)||0)===0&&Y<b&&B<b&&(L.x=N,L.y=A,H=!0);const U=Date.now();L.placed=H,L.placedBy=H?e:null,L.movedBy=e,L.movedAt=U,Me.current=!0,Hn(),tt(G(K,`rooms/${t}/pieces/${E.key}`),{x:Math.round(L.x),y:Math.round(L.y),placed:H,placedBy:L.placedBy,movedBy:e,movedAt:U}).catch(te=>{console.error("Parça bırakma hatası:",te)}),tt(G(K,`rooms/${t}/liveMoves/${e}`),{key:E.key,x:Math.round(L.x),y:Math.round(L.y),placed:H,movedAt:U}).catch(()=>{})}function pa(){if(!d)return;const E=Object.entries($e.current).filter(([,M])=>M&&!M.placed);if(!E.length){g("Bütün parçalar zaten tamamlandı.");return}if(J!==null&&J<=0){g("Yardım hakkın kalmadı.");return}J!==null&&Ue(M=>Math.max(0,M-1));const[T]=E[Math.floor(Math.random()*E.length)];Bn.current={key:T,until:Date.now()+2500},Me.current=!0,g("İşaretli parçaya bak."),clearTimeout(window.__missingPieceTimer),window.__missingPieceTimer=setTimeout(()=>{Bn.current={key:null,until:0},Me.current=!0,g("")},2500)}function As(){if(!d)return;jr.current=!0;const E=Date.now(),T={},M=d.boardW/d.cols,R=d.boardH/d.rows;Object.entries($e.current).forEach(([D,F])=>{if(!F)return;const[h,y]=D.split("_").map(Number),N=y*M,A=h*R;F.x=N,F.y=A,F.rotation=0,F.placed=!0,F.placedBy=null,F.movedBy="cheat",F.movedAt=E,T[`rooms/${t}/pieces/${D}/x`]=Math.round(N),T[`rooms/${t}/pieces/${D}/y`]=Math.round(A),T[`rooms/${t}/pieces/${D}/rotation`]=0,T[`rooms/${t}/pieces/${D}/placed`]=!0,T[`rooms/${t}/pieces/${D}/placedBy`]=null,T[`rooms/${t}/pieces/${D}/movedBy`]="cheat",T[`rooms/${t}/pieces/${D}/movedAt`]=E}),T[`rooms/${t}/cheatedBy`]=e,T[`rooms/${t}/completionMode`]="cheat",tt(G(K),T).then(()=>{p(D=>D&&{...D,cheatedBy:e}),I(!0),g("Puzzle tamamlandı.")}).catch(D=>{console.error("Puzzle tamamlama hatası:",D)})}function Ur(E,T,M,R,D,F){E.beginPath(),E.moveTo(T+F,M),E.arcTo(T+R,M,T+R,M+D,F),E.arcTo(T+R,M+D,T,M+D,F),E.arcTo(T,M+D,T,M,F),E.arcTo(T,M,T+R,M,F),E.closePath()}function Vn(){var T;const E=`${window.location.origin}${window.location.pathname}?room=${t}`;(T=navigator.clipboard)==null||T.writeText(E),j(!0),setTimeout(()=>j(!1),1500)}if(o)return u.jsx("div",{className:"home",children:u.jsxs("div",{className:"home-card",children:[u.jsx("h1",{children:"Odaya katıl"}),u.jsxs("p",{className:"subtitle",children:["Oda kodu: ",t]}),u.jsxs("div",{className:"form",children:[u.jsxs("label",{className:"field",children:[u.jsx("span",{children:"Adın (opsiyonel)"}),u.jsx("input",{value:l,onChange:E=>c(E.target.value),placeholder:"Adın"})]}),u.jsx("button",{className:"btn primary",onClick:()=>a(!1),children:"Katıl"})]})]})});if(m)return u.jsx("div",{className:"home",children:u.jsxs("div",{className:"home-card",children:[u.jsx("h1",{children:"Bu oda dolu"}),u.jsx("p",{className:"subtitle",children:"Bu odada zaten iki oyuncu var."}),u.jsx("button",{className:"btn primary",onClick:s,children:"Geri dön"})]})});if(!d)return u.jsx("div",{className:"home",children:u.jsx("div",{className:"home-card",children:u.jsx("p",{className:"subtitle",children:"Yükleniyor..."})})});const Si=d.boardW,Ii=d.boardH+50,wn=d.boardH/d.rows,ft=Math.max(5,Math.min(10,Math.ceil(Math.sqrt(Ox(d.rows,d.cols)*1.2)))),ma=Math.ceil(d.rows*d.cols/ft),ga=Ii+ma*wn*1.22+wn*2,Gn=w.total||d.rows*d.cols,bs=Gn?Math.round(w.mine/Gn*100):0,Os=Gn?Math.round(w.partner/Gn*100):0,de=f[e],Le=Object.entries(f).find(([E])=>E!==e),Kn=Le?Le[1].name:"Diğer oyuncu";return u.jsxs("div",{className:"game",children:[gi&&u.jsx("div",{className:"avatar-viewer-backdrop",onClick:()=>Dr(null),children:u.jsxs("div",{className:"avatar-viewer",onClick:E=>E.stopPropagation(),children:[u.jsx("button",{className:"avatar-viewer-close",onClick:()=>Dr(null),"aria-label":"Kapat",children:"×"}),u.jsx("img",{src:gi.src,alt:gi.name||"Profil fotoğrafı"}),u.jsx("strong",{children:gi.name||"Oyuncu"})]})}),u.jsxs("div",{className:"game-header",children:[u.jsxs("div",{className:"header-left",children:[u.jsxs("span",{className:"room-badge",children:["Oda: ",t]}),u.jsx("span",{className:"stat-badge",children:d.difficultyName||"Klasik"}),u.jsx("span",{className:"stat-badge",children:Ps(it)}),u.jsxs("span",{className:"stat-badge",children:["Yardım: ",J??0]}),u.jsx("button",{className:"btn tiny",onClick:Vn,children:k?"Kopyalandı ✓":"Davet linkini kopyala"}),u.jsx("button",{className:"btn tiny ghost",onClick:pa,title:"Rastgele tamamlanmamış bir parçayı gösterir",children:"Kayıp parçayı bul"}),d.rotatePieces&&u.jsx("button",{className:"btn tiny ghost",onClick:Ci,disabled:!V,children:"Parçayı döndür"}),d.previewAllowed!==!1&&u.jsx("button",{className:"btn tiny ghost",onClick:()=>Or(E=>!E),children:wt?"Önizlemeyi gizle":"Fotoğrafı göster"}),u.jsx("button",{className:"btn tiny ghost",onClick:()=>q(!0),title:"Kalan parçaları tamamlar",children:"Şifreli puzzleı tamamla"})]}),u.jsx("button",{className:"btn tiny ghost",onClick:s,children:"Odadan çık"})]}),u.jsxs("div",{className:"progress-area",children:[u.jsxs("div",{className:"progress-row",children:[u.jsx("span",{className:"game-player-avatar",onClick:()=>(de==null?void 0:de.avatar)&&Dr({src:de.avatar,name:(de==null?void 0:de.name)||"Sen"}),children:de!=null&&de.avatar?u.jsx("img",{src:de.avatar,alt:""}):u.jsx("i",{style:{background:(de==null?void 0:de.color)||Br[0]}})}),u.jsx("span",{className:"progress-label",children:(de==null?void 0:de.name)||"Sen"}),u.jsx("div",{className:"bar",children:u.jsx("div",{className:"bar-fill",style:{width:`${bs}%`,background:(de==null?void 0:de.color)||Br[0]}})}),u.jsxs("span",{className:"pct",children:[bs,"%"]})]}),u.jsxs("div",{className:"progress-row",children:[u.jsx("span",{className:"game-player-avatar",onClick:()=>{var E;return((E=Le==null?void 0:Le[1])==null?void 0:E.avatar)&&Dr({src:Le[1].avatar,name:Kn})},children:(_a=Le==null?void 0:Le[1])!=null&&_a.avatar?u.jsx("img",{src:Le[1].avatar,alt:""}):u.jsx("i",{style:{background:((va=Le==null?void 0:Le[1])==null?void 0:va.color)||Br[1]}})}),u.jsx("span",{className:"progress-label",children:Kn}),u.jsx("div",{className:"bar",children:u.jsx("div",{className:"bar-fill",style:{width:`${Os}%`,background:((ya=Le==null?void 0:Le[1])==null?void 0:ya.color)||Br[1]}})}),u.jsxs("span",{className:"pct",children:[Os,"%"]})]})]}),W&&u.jsx("div",{className:"toast",children:W}),Ye&&u.jsxs("div",{className:"reaction-toast",children:[Ye.name,": ",Ye.text]}),u.jsxs("div",{className:"game-tools",children:[u.jsxs("div",{className:"tool-group",children:[u.jsx("button",{className:"btn tiny ghost",onClick:()=>sn(E=>Math.max(.75,+(E-.1).toFixed(2))),children:"−"}),u.jsxs("span",{className:"zoom-label",children:[Math.round(Bt*100),"%"]}),u.jsx("button",{className:"btn tiny ghost",onClick:()=>sn(E=>Math.min(1.6,+(E+.1).toFixed(2))),children:"+"}),u.jsx("button",{className:"btn tiny ghost",onClick:()=>sn(1),children:"Sığdır"})]}),u.jsx("div",{className:"reaction-group",children:["Bulduğum!","Yaklaştım","Tamamdır"].map(E=>u.jsx("button",{className:"btn tiny ghost",onClick:async()=>{ue(E),window.clearTimeout(window.__reactionTimer),window.__reactionTimer=window.setTimeout(()=>ue(""),1400),await Er(G(K,`rooms/${t}/reactions/${e}`),{text:E,name:(de==null?void 0:de.name)||"Sen",at:Date.now()})},children:E},E))})]}),u.jsx("div",{className:"canvas-wrap",children:u.jsx("canvas",{ref:Lr,width:Si,height:ga,style:{display:"block",width:`${Math.min(1400,900*Bt)}px`,height:"auto",maxWidth:"none",touchAction:"none",userSelect:"none",WebkitUserSelect:"none"},onPointerDown:ki,onDoubleClick:ha,onPointerMove:fa,onPointerUp:zr,onPointerCancel:zr,onContextMenu:E=>E.preventDefault()})}),u.jsx("p",{className:"hint",children:"Parçaları alttaki tepsiden tahtaya sürükle. Doğru yere yakın bırakınca kilitlenir."}),u.jsxs("button",{className:`room-chat-launcher ${qe?"open":""}`,onClick:()=>{yn(E=>{const T=!E;return T&&(localStorage.setItem(`roomChatRead:${t}:${e}`,String(Date.now())),ca(!1)),T})},title:"Oda sohbeti","aria-label":"Oda sohbeti",children:[u.jsx("span",{className:"room-chat-launcher-icon","aria-hidden":"true"}),u.jsx("span",{className:"room-chat-launcher-label",children:"Sohbet"}),Ac&&u.jsx("b",{children:"1"})]}),qe&&u.jsxs("div",{className:"room-chat-panel",children:[u.jsxs("div",{className:"room-chat-head",children:[u.jsxs("div",{children:[u.jsx("span",{className:"panel-kicker",children:"ORTAK ODA"}),u.jsx("strong",{children:"Sohbet"})]}),u.jsx("button",{className:"drawer-close",onClick:()=>yn(!1),children:"×"})]}),u.jsx("div",{className:"room-chat-messages",children:_i.length===0?u.jsx("div",{className:"chat-empty",children:"Henüz mesaj yok. İlk mesajı sen gönder."}):_i.map(E=>u.jsxs("div",{className:`room-chat-bubble ${E.senderId===e?"mine":""}`,children:[u.jsx("b",{children:E.senderId===e?"Sen":E.name||"Oyuncu"}),u.jsx("span",{children:E.text}),u.jsx("small",{children:new Date(E.at).toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"})})]},E.id))}),u.jsxs("div",{className:"room-chat-compose",children:[u.jsx("input",{value:la,onChange:E=>Mr(E.target.value.slice(0,300)),onKeyDown:E=>{E.key==="Enter"&&!E.shiftKey&&(E.preventDefault(),Fr())},placeholder:"Mesaj yaz..."}),u.jsx("button",{className:"btn primary",onClick:Fr,children:"Gönder"})]})]}),x&&u.jsx("div",{className:"modal-backdrop",children:u.jsxs("div",{className:"confirm-card",children:[u.jsx("div",{className:"confirm-kicker",children:"KARARINI KESİNLEŞTİR"}),u.jsx("h2",{children:"Puzzle'ı senin yerine tamamlayalım mı?"}),u.jsx("p",{children:"Kalan parçalar doğru konum ve yönde otomatik yerleştirilecek. Bu işlem normal çözüm olarak ödüllendirilmeyecek."}),u.jsxs("div",{className:"row-buttons",children:[u.jsx("button",{className:"btn ghost",onClick:()=>q(!1),children:"Vazgeç"}),u.jsx("button",{className:"btn primary",onClick:()=>{q(!1),As()},children:"Puzzle'ı tamamla"})]})]})}),z&&u.jsxs("div",{className:"finish-overlay",children:[u.jsx("div",{className:"finish-orbit orbit-one"}),u.jsx("div",{className:"finish-orbit orbit-two"}),u.jsxs("div",{className:"finish-card premium-finish",children:[u.jsx("div",{className:"finish-ribbon",children:"PUZZLE TAMAMLANDI"}),u.jsxs("div",{className:"finish-photo-frame",children:[u.jsx("img",{src:d.image,alt:"Tamamlanan puzzle"}),u.jsx("div",{className:"finish-photo-shine"})]}),u.jsx("p",{className:"finish-kicker",children:"BİRLİKTE BİTTİ"}),u.jsx("h2",{children:"Bu anıyı tamamladınız."}),u.jsx("p",{className:"finish-copy",children:"Son parça yerine oturdu. Şimdi ortaya çıkan fotoğrafın tadını çıkar."}),Z&&u.jsxs("div",{className:"reward-box",children:[u.jsxs("b",{children:["+",Z.gainedXp," XP"]}),u.jsxs("span",{children:["Seviye ",Z.level]}),((Ds=Z.newBadges)==null?void 0:Ds.length)>0&&u.jsxs("em",{children:[Z.newBadges.length," yeni rozet"]})]}),u.jsxs("div",{className:"finish-stats",children:[u.jsxs("div",{children:[u.jsx("b",{children:Gn}),u.jsx("span",{children:"parça"})]}),u.jsxs("div",{children:[u.jsx("b",{children:Ps(it)}),u.jsx("span",{children:"süre"})]}),u.jsxs("div",{children:[u.jsx("b",{children:J??0}),u.jsx("span",{children:"kalan yardım"})]})]}),u.jsx("button",{className:"btn primary finish-button",onClick:()=>{yi.current=!0,I(!1)},children:"Puzzle'a bak"})]})]})]})}function Zm(){const[t,e]=S.useState(!1),[n,r]=S.useState(!1),[i,s]=S.useState(""),[o,a]=S.useState(""),[l,c]=S.useState(""),[d,p]=S.useState(""),[f,v]=S.useState(!1);async function w(g){g.preventDefault(),p(""),v(!0);try{if(t){const m=i.trim(),_=o.trim().toLowerCase();if(!m)throw new Error("Lütfen bir isim gir.");const k=await rN(Kt,_,l);await oN(k.user,{displayName:m}),await Er(G(K,`users/${k.user.uid}`),{name:m,email:_,puzzlesRemaining:3,createdAt:Date.now()}),await Um(k.user),r(!0)}else{const m=await iN(Kt,o.trim().toLowerCase(),l);if(await Od(m.user),!m.user.emailVerified){r(!0);return}}}catch(m){console.error(m),p({"auth/email-already-in-use":"Bu e-posta zaten kayıtlı.","auth/invalid-email":"Geçerli bir e-posta gir.","auth/weak-password":"Şifre en az 6 karakter olmalı.","auth/invalid-credential":"E-posta veya şifre hatalı.","auth/user-not-found":"Bu hesap bulunamadı.","auth/wrong-password":"Şifre hatalı.","auth/too-many-requests":"Çok fazla deneme yapıldı. Biraz sonra tekrar dene."}[m.code]||m.message||"Bir hata oluştu.")}finally{v(!1)}}async function C(){p(""),v(!0);try{if(!Kt.currentUser){p("Oturum bulunamadı.");return}if(await Od(Kt.currentUser),Kt.currentUser.emailVerified){window.location.reload();return}p("E-posta henüz doğrulanmamış. Mail kutunu kontrol et.")}catch(g){console.error(g),p("Doğrulama kontrol edilemedi.")}finally{v(!1)}}async function W(){p(""),v(!0);try{Kt.currentUser&&(await Um(Kt.currentUser),p("Doğrulama e-postası tekrar gönderildi."))}catch(g){console.error(g),p("E-posta gönderilemedi. Biraz sonra tekrar dene.")}finally{v(!1)}}return n?u.jsx("main",{className:"auth-page",children:u.jsxs("div",{className:"auth-card",children:[u.jsx("div",{className:"auth-logo",children:"✉️"}),u.jsx("h1",{children:"E-postanı doğrula"}),u.jsxs("p",{className:"auth-subtitle",children:[o," adresine bir doğrulama bağlantısı gönderdik."]}),d&&u.jsx("div",{className:"auth-error",children:d}),u.jsx("button",{type:"button",className:"auth-submit",onClick:C,disabled:f,children:f?"Kontrol ediliyor...":"Doğrulamayı kontrol et"}),u.jsx("button",{type:"button",className:"auth-link-button",onClick:W,disabled:f,children:"Doğrulama mailini tekrar gönder"}),u.jsx("button",{type:"button",className:"auth-link-button",onClick:()=>{r(!1),p("")},children:"Giriş ekranına dön"})]})}):u.jsx("main",{className:"auth-page",children:u.jsxs("div",{className:"auth-card",children:[u.jsxs("div",{className:"auth-logo","aria-hidden":"true",children:[u.jsx("i",{}),u.jsx("i",{}),u.jsx("i",{}),u.jsx("i",{})]}),u.jsx("h1",{children:t?"Hesap oluştur":"Hoş geldin"}),u.jsx("p",{className:"auth-subtitle",children:t?"Puzzle'larını kaydetmek için hesap oluştur.":"Puzzle'larına devam etmek için giriş yap."}),u.jsxs("form",{onSubmit:w,className:"auth-form",children:[t&&u.jsxs("label",{children:[u.jsx("span",{children:"İsmin"}),u.jsx("input",{type:"text",value:i,onChange:g=>s(g.target.value),placeholder:"İsmin",maxLength:30,required:!0})]}),u.jsxs("label",{children:[u.jsx("span",{children:"E-posta"}),u.jsx("input",{type:"email",value:o,onChange:g=>a(g.target.value),placeholder:"ornek@mail.com",required:!0})]}),u.jsxs("label",{children:[u.jsx("span",{children:"Şifre"}),u.jsx("input",{type:"password",value:l,onChange:g=>c(g.target.value),placeholder:"En az 6 karakter",minLength:6,required:!0})]}),d&&u.jsx("div",{className:"auth-error",children:d}),u.jsx("button",{type:"submit",className:"auth-submit",disabled:f,children:f?"Bekleyin...":t?"Hesap oluştur":"Giriş yap"})]}),u.jsxs("div",{className:"auth-switch",children:[t?"Zaten hesabın var mı?":"Hesabın yok mu?",u.jsx("button",{type:"button",onClick:()=>{e(!t),p("")},children:t?"Giriş yap":"Kayıt ol"})]})]})})}function Mx(){const[t,e]=S.useState(void 0),[n,r]=S.useState(null);if(S.useEffect(()=>dN(Kt,a=>{e(a)}),[]),S.useEffect(()=>{const a=new URLSearchParams(window.location.search).get("room");if(!a)return;const l=a.toUpperCase();r({code:l,pendingJoin:!0}),t===null&&ZT(Kt).catch(c=>{console.error("Misafir oturumu başlatılamadı:",c)})},[t]),t===void 0)return u.jsx("div",{className:"auth-loading",children:"Yükleniyor..."});if(!t&&(n!=null&&n.pendingJoin))return u.jsx("div",{className:"auth-loading",children:"Davete katılınıyor..."});if(!t)return u.jsx(Zm,{initialMode:"login",onSuccess:()=>{}});if(!t.isAnonymous&&!t.emailVerified)return u.jsx(Zm,{initialMode:"login",onSuccess:()=>{}});const i=t.uid,s=t.isAnonymous?"Misafir":t.displayName||"Oyuncu";return n&&n.code?u.jsx(Dx,{roomCode:n.code,playerId:i,playerName:n.playerNameOverride||s,isGuest:t.isAnonymous,pendingJoin:!!n.pendingJoin,onLeave:async()=>{if(window.history.replaceState({},"",window.location.pathname),r(null),t.isAnonymous)try{await mw(Kt)}catch(o){console.error("Misafir oturumu kapatılamadı:",o)}}}):u.jsx(Rx,{playerId:i,user:t,playerName:s,onEnterRoom:(o,a,l=!1)=>{r({code:o,pendingJoin:l,playerNameOverride:a||null})}})}wu.createRoot(document.getElementById("root")).render(u.jsx(Gw.StrictMode,{children:u.jsx(Mx,{})}));
