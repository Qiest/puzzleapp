(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function F0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var qg={exports:{}},wc={},Yg={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aa=Symbol.for("react.element"),z0=Symbol.for("react.portal"),$0=Symbol.for("react.fragment"),B0=Symbol.for("react.strict_mode"),W0=Symbol.for("react.profiler"),H0=Symbol.for("react.provider"),V0=Symbol.for("react.context"),G0=Symbol.for("react.forward_ref"),K0=Symbol.for("react.suspense"),q0=Symbol.for("react.memo"),Y0=Symbol.for("react.lazy"),dp=Symbol.iterator;function Q0(t){return t===null||typeof t!="object"?null:(t=dp&&t[dp]||t["@@iterator"],typeof t=="function"?t:null)}var Qg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xg=Object.assign,Jg={};function Ns(t,e,n){this.props=t,this.context=e,this.refs=Jg,this.updater=n||Qg}Ns.prototype.isReactComponent={};Ns.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ns.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Zg(){}Zg.prototype=Ns.prototype;function ah(t,e,n){this.props=t,this.context=e,this.refs=Jg,this.updater=n||Qg}var lh=ah.prototype=new Zg;lh.constructor=ah;Xg(lh,Ns.prototype);lh.isPureReactComponent=!0;var hp=Array.isArray,e_=Object.prototype.hasOwnProperty,ch={current:null},t_={key:!0,ref:!0,__self:!0,__source:!0};function n_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)e_.call(e,r)&&!t_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:aa,type:t,key:s,ref:o,props:i,_owner:ch.current}}function X0(t,e){return{$$typeof:aa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function uh(t){return typeof t=="object"&&t!==null&&t.$$typeof===aa}function J0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var fp=/\/+/g;function tu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?J0(""+t.key):e.toString(36)}function ll(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case aa:case z0:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+tu(o,0):r,hp(i)?(n="",t!=null&&(n=t.replace(fp,"$&/")+"/"),ll(i,e,n,"",function(c){return c})):i!=null&&(uh(i)&&(i=X0(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(fp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",hp(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+tu(s,a);o+=ll(s,e,n,l,i)}else if(l=Q0(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+tu(s,a++),o+=ll(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Fa(t,e,n){if(t==null)return t;var r=[],i=0;return ll(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Z0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var yt={current:null},cl={transition:null},eE={ReactCurrentDispatcher:yt,ReactCurrentBatchConfig:cl,ReactCurrentOwner:ch};function r_(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:Fa,forEach:function(t,e,n){Fa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Fa(t,function(){e++}),e},toArray:function(t){return Fa(t,function(e){return e})||[]},only:function(t){if(!uh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=Ns;ie.Fragment=$0;ie.Profiler=W0;ie.PureComponent=ah;ie.StrictMode=B0;ie.Suspense=K0;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eE;ie.act=r_;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Xg({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ch.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)e_.call(e,l)&&!t_.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:aa,type:t.type,key:i,ref:s,props:r,_owner:o}};ie.createContext=function(t){return t={$$typeof:V0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:H0,_context:t},t.Consumer=t};ie.createElement=n_;ie.createFactory=function(t){var e=n_.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:G0,render:t}};ie.isValidElement=uh;ie.lazy=function(t){return{$$typeof:Y0,_payload:{_status:-1,_result:t},_init:Z0}};ie.memo=function(t,e){return{$$typeof:q0,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=cl.transition;cl.transition={};try{t()}finally{cl.transition=e}};ie.unstable_act=r_;ie.useCallback=function(t,e){return yt.current.useCallback(t,e)};ie.useContext=function(t){return yt.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return yt.current.useDeferredValue(t)};ie.useEffect=function(t,e){return yt.current.useEffect(t,e)};ie.useId=function(){return yt.current.useId()};ie.useImperativeHandle=function(t,e,n){return yt.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return yt.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return yt.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return yt.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return yt.current.useReducer(t,e,n)};ie.useRef=function(t){return yt.current.useRef(t)};ie.useState=function(t){return yt.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return yt.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return yt.current.useTransition()};ie.version="18.3.1";Yg.exports=ie;var N=Yg.exports;const tE=F0(N);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nE=N,rE=Symbol.for("react.element"),iE=Symbol.for("react.fragment"),sE=Object.prototype.hasOwnProperty,oE=nE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,aE={key:!0,ref:!0,__self:!0,__source:!0};function i_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)sE.call(e,r)&&!aE.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:rE,type:t,key:s,ref:o,props:i,_owner:oE.current}}wc.Fragment=iE;wc.jsx=i_;wc.jsxs=i_;qg.exports=wc;var u=qg.exports,Hu={},s_={exports:{}},Ut={},o_={exports:{}},a_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,X){var $=U.length;U.push(X);e:for(;0<$;){var se=$-1>>>1,ge=U[se];if(0<i(ge,X))U[se]=X,U[$]=ge,$=se;else break e}}function n(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var X=U[0],$=U.pop();if($!==X){U[0]=$;e:for(var se=0,ge=U.length,vn=ge>>>1;se<vn;){var Pt=2*(se+1)-1,de=U[Pt],nt=Pt+1,rt=U[nt];if(0>i(de,$))nt<ge&&0>i(rt,de)?(U[se]=rt,U[nt]=$,se=nt):(U[se]=de,U[Pt]=$,se=Pt);else if(nt<ge&&0>i(rt,$))U[se]=rt,U[nt]=$,se=nt;else break e}}return X}function i(U,X){var $=U.sortIndex-X.sortIndex;return $!==0?$:U.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],p=1,d=null,f=3,_=!1,w=!1,S=!1,D=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(U){for(var X=n(c);X!==null;){if(X.callback===null)r(c);else if(X.startTime<=U)r(c),X.sortIndex=X.expirationTime,e(l,X);else break;X=n(c)}}function C(U){if(S=!1,v(U),!w)if(n(l)!==null)w=!0,Rt(j);else{var X=n(c);X!==null&&_n(C,X.startTime-U)}}function j(U,X){w=!1,S&&(S=!1,g(W),W=-1),_=!0;var $=f;try{for(v(X),d=n(l);d!==null&&(!(d.expirationTime>X)||U&&!Re());){var se=d.callback;if(typeof se=="function"){d.callback=null,f=d.priorityLevel;var ge=se(d.expirationTime<=X);X=t.unstable_now(),typeof ge=="function"?d.callback=ge:d===n(l)&&r(l),v(X)}else r(l);d=n(l)}if(d!==null)var vn=!0;else{var Pt=n(c);Pt!==null&&_n(C,Pt.startTime-X),vn=!1}return vn}finally{d=null,f=$,_=!1}}var z=!1,B=null,W=-1,F=5,J=-1;function Re(){return!(t.unstable_now()-J<F)}function gn(){if(B!==null){var U=t.unstable_now();J=U;var X=!0;try{X=B(!0,U)}finally{X?tt():(z=!1,B=null)}}else z=!1}var tt;if(typeof m=="function")tt=function(){m(gn)};else if(typeof MessageChannel<"u"){var Vr=new MessageChannel,He=Vr.port2;Vr.port1.onmessage=gn,tt=function(){He.postMessage(null)}}else tt=function(){D(gn,0)};function Rt(U){B=U,z||(z=!0,tt())}function _n(U,X){W=D(function(){U(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){w||_||(w=!0,Rt(j))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(f){case 1:case 2:case 3:var X=3;break;default:X=f}var $=f;f=X;try{return U()}finally{f=$}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,X){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var $=f;f=U;try{return X()}finally{f=$}},t.unstable_scheduleCallback=function(U,X,$){var se=t.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?se+$:se):$=se,U){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=$+ge,U={id:p++,callback:X,priorityLevel:U,startTime:$,expirationTime:ge,sortIndex:-1},$>se?(U.sortIndex=$,e(c,U),n(l)===null&&U===n(c)&&(S?(g(W),W=-1):S=!0,_n(C,$-se))):(U.sortIndex=ge,e(l,U),w||_||(w=!0,Rt(j))),U},t.unstable_shouldYield=Re,t.unstable_wrapCallback=function(U){var X=f;return function(){var $=f;f=X;try{return U.apply(this,arguments)}finally{f=$}}}})(a_);o_.exports=a_;var lE=o_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cE=N,jt=lE;function A(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l_=new Set,Do={};function Ii(t,e){ds(t,e),ds(t+"Capture",e)}function ds(t,e){for(Do[t]=e,t=0;t<e.length;t++)l_.add(e[t])}var Kn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vu=Object.prototype.hasOwnProperty,uE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pp={},mp={};function dE(t){return Vu.call(mp,t)?!0:Vu.call(pp,t)?!1:uE.test(t)?mp[t]=!0:(pp[t]=!0,!1)}function hE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function fE(t,e,n,r){if(e===null||typeof e>"u"||hE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function wt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){et[t]=new wt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];et[e]=new wt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){et[t]=new wt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){et[t]=new wt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){et[t]=new wt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){et[t]=new wt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){et[t]=new wt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){et[t]=new wt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){et[t]=new wt(t,5,!1,t.toLowerCase(),null,!1,!1)});var dh=/[\-:]([a-z])/g;function hh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(dh,hh);et[e]=new wt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(dh,hh);et[e]=new wt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(dh,hh);et[e]=new wt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){et[t]=new wt(t,1,!1,t.toLowerCase(),null,!1,!1)});et.xlinkHref=new wt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){et[t]=new wt(t,1,!1,t.toLowerCase(),null,!0,!0)});function fh(t,e,n,r){var i=et.hasOwnProperty(e)?et[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(fE(e,n,i,r)&&(n=null),r||i===null?dE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var tr=cE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,za=Symbol.for("react.element"),$i=Symbol.for("react.portal"),Bi=Symbol.for("react.fragment"),ph=Symbol.for("react.strict_mode"),Gu=Symbol.for("react.profiler"),c_=Symbol.for("react.provider"),u_=Symbol.for("react.context"),mh=Symbol.for("react.forward_ref"),Ku=Symbol.for("react.suspense"),qu=Symbol.for("react.suspense_list"),gh=Symbol.for("react.memo"),lr=Symbol.for("react.lazy"),d_=Symbol.for("react.offscreen"),gp=Symbol.iterator;function Qs(t){return t===null||typeof t!="object"?null:(t=gp&&t[gp]||t["@@iterator"],typeof t=="function"?t:null)}var xe=Object.assign,nu;function uo(t){if(nu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);nu=e&&e[1]||""}return`
`+nu+t}var ru=!1;function iu(t,e){if(!t||ru)return"";ru=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{ru=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?uo(t):""}function pE(t){switch(t.tag){case 5:return uo(t.type);case 16:return uo("Lazy");case 13:return uo("Suspense");case 19:return uo("SuspenseList");case 0:case 2:case 15:return t=iu(t.type,!1),t;case 11:return t=iu(t.type.render,!1),t;case 1:return t=iu(t.type,!0),t;default:return""}}function Yu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Bi:return"Fragment";case $i:return"Portal";case Gu:return"Profiler";case ph:return"StrictMode";case Ku:return"Suspense";case qu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case u_:return(t.displayName||"Context")+".Consumer";case c_:return(t._context.displayName||"Context")+".Provider";case mh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case gh:return e=t.displayName||null,e!==null?e:Yu(t.type)||"Memo";case lr:e=t._payload,t=t._init;try{return Yu(t(e))}catch{}}return null}function mE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Yu(e);case 8:return e===ph?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function h_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function gE(t){var e=h_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function $a(t){t._valueTracker||(t._valueTracker=gE(t))}function f_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=h_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Il(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Qu(t,e){var n=e.checked;return xe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function _p(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function p_(t,e){e=e.checked,e!=null&&fh(t,"checked",e,!1)}function Xu(t,e){p_(t,e);var n=Ar(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ju(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ju(t,e.type,Ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function vp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ju(t,e,n){(e!=="number"||Il(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ho=Array.isArray;function ts(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ar(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Zu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(A(91));return xe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function yp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(A(92));if(ho(n)){if(1<n.length)throw Error(A(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ar(n)}}function m_(t,e){var n=Ar(e.value),r=Ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function wp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function g_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ed(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?g_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ba,__=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ba=Ba||document.createElement("div"),Ba.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ba.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Mo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var _o={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_E=["Webkit","ms","Moz","O"];Object.keys(_o).forEach(function(t){_E.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),_o[e]=_o[t]})});function v_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||_o.hasOwnProperty(t)&&_o[t]?(""+e).trim():e+"px"}function y_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=v_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var vE=xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function td(t,e){if(e){if(vE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(A(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(A(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(A(61))}if(e.style!=null&&typeof e.style!="object")throw Error(A(62))}}function nd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rd=null;function _h(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var id=null,ns=null,rs=null;function Ep(t){if(t=ua(t)){if(typeof id!="function")throw Error(A(280));var e=t.stateNode;e&&(e=Ic(e),id(t.stateNode,t.type,e))}}function w_(t){ns?rs?rs.push(t):rs=[t]:ns=t}function E_(){if(ns){var t=ns,e=rs;if(rs=ns=null,Ep(t),e)for(t=0;t<e.length;t++)Ep(e[t])}}function k_(t,e){return t(e)}function C_(){}var su=!1;function S_(t,e,n){if(su)return t(e,n);su=!0;try{return k_(t,e,n)}finally{su=!1,(ns!==null||rs!==null)&&(C_(),E_())}}function Lo(t,e){var n=t.stateNode;if(n===null)return null;var r=Ic(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(A(231,e,typeof n));return n}var sd=!1;if(Kn)try{var Xs={};Object.defineProperty(Xs,"passive",{get:function(){sd=!0}}),window.addEventListener("test",Xs,Xs),window.removeEventListener("test",Xs,Xs)}catch{sd=!1}function yE(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(p){this.onError(p)}}var vo=!1,Tl=null,Nl=!1,od=null,wE={onError:function(t){vo=!0,Tl=t}};function EE(t,e,n,r,i,s,o,a,l){vo=!1,Tl=null,yE.apply(wE,arguments)}function kE(t,e,n,r,i,s,o,a,l){if(EE.apply(this,arguments),vo){if(vo){var c=Tl;vo=!1,Tl=null}else throw Error(A(198));Nl||(Nl=!0,od=c)}}function Ti(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function I_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function kp(t){if(Ti(t)!==t)throw Error(A(188))}function CE(t){var e=t.alternate;if(!e){if(e=Ti(t),e===null)throw Error(A(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return kp(i),t;if(s===r)return kp(i),e;s=s.sibling}throw Error(A(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?t:e}function T_(t){return t=CE(t),t!==null?N_(t):null}function N_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=N_(t);if(e!==null)return e;t=t.sibling}return null}var x_=jt.unstable_scheduleCallback,Cp=jt.unstable_cancelCallback,SE=jt.unstable_shouldYield,IE=jt.unstable_requestPaint,je=jt.unstable_now,TE=jt.unstable_getCurrentPriorityLevel,vh=jt.unstable_ImmediatePriority,R_=jt.unstable_UserBlockingPriority,xl=jt.unstable_NormalPriority,NE=jt.unstable_LowPriority,P_=jt.unstable_IdlePriority,Ec=null,In=null;function xE(t){if(In&&typeof In.onCommitFiberRoot=="function")try{In.onCommitFiberRoot(Ec,t,void 0,(t.current.flags&128)===128)}catch{}}var un=Math.clz32?Math.clz32:bE,RE=Math.log,PE=Math.LN2;function bE(t){return t>>>=0,t===0?32:31-(RE(t)/PE|0)|0}var Wa=64,Ha=4194304;function fo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Rl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=fo(a):(s&=o,s!==0&&(r=fo(s)))}else o=n&~i,o!==0?r=fo(o):s!==0&&(r=fo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-un(e),i=1<<n,r|=t[n],e&=~i;return r}function AE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function OE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-un(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=AE(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function ad(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function b_(){var t=Wa;return Wa<<=1,!(Wa&4194240)&&(Wa=64),t}function ou(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function la(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-un(e),t[e]=n}function DE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-un(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function yh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-un(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var he=0;function A_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var O_,wh,D_,M_,L_,ld=!1,Va=[],wr=null,Er=null,kr=null,jo=new Map,Uo=new Map,ur=[],ME="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sp(t,e){switch(t){case"focusin":case"focusout":wr=null;break;case"dragenter":case"dragleave":Er=null;break;case"mouseover":case"mouseout":kr=null;break;case"pointerover":case"pointerout":jo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Uo.delete(e.pointerId)}}function Js(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ua(e),e!==null&&wh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function LE(t,e,n,r,i){switch(e){case"focusin":return wr=Js(wr,t,e,n,r,i),!0;case"dragenter":return Er=Js(Er,t,e,n,r,i),!0;case"mouseover":return kr=Js(kr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return jo.set(s,Js(jo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Uo.set(s,Js(Uo.get(s)||null,t,e,n,r,i)),!0}return!1}function j_(t){var e=ri(t.target);if(e!==null){var n=Ti(e);if(n!==null){if(e=n.tag,e===13){if(e=I_(n),e!==null){t.blockedOn=e,L_(t.priority,function(){D_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ul(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=cd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);rd=r,n.target.dispatchEvent(r),rd=null}else return e=ua(n),e!==null&&wh(e),t.blockedOn=n,!1;e.shift()}return!0}function Ip(t,e,n){ul(t)&&n.delete(e)}function jE(){ld=!1,wr!==null&&ul(wr)&&(wr=null),Er!==null&&ul(Er)&&(Er=null),kr!==null&&ul(kr)&&(kr=null),jo.forEach(Ip),Uo.forEach(Ip)}function Zs(t,e){t.blockedOn===e&&(t.blockedOn=null,ld||(ld=!0,jt.unstable_scheduleCallback(jt.unstable_NormalPriority,jE)))}function Fo(t){function e(i){return Zs(i,t)}if(0<Va.length){Zs(Va[0],t);for(var n=1;n<Va.length;n++){var r=Va[n];r.blockedOn===t&&(r.blockedOn=null)}}for(wr!==null&&Zs(wr,t),Er!==null&&Zs(Er,t),kr!==null&&Zs(kr,t),jo.forEach(e),Uo.forEach(e),n=0;n<ur.length;n++)r=ur[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ur.length&&(n=ur[0],n.blockedOn===null);)j_(n),n.blockedOn===null&&ur.shift()}var is=tr.ReactCurrentBatchConfig,Pl=!0;function UE(t,e,n,r){var i=he,s=is.transition;is.transition=null;try{he=1,Eh(t,e,n,r)}finally{he=i,is.transition=s}}function FE(t,e,n,r){var i=he,s=is.transition;is.transition=null;try{he=4,Eh(t,e,n,r)}finally{he=i,is.transition=s}}function Eh(t,e,n,r){if(Pl){var i=cd(t,e,n,r);if(i===null)gu(t,e,r,bl,n),Sp(t,r);else if(LE(i,t,e,n,r))r.stopPropagation();else if(Sp(t,r),e&4&&-1<ME.indexOf(t)){for(;i!==null;){var s=ua(i);if(s!==null&&O_(s),s=cd(t,e,n,r),s===null&&gu(t,e,r,bl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else gu(t,e,r,null,n)}}var bl=null;function cd(t,e,n,r){if(bl=null,t=_h(r),t=ri(t),t!==null)if(e=Ti(t),e===null)t=null;else if(n=e.tag,n===13){if(t=I_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return bl=t,null}function U_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(TE()){case vh:return 1;case R_:return 4;case xl:case NE:return 16;case P_:return 536870912;default:return 16}default:return 16}}var _r=null,kh=null,dl=null;function F_(){if(dl)return dl;var t,e=kh,n=e.length,r,i="value"in _r?_r.value:_r.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return dl=i.slice(t,1<r?1-r:void 0)}function hl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ga(){return!0}function Tp(){return!1}function Ft(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ga:Tp,this.isPropagationStopped=Tp,this}return xe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ga)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ga)},persist:function(){},isPersistent:Ga}),e}var xs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ch=Ft(xs),ca=xe({},xs,{view:0,detail:0}),zE=Ft(ca),au,lu,eo,kc=xe({},ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==eo&&(eo&&t.type==="mousemove"?(au=t.screenX-eo.screenX,lu=t.screenY-eo.screenY):lu=au=0,eo=t),au)},movementY:function(t){return"movementY"in t?t.movementY:lu}}),Np=Ft(kc),$E=xe({},kc,{dataTransfer:0}),BE=Ft($E),WE=xe({},ca,{relatedTarget:0}),cu=Ft(WE),HE=xe({},xs,{animationName:0,elapsedTime:0,pseudoElement:0}),VE=Ft(HE),GE=xe({},xs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),KE=Ft(GE),qE=xe({},xs,{data:0}),xp=Ft(qE),YE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},QE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},XE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function JE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=XE[t])?!!e[t]:!1}function Sh(){return JE}var ZE=xe({},ca,{key:function(t){if(t.key){var e=YE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=hl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?QE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sh,charCode:function(t){return t.type==="keypress"?hl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?hl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ek=Ft(ZE),tk=xe({},kc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rp=Ft(tk),nk=xe({},ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sh}),rk=Ft(nk),ik=xe({},xs,{propertyName:0,elapsedTime:0,pseudoElement:0}),sk=Ft(ik),ok=xe({},kc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ak=Ft(ok),lk=[9,13,27,32],Ih=Kn&&"CompositionEvent"in window,yo=null;Kn&&"documentMode"in document&&(yo=document.documentMode);var ck=Kn&&"TextEvent"in window&&!yo,z_=Kn&&(!Ih||yo&&8<yo&&11>=yo),Pp=" ",bp=!1;function $_(t,e){switch(t){case"keyup":return lk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function B_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Wi=!1;function uk(t,e){switch(t){case"compositionend":return B_(e);case"keypress":return e.which!==32?null:(bp=!0,Pp);case"textInput":return t=e.data,t===Pp&&bp?null:t;default:return null}}function dk(t,e){if(Wi)return t==="compositionend"||!Ih&&$_(t,e)?(t=F_(),dl=kh=_r=null,Wi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return z_&&e.locale!=="ko"?null:e.data;default:return null}}var hk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ap(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!hk[t.type]:e==="textarea"}function W_(t,e,n,r){w_(r),e=Al(e,"onChange"),0<e.length&&(n=new Ch("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var wo=null,zo=null;function fk(t){ev(t,0)}function Cc(t){var e=Gi(t);if(f_(e))return t}function pk(t,e){if(t==="change")return e}var H_=!1;if(Kn){var uu;if(Kn){var du="oninput"in document;if(!du){var Op=document.createElement("div");Op.setAttribute("oninput","return;"),du=typeof Op.oninput=="function"}uu=du}else uu=!1;H_=uu&&(!document.documentMode||9<document.documentMode)}function Dp(){wo&&(wo.detachEvent("onpropertychange",V_),zo=wo=null)}function V_(t){if(t.propertyName==="value"&&Cc(zo)){var e=[];W_(e,zo,t,_h(t)),S_(fk,e)}}function mk(t,e,n){t==="focusin"?(Dp(),wo=e,zo=n,wo.attachEvent("onpropertychange",V_)):t==="focusout"&&Dp()}function gk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Cc(zo)}function _k(t,e){if(t==="click")return Cc(e)}function vk(t,e){if(t==="input"||t==="change")return Cc(e)}function yk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var fn=typeof Object.is=="function"?Object.is:yk;function $o(t,e){if(fn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Vu.call(e,i)||!fn(t[i],e[i]))return!1}return!0}function Mp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Lp(t,e){var n=Mp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mp(n)}}function G_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?G_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function K_(){for(var t=window,e=Il();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Il(t.document)}return e}function Th(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function wk(t){var e=K_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&G_(n.ownerDocument.documentElement,n)){if(r!==null&&Th(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Lp(n,s);var o=Lp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ek=Kn&&"documentMode"in document&&11>=document.documentMode,Hi=null,ud=null,Eo=null,dd=!1;function jp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;dd||Hi==null||Hi!==Il(r)||(r=Hi,"selectionStart"in r&&Th(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Eo&&$o(Eo,r)||(Eo=r,r=Al(ud,"onSelect"),0<r.length&&(e=new Ch("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Hi)))}function Ka(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Vi={animationend:Ka("Animation","AnimationEnd"),animationiteration:Ka("Animation","AnimationIteration"),animationstart:Ka("Animation","AnimationStart"),transitionend:Ka("Transition","TransitionEnd")},hu={},q_={};Kn&&(q_=document.createElement("div").style,"AnimationEvent"in window||(delete Vi.animationend.animation,delete Vi.animationiteration.animation,delete Vi.animationstart.animation),"TransitionEvent"in window||delete Vi.transitionend.transition);function Sc(t){if(hu[t])return hu[t];if(!Vi[t])return t;var e=Vi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in q_)return hu[t]=e[n];return t}var Y_=Sc("animationend"),Q_=Sc("animationiteration"),X_=Sc("animationstart"),J_=Sc("transitionend"),Z_=new Map,Up="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zr(t,e){Z_.set(t,e),Ii(e,[t])}for(var fu=0;fu<Up.length;fu++){var pu=Up[fu],kk=pu.toLowerCase(),Ck=pu[0].toUpperCase()+pu.slice(1);zr(kk,"on"+Ck)}zr(Y_,"onAnimationEnd");zr(Q_,"onAnimationIteration");zr(X_,"onAnimationStart");zr("dblclick","onDoubleClick");zr("focusin","onFocus");zr("focusout","onBlur");zr(J_,"onTransitionEnd");ds("onMouseEnter",["mouseout","mouseover"]);ds("onMouseLeave",["mouseout","mouseover"]);ds("onPointerEnter",["pointerout","pointerover"]);ds("onPointerLeave",["pointerout","pointerover"]);Ii("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ii("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ii("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ii("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ii("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ii("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sk=new Set("cancel close invalid load scroll toggle".split(" ").concat(po));function Fp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,kE(r,e,void 0,t),t.currentTarget=null}function ev(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Fp(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Fp(i,a,c),s=l}}}if(Nl)throw t=od,Nl=!1,od=null,t}function we(t,e){var n=e[gd];n===void 0&&(n=e[gd]=new Set);var r=t+"__bubble";n.has(r)||(tv(e,t,2,!1),n.add(r))}function mu(t,e,n){var r=0;e&&(r|=4),tv(n,t,r,e)}var qa="_reactListening"+Math.random().toString(36).slice(2);function Bo(t){if(!t[qa]){t[qa]=!0,l_.forEach(function(n){n!=="selectionchange"&&(Sk.has(n)||mu(n,!1,t),mu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[qa]||(e[qa]=!0,mu("selectionchange",!1,e))}}function tv(t,e,n,r){switch(U_(e)){case 1:var i=UE;break;case 4:i=FE;break;default:i=Eh}n=i.bind(null,e,n,t),i=void 0,!sd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function gu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ri(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}S_(function(){var c=s,p=_h(n),d=[];e:{var f=Z_.get(t);if(f!==void 0){var _=Ch,w=t;switch(t){case"keypress":if(hl(n)===0)break e;case"keydown":case"keyup":_=ek;break;case"focusin":w="focus",_=cu;break;case"focusout":w="blur",_=cu;break;case"beforeblur":case"afterblur":_=cu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Np;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=BE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=rk;break;case Y_:case Q_:case X_:_=VE;break;case J_:_=sk;break;case"scroll":_=zE;break;case"wheel":_=ak;break;case"copy":case"cut":case"paste":_=KE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Rp}var S=(e&4)!==0,D=!S&&t==="scroll",g=S?f!==null?f+"Capture":null:f;S=[];for(var m=c,v;m!==null;){v=m;var C=v.stateNode;if(v.tag===5&&C!==null&&(v=C,g!==null&&(C=Lo(m,g),C!=null&&S.push(Wo(m,C,v)))),D)break;m=m.return}0<S.length&&(f=new _(f,w,null,n,p),d.push({event:f,listeners:S}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",f&&n!==rd&&(w=n.relatedTarget||n.fromElement)&&(ri(w)||w[qn]))break e;if((_||f)&&(f=p.window===p?p:(f=p.ownerDocument)?f.defaultView||f.parentWindow:window,_?(w=n.relatedTarget||n.toElement,_=c,w=w?ri(w):null,w!==null&&(D=Ti(w),w!==D||w.tag!==5&&w.tag!==6)&&(w=null)):(_=null,w=c),_!==w)){if(S=Np,C="onMouseLeave",g="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(S=Rp,C="onPointerLeave",g="onPointerEnter",m="pointer"),D=_==null?f:Gi(_),v=w==null?f:Gi(w),f=new S(C,m+"leave",_,n,p),f.target=D,f.relatedTarget=v,C=null,ri(p)===c&&(S=new S(g,m+"enter",w,n,p),S.target=v,S.relatedTarget=D,C=S),D=C,_&&w)t:{for(S=_,g=w,m=0,v=S;v;v=Fi(v))m++;for(v=0,C=g;C;C=Fi(C))v++;for(;0<m-v;)S=Fi(S),m--;for(;0<v-m;)g=Fi(g),v--;for(;m--;){if(S===g||g!==null&&S===g.alternate)break t;S=Fi(S),g=Fi(g)}S=null}else S=null;_!==null&&zp(d,f,_,S,!1),w!==null&&D!==null&&zp(d,D,w,S,!0)}}e:{if(f=c?Gi(c):window,_=f.nodeName&&f.nodeName.toLowerCase(),_==="select"||_==="input"&&f.type==="file")var j=pk;else if(Ap(f))if(H_)j=vk;else{j=gk;var z=mk}else(_=f.nodeName)&&_.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(j=_k);if(j&&(j=j(t,c))){W_(d,j,n,p);break e}z&&z(t,f,c),t==="focusout"&&(z=f._wrapperState)&&z.controlled&&f.type==="number"&&Ju(f,"number",f.value)}switch(z=c?Gi(c):window,t){case"focusin":(Ap(z)||z.contentEditable==="true")&&(Hi=z,ud=c,Eo=null);break;case"focusout":Eo=ud=Hi=null;break;case"mousedown":dd=!0;break;case"contextmenu":case"mouseup":case"dragend":dd=!1,jp(d,n,p);break;case"selectionchange":if(Ek)break;case"keydown":case"keyup":jp(d,n,p)}var B;if(Ih)e:{switch(t){case"compositionstart":var W="onCompositionStart";break e;case"compositionend":W="onCompositionEnd";break e;case"compositionupdate":W="onCompositionUpdate";break e}W=void 0}else Wi?$_(t,n)&&(W="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(W="onCompositionStart");W&&(z_&&n.locale!=="ko"&&(Wi||W!=="onCompositionStart"?W==="onCompositionEnd"&&Wi&&(B=F_()):(_r=p,kh="value"in _r?_r.value:_r.textContent,Wi=!0)),z=Al(c,W),0<z.length&&(W=new xp(W,t,null,n,p),d.push({event:W,listeners:z}),B?W.data=B:(B=B_(n),B!==null&&(W.data=B)))),(B=ck?uk(t,n):dk(t,n))&&(c=Al(c,"onBeforeInput"),0<c.length&&(p=new xp("onBeforeInput","beforeinput",null,n,p),d.push({event:p,listeners:c}),p.data=B))}ev(d,e)})}function Wo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Al(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Lo(t,n),s!=null&&r.unshift(Wo(t,s,i)),s=Lo(t,e),s!=null&&r.push(Wo(t,s,i))),t=t.return}return r}function Fi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function zp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Lo(n,s),l!=null&&o.unshift(Wo(n,l,a))):i||(l=Lo(n,s),l!=null&&o.push(Wo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Ik=/\r\n?/g,Tk=/\u0000|\uFFFD/g;function $p(t){return(typeof t=="string"?t:""+t).replace(Ik,`
`).replace(Tk,"")}function Ya(t,e,n){if(e=$p(e),$p(t)!==e&&n)throw Error(A(425))}function Ol(){}var hd=null,fd=null;function pd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var md=typeof setTimeout=="function"?setTimeout:void 0,Nk=typeof clearTimeout=="function"?clearTimeout:void 0,Bp=typeof Promise=="function"?Promise:void 0,xk=typeof queueMicrotask=="function"?queueMicrotask:typeof Bp<"u"?function(t){return Bp.resolve(null).then(t).catch(Rk)}:md;function Rk(t){setTimeout(function(){throw t})}function _u(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Fo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Fo(e)}function Cr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Wp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Rs=Math.random().toString(36).slice(2),Cn="__reactFiber$"+Rs,Ho="__reactProps$"+Rs,qn="__reactContainer$"+Rs,gd="__reactEvents$"+Rs,Pk="__reactListeners$"+Rs,bk="__reactHandles$"+Rs;function ri(t){var e=t[Cn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[qn]||n[Cn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Wp(t);t!==null;){if(n=t[Cn])return n;t=Wp(t)}return e}t=n,n=t.parentNode}return null}function ua(t){return t=t[Cn]||t[qn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Gi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(A(33))}function Ic(t){return t[Ho]||null}var _d=[],Ki=-1;function $r(t){return{current:t}}function Ee(t){0>Ki||(t.current=_d[Ki],_d[Ki]=null,Ki--)}function ve(t,e){Ki++,_d[Ki]=t.current,t.current=e}var Or={},ct=$r(Or),Tt=$r(!1),hi=Or;function hs(t,e){var n=t.type.contextTypes;if(!n)return Or;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Nt(t){return t=t.childContextTypes,t!=null}function Dl(){Ee(Tt),Ee(ct)}function Hp(t,e,n){if(ct.current!==Or)throw Error(A(168));ve(ct,e),ve(Tt,n)}function nv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(A(108,mE(t)||"Unknown",i));return xe({},n,r)}function Ml(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Or,hi=ct.current,ve(ct,t),ve(Tt,Tt.current),!0}function Vp(t,e,n){var r=t.stateNode;if(!r)throw Error(A(169));n?(t=nv(t,e,hi),r.__reactInternalMemoizedMergedChildContext=t,Ee(Tt),Ee(ct),ve(ct,t)):Ee(Tt),ve(Tt,n)}var jn=null,Tc=!1,vu=!1;function rv(t){jn===null?jn=[t]:jn.push(t)}function Ak(t){Tc=!0,rv(t)}function Br(){if(!vu&&jn!==null){vu=!0;var t=0,e=he;try{var n=jn;for(he=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}jn=null,Tc=!1}catch(i){throw jn!==null&&(jn=jn.slice(t+1)),x_(vh,Br),i}finally{he=e,vu=!1}}return null}var qi=[],Yi=0,Ll=null,jl=0,$t=[],Bt=0,fi=null,Fn=1,zn="";function Zr(t,e){qi[Yi++]=jl,qi[Yi++]=Ll,Ll=t,jl=e}function iv(t,e,n){$t[Bt++]=Fn,$t[Bt++]=zn,$t[Bt++]=fi,fi=t;var r=Fn;t=zn;var i=32-un(r)-1;r&=~(1<<i),n+=1;var s=32-un(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Fn=1<<32-un(e)+i|n<<i|r,zn=s+t}else Fn=1<<s|n<<i|r,zn=t}function Nh(t){t.return!==null&&(Zr(t,1),iv(t,1,0))}function xh(t){for(;t===Ll;)Ll=qi[--Yi],qi[Yi]=null,jl=qi[--Yi],qi[Yi]=null;for(;t===fi;)fi=$t[--Bt],$t[Bt]=null,zn=$t[--Bt],$t[Bt]=null,Fn=$t[--Bt],$t[Bt]=null}var Lt=null,Dt=null,Ce=!1,sn=null;function sv(t,e){var n=Wt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Gp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Lt=t,Dt=Cr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Lt=t,Dt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=fi!==null?{id:Fn,overflow:zn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Wt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Lt=t,Dt=null,!0):!1;default:return!1}}function vd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function yd(t){if(Ce){var e=Dt;if(e){var n=e;if(!Gp(t,e)){if(vd(t))throw Error(A(418));e=Cr(n.nextSibling);var r=Lt;e&&Gp(t,e)?sv(r,n):(t.flags=t.flags&-4097|2,Ce=!1,Lt=t)}}else{if(vd(t))throw Error(A(418));t.flags=t.flags&-4097|2,Ce=!1,Lt=t}}}function Kp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Lt=t}function Qa(t){if(t!==Lt)return!1;if(!Ce)return Kp(t),Ce=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!pd(t.type,t.memoizedProps)),e&&(e=Dt)){if(vd(t))throw ov(),Error(A(418));for(;e;)sv(t,e),e=Cr(e.nextSibling)}if(Kp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(A(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Dt=Cr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Dt=null}}else Dt=Lt?Cr(t.stateNode.nextSibling):null;return!0}function ov(){for(var t=Dt;t;)t=Cr(t.nextSibling)}function fs(){Dt=Lt=null,Ce=!1}function Rh(t){sn===null?sn=[t]:sn.push(t)}var Ok=tr.ReactCurrentBatchConfig;function to(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,t))}return t}function Xa(t,e){throw t=Object.prototype.toString.call(e),Error(A(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function qp(t){var e=t._init;return e(t._payload)}function av(t){function e(g,m){if(t){var v=g.deletions;v===null?(g.deletions=[m],g.flags|=16):v.push(m)}}function n(g,m){if(!t)return null;for(;m!==null;)e(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function i(g,m){return g=Nr(g,m),g.index=0,g.sibling=null,g}function s(g,m,v){return g.index=v,t?(v=g.alternate,v!==null?(v=v.index,v<m?(g.flags|=2,m):v):(g.flags|=2,m)):(g.flags|=1048576,m)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,m,v,C){return m===null||m.tag!==6?(m=Iu(v,g.mode,C),m.return=g,m):(m=i(m,v),m.return=g,m)}function l(g,m,v,C){var j=v.type;return j===Bi?p(g,m,v.props.children,C,v.key):m!==null&&(m.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===lr&&qp(j)===m.type)?(C=i(m,v.props),C.ref=to(g,m,v),C.return=g,C):(C=yl(v.type,v.key,v.props,null,g.mode,C),C.ref=to(g,m,v),C.return=g,C)}function c(g,m,v,C){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=Tu(v,g.mode,C),m.return=g,m):(m=i(m,v.children||[]),m.return=g,m)}function p(g,m,v,C,j){return m===null||m.tag!==7?(m=ci(v,g.mode,C,j),m.return=g,m):(m=i(m,v),m.return=g,m)}function d(g,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Iu(""+m,g.mode,v),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case za:return v=yl(m.type,m.key,m.props,null,g.mode,v),v.ref=to(g,null,m),v.return=g,v;case $i:return m=Tu(m,g.mode,v),m.return=g,m;case lr:var C=m._init;return d(g,C(m._payload),v)}if(ho(m)||Qs(m))return m=ci(m,g.mode,v,null),m.return=g,m;Xa(g,m)}return null}function f(g,m,v,C){var j=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return j!==null?null:a(g,m,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case za:return v.key===j?l(g,m,v,C):null;case $i:return v.key===j?c(g,m,v,C):null;case lr:return j=v._init,f(g,m,j(v._payload),C)}if(ho(v)||Qs(v))return j!==null?null:p(g,m,v,C,null);Xa(g,v)}return null}function _(g,m,v,C,j){if(typeof C=="string"&&C!==""||typeof C=="number")return g=g.get(v)||null,a(m,g,""+C,j);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case za:return g=g.get(C.key===null?v:C.key)||null,l(m,g,C,j);case $i:return g=g.get(C.key===null?v:C.key)||null,c(m,g,C,j);case lr:var z=C._init;return _(g,m,v,z(C._payload),j)}if(ho(C)||Qs(C))return g=g.get(v)||null,p(m,g,C,j,null);Xa(m,C)}return null}function w(g,m,v,C){for(var j=null,z=null,B=m,W=m=0,F=null;B!==null&&W<v.length;W++){B.index>W?(F=B,B=null):F=B.sibling;var J=f(g,B,v[W],C);if(J===null){B===null&&(B=F);break}t&&B&&J.alternate===null&&e(g,B),m=s(J,m,W),z===null?j=J:z.sibling=J,z=J,B=F}if(W===v.length)return n(g,B),Ce&&Zr(g,W),j;if(B===null){for(;W<v.length;W++)B=d(g,v[W],C),B!==null&&(m=s(B,m,W),z===null?j=B:z.sibling=B,z=B);return Ce&&Zr(g,W),j}for(B=r(g,B);W<v.length;W++)F=_(B,g,W,v[W],C),F!==null&&(t&&F.alternate!==null&&B.delete(F.key===null?W:F.key),m=s(F,m,W),z===null?j=F:z.sibling=F,z=F);return t&&B.forEach(function(Re){return e(g,Re)}),Ce&&Zr(g,W),j}function S(g,m,v,C){var j=Qs(v);if(typeof j!="function")throw Error(A(150));if(v=j.call(v),v==null)throw Error(A(151));for(var z=j=null,B=m,W=m=0,F=null,J=v.next();B!==null&&!J.done;W++,J=v.next()){B.index>W?(F=B,B=null):F=B.sibling;var Re=f(g,B,J.value,C);if(Re===null){B===null&&(B=F);break}t&&B&&Re.alternate===null&&e(g,B),m=s(Re,m,W),z===null?j=Re:z.sibling=Re,z=Re,B=F}if(J.done)return n(g,B),Ce&&Zr(g,W),j;if(B===null){for(;!J.done;W++,J=v.next())J=d(g,J.value,C),J!==null&&(m=s(J,m,W),z===null?j=J:z.sibling=J,z=J);return Ce&&Zr(g,W),j}for(B=r(g,B);!J.done;W++,J=v.next())J=_(B,g,W,J.value,C),J!==null&&(t&&J.alternate!==null&&B.delete(J.key===null?W:J.key),m=s(J,m,W),z===null?j=J:z.sibling=J,z=J);return t&&B.forEach(function(gn){return e(g,gn)}),Ce&&Zr(g,W),j}function D(g,m,v,C){if(typeof v=="object"&&v!==null&&v.type===Bi&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case za:e:{for(var j=v.key,z=m;z!==null;){if(z.key===j){if(j=v.type,j===Bi){if(z.tag===7){n(g,z.sibling),m=i(z,v.props.children),m.return=g,g=m;break e}}else if(z.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===lr&&qp(j)===z.type){n(g,z.sibling),m=i(z,v.props),m.ref=to(g,z,v),m.return=g,g=m;break e}n(g,z);break}else e(g,z);z=z.sibling}v.type===Bi?(m=ci(v.props.children,g.mode,C,v.key),m.return=g,g=m):(C=yl(v.type,v.key,v.props,null,g.mode,C),C.ref=to(g,m,v),C.return=g,g=C)}return o(g);case $i:e:{for(z=v.key;m!==null;){if(m.key===z)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(g,m.sibling),m=i(m,v.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else e(g,m);m=m.sibling}m=Tu(v,g.mode,C),m.return=g,g=m}return o(g);case lr:return z=v._init,D(g,m,z(v._payload),C)}if(ho(v))return w(g,m,v,C);if(Qs(v))return S(g,m,v,C);Xa(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(g,m.sibling),m=i(m,v),m.return=g,g=m):(n(g,m),m=Iu(v,g.mode,C),m.return=g,g=m),o(g)):n(g,m)}return D}var ps=av(!0),lv=av(!1),Ul=$r(null),Fl=null,Qi=null,Ph=null;function bh(){Ph=Qi=Fl=null}function Ah(t){var e=Ul.current;Ee(Ul),t._currentValue=e}function wd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ss(t,e){Fl=t,Ph=Qi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(St=!0),t.firstContext=null)}function Gt(t){var e=t._currentValue;if(Ph!==t)if(t={context:t,memoizedValue:e,next:null},Qi===null){if(Fl===null)throw Error(A(308));Qi=t,Fl.dependencies={lanes:0,firstContext:t}}else Qi=Qi.next=t;return e}var ii=null;function Oh(t){ii===null?ii=[t]:ii.push(t)}function cv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Oh(e)):(n.next=i.next,i.next=n),e.interleaved=n,Yn(t,r)}function Yn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var cr=!1;function Dh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Vn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Sr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Yn(t,n)}return i=r.interleaved,i===null?(e.next=e,Oh(r)):(e.next=i.next,i.next=e),r.interleaved=e,Yn(t,n)}function fl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,yh(t,n)}}function Yp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function zl(t,e,n,r){var i=t.updateQueue;cr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var p=t.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==o&&(a===null?p.firstBaseUpdate=c:a.next=c,p.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,p=c=l=null,a=s;do{var f=a.lane,_=a.eventTime;if((r&f)===f){p!==null&&(p=p.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=t,S=a;switch(f=e,_=n,S.tag){case 1:if(w=S.payload,typeof w=="function"){d=w.call(_,d,f);break e}d=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=S.payload,f=typeof w=="function"?w.call(_,d,f):w,f==null)break e;d=xe({},d,f);break e;case 2:cr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else _={eventTime:_,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(c=p=_,l=d):p=p.next=_,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(p===null&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=p,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);mi|=o,t.lanes=o,t.memoizedState=d}}function Qp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(A(191,i));i.call(r)}}}var da={},Tn=$r(da),Vo=$r(da),Go=$r(da);function si(t){if(t===da)throw Error(A(174));return t}function Mh(t,e){switch(ve(Go,e),ve(Vo,t),ve(Tn,da),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ed(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ed(e,t)}Ee(Tn),ve(Tn,e)}function ms(){Ee(Tn),Ee(Vo),Ee(Go)}function dv(t){si(Go.current);var e=si(Tn.current),n=ed(e,t.type);e!==n&&(ve(Vo,t),ve(Tn,n))}function Lh(t){Vo.current===t&&(Ee(Tn),Ee(Vo))}var Ie=$r(0);function $l(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var yu=[];function jh(){for(var t=0;t<yu.length;t++)yu[t]._workInProgressVersionPrimary=null;yu.length=0}var pl=tr.ReactCurrentDispatcher,wu=tr.ReactCurrentBatchConfig,pi=0,Ne=null,$e=null,Ge=null,Bl=!1,ko=!1,Ko=0,Dk=0;function st(){throw Error(A(321))}function Uh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!fn(t[n],e[n]))return!1;return!0}function Fh(t,e,n,r,i,s){if(pi=s,Ne=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,pl.current=t===null||t.memoizedState===null?Uk:Fk,t=n(r,i),ko){s=0;do{if(ko=!1,Ko=0,25<=s)throw Error(A(301));s+=1,Ge=$e=null,e.updateQueue=null,pl.current=zk,t=n(r,i)}while(ko)}if(pl.current=Wl,e=$e!==null&&$e.next!==null,pi=0,Ge=$e=Ne=null,Bl=!1,e)throw Error(A(300));return t}function zh(){var t=Ko!==0;return Ko=0,t}function kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?Ne.memoizedState=Ge=t:Ge=Ge.next=t,Ge}function Kt(){if($e===null){var t=Ne.alternate;t=t!==null?t.memoizedState:null}else t=$e.next;var e=Ge===null?Ne.memoizedState:Ge.next;if(e!==null)Ge=e,$e=t;else{if(t===null)throw Error(A(310));$e=t,t={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},Ge===null?Ne.memoizedState=Ge=t:Ge=Ge.next=t}return Ge}function qo(t,e){return typeof e=="function"?e(t):e}function Eu(t){var e=Kt(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var r=$e,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var p=c.lane;if((pi&p)===p)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var d={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,Ne.lanes|=p,mi|=p}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,fn(r,e.memoizedState)||(St=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ne.lanes|=s,mi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ku(t){var e=Kt(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);fn(s,e.memoizedState)||(St=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function hv(){}function fv(t,e){var n=Ne,r=Kt(),i=e(),s=!fn(r.memoizedState,i);if(s&&(r.memoizedState=i,St=!0),r=r.queue,$h(gv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ge!==null&&Ge.memoizedState.tag&1){if(n.flags|=2048,Yo(9,mv.bind(null,n,r,i,e),void 0,null),Ye===null)throw Error(A(349));pi&30||pv(n,e,i)}return i}function pv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function mv(t,e,n,r){e.value=n,e.getSnapshot=r,_v(e)&&vv(t)}function gv(t,e,n){return n(function(){_v(e)&&vv(t)})}function _v(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!fn(t,n)}catch{return!0}}function vv(t){var e=Yn(t,1);e!==null&&dn(e,t,1,-1)}function Xp(t){var e=kn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qo,lastRenderedState:t},e.queue=t,t=t.dispatch=jk.bind(null,Ne,t),[e.memoizedState,t]}function Yo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function yv(){return Kt().memoizedState}function ml(t,e,n,r){var i=kn();Ne.flags|=t,i.memoizedState=Yo(1|e,n,void 0,r===void 0?null:r)}function Nc(t,e,n,r){var i=Kt();r=r===void 0?null:r;var s=void 0;if($e!==null){var o=$e.memoizedState;if(s=o.destroy,r!==null&&Uh(r,o.deps)){i.memoizedState=Yo(e,n,s,r);return}}Ne.flags|=t,i.memoizedState=Yo(1|e,n,s,r)}function Jp(t,e){return ml(8390656,8,t,e)}function $h(t,e){return Nc(2048,8,t,e)}function wv(t,e){return Nc(4,2,t,e)}function Ev(t,e){return Nc(4,4,t,e)}function kv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Cv(t,e,n){return n=n!=null?n.concat([t]):null,Nc(4,4,kv.bind(null,e,t),n)}function Bh(){}function Sv(t,e){var n=Kt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Uh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Iv(t,e){var n=Kt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Uh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Tv(t,e,n){return pi&21?(fn(n,e)||(n=b_(),Ne.lanes|=n,mi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,St=!0),t.memoizedState=n)}function Mk(t,e){var n=he;he=n!==0&&4>n?n:4,t(!0);var r=wu.transition;wu.transition={};try{t(!1),e()}finally{he=n,wu.transition=r}}function Nv(){return Kt().memoizedState}function Lk(t,e,n){var r=Tr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},xv(t))Rv(e,n);else if(n=cv(t,e,n,r),n!==null){var i=gt();dn(n,t,r,i),Pv(n,e,r)}}function jk(t,e,n){var r=Tr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(xv(t))Rv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,fn(a,o)){var l=e.interleaved;l===null?(i.next=i,Oh(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=cv(t,e,i,r),n!==null&&(i=gt(),dn(n,t,r,i),Pv(n,e,r))}}function xv(t){var e=t.alternate;return t===Ne||e!==null&&e===Ne}function Rv(t,e){ko=Bl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Pv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,yh(t,n)}}var Wl={readContext:Gt,useCallback:st,useContext:st,useEffect:st,useImperativeHandle:st,useInsertionEffect:st,useLayoutEffect:st,useMemo:st,useReducer:st,useRef:st,useState:st,useDebugValue:st,useDeferredValue:st,useTransition:st,useMutableSource:st,useSyncExternalStore:st,useId:st,unstable_isNewReconciler:!1},Uk={readContext:Gt,useCallback:function(t,e){return kn().memoizedState=[t,e===void 0?null:e],t},useContext:Gt,useEffect:Jp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ml(4194308,4,kv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ml(4194308,4,t,e)},useInsertionEffect:function(t,e){return ml(4,2,t,e)},useMemo:function(t,e){var n=kn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=kn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Lk.bind(null,Ne,t),[r.memoizedState,t]},useRef:function(t){var e=kn();return t={current:t},e.memoizedState=t},useState:Xp,useDebugValue:Bh,useDeferredValue:function(t){return kn().memoizedState=t},useTransition:function(){var t=Xp(!1),e=t[0];return t=Mk.bind(null,t[1]),kn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ne,i=kn();if(Ce){if(n===void 0)throw Error(A(407));n=n()}else{if(n=e(),Ye===null)throw Error(A(349));pi&30||pv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Jp(gv.bind(null,r,s,t),[t]),r.flags|=2048,Yo(9,mv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=kn(),e=Ye.identifierPrefix;if(Ce){var n=zn,r=Fn;n=(r&~(1<<32-un(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ko++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Dk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Fk={readContext:Gt,useCallback:Sv,useContext:Gt,useEffect:$h,useImperativeHandle:Cv,useInsertionEffect:wv,useLayoutEffect:Ev,useMemo:Iv,useReducer:Eu,useRef:yv,useState:function(){return Eu(qo)},useDebugValue:Bh,useDeferredValue:function(t){var e=Kt();return Tv(e,$e.memoizedState,t)},useTransition:function(){var t=Eu(qo)[0],e=Kt().memoizedState;return[t,e]},useMutableSource:hv,useSyncExternalStore:fv,useId:Nv,unstable_isNewReconciler:!1},zk={readContext:Gt,useCallback:Sv,useContext:Gt,useEffect:$h,useImperativeHandle:Cv,useInsertionEffect:wv,useLayoutEffect:Ev,useMemo:Iv,useReducer:ku,useRef:yv,useState:function(){return ku(qo)},useDebugValue:Bh,useDeferredValue:function(t){var e=Kt();return $e===null?e.memoizedState=t:Tv(e,$e.memoizedState,t)},useTransition:function(){var t=ku(qo)[0],e=Kt().memoizedState;return[t,e]},useMutableSource:hv,useSyncExternalStore:fv,useId:Nv,unstable_isNewReconciler:!1};function tn(t,e){if(t&&t.defaultProps){e=xe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ed(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:xe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var xc={isMounted:function(t){return(t=t._reactInternals)?Ti(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=gt(),i=Tr(t),s=Vn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Sr(t,s,i),e!==null&&(dn(e,t,i,r),fl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=gt(),i=Tr(t),s=Vn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Sr(t,s,i),e!==null&&(dn(e,t,i,r),fl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=gt(),r=Tr(t),i=Vn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Sr(t,i,r),e!==null&&(dn(e,t,r,n),fl(e,t,r))}};function Zp(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!$o(n,r)||!$o(i,s):!0}function bv(t,e,n){var r=!1,i=Or,s=e.contextType;return typeof s=="object"&&s!==null?s=Gt(s):(i=Nt(e)?hi:ct.current,r=e.contextTypes,s=(r=r!=null)?hs(t,i):Or),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=xc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function em(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&xc.enqueueReplaceState(e,e.state,null)}function kd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Dh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Gt(s):(s=Nt(e)?hi:ct.current,i.context=hs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ed(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&xc.enqueueReplaceState(i,i.state,null),zl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function gs(t,e){try{var n="",r=e;do n+=pE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Cu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Cd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var $k=typeof WeakMap=="function"?WeakMap:Map;function Av(t,e,n){n=Vn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Vl||(Vl=!0,Od=r),Cd(t,e)},n}function Ov(t,e,n){n=Vn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Cd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Cd(t,e),typeof r!="function"&&(Ir===null?Ir=new Set([this]):Ir.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function tm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new $k;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=tC.bind(null,t,e,n),e.then(t,t))}function nm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function rm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Vn(-1,1),e.tag=2,Sr(n,e,1))),n.lanes|=1),t)}var Bk=tr.ReactCurrentOwner,St=!1;function ft(t,e,n,r){e.child=t===null?lv(e,null,n,r):ps(e,t.child,n,r)}function im(t,e,n,r,i){n=n.render;var s=e.ref;return ss(e,i),r=Fh(t,e,n,r,s,i),n=zh(),t!==null&&!St?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Qn(t,e,i)):(Ce&&n&&Nh(e),e.flags|=1,ft(t,e,r,i),e.child)}function sm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Qh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Dv(t,e,s,r,i)):(t=yl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:$o,n(o,r)&&t.ref===e.ref)return Qn(t,e,i)}return e.flags|=1,t=Nr(s,r),t.ref=e.ref,t.return=e,e.child=t}function Dv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if($o(s,r)&&t.ref===e.ref)if(St=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(St=!0);else return e.lanes=t.lanes,Qn(t,e,i)}return Sd(t,e,n,r,i)}function Mv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(Ji,At),At|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ve(Ji,At),At|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ve(Ji,At),At|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ve(Ji,At),At|=r;return ft(t,e,i,n),e.child}function Lv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Sd(t,e,n,r,i){var s=Nt(n)?hi:ct.current;return s=hs(e,s),ss(e,i),n=Fh(t,e,n,r,s,i),r=zh(),t!==null&&!St?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Qn(t,e,i)):(Ce&&r&&Nh(e),e.flags|=1,ft(t,e,n,i),e.child)}function om(t,e,n,r,i){if(Nt(n)){var s=!0;Ml(e)}else s=!1;if(ss(e,i),e.stateNode===null)gl(t,e),bv(e,n,r),kd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Gt(c):(c=Nt(n)?hi:ct.current,c=hs(e,c));var p=n.getDerivedStateFromProps,d=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&em(e,o,r,c),cr=!1;var f=e.memoizedState;o.state=f,zl(e,r,o,i),l=e.memoizedState,a!==r||f!==l||Tt.current||cr?(typeof p=="function"&&(Ed(e,n,p,r),l=e.memoizedState),(a=cr||Zp(e,n,a,r,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,uv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:tn(e.type,a),o.props=c,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Gt(l):(l=Nt(n)?hi:ct.current,l=hs(e,l));var _=n.getDerivedStateFromProps;(p=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&em(e,o,r,l),cr=!1,f=e.memoizedState,o.state=f,zl(e,r,o,i);var w=e.memoizedState;a!==d||f!==w||Tt.current||cr?(typeof _=="function"&&(Ed(e,n,_,r),w=e.memoizedState),(c=cr||Zp(e,n,c,r,f,w,l)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=w),o.props=r,o.state=w,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Id(t,e,n,r,s,i)}function Id(t,e,n,r,i,s){Lv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Vp(e,n,!1),Qn(t,e,s);r=e.stateNode,Bk.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ps(e,t.child,null,s),e.child=ps(e,null,a,s)):ft(t,e,a,s),e.memoizedState=r.state,i&&Vp(e,n,!0),e.child}function jv(t){var e=t.stateNode;e.pendingContext?Hp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Hp(t,e.context,!1),Mh(t,e.containerInfo)}function am(t,e,n,r,i){return fs(),Rh(i),e.flags|=256,ft(t,e,n,r),e.child}var Td={dehydrated:null,treeContext:null,retryLane:0};function Nd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Uv(t,e,n){var r=e.pendingProps,i=Ie.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ve(Ie,i&1),t===null)return yd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=bc(o,r,0,null),t=ci(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Nd(n),e.memoizedState=Td,t):Wh(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Wk(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Nr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Nr(a,s):(s=ci(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Nd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Td,r}return s=t.child,t=s.sibling,r=Nr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Wh(t,e){return e=bc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ja(t,e,n,r){return r!==null&&Rh(r),ps(e,t.child,null,n),t=Wh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Wk(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Cu(Error(A(422))),Ja(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=bc({mode:"visible",children:r.children},i,0,null),s=ci(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ps(e,t.child,null,o),e.child.memoizedState=Nd(o),e.memoizedState=Td,s);if(!(e.mode&1))return Ja(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(A(419)),r=Cu(s,r,void 0),Ja(t,e,o,r)}if(a=(o&t.childLanes)!==0,St||a){if(r=Ye,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Yn(t,i),dn(r,t,i,-1))}return Yh(),r=Cu(Error(A(421))),Ja(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=nC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Dt=Cr(i.nextSibling),Lt=e,Ce=!0,sn=null,t!==null&&($t[Bt++]=Fn,$t[Bt++]=zn,$t[Bt++]=fi,Fn=t.id,zn=t.overflow,fi=e),e=Wh(e,r.children),e.flags|=4096,e)}function lm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),wd(t.return,e,n)}function Su(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Fv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ft(t,e,r.children,n),r=Ie.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&lm(t,n,e);else if(t.tag===19)lm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ve(Ie,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&$l(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Su(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&$l(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Su(e,!0,n,null,s);break;case"together":Su(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function gl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Qn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),mi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(A(153));if(e.child!==null){for(t=e.child,n=Nr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Nr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Hk(t,e,n){switch(e.tag){case 3:jv(e),fs();break;case 5:dv(e);break;case 1:Nt(e.type)&&Ml(e);break;case 4:Mh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ve(Ul,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ve(Ie,Ie.current&1),e.flags|=128,null):n&e.child.childLanes?Uv(t,e,n):(ve(Ie,Ie.current&1),t=Qn(t,e,n),t!==null?t.sibling:null);ve(Ie,Ie.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Fv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ve(Ie,Ie.current),r)break;return null;case 22:case 23:return e.lanes=0,Mv(t,e,n)}return Qn(t,e,n)}var zv,xd,$v,Bv;zv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xd=function(){};$v=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,si(Tn.current);var s=null;switch(n){case"input":i=Qu(t,i),r=Qu(t,r),s=[];break;case"select":i=xe({},i,{value:void 0}),r=xe({},r,{value:void 0}),s=[];break;case"textarea":i=Zu(t,i),r=Zu(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ol)}td(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Do.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Do.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&we("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Bv=function(t,e,n,r){n!==r&&(e.flags|=4)};function no(t,e){if(!Ce)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ot(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Vk(t,e,n){var r=e.pendingProps;switch(xh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ot(e),null;case 1:return Nt(e.type)&&Dl(),ot(e),null;case 3:return r=e.stateNode,ms(),Ee(Tt),Ee(ct),jh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Qa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,sn!==null&&(Ld(sn),sn=null))),xd(t,e),ot(e),null;case 5:Lh(e);var i=si(Go.current);if(n=e.type,t!==null&&e.stateNode!=null)$v(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(A(166));return ot(e),null}if(t=si(Tn.current),Qa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Cn]=e,r[Ho]=s,t=(e.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(i=0;i<po.length;i++)we(po[i],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":_p(r,s),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},we("invalid",r);break;case"textarea":yp(r,s),we("invalid",r)}td(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ya(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ya(r.textContent,a,t),i=["children",""+a]):Do.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&we("scroll",r)}switch(n){case"input":$a(r),vp(r,s,!0);break;case"textarea":$a(r),wp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ol)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=g_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Cn]=e,t[Ho]=r,zv(t,e,!1,!1),e.stateNode=t;e:{switch(o=nd(n,r),n){case"dialog":we("cancel",t),we("close",t),i=r;break;case"iframe":case"object":case"embed":we("load",t),i=r;break;case"video":case"audio":for(i=0;i<po.length;i++)we(po[i],t);i=r;break;case"source":we("error",t),i=r;break;case"img":case"image":case"link":we("error",t),we("load",t),i=r;break;case"details":we("toggle",t),i=r;break;case"input":_p(t,r),i=Qu(t,r),we("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=xe({},r,{value:void 0}),we("invalid",t);break;case"textarea":yp(t,r),i=Zu(t,r),we("invalid",t);break;default:i=r}td(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?y_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&__(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Mo(t,l):typeof l=="number"&&Mo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Do.hasOwnProperty(s)?l!=null&&s==="onScroll"&&we("scroll",t):l!=null&&fh(t,s,l,o))}switch(n){case"input":$a(t),vp(t,r,!1);break;case"textarea":$a(t),wp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ar(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ts(t,!!r.multiple,s,!1):r.defaultValue!=null&&ts(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ol)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ot(e),null;case 6:if(t&&e.stateNode!=null)Bv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(A(166));if(n=si(Go.current),si(Tn.current),Qa(e)){if(r=e.stateNode,n=e.memoizedProps,r[Cn]=e,(s=r.nodeValue!==n)&&(t=Lt,t!==null))switch(t.tag){case 3:Ya(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ya(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Cn]=e,e.stateNode=r}return ot(e),null;case 13:if(Ee(Ie),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ce&&Dt!==null&&e.mode&1&&!(e.flags&128))ov(),fs(),e.flags|=98560,s=!1;else if(s=Qa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(A(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(A(317));s[Cn]=e}else fs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ot(e),s=!1}else sn!==null&&(Ld(sn),sn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ie.current&1?We===0&&(We=3):Yh())),e.updateQueue!==null&&(e.flags|=4),ot(e),null);case 4:return ms(),xd(t,e),t===null&&Bo(e.stateNode.containerInfo),ot(e),null;case 10:return Ah(e.type._context),ot(e),null;case 17:return Nt(e.type)&&Dl(),ot(e),null;case 19:if(Ee(Ie),s=e.memoizedState,s===null)return ot(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)no(s,!1);else{if(We!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=$l(t),o!==null){for(e.flags|=128,no(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ve(Ie,Ie.current&1|2),e.child}t=t.sibling}s.tail!==null&&je()>_s&&(e.flags|=128,r=!0,no(s,!1),e.lanes=4194304)}else{if(!r)if(t=$l(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),no(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ce)return ot(e),null}else 2*je()-s.renderingStartTime>_s&&n!==1073741824&&(e.flags|=128,r=!0,no(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=je(),e.sibling=null,n=Ie.current,ve(Ie,r?n&1|2:n&1),e):(ot(e),null);case 22:case 23:return qh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?At&1073741824&&(ot(e),e.subtreeFlags&6&&(e.flags|=8192)):ot(e),null;case 24:return null;case 25:return null}throw Error(A(156,e.tag))}function Gk(t,e){switch(xh(e),e.tag){case 1:return Nt(e.type)&&Dl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ms(),Ee(Tt),Ee(ct),jh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Lh(e),null;case 13:if(Ee(Ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(A(340));fs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ee(Ie),null;case 4:return ms(),null;case 10:return Ah(e.type._context),null;case 22:case 23:return qh(),null;case 24:return null;default:return null}}var Za=!1,lt=!1,Kk=typeof WeakSet=="function"?WeakSet:Set,H=null;function Xi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Pe(t,e,r)}else n.current=null}function Rd(t,e,n){try{n()}catch(r){Pe(t,e,r)}}var cm=!1;function qk(t,e){if(hd=Pl,t=K_(),Th(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,p=0,d=t,f=null;t:for(;;){for(var _;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(_=d.firstChild)!==null;)f=d,d=_;for(;;){if(d===t)break t;if(f===n&&++c===i&&(a=o),f===s&&++p===r&&(l=o),(_=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=_}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(fd={focusedElem:t,selectionRange:n},Pl=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var w=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var S=w.memoizedProps,D=w.memoizedState,g=e.stateNode,m=g.getSnapshotBeforeUpdate(e.elementType===e.type?S:tn(e.type,S),D);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(C){Pe(e,e.return,C)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return w=cm,cm=!1,w}function Co(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Rd(e,n,s)}i=i.next}while(i!==r)}}function Rc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Pd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Wv(t){var e=t.alternate;e!==null&&(t.alternate=null,Wv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Cn],delete e[Ho],delete e[gd],delete e[Pk],delete e[bk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Hv(t){return t.tag===5||t.tag===3||t.tag===4}function um(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Hv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function bd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ol));else if(r!==4&&(t=t.child,t!==null))for(bd(t,e,n),t=t.sibling;t!==null;)bd(t,e,n),t=t.sibling}function Ad(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ad(t,e,n),t=t.sibling;t!==null;)Ad(t,e,n),t=t.sibling}var Je=null,nn=!1;function or(t,e,n){for(n=n.child;n!==null;)Vv(t,e,n),n=n.sibling}function Vv(t,e,n){if(In&&typeof In.onCommitFiberUnmount=="function")try{In.onCommitFiberUnmount(Ec,n)}catch{}switch(n.tag){case 5:lt||Xi(n,e);case 6:var r=Je,i=nn;Je=null,or(t,e,n),Je=r,nn=i,Je!==null&&(nn?(t=Je,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Je.removeChild(n.stateNode));break;case 18:Je!==null&&(nn?(t=Je,n=n.stateNode,t.nodeType===8?_u(t.parentNode,n):t.nodeType===1&&_u(t,n),Fo(t)):_u(Je,n.stateNode));break;case 4:r=Je,i=nn,Je=n.stateNode.containerInfo,nn=!0,or(t,e,n),Je=r,nn=i;break;case 0:case 11:case 14:case 15:if(!lt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Rd(n,e,o),i=i.next}while(i!==r)}or(t,e,n);break;case 1:if(!lt&&(Xi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Pe(n,e,a)}or(t,e,n);break;case 21:or(t,e,n);break;case 22:n.mode&1?(lt=(r=lt)||n.memoizedState!==null,or(t,e,n),lt=r):or(t,e,n);break;default:or(t,e,n)}}function dm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Kk),e.forEach(function(r){var i=rC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function en(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Je=a.stateNode,nn=!1;break e;case 3:Je=a.stateNode.containerInfo,nn=!0;break e;case 4:Je=a.stateNode.containerInfo,nn=!0;break e}a=a.return}if(Je===null)throw Error(A(160));Vv(s,o,i),Je=null,nn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){Pe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Gv(e,t),e=e.sibling}function Gv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(en(e,t),En(t),r&4){try{Co(3,t,t.return),Rc(3,t)}catch(S){Pe(t,t.return,S)}try{Co(5,t,t.return)}catch(S){Pe(t,t.return,S)}}break;case 1:en(e,t),En(t),r&512&&n!==null&&Xi(n,n.return);break;case 5:if(en(e,t),En(t),r&512&&n!==null&&Xi(n,n.return),t.flags&32){var i=t.stateNode;try{Mo(i,"")}catch(S){Pe(t,t.return,S)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&p_(i,s),nd(a,o);var c=nd(a,s);for(o=0;o<l.length;o+=2){var p=l[o],d=l[o+1];p==="style"?y_(i,d):p==="dangerouslySetInnerHTML"?__(i,d):p==="children"?Mo(i,d):fh(i,p,d,c)}switch(a){case"input":Xu(i,s);break;case"textarea":m_(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?ts(i,!!s.multiple,_,!1):f!==!!s.multiple&&(s.defaultValue!=null?ts(i,!!s.multiple,s.defaultValue,!0):ts(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ho]=s}catch(S){Pe(t,t.return,S)}}break;case 6:if(en(e,t),En(t),r&4){if(t.stateNode===null)throw Error(A(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(S){Pe(t,t.return,S)}}break;case 3:if(en(e,t),En(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fo(e.containerInfo)}catch(S){Pe(t,t.return,S)}break;case 4:en(e,t),En(t);break;case 13:en(e,t),En(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Gh=je())),r&4&&dm(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(lt=(c=lt)||p,en(e,t),lt=c):en(e,t),En(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!p&&t.mode&1)for(H=t,p=t.child;p!==null;){for(d=H=p;H!==null;){switch(f=H,_=f.child,f.tag){case 0:case 11:case 14:case 15:Co(4,f,f.return);break;case 1:Xi(f,f.return);var w=f.stateNode;if(typeof w.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,w.props=e.memoizedProps,w.state=e.memoizedState,w.componentWillUnmount()}catch(S){Pe(r,n,S)}}break;case 5:Xi(f,f.return);break;case 22:if(f.memoizedState!==null){fm(d);continue}}_!==null?(_.return=f,H=_):fm(d)}p=p.sibling}e:for(p=null,d=t;;){if(d.tag===5){if(p===null){p=d;try{i=d.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=v_("display",o))}catch(S){Pe(t,t.return,S)}}}else if(d.tag===6){if(p===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(S){Pe(t,t.return,S)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;p===d&&(p=null),d=d.return}p===d&&(p=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:en(e,t),En(t),r&4&&dm(t);break;case 21:break;default:en(e,t),En(t)}}function En(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Hv(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Mo(i,""),r.flags&=-33);var s=um(t);Ad(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=um(t);bd(t,a,o);break;default:throw Error(A(161))}}catch(l){Pe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Yk(t,e,n){H=t,Kv(t)}function Kv(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Za;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||lt;a=Za;var c=lt;if(Za=o,(lt=l)&&!c)for(H=i;H!==null;)o=H,l=o.child,o.tag===22&&o.memoizedState!==null?pm(i):l!==null?(l.return=o,H=l):pm(i);for(;s!==null;)H=s,Kv(s),s=s.sibling;H=i,Za=a,lt=c}hm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):hm(t)}}function hm(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:lt||Rc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!lt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:tn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Qp(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Qp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var d=p.dehydrated;d!==null&&Fo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}lt||e.flags&512&&Pd(e)}catch(f){Pe(e,e.return,f)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function fm(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function pm(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Rc(4,e)}catch(l){Pe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Pe(e,i,l)}}var s=e.return;try{Pd(e)}catch(l){Pe(e,s,l)}break;case 5:var o=e.return;try{Pd(e)}catch(l){Pe(e,o,l)}}}catch(l){Pe(e,e.return,l)}if(e===t){H=null;break}var a=e.sibling;if(a!==null){a.return=e.return,H=a;break}H=e.return}}var Qk=Math.ceil,Hl=tr.ReactCurrentDispatcher,Hh=tr.ReactCurrentOwner,Vt=tr.ReactCurrentBatchConfig,oe=0,Ye=null,Fe=null,Ze=0,At=0,Ji=$r(0),We=0,Qo=null,mi=0,Pc=0,Vh=0,So=null,kt=null,Gh=0,_s=1/0,Ln=null,Vl=!1,Od=null,Ir=null,el=!1,vr=null,Gl=0,Io=0,Dd=null,_l=-1,vl=0;function gt(){return oe&6?je():_l!==-1?_l:_l=je()}function Tr(t){return t.mode&1?oe&2&&Ze!==0?Ze&-Ze:Ok.transition!==null?(vl===0&&(vl=b_()),vl):(t=he,t!==0||(t=window.event,t=t===void 0?16:U_(t.type)),t):1}function dn(t,e,n,r){if(50<Io)throw Io=0,Dd=null,Error(A(185));la(t,n,r),(!(oe&2)||t!==Ye)&&(t===Ye&&(!(oe&2)&&(Pc|=n),We===4&&dr(t,Ze)),xt(t,r),n===1&&oe===0&&!(e.mode&1)&&(_s=je()+500,Tc&&Br()))}function xt(t,e){var n=t.callbackNode;OE(t,e);var r=Rl(t,t===Ye?Ze:0);if(r===0)n!==null&&Cp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Cp(n),e===1)t.tag===0?Ak(mm.bind(null,t)):rv(mm.bind(null,t)),xk(function(){!(oe&6)&&Br()}),n=null;else{switch(A_(r)){case 1:n=vh;break;case 4:n=R_;break;case 16:n=xl;break;case 536870912:n=P_;break;default:n=xl}n=ty(n,qv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function qv(t,e){if(_l=-1,vl=0,oe&6)throw Error(A(327));var n=t.callbackNode;if(os()&&t.callbackNode!==n)return null;var r=Rl(t,t===Ye?Ze:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Kl(t,r);else{e=r;var i=oe;oe|=2;var s=Qv();(Ye!==t||Ze!==e)&&(Ln=null,_s=je()+500,li(t,e));do try{Zk();break}catch(a){Yv(t,a)}while(!0);bh(),Hl.current=s,oe=i,Fe!==null?e=0:(Ye=null,Ze=0,e=We)}if(e!==0){if(e===2&&(i=ad(t),i!==0&&(r=i,e=Md(t,i))),e===1)throw n=Qo,li(t,0),dr(t,r),xt(t,je()),n;if(e===6)dr(t,r);else{if(i=t.current.alternate,!(r&30)&&!Xk(i)&&(e=Kl(t,r),e===2&&(s=ad(t),s!==0&&(r=s,e=Md(t,s))),e===1))throw n=Qo,li(t,0),dr(t,r),xt(t,je()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(A(345));case 2:ei(t,kt,Ln);break;case 3:if(dr(t,r),(r&130023424)===r&&(e=Gh+500-je(),10<e)){if(Rl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){gt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=md(ei.bind(null,t,kt,Ln),e);break}ei(t,kt,Ln);break;case 4:if(dr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-un(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=je()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Qk(r/1960))-r,10<r){t.timeoutHandle=md(ei.bind(null,t,kt,Ln),r);break}ei(t,kt,Ln);break;case 5:ei(t,kt,Ln);break;default:throw Error(A(329))}}}return xt(t,je()),t.callbackNode===n?qv.bind(null,t):null}function Md(t,e){var n=So;return t.current.memoizedState.isDehydrated&&(li(t,e).flags|=256),t=Kl(t,e),t!==2&&(e=kt,kt=n,e!==null&&Ld(e)),t}function Ld(t){kt===null?kt=t:kt.push.apply(kt,t)}function Xk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!fn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function dr(t,e){for(e&=~Vh,e&=~Pc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-un(e),r=1<<n;t[n]=-1,e&=~r}}function mm(t){if(oe&6)throw Error(A(327));os();var e=Rl(t,0);if(!(e&1))return xt(t,je()),null;var n=Kl(t,e);if(t.tag!==0&&n===2){var r=ad(t);r!==0&&(e=r,n=Md(t,r))}if(n===1)throw n=Qo,li(t,0),dr(t,e),xt(t,je()),n;if(n===6)throw Error(A(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ei(t,kt,Ln),xt(t,je()),null}function Kh(t,e){var n=oe;oe|=1;try{return t(e)}finally{oe=n,oe===0&&(_s=je()+500,Tc&&Br())}}function gi(t){vr!==null&&vr.tag===0&&!(oe&6)&&os();var e=oe;oe|=1;var n=Vt.transition,r=he;try{if(Vt.transition=null,he=1,t)return t()}finally{he=r,Vt.transition=n,oe=e,!(oe&6)&&Br()}}function qh(){At=Ji.current,Ee(Ji)}function li(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Nk(n)),Fe!==null)for(n=Fe.return;n!==null;){var r=n;switch(xh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Dl();break;case 3:ms(),Ee(Tt),Ee(ct),jh();break;case 5:Lh(r);break;case 4:ms();break;case 13:Ee(Ie);break;case 19:Ee(Ie);break;case 10:Ah(r.type._context);break;case 22:case 23:qh()}n=n.return}if(Ye=t,Fe=t=Nr(t.current,null),Ze=At=e,We=0,Qo=null,Vh=Pc=mi=0,kt=So=null,ii!==null){for(e=0;e<ii.length;e++)if(n=ii[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ii=null}return t}function Yv(t,e){do{var n=Fe;try{if(bh(),pl.current=Wl,Bl){for(var r=Ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Bl=!1}if(pi=0,Ge=$e=Ne=null,ko=!1,Ko=0,Hh.current=null,n===null||n.return===null){We=1,Qo=e,Fe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ze,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,p=a,d=p.tag;if(!(p.mode&1)&&(d===0||d===11||d===15)){var f=p.alternate;f?(p.updateQueue=f.updateQueue,p.memoizedState=f.memoizedState,p.lanes=f.lanes):(p.updateQueue=null,p.memoizedState=null)}var _=nm(o);if(_!==null){_.flags&=-257,rm(_,o,a,s,e),_.mode&1&&tm(s,c,e),e=_,l=c;var w=e.updateQueue;if(w===null){var S=new Set;S.add(l),e.updateQueue=S}else w.add(l);break e}else{if(!(e&1)){tm(s,c,e),Yh();break e}l=Error(A(426))}}else if(Ce&&a.mode&1){var D=nm(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),rm(D,o,a,s,e),Rh(gs(l,a));break e}}s=l=gs(l,a),We!==4&&(We=2),So===null?So=[s]:So.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=Av(s,l,e);Yp(s,g);break e;case 1:a=l;var m=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Ir===null||!Ir.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var C=Ov(s,a,e);Yp(s,C);break e}}s=s.return}while(s!==null)}Jv(n)}catch(j){e=j,Fe===n&&n!==null&&(Fe=n=n.return);continue}break}while(!0)}function Qv(){var t=Hl.current;return Hl.current=Wl,t===null?Wl:t}function Yh(){(We===0||We===3||We===2)&&(We=4),Ye===null||!(mi&268435455)&&!(Pc&268435455)||dr(Ye,Ze)}function Kl(t,e){var n=oe;oe|=2;var r=Qv();(Ye!==t||Ze!==e)&&(Ln=null,li(t,e));do try{Jk();break}catch(i){Yv(t,i)}while(!0);if(bh(),oe=n,Hl.current=r,Fe!==null)throw Error(A(261));return Ye=null,Ze=0,We}function Jk(){for(;Fe!==null;)Xv(Fe)}function Zk(){for(;Fe!==null&&!SE();)Xv(Fe)}function Xv(t){var e=ey(t.alternate,t,At);t.memoizedProps=t.pendingProps,e===null?Jv(t):Fe=e,Hh.current=null}function Jv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Gk(n,e),n!==null){n.flags&=32767,Fe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{We=6,Fe=null;return}}else if(n=Vk(n,e,At),n!==null){Fe=n;return}if(e=e.sibling,e!==null){Fe=e;return}Fe=e=t}while(e!==null);We===0&&(We=5)}function ei(t,e,n){var r=he,i=Vt.transition;try{Vt.transition=null,he=1,eC(t,e,n,r)}finally{Vt.transition=i,he=r}return null}function eC(t,e,n,r){do os();while(vr!==null);if(oe&6)throw Error(A(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(A(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(DE(t,s),t===Ye&&(Fe=Ye=null,Ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||el||(el=!0,ty(xl,function(){return os(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Vt.transition,Vt.transition=null;var o=he;he=1;var a=oe;oe|=4,Hh.current=null,qk(t,n),Gv(n,t),wk(fd),Pl=!!hd,fd=hd=null,t.current=n,Yk(n),IE(),oe=a,he=o,Vt.transition=s}else t.current=n;if(el&&(el=!1,vr=t,Gl=i),s=t.pendingLanes,s===0&&(Ir=null),xE(n.stateNode),xt(t,je()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Vl)throw Vl=!1,t=Od,Od=null,t;return Gl&1&&t.tag!==0&&os(),s=t.pendingLanes,s&1?t===Dd?Io++:(Io=0,Dd=t):Io=0,Br(),null}function os(){if(vr!==null){var t=A_(Gl),e=Vt.transition,n=he;try{if(Vt.transition=null,he=16>t?16:t,vr===null)var r=!1;else{if(t=vr,vr=null,Gl=0,oe&6)throw Error(A(331));var i=oe;for(oe|=4,H=t.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(H=c;H!==null;){var p=H;switch(p.tag){case 0:case 11:case 15:Co(8,p,s)}var d=p.child;if(d!==null)d.return=p,H=d;else for(;H!==null;){p=H;var f=p.sibling,_=p.return;if(Wv(p),p===c){H=null;break}if(f!==null){f.return=_,H=f;break}H=_}}}var w=s.alternate;if(w!==null){var S=w.child;if(S!==null){w.child=null;do{var D=S.sibling;S.sibling=null,S=D}while(S!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Co(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,H=g;break e}H=s.return}}var m=t.current;for(H=m;H!==null;){o=H;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,H=v;else e:for(o=m;H!==null;){if(a=H,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Rc(9,a)}}catch(j){Pe(a,a.return,j)}if(a===o){H=null;break e}var C=a.sibling;if(C!==null){C.return=a.return,H=C;break e}H=a.return}}if(oe=i,Br(),In&&typeof In.onPostCommitFiberRoot=="function")try{In.onPostCommitFiberRoot(Ec,t)}catch{}r=!0}return r}finally{he=n,Vt.transition=e}}return!1}function gm(t,e,n){e=gs(n,e),e=Av(t,e,1),t=Sr(t,e,1),e=gt(),t!==null&&(la(t,1,e),xt(t,e))}function Pe(t,e,n){if(t.tag===3)gm(t,t,n);else for(;e!==null;){if(e.tag===3){gm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ir===null||!Ir.has(r))){t=gs(n,t),t=Ov(e,t,1),e=Sr(e,t,1),t=gt(),e!==null&&(la(e,1,t),xt(e,t));break}}e=e.return}}function tC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=gt(),t.pingedLanes|=t.suspendedLanes&n,Ye===t&&(Ze&n)===n&&(We===4||We===3&&(Ze&130023424)===Ze&&500>je()-Gh?li(t,0):Vh|=n),xt(t,e)}function Zv(t,e){e===0&&(t.mode&1?(e=Ha,Ha<<=1,!(Ha&130023424)&&(Ha=4194304)):e=1);var n=gt();t=Yn(t,e),t!==null&&(la(t,e,n),xt(t,n))}function nC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Zv(t,n)}function rC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(e),Zv(t,n)}var ey;ey=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Tt.current)St=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return St=!1,Hk(t,e,n);St=!!(t.flags&131072)}else St=!1,Ce&&e.flags&1048576&&iv(e,jl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;gl(t,e),t=e.pendingProps;var i=hs(e,ct.current);ss(e,n),i=Fh(null,e,r,t,i,n);var s=zh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Nt(r)?(s=!0,Ml(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Dh(e),i.updater=xc,e.stateNode=i,i._reactInternals=e,kd(e,r,t,n),e=Id(null,e,r,!0,s,n)):(e.tag=0,Ce&&s&&Nh(e),ft(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(gl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=sC(r),t=tn(r,t),i){case 0:e=Sd(null,e,r,t,n);break e;case 1:e=om(null,e,r,t,n);break e;case 11:e=im(null,e,r,t,n);break e;case 14:e=sm(null,e,r,tn(r.type,t),n);break e}throw Error(A(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tn(r,i),Sd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tn(r,i),om(t,e,r,i,n);case 3:e:{if(jv(e),t===null)throw Error(A(387));r=e.pendingProps,s=e.memoizedState,i=s.element,uv(t,e),zl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=gs(Error(A(423)),e),e=am(t,e,r,n,i);break e}else if(r!==i){i=gs(Error(A(424)),e),e=am(t,e,r,n,i);break e}else for(Dt=Cr(e.stateNode.containerInfo.firstChild),Lt=e,Ce=!0,sn=null,n=lv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fs(),r===i){e=Qn(t,e,n);break e}ft(t,e,r,n)}e=e.child}return e;case 5:return dv(e),t===null&&yd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,pd(r,i)?o=null:s!==null&&pd(r,s)&&(e.flags|=32),Lv(t,e),ft(t,e,o,n),e.child;case 6:return t===null&&yd(e),null;case 13:return Uv(t,e,n);case 4:return Mh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ps(e,null,r,n):ft(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tn(r,i),im(t,e,r,i,n);case 7:return ft(t,e,e.pendingProps,n),e.child;case 8:return ft(t,e,e.pendingProps.children,n),e.child;case 12:return ft(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ve(Ul,r._currentValue),r._currentValue=o,s!==null)if(fn(s.value,o)){if(s.children===i.children&&!Tt.current){e=Qn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Vn(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?l.next=l:(l.next=p.next,p.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),wd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(A(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),wd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ft(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ss(e,n),i=Gt(i),r=r(i),e.flags|=1,ft(t,e,r,n),e.child;case 14:return r=e.type,i=tn(r,e.pendingProps),i=tn(r.type,i),sm(t,e,r,i,n);case 15:return Dv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tn(r,i),gl(t,e),e.tag=1,Nt(r)?(t=!0,Ml(e)):t=!1,ss(e,n),bv(e,r,i),kd(e,r,i,n),Id(null,e,r,!0,t,n);case 19:return Fv(t,e,n);case 22:return Mv(t,e,n)}throw Error(A(156,e.tag))};function ty(t,e){return x_(t,e)}function iC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wt(t,e,n,r){return new iC(t,e,n,r)}function Qh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sC(t){if(typeof t=="function")return Qh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===mh)return 11;if(t===gh)return 14}return 2}function Nr(t,e){var n=t.alternate;return n===null?(n=Wt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function yl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Qh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Bi:return ci(n.children,i,s,e);case ph:o=8,i|=8;break;case Gu:return t=Wt(12,n,e,i|2),t.elementType=Gu,t.lanes=s,t;case Ku:return t=Wt(13,n,e,i),t.elementType=Ku,t.lanes=s,t;case qu:return t=Wt(19,n,e,i),t.elementType=qu,t.lanes=s,t;case d_:return bc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case c_:o=10;break e;case u_:o=9;break e;case mh:o=11;break e;case gh:o=14;break e;case lr:o=16,r=null;break e}throw Error(A(130,t==null?t:typeof t,""))}return e=Wt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ci(t,e,n,r){return t=Wt(7,t,r,e),t.lanes=n,t}function bc(t,e,n,r){return t=Wt(22,t,r,e),t.elementType=d_,t.lanes=n,t.stateNode={isHidden:!1},t}function Iu(t,e,n){return t=Wt(6,t,null,e),t.lanes=n,t}function Tu(t,e,n){return e=Wt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function oC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ou(0),this.expirationTimes=ou(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ou(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Xh(t,e,n,r,i,s,o,a,l){return t=new oC(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Wt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Dh(s),t}function aC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$i,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function ny(t){if(!t)return Or;t=t._reactInternals;e:{if(Ti(t)!==t||t.tag!==1)throw Error(A(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Nt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(A(171))}if(t.tag===1){var n=t.type;if(Nt(n))return nv(t,n,e)}return e}function ry(t,e,n,r,i,s,o,a,l){return t=Xh(n,r,!0,t,i,s,o,a,l),t.context=ny(null),n=t.current,r=gt(),i=Tr(n),s=Vn(r,i),s.callback=e??null,Sr(n,s,i),t.current.lanes=i,la(t,i,r),xt(t,r),t}function Ac(t,e,n,r){var i=e.current,s=gt(),o=Tr(i);return n=ny(n),e.context===null?e.context=n:e.pendingContext=n,e=Vn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Sr(i,e,o),t!==null&&(dn(t,i,o,s),fl(t,i,o)),o}function ql(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function _m(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Jh(t,e){_m(t,e),(t=t.alternate)&&_m(t,e)}function lC(){return null}var iy=typeof reportError=="function"?reportError:function(t){console.error(t)};function Zh(t){this._internalRoot=t}Oc.prototype.render=Zh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(A(409));Ac(t,e,null,null)};Oc.prototype.unmount=Zh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;gi(function(){Ac(null,t,null,null)}),e[qn]=null}};function Oc(t){this._internalRoot=t}Oc.prototype.unstable_scheduleHydration=function(t){if(t){var e=M_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ur.length&&e!==0&&e<ur[n].priority;n++);ur.splice(n,0,t),n===0&&j_(t)}};function ef(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Dc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function vm(){}function cC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=ql(o);s.call(c)}}var o=ry(e,r,t,0,null,!1,!1,"",vm);return t._reactRootContainer=o,t[qn]=o.current,Bo(t.nodeType===8?t.parentNode:t),gi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=ql(l);a.call(c)}}var l=Xh(t,0,!1,null,null,!1,!1,"",vm);return t._reactRootContainer=l,t[qn]=l.current,Bo(t.nodeType===8?t.parentNode:t),gi(function(){Ac(e,l,n,r)}),l}function Mc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=ql(o);a.call(l)}}Ac(e,o,t,i)}else o=cC(n,e,t,i,r);return ql(o)}O_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=fo(e.pendingLanes);n!==0&&(yh(e,n|1),xt(e,je()),!(oe&6)&&(_s=je()+500,Br()))}break;case 13:gi(function(){var r=Yn(t,1);if(r!==null){var i=gt();dn(r,t,1,i)}}),Jh(t,1)}};wh=function(t){if(t.tag===13){var e=Yn(t,134217728);if(e!==null){var n=gt();dn(e,t,134217728,n)}Jh(t,134217728)}};D_=function(t){if(t.tag===13){var e=Tr(t),n=Yn(t,e);if(n!==null){var r=gt();dn(n,t,e,r)}Jh(t,e)}};M_=function(){return he};L_=function(t,e){var n=he;try{return he=t,e()}finally{he=n}};id=function(t,e,n){switch(e){case"input":if(Xu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ic(r);if(!i)throw Error(A(90));f_(r),Xu(r,i)}}}break;case"textarea":m_(t,n);break;case"select":e=n.value,e!=null&&ts(t,!!n.multiple,e,!1)}};k_=Kh;C_=gi;var uC={usingClientEntryPoint:!1,Events:[ua,Gi,Ic,w_,E_,Kh]},ro={findFiberByHostInstance:ri,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},dC={bundleType:ro.bundleType,version:ro.version,rendererPackageName:ro.rendererPackageName,rendererConfig:ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=T_(t),t===null?null:t.stateNode},findFiberByHostInstance:ro.findFiberByHostInstance||lC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tl.isDisabled&&tl.supportsFiber)try{Ec=tl.inject(dC),In=tl}catch{}}Ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uC;Ut.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ef(e))throw Error(A(200));return aC(t,e,null,n)};Ut.createRoot=function(t,e){if(!ef(t))throw Error(A(299));var n=!1,r="",i=iy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Xh(t,1,!1,null,null,n,!1,r,i),t[qn]=e.current,Bo(t.nodeType===8?t.parentNode:t),new Zh(e)};Ut.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(A(188)):(t=Object.keys(t).join(","),Error(A(268,t)));return t=T_(e),t=t===null?null:t.stateNode,t};Ut.flushSync=function(t){return gi(t)};Ut.hydrate=function(t,e,n){if(!Dc(e))throw Error(A(200));return Mc(null,t,e,!0,n)};Ut.hydrateRoot=function(t,e,n){if(!ef(t))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=iy;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=ry(e,null,t,1,n??null,i,!1,s,o),t[qn]=e.current,Bo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Oc(e)};Ut.render=function(t,e,n){if(!Dc(e))throw Error(A(200));return Mc(null,t,e,!1,n)};Ut.unmountComponentAtNode=function(t){if(!Dc(t))throw Error(A(40));return t._reactRootContainer?(gi(function(){Mc(null,null,t,!1,function(){t._reactRootContainer=null,t[qn]=null})}),!0):!1};Ut.unstable_batchedUpdates=Kh;Ut.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Dc(n))throw Error(A(200));if(t==null||t._reactInternals===void 0)throw Error(A(38));return Mc(t,e,n,!1,r)};Ut.version="18.3.1-next-f1338f8080-20240426";function sy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sy)}catch(t){console.error(t)}}sy(),s_.exports=Ut;var hC=s_.exports,ym=hC;Hu.createRoot=ym.createRoot,Hu.hydrateRoot=ym.hydrateRoot;const fC=()=>{};var wm={};/**
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
 */const oy={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const O=function(t,e){if(!t)throw Ps(e)},Ps=function(t){return new Error("Firebase Database ("+oy.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const ay=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},pC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},tf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,p=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(f=64)),r.push(n[p],n[d],n[f],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ay(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):pC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||d==null)throw new mC;const f=s<<2|a>>4;if(r.push(f),c!==64){const _=a<<4&240|c>>2;if(r.push(_),d!==64){const w=c<<6&192|d;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class mC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ly=function(t){const e=ay(t);return tf.encodeByteArray(e,!0)},Yl=function(t){return ly(t).replace(/\./g,"")},Ql=function(t){try{return tf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function gC(t){return cy(void 0,t)}function cy(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!_C(n)||(t[n]=cy(t[n],e[n]));return t}function _C(t){return t!=="__proto__"}/**
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
 */function vC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const yC=()=>vC().__FIREBASE_DEFAULTS__,wC=()=>{if(typeof process>"u"||typeof wm>"u")return;const t=wm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},EC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ql(t[1]);return e&&JSON.parse(e)},nf=()=>{try{return fC()||yC()||wC()||EC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},uy=t=>{var e,n;return(n=(e=nf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},dy=t=>{const e=uy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},hy=()=>{var t;return(t=nf())===null||t===void 0?void 0:t.config},fy=t=>{var e;return(e=nf())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Sn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Wr(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function rf(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function py(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Yl(JSON.stringify(n)),Yl(JSON.stringify(o)),""].join(".")}const To={};function kC(){const t={prod:[],emulator:[]};for(const e of Object.keys(To))To[e]?t.emulator.push(e):t.prod.push(e);return t}function CC(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Em=!1;function sf(t,e){if(typeof window>"u"||typeof document>"u"||!Wr(window.location.host)||To[t]===e||To[t]||Em)return;To[t]=e;function n(f){return`__firebase__banner__${f}`}const r="__firebase__banner",s=kC().prod.length>0;function o(){const f=document.getElementById(r);f&&f.remove()}function a(f){f.style.display="flex",f.style.background="#7faaf0",f.style.position="fixed",f.style.bottom="5px",f.style.left="5px",f.style.padding=".5em",f.style.borderRadius="5px",f.style.alignItems="center"}function l(f,_){f.setAttribute("width","24"),f.setAttribute("id",_),f.setAttribute("height","24"),f.setAttribute("viewBox","0 0 24 24"),f.setAttribute("fill","none"),f.style.marginLeft="-6px"}function c(){const f=document.createElement("span");return f.style.cursor="pointer",f.style.marginLeft="16px",f.style.fontSize="24px",f.innerHTML=" &times;",f.onclick=()=>{Em=!0,o()},f}function p(f,_){f.setAttribute("id",_),f.innerText="Learn more",f.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",f.setAttribute("target","__blank"),f.style.paddingLeft="5px",f.style.textDecoration="underline"}function d(){const f=CC(r),_=n("text"),w=document.getElementById(_)||document.createElement("span"),S=n("learnmore"),D=document.getElementById(S)||document.createElement("a"),g=n("preprendIcon"),m=document.getElementById(g)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(f.created){const v=f.element;a(v),p(D,S);const C=c();l(m,g),v.append(m,w,D,C),document.body.appendChild(v)}s?(w.innerText="Preview backend disconnected.",m.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,w.innerText="Preview backend running in this workspace."),w.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
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
 */function vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function of(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(vt())}function SC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function IC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function my(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function TC(){const t=vt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function NC(){return oy.NODE_ADMIN===!0}function xC(){try{return typeof indexedDB=="object"}catch{return!1}}function RC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const PC="FirebaseError";class nr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=PC,Object.setPrototypeOf(this,nr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ha.prototype.create)}}class ha{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?bC(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new nr(i,a,r)}}function bC(t,e){return t.replace(AC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const AC=/\{\$([^}]+)}/g;/**
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
 */function Xo(t){return JSON.parse(t)}function Be(t){return JSON.stringify(t)}/**
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
 */const gy=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Xo(Ql(s[0])||""),n=Xo(Ql(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},OC=function(t){const e=gy(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},DC=function(t){const e=gy(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function bn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function vs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Xl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Jl(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function _i(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(km(s)&&km(o)){if(!_i(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function km(t){return t!==null&&typeof t=="object"}/**
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
 */function bs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function mo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function go(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class MC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,p;for(let d=0;d<80;d++){d<40?d<20?(c=a^s&(o^a),p=1518500249):(c=s^o^a,p=1859775393):d<60?(c=s&o|a&(s|o),p=2400959708):(c=s^o^a,p=3395469782);const f=(i<<5|i>>>27)+c+l+p+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function LC(t,e){const n=new jC(t,e);return n.subscribe.bind(n)}class jC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");UC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Nu),i.error===void 0&&(i.error=Nu),i.complete===void 0&&(i.complete=Nu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function UC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Nu(){}function ys(t,e){return`${t} failed: ${e} argument `}/**
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
 */const FC=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,O(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Lc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function ke(t){return t&&t._delegate?t._delegate:t}class Dr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ti="[DEFAULT]";/**
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
 */class zC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Sn;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(BC(e))try{this.getOrInitializeService({instanceIdentifier:ti})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ti){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ti){return this.instances.has(e)}getOptions(e=ti){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:$C(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ti){return this.component?this.component.multipleInstances?e:ti:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $C(t){return t===ti?void 0:t}function BC(t){return t.instantiationMode==="EAGER"}/**
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
 */class WC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new zC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const HC={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},VC=pe.INFO,GC={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},KC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=GC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class af{constructor(e){this.name=e,this._logLevel=VC,this._logHandler=KC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?HC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const qC=(t,e)=>e.some(n=>t instanceof n);let Cm,Sm;function YC(){return Cm||(Cm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function QC(){return Sm||(Sm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _y=new WeakMap,jd=new WeakMap,vy=new WeakMap,xu=new WeakMap,lf=new WeakMap;function XC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(xr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&_y.set(n,t)}).catch(()=>{}),lf.set(e,t),e}function JC(t){if(jd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});jd.set(t,e)}let Ud={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return jd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||vy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return xr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ZC(t){Ud=t(Ud)}function eS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ru(this),e,...n);return vy.set(r,e.sort?e.sort():[e]),xr(r)}:QC().includes(t)?function(...e){return t.apply(Ru(this),e),xr(_y.get(this))}:function(...e){return xr(t.apply(Ru(this),e))}}function tS(t){return typeof t=="function"?eS(t):(t instanceof IDBTransaction&&JC(t),qC(t,YC())?new Proxy(t,Ud):t)}function xr(t){if(t instanceof IDBRequest)return XC(t);if(xu.has(t))return xu.get(t);const e=tS(t);return e!==t&&(xu.set(t,e),lf.set(e,t)),e}const Ru=t=>lf.get(t);function nS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=xr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(xr(o.result),l.oldVersion,l.newVersion,xr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const rS=["get","getKey","getAll","getAllKeys","count"],iS=["put","add","delete","clear"],Pu=new Map;function Im(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Pu.get(e))return Pu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=iS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||rS.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Pu.set(e,s),s}ZC(t=>({...t,get:(e,n,r)=>Im(e,n)||t.get(e,n,r),has:(e,n)=>!!Im(e,n)||t.has(e,n)}));/**
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
 */class sS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(oS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function oS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Fd="@firebase/app",Tm="0.13.2";/**
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
 */const Xn=new af("@firebase/app"),aS="@firebase/app-compat",lS="@firebase/analytics-compat",cS="@firebase/analytics",uS="@firebase/app-check-compat",dS="@firebase/app-check",hS="@firebase/auth",fS="@firebase/auth-compat",pS="@firebase/database",mS="@firebase/data-connect",gS="@firebase/database-compat",_S="@firebase/functions",vS="@firebase/functions-compat",yS="@firebase/installations",wS="@firebase/installations-compat",ES="@firebase/messaging",kS="@firebase/messaging-compat",CS="@firebase/performance",SS="@firebase/performance-compat",IS="@firebase/remote-config",TS="@firebase/remote-config-compat",NS="@firebase/storage",xS="@firebase/storage-compat",RS="@firebase/firestore",PS="@firebase/ai",bS="@firebase/firestore-compat",AS="firebase",OS="11.10.0";/**
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
 */const zd="[DEFAULT]",DS={[Fd]:"fire-core",[aS]:"fire-core-compat",[cS]:"fire-analytics",[lS]:"fire-analytics-compat",[dS]:"fire-app-check",[uS]:"fire-app-check-compat",[hS]:"fire-auth",[fS]:"fire-auth-compat",[pS]:"fire-rtdb",[mS]:"fire-data-connect",[gS]:"fire-rtdb-compat",[_S]:"fire-fn",[vS]:"fire-fn-compat",[yS]:"fire-iid",[wS]:"fire-iid-compat",[ES]:"fire-fcm",[kS]:"fire-fcm-compat",[CS]:"fire-perf",[SS]:"fire-perf-compat",[IS]:"fire-rc",[TS]:"fire-rc-compat",[NS]:"fire-gcs",[xS]:"fire-gcs-compat",[RS]:"fire-fst",[bS]:"fire-fst-compat",[PS]:"fire-vertex","fire-js":"fire-js",[AS]:"fire-js-all"};/**
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
 */const Zl=new Map,MS=new Map,$d=new Map;function Nm(t,e){try{t.container.addComponent(e)}catch(n){Xn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function vi(t){const e=t.name;if($d.has(e))return Xn.debug(`There were multiple attempts to register component ${e}.`),!1;$d.set(e,t);for(const n of Zl.values())Nm(n,t);for(const n of MS.values())Nm(n,t);return!0}function jc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ct(t){return t==null?!1:t.settings!==void 0}/**
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
 */const LS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Rr=new ha("app","Firebase",LS);/**
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
 */class jS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Dr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ni=OS;function yy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:zd,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw Rr.create("bad-app-name",{appName:String(i)});if(n||(n=hy()),!n)throw Rr.create("no-options");const s=Zl.get(i);if(s){if(_i(n,s.options)&&_i(r,s.config))return s;throw Rr.create("duplicate-app",{appName:i})}const o=new WC(i);for(const l of $d.values())o.addComponent(l);const a=new jS(n,r,o);return Zl.set(i,a),a}function cf(t=zd){const e=Zl.get(t);if(!e&&t===zd&&hy())return yy();if(!e)throw Rr.create("no-app",{appName:t});return e}function Nn(t,e,n){var r;let i=(r=DS[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xn.warn(a.join(" "));return}vi(new Dr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const US="firebase-heartbeat-database",FS=1,Jo="firebase-heartbeat-store";let bu=null;function wy(){return bu||(bu=nS(US,FS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Jo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Rr.create("idb-open",{originalErrorMessage:t.message})})),bu}async function zS(t){try{const n=(await wy()).transaction(Jo),r=await n.objectStore(Jo).get(Ey(t));return await n.done,r}catch(e){if(e instanceof nr)Xn.warn(e.message);else{const n=Rr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Xn.warn(n.message)}}}async function xm(t,e){try{const r=(await wy()).transaction(Jo,"readwrite");await r.objectStore(Jo).put(e,Ey(t)),await r.done}catch(n){if(n instanceof nr)Xn.warn(n.message);else{const r=Rr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Xn.warn(r.message)}}}function Ey(t){return`${t.name}!${t.options.appId}`}/**
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
 */const $S=1024,BS=30;class WS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new VS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Rm();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>BS){const o=GS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Xn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Rm(),{heartbeatsToSend:r,unsentEntries:i}=HS(this._heartbeatsCache.heartbeats),s=Yl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Xn.warn(n),""}}}function Rm(){return new Date().toISOString().substring(0,10)}function HS(t,e=$S){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Pm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Pm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class VS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xC()?RC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await zS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return xm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return xm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Pm(t){return Yl(JSON.stringify({version:2,heartbeats:t})).length}function GS(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function KS(t){vi(new Dr("platform-logger",e=>new sS(e),"PRIVATE")),vi(new Dr("heartbeat",e=>new WS(e),"PRIVATE")),Nn(Fd,Tm,t),Nn(Fd,Tm,"esm2017"),Nn("fire-js","")}KS("");var bm={};const Am="@firebase/database",Om="1.0.20";/**
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
 */let ky="";function qS(t){ky=t}/**
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
 */class YS{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Be(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Xo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class QS{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return bn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Cy=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new YS(e)}}catch{}return new QS},oi=Cy("localStorage"),XS=Cy("sessionStorage");/**
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
 */const as=new af("@firebase/database"),JS=function(){let t=1;return function(){return t++}}(),Sy=function(t){const e=FC(t),n=new MC;n.update(e);const r=n.digest();return tf.encodeByteArray(r)},fa=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=fa.apply(null,r):typeof r=="object"?e+=Be(r):e+=r,e+=" "}return e};let No=null,Dm=!0;const ZS=function(t,e){O(!0,"Can't turn on custom loggers persistently."),as.logLevel=pe.VERBOSE,No=as.log.bind(as)},qe=function(...t){if(Dm===!0&&(Dm=!1,No===null&&XS.get("logging_enabled")===!0&&ZS()),No){const e=fa.apply(null,t);No(e)}},pa=function(t){return function(...e){qe(t,...e)}},Bd=function(...t){const e="FIREBASE INTERNAL ERROR: "+fa(...t);as.error(e)},Jn=function(...t){const e=`FIREBASE FATAL ERROR: ${fa(...t)}`;throw as.error(e),new Error(e)},_t=function(...t){const e="FIREBASE WARNING: "+fa(...t);as.warn(e)},eI=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&_t("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Uc=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},tI=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},yi="[MIN_NAME]",Mr="[MAX_NAME]",xi=function(t,e){if(t===e)return 0;if(t===yi||e===Mr)return-1;if(e===yi||t===Mr)return 1;{const n=Mm(t),r=Mm(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},nI=function(t,e){return t===e?0:t<e?-1:1},io=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Be(e))},uf=function(t){if(typeof t!="object"||t===null)return Be(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Be(e[r]),n+=":",n+=uf(t[e[r]]);return n+="}",n},Iy=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Qe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Ty=function(t){O(!Uc(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const p=c.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(p.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},rI=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},iI=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function sI(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const oI=new RegExp("^-?(0*)\\d{1,10}$"),aI=-2147483648,lI=2147483647,Mm=function(t){if(oI.test(t)){const e=Number(t);if(e>=aI&&e<=lI)return e}return null},As=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw _t("Exception was thrown by user callback.",n),e},Math.floor(0))}},cI=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},xo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class uI{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Ct(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){_t(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class dI{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(qe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',_t(e)}}class wl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}wl.OWNER="owner";/**
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
 */const df="5",Ny="v",xy="s",Ry="r",Py="f",by=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ay="ls",Oy="p",Wd="ac",Dy="websocket",My="long_polling";/**
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
 */class Ly{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1,c=null){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=oi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&oi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function hI(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function jy(t,e,n){O(typeof e=="string","typeof type must == string"),O(typeof n=="object","typeof params must == object");let r;if(e===Dy)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===My)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);hI(t)&&(n.ns=t.namespace);const i=[];return Qe(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class fI{constructor(){this.counters_={}}incrementCounter(e,n=1){bn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return gC(this.counters_)}}/**
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
 */const Au={},Ou={};function hf(t){const e=t.toString();return Au[e]||(Au[e]=new fI),Au[e]}function pI(t,e){const n=t.toString();return Ou[n]||(Ou[n]=e()),Ou[n]}/**
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
 */class mI{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&As(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Lm="start",gI="close",_I="pLPCommand",vI="pRTLPCB",Uy="id",Fy="pw",zy="ser",yI="cb",wI="seg",EI="ts",kI="d",CI="dframe",$y=1870,By=30,SI=$y-By,II=25e3,TI=3e4;class Zi{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=pa(e),this.stats_=hf(n),this.urlFn=l=>(this.appCheckToken&&(l[Wd]=this.appCheckToken),jy(n,My,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new mI(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(TI)),tI(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ff((...s)=>{const[o,a,l,c,p]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Lm)this.id=a,this.password=l;else if(o===gI)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Lm]="t",r[zy]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[yI]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Ny]=df,this.transportSessionId&&(r[xy]=this.transportSessionId),this.lastSessionId&&(r[Ay]=this.lastSessionId),this.applicationId&&(r[Oy]=this.applicationId),this.appCheckToken&&(r[Wd]=this.appCheckToken),typeof location<"u"&&location.hostname&&by.test(location.hostname)&&(r[Ry]=Py);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Zi.forceAllow_=!0}static forceDisallow(){Zi.forceDisallow_=!0}static isAvailable(){return Zi.forceAllow_?!0:!Zi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!rI()&&!iI()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Be(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=ly(n),i=Iy(r,SI);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[CI]="t",r[Uy]=e,r[Fy]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Be(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ff{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=JS(),window[_I+this.uniqueCallbackIdentifier]=e,window[vI+this.uniqueCallbackIdentifier]=n,this.myIFrame=ff.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){qe("frame writing exception"),a.stack&&qe(a.stack),qe(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||qe("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Uy]=this.myID,e[Fy]=this.myPW,e[zy]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+By+r.length<=$y;){const o=this.pendingSegs.shift();r=r+"&"+wI+i+"="+o.seg+"&"+EI+i+"="+o.ts+"&"+kI+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(II)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{qe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const NI=16384,xI=45e3;let ec=null;typeof MozWebSocket<"u"?ec=MozWebSocket:typeof WebSocket<"u"&&(ec=WebSocket);class on{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=pa(this.connId),this.stats_=hf(n),this.connURL=on.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Ny]=df,typeof location<"u"&&location.hostname&&by.test(location.hostname)&&(o[Ry]=Py),n&&(o[xy]=n),r&&(o[Ay]=r),i&&(o[Wd]=i),s&&(o[Oy]=s),jy(e,Dy,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,oi.set("previous_websocket_failure",!0);try{let r;NC(),this.mySock=new ec(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){on.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&ec!==null&&!on.forceDisallow_}static previouslyFailed(){return oi.isInMemoryStorage||oi.get("previous_websocket_failure")===!0}markConnectionHealthy(){oi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Xo(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(O(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Be(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Iy(n,NI);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(xI))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}on.responsesRequiredToBeHealthy=2;on.healthyTimeout=3e4;/**
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
 */class Zo{static get ALL_TRANSPORTS(){return[Zi,on]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=on&&on.isAvailable();let r=n&&!on.previouslyFailed();if(e.webSocketOnly&&(n||_t("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[on];else{const i=this.transports_=[];for(const s of Zo.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Zo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Zo.globalTransportInitialized_=!1;/**
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
 */const RI=6e4,PI=5e3,bI=10*1024,AI=100*1024,Du="t",jm="d",OI="s",Um="r",DI="e",Fm="o",zm="a",$m="n",Bm="p",MI="h";class LI{constructor(e,n,r,i,s,o,a,l,c,p){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=p,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=pa("c:"+this.id+":"),this.transportManager_=new Zo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=xo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>AI?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>bI?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Du in e){const n=e[Du];n===zm?this.upgradeIfSecondaryHealthy_():n===Um?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Fm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=io("t",e),r=io("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Bm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:zm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:$m,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=io("t",e),r=io("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=io(Du,e);if(jm in e){const r=e[jm];if(n===MI){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===$m){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===OI?this.onConnectionShutdown_(r):n===Um?this.onReset_(r):n===DI?Bd("Server Error: "+r):n===Fm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Bd("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),df!==r&&_t("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),xo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(RI))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):xo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(PI))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Bm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(oi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Wy{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Hy{constructor(e){this.allowedEvents_=e,this.listeners_={},O(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){O(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class tc extends Hy{static getInstance(){return new tc}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!of()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return O(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Wm=32,Hm=768;class ue{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function le(){return new ue("")}function te(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Lr(t){return t.pieces_.length-t.pieceNum_}function me(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ue(t.pieces_,e)}function pf(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function jI(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ea(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Vy(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ue(e,0)}function Te(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ue)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ue(n,0)}function ne(t){return t.pieceNum_>=t.pieces_.length}function mt(t,e){const n=te(t),r=te(e);if(n===null)return e;if(n===r)return mt(me(t),me(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function UI(t,e){const n=ea(t,0),r=ea(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=xi(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function mf(t,e){if(Lr(t)!==Lr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Ht(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Lr(t)>Lr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class FI{constructor(e,n){this.errorPrefix_=n,this.parts_=ea(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Lc(this.parts_[r]);Gy(this)}}function zI(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Lc(e),Gy(t)}function $I(t){const e=t.parts_.pop();t.byteLength_-=Lc(e),t.parts_.length>0&&(t.byteLength_-=1)}function Gy(t){if(t.byteLength_>Hm)throw new Error(t.errorPrefix_+"has a key path longer than "+Hm+" bytes ("+t.byteLength_+").");if(t.parts_.length>Wm)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Wm+") or object contains a cycle "+ni(t))}function ni(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class gf extends Hy{static getInstance(){return new gf}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return O(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const so=1e3,BI=60*5*1e3,Vm=30*1e3,WI=1.3,HI=3e4,VI="server_kill",Gm=3;class Gn extends Wy{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Gn.nextPersistentConnectionId_++,this.log_=pa("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=so,this.maxReconnectDelay_=BI,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");gf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&tc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Be(s)),O(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Sn,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),O(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;Gn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&bn(e,"w")){const r=vs(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();_t(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||DC(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Vm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=OC(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Be(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Bd("Unrecognized action received from server: "+Be(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){O(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=so,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=so,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>HI&&(this.reconnectDelay_=so),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*WI)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Gn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(d){O(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const p=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(p),this.appCheckTokenProvider_.getToken(p)]);o?qe("getToken() completed but was canceled"):(qe("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new LI(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{_t(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(VI)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&_t(d),l())}}}interrupt(e){qe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){qe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Xl(this.interruptReasons_)&&(this.reconnectDelay_=so,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>uf(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ue(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){qe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Gm&&(this.reconnectDelay_=Vm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){qe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Gm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+ky.replace(/\./g,"-")]=1,of()?e["framework.cordova"]=1:my()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=tc.getInstance().currentlyOnline();return Xl(this.interruptReasons_)&&e}}Gn.nextPersistentConnectionId_=0;Gn.nextConnectionId_=0;/**
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
 */class re{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new re(e,n)}}/**
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
 */class Fc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new re(yi,e),i=new re(yi,n);return this.compare(r,i)!==0}minPost(){return re.MIN}}/**
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
 */let nl;class Ky extends Fc{static get __EMPTY_NODE(){return nl}static set __EMPTY_NODE(e){nl=e}compare(e,n){return xi(e.name,n.name)}isDefinedOn(e){throw Ps("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return re.MIN}maxPost(){return new re(Mr,nl)}makePost(e,n){return O(typeof e=="string","KeyIndex indexValue must always be a string."),new re(e,nl)}toString(){return".key"}}const ui=new Ky;/**
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
 */class rl{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ke{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ke.RED,this.left=i??It.EMPTY_NODE,this.right=s??It.EMPTY_NODE}copy(e,n,r,i,s){return new Ke(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return It.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return It.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ke.RED=!0;Ke.BLACK=!1;class GI{copy(e,n,r,i,s){return this}insert(e,n,r){return new Ke(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class It{constructor(e,n=It.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new It(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ke.BLACK,null,null))}remove(e){return new It(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ke.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new rl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new rl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new rl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new rl(this.root_,null,this.comparator_,!0,e)}}It.EMPTY_NODE=new GI;/**
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
 */function KI(t,e){return xi(t.name,e.name)}function _f(t,e){return xi(t,e)}/**
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
 */let Hd;function qI(t){Hd=t}const qy=function(t){return typeof t=="number"?"number:"+Ty(t):"string:"+t},Yy=function(t){if(t.isLeafNode()){const e=t.val();O(typeof e=="string"||typeof e=="number"||typeof e=="object"&&bn(e,".sv"),"Priority must be a string or number.")}else O(t===Hd||t.isEmpty(),"priority of unexpected type.");O(t===Hd||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Km;class Ve{static set __childrenNodeConstructor(e){Km=e}static get __childrenNodeConstructor(){return Km}constructor(e,n=Ve.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,O(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Yy(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ve(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ve.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ne(e)?this:te(e)===".priority"?this.priorityNode_:Ve.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ve.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=te(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(O(r!==".priority"||Lr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ve.__childrenNodeConstructor.EMPTY_NODE.updateChild(me(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+qy(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Ty(this.value_):e+=this.value_,this.lazyHash_=Sy(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ve.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ve.__childrenNodeConstructor?-1:(O(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Ve.VALUE_TYPE_ORDER.indexOf(n),s=Ve.VALUE_TYPE_ORDER.indexOf(r);return O(i>=0,"Unknown leaf type: "+n),O(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ve.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Qy,Xy;function YI(t){Qy=t}function QI(t){Xy=t}class XI extends Fc{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?xi(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return re.MIN}maxPost(){return new re(Mr,new Ve("[PRIORITY-POST]",Xy))}makePost(e,n){const r=Qy(e);return new re(n,new Ve("[PRIORITY-POST]",r))}toString(){return".priority"}}const Se=new XI;/**
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
 */const JI=Math.log(2);class ZI{constructor(e){const n=s=>parseInt(Math.log(s)/JI,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const nc=function(t,e,n,r){t.sort(e);const i=function(l,c){const p=c-l;let d,f;if(p===0)return null;if(p===1)return d=t[l],f=n?n(d):d,new Ke(f,d.node,Ke.BLACK,null,null);{const _=parseInt(p/2,10)+l,w=i(l,_),S=i(_+1,c);return d=t[_],f=n?n(d):d,new Ke(f,d.node,Ke.BLACK,w,S)}},s=function(l){let c=null,p=null,d=t.length;const f=function(w,S){const D=d-w,g=d;d-=w;const m=i(D+1,g),v=t[D],C=n?n(v):v;_(new Ke(C,v.node,S,null,m))},_=function(w){c?(c.left=w,c=w):(p=w,c=w)};for(let w=0;w<l.count;++w){const S=l.nextBitIsOne(),D=Math.pow(2,l.count-(w+1));S?f(D,Ke.BLACK):(f(D,Ke.BLACK),f(D,Ke.RED))}return p},o=new ZI(t.length),a=s(o);return new It(r||e,a)};/**
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
 */let Mu;const zi={};class $n{static get Default(){return O(zi&&Se,"ChildrenNode.ts has not been loaded"),Mu=Mu||new $n({".priority":zi},{".priority":Se}),Mu}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=vs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof It?n:null}hasIndex(e){return bn(this.indexSet_,e.toString())}addIndex(e,n){O(e!==ui,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(re.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=nc(r,e.getCompare()):a=zi;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const p=Object.assign({},this.indexes_);return p[l]=a,new $n(p,c)}addToIndexes(e,n){const r=Jl(this.indexes_,(i,s)=>{const o=vs(this.indexSet_,s);if(O(o,"Missing index implementation for "+s),i===zi)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(re.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),nc(a,o.getCompare())}else return zi;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new re(e.name,a))),l.insert(e,e.node)}});return new $n(r,this.indexSet_)}removeFromIndexes(e,n){const r=Jl(this.indexes_,i=>{if(i===zi)return i;{const s=n.get(e.name);return s?i.remove(new re(e.name,s)):i}});return new $n(r,this.indexSet_)}}/**
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
 */let oo;class Y{static get EMPTY_NODE(){return oo||(oo=new Y(new It(_f),null,$n.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Yy(this.priorityNode_),this.children_.isEmpty()&&O(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||oo}updatePriority(e){return this.children_.isEmpty()?this:new Y(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?oo:n}}getChild(e){const n=te(e);return n===null?this:this.getImmediateChild(n).getChild(me(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(O(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new re(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?oo:this.priorityNode_;return new Y(i,o,s)}}updateChild(e,n){const r=te(e);if(r===null)return n;{O(te(e)!==".priority"||Lr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(me(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Se,(o,a)=>{n[o]=a.val(e),r++,s&&Y.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+qy(this.getPriority().val())+":"),this.forEachChild(Se,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Sy(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new re(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new re(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new re(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,re.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,re.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ma?-1:0}withIndex(e){if(e===ui||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Y(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ui||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Se),i=n.getIterator(Se);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ui?null:this.indexMap_.get(e.toString())}}Y.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class eT extends Y{constructor(){super(new It(_f),Y.EMPTY_NODE,$n.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Y.EMPTY_NODE}isEmpty(){return!1}}const ma=new eT;Object.defineProperties(re,{MIN:{value:new re(yi,Y.EMPTY_NODE)},MAX:{value:new re(Mr,ma)}});Ky.__EMPTY_NODE=Y.EMPTY_NODE;Ve.__childrenNodeConstructor=Y;qI(ma);QI(ma);/**
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
 */const tT=!0;function be(t,e=null){if(t===null)return Y.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),O(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ve(n,be(e))}if(!(t instanceof Array)&&tT){const n=[];let r=!1;if(Qe(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=be(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new re(o,l)))}}),n.length===0)return Y.EMPTY_NODE;const s=nc(n,KI,o=>o.name,_f);if(r){const o=nc(n,Se.getCompare());return new Y(s,be(e),new $n({".priority":o},{".priority":Se}))}else return new Y(s,be(e),$n.Default)}else{let n=Y.EMPTY_NODE;return Qe(t,(r,i)=>{if(bn(t,r)&&r.substring(0,1)!=="."){const s=be(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(be(e))}}YI(be);/**
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
 */class vf extends Fc{constructor(e){super(),this.indexPath_=e,O(!ne(e)&&te(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?xi(e.name,n.name):s}makePost(e,n){const r=be(e),i=Y.EMPTY_NODE.updateChild(this.indexPath_,r);return new re(n,i)}maxPost(){const e=Y.EMPTY_NODE.updateChild(this.indexPath_,ma);return new re(Mr,e)}toString(){return ea(this.indexPath_,0).join("/")}}/**
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
 */class nT extends Fc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?xi(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return re.MIN}maxPost(){return re.MAX}makePost(e,n){const r=be(e);return new re(n,r)}toString(){return".value"}}const Jy=new nT;/**
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
 */function Zy(t){return{type:"value",snapshotNode:t}}function ws(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ta(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function na(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function rT(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class yf{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){O(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(ta(n,a)):O(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ws(n,r)):o.trackChildChange(na(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Se,(i,s)=>{n.hasChild(i)||r.trackChildChange(ta(i,s))}),n.isLeafNode()||n.forEachChild(Se,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(na(i,s,o))}else r.trackChildChange(ws(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?Y.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class ra{constructor(e){this.indexedFilter_=new yf(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ra.getStartPost_(e),this.endPost_=ra.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new re(n,r))||(r=Y.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=Y.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(Y.EMPTY_NODE);const s=this;return n.forEachChild(Se,(o,a)=>{s.matches(new re(o,a))||(i=i.updateImmediateChild(o,Y.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class iT{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ra(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new re(n,r))||(r=Y.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=Y.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=Y.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(Y.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,Y.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,_)=>d(_,f)}else o=this.index_.getCompare();const a=e;O(a.numChildren()===this.limit_,"");const l=new re(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),p=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const _=f==null?1:o(f,l);if(p&&!r.isEmpty()&&_>=0)return s!=null&&s.trackChildChange(na(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(ta(n,d));const S=a.updateImmediateChild(n,Y.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(ws(f.name,f.node)),S.updateImmediateChild(f.name,f.node)):S}}else return r.isEmpty()?e:p&&o(c,l)>=0?(s!=null&&(s.trackChildChange(ta(c.name,c.node)),s.trackChildChange(ws(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,Y.EMPTY_NODE)):e}}/**
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
 */class wf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Se}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return O(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return O(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:yi}hasEnd(){return this.endSet_}getIndexEndValue(){return O(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return O(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Mr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return O(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Se}copy(){const e=new wf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function sT(t){return t.loadsAllData()?new yf(t.getIndex()):t.hasLimit()?new iT(t):new ra(t)}function oT(t,e,n){const r=t.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function aT(t,e,n){const r=t.copy();return r.endSet_=!0,e===void 0&&(e=null),r.indexEndValue_=e,n!==void 0?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function lT(t,e){const n=t.copy();return n.index_=e,n}function qm(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Se?n="$priority":t.index_===Jy?n="$value":t.index_===ui?n="$key":(O(t.index_ instanceof vf,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Be(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Be(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Be(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Be(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Be(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ym(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Se&&(e.i=t.index_.toString()),e}/**
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
 */class rc extends Wy{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(O(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=pa("p:rest:"),this.listens_={}}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=rc.getListenId_(e,r),a={};this.listens_[o]=a;const l=qm(e._queryParams);this.restRequest_(s+".json",l,(c,p)=>{let d=p;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(s,d,!1,r),vs(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const r=rc.getListenId_(e,n);delete this.listens_[r]}get(e){const n=qm(e._queryParams),r=e._path.toString(),i=new Sn;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+bs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Xo(a.responseText)}catch{_t("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&_t("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class cT{constructor(){this.rootNode_=Y.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function ic(){return{value:null,children:new Map}}function Os(t,e,n){if(ne(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=te(e);t.children.has(r)||t.children.set(r,ic());const i=t.children.get(r);e=me(e),Os(i,e,n)}}function Vd(t,e){if(ne(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(Se,(r,i)=>{Os(t,new ue(r),i)}),Vd(t,e)}}else if(t.children.size>0){const n=te(e);return e=me(e),t.children.has(n)&&Vd(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function Gd(t,e,n){t.value!==null?n(e,t.value):uT(t,(r,i)=>{const s=new ue(e.toString()+"/"+r);Gd(i,s,n)})}function uT(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class dT{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Qe(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const Qm=10*1e3,hT=30*1e3,fT=5*60*1e3;class pT{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new dT(e);const r=Qm+(hT-Qm)*Math.random();xo(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Qe(e,(i,s)=>{s>0&&bn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),xo(this.reportStats_.bind(this),Math.floor(Math.random()*2*fT))}}/**
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
 */var an;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(an||(an={}));function Ef(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function kf(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Cf(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class sc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=an.ACK_USER_WRITE,this.source=Ef()}operationForChild(e){if(ne(this.path)){if(this.affectedTree.value!=null)return O(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ue(e));return new sc(le(),n,this.revert)}}else return O(te(this.path)===e,"operationForChild called for unrelated child."),new sc(me(this.path),this.affectedTree,this.revert)}}/**
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
 */class ia{constructor(e,n){this.source=e,this.path=n,this.type=an.LISTEN_COMPLETE}operationForChild(e){return ne(this.path)?new ia(this.source,le()):new ia(this.source,me(this.path))}}/**
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
 */class wi{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=an.OVERWRITE}operationForChild(e){return ne(this.path)?new wi(this.source,le(),this.snap.getImmediateChild(e)):new wi(this.source,me(this.path),this.snap)}}/**
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
 */class Es{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=an.MERGE}operationForChild(e){if(ne(this.path)){const n=this.children.subtree(new ue(e));return n.isEmpty()?null:n.value?new wi(this.source,le(),n.value):new Es(this.source,le(),n)}else return O(te(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Es(this.source,me(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class jr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ne(e))return this.isFullyInitialized()&&!this.filtered_;const n=te(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class mT{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function gT(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(rT(o.childName,o.snapshotNode))}),ao(t,i,"child_removed",e,r,n),ao(t,i,"child_added",e,r,n),ao(t,i,"child_moved",s,r,n),ao(t,i,"child_changed",e,r,n),ao(t,i,"value",e,r,n),i}function ao(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>vT(t,a,l)),o.forEach(a=>{const l=_T(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function _T(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function vT(t,e,n){if(e.childName==null||n.childName==null)throw Ps("Should only compare child_ events.");const r=new re(e.childName,e.snapshotNode),i=new re(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function zc(t,e){return{eventCache:t,serverCache:e}}function Ro(t,e,n,r){return zc(new jr(e,n,r),t.serverCache)}function ew(t,e,n,r){return zc(t.eventCache,new jr(e,n,r))}function oc(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ei(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Lu;const yT=()=>(Lu||(Lu=new It(nI)),Lu);class _e{static fromObject(e){let n=new _e(null);return Qe(e,(r,i)=>{n=n.set(new ue(r),i)}),n}constructor(e,n=yT()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:le(),value:this.value};if(ne(e))return null;{const r=te(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(me(e),n);return s!=null?{path:Te(new ue(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ne(e))return this;{const n=te(e),r=this.children.get(n);return r!==null?r.subtree(me(e)):new _e(null)}}set(e,n){if(ne(e))return new _e(n,this.children);{const r=te(e),s=(this.children.get(r)||new _e(null)).set(me(e),n),o=this.children.insert(r,s);return new _e(this.value,o)}}remove(e){if(ne(e))return this.children.isEmpty()?new _e(null):new _e(null,this.children);{const n=te(e),r=this.children.get(n);if(r){const i=r.remove(me(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new _e(null):new _e(this.value,s)}else return this}}get(e){if(ne(e))return this.value;{const n=te(e),r=this.children.get(n);return r?r.get(me(e)):null}}setTree(e,n){if(ne(e))return n;{const r=te(e),s=(this.children.get(r)||new _e(null)).setTree(me(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new _e(this.value,o)}}fold(e){return this.fold_(le(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Te(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,le(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(ne(e))return null;{const s=te(e),o=this.children.get(s);return o?o.findOnPath_(me(e),Te(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,le(),n)}foreachOnPath_(e,n,r){if(ne(e))return this;{this.value&&r(n,this.value);const i=te(e),s=this.children.get(i);return s?s.foreachOnPath_(me(e),Te(n,i),r):new _e(null)}}foreach(e){this.foreach_(le(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Te(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class hn{constructor(e){this.writeTree_=e}static empty(){return new hn(new _e(null))}}function Po(t,e,n){if(ne(e))return new hn(new _e(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=mt(i,e);return s=s.updateChild(o,n),new hn(t.writeTree_.set(i,s))}else{const i=new _e(n),s=t.writeTree_.setTree(e,i);return new hn(s)}}}function Kd(t,e,n){let r=t;return Qe(n,(i,s)=>{r=Po(r,Te(e,i),s)}),r}function Xm(t,e){if(ne(e))return hn.empty();{const n=t.writeTree_.setTree(e,new _e(null));return new hn(n)}}function qd(t,e){return Ri(t,e)!=null}function Ri(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(mt(n.path,e)):null}function Jm(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Se,(r,i)=>{e.push(new re(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new re(r,i.value))}),e}function Pr(t,e){if(ne(e))return t;{const n=Ri(t,e);return n!=null?new hn(new _e(n)):new hn(t.writeTree_.subtree(e))}}function Yd(t){return t.writeTree_.isEmpty()}function ks(t,e){return tw(le(),t.writeTree_,e)}function tw(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(O(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=tw(Te(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Te(t,".priority"),r)),n}}/**
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
 */function $c(t,e){return sw(e,t)}function wT(t,e,n,r,i){O(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Po(t.visibleWrites,e,n)),t.lastWriteId=r}function ET(t,e,n,r){O(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Kd(t.visibleWrites,e,n),t.lastWriteId=r}function kT(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function CT(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);O(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&ST(a,r.path)?i=!1:Ht(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return IT(t),!0;if(r.snap)t.visibleWrites=Xm(t.visibleWrites,r.path);else{const a=r.children;Qe(a,l=>{t.visibleWrites=Xm(t.visibleWrites,Te(r.path,l))})}return!0}else return!1}function ST(t,e){if(t.snap)return Ht(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ht(Te(t.path,n),e))return!0;return!1}function IT(t){t.visibleWrites=nw(t.allWrites,TT,le()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function TT(t){return t.visible}function nw(t,e,n){let r=hn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Ht(n,o)?(a=mt(n,o),r=Po(r,a,s.snap)):Ht(o,n)&&(a=mt(o,n),r=Po(r,le(),s.snap.getChild(a)));else if(s.children){if(Ht(n,o))a=mt(n,o),r=Kd(r,a,s.children);else if(Ht(o,n))if(a=mt(o,n),ne(a))r=Kd(r,le(),s.children);else{const l=vs(s.children,te(a));if(l){const c=l.getChild(me(a));r=Po(r,le(),c)}}}else throw Ps("WriteRecord should have .snap or .children")}}return r}function rw(t,e,n,r,i){if(!r&&!i){const s=Ri(t.visibleWrites,e);if(s!=null)return s;{const o=Pr(t.visibleWrites,e);if(Yd(o))return n;if(n==null&&!qd(o,le()))return null;{const a=n||Y.EMPTY_NODE;return ks(o,a)}}}else{const s=Pr(t.visibleWrites,e);if(!i&&Yd(s))return n;if(!i&&n==null&&!qd(s,le()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(Ht(c.path,e)||Ht(e,c.path))},a=nw(t.allWrites,o,e),l=n||Y.EMPTY_NODE;return ks(a,l)}}}function NT(t,e,n){let r=Y.EMPTY_NODE;const i=Ri(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Se,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Pr(t.visibleWrites,e);return n.forEachChild(Se,(o,a)=>{const l=ks(Pr(s,new ue(o)),a);r=r.updateImmediateChild(o,l)}),Jm(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Pr(t.visibleWrites,e);return Jm(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function xT(t,e,n,r,i){O(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Te(e,n);if(qd(t.visibleWrites,s))return null;{const o=Pr(t.visibleWrites,s);return Yd(o)?i.getChild(n):ks(o,i.getChild(n))}}function RT(t,e,n,r){const i=Te(e,n),s=Ri(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Pr(t.visibleWrites,i);return ks(o,r.getNode().getImmediateChild(n))}else return null}function PT(t,e){return Ri(t.visibleWrites,e)}function bT(t,e,n,r,i,s,o){let a;const l=Pr(t.visibleWrites,e),c=Ri(l,le());if(c!=null)a=c;else if(n!=null)a=ks(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const p=[],d=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let _=f.getNext();for(;_&&p.length<i;)d(_,r)!==0&&p.push(_),_=f.getNext();return p}else return[]}function AT(){return{visibleWrites:hn.empty(),allWrites:[],lastWriteId:-1}}function ac(t,e,n,r){return rw(t.writeTree,t.treePath,e,n,r)}function Sf(t,e){return NT(t.writeTree,t.treePath,e)}function Zm(t,e,n,r){return xT(t.writeTree,t.treePath,e,n,r)}function lc(t,e){return PT(t.writeTree,Te(t.treePath,e))}function OT(t,e,n,r,i,s){return bT(t.writeTree,t.treePath,e,n,r,i,s)}function If(t,e,n){return RT(t.writeTree,t.treePath,e,n)}function iw(t,e){return sw(Te(t.treePath,e),t.writeTree)}function sw(t,e){return{treePath:t,writeTree:e}}/**
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
 */class DT{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;O(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),O(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,na(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,ta(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,ws(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,na(r,e.snapshotNode,i.oldSnap));else throw Ps("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class MT{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const ow=new MT;class Tf{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new jr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return If(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ei(this.viewCache_),s=OT(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function LT(t){return{filter:t}}function jT(t,e){O(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),O(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function UT(t,e,n,r,i){const s=new DT;let o,a;if(n.type===an.OVERWRITE){const c=n;c.source.fromUser?o=Qd(t,e,c.path,c.snap,r,i,s):(O(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ne(c.path),o=cc(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===an.MERGE){const c=n;c.source.fromUser?o=zT(t,e,c.path,c.children,r,i,s):(O(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Xd(t,e,c.path,c.children,r,i,a,s))}else if(n.type===an.ACK_USER_WRITE){const c=n;c.revert?o=WT(t,e,c.path,r,i,s):o=$T(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===an.LISTEN_COMPLETE)o=BT(t,e,n.path,r,s);else throw Ps("Unknown operation type: "+n.type);const l=s.getChanges();return FT(e,o,l),{viewCache:o,changes:l}}function FT(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=oc(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Zy(oc(e)))}}function aw(t,e,n,r,i,s){const o=e.eventCache;if(lc(r,n)!=null)return e;{let a,l;if(ne(n))if(O(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Ei(e),p=c instanceof Y?c:Y.EMPTY_NODE,d=Sf(r,p);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const c=ac(r,Ei(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=te(n);if(c===".priority"){O(Lr(n)===1,"Can't have a priority with additional path components");const p=o.getNode();l=e.serverCache.getNode();const d=Zm(r,n,p,l);d!=null?a=t.filter.updatePriority(p,d):a=o.getNode()}else{const p=me(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=Zm(r,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(c).updateChild(p,f):d=o.getNode().getImmediateChild(c)}else d=If(r,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,p,i,s):a=o.getNode()}}return Ro(e,a,o.isFullyInitialized()||ne(n),t.filter.filtersNodes())}}function cc(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const p=o?t.filter:t.filter.getIndexedFilter();if(ne(n))c=p.updateFullNode(l.getNode(),r,null);else if(p.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,r);c=p.updateFullNode(l.getNode(),_,null)}else{const _=te(n);if(!l.isCompleteForPath(n)&&Lr(n)>1)return e;const w=me(n),D=l.getNode().getImmediateChild(_).updateChild(w,r);_===".priority"?c=p.updatePriority(l.getNode(),D):c=p.updateChild(l.getNode(),_,D,w,ow,null)}const d=ew(e,c,l.isFullyInitialized()||ne(n),p.filtersNodes()),f=new Tf(i,d,s);return aw(t,d,n,i,f,a)}function Qd(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const p=new Tf(i,e,s);if(ne(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Ro(e,c,!0,t.filter.filtersNodes());else{const d=te(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=Ro(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=me(n),_=a.getNode().getImmediateChild(d);let w;if(ne(f))w=r;else{const S=p.getCompleteChild(d);S!=null?pf(f)===".priority"&&S.getChild(Vy(f)).isEmpty()?w=S:w=S.updateChild(f,r):w=Y.EMPTY_NODE}if(_.equals(w))l=e;else{const S=t.filter.updateChild(a.getNode(),d,w,f,p,o);l=Ro(e,S,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function eg(t,e){return t.eventCache.isCompleteForChild(e)}function zT(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const p=Te(n,l);eg(e,te(p))&&(a=Qd(t,a,p,c,i,s,o))}),r.foreach((l,c)=>{const p=Te(n,l);eg(e,te(p))||(a=Qd(t,a,p,c,i,s,o))}),a}function tg(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Xd(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ne(n)?c=r:c=new _e(null).setTree(n,r);const p=e.serverCache.getNode();return c.children.inorderTraversal((d,f)=>{if(p.hasChild(d)){const _=e.serverCache.getNode().getImmediateChild(d),w=tg(t,_,f);l=cc(t,l,new ue(d),w,i,s,o,a)}}),c.children.inorderTraversal((d,f)=>{const _=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!p.hasChild(d)&&!_){const w=e.serverCache.getNode().getImmediateChild(d),S=tg(t,w,f);l=cc(t,l,new ue(d),S,i,s,o,a)}}),l}function $T(t,e,n,r,i,s,o){if(lc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(ne(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return cc(t,e,n,l.getNode().getChild(n),i,s,a,o);if(ne(n)){let c=new _e(null);return l.getNode().forEachChild(ui,(p,d)=>{c=c.set(new ue(p),d)}),Xd(t,e,n,c,i,s,a,o)}else return e}else{let c=new _e(null);return r.foreach((p,d)=>{const f=Te(n,p);l.isCompleteForPath(f)&&(c=c.set(p,l.getNode().getChild(f)))}),Xd(t,e,n,c,i,s,a,o)}}function BT(t,e,n,r,i){const s=e.serverCache,o=ew(e,s.getNode(),s.isFullyInitialized()||ne(n),s.isFiltered());return aw(t,o,n,r,ow,i)}function WT(t,e,n,r,i,s){let o;if(lc(r,n)!=null)return e;{const a=new Tf(r,e,i),l=e.eventCache.getNode();let c;if(ne(n)||te(n)===".priority"){let p;if(e.serverCache.isFullyInitialized())p=ac(r,Ei(e));else{const d=e.serverCache.getNode();O(d instanceof Y,"serverChildren would be complete if leaf node"),p=Sf(r,d)}p=p,c=t.filter.updateFullNode(l,p,s)}else{const p=te(n);let d=If(r,p,e.serverCache);d==null&&e.serverCache.isCompleteForChild(p)&&(d=l.getImmediateChild(p)),d!=null?c=t.filter.updateChild(l,p,d,me(n),a,s):e.eventCache.getNode().hasChild(p)?c=t.filter.updateChild(l,p,Y.EMPTY_NODE,me(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ac(r,Ei(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||lc(r,le())!=null,Ro(e,c,o,t.filter.filtersNodes())}}/**
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
 */class HT{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new yf(r.getIndex()),s=sT(r);this.processor_=LT(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(Y.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(Y.EMPTY_NODE,a.getNode(),null),p=new jr(l,o.isFullyInitialized(),i.filtersNodes()),d=new jr(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=zc(d,p),this.eventGenerator_=new mT(this.query_)}get query(){return this.query_}}function VT(t){return t.viewCache_.serverCache.getNode()}function GT(t){return oc(t.viewCache_)}function KT(t,e){const n=Ei(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ne(e)&&!n.getImmediateChild(te(e)).isEmpty())?n.getChild(e):null}function ng(t){return t.eventRegistrations_.length===0}function qT(t,e){t.eventRegistrations_.push(e)}function rg(t,e,n){const r=[];if(n){O(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function ig(t,e,n,r){e.type===an.MERGE&&e.source.queryId!==null&&(O(Ei(t.viewCache_),"We should always have a full cache before handling merges"),O(oc(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=UT(t.processor_,i,e,n,r);return jT(t.processor_,s.viewCache),O(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,lw(t,s.changes,s.viewCache.eventCache.getNode(),null)}function YT(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Se,(s,o)=>{r.push(ws(s,o))}),n.isFullyInitialized()&&r.push(Zy(n.getNode())),lw(t,r,n.getNode(),e)}function lw(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return gT(t.eventGenerator_,e,n,i)}/**
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
 */let uc;class cw{constructor(){this.views=new Map}}function QT(t){O(!uc,"__referenceConstructor has already been defined"),uc=t}function XT(){return O(uc,"Reference.ts has not been loaded"),uc}function JT(t){return t.views.size===0}function Nf(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return O(s!=null,"SyncTree gave us an op for an invalid query."),ig(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(ig(o,e,n,r));return s}}function uw(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=ac(n,i?r:null),l=!1;a?l=!0:r instanceof Y?(a=Sf(n,r),l=!1):(a=Y.EMPTY_NODE,l=!1);const c=zc(new jr(a,l,!1),new jr(r,i,!1));return new HT(e,c)}return o}function ZT(t,e,n,r,i,s){const o=uw(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),qT(o,n),YT(o,n)}function e1(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Ur(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(rg(c,n,r)),ng(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(rg(l,n,r)),ng(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Ur(t)&&s.push(new(XT())(e._repo,e._path)),{removed:s,events:o}}function dw(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function br(t,e){let n=null;for(const r of t.views.values())n=n||KT(r,e);return n}function hw(t,e){if(e._queryParams.loadsAllData())return Bc(t);{const r=e._queryIdentifier;return t.views.get(r)}}function fw(t,e){return hw(t,e)!=null}function Ur(t){return Bc(t)!=null}function Bc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let dc;function t1(t){O(!dc,"__referenceConstructor has already been defined"),dc=t}function n1(){return O(dc,"Reference.ts has not been loaded"),dc}let r1=1;class sg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new _e(null),this.pendingWriteTree_=AT(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function pw(t,e,n,r,i){return wT(t.pendingWriteTree_,e,n,r,i),i?Ds(t,new wi(Ef(),e,n)):[]}function i1(t,e,n,r){ET(t.pendingWriteTree_,e,n,r);const i=_e.fromObject(n);return Ds(t,new Es(Ef(),e,i))}function yr(t,e,n=!1){const r=kT(t.pendingWriteTree_,e);if(CT(t.pendingWriteTree_,e)){let s=new _e(null);return r.snap!=null?s=s.set(le(),!0):Qe(r.children,o=>{s=s.set(new ue(o),!0)}),Ds(t,new sc(r.path,s,n))}else return[]}function ga(t,e,n){return Ds(t,new wi(kf(),e,n))}function s1(t,e,n){const r=_e.fromObject(n);return Ds(t,new Es(kf(),e,r))}function o1(t,e){return Ds(t,new ia(kf(),e))}function a1(t,e,n){const r=Rf(t,n);if(r){const i=Pf(r),s=i.path,o=i.queryId,a=mt(s,e),l=new ia(Cf(o),a);return bf(t,s,l)}else return[]}function hc(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||fw(o,e))){const l=e1(o,e,n,r);JT(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const p=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(f,_)=>Ur(_));if(p&&!d){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const _=u1(f);for(let w=0;w<_.length;++w){const S=_[w],D=S.query,g=vw(t,S);t.listenProvider_.startListening(bo(D),sa(t,D),g.hashFn,g.onComplete)}}}!d&&c.length>0&&!r&&(p?t.listenProvider_.stopListening(bo(e),null):c.forEach(f=>{const _=t.queryToTagMap.get(Wc(f));t.listenProvider_.stopListening(bo(f),_)}))}d1(t,c)}return a}function mw(t,e,n,r){const i=Rf(t,r);if(i!=null){const s=Pf(i),o=s.path,a=s.queryId,l=mt(o,e),c=new wi(Cf(a),l,n);return bf(t,o,c)}else return[]}function l1(t,e,n,r){const i=Rf(t,r);if(i){const s=Pf(i),o=s.path,a=s.queryId,l=mt(o,e),c=_e.fromObject(n),p=new Es(Cf(a),l,c);return bf(t,o,p)}else return[]}function Jd(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,_)=>{const w=mt(f,i);s=s||br(_,w),o=o||Ur(_)});let a=t.syncPointTree_.get(i);a?(o=o||Ur(a),s=s||br(a,le())):(a=new cw,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=Y.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,w)=>{const S=br(w,le());S&&(s=s.updateImmediateChild(_,S))}));const c=fw(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=Wc(e);O(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const _=h1();t.queryToTagMap.set(f,_),t.tagToQueryMap.set(_,f)}const p=$c(t.pendingWriteTree_,i);let d=ZT(a,e,n,p,s,l);if(!c&&!o&&!r){const f=hw(a,e);d=d.concat(f1(t,e,f))}return d}function xf(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=mt(o,e),c=br(a,l);if(c)return c});return rw(i,e,s,n,!0)}function c1(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,p)=>{const d=mt(c,n);r=r||br(p,d)});let i=t.syncPointTree_.get(n);i?r=r||br(i,le()):(i=new cw,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new jr(r,!0,!1):null,a=$c(t.pendingWriteTree_,e._path),l=uw(i,e,a,s?o.getNode():Y.EMPTY_NODE,s);return GT(l)}function Ds(t,e){return gw(e,t.syncPointTree_,null,$c(t.pendingWriteTree_,le()))}function gw(t,e,n,r){if(ne(t.path))return _w(t,e,n,r);{const i=e.get(le());n==null&&i!=null&&(n=br(i,le()));let s=[];const o=te(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,p=iw(r,o);s=s.concat(gw(a,l,c,p))}return i&&(s=s.concat(Nf(i,t,r,n))),s}}function _w(t,e,n,r){const i=e.get(le());n==null&&i!=null&&(n=br(i,le()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=iw(r,o),p=t.operationForChild(o);p&&(s=s.concat(_w(p,a,l,c)))}),i&&(s=s.concat(Nf(i,t,r,n))),s}function vw(t,e){const n=e.query,r=sa(t,n);return{hashFn:()=>(VT(e)||Y.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?a1(t,n._path,r):o1(t,n._path);{const s=sI(i,n);return hc(t,n,null,s)}}}}function sa(t,e){const n=Wc(e);return t.queryToTagMap.get(n)}function Wc(t){return t._path.toString()+"$"+t._queryIdentifier}function Rf(t,e){return t.tagToQueryMap.get(e)}function Pf(t){const e=t.indexOf("$");return O(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ue(t.substr(0,e))}}function bf(t,e,n){const r=t.syncPointTree_.get(e);O(r,"Missing sync point for query tag that we're tracking");const i=$c(t.pendingWriteTree_,e);return Nf(r,n,i,null)}function u1(t){return t.fold((e,n,r)=>{if(n&&Ur(n))return[Bc(n)];{let i=[];return n&&(i=dw(n)),Qe(r,(s,o)=>{i=i.concat(o)}),i}})}function bo(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(n1())(t._repo,t._path):t}function d1(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Wc(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function h1(){return r1++}function f1(t,e,n){const r=e._path,i=sa(t,e),s=vw(t,n),o=t.listenProvider_.startListening(bo(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)O(!Ur(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,p,d)=>{if(!ne(c)&&p&&Ur(p))return[Bc(p).query];{let f=[];return p&&(f=f.concat(dw(p).map(_=>_.query))),Qe(d,(_,w)=>{f=f.concat(w)}),f}});for(let c=0;c<l.length;++c){const p=l[c];t.listenProvider_.stopListening(bo(p),sa(t,p))}}return o}/**
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
 */class Af{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Af(n)}node(){return this.node_}}class Of{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Te(this.path_,e);return new Of(this.syncTree_,n)}node(){return xf(this.syncTree_,this.path_)}}const p1=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},og=function(t,e,n){if(!t||typeof t!="object")return t;if(O(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return m1(t[".sv"],e,n);if(typeof t[".sv"]=="object")return g1(t[".sv"],e);O(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},m1=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:O(!1,"Unexpected server value: "+t)}},g1=function(t,e,n){t.hasOwnProperty("increment")||O(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&O(!1,"Unexpected increment value: "+r);const i=e.node();if(O(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},yw=function(t,e,n,r){return Df(e,new Of(n,t),r)},ww=function(t,e,n){return Df(t,new Af(e),n)};function Df(t,e,n){const r=t.getPriority().val(),i=og(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=og(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ve(a,be(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Ve(i))),o.forEachChild(Se,(a,l)=>{const c=Df(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
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
 */class Mf{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Lf(t,e){let n=e instanceof ue?e:new ue(e),r=t,i=te(n);for(;i!==null;){const s=vs(r.node.children,i)||{children:{},childCount:0};r=new Mf(i,r,s),n=me(n),i=te(n)}return r}function Ms(t){return t.node.value}function Ew(t,e){t.node.value=e,Zd(t)}function kw(t){return t.node.childCount>0}function _1(t){return Ms(t)===void 0&&!kw(t)}function Hc(t,e){Qe(t.node.children,(n,r)=>{e(new Mf(n,t,r))})}function Cw(t,e,n,r){n&&e(t),Hc(t,i=>{Cw(i,e,!0)})}function v1(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function _a(t){return new ue(t.parent===null?t.name:_a(t.parent)+"/"+t.name)}function Zd(t){t.parent!==null&&y1(t.parent,t.name,t)}function y1(t,e,n){const r=_1(n),i=bn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Zd(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Zd(t))}/**
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
 */const w1=/[\[\].#$\/\u0000-\u001F\u007F]/,E1=/[\[\].#$\u0000-\u001F\u007F]/,ju=10*1024*1024,jf=function(t){return typeof t=="string"&&t.length!==0&&!w1.test(t)},Sw=function(t){return typeof t=="string"&&t.length!==0&&!E1.test(t)},k1=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Sw(t)},fc=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Uc(t)||t&&typeof t=="object"&&bn(t,".sv")},Cs=function(t,e,n,r){r&&e===void 0||Vc(ys(t,"value"),e,n)},Vc=function(t,e,n){const r=n instanceof ue?new FI(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ni(r));if(typeof e=="function")throw new Error(t+"contains a function "+ni(r)+" with contents = "+e.toString());if(Uc(e))throw new Error(t+"contains "+e.toString()+" "+ni(r));if(typeof e=="string"&&e.length>ju/3&&Lc(e)>ju)throw new Error(t+"contains a string greater than "+ju+" utf8 bytes "+ni(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Qe(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!jf(o)))throw new Error(t+" contains an invalid key ("+o+") "+ni(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);zI(r,o),Vc(t,a,r),$I(r)}),i&&s)throw new Error(t+' contains ".value" child '+ni(r)+" in addition to actual children.")}},C1=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=ea(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!jf(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(UI);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&Ht(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},Iw=function(t,e,n,r){const i=ys(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Qe(e,(o,a)=>{const l=new ue(o);if(Vc(i,a,Te(n,l)),pf(l)===".priority"&&!fc(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),C1(i,s)},S1=function(t,e,n){if(Uc(e))throw new Error(ys(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!fc(e))throw new Error(ys(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},Uf=function(t,e,n,r){if(!Sw(n))throw new Error(ys(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},I1=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Uf(t,e,n)},ai=function(t,e){if(te(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},T1=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!jf(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!k1(n))throw new Error(ys(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class N1{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Gc(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!mf(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Tw(t,e,n){Gc(t,n),Nw(t,r=>mf(r,e))}function qt(t,e,n){Gc(t,n),Nw(t,r=>Ht(r,e)||Ht(e,r))}function Nw(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(x1(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function x1(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();No&&qe("event: "+n.toString()),As(r)}}}/**
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
 */const R1="repo_interrupt",P1=25;class b1{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new N1,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ic(),this.transactionQueueTree_=new Mf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function A1(t,e,n){if(t.stats_=hf(t.repoInfo_),t.forceRestClient_||cI())t.server_=new rc(t.repoInfo_,(r,i,s,o)=>{ag(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>lg(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Be(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Gn(t.repoInfo_,e,(r,i,s,o)=>{ag(t,r,i,s,o)},r=>{lg(t,r)},r=>{O1(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=pI(t.repoInfo_,()=>new pT(t.stats_,t.server_)),t.infoData_=new cT,t.infoSyncTree_=new sg({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=ga(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ff(t,"connected",!1),t.serverSyncTree_=new sg({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);qt(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function xw(t){const n=t.infoData_.getNode(new ue(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Kc(t){return p1({timestamp:xw(t)})}function ag(t,e,n,r,i){t.dataUpdateCount++;const s=new ue(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Jl(n,c=>be(c));o=l1(t.serverSyncTree_,s,l,i)}else{const l=be(n);o=mw(t.serverSyncTree_,s,l,i)}else if(r){const l=Jl(n,c=>be(c));o=s1(t.serverSyncTree_,s,l)}else{const l=be(n);o=ga(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Ss(t,s)),qt(t.eventQueue_,a,o)}function lg(t,e){Ff(t,"connected",e),e===!1&&j1(t)}function O1(t,e){Qe(e,(n,r)=>{Ff(t,n,r)})}function Ff(t,e,n){const r=new ue("/.info/"+e),i=be(n);t.infoData_.updateSnapshot(r,i);const s=ga(t.infoSyncTree_,r,i);qt(t.eventQueue_,r,s)}function zf(t){return t.nextWriteId_++}function D1(t,e,n){const r=c1(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=be(i).withIndex(e._queryParams.getIndex());Jd(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=ga(t.serverSyncTree_,e._path,s);else{const a=sa(t.serverSyncTree_,e);o=mw(t.serverSyncTree_,e._path,s,a)}return qt(t.eventQueue_,e._path,o),hc(t.serverSyncTree_,e,n,null,!0),s},i=>(va(t,"get for query "+Be(e)+" failed: "+i),Promise.reject(new Error(i))))}function M1(t,e,n,r,i){va(t,"set",{path:e.toString(),value:n,priority:r});const s=Kc(t),o=be(n,r),a=xf(t.serverSyncTree_,e),l=ww(o,a,s),c=zf(t),p=pw(t.serverSyncTree_,e,l,c,!0);Gc(t.eventQueue_,p),t.server_.put(e.toString(),o.val(!0),(f,_)=>{const w=f==="ok";w||_t("set at "+e+" failed: "+f);const S=yr(t.serverSyncTree_,c,!w);qt(t.eventQueue_,e,S),Fr(t,i,f,_)});const d=Bf(t,e);Ss(t,d),qt(t.eventQueue_,d,[])}function L1(t,e,n,r){va(t,"update",{path:e.toString(),value:n});let i=!0;const s=Kc(t),o={};if(Qe(n,(a,l)=>{i=!1,o[a]=yw(Te(e,a),be(l),t.serverSyncTree_,s)}),i)qe("update() called with empty data.  Don't do anything."),Fr(t,r,"ok",void 0);else{const a=zf(t),l=i1(t.serverSyncTree_,e,o,a);Gc(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,p)=>{const d=c==="ok";d||_t("update at "+e+" failed: "+c);const f=yr(t.serverSyncTree_,a,!d),_=f.length>0?Ss(t,e):e;qt(t.eventQueue_,_,f),Fr(t,r,c,p)}),Qe(n,c=>{const p=Bf(t,Te(e,c));Ss(t,p)}),qt(t.eventQueue_,e,[])}}function j1(t){va(t,"onDisconnectEvents");const e=Kc(t),n=ic();Gd(t.onDisconnect_,le(),(i,s)=>{const o=yw(i,s,t.serverSyncTree_,e);Os(n,i,o)});let r=[];Gd(n,le(),(i,s)=>{r=r.concat(ga(t.serverSyncTree_,i,s));const o=Bf(t,i);Ss(t,o)}),t.onDisconnect_=ic(),qt(t.eventQueue_,le(),r)}function U1(t,e,n){t.server_.onDisconnectCancel(e.toString(),(r,i)=>{r==="ok"&&Vd(t.onDisconnect_,e),Fr(t,n,r,i)})}function cg(t,e,n,r){const i=be(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),(s,o)=>{s==="ok"&&Os(t.onDisconnect_,e,i),Fr(t,r,s,o)})}function F1(t,e,n,r,i){const s=be(n,r);t.server_.onDisconnectPut(e.toString(),s.val(!0),(o,a)=>{o==="ok"&&Os(t.onDisconnect_,e,s),Fr(t,i,o,a)})}function z1(t,e,n,r){if(Xl(n)){qe("onDisconnect().update() called with empty data.  Don't do anything."),Fr(t,r,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(i,s)=>{i==="ok"&&Qe(n,(o,a)=>{const l=be(a);Os(t.onDisconnect_,Te(e,o),l)}),Fr(t,r,i,s)})}function $1(t,e,n){let r;te(e._path)===".info"?r=Jd(t.infoSyncTree_,e,n):r=Jd(t.serverSyncTree_,e,n),Tw(t.eventQueue_,e._path,r)}function Rw(t,e,n){let r;te(e._path)===".info"?r=hc(t.infoSyncTree_,e,n):r=hc(t.serverSyncTree_,e,n),Tw(t.eventQueue_,e._path,r)}function B1(t){t.persistentConnection_&&t.persistentConnection_.interrupt(R1)}function va(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),qe(n,...e)}function Fr(t,e,n,r){e&&As(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function Pw(t,e,n){return xf(t.serverSyncTree_,e,n)||Y.EMPTY_NODE}function $f(t,e=t.transactionQueueTree_){if(e||qc(t,e),Ms(e)){const n=Aw(t,e);O(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&W1(t,_a(e),n)}else kw(e)&&Hc(e,n=>{$f(t,n)})}function W1(t,e,n){const r=n.map(c=>c.currentWriteId),i=Pw(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const p=n[c];O(p.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),p.status=1,p.retryCount++;const d=mt(e,p.path);s=s.updateChild(d,p.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{va(t,"transaction put response",{path:l.toString(),status:c});let p=[];if(c==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,p=p.concat(yr(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();qc(t,Lf(t.transactionQueueTree_,e)),$f(t,t.transactionQueueTree_),qt(t.eventQueue_,e,p);for(let f=0;f<d.length;f++)As(d[f])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{_t("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}Ss(t,e)}},o)}function Ss(t,e){const n=bw(t,e),r=_a(n),i=Aw(t,n);return H1(t,i,r),r}function H1(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=mt(n,l.path);let p=!1,d;if(O(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)p=!0,d=l.abortReason,i=i.concat(yr(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=P1)p=!0,d="maxretry",i=i.concat(yr(t.serverSyncTree_,l.currentWriteId,!0));else{const f=Pw(t,l.path,o);l.currentInputSnapshot=f;const _=e[a].update(f.val());if(_!==void 0){Vc("transaction failed: Data returned ",_,l.path);let w=be(_);typeof _=="object"&&_!=null&&bn(_,".priority")||(w=w.updatePriority(f.getPriority()));const D=l.currentWriteId,g=Kc(t),m=ww(w,f,g);l.currentOutputSnapshotRaw=w,l.currentOutputSnapshotResolved=m,l.currentWriteId=zf(t),o.splice(o.indexOf(D),1),i=i.concat(pw(t.serverSyncTree_,l.path,m,l.currentWriteId,l.applyLocally)),i=i.concat(yr(t.serverSyncTree_,D,!0))}else p=!0,d="nodata",i=i.concat(yr(t.serverSyncTree_,l.currentWriteId,!0))}qt(t.eventQueue_,n,i),i=[],p&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}qc(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)As(r[a]);$f(t,t.transactionQueueTree_)}function bw(t,e){let n,r=t.transactionQueueTree_;for(n=te(e);n!==null&&Ms(r)===void 0;)r=Lf(r,n),e=me(e),n=te(e);return r}function Aw(t,e){const n=[];return Ow(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Ow(t,e,n){const r=Ms(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Hc(e,i=>{Ow(t,i,n)})}function qc(t,e){const n=Ms(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Ew(e,n.length>0?n:void 0)}Hc(e,r=>{qc(t,r)})}function Bf(t,e){const n=_a(bw(t,e)),r=Lf(t.transactionQueueTree_,e);return v1(r,i=>{Uu(t,i)}),Uu(t,r),Cw(r,i=>{Uu(t,i)}),n}function Uu(t,e){const n=Ms(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(O(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(O(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(yr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Ew(e,void 0):n.length=s+1,qt(t.eventQueue_,_a(e),i);for(let o=0;o<r.length;o++)As(r[o])}}/**
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
 */function V1(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function G1(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):_t(`Invalid query segment '${n}' in query '${t}'`)}return e}const ug=function(t,e){const n=K1(t),r=n.namespace;n.domain==="firebase.com"&&Jn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Jn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||eI();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Ly(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ue(n.pathString)}},K1=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let p=t.indexOf("/");p===-1&&(p=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(p,d)),p<d&&(i=V1(t.substring(p,d)));const f=G1(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const w=e.indexOf(".");r=e.substring(0,w).toLowerCase(),n=e.substring(w+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */const dg="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",q1=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=dg.charAt(n%64),n=Math.floor(n/64);O(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=dg.charAt(e[i]);return O(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class Dw{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Be(this.snapshot.exportVal())}}class Mw{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Wf{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return O(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Y1{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new Sn;return U1(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){ai("OnDisconnect.remove",this._path);const e=new Sn;return cg(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){ai("OnDisconnect.set",this._path),Cs("OnDisconnect.set",e,this._path,!1);const n=new Sn;return cg(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){ai("OnDisconnect.setWithPriority",this._path),Cs("OnDisconnect.setWithPriority",e,this._path,!1),S1("OnDisconnect.setWithPriority",n);const r=new Sn;return F1(this._repo,this._path,e,n,r.wrapCallback(()=>{})),r.promise}update(e){ai("OnDisconnect.update",this._path),Iw("OnDisconnect.update",e,this._path);const n=new Sn;return z1(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
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
 */class Ls{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return ne(this._path)?null:pf(this._path)}get ref(){return new An(this._repo,this._path)}get _queryIdentifier(){const e=Ym(this._queryParams),n=uf(e);return n==="{}"?"default":n}get _queryObject(){return Ym(this._queryParams)}isEqual(e){if(e=ke(e),!(e instanceof Ls))return!1;const n=this._repo===e._repo,r=mf(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+jI(this._path)}}function Q1(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function Hf(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===ui){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==yi)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==Mr)throw new Error(r);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===Se){if(e!=null&&!fc(e)||n!=null&&!fc(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(O(t.getIndex()instanceof vf||t.getIndex()===Jy,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function Lw(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class An extends Ls{constructor(e,n){super(e,n,new wf,!1)}get parent(){const e=Vy(this._path);return e===null?null:new An(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Is{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ue(e),r=Ts(this.ref,e);return new Is(this._node.getChild(n),r,Se)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Is(i,Ts(this.ref,r),Se)))}hasChild(e){const n=new ue(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function G(t,e){return t=ke(t),t._checkNotDeleted("ref"),e!==void 0?Ts(t._root,e):t._root}function Ts(t,e){return t=ke(t),te(t._path)===null?I1("child","path",e):Uf("child","path",e),new An(t._repo,Te(t._path,e))}function hg(t){return t=ke(t),new Y1(t._repo,t._path)}function X1(t,e){t=ke(t),ai("push",t._path),Cs("push",e,t._path,!0);const n=xw(t._repo),r=q1(n),i=Ts(t,r),s=Ts(t,r);let o;return o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Un(t){return ai("remove",t._path),Bn(t,null)}function Bn(t,e){t=ke(t),ai("set",t._path),Cs("set",e,t._path,!1);const n=new Sn;return M1(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function pt(t,e){Iw("update",e,t._path);const n=new Sn;return L1(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function at(t){t=ke(t);const e=new Wf(()=>{}),n=new ya(e);return D1(t._repo,t,n).then(r=>new Is(r,new An(t._repo,t._path),t._queryParams.getIndex()))}class ya{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new Dw("value",this,new Is(e.snapshotNode,new An(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Mw(this,e,n):null}matches(e){return e instanceof ya?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Yc{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Mw(this,e,n):null}createEvent(e,n){O(e.childName!=null,"Child events should have a childName.");const r=Ts(new An(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new Dw(e.type,this,new Is(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Yc?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Vf(t,e,n,r,i){const s=new Wf(n,void 0),o=e==="value"?new ya(s):new Yc(e,s);return $1(t._repo,t,o),()=>Rw(t._repo,t,o)}function Ot(t,e,n,r){return Vf(t,"value",e)}function J1(t,e,n,r){return Vf(t,"child_added",e)}function Z1(t,e,n,r){return Vf(t,"child_changed",e)}function fg(t,e,n){let r=null;const i=n?new Wf(n):null;e==="value"?r=new ya(i):e&&(r=new Yc(e,i)),Rw(t._repo,t,r)}class Gf{}class eN extends Gf{constructor(e,n){super(),this._value=e,this._key=n,this.type="endAt"}_apply(e){Cs("endAt",this._value,e._path,!0);const n=aT(e._queryParams,this._value,this._key);if(Lw(n),Hf(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Ls(e._repo,e._path,n,e._orderByCalled)}}function tN(t,e){return new eN(t,e)}class nN extends Gf{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAt"}_apply(e){Cs("startAt",this._value,e._path,!0);const n=oT(e._queryParams,this._value,this._key);if(Lw(n),Hf(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new Ls(e._repo,e._path,n,e._orderByCalled)}}function rN(t=null,e){return new nN(t,e)}class iN extends Gf{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){Q1(e,"orderByChild");const n=new ue(this._path);if(ne(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new vf(n),i=lT(e._queryParams,r);return Hf(i),new Ls(e._repo,e._path,i,!0)}}function sN(t){return Uf("orderByChild","path",t),new iN(t)}function oN(t,...e){let n=ke(t);for(const r of e)n=r._apply(n);return n}QT(An);t1(An);/**
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
 */const aN="FIREBASE_DATABASE_EMULATOR_HOST",eh={};let lN=!1;function cN(t,e,n,r){const i=e.lastIndexOf(":"),s=e.substring(0,i),o=Wr(s);t.repoInfo_=new Ly(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function uN(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Jn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),qe("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=ug(s,i),a=o.repoInfo,l;typeof process<"u"&&bm&&(l=bm[aN]),l?(s=`http://${l}?ns=${a.namespace}`,o=ug(s,i),a=o.repoInfo):o.repoInfo.secure;const c=new dI(t.name,t.options,e);T1("Invalid Firebase Database URL",o),ne(o.path)||Jn("Database URL must point to the root of a Firebase Database (not including a child path).");const p=hN(a,t,c,new uI(t,n));return new fN(p,t)}function dN(t,e){const n=eh[e];(!n||n[t.key]!==t)&&Jn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),B1(t),delete n[t.key]}function hN(t,e,n,r){let i=eh[e.name];i||(i={},eh[e.name]=i);let s=i[t.toURLString()];return s&&Jn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new b1(t,lN,n,r),i[t.toURLString()]=s,s}class fN{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(A1(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new An(this._repo,le())),this._rootInternal}_delete(){return this._rootInternal!==null&&(dN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Jn("Cannot call "+e+" on a deleted database.")}}function pN(t=cf(),e){const n=jc(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=dy("database");r&&mN(n,...r)}return n}function mN(t,e,n,r={}){t=ke(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,s=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&_i(r,s.repoInfo_.emulatorOptions))return;Jn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&Jn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new wl(wl.OWNER);else if(r.mockUserToken){const a=typeof r.mockUserToken=="string"?r.mockUserToken:py(r.mockUserToken,t.app.options.projectId);o=new wl(a)}Wr(e)&&(rf(e),sf("Database",!0)),cN(s,i,r,o)}/**
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
 */function gN(t){qS(Ni),vi(new Dr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return uN(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Nn(Am,Om,t),Nn(Am,Om,"esm2017")}Gn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Gn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};gN();var _N="firebase",vN="11.10.0";/**
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
 */Nn(_N,vN,"app");function Kf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function jw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yN=jw,Uw=new ha("auth","Firebase",jw());/**
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
 */const pc=new af("@firebase/auth");function wN(t,...e){pc.logLevel<=pe.WARN&&pc.warn(`Auth (${Ni}): ${t}`,...e)}function El(t,...e){pc.logLevel<=pe.ERROR&&pc.error(`Auth (${Ni}): ${t}`,...e)}/**
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
 */function pn(t,...e){throw qf(t,...e)}function xn(t,...e){return qf(t,...e)}function Fw(t,e,n){const r=Object.assign(Object.assign({},yN()),{[e]:n});return new ha("auth","Firebase",r).create(e,{appName:t.name})}function Rn(t){return Fw(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function qf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Uw.create(t,...e)}function q(t,e,...n){if(!t)throw qf(e,...n)}function Wn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw El(e),new Error(e)}function Zn(t,e){t||Wn(e)}/**
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
 */function th(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function EN(){return pg()==="http:"||pg()==="https:"}function pg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function kN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(EN()||IC()||"connection"in navigator)?navigator.onLine:!0}function CN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class wa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Zn(n>e,"Short delay should be less than long delay!"),this.isMobile=of()||my()}get(){return kN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Yf(t,e){Zn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class zw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const SN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const IN=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],TN=new wa(3e4,6e4);function rr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function mn(t,e,n,r,i={}){return $w(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=bs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},s);return SC()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&Wr(t.emulatorConfig.host)&&(c.credentials="include"),zw.fetch()(await Bw(t,t.config.apiHost,n,a),c)})}async function $w(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},SN),e);try{const i=new xN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw il(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw il(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw il(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw il(t,"user-disabled",o);const p=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Fw(t,p,c);pn(t,p)}}catch(i){if(i instanceof nr)throw i;pn(t,"network-request-failed",{message:String(i)})}}async function Ea(t,e,n,r,i={}){const s=await mn(t,e,n,r,i);return"mfaPendingCredential"in s&&pn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function Bw(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Yf(t.config,i):`${t.config.apiScheme}://${i}`;return IN.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function NN(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class xN{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(xn(this.auth,"network-request-failed")),TN.get())})}}function il(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=xn(t,e,r);return i.customData._tokenResponse=n,i}function mg(t){return t!==void 0&&t.enterprise!==void 0}class RN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return NN(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function PN(t,e){return mn(t,"GET","/v2/recaptchaConfig",rr(t,e))}/**
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
 */async function bN(t,e){return mn(t,"POST","/v1/accounts:delete",e)}async function mc(t,e){return mn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ao(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function AN(t,e=!1){const n=ke(t),r=await n.getIdToken(e),i=Qf(r);q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ao(Fu(i.auth_time)),issuedAtTime:Ao(Fu(i.iat)),expirationTime:Ao(Fu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Fu(t){return Number(t)*1e3}function Qf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return El("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ql(n);return i?JSON.parse(i):(El("Failed to decode base64 JWT payload"),null)}catch(i){return El("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function gg(t){const e=Qf(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ki(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof nr&&ON(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ON({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class DN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class nh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ao(this.lastLoginAt),this.creationTime=Ao(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function gc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ki(t,mc(n,{idToken:r}));q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Ww(s.providerUserInfo):[],a=MN(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),p=l?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new nh(s.createdAt,s.lastLoginAt),isAnonymous:p};Object.assign(t,d)}async function rh(t){const e=ke(t);await gc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function MN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Ww(t){return t.map(e=>{var{providerId:n}=e,r=Kf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function LN(t,e){const n=await $w(t,{},async()=>{const r=bs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await Bw(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return t.emulatorConfig&&Wr(t.emulatorConfig.host)&&(l.credentials="include"),zw.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function jN(t,e){return mn(t,"POST","/v2/accounts:revokeToken",rr(t,e))}/**
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
 */class ls{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):gg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){q(e.length!==0,"internal-error");const n=gg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await LN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ls;return r&&(q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ls,this.toJSON())}_performRefresh(){return Wn("not implemented")}}/**
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
 */function ar(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ln{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Kf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new DN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new nh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ki(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return AN(this,e)}reload(){return rh(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ln(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await gc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ct(this.auth.app))return Promise.reject(Rn(this.auth));const e=await this.getIdToken();return await ki(this,bN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,p;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(a=n.tenantId)!==null&&a!==void 0?a:void 0,D=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(c=n.createdAt)!==null&&c!==void 0?c:void 0,m=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:v,emailVerified:C,isAnonymous:j,providerData:z,stsTokenManager:B}=n;q(v&&B,e,"internal-error");const W=ls.fromJSON(this.name,B);q(typeof v=="string",e,"internal-error"),ar(d,e.name),ar(f,e.name),q(typeof C=="boolean",e,"internal-error"),q(typeof j=="boolean",e,"internal-error"),ar(_,e.name),ar(w,e.name),ar(S,e.name),ar(D,e.name),ar(g,e.name),ar(m,e.name);const F=new ln({uid:v,auth:e,email:f,emailVerified:C,displayName:d,isAnonymous:j,photoURL:w,phoneNumber:_,tenantId:S,stsTokenManager:W,createdAt:g,lastLoginAt:m});return z&&Array.isArray(z)&&(F.providerData=z.map(J=>Object.assign({},J))),D&&(F._redirectEventId=D),F}static async _fromIdTokenResponse(e,n,r=!1){const i=new ls;i.updateFromServerResponse(n);const s=new ln({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await gc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Ww(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new ls;a.updateFromIdToken(r);const l=new ln({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new nh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
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
 */const _g=new Map;function Hn(t){Zn(t instanceof Function,"Expected a class definition");let e=_g.get(t);return e?(Zn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,_g.set(t,e),e)}/**
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
 */class Hw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Hw.type="NONE";const vg=Hw;/**
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
 */function kl(t,e,n){return`firebase:${t}:${e}:${n}`}class cs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=kl(this.userKey,i.apiKey,s),this.fullPersistenceKey=kl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await mc(this.auth,{idToken:e}).catch(()=>{});return n?ln._fromGetAccountInfoResponse(this.auth,n,e):null}return ln._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new cs(Hn(vg),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Hn(vg);const o=kl(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const p=await c._get(o);if(p){let d;if(typeof p=="string"){const f=await mc(e,{idToken:p}).catch(()=>{});if(!f)break;d=await ln._fromGetAccountInfoResponse(e,f,p)}else d=ln._fromJSON(e,p);c!==s&&(a=d),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new cs(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new cs(s,e,r))}}/**
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
 */function yg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Vw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Qw(e))return"Blackberry";if(Xw(e))return"Webos";if(Gw(e))return"Safari";if((e.includes("chrome/")||Kw(e))&&!e.includes("edge/"))return"Chrome";if(Yw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Vw(t=vt()){return/firefox\//i.test(t)}function Gw(t=vt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Kw(t=vt()){return/crios\//i.test(t)}function qw(t=vt()){return/iemobile/i.test(t)}function Yw(t=vt()){return/android/i.test(t)}function Qw(t=vt()){return/blackberry/i.test(t)}function Xw(t=vt()){return/webos/i.test(t)}function Xf(t=vt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function UN(t=vt()){var e;return Xf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function FN(){return TC()&&document.documentMode===10}function Jw(t=vt()){return Xf(t)||Yw(t)||Xw(t)||Qw(t)||/windows phone/i.test(t)||qw(t)}/**
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
 */function Zw(t,e=[]){let n;switch(t){case"Browser":n=yg(vt());break;case"Worker":n=`${yg(vt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ni}/${r}`}/**
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
 */class zN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function $N(t,e={}){return mn(t,"GET","/v2/passwordPolicy",rr(t,e))}/**
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
 */const BN=6;class WN{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:BN,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class HN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wg(this),this.idTokenSubscription=new wg(this),this.beforeStateQueue=new zN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Uw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Hn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await cs.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await mc(this,{idToken:e}),r=await ln._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ct(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await gc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=CN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ct(this.app))return Promise.reject(Rn(this));const n=e?ke(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ct(this.app)?Promise.reject(Rn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ct(this.app)?Promise.reject(Rn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Hn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await $N(this),n=new WN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ha("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await jN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Hn(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await cs.create(this,[Hn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Zw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(Ct(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&wN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Hr(t){return ke(t)}class wg{constructor(e){this.auth=e,this.observer=null,this.addObserver=LC(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Qc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function VN(t){Qc=t}function e0(t){return Qc.loadJS(t)}function GN(){return Qc.recaptchaEnterpriseScript}function KN(){return Qc.gapiScript}function qN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class YN{constructor(){this.enterprise=new QN}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class QN{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const XN="recaptcha-enterprise",t0="NO_RECAPTCHA";class JN{constructor(e){this.type=XN,this.auth=Hr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{PN(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new RN(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;mg(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(t0)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new YN().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&mg(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=GN();l.length!==0&&(l+=a),e0(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Eg(t,e,n,r=!1,i=!1){const s=new JN(t);let o;if(i)o=t0;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function ih(t,e,n,r,i){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Eg(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Eg(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
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
 */function ZN(t,e){const n=jc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(_i(s,e??{}))return i;pn(i,"already-initialized")}return n.initialize({options:e})}function ex(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Hn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function tx(t,e,n){const r=Hr(t);q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=n0(e),{host:o,port:a}=nx(e),l=a===null?"":`:${a}`,c={url:`${s}//${o}${l}/`},p=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){q(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),q(_i(c,r.config.emulator)&&_i(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,Wr(o)?(rf(`${s}//${o}${l}`),sf("Auth",!0)):rx()}function n0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function nx(t){const e=n0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:kg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:kg(o)}}}function kg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function rx(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Jf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Wn("not implemented")}_getIdTokenResponse(e){return Wn("not implemented")}_linkToIdToken(e,n){return Wn("not implemented")}_getReauthenticationResolver(e){return Wn("not implemented")}}async function ix(t,e){return mn(t,"POST","/v1/accounts:update",e)}async function sx(t,e){return mn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function ox(t,e){return Ea(t,"POST","/v1/accounts:signInWithPassword",rr(t,e))}async function ax(t,e){return mn(t,"POST","/v1/accounts:sendOobCode",rr(t,e))}async function lx(t,e){return ax(t,e)}/**
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
 */async function cx(t,e){return Ea(t,"POST","/v1/accounts:signInWithEmailLink",rr(t,e))}async function ux(t,e){return Ea(t,"POST","/v1/accounts:signInWithEmailLink",rr(t,e))}/**
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
 */class oa extends Jf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new oa(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new oa(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ih(e,n,"signInWithPassword",ox);case"emailLink":return cx(e,{email:this._email,oobCode:this._password});default:pn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ih(e,r,"signUpPassword",sx);case"emailLink":return ux(e,{idToken:n,email:this._email,oobCode:this._password});default:pn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function us(t,e){return Ea(t,"POST","/v1/accounts:signInWithIdp",rr(t,e))}/**
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
 */const dx="http://localhost";class Ci extends Jf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ci(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):pn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Kf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ci(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return us(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,us(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,us(e,n)}buildRequest(){const e={requestUri:dx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=bs(n)}return e}}/**
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
 */function hx(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function fx(t){const e=mo(go(t)).link,n=e?mo(go(e)).deep_link_id:null,r=mo(go(t)).deep_link_id;return(r?mo(go(r)).link:null)||r||n||e||t}class Zf{constructor(e){var n,r,i,s,o,a;const l=mo(go(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,p=(r=l.oobCode)!==null&&r!==void 0?r:null,d=hx((i=l.mode)!==null&&i!==void 0?i:null);q(c&&p&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=p,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.lang)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=fx(e);try{return new Zf(n)}catch{return null}}}/**
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
 */class js{constructor(){this.providerId=js.PROVIDER_ID}static credential(e,n){return oa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Zf.parseLink(n);return q(r,"argument-error"),oa._fromEmailAndCode(e,r.code,r.tenantId)}}js.PROVIDER_ID="password";js.EMAIL_PASSWORD_SIGN_IN_METHOD="password";js.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class r0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ka extends r0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class hr extends ka{constructor(){super("facebook.com")}static credential(e){return Ci._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hr.credential(e.oauthAccessToken)}catch{return null}}}hr.FACEBOOK_SIGN_IN_METHOD="facebook.com";hr.PROVIDER_ID="facebook.com";/**
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
 */class fr extends ka{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ci._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return fr.credential(n,r)}catch{return null}}}fr.GOOGLE_SIGN_IN_METHOD="google.com";fr.PROVIDER_ID="google.com";/**
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
 */class pr extends ka{constructor(){super("github.com")}static credential(e){return Ci._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pr.credential(e.oauthAccessToken)}catch{return null}}}pr.GITHUB_SIGN_IN_METHOD="github.com";pr.PROVIDER_ID="github.com";/**
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
 */class mr extends ka{constructor(){super("twitter.com")}static credential(e,n){return Ci._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return mr.credential(n,r)}catch{return null}}}mr.TWITTER_SIGN_IN_METHOD="twitter.com";mr.PROVIDER_ID="twitter.com";/**
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
 */async function i0(t,e){return Ea(t,"POST","/v1/accounts:signUp",rr(t,e))}/**
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
 */class er{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ln._fromIdTokenResponse(e,r,i),o=Cg(r);return new er({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Cg(r);return new er({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Cg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function px(t){var e;if(Ct(t.app))return Promise.reject(Rn(t));const n=Hr(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new er({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await i0(n,{returnSecureToken:!0}),i=await er._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class _c extends nr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,_c.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new _c(e,n,r,i)}}function s0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?_c._fromErrorAndOperation(t,s,e,r):s})}async function mx(t,e,n=!1){const r=await ki(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return er._forOperation(t,"link",r)}/**
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
 */async function gx(t,e,n=!1){const{auth:r}=t;if(Ct(r.app))return Promise.reject(Rn(r));const i="reauthenticate";try{const s=await ki(t,s0(r,i,e,t),n);q(s.idToken,r,"internal-error");const o=Qf(s.idToken);q(o,r,"internal-error");const{sub:a}=o;return q(t.uid===a,r,"user-mismatch"),er._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&pn(r,"user-mismatch"),s}}/**
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
 */async function o0(t,e,n=!1){if(Ct(t.app))return Promise.reject(Rn(t));const r="signIn",i=await s0(t,r,e),s=await er._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function _x(t,e){return o0(Hr(t),e)}/**
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
 */async function a0(t){const e=Hr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function vx(t,e,n){if(Ct(t.app))return Promise.reject(Rn(t));const r=Hr(t),o=await ih(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",i0).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&a0(t),l}),a=await er._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function yx(t,e,n){return Ct(t.app)?Promise.reject(Rn(t)):_x(ke(t),js.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&a0(t),r})}async function Sg(t,e){const n=ke(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()},{email:s}=await lx(n.auth,i);s!==t.email&&await t.reload()}/**
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
 */async function wx(t,e){return mn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Ex(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ke(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ki(r,wx(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function kx(t,e){return Cx(ke(t),null,e)}async function Cx(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};n&&(s.password=n);const o=await ki(t,ix(r,s));await t._updateTokensIfNecessary(o,!0)}function Sx(t,e,n,r){return ke(t).onIdTokenChanged(e,n,r)}function Ix(t,e,n){return ke(t).beforeAuthStateChanged(e,n)}function Tx(t,e,n,r){return ke(t).onAuthStateChanged(e,n,r)}function l0(t){return ke(t).signOut()}const vc="__sak";/**
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
 */class c0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(vc,"1"),this.storage.removeItem(vc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Nx=1e3,xx=10;class u0 extends c0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Jw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);FN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,xx):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Nx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}u0.type="LOCAL";const Rx=u0;/**
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
 */class d0 extends c0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}d0.type="SESSION";const h0=d0;/**
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
 */function Px(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Xc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Xc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await Px(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xc.receivers=[];/**
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
 */function ep(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class bx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=ep("",20);i.port1.start();const p=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(p),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Pn(){return window}function Ax(t){Pn().location.href=t}/**
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
 */function f0(){return typeof Pn().WorkerGlobalScope<"u"&&typeof Pn().importScripts=="function"}async function Ox(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Dx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Mx(){return f0()?self:null}/**
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
 */const p0="firebaseLocalStorageDb",Lx=1,yc="firebaseLocalStorage",m0="fbase_key";class Ca{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Jc(t,e){return t.transaction([yc],e?"readwrite":"readonly").objectStore(yc)}function jx(){const t=indexedDB.deleteDatabase(p0);return new Ca(t).toPromise()}function sh(){const t=indexedDB.open(p0,Lx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(yc,{keyPath:m0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(yc)?e(r):(r.close(),await jx(),e(await sh()))})})}async function Ig(t,e,n){const r=Jc(t,!0).put({[m0]:e,value:n});return new Ca(r).toPromise()}async function Ux(t,e){const n=Jc(t,!1).get(e),r=await new Ca(n).toPromise();return r===void 0?null:r.value}function Tg(t,e){const n=Jc(t,!0).delete(e);return new Ca(n).toPromise()}const Fx=800,zx=3;class g0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>zx)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return f0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xc._getInstance(Mx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Ox(),!this.activeServiceWorker)return;this.sender=new bx(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Dx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await sh();return await Ig(e,vc,"1"),await Tg(e,vc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ig(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ux(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Tg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Jc(i,!1).getAll();return new Ca(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Fx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}g0.type="LOCAL";const $x=g0;new wa(3e4,6e4);/**
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
 */function Bx(t,e){return e?Hn(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class tp extends Jf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return us(e,this._buildIdpRequest())}_linkToIdToken(e,n){return us(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return us(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Wx(t){return o0(t.auth,new tp(t),t.bypassAuthState)}function Hx(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),gx(n,new tp(t),t.bypassAuthState)}async function Vx(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),mx(n,new tp(t),t.bypassAuthState)}/**
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
 */class _0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Wx;case"linkViaPopup":case"linkViaRedirect":return Vx;case"reauthViaPopup":case"reauthViaRedirect":return Hx;default:pn(this.auth,"internal-error")}}resolve(e){Zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Gx=new wa(2e3,1e4);class es extends _0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,es.currentPopupAction&&es.currentPopupAction.cancel(),es.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){Zn(this.filter.length===1,"Popup operations only handle one event");const e=ep();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(xn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(xn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,es.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Gx.get())};e()}}es.currentPopupAction=null;/**
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
 */const Kx="pendingRedirect",Cl=new Map;class qx extends _0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Cl.get(this.auth._key());if(!e){try{const r=await Yx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Cl.set(this.auth._key(),e)}return this.bypassAuthState||Cl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Yx(t,e){const n=Jx(e),r=Xx(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Qx(t,e){Cl.set(t._key(),e)}function Xx(t){return Hn(t._redirectPersistence)}function Jx(t){return kl(Kx,t.config.apiKey,t.name)}async function Zx(t,e,n=!1){if(Ct(t.app))return Promise.reject(Rn(t));const r=Hr(t),i=Bx(r,e),o=await new qx(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const eR=10*60*1e3;class tR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!nR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!v0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(xn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=eR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ng(e))}saveEventToCache(e){this.cachedEventUids.add(Ng(e)),this.lastProcessedEventTime=Date.now()}}function Ng(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function v0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function nR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return v0(t);default:return!1}}/**
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
 */async function rR(t,e={}){return mn(t,"GET","/v1/projects",e)}/**
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
 */const iR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sR=/^https?/;async function oR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await rR(t);for(const n of e)try{if(aR(n))return}catch{}pn(t,"unauthorized-domain")}function aR(t){const e=th(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!sR.test(n))return!1;if(iR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const lR=new wa(3e4,6e4);function xg(){const t=Pn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function cR(t){return new Promise((e,n)=>{var r,i,s;function o(){xg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{xg(),n(xn(t,"network-request-failed"))},timeout:lR.get()})}if(!((i=(r=Pn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Pn().gapi)===null||s===void 0)&&s.load)o();else{const a=qN("iframefcb");return Pn()[a]=()=>{gapi.load?o():n(xn(t,"network-request-failed"))},e0(`${KN()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Sl=null,e})}let Sl=null;function uR(t){return Sl=Sl||cR(t),Sl}/**
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
 */const dR=new wa(5e3,15e3),hR="__/auth/iframe",fR="emulator/auth/iframe",pR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gR(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Yf(e,fR):`https://${t.config.authDomain}/${hR}`,r={apiKey:e.apiKey,appName:t.name,v:Ni},i=mR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${bs(r).slice(1)}`}async function _R(t){const e=await uR(t),n=Pn().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:gR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=xn(t,"network-request-failed"),a=Pn().setTimeout(()=>{s(o)},dR.get());function l(){Pn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const vR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yR=500,wR=600,ER="_blank",kR="http://localhost";class Rg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function CR(t,e,n,r=yR,i=wR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},vR),{width:r.toString(),height:i.toString(),top:s,left:o}),c=vt().toLowerCase();n&&(a=Kw(c)?ER:n),Vw(c)&&(e=e||kR,l.scrollbars="yes");const p=Object.entries(l).reduce((f,[_,w])=>`${f}${_}=${w},`,"");if(UN(c)&&a!=="_self")return SR(e||"",a),new Rg(null);const d=window.open(e||"",a,p);q(d,t,"popup-blocked");try{d.focus()}catch{}return new Rg(d)}function SR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const IR="__/auth/handler",TR="emulator/auth/handler",NR=encodeURIComponent("fac");async function Pg(t,e,n,r,i,s){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ni,eventId:i};if(e instanceof r0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Xl(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,d]of Object.entries({}))o[p]=d}if(e instanceof ka){const p=e.getScopes().filter(d=>d!=="");p.length>0&&(o.scopes=p.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const p of Object.keys(a))a[p]===void 0&&delete a[p];const l=await t._getAppCheckToken(),c=l?`#${NR}=${encodeURIComponent(l)}`:"";return`${xR(t)}?${bs(a).slice(1)}${c}`}function xR({config:t}){return t.emulator?Yf(t,TR):`https://${t.authDomain}/${IR}`}/**
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
 */const zu="webStorageSupport";class RR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=h0,this._completeRedirectFn=Zx,this._overrideRedirectResult=Qx}async _openPopup(e,n,r,i){var s;Zn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Pg(e,n,r,th(),i);return CR(e,o,ep())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Pg(e,n,r,th(),i);return Ax(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Zn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await _R(e),r=new tR(e);return n.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(zu,{type:zu},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[zu];o!==void 0&&n(!!o),pn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=oR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Jw()||Gw()||Xf()}}const PR=RR;var bg="@firebase/auth",Ag="1.10.8";/**
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
 */class bR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function AR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function OR(t){vi(new Dr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Zw(t)},c=new HN(r,i,s,l);return ex(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),vi(new Dr("auth-internal",e=>{const n=Hr(e.getProvider("auth").getImmediate());return(r=>new bR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nn(bg,Ag,AR(t)),Nn(bg,Ag,"esm2017")}/**
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
 */const DR=5*60,MR=fy("authIdTokenMaxAge")||DR;let Og=null;const LR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>MR)return;const i=n==null?void 0:n.token;Og!==i&&(Og=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function jR(t=cf()){const e=jc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ZN(t,{popupRedirectResolver:PR,persistence:[$x,Rx,h0]}),r=fy("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=LR(s.toString());Ix(n,o,()=>o(n.currentUser)),Sx(n,a=>o(a))}}const i=uy("auth");return i&&tx(n,`http://${i}`),n}function UR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}VN({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=xn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",UR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});OR("Browser");/**
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
 */const y0="firebasestorage.googleapis.com",w0="storageBucket",FR=2*60*1e3,zR=10*60*1e3;/**
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
 */class Oe extends nr{constructor(e,n,r=0){super($u(e),`Firebase Storage: ${n} (${$u(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Oe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return $u(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ae;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ae||(Ae={}));function $u(t){return"storage/"+t}function np(){const t="An unknown error occurred, please check the error payload for server response.";return new Oe(Ae.UNKNOWN,t)}function $R(t){return new Oe(Ae.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function BR(t){return new Oe(Ae.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function WR(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Oe(Ae.UNAUTHENTICATED,t)}function HR(){return new Oe(Ae.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function VR(t){return new Oe(Ae.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function GR(){return new Oe(Ae.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function KR(){return new Oe(Ae.CANCELED,"User canceled the upload/download.")}function qR(t){return new Oe(Ae.INVALID_URL,"Invalid URL '"+t+"'.")}function YR(t){return new Oe(Ae.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function QR(){return new Oe(Ae.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+w0+"' property when initializing the app?")}function XR(){return new Oe(Ae.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function JR(){return new Oe(Ae.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function ZR(t){return new Oe(Ae.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function oh(t){return new Oe(Ae.INVALID_ARGUMENT,t)}function E0(){return new Oe(Ae.APP_DELETED,"The Firebase app was deleted.")}function eP(t){return new Oe(Ae.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Oo(t,e){return new Oe(Ae.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function lo(t){throw new Oe(Ae.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Mt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Mt.makeFromUrl(e,n)}catch{return new Mt(e,"")}if(r.path==="")return r;throw YR(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(C){C.path.charAt(C.path.length-1)==="/"&&(C.path_=C.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(C){C.path_=decodeURIComponent(C.path)}const p="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",_=new RegExp(`^https?://${d}/${p}/b/${i}/o${f}`,"i"),w={bucket:1,path:3},S=n===y0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,D="([^?#]*)",g=new RegExp(`^https?://${S}/${i}/${D}`,"i"),v=[{regex:a,indices:l,postModify:s},{regex:_,indices:w,postModify:c},{regex:g,indices:{bucket:1,path:2},postModify:c}];for(let C=0;C<v.length;C++){const j=v[C],z=j.regex.exec(e);if(z){const B=z[j.indices.bucket];let W=z[j.indices.path];W||(W=""),r=new Mt(B,W),j.postModify(r);break}}if(r==null)throw qR(e);return r}}class tP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function nP(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function p(...D){c||(c=!0,e.apply(null,D))}function d(D){i=setTimeout(()=>{i=null,t(_,l())},D)}function f(){s&&clearTimeout(s)}function _(D,...g){if(c){f();return}if(D){f(),p.call(null,D,...g);return}if(l()||o){f(),p.call(null,D,...g);return}r<64&&(r*=2);let v;a===1?(a=2,v=0):v=(r+Math.random())*1e3,d(v)}let w=!1;function S(D){w||(w=!0,f(),!c&&(i!==null?(D||(a=2),clearTimeout(i),d(0)):D||(a=1)))}return d(0),s=setTimeout(()=>{o=!0,S(!0)},n),S}function rP(t){t(!1)}/**
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
 */function iP(t){return t!==void 0}function sP(t){return typeof t=="object"&&!Array.isArray(t)}function rp(t){return typeof t=="string"||t instanceof String}function Dg(t){return ip()&&t instanceof Blob}function ip(){return typeof Blob<"u"}function Mg(t,e,n,r){if(r<e)throw oh(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw oh(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function sp(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function k0(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var di;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(di||(di={}));/**
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
 */function oP(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class aP{constructor(e,n,r,i,s,o,a,l,c,p,d,f=!0,_=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=p,this.connectionFactory_=d,this.retry=f,this.isUsingEmulator=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((w,S)=>{this.resolve_=w,this.reject_=S,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new sl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===di.NO_ERROR,l=s.getStatus();if(!a||oP(l,this.additionalRetryCodes_)&&this.retry){const p=s.getErrorCode()===di.ABORT;r(!1,new sl(!1,null,p));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new sl(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());iP(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=np();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?E0():KR();o(l)}else{const l=GR();o(l)}};this.canceled_?n(!1,new sl(!1,null,!0)):this.backoffId_=nP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&rP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class sl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function lP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function cP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function uP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function dP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function hP(t,e,n,r,i,s,o=!0,a=!1){const l=k0(t.urlParams),c=t.url+l,p=Object.assign({},t.headers);return uP(p,e),lP(p,n),cP(p,s),dP(p,r),new aP(c,t.method,p,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o,a)}/**
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
 */function fP(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function pP(...t){const e=fP();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(ip())return new Blob(t);throw new Oe(Ae.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function mP(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function gP(t){if(typeof atob>"u")throw ZR("base-64");return atob(t)}/**
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
 */const cn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Bu{constructor(e,n){this.data=e,this.contentType=n||null}}function C0(t,e){switch(t){case cn.RAW:return new Bu(S0(e));case cn.BASE64:case cn.BASE64URL:return new Bu(I0(t,e));case cn.DATA_URL:return new Bu(vP(e),yP(e))}throw np()}function S0(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function _P(t){let e;try{e=decodeURIComponent(t)}catch{throw Oo(cn.DATA_URL,"Malformed data URL.")}return S0(e)}function I0(t,e){switch(t){case cn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Oo(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case cn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Oo(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=gP(e)}catch(i){throw i.message.includes("polyfill")?i:Oo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class T0{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Oo(cn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=wP(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function vP(t){const e=new T0(t);return e.base64?I0(cn.BASE64,e.rest):_P(e.rest)}function yP(t){return new T0(t).contentType}function wP(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class gr{constructor(e,n){let r=0,i="";Dg(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Dg(this.data_)){const r=this.data_,i=mP(r,e,n);return i===null?null:new gr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new gr(r,!0)}}static getBlob(...e){if(ip()){const n=e.map(r=>r instanceof gr?r.data_:r);return new gr(pP.apply(null,n))}else{const n=e.map(o=>rp(o)?C0(cn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new gr(i,!0)}}uploadData(){return this.data_}}/**
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
 */function N0(t){let e;try{e=JSON.parse(t)}catch{return null}return sP(e)?e:null}/**
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
 */function EP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function kP(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function x0(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function CP(t,e){return e}class ht{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||CP}}let ol=null;function SP(t){return!rp(t)||t.length<2?t:x0(t)}function R0(){if(ol)return ol;const t=[];t.push(new ht("bucket")),t.push(new ht("generation")),t.push(new ht("metageneration")),t.push(new ht("name","fullPath",!0));function e(s,o){return SP(o)}const n=new ht("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new ht("size");return i.xform=r,t.push(i),t.push(new ht("timeCreated")),t.push(new ht("updated")),t.push(new ht("md5Hash",null,!0)),t.push(new ht("cacheControl",null,!0)),t.push(new ht("contentDisposition",null,!0)),t.push(new ht("contentEncoding",null,!0)),t.push(new ht("contentLanguage",null,!0)),t.push(new ht("contentType",null,!0)),t.push(new ht("metadata","customMetadata",!0)),ol=t,ol}function IP(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Mt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function TP(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return IP(r,t),r}function P0(t,e,n){const r=N0(e);return r===null?null:TP(t,r,n)}function NP(t,e,n,r){const i=N0(e);if(i===null||!rp(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const p=t.bucket,d=t.fullPath,f="/b/"+o(p)+"/o/"+o(d),_=sp(f,n,r),w=k0({alt:"media",token:c});return _+w})[0]}function xP(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class b0{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function A0(t){if(!t)throw np()}function RP(t,e){function n(r,i){const s=P0(t,i,e);return A0(s!==null),s}return n}function PP(t,e){function n(r,i){const s=P0(t,i,e);return A0(s!==null),NP(s,i,t.host,t._protocol)}return n}function O0(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=HR():i=WR():n.getStatus()===402?i=BR(t.bucket):n.getStatus()===403?i=VR(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function bP(t){const e=O0(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=$R(t.path)),s.serverResponse=i.serverResponse,s}return n}function AP(t,e,n){const r=e.fullServerUrl(),i=sp(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new b0(i,s,PP(t,n),o);return a.errorHandler=bP(e),a}function OP(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function DP(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=OP(null,e)),r}function MP(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let v="";for(let C=0;C<2;C++)v=v+Math.random().toString().slice(2);return v}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=DP(e,r,i),p=xP(c,n),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+p+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,f=`\r
--`+l+"--",_=gr.getBlob(d,r,f);if(_===null)throw XR();const w={name:c.fullPath},S=sp(s,t.host,t._protocol),D="POST",g=t.maxUploadRetryTime,m=new b0(S,D,RP(t,n),g);return m.urlParams=w,m.headers=o,m.body=_.uploadData(),m.errorHandler=O0(e),m}class LP{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=di.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=di.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=di.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i,s){if(this.sent_)throw lo("cannot .send() more than once");if(Wr(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw lo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw lo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw lo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw lo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class jP extends LP{initXhr(){this.xhr_.responseType="text"}}function D0(){return new jP}/**
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
 */class Si{constructor(e,n){this._service=e,n instanceof Mt?this._location=n:this._location=Mt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Si(e,n)}get root(){const e=new Mt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return x0(this._location.path)}get storage(){return this._service}get parent(){const e=EP(this._location.path);if(e===null)return null;const n=new Mt(this._location.bucket,e);return new Si(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw eP(e)}}function UP(t,e,n){t._throwIfRoot("uploadBytes");const r=MP(t.storage,t._location,R0(),new gr(e,!0),n);return t.storage.makeRequestWithTokens(r,D0).then(i=>({metadata:i,ref:t}))}function FP(t,e,n=cn.RAW,r){t._throwIfRoot("uploadString");const i=C0(n,e),s=Object.assign({},r);return s.contentType==null&&i.contentType!=null&&(s.contentType=i.contentType),UP(t,i.data,s)}function zP(t){t._throwIfRoot("getDownloadURL");const e=AP(t.storage,t._location,R0());return t.storage.makeRequestWithTokens(e,D0).then(n=>{if(n===null)throw JR();return n})}function $P(t,e){const n=kP(t._location.path,e),r=new Mt(t._location.bucket,n);return new Si(t.storage,r)}/**
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
 */function BP(t){return/^[A-Za-z]+:\/\//.test(t)}function WP(t,e){return new Si(t,e)}function M0(t,e){if(t instanceof op){const n=t;if(n._bucket==null)throw QR();const r=new Si(n,n._bucket);return e!=null?M0(r,e):r}else return e!==void 0?$P(t,e):t}function HP(t,e){if(e&&BP(e)){if(t instanceof op)return WP(t,e);throw oh("To use ref(service, url), the first argument must be a Storage instance.")}else return M0(t,e)}function Lg(t,e){const n=e==null?void 0:e[w0];return n==null?null:Mt.makeFromBucketSpec(n,t)}function VP(t,e,n,r={}){t.host=`${e}:${n}`;const i=Wr(e);i&&(rf(`https://${t.host}/b`),sf("Storage",!0)),t._isUsingEmulator=!0,t._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:py(s,t.app.options.projectId))}class op{constructor(e,n,r,i,s,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._isUsingEmulator=o,this._bucket=null,this._host=y0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=FR,this._maxUploadRetryTime=zR,this._requests=new Set,i!=null?this._bucket=Mt.makeFromBucketSpec(i,this._host):this._bucket=Lg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Mt.makeFromBucketSpec(this._url,e):this._bucket=Lg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Mg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Mg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Ct(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Si(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new tP(E0());{const o=hP(e,this._appId,r,i,n,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const jg="@firebase/storage",Ug="0.13.14";/**
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
 */const L0="storage";function Fg(t,e,n,r){return t=ke(t),FP(t,e,n,r)}function zg(t){return t=ke(t),zP(t)}function $g(t,e){return t=ke(t),HP(t,e)}function GP(t=cf(),e){t=ke(t);const r=jc(t,L0).getImmediate({identifier:e}),i=dy("storage");return i&&KP(r,...i),r}function KP(t,e,n,r={}){VP(t,e,n,r)}function qP(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new op(n,r,i,e,Ni)}function YP(){vi(new Dr(L0,qP,"PUBLIC").setMultipleInstances(!0)),Nn(jg,Ug,""),Nn(jg,Ug,"esm2017")}YP();const QP={apiKey:"AIzaSyAJ4sGcHNhzcKSvGvqbYnqt9TtNj-owksM",authDomain:"puzzle-907d0.firebaseapp.com",databaseURL:"https://puzzle-907d0-default-rtdb.firebaseio.com/",projectId:"puzzle-907d0",storageBucket:"puzzle-907d0.firebasestorage.app",messagingSenderId:"443092750922",appId:"1:443092750922:web:f7a6520020788aead5ccb3"},ap=yy(QP),K=pN(ap),rn=jR(ap),Bg=GP(ap);function lp(t){let e=t;return function(){e|=0,e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function XP(t,e,n=100){const r=Math.max(1,Math.round(Number(n)||100)),i=Math.max(.1,Number(t)||1)/Math.max(.1,Number(e)||1),s=[];for(let o=1;o<=Math.sqrt(r);o++){if(r%o!==0)continue;const a=r/o;s.push({rows:o,cols:a}),s.push({rows:a,cols:o})}return s.length?(s.sort((o,a)=>{const l=o.cols/o.rows,c=a.cols/a.rows,p=Math.abs(Math.log(l/i)),d=Math.abs(Math.log(c/i));return p-d}),s[0]):{rows:1,cols:r}}function j0(t,e,n){const r=lp(n),i=Array.from({length:t},()=>Array.from({length:e-1},()=>r()>.5?1:-1)),s=Array.from({length:t-1},()=>Array.from({length:e},()=>r()>.5?1:-1));return{edgesV:i,edgesH:s}}function U0(t,e,n,r,i,s){return{top:t===0?0:-s[t-1][e],bottom:t===n-1?0:s[t][e],left:e===0?0:-i[t][e-1],right:e===r-1?0:i[t][e]}}function al(t,e,n,r,i,s){if(s===0){t.lineTo(r,i);return}const o=r-e,a=i-n,l=Math.hypot(o,a),c=o/l,p=a/l,d=-p,f=c,_=l*.22*s,w=C=>({x:e+c*l*C,y:n+p*l*C}),S=w(.35),D=w(.65),g=w(.5),m=g.x+d*_,v=g.y+f*_;t.lineTo(S.x,S.y),t.bezierCurveTo(S.x+d*_*.7,S.y+f*_*.7,m-c*l*.18,v-p*l*.18,m,v),t.bezierCurveTo(m+c*l*.18,v+p*l*.18,D.x+d*_*.7,D.y+f*_*.7,D.x,D.y),t.lineTo(r,i)}function Wg(t,e,n,r,i){t.beginPath(),t.moveTo(r,r),al(t,r,r,r+e,r,i.top),al(t,r+e,r,r+e,r+n,i.right),al(t,r+e,r+n,r,r+n,i.bottom),al(t,r,r+n,r,r,i.left),t.closePath()}function JP(t,e,n,r,i,s,o,a,l){const c=a/r,p=Math.floor(l()*r),d=Math.floor((t*r+e)/r),f=(l()-.5)*(c-i)*.8,_=(l()-.5)*(s*.5);return{x:p*c+(c-i)/2+f,y:o+d*s*1.15+_}}function ZP(t,e){const n=Array.from({length:t},(i,s)=>s),r=lp(e^2654435769);for(let i=n.length-1;i>0;i--){const s=Math.floor(r()*(i+1));[n[i],n[s]]=[n[s],n[i]]}return n}function Hg(){const t="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let e="";for(let n=0;n<5;n++)e+=t[Math.floor(Math.random()*t.length)];return e}const Wu=[{id:"relaxed",name:"Rahat",pieces:50,rotate:!1,hints:5,preview:!0,desc:"Kısa ve keyifli"},{id:"classic",name:"Klasik",pieces:100,rotate:!1,hints:3,preview:!0,desc:"Dengeli deneyim"},{id:"master",name:"Usta",pieces:100,rotate:!0,hints:2,preview:!0,desc:"Parçalar dönebilir"},{id:"chaos",name:"Çılgın",pieces:200,rotate:!0,hints:1,preview:!0,desc:"Daha çok parça"},{id:"expert",name:"Uzman",pieces:200,rotate:!0,hints:0,preview:!1,desc:"Fotoğraf önizlemesi yok"}],Vg=[{id:"first",name:"İlk Adım",desc:"İlk puzzle'ını tamamla"},{id:"team",name:"İkili Ekip",desc:"Birlikte puzzle tamamla"},{id:"hundred",name:"100 Parça",desc:"100 parçalık puzzle tamamla"},{id:"twohundred",name:"200 Parça",desc:"200 parçalık puzzle tamamla"},{id:"rotator",name:"Döndürme Ustası",desc:"Döndürmeli puzzle tamamla"},{id:"perfect",name:"Kusursuz",desc:"Hiç ipucu kullanmadan bitir"}];function Gg(t){const e=Math.max(0,Number(t)||0);return`${String(Math.floor(e/60)).padStart(2,"0")}:${String(Math.floor(e%60)).padStart(2,"0")}`}function Mn(t,e=0){const n=Number(t);return Number.isFinite(n)?n:e}function co(t){return Math.max(1,Math.floor(Math.max(0,Mn(t))/500)+1)}function eb(t){return new Promise((e,n)=>{const r=new Image,i=new FileReader;i.onload=s=>{r.src=s.target.result},i.onerror=n,r.onload=()=>{const s=Math.min(1,1e3/r.width),o=Math.max(1,Math.round(r.width*s)),a=Math.max(1,Math.round(r.height*s)),l=document.createElement("canvas");l.width=o,l.height=a;const c=l.getContext("2d");if(!c)return n(new Error("Canvas oluşturulamadı."));c.drawImage(r,0,0,o,a),e({dataUrl:l.toDataURL("image/jpeg",.65),width:o,height:a})},r.onerror=()=>n(new Error("Fotoğraf yüklenemedi.")),i.readAsDataURL(t)})}function tb({onEnterRoom:t,user:e,playerName:n,theme:r="light",onToggleTheme:i}){var E;const[s,o]=N.useState("choose"),[a,l]=N.useState(""),[c,p]=N.useState(""),[d,f]=N.useState(null),[_,w]=N.useState(!1),[S,D]=N.useState(""),[g,m]=N.useState(null),[v,C]=N.useState(!0),[j,z]=N.useState("classic"),[B,W]=N.useState(!1),[F,J]=N.useState(null),[Re,gn]=N.useState(""),[tt,Vr]=N.useState([]),[He,Rt]=N.useState([]),[_n,U]=N.useState(!1),[X,$]=N.useState(""),[se,ge]=N.useState([]),[vn,Pt]=N.useState({}),[de,nt]=N.useState(null),[rt,Gr]=N.useState(null),[Pi,bi]=N.useState([]),[Us,Fs]=N.useState(""),[Kr,Sa]=N.useState([]),[Ai,Ia]=N.useState([]),[Oi,yn]=N.useState({}),[Zc,De]=N.useState({}),[wn,zt]=N.useState([]),[Ta,it]=N.useState(!1),Yt=wn.filter(h=>{const y=Number(localStorage.getItem(`notificationRead:${h.id}`)||0);return Number(h.at||0)>y}).length;function zs(h=wn){const y=Date.now();h.forEach(T=>localStorage.setItem(`notificationRead:${T.id}`,String(y)))}const[Qt,bt]=N.useState(""),[On,ut]=N.useState(!1),[qr,Xt]=N.useState("profile"),[$s,Yr]=N.useState(""),[ir,Bs]=N.useState(""),[Ws,Qr]=N.useState(""),[Xr,Hs]=N.useState(!0),[sr,Vs]=N.useState(!0),[Di,Na]=N.useState(!0),[Gs,xa]=N.useState([]),[Dn,Mi]=N.useState(!1),[Li,Jt]=N.useState(null),Et=Wu.find(h=>h.id===j)||Wu[1];N.useEffect(()=>{let h=!1;async function y(){if(!(e!=null&&e.uid)){m(null),C(!1);return}try{const k=(await at(G(K,`users/${e.uid}`))).val()||{},R=k.blocked||{};h||De(R);const P=Object.keys(R),I=[];for(const M of P.slice(0,50)){const b=await at(G(K,`publicProfiles/${M}`));b.exists()&&I.push({uid:M,...b.val()})}h||xa(I);const x={...k,profileVisible:k.profileVisible!==!1,allowFriendRequests:k.allowFriendRequests!==!1,allowMessages:k.allowMessages!==!1,avatar:typeof k.avatar=="string"?k.avatar:"",name:typeof k.name=="string"&&k.name.trim()?k.name.trim().slice(0,40):n||"Oyuncu",nameLower:(typeof k.name=="string"&&k.name.trim()?k.name.trim().slice(0,40):n||"Oyuncu").toLowerCase(),email:typeof k.email=="string"?k.email:e.email||"",puzzlesRemaining:k.puzzlesRemaining===void 0?3:Math.max(0,Math.floor(Mn(k.puzzlesRemaining,0))),xp:Math.max(0,Mn(k.xp,0)),completedPuzzles:Math.max(0,Math.floor(Mn(k.completedPuzzles,0))),togetherPuzzles:Math.max(0,Math.floor(Mn(k.togetherPuzzles,0))),totalTime:Math.max(0,Mn(k.totalTime,0)),bestTime:Math.max(0,Mn(k.bestTime,0)),badges:Array.isArray(k.badges)?k.badges:[],history:Array.isArray(k.history)?k.history:[]};if(await pt(G(K,`users/${e.uid}`),x),!e.isAnonymous){await pt(G(K,`publicProfiles/${e.uid}`),{name:x.name,nameLower:x.name.toLowerCase(),email:x.email,avatar:x.avatar||"",xp:x.xp,completedPuzzles:x.completedPuzzles,badges:x.badges,profileVisible:x.profileVisible!==!1,allowFriendRequests:x.allowFriendRequests!==!1,allowMessages:x.allowMessages!==!1});const b=(await at(G(K,`users/${e.uid}/friends`))).val()||{},L=Object.keys(b),ee=[];for(const V of L.slice(0,30)){const Z=await at(G(K,`publicProfiles/${V}`));Z.exists()&&ee.push({uid:V,...Z.val()})}h||Rt(ee)}h||(m(x.puzzlesRemaining),J(x),bt(x.avatar||""),Yr(x.name||""),Hs(x.profileVisible!==!1),Vs(x.allowFriendRequests!==!1),Na(x.allowMessages!==!1))}catch(T){console.error("Hesap bilgisi yüklenemedi:",T),h||m(3)}finally{h||C(!1)}}return y(),()=>{h=!0}},[e==null?void 0:e.uid,e==null?void 0:e.email,n]);async function Ra(h){if(!(!h||!(e!=null&&e.uid)||e.isAnonymous))try{const y=await new Promise((R,P)=>{const I=new Image,x=new FileReader;x.onload=M=>{I.src=M.target.result},x.onerror=P,I.onload=()=>{const b=document.createElement("canvas");b.width=180,b.height=180;const L=b.getContext("2d");if(!L)return P(new Error("Canvas oluşturulamadı."));const ee=Math.max(180/I.width,180/I.height),V=I.width*ee,Z=I.height*ee;L.drawImage(I,(180-V)/2,(180-Z)/2,V,Z),R(b.toDataURL("image/jpeg",.72))},I.onerror=()=>P(new Error("Profil fotoğrafı okunamadı.")),x.readAsDataURL(h)}),T=$g(Bg,`profileAvatars/${e.uid}.jpg`);await Fg(T,y,"data_url",{contentType:"image/jpeg"});const k=await zg(T);await pt(G(K),{[`users/${e.uid}/avatar`]:k,[`publicProfiles/${e.uid}/avatar`]:k}),bt(k),J(R=>({...R||{},avatar:k})),$("Profil fotoğrafın güncellendi.")}catch(y){console.error(y),$("Profil fotoğrafı güncellenemedi.")}}async function ji(){const h=Re.trim().toLowerCase();if(!h||e!=null&&e.isAnonymous){Vr([]);return}U(!0),$("");try{const y=oN(G(K,"publicProfiles"),sN("nameLower"),rN(h),tN(`${h}`)),k=(await at(y)).val()||{},R=Object.entries(k).filter(([P,I])=>P!==e.uid&&(I==null?void 0:I.profileVisible)!==!1).slice(0,8).map(([P,I])=>({uid:P,...I}));Vr(R),R.length||$("Bu isimle oyuncu bulunamadı.")}catch(y){console.error(y),$("Oyuncular aranamadı.")}finally{U(!1)}}async function Pa(h){if(!(!e||e.isAnonymous||!(h!=null&&h.uid))){U(!0),$("");try{await pt(G(K),{[`friendRequests/${h.uid}/${e.uid}`]:{name:(F==null?void 0:F.name)||n||"Oyuncu",avatar:Qt||(F==null?void 0:F.avatar)||"",at:Date.now()},[`users/${e.uid}/sentFriendRequests/${h.uid}`]:!0}),$(`${h.name||"Oyuncu"} için arkadaşlık isteği gönderildi.`)}catch(y){console.error(y),$("İstek gönderilemedi.")}finally{U(!1)}}}N.useEffect(()=>{if(!(e!=null&&e.uid)||e.isAnonymous){zt([]);return}const h=[],y=G(K,`friendRequests/${e.uid}`),T=Ot(y,P=>{const I=P.val()||{},x=Object.entries(I).map(([M,b])=>({id:`friend:${M}:${Number((b==null?void 0:b.at)||0)}`,type:"friend",uid:M,name:(b==null?void 0:b.name)||"Oyuncu",avatar:(b==null?void 0:b.avatar)||"",at:Number((b==null?void 0:b.at)||0)}));zt(M=>[...M.filter(b=>b.type!=="friend"),...x].sort((b,L)=>L.at-b.at))});h.push(T);const k=G(K,`roomInvites/${e.uid}`),R=Ot(k,P=>{const I=P.val()||{},x=Object.entries(I).map(([M,b])=>({id:`invite:${M}:${Number((b==null?void 0:b.at)||0)}`,type:"invite",code:M,fromUid:b==null?void 0:b.fromUid,name:(b==null?void 0:b.fromName)||"Oyuncu",at:Number((b==null?void 0:b.at)||0)}));zt(M=>[...M.filter(b=>b.type!=="invite"),...x].sort((b,L)=>L.at-b.at))});return h.push(R),()=>h.forEach(P=>P==null?void 0:P())},[e==null?void 0:e.uid,e==null?void 0:e.isAnonymous]),N.useEffect(()=>{if(!(e!=null&&e.uid)||e.isAnonymous){ge([]),Pt({}),Rt([]);return}const h=G(K,`friendRequests/${e.uid}`),y=Ot(h,I=>{const x=I.val()||{};ge(Object.entries(x).map(([M,b])=>({uid:M,...b||{}})))}),T=G(K,`users/${e.uid}/sentFriendRequests`),k=Ot(T,I=>Pt(I.val()||{})),R=G(K,`users/${e.uid}/friends`),P=Ot(R,async I=>{const x=I.val()||{},M=Object.keys(x).filter(L=>x[L]),b=await Promise.all(M.slice(0,50).map(async L=>{try{const ee=await at(G(K,`publicProfiles/${L}`));if(!ee.exists())return{uid:L,name:"Oyuncu",avatar:""};const V=ee.val()||{};return{uid:L,...V,name:V.name||"Oyuncu",avatar:V.avatar||""}}catch{return{uid:L,name:"Oyuncu",avatar:""}}}));Rt(b)});return()=>{y==null||y(),k==null||k(),P==null||P()}},[e==null?void 0:e.uid,e==null?void 0:e.isAnonymous]),N.useEffect(()=>{if(!(e!=null&&e.uid)||e.isAnonymous)return;const h=G(K,`roomInvites/${e.uid}`),y=Ot(h,T=>{const k=T.val()||{};Ia(Object.entries(k).map(([R,P])=>({code:R,...P||{}})))});return()=>y==null?void 0:y()},[e==null?void 0:e.uid,e==null?void 0:e.isAnonymous]),N.useEffect(()=>{if(!(e!=null&&e.uid)||e.isAnonymous||!He.length){yn({});return}const h=[];return He.forEach(y=>{const T=[e.uid,y.uid].sort(),k=G(K,`chats/${T[0]}/${T[1]}/messages`),R=Ot(k,P=>{const I=P.val()||{},x=Object.values(I).sort((L,ee)=>Number(L.at||0)-Number(ee.at||0)),M=x[x.length-1],b=Number(localStorage.getItem(`chatRead:${y.uid}`)||0);yn(L=>({...L,[y.uid]:!!(M&&M.senderId!==e.uid&&Number(M.at||0)>b)}))});h.push(R)}),()=>h.forEach(y=>y==null?void 0:y())},[e==null?void 0:e.uid,e==null?void 0:e.isAnonymous,He]);async function Ks(h){if(!(!(e!=null&&e.uid)||e.isAnonymous||!(h!=null&&h.uid)))try{await pt(G(K),{[`users/${e.uid}/friends/${h.uid}`]:!0,[`users/${h.uid}/friends/${e.uid}`]:!0,[`friendRequests/${e.uid}/${h.uid}`]:null,[`users/${h.uid}/sentFriendRequests/${e.uid}`]:null}),$(`${h.name||"Oyuncu"} artık arkadaşın.`);const y=await at(G(K,`publicProfiles/${h.uid}`)),T=y.exists()?y.val():{},k={uid:h.uid,name:T.name||h.name||"Oyuncu",avatar:T.avatar||h.avatar||"",...T};Rt(R=>R.some(P=>P.uid===h.uid)?R:[...R,k])}catch(y){console.error(y),$("Arkadaşlık isteği kabul edilemedi.")}}async function ba(h){if(!(!(e!=null&&e.uid)||e.isAnonymous||!(h!=null&&h.uid)))try{await Un(G(K,`friendRequests/${e.uid}/${h.uid}`)),$("İstek kaldırıldı.")}catch(y){console.error(y),$("İstek kaldırılamadı.")}}async function Aa(h){if(Gr(h),h!=null&&h.uid&&(localStorage.setItem(`chatRead:${h.uid}`,String(Date.now())),yn(k=>({...k,[h.uid]:!1}))),Fs(""),!(e!=null&&e.uid)||!(h!=null&&h.uid))return;const y=[e.uid,h.uid].sort(),T=G(K,`chats/${y[0]}/${y[1]}/messages`);Ot(T,k=>{const R=k.val()||{};bi(Object.entries(R).map(([P,I])=>({id:P,...I||{}})).sort((P,I)=>Number(P.at||0)-Number(I.at||0)).slice(-80))})}async function Ui(){const h=Us.trim();if(!h||!(e!=null&&e.uid)||e.isAnonymous||!(rt!=null&&rt.uid))return;const y=[e.uid,rt.uid].sort(),T=G(K,`chats/${y[0]}/${y[1]}/messages`);await Bn(X1(T),{senderId:e.uid,senderName:(F==null?void 0:F.name)||n||"Oyuncu",text:h.slice(0,500),at:Date.now()}),Fs("")}async function Zt(h){if(h!=null&&h.uid)try{const y=await at(G(K,`publicProfiles/${h.uid}`));y.exists()?nt({uid:h.uid,...y.val()}):nt(h)}catch{nt(h)}}async function Oa(h){if(!(!(e!=null&&e.uid)||e.isAnonymous||!(h!=null&&h.uid))&&window.confirm(`${h.name||"Bu oyuncu"} arkadaşlıktan çıkarılsın mı?`))try{await pt(G(K),{[`users/${e.uid}/friends/${h.uid}`]:null,[`users/${h.uid}/friends/${e.uid}`]:null,[`chats/${[e.uid,h.uid].sort()[0]}/${[e.uid,h.uid].sort()[1]}/messages`]:null}),Rt(y=>y.filter(T=>T.uid!==h.uid)),Gr(null),$("Arkadaş kaldırıldı.")}catch(y){console.error(y),$("Arkadaş kaldırılamadı.")}}async function Da(h){if(!(!(e!=null&&e.uid)||e.isAnonymous||!(h!=null&&h.uid))&&window.confirm(`${h.name||"Bu oyuncu"} engellensin mi?`))try{await pt(G(K),{[`users/${e.uid}/blocked/${h.uid}`]:!0,[`users/${e.uid}/friends/${h.uid}`]:null,[`users/${h.uid}/friends/${e.uid}`]:null,[`friendRequests/${e.uid}/${h.uid}`]:null,[`friendRequests/${h.uid}/${e.uid}`]:null}),De(y=>({...y,[h.uid]:!0})),Rt(y=>y.filter(T=>T.uid!==h.uid)),nt(null),Gr(null),$("Oyuncu engellendi.")}catch(y){console.error(y),$("Oyuncu engellenemedi.")}}async function fe(h){if(!(!(e!=null&&e.uid)||e.isAnonymous||!(h!=null&&h.uid)))try{await Un(G(K,`users/${e.uid}/blocked/${h.uid}`)),De(y=>{const T={...y};return delete T[h.uid],T}),xa(y=>y.filter(T=>T.uid!==h.uid)),$(`${h.name||"Oyuncu"} için engel kaldırıldı.`)}catch(y){console.error(y),$("Engel kaldırılamadı.")}}async function ze(){if(!(e!=null&&e.uid)||e.isAnonymous)return;const h=$s.trim().slice(0,40);if(!h){$("Ad boş bırakılamaz.");return}Mi(!0);try{await pt(G(K),{[`users/${e.uid}/name`]:h,[`users/${e.uid}/nameLower`]:h.toLowerCase(),[`users/${e.uid}/profileVisible`]:Xr,[`users/${e.uid}/allowFriendRequests`]:sr,[`users/${e.uid}/allowMessages`]:Di,[`publicProfiles/${e.uid}/name`]:h,[`publicProfiles/${e.uid}/nameLower`]:h.toLowerCase(),[`publicProfiles/${e.uid}/avatar`]:Qt||"",[`publicProfiles/${e.uid}/profileVisible`]:Xr,[`publicProfiles/${e.uid}/allowFriendRequests`]:sr,[`publicProfiles/${e.uid}/allowMessages`]:Di}),J(y=>({...y||{},name:h,profileVisible:Xr,allowFriendRequests:sr,allowMessages:Di})),$("Profil ayarların kaydedildi."),ut(!1)}catch(y){console.error(y),$("Profil ayarları kaydedilemedi.")}finally{Mi(!1)}}async function Ma(){if(!(!(e!=null&&e.uid)||e.isAnonymous)){if(ir.length<6){$("Yeni şifre en az 6 karakter olmalı.");return}if(ir!==Ws){$("Şifreler eşleşmiyor.");return}Mi(!0);try{await kx(e,ir),Bs(""),Qr(""),$("Şifren başarıyla değiştirildi.")}catch(h){console.error(h),$((h==null?void 0:h.code)==="auth/requires-recent-login"?"Güvenlik için yeniden giriş yapman gerekiyor.":(h==null?void 0:h.message)||"Şifre değiştirilemedi.")}finally{Mi(!1)}}}async function qs(h){if(!(!(h!=null&&h.roomCode)||!(e!=null&&e.uid)))try{if(!(await at(G(K,`rooms/${h.roomCode}`))).exists()){$("Bu puzzle odası artık mevcut değil."),await Un(G(K,`roomInvites/${e.uid}/${h.roomCode}`));return}await Un(G(K,`roomInvites/${e.uid}/${h.roomCode}`)),t(h.roomCode,(F==null?void 0:F.name)||n||"Oyuncu",!0)}catch(y){console.error(y),$("Puzzle daveti açılamadı.")}}async function Ys(h){!(e!=null&&e.uid)||!(h!=null&&h.roomCode)||await Un(G(K,`roomInvites/${e.uid}/${h.roomCode}`))}async function La(){if(e!=null&&e.isAnonymous)return D("Misafir oyuncular puzzle oluşturamaz. Bir hesapla devam et.");if(!d)return D("Önce bir fotoğraf seç.");if(g!==null&&g<=0)return D("Puzzle hakkın kalmadı.");w(!0),D("");try{const{dataUrl:h,width:y,height:T}=await eb(d),{cols:k,rows:R}=XP(y,T,Et.pieces),P=Et.pieces===200?1e3:900,I=Math.max(360,Math.round(T/y*P)),x=P/k,M=I/R;let b=Hg();for(let ae=0;ae<8&&(await at(G(K,`rooms/${b}`))).exists();ae++)b=Hg();const L=Math.floor(Math.random()*4294967295),ee=lp(L+1),V=j0(R,k,L),Z=ZP(R*k,L),dt=I+70,Ue={};for(let ae=0;ae<R;ae++)for(let ye=0;ye<k;ye++){const Xe=`${ae}_${ye}`,Ua=JP(ae,ye,R,k,x,M,dt,P,ee,Z);Ue[Xe]={edges:U0(ae,ye,R,k,V.edgesV,V.edgesH),x:Math.round(Ua.x),y:Math.round(Ua.y),placed:!1,placedBy:null,movedBy:null,movedAt:0,rotation:Et.rotate?[0,90,180,270][Math.floor(ee()*4)]:0}}const Me=$g(Bg,`roomImages/${e.uid}/${b}.jpg`);await Fg(Me,h,"data_url",{contentType:"image/jpeg"});const Le=await zg(Me);await Bn(G(K,`rooms/${b}`),{ownerUid:e.uid,image:Le,imgWidth:y,imgHeight:T,rows:R,cols:k,seed:L,boardW:P,boardH:I,edges:V,difficulty:Et.id,difficultyName:Et.name,totalPieces:Et.pieces,rotatePieces:Et.rotate,hintsAllowed:Et.hints,previewAllowed:Et.preview,createdAt:Date.now(),players:{}}),await Bn(G(K,`rooms/${b}/pieces`),Ue);const ce=Math.max(0,(Number(g)||3)-1);if(await Bn(G(K,`users/${e.uid}/puzzlesRemaining`),ce),m(ce),window.__lastCreatedRoomCode=b,Kr.length){const ae={};Kr.forEach(ye=>{ae[`roomInvites/${ye}/${b}`]={roomCode:b,fromUid:e.uid,fromName:(F==null?void 0:F.name)||a.trim()||n||"Oyuncu",at:Date.now(),status:"pending"}}),await pt(G(K),ae)}t(b,a.trim()||n||"Oyuncu")}catch(h){console.error(h),D((h==null?void 0:h.code)==="PERMISSION_DENIED"?"Firebase erişim izni vermedi.":(h==null?void 0:h.message)||"Bir şeyler ters gitti.")}finally{w(!1)}}async function ja(){const h=c.trim().toUpperCase();if(!h)return D("Oda kodunu gir.");w(!0),D("");try{if(!(await at(G(K,`rooms/${h}`))).exists())return D("Böyle bir oda bulunamadı.");t(h,a.trim()||n||"Oyuncu",!0)}catch(y){console.error(y),D((y==null?void 0:y.message)||"Odaya bağlanılamadı.")}finally{w(!1)}}return u.jsxs("main",{className:"home-shell",children:[u.jsxs("div",{className:"home-decoration","aria-hidden":"true",children:[u.jsx("span",{}),u.jsx("span",{}),u.jsx("span",{}),u.jsx("span",{})]}),u.jsxs("section",{className:"home-card premium-card",children:[u.jsxs("div",{className:"brand-mark","aria-hidden":"true",children:[u.jsx("i",{}),u.jsx("i",{}),u.jsx("i",{}),u.jsx("i",{})]}),u.jsx("div",{className:"eyebrow",children:"BİRLİKTE TAMAMLA"}),u.jsxs("h1",{children:["Bir fotoğrafı",u.jsx("br",{}),u.jsx("em",{children:"anıya"})," dönüştür."]}),u.jsx("p",{className:"subtitle",children:"Fotoğrafını seç, kendi puzzle'ını oluştur ve başka biriyle aynı anda çöz."}),u.jsxs("div",{className:"top-nav",children:[u.jsxs("div",{className:"top-brand-status",children:[u.jsx("span",{className:"online-pulse"}),u.jsx("span",{children:v?"Hesap yükleniyor...":`${g??0} puzzle hakkı`})]}),u.jsxs("div",{className:"top-user-actions",children:[u.jsx("span",{className:"top-user-name",children:(F==null?void 0:F.name)||n||"Oyuncu"}),u.jsx("button",{className:"icon-profile-button",title:"Profil",onClick:()=>{D(""),W(!0)},children:Qt?u.jsx("img",{src:Qt,alt:""}):u.jsx("span",{children:(n||"O").slice(0,1).toUpperCase()})}),u.jsxs("button",{className:"icon-notification-button",title:"Bildirimler",onClick:()=>{it(h=>{const y=!h;return y&&zs(),y})},children:[u.jsx("span",{className:"bell-icon"}),Yt>0&&u.jsx("b",{children:Math.min(99,Yt)})]}),u.jsx("button",{className:"text-button top-logout",onClick:()=>l0(rn),children:"Çıkış"})]})]}),s==="choose"&&!(e!=null&&e.isAnonymous)&&F&&u.jsxs("div",{className:"home-dashboard",children:[u.jsxs("div",{className:"home-dashboard-head",children:[u.jsxs("div",{children:[u.jsx("span",{className:"panel-kicker",children:"HESABIN"}),u.jsx("strong",{children:F.name||"Oyuncu"}),u.jsx("span",{children:"İlerlemen ve oyun istatistiklerin"})]}),u.jsx("button",{className:"home-profile-link",onClick:()=>W(!0),children:"Profil"})]}),u.jsxs("div",{className:"home-stat-strip",children:[u.jsxs("div",{children:[u.jsx("span",{children:"Seviye"}),u.jsx("b",{children:co(F.xp)})]}),u.jsxs("div",{children:[u.jsx("span",{children:"XP"}),u.jsx("b",{children:Mn(F.xp)})]}),u.jsxs("div",{children:[u.jsx("span",{children:"Tamamlanan"}),u.jsx("b",{children:Mn(F.completedPuzzles)})]}),u.jsxs("div",{children:[u.jsx("span",{children:"Arkadaş"}),u.jsx("b",{children:He.length})]})]})]}),s==="choose"&&u.jsxs("div",{className:"choice-grid",children:[u.jsxs("button",{className:"big-choice blue",onClick:()=>{D(""),o("create")},children:[u.jsx("span",{children:"Yeni puzzle"}),u.jsx("small",{children:"Fotoğrafından bir oda oluştur"})]}),u.jsxs("button",{className:"big-choice pink",onClick:()=>{D(""),o("join")},children:[u.jsx("span",{children:"Odaya katıl"}),u.jsx("small",{children:"Bir arkadaşının kodunu kullan"})]})]}),s==="create"&&u.jsxs("div",{className:"create-flow",children:[u.jsxs("div",{className:"section-title",children:[u.jsx("span",{children:"01"})," Fotoğrafını seç"]}),u.jsxs("label",{className:"upload-zone",children:[u.jsx("input",{type:"file",accept:"image/*",disabled:_,onChange:h=>{var y;f(((y=h.target.files)==null?void 0:y[0])||null),D("")}}),u.jsxs("div",{className:"upload-art",children:[u.jsx("i",{}),u.jsx("i",{}),u.jsx("i",{})]}),u.jsx("strong",{children:d?d.name:"Fotoğrafı buraya bırak"}),u.jsx("small",{children:d?"Fotoğraf hazır":"veya seçmek için tıkla"})]}),u.jsxs("div",{className:"section-title",children:[u.jsx("span",{children:"02"})," Zorluk seç"]}),u.jsx("div",{className:"difficulty-grid",children:Wu.map(h=>u.jsxs("button",{className:`difficulty ${j===h.id?"active":""}`,onClick:()=>z(h.id),children:[u.jsx("b",{children:h.name}),u.jsxs("small",{children:[h.pieces," parça · ",h.rotate?"döndürme açık":"sabit"]}),u.jsx("em",{children:h.desc})]},h.id))}),u.jsxs("div",{className:"difficulty-info",children:[u.jsx("strong",{children:Et.name}),u.jsxs("span",{children:[Et.hints," yardım hakkı · ",Et.preview?"fotoğraf önizlemesi açık":"önizleme kapalı"]})]}),u.jsxs("label",{className:"field",children:[u.jsx("span",{children:"Adın"}),u.jsx("input",{value:a,onChange:h=>l(h.target.value),placeholder:"Oyuncu",disabled:_})]}),u.jsxs("label",{className:"field",children:[u.jsx("span",{children:"Arkadaşlarını doğrudan davet et"}),u.jsx("div",{className:"friend-invite-picker",children:He.length?He.map(h=>u.jsxs("label",{className:`friend-invite-chip ${Kr.includes(h.uid)?"selected":""}`,children:[u.jsx("input",{type:"checkbox",checked:Kr.includes(h.uid),onChange:y=>Sa(T=>y.target.checked?[...T,h.uid]:T.filter(k=>k!==h.uid))}),u.jsx("span",{children:h.name})]},h.uid)):u.jsx("small",{children:"Henüz arkadaşın yok. Puzzle'ı oluşturduktan sonra da davet linkini kullanabilirsin."})})]}),S&&u.jsx("div",{className:"error",children:S}),u.jsxs("div",{className:"row-buttons",children:[u.jsx("button",{className:"btn ghost",onClick:()=>o("choose"),disabled:_,children:"Geri"}),u.jsx("button",{className:"btn primary",disabled:_||v||g===0,onClick:La,children:_?"Hazırlanıyor...":"Puzzle'ı oluştur"})]})]}),s==="join"&&u.jsxs("div",{className:"create-flow",children:[u.jsxs("div",{className:"section-title",children:[u.jsx("span",{children:"01"})," Oda kodunu gir"]}),u.jsxs("label",{className:"field",children:[u.jsx("span",{children:"Oda kodu"}),u.jsx("input",{value:c,onChange:h=>p(h.target.value.toUpperCase()),placeholder:"ABC123",maxLength:8,disabled:_})]}),u.jsxs("label",{className:"field",children:[u.jsx("span",{children:"Adın"}),u.jsx("input",{value:a,onChange:h=>l(h.target.value),placeholder:"Oyuncu",disabled:_})]}),S&&u.jsx("div",{className:"error",children:S}),u.jsxs("div",{className:"row-buttons",children:[u.jsx("button",{className:"btn ghost",onClick:()=>o("choose"),disabled:_,children:"Geri"}),u.jsx("button",{className:"btn primary",disabled:_,onClick:ja,children:_?"Bağlanıyor...":"Odaya katıl"})]})]})]}),Ta&&wn.length>0&&u.jsx("div",{className:"notification-modal-backdrop",onClick:()=>it(!1),children:u.jsxs("section",{className:"notification-modal",onClick:h=>h.stopPropagation(),children:[u.jsxs("div",{className:"notification-modal-head",children:[u.jsxs("div",{children:[u.jsx("span",{className:"panel-kicker",children:"BİLDİRİMLER"}),u.jsx("h3",{children:"Bekleyenler"})]}),u.jsx("button",{className:"drawer-close",onClick:()=>it(!1),children:"×"})]}),u.jsx("div",{className:"notification-list",children:wn.map(h=>u.jsxs("div",{className:"notification-card",children:[u.jsx("div",{className:`notification-symbol ${h.type}`,children:h.type==="friend"&&h.avatar?u.jsx("img",{src:h.avatar,alt:""}):h.type==="friend"?"＋":"◆"}),u.jsxs("div",{className:"notification-copy",children:[u.jsx("strong",{children:h.type==="friend"?`${h.name} arkadaşlık isteği gönderdi`:`${h.name} seni puzzle'a davet etti`}),u.jsx("span",{children:h.type==="friend"?"Profiline bakabilir veya isteği kabul edebilirsin.":"Ortak puzzle'a katılmak için seç."})]}),h.type==="friend"?u.jsxs("div",{className:"notification-actions",children:[u.jsx("button",{className:"btn primary tiny",onClick:()=>{const y=se.find(T=>T.uid===h.uid);y&&Ks(y),it(!1)},children:"Kabul"}),u.jsx("button",{className:"btn ghost tiny",onClick:()=>{const y=se.find(T=>T.uid===h.uid);y&&ba(y)},children:"Reddet"}),u.jsx("button",{className:"btn ghost tiny",onClick:()=>{Zt({uid:h.uid,name:h.name}),it(!1)},children:"Profil"})]}):u.jsxs("div",{className:"notification-actions",children:[u.jsx("button",{className:"btn primary tiny",onClick:()=>{const y=Ai.find(T=>T.roomCode===h.code||T.code===h.code);y&&qs(y),it(!1)},children:"Katıl"}),u.jsx("button",{className:"btn ghost tiny",onClick:()=>Ys({roomCode:h.code}),children:"Reddet"})]})]},h.id))})]})}),B&&F&&u.jsx("div",{className:"profile-drawer-backdrop",onClick:()=>W(!1),children:u.jsxs("aside",{className:"profile-drawer",onClick:h=>h.stopPropagation(),children:[u.jsxs("div",{className:"drawer-top",children:[u.jsxs("div",{children:[u.jsx("span",{className:"panel-kicker",children:"OYUNCU ALANI"}),u.jsx("h2",{children:"Profilin"}),u.jsx("p",{children:"İlerlemeni, rozetlerini ve arkadaşlarını burada yönet."})]}),u.jsx("button",{className:"drawer-close",onClick:()=>W(!1),children:"×"})]}),u.jsxs("div",{className:"drawer-identity",children:[u.jsxs("label",{className:"profile-avatar profile-avatar-large profile-avatar-edit",title:"Profil fotoğrafını değiştir",children:[Qt?u.jsx("img",{src:Qt,alt:""}):u.jsx("span",{children:(F.name||"O").slice(0,1).toUpperCase()}),u.jsx("input",{type:"file",accept:"image/*",onChange:h=>{var y;return Ra((y=h.target.files)==null?void 0:y[0])}}),u.jsx("i",{children:"+"})]}),u.jsxs("div",{children:[u.jsx("strong",{children:F.name||"Oyuncu"}),u.jsxs("span",{children:["Seviye ",co(F.xp)," · ",F.xp||0," XP"]})]})]}),u.jsx("div",{className:"drawer-account-actions",children:u.jsx("button",{className:"btn primary",onClick:()=>{Yr(F.name||""),Xt("profile"),ut(!0)},children:"Profili düzenle"})}),u.jsxs("div",{className:"drawer-xp",children:[u.jsxs("div",{children:[u.jsx("span",{children:"Seviye ilerlemesi"}),u.jsxs("b",{children:[(F.xp||0)%500," / 500 XP"]})]}),u.jsx("div",{className:"xp-track",children:u.jsx("i",{style:{width:`${Math.min(100,(F.xp||0)%500/5)}%`}})})]}),u.jsxs("div",{className:"drawer-stat-grid",children:[u.jsxs("div",{children:[u.jsx("b",{children:F.completedPuzzles||0}),u.jsx("span",{children:"Puzzle"})]}),u.jsxs("div",{children:[u.jsx("b",{children:F.togetherPuzzles||0}),u.jsx("span",{children:"Birlikte"})]}),u.jsxs("div",{children:[u.jsx("b",{children:F.bestTime?Gg(F.bestTime):"—"}),u.jsx("span",{children:"Rekor"})]})]}),u.jsxs("section",{className:"drawer-section history-section",children:[u.jsxs("div",{className:"drawer-section-title",children:[u.jsx("span",{children:"YAPILAN PUZZLELAR"}),u.jsx("b",{children:Array.isArray(F.history)?F.history.length:0})]}),Array.isArray(F.history)&&F.history.length>0?u.jsx("div",{className:"history-grid",children:F.history.slice(0,20).map((h,y)=>u.jsxs("div",{className:"history-card",children:[h.imageUrl?u.jsx("img",{src:h.imageUrl,alt:"Tamamlanan puzzle",loading:"lazy"}):u.jsx("div",{className:"history-image-placeholder",children:"PUZZLE"}),u.jsxs("div",{className:"history-card-copy",children:[u.jsx("strong",{children:h.difficulty||"Puzzle"}),u.jsxs("span",{children:[h.pieces||"—"," parça · ",Gg(h.time)]}),u.jsx("small",{children:h.completedAt?new Date(h.completedAt).toLocaleDateString("tr-TR"):""})]})]},`${h.roomCode||"puzzle"}-${h.completedAt||y}`))}):u.jsx("div",{className:"social-empty",children:"Henüz tamamladığın puzzle yok."})]}),u.jsxs("section",{className:"drawer-section",children:[u.jsxs("div",{className:"drawer-section-title",children:[u.jsx("span",{children:"ROZETLER"}),u.jsxs("b",{children:[((E=F.badges)==null?void 0:E.length)||0," / ",Vg.length]})]}),u.jsx("div",{className:"drawer-badges",children:Vg.map(h=>{var T;const y=(T=F.badges)==null?void 0:T.includes(h.id);return u.jsxs("div",{className:`drawer-badge ${y?"earned":"locked"}`,children:[u.jsx("i",{children:y?"✓":"·"}),u.jsx("span",{children:h.name})]},h.id)})})]}),!(e!=null&&e.isAnonymous)&&u.jsxs("section",{className:"drawer-section social-section",children:[u.jsxs("div",{className:"drawer-section-title",children:[u.jsx("span",{children:"SOSYAL"}),u.jsxs("b",{children:[He.length," arkadaş"]})]}),u.jsxs("div",{className:"social-search",children:[u.jsx("input",{value:Re,onChange:h=>gn(h.target.value),onKeyDown:h=>{h.key==="Enter"&&ji()},placeholder:"Oyuncu adı ara"}),u.jsx("button",{className:"btn primary",onClick:ji,disabled:_n,children:_n?"...":"Ara"})]}),X&&u.jsx("div",{className:"social-message",children:X}),tt.length>0&&u.jsx("div",{className:"social-results",children:tt.map(h=>u.jsxs("div",{className:"social-result",children:[u.jsx("div",{className:"mini-avatar avatar-click",onClick:()=>h.avatar&&Jt({src:h.avatar,name:h.name||"Oyuncu"}),children:h.avatar?u.jsx("img",{src:h.avatar,alt:""}):(h.name||"O").slice(0,1).toUpperCase()}),u.jsxs("div",{children:[u.jsx("strong",{children:h.name||"Oyuncu"}),u.jsxs("span",{children:["Seviye ",co(h.xp)," · ",h.completedPuzzles||0," puzzle"]})]}),u.jsx("button",{className:"btn tiny ghost",onClick:()=>Zt(h),children:"Profil"}),u.jsx("button",{className:"btn tiny ghost",disabled:!!vn[h.uid],onClick:()=>Pa(h),children:vn[h.uid]?"Gönderildi":"Ekle"})]},h.uid))}),u.jsxs("div",{className:"friend-list",children:[He.map(h=>u.jsxs("div",{className:"friend-row",children:[u.jsx("div",{className:"mini-avatar",onClick:()=>Zt(h),children:h.avatar?u.jsx("img",{src:h.avatar,alt:""}):(h.name||"O").slice(0,1).toUpperCase()}),u.jsxs("div",{onClick:()=>Zt(h),className:"friend-main",children:[u.jsx("strong",{children:h.name}),u.jsxs("span",{children:[h.completedPuzzles||0," puzzle · Seviye ",co(h.xp)]})]}),u.jsxs("div",{className:"friend-row-actions",children:[u.jsxs("button",{className:"mini-action",onClick:()=>Aa(h),children:["Sohbet",Oi[h.uid]?u.jsx("i",{className:"unread-dot"}):null]}),u.jsx("button",{className:"mini-action",onClick:()=>Zt(h),children:"Profil"}),u.jsx("button",{className:"mini-action danger",onClick:()=>Oa(h),children:"Sil"})]})]},h.uid)),!He.length&&!tt.length&&u.jsx("div",{className:"social-empty",children:"Arkadaşlarını isimleriyle bul. Eşleştiğinizde davet linkiyle aynı odada oynayabilirsiniz."})]}),Gs.length>0&&u.jsxs("div",{className:"request-box blocked-box",children:[u.jsxs("div",{className:"drawer-section-title",children:[u.jsx("span",{children:"ENGELLENENLER"}),u.jsx("b",{children:Gs.length})]}),Gs.map(h=>u.jsxs("div",{className:"social-result",children:[u.jsx("div",{className:"mini-avatar avatar-click",onClick:()=>h.avatar&&Jt({src:h.avatar,name:h.name||"Oyuncu"}),children:h.avatar?u.jsx("img",{src:h.avatar,alt:""}):(h.name||"O").slice(0,1).toUpperCase()}),u.jsxs("div",{children:[u.jsx("strong",{children:h.name||"Oyuncu"}),u.jsx("span",{children:"Engellenmiş hesap"})]}),u.jsx("button",{className:"btn tiny ghost",onClick:()=>fe(h),children:"Engeli kaldır"})]},h.uid))]}),se.length>0&&u.jsxs("div",{className:"request-box",children:[u.jsxs("div",{className:"drawer-section-title",children:[u.jsx("span",{children:"GELEN İSTEKLER"}),u.jsx("b",{children:se.length})]}),se.map(h=>u.jsxs("div",{className:"social-result",children:[u.jsx("div",{className:"mini-avatar avatar-click",onClick:()=>h.avatar&&Jt({src:h.avatar,name:h.name||"Oyuncu"}),children:h.avatar?u.jsx("img",{src:h.avatar,alt:""}):(h.name||"O").slice(0,1).toUpperCase()}),u.jsxs("div",{children:[u.jsx("strong",{children:h.name||"Oyuncu"}),u.jsx("span",{children:"Seninle arkadaş olmak istiyor"})]}),u.jsx("button",{className:"btn tiny primary",onClick:()=>Ks(h),children:"Kabul"}),u.jsx("button",{className:"btn tiny ghost",onClick:()=>ba(h),children:"Sil"})]},h.uid))]}),Ai.length>0&&u.jsxs("div",{className:"request-box room-invites",children:[u.jsxs("div",{className:"drawer-section-title",children:[u.jsx("span",{children:"PUZZLE DAVETLERİ"}),u.jsx("b",{children:Ai.length})]}),Ai.map(h=>u.jsxs("div",{className:"social-result",children:[u.jsx("div",{className:"mini-avatar",children:(h.fromName||"O").slice(0,1).toUpperCase()}),u.jsxs("div",{children:[u.jsx("strong",{children:h.fromName||"Oyuncu"}),u.jsx("span",{children:"Seni ortak puzzle'a davet etti"})]}),u.jsx("button",{className:"btn tiny primary",onClick:()=>qs(h),children:"Katıl"}),u.jsx("button",{className:"btn tiny ghost",onClick:()=>Ys(h),children:"Sil"})]},h.code))]}),rt&&u.jsxs("div",{className:"chat-panel",children:[u.jsxs("div",{className:"chat-head",children:[u.jsx("strong",{children:rt.name}),u.jsx("button",{className:"drawer-close",onClick:()=>Gr(null),children:"×"})]}),u.jsx("div",{className:"chat-messages",children:Pi.map(h=>u.jsxs("div",{className:`chat-bubble ${h.senderId===e.uid?"mine":""}`,children:[u.jsx("span",{children:h.text}),u.jsx("small",{children:new Date(h.at).toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"})})]},h.id))}),u.jsxs("div",{className:"chat-compose",children:[u.jsx("input",{value:Us,onChange:h=>Fs(h.target.value),onKeyDown:h=>{h.key==="Enter"&&Ui()},placeholder:"Mesaj yaz..."}),u.jsx("button",{className:"btn primary",onClick:Ui,children:"Gönder"})]})]}),de&&u.jsxs("div",{className:"selected-profile-card",children:[u.jsxs("div",{className:"selected-profile-head",children:[u.jsx("button",{className:"drawer-close",onClick:()=>nt(null),children:"×"}),u.jsx("div",{className:"profile-avatar profile-avatar-large avatar-click",onClick:()=>de.avatar&&Jt({src:de.avatar,name:de.name||"Oyuncu"}),children:de.avatar?u.jsx("img",{src:de.avatar,alt:""}):(de.name||"O").slice(0,1).toUpperCase()}),u.jsxs("div",{children:[u.jsx("span",{className:"panel-kicker",children:"OYUNCU PROFİLİ"}),u.jsx("h3",{children:de.name||"Oyuncu"}),u.jsxs("p",{children:["Seviye ",co(de.xp)," · ",de.xp||0," XP"]})]})]}),u.jsxs("div",{className:"profile-stat-grid compact",children:[u.jsxs("div",{className:"profile-stat-card",children:[u.jsx("b",{children:de.completedPuzzles||0}),u.jsx("span",{children:"Puzzle"})]}),u.jsxs("div",{className:"profile-stat-card accent-pink",children:[u.jsx("b",{children:de.togetherPuzzles||0}),u.jsx("span",{children:"Birlikte"})]})]}),u.jsxs("div",{className:"selected-profile-actions",children:[u.jsxs("button",{className:"btn primary",onClick:()=>Pa(de),disabled:de.uid===e.uid||!!He.some(h=>h.uid===de.uid)||!!vn[de.uid],children:[" ",He.some(h=>h.uid===de.uid)?"Arkadaşsınız":vn[de.uid]?"İstek gönderildi":"Arkadaş ekle"]}),He.some(h=>h.uid===de.uid)&&u.jsx("button",{className:"btn ghost",onClick:()=>Aa(de),children:"Sohbet"}),u.jsx("button",{className:"btn ghost danger-btn",onClick:()=>Da(de),children:"Engelle"})]})]})]})]})}),Li&&u.jsx("div",{className:"avatar-viewer-backdrop",onClick:()=>Jt(null),children:u.jsxs("div",{className:"avatar-viewer",onClick:h=>h.stopPropagation(),children:[u.jsx("button",{className:"avatar-viewer-close",onClick:()=>Jt(null),"aria-label":"Kapat",children:"×"}),u.jsx("img",{src:Li.src,alt:Li.name||"Profil fotoğrafı"}),u.jsx("strong",{children:Li.name||"Oyuncu"})]})}),On&&F&&u.jsx("div",{className:"settings-modal-backdrop",onClick:()=>ut(!1),children:u.jsxs("section",{className:"settings-modal",onClick:h=>h.stopPropagation(),children:[u.jsxs("div",{className:"settings-head",children:[u.jsxs("div",{children:[u.jsx("span",{className:"panel-kicker",children:"HESAP AYARLARI"}),u.jsx("h3",{children:"Profilini yönet"})]}),u.jsx("button",{className:"drawer-close",onClick:()=>ut(!1),children:"×"})]}),u.jsxs("div",{className:"settings-tabs",children:[u.jsx("button",{className:qr==="profile"?"active":"",onClick:()=>Xt("profile"),children:"Profil"}),u.jsx("button",{className:qr==="security"?"active":"",onClick:()=>Xt("security"),children:"Güvenlik"})]}),qr==="profile"?u.jsxs("div",{className:"settings-form",children:[u.jsxs("label",{className:"settings-avatar profile-avatar profile-avatar-large profile-avatar-edit",children:[Qt?u.jsx("img",{src:Qt,alt:""}):u.jsx("span",{children:($s||"O").slice(0,1).toUpperCase()}),u.jsx("input",{type:"file",accept:"image/*",onChange:h=>{var y;return Ra((y=h.target.files)==null?void 0:y[0])}}),u.jsx("i",{children:"+"})]}),u.jsxs("label",{className:"field",children:[u.jsx("span",{children:"Görünen ad"}),u.jsx("input",{value:$s,onChange:h=>Yr(h.target.value),maxLength:40})]}),u.jsxs("div",{className:"settings-option theme-option",children:[u.jsxs("div",{children:[u.jsx("strong",{children:"Koyu tema"}),u.jsx("span",{children:"Puzzle alanı ve arayüzü koyu görünüme geçir."})]}),u.jsx("button",{className:`switch ${r==="dark"?"on":""}`,onClick:i,children:u.jsx("i",{})})]}),u.jsx("button",{className:"btn primary settings-save",disabled:Dn,onClick:ze,children:Dn?"Kaydediliyor...":"Değişiklikleri kaydet"})]}):u.jsxs("div",{className:"settings-form",children:[u.jsxs("div",{className:"security-note",children:[u.jsx("strong",{children:"Şifre"}),u.jsx("span",{children:"Hesabının giriş şifresini buradan değiştirebilirsin."})]}),u.jsxs("label",{className:"field",children:[u.jsx("span",{children:"Yeni şifre"}),u.jsx("input",{type:"password",value:ir,onChange:h=>Bs(h.target.value),placeholder:"En az 6 karakter"})]}),u.jsxs("label",{className:"field",children:[u.jsx("span",{children:"Yeni şifre tekrar"}),u.jsx("input",{type:"password",value:Ws,onChange:h=>Qr(h.target.value),placeholder:"Şifreyi tekrar yaz"})]}),u.jsx("button",{className:"btn primary settings-save",disabled:Dn,onClick:Ma,children:Dn?"Değiştiriliyor...":"Şifreyi değiştir"}),u.jsx("div",{className:"security-divider",children:u.jsx("span",{children:"GÖRÜNÜRLÜK VE ERİŞİM"})}),u.jsxs("div",{className:"settings-option",children:[u.jsxs("div",{children:[u.jsx("strong",{children:"Profilim aramalarda görünsün"}),u.jsx("span",{children:"Diğer oyuncular seni isimle bulabilsin."})]}),u.jsx("button",{className:`switch ${Xr?"on":""}`,onClick:()=>Hs(h=>!h),children:u.jsx("i",{})})]}),u.jsxs("div",{className:"settings-option",children:[u.jsxs("div",{children:[u.jsx("strong",{children:"Arkadaşlık isteklerine izin ver"}),u.jsx("span",{children:"Sana yeni arkadaşlık isteği gönderilebilsin."})]}),u.jsx("button",{className:`switch ${sr?"on":""}`,onClick:()=>Vs(h=>!h),children:u.jsx("i",{})})]}),u.jsxs("div",{className:"settings-option",children:[u.jsxs("div",{children:[u.jsx("strong",{children:"Mesajlara izin ver"}),u.jsx("span",{children:"Arkadaşların sana özel mesaj gönderebilsin."})]}),u.jsx("button",{className:`switch ${Di?"on":""}`,onClick:()=>Na(h=>!h),children:u.jsx("i",{})})]}),u.jsx("button",{className:"btn primary settings-save",disabled:Dn,onClick:ze,children:Dn?"Kaydediliyor...":"Güvenlik ve görünürlük ayarlarını kaydet"})]})]})})]})}const Q=30,Jr=["#ff6f9c","#7c83fd"],nb=.08,rb=100;function ib(t,e){return t*e}function sb({roomCode:t,playerId:e,playerName:n,isGuest:r=!1,pendingJoin:i,onLeave:s,theme:o="light"}){var qs,Ys,La,ja;const[a,l]=N.useState(i&&!n),[c,p]=N.useState(""),[d,f]=N.useState(null),[_,w]=N.useState({}),[S,D]=N.useState({mine:0,partner:0,total:0}),[g,m]=N.useState(""),[v,C]=N.useState(!1),[j,z]=N.useState(!1),[B,W]=N.useState(!1),[F,J]=N.useState(null),[Re,gn]=N.useState(null),[tt,Vr]=N.useState(0),[He,Rt]=N.useState(!1),[_n,U]=N.useState(1),[X,$]=N.useState(!1),[se,ge]=N.useState(null),[vn,Pt]=N.useState(""),[de,nt]=N.useState(null),[rt,Gr]=N.useState(!1),[Pi,bi]=N.useState(null),[Us,Fs]=N.useState([]),[Kr,Sa]=N.useState(""),[Ai,Ia]=N.useState(!1),Oi=N.useRef(null),yn=N.useRef(null),Zc=N.useRef(null),De=N.useRef({}),wn=N.useRef({}),zt=N.useRef({}),Ta=N.useRef(1),it=N.useRef(null),Yt=N.useRef({}),zs=N.useRef(0),Qt=N.useRef(!1),bt=N.useRef(!0),On=N.useRef(!0),ut=N.useRef(!0),qr=N.useRef([]),Xt=N.useRef({key:null,until:0}),$s=N.useRef(Jr[0]),Yr=N.useRef(!1),ir=N.useRef(!1),Bs=N.useRef(!1),Ws=N.useCallback(async()=>{var y;if(r||Yr.current||ir.current||d!=null&&d.cheatedBy||!d)return;Yr.current=!0;const E=d.totalPieces||d.rows*d.cols,h=(E>=200?250:E>=100?100:50)+(d.rotatePieces?50:0);try{const T=G(K,`users/${e}`),R=(await at(T)).val()||{},P=Number(R.completedPuzzles||0)+1,I=Array.isArray(R.history)?R.history:[];I.unshift({roomCode:t,pieces:E,time:tt,difficulty:d.difficultyName||"Klasik",imageUrl:d.image||"",partnerUid:Object.keys(_||{}).find(V=>V!==e)||null,partnerName:((y=Object.values(_||{}).find(V=>V==null?void 0:V.connected))==null?void 0:y.name)||null,completedAt:Date.now()});const x=Array.isArray(R.badges)?R.badges:[],M=[...x],b=V=>{M.includes(V)||M.push(V)};P===1&&b("first"),E>=100&&b("hundred"),E>=200&&b("twohundred"),d.rotatePieces&&b("rotator"),(Re??0)===(d.hintsAllowed??0)&&b("perfect");const L=Object.values(_||{}).filter(V=>(V==null?void 0:V.connected)===!0);L.length>=2&&b("team");const ee=Number(R.xp||0)+h;await pt(T,{name:R.name||n||"Oyuncu",xp:ee,completedPuzzles:P,togetherPuzzles:Number(R.togetherPuzzles||0)+(L.length>=2?1:0),totalTime:Number(R.totalTime||0)+tt,bestTime:Math.min(Number(R.bestTime||1/0),tt),badges:M,history:I.slice(0,20)}),ge({gainedXp:h,level:Math.floor(ee/500)+1,newBadges:M.filter(V=>!x.includes(V))})}catch(T){console.error("Ödül kaydı hatası:",T),Yr.current=!1,ge(null)}},[d,e,n,t,tt,Re,_,r]),Qr=N.useCallback(()=>{const E=Object.values(De.current),h=E.length;if(!h)return;const y=E.filter(P=>P.placed&&P.placedBy===e).length,T=E.filter(P=>P.placed&&P.placedBy&&P.placedBy!==e).length;D(P=>({...P,mine:y,partner:T,total:h}));const k=E.filter(P=>P.placed).length,R=!!(d!=null&&d.cheatedBy)||E.some(P=>(P==null?void 0:P.movedBy)==="cheat");h>0&&k===h&&(Bs.current||W(!0),R?ge(null):Ws())},[e,Ws]);N.useEffect(()=>{if(a)return;let E=!1;return(async()=>{var h,y;try{const T=G(K,`rooms/${t}/players`),R=(await at(T)).val()||{},P=Object.values(R).filter(L=>(L==null?void 0:L.connected)===!0);if(!R[e]&&P.length>=2){E||C(!0);return}const x=Object.entries(R).filter(([L,ee])=>L!==e&&(ee==null?void 0:ee.connected)===!0).map(([,L])=>L==null?void 0:L.color),M=((h=R[e])==null?void 0:h.color)||Jr.find(L=>!x.includes(L))||Jr[0];$s.current=M;const b=G(K,`rooms/${t}/players/${e}`);await hg(b).remove(),await hg(G(K,`rooms/${t}/liveMoves/${e}`)).remove(),await Bn(b,{name:(n||c||"Sen").trim()||"Sen",color:M,connected:!0,joinedAt:((y=R[e])==null?void 0:y.joinedAt)||Date.now()})}catch(T){console.error("Oyuncu kaydı hatası:",T)}})(),()=>{E=!0}},[a,t,e,n,c]),N.useEffect(()=>{a||(async()=>{try{const E=await at(G(K,`rooms/${t}`));if(!E.exists()){C(!0);return}f(E.val())}catch(E){console.error("Oda yükleme hatası:",E)}})()},[a,t]),N.useEffect(()=>{if(a)return;const E=G(K,`rooms/${t}/players`),h=Ot(E,y=>{w(y.val()||{})});return()=>{h==null||h()}},[a,t]),N.useEffect(()=>{if(a||!Object.keys(_||{}).length)return;let E=!1;return(async()=>{const h=await Promise.all(Object.entries(_).map(async([T,k])=>{if(k!=null&&k.avatar)return[T,k];try{const P=(await at(G(K,`publicProfiles/${T}`))).val()||{};return[T,{...k,avatar:typeof P.avatar=="string"?P.avatar:""}]}catch{return[T,k]}}));if(E)return;const y=Object.fromEntries(h);w(T=>{let k=!1;const R={...T};return Object.entries(y).forEach(([P,I])=>{var x;I!=null&&I.avatar&&I.avatar!==((x=T[P])==null?void 0:x.avatar)&&(R[P]={...T[P],avatar:I.avatar},k=!0)}),k?R:T})})(),()=>{E=!0}},[a,_]),N.useEffect(()=>{if(a)return;const E=G(K,`rooms/${t}/cheatedBy`),h=Ot(E,y=>{const T=y.val()||null;T&&(ir.current=!0,f(k=>k&&{...k,cheatedBy:T}),ge(null))});return()=>h==null?void 0:h()},[a,t]),N.useEffect(()=>{if(!d||!t)return;const E=G(K,`rooms/${t}/chat`),h=Ot(E,y=>{const T=y.val()||{},k=Object.entries(T).map(([I,x])=>({id:I,...x||{}})).sort((I,x)=>Number(I.at||0)-Number(x.at||0)).slice(-100);Fs(k);const R=Number(localStorage.getItem(`roomChatRead:${t}:${e}`)||0),P=[...k].reverse().find(I=>I.senderId!==e);Ia(!rt&&!!P&&Number(P.at||0)>R)});return()=>h==null?void 0:h()},[d,t,e,rt]);async function Xr(){const E=Kr.trim();if(!E||!t)return;const h=`${e}_${Date.now()}`;await Bn(G(K,`rooms/${t}/chat/${h}`),{senderId:e,name:(fe==null?void 0:fe.name)||n||"Oyuncu",text:E.slice(0,300),at:Date.now()}),Sa("")}N.useEffect(()=>{var ee,V;if(!d)return;gn(Number.isFinite(Number(d.hintsAllowed))?Number(d.hintsAllowed):3),Rt(!1),Oi.current||(Oi.current=Date.now());const{rows:E,cols:h,boardW:y,boardH:T,seed:k,image:R}=d,P=y/h,I=T/E,x=j0(E,h,k),M=((ee=d.edges)==null?void 0:ee.edgesV)||x.edgesV,b=((V=d.edges)==null?void 0:V.edgesH)||x.edgesH,L=new Image;L.onload=()=>{const Z=document.createElement("canvas");Z.width=y+Q*2,Z.height=T+Q*2,Z.getContext("2d").drawImage(L,Q,Q,y,T);const Ue=document.createElement("canvas");Ue.width=y,Ue.height=T,Ue.getContext("2d").drawImage(L,0,0,y,T),wn.current.__ghost=Ue;for(let Me=0;Me<E;Me++)for(let Le=0;Le<h;Le++){const ce=`${Me}_${Le}`,ae=U0(Me,Le,E,h,M,b),ye=document.createElement("canvas");ye.width=P+Q*2,ye.height=I+Q*2;const Xe=ye.getContext("2d");Wg(Xe,P,I,Q,ae),Xe.save(),Xe.clip(),Xe.drawImage(L,Math.max(0,Le*P-Q),Math.max(0,Me*I-Q),Math.min(L.width-Math.max(0,Le*P-Q),P+Q*2),Math.min(L.height-Math.max(0,Me*I-Q),I+Q*2),Le===0?Q:0,Me===0?Q:0,Math.min(P+Q*2,L.width-Math.max(0,Le*P-Q)),Math.min(I+Q*2,L.height-Math.max(0,Me*I-Q))),Xe.restore(),Wg(Xe,P,I,Q,ae),Xe.lineWidth=2.2,Xe.strokeStyle="rgba(60,40,50,0.32)",Xe.stroke(),wn.current[ce]=ye,zt.current[ce]=0}bt.current=!0,On.current=!0,ut.current=!0},L.src=R},[d]),N.useEffect(()=>{if(!d)return;const E=G(K,`rooms/${t}/reactions`),h=Ot(E,y=>{var I;const T=y.val()||{},R=(I=Object.entries(T).filter(([x,M])=>x!==e&&(M==null?void 0:M.text)).sort((x,M)=>{var b,L;return Number(((b=M[1])==null?void 0:b.at)||0)-Number(((L=x[1])==null?void 0:L.at)||0)})[0])==null?void 0:I[1];if(!R)return;const P=Date.now()-Number(R.at||0);P>5e3||(nt({name:R.name||"Diğer oyuncu",text:R.text,at:R.at}),window.clearTimeout(window.__partnerReactionTimer),window.__partnerReactionTimer=window.setTimeout(()=>{nt(null)},Math.max(500,5e3-P)))});return()=>{h==null||h(),window.clearTimeout(window.__partnerReactionTimer)}},[d,t,e]),N.useEffect(()=>{if(!d)return;const E=G(K,`rooms/${t}/pieces`),h=(k,R)=>{var I;if(!R||it.current&&it.current.key===k)return;const P=De.current[k];if(De.current[k]=R,Qt.current&&R.movedBy&&R.movedBy!==e&&R.movedAt&&(!(P!=null&&P.movedAt)||R.movedAt>P.movedAt)){Xt.current={key:k,until:Date.now()+700};const x=((I=_[R.movedBy])==null?void 0:I.name)||"Diğer oyuncu";m(`${x} bir parça oynattı`),clearTimeout(window.__toastTimer),window.__toastTimer=window.setTimeout(()=>{m("")},900)}bt.current=!0,On.current=!0,ut.current=!0,Qr()},y=J1(E,k=>{h(k.key,k.val()),Object.keys(De.current).length>=d.rows*d.cols&&(Qt.current=!0,Qr())}),T=Z1(E,k=>{h(k.key,k.val())});return()=>{fg(E,"child_added",y),fg(E,"child_changed",T)}},[d,t,e,_,Qr]),N.useEffect(()=>{if(!d)return;const E=G(K,`rooms/${t}/liveMoves`),h=Ot(E,y=>{const T=y.val()||{};let k=!1;Object.entries(T).forEach(([R,P])=>{if(R===e||!(P!=null&&P.key))return;const I=Yt.current[R];(!I||I.key!==P.key)&&(k=!0),Yt.current[R]=P}),Object.keys(Yt.current).forEach(R=>{T[R]||(delete Yt.current[R],k=!0)}),bt.current=!0,ut.current=!0,k&&(On.current=!0)});return()=>{h==null||h(),Yt.current={}}},[d,t,e]),N.useEffect(()=>{if(!d)return;let E;const h=()=>{let y=!1;Object.values(Yt.current).forEach(T=>{const k=De.current[T.key];if(!k||k.placed)return;const R=Number(T.x),P=Number(T.y);if(!Number.isFinite(R)||!Number.isFinite(P))return;const I=R-k.x,x=P-k.y;Math.abs(I)>.2||Math.abs(x)>.2?(k.x+=I*.42,k.y+=x*.42,y=!0):(k.x=R,k.y=P)}),y&&(bt.current=!0,ut.current=!0),E=requestAnimationFrame(h)};return E=requestAnimationFrame(h),()=>cancelAnimationFrame(E)},[d]),N.useEffect(()=>{if(!d||B)return;const E=setInterval(()=>{Oi.current&&Vr(Math.floor((Date.now()-Oi.current)/1e3))},1e3);return()=>clearInterval(E)},[d,B]);function Hs(E){const h=Math.floor(E/60).toString().padStart(2,"0"),y=Math.floor(E%60).toString().padStart(2,"0");return`${h}:${y}`}function sr(E){if(!(d!=null&&d.rotatePieces)||!E)return;const h=De.current[E];!h||h.placed||(h.rotation=((Number(h.rotation)||0)+90)%360,J(E),bt.current=!0,On.current=!0,ut.current=!0,pt(G(K,`rooms/${t}/pieces/${E}`),{rotation:h.rotation,movedBy:e,movedAt:Date.now()}).catch(()=>{}))}function Vs(E,h){if(!d)return null;const y=d.boardW/d.cols,T=d.boardH/d.rows,k=Object.keys(De.current).sort((R,P)=>(zt.current[P]||0)-(zt.current[R]||0));for(const R of k){const P=De.current[R];if(!P||P.placed)continue;const I=-((Number(P.rotation)||0)*Math.PI)/180,x=P.x+y/2,M=P.y+T/2,b=E-x,L=h-M,ee=b*Math.cos(I)-L*Math.sin(I)+y/2,V=b*Math.sin(I)+L*Math.cos(I)+T/2;if(ee>=-Q&&ee<=y+Q&&V>=-Q&&V<=T+Q)return R}return null}function Di(){sr(F)}function Na(E){if(!(d!=null&&d.rotatePieces))return;const h=yn.current;if(!h)return;const y=h.getBoundingClientRect(),T=h.width/y.width,k=h.height/y.height,R=(E.clientX-y.left)*T,P=(E.clientY-y.top)*k,I=Vs(R,P);I&&sr(I)}N.useEffect(()=>{let E;const h=()=>{var x;const I=new Set;return(x=it.current)!=null&&x.key&&I.add(it.current.key),Object.values(Yt.current).forEach(M=>{M!=null&&M.key&&I.add(M.key)}),I},y=(I,x,M)=>{if(!I)return null;const b=Number(I.rotation)||0,L=Math.abs(b%360*Math.PI/180),ee=b%180===0?0:Math.abs(x*Math.cos(L))/2+Math.abs(M*Math.sin(L))/2-x/2,V=b%180===0?0:Math.abs(x*Math.sin(L))/2+Math.abs(M*Math.cos(L))/2-M/2;return{x:I.x-Q-Math.max(0,ee)-4,y:I.y-Q-Math.max(0,V)-4,w:x+Q*2+Math.max(0,ee)*2+8,h:M+Q*2+Math.max(0,V)*2+8}};function T(I,x,M,b,L,ee=!1){const V=wn.current[x];if(!M||!V)return;I.save(),M.placed?(I.shadowColor="rgba(120,90,100,0.18)",I.shadowBlur=2):(I.shadowColor="rgba(0,0,0,0.18)",I.shadowBlur=4,I.shadowOffsetY=1);const Z=Number(M.rotation)||0;Z?(I.translate(M.x+b/2,M.y+L/2),I.rotate(Z*Math.PI/180),I.drawImage(V,-b/2-Q,-L/2-Q)):I.drawImage(V,M.x-Q,M.y-Q),I.restore(),ee&&(I.save(),I.strokeStyle="#ffd166",I.lineWidth=3,I.globalAlpha=.85,I.strokeRect(M.x-Q*.6,M.y-Q*.6,b+Q*1.2,L+Q*1.2),I.restore())}function k(){const I=Zc.current;if(!I||!d)return;const x=I.getContext("2d");if(!x)return;const{boardW:M,boardH:b,rows:L,cols:ee}=d,V=document.documentElement.dataset.theme==="dark"||o==="dark";x.clearRect(0,0,I.width,I.height),x.fillStyle=V?"#000000":"#fff5f7",Jt(x,0,0,M,b,18),x.fill();const Z=wn.current.__ghost;Z&&d.previewAllowed!==!1&&He&&(x.save(),x.globalAlpha=nb,Jt(x,0,0,M,b,18),x.clip(),x.drawImage(Z,0,0),x.restore()),x.strokeStyle="rgba(255,111,156,0.28)",x.lineWidth=2,Jt(x,1,1,M-2,b-2,18),x.stroke();const dt=b+50;x.fillStyle=V?"#090909":"#faf3f6",Jt(x,0,dt,M,I.height-dt-10,18),x.fill();const Ue=M/ee,Me=b/L,Le=h(),ce=Object.keys(wn.current).filter(ae=>ae!=="__ghost").sort((ae,ye)=>(zt.current[ae]||0)-(zt.current[ye]||0));for(const ae of ce){if(Le.has(ae))continue;const ye=De.current[ae];ye&&T(x,ae,ye,Ue,Me,!1)}On.current=!1}function R(){const I=yn.current;if(!I||!d)return;const x=I.getContext("2d");if(!x)return;const{boardW:M,boardH:b,rows:L,cols:ee}=d,V=M/ee,Z=b/L,dt=qr.current;for(const ce of dt)ce&&x.clearRect(ce.x,ce.y,ce.w,ce.h);const Ue=[],Me=h();Me.forEach(ce=>{var up;const ae=Object.values(Yt.current).find(eu=>(eu==null?void 0:eu.key)===ce),ye=De.current[ce];if(!ye)return;let Xe=ye;if(ae&&((up=it.current)==null?void 0:up.key)!==ce&&(Xe={...ye,x:Number(ae.x),y:Number(ae.y)}),!Number.isFinite(Xe.x)||!Number.isFinite(Xe.y))return;const Ua=Xt.current.key===ce&&Date.now()<Xt.current.until;T(x,ce,Xe,V,Z,Ua);const cp=y(Xe,V,Z);cp&&Ue.push(cp)});const Le=Xt.current.key;if(Le&&!Me.has(Le)&&Date.now()<Xt.current.until){const ce=De.current[Le];if(ce){x.save(),x.strokeStyle="#ffd166",x.lineWidth=3,x.globalAlpha=.85,x.strokeRect(ce.x-Q*.6,ce.y-Q*.6,V+Q*1.2,Z+Q*1.2),x.restore();const ae=y(ce,V,Z);ae&&Ue.push(ae)}}qr.current=Ue,ut.current=!1}function P(){E=requestAnimationFrame(P),d&&(On.current&&k(),(ut.current||On.current)&&R(),bt.current=!1)}return P(),()=>{cancelAnimationFrame(E),qr.current=[]}},[d,_,He,o]);function Gs(E){if(E.button===2){if(E.preventDefault(),!(d!=null&&d.rotatePieces))return;const V=yn.current;if(!V)return;const Z=V.getBoundingClientRect(),dt=V.width/Z.width,Ue=V.height/Z.height,Me=(E.clientX-Z.left)*dt,Le=(E.clientY-Z.top)*Ue,ce=Vs(Me,Le);ce&&sr(ce);return}const h=yn.current;if(!h||!d)return;const y=h.getBoundingClientRect(),T=h.width/y.width,k=h.height/y.height,R=(E.clientX-y.left)*T,P=(E.clientY-y.top)*k,{cols:I,boardW:x,boardH:M}=d,b=x/I,L=M/d.rows,ee=Object.keys(De.current).sort((V,Z)=>(zt.current[Z]||0)-(zt.current[V]||0));for(const V of ee){const Z=De.current[V];if(!Z||Z.placed)continue;const dt=(Number(Z.rotation)||0)*Math.PI/180,Ue=R-(Z.x+b/2),Me=P-(Z.y+L/2),Le=Math.cos(-dt),ce=Math.sin(-dt),ae=Ue*Le-Me*ce+b/2,ye=Ue*ce+Me*Le+L/2;if(ae>=-Q&&ae<=b+Q&&ye>=-Q&&ye<=L+Q){it.current={key:V,offsetX:R-Z.x,offsetY:P-Z.y},J(V),Ta.current+=1,zt.current[V]=Ta.current,h.setPointerCapture(E.pointerId),zs.current=Date.now(),pt(G(K,`rooms/${t}/liveMoves/${e}`),{key:V,x:Math.round(Z.x),y:Math.round(Z.y),movedAt:Date.now()}).catch(()=>{});break}}}function xa(E){const h=it.current;if(!h||!d)return;const y=yn.current,T=y.getBoundingClientRect(),k=y.width/T.width,R=y.height/T.height,P=(E.clientX-T.left)*k,I=(E.clientY-T.top)*R,x=De.current[h.key];if(!x)return;const M=d.boardW/d.cols,b=d.boardH/d.rows;x.x=Math.max(-Q,Math.min(y.width-M+Q,P-h.offsetX)),x.y=Math.max(-Q,Math.min(y.height-b+Q,I-h.offsetY)),bt.current=!0,ut.current=!0;const L=Date.now();L-zs.current>=rb&&(zs.current=L,pt(G(K,`rooms/${t}/liveMoves/${e}`),{key:h.key,x:Math.round(x.x),y:Math.round(x.y),movedAt:L}).catch(()=>{}))}function Dn(){const E=it.current;if(!E||!d)return;it.current=null;const{cols:h,boardW:y,boardH:T}=d,k=y/h,R=T/d.rows,[P,I]=E.key.split("_").map(Number),x=I*k,M=P*R,b=De.current[E.key];if(!b)return;const L=Math.min(k,R)*.4,ee=Math.abs(b.x-x),V=Math.abs(b.y-M);let Z=!1;(Number(b.rotation)||0)===0&&ee<L&&V<L&&(b.x=x,b.y=M,Z=!0);const dt=Date.now();b.placed=Z,b.placedBy=Z?e:null,b.movedBy=e,b.movedAt=dt,bt.current=!0,Qr(),pt(G(K,`rooms/${t}/pieces/${E.key}`),{x:Math.round(b.x),y:Math.round(b.y),placed:Z,placedBy:b.placedBy,movedBy:e,movedAt:dt}).catch(Ue=>{console.error("Parça bırakma hatası:",Ue)}),Un(G(K,`rooms/${t}/liveMoves/${e}`)).catch(()=>{})}function Mi(){if(!d)return;const E=Object.entries(De.current).filter(([,y])=>y&&!y.placed);if(!E.length){m("Bütün parçalar zaten tamamlandı.");return}if(Re!==null&&Re<=0){m("Yardım hakkın kalmadı.");return}Re!==null&&gn(y=>Math.max(0,y-1));const[h]=E[Math.floor(Math.random()*E.length)];Xt.current={key:h,until:Date.now()+2500},bt.current=!0,ut.current=!0,m("İşaretli parçaya bak."),clearTimeout(window.__missingPieceTimer),window.__missingPieceTimer=setTimeout(()=>{Xt.current={key:null,until:0},bt.current=!0,ut.current=!0,m("")},2500)}function Li(){if(!d)return;ir.current=!0;const E=Date.now(),h={},y=d.boardW/d.cols,T=d.boardH/d.rows;Object.entries(De.current).forEach(([k,R])=>{if(!R)return;const[P,I]=k.split("_").map(Number),x=I*y,M=P*T;R.x=x,R.y=M,R.rotation=0,R.placed=!0,R.placedBy=null,R.movedBy="cheat",R.movedAt=E,h[`rooms/${t}/pieces/${k}/x`]=Math.round(x),h[`rooms/${t}/pieces/${k}/y`]=Math.round(M),h[`rooms/${t}/pieces/${k}/rotation`]=0,h[`rooms/${t}/pieces/${k}/placed`]=!0,h[`rooms/${t}/pieces/${k}/placedBy`]=null,h[`rooms/${t}/pieces/${k}/movedBy`]="cheat",h[`rooms/${t}/pieces/${k}/movedAt`]=E}),h[`rooms/${t}/cheatedBy`]=e,h[`rooms/${t}/completionMode`]="cheat",pt(G(K),h).then(()=>{f(k=>k&&{...k,cheatedBy:e}),W(!0),m("Puzzle tamamlandı.")}).catch(k=>{console.error("Puzzle tamamlama hatası:",k)})}function Jt(E,h,y,T,k,R){E.beginPath(),E.moveTo(h+R,y),E.arcTo(h+T,y,h+T,y+k,R),E.arcTo(h+T,y+k,h,y+k,R),E.arcTo(h,y+k,h,y,R),E.arcTo(h,y,h+T,y,R),E.closePath()}async function Et(){if(!t||!e){s==null||s();return}try{await Un(G(K,`rooms/${t}/liveMoves/${e}`)),await Un(G(K,`rooms/${t}/players/${e}`));const E=await at(G(K,`rooms/${t}/players`));(!E.exists()||Object.keys(E.val()||{}).length===0)&&await Un(G(K,`rooms/${t}`))}catch(E){console.error("Oda çıkış temizliği hatası:",E)}finally{s==null||s()}}function Ra(){var h;const E=`${window.location.origin}${window.location.pathname}?room=${t}`;(h=navigator.clipboard)==null||h.writeText(E),z(!0),setTimeout(()=>z(!1),1500)}if(a)return u.jsx("div",{className:"home",children:u.jsxs("div",{className:"home-card",children:[u.jsx("h1",{children:"Odaya katıl"}),u.jsxs("p",{className:"subtitle",children:["Oda kodu: ",t]}),u.jsxs("div",{className:"form",children:[u.jsxs("label",{className:"field",children:[u.jsx("span",{children:"Adın (opsiyonel)"}),u.jsx("input",{value:c,onChange:E=>p(E.target.value),placeholder:"Adın"})]}),u.jsx("button",{className:"btn primary",onClick:()=>l(!1),children:"Katıl"})]})]})});if(v)return u.jsx("div",{className:"home",children:u.jsxs("div",{className:"home-card",children:[u.jsx("h1",{children:"Bu oda dolu"}),u.jsx("p",{className:"subtitle",children:"Bu odada zaten iki oyuncu var."}),u.jsx("button",{className:"btn primary",onClick:Et,children:"Geri dön"})]})});if(!d)return u.jsx("div",{className:"home",children:u.jsx("div",{className:"home-card",children:u.jsx("p",{className:"subtitle",children:"Yükleniyor..."})})});const ji=d.boardW,Pa=d.boardH+50,Ks=d.boardH/d.rows,ba=Math.max(5,Math.min(10,Math.ceil(Math.sqrt(ib(d.rows,d.cols)*1.2)))),Aa=Math.ceil(d.rows*d.cols/ba),Ui=Pa+Aa*Ks*1.22+Ks*2,Zt=S.total||d.rows*d.cols,Oa=Zt?Math.round(S.mine/Zt*100):0,Da=Zt?Math.round(S.partner/Zt*100):0,fe=_[e],ze=Object.entries(_).find(([E])=>E!==e),Ma=ze?ze[1].name:"Diğer oyuncu";return u.jsxs("div",{className:"game",children:[Pi&&u.jsx("div",{className:"avatar-viewer-backdrop",onClick:()=>bi(null),children:u.jsxs("div",{className:"avatar-viewer",onClick:E=>E.stopPropagation(),children:[u.jsx("button",{className:"avatar-viewer-close",onClick:()=>bi(null),"aria-label":"Kapat",children:"×"}),u.jsx("img",{src:Pi.src,alt:Pi.name||"Profil fotoğrafı"}),u.jsx("strong",{children:Pi.name||"Oyuncu"})]})}),u.jsxs("div",{className:"game-header",children:[u.jsxs("div",{className:"header-left",children:[u.jsxs("span",{className:"room-badge",children:["Oda: ",t]}),u.jsx("span",{className:"stat-badge",children:d.difficultyName||"Klasik"}),u.jsx("span",{className:"stat-badge",children:Hs(tt)}),u.jsxs("span",{className:"stat-badge",children:["Yardım: ",Re??0]}),u.jsx("button",{className:"btn tiny",onClick:Ra,children:j?"Kopyalandı ✓":"Davet linkini kopyala"}),u.jsx("button",{className:"btn tiny ghost",onClick:Mi,title:"Rastgele tamamlanmamış bir parçayı gösterir",children:"Kayıp parçayı bul"}),d.rotatePieces&&u.jsx("button",{className:"btn tiny ghost",onClick:Di,disabled:!F,children:"Parçayı döndür"}),d.previewAllowed!==!1&&u.jsx("button",{className:"btn tiny ghost",onClick:()=>Rt(E=>!E),children:He?"Önizlemeyi gizle":"Fotoğrafı göster"}),u.jsx("button",{className:"btn tiny ghost",onClick:()=>$(!0),title:"Kalan parçaları tamamlar",children:"Şifreli puzzleı tamamla"})]}),u.jsx("button",{className:"btn tiny ghost",onClick:s,children:"Odadan çık"})]}),u.jsxs("div",{className:"progress-area",children:[u.jsxs("div",{className:"progress-row",children:[u.jsx("span",{className:"game-player-avatar",onClick:()=>(fe==null?void 0:fe.avatar)&&bi({src:fe.avatar,name:(fe==null?void 0:fe.name)||"Sen"}),children:fe!=null&&fe.avatar?u.jsx("img",{src:fe.avatar,alt:""}):u.jsx("i",{style:{background:(fe==null?void 0:fe.color)||Jr[0]}})}),u.jsx("span",{className:"progress-label",children:(fe==null?void 0:fe.name)||"Sen"}),u.jsx("div",{className:"bar",children:u.jsx("div",{className:"bar-fill",style:{width:`${Oa}%`,background:(fe==null?void 0:fe.color)||Jr[0]}})}),u.jsxs("span",{className:"pct",children:[Oa,"%"]})]}),u.jsxs("div",{className:"progress-row",children:[u.jsx("span",{className:"game-player-avatar",onClick:()=>{var E;return((E=ze==null?void 0:ze[1])==null?void 0:E.avatar)&&bi({src:ze[1].avatar,name:Ma})},children:(qs=ze==null?void 0:ze[1])!=null&&qs.avatar?u.jsx("img",{src:ze[1].avatar,alt:""}):u.jsx("i",{style:{background:((Ys=ze==null?void 0:ze[1])==null?void 0:Ys.color)||Jr[1]}})}),u.jsx("span",{className:"progress-label",children:Ma}),u.jsx("div",{className:"bar",children:u.jsx("div",{className:"bar-fill",style:{width:`${Da}%`,background:((La=ze==null?void 0:ze[1])==null?void 0:La.color)||Jr[1]}})}),u.jsxs("span",{className:"pct",children:[Da,"%"]})]})]}),g&&u.jsx("div",{className:"toast",children:g}),de&&u.jsxs("div",{className:"reaction-toast",children:[de.name,": ",de.text]}),u.jsxs("div",{className:"game-tools",children:[u.jsxs("div",{className:"tool-group",children:[u.jsx("button",{className:"btn tiny ghost",onClick:()=>U(E=>Math.max(.75,+(E-.1).toFixed(2))),children:"−"}),u.jsxs("span",{className:"zoom-label",children:[Math.round(_n*100),"%"]}),u.jsx("button",{className:"btn tiny ghost",onClick:()=>U(E=>Math.min(1.6,+(E+.1).toFixed(2))),children:"+"}),u.jsx("button",{className:"btn tiny ghost",onClick:()=>U(1),children:"Sığdır"})]}),u.jsx("div",{className:"reaction-group",children:["Bulduğum!","Yaklaştım","Tamamdır"].map(E=>u.jsx("button",{className:"btn tiny ghost",onClick:async()=>{Pt(E),window.clearTimeout(window.__reactionTimer),window.__reactionTimer=window.setTimeout(()=>Pt(""),1400),await Bn(G(K,`rooms/${t}/reactions/${e}`),{text:E,name:(fe==null?void 0:fe.name)||"Sen",at:Date.now()})},children:E},E))})]}),u.jsxs("div",{className:"canvas-wrap",style:{position:"relative",width:`${Math.min(1400,900*_n)}px`,height:`${Ui*(Math.min(1400,900*_n)/ji)}px`,maxWidth:"none"},children:[u.jsx("canvas",{ref:Zc,width:ji,height:Ui,"aria-hidden":"true",style:{position:"absolute",inset:0,display:"block",width:"100%",height:"100%",maxWidth:"none",pointerEvents:"none"}}),u.jsx("canvas",{ref:yn,width:ji,height:Ui,style:{position:"absolute",inset:0,display:"block",width:"100%",height:"100%",maxWidth:"none",touchAction:"none",userSelect:"none",WebkitUserSelect:"none"},onPointerDown:Gs,onDoubleClick:Na,onPointerMove:xa,onPointerUp:Dn,onPointerCancel:Dn,onContextMenu:E=>E.preventDefault()})]}),u.jsx("p",{className:"hint",children:"Parçaları alttaki tepsiden tahtaya sürükle. Doğru yere yakın bırakınca kilitlenir."}),u.jsxs("button",{className:`room-chat-launcher ${rt?"open":""}`,onClick:()=>{Gr(E=>{const h=!E;return h&&(localStorage.setItem(`roomChatRead:${t}:${e}`,String(Date.now())),Ia(!1)),h})},title:"Oda sohbeti","aria-label":"Oda sohbeti",children:[u.jsx("span",{className:"room-chat-launcher-icon","aria-hidden":"true"}),u.jsx("span",{className:"room-chat-launcher-label",children:"Sohbet"}),Ai&&u.jsx("b",{children:"1"})]}),rt&&u.jsxs("div",{className:"room-chat-panel",children:[u.jsxs("div",{className:"room-chat-head",children:[u.jsxs("div",{children:[u.jsx("span",{className:"panel-kicker",children:"ORTAK ODA"}),u.jsx("strong",{children:"Sohbet"})]}),u.jsx("button",{className:"drawer-close",onClick:()=>Gr(!1),children:"×"})]}),u.jsx("div",{className:"room-chat-messages",children:Us.length===0?u.jsx("div",{className:"chat-empty",children:"Henüz mesaj yok. İlk mesajı sen gönder."}):Us.map(E=>u.jsxs("div",{className:`room-chat-bubble ${E.senderId===e?"mine":""}`,children:[u.jsx("b",{children:E.senderId===e?"Sen":E.name||"Oyuncu"}),u.jsx("span",{children:E.text}),u.jsx("small",{children:new Date(E.at).toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"})})]},E.id))}),u.jsxs("div",{className:"room-chat-compose",children:[u.jsx("input",{value:Kr,onChange:E=>Sa(E.target.value.slice(0,300)),onKeyDown:E=>{E.key==="Enter"&&!E.shiftKey&&(E.preventDefault(),Xr())},placeholder:"Mesaj yaz..."}),u.jsx("button",{className:"btn primary",onClick:Xr,children:"Gönder"})]})]}),X&&u.jsx("div",{className:"modal-backdrop",children:u.jsxs("div",{className:"confirm-card",children:[u.jsx("div",{className:"confirm-kicker",children:"KARARINI KESİNLEŞTİR"}),u.jsx("h2",{children:"Puzzle'ı senin yerine tamamlayalım mı?"}),u.jsx("p",{children:"Kalan parçalar doğru konum ve yönde otomatik yerleştirilecek. Bu işlem normal çözüm olarak ödüllendirilmeyecek."}),u.jsxs("div",{className:"row-buttons",children:[u.jsx("button",{className:"btn ghost",onClick:()=>$(!1),children:"Vazgeç"}),u.jsx("button",{className:"btn primary",onClick:()=>{$(!1),Li()},children:"Puzzle'ı tamamla"})]})]})}),B&&u.jsxs("div",{className:"finish-overlay",children:[u.jsx("div",{className:"finish-orbit orbit-one"}),u.jsx("div",{className:"finish-orbit orbit-two"}),u.jsxs("div",{className:"finish-card premium-finish",children:[u.jsx("div",{className:"finish-ribbon",children:"PUZZLE TAMAMLANDI"}),u.jsxs("div",{className:"finish-photo-frame",children:[u.jsx("img",{src:d.image,alt:"Tamamlanan puzzle"}),u.jsx("div",{className:"finish-photo-shine"})]}),u.jsx("p",{className:"finish-kicker",children:"BİRLİKTE BİTTİ"}),u.jsx("h2",{children:"Bu anıyı tamamladınız."}),u.jsx("p",{className:"finish-copy",children:"Son parça yerine oturdu. Şimdi ortaya çıkan fotoğrafın tadını çıkar."}),se&&u.jsxs("div",{className:"reward-box",children:[u.jsxs("b",{children:["+",se.gainedXp," XP"]}),u.jsxs("span",{children:["Seviye ",se.level]}),((ja=se.newBadges)==null?void 0:ja.length)>0&&u.jsxs("em",{children:[se.newBadges.length," yeni rozet"]})]}),u.jsxs("div",{className:"finish-stats",children:[u.jsxs("div",{children:[u.jsx("b",{children:Zt}),u.jsx("span",{children:"parça"})]}),u.jsxs("div",{children:[u.jsx("b",{children:Hs(tt)}),u.jsx("span",{children:"süre"})]}),u.jsxs("div",{children:[u.jsx("b",{children:Re??0}),u.jsx("span",{children:"kalan yardım"})]})]}),u.jsx("button",{className:"btn primary finish-button",onClick:()=>{Bs.current=!0,W(!1)},children:"Puzzle'a bak"})]})]})]})}function Kg(){const[t,e]=N.useState(!1),[n,r]=N.useState(!1),[i,s]=N.useState(""),[o,a]=N.useState(""),[l,c]=N.useState(""),[p,d]=N.useState(""),[f,_]=N.useState(!1);async function w(g){g.preventDefault(),d(""),_(!0);try{if(t){const m=i.trim(),v=o.trim().toLowerCase();if(!m)throw new Error("Lütfen bir isim gir.");const C=await vx(rn,v,l);await Ex(C.user,{displayName:m}),await Bn(G(K,`users/${C.user.uid}`),{name:m,email:v,puzzlesRemaining:3,createdAt:Date.now()}),await Sg(C.user),r(!0)}else{const m=await yx(rn,o.trim().toLowerCase(),l);if(await rh(m.user),!m.user.emailVerified){r(!0);return}}}catch(m){console.error(m),d({"auth/email-already-in-use":"Bu e-posta zaten kayıtlı.","auth/invalid-email":"Geçerli bir e-posta gir.","auth/weak-password":"Şifre en az 6 karakter olmalı.","auth/invalid-credential":"E-posta veya şifre hatalı.","auth/user-not-found":"Bu hesap bulunamadı.","auth/wrong-password":"Şifre hatalı.","auth/too-many-requests":"Çok fazla deneme yapıldı. Biraz sonra tekrar dene."}[m.code]||m.message||"Bir hata oluştu.")}finally{_(!1)}}async function S(){d(""),_(!0);try{if(!rn.currentUser){d("Oturum bulunamadı.");return}if(await rh(rn.currentUser),rn.currentUser.emailVerified){window.location.reload();return}d("E-posta henüz doğrulanmamış. Mail kutunu kontrol et.")}catch(g){console.error(g),d("Doğrulama kontrol edilemedi.")}finally{_(!1)}}async function D(){d(""),_(!0);try{rn.currentUser&&(await Sg(rn.currentUser),d("Doğrulama e-postası tekrar gönderildi."))}catch(g){console.error(g),d("E-posta gönderilemedi. Biraz sonra tekrar dene.")}finally{_(!1)}}return n?u.jsx("main",{className:"auth-page",children:u.jsxs("div",{className:"auth-card",children:[u.jsx("div",{className:"auth-logo",children:"✉️"}),u.jsx("h1",{children:"E-postanı doğrula"}),u.jsxs("p",{className:"auth-subtitle",children:[o," adresine bir doğrulama bağlantısı gönderdik."]}),p&&u.jsx("div",{className:"auth-error",children:p}),u.jsx("button",{type:"button",className:"auth-submit",onClick:S,disabled:f,children:f?"Kontrol ediliyor...":"Doğrulamayı kontrol et"}),u.jsx("button",{type:"button",className:"auth-link-button",onClick:D,disabled:f,children:"Doğrulama mailini tekrar gönder"}),u.jsx("button",{type:"button",className:"auth-link-button",onClick:()=>{r(!1),d("")},children:"Giriş ekranına dön"})]})}):u.jsx("main",{className:"auth-page",children:u.jsxs("div",{className:"auth-card",children:[u.jsxs("div",{className:"auth-logo","aria-hidden":"true",children:[u.jsx("i",{}),u.jsx("i",{}),u.jsx("i",{}),u.jsx("i",{})]}),u.jsx("h1",{children:t?"Hesap oluştur":"Hoş geldin"}),u.jsx("p",{className:"auth-subtitle",children:t?"Puzzle'larını kaydetmek için hesap oluştur.":"Puzzle'larına devam etmek için giriş yap."}),u.jsxs("form",{onSubmit:w,className:"auth-form",children:[t&&u.jsxs("label",{children:[u.jsx("span",{children:"İsmin"}),u.jsx("input",{type:"text",value:i,onChange:g=>s(g.target.value),placeholder:"İsmin",maxLength:30,required:!0})]}),u.jsxs("label",{children:[u.jsx("span",{children:"E-posta"}),u.jsx("input",{type:"email",value:o,onChange:g=>a(g.target.value),placeholder:"ornek@mail.com",required:!0})]}),u.jsxs("label",{children:[u.jsx("span",{children:"Şifre"}),u.jsx("input",{type:"password",value:l,onChange:g=>c(g.target.value),placeholder:"En az 6 karakter",minLength:6,required:!0})]}),p&&u.jsx("div",{className:"auth-error",children:p}),u.jsx("button",{type:"submit",className:"auth-submit",disabled:f,children:f?"Bekleyin...":t?"Hesap oluştur":"Giriş yap"})]}),u.jsxs("div",{className:"auth-switch",children:[t?"Zaten hesabın var mı?":"Hesabın yok mu?",u.jsx("button",{type:"button",onClick:()=>{e(!t),d("")},children:t?"Giriş yap":"Kayıt ol"})]})]})})}function ob(){const[t,e]=N.useState(void 0),[n,r]=N.useState(null),[i,s]=N.useState(()=>localStorage.getItem("puzzleTheme")||"light");if(N.useEffect(()=>{document.documentElement.dataset.theme=i,localStorage.setItem("puzzleTheme",i)},[i]),N.useEffect(()=>Tx(rn,c=>{e(c)}),[]),N.useEffect(()=>{const c=new URLSearchParams(window.location.search).get("room");if(!c)return;const p=c.trim().toUpperCase();if(!p||!/^[A-Z0-9_-]{1,32}$/.test(p)){window.history.replaceState({},"",window.location.pathname);return}r(d=>(d==null?void 0:d.code)===p?d:{code:p,pendingJoin:!0}),t===null&&px(rn).catch(d=>{console.error("Misafir oturumu başlatılamadı:",d)})},[t]),t===void 0)return u.jsx("div",{className:"auth-loading",children:"Yükleniyor..."});if(!t&&(n!=null&&n.pendingJoin))return u.jsx("div",{className:"auth-loading",children:"Davete katılınıyor..."});if(!t)return u.jsx(Kg,{initialMode:"login",onSuccess:()=>{}});if(!t.isAnonymous&&!t.emailVerified)return u.jsx(Kg,{initialMode:"login",onSuccess:()=>{}});const o=t.uid,a=t.isAnonymous?"Misafir":t.displayName||"Oyuncu";return n&&n.code?u.jsx(sb,{roomCode:n.code,playerId:o,playerName:n.playerNameOverride||a,isGuest:t.isAnonymous,pendingJoin:!!n.pendingJoin,theme:i,onLeave:async()=>{if(window.history.replaceState({},"",window.location.pathname),r(null),t.isAnonymous)try{await l0(rn)}catch(l){console.error("Misafir oturumu kapatılamadı:",l)}}}):u.jsx(tb,{playerId:o,user:t,playerName:a,theme:i,onToggleTheme:()=>s(l=>l==="dark"?"light":"dark"),onEnterRoom:(l,c,p=!1)=>{r({code:l,pendingJoin:p,playerNameOverride:c||null})}})}Hu.createRoot(document.getElementById("root")).render(u.jsx(tE.StrictMode,{children:u.jsx(ob,{})}));
