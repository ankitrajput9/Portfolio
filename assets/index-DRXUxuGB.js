(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();var If={exports:{}},yo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f0;function AS(){if(f0)return yo;f0=1;var a=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:a,type:s,key:f,ref:l!==void 0?l:null,props:c}}return yo.Fragment=t,yo.jsx=n,yo.jsxs=n,yo}var h0;function bS(){return h0||(h0=1,If.exports=AS()),If.exports}var Xt=bS(),Hf={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d0;function RS(){if(d0)return oe;d0=1;var a=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),x=Symbol.iterator;function M(N){return N===null||typeof N!="object"?null:(N=x&&N[x]||N["@@iterator"],typeof N=="function"?N:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,y={};function v(N,nt,xt){this.props=N,this.context=nt,this.refs=y,this.updater=xt||E}v.prototype.isReactComponent={},v.prototype.setState=function(N,nt){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,nt,"setState")},v.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function P(){}P.prototype=v.prototype;function U(N,nt,xt){this.props=N,this.context=nt,this.refs=y,this.updater=xt||E}var C=U.prototype=new P;C.constructor=U,T(C,v.prototype),C.isPureReactComponent=!0;var B=Array.isArray;function O(){}var F={H:null,A:null,T:null,S:null},q=Object.prototype.hasOwnProperty;function D(N,nt,xt){var At=xt.ref;return{$$typeof:a,type:N,key:nt,ref:At!==void 0?At:null,props:xt}}function w(N,nt){return D(N.type,nt,N.props)}function G(N){return typeof N=="object"&&N!==null&&N.$$typeof===a}function Z(N){var nt={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(xt){return nt[xt]})}var J=/\/+/g;function Q(N,nt){return typeof N=="object"&&N!==null&&N.key!=null?Z(""+N.key):nt.toString(36)}function st(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(O,O):(N.status="pending",N.then(function(nt){N.status==="pending"&&(N.status="fulfilled",N.value=nt)},function(nt){N.status==="pending"&&(N.status="rejected",N.reason=nt)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function z(N,nt,xt,At,Nt){var it=typeof N;(it==="undefined"||it==="boolean")&&(N=null);var ut=!1;if(N===null)ut=!0;else switch(it){case"bigint":case"string":case"number":ut=!0;break;case"object":switch(N.$$typeof){case a:case t:ut=!0;break;case g:return ut=N._init,z(ut(N._payload),nt,xt,At,Nt)}}if(ut)return Nt=Nt(N),ut=At===""?"."+Q(N,0):At,B(Nt)?(xt="",ut!=null&&(xt=ut.replace(J,"$&/")+"/"),z(Nt,nt,xt,"",function(kt){return kt})):Nt!=null&&(G(Nt)&&(Nt=w(Nt,xt+(Nt.key==null||N&&N.key===Nt.key?"":(""+Nt.key).replace(J,"$&/")+"/")+ut)),nt.push(Nt)),1;ut=0;var Ct=At===""?".":At+":";if(B(N))for(var Pt=0;Pt<N.length;Pt++)At=N[Pt],it=Ct+Q(At,Pt),ut+=z(At,nt,xt,it,Nt);else if(Pt=M(N),typeof Pt=="function")for(N=Pt.call(N),Pt=0;!(At=N.next()).done;)At=At.value,it=Ct+Q(At,Pt++),ut+=z(At,nt,xt,it,Nt);else if(it==="object"){if(typeof N.then=="function")return z(st(N),nt,xt,At,Nt);throw nt=String(N),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return ut}function V(N,nt,xt){if(N==null)return N;var At=[],Nt=0;return z(N,At,"","",function(it){return nt.call(xt,it,Nt++)}),At}function X(N){if(N._status===-1){var nt=N._result;nt=nt(),nt.then(function(xt){(N._status===0||N._status===-1)&&(N._status=1,N._result=xt)},function(xt){(N._status===0||N._status===-1)&&(N._status=2,N._result=xt)}),N._status===-1&&(N._status=0,N._result=nt)}if(N._status===1)return N._result.default;throw N._result}var ft=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},yt={map:V,forEach:function(N,nt,xt){V(N,function(){nt.apply(this,arguments)},xt)},count:function(N){var nt=0;return V(N,function(){nt++}),nt},toArray:function(N){return V(N,function(nt){return nt})||[]},only:function(N){if(!G(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return oe.Activity=_,oe.Children=yt,oe.Component=v,oe.Fragment=n,oe.Profiler=l,oe.PureComponent=U,oe.StrictMode=s,oe.Suspense=p,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,oe.__COMPILER_RUNTIME={__proto__:null,c:function(N){return F.H.useMemoCache(N)}},oe.cache=function(N){return function(){return N.apply(null,arguments)}},oe.cacheSignal=function(){return null},oe.cloneElement=function(N,nt,xt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var At=T({},N.props),Nt=N.key;if(nt!=null)for(it in nt.key!==void 0&&(Nt=""+nt.key),nt)!q.call(nt,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&nt.ref===void 0||(At[it]=nt[it]);var it=arguments.length-2;if(it===1)At.children=xt;else if(1<it){for(var ut=Array(it),Ct=0;Ct<it;Ct++)ut[Ct]=arguments[Ct+2];At.children=ut}return D(N.type,Nt,At)},oe.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},oe.createElement=function(N,nt,xt){var At,Nt={},it=null;if(nt!=null)for(At in nt.key!==void 0&&(it=""+nt.key),nt)q.call(nt,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(Nt[At]=nt[At]);var ut=arguments.length-2;if(ut===1)Nt.children=xt;else if(1<ut){for(var Ct=Array(ut),Pt=0;Pt<ut;Pt++)Ct[Pt]=arguments[Pt+2];Nt.children=Ct}if(N&&N.defaultProps)for(At in ut=N.defaultProps,ut)Nt[At]===void 0&&(Nt[At]=ut[At]);return D(N,it,Nt)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(N){return{$$typeof:h,render:N}},oe.isValidElement=G,oe.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:X}},oe.memo=function(N,nt){return{$$typeof:m,type:N,compare:nt===void 0?null:nt}},oe.startTransition=function(N){var nt=F.T,xt={};F.T=xt;try{var At=N(),Nt=F.S;Nt!==null&&Nt(xt,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(O,ft)}catch(it){ft(it)}finally{nt!==null&&xt.types!==null&&(nt.types=xt.types),F.T=nt}},oe.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},oe.use=function(N){return F.H.use(N)},oe.useActionState=function(N,nt,xt){return F.H.useActionState(N,nt,xt)},oe.useCallback=function(N,nt){return F.H.useCallback(N,nt)},oe.useContext=function(N){return F.H.useContext(N)},oe.useDebugValue=function(){},oe.useDeferredValue=function(N,nt){return F.H.useDeferredValue(N,nt)},oe.useEffect=function(N,nt){return F.H.useEffect(N,nt)},oe.useEffectEvent=function(N){return F.H.useEffectEvent(N)},oe.useId=function(){return F.H.useId()},oe.useImperativeHandle=function(N,nt,xt){return F.H.useImperativeHandle(N,nt,xt)},oe.useInsertionEffect=function(N,nt){return F.H.useInsertionEffect(N,nt)},oe.useLayoutEffect=function(N,nt){return F.H.useLayoutEffect(N,nt)},oe.useMemo=function(N,nt){return F.H.useMemo(N,nt)},oe.useOptimistic=function(N,nt){return F.H.useOptimistic(N,nt)},oe.useReducer=function(N,nt,xt){return F.H.useReducer(N,nt,xt)},oe.useRef=function(N){return F.H.useRef(N)},oe.useState=function(N){return F.H.useState(N)},oe.useSyncExternalStore=function(N,nt,xt){return F.H.useSyncExternalStore(N,nt,xt)},oe.useTransition=function(){return F.H.useTransition()},oe.version="19.2.0",oe}var p0;function vd(){return p0||(p0=1,Hf.exports=RS()),Hf.exports}var be=vd(),Gf={exports:{}},Mo={},Vf={exports:{}},Xf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m0;function CS(){return m0||(m0=1,(function(a){function t(z,V){var X=z.length;z.push(V);t:for(;0<X;){var ft=X-1>>>1,yt=z[ft];if(0<l(yt,V))z[ft]=V,z[X]=yt,X=ft;else break t}}function n(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var V=z[0],X=z.pop();if(X!==V){z[0]=X;t:for(var ft=0,yt=z.length,N=yt>>>1;ft<N;){var nt=2*(ft+1)-1,xt=z[nt],At=nt+1,Nt=z[At];if(0>l(xt,X))At<yt&&0>l(Nt,xt)?(z[ft]=Nt,z[At]=X,ft=At):(z[ft]=xt,z[nt]=X,ft=nt);else if(At<yt&&0>l(Nt,X))z[ft]=Nt,z[At]=X,ft=At;else break t}}return V}function l(z,V){var X=z.sortIndex-V.sortIndex;return X!==0?X:z.id-V.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();a.unstable_now=function(){return f.now()-h}}var p=[],m=[],g=1,_=null,x=3,M=!1,E=!1,T=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function C(z){for(var V=n(m);V!==null;){if(V.callback===null)s(m);else if(V.startTime<=z)s(m),V.sortIndex=V.expirationTime,t(p,V);else break;V=n(m)}}function B(z){if(T=!1,C(z),!E)if(n(p)!==null)E=!0,O||(O=!0,Z());else{var V=n(m);V!==null&&st(B,V.startTime-z)}}var O=!1,F=-1,q=5,D=-1;function w(){return y?!0:!(a.unstable_now()-D<q)}function G(){if(y=!1,O){var z=a.unstable_now();D=z;var V=!0;try{t:{E=!1,T&&(T=!1,P(F),F=-1),M=!0;var X=x;try{e:{for(C(z),_=n(p);_!==null&&!(_.expirationTime>z&&w());){var ft=_.callback;if(typeof ft=="function"){_.callback=null,x=_.priorityLevel;var yt=ft(_.expirationTime<=z);if(z=a.unstable_now(),typeof yt=="function"){_.callback=yt,C(z),V=!0;break e}_===n(p)&&s(p),C(z)}else s(p);_=n(p)}if(_!==null)V=!0;else{var N=n(m);N!==null&&st(B,N.startTime-z),V=!1}}break t}finally{_=null,x=X,M=!1}V=void 0}}finally{V?Z():O=!1}}}var Z;if(typeof U=="function")Z=function(){U(G)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,Q=J.port2;J.port1.onmessage=G,Z=function(){Q.postMessage(null)}}else Z=function(){v(G,0)};function st(z,V){F=v(function(){z(a.unstable_now())},V)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(z){z.callback=null},a.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<z?Math.floor(1e3/z):5},a.unstable_getCurrentPriorityLevel=function(){return x},a.unstable_next=function(z){switch(x){case 1:case 2:case 3:var V=3;break;default:V=x}var X=x;x=V;try{return z()}finally{x=X}},a.unstable_requestPaint=function(){y=!0},a.unstable_runWithPriority=function(z,V){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var X=x;x=z;try{return V()}finally{x=X}},a.unstable_scheduleCallback=function(z,V,X){var ft=a.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?ft+X:ft):X=ft,z){case 1:var yt=-1;break;case 2:yt=250;break;case 5:yt=1073741823;break;case 4:yt=1e4;break;default:yt=5e3}return yt=X+yt,z={id:g++,callback:V,priorityLevel:z,startTime:X,expirationTime:yt,sortIndex:-1},X>ft?(z.sortIndex=X,t(m,z),n(p)===null&&z===n(m)&&(T?(P(F),F=-1):T=!0,st(B,X-ft))):(z.sortIndex=yt,t(p,z),E||M||(E=!0,O||(O=!0,Z()))),z},a.unstable_shouldYield=w,a.unstable_wrapCallback=function(z){var V=x;return function(){var X=x;x=V;try{return z.apply(this,arguments)}finally{x=X}}}})(Xf)),Xf}var g0;function wS(){return g0||(g0=1,Vf.exports=CS()),Vf.exports}var kf={exports:{}},bn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _0;function DS(){if(_0)return bn;_0=1;var a=vd();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:p,containerInfo:m,implementation:g}}var f=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,bn.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return c(p,m,null,g)},bn.flushSync=function(p){var m=f.T,g=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=m,s.p=g,s.d.f()}},bn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(p,m))},bn.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},bn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,_=h(g,m.crossOrigin),x=typeof m.integrity=="string"?m.integrity:void 0,M=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?s.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:M}):g==="script"&&s.d.X(p,{crossOrigin:_,integrity:x,fetchPriority:M,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},bn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=h(m.as,m.crossOrigin);s.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(p)},bn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,_=h(g,m.crossOrigin);s.d.L(p,g,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},bn.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=h(m.as,m.crossOrigin);s.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(p)},bn.requestFormReset=function(p){s.d.r(p)},bn.unstable_batchedUpdates=function(p,m){return p(m)},bn.useFormState=function(p,m,g){return f.H.useFormState(p,m,g)},bn.useFormStatus=function(){return f.H.useHostTransitionStatus()},bn.version="19.2.0",bn}var v0;function US(){if(v0)return kf.exports;v0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(t){console.error(t)}}return a(),kf.exports=DS(),kf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x0;function LS(){if(x0)return Mo;x0=1;var a=wS(),t=vd(),n=US();function s(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,r=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(r=i.return),e=i.return;while(e)}return i.tag===3?r:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function h(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(s(188))}function m(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(s(188));return i!==e?null:e}for(var r=e,o=i;;){var u=r.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){r=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===r)return p(u),e;if(d===o)return p(u),i;d=d.sibling}throw Error(s(188))}if(r.return!==o.return)r=u,o=d;else{for(var S=!1,b=u.child;b;){if(b===r){S=!0,r=u,o=d;break}if(b===o){S=!0,o=u,r=d;break}b=b.sibling}if(!S){for(b=d.child;b;){if(b===r){S=!0,r=d,o=u;break}if(b===o){S=!0,o=d,r=u;break}b=b.sibling}if(!S)throw Error(s(189))}}if(r.alternate!==o)throw Error(s(190))}if(r.tag!==3)throw Error(s(188));return r.stateNode.current===r?e:i}function g(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=g(e),i!==null)return i;e=e.sibling}return null}var _=Object.assign,x=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),U=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var J=Symbol.for("react.client.reference");function Q(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===J?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case v:return"Profiler";case y:return"StrictMode";case B:return"Suspense";case O:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case U:return e.displayName||"Context";case P:return(e._context.displayName||"Context")+".Consumer";case C:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return i=e.displayName||null,i!==null?i:Q(e.type)||"Memo";case q:i=e._payload,e=e._init;try{return Q(e(i))}catch{}}return null}var st=Array.isArray,z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X={pending:!1,data:null,method:null,action:null},ft=[],yt=-1;function N(e){return{current:e}}function nt(e){0>yt||(e.current=ft[yt],ft[yt]=null,yt--)}function xt(e,i){yt++,ft[yt]=e.current,e.current=i}var At=N(null),Nt=N(null),it=N(null),ut=N(null);function Ct(e,i){switch(xt(it,i),xt(Nt,e),xt(At,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?Og(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=Og(i),e=Fg(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}nt(At),xt(At,e)}function Pt(){nt(At),nt(Nt),nt(it)}function kt(e){e.memoizedState!==null&&xt(ut,e);var i=At.current,r=Fg(i,e.type);i!==r&&(xt(Nt,e),xt(At,r))}function le(e){Nt.current===e&&(nt(At),nt(Nt)),ut.current===e&&(nt(ut),_o._currentValue=X)}var Ze,H;function Se(e){if(Ze===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);Ze=i&&i[1]||"",H=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ze+e+H}var ne=!1;function te(e,i){if(!e||ne)return"";ne=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(ct){var at=ct}Reflect.construct(e,[],gt)}else{try{gt.call()}catch(ct){at=ct}e.call(gt.prototype)}}else{try{throw Error()}catch(ct){at=ct}(gt=e())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(ct){if(ct&&at&&typeof ct.stack=="string")return[ct.stack,at.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),S=d[0],b=d[1];if(S&&b){var I=S.split(`
`),et=b.split(`
`);for(u=o=0;o<I.length&&!I[o].includes("DetermineComponentFrameRoot");)o++;for(;u<et.length&&!et[u].includes("DetermineComponentFrameRoot");)u++;if(o===I.length||u===et.length)for(o=I.length-1,u=et.length-1;1<=o&&0<=u&&I[o]!==et[u];)u--;for(;1<=o&&0<=u;o--,u--)if(I[o]!==et[u]){if(o!==1||u!==1)do if(o--,u--,0>u||I[o]!==et[u]){var dt=`
`+I[o].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=o&&0<=u);break}}}finally{ne=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?Se(r):""}function jt(e,i){switch(e.tag){case 26:case 27:case 5:return Se(e.type);case 16:return Se("Lazy");case 13:return e.child!==i&&i!==null?Se("Suspense Fallback"):Se("Suspense");case 19:return Se("SuspenseList");case 0:case 15:return te(e.type,!1);case 11:return te(e.type.render,!1);case 1:return te(e.type,!0);case 31:return Se("Activity");default:return""}}function Ee(e){try{var i="",r=null;do i+=jt(e,r),r=e,e=e.return;while(e);return i}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Gt=Object.prototype.hasOwnProperty,ae=a.unstable_scheduleCallback,qe=a.unstable_cancelCallback,ke=a.unstable_shouldYield,L=a.unstable_requestPaint,A=a.unstable_now,$=a.unstable_getCurrentPriorityLevel,pt=a.unstable_ImmediatePriority,Mt=a.unstable_UserBlockingPriority,ht=a.unstable_NormalPriority,Kt=a.unstable_LowPriority,Rt=a.unstable_IdlePriority,wt=a.log,Bt=a.unstable_setDisableYieldValue,vt=null,bt=null;function It(e){if(typeof wt=="function"&&Bt(e),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(vt,e)}catch{}}var Ut=Math.clz32?Math.clz32:W,Lt=Math.log,se=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(Lt(e)/se|0)|0}var Tt=256,Dt=262144,Ht=4194304;function Et(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function _t(e,i,r){var o=e.pendingLanes;if(o===0)return 0;var u=0,d=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var b=o&134217727;return b!==0?(o=b&~d,o!==0?u=Et(o):(S&=b,S!==0?u=Et(S):r||(r=b&~e,r!==0&&(u=Et(r))))):(b=o&~d,b!==0?u=Et(b):S!==0?u=Et(S):r||(r=o&~e,r!==0&&(u=Et(r)))),u===0?0:i!==0&&i!==u&&(i&d)===0&&(d=u&-u,r=i&-i,d>=r||d===32&&(r&4194048)!==0)?i:u}function Vt(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function re(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Oe(){var e=Ht;return Ht<<=1,(Ht&62914560)===0&&(Ht=4194304),e}function Te(e){for(var i=[],r=0;31>r;r++)i.push(e);return i}function wn(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function $n(e,i,r,o,u,d){var S=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var b=e.entanglements,I=e.expirationTimes,et=e.hiddenUpdates;for(r=S&~r;0<r;){var dt=31-Ut(r),gt=1<<dt;b[dt]=0,I[dt]=-1;var at=et[dt];if(at!==null)for(et[dt]=null,dt=0;dt<at.length;dt++){var ct=at[dt];ct!==null&&(ct.lane&=-536870913)}r&=~gt}o!==0&&Dr(e,o,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(S&~i))}function Dr(e,i,r){e.pendingLanes|=i,e.suspendedLanes&=~i;var o=31-Ut(i);e.entangledLanes|=i,e.entanglements[o]=e.entanglements[o]|1073741824|r&261930}function Si(e,i){var r=e.entangledLanes|=i;for(e=e.entanglements;r;){var o=31-Ut(r),u=1<<o;u&i|e[o]&i&&(e[o]|=i),r&=~u}}function Ts(e,i){var r=i&-i;return r=(r&42)!==0?1:As(r),(r&(e.suspendedLanes|i))!==0?0:r}function As(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function bs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Va(){var e=V.p;return e!==0?e:(e=window.event,e===void 0?32:a0(e.type))}function Ur(e,i){var r=V.p;try{return V.p=e,i()}finally{V.p=r}}var Gn=Math.random().toString(36).slice(2),an="__reactFiber$"+Gn,xn="__reactProps$"+Gn,ra="__reactContainer$"+Gn,Lr="__reactEvents$"+Gn,Lc="__reactListeners$"+Gn,Nc="__reactHandles$"+Gn,Ho="__reactResources$"+Gn,Xa="__reactMarker$"+Gn;function R(e){delete e[an],delete e[xn],delete e[Lr],delete e[Lc],delete e[Nc]}function Y(e){var i=e[an];if(i)return i;for(var r=e.parentNode;r;){if(i=r[ra]||r[an]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(e=Vg(e);e!==null;){if(r=e[an])return r;e=Vg(e)}return i}e=r,r=e.parentNode}return null}function rt(e){if(e=e[an]||e[ra]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function ot(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(s(33))}function K(e){var i=e[Ho];return i||(i=e[Ho]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function St(e){e[Xa]=!0}var Ot=new Set,qt={};function zt(e,i){Qt(e,i),Qt(e+"Capture",i)}function Qt(e,i){for(qt[e]=i,e=0;e<i.length;e++)Ot.add(i[e])}var ie=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Jt={},de={};function Ue(e){return Gt.call(de,e)?!0:Gt.call(Jt,e)?!1:ie.test(e)?de[e]=!0:(Jt[e]=!0,!1)}function Ve(e,i,r){if(Ue(i))if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+r)}}function Le(e,i,r){if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+r)}}function pe(e,i,r,o){if(o===null)e.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(i,r,""+o)}}function Yt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function We(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ae(e,i,r){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return u.call(this)},set:function(S){r=""+S,d.call(this,S)}}),Object.defineProperty(e,i,{enumerable:o.enumerable}),{getValue:function(){return r},setValue:function(S){r=""+S},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Sn(e){if(!e._valueTracker){var i=We(e)?"checked":"value";e._valueTracker=Ae(e,i,""+e[i])}}function Ui(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var r=i.getValue(),o="";return e&&(o=We(e)?e.checked?"true":"false":e.value),e=o,e!==r?(i.setValue(e),!0):!1}function gn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ka=/[\n"\\]/g;function _e(e){return e.replace(ka,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function An(e,i,r,o,u,d,S,b){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),i!=null?S==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+Yt(i)):e.value!==""+Yt(i)&&(e.value=""+Yt(i)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),i!=null?fn(e,S,Yt(i)):r!=null?fn(e,S,Yt(r)):o!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+Yt(b):e.removeAttribute("name")}function Dn(e,i,r,o,u,d,S,b){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||r!=null){if(!(d!=="submit"&&d!=="reset"||i!=null)){Sn(e);return}r=r!=null?""+Yt(r):"",i=i!=null?""+Yt(i):r,b||i===e.value||(e.value=i),e.defaultValue=i}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=b?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),Sn(e)}function fn(e,i,r){i==="number"&&gn(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function tn(e,i,r,o){if(e=e.options,i){i={};for(var u=0;u<r.length;u++)i["$"+r[u]]=!0;for(r=0;r<e.length;r++)u=i.hasOwnProperty("$"+e[r].value),e[r].selected!==u&&(e[r].selected=u),u&&o&&(e[r].defaultSelected=!0)}else{for(r=""+Yt(r),i=null,u=0;u<e.length;u++){if(e[u].value===r){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}i!==null||e[u].disabled||(i=e[u])}i!==null&&(i.selected=!0)}}function Rs(e,i,r){if(i!=null&&(i=""+Yt(i),i!==e.value&&(e.value=i),r==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=r!=null?""+Yt(r):""}function yi(e,i,r,o){if(i==null){if(o!=null){if(r!=null)throw Error(s(92));if(st(o)){if(1<o.length)throw Error(s(93));o=o[0]}r=o}r==null&&(r=""),i=r}r=Yt(i),e.defaultValue=r,o=e.textContent,o===r&&o!==""&&o!==null&&(e.value=o),Sn(e)}function Cs(e,i){if(i){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=i;return}}e.textContent=i}var Sv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ud(e,i,r){var o=i.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?o?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":o?e.setProperty(i,r):typeof r!="number"||r===0||Sv.has(i)?i==="float"?e.cssFloat=r:e[i]=(""+r).trim():e[i]=r+"px"}function Ld(e,i,r){if(i!=null&&typeof i!="object")throw Error(s(62));if(e=e.style,r!=null){for(var o in r)!r.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in i)o=i[u],i.hasOwnProperty(u)&&r[u]!==o&&Ud(e,u,o)}else for(var d in i)i.hasOwnProperty(d)&&Ud(e,d,i[d])}function Oc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Mv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Go(e){return Mv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Li(){}var Fc=null;function Pc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ws=null,Ds=null;function Nd(e){var i=rt(e);if(i&&(e=i.stateNode)){var r=e[xn]||null;t:switch(e=i.stateNode,i.type){case"input":if(An(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),i=r.name,r.type==="radio"&&i!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+_e(""+i)+'"][type="radio"]'),i=0;i<r.length;i++){var o=r[i];if(o!==e&&o.form===e.form){var u=o[xn]||null;if(!u)throw Error(s(90));An(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(i=0;i<r.length;i++)o=r[i],o.form===e.form&&Ui(o)}break t;case"textarea":Rs(e,r.value,r.defaultValue);break t;case"select":i=r.value,i!=null&&tn(e,!!r.multiple,i,!1)}}}var zc=!1;function Od(e,i,r){if(zc)return e(i,r);zc=!0;try{var o=e(i);return o}finally{if(zc=!1,(ws!==null||Ds!==null)&&(Cl(),ws&&(i=ws,e=Ds,Ds=ws=null,Nd(i),e)))for(i=0;i<e.length;i++)Nd(e[i])}}function Nr(e,i){var r=e.stateNode;if(r===null)return null;var o=r[xn]||null;if(o===null)return null;r=o[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(s(231,i,typeof r));return r}var Ni=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bc=!1;if(Ni)try{var Or={};Object.defineProperty(Or,"passive",{get:function(){Bc=!0}}),window.addEventListener("test",Or,Or),window.removeEventListener("test",Or,Or)}catch{Bc=!1}var oa=null,Ic=null,Vo=null;function Fd(){if(Vo)return Vo;var e,i=Ic,r=i.length,o,u="value"in oa?oa.value:oa.textContent,d=u.length;for(e=0;e<r&&i[e]===u[e];e++);var S=r-e;for(o=1;o<=S&&i[r-o]===u[d-o];o++);return Vo=u.slice(e,1<o?1-o:void 0)}function Xo(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function ko(){return!0}function Pd(){return!1}function Nn(e){function i(r,o,u,d,S){this._reactName=r,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=S,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(r=e[b],this[b]=r?r(d):d[b]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ko:Pd,this.isPropagationStopped=Pd,this}return _(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ko)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ko)},persist:function(){},isPersistent:ko}),i}var Wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wo=Nn(Wa),Fr=_({},Wa,{view:0,detail:0}),Ev=Nn(Fr),Hc,Gc,Pr,qo=_({},Fr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pr&&(Pr&&e.type==="mousemove"?(Hc=e.screenX-Pr.screenX,Gc=e.screenY-Pr.screenY):Gc=Hc=0,Pr=e),Hc)},movementY:function(e){return"movementY"in e?e.movementY:Gc}}),zd=Nn(qo),Tv=_({},qo,{dataTransfer:0}),Av=Nn(Tv),bv=_({},Fr,{relatedTarget:0}),Vc=Nn(bv),Rv=_({},Wa,{animationName:0,elapsedTime:0,pseudoElement:0}),Cv=Nn(Rv),wv=_({},Wa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Dv=Nn(wv),Uv=_({},Wa,{data:0}),Bd=Nn(Uv),Lv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ov={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fv(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=Ov[e])?!!i[e]:!1}function Xc(){return Fv}var Pv=_({},Fr,{key:function(e){if(e.key){var i=Lv[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Xo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Nv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xc,charCode:function(e){return e.type==="keypress"?Xo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zv=Nn(Pv),Bv=_({},qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Id=Nn(Bv),Iv=_({},Fr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xc}),Hv=Nn(Iv),Gv=_({},Wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vv=Nn(Gv),Xv=_({},qo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),kv=Nn(Xv),Wv=_({},Wa,{newState:0,oldState:0}),qv=Nn(Wv),Yv=[9,13,27,32],kc=Ni&&"CompositionEvent"in window,zr=null;Ni&&"documentMode"in document&&(zr=document.documentMode);var jv=Ni&&"TextEvent"in window&&!zr,Hd=Ni&&(!kc||zr&&8<zr&&11>=zr),Gd=" ",Vd=!1;function Xd(e,i){switch(e){case"keyup":return Yv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Us=!1;function Zv(e,i){switch(e){case"compositionend":return kd(i);case"keypress":return i.which!==32?null:(Vd=!0,Gd);case"textInput":return e=i.data,e===Gd&&Vd?null:e;default:return null}}function Kv(e,i){if(Us)return e==="compositionend"||!kc&&Xd(e,i)?(e=Fd(),Vo=Ic=oa=null,Us=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Hd&&i.locale!=="ko"?null:i.data;default:return null}}var Qv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wd(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Qv[e.type]:i==="textarea"}function qd(e,i,r,o){ws?Ds?Ds.push(o):Ds=[o]:ws=o,i=Fl(i,"onChange"),0<i.length&&(r=new Wo("onChange","change",null,r,o),e.push({event:r,listeners:i}))}var Br=null,Ir=null;function Jv(e){Cg(e,0)}function Yo(e){var i=ot(e);if(Ui(i))return e}function Yd(e,i){if(e==="change")return i}var jd=!1;if(Ni){var Wc;if(Ni){var qc="oninput"in document;if(!qc){var Zd=document.createElement("div");Zd.setAttribute("oninput","return;"),qc=typeof Zd.oninput=="function"}Wc=qc}else Wc=!1;jd=Wc&&(!document.documentMode||9<document.documentMode)}function Kd(){Br&&(Br.detachEvent("onpropertychange",Qd),Ir=Br=null)}function Qd(e){if(e.propertyName==="value"&&Yo(Ir)){var i=[];qd(i,Ir,e,Pc(e)),Od(Jv,i)}}function $v(e,i,r){e==="focusin"?(Kd(),Br=i,Ir=r,Br.attachEvent("onpropertychange",Qd)):e==="focusout"&&Kd()}function tx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yo(Ir)}function ex(e,i){if(e==="click")return Yo(i)}function nx(e,i){if(e==="input"||e==="change")return Yo(i)}function ix(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var Vn=typeof Object.is=="function"?Object.is:ix;function Hr(e,i){if(Vn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var r=Object.keys(e),o=Object.keys(i);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var u=r[o];if(!Gt.call(i,u)||!Vn(e[u],i[u]))return!1}return!0}function Jd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $d(e,i){var r=Jd(e);e=0;for(var o;r;){if(r.nodeType===3){if(o=e+r.textContent.length,e<=i&&o>=i)return{node:r,offset:i-e};e=o}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=Jd(r)}}function tp(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?tp(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function ep(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=gn(e.document);i instanceof e.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)e=i.contentWindow;else break;i=gn(e.document)}return i}function Yc(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var ax=Ni&&"documentMode"in document&&11>=document.documentMode,Ls=null,jc=null,Gr=null,Zc=!1;function np(e,i,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Zc||Ls==null||Ls!==gn(o)||(o=Ls,"selectionStart"in o&&Yc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Gr&&Hr(Gr,o)||(Gr=o,o=Fl(jc,"onSelect"),0<o.length&&(i=new Wo("onSelect","select",null,i,r),e.push({event:i,listeners:o}),i.target=Ls)))}function qa(e,i){var r={};return r[e.toLowerCase()]=i.toLowerCase(),r["Webkit"+e]="webkit"+i,r["Moz"+e]="moz"+i,r}var Ns={animationend:qa("Animation","AnimationEnd"),animationiteration:qa("Animation","AnimationIteration"),animationstart:qa("Animation","AnimationStart"),transitionrun:qa("Transition","TransitionRun"),transitionstart:qa("Transition","TransitionStart"),transitioncancel:qa("Transition","TransitionCancel"),transitionend:qa("Transition","TransitionEnd")},Kc={},ip={};Ni&&(ip=document.createElement("div").style,"AnimationEvent"in window||(delete Ns.animationend.animation,delete Ns.animationiteration.animation,delete Ns.animationstart.animation),"TransitionEvent"in window||delete Ns.transitionend.transition);function Ya(e){if(Kc[e])return Kc[e];if(!Ns[e])return e;var i=Ns[e],r;for(r in i)if(i.hasOwnProperty(r)&&r in ip)return Kc[e]=i[r];return e}var ap=Ya("animationend"),sp=Ya("animationiteration"),rp=Ya("animationstart"),sx=Ya("transitionrun"),rx=Ya("transitionstart"),ox=Ya("transitioncancel"),op=Ya("transitionend"),lp=new Map,Qc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Qc.push("scrollEnd");function ci(e,i){lp.set(e,i),zt(i,[e])}var jo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ti=[],Os=0,Jc=0;function Zo(){for(var e=Os,i=Jc=Os=0;i<e;){var r=ti[i];ti[i++]=null;var o=ti[i];ti[i++]=null;var u=ti[i];ti[i++]=null;var d=ti[i];if(ti[i++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}d!==0&&cp(r,u,d)}}function Ko(e,i,r,o){ti[Os++]=e,ti[Os++]=i,ti[Os++]=r,ti[Os++]=o,Jc|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function $c(e,i,r,o){return Ko(e,i,r,o),Qo(e)}function ja(e,i){return Ko(e,null,null,i),Qo(e)}function cp(e,i,r){e.lanes|=r;var o=e.alternate;o!==null&&(o.lanes|=r);for(var u=!1,d=e.return;d!==null;)d.childLanes|=r,o=d.alternate,o!==null&&(o.childLanes|=r),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&i!==null&&(u=31-Ut(r),e=d.hiddenUpdates,o=e[u],o===null?e[u]=[i]:o.push(i),i.lane=r|536870912),d):null}function Qo(e){if(50<co)throw co=0,cf=null,Error(s(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Fs={};function lx(e,i,r,o){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(e,i,r,o){return new lx(e,i,r,o)}function tu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Oi(e,i){var r=e.alternate;return r===null?(r=Xn(e.tag,i,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=i,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,i=e.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function up(e,i){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,i=r.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Jo(e,i,r,o,u,d){var S=0;if(o=e,typeof e=="function")tu(e)&&(S=1);else if(typeof e=="string")S=dS(e,r,At.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=Xn(31,r,i,u),e.elementType=D,e.lanes=d,e;case T:return Za(r.children,u,d,i);case y:S=8,u|=24;break;case v:return e=Xn(12,r,i,u|2),e.elementType=v,e.lanes=d,e;case B:return e=Xn(13,r,i,u),e.elementType=B,e.lanes=d,e;case O:return e=Xn(19,r,i,u),e.elementType=O,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:S=10;break t;case P:S=9;break t;case C:S=11;break t;case F:S=14;break t;case q:S=16,o=null;break t}S=29,r=Error(s(130,e===null?"null":typeof e,"")),o=null}return i=Xn(S,r,i,u),i.elementType=e,i.type=o,i.lanes=d,i}function Za(e,i,r,o){return e=Xn(7,e,o,i),e.lanes=r,e}function eu(e,i,r){return e=Xn(6,e,null,i),e.lanes=r,e}function fp(e){var i=Xn(18,null,null,0);return i.stateNode=e,i}function nu(e,i,r){return i=Xn(4,e.children!==null?e.children:[],e.key,i),i.lanes=r,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var hp=new WeakMap;function ei(e,i){if(typeof e=="object"&&e!==null){var r=hp.get(e);return r!==void 0?r:(i={value:e,source:i,stack:Ee(i)},hp.set(e,i),i)}return{value:e,source:i,stack:Ee(i)}}var Ps=[],zs=0,$o=null,Vr=0,ni=[],ii=0,la=null,Mi=1,Ei="";function Fi(e,i){Ps[zs++]=Vr,Ps[zs++]=$o,$o=e,Vr=i}function dp(e,i,r){ni[ii++]=Mi,ni[ii++]=Ei,ni[ii++]=la,la=e;var o=Mi;e=Ei;var u=32-Ut(o)-1;o&=~(1<<u),r+=1;var d=32-Ut(i)+u;if(30<d){var S=u-u%5;d=(o&(1<<S)-1).toString(32),o>>=S,u-=S,Mi=1<<32-Ut(i)+u|r<<u|o,Ei=d+e}else Mi=1<<d|r<<u|o,Ei=e}function iu(e){e.return!==null&&(Fi(e,1),dp(e,1,0))}function au(e){for(;e===$o;)$o=Ps[--zs],Ps[zs]=null,Vr=Ps[--zs],Ps[zs]=null;for(;e===la;)la=ni[--ii],ni[ii]=null,Ei=ni[--ii],ni[ii]=null,Mi=ni[--ii],ni[ii]=null}function pp(e,i){ni[ii++]=Mi,ni[ii++]=Ei,ni[ii++]=la,Mi=i.id,Ei=i.overflow,la=e}var yn=null,Ye=null,ye=!1,ca=null,ai=!1,su=Error(s(519));function ua(e){var i=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Xr(ei(i,e)),su}function mp(e){var i=e.stateNode,r=e.type,o=e.memoizedProps;switch(i[an]=e,i[xn]=o,r){case"dialog":ge("cancel",i),ge("close",i);break;case"iframe":case"object":case"embed":ge("load",i);break;case"video":case"audio":for(r=0;r<fo.length;r++)ge(fo[r],i);break;case"source":ge("error",i);break;case"img":case"image":case"link":ge("error",i),ge("load",i);break;case"details":ge("toggle",i);break;case"input":ge("invalid",i),Dn(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ge("invalid",i);break;case"textarea":ge("invalid",i),yi(i,o.value,o.defaultValue,o.children)}r=o.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||i.textContent===""+r||o.suppressHydrationWarning===!0||Lg(i.textContent,r)?(o.popover!=null&&(ge("beforetoggle",i),ge("toggle",i)),o.onScroll!=null&&ge("scroll",i),o.onScrollEnd!=null&&ge("scrollend",i),o.onClick!=null&&(i.onclick=Li),i=!0):i=!1,i||ua(e,!0)}function gp(e){for(yn=e.return;yn;)switch(yn.tag){case 5:case 31:case 13:ai=!1;return;case 27:case 3:ai=!0;return;default:yn=yn.return}}function Bs(e){if(e!==yn)return!1;if(!ye)return gp(e),ye=!0,!1;var i=e.tag,r;if((r=i!==3&&i!==27)&&((r=i===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||Tf(e.type,e.memoizedProps)),r=!r),r&&Ye&&ua(e),gp(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ye=Gg(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ye=Gg(e)}else i===27?(i=Ye,Ta(e.type)?(e=wf,wf=null,Ye=e):Ye=i):Ye=yn?ri(e.stateNode.nextSibling):null;return!0}function Ka(){Ye=yn=null,ye=!1}function ru(){var e=ca;return e!==null&&(zn===null?zn=e:zn.push.apply(zn,e),ca=null),e}function Xr(e){ca===null?ca=[e]:ca.push(e)}var ou=N(null),Qa=null,Pi=null;function fa(e,i,r){xt(ou,i._currentValue),i._currentValue=r}function zi(e){e._currentValue=ou.current,nt(ou)}function lu(e,i,r){for(;e!==null;){var o=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),e===r)break;e=e.return}}function cu(e,i,r,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var S=u.child;d=d.firstContext;t:for(;d!==null;){var b=d;d=u;for(var I=0;I<i.length;I++)if(b.context===i[I]){d.lanes|=r,b=d.alternate,b!==null&&(b.lanes|=r),lu(d.return,r,e),o||(S=null);break t}d=b.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(s(341));S.lanes|=r,d=S.alternate,d!==null&&(d.lanes|=r),lu(S,r,e),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===e){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function Is(e,i,r,o){e=null;for(var u=i,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var b=u.type;Vn(u.pendingProps.value,S.value)||(e!==null?e.push(b):e=[b])}}else if(u===ut.current){if(S=u.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(_o):e=[_o])}u=u.return}e!==null&&cu(i,e,r,o),i.flags|=262144}function tl(e){for(e=e.firstContext;e!==null;){if(!Vn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ja(e){Qa=e,Pi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Mn(e){return _p(Qa,e)}function el(e,i){return Qa===null&&Ja(e),_p(e,i)}function _p(e,i){var r=i._currentValue;if(i={context:i,memoizedValue:r,next:null},Pi===null){if(e===null)throw Error(s(308));Pi=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Pi=Pi.next=i;return r}var cx=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(r,o){e.push(o)}};this.abort=function(){i.aborted=!0,e.forEach(function(r){return r()})}},ux=a.unstable_scheduleCallback,fx=a.unstable_NormalPriority,sn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function uu(){return{controller:new cx,data:new Map,refCount:0}}function kr(e){e.refCount--,e.refCount===0&&ux(fx,function(){e.controller.abort()})}var Wr=null,fu=0,Hs=0,Gs=null;function hx(e,i){if(Wr===null){var r=Wr=[];fu=0,Hs=mf(),Gs={status:"pending",value:void 0,then:function(o){r.push(o)}}}return fu++,i.then(vp,vp),i}function vp(){if(--fu===0&&Wr!==null){Gs!==null&&(Gs.status="fulfilled");var e=Wr;Wr=null,Hs=0,Gs=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function dx(e,i){var r=[],o={status:"pending",value:null,reason:null,then:function(u){r.push(u)}};return e.then(function(){o.status="fulfilled",o.value=i;for(var u=0;u<r.length;u++)(0,r[u])(i)},function(u){for(o.status="rejected",o.reason=u,u=0;u<r.length;u++)(0,r[u])(void 0)}),o}var xp=z.S;z.S=function(e,i){ng=A(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&hx(e,i),xp!==null&&xp(e,i)};var $a=N(null);function hu(){var e=$a.current;return e!==null?e:Xe.pooledCache}function nl(e,i){i===null?xt($a,$a.current):xt($a,i.pool)}function Sp(){var e=hu();return e===null?null:{parent:sn._currentValue,pool:e}}var Vs=Error(s(460)),du=Error(s(474)),il=Error(s(542)),al={then:function(){}};function yp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Mp(e,i,r){switch(r=e[r],r===void 0?e.push(i):r!==i&&(i.then(Li,Li),i=r),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Tp(e),e;default:if(typeof i.status=="string")i.then(Li,Li);else{if(e=Xe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=i,e.status="pending",e.then(function(o){if(i.status==="pending"){var u=i;u.status="fulfilled",u.value=o}},function(o){if(i.status==="pending"){var u=i;u.status="rejected",u.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Tp(e),e}throw es=i,Vs}}function ts(e){try{var i=e._init;return i(e._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(es=r,Vs):r}}var es=null;function Ep(){if(es===null)throw Error(s(459));var e=es;return es=null,e}function Tp(e){if(e===Vs||e===il)throw Error(s(483))}var Xs=null,qr=0;function sl(e){var i=qr;return qr+=1,Xs===null&&(Xs=[]),Mp(Xs,e,i)}function Yr(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function rl(e,i){throw i.$$typeof===x?Error(s(525)):(e=Object.prototype.toString.call(i),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function Ap(e){function i(j,k){if(e){var tt=j.deletions;tt===null?(j.deletions=[k],j.flags|=16):tt.push(k)}}function r(j,k){if(!e)return null;for(;k!==null;)i(j,k),k=k.sibling;return null}function o(j){for(var k=new Map;j!==null;)j.key!==null?k.set(j.key,j):k.set(j.index,j),j=j.sibling;return k}function u(j,k){return j=Oi(j,k),j.index=0,j.sibling=null,j}function d(j,k,tt){return j.index=tt,e?(tt=j.alternate,tt!==null?(tt=tt.index,tt<k?(j.flags|=67108866,k):tt):(j.flags|=67108866,k)):(j.flags|=1048576,k)}function S(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function b(j,k,tt,mt){return k===null||k.tag!==6?(k=eu(tt,j.mode,mt),k.return=j,k):(k=u(k,tt),k.return=j,k)}function I(j,k,tt,mt){var $t=tt.type;return $t===T?dt(j,k,tt.props.children,mt,tt.key):k!==null&&(k.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===q&&ts($t)===k.type)?(k=u(k,tt.props),Yr(k,tt),k.return=j,k):(k=Jo(tt.type,tt.key,tt.props,null,j.mode,mt),Yr(k,tt),k.return=j,k)}function et(j,k,tt,mt){return k===null||k.tag!==4||k.stateNode.containerInfo!==tt.containerInfo||k.stateNode.implementation!==tt.implementation?(k=nu(tt,j.mode,mt),k.return=j,k):(k=u(k,tt.children||[]),k.return=j,k)}function dt(j,k,tt,mt,$t){return k===null||k.tag!==7?(k=Za(tt,j.mode,mt,$t),k.return=j,k):(k=u(k,tt),k.return=j,k)}function gt(j,k,tt){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=eu(""+k,j.mode,tt),k.return=j,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case M:return tt=Jo(k.type,k.key,k.props,null,j.mode,tt),Yr(tt,k),tt.return=j,tt;case E:return k=nu(k,j.mode,tt),k.return=j,k;case q:return k=ts(k),gt(j,k,tt)}if(st(k)||Z(k))return k=Za(k,j.mode,tt,null),k.return=j,k;if(typeof k.then=="function")return gt(j,sl(k),tt);if(k.$$typeof===U)return gt(j,el(j,k),tt);rl(j,k)}return null}function at(j,k,tt,mt){var $t=k!==null?k.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return $t!==null?null:b(j,k,""+tt,mt);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case M:return tt.key===$t?I(j,k,tt,mt):null;case E:return tt.key===$t?et(j,k,tt,mt):null;case q:return tt=ts(tt),at(j,k,tt,mt)}if(st(tt)||Z(tt))return $t!==null?null:dt(j,k,tt,mt,null);if(typeof tt.then=="function")return at(j,k,sl(tt),mt);if(tt.$$typeof===U)return at(j,k,el(j,tt),mt);rl(j,tt)}return null}function ct(j,k,tt,mt,$t){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return j=j.get(tt)||null,b(k,j,""+mt,$t);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case M:return j=j.get(mt.key===null?tt:mt.key)||null,I(k,j,mt,$t);case E:return j=j.get(mt.key===null?tt:mt.key)||null,et(k,j,mt,$t);case q:return mt=ts(mt),ct(j,k,tt,mt,$t)}if(st(mt)||Z(mt))return j=j.get(tt)||null,dt(k,j,mt,$t,null);if(typeof mt.then=="function")return ct(j,k,tt,sl(mt),$t);if(mt.$$typeof===U)return ct(j,k,tt,el(k,mt),$t);rl(k,mt)}return null}function Wt(j,k,tt,mt){for(var $t=null,Re=null,Zt=k,ue=k=0,xe=null;Zt!==null&&ue<tt.length;ue++){Zt.index>ue?(xe=Zt,Zt=null):xe=Zt.sibling;var Ce=at(j,Zt,tt[ue],mt);if(Ce===null){Zt===null&&(Zt=xe);break}e&&Zt&&Ce.alternate===null&&i(j,Zt),k=d(Ce,k,ue),Re===null?$t=Ce:Re.sibling=Ce,Re=Ce,Zt=xe}if(ue===tt.length)return r(j,Zt),ye&&Fi(j,ue),$t;if(Zt===null){for(;ue<tt.length;ue++)Zt=gt(j,tt[ue],mt),Zt!==null&&(k=d(Zt,k,ue),Re===null?$t=Zt:Re.sibling=Zt,Re=Zt);return ye&&Fi(j,ue),$t}for(Zt=o(Zt);ue<tt.length;ue++)xe=ct(Zt,j,ue,tt[ue],mt),xe!==null&&(e&&xe.alternate!==null&&Zt.delete(xe.key===null?ue:xe.key),k=d(xe,k,ue),Re===null?$t=xe:Re.sibling=xe,Re=xe);return e&&Zt.forEach(function(wa){return i(j,wa)}),ye&&Fi(j,ue),$t}function ee(j,k,tt,mt){if(tt==null)throw Error(s(151));for(var $t=null,Re=null,Zt=k,ue=k=0,xe=null,Ce=tt.next();Zt!==null&&!Ce.done;ue++,Ce=tt.next()){Zt.index>ue?(xe=Zt,Zt=null):xe=Zt.sibling;var wa=at(j,Zt,Ce.value,mt);if(wa===null){Zt===null&&(Zt=xe);break}e&&Zt&&wa.alternate===null&&i(j,Zt),k=d(wa,k,ue),Re===null?$t=wa:Re.sibling=wa,Re=wa,Zt=xe}if(Ce.done)return r(j,Zt),ye&&Fi(j,ue),$t;if(Zt===null){for(;!Ce.done;ue++,Ce=tt.next())Ce=gt(j,Ce.value,mt),Ce!==null&&(k=d(Ce,k,ue),Re===null?$t=Ce:Re.sibling=Ce,Re=Ce);return ye&&Fi(j,ue),$t}for(Zt=o(Zt);!Ce.done;ue++,Ce=tt.next())Ce=ct(Zt,j,ue,Ce.value,mt),Ce!==null&&(e&&Ce.alternate!==null&&Zt.delete(Ce.key===null?ue:Ce.key),k=d(Ce,k,ue),Re===null?$t=Ce:Re.sibling=Ce,Re=Ce);return e&&Zt.forEach(function(TS){return i(j,TS)}),ye&&Fi(j,ue),$t}function Ie(j,k,tt,mt){if(typeof tt=="object"&&tt!==null&&tt.type===T&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case M:t:{for(var $t=tt.key;k!==null;){if(k.key===$t){if($t=tt.type,$t===T){if(k.tag===7){r(j,k.sibling),mt=u(k,tt.props.children),mt.return=j,j=mt;break t}}else if(k.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===q&&ts($t)===k.type){r(j,k.sibling),mt=u(k,tt.props),Yr(mt,tt),mt.return=j,j=mt;break t}r(j,k);break}else i(j,k);k=k.sibling}tt.type===T?(mt=Za(tt.props.children,j.mode,mt,tt.key),mt.return=j,j=mt):(mt=Jo(tt.type,tt.key,tt.props,null,j.mode,mt),Yr(mt,tt),mt.return=j,j=mt)}return S(j);case E:t:{for($t=tt.key;k!==null;){if(k.key===$t)if(k.tag===4&&k.stateNode.containerInfo===tt.containerInfo&&k.stateNode.implementation===tt.implementation){r(j,k.sibling),mt=u(k,tt.children||[]),mt.return=j,j=mt;break t}else{r(j,k);break}else i(j,k);k=k.sibling}mt=nu(tt,j.mode,mt),mt.return=j,j=mt}return S(j);case q:return tt=ts(tt),Ie(j,k,tt,mt)}if(st(tt))return Wt(j,k,tt,mt);if(Z(tt)){if($t=Z(tt),typeof $t!="function")throw Error(s(150));return tt=$t.call(tt),ee(j,k,tt,mt)}if(typeof tt.then=="function")return Ie(j,k,sl(tt),mt);if(tt.$$typeof===U)return Ie(j,k,el(j,tt),mt);rl(j,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,k!==null&&k.tag===6?(r(j,k.sibling),mt=u(k,tt),mt.return=j,j=mt):(r(j,k),mt=eu(tt,j.mode,mt),mt.return=j,j=mt),S(j)):r(j,k)}return function(j,k,tt,mt){try{qr=0;var $t=Ie(j,k,tt,mt);return Xs=null,$t}catch(Zt){if(Zt===Vs||Zt===il)throw Zt;var Re=Xn(29,Zt,null,j.mode);return Re.lanes=mt,Re.return=j,Re}finally{}}}var ns=Ap(!0),bp=Ap(!1),ha=!1;function pu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function mu(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function da(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function pa(e,i,r){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(De&2)!==0){var u=o.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),o.pending=i,i=Qo(e),cp(e,null,r),i}return Ko(e,o,i,r),Qo(e)}function jr(e,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194048)!==0)){var o=i.lanes;o&=e.pendingLanes,r|=o,i.lanes=r,Si(e,r)}}function gu(e,i){var r=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var u=null,d=null;if(r=r.firstBaseUpdate,r!==null){do{var S={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};d===null?u=d=S:d=d.next=S,r=r.next}while(r!==null);d===null?u=d=i:d=d.next=i}else u=d=i;r={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=i:e.next=i,r.lastBaseUpdate=i}var _u=!1;function Zr(){if(_u){var e=Gs;if(e!==null)throw e}}function Kr(e,i,r,o){_u=!1;var u=e.updateQueue;ha=!1;var d=u.firstBaseUpdate,S=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var I=b,et=I.next;I.next=null,S===null?d=et:S.next=et,S=I;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,b=dt.lastBaseUpdate,b!==S&&(b===null?dt.firstBaseUpdate=et:b.next=et,dt.lastBaseUpdate=I))}if(d!==null){var gt=u.baseState;S=0,dt=et=I=null,b=d;do{var at=b.lane&-536870913,ct=at!==b.lane;if(ct?(ve&at)===at:(o&at)===at){at!==0&&at===Hs&&(_u=!0),dt!==null&&(dt=dt.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var Wt=e,ee=b;at=i;var Ie=r;switch(ee.tag){case 1:if(Wt=ee.payload,typeof Wt=="function"){gt=Wt.call(Ie,gt,at);break t}gt=Wt;break t;case 3:Wt.flags=Wt.flags&-65537|128;case 0:if(Wt=ee.payload,at=typeof Wt=="function"?Wt.call(Ie,gt,at):Wt,at==null)break t;gt=_({},gt,at);break t;case 2:ha=!0}}at=b.callback,at!==null&&(e.flags|=64,ct&&(e.flags|=8192),ct=u.callbacks,ct===null?u.callbacks=[at]:ct.push(at))}else ct={lane:at,tag:b.tag,payload:b.payload,callback:b.callback,next:null},dt===null?(et=dt=ct,I=gt):dt=dt.next=ct,S|=at;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;ct=b,b=ct.next,ct.next=null,u.lastBaseUpdate=ct,u.shared.pending=null}}while(!0);dt===null&&(I=gt),u.baseState=I,u.firstBaseUpdate=et,u.lastBaseUpdate=dt,d===null&&(u.shared.lanes=0),xa|=S,e.lanes=S,e.memoizedState=gt}}function Rp(e,i){if(typeof e!="function")throw Error(s(191,e));e.call(i)}function Cp(e,i){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)Rp(r[e],i)}var ks=N(null),ol=N(0);function wp(e,i){e=qi,xt(ol,e),xt(ks,i),qi=e|i.baseLanes}function vu(){xt(ol,qi),xt(ks,ks.current)}function xu(){qi=ol.current,nt(ks),nt(ol)}var kn=N(null),si=null;function ma(e){var i=e.alternate;xt(en,en.current&1),xt(kn,e),si===null&&(i===null||ks.current!==null||i.memoizedState!==null)&&(si=e)}function Su(e){xt(en,en.current),xt(kn,e),si===null&&(si=e)}function Dp(e){e.tag===22?(xt(en,en.current),xt(kn,e),si===null&&(si=e)):ga()}function ga(){xt(en,en.current),xt(kn,kn.current)}function Wn(e){nt(kn),si===e&&(si=null),nt(en)}var en=N(0);function ll(e){for(var i=e;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||Rf(r)||Cf(r)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Bi=0,ce=null,ze=null,rn=null,cl=!1,Ws=!1,is=!1,ul=0,Qr=0,qs=null,px=0;function Qe(){throw Error(s(321))}function yu(e,i){if(i===null)return!1;for(var r=0;r<i.length&&r<e.length;r++)if(!Vn(e[r],i[r]))return!1;return!0}function Mu(e,i,r,o,u,d){return Bi=d,ce=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,z.H=e===null||e.memoizedState===null?dm:zu,is=!1,d=r(o,u),is=!1,Ws&&(d=Lp(i,r,o,u)),Up(e),d}function Up(e){z.H=to;var i=ze!==null&&ze.next!==null;if(Bi=0,rn=ze=ce=null,cl=!1,Qr=0,qs=null,i)throw Error(s(300));e===null||on||(e=e.dependencies,e!==null&&tl(e)&&(on=!0))}function Lp(e,i,r,o){ce=e;var u=0;do{if(Ws&&(qs=null),Qr=0,Ws=!1,25<=u)throw Error(s(301));if(u+=1,rn=ze=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}z.H=pm,d=i(r,o)}while(Ws);return d}function mx(){var e=z.H,i=e.useState()[0];return i=typeof i.then=="function"?Jr(i):i,e=e.useState()[0],(ze!==null?ze.memoizedState:null)!==e&&(ce.flags|=1024),i}function Eu(){var e=ul!==0;return ul=0,e}function Tu(e,i,r){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~r}function Au(e){if(cl){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}cl=!1}Bi=0,rn=ze=ce=null,Ws=!1,Qr=ul=0,qs=null}function Un(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?ce.memoizedState=rn=e:rn=rn.next=e,rn}function nn(){if(ze===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var i=rn===null?ce.memoizedState:rn.next;if(i!==null)rn=i,ze=e;else{if(e===null)throw ce.alternate===null?Error(s(467)):Error(s(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},rn===null?ce.memoizedState=rn=e:rn=rn.next=e}return rn}function fl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Jr(e){var i=Qr;return Qr+=1,qs===null&&(qs=[]),e=Mp(qs,e,i),i=ce,(rn===null?i.memoizedState:rn.next)===null&&(i=i.alternate,z.H=i===null||i.memoizedState===null?dm:zu),e}function hl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Jr(e);if(e.$$typeof===U)return Mn(e)}throw Error(s(438,String(e)))}function bu(e){var i=null,r=ce.updateQueue;if(r!==null&&(i=r.memoCache),i==null){var o=ce.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(u){return u.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),r===null&&(r=fl(),ce.updateQueue=r),r.memoCache=i,r=i.data[i.index],r===void 0)for(r=i.data[i.index]=Array(e),o=0;o<e;o++)r[o]=w;return i.index++,r}function Ii(e,i){return typeof i=="function"?i(e):i}function dl(e){var i=nn();return Ru(i,ze,e)}function Ru(e,i,r){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=r;var u=e.baseQueue,d=o.pending;if(d!==null){if(u!==null){var S=u.next;u.next=d.next,d.next=S}i.baseQueue=u=d,o.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{i=u.next;var b=S=null,I=null,et=i,dt=!1;do{var gt=et.lane&-536870913;if(gt!==et.lane?(ve&gt)===gt:(Bi&gt)===gt){var at=et.revertLane;if(at===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),gt===Hs&&(dt=!0);else if((Bi&at)===at){et=et.next,at===Hs&&(dt=!0);continue}else gt={lane:0,revertLane:et.revertLane,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},I===null?(b=I=gt,S=d):I=I.next=gt,ce.lanes|=at,xa|=at;gt=et.action,is&&r(d,gt),d=et.hasEagerState?et.eagerState:r(d,gt)}else at={lane:gt,revertLane:et.revertLane,gesture:et.gesture,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},I===null?(b=I=at,S=d):I=I.next=at,ce.lanes|=gt,xa|=gt;et=et.next}while(et!==null&&et!==i);if(I===null?S=d:I.next=b,!Vn(d,e.memoizedState)&&(on=!0,dt&&(r=Gs,r!==null)))throw r;e.memoizedState=d,e.baseState=S,e.baseQueue=I,o.lastRenderedState=d}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Cu(e){var i=nn(),r=i.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=e;var o=r.dispatch,u=r.pending,d=i.memoizedState;if(u!==null){r.pending=null;var S=u=u.next;do d=e(d,S.action),S=S.next;while(S!==u);Vn(d,i.memoizedState)||(on=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),r.lastRenderedState=d}return[d,o]}function Np(e,i,r){var o=ce,u=nn(),d=ye;if(d){if(r===void 0)throw Error(s(407));r=r()}else r=i();var S=!Vn((ze||u).memoizedState,r);if(S&&(u.memoizedState=r,on=!0),u=u.queue,Uu(Pp.bind(null,o,u,e),[e]),u.getSnapshot!==i||S||rn!==null&&rn.memoizedState.tag&1){if(o.flags|=2048,Ys(9,{destroy:void 0},Fp.bind(null,o,u,r,i),null),Xe===null)throw Error(s(349));d||(Bi&127)!==0||Op(o,i,r)}return r}function Op(e,i,r){e.flags|=16384,e={getSnapshot:i,value:r},i=ce.updateQueue,i===null?(i=fl(),ce.updateQueue=i,i.stores=[e]):(r=i.stores,r===null?i.stores=[e]:r.push(e))}function Fp(e,i,r,o){i.value=r,i.getSnapshot=o,zp(i)&&Bp(e)}function Pp(e,i,r){return r(function(){zp(i)&&Bp(e)})}function zp(e){var i=e.getSnapshot;e=e.value;try{var r=i();return!Vn(e,r)}catch{return!0}}function Bp(e){var i=ja(e,2);i!==null&&Bn(i,e,2)}function wu(e){var i=Un();if(typeof e=="function"){var r=e;if(e=r(),is){It(!0);try{r()}finally{It(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:e},i}function Ip(e,i,r,o){return e.baseState=r,Ru(e,ze,typeof o=="function"?o:Ii)}function gx(e,i,r,o,u){if(gl(e))throw Error(s(485));if(e=i.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){d.listeners.push(S)}};z.T!==null?r(!0):d.isTransition=!1,o(d),r=i.pending,r===null?(d.next=i.pending=d,Hp(i,d)):(d.next=r.next,i.pending=r.next=d)}}function Hp(e,i){var r=i.action,o=i.payload,u=e.state;if(i.isTransition){var d=z.T,S={};z.T=S;try{var b=r(u,o),I=z.S;I!==null&&I(S,b),Gp(e,i,b)}catch(et){Du(e,i,et)}finally{d!==null&&S.types!==null&&(d.types=S.types),z.T=d}}else try{d=r(u,o),Gp(e,i,d)}catch(et){Du(e,i,et)}}function Gp(e,i,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(o){Vp(e,i,o)},function(o){return Du(e,i,o)}):Vp(e,i,r)}function Vp(e,i,r){i.status="fulfilled",i.value=r,Xp(i),e.state=r,i=e.pending,i!==null&&(r=i.next,r===i?e.pending=null:(r=r.next,i.next=r,Hp(e,r)))}function Du(e,i,r){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=r,Xp(i),i=i.next;while(i!==o)}e.action=null}function Xp(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function kp(e,i){return i}function Wp(e,i){if(ye){var r=Xe.formState;if(r!==null){t:{var o=ce;if(ye){if(Ye){e:{for(var u=Ye,d=ai;u.nodeType!==8;){if(!d){u=null;break e}if(u=ri(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Ye=ri(u.nextSibling),o=u.data==="F!";break t}}ua(o)}o=!1}o&&(i=r[0])}}return r=Un(),r.memoizedState=r.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kp,lastRenderedState:i},r.queue=o,r=um.bind(null,ce,o),o.dispatch=r,o=wu(!1),d=Pu.bind(null,ce,!1,o.queue),o=Un(),u={state:i,dispatch:null,action:e,pending:null},o.queue=u,r=gx.bind(null,ce,u,d,r),u.dispatch=r,o.memoizedState=e,[i,r,!1]}function qp(e){var i=nn();return Yp(i,ze,e)}function Yp(e,i,r){if(i=Ru(e,i,kp)[0],e=dl(Ii)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=Jr(i)}catch(S){throw S===Vs?il:S}else o=i;i=nn();var u=i.queue,d=u.dispatch;return r!==i.memoizedState&&(ce.flags|=2048,Ys(9,{destroy:void 0},_x.bind(null,u,r),null)),[o,d,e]}function _x(e,i){e.action=i}function jp(e){var i=nn(),r=ze;if(r!==null)return Yp(i,r,e);nn(),i=i.memoizedState,r=nn();var o=r.queue.dispatch;return r.memoizedState=e,[i,o,!1]}function Ys(e,i,r,o){return e={tag:e,create:r,deps:o,inst:i,next:null},i=ce.updateQueue,i===null&&(i=fl(),ce.updateQueue=i),r=i.lastEffect,r===null?i.lastEffect=e.next=e:(o=r.next,r.next=e,e.next=o,i.lastEffect=e),e}function Zp(){return nn().memoizedState}function pl(e,i,r,o){var u=Un();ce.flags|=e,u.memoizedState=Ys(1|i,{destroy:void 0},r,o===void 0?null:o)}function ml(e,i,r,o){var u=nn();o=o===void 0?null:o;var d=u.memoizedState.inst;ze!==null&&o!==null&&yu(o,ze.memoizedState.deps)?u.memoizedState=Ys(i,d,r,o):(ce.flags|=e,u.memoizedState=Ys(1|i,d,r,o))}function Kp(e,i){pl(8390656,8,e,i)}function Uu(e,i){ml(2048,8,e,i)}function vx(e){ce.flags|=4;var i=ce.updateQueue;if(i===null)i=fl(),ce.updateQueue=i,i.events=[e];else{var r=i.events;r===null?i.events=[e]:r.push(e)}}function Qp(e){var i=nn().memoizedState;return vx({ref:i,nextImpl:e}),function(){if((De&2)!==0)throw Error(s(440));return i.impl.apply(void 0,arguments)}}function Jp(e,i){return ml(4,2,e,i)}function $p(e,i){return ml(4,4,e,i)}function tm(e,i){if(typeof i=="function"){e=e();var r=i(e);return function(){typeof r=="function"?r():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function em(e,i,r){r=r!=null?r.concat([e]):null,ml(4,4,tm.bind(null,i,e),r)}function Lu(){}function nm(e,i){var r=nn();i=i===void 0?null:i;var o=r.memoizedState;return i!==null&&yu(i,o[1])?o[0]:(r.memoizedState=[e,i],e)}function im(e,i){var r=nn();i=i===void 0?null:i;var o=r.memoizedState;if(i!==null&&yu(i,o[1]))return o[0];if(o=e(),is){It(!0);try{e()}finally{It(!1)}}return r.memoizedState=[o,i],o}function Nu(e,i,r){return r===void 0||(Bi&1073741824)!==0&&(ve&261930)===0?e.memoizedState=i:(e.memoizedState=r,e=ag(),ce.lanes|=e,xa|=e,r)}function am(e,i,r,o){return Vn(r,i)?r:ks.current!==null?(e=Nu(e,r,o),Vn(e,i)||(on=!0),e):(Bi&42)===0||(Bi&1073741824)!==0&&(ve&261930)===0?(on=!0,e.memoizedState=r):(e=ag(),ce.lanes|=e,xa|=e,i)}function sm(e,i,r,o,u){var d=V.p;V.p=d!==0&&8>d?d:8;var S=z.T,b={};z.T=b,Pu(e,!1,i,r);try{var I=u(),et=z.S;if(et!==null&&et(b,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var dt=dx(I,o);$r(e,i,dt,jn(e))}else $r(e,i,o,jn(e))}catch(gt){$r(e,i,{then:function(){},status:"rejected",reason:gt},jn())}finally{V.p=d,S!==null&&b.types!==null&&(S.types=b.types),z.T=S}}function xx(){}function Ou(e,i,r,o){if(e.tag!==5)throw Error(s(476));var u=rm(e).queue;sm(e,u,i,X,r===null?xx:function(){return om(e),r(o)})}function rm(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:X,baseState:X,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:X},next:null};var r={};return i.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:r},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function om(e){var i=rm(e);i.next===null&&(i=e.alternate.memoizedState),$r(e,i.next.queue,{},jn())}function Fu(){return Mn(_o)}function lm(){return nn().memoizedState}function cm(){return nn().memoizedState}function Sx(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var r=jn();e=da(r);var o=pa(i,e,r);o!==null&&(Bn(o,i,r),jr(o,i,r)),i={cache:uu()},e.payload=i;return}i=i.return}}function yx(e,i,r){var o=jn();r={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},gl(e)?fm(i,r):(r=$c(e,i,r,o),r!==null&&(Bn(r,e,o),hm(r,i,o)))}function um(e,i,r){var o=jn();$r(e,i,r,o)}function $r(e,i,r,o){var u={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(gl(e))fm(i,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var S=i.lastRenderedState,b=d(S,r);if(u.hasEagerState=!0,u.eagerState=b,Vn(b,S))return Ko(e,i,u,0),Xe===null&&Zo(),!1}catch{}finally{}if(r=$c(e,i,u,o),r!==null)return Bn(r,e,o),hm(r,i,o),!0}return!1}function Pu(e,i,r,o){if(o={lane:2,revertLane:mf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},gl(e)){if(i)throw Error(s(479))}else i=$c(e,r,o,2),i!==null&&Bn(i,e,2)}function gl(e){var i=e.alternate;return e===ce||i!==null&&i===ce}function fm(e,i){Ws=cl=!0;var r=e.pending;r===null?i.next=i:(i.next=r.next,r.next=i),e.pending=i}function hm(e,i,r){if((r&4194048)!==0){var o=i.lanes;o&=e.pendingLanes,r|=o,i.lanes=r,Si(e,r)}}var to={readContext:Mn,use:hl,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe};to.useEffectEvent=Qe;var dm={readContext:Mn,use:hl,useCallback:function(e,i){return Un().memoizedState=[e,i===void 0?null:i],e},useContext:Mn,useEffect:Kp,useImperativeHandle:function(e,i,r){r=r!=null?r.concat([e]):null,pl(4194308,4,tm.bind(null,i,e),r)},useLayoutEffect:function(e,i){return pl(4194308,4,e,i)},useInsertionEffect:function(e,i){pl(4,2,e,i)},useMemo:function(e,i){var r=Un();i=i===void 0?null:i;var o=e();if(is){It(!0);try{e()}finally{It(!1)}}return r.memoizedState=[o,i],o},useReducer:function(e,i,r){var o=Un();if(r!==void 0){var u=r(i);if(is){It(!0);try{r(i)}finally{It(!1)}}}else u=i;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=yx.bind(null,ce,e),[o.memoizedState,e]},useRef:function(e){var i=Un();return e={current:e},i.memoizedState=e},useState:function(e){e=wu(e);var i=e.queue,r=um.bind(null,ce,i);return i.dispatch=r,[e.memoizedState,r]},useDebugValue:Lu,useDeferredValue:function(e,i){var r=Un();return Nu(r,e,i)},useTransition:function(){var e=wu(!1);return e=sm.bind(null,ce,e.queue,!0,!1),Un().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,r){var o=ce,u=Un();if(ye){if(r===void 0)throw Error(s(407));r=r()}else{if(r=i(),Xe===null)throw Error(s(349));(ve&127)!==0||Op(o,i,r)}u.memoizedState=r;var d={value:r,getSnapshot:i};return u.queue=d,Kp(Pp.bind(null,o,d,e),[e]),o.flags|=2048,Ys(9,{destroy:void 0},Fp.bind(null,o,d,r,i),null),r},useId:function(){var e=Un(),i=Xe.identifierPrefix;if(ye){var r=Ei,o=Mi;r=(o&~(1<<32-Ut(o)-1)).toString(32)+r,i="_"+i+"R_"+r,r=ul++,0<r&&(i+="H"+r.toString(32)),i+="_"}else r=px++,i="_"+i+"r_"+r.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:Fu,useFormState:Wp,useActionState:Wp,useOptimistic:function(e){var i=Un();i.memoizedState=i.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=r,i=Pu.bind(null,ce,!0,r),r.dispatch=i,[e,i]},useMemoCache:bu,useCacheRefresh:function(){return Un().memoizedState=Sx.bind(null,ce)},useEffectEvent:function(e){var i=Un(),r={impl:e};return i.memoizedState=r,function(){if((De&2)!==0)throw Error(s(440));return r.impl.apply(void 0,arguments)}}},zu={readContext:Mn,use:hl,useCallback:nm,useContext:Mn,useEffect:Uu,useImperativeHandle:em,useInsertionEffect:Jp,useLayoutEffect:$p,useMemo:im,useReducer:dl,useRef:Zp,useState:function(){return dl(Ii)},useDebugValue:Lu,useDeferredValue:function(e,i){var r=nn();return am(r,ze.memoizedState,e,i)},useTransition:function(){var e=dl(Ii)[0],i=nn().memoizedState;return[typeof e=="boolean"?e:Jr(e),i]},useSyncExternalStore:Np,useId:lm,useHostTransitionStatus:Fu,useFormState:qp,useActionState:qp,useOptimistic:function(e,i){var r=nn();return Ip(r,ze,e,i)},useMemoCache:bu,useCacheRefresh:cm};zu.useEffectEvent=Qp;var pm={readContext:Mn,use:hl,useCallback:nm,useContext:Mn,useEffect:Uu,useImperativeHandle:em,useInsertionEffect:Jp,useLayoutEffect:$p,useMemo:im,useReducer:Cu,useRef:Zp,useState:function(){return Cu(Ii)},useDebugValue:Lu,useDeferredValue:function(e,i){var r=nn();return ze===null?Nu(r,e,i):am(r,ze.memoizedState,e,i)},useTransition:function(){var e=Cu(Ii)[0],i=nn().memoizedState;return[typeof e=="boolean"?e:Jr(e),i]},useSyncExternalStore:Np,useId:lm,useHostTransitionStatus:Fu,useFormState:jp,useActionState:jp,useOptimistic:function(e,i){var r=nn();return ze!==null?Ip(r,ze,e,i):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:bu,useCacheRefresh:cm};pm.useEffectEvent=Qp;function Bu(e,i,r,o){i=e.memoizedState,r=r(o,i),r=r==null?i:_({},i,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Iu={enqueueSetState:function(e,i,r){e=e._reactInternals;var o=jn(),u=da(o);u.payload=i,r!=null&&(u.callback=r),i=pa(e,u,o),i!==null&&(Bn(i,e,o),jr(i,e,o))},enqueueReplaceState:function(e,i,r){e=e._reactInternals;var o=jn(),u=da(o);u.tag=1,u.payload=i,r!=null&&(u.callback=r),i=pa(e,u,o),i!==null&&(Bn(i,e,o),jr(i,e,o))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var r=jn(),o=da(r);o.tag=2,i!=null&&(o.callback=i),i=pa(e,o,r),i!==null&&(Bn(i,e,r),jr(i,e,r))}};function mm(e,i,r,o,u,d,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,S):i.prototype&&i.prototype.isPureReactComponent?!Hr(r,o)||!Hr(u,d):!0}function gm(e,i,r,o){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,o),i.state!==e&&Iu.enqueueReplaceState(i,i.state,null)}function as(e,i){var r=i;if("ref"in i){r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}if(e=e.defaultProps){r===i&&(r=_({},r));for(var u in e)r[u]===void 0&&(r[u]=e[u])}return r}function _m(e){jo(e)}function vm(e){console.error(e)}function xm(e){jo(e)}function _l(e,i){try{var r=e.onUncaughtError;r(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function Sm(e,i,r){try{var o=e.onCaughtError;o(r.value,{componentStack:r.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Hu(e,i,r){return r=da(r),r.tag=3,r.payload={element:null},r.callback=function(){_l(e,i)},r}function ym(e){return e=da(e),e.tag=3,e}function Mm(e,i,r,o){var u=r.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;e.payload=function(){return u(d)},e.callback=function(){Sm(i,r,o)}}var S=r.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){Sm(i,r,o),typeof u!="function"&&(Sa===null?Sa=new Set([this]):Sa.add(this));var b=o.stack;this.componentDidCatch(o.value,{componentStack:b!==null?b:""})})}function Mx(e,i,r,o,u){if(r.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=r.alternate,i!==null&&Is(i,r,u,!0),r=kn.current,r!==null){switch(r.tag){case 31:case 13:return si===null?wl():r.alternate===null&&Je===0&&(Je=3),r.flags&=-257,r.flags|=65536,r.lanes=u,o===al?r.flags|=16384:(i=r.updateQueue,i===null?r.updateQueue=new Set([o]):i.add(o),hf(e,o,u)),!1;case 22:return r.flags|=65536,o===al?r.flags|=16384:(i=r.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},r.updateQueue=i):(r=i.retryQueue,r===null?i.retryQueue=new Set([o]):r.add(o)),hf(e,o,u)),!1}throw Error(s(435,r.tag))}return hf(e,o,u),wl(),!1}if(ye)return i=kn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=u,o!==su&&(e=Error(s(422),{cause:o}),Xr(ei(e,r)))):(o!==su&&(i=Error(s(423),{cause:o}),Xr(ei(i,r))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ei(o,r),u=Hu(e.stateNode,o,u),gu(e,u),Je!==4&&(Je=2)),!1;var d=Error(s(520),{cause:o});if(d=ei(d,r),lo===null?lo=[d]:lo.push(d),Je!==4&&(Je=2),i===null)return!0;o=ei(o,r),r=i;do{switch(r.tag){case 3:return r.flags|=65536,e=u&-u,r.lanes|=e,e=Hu(r.stateNode,o,e),gu(r,e),!1;case 1:if(i=r.type,d=r.stateNode,(r.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Sa===null||!Sa.has(d))))return r.flags|=65536,u&=-u,r.lanes|=u,u=ym(u),Mm(u,e,r,o),gu(r,u),!1}r=r.return}while(r!==null);return!1}var Gu=Error(s(461)),on=!1;function En(e,i,r,o){i.child=e===null?bp(i,null,r,o):ns(i,e.child,r,o)}function Em(e,i,r,o,u){r=r.render;var d=i.ref;if("ref"in o){var S={};for(var b in o)b!=="ref"&&(S[b]=o[b])}else S=o;return Ja(i),o=Mu(e,i,r,S,d,u),b=Eu(),e!==null&&!on?(Tu(e,i,u),Hi(e,i,u)):(ye&&b&&iu(i),i.flags|=1,En(e,i,o,u),i.child)}function Tm(e,i,r,o,u){if(e===null){var d=r.type;return typeof d=="function"&&!tu(d)&&d.defaultProps===void 0&&r.compare===null?(i.tag=15,i.type=d,Am(e,i,d,o,u)):(e=Jo(r.type,null,o,i,i.mode,u),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!Zu(e,u)){var S=d.memoizedProps;if(r=r.compare,r=r!==null?r:Hr,r(S,o)&&e.ref===i.ref)return Hi(e,i,u)}return i.flags|=1,e=Oi(d,o),e.ref=i.ref,e.return=i,i.child=e}function Am(e,i,r,o,u){if(e!==null){var d=e.memoizedProps;if(Hr(d,o)&&e.ref===i.ref)if(on=!1,i.pendingProps=o=d,Zu(e,u))(e.flags&131072)!==0&&(on=!0);else return i.lanes=e.lanes,Hi(e,i,u)}return Vu(e,i,r,o,u)}function bm(e,i,r,o){var u=o.children,d=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((i.flags&128)!==0){if(d=d!==null?d.baseLanes|r:r,e!==null){for(o=i.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,i.child=null;return Rm(e,i,d,r,o)}if((r&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&nl(i,d!==null?d.cachePool:null),d!==null?wp(i,d):vu(),Dp(i);else return o=i.lanes=536870912,Rm(e,i,d!==null?d.baseLanes|r:r,r,o)}else d!==null?(nl(i,d.cachePool),wp(i,d),ga(),i.memoizedState=null):(e!==null&&nl(i,null),vu(),ga());return En(e,i,u,r),i.child}function eo(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function Rm(e,i,r,o,u){var d=hu();return d=d===null?null:{parent:sn._currentValue,pool:d},i.memoizedState={baseLanes:r,cachePool:d},e!==null&&nl(i,null),vu(),Dp(i),e!==null&&Is(e,i,o,!0),i.childLanes=u,null}function vl(e,i){return i=Sl({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function Cm(e,i,r){return ns(i,e.child,null,r),e=vl(i,i.pendingProps),e.flags|=2,Wn(i),i.memoizedState=null,e}function Ex(e,i,r){var o=i.pendingProps,u=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(ye){if(o.mode==="hidden")return e=vl(i,o),i.lanes=536870912,eo(null,e);if(Su(i),(e=Ye)?(e=Hg(e,ai),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:la!==null?{id:Mi,overflow:Ei}:null,retryLane:536870912,hydrationErrors:null},r=fp(e),r.return=i,i.child=r,yn=i,Ye=null)):e=null,e===null)throw ua(i);return i.lanes=536870912,null}return vl(i,o)}var d=e.memoizedState;if(d!==null){var S=d.dehydrated;if(Su(i),u)if(i.flags&256)i.flags&=-257,i=Cm(e,i,r);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(s(558));else if(on||Is(e,i,r,!1),u=(r&e.childLanes)!==0,on||u){if(o=Xe,o!==null&&(S=Ts(o,r),S!==0&&S!==d.retryLane))throw d.retryLane=S,ja(e,S),Bn(o,e,S),Gu;wl(),i=Cm(e,i,r)}else e=d.treeContext,Ye=ri(S.nextSibling),yn=i,ye=!0,ca=null,ai=!1,e!==null&&pp(i,e),i=vl(i,o),i.flags|=4096;return i}return e=Oi(e.child,{mode:o.mode,children:o.children}),e.ref=i.ref,i.child=e,e.return=i,e}function xl(e,i){var r=i.ref;if(r===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(s(284));(e===null||e.ref!==r)&&(i.flags|=4194816)}}function Vu(e,i,r,o,u){return Ja(i),r=Mu(e,i,r,o,void 0,u),o=Eu(),e!==null&&!on?(Tu(e,i,u),Hi(e,i,u)):(ye&&o&&iu(i),i.flags|=1,En(e,i,r,u),i.child)}function wm(e,i,r,o,u,d){return Ja(i),i.updateQueue=null,r=Lp(i,o,r,u),Up(e),o=Eu(),e!==null&&!on?(Tu(e,i,d),Hi(e,i,d)):(ye&&o&&iu(i),i.flags|=1,En(e,i,r,d),i.child)}function Dm(e,i,r,o,u){if(Ja(i),i.stateNode===null){var d=Fs,S=r.contextType;typeof S=="object"&&S!==null&&(d=Mn(S)),d=new r(o,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Iu,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=o,d.state=i.memoizedState,d.refs={},pu(i),S=r.contextType,d.context=typeof S=="object"&&S!==null?Mn(S):Fs,d.state=i.memoizedState,S=r.getDerivedStateFromProps,typeof S=="function"&&(Bu(i,r,S,o),d.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(S=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),S!==d.state&&Iu.enqueueReplaceState(d,d.state,null),Kr(i,o,d,u),Zr(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(e===null){d=i.stateNode;var b=i.memoizedProps,I=as(r,b);d.props=I;var et=d.context,dt=r.contextType;S=Fs,typeof dt=="object"&&dt!==null&&(S=Mn(dt));var gt=r.getDerivedStateFromProps;dt=typeof gt=="function"||typeof d.getSnapshotBeforeUpdate=="function",b=i.pendingProps!==b,dt||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(b||et!==S)&&gm(i,d,o,S),ha=!1;var at=i.memoizedState;d.state=at,Kr(i,o,d,u),Zr(),et=i.memoizedState,b||at!==et||ha?(typeof gt=="function"&&(Bu(i,r,gt,o),et=i.memoizedState),(I=ha||mm(i,r,I,o,at,et,S))?(dt||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=et),d.props=o,d.state=et,d.context=S,o=I):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{d=i.stateNode,mu(e,i),S=i.memoizedProps,dt=as(r,S),d.props=dt,gt=i.pendingProps,at=d.context,et=r.contextType,I=Fs,typeof et=="object"&&et!==null&&(I=Mn(et)),b=r.getDerivedStateFromProps,(et=typeof b=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S!==gt||at!==I)&&gm(i,d,o,I),ha=!1,at=i.memoizedState,d.state=at,Kr(i,o,d,u),Zr();var ct=i.memoizedState;S!==gt||at!==ct||ha||e!==null&&e.dependencies!==null&&tl(e.dependencies)?(typeof b=="function"&&(Bu(i,r,b,o),ct=i.memoizedState),(dt=ha||mm(i,r,dt,o,at,ct,I)||e!==null&&e.dependencies!==null&&tl(e.dependencies))?(et||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ct,I),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ct,I)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||S===e.memoizedProps&&at===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&at===e.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=ct),d.props=o,d.state=ct,d.context=I,o=dt):(typeof d.componentDidUpdate!="function"||S===e.memoizedProps&&at===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&at===e.memoizedState||(i.flags|=1024),o=!1)}return d=o,xl(e,i),o=(i.flags&128)!==0,d||o?(d=i.stateNode,r=o&&typeof r.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&o?(i.child=ns(i,e.child,null,u),i.child=ns(i,null,r,u)):En(e,i,r,u),i.memoizedState=d.state,e=i.child):e=Hi(e,i,u),e}function Um(e,i,r,o){return Ka(),i.flags|=256,En(e,i,r,o),i.child}var Xu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ku(e){return{baseLanes:e,cachePool:Sp()}}function Wu(e,i,r){return e=e!==null?e.childLanes&~r:0,i&&(e|=Yn),e}function Lm(e,i,r){var o=i.pendingProps,u=!1,d=(i.flags&128)!==0,S;if((S=d)||(S=e!==null&&e.memoizedState===null?!1:(en.current&2)!==0),S&&(u=!0,i.flags&=-129),S=(i.flags&32)!==0,i.flags&=-33,e===null){if(ye){if(u?ma(i):ga(),(e=Ye)?(e=Hg(e,ai),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:la!==null?{id:Mi,overflow:Ei}:null,retryLane:536870912,hydrationErrors:null},r=fp(e),r.return=i,i.child=r,yn=i,Ye=null)):e=null,e===null)throw ua(i);return Cf(e)?i.lanes=32:i.lanes=536870912,null}var b=o.children;return o=o.fallback,u?(ga(),u=i.mode,b=Sl({mode:"hidden",children:b},u),o=Za(o,u,r,null),b.return=i,o.return=i,b.sibling=o,i.child=b,o=i.child,o.memoizedState=ku(r),o.childLanes=Wu(e,S,r),i.memoizedState=Xu,eo(null,o)):(ma(i),qu(i,b))}var I=e.memoizedState;if(I!==null&&(b=I.dehydrated,b!==null)){if(d)i.flags&256?(ma(i),i.flags&=-257,i=Yu(e,i,r)):i.memoizedState!==null?(ga(),i.child=e.child,i.flags|=128,i=null):(ga(),b=o.fallback,u=i.mode,o=Sl({mode:"visible",children:o.children},u),b=Za(b,u,r,null),b.flags|=2,o.return=i,b.return=i,o.sibling=b,i.child=o,ns(i,e.child,null,r),o=i.child,o.memoizedState=ku(r),o.childLanes=Wu(e,S,r),i.memoizedState=Xu,i=eo(null,o));else if(ma(i),Cf(b)){if(S=b.nextSibling&&b.nextSibling.dataset,S)var et=S.dgst;S=et,o=Error(s(419)),o.stack="",o.digest=S,Xr({value:o,source:null,stack:null}),i=Yu(e,i,r)}else if(on||Is(e,i,r,!1),S=(r&e.childLanes)!==0,on||S){if(S=Xe,S!==null&&(o=Ts(S,r),o!==0&&o!==I.retryLane))throw I.retryLane=o,ja(e,o),Bn(S,e,o),Gu;Rf(b)||wl(),i=Yu(e,i,r)}else Rf(b)?(i.flags|=192,i.child=e.child,i=null):(e=I.treeContext,Ye=ri(b.nextSibling),yn=i,ye=!0,ca=null,ai=!1,e!==null&&pp(i,e),i=qu(i,o.children),i.flags|=4096);return i}return u?(ga(),b=o.fallback,u=i.mode,I=e.child,et=I.sibling,o=Oi(I,{mode:"hidden",children:o.children}),o.subtreeFlags=I.subtreeFlags&65011712,et!==null?b=Oi(et,b):(b=Za(b,u,r,null),b.flags|=2),b.return=i,o.return=i,o.sibling=b,i.child=o,eo(null,o),o=i.child,b=e.child.memoizedState,b===null?b=ku(r):(u=b.cachePool,u!==null?(I=sn._currentValue,u=u.parent!==I?{parent:I,pool:I}:u):u=Sp(),b={baseLanes:b.baseLanes|r,cachePool:u}),o.memoizedState=b,o.childLanes=Wu(e,S,r),i.memoizedState=Xu,eo(e.child,o)):(ma(i),r=e.child,e=r.sibling,r=Oi(r,{mode:"visible",children:o.children}),r.return=i,r.sibling=null,e!==null&&(S=i.deletions,S===null?(i.deletions=[e],i.flags|=16):S.push(e)),i.child=r,i.memoizedState=null,r)}function qu(e,i){return i=Sl({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Sl(e,i){return e=Xn(22,e,null,i),e.lanes=0,e}function Yu(e,i,r){return ns(i,e.child,null,r),e=qu(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Nm(e,i,r){e.lanes|=i;var o=e.alternate;o!==null&&(o.lanes|=i),lu(e.return,i,r)}function ju(e,i,r,o,u,d){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:u,treeForkCount:d}:(S.isBackwards=i,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=r,S.tailMode=u,S.treeForkCount=d)}function Om(e,i,r){var o=i.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var S=en.current,b=(S&2)!==0;if(b?(S=S&1|2,i.flags|=128):S&=1,xt(en,S),En(e,i,o,r),o=ye?Vr:0,!b&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Nm(e,r,i);else if(e.tag===19)Nm(e,r,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(r=i.child,u=null;r!==null;)e=r.alternate,e!==null&&ll(e)===null&&(u=r),r=r.sibling;r=u,r===null?(u=i.child,i.child=null):(u=r.sibling,r.sibling=null),ju(i,!1,u,r,d,o);break;case"backwards":case"unstable_legacy-backwards":for(r=null,u=i.child,i.child=null;u!==null;){if(e=u.alternate,e!==null&&ll(e)===null){i.child=u;break}e=u.sibling,u.sibling=r,r=u,u=e}ju(i,!0,r,null,d,o);break;case"together":ju(i,!1,null,null,void 0,o);break;default:i.memoizedState=null}return i.child}function Hi(e,i,r){if(e!==null&&(i.dependencies=e.dependencies),xa|=i.lanes,(r&i.childLanes)===0)if(e!==null){if(Is(e,i,r,!1),(r&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(s(153));if(i.child!==null){for(e=i.child,r=Oi(e,e.pendingProps),i.child=r,r.return=i;e.sibling!==null;)e=e.sibling,r=r.sibling=Oi(e,e.pendingProps),r.return=i;r.sibling=null}return i.child}function Zu(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&tl(e)))}function Tx(e,i,r){switch(i.tag){case 3:Ct(i,i.stateNode.containerInfo),fa(i,sn,e.memoizedState.cache),Ka();break;case 27:case 5:kt(i);break;case 4:Ct(i,i.stateNode.containerInfo);break;case 10:fa(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Su(i),null;break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(ma(i),i.flags|=128,null):(r&i.child.childLanes)!==0?Lm(e,i,r):(ma(i),e=Hi(e,i,r),e!==null?e.sibling:null);ma(i);break;case 19:var u=(e.flags&128)!==0;if(o=(r&i.childLanes)!==0,o||(Is(e,i,r,!1),o=(r&i.childLanes)!==0),u){if(o)return Om(e,i,r);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),xt(en,en.current),o)break;return null;case 22:return i.lanes=0,bm(e,i,r,i.pendingProps);case 24:fa(i,sn,e.memoizedState.cache)}return Hi(e,i,r)}function Fm(e,i,r){if(e!==null)if(e.memoizedProps!==i.pendingProps)on=!0;else{if(!Zu(e,r)&&(i.flags&128)===0)return on=!1,Tx(e,i,r);on=(e.flags&131072)!==0}else on=!1,ye&&(i.flags&1048576)!==0&&dp(i,Vr,i.index);switch(i.lanes=0,i.tag){case 16:t:{var o=i.pendingProps;if(e=ts(i.elementType),i.type=e,typeof e=="function")tu(e)?(o=as(e,o),i.tag=1,i=Dm(null,i,e,o,r)):(i.tag=0,i=Vu(null,i,e,o,r));else{if(e!=null){var u=e.$$typeof;if(u===C){i.tag=11,i=Em(null,i,e,o,r);break t}else if(u===F){i.tag=14,i=Tm(null,i,e,o,r);break t}}throw i=Q(e)||e,Error(s(306,i,""))}}return i;case 0:return Vu(e,i,i.type,i.pendingProps,r);case 1:return o=i.type,u=as(o,i.pendingProps),Dm(e,i,o,u,r);case 3:t:{if(Ct(i,i.stateNode.containerInfo),e===null)throw Error(s(387));o=i.pendingProps;var d=i.memoizedState;u=d.element,mu(e,i),Kr(i,o,null,r);var S=i.memoizedState;if(o=S.cache,fa(i,sn,o),o!==d.cache&&cu(i,[sn],r,!0),Zr(),o=S.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:S.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=Um(e,i,o,r);break t}else if(o!==u){u=ei(Error(s(424)),i),Xr(u),i=Um(e,i,o,r);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ye=ri(e.firstChild),yn=i,ye=!0,ca=null,ai=!0,r=bp(i,null,o,r),i.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(Ka(),o===u){i=Hi(e,i,r);break t}En(e,i,o,r)}i=i.child}return i;case 26:return xl(e,i),e===null?(r=qg(i.type,null,i.pendingProps,null))?i.memoizedState=r:ye||(r=i.type,e=i.pendingProps,o=Pl(it.current).createElement(r),o[an]=i,o[xn]=e,Tn(o,r,e),St(o),i.stateNode=o):i.memoizedState=qg(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return kt(i),e===null&&ye&&(o=i.stateNode=Xg(i.type,i.pendingProps,it.current),yn=i,ai=!0,u=Ye,Ta(i.type)?(wf=u,Ye=ri(o.firstChild)):Ye=u),En(e,i,i.pendingProps.children,r),xl(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&ye&&((u=o=Ye)&&(o=tS(o,i.type,i.pendingProps,ai),o!==null?(i.stateNode=o,yn=i,Ye=ri(o.firstChild),ai=!1,u=!0):u=!1),u||ua(i)),kt(i),u=i.type,d=i.pendingProps,S=e!==null?e.memoizedProps:null,o=d.children,Tf(u,d)?o=null:S!==null&&Tf(u,S)&&(i.flags|=32),i.memoizedState!==null&&(u=Mu(e,i,mx,null,null,r),_o._currentValue=u),xl(e,i),En(e,i,o,r),i.child;case 6:return e===null&&ye&&((e=r=Ye)&&(r=eS(r,i.pendingProps,ai),r!==null?(i.stateNode=r,yn=i,Ye=null,e=!0):e=!1),e||ua(i)),null;case 13:return Lm(e,i,r);case 4:return Ct(i,i.stateNode.containerInfo),o=i.pendingProps,e===null?i.child=ns(i,null,o,r):En(e,i,o,r),i.child;case 11:return Em(e,i,i.type,i.pendingProps,r);case 7:return En(e,i,i.pendingProps,r),i.child;case 8:return En(e,i,i.pendingProps.children,r),i.child;case 12:return En(e,i,i.pendingProps.children,r),i.child;case 10:return o=i.pendingProps,fa(i,i.type,o.value),En(e,i,o.children,r),i.child;case 9:return u=i.type._context,o=i.pendingProps.children,Ja(i),u=Mn(u),o=o(u),i.flags|=1,En(e,i,o,r),i.child;case 14:return Tm(e,i,i.type,i.pendingProps,r);case 15:return Am(e,i,i.type,i.pendingProps,r);case 19:return Om(e,i,r);case 31:return Ex(e,i,r);case 22:return bm(e,i,r,i.pendingProps);case 24:return Ja(i),o=Mn(sn),e===null?(u=hu(),u===null&&(u=Xe,d=uu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=r),u=d),i.memoizedState={parent:o,cache:u},pu(i),fa(i,sn,u)):((e.lanes&r)!==0&&(mu(e,i),Kr(i,null,null,r),Zr()),u=e.memoizedState,d=i.memoizedState,u.parent!==o?(u={parent:o,cache:o},i.memoizedState=u,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=u),fa(i,sn,o)):(o=d.cache,fa(i,sn,o),o!==u.cache&&cu(i,[sn],r,!0))),En(e,i,i.pendingProps.children,r),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function Gi(e){e.flags|=4}function Ku(e,i,r,o,u){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(lg())e.flags|=8192;else throw es=al,du}else e.flags&=-16777217}function Pm(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Qg(i))if(lg())e.flags|=8192;else throw es=al,du}function yl(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Oe():536870912,e.lanes|=i,Qs|=i)}function no(e,i){if(!ye)switch(e.tailMode){case"hidden":i=e.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function je(e){var i=e.alternate!==null&&e.alternate.child===e.child,r=0,o=0;if(i)for(var u=e.child;u!==null;)r|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)r|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=r,i}function Ax(e,i,r){var o=i.pendingProps;switch(au(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(i),null;case 1:return je(i),null;case 3:return r=i.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),zi(sn),Pt(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Bs(i)?Gi(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ru())),je(i),null;case 26:var u=i.type,d=i.memoizedState;return e===null?(Gi(i),d!==null?(je(i),Pm(i,d)):(je(i),Ku(i,u,null,o,r))):d?d!==e.memoizedState?(Gi(i),je(i),Pm(i,d)):(je(i),i.flags&=-16777217):(e=e.memoizedProps,e!==o&&Gi(i),je(i),Ku(i,u,e,o,r)),null;case 27:if(le(i),r=it.current,u=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&Gi(i);else{if(!o){if(i.stateNode===null)throw Error(s(166));return je(i),null}e=At.current,Bs(i)?mp(i):(e=Xg(u,o,r),i.stateNode=e,Gi(i))}return je(i),null;case 5:if(le(i),u=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&Gi(i);else{if(!o){if(i.stateNode===null)throw Error(s(166));return je(i),null}if(d=At.current,Bs(i))mp(i);else{var S=Pl(it.current);switch(d){case 1:d=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=S.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?S.createElement(u,{is:o.is}):S.createElement(u)}}d[an]=i,d[xn]=o;t:for(S=i.child;S!==null;){if(S.tag===5||S.tag===6)d.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===i)break t;for(;S.sibling===null;){if(S.return===null||S.return===i)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}i.stateNode=d;t:switch(Tn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&Gi(i)}}return je(i),Ku(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,r),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==o&&Gi(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(s(166));if(e=it.current,Bs(i)){if(e=i.stateNode,r=i.memoizedProps,o=null,u=yn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[an]=i,e=!!(e.nodeValue===r||o!==null&&o.suppressHydrationWarning===!0||Lg(e.nodeValue,r)),e||ua(i,!0)}else e=Pl(e).createTextNode(o),e[an]=i,i.stateNode=e}return je(i),null;case 31:if(r=i.memoizedState,e===null||e.memoizedState!==null){if(o=Bs(i),r!==null){if(e===null){if(!o)throw Error(s(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[an]=i}else Ka(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;je(i),e=!1}else r=ru(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),e=!0;if(!e)return i.flags&256?(Wn(i),i):(Wn(i),null);if((i.flags&128)!==0)throw Error(s(558))}return je(i),null;case 13:if(o=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Bs(i),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=i.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[an]=i}else Ka(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;je(i),u=!1}else u=ru(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return i.flags&256?(Wn(i),i):(Wn(i),null)}return Wn(i),(i.flags&128)!==0?(i.lanes=r,i):(r=o!==null,e=e!==null&&e.memoizedState!==null,r&&(o=i.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),r!==e&&r&&(i.child.flags|=8192),yl(i,i.updateQueue),je(i),null);case 4:return Pt(),e===null&&xf(i.stateNode.containerInfo),je(i),null;case 10:return zi(i.type),je(i),null;case 19:if(nt(en),o=i.memoizedState,o===null)return je(i),null;if(u=(i.flags&128)!==0,d=o.rendering,d===null)if(u)no(o,!1);else{if(Je!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=ll(e),d!==null){for(i.flags|=128,no(o,!1),e=d.updateQueue,i.updateQueue=e,yl(i,e),i.subtreeFlags=0,e=r,r=i.child;r!==null;)up(r,e),r=r.sibling;return xt(en,en.current&1|2),ye&&Fi(i,o.treeForkCount),i.child}e=e.sibling}o.tail!==null&&A()>bl&&(i.flags|=128,u=!0,no(o,!1),i.lanes=4194304)}else{if(!u)if(e=ll(d),e!==null){if(i.flags|=128,u=!0,e=e.updateQueue,i.updateQueue=e,yl(i,e),no(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!ye)return je(i),null}else 2*A()-o.renderingStartTime>bl&&r!==536870912&&(i.flags|=128,u=!0,no(o,!1),i.lanes=4194304);o.isBackwards?(d.sibling=i.child,i.child=d):(e=o.last,e!==null?e.sibling=d:i.child=d,o.last=d)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=A(),e.sibling=null,r=en.current,xt(en,u?r&1|2:r&1),ye&&Fi(i,o.treeForkCount),e):(je(i),null);case 22:case 23:return Wn(i),xu(),o=i.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(r&536870912)!==0&&(i.flags&128)===0&&(je(i),i.subtreeFlags&6&&(i.flags|=8192)):je(i),r=i.updateQueue,r!==null&&yl(i,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==r&&(i.flags|=2048),e!==null&&nt($a),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),i.memoizedState.cache!==r&&(i.flags|=2048),zi(sn),je(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function bx(e,i){switch(au(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return zi(sn),Pt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return le(i),null;case 31:if(i.memoizedState!==null){if(Wn(i),i.alternate===null)throw Error(s(340));Ka()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(Wn(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(s(340));Ka()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return nt(en),null;case 4:return Pt(),null;case 10:return zi(i.type),null;case 22:case 23:return Wn(i),xu(),e!==null&&nt($a),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return zi(sn),null;case 25:return null;default:return null}}function zm(e,i){switch(au(i),i.tag){case 3:zi(sn),Pt();break;case 26:case 27:case 5:le(i);break;case 4:Pt();break;case 31:i.memoizedState!==null&&Wn(i);break;case 13:Wn(i);break;case 19:nt(en);break;case 10:zi(i.type);break;case 22:case 23:Wn(i),xu(),e!==null&&nt($a);break;case 24:zi(sn)}}function io(e,i){try{var r=i.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var u=o.next;r=u;do{if((r.tag&e)===e){o=void 0;var d=r.create,S=r.inst;o=d(),S.destroy=o}r=r.next}while(r!==u)}}catch(b){Pe(i,i.return,b)}}function _a(e,i,r){try{var o=i.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&e)===e){var S=o.inst,b=S.destroy;if(b!==void 0){S.destroy=void 0,u=i;var I=r,et=b;try{et()}catch(dt){Pe(u,I,dt)}}}o=o.next}while(o!==d)}}catch(dt){Pe(i,i.return,dt)}}function Bm(e){var i=e.updateQueue;if(i!==null){var r=e.stateNode;try{Cp(i,r)}catch(o){Pe(e,e.return,o)}}}function Im(e,i,r){r.props=as(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(o){Pe(e,i,o)}}function ao(e,i){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof r=="function"?e.refCleanup=r(o):r.current=o}}catch(u){Pe(e,i,u)}}function Ti(e,i){var r=e.ref,o=e.refCleanup;if(r!==null)if(typeof o=="function")try{o()}catch(u){Pe(e,i,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(u){Pe(e,i,u)}else r.current=null}function Hm(e){var i=e.type,r=e.memoizedProps,o=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":r.autoFocus&&o.focus();break t;case"img":r.src?o.src=r.src:r.srcSet&&(o.srcset=r.srcSet)}}catch(u){Pe(e,e.return,u)}}function Qu(e,i,r){try{var o=e.stateNode;jx(o,e.type,r,i),o[xn]=i}catch(u){Pe(e,e.return,u)}}function Gm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ta(e.type)||e.tag===4}function Ju(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Gm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ta(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $u(e,i,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,i):(i=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,i.appendChild(e),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=Li));else if(o!==4&&(o===27&&Ta(e.type)&&(r=e.stateNode,i=null),e=e.child,e!==null))for($u(e,i,r),e=e.sibling;e!==null;)$u(e,i,r),e=e.sibling}function Ml(e,i,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?r.insertBefore(e,i):r.appendChild(e);else if(o!==4&&(o===27&&Ta(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(Ml(e,i,r),e=e.sibling;e!==null;)Ml(e,i,r),e=e.sibling}function Vm(e){var i=e.stateNode,r=e.memoizedProps;try{for(var o=e.type,u=i.attributes;u.length;)i.removeAttributeNode(u[0]);Tn(i,o,r),i[an]=e,i[xn]=r}catch(d){Pe(e,e.return,d)}}var Vi=!1,ln=!1,tf=!1,Xm=typeof WeakSet=="function"?WeakSet:Set,_n=null;function Rx(e,i){if(e=e.containerInfo,Mf=Xl,e=ep(e),Yc(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{r.nodeType,d.nodeType}catch{r=null;break t}var S=0,b=-1,I=-1,et=0,dt=0,gt=e,at=null;e:for(;;){for(var ct;gt!==r||u!==0&&gt.nodeType!==3||(b=S+u),gt!==d||o!==0&&gt.nodeType!==3||(I=S+o),gt.nodeType===3&&(S+=gt.nodeValue.length),(ct=gt.firstChild)!==null;)at=gt,gt=ct;for(;;){if(gt===e)break e;if(at===r&&++et===u&&(b=S),at===d&&++dt===o&&(I=S),(ct=gt.nextSibling)!==null)break;gt=at,at=gt.parentNode}gt=ct}r=b===-1||I===-1?null:{start:b,end:I}}else r=null}r=r||{start:0,end:0}}else r=null;for(Ef={focusedElem:e,selectionRange:r},Xl=!1,_n=i;_n!==null;)if(i=_n,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,_n=e;else for(;_n!==null;){switch(i=_n,d=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(r=0;r<e.length;r++)u=e[r],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,r=i,u=d.memoizedProps,d=d.memoizedState,o=r.stateNode;try{var Wt=as(r.type,u);e=o.getSnapshotBeforeUpdate(Wt,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(ee){Pe(r,r.return,ee)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,r=e.nodeType,r===9)bf(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":bf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=i.sibling,e!==null){e.return=i.return,_n=e;break}_n=i.return}}function km(e,i,r){var o=r.flags;switch(r.tag){case 0:case 11:case 15:ki(e,r),o&4&&io(5,r);break;case 1:if(ki(e,r),o&4)if(e=r.stateNode,i===null)try{e.componentDidMount()}catch(S){Pe(r,r.return,S)}else{var u=as(r.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(u,i,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Pe(r,r.return,S)}}o&64&&Bm(r),o&512&&ao(r,r.return);break;case 3:if(ki(e,r),o&64&&(e=r.updateQueue,e!==null)){if(i=null,r.child!==null)switch(r.child.tag){case 27:case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}try{Cp(e,i)}catch(S){Pe(r,r.return,S)}}break;case 27:i===null&&o&4&&Vm(r);case 26:case 5:ki(e,r),i===null&&o&4&&Hm(r),o&512&&ao(r,r.return);break;case 12:ki(e,r);break;case 31:ki(e,r),o&4&&Ym(e,r);break;case 13:ki(e,r),o&4&&jm(e,r),o&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=Px.bind(null,r),nS(e,r))));break;case 22:if(o=r.memoizedState!==null||Vi,!o){i=i!==null&&i.memoizedState!==null||ln,u=Vi;var d=ln;Vi=o,(ln=i)&&!d?Wi(e,r,(r.subtreeFlags&8772)!==0):ki(e,r),Vi=u,ln=d}break;case 30:break;default:ki(e,r)}}function Wm(e){var i=e.alternate;i!==null&&(e.alternate=null,Wm(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&R(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ke=null,On=!1;function Xi(e,i,r){for(r=r.child;r!==null;)qm(e,i,r),r=r.sibling}function qm(e,i,r){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(vt,r)}catch{}switch(r.tag){case 26:ln||Ti(r,i),Xi(e,i,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:ln||Ti(r,i);var o=Ke,u=On;Ta(r.type)&&(Ke=r.stateNode,On=!1),Xi(e,i,r),po(r.stateNode),Ke=o,On=u;break;case 5:ln||Ti(r,i);case 6:if(o=Ke,u=On,Ke=null,Xi(e,i,r),Ke=o,On=u,Ke!==null)if(On)try{(Ke.nodeType===9?Ke.body:Ke.nodeName==="HTML"?Ke.ownerDocument.body:Ke).removeChild(r.stateNode)}catch(d){Pe(r,i,d)}else try{Ke.removeChild(r.stateNode)}catch(d){Pe(r,i,d)}break;case 18:Ke!==null&&(On?(e=Ke,Bg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),sr(e)):Bg(Ke,r.stateNode));break;case 4:o=Ke,u=On,Ke=r.stateNode.containerInfo,On=!0,Xi(e,i,r),Ke=o,On=u;break;case 0:case 11:case 14:case 15:_a(2,r,i),ln||_a(4,r,i),Xi(e,i,r);break;case 1:ln||(Ti(r,i),o=r.stateNode,typeof o.componentWillUnmount=="function"&&Im(r,i,o)),Xi(e,i,r);break;case 21:Xi(e,i,r);break;case 22:ln=(o=ln)||r.memoizedState!==null,Xi(e,i,r),ln=o;break;default:Xi(e,i,r)}}function Ym(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{sr(e)}catch(r){Pe(i,i.return,r)}}}function jm(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{sr(e)}catch(r){Pe(i,i.return,r)}}function Cx(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Xm),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Xm),i;default:throw Error(s(435,e.tag))}}function El(e,i){var r=Cx(e);i.forEach(function(o){if(!r.has(o)){r.add(o);var u=zx.bind(null,e,o);o.then(u,u)}})}function Fn(e,i){var r=i.deletions;if(r!==null)for(var o=0;o<r.length;o++){var u=r[o],d=e,S=i,b=S;t:for(;b!==null;){switch(b.tag){case 27:if(Ta(b.type)){Ke=b.stateNode,On=!1;break t}break;case 5:Ke=b.stateNode,On=!1;break t;case 3:case 4:Ke=b.stateNode.containerInfo,On=!0;break t}b=b.return}if(Ke===null)throw Error(s(160));qm(d,S,u),Ke=null,On=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)Zm(i,e),i=i.sibling}var ui=null;function Zm(e,i){var r=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Fn(i,e),Pn(e),o&4&&(_a(3,e,e.return),io(3,e),_a(5,e,e.return));break;case 1:Fn(i,e),Pn(e),o&512&&(ln||r===null||Ti(r,r.return)),o&64&&Vi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?o:r.concat(o))));break;case 26:var u=ui;if(Fn(i,e),Pn(e),o&512&&(ln||r===null||Ti(r,r.return)),o&4){var d=r!==null?r.memoizedState:null;if(o=e.memoizedState,r===null)if(o===null)if(e.stateNode===null){t:{o=e.type,r=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Xa]||d[an]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Tn(d,o,r),d[an]=e,St(d),o=d;break t;case"link":var S=Zg("link","href",u).get(o+(r.href||""));if(S){for(var b=0;b<S.length;b++)if(d=S[b],d.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&d.getAttribute("rel")===(r.rel==null?null:r.rel)&&d.getAttribute("title")===(r.title==null?null:r.title)&&d.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){S.splice(b,1);break e}}d=u.createElement(o),Tn(d,o,r),u.head.appendChild(d);break;case"meta":if(S=Zg("meta","content",u).get(o+(r.content||""))){for(b=0;b<S.length;b++)if(d=S[b],d.getAttribute("content")===(r.content==null?null:""+r.content)&&d.getAttribute("name")===(r.name==null?null:r.name)&&d.getAttribute("property")===(r.property==null?null:r.property)&&d.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&d.getAttribute("charset")===(r.charSet==null?null:r.charSet)){S.splice(b,1);break e}}d=u.createElement(o),Tn(d,o,r),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[an]=e,St(d),o=d}e.stateNode=o}else Kg(u,e.type,e.stateNode);else e.stateNode=jg(u,o,e.memoizedProps);else d!==o?(d===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):d.count--,o===null?Kg(u,e.type,e.stateNode):jg(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Qu(e,e.memoizedProps,r.memoizedProps)}break;case 27:Fn(i,e),Pn(e),o&512&&(ln||r===null||Ti(r,r.return)),r!==null&&o&4&&Qu(e,e.memoizedProps,r.memoizedProps);break;case 5:if(Fn(i,e),Pn(e),o&512&&(ln||r===null||Ti(r,r.return)),e.flags&32){u=e.stateNode;try{Cs(u,"")}catch(Wt){Pe(e,e.return,Wt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Qu(e,u,r!==null?r.memoizedProps:u)),o&1024&&(tf=!0);break;case 6:if(Fn(i,e),Pn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,r=e.stateNode;try{r.nodeValue=o}catch(Wt){Pe(e,e.return,Wt)}}break;case 3:if(Il=null,u=ui,ui=zl(i.containerInfo),Fn(i,e),ui=u,Pn(e),o&4&&r!==null&&r.memoizedState.isDehydrated)try{sr(i.containerInfo)}catch(Wt){Pe(e,e.return,Wt)}tf&&(tf=!1,Km(e));break;case 4:o=ui,ui=zl(e.stateNode.containerInfo),Fn(i,e),Pn(e),ui=o;break;case 12:Fn(i,e),Pn(e);break;case 31:Fn(i,e),Pn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,El(e,o)));break;case 13:Fn(i,e),Pn(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Al=A()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,El(e,o)));break;case 22:u=e.memoizedState!==null;var I=r!==null&&r.memoizedState!==null,et=Vi,dt=ln;if(Vi=et||u,ln=dt||I,Fn(i,e),ln=dt,Vi=et,Pn(e),o&8192)t:for(i=e.stateNode,i._visibility=u?i._visibility&-2:i._visibility|1,u&&(r===null||I||Vi||ln||ss(e)),r=null,i=e;;){if(i.tag===5||i.tag===26){if(r===null){I=r=i;try{if(d=I.stateNode,u)S=d.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{b=I.stateNode;var gt=I.memoizedProps.style,at=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;b.style.display=at==null||typeof at=="boolean"?"":(""+at).trim()}}catch(Wt){Pe(I,I.return,Wt)}}}else if(i.tag===6){if(r===null){I=i;try{I.stateNode.nodeValue=u?"":I.memoizedProps}catch(Wt){Pe(I,I.return,Wt)}}}else if(i.tag===18){if(r===null){I=i;try{var ct=I.stateNode;u?Ig(ct,!0):Ig(I.stateNode,!1)}catch(Wt){Pe(I,I.return,Wt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;r===i&&(r=null),i=i.return}r===i&&(r=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=e.updateQueue,o!==null&&(r=o.retryQueue,r!==null&&(o.retryQueue=null,El(e,r))));break;case 19:Fn(i,e),Pn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,El(e,o)));break;case 30:break;case 21:break;default:Fn(i,e),Pn(e)}}function Pn(e){var i=e.flags;if(i&2){try{for(var r,o=e.return;o!==null;){if(Gm(o)){r=o;break}o=o.return}if(r==null)throw Error(s(160));switch(r.tag){case 27:var u=r.stateNode,d=Ju(e);Ml(e,d,u);break;case 5:var S=r.stateNode;r.flags&32&&(Cs(S,""),r.flags&=-33);var b=Ju(e);Ml(e,b,S);break;case 3:case 4:var I=r.stateNode.containerInfo,et=Ju(e);$u(e,et,I);break;default:throw Error(s(161))}}catch(dt){Pe(e,e.return,dt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function Km(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;Km(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function ki(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)km(e,i.alternate,i),i=i.sibling}function ss(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:_a(4,i,i.return),ss(i);break;case 1:Ti(i,i.return);var r=i.stateNode;typeof r.componentWillUnmount=="function"&&Im(i,i.return,r),ss(i);break;case 27:po(i.stateNode);case 26:case 5:Ti(i,i.return),ss(i);break;case 22:i.memoizedState===null&&ss(i);break;case 30:ss(i);break;default:ss(i)}e=e.sibling}}function Wi(e,i,r){for(r=r&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,u=e,d=i,S=d.flags;switch(d.tag){case 0:case 11:case 15:Wi(u,d,r),io(4,d);break;case 1:if(Wi(u,d,r),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(et){Pe(o,o.return,et)}if(o=d,u=o.updateQueue,u!==null){var b=o.stateNode;try{var I=u.shared.hiddenCallbacks;if(I!==null)for(u.shared.hiddenCallbacks=null,u=0;u<I.length;u++)Rp(I[u],b)}catch(et){Pe(o,o.return,et)}}r&&S&64&&Bm(d),ao(d,d.return);break;case 27:Vm(d);case 26:case 5:Wi(u,d,r),r&&o===null&&S&4&&Hm(d),ao(d,d.return);break;case 12:Wi(u,d,r);break;case 31:Wi(u,d,r),r&&S&4&&Ym(u,d);break;case 13:Wi(u,d,r),r&&S&4&&jm(u,d);break;case 22:d.memoizedState===null&&Wi(u,d,r),ao(d,d.return);break;case 30:break;default:Wi(u,d,r)}i=i.sibling}}function ef(e,i){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&kr(r))}function nf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&kr(e))}function fi(e,i,r,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Qm(e,i,r,o),i=i.sibling}function Qm(e,i,r,o){var u=i.flags;switch(i.tag){case 0:case 11:case 15:fi(e,i,r,o),u&2048&&io(9,i);break;case 1:fi(e,i,r,o);break;case 3:fi(e,i,r,o),u&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&kr(e)));break;case 12:if(u&2048){fi(e,i,r,o),e=i.stateNode;try{var d=i.memoizedProps,S=d.id,b=d.onPostCommit;typeof b=="function"&&b(S,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){Pe(i,i.return,I)}}else fi(e,i,r,o);break;case 31:fi(e,i,r,o);break;case 13:fi(e,i,r,o);break;case 23:break;case 22:d=i.stateNode,S=i.alternate,i.memoizedState!==null?d._visibility&2?fi(e,i,r,o):so(e,i):d._visibility&2?fi(e,i,r,o):(d._visibility|=2,js(e,i,r,o,(i.subtreeFlags&10256)!==0||!1)),u&2048&&ef(S,i);break;case 24:fi(e,i,r,o),u&2048&&nf(i.alternate,i);break;default:fi(e,i,r,o)}}function js(e,i,r,o,u){for(u=u&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var d=e,S=i,b=r,I=o,et=S.flags;switch(S.tag){case 0:case 11:case 15:js(d,S,b,I,u),io(8,S);break;case 23:break;case 22:var dt=S.stateNode;S.memoizedState!==null?dt._visibility&2?js(d,S,b,I,u):so(d,S):(dt._visibility|=2,js(d,S,b,I,u)),u&&et&2048&&ef(S.alternate,S);break;case 24:js(d,S,b,I,u),u&&et&2048&&nf(S.alternate,S);break;default:js(d,S,b,I,u)}i=i.sibling}}function so(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var r=e,o=i,u=o.flags;switch(o.tag){case 22:so(r,o),u&2048&&ef(o.alternate,o);break;case 24:so(r,o),u&2048&&nf(o.alternate,o);break;default:so(r,o)}i=i.sibling}}var ro=8192;function Zs(e,i,r){if(e.subtreeFlags&ro)for(e=e.child;e!==null;)Jm(e,i,r),e=e.sibling}function Jm(e,i,r){switch(e.tag){case 26:Zs(e,i,r),e.flags&ro&&e.memoizedState!==null&&pS(r,ui,e.memoizedState,e.memoizedProps);break;case 5:Zs(e,i,r);break;case 3:case 4:var o=ui;ui=zl(e.stateNode.containerInfo),Zs(e,i,r),ui=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=ro,ro=16777216,Zs(e,i,r),ro=o):Zs(e,i,r));break;default:Zs(e,i,r)}}function $m(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function oo(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var o=i[r];_n=o,eg(o,e)}$m(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)tg(e),e=e.sibling}function tg(e){switch(e.tag){case 0:case 11:case 15:oo(e),e.flags&2048&&_a(9,e,e.return);break;case 3:oo(e);break;case 12:oo(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,Tl(e)):oo(e);break;default:oo(e)}}function Tl(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var o=i[r];_n=o,eg(o,e)}$m(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:_a(8,i,i.return),Tl(i);break;case 22:r=i.stateNode,r._visibility&2&&(r._visibility&=-3,Tl(i));break;default:Tl(i)}e=e.sibling}}function eg(e,i){for(;_n!==null;){var r=_n;switch(r.tag){case 0:case 11:case 15:_a(8,r,i);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var o=r.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:kr(r.memoizedState.cache)}if(o=r.child,o!==null)o.return=r,_n=o;else t:for(r=e;_n!==null;){o=_n;var u=o.sibling,d=o.return;if(Wm(o),o===r){_n=null;break t}if(u!==null){u.return=d,_n=u;break t}_n=d}}}var wx={getCacheForType:function(e){var i=Mn(sn),r=i.data.get(e);return r===void 0&&(r=e(),i.data.set(e,r)),r},cacheSignal:function(){return Mn(sn).controller.signal}},Dx=typeof WeakMap=="function"?WeakMap:Map,De=0,Xe=null,me=null,ve=0,Fe=0,qn=null,va=!1,Ks=!1,af=!1,qi=0,Je=0,xa=0,rs=0,sf=0,Yn=0,Qs=0,lo=null,zn=null,rf=!1,Al=0,ng=0,bl=1/0,Rl=null,Sa=null,hn=0,ya=null,Js=null,Yi=0,of=0,lf=null,ig=null,co=0,cf=null;function jn(){return(De&2)!==0&&ve!==0?ve&-ve:z.T!==null?mf():Va()}function ag(){if(Yn===0)if((ve&536870912)===0||ye){var e=Dt;Dt<<=1,(Dt&3932160)===0&&(Dt=262144),Yn=e}else Yn=536870912;return e=kn.current,e!==null&&(e.flags|=32),Yn}function Bn(e,i,r){(e===Xe&&(Fe===2||Fe===9)||e.cancelPendingCommit!==null)&&($s(e,0),Ma(e,ve,Yn,!1)),wn(e,r),((De&2)===0||e!==Xe)&&(e===Xe&&((De&2)===0&&(rs|=r),Je===4&&Ma(e,ve,Yn,!1)),Ai(e))}function sg(e,i,r){if((De&6)!==0)throw Error(s(327));var o=!r&&(i&127)===0&&(i&e.expiredLanes)===0||Vt(e,i),u=o?Nx(e,i):ff(e,i,!0),d=o;do{if(u===0){Ks&&!o&&Ma(e,i,0,!1);break}else{if(r=e.current.alternate,d&&!Ux(r)){u=ff(e,i,!1),d=!1;continue}if(u===2){if(d=i,e.errorRecoveryDisabledLanes&d)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){i=S;t:{var b=e;u=lo;var I=b.current.memoizedState.isDehydrated;if(I&&($s(b,S).flags|=256),S=ff(b,S,!1),S!==2){if(af&&!I){b.errorRecoveryDisabledLanes|=d,rs|=d,u=4;break t}d=zn,zn=u,d!==null&&(zn===null?zn=d:zn.push.apply(zn,d))}u=S}if(d=!1,u!==2)continue}}if(u===1){$s(e,0),Ma(e,i,0,!0);break}t:{switch(o=e,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:Ma(o,i,Yn,!va);break t;case 2:zn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(u=Al+300-A(),10<u)){if(Ma(o,i,Yn,!va),_t(o,0,!0)!==0)break t;Yi=i,o.timeoutHandle=Pg(rg.bind(null,o,r,zn,Rl,rf,i,Yn,rs,Qs,va,d,"Throttled",-0,0),u);break t}rg(o,r,zn,Rl,rf,i,Yn,rs,Qs,va,d,null,-0,0)}}break}while(!0);Ai(e)}function rg(e,i,r,o,u,d,S,b,I,et,dt,gt,at,ct){if(e.timeoutHandle=-1,gt=i.subtreeFlags,gt&8192||(gt&16785408)===16785408){gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Li},Jm(i,d,gt);var Wt=(d&62914560)===d?Al-A():(d&4194048)===d?ng-A():0;if(Wt=mS(gt,Wt),Wt!==null){Yi=d,e.cancelPendingCommit=Wt(pg.bind(null,e,i,d,r,o,u,S,b,I,dt,gt,null,at,ct)),Ma(e,d,S,!et);return}}pg(e,i,d,r,o,u,S,b,I)}function Ux(e){for(var i=e;;){var r=i.tag;if((r===0||r===11||r===15)&&i.flags&16384&&(r=i.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var o=0;o<r.length;o++){var u=r[o],d=u.getSnapshot;u=u.value;try{if(!Vn(d(),u))return!1}catch{return!1}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ma(e,i,r,o){i&=~sf,i&=~rs,e.suspendedLanes|=i,e.pingedLanes&=~i,o&&(e.warmLanes|=i),o=e.expirationTimes;for(var u=i;0<u;){var d=31-Ut(u),S=1<<d;o[d]=-1,u&=~S}r!==0&&Dr(e,r,i)}function Cl(){return(De&6)===0?(uo(0),!1):!0}function uf(){if(me!==null){if(Fe===0)var e=me.return;else e=me,Pi=Qa=null,Au(e),Xs=null,qr=0,e=me;for(;e!==null;)zm(e.alternate,e),e=e.return;me=null}}function $s(e,i){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,Qx(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),Yi=0,uf(),Xe=e,me=r=Oi(e.current,null),ve=i,Fe=0,qn=null,va=!1,Ks=Vt(e,i),af=!1,Qs=Yn=sf=rs=xa=Je=0,zn=lo=null,rf=!1,(i&8)!==0&&(i|=i&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=i;0<o;){var u=31-Ut(o),d=1<<u;i|=e[u],o&=~d}return qi=i,Zo(),r}function og(e,i){ce=null,z.H=to,i===Vs||i===il?(i=Ep(),Fe=3):i===du?(i=Ep(),Fe=4):Fe=i===Gu?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,qn=i,me===null&&(Je=1,_l(e,ei(i,e.current)))}function lg(){var e=kn.current;return e===null?!0:(ve&4194048)===ve?si===null:(ve&62914560)===ve||(ve&536870912)!==0?e===si:!1}function cg(){var e=z.H;return z.H=to,e===null?to:e}function ug(){var e=z.A;return z.A=wx,e}function wl(){Je=4,va||(ve&4194048)!==ve&&kn.current!==null||(Ks=!0),(xa&134217727)===0&&(rs&134217727)===0||Xe===null||Ma(Xe,ve,Yn,!1)}function ff(e,i,r){var o=De;De|=2;var u=cg(),d=ug();(Xe!==e||ve!==i)&&(Rl=null,$s(e,i)),i=!1;var S=Je;t:do try{if(Fe!==0&&me!==null){var b=me,I=qn;switch(Fe){case 8:uf(),S=6;break t;case 3:case 2:case 9:case 6:kn.current===null&&(i=!0);var et=Fe;if(Fe=0,qn=null,tr(e,b,I,et),r&&Ks){S=0;break t}break;default:et=Fe,Fe=0,qn=null,tr(e,b,I,et)}}Lx(),S=Je;break}catch(dt){og(e,dt)}while(!0);return i&&e.shellSuspendCounter++,Pi=Qa=null,De=o,z.H=u,z.A=d,me===null&&(Xe=null,ve=0,Zo()),S}function Lx(){for(;me!==null;)fg(me)}function Nx(e,i){var r=De;De|=2;var o=cg(),u=ug();Xe!==e||ve!==i?(Rl=null,bl=A()+500,$s(e,i)):Ks=Vt(e,i);t:do try{if(Fe!==0&&me!==null){i=me;var d=qn;e:switch(Fe){case 1:Fe=0,qn=null,tr(e,i,d,1);break;case 2:case 9:if(yp(d)){Fe=0,qn=null,hg(i);break}i=function(){Fe!==2&&Fe!==9||Xe!==e||(Fe=7),Ai(e)},d.then(i,i);break t;case 3:Fe=7;break t;case 4:Fe=5;break t;case 7:yp(d)?(Fe=0,qn=null,hg(i)):(Fe=0,qn=null,tr(e,i,d,7));break;case 5:var S=null;switch(me.tag){case 26:S=me.memoizedState;case 5:case 27:var b=me;if(S?Qg(S):b.stateNode.complete){Fe=0,qn=null;var I=b.sibling;if(I!==null)me=I;else{var et=b.return;et!==null?(me=et,Dl(et)):me=null}break e}}Fe=0,qn=null,tr(e,i,d,5);break;case 6:Fe=0,qn=null,tr(e,i,d,6);break;case 8:uf(),Je=6;break t;default:throw Error(s(462))}}Ox();break}catch(dt){og(e,dt)}while(!0);return Pi=Qa=null,z.H=o,z.A=u,De=r,me!==null?0:(Xe=null,ve=0,Zo(),Je)}function Ox(){for(;me!==null&&!ke();)fg(me)}function fg(e){var i=Fm(e.alternate,e,qi);e.memoizedProps=e.pendingProps,i===null?Dl(e):me=i}function hg(e){var i=e,r=i.alternate;switch(i.tag){case 15:case 0:i=wm(r,i,i.pendingProps,i.type,void 0,ve);break;case 11:i=wm(r,i,i.pendingProps,i.type.render,i.ref,ve);break;case 5:Au(i);default:zm(r,i),i=me=up(i,qi),i=Fm(r,i,qi)}e.memoizedProps=e.pendingProps,i===null?Dl(e):me=i}function tr(e,i,r,o){Pi=Qa=null,Au(i),Xs=null,qr=0;var u=i.return;try{if(Mx(e,u,i,r,ve)){Je=1,_l(e,ei(r,e.current)),me=null;return}}catch(d){if(u!==null)throw me=u,d;Je=1,_l(e,ei(r,e.current)),me=null;return}i.flags&32768?(ye||o===1?e=!0:Ks||(ve&536870912)!==0?e=!1:(va=e=!0,(o===2||o===9||o===3||o===6)&&(o=kn.current,o!==null&&o.tag===13&&(o.flags|=16384))),dg(i,e)):Dl(i)}function Dl(e){var i=e;do{if((i.flags&32768)!==0){dg(i,va);return}e=i.return;var r=Ax(i.alternate,i,qi);if(r!==null){me=r;return}if(i=i.sibling,i!==null){me=i;return}me=i=e}while(i!==null);Je===0&&(Je=5)}function dg(e,i){do{var r=bx(e.alternate,e);if(r!==null){r.flags&=32767,me=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!i&&(e=e.sibling,e!==null)){me=e;return}me=e=r}while(e!==null);Je=6,me=null}function pg(e,i,r,o,u,d,S,b,I){e.cancelPendingCommit=null;do Ul();while(hn!==0);if((De&6)!==0)throw Error(s(327));if(i!==null){if(i===e.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=Jc,$n(e,r,d,S,b,I),e===Xe&&(me=Xe=null,ve=0),Js=i,ya=e,Yi=r,of=d,lf=u,ig=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Bx(ht,function(){return xg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=z.T,z.T=null,u=V.p,V.p=2,S=De,De|=4;try{Rx(e,i,r)}finally{De=S,V.p=u,z.T=o}}hn=1,mg(),gg(),_g()}}function mg(){if(hn===1){hn=0;var e=ya,i=Js,r=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||r){r=z.T,z.T=null;var o=V.p;V.p=2;var u=De;De|=4;try{Zm(i,e);var d=Ef,S=ep(e.containerInfo),b=d.focusedElem,I=d.selectionRange;if(S!==b&&b&&b.ownerDocument&&tp(b.ownerDocument.documentElement,b)){if(I!==null&&Yc(b)){var et=I.start,dt=I.end;if(dt===void 0&&(dt=et),"selectionStart"in b)b.selectionStart=et,b.selectionEnd=Math.min(dt,b.value.length);else{var gt=b.ownerDocument||document,at=gt&&gt.defaultView||window;if(at.getSelection){var ct=at.getSelection(),Wt=b.textContent.length,ee=Math.min(I.start,Wt),Ie=I.end===void 0?ee:Math.min(I.end,Wt);!ct.extend&&ee>Ie&&(S=Ie,Ie=ee,ee=S);var j=$d(b,ee),k=$d(b,Ie);if(j&&k&&(ct.rangeCount!==1||ct.anchorNode!==j.node||ct.anchorOffset!==j.offset||ct.focusNode!==k.node||ct.focusOffset!==k.offset)){var tt=gt.createRange();tt.setStart(j.node,j.offset),ct.removeAllRanges(),ee>Ie?(ct.addRange(tt),ct.extend(k.node,k.offset)):(tt.setEnd(k.node,k.offset),ct.addRange(tt))}}}}for(gt=[],ct=b;ct=ct.parentNode;)ct.nodeType===1&&gt.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<gt.length;b++){var mt=gt[b];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}Xl=!!Mf,Ef=Mf=null}finally{De=u,V.p=o,z.T=r}}e.current=i,hn=2}}function gg(){if(hn===2){hn=0;var e=ya,i=Js,r=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||r){r=z.T,z.T=null;var o=V.p;V.p=2;var u=De;De|=4;try{km(e,i.alternate,i)}finally{De=u,V.p=o,z.T=r}}hn=3}}function _g(){if(hn===4||hn===3){hn=0,L();var e=ya,i=Js,r=Yi,o=ig;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?hn=5:(hn=0,Js=ya=null,vg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Sa=null),bs(r),i=i.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(vt,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=z.T,u=V.p,V.p=2,z.T=null;try{for(var d=e.onRecoverableError,S=0;S<o.length;S++){var b=o[S];d(b.value,{componentStack:b.stack})}}finally{z.T=i,V.p=u}}(Yi&3)!==0&&Ul(),Ai(e),u=e.pendingLanes,(r&261930)!==0&&(u&42)!==0?e===cf?co++:(co=0,cf=e):co=0,uo(0)}}function vg(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,kr(i)))}function Ul(){return mg(),gg(),_g(),xg()}function xg(){if(hn!==5)return!1;var e=ya,i=of;of=0;var r=bs(Yi),o=z.T,u=V.p;try{V.p=32>r?32:r,z.T=null,r=lf,lf=null;var d=ya,S=Yi;if(hn=0,Js=ya=null,Yi=0,(De&6)!==0)throw Error(s(331));var b=De;if(De|=4,tg(d.current),Qm(d,d.current,S,r),De=b,uo(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(vt,d)}catch{}return!0}finally{V.p=u,z.T=o,vg(e,i)}}function Sg(e,i,r){i=ei(r,i),i=Hu(e.stateNode,i,2),e=pa(e,i,2),e!==null&&(wn(e,2),Ai(e))}function Pe(e,i,r){if(e.tag===3)Sg(e,e,r);else for(;i!==null;){if(i.tag===3){Sg(i,e,r);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Sa===null||!Sa.has(o))){e=ei(r,e),r=ym(2),o=pa(i,r,2),o!==null&&(Mm(r,o,i,e),wn(o,2),Ai(o));break}}i=i.return}}function hf(e,i,r){var o=e.pingCache;if(o===null){o=e.pingCache=new Dx;var u=new Set;o.set(i,u)}else u=o.get(i),u===void 0&&(u=new Set,o.set(i,u));u.has(r)||(af=!0,u.add(r),e=Fx.bind(null,e,i,r),i.then(e,e))}function Fx(e,i,r){var o=e.pingCache;o!==null&&o.delete(i),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,Xe===e&&(ve&r)===r&&(Je===4||Je===3&&(ve&62914560)===ve&&300>A()-Al?(De&2)===0&&$s(e,0):sf|=r,Qs===ve&&(Qs=0)),Ai(e)}function yg(e,i){i===0&&(i=Oe()),e=ja(e,i),e!==null&&(wn(e,i),Ai(e))}function Px(e){var i=e.memoizedState,r=0;i!==null&&(r=i.retryLane),yg(e,r)}function zx(e,i){var r=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(r=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(i),yg(e,r)}function Bx(e,i){return ae(e,i)}var Ll=null,er=null,df=!1,Nl=!1,pf=!1,Ea=0;function Ai(e){e!==er&&e.next===null&&(er===null?Ll=er=e:er=er.next=e),Nl=!0,df||(df=!0,Hx())}function uo(e,i){if(!pf&&Nl){pf=!0;do for(var r=!1,o=Ll;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var S=o.suspendedLanes,b=o.pingedLanes;d=(1<<31-Ut(42|e)+1)-1,d&=u&~(S&~b),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(r=!0,Ag(o,d))}else d=ve,d=_t(o,o===Xe?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Vt(o,d)||(r=!0,Ag(o,d));o=o.next}while(r);pf=!1}}function Ix(){Mg()}function Mg(){Nl=df=!1;var e=0;Ea!==0&&Kx()&&(e=Ea);for(var i=A(),r=null,o=Ll;o!==null;){var u=o.next,d=Eg(o,i);d===0?(o.next=null,r===null?Ll=u:r.next=u,u===null&&(er=r)):(r=o,(e!==0||(d&3)!==0)&&(Nl=!0)),o=u}hn!==0&&hn!==5||uo(e),Ea!==0&&(Ea=0)}function Eg(e,i){for(var r=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var S=31-Ut(d),b=1<<S,I=u[S];I===-1?((b&r)===0||(b&o)!==0)&&(u[S]=re(b,i)):I<=i&&(e.expiredLanes|=b),d&=~b}if(i=Xe,r=ve,r=_t(e,e===i?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,r===0||e===i&&(Fe===2||Fe===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&qe(o),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||Vt(e,r)){if(i=r&-r,i===e.callbackPriority)return i;switch(o!==null&&qe(o),bs(r)){case 2:case 8:r=Mt;break;case 32:r=ht;break;case 268435456:r=Rt;break;default:r=ht}return o=Tg.bind(null,e),r=ae(r,o),e.callbackPriority=i,e.callbackNode=r,i}return o!==null&&o!==null&&qe(o),e.callbackPriority=2,e.callbackNode=null,2}function Tg(e,i){if(hn!==0&&hn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(Ul()&&e.callbackNode!==r)return null;var o=ve;return o=_t(e,e===Xe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(sg(e,o,i),Eg(e,A()),e.callbackNode!=null&&e.callbackNode===r?Tg.bind(null,e):null)}function Ag(e,i){if(Ul())return null;sg(e,i,!0)}function Hx(){Jx(function(){(De&6)!==0?ae(pt,Ix):Mg()})}function mf(){if(Ea===0){var e=Hs;e===0&&(e=Tt,Tt<<=1,(Tt&261888)===0&&(Tt=256)),Ea=e}return Ea}function bg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Go(""+e)}function Rg(e,i){var r=i.ownerDocument.createElement("input");return r.name=i.name,r.value=i.value,e.id&&r.setAttribute("form",e.id),i.parentNode.insertBefore(r,i),e=new FormData(e),r.parentNode.removeChild(r),e}function Gx(e,i,r,o,u){if(i==="submit"&&r&&r.stateNode===u){var d=bg((u[xn]||null).action),S=o.submitter;S&&(i=(i=S[xn]||null)?bg(i.formAction):S.getAttribute("formAction"),i!==null&&(d=i,S=null));var b=new Wo("action","action",null,o,u);e.push({event:b,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ea!==0){var I=S?Rg(u,S):new FormData(u);Ou(r,{pending:!0,data:I,method:u.method,action:d},null,I)}}else typeof d=="function"&&(b.preventDefault(),I=S?Rg(u,S):new FormData(u),Ou(r,{pending:!0,data:I,method:u.method,action:d},d,I))},currentTarget:u}]})}}for(var gf=0;gf<Qc.length;gf++){var _f=Qc[gf],Vx=_f.toLowerCase(),Xx=_f[0].toUpperCase()+_f.slice(1);ci(Vx,"on"+Xx)}ci(ap,"onAnimationEnd"),ci(sp,"onAnimationIteration"),ci(rp,"onAnimationStart"),ci("dblclick","onDoubleClick"),ci("focusin","onFocus"),ci("focusout","onBlur"),ci(sx,"onTransitionRun"),ci(rx,"onTransitionStart"),ci(ox,"onTransitionCancel"),ci(op,"onTransitionEnd"),Qt("onMouseEnter",["mouseout","mouseover"]),Qt("onMouseLeave",["mouseout","mouseover"]),Qt("onPointerEnter",["pointerout","pointerover"]),Qt("onPointerLeave",["pointerout","pointerover"]),zt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),zt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),zt("onBeforeInput",["compositionend","keypress","textInput","paste"]),zt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),zt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),zt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fo));function Cg(e,i){i=(i&4)!==0;for(var r=0;r<e.length;r++){var o=e[r],u=o.event;o=o.listeners;t:{var d=void 0;if(i)for(var S=o.length-1;0<=S;S--){var b=o[S],I=b.instance,et=b.currentTarget;if(b=b.listener,I!==d&&u.isPropagationStopped())break t;d=b,u.currentTarget=et;try{d(u)}catch(dt){jo(dt)}u.currentTarget=null,d=I}else for(S=0;S<o.length;S++){if(b=o[S],I=b.instance,et=b.currentTarget,b=b.listener,I!==d&&u.isPropagationStopped())break t;d=b,u.currentTarget=et;try{d(u)}catch(dt){jo(dt)}u.currentTarget=null,d=I}}}}function ge(e,i){var r=i[Lr];r===void 0&&(r=i[Lr]=new Set);var o=e+"__bubble";r.has(o)||(wg(i,e,2,!1),r.add(o))}function vf(e,i,r){var o=0;i&&(o|=4),wg(r,e,o,i)}var Ol="_reactListening"+Math.random().toString(36).slice(2);function xf(e){if(!e[Ol]){e[Ol]=!0,Ot.forEach(function(r){r!=="selectionchange"&&(kx.has(r)||vf(r,!1,e),vf(r,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[Ol]||(i[Ol]=!0,vf("selectionchange",!1,i))}}function wg(e,i,r,o){switch(a0(i)){case 2:var u=vS;break;case 8:u=xS;break;default:u=Of}r=u.bind(null,i,r,e),u=void 0,!Bc||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(i,r,{capture:!0,passive:u}):e.addEventListener(i,r,!0):u!==void 0?e.addEventListener(i,r,{passive:u}):e.addEventListener(i,r,!1)}function Sf(e,i,r,o,u){var d=o;if((i&1)===0&&(i&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var b=o.stateNode.containerInfo;if(b===u)break;if(S===4)for(S=o.return;S!==null;){var I=S.tag;if((I===3||I===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;b!==null;){if(S=Y(b),S===null)return;if(I=S.tag,I===5||I===6||I===26||I===27){o=d=S;continue t}b=b.parentNode}}o=o.return}Od(function(){var et=d,dt=Pc(r),gt=[];t:{var at=lp.get(e);if(at!==void 0){var ct=Wo,Wt=e;switch(e){case"keypress":if(Xo(r)===0)break t;case"keydown":case"keyup":ct=zv;break;case"focusin":Wt="focus",ct=Vc;break;case"focusout":Wt="blur",ct=Vc;break;case"beforeblur":case"afterblur":ct=Vc;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=zd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=Av;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=Hv;break;case ap:case sp:case rp:ct=Cv;break;case op:ct=Vv;break;case"scroll":case"scrollend":ct=Ev;break;case"wheel":ct=kv;break;case"copy":case"cut":case"paste":ct=Dv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=Id;break;case"toggle":case"beforetoggle":ct=qv}var ee=(i&4)!==0,Ie=!ee&&(e==="scroll"||e==="scrollend"),j=ee?at!==null?at+"Capture":null:at;ee=[];for(var k=et,tt;k!==null;){var mt=k;if(tt=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||tt===null||j===null||(mt=Nr(k,j),mt!=null&&ee.push(ho(k,mt,tt))),Ie)break;k=k.return}0<ee.length&&(at=new ct(at,Wt,null,r,dt),gt.push({event:at,listeners:ee}))}}if((i&7)===0){t:{if(at=e==="mouseover"||e==="pointerover",ct=e==="mouseout"||e==="pointerout",at&&r!==Fc&&(Wt=r.relatedTarget||r.fromElement)&&(Y(Wt)||Wt[ra]))break t;if((ct||at)&&(at=dt.window===dt?dt:(at=dt.ownerDocument)?at.defaultView||at.parentWindow:window,ct?(Wt=r.relatedTarget||r.toElement,ct=et,Wt=Wt?Y(Wt):null,Wt!==null&&(Ie=c(Wt),ee=Wt.tag,Wt!==Ie||ee!==5&&ee!==27&&ee!==6)&&(Wt=null)):(ct=null,Wt=et),ct!==Wt)){if(ee=zd,mt="onMouseLeave",j="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(ee=Id,mt="onPointerLeave",j="onPointerEnter",k="pointer"),Ie=ct==null?at:ot(ct),tt=Wt==null?at:ot(Wt),at=new ee(mt,k+"leave",ct,r,dt),at.target=Ie,at.relatedTarget=tt,mt=null,Y(dt)===et&&(ee=new ee(j,k+"enter",Wt,r,dt),ee.target=tt,ee.relatedTarget=Ie,mt=ee),Ie=mt,ct&&Wt)e:{for(ee=Wx,j=ct,k=Wt,tt=0,mt=j;mt;mt=ee(mt))tt++;mt=0;for(var $t=k;$t;$t=ee($t))mt++;for(;0<tt-mt;)j=ee(j),tt--;for(;0<mt-tt;)k=ee(k),mt--;for(;tt--;){if(j===k||k!==null&&j===k.alternate){ee=j;break e}j=ee(j),k=ee(k)}ee=null}else ee=null;ct!==null&&Dg(gt,at,ct,ee,!1),Wt!==null&&Ie!==null&&Dg(gt,Ie,Wt,ee,!0)}}t:{if(at=et?ot(et):window,ct=at.nodeName&&at.nodeName.toLowerCase(),ct==="select"||ct==="input"&&at.type==="file")var Re=Yd;else if(Wd(at))if(jd)Re=nx;else{Re=tx;var Zt=$v}else ct=at.nodeName,!ct||ct.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?et&&Oc(et.elementType)&&(Re=Yd):Re=ex;if(Re&&(Re=Re(e,et))){qd(gt,Re,r,dt);break t}Zt&&Zt(e,at,et),e==="focusout"&&et&&at.type==="number"&&et.memoizedProps.value!=null&&fn(at,"number",at.value)}switch(Zt=et?ot(et):window,e){case"focusin":(Wd(Zt)||Zt.contentEditable==="true")&&(Ls=Zt,jc=et,Gr=null);break;case"focusout":Gr=jc=Ls=null;break;case"mousedown":Zc=!0;break;case"contextmenu":case"mouseup":case"dragend":Zc=!1,np(gt,r,dt);break;case"selectionchange":if(ax)break;case"keydown":case"keyup":np(gt,r,dt)}var ue;if(kc)t:{switch(e){case"compositionstart":var xe="onCompositionStart";break t;case"compositionend":xe="onCompositionEnd";break t;case"compositionupdate":xe="onCompositionUpdate";break t}xe=void 0}else Us?Xd(e,r)&&(xe="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(xe="onCompositionStart");xe&&(Hd&&r.locale!=="ko"&&(Us||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&Us&&(ue=Fd()):(oa=dt,Ic="value"in oa?oa.value:oa.textContent,Us=!0)),Zt=Fl(et,xe),0<Zt.length&&(xe=new Bd(xe,e,null,r,dt),gt.push({event:xe,listeners:Zt}),ue?xe.data=ue:(ue=kd(r),ue!==null&&(xe.data=ue)))),(ue=jv?Zv(e,r):Kv(e,r))&&(xe=Fl(et,"onBeforeInput"),0<xe.length&&(Zt=new Bd("onBeforeInput","beforeinput",null,r,dt),gt.push({event:Zt,listeners:xe}),Zt.data=ue)),Gx(gt,e,et,r,dt)}Cg(gt,i)})}function ho(e,i,r){return{instance:e,listener:i,currentTarget:r}}function Fl(e,i){for(var r=i+"Capture",o=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Nr(e,r),u!=null&&o.unshift(ho(e,u,d)),u=Nr(e,i),u!=null&&o.push(ho(e,u,d))),e.tag===3)return o;e=e.return}return[]}function Wx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Dg(e,i,r,o,u){for(var d=i._reactName,S=[];r!==null&&r!==o;){var b=r,I=b.alternate,et=b.stateNode;if(b=b.tag,I!==null&&I===o)break;b!==5&&b!==26&&b!==27||et===null||(I=et,u?(et=Nr(r,d),et!=null&&S.unshift(ho(r,et,I))):u||(et=Nr(r,d),et!=null&&S.push(ho(r,et,I)))),r=r.return}S.length!==0&&e.push({event:i,listeners:S})}var qx=/\r\n?/g,Yx=/\u0000|\uFFFD/g;function Ug(e){return(typeof e=="string"?e:""+e).replace(qx,`
`).replace(Yx,"")}function Lg(e,i){return i=Ug(i),Ug(e)===i}function Be(e,i,r,o,u,d){switch(r){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||Cs(e,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&Cs(e,""+o);break;case"className":Le(e,"class",o);break;case"tabIndex":Le(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Le(e,r,o);break;case"style":Ld(e,o,d);break;case"data":if(i!=="object"){Le(e,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||r!=="href")){e.removeAttribute(r);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(r);break}o=Go(""+o),e.setAttribute(r,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(r==="formAction"?(i!=="input"&&Be(e,i,"name",u.name,u,null),Be(e,i,"formEncType",u.formEncType,u,null),Be(e,i,"formMethod",u.formMethod,u,null),Be(e,i,"formTarget",u.formTarget,u,null)):(Be(e,i,"encType",u.encType,u,null),Be(e,i,"method",u.method,u,null),Be(e,i,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(r);break}o=Go(""+o),e.setAttribute(r,o);break;case"onClick":o!=null&&(e.onclick=Li);break;case"onScroll":o!=null&&ge("scroll",e);break;case"onScrollEnd":o!=null&&ge("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(r=o.__html,r!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=r}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}r=Go(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,""+o):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":o===!0?e.setAttribute(r,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,o):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(r,o):e.removeAttribute(r);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(r):e.setAttribute(r,o);break;case"popover":ge("beforetoggle",e),ge("toggle",e),Ve(e,"popover",o);break;case"xlinkActuate":pe(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":pe(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":pe(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":pe(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":pe(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":pe(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":pe(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":pe(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":pe(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ve(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=yv.get(r)||r,Ve(e,r,o))}}function yf(e,i,r,o,u,d){switch(r){case"style":Ld(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(r=o.__html,r!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=r}}break;case"children":typeof o=="string"?Cs(e,o):(typeof o=="number"||typeof o=="bigint")&&Cs(e,""+o);break;case"onScroll":o!=null&&ge("scroll",e);break;case"onScrollEnd":o!=null&&ge("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Li);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!qt.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(u=r.endsWith("Capture"),i=r.slice(2,u?r.length-7:void 0),d=e[xn]||null,d=d!=null?d[r]:null,typeof d=="function"&&e.removeEventListener(i,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(i,o,u);break t}r in e?e[r]=o:o===!0?e.setAttribute(r,""):Ve(e,r,o)}}}function Tn(e,i,r){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",e),ge("load",e);var o=!1,u=!1,d;for(d in r)if(r.hasOwnProperty(d)){var S=r[d];if(S!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Be(e,i,d,S,r,null)}}u&&Be(e,i,"srcSet",r.srcSet,r,null),o&&Be(e,i,"src",r.src,r,null);return;case"input":ge("invalid",e);var b=d=S=u=null,I=null,et=null;for(o in r)if(r.hasOwnProperty(o)){var dt=r[o];if(dt!=null)switch(o){case"name":u=dt;break;case"type":S=dt;break;case"checked":I=dt;break;case"defaultChecked":et=dt;break;case"value":d=dt;break;case"defaultValue":b=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(s(137,i));break;default:Be(e,i,o,dt,r,null)}}Dn(e,d,b,I,et,S,u,!1);return;case"select":ge("invalid",e),o=S=d=null;for(u in r)if(r.hasOwnProperty(u)&&(b=r[u],b!=null))switch(u){case"value":d=b;break;case"defaultValue":S=b;break;case"multiple":o=b;default:Be(e,i,u,b,r,null)}i=d,r=S,e.multiple=!!o,i!=null?tn(e,!!o,i,!1):r!=null&&tn(e,!!o,r,!0);return;case"textarea":ge("invalid",e),d=u=o=null;for(S in r)if(r.hasOwnProperty(S)&&(b=r[S],b!=null))switch(S){case"value":o=b;break;case"defaultValue":u=b;break;case"children":d=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Be(e,i,S,b,r,null)}yi(e,o,u,d);return;case"option":for(I in r)if(r.hasOwnProperty(I)&&(o=r[I],o!=null))switch(I){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Be(e,i,I,o,r,null)}return;case"dialog":ge("beforetoggle",e),ge("toggle",e),ge("cancel",e),ge("close",e);break;case"iframe":case"object":ge("load",e);break;case"video":case"audio":for(o=0;o<fo.length;o++)ge(fo[o],e);break;case"image":ge("error",e),ge("load",e);break;case"details":ge("toggle",e);break;case"embed":case"source":case"link":ge("error",e),ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in r)if(r.hasOwnProperty(et)&&(o=r[et],o!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Be(e,i,et,o,r,null)}return;default:if(Oc(i)){for(dt in r)r.hasOwnProperty(dt)&&(o=r[dt],o!==void 0&&yf(e,i,dt,o,r,void 0));return}}for(b in r)r.hasOwnProperty(b)&&(o=r[b],o!=null&&Be(e,i,b,o,r,null))}function jx(e,i,r,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,S=null,b=null,I=null,et=null,dt=null;for(ct in r){var gt=r[ct];if(r.hasOwnProperty(ct)&&gt!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":I=gt;default:o.hasOwnProperty(ct)||Be(e,i,ct,null,o,gt)}}for(var at in o){var ct=o[at];if(gt=r[at],o.hasOwnProperty(at)&&(ct!=null||gt!=null))switch(at){case"type":d=ct;break;case"name":u=ct;break;case"checked":et=ct;break;case"defaultChecked":dt=ct;break;case"value":S=ct;break;case"defaultValue":b=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,i));break;default:ct!==gt&&Be(e,i,at,ct,o,gt)}}An(e,S,b,I,et,dt,d,u);return;case"select":ct=S=b=at=null;for(d in r)if(I=r[d],r.hasOwnProperty(d)&&I!=null)switch(d){case"value":break;case"multiple":ct=I;default:o.hasOwnProperty(d)||Be(e,i,d,null,o,I)}for(u in o)if(d=o[u],I=r[u],o.hasOwnProperty(u)&&(d!=null||I!=null))switch(u){case"value":at=d;break;case"defaultValue":b=d;break;case"multiple":S=d;default:d!==I&&Be(e,i,u,d,o,I)}i=b,r=S,o=ct,at!=null?tn(e,!!r,at,!1):!!o!=!!r&&(i!=null?tn(e,!!r,i,!0):tn(e,!!r,r?[]:"",!1));return;case"textarea":ct=at=null;for(b in r)if(u=r[b],r.hasOwnProperty(b)&&u!=null&&!o.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Be(e,i,b,null,o,u)}for(S in o)if(u=o[S],d=r[S],o.hasOwnProperty(S)&&(u!=null||d!=null))switch(S){case"value":at=u;break;case"defaultValue":ct=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&Be(e,i,S,u,o,d)}Rs(e,at,ct);return;case"option":for(var Wt in r)if(at=r[Wt],r.hasOwnProperty(Wt)&&at!=null&&!o.hasOwnProperty(Wt))switch(Wt){case"selected":e.selected=!1;break;default:Be(e,i,Wt,null,o,at)}for(I in o)if(at=o[I],ct=r[I],o.hasOwnProperty(I)&&at!==ct&&(at!=null||ct!=null))switch(I){case"selected":e.selected=at&&typeof at!="function"&&typeof at!="symbol";break;default:Be(e,i,I,at,o,ct)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in r)at=r[ee],r.hasOwnProperty(ee)&&at!=null&&!o.hasOwnProperty(ee)&&Be(e,i,ee,null,o,at);for(et in o)if(at=o[et],ct=r[et],o.hasOwnProperty(et)&&at!==ct&&(at!=null||ct!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(s(137,i));break;default:Be(e,i,et,at,o,ct)}return;default:if(Oc(i)){for(var Ie in r)at=r[Ie],r.hasOwnProperty(Ie)&&at!==void 0&&!o.hasOwnProperty(Ie)&&yf(e,i,Ie,void 0,o,at);for(dt in o)at=o[dt],ct=r[dt],!o.hasOwnProperty(dt)||at===ct||at===void 0&&ct===void 0||yf(e,i,dt,at,o,ct);return}}for(var j in r)at=r[j],r.hasOwnProperty(j)&&at!=null&&!o.hasOwnProperty(j)&&Be(e,i,j,null,o,at);for(gt in o)at=o[gt],ct=r[gt],!o.hasOwnProperty(gt)||at===ct||at==null&&ct==null||Be(e,i,gt,at,o,ct)}function Ng(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Zx(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,r=performance.getEntriesByType("resource"),o=0;o<r.length;o++){var u=r[o],d=u.transferSize,S=u.initiatorType,b=u.duration;if(d&&b&&Ng(S)){for(S=0,b=u.responseEnd,o+=1;o<r.length;o++){var I=r[o],et=I.startTime;if(et>b)break;var dt=I.transferSize,gt=I.initiatorType;dt&&Ng(gt)&&(I=I.responseEnd,S+=dt*(I<b?1:(b-et)/(I-et)))}if(--o,i+=8*(d+S)/(u.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Mf=null,Ef=null;function Pl(e){return e.nodeType===9?e:e.ownerDocument}function Og(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Fg(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function Tf(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Af=null;function Kx(){var e=window.event;return e&&e.type==="popstate"?e===Af?!1:(Af=e,!0):(Af=null,!1)}var Pg=typeof setTimeout=="function"?setTimeout:void 0,Qx=typeof clearTimeout=="function"?clearTimeout:void 0,zg=typeof Promise=="function"?Promise:void 0,Jx=typeof queueMicrotask=="function"?queueMicrotask:typeof zg<"u"?function(e){return zg.resolve(null).then(e).catch($x)}:Pg;function $x(e){setTimeout(function(){throw e})}function Ta(e){return e==="head"}function Bg(e,i){var r=i,o=0;do{var u=r.nextSibling;if(e.removeChild(r),u&&u.nodeType===8)if(r=u.data,r==="/$"||r==="/&"){if(o===0){e.removeChild(u),sr(i);return}o--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")o++;else if(r==="html")po(e.ownerDocument.documentElement);else if(r==="head"){r=e.ownerDocument.head,po(r);for(var d=r.firstChild;d;){var S=d.nextSibling,b=d.nodeName;d[Xa]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&d.rel.toLowerCase()==="stylesheet"||r.removeChild(d),d=S}}else r==="body"&&po(e.ownerDocument.body);r=u}while(r);sr(i)}function Ig(e,i){var r=e;e=0;do{var o=r.nextSibling;if(r.nodeType===1?i?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(i?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(e===0)break;e--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||e++;r=o}while(r)}function bf(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var r=i;switch(i=i.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":bf(r),R(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function tS(e,i,r,o){for(;e.nodeType===1;){var u=r;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Xa])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=ri(e.nextSibling),e===null)break}return null}function eS(e,i,r){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=ri(e.nextSibling),e===null))return null;return e}function Hg(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=ri(e.nextSibling),e===null))return null;return e}function Rf(e){return e.data==="$?"||e.data==="$~"}function Cf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function nS(e,i){var r=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||r.readyState!=="loading")i();else{var o=function(){i(),r.removeEventListener("DOMContentLoaded",o)};r.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function ri(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var wf=null;function Gg(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"||r==="/&"){if(i===0)return ri(e.nextSibling);i--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||i++}e=e.nextSibling}return null}function Vg(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(i===0)return e;i--}else r!=="/$"&&r!=="/&"||i++}e=e.previousSibling}return null}function Xg(e,i,r){switch(i=Pl(r),e){case"html":if(e=i.documentElement,!e)throw Error(s(452));return e;case"head":if(e=i.head,!e)throw Error(s(453));return e;case"body":if(e=i.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function po(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);R(e)}var oi=new Map,kg=new Set;function zl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ji=V.d;V.d={f:iS,r:aS,D:sS,C:rS,L:oS,m:lS,X:uS,S:cS,M:fS};function iS(){var e=ji.f(),i=Cl();return e||i}function aS(e){var i=rt(e);i!==null&&i.tag===5&&i.type==="form"?om(i):ji.r(e)}var nr=typeof document>"u"?null:document;function Wg(e,i,r){var o=nr;if(o&&typeof i=="string"&&i){var u=_e(i);u='link[rel="'+e+'"][href="'+u+'"]',typeof r=="string"&&(u+='[crossorigin="'+r+'"]'),kg.has(u)||(kg.add(u),e={rel:e,crossOrigin:r,href:i},o.querySelector(u)===null&&(i=o.createElement("link"),Tn(i,"link",e),St(i),o.head.appendChild(i)))}}function sS(e){ji.D(e),Wg("dns-prefetch",e,null)}function rS(e,i){ji.C(e,i),Wg("preconnect",e,i)}function oS(e,i,r){ji.L(e,i,r);var o=nr;if(o&&e&&i){var u='link[rel="preload"][as="'+_e(i)+'"]';i==="image"&&r&&r.imageSrcSet?(u+='[imagesrcset="'+_e(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(u+='[imagesizes="'+_e(r.imageSizes)+'"]')):u+='[href="'+_e(e)+'"]';var d=u;switch(i){case"style":d=ir(e);break;case"script":d=ar(e)}oi.has(d)||(e=_({rel:"preload",href:i==="image"&&r&&r.imageSrcSet?void 0:e,as:i},r),oi.set(d,e),o.querySelector(u)!==null||i==="style"&&o.querySelector(mo(d))||i==="script"&&o.querySelector(go(d))||(i=o.createElement("link"),Tn(i,"link",e),St(i),o.head.appendChild(i)))}}function lS(e,i){ji.m(e,i);var r=nr;if(r&&e){var o=i&&typeof i.as=="string"?i.as:"script",u='link[rel="modulepreload"][as="'+_e(o)+'"][href="'+_e(e)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=ar(e)}if(!oi.has(d)&&(e=_({rel:"modulepreload",href:e},i),oi.set(d,e),r.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(go(d)))return}o=r.createElement("link"),Tn(o,"link",e),St(o),r.head.appendChild(o)}}}function cS(e,i,r){ji.S(e,i,r);var o=nr;if(o&&e){var u=K(o).hoistableStyles,d=ir(e);i=i||"default";var S=u.get(d);if(!S){var b={loading:0,preload:null};if(S=o.querySelector(mo(d)))b.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":i},r),(r=oi.get(d))&&Df(e,r);var I=S=o.createElement("link");St(I),Tn(I,"link",e),I._p=new Promise(function(et,dt){I.onload=et,I.onerror=dt}),I.addEventListener("load",function(){b.loading|=1}),I.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Bl(S,i,o)}S={type:"stylesheet",instance:S,count:1,state:b},u.set(d,S)}}}function uS(e,i){ji.X(e,i);var r=nr;if(r&&e){var o=K(r).hoistableScripts,u=ar(e),d=o.get(u);d||(d=r.querySelector(go(u)),d||(e=_({src:e,async:!0},i),(i=oi.get(u))&&Uf(e,i),d=r.createElement("script"),St(d),Tn(d,"link",e),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function fS(e,i){ji.M(e,i);var r=nr;if(r&&e){var o=K(r).hoistableScripts,u=ar(e),d=o.get(u);d||(d=r.querySelector(go(u)),d||(e=_({src:e,async:!0,type:"module"},i),(i=oi.get(u))&&Uf(e,i),d=r.createElement("script"),St(d),Tn(d,"link",e),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function qg(e,i,r,o){var u=(u=it.current)?zl(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(i=ir(r.href),r=K(u).hoistableStyles,o=r.get(i),o||(o={type:"style",instance:null,count:0,state:null},r.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=ir(r.href);var d=K(u).hoistableStyles,S=d.get(e);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,S),(d=u.querySelector(mo(e)))&&!d._p&&(S.instance=d,S.state.loading=5),oi.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},oi.set(e,r),d||hS(u,e,r,S.state))),i&&o===null)throw Error(s(528,""));return S}if(i&&o!==null)throw Error(s(529,""));return null;case"script":return i=r.async,r=r.src,typeof r=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=ar(r),r=K(u).hoistableScripts,o=r.get(i),o||(o={type:"script",instance:null,count:0,state:null},r.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function ir(e){return'href="'+_e(e)+'"'}function mo(e){return'link[rel="stylesheet"]['+e+"]"}function Yg(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function hS(e,i,r,o){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=e.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),Tn(i,"link",r),St(i),e.head.appendChild(i))}function ar(e){return'[src="'+_e(e)+'"]'}function go(e){return"script[async]"+e}function jg(e,i,r){if(i.count++,i.instance===null)switch(i.type){case"style":var o=e.querySelector('style[data-href~="'+_e(r.href)+'"]');if(o)return i.instance=o,St(o),o;var u=_({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),St(o),Tn(o,"style",u),Bl(o,r.precedence,e),i.instance=o;case"stylesheet":u=ir(r.href);var d=e.querySelector(mo(u));if(d)return i.state.loading|=4,i.instance=d,St(d),d;o=Yg(r),(u=oi.get(u))&&Df(o,u),d=(e.ownerDocument||e).createElement("link"),St(d);var S=d;return S._p=new Promise(function(b,I){S.onload=b,S.onerror=I}),Tn(d,"link",o),i.state.loading|=4,Bl(d,r.precedence,e),i.instance=d;case"script":return d=ar(r.src),(u=e.querySelector(go(d)))?(i.instance=u,St(u),u):(o=r,(u=oi.get(d))&&(o=_({},r),Uf(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),St(u),Tn(u,"link",o),e.head.appendChild(u),i.instance=u);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,Bl(o,r.precedence,e));return i.instance}function Bl(e,i,r){for(var o=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,S=0;S<o.length;S++){var b=o[S];if(b.dataset.precedence===i)d=b;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=r.nodeType===9?r.head:r,i.insertBefore(e,i.firstChild))}function Df(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Uf(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var Il=null;function Zg(e,i,r){if(Il===null){var o=new Map,u=Il=new Map;u.set(r,o)}else u=Il,o=u.get(r),o||(o=new Map,u.set(r,o));if(o.has(e))return o;for(o.set(e,null),r=r.getElementsByTagName(e),u=0;u<r.length;u++){var d=r[u];if(!(d[Xa]||d[an]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var S=d.getAttribute(i)||"";S=e+S;var b=o.get(S);b?b.push(d):o.set(S,[d])}}return o}function Kg(e,i,r){e=e.ownerDocument||e,e.head.insertBefore(r,i==="title"?e.querySelector("head > title"):null)}function dS(e,i,r){if(r===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Qg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function pS(e,i,r,o){if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var u=ir(o.href),d=i.querySelector(mo(u));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=Hl.bind(e),i.then(e,e)),r.state.loading|=4,r.instance=d,St(d);return}d=i.ownerDocument||i,o=Yg(o),(u=oi.get(u))&&Df(o,u),d=d.createElement("link"),St(d);var S=d;S._p=new Promise(function(b,I){S.onload=b,S.onerror=I}),Tn(d,"link",o),r.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(e.count++,r=Hl.bind(e),i.addEventListener("load",r),i.addEventListener("error",r))}}var Lf=0;function mS(e,i){return e.stylesheets&&e.count===0&&Vl(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var o=setTimeout(function(){if(e.stylesheets&&Vl(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+i);0<e.imgBytes&&Lf===0&&(Lf=62500*Zx());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Vl(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>Lf?50:800)+i);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Hl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Vl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Gl=null;function Vl(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Gl=new Map,i.forEach(gS,e),Gl=null,Hl.call(e))}function gS(e,i){if(!(i.state.loading&4)){var r=Gl.get(e);if(r)var o=r.get(null);else{r=new Map,Gl.set(e,r);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var S=u[d];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(r.set(S.dataset.precedence,S),o=S)}o&&r.set(null,o)}u=i.instance,S=u.getAttribute("data-precedence"),d=r.get(S)||o,d===o&&r.set(null,u),r.set(S,u),this.count++,o=Hl.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),i.state.loading|=4}}var _o={$$typeof:U,Provider:null,Consumer:null,_currentValue:X,_currentValue2:X,_threadCount:0};function _S(e,i,r,o,u,d,S,b,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Te(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Te(0),this.hiddenUpdates=Te(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function Jg(e,i,r,o,u,d,S,b,I,et,dt,gt){return e=new _S(e,i,r,S,I,et,dt,gt,b),i=1,d===!0&&(i|=24),d=Xn(3,null,null,i),e.current=d,d.stateNode=e,i=uu(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:o,isDehydrated:r,cache:i},pu(d),e}function $g(e){return e?(e=Fs,e):Fs}function t0(e,i,r,o,u,d){u=$g(u),o.context===null?o.context=u:o.pendingContext=u,o=da(i),o.payload={element:r},d=d===void 0?null:d,d!==null&&(o.callback=d),r=pa(e,o,i),r!==null&&(Bn(r,e,i),jr(r,e,i))}function e0(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<i?r:i}}function Nf(e,i){e0(e,i),(e=e.alternate)&&e0(e,i)}function n0(e){if(e.tag===13||e.tag===31){var i=ja(e,67108864);i!==null&&Bn(i,e,67108864),Nf(e,67108864)}}function i0(e){if(e.tag===13||e.tag===31){var i=jn();i=As(i);var r=ja(e,i);r!==null&&Bn(r,e,i),Nf(e,i)}}var Xl=!0;function vS(e,i,r,o){var u=z.T;z.T=null;var d=V.p;try{V.p=2,Of(e,i,r,o)}finally{V.p=d,z.T=u}}function xS(e,i,r,o){var u=z.T;z.T=null;var d=V.p;try{V.p=8,Of(e,i,r,o)}finally{V.p=d,z.T=u}}function Of(e,i,r,o){if(Xl){var u=Ff(o);if(u===null)Sf(e,i,o,kl,r),s0(e,o);else if(yS(u,e,i,r,o))o.stopPropagation();else if(s0(e,o),i&4&&-1<SS.indexOf(e)){for(;u!==null;){var d=rt(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var S=Et(d.pendingLanes);if(S!==0){var b=d;for(b.pendingLanes|=2,b.entangledLanes|=2;S;){var I=1<<31-Ut(S);b.entanglements[1]|=I,S&=~I}Ai(d),(De&6)===0&&(bl=A()+500,uo(0))}}break;case 31:case 13:b=ja(d,2),b!==null&&Bn(b,d,2),Cl(),Nf(d,2)}if(d=Ff(o),d===null&&Sf(e,i,o,kl,r),d===u)break;u=d}u!==null&&o.stopPropagation()}else Sf(e,i,o,null,r)}}function Ff(e){return e=Pc(e),Pf(e)}var kl=null;function Pf(e){if(kl=null,e=Y(e),e!==null){var i=c(e);if(i===null)e=null;else{var r=i.tag;if(r===13){if(e=f(i),e!==null)return e;e=null}else if(r===31){if(e=h(i),e!==null)return e;e=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return kl=e,null}function a0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($()){case pt:return 2;case Mt:return 8;case ht:case Kt:return 32;case Rt:return 268435456;default:return 32}default:return 32}}var zf=!1,Aa=null,ba=null,Ra=null,vo=new Map,xo=new Map,Ca=[],SS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function s0(e,i){switch(e){case"focusin":case"focusout":Aa=null;break;case"dragenter":case"dragleave":ba=null;break;case"mouseover":case"mouseout":Ra=null;break;case"pointerover":case"pointerout":vo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":xo.delete(i.pointerId)}}function So(e,i,r,o,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:r,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},i!==null&&(i=rt(i),i!==null&&n0(i)),e):(e.eventSystemFlags|=o,i=e.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),e)}function yS(e,i,r,o,u){switch(i){case"focusin":return Aa=So(Aa,e,i,r,o,u),!0;case"dragenter":return ba=So(ba,e,i,r,o,u),!0;case"mouseover":return Ra=So(Ra,e,i,r,o,u),!0;case"pointerover":var d=u.pointerId;return vo.set(d,So(vo.get(d)||null,e,i,r,o,u)),!0;case"gotpointercapture":return d=u.pointerId,xo.set(d,So(xo.get(d)||null,e,i,r,o,u)),!0}return!1}function r0(e){var i=Y(e.target);if(i!==null){var r=c(i);if(r!==null){if(i=r.tag,i===13){if(i=f(r),i!==null){e.blockedOn=i,Ur(e.priority,function(){i0(r)});return}}else if(i===31){if(i=h(r),i!==null){e.blockedOn=i,Ur(e.priority,function(){i0(r)});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wl(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var r=Ff(e.nativeEvent);if(r===null){r=e.nativeEvent;var o=new r.constructor(r.type,r);Fc=o,r.target.dispatchEvent(o),Fc=null}else return i=rt(r),i!==null&&n0(i),e.blockedOn=r,!1;i.shift()}return!0}function o0(e,i,r){Wl(e)&&r.delete(i)}function MS(){zf=!1,Aa!==null&&Wl(Aa)&&(Aa=null),ba!==null&&Wl(ba)&&(ba=null),Ra!==null&&Wl(Ra)&&(Ra=null),vo.forEach(o0),xo.forEach(o0)}function ql(e,i){e.blockedOn===i&&(e.blockedOn=null,zf||(zf=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,MS)))}var Yl=null;function l0(e){Yl!==e&&(Yl=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Yl===e&&(Yl=null);for(var i=0;i<e.length;i+=3){var r=e[i],o=e[i+1],u=e[i+2];if(typeof o!="function"){if(Pf(o||r)===null)continue;break}var d=rt(r);d!==null&&(e.splice(i,3),i-=3,Ou(d,{pending:!0,data:u,method:r.method,action:o},o,u))}}))}function sr(e){function i(I){return ql(I,e)}Aa!==null&&ql(Aa,e),ba!==null&&ql(ba,e),Ra!==null&&ql(Ra,e),vo.forEach(i),xo.forEach(i);for(var r=0;r<Ca.length;r++){var o=Ca[r];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ca.length&&(r=Ca[0],r.blockedOn===null);)r0(r),r.blockedOn===null&&Ca.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(o=0;o<r.length;o+=3){var u=r[o],d=r[o+1],S=u[xn]||null;if(typeof d=="function")S||l0(r);else if(S){var b=null;if(d&&d.hasAttribute("formAction")){if(u=d,S=d[xn]||null)b=S.formAction;else if(Pf(u)!==null)continue}else b=S.action;typeof b=="function"?r[o+1]=b:(r.splice(o,3),o-=3),l0(r)}}}function c0(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function i(){u!==null&&(u(),u=null),o||setTimeout(r,20)}function r(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(r,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),u!==null&&(u(),u=null)}}}function Bf(e){this._internalRoot=e}jl.prototype.render=Bf.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(s(409));var r=i.current,o=jn();t0(r,o,e,i,null,null)},jl.prototype.unmount=Bf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;t0(e.current,2,null,e,null,null),Cl(),i[ra]=null}};function jl(e){this._internalRoot=e}jl.prototype.unstable_scheduleHydration=function(e){if(e){var i=Va();e={blockedOn:null,target:e,priority:i};for(var r=0;r<Ca.length&&i!==0&&i<Ca[r].priority;r++);Ca.splice(r,0,e),r===0&&r0(e)}};var u0=t.version;if(u0!=="19.2.0")throw Error(s(527,u0,"19.2.0"));V.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(i),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var ES={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zl.isDisabled&&Zl.supportsFiber)try{vt=Zl.inject(ES),bt=Zl}catch{}}return Mo.createRoot=function(e,i){if(!l(e))throw Error(s(299));var r=!1,o="",u=_m,d=vm,S=xm;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(S=i.onRecoverableError)),i=Jg(e,1,!1,null,null,r,o,null,u,d,S,c0),e[ra]=i.current,xf(e),new Bf(i)},Mo.hydrateRoot=function(e,i,r){if(!l(e))throw Error(s(299));var o=!1,u="",d=_m,S=vm,b=xm,I=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(d=r.onUncaughtError),r.onCaughtError!==void 0&&(S=r.onCaughtError),r.onRecoverableError!==void 0&&(b=r.onRecoverableError),r.formState!==void 0&&(I=r.formState)),i=Jg(e,1,!0,i,r??null,o,u,I,d,S,b,c0),i.context=$g(null),r=i.current,o=jn(),o=As(o),u=da(o),u.callback=null,pa(r,u,o),r=o,i.current.lanes=r,wn(i,r),Ai(i),e[ra]=i.current,xf(e),new jl(i)},Mo.version="19.2.0",Mo}var S0;function NS(){if(S0)return Gf.exports;S0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(t){console.error(t)}}return a(),Gf.exports=LS(),Gf.exports}var OS=NS();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xd="180",FS=0,y0=1,PS=2,O_=1,zS=2,ta=3,Ha=0,Hn=1,ea=2,za=0,xs=1,M0=2,E0=3,T0=4,BS=5,ms=100,IS=101,HS=102,GS=103,VS=104,XS=200,kS=201,WS=202,qS=203,Rh=204,Ch=205,YS=206,jS=207,ZS=208,KS=209,QS=210,JS=211,$S=212,ty=213,ey=214,wh=0,Dh=1,Uh=2,Er=3,Lh=4,Nh=5,Oh=6,Fh=7,F_=0,ny=1,iy=2,Ba=0,ay=1,sy=2,ry=3,oy=4,ly=5,cy=6,uy=7,P_=300,Tr=301,Ar=302,Ph=303,zh=304,Rc=306,Bh=1e3,_s=1001,Ih=1002,vi=1003,fy=1004,Kl=1005,Ri=1006,Wf=1007,vs=1008,aa=1009,z_=1010,B_=1011,Do=1012,Sd=1013,ys=1014,na=1015,Fo=1016,yd=1017,Md=1018,Uo=1020,I_=35902,H_=35899,G_=1021,V_=1022,_i=1023,Lo=1026,No=1027,X_=1028,Ed=1029,k_=1030,Td=1031,Ad=1033,vc=33776,xc=33777,Sc=33778,yc=33779,Hh=35840,Gh=35841,Vh=35842,Xh=35843,kh=36196,Wh=37492,qh=37496,Yh=37808,jh=37809,Zh=37810,Kh=37811,Qh=37812,Jh=37813,$h=37814,td=37815,ed=37816,nd=37817,id=37818,ad=37819,sd=37820,rd=37821,od=36492,ld=36494,cd=36495,ud=36283,fd=36284,hd=36285,dd=36286,hy=3200,dy=3201,py=0,my=1,Pa="",Qn="srgb",br="srgb-linear",Tc="linear",He="srgb",rr=7680,A0=519,gy=512,_y=513,vy=514,W_=515,xy=516,Sy=517,yy=518,My=519,b0=35044,R0="300 es",Ci=2e3,Ac=2001;class Cr{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(n)===-1&&s[t].push(n)}hasEventListener(t,n){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(n)!==-1}removeEventListener(t,n){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(n);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const s=n[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qf=Math.PI/180,pd=180/Math.PI;function Po(){const a=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Rn[a&255]+Rn[a>>8&255]+Rn[a>>16&255]+Rn[a>>24&255]+"-"+Rn[t&255]+Rn[t>>8&255]+"-"+Rn[t>>16&15|64]+Rn[t>>24&255]+"-"+Rn[n&63|128]+Rn[n>>8&255]+"-"+Rn[n>>16&255]+Rn[n>>24&255]+Rn[s&255]+Rn[s>>8&255]+Rn[s>>16&255]+Rn[s>>24&255]).toLowerCase()}function Me(a,t,n){return Math.max(t,Math.min(n,a))}function Ey(a,t){return(a%t+t)%t}function Yf(a,t,n){return(1-n)*a+n*t}function Eo(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function In(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class Ne{constructor(t=0,n=0){Ne.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,s=this.y,l=t.elements;return this.x=l[0]*n+l[3]*s+l[6],this.y=l[1]*n+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Me(this.x,t.x,n.x),this.y=Me(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Me(this.x,t,n),this.y=Me(this.y,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(t)/n;return Math.acos(Me(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,s=this.y-t.y;return n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const s=Math.cos(n),l=Math.sin(n),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zo{constructor(t=0,n=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=s,this._w=l}static slerpFlat(t,n,s,l,c,f,h){let p=s[l+0],m=s[l+1],g=s[l+2],_=s[l+3];const x=c[f+0],M=c[f+1],E=c[f+2],T=c[f+3];if(h===0){t[n+0]=p,t[n+1]=m,t[n+2]=g,t[n+3]=_;return}if(h===1){t[n+0]=x,t[n+1]=M,t[n+2]=E,t[n+3]=T;return}if(_!==T||p!==x||m!==M||g!==E){let y=1-h;const v=p*x+m*M+g*E+_*T,P=v>=0?1:-1,U=1-v*v;if(U>Number.EPSILON){const B=Math.sqrt(U),O=Math.atan2(B,v*P);y=Math.sin(y*O)/B,h=Math.sin(h*O)/B}const C=h*P;if(p=p*y+x*C,m=m*y+M*C,g=g*y+E*C,_=_*y+T*C,y===1-h){const B=1/Math.sqrt(p*p+m*m+g*g+_*_);p*=B,m*=B,g*=B,_*=B}}t[n]=p,t[n+1]=m,t[n+2]=g,t[n+3]=_}static multiplyQuaternionsFlat(t,n,s,l,c,f){const h=s[l],p=s[l+1],m=s[l+2],g=s[l+3],_=c[f],x=c[f+1],M=c[f+2],E=c[f+3];return t[n]=h*E+g*_+p*M-m*x,t[n+1]=p*E+g*x+m*_-h*M,t[n+2]=m*E+g*M+h*x-p*_,t[n+3]=g*E-h*_-p*x-m*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,s,l){return this._x=t,this._y=n,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const s=t._x,l=t._y,c=t._z,f=t._order,h=Math.cos,p=Math.sin,m=h(s/2),g=h(l/2),_=h(c/2),x=p(s/2),M=p(l/2),E=p(c/2);switch(f){case"XYZ":this._x=x*g*_+m*M*E,this._y=m*M*_-x*g*E,this._z=m*g*E+x*M*_,this._w=m*g*_-x*M*E;break;case"YXZ":this._x=x*g*_+m*M*E,this._y=m*M*_-x*g*E,this._z=m*g*E-x*M*_,this._w=m*g*_+x*M*E;break;case"ZXY":this._x=x*g*_-m*M*E,this._y=m*M*_+x*g*E,this._z=m*g*E+x*M*_,this._w=m*g*_-x*M*E;break;case"ZYX":this._x=x*g*_-m*M*E,this._y=m*M*_+x*g*E,this._z=m*g*E-x*M*_,this._w=m*g*_+x*M*E;break;case"YZX":this._x=x*g*_+m*M*E,this._y=m*M*_+x*g*E,this._z=m*g*E-x*M*_,this._w=m*g*_-x*M*E;break;case"XZY":this._x=x*g*_-m*M*E,this._y=m*M*_-x*g*E,this._z=m*g*E+x*M*_,this._w=m*g*_+x*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const s=n/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,s=n[0],l=n[4],c=n[8],f=n[1],h=n[5],p=n[9],m=n[2],g=n[6],_=n[10],x=s+h+_;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(g-p)*M,this._y=(c-m)*M,this._z=(f-l)*M}else if(s>h&&s>_){const M=2*Math.sqrt(1+s-h-_);this._w=(g-p)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+m)/M}else if(h>_){const M=2*Math.sqrt(1+h-s-_);this._w=(c-m)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(p+g)/M}else{const M=2*Math.sqrt(1+_-s-h);this._w=(f-l)/M,this._x=(c+m)/M,this._y=(p+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let s=t.dot(n)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,n){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,n/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const s=t._x,l=t._y,c=t._z,f=t._w,h=n._x,p=n._y,m=n._z,g=n._w;return this._x=s*g+f*h+l*m-c*p,this._y=l*g+f*p+c*h-s*m,this._z=c*g+f*m+s*p-l*h,this._w=f*g-s*h-l*p-c*m,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const s=this._x,l=this._y,c=this._z,f=this._w;let h=f*t._w+s*t._x+l*t._y+c*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=f,this._x=s,this._y=l,this._z=c,this;const p=1-h*h;if(p<=Number.EPSILON){const M=1-n;return this._w=M*f+n*this._w,this._x=M*s+n*this._x,this._y=M*l+n*this._y,this._z=M*c+n*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,h),_=Math.sin((1-n)*g)/m,x=Math.sin(n*g)/m;return this._w=f*_+this._w*x,this._x=s*_+this._x*x,this._y=l*_+this._y*x,this._z=c*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,n,s){return this.copy(t).slerp(n,s)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class lt{constructor(t=0,n=0,s=0){lt.prototype.isVector3=!0,this.x=t,this.y=n,this.z=s}set(t,n,s){return s===void 0&&(s=this.z),this.x=t,this.y=n,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(C0.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(C0.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*n+c[3]*s+c[6]*l,this.y=c[1]*n+c[4]*s+c[7]*l,this.z=c[2]*n+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*n+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*n+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*n+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*n+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const n=this.x,s=this.y,l=this.z,c=t.x,f=t.y,h=t.z,p=t.w,m=2*(f*l-h*s),g=2*(h*n-c*l),_=2*(c*s-f*n);return this.x=n+p*m+f*_-h*g,this.y=s+p*g+h*m-c*_,this.z=l+p*_+c*g-f*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*n+c[4]*s+c[8]*l,this.y=c[1]*n+c[5]*s+c[9]*l,this.z=c[2]*n+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Me(this.x,t.x,n.x),this.y=Me(this.y,t.y,n.y),this.z=Me(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Me(this.x,t,n),this.y=Me(this.y,t,n),this.z=Me(this.z,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this.z=t.z+(n.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const s=t.x,l=t.y,c=t.z,f=n.x,h=n.y,p=n.z;return this.x=l*p-c*h,this.y=c*f-s*p,this.z=s*h-l*f,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const s=t.dot(this)/n;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return jf.copy(this).projectOnVector(t),this.sub(jf)}reflect(t){return this.sub(jf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(t)/n;return Math.acos(Me(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return n*n+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,s){const l=Math.sin(n)*t;return this.x=l*Math.sin(s),this.y=Math.cos(n)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,s){return this.x=t*Math.sin(n),this.y=s,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=s,this.z=l,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,s=Math.sqrt(1-n*n);return this.x=s*Math.cos(t),this.y=n,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jf=new lt,C0=new zo;class fe{constructor(t,n,s,l,c,f,h,p,m){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,s,l,c,f,h,p,m)}set(t,n,s,l,c,f,h,p,m){const g=this.elements;return g[0]=t,g[1]=l,g[2]=h,g[3]=n,g[4]=c,g[5]=p,g[6]=s,g[7]=f,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,s=t.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],this}extractBasis(t,n,s){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const s=t.elements,l=n.elements,c=this.elements,f=s[0],h=s[3],p=s[6],m=s[1],g=s[4],_=s[7],x=s[2],M=s[5],E=s[8],T=l[0],y=l[3],v=l[6],P=l[1],U=l[4],C=l[7],B=l[2],O=l[5],F=l[8];return c[0]=f*T+h*P+p*B,c[3]=f*y+h*U+p*O,c[6]=f*v+h*C+p*F,c[1]=m*T+g*P+_*B,c[4]=m*y+g*U+_*O,c[7]=m*v+g*C+_*F,c[2]=x*T+M*P+E*B,c[5]=x*y+M*U+E*O,c[8]=x*v+M*C+E*F,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],p=t[6],m=t[7],g=t[8];return n*f*g-n*h*m-s*c*g+s*h*p+l*c*m-l*f*p}invert(){const t=this.elements,n=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],p=t[6],m=t[7],g=t[8],_=g*f-h*m,x=h*p-g*c,M=m*c-f*p,E=n*_+s*x+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=_*T,t[1]=(l*m-g*s)*T,t[2]=(h*s-l*f)*T,t[3]=x*T,t[4]=(g*n-l*p)*T,t[5]=(l*c-h*n)*T,t[6]=M*T,t[7]=(s*p-m*n)*T,t[8]=(f*n-s*c)*T,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,s,l,c,f,h){const p=Math.cos(c),m=Math.sin(c);return this.set(s*p,s*m,-s*(p*f+m*h)+f+t,-l*m,l*p,-l*(-m*f+p*h)+h+n,0,0,1),this}scale(t,n){return this.premultiply(Zf.makeScale(t,n)),this}rotate(t){return this.premultiply(Zf.makeRotation(-t)),this}translate(t,n){return this.premultiply(Zf.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,-s,0,s,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,s=t.elements;for(let l=0;l<9;l++)if(n[l]!==s[l])return!1;return!0}fromArray(t,n=0){for(let s=0;s<9;s++)this.elements[s]=t[s+n];return this}toArray(t=[],n=0){const s=this.elements;return t[n]=s[0],t[n+1]=s[1],t[n+2]=s[2],t[n+3]=s[3],t[n+4]=s[4],t[n+5]=s[5],t[n+6]=s[6],t[n+7]=s[7],t[n+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Zf=new fe;function q_(a){for(let t=a.length-1;t>=0;--t)if(a[t]>=65535)return!0;return!1}function bc(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Ty(){const a=bc("canvas");return a.style.display="block",a}const w0={};function Oo(a){a in w0||(w0[a]=!0,console.warn(a))}function Ay(a,t,n){return new Promise(function(s,l){function c(){switch(a.clientWaitSync(t,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:l();break;case a.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:s()}}setTimeout(c,n)})}const D0=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),U0=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function by(){const a={enabled:!0,workingColorSpace:br,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===He&&(l.r=ia(l.r),l.g=ia(l.g),l.b=ia(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===He&&(l.r=Mr(l.r),l.g=Mr(l.g),l.b=Mr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Pa?Tc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Oo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Oo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],s=[.3127,.329];return a.define({[br]:{primaries:t,whitePoint:s,transfer:Tc,toXYZ:D0,fromXYZ:U0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Qn},outputColorSpaceConfig:{drawingBufferColorSpace:Qn}},[Qn]:{primaries:t,whitePoint:s,transfer:He,toXYZ:D0,fromXYZ:U0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Qn}}}),a}const we=by();function ia(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Mr(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let or;class Ry{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{or===void 0&&(or=bc("canvas")),or.width=t.width,or.height=t.height;const l=or.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=or}return s.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=bc("canvas");n.width=t.width,n.height=t.height;const s=n.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=ia(c[f]/255)*255;return s.putImageData(l,0,0),n}else if(t.data){const n=t.data.slice(0);for(let s=0;s<n.length;s++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[s]=Math.floor(ia(n[s]/255)*255):n[s]=ia(n[s]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Cy=0;class bd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cy++}),this.uuid=Po(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Kf(l[f].image)):c.push(Kf(l[f]))}else c=Kf(l);s.url=c}return n||(t.images[this.uuid]=s),s}}function Kf(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Ry.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wy=0;const Qf=new lt;let Di=class Mc extends Cr{constructor(t=Mc.DEFAULT_IMAGE,n=Mc.DEFAULT_MAPPING,s=_s,l=_s,c=Ri,f=vs,h=_i,p=aa,m=Mc.DEFAULT_ANISOTROPY,g=Pa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wy++}),this.uuid=Po(),this.name="",this.source=new bd(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Qf).x}get height(){return this.source.getSize(Qf).y}get depth(){return this.source.getSize(Qf).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const s=t[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[n]=s}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),n||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==P_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bh:t.x=t.x-Math.floor(t.x);break;case _s:t.x=t.x<0?0:1;break;case Ih:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bh:t.y=t.y-Math.floor(t.y);break;case _s:t.y=t.y<0?0:1;break;case Ih:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Di.DEFAULT_IMAGE=null;Di.DEFAULT_MAPPING=P_;Di.DEFAULT_ANISOTROPY=1;class $e{constructor(t=0,n=0,s=0,l=1){$e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,s,l){return this.x=t,this.y=n,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*n+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*n+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*n+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*n+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,s,l,c;const p=t.elements,m=p[0],g=p[4],_=p[8],x=p[1],M=p[5],E=p[9],T=p[2],y=p[6],v=p[10];if(Math.abs(g-x)<.01&&Math.abs(_-T)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+T)<.1&&Math.abs(E+y)<.1&&Math.abs(m+M+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const U=(m+1)/2,C=(M+1)/2,B=(v+1)/2,O=(g+x)/4,F=(_+T)/4,q=(E+y)/4;return U>C&&U>B?U<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(U),l=O/s,c=F/s):C>B?C<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(C),s=O/l,c=q/l):B<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(B),s=F/c,l=q/c),this.set(s,l,c,n),this}let P=Math.sqrt((y-E)*(y-E)+(_-T)*(_-T)+(x-g)*(x-g));return Math.abs(P)<.001&&(P=1),this.x=(y-E)/P,this.y=(_-T)/P,this.z=(x-g)/P,this.w=Math.acos((m+M+v-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Me(this.x,t.x,n.x),this.y=Me(this.y,t.y,n.y),this.z=Me(this.z,t.z,n.z),this.w=Me(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Me(this.x,t,n),this.y=Me(this.y,t,n),this.z=Me(this.z,t,n),this.w=Me(this.w,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this.z=t.z+(n.z-t.z)*s,this.w=t.w+(n.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dy extends Cr{constructor(t=1,n=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=s.depth,this.scissor=new $e(0,0,t,n),this.scissorTest=!1,this.viewport=new $e(0,0,t,n);const l={width:t,height:n,depth:s.depth},c=new Di(l);this.textures=[];const f=s.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const n={minFilter:Ri,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,s=1){if(this.width!==t||this.height!==n||this.depth!==s){this.width=t,this.height=n,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=n,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const l=Object.assign({},t.textures[n].image);this.textures[n].source=new bd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ms extends Dy{constructor(t=1,n=1,s={}){super(t,n,s),this.isWebGLRenderTarget=!0}}class Y_ extends Di{constructor(t=null,n=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:s,depth:l},this.magFilter=vi,this.minFilter=vi,this.wrapR=_s,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Uy extends Di{constructor(t=null,n=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:s,depth:l},this.magFilter=vi,this.minFilter=vi,this.wrapR=_s,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bo{constructor(t=new lt(1/0,1/0,1/0),n=new lt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,s=t.length;n<s;n+=3)this.expandByPoint(hi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,s=t.count;n<s;n++)this.expandByPoint(hi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,s=t.length;n<s;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const s=hi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,hi):hi.fromBufferAttribute(c,f),hi.applyMatrix4(t.matrixWorld),this.expandByPoint(hi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ql.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Ql.copy(s.boundingBox)),Ql.applyMatrix4(t.matrixWorld),this.union(Ql)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hi),hi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,s;return t.normal.x>0?(n=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),n<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(To),Jl.subVectors(this.max,To),lr.subVectors(t.a,To),cr.subVectors(t.b,To),ur.subVectors(t.c,To),Da.subVectors(cr,lr),Ua.subVectors(ur,cr),os.subVectors(lr,ur);let n=[0,-Da.z,Da.y,0,-Ua.z,Ua.y,0,-os.z,os.y,Da.z,0,-Da.x,Ua.z,0,-Ua.x,os.z,0,-os.x,-Da.y,Da.x,0,-Ua.y,Ua.x,0,-os.y,os.x,0];return!Jf(n,lr,cr,ur,Jl)||(n=[1,0,0,0,1,0,0,0,1],!Jf(n,lr,cr,ur,Jl))?!1:($l.crossVectors(Da,Ua),n=[$l.x,$l.y,$l.z],Jf(n,lr,cr,ur,Jl))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Zi=[new lt,new lt,new lt,new lt,new lt,new lt,new lt,new lt],hi=new lt,Ql=new Bo,lr=new lt,cr=new lt,ur=new lt,Da=new lt,Ua=new lt,os=new lt,To=new lt,Jl=new lt,$l=new lt,ls=new lt;function Jf(a,t,n,s,l){for(let c=0,f=a.length-3;c<=f;c+=3){ls.fromArray(a,c);const h=l.x*Math.abs(ls.x)+l.y*Math.abs(ls.y)+l.z*Math.abs(ls.z),p=t.dot(ls),m=n.dot(ls),g=s.dot(ls);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>h)return!1}return!0}const Ly=new Bo,Ao=new lt,$f=new lt;class Rd{constructor(t=new lt,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const s=this.center;n!==void 0?s.copy(n):Ly.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const s=this.center.distanceToSquared(t);return n.copy(t),s>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ao.subVectors(t,this.center);const n=Ao.lengthSq();if(n>this.radius*this.radius){const s=Math.sqrt(n),l=(s-this.radius)*.5;this.center.addScaledVector(Ao,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($f.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ao.copy(t.center).add($f)),this.expandByPoint(Ao.copy(t.center).sub($f))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Ki=new lt,th=new lt,tc=new lt,La=new lt,eh=new lt,ec=new lt,nh=new lt;class Ny{constructor(t=new lt,n=new lt(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ki)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const s=n.dot(this.direction);return s<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Ki.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Ki.copy(this.origin).addScaledVector(this.direction,n),Ki.distanceToSquared(t))}distanceSqToSegment(t,n,s,l){th.copy(t).add(n).multiplyScalar(.5),tc.copy(n).sub(t).normalize(),La.copy(this.origin).sub(th);const c=t.distanceTo(n)*.5,f=-this.direction.dot(tc),h=La.dot(this.direction),p=-La.dot(tc),m=La.lengthSq(),g=Math.abs(1-f*f);let _,x,M,E;if(g>0)if(_=f*p-h,x=f*h-p,E=c*g,_>=0)if(x>=-E)if(x<=E){const T=1/g;_*=T,x*=T,M=_*(_+f*x+2*h)+x*(f*_+x+2*p)+m}else x=c,_=Math.max(0,-(f*x+h)),M=-_*_+x*(x+2*p)+m;else x=-c,_=Math.max(0,-(f*x+h)),M=-_*_+x*(x+2*p)+m;else x<=-E?(_=Math.max(0,-(-f*c+h)),x=_>0?-c:Math.min(Math.max(-c,-p),c),M=-_*_+x*(x+2*p)+m):x<=E?(_=0,x=Math.min(Math.max(-c,-p),c),M=x*(x+2*p)+m):(_=Math.max(0,-(f*c+h)),x=_>0?c:Math.min(Math.max(-c,-p),c),M=-_*_+x*(x+2*p)+m);else x=f>0?-c:c,_=Math.max(0,-(f*x+h)),M=-_*_+x*(x+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(th).addScaledVector(tc,x),M}intersectSphere(t,n){Ki.subVectors(t.center,this.origin);const s=Ki.dot(this.direction),l=Ki.dot(Ki)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=s-f,p=s+f;return p<0?null:h<0?this.at(p,n):this.at(h,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/n;return s>=0?s:null}intersectPlane(t,n){const s=this.distanceToPlane(t);return s===null?null:this.at(s,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let s,l,c,f,h,p;const m=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return m>=0?(s=(t.min.x-x.x)*m,l=(t.max.x-x.x)*m):(s=(t.max.x-x.x)*m,l=(t.min.x-x.x)*m),g>=0?(c=(t.min.y-x.y)*g,f=(t.max.y-x.y)*g):(c=(t.max.y-x.y)*g,f=(t.min.y-x.y)*g),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),_>=0?(h=(t.min.z-x.z)*_,p=(t.max.z-x.z)*_):(h=(t.max.z-x.z)*_,p=(t.min.z-x.z)*_),s>p||h>l)||((h>s||s!==s)&&(s=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,n)}intersectsBox(t){return this.intersectBox(t,Ki)!==null}intersectTriangle(t,n,s,l,c){eh.subVectors(n,t),ec.subVectors(s,t),nh.crossVectors(eh,ec);let f=this.direction.dot(nh),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;La.subVectors(this.origin,t);const p=h*this.direction.dot(ec.crossVectors(La,ec));if(p<0)return null;const m=h*this.direction.dot(eh.cross(La));if(m<0||p+m>f)return null;const g=-h*La.dot(nh);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dn{constructor(t,n,s,l,c,f,h,p,m,g,_,x,M,E,T,y){dn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,s,l,c,f,h,p,m,g,_,x,M,E,T,y)}set(t,n,s,l,c,f,h,p,m,g,_,x,M,E,T,y){const v=this.elements;return v[0]=t,v[4]=n,v[8]=s,v[12]=l,v[1]=c,v[5]=f,v[9]=h,v[13]=p,v[2]=m,v[6]=g,v[10]=_,v[14]=x,v[3]=M,v[7]=E,v[11]=T,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dn().fromArray(this.elements)}copy(t){const n=this.elements,s=t.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],n[9]=s[9],n[10]=s[10],n[11]=s[11],n[12]=s[12],n[13]=s[13],n[14]=s[14],n[15]=s[15],this}copyPosition(t){const n=this.elements,s=t.elements;return n[12]=s[12],n[13]=s[13],n[14]=s[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,s){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,n,s){return this.set(t.x,n.x,s.x,0,t.y,n.y,s.y,0,t.z,n.z,s.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,s=t.elements,l=1/fr.setFromMatrixColumn(t,0).length(),c=1/fr.setFromMatrixColumn(t,1).length(),f=1/fr.setFromMatrixColumn(t,2).length();return n[0]=s[0]*l,n[1]=s[1]*l,n[2]=s[2]*l,n[3]=0,n[4]=s[4]*c,n[5]=s[5]*c,n[6]=s[6]*c,n[7]=0,n[8]=s[8]*f,n[9]=s[9]*f,n[10]=s[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),h=Math.sin(s),p=Math.cos(l),m=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const x=f*g,M=f*_,E=h*g,T=h*_;n[0]=p*g,n[4]=-p*_,n[8]=m,n[1]=M+E*m,n[5]=x-T*m,n[9]=-h*p,n[2]=T-x*m,n[6]=E+M*m,n[10]=f*p}else if(t.order==="YXZ"){const x=p*g,M=p*_,E=m*g,T=m*_;n[0]=x+T*h,n[4]=E*h-M,n[8]=f*m,n[1]=f*_,n[5]=f*g,n[9]=-h,n[2]=M*h-E,n[6]=T+x*h,n[10]=f*p}else if(t.order==="ZXY"){const x=p*g,M=p*_,E=m*g,T=m*_;n[0]=x-T*h,n[4]=-f*_,n[8]=E+M*h,n[1]=M+E*h,n[5]=f*g,n[9]=T-x*h,n[2]=-f*m,n[6]=h,n[10]=f*p}else if(t.order==="ZYX"){const x=f*g,M=f*_,E=h*g,T=h*_;n[0]=p*g,n[4]=E*m-M,n[8]=x*m+T,n[1]=p*_,n[5]=T*m+x,n[9]=M*m-E,n[2]=-m,n[6]=h*p,n[10]=f*p}else if(t.order==="YZX"){const x=f*p,M=f*m,E=h*p,T=h*m;n[0]=p*g,n[4]=T-x*_,n[8]=E*_+M,n[1]=_,n[5]=f*g,n[9]=-h*g,n[2]=-m*g,n[6]=M*_+E,n[10]=x-T*_}else if(t.order==="XZY"){const x=f*p,M=f*m,E=h*p,T=h*m;n[0]=p*g,n[4]=-_,n[8]=m*g,n[1]=x*_+T,n[5]=f*g,n[9]=M*_-E,n[2]=E*_-M,n[6]=h*g,n[10]=T*_+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Oy,t,Fy)}lookAt(t,n,s){const l=this.elements;return Zn.subVectors(t,n),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),Na.crossVectors(s,Zn),Na.lengthSq()===0&&(Math.abs(s.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),Na.crossVectors(s,Zn)),Na.normalize(),nc.crossVectors(Zn,Na),l[0]=Na.x,l[4]=nc.x,l[8]=Zn.x,l[1]=Na.y,l[5]=nc.y,l[9]=Zn.y,l[2]=Na.z,l[6]=nc.z,l[10]=Zn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const s=t.elements,l=n.elements,c=this.elements,f=s[0],h=s[4],p=s[8],m=s[12],g=s[1],_=s[5],x=s[9],M=s[13],E=s[2],T=s[6],y=s[10],v=s[14],P=s[3],U=s[7],C=s[11],B=s[15],O=l[0],F=l[4],q=l[8],D=l[12],w=l[1],G=l[5],Z=l[9],J=l[13],Q=l[2],st=l[6],z=l[10],V=l[14],X=l[3],ft=l[7],yt=l[11],N=l[15];return c[0]=f*O+h*w+p*Q+m*X,c[4]=f*F+h*G+p*st+m*ft,c[8]=f*q+h*Z+p*z+m*yt,c[12]=f*D+h*J+p*V+m*N,c[1]=g*O+_*w+x*Q+M*X,c[5]=g*F+_*G+x*st+M*ft,c[9]=g*q+_*Z+x*z+M*yt,c[13]=g*D+_*J+x*V+M*N,c[2]=E*O+T*w+y*Q+v*X,c[6]=E*F+T*G+y*st+v*ft,c[10]=E*q+T*Z+y*z+v*yt,c[14]=E*D+T*J+y*V+v*N,c[3]=P*O+U*w+C*Q+B*X,c[7]=P*F+U*G+C*st+B*ft,c[11]=P*q+U*Z+C*z+B*yt,c[15]=P*D+U*J+C*V+B*N,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],s=t[4],l=t[8],c=t[12],f=t[1],h=t[5],p=t[9],m=t[13],g=t[2],_=t[6],x=t[10],M=t[14],E=t[3],T=t[7],y=t[11],v=t[15];return E*(+c*p*_-l*m*_-c*h*x+s*m*x+l*h*M-s*p*M)+T*(+n*p*M-n*m*x+c*f*x-l*f*M+l*m*g-c*p*g)+y*(+n*m*_-n*h*M-c*f*_+s*f*M+c*h*g-s*m*g)+v*(-l*h*g-n*p*_+n*h*x+l*f*_-s*f*x+s*p*g)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=n,l[14]=s),this}invert(){const t=this.elements,n=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],p=t[6],m=t[7],g=t[8],_=t[9],x=t[10],M=t[11],E=t[12],T=t[13],y=t[14],v=t[15],P=_*y*m-T*x*m+T*p*M-h*y*M-_*p*v+h*x*v,U=E*x*m-g*y*m-E*p*M+f*y*M+g*p*v-f*x*v,C=g*T*m-E*_*m+E*h*M-f*T*M-g*h*v+f*_*v,B=E*_*p-g*T*p-E*h*x+f*T*x+g*h*y-f*_*y,O=n*P+s*U+l*C+c*B;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/O;return t[0]=P*F,t[1]=(T*x*c-_*y*c-T*l*M+s*y*M+_*l*v-s*x*v)*F,t[2]=(h*y*c-T*p*c+T*l*m-s*y*m-h*l*v+s*p*v)*F,t[3]=(_*p*c-h*x*c-_*l*m+s*x*m+h*l*M-s*p*M)*F,t[4]=U*F,t[5]=(g*y*c-E*x*c+E*l*M-n*y*M-g*l*v+n*x*v)*F,t[6]=(E*p*c-f*y*c-E*l*m+n*y*m+f*l*v-n*p*v)*F,t[7]=(f*x*c-g*p*c+g*l*m-n*x*m-f*l*M+n*p*M)*F,t[8]=C*F,t[9]=(E*_*c-g*T*c-E*s*M+n*T*M+g*s*v-n*_*v)*F,t[10]=(f*T*c-E*h*c+E*s*m-n*T*m-f*s*v+n*h*v)*F,t[11]=(g*h*c-f*_*c-g*s*m+n*_*m+f*s*M-n*h*M)*F,t[12]=B*F,t[13]=(g*T*l-E*_*l+E*s*x-n*T*x-g*s*y+n*_*y)*F,t[14]=(E*h*l-f*T*l-E*s*p+n*T*p+f*s*y-n*h*y)*F,t[15]=(f*_*l-g*h*l+g*s*p-n*_*p-f*s*x+n*h*x)*F,this}scale(t){const n=this.elements,s=t.x,l=t.y,c=t.z;return n[0]*=s,n[4]*=l,n[8]*=c,n[1]*=s,n[5]*=l,n[9]*=c,n[2]*=s,n[6]*=l,n[10]*=c,n[3]*=s,n[7]*=l,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,s,l))}makeTranslation(t,n,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,s,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,n,-s,0,0,s,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,0,s,0,0,1,0,0,-s,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,-s,0,0,s,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const s=Math.cos(n),l=Math.sin(n),c=1-s,f=t.x,h=t.y,p=t.z,m=c*f,g=c*h;return this.set(m*f+s,m*h-l*p,m*p+l*h,0,m*h+l*p,g*h+s,g*p-l*f,0,m*p-l*h,g*p+l*f,c*p*p+s,0,0,0,0,1),this}makeScale(t,n,s){return this.set(t,0,0,0,0,n,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,n,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,n,l,1,0,0,0,0,1),this}compose(t,n,s){const l=this.elements,c=n._x,f=n._y,h=n._z,p=n._w,m=c+c,g=f+f,_=h+h,x=c*m,M=c*g,E=c*_,T=f*g,y=f*_,v=h*_,P=p*m,U=p*g,C=p*_,B=s.x,O=s.y,F=s.z;return l[0]=(1-(T+v))*B,l[1]=(M+C)*B,l[2]=(E-U)*B,l[3]=0,l[4]=(M-C)*O,l[5]=(1-(x+v))*O,l[6]=(y+P)*O,l[7]=0,l[8]=(E+U)*F,l[9]=(y-P)*F,l[10]=(1-(x+T))*F,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,n,s){const l=this.elements;let c=fr.set(l[0],l[1],l[2]).length();const f=fr.set(l[4],l[5],l[6]).length(),h=fr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],di.copy(this);const m=1/c,g=1/f,_=1/h;return di.elements[0]*=m,di.elements[1]*=m,di.elements[2]*=m,di.elements[4]*=g,di.elements[5]*=g,di.elements[6]*=g,di.elements[8]*=_,di.elements[9]*=_,di.elements[10]*=_,n.setFromRotationMatrix(di),s.x=c,s.y=f,s.z=h,this}makePerspective(t,n,s,l,c,f,h=Ci,p=!1){const m=this.elements,g=2*c/(n-t),_=2*c/(s-l),x=(n+t)/(n-t),M=(s+l)/(s-l);let E,T;if(p)E=c/(f-c),T=f*c/(f-c);else if(h===Ci)E=-(f+c)/(f-c),T=-2*f*c/(f-c);else if(h===Ac)E=-f/(f-c),T=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=g,m[4]=0,m[8]=x,m[12]=0,m[1]=0,m[5]=_,m[9]=M,m[13]=0,m[2]=0,m[6]=0,m[10]=E,m[14]=T,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,n,s,l,c,f,h=Ci,p=!1){const m=this.elements,g=2/(n-t),_=2/(s-l),x=-(n+t)/(n-t),M=-(s+l)/(s-l);let E,T;if(p)E=1/(f-c),T=f/(f-c);else if(h===Ci)E=-2/(f-c),T=-(f+c)/(f-c);else if(h===Ac)E=-1/(f-c),T=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=g,m[4]=0,m[8]=0,m[12]=x,m[1]=0,m[5]=_,m[9]=0,m[13]=M,m[2]=0,m[6]=0,m[10]=E,m[14]=T,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const n=this.elements,s=t.elements;for(let l=0;l<16;l++)if(n[l]!==s[l])return!1;return!0}fromArray(t,n=0){for(let s=0;s<16;s++)this.elements[s]=t[s+n];return this}toArray(t=[],n=0){const s=this.elements;return t[n]=s[0],t[n+1]=s[1],t[n+2]=s[2],t[n+3]=s[3],t[n+4]=s[4],t[n+5]=s[5],t[n+6]=s[6],t[n+7]=s[7],t[n+8]=s[8],t[n+9]=s[9],t[n+10]=s[10],t[n+11]=s[11],t[n+12]=s[12],t[n+13]=s[13],t[n+14]=s[14],t[n+15]=s[15],t}}const fr=new lt,di=new dn,Oy=new lt(0,0,0),Fy=new lt(1,1,1),Na=new lt,nc=new lt,Zn=new lt,L0=new dn,N0=new zo;let Es=class j_{constructor(t=0,n=0,s=0,l=j_.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,s,l=this._order){return this._x=t,this._y=n,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],h=l[8],p=l[1],m=l[5],g=l[9],_=l[2],x=l[6],M=l[10];switch(n){case"XYZ":this._y=Math.asin(Me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Me(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Me(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(Me(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Me(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,s){return L0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(L0,n,s)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return N0.setFromEuler(this),this.setFromQuaternion(N0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Es.DEFAULT_ORDER="XYZ";class Z_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Py=0;const O0=new lt,hr=new zo,Qi=new dn,ic=new lt,bo=new lt,zy=new lt,By=new zo,F0=new lt(1,0,0),P0=new lt(0,1,0),z0=new lt(0,0,1),B0={type:"added"},Iy={type:"removed"},dr={type:"childadded",child:null},ih={type:"childremoved",child:null};class Jn extends Cr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Py++}),this.uuid=Po(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jn.DEFAULT_UP.clone();const t=new lt,n=new Es,s=new zo,l=new lt(1,1,1);function c(){s.setFromEuler(n,!1)}function f(){n.setFromQuaternion(s,void 0,!1)}n._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new dn},normalMatrix:{value:new fe}}),this.matrix=new dn,this.matrixWorld=new dn,this.matrixAutoUpdate=Jn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Z_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return hr.setFromAxisAngle(t,n),this.quaternion.multiply(hr),this}rotateOnWorldAxis(t,n){return hr.setFromAxisAngle(t,n),this.quaternion.premultiply(hr),this}rotateX(t){return this.rotateOnAxis(F0,t)}rotateY(t){return this.rotateOnAxis(P0,t)}rotateZ(t){return this.rotateOnAxis(z0,t)}translateOnAxis(t,n){return O0.copy(t).applyQuaternion(this.quaternion),this.position.add(O0.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(F0,t)}translateY(t){return this.translateOnAxis(P0,t)}translateZ(t){return this.translateOnAxis(z0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(t,n,s){t.isVector3?ic.copy(t):ic.set(t,n,s);const l=this.parent;this.updateWorldMatrix(!0,!1),bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(bo,ic,this.up):Qi.lookAt(ic,bo,this.up),this.quaternion.setFromRotationMatrix(Qi),l&&(Qi.extractRotation(l.matrixWorld),hr.setFromRotationMatrix(Qi),this.quaternion.premultiply(hr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(B0),dr.child=t,this.dispatchEvent(dr),dr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(Iy),ih.child=t,this.dispatchEvent(ih),ih.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(B0),dr.child=t,this.dispatchEvent(dr),dr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,n);if(f!==void 0)return f}}getObjectsByProperty(t,n,s=[]){this[t]===n&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,n,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,t,zy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,By,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let s=0,l=n.length;s<l;s++)n[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let s=0,l=n.length;s<l;s++)n[s].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let s=0,l=n.length;s<l;s++)n[s].updateMatrixWorld(t)}updateWorldMatrix(t,n){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",s={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const _=p[m];c(t.shapes,_)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(c(t.materials,this.material[p]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(c(t.animations,p))}}if(n){const h=f(t.geometries),p=f(t.materials),m=f(t.textures),g=f(t.images),_=f(t.shapes),x=f(t.skeletons),M=f(t.animations),E=f(t.nodes);h.length>0&&(s.geometries=h),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),x.length>0&&(s.skeletons=x),M.length>0&&(s.animations=M),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(h){const p=[];for(const m in h){const g=h[m];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Jn.DEFAULT_UP=new lt(0,1,0);Jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pi=new lt,Ji=new lt,ah=new lt,$i=new lt,pr=new lt,mr=new lt,I0=new lt,sh=new lt,rh=new lt,oh=new lt,lh=new $e,ch=new $e,uh=new $e;class gi{constructor(t=new lt,n=new lt,s=new lt){this.a=t,this.b=n,this.c=s}static getNormal(t,n,s,l){l.subVectors(s,n),pi.subVectors(t,n),l.cross(pi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,n,s,l,c){pi.subVectors(l,n),Ji.subVectors(s,n),ah.subVectors(t,n);const f=pi.dot(pi),h=pi.dot(Ji),p=pi.dot(ah),m=Ji.dot(Ji),g=Ji.dot(ah),_=f*m-h*h;if(_===0)return c.set(0,0,0),null;const x=1/_,M=(m*p-h*g)*x,E=(f*g-h*p)*x;return c.set(1-M-E,E,M)}static containsPoint(t,n,s,l){return this.getBarycoord(t,n,s,l,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(t,n,s,l,c,f,h,p){return this.getBarycoord(t,n,s,l,$i)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,$i.x),p.addScaledVector(f,$i.y),p.addScaledVector(h,$i.z),p)}static getInterpolatedAttribute(t,n,s,l,c,f){return lh.setScalar(0),ch.setScalar(0),uh.setScalar(0),lh.fromBufferAttribute(t,n),ch.fromBufferAttribute(t,s),uh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(lh,c.x),f.addScaledVector(ch,c.y),f.addScaledVector(uh,c.z),f}static isFrontFacing(t,n,s,l){return pi.subVectors(s,n),Ji.subVectors(t,n),pi.cross(Ji).dot(l)<0}set(t,n,s){return this.a.copy(t),this.b.copy(n),this.c.copy(s),this}setFromPointsAndIndices(t,n,s,l){return this.a.copy(t[n]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,n,s,l){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pi.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),pi.cross(Ji).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return gi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return gi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,s,l,c){return gi.getInterpolation(t,this.a,this.b,this.c,n,s,l,c)}containsPoint(t){return gi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return gi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const s=this.a,l=this.b,c=this.c;let f,h;pr.subVectors(l,s),mr.subVectors(c,s),sh.subVectors(t,s);const p=pr.dot(sh),m=mr.dot(sh);if(p<=0&&m<=0)return n.copy(s);rh.subVectors(t,l);const g=pr.dot(rh),_=mr.dot(rh);if(g>=0&&_<=g)return n.copy(l);const x=p*_-g*m;if(x<=0&&p>=0&&g<=0)return f=p/(p-g),n.copy(s).addScaledVector(pr,f);oh.subVectors(t,c);const M=pr.dot(oh),E=mr.dot(oh);if(E>=0&&M<=E)return n.copy(c);const T=M*m-p*E;if(T<=0&&m>=0&&E<=0)return h=m/(m-E),n.copy(s).addScaledVector(mr,h);const y=g*E-M*_;if(y<=0&&_-g>=0&&M-E>=0)return I0.subVectors(c,l),h=(_-g)/(_-g+(M-E)),n.copy(l).addScaledVector(I0,h);const v=1/(y+T+x);return f=T*v,h=x*v,n.copy(s).addScaledVector(pr,f).addScaledVector(mr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const K_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oa={h:0,s:0,l:0},ac={h:0,s:0,l:0};function fh(a,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?a+(t-a)*6*n:n<1/2?t:n<2/3?a+(t-a)*6*(2/3-n):a}class Ge{constructor(t,n,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,s)}set(t,n,s){if(n===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,n,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Qn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.colorSpaceToWorking(this,n),this}setRGB(t,n,s,l=we.workingColorSpace){return this.r=t,this.g=n,this.b=s,we.colorSpaceToWorking(this,l),this}setHSL(t,n,s,l=we.workingColorSpace){if(t=Ey(t,1),n=Me(n,0,1),s=Me(s,0,1),n===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+n):s+n-s*n,f=2*s-c;this.r=fh(f,c,t+1/3),this.g=fh(f,c,t),this.b=fh(f,c,t-1/3)}return we.colorSpaceToWorking(this,l),this}setStyle(t,n=Qn){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Qn){const s=K_[t.toLowerCase()];return s!==void 0?this.setHex(s,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ia(t.r),this.g=ia(t.g),this.b=ia(t.b),this}copyLinearToSRGB(t){return this.r=Mr(t.r),this.g=Mr(t.g),this.b=Mr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qn){return we.workingToColorSpace(Cn.copy(this),t),Math.round(Me(Cn.r*255,0,255))*65536+Math.round(Me(Cn.g*255,0,255))*256+Math.round(Me(Cn.b*255,0,255))}getHexString(t=Qn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=we.workingColorSpace){we.workingToColorSpace(Cn.copy(this),n);const s=Cn.r,l=Cn.g,c=Cn.b,f=Math.max(s,l,c),h=Math.min(s,l,c);let p,m;const g=(h+f)/2;if(h===f)p=0,m=0;else{const _=f-h;switch(m=g<=.5?_/(f+h):_/(2-f-h),f){case s:p=(l-c)/_+(l<c?6:0);break;case l:p=(c-s)/_+2;break;case c:p=(s-l)/_+4;break}p/=6}return t.h=p,t.s=m,t.l=g,t}getRGB(t,n=we.workingColorSpace){return we.workingToColorSpace(Cn.copy(this),n),t.r=Cn.r,t.g=Cn.g,t.b=Cn.b,t}getStyle(t=Qn){we.workingToColorSpace(Cn.copy(this),t);const n=Cn.r,s=Cn.g,l=Cn.b;return t!==Qn?`color(${t} ${n.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,n,s){return this.getHSL(Oa),this.setHSL(Oa.h+t,Oa.s+n,Oa.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,s){return this.r=t.r+(n.r-t.r)*s,this.g=t.g+(n.g-t.g)*s,this.b=t.b+(n.b-t.b)*s,this}lerpHSL(t,n){this.getHSL(Oa),t.getHSL(ac);const s=Yf(Oa.h,ac.h,n),l=Yf(Oa.s,ac.s,n),c=Yf(Oa.l,ac.l,n);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*n+c[3]*s+c[6]*l,this.g=c[1]*n+c[4]*s+c[7]*l,this.b=c[2]*n+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new Ge;Ge.NAMES=K_;let Hy=0;class Cc extends Cr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hy++}),this.uuid=Po(),this.name="",this.type="Material",this.blending=xs,this.side=Ha,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rh,this.blendDst=Ch,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=A0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rr,this.stencilZFail=rr,this.stencilZPass=rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const s=t[n];if(s===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[n]=s}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(s.blending=this.blending),this.side!==Ha&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Rh&&(s.blendSrc=this.blendSrc),this.blendDst!==Ch&&(s.blendDst=this.blendDst),this.blendEquation!==ms&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Er&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==A0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==rr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==rr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const h in c){const p=c[h];delete p.metadata,f.push(p)}return f}if(n){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let s=null;if(n!==null){const l=n.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=n[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Q_ extends Cc{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Es,this.combine=F_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const cn=new lt,sc=new Ne;let Gy=0;class xi{constructor(t,n,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gy++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=s,this.usage=b0,this.updateRanges=[],this.gpuType=na,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,s){t*=this.itemSize,s*=n.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=n.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,s=this.count;n<s;n++)sc.fromBufferAttribute(this,n),sc.applyMatrix3(t),this.setXY(n,sc.x,sc.y);else if(this.itemSize===3)for(let n=0,s=this.count;n<s;n++)cn.fromBufferAttribute(this,n),cn.applyMatrix3(t),this.setXYZ(n,cn.x,cn.y,cn.z);return this}applyMatrix4(t){for(let n=0,s=this.count;n<s;n++)cn.fromBufferAttribute(this,n),cn.applyMatrix4(t),this.setXYZ(n,cn.x,cn.y,cn.z);return this}applyNormalMatrix(t){for(let n=0,s=this.count;n<s;n++)cn.fromBufferAttribute(this,n),cn.applyNormalMatrix(t),this.setXYZ(n,cn.x,cn.y,cn.z);return this}transformDirection(t){for(let n=0,s=this.count;n<s;n++)cn.fromBufferAttribute(this,n),cn.transformDirection(t),this.setXYZ(n,cn.x,cn.y,cn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let s=this.array[t*this.itemSize+n];return this.normalized&&(s=Eo(s,this.array)),s}setComponent(t,n,s){return this.normalized&&(s=In(s,this.array)),this.array[t*this.itemSize+n]=s,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Eo(n,this.array)),n}setX(t,n){return this.normalized&&(n=In(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Eo(n,this.array)),n}setY(t,n){return this.normalized&&(n=In(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Eo(n,this.array)),n}setZ(t,n){return this.normalized&&(n=In(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Eo(n,this.array)),n}setW(t,n){return this.normalized&&(n=In(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,s){return t*=this.itemSize,this.normalized&&(n=In(n,this.array),s=In(s,this.array)),this.array[t+0]=n,this.array[t+1]=s,this}setXYZ(t,n,s,l){return t*=this.itemSize,this.normalized&&(n=In(n,this.array),s=In(s,this.array),l=In(l,this.array)),this.array[t+0]=n,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,n,s,l,c){return t*=this.itemSize,this.normalized&&(n=In(n,this.array),s=In(s,this.array),l=In(l,this.array),c=In(c,this.array)),this.array[t+0]=n,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==b0&&(t.usage=this.usage),t}}class J_ extends xi{constructor(t,n,s){super(new Uint16Array(t),n,s)}}class $_ extends xi{constructor(t,n,s){super(new Uint32Array(t),n,s)}}class Ss extends xi{constructor(t,n,s){super(new Float32Array(t),n,s)}}let Vy=0;const li=new dn,hh=new Jn,gr=new lt,Kn=new Bo,Ro=new Bo,vn=new lt;class Ga extends Cr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vy++}),this.uuid=Po(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(q_(t)?$_:J_)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,s=0){this.groups.push({start:t,count:n,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new fe().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return li.makeRotationFromQuaternion(t),this.applyMatrix4(li),this}rotateX(t){return li.makeRotationX(t),this.applyMatrix4(li),this}rotateY(t){return li.makeRotationY(t),this.applyMatrix4(li),this}rotateZ(t){return li.makeRotationZ(t),this.applyMatrix4(li),this}translate(t,n,s){return li.makeTranslation(t,n,s),this.applyMatrix4(li),this}scale(t,n,s){return li.makeScale(t,n,s),this.applyMatrix4(li),this}lookAt(t){return hh.lookAt(t),hh.updateMatrix(),this.applyMatrix4(hh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gr).negate(),this.translate(gr.x,gr.y,gr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Ss(s,3))}else{const s=Math.min(t.length,n.count);for(let l=0;l<s;l++){const c=t[l];n.setXYZ(l,c.x,c.y,c.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bo);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new lt(-1/0,-1/0,-1/0),new lt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let s=0,l=n.length;s<l;s++){const c=n[s];Kn.setFromBufferAttribute(c),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rd);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new lt,1/0);return}if(t){const s=this.boundingSphere.center;if(Kn.setFromBufferAttribute(t),n)for(let c=0,f=n.length;c<f;c++){const h=n[c];Ro.setFromBufferAttribute(h),this.morphTargetsRelative?(vn.addVectors(Kn.min,Ro.min),Kn.expandByPoint(vn),vn.addVectors(Kn.max,Ro.max),Kn.expandByPoint(vn)):(Kn.expandByPoint(Ro.min),Kn.expandByPoint(Ro.max))}Kn.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)vn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(vn));if(n)for(let c=0,f=n.length;c<f;c++){const h=n[c],p=this.morphTargetsRelative;for(let m=0,g=h.count;m<g;m++)vn.fromBufferAttribute(h,m),p&&(gr.fromBufferAttribute(t,m),vn.add(gr)),l=Math.max(l,s.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=n.position,l=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xi(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),h=[],p=[];for(let q=0;q<s.count;q++)h[q]=new lt,p[q]=new lt;const m=new lt,g=new lt,_=new lt,x=new Ne,M=new Ne,E=new Ne,T=new lt,y=new lt;function v(q,D,w){m.fromBufferAttribute(s,q),g.fromBufferAttribute(s,D),_.fromBufferAttribute(s,w),x.fromBufferAttribute(c,q),M.fromBufferAttribute(c,D),E.fromBufferAttribute(c,w),g.sub(m),_.sub(m),M.sub(x),E.sub(x);const G=1/(M.x*E.y-E.x*M.y);isFinite(G)&&(T.copy(g).multiplyScalar(E.y).addScaledVector(_,-M.y).multiplyScalar(G),y.copy(_).multiplyScalar(M.x).addScaledVector(g,-E.x).multiplyScalar(G),h[q].add(T),h[D].add(T),h[w].add(T),p[q].add(y),p[D].add(y),p[w].add(y))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let q=0,D=P.length;q<D;++q){const w=P[q],G=w.start,Z=w.count;for(let J=G,Q=G+Z;J<Q;J+=3)v(t.getX(J+0),t.getX(J+1),t.getX(J+2))}const U=new lt,C=new lt,B=new lt,O=new lt;function F(q){B.fromBufferAttribute(l,q),O.copy(B);const D=h[q];U.copy(D),U.sub(B.multiplyScalar(B.dot(D))).normalize(),C.crossVectors(O,D);const G=C.dot(p[q])<0?-1:1;f.setXYZW(q,U.x,U.y,U.z,G)}for(let q=0,D=P.length;q<D;++q){const w=P[q],G=w.start,Z=w.count;for(let J=G,Q=G+Z;J<Q;J+=3)F(t.getX(J+0)),F(t.getX(J+1)),F(t.getX(J+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new xi(new Float32Array(n.count*3),3),this.setAttribute("normal",s);else for(let x=0,M=s.count;x<M;x++)s.setXYZ(x,0,0,0);const l=new lt,c=new lt,f=new lt,h=new lt,p=new lt,m=new lt,g=new lt,_=new lt;if(t)for(let x=0,M=t.count;x<M;x+=3){const E=t.getX(x+0),T=t.getX(x+1),y=t.getX(x+2);l.fromBufferAttribute(n,E),c.fromBufferAttribute(n,T),f.fromBufferAttribute(n,y),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),h.fromBufferAttribute(s,E),p.fromBufferAttribute(s,T),m.fromBufferAttribute(s,y),h.add(g),p.add(g),m.add(g),s.setXYZ(E,h.x,h.y,h.z),s.setXYZ(T,p.x,p.y,p.z),s.setXYZ(y,m.x,m.y,m.z)}else for(let x=0,M=n.count;x<M;x+=3)l.fromBufferAttribute(n,x+0),c.fromBufferAttribute(n,x+1),f.fromBufferAttribute(n,x+2),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),s.setXYZ(x+0,g.x,g.y,g.z),s.setXYZ(x+1,g.x,g.y,g.z),s.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,s=t.count;n<s;n++)vn.fromBufferAttribute(t,n),vn.normalize(),t.setXYZ(n,vn.x,vn.y,vn.z)}toNonIndexed(){function t(h,p){const m=h.array,g=h.itemSize,_=h.normalized,x=new m.constructor(p.length*g);let M=0,E=0;for(let T=0,y=p.length;T<y;T++){h.isInterleavedBufferAttribute?M=p[T]*h.data.stride+h.offset:M=p[T]*g;for(let v=0;v<g;v++)x[E++]=m[M++]}return new xi(x,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ga,s=this.index.array,l=this.attributes;for(const h in l){const p=l[h],m=t(p,s);n.setAttribute(h,m)}const c=this.morphAttributes;for(const h in c){const p=[],m=c[h];for(let g=0,_=m.length;g<_;g++){const x=m[g],M=t(x,s);p.push(M)}n.morphAttributes[h]=p}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,p=f.length;h<p;h++){const m=f[h];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const s=this.attributes;for(const p in s){const m=s[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let _=0,x=m.length;_<x;_++){const M=m[_];g.push(M.toJSON(t.data))}g.length>0&&(l[p]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(n))}const c=t.morphAttributes;for(const m in c){const g=[],_=c[m];for(let x=0,M=_.length;x<M;x++)g.push(_[x].clone(n));this.morphAttributes[m]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let m=0,g=f.length;m<g;m++){const _=f[m];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const H0=new dn,cs=new Ny,rc=new Rd,G0=new lt,oc=new lt,lc=new lt,cc=new lt,dh=new lt,uc=new lt,V0=new lt,fc=new lt;let wi=class extends Jn{constructor(t=new Ga,n=new Q_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const l=n[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,n){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;n.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){uc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const g=h[p],_=c[p];g!==0&&(dh.fromBufferAttribute(_,t),f?uc.addScaledVector(dh,g):uc.addScaledVector(dh.sub(n),g))}n.add(uc)}return n}raycast(t,n){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),rc.copy(s.boundingSphere),rc.applyMatrix4(c),cs.copy(t.ray).recast(t.near),!(rc.containsPoint(cs.origin)===!1&&(cs.intersectSphere(rc,G0)===null||cs.origin.distanceToSquared(G0)>(t.far-t.near)**2))&&(H0.copy(c).invert(),cs.copy(t.ray).applyMatrix4(H0),!(s.boundingBox!==null&&cs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,n,cs)))}_computeIntersections(t,n,s){let l;const c=this.geometry,f=this.material,h=c.index,p=c.attributes.position,m=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,x=c.groups,M=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,T=x.length;E<T;E++){const y=x[E],v=f[y.materialIndex],P=Math.max(y.start,M.start),U=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let C=P,B=U;C<B;C+=3){const O=h.getX(C),F=h.getX(C+1),q=h.getX(C+2);l=hc(this,v,t,s,m,g,_,O,F,q),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=y.materialIndex,n.push(l))}}else{const E=Math.max(0,M.start),T=Math.min(h.count,M.start+M.count);for(let y=E,v=T;y<v;y+=3){const P=h.getX(y),U=h.getX(y+1),C=h.getX(y+2);l=hc(this,f,t,s,m,g,_,P,U,C),l&&(l.faceIndex=Math.floor(y/3),n.push(l))}}else if(p!==void 0)if(Array.isArray(f))for(let E=0,T=x.length;E<T;E++){const y=x[E],v=f[y.materialIndex],P=Math.max(y.start,M.start),U=Math.min(p.count,Math.min(y.start+y.count,M.start+M.count));for(let C=P,B=U;C<B;C+=3){const O=C,F=C+1,q=C+2;l=hc(this,v,t,s,m,g,_,O,F,q),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=y.materialIndex,n.push(l))}}else{const E=Math.max(0,M.start),T=Math.min(p.count,M.start+M.count);for(let y=E,v=T;y<v;y+=3){const P=y,U=y+1,C=y+2;l=hc(this,f,t,s,m,g,_,P,U,C),l&&(l.faceIndex=Math.floor(y/3),n.push(l))}}}};function Xy(a,t,n,s,l,c,f,h){let p;if(t.side===Hn?p=s.intersectTriangle(f,c,l,!0,h):p=s.intersectTriangle(l,c,f,t.side===Ha,h),p===null)return null;fc.copy(h),fc.applyMatrix4(a.matrixWorld);const m=n.ray.origin.distanceTo(fc);return m<n.near||m>n.far?null:{distance:m,point:fc.clone(),object:a}}function hc(a,t,n,s,l,c,f,h,p,m){a.getVertexPosition(h,oc),a.getVertexPosition(p,lc),a.getVertexPosition(m,cc);const g=Xy(a,t,n,s,oc,lc,cc,V0);if(g){const _=new lt;gi.getBarycoord(V0,oc,lc,cc,_),l&&(g.uv=gi.getInterpolatedAttribute(l,h,p,m,_,new Ne)),c&&(g.uv1=gi.getInterpolatedAttribute(c,h,p,m,_,new Ne)),f&&(g.normal=gi.getInterpolatedAttribute(f,h,p,m,_,new lt),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:h,b:p,c:m,normal:new lt,materialIndex:0};gi.getNormal(oc,lc,cc,x.normal),g.face=x,g.barycoord=_}return g}class Io extends Ga{constructor(t=1,n=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const p=[],m=[],g=[],_=[];let x=0,M=0;E("z","y","x",-1,-1,s,n,t,f,c,0),E("z","y","x",1,-1,s,n,-t,f,c,1),E("x","z","y",1,1,t,s,n,l,f,2),E("x","z","y",1,-1,t,s,-n,l,f,3),E("x","y","z",1,-1,t,n,s,l,c,4),E("x","y","z",-1,-1,t,n,-s,l,c,5),this.setIndex(p),this.setAttribute("position",new Ss(m,3)),this.setAttribute("normal",new Ss(g,3)),this.setAttribute("uv",new Ss(_,2));function E(T,y,v,P,U,C,B,O,F,q,D){const w=C/F,G=B/q,Z=C/2,J=B/2,Q=O/2,st=F+1,z=q+1;let V=0,X=0;const ft=new lt;for(let yt=0;yt<z;yt++){const N=yt*G-J;for(let nt=0;nt<st;nt++){const xt=nt*w-Z;ft[T]=xt*P,ft[y]=N*U,ft[v]=Q,m.push(ft.x,ft.y,ft.z),ft[T]=0,ft[y]=0,ft[v]=O>0?1:-1,g.push(ft.x,ft.y,ft.z),_.push(nt/F),_.push(1-yt/q),V+=1}}for(let yt=0;yt<q;yt++)for(let N=0;N<F;N++){const nt=x+N+st*yt,xt=x+N+st*(yt+1),At=x+(N+1)+st*(yt+1),Nt=x+(N+1)+st*yt;p.push(nt,xt,Nt),p.push(xt,At,Nt),X+=6}h.addGroup(M,X,D),M+=X,x+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Io(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Rr(a){const t={};for(const n in a){t[n]={};for(const s in a[n]){const l=a[n][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][s]=null):t[n][s]=l.clone():Array.isArray(l)?t[n][s]=l.slice():t[n][s]=l}}return t}function Ln(a){const t={};for(let n=0;n<a.length;n++){const s=Rr(a[n]);for(const l in s)t[l]=s[l]}return t}function ky(a){const t=[];for(let n=0;n<a.length;n++)t.push(a[n].clone());return t}function tv(a){const t=a.getRenderTarget();return t===null?a.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}const Wy={clone:Rr,merge:Ln};var qy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sa extends Cc{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qy,this.fragmentShader=Yy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rr(t.uniforms),this.uniformsGroups=ky(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?n.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?n.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[l]={type:"m4",value:f.toArray()}:n.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(n.extensions=s),n}}let ev=class extends Jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dn,this.projectionMatrix=new dn,this.projectionMatrixInverse=new dn,this.coordinateSystem=Ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const Fa=new lt,X0=new Ne,k0=new Ne;class mi extends ev{constructor(t=50,n=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=pd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(qf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return pd*2*Math.atan(Math.tan(qf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,s){Fa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fa.x,Fa.y).multiplyScalar(-t/Fa.z),Fa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Fa.x,Fa.y).multiplyScalar(-t/Fa.z)}getViewSize(t,n){return this.getViewBounds(t,X0,k0),n.subVectors(k0,X0)}setViewOffset(t,n,s,l,c,f){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(qf*.5*this.fov)/this.zoom,s=2*n,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;c+=f.offsetX*l/p,n-=f.offsetY*s/m,l*=f.width/p,s*=f.height/m}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,n,n-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const _r=-90,vr=1;class jy extends Jn{constructor(t,n,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new mi(_r,vr,t,n);l.layers=this.layers,this.add(l);const c=new mi(_r,vr,t,n);c.layers=this.layers,this.add(c);const f=new mi(_r,vr,t,n);f.layers=this.layers,this.add(f);const h=new mi(_r,vr,t,n);h.layers=this.layers,this.add(h);const p=new mi(_r,vr,t,n);p.layers=this.layers,this.add(p);const m=new mi(_r,vr,t,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[s,l,c,f,h,p]=n;for(const m of n)this.remove(m);if(t===Ci)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Ac)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of n)this.add(m),m.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,p,m,g]=this.children,_=t.getRenderTarget(),x=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(n,c),t.setRenderTarget(s,1,l),t.render(n,f),t.setRenderTarget(s,2,l),t.render(n,h),t.setRenderTarget(s,3,l),t.render(n,p),t.setRenderTarget(s,4,l),t.render(n,m),s.texture.generateMipmaps=T,t.setRenderTarget(s,5,l),t.render(n,g),t.setRenderTarget(_,x,M),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class nv extends Di{constructor(t=[],n=Tr,s,l,c,f,h,p,m,g){super(t,n,s,l,c,f,h,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Zy extends Ms{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new nv(l),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Io(5,5,5),c=new sa({name:"CubemapFromEquirect",uniforms:Rr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Hn,blending:za});c.uniforms.tEquirect.value=n;const f=new wi(l,c),h=n.minFilter;return n.minFilter===vs&&(n.minFilter=Ri),new jy(1,10,this).update(t,f),n.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,n=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(n,s,l);t.setRenderTarget(c)}}class dc extends Jn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ky={type:"move"};class ph{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new lt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new lt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new lt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new lt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const s of t.hand.values())this._getHandJoint(n,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,s){let l=null,c=null,f=null;const h=this._targetRay,p=this._grip,m=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(m&&t.hand){f=!0;for(const T of t.hand.values()){const y=n.getJointPose(T,s),v=this._getHandJoint(m,T);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const g=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],x=g.position.distanceTo(_.position),M=.02,E=.005;m.inputState.pinching&&x>M+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&x<=M-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,s),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(l=n.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Ky)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const s=new dc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[n.jointName]=s,t.add(s)}return t.joints[n.jointName]}}class Qy extends Jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Es,this.environmentIntensity=1,this.environmentRotation=new Es,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const mh=new lt,Jy=new lt,$y=new fe;let ds=class{constructor(t=new lt(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,s,l){return this.normal.set(t,n,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,s){const l=mh.subVectors(s,n).cross(Jy.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const s=t.delta(mh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:n.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return n<0&&s>0||s<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const s=n||$y.getNormalMatrix(t),l=this.coplanarPoint(mh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const us=new Rd,tM=new Ne(.5,.5),pc=new lt;class iv{constructor(t=new ds,n=new ds,s=new ds,l=new ds,c=new ds,f=new ds){this.planes=[t,n,s,l,c,f]}set(t,n,s,l,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(n),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(t){const n=this.planes;for(let s=0;s<6;s++)n[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,n=Ci,s=!1){const l=this.planes,c=t.elements,f=c[0],h=c[1],p=c[2],m=c[3],g=c[4],_=c[5],x=c[6],M=c[7],E=c[8],T=c[9],y=c[10],v=c[11],P=c[12],U=c[13],C=c[14],B=c[15];if(l[0].setComponents(m-f,M-g,v-E,B-P).normalize(),l[1].setComponents(m+f,M+g,v+E,B+P).normalize(),l[2].setComponents(m+h,M+_,v+T,B+U).normalize(),l[3].setComponents(m-h,M-_,v-T,B-U).normalize(),s)l[4].setComponents(p,x,y,C).normalize(),l[5].setComponents(m-p,M-x,v-y,B-C).normalize();else if(l[4].setComponents(m-p,M-x,v-y,B-C).normalize(),n===Ci)l[5].setComponents(m+p,M+x,v+y,B+C).normalize();else if(n===Ac)l[5].setComponents(p,x,y,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),us.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(t){us.center.set(0,0,0);const n=tM.distanceTo(t.center);return us.radius=.7071067811865476+n,us.applyMatrix4(t.matrixWorld),this.intersectsSphere(us)}intersectsSphere(t){const n=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const n=this.planes;for(let s=0;s<6;s++){const l=n[s];if(pc.x=l.normal.x>0?t.max.x:t.min.x,pc.y=l.normal.y>0?t.max.y:t.min.y,pc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(pc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let s=0;s<6;s++)if(n[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class av extends Di{constructor(t,n,s=ys,l,c,f,h=vi,p=vi,m,g=Lo,_=1){if(g!==Lo&&g!==No)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:n,depth:_};super(x,l,c,f,h,p,g,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new bd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class sv extends Di{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class wc extends Ga{constructor(t=1,n=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:s,heightSegments:l};const c=t/2,f=n/2,h=Math.floor(s),p=Math.floor(l),m=h+1,g=p+1,_=t/h,x=n/p,M=[],E=[],T=[],y=[];for(let v=0;v<g;v++){const P=v*x-f;for(let U=0;U<m;U++){const C=U*_-c;E.push(C,-P,0),T.push(0,0,1),y.push(U/h),y.push(1-v/p)}}for(let v=0;v<p;v++)for(let P=0;P<h;P++){const U=P+m*v,C=P+m*(v+1),B=P+1+m*(v+1),O=P+1+m*v;M.push(U,C,O),M.push(C,B,O)}this.setIndex(M),this.setAttribute("position",new Ss(E,3)),this.setAttribute("normal",new Ss(T,3)),this.setAttribute("uv",new Ss(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wc(t.width,t.height,t.widthSegments,t.heightSegments)}}class eM extends sa{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class nM extends Cc{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class iM extends Cc{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class rv extends ev{constructor(t=-1,n=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,h=l+n,p=l-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,f=c+m*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class aM extends mi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class sM{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}function W0(a,t,n,s){const l=rM(s);switch(n){case G_:return a*t;case X_:return a*t/l.components*l.byteLength;case Ed:return a*t/l.components*l.byteLength;case k_:return a*t*2/l.components*l.byteLength;case Td:return a*t*2/l.components*l.byteLength;case V_:return a*t*3/l.components*l.byteLength;case _i:return a*t*4/l.components*l.byteLength;case Ad:return a*t*4/l.components*l.byteLength;case vc:case xc:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*8;case Sc:case yc:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case Gh:case Xh:return Math.max(a,16)*Math.max(t,8)/4;case Hh:case Vh:return Math.max(a,8)*Math.max(t,8)/2;case kh:case Wh:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*8;case qh:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case Yh:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case jh:return Math.floor((a+4)/5)*Math.floor((t+3)/4)*16;case Zh:return Math.floor((a+4)/5)*Math.floor((t+4)/5)*16;case Kh:return Math.floor((a+5)/6)*Math.floor((t+4)/5)*16;case Qh:return Math.floor((a+5)/6)*Math.floor((t+5)/6)*16;case Jh:return Math.floor((a+7)/8)*Math.floor((t+4)/5)*16;case $h:return Math.floor((a+7)/8)*Math.floor((t+5)/6)*16;case td:return Math.floor((a+7)/8)*Math.floor((t+7)/8)*16;case ed:return Math.floor((a+9)/10)*Math.floor((t+4)/5)*16;case nd:return Math.floor((a+9)/10)*Math.floor((t+5)/6)*16;case id:return Math.floor((a+9)/10)*Math.floor((t+7)/8)*16;case ad:return Math.floor((a+9)/10)*Math.floor((t+9)/10)*16;case sd:return Math.floor((a+11)/12)*Math.floor((t+9)/10)*16;case rd:return Math.floor((a+11)/12)*Math.floor((t+11)/12)*16;case od:case ld:case cd:return Math.ceil(a/4)*Math.ceil(t/4)*16;case ud:case fd:return Math.ceil(a/4)*Math.ceil(t/4)*8;case hd:case dd:return Math.ceil(a/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function rM(a){switch(a){case aa:case z_:return{byteLength:1,components:1};case Do:case B_:case Fo:return{byteLength:2,components:1};case yd:case Md:return{byteLength:2,components:4};case ys:case Sd:case na:return{byteLength:4,components:1};case I_:case H_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ov(){let a=null,t=!1,n=null,s=null;function l(c,f){n(c,f),s=a.requestAnimationFrame(l)}return{start:function(){t!==!0&&n!==null&&(s=a.requestAnimationFrame(l),t=!0)},stop:function(){a.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){a=c}}}function oM(a){const t=new WeakMap;function n(h,p){const m=h.array,g=h.usage,_=m.byteLength,x=a.createBuffer();a.bindBuffer(p,x),a.bufferData(p,m,g),h.onUploadCallback();let M;if(m instanceof Float32Array)M=a.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)M=a.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?M=a.HALF_FLOAT:M=a.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=a.SHORT;else if(m instanceof Uint32Array)M=a.UNSIGNED_INT;else if(m instanceof Int32Array)M=a.INT;else if(m instanceof Int8Array)M=a.BYTE;else if(m instanceof Uint8Array)M=a.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:_}}function s(h,p,m){const g=p.array,_=p.updateRanges;if(a.bindBuffer(m,h),_.length===0)a.bufferSubData(m,0,g);else{_.sort((M,E)=>M.start-E.start);let x=0;for(let M=1;M<_.length;M++){const E=_[x],T=_[M];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++x,_[x]=T)}_.length=x+1;for(let M=0,E=_.length;M<E;M++){const T=_[M];a.bufferSubData(m,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=t.get(h);p&&(a.deleteBuffer(p.buffer),t.delete(h))}function f(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=t.get(h);if(m===void 0)t.set(h,n(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,h,p),m.version=h.version}}return{get:l,remove:c,update:f}}var lM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,uM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,_M=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,SM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,yM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,MM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,EM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,TM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,AM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,RM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,CM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,DM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,UM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,LM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,NM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,OM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,FM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,PM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,BM="gl_FragColor = linearToOutputTexel( gl_FragColor );",IM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,HM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,GM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,VM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,XM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,WM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,YM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ZM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,KM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,QM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,JM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$M=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,tE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,eE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,aE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,rE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,oE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_E=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,SE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ME=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,EE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,TE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,RE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,DE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,UE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,LE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,NE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,OE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,FE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,PE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,zE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,BE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,IE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,HE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,GE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,VE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,XE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,kE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,WE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,YE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ZE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,KE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,QE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,JE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$E=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,t1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,e1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,n1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,i1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,a1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,s1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,r1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const o1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,l1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,p1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,m1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,g1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,v1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,S1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,y1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,M1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,b1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,C1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,w1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,D1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,L1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,P1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,z1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,I1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,H1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,he={alphahash_fragment:lM,alphahash_pars_fragment:cM,alphamap_fragment:uM,alphamap_pars_fragment:fM,alphatest_fragment:hM,alphatest_pars_fragment:dM,aomap_fragment:pM,aomap_pars_fragment:mM,batching_pars_vertex:gM,batching_vertex:_M,begin_vertex:vM,beginnormal_vertex:xM,bsdfs:SM,iridescence_fragment:yM,bumpmap_pars_fragment:MM,clipping_planes_fragment:EM,clipping_planes_pars_fragment:TM,clipping_planes_pars_vertex:AM,clipping_planes_vertex:bM,color_fragment:RM,color_pars_fragment:CM,color_pars_vertex:wM,color_vertex:DM,common:UM,cube_uv_reflection_fragment:LM,defaultnormal_vertex:NM,displacementmap_pars_vertex:OM,displacementmap_vertex:FM,emissivemap_fragment:PM,emissivemap_pars_fragment:zM,colorspace_fragment:BM,colorspace_pars_fragment:IM,envmap_fragment:HM,envmap_common_pars_fragment:GM,envmap_pars_fragment:VM,envmap_pars_vertex:XM,envmap_physical_pars_fragment:tE,envmap_vertex:kM,fog_vertex:WM,fog_pars_vertex:qM,fog_fragment:YM,fog_pars_fragment:jM,gradientmap_pars_fragment:ZM,lightmap_pars_fragment:KM,lights_lambert_fragment:QM,lights_lambert_pars_fragment:JM,lights_pars_begin:$M,lights_toon_fragment:eE,lights_toon_pars_fragment:nE,lights_phong_fragment:iE,lights_phong_pars_fragment:aE,lights_physical_fragment:sE,lights_physical_pars_fragment:rE,lights_fragment_begin:oE,lights_fragment_maps:lE,lights_fragment_end:cE,logdepthbuf_fragment:uE,logdepthbuf_pars_fragment:fE,logdepthbuf_pars_vertex:hE,logdepthbuf_vertex:dE,map_fragment:pE,map_pars_fragment:mE,map_particle_fragment:gE,map_particle_pars_fragment:_E,metalnessmap_fragment:vE,metalnessmap_pars_fragment:xE,morphinstance_vertex:SE,morphcolor_vertex:yE,morphnormal_vertex:ME,morphtarget_pars_vertex:EE,morphtarget_vertex:TE,normal_fragment_begin:AE,normal_fragment_maps:bE,normal_pars_fragment:RE,normal_pars_vertex:CE,normal_vertex:wE,normalmap_pars_fragment:DE,clearcoat_normal_fragment_begin:UE,clearcoat_normal_fragment_maps:LE,clearcoat_pars_fragment:NE,iridescence_pars_fragment:OE,opaque_fragment:FE,packing:PE,premultiplied_alpha_fragment:zE,project_vertex:BE,dithering_fragment:IE,dithering_pars_fragment:HE,roughnessmap_fragment:GE,roughnessmap_pars_fragment:VE,shadowmap_pars_fragment:XE,shadowmap_pars_vertex:kE,shadowmap_vertex:WE,shadowmask_pars_fragment:qE,skinbase_vertex:YE,skinning_pars_vertex:jE,skinning_vertex:ZE,skinnormal_vertex:KE,specularmap_fragment:QE,specularmap_pars_fragment:JE,tonemapping_fragment:$E,tonemapping_pars_fragment:t1,transmission_fragment:e1,transmission_pars_fragment:n1,uv_pars_fragment:i1,uv_pars_vertex:a1,uv_vertex:s1,worldpos_vertex:r1,background_vert:o1,background_frag:l1,backgroundCube_vert:c1,backgroundCube_frag:u1,cube_vert:f1,cube_frag:h1,depth_vert:d1,depth_frag:p1,distanceRGBA_vert:m1,distanceRGBA_frag:g1,equirect_vert:_1,equirect_frag:v1,linedashed_vert:x1,linedashed_frag:S1,meshbasic_vert:y1,meshbasic_frag:M1,meshlambert_vert:E1,meshlambert_frag:T1,meshmatcap_vert:A1,meshmatcap_frag:b1,meshnormal_vert:R1,meshnormal_frag:C1,meshphong_vert:w1,meshphong_frag:D1,meshphysical_vert:U1,meshphysical_frag:L1,meshtoon_vert:N1,meshtoon_frag:O1,points_vert:F1,points_frag:P1,shadow_vert:z1,shadow_frag:B1,sprite_vert:I1,sprite_frag:H1},Ft={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},bi={basic:{uniforms:Ln([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:Ln([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Ge(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:Ln([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:Ln([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:Ln([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new Ge(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:Ln([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:Ln([Ft.points,Ft.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:Ln([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:Ln([Ft.common,Ft.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:Ln([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:Ln([Ft.sprite,Ft.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distanceRGBA:{uniforms:Ln([Ft.common,Ft.displacementmap,{referencePosition:{value:new lt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distanceRGBA_vert,fragmentShader:he.distanceRGBA_frag},shadow:{uniforms:Ln([Ft.lights,Ft.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};bi.physical={uniforms:Ln([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const mc={r:0,b:0,g:0},fs=new Es,G1=new dn;function V1(a,t,n,s,l,c,f){const h=new Ge(0);let p=c===!0?0:1,m,g,_=null,x=0,M=null;function E(U){let C=U.isScene===!0?U.background:null;return C&&C.isTexture&&(C=(U.backgroundBlurriness>0?n:t).get(C)),C}function T(U){let C=!1;const B=E(U);B===null?v(h,p):B&&B.isColor&&(v(B,1),C=!0);const O=a.xr.getEnvironmentBlendMode();O==="additive"?s.buffers.color.setClear(0,0,0,1,f):O==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(a.autoClear||C)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function y(U,C){const B=E(C);B&&(B.isCubeTexture||B.mapping===Rc)?(g===void 0&&(g=new wi(new Io(1,1,1),new sa({name:"BackgroundCubeMaterial",uniforms:Rr(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(O,F,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),fs.copy(C.backgroundRotation),fs.x*=-1,fs.y*=-1,fs.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),g.material.uniforms.envMap.value=B,g.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(G1.makeRotationFromEuler(fs)),g.material.toneMapped=we.getTransfer(B.colorSpace)!==He,(_!==B||x!==B.version||M!==a.toneMapping)&&(g.material.needsUpdate=!0,_=B,x=B.version,M=a.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):B&&B.isTexture&&(m===void 0&&(m=new wi(new wc(2,2),new sa({name:"BackgroundMaterial",uniforms:Rr(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:Ha,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=B,m.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,m.material.toneMapped=we.getTransfer(B.colorSpace)!==He,B.matrixAutoUpdate===!0&&B.updateMatrix(),m.material.uniforms.uvTransform.value.copy(B.matrix),(_!==B||x!==B.version||M!==a.toneMapping)&&(m.material.needsUpdate=!0,_=B,x=B.version,M=a.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null))}function v(U,C){U.getRGB(mc,tv(a)),s.buffers.color.setClear(mc.r,mc.g,mc.b,C,f)}function P(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,C=1){h.set(U),p=C,v(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(U){p=U,v(h,p)},render:T,addToRenderList:y,dispose:P}}function X1(a,t){const n=a.getParameter(a.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,f=!1;function h(w,G,Z,J,Q){let st=!1;const z=_(J,Z,G);c!==z&&(c=z,m(c.object)),st=M(w,J,Z,Q),st&&E(w,J,Z,Q),Q!==null&&t.update(Q,a.ELEMENT_ARRAY_BUFFER),(st||f)&&(f=!1,C(w,G,Z,J),Q!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function p(){return a.createVertexArray()}function m(w){return a.bindVertexArray(w)}function g(w){return a.deleteVertexArray(w)}function _(w,G,Z){const J=Z.wireframe===!0;let Q=s[w.id];Q===void 0&&(Q={},s[w.id]=Q);let st=Q[G.id];st===void 0&&(st={},Q[G.id]=st);let z=st[J];return z===void 0&&(z=x(p()),st[J]=z),z}function x(w){const G=[],Z=[],J=[];for(let Q=0;Q<n;Q++)G[Q]=0,Z[Q]=0,J[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Z,attributeDivisors:J,object:w,attributes:{},index:null}}function M(w,G,Z,J){const Q=c.attributes,st=G.attributes;let z=0;const V=Z.getAttributes();for(const X in V)if(V[X].location>=0){const yt=Q[X];let N=st[X];if(N===void 0&&(X==="instanceMatrix"&&w.instanceMatrix&&(N=w.instanceMatrix),X==="instanceColor"&&w.instanceColor&&(N=w.instanceColor)),yt===void 0||yt.attribute!==N||N&&yt.data!==N.data)return!0;z++}return c.attributesNum!==z||c.index!==J}function E(w,G,Z,J){const Q={},st=G.attributes;let z=0;const V=Z.getAttributes();for(const X in V)if(V[X].location>=0){let yt=st[X];yt===void 0&&(X==="instanceMatrix"&&w.instanceMatrix&&(yt=w.instanceMatrix),X==="instanceColor"&&w.instanceColor&&(yt=w.instanceColor));const N={};N.attribute=yt,yt&&yt.data&&(N.data=yt.data),Q[X]=N,z++}c.attributes=Q,c.attributesNum=z,c.index=J}function T(){const w=c.newAttributes;for(let G=0,Z=w.length;G<Z;G++)w[G]=0}function y(w){v(w,0)}function v(w,G){const Z=c.newAttributes,J=c.enabledAttributes,Q=c.attributeDivisors;Z[w]=1,J[w]===0&&(a.enableVertexAttribArray(w),J[w]=1),Q[w]!==G&&(a.vertexAttribDivisor(w,G),Q[w]=G)}function P(){const w=c.newAttributes,G=c.enabledAttributes;for(let Z=0,J=G.length;Z<J;Z++)G[Z]!==w[Z]&&(a.disableVertexAttribArray(Z),G[Z]=0)}function U(w,G,Z,J,Q,st,z){z===!0?a.vertexAttribIPointer(w,G,Z,Q,st):a.vertexAttribPointer(w,G,Z,J,Q,st)}function C(w,G,Z,J){T();const Q=J.attributes,st=Z.getAttributes(),z=G.defaultAttributeValues;for(const V in st){const X=st[V];if(X.location>=0){let ft=Q[V];if(ft===void 0&&(V==="instanceMatrix"&&w.instanceMatrix&&(ft=w.instanceMatrix),V==="instanceColor"&&w.instanceColor&&(ft=w.instanceColor)),ft!==void 0){const yt=ft.normalized,N=ft.itemSize,nt=t.get(ft);if(nt===void 0)continue;const xt=nt.buffer,At=nt.type,Nt=nt.bytesPerElement,it=At===a.INT||At===a.UNSIGNED_INT||ft.gpuType===Sd;if(ft.isInterleavedBufferAttribute){const ut=ft.data,Ct=ut.stride,Pt=ft.offset;if(ut.isInstancedInterleavedBuffer){for(let kt=0;kt<X.locationSize;kt++)v(X.location+kt,ut.meshPerAttribute);w.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let kt=0;kt<X.locationSize;kt++)y(X.location+kt);a.bindBuffer(a.ARRAY_BUFFER,xt);for(let kt=0;kt<X.locationSize;kt++)U(X.location+kt,N/X.locationSize,At,yt,Ct*Nt,(Pt+N/X.locationSize*kt)*Nt,it)}else{if(ft.isInstancedBufferAttribute){for(let ut=0;ut<X.locationSize;ut++)v(X.location+ut,ft.meshPerAttribute);w.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let ut=0;ut<X.locationSize;ut++)y(X.location+ut);a.bindBuffer(a.ARRAY_BUFFER,xt);for(let ut=0;ut<X.locationSize;ut++)U(X.location+ut,N/X.locationSize,At,yt,N*Nt,N/X.locationSize*ut*Nt,it)}}else if(z!==void 0){const yt=z[V];if(yt!==void 0)switch(yt.length){case 2:a.vertexAttrib2fv(X.location,yt);break;case 3:a.vertexAttrib3fv(X.location,yt);break;case 4:a.vertexAttrib4fv(X.location,yt);break;default:a.vertexAttrib1fv(X.location,yt)}}}}P()}function B(){q();for(const w in s){const G=s[w];for(const Z in G){const J=G[Z];for(const Q in J)g(J[Q].object),delete J[Q];delete G[Z]}delete s[w]}}function O(w){if(s[w.id]===void 0)return;const G=s[w.id];for(const Z in G){const J=G[Z];for(const Q in J)g(J[Q].object),delete J[Q];delete G[Z]}delete s[w.id]}function F(w){for(const G in s){const Z=s[G];if(Z[w.id]===void 0)continue;const J=Z[w.id];for(const Q in J)g(J[Q].object),delete J[Q];delete Z[w.id]}}function q(){D(),f=!0,c!==l&&(c=l,m(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:q,resetDefaultState:D,dispose:B,releaseStatesOfGeometry:O,releaseStatesOfProgram:F,initAttributes:T,enableAttribute:y,disableUnusedAttributes:P}}function k1(a,t,n){let s;function l(m){s=m}function c(m,g){a.drawArrays(s,m,g),n.update(g,s,1)}function f(m,g,_){_!==0&&(a.drawArraysInstanced(s,m,g,_),n.update(g,s,_))}function h(m,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,g,0,_);let M=0;for(let E=0;E<_;E++)M+=g[E];n.update(M,s,1)}function p(m,g,_,x){if(_===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<m.length;E++)f(m[E],g[E],x[E]);else{M.multiDrawArraysInstancedWEBGL(s,m,0,g,0,x,0,_);let E=0;for(let T=0;T<_;T++)E+=g[T]*x[T];n.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function W1(a,t,n,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");l=a.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(F){return!(F!==_i&&s.convert(F)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const q=F===Fo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==aa&&s.convert(F)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==na&&!q)}function p(F){if(F==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const _=n.logarithmicDepthBuffer===!0,x=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),E=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=a.getParameter(a.MAX_TEXTURE_SIZE),y=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),v=a.getParameter(a.MAX_VERTEX_ATTRIBS),P=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),U=a.getParameter(a.MAX_VARYING_VECTORS),C=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),B=E>0,O=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:P,maxVaryings:U,maxFragmentUniforms:C,vertexTextures:B,maxSamples:O}}function q1(a){const t=this;let n=null,s=0,l=!1,c=!1;const f=new ds,h=new fe,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const M=_.length!==0||x||s!==0||l;return l=x,s=_.length,M},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){n=g(_,x,0)},this.setState=function(_,x,M){const E=_.clippingPlanes,T=_.clipIntersection,y=_.clipShadows,v=a.get(_);if(!l||E===null||E.length===0||c&&!y)c?g(null):m();else{const P=c?0:s,U=P*4;let C=v.clippingState||null;p.value=C,C=g(E,x,U,M);for(let B=0;B!==U;++B)C[B]=n[B];v.clippingState=C,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=P}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(_,x,M,E){const T=_!==null?_.length:0;let y=null;if(T!==0){if(y=p.value,E!==!0||y===null){const v=M+T*4,P=x.matrixWorldInverse;h.getNormalMatrix(P),(y===null||y.length<v)&&(y=new Float32Array(v));for(let U=0,C=M;U!==T;++U,C+=4)f.copy(_[U]).applyMatrix4(P,h),f.normal.toArray(y,C),y[C+3]=f.constant}p.value=y,p.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,y}}function Y1(a){let t=new WeakMap;function n(f,h){return h===Ph?f.mapping=Tr:h===zh&&(f.mapping=Ar),f}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===Ph||h===zh)if(t.has(f)){const p=t.get(f).texture;return n(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new Zy(p.height);return m.fromEquirectangularTexture(a,f),t.set(f,m),f.addEventListener("dispose",l),n(m.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const yr=4,q0=[.125,.215,.35,.446,.526,.582],gs=20,gh=new rv,Y0=new Ge;let _h=null,vh=0,xh=0,Sh=!1;const ps=(1+Math.sqrt(5))/2,xr=1/ps,j0=[new lt(-ps,xr,0),new lt(ps,xr,0),new lt(-xr,0,ps),new lt(xr,0,ps),new lt(0,ps,-xr),new lt(0,ps,xr),new lt(-1,1,-1),new lt(1,1,-1),new lt(-1,1,1),new lt(1,1,1)],j1=new lt;class Z0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,s=.1,l=100,c={}){const{size:f=256,position:h=j1}=c;_h=this._renderer.getRenderTarget(),vh=this._renderer.getActiveCubeFace(),xh=this._renderer.getActiveMipmapLevel(),Sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,s,l,p,h),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=J0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Q0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(_h,vh,xh),this._renderer.xr.enabled=Sh,t.scissorTest=!1,gc(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Tr||t.mapping===Ar?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_h=this._renderer.getRenderTarget(),vh=this._renderer.getActiveCubeFace(),xh=this._renderer.getActiveMipmapLevel(),Sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=n||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,s={magFilter:Ri,minFilter:Ri,generateMipmaps:!1,type:Fo,format:_i,colorSpace:br,depthBuffer:!1},l=K0(t,n,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=K0(t,n,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Z1(c)),this._blurMaterial=K1(c,t,n)}return l}_compileMaterial(t){const n=new wi(this._lodPlanes[0],t);this._renderer.compile(n,gh)}_sceneToCubeUV(t,n,s,l,c){const p=new mi(90,1,n,s),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,M=_.toneMapping;_.getClearColor(Y0),_.toneMapping=Ba,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null));const T=new Q_({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1}),y=new wi(new Io,T);let v=!1;const P=t.background;P?P.isColor&&(T.color.copy(P),t.background=null,v=!0):(T.color.copy(Y0),v=!0);for(let U=0;U<6;U++){const C=U%3;C===0?(p.up.set(0,m[U],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[U],c.y,c.z)):C===1?(p.up.set(0,0,m[U]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[U],c.z)):(p.up.set(0,m[U],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[U]));const B=this._cubeSize;gc(l,C*B,U>2?B:0,B,B),_.setRenderTarget(l),v&&_.render(y,p),_.render(t,p)}y.geometry.dispose(),y.material.dispose(),_.toneMapping=M,_.autoClear=x,t.background=P}_textureToCubeUV(t,n){const s=this._renderer,l=t.mapping===Tr||t.mapping===Ar;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=J0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Q0());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new wi(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=t;const p=this._cubeSize;gc(n,0,0,3*p,2*p),s.setRenderTarget(n),s.render(f,gh)}_applyPMREM(t){const n=this._renderer,s=n.autoClear;n.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=j0[(l-c-1)%j0.length];this._blur(t,c-1,c,f,h)}n.autoClear=s}_blur(t,n,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,n,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,n,s,l,c,f,h){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new wi(this._lodPlanes[l],m),x=m.uniforms,M=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*gs-1),T=c/E,y=isFinite(c)?1+Math.floor(g*T):gs;y>gs&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${gs}`);const v=[];let P=0;for(let F=0;F<gs;++F){const q=F/T,D=Math.exp(-q*q/2);v.push(D),F===0?P+=D:F<y&&(P+=2*D)}for(let F=0;F<v.length;F++)v[F]=v[F]/P;x.envMap.value=t.texture,x.samples.value=y,x.weights.value=v,x.latitudinal.value=f==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:U}=this;x.dTheta.value=E,x.mipInt.value=U-s;const C=this._sizeLods[l],B=3*C*(l>U-yr?l-U+yr:0),O=4*(this._cubeSize-C);gc(n,B,O,3*C,2*C),p.setRenderTarget(n),p.render(_,gh)}}function Z1(a){const t=[],n=[],s=[];let l=a;const c=a-yr+1+q0.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);n.push(h);let p=1/h;f>a-yr?p=q0[f-a+yr-1]:f===0&&(p=0),s.push(p);const m=1/(h-2),g=-m,_=1+m,x=[g,g,_,g,_,_,g,g,_,_,g,_],M=6,E=6,T=3,y=2,v=1,P=new Float32Array(T*E*M),U=new Float32Array(y*E*M),C=new Float32Array(v*E*M);for(let O=0;O<M;O++){const F=O%3*2/3-1,q=O>2?0:-1,D=[F,q,0,F+2/3,q,0,F+2/3,q+1,0,F,q,0,F+2/3,q+1,0,F,q+1,0];P.set(D,T*E*O),U.set(x,y*E*O);const w=[O,O,O,O,O,O];C.set(w,v*E*O)}const B=new Ga;B.setAttribute("position",new xi(P,T)),B.setAttribute("uv",new xi(U,y)),B.setAttribute("faceIndex",new xi(C,v)),t.push(B),l>yr&&l--}return{lodPlanes:t,sizeLods:n,sigmas:s}}function K0(a,t,n){const s=new Ms(a,t,n);return s.texture.mapping=Rc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function gc(a,t,n,s,l){a.viewport.set(t,n,s,l),a.scissor.set(t,n,s,l)}function K1(a,t,n){const s=new Float32Array(gs),l=new lt(0,1,0);return new sa({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Cd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:za,depthTest:!1,depthWrite:!1})}function Q0(){return new sa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:za,depthTest:!1,depthWrite:!1})}function J0(){return new sa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:za,depthTest:!1,depthWrite:!1})}function Cd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Q1(a){let t=new WeakMap,n=null;function s(h){if(h&&h.isTexture){const p=h.mapping,m=p===Ph||p===zh,g=p===Tr||p===Ar;if(m||g){let _=t.get(h);const x=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return n===null&&(n=new Z0(a)),_=m?n.fromEquirectangular(h,_):n.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),_.texture;if(_!==void 0)return _.texture;{const M=h.image;return m&&M&&M.height>0||g&&M&&l(M)?(n===null&&(n=new Z0(a)),_=m?n.fromEquirectangular(h):n.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),h.addEventListener("dispose",c),_.texture):null}}}return h}function l(h){let p=0;const m=6;for(let g=0;g<m;g++)h[g]!==void 0&&p++;return p===m}function c(h){const p=h.target;p.removeEventListener("dispose",c);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function f(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function J1(a){const t={};function n(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=a.getExtension(s)}return t[s]=l,l}return{has:function(s){return n(s)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(s){const l=n(s);return l===null&&Oo("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function $1(a,t,n,s){const l={},c=new WeakMap;function f(_){const x=_.target;x.index!==null&&t.remove(x.index);for(const E in x.attributes)t.remove(x.attributes[E]);x.removeEventListener("dispose",f),delete l[x.id];const M=c.get(x);M&&(t.remove(M),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function h(_,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,n.memory.geometries++),x}function p(_){const x=_.attributes;for(const M in x)t.update(x[M],a.ARRAY_BUFFER)}function m(_){const x=[],M=_.index,E=_.attributes.position;let T=0;if(M!==null){const P=M.array;T=M.version;for(let U=0,C=P.length;U<C;U+=3){const B=P[U+0],O=P[U+1],F=P[U+2];x.push(B,O,O,F,F,B)}}else if(E!==void 0){const P=E.array;T=E.version;for(let U=0,C=P.length/3-1;U<C;U+=3){const B=U+0,O=U+1,F=U+2;x.push(B,O,O,F,F,B)}}else return;const y=new(q_(x)?$_:J_)(x,1);y.version=T;const v=c.get(_);v&&t.remove(v),c.set(_,y)}function g(_){const x=c.get(_);if(x){const M=_.index;M!==null&&x.version<M.version&&m(_)}else m(_);return c.get(_)}return{get:h,update:p,getWireframeAttribute:g}}function tT(a,t,n){let s;function l(x){s=x}let c,f;function h(x){c=x.type,f=x.bytesPerElement}function p(x,M){a.drawElements(s,M,c,x*f),n.update(M,s,1)}function m(x,M,E){E!==0&&(a.drawElementsInstanced(s,M,c,x*f,E),n.update(M,s,E))}function g(x,M,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,x,0,E);let y=0;for(let v=0;v<E;v++)y+=M[v];n.update(y,s,1)}function _(x,M,E,T){if(E===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<x.length;v++)m(x[v]/f,M[v],T[v]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,c,x,0,T,0,E);let v=0;for(let P=0;P<E;P++)v+=M[P]*T[P];n.update(v,s,1)}}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function eT(a){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,h){switch(n.calls++,f){case a.TRIANGLES:n.triangles+=h*(c/3);break;case a.LINES:n.lines+=h*(c/2);break;case a.LINE_STRIP:n.lines+=h*(c-1);break;case a.LINE_LOOP:n.lines+=h*c;break;case a.POINTS:n.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:l,update:s}}function nT(a,t,n){const s=new WeakMap,l=new $e;function c(f,h,p){const m=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let x=s.get(h);if(x===void 0||x.count!==_){let w=function(){q.dispose(),s.delete(h),h.removeEventListener("dispose",w)};var M=w;x!==void 0&&x.texture.dispose();const E=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let C=0;E===!0&&(C=1),T===!0&&(C=2),y===!0&&(C=3);let B=h.attributes.position.count*C,O=1;B>t.maxTextureSize&&(O=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const F=new Float32Array(B*O*4*_),q=new Y_(F,B,O,_);q.type=na,q.needsUpdate=!0;const D=C*4;for(let G=0;G<_;G++){const Z=v[G],J=P[G],Q=U[G],st=B*O*4*G;for(let z=0;z<Z.count;z++){const V=z*D;E===!0&&(l.fromBufferAttribute(Z,z),F[st+V+0]=l.x,F[st+V+1]=l.y,F[st+V+2]=l.z,F[st+V+3]=0),T===!0&&(l.fromBufferAttribute(J,z),F[st+V+4]=l.x,F[st+V+5]=l.y,F[st+V+6]=l.z,F[st+V+7]=0),y===!0&&(l.fromBufferAttribute(Q,z),F[st+V+8]=l.x,F[st+V+9]=l.y,F[st+V+10]=l.z,F[st+V+11]=Q.itemSize===4?l.w:1)}}x={count:_,texture:q,size:new Ne(B,O)},s.set(h,x),h.addEventListener("dispose",w)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(a,"morphTexture",f.morphTexture,n);else{let E=0;for(let y=0;y<m.length;y++)E+=m[y];const T=h.morphTargetsRelative?1:1-E;p.getUniforms().setValue(a,"morphTargetBaseInfluence",T),p.getUniforms().setValue(a,"morphTargetInfluences",m)}p.getUniforms().setValue(a,"morphTargetsTexture",x.texture,n),p.getUniforms().setValue(a,"morphTargetsTextureSize",x.size)}return{update:c}}function iT(a,t,n,s){let l=new WeakMap;function c(p){const m=s.render.frame,g=p.geometry,_=t.get(p,g);if(l.get(_)!==m&&(t.update(_),l.set(_,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==m&&(n.update(p.instanceMatrix,a.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,a.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;l.get(x)!==m&&(x.update(),l.set(x,m))}return _}function f(){l=new WeakMap}function h(p){const m=p.target;m.removeEventListener("dispose",h),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:f}}const lv=new Di,$0=new av(1,1),cv=new Y_,uv=new Uy,fv=new nv,t_=[],e_=[],n_=new Float32Array(16),i_=new Float32Array(9),a_=new Float32Array(4);function wr(a,t,n){const s=a[0];if(s<=0||s>0)return a;const l=t*n;let c=t_[l];if(c===void 0&&(c=new Float32Array(l),t_[l]=c),t!==0){s.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=n,a[f].toArray(c,h)}return c}function pn(a,t){if(a.length!==t.length)return!1;for(let n=0,s=a.length;n<s;n++)if(a[n]!==t[n])return!1;return!0}function mn(a,t){for(let n=0,s=t.length;n<s;n++)a[n]=t[n]}function Dc(a,t){let n=e_[t];n===void 0&&(n=new Int32Array(t),e_[t]=n);for(let s=0;s!==t;++s)n[s]=a.allocateTextureUnit();return n}function aT(a,t){const n=this.cache;n[0]!==t&&(a.uniform1f(this.addr,t),n[0]=t)}function sT(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(a.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(pn(n,t))return;a.uniform2fv(this.addr,t),mn(n,t)}}function rT(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(a.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(a.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(pn(n,t))return;a.uniform3fv(this.addr,t),mn(n,t)}}function oT(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(a.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(pn(n,t))return;a.uniform4fv(this.addr,t),mn(n,t)}}function lT(a,t){const n=this.cache,s=t.elements;if(s===void 0){if(pn(n,t))return;a.uniformMatrix2fv(this.addr,!1,t),mn(n,t)}else{if(pn(n,s))return;a_.set(s),a.uniformMatrix2fv(this.addr,!1,a_),mn(n,s)}}function cT(a,t){const n=this.cache,s=t.elements;if(s===void 0){if(pn(n,t))return;a.uniformMatrix3fv(this.addr,!1,t),mn(n,t)}else{if(pn(n,s))return;i_.set(s),a.uniformMatrix3fv(this.addr,!1,i_),mn(n,s)}}function uT(a,t){const n=this.cache,s=t.elements;if(s===void 0){if(pn(n,t))return;a.uniformMatrix4fv(this.addr,!1,t),mn(n,t)}else{if(pn(n,s))return;n_.set(s),a.uniformMatrix4fv(this.addr,!1,n_),mn(n,s)}}function fT(a,t){const n=this.cache;n[0]!==t&&(a.uniform1i(this.addr,t),n[0]=t)}function hT(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(a.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(pn(n,t))return;a.uniform2iv(this.addr,t),mn(n,t)}}function dT(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(a.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(pn(n,t))return;a.uniform3iv(this.addr,t),mn(n,t)}}function pT(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(a.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(pn(n,t))return;a.uniform4iv(this.addr,t),mn(n,t)}}function mT(a,t){const n=this.cache;n[0]!==t&&(a.uniform1ui(this.addr,t),n[0]=t)}function gT(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(a.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(pn(n,t))return;a.uniform2uiv(this.addr,t),mn(n,t)}}function _T(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(a.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(pn(n,t))return;a.uniform3uiv(this.addr,t),mn(n,t)}}function vT(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(a.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(pn(n,t))return;a.uniform4uiv(this.addr,t),mn(n,t)}}function xT(a,t,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l);let c;this.type===a.SAMPLER_2D_SHADOW?($0.compareFunction=W_,c=$0):c=lv,n.setTexture2D(t||c,l)}function ST(a,t,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),n.setTexture3D(t||uv,l)}function yT(a,t,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),n.setTextureCube(t||fv,l)}function MT(a,t,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),n.setTexture2DArray(t||cv,l)}function ET(a){switch(a){case 5126:return aT;case 35664:return sT;case 35665:return rT;case 35666:return oT;case 35674:return lT;case 35675:return cT;case 35676:return uT;case 5124:case 35670:return fT;case 35667:case 35671:return hT;case 35668:case 35672:return dT;case 35669:case 35673:return pT;case 5125:return mT;case 36294:return gT;case 36295:return _T;case 36296:return vT;case 35678:case 36198:case 36298:case 36306:case 35682:return xT;case 35679:case 36299:case 36307:return ST;case 35680:case 36300:case 36308:case 36293:return yT;case 36289:case 36303:case 36311:case 36292:return MT}}function TT(a,t){a.uniform1fv(this.addr,t)}function AT(a,t){const n=wr(t,this.size,2);a.uniform2fv(this.addr,n)}function bT(a,t){const n=wr(t,this.size,3);a.uniform3fv(this.addr,n)}function RT(a,t){const n=wr(t,this.size,4);a.uniform4fv(this.addr,n)}function CT(a,t){const n=wr(t,this.size,4);a.uniformMatrix2fv(this.addr,!1,n)}function wT(a,t){const n=wr(t,this.size,9);a.uniformMatrix3fv(this.addr,!1,n)}function DT(a,t){const n=wr(t,this.size,16);a.uniformMatrix4fv(this.addr,!1,n)}function UT(a,t){a.uniform1iv(this.addr,t)}function LT(a,t){a.uniform2iv(this.addr,t)}function NT(a,t){a.uniform3iv(this.addr,t)}function OT(a,t){a.uniform4iv(this.addr,t)}function FT(a,t){a.uniform1uiv(this.addr,t)}function PT(a,t){a.uniform2uiv(this.addr,t)}function zT(a,t){a.uniform3uiv(this.addr,t)}function BT(a,t){a.uniform4uiv(this.addr,t)}function IT(a,t,n){const s=this.cache,l=t.length,c=Dc(n,l);pn(s,c)||(a.uniform1iv(this.addr,c),mn(s,c));for(let f=0;f!==l;++f)n.setTexture2D(t[f]||lv,c[f])}function HT(a,t,n){const s=this.cache,l=t.length,c=Dc(n,l);pn(s,c)||(a.uniform1iv(this.addr,c),mn(s,c));for(let f=0;f!==l;++f)n.setTexture3D(t[f]||uv,c[f])}function GT(a,t,n){const s=this.cache,l=t.length,c=Dc(n,l);pn(s,c)||(a.uniform1iv(this.addr,c),mn(s,c));for(let f=0;f!==l;++f)n.setTextureCube(t[f]||fv,c[f])}function VT(a,t,n){const s=this.cache,l=t.length,c=Dc(n,l);pn(s,c)||(a.uniform1iv(this.addr,c),mn(s,c));for(let f=0;f!==l;++f)n.setTexture2DArray(t[f]||cv,c[f])}function XT(a){switch(a){case 5126:return TT;case 35664:return AT;case 35665:return bT;case 35666:return RT;case 35674:return CT;case 35675:return wT;case 35676:return DT;case 5124:case 35670:return UT;case 35667:case 35671:return LT;case 35668:case 35672:return NT;case 35669:case 35673:return OT;case 5125:return FT;case 36294:return PT;case 36295:return zT;case 36296:return BT;case 35678:case 36198:case 36298:case 36306:case 35682:return IT;case 35679:case 36299:case 36307:return HT;case 35680:case 36300:case 36308:case 36293:return GT;case 36289:case 36303:case 36311:case 36292:return VT}}class kT{constructor(t,n,s){this.id=t,this.addr=s,this.cache=[],this.type=n.type,this.setValue=ET(n.type)}}class WT{constructor(t,n,s){this.id=t,this.addr=s,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=XT(n.type)}}class qT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(t,n[h.id],s)}}}const yh=/(\w+)(\])?(\[|\.)?/g;function s_(a,t){a.seq.push(t),a.map[t.id]=t}function YT(a,t,n){const s=a.name,l=s.length;for(yh.lastIndex=0;;){const c=yh.exec(s),f=yh.lastIndex;let h=c[1];const p=c[2]==="]",m=c[3];if(p&&(h=h|0),m===void 0||m==="["&&f+2===l){s_(n,m===void 0?new kT(h,a,t):new WT(h,a,t));break}else{let _=n.map[h];_===void 0&&(_=new qT(h),s_(n,_)),n=_}}}class Ec{constructor(t,n){this.seq=[],this.map={};const s=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(n,l),f=t.getUniformLocation(n,c.name);YT(c,f,this)}}setValue(t,n,s,l){const c=this.map[n];c!==void 0&&c.setValue(t,s,l)}setOptional(t,n,s){const l=n[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,n,s,l){for(let c=0,f=n.length;c!==f;++c){const h=n[c],p=s[h.id];p.needsUpdate!==!1&&h.setValue(t,p.value,l)}}static seqWithValue(t,n){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in n&&s.push(f)}return s}}function r_(a,t,n){const s=a.createShader(t);return a.shaderSource(s,n),a.compileShader(s),s}const jT=37297;let ZT=0;function KT(a,t){const n=a.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let f=l;f<c;f++){const h=f+1;s.push(`${h===t?">":" "} ${h}: ${n[f]}`)}return s.join(`
`)}const o_=new fe;function QT(a){we._getMatrix(o_,we.workingColorSpace,a);const t=`mat3( ${o_.elements.map(n=>n.toFixed(4))} )`;switch(we.getTransfer(a)){case Tc:return[t,"LinearTransferOETF"];case He:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",a),[t,"LinearTransferOETF"]}}function l_(a,t,n){const s=a.getShaderParameter(t,a.COMPILE_STATUS),c=(a.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return n.toUpperCase()+`

`+c+`

`+KT(a.getShaderSource(t),h)}else return c}function JT(a,t){const n=QT(t);return[`vec4 ${a}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function $T(a,t){let n;switch(t){case ay:n="Linear";break;case sy:n="Reinhard";break;case ry:n="Cineon";break;case oy:n="ACESFilmic";break;case cy:n="AgX";break;case uy:n="Neutral";break;case ly:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+a+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const _c=new lt;function tA(){we.getLuminanceCoefficients(_c);const a=_c.x.toFixed(4),t=_c.y.toFixed(4),n=_c.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eA(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Co).join(`
`)}function nA(a){const t=[];for(const n in a){const s=a[n];s!==!1&&t.push("#define "+n+" "+s)}return t.join(`
`)}function iA(a,t){const n={},s=a.getProgramParameter(t,a.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=a.getActiveAttrib(t,l),f=c.name;let h=1;c.type===a.FLOAT_MAT2&&(h=2),c.type===a.FLOAT_MAT3&&(h=3),c.type===a.FLOAT_MAT4&&(h=4),n[f]={type:c.type,location:a.getAttribLocation(t,f),locationSize:h}}return n}function Co(a){return a!==""}function c_(a,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function u_(a,t){return a.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const aA=/^[ \t]*#include +<([\w\d./]+)>/gm;function md(a){return a.replace(aA,rA)}const sA=new Map;function rA(a,t){let n=he[t];if(n===void 0){const s=sA.get(t);if(s!==void 0)n=he[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return md(n)}const oA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function f_(a){return a.replace(oA,lA)}function lA(a,t,n,s){let l="";for(let c=parseInt(t);c<parseInt(n);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function h_(a){let t=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?t+=`
#define HIGH_PRECISION`:a.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function cA(a){let t="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===O_?t="SHADOWMAP_TYPE_PCF":a.shadowMapType===zS?t="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===ta&&(t="SHADOWMAP_TYPE_VSM"),t}function uA(a){let t="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Tr:case Ar:t="ENVMAP_TYPE_CUBE";break;case Rc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function fA(a){let t="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Ar:t="ENVMAP_MODE_REFRACTION";break}return t}function hA(a){let t="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case F_:t="ENVMAP_BLENDING_MULTIPLY";break;case ny:t="ENVMAP_BLENDING_MIX";break;case iy:t="ENVMAP_BLENDING_ADD";break}return t}function dA(a){const t=a.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:s,maxMip:n}}function pA(a,t,n,s){const l=a.getContext(),c=n.defines;let f=n.vertexShader,h=n.fragmentShader;const p=cA(n),m=uA(n),g=fA(n),_=hA(n),x=dA(n),M=eA(n),E=nA(c),T=l.createProgram();let y,v,P=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Co).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Co).join(`
`),v.length>0&&(v+=`
`)):(y=[h_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Co).join(`
`),v=[h_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ba?"#define TONE_MAPPING":"",n.toneMapping!==Ba?he.tonemapping_pars_fragment:"",n.toneMapping!==Ba?$T("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,JT("linearToOutputTexel",n.outputColorSpace),tA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Co).join(`
`)),f=md(f),f=c_(f,n),f=u_(f,n),h=md(h),h=c_(h,n),h=u_(h,n),f=f_(f),h=f_(h),n.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",n.glslVersion===R0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===R0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const U=P+y+f,C=P+v+h,B=r_(l,l.VERTEX_SHADER,U),O=r_(l,l.FRAGMENT_SHADER,C);l.attachShader(T,B),l.attachShader(T,O),n.index0AttributeName!==void 0?l.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function F(G){if(a.debug.checkShaderErrors){const Z=l.getProgramInfoLog(T)||"",J=l.getShaderInfoLog(B)||"",Q=l.getShaderInfoLog(O)||"",st=Z.trim(),z=J.trim(),V=Q.trim();let X=!0,ft=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(X=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(l,T,B,O);else{const yt=l_(l,B,"vertex"),N=l_(l,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+st+`
`+yt+`
`+N)}else st!==""?console.warn("THREE.WebGLProgram: Program Info Log:",st):(z===""||V==="")&&(ft=!1);ft&&(G.diagnostics={runnable:X,programLog:st,vertexShader:{log:z,prefix:y},fragmentShader:{log:V,prefix:v}})}l.deleteShader(B),l.deleteShader(O),q=new Ec(l,T),D=iA(l,T)}let q;this.getUniforms=function(){return q===void 0&&F(this),q};let D;this.getAttributes=function(){return D===void 0&&F(this),D};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(T,jT)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ZT++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=B,this.fragmentShader=O,this}let mA=0;class gA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(n),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const s of n)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let s=n.get(t);return s===void 0&&(s=new Set,n.set(t,s)),s}_getShaderStage(t){const n=this.shaderCache;let s=n.get(t);return s===void 0&&(s=new _A(t),n.set(t,s)),s}}class _A{constructor(t){this.id=mA++,this.code=t,this.usedTimes=0}}function vA(a,t,n,s,l,c,f){const h=new Z_,p=new gA,m=new Set,g=[],_=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(D){return m.add(D),D===0?"uv":`uv${D}`}function y(D,w,G,Z,J){const Q=Z.fog,st=J.geometry,z=D.isMeshStandardMaterial?Z.environment:null,V=(D.isMeshStandardMaterial?n:t).get(D.envMap||z),X=V&&V.mapping===Rc?V.image.height:null,ft=E[D.type];D.precision!==null&&(M=l.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const yt=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,N=yt!==void 0?yt.length:0;let nt=0;st.morphAttributes.position!==void 0&&(nt=1),st.morphAttributes.normal!==void 0&&(nt=2),st.morphAttributes.color!==void 0&&(nt=3);let xt,At,Nt,it;if(ft){const Te=bi[ft];xt=Te.vertexShader,At=Te.fragmentShader}else xt=D.vertexShader,At=D.fragmentShader,p.update(D),Nt=p.getVertexShaderID(D),it=p.getFragmentShaderID(D);const ut=a.getRenderTarget(),Ct=a.state.buffers.depth.getReversed(),Pt=J.isInstancedMesh===!0,kt=J.isBatchedMesh===!0,le=!!D.map,Ze=!!D.matcap,H=!!V,Se=!!D.aoMap,ne=!!D.lightMap,te=!!D.bumpMap,jt=!!D.normalMap,Ee=!!D.displacementMap,Gt=!!D.emissiveMap,ae=!!D.metalnessMap,qe=!!D.roughnessMap,ke=D.anisotropy>0,L=D.clearcoat>0,A=D.dispersion>0,$=D.iridescence>0,pt=D.sheen>0,Mt=D.transmission>0,ht=ke&&!!D.anisotropyMap,Kt=L&&!!D.clearcoatMap,Rt=L&&!!D.clearcoatNormalMap,wt=L&&!!D.clearcoatRoughnessMap,Bt=$&&!!D.iridescenceMap,vt=$&&!!D.iridescenceThicknessMap,bt=pt&&!!D.sheenColorMap,It=pt&&!!D.sheenRoughnessMap,Ut=!!D.specularMap,Lt=!!D.specularColorMap,se=!!D.specularIntensityMap,W=Mt&&!!D.transmissionMap,Tt=Mt&&!!D.thicknessMap,Dt=!!D.gradientMap,Ht=!!D.alphaMap,Et=D.alphaTest>0,_t=!!D.alphaHash,Vt=!!D.extensions;let re=Ba;D.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(re=a.toneMapping);const Oe={shaderID:ft,shaderType:D.type,shaderName:D.name,vertexShader:xt,fragmentShader:At,defines:D.defines,customVertexShaderID:Nt,customFragmentShaderID:it,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:kt,batchingColor:kt&&J._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&J.instanceColor!==null,instancingMorph:Pt&&J.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ut===null?a.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:br,alphaToCoverage:!!D.alphaToCoverage,map:le,matcap:Ze,envMap:H,envMapMode:H&&V.mapping,envMapCubeUVHeight:X,aoMap:Se,lightMap:ne,bumpMap:te,normalMap:jt,displacementMap:x&&Ee,emissiveMap:Gt,normalMapObjectSpace:jt&&D.normalMapType===my,normalMapTangentSpace:jt&&D.normalMapType===py,metalnessMap:ae,roughnessMap:qe,anisotropy:ke,anisotropyMap:ht,clearcoat:L,clearcoatMap:Kt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:wt,dispersion:A,iridescence:$,iridescenceMap:Bt,iridescenceThicknessMap:vt,sheen:pt,sheenColorMap:bt,sheenRoughnessMap:It,specularMap:Ut,specularColorMap:Lt,specularIntensityMap:se,transmission:Mt,transmissionMap:W,thicknessMap:Tt,gradientMap:Dt,opaque:D.transparent===!1&&D.blending===xs&&D.alphaToCoverage===!1,alphaMap:Ht,alphaTest:Et,alphaHash:_t,combine:D.combine,mapUv:le&&T(D.map.channel),aoMapUv:Se&&T(D.aoMap.channel),lightMapUv:ne&&T(D.lightMap.channel),bumpMapUv:te&&T(D.bumpMap.channel),normalMapUv:jt&&T(D.normalMap.channel),displacementMapUv:Ee&&T(D.displacementMap.channel),emissiveMapUv:Gt&&T(D.emissiveMap.channel),metalnessMapUv:ae&&T(D.metalnessMap.channel),roughnessMapUv:qe&&T(D.roughnessMap.channel),anisotropyMapUv:ht&&T(D.anisotropyMap.channel),clearcoatMapUv:Kt&&T(D.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&T(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&T(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&T(D.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&T(D.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&T(D.sheenColorMap.channel),sheenRoughnessMapUv:It&&T(D.sheenRoughnessMap.channel),specularMapUv:Ut&&T(D.specularMap.channel),specularColorMapUv:Lt&&T(D.specularColorMap.channel),specularIntensityMapUv:se&&T(D.specularIntensityMap.channel),transmissionMapUv:W&&T(D.transmissionMap.channel),thicknessMapUv:Tt&&T(D.thicknessMap.channel),alphaMapUv:Ht&&T(D.alphaMap.channel),vertexTangents:!!st.attributes.tangent&&(jt||ke),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!st.attributes.uv&&(le||Ht),fog:!!Q,useFog:D.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Ct,skinning:J.isSkinnedMesh===!0,morphTargets:st.morphAttributes.position!==void 0,morphNormals:st.morphAttributes.normal!==void 0,morphColors:st.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:nt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:D.dithering,shadowMapEnabled:a.shadowMap.enabled&&G.length>0,shadowMapType:a.shadowMap.type,toneMapping:re,decodeVideoTexture:le&&D.map.isVideoTexture===!0&&we.getTransfer(D.map.colorSpace)===He,decodeVideoTextureEmissive:Gt&&D.emissiveMap.isVideoTexture===!0&&we.getTransfer(D.emissiveMap.colorSpace)===He,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===ea,flipSided:D.side===Hn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Vt&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&D.extensions.multiDraw===!0||kt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Oe.vertexUv1s=m.has(1),Oe.vertexUv2s=m.has(2),Oe.vertexUv3s=m.has(3),m.clear(),Oe}function v(D){const w=[];if(D.shaderID?w.push(D.shaderID):(w.push(D.customVertexShaderID),w.push(D.customFragmentShaderID)),D.defines!==void 0)for(const G in D.defines)w.push(G),w.push(D.defines[G]);return D.isRawShaderMaterial===!1&&(P(w,D),U(w,D),w.push(a.outputColorSpace)),w.push(D.customProgramCacheKey),w.join()}function P(D,w){D.push(w.precision),D.push(w.outputColorSpace),D.push(w.envMapMode),D.push(w.envMapCubeUVHeight),D.push(w.mapUv),D.push(w.alphaMapUv),D.push(w.lightMapUv),D.push(w.aoMapUv),D.push(w.bumpMapUv),D.push(w.normalMapUv),D.push(w.displacementMapUv),D.push(w.emissiveMapUv),D.push(w.metalnessMapUv),D.push(w.roughnessMapUv),D.push(w.anisotropyMapUv),D.push(w.clearcoatMapUv),D.push(w.clearcoatNormalMapUv),D.push(w.clearcoatRoughnessMapUv),D.push(w.iridescenceMapUv),D.push(w.iridescenceThicknessMapUv),D.push(w.sheenColorMapUv),D.push(w.sheenRoughnessMapUv),D.push(w.specularMapUv),D.push(w.specularColorMapUv),D.push(w.specularIntensityMapUv),D.push(w.transmissionMapUv),D.push(w.thicknessMapUv),D.push(w.combine),D.push(w.fogExp2),D.push(w.sizeAttenuation),D.push(w.morphTargetsCount),D.push(w.morphAttributeCount),D.push(w.numDirLights),D.push(w.numPointLights),D.push(w.numSpotLights),D.push(w.numSpotLightMaps),D.push(w.numHemiLights),D.push(w.numRectAreaLights),D.push(w.numDirLightShadows),D.push(w.numPointLightShadows),D.push(w.numSpotLightShadows),D.push(w.numSpotLightShadowsWithMaps),D.push(w.numLightProbes),D.push(w.shadowMapType),D.push(w.toneMapping),D.push(w.numClippingPlanes),D.push(w.numClipIntersection),D.push(w.depthPacking)}function U(D,w){h.disableAll(),w.supportsVertexTextures&&h.enable(0),w.instancing&&h.enable(1),w.instancingColor&&h.enable(2),w.instancingMorph&&h.enable(3),w.matcap&&h.enable(4),w.envMap&&h.enable(5),w.normalMapObjectSpace&&h.enable(6),w.normalMapTangentSpace&&h.enable(7),w.clearcoat&&h.enable(8),w.iridescence&&h.enable(9),w.alphaTest&&h.enable(10),w.vertexColors&&h.enable(11),w.vertexAlphas&&h.enable(12),w.vertexUv1s&&h.enable(13),w.vertexUv2s&&h.enable(14),w.vertexUv3s&&h.enable(15),w.vertexTangents&&h.enable(16),w.anisotropy&&h.enable(17),w.alphaHash&&h.enable(18),w.batching&&h.enable(19),w.dispersion&&h.enable(20),w.batchingColor&&h.enable(21),w.gradientMap&&h.enable(22),D.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.reversedDepthBuffer&&h.enable(4),w.skinning&&h.enable(5),w.morphTargets&&h.enable(6),w.morphNormals&&h.enable(7),w.morphColors&&h.enable(8),w.premultipliedAlpha&&h.enable(9),w.shadowMapEnabled&&h.enable(10),w.doubleSided&&h.enable(11),w.flipSided&&h.enable(12),w.useDepthPacking&&h.enable(13),w.dithering&&h.enable(14),w.transmission&&h.enable(15),w.sheen&&h.enable(16),w.opaque&&h.enable(17),w.pointsUvs&&h.enable(18),w.decodeVideoTexture&&h.enable(19),w.decodeVideoTextureEmissive&&h.enable(20),w.alphaToCoverage&&h.enable(21),D.push(h.mask)}function C(D){const w=E[D.type];let G;if(w){const Z=bi[w];G=Wy.clone(Z.uniforms)}else G=D.uniforms;return G}function B(D,w){let G;for(let Z=0,J=g.length;Z<J;Z++){const Q=g[Z];if(Q.cacheKey===w){G=Q,++G.usedTimes;break}}return G===void 0&&(G=new pA(a,w,D,c),g.push(G)),G}function O(D){if(--D.usedTimes===0){const w=g.indexOf(D);g[w]=g[g.length-1],g.pop(),D.destroy()}}function F(D){p.remove(D)}function q(){p.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:C,acquireProgram:B,releaseProgram:O,releaseShaderCache:F,programs:g,dispose:q}}function xA(){let a=new WeakMap;function t(f){return a.has(f)}function n(f){let h=a.get(f);return h===void 0&&(h={},a.set(f,h)),h}function s(f){a.delete(f)}function l(f,h,p){a.get(f)[h]=p}function c(){a=new WeakMap}return{has:t,get:n,remove:s,update:l,dispose:c}}function SA(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.material.id!==t.material.id?a.material.id-t.material.id:a.z!==t.z?a.z-t.z:a.id-t.id}function d_(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.z!==t.z?t.z-a.z:a.id-t.id}function p_(){const a=[];let t=0;const n=[],s=[],l=[];function c(){t=0,n.length=0,s.length=0,l.length=0}function f(_,x,M,E,T,y){let v=a[t];return v===void 0?(v={id:_.id,object:_,geometry:x,material:M,groupOrder:E,renderOrder:_.renderOrder,z:T,group:y},a[t]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=M,v.groupOrder=E,v.renderOrder=_.renderOrder,v.z=T,v.group=y),t++,v}function h(_,x,M,E,T,y){const v=f(_,x,M,E,T,y);M.transmission>0?s.push(v):M.transparent===!0?l.push(v):n.push(v)}function p(_,x,M,E,T,y){const v=f(_,x,M,E,T,y);M.transmission>0?s.unshift(v):M.transparent===!0?l.unshift(v):n.unshift(v)}function m(_,x){n.length>1&&n.sort(_||SA),s.length>1&&s.sort(x||d_),l.length>1&&l.sort(x||d_)}function g(){for(let _=t,x=a.length;_<x;_++){const M=a[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:s,transparent:l,init:c,push:h,unshift:p,finish:g,sort:m}}function yA(){let a=new WeakMap;function t(s,l){const c=a.get(s);let f;return c===void 0?(f=new p_,a.set(s,[f])):l>=c.length?(f=new p_,c.push(f)):f=c[l],f}function n(){a=new WeakMap}return{get:t,dispose:n}}function MA(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new lt,color:new Ge};break;case"SpotLight":n={position:new lt,direction:new lt,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new lt,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":n={direction:new lt,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":n={color:new Ge,position:new lt,halfWidth:new lt,halfHeight:new lt};break}return a[t.id]=n,n}}}function EA(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[t.id]=n,n}}}let TA=0;function AA(a,t){return(t.castShadow?2:0)-(a.castShadow?2:0)+(t.map?1:0)-(a.map?1:0)}function bA(a){const t=new MA,n=EA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new lt);const l=new lt,c=new dn,f=new dn;function h(m){let g=0,_=0,x=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let M=0,E=0,T=0,y=0,v=0,P=0,U=0,C=0,B=0,O=0,F=0;m.sort(AA);for(let D=0,w=m.length;D<w;D++){const G=m[D],Z=G.color,J=G.intensity,Q=G.distance,st=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=Z.r*J,_+=Z.g*J,x+=Z.b*J;else if(G.isLightProbe){for(let z=0;z<9;z++)s.probe[z].addScaledVector(G.sh.coefficients[z],J);F++}else if(G.isDirectionalLight){const z=t.get(G);if(z.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const V=G.shadow,X=n.get(G);X.shadowIntensity=V.intensity,X.shadowBias=V.bias,X.shadowNormalBias=V.normalBias,X.shadowRadius=V.radius,X.shadowMapSize=V.mapSize,s.directionalShadow[M]=X,s.directionalShadowMap[M]=st,s.directionalShadowMatrix[M]=G.shadow.matrix,P++}s.directional[M]=z,M++}else if(G.isSpotLight){const z=t.get(G);z.position.setFromMatrixPosition(G.matrixWorld),z.color.copy(Z).multiplyScalar(J),z.distance=Q,z.coneCos=Math.cos(G.angle),z.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),z.decay=G.decay,s.spot[T]=z;const V=G.shadow;if(G.map&&(s.spotLightMap[B]=G.map,B++,V.updateMatrices(G),G.castShadow&&O++),s.spotLightMatrix[T]=V.matrix,G.castShadow){const X=n.get(G);X.shadowIntensity=V.intensity,X.shadowBias=V.bias,X.shadowNormalBias=V.normalBias,X.shadowRadius=V.radius,X.shadowMapSize=V.mapSize,s.spotShadow[T]=X,s.spotShadowMap[T]=st,C++}T++}else if(G.isRectAreaLight){const z=t.get(G);z.color.copy(Z).multiplyScalar(J),z.halfWidth.set(G.width*.5,0,0),z.halfHeight.set(0,G.height*.5,0),s.rectArea[y]=z,y++}else if(G.isPointLight){const z=t.get(G);if(z.color.copy(G.color).multiplyScalar(G.intensity),z.distance=G.distance,z.decay=G.decay,G.castShadow){const V=G.shadow,X=n.get(G);X.shadowIntensity=V.intensity,X.shadowBias=V.bias,X.shadowNormalBias=V.normalBias,X.shadowRadius=V.radius,X.shadowMapSize=V.mapSize,X.shadowCameraNear=V.camera.near,X.shadowCameraFar=V.camera.far,s.pointShadow[E]=X,s.pointShadowMap[E]=st,s.pointShadowMatrix[E]=G.shadow.matrix,U++}s.point[E]=z,E++}else if(G.isHemisphereLight){const z=t.get(G);z.skyColor.copy(G.color).multiplyScalar(J),z.groundColor.copy(G.groundColor).multiplyScalar(J),s.hemi[v]=z,v++}}y>0&&(a.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ft.LTC_FLOAT_1,s.rectAreaLTC2=Ft.LTC_FLOAT_2):(s.rectAreaLTC1=Ft.LTC_HALF_1,s.rectAreaLTC2=Ft.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=x;const q=s.hash;(q.directionalLength!==M||q.pointLength!==E||q.spotLength!==T||q.rectAreaLength!==y||q.hemiLength!==v||q.numDirectionalShadows!==P||q.numPointShadows!==U||q.numSpotShadows!==C||q.numSpotMaps!==B||q.numLightProbes!==F)&&(s.directional.length=M,s.spot.length=T,s.rectArea.length=y,s.point.length=E,s.hemi.length=v,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=C+B-O,s.spotLightMap.length=B,s.numSpotLightShadowsWithMaps=O,s.numLightProbes=F,q.directionalLength=M,q.pointLength=E,q.spotLength=T,q.rectAreaLength=y,q.hemiLength=v,q.numDirectionalShadows=P,q.numPointShadows=U,q.numSpotShadows=C,q.numSpotMaps=B,q.numLightProbes=F,s.version=TA++)}function p(m,g){let _=0,x=0,M=0,E=0,T=0;const y=g.matrixWorldInverse;for(let v=0,P=m.length;v<P;v++){const U=m[v];if(U.isDirectionalLight){const C=s.directional[_];C.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(y),_++}else if(U.isSpotLight){const C=s.spot[M];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(y),M++}else if(U.isRectAreaLight){const C=s.rectArea[E];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(y),f.identity(),c.copy(U.matrixWorld),c.premultiply(y),f.extractRotation(c),C.halfWidth.set(U.width*.5,0,0),C.halfHeight.set(0,U.height*.5,0),C.halfWidth.applyMatrix4(f),C.halfHeight.applyMatrix4(f),E++}else if(U.isPointLight){const C=s.point[x];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(y),x++}else if(U.isHemisphereLight){const C=s.hemi[T];C.direction.setFromMatrixPosition(U.matrixWorld),C.direction.transformDirection(y),T++}}}return{setup:h,setupView:p,state:s}}function m_(a){const t=new bA(a),n=[],s=[];function l(g){m.camera=g,n.length=0,s.length=0}function c(g){n.push(g)}function f(g){s.push(g)}function h(){t.setup(n)}function p(g){t.setupView(n,g)}const m={lightsArray:n,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:h,setupLightsView:p,pushLight:c,pushShadow:f}}function RA(a){let t=new WeakMap;function n(l,c=0){const f=t.get(l);let h;return f===void 0?(h=new m_(a),t.set(l,[h])):c>=f.length?(h=new m_(a),f.push(h)):h=f[c],h}function s(){t=new WeakMap}return{get:n,dispose:s}}const CA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function DA(a,t,n){let s=new iv;const l=new Ne,c=new Ne,f=new $e,h=new nM({depthPacking:dy}),p=new iM,m={},g=n.maxTextureSize,_={[Ha]:Hn,[Hn]:Ha,[ea]:ea},x=new sa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:CA,fragmentShader:wA}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const E=new Ga;E.setAttribute("position",new xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new wi(E,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=O_;let v=this.type;this.render=function(O,F,q){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||O.length===0)return;const D=a.getRenderTarget(),w=a.getActiveCubeFace(),G=a.getActiveMipmapLevel(),Z=a.state;Z.setBlending(za),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const J=v!==ta&&this.type===ta,Q=v===ta&&this.type!==ta;for(let st=0,z=O.length;st<z;st++){const V=O[st],X=V.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;l.copy(X.mapSize);const ft=X.getFrameExtents();if(l.multiply(ft),c.copy(X.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/ft.x),l.x=c.x*ft.x,X.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/ft.y),l.y=c.y*ft.y,X.mapSize.y=c.y)),X.map===null||J===!0||Q===!0){const N=this.type!==ta?{minFilter:vi,magFilter:vi}:{};X.map!==null&&X.map.dispose(),X.map=new Ms(l.x,l.y,N),X.map.texture.name=V.name+".shadowMap",X.camera.updateProjectionMatrix()}a.setRenderTarget(X.map),a.clear();const yt=X.getViewportCount();for(let N=0;N<yt;N++){const nt=X.getViewport(N);f.set(c.x*nt.x,c.y*nt.y,c.x*nt.z,c.y*nt.w),Z.viewport(f),X.updateMatrices(V,N),s=X.getFrustum(),C(F,q,X.camera,V,this.type)}X.isPointLightShadow!==!0&&this.type===ta&&P(X,q),X.needsUpdate=!1}v=this.type,y.needsUpdate=!1,a.setRenderTarget(D,w,G)};function P(O,F){const q=t.update(T);x.defines.VSM_SAMPLES!==O.blurSamples&&(x.defines.VSM_SAMPLES=O.blurSamples,M.defines.VSM_SAMPLES=O.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Ms(l.x,l.y)),x.uniforms.shadow_pass.value=O.map.texture,x.uniforms.resolution.value=O.mapSize,x.uniforms.radius.value=O.radius,a.setRenderTarget(O.mapPass),a.clear(),a.renderBufferDirect(F,null,q,x,T,null),M.uniforms.shadow_pass.value=O.mapPass.texture,M.uniforms.resolution.value=O.mapSize,M.uniforms.radius.value=O.radius,a.setRenderTarget(O.map),a.clear(),a.renderBufferDirect(F,null,q,M,T,null)}function U(O,F,q,D){let w=null;const G=q.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(G!==void 0)w=G;else if(w=q.isPointLight===!0?p:h,a.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const Z=w.uuid,J=F.uuid;let Q=m[Z];Q===void 0&&(Q={},m[Z]=Q);let st=Q[J];st===void 0&&(st=w.clone(),Q[J]=st,F.addEventListener("dispose",B)),w=st}if(w.visible=F.visible,w.wireframe=F.wireframe,D===ta?w.side=F.shadowSide!==null?F.shadowSide:F.side:w.side=F.shadowSide!==null?F.shadowSide:_[F.side],w.alphaMap=F.alphaMap,w.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,w.map=F.map,w.clipShadows=F.clipShadows,w.clippingPlanes=F.clippingPlanes,w.clipIntersection=F.clipIntersection,w.displacementMap=F.displacementMap,w.displacementScale=F.displacementScale,w.displacementBias=F.displacementBias,w.wireframeLinewidth=F.wireframeLinewidth,w.linewidth=F.linewidth,q.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const Z=a.properties.get(w);Z.light=q}return w}function C(O,F,q,D,w){if(O.visible===!1)return;if(O.layers.test(F.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&w===ta)&&(!O.frustumCulled||s.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,O.matrixWorld);const J=t.update(O),Q=O.material;if(Array.isArray(Q)){const st=J.groups;for(let z=0,V=st.length;z<V;z++){const X=st[z],ft=Q[X.materialIndex];if(ft&&ft.visible){const yt=U(O,ft,D,w);O.onBeforeShadow(a,O,F,q,J,yt,X),a.renderBufferDirect(q,null,J,yt,O,X),O.onAfterShadow(a,O,F,q,J,yt,X)}}}else if(Q.visible){const st=U(O,Q,D,w);O.onBeforeShadow(a,O,F,q,J,st,null),a.renderBufferDirect(q,null,J,st,O,null),O.onAfterShadow(a,O,F,q,J,st,null)}}const Z=O.children;for(let J=0,Q=Z.length;J<Q;J++)C(Z[J],F,q,D,w)}function B(O){O.target.removeEventListener("dispose",B);for(const q in m){const D=m[q],w=O.target.uuid;w in D&&(D[w].dispose(),delete D[w])}}}const UA={[wh]:Dh,[Uh]:Oh,[Lh]:Fh,[Er]:Nh,[Dh]:wh,[Oh]:Uh,[Fh]:Lh,[Nh]:Er};function LA(a,t){function n(){let W=!1;const Tt=new $e;let Dt=null;const Ht=new $e(0,0,0,0);return{setMask:function(Et){Dt!==Et&&!W&&(a.colorMask(Et,Et,Et,Et),Dt=Et)},setLocked:function(Et){W=Et},setClear:function(Et,_t,Vt,re,Oe){Oe===!0&&(Et*=re,_t*=re,Vt*=re),Tt.set(Et,_t,Vt,re),Ht.equals(Tt)===!1&&(a.clearColor(Et,_t,Vt,re),Ht.copy(Tt))},reset:function(){W=!1,Dt=null,Ht.set(-1,0,0,0)}}}function s(){let W=!1,Tt=!1,Dt=null,Ht=null,Et=null;return{setReversed:function(_t){if(Tt!==_t){const Vt=t.get("EXT_clip_control");_t?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),Tt=_t;const re=Et;Et=null,this.setClear(re)}},getReversed:function(){return Tt},setTest:function(_t){_t?ut(a.DEPTH_TEST):Ct(a.DEPTH_TEST)},setMask:function(_t){Dt!==_t&&!W&&(a.depthMask(_t),Dt=_t)},setFunc:function(_t){if(Tt&&(_t=UA[_t]),Ht!==_t){switch(_t){case wh:a.depthFunc(a.NEVER);break;case Dh:a.depthFunc(a.ALWAYS);break;case Uh:a.depthFunc(a.LESS);break;case Er:a.depthFunc(a.LEQUAL);break;case Lh:a.depthFunc(a.EQUAL);break;case Nh:a.depthFunc(a.GEQUAL);break;case Oh:a.depthFunc(a.GREATER);break;case Fh:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Ht=_t}},setLocked:function(_t){W=_t},setClear:function(_t){Et!==_t&&(Tt&&(_t=1-_t),a.clearDepth(_t),Et=_t)},reset:function(){W=!1,Dt=null,Ht=null,Et=null,Tt=!1}}}function l(){let W=!1,Tt=null,Dt=null,Ht=null,Et=null,_t=null,Vt=null,re=null,Oe=null;return{setTest:function(Te){W||(Te?ut(a.STENCIL_TEST):Ct(a.STENCIL_TEST))},setMask:function(Te){Tt!==Te&&!W&&(a.stencilMask(Te),Tt=Te)},setFunc:function(Te,wn,$n){(Dt!==Te||Ht!==wn||Et!==$n)&&(a.stencilFunc(Te,wn,$n),Dt=Te,Ht=wn,Et=$n)},setOp:function(Te,wn,$n){(_t!==Te||Vt!==wn||re!==$n)&&(a.stencilOp(Te,wn,$n),_t=Te,Vt=wn,re=$n)},setLocked:function(Te){W=Te},setClear:function(Te){Oe!==Te&&(a.clearStencil(Te),Oe=Te)},reset:function(){W=!1,Tt=null,Dt=null,Ht=null,Et=null,_t=null,Vt=null,re=null,Oe=null}}}const c=new n,f=new s,h=new l,p=new WeakMap,m=new WeakMap;let g={},_={},x=new WeakMap,M=[],E=null,T=!1,y=null,v=null,P=null,U=null,C=null,B=null,O=null,F=new Ge(0,0,0),q=0,D=!1,w=null,G=null,Z=null,J=null,Q=null;const st=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,V=0;const X=a.getParameter(a.VERSION);X.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(X)[1]),z=V>=1):X.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),z=V>=2);let ft=null,yt={};const N=a.getParameter(a.SCISSOR_BOX),nt=a.getParameter(a.VIEWPORT),xt=new $e().fromArray(N),At=new $e().fromArray(nt);function Nt(W,Tt,Dt,Ht){const Et=new Uint8Array(4),_t=a.createTexture();a.bindTexture(W,_t),a.texParameteri(W,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(W,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Vt=0;Vt<Dt;Vt++)W===a.TEXTURE_3D||W===a.TEXTURE_2D_ARRAY?a.texImage3D(Tt,0,a.RGBA,1,1,Ht,0,a.RGBA,a.UNSIGNED_BYTE,Et):a.texImage2D(Tt+Vt,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Et);return _t}const it={};it[a.TEXTURE_2D]=Nt(a.TEXTURE_2D,a.TEXTURE_2D,1),it[a.TEXTURE_CUBE_MAP]=Nt(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[a.TEXTURE_2D_ARRAY]=Nt(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),it[a.TEXTURE_3D]=Nt(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),ut(a.DEPTH_TEST),f.setFunc(Er),te(!1),jt(y0),ut(a.CULL_FACE),Se(za);function ut(W){g[W]!==!0&&(a.enable(W),g[W]=!0)}function Ct(W){g[W]!==!1&&(a.disable(W),g[W]=!1)}function Pt(W,Tt){return _[W]!==Tt?(a.bindFramebuffer(W,Tt),_[W]=Tt,W===a.DRAW_FRAMEBUFFER&&(_[a.FRAMEBUFFER]=Tt),W===a.FRAMEBUFFER&&(_[a.DRAW_FRAMEBUFFER]=Tt),!0):!1}function kt(W,Tt){let Dt=M,Ht=!1;if(W){Dt=x.get(Tt),Dt===void 0&&(Dt=[],x.set(Tt,Dt));const Et=W.textures;if(Dt.length!==Et.length||Dt[0]!==a.COLOR_ATTACHMENT0){for(let _t=0,Vt=Et.length;_t<Vt;_t++)Dt[_t]=a.COLOR_ATTACHMENT0+_t;Dt.length=Et.length,Ht=!0}}else Dt[0]!==a.BACK&&(Dt[0]=a.BACK,Ht=!0);Ht&&a.drawBuffers(Dt)}function le(W){return E!==W?(a.useProgram(W),E=W,!0):!1}const Ze={[ms]:a.FUNC_ADD,[IS]:a.FUNC_SUBTRACT,[HS]:a.FUNC_REVERSE_SUBTRACT};Ze[GS]=a.MIN,Ze[VS]=a.MAX;const H={[XS]:a.ZERO,[kS]:a.ONE,[WS]:a.SRC_COLOR,[Rh]:a.SRC_ALPHA,[QS]:a.SRC_ALPHA_SATURATE,[ZS]:a.DST_COLOR,[YS]:a.DST_ALPHA,[qS]:a.ONE_MINUS_SRC_COLOR,[Ch]:a.ONE_MINUS_SRC_ALPHA,[KS]:a.ONE_MINUS_DST_COLOR,[jS]:a.ONE_MINUS_DST_ALPHA,[JS]:a.CONSTANT_COLOR,[$S]:a.ONE_MINUS_CONSTANT_COLOR,[ty]:a.CONSTANT_ALPHA,[ey]:a.ONE_MINUS_CONSTANT_ALPHA};function Se(W,Tt,Dt,Ht,Et,_t,Vt,re,Oe,Te){if(W===za){T===!0&&(Ct(a.BLEND),T=!1);return}if(T===!1&&(ut(a.BLEND),T=!0),W!==BS){if(W!==y||Te!==D){if((v!==ms||C!==ms)&&(a.blendEquation(a.FUNC_ADD),v=ms,C=ms),Te)switch(W){case xs:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case M0:a.blendFunc(a.ONE,a.ONE);break;case E0:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case T0:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case xs:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case M0:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case E0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case T0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}P=null,U=null,B=null,O=null,F.set(0,0,0),q=0,y=W,D=Te}return}Et=Et||Tt,_t=_t||Dt,Vt=Vt||Ht,(Tt!==v||Et!==C)&&(a.blendEquationSeparate(Ze[Tt],Ze[Et]),v=Tt,C=Et),(Dt!==P||Ht!==U||_t!==B||Vt!==O)&&(a.blendFuncSeparate(H[Dt],H[Ht],H[_t],H[Vt]),P=Dt,U=Ht,B=_t,O=Vt),(re.equals(F)===!1||Oe!==q)&&(a.blendColor(re.r,re.g,re.b,Oe),F.copy(re),q=Oe),y=W,D=!1}function ne(W,Tt){W.side===ea?Ct(a.CULL_FACE):ut(a.CULL_FACE);let Dt=W.side===Hn;Tt&&(Dt=!Dt),te(Dt),W.blending===xs&&W.transparent===!1?Se(za):Se(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),c.setMask(W.colorWrite);const Ht=W.stencilWrite;h.setTest(Ht),Ht&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Gt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ut(a.SAMPLE_ALPHA_TO_COVERAGE):Ct(a.SAMPLE_ALPHA_TO_COVERAGE)}function te(W){w!==W&&(W?a.frontFace(a.CW):a.frontFace(a.CCW),w=W)}function jt(W){W!==FS?(ut(a.CULL_FACE),W!==G&&(W===y0?a.cullFace(a.BACK):W===PS?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Ct(a.CULL_FACE),G=W}function Ee(W){W!==Z&&(z&&a.lineWidth(W),Z=W)}function Gt(W,Tt,Dt){W?(ut(a.POLYGON_OFFSET_FILL),(J!==Tt||Q!==Dt)&&(a.polygonOffset(Tt,Dt),J=Tt,Q=Dt)):Ct(a.POLYGON_OFFSET_FILL)}function ae(W){W?ut(a.SCISSOR_TEST):Ct(a.SCISSOR_TEST)}function qe(W){W===void 0&&(W=a.TEXTURE0+st-1),ft!==W&&(a.activeTexture(W),ft=W)}function ke(W,Tt,Dt){Dt===void 0&&(ft===null?Dt=a.TEXTURE0+st-1:Dt=ft);let Ht=yt[Dt];Ht===void 0&&(Ht={type:void 0,texture:void 0},yt[Dt]=Ht),(Ht.type!==W||Ht.texture!==Tt)&&(ft!==Dt&&(a.activeTexture(Dt),ft=Dt),a.bindTexture(W,Tt||it[W]),Ht.type=W,Ht.texture=Tt)}function L(){const W=yt[ft];W!==void 0&&W.type!==void 0&&(a.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function A(){try{a.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function $(){try{a.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function pt(){try{a.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Mt(){try{a.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ht(){try{a.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Kt(){try{a.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Rt(){try{a.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function wt(){try{a.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Bt(){try{a.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function vt(){try{a.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function bt(W){xt.equals(W)===!1&&(a.scissor(W.x,W.y,W.z,W.w),xt.copy(W))}function It(W){At.equals(W)===!1&&(a.viewport(W.x,W.y,W.z,W.w),At.copy(W))}function Ut(W,Tt){let Dt=m.get(Tt);Dt===void 0&&(Dt=new WeakMap,m.set(Tt,Dt));let Ht=Dt.get(W);Ht===void 0&&(Ht=a.getUniformBlockIndex(Tt,W.name),Dt.set(W,Ht))}function Lt(W,Tt){const Ht=m.get(Tt).get(W);p.get(Tt)!==Ht&&(a.uniformBlockBinding(Tt,Ht,W.__bindingPointIndex),p.set(Tt,Ht))}function se(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),f.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),g={},ft=null,yt={},_={},x=new WeakMap,M=[],E=null,T=!1,y=null,v=null,P=null,U=null,C=null,B=null,O=null,F=new Ge(0,0,0),q=0,D=!1,w=null,G=null,Z=null,J=null,Q=null,xt.set(0,0,a.canvas.width,a.canvas.height),At.set(0,0,a.canvas.width,a.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:ut,disable:Ct,bindFramebuffer:Pt,drawBuffers:kt,useProgram:le,setBlending:Se,setMaterial:ne,setFlipSided:te,setCullFace:jt,setLineWidth:Ee,setPolygonOffset:Gt,setScissorTest:ae,activeTexture:qe,bindTexture:ke,unbindTexture:L,compressedTexImage2D:A,compressedTexImage3D:$,texImage2D:Bt,texImage3D:vt,updateUBOMapping:Ut,uniformBlockBinding:Lt,texStorage2D:Rt,texStorage3D:wt,texSubImage2D:pt,texSubImage3D:Mt,compressedTexSubImage2D:ht,compressedTexSubImage3D:Kt,scissor:bt,viewport:It,reset:se}}function NA(a,t,n,s,l,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Ne,g=new WeakMap;let _;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,A){return M?new OffscreenCanvas(L,A):bc("canvas")}function T(L,A,$){let pt=1;const Mt=ke(L);if((Mt.width>$||Mt.height>$)&&(pt=$/Math.max(Mt.width,Mt.height)),pt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ht=Math.floor(pt*Mt.width),Kt=Math.floor(pt*Mt.height);_===void 0&&(_=E(ht,Kt));const Rt=A?E(ht,Kt):_;return Rt.width=ht,Rt.height=Kt,Rt.getContext("2d").drawImage(L,0,0,ht,Kt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+ht+"x"+Kt+")."),Rt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),L;return L}function y(L){return L.generateMipmaps}function v(L){a.generateMipmap(L)}function P(L){return L.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?a.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function U(L,A,$,pt,Mt=!1){if(L!==null){if(a[L]!==void 0)return a[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ht=A;if(A===a.RED&&($===a.FLOAT&&(ht=a.R32F),$===a.HALF_FLOAT&&(ht=a.R16F),$===a.UNSIGNED_BYTE&&(ht=a.R8)),A===a.RED_INTEGER&&($===a.UNSIGNED_BYTE&&(ht=a.R8UI),$===a.UNSIGNED_SHORT&&(ht=a.R16UI),$===a.UNSIGNED_INT&&(ht=a.R32UI),$===a.BYTE&&(ht=a.R8I),$===a.SHORT&&(ht=a.R16I),$===a.INT&&(ht=a.R32I)),A===a.RG&&($===a.FLOAT&&(ht=a.RG32F),$===a.HALF_FLOAT&&(ht=a.RG16F),$===a.UNSIGNED_BYTE&&(ht=a.RG8)),A===a.RG_INTEGER&&($===a.UNSIGNED_BYTE&&(ht=a.RG8UI),$===a.UNSIGNED_SHORT&&(ht=a.RG16UI),$===a.UNSIGNED_INT&&(ht=a.RG32UI),$===a.BYTE&&(ht=a.RG8I),$===a.SHORT&&(ht=a.RG16I),$===a.INT&&(ht=a.RG32I)),A===a.RGB_INTEGER&&($===a.UNSIGNED_BYTE&&(ht=a.RGB8UI),$===a.UNSIGNED_SHORT&&(ht=a.RGB16UI),$===a.UNSIGNED_INT&&(ht=a.RGB32UI),$===a.BYTE&&(ht=a.RGB8I),$===a.SHORT&&(ht=a.RGB16I),$===a.INT&&(ht=a.RGB32I)),A===a.RGBA_INTEGER&&($===a.UNSIGNED_BYTE&&(ht=a.RGBA8UI),$===a.UNSIGNED_SHORT&&(ht=a.RGBA16UI),$===a.UNSIGNED_INT&&(ht=a.RGBA32UI),$===a.BYTE&&(ht=a.RGBA8I),$===a.SHORT&&(ht=a.RGBA16I),$===a.INT&&(ht=a.RGBA32I)),A===a.RGB&&($===a.UNSIGNED_INT_5_9_9_9_REV&&(ht=a.RGB9_E5),$===a.UNSIGNED_INT_10F_11F_11F_REV&&(ht=a.R11F_G11F_B10F)),A===a.RGBA){const Kt=Mt?Tc:we.getTransfer(pt);$===a.FLOAT&&(ht=a.RGBA32F),$===a.HALF_FLOAT&&(ht=a.RGBA16F),$===a.UNSIGNED_BYTE&&(ht=Kt===He?a.SRGB8_ALPHA8:a.RGBA8),$===a.UNSIGNED_SHORT_4_4_4_4&&(ht=a.RGBA4),$===a.UNSIGNED_SHORT_5_5_5_1&&(ht=a.RGB5_A1)}return(ht===a.R16F||ht===a.R32F||ht===a.RG16F||ht===a.RG32F||ht===a.RGBA16F||ht===a.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function C(L,A){let $;return L?A===null||A===ys||A===Uo?$=a.DEPTH24_STENCIL8:A===na?$=a.DEPTH32F_STENCIL8:A===Do&&($=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===ys||A===Uo?$=a.DEPTH_COMPONENT24:A===na?$=a.DEPTH_COMPONENT32F:A===Do&&($=a.DEPTH_COMPONENT16),$}function B(L,A){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==vi&&L.minFilter!==Ri?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function O(L){const A=L.target;A.removeEventListener("dispose",O),q(A),A.isVideoTexture&&g.delete(A)}function F(L){const A=L.target;A.removeEventListener("dispose",F),w(A)}function q(L){const A=s.get(L);if(A.__webglInit===void 0)return;const $=L.source,pt=x.get($);if(pt){const Mt=pt[A.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&D(L),Object.keys(pt).length===0&&x.delete($)}s.remove(L)}function D(L){const A=s.get(L);a.deleteTexture(A.__webglTexture);const $=L.source,pt=x.get($);delete pt[A.__cacheKey],f.memory.textures--}function w(L){const A=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(A.__webglFramebuffer[pt]))for(let Mt=0;Mt<A.__webglFramebuffer[pt].length;Mt++)a.deleteFramebuffer(A.__webglFramebuffer[pt][Mt]);else a.deleteFramebuffer(A.__webglFramebuffer[pt]);A.__webglDepthbuffer&&a.deleteRenderbuffer(A.__webglDepthbuffer[pt])}else{if(Array.isArray(A.__webglFramebuffer))for(let pt=0;pt<A.__webglFramebuffer.length;pt++)a.deleteFramebuffer(A.__webglFramebuffer[pt]);else a.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&a.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&a.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let pt=0;pt<A.__webglColorRenderbuffer.length;pt++)A.__webglColorRenderbuffer[pt]&&a.deleteRenderbuffer(A.__webglColorRenderbuffer[pt]);A.__webglDepthRenderbuffer&&a.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const $=L.textures;for(let pt=0,Mt=$.length;pt<Mt;pt++){const ht=s.get($[pt]);ht.__webglTexture&&(a.deleteTexture(ht.__webglTexture),f.memory.textures--),s.remove($[pt])}s.remove(L)}let G=0;function Z(){G=0}function J(){const L=G;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),G+=1,L}function Q(L){const A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()}function st(L,A){const $=s.get(L);if(L.isVideoTexture&&ae(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&$.__version!==L.version){const pt=L.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it($,L,A);return}}else L.isExternalTexture&&($.__webglTexture=L.sourceTexture?L.sourceTexture:null);n.bindTexture(a.TEXTURE_2D,$.__webglTexture,a.TEXTURE0+A)}function z(L,A){const $=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){it($,L,A);return}n.bindTexture(a.TEXTURE_2D_ARRAY,$.__webglTexture,a.TEXTURE0+A)}function V(L,A){const $=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){it($,L,A);return}n.bindTexture(a.TEXTURE_3D,$.__webglTexture,a.TEXTURE0+A)}function X(L,A){const $=s.get(L);if(L.version>0&&$.__version!==L.version){ut($,L,A);return}n.bindTexture(a.TEXTURE_CUBE_MAP,$.__webglTexture,a.TEXTURE0+A)}const ft={[Bh]:a.REPEAT,[_s]:a.CLAMP_TO_EDGE,[Ih]:a.MIRRORED_REPEAT},yt={[vi]:a.NEAREST,[fy]:a.NEAREST_MIPMAP_NEAREST,[Kl]:a.NEAREST_MIPMAP_LINEAR,[Ri]:a.LINEAR,[Wf]:a.LINEAR_MIPMAP_NEAREST,[vs]:a.LINEAR_MIPMAP_LINEAR},N={[gy]:a.NEVER,[My]:a.ALWAYS,[_y]:a.LESS,[W_]:a.LEQUAL,[vy]:a.EQUAL,[yy]:a.GEQUAL,[xy]:a.GREATER,[Sy]:a.NOTEQUAL};function nt(L,A){if(A.type===na&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Ri||A.magFilter===Wf||A.magFilter===Kl||A.magFilter===vs||A.minFilter===Ri||A.minFilter===Wf||A.minFilter===Kl||A.minFilter===vs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(L,a.TEXTURE_WRAP_S,ft[A.wrapS]),a.texParameteri(L,a.TEXTURE_WRAP_T,ft[A.wrapT]),(L===a.TEXTURE_3D||L===a.TEXTURE_2D_ARRAY)&&a.texParameteri(L,a.TEXTURE_WRAP_R,ft[A.wrapR]),a.texParameteri(L,a.TEXTURE_MAG_FILTER,yt[A.magFilter]),a.texParameteri(L,a.TEXTURE_MIN_FILTER,yt[A.minFilter]),A.compareFunction&&(a.texParameteri(L,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(L,a.TEXTURE_COMPARE_FUNC,N[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===vi||A.minFilter!==Kl&&A.minFilter!==vs||A.type===na&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||s.get(A).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");a.texParameterf(L,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),s.get(A).__currentAnisotropy=A.anisotropy}}}function xt(L,A){let $=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",O));const pt=A.source;let Mt=x.get(pt);Mt===void 0&&(Mt={},x.set(pt,Mt));const ht=Q(A);if(ht!==L.__cacheKey){Mt[ht]===void 0&&(Mt[ht]={texture:a.createTexture(),usedTimes:0},f.memory.textures++,$=!0),Mt[ht].usedTimes++;const Kt=Mt[L.__cacheKey];Kt!==void 0&&(Mt[L.__cacheKey].usedTimes--,Kt.usedTimes===0&&D(A)),L.__cacheKey=ht,L.__webglTexture=Mt[ht].texture}return $}function At(L,A,$){return Math.floor(Math.floor(L/$)/A)}function Nt(L,A,$,pt){const ht=L.updateRanges;if(ht.length===0)n.texSubImage2D(a.TEXTURE_2D,0,0,0,A.width,A.height,$,pt,A.data);else{ht.sort((vt,bt)=>vt.start-bt.start);let Kt=0;for(let vt=1;vt<ht.length;vt++){const bt=ht[Kt],It=ht[vt],Ut=bt.start+bt.count,Lt=At(It.start,A.width,4),se=At(bt.start,A.width,4);It.start<=Ut+1&&Lt===se&&At(It.start+It.count-1,A.width,4)===Lt?bt.count=Math.max(bt.count,It.start+It.count-bt.start):(++Kt,ht[Kt]=It)}ht.length=Kt+1;const Rt=a.getParameter(a.UNPACK_ROW_LENGTH),wt=a.getParameter(a.UNPACK_SKIP_PIXELS),Bt=a.getParameter(a.UNPACK_SKIP_ROWS);a.pixelStorei(a.UNPACK_ROW_LENGTH,A.width);for(let vt=0,bt=ht.length;vt<bt;vt++){const It=ht[vt],Ut=Math.floor(It.start/4),Lt=Math.ceil(It.count/4),se=Ut%A.width,W=Math.floor(Ut/A.width),Tt=Lt,Dt=1;a.pixelStorei(a.UNPACK_SKIP_PIXELS,se),a.pixelStorei(a.UNPACK_SKIP_ROWS,W),n.texSubImage2D(a.TEXTURE_2D,0,se,W,Tt,Dt,$,pt,A.data)}L.clearUpdateRanges(),a.pixelStorei(a.UNPACK_ROW_LENGTH,Rt),a.pixelStorei(a.UNPACK_SKIP_PIXELS,wt),a.pixelStorei(a.UNPACK_SKIP_ROWS,Bt)}}function it(L,A,$){let pt=a.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(pt=a.TEXTURE_2D_ARRAY),A.isData3DTexture&&(pt=a.TEXTURE_3D);const Mt=xt(L,A),ht=A.source;n.bindTexture(pt,L.__webglTexture,a.TEXTURE0+$);const Kt=s.get(ht);if(ht.version!==Kt.__version||Mt===!0){n.activeTexture(a.TEXTURE0+$);const Rt=we.getPrimaries(we.workingColorSpace),wt=A.colorSpace===Pa?null:we.getPrimaries(A.colorSpace),Bt=A.colorSpace===Pa||Rt===wt?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,A.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,A.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);let vt=T(A.image,!1,l.maxTextureSize);vt=qe(A,vt);const bt=c.convert(A.format,A.colorSpace),It=c.convert(A.type);let Ut=U(A.internalFormat,bt,It,A.colorSpace,A.isVideoTexture);nt(pt,A);let Lt;const se=A.mipmaps,W=A.isVideoTexture!==!0,Tt=Kt.__version===void 0||Mt===!0,Dt=ht.dataReady,Ht=B(A,vt);if(A.isDepthTexture)Ut=C(A.format===No,A.type),Tt&&(W?n.texStorage2D(a.TEXTURE_2D,1,Ut,vt.width,vt.height):n.texImage2D(a.TEXTURE_2D,0,Ut,vt.width,vt.height,0,bt,It,null));else if(A.isDataTexture)if(se.length>0){W&&Tt&&n.texStorage2D(a.TEXTURE_2D,Ht,Ut,se[0].width,se[0].height);for(let Et=0,_t=se.length;Et<_t;Et++)Lt=se[Et],W?Dt&&n.texSubImage2D(a.TEXTURE_2D,Et,0,0,Lt.width,Lt.height,bt,It,Lt.data):n.texImage2D(a.TEXTURE_2D,Et,Ut,Lt.width,Lt.height,0,bt,It,Lt.data);A.generateMipmaps=!1}else W?(Tt&&n.texStorage2D(a.TEXTURE_2D,Ht,Ut,vt.width,vt.height),Dt&&Nt(A,vt,bt,It)):n.texImage2D(a.TEXTURE_2D,0,Ut,vt.width,vt.height,0,bt,It,vt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){W&&Tt&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Ht,Ut,se[0].width,se[0].height,vt.depth);for(let Et=0,_t=se.length;Et<_t;Et++)if(Lt=se[Et],A.format!==_i)if(bt!==null)if(W){if(Dt)if(A.layerUpdates.size>0){const Vt=W0(Lt.width,Lt.height,A.format,A.type);for(const re of A.layerUpdates){const Oe=Lt.data.subarray(re*Vt/Lt.data.BYTES_PER_ELEMENT,(re+1)*Vt/Lt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Et,0,0,re,Lt.width,Lt.height,1,bt,Oe)}A.clearLayerUpdates()}else n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Et,0,0,0,Lt.width,Lt.height,vt.depth,bt,Lt.data)}else n.compressedTexImage3D(a.TEXTURE_2D_ARRAY,Et,Ut,Lt.width,Lt.height,vt.depth,0,Lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Dt&&n.texSubImage3D(a.TEXTURE_2D_ARRAY,Et,0,0,0,Lt.width,Lt.height,vt.depth,bt,It,Lt.data):n.texImage3D(a.TEXTURE_2D_ARRAY,Et,Ut,Lt.width,Lt.height,vt.depth,0,bt,It,Lt.data)}else{W&&Tt&&n.texStorage2D(a.TEXTURE_2D,Ht,Ut,se[0].width,se[0].height);for(let Et=0,_t=se.length;Et<_t;Et++)Lt=se[Et],A.format!==_i?bt!==null?W?Dt&&n.compressedTexSubImage2D(a.TEXTURE_2D,Et,0,0,Lt.width,Lt.height,bt,Lt.data):n.compressedTexImage2D(a.TEXTURE_2D,Et,Ut,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Dt&&n.texSubImage2D(a.TEXTURE_2D,Et,0,0,Lt.width,Lt.height,bt,It,Lt.data):n.texImage2D(a.TEXTURE_2D,Et,Ut,Lt.width,Lt.height,0,bt,It,Lt.data)}else if(A.isDataArrayTexture)if(W){if(Tt&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Ht,Ut,vt.width,vt.height,vt.depth),Dt)if(A.layerUpdates.size>0){const Et=W0(vt.width,vt.height,A.format,A.type);for(const _t of A.layerUpdates){const Vt=vt.data.subarray(_t*Et/vt.data.BYTES_PER_ELEMENT,(_t+1)*Et/vt.data.BYTES_PER_ELEMENT);n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,_t,vt.width,vt.height,1,bt,It,Vt)}A.clearLayerUpdates()}else n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,vt.width,vt.height,vt.depth,bt,It,vt.data)}else n.texImage3D(a.TEXTURE_2D_ARRAY,0,Ut,vt.width,vt.height,vt.depth,0,bt,It,vt.data);else if(A.isData3DTexture)W?(Tt&&n.texStorage3D(a.TEXTURE_3D,Ht,Ut,vt.width,vt.height,vt.depth),Dt&&n.texSubImage3D(a.TEXTURE_3D,0,0,0,0,vt.width,vt.height,vt.depth,bt,It,vt.data)):n.texImage3D(a.TEXTURE_3D,0,Ut,vt.width,vt.height,vt.depth,0,bt,It,vt.data);else if(A.isFramebufferTexture){if(Tt)if(W)n.texStorage2D(a.TEXTURE_2D,Ht,Ut,vt.width,vt.height);else{let Et=vt.width,_t=vt.height;for(let Vt=0;Vt<Ht;Vt++)n.texImage2D(a.TEXTURE_2D,Vt,Ut,Et,_t,0,bt,It,null),Et>>=1,_t>>=1}}else if(se.length>0){if(W&&Tt){const Et=ke(se[0]);n.texStorage2D(a.TEXTURE_2D,Ht,Ut,Et.width,Et.height)}for(let Et=0,_t=se.length;Et<_t;Et++)Lt=se[Et],W?Dt&&n.texSubImage2D(a.TEXTURE_2D,Et,0,0,bt,It,Lt):n.texImage2D(a.TEXTURE_2D,Et,Ut,bt,It,Lt);A.generateMipmaps=!1}else if(W){if(Tt){const Et=ke(vt);n.texStorage2D(a.TEXTURE_2D,Ht,Ut,Et.width,Et.height)}Dt&&n.texSubImage2D(a.TEXTURE_2D,0,0,0,bt,It,vt)}else n.texImage2D(a.TEXTURE_2D,0,Ut,bt,It,vt);y(A)&&v(pt),Kt.__version=ht.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function ut(L,A,$){if(A.image.length!==6)return;const pt=xt(L,A),Mt=A.source;n.bindTexture(a.TEXTURE_CUBE_MAP,L.__webglTexture,a.TEXTURE0+$);const ht=s.get(Mt);if(Mt.version!==ht.__version||pt===!0){n.activeTexture(a.TEXTURE0+$);const Kt=we.getPrimaries(we.workingColorSpace),Rt=A.colorSpace===Pa?null:we.getPrimaries(A.colorSpace),wt=A.colorSpace===Pa||Kt===Rt?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,A.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,A.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const Bt=A.isCompressedTexture||A.image[0].isCompressedTexture,vt=A.image[0]&&A.image[0].isDataTexture,bt=[];for(let _t=0;_t<6;_t++)!Bt&&!vt?bt[_t]=T(A.image[_t],!0,l.maxCubemapSize):bt[_t]=vt?A.image[_t].image:A.image[_t],bt[_t]=qe(A,bt[_t]);const It=bt[0],Ut=c.convert(A.format,A.colorSpace),Lt=c.convert(A.type),se=U(A.internalFormat,Ut,Lt,A.colorSpace),W=A.isVideoTexture!==!0,Tt=ht.__version===void 0||pt===!0,Dt=Mt.dataReady;let Ht=B(A,It);nt(a.TEXTURE_CUBE_MAP,A);let Et;if(Bt){W&&Tt&&n.texStorage2D(a.TEXTURE_CUBE_MAP,Ht,se,It.width,It.height);for(let _t=0;_t<6;_t++){Et=bt[_t].mipmaps;for(let Vt=0;Vt<Et.length;Vt++){const re=Et[Vt];A.format!==_i?Ut!==null?W?Dt&&n.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Vt,0,0,re.width,re.height,Ut,re.data):n.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Vt,se,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Dt&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Vt,0,0,re.width,re.height,Ut,Lt,re.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Vt,se,re.width,re.height,0,Ut,Lt,re.data)}}}else{if(Et=A.mipmaps,W&&Tt){Et.length>0&&Ht++;const _t=ke(bt[0]);n.texStorage2D(a.TEXTURE_CUBE_MAP,Ht,se,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(vt){W?Dt&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,bt[_t].width,bt[_t].height,Ut,Lt,bt[_t].data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,se,bt[_t].width,bt[_t].height,0,Ut,Lt,bt[_t].data);for(let Vt=0;Vt<Et.length;Vt++){const Oe=Et[Vt].image[_t].image;W?Dt&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Vt+1,0,0,Oe.width,Oe.height,Ut,Lt,Oe.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Vt+1,se,Oe.width,Oe.height,0,Ut,Lt,Oe.data)}}else{W?Dt&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Ut,Lt,bt[_t]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,se,Ut,Lt,bt[_t]);for(let Vt=0;Vt<Et.length;Vt++){const re=Et[Vt];W?Dt&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Vt+1,0,0,Ut,Lt,re.image[_t]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Vt+1,se,Ut,Lt,re.image[_t])}}}y(A)&&v(a.TEXTURE_CUBE_MAP),ht.__version=Mt.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function Ct(L,A,$,pt,Mt,ht){const Kt=c.convert($.format,$.colorSpace),Rt=c.convert($.type),wt=U($.internalFormat,Kt,Rt,$.colorSpace),Bt=s.get(A),vt=s.get($);if(vt.__renderTarget=A,!Bt.__hasExternalTextures){const bt=Math.max(1,A.width>>ht),It=Math.max(1,A.height>>ht);Mt===a.TEXTURE_3D||Mt===a.TEXTURE_2D_ARRAY?n.texImage3D(Mt,ht,wt,bt,It,A.depth,0,Kt,Rt,null):n.texImage2D(Mt,ht,wt,bt,It,0,Kt,Rt,null)}n.bindFramebuffer(a.FRAMEBUFFER,L),Gt(A)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,pt,Mt,vt.__webglTexture,0,Ee(A)):(Mt===a.TEXTURE_2D||Mt>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,pt,Mt,vt.__webglTexture,ht),n.bindFramebuffer(a.FRAMEBUFFER,null)}function Pt(L,A,$){if(a.bindRenderbuffer(a.RENDERBUFFER,L),A.depthBuffer){const pt=A.depthTexture,Mt=pt&&pt.isDepthTexture?pt.type:null,ht=C(A.stencilBuffer,Mt),Kt=A.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Rt=Ee(A);Gt(A)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Rt,ht,A.width,A.height):$?a.renderbufferStorageMultisample(a.RENDERBUFFER,Rt,ht,A.width,A.height):a.renderbufferStorage(a.RENDERBUFFER,ht,A.width,A.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Kt,a.RENDERBUFFER,L)}else{const pt=A.textures;for(let Mt=0;Mt<pt.length;Mt++){const ht=pt[Mt],Kt=c.convert(ht.format,ht.colorSpace),Rt=c.convert(ht.type),wt=U(ht.internalFormat,Kt,Rt,ht.colorSpace),Bt=Ee(A);$&&Gt(A)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,Bt,wt,A.width,A.height):Gt(A)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Bt,wt,A.width,A.height):a.renderbufferStorage(a.RENDERBUFFER,wt,A.width,A.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function kt(L,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(a.FRAMEBUFFER,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pt=s.get(A.depthTexture);pt.__renderTarget=A,(!pt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),st(A.depthTexture,0);const Mt=pt.__webglTexture,ht=Ee(A);if(A.depthTexture.format===Lo)Gt(A)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,Mt,0,ht):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,Mt,0);else if(A.depthTexture.format===No)Gt(A)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,Mt,0,ht):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,Mt,0);else throw new Error("Unknown depthTexture format")}function le(L){const A=s.get(L),$=L.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==L.depthTexture){const pt=L.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),pt){const Mt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,pt.removeEventListener("dispose",Mt)};pt.addEventListener("dispose",Mt),A.__depthDisposeCallback=Mt}A.__boundDepthTexture=pt}if(L.depthTexture&&!A.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");const pt=L.texture.mipmaps;pt&&pt.length>0?kt(A.__webglFramebuffer[0],L):kt(A.__webglFramebuffer,L)}else if($){A.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(n.bindFramebuffer(a.FRAMEBUFFER,A.__webglFramebuffer[pt]),A.__webglDepthbuffer[pt]===void 0)A.__webglDepthbuffer[pt]=a.createRenderbuffer(),Pt(A.__webglDepthbuffer[pt],L,!1);else{const Mt=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ht=A.__webglDepthbuffer[pt];a.bindRenderbuffer(a.RENDERBUFFER,ht),a.framebufferRenderbuffer(a.FRAMEBUFFER,Mt,a.RENDERBUFFER,ht)}}else{const pt=L.texture.mipmaps;if(pt&&pt.length>0?n.bindFramebuffer(a.FRAMEBUFFER,A.__webglFramebuffer[0]):n.bindFramebuffer(a.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=a.createRenderbuffer(),Pt(A.__webglDepthbuffer,L,!1);else{const Mt=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ht=A.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,ht),a.framebufferRenderbuffer(a.FRAMEBUFFER,Mt,a.RENDERBUFFER,ht)}}n.bindFramebuffer(a.FRAMEBUFFER,null)}function Ze(L,A,$){const pt=s.get(L);A!==void 0&&Ct(pt.__webglFramebuffer,L,L.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),$!==void 0&&le(L)}function H(L){const A=L.texture,$=s.get(L),pt=s.get(A);L.addEventListener("dispose",F);const Mt=L.textures,ht=L.isWebGLCubeRenderTarget===!0,Kt=Mt.length>1;if(Kt||(pt.__webglTexture===void 0&&(pt.__webglTexture=a.createTexture()),pt.__version=A.version,f.memory.textures++),ht){$.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(A.mipmaps&&A.mipmaps.length>0){$.__webglFramebuffer[Rt]=[];for(let wt=0;wt<A.mipmaps.length;wt++)$.__webglFramebuffer[Rt][wt]=a.createFramebuffer()}else $.__webglFramebuffer[Rt]=a.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){$.__webglFramebuffer=[];for(let Rt=0;Rt<A.mipmaps.length;Rt++)$.__webglFramebuffer[Rt]=a.createFramebuffer()}else $.__webglFramebuffer=a.createFramebuffer();if(Kt)for(let Rt=0,wt=Mt.length;Rt<wt;Rt++){const Bt=s.get(Mt[Rt]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=a.createTexture(),f.memory.textures++)}if(L.samples>0&&Gt(L)===!1){$.__webglMultisampledFramebuffer=a.createFramebuffer(),$.__webglColorRenderbuffer=[],n.bindFramebuffer(a.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Rt=0;Rt<Mt.length;Rt++){const wt=Mt[Rt];$.__webglColorRenderbuffer[Rt]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,$.__webglColorRenderbuffer[Rt]);const Bt=c.convert(wt.format,wt.colorSpace),vt=c.convert(wt.type),bt=U(wt.internalFormat,Bt,vt,wt.colorSpace,L.isXRRenderTarget===!0),It=Ee(L);a.renderbufferStorageMultisample(a.RENDERBUFFER,It,bt,L.width,L.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Rt,a.RENDERBUFFER,$.__webglColorRenderbuffer[Rt])}a.bindRenderbuffer(a.RENDERBUFFER,null),L.depthBuffer&&($.__webglDepthRenderbuffer=a.createRenderbuffer(),Pt($.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(a.FRAMEBUFFER,null)}}if(ht){n.bindTexture(a.TEXTURE_CUBE_MAP,pt.__webglTexture),nt(a.TEXTURE_CUBE_MAP,A);for(let Rt=0;Rt<6;Rt++)if(A.mipmaps&&A.mipmaps.length>0)for(let wt=0;wt<A.mipmaps.length;wt++)Ct($.__webglFramebuffer[Rt][wt],L,A,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,wt);else Ct($.__webglFramebuffer[Rt],L,A,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);y(A)&&v(a.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Kt){for(let Rt=0,wt=Mt.length;Rt<wt;Rt++){const Bt=Mt[Rt],vt=s.get(Bt);let bt=a.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(bt=L.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(bt,vt.__webglTexture),nt(bt,Bt),Ct($.__webglFramebuffer,L,Bt,a.COLOR_ATTACHMENT0+Rt,bt,0),y(Bt)&&v(bt)}n.unbindTexture()}else{let Rt=a.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Rt=L.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(Rt,pt.__webglTexture),nt(Rt,A),A.mipmaps&&A.mipmaps.length>0)for(let wt=0;wt<A.mipmaps.length;wt++)Ct($.__webglFramebuffer[wt],L,A,a.COLOR_ATTACHMENT0,Rt,wt);else Ct($.__webglFramebuffer,L,A,a.COLOR_ATTACHMENT0,Rt,0);y(A)&&v(Rt),n.unbindTexture()}L.depthBuffer&&le(L)}function Se(L){const A=L.textures;for(let $=0,pt=A.length;$<pt;$++){const Mt=A[$];if(y(Mt)){const ht=P(L),Kt=s.get(Mt).__webglTexture;n.bindTexture(ht,Kt),v(ht),n.unbindTexture()}}}const ne=[],te=[];function jt(L){if(L.samples>0){if(Gt(L)===!1){const A=L.textures,$=L.width,pt=L.height;let Mt=a.COLOR_BUFFER_BIT;const ht=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Kt=s.get(L),Rt=A.length>1;if(Rt)for(let Bt=0;Bt<A.length;Bt++)n.bindFramebuffer(a.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Bt,a.RENDERBUFFER,null),n.bindFramebuffer(a.FRAMEBUFFER,Kt.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Bt,a.TEXTURE_2D,null,0);n.bindFramebuffer(a.READ_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer);const wt=L.texture.mipmaps;wt&&wt.length>0?n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer[0]):n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer);for(let Bt=0;Bt<A.length;Bt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Mt|=a.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Mt|=a.STENCIL_BUFFER_BIT)),Rt){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Kt.__webglColorRenderbuffer[Bt]);const vt=s.get(A[Bt]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,vt,0)}a.blitFramebuffer(0,0,$,pt,0,0,$,pt,Mt,a.NEAREST),p===!0&&(ne.length=0,te.length=0,ne.push(a.COLOR_ATTACHMENT0+Bt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ne.push(ht),te.push(ht),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,te)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,ne))}if(n.bindFramebuffer(a.READ_FRAMEBUFFER,null),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Rt)for(let Bt=0;Bt<A.length;Bt++){n.bindFramebuffer(a.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Bt,a.RENDERBUFFER,Kt.__webglColorRenderbuffer[Bt]);const vt=s.get(A[Bt]).__webglTexture;n.bindFramebuffer(a.FRAMEBUFFER,Kt.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Bt,a.TEXTURE_2D,vt,0)}n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&p){const A=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[A])}}}function Ee(L){return Math.min(l.maxSamples,L.samples)}function Gt(L){const A=s.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ae(L){const A=f.render.frame;g.get(L)!==A&&(g.set(L,A),L.update())}function qe(L,A){const $=L.colorSpace,pt=L.format,Mt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||$!==br&&$!==Pa&&(we.getTransfer($)===He?(pt!==_i||Mt!==aa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),A}function ke(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=J,this.resetTextureUnits=Z,this.setTexture2D=st,this.setTexture2DArray=z,this.setTexture3D=V,this.setTextureCube=X,this.rebindTextures=Ze,this.setupRenderTarget=H,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=Gt}function OA(a,t){function n(s,l=Pa){let c;const f=we.getTransfer(l);if(s===aa)return a.UNSIGNED_BYTE;if(s===yd)return a.UNSIGNED_SHORT_4_4_4_4;if(s===Md)return a.UNSIGNED_SHORT_5_5_5_1;if(s===I_)return a.UNSIGNED_INT_5_9_9_9_REV;if(s===H_)return a.UNSIGNED_INT_10F_11F_11F_REV;if(s===z_)return a.BYTE;if(s===B_)return a.SHORT;if(s===Do)return a.UNSIGNED_SHORT;if(s===Sd)return a.INT;if(s===ys)return a.UNSIGNED_INT;if(s===na)return a.FLOAT;if(s===Fo)return a.HALF_FLOAT;if(s===G_)return a.ALPHA;if(s===V_)return a.RGB;if(s===_i)return a.RGBA;if(s===Lo)return a.DEPTH_COMPONENT;if(s===No)return a.DEPTH_STENCIL;if(s===X_)return a.RED;if(s===Ed)return a.RED_INTEGER;if(s===k_)return a.RG;if(s===Td)return a.RG_INTEGER;if(s===Ad)return a.RGBA_INTEGER;if(s===vc||s===xc||s===Sc||s===yc)if(f===He)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===vc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===xc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Sc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===yc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===vc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===xc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Sc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===yc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Hh||s===Gh||s===Vh||s===Xh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Hh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Gh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Vh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Xh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===kh||s===Wh||s===qh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===kh||s===Wh)return f===He?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===qh)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Yh||s===jh||s===Zh||s===Kh||s===Qh||s===Jh||s===$h||s===td||s===ed||s===nd||s===id||s===ad||s===sd||s===rd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Yh)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===jh)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Zh)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Kh)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Qh)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Jh)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===$h)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===td)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ed)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===nd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===id)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ad)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===sd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===rd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===od||s===ld||s===cd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===od)return f===He?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ld)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===cd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ud||s===fd||s===hd||s===dd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===ud)return c.COMPRESSED_RED_RGTC1_EXT;if(s===fd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===hd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===dd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Uo?a.UNSIGNED_INT_24_8:a[s]!==void 0?a[s]:null}return{convert:n}}const FA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,PA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class zA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const s=new sv(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,s=new sa({vertexShader:FA,fragmentShader:PA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new wi(new wc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class BA extends Cr{constructor(t,n){super();const s=this;let l=null,c=1,f=null,h="local-floor",p=1,m=null,g=null,_=null,x=null,M=null,E=null;const T=typeof XRWebGLBinding<"u",y=new zA,v={},P=n.getContextAttributes();let U=null,C=null;const B=[],O=[],F=new Ne;let q=null;const D=new mi;D.viewport=new $e;const w=new mi;w.viewport=new $e;const G=[D,w],Z=new aM;let J=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let ut=B[it];return ut===void 0&&(ut=new ph,B[it]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(it){let ut=B[it];return ut===void 0&&(ut=new ph,B[it]=ut),ut.getGripSpace()},this.getHand=function(it){let ut=B[it];return ut===void 0&&(ut=new ph,B[it]=ut),ut.getHandSpace()};function st(it){const ut=O.indexOf(it.inputSource);if(ut===-1)return;const Ct=B[ut];Ct!==void 0&&(Ct.update(it.inputSource,it.frame,m||f),Ct.dispatchEvent({type:it.type,data:it.inputSource}))}function z(){l.removeEventListener("select",st),l.removeEventListener("selectstart",st),l.removeEventListener("selectend",st),l.removeEventListener("squeeze",st),l.removeEventListener("squeezestart",st),l.removeEventListener("squeezeend",st),l.removeEventListener("end",z),l.removeEventListener("inputsourceschange",V);for(let it=0;it<B.length;it++){const ut=O[it];ut!==null&&(O[it]=null,B[it].disconnect(ut))}J=null,Q=null,y.reset();for(const it in v)delete v[it];t.setRenderTarget(U),M=null,x=null,_=null,l=null,C=null,Nt.stop(),s.isPresenting=!1,t.setPixelRatio(q),t.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){c=it,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){h=it,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(it){m=it},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return _===null&&T&&(_=new XRWebGLBinding(l,n)),_},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(it){if(l=it,l!==null){if(U=t.getRenderTarget(),l.addEventListener("select",st),l.addEventListener("selectstart",st),l.addEventListener("selectend",st),l.addEventListener("squeeze",st),l.addEventListener("squeezestart",st),l.addEventListener("squeezeend",st),l.addEventListener("end",z),l.addEventListener("inputsourceschange",V),P.xrCompatible!==!0&&await n.makeXRCompatible(),q=t.getPixelRatio(),t.getSize(F),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ct=null,Pt=null,kt=null;P.depth&&(kt=P.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ct=P.stencil?No:Lo,Pt=P.stencil?Uo:ys);const le={colorFormat:n.RGBA8,depthFormat:kt,scaleFactor:c};_=this.getBinding(),x=_.createProjectionLayer(le),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),C=new Ms(x.textureWidth,x.textureHeight,{format:_i,type:aa,depthTexture:new av(x.textureWidth,x.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,Ct),stencilBuffer:P.stencil,colorSpace:t.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Ct={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,n,Ct),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),C=new Ms(M.framebufferWidth,M.framebufferHeight,{format:_i,type:aa,colorSpace:t.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await l.requestReferenceSpace(h),Nt.setContext(l),Nt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function V(it){for(let ut=0;ut<it.removed.length;ut++){const Ct=it.removed[ut],Pt=O.indexOf(Ct);Pt>=0&&(O[Pt]=null,B[Pt].disconnect(Ct))}for(let ut=0;ut<it.added.length;ut++){const Ct=it.added[ut];let Pt=O.indexOf(Ct);if(Pt===-1){for(let le=0;le<B.length;le++)if(le>=O.length){O.push(Ct),Pt=le;break}else if(O[le]===null){O[le]=Ct,Pt=le;break}if(Pt===-1)break}const kt=B[Pt];kt&&kt.connect(Ct)}}const X=new lt,ft=new lt;function yt(it,ut,Ct){X.setFromMatrixPosition(ut.matrixWorld),ft.setFromMatrixPosition(Ct.matrixWorld);const Pt=X.distanceTo(ft),kt=ut.projectionMatrix.elements,le=Ct.projectionMatrix.elements,Ze=kt[14]/(kt[10]-1),H=kt[14]/(kt[10]+1),Se=(kt[9]+1)/kt[5],ne=(kt[9]-1)/kt[5],te=(kt[8]-1)/kt[0],jt=(le[8]+1)/le[0],Ee=Ze*te,Gt=Ze*jt,ae=Pt/(-te+jt),qe=ae*-te;if(ut.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(qe),it.translateZ(ae),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),kt[10]===-1)it.projectionMatrix.copy(ut.projectionMatrix),it.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const ke=Ze+ae,L=H+ae,A=Ee-qe,$=Gt+(Pt-qe),pt=Se*H/L*ke,Mt=ne*H/L*ke;it.projectionMatrix.makePerspective(A,$,pt,Mt,ke,L),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function N(it,ut){ut===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(ut.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(l===null)return;let ut=it.near,Ct=it.far;y.texture!==null&&(y.depthNear>0&&(ut=y.depthNear),y.depthFar>0&&(Ct=y.depthFar)),Z.near=w.near=D.near=ut,Z.far=w.far=D.far=Ct,(J!==Z.near||Q!==Z.far)&&(l.updateRenderState({depthNear:Z.near,depthFar:Z.far}),J=Z.near,Q=Z.far),Z.layers.mask=it.layers.mask|6,D.layers.mask=Z.layers.mask&3,w.layers.mask=Z.layers.mask&5;const Pt=it.parent,kt=Z.cameras;N(Z,Pt);for(let le=0;le<kt.length;le++)N(kt[le],Pt);kt.length===2?yt(Z,D,w):Z.projectionMatrix.copy(D.projectionMatrix),nt(it,Z,Pt)};function nt(it,ut,Ct){Ct===null?it.matrix.copy(ut.matrixWorld):(it.matrix.copy(Ct.matrixWorld),it.matrix.invert(),it.matrix.multiply(ut.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(ut.projectionMatrix),it.projectionMatrixInverse.copy(ut.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=pd*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(x===null&&M===null))return p},this.setFoveation=function(it){p=it,x!==null&&(x.fixedFoveation=it),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=it)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Z)},this.getCameraTexture=function(it){return v[it]};let xt=null;function At(it,ut){if(g=ut.getViewerPose(m||f),E=ut,g!==null){const Ct=g.views;M!==null&&(t.setRenderTargetFramebuffer(C,M.framebuffer),t.setRenderTarget(C));let Pt=!1;Ct.length!==Z.cameras.length&&(Z.cameras.length=0,Pt=!0);for(let H=0;H<Ct.length;H++){const Se=Ct[H];let ne=null;if(M!==null)ne=M.getViewport(Se);else{const jt=_.getViewSubImage(x,Se);ne=jt.viewport,H===0&&(t.setRenderTargetTextures(C,jt.colorTexture,jt.depthStencilTexture),t.setRenderTarget(C))}let te=G[H];te===void 0&&(te=new mi,te.layers.enable(H),te.viewport=new $e,G[H]=te),te.matrix.fromArray(Se.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(Se.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(ne.x,ne.y,ne.width,ne.height),H===0&&(Z.matrix.copy(te.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Pt===!0&&Z.cameras.push(te)}const kt=l.enabledFeatures;if(kt&&kt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){_=s.getBinding();const H=_.getDepthInformation(Ct[0]);H&&H.isValid&&H.texture&&y.init(H,l.renderState)}if(kt&&kt.includes("camera-access")&&T){t.state.unbindTexture(),_=s.getBinding();for(let H=0;H<Ct.length;H++){const Se=Ct[H].camera;if(Se){let ne=v[Se];ne||(ne=new sv,v[Se]=ne);const te=_.getCameraImage(Se);ne.sourceTexture=te}}}}for(let Ct=0;Ct<B.length;Ct++){const Pt=O[Ct],kt=B[Ct];Pt!==null&&kt!==void 0&&kt.update(Pt,ut,m||f)}xt&&xt(it,ut),ut.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ut}),E=null}const Nt=new ov;Nt.setAnimationLoop(At),this.setAnimationLoop=function(it){xt=it},this.dispose=function(){}}}const hs=new Es,IA=new dn;function HA(a,t){function n(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function s(y,v){v.color.getRGB(y.fogColor.value,tv(a)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function l(y,v,P,U,C){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(y,v):v.isMeshToonMaterial?(c(y,v),_(y,v)):v.isMeshPhongMaterial?(c(y,v),g(y,v)):v.isMeshStandardMaterial?(c(y,v),x(y,v),v.isMeshPhysicalMaterial&&M(y,v,C)):v.isMeshMatcapMaterial?(c(y,v),E(y,v)):v.isMeshDepthMaterial?c(y,v):v.isMeshDistanceMaterial?(c(y,v),T(y,v)):v.isMeshNormalMaterial?c(y,v):v.isLineBasicMaterial?(f(y,v),v.isLineDashedMaterial&&h(y,v)):v.isPointsMaterial?p(y,v,P,U):v.isSpriteMaterial?m(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,n(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,n(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Hn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,n(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Hn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,n(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,n(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const P=t.get(v),U=P.envMap,C=P.envMapRotation;U&&(y.envMap.value=U,hs.copy(C),hs.x*=-1,hs.y*=-1,hs.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),y.envMapRotation.value.setFromMatrix4(IA.makeRotationFromEuler(hs)),y.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,y.aoMapTransform))}function f(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,n(v.map,y.mapTransform))}function h(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function p(y,v,P,U){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*P,y.scale.value=U*.5,v.map&&(y.map.value=v.map,n(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function m(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,n(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function g(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function _(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function x(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function M(y,v,P){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Hn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=P.texture,y.transmissionSamplerSize.value.set(P.width,P.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,v){v.matcap&&(y.matcap.value=v.matcap)}function T(y,v){const P=t.get(v).light;y.referencePosition.value.setFromMatrixPosition(P.matrixWorld),y.nearDistance.value=P.shadow.camera.near,y.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function GA(a,t,n,s){let l={},c={},f=[];const h=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function p(P,U){const C=U.program;s.uniformBlockBinding(P,C)}function m(P,U){let C=l[P.id];C===void 0&&(E(P),C=g(P),l[P.id]=C,P.addEventListener("dispose",y));const B=U.program;s.updateUBOMapping(P,B);const O=t.render.frame;c[P.id]!==O&&(x(P),c[P.id]=O)}function g(P){const U=_();P.__bindingPointIndex=U;const C=a.createBuffer(),B=P.__size,O=P.usage;return a.bindBuffer(a.UNIFORM_BUFFER,C),a.bufferData(a.UNIFORM_BUFFER,B,O),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,U,C),C}function _(){for(let P=0;P<h;P++)if(f.indexOf(P)===-1)return f.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(P){const U=l[P.id],C=P.uniforms,B=P.__cache;a.bindBuffer(a.UNIFORM_BUFFER,U);for(let O=0,F=C.length;O<F;O++){const q=Array.isArray(C[O])?C[O]:[C[O]];for(let D=0,w=q.length;D<w;D++){const G=q[D];if(M(G,O,D,B)===!0){const Z=G.__offset,J=Array.isArray(G.value)?G.value:[G.value];let Q=0;for(let st=0;st<J.length;st++){const z=J[st],V=T(z);typeof z=="number"||typeof z=="boolean"?(G.__data[0]=z,a.bufferSubData(a.UNIFORM_BUFFER,Z+Q,G.__data)):z.isMatrix3?(G.__data[0]=z.elements[0],G.__data[1]=z.elements[1],G.__data[2]=z.elements[2],G.__data[3]=0,G.__data[4]=z.elements[3],G.__data[5]=z.elements[4],G.__data[6]=z.elements[5],G.__data[7]=0,G.__data[8]=z.elements[6],G.__data[9]=z.elements[7],G.__data[10]=z.elements[8],G.__data[11]=0):(z.toArray(G.__data,Q),Q+=V.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,Z,G.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function M(P,U,C,B){const O=P.value,F=U+"_"+C;if(B[F]===void 0)return typeof O=="number"||typeof O=="boolean"?B[F]=O:B[F]=O.clone(),!0;{const q=B[F];if(typeof O=="number"||typeof O=="boolean"){if(q!==O)return B[F]=O,!0}else if(q.equals(O)===!1)return q.copy(O),!0}return!1}function E(P){const U=P.uniforms;let C=0;const B=16;for(let F=0,q=U.length;F<q;F++){const D=Array.isArray(U[F])?U[F]:[U[F]];for(let w=0,G=D.length;w<G;w++){const Z=D[w],J=Array.isArray(Z.value)?Z.value:[Z.value];for(let Q=0,st=J.length;Q<st;Q++){const z=J[Q],V=T(z),X=C%B,ft=X%V.boundary,yt=X+ft;C+=ft,yt!==0&&B-yt<V.storage&&(C+=B-yt),Z.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=C,C+=V.storage}}}const O=C%B;return O>0&&(C+=B-O),P.__size=C,P.__cache={},this}function T(P){const U={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(U.boundary=4,U.storage=4):P.isVector2?(U.boundary=8,U.storage=8):P.isVector3||P.isColor?(U.boundary=16,U.storage=12):P.isVector4?(U.boundary=16,U.storage=16):P.isMatrix3?(U.boundary=48,U.storage=48):P.isMatrix4?(U.boundary=64,U.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),U}function y(P){const U=P.target;U.removeEventListener("dispose",y);const C=f.indexOf(U.__bindingPointIndex);f.splice(C,1),a.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function v(){for(const P in l)a.deleteBuffer(l[P]);f=[],l={},c={}}return{bind:p,update:m,dispose:v}}class VA{constructor(t={}){const{canvas:n=Ty(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=f;const E=new Uint32Array(4),T=new Int32Array(4);let y=null,v=null;const P=[],U=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ba,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let B=!1;this._outputColorSpace=Qn;let O=0,F=0,q=null,D=-1,w=null;const G=new $e,Z=new $e;let J=null;const Q=new Ge(0);let st=0,z=n.width,V=n.height,X=1,ft=null,yt=null;const N=new $e(0,0,z,V),nt=new $e(0,0,z,V);let xt=!1;const At=new iv;let Nt=!1,it=!1;const ut=new dn,Ct=new lt,Pt=new $e,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let le=!1;function Ze(){return q===null?X:1}let H=s;function Se(R,Y){return n.getContext(R,Y)}try{const R={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${xd}`),n.addEventListener("webglcontextlost",Dt,!1),n.addEventListener("webglcontextrestored",Ht,!1),n.addEventListener("webglcontextcreationerror",Et,!1),H===null){const Y="webgl2";if(H=Se(Y,R),H===null)throw Se(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ne,te,jt,Ee,Gt,ae,qe,ke,L,A,$,pt,Mt,ht,Kt,Rt,wt,Bt,vt,bt,It,Ut,Lt,se;function W(){ne=new J1(H),ne.init(),Ut=new OA(H,ne),te=new W1(H,ne,t,Ut),jt=new LA(H,ne),te.reversedDepthBuffer&&x&&jt.buffers.depth.setReversed(!0),Ee=new eT(H),Gt=new xA,ae=new NA(H,ne,jt,Gt,te,Ut,Ee),qe=new Y1(C),ke=new Q1(C),L=new oM(H),Lt=new X1(H,L),A=new $1(H,L,Ee,Lt),$=new iT(H,A,L,Ee),vt=new nT(H,te,ae),Rt=new q1(Gt),pt=new vA(C,qe,ke,ne,te,Lt,Rt),Mt=new HA(C,Gt),ht=new yA,Kt=new RA(ne),Bt=new V1(C,qe,ke,jt,$,M,p),wt=new DA(C,$,te),se=new GA(H,Ee,te,jt),bt=new k1(H,ne,Ee),It=new tT(H,ne,Ee),Ee.programs=pt.programs,C.capabilities=te,C.extensions=ne,C.properties=Gt,C.renderLists=ht,C.shadowMap=wt,C.state=jt,C.info=Ee}W();const Tt=new BA(C,H);this.xr=Tt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const R=ne.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ne.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(R){R!==void 0&&(X=R,this.setSize(z,V,!1))},this.getSize=function(R){return R.set(z,V)},this.setSize=function(R,Y,rt=!0){if(Tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=R,V=Y,n.width=Math.floor(R*X),n.height=Math.floor(Y*X),rt===!0&&(n.style.width=R+"px",n.style.height=Y+"px"),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(z*X,V*X).floor()},this.setDrawingBufferSize=function(R,Y,rt){z=R,V=Y,X=rt,n.width=Math.floor(R*rt),n.height=Math.floor(Y*rt),this.setViewport(0,0,R,Y)},this.getCurrentViewport=function(R){return R.copy(G)},this.getViewport=function(R){return R.copy(N)},this.setViewport=function(R,Y,rt,ot){R.isVector4?N.set(R.x,R.y,R.z,R.w):N.set(R,Y,rt,ot),jt.viewport(G.copy(N).multiplyScalar(X).round())},this.getScissor=function(R){return R.copy(nt)},this.setScissor=function(R,Y,rt,ot){R.isVector4?nt.set(R.x,R.y,R.z,R.w):nt.set(R,Y,rt,ot),jt.scissor(Z.copy(nt).multiplyScalar(X).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(R){jt.setScissorTest(xt=R)},this.setOpaqueSort=function(R){ft=R},this.setTransparentSort=function(R){yt=R},this.getClearColor=function(R){return R.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor(...arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,rt=!0){let ot=0;if(R){let K=!1;if(q!==null){const St=q.texture.format;K=St===Ad||St===Td||St===Ed}if(K){const St=q.texture.type,Ot=St===aa||St===ys||St===Do||St===Uo||St===yd||St===Md,qt=Bt.getClearColor(),zt=Bt.getClearAlpha(),Qt=qt.r,ie=qt.g,Jt=qt.b;Ot?(E[0]=Qt,E[1]=ie,E[2]=Jt,E[3]=zt,H.clearBufferuiv(H.COLOR,0,E)):(T[0]=Qt,T[1]=ie,T[2]=Jt,T[3]=zt,H.clearBufferiv(H.COLOR,0,T))}else ot|=H.COLOR_BUFFER_BIT}Y&&(ot|=H.DEPTH_BUFFER_BIT),rt&&(ot|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Dt,!1),n.removeEventListener("webglcontextrestored",Ht,!1),n.removeEventListener("webglcontextcreationerror",Et,!1),Bt.dispose(),ht.dispose(),Kt.dispose(),Gt.dispose(),qe.dispose(),ke.dispose(),$.dispose(),Lt.dispose(),se.dispose(),pt.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",$n),Tt.removeEventListener("sessionend",Dr),Si.stop()};function Dt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function Ht(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const R=Ee.autoReset,Y=wt.enabled,rt=wt.autoUpdate,ot=wt.needsUpdate,K=wt.type;W(),Ee.autoReset=R,wt.enabled=Y,wt.autoUpdate=rt,wt.needsUpdate=ot,wt.type=K}function Et(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function _t(R){const Y=R.target;Y.removeEventListener("dispose",_t),Vt(Y)}function Vt(R){re(R),Gt.remove(R)}function re(R){const Y=Gt.get(R).programs;Y!==void 0&&(Y.forEach(function(rt){pt.releaseProgram(rt)}),R.isShaderMaterial&&pt.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,rt,ot,K,St){Y===null&&(Y=kt);const Ot=K.isMesh&&K.matrixWorld.determinant()<0,qt=ra(R,Y,rt,ot,K);jt.setMaterial(ot,Ot);let zt=rt.index,Qt=1;if(ot.wireframe===!0){if(zt=A.getWireframeAttribute(rt),zt===void 0)return;Qt=2}const ie=rt.drawRange,Jt=rt.attributes.position;let de=ie.start*Qt,Ue=(ie.start+ie.count)*Qt;St!==null&&(de=Math.max(de,St.start*Qt),Ue=Math.min(Ue,(St.start+St.count)*Qt)),zt!==null?(de=Math.max(de,0),Ue=Math.min(Ue,zt.count)):Jt!=null&&(de=Math.max(de,0),Ue=Math.min(Ue,Jt.count));const Ve=Ue-de;if(Ve<0||Ve===1/0)return;Lt.setup(K,ot,qt,rt,zt);let Le,pe=bt;if(zt!==null&&(Le=L.get(zt),pe=It,pe.setIndex(Le)),K.isMesh)ot.wireframe===!0?(jt.setLineWidth(ot.wireframeLinewidth*Ze()),pe.setMode(H.LINES)):pe.setMode(H.TRIANGLES);else if(K.isLine){let Yt=ot.linewidth;Yt===void 0&&(Yt=1),jt.setLineWidth(Yt*Ze()),K.isLineSegments?pe.setMode(H.LINES):K.isLineLoop?pe.setMode(H.LINE_LOOP):pe.setMode(H.LINE_STRIP)}else K.isPoints?pe.setMode(H.POINTS):K.isSprite&&pe.setMode(H.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Oo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pe.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))pe.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Yt=K._multiDrawStarts,We=K._multiDrawCounts,Ae=K._multiDrawCount,Sn=zt?L.get(zt).bytesPerElement:1,Ui=Gt.get(ot).currentProgram.getUniforms();for(let gn=0;gn<Ae;gn++)Ui.setValue(H,"_gl_DrawID",gn),pe.render(Yt[gn]/Sn,We[gn])}else if(K.isInstancedMesh)pe.renderInstances(de,Ve,K.count);else if(rt.isInstancedBufferGeometry){const Yt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,We=Math.min(rt.instanceCount,Yt);pe.renderInstances(de,Ve,We)}else pe.render(de,Ve)};function Oe(R,Y,rt){R.transparent===!0&&R.side===ea&&R.forceSinglePass===!1?(R.side=Hn,R.needsUpdate=!0,Gn(R,Y,rt),R.side=Ha,R.needsUpdate=!0,Gn(R,Y,rt),R.side=ea):Gn(R,Y,rt)}this.compile=function(R,Y,rt=null){rt===null&&(rt=R),v=Kt.get(rt),v.init(Y),U.push(v),rt.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(v.pushLight(K),K.castShadow&&v.pushShadow(K))}),R!==rt&&R.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(v.pushLight(K),K.castShadow&&v.pushShadow(K))}),v.setupLights();const ot=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const St=K.material;if(St)if(Array.isArray(St))for(let Ot=0;Ot<St.length;Ot++){const qt=St[Ot];Oe(qt,rt,K),ot.add(qt)}else Oe(St,rt,K),ot.add(St)}),v=U.pop(),ot},this.compileAsync=function(R,Y,rt=null){const ot=this.compile(R,Y,rt);return new Promise(K=>{function St(){if(ot.forEach(function(Ot){Gt.get(Ot).currentProgram.isReady()&&ot.delete(Ot)}),ot.size===0){K(R);return}setTimeout(St,10)}ne.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let Te=null;function wn(R){Te&&Te(R)}function $n(){Si.stop()}function Dr(){Si.start()}const Si=new ov;Si.setAnimationLoop(wn),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(R){Te=R,Tt.setAnimationLoop(R),R===null?Si.stop():Si.start()},Tt.addEventListener("sessionstart",$n),Tt.addEventListener("sessionend",Dr),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(Y),Y=Tt.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,Y,q),v=Kt.get(R,U.length),v.init(Y),U.push(v),ut.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),At.setFromProjectionMatrix(ut,Ci,Y.reversedDepth),it=this.localClippingEnabled,Nt=Rt.init(this.clippingPlanes,it),y=ht.get(R,P.length),y.init(),P.push(y),Tt.enabled===!0&&Tt.isPresenting===!0){const St=C.xr.getDepthSensingMesh();St!==null&&Ts(St,Y,-1/0,C.sortObjects)}Ts(R,Y,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(ft,yt),le=Tt.enabled===!1||Tt.isPresenting===!1||Tt.hasDepthSensing()===!1,le&&Bt.addToRenderList(y,R),this.info.render.frame++,Nt===!0&&Rt.beginShadows();const rt=v.state.shadowsArray;wt.render(rt,R,Y),Nt===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=y.opaque,K=y.transmissive;if(v.setupLights(),Y.isArrayCamera){const St=Y.cameras;if(K.length>0)for(let Ot=0,qt=St.length;Ot<qt;Ot++){const zt=St[Ot];bs(ot,K,R,zt)}le&&Bt.render(R);for(let Ot=0,qt=St.length;Ot<qt;Ot++){const zt=St[Ot];As(y,R,zt,zt.viewport)}}else K.length>0&&bs(ot,K,R,Y),le&&Bt.render(R),As(y,R,Y);q!==null&&F===0&&(ae.updateMultisampleRenderTarget(q),ae.updateRenderTargetMipmap(q)),R.isScene===!0&&R.onAfterRender(C,R,Y),Lt.resetDefaultState(),D=-1,w=null,U.pop(),U.length>0?(v=U[U.length-1],Nt===!0&&Rt.setGlobalState(C.clippingPlanes,v.state.camera)):v=null,P.pop(),P.length>0?y=P[P.length-1]:y=null};function Ts(R,Y,rt,ot){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)rt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)v.pushLight(R),R.castShadow&&v.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||At.intersectsSprite(R)){ot&&Pt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ut);const Ot=$.update(R),qt=R.material;qt.visible&&y.push(R,Ot,qt,rt,Pt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||At.intersectsObject(R))){const Ot=$.update(R),qt=R.material;if(ot&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Pt.copy(R.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),Pt.copy(Ot.boundingSphere.center)),Pt.applyMatrix4(R.matrixWorld).applyMatrix4(ut)),Array.isArray(qt)){const zt=Ot.groups;for(let Qt=0,ie=zt.length;Qt<ie;Qt++){const Jt=zt[Qt],de=qt[Jt.materialIndex];de&&de.visible&&y.push(R,Ot,de,rt,Pt.z,Jt)}}else qt.visible&&y.push(R,Ot,qt,rt,Pt.z,null)}}const St=R.children;for(let Ot=0,qt=St.length;Ot<qt;Ot++)Ts(St[Ot],Y,rt,ot)}function As(R,Y,rt,ot){const K=R.opaque,St=R.transmissive,Ot=R.transparent;v.setupLightsView(rt),Nt===!0&&Rt.setGlobalState(C.clippingPlanes,rt),ot&&jt.viewport(G.copy(ot)),K.length>0&&Va(K,Y,rt),St.length>0&&Va(St,Y,rt),Ot.length>0&&Va(Ot,Y,rt),jt.buffers.depth.setTest(!0),jt.buffers.depth.setMask(!0),jt.buffers.color.setMask(!0),jt.setPolygonOffset(!1)}function bs(R,Y,rt,ot){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[ot.id]===void 0&&(v.state.transmissionRenderTarget[ot.id]=new Ms(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?Fo:aa,minFilter:vs,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace}));const St=v.state.transmissionRenderTarget[ot.id],Ot=ot.viewport||G;St.setSize(Ot.z*C.transmissionResolutionScale,Ot.w*C.transmissionResolutionScale);const qt=C.getRenderTarget(),zt=C.getActiveCubeFace(),Qt=C.getActiveMipmapLevel();C.setRenderTarget(St),C.getClearColor(Q),st=C.getClearAlpha(),st<1&&C.setClearColor(16777215,.5),C.clear(),le&&Bt.render(rt);const ie=C.toneMapping;C.toneMapping=Ba;const Jt=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),v.setupLightsView(ot),Nt===!0&&Rt.setGlobalState(C.clippingPlanes,ot),Va(R,rt,ot),ae.updateMultisampleRenderTarget(St),ae.updateRenderTargetMipmap(St),ne.has("WEBGL_multisampled_render_to_texture")===!1){let de=!1;for(let Ue=0,Ve=Y.length;Ue<Ve;Ue++){const Le=Y[Ue],pe=Le.object,Yt=Le.geometry,We=Le.material,Ae=Le.group;if(We.side===ea&&pe.layers.test(ot.layers)){const Sn=We.side;We.side=Hn,We.needsUpdate=!0,Ur(pe,rt,ot,Yt,We,Ae),We.side=Sn,We.needsUpdate=!0,de=!0}}de===!0&&(ae.updateMultisampleRenderTarget(St),ae.updateRenderTargetMipmap(St))}C.setRenderTarget(qt,zt,Qt),C.setClearColor(Q,st),Jt!==void 0&&(ot.viewport=Jt),C.toneMapping=ie}function Va(R,Y,rt){const ot=Y.isScene===!0?Y.overrideMaterial:null;for(let K=0,St=R.length;K<St;K++){const Ot=R[K],qt=Ot.object,zt=Ot.geometry,Qt=Ot.group;let ie=Ot.material;ie.allowOverride===!0&&ot!==null&&(ie=ot),qt.layers.test(rt.layers)&&Ur(qt,Y,rt,zt,ie,Qt)}}function Ur(R,Y,rt,ot,K,St){R.onBeforeRender(C,Y,rt,ot,K,St),R.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(C,Y,rt,ot,R,St),K.transparent===!0&&K.side===ea&&K.forceSinglePass===!1?(K.side=Hn,K.needsUpdate=!0,C.renderBufferDirect(rt,Y,ot,K,R,St),K.side=Ha,K.needsUpdate=!0,C.renderBufferDirect(rt,Y,ot,K,R,St),K.side=ea):C.renderBufferDirect(rt,Y,ot,K,R,St),R.onAfterRender(C,Y,rt,ot,K,St)}function Gn(R,Y,rt){Y.isScene!==!0&&(Y=kt);const ot=Gt.get(R),K=v.state.lights,St=v.state.shadowsArray,Ot=K.state.version,qt=pt.getParameters(R,K.state,St,Y,rt),zt=pt.getProgramCacheKey(qt);let Qt=ot.programs;ot.environment=R.isMeshStandardMaterial?Y.environment:null,ot.fog=Y.fog,ot.envMap=(R.isMeshStandardMaterial?ke:qe).get(R.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,Qt===void 0&&(R.addEventListener("dispose",_t),Qt=new Map,ot.programs=Qt);let ie=Qt.get(zt);if(ie!==void 0){if(ot.currentProgram===ie&&ot.lightsStateVersion===Ot)return xn(R,qt),ie}else qt.uniforms=pt.getUniforms(R),R.onBeforeCompile(qt,C),ie=pt.acquireProgram(qt,zt),Qt.set(zt,ie),ot.uniforms=qt.uniforms;const Jt=ot.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Jt.clippingPlanes=Rt.uniform),xn(R,qt),ot.needsLights=Lc(R),ot.lightsStateVersion=Ot,ot.needsLights&&(Jt.ambientLightColor.value=K.state.ambient,Jt.lightProbe.value=K.state.probe,Jt.directionalLights.value=K.state.directional,Jt.directionalLightShadows.value=K.state.directionalShadow,Jt.spotLights.value=K.state.spot,Jt.spotLightShadows.value=K.state.spotShadow,Jt.rectAreaLights.value=K.state.rectArea,Jt.ltc_1.value=K.state.rectAreaLTC1,Jt.ltc_2.value=K.state.rectAreaLTC2,Jt.pointLights.value=K.state.point,Jt.pointLightShadows.value=K.state.pointShadow,Jt.hemisphereLights.value=K.state.hemi,Jt.directionalShadowMap.value=K.state.directionalShadowMap,Jt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Jt.spotShadowMap.value=K.state.spotShadowMap,Jt.spotLightMatrix.value=K.state.spotLightMatrix,Jt.spotLightMap.value=K.state.spotLightMap,Jt.pointShadowMap.value=K.state.pointShadowMap,Jt.pointShadowMatrix.value=K.state.pointShadowMatrix),ot.currentProgram=ie,ot.uniformsList=null,ie}function an(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=Ec.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function xn(R,Y){const rt=Gt.get(R);rt.outputColorSpace=Y.outputColorSpace,rt.batching=Y.batching,rt.batchingColor=Y.batchingColor,rt.instancing=Y.instancing,rt.instancingColor=Y.instancingColor,rt.instancingMorph=Y.instancingMorph,rt.skinning=Y.skinning,rt.morphTargets=Y.morphTargets,rt.morphNormals=Y.morphNormals,rt.morphColors=Y.morphColors,rt.morphTargetsCount=Y.morphTargetsCount,rt.numClippingPlanes=Y.numClippingPlanes,rt.numIntersection=Y.numClipIntersection,rt.vertexAlphas=Y.vertexAlphas,rt.vertexTangents=Y.vertexTangents,rt.toneMapping=Y.toneMapping}function ra(R,Y,rt,ot,K){Y.isScene!==!0&&(Y=kt),ae.resetTextureUnits();const St=Y.fog,Ot=ot.isMeshStandardMaterial?Y.environment:null,qt=q===null?C.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:br,zt=(ot.isMeshStandardMaterial?ke:qe).get(ot.envMap||Ot),Qt=ot.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,ie=!!rt.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Jt=!!rt.morphAttributes.position,de=!!rt.morphAttributes.normal,Ue=!!rt.morphAttributes.color;let Ve=Ba;ot.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Ve=C.toneMapping);const Le=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,pe=Le!==void 0?Le.length:0,Yt=Gt.get(ot),We=v.state.lights;if(Nt===!0&&(it===!0||R!==w)){const fn=R===w&&ot.id===D;Rt.setState(ot,R,fn)}let Ae=!1;ot.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==We.state.version||Yt.outputColorSpace!==qt||K.isBatchedMesh&&Yt.batching===!1||!K.isBatchedMesh&&Yt.batching===!0||K.isBatchedMesh&&Yt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Yt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Yt.instancing===!1||!K.isInstancedMesh&&Yt.instancing===!0||K.isSkinnedMesh&&Yt.skinning===!1||!K.isSkinnedMesh&&Yt.skinning===!0||K.isInstancedMesh&&Yt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Yt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Yt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Yt.instancingMorph===!1&&K.morphTexture!==null||Yt.envMap!==zt||ot.fog===!0&&Yt.fog!==St||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==Rt.numPlanes||Yt.numIntersection!==Rt.numIntersection)||Yt.vertexAlphas!==Qt||Yt.vertexTangents!==ie||Yt.morphTargets!==Jt||Yt.morphNormals!==de||Yt.morphColors!==Ue||Yt.toneMapping!==Ve||Yt.morphTargetsCount!==pe)&&(Ae=!0):(Ae=!0,Yt.__version=ot.version);let Sn=Yt.currentProgram;Ae===!0&&(Sn=Gn(ot,Y,K));let Ui=!1,gn=!1,ka=!1;const _e=Sn.getUniforms(),An=Yt.uniforms;if(jt.useProgram(Sn.program)&&(Ui=!0,gn=!0,ka=!0),ot.id!==D&&(D=ot.id,gn=!0),Ui||w!==R){jt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),_e.setValue(H,"projectionMatrix",R.projectionMatrix),_e.setValue(H,"viewMatrix",R.matrixWorldInverse);const tn=_e.map.cameraPosition;tn!==void 0&&tn.setValue(H,Ct.setFromMatrixPosition(R.matrixWorld)),te.logarithmicDepthBuffer&&_e.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&_e.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,gn=!0,ka=!0)}if(K.isSkinnedMesh){_e.setOptional(H,K,"bindMatrix"),_e.setOptional(H,K,"bindMatrixInverse");const fn=K.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),_e.setValue(H,"boneTexture",fn.boneTexture,ae))}K.isBatchedMesh&&(_e.setOptional(H,K,"batchingTexture"),_e.setValue(H,"batchingTexture",K._matricesTexture,ae),_e.setOptional(H,K,"batchingIdTexture"),_e.setValue(H,"batchingIdTexture",K._indirectTexture,ae),_e.setOptional(H,K,"batchingColorTexture"),K._colorsTexture!==null&&_e.setValue(H,"batchingColorTexture",K._colorsTexture,ae));const Dn=rt.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&vt.update(K,rt,Sn),(gn||Yt.receiveShadow!==K.receiveShadow)&&(Yt.receiveShadow=K.receiveShadow,_e.setValue(H,"receiveShadow",K.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(An.envMap.value=zt,An.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&Y.environment!==null&&(An.envMapIntensity.value=Y.environmentIntensity),gn&&(_e.setValue(H,"toneMappingExposure",C.toneMappingExposure),Yt.needsLights&&Lr(An,ka),St&&ot.fog===!0&&Mt.refreshFogUniforms(An,St),Mt.refreshMaterialUniforms(An,ot,X,V,v.state.transmissionRenderTarget[R.id]),Ec.upload(H,an(Yt),An,ae)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(Ec.upload(H,an(Yt),An,ae),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&_e.setValue(H,"center",K.center),_e.setValue(H,"modelViewMatrix",K.modelViewMatrix),_e.setValue(H,"normalMatrix",K.normalMatrix),_e.setValue(H,"modelMatrix",K.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const fn=ot.uniformsGroups;for(let tn=0,Rs=fn.length;tn<Rs;tn++){const yi=fn[tn];se.update(yi,Sn),se.bind(yi,Sn)}}return Sn}function Lr(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function Lc(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(R,Y,rt){const ot=Gt.get(R);ot.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),Gt.get(R.texture).__webglTexture=Y,Gt.get(R.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:rt,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const rt=Gt.get(R);rt.__webglFramebuffer=Y,rt.__useDefaultFramebuffer=Y===void 0};const Nc=H.createFramebuffer();this.setRenderTarget=function(R,Y=0,rt=0){q=R,O=Y,F=rt;let ot=!0,K=null,St=!1,Ot=!1;if(R){const zt=Gt.get(R);if(zt.__useDefaultFramebuffer!==void 0)jt.bindFramebuffer(H.FRAMEBUFFER,null),ot=!1;else if(zt.__webglFramebuffer===void 0)ae.setupRenderTarget(R);else if(zt.__hasExternalTextures)ae.rebindTextures(R,Gt.get(R.texture).__webglTexture,Gt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Jt=R.depthTexture;if(zt.__boundDepthTexture!==Jt){if(Jt!==null&&Gt.has(Jt)&&(R.width!==Jt.image.width||R.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(R)}}const Qt=R.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Ot=!0);const ie=Gt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ie[Y])?K=ie[Y][rt]:K=ie[Y],St=!0):R.samples>0&&ae.useMultisampledRTT(R)===!1?K=Gt.get(R).__webglMultisampledFramebuffer:Array.isArray(ie)?K=ie[rt]:K=ie,G.copy(R.viewport),Z.copy(R.scissor),J=R.scissorTest}else G.copy(N).multiplyScalar(X).floor(),Z.copy(nt).multiplyScalar(X).floor(),J=xt;if(rt!==0&&(K=Nc),jt.bindFramebuffer(H.FRAMEBUFFER,K)&&ot&&jt.drawBuffers(R,K),jt.viewport(G),jt.scissor(Z),jt.setScissorTest(J),St){const zt=Gt.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+Y,zt.__webglTexture,rt)}else if(Ot){const zt=Y;for(let Qt=0;Qt<R.textures.length;Qt++){const ie=Gt.get(R.textures[Qt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Qt,ie.__webglTexture,rt,zt)}}else if(R!==null&&rt!==0){const zt=Gt.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,zt.__webglTexture,rt)}D=-1},this.readRenderTargetPixels=function(R,Y,rt,ot,K,St,Ot,qt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=Gt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ot!==void 0&&(zt=zt[Ot]),zt){jt.bindFramebuffer(H.FRAMEBUFFER,zt);try{const Qt=R.textures[qt],ie=Qt.format,Jt=Qt.type;if(!te.textureFormatReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-ot&&rt>=0&&rt<=R.height-K&&(R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+qt),H.readPixels(Y,rt,ot,K,Ut.convert(ie),Ut.convert(Jt),St))}finally{const Qt=q!==null?Gt.get(q).__webglFramebuffer:null;jt.bindFramebuffer(H.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(R,Y,rt,ot,K,St,Ot,qt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=Gt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ot!==void 0&&(zt=zt[Ot]),zt)if(Y>=0&&Y<=R.width-ot&&rt>=0&&rt<=R.height-K){jt.bindFramebuffer(H.FRAMEBUFFER,zt);const Qt=R.textures[qt],ie=Qt.format,Jt=Qt.type;if(!te.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const de=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,de),H.bufferData(H.PIXEL_PACK_BUFFER,St.byteLength,H.STREAM_READ),R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+qt),H.readPixels(Y,rt,ot,K,Ut.convert(ie),Ut.convert(Jt),0);const Ue=q!==null?Gt.get(q).__webglFramebuffer:null;jt.bindFramebuffer(H.FRAMEBUFFER,Ue);const Ve=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Ay(H,Ve,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,de),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,St),H.deleteBuffer(de),H.deleteSync(Ve),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,rt=0){const ot=Math.pow(2,-rt),K=Math.floor(R.image.width*ot),St=Math.floor(R.image.height*ot),Ot=Y!==null?Y.x:0,qt=Y!==null?Y.y:0;ae.setTexture2D(R,0),H.copyTexSubImage2D(H.TEXTURE_2D,rt,0,0,Ot,qt,K,St),jt.unbindTexture()};const Ho=H.createFramebuffer(),Xa=H.createFramebuffer();this.copyTextureToTexture=function(R,Y,rt=null,ot=null,K=0,St=null){St===null&&(K!==0?(Oo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),St=K,K=0):St=0);let Ot,qt,zt,Qt,ie,Jt,de,Ue,Ve;const Le=R.isCompressedTexture?R.mipmaps[St]:R.image;if(rt!==null)Ot=rt.max.x-rt.min.x,qt=rt.max.y-rt.min.y,zt=rt.isBox3?rt.max.z-rt.min.z:1,Qt=rt.min.x,ie=rt.min.y,Jt=rt.isBox3?rt.min.z:0;else{const Dn=Math.pow(2,-K);Ot=Math.floor(Le.width*Dn),qt=Math.floor(Le.height*Dn),R.isDataArrayTexture?zt=Le.depth:R.isData3DTexture?zt=Math.floor(Le.depth*Dn):zt=1,Qt=0,ie=0,Jt=0}ot!==null?(de=ot.x,Ue=ot.y,Ve=ot.z):(de=0,Ue=0,Ve=0);const pe=Ut.convert(Y.format),Yt=Ut.convert(Y.type);let We;Y.isData3DTexture?(ae.setTexture3D(Y,0),We=H.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(ae.setTexture2DArray(Y,0),We=H.TEXTURE_2D_ARRAY):(ae.setTexture2D(Y,0),We=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Y.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Y.unpackAlignment);const Ae=H.getParameter(H.UNPACK_ROW_LENGTH),Sn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Ui=H.getParameter(H.UNPACK_SKIP_PIXELS),gn=H.getParameter(H.UNPACK_SKIP_ROWS),ka=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Le.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Le.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Qt),H.pixelStorei(H.UNPACK_SKIP_ROWS,ie),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Jt);const _e=R.isDataArrayTexture||R.isData3DTexture,An=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const Dn=Gt.get(R),fn=Gt.get(Y),tn=Gt.get(Dn.__renderTarget),Rs=Gt.get(fn.__renderTarget);jt.bindFramebuffer(H.READ_FRAMEBUFFER,tn.__webglFramebuffer),jt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Rs.__webglFramebuffer);for(let yi=0;yi<zt;yi++)_e&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Gt.get(R).__webglTexture,K,Jt+yi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Gt.get(Y).__webglTexture,St,Ve+yi)),H.blitFramebuffer(Qt,ie,Ot,qt,de,Ue,Ot,qt,H.DEPTH_BUFFER_BIT,H.NEAREST);jt.bindFramebuffer(H.READ_FRAMEBUFFER,null),jt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||Gt.has(R)){const Dn=Gt.get(R),fn=Gt.get(Y);jt.bindFramebuffer(H.READ_FRAMEBUFFER,Ho),jt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Xa);for(let tn=0;tn<zt;tn++)_e?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Dn.__webglTexture,K,Jt+tn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Dn.__webglTexture,K),An?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,fn.__webglTexture,St,Ve+tn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,fn.__webglTexture,St),K!==0?H.blitFramebuffer(Qt,ie,Ot,qt,de,Ue,Ot,qt,H.COLOR_BUFFER_BIT,H.NEAREST):An?H.copyTexSubImage3D(We,St,de,Ue,Ve+tn,Qt,ie,Ot,qt):H.copyTexSubImage2D(We,St,de,Ue,Qt,ie,Ot,qt);jt.bindFramebuffer(H.READ_FRAMEBUFFER,null),jt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else An?R.isDataTexture||R.isData3DTexture?H.texSubImage3D(We,St,de,Ue,Ve,Ot,qt,zt,pe,Yt,Le.data):Y.isCompressedArrayTexture?H.compressedTexSubImage3D(We,St,de,Ue,Ve,Ot,qt,zt,pe,Le.data):H.texSubImage3D(We,St,de,Ue,Ve,Ot,qt,zt,pe,Yt,Le):R.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,St,de,Ue,Ot,qt,pe,Yt,Le.data):R.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,St,de,Ue,Le.width,Le.height,pe,Le.data):H.texSubImage2D(H.TEXTURE_2D,St,de,Ue,Ot,qt,pe,Yt,Le);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ae),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Sn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Ui),H.pixelStorei(H.UNPACK_SKIP_ROWS,gn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,ka),St===0&&Y.generateMipmaps&&H.generateMipmap(We),jt.unbindTexture()},this.initRenderTarget=function(R){Gt.get(R).__webglFramebuffer===void 0&&ae.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ae.setTextureCube(R,0):R.isData3DTexture?ae.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ae.setTexture2DArray(R,0):ae.setTexture2D(R,0),jt.unbindTexture()},this.resetState=function(){O=0,F=0,q=null,jt.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=we._getDrawingBufferColorSpace(t),n.unpackColorSpace=we._getUnpackColorSpace()}}const XA=`
precision highp float;
attribute vec3 position;
void main(){
  gl_Position = vec4(position, 1.0);
}
`,kA=`
#ifdef GL_ES
#extension GL_OES_standard_derivatives : enable
#endif
precision highp float;
precision mediump int;

uniform float iTime;
uniform vec3 iResolution;
uniform vec4 iMouse;
uniform float uWispDensity;
uniform float uTiltScale;
uniform float uFlowTime;
uniform float uFogTime;
uniform float uBeamXFrac;
uniform float uBeamYFrac;
uniform float uFlowSpeed;
uniform float uVLenFactor;
uniform float uHLenFactor;
uniform float uFogIntensity;
uniform float uFogScale;
uniform float uWSpeed;
uniform float uWIntensity;
uniform float uFlowStrength;
uniform float uDecay;
uniform float uFalloffStart;
uniform float uFogFallSpeed;
uniform vec3 uColor;
uniform float uFade;

// Core beam/flare shaping and dynamics
#define PI 3.14159265359
#define TWO_PI 6.28318530718
#define EPS 1e-6
#define EDGE_SOFT (DT_LOCAL*4.0)
#define DT_LOCAL 0.0038
#define TAP_RADIUS 6
#define R_H 150.0
#define R_V 150.0
#define FLARE_HEIGHT 16.0
#define FLARE_AMOUNT 8.0
#define FLARE_EXP 2.0
#define TOP_FADE_START 0.1
#define TOP_FADE_EXP 1.0
#define FLOW_PERIOD 0.5
#define FLOW_SHARPNESS 1.5

// Wisps (animated micro-streaks) that travel along the beam
#define W_BASE_X 1.5
#define W_LAYER_GAP 0.25
#define W_LANES 10
#define W_SIDE_DECAY 0.5
#define W_HALF 0.01
#define W_AA 0.15
#define W_CELL 20.0
#define W_SEG_MIN 0.01
#define W_SEG_MAX 0.55
#define W_CURVE_AMOUNT 15.0
#define W_CURVE_RANGE (FLARE_HEIGHT - 3.0)
#define W_BOTTOM_EXP 10.0

// Volumetric fog controls
#define FOG_ON 1
#define FOG_CONTRAST 1.2
#define FOG_SPEED_U 0.1
#define FOG_SPEED_V -0.1
#define FOG_OCTAVES 5
#define FOG_BOTTOM_BIAS 0.8
#define FOG_TILT_TO_MOUSE 0.05
#define FOG_TILT_DEADZONE 0.01
#define FOG_TILT_MAX_X 0.35
#define FOG_TILT_SHAPE 1.5
#define FOG_BEAM_MIN 0.0
#define FOG_BEAM_MAX 0.75
#define FOG_MASK_GAMMA 0.5
#define FOG_EXPAND_SHAPE 12.2
#define FOG_EDGE_MIX 0.5

// Horizontal vignette for the fog volume
#define HFOG_EDGE_START 0.20
#define HFOG_EDGE_END 0.98
#define HFOG_EDGE_GAMMA 1.4
#define HFOG_Y_RADIUS 25.0
#define HFOG_Y_SOFT 60.0

// Beam extents and edge masking
#define EDGE_X0 0.22
#define EDGE_X1 0.995
#define EDGE_X_GAMMA 1.25
#define EDGE_LUMA_T0 0.0
#define EDGE_LUMA_T1 2.0
#define DITHER_STRENGTH 1.0

    float g(float x){return x<=0.00031308?12.92*x:1.055*pow(x,1.0/2.4)-0.055;}
    float bs(vec2 p,vec2 q,float powr){
        float d=distance(p,q),f=powr*uFalloffStart,r=(f*f)/(d*d+EPS);
        return powr*min(1.0,r);
    }
    float bsa(vec2 p,vec2 q,float powr,vec2 s){
        vec2 d=p-q; float dd=(d.x*d.x)/(s.x*s.x)+(d.y*d.y)/(s.y*s.y),f=powr*uFalloffStart,r=(f*f)/(dd+EPS);
        return powr*min(1.0,r);
    }
    float tri01(float x){float f=fract(x);return 1.0-abs(f*2.0-1.0);}
    float tauWf(float t,float tmin,float tmax){float a=smoothstep(tmin,tmin+EDGE_SOFT,t),b=1.0-smoothstep(tmax-EDGE_SOFT,tmax,t);return max(0.0,a*b);} 
    float h21(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+34.123);return fract(p.x*p.y);}
    float vnoise(vec2 p){
        vec2 i=floor(p),f=fract(p);
        float a=h21(i),b=h21(i+vec2(1,0)),c=h21(i+vec2(0,1)),d=h21(i+vec2(1,1));
        vec2 u=f*f*(3.0-2.0*f);
        return mix(mix(a,b,u.x),mix(c,d,u.x),u.y);
    }
    float fbm2(vec2 p){
        float v=0.0,amp=0.6; mat2 m=mat2(0.86,0.5,-0.5,0.86);
        for(int i=0;i<FOG_OCTAVES;++i){v+=amp*vnoise(p); p=m*p*2.03+17.1; amp*=0.52;}
        return v;
    }
    float rGate(float x,float l){float a=smoothstep(0.0,W_AA,x),b=1.0-smoothstep(l,l+W_AA,x);return max(0.0,a*b);}
    float flareY(float y){float t=clamp(1.0-(clamp(y,0.0,FLARE_HEIGHT)/max(FLARE_HEIGHT,EPS)),0.0,1.0);return pow(t,FLARE_EXP);}

    float vWisps(vec2 uv,float topF){
    float y=uv.y,yf=(y+uFlowTime*uWSpeed)/W_CELL;
    float dRaw=clamp(uWispDensity,0.0,2.0),d=dRaw<=0.0?1.0:dRaw;
    float lanesF=floor(float(W_LANES)*min(d,1.0)+0.5); // WebGL1-safe
    int lanes=int(max(1.0,lanesF));
    float sp=min(d,1.0),ep=max(d-1.0,0.0);
    float fm=flareY(max(y,0.0)),rm=clamp(1.0-(y/max(W_CURVE_RANGE,EPS)),0.0,1.0),cm=fm*rm;
    const float G=0.05; float xS=1.0+(FLARE_AMOUNT*W_CURVE_AMOUNT*G)*cm;
    float sPix=clamp(y/R_V,0.0,1.0),bGain=pow(1.0-sPix,W_BOTTOM_EXP),sum=0.0;
    for(int s=0;s<2;++s){
        float sgn=s==0?-1.0:1.0;
        for(int i=0;i<W_LANES;++i){
            if(i>=lanes) break;
            float off=W_BASE_X+float(i)*W_LAYER_GAP,xc=sgn*(off*xS);
            float dx=abs(uv.x-xc),lat=1.0-smoothstep(W_HALF,W_HALF+W_AA,dx),amp=exp(-off*W_SIDE_DECAY);
            float seed=h21(vec2(off,sgn*17.0)),yf2=yf+seed*7.0,ci=floor(yf2),fy=fract(yf2);
            float seg=mix(W_SEG_MIN,W_SEG_MAX,h21(vec2(ci,off*2.3)));
            float spR=h21(vec2(ci,off+sgn*31.0)),seg1=rGate(fy,seg)*step(spR,sp);
            if(ep>0.0){float spR2=h21(vec2(ci*3.1+7.0,off*5.3+sgn*13.0)); float f2=fract(fy+0.5); seg1+=rGate(f2,seg*0.9)*step(spR2,ep);}
            sum+=amp*lat*seg1;
        }
    }
    float span=smoothstep(-3.0,0.0,y)*(1.0-smoothstep(R_V-6.0,R_V,y));
    return uWIntensity*sum*topF*bGain*span;
}

void mainImage(out vec4 fc,in vec2 frag){
    vec2 C=iResolution.xy*.5; float invW=1.0/max(C.x,1.0);
    float sc=512.0/iResolution.x*.4;
    vec2 uv=(frag-C)*sc,off=vec2(uBeamXFrac*iResolution.x*sc,uBeamYFrac*iResolution.y*sc);
    vec2 uvc = uv - off;
    float a=0.0,b=0.0;
    float basePhase=1.5*PI+uDecay*.5; float tauMin=basePhase-uDecay; float tauMax=basePhase;
    float cx=clamp(uvc.x/(R_H*uHLenFactor),-1.0,1.0),tH=clamp(TWO_PI-acos(cx),tauMin,tauMax);
    for(int k=-TAP_RADIUS;k<=TAP_RADIUS;++k){
        float tu=tH+float(k)*DT_LOCAL,wt=tauWf(tu,tauMin,tauMax); if(wt<=0.0) continue;
        float spd=max(abs(sin(tu)),0.02),u=clamp((basePhase-tu)/max(uDecay,EPS),0.0,1.0),env=pow(1.0-abs(u*2.0-1.0),0.8);
        vec2 p=vec2((R_H*uHLenFactor)*cos(tu),0.0);
        a+=wt*bs(uvc,p,env*spd);
    }
    float yPix=uvc.y,cy=clamp(-yPix/(R_V*uVLenFactor),-1.0,1.0),tV=clamp(TWO_PI-acos(cy),tauMin,tauMax);
    for(int k=-TAP_RADIUS;k<=TAP_RADIUS;++k){
        float tu=tV+float(k)*DT_LOCAL,wt=tauWf(tu,tauMin,tauMax); if(wt<=0.0) continue;
        float yb=(-R_V)*cos(tu),s=clamp(yb/R_V,0.0,1.0),spd=max(abs(sin(tu)),0.02);
        float env=pow(1.0-s,0.6)*spd;
        float cap=1.0-smoothstep(TOP_FADE_START,1.0,s); cap=pow(cap,TOP_FADE_EXP); env*=cap;
        float ph=s/max(FLOW_PERIOD,EPS)+uFlowTime*uFlowSpeed;
        float fl=pow(tri01(ph),FLOW_SHARPNESS);
        env*=mix(1.0-uFlowStrength,1.0,fl);
        float yp=(-R_V*uVLenFactor)*cos(tu),m=pow(smoothstep(FLARE_HEIGHT,0.0,yp),FLARE_EXP),wx=1.0+FLARE_AMOUNT*m;
        vec2 sig=vec2(wx,1.0),p=vec2(0.0,yp);
        float mask=step(0.0,yp);
        b+=wt*bsa(uvc,p,mask*env,sig);
    }
    float sPix=clamp(yPix/R_V,0.0,1.0),topA=pow(1.0-smoothstep(TOP_FADE_START,1.0,sPix),TOP_FADE_EXP);
    float L=a+b*topA;
    float w=vWisps(vec2(uvc.x,yPix),topA);
    float fog=0.0;
#if FOG_ON
    vec2 fuv=uvc*uFogScale;
    float mAct=step(1.0,length(iMouse.xy)),nx=((iMouse.x-C.x)*invW)*mAct;
    float ax = abs(nx);
    float stMag = mix(ax, pow(ax, FOG_TILT_SHAPE), 0.35);
    float st = sign(nx) * stMag * uTiltScale;
    st = clamp(st, -FOG_TILT_MAX_X, FOG_TILT_MAX_X);
    vec2 dir=normalize(vec2(st,1.0));
    fuv+=uFogTime*uFogFallSpeed*dir;
    vec2 prp=vec2(-dir.y,dir.x);
    fuv+=prp*(0.08*sin(dot(uvc,prp)*0.08+uFogTime*0.9));
    float n=fbm2(fuv+vec2(fbm2(fuv+vec2(7.3,2.1)),fbm2(fuv+vec2(-3.7,5.9)))*0.6);
    n=pow(clamp(n,0.0,1.0),FOG_CONTRAST);
    float pixW = 1.0 / max(iResolution.y, 1.0);
#ifdef GL_OES_standard_derivatives
    float wL = max(fwidth(L), pixW);
#else
    float wL = pixW;
#endif
    float m0=pow(smoothstep(FOG_BEAM_MIN - wL, FOG_BEAM_MAX + wL, L),FOG_MASK_GAMMA);
    float bm=1.0-pow(1.0-m0,FOG_EXPAND_SHAPE); bm=mix(bm*m0,bm,FOG_EDGE_MIX);
    float yP=1.0-smoothstep(HFOG_Y_RADIUS,HFOG_Y_RADIUS+HFOG_Y_SOFT,abs(yPix));
    float nxF=abs((frag.x-C.x)*invW),hE=1.0-smoothstep(HFOG_EDGE_START,HFOG_EDGE_END,nxF); hE=pow(clamp(hE,0.0,1.0),HFOG_EDGE_GAMMA);
    float hW=mix(1.0,hE,clamp(yP,0.0,1.0));
    float bBias=mix(1.0,1.0-sPix,FOG_BOTTOM_BIAS);
    float browserFogIntensity = uFogIntensity;
    browserFogIntensity *= 1.8;
    float radialFade = 1.0 - smoothstep(0.0, 0.7, length(uvc) / 120.0);
    float safariFog = n * browserFogIntensity * bBias * bm * hW * radialFade;
    fog = safariFog;
#endif
    float LF=L+fog;
    float dith=(h21(frag)-0.5)*(DITHER_STRENGTH/255.0);
    float tone=g(LF+w);
    vec3 col=tone*uColor+dith;
    float alpha=clamp(g(L+w*0.6)+dith*0.6,0.0,1.0);
    float nxE=abs((frag.x-C.x)*invW),xF=pow(clamp(1.0-smoothstep(EDGE_X0,EDGE_X1,nxE),0.0,1.0),EDGE_X_GAMMA);
    float scene=LF+max(0.0,w)*0.5,hi=smoothstep(EDGE_LUMA_T0,EDGE_LUMA_T1,scene);
    float eM=mix(xF,1.0,hi);
    col*=eM; alpha*=eM;
    col*=uFade; alpha*=uFade;
    fc=vec4(col,alpha);
}

void main(){
  vec4 fc;
  mainImage(fc, gl_FragCoord.xy);
  gl_FragColor = fc;
}
`,WA=({className:a,style:t,wispDensity:n=1,dpr:s,mouseSmoothTime:l=0,mouseTiltStrength:c=.01,horizontalBeamOffset:f=.1,verticalBeamOffset:h=0,flowSpeed:p=.35,verticalSizing:m=2,horizontalSizing:g=.5,fogIntensity:_=.45,fogScale:x=.3,wispSpeed:M=15,wispIntensity:E=5,flowStrength:T=.25,decay:y=1.1,falloffStart:v=1.2,fogFallSpeed:P=.6,color:U="#FF79C6"})=>{const C=be.useRef(null),B=be.useRef(null),O=be.useRef(null),F=be.useRef(!1),q=be.useRef(null),D=be.useRef(1),w=be.useRef(1),G=be.useRef([]),Z=be.useRef(performance.now()),J=be.useRef(16.7),Q=be.useRef(!1),st=be.useRef(!0),z=V=>{let X=V.trim();X[0]==="#"&&(X=X.slice(1)),X.length===3&&(X=X.split("").map(yt=>yt+yt).join(""));const ft=parseInt(X,16)||16777215;return{r:(ft>>16&255)/255,g:(ft>>8&255)/255,b:(ft&255)/255}};return be.useEffect(()=>{const V=C.current,X=new VA({antialias:!1,alpha:!1,depth:!1,stencil:!1,powerPreference:"high-performance",premultipliedAlpha:!1,preserveDrawingBuffer:!1,failIfMajorPerformanceCaveat:!1,logarithmicDepthBuffer:!1});B.current=X,D.current=Math.min(s??(window.devicePixelRatio||1),2),w.current=D.current,X.setPixelRatio(w.current),X.shadowMap.enabled=!1,X.outputColorSpace=Qn,X.setClearColor(0,1);const ft=X.domElement;ft.style.width="100%",ft.style.height="100%",ft.style.display="block",V.appendChild(ft);const yt=new Qy,N=new rv(-1,1,1,-1,0,1),nt=new Ga;nt.setAttribute("position",new xi(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3));const xt={iTime:{value:0},iResolution:{value:new lt(1,1,1)},iMouse:{value:new $e(0,0,0,0)},uWispDensity:{value:n},uTiltScale:{value:c},uFlowTime:{value:0},uFogTime:{value:0},uBeamXFrac:{value:f},uBeamYFrac:{value:h},uFlowSpeed:{value:p},uVLenFactor:{value:m},uHLenFactor:{value:g},uFogIntensity:{value:_},uFogScale:{value:x},uWSpeed:{value:M},uWIntensity:{value:E},uFlowStrength:{value:T},uDecay:{value:y},uFalloffStart:{value:v},uFogFallSpeed:{value:P},uColor:{value:new lt(1,1,1)},uFade:{value:F.current?1:0}};O.current=xt;const At=new eM({vertexShader:XA,fragmentShader:kA,uniforms:xt,transparent:!1,depthTest:!1,depthWrite:!1,blending:xs}),Nt=new wi(nt,At);Nt.frustumCulled=!1,yt.add(Nt);const it=new sM;let ut=0,Ct=F.current?1:0;const Pt=new Ne(0,0),kt=new Ne(0,0),le=()=>{const wt=V.clientWidth||1,Bt=V.clientHeight||1,vt=w.current;X.setPixelRatio(vt),X.setSize(wt,Bt,!1),xt.iResolution.value.set(wt*vt,Bt*vt,vt),q.current=ft.getBoundingClientRect()};let Ze=0;const H=()=>{Ze&&cancelAnimationFrame(Ze),Ze=requestAnimationFrame(le)};le();const Se=new ResizeObserver(H);Se.observe(V);const ne=new IntersectionObserver(wt=>{st.current=wt[0]?.isIntersecting??!0},{root:null,threshold:0});ne.observe(V);const te=()=>{Q.current=document.hidden};document.addEventListener("visibilitychange",te,{passive:!0});const jt=(wt,Bt)=>{const vt=q.current;if(!vt)return;const bt=wt-vt.left,It=Bt-vt.top,Ut=w.current,Lt=vt.height*Ut;Pt.set(bt*Ut,Lt-It*Ut)},Ee=wt=>jt(wt.clientX,wt.clientY),Gt=()=>Pt.set(0,0);ft.addEventListener("pointermove",Ee,{passive:!0}),ft.addEventListener("pointerdown",Ee,{passive:!0}),ft.addEventListener("pointerenter",Ee,{passive:!0}),ft.addEventListener("pointerleave",Gt,{passive:!0});const ae=wt=>{wt.preventDefault(),Q.current=!0},qe=()=>{Q.current=!1,H()};ft.addEventListener("webglcontextlost",ae,!1),ft.addEventListener("webglcontextrestored",qe,!1);let ke=0;const L=(wt,Bt,vt)=>Math.max(Bt,Math.min(vt,wt)),A=.6,$=50,pt=58;let Mt=0;const ht=2e3,Kt=wt=>{if(wt-Z.current<750)return;const vt=G.current;if(vt.length===0){Z.current=wt;return}const bt=vt.reduce((Lt,se)=>Lt+se,0)/vt.length;let It=w.current;const Ut=D.current;bt<$?It=L(w.current*.85,A,Ut):bt>pt&&w.current<Ut&&(It=L(w.current*1.1,A,Ut)),Math.abs(It-w.current)>.01&&wt-Mt>ht&&(w.current=It,Mt=wt,le()),G.current=[],Z.current=wt},Rt=()=>{if(ke=requestAnimationFrame(Rt),Q.current||!st.current)return;const wt=it.getElapsedTime(),Bt=Math.max(0,wt-ut);ut=wt;const vt=Bt*1e3;J.current=J.current*.9+vt*.1;const bt=1e3/Math.max(1,J.current);G.current.push(bt),xt.iTime.value=wt;const It=Math.min(.033,Math.max(.001,Bt));xt.uFlowTime.value+=It,xt.uFogTime.value+=It,F.current||(Ct=Math.min(1,Ct+It/1),xt.uFade.value=Ct,Ct>=1&&(F.current=!0));const Ut=Math.max(.001,l),Lt=1-Math.exp(-It/Ut);kt.lerp(Pt,Lt),xt.iMouse.value.set(kt.x,kt.y,0,0),X.render(yt,N),Kt(performance.now())};return Rt(),()=>{cancelAnimationFrame(ke),Se.disconnect(),ne.disconnect(),document.removeEventListener("visibilitychange",te),ft.removeEventListener("pointermove",Ee),ft.removeEventListener("pointerdown",Ee),ft.removeEventListener("pointerenter",Ee),ft.removeEventListener("pointerleave",Gt),ft.removeEventListener("webglcontextlost",ae),ft.removeEventListener("webglcontextrestored",qe),nt.dispose(),At.dispose(),X.dispose(),V.contains(ft)&&V.removeChild(ft)}},[s]),be.useEffect(()=>{const V=O.current;if(!V)return;V.uWispDensity.value=n,V.uTiltScale.value=c,V.uBeamXFrac.value=f,V.uBeamYFrac.value=h,V.uFlowSpeed.value=p,V.uVLenFactor.value=m,V.uHLenFactor.value=g,V.uFogIntensity.value=_,V.uFogScale.value=x,V.uWSpeed.value=M,V.uWIntensity.value=E,V.uFlowStrength.value=T,V.uDecay.value=y,V.uFalloffStart.value=v,V.uFogFallSpeed.value=P;const{r:X,g:ft,b:yt}=z(U||"#FFFFFF");V.uColor.value.set(X,ft,yt)},[n,c,f,h,p,m,g,_,x,M,E,T,y,v,P,U]),Xt.jsx("div",{ref:C,className:`w-full h-full relative ${a||""}`,style:t})};/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qA=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),YA=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,s)=>s?s.toUpperCase():n.toLowerCase()),g_=a=>{const t=YA(a);return t.charAt(0).toUpperCase()+t.slice(1)},hv=(...a)=>a.filter((t,n,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===n).join(" ").trim(),jA=a=>{for(const t in a)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ZA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KA=be.forwardRef(({color:a="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:f,...h},p)=>be.createElement("svg",{ref:p,...ZA,width:t,height:t,stroke:a,strokeWidth:s?Number(n)*24/Number(t):n,className:hv("lucide",l),...!c&&!jA(h)&&{"aria-hidden":"true"},...h},[...f.map(([m,g])=>be.createElement(m,g)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=(a,t)=>{const n=be.forwardRef(({className:s,...l},c)=>be.createElement(KA,{ref:c,iconNode:t,className:hv(`lucide-${qA(g_(a))}`,`lucide-${a}`,s),...l}));return n.displayName=g_(a),n};/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QA=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],JA=wd("github",QA);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $A=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],tb=wd("instagram",$A);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eb=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],nb=wd("linkedin",eb),ib=({text:a="Compressa",fontFamily:t="Compressa VF",fontUrl:n="https://res.cloudinary.com/dr6lvwubh/raw/upload/v1529908256/CompressaPRO-GX.woff2",width:s=!0,weight:l=!0,italic:c=!0,alpha:f=!1,flex:h=!0,stroke:p=!1,scale:m=!1,textColor:g="#FFFFFF",strokeColor:_="#FF0000",strokeWidth:x=2,className:M="",minFontSize:E=24})=>{const T=be.useRef(null),y=be.useRef(null),v=be.useRef([]),P=be.useRef({x:0,y:0}),U=be.useRef({x:0,y:0}),[C,B]=be.useState(E),[O,F]=be.useState(1),[q,D]=be.useState(1),w=a.split(""),G=(J,Q)=>{const st=Q.x-J.x,z=Q.y-J.y;return Math.sqrt(st*st+z*z)};be.useEffect(()=>{const J=st=>{U.current.x=st.clientX,U.current.y=st.clientY},Q=st=>{const z=st.touches[0];U.current.x=z.clientX,U.current.y=z.clientY};if(window.addEventListener("mousemove",J),window.addEventListener("touchmove",Q,{passive:!1}),T.current){const{left:st,top:z,width:V,height:X}=T.current.getBoundingClientRect();P.current.x=st+V/2,P.current.y=z+X/2,U.current.x=P.current.x,U.current.y=P.current.y}return()=>{window.removeEventListener("mousemove",J),window.removeEventListener("touchmove",Q)}},[]);const Z=()=>{if(!T.current||!y.current)return;const{width:J,height:Q}=T.current.getBoundingClientRect();let st=J/(w.length/2);st=Math.max(st,E),B(st),F(1),D(1),requestAnimationFrame(()=>{if(!y.current)return;const z=y.current.getBoundingClientRect();if(m&&z.height>0){const V=Q/z.height;F(V),D(V)}})};return be.useEffect(()=>(Z(),window.addEventListener("resize",Z),()=>window.removeEventListener("resize",Z)),[m,a]),be.useEffect(()=>{let J;const Q=()=>{if(P.current.x+=(U.current.x-P.current.x)/15,P.current.y+=(U.current.y-P.current.y)/15,y.current){const z=y.current.getBoundingClientRect().width/2;v.current.forEach(V=>{if(!V)return;const X=V.getBoundingClientRect(),ft={x:X.x+X.width/2,y:X.y+X.height/2},yt=G(P.current,ft),N=(it,ut,Ct)=>{const Pt=Ct-Math.abs(Ct*it/z);return Math.max(ut,Pt+ut)},nt=s?Math.floor(N(yt,5,200)):100,xt=l?Math.floor(N(yt,100,900)):400,At=c?N(yt,0,1).toFixed(2):0,Nt=f?N(yt,0,1).toFixed(2):1;V.style.opacity=Nt,V.style.fontVariationSettings=`'wght' ${xt}, 'wdth' ${nt}, 'ital' ${At}`})}J=requestAnimationFrame(Q)};return Q(),()=>cancelAnimationFrame(J)},[s,l,c,f,w.length]),Xt.jsxs("div",{ref:T,className:"relative w-full h-full overflow-hidden bg-transparent",children:[Xt.jsx("style",{children:`
        @font-face {
          font-family: '${t}';
          src: url('${n}');
          font-style: normal;
        }
        .stroke span {
          position: relative;
          color: ${g};
        }
        .stroke span::after {
          content: attr(data-char);
          position: absolute;
          left: 0;
          top: 0;
          color: transparent;
          z-index: -1;
          -webkit-text-stroke-width: ${x}px;
          -webkit-text-stroke-color: ${_};
        }
      `}),Xt.jsx("h1",{ref:y,className:`text-pressure-title ${M} ${h?"flex justify-between":""} ${p?"stroke":""} uppercase text-center`,style:{fontFamily:t,fontSize:C,lineHeight:q,transform:`scale(1, ${O})`,transformOrigin:"center top",margin:0,fontWeight:100,color:p?void 0:g},children:w.map((J,Q)=>Xt.jsx("span",{ref:st=>v.current[Q]=st,"data-char":J,className:"inline-block",children:J},Q))})]})};function wo(a){let t=a[0],n=a[1],s=a[2];return Math.sqrt(t*t+n*n+s*s)}function gd(a,t){return a[0]=t[0],a[1]=t[1],a[2]=t[2],a}function ab(a,t,n,s){return a[0]=t,a[1]=n,a[2]=s,a}function __(a,t,n){return a[0]=t[0]+n[0],a[1]=t[1]+n[1],a[2]=t[2]+n[2],a}function v_(a,t,n){return a[0]=t[0]-n[0],a[1]=t[1]-n[1],a[2]=t[2]-n[2],a}function sb(a,t,n){return a[0]=t[0]*n[0],a[1]=t[1]*n[1],a[2]=t[2]*n[2],a}function rb(a,t,n){return a[0]=t[0]/n[0],a[1]=t[1]/n[1],a[2]=t[2]/n[2],a}function Mh(a,t,n){return a[0]=t[0]*n,a[1]=t[1]*n,a[2]=t[2]*n,a}function ob(a,t){let n=t[0]-a[0],s=t[1]-a[1],l=t[2]-a[2];return Math.sqrt(n*n+s*s+l*l)}function lb(a,t){let n=t[0]-a[0],s=t[1]-a[1],l=t[2]-a[2];return n*n+s*s+l*l}function x_(a){let t=a[0],n=a[1],s=a[2];return t*t+n*n+s*s}function cb(a,t){return a[0]=-t[0],a[1]=-t[1],a[2]=-t[2],a}function ub(a,t){return a[0]=1/t[0],a[1]=1/t[1],a[2]=1/t[2],a}function _d(a,t){let n=t[0],s=t[1],l=t[2],c=n*n+s*s+l*l;return c>0&&(c=1/Math.sqrt(c)),a[0]=t[0]*c,a[1]=t[1]*c,a[2]=t[2]*c,a}function dv(a,t){return a[0]*t[0]+a[1]*t[1]+a[2]*t[2]}function S_(a,t,n){let s=t[0],l=t[1],c=t[2],f=n[0],h=n[1],p=n[2];return a[0]=l*p-c*h,a[1]=c*f-s*p,a[2]=s*h-l*f,a}function fb(a,t,n,s){let l=t[0],c=t[1],f=t[2];return a[0]=l+s*(n[0]-l),a[1]=c+s*(n[1]-c),a[2]=f+s*(n[2]-f),a}function hb(a,t,n,s,l){const c=Math.exp(-s*l);let f=t[0],h=t[1],p=t[2];return a[0]=n[0]+(f-n[0])*c,a[1]=n[1]+(h-n[1])*c,a[2]=n[2]+(p-n[2])*c,a}function db(a,t,n){let s=t[0],l=t[1],c=t[2],f=n[3]*s+n[7]*l+n[11]*c+n[15];return f=f||1,a[0]=(n[0]*s+n[4]*l+n[8]*c+n[12])/f,a[1]=(n[1]*s+n[5]*l+n[9]*c+n[13])/f,a[2]=(n[2]*s+n[6]*l+n[10]*c+n[14])/f,a}function pb(a,t,n){let s=t[0],l=t[1],c=t[2],f=n[3]*s+n[7]*l+n[11]*c+n[15];return f=f||1,a[0]=(n[0]*s+n[4]*l+n[8]*c)/f,a[1]=(n[1]*s+n[5]*l+n[9]*c)/f,a[2]=(n[2]*s+n[6]*l+n[10]*c)/f,a}function mb(a,t,n){let s=t[0],l=t[1],c=t[2];return a[0]=s*n[0]+l*n[3]+c*n[6],a[1]=s*n[1]+l*n[4]+c*n[7],a[2]=s*n[2]+l*n[5]+c*n[8],a}function gb(a,t,n){let s=t[0],l=t[1],c=t[2],f=n[0],h=n[1],p=n[2],m=n[3],g=h*c-p*l,_=p*s-f*c,x=f*l-h*s,M=h*x-p*_,E=p*g-f*x,T=f*_-h*g,y=m*2;return g*=y,_*=y,x*=y,M*=2,E*=2,T*=2,a[0]=s+g+M,a[1]=l+_+E,a[2]=c+x+T,a}const _b=(function(){const a=[0,0,0],t=[0,0,0];return function(n,s){gd(a,n),gd(t,s),_d(a,a),_d(t,t);let l=dv(a,t);return l>1?0:l<-1?Math.PI:Math.acos(l)}})();function vb(a,t){return a[0]===t[0]&&a[1]===t[1]&&a[2]===t[2]}class un extends Array{constructor(t=0,n=t,s=t){return super(t,n,s),this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(t){this[0]=t}set y(t){this[1]=t}set z(t){this[2]=t}set(t,n=t,s=t){return t.length?this.copy(t):(ab(this,t,n,s),this)}copy(t){return gd(this,t),this}add(t,n){return n?__(this,t,n):__(this,this,t),this}sub(t,n){return n?v_(this,t,n):v_(this,this,t),this}multiply(t){return t.length?sb(this,this,t):Mh(this,this,t),this}divide(t){return t.length?rb(this,this,t):Mh(this,this,1/t),this}inverse(t=this){return ub(this,t),this}len(){return wo(this)}distance(t){return t?ob(this,t):wo(this)}squaredLen(){return x_(this)}squaredDistance(t){return t?lb(this,t):x_(this)}negate(t=this){return cb(this,t),this}cross(t,n){return n?S_(this,t,n):S_(this,this,t),this}scale(t){return Mh(this,this,t),this}normalize(){return _d(this,this),this}dot(t){return dv(this,t)}equals(t){return vb(this,t)}applyMatrix3(t){return mb(this,this,t),this}applyMatrix4(t){return db(this,this,t),this}scaleRotateMatrix4(t){return pb(this,this,t),this}applyQuaternion(t){return gb(this,this,t),this}angle(t){return _b(this,t)}lerp(t,n){return fb(this,this,t,n),this}smoothLerp(t,n,s){return hb(this,this,t,n,s),this}clone(){return new un(this[0],this[1],this[2])}fromArray(t,n=0){return this[0]=t[n],this[1]=t[n+1],this[2]=t[n+2],this}toArray(t=[],n=0){return t[n]=this[0],t[n+1]=this[1],t[n+2]=this[2],t}transformDirection(t){const n=this[0],s=this[1],l=this[2];return this[0]=t[0]*n+t[4]*s+t[8]*l,this[1]=t[1]*n+t[5]*s+t[9]*l,this[2]=t[2]*n+t[6]*s+t[10]*l,this.normalize()}}const y_=new un;let xb=1,Sb=1,M_=!1;class yb{constructor(t,n={}){t.canvas||console.error("gl not passed as first argument to Geometry"),this.gl=t,this.attributes=n,this.id=xb++,this.VAOs={},this.drawRange={start:0,count:0},this.instancedCount=0,this.gl.renderer.bindVertexArray(null),this.gl.renderer.currentGeometry=null,this.glState=this.gl.renderer.state;for(let s in n)this.addAttribute(s,n[s])}addAttribute(t,n){if(this.attributes[t]=n,n.id=Sb++,n.size=n.size||1,n.type=n.type||(n.data.constructor===Float32Array?this.gl.FLOAT:n.data.constructor===Uint16Array?this.gl.UNSIGNED_SHORT:this.gl.UNSIGNED_INT),n.target=t==="index"?this.gl.ELEMENT_ARRAY_BUFFER:this.gl.ARRAY_BUFFER,n.normalized=n.normalized||!1,n.stride=n.stride||0,n.offset=n.offset||0,n.count=n.count||(n.stride?n.data.byteLength/n.stride:n.data.length/n.size),n.divisor=n.instanced||0,n.needsUpdate=!1,n.usage=n.usage||this.gl.STATIC_DRAW,n.buffer||this.updateAttribute(n),n.divisor){if(this.isInstanced=!0,this.instancedCount&&this.instancedCount!==n.count*n.divisor)return console.warn("geometry has multiple instanced buffers of different length"),this.instancedCount=Math.min(this.instancedCount,n.count*n.divisor);this.instancedCount=n.count*n.divisor}else t==="index"?this.drawRange.count=n.count:this.attributes.index||(this.drawRange.count=Math.max(this.drawRange.count,n.count))}updateAttribute(t){const n=!t.buffer;n&&(t.buffer=this.gl.createBuffer()),this.glState.boundBuffer!==t.buffer&&(this.gl.bindBuffer(t.target,t.buffer),this.glState.boundBuffer=t.buffer),n?this.gl.bufferData(t.target,t.data,t.usage):this.gl.bufferSubData(t.target,0,t.data),t.needsUpdate=!1}setIndex(t){this.addAttribute("index",t)}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}setInstancedCount(t){this.instancedCount=t}createVAO(t){this.VAOs[t.attributeOrder]=this.gl.renderer.createVertexArray(),this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]),this.bindAttributes(t)}bindAttributes(t){t.attributeLocations.forEach((n,{name:s,type:l})=>{if(!this.attributes[s]){console.warn(`active attribute ${s} not being supplied`);return}const c=this.attributes[s];this.gl.bindBuffer(c.target,c.buffer),this.glState.boundBuffer=c.buffer;let f=1;l===35674&&(f=2),l===35675&&(f=3),l===35676&&(f=4);const h=c.size/f,p=f===1?0:f*f*4,m=f===1?0:f*4;for(let g=0;g<f;g++)this.gl.vertexAttribPointer(n+g,h,c.type,c.normalized,c.stride+p,c.offset+g*m),this.gl.enableVertexAttribArray(n+g),this.gl.renderer.vertexAttribDivisor(n+g,c.divisor)}),this.attributes.index&&this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.attributes.index.buffer)}draw({program:t,mode:n=this.gl.TRIANGLES}){this.gl.renderer.currentGeometry!==`${this.id}_${t.attributeOrder}`&&(this.VAOs[t.attributeOrder]||this.createVAO(t),this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]),this.gl.renderer.currentGeometry=`${this.id}_${t.attributeOrder}`),t.attributeLocations.forEach((l,{name:c})=>{const f=this.attributes[c];f.needsUpdate&&this.updateAttribute(f)});let s=2;this.attributes.index?.type===this.gl.UNSIGNED_INT&&(s=4),this.isInstanced?this.attributes.index?this.gl.renderer.drawElementsInstanced(n,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*s,this.instancedCount):this.gl.renderer.drawArraysInstanced(n,this.drawRange.start,this.drawRange.count,this.instancedCount):this.attributes.index?this.gl.drawElements(n,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*s):this.gl.drawArrays(n,this.drawRange.start,this.drawRange.count)}getPosition(){const t=this.attributes.position;if(t.data)return t;if(!M_)return console.warn("No position buffer data found to compute bounds"),M_=!0}computeBoundingBox(t){t||(t=this.getPosition());const n=t.data,s=t.size;this.bounds||(this.bounds={min:new un,max:new un,center:new un,scale:new un,radius:1/0});const l=this.bounds.min,c=this.bounds.max,f=this.bounds.center,h=this.bounds.scale;l.set(1/0),c.set(-1/0);for(let p=0,m=n.length;p<m;p+=s){const g=n[p],_=n[p+1],x=n[p+2];l.x=Math.min(g,l.x),l.y=Math.min(_,l.y),l.z=Math.min(x,l.z),c.x=Math.max(g,c.x),c.y=Math.max(_,c.y),c.z=Math.max(x,c.z)}h.sub(c,l),f.add(l,c).divide(2)}computeBoundingSphere(t){t||(t=this.getPosition());const n=t.data,s=t.size;this.bounds||this.computeBoundingBox(t);let l=0;for(let c=0,f=n.length;c<f;c+=s)y_.fromArray(n,c),l=Math.max(l,this.bounds.center.squaredDistance(y_));this.bounds.radius=Math.sqrt(l)}remove(){for(let t in this.VAOs)this.gl.renderer.deleteVertexArray(this.VAOs[t]),delete this.VAOs[t];for(let t in this.attributes)this.gl.deleteBuffer(this.attributes[t].buffer),delete this.attributes[t]}}let Mb=1;const E_={};class pv{constructor(t,{vertex:n,fragment:s,uniforms:l={},transparent:c=!1,cullFace:f=t.BACK,frontFace:h=t.CCW,depthTest:p=!0,depthWrite:m=!0,depthFunc:g=t.LEQUAL}={}){t.canvas||console.error("gl not passed as first argument to Program"),this.gl=t,this.uniforms=l,this.id=Mb++,n||console.warn("vertex shader not supplied"),s||console.warn("fragment shader not supplied"),this.transparent=c,this.cullFace=f,this.frontFace=h,this.depthTest=p,this.depthWrite=m,this.depthFunc=g,this.blendFunc={},this.blendEquation={},this.stencilFunc={},this.stencilOp={},this.transparent&&!this.blendFunc.src&&(this.gl.renderer.premultipliedAlpha?this.setBlendFunc(this.gl.ONE,this.gl.ONE_MINUS_SRC_ALPHA):this.setBlendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA)),this.vertexShader=t.createShader(t.VERTEX_SHADER),this.fragmentShader=t.createShader(t.FRAGMENT_SHADER),this.program=t.createProgram(),t.attachShader(this.program,this.vertexShader),t.attachShader(this.program,this.fragmentShader),this.setShaders({vertex:n,fragment:s})}setShaders({vertex:t,fragment:n}){if(t&&(this.gl.shaderSource(this.vertexShader,t),this.gl.compileShader(this.vertexShader),this.gl.getShaderInfoLog(this.vertexShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}
Vertex Shader
${T_(t)}`)),n&&(this.gl.shaderSource(this.fragmentShader,n),this.gl.compileShader(this.fragmentShader),this.gl.getShaderInfoLog(this.fragmentShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}
Fragment Shader
${T_(n)}`)),this.gl.linkProgram(this.program),!this.gl.getProgramParameter(this.program,this.gl.LINK_STATUS))return console.warn(this.gl.getProgramInfoLog(this.program));this.uniformLocations=new Map;let s=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_UNIFORMS);for(let f=0;f<s;f++){let h=this.gl.getActiveUniform(this.program,f);this.uniformLocations.set(h,this.gl.getUniformLocation(this.program,h.name));const p=h.name.match(/(\w+)/g);h.uniformName=p[0],h.nameComponents=p.slice(1)}this.attributeLocations=new Map;const l=[],c=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_ATTRIBUTES);for(let f=0;f<c;f++){const h=this.gl.getActiveAttrib(this.program,f),p=this.gl.getAttribLocation(this.program,h.name);p!==-1&&(l[p]=h.name,this.attributeLocations.set(h,p))}this.attributeOrder=l.join("")}setBlendFunc(t,n,s,l){this.blendFunc.src=t,this.blendFunc.dst=n,this.blendFunc.srcAlpha=s,this.blendFunc.dstAlpha=l,t&&(this.transparent=!0)}setBlendEquation(t,n){this.blendEquation.modeRGB=t,this.blendEquation.modeAlpha=n}setStencilFunc(t,n,s){this.stencilRef=n,this.stencilFunc.func=t,this.stencilFunc.ref=n,this.stencilFunc.mask=s}setStencilOp(t,n,s){this.stencilOp.stencilFail=t,this.stencilOp.depthFail=n,this.stencilOp.depthPass=s}applyState(){this.depthTest?this.gl.renderer.enable(this.gl.DEPTH_TEST):this.gl.renderer.disable(this.gl.DEPTH_TEST),this.cullFace?this.gl.renderer.enable(this.gl.CULL_FACE):this.gl.renderer.disable(this.gl.CULL_FACE),this.blendFunc.src?this.gl.renderer.enable(this.gl.BLEND):this.gl.renderer.disable(this.gl.BLEND),this.cullFace&&this.gl.renderer.setCullFace(this.cullFace),this.gl.renderer.setFrontFace(this.frontFace),this.gl.renderer.setDepthMask(this.depthWrite),this.gl.renderer.setDepthFunc(this.depthFunc),this.blendFunc.src&&this.gl.renderer.setBlendFunc(this.blendFunc.src,this.blendFunc.dst,this.blendFunc.srcAlpha,this.blendFunc.dstAlpha),this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB,this.blendEquation.modeAlpha),this.stencilFunc.func||this.stencilOp.stencilFail?this.gl.renderer.enable(this.gl.STENCIL_TEST):this.gl.renderer.disable(this.gl.STENCIL_TEST),this.gl.renderer.setStencilFunc(this.stencilFunc.func,this.stencilFunc.ref,this.stencilFunc.mask),this.gl.renderer.setStencilOp(this.stencilOp.stencilFail,this.stencilOp.depthFail,this.stencilOp.depthPass)}use({flipFaces:t=!1}={}){let n=-1;this.gl.renderer.state.currentProgram===this.id||(this.gl.useProgram(this.program),this.gl.renderer.state.currentProgram=this.id),this.uniformLocations.forEach((l,c)=>{let f=this.uniforms[c.uniformName];for(const h of c.nameComponents){if(!f)break;if(h in f)f=f[h];else{if(Array.isArray(f.value))break;f=void 0;break}}if(!f)return A_(`Active uniform ${c.name} has not been supplied`);if(f&&f.value===void 0)return A_(`${c.name} uniform is missing a value parameter`);if(f.value.texture)return n=n+1,f.value.update(n),Eh(this.gl,c.type,l,n);if(f.value.length&&f.value[0].texture){const h=[];return f.value.forEach(p=>{n=n+1,p.update(n),h.push(n)}),Eh(this.gl,c.type,l,h)}Eh(this.gl,c.type,l,f.value)}),this.applyState(),t&&this.gl.renderer.setFrontFace(this.frontFace===this.gl.CCW?this.gl.CW:this.gl.CCW)}remove(){this.gl.deleteProgram(this.program)}}function Eh(a,t,n,s){s=s.length?Eb(s):s;const l=a.renderer.state.uniformLocations.get(n);if(s.length)if(l===void 0||l.length!==s.length)a.renderer.state.uniformLocations.set(n,s.slice(0));else{if(Tb(l,s))return;l.set?l.set(s):Ab(l,s),a.renderer.state.uniformLocations.set(n,l)}else{if(l===s)return;a.renderer.state.uniformLocations.set(n,s)}switch(t){case 5126:return s.length?a.uniform1fv(n,s):a.uniform1f(n,s);case 35664:return a.uniform2fv(n,s);case 35665:return a.uniform3fv(n,s);case 35666:return a.uniform4fv(n,s);case 35670:case 5124:case 35678:case 36306:case 35680:case 36289:return s.length?a.uniform1iv(n,s):a.uniform1i(n,s);case 35671:case 35667:return a.uniform2iv(n,s);case 35672:case 35668:return a.uniform3iv(n,s);case 35673:case 35669:return a.uniform4iv(n,s);case 35674:return a.uniformMatrix2fv(n,!1,s);case 35675:return a.uniformMatrix3fv(n,!1,s);case 35676:return a.uniformMatrix4fv(n,!1,s)}}function T_(a){let t=a.split(`
`);for(let n=0;n<t.length;n++)t[n]=n+1+": "+t[n];return t.join(`
`)}function Eb(a){const t=a.length,n=a[0].length;if(n===void 0)return a;const s=t*n;let l=E_[s];l||(E_[s]=l=new Float32Array(s));for(let c=0;c<t;c++)l.set(a[c],c*n);return l}function Tb(a,t){if(a.length!==t.length)return!1;for(let n=0,s=a.length;n<s;n++)if(a[n]!==t[n])return!1;return!0}function Ab(a,t){for(let n=0,s=a.length;n<s;n++)a[n]=t[n]}let Th=0;function A_(a){Th>100||(console.warn(a),Th++,Th>100&&console.warn("More than 100 program warnings - stopping logs."))}const Ah=new un;let bb=1;class Rb{constructor({canvas:t=document.createElement("canvas"),width:n=300,height:s=150,dpr:l=1,alpha:c=!1,depth:f=!0,stencil:h=!1,antialias:p=!1,premultipliedAlpha:m=!1,preserveDrawingBuffer:g=!1,powerPreference:_="default",autoClear:x=!0,webgl:M=2}={}){const E={alpha:c,depth:f,stencil:h,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:g,powerPreference:_};this.dpr=l,this.alpha=c,this.color=!0,this.depth=f,this.stencil=h,this.premultipliedAlpha=m,this.autoClear=x,this.id=bb++,M===2&&(this.gl=t.getContext("webgl2",E)),this.isWebgl2=!!this.gl,this.gl||(this.gl=t.getContext("webgl",E)),this.gl||console.error("unable to create webgl context"),this.gl.renderer=this,this.setSize(n,s),this.state={},this.state.blendFunc={src:this.gl.ONE,dst:this.gl.ZERO},this.state.blendEquation={modeRGB:this.gl.FUNC_ADD},this.state.cullFace=!1,this.state.frontFace=this.gl.CCW,this.state.depthMask=!0,this.state.depthFunc=this.gl.LEQUAL,this.state.premultiplyAlpha=!1,this.state.flipY=!1,this.state.unpackAlignment=4,this.state.framebuffer=null,this.state.viewport={x:0,y:0,width:null,height:null},this.state.textureUnits=[],this.state.activeTextureUnit=0,this.state.boundBuffer=null,this.state.uniformLocations=new Map,this.state.currentProgram=null,this.extensions={},this.isWebgl2?(this.getExtension("EXT_color_buffer_float"),this.getExtension("OES_texture_float_linear")):(this.getExtension("OES_texture_float"),this.getExtension("OES_texture_float_linear"),this.getExtension("OES_texture_half_float"),this.getExtension("OES_texture_half_float_linear"),this.getExtension("OES_element_index_uint"),this.getExtension("OES_standard_derivatives"),this.getExtension("EXT_sRGB"),this.getExtension("WEBGL_depth_texture"),this.getExtension("WEBGL_draw_buffers")),this.getExtension("WEBGL_compressed_texture_astc"),this.getExtension("EXT_texture_compression_bptc"),this.getExtension("WEBGL_compressed_texture_s3tc"),this.getExtension("WEBGL_compressed_texture_etc1"),this.getExtension("WEBGL_compressed_texture_pvrtc"),this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),this.vertexAttribDivisor=this.getExtension("ANGLE_instanced_arrays","vertexAttribDivisor","vertexAttribDivisorANGLE"),this.drawArraysInstanced=this.getExtension("ANGLE_instanced_arrays","drawArraysInstanced","drawArraysInstancedANGLE"),this.drawElementsInstanced=this.getExtension("ANGLE_instanced_arrays","drawElementsInstanced","drawElementsInstancedANGLE"),this.createVertexArray=this.getExtension("OES_vertex_array_object","createVertexArray","createVertexArrayOES"),this.bindVertexArray=this.getExtension("OES_vertex_array_object","bindVertexArray","bindVertexArrayOES"),this.deleteVertexArray=this.getExtension("OES_vertex_array_object","deleteVertexArray","deleteVertexArrayOES"),this.drawBuffers=this.getExtension("WEBGL_draw_buffers","drawBuffers","drawBuffersWEBGL"),this.parameters={},this.parameters.maxTextureUnits=this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),this.parameters.maxAnisotropy=this.getExtension("EXT_texture_filter_anisotropic")?this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}setSize(t,n){this.width=t,this.height=n,this.gl.canvas.width=t*this.dpr,this.gl.canvas.height=n*this.dpr,this.gl.canvas.style&&Object.assign(this.gl.canvas.style,{width:t+"px",height:n+"px"})}setViewport(t,n,s=0,l=0){this.state.viewport.width===t&&this.state.viewport.height===n||(this.state.viewport.width=t,this.state.viewport.height=n,this.state.viewport.x=s,this.state.viewport.y=l,this.gl.viewport(s,l,t,n))}setScissor(t,n,s=0,l=0){this.gl.scissor(s,l,t,n)}enable(t){this.state[t]!==!0&&(this.gl.enable(t),this.state[t]=!0)}disable(t){this.state[t]!==!1&&(this.gl.disable(t),this.state[t]=!1)}setBlendFunc(t,n,s,l){this.state.blendFunc.src===t&&this.state.blendFunc.dst===n&&this.state.blendFunc.srcAlpha===s&&this.state.blendFunc.dstAlpha===l||(this.state.blendFunc.src=t,this.state.blendFunc.dst=n,this.state.blendFunc.srcAlpha=s,this.state.blendFunc.dstAlpha=l,s!==void 0?this.gl.blendFuncSeparate(t,n,s,l):this.gl.blendFunc(t,n))}setBlendEquation(t,n){t=t||this.gl.FUNC_ADD,!(this.state.blendEquation.modeRGB===t&&this.state.blendEquation.modeAlpha===n)&&(this.state.blendEquation.modeRGB=t,this.state.blendEquation.modeAlpha=n,n!==void 0?this.gl.blendEquationSeparate(t,n):this.gl.blendEquation(t))}setCullFace(t){this.state.cullFace!==t&&(this.state.cullFace=t,this.gl.cullFace(t))}setFrontFace(t){this.state.frontFace!==t&&(this.state.frontFace=t,this.gl.frontFace(t))}setDepthMask(t){this.state.depthMask!==t&&(this.state.depthMask=t,this.gl.depthMask(t))}setDepthFunc(t){this.state.depthFunc!==t&&(this.state.depthFunc=t,this.gl.depthFunc(t))}setStencilMask(t){this.state.stencilMask!==t&&(this.state.stencilMask=t,this.gl.stencilMask(t))}setStencilFunc(t,n,s){this.state.stencilFunc===t&&this.state.stencilRef===n&&this.state.stencilFuncMask===s||(this.state.stencilFunc=t||this.gl.ALWAYS,this.state.stencilRef=n||0,this.state.stencilFuncMask=s||0,this.gl.stencilFunc(t||this.gl.ALWAYS,n||0,s||0))}setStencilOp(t,n,s){this.state.stencilFail===t&&this.state.stencilDepthFail===n&&this.state.stencilDepthPass===s||(this.state.stencilFail=t,this.state.stencilDepthFail=n,this.state.stencilDepthPass=s,this.gl.stencilOp(t,n,s))}activeTexture(t){this.state.activeTextureUnit!==t&&(this.state.activeTextureUnit=t,this.gl.activeTexture(this.gl.TEXTURE0+t))}bindFramebuffer({target:t=this.gl.FRAMEBUFFER,buffer:n=null}={}){this.state.framebuffer!==n&&(this.state.framebuffer=n,this.gl.bindFramebuffer(t,n))}getExtension(t,n,s){return n&&this.gl[n]?this.gl[n].bind(this.gl):(this.extensions[t]||(this.extensions[t]=this.gl.getExtension(t)),n?this.extensions[t]?this.extensions[t][s].bind(this.extensions[t]):null:this.extensions[t])}sortOpaque(t,n){return t.renderOrder!==n.renderOrder?t.renderOrder-n.renderOrder:t.program.id!==n.program.id?t.program.id-n.program.id:t.zDepth!==n.zDepth?t.zDepth-n.zDepth:n.id-t.id}sortTransparent(t,n){return t.renderOrder!==n.renderOrder?t.renderOrder-n.renderOrder:t.zDepth!==n.zDepth?n.zDepth-t.zDepth:n.id-t.id}sortUI(t,n){return t.renderOrder!==n.renderOrder?t.renderOrder-n.renderOrder:t.program.id!==n.program.id?t.program.id-n.program.id:n.id-t.id}getRenderList({scene:t,camera:n,frustumCull:s,sort:l}){let c=[];if(n&&s&&n.updateFrustum(),t.traverse(f=>{if(!f.visible)return!0;f.draw&&(s&&f.frustumCulled&&n&&!n.frustumIntersectsMesh(f)||c.push(f))}),l){const f=[],h=[],p=[];c.forEach(m=>{m.program.transparent?m.program.depthTest?h.push(m):p.push(m):f.push(m),m.zDepth=0,!(m.renderOrder!==0||!m.program.depthTest||!n)&&(m.worldMatrix.getTranslation(Ah),Ah.applyMatrix4(n.projectionViewMatrix),m.zDepth=Ah.z)}),f.sort(this.sortOpaque),h.sort(this.sortTransparent),p.sort(this.sortUI),c=f.concat(h,p)}return c}render({scene:t,camera:n,target:s=null,update:l=!0,sort:c=!0,frustumCull:f=!0,clear:h}){s===null?(this.bindFramebuffer(),this.setViewport(this.width*this.dpr,this.height*this.dpr)):(this.bindFramebuffer(s),this.setViewport(s.width,s.height)),(h||this.autoClear&&h!==!1)&&(this.depth&&(!s||s.depth)&&(this.enable(this.gl.DEPTH_TEST),this.setDepthMask(!0)),(this.stencil||!s||s.stencil)&&(this.enable(this.gl.STENCIL_TEST),this.setStencilMask(255)),this.gl.clear((this.color?this.gl.COLOR_BUFFER_BIT:0)|(this.depth?this.gl.DEPTH_BUFFER_BIT:0)|(this.stencil?this.gl.STENCIL_BUFFER_BIT:0))),l&&t.updateMatrixWorld(),n&&n.updateMatrixWorld(),this.getRenderList({scene:t,camera:n,frustumCull:f,sort:c}).forEach(m=>{m.draw({camera:n})})}}function Cb(a,t){return a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a}function wb(a,t,n,s,l){return a[0]=t,a[1]=n,a[2]=s,a[3]=l,a}function Db(a,t){let n=t[0],s=t[1],l=t[2],c=t[3],f=n*n+s*s+l*l+c*c;return f>0&&(f=1/Math.sqrt(f)),a[0]=n*f,a[1]=s*f,a[2]=l*f,a[3]=c*f,a}function Ub(a,t){return a[0]*t[0]+a[1]*t[1]+a[2]*t[2]+a[3]*t[3]}function Lb(a){return a[0]=0,a[1]=0,a[2]=0,a[3]=1,a}function Nb(a,t,n){n=n*.5;let s=Math.sin(n);return a[0]=s*t[0],a[1]=s*t[1],a[2]=s*t[2],a[3]=Math.cos(n),a}function b_(a,t,n){let s=t[0],l=t[1],c=t[2],f=t[3],h=n[0],p=n[1],m=n[2],g=n[3];return a[0]=s*g+f*h+l*m-c*p,a[1]=l*g+f*p+c*h-s*m,a[2]=c*g+f*m+s*p-l*h,a[3]=f*g-s*h-l*p-c*m,a}function Ob(a,t,n){n*=.5;let s=t[0],l=t[1],c=t[2],f=t[3],h=Math.sin(n),p=Math.cos(n);return a[0]=s*p+f*h,a[1]=l*p+c*h,a[2]=c*p-l*h,a[3]=f*p-s*h,a}function Fb(a,t,n){n*=.5;let s=t[0],l=t[1],c=t[2],f=t[3],h=Math.sin(n),p=Math.cos(n);return a[0]=s*p-c*h,a[1]=l*p+f*h,a[2]=c*p+s*h,a[3]=f*p-l*h,a}function Pb(a,t,n){n*=.5;let s=t[0],l=t[1],c=t[2],f=t[3],h=Math.sin(n),p=Math.cos(n);return a[0]=s*p+l*h,a[1]=l*p-s*h,a[2]=c*p+f*h,a[3]=f*p-c*h,a}function zb(a,t,n,s){let l=t[0],c=t[1],f=t[2],h=t[3],p=n[0],m=n[1],g=n[2],_=n[3],x,M,E,T,y;return M=l*p+c*m+f*g+h*_,M<0&&(M=-M,p=-p,m=-m,g=-g,_=-_),1-M>1e-6?(x=Math.acos(M),E=Math.sin(x),T=Math.sin((1-s)*x)/E,y=Math.sin(s*x)/E):(T=1-s,y=s),a[0]=T*l+y*p,a[1]=T*c+y*m,a[2]=T*f+y*g,a[3]=T*h+y*_,a}function Bb(a,t){let n=t[0],s=t[1],l=t[2],c=t[3],f=n*n+s*s+l*l+c*c,h=f?1/f:0;return a[0]=-n*h,a[1]=-s*h,a[2]=-l*h,a[3]=c*h,a}function Ib(a,t){return a[0]=-t[0],a[1]=-t[1],a[2]=-t[2],a[3]=t[3],a}function Hb(a,t){let n=t[0]+t[4]+t[8],s;if(n>0)s=Math.sqrt(n+1),a[3]=.5*s,s=.5/s,a[0]=(t[5]-t[7])*s,a[1]=(t[6]-t[2])*s,a[2]=(t[1]-t[3])*s;else{let l=0;t[4]>t[0]&&(l=1),t[8]>t[l*3+l]&&(l=2);let c=(l+1)%3,f=(l+2)%3;s=Math.sqrt(t[l*3+l]-t[c*3+c]-t[f*3+f]+1),a[l]=.5*s,s=.5/s,a[3]=(t[c*3+f]-t[f*3+c])*s,a[c]=(t[c*3+l]+t[l*3+c])*s,a[f]=(t[f*3+l]+t[l*3+f])*s}return a}function Gb(a,t,n="YXZ"){let s=Math.sin(t[0]*.5),l=Math.cos(t[0]*.5),c=Math.sin(t[1]*.5),f=Math.cos(t[1]*.5),h=Math.sin(t[2]*.5),p=Math.cos(t[2]*.5);return n==="XYZ"?(a[0]=s*f*p+l*c*h,a[1]=l*c*p-s*f*h,a[2]=l*f*h+s*c*p,a[3]=l*f*p-s*c*h):n==="YXZ"?(a[0]=s*f*p+l*c*h,a[1]=l*c*p-s*f*h,a[2]=l*f*h-s*c*p,a[3]=l*f*p+s*c*h):n==="ZXY"?(a[0]=s*f*p-l*c*h,a[1]=l*c*p+s*f*h,a[2]=l*f*h+s*c*p,a[3]=l*f*p-s*c*h):n==="ZYX"?(a[0]=s*f*p-l*c*h,a[1]=l*c*p+s*f*h,a[2]=l*f*h-s*c*p,a[3]=l*f*p+s*c*h):n==="YZX"?(a[0]=s*f*p+l*c*h,a[1]=l*c*p+s*f*h,a[2]=l*f*h-s*c*p,a[3]=l*f*p-s*c*h):n==="XZY"&&(a[0]=s*f*p-l*c*h,a[1]=l*c*p-s*f*h,a[2]=l*f*h+s*c*p,a[3]=l*f*p+s*c*h),a}const Vb=Cb,Xb=wb,kb=Ub,Wb=Db;class qb extends Array{constructor(t=0,n=0,s=0,l=1){super(t,n,s,l),this.onChange=()=>{},this._target=this;const c=["0","1","2","3"];return new Proxy(this,{set(f,h){const p=Reflect.set(...arguments);return p&&c.includes(h)&&f.onChange(),p}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}get w(){return this[3]}set x(t){this._target[0]=t,this.onChange()}set y(t){this._target[1]=t,this.onChange()}set z(t){this._target[2]=t,this.onChange()}set w(t){this._target[3]=t,this.onChange()}identity(){return Lb(this._target),this.onChange(),this}set(t,n,s,l){return t.length?this.copy(t):(Xb(this._target,t,n,s,l),this.onChange(),this)}rotateX(t){return Ob(this._target,this._target,t),this.onChange(),this}rotateY(t){return Fb(this._target,this._target,t),this.onChange(),this}rotateZ(t){return Pb(this._target,this._target,t),this.onChange(),this}inverse(t=this._target){return Bb(this._target,t),this.onChange(),this}conjugate(t=this._target){return Ib(this._target,t),this.onChange(),this}copy(t){return Vb(this._target,t),this.onChange(),this}normalize(t=this._target){return Wb(this._target,t),this.onChange(),this}multiply(t,n){return n?b_(this._target,t,n):b_(this._target,this._target,t),this.onChange(),this}dot(t){return kb(this._target,t)}fromMatrix3(t){return Hb(this._target,t),this.onChange(),this}fromEuler(t,n){return Gb(this._target,t,t.order),n||this.onChange(),this}fromAxisAngle(t,n){return Nb(this._target,t,n),this.onChange(),this}slerp(t,n){return zb(this._target,this._target,t,n),this.onChange(),this}fromArray(t,n=0){return this._target[0]=t[n],this._target[1]=t[n+1],this._target[2]=t[n+2],this._target[3]=t[n+3],this.onChange(),this}toArray(t=[],n=0){return t[n]=this[0],t[n+1]=this[1],t[n+2]=this[2],t[n+3]=this[3],t}}const Yb=1e-6;function jb(a,t){return a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a[4]=t[4],a[5]=t[5],a[6]=t[6],a[7]=t[7],a[8]=t[8],a[9]=t[9],a[10]=t[10],a[11]=t[11],a[12]=t[12],a[13]=t[13],a[14]=t[14],a[15]=t[15],a}function Zb(a,t,n,s,l,c,f,h,p,m,g,_,x,M,E,T,y){return a[0]=t,a[1]=n,a[2]=s,a[3]=l,a[4]=c,a[5]=f,a[6]=h,a[7]=p,a[8]=m,a[9]=g,a[10]=_,a[11]=x,a[12]=M,a[13]=E,a[14]=T,a[15]=y,a}function Kb(a){return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}function Qb(a,t){let n=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],p=t[6],m=t[7],g=t[8],_=t[9],x=t[10],M=t[11],E=t[12],T=t[13],y=t[14],v=t[15],P=n*h-s*f,U=n*p-l*f,C=n*m-c*f,B=s*p-l*h,O=s*m-c*h,F=l*m-c*p,q=g*T-_*E,D=g*y-x*E,w=g*v-M*E,G=_*y-x*T,Z=_*v-M*T,J=x*v-M*y,Q=P*J-U*Z+C*G+B*w-O*D+F*q;return Q?(Q=1/Q,a[0]=(h*J-p*Z+m*G)*Q,a[1]=(l*Z-s*J-c*G)*Q,a[2]=(T*F-y*O+v*B)*Q,a[3]=(x*O-_*F-M*B)*Q,a[4]=(p*w-f*J-m*D)*Q,a[5]=(n*J-l*w+c*D)*Q,a[6]=(y*C-E*F-v*U)*Q,a[7]=(g*F-x*C+M*U)*Q,a[8]=(f*Z-h*w+m*q)*Q,a[9]=(s*w-n*Z-c*q)*Q,a[10]=(E*O-T*C+v*P)*Q,a[11]=(_*C-g*O-M*P)*Q,a[12]=(h*D-f*G-p*q)*Q,a[13]=(n*G-s*D+l*q)*Q,a[14]=(T*U-E*B-y*P)*Q,a[15]=(g*B-_*U+x*P)*Q,a):null}function mv(a){let t=a[0],n=a[1],s=a[2],l=a[3],c=a[4],f=a[5],h=a[6],p=a[7],m=a[8],g=a[9],_=a[10],x=a[11],M=a[12],E=a[13],T=a[14],y=a[15],v=t*f-n*c,P=t*h-s*c,U=t*p-l*c,C=n*h-s*f,B=n*p-l*f,O=s*p-l*h,F=m*E-g*M,q=m*T-_*M,D=m*y-x*M,w=g*T-_*E,G=g*y-x*E,Z=_*y-x*T;return v*Z-P*G+U*w+C*D-B*q+O*F}function R_(a,t,n){let s=t[0],l=t[1],c=t[2],f=t[3],h=t[4],p=t[5],m=t[6],g=t[7],_=t[8],x=t[9],M=t[10],E=t[11],T=t[12],y=t[13],v=t[14],P=t[15],U=n[0],C=n[1],B=n[2],O=n[3];return a[0]=U*s+C*h+B*_+O*T,a[1]=U*l+C*p+B*x+O*y,a[2]=U*c+C*m+B*M+O*v,a[3]=U*f+C*g+B*E+O*P,U=n[4],C=n[5],B=n[6],O=n[7],a[4]=U*s+C*h+B*_+O*T,a[5]=U*l+C*p+B*x+O*y,a[6]=U*c+C*m+B*M+O*v,a[7]=U*f+C*g+B*E+O*P,U=n[8],C=n[9],B=n[10],O=n[11],a[8]=U*s+C*h+B*_+O*T,a[9]=U*l+C*p+B*x+O*y,a[10]=U*c+C*m+B*M+O*v,a[11]=U*f+C*g+B*E+O*P,U=n[12],C=n[13],B=n[14],O=n[15],a[12]=U*s+C*h+B*_+O*T,a[13]=U*l+C*p+B*x+O*y,a[14]=U*c+C*m+B*M+O*v,a[15]=U*f+C*g+B*E+O*P,a}function Jb(a,t,n){let s=n[0],l=n[1],c=n[2],f,h,p,m,g,_,x,M,E,T,y,v;return t===a?(a[12]=t[0]*s+t[4]*l+t[8]*c+t[12],a[13]=t[1]*s+t[5]*l+t[9]*c+t[13],a[14]=t[2]*s+t[6]*l+t[10]*c+t[14],a[15]=t[3]*s+t[7]*l+t[11]*c+t[15]):(f=t[0],h=t[1],p=t[2],m=t[3],g=t[4],_=t[5],x=t[6],M=t[7],E=t[8],T=t[9],y=t[10],v=t[11],a[0]=f,a[1]=h,a[2]=p,a[3]=m,a[4]=g,a[5]=_,a[6]=x,a[7]=M,a[8]=E,a[9]=T,a[10]=y,a[11]=v,a[12]=f*s+g*l+E*c+t[12],a[13]=h*s+_*l+T*c+t[13],a[14]=p*s+x*l+y*c+t[14],a[15]=m*s+M*l+v*c+t[15]),a}function $b(a,t,n){let s=n[0],l=n[1],c=n[2];return a[0]=t[0]*s,a[1]=t[1]*s,a[2]=t[2]*s,a[3]=t[3]*s,a[4]=t[4]*l,a[5]=t[5]*l,a[6]=t[6]*l,a[7]=t[7]*l,a[8]=t[8]*c,a[9]=t[9]*c,a[10]=t[10]*c,a[11]=t[11]*c,a[12]=t[12],a[13]=t[13],a[14]=t[14],a[15]=t[15],a}function t2(a,t,n,s){let l=s[0],c=s[1],f=s[2],h=Math.hypot(l,c,f),p,m,g,_,x,M,E,T,y,v,P,U,C,B,O,F,q,D,w,G,Z,J,Q,st;return Math.abs(h)<Yb?null:(h=1/h,l*=h,c*=h,f*=h,p=Math.sin(n),m=Math.cos(n),g=1-m,_=t[0],x=t[1],M=t[2],E=t[3],T=t[4],y=t[5],v=t[6],P=t[7],U=t[8],C=t[9],B=t[10],O=t[11],F=l*l*g+m,q=c*l*g+f*p,D=f*l*g-c*p,w=l*c*g-f*p,G=c*c*g+m,Z=f*c*g+l*p,J=l*f*g+c*p,Q=c*f*g-l*p,st=f*f*g+m,a[0]=_*F+T*q+U*D,a[1]=x*F+y*q+C*D,a[2]=M*F+v*q+B*D,a[3]=E*F+P*q+O*D,a[4]=_*w+T*G+U*Z,a[5]=x*w+y*G+C*Z,a[6]=M*w+v*G+B*Z,a[7]=E*w+P*G+O*Z,a[8]=_*J+T*Q+U*st,a[9]=x*J+y*Q+C*st,a[10]=M*J+v*Q+B*st,a[11]=E*J+P*Q+O*st,t!==a&&(a[12]=t[12],a[13]=t[13],a[14]=t[14],a[15]=t[15]),a)}function e2(a,t){return a[0]=t[12],a[1]=t[13],a[2]=t[14],a}function gv(a,t){let n=t[0],s=t[1],l=t[2],c=t[4],f=t[5],h=t[6],p=t[8],m=t[9],g=t[10];return a[0]=Math.hypot(n,s,l),a[1]=Math.hypot(c,f,h),a[2]=Math.hypot(p,m,g),a}function n2(a){let t=a[0],n=a[1],s=a[2],l=a[4],c=a[5],f=a[6],h=a[8],p=a[9],m=a[10];const g=t*t+n*n+s*s,_=l*l+c*c+f*f,x=h*h+p*p+m*m;return Math.sqrt(Math.max(g,_,x))}const _v=(function(){const a=[1,1,1];return function(t,n){let s=a;gv(s,n);let l=1/s[0],c=1/s[1],f=1/s[2],h=n[0]*l,p=n[1]*c,m=n[2]*f,g=n[4]*l,_=n[5]*c,x=n[6]*f,M=n[8]*l,E=n[9]*c,T=n[10]*f,y=h+_+T,v=0;return y>0?(v=Math.sqrt(y+1)*2,t[3]=.25*v,t[0]=(x-E)/v,t[1]=(M-m)/v,t[2]=(p-g)/v):h>_&&h>T?(v=Math.sqrt(1+h-_-T)*2,t[3]=(x-E)/v,t[0]=.25*v,t[1]=(p+g)/v,t[2]=(M+m)/v):_>T?(v=Math.sqrt(1+_-h-T)*2,t[3]=(M-m)/v,t[0]=(p+g)/v,t[1]=.25*v,t[2]=(x+E)/v):(v=Math.sqrt(1+T-h-_)*2,t[3]=(p-g)/v,t[0]=(M+m)/v,t[1]=(x+E)/v,t[2]=.25*v),t}})();function i2(a,t,n,s){let l=wo([a[0],a[1],a[2]]);const c=wo([a[4],a[5],a[6]]),f=wo([a[8],a[9],a[10]]);mv(a)<0&&(l=-l),n[0]=a[12],n[1]=a[13],n[2]=a[14];const p=a.slice(),m=1/l,g=1/c,_=1/f;p[0]*=m,p[1]*=m,p[2]*=m,p[4]*=g,p[5]*=g,p[6]*=g,p[8]*=_,p[9]*=_,p[10]*=_,_v(t,p),s[0]=l,s[1]=c,s[2]=f}function a2(a,t,n,s){const l=a,c=t[0],f=t[1],h=t[2],p=t[3],m=c+c,g=f+f,_=h+h,x=c*m,M=c*g,E=c*_,T=f*g,y=f*_,v=h*_,P=p*m,U=p*g,C=p*_,B=s[0],O=s[1],F=s[2];return l[0]=(1-(T+v))*B,l[1]=(M+C)*B,l[2]=(E-U)*B,l[3]=0,l[4]=(M-C)*O,l[5]=(1-(x+v))*O,l[6]=(y+P)*O,l[7]=0,l[8]=(E+U)*F,l[9]=(y-P)*F,l[10]=(1-(x+T))*F,l[11]=0,l[12]=n[0],l[13]=n[1],l[14]=n[2],l[15]=1,l}function s2(a,t){let n=t[0],s=t[1],l=t[2],c=t[3],f=n+n,h=s+s,p=l+l,m=n*f,g=s*f,_=s*h,x=l*f,M=l*h,E=l*p,T=c*f,y=c*h,v=c*p;return a[0]=1-_-E,a[1]=g+v,a[2]=x-y,a[3]=0,a[4]=g-v,a[5]=1-m-E,a[6]=M+T,a[7]=0,a[8]=x+y,a[9]=M-T,a[10]=1-m-_,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}function r2(a,t,n,s,l){let c=1/Math.tan(t/2),f=1/(s-l);return a[0]=c/n,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=c,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=(l+s)*f,a[11]=-1,a[12]=0,a[13]=0,a[14]=2*l*s*f,a[15]=0,a}function o2(a,t,n,s,l,c,f){let h=1/(t-n),p=1/(s-l),m=1/(c-f);return a[0]=-2*h,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=-2*p,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=2*m,a[11]=0,a[12]=(t+n)*h,a[13]=(l+s)*p,a[14]=(f+c)*m,a[15]=1,a}function l2(a,t,n,s){let l=t[0],c=t[1],f=t[2],h=s[0],p=s[1],m=s[2],g=l-n[0],_=c-n[1],x=f-n[2],M=g*g+_*_+x*x;M===0?x=1:(M=1/Math.sqrt(M),g*=M,_*=M,x*=M);let E=p*x-m*_,T=m*g-h*x,y=h*_-p*g;return M=E*E+T*T+y*y,M===0&&(m?h+=1e-6:p?m+=1e-6:p+=1e-6,E=p*x-m*_,T=m*g-h*x,y=h*_-p*g,M=E*E+T*T+y*y),M=1/Math.sqrt(M),E*=M,T*=M,y*=M,a[0]=E,a[1]=T,a[2]=y,a[3]=0,a[4]=_*y-x*T,a[5]=x*E-g*y,a[6]=g*T-_*E,a[7]=0,a[8]=g,a[9]=_,a[10]=x,a[11]=0,a[12]=l,a[13]=c,a[14]=f,a[15]=1,a}function C_(a,t,n){return a[0]=t[0]+n[0],a[1]=t[1]+n[1],a[2]=t[2]+n[2],a[3]=t[3]+n[3],a[4]=t[4]+n[4],a[5]=t[5]+n[5],a[6]=t[6]+n[6],a[7]=t[7]+n[7],a[8]=t[8]+n[8],a[9]=t[9]+n[9],a[10]=t[10]+n[10],a[11]=t[11]+n[11],a[12]=t[12]+n[12],a[13]=t[13]+n[13],a[14]=t[14]+n[14],a[15]=t[15]+n[15],a}function w_(a,t,n){return a[0]=t[0]-n[0],a[1]=t[1]-n[1],a[2]=t[2]-n[2],a[3]=t[3]-n[3],a[4]=t[4]-n[4],a[5]=t[5]-n[5],a[6]=t[6]-n[6],a[7]=t[7]-n[7],a[8]=t[8]-n[8],a[9]=t[9]-n[9],a[10]=t[10]-n[10],a[11]=t[11]-n[11],a[12]=t[12]-n[12],a[13]=t[13]-n[13],a[14]=t[14]-n[14],a[15]=t[15]-n[15],a}function c2(a,t,n){return a[0]=t[0]*n,a[1]=t[1]*n,a[2]=t[2]*n,a[3]=t[3]*n,a[4]=t[4]*n,a[5]=t[5]*n,a[6]=t[6]*n,a[7]=t[7]*n,a[8]=t[8]*n,a[9]=t[9]*n,a[10]=t[10]*n,a[11]=t[11]*n,a[12]=t[12]*n,a[13]=t[13]*n,a[14]=t[14]*n,a[15]=t[15]*n,a}class Ia extends Array{constructor(t=1,n=0,s=0,l=0,c=0,f=1,h=0,p=0,m=0,g=0,_=1,x=0,M=0,E=0,T=0,y=1){return super(t,n,s,l,c,f,h,p,m,g,_,x,M,E,T,y),this}get x(){return this[12]}get y(){return this[13]}get z(){return this[14]}get w(){return this[15]}set x(t){this[12]=t}set y(t){this[13]=t}set z(t){this[14]=t}set w(t){this[15]=t}set(t,n,s,l,c,f,h,p,m,g,_,x,M,E,T,y){return t.length?this.copy(t):(Zb(this,t,n,s,l,c,f,h,p,m,g,_,x,M,E,T,y),this)}translate(t,n=this){return Jb(this,n,t),this}rotate(t,n,s=this){return t2(this,s,t,n),this}scale(t,n=this){return $b(this,n,typeof t=="number"?[t,t,t]:t),this}add(t,n){return n?C_(this,t,n):C_(this,this,t),this}sub(t,n){return n?w_(this,t,n):w_(this,this,t),this}multiply(t,n){return t.length?n?R_(this,t,n):R_(this,this,t):c2(this,this,t),this}identity(){return Kb(this),this}copy(t){return jb(this,t),this}fromPerspective({fov:t,aspect:n,near:s,far:l}={}){return r2(this,t,n,s,l),this}fromOrthogonal({left:t,right:n,bottom:s,top:l,near:c,far:f}){return o2(this,t,n,s,l,c,f),this}fromQuaternion(t){return s2(this,t),this}setPosition(t){return this.x=t[0],this.y=t[1],this.z=t[2],this}inverse(t=this){return Qb(this,t),this}compose(t,n,s){return a2(this,t,n,s),this}decompose(t,n,s){return i2(this,t,n,s),this}getRotation(t){return _v(t,this),this}getTranslation(t){return e2(t,this),this}getScaling(t){return gv(t,this),this}getMaxScaleOnAxis(){return n2(this)}lookAt(t,n,s){return l2(this,t,n,s),this}determinant(){return mv(this)}fromArray(t,n=0){return this[0]=t[n],this[1]=t[n+1],this[2]=t[n+2],this[3]=t[n+3],this[4]=t[n+4],this[5]=t[n+5],this[6]=t[n+6],this[7]=t[n+7],this[8]=t[n+8],this[9]=t[n+9],this[10]=t[n+10],this[11]=t[n+11],this[12]=t[n+12],this[13]=t[n+13],this[14]=t[n+14],this[15]=t[n+15],this}toArray(t=[],n=0){return t[n]=this[0],t[n+1]=this[1],t[n+2]=this[2],t[n+3]=this[3],t[n+4]=this[4],t[n+5]=this[5],t[n+6]=this[6],t[n+7]=this[7],t[n+8]=this[8],t[n+9]=this[9],t[n+10]=this[10],t[n+11]=this[11],t[n+12]=this[12],t[n+13]=this[13],t[n+14]=this[14],t[n+15]=this[15],t}}function u2(a,t,n="YXZ"){return n==="XYZ"?(a[1]=Math.asin(Math.min(Math.max(t[8],-1),1)),Math.abs(t[8])<.99999?(a[0]=Math.atan2(-t[9],t[10]),a[2]=Math.atan2(-t[4],t[0])):(a[0]=Math.atan2(t[6],t[5]),a[2]=0)):n==="YXZ"?(a[0]=Math.asin(-Math.min(Math.max(t[9],-1),1)),Math.abs(t[9])<.99999?(a[1]=Math.atan2(t[8],t[10]),a[2]=Math.atan2(t[1],t[5])):(a[1]=Math.atan2(-t[2],t[0]),a[2]=0)):n==="ZXY"?(a[0]=Math.asin(Math.min(Math.max(t[6],-1),1)),Math.abs(t[6])<.99999?(a[1]=Math.atan2(-t[2],t[10]),a[2]=Math.atan2(-t[4],t[5])):(a[1]=0,a[2]=Math.atan2(t[1],t[0]))):n==="ZYX"?(a[1]=Math.asin(-Math.min(Math.max(t[2],-1),1)),Math.abs(t[2])<.99999?(a[0]=Math.atan2(t[6],t[10]),a[2]=Math.atan2(t[1],t[0])):(a[0]=0,a[2]=Math.atan2(-t[4],t[5]))):n==="YZX"?(a[2]=Math.asin(Math.min(Math.max(t[1],-1),1)),Math.abs(t[1])<.99999?(a[0]=Math.atan2(-t[9],t[5]),a[1]=Math.atan2(-t[2],t[0])):(a[0]=0,a[1]=Math.atan2(t[8],t[10]))):n==="XZY"&&(a[2]=Math.asin(-Math.min(Math.max(t[4],-1),1)),Math.abs(t[4])<.99999?(a[0]=Math.atan2(t[6],t[5]),a[1]=Math.atan2(t[8],t[0])):(a[0]=Math.atan2(-t[9],t[10]),a[1]=0)),a}const D_=new Ia;class f2 extends Array{constructor(t=0,n=t,s=t,l="YXZ"){super(t,n,s),this.order=l,this.onChange=()=>{},this._target=this;const c=["0","1","2"];return new Proxy(this,{set(f,h){const p=Reflect.set(...arguments);return p&&c.includes(h)&&f.onChange(),p}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(t){this._target[0]=t,this.onChange()}set y(t){this._target[1]=t,this.onChange()}set z(t){this._target[2]=t,this.onChange()}set(t,n=t,s=t){return t.length?this.copy(t):(this._target[0]=t,this._target[1]=n,this._target[2]=s,this.onChange(),this)}copy(t){return this._target[0]=t[0],this._target[1]=t[1],this._target[2]=t[2],this.onChange(),this}reorder(t){return this._target.order=t,this.onChange(),this}fromRotationMatrix(t,n=this.order){return u2(this._target,t,n),this.onChange(),this}fromQuaternion(t,n=this.order,s){return D_.fromQuaternion(t),this._target.fromRotationMatrix(D_,n),s||this.onChange(),this}fromArray(t,n=0){return this._target[0]=t[n],this._target[1]=t[n+1],this._target[2]=t[n+2],this}toArray(t=[],n=0){return t[n]=this[0],t[n+1]=this[1],t[n+2]=this[2],t}}class Dd{constructor(){this.parent=null,this.children=[],this.visible=!0,this.matrix=new Ia,this.worldMatrix=new Ia,this.matrixAutoUpdate=!0,this.worldMatrixNeedsUpdate=!1,this.position=new un,this.quaternion=new qb,this.scale=new un(1),this.rotation=new f2,this.up=new un(0,1,0),this.rotation._target.onChange=()=>this.quaternion.fromEuler(this.rotation,!0),this.quaternion._target.onChange=()=>this.rotation.fromQuaternion(this.quaternion,void 0,!0)}setParent(t,n=!0){this.parent&&t!==this.parent&&this.parent.removeChild(this,!1),this.parent=t,n&&t&&t.addChild(this,!1)}addChild(t,n=!0){~this.children.indexOf(t)||this.children.push(t),n&&t.setParent(this,!1)}removeChild(t,n=!0){~this.children.indexOf(t)&&this.children.splice(this.children.indexOf(t),1),n&&t.setParent(null,!1)}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.worldMatrixNeedsUpdate||t)&&(this.parent===null?this.worldMatrix.copy(this.matrix):this.worldMatrix.multiply(this.parent.worldMatrix,this.matrix),this.worldMatrixNeedsUpdate=!1,t=!0);for(let n=0,s=this.children.length;n<s;n++)this.children[n].updateMatrixWorld(t)}updateMatrix(){this.matrix.compose(this.quaternion,this.position,this.scale),this.worldMatrixNeedsUpdate=!0}traverse(t){if(!t(this))for(let n=0,s=this.children.length;n<s;n++)this.children[n].traverse(t)}decompose(){this.matrix.decompose(this.quaternion._target,this.position,this.scale),this.rotation.fromQuaternion(this.quaternion)}lookAt(t,n=!1){n?this.matrix.lookAt(this.position,t,this.up):this.matrix.lookAt(t,this.position,this.up),this.matrix.getRotation(this.quaternion._target),this.rotation.fromQuaternion(this.quaternion)}}const h2=new Ia,d2=new un,p2=new un;class m2 extends Dd{constructor(t,{near:n=.1,far:s=100,fov:l=45,aspect:c=1,left:f,right:h,bottom:p,top:m,zoom:g=1}={}){super(),Object.assign(this,{near:n,far:s,fov:l,aspect:c,left:f,right:h,bottom:p,top:m,zoom:g}),this.projectionMatrix=new Ia,this.viewMatrix=new Ia,this.projectionViewMatrix=new Ia,this.worldPosition=new un,this.type=f||h?"orthographic":"perspective",this.type==="orthographic"?this.orthographic():this.perspective()}perspective({near:t=this.near,far:n=this.far,fov:s=this.fov,aspect:l=this.aspect}={}){return Object.assign(this,{near:t,far:n,fov:s,aspect:l}),this.projectionMatrix.fromPerspective({fov:s*(Math.PI/180),aspect:l,near:t,far:n}),this.type="perspective",this}orthographic({near:t=this.near,far:n=this.far,left:s=this.left||-1,right:l=this.right||1,bottom:c=this.bottom||-1,top:f=this.top||1,zoom:h=this.zoom}={}){return Object.assign(this,{near:t,far:n,left:s,right:l,bottom:c,top:f,zoom:h}),s/=h,l/=h,c/=h,f/=h,this.projectionMatrix.fromOrthogonal({left:s,right:l,bottom:c,top:f,near:t,far:n}),this.type="orthographic",this}updateMatrixWorld(){return super.updateMatrixWorld(),this.viewMatrix.inverse(this.worldMatrix),this.worldMatrix.getTranslation(this.worldPosition),this.projectionViewMatrix.multiply(this.projectionMatrix,this.viewMatrix),this}updateProjectionMatrix(){return this.type==="perspective"?this.perspective():this.orthographic()}lookAt(t){return super.lookAt(t,!0),this}project(t){return t.applyMatrix4(this.viewMatrix),t.applyMatrix4(this.projectionMatrix),this}unproject(t){return t.applyMatrix4(h2.inverse(this.projectionMatrix)),t.applyMatrix4(this.worldMatrix),this}updateFrustum(){this.frustum||(this.frustum=[new un,new un,new un,new un,new un,new un]);const t=this.projectionViewMatrix;this.frustum[0].set(t[3]-t[0],t[7]-t[4],t[11]-t[8]).constant=t[15]-t[12],this.frustum[1].set(t[3]+t[0],t[7]+t[4],t[11]+t[8]).constant=t[15]+t[12],this.frustum[2].set(t[3]+t[1],t[7]+t[5],t[11]+t[9]).constant=t[15]+t[13],this.frustum[3].set(t[3]-t[1],t[7]-t[5],t[11]-t[9]).constant=t[15]-t[13],this.frustum[4].set(t[3]-t[2],t[7]-t[6],t[11]-t[10]).constant=t[15]-t[14],this.frustum[5].set(t[3]+t[2],t[7]+t[6],t[11]+t[10]).constant=t[15]+t[14];for(let n=0;n<6;n++){const s=1/this.frustum[n].distance();this.frustum[n].multiply(s),this.frustum[n].constant*=s}}frustumIntersectsMesh(t,n=t.worldMatrix){if(!t.geometry.attributes.position||((!t.geometry.bounds||t.geometry.bounds.radius===1/0)&&t.geometry.computeBoundingSphere(),!t.geometry.bounds))return!0;const s=d2;s.copy(t.geometry.bounds.center),s.applyMatrix4(n);const l=t.geometry.bounds.radius*n.getMaxScaleOnAxis();return this.frustumIntersectsSphere(s,l)}frustumIntersectsSphere(t,n){const s=p2;for(let l=0;l<6;l++){const c=this.frustum[l];if(s.copy(c).dot(t)+c.constant<-n)return!1}return!0}}function g2(a,t){return a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[4],a[4]=t[5],a[5]=t[6],a[6]=t[8],a[7]=t[9],a[8]=t[10],a}function _2(a,t){let n=t[0],s=t[1],l=t[2],c=t[3],f=n+n,h=s+s,p=l+l,m=n*f,g=s*f,_=s*h,x=l*f,M=l*h,E=l*p,T=c*f,y=c*h,v=c*p;return a[0]=1-_-E,a[3]=g-v,a[6]=x+y,a[1]=g+v,a[4]=1-m-E,a[7]=M-T,a[2]=x-y,a[5]=M+T,a[8]=1-m-_,a}function v2(a,t){return a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a[4]=t[4],a[5]=t[5],a[6]=t[6],a[7]=t[7],a[8]=t[8],a}function x2(a,t,n,s,l,c,f,h,p,m){return a[0]=t,a[1]=n,a[2]=s,a[3]=l,a[4]=c,a[5]=f,a[6]=h,a[7]=p,a[8]=m,a}function S2(a){return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=1,a[5]=0,a[6]=0,a[7]=0,a[8]=1,a}function y2(a,t){let n=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],p=t[6],m=t[7],g=t[8],_=g*f-h*m,x=-g*c+h*p,M=m*c-f*p,E=n*_+s*x+l*M;return E?(E=1/E,a[0]=_*E,a[1]=(-g*s+l*m)*E,a[2]=(h*s-l*f)*E,a[3]=x*E,a[4]=(g*n-l*p)*E,a[5]=(-h*n+l*c)*E,a[6]=M*E,a[7]=(-m*n+s*p)*E,a[8]=(f*n-s*c)*E,a):null}function U_(a,t,n){let s=t[0],l=t[1],c=t[2],f=t[3],h=t[4],p=t[5],m=t[6],g=t[7],_=t[8],x=n[0],M=n[1],E=n[2],T=n[3],y=n[4],v=n[5],P=n[6],U=n[7],C=n[8];return a[0]=x*s+M*f+E*m,a[1]=x*l+M*h+E*g,a[2]=x*c+M*p+E*_,a[3]=T*s+y*f+v*m,a[4]=T*l+y*h+v*g,a[5]=T*c+y*p+v*_,a[6]=P*s+U*f+C*m,a[7]=P*l+U*h+C*g,a[8]=P*c+U*p+C*_,a}function M2(a,t,n){let s=t[0],l=t[1],c=t[2],f=t[3],h=t[4],p=t[5],m=t[6],g=t[7],_=t[8],x=n[0],M=n[1];return a[0]=s,a[1]=l,a[2]=c,a[3]=f,a[4]=h,a[5]=p,a[6]=x*s+M*f+m,a[7]=x*l+M*h+g,a[8]=x*c+M*p+_,a}function E2(a,t,n){let s=t[0],l=t[1],c=t[2],f=t[3],h=t[4],p=t[5],m=t[6],g=t[7],_=t[8],x=Math.sin(n),M=Math.cos(n);return a[0]=M*s+x*f,a[1]=M*l+x*h,a[2]=M*c+x*p,a[3]=M*f-x*s,a[4]=M*h-x*l,a[5]=M*p-x*c,a[6]=m,a[7]=g,a[8]=_,a}function T2(a,t,n){let s=n[0],l=n[1];return a[0]=s*t[0],a[1]=s*t[1],a[2]=s*t[2],a[3]=l*t[3],a[4]=l*t[4],a[5]=l*t[5],a[6]=t[6],a[7]=t[7],a[8]=t[8],a}function A2(a,t){let n=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],p=t[6],m=t[7],g=t[8],_=t[9],x=t[10],M=t[11],E=t[12],T=t[13],y=t[14],v=t[15],P=n*h-s*f,U=n*p-l*f,C=n*m-c*f,B=s*p-l*h,O=s*m-c*h,F=l*m-c*p,q=g*T-_*E,D=g*y-x*E,w=g*v-M*E,G=_*y-x*T,Z=_*v-M*T,J=x*v-M*y,Q=P*J-U*Z+C*G+B*w-O*D+F*q;return Q?(Q=1/Q,a[0]=(h*J-p*Z+m*G)*Q,a[1]=(p*w-f*J-m*D)*Q,a[2]=(f*Z-h*w+m*q)*Q,a[3]=(l*Z-s*J-c*G)*Q,a[4]=(n*J-l*w+c*D)*Q,a[5]=(s*w-n*Z-c*q)*Q,a[6]=(T*F-y*O+v*B)*Q,a[7]=(y*C-E*F-v*U)*Q,a[8]=(E*O-T*C+v*P)*Q,a):null}class b2 extends Array{constructor(t=1,n=0,s=0,l=0,c=1,f=0,h=0,p=0,m=1){return super(t,n,s,l,c,f,h,p,m),this}set(t,n,s,l,c,f,h,p,m){return t.length?this.copy(t):(x2(this,t,n,s,l,c,f,h,p,m),this)}translate(t,n=this){return M2(this,n,t),this}rotate(t,n=this){return E2(this,n,t),this}scale(t,n=this){return T2(this,n,t),this}multiply(t,n){return n?U_(this,t,n):U_(this,this,t),this}identity(){return S2(this),this}copy(t){return v2(this,t),this}fromMatrix4(t){return g2(this,t),this}fromQuaternion(t){return _2(this,t),this}fromBasis(t,n,s){return this.set(t[0],t[1],t[2],n[0],n[1],n[2],s[0],s[1],s[2]),this}inverse(t=this){return y2(this,t),this}getNormalMatrix(t){return A2(this,t),this}}let R2=0;class vv extends Dd{constructor(t,{geometry:n,program:s,mode:l=t.TRIANGLES,frustumCulled:c=!0,renderOrder:f=0}={}){super(),t.canvas||console.error("gl not passed as first argument to Mesh"),this.gl=t,this.id=R2++,this.geometry=n,this.program=s,this.mode=l,this.frustumCulled=c,this.renderOrder=f,this.modelViewMatrix=new Ia,this.normalMatrix=new b2,this.beforeRenderCallbacks=[],this.afterRenderCallbacks=[]}onBeforeRender(t){return this.beforeRenderCallbacks.push(t),this}onAfterRender(t){return this.afterRenderCallbacks.push(t),this}draw({camera:t}={}){t&&(this.program.uniforms.modelMatrix||Object.assign(this.program.uniforms,{modelMatrix:{value:null},viewMatrix:{value:null},modelViewMatrix:{value:null},normalMatrix:{value:null},projectionMatrix:{value:null},cameraPosition:{value:null}}),this.program.uniforms.projectionMatrix.value=t.projectionMatrix,this.program.uniforms.cameraPosition.value=t.worldPosition,this.program.uniforms.viewMatrix.value=t.viewMatrix,this.modelViewMatrix.multiply(t.viewMatrix,this.worldMatrix),this.normalMatrix.getNormalMatrix(this.modelViewMatrix),this.program.uniforms.modelMatrix.value=this.worldMatrix,this.program.uniforms.modelViewMatrix.value=this.modelViewMatrix,this.program.uniforms.normalMatrix.value=this.normalMatrix),this.beforeRenderCallbacks.forEach(s=>s&&s({mesh:this,camera:t}));let n=this.program.cullFace&&this.worldMatrix.determinant()<0;this.program.use({flipFaces:n}),this.geometry.draw({mode:this.mode,program:this.program}),this.afterRenderCallbacks.forEach(s=>s&&s({mesh:this,camera:t}))}}const L_=new Uint8Array(4);function N_(a){return(a&a-1)===0}let C2=1;class xv{constructor(t,{image:n,target:s=t.TEXTURE_2D,type:l=t.UNSIGNED_BYTE,format:c=t.RGBA,internalFormat:f=c,wrapS:h=t.CLAMP_TO_EDGE,wrapT:p=t.CLAMP_TO_EDGE,wrapR:m=t.CLAMP_TO_EDGE,generateMipmaps:g=s===(t.TEXTURE_2D||t.TEXTURE_CUBE_MAP),minFilter:_=g?t.NEAREST_MIPMAP_LINEAR:t.LINEAR,magFilter:x=t.LINEAR,premultiplyAlpha:M=!1,unpackAlignment:E=4,flipY:T=s==(t.TEXTURE_2D||t.TEXTURE_3D),anisotropy:y=0,level:v=0,width:P,height:U=P,length:C=1}={}){this.gl=t,this.id=C2++,this.image=n,this.target=s,this.type=l,this.format=c,this.internalFormat=f,this.minFilter=_,this.magFilter=x,this.wrapS=h,this.wrapT=p,this.wrapR=m,this.generateMipmaps=g,this.premultiplyAlpha=M,this.unpackAlignment=E,this.flipY=T,this.anisotropy=Math.min(y,this.gl.renderer.parameters.maxAnisotropy),this.level=v,this.width=P,this.height=U,this.length=C,this.texture=this.gl.createTexture(),this.store={image:null},this.glState=this.gl.renderer.state,this.state={},this.state.minFilter=this.gl.NEAREST_MIPMAP_LINEAR,this.state.magFilter=this.gl.LINEAR,this.state.wrapS=this.gl.REPEAT,this.state.wrapT=this.gl.REPEAT,this.state.anisotropy=0}bind(){this.glState.textureUnits[this.glState.activeTextureUnit]!==this.id&&(this.gl.bindTexture(this.target,this.texture),this.glState.textureUnits[this.glState.activeTextureUnit]=this.id)}update(t=0){const n=!(this.image===this.store.image&&!this.needsUpdate);if((n||this.glState.textureUnits[t]!==this.id)&&(this.gl.renderer.activeTexture(t),this.bind()),!!n){if(this.needsUpdate=!1,this.flipY!==this.glState.flipY&&(this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,this.flipY),this.glState.flipY=this.flipY),this.premultiplyAlpha!==this.glState.premultiplyAlpha&&(this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),this.glState.premultiplyAlpha=this.premultiplyAlpha),this.unpackAlignment!==this.glState.unpackAlignment&&(this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,this.unpackAlignment),this.glState.unpackAlignment=this.unpackAlignment),this.minFilter!==this.state.minFilter&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_MIN_FILTER,this.minFilter),this.state.minFilter=this.minFilter),this.magFilter!==this.state.magFilter&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_MAG_FILTER,this.magFilter),this.state.magFilter=this.magFilter),this.wrapS!==this.state.wrapS&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_S,this.wrapS),this.state.wrapS=this.wrapS),this.wrapT!==this.state.wrapT&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_T,this.wrapT),this.state.wrapT=this.wrapT),this.wrapR!==this.state.wrapR&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_R,this.wrapR),this.state.wrapR=this.wrapR),this.anisotropy&&this.anisotropy!==this.state.anisotropy&&(this.gl.texParameterf(this.target,this.gl.renderer.getExtension("EXT_texture_filter_anisotropic").TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropy),this.state.anisotropy=this.anisotropy),this.image){if(this.image.width&&(this.width=this.image.width,this.height=this.image.height),this.target===this.gl.TEXTURE_CUBE_MAP)for(let s=0;s<6;s++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+s,this.level,this.internalFormat,this.format,this.type,this.image[s]);else if(ArrayBuffer.isView(this.image))this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,this.image):(this.target===this.gl.TEXTURE_2D_ARRAY||this.target===this.gl.TEXTURE_3D)&&this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,this.image);else if(this.image.isCompressedTexture)for(let s=0;s<this.image.length;s++)this.gl.compressedTexImage2D(this.target,s,this.internalFormat,this.image[s].width,this.image[s].height,0,this.image[s].data);else this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.format,this.type,this.image):this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,this.image);this.generateMipmaps&&(!this.gl.renderer.isWebgl2&&(!N_(this.image.width)||!N_(this.image.height))?(this.generateMipmaps=!1,this.wrapS=this.wrapT=this.gl.CLAMP_TO_EDGE,this.minFilter=this.gl.LINEAR):this.gl.generateMipmap(this.target)),this.onUpdate&&this.onUpdate()}else if(this.target===this.gl.TEXTURE_CUBE_MAP)for(let s=0;s<6;s++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+s,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,L_);else this.width?this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,null):this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,null):this.gl.texImage2D(this.target,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,L_);this.store.image=this.image}}}class Uc extends yb{constructor(t,{width:n=1,height:s=1,widthSegments:l=1,heightSegments:c=1,attributes:f={}}={}){const h=l,p=c,m=(h+1)*(p+1),g=h*p*6,_=new Float32Array(m*3),x=new Float32Array(m*3),M=new Float32Array(m*2),E=g>65536?new Uint32Array(g):new Uint16Array(g);Uc.buildPlane(_,x,M,E,n,s,0,h,p),Object.assign(f,{position:{size:3,data:_},normal:{size:3,data:x},uv:{size:2,data:M},index:{data:E}}),super(t,f)}static buildPlane(t,n,s,l,c,f,h,p,m,g=0,_=1,x=2,M=1,E=-1,T=0,y=0){const v=T,P=c/p,U=f/m;for(let C=0;C<=m;C++){let B=C*U-f/2;for(let O=0;O<=p;O++,T++){let F=O*P-c/2;if(t[T*3+g]=F*M,t[T*3+_]=B*E,t[T*3+x]=h/2,n[T*3+g]=0,n[T*3+_]=0,n[T*3+x]=h>=0?1:-1,s[T*2]=O/p,s[T*2+1]=1-C/m,C===m||O===p)continue;let q=v+O+C*(p+1),D=v+O+(C+1)*(p+1),w=v+O+(C+1)*(p+1)+1,G=v+O+C*(p+1)+1;l[y*6]=q,l[y*6+1]=D,l[y*6+2]=G,l[y*6+3]=D,l[y*6+4]=w,l[y*6+5]=G,y++}}}}function w2(a,t){let n;return function(...s){clearTimeout(n),n=setTimeout(()=>a.apply(this,s),t)}}function D2(a,t,n){return a+(t-a)*n}function U2(a){const t=Object.getPrototypeOf(a);Object.getOwnPropertyNames(t).forEach(n=>{n!=="constructor"&&typeof a[n]=="function"&&(a[n]=a[n].bind(a))})}function L2(a,t,n="bold 30px monospace",s="black"){const l=document.createElement("canvas"),c=l.getContext("2d");c.font=n;const f=c.measureText(t),h=Math.ceil(f.width),p=Math.ceil(parseInt(n,10)*1.2);l.width=h+20,l.height=p+20,c.font=n,c.fillStyle=s,c.textBaseline="middle",c.textAlign="center",c.clearRect(0,0,l.width,l.height),c.fillText(t,l.width/2,l.height/2);const m=new xv(a,{generateMipmaps:!1});return m.image=l,{texture:m,width:l.width,height:l.height}}class N2{constructor({gl:t,plane:n,renderer:s,text:l,textColor:c="#545050",font:f="30px sans-serif"}){U2(this),this.gl=t,this.plane=n,this.renderer=s,this.text=l,this.textColor=c,this.font=f,this.createMesh()}createMesh(){const{texture:t,width:n,height:s}=L2(this.gl,this.text,this.font,this.textColor),l=new Uc(this.gl),c=new pv(this.gl,{vertex:`
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragment:`
        precision highp float;
        uniform sampler2D tMap;
        varying vec2 vUv;
        void main() {
          vec4 color = texture2D(tMap, vUv);
          if (color.a < 0.1) discard;
          gl_FragColor = color;
        }
      `,uniforms:{tMap:{value:t}},transparent:!0});this.mesh=new vv(this.gl,{geometry:l,program:c});const f=n/s,h=this.plane.scale.y*.15,p=h*f;this.mesh.scale.set(p,h,1),this.mesh.position.y=-this.plane.scale.y*.5-h*.5-.05,this.mesh.setParent(this.plane)}}class O2{constructor({geometry:t,gl:n,image:s,index:l,length:c,renderer:f,scene:h,screen:p,text:m,viewport:g,bend:_,textColor:x,borderRadius:M=0,font:E}){this.extra=0,this.geometry=t,this.gl=n,this.image=s,this.index=l,this.length=c,this.renderer=f,this.scene=h,this.screen=p,this.text=m,this.viewport=g,this.bend=_,this.textColor=x,this.borderRadius=M,this.font=E,this.createShader(),this.createMesh(),this.createTitle(),this.onResize()}createShader(){const t=new xv(this.gl,{generateMipmaps:!0});this.program=new pv(this.gl,{depthTest:!1,depthWrite:!1,vertex:`
        precision highp float;
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        uniform float uTime;
        uniform float uSpeed;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vec3 p = position;
          p.z = (sin(p.x * 4.0 + uTime) * 1.5 + cos(p.y * 2.0 + uTime) * 1.5) * (0.1 + uSpeed * 0.5);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }
      `,fragment:`
        precision highp float;
        uniform vec2 uImageSizes;
        uniform vec2 uPlaneSizes;
        uniform sampler2D tMap;
        uniform float uBorderRadius;
        varying vec2 vUv;
        
        float roundedBoxSDF(vec2 p, vec2 b, float r) {
          vec2 d = abs(p) - b;
          return length(max(d, vec2(0.0))) + min(max(d.x, d.y), 0.0) - r;
        }
        
        void main() {
          vec2 ratio = vec2(
            min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0),
            min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)
          );
          vec2 uv = vec2(
            vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
            vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
          );
          vec4 color = texture2D(tMap, uv);
          
          float d = roundedBoxSDF(vUv - 0.5, vec2(0.5 - uBorderRadius), uBorderRadius);
          
          // Smooth antialiasing for edges
          float edgeSmooth = 0.002;
          float alpha = 1.0 - smoothstep(-edgeSmooth, edgeSmooth, d);
          
          gl_FragColor = vec4(color.rgb, alpha);
        }
      `,uniforms:{tMap:{value:t},uPlaneSizes:{value:[0,0]},uImageSizes:{value:[0,0]},uSpeed:{value:0},uTime:{value:100*Math.random()},uBorderRadius:{value:this.borderRadius}},transparent:!0});const n=new Image;n.crossOrigin="anonymous",n.src=this.image,n.onload=()=>{t.image=n,this.program.uniforms.uImageSizes.value=[n.naturalWidth,n.naturalHeight]}}createMesh(){this.plane=new vv(this.gl,{geometry:this.geometry,program:this.program}),this.plane.setParent(this.scene)}createTitle(){this.title=new N2({gl:this.gl,plane:this.plane,renderer:this.renderer,text:this.text,textColor:this.textColor,fontFamily:this.font})}update(t,n){this.plane.position.x=this.x-t.current-this.extra;const s=this.plane.position.x,l=this.viewport.width/2;if(this.bend===0)this.plane.position.y=0,this.plane.rotation.z=0;else{const h=Math.abs(this.bend),p=(l*l+h*h)/(2*h),m=Math.min(Math.abs(s),l),g=p-Math.sqrt(p*p-m*m);this.bend>0?(this.plane.position.y=-g,this.plane.rotation.z=-Math.sign(s)*Math.asin(m/p)):(this.plane.position.y=g,this.plane.rotation.z=Math.sign(s)*Math.asin(m/p))}this.speed=t.current-t.last,this.program.uniforms.uTime.value+=.04,this.program.uniforms.uSpeed.value=this.speed;const c=this.plane.scale.x/2,f=this.viewport.width/2;this.isBefore=this.plane.position.x+c<-f,this.isAfter=this.plane.position.x-c>f,n==="right"&&this.isBefore&&(this.extra-=this.widthTotal,this.isBefore=this.isAfter=!1),n==="left"&&this.isAfter&&(this.extra+=this.widthTotal,this.isBefore=this.isAfter=!1)}onResize({screen:t,viewport:n}={}){t&&(this.screen=t),n&&(this.viewport=n,this.plane.program.uniforms.uViewportSizes&&(this.plane.program.uniforms.uViewportSizes.value=[this.viewport.width,this.viewport.height])),this.scale=this.screen.height/1500,this.plane.scale.y=this.viewport.height*(900*this.scale)/this.screen.height,this.plane.scale.x=this.viewport.width*(700*this.scale)/this.screen.width,this.plane.program.uniforms.uPlaneSizes.value=[this.plane.scale.x,this.plane.scale.y],this.padding=2,this.width=this.plane.scale.x+this.padding,this.widthTotal=this.width*this.length,this.x=this.width*this.index}}let F2=class{constructor(t,{items:n,bend:s,textColor:l="#ffffff",borderRadius:c=0,font:f="bold 30px Figtree",scrollSpeed:h=2,scrollEase:p=.05}={}){document.documentElement.classList.remove("no-js"),this.container=t,this.scrollSpeed=h,this.scroll={ease:p,current:0,target:0,last:0},this.onCheckDebounce=w2(this.onCheck,200),this.createRenderer(),this.createCamera(),this.createScene(),this.onResize(),this.createGeometry(),this.createMedias(n,s,l,c,f),this.update(),this.addEventListeners()}createRenderer(){this.renderer=new Rb({alpha:!0,antialias:!0,dpr:Math.min(window.devicePixelRatio||1,2)}),this.gl=this.renderer.gl,this.gl.clearColor(0,0,0,0),this.container.appendChild(this.gl.canvas)}createCamera(){this.camera=new m2(this.gl),this.camera.fov=45,this.camera.position.z=20}createScene(){this.scene=new Dd}createGeometry(){this.planeGeometry=new Uc(this.gl,{heightSegments:50,widthSegments:100})}createMedias(t,n=1,s,l,c){const f=[{image:"https://images.unsplash.com/photo-1494475673543-6a6a27143fc8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",text:"color"},{image:"https://picsum.photos/seed/2/800/600?grayscale",text:"Desk Setup"},{image:"https://picsum.photos/seed/3/800/600?grayscale",text:"Waterfall"},{image:"https://picsum.photos/seed/4/800/600?grayscale",text:"Strawberries"},{image:"https://picsum.photos/seed/5/800/600?grayscale",text:"Deep Diving"},{image:"https://picsum.photos/seed/16/800/600?grayscale",text:"Train Track"},{image:"https://picsum.photos/seed/17/800/600?grayscale",text:"Santorini"},{image:"https://picsum.photos/seed/8/800/600?grayscale",text:"Blurry Lights"},{image:"https://picsum.photos/seed/9/800/600?grayscale",text:"New York"},{image:"https://picsum.photos/seed/10/800/600?grayscale",text:"Good Boy"},{image:"https://picsum.photos/seed/21/800/600?grayscale",text:"Coastline"},{image:"https://picsum.photos/seed/12/800/600?grayscale",text:"Palm Trees"}],h=t&&t.length?t:f;this.mediasImages=h.concat(h),this.medias=this.mediasImages.map((p,m)=>new O2({geometry:this.planeGeometry,gl:this.gl,image:p.image,index:m,length:this.mediasImages.length,renderer:this.renderer,scene:this.scene,screen:this.screen,text:p.text,viewport:this.viewport,bend:n,textColor:s,borderRadius:l,font:c}))}onTouchDown(t){this.isDown=!0,this.scroll.position=this.scroll.current,this.start=t.touches?t.touches[0].clientX:t.clientX}onTouchMove(t){if(!this.isDown)return;const n=t.touches?t.touches[0].clientX:t.clientX,s=(this.start-n)*(this.scrollSpeed*.025);this.scroll.target=this.scroll.position+s}onTouchUp(){this.isDown=!1,this.onCheck()}onWheel(t){const n=t.deltaY||t.wheelDelta||t.detail;this.scroll.target+=(n>0?this.scrollSpeed:-this.scrollSpeed)*.2,this.onCheckDebounce()}onCheck(){if(!this.medias||!this.medias[0])return;const t=this.medias[0].width,n=Math.round(Math.abs(this.scroll.target)/t),s=t*n;this.scroll.target=this.scroll.target<0?-s:s}onResize(){this.screen={width:this.container.clientWidth,height:this.container.clientHeight},this.renderer.setSize(this.screen.width,this.screen.height),this.camera.perspective({aspect:this.screen.width/this.screen.height});const t=this.camera.fov*Math.PI/180,n=2*Math.tan(t/2)*this.camera.position.z,s=n*this.camera.aspect;this.viewport={width:s,height:n},this.medias&&this.medias.forEach(l=>l.onResize({screen:this.screen,viewport:this.viewport}))}update(){this.scroll.current=D2(this.scroll.current,this.scroll.target,this.scroll.ease);const t=this.scroll.current>this.scroll.last?"right":"left";this.medias&&this.medias.forEach(n=>n.update(this.scroll,t)),this.renderer.render({scene:this.scene,camera:this.camera}),this.scroll.last=this.scroll.current,this.raf=window.requestAnimationFrame(this.update.bind(this))}addEventListeners(){this.boundOnResize=this.onResize.bind(this),this.boundOnWheel=this.onWheel.bind(this),this.boundOnTouchDown=this.onTouchDown.bind(this),this.boundOnTouchMove=this.onTouchMove.bind(this),this.boundOnTouchUp=this.onTouchUp.bind(this),window.addEventListener("resize",this.boundOnResize),window.addEventListener("mousewheel",this.boundOnWheel),window.addEventListener("wheel",this.boundOnWheel),window.addEventListener("mousedown",this.boundOnTouchDown),window.addEventListener("mousemove",this.boundOnTouchMove),window.addEventListener("mouseup",this.boundOnTouchUp),window.addEventListener("touchstart",this.boundOnTouchDown),window.addEventListener("touchmove",this.boundOnTouchMove),window.addEventListener("touchend",this.boundOnTouchUp)}destroy(){window.cancelAnimationFrame(this.raf),window.removeEventListener("resize",this.boundOnResize),window.removeEventListener("mousewheel",this.boundOnWheel),window.removeEventListener("wheel",this.boundOnWheel),window.removeEventListener("mousedown",this.boundOnTouchDown),window.removeEventListener("mousemove",this.boundOnTouchMove),window.removeEventListener("mouseup",this.boundOnTouchUp),window.removeEventListener("touchstart",this.boundOnTouchDown),window.removeEventListener("touchmove",this.boundOnTouchMove),window.removeEventListener("touchend",this.boundOnTouchUp),this.renderer&&this.renderer.gl&&this.renderer.gl.canvas.parentNode&&this.renderer.gl.canvas.parentNode.removeChild(this.renderer.gl.canvas)}};function P2({items:a,bend:t=3,textColor:n="#ffffff",borderRadius:s=.05,font:l="bold 30px Figtree",scrollSpeed:c=2,scrollEase:f=.05}){const h=be.useRef(null);return be.useEffect(()=>{const p=new F2(h.current,{items:a,bend:t,textColor:n,borderRadius:s,font:l,scrollSpeed:c,scrollEase:f});return()=>{p.destroy()}},[a,t,n,s,l,c,f]),Xt.jsx("div",{className:"w-full h-full overflow-hidden cursor-grab active:cursor-grabbing",ref:h})}const bh=({socioName:a,link:t})=>Xt.jsx("div",{className:"",children:Xt.jsx("a",{className:"text-white  hover:text-blue-500 transition-colors duration-300 ",href:t,target:"_blank",rel:"noopener noreferrer",children:a})}),z2=()=>{const a=be.useRef(null);return Xt.jsxs("div",{style:{height:"800px",position:"relative",overflow:"hidden",backgroundColor:"#060010"},onMouseMove:t=>{const n=t.currentTarget.getBoundingClientRect(),s=t.clientX-n.left,l=t.clientY-n.top,c=a.current;c&&(c.style.setProperty("--mx",`${s}px`),c.style.setProperty("--my",`${l+n.height*.5}px`))},onMouseLeave:()=>{const t=a.current;t&&(t.style.setProperty("--mx","-9999px"),t.style.setProperty("--my","-9999px"))},children:[Xt.jsx(WA,{horizontalBeamOffset:.1,verticalBeamOffset:0,color:"#FF79C6"}),Xt.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translateX(-50%)",width:"88%",height:"50%",backgroundColor:"#060010",borderRadius:"30px",border:"2px solid #FF79C6",display:"flex",alignItems:"center",color:"white",fontSize:"1.5rem",zIndex:6,padding:"20px",flexDirection:"column"},children:[Xt.jsx("div",{style:{position:"relative",height:"150px"},children:Xt.jsx(ib,{text:"Ankit rajput",flex:!0,alpha:!1,stroke:!1,width:!0,weight:!0,italic:!0,textColor:"#ffffff",strokeColor:"#ff0000",minFontSize:106})}),Xt.jsxs("div",{className:" flex flex-col items-center justify-center text-center gap-8",children:[Xt.jsx("h1",{children:"I'am a Web Developer and Yes I Developed soo many things.. "}),Xt.jsx("p",{className:"text-base",children:"i love to work on web development and i am very passionate about it. I have worked on many projects and have a good experience in this field. I am always looking for new opportunities to learn and grow my skills. "}),Xt.jsxs("div",{className:"  flex items-center justify-center gap-15",children:[Xt.jsx(bh,{socioName:Xt.jsx(JA,{size:36}),link:"https://github.com/ankitrajput9"}),Xt.jsx(bh,{socioName:Xt.jsx(tb,{size:36}),link:"https://web.telegram.org/k/"}),Xt.jsx(bh,{socioName:Xt.jsx(nb,{size:36}),link:"https://github.com/ankitrajput9"})]})]})]}),Xt.jsx("img",{ref:a,src:"/path/to/image.jpg",alt:"Reveal effect",style:{position:"absolute",width:"100%",top:"-50%",zIndex:5,mixBlendMode:"lighten",opacity:.3,pointerEvents:"none","--mx":"-9999px","--my":"-9999px",WebkitMaskImage:"radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)",maskImage:"radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)",WebkitMaskRepeat:"no-repeat",maskRepeat:"no-repeat"}})]})},B2=()=>Xt.jsx("div",{className:"h-screen w-full bg-auto",style:{background:"#060010"},children:Xt.jsx("div",{style:{height:"600px",position:"relative"},children:Xt.jsx(P2,{bend:3,textColor:"#ffffff",borderRadius:.05,scrollEase:.02})})}),Sr=({skill:a})=>Xt.jsx("div",{children:Xt.jsx("button",{className:"px-8 py-2   bg-pink-900 mask-b-from-0.5 hover:mask-none  rounded-3xl  font-bold ",children:a})}),I2=()=>Xt.jsxs("div",{className:"h-screen w-1/2  flex justify-center flex-col  gap-5 p-10 text-white relative",children:[Xt.jsx("p",{className:" text-m font-bold",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus a vel fuga qui soluta sed esse, corrupti, perspiciatis aut tempora, natus modi consequuntur repellendus. "}),Xt.jsx("h1",{className:"text-2xl font-bold",children:"Skills & Technologies"}),Xt.jsxs("div",{className:"flex gap-5 flex-wrap ",children:[Xt.jsx(Sr,{skill:"HTML"}),Xt.jsx(Sr,{skill:"CSS"}),Xt.jsx(Sr,{skill:"JavaScript"}),Xt.jsx(Sr,{skill:"React"}),Xt.jsx(Sr,{skill:"GitHub"})]}),Xt.jsx("h1",{className:"text-2xl font-bold",children:"FrameWorks"}),Xt.jsx("div",{className:"flex gap-5",children:Xt.jsx(Sr,{skill:"React Bits"})})]}),H2=()=>Xt.jsx("div",{className:"h-70 w-110 bg-gray-800/45 rounded-4xl shadow-2xl flex justify-center border-2 border-pink-900  p-10 ",children:Xt.jsxs("p",{className:"font-bold text-white ",children:["const  = count, setCount = useState ",Xt.jsx("span",{className:"text-green-950",children:"Hello"})," ",Xt.jsx("br",{})," parameters -0",Xt.jsx("br",{})," this.name =  ",Xt.jsx("span",{className:"text-orange-800",children:"name"})," ;",Xt.jsx("br",{})," this.age = ",Xt.jsx("span",{className:"text-orange-800",children:"age"}),"; div = class name",Xt.jsx("br",{})," constructor ",Xt.jsx("span",{className:"text-green-950",children:"Hello"})," ",Xt.jsx("br",{})," parameters -0",Xt.jsx("br",{})," props.name =  ",Xt.jsx("span",{className:"text-yellow-300",children:"name"})," ;",Xt.jsx("br",{})," props.age = ",Xt.jsx("span",{className:"text-yellow-300",children:"age"}),";"]})}),G2=()=>Xt.jsx("div",{className:"h-screen w-1/2 flex justify-center items-center ",children:Xt.jsx(H2,{})}),V2=()=>Xt.jsxs("div",{className:"h-screen w-full flex gap-3  ",style:{background:"#060010"},children:[Xt.jsx(I2,{}),Xt.jsx(G2,{})]}),X2=()=>Xt.jsxs("div",{children:[Xt.jsx(z2,{}),Xt.jsx(B2,{}),Xt.jsx(V2,{})]});OS.createRoot(document.getElementById("root")).render(Xt.jsx(X2,{}));
