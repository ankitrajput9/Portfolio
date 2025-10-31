(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();var Bf={exports:{}},So={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l0;function SS(){if(l0)return So;l0=1;var a=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:a,type:s,key:f,ref:l!==void 0?l:null,props:c}}return So.Fragment=t,So.jsx=n,So.jsxs=n,So}var c0;function yS(){return c0||(c0=1,Bf.exports=SS()),Bf.exports}var nn=yS(),If={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u0;function MS(){if(u0)return re;u0=1;var a=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),x=Symbol.iterator;function M(N){return N===null||typeof N!="object"?null:(N=x&&N[x]||N["@@iterator"],typeof N=="function"?N:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,y={};function v(N,nt,xt){this.props=N,this.context=nt,this.refs=y,this.updater=xt||E}v.prototype.isReactComponent={},v.prototype.setState=function(N,nt){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,nt,"setState")},v.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function P(){}P.prototype=v.prototype;function U(N,nt,xt){this.props=N,this.context=nt,this.refs=y,this.updater=xt||E}var C=U.prototype=new P;C.constructor=U,T(C,v.prototype),C.isPureReactComponent=!0;var B=Array.isArray;function O(){}var F={H:null,A:null,T:null,S:null},q=Object.prototype.hasOwnProperty;function D(N,nt,xt){var At=xt.ref;return{$$typeof:a,type:N,key:nt,ref:At!==void 0?At:null,props:xt}}function w(N,nt){return D(N.type,nt,N.props)}function G(N){return typeof N=="object"&&N!==null&&N.$$typeof===a}function j(N){var nt={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(xt){return nt[xt]})}var J=/\/+/g;function Q(N,nt){return typeof N=="object"&&N!==null&&N.key!=null?j(""+N.key):nt.toString(36)}function st(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(O,O):(N.status="pending",N.then(function(nt){N.status==="pending"&&(N.status="fulfilled",N.value=nt)},function(nt){N.status==="pending"&&(N.status="rejected",N.reason=nt)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function z(N,nt,xt,At,Nt){var it=typeof N;(it==="undefined"||it==="boolean")&&(N=null);var ut=!1;if(N===null)ut=!0;else switch(it){case"bigint":case"string":case"number":ut=!0;break;case"object":switch(N.$$typeof){case a:case t:ut=!0;break;case g:return ut=N._init,z(ut(N._payload),nt,xt,At,Nt)}}if(ut)return Nt=Nt(N),ut=At===""?"."+Q(N,0):At,B(Nt)?(xt="",ut!=null&&(xt=ut.replace(J,"$&/")+"/"),z(Nt,nt,xt,"",function(Xt){return Xt})):Nt!=null&&(G(Nt)&&(Nt=w(Nt,xt+(Nt.key==null||N&&N.key===Nt.key?"":(""+Nt.key).replace(J,"$&/")+"/")+ut)),nt.push(Nt)),1;ut=0;var Ct=At===""?".":At+":";if(B(N))for(var Pt=0;Pt<N.length;Pt++)At=N[Pt],it=Ct+Q(At,Pt),ut+=z(At,nt,xt,it,Nt);else if(Pt=M(N),typeof Pt=="function")for(N=Pt.call(N),Pt=0;!(At=N.next()).done;)At=At.value,it=Ct+Q(At,Pt++),ut+=z(At,nt,xt,it,Nt);else if(it==="object"){if(typeof N.then=="function")return z(st(N),nt,xt,At,Nt);throw nt=String(N),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return ut}function V(N,nt,xt){if(N==null)return N;var At=[],Nt=0;return z(N,At,"","",function(it){return nt.call(xt,it,Nt++)}),At}function X(N){if(N._status===-1){var nt=N._result;nt=nt(),nt.then(function(xt){(N._status===0||N._status===-1)&&(N._status=1,N._result=xt)},function(xt){(N._status===0||N._status===-1)&&(N._status=2,N._result=xt)}),N._status===-1&&(N._status=0,N._result=nt)}if(N._status===1)return N._result.default;throw N._result}var ft=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},yt={map:V,forEach:function(N,nt,xt){V(N,function(){nt.apply(this,arguments)},xt)},count:function(N){var nt=0;return V(N,function(){nt++}),nt},toArray:function(N){return V(N,function(nt){return nt})||[]},only:function(N){if(!G(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return re.Activity=_,re.Children=yt,re.Component=v,re.Fragment=n,re.Profiler=l,re.PureComponent=U,re.StrictMode=s,re.Suspense=p,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,re.__COMPILER_RUNTIME={__proto__:null,c:function(N){return F.H.useMemoCache(N)}},re.cache=function(N){return function(){return N.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(N,nt,xt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var At=T({},N.props),Nt=N.key;if(nt!=null)for(it in nt.key!==void 0&&(Nt=""+nt.key),nt)!q.call(nt,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&nt.ref===void 0||(At[it]=nt[it]);var it=arguments.length-2;if(it===1)At.children=xt;else if(1<it){for(var ut=Array(it),Ct=0;Ct<it;Ct++)ut[Ct]=arguments[Ct+2];At.children=ut}return D(N.type,Nt,At)},re.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},re.createElement=function(N,nt,xt){var At,Nt={},it=null;if(nt!=null)for(At in nt.key!==void 0&&(it=""+nt.key),nt)q.call(nt,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(Nt[At]=nt[At]);var ut=arguments.length-2;if(ut===1)Nt.children=xt;else if(1<ut){for(var Ct=Array(ut),Pt=0;Pt<ut;Pt++)Ct[Pt]=arguments[Pt+2];Nt.children=Ct}if(N&&N.defaultProps)for(At in ut=N.defaultProps,ut)Nt[At]===void 0&&(Nt[At]=ut[At]);return D(N,it,Nt)},re.createRef=function(){return{current:null}},re.forwardRef=function(N){return{$$typeof:h,render:N}},re.isValidElement=G,re.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:X}},re.memo=function(N,nt){return{$$typeof:m,type:N,compare:nt===void 0?null:nt}},re.startTransition=function(N){var nt=F.T,xt={};F.T=xt;try{var At=N(),Nt=F.S;Nt!==null&&Nt(xt,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(O,ft)}catch(it){ft(it)}finally{nt!==null&&xt.types!==null&&(nt.types=xt.types),F.T=nt}},re.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},re.use=function(N){return F.H.use(N)},re.useActionState=function(N,nt,xt){return F.H.useActionState(N,nt,xt)},re.useCallback=function(N,nt){return F.H.useCallback(N,nt)},re.useContext=function(N){return F.H.useContext(N)},re.useDebugValue=function(){},re.useDeferredValue=function(N,nt){return F.H.useDeferredValue(N,nt)},re.useEffect=function(N,nt){return F.H.useEffect(N,nt)},re.useEffectEvent=function(N){return F.H.useEffectEvent(N)},re.useId=function(){return F.H.useId()},re.useImperativeHandle=function(N,nt,xt){return F.H.useImperativeHandle(N,nt,xt)},re.useInsertionEffect=function(N,nt){return F.H.useInsertionEffect(N,nt)},re.useLayoutEffect=function(N,nt){return F.H.useLayoutEffect(N,nt)},re.useMemo=function(N,nt){return F.H.useMemo(N,nt)},re.useOptimistic=function(N,nt){return F.H.useOptimistic(N,nt)},re.useReducer=function(N,nt,xt){return F.H.useReducer(N,nt,xt)},re.useRef=function(N){return F.H.useRef(N)},re.useState=function(N){return F.H.useState(N)},re.useSyncExternalStore=function(N,nt,xt){return F.H.useSyncExternalStore(N,nt,xt)},re.useTransition=function(){return F.H.useTransition()},re.version="19.2.0",re}var f0;function gd(){return f0||(f0=1,If.exports=MS()),If.exports}var Ie=gd(),Hf={exports:{}},yo={},Gf={exports:{}},Vf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h0;function ES(){return h0||(h0=1,(function(a){function t(z,V){var X=z.length;z.push(V);t:for(;0<X;){var ft=X-1>>>1,yt=z[ft];if(0<l(yt,V))z[ft]=V,z[X]=yt,X=ft;else break t}}function n(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var V=z[0],X=z.pop();if(X!==V){z[0]=X;t:for(var ft=0,yt=z.length,N=yt>>>1;ft<N;){var nt=2*(ft+1)-1,xt=z[nt],At=nt+1,Nt=z[At];if(0>l(xt,X))At<yt&&0>l(Nt,xt)?(z[ft]=Nt,z[At]=X,ft=At):(z[ft]=xt,z[nt]=X,ft=nt);else if(At<yt&&0>l(Nt,X))z[ft]=Nt,z[At]=X,ft=At;else break t}}return V}function l(z,V){var X=z.sortIndex-V.sortIndex;return X!==0?X:z.id-V.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();a.unstable_now=function(){return f.now()-h}}var p=[],m=[],g=1,_=null,x=3,M=!1,E=!1,T=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function C(z){for(var V=n(m);V!==null;){if(V.callback===null)s(m);else if(V.startTime<=z)s(m),V.sortIndex=V.expirationTime,t(p,V);else break;V=n(m)}}function B(z){if(T=!1,C(z),!E)if(n(p)!==null)E=!0,O||(O=!0,j());else{var V=n(m);V!==null&&st(B,V.startTime-z)}}var O=!1,F=-1,q=5,D=-1;function w(){return y?!0:!(a.unstable_now()-D<q)}function G(){if(y=!1,O){var z=a.unstable_now();D=z;var V=!0;try{t:{E=!1,T&&(T=!1,P(F),F=-1),M=!0;var X=x;try{e:{for(C(z),_=n(p);_!==null&&!(_.expirationTime>z&&w());){var ft=_.callback;if(typeof ft=="function"){_.callback=null,x=_.priorityLevel;var yt=ft(_.expirationTime<=z);if(z=a.unstable_now(),typeof yt=="function"){_.callback=yt,C(z),V=!0;break e}_===n(p)&&s(p),C(z)}else s(p);_=n(p)}if(_!==null)V=!0;else{var N=n(m);N!==null&&st(B,N.startTime-z),V=!1}}break t}finally{_=null,x=X,M=!1}V=void 0}}finally{V?j():O=!1}}}var j;if(typeof U=="function")j=function(){U(G)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,Q=J.port2;J.port1.onmessage=G,j=function(){Q.postMessage(null)}}else j=function(){v(G,0)};function st(z,V){F=v(function(){z(a.unstable_now())},V)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(z){z.callback=null},a.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<z?Math.floor(1e3/z):5},a.unstable_getCurrentPriorityLevel=function(){return x},a.unstable_next=function(z){switch(x){case 1:case 2:case 3:var V=3;break;default:V=x}var X=x;x=V;try{return z()}finally{x=X}},a.unstable_requestPaint=function(){y=!0},a.unstable_runWithPriority=function(z,V){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var X=x;x=z;try{return V()}finally{x=X}},a.unstable_scheduleCallback=function(z,V,X){var ft=a.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?ft+X:ft):X=ft,z){case 1:var yt=-1;break;case 2:yt=250;break;case 5:yt=1073741823;break;case 4:yt=1e4;break;default:yt=5e3}return yt=X+yt,z={id:g++,callback:V,priorityLevel:z,startTime:X,expirationTime:yt,sortIndex:-1},X>ft?(z.sortIndex=X,t(m,z),n(p)===null&&z===n(m)&&(T?(P(F),F=-1):T=!0,st(B,X-ft))):(z.sortIndex=yt,t(p,z),E||M||(E=!0,O||(O=!0,j()))),z},a.unstable_shouldYield=w,a.unstable_wrapCallback=function(z){var V=x;return function(){var X=x;x=V;try{return z.apply(this,arguments)}finally{x=X}}}})(Vf)),Vf}var d0;function TS(){return d0||(d0=1,Gf.exports=ES()),Gf.exports}var Xf={exports:{}},bn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p0;function AS(){if(p0)return bn;p0=1;var a=gd();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:p,containerInfo:m,implementation:g}}var f=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,bn.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return c(p,m,null,g)},bn.flushSync=function(p){var m=f.T,g=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=m,s.p=g,s.d.f()}},bn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(p,m))},bn.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},bn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,_=h(g,m.crossOrigin),x=typeof m.integrity=="string"?m.integrity:void 0,M=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?s.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:M}):g==="script"&&s.d.X(p,{crossOrigin:_,integrity:x,fetchPriority:M,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},bn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=h(m.as,m.crossOrigin);s.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(p)},bn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,_=h(g,m.crossOrigin);s.d.L(p,g,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},bn.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=h(m.as,m.crossOrigin);s.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(p)},bn.requestFormReset=function(p){s.d.r(p)},bn.unstable_batchedUpdates=function(p,m){return p(m)},bn.useFormState=function(p,m,g){return f.H.useFormState(p,m,g)},bn.useFormStatus=function(){return f.H.useHostTransitionStatus()},bn.version="19.2.0",bn}var m0;function bS(){if(m0)return Xf.exports;m0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(t){console.error(t)}}return a(),Xf.exports=AS(),Xf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g0;function RS(){if(g0)return yo;g0=1;var a=TS(),t=gd(),n=bS();function s(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,r=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(r=i.return),e=i.return;while(e)}return i.tag===3?r:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function h(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(s(188))}function m(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(s(188));return i!==e?null:e}for(var r=e,o=i;;){var u=r.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){r=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===r)return p(u),e;if(d===o)return p(u),i;d=d.sibling}throw Error(s(188))}if(r.return!==o.return)r=u,o=d;else{for(var S=!1,b=u.child;b;){if(b===r){S=!0,r=u,o=d;break}if(b===o){S=!0,o=u,r=d;break}b=b.sibling}if(!S){for(b=d.child;b;){if(b===r){S=!0,r=d,o=u;break}if(b===o){S=!0,o=d,r=u;break}b=b.sibling}if(!S)throw Error(s(189))}}if(r.alternate!==o)throw Error(s(190))}if(r.tag!==3)throw Error(s(188));return r.stateNode.current===r?e:i}function g(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=g(e),i!==null)return i;e=e.sibling}return null}var _=Object.assign,x=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),U=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function j(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var J=Symbol.for("react.client.reference");function Q(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===J?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case v:return"Profiler";case y:return"StrictMode";case B:return"Suspense";case O:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case U:return e.displayName||"Context";case P:return(e._context.displayName||"Context")+".Consumer";case C:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return i=e.displayName||null,i!==null?i:Q(e.type)||"Memo";case q:i=e._payload,e=e._init;try{return Q(e(i))}catch{}}return null}var st=Array.isArray,z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X={pending:!1,data:null,method:null,action:null},ft=[],yt=-1;function N(e){return{current:e}}function nt(e){0>yt||(e.current=ft[yt],ft[yt]=null,yt--)}function xt(e,i){yt++,ft[yt]=e.current,e.current=i}var At=N(null),Nt=N(null),it=N(null),ut=N(null);function Ct(e,i){switch(xt(it,i),xt(Nt,e),xt(At,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?Ug(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=Ug(i),e=Lg(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}nt(At),xt(At,e)}function Pt(){nt(At),nt(Nt),nt(it)}function Xt(e){e.memoizedState!==null&&xt(ut,e);var i=At.current,r=Lg(i,e.type);i!==r&&(xt(Nt,e),xt(At,r))}function oe(e){Nt.current===e&&(nt(At),nt(Nt)),ut.current===e&&(nt(ut),go._currentValue=X)}var Ze,H;function xe(e){if(Ze===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);Ze=i&&i[1]||"",H=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ze+e+H}var ee=!1;function $t(e,i){if(!e||ee)return"";ee=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(ct){var at=ct}Reflect.construct(e,[],gt)}else{try{gt.call()}catch(ct){at=ct}e.call(gt.prototype)}}else{try{throw Error()}catch(ct){at=ct}(gt=e())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(ct){if(ct&&at&&typeof ct.stack=="string")return[ct.stack,at.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),S=d[0],b=d[1];if(S&&b){var I=S.split(`
`),et=b.split(`
`);for(u=o=0;o<I.length&&!I[o].includes("DetermineComponentFrameRoot");)o++;for(;u<et.length&&!et[u].includes("DetermineComponentFrameRoot");)u++;if(o===I.length||u===et.length)for(o=I.length-1,u=et.length-1;1<=o&&0<=u&&I[o]!==et[u];)u--;for(;1<=o&&0<=u;o--,u--)if(I[o]!==et[u]){if(o!==1||u!==1)do if(o--,u--,0>u||I[o]!==et[u]){var dt=`
`+I[o].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=o&&0<=u);break}}}finally{ee=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?xe(r):""}function Yt(e,i){switch(e.tag){case 26:case 27:case 5:return xe(e.type);case 16:return xe("Lazy");case 13:return e.child!==i&&i!==null?xe("Suspense Fallback"):xe("Suspense");case 19:return xe("SuspenseList");case 0:case 15:return $t(e.type,!1);case 11:return $t(e.type.render,!1);case 1:return $t(e.type,!0);case 31:return xe("Activity");default:return""}}function Me(e){try{var i="",r=null;do i+=Yt(e,r),r=e,e=e.return;while(e);return i}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Gt=Object.prototype.hasOwnProperty,ie=a.unstable_scheduleCallback,We=a.unstable_cancelCallback,Xe=a.unstable_shouldYield,L=a.unstable_requestPaint,A=a.unstable_now,$=a.unstable_getCurrentPriorityLevel,pt=a.unstable_ImmediatePriority,Mt=a.unstable_UserBlockingPriority,ht=a.unstable_NormalPriority,jt=a.unstable_LowPriority,Rt=a.unstable_IdlePriority,wt=a.log,Bt=a.unstable_setDisableYieldValue,vt=null,bt=null;function It(e){if(typeof wt=="function"&&Bt(e),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(vt,e)}catch{}}var Ut=Math.clz32?Math.clz32:W,Lt=Math.log,ae=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(Lt(e)/ae|0)|0}var Tt=256,Dt=262144,Ht=4194304;function Et(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function _t(e,i,r){var o=e.pendingLanes;if(o===0)return 0;var u=0,d=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var b=o&134217727;return b!==0?(o=b&~d,o!==0?u=Et(o):(S&=b,S!==0?u=Et(S):r||(r=b&~e,r!==0&&(u=Et(r))))):(b=o&~d,b!==0?u=Et(b):S!==0?u=Et(S):r||(r=o&~e,r!==0&&(u=Et(r)))),u===0?0:i!==0&&i!==u&&(i&d)===0&&(d=u&-u,r=i&-i,d>=r||d===32&&(r&4194048)!==0)?i:u}function Vt(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function se(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Le(){var e=Ht;return Ht<<=1,(Ht&62914560)===0&&(Ht=4194304),e}function Ee(e){for(var i=[],r=0;31>r;r++)i.push(e);return i}function wn(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function $n(e,i,r,o,u,d){var S=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var b=e.entanglements,I=e.expirationTimes,et=e.hiddenUpdates;for(r=S&~r;0<r;){var dt=31-Ut(r),gt=1<<dt;b[dt]=0,I[dt]=-1;var at=et[dt];if(at!==null)for(et[dt]=null,dt=0;dt<at.length;dt++){var ct=at[dt];ct!==null&&(ct.lane&=-536870913)}r&=~gt}o!==0&&wr(e,o,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(S&~i))}function wr(e,i,r){e.pendingLanes|=i,e.suspendedLanes&=~i;var o=31-Ut(i);e.entangledLanes|=i,e.entanglements[o]=e.entanglements[o]|1073741824|r&261930}function Si(e,i){var r=e.entangledLanes|=i;for(e=e.entanglements;r;){var o=31-Ut(r),u=1<<o;u&i|e[o]&i&&(e[o]|=i),r&=~u}}function Ts(e,i){var r=i&-i;return r=(r&42)!==0?1:As(r),(r&(e.suspendedLanes|i))!==0?0:r}function As(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function bs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Va(){var e=V.p;return e!==0?e:(e=window.event,e===void 0?32:e0(e.type))}function Dr(e,i){var r=V.p;try{return V.p=e,i()}finally{V.p=r}}var Gn=Math.random().toString(36).slice(2),an="__reactFiber$"+Gn,xn="__reactProps$"+Gn,ra="__reactContainer$"+Gn,Ur="__reactEvents$"+Gn,Uc="__reactListeners$"+Gn,Lc="__reactHandles$"+Gn,Io="__reactResources$"+Gn,Xa="__reactMarker$"+Gn;function R(e){delete e[an],delete e[xn],delete e[Ur],delete e[Uc],delete e[Lc]}function Y(e){var i=e[an];if(i)return i;for(var r=e.parentNode;r;){if(i=r[ra]||r[an]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(e=Ig(e);e!==null;){if(r=e[an])return r;e=Ig(e)}return i}e=r,r=e.parentNode}return null}function rt(e){if(e=e[an]||e[ra]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function ot(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(s(33))}function K(e){var i=e[Io];return i||(i=e[Io]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function St(e){e[Xa]=!0}var Ot=new Set,Wt={};function zt(e,i){Kt(e,i),Kt(e+"Capture",i)}function Kt(e,i){for(Wt[e]=i,e=0;e<i.length;e++)Ot.add(i[e])}var ne=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qt={},he={};function we(e){return Gt.call(he,e)?!0:Gt.call(Qt,e)?!1:ne.test(e)?he[e]=!0:(Qt[e]=!0,!1)}function Ge(e,i,r){if(we(i))if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+r)}}function De(e,i,r){if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+r)}}function de(e,i,r,o){if(o===null)e.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(i,r,""+o)}}function qt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ke(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Te(e,i,r){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return u.call(this)},set:function(S){r=""+S,d.call(this,S)}}),Object.defineProperty(e,i,{enumerable:o.enumerable}),{getValue:function(){return r},setValue:function(S){r=""+S},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Sn(e){if(!e._valueTracker){var i=ke(e)?"checked":"value";e._valueTracker=Te(e,i,""+e[i])}}function Ui(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var r=i.getValue(),o="";return e&&(o=ke(e)?e.checked?"true":"false":e.value),e=o,e!==r?(i.setValue(e),!0):!1}function gn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ka=/[\n"\\]/g;function ge(e){return e.replace(ka,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function An(e,i,r,o,u,d,S,b){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),i!=null?S==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+qt(i)):e.value!==""+qt(i)&&(e.value=""+qt(i)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),i!=null?fn(e,S,qt(i)):r!=null?fn(e,S,qt(r)):o!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+qt(b):e.removeAttribute("name")}function Dn(e,i,r,o,u,d,S,b){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||r!=null){if(!(d!=="submit"&&d!=="reset"||i!=null)){Sn(e);return}r=r!=null?""+qt(r):"",i=i!=null?""+qt(i):r,b||i===e.value||(e.value=i),e.defaultValue=i}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=b?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),Sn(e)}function fn(e,i,r){i==="number"&&gn(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function $e(e,i,r,o){if(e=e.options,i){i={};for(var u=0;u<r.length;u++)i["$"+r[u]]=!0;for(r=0;r<e.length;r++)u=i.hasOwnProperty("$"+e[r].value),e[r].selected!==u&&(e[r].selected=u),u&&o&&(e[r].defaultSelected=!0)}else{for(r=""+qt(r),i=null,u=0;u<e.length;u++){if(e[u].value===r){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}i!==null||e[u].disabled||(i=e[u])}i!==null&&(i.selected=!0)}}function Rs(e,i,r){if(i!=null&&(i=""+qt(i),i!==e.value&&(e.value=i),r==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=r!=null?""+qt(r):""}function yi(e,i,r,o){if(i==null){if(o!=null){if(r!=null)throw Error(s(92));if(st(o)){if(1<o.length)throw Error(s(93));o=o[0]}r=o}r==null&&(r=""),i=r}r=qt(i),e.defaultValue=r,o=e.textContent,o===r&&o!==""&&o!==null&&(e.value=o),Sn(e)}function Cs(e,i){if(i){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=i;return}}e.textContent=i}var mv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Cd(e,i,r){var o=i.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?o?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":o?e.setProperty(i,r):typeof r!="number"||r===0||mv.has(i)?i==="float"?e.cssFloat=r:e[i]=(""+r).trim():e[i]=r+"px"}function wd(e,i,r){if(i!=null&&typeof i!="object")throw Error(s(62));if(e=e.style,r!=null){for(var o in r)!r.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in i)o=i[u],i.hasOwnProperty(u)&&r[u]!==o&&Cd(e,u,o)}else for(var d in i)i.hasOwnProperty(d)&&Cd(e,d,i[d])}function Nc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_v=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ho(e){return _v.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Li(){}var Oc=null;function Fc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ws=null,Ds=null;function Dd(e){var i=rt(e);if(i&&(e=i.stateNode)){var r=e[xn]||null;t:switch(e=i.stateNode,i.type){case"input":if(An(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),i=r.name,r.type==="radio"&&i!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+ge(""+i)+'"][type="radio"]'),i=0;i<r.length;i++){var o=r[i];if(o!==e&&o.form===e.form){var u=o[xn]||null;if(!u)throw Error(s(90));An(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(i=0;i<r.length;i++)o=r[i],o.form===e.form&&Ui(o)}break t;case"textarea":Rs(e,r.value,r.defaultValue);break t;case"select":i=r.value,i!=null&&$e(e,!!r.multiple,i,!1)}}}var Pc=!1;function Ud(e,i,r){if(Pc)return e(i,r);Pc=!0;try{var o=e(i);return o}finally{if(Pc=!1,(ws!==null||Ds!==null)&&(Rl(),ws&&(i=ws,e=Ds,Ds=ws=null,Dd(i),e)))for(i=0;i<e.length;i++)Dd(e[i])}}function Lr(e,i){var r=e.stateNode;if(r===null)return null;var o=r[xn]||null;if(o===null)return null;r=o[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(s(231,i,typeof r));return r}var Ni=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zc=!1;if(Ni)try{var Nr={};Object.defineProperty(Nr,"passive",{get:function(){zc=!0}}),window.addEventListener("test",Nr,Nr),window.removeEventListener("test",Nr,Nr)}catch{zc=!1}var oa=null,Bc=null,Go=null;function Ld(){if(Go)return Go;var e,i=Bc,r=i.length,o,u="value"in oa?oa.value:oa.textContent,d=u.length;for(e=0;e<r&&i[e]===u[e];e++);var S=r-e;for(o=1;o<=S&&i[r-o]===u[d-o];o++);return Go=u.slice(e,1<o?1-o:void 0)}function Vo(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Xo(){return!0}function Nd(){return!1}function Nn(e){function i(r,o,u,d,S){this._reactName=r,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=S,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(r=e[b],this[b]=r?r(d):d[b]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Xo:Nd,this.isPropagationStopped=Nd,this}return _(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Xo)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Xo)},persist:function(){},isPersistent:Xo}),i}var Wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ko=Nn(Wa),Or=_({},Wa,{view:0,detail:0}),vv=Nn(Or),Ic,Hc,Fr,Wo=_({},Or,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fr&&(Fr&&e.type==="mousemove"?(Ic=e.screenX-Fr.screenX,Hc=e.screenY-Fr.screenY):Hc=Ic=0,Fr=e),Ic)},movementY:function(e){return"movementY"in e?e.movementY:Hc}}),Od=Nn(Wo),xv=_({},Wo,{dataTransfer:0}),Sv=Nn(xv),yv=_({},Or,{relatedTarget:0}),Gc=Nn(yv),Mv=_({},Wa,{animationName:0,elapsedTime:0,pseudoElement:0}),Ev=Nn(Mv),Tv=_({},Wa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Av=Nn(Tv),bv=_({},Wa,{data:0}),Fd=Nn(bv),Rv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dv(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=wv[e])?!!i[e]:!1}function Vc(){return Dv}var Uv=_({},Or,{key:function(e){if(e.key){var i=Rv[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Vo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Cv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vc,charCode:function(e){return e.type==="keypress"?Vo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Lv=Nn(Uv),Nv=_({},Wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pd=Nn(Nv),Ov=_({},Or,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vc}),Fv=Nn(Ov),Pv=_({},Wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),zv=Nn(Pv),Bv=_({},Wo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Iv=Nn(Bv),Hv=_({},Wa,{newState:0,oldState:0}),Gv=Nn(Hv),Vv=[9,13,27,32],Xc=Ni&&"CompositionEvent"in window,Pr=null;Ni&&"documentMode"in document&&(Pr=document.documentMode);var Xv=Ni&&"TextEvent"in window&&!Pr,zd=Ni&&(!Xc||Pr&&8<Pr&&11>=Pr),Bd=" ",Id=!1;function Hd(e,i){switch(e){case"keyup":return Vv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Us=!1;function kv(e,i){switch(e){case"compositionend":return Gd(i);case"keypress":return i.which!==32?null:(Id=!0,Bd);case"textInput":return e=i.data,e===Bd&&Id?null:e;default:return null}}function Wv(e,i){if(Us)return e==="compositionend"||!Xc&&Hd(e,i)?(e=Ld(),Go=Bc=oa=null,Us=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return zd&&i.locale!=="ko"?null:i.data;default:return null}}var qv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vd(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!qv[e.type]:i==="textarea"}function Xd(e,i,r,o){ws?Ds?Ds.push(o):Ds=[o]:ws=o,i=Ol(i,"onChange"),0<i.length&&(r=new ko("onChange","change",null,r,o),e.push({event:r,listeners:i}))}var zr=null,Br=null;function Yv(e){Ag(e,0)}function qo(e){var i=ot(e);if(Ui(i))return e}function kd(e,i){if(e==="change")return i}var Wd=!1;if(Ni){var kc;if(Ni){var Wc="oninput"in document;if(!Wc){var qd=document.createElement("div");qd.setAttribute("oninput","return;"),Wc=typeof qd.oninput=="function"}kc=Wc}else kc=!1;Wd=kc&&(!document.documentMode||9<document.documentMode)}function Yd(){zr&&(zr.detachEvent("onpropertychange",Zd),Br=zr=null)}function Zd(e){if(e.propertyName==="value"&&qo(Br)){var i=[];Xd(i,Br,e,Fc(e)),Ud(Yv,i)}}function Zv(e,i,r){e==="focusin"?(Yd(),zr=i,Br=r,zr.attachEvent("onpropertychange",Zd)):e==="focusout"&&Yd()}function jv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qo(Br)}function Kv(e,i){if(e==="click")return qo(i)}function Qv(e,i){if(e==="input"||e==="change")return qo(i)}function Jv(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var Vn=typeof Object.is=="function"?Object.is:Jv;function Ir(e,i){if(Vn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var r=Object.keys(e),o=Object.keys(i);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var u=r[o];if(!Gt.call(i,u)||!Vn(e[u],i[u]))return!1}return!0}function jd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Kd(e,i){var r=jd(e);e=0;for(var o;r;){if(r.nodeType===3){if(o=e+r.textContent.length,e<=i&&o>=i)return{node:r,offset:i-e};e=o}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=jd(r)}}function Qd(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Qd(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Jd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=gn(e.document);i instanceof e.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)e=i.contentWindow;else break;i=gn(e.document)}return i}function qc(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var $v=Ni&&"documentMode"in document&&11>=document.documentMode,Ls=null,Yc=null,Hr=null,Zc=!1;function $d(e,i,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Zc||Ls==null||Ls!==gn(o)||(o=Ls,"selectionStart"in o&&qc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Hr&&Ir(Hr,o)||(Hr=o,o=Ol(Yc,"onSelect"),0<o.length&&(i=new ko("onSelect","select",null,i,r),e.push({event:i,listeners:o}),i.target=Ls)))}function qa(e,i){var r={};return r[e.toLowerCase()]=i.toLowerCase(),r["Webkit"+e]="webkit"+i,r["Moz"+e]="moz"+i,r}var Ns={animationend:qa("Animation","AnimationEnd"),animationiteration:qa("Animation","AnimationIteration"),animationstart:qa("Animation","AnimationStart"),transitionrun:qa("Transition","TransitionRun"),transitionstart:qa("Transition","TransitionStart"),transitioncancel:qa("Transition","TransitionCancel"),transitionend:qa("Transition","TransitionEnd")},jc={},tp={};Ni&&(tp=document.createElement("div").style,"AnimationEvent"in window||(delete Ns.animationend.animation,delete Ns.animationiteration.animation,delete Ns.animationstart.animation),"TransitionEvent"in window||delete Ns.transitionend.transition);function Ya(e){if(jc[e])return jc[e];if(!Ns[e])return e;var i=Ns[e],r;for(r in i)if(i.hasOwnProperty(r)&&r in tp)return jc[e]=i[r];return e}var ep=Ya("animationend"),np=Ya("animationiteration"),ip=Ya("animationstart"),tx=Ya("transitionrun"),ex=Ya("transitionstart"),nx=Ya("transitioncancel"),ap=Ya("transitionend"),sp=new Map,Kc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Kc.push("scrollEnd");function ci(e,i){sp.set(e,i),zt(i,[e])}var Yo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ti=[],Os=0,Qc=0;function Zo(){for(var e=Os,i=Qc=Os=0;i<e;){var r=ti[i];ti[i++]=null;var o=ti[i];ti[i++]=null;var u=ti[i];ti[i++]=null;var d=ti[i];if(ti[i++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}d!==0&&rp(r,u,d)}}function jo(e,i,r,o){ti[Os++]=e,ti[Os++]=i,ti[Os++]=r,ti[Os++]=o,Qc|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Jc(e,i,r,o){return jo(e,i,r,o),Ko(e)}function Za(e,i){return jo(e,null,null,i),Ko(e)}function rp(e,i,r){e.lanes|=r;var o=e.alternate;o!==null&&(o.lanes|=r);for(var u=!1,d=e.return;d!==null;)d.childLanes|=r,o=d.alternate,o!==null&&(o.childLanes|=r),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&i!==null&&(u=31-Ut(r),e=d.hiddenUpdates,o=e[u],o===null?e[u]=[i]:o.push(i),i.lane=r|536870912),d):null}function Ko(e){if(50<lo)throw lo=0,lf=null,Error(s(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Fs={};function ix(e,i,r,o){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(e,i,r,o){return new ix(e,i,r,o)}function $c(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Oi(e,i){var r=e.alternate;return r===null?(r=Xn(e.tag,i,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=i,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,i=e.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function op(e,i){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,i=r.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Qo(e,i,r,o,u,d){var S=0;if(o=e,typeof e=="function")$c(e)&&(S=1);else if(typeof e=="string")S=lS(e,r,At.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=Xn(31,r,i,u),e.elementType=D,e.lanes=d,e;case T:return ja(r.children,u,d,i);case y:S=8,u|=24;break;case v:return e=Xn(12,r,i,u|2),e.elementType=v,e.lanes=d,e;case B:return e=Xn(13,r,i,u),e.elementType=B,e.lanes=d,e;case O:return e=Xn(19,r,i,u),e.elementType=O,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:S=10;break t;case P:S=9;break t;case C:S=11;break t;case F:S=14;break t;case q:S=16,o=null;break t}S=29,r=Error(s(130,e===null?"null":typeof e,"")),o=null}return i=Xn(S,r,i,u),i.elementType=e,i.type=o,i.lanes=d,i}function ja(e,i,r,o){return e=Xn(7,e,o,i),e.lanes=r,e}function tu(e,i,r){return e=Xn(6,e,null,i),e.lanes=r,e}function lp(e){var i=Xn(18,null,null,0);return i.stateNode=e,i}function eu(e,i,r){return i=Xn(4,e.children!==null?e.children:[],e.key,i),i.lanes=r,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var cp=new WeakMap;function ei(e,i){if(typeof e=="object"&&e!==null){var r=cp.get(e);return r!==void 0?r:(i={value:e,source:i,stack:Me(i)},cp.set(e,i),i)}return{value:e,source:i,stack:Me(i)}}var Ps=[],zs=0,Jo=null,Gr=0,ni=[],ii=0,la=null,Mi=1,Ei="";function Fi(e,i){Ps[zs++]=Gr,Ps[zs++]=Jo,Jo=e,Gr=i}function up(e,i,r){ni[ii++]=Mi,ni[ii++]=Ei,ni[ii++]=la,la=e;var o=Mi;e=Ei;var u=32-Ut(o)-1;o&=~(1<<u),r+=1;var d=32-Ut(i)+u;if(30<d){var S=u-u%5;d=(o&(1<<S)-1).toString(32),o>>=S,u-=S,Mi=1<<32-Ut(i)+u|r<<u|o,Ei=d+e}else Mi=1<<d|r<<u|o,Ei=e}function nu(e){e.return!==null&&(Fi(e,1),up(e,1,0))}function iu(e){for(;e===Jo;)Jo=Ps[--zs],Ps[zs]=null,Gr=Ps[--zs],Ps[zs]=null;for(;e===la;)la=ni[--ii],ni[ii]=null,Ei=ni[--ii],ni[ii]=null,Mi=ni[--ii],ni[ii]=null}function fp(e,i){ni[ii++]=Mi,ni[ii++]=Ei,ni[ii++]=la,Mi=i.id,Ei=i.overflow,la=e}var yn=null,qe=null,Se=!1,ca=null,ai=!1,au=Error(s(519));function ua(e){var i=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Vr(ei(i,e)),au}function hp(e){var i=e.stateNode,r=e.type,o=e.memoizedProps;switch(i[an]=e,i[xn]=o,r){case"dialog":me("cancel",i),me("close",i);break;case"iframe":case"object":case"embed":me("load",i);break;case"video":case"audio":for(r=0;r<uo.length;r++)me(uo[r],i);break;case"source":me("error",i);break;case"img":case"image":case"link":me("error",i),me("load",i);break;case"details":me("toggle",i);break;case"input":me("invalid",i),Dn(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":me("invalid",i);break;case"textarea":me("invalid",i),yi(i,o.value,o.defaultValue,o.children)}r=o.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||i.textContent===""+r||o.suppressHydrationWarning===!0||wg(i.textContent,r)?(o.popover!=null&&(me("beforetoggle",i),me("toggle",i)),o.onScroll!=null&&me("scroll",i),o.onScrollEnd!=null&&me("scrollend",i),o.onClick!=null&&(i.onclick=Li),i=!0):i=!1,i||ua(e,!0)}function dp(e){for(yn=e.return;yn;)switch(yn.tag){case 5:case 31:case 13:ai=!1;return;case 27:case 3:ai=!0;return;default:yn=yn.return}}function Bs(e){if(e!==yn)return!1;if(!Se)return dp(e),Se=!0,!1;var i=e.tag,r;if((r=i!==3&&i!==27)&&((r=i===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||Ef(e.type,e.memoizedProps)),r=!r),r&&qe&&ua(e),dp(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));qe=Bg(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));qe=Bg(e)}else i===27?(i=qe,Ta(e.type)?(e=Cf,Cf=null,qe=e):qe=i):qe=yn?ri(e.stateNode.nextSibling):null;return!0}function Ka(){qe=yn=null,Se=!1}function su(){var e=ca;return e!==null&&(zn===null?zn=e:zn.push.apply(zn,e),ca=null),e}function Vr(e){ca===null?ca=[e]:ca.push(e)}var ru=N(null),Qa=null,Pi=null;function fa(e,i,r){xt(ru,i._currentValue),i._currentValue=r}function zi(e){e._currentValue=ru.current,nt(ru)}function ou(e,i,r){for(;e!==null;){var o=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),e===r)break;e=e.return}}function lu(e,i,r,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var S=u.child;d=d.firstContext;t:for(;d!==null;){var b=d;d=u;for(var I=0;I<i.length;I++)if(b.context===i[I]){d.lanes|=r,b=d.alternate,b!==null&&(b.lanes|=r),ou(d.return,r,e),o||(S=null);break t}d=b.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(s(341));S.lanes|=r,d=S.alternate,d!==null&&(d.lanes|=r),ou(S,r,e),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===e){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function Is(e,i,r,o){e=null;for(var u=i,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var b=u.type;Vn(u.pendingProps.value,S.value)||(e!==null?e.push(b):e=[b])}}else if(u===ut.current){if(S=u.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(go):e=[go])}u=u.return}e!==null&&lu(i,e,r,o),i.flags|=262144}function $o(e){for(e=e.firstContext;e!==null;){if(!Vn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ja(e){Qa=e,Pi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Mn(e){return pp(Qa,e)}function tl(e,i){return Qa===null&&Ja(e),pp(e,i)}function pp(e,i){var r=i._currentValue;if(i={context:i,memoizedValue:r,next:null},Pi===null){if(e===null)throw Error(s(308));Pi=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Pi=Pi.next=i;return r}var ax=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(r,o){e.push(o)}};this.abort=function(){i.aborted=!0,e.forEach(function(r){return r()})}},sx=a.unstable_scheduleCallback,rx=a.unstable_NormalPriority,sn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function cu(){return{controller:new ax,data:new Map,refCount:0}}function Xr(e){e.refCount--,e.refCount===0&&sx(rx,function(){e.controller.abort()})}var kr=null,uu=0,Hs=0,Gs=null;function ox(e,i){if(kr===null){var r=kr=[];uu=0,Hs=pf(),Gs={status:"pending",value:void 0,then:function(o){r.push(o)}}}return uu++,i.then(mp,mp),i}function mp(){if(--uu===0&&kr!==null){Gs!==null&&(Gs.status="fulfilled");var e=kr;kr=null,Hs=0,Gs=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function lx(e,i){var r=[],o={status:"pending",value:null,reason:null,then:function(u){r.push(u)}};return e.then(function(){o.status="fulfilled",o.value=i;for(var u=0;u<r.length;u++)(0,r[u])(i)},function(u){for(o.status="rejected",o.reason=u,u=0;u<r.length;u++)(0,r[u])(void 0)}),o}var gp=z.S;z.S=function(e,i){$m=A(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&ox(e,i),gp!==null&&gp(e,i)};var $a=N(null);function fu(){var e=$a.current;return e!==null?e:Ve.pooledCache}function el(e,i){i===null?xt($a,$a.current):xt($a,i.pool)}function _p(){var e=fu();return e===null?null:{parent:sn._currentValue,pool:e}}var Vs=Error(s(460)),hu=Error(s(474)),nl=Error(s(542)),il={then:function(){}};function vp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function xp(e,i,r){switch(r=e[r],r===void 0?e.push(i):r!==i&&(i.then(Li,Li),i=r),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,yp(e),e;default:if(typeof i.status=="string")i.then(Li,Li);else{if(e=Ve,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=i,e.status="pending",e.then(function(o){if(i.status==="pending"){var u=i;u.status="fulfilled",u.value=o}},function(o){if(i.status==="pending"){var u=i;u.status="rejected",u.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,yp(e),e}throw es=i,Vs}}function ts(e){try{var i=e._init;return i(e._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(es=r,Vs):r}}var es=null;function Sp(){if(es===null)throw Error(s(459));var e=es;return es=null,e}function yp(e){if(e===Vs||e===nl)throw Error(s(483))}var Xs=null,Wr=0;function al(e){var i=Wr;return Wr+=1,Xs===null&&(Xs=[]),xp(Xs,e,i)}function qr(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function sl(e,i){throw i.$$typeof===x?Error(s(525)):(e=Object.prototype.toString.call(i),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function Mp(e){function i(Z,k){if(e){var tt=Z.deletions;tt===null?(Z.deletions=[k],Z.flags|=16):tt.push(k)}}function r(Z,k){if(!e)return null;for(;k!==null;)i(Z,k),k=k.sibling;return null}function o(Z){for(var k=new Map;Z!==null;)Z.key!==null?k.set(Z.key,Z):k.set(Z.index,Z),Z=Z.sibling;return k}function u(Z,k){return Z=Oi(Z,k),Z.index=0,Z.sibling=null,Z}function d(Z,k,tt){return Z.index=tt,e?(tt=Z.alternate,tt!==null?(tt=tt.index,tt<k?(Z.flags|=67108866,k):tt):(Z.flags|=67108866,k)):(Z.flags|=1048576,k)}function S(Z){return e&&Z.alternate===null&&(Z.flags|=67108866),Z}function b(Z,k,tt,mt){return k===null||k.tag!==6?(k=tu(tt,Z.mode,mt),k.return=Z,k):(k=u(k,tt),k.return=Z,k)}function I(Z,k,tt,mt){var Jt=tt.type;return Jt===T?dt(Z,k,tt.props.children,mt,tt.key):k!==null&&(k.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===q&&ts(Jt)===k.type)?(k=u(k,tt.props),qr(k,tt),k.return=Z,k):(k=Qo(tt.type,tt.key,tt.props,null,Z.mode,mt),qr(k,tt),k.return=Z,k)}function et(Z,k,tt,mt){return k===null||k.tag!==4||k.stateNode.containerInfo!==tt.containerInfo||k.stateNode.implementation!==tt.implementation?(k=eu(tt,Z.mode,mt),k.return=Z,k):(k=u(k,tt.children||[]),k.return=Z,k)}function dt(Z,k,tt,mt,Jt){return k===null||k.tag!==7?(k=ja(tt,Z.mode,mt,Jt),k.return=Z,k):(k=u(k,tt),k.return=Z,k)}function gt(Z,k,tt){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=tu(""+k,Z.mode,tt),k.return=Z,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case M:return tt=Qo(k.type,k.key,k.props,null,Z.mode,tt),qr(tt,k),tt.return=Z,tt;case E:return k=eu(k,Z.mode,tt),k.return=Z,k;case q:return k=ts(k),gt(Z,k,tt)}if(st(k)||j(k))return k=ja(k,Z.mode,tt,null),k.return=Z,k;if(typeof k.then=="function")return gt(Z,al(k),tt);if(k.$$typeof===U)return gt(Z,tl(Z,k),tt);sl(Z,k)}return null}function at(Z,k,tt,mt){var Jt=k!==null?k.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return Jt!==null?null:b(Z,k,""+tt,mt);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case M:return tt.key===Jt?I(Z,k,tt,mt):null;case E:return tt.key===Jt?et(Z,k,tt,mt):null;case q:return tt=ts(tt),at(Z,k,tt,mt)}if(st(tt)||j(tt))return Jt!==null?null:dt(Z,k,tt,mt,null);if(typeof tt.then=="function")return at(Z,k,al(tt),mt);if(tt.$$typeof===U)return at(Z,k,tl(Z,tt),mt);sl(Z,tt)}return null}function ct(Z,k,tt,mt,Jt){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return Z=Z.get(tt)||null,b(k,Z,""+mt,Jt);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case M:return Z=Z.get(mt.key===null?tt:mt.key)||null,I(k,Z,mt,Jt);case E:return Z=Z.get(mt.key===null?tt:mt.key)||null,et(k,Z,mt,Jt);case q:return mt=ts(mt),ct(Z,k,tt,mt,Jt)}if(st(mt)||j(mt))return Z=Z.get(tt)||null,dt(k,Z,mt,Jt,null);if(typeof mt.then=="function")return ct(Z,k,tt,al(mt),Jt);if(mt.$$typeof===U)return ct(Z,k,tt,tl(k,mt),Jt);sl(k,mt)}return null}function kt(Z,k,tt,mt){for(var Jt=null,Ae=null,Zt=k,ce=k=0,ve=null;Zt!==null&&ce<tt.length;ce++){Zt.index>ce?(ve=Zt,Zt=null):ve=Zt.sibling;var be=at(Z,Zt,tt[ce],mt);if(be===null){Zt===null&&(Zt=ve);break}e&&Zt&&be.alternate===null&&i(Z,Zt),k=d(be,k,ce),Ae===null?Jt=be:Ae.sibling=be,Ae=be,Zt=ve}if(ce===tt.length)return r(Z,Zt),Se&&Fi(Z,ce),Jt;if(Zt===null){for(;ce<tt.length;ce++)Zt=gt(Z,tt[ce],mt),Zt!==null&&(k=d(Zt,k,ce),Ae===null?Jt=Zt:Ae.sibling=Zt,Ae=Zt);return Se&&Fi(Z,ce),Jt}for(Zt=o(Zt);ce<tt.length;ce++)ve=ct(Zt,Z,ce,tt[ce],mt),ve!==null&&(e&&ve.alternate!==null&&Zt.delete(ve.key===null?ce:ve.key),k=d(ve,k,ce),Ae===null?Jt=ve:Ae.sibling=ve,Ae=ve);return e&&Zt.forEach(function(wa){return i(Z,wa)}),Se&&Fi(Z,ce),Jt}function te(Z,k,tt,mt){if(tt==null)throw Error(s(151));for(var Jt=null,Ae=null,Zt=k,ce=k=0,ve=null,be=tt.next();Zt!==null&&!be.done;ce++,be=tt.next()){Zt.index>ce?(ve=Zt,Zt=null):ve=Zt.sibling;var wa=at(Z,Zt,be.value,mt);if(wa===null){Zt===null&&(Zt=ve);break}e&&Zt&&wa.alternate===null&&i(Z,Zt),k=d(wa,k,ce),Ae===null?Jt=wa:Ae.sibling=wa,Ae=wa,Zt=ve}if(be.done)return r(Z,Zt),Se&&Fi(Z,ce),Jt;if(Zt===null){for(;!be.done;ce++,be=tt.next())be=gt(Z,be.value,mt),be!==null&&(k=d(be,k,ce),Ae===null?Jt=be:Ae.sibling=be,Ae=be);return Se&&Fi(Z,ce),Jt}for(Zt=o(Zt);!be.done;ce++,be=tt.next())be=ct(Zt,Z,ce,be.value,mt),be!==null&&(e&&be.alternate!==null&&Zt.delete(be.key===null?ce:be.key),k=d(be,k,ce),Ae===null?Jt=be:Ae.sibling=be,Ae=be);return e&&Zt.forEach(function(xS){return i(Z,xS)}),Se&&Fi(Z,ce),Jt}function ze(Z,k,tt,mt){if(typeof tt=="object"&&tt!==null&&tt.type===T&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case M:t:{for(var Jt=tt.key;k!==null;){if(k.key===Jt){if(Jt=tt.type,Jt===T){if(k.tag===7){r(Z,k.sibling),mt=u(k,tt.props.children),mt.return=Z,Z=mt;break t}}else if(k.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===q&&ts(Jt)===k.type){r(Z,k.sibling),mt=u(k,tt.props),qr(mt,tt),mt.return=Z,Z=mt;break t}r(Z,k);break}else i(Z,k);k=k.sibling}tt.type===T?(mt=ja(tt.props.children,Z.mode,mt,tt.key),mt.return=Z,Z=mt):(mt=Qo(tt.type,tt.key,tt.props,null,Z.mode,mt),qr(mt,tt),mt.return=Z,Z=mt)}return S(Z);case E:t:{for(Jt=tt.key;k!==null;){if(k.key===Jt)if(k.tag===4&&k.stateNode.containerInfo===tt.containerInfo&&k.stateNode.implementation===tt.implementation){r(Z,k.sibling),mt=u(k,tt.children||[]),mt.return=Z,Z=mt;break t}else{r(Z,k);break}else i(Z,k);k=k.sibling}mt=eu(tt,Z.mode,mt),mt.return=Z,Z=mt}return S(Z);case q:return tt=ts(tt),ze(Z,k,tt,mt)}if(st(tt))return kt(Z,k,tt,mt);if(j(tt)){if(Jt=j(tt),typeof Jt!="function")throw Error(s(150));return tt=Jt.call(tt),te(Z,k,tt,mt)}if(typeof tt.then=="function")return ze(Z,k,al(tt),mt);if(tt.$$typeof===U)return ze(Z,k,tl(Z,tt),mt);sl(Z,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,k!==null&&k.tag===6?(r(Z,k.sibling),mt=u(k,tt),mt.return=Z,Z=mt):(r(Z,k),mt=tu(tt,Z.mode,mt),mt.return=Z,Z=mt),S(Z)):r(Z,k)}return function(Z,k,tt,mt){try{Wr=0;var Jt=ze(Z,k,tt,mt);return Xs=null,Jt}catch(Zt){if(Zt===Vs||Zt===nl)throw Zt;var Ae=Xn(29,Zt,null,Z.mode);return Ae.lanes=mt,Ae.return=Z,Ae}finally{}}}var ns=Mp(!0),Ep=Mp(!1),ha=!1;function du(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function pu(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function da(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function pa(e,i,r){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ce&2)!==0){var u=o.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),o.pending=i,i=Ko(e),rp(e,null,r),i}return jo(e,o,i,r),Ko(e)}function Yr(e,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194048)!==0)){var o=i.lanes;o&=e.pendingLanes,r|=o,i.lanes=r,Si(e,r)}}function mu(e,i){var r=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var u=null,d=null;if(r=r.firstBaseUpdate,r!==null){do{var S={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};d===null?u=d=S:d=d.next=S,r=r.next}while(r!==null);d===null?u=d=i:d=d.next=i}else u=d=i;r={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=i:e.next=i,r.lastBaseUpdate=i}var gu=!1;function Zr(){if(gu){var e=Gs;if(e!==null)throw e}}function jr(e,i,r,o){gu=!1;var u=e.updateQueue;ha=!1;var d=u.firstBaseUpdate,S=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var I=b,et=I.next;I.next=null,S===null?d=et:S.next=et,S=I;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,b=dt.lastBaseUpdate,b!==S&&(b===null?dt.firstBaseUpdate=et:b.next=et,dt.lastBaseUpdate=I))}if(d!==null){var gt=u.baseState;S=0,dt=et=I=null,b=d;do{var at=b.lane&-536870913,ct=at!==b.lane;if(ct?(_e&at)===at:(o&at)===at){at!==0&&at===Hs&&(gu=!0),dt!==null&&(dt=dt.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var kt=e,te=b;at=i;var ze=r;switch(te.tag){case 1:if(kt=te.payload,typeof kt=="function"){gt=kt.call(ze,gt,at);break t}gt=kt;break t;case 3:kt.flags=kt.flags&-65537|128;case 0:if(kt=te.payload,at=typeof kt=="function"?kt.call(ze,gt,at):kt,at==null)break t;gt=_({},gt,at);break t;case 2:ha=!0}}at=b.callback,at!==null&&(e.flags|=64,ct&&(e.flags|=8192),ct=u.callbacks,ct===null?u.callbacks=[at]:ct.push(at))}else ct={lane:at,tag:b.tag,payload:b.payload,callback:b.callback,next:null},dt===null?(et=dt=ct,I=gt):dt=dt.next=ct,S|=at;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;ct=b,b=ct.next,ct.next=null,u.lastBaseUpdate=ct,u.shared.pending=null}}while(!0);dt===null&&(I=gt),u.baseState=I,u.firstBaseUpdate=et,u.lastBaseUpdate=dt,d===null&&(u.shared.lanes=0),xa|=S,e.lanes=S,e.memoizedState=gt}}function Tp(e,i){if(typeof e!="function")throw Error(s(191,e));e.call(i)}function Ap(e,i){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)Tp(r[e],i)}var ks=N(null),rl=N(0);function bp(e,i){e=qi,xt(rl,e),xt(ks,i),qi=e|i.baseLanes}function _u(){xt(rl,qi),xt(ks,ks.current)}function vu(){qi=rl.current,nt(ks),nt(rl)}var kn=N(null),si=null;function ma(e){var i=e.alternate;xt(tn,tn.current&1),xt(kn,e),si===null&&(i===null||ks.current!==null||i.memoizedState!==null)&&(si=e)}function xu(e){xt(tn,tn.current),xt(kn,e),si===null&&(si=e)}function Rp(e){e.tag===22?(xt(tn,tn.current),xt(kn,e),si===null&&(si=e)):ga()}function ga(){xt(tn,tn.current),xt(kn,kn.current)}function Wn(e){nt(kn),si===e&&(si=null),nt(tn)}var tn=N(0);function ol(e){for(var i=e;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||bf(r)||Rf(r)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Bi=0,le=null,Fe=null,rn=null,ll=!1,Ws=!1,is=!1,cl=0,Kr=0,qs=null,cx=0;function Ke(){throw Error(s(321))}function Su(e,i){if(i===null)return!1;for(var r=0;r<i.length&&r<e.length;r++)if(!Vn(e[r],i[r]))return!1;return!0}function yu(e,i,r,o,u,d){return Bi=d,le=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,z.H=e===null||e.memoizedState===null?um:Pu,is=!1,d=r(o,u),is=!1,Ws&&(d=wp(i,r,o,u)),Cp(e),d}function Cp(e){z.H=$r;var i=Fe!==null&&Fe.next!==null;if(Bi=0,rn=Fe=le=null,ll=!1,Kr=0,qs=null,i)throw Error(s(300));e===null||on||(e=e.dependencies,e!==null&&$o(e)&&(on=!0))}function wp(e,i,r,o){le=e;var u=0;do{if(Ws&&(qs=null),Kr=0,Ws=!1,25<=u)throw Error(s(301));if(u+=1,rn=Fe=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}z.H=fm,d=i(r,o)}while(Ws);return d}function ux(){var e=z.H,i=e.useState()[0];return i=typeof i.then=="function"?Qr(i):i,e=e.useState()[0],(Fe!==null?Fe.memoizedState:null)!==e&&(le.flags|=1024),i}function Mu(){var e=cl!==0;return cl=0,e}function Eu(e,i,r){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~r}function Tu(e){if(ll){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}ll=!1}Bi=0,rn=Fe=le=null,Ws=!1,Kr=cl=0,qs=null}function Un(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?le.memoizedState=rn=e:rn=rn.next=e,rn}function en(){if(Fe===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var i=rn===null?le.memoizedState:rn.next;if(i!==null)rn=i,Fe=e;else{if(e===null)throw le.alternate===null?Error(s(467)):Error(s(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},rn===null?le.memoizedState=rn=e:rn=rn.next=e}return rn}function ul(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Qr(e){var i=Kr;return Kr+=1,qs===null&&(qs=[]),e=xp(qs,e,i),i=le,(rn===null?i.memoizedState:rn.next)===null&&(i=i.alternate,z.H=i===null||i.memoizedState===null?um:Pu),e}function fl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Qr(e);if(e.$$typeof===U)return Mn(e)}throw Error(s(438,String(e)))}function Au(e){var i=null,r=le.updateQueue;if(r!==null&&(i=r.memoCache),i==null){var o=le.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(u){return u.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),r===null&&(r=ul(),le.updateQueue=r),r.memoCache=i,r=i.data[i.index],r===void 0)for(r=i.data[i.index]=Array(e),o=0;o<e;o++)r[o]=w;return i.index++,r}function Ii(e,i){return typeof i=="function"?i(e):i}function hl(e){var i=en();return bu(i,Fe,e)}function bu(e,i,r){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=r;var u=e.baseQueue,d=o.pending;if(d!==null){if(u!==null){var S=u.next;u.next=d.next,d.next=S}i.baseQueue=u=d,o.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{i=u.next;var b=S=null,I=null,et=i,dt=!1;do{var gt=et.lane&-536870913;if(gt!==et.lane?(_e&gt)===gt:(Bi&gt)===gt){var at=et.revertLane;if(at===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),gt===Hs&&(dt=!0);else if((Bi&at)===at){et=et.next,at===Hs&&(dt=!0);continue}else gt={lane:0,revertLane:et.revertLane,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},I===null?(b=I=gt,S=d):I=I.next=gt,le.lanes|=at,xa|=at;gt=et.action,is&&r(d,gt),d=et.hasEagerState?et.eagerState:r(d,gt)}else at={lane:gt,revertLane:et.revertLane,gesture:et.gesture,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},I===null?(b=I=at,S=d):I=I.next=at,le.lanes|=gt,xa|=gt;et=et.next}while(et!==null&&et!==i);if(I===null?S=d:I.next=b,!Vn(d,e.memoizedState)&&(on=!0,dt&&(r=Gs,r!==null)))throw r;e.memoizedState=d,e.baseState=S,e.baseQueue=I,o.lastRenderedState=d}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Ru(e){var i=en(),r=i.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=e;var o=r.dispatch,u=r.pending,d=i.memoizedState;if(u!==null){r.pending=null;var S=u=u.next;do d=e(d,S.action),S=S.next;while(S!==u);Vn(d,i.memoizedState)||(on=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),r.lastRenderedState=d}return[d,o]}function Dp(e,i,r){var o=le,u=en(),d=Se;if(d){if(r===void 0)throw Error(s(407));r=r()}else r=i();var S=!Vn((Fe||u).memoizedState,r);if(S&&(u.memoizedState=r,on=!0),u=u.queue,Du(Np.bind(null,o,u,e),[e]),u.getSnapshot!==i||S||rn!==null&&rn.memoizedState.tag&1){if(o.flags|=2048,Ys(9,{destroy:void 0},Lp.bind(null,o,u,r,i),null),Ve===null)throw Error(s(349));d||(Bi&127)!==0||Up(o,i,r)}return r}function Up(e,i,r){e.flags|=16384,e={getSnapshot:i,value:r},i=le.updateQueue,i===null?(i=ul(),le.updateQueue=i,i.stores=[e]):(r=i.stores,r===null?i.stores=[e]:r.push(e))}function Lp(e,i,r,o){i.value=r,i.getSnapshot=o,Op(i)&&Fp(e)}function Np(e,i,r){return r(function(){Op(i)&&Fp(e)})}function Op(e){var i=e.getSnapshot;e=e.value;try{var r=i();return!Vn(e,r)}catch{return!0}}function Fp(e){var i=Za(e,2);i!==null&&Bn(i,e,2)}function Cu(e){var i=Un();if(typeof e=="function"){var r=e;if(e=r(),is){It(!0);try{r()}finally{It(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:e},i}function Pp(e,i,r,o){return e.baseState=r,bu(e,Fe,typeof o=="function"?o:Ii)}function fx(e,i,r,o,u){if(ml(e))throw Error(s(485));if(e=i.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){d.listeners.push(S)}};z.T!==null?r(!0):d.isTransition=!1,o(d),r=i.pending,r===null?(d.next=i.pending=d,zp(i,d)):(d.next=r.next,i.pending=r.next=d)}}function zp(e,i){var r=i.action,o=i.payload,u=e.state;if(i.isTransition){var d=z.T,S={};z.T=S;try{var b=r(u,o),I=z.S;I!==null&&I(S,b),Bp(e,i,b)}catch(et){wu(e,i,et)}finally{d!==null&&S.types!==null&&(d.types=S.types),z.T=d}}else try{d=r(u,o),Bp(e,i,d)}catch(et){wu(e,i,et)}}function Bp(e,i,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(o){Ip(e,i,o)},function(o){return wu(e,i,o)}):Ip(e,i,r)}function Ip(e,i,r){i.status="fulfilled",i.value=r,Hp(i),e.state=r,i=e.pending,i!==null&&(r=i.next,r===i?e.pending=null:(r=r.next,i.next=r,zp(e,r)))}function wu(e,i,r){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=r,Hp(i),i=i.next;while(i!==o)}e.action=null}function Hp(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function Gp(e,i){return i}function Vp(e,i){if(Se){var r=Ve.formState;if(r!==null){t:{var o=le;if(Se){if(qe){e:{for(var u=qe,d=ai;u.nodeType!==8;){if(!d){u=null;break e}if(u=ri(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){qe=ri(u.nextSibling),o=u.data==="F!";break t}}ua(o)}o=!1}o&&(i=r[0])}}return r=Un(),r.memoizedState=r.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gp,lastRenderedState:i},r.queue=o,r=om.bind(null,le,o),o.dispatch=r,o=Cu(!1),d=Fu.bind(null,le,!1,o.queue),o=Un(),u={state:i,dispatch:null,action:e,pending:null},o.queue=u,r=fx.bind(null,le,u,d,r),u.dispatch=r,o.memoizedState=e,[i,r,!1]}function Xp(e){var i=en();return kp(i,Fe,e)}function kp(e,i,r){if(i=bu(e,i,Gp)[0],e=hl(Ii)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=Qr(i)}catch(S){throw S===Vs?nl:S}else o=i;i=en();var u=i.queue,d=u.dispatch;return r!==i.memoizedState&&(le.flags|=2048,Ys(9,{destroy:void 0},hx.bind(null,u,r),null)),[o,d,e]}function hx(e,i){e.action=i}function Wp(e){var i=en(),r=Fe;if(r!==null)return kp(i,r,e);en(),i=i.memoizedState,r=en();var o=r.queue.dispatch;return r.memoizedState=e,[i,o,!1]}function Ys(e,i,r,o){return e={tag:e,create:r,deps:o,inst:i,next:null},i=le.updateQueue,i===null&&(i=ul(),le.updateQueue=i),r=i.lastEffect,r===null?i.lastEffect=e.next=e:(o=r.next,r.next=e,e.next=o,i.lastEffect=e),e}function qp(){return en().memoizedState}function dl(e,i,r,o){var u=Un();le.flags|=e,u.memoizedState=Ys(1|i,{destroy:void 0},r,o===void 0?null:o)}function pl(e,i,r,o){var u=en();o=o===void 0?null:o;var d=u.memoizedState.inst;Fe!==null&&o!==null&&Su(o,Fe.memoizedState.deps)?u.memoizedState=Ys(i,d,r,o):(le.flags|=e,u.memoizedState=Ys(1|i,d,r,o))}function Yp(e,i){dl(8390656,8,e,i)}function Du(e,i){pl(2048,8,e,i)}function dx(e){le.flags|=4;var i=le.updateQueue;if(i===null)i=ul(),le.updateQueue=i,i.events=[e];else{var r=i.events;r===null?i.events=[e]:r.push(e)}}function Zp(e){var i=en().memoizedState;return dx({ref:i,nextImpl:e}),function(){if((Ce&2)!==0)throw Error(s(440));return i.impl.apply(void 0,arguments)}}function jp(e,i){return pl(4,2,e,i)}function Kp(e,i){return pl(4,4,e,i)}function Qp(e,i){if(typeof i=="function"){e=e();var r=i(e);return function(){typeof r=="function"?r():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Jp(e,i,r){r=r!=null?r.concat([e]):null,pl(4,4,Qp.bind(null,i,e),r)}function Uu(){}function $p(e,i){var r=en();i=i===void 0?null:i;var o=r.memoizedState;return i!==null&&Su(i,o[1])?o[0]:(r.memoizedState=[e,i],e)}function tm(e,i){var r=en();i=i===void 0?null:i;var o=r.memoizedState;if(i!==null&&Su(i,o[1]))return o[0];if(o=e(),is){It(!0);try{e()}finally{It(!1)}}return r.memoizedState=[o,i],o}function Lu(e,i,r){return r===void 0||(Bi&1073741824)!==0&&(_e&261930)===0?e.memoizedState=i:(e.memoizedState=r,e=eg(),le.lanes|=e,xa|=e,r)}function em(e,i,r,o){return Vn(r,i)?r:ks.current!==null?(e=Lu(e,r,o),Vn(e,i)||(on=!0),e):(Bi&42)===0||(Bi&1073741824)!==0&&(_e&261930)===0?(on=!0,e.memoizedState=r):(e=eg(),le.lanes|=e,xa|=e,i)}function nm(e,i,r,o,u){var d=V.p;V.p=d!==0&&8>d?d:8;var S=z.T,b={};z.T=b,Fu(e,!1,i,r);try{var I=u(),et=z.S;if(et!==null&&et(b,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var dt=lx(I,o);Jr(e,i,dt,Zn(e))}else Jr(e,i,o,Zn(e))}catch(gt){Jr(e,i,{then:function(){},status:"rejected",reason:gt},Zn())}finally{V.p=d,S!==null&&b.types!==null&&(S.types=b.types),z.T=S}}function px(){}function Nu(e,i,r,o){if(e.tag!==5)throw Error(s(476));var u=im(e).queue;nm(e,u,i,X,r===null?px:function(){return am(e),r(o)})}function im(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:X,baseState:X,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:X},next:null};var r={};return i.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:r},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function am(e){var i=im(e);i.next===null&&(i=e.alternate.memoizedState),Jr(e,i.next.queue,{},Zn())}function Ou(){return Mn(go)}function sm(){return en().memoizedState}function rm(){return en().memoizedState}function mx(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var r=Zn();e=da(r);var o=pa(i,e,r);o!==null&&(Bn(o,i,r),Yr(o,i,r)),i={cache:cu()},e.payload=i;return}i=i.return}}function gx(e,i,r){var o=Zn();r={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},ml(e)?lm(i,r):(r=Jc(e,i,r,o),r!==null&&(Bn(r,e,o),cm(r,i,o)))}function om(e,i,r){var o=Zn();Jr(e,i,r,o)}function Jr(e,i,r,o){var u={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(ml(e))lm(i,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var S=i.lastRenderedState,b=d(S,r);if(u.hasEagerState=!0,u.eagerState=b,Vn(b,S))return jo(e,i,u,0),Ve===null&&Zo(),!1}catch{}finally{}if(r=Jc(e,i,u,o),r!==null)return Bn(r,e,o),cm(r,i,o),!0}return!1}function Fu(e,i,r,o){if(o={lane:2,revertLane:pf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},ml(e)){if(i)throw Error(s(479))}else i=Jc(e,r,o,2),i!==null&&Bn(i,e,2)}function ml(e){var i=e.alternate;return e===le||i!==null&&i===le}function lm(e,i){Ws=ll=!0;var r=e.pending;r===null?i.next=i:(i.next=r.next,r.next=i),e.pending=i}function cm(e,i,r){if((r&4194048)!==0){var o=i.lanes;o&=e.pendingLanes,r|=o,i.lanes=r,Si(e,r)}}var $r={readContext:Mn,use:fl,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useLayoutEffect:Ke,useInsertionEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useSyncExternalStore:Ke,useId:Ke,useHostTransitionStatus:Ke,useFormState:Ke,useActionState:Ke,useOptimistic:Ke,useMemoCache:Ke,useCacheRefresh:Ke};$r.useEffectEvent=Ke;var um={readContext:Mn,use:fl,useCallback:function(e,i){return Un().memoizedState=[e,i===void 0?null:i],e},useContext:Mn,useEffect:Yp,useImperativeHandle:function(e,i,r){r=r!=null?r.concat([e]):null,dl(4194308,4,Qp.bind(null,i,e),r)},useLayoutEffect:function(e,i){return dl(4194308,4,e,i)},useInsertionEffect:function(e,i){dl(4,2,e,i)},useMemo:function(e,i){var r=Un();i=i===void 0?null:i;var o=e();if(is){It(!0);try{e()}finally{It(!1)}}return r.memoizedState=[o,i],o},useReducer:function(e,i,r){var o=Un();if(r!==void 0){var u=r(i);if(is){It(!0);try{r(i)}finally{It(!1)}}}else u=i;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=gx.bind(null,le,e),[o.memoizedState,e]},useRef:function(e){var i=Un();return e={current:e},i.memoizedState=e},useState:function(e){e=Cu(e);var i=e.queue,r=om.bind(null,le,i);return i.dispatch=r,[e.memoizedState,r]},useDebugValue:Uu,useDeferredValue:function(e,i){var r=Un();return Lu(r,e,i)},useTransition:function(){var e=Cu(!1);return e=nm.bind(null,le,e.queue,!0,!1),Un().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,r){var o=le,u=Un();if(Se){if(r===void 0)throw Error(s(407));r=r()}else{if(r=i(),Ve===null)throw Error(s(349));(_e&127)!==0||Up(o,i,r)}u.memoizedState=r;var d={value:r,getSnapshot:i};return u.queue=d,Yp(Np.bind(null,o,d,e),[e]),o.flags|=2048,Ys(9,{destroy:void 0},Lp.bind(null,o,d,r,i),null),r},useId:function(){var e=Un(),i=Ve.identifierPrefix;if(Se){var r=Ei,o=Mi;r=(o&~(1<<32-Ut(o)-1)).toString(32)+r,i="_"+i+"R_"+r,r=cl++,0<r&&(i+="H"+r.toString(32)),i+="_"}else r=cx++,i="_"+i+"r_"+r.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:Ou,useFormState:Vp,useActionState:Vp,useOptimistic:function(e){var i=Un();i.memoizedState=i.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=r,i=Fu.bind(null,le,!0,r),r.dispatch=i,[e,i]},useMemoCache:Au,useCacheRefresh:function(){return Un().memoizedState=mx.bind(null,le)},useEffectEvent:function(e){var i=Un(),r={impl:e};return i.memoizedState=r,function(){if((Ce&2)!==0)throw Error(s(440));return r.impl.apply(void 0,arguments)}}},Pu={readContext:Mn,use:fl,useCallback:$p,useContext:Mn,useEffect:Du,useImperativeHandle:Jp,useInsertionEffect:jp,useLayoutEffect:Kp,useMemo:tm,useReducer:hl,useRef:qp,useState:function(){return hl(Ii)},useDebugValue:Uu,useDeferredValue:function(e,i){var r=en();return em(r,Fe.memoizedState,e,i)},useTransition:function(){var e=hl(Ii)[0],i=en().memoizedState;return[typeof e=="boolean"?e:Qr(e),i]},useSyncExternalStore:Dp,useId:sm,useHostTransitionStatus:Ou,useFormState:Xp,useActionState:Xp,useOptimistic:function(e,i){var r=en();return Pp(r,Fe,e,i)},useMemoCache:Au,useCacheRefresh:rm};Pu.useEffectEvent=Zp;var fm={readContext:Mn,use:fl,useCallback:$p,useContext:Mn,useEffect:Du,useImperativeHandle:Jp,useInsertionEffect:jp,useLayoutEffect:Kp,useMemo:tm,useReducer:Ru,useRef:qp,useState:function(){return Ru(Ii)},useDebugValue:Uu,useDeferredValue:function(e,i){var r=en();return Fe===null?Lu(r,e,i):em(r,Fe.memoizedState,e,i)},useTransition:function(){var e=Ru(Ii)[0],i=en().memoizedState;return[typeof e=="boolean"?e:Qr(e),i]},useSyncExternalStore:Dp,useId:sm,useHostTransitionStatus:Ou,useFormState:Wp,useActionState:Wp,useOptimistic:function(e,i){var r=en();return Fe!==null?Pp(r,Fe,e,i):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:Au,useCacheRefresh:rm};fm.useEffectEvent=Zp;function zu(e,i,r,o){i=e.memoizedState,r=r(o,i),r=r==null?i:_({},i,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Bu={enqueueSetState:function(e,i,r){e=e._reactInternals;var o=Zn(),u=da(o);u.payload=i,r!=null&&(u.callback=r),i=pa(e,u,o),i!==null&&(Bn(i,e,o),Yr(i,e,o))},enqueueReplaceState:function(e,i,r){e=e._reactInternals;var o=Zn(),u=da(o);u.tag=1,u.payload=i,r!=null&&(u.callback=r),i=pa(e,u,o),i!==null&&(Bn(i,e,o),Yr(i,e,o))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var r=Zn(),o=da(r);o.tag=2,i!=null&&(o.callback=i),i=pa(e,o,r),i!==null&&(Bn(i,e,r),Yr(i,e,r))}};function hm(e,i,r,o,u,d,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,S):i.prototype&&i.prototype.isPureReactComponent?!Ir(r,o)||!Ir(u,d):!0}function dm(e,i,r,o){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,o),i.state!==e&&Bu.enqueueReplaceState(i,i.state,null)}function as(e,i){var r=i;if("ref"in i){r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}if(e=e.defaultProps){r===i&&(r=_({},r));for(var u in e)r[u]===void 0&&(r[u]=e[u])}return r}function pm(e){Yo(e)}function mm(e){console.error(e)}function gm(e){Yo(e)}function gl(e,i){try{var r=e.onUncaughtError;r(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function _m(e,i,r){try{var o=e.onCaughtError;o(r.value,{componentStack:r.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Iu(e,i,r){return r=da(r),r.tag=3,r.payload={element:null},r.callback=function(){gl(e,i)},r}function vm(e){return e=da(e),e.tag=3,e}function xm(e,i,r,o){var u=r.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;e.payload=function(){return u(d)},e.callback=function(){_m(i,r,o)}}var S=r.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){_m(i,r,o),typeof u!="function"&&(Sa===null?Sa=new Set([this]):Sa.add(this));var b=o.stack;this.componentDidCatch(o.value,{componentStack:b!==null?b:""})})}function _x(e,i,r,o,u){if(r.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=r.alternate,i!==null&&Is(i,r,u,!0),r=kn.current,r!==null){switch(r.tag){case 31:case 13:return si===null?Cl():r.alternate===null&&Qe===0&&(Qe=3),r.flags&=-257,r.flags|=65536,r.lanes=u,o===il?r.flags|=16384:(i=r.updateQueue,i===null?r.updateQueue=new Set([o]):i.add(o),ff(e,o,u)),!1;case 22:return r.flags|=65536,o===il?r.flags|=16384:(i=r.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},r.updateQueue=i):(r=i.retryQueue,r===null?i.retryQueue=new Set([o]):r.add(o)),ff(e,o,u)),!1}throw Error(s(435,r.tag))}return ff(e,o,u),Cl(),!1}if(Se)return i=kn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=u,o!==au&&(e=Error(s(422),{cause:o}),Vr(ei(e,r)))):(o!==au&&(i=Error(s(423),{cause:o}),Vr(ei(i,r))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ei(o,r),u=Iu(e.stateNode,o,u),mu(e,u),Qe!==4&&(Qe=2)),!1;var d=Error(s(520),{cause:o});if(d=ei(d,r),oo===null?oo=[d]:oo.push(d),Qe!==4&&(Qe=2),i===null)return!0;o=ei(o,r),r=i;do{switch(r.tag){case 3:return r.flags|=65536,e=u&-u,r.lanes|=e,e=Iu(r.stateNode,o,e),mu(r,e),!1;case 1:if(i=r.type,d=r.stateNode,(r.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Sa===null||!Sa.has(d))))return r.flags|=65536,u&=-u,r.lanes|=u,u=vm(u),xm(u,e,r,o),mu(r,u),!1}r=r.return}while(r!==null);return!1}var Hu=Error(s(461)),on=!1;function En(e,i,r,o){i.child=e===null?Ep(i,null,r,o):ns(i,e.child,r,o)}function Sm(e,i,r,o,u){r=r.render;var d=i.ref;if("ref"in o){var S={};for(var b in o)b!=="ref"&&(S[b]=o[b])}else S=o;return Ja(i),o=yu(e,i,r,S,d,u),b=Mu(),e!==null&&!on?(Eu(e,i,u),Hi(e,i,u)):(Se&&b&&nu(i),i.flags|=1,En(e,i,o,u),i.child)}function ym(e,i,r,o,u){if(e===null){var d=r.type;return typeof d=="function"&&!$c(d)&&d.defaultProps===void 0&&r.compare===null?(i.tag=15,i.type=d,Mm(e,i,d,o,u)):(e=Qo(r.type,null,o,i,i.mode,u),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!Zu(e,u)){var S=d.memoizedProps;if(r=r.compare,r=r!==null?r:Ir,r(S,o)&&e.ref===i.ref)return Hi(e,i,u)}return i.flags|=1,e=Oi(d,o),e.ref=i.ref,e.return=i,i.child=e}function Mm(e,i,r,o,u){if(e!==null){var d=e.memoizedProps;if(Ir(d,o)&&e.ref===i.ref)if(on=!1,i.pendingProps=o=d,Zu(e,u))(e.flags&131072)!==0&&(on=!0);else return i.lanes=e.lanes,Hi(e,i,u)}return Gu(e,i,r,o,u)}function Em(e,i,r,o){var u=o.children,d=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((i.flags&128)!==0){if(d=d!==null?d.baseLanes|r:r,e!==null){for(o=i.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,i.child=null;return Tm(e,i,d,r,o)}if((r&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&el(i,d!==null?d.cachePool:null),d!==null?bp(i,d):_u(),Rp(i);else return o=i.lanes=536870912,Tm(e,i,d!==null?d.baseLanes|r:r,r,o)}else d!==null?(el(i,d.cachePool),bp(i,d),ga(),i.memoizedState=null):(e!==null&&el(i,null),_u(),ga());return En(e,i,u,r),i.child}function to(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function Tm(e,i,r,o,u){var d=fu();return d=d===null?null:{parent:sn._currentValue,pool:d},i.memoizedState={baseLanes:r,cachePool:d},e!==null&&el(i,null),_u(),Rp(i),e!==null&&Is(e,i,o,!0),i.childLanes=u,null}function _l(e,i){return i=xl({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function Am(e,i,r){return ns(i,e.child,null,r),e=_l(i,i.pendingProps),e.flags|=2,Wn(i),i.memoizedState=null,e}function vx(e,i,r){var o=i.pendingProps,u=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(Se){if(o.mode==="hidden")return e=_l(i,o),i.lanes=536870912,to(null,e);if(xu(i),(e=qe)?(e=zg(e,ai),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:la!==null?{id:Mi,overflow:Ei}:null,retryLane:536870912,hydrationErrors:null},r=lp(e),r.return=i,i.child=r,yn=i,qe=null)):e=null,e===null)throw ua(i);return i.lanes=536870912,null}return _l(i,o)}var d=e.memoizedState;if(d!==null){var S=d.dehydrated;if(xu(i),u)if(i.flags&256)i.flags&=-257,i=Am(e,i,r);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(s(558));else if(on||Is(e,i,r,!1),u=(r&e.childLanes)!==0,on||u){if(o=Ve,o!==null&&(S=Ts(o,r),S!==0&&S!==d.retryLane))throw d.retryLane=S,Za(e,S),Bn(o,e,S),Hu;Cl(),i=Am(e,i,r)}else e=d.treeContext,qe=ri(S.nextSibling),yn=i,Se=!0,ca=null,ai=!1,e!==null&&fp(i,e),i=_l(i,o),i.flags|=4096;return i}return e=Oi(e.child,{mode:o.mode,children:o.children}),e.ref=i.ref,i.child=e,e.return=i,e}function vl(e,i){var r=i.ref;if(r===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(s(284));(e===null||e.ref!==r)&&(i.flags|=4194816)}}function Gu(e,i,r,o,u){return Ja(i),r=yu(e,i,r,o,void 0,u),o=Mu(),e!==null&&!on?(Eu(e,i,u),Hi(e,i,u)):(Se&&o&&nu(i),i.flags|=1,En(e,i,r,u),i.child)}function bm(e,i,r,o,u,d){return Ja(i),i.updateQueue=null,r=wp(i,o,r,u),Cp(e),o=Mu(),e!==null&&!on?(Eu(e,i,d),Hi(e,i,d)):(Se&&o&&nu(i),i.flags|=1,En(e,i,r,d),i.child)}function Rm(e,i,r,o,u){if(Ja(i),i.stateNode===null){var d=Fs,S=r.contextType;typeof S=="object"&&S!==null&&(d=Mn(S)),d=new r(o,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Bu,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=o,d.state=i.memoizedState,d.refs={},du(i),S=r.contextType,d.context=typeof S=="object"&&S!==null?Mn(S):Fs,d.state=i.memoizedState,S=r.getDerivedStateFromProps,typeof S=="function"&&(zu(i,r,S,o),d.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(S=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),S!==d.state&&Bu.enqueueReplaceState(d,d.state,null),jr(i,o,d,u),Zr(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(e===null){d=i.stateNode;var b=i.memoizedProps,I=as(r,b);d.props=I;var et=d.context,dt=r.contextType;S=Fs,typeof dt=="object"&&dt!==null&&(S=Mn(dt));var gt=r.getDerivedStateFromProps;dt=typeof gt=="function"||typeof d.getSnapshotBeforeUpdate=="function",b=i.pendingProps!==b,dt||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(b||et!==S)&&dm(i,d,o,S),ha=!1;var at=i.memoizedState;d.state=at,jr(i,o,d,u),Zr(),et=i.memoizedState,b||at!==et||ha?(typeof gt=="function"&&(zu(i,r,gt,o),et=i.memoizedState),(I=ha||hm(i,r,I,o,at,et,S))?(dt||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=et),d.props=o,d.state=et,d.context=S,o=I):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{d=i.stateNode,pu(e,i),S=i.memoizedProps,dt=as(r,S),d.props=dt,gt=i.pendingProps,at=d.context,et=r.contextType,I=Fs,typeof et=="object"&&et!==null&&(I=Mn(et)),b=r.getDerivedStateFromProps,(et=typeof b=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S!==gt||at!==I)&&dm(i,d,o,I),ha=!1,at=i.memoizedState,d.state=at,jr(i,o,d,u),Zr();var ct=i.memoizedState;S!==gt||at!==ct||ha||e!==null&&e.dependencies!==null&&$o(e.dependencies)?(typeof b=="function"&&(zu(i,r,b,o),ct=i.memoizedState),(dt=ha||hm(i,r,dt,o,at,ct,I)||e!==null&&e.dependencies!==null&&$o(e.dependencies))?(et||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ct,I),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ct,I)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||S===e.memoizedProps&&at===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&at===e.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=ct),d.props=o,d.state=ct,d.context=I,o=dt):(typeof d.componentDidUpdate!="function"||S===e.memoizedProps&&at===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&at===e.memoizedState||(i.flags|=1024),o=!1)}return d=o,vl(e,i),o=(i.flags&128)!==0,d||o?(d=i.stateNode,r=o&&typeof r.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&o?(i.child=ns(i,e.child,null,u),i.child=ns(i,null,r,u)):En(e,i,r,u),i.memoizedState=d.state,e=i.child):e=Hi(e,i,u),e}function Cm(e,i,r,o){return Ka(),i.flags|=256,En(e,i,r,o),i.child}var Vu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Xu(e){return{baseLanes:e,cachePool:_p()}}function ku(e,i,r){return e=e!==null?e.childLanes&~r:0,i&&(e|=Yn),e}function wm(e,i,r){var o=i.pendingProps,u=!1,d=(i.flags&128)!==0,S;if((S=d)||(S=e!==null&&e.memoizedState===null?!1:(tn.current&2)!==0),S&&(u=!0,i.flags&=-129),S=(i.flags&32)!==0,i.flags&=-33,e===null){if(Se){if(u?ma(i):ga(),(e=qe)?(e=zg(e,ai),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:la!==null?{id:Mi,overflow:Ei}:null,retryLane:536870912,hydrationErrors:null},r=lp(e),r.return=i,i.child=r,yn=i,qe=null)):e=null,e===null)throw ua(i);return Rf(e)?i.lanes=32:i.lanes=536870912,null}var b=o.children;return o=o.fallback,u?(ga(),u=i.mode,b=xl({mode:"hidden",children:b},u),o=ja(o,u,r,null),b.return=i,o.return=i,b.sibling=o,i.child=b,o=i.child,o.memoizedState=Xu(r),o.childLanes=ku(e,S,r),i.memoizedState=Vu,to(null,o)):(ma(i),Wu(i,b))}var I=e.memoizedState;if(I!==null&&(b=I.dehydrated,b!==null)){if(d)i.flags&256?(ma(i),i.flags&=-257,i=qu(e,i,r)):i.memoizedState!==null?(ga(),i.child=e.child,i.flags|=128,i=null):(ga(),b=o.fallback,u=i.mode,o=xl({mode:"visible",children:o.children},u),b=ja(b,u,r,null),b.flags|=2,o.return=i,b.return=i,o.sibling=b,i.child=o,ns(i,e.child,null,r),o=i.child,o.memoizedState=Xu(r),o.childLanes=ku(e,S,r),i.memoizedState=Vu,i=to(null,o));else if(ma(i),Rf(b)){if(S=b.nextSibling&&b.nextSibling.dataset,S)var et=S.dgst;S=et,o=Error(s(419)),o.stack="",o.digest=S,Vr({value:o,source:null,stack:null}),i=qu(e,i,r)}else if(on||Is(e,i,r,!1),S=(r&e.childLanes)!==0,on||S){if(S=Ve,S!==null&&(o=Ts(S,r),o!==0&&o!==I.retryLane))throw I.retryLane=o,Za(e,o),Bn(S,e,o),Hu;bf(b)||Cl(),i=qu(e,i,r)}else bf(b)?(i.flags|=192,i.child=e.child,i=null):(e=I.treeContext,qe=ri(b.nextSibling),yn=i,Se=!0,ca=null,ai=!1,e!==null&&fp(i,e),i=Wu(i,o.children),i.flags|=4096);return i}return u?(ga(),b=o.fallback,u=i.mode,I=e.child,et=I.sibling,o=Oi(I,{mode:"hidden",children:o.children}),o.subtreeFlags=I.subtreeFlags&65011712,et!==null?b=Oi(et,b):(b=ja(b,u,r,null),b.flags|=2),b.return=i,o.return=i,o.sibling=b,i.child=o,to(null,o),o=i.child,b=e.child.memoizedState,b===null?b=Xu(r):(u=b.cachePool,u!==null?(I=sn._currentValue,u=u.parent!==I?{parent:I,pool:I}:u):u=_p(),b={baseLanes:b.baseLanes|r,cachePool:u}),o.memoizedState=b,o.childLanes=ku(e,S,r),i.memoizedState=Vu,to(e.child,o)):(ma(i),r=e.child,e=r.sibling,r=Oi(r,{mode:"visible",children:o.children}),r.return=i,r.sibling=null,e!==null&&(S=i.deletions,S===null?(i.deletions=[e],i.flags|=16):S.push(e)),i.child=r,i.memoizedState=null,r)}function Wu(e,i){return i=xl({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function xl(e,i){return e=Xn(22,e,null,i),e.lanes=0,e}function qu(e,i,r){return ns(i,e.child,null,r),e=Wu(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Dm(e,i,r){e.lanes|=i;var o=e.alternate;o!==null&&(o.lanes|=i),ou(e.return,i,r)}function Yu(e,i,r,o,u,d){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:u,treeForkCount:d}:(S.isBackwards=i,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=r,S.tailMode=u,S.treeForkCount=d)}function Um(e,i,r){var o=i.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var S=tn.current,b=(S&2)!==0;if(b?(S=S&1|2,i.flags|=128):S&=1,xt(tn,S),En(e,i,o,r),o=Se?Gr:0,!b&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dm(e,r,i);else if(e.tag===19)Dm(e,r,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(r=i.child,u=null;r!==null;)e=r.alternate,e!==null&&ol(e)===null&&(u=r),r=r.sibling;r=u,r===null?(u=i.child,i.child=null):(u=r.sibling,r.sibling=null),Yu(i,!1,u,r,d,o);break;case"backwards":case"unstable_legacy-backwards":for(r=null,u=i.child,i.child=null;u!==null;){if(e=u.alternate,e!==null&&ol(e)===null){i.child=u;break}e=u.sibling,u.sibling=r,r=u,u=e}Yu(i,!0,r,null,d,o);break;case"together":Yu(i,!1,null,null,void 0,o);break;default:i.memoizedState=null}return i.child}function Hi(e,i,r){if(e!==null&&(i.dependencies=e.dependencies),xa|=i.lanes,(r&i.childLanes)===0)if(e!==null){if(Is(e,i,r,!1),(r&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(s(153));if(i.child!==null){for(e=i.child,r=Oi(e,e.pendingProps),i.child=r,r.return=i;e.sibling!==null;)e=e.sibling,r=r.sibling=Oi(e,e.pendingProps),r.return=i;r.sibling=null}return i.child}function Zu(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&$o(e)))}function xx(e,i,r){switch(i.tag){case 3:Ct(i,i.stateNode.containerInfo),fa(i,sn,e.memoizedState.cache),Ka();break;case 27:case 5:Xt(i);break;case 4:Ct(i,i.stateNode.containerInfo);break;case 10:fa(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,xu(i),null;break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(ma(i),i.flags|=128,null):(r&i.child.childLanes)!==0?wm(e,i,r):(ma(i),e=Hi(e,i,r),e!==null?e.sibling:null);ma(i);break;case 19:var u=(e.flags&128)!==0;if(o=(r&i.childLanes)!==0,o||(Is(e,i,r,!1),o=(r&i.childLanes)!==0),u){if(o)return Um(e,i,r);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),xt(tn,tn.current),o)break;return null;case 22:return i.lanes=0,Em(e,i,r,i.pendingProps);case 24:fa(i,sn,e.memoizedState.cache)}return Hi(e,i,r)}function Lm(e,i,r){if(e!==null)if(e.memoizedProps!==i.pendingProps)on=!0;else{if(!Zu(e,r)&&(i.flags&128)===0)return on=!1,xx(e,i,r);on=(e.flags&131072)!==0}else on=!1,Se&&(i.flags&1048576)!==0&&up(i,Gr,i.index);switch(i.lanes=0,i.tag){case 16:t:{var o=i.pendingProps;if(e=ts(i.elementType),i.type=e,typeof e=="function")$c(e)?(o=as(e,o),i.tag=1,i=Rm(null,i,e,o,r)):(i.tag=0,i=Gu(null,i,e,o,r));else{if(e!=null){var u=e.$$typeof;if(u===C){i.tag=11,i=Sm(null,i,e,o,r);break t}else if(u===F){i.tag=14,i=ym(null,i,e,o,r);break t}}throw i=Q(e)||e,Error(s(306,i,""))}}return i;case 0:return Gu(e,i,i.type,i.pendingProps,r);case 1:return o=i.type,u=as(o,i.pendingProps),Rm(e,i,o,u,r);case 3:t:{if(Ct(i,i.stateNode.containerInfo),e===null)throw Error(s(387));o=i.pendingProps;var d=i.memoizedState;u=d.element,pu(e,i),jr(i,o,null,r);var S=i.memoizedState;if(o=S.cache,fa(i,sn,o),o!==d.cache&&lu(i,[sn],r,!0),Zr(),o=S.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:S.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=Cm(e,i,o,r);break t}else if(o!==u){u=ei(Error(s(424)),i),Vr(u),i=Cm(e,i,o,r);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(qe=ri(e.firstChild),yn=i,Se=!0,ca=null,ai=!0,r=Ep(i,null,o,r),i.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(Ka(),o===u){i=Hi(e,i,r);break t}En(e,i,o,r)}i=i.child}return i;case 26:return vl(e,i),e===null?(r=Xg(i.type,null,i.pendingProps,null))?i.memoizedState=r:Se||(r=i.type,e=i.pendingProps,o=Fl(it.current).createElement(r),o[an]=i,o[xn]=e,Tn(o,r,e),St(o),i.stateNode=o):i.memoizedState=Xg(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Xt(i),e===null&&Se&&(o=i.stateNode=Hg(i.type,i.pendingProps,it.current),yn=i,ai=!0,u=qe,Ta(i.type)?(Cf=u,qe=ri(o.firstChild)):qe=u),En(e,i,i.pendingProps.children,r),vl(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Se&&((u=o=qe)&&(o=jx(o,i.type,i.pendingProps,ai),o!==null?(i.stateNode=o,yn=i,qe=ri(o.firstChild),ai=!1,u=!0):u=!1),u||ua(i)),Xt(i),u=i.type,d=i.pendingProps,S=e!==null?e.memoizedProps:null,o=d.children,Ef(u,d)?o=null:S!==null&&Ef(u,S)&&(i.flags|=32),i.memoizedState!==null&&(u=yu(e,i,ux,null,null,r),go._currentValue=u),vl(e,i),En(e,i,o,r),i.child;case 6:return e===null&&Se&&((e=r=qe)&&(r=Kx(r,i.pendingProps,ai),r!==null?(i.stateNode=r,yn=i,qe=null,e=!0):e=!1),e||ua(i)),null;case 13:return wm(e,i,r);case 4:return Ct(i,i.stateNode.containerInfo),o=i.pendingProps,e===null?i.child=ns(i,null,o,r):En(e,i,o,r),i.child;case 11:return Sm(e,i,i.type,i.pendingProps,r);case 7:return En(e,i,i.pendingProps,r),i.child;case 8:return En(e,i,i.pendingProps.children,r),i.child;case 12:return En(e,i,i.pendingProps.children,r),i.child;case 10:return o=i.pendingProps,fa(i,i.type,o.value),En(e,i,o.children,r),i.child;case 9:return u=i.type._context,o=i.pendingProps.children,Ja(i),u=Mn(u),o=o(u),i.flags|=1,En(e,i,o,r),i.child;case 14:return ym(e,i,i.type,i.pendingProps,r);case 15:return Mm(e,i,i.type,i.pendingProps,r);case 19:return Um(e,i,r);case 31:return vx(e,i,r);case 22:return Em(e,i,r,i.pendingProps);case 24:return Ja(i),o=Mn(sn),e===null?(u=fu(),u===null&&(u=Ve,d=cu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=r),u=d),i.memoizedState={parent:o,cache:u},du(i),fa(i,sn,u)):((e.lanes&r)!==0&&(pu(e,i),jr(i,null,null,r),Zr()),u=e.memoizedState,d=i.memoizedState,u.parent!==o?(u={parent:o,cache:o},i.memoizedState=u,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=u),fa(i,sn,o)):(o=d.cache,fa(i,sn,o),o!==u.cache&&lu(i,[sn],r,!0))),En(e,i,i.pendingProps.children,r),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function Gi(e){e.flags|=4}function ju(e,i,r,o,u){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(sg())e.flags|=8192;else throw es=il,hu}else e.flags&=-16777217}function Nm(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Zg(i))if(sg())e.flags|=8192;else throw es=il,hu}function Sl(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Le():536870912,e.lanes|=i,Qs|=i)}function eo(e,i){if(!Se)switch(e.tailMode){case"hidden":i=e.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ye(e){var i=e.alternate!==null&&e.alternate.child===e.child,r=0,o=0;if(i)for(var u=e.child;u!==null;)r|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)r|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=r,i}function Sx(e,i,r){var o=i.pendingProps;switch(iu(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(i),null;case 1:return Ye(i),null;case 3:return r=i.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),zi(sn),Pt(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Bs(i)?Gi(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,su())),Ye(i),null;case 26:var u=i.type,d=i.memoizedState;return e===null?(Gi(i),d!==null?(Ye(i),Nm(i,d)):(Ye(i),ju(i,u,null,o,r))):d?d!==e.memoizedState?(Gi(i),Ye(i),Nm(i,d)):(Ye(i),i.flags&=-16777217):(e=e.memoizedProps,e!==o&&Gi(i),Ye(i),ju(i,u,e,o,r)),null;case 27:if(oe(i),r=it.current,u=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&Gi(i);else{if(!o){if(i.stateNode===null)throw Error(s(166));return Ye(i),null}e=At.current,Bs(i)?hp(i):(e=Hg(u,o,r),i.stateNode=e,Gi(i))}return Ye(i),null;case 5:if(oe(i),u=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&Gi(i);else{if(!o){if(i.stateNode===null)throw Error(s(166));return Ye(i),null}if(d=At.current,Bs(i))hp(i);else{var S=Fl(it.current);switch(d){case 1:d=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=S.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?S.createElement(u,{is:o.is}):S.createElement(u)}}d[an]=i,d[xn]=o;t:for(S=i.child;S!==null;){if(S.tag===5||S.tag===6)d.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===i)break t;for(;S.sibling===null;){if(S.return===null||S.return===i)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}i.stateNode=d;t:switch(Tn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&Gi(i)}}return Ye(i),ju(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,r),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==o&&Gi(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(s(166));if(e=it.current,Bs(i)){if(e=i.stateNode,r=i.memoizedProps,o=null,u=yn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[an]=i,e=!!(e.nodeValue===r||o!==null&&o.suppressHydrationWarning===!0||wg(e.nodeValue,r)),e||ua(i,!0)}else e=Fl(e).createTextNode(o),e[an]=i,i.stateNode=e}return Ye(i),null;case 31:if(r=i.memoizedState,e===null||e.memoizedState!==null){if(o=Bs(i),r!==null){if(e===null){if(!o)throw Error(s(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[an]=i}else Ka(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ye(i),e=!1}else r=su(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),e=!0;if(!e)return i.flags&256?(Wn(i),i):(Wn(i),null);if((i.flags&128)!==0)throw Error(s(558))}return Ye(i),null;case 13:if(o=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Bs(i),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=i.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[an]=i}else Ka(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ye(i),u=!1}else u=su(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return i.flags&256?(Wn(i),i):(Wn(i),null)}return Wn(i),(i.flags&128)!==0?(i.lanes=r,i):(r=o!==null,e=e!==null&&e.memoizedState!==null,r&&(o=i.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),r!==e&&r&&(i.child.flags|=8192),Sl(i,i.updateQueue),Ye(i),null);case 4:return Pt(),e===null&&vf(i.stateNode.containerInfo),Ye(i),null;case 10:return zi(i.type),Ye(i),null;case 19:if(nt(tn),o=i.memoizedState,o===null)return Ye(i),null;if(u=(i.flags&128)!==0,d=o.rendering,d===null)if(u)eo(o,!1);else{if(Qe!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=ol(e),d!==null){for(i.flags|=128,eo(o,!1),e=d.updateQueue,i.updateQueue=e,Sl(i,e),i.subtreeFlags=0,e=r,r=i.child;r!==null;)op(r,e),r=r.sibling;return xt(tn,tn.current&1|2),Se&&Fi(i,o.treeForkCount),i.child}e=e.sibling}o.tail!==null&&A()>Al&&(i.flags|=128,u=!0,eo(o,!1),i.lanes=4194304)}else{if(!u)if(e=ol(d),e!==null){if(i.flags|=128,u=!0,e=e.updateQueue,i.updateQueue=e,Sl(i,e),eo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Se)return Ye(i),null}else 2*A()-o.renderingStartTime>Al&&r!==536870912&&(i.flags|=128,u=!0,eo(o,!1),i.lanes=4194304);o.isBackwards?(d.sibling=i.child,i.child=d):(e=o.last,e!==null?e.sibling=d:i.child=d,o.last=d)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=A(),e.sibling=null,r=tn.current,xt(tn,u?r&1|2:r&1),Se&&Fi(i,o.treeForkCount),e):(Ye(i),null);case 22:case 23:return Wn(i),vu(),o=i.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(r&536870912)!==0&&(i.flags&128)===0&&(Ye(i),i.subtreeFlags&6&&(i.flags|=8192)):Ye(i),r=i.updateQueue,r!==null&&Sl(i,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==r&&(i.flags|=2048),e!==null&&nt($a),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),i.memoizedState.cache!==r&&(i.flags|=2048),zi(sn),Ye(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function yx(e,i){switch(iu(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return zi(sn),Pt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return oe(i),null;case 31:if(i.memoizedState!==null){if(Wn(i),i.alternate===null)throw Error(s(340));Ka()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(Wn(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(s(340));Ka()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return nt(tn),null;case 4:return Pt(),null;case 10:return zi(i.type),null;case 22:case 23:return Wn(i),vu(),e!==null&&nt($a),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return zi(sn),null;case 25:return null;default:return null}}function Om(e,i){switch(iu(i),i.tag){case 3:zi(sn),Pt();break;case 26:case 27:case 5:oe(i);break;case 4:Pt();break;case 31:i.memoizedState!==null&&Wn(i);break;case 13:Wn(i);break;case 19:nt(tn);break;case 10:zi(i.type);break;case 22:case 23:Wn(i),vu(),e!==null&&nt($a);break;case 24:zi(sn)}}function no(e,i){try{var r=i.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var u=o.next;r=u;do{if((r.tag&e)===e){o=void 0;var d=r.create,S=r.inst;o=d(),S.destroy=o}r=r.next}while(r!==u)}}catch(b){Oe(i,i.return,b)}}function _a(e,i,r){try{var o=i.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&e)===e){var S=o.inst,b=S.destroy;if(b!==void 0){S.destroy=void 0,u=i;var I=r,et=b;try{et()}catch(dt){Oe(u,I,dt)}}}o=o.next}while(o!==d)}}catch(dt){Oe(i,i.return,dt)}}function Fm(e){var i=e.updateQueue;if(i!==null){var r=e.stateNode;try{Ap(i,r)}catch(o){Oe(e,e.return,o)}}}function Pm(e,i,r){r.props=as(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(o){Oe(e,i,o)}}function io(e,i){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof r=="function"?e.refCleanup=r(o):r.current=o}}catch(u){Oe(e,i,u)}}function Ti(e,i){var r=e.ref,o=e.refCleanup;if(r!==null)if(typeof o=="function")try{o()}catch(u){Oe(e,i,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(u){Oe(e,i,u)}else r.current=null}function zm(e){var i=e.type,r=e.memoizedProps,o=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":r.autoFocus&&o.focus();break t;case"img":r.src?o.src=r.src:r.srcSet&&(o.srcset=r.srcSet)}}catch(u){Oe(e,e.return,u)}}function Ku(e,i,r){try{var o=e.stateNode;Xx(o,e.type,r,i),o[xn]=i}catch(u){Oe(e,e.return,u)}}function Bm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ta(e.type)||e.tag===4}function Qu(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Bm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ta(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ju(e,i,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,i):(i=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,i.appendChild(e),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=Li));else if(o!==4&&(o===27&&Ta(e.type)&&(r=e.stateNode,i=null),e=e.child,e!==null))for(Ju(e,i,r),e=e.sibling;e!==null;)Ju(e,i,r),e=e.sibling}function yl(e,i,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?r.insertBefore(e,i):r.appendChild(e);else if(o!==4&&(o===27&&Ta(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(yl(e,i,r),e=e.sibling;e!==null;)yl(e,i,r),e=e.sibling}function Im(e){var i=e.stateNode,r=e.memoizedProps;try{for(var o=e.type,u=i.attributes;u.length;)i.removeAttributeNode(u[0]);Tn(i,o,r),i[an]=e,i[xn]=r}catch(d){Oe(e,e.return,d)}}var Vi=!1,ln=!1,$u=!1,Hm=typeof WeakSet=="function"?WeakSet:Set,_n=null;function Mx(e,i){if(e=e.containerInfo,yf=Vl,e=Jd(e),qc(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{r.nodeType,d.nodeType}catch{r=null;break t}var S=0,b=-1,I=-1,et=0,dt=0,gt=e,at=null;e:for(;;){for(var ct;gt!==r||u!==0&&gt.nodeType!==3||(b=S+u),gt!==d||o!==0&&gt.nodeType!==3||(I=S+o),gt.nodeType===3&&(S+=gt.nodeValue.length),(ct=gt.firstChild)!==null;)at=gt,gt=ct;for(;;){if(gt===e)break e;if(at===r&&++et===u&&(b=S),at===d&&++dt===o&&(I=S),(ct=gt.nextSibling)!==null)break;gt=at,at=gt.parentNode}gt=ct}r=b===-1||I===-1?null:{start:b,end:I}}else r=null}r=r||{start:0,end:0}}else r=null;for(Mf={focusedElem:e,selectionRange:r},Vl=!1,_n=i;_n!==null;)if(i=_n,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,_n=e;else for(;_n!==null;){switch(i=_n,d=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(r=0;r<e.length;r++)u=e[r],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,r=i,u=d.memoizedProps,d=d.memoizedState,o=r.stateNode;try{var kt=as(r.type,u);e=o.getSnapshotBeforeUpdate(kt,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(te){Oe(r,r.return,te)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,r=e.nodeType,r===9)Af(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Af(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=i.sibling,e!==null){e.return=i.return,_n=e;break}_n=i.return}}function Gm(e,i,r){var o=r.flags;switch(r.tag){case 0:case 11:case 15:ki(e,r),o&4&&no(5,r);break;case 1:if(ki(e,r),o&4)if(e=r.stateNode,i===null)try{e.componentDidMount()}catch(S){Oe(r,r.return,S)}else{var u=as(r.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(u,i,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Oe(r,r.return,S)}}o&64&&Fm(r),o&512&&io(r,r.return);break;case 3:if(ki(e,r),o&64&&(e=r.updateQueue,e!==null)){if(i=null,r.child!==null)switch(r.child.tag){case 27:case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}try{Ap(e,i)}catch(S){Oe(r,r.return,S)}}break;case 27:i===null&&o&4&&Im(r);case 26:case 5:ki(e,r),i===null&&o&4&&zm(r),o&512&&io(r,r.return);break;case 12:ki(e,r);break;case 31:ki(e,r),o&4&&km(e,r);break;case 13:ki(e,r),o&4&&Wm(e,r),o&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=Ux.bind(null,r),Qx(e,r))));break;case 22:if(o=r.memoizedState!==null||Vi,!o){i=i!==null&&i.memoizedState!==null||ln,u=Vi;var d=ln;Vi=o,(ln=i)&&!d?Wi(e,r,(r.subtreeFlags&8772)!==0):ki(e,r),Vi=u,ln=d}break;case 30:break;default:ki(e,r)}}function Vm(e){var i=e.alternate;i!==null&&(e.alternate=null,Vm(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&R(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var je=null,On=!1;function Xi(e,i,r){for(r=r.child;r!==null;)Xm(e,i,r),r=r.sibling}function Xm(e,i,r){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(vt,r)}catch{}switch(r.tag){case 26:ln||Ti(r,i),Xi(e,i,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:ln||Ti(r,i);var o=je,u=On;Ta(r.type)&&(je=r.stateNode,On=!1),Xi(e,i,r),ho(r.stateNode),je=o,On=u;break;case 5:ln||Ti(r,i);case 6:if(o=je,u=On,je=null,Xi(e,i,r),je=o,On=u,je!==null)if(On)try{(je.nodeType===9?je.body:je.nodeName==="HTML"?je.ownerDocument.body:je).removeChild(r.stateNode)}catch(d){Oe(r,i,d)}else try{je.removeChild(r.stateNode)}catch(d){Oe(r,i,d)}break;case 18:je!==null&&(On?(e=je,Fg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),sr(e)):Fg(je,r.stateNode));break;case 4:o=je,u=On,je=r.stateNode.containerInfo,On=!0,Xi(e,i,r),je=o,On=u;break;case 0:case 11:case 14:case 15:_a(2,r,i),ln||_a(4,r,i),Xi(e,i,r);break;case 1:ln||(Ti(r,i),o=r.stateNode,typeof o.componentWillUnmount=="function"&&Pm(r,i,o)),Xi(e,i,r);break;case 21:Xi(e,i,r);break;case 22:ln=(o=ln)||r.memoizedState!==null,Xi(e,i,r),ln=o;break;default:Xi(e,i,r)}}function km(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{sr(e)}catch(r){Oe(i,i.return,r)}}}function Wm(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{sr(e)}catch(r){Oe(i,i.return,r)}}function Ex(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Hm),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Hm),i;default:throw Error(s(435,e.tag))}}function Ml(e,i){var r=Ex(e);i.forEach(function(o){if(!r.has(o)){r.add(o);var u=Lx.bind(null,e,o);o.then(u,u)}})}function Fn(e,i){var r=i.deletions;if(r!==null)for(var o=0;o<r.length;o++){var u=r[o],d=e,S=i,b=S;t:for(;b!==null;){switch(b.tag){case 27:if(Ta(b.type)){je=b.stateNode,On=!1;break t}break;case 5:je=b.stateNode,On=!1;break t;case 3:case 4:je=b.stateNode.containerInfo,On=!0;break t}b=b.return}if(je===null)throw Error(s(160));Xm(d,S,u),je=null,On=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)qm(i,e),i=i.sibling}var ui=null;function qm(e,i){var r=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Fn(i,e),Pn(e),o&4&&(_a(3,e,e.return),no(3,e),_a(5,e,e.return));break;case 1:Fn(i,e),Pn(e),o&512&&(ln||r===null||Ti(r,r.return)),o&64&&Vi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?o:r.concat(o))));break;case 26:var u=ui;if(Fn(i,e),Pn(e),o&512&&(ln||r===null||Ti(r,r.return)),o&4){var d=r!==null?r.memoizedState:null;if(o=e.memoizedState,r===null)if(o===null)if(e.stateNode===null){t:{o=e.type,r=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Xa]||d[an]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Tn(d,o,r),d[an]=e,St(d),o=d;break t;case"link":var S=qg("link","href",u).get(o+(r.href||""));if(S){for(var b=0;b<S.length;b++)if(d=S[b],d.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&d.getAttribute("rel")===(r.rel==null?null:r.rel)&&d.getAttribute("title")===(r.title==null?null:r.title)&&d.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){S.splice(b,1);break e}}d=u.createElement(o),Tn(d,o,r),u.head.appendChild(d);break;case"meta":if(S=qg("meta","content",u).get(o+(r.content||""))){for(b=0;b<S.length;b++)if(d=S[b],d.getAttribute("content")===(r.content==null?null:""+r.content)&&d.getAttribute("name")===(r.name==null?null:r.name)&&d.getAttribute("property")===(r.property==null?null:r.property)&&d.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&d.getAttribute("charset")===(r.charSet==null?null:r.charSet)){S.splice(b,1);break e}}d=u.createElement(o),Tn(d,o,r),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[an]=e,St(d),o=d}e.stateNode=o}else Yg(u,e.type,e.stateNode);else e.stateNode=Wg(u,o,e.memoizedProps);else d!==o?(d===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):d.count--,o===null?Yg(u,e.type,e.stateNode):Wg(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Ku(e,e.memoizedProps,r.memoizedProps)}break;case 27:Fn(i,e),Pn(e),o&512&&(ln||r===null||Ti(r,r.return)),r!==null&&o&4&&Ku(e,e.memoizedProps,r.memoizedProps);break;case 5:if(Fn(i,e),Pn(e),o&512&&(ln||r===null||Ti(r,r.return)),e.flags&32){u=e.stateNode;try{Cs(u,"")}catch(kt){Oe(e,e.return,kt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Ku(e,u,r!==null?r.memoizedProps:u)),o&1024&&($u=!0);break;case 6:if(Fn(i,e),Pn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,r=e.stateNode;try{r.nodeValue=o}catch(kt){Oe(e,e.return,kt)}}break;case 3:if(Bl=null,u=ui,ui=Pl(i.containerInfo),Fn(i,e),ui=u,Pn(e),o&4&&r!==null&&r.memoizedState.isDehydrated)try{sr(i.containerInfo)}catch(kt){Oe(e,e.return,kt)}$u&&($u=!1,Ym(e));break;case 4:o=ui,ui=Pl(e.stateNode.containerInfo),Fn(i,e),Pn(e),ui=o;break;case 12:Fn(i,e),Pn(e);break;case 31:Fn(i,e),Pn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ml(e,o)));break;case 13:Fn(i,e),Pn(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Tl=A()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ml(e,o)));break;case 22:u=e.memoizedState!==null;var I=r!==null&&r.memoizedState!==null,et=Vi,dt=ln;if(Vi=et||u,ln=dt||I,Fn(i,e),ln=dt,Vi=et,Pn(e),o&8192)t:for(i=e.stateNode,i._visibility=u?i._visibility&-2:i._visibility|1,u&&(r===null||I||Vi||ln||ss(e)),r=null,i=e;;){if(i.tag===5||i.tag===26){if(r===null){I=r=i;try{if(d=I.stateNode,u)S=d.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{b=I.stateNode;var gt=I.memoizedProps.style,at=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;b.style.display=at==null||typeof at=="boolean"?"":(""+at).trim()}}catch(kt){Oe(I,I.return,kt)}}}else if(i.tag===6){if(r===null){I=i;try{I.stateNode.nodeValue=u?"":I.memoizedProps}catch(kt){Oe(I,I.return,kt)}}}else if(i.tag===18){if(r===null){I=i;try{var ct=I.stateNode;u?Pg(ct,!0):Pg(I.stateNode,!1)}catch(kt){Oe(I,I.return,kt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;r===i&&(r=null),i=i.return}r===i&&(r=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=e.updateQueue,o!==null&&(r=o.retryQueue,r!==null&&(o.retryQueue=null,Ml(e,r))));break;case 19:Fn(i,e),Pn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ml(e,o)));break;case 30:break;case 21:break;default:Fn(i,e),Pn(e)}}function Pn(e){var i=e.flags;if(i&2){try{for(var r,o=e.return;o!==null;){if(Bm(o)){r=o;break}o=o.return}if(r==null)throw Error(s(160));switch(r.tag){case 27:var u=r.stateNode,d=Qu(e);yl(e,d,u);break;case 5:var S=r.stateNode;r.flags&32&&(Cs(S,""),r.flags&=-33);var b=Qu(e);yl(e,b,S);break;case 3:case 4:var I=r.stateNode.containerInfo,et=Qu(e);Ju(e,et,I);break;default:throw Error(s(161))}}catch(dt){Oe(e,e.return,dt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function Ym(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;Ym(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function ki(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Gm(e,i.alternate,i),i=i.sibling}function ss(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:_a(4,i,i.return),ss(i);break;case 1:Ti(i,i.return);var r=i.stateNode;typeof r.componentWillUnmount=="function"&&Pm(i,i.return,r),ss(i);break;case 27:ho(i.stateNode);case 26:case 5:Ti(i,i.return),ss(i);break;case 22:i.memoizedState===null&&ss(i);break;case 30:ss(i);break;default:ss(i)}e=e.sibling}}function Wi(e,i,r){for(r=r&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,u=e,d=i,S=d.flags;switch(d.tag){case 0:case 11:case 15:Wi(u,d,r),no(4,d);break;case 1:if(Wi(u,d,r),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(et){Oe(o,o.return,et)}if(o=d,u=o.updateQueue,u!==null){var b=o.stateNode;try{var I=u.shared.hiddenCallbacks;if(I!==null)for(u.shared.hiddenCallbacks=null,u=0;u<I.length;u++)Tp(I[u],b)}catch(et){Oe(o,o.return,et)}}r&&S&64&&Fm(d),io(d,d.return);break;case 27:Im(d);case 26:case 5:Wi(u,d,r),r&&o===null&&S&4&&zm(d),io(d,d.return);break;case 12:Wi(u,d,r);break;case 31:Wi(u,d,r),r&&S&4&&km(u,d);break;case 13:Wi(u,d,r),r&&S&4&&Wm(u,d);break;case 22:d.memoizedState===null&&Wi(u,d,r),io(d,d.return);break;case 30:break;default:Wi(u,d,r)}i=i.sibling}}function tf(e,i){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&Xr(r))}function ef(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Xr(e))}function fi(e,i,r,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Zm(e,i,r,o),i=i.sibling}function Zm(e,i,r,o){var u=i.flags;switch(i.tag){case 0:case 11:case 15:fi(e,i,r,o),u&2048&&no(9,i);break;case 1:fi(e,i,r,o);break;case 3:fi(e,i,r,o),u&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Xr(e)));break;case 12:if(u&2048){fi(e,i,r,o),e=i.stateNode;try{var d=i.memoizedProps,S=d.id,b=d.onPostCommit;typeof b=="function"&&b(S,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){Oe(i,i.return,I)}}else fi(e,i,r,o);break;case 31:fi(e,i,r,o);break;case 13:fi(e,i,r,o);break;case 23:break;case 22:d=i.stateNode,S=i.alternate,i.memoizedState!==null?d._visibility&2?fi(e,i,r,o):ao(e,i):d._visibility&2?fi(e,i,r,o):(d._visibility|=2,Zs(e,i,r,o,(i.subtreeFlags&10256)!==0||!1)),u&2048&&tf(S,i);break;case 24:fi(e,i,r,o),u&2048&&ef(i.alternate,i);break;default:fi(e,i,r,o)}}function Zs(e,i,r,o,u){for(u=u&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var d=e,S=i,b=r,I=o,et=S.flags;switch(S.tag){case 0:case 11:case 15:Zs(d,S,b,I,u),no(8,S);break;case 23:break;case 22:var dt=S.stateNode;S.memoizedState!==null?dt._visibility&2?Zs(d,S,b,I,u):ao(d,S):(dt._visibility|=2,Zs(d,S,b,I,u)),u&&et&2048&&tf(S.alternate,S);break;case 24:Zs(d,S,b,I,u),u&&et&2048&&ef(S.alternate,S);break;default:Zs(d,S,b,I,u)}i=i.sibling}}function ao(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var r=e,o=i,u=o.flags;switch(o.tag){case 22:ao(r,o),u&2048&&tf(o.alternate,o);break;case 24:ao(r,o),u&2048&&ef(o.alternate,o);break;default:ao(r,o)}i=i.sibling}}var so=8192;function js(e,i,r){if(e.subtreeFlags&so)for(e=e.child;e!==null;)jm(e,i,r),e=e.sibling}function jm(e,i,r){switch(e.tag){case 26:js(e,i,r),e.flags&so&&e.memoizedState!==null&&cS(r,ui,e.memoizedState,e.memoizedProps);break;case 5:js(e,i,r);break;case 3:case 4:var o=ui;ui=Pl(e.stateNode.containerInfo),js(e,i,r),ui=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=so,so=16777216,js(e,i,r),so=o):js(e,i,r));break;default:js(e,i,r)}}function Km(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function ro(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var o=i[r];_n=o,Jm(o,e)}Km(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Qm(e),e=e.sibling}function Qm(e){switch(e.tag){case 0:case 11:case 15:ro(e),e.flags&2048&&_a(9,e,e.return);break;case 3:ro(e);break;case 12:ro(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,El(e)):ro(e);break;default:ro(e)}}function El(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var o=i[r];_n=o,Jm(o,e)}Km(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:_a(8,i,i.return),El(i);break;case 22:r=i.stateNode,r._visibility&2&&(r._visibility&=-3,El(i));break;default:El(i)}e=e.sibling}}function Jm(e,i){for(;_n!==null;){var r=_n;switch(r.tag){case 0:case 11:case 15:_a(8,r,i);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var o=r.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Xr(r.memoizedState.cache)}if(o=r.child,o!==null)o.return=r,_n=o;else t:for(r=e;_n!==null;){o=_n;var u=o.sibling,d=o.return;if(Vm(o),o===r){_n=null;break t}if(u!==null){u.return=d,_n=u;break t}_n=d}}}var Tx={getCacheForType:function(e){var i=Mn(sn),r=i.data.get(e);return r===void 0&&(r=e(),i.data.set(e,r)),r},cacheSignal:function(){return Mn(sn).controller.signal}},Ax=typeof WeakMap=="function"?WeakMap:Map,Ce=0,Ve=null,pe=null,_e=0,Ne=0,qn=null,va=!1,Ks=!1,nf=!1,qi=0,Qe=0,xa=0,rs=0,af=0,Yn=0,Qs=0,oo=null,zn=null,sf=!1,Tl=0,$m=0,Al=1/0,bl=null,Sa=null,hn=0,ya=null,Js=null,Yi=0,rf=0,of=null,tg=null,lo=0,lf=null;function Zn(){return(Ce&2)!==0&&_e!==0?_e&-_e:z.T!==null?pf():Va()}function eg(){if(Yn===0)if((_e&536870912)===0||Se){var e=Dt;Dt<<=1,(Dt&3932160)===0&&(Dt=262144),Yn=e}else Yn=536870912;return e=kn.current,e!==null&&(e.flags|=32),Yn}function Bn(e,i,r){(e===Ve&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)&&($s(e,0),Ma(e,_e,Yn,!1)),wn(e,r),((Ce&2)===0||e!==Ve)&&(e===Ve&&((Ce&2)===0&&(rs|=r),Qe===4&&Ma(e,_e,Yn,!1)),Ai(e))}function ng(e,i,r){if((Ce&6)!==0)throw Error(s(327));var o=!r&&(i&127)===0&&(i&e.expiredLanes)===0||Vt(e,i),u=o?Cx(e,i):uf(e,i,!0),d=o;do{if(u===0){Ks&&!o&&Ma(e,i,0,!1);break}else{if(r=e.current.alternate,d&&!bx(r)){u=uf(e,i,!1),d=!1;continue}if(u===2){if(d=i,e.errorRecoveryDisabledLanes&d)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){i=S;t:{var b=e;u=oo;var I=b.current.memoizedState.isDehydrated;if(I&&($s(b,S).flags|=256),S=uf(b,S,!1),S!==2){if(nf&&!I){b.errorRecoveryDisabledLanes|=d,rs|=d,u=4;break t}d=zn,zn=u,d!==null&&(zn===null?zn=d:zn.push.apply(zn,d))}u=S}if(d=!1,u!==2)continue}}if(u===1){$s(e,0),Ma(e,i,0,!0);break}t:{switch(o=e,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:Ma(o,i,Yn,!va);break t;case 2:zn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(u=Tl+300-A(),10<u)){if(Ma(o,i,Yn,!va),_t(o,0,!0)!==0)break t;Yi=i,o.timeoutHandle=Ng(ig.bind(null,o,r,zn,bl,sf,i,Yn,rs,Qs,va,d,"Throttled",-0,0),u);break t}ig(o,r,zn,bl,sf,i,Yn,rs,Qs,va,d,null,-0,0)}}break}while(!0);Ai(e)}function ig(e,i,r,o,u,d,S,b,I,et,dt,gt,at,ct){if(e.timeoutHandle=-1,gt=i.subtreeFlags,gt&8192||(gt&16785408)===16785408){gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Li},jm(i,d,gt);var kt=(d&62914560)===d?Tl-A():(d&4194048)===d?$m-A():0;if(kt=uS(gt,kt),kt!==null){Yi=d,e.cancelPendingCommit=kt(fg.bind(null,e,i,d,r,o,u,S,b,I,dt,gt,null,at,ct)),Ma(e,d,S,!et);return}}fg(e,i,d,r,o,u,S,b,I)}function bx(e){for(var i=e;;){var r=i.tag;if((r===0||r===11||r===15)&&i.flags&16384&&(r=i.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var o=0;o<r.length;o++){var u=r[o],d=u.getSnapshot;u=u.value;try{if(!Vn(d(),u))return!1}catch{return!1}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ma(e,i,r,o){i&=~af,i&=~rs,e.suspendedLanes|=i,e.pingedLanes&=~i,o&&(e.warmLanes|=i),o=e.expirationTimes;for(var u=i;0<u;){var d=31-Ut(u),S=1<<d;o[d]=-1,u&=~S}r!==0&&wr(e,r,i)}function Rl(){return(Ce&6)===0?(co(0),!1):!0}function cf(){if(pe!==null){if(Ne===0)var e=pe.return;else e=pe,Pi=Qa=null,Tu(e),Xs=null,Wr=0,e=pe;for(;e!==null;)Om(e.alternate,e),e=e.return;pe=null}}function $s(e,i){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,qx(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),Yi=0,cf(),Ve=e,pe=r=Oi(e.current,null),_e=i,Ne=0,qn=null,va=!1,Ks=Vt(e,i),nf=!1,Qs=Yn=af=rs=xa=Qe=0,zn=oo=null,sf=!1,(i&8)!==0&&(i|=i&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=i;0<o;){var u=31-Ut(o),d=1<<u;i|=e[u],o&=~d}return qi=i,Zo(),r}function ag(e,i){le=null,z.H=$r,i===Vs||i===nl?(i=Sp(),Ne=3):i===hu?(i=Sp(),Ne=4):Ne=i===Hu?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,qn=i,pe===null&&(Qe=1,gl(e,ei(i,e.current)))}function sg(){var e=kn.current;return e===null?!0:(_e&4194048)===_e?si===null:(_e&62914560)===_e||(_e&536870912)!==0?e===si:!1}function rg(){var e=z.H;return z.H=$r,e===null?$r:e}function og(){var e=z.A;return z.A=Tx,e}function Cl(){Qe=4,va||(_e&4194048)!==_e&&kn.current!==null||(Ks=!0),(xa&134217727)===0&&(rs&134217727)===0||Ve===null||Ma(Ve,_e,Yn,!1)}function uf(e,i,r){var o=Ce;Ce|=2;var u=rg(),d=og();(Ve!==e||_e!==i)&&(bl=null,$s(e,i)),i=!1;var S=Qe;t:do try{if(Ne!==0&&pe!==null){var b=pe,I=qn;switch(Ne){case 8:cf(),S=6;break t;case 3:case 2:case 9:case 6:kn.current===null&&(i=!0);var et=Ne;if(Ne=0,qn=null,tr(e,b,I,et),r&&Ks){S=0;break t}break;default:et=Ne,Ne=0,qn=null,tr(e,b,I,et)}}Rx(),S=Qe;break}catch(dt){ag(e,dt)}while(!0);return i&&e.shellSuspendCounter++,Pi=Qa=null,Ce=o,z.H=u,z.A=d,pe===null&&(Ve=null,_e=0,Zo()),S}function Rx(){for(;pe!==null;)lg(pe)}function Cx(e,i){var r=Ce;Ce|=2;var o=rg(),u=og();Ve!==e||_e!==i?(bl=null,Al=A()+500,$s(e,i)):Ks=Vt(e,i);t:do try{if(Ne!==0&&pe!==null){i=pe;var d=qn;e:switch(Ne){case 1:Ne=0,qn=null,tr(e,i,d,1);break;case 2:case 9:if(vp(d)){Ne=0,qn=null,cg(i);break}i=function(){Ne!==2&&Ne!==9||Ve!==e||(Ne=7),Ai(e)},d.then(i,i);break t;case 3:Ne=7;break t;case 4:Ne=5;break t;case 7:vp(d)?(Ne=0,qn=null,cg(i)):(Ne=0,qn=null,tr(e,i,d,7));break;case 5:var S=null;switch(pe.tag){case 26:S=pe.memoizedState;case 5:case 27:var b=pe;if(S?Zg(S):b.stateNode.complete){Ne=0,qn=null;var I=b.sibling;if(I!==null)pe=I;else{var et=b.return;et!==null?(pe=et,wl(et)):pe=null}break e}}Ne=0,qn=null,tr(e,i,d,5);break;case 6:Ne=0,qn=null,tr(e,i,d,6);break;case 8:cf(),Qe=6;break t;default:throw Error(s(462))}}wx();break}catch(dt){ag(e,dt)}while(!0);return Pi=Qa=null,z.H=o,z.A=u,Ce=r,pe!==null?0:(Ve=null,_e=0,Zo(),Qe)}function wx(){for(;pe!==null&&!Xe();)lg(pe)}function lg(e){var i=Lm(e.alternate,e,qi);e.memoizedProps=e.pendingProps,i===null?wl(e):pe=i}function cg(e){var i=e,r=i.alternate;switch(i.tag){case 15:case 0:i=bm(r,i,i.pendingProps,i.type,void 0,_e);break;case 11:i=bm(r,i,i.pendingProps,i.type.render,i.ref,_e);break;case 5:Tu(i);default:Om(r,i),i=pe=op(i,qi),i=Lm(r,i,qi)}e.memoizedProps=e.pendingProps,i===null?wl(e):pe=i}function tr(e,i,r,o){Pi=Qa=null,Tu(i),Xs=null,Wr=0;var u=i.return;try{if(_x(e,u,i,r,_e)){Qe=1,gl(e,ei(r,e.current)),pe=null;return}}catch(d){if(u!==null)throw pe=u,d;Qe=1,gl(e,ei(r,e.current)),pe=null;return}i.flags&32768?(Se||o===1?e=!0:Ks||(_e&536870912)!==0?e=!1:(va=e=!0,(o===2||o===9||o===3||o===6)&&(o=kn.current,o!==null&&o.tag===13&&(o.flags|=16384))),ug(i,e)):wl(i)}function wl(e){var i=e;do{if((i.flags&32768)!==0){ug(i,va);return}e=i.return;var r=Sx(i.alternate,i,qi);if(r!==null){pe=r;return}if(i=i.sibling,i!==null){pe=i;return}pe=i=e}while(i!==null);Qe===0&&(Qe=5)}function ug(e,i){do{var r=yx(e.alternate,e);if(r!==null){r.flags&=32767,pe=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!i&&(e=e.sibling,e!==null)){pe=e;return}pe=e=r}while(e!==null);Qe=6,pe=null}function fg(e,i,r,o,u,d,S,b,I){e.cancelPendingCommit=null;do Dl();while(hn!==0);if((Ce&6)!==0)throw Error(s(327));if(i!==null){if(i===e.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=Qc,$n(e,r,d,S,b,I),e===Ve&&(pe=Ve=null,_e=0),Js=i,ya=e,Yi=r,rf=d,of=u,tg=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Nx(ht,function(){return gg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=z.T,z.T=null,u=V.p,V.p=2,S=Ce,Ce|=4;try{Mx(e,i,r)}finally{Ce=S,V.p=u,z.T=o}}hn=1,hg(),dg(),pg()}}function hg(){if(hn===1){hn=0;var e=ya,i=Js,r=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||r){r=z.T,z.T=null;var o=V.p;V.p=2;var u=Ce;Ce|=4;try{qm(i,e);var d=Mf,S=Jd(e.containerInfo),b=d.focusedElem,I=d.selectionRange;if(S!==b&&b&&b.ownerDocument&&Qd(b.ownerDocument.documentElement,b)){if(I!==null&&qc(b)){var et=I.start,dt=I.end;if(dt===void 0&&(dt=et),"selectionStart"in b)b.selectionStart=et,b.selectionEnd=Math.min(dt,b.value.length);else{var gt=b.ownerDocument||document,at=gt&&gt.defaultView||window;if(at.getSelection){var ct=at.getSelection(),kt=b.textContent.length,te=Math.min(I.start,kt),ze=I.end===void 0?te:Math.min(I.end,kt);!ct.extend&&te>ze&&(S=ze,ze=te,te=S);var Z=Kd(b,te),k=Kd(b,ze);if(Z&&k&&(ct.rangeCount!==1||ct.anchorNode!==Z.node||ct.anchorOffset!==Z.offset||ct.focusNode!==k.node||ct.focusOffset!==k.offset)){var tt=gt.createRange();tt.setStart(Z.node,Z.offset),ct.removeAllRanges(),te>ze?(ct.addRange(tt),ct.extend(k.node,k.offset)):(tt.setEnd(k.node,k.offset),ct.addRange(tt))}}}}for(gt=[],ct=b;ct=ct.parentNode;)ct.nodeType===1&&gt.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<gt.length;b++){var mt=gt[b];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}Vl=!!yf,Mf=yf=null}finally{Ce=u,V.p=o,z.T=r}}e.current=i,hn=2}}function dg(){if(hn===2){hn=0;var e=ya,i=Js,r=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||r){r=z.T,z.T=null;var o=V.p;V.p=2;var u=Ce;Ce|=4;try{Gm(e,i.alternate,i)}finally{Ce=u,V.p=o,z.T=r}}hn=3}}function pg(){if(hn===4||hn===3){hn=0,L();var e=ya,i=Js,r=Yi,o=tg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?hn=5:(hn=0,Js=ya=null,mg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Sa=null),bs(r),i=i.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(vt,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=z.T,u=V.p,V.p=2,z.T=null;try{for(var d=e.onRecoverableError,S=0;S<o.length;S++){var b=o[S];d(b.value,{componentStack:b.stack})}}finally{z.T=i,V.p=u}}(Yi&3)!==0&&Dl(),Ai(e),u=e.pendingLanes,(r&261930)!==0&&(u&42)!==0?e===lf?lo++:(lo=0,lf=e):lo=0,co(0)}}function mg(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Xr(i)))}function Dl(){return hg(),dg(),pg(),gg()}function gg(){if(hn!==5)return!1;var e=ya,i=rf;rf=0;var r=bs(Yi),o=z.T,u=V.p;try{V.p=32>r?32:r,z.T=null,r=of,of=null;var d=ya,S=Yi;if(hn=0,Js=ya=null,Yi=0,(Ce&6)!==0)throw Error(s(331));var b=Ce;if(Ce|=4,Qm(d.current),Zm(d,d.current,S,r),Ce=b,co(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(vt,d)}catch{}return!0}finally{V.p=u,z.T=o,mg(e,i)}}function _g(e,i,r){i=ei(r,i),i=Iu(e.stateNode,i,2),e=pa(e,i,2),e!==null&&(wn(e,2),Ai(e))}function Oe(e,i,r){if(e.tag===3)_g(e,e,r);else for(;i!==null;){if(i.tag===3){_g(i,e,r);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Sa===null||!Sa.has(o))){e=ei(r,e),r=vm(2),o=pa(i,r,2),o!==null&&(xm(r,o,i,e),wn(o,2),Ai(o));break}}i=i.return}}function ff(e,i,r){var o=e.pingCache;if(o===null){o=e.pingCache=new Ax;var u=new Set;o.set(i,u)}else u=o.get(i),u===void 0&&(u=new Set,o.set(i,u));u.has(r)||(nf=!0,u.add(r),e=Dx.bind(null,e,i,r),i.then(e,e))}function Dx(e,i,r){var o=e.pingCache;o!==null&&o.delete(i),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,Ve===e&&(_e&r)===r&&(Qe===4||Qe===3&&(_e&62914560)===_e&&300>A()-Tl?(Ce&2)===0&&$s(e,0):af|=r,Qs===_e&&(Qs=0)),Ai(e)}function vg(e,i){i===0&&(i=Le()),e=Za(e,i),e!==null&&(wn(e,i),Ai(e))}function Ux(e){var i=e.memoizedState,r=0;i!==null&&(r=i.retryLane),vg(e,r)}function Lx(e,i){var r=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(r=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(i),vg(e,r)}function Nx(e,i){return ie(e,i)}var Ul=null,er=null,hf=!1,Ll=!1,df=!1,Ea=0;function Ai(e){e!==er&&e.next===null&&(er===null?Ul=er=e:er=er.next=e),Ll=!0,hf||(hf=!0,Fx())}function co(e,i){if(!df&&Ll){df=!0;do for(var r=!1,o=Ul;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var S=o.suspendedLanes,b=o.pingedLanes;d=(1<<31-Ut(42|e)+1)-1,d&=u&~(S&~b),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(r=!0,Mg(o,d))}else d=_e,d=_t(o,o===Ve?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Vt(o,d)||(r=!0,Mg(o,d));o=o.next}while(r);df=!1}}function Ox(){xg()}function xg(){Ll=hf=!1;var e=0;Ea!==0&&Wx()&&(e=Ea);for(var i=A(),r=null,o=Ul;o!==null;){var u=o.next,d=Sg(o,i);d===0?(o.next=null,r===null?Ul=u:r.next=u,u===null&&(er=r)):(r=o,(e!==0||(d&3)!==0)&&(Ll=!0)),o=u}hn!==0&&hn!==5||co(e),Ea!==0&&(Ea=0)}function Sg(e,i){for(var r=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var S=31-Ut(d),b=1<<S,I=u[S];I===-1?((b&r)===0||(b&o)!==0)&&(u[S]=se(b,i)):I<=i&&(e.expiredLanes|=b),d&=~b}if(i=Ve,r=_e,r=_t(e,e===i?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,r===0||e===i&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&We(o),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||Vt(e,r)){if(i=r&-r,i===e.callbackPriority)return i;switch(o!==null&&We(o),bs(r)){case 2:case 8:r=Mt;break;case 32:r=ht;break;case 268435456:r=Rt;break;default:r=ht}return o=yg.bind(null,e),r=ie(r,o),e.callbackPriority=i,e.callbackNode=r,i}return o!==null&&o!==null&&We(o),e.callbackPriority=2,e.callbackNode=null,2}function yg(e,i){if(hn!==0&&hn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(Dl()&&e.callbackNode!==r)return null;var o=_e;return o=_t(e,e===Ve?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(ng(e,o,i),Sg(e,A()),e.callbackNode!=null&&e.callbackNode===r?yg.bind(null,e):null)}function Mg(e,i){if(Dl())return null;ng(e,i,!0)}function Fx(){Yx(function(){(Ce&6)!==0?ie(pt,Ox):xg()})}function pf(){if(Ea===0){var e=Hs;e===0&&(e=Tt,Tt<<=1,(Tt&261888)===0&&(Tt=256)),Ea=e}return Ea}function Eg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ho(""+e)}function Tg(e,i){var r=i.ownerDocument.createElement("input");return r.name=i.name,r.value=i.value,e.id&&r.setAttribute("form",e.id),i.parentNode.insertBefore(r,i),e=new FormData(e),r.parentNode.removeChild(r),e}function Px(e,i,r,o,u){if(i==="submit"&&r&&r.stateNode===u){var d=Eg((u[xn]||null).action),S=o.submitter;S&&(i=(i=S[xn]||null)?Eg(i.formAction):S.getAttribute("formAction"),i!==null&&(d=i,S=null));var b=new ko("action","action",null,o,u);e.push({event:b,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ea!==0){var I=S?Tg(u,S):new FormData(u);Nu(r,{pending:!0,data:I,method:u.method,action:d},null,I)}}else typeof d=="function"&&(b.preventDefault(),I=S?Tg(u,S):new FormData(u),Nu(r,{pending:!0,data:I,method:u.method,action:d},d,I))},currentTarget:u}]})}}for(var mf=0;mf<Kc.length;mf++){var gf=Kc[mf],zx=gf.toLowerCase(),Bx=gf[0].toUpperCase()+gf.slice(1);ci(zx,"on"+Bx)}ci(ep,"onAnimationEnd"),ci(np,"onAnimationIteration"),ci(ip,"onAnimationStart"),ci("dblclick","onDoubleClick"),ci("focusin","onFocus"),ci("focusout","onBlur"),ci(tx,"onTransitionRun"),ci(ex,"onTransitionStart"),ci(nx,"onTransitionCancel"),ci(ap,"onTransitionEnd"),Kt("onMouseEnter",["mouseout","mouseover"]),Kt("onMouseLeave",["mouseout","mouseover"]),Kt("onPointerEnter",["pointerout","pointerover"]),Kt("onPointerLeave",["pointerout","pointerover"]),zt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),zt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),zt("onBeforeInput",["compositionend","keypress","textInput","paste"]),zt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),zt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),zt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ix=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(uo));function Ag(e,i){i=(i&4)!==0;for(var r=0;r<e.length;r++){var o=e[r],u=o.event;o=o.listeners;t:{var d=void 0;if(i)for(var S=o.length-1;0<=S;S--){var b=o[S],I=b.instance,et=b.currentTarget;if(b=b.listener,I!==d&&u.isPropagationStopped())break t;d=b,u.currentTarget=et;try{d(u)}catch(dt){Yo(dt)}u.currentTarget=null,d=I}else for(S=0;S<o.length;S++){if(b=o[S],I=b.instance,et=b.currentTarget,b=b.listener,I!==d&&u.isPropagationStopped())break t;d=b,u.currentTarget=et;try{d(u)}catch(dt){Yo(dt)}u.currentTarget=null,d=I}}}}function me(e,i){var r=i[Ur];r===void 0&&(r=i[Ur]=new Set);var o=e+"__bubble";r.has(o)||(bg(i,e,2,!1),r.add(o))}function _f(e,i,r){var o=0;i&&(o|=4),bg(r,e,o,i)}var Nl="_reactListening"+Math.random().toString(36).slice(2);function vf(e){if(!e[Nl]){e[Nl]=!0,Ot.forEach(function(r){r!=="selectionchange"&&(Ix.has(r)||_f(r,!1,e),_f(r,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[Nl]||(i[Nl]=!0,_f("selectionchange",!1,i))}}function bg(e,i,r,o){switch(e0(i)){case 2:var u=dS;break;case 8:u=pS;break;default:u=Nf}r=u.bind(null,i,r,e),u=void 0,!zc||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(i,r,{capture:!0,passive:u}):e.addEventListener(i,r,!0):u!==void 0?e.addEventListener(i,r,{passive:u}):e.addEventListener(i,r,!1)}function xf(e,i,r,o,u){var d=o;if((i&1)===0&&(i&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var b=o.stateNode.containerInfo;if(b===u)break;if(S===4)for(S=o.return;S!==null;){var I=S.tag;if((I===3||I===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;b!==null;){if(S=Y(b),S===null)return;if(I=S.tag,I===5||I===6||I===26||I===27){o=d=S;continue t}b=b.parentNode}}o=o.return}Ud(function(){var et=d,dt=Fc(r),gt=[];t:{var at=sp.get(e);if(at!==void 0){var ct=ko,kt=e;switch(e){case"keypress":if(Vo(r)===0)break t;case"keydown":case"keyup":ct=Lv;break;case"focusin":kt="focus",ct=Gc;break;case"focusout":kt="blur",ct=Gc;break;case"beforeblur":case"afterblur":ct=Gc;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=Od;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=Sv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=Fv;break;case ep:case np:case ip:ct=Ev;break;case ap:ct=zv;break;case"scroll":case"scrollend":ct=vv;break;case"wheel":ct=Iv;break;case"copy":case"cut":case"paste":ct=Av;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=Pd;break;case"toggle":case"beforetoggle":ct=Gv}var te=(i&4)!==0,ze=!te&&(e==="scroll"||e==="scrollend"),Z=te?at!==null?at+"Capture":null:at;te=[];for(var k=et,tt;k!==null;){var mt=k;if(tt=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||tt===null||Z===null||(mt=Lr(k,Z),mt!=null&&te.push(fo(k,mt,tt))),ze)break;k=k.return}0<te.length&&(at=new ct(at,kt,null,r,dt),gt.push({event:at,listeners:te}))}}if((i&7)===0){t:{if(at=e==="mouseover"||e==="pointerover",ct=e==="mouseout"||e==="pointerout",at&&r!==Oc&&(kt=r.relatedTarget||r.fromElement)&&(Y(kt)||kt[ra]))break t;if((ct||at)&&(at=dt.window===dt?dt:(at=dt.ownerDocument)?at.defaultView||at.parentWindow:window,ct?(kt=r.relatedTarget||r.toElement,ct=et,kt=kt?Y(kt):null,kt!==null&&(ze=c(kt),te=kt.tag,kt!==ze||te!==5&&te!==27&&te!==6)&&(kt=null)):(ct=null,kt=et),ct!==kt)){if(te=Od,mt="onMouseLeave",Z="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(te=Pd,mt="onPointerLeave",Z="onPointerEnter",k="pointer"),ze=ct==null?at:ot(ct),tt=kt==null?at:ot(kt),at=new te(mt,k+"leave",ct,r,dt),at.target=ze,at.relatedTarget=tt,mt=null,Y(dt)===et&&(te=new te(Z,k+"enter",kt,r,dt),te.target=tt,te.relatedTarget=ze,mt=te),ze=mt,ct&&kt)e:{for(te=Hx,Z=ct,k=kt,tt=0,mt=Z;mt;mt=te(mt))tt++;mt=0;for(var Jt=k;Jt;Jt=te(Jt))mt++;for(;0<tt-mt;)Z=te(Z),tt--;for(;0<mt-tt;)k=te(k),mt--;for(;tt--;){if(Z===k||k!==null&&Z===k.alternate){te=Z;break e}Z=te(Z),k=te(k)}te=null}else te=null;ct!==null&&Rg(gt,at,ct,te,!1),kt!==null&&ze!==null&&Rg(gt,ze,kt,te,!0)}}t:{if(at=et?ot(et):window,ct=at.nodeName&&at.nodeName.toLowerCase(),ct==="select"||ct==="input"&&at.type==="file")var Ae=kd;else if(Vd(at))if(Wd)Ae=Qv;else{Ae=jv;var Zt=Zv}else ct=at.nodeName,!ct||ct.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?et&&Nc(et.elementType)&&(Ae=kd):Ae=Kv;if(Ae&&(Ae=Ae(e,et))){Xd(gt,Ae,r,dt);break t}Zt&&Zt(e,at,et),e==="focusout"&&et&&at.type==="number"&&et.memoizedProps.value!=null&&fn(at,"number",at.value)}switch(Zt=et?ot(et):window,e){case"focusin":(Vd(Zt)||Zt.contentEditable==="true")&&(Ls=Zt,Yc=et,Hr=null);break;case"focusout":Hr=Yc=Ls=null;break;case"mousedown":Zc=!0;break;case"contextmenu":case"mouseup":case"dragend":Zc=!1,$d(gt,r,dt);break;case"selectionchange":if($v)break;case"keydown":case"keyup":$d(gt,r,dt)}var ce;if(Xc)t:{switch(e){case"compositionstart":var ve="onCompositionStart";break t;case"compositionend":ve="onCompositionEnd";break t;case"compositionupdate":ve="onCompositionUpdate";break t}ve=void 0}else Us?Hd(e,r)&&(ve="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(ve="onCompositionStart");ve&&(zd&&r.locale!=="ko"&&(Us||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Us&&(ce=Ld()):(oa=dt,Bc="value"in oa?oa.value:oa.textContent,Us=!0)),Zt=Ol(et,ve),0<Zt.length&&(ve=new Fd(ve,e,null,r,dt),gt.push({event:ve,listeners:Zt}),ce?ve.data=ce:(ce=Gd(r),ce!==null&&(ve.data=ce)))),(ce=Xv?kv(e,r):Wv(e,r))&&(ve=Ol(et,"onBeforeInput"),0<ve.length&&(Zt=new Fd("onBeforeInput","beforeinput",null,r,dt),gt.push({event:Zt,listeners:ve}),Zt.data=ce)),Px(gt,e,et,r,dt)}Ag(gt,i)})}function fo(e,i,r){return{instance:e,listener:i,currentTarget:r}}function Ol(e,i){for(var r=i+"Capture",o=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Lr(e,r),u!=null&&o.unshift(fo(e,u,d)),u=Lr(e,i),u!=null&&o.push(fo(e,u,d))),e.tag===3)return o;e=e.return}return[]}function Hx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Rg(e,i,r,o,u){for(var d=i._reactName,S=[];r!==null&&r!==o;){var b=r,I=b.alternate,et=b.stateNode;if(b=b.tag,I!==null&&I===o)break;b!==5&&b!==26&&b!==27||et===null||(I=et,u?(et=Lr(r,d),et!=null&&S.unshift(fo(r,et,I))):u||(et=Lr(r,d),et!=null&&S.push(fo(r,et,I)))),r=r.return}S.length!==0&&e.push({event:i,listeners:S})}var Gx=/\r\n?/g,Vx=/\u0000|\uFFFD/g;function Cg(e){return(typeof e=="string"?e:""+e).replace(Gx,`
`).replace(Vx,"")}function wg(e,i){return i=Cg(i),Cg(e)===i}function Pe(e,i,r,o,u,d){switch(r){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||Cs(e,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&Cs(e,""+o);break;case"className":De(e,"class",o);break;case"tabIndex":De(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":De(e,r,o);break;case"style":wd(e,o,d);break;case"data":if(i!=="object"){De(e,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||r!=="href")){e.removeAttribute(r);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(r);break}o=Ho(""+o),e.setAttribute(r,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(r==="formAction"?(i!=="input"&&Pe(e,i,"name",u.name,u,null),Pe(e,i,"formEncType",u.formEncType,u,null),Pe(e,i,"formMethod",u.formMethod,u,null),Pe(e,i,"formTarget",u.formTarget,u,null)):(Pe(e,i,"encType",u.encType,u,null),Pe(e,i,"method",u.method,u,null),Pe(e,i,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(r);break}o=Ho(""+o),e.setAttribute(r,o);break;case"onClick":o!=null&&(e.onclick=Li);break;case"onScroll":o!=null&&me("scroll",e);break;case"onScrollEnd":o!=null&&me("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(r=o.__html,r!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=r}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}r=Ho(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,""+o):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":o===!0?e.setAttribute(r,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,o):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(r,o):e.removeAttribute(r);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(r):e.setAttribute(r,o);break;case"popover":me("beforetoggle",e),me("toggle",e),Ge(e,"popover",o);break;case"xlinkActuate":de(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":de(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":de(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":de(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":de(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":de(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":de(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":de(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":de(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ge(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=gv.get(r)||r,Ge(e,r,o))}}function Sf(e,i,r,o,u,d){switch(r){case"style":wd(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(r=o.__html,r!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=r}}break;case"children":typeof o=="string"?Cs(e,o):(typeof o=="number"||typeof o=="bigint")&&Cs(e,""+o);break;case"onScroll":o!=null&&me("scroll",e);break;case"onScrollEnd":o!=null&&me("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Li);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Wt.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(u=r.endsWith("Capture"),i=r.slice(2,u?r.length-7:void 0),d=e[xn]||null,d=d!=null?d[r]:null,typeof d=="function"&&e.removeEventListener(i,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(i,o,u);break t}r in e?e[r]=o:o===!0?e.setAttribute(r,""):Ge(e,r,o)}}}function Tn(e,i,r){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",e),me("load",e);var o=!1,u=!1,d;for(d in r)if(r.hasOwnProperty(d)){var S=r[d];if(S!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Pe(e,i,d,S,r,null)}}u&&Pe(e,i,"srcSet",r.srcSet,r,null),o&&Pe(e,i,"src",r.src,r,null);return;case"input":me("invalid",e);var b=d=S=u=null,I=null,et=null;for(o in r)if(r.hasOwnProperty(o)){var dt=r[o];if(dt!=null)switch(o){case"name":u=dt;break;case"type":S=dt;break;case"checked":I=dt;break;case"defaultChecked":et=dt;break;case"value":d=dt;break;case"defaultValue":b=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(s(137,i));break;default:Pe(e,i,o,dt,r,null)}}Dn(e,d,b,I,et,S,u,!1);return;case"select":me("invalid",e),o=S=d=null;for(u in r)if(r.hasOwnProperty(u)&&(b=r[u],b!=null))switch(u){case"value":d=b;break;case"defaultValue":S=b;break;case"multiple":o=b;default:Pe(e,i,u,b,r,null)}i=d,r=S,e.multiple=!!o,i!=null?$e(e,!!o,i,!1):r!=null&&$e(e,!!o,r,!0);return;case"textarea":me("invalid",e),d=u=o=null;for(S in r)if(r.hasOwnProperty(S)&&(b=r[S],b!=null))switch(S){case"value":o=b;break;case"defaultValue":u=b;break;case"children":d=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Pe(e,i,S,b,r,null)}yi(e,o,u,d);return;case"option":for(I in r)if(r.hasOwnProperty(I)&&(o=r[I],o!=null))switch(I){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Pe(e,i,I,o,r,null)}return;case"dialog":me("beforetoggle",e),me("toggle",e),me("cancel",e),me("close",e);break;case"iframe":case"object":me("load",e);break;case"video":case"audio":for(o=0;o<uo.length;o++)me(uo[o],e);break;case"image":me("error",e),me("load",e);break;case"details":me("toggle",e);break;case"embed":case"source":case"link":me("error",e),me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in r)if(r.hasOwnProperty(et)&&(o=r[et],o!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Pe(e,i,et,o,r,null)}return;default:if(Nc(i)){for(dt in r)r.hasOwnProperty(dt)&&(o=r[dt],o!==void 0&&Sf(e,i,dt,o,r,void 0));return}}for(b in r)r.hasOwnProperty(b)&&(o=r[b],o!=null&&Pe(e,i,b,o,r,null))}function Xx(e,i,r,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,S=null,b=null,I=null,et=null,dt=null;for(ct in r){var gt=r[ct];if(r.hasOwnProperty(ct)&&gt!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":I=gt;default:o.hasOwnProperty(ct)||Pe(e,i,ct,null,o,gt)}}for(var at in o){var ct=o[at];if(gt=r[at],o.hasOwnProperty(at)&&(ct!=null||gt!=null))switch(at){case"type":d=ct;break;case"name":u=ct;break;case"checked":et=ct;break;case"defaultChecked":dt=ct;break;case"value":S=ct;break;case"defaultValue":b=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,i));break;default:ct!==gt&&Pe(e,i,at,ct,o,gt)}}An(e,S,b,I,et,dt,d,u);return;case"select":ct=S=b=at=null;for(d in r)if(I=r[d],r.hasOwnProperty(d)&&I!=null)switch(d){case"value":break;case"multiple":ct=I;default:o.hasOwnProperty(d)||Pe(e,i,d,null,o,I)}for(u in o)if(d=o[u],I=r[u],o.hasOwnProperty(u)&&(d!=null||I!=null))switch(u){case"value":at=d;break;case"defaultValue":b=d;break;case"multiple":S=d;default:d!==I&&Pe(e,i,u,d,o,I)}i=b,r=S,o=ct,at!=null?$e(e,!!r,at,!1):!!o!=!!r&&(i!=null?$e(e,!!r,i,!0):$e(e,!!r,r?[]:"",!1));return;case"textarea":ct=at=null;for(b in r)if(u=r[b],r.hasOwnProperty(b)&&u!=null&&!o.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Pe(e,i,b,null,o,u)}for(S in o)if(u=o[S],d=r[S],o.hasOwnProperty(S)&&(u!=null||d!=null))switch(S){case"value":at=u;break;case"defaultValue":ct=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&Pe(e,i,S,u,o,d)}Rs(e,at,ct);return;case"option":for(var kt in r)if(at=r[kt],r.hasOwnProperty(kt)&&at!=null&&!o.hasOwnProperty(kt))switch(kt){case"selected":e.selected=!1;break;default:Pe(e,i,kt,null,o,at)}for(I in o)if(at=o[I],ct=r[I],o.hasOwnProperty(I)&&at!==ct&&(at!=null||ct!=null))switch(I){case"selected":e.selected=at&&typeof at!="function"&&typeof at!="symbol";break;default:Pe(e,i,I,at,o,ct)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in r)at=r[te],r.hasOwnProperty(te)&&at!=null&&!o.hasOwnProperty(te)&&Pe(e,i,te,null,o,at);for(et in o)if(at=o[et],ct=r[et],o.hasOwnProperty(et)&&at!==ct&&(at!=null||ct!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(s(137,i));break;default:Pe(e,i,et,at,o,ct)}return;default:if(Nc(i)){for(var ze in r)at=r[ze],r.hasOwnProperty(ze)&&at!==void 0&&!o.hasOwnProperty(ze)&&Sf(e,i,ze,void 0,o,at);for(dt in o)at=o[dt],ct=r[dt],!o.hasOwnProperty(dt)||at===ct||at===void 0&&ct===void 0||Sf(e,i,dt,at,o,ct);return}}for(var Z in r)at=r[Z],r.hasOwnProperty(Z)&&at!=null&&!o.hasOwnProperty(Z)&&Pe(e,i,Z,null,o,at);for(gt in o)at=o[gt],ct=r[gt],!o.hasOwnProperty(gt)||at===ct||at==null&&ct==null||Pe(e,i,gt,at,o,ct)}function Dg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function kx(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,r=performance.getEntriesByType("resource"),o=0;o<r.length;o++){var u=r[o],d=u.transferSize,S=u.initiatorType,b=u.duration;if(d&&b&&Dg(S)){for(S=0,b=u.responseEnd,o+=1;o<r.length;o++){var I=r[o],et=I.startTime;if(et>b)break;var dt=I.transferSize,gt=I.initiatorType;dt&&Dg(gt)&&(I=I.responseEnd,S+=dt*(I<b?1:(b-et)/(I-et)))}if(--o,i+=8*(d+S)/(u.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var yf=null,Mf=null;function Fl(e){return e.nodeType===9?e:e.ownerDocument}function Ug(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Lg(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function Ef(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Tf=null;function Wx(){var e=window.event;return e&&e.type==="popstate"?e===Tf?!1:(Tf=e,!0):(Tf=null,!1)}var Ng=typeof setTimeout=="function"?setTimeout:void 0,qx=typeof clearTimeout=="function"?clearTimeout:void 0,Og=typeof Promise=="function"?Promise:void 0,Yx=typeof queueMicrotask=="function"?queueMicrotask:typeof Og<"u"?function(e){return Og.resolve(null).then(e).catch(Zx)}:Ng;function Zx(e){setTimeout(function(){throw e})}function Ta(e){return e==="head"}function Fg(e,i){var r=i,o=0;do{var u=r.nextSibling;if(e.removeChild(r),u&&u.nodeType===8)if(r=u.data,r==="/$"||r==="/&"){if(o===0){e.removeChild(u),sr(i);return}o--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")o++;else if(r==="html")ho(e.ownerDocument.documentElement);else if(r==="head"){r=e.ownerDocument.head,ho(r);for(var d=r.firstChild;d;){var S=d.nextSibling,b=d.nodeName;d[Xa]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&d.rel.toLowerCase()==="stylesheet"||r.removeChild(d),d=S}}else r==="body"&&ho(e.ownerDocument.body);r=u}while(r);sr(i)}function Pg(e,i){var r=e;e=0;do{var o=r.nextSibling;if(r.nodeType===1?i?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(i?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(e===0)break;e--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||e++;r=o}while(r)}function Af(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var r=i;switch(i=i.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Af(r),R(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function jx(e,i,r,o){for(;e.nodeType===1;){var u=r;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Xa])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=ri(e.nextSibling),e===null)break}return null}function Kx(e,i,r){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=ri(e.nextSibling),e===null))return null;return e}function zg(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=ri(e.nextSibling),e===null))return null;return e}function bf(e){return e.data==="$?"||e.data==="$~"}function Rf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Qx(e,i){var r=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||r.readyState!=="loading")i();else{var o=function(){i(),r.removeEventListener("DOMContentLoaded",o)};r.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function ri(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var Cf=null;function Bg(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"||r==="/&"){if(i===0)return ri(e.nextSibling);i--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||i++}e=e.nextSibling}return null}function Ig(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(i===0)return e;i--}else r!=="/$"&&r!=="/&"||i++}e=e.previousSibling}return null}function Hg(e,i,r){switch(i=Fl(r),e){case"html":if(e=i.documentElement,!e)throw Error(s(452));return e;case"head":if(e=i.head,!e)throw Error(s(453));return e;case"body":if(e=i.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function ho(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);R(e)}var oi=new Map,Gg=new Set;function Pl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Zi=V.d;V.d={f:Jx,r:$x,D:tS,C:eS,L:nS,m:iS,X:sS,S:aS,M:rS};function Jx(){var e=Zi.f(),i=Rl();return e||i}function $x(e){var i=rt(e);i!==null&&i.tag===5&&i.type==="form"?am(i):Zi.r(e)}var nr=typeof document>"u"?null:document;function Vg(e,i,r){var o=nr;if(o&&typeof i=="string"&&i){var u=ge(i);u='link[rel="'+e+'"][href="'+u+'"]',typeof r=="string"&&(u+='[crossorigin="'+r+'"]'),Gg.has(u)||(Gg.add(u),e={rel:e,crossOrigin:r,href:i},o.querySelector(u)===null&&(i=o.createElement("link"),Tn(i,"link",e),St(i),o.head.appendChild(i)))}}function tS(e){Zi.D(e),Vg("dns-prefetch",e,null)}function eS(e,i){Zi.C(e,i),Vg("preconnect",e,i)}function nS(e,i,r){Zi.L(e,i,r);var o=nr;if(o&&e&&i){var u='link[rel="preload"][as="'+ge(i)+'"]';i==="image"&&r&&r.imageSrcSet?(u+='[imagesrcset="'+ge(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(u+='[imagesizes="'+ge(r.imageSizes)+'"]')):u+='[href="'+ge(e)+'"]';var d=u;switch(i){case"style":d=ir(e);break;case"script":d=ar(e)}oi.has(d)||(e=_({rel:"preload",href:i==="image"&&r&&r.imageSrcSet?void 0:e,as:i},r),oi.set(d,e),o.querySelector(u)!==null||i==="style"&&o.querySelector(po(d))||i==="script"&&o.querySelector(mo(d))||(i=o.createElement("link"),Tn(i,"link",e),St(i),o.head.appendChild(i)))}}function iS(e,i){Zi.m(e,i);var r=nr;if(r&&e){var o=i&&typeof i.as=="string"?i.as:"script",u='link[rel="modulepreload"][as="'+ge(o)+'"][href="'+ge(e)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=ar(e)}if(!oi.has(d)&&(e=_({rel:"modulepreload",href:e},i),oi.set(d,e),r.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(mo(d)))return}o=r.createElement("link"),Tn(o,"link",e),St(o),r.head.appendChild(o)}}}function aS(e,i,r){Zi.S(e,i,r);var o=nr;if(o&&e){var u=K(o).hoistableStyles,d=ir(e);i=i||"default";var S=u.get(d);if(!S){var b={loading:0,preload:null};if(S=o.querySelector(po(d)))b.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":i},r),(r=oi.get(d))&&wf(e,r);var I=S=o.createElement("link");St(I),Tn(I,"link",e),I._p=new Promise(function(et,dt){I.onload=et,I.onerror=dt}),I.addEventListener("load",function(){b.loading|=1}),I.addEventListener("error",function(){b.loading|=2}),b.loading|=4,zl(S,i,o)}S={type:"stylesheet",instance:S,count:1,state:b},u.set(d,S)}}}function sS(e,i){Zi.X(e,i);var r=nr;if(r&&e){var o=K(r).hoistableScripts,u=ar(e),d=o.get(u);d||(d=r.querySelector(mo(u)),d||(e=_({src:e,async:!0},i),(i=oi.get(u))&&Df(e,i),d=r.createElement("script"),St(d),Tn(d,"link",e),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function rS(e,i){Zi.M(e,i);var r=nr;if(r&&e){var o=K(r).hoistableScripts,u=ar(e),d=o.get(u);d||(d=r.querySelector(mo(u)),d||(e=_({src:e,async:!0,type:"module"},i),(i=oi.get(u))&&Df(e,i),d=r.createElement("script"),St(d),Tn(d,"link",e),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Xg(e,i,r,o){var u=(u=it.current)?Pl(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(i=ir(r.href),r=K(u).hoistableStyles,o=r.get(i),o||(o={type:"style",instance:null,count:0,state:null},r.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=ir(r.href);var d=K(u).hoistableStyles,S=d.get(e);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,S),(d=u.querySelector(po(e)))&&!d._p&&(S.instance=d,S.state.loading=5),oi.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},oi.set(e,r),d||oS(u,e,r,S.state))),i&&o===null)throw Error(s(528,""));return S}if(i&&o!==null)throw Error(s(529,""));return null;case"script":return i=r.async,r=r.src,typeof r=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=ar(r),r=K(u).hoistableScripts,o=r.get(i),o||(o={type:"script",instance:null,count:0,state:null},r.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function ir(e){return'href="'+ge(e)+'"'}function po(e){return'link[rel="stylesheet"]['+e+"]"}function kg(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function oS(e,i,r,o){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=e.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),Tn(i,"link",r),St(i),e.head.appendChild(i))}function ar(e){return'[src="'+ge(e)+'"]'}function mo(e){return"script[async]"+e}function Wg(e,i,r){if(i.count++,i.instance===null)switch(i.type){case"style":var o=e.querySelector('style[data-href~="'+ge(r.href)+'"]');if(o)return i.instance=o,St(o),o;var u=_({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),St(o),Tn(o,"style",u),zl(o,r.precedence,e),i.instance=o;case"stylesheet":u=ir(r.href);var d=e.querySelector(po(u));if(d)return i.state.loading|=4,i.instance=d,St(d),d;o=kg(r),(u=oi.get(u))&&wf(o,u),d=(e.ownerDocument||e).createElement("link"),St(d);var S=d;return S._p=new Promise(function(b,I){S.onload=b,S.onerror=I}),Tn(d,"link",o),i.state.loading|=4,zl(d,r.precedence,e),i.instance=d;case"script":return d=ar(r.src),(u=e.querySelector(mo(d)))?(i.instance=u,St(u),u):(o=r,(u=oi.get(d))&&(o=_({},r),Df(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),St(u),Tn(u,"link",o),e.head.appendChild(u),i.instance=u);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,zl(o,r.precedence,e));return i.instance}function zl(e,i,r){for(var o=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,S=0;S<o.length;S++){var b=o[S];if(b.dataset.precedence===i)d=b;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=r.nodeType===9?r.head:r,i.insertBefore(e,i.firstChild))}function wf(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Df(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var Bl=null;function qg(e,i,r){if(Bl===null){var o=new Map,u=Bl=new Map;u.set(r,o)}else u=Bl,o=u.get(r),o||(o=new Map,u.set(r,o));if(o.has(e))return o;for(o.set(e,null),r=r.getElementsByTagName(e),u=0;u<r.length;u++){var d=r[u];if(!(d[Xa]||d[an]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var S=d.getAttribute(i)||"";S=e+S;var b=o.get(S);b?b.push(d):o.set(S,[d])}}return o}function Yg(e,i,r){e=e.ownerDocument||e,e.head.insertBefore(r,i==="title"?e.querySelector("head > title"):null)}function lS(e,i,r){if(r===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Zg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function cS(e,i,r,o){if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var u=ir(o.href),d=i.querySelector(po(u));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=Il.bind(e),i.then(e,e)),r.state.loading|=4,r.instance=d,St(d);return}d=i.ownerDocument||i,o=kg(o),(u=oi.get(u))&&wf(o,u),d=d.createElement("link"),St(d);var S=d;S._p=new Promise(function(b,I){S.onload=b,S.onerror=I}),Tn(d,"link",o),r.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(e.count++,r=Il.bind(e),i.addEventListener("load",r),i.addEventListener("error",r))}}var Uf=0;function uS(e,i){return e.stylesheets&&e.count===0&&Gl(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var o=setTimeout(function(){if(e.stylesheets&&Gl(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+i);0<e.imgBytes&&Uf===0&&(Uf=62500*kx());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Gl(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>Uf?50:800)+i);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Il(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Gl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Hl=null;function Gl(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Hl=new Map,i.forEach(fS,e),Hl=null,Il.call(e))}function fS(e,i){if(!(i.state.loading&4)){var r=Hl.get(e);if(r)var o=r.get(null);else{r=new Map,Hl.set(e,r);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var S=u[d];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(r.set(S.dataset.precedence,S),o=S)}o&&r.set(null,o)}u=i.instance,S=u.getAttribute("data-precedence"),d=r.get(S)||o,d===o&&r.set(null,u),r.set(S,u),this.count++,o=Il.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),i.state.loading|=4}}var go={$$typeof:U,Provider:null,Consumer:null,_currentValue:X,_currentValue2:X,_threadCount:0};function hS(e,i,r,o,u,d,S,b,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ee(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ee(0),this.hiddenUpdates=Ee(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function jg(e,i,r,o,u,d,S,b,I,et,dt,gt){return e=new hS(e,i,r,S,I,et,dt,gt,b),i=1,d===!0&&(i|=24),d=Xn(3,null,null,i),e.current=d,d.stateNode=e,i=cu(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:o,isDehydrated:r,cache:i},du(d),e}function Kg(e){return e?(e=Fs,e):Fs}function Qg(e,i,r,o,u,d){u=Kg(u),o.context===null?o.context=u:o.pendingContext=u,o=da(i),o.payload={element:r},d=d===void 0?null:d,d!==null&&(o.callback=d),r=pa(e,o,i),r!==null&&(Bn(r,e,i),Yr(r,e,i))}function Jg(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<i?r:i}}function Lf(e,i){Jg(e,i),(e=e.alternate)&&Jg(e,i)}function $g(e){if(e.tag===13||e.tag===31){var i=Za(e,67108864);i!==null&&Bn(i,e,67108864),Lf(e,67108864)}}function t0(e){if(e.tag===13||e.tag===31){var i=Zn();i=As(i);var r=Za(e,i);r!==null&&Bn(r,e,i),Lf(e,i)}}var Vl=!0;function dS(e,i,r,o){var u=z.T;z.T=null;var d=V.p;try{V.p=2,Nf(e,i,r,o)}finally{V.p=d,z.T=u}}function pS(e,i,r,o){var u=z.T;z.T=null;var d=V.p;try{V.p=8,Nf(e,i,r,o)}finally{V.p=d,z.T=u}}function Nf(e,i,r,o){if(Vl){var u=Of(o);if(u===null)xf(e,i,o,Xl,r),n0(e,o);else if(gS(u,e,i,r,o))o.stopPropagation();else if(n0(e,o),i&4&&-1<mS.indexOf(e)){for(;u!==null;){var d=rt(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var S=Et(d.pendingLanes);if(S!==0){var b=d;for(b.pendingLanes|=2,b.entangledLanes|=2;S;){var I=1<<31-Ut(S);b.entanglements[1]|=I,S&=~I}Ai(d),(Ce&6)===0&&(Al=A()+500,co(0))}}break;case 31:case 13:b=Za(d,2),b!==null&&Bn(b,d,2),Rl(),Lf(d,2)}if(d=Of(o),d===null&&xf(e,i,o,Xl,r),d===u)break;u=d}u!==null&&o.stopPropagation()}else xf(e,i,o,null,r)}}function Of(e){return e=Fc(e),Ff(e)}var Xl=null;function Ff(e){if(Xl=null,e=Y(e),e!==null){var i=c(e);if(i===null)e=null;else{var r=i.tag;if(r===13){if(e=f(i),e!==null)return e;e=null}else if(r===31){if(e=h(i),e!==null)return e;e=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return Xl=e,null}function e0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($()){case pt:return 2;case Mt:return 8;case ht:case jt:return 32;case Rt:return 268435456;default:return 32}default:return 32}}var Pf=!1,Aa=null,ba=null,Ra=null,_o=new Map,vo=new Map,Ca=[],mS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function n0(e,i){switch(e){case"focusin":case"focusout":Aa=null;break;case"dragenter":case"dragleave":ba=null;break;case"mouseover":case"mouseout":Ra=null;break;case"pointerover":case"pointerout":_o.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":vo.delete(i.pointerId)}}function xo(e,i,r,o,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:r,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},i!==null&&(i=rt(i),i!==null&&$g(i)),e):(e.eventSystemFlags|=o,i=e.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),e)}function gS(e,i,r,o,u){switch(i){case"focusin":return Aa=xo(Aa,e,i,r,o,u),!0;case"dragenter":return ba=xo(ba,e,i,r,o,u),!0;case"mouseover":return Ra=xo(Ra,e,i,r,o,u),!0;case"pointerover":var d=u.pointerId;return _o.set(d,xo(_o.get(d)||null,e,i,r,o,u)),!0;case"gotpointercapture":return d=u.pointerId,vo.set(d,xo(vo.get(d)||null,e,i,r,o,u)),!0}return!1}function i0(e){var i=Y(e.target);if(i!==null){var r=c(i);if(r!==null){if(i=r.tag,i===13){if(i=f(r),i!==null){e.blockedOn=i,Dr(e.priority,function(){t0(r)});return}}else if(i===31){if(i=h(r),i!==null){e.blockedOn=i,Dr(e.priority,function(){t0(r)});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kl(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var r=Of(e.nativeEvent);if(r===null){r=e.nativeEvent;var o=new r.constructor(r.type,r);Oc=o,r.target.dispatchEvent(o),Oc=null}else return i=rt(r),i!==null&&$g(i),e.blockedOn=r,!1;i.shift()}return!0}function a0(e,i,r){kl(e)&&r.delete(i)}function _S(){Pf=!1,Aa!==null&&kl(Aa)&&(Aa=null),ba!==null&&kl(ba)&&(ba=null),Ra!==null&&kl(Ra)&&(Ra=null),_o.forEach(a0),vo.forEach(a0)}function Wl(e,i){e.blockedOn===i&&(e.blockedOn=null,Pf||(Pf=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,_S)))}var ql=null;function s0(e){ql!==e&&(ql=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){ql===e&&(ql=null);for(var i=0;i<e.length;i+=3){var r=e[i],o=e[i+1],u=e[i+2];if(typeof o!="function"){if(Ff(o||r)===null)continue;break}var d=rt(r);d!==null&&(e.splice(i,3),i-=3,Nu(d,{pending:!0,data:u,method:r.method,action:o},o,u))}}))}function sr(e){function i(I){return Wl(I,e)}Aa!==null&&Wl(Aa,e),ba!==null&&Wl(ba,e),Ra!==null&&Wl(Ra,e),_o.forEach(i),vo.forEach(i);for(var r=0;r<Ca.length;r++){var o=Ca[r];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ca.length&&(r=Ca[0],r.blockedOn===null);)i0(r),r.blockedOn===null&&Ca.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(o=0;o<r.length;o+=3){var u=r[o],d=r[o+1],S=u[xn]||null;if(typeof d=="function")S||s0(r);else if(S){var b=null;if(d&&d.hasAttribute("formAction")){if(u=d,S=d[xn]||null)b=S.formAction;else if(Ff(u)!==null)continue}else b=S.action;typeof b=="function"?r[o+1]=b:(r.splice(o,3),o-=3),s0(r)}}}function r0(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function i(){u!==null&&(u(),u=null),o||setTimeout(r,20)}function r(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(r,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),u!==null&&(u(),u=null)}}}function zf(e){this._internalRoot=e}Yl.prototype.render=zf.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(s(409));var r=i.current,o=Zn();Qg(r,o,e,i,null,null)},Yl.prototype.unmount=zf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;Qg(e.current,2,null,e,null,null),Rl(),i[ra]=null}};function Yl(e){this._internalRoot=e}Yl.prototype.unstable_scheduleHydration=function(e){if(e){var i=Va();e={blockedOn:null,target:e,priority:i};for(var r=0;r<Ca.length&&i!==0&&i<Ca[r].priority;r++);Ca.splice(r,0,e),r===0&&i0(e)}};var o0=t.version;if(o0!=="19.2.0")throw Error(s(527,o0,"19.2.0"));V.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(i),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var vS={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zl.isDisabled&&Zl.supportsFiber)try{vt=Zl.inject(vS),bt=Zl}catch{}}return yo.createRoot=function(e,i){if(!l(e))throw Error(s(299));var r=!1,o="",u=pm,d=mm,S=gm;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(S=i.onRecoverableError)),i=jg(e,1,!1,null,null,r,o,null,u,d,S,r0),e[ra]=i.current,vf(e),new zf(i)},yo.hydrateRoot=function(e,i,r){if(!l(e))throw Error(s(299));var o=!1,u="",d=pm,S=mm,b=gm,I=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(d=r.onUncaughtError),r.onCaughtError!==void 0&&(S=r.onCaughtError),r.onRecoverableError!==void 0&&(b=r.onRecoverableError),r.formState!==void 0&&(I=r.formState)),i=jg(e,1,!0,i,r??null,o,u,I,d,S,b,r0),i.context=Kg(null),r=i.current,o=Zn(),o=As(o),u=da(o),u.callback=null,pa(r,u,o),r=o,i.current.lanes=r,wn(i,r),Ai(i),e[ra]=i.current,vf(e),new Yl(i)},yo.version="19.2.0",yo}var _0;function CS(){if(_0)return Hf.exports;_0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(t){console.error(t)}}return a(),Hf.exports=RS(),Hf.exports}var wS=CS();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _d="180",DS=0,v0=1,US=2,D_=1,LS=2,ta=3,Ha=0,Hn=1,ea=2,za=0,xs=1,x0=2,S0=3,y0=4,NS=5,ms=100,OS=101,FS=102,PS=103,zS=104,BS=200,IS=201,HS=202,GS=203,Ah=204,bh=205,VS=206,XS=207,kS=208,WS=209,qS=210,YS=211,ZS=212,jS=213,KS=214,Rh=0,Ch=1,wh=2,Mr=3,Dh=4,Uh=5,Lh=6,Nh=7,U_=0,QS=1,JS=2,Ba=0,$S=1,ty=2,ey=3,ny=4,iy=5,ay=6,sy=7,L_=300,Er=301,Tr=302,Oh=303,Fh=304,bc=306,Ph=1e3,_s=1001,zh=1002,vi=1003,ry=1004,jl=1005,Ri=1006,kf=1007,vs=1008,aa=1009,N_=1010,O_=1011,wo=1012,vd=1013,ys=1014,na=1015,Oo=1016,xd=1017,Sd=1018,Do=1020,F_=35902,P_=35899,z_=1021,B_=1022,_i=1023,Uo=1026,Lo=1027,I_=1028,yd=1029,H_=1030,Md=1031,Ed=1033,_c=33776,vc=33777,xc=33778,Sc=33779,Bh=35840,Ih=35841,Hh=35842,Gh=35843,Vh=36196,Xh=37492,kh=37496,Wh=37808,qh=37809,Yh=37810,Zh=37811,jh=37812,Kh=37813,Qh=37814,Jh=37815,$h=37816,td=37817,ed=37818,nd=37819,id=37820,ad=37821,sd=36492,rd=36494,od=36495,ld=36283,cd=36284,ud=36285,fd=36286,oy=3200,ly=3201,cy=0,uy=1,Pa="",Qn="srgb",Ar="srgb-linear",Ec="linear",Be="srgb",rr=7680,M0=519,fy=512,hy=513,dy=514,G_=515,py=516,my=517,gy=518,_y=519,E0=35044,T0="300 es",Ci=2e3,Tc=2001;class Rr{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(n)===-1&&s[t].push(n)}hasEventListener(t,n){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(n)!==-1}removeEventListener(t,n){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(n);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const s=n[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wf=Math.PI/180,hd=180/Math.PI;function Fo(){const a=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Rn[a&255]+Rn[a>>8&255]+Rn[a>>16&255]+Rn[a>>24&255]+"-"+Rn[t&255]+Rn[t>>8&255]+"-"+Rn[t>>16&15|64]+Rn[t>>24&255]+"-"+Rn[n&63|128]+Rn[n>>8&255]+"-"+Rn[n>>16&255]+Rn[n>>24&255]+Rn[s&255]+Rn[s>>8&255]+Rn[s>>16&255]+Rn[s>>24&255]).toLowerCase()}function ye(a,t,n){return Math.max(t,Math.min(n,a))}function vy(a,t){return(a%t+t)%t}function qf(a,t,n){return(1-n)*a+n*t}function Mo(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function In(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class Ue{constructor(t=0,n=0){Ue.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,s=this.y,l=t.elements;return this.x=l[0]*n+l[3]*s+l[6],this.y=l[1]*n+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=ye(this.x,t.x,n.x),this.y=ye(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=ye(this.x,t,n),this.y=ye(this.y,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(t)/n;return Math.acos(ye(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,s=this.y-t.y;return n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const s=Math.cos(n),l=Math.sin(n),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Po{constructor(t=0,n=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=s,this._w=l}static slerpFlat(t,n,s,l,c,f,h){let p=s[l+0],m=s[l+1],g=s[l+2],_=s[l+3];const x=c[f+0],M=c[f+1],E=c[f+2],T=c[f+3];if(h===0){t[n+0]=p,t[n+1]=m,t[n+2]=g,t[n+3]=_;return}if(h===1){t[n+0]=x,t[n+1]=M,t[n+2]=E,t[n+3]=T;return}if(_!==T||p!==x||m!==M||g!==E){let y=1-h;const v=p*x+m*M+g*E+_*T,P=v>=0?1:-1,U=1-v*v;if(U>Number.EPSILON){const B=Math.sqrt(U),O=Math.atan2(B,v*P);y=Math.sin(y*O)/B,h=Math.sin(h*O)/B}const C=h*P;if(p=p*y+x*C,m=m*y+M*C,g=g*y+E*C,_=_*y+T*C,y===1-h){const B=1/Math.sqrt(p*p+m*m+g*g+_*_);p*=B,m*=B,g*=B,_*=B}}t[n]=p,t[n+1]=m,t[n+2]=g,t[n+3]=_}static multiplyQuaternionsFlat(t,n,s,l,c,f){const h=s[l],p=s[l+1],m=s[l+2],g=s[l+3],_=c[f],x=c[f+1],M=c[f+2],E=c[f+3];return t[n]=h*E+g*_+p*M-m*x,t[n+1]=p*E+g*x+m*_-h*M,t[n+2]=m*E+g*M+h*x-p*_,t[n+3]=g*E-h*_-p*x-m*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,s,l){return this._x=t,this._y=n,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const s=t._x,l=t._y,c=t._z,f=t._order,h=Math.cos,p=Math.sin,m=h(s/2),g=h(l/2),_=h(c/2),x=p(s/2),M=p(l/2),E=p(c/2);switch(f){case"XYZ":this._x=x*g*_+m*M*E,this._y=m*M*_-x*g*E,this._z=m*g*E+x*M*_,this._w=m*g*_-x*M*E;break;case"YXZ":this._x=x*g*_+m*M*E,this._y=m*M*_-x*g*E,this._z=m*g*E-x*M*_,this._w=m*g*_+x*M*E;break;case"ZXY":this._x=x*g*_-m*M*E,this._y=m*M*_+x*g*E,this._z=m*g*E+x*M*_,this._w=m*g*_-x*M*E;break;case"ZYX":this._x=x*g*_-m*M*E,this._y=m*M*_+x*g*E,this._z=m*g*E-x*M*_,this._w=m*g*_+x*M*E;break;case"YZX":this._x=x*g*_+m*M*E,this._y=m*M*_+x*g*E,this._z=m*g*E-x*M*_,this._w=m*g*_-x*M*E;break;case"XZY":this._x=x*g*_-m*M*E,this._y=m*M*_-x*g*E,this._z=m*g*E+x*M*_,this._w=m*g*_+x*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const s=n/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,s=n[0],l=n[4],c=n[8],f=n[1],h=n[5],p=n[9],m=n[2],g=n[6],_=n[10],x=s+h+_;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(g-p)*M,this._y=(c-m)*M,this._z=(f-l)*M}else if(s>h&&s>_){const M=2*Math.sqrt(1+s-h-_);this._w=(g-p)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+m)/M}else if(h>_){const M=2*Math.sqrt(1+h-s-_);this._w=(c-m)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(p+g)/M}else{const M=2*Math.sqrt(1+_-s-h);this._w=(f-l)/M,this._x=(c+m)/M,this._y=(p+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let s=t.dot(n)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,n){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,n/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const s=t._x,l=t._y,c=t._z,f=t._w,h=n._x,p=n._y,m=n._z,g=n._w;return this._x=s*g+f*h+l*m-c*p,this._y=l*g+f*p+c*h-s*m,this._z=c*g+f*m+s*p-l*h,this._w=f*g-s*h-l*p-c*m,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const s=this._x,l=this._y,c=this._z,f=this._w;let h=f*t._w+s*t._x+l*t._y+c*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=f,this._x=s,this._y=l,this._z=c,this;const p=1-h*h;if(p<=Number.EPSILON){const M=1-n;return this._w=M*f+n*this._w,this._x=M*s+n*this._x,this._y=M*l+n*this._y,this._z=M*c+n*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,h),_=Math.sin((1-n)*g)/m,x=Math.sin(n*g)/m;return this._w=f*_+this._w*x,this._x=s*_+this._x*x,this._y=l*_+this._y*x,this._z=c*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,n,s){return this.copy(t).slerp(n,s)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class lt{constructor(t=0,n=0,s=0){lt.prototype.isVector3=!0,this.x=t,this.y=n,this.z=s}set(t,n,s){return s===void 0&&(s=this.z),this.x=t,this.y=n,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(A0.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(A0.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*n+c[3]*s+c[6]*l,this.y=c[1]*n+c[4]*s+c[7]*l,this.z=c[2]*n+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*n+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*n+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*n+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*n+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const n=this.x,s=this.y,l=this.z,c=t.x,f=t.y,h=t.z,p=t.w,m=2*(f*l-h*s),g=2*(h*n-c*l),_=2*(c*s-f*n);return this.x=n+p*m+f*_-h*g,this.y=s+p*g+h*m-c*_,this.z=l+p*_+c*g-f*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*n+c[4]*s+c[8]*l,this.y=c[1]*n+c[5]*s+c[9]*l,this.z=c[2]*n+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=ye(this.x,t.x,n.x),this.y=ye(this.y,t.y,n.y),this.z=ye(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=ye(this.x,t,n),this.y=ye(this.y,t,n),this.z=ye(this.z,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this.z=t.z+(n.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const s=t.x,l=t.y,c=t.z,f=n.x,h=n.y,p=n.z;return this.x=l*p-c*h,this.y=c*f-s*p,this.z=s*h-l*f,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const s=t.dot(this)/n;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Yf.copy(this).projectOnVector(t),this.sub(Yf)}reflect(t){return this.sub(Yf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(t)/n;return Math.acos(ye(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return n*n+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,s){const l=Math.sin(n)*t;return this.x=l*Math.sin(s),this.y=Math.cos(n)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,s){return this.x=t*Math.sin(n),this.y=s,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=s,this.z=l,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,s=Math.sqrt(1-n*n);return this.x=s*Math.cos(t),this.y=n,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yf=new lt,A0=new Po;class ue{constructor(t,n,s,l,c,f,h,p,m){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,s,l,c,f,h,p,m)}set(t,n,s,l,c,f,h,p,m){const g=this.elements;return g[0]=t,g[1]=l,g[2]=h,g[3]=n,g[4]=c,g[5]=p,g[6]=s,g[7]=f,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,s=t.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],this}extractBasis(t,n,s){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const s=t.elements,l=n.elements,c=this.elements,f=s[0],h=s[3],p=s[6],m=s[1],g=s[4],_=s[7],x=s[2],M=s[5],E=s[8],T=l[0],y=l[3],v=l[6],P=l[1],U=l[4],C=l[7],B=l[2],O=l[5],F=l[8];return c[0]=f*T+h*P+p*B,c[3]=f*y+h*U+p*O,c[6]=f*v+h*C+p*F,c[1]=m*T+g*P+_*B,c[4]=m*y+g*U+_*O,c[7]=m*v+g*C+_*F,c[2]=x*T+M*P+E*B,c[5]=x*y+M*U+E*O,c[8]=x*v+M*C+E*F,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],p=t[6],m=t[7],g=t[8];return n*f*g-n*h*m-s*c*g+s*h*p+l*c*m-l*f*p}invert(){const t=this.elements,n=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],p=t[6],m=t[7],g=t[8],_=g*f-h*m,x=h*p-g*c,M=m*c-f*p,E=n*_+s*x+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=_*T,t[1]=(l*m-g*s)*T,t[2]=(h*s-l*f)*T,t[3]=x*T,t[4]=(g*n-l*p)*T,t[5]=(l*c-h*n)*T,t[6]=M*T,t[7]=(s*p-m*n)*T,t[8]=(f*n-s*c)*T,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,s,l,c,f,h){const p=Math.cos(c),m=Math.sin(c);return this.set(s*p,s*m,-s*(p*f+m*h)+f+t,-l*m,l*p,-l*(-m*f+p*h)+h+n,0,0,1),this}scale(t,n){return this.premultiply(Zf.makeScale(t,n)),this}rotate(t){return this.premultiply(Zf.makeRotation(-t)),this}translate(t,n){return this.premultiply(Zf.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,-s,0,s,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,s=t.elements;for(let l=0;l<9;l++)if(n[l]!==s[l])return!1;return!0}fromArray(t,n=0){for(let s=0;s<9;s++)this.elements[s]=t[s+n];return this}toArray(t=[],n=0){const s=this.elements;return t[n]=s[0],t[n+1]=s[1],t[n+2]=s[2],t[n+3]=s[3],t[n+4]=s[4],t[n+5]=s[5],t[n+6]=s[6],t[n+7]=s[7],t[n+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Zf=new ue;function V_(a){for(let t=a.length-1;t>=0;--t)if(a[t]>=65535)return!0;return!1}function Ac(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function xy(){const a=Ac("canvas");return a.style.display="block",a}const b0={};function No(a){a in b0||(b0[a]=!0,console.warn(a))}function Sy(a,t,n){return new Promise(function(s,l){function c(){switch(a.clientWaitSync(t,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:l();break;case a.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:s()}}setTimeout(c,n)})}const R0=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),C0=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yy(){const a={enabled:!0,workingColorSpace:Ar,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Be&&(l.r=ia(l.r),l.g=ia(l.g),l.b=ia(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Be&&(l.r=yr(l.r),l.g=yr(l.g),l.b=yr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Pa?Ec:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return No("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return No("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],s=[.3127,.329];return a.define({[Ar]:{primaries:t,whitePoint:s,transfer:Ec,toXYZ:R0,fromXYZ:C0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Qn},outputColorSpaceConfig:{drawingBufferColorSpace:Qn}},[Qn]:{primaries:t,whitePoint:s,transfer:Be,toXYZ:R0,fromXYZ:C0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Qn}}}),a}const Re=yy();function ia(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function yr(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let or;class My{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{or===void 0&&(or=Ac("canvas")),or.width=t.width,or.height=t.height;const l=or.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=or}return s.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Ac("canvas");n.width=t.width,n.height=t.height;const s=n.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=ia(c[f]/255)*255;return s.putImageData(l,0,0),n}else if(t.data){const n=t.data.slice(0);for(let s=0;s<n.length;s++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[s]=Math.floor(ia(n[s]/255)*255):n[s]=ia(n[s]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ey=0;class Td{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ey++}),this.uuid=Fo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(jf(l[f].image)):c.push(jf(l[f]))}else c=jf(l);s.url=c}return n||(t.images[this.uuid]=s),s}}function jf(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?My.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ty=0;const Kf=new lt;let Di=class yc extends Rr{constructor(t=yc.DEFAULT_IMAGE,n=yc.DEFAULT_MAPPING,s=_s,l=_s,c=Ri,f=vs,h=_i,p=aa,m=yc.DEFAULT_ANISOTROPY,g=Pa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ty++}),this.uuid=Fo(),this.name="",this.source=new Td(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Kf).x}get height(){return this.source.getSize(Kf).y}get depth(){return this.source.getSize(Kf).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const s=t[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[n]=s}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),n||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==L_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ph:t.x=t.x-Math.floor(t.x);break;case _s:t.x=t.x<0?0:1;break;case zh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ph:t.y=t.y-Math.floor(t.y);break;case _s:t.y=t.y<0?0:1;break;case zh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Di.DEFAULT_IMAGE=null;Di.DEFAULT_MAPPING=L_;Di.DEFAULT_ANISOTROPY=1;class Je{constructor(t=0,n=0,s=0,l=1){Je.prototype.isVector4=!0,this.x=t,this.y=n,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,s,l){return this.x=t,this.y=n,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*n+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*n+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*n+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*n+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,s,l,c;const p=t.elements,m=p[0],g=p[4],_=p[8],x=p[1],M=p[5],E=p[9],T=p[2],y=p[6],v=p[10];if(Math.abs(g-x)<.01&&Math.abs(_-T)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+T)<.1&&Math.abs(E+y)<.1&&Math.abs(m+M+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const U=(m+1)/2,C=(M+1)/2,B=(v+1)/2,O=(g+x)/4,F=(_+T)/4,q=(E+y)/4;return U>C&&U>B?U<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(U),l=O/s,c=F/s):C>B?C<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(C),s=O/l,c=q/l):B<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(B),s=F/c,l=q/c),this.set(s,l,c,n),this}let P=Math.sqrt((y-E)*(y-E)+(_-T)*(_-T)+(x-g)*(x-g));return Math.abs(P)<.001&&(P=1),this.x=(y-E)/P,this.y=(_-T)/P,this.z=(x-g)/P,this.w=Math.acos((m+M+v-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=ye(this.x,t.x,n.x),this.y=ye(this.y,t.y,n.y),this.z=ye(this.z,t.z,n.z),this.w=ye(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=ye(this.x,t,n),this.y=ye(this.y,t,n),this.z=ye(this.z,t,n),this.w=ye(this.w,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this.z=t.z+(n.z-t.z)*s,this.w=t.w+(n.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ay extends Rr{constructor(t=1,n=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=s.depth,this.scissor=new Je(0,0,t,n),this.scissorTest=!1,this.viewport=new Je(0,0,t,n);const l={width:t,height:n,depth:s.depth},c=new Di(l);this.textures=[];const f=s.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const n={minFilter:Ri,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,s=1){if(this.width!==t||this.height!==n||this.depth!==s){this.width=t,this.height=n,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=n,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const l=Object.assign({},t.textures[n].image);this.textures[n].source=new Td(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ms extends Ay{constructor(t=1,n=1,s={}){super(t,n,s),this.isWebGLRenderTarget=!0}}class X_ extends Di{constructor(t=null,n=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:s,depth:l},this.magFilter=vi,this.minFilter=vi,this.wrapR=_s,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class by extends Di{constructor(t=null,n=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:s,depth:l},this.magFilter=vi,this.minFilter=vi,this.wrapR=_s,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zo{constructor(t=new lt(1/0,1/0,1/0),n=new lt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,s=t.length;n<s;n+=3)this.expandByPoint(hi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,s=t.count;n<s;n++)this.expandByPoint(hi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,s=t.length;n<s;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const s=hi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,hi):hi.fromBufferAttribute(c,f),hi.applyMatrix4(t.matrixWorld),this.expandByPoint(hi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Kl.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Kl.copy(s.boundingBox)),Kl.applyMatrix4(t.matrixWorld),this.union(Kl)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hi),hi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,s;return t.normal.x>0?(n=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),n<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Eo),Ql.subVectors(this.max,Eo),lr.subVectors(t.a,Eo),cr.subVectors(t.b,Eo),ur.subVectors(t.c,Eo),Da.subVectors(cr,lr),Ua.subVectors(ur,cr),os.subVectors(lr,ur);let n=[0,-Da.z,Da.y,0,-Ua.z,Ua.y,0,-os.z,os.y,Da.z,0,-Da.x,Ua.z,0,-Ua.x,os.z,0,-os.x,-Da.y,Da.x,0,-Ua.y,Ua.x,0,-os.y,os.x,0];return!Qf(n,lr,cr,ur,Ql)||(n=[1,0,0,0,1,0,0,0,1],!Qf(n,lr,cr,ur,Ql))?!1:(Jl.crossVectors(Da,Ua),n=[Jl.x,Jl.y,Jl.z],Qf(n,lr,cr,ur,Ql))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ji),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ji=[new lt,new lt,new lt,new lt,new lt,new lt,new lt,new lt],hi=new lt,Kl=new zo,lr=new lt,cr=new lt,ur=new lt,Da=new lt,Ua=new lt,os=new lt,Eo=new lt,Ql=new lt,Jl=new lt,ls=new lt;function Qf(a,t,n,s,l){for(let c=0,f=a.length-3;c<=f;c+=3){ls.fromArray(a,c);const h=l.x*Math.abs(ls.x)+l.y*Math.abs(ls.y)+l.z*Math.abs(ls.z),p=t.dot(ls),m=n.dot(ls),g=s.dot(ls);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>h)return!1}return!0}const Ry=new zo,To=new lt,Jf=new lt;class Ad{constructor(t=new lt,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const s=this.center;n!==void 0?s.copy(n):Ry.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const s=this.center.distanceToSquared(t);return n.copy(t),s>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;To.subVectors(t,this.center);const n=To.lengthSq();if(n>this.radius*this.radius){const s=Math.sqrt(n),l=(s-this.radius)*.5;this.center.addScaledVector(To,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Jf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(To.copy(t.center).add(Jf)),this.expandByPoint(To.copy(t.center).sub(Jf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Ki=new lt,$f=new lt,$l=new lt,La=new lt,th=new lt,tc=new lt,eh=new lt;class Cy{constructor(t=new lt,n=new lt(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ki)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const s=n.dot(this.direction);return s<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Ki.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Ki.copy(this.origin).addScaledVector(this.direction,n),Ki.distanceToSquared(t))}distanceSqToSegment(t,n,s,l){$f.copy(t).add(n).multiplyScalar(.5),$l.copy(n).sub(t).normalize(),La.copy(this.origin).sub($f);const c=t.distanceTo(n)*.5,f=-this.direction.dot($l),h=La.dot(this.direction),p=-La.dot($l),m=La.lengthSq(),g=Math.abs(1-f*f);let _,x,M,E;if(g>0)if(_=f*p-h,x=f*h-p,E=c*g,_>=0)if(x>=-E)if(x<=E){const T=1/g;_*=T,x*=T,M=_*(_+f*x+2*h)+x*(f*_+x+2*p)+m}else x=c,_=Math.max(0,-(f*x+h)),M=-_*_+x*(x+2*p)+m;else x=-c,_=Math.max(0,-(f*x+h)),M=-_*_+x*(x+2*p)+m;else x<=-E?(_=Math.max(0,-(-f*c+h)),x=_>0?-c:Math.min(Math.max(-c,-p),c),M=-_*_+x*(x+2*p)+m):x<=E?(_=0,x=Math.min(Math.max(-c,-p),c),M=x*(x+2*p)+m):(_=Math.max(0,-(f*c+h)),x=_>0?c:Math.min(Math.max(-c,-p),c),M=-_*_+x*(x+2*p)+m);else x=f>0?-c:c,_=Math.max(0,-(f*x+h)),M=-_*_+x*(x+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy($f).addScaledVector($l,x),M}intersectSphere(t,n){Ki.subVectors(t.center,this.origin);const s=Ki.dot(this.direction),l=Ki.dot(Ki)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=s-f,p=s+f;return p<0?null:h<0?this.at(p,n):this.at(h,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/n;return s>=0?s:null}intersectPlane(t,n){const s=this.distanceToPlane(t);return s===null?null:this.at(s,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let s,l,c,f,h,p;const m=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return m>=0?(s=(t.min.x-x.x)*m,l=(t.max.x-x.x)*m):(s=(t.max.x-x.x)*m,l=(t.min.x-x.x)*m),g>=0?(c=(t.min.y-x.y)*g,f=(t.max.y-x.y)*g):(c=(t.max.y-x.y)*g,f=(t.min.y-x.y)*g),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),_>=0?(h=(t.min.z-x.z)*_,p=(t.max.z-x.z)*_):(h=(t.max.z-x.z)*_,p=(t.min.z-x.z)*_),s>p||h>l)||((h>s||s!==s)&&(s=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,n)}intersectsBox(t){return this.intersectBox(t,Ki)!==null}intersectTriangle(t,n,s,l,c){th.subVectors(n,t),tc.subVectors(s,t),eh.crossVectors(th,tc);let f=this.direction.dot(eh),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;La.subVectors(this.origin,t);const p=h*this.direction.dot(tc.crossVectors(La,tc));if(p<0)return null;const m=h*this.direction.dot(th.cross(La));if(m<0||p+m>f)return null;const g=-h*La.dot(eh);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dn{constructor(t,n,s,l,c,f,h,p,m,g,_,x,M,E,T,y){dn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,s,l,c,f,h,p,m,g,_,x,M,E,T,y)}set(t,n,s,l,c,f,h,p,m,g,_,x,M,E,T,y){const v=this.elements;return v[0]=t,v[4]=n,v[8]=s,v[12]=l,v[1]=c,v[5]=f,v[9]=h,v[13]=p,v[2]=m,v[6]=g,v[10]=_,v[14]=x,v[3]=M,v[7]=E,v[11]=T,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dn().fromArray(this.elements)}copy(t){const n=this.elements,s=t.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],n[9]=s[9],n[10]=s[10],n[11]=s[11],n[12]=s[12],n[13]=s[13],n[14]=s[14],n[15]=s[15],this}copyPosition(t){const n=this.elements,s=t.elements;return n[12]=s[12],n[13]=s[13],n[14]=s[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,s){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,n,s){return this.set(t.x,n.x,s.x,0,t.y,n.y,s.y,0,t.z,n.z,s.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,s=t.elements,l=1/fr.setFromMatrixColumn(t,0).length(),c=1/fr.setFromMatrixColumn(t,1).length(),f=1/fr.setFromMatrixColumn(t,2).length();return n[0]=s[0]*l,n[1]=s[1]*l,n[2]=s[2]*l,n[3]=0,n[4]=s[4]*c,n[5]=s[5]*c,n[6]=s[6]*c,n[7]=0,n[8]=s[8]*f,n[9]=s[9]*f,n[10]=s[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),h=Math.sin(s),p=Math.cos(l),m=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const x=f*g,M=f*_,E=h*g,T=h*_;n[0]=p*g,n[4]=-p*_,n[8]=m,n[1]=M+E*m,n[5]=x-T*m,n[9]=-h*p,n[2]=T-x*m,n[6]=E+M*m,n[10]=f*p}else if(t.order==="YXZ"){const x=p*g,M=p*_,E=m*g,T=m*_;n[0]=x+T*h,n[4]=E*h-M,n[8]=f*m,n[1]=f*_,n[5]=f*g,n[9]=-h,n[2]=M*h-E,n[6]=T+x*h,n[10]=f*p}else if(t.order==="ZXY"){const x=p*g,M=p*_,E=m*g,T=m*_;n[0]=x-T*h,n[4]=-f*_,n[8]=E+M*h,n[1]=M+E*h,n[5]=f*g,n[9]=T-x*h,n[2]=-f*m,n[6]=h,n[10]=f*p}else if(t.order==="ZYX"){const x=f*g,M=f*_,E=h*g,T=h*_;n[0]=p*g,n[4]=E*m-M,n[8]=x*m+T,n[1]=p*_,n[5]=T*m+x,n[9]=M*m-E,n[2]=-m,n[6]=h*p,n[10]=f*p}else if(t.order==="YZX"){const x=f*p,M=f*m,E=h*p,T=h*m;n[0]=p*g,n[4]=T-x*_,n[8]=E*_+M,n[1]=_,n[5]=f*g,n[9]=-h*g,n[2]=-m*g,n[6]=M*_+E,n[10]=x-T*_}else if(t.order==="XZY"){const x=f*p,M=f*m,E=h*p,T=h*m;n[0]=p*g,n[4]=-_,n[8]=m*g,n[1]=x*_+T,n[5]=f*g,n[9]=M*_-E,n[2]=E*_-M,n[6]=h*g,n[10]=T*_+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wy,t,Dy)}lookAt(t,n,s){const l=this.elements;return jn.subVectors(t,n),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),Na.crossVectors(s,jn),Na.lengthSq()===0&&(Math.abs(s.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),Na.crossVectors(s,jn)),Na.normalize(),ec.crossVectors(jn,Na),l[0]=Na.x,l[4]=ec.x,l[8]=jn.x,l[1]=Na.y,l[5]=ec.y,l[9]=jn.y,l[2]=Na.z,l[6]=ec.z,l[10]=jn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const s=t.elements,l=n.elements,c=this.elements,f=s[0],h=s[4],p=s[8],m=s[12],g=s[1],_=s[5],x=s[9],M=s[13],E=s[2],T=s[6],y=s[10],v=s[14],P=s[3],U=s[7],C=s[11],B=s[15],O=l[0],F=l[4],q=l[8],D=l[12],w=l[1],G=l[5],j=l[9],J=l[13],Q=l[2],st=l[6],z=l[10],V=l[14],X=l[3],ft=l[7],yt=l[11],N=l[15];return c[0]=f*O+h*w+p*Q+m*X,c[4]=f*F+h*G+p*st+m*ft,c[8]=f*q+h*j+p*z+m*yt,c[12]=f*D+h*J+p*V+m*N,c[1]=g*O+_*w+x*Q+M*X,c[5]=g*F+_*G+x*st+M*ft,c[9]=g*q+_*j+x*z+M*yt,c[13]=g*D+_*J+x*V+M*N,c[2]=E*O+T*w+y*Q+v*X,c[6]=E*F+T*G+y*st+v*ft,c[10]=E*q+T*j+y*z+v*yt,c[14]=E*D+T*J+y*V+v*N,c[3]=P*O+U*w+C*Q+B*X,c[7]=P*F+U*G+C*st+B*ft,c[11]=P*q+U*j+C*z+B*yt,c[15]=P*D+U*J+C*V+B*N,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],s=t[4],l=t[8],c=t[12],f=t[1],h=t[5],p=t[9],m=t[13],g=t[2],_=t[6],x=t[10],M=t[14],E=t[3],T=t[7],y=t[11],v=t[15];return E*(+c*p*_-l*m*_-c*h*x+s*m*x+l*h*M-s*p*M)+T*(+n*p*M-n*m*x+c*f*x-l*f*M+l*m*g-c*p*g)+y*(+n*m*_-n*h*M-c*f*_+s*f*M+c*h*g-s*m*g)+v*(-l*h*g-n*p*_+n*h*x+l*f*_-s*f*x+s*p*g)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=n,l[14]=s),this}invert(){const t=this.elements,n=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],p=t[6],m=t[7],g=t[8],_=t[9],x=t[10],M=t[11],E=t[12],T=t[13],y=t[14],v=t[15],P=_*y*m-T*x*m+T*p*M-h*y*M-_*p*v+h*x*v,U=E*x*m-g*y*m-E*p*M+f*y*M+g*p*v-f*x*v,C=g*T*m-E*_*m+E*h*M-f*T*M-g*h*v+f*_*v,B=E*_*p-g*T*p-E*h*x+f*T*x+g*h*y-f*_*y,O=n*P+s*U+l*C+c*B;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/O;return t[0]=P*F,t[1]=(T*x*c-_*y*c-T*l*M+s*y*M+_*l*v-s*x*v)*F,t[2]=(h*y*c-T*p*c+T*l*m-s*y*m-h*l*v+s*p*v)*F,t[3]=(_*p*c-h*x*c-_*l*m+s*x*m+h*l*M-s*p*M)*F,t[4]=U*F,t[5]=(g*y*c-E*x*c+E*l*M-n*y*M-g*l*v+n*x*v)*F,t[6]=(E*p*c-f*y*c-E*l*m+n*y*m+f*l*v-n*p*v)*F,t[7]=(f*x*c-g*p*c+g*l*m-n*x*m-f*l*M+n*p*M)*F,t[8]=C*F,t[9]=(E*_*c-g*T*c-E*s*M+n*T*M+g*s*v-n*_*v)*F,t[10]=(f*T*c-E*h*c+E*s*m-n*T*m-f*s*v+n*h*v)*F,t[11]=(g*h*c-f*_*c-g*s*m+n*_*m+f*s*M-n*h*M)*F,t[12]=B*F,t[13]=(g*T*l-E*_*l+E*s*x-n*T*x-g*s*y+n*_*y)*F,t[14]=(E*h*l-f*T*l-E*s*p+n*T*p+f*s*y-n*h*y)*F,t[15]=(f*_*l-g*h*l+g*s*p-n*_*p-f*s*x+n*h*x)*F,this}scale(t){const n=this.elements,s=t.x,l=t.y,c=t.z;return n[0]*=s,n[4]*=l,n[8]*=c,n[1]*=s,n[5]*=l,n[9]*=c,n[2]*=s,n[6]*=l,n[10]*=c,n[3]*=s,n[7]*=l,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,s,l))}makeTranslation(t,n,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,s,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,n,-s,0,0,s,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,0,s,0,0,1,0,0,-s,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,-s,0,0,s,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const s=Math.cos(n),l=Math.sin(n),c=1-s,f=t.x,h=t.y,p=t.z,m=c*f,g=c*h;return this.set(m*f+s,m*h-l*p,m*p+l*h,0,m*h+l*p,g*h+s,g*p-l*f,0,m*p-l*h,g*p+l*f,c*p*p+s,0,0,0,0,1),this}makeScale(t,n,s){return this.set(t,0,0,0,0,n,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,n,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,n,l,1,0,0,0,0,1),this}compose(t,n,s){const l=this.elements,c=n._x,f=n._y,h=n._z,p=n._w,m=c+c,g=f+f,_=h+h,x=c*m,M=c*g,E=c*_,T=f*g,y=f*_,v=h*_,P=p*m,U=p*g,C=p*_,B=s.x,O=s.y,F=s.z;return l[0]=(1-(T+v))*B,l[1]=(M+C)*B,l[2]=(E-U)*B,l[3]=0,l[4]=(M-C)*O,l[5]=(1-(x+v))*O,l[6]=(y+P)*O,l[7]=0,l[8]=(E+U)*F,l[9]=(y-P)*F,l[10]=(1-(x+T))*F,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,n,s){const l=this.elements;let c=fr.set(l[0],l[1],l[2]).length();const f=fr.set(l[4],l[5],l[6]).length(),h=fr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],di.copy(this);const m=1/c,g=1/f,_=1/h;return di.elements[0]*=m,di.elements[1]*=m,di.elements[2]*=m,di.elements[4]*=g,di.elements[5]*=g,di.elements[6]*=g,di.elements[8]*=_,di.elements[9]*=_,di.elements[10]*=_,n.setFromRotationMatrix(di),s.x=c,s.y=f,s.z=h,this}makePerspective(t,n,s,l,c,f,h=Ci,p=!1){const m=this.elements,g=2*c/(n-t),_=2*c/(s-l),x=(n+t)/(n-t),M=(s+l)/(s-l);let E,T;if(p)E=c/(f-c),T=f*c/(f-c);else if(h===Ci)E=-(f+c)/(f-c),T=-2*f*c/(f-c);else if(h===Tc)E=-f/(f-c),T=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=g,m[4]=0,m[8]=x,m[12]=0,m[1]=0,m[5]=_,m[9]=M,m[13]=0,m[2]=0,m[6]=0,m[10]=E,m[14]=T,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,n,s,l,c,f,h=Ci,p=!1){const m=this.elements,g=2/(n-t),_=2/(s-l),x=-(n+t)/(n-t),M=-(s+l)/(s-l);let E,T;if(p)E=1/(f-c),T=f/(f-c);else if(h===Ci)E=-2/(f-c),T=-(f+c)/(f-c);else if(h===Tc)E=-1/(f-c),T=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=g,m[4]=0,m[8]=0,m[12]=x,m[1]=0,m[5]=_,m[9]=0,m[13]=M,m[2]=0,m[6]=0,m[10]=E,m[14]=T,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const n=this.elements,s=t.elements;for(let l=0;l<16;l++)if(n[l]!==s[l])return!1;return!0}fromArray(t,n=0){for(let s=0;s<16;s++)this.elements[s]=t[s+n];return this}toArray(t=[],n=0){const s=this.elements;return t[n]=s[0],t[n+1]=s[1],t[n+2]=s[2],t[n+3]=s[3],t[n+4]=s[4],t[n+5]=s[5],t[n+6]=s[6],t[n+7]=s[7],t[n+8]=s[8],t[n+9]=s[9],t[n+10]=s[10],t[n+11]=s[11],t[n+12]=s[12],t[n+13]=s[13],t[n+14]=s[14],t[n+15]=s[15],t}}const fr=new lt,di=new dn,wy=new lt(0,0,0),Dy=new lt(1,1,1),Na=new lt,ec=new lt,jn=new lt,w0=new dn,D0=new Po;let Es=class k_{constructor(t=0,n=0,s=0,l=k_.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,s,l=this._order){return this._x=t,this._y=n,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],h=l[8],p=l[1],m=l[5],g=l[9],_=l[2],x=l[6],M=l[10];switch(n){case"XYZ":this._y=Math.asin(ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(ye(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-ye(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(ye(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-ye(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,s){return w0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(w0,n,s)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return D0.setFromEuler(this),this.setFromQuaternion(D0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Es.DEFAULT_ORDER="XYZ";class W_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Uy=0;const U0=new lt,hr=new Po,Qi=new dn,nc=new lt,Ao=new lt,Ly=new lt,Ny=new Po,L0=new lt(1,0,0),N0=new lt(0,1,0),O0=new lt(0,0,1),F0={type:"added"},Oy={type:"removed"},dr={type:"childadded",child:null},nh={type:"childremoved",child:null};class Jn extends Rr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uy++}),this.uuid=Fo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jn.DEFAULT_UP.clone();const t=new lt,n=new Es,s=new Po,l=new lt(1,1,1);function c(){s.setFromEuler(n,!1)}function f(){n.setFromQuaternion(s,void 0,!1)}n._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new dn},normalMatrix:{value:new ue}}),this.matrix=new dn,this.matrixWorld=new dn,this.matrixAutoUpdate=Jn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new W_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return hr.setFromAxisAngle(t,n),this.quaternion.multiply(hr),this}rotateOnWorldAxis(t,n){return hr.setFromAxisAngle(t,n),this.quaternion.premultiply(hr),this}rotateX(t){return this.rotateOnAxis(L0,t)}rotateY(t){return this.rotateOnAxis(N0,t)}rotateZ(t){return this.rotateOnAxis(O0,t)}translateOnAxis(t,n){return U0.copy(t).applyQuaternion(this.quaternion),this.position.add(U0.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(L0,t)}translateY(t){return this.translateOnAxis(N0,t)}translateZ(t){return this.translateOnAxis(O0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(t,n,s){t.isVector3?nc.copy(t):nc.set(t,n,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(Ao,nc,this.up):Qi.lookAt(nc,Ao,this.up),this.quaternion.setFromRotationMatrix(Qi),l&&(Qi.extractRotation(l.matrixWorld),hr.setFromRotationMatrix(Qi),this.quaternion.premultiply(hr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(F0),dr.child=t,this.dispatchEvent(dr),dr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(Oy),nh.child=t,this.dispatchEvent(nh),nh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(F0),dr.child=t,this.dispatchEvent(dr),dr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,n);if(f!==void 0)return f}}getObjectsByProperty(t,n,s=[]){this[t]===n&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,n,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,t,Ly),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,Ny,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let s=0,l=n.length;s<l;s++)n[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let s=0,l=n.length;s<l;s++)n[s].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let s=0,l=n.length;s<l;s++)n[s].updateMatrixWorld(t)}updateWorldMatrix(t,n){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",s={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const _=p[m];c(t.shapes,_)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(c(t.materials,this.material[p]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(c(t.animations,p))}}if(n){const h=f(t.geometries),p=f(t.materials),m=f(t.textures),g=f(t.images),_=f(t.shapes),x=f(t.skeletons),M=f(t.animations),E=f(t.nodes);h.length>0&&(s.geometries=h),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),x.length>0&&(s.skeletons=x),M.length>0&&(s.animations=M),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(h){const p=[];for(const m in h){const g=h[m];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Jn.DEFAULT_UP=new lt(0,1,0);Jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pi=new lt,Ji=new lt,ih=new lt,$i=new lt,pr=new lt,mr=new lt,P0=new lt,ah=new lt,sh=new lt,rh=new lt,oh=new Je,lh=new Je,ch=new Je;class gi{constructor(t=new lt,n=new lt,s=new lt){this.a=t,this.b=n,this.c=s}static getNormal(t,n,s,l){l.subVectors(s,n),pi.subVectors(t,n),l.cross(pi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,n,s,l,c){pi.subVectors(l,n),Ji.subVectors(s,n),ih.subVectors(t,n);const f=pi.dot(pi),h=pi.dot(Ji),p=pi.dot(ih),m=Ji.dot(Ji),g=Ji.dot(ih),_=f*m-h*h;if(_===0)return c.set(0,0,0),null;const x=1/_,M=(m*p-h*g)*x,E=(f*g-h*p)*x;return c.set(1-M-E,E,M)}static containsPoint(t,n,s,l){return this.getBarycoord(t,n,s,l,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(t,n,s,l,c,f,h,p){return this.getBarycoord(t,n,s,l,$i)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,$i.x),p.addScaledVector(f,$i.y),p.addScaledVector(h,$i.z),p)}static getInterpolatedAttribute(t,n,s,l,c,f){return oh.setScalar(0),lh.setScalar(0),ch.setScalar(0),oh.fromBufferAttribute(t,n),lh.fromBufferAttribute(t,s),ch.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(oh,c.x),f.addScaledVector(lh,c.y),f.addScaledVector(ch,c.z),f}static isFrontFacing(t,n,s,l){return pi.subVectors(s,n),Ji.subVectors(t,n),pi.cross(Ji).dot(l)<0}set(t,n,s){return this.a.copy(t),this.b.copy(n),this.c.copy(s),this}setFromPointsAndIndices(t,n,s,l){return this.a.copy(t[n]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,n,s,l){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pi.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),pi.cross(Ji).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return gi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return gi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,s,l,c){return gi.getInterpolation(t,this.a,this.b,this.c,n,s,l,c)}containsPoint(t){return gi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return gi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const s=this.a,l=this.b,c=this.c;let f,h;pr.subVectors(l,s),mr.subVectors(c,s),ah.subVectors(t,s);const p=pr.dot(ah),m=mr.dot(ah);if(p<=0&&m<=0)return n.copy(s);sh.subVectors(t,l);const g=pr.dot(sh),_=mr.dot(sh);if(g>=0&&_<=g)return n.copy(l);const x=p*_-g*m;if(x<=0&&p>=0&&g<=0)return f=p/(p-g),n.copy(s).addScaledVector(pr,f);rh.subVectors(t,c);const M=pr.dot(rh),E=mr.dot(rh);if(E>=0&&M<=E)return n.copy(c);const T=M*m-p*E;if(T<=0&&m>=0&&E<=0)return h=m/(m-E),n.copy(s).addScaledVector(mr,h);const y=g*E-M*_;if(y<=0&&_-g>=0&&M-E>=0)return P0.subVectors(c,l),h=(_-g)/(_-g+(M-E)),n.copy(l).addScaledVector(P0,h);const v=1/(y+T+x);return f=T*v,h=x*v,n.copy(s).addScaledVector(pr,f).addScaledVector(mr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const q_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oa={h:0,s:0,l:0},ic={h:0,s:0,l:0};function uh(a,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?a+(t-a)*6*n:n<1/2?t:n<2/3?a+(t-a)*6*(2/3-n):a}class He{constructor(t,n,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,s)}set(t,n,s){if(n===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,n,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Qn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Re.colorSpaceToWorking(this,n),this}setRGB(t,n,s,l=Re.workingColorSpace){return this.r=t,this.g=n,this.b=s,Re.colorSpaceToWorking(this,l),this}setHSL(t,n,s,l=Re.workingColorSpace){if(t=vy(t,1),n=ye(n,0,1),s=ye(s,0,1),n===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+n):s+n-s*n,f=2*s-c;this.r=uh(f,c,t+1/3),this.g=uh(f,c,t),this.b=uh(f,c,t-1/3)}return Re.colorSpaceToWorking(this,l),this}setStyle(t,n=Qn){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Qn){const s=q_[t.toLowerCase()];return s!==void 0?this.setHex(s,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ia(t.r),this.g=ia(t.g),this.b=ia(t.b),this}copyLinearToSRGB(t){return this.r=yr(t.r),this.g=yr(t.g),this.b=yr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qn){return Re.workingToColorSpace(Cn.copy(this),t),Math.round(ye(Cn.r*255,0,255))*65536+Math.round(ye(Cn.g*255,0,255))*256+Math.round(ye(Cn.b*255,0,255))}getHexString(t=Qn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Re.workingColorSpace){Re.workingToColorSpace(Cn.copy(this),n);const s=Cn.r,l=Cn.g,c=Cn.b,f=Math.max(s,l,c),h=Math.min(s,l,c);let p,m;const g=(h+f)/2;if(h===f)p=0,m=0;else{const _=f-h;switch(m=g<=.5?_/(f+h):_/(2-f-h),f){case s:p=(l-c)/_+(l<c?6:0);break;case l:p=(c-s)/_+2;break;case c:p=(s-l)/_+4;break}p/=6}return t.h=p,t.s=m,t.l=g,t}getRGB(t,n=Re.workingColorSpace){return Re.workingToColorSpace(Cn.copy(this),n),t.r=Cn.r,t.g=Cn.g,t.b=Cn.b,t}getStyle(t=Qn){Re.workingToColorSpace(Cn.copy(this),t);const n=Cn.r,s=Cn.g,l=Cn.b;return t!==Qn?`color(${t} ${n.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,n,s){return this.getHSL(Oa),this.setHSL(Oa.h+t,Oa.s+n,Oa.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,s){return this.r=t.r+(n.r-t.r)*s,this.g=t.g+(n.g-t.g)*s,this.b=t.b+(n.b-t.b)*s,this}lerpHSL(t,n){this.getHSL(Oa),t.getHSL(ic);const s=qf(Oa.h,ic.h,n),l=qf(Oa.s,ic.s,n),c=qf(Oa.l,ic.l,n);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*n+c[3]*s+c[6]*l,this.g=c[1]*n+c[4]*s+c[7]*l,this.b=c[2]*n+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new He;He.NAMES=q_;let Fy=0;class Rc extends Rr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fy++}),this.uuid=Fo(),this.name="",this.type="Material",this.blending=xs,this.side=Ha,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ah,this.blendDst=bh,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=Mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=M0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rr,this.stencilZFail=rr,this.stencilZPass=rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const s=t[n];if(s===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[n]=s}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(s.blending=this.blending),this.side!==Ha&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Ah&&(s.blendSrc=this.blendSrc),this.blendDst!==bh&&(s.blendDst=this.blendDst),this.blendEquation!==ms&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Mr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==M0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==rr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==rr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const h in c){const p=c[h];delete p.metadata,f.push(p)}return f}if(n){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let s=null;if(n!==null){const l=n.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=n[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Y_ extends Rc{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Es,this.combine=U_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const cn=new lt,ac=new Ue;let Py=0;class xi{constructor(t,n,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Py++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=s,this.usage=E0,this.updateRanges=[],this.gpuType=na,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,s){t*=this.itemSize,s*=n.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=n.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,s=this.count;n<s;n++)ac.fromBufferAttribute(this,n),ac.applyMatrix3(t),this.setXY(n,ac.x,ac.y);else if(this.itemSize===3)for(let n=0,s=this.count;n<s;n++)cn.fromBufferAttribute(this,n),cn.applyMatrix3(t),this.setXYZ(n,cn.x,cn.y,cn.z);return this}applyMatrix4(t){for(let n=0,s=this.count;n<s;n++)cn.fromBufferAttribute(this,n),cn.applyMatrix4(t),this.setXYZ(n,cn.x,cn.y,cn.z);return this}applyNormalMatrix(t){for(let n=0,s=this.count;n<s;n++)cn.fromBufferAttribute(this,n),cn.applyNormalMatrix(t),this.setXYZ(n,cn.x,cn.y,cn.z);return this}transformDirection(t){for(let n=0,s=this.count;n<s;n++)cn.fromBufferAttribute(this,n),cn.transformDirection(t),this.setXYZ(n,cn.x,cn.y,cn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let s=this.array[t*this.itemSize+n];return this.normalized&&(s=Mo(s,this.array)),s}setComponent(t,n,s){return this.normalized&&(s=In(s,this.array)),this.array[t*this.itemSize+n]=s,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Mo(n,this.array)),n}setX(t,n){return this.normalized&&(n=In(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Mo(n,this.array)),n}setY(t,n){return this.normalized&&(n=In(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Mo(n,this.array)),n}setZ(t,n){return this.normalized&&(n=In(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Mo(n,this.array)),n}setW(t,n){return this.normalized&&(n=In(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,s){return t*=this.itemSize,this.normalized&&(n=In(n,this.array),s=In(s,this.array)),this.array[t+0]=n,this.array[t+1]=s,this}setXYZ(t,n,s,l){return t*=this.itemSize,this.normalized&&(n=In(n,this.array),s=In(s,this.array),l=In(l,this.array)),this.array[t+0]=n,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,n,s,l,c){return t*=this.itemSize,this.normalized&&(n=In(n,this.array),s=In(s,this.array),l=In(l,this.array),c=In(c,this.array)),this.array[t+0]=n,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==E0&&(t.usage=this.usage),t}}class Z_ extends xi{constructor(t,n,s){super(new Uint16Array(t),n,s)}}class j_ extends xi{constructor(t,n,s){super(new Uint32Array(t),n,s)}}class Ss extends xi{constructor(t,n,s){super(new Float32Array(t),n,s)}}let zy=0;const li=new dn,fh=new Jn,gr=new lt,Kn=new zo,bo=new zo,vn=new lt;class Ga extends Rr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zy++}),this.uuid=Fo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(V_(t)?j_:Z_)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,s=0){this.groups.push({start:t,count:n,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ue().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return li.makeRotationFromQuaternion(t),this.applyMatrix4(li),this}rotateX(t){return li.makeRotationX(t),this.applyMatrix4(li),this}rotateY(t){return li.makeRotationY(t),this.applyMatrix4(li),this}rotateZ(t){return li.makeRotationZ(t),this.applyMatrix4(li),this}translate(t,n,s){return li.makeTranslation(t,n,s),this.applyMatrix4(li),this}scale(t,n,s){return li.makeScale(t,n,s),this.applyMatrix4(li),this}lookAt(t){return fh.lookAt(t),fh.updateMatrix(),this.applyMatrix4(fh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gr).negate(),this.translate(gr.x,gr.y,gr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Ss(s,3))}else{const s=Math.min(t.length,n.count);for(let l=0;l<s;l++){const c=t[l];n.setXYZ(l,c.x,c.y,c.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zo);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new lt(-1/0,-1/0,-1/0),new lt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let s=0,l=n.length;s<l;s++){const c=n[s];Kn.setFromBufferAttribute(c),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ad);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new lt,1/0);return}if(t){const s=this.boundingSphere.center;if(Kn.setFromBufferAttribute(t),n)for(let c=0,f=n.length;c<f;c++){const h=n[c];bo.setFromBufferAttribute(h),this.morphTargetsRelative?(vn.addVectors(Kn.min,bo.min),Kn.expandByPoint(vn),vn.addVectors(Kn.max,bo.max),Kn.expandByPoint(vn)):(Kn.expandByPoint(bo.min),Kn.expandByPoint(bo.max))}Kn.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)vn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(vn));if(n)for(let c=0,f=n.length;c<f;c++){const h=n[c],p=this.morphTargetsRelative;for(let m=0,g=h.count;m<g;m++)vn.fromBufferAttribute(h,m),p&&(gr.fromBufferAttribute(t,m),vn.add(gr)),l=Math.max(l,s.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=n.position,l=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xi(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),h=[],p=[];for(let q=0;q<s.count;q++)h[q]=new lt,p[q]=new lt;const m=new lt,g=new lt,_=new lt,x=new Ue,M=new Ue,E=new Ue,T=new lt,y=new lt;function v(q,D,w){m.fromBufferAttribute(s,q),g.fromBufferAttribute(s,D),_.fromBufferAttribute(s,w),x.fromBufferAttribute(c,q),M.fromBufferAttribute(c,D),E.fromBufferAttribute(c,w),g.sub(m),_.sub(m),M.sub(x),E.sub(x);const G=1/(M.x*E.y-E.x*M.y);isFinite(G)&&(T.copy(g).multiplyScalar(E.y).addScaledVector(_,-M.y).multiplyScalar(G),y.copy(_).multiplyScalar(M.x).addScaledVector(g,-E.x).multiplyScalar(G),h[q].add(T),h[D].add(T),h[w].add(T),p[q].add(y),p[D].add(y),p[w].add(y))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let q=0,D=P.length;q<D;++q){const w=P[q],G=w.start,j=w.count;for(let J=G,Q=G+j;J<Q;J+=3)v(t.getX(J+0),t.getX(J+1),t.getX(J+2))}const U=new lt,C=new lt,B=new lt,O=new lt;function F(q){B.fromBufferAttribute(l,q),O.copy(B);const D=h[q];U.copy(D),U.sub(B.multiplyScalar(B.dot(D))).normalize(),C.crossVectors(O,D);const G=C.dot(p[q])<0?-1:1;f.setXYZW(q,U.x,U.y,U.z,G)}for(let q=0,D=P.length;q<D;++q){const w=P[q],G=w.start,j=w.count;for(let J=G,Q=G+j;J<Q;J+=3)F(t.getX(J+0)),F(t.getX(J+1)),F(t.getX(J+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new xi(new Float32Array(n.count*3),3),this.setAttribute("normal",s);else for(let x=0,M=s.count;x<M;x++)s.setXYZ(x,0,0,0);const l=new lt,c=new lt,f=new lt,h=new lt,p=new lt,m=new lt,g=new lt,_=new lt;if(t)for(let x=0,M=t.count;x<M;x+=3){const E=t.getX(x+0),T=t.getX(x+1),y=t.getX(x+2);l.fromBufferAttribute(n,E),c.fromBufferAttribute(n,T),f.fromBufferAttribute(n,y),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),h.fromBufferAttribute(s,E),p.fromBufferAttribute(s,T),m.fromBufferAttribute(s,y),h.add(g),p.add(g),m.add(g),s.setXYZ(E,h.x,h.y,h.z),s.setXYZ(T,p.x,p.y,p.z),s.setXYZ(y,m.x,m.y,m.z)}else for(let x=0,M=n.count;x<M;x+=3)l.fromBufferAttribute(n,x+0),c.fromBufferAttribute(n,x+1),f.fromBufferAttribute(n,x+2),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),s.setXYZ(x+0,g.x,g.y,g.z),s.setXYZ(x+1,g.x,g.y,g.z),s.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,s=t.count;n<s;n++)vn.fromBufferAttribute(t,n),vn.normalize(),t.setXYZ(n,vn.x,vn.y,vn.z)}toNonIndexed(){function t(h,p){const m=h.array,g=h.itemSize,_=h.normalized,x=new m.constructor(p.length*g);let M=0,E=0;for(let T=0,y=p.length;T<y;T++){h.isInterleavedBufferAttribute?M=p[T]*h.data.stride+h.offset:M=p[T]*g;for(let v=0;v<g;v++)x[E++]=m[M++]}return new xi(x,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ga,s=this.index.array,l=this.attributes;for(const h in l){const p=l[h],m=t(p,s);n.setAttribute(h,m)}const c=this.morphAttributes;for(const h in c){const p=[],m=c[h];for(let g=0,_=m.length;g<_;g++){const x=m[g],M=t(x,s);p.push(M)}n.morphAttributes[h]=p}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,p=f.length;h<p;h++){const m=f[h];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const s=this.attributes;for(const p in s){const m=s[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let _=0,x=m.length;_<x;_++){const M=m[_];g.push(M.toJSON(t.data))}g.length>0&&(l[p]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(n))}const c=t.morphAttributes;for(const m in c){const g=[],_=c[m];for(let x=0,M=_.length;x<M;x++)g.push(_[x].clone(n));this.morphAttributes[m]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let m=0,g=f.length;m<g;m++){const _=f[m];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const z0=new dn,cs=new Cy,sc=new Ad,B0=new lt,rc=new lt,oc=new lt,lc=new lt,hh=new lt,cc=new lt,I0=new lt,uc=new lt;let wi=class extends Jn{constructor(t=new Ga,n=new Y_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const l=n[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,n){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;n.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){cc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const g=h[p],_=c[p];g!==0&&(hh.fromBufferAttribute(_,t),f?cc.addScaledVector(hh,g):cc.addScaledVector(hh.sub(n),g))}n.add(cc)}return n}raycast(t,n){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),sc.copy(s.boundingSphere),sc.applyMatrix4(c),cs.copy(t.ray).recast(t.near),!(sc.containsPoint(cs.origin)===!1&&(cs.intersectSphere(sc,B0)===null||cs.origin.distanceToSquared(B0)>(t.far-t.near)**2))&&(z0.copy(c).invert(),cs.copy(t.ray).applyMatrix4(z0),!(s.boundingBox!==null&&cs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,n,cs)))}_computeIntersections(t,n,s){let l;const c=this.geometry,f=this.material,h=c.index,p=c.attributes.position,m=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,x=c.groups,M=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,T=x.length;E<T;E++){const y=x[E],v=f[y.materialIndex],P=Math.max(y.start,M.start),U=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let C=P,B=U;C<B;C+=3){const O=h.getX(C),F=h.getX(C+1),q=h.getX(C+2);l=fc(this,v,t,s,m,g,_,O,F,q),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=y.materialIndex,n.push(l))}}else{const E=Math.max(0,M.start),T=Math.min(h.count,M.start+M.count);for(let y=E,v=T;y<v;y+=3){const P=h.getX(y),U=h.getX(y+1),C=h.getX(y+2);l=fc(this,f,t,s,m,g,_,P,U,C),l&&(l.faceIndex=Math.floor(y/3),n.push(l))}}else if(p!==void 0)if(Array.isArray(f))for(let E=0,T=x.length;E<T;E++){const y=x[E],v=f[y.materialIndex],P=Math.max(y.start,M.start),U=Math.min(p.count,Math.min(y.start+y.count,M.start+M.count));for(let C=P,B=U;C<B;C+=3){const O=C,F=C+1,q=C+2;l=fc(this,v,t,s,m,g,_,O,F,q),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=y.materialIndex,n.push(l))}}else{const E=Math.max(0,M.start),T=Math.min(p.count,M.start+M.count);for(let y=E,v=T;y<v;y+=3){const P=y,U=y+1,C=y+2;l=fc(this,f,t,s,m,g,_,P,U,C),l&&(l.faceIndex=Math.floor(y/3),n.push(l))}}}};function By(a,t,n,s,l,c,f,h){let p;if(t.side===Hn?p=s.intersectTriangle(f,c,l,!0,h):p=s.intersectTriangle(l,c,f,t.side===Ha,h),p===null)return null;uc.copy(h),uc.applyMatrix4(a.matrixWorld);const m=n.ray.origin.distanceTo(uc);return m<n.near||m>n.far?null:{distance:m,point:uc.clone(),object:a}}function fc(a,t,n,s,l,c,f,h,p,m){a.getVertexPosition(h,rc),a.getVertexPosition(p,oc),a.getVertexPosition(m,lc);const g=By(a,t,n,s,rc,oc,lc,I0);if(g){const _=new lt;gi.getBarycoord(I0,rc,oc,lc,_),l&&(g.uv=gi.getInterpolatedAttribute(l,h,p,m,_,new Ue)),c&&(g.uv1=gi.getInterpolatedAttribute(c,h,p,m,_,new Ue)),f&&(g.normal=gi.getInterpolatedAttribute(f,h,p,m,_,new lt),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:h,b:p,c:m,normal:new lt,materialIndex:0};gi.getNormal(rc,oc,lc,x.normal),g.face=x,g.barycoord=_}return g}class Bo extends Ga{constructor(t=1,n=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const p=[],m=[],g=[],_=[];let x=0,M=0;E("z","y","x",-1,-1,s,n,t,f,c,0),E("z","y","x",1,-1,s,n,-t,f,c,1),E("x","z","y",1,1,t,s,n,l,f,2),E("x","z","y",1,-1,t,s,-n,l,f,3),E("x","y","z",1,-1,t,n,s,l,c,4),E("x","y","z",-1,-1,t,n,-s,l,c,5),this.setIndex(p),this.setAttribute("position",new Ss(m,3)),this.setAttribute("normal",new Ss(g,3)),this.setAttribute("uv",new Ss(_,2));function E(T,y,v,P,U,C,B,O,F,q,D){const w=C/F,G=B/q,j=C/2,J=B/2,Q=O/2,st=F+1,z=q+1;let V=0,X=0;const ft=new lt;for(let yt=0;yt<z;yt++){const N=yt*G-J;for(let nt=0;nt<st;nt++){const xt=nt*w-j;ft[T]=xt*P,ft[y]=N*U,ft[v]=Q,m.push(ft.x,ft.y,ft.z),ft[T]=0,ft[y]=0,ft[v]=O>0?1:-1,g.push(ft.x,ft.y,ft.z),_.push(nt/F),_.push(1-yt/q),V+=1}}for(let yt=0;yt<q;yt++)for(let N=0;N<F;N++){const nt=x+N+st*yt,xt=x+N+st*(yt+1),At=x+(N+1)+st*(yt+1),Nt=x+(N+1)+st*yt;p.push(nt,xt,Nt),p.push(xt,At,Nt),X+=6}h.addGroup(M,X,D),M+=X,x+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function br(a){const t={};for(const n in a){t[n]={};for(const s in a[n]){const l=a[n][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][s]=null):t[n][s]=l.clone():Array.isArray(l)?t[n][s]=l.slice():t[n][s]=l}}return t}function Ln(a){const t={};for(let n=0;n<a.length;n++){const s=br(a[n]);for(const l in s)t[l]=s[l]}return t}function Iy(a){const t=[];for(let n=0;n<a.length;n++)t.push(a[n].clone());return t}function K_(a){const t=a.getRenderTarget();return t===null?a.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Re.workingColorSpace}const Hy={clone:br,merge:Ln};var Gy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sa extends Rc{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gy,this.fragmentShader=Vy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=br(t.uniforms),this.uniformsGroups=Iy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?n.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?n.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[l]={type:"m4",value:f.toArray()}:n.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(n.extensions=s),n}}let Q_=class extends Jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dn,this.projectionMatrix=new dn,this.projectionMatrixInverse=new dn,this.coordinateSystem=Ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const Fa=new lt,H0=new Ue,G0=new Ue;class mi extends Q_{constructor(t=50,n=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=hd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Wf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hd*2*Math.atan(Math.tan(Wf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,s){Fa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fa.x,Fa.y).multiplyScalar(-t/Fa.z),Fa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Fa.x,Fa.y).multiplyScalar(-t/Fa.z)}getViewSize(t,n){return this.getViewBounds(t,H0,G0),n.subVectors(G0,H0)}setViewOffset(t,n,s,l,c,f){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Wf*.5*this.fov)/this.zoom,s=2*n,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;c+=f.offsetX*l/p,n-=f.offsetY*s/m,l*=f.width/p,s*=f.height/m}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,n,n-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const _r=-90,vr=1;class Xy extends Jn{constructor(t,n,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new mi(_r,vr,t,n);l.layers=this.layers,this.add(l);const c=new mi(_r,vr,t,n);c.layers=this.layers,this.add(c);const f=new mi(_r,vr,t,n);f.layers=this.layers,this.add(f);const h=new mi(_r,vr,t,n);h.layers=this.layers,this.add(h);const p=new mi(_r,vr,t,n);p.layers=this.layers,this.add(p);const m=new mi(_r,vr,t,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[s,l,c,f,h,p]=n;for(const m of n)this.remove(m);if(t===Ci)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Tc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of n)this.add(m),m.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,p,m,g]=this.children,_=t.getRenderTarget(),x=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(n,c),t.setRenderTarget(s,1,l),t.render(n,f),t.setRenderTarget(s,2,l),t.render(n,h),t.setRenderTarget(s,3,l),t.render(n,p),t.setRenderTarget(s,4,l),t.render(n,m),s.texture.generateMipmaps=T,t.setRenderTarget(s,5,l),t.render(n,g),t.setRenderTarget(_,x,M),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class J_ extends Di{constructor(t=[],n=Er,s,l,c,f,h,p,m,g){super(t,n,s,l,c,f,h,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ky extends Ms{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new J_(l),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Bo(5,5,5),c=new sa({name:"CubemapFromEquirect",uniforms:br(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Hn,blending:za});c.uniforms.tEquirect.value=n;const f=new wi(l,c),h=n.minFilter;return n.minFilter===vs&&(n.minFilter=Ri),new Xy(1,10,this).update(t,f),n.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,n=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(n,s,l);t.setRenderTarget(c)}}class hc extends Jn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wy={type:"move"};class dh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new lt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new lt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new lt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new lt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const s of t.hand.values())this._getHandJoint(n,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,s){let l=null,c=null,f=null;const h=this._targetRay,p=this._grip,m=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(m&&t.hand){f=!0;for(const T of t.hand.values()){const y=n.getJointPose(T,s),v=this._getHandJoint(m,T);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const g=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],x=g.position.distanceTo(_.position),M=.02,E=.005;m.inputState.pinching&&x>M+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&x<=M-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,s),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(l=n.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Wy)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const s=new hc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[n.jointName]=s,t.add(s)}return t.joints[n.jointName]}}class qy extends Jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Es,this.environmentIntensity=1,this.environmentRotation=new Es,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const ph=new lt,Yy=new lt,Zy=new ue;let ds=class{constructor(t=new lt(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,s,l){return this.normal.set(t,n,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,s){const l=ph.subVectors(s,n).cross(Yy.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const s=t.delta(ph),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:n.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return n<0&&s>0||s<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const s=n||Zy.getNormalMatrix(t),l=this.coplanarPoint(ph).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const us=new Ad,jy=new Ue(.5,.5),dc=new lt;class $_{constructor(t=new ds,n=new ds,s=new ds,l=new ds,c=new ds,f=new ds){this.planes=[t,n,s,l,c,f]}set(t,n,s,l,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(n),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(t){const n=this.planes;for(let s=0;s<6;s++)n[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,n=Ci,s=!1){const l=this.planes,c=t.elements,f=c[0],h=c[1],p=c[2],m=c[3],g=c[4],_=c[5],x=c[6],M=c[7],E=c[8],T=c[9],y=c[10],v=c[11],P=c[12],U=c[13],C=c[14],B=c[15];if(l[0].setComponents(m-f,M-g,v-E,B-P).normalize(),l[1].setComponents(m+f,M+g,v+E,B+P).normalize(),l[2].setComponents(m+h,M+_,v+T,B+U).normalize(),l[3].setComponents(m-h,M-_,v-T,B-U).normalize(),s)l[4].setComponents(p,x,y,C).normalize(),l[5].setComponents(m-p,M-x,v-y,B-C).normalize();else if(l[4].setComponents(m-p,M-x,v-y,B-C).normalize(),n===Ci)l[5].setComponents(m+p,M+x,v+y,B+C).normalize();else if(n===Tc)l[5].setComponents(p,x,y,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),us.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(t){us.center.set(0,0,0);const n=jy.distanceTo(t.center);return us.radius=.7071067811865476+n,us.applyMatrix4(t.matrixWorld),this.intersectsSphere(us)}intersectsSphere(t){const n=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const n=this.planes;for(let s=0;s<6;s++){const l=n[s];if(dc.x=l.normal.x>0?t.max.x:t.min.x,dc.y=l.normal.y>0?t.max.y:t.min.y,dc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(dc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let s=0;s<6;s++)if(n[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class tv extends Di{constructor(t,n,s=ys,l,c,f,h=vi,p=vi,m,g=Uo,_=1){if(g!==Uo&&g!==Lo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:n,depth:_};super(x,l,c,f,h,p,g,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Td(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class ev extends Di{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Cc extends Ga{constructor(t=1,n=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:s,heightSegments:l};const c=t/2,f=n/2,h=Math.floor(s),p=Math.floor(l),m=h+1,g=p+1,_=t/h,x=n/p,M=[],E=[],T=[],y=[];for(let v=0;v<g;v++){const P=v*x-f;for(let U=0;U<m;U++){const C=U*_-c;E.push(C,-P,0),T.push(0,0,1),y.push(U/h),y.push(1-v/p)}}for(let v=0;v<p;v++)for(let P=0;P<h;P++){const U=P+m*v,C=P+m*(v+1),B=P+1+m*(v+1),O=P+1+m*v;M.push(U,C,O),M.push(C,B,O)}this.setIndex(M),this.setAttribute("position",new Ss(E,3)),this.setAttribute("normal",new Ss(T,3)),this.setAttribute("uv",new Ss(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cc(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ky extends sa{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Qy extends Rc{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Jy extends Rc{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class nv extends Q_{constructor(t=-1,n=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,h=l+n,p=l-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,f=c+m*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class $y extends mi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class tM{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}function V0(a,t,n,s){const l=eM(s);switch(n){case z_:return a*t;case I_:return a*t/l.components*l.byteLength;case yd:return a*t/l.components*l.byteLength;case H_:return a*t*2/l.components*l.byteLength;case Md:return a*t*2/l.components*l.byteLength;case B_:return a*t*3/l.components*l.byteLength;case _i:return a*t*4/l.components*l.byteLength;case Ed:return a*t*4/l.components*l.byteLength;case _c:case vc:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*8;case xc:case Sc:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case Ih:case Gh:return Math.max(a,16)*Math.max(t,8)/4;case Bh:case Hh:return Math.max(a,8)*Math.max(t,8)/2;case Vh:case Xh:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*8;case kh:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case Wh:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case qh:return Math.floor((a+4)/5)*Math.floor((t+3)/4)*16;case Yh:return Math.floor((a+4)/5)*Math.floor((t+4)/5)*16;case Zh:return Math.floor((a+5)/6)*Math.floor((t+4)/5)*16;case jh:return Math.floor((a+5)/6)*Math.floor((t+5)/6)*16;case Kh:return Math.floor((a+7)/8)*Math.floor((t+4)/5)*16;case Qh:return Math.floor((a+7)/8)*Math.floor((t+5)/6)*16;case Jh:return Math.floor((a+7)/8)*Math.floor((t+7)/8)*16;case $h:return Math.floor((a+9)/10)*Math.floor((t+4)/5)*16;case td:return Math.floor((a+9)/10)*Math.floor((t+5)/6)*16;case ed:return Math.floor((a+9)/10)*Math.floor((t+7)/8)*16;case nd:return Math.floor((a+9)/10)*Math.floor((t+9)/10)*16;case id:return Math.floor((a+11)/12)*Math.floor((t+9)/10)*16;case ad:return Math.floor((a+11)/12)*Math.floor((t+11)/12)*16;case sd:case rd:case od:return Math.ceil(a/4)*Math.ceil(t/4)*16;case ld:case cd:return Math.ceil(a/4)*Math.ceil(t/4)*8;case ud:case fd:return Math.ceil(a/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function eM(a){switch(a){case aa:case N_:return{byteLength:1,components:1};case wo:case O_:case Oo:return{byteLength:2,components:1};case xd:case Sd:return{byteLength:2,components:4};case ys:case vd:case na:return{byteLength:4,components:1};case F_:case P_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_d}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_d);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function iv(){let a=null,t=!1,n=null,s=null;function l(c,f){n(c,f),s=a.requestAnimationFrame(l)}return{start:function(){t!==!0&&n!==null&&(s=a.requestAnimationFrame(l),t=!0)},stop:function(){a.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){a=c}}}function nM(a){const t=new WeakMap;function n(h,p){const m=h.array,g=h.usage,_=m.byteLength,x=a.createBuffer();a.bindBuffer(p,x),a.bufferData(p,m,g),h.onUploadCallback();let M;if(m instanceof Float32Array)M=a.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)M=a.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?M=a.HALF_FLOAT:M=a.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=a.SHORT;else if(m instanceof Uint32Array)M=a.UNSIGNED_INT;else if(m instanceof Int32Array)M=a.INT;else if(m instanceof Int8Array)M=a.BYTE;else if(m instanceof Uint8Array)M=a.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:_}}function s(h,p,m){const g=p.array,_=p.updateRanges;if(a.bindBuffer(m,h),_.length===0)a.bufferSubData(m,0,g);else{_.sort((M,E)=>M.start-E.start);let x=0;for(let M=1;M<_.length;M++){const E=_[x],T=_[M];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++x,_[x]=T)}_.length=x+1;for(let M=0,E=_.length;M<E;M++){const T=_[M];a.bufferSubData(m,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=t.get(h);p&&(a.deleteBuffer(p.buffer),t.delete(h))}function f(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=t.get(h);if(m===void 0)t.set(h,n(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,h,p),m.version=h.version}}return{get:l,remove:c,update:f}}var iM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,aM=`#ifdef USE_ALPHAHASH
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
#endif`,sM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cM=`#ifdef USE_AOMAP
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
#endif`,uM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fM=`#ifdef USE_BATCHING
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
#endif`,hM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gM=`#ifdef USE_IRIDESCENCE
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
#endif`,_M=`#ifdef USE_BUMPMAP
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
#endif`,vM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,SM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,MM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,EM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,TM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,AM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,bM=`#define PI 3.141592653589793
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
} // validated`,RM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,CM=`vec3 transformedNormal = objectNormal;
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
#endif`,wM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,DM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,UM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,LM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,NM="gl_FragColor = linearToOutputTexel( gl_FragColor );",OM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,FM=`#ifdef USE_ENVMAP
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
#endif`,PM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zM=`#ifdef USE_ENVMAP
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
#endif`,BM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,IM=`#ifdef USE_ENVMAP
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
#endif`,HM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,GM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,VM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,XM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kM=`#ifdef USE_GRADIENTMAP
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
}`,WM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,YM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ZM=`uniform bool receiveShadow;
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
#endif`,jM=`#ifdef USE_ENVMAP
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
#endif`,KM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,QM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,JM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$M=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tE=`PhysicalMaterial material;
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
#endif`,eE=`struct PhysicalMaterial {
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
}`,nE=`
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
#endif`,iE=`#if defined( RE_IndirectDiffuse )
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
#endif`,aE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hE=`#if defined( USE_POINTS_UV )
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
#endif`,dE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_E=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vE=`#ifdef USE_MORPHTARGETS
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
#endif`,xE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,SE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ME=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,EE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,AE=`#ifdef USE_NORMALMAP
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
#endif`,bE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,RE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,CE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,DE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,UE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,LE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,NE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,OE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,FE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,PE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,BE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,IE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,HE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,GE=`float getShadowMask() {
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
}`,VE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,XE=`#ifdef USE_SKINNING
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
#endif`,kE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,WE=`#ifdef USE_SKINNING
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
#endif`,qE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,YE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ZE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,KE=`#ifdef USE_TRANSMISSION
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
#endif`,QE=`#ifdef USE_TRANSMISSION
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
#endif`,JE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const n1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,i1=`uniform sampler2D t2D;
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
}`,a1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,r1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l1=`#include <common>
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
}`,c1=`#if DEPTH_PACKING == 3200
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
}`,u1=`#define DISTANCE
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
}`,f1=`#define DISTANCE
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
}`,h1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,d1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p1=`uniform float scale;
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
}`,m1=`uniform vec3 diffuse;
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
}`,g1=`#include <common>
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
}`,_1=`uniform vec3 diffuse;
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
}`,v1=`#define LAMBERT
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
}`,x1=`#define LAMBERT
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
}`,S1=`#define MATCAP
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
}`,y1=`#define MATCAP
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
}`,M1=`#define NORMAL
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
}`,E1=`#define NORMAL
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
}`,T1=`#define PHONG
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
}`,A1=`#define PHONG
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
}`,b1=`#define STANDARD
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
}`,R1=`#define STANDARD
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
}`,C1=`#define TOON
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
}`,w1=`#define TOON
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
}`,D1=`uniform float size;
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
}`,U1=`uniform vec3 diffuse;
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
}`,L1=`#include <common>
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
}`,N1=`uniform vec3 color;
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
}`,O1=`uniform float rotation;
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
}`,F1=`uniform vec3 diffuse;
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
}`,fe={alphahash_fragment:iM,alphahash_pars_fragment:aM,alphamap_fragment:sM,alphamap_pars_fragment:rM,alphatest_fragment:oM,alphatest_pars_fragment:lM,aomap_fragment:cM,aomap_pars_fragment:uM,batching_pars_vertex:fM,batching_vertex:hM,begin_vertex:dM,beginnormal_vertex:pM,bsdfs:mM,iridescence_fragment:gM,bumpmap_pars_fragment:_M,clipping_planes_fragment:vM,clipping_planes_pars_fragment:xM,clipping_planes_pars_vertex:SM,clipping_planes_vertex:yM,color_fragment:MM,color_pars_fragment:EM,color_pars_vertex:TM,color_vertex:AM,common:bM,cube_uv_reflection_fragment:RM,defaultnormal_vertex:CM,displacementmap_pars_vertex:wM,displacementmap_vertex:DM,emissivemap_fragment:UM,emissivemap_pars_fragment:LM,colorspace_fragment:NM,colorspace_pars_fragment:OM,envmap_fragment:FM,envmap_common_pars_fragment:PM,envmap_pars_fragment:zM,envmap_pars_vertex:BM,envmap_physical_pars_fragment:jM,envmap_vertex:IM,fog_vertex:HM,fog_pars_vertex:GM,fog_fragment:VM,fog_pars_fragment:XM,gradientmap_pars_fragment:kM,lightmap_pars_fragment:WM,lights_lambert_fragment:qM,lights_lambert_pars_fragment:YM,lights_pars_begin:ZM,lights_toon_fragment:KM,lights_toon_pars_fragment:QM,lights_phong_fragment:JM,lights_phong_pars_fragment:$M,lights_physical_fragment:tE,lights_physical_pars_fragment:eE,lights_fragment_begin:nE,lights_fragment_maps:iE,lights_fragment_end:aE,logdepthbuf_fragment:sE,logdepthbuf_pars_fragment:rE,logdepthbuf_pars_vertex:oE,logdepthbuf_vertex:lE,map_fragment:cE,map_pars_fragment:uE,map_particle_fragment:fE,map_particle_pars_fragment:hE,metalnessmap_fragment:dE,metalnessmap_pars_fragment:pE,morphinstance_vertex:mE,morphcolor_vertex:gE,morphnormal_vertex:_E,morphtarget_pars_vertex:vE,morphtarget_vertex:xE,normal_fragment_begin:SE,normal_fragment_maps:yE,normal_pars_fragment:ME,normal_pars_vertex:EE,normal_vertex:TE,normalmap_pars_fragment:AE,clearcoat_normal_fragment_begin:bE,clearcoat_normal_fragment_maps:RE,clearcoat_pars_fragment:CE,iridescence_pars_fragment:wE,opaque_fragment:DE,packing:UE,premultiplied_alpha_fragment:LE,project_vertex:NE,dithering_fragment:OE,dithering_pars_fragment:FE,roughnessmap_fragment:PE,roughnessmap_pars_fragment:zE,shadowmap_pars_fragment:BE,shadowmap_pars_vertex:IE,shadowmap_vertex:HE,shadowmask_pars_fragment:GE,skinbase_vertex:VE,skinning_pars_vertex:XE,skinning_vertex:kE,skinnormal_vertex:WE,specularmap_fragment:qE,specularmap_pars_fragment:YE,tonemapping_fragment:ZE,tonemapping_pars_fragment:jE,transmission_fragment:KE,transmission_pars_fragment:QE,uv_pars_fragment:JE,uv_pars_vertex:$E,uv_vertex:t1,worldpos_vertex:e1,background_vert:n1,background_frag:i1,backgroundCube_vert:a1,backgroundCube_frag:s1,cube_vert:r1,cube_frag:o1,depth_vert:l1,depth_frag:c1,distanceRGBA_vert:u1,distanceRGBA_frag:f1,equirect_vert:h1,equirect_frag:d1,linedashed_vert:p1,linedashed_frag:m1,meshbasic_vert:g1,meshbasic_frag:_1,meshlambert_vert:v1,meshlambert_frag:x1,meshmatcap_vert:S1,meshmatcap_frag:y1,meshnormal_vert:M1,meshnormal_frag:E1,meshphong_vert:T1,meshphong_frag:A1,meshphysical_vert:b1,meshphysical_frag:R1,meshtoon_vert:C1,meshtoon_frag:w1,points_vert:D1,points_frag:U1,shadow_vert:L1,shadow_frag:N1,sprite_vert:O1,sprite_frag:F1},Ft={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},bi={basic:{uniforms:Ln([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:Ln([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new He(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:Ln([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:Ln([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:Ln([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new He(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:Ln([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:Ln([Ft.points,Ft.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:Ln([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:Ln([Ft.common,Ft.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:Ln([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:Ln([Ft.sprite,Ft.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distanceRGBA:{uniforms:Ln([Ft.common,Ft.displacementmap,{referencePosition:{value:new lt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distanceRGBA_vert,fragmentShader:fe.distanceRGBA_frag},shadow:{uniforms:Ln([Ft.lights,Ft.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};bi.physical={uniforms:Ln([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const pc={r:0,b:0,g:0},fs=new Es,P1=new dn;function z1(a,t,n,s,l,c,f){const h=new He(0);let p=c===!0?0:1,m,g,_=null,x=0,M=null;function E(U){let C=U.isScene===!0?U.background:null;return C&&C.isTexture&&(C=(U.backgroundBlurriness>0?n:t).get(C)),C}function T(U){let C=!1;const B=E(U);B===null?v(h,p):B&&B.isColor&&(v(B,1),C=!0);const O=a.xr.getEnvironmentBlendMode();O==="additive"?s.buffers.color.setClear(0,0,0,1,f):O==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(a.autoClear||C)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function y(U,C){const B=E(C);B&&(B.isCubeTexture||B.mapping===bc)?(g===void 0&&(g=new wi(new Bo(1,1,1),new sa({name:"BackgroundCubeMaterial",uniforms:br(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(O,F,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),fs.copy(C.backgroundRotation),fs.x*=-1,fs.y*=-1,fs.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),g.material.uniforms.envMap.value=B,g.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(P1.makeRotationFromEuler(fs)),g.material.toneMapped=Re.getTransfer(B.colorSpace)!==Be,(_!==B||x!==B.version||M!==a.toneMapping)&&(g.material.needsUpdate=!0,_=B,x=B.version,M=a.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):B&&B.isTexture&&(m===void 0&&(m=new wi(new Cc(2,2),new sa({name:"BackgroundMaterial",uniforms:br(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:Ha,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=B,m.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,m.material.toneMapped=Re.getTransfer(B.colorSpace)!==Be,B.matrixAutoUpdate===!0&&B.updateMatrix(),m.material.uniforms.uvTransform.value.copy(B.matrix),(_!==B||x!==B.version||M!==a.toneMapping)&&(m.material.needsUpdate=!0,_=B,x=B.version,M=a.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null))}function v(U,C){U.getRGB(pc,K_(a)),s.buffers.color.setClear(pc.r,pc.g,pc.b,C,f)}function P(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,C=1){h.set(U),p=C,v(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(U){p=U,v(h,p)},render:T,addToRenderList:y,dispose:P}}function B1(a,t){const n=a.getParameter(a.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,f=!1;function h(w,G,j,J,Q){let st=!1;const z=_(J,j,G);c!==z&&(c=z,m(c.object)),st=M(w,J,j,Q),st&&E(w,J,j,Q),Q!==null&&t.update(Q,a.ELEMENT_ARRAY_BUFFER),(st||f)&&(f=!1,C(w,G,j,J),Q!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function p(){return a.createVertexArray()}function m(w){return a.bindVertexArray(w)}function g(w){return a.deleteVertexArray(w)}function _(w,G,j){const J=j.wireframe===!0;let Q=s[w.id];Q===void 0&&(Q={},s[w.id]=Q);let st=Q[G.id];st===void 0&&(st={},Q[G.id]=st);let z=st[J];return z===void 0&&(z=x(p()),st[J]=z),z}function x(w){const G=[],j=[],J=[];for(let Q=0;Q<n;Q++)G[Q]=0,j[Q]=0,J[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:j,attributeDivisors:J,object:w,attributes:{},index:null}}function M(w,G,j,J){const Q=c.attributes,st=G.attributes;let z=0;const V=j.getAttributes();for(const X in V)if(V[X].location>=0){const yt=Q[X];let N=st[X];if(N===void 0&&(X==="instanceMatrix"&&w.instanceMatrix&&(N=w.instanceMatrix),X==="instanceColor"&&w.instanceColor&&(N=w.instanceColor)),yt===void 0||yt.attribute!==N||N&&yt.data!==N.data)return!0;z++}return c.attributesNum!==z||c.index!==J}function E(w,G,j,J){const Q={},st=G.attributes;let z=0;const V=j.getAttributes();for(const X in V)if(V[X].location>=0){let yt=st[X];yt===void 0&&(X==="instanceMatrix"&&w.instanceMatrix&&(yt=w.instanceMatrix),X==="instanceColor"&&w.instanceColor&&(yt=w.instanceColor));const N={};N.attribute=yt,yt&&yt.data&&(N.data=yt.data),Q[X]=N,z++}c.attributes=Q,c.attributesNum=z,c.index=J}function T(){const w=c.newAttributes;for(let G=0,j=w.length;G<j;G++)w[G]=0}function y(w){v(w,0)}function v(w,G){const j=c.newAttributes,J=c.enabledAttributes,Q=c.attributeDivisors;j[w]=1,J[w]===0&&(a.enableVertexAttribArray(w),J[w]=1),Q[w]!==G&&(a.vertexAttribDivisor(w,G),Q[w]=G)}function P(){const w=c.newAttributes,G=c.enabledAttributes;for(let j=0,J=G.length;j<J;j++)G[j]!==w[j]&&(a.disableVertexAttribArray(j),G[j]=0)}function U(w,G,j,J,Q,st,z){z===!0?a.vertexAttribIPointer(w,G,j,Q,st):a.vertexAttribPointer(w,G,j,J,Q,st)}function C(w,G,j,J){T();const Q=J.attributes,st=j.getAttributes(),z=G.defaultAttributeValues;for(const V in st){const X=st[V];if(X.location>=0){let ft=Q[V];if(ft===void 0&&(V==="instanceMatrix"&&w.instanceMatrix&&(ft=w.instanceMatrix),V==="instanceColor"&&w.instanceColor&&(ft=w.instanceColor)),ft!==void 0){const yt=ft.normalized,N=ft.itemSize,nt=t.get(ft);if(nt===void 0)continue;const xt=nt.buffer,At=nt.type,Nt=nt.bytesPerElement,it=At===a.INT||At===a.UNSIGNED_INT||ft.gpuType===vd;if(ft.isInterleavedBufferAttribute){const ut=ft.data,Ct=ut.stride,Pt=ft.offset;if(ut.isInstancedInterleavedBuffer){for(let Xt=0;Xt<X.locationSize;Xt++)v(X.location+Xt,ut.meshPerAttribute);w.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Xt=0;Xt<X.locationSize;Xt++)y(X.location+Xt);a.bindBuffer(a.ARRAY_BUFFER,xt);for(let Xt=0;Xt<X.locationSize;Xt++)U(X.location+Xt,N/X.locationSize,At,yt,Ct*Nt,(Pt+N/X.locationSize*Xt)*Nt,it)}else{if(ft.isInstancedBufferAttribute){for(let ut=0;ut<X.locationSize;ut++)v(X.location+ut,ft.meshPerAttribute);w.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let ut=0;ut<X.locationSize;ut++)y(X.location+ut);a.bindBuffer(a.ARRAY_BUFFER,xt);for(let ut=0;ut<X.locationSize;ut++)U(X.location+ut,N/X.locationSize,At,yt,N*Nt,N/X.locationSize*ut*Nt,it)}}else if(z!==void 0){const yt=z[V];if(yt!==void 0)switch(yt.length){case 2:a.vertexAttrib2fv(X.location,yt);break;case 3:a.vertexAttrib3fv(X.location,yt);break;case 4:a.vertexAttrib4fv(X.location,yt);break;default:a.vertexAttrib1fv(X.location,yt)}}}}P()}function B(){q();for(const w in s){const G=s[w];for(const j in G){const J=G[j];for(const Q in J)g(J[Q].object),delete J[Q];delete G[j]}delete s[w]}}function O(w){if(s[w.id]===void 0)return;const G=s[w.id];for(const j in G){const J=G[j];for(const Q in J)g(J[Q].object),delete J[Q];delete G[j]}delete s[w.id]}function F(w){for(const G in s){const j=s[G];if(j[w.id]===void 0)continue;const J=j[w.id];for(const Q in J)g(J[Q].object),delete J[Q];delete j[w.id]}}function q(){D(),f=!0,c!==l&&(c=l,m(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:q,resetDefaultState:D,dispose:B,releaseStatesOfGeometry:O,releaseStatesOfProgram:F,initAttributes:T,enableAttribute:y,disableUnusedAttributes:P}}function I1(a,t,n){let s;function l(m){s=m}function c(m,g){a.drawArrays(s,m,g),n.update(g,s,1)}function f(m,g,_){_!==0&&(a.drawArraysInstanced(s,m,g,_),n.update(g,s,_))}function h(m,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,g,0,_);let M=0;for(let E=0;E<_;E++)M+=g[E];n.update(M,s,1)}function p(m,g,_,x){if(_===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<m.length;E++)f(m[E],g[E],x[E]);else{M.multiDrawArraysInstancedWEBGL(s,m,0,g,0,x,0,_);let E=0;for(let T=0;T<_;T++)E+=g[T]*x[T];n.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function H1(a,t,n,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");l=a.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(F){return!(F!==_i&&s.convert(F)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const q=F===Oo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==aa&&s.convert(F)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==na&&!q)}function p(F){if(F==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const _=n.logarithmicDepthBuffer===!0,x=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),E=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=a.getParameter(a.MAX_TEXTURE_SIZE),y=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),v=a.getParameter(a.MAX_VERTEX_ATTRIBS),P=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),U=a.getParameter(a.MAX_VARYING_VECTORS),C=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),B=E>0,O=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:P,maxVaryings:U,maxFragmentUniforms:C,vertexTextures:B,maxSamples:O}}function G1(a){const t=this;let n=null,s=0,l=!1,c=!1;const f=new ds,h=new ue,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const M=_.length!==0||x||s!==0||l;return l=x,s=_.length,M},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){n=g(_,x,0)},this.setState=function(_,x,M){const E=_.clippingPlanes,T=_.clipIntersection,y=_.clipShadows,v=a.get(_);if(!l||E===null||E.length===0||c&&!y)c?g(null):m();else{const P=c?0:s,U=P*4;let C=v.clippingState||null;p.value=C,C=g(E,x,U,M);for(let B=0;B!==U;++B)C[B]=n[B];v.clippingState=C,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=P}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(_,x,M,E){const T=_!==null?_.length:0;let y=null;if(T!==0){if(y=p.value,E!==!0||y===null){const v=M+T*4,P=x.matrixWorldInverse;h.getNormalMatrix(P),(y===null||y.length<v)&&(y=new Float32Array(v));for(let U=0,C=M;U!==T;++U,C+=4)f.copy(_[U]).applyMatrix4(P,h),f.normal.toArray(y,C),y[C+3]=f.constant}p.value=y,p.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,y}}function V1(a){let t=new WeakMap;function n(f,h){return h===Oh?f.mapping=Er:h===Fh&&(f.mapping=Tr),f}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===Oh||h===Fh)if(t.has(f)){const p=t.get(f).texture;return n(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new ky(p.height);return m.fromEquirectangularTexture(a,f),t.set(f,m),f.addEventListener("dispose",l),n(m.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const Sr=4,X0=[.125,.215,.35,.446,.526,.582],gs=20,mh=new nv,k0=new He;let gh=null,_h=0,vh=0,xh=!1;const ps=(1+Math.sqrt(5))/2,xr=1/ps,W0=[new lt(-ps,xr,0),new lt(ps,xr,0),new lt(-xr,0,ps),new lt(xr,0,ps),new lt(0,ps,-xr),new lt(0,ps,xr),new lt(-1,1,-1),new lt(1,1,-1),new lt(-1,1,1),new lt(1,1,1)],X1=new lt;class q0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,s=.1,l=100,c={}){const{size:f=256,position:h=X1}=c;gh=this._renderer.getRenderTarget(),_h=this._renderer.getActiveCubeFace(),vh=this._renderer.getActiveMipmapLevel(),xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,s,l,p,h),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=j0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Z0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(gh,_h,vh),this._renderer.xr.enabled=xh,t.scissorTest=!1,mc(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Er||t.mapping===Tr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),gh=this._renderer.getRenderTarget(),_h=this._renderer.getActiveCubeFace(),vh=this._renderer.getActiveMipmapLevel(),xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=n||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,s={magFilter:Ri,minFilter:Ri,generateMipmaps:!1,type:Oo,format:_i,colorSpace:Ar,depthBuffer:!1},l=Y0(t,n,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Y0(t,n,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=k1(c)),this._blurMaterial=W1(c,t,n)}return l}_compileMaterial(t){const n=new wi(this._lodPlanes[0],t);this._renderer.compile(n,mh)}_sceneToCubeUV(t,n,s,l,c){const p=new mi(90,1,n,s),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,M=_.toneMapping;_.getClearColor(k0),_.toneMapping=Ba,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null));const T=new Y_({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1}),y=new wi(new Bo,T);let v=!1;const P=t.background;P?P.isColor&&(T.color.copy(P),t.background=null,v=!0):(T.color.copy(k0),v=!0);for(let U=0;U<6;U++){const C=U%3;C===0?(p.up.set(0,m[U],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[U],c.y,c.z)):C===1?(p.up.set(0,0,m[U]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[U],c.z)):(p.up.set(0,m[U],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[U]));const B=this._cubeSize;mc(l,C*B,U>2?B:0,B,B),_.setRenderTarget(l),v&&_.render(y,p),_.render(t,p)}y.geometry.dispose(),y.material.dispose(),_.toneMapping=M,_.autoClear=x,t.background=P}_textureToCubeUV(t,n){const s=this._renderer,l=t.mapping===Er||t.mapping===Tr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=j0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Z0());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new wi(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=t;const p=this._cubeSize;mc(n,0,0,3*p,2*p),s.setRenderTarget(n),s.render(f,mh)}_applyPMREM(t){const n=this._renderer,s=n.autoClear;n.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=W0[(l-c-1)%W0.length];this._blur(t,c-1,c,f,h)}n.autoClear=s}_blur(t,n,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,n,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,n,s,l,c,f,h){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new wi(this._lodPlanes[l],m),x=m.uniforms,M=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*gs-1),T=c/E,y=isFinite(c)?1+Math.floor(g*T):gs;y>gs&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${gs}`);const v=[];let P=0;for(let F=0;F<gs;++F){const q=F/T,D=Math.exp(-q*q/2);v.push(D),F===0?P+=D:F<y&&(P+=2*D)}for(let F=0;F<v.length;F++)v[F]=v[F]/P;x.envMap.value=t.texture,x.samples.value=y,x.weights.value=v,x.latitudinal.value=f==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:U}=this;x.dTheta.value=E,x.mipInt.value=U-s;const C=this._sizeLods[l],B=3*C*(l>U-Sr?l-U+Sr:0),O=4*(this._cubeSize-C);mc(n,B,O,3*C,2*C),p.setRenderTarget(n),p.render(_,mh)}}function k1(a){const t=[],n=[],s=[];let l=a;const c=a-Sr+1+X0.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);n.push(h);let p=1/h;f>a-Sr?p=X0[f-a+Sr-1]:f===0&&(p=0),s.push(p);const m=1/(h-2),g=-m,_=1+m,x=[g,g,_,g,_,_,g,g,_,_,g,_],M=6,E=6,T=3,y=2,v=1,P=new Float32Array(T*E*M),U=new Float32Array(y*E*M),C=new Float32Array(v*E*M);for(let O=0;O<M;O++){const F=O%3*2/3-1,q=O>2?0:-1,D=[F,q,0,F+2/3,q,0,F+2/3,q+1,0,F,q,0,F+2/3,q+1,0,F,q+1,0];P.set(D,T*E*O),U.set(x,y*E*O);const w=[O,O,O,O,O,O];C.set(w,v*E*O)}const B=new Ga;B.setAttribute("position",new xi(P,T)),B.setAttribute("uv",new xi(U,y)),B.setAttribute("faceIndex",new xi(C,v)),t.push(B),l>Sr&&l--}return{lodPlanes:t,sizeLods:n,sigmas:s}}function Y0(a,t,n){const s=new Ms(a,t,n);return s.texture.mapping=bc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function mc(a,t,n,s,l){a.viewport.set(t,n,s,l),a.scissor.set(t,n,s,l)}function W1(a,t,n){const s=new Float32Array(gs),l=new lt(0,1,0);return new sa({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:bd(),fragmentShader:`

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
		`,blending:za,depthTest:!1,depthWrite:!1})}function Z0(){return new sa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bd(),fragmentShader:`

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
		`,blending:za,depthTest:!1,depthWrite:!1})}function j0(){return new sa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:za,depthTest:!1,depthWrite:!1})}function bd(){return`

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
	`}function q1(a){let t=new WeakMap,n=null;function s(h){if(h&&h.isTexture){const p=h.mapping,m=p===Oh||p===Fh,g=p===Er||p===Tr;if(m||g){let _=t.get(h);const x=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return n===null&&(n=new q0(a)),_=m?n.fromEquirectangular(h,_):n.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),_.texture;if(_!==void 0)return _.texture;{const M=h.image;return m&&M&&M.height>0||g&&M&&l(M)?(n===null&&(n=new q0(a)),_=m?n.fromEquirectangular(h):n.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),h.addEventListener("dispose",c),_.texture):null}}}return h}function l(h){let p=0;const m=6;for(let g=0;g<m;g++)h[g]!==void 0&&p++;return p===m}function c(h){const p=h.target;p.removeEventListener("dispose",c);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function f(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Y1(a){const t={};function n(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=a.getExtension(s)}return t[s]=l,l}return{has:function(s){return n(s)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(s){const l=n(s);return l===null&&No("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function Z1(a,t,n,s){const l={},c=new WeakMap;function f(_){const x=_.target;x.index!==null&&t.remove(x.index);for(const E in x.attributes)t.remove(x.attributes[E]);x.removeEventListener("dispose",f),delete l[x.id];const M=c.get(x);M&&(t.remove(M),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function h(_,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,n.memory.geometries++),x}function p(_){const x=_.attributes;for(const M in x)t.update(x[M],a.ARRAY_BUFFER)}function m(_){const x=[],M=_.index,E=_.attributes.position;let T=0;if(M!==null){const P=M.array;T=M.version;for(let U=0,C=P.length;U<C;U+=3){const B=P[U+0],O=P[U+1],F=P[U+2];x.push(B,O,O,F,F,B)}}else if(E!==void 0){const P=E.array;T=E.version;for(let U=0,C=P.length/3-1;U<C;U+=3){const B=U+0,O=U+1,F=U+2;x.push(B,O,O,F,F,B)}}else return;const y=new(V_(x)?j_:Z_)(x,1);y.version=T;const v=c.get(_);v&&t.remove(v),c.set(_,y)}function g(_){const x=c.get(_);if(x){const M=_.index;M!==null&&x.version<M.version&&m(_)}else m(_);return c.get(_)}return{get:h,update:p,getWireframeAttribute:g}}function j1(a,t,n){let s;function l(x){s=x}let c,f;function h(x){c=x.type,f=x.bytesPerElement}function p(x,M){a.drawElements(s,M,c,x*f),n.update(M,s,1)}function m(x,M,E){E!==0&&(a.drawElementsInstanced(s,M,c,x*f,E),n.update(M,s,E))}function g(x,M,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,x,0,E);let y=0;for(let v=0;v<E;v++)y+=M[v];n.update(y,s,1)}function _(x,M,E,T){if(E===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<x.length;v++)m(x[v]/f,M[v],T[v]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,c,x,0,T,0,E);let v=0;for(let P=0;P<E;P++)v+=M[P]*T[P];n.update(v,s,1)}}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function K1(a){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,h){switch(n.calls++,f){case a.TRIANGLES:n.triangles+=h*(c/3);break;case a.LINES:n.lines+=h*(c/2);break;case a.LINE_STRIP:n.lines+=h*(c-1);break;case a.LINE_LOOP:n.lines+=h*c;break;case a.POINTS:n.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:l,update:s}}function Q1(a,t,n){const s=new WeakMap,l=new Je;function c(f,h,p){const m=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let x=s.get(h);if(x===void 0||x.count!==_){let w=function(){q.dispose(),s.delete(h),h.removeEventListener("dispose",w)};var M=w;x!==void 0&&x.texture.dispose();const E=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let C=0;E===!0&&(C=1),T===!0&&(C=2),y===!0&&(C=3);let B=h.attributes.position.count*C,O=1;B>t.maxTextureSize&&(O=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const F=new Float32Array(B*O*4*_),q=new X_(F,B,O,_);q.type=na,q.needsUpdate=!0;const D=C*4;for(let G=0;G<_;G++){const j=v[G],J=P[G],Q=U[G],st=B*O*4*G;for(let z=0;z<j.count;z++){const V=z*D;E===!0&&(l.fromBufferAttribute(j,z),F[st+V+0]=l.x,F[st+V+1]=l.y,F[st+V+2]=l.z,F[st+V+3]=0),T===!0&&(l.fromBufferAttribute(J,z),F[st+V+4]=l.x,F[st+V+5]=l.y,F[st+V+6]=l.z,F[st+V+7]=0),y===!0&&(l.fromBufferAttribute(Q,z),F[st+V+8]=l.x,F[st+V+9]=l.y,F[st+V+10]=l.z,F[st+V+11]=Q.itemSize===4?l.w:1)}}x={count:_,texture:q,size:new Ue(B,O)},s.set(h,x),h.addEventListener("dispose",w)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(a,"morphTexture",f.morphTexture,n);else{let E=0;for(let y=0;y<m.length;y++)E+=m[y];const T=h.morphTargetsRelative?1:1-E;p.getUniforms().setValue(a,"morphTargetBaseInfluence",T),p.getUniforms().setValue(a,"morphTargetInfluences",m)}p.getUniforms().setValue(a,"morphTargetsTexture",x.texture,n),p.getUniforms().setValue(a,"morphTargetsTextureSize",x.size)}return{update:c}}function J1(a,t,n,s){let l=new WeakMap;function c(p){const m=s.render.frame,g=p.geometry,_=t.get(p,g);if(l.get(_)!==m&&(t.update(_),l.set(_,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==m&&(n.update(p.instanceMatrix,a.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,a.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;l.get(x)!==m&&(x.update(),l.set(x,m))}return _}function f(){l=new WeakMap}function h(p){const m=p.target;m.removeEventListener("dispose",h),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:f}}const av=new Di,K0=new tv(1,1),sv=new X_,rv=new by,ov=new J_,Q0=[],J0=[],$0=new Float32Array(16),t_=new Float32Array(9),e_=new Float32Array(4);function Cr(a,t,n){const s=a[0];if(s<=0||s>0)return a;const l=t*n;let c=Q0[l];if(c===void 0&&(c=new Float32Array(l),Q0[l]=c),t!==0){s.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=n,a[f].toArray(c,h)}return c}function pn(a,t){if(a.length!==t.length)return!1;for(let n=0,s=a.length;n<s;n++)if(a[n]!==t[n])return!1;return!0}function mn(a,t){for(let n=0,s=t.length;n<s;n++)a[n]=t[n]}function wc(a,t){let n=J0[t];n===void 0&&(n=new Int32Array(t),J0[t]=n);for(let s=0;s!==t;++s)n[s]=a.allocateTextureUnit();return n}function $1(a,t){const n=this.cache;n[0]!==t&&(a.uniform1f(this.addr,t),n[0]=t)}function tT(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(a.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(pn(n,t))return;a.uniform2fv(this.addr,t),mn(n,t)}}function eT(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(a.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(a.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(pn(n,t))return;a.uniform3fv(this.addr,t),mn(n,t)}}function nT(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(a.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(pn(n,t))return;a.uniform4fv(this.addr,t),mn(n,t)}}function iT(a,t){const n=this.cache,s=t.elements;if(s===void 0){if(pn(n,t))return;a.uniformMatrix2fv(this.addr,!1,t),mn(n,t)}else{if(pn(n,s))return;e_.set(s),a.uniformMatrix2fv(this.addr,!1,e_),mn(n,s)}}function aT(a,t){const n=this.cache,s=t.elements;if(s===void 0){if(pn(n,t))return;a.uniformMatrix3fv(this.addr,!1,t),mn(n,t)}else{if(pn(n,s))return;t_.set(s),a.uniformMatrix3fv(this.addr,!1,t_),mn(n,s)}}function sT(a,t){const n=this.cache,s=t.elements;if(s===void 0){if(pn(n,t))return;a.uniformMatrix4fv(this.addr,!1,t),mn(n,t)}else{if(pn(n,s))return;$0.set(s),a.uniformMatrix4fv(this.addr,!1,$0),mn(n,s)}}function rT(a,t){const n=this.cache;n[0]!==t&&(a.uniform1i(this.addr,t),n[0]=t)}function oT(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(a.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(pn(n,t))return;a.uniform2iv(this.addr,t),mn(n,t)}}function lT(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(a.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(pn(n,t))return;a.uniform3iv(this.addr,t),mn(n,t)}}function cT(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(a.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(pn(n,t))return;a.uniform4iv(this.addr,t),mn(n,t)}}function uT(a,t){const n=this.cache;n[0]!==t&&(a.uniform1ui(this.addr,t),n[0]=t)}function fT(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(a.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(pn(n,t))return;a.uniform2uiv(this.addr,t),mn(n,t)}}function hT(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(a.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(pn(n,t))return;a.uniform3uiv(this.addr,t),mn(n,t)}}function dT(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(a.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(pn(n,t))return;a.uniform4uiv(this.addr,t),mn(n,t)}}function pT(a,t,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l);let c;this.type===a.SAMPLER_2D_SHADOW?(K0.compareFunction=G_,c=K0):c=av,n.setTexture2D(t||c,l)}function mT(a,t,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),n.setTexture3D(t||rv,l)}function gT(a,t,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),n.setTextureCube(t||ov,l)}function _T(a,t,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),n.setTexture2DArray(t||sv,l)}function vT(a){switch(a){case 5126:return $1;case 35664:return tT;case 35665:return eT;case 35666:return nT;case 35674:return iT;case 35675:return aT;case 35676:return sT;case 5124:case 35670:return rT;case 35667:case 35671:return oT;case 35668:case 35672:return lT;case 35669:case 35673:return cT;case 5125:return uT;case 36294:return fT;case 36295:return hT;case 36296:return dT;case 35678:case 36198:case 36298:case 36306:case 35682:return pT;case 35679:case 36299:case 36307:return mT;case 35680:case 36300:case 36308:case 36293:return gT;case 36289:case 36303:case 36311:case 36292:return _T}}function xT(a,t){a.uniform1fv(this.addr,t)}function ST(a,t){const n=Cr(t,this.size,2);a.uniform2fv(this.addr,n)}function yT(a,t){const n=Cr(t,this.size,3);a.uniform3fv(this.addr,n)}function MT(a,t){const n=Cr(t,this.size,4);a.uniform4fv(this.addr,n)}function ET(a,t){const n=Cr(t,this.size,4);a.uniformMatrix2fv(this.addr,!1,n)}function TT(a,t){const n=Cr(t,this.size,9);a.uniformMatrix3fv(this.addr,!1,n)}function AT(a,t){const n=Cr(t,this.size,16);a.uniformMatrix4fv(this.addr,!1,n)}function bT(a,t){a.uniform1iv(this.addr,t)}function RT(a,t){a.uniform2iv(this.addr,t)}function CT(a,t){a.uniform3iv(this.addr,t)}function wT(a,t){a.uniform4iv(this.addr,t)}function DT(a,t){a.uniform1uiv(this.addr,t)}function UT(a,t){a.uniform2uiv(this.addr,t)}function LT(a,t){a.uniform3uiv(this.addr,t)}function NT(a,t){a.uniform4uiv(this.addr,t)}function OT(a,t,n){const s=this.cache,l=t.length,c=wc(n,l);pn(s,c)||(a.uniform1iv(this.addr,c),mn(s,c));for(let f=0;f!==l;++f)n.setTexture2D(t[f]||av,c[f])}function FT(a,t,n){const s=this.cache,l=t.length,c=wc(n,l);pn(s,c)||(a.uniform1iv(this.addr,c),mn(s,c));for(let f=0;f!==l;++f)n.setTexture3D(t[f]||rv,c[f])}function PT(a,t,n){const s=this.cache,l=t.length,c=wc(n,l);pn(s,c)||(a.uniform1iv(this.addr,c),mn(s,c));for(let f=0;f!==l;++f)n.setTextureCube(t[f]||ov,c[f])}function zT(a,t,n){const s=this.cache,l=t.length,c=wc(n,l);pn(s,c)||(a.uniform1iv(this.addr,c),mn(s,c));for(let f=0;f!==l;++f)n.setTexture2DArray(t[f]||sv,c[f])}function BT(a){switch(a){case 5126:return xT;case 35664:return ST;case 35665:return yT;case 35666:return MT;case 35674:return ET;case 35675:return TT;case 35676:return AT;case 5124:case 35670:return bT;case 35667:case 35671:return RT;case 35668:case 35672:return CT;case 35669:case 35673:return wT;case 5125:return DT;case 36294:return UT;case 36295:return LT;case 36296:return NT;case 35678:case 36198:case 36298:case 36306:case 35682:return OT;case 35679:case 36299:case 36307:return FT;case 35680:case 36300:case 36308:case 36293:return PT;case 36289:case 36303:case 36311:case 36292:return zT}}class IT{constructor(t,n,s){this.id=t,this.addr=s,this.cache=[],this.type=n.type,this.setValue=vT(n.type)}}class HT{constructor(t,n,s){this.id=t,this.addr=s,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=BT(n.type)}}class GT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(t,n[h.id],s)}}}const Sh=/(\w+)(\])?(\[|\.)?/g;function n_(a,t){a.seq.push(t),a.map[t.id]=t}function VT(a,t,n){const s=a.name,l=s.length;for(Sh.lastIndex=0;;){const c=Sh.exec(s),f=Sh.lastIndex;let h=c[1];const p=c[2]==="]",m=c[3];if(p&&(h=h|0),m===void 0||m==="["&&f+2===l){n_(n,m===void 0?new IT(h,a,t):new HT(h,a,t));break}else{let _=n.map[h];_===void 0&&(_=new GT(h),n_(n,_)),n=_}}}class Mc{constructor(t,n){this.seq=[],this.map={};const s=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(n,l),f=t.getUniformLocation(n,c.name);VT(c,f,this)}}setValue(t,n,s,l){const c=this.map[n];c!==void 0&&c.setValue(t,s,l)}setOptional(t,n,s){const l=n[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,n,s,l){for(let c=0,f=n.length;c!==f;++c){const h=n[c],p=s[h.id];p.needsUpdate!==!1&&h.setValue(t,p.value,l)}}static seqWithValue(t,n){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in n&&s.push(f)}return s}}function i_(a,t,n){const s=a.createShader(t);return a.shaderSource(s,n),a.compileShader(s),s}const XT=37297;let kT=0;function WT(a,t){const n=a.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let f=l;f<c;f++){const h=f+1;s.push(`${h===t?">":" "} ${h}: ${n[f]}`)}return s.join(`
`)}const a_=new ue;function qT(a){Re._getMatrix(a_,Re.workingColorSpace,a);const t=`mat3( ${a_.elements.map(n=>n.toFixed(4))} )`;switch(Re.getTransfer(a)){case Ec:return[t,"LinearTransferOETF"];case Be:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",a),[t,"LinearTransferOETF"]}}function s_(a,t,n){const s=a.getShaderParameter(t,a.COMPILE_STATUS),c=(a.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return n.toUpperCase()+`

`+c+`

`+WT(a.getShaderSource(t),h)}else return c}function YT(a,t){const n=qT(t);return[`vec4 ${a}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function ZT(a,t){let n;switch(t){case $S:n="Linear";break;case ty:n="Reinhard";break;case ey:n="Cineon";break;case ny:n="ACESFilmic";break;case ay:n="AgX";break;case sy:n="Neutral";break;case iy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+a+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const gc=new lt;function jT(){Re.getLuminanceCoefficients(gc);const a=gc.x.toFixed(4),t=gc.y.toFixed(4),n=gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function KT(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ro).join(`
`)}function QT(a){const t=[];for(const n in a){const s=a[n];s!==!1&&t.push("#define "+n+" "+s)}return t.join(`
`)}function JT(a,t){const n={},s=a.getProgramParameter(t,a.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=a.getActiveAttrib(t,l),f=c.name;let h=1;c.type===a.FLOAT_MAT2&&(h=2),c.type===a.FLOAT_MAT3&&(h=3),c.type===a.FLOAT_MAT4&&(h=4),n[f]={type:c.type,location:a.getAttribLocation(t,f),locationSize:h}}return n}function Ro(a){return a!==""}function r_(a,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function o_(a,t){return a.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const $T=/^[ \t]*#include +<([\w\d./]+)>/gm;function dd(a){return a.replace($T,eA)}const tA=new Map;function eA(a,t){let n=fe[t];if(n===void 0){const s=tA.get(t);if(s!==void 0)n=fe[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return dd(n)}const nA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function l_(a){return a.replace(nA,iA)}function iA(a,t,n,s){let l="";for(let c=parseInt(t);c<parseInt(n);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function c_(a){let t=`precision ${a.precision} float;
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
#define LOW_PRECISION`),t}function aA(a){let t="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===D_?t="SHADOWMAP_TYPE_PCF":a.shadowMapType===LS?t="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===ta&&(t="SHADOWMAP_TYPE_VSM"),t}function sA(a){let t="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Er:case Tr:t="ENVMAP_TYPE_CUBE";break;case bc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function rA(a){let t="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Tr:t="ENVMAP_MODE_REFRACTION";break}return t}function oA(a){let t="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case U_:t="ENVMAP_BLENDING_MULTIPLY";break;case QS:t="ENVMAP_BLENDING_MIX";break;case JS:t="ENVMAP_BLENDING_ADD";break}return t}function lA(a){const t=a.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:s,maxMip:n}}function cA(a,t,n,s){const l=a.getContext(),c=n.defines;let f=n.vertexShader,h=n.fragmentShader;const p=aA(n),m=sA(n),g=rA(n),_=oA(n),x=lA(n),M=KT(n),E=QT(c),T=l.createProgram();let y,v,P=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Ro).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Ro).join(`
`),v.length>0&&(v+=`
`)):(y=[c_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ro).join(`
`),v=[c_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ba?"#define TONE_MAPPING":"",n.toneMapping!==Ba?fe.tonemapping_pars_fragment:"",n.toneMapping!==Ba?ZT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,YT("linearToOutputTexel",n.outputColorSpace),jT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ro).join(`
`)),f=dd(f),f=r_(f,n),f=o_(f,n),h=dd(h),h=r_(h,n),h=o_(h,n),f=l_(f),h=l_(h),n.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",n.glslVersion===T0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===T0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const U=P+y+f,C=P+v+h,B=i_(l,l.VERTEX_SHADER,U),O=i_(l,l.FRAGMENT_SHADER,C);l.attachShader(T,B),l.attachShader(T,O),n.index0AttributeName!==void 0?l.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function F(G){if(a.debug.checkShaderErrors){const j=l.getProgramInfoLog(T)||"",J=l.getShaderInfoLog(B)||"",Q=l.getShaderInfoLog(O)||"",st=j.trim(),z=J.trim(),V=Q.trim();let X=!0,ft=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(X=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(l,T,B,O);else{const yt=s_(l,B,"vertex"),N=s_(l,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+st+`
`+yt+`
`+N)}else st!==""?console.warn("THREE.WebGLProgram: Program Info Log:",st):(z===""||V==="")&&(ft=!1);ft&&(G.diagnostics={runnable:X,programLog:st,vertexShader:{log:z,prefix:y},fragmentShader:{log:V,prefix:v}})}l.deleteShader(B),l.deleteShader(O),q=new Mc(l,T),D=JT(l,T)}let q;this.getUniforms=function(){return q===void 0&&F(this),q};let D;this.getAttributes=function(){return D===void 0&&F(this),D};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(T,XT)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=kT++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=B,this.fragmentShader=O,this}let uA=0;class fA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(n),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const s of n)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let s=n.get(t);return s===void 0&&(s=new Set,n.set(t,s)),s}_getShaderStage(t){const n=this.shaderCache;let s=n.get(t);return s===void 0&&(s=new hA(t),n.set(t,s)),s}}class hA{constructor(t){this.id=uA++,this.code=t,this.usedTimes=0}}function dA(a,t,n,s,l,c,f){const h=new W_,p=new fA,m=new Set,g=[],_=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(D){return m.add(D),D===0?"uv":`uv${D}`}function y(D,w,G,j,J){const Q=j.fog,st=J.geometry,z=D.isMeshStandardMaterial?j.environment:null,V=(D.isMeshStandardMaterial?n:t).get(D.envMap||z),X=V&&V.mapping===bc?V.image.height:null,ft=E[D.type];D.precision!==null&&(M=l.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const yt=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,N=yt!==void 0?yt.length:0;let nt=0;st.morphAttributes.position!==void 0&&(nt=1),st.morphAttributes.normal!==void 0&&(nt=2),st.morphAttributes.color!==void 0&&(nt=3);let xt,At,Nt,it;if(ft){const Ee=bi[ft];xt=Ee.vertexShader,At=Ee.fragmentShader}else xt=D.vertexShader,At=D.fragmentShader,p.update(D),Nt=p.getVertexShaderID(D),it=p.getFragmentShaderID(D);const ut=a.getRenderTarget(),Ct=a.state.buffers.depth.getReversed(),Pt=J.isInstancedMesh===!0,Xt=J.isBatchedMesh===!0,oe=!!D.map,Ze=!!D.matcap,H=!!V,xe=!!D.aoMap,ee=!!D.lightMap,$t=!!D.bumpMap,Yt=!!D.normalMap,Me=!!D.displacementMap,Gt=!!D.emissiveMap,ie=!!D.metalnessMap,We=!!D.roughnessMap,Xe=D.anisotropy>0,L=D.clearcoat>0,A=D.dispersion>0,$=D.iridescence>0,pt=D.sheen>0,Mt=D.transmission>0,ht=Xe&&!!D.anisotropyMap,jt=L&&!!D.clearcoatMap,Rt=L&&!!D.clearcoatNormalMap,wt=L&&!!D.clearcoatRoughnessMap,Bt=$&&!!D.iridescenceMap,vt=$&&!!D.iridescenceThicknessMap,bt=pt&&!!D.sheenColorMap,It=pt&&!!D.sheenRoughnessMap,Ut=!!D.specularMap,Lt=!!D.specularColorMap,ae=!!D.specularIntensityMap,W=Mt&&!!D.transmissionMap,Tt=Mt&&!!D.thicknessMap,Dt=!!D.gradientMap,Ht=!!D.alphaMap,Et=D.alphaTest>0,_t=!!D.alphaHash,Vt=!!D.extensions;let se=Ba;D.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(se=a.toneMapping);const Le={shaderID:ft,shaderType:D.type,shaderName:D.name,vertexShader:xt,fragmentShader:At,defines:D.defines,customVertexShaderID:Nt,customFragmentShaderID:it,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:Xt,batchingColor:Xt&&J._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&J.instanceColor!==null,instancingMorph:Pt&&J.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ut===null?a.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:Ar,alphaToCoverage:!!D.alphaToCoverage,map:oe,matcap:Ze,envMap:H,envMapMode:H&&V.mapping,envMapCubeUVHeight:X,aoMap:xe,lightMap:ee,bumpMap:$t,normalMap:Yt,displacementMap:x&&Me,emissiveMap:Gt,normalMapObjectSpace:Yt&&D.normalMapType===uy,normalMapTangentSpace:Yt&&D.normalMapType===cy,metalnessMap:ie,roughnessMap:We,anisotropy:Xe,anisotropyMap:ht,clearcoat:L,clearcoatMap:jt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:wt,dispersion:A,iridescence:$,iridescenceMap:Bt,iridescenceThicknessMap:vt,sheen:pt,sheenColorMap:bt,sheenRoughnessMap:It,specularMap:Ut,specularColorMap:Lt,specularIntensityMap:ae,transmission:Mt,transmissionMap:W,thicknessMap:Tt,gradientMap:Dt,opaque:D.transparent===!1&&D.blending===xs&&D.alphaToCoverage===!1,alphaMap:Ht,alphaTest:Et,alphaHash:_t,combine:D.combine,mapUv:oe&&T(D.map.channel),aoMapUv:xe&&T(D.aoMap.channel),lightMapUv:ee&&T(D.lightMap.channel),bumpMapUv:$t&&T(D.bumpMap.channel),normalMapUv:Yt&&T(D.normalMap.channel),displacementMapUv:Me&&T(D.displacementMap.channel),emissiveMapUv:Gt&&T(D.emissiveMap.channel),metalnessMapUv:ie&&T(D.metalnessMap.channel),roughnessMapUv:We&&T(D.roughnessMap.channel),anisotropyMapUv:ht&&T(D.anisotropyMap.channel),clearcoatMapUv:jt&&T(D.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&T(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&T(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&T(D.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&T(D.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&T(D.sheenColorMap.channel),sheenRoughnessMapUv:It&&T(D.sheenRoughnessMap.channel),specularMapUv:Ut&&T(D.specularMap.channel),specularColorMapUv:Lt&&T(D.specularColorMap.channel),specularIntensityMapUv:ae&&T(D.specularIntensityMap.channel),transmissionMapUv:W&&T(D.transmissionMap.channel),thicknessMapUv:Tt&&T(D.thicknessMap.channel),alphaMapUv:Ht&&T(D.alphaMap.channel),vertexTangents:!!st.attributes.tangent&&(Yt||Xe),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!st.attributes.uv&&(oe||Ht),fog:!!Q,useFog:D.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Ct,skinning:J.isSkinnedMesh===!0,morphTargets:st.morphAttributes.position!==void 0,morphNormals:st.morphAttributes.normal!==void 0,morphColors:st.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:nt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:D.dithering,shadowMapEnabled:a.shadowMap.enabled&&G.length>0,shadowMapType:a.shadowMap.type,toneMapping:se,decodeVideoTexture:oe&&D.map.isVideoTexture===!0&&Re.getTransfer(D.map.colorSpace)===Be,decodeVideoTextureEmissive:Gt&&D.emissiveMap.isVideoTexture===!0&&Re.getTransfer(D.emissiveMap.colorSpace)===Be,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===ea,flipSided:D.side===Hn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Vt&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&D.extensions.multiDraw===!0||Xt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Le.vertexUv1s=m.has(1),Le.vertexUv2s=m.has(2),Le.vertexUv3s=m.has(3),m.clear(),Le}function v(D){const w=[];if(D.shaderID?w.push(D.shaderID):(w.push(D.customVertexShaderID),w.push(D.customFragmentShaderID)),D.defines!==void 0)for(const G in D.defines)w.push(G),w.push(D.defines[G]);return D.isRawShaderMaterial===!1&&(P(w,D),U(w,D),w.push(a.outputColorSpace)),w.push(D.customProgramCacheKey),w.join()}function P(D,w){D.push(w.precision),D.push(w.outputColorSpace),D.push(w.envMapMode),D.push(w.envMapCubeUVHeight),D.push(w.mapUv),D.push(w.alphaMapUv),D.push(w.lightMapUv),D.push(w.aoMapUv),D.push(w.bumpMapUv),D.push(w.normalMapUv),D.push(w.displacementMapUv),D.push(w.emissiveMapUv),D.push(w.metalnessMapUv),D.push(w.roughnessMapUv),D.push(w.anisotropyMapUv),D.push(w.clearcoatMapUv),D.push(w.clearcoatNormalMapUv),D.push(w.clearcoatRoughnessMapUv),D.push(w.iridescenceMapUv),D.push(w.iridescenceThicknessMapUv),D.push(w.sheenColorMapUv),D.push(w.sheenRoughnessMapUv),D.push(w.specularMapUv),D.push(w.specularColorMapUv),D.push(w.specularIntensityMapUv),D.push(w.transmissionMapUv),D.push(w.thicknessMapUv),D.push(w.combine),D.push(w.fogExp2),D.push(w.sizeAttenuation),D.push(w.morphTargetsCount),D.push(w.morphAttributeCount),D.push(w.numDirLights),D.push(w.numPointLights),D.push(w.numSpotLights),D.push(w.numSpotLightMaps),D.push(w.numHemiLights),D.push(w.numRectAreaLights),D.push(w.numDirLightShadows),D.push(w.numPointLightShadows),D.push(w.numSpotLightShadows),D.push(w.numSpotLightShadowsWithMaps),D.push(w.numLightProbes),D.push(w.shadowMapType),D.push(w.toneMapping),D.push(w.numClippingPlanes),D.push(w.numClipIntersection),D.push(w.depthPacking)}function U(D,w){h.disableAll(),w.supportsVertexTextures&&h.enable(0),w.instancing&&h.enable(1),w.instancingColor&&h.enable(2),w.instancingMorph&&h.enable(3),w.matcap&&h.enable(4),w.envMap&&h.enable(5),w.normalMapObjectSpace&&h.enable(6),w.normalMapTangentSpace&&h.enable(7),w.clearcoat&&h.enable(8),w.iridescence&&h.enable(9),w.alphaTest&&h.enable(10),w.vertexColors&&h.enable(11),w.vertexAlphas&&h.enable(12),w.vertexUv1s&&h.enable(13),w.vertexUv2s&&h.enable(14),w.vertexUv3s&&h.enable(15),w.vertexTangents&&h.enable(16),w.anisotropy&&h.enable(17),w.alphaHash&&h.enable(18),w.batching&&h.enable(19),w.dispersion&&h.enable(20),w.batchingColor&&h.enable(21),w.gradientMap&&h.enable(22),D.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.reversedDepthBuffer&&h.enable(4),w.skinning&&h.enable(5),w.morphTargets&&h.enable(6),w.morphNormals&&h.enable(7),w.morphColors&&h.enable(8),w.premultipliedAlpha&&h.enable(9),w.shadowMapEnabled&&h.enable(10),w.doubleSided&&h.enable(11),w.flipSided&&h.enable(12),w.useDepthPacking&&h.enable(13),w.dithering&&h.enable(14),w.transmission&&h.enable(15),w.sheen&&h.enable(16),w.opaque&&h.enable(17),w.pointsUvs&&h.enable(18),w.decodeVideoTexture&&h.enable(19),w.decodeVideoTextureEmissive&&h.enable(20),w.alphaToCoverage&&h.enable(21),D.push(h.mask)}function C(D){const w=E[D.type];let G;if(w){const j=bi[w];G=Hy.clone(j.uniforms)}else G=D.uniforms;return G}function B(D,w){let G;for(let j=0,J=g.length;j<J;j++){const Q=g[j];if(Q.cacheKey===w){G=Q,++G.usedTimes;break}}return G===void 0&&(G=new cA(a,w,D,c),g.push(G)),G}function O(D){if(--D.usedTimes===0){const w=g.indexOf(D);g[w]=g[g.length-1],g.pop(),D.destroy()}}function F(D){p.remove(D)}function q(){p.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:C,acquireProgram:B,releaseProgram:O,releaseShaderCache:F,programs:g,dispose:q}}function pA(){let a=new WeakMap;function t(f){return a.has(f)}function n(f){let h=a.get(f);return h===void 0&&(h={},a.set(f,h)),h}function s(f){a.delete(f)}function l(f,h,p){a.get(f)[h]=p}function c(){a=new WeakMap}return{has:t,get:n,remove:s,update:l,dispose:c}}function mA(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.material.id!==t.material.id?a.material.id-t.material.id:a.z!==t.z?a.z-t.z:a.id-t.id}function u_(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.z!==t.z?t.z-a.z:a.id-t.id}function f_(){const a=[];let t=0;const n=[],s=[],l=[];function c(){t=0,n.length=0,s.length=0,l.length=0}function f(_,x,M,E,T,y){let v=a[t];return v===void 0?(v={id:_.id,object:_,geometry:x,material:M,groupOrder:E,renderOrder:_.renderOrder,z:T,group:y},a[t]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=M,v.groupOrder=E,v.renderOrder=_.renderOrder,v.z=T,v.group=y),t++,v}function h(_,x,M,E,T,y){const v=f(_,x,M,E,T,y);M.transmission>0?s.push(v):M.transparent===!0?l.push(v):n.push(v)}function p(_,x,M,E,T,y){const v=f(_,x,M,E,T,y);M.transmission>0?s.unshift(v):M.transparent===!0?l.unshift(v):n.unshift(v)}function m(_,x){n.length>1&&n.sort(_||mA),s.length>1&&s.sort(x||u_),l.length>1&&l.sort(x||u_)}function g(){for(let _=t,x=a.length;_<x;_++){const M=a[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:s,transparent:l,init:c,push:h,unshift:p,finish:g,sort:m}}function gA(){let a=new WeakMap;function t(s,l){const c=a.get(s);let f;return c===void 0?(f=new f_,a.set(s,[f])):l>=c.length?(f=new f_,c.push(f)):f=c[l],f}function n(){a=new WeakMap}return{get:t,dispose:n}}function _A(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new lt,color:new He};break;case"SpotLight":n={position:new lt,direction:new lt,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new lt,color:new He,distance:0,decay:0};break;case"HemisphereLight":n={direction:new lt,skyColor:new He,groundColor:new He};break;case"RectAreaLight":n={color:new He,position:new lt,halfWidth:new lt,halfHeight:new lt};break}return a[t.id]=n,n}}}function vA(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[t.id]=n,n}}}let xA=0;function SA(a,t){return(t.castShadow?2:0)-(a.castShadow?2:0)+(t.map?1:0)-(a.map?1:0)}function yA(a){const t=new _A,n=vA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new lt);const l=new lt,c=new dn,f=new dn;function h(m){let g=0,_=0,x=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let M=0,E=0,T=0,y=0,v=0,P=0,U=0,C=0,B=0,O=0,F=0;m.sort(SA);for(let D=0,w=m.length;D<w;D++){const G=m[D],j=G.color,J=G.intensity,Q=G.distance,st=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=j.r*J,_+=j.g*J,x+=j.b*J;else if(G.isLightProbe){for(let z=0;z<9;z++)s.probe[z].addScaledVector(G.sh.coefficients[z],J);F++}else if(G.isDirectionalLight){const z=t.get(G);if(z.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const V=G.shadow,X=n.get(G);X.shadowIntensity=V.intensity,X.shadowBias=V.bias,X.shadowNormalBias=V.normalBias,X.shadowRadius=V.radius,X.shadowMapSize=V.mapSize,s.directionalShadow[M]=X,s.directionalShadowMap[M]=st,s.directionalShadowMatrix[M]=G.shadow.matrix,P++}s.directional[M]=z,M++}else if(G.isSpotLight){const z=t.get(G);z.position.setFromMatrixPosition(G.matrixWorld),z.color.copy(j).multiplyScalar(J),z.distance=Q,z.coneCos=Math.cos(G.angle),z.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),z.decay=G.decay,s.spot[T]=z;const V=G.shadow;if(G.map&&(s.spotLightMap[B]=G.map,B++,V.updateMatrices(G),G.castShadow&&O++),s.spotLightMatrix[T]=V.matrix,G.castShadow){const X=n.get(G);X.shadowIntensity=V.intensity,X.shadowBias=V.bias,X.shadowNormalBias=V.normalBias,X.shadowRadius=V.radius,X.shadowMapSize=V.mapSize,s.spotShadow[T]=X,s.spotShadowMap[T]=st,C++}T++}else if(G.isRectAreaLight){const z=t.get(G);z.color.copy(j).multiplyScalar(J),z.halfWidth.set(G.width*.5,0,0),z.halfHeight.set(0,G.height*.5,0),s.rectArea[y]=z,y++}else if(G.isPointLight){const z=t.get(G);if(z.color.copy(G.color).multiplyScalar(G.intensity),z.distance=G.distance,z.decay=G.decay,G.castShadow){const V=G.shadow,X=n.get(G);X.shadowIntensity=V.intensity,X.shadowBias=V.bias,X.shadowNormalBias=V.normalBias,X.shadowRadius=V.radius,X.shadowMapSize=V.mapSize,X.shadowCameraNear=V.camera.near,X.shadowCameraFar=V.camera.far,s.pointShadow[E]=X,s.pointShadowMap[E]=st,s.pointShadowMatrix[E]=G.shadow.matrix,U++}s.point[E]=z,E++}else if(G.isHemisphereLight){const z=t.get(G);z.skyColor.copy(G.color).multiplyScalar(J),z.groundColor.copy(G.groundColor).multiplyScalar(J),s.hemi[v]=z,v++}}y>0&&(a.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ft.LTC_FLOAT_1,s.rectAreaLTC2=Ft.LTC_FLOAT_2):(s.rectAreaLTC1=Ft.LTC_HALF_1,s.rectAreaLTC2=Ft.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=x;const q=s.hash;(q.directionalLength!==M||q.pointLength!==E||q.spotLength!==T||q.rectAreaLength!==y||q.hemiLength!==v||q.numDirectionalShadows!==P||q.numPointShadows!==U||q.numSpotShadows!==C||q.numSpotMaps!==B||q.numLightProbes!==F)&&(s.directional.length=M,s.spot.length=T,s.rectArea.length=y,s.point.length=E,s.hemi.length=v,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=C+B-O,s.spotLightMap.length=B,s.numSpotLightShadowsWithMaps=O,s.numLightProbes=F,q.directionalLength=M,q.pointLength=E,q.spotLength=T,q.rectAreaLength=y,q.hemiLength=v,q.numDirectionalShadows=P,q.numPointShadows=U,q.numSpotShadows=C,q.numSpotMaps=B,q.numLightProbes=F,s.version=xA++)}function p(m,g){let _=0,x=0,M=0,E=0,T=0;const y=g.matrixWorldInverse;for(let v=0,P=m.length;v<P;v++){const U=m[v];if(U.isDirectionalLight){const C=s.directional[_];C.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(y),_++}else if(U.isSpotLight){const C=s.spot[M];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(y),M++}else if(U.isRectAreaLight){const C=s.rectArea[E];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(y),f.identity(),c.copy(U.matrixWorld),c.premultiply(y),f.extractRotation(c),C.halfWidth.set(U.width*.5,0,0),C.halfHeight.set(0,U.height*.5,0),C.halfWidth.applyMatrix4(f),C.halfHeight.applyMatrix4(f),E++}else if(U.isPointLight){const C=s.point[x];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(y),x++}else if(U.isHemisphereLight){const C=s.hemi[T];C.direction.setFromMatrixPosition(U.matrixWorld),C.direction.transformDirection(y),T++}}}return{setup:h,setupView:p,state:s}}function h_(a){const t=new yA(a),n=[],s=[];function l(g){m.camera=g,n.length=0,s.length=0}function c(g){n.push(g)}function f(g){s.push(g)}function h(){t.setup(n)}function p(g){t.setupView(n,g)}const m={lightsArray:n,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:h,setupLightsView:p,pushLight:c,pushShadow:f}}function MA(a){let t=new WeakMap;function n(l,c=0){const f=t.get(l);let h;return f===void 0?(h=new h_(a),t.set(l,[h])):c>=f.length?(h=new h_(a),f.push(h)):h=f[c],h}function s(){t=new WeakMap}return{get:n,dispose:s}}const EA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,TA=`uniform sampler2D shadow_pass;
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
}`;function AA(a,t,n){let s=new $_;const l=new Ue,c=new Ue,f=new Je,h=new Qy({depthPacking:ly}),p=new Jy,m={},g=n.maxTextureSize,_={[Ha]:Hn,[Hn]:Ha,[ea]:ea},x=new sa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:EA,fragmentShader:TA}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const E=new Ga;E.setAttribute("position",new xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new wi(E,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=D_;let v=this.type;this.render=function(O,F,q){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||O.length===0)return;const D=a.getRenderTarget(),w=a.getActiveCubeFace(),G=a.getActiveMipmapLevel(),j=a.state;j.setBlending(za),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const J=v!==ta&&this.type===ta,Q=v===ta&&this.type!==ta;for(let st=0,z=O.length;st<z;st++){const V=O[st],X=V.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;l.copy(X.mapSize);const ft=X.getFrameExtents();if(l.multiply(ft),c.copy(X.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/ft.x),l.x=c.x*ft.x,X.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/ft.y),l.y=c.y*ft.y,X.mapSize.y=c.y)),X.map===null||J===!0||Q===!0){const N=this.type!==ta?{minFilter:vi,magFilter:vi}:{};X.map!==null&&X.map.dispose(),X.map=new Ms(l.x,l.y,N),X.map.texture.name=V.name+".shadowMap",X.camera.updateProjectionMatrix()}a.setRenderTarget(X.map),a.clear();const yt=X.getViewportCount();for(let N=0;N<yt;N++){const nt=X.getViewport(N);f.set(c.x*nt.x,c.y*nt.y,c.x*nt.z,c.y*nt.w),j.viewport(f),X.updateMatrices(V,N),s=X.getFrustum(),C(F,q,X.camera,V,this.type)}X.isPointLightShadow!==!0&&this.type===ta&&P(X,q),X.needsUpdate=!1}v=this.type,y.needsUpdate=!1,a.setRenderTarget(D,w,G)};function P(O,F){const q=t.update(T);x.defines.VSM_SAMPLES!==O.blurSamples&&(x.defines.VSM_SAMPLES=O.blurSamples,M.defines.VSM_SAMPLES=O.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Ms(l.x,l.y)),x.uniforms.shadow_pass.value=O.map.texture,x.uniforms.resolution.value=O.mapSize,x.uniforms.radius.value=O.radius,a.setRenderTarget(O.mapPass),a.clear(),a.renderBufferDirect(F,null,q,x,T,null),M.uniforms.shadow_pass.value=O.mapPass.texture,M.uniforms.resolution.value=O.mapSize,M.uniforms.radius.value=O.radius,a.setRenderTarget(O.map),a.clear(),a.renderBufferDirect(F,null,q,M,T,null)}function U(O,F,q,D){let w=null;const G=q.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(G!==void 0)w=G;else if(w=q.isPointLight===!0?p:h,a.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const j=w.uuid,J=F.uuid;let Q=m[j];Q===void 0&&(Q={},m[j]=Q);let st=Q[J];st===void 0&&(st=w.clone(),Q[J]=st,F.addEventListener("dispose",B)),w=st}if(w.visible=F.visible,w.wireframe=F.wireframe,D===ta?w.side=F.shadowSide!==null?F.shadowSide:F.side:w.side=F.shadowSide!==null?F.shadowSide:_[F.side],w.alphaMap=F.alphaMap,w.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,w.map=F.map,w.clipShadows=F.clipShadows,w.clippingPlanes=F.clippingPlanes,w.clipIntersection=F.clipIntersection,w.displacementMap=F.displacementMap,w.displacementScale=F.displacementScale,w.displacementBias=F.displacementBias,w.wireframeLinewidth=F.wireframeLinewidth,w.linewidth=F.linewidth,q.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const j=a.properties.get(w);j.light=q}return w}function C(O,F,q,D,w){if(O.visible===!1)return;if(O.layers.test(F.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&w===ta)&&(!O.frustumCulled||s.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,O.matrixWorld);const J=t.update(O),Q=O.material;if(Array.isArray(Q)){const st=J.groups;for(let z=0,V=st.length;z<V;z++){const X=st[z],ft=Q[X.materialIndex];if(ft&&ft.visible){const yt=U(O,ft,D,w);O.onBeforeShadow(a,O,F,q,J,yt,X),a.renderBufferDirect(q,null,J,yt,O,X),O.onAfterShadow(a,O,F,q,J,yt,X)}}}else if(Q.visible){const st=U(O,Q,D,w);O.onBeforeShadow(a,O,F,q,J,st,null),a.renderBufferDirect(q,null,J,st,O,null),O.onAfterShadow(a,O,F,q,J,st,null)}}const j=O.children;for(let J=0,Q=j.length;J<Q;J++)C(j[J],F,q,D,w)}function B(O){O.target.removeEventListener("dispose",B);for(const q in m){const D=m[q],w=O.target.uuid;w in D&&(D[w].dispose(),delete D[w])}}}const bA={[Rh]:Ch,[wh]:Lh,[Dh]:Nh,[Mr]:Uh,[Ch]:Rh,[Lh]:wh,[Nh]:Dh,[Uh]:Mr};function RA(a,t){function n(){let W=!1;const Tt=new Je;let Dt=null;const Ht=new Je(0,0,0,0);return{setMask:function(Et){Dt!==Et&&!W&&(a.colorMask(Et,Et,Et,Et),Dt=Et)},setLocked:function(Et){W=Et},setClear:function(Et,_t,Vt,se,Le){Le===!0&&(Et*=se,_t*=se,Vt*=se),Tt.set(Et,_t,Vt,se),Ht.equals(Tt)===!1&&(a.clearColor(Et,_t,Vt,se),Ht.copy(Tt))},reset:function(){W=!1,Dt=null,Ht.set(-1,0,0,0)}}}function s(){let W=!1,Tt=!1,Dt=null,Ht=null,Et=null;return{setReversed:function(_t){if(Tt!==_t){const Vt=t.get("EXT_clip_control");_t?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),Tt=_t;const se=Et;Et=null,this.setClear(se)}},getReversed:function(){return Tt},setTest:function(_t){_t?ut(a.DEPTH_TEST):Ct(a.DEPTH_TEST)},setMask:function(_t){Dt!==_t&&!W&&(a.depthMask(_t),Dt=_t)},setFunc:function(_t){if(Tt&&(_t=bA[_t]),Ht!==_t){switch(_t){case Rh:a.depthFunc(a.NEVER);break;case Ch:a.depthFunc(a.ALWAYS);break;case wh:a.depthFunc(a.LESS);break;case Mr:a.depthFunc(a.LEQUAL);break;case Dh:a.depthFunc(a.EQUAL);break;case Uh:a.depthFunc(a.GEQUAL);break;case Lh:a.depthFunc(a.GREATER);break;case Nh:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Ht=_t}},setLocked:function(_t){W=_t},setClear:function(_t){Et!==_t&&(Tt&&(_t=1-_t),a.clearDepth(_t),Et=_t)},reset:function(){W=!1,Dt=null,Ht=null,Et=null,Tt=!1}}}function l(){let W=!1,Tt=null,Dt=null,Ht=null,Et=null,_t=null,Vt=null,se=null,Le=null;return{setTest:function(Ee){W||(Ee?ut(a.STENCIL_TEST):Ct(a.STENCIL_TEST))},setMask:function(Ee){Tt!==Ee&&!W&&(a.stencilMask(Ee),Tt=Ee)},setFunc:function(Ee,wn,$n){(Dt!==Ee||Ht!==wn||Et!==$n)&&(a.stencilFunc(Ee,wn,$n),Dt=Ee,Ht=wn,Et=$n)},setOp:function(Ee,wn,$n){(_t!==Ee||Vt!==wn||se!==$n)&&(a.stencilOp(Ee,wn,$n),_t=Ee,Vt=wn,se=$n)},setLocked:function(Ee){W=Ee},setClear:function(Ee){Le!==Ee&&(a.clearStencil(Ee),Le=Ee)},reset:function(){W=!1,Tt=null,Dt=null,Ht=null,Et=null,_t=null,Vt=null,se=null,Le=null}}}const c=new n,f=new s,h=new l,p=new WeakMap,m=new WeakMap;let g={},_={},x=new WeakMap,M=[],E=null,T=!1,y=null,v=null,P=null,U=null,C=null,B=null,O=null,F=new He(0,0,0),q=0,D=!1,w=null,G=null,j=null,J=null,Q=null;const st=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,V=0;const X=a.getParameter(a.VERSION);X.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(X)[1]),z=V>=1):X.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),z=V>=2);let ft=null,yt={};const N=a.getParameter(a.SCISSOR_BOX),nt=a.getParameter(a.VIEWPORT),xt=new Je().fromArray(N),At=new Je().fromArray(nt);function Nt(W,Tt,Dt,Ht){const Et=new Uint8Array(4),_t=a.createTexture();a.bindTexture(W,_t),a.texParameteri(W,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(W,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Vt=0;Vt<Dt;Vt++)W===a.TEXTURE_3D||W===a.TEXTURE_2D_ARRAY?a.texImage3D(Tt,0,a.RGBA,1,1,Ht,0,a.RGBA,a.UNSIGNED_BYTE,Et):a.texImage2D(Tt+Vt,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Et);return _t}const it={};it[a.TEXTURE_2D]=Nt(a.TEXTURE_2D,a.TEXTURE_2D,1),it[a.TEXTURE_CUBE_MAP]=Nt(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[a.TEXTURE_2D_ARRAY]=Nt(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),it[a.TEXTURE_3D]=Nt(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),ut(a.DEPTH_TEST),f.setFunc(Mr),$t(!1),Yt(v0),ut(a.CULL_FACE),xe(za);function ut(W){g[W]!==!0&&(a.enable(W),g[W]=!0)}function Ct(W){g[W]!==!1&&(a.disable(W),g[W]=!1)}function Pt(W,Tt){return _[W]!==Tt?(a.bindFramebuffer(W,Tt),_[W]=Tt,W===a.DRAW_FRAMEBUFFER&&(_[a.FRAMEBUFFER]=Tt),W===a.FRAMEBUFFER&&(_[a.DRAW_FRAMEBUFFER]=Tt),!0):!1}function Xt(W,Tt){let Dt=M,Ht=!1;if(W){Dt=x.get(Tt),Dt===void 0&&(Dt=[],x.set(Tt,Dt));const Et=W.textures;if(Dt.length!==Et.length||Dt[0]!==a.COLOR_ATTACHMENT0){for(let _t=0,Vt=Et.length;_t<Vt;_t++)Dt[_t]=a.COLOR_ATTACHMENT0+_t;Dt.length=Et.length,Ht=!0}}else Dt[0]!==a.BACK&&(Dt[0]=a.BACK,Ht=!0);Ht&&a.drawBuffers(Dt)}function oe(W){return E!==W?(a.useProgram(W),E=W,!0):!1}const Ze={[ms]:a.FUNC_ADD,[OS]:a.FUNC_SUBTRACT,[FS]:a.FUNC_REVERSE_SUBTRACT};Ze[PS]=a.MIN,Ze[zS]=a.MAX;const H={[BS]:a.ZERO,[IS]:a.ONE,[HS]:a.SRC_COLOR,[Ah]:a.SRC_ALPHA,[qS]:a.SRC_ALPHA_SATURATE,[kS]:a.DST_COLOR,[VS]:a.DST_ALPHA,[GS]:a.ONE_MINUS_SRC_COLOR,[bh]:a.ONE_MINUS_SRC_ALPHA,[WS]:a.ONE_MINUS_DST_COLOR,[XS]:a.ONE_MINUS_DST_ALPHA,[YS]:a.CONSTANT_COLOR,[ZS]:a.ONE_MINUS_CONSTANT_COLOR,[jS]:a.CONSTANT_ALPHA,[KS]:a.ONE_MINUS_CONSTANT_ALPHA};function xe(W,Tt,Dt,Ht,Et,_t,Vt,se,Le,Ee){if(W===za){T===!0&&(Ct(a.BLEND),T=!1);return}if(T===!1&&(ut(a.BLEND),T=!0),W!==NS){if(W!==y||Ee!==D){if((v!==ms||C!==ms)&&(a.blendEquation(a.FUNC_ADD),v=ms,C=ms),Ee)switch(W){case xs:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case x0:a.blendFunc(a.ONE,a.ONE);break;case S0:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case y0:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case xs:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case x0:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case S0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case y0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}P=null,U=null,B=null,O=null,F.set(0,0,0),q=0,y=W,D=Ee}return}Et=Et||Tt,_t=_t||Dt,Vt=Vt||Ht,(Tt!==v||Et!==C)&&(a.blendEquationSeparate(Ze[Tt],Ze[Et]),v=Tt,C=Et),(Dt!==P||Ht!==U||_t!==B||Vt!==O)&&(a.blendFuncSeparate(H[Dt],H[Ht],H[_t],H[Vt]),P=Dt,U=Ht,B=_t,O=Vt),(se.equals(F)===!1||Le!==q)&&(a.blendColor(se.r,se.g,se.b,Le),F.copy(se),q=Le),y=W,D=!1}function ee(W,Tt){W.side===ea?Ct(a.CULL_FACE):ut(a.CULL_FACE);let Dt=W.side===Hn;Tt&&(Dt=!Dt),$t(Dt),W.blending===xs&&W.transparent===!1?xe(za):xe(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),c.setMask(W.colorWrite);const Ht=W.stencilWrite;h.setTest(Ht),Ht&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Gt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ut(a.SAMPLE_ALPHA_TO_COVERAGE):Ct(a.SAMPLE_ALPHA_TO_COVERAGE)}function $t(W){w!==W&&(W?a.frontFace(a.CW):a.frontFace(a.CCW),w=W)}function Yt(W){W!==DS?(ut(a.CULL_FACE),W!==G&&(W===v0?a.cullFace(a.BACK):W===US?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Ct(a.CULL_FACE),G=W}function Me(W){W!==j&&(z&&a.lineWidth(W),j=W)}function Gt(W,Tt,Dt){W?(ut(a.POLYGON_OFFSET_FILL),(J!==Tt||Q!==Dt)&&(a.polygonOffset(Tt,Dt),J=Tt,Q=Dt)):Ct(a.POLYGON_OFFSET_FILL)}function ie(W){W?ut(a.SCISSOR_TEST):Ct(a.SCISSOR_TEST)}function We(W){W===void 0&&(W=a.TEXTURE0+st-1),ft!==W&&(a.activeTexture(W),ft=W)}function Xe(W,Tt,Dt){Dt===void 0&&(ft===null?Dt=a.TEXTURE0+st-1:Dt=ft);let Ht=yt[Dt];Ht===void 0&&(Ht={type:void 0,texture:void 0},yt[Dt]=Ht),(Ht.type!==W||Ht.texture!==Tt)&&(ft!==Dt&&(a.activeTexture(Dt),ft=Dt),a.bindTexture(W,Tt||it[W]),Ht.type=W,Ht.texture=Tt)}function L(){const W=yt[ft];W!==void 0&&W.type!==void 0&&(a.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function A(){try{a.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function $(){try{a.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function pt(){try{a.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Mt(){try{a.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ht(){try{a.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function jt(){try{a.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Rt(){try{a.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function wt(){try{a.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Bt(){try{a.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function vt(){try{a.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function bt(W){xt.equals(W)===!1&&(a.scissor(W.x,W.y,W.z,W.w),xt.copy(W))}function It(W){At.equals(W)===!1&&(a.viewport(W.x,W.y,W.z,W.w),At.copy(W))}function Ut(W,Tt){let Dt=m.get(Tt);Dt===void 0&&(Dt=new WeakMap,m.set(Tt,Dt));let Ht=Dt.get(W);Ht===void 0&&(Ht=a.getUniformBlockIndex(Tt,W.name),Dt.set(W,Ht))}function Lt(W,Tt){const Ht=m.get(Tt).get(W);p.get(Tt)!==Ht&&(a.uniformBlockBinding(Tt,Ht,W.__bindingPointIndex),p.set(Tt,Ht))}function ae(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),f.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),g={},ft=null,yt={},_={},x=new WeakMap,M=[],E=null,T=!1,y=null,v=null,P=null,U=null,C=null,B=null,O=null,F=new He(0,0,0),q=0,D=!1,w=null,G=null,j=null,J=null,Q=null,xt.set(0,0,a.canvas.width,a.canvas.height),At.set(0,0,a.canvas.width,a.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:ut,disable:Ct,bindFramebuffer:Pt,drawBuffers:Xt,useProgram:oe,setBlending:xe,setMaterial:ee,setFlipSided:$t,setCullFace:Yt,setLineWidth:Me,setPolygonOffset:Gt,setScissorTest:ie,activeTexture:We,bindTexture:Xe,unbindTexture:L,compressedTexImage2D:A,compressedTexImage3D:$,texImage2D:Bt,texImage3D:vt,updateUBOMapping:Ut,uniformBlockBinding:Lt,texStorage2D:Rt,texStorage3D:wt,texSubImage2D:pt,texSubImage3D:Mt,compressedTexSubImage2D:ht,compressedTexSubImage3D:jt,scissor:bt,viewport:It,reset:ae}}function CA(a,t,n,s,l,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Ue,g=new WeakMap;let _;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,A){return M?new OffscreenCanvas(L,A):Ac("canvas")}function T(L,A,$){let pt=1;const Mt=Xe(L);if((Mt.width>$||Mt.height>$)&&(pt=$/Math.max(Mt.width,Mt.height)),pt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ht=Math.floor(pt*Mt.width),jt=Math.floor(pt*Mt.height);_===void 0&&(_=E(ht,jt));const Rt=A?E(ht,jt):_;return Rt.width=ht,Rt.height=jt,Rt.getContext("2d").drawImage(L,0,0,ht,jt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+ht+"x"+jt+")."),Rt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),L;return L}function y(L){return L.generateMipmaps}function v(L){a.generateMipmap(L)}function P(L){return L.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?a.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function U(L,A,$,pt,Mt=!1){if(L!==null){if(a[L]!==void 0)return a[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ht=A;if(A===a.RED&&($===a.FLOAT&&(ht=a.R32F),$===a.HALF_FLOAT&&(ht=a.R16F),$===a.UNSIGNED_BYTE&&(ht=a.R8)),A===a.RED_INTEGER&&($===a.UNSIGNED_BYTE&&(ht=a.R8UI),$===a.UNSIGNED_SHORT&&(ht=a.R16UI),$===a.UNSIGNED_INT&&(ht=a.R32UI),$===a.BYTE&&(ht=a.R8I),$===a.SHORT&&(ht=a.R16I),$===a.INT&&(ht=a.R32I)),A===a.RG&&($===a.FLOAT&&(ht=a.RG32F),$===a.HALF_FLOAT&&(ht=a.RG16F),$===a.UNSIGNED_BYTE&&(ht=a.RG8)),A===a.RG_INTEGER&&($===a.UNSIGNED_BYTE&&(ht=a.RG8UI),$===a.UNSIGNED_SHORT&&(ht=a.RG16UI),$===a.UNSIGNED_INT&&(ht=a.RG32UI),$===a.BYTE&&(ht=a.RG8I),$===a.SHORT&&(ht=a.RG16I),$===a.INT&&(ht=a.RG32I)),A===a.RGB_INTEGER&&($===a.UNSIGNED_BYTE&&(ht=a.RGB8UI),$===a.UNSIGNED_SHORT&&(ht=a.RGB16UI),$===a.UNSIGNED_INT&&(ht=a.RGB32UI),$===a.BYTE&&(ht=a.RGB8I),$===a.SHORT&&(ht=a.RGB16I),$===a.INT&&(ht=a.RGB32I)),A===a.RGBA_INTEGER&&($===a.UNSIGNED_BYTE&&(ht=a.RGBA8UI),$===a.UNSIGNED_SHORT&&(ht=a.RGBA16UI),$===a.UNSIGNED_INT&&(ht=a.RGBA32UI),$===a.BYTE&&(ht=a.RGBA8I),$===a.SHORT&&(ht=a.RGBA16I),$===a.INT&&(ht=a.RGBA32I)),A===a.RGB&&($===a.UNSIGNED_INT_5_9_9_9_REV&&(ht=a.RGB9_E5),$===a.UNSIGNED_INT_10F_11F_11F_REV&&(ht=a.R11F_G11F_B10F)),A===a.RGBA){const jt=Mt?Ec:Re.getTransfer(pt);$===a.FLOAT&&(ht=a.RGBA32F),$===a.HALF_FLOAT&&(ht=a.RGBA16F),$===a.UNSIGNED_BYTE&&(ht=jt===Be?a.SRGB8_ALPHA8:a.RGBA8),$===a.UNSIGNED_SHORT_4_4_4_4&&(ht=a.RGBA4),$===a.UNSIGNED_SHORT_5_5_5_1&&(ht=a.RGB5_A1)}return(ht===a.R16F||ht===a.R32F||ht===a.RG16F||ht===a.RG32F||ht===a.RGBA16F||ht===a.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function C(L,A){let $;return L?A===null||A===ys||A===Do?$=a.DEPTH24_STENCIL8:A===na?$=a.DEPTH32F_STENCIL8:A===wo&&($=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===ys||A===Do?$=a.DEPTH_COMPONENT24:A===na?$=a.DEPTH_COMPONENT32F:A===wo&&($=a.DEPTH_COMPONENT16),$}function B(L,A){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==vi&&L.minFilter!==Ri?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function O(L){const A=L.target;A.removeEventListener("dispose",O),q(A),A.isVideoTexture&&g.delete(A)}function F(L){const A=L.target;A.removeEventListener("dispose",F),w(A)}function q(L){const A=s.get(L);if(A.__webglInit===void 0)return;const $=L.source,pt=x.get($);if(pt){const Mt=pt[A.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&D(L),Object.keys(pt).length===0&&x.delete($)}s.remove(L)}function D(L){const A=s.get(L);a.deleteTexture(A.__webglTexture);const $=L.source,pt=x.get($);delete pt[A.__cacheKey],f.memory.textures--}function w(L){const A=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(A.__webglFramebuffer[pt]))for(let Mt=0;Mt<A.__webglFramebuffer[pt].length;Mt++)a.deleteFramebuffer(A.__webglFramebuffer[pt][Mt]);else a.deleteFramebuffer(A.__webglFramebuffer[pt]);A.__webglDepthbuffer&&a.deleteRenderbuffer(A.__webglDepthbuffer[pt])}else{if(Array.isArray(A.__webglFramebuffer))for(let pt=0;pt<A.__webglFramebuffer.length;pt++)a.deleteFramebuffer(A.__webglFramebuffer[pt]);else a.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&a.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&a.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let pt=0;pt<A.__webglColorRenderbuffer.length;pt++)A.__webglColorRenderbuffer[pt]&&a.deleteRenderbuffer(A.__webglColorRenderbuffer[pt]);A.__webglDepthRenderbuffer&&a.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const $=L.textures;for(let pt=0,Mt=$.length;pt<Mt;pt++){const ht=s.get($[pt]);ht.__webglTexture&&(a.deleteTexture(ht.__webglTexture),f.memory.textures--),s.remove($[pt])}s.remove(L)}let G=0;function j(){G=0}function J(){const L=G;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),G+=1,L}function Q(L){const A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()}function st(L,A){const $=s.get(L);if(L.isVideoTexture&&ie(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&$.__version!==L.version){const pt=L.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it($,L,A);return}}else L.isExternalTexture&&($.__webglTexture=L.sourceTexture?L.sourceTexture:null);n.bindTexture(a.TEXTURE_2D,$.__webglTexture,a.TEXTURE0+A)}function z(L,A){const $=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){it($,L,A);return}n.bindTexture(a.TEXTURE_2D_ARRAY,$.__webglTexture,a.TEXTURE0+A)}function V(L,A){const $=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){it($,L,A);return}n.bindTexture(a.TEXTURE_3D,$.__webglTexture,a.TEXTURE0+A)}function X(L,A){const $=s.get(L);if(L.version>0&&$.__version!==L.version){ut($,L,A);return}n.bindTexture(a.TEXTURE_CUBE_MAP,$.__webglTexture,a.TEXTURE0+A)}const ft={[Ph]:a.REPEAT,[_s]:a.CLAMP_TO_EDGE,[zh]:a.MIRRORED_REPEAT},yt={[vi]:a.NEAREST,[ry]:a.NEAREST_MIPMAP_NEAREST,[jl]:a.NEAREST_MIPMAP_LINEAR,[Ri]:a.LINEAR,[kf]:a.LINEAR_MIPMAP_NEAREST,[vs]:a.LINEAR_MIPMAP_LINEAR},N={[fy]:a.NEVER,[_y]:a.ALWAYS,[hy]:a.LESS,[G_]:a.LEQUAL,[dy]:a.EQUAL,[gy]:a.GEQUAL,[py]:a.GREATER,[my]:a.NOTEQUAL};function nt(L,A){if(A.type===na&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Ri||A.magFilter===kf||A.magFilter===jl||A.magFilter===vs||A.minFilter===Ri||A.minFilter===kf||A.minFilter===jl||A.minFilter===vs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(L,a.TEXTURE_WRAP_S,ft[A.wrapS]),a.texParameteri(L,a.TEXTURE_WRAP_T,ft[A.wrapT]),(L===a.TEXTURE_3D||L===a.TEXTURE_2D_ARRAY)&&a.texParameteri(L,a.TEXTURE_WRAP_R,ft[A.wrapR]),a.texParameteri(L,a.TEXTURE_MAG_FILTER,yt[A.magFilter]),a.texParameteri(L,a.TEXTURE_MIN_FILTER,yt[A.minFilter]),A.compareFunction&&(a.texParameteri(L,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(L,a.TEXTURE_COMPARE_FUNC,N[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===vi||A.minFilter!==jl&&A.minFilter!==vs||A.type===na&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||s.get(A).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");a.texParameterf(L,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),s.get(A).__currentAnisotropy=A.anisotropy}}}function xt(L,A){let $=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",O));const pt=A.source;let Mt=x.get(pt);Mt===void 0&&(Mt={},x.set(pt,Mt));const ht=Q(A);if(ht!==L.__cacheKey){Mt[ht]===void 0&&(Mt[ht]={texture:a.createTexture(),usedTimes:0},f.memory.textures++,$=!0),Mt[ht].usedTimes++;const jt=Mt[L.__cacheKey];jt!==void 0&&(Mt[L.__cacheKey].usedTimes--,jt.usedTimes===0&&D(A)),L.__cacheKey=ht,L.__webglTexture=Mt[ht].texture}return $}function At(L,A,$){return Math.floor(Math.floor(L/$)/A)}function Nt(L,A,$,pt){const ht=L.updateRanges;if(ht.length===0)n.texSubImage2D(a.TEXTURE_2D,0,0,0,A.width,A.height,$,pt,A.data);else{ht.sort((vt,bt)=>vt.start-bt.start);let jt=0;for(let vt=1;vt<ht.length;vt++){const bt=ht[jt],It=ht[vt],Ut=bt.start+bt.count,Lt=At(It.start,A.width,4),ae=At(bt.start,A.width,4);It.start<=Ut+1&&Lt===ae&&At(It.start+It.count-1,A.width,4)===Lt?bt.count=Math.max(bt.count,It.start+It.count-bt.start):(++jt,ht[jt]=It)}ht.length=jt+1;const Rt=a.getParameter(a.UNPACK_ROW_LENGTH),wt=a.getParameter(a.UNPACK_SKIP_PIXELS),Bt=a.getParameter(a.UNPACK_SKIP_ROWS);a.pixelStorei(a.UNPACK_ROW_LENGTH,A.width);for(let vt=0,bt=ht.length;vt<bt;vt++){const It=ht[vt],Ut=Math.floor(It.start/4),Lt=Math.ceil(It.count/4),ae=Ut%A.width,W=Math.floor(Ut/A.width),Tt=Lt,Dt=1;a.pixelStorei(a.UNPACK_SKIP_PIXELS,ae),a.pixelStorei(a.UNPACK_SKIP_ROWS,W),n.texSubImage2D(a.TEXTURE_2D,0,ae,W,Tt,Dt,$,pt,A.data)}L.clearUpdateRanges(),a.pixelStorei(a.UNPACK_ROW_LENGTH,Rt),a.pixelStorei(a.UNPACK_SKIP_PIXELS,wt),a.pixelStorei(a.UNPACK_SKIP_ROWS,Bt)}}function it(L,A,$){let pt=a.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(pt=a.TEXTURE_2D_ARRAY),A.isData3DTexture&&(pt=a.TEXTURE_3D);const Mt=xt(L,A),ht=A.source;n.bindTexture(pt,L.__webglTexture,a.TEXTURE0+$);const jt=s.get(ht);if(ht.version!==jt.__version||Mt===!0){n.activeTexture(a.TEXTURE0+$);const Rt=Re.getPrimaries(Re.workingColorSpace),wt=A.colorSpace===Pa?null:Re.getPrimaries(A.colorSpace),Bt=A.colorSpace===Pa||Rt===wt?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,A.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,A.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);let vt=T(A.image,!1,l.maxTextureSize);vt=We(A,vt);const bt=c.convert(A.format,A.colorSpace),It=c.convert(A.type);let Ut=U(A.internalFormat,bt,It,A.colorSpace,A.isVideoTexture);nt(pt,A);let Lt;const ae=A.mipmaps,W=A.isVideoTexture!==!0,Tt=jt.__version===void 0||Mt===!0,Dt=ht.dataReady,Ht=B(A,vt);if(A.isDepthTexture)Ut=C(A.format===Lo,A.type),Tt&&(W?n.texStorage2D(a.TEXTURE_2D,1,Ut,vt.width,vt.height):n.texImage2D(a.TEXTURE_2D,0,Ut,vt.width,vt.height,0,bt,It,null));else if(A.isDataTexture)if(ae.length>0){W&&Tt&&n.texStorage2D(a.TEXTURE_2D,Ht,Ut,ae[0].width,ae[0].height);for(let Et=0,_t=ae.length;Et<_t;Et++)Lt=ae[Et],W?Dt&&n.texSubImage2D(a.TEXTURE_2D,Et,0,0,Lt.width,Lt.height,bt,It,Lt.data):n.texImage2D(a.TEXTURE_2D,Et,Ut,Lt.width,Lt.height,0,bt,It,Lt.data);A.generateMipmaps=!1}else W?(Tt&&n.texStorage2D(a.TEXTURE_2D,Ht,Ut,vt.width,vt.height),Dt&&Nt(A,vt,bt,It)):n.texImage2D(a.TEXTURE_2D,0,Ut,vt.width,vt.height,0,bt,It,vt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){W&&Tt&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Ht,Ut,ae[0].width,ae[0].height,vt.depth);for(let Et=0,_t=ae.length;Et<_t;Et++)if(Lt=ae[Et],A.format!==_i)if(bt!==null)if(W){if(Dt)if(A.layerUpdates.size>0){const Vt=V0(Lt.width,Lt.height,A.format,A.type);for(const se of A.layerUpdates){const Le=Lt.data.subarray(se*Vt/Lt.data.BYTES_PER_ELEMENT,(se+1)*Vt/Lt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Et,0,0,se,Lt.width,Lt.height,1,bt,Le)}A.clearLayerUpdates()}else n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Et,0,0,0,Lt.width,Lt.height,vt.depth,bt,Lt.data)}else n.compressedTexImage3D(a.TEXTURE_2D_ARRAY,Et,Ut,Lt.width,Lt.height,vt.depth,0,Lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Dt&&n.texSubImage3D(a.TEXTURE_2D_ARRAY,Et,0,0,0,Lt.width,Lt.height,vt.depth,bt,It,Lt.data):n.texImage3D(a.TEXTURE_2D_ARRAY,Et,Ut,Lt.width,Lt.height,vt.depth,0,bt,It,Lt.data)}else{W&&Tt&&n.texStorage2D(a.TEXTURE_2D,Ht,Ut,ae[0].width,ae[0].height);for(let Et=0,_t=ae.length;Et<_t;Et++)Lt=ae[Et],A.format!==_i?bt!==null?W?Dt&&n.compressedTexSubImage2D(a.TEXTURE_2D,Et,0,0,Lt.width,Lt.height,bt,Lt.data):n.compressedTexImage2D(a.TEXTURE_2D,Et,Ut,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Dt&&n.texSubImage2D(a.TEXTURE_2D,Et,0,0,Lt.width,Lt.height,bt,It,Lt.data):n.texImage2D(a.TEXTURE_2D,Et,Ut,Lt.width,Lt.height,0,bt,It,Lt.data)}else if(A.isDataArrayTexture)if(W){if(Tt&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Ht,Ut,vt.width,vt.height,vt.depth),Dt)if(A.layerUpdates.size>0){const Et=V0(vt.width,vt.height,A.format,A.type);for(const _t of A.layerUpdates){const Vt=vt.data.subarray(_t*Et/vt.data.BYTES_PER_ELEMENT,(_t+1)*Et/vt.data.BYTES_PER_ELEMENT);n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,_t,vt.width,vt.height,1,bt,It,Vt)}A.clearLayerUpdates()}else n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,vt.width,vt.height,vt.depth,bt,It,vt.data)}else n.texImage3D(a.TEXTURE_2D_ARRAY,0,Ut,vt.width,vt.height,vt.depth,0,bt,It,vt.data);else if(A.isData3DTexture)W?(Tt&&n.texStorage3D(a.TEXTURE_3D,Ht,Ut,vt.width,vt.height,vt.depth),Dt&&n.texSubImage3D(a.TEXTURE_3D,0,0,0,0,vt.width,vt.height,vt.depth,bt,It,vt.data)):n.texImage3D(a.TEXTURE_3D,0,Ut,vt.width,vt.height,vt.depth,0,bt,It,vt.data);else if(A.isFramebufferTexture){if(Tt)if(W)n.texStorage2D(a.TEXTURE_2D,Ht,Ut,vt.width,vt.height);else{let Et=vt.width,_t=vt.height;for(let Vt=0;Vt<Ht;Vt++)n.texImage2D(a.TEXTURE_2D,Vt,Ut,Et,_t,0,bt,It,null),Et>>=1,_t>>=1}}else if(ae.length>0){if(W&&Tt){const Et=Xe(ae[0]);n.texStorage2D(a.TEXTURE_2D,Ht,Ut,Et.width,Et.height)}for(let Et=0,_t=ae.length;Et<_t;Et++)Lt=ae[Et],W?Dt&&n.texSubImage2D(a.TEXTURE_2D,Et,0,0,bt,It,Lt):n.texImage2D(a.TEXTURE_2D,Et,Ut,bt,It,Lt);A.generateMipmaps=!1}else if(W){if(Tt){const Et=Xe(vt);n.texStorage2D(a.TEXTURE_2D,Ht,Ut,Et.width,Et.height)}Dt&&n.texSubImage2D(a.TEXTURE_2D,0,0,0,bt,It,vt)}else n.texImage2D(a.TEXTURE_2D,0,Ut,bt,It,vt);y(A)&&v(pt),jt.__version=ht.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function ut(L,A,$){if(A.image.length!==6)return;const pt=xt(L,A),Mt=A.source;n.bindTexture(a.TEXTURE_CUBE_MAP,L.__webglTexture,a.TEXTURE0+$);const ht=s.get(Mt);if(Mt.version!==ht.__version||pt===!0){n.activeTexture(a.TEXTURE0+$);const jt=Re.getPrimaries(Re.workingColorSpace),Rt=A.colorSpace===Pa?null:Re.getPrimaries(A.colorSpace),wt=A.colorSpace===Pa||jt===Rt?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,A.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,A.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const Bt=A.isCompressedTexture||A.image[0].isCompressedTexture,vt=A.image[0]&&A.image[0].isDataTexture,bt=[];for(let _t=0;_t<6;_t++)!Bt&&!vt?bt[_t]=T(A.image[_t],!0,l.maxCubemapSize):bt[_t]=vt?A.image[_t].image:A.image[_t],bt[_t]=We(A,bt[_t]);const It=bt[0],Ut=c.convert(A.format,A.colorSpace),Lt=c.convert(A.type),ae=U(A.internalFormat,Ut,Lt,A.colorSpace),W=A.isVideoTexture!==!0,Tt=ht.__version===void 0||pt===!0,Dt=Mt.dataReady;let Ht=B(A,It);nt(a.TEXTURE_CUBE_MAP,A);let Et;if(Bt){W&&Tt&&n.texStorage2D(a.TEXTURE_CUBE_MAP,Ht,ae,It.width,It.height);for(let _t=0;_t<6;_t++){Et=bt[_t].mipmaps;for(let Vt=0;Vt<Et.length;Vt++){const se=Et[Vt];A.format!==_i?Ut!==null?W?Dt&&n.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Vt,0,0,se.width,se.height,Ut,se.data):n.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Vt,ae,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Dt&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Vt,0,0,se.width,se.height,Ut,Lt,se.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Vt,ae,se.width,se.height,0,Ut,Lt,se.data)}}}else{if(Et=A.mipmaps,W&&Tt){Et.length>0&&Ht++;const _t=Xe(bt[0]);n.texStorage2D(a.TEXTURE_CUBE_MAP,Ht,ae,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(vt){W?Dt&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,bt[_t].width,bt[_t].height,Ut,Lt,bt[_t].data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ae,bt[_t].width,bt[_t].height,0,Ut,Lt,bt[_t].data);for(let Vt=0;Vt<Et.length;Vt++){const Le=Et[Vt].image[_t].image;W?Dt&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Vt+1,0,0,Le.width,Le.height,Ut,Lt,Le.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Vt+1,ae,Le.width,Le.height,0,Ut,Lt,Le.data)}}else{W?Dt&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Ut,Lt,bt[_t]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ae,Ut,Lt,bt[_t]);for(let Vt=0;Vt<Et.length;Vt++){const se=Et[Vt];W?Dt&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Vt+1,0,0,Ut,Lt,se.image[_t]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Vt+1,ae,Ut,Lt,se.image[_t])}}}y(A)&&v(a.TEXTURE_CUBE_MAP),ht.__version=Mt.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function Ct(L,A,$,pt,Mt,ht){const jt=c.convert($.format,$.colorSpace),Rt=c.convert($.type),wt=U($.internalFormat,jt,Rt,$.colorSpace),Bt=s.get(A),vt=s.get($);if(vt.__renderTarget=A,!Bt.__hasExternalTextures){const bt=Math.max(1,A.width>>ht),It=Math.max(1,A.height>>ht);Mt===a.TEXTURE_3D||Mt===a.TEXTURE_2D_ARRAY?n.texImage3D(Mt,ht,wt,bt,It,A.depth,0,jt,Rt,null):n.texImage2D(Mt,ht,wt,bt,It,0,jt,Rt,null)}n.bindFramebuffer(a.FRAMEBUFFER,L),Gt(A)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,pt,Mt,vt.__webglTexture,0,Me(A)):(Mt===a.TEXTURE_2D||Mt>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,pt,Mt,vt.__webglTexture,ht),n.bindFramebuffer(a.FRAMEBUFFER,null)}function Pt(L,A,$){if(a.bindRenderbuffer(a.RENDERBUFFER,L),A.depthBuffer){const pt=A.depthTexture,Mt=pt&&pt.isDepthTexture?pt.type:null,ht=C(A.stencilBuffer,Mt),jt=A.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Rt=Me(A);Gt(A)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Rt,ht,A.width,A.height):$?a.renderbufferStorageMultisample(a.RENDERBUFFER,Rt,ht,A.width,A.height):a.renderbufferStorage(a.RENDERBUFFER,ht,A.width,A.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,jt,a.RENDERBUFFER,L)}else{const pt=A.textures;for(let Mt=0;Mt<pt.length;Mt++){const ht=pt[Mt],jt=c.convert(ht.format,ht.colorSpace),Rt=c.convert(ht.type),wt=U(ht.internalFormat,jt,Rt,ht.colorSpace),Bt=Me(A);$&&Gt(A)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,Bt,wt,A.width,A.height):Gt(A)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Bt,wt,A.width,A.height):a.renderbufferStorage(a.RENDERBUFFER,wt,A.width,A.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Xt(L,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(a.FRAMEBUFFER,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pt=s.get(A.depthTexture);pt.__renderTarget=A,(!pt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),st(A.depthTexture,0);const Mt=pt.__webglTexture,ht=Me(A);if(A.depthTexture.format===Uo)Gt(A)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,Mt,0,ht):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,Mt,0);else if(A.depthTexture.format===Lo)Gt(A)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,Mt,0,ht):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,Mt,0);else throw new Error("Unknown depthTexture format")}function oe(L){const A=s.get(L),$=L.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==L.depthTexture){const pt=L.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),pt){const Mt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,pt.removeEventListener("dispose",Mt)};pt.addEventListener("dispose",Mt),A.__depthDisposeCallback=Mt}A.__boundDepthTexture=pt}if(L.depthTexture&&!A.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");const pt=L.texture.mipmaps;pt&&pt.length>0?Xt(A.__webglFramebuffer[0],L):Xt(A.__webglFramebuffer,L)}else if($){A.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(n.bindFramebuffer(a.FRAMEBUFFER,A.__webglFramebuffer[pt]),A.__webglDepthbuffer[pt]===void 0)A.__webglDepthbuffer[pt]=a.createRenderbuffer(),Pt(A.__webglDepthbuffer[pt],L,!1);else{const Mt=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ht=A.__webglDepthbuffer[pt];a.bindRenderbuffer(a.RENDERBUFFER,ht),a.framebufferRenderbuffer(a.FRAMEBUFFER,Mt,a.RENDERBUFFER,ht)}}else{const pt=L.texture.mipmaps;if(pt&&pt.length>0?n.bindFramebuffer(a.FRAMEBUFFER,A.__webglFramebuffer[0]):n.bindFramebuffer(a.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=a.createRenderbuffer(),Pt(A.__webglDepthbuffer,L,!1);else{const Mt=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ht=A.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,ht),a.framebufferRenderbuffer(a.FRAMEBUFFER,Mt,a.RENDERBUFFER,ht)}}n.bindFramebuffer(a.FRAMEBUFFER,null)}function Ze(L,A,$){const pt=s.get(L);A!==void 0&&Ct(pt.__webglFramebuffer,L,L.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),$!==void 0&&oe(L)}function H(L){const A=L.texture,$=s.get(L),pt=s.get(A);L.addEventListener("dispose",F);const Mt=L.textures,ht=L.isWebGLCubeRenderTarget===!0,jt=Mt.length>1;if(jt||(pt.__webglTexture===void 0&&(pt.__webglTexture=a.createTexture()),pt.__version=A.version,f.memory.textures++),ht){$.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(A.mipmaps&&A.mipmaps.length>0){$.__webglFramebuffer[Rt]=[];for(let wt=0;wt<A.mipmaps.length;wt++)$.__webglFramebuffer[Rt][wt]=a.createFramebuffer()}else $.__webglFramebuffer[Rt]=a.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){$.__webglFramebuffer=[];for(let Rt=0;Rt<A.mipmaps.length;Rt++)$.__webglFramebuffer[Rt]=a.createFramebuffer()}else $.__webglFramebuffer=a.createFramebuffer();if(jt)for(let Rt=0,wt=Mt.length;Rt<wt;Rt++){const Bt=s.get(Mt[Rt]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=a.createTexture(),f.memory.textures++)}if(L.samples>0&&Gt(L)===!1){$.__webglMultisampledFramebuffer=a.createFramebuffer(),$.__webglColorRenderbuffer=[],n.bindFramebuffer(a.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Rt=0;Rt<Mt.length;Rt++){const wt=Mt[Rt];$.__webglColorRenderbuffer[Rt]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,$.__webglColorRenderbuffer[Rt]);const Bt=c.convert(wt.format,wt.colorSpace),vt=c.convert(wt.type),bt=U(wt.internalFormat,Bt,vt,wt.colorSpace,L.isXRRenderTarget===!0),It=Me(L);a.renderbufferStorageMultisample(a.RENDERBUFFER,It,bt,L.width,L.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Rt,a.RENDERBUFFER,$.__webglColorRenderbuffer[Rt])}a.bindRenderbuffer(a.RENDERBUFFER,null),L.depthBuffer&&($.__webglDepthRenderbuffer=a.createRenderbuffer(),Pt($.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(a.FRAMEBUFFER,null)}}if(ht){n.bindTexture(a.TEXTURE_CUBE_MAP,pt.__webglTexture),nt(a.TEXTURE_CUBE_MAP,A);for(let Rt=0;Rt<6;Rt++)if(A.mipmaps&&A.mipmaps.length>0)for(let wt=0;wt<A.mipmaps.length;wt++)Ct($.__webglFramebuffer[Rt][wt],L,A,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,wt);else Ct($.__webglFramebuffer[Rt],L,A,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);y(A)&&v(a.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(jt){for(let Rt=0,wt=Mt.length;Rt<wt;Rt++){const Bt=Mt[Rt],vt=s.get(Bt);let bt=a.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(bt=L.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(bt,vt.__webglTexture),nt(bt,Bt),Ct($.__webglFramebuffer,L,Bt,a.COLOR_ATTACHMENT0+Rt,bt,0),y(Bt)&&v(bt)}n.unbindTexture()}else{let Rt=a.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Rt=L.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(Rt,pt.__webglTexture),nt(Rt,A),A.mipmaps&&A.mipmaps.length>0)for(let wt=0;wt<A.mipmaps.length;wt++)Ct($.__webglFramebuffer[wt],L,A,a.COLOR_ATTACHMENT0,Rt,wt);else Ct($.__webglFramebuffer,L,A,a.COLOR_ATTACHMENT0,Rt,0);y(A)&&v(Rt),n.unbindTexture()}L.depthBuffer&&oe(L)}function xe(L){const A=L.textures;for(let $=0,pt=A.length;$<pt;$++){const Mt=A[$];if(y(Mt)){const ht=P(L),jt=s.get(Mt).__webglTexture;n.bindTexture(ht,jt),v(ht),n.unbindTexture()}}}const ee=[],$t=[];function Yt(L){if(L.samples>0){if(Gt(L)===!1){const A=L.textures,$=L.width,pt=L.height;let Mt=a.COLOR_BUFFER_BIT;const ht=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,jt=s.get(L),Rt=A.length>1;if(Rt)for(let Bt=0;Bt<A.length;Bt++)n.bindFramebuffer(a.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Bt,a.RENDERBUFFER,null),n.bindFramebuffer(a.FRAMEBUFFER,jt.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Bt,a.TEXTURE_2D,null,0);n.bindFramebuffer(a.READ_FRAMEBUFFER,jt.__webglMultisampledFramebuffer);const wt=L.texture.mipmaps;wt&&wt.length>0?n.bindFramebuffer(a.DRAW_FRAMEBUFFER,jt.__webglFramebuffer[0]):n.bindFramebuffer(a.DRAW_FRAMEBUFFER,jt.__webglFramebuffer);for(let Bt=0;Bt<A.length;Bt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Mt|=a.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Mt|=a.STENCIL_BUFFER_BIT)),Rt){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,jt.__webglColorRenderbuffer[Bt]);const vt=s.get(A[Bt]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,vt,0)}a.blitFramebuffer(0,0,$,pt,0,0,$,pt,Mt,a.NEAREST),p===!0&&(ee.length=0,$t.length=0,ee.push(a.COLOR_ATTACHMENT0+Bt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ee.push(ht),$t.push(ht),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,$t)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,ee))}if(n.bindFramebuffer(a.READ_FRAMEBUFFER,null),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Rt)for(let Bt=0;Bt<A.length;Bt++){n.bindFramebuffer(a.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Bt,a.RENDERBUFFER,jt.__webglColorRenderbuffer[Bt]);const vt=s.get(A[Bt]).__webglTexture;n.bindFramebuffer(a.FRAMEBUFFER,jt.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Bt,a.TEXTURE_2D,vt,0)}n.bindFramebuffer(a.DRAW_FRAMEBUFFER,jt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&p){const A=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[A])}}}function Me(L){return Math.min(l.maxSamples,L.samples)}function Gt(L){const A=s.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ie(L){const A=f.render.frame;g.get(L)!==A&&(g.set(L,A),L.update())}function We(L,A){const $=L.colorSpace,pt=L.format,Mt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||$!==Ar&&$!==Pa&&(Re.getTransfer($)===Be?(pt!==_i||Mt!==aa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),A}function Xe(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=J,this.resetTextureUnits=j,this.setTexture2D=st,this.setTexture2DArray=z,this.setTexture3D=V,this.setTextureCube=X,this.rebindTextures=Ze,this.setupRenderTarget=H,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=Yt,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=Gt}function wA(a,t){function n(s,l=Pa){let c;const f=Re.getTransfer(l);if(s===aa)return a.UNSIGNED_BYTE;if(s===xd)return a.UNSIGNED_SHORT_4_4_4_4;if(s===Sd)return a.UNSIGNED_SHORT_5_5_5_1;if(s===F_)return a.UNSIGNED_INT_5_9_9_9_REV;if(s===P_)return a.UNSIGNED_INT_10F_11F_11F_REV;if(s===N_)return a.BYTE;if(s===O_)return a.SHORT;if(s===wo)return a.UNSIGNED_SHORT;if(s===vd)return a.INT;if(s===ys)return a.UNSIGNED_INT;if(s===na)return a.FLOAT;if(s===Oo)return a.HALF_FLOAT;if(s===z_)return a.ALPHA;if(s===B_)return a.RGB;if(s===_i)return a.RGBA;if(s===Uo)return a.DEPTH_COMPONENT;if(s===Lo)return a.DEPTH_STENCIL;if(s===I_)return a.RED;if(s===yd)return a.RED_INTEGER;if(s===H_)return a.RG;if(s===Md)return a.RG_INTEGER;if(s===Ed)return a.RGBA_INTEGER;if(s===_c||s===vc||s===xc||s===Sc)if(f===Be)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===_c)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===vc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===xc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Sc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===_c)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===vc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===xc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Sc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Bh||s===Ih||s===Hh||s===Gh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Bh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ih)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Hh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Gh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Vh||s===Xh||s===kh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Vh||s===Xh)return f===Be?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===kh)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Wh||s===qh||s===Yh||s===Zh||s===jh||s===Kh||s===Qh||s===Jh||s===$h||s===td||s===ed||s===nd||s===id||s===ad)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Wh)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===qh)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Yh)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Zh)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===jh)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Kh)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Qh)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Jh)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===$h)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===td)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ed)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===nd)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===id)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ad)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===sd||s===rd||s===od)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===sd)return f===Be?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===rd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===od)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ld||s===cd||s===ud||s===fd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===ld)return c.COMPRESSED_RED_RGTC1_EXT;if(s===cd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ud)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===fd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Do?a.UNSIGNED_INT_24_8:a[s]!==void 0?a[s]:null}return{convert:n}}const DA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,UA=`
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

}`;class LA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const s=new ev(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,s=new sa({vertexShader:DA,fragmentShader:UA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new wi(new Cc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class NA extends Rr{constructor(t,n){super();const s=this;let l=null,c=1,f=null,h="local-floor",p=1,m=null,g=null,_=null,x=null,M=null,E=null;const T=typeof XRWebGLBinding<"u",y=new LA,v={},P=n.getContextAttributes();let U=null,C=null;const B=[],O=[],F=new Ue;let q=null;const D=new mi;D.viewport=new Je;const w=new mi;w.viewport=new Je;const G=[D,w],j=new $y;let J=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let ut=B[it];return ut===void 0&&(ut=new dh,B[it]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(it){let ut=B[it];return ut===void 0&&(ut=new dh,B[it]=ut),ut.getGripSpace()},this.getHand=function(it){let ut=B[it];return ut===void 0&&(ut=new dh,B[it]=ut),ut.getHandSpace()};function st(it){const ut=O.indexOf(it.inputSource);if(ut===-1)return;const Ct=B[ut];Ct!==void 0&&(Ct.update(it.inputSource,it.frame,m||f),Ct.dispatchEvent({type:it.type,data:it.inputSource}))}function z(){l.removeEventListener("select",st),l.removeEventListener("selectstart",st),l.removeEventListener("selectend",st),l.removeEventListener("squeeze",st),l.removeEventListener("squeezestart",st),l.removeEventListener("squeezeend",st),l.removeEventListener("end",z),l.removeEventListener("inputsourceschange",V);for(let it=0;it<B.length;it++){const ut=O[it];ut!==null&&(O[it]=null,B[it].disconnect(ut))}J=null,Q=null,y.reset();for(const it in v)delete v[it];t.setRenderTarget(U),M=null,x=null,_=null,l=null,C=null,Nt.stop(),s.isPresenting=!1,t.setPixelRatio(q),t.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){c=it,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){h=it,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(it){m=it},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return _===null&&T&&(_=new XRWebGLBinding(l,n)),_},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(it){if(l=it,l!==null){if(U=t.getRenderTarget(),l.addEventListener("select",st),l.addEventListener("selectstart",st),l.addEventListener("selectend",st),l.addEventListener("squeeze",st),l.addEventListener("squeezestart",st),l.addEventListener("squeezeend",st),l.addEventListener("end",z),l.addEventListener("inputsourceschange",V),P.xrCompatible!==!0&&await n.makeXRCompatible(),q=t.getPixelRatio(),t.getSize(F),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ct=null,Pt=null,Xt=null;P.depth&&(Xt=P.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ct=P.stencil?Lo:Uo,Pt=P.stencil?Do:ys);const oe={colorFormat:n.RGBA8,depthFormat:Xt,scaleFactor:c};_=this.getBinding(),x=_.createProjectionLayer(oe),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),C=new Ms(x.textureWidth,x.textureHeight,{format:_i,type:aa,depthTexture:new tv(x.textureWidth,x.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,Ct),stencilBuffer:P.stencil,colorSpace:t.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Ct={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,n,Ct),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),C=new Ms(M.framebufferWidth,M.framebufferHeight,{format:_i,type:aa,colorSpace:t.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await l.requestReferenceSpace(h),Nt.setContext(l),Nt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function V(it){for(let ut=0;ut<it.removed.length;ut++){const Ct=it.removed[ut],Pt=O.indexOf(Ct);Pt>=0&&(O[Pt]=null,B[Pt].disconnect(Ct))}for(let ut=0;ut<it.added.length;ut++){const Ct=it.added[ut];let Pt=O.indexOf(Ct);if(Pt===-1){for(let oe=0;oe<B.length;oe++)if(oe>=O.length){O.push(Ct),Pt=oe;break}else if(O[oe]===null){O[oe]=Ct,Pt=oe;break}if(Pt===-1)break}const Xt=B[Pt];Xt&&Xt.connect(Ct)}}const X=new lt,ft=new lt;function yt(it,ut,Ct){X.setFromMatrixPosition(ut.matrixWorld),ft.setFromMatrixPosition(Ct.matrixWorld);const Pt=X.distanceTo(ft),Xt=ut.projectionMatrix.elements,oe=Ct.projectionMatrix.elements,Ze=Xt[14]/(Xt[10]-1),H=Xt[14]/(Xt[10]+1),xe=(Xt[9]+1)/Xt[5],ee=(Xt[9]-1)/Xt[5],$t=(Xt[8]-1)/Xt[0],Yt=(oe[8]+1)/oe[0],Me=Ze*$t,Gt=Ze*Yt,ie=Pt/(-$t+Yt),We=ie*-$t;if(ut.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(We),it.translateZ(ie),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),Xt[10]===-1)it.projectionMatrix.copy(ut.projectionMatrix),it.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const Xe=Ze+ie,L=H+ie,A=Me-We,$=Gt+(Pt-We),pt=xe*H/L*Xe,Mt=ee*H/L*Xe;it.projectionMatrix.makePerspective(A,$,pt,Mt,Xe,L),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function N(it,ut){ut===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(ut.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(l===null)return;let ut=it.near,Ct=it.far;y.texture!==null&&(y.depthNear>0&&(ut=y.depthNear),y.depthFar>0&&(Ct=y.depthFar)),j.near=w.near=D.near=ut,j.far=w.far=D.far=Ct,(J!==j.near||Q!==j.far)&&(l.updateRenderState({depthNear:j.near,depthFar:j.far}),J=j.near,Q=j.far),j.layers.mask=it.layers.mask|6,D.layers.mask=j.layers.mask&3,w.layers.mask=j.layers.mask&5;const Pt=it.parent,Xt=j.cameras;N(j,Pt);for(let oe=0;oe<Xt.length;oe++)N(Xt[oe],Pt);Xt.length===2?yt(j,D,w):j.projectionMatrix.copy(D.projectionMatrix),nt(it,j,Pt)};function nt(it,ut,Ct){Ct===null?it.matrix.copy(ut.matrixWorld):(it.matrix.copy(Ct.matrixWorld),it.matrix.invert(),it.matrix.multiply(ut.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(ut.projectionMatrix),it.projectionMatrixInverse.copy(ut.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=hd*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(x===null&&M===null))return p},this.setFoveation=function(it){p=it,x!==null&&(x.fixedFoveation=it),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=it)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(j)},this.getCameraTexture=function(it){return v[it]};let xt=null;function At(it,ut){if(g=ut.getViewerPose(m||f),E=ut,g!==null){const Ct=g.views;M!==null&&(t.setRenderTargetFramebuffer(C,M.framebuffer),t.setRenderTarget(C));let Pt=!1;Ct.length!==j.cameras.length&&(j.cameras.length=0,Pt=!0);for(let H=0;H<Ct.length;H++){const xe=Ct[H];let ee=null;if(M!==null)ee=M.getViewport(xe);else{const Yt=_.getViewSubImage(x,xe);ee=Yt.viewport,H===0&&(t.setRenderTargetTextures(C,Yt.colorTexture,Yt.depthStencilTexture),t.setRenderTarget(C))}let $t=G[H];$t===void 0&&($t=new mi,$t.layers.enable(H),$t.viewport=new Je,G[H]=$t),$t.matrix.fromArray(xe.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(xe.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(ee.x,ee.y,ee.width,ee.height),H===0&&(j.matrix.copy($t.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),Pt===!0&&j.cameras.push($t)}const Xt=l.enabledFeatures;if(Xt&&Xt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){_=s.getBinding();const H=_.getDepthInformation(Ct[0]);H&&H.isValid&&H.texture&&y.init(H,l.renderState)}if(Xt&&Xt.includes("camera-access")&&T){t.state.unbindTexture(),_=s.getBinding();for(let H=0;H<Ct.length;H++){const xe=Ct[H].camera;if(xe){let ee=v[xe];ee||(ee=new ev,v[xe]=ee);const $t=_.getCameraImage(xe);ee.sourceTexture=$t}}}}for(let Ct=0;Ct<B.length;Ct++){const Pt=O[Ct],Xt=B[Ct];Pt!==null&&Xt!==void 0&&Xt.update(Pt,ut,m||f)}xt&&xt(it,ut),ut.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ut}),E=null}const Nt=new iv;Nt.setAnimationLoop(At),this.setAnimationLoop=function(it){xt=it},this.dispose=function(){}}}const hs=new Es,OA=new dn;function FA(a,t){function n(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function s(y,v){v.color.getRGB(y.fogColor.value,K_(a)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function l(y,v,P,U,C){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(y,v):v.isMeshToonMaterial?(c(y,v),_(y,v)):v.isMeshPhongMaterial?(c(y,v),g(y,v)):v.isMeshStandardMaterial?(c(y,v),x(y,v),v.isMeshPhysicalMaterial&&M(y,v,C)):v.isMeshMatcapMaterial?(c(y,v),E(y,v)):v.isMeshDepthMaterial?c(y,v):v.isMeshDistanceMaterial?(c(y,v),T(y,v)):v.isMeshNormalMaterial?c(y,v):v.isLineBasicMaterial?(f(y,v),v.isLineDashedMaterial&&h(y,v)):v.isPointsMaterial?p(y,v,P,U):v.isSpriteMaterial?m(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,n(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,n(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Hn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,n(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Hn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,n(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,n(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const P=t.get(v),U=P.envMap,C=P.envMapRotation;U&&(y.envMap.value=U,hs.copy(C),hs.x*=-1,hs.y*=-1,hs.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),y.envMapRotation.value.setFromMatrix4(OA.makeRotationFromEuler(hs)),y.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,y.aoMapTransform))}function f(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,n(v.map,y.mapTransform))}function h(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function p(y,v,P,U){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*P,y.scale.value=U*.5,v.map&&(y.map.value=v.map,n(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function m(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,n(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function g(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function _(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function x(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function M(y,v,P){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Hn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=P.texture,y.transmissionSamplerSize.value.set(P.width,P.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,v){v.matcap&&(y.matcap.value=v.matcap)}function T(y,v){const P=t.get(v).light;y.referencePosition.value.setFromMatrixPosition(P.matrixWorld),y.nearDistance.value=P.shadow.camera.near,y.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function PA(a,t,n,s){let l={},c={},f=[];const h=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function p(P,U){const C=U.program;s.uniformBlockBinding(P,C)}function m(P,U){let C=l[P.id];C===void 0&&(E(P),C=g(P),l[P.id]=C,P.addEventListener("dispose",y));const B=U.program;s.updateUBOMapping(P,B);const O=t.render.frame;c[P.id]!==O&&(x(P),c[P.id]=O)}function g(P){const U=_();P.__bindingPointIndex=U;const C=a.createBuffer(),B=P.__size,O=P.usage;return a.bindBuffer(a.UNIFORM_BUFFER,C),a.bufferData(a.UNIFORM_BUFFER,B,O),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,U,C),C}function _(){for(let P=0;P<h;P++)if(f.indexOf(P)===-1)return f.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(P){const U=l[P.id],C=P.uniforms,B=P.__cache;a.bindBuffer(a.UNIFORM_BUFFER,U);for(let O=0,F=C.length;O<F;O++){const q=Array.isArray(C[O])?C[O]:[C[O]];for(let D=0,w=q.length;D<w;D++){const G=q[D];if(M(G,O,D,B)===!0){const j=G.__offset,J=Array.isArray(G.value)?G.value:[G.value];let Q=0;for(let st=0;st<J.length;st++){const z=J[st],V=T(z);typeof z=="number"||typeof z=="boolean"?(G.__data[0]=z,a.bufferSubData(a.UNIFORM_BUFFER,j+Q,G.__data)):z.isMatrix3?(G.__data[0]=z.elements[0],G.__data[1]=z.elements[1],G.__data[2]=z.elements[2],G.__data[3]=0,G.__data[4]=z.elements[3],G.__data[5]=z.elements[4],G.__data[6]=z.elements[5],G.__data[7]=0,G.__data[8]=z.elements[6],G.__data[9]=z.elements[7],G.__data[10]=z.elements[8],G.__data[11]=0):(z.toArray(G.__data,Q),Q+=V.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,j,G.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function M(P,U,C,B){const O=P.value,F=U+"_"+C;if(B[F]===void 0)return typeof O=="number"||typeof O=="boolean"?B[F]=O:B[F]=O.clone(),!0;{const q=B[F];if(typeof O=="number"||typeof O=="boolean"){if(q!==O)return B[F]=O,!0}else if(q.equals(O)===!1)return q.copy(O),!0}return!1}function E(P){const U=P.uniforms;let C=0;const B=16;for(let F=0,q=U.length;F<q;F++){const D=Array.isArray(U[F])?U[F]:[U[F]];for(let w=0,G=D.length;w<G;w++){const j=D[w],J=Array.isArray(j.value)?j.value:[j.value];for(let Q=0,st=J.length;Q<st;Q++){const z=J[Q],V=T(z),X=C%B,ft=X%V.boundary,yt=X+ft;C+=ft,yt!==0&&B-yt<V.storage&&(C+=B-yt),j.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=C,C+=V.storage}}}const O=C%B;return O>0&&(C+=B-O),P.__size=C,P.__cache={},this}function T(P){const U={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(U.boundary=4,U.storage=4):P.isVector2?(U.boundary=8,U.storage=8):P.isVector3||P.isColor?(U.boundary=16,U.storage=12):P.isVector4?(U.boundary=16,U.storage=16):P.isMatrix3?(U.boundary=48,U.storage=48):P.isMatrix4?(U.boundary=64,U.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),U}function y(P){const U=P.target;U.removeEventListener("dispose",y);const C=f.indexOf(U.__bindingPointIndex);f.splice(C,1),a.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function v(){for(const P in l)a.deleteBuffer(l[P]);f=[],l={},c={}}return{bind:p,update:m,dispose:v}}class zA{constructor(t={}){const{canvas:n=xy(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=f;const E=new Uint32Array(4),T=new Int32Array(4);let y=null,v=null;const P=[],U=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ba,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let B=!1;this._outputColorSpace=Qn;let O=0,F=0,q=null,D=-1,w=null;const G=new Je,j=new Je;let J=null;const Q=new He(0);let st=0,z=n.width,V=n.height,X=1,ft=null,yt=null;const N=new Je(0,0,z,V),nt=new Je(0,0,z,V);let xt=!1;const At=new $_;let Nt=!1,it=!1;const ut=new dn,Ct=new lt,Pt=new Je,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let oe=!1;function Ze(){return q===null?X:1}let H=s;function xe(R,Y){return n.getContext(R,Y)}try{const R={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${_d}`),n.addEventListener("webglcontextlost",Dt,!1),n.addEventListener("webglcontextrestored",Ht,!1),n.addEventListener("webglcontextcreationerror",Et,!1),H===null){const Y="webgl2";if(H=xe(Y,R),H===null)throw xe(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ee,$t,Yt,Me,Gt,ie,We,Xe,L,A,$,pt,Mt,ht,jt,Rt,wt,Bt,vt,bt,It,Ut,Lt,ae;function W(){ee=new Y1(H),ee.init(),Ut=new wA(H,ee),$t=new H1(H,ee,t,Ut),Yt=new RA(H,ee),$t.reversedDepthBuffer&&x&&Yt.buffers.depth.setReversed(!0),Me=new K1(H),Gt=new pA,ie=new CA(H,ee,Yt,Gt,$t,Ut,Me),We=new V1(C),Xe=new q1(C),L=new nM(H),Lt=new B1(H,L),A=new Z1(H,L,Me,Lt),$=new J1(H,A,L,Me),vt=new Q1(H,$t,ie),Rt=new G1(Gt),pt=new dA(C,We,Xe,ee,$t,Lt,Rt),Mt=new FA(C,Gt),ht=new gA,jt=new MA(ee),Bt=new z1(C,We,Xe,Yt,$,M,p),wt=new AA(C,$,$t),ae=new PA(H,Me,$t,Yt),bt=new I1(H,ee,Me),It=new j1(H,ee,Me),Me.programs=pt.programs,C.capabilities=$t,C.extensions=ee,C.properties=Gt,C.renderLists=ht,C.shadowMap=wt,C.state=Yt,C.info=Me}W();const Tt=new NA(C,H);this.xr=Tt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const R=ee.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ee.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(R){R!==void 0&&(X=R,this.setSize(z,V,!1))},this.getSize=function(R){return R.set(z,V)},this.setSize=function(R,Y,rt=!0){if(Tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=R,V=Y,n.width=Math.floor(R*X),n.height=Math.floor(Y*X),rt===!0&&(n.style.width=R+"px",n.style.height=Y+"px"),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(z*X,V*X).floor()},this.setDrawingBufferSize=function(R,Y,rt){z=R,V=Y,X=rt,n.width=Math.floor(R*rt),n.height=Math.floor(Y*rt),this.setViewport(0,0,R,Y)},this.getCurrentViewport=function(R){return R.copy(G)},this.getViewport=function(R){return R.copy(N)},this.setViewport=function(R,Y,rt,ot){R.isVector4?N.set(R.x,R.y,R.z,R.w):N.set(R,Y,rt,ot),Yt.viewport(G.copy(N).multiplyScalar(X).round())},this.getScissor=function(R){return R.copy(nt)},this.setScissor=function(R,Y,rt,ot){R.isVector4?nt.set(R.x,R.y,R.z,R.w):nt.set(R,Y,rt,ot),Yt.scissor(j.copy(nt).multiplyScalar(X).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(R){Yt.setScissorTest(xt=R)},this.setOpaqueSort=function(R){ft=R},this.setTransparentSort=function(R){yt=R},this.getClearColor=function(R){return R.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor(...arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,rt=!0){let ot=0;if(R){let K=!1;if(q!==null){const St=q.texture.format;K=St===Ed||St===Md||St===yd}if(K){const St=q.texture.type,Ot=St===aa||St===ys||St===wo||St===Do||St===xd||St===Sd,Wt=Bt.getClearColor(),zt=Bt.getClearAlpha(),Kt=Wt.r,ne=Wt.g,Qt=Wt.b;Ot?(E[0]=Kt,E[1]=ne,E[2]=Qt,E[3]=zt,H.clearBufferuiv(H.COLOR,0,E)):(T[0]=Kt,T[1]=ne,T[2]=Qt,T[3]=zt,H.clearBufferiv(H.COLOR,0,T))}else ot|=H.COLOR_BUFFER_BIT}Y&&(ot|=H.DEPTH_BUFFER_BIT),rt&&(ot|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Dt,!1),n.removeEventListener("webglcontextrestored",Ht,!1),n.removeEventListener("webglcontextcreationerror",Et,!1),Bt.dispose(),ht.dispose(),jt.dispose(),Gt.dispose(),We.dispose(),Xe.dispose(),$.dispose(),Lt.dispose(),ae.dispose(),pt.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",$n),Tt.removeEventListener("sessionend",wr),Si.stop()};function Dt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function Ht(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const R=Me.autoReset,Y=wt.enabled,rt=wt.autoUpdate,ot=wt.needsUpdate,K=wt.type;W(),Me.autoReset=R,wt.enabled=Y,wt.autoUpdate=rt,wt.needsUpdate=ot,wt.type=K}function Et(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function _t(R){const Y=R.target;Y.removeEventListener("dispose",_t),Vt(Y)}function Vt(R){se(R),Gt.remove(R)}function se(R){const Y=Gt.get(R).programs;Y!==void 0&&(Y.forEach(function(rt){pt.releaseProgram(rt)}),R.isShaderMaterial&&pt.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,rt,ot,K,St){Y===null&&(Y=Xt);const Ot=K.isMesh&&K.matrixWorld.determinant()<0,Wt=ra(R,Y,rt,ot,K);Yt.setMaterial(ot,Ot);let zt=rt.index,Kt=1;if(ot.wireframe===!0){if(zt=A.getWireframeAttribute(rt),zt===void 0)return;Kt=2}const ne=rt.drawRange,Qt=rt.attributes.position;let he=ne.start*Kt,we=(ne.start+ne.count)*Kt;St!==null&&(he=Math.max(he,St.start*Kt),we=Math.min(we,(St.start+St.count)*Kt)),zt!==null?(he=Math.max(he,0),we=Math.min(we,zt.count)):Qt!=null&&(he=Math.max(he,0),we=Math.min(we,Qt.count));const Ge=we-he;if(Ge<0||Ge===1/0)return;Lt.setup(K,ot,Wt,rt,zt);let De,de=bt;if(zt!==null&&(De=L.get(zt),de=It,de.setIndex(De)),K.isMesh)ot.wireframe===!0?(Yt.setLineWidth(ot.wireframeLinewidth*Ze()),de.setMode(H.LINES)):de.setMode(H.TRIANGLES);else if(K.isLine){let qt=ot.linewidth;qt===void 0&&(qt=1),Yt.setLineWidth(qt*Ze()),K.isLineSegments?de.setMode(H.LINES):K.isLineLoop?de.setMode(H.LINE_LOOP):de.setMode(H.LINE_STRIP)}else K.isPoints?de.setMode(H.POINTS):K.isSprite&&de.setMode(H.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)No("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),de.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))de.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const qt=K._multiDrawStarts,ke=K._multiDrawCounts,Te=K._multiDrawCount,Sn=zt?L.get(zt).bytesPerElement:1,Ui=Gt.get(ot).currentProgram.getUniforms();for(let gn=0;gn<Te;gn++)Ui.setValue(H,"_gl_DrawID",gn),de.render(qt[gn]/Sn,ke[gn])}else if(K.isInstancedMesh)de.renderInstances(he,Ge,K.count);else if(rt.isInstancedBufferGeometry){const qt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,ke=Math.min(rt.instanceCount,qt);de.renderInstances(he,Ge,ke)}else de.render(he,Ge)};function Le(R,Y,rt){R.transparent===!0&&R.side===ea&&R.forceSinglePass===!1?(R.side=Hn,R.needsUpdate=!0,Gn(R,Y,rt),R.side=Ha,R.needsUpdate=!0,Gn(R,Y,rt),R.side=ea):Gn(R,Y,rt)}this.compile=function(R,Y,rt=null){rt===null&&(rt=R),v=jt.get(rt),v.init(Y),U.push(v),rt.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(v.pushLight(K),K.castShadow&&v.pushShadow(K))}),R!==rt&&R.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(v.pushLight(K),K.castShadow&&v.pushShadow(K))}),v.setupLights();const ot=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const St=K.material;if(St)if(Array.isArray(St))for(let Ot=0;Ot<St.length;Ot++){const Wt=St[Ot];Le(Wt,rt,K),ot.add(Wt)}else Le(St,rt,K),ot.add(St)}),v=U.pop(),ot},this.compileAsync=function(R,Y,rt=null){const ot=this.compile(R,Y,rt);return new Promise(K=>{function St(){if(ot.forEach(function(Ot){Gt.get(Ot).currentProgram.isReady()&&ot.delete(Ot)}),ot.size===0){K(R);return}setTimeout(St,10)}ee.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let Ee=null;function wn(R){Ee&&Ee(R)}function $n(){Si.stop()}function wr(){Si.start()}const Si=new iv;Si.setAnimationLoop(wn),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(R){Ee=R,Tt.setAnimationLoop(R),R===null?Si.stop():Si.start()},Tt.addEventListener("sessionstart",$n),Tt.addEventListener("sessionend",wr),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(Y),Y=Tt.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,Y,q),v=jt.get(R,U.length),v.init(Y),U.push(v),ut.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),At.setFromProjectionMatrix(ut,Ci,Y.reversedDepth),it=this.localClippingEnabled,Nt=Rt.init(this.clippingPlanes,it),y=ht.get(R,P.length),y.init(),P.push(y),Tt.enabled===!0&&Tt.isPresenting===!0){const St=C.xr.getDepthSensingMesh();St!==null&&Ts(St,Y,-1/0,C.sortObjects)}Ts(R,Y,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(ft,yt),oe=Tt.enabled===!1||Tt.isPresenting===!1||Tt.hasDepthSensing()===!1,oe&&Bt.addToRenderList(y,R),this.info.render.frame++,Nt===!0&&Rt.beginShadows();const rt=v.state.shadowsArray;wt.render(rt,R,Y),Nt===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=y.opaque,K=y.transmissive;if(v.setupLights(),Y.isArrayCamera){const St=Y.cameras;if(K.length>0)for(let Ot=0,Wt=St.length;Ot<Wt;Ot++){const zt=St[Ot];bs(ot,K,R,zt)}oe&&Bt.render(R);for(let Ot=0,Wt=St.length;Ot<Wt;Ot++){const zt=St[Ot];As(y,R,zt,zt.viewport)}}else K.length>0&&bs(ot,K,R,Y),oe&&Bt.render(R),As(y,R,Y);q!==null&&F===0&&(ie.updateMultisampleRenderTarget(q),ie.updateRenderTargetMipmap(q)),R.isScene===!0&&R.onAfterRender(C,R,Y),Lt.resetDefaultState(),D=-1,w=null,U.pop(),U.length>0?(v=U[U.length-1],Nt===!0&&Rt.setGlobalState(C.clippingPlanes,v.state.camera)):v=null,P.pop(),P.length>0?y=P[P.length-1]:y=null};function Ts(R,Y,rt,ot){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)rt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)v.pushLight(R),R.castShadow&&v.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||At.intersectsSprite(R)){ot&&Pt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ut);const Ot=$.update(R),Wt=R.material;Wt.visible&&y.push(R,Ot,Wt,rt,Pt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||At.intersectsObject(R))){const Ot=$.update(R),Wt=R.material;if(ot&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Pt.copy(R.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),Pt.copy(Ot.boundingSphere.center)),Pt.applyMatrix4(R.matrixWorld).applyMatrix4(ut)),Array.isArray(Wt)){const zt=Ot.groups;for(let Kt=0,ne=zt.length;Kt<ne;Kt++){const Qt=zt[Kt],he=Wt[Qt.materialIndex];he&&he.visible&&y.push(R,Ot,he,rt,Pt.z,Qt)}}else Wt.visible&&y.push(R,Ot,Wt,rt,Pt.z,null)}}const St=R.children;for(let Ot=0,Wt=St.length;Ot<Wt;Ot++)Ts(St[Ot],Y,rt,ot)}function As(R,Y,rt,ot){const K=R.opaque,St=R.transmissive,Ot=R.transparent;v.setupLightsView(rt),Nt===!0&&Rt.setGlobalState(C.clippingPlanes,rt),ot&&Yt.viewport(G.copy(ot)),K.length>0&&Va(K,Y,rt),St.length>0&&Va(St,Y,rt),Ot.length>0&&Va(Ot,Y,rt),Yt.buffers.depth.setTest(!0),Yt.buffers.depth.setMask(!0),Yt.buffers.color.setMask(!0),Yt.setPolygonOffset(!1)}function bs(R,Y,rt,ot){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[ot.id]===void 0&&(v.state.transmissionRenderTarget[ot.id]=new Ms(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?Oo:aa,minFilter:vs,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Re.workingColorSpace}));const St=v.state.transmissionRenderTarget[ot.id],Ot=ot.viewport||G;St.setSize(Ot.z*C.transmissionResolutionScale,Ot.w*C.transmissionResolutionScale);const Wt=C.getRenderTarget(),zt=C.getActiveCubeFace(),Kt=C.getActiveMipmapLevel();C.setRenderTarget(St),C.getClearColor(Q),st=C.getClearAlpha(),st<1&&C.setClearColor(16777215,.5),C.clear(),oe&&Bt.render(rt);const ne=C.toneMapping;C.toneMapping=Ba;const Qt=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),v.setupLightsView(ot),Nt===!0&&Rt.setGlobalState(C.clippingPlanes,ot),Va(R,rt,ot),ie.updateMultisampleRenderTarget(St),ie.updateRenderTargetMipmap(St),ee.has("WEBGL_multisampled_render_to_texture")===!1){let he=!1;for(let we=0,Ge=Y.length;we<Ge;we++){const De=Y[we],de=De.object,qt=De.geometry,ke=De.material,Te=De.group;if(ke.side===ea&&de.layers.test(ot.layers)){const Sn=ke.side;ke.side=Hn,ke.needsUpdate=!0,Dr(de,rt,ot,qt,ke,Te),ke.side=Sn,ke.needsUpdate=!0,he=!0}}he===!0&&(ie.updateMultisampleRenderTarget(St),ie.updateRenderTargetMipmap(St))}C.setRenderTarget(Wt,zt,Kt),C.setClearColor(Q,st),Qt!==void 0&&(ot.viewport=Qt),C.toneMapping=ne}function Va(R,Y,rt){const ot=Y.isScene===!0?Y.overrideMaterial:null;for(let K=0,St=R.length;K<St;K++){const Ot=R[K],Wt=Ot.object,zt=Ot.geometry,Kt=Ot.group;let ne=Ot.material;ne.allowOverride===!0&&ot!==null&&(ne=ot),Wt.layers.test(rt.layers)&&Dr(Wt,Y,rt,zt,ne,Kt)}}function Dr(R,Y,rt,ot,K,St){R.onBeforeRender(C,Y,rt,ot,K,St),R.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(C,Y,rt,ot,R,St),K.transparent===!0&&K.side===ea&&K.forceSinglePass===!1?(K.side=Hn,K.needsUpdate=!0,C.renderBufferDirect(rt,Y,ot,K,R,St),K.side=Ha,K.needsUpdate=!0,C.renderBufferDirect(rt,Y,ot,K,R,St),K.side=ea):C.renderBufferDirect(rt,Y,ot,K,R,St),R.onAfterRender(C,Y,rt,ot,K,St)}function Gn(R,Y,rt){Y.isScene!==!0&&(Y=Xt);const ot=Gt.get(R),K=v.state.lights,St=v.state.shadowsArray,Ot=K.state.version,Wt=pt.getParameters(R,K.state,St,Y,rt),zt=pt.getProgramCacheKey(Wt);let Kt=ot.programs;ot.environment=R.isMeshStandardMaterial?Y.environment:null,ot.fog=Y.fog,ot.envMap=(R.isMeshStandardMaterial?Xe:We).get(R.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,Kt===void 0&&(R.addEventListener("dispose",_t),Kt=new Map,ot.programs=Kt);let ne=Kt.get(zt);if(ne!==void 0){if(ot.currentProgram===ne&&ot.lightsStateVersion===Ot)return xn(R,Wt),ne}else Wt.uniforms=pt.getUniforms(R),R.onBeforeCompile(Wt,C),ne=pt.acquireProgram(Wt,zt),Kt.set(zt,ne),ot.uniforms=Wt.uniforms;const Qt=ot.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Qt.clippingPlanes=Rt.uniform),xn(R,Wt),ot.needsLights=Uc(R),ot.lightsStateVersion=Ot,ot.needsLights&&(Qt.ambientLightColor.value=K.state.ambient,Qt.lightProbe.value=K.state.probe,Qt.directionalLights.value=K.state.directional,Qt.directionalLightShadows.value=K.state.directionalShadow,Qt.spotLights.value=K.state.spot,Qt.spotLightShadows.value=K.state.spotShadow,Qt.rectAreaLights.value=K.state.rectArea,Qt.ltc_1.value=K.state.rectAreaLTC1,Qt.ltc_2.value=K.state.rectAreaLTC2,Qt.pointLights.value=K.state.point,Qt.pointLightShadows.value=K.state.pointShadow,Qt.hemisphereLights.value=K.state.hemi,Qt.directionalShadowMap.value=K.state.directionalShadowMap,Qt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Qt.spotShadowMap.value=K.state.spotShadowMap,Qt.spotLightMatrix.value=K.state.spotLightMatrix,Qt.spotLightMap.value=K.state.spotLightMap,Qt.pointShadowMap.value=K.state.pointShadowMap,Qt.pointShadowMatrix.value=K.state.pointShadowMatrix),ot.currentProgram=ne,ot.uniformsList=null,ne}function an(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=Mc.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function xn(R,Y){const rt=Gt.get(R);rt.outputColorSpace=Y.outputColorSpace,rt.batching=Y.batching,rt.batchingColor=Y.batchingColor,rt.instancing=Y.instancing,rt.instancingColor=Y.instancingColor,rt.instancingMorph=Y.instancingMorph,rt.skinning=Y.skinning,rt.morphTargets=Y.morphTargets,rt.morphNormals=Y.morphNormals,rt.morphColors=Y.morphColors,rt.morphTargetsCount=Y.morphTargetsCount,rt.numClippingPlanes=Y.numClippingPlanes,rt.numIntersection=Y.numClipIntersection,rt.vertexAlphas=Y.vertexAlphas,rt.vertexTangents=Y.vertexTangents,rt.toneMapping=Y.toneMapping}function ra(R,Y,rt,ot,K){Y.isScene!==!0&&(Y=Xt),ie.resetTextureUnits();const St=Y.fog,Ot=ot.isMeshStandardMaterial?Y.environment:null,Wt=q===null?C.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Ar,zt=(ot.isMeshStandardMaterial?Xe:We).get(ot.envMap||Ot),Kt=ot.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,ne=!!rt.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Qt=!!rt.morphAttributes.position,he=!!rt.morphAttributes.normal,we=!!rt.morphAttributes.color;let Ge=Ba;ot.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Ge=C.toneMapping);const De=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,de=De!==void 0?De.length:0,qt=Gt.get(ot),ke=v.state.lights;if(Nt===!0&&(it===!0||R!==w)){const fn=R===w&&ot.id===D;Rt.setState(ot,R,fn)}let Te=!1;ot.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==ke.state.version||qt.outputColorSpace!==Wt||K.isBatchedMesh&&qt.batching===!1||!K.isBatchedMesh&&qt.batching===!0||K.isBatchedMesh&&qt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&qt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&qt.instancing===!1||!K.isInstancedMesh&&qt.instancing===!0||K.isSkinnedMesh&&qt.skinning===!1||!K.isSkinnedMesh&&qt.skinning===!0||K.isInstancedMesh&&qt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&qt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&qt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&qt.instancingMorph===!1&&K.morphTexture!==null||qt.envMap!==zt||ot.fog===!0&&qt.fog!==St||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==Rt.numPlanes||qt.numIntersection!==Rt.numIntersection)||qt.vertexAlphas!==Kt||qt.vertexTangents!==ne||qt.morphTargets!==Qt||qt.morphNormals!==he||qt.morphColors!==we||qt.toneMapping!==Ge||qt.morphTargetsCount!==de)&&(Te=!0):(Te=!0,qt.__version=ot.version);let Sn=qt.currentProgram;Te===!0&&(Sn=Gn(ot,Y,K));let Ui=!1,gn=!1,ka=!1;const ge=Sn.getUniforms(),An=qt.uniforms;if(Yt.useProgram(Sn.program)&&(Ui=!0,gn=!0,ka=!0),ot.id!==D&&(D=ot.id,gn=!0),Ui||w!==R){Yt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),ge.setValue(H,"projectionMatrix",R.projectionMatrix),ge.setValue(H,"viewMatrix",R.matrixWorldInverse);const $e=ge.map.cameraPosition;$e!==void 0&&$e.setValue(H,Ct.setFromMatrixPosition(R.matrixWorld)),$t.logarithmicDepthBuffer&&ge.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&ge.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,gn=!0,ka=!0)}if(K.isSkinnedMesh){ge.setOptional(H,K,"bindMatrix"),ge.setOptional(H,K,"bindMatrixInverse");const fn=K.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),ge.setValue(H,"boneTexture",fn.boneTexture,ie))}K.isBatchedMesh&&(ge.setOptional(H,K,"batchingTexture"),ge.setValue(H,"batchingTexture",K._matricesTexture,ie),ge.setOptional(H,K,"batchingIdTexture"),ge.setValue(H,"batchingIdTexture",K._indirectTexture,ie),ge.setOptional(H,K,"batchingColorTexture"),K._colorsTexture!==null&&ge.setValue(H,"batchingColorTexture",K._colorsTexture,ie));const Dn=rt.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&vt.update(K,rt,Sn),(gn||qt.receiveShadow!==K.receiveShadow)&&(qt.receiveShadow=K.receiveShadow,ge.setValue(H,"receiveShadow",K.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(An.envMap.value=zt,An.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&Y.environment!==null&&(An.envMapIntensity.value=Y.environmentIntensity),gn&&(ge.setValue(H,"toneMappingExposure",C.toneMappingExposure),qt.needsLights&&Ur(An,ka),St&&ot.fog===!0&&Mt.refreshFogUniforms(An,St),Mt.refreshMaterialUniforms(An,ot,X,V,v.state.transmissionRenderTarget[R.id]),Mc.upload(H,an(qt),An,ie)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(Mc.upload(H,an(qt),An,ie),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&ge.setValue(H,"center",K.center),ge.setValue(H,"modelViewMatrix",K.modelViewMatrix),ge.setValue(H,"normalMatrix",K.normalMatrix),ge.setValue(H,"modelMatrix",K.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const fn=ot.uniformsGroups;for(let $e=0,Rs=fn.length;$e<Rs;$e++){const yi=fn[$e];ae.update(yi,Sn),ae.bind(yi,Sn)}}return Sn}function Ur(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function Uc(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(R,Y,rt){const ot=Gt.get(R);ot.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),Gt.get(R.texture).__webglTexture=Y,Gt.get(R.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:rt,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const rt=Gt.get(R);rt.__webglFramebuffer=Y,rt.__useDefaultFramebuffer=Y===void 0};const Lc=H.createFramebuffer();this.setRenderTarget=function(R,Y=0,rt=0){q=R,O=Y,F=rt;let ot=!0,K=null,St=!1,Ot=!1;if(R){const zt=Gt.get(R);if(zt.__useDefaultFramebuffer!==void 0)Yt.bindFramebuffer(H.FRAMEBUFFER,null),ot=!1;else if(zt.__webglFramebuffer===void 0)ie.setupRenderTarget(R);else if(zt.__hasExternalTextures)ie.rebindTextures(R,Gt.get(R.texture).__webglTexture,Gt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Qt=R.depthTexture;if(zt.__boundDepthTexture!==Qt){if(Qt!==null&&Gt.has(Qt)&&(R.width!==Qt.image.width||R.height!==Qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ie.setupDepthRenderbuffer(R)}}const Kt=R.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Ot=!0);const ne=Gt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ne[Y])?K=ne[Y][rt]:K=ne[Y],St=!0):R.samples>0&&ie.useMultisampledRTT(R)===!1?K=Gt.get(R).__webglMultisampledFramebuffer:Array.isArray(ne)?K=ne[rt]:K=ne,G.copy(R.viewport),j.copy(R.scissor),J=R.scissorTest}else G.copy(N).multiplyScalar(X).floor(),j.copy(nt).multiplyScalar(X).floor(),J=xt;if(rt!==0&&(K=Lc),Yt.bindFramebuffer(H.FRAMEBUFFER,K)&&ot&&Yt.drawBuffers(R,K),Yt.viewport(G),Yt.scissor(j),Yt.setScissorTest(J),St){const zt=Gt.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+Y,zt.__webglTexture,rt)}else if(Ot){const zt=Y;for(let Kt=0;Kt<R.textures.length;Kt++){const ne=Gt.get(R.textures[Kt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Kt,ne.__webglTexture,rt,zt)}}else if(R!==null&&rt!==0){const zt=Gt.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,zt.__webglTexture,rt)}D=-1},this.readRenderTargetPixels=function(R,Y,rt,ot,K,St,Ot,Wt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=Gt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ot!==void 0&&(zt=zt[Ot]),zt){Yt.bindFramebuffer(H.FRAMEBUFFER,zt);try{const Kt=R.textures[Wt],ne=Kt.format,Qt=Kt.type;if(!$t.textureFormatReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$t.textureTypeReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-ot&&rt>=0&&rt<=R.height-K&&(R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Wt),H.readPixels(Y,rt,ot,K,Ut.convert(ne),Ut.convert(Qt),St))}finally{const Kt=q!==null?Gt.get(q).__webglFramebuffer:null;Yt.bindFramebuffer(H.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(R,Y,rt,ot,K,St,Ot,Wt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=Gt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ot!==void 0&&(zt=zt[Ot]),zt)if(Y>=0&&Y<=R.width-ot&&rt>=0&&rt<=R.height-K){Yt.bindFramebuffer(H.FRAMEBUFFER,zt);const Kt=R.textures[Wt],ne=Kt.format,Qt=Kt.type;if(!$t.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$t.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const he=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,he),H.bufferData(H.PIXEL_PACK_BUFFER,St.byteLength,H.STREAM_READ),R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Wt),H.readPixels(Y,rt,ot,K,Ut.convert(ne),Ut.convert(Qt),0);const we=q!==null?Gt.get(q).__webglFramebuffer:null;Yt.bindFramebuffer(H.FRAMEBUFFER,we);const Ge=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Sy(H,Ge,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,he),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,St),H.deleteBuffer(he),H.deleteSync(Ge),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,rt=0){const ot=Math.pow(2,-rt),K=Math.floor(R.image.width*ot),St=Math.floor(R.image.height*ot),Ot=Y!==null?Y.x:0,Wt=Y!==null?Y.y:0;ie.setTexture2D(R,0),H.copyTexSubImage2D(H.TEXTURE_2D,rt,0,0,Ot,Wt,K,St),Yt.unbindTexture()};const Io=H.createFramebuffer(),Xa=H.createFramebuffer();this.copyTextureToTexture=function(R,Y,rt=null,ot=null,K=0,St=null){St===null&&(K!==0?(No("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),St=K,K=0):St=0);let Ot,Wt,zt,Kt,ne,Qt,he,we,Ge;const De=R.isCompressedTexture?R.mipmaps[St]:R.image;if(rt!==null)Ot=rt.max.x-rt.min.x,Wt=rt.max.y-rt.min.y,zt=rt.isBox3?rt.max.z-rt.min.z:1,Kt=rt.min.x,ne=rt.min.y,Qt=rt.isBox3?rt.min.z:0;else{const Dn=Math.pow(2,-K);Ot=Math.floor(De.width*Dn),Wt=Math.floor(De.height*Dn),R.isDataArrayTexture?zt=De.depth:R.isData3DTexture?zt=Math.floor(De.depth*Dn):zt=1,Kt=0,ne=0,Qt=0}ot!==null?(he=ot.x,we=ot.y,Ge=ot.z):(he=0,we=0,Ge=0);const de=Ut.convert(Y.format),qt=Ut.convert(Y.type);let ke;Y.isData3DTexture?(ie.setTexture3D(Y,0),ke=H.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(ie.setTexture2DArray(Y,0),ke=H.TEXTURE_2D_ARRAY):(ie.setTexture2D(Y,0),ke=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Y.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Y.unpackAlignment);const Te=H.getParameter(H.UNPACK_ROW_LENGTH),Sn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Ui=H.getParameter(H.UNPACK_SKIP_PIXELS),gn=H.getParameter(H.UNPACK_SKIP_ROWS),ka=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,De.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,De.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Kt),H.pixelStorei(H.UNPACK_SKIP_ROWS,ne),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Qt);const ge=R.isDataArrayTexture||R.isData3DTexture,An=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const Dn=Gt.get(R),fn=Gt.get(Y),$e=Gt.get(Dn.__renderTarget),Rs=Gt.get(fn.__renderTarget);Yt.bindFramebuffer(H.READ_FRAMEBUFFER,$e.__webglFramebuffer),Yt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Rs.__webglFramebuffer);for(let yi=0;yi<zt;yi++)ge&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Gt.get(R).__webglTexture,K,Qt+yi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Gt.get(Y).__webglTexture,St,Ge+yi)),H.blitFramebuffer(Kt,ne,Ot,Wt,he,we,Ot,Wt,H.DEPTH_BUFFER_BIT,H.NEAREST);Yt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||Gt.has(R)){const Dn=Gt.get(R),fn=Gt.get(Y);Yt.bindFramebuffer(H.READ_FRAMEBUFFER,Io),Yt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Xa);for(let $e=0;$e<zt;$e++)ge?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Dn.__webglTexture,K,Qt+$e):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Dn.__webglTexture,K),An?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,fn.__webglTexture,St,Ge+$e):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,fn.__webglTexture,St),K!==0?H.blitFramebuffer(Kt,ne,Ot,Wt,he,we,Ot,Wt,H.COLOR_BUFFER_BIT,H.NEAREST):An?H.copyTexSubImage3D(ke,St,he,we,Ge+$e,Kt,ne,Ot,Wt):H.copyTexSubImage2D(ke,St,he,we,Kt,ne,Ot,Wt);Yt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else An?R.isDataTexture||R.isData3DTexture?H.texSubImage3D(ke,St,he,we,Ge,Ot,Wt,zt,de,qt,De.data):Y.isCompressedArrayTexture?H.compressedTexSubImage3D(ke,St,he,we,Ge,Ot,Wt,zt,de,De.data):H.texSubImage3D(ke,St,he,we,Ge,Ot,Wt,zt,de,qt,De):R.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,St,he,we,Ot,Wt,de,qt,De.data):R.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,St,he,we,De.width,De.height,de,De.data):H.texSubImage2D(H.TEXTURE_2D,St,he,we,Ot,Wt,de,qt,De);H.pixelStorei(H.UNPACK_ROW_LENGTH,Te),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Sn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Ui),H.pixelStorei(H.UNPACK_SKIP_ROWS,gn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,ka),St===0&&Y.generateMipmaps&&H.generateMipmap(ke),Yt.unbindTexture()},this.initRenderTarget=function(R){Gt.get(R).__webglFramebuffer===void 0&&ie.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ie.setTextureCube(R,0):R.isData3DTexture?ie.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ie.setTexture2DArray(R,0):ie.setTexture2D(R,0),Yt.unbindTexture()},this.resetState=function(){O=0,F=0,q=null,Yt.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Re._getDrawingBufferColorSpace(t),n.unpackColorSpace=Re._getUnpackColorSpace()}}const BA=`
precision highp float;
attribute vec3 position;
void main(){
  gl_Position = vec4(position, 1.0);
}
`,IA=`
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
`,HA=({className:a,style:t,wispDensity:n=1,dpr:s,mouseSmoothTime:l=0,mouseTiltStrength:c=.01,horizontalBeamOffset:f=.1,verticalBeamOffset:h=0,flowSpeed:p=.35,verticalSizing:m=2,horizontalSizing:g=.5,fogIntensity:_=.45,fogScale:x=.3,wispSpeed:M=15,wispIntensity:E=5,flowStrength:T=.25,decay:y=1.1,falloffStart:v=1.2,fogFallSpeed:P=.6,color:U="#FF79C6"})=>{const C=Ie.useRef(null),B=Ie.useRef(null),O=Ie.useRef(null),F=Ie.useRef(!1),q=Ie.useRef(null),D=Ie.useRef(1),w=Ie.useRef(1),G=Ie.useRef([]),j=Ie.useRef(performance.now()),J=Ie.useRef(16.7),Q=Ie.useRef(!1),st=Ie.useRef(!0),z=V=>{let X=V.trim();X[0]==="#"&&(X=X.slice(1)),X.length===3&&(X=X.split("").map(yt=>yt+yt).join(""));const ft=parseInt(X,16)||16777215;return{r:(ft>>16&255)/255,g:(ft>>8&255)/255,b:(ft&255)/255}};return Ie.useEffect(()=>{const V=C.current,X=new zA({antialias:!1,alpha:!1,depth:!1,stencil:!1,powerPreference:"high-performance",premultipliedAlpha:!1,preserveDrawingBuffer:!1,failIfMajorPerformanceCaveat:!1,logarithmicDepthBuffer:!1});B.current=X,D.current=Math.min(s??(window.devicePixelRatio||1),2),w.current=D.current,X.setPixelRatio(w.current),X.shadowMap.enabled=!1,X.outputColorSpace=Qn,X.setClearColor(0,1);const ft=X.domElement;ft.style.width="100%",ft.style.height="100%",ft.style.display="block",V.appendChild(ft);const yt=new qy,N=new nv(-1,1,1,-1,0,1),nt=new Ga;nt.setAttribute("position",new xi(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3));const xt={iTime:{value:0},iResolution:{value:new lt(1,1,1)},iMouse:{value:new Je(0,0,0,0)},uWispDensity:{value:n},uTiltScale:{value:c},uFlowTime:{value:0},uFogTime:{value:0},uBeamXFrac:{value:f},uBeamYFrac:{value:h},uFlowSpeed:{value:p},uVLenFactor:{value:m},uHLenFactor:{value:g},uFogIntensity:{value:_},uFogScale:{value:x},uWSpeed:{value:M},uWIntensity:{value:E},uFlowStrength:{value:T},uDecay:{value:y},uFalloffStart:{value:v},uFogFallSpeed:{value:P},uColor:{value:new lt(1,1,1)},uFade:{value:F.current?1:0}};O.current=xt;const At=new Ky({vertexShader:BA,fragmentShader:IA,uniforms:xt,transparent:!1,depthTest:!1,depthWrite:!1,blending:xs}),Nt=new wi(nt,At);Nt.frustumCulled=!1,yt.add(Nt);const it=new tM;let ut=0,Ct=F.current?1:0;const Pt=new Ue(0,0),Xt=new Ue(0,0),oe=()=>{const wt=V.clientWidth||1,Bt=V.clientHeight||1,vt=w.current;X.setPixelRatio(vt),X.setSize(wt,Bt,!1),xt.iResolution.value.set(wt*vt,Bt*vt,vt),q.current=ft.getBoundingClientRect()};let Ze=0;const H=()=>{Ze&&cancelAnimationFrame(Ze),Ze=requestAnimationFrame(oe)};oe();const xe=new ResizeObserver(H);xe.observe(V);const ee=new IntersectionObserver(wt=>{st.current=wt[0]?.isIntersecting??!0},{root:null,threshold:0});ee.observe(V);const $t=()=>{Q.current=document.hidden};document.addEventListener("visibilitychange",$t,{passive:!0});const Yt=(wt,Bt)=>{const vt=q.current;if(!vt)return;const bt=wt-vt.left,It=Bt-vt.top,Ut=w.current,Lt=vt.height*Ut;Pt.set(bt*Ut,Lt-It*Ut)},Me=wt=>Yt(wt.clientX,wt.clientY),Gt=()=>Pt.set(0,0);ft.addEventListener("pointermove",Me,{passive:!0}),ft.addEventListener("pointerdown",Me,{passive:!0}),ft.addEventListener("pointerenter",Me,{passive:!0}),ft.addEventListener("pointerleave",Gt,{passive:!0});const ie=wt=>{wt.preventDefault(),Q.current=!0},We=()=>{Q.current=!1,H()};ft.addEventListener("webglcontextlost",ie,!1),ft.addEventListener("webglcontextrestored",We,!1);let Xe=0;const L=(wt,Bt,vt)=>Math.max(Bt,Math.min(vt,wt)),A=.6,$=50,pt=58;let Mt=0;const ht=2e3,jt=wt=>{if(wt-j.current<750)return;const vt=G.current;if(vt.length===0){j.current=wt;return}const bt=vt.reduce((Lt,ae)=>Lt+ae,0)/vt.length;let It=w.current;const Ut=D.current;bt<$?It=L(w.current*.85,A,Ut):bt>pt&&w.current<Ut&&(It=L(w.current*1.1,A,Ut)),Math.abs(It-w.current)>.01&&wt-Mt>ht&&(w.current=It,Mt=wt,oe()),G.current=[],j.current=wt},Rt=()=>{if(Xe=requestAnimationFrame(Rt),Q.current||!st.current)return;const wt=it.getElapsedTime(),Bt=Math.max(0,wt-ut);ut=wt;const vt=Bt*1e3;J.current=J.current*.9+vt*.1;const bt=1e3/Math.max(1,J.current);G.current.push(bt),xt.iTime.value=wt;const It=Math.min(.033,Math.max(.001,Bt));xt.uFlowTime.value+=It,xt.uFogTime.value+=It,F.current||(Ct=Math.min(1,Ct+It/1),xt.uFade.value=Ct,Ct>=1&&(F.current=!0));const Ut=Math.max(.001,l),Lt=1-Math.exp(-It/Ut);Xt.lerp(Pt,Lt),xt.iMouse.value.set(Xt.x,Xt.y,0,0),X.render(yt,N),jt(performance.now())};return Rt(),()=>{cancelAnimationFrame(Xe),xe.disconnect(),ee.disconnect(),document.removeEventListener("visibilitychange",$t),ft.removeEventListener("pointermove",Me),ft.removeEventListener("pointerdown",Me),ft.removeEventListener("pointerenter",Me),ft.removeEventListener("pointerleave",Gt),ft.removeEventListener("webglcontextlost",ie),ft.removeEventListener("webglcontextrestored",We),nt.dispose(),At.dispose(),X.dispose(),V.contains(ft)&&V.removeChild(ft)}},[s]),Ie.useEffect(()=>{const V=O.current;if(!V)return;V.uWispDensity.value=n,V.uTiltScale.value=c,V.uBeamXFrac.value=f,V.uBeamYFrac.value=h,V.uFlowSpeed.value=p,V.uVLenFactor.value=m,V.uHLenFactor.value=g,V.uFogIntensity.value=_,V.uFogScale.value=x,V.uWSpeed.value=M,V.uWIntensity.value=E,V.uFlowStrength.value=T,V.uDecay.value=y,V.uFalloffStart.value=v,V.uFogFallSpeed.value=P;const{r:X,g:ft,b:yt}=z(U||"#FFFFFF");V.uColor.value.set(X,ft,yt)},[n,c,f,h,p,m,g,_,x,M,E,T,y,v,P,U]),nn.jsx("div",{ref:C,className:`w-full h-full relative ${a||""}`,style:t})},GA=({text:a="Compressa",fontFamily:t="Compressa VF",fontUrl:n="https://res.cloudinary.com/dr6lvwubh/raw/upload/v1529908256/CompressaPRO-GX.woff2",width:s=!0,weight:l=!0,italic:c=!0,alpha:f=!1,flex:h=!0,stroke:p=!1,scale:m=!1,textColor:g="#FFFFFF",strokeColor:_="#FF0000",strokeWidth:x=2,className:M="",minFontSize:E=24})=>{const T=Ie.useRef(null),y=Ie.useRef(null),v=Ie.useRef([]),P=Ie.useRef({x:0,y:0}),U=Ie.useRef({x:0,y:0}),[C,B]=Ie.useState(E),[O,F]=Ie.useState(1),[q,D]=Ie.useState(1),w=a.split(""),G=(J,Q)=>{const st=Q.x-J.x,z=Q.y-J.y;return Math.sqrt(st*st+z*z)};Ie.useEffect(()=>{const J=st=>{U.current.x=st.clientX,U.current.y=st.clientY},Q=st=>{const z=st.touches[0];U.current.x=z.clientX,U.current.y=z.clientY};if(window.addEventListener("mousemove",J),window.addEventListener("touchmove",Q,{passive:!1}),T.current){const{left:st,top:z,width:V,height:X}=T.current.getBoundingClientRect();P.current.x=st+V/2,P.current.y=z+X/2,U.current.x=P.current.x,U.current.y=P.current.y}return()=>{window.removeEventListener("mousemove",J),window.removeEventListener("touchmove",Q)}},[]);const j=()=>{if(!T.current||!y.current)return;const{width:J,height:Q}=T.current.getBoundingClientRect();let st=J/(w.length/2);st=Math.max(st,E),B(st),F(1),D(1),requestAnimationFrame(()=>{if(!y.current)return;const z=y.current.getBoundingClientRect();if(m&&z.height>0){const V=Q/z.height;F(V),D(V)}})};return Ie.useEffect(()=>(j(),window.addEventListener("resize",j),()=>window.removeEventListener("resize",j)),[m,a]),Ie.useEffect(()=>{let J;const Q=()=>{if(P.current.x+=(U.current.x-P.current.x)/15,P.current.y+=(U.current.y-P.current.y)/15,y.current){const z=y.current.getBoundingClientRect().width/2;v.current.forEach(V=>{if(!V)return;const X=V.getBoundingClientRect(),ft={x:X.x+X.width/2,y:X.y+X.height/2},yt=G(P.current,ft),N=(it,ut,Ct)=>{const Pt=Ct-Math.abs(Ct*it/z);return Math.max(ut,Pt+ut)},nt=s?Math.floor(N(yt,5,200)):100,xt=l?Math.floor(N(yt,100,900)):400,At=c?N(yt,0,1).toFixed(2):0,Nt=f?N(yt,0,1).toFixed(2):1;V.style.opacity=Nt,V.style.fontVariationSettings=`'wght' ${xt}, 'wdth' ${nt}, 'ital' ${At}`})}J=requestAnimationFrame(Q)};return Q(),()=>cancelAnimationFrame(J)},[s,l,c,f,w.length]),nn.jsxs("div",{ref:T,className:"relative w-full h-full overflow-hidden bg-transparent",children:[nn.jsx("style",{children:`
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
      `}),nn.jsx("h1",{ref:y,className:`text-pressure-title ${M} ${h?"flex justify-between":""} ${p?"stroke":""} uppercase text-center`,style:{fontFamily:t,fontSize:C,lineHeight:q,transform:`scale(1, ${O})`,transformOrigin:"center top",margin:0,fontWeight:100,color:p?void 0:g},children:w.map((J,Q)=>nn.jsx("span",{ref:st=>v.current[Q]=st,"data-char":J,className:"inline-block",children:J},Q))})]})};function Co(a){let t=a[0],n=a[1],s=a[2];return Math.sqrt(t*t+n*n+s*s)}function pd(a,t){return a[0]=t[0],a[1]=t[1],a[2]=t[2],a}function VA(a,t,n,s){return a[0]=t,a[1]=n,a[2]=s,a}function d_(a,t,n){return a[0]=t[0]+n[0],a[1]=t[1]+n[1],a[2]=t[2]+n[2],a}function p_(a,t,n){return a[0]=t[0]-n[0],a[1]=t[1]-n[1],a[2]=t[2]-n[2],a}function XA(a,t,n){return a[0]=t[0]*n[0],a[1]=t[1]*n[1],a[2]=t[2]*n[2],a}function kA(a,t,n){return a[0]=t[0]/n[0],a[1]=t[1]/n[1],a[2]=t[2]/n[2],a}function yh(a,t,n){return a[0]=t[0]*n,a[1]=t[1]*n,a[2]=t[2]*n,a}function WA(a,t){let n=t[0]-a[0],s=t[1]-a[1],l=t[2]-a[2];return Math.sqrt(n*n+s*s+l*l)}function qA(a,t){let n=t[0]-a[0],s=t[1]-a[1],l=t[2]-a[2];return n*n+s*s+l*l}function m_(a){let t=a[0],n=a[1],s=a[2];return t*t+n*n+s*s}function YA(a,t){return a[0]=-t[0],a[1]=-t[1],a[2]=-t[2],a}function ZA(a,t){return a[0]=1/t[0],a[1]=1/t[1],a[2]=1/t[2],a}function md(a,t){let n=t[0],s=t[1],l=t[2],c=n*n+s*s+l*l;return c>0&&(c=1/Math.sqrt(c)),a[0]=t[0]*c,a[1]=t[1]*c,a[2]=t[2]*c,a}function lv(a,t){return a[0]*t[0]+a[1]*t[1]+a[2]*t[2]}function g_(a,t,n){let s=t[0],l=t[1],c=t[2],f=n[0],h=n[1],p=n[2];return a[0]=l*p-c*h,a[1]=c*f-s*p,a[2]=s*h-l*f,a}function jA(a,t,n,s){let l=t[0],c=t[1],f=t[2];return a[0]=l+s*(n[0]-l),a[1]=c+s*(n[1]-c),a[2]=f+s*(n[2]-f),a}function KA(a,t,n,s,l){const c=Math.exp(-s*l);let f=t[0],h=t[1],p=t[2];return a[0]=n[0]+(f-n[0])*c,a[1]=n[1]+(h-n[1])*c,a[2]=n[2]+(p-n[2])*c,a}function QA(a,t,n){let s=t[0],l=t[1],c=t[2],f=n[3]*s+n[7]*l+n[11]*c+n[15];return f=f||1,a[0]=(n[0]*s+n[4]*l+n[8]*c+n[12])/f,a[1]=(n[1]*s+n[5]*l+n[9]*c+n[13])/f,a[2]=(n[2]*s+n[6]*l+n[10]*c+n[14])/f,a}function JA(a,t,n){let s=t[0],l=t[1],c=t[2],f=n[3]*s+n[7]*l+n[11]*c+n[15];return f=f||1,a[0]=(n[0]*s+n[4]*l+n[8]*c)/f,a[1]=(n[1]*s+n[5]*l+n[9]*c)/f,a[2]=(n[2]*s+n[6]*l+n[10]*c)/f,a}function $A(a,t,n){let s=t[0],l=t[1],c=t[2];return a[0]=s*n[0]+l*n[3]+c*n[6],a[1]=s*n[1]+l*n[4]+c*n[7],a[2]=s*n[2]+l*n[5]+c*n[8],a}function tb(a,t,n){let s=t[0],l=t[1],c=t[2],f=n[0],h=n[1],p=n[2],m=n[3],g=h*c-p*l,_=p*s-f*c,x=f*l-h*s,M=h*x-p*_,E=p*g-f*x,T=f*_-h*g,y=m*2;return g*=y,_*=y,x*=y,M*=2,E*=2,T*=2,a[0]=s+g+M,a[1]=l+_+E,a[2]=c+x+T,a}const eb=(function(){const a=[0,0,0],t=[0,0,0];return function(n,s){pd(a,n),pd(t,s),md(a,a),md(t,t);let l=lv(a,t);return l>1?0:l<-1?Math.PI:Math.acos(l)}})();function nb(a,t){return a[0]===t[0]&&a[1]===t[1]&&a[2]===t[2]}class un extends Array{constructor(t=0,n=t,s=t){return super(t,n,s),this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(t){this[0]=t}set y(t){this[1]=t}set z(t){this[2]=t}set(t,n=t,s=t){return t.length?this.copy(t):(VA(this,t,n,s),this)}copy(t){return pd(this,t),this}add(t,n){return n?d_(this,t,n):d_(this,this,t),this}sub(t,n){return n?p_(this,t,n):p_(this,this,t),this}multiply(t){return t.length?XA(this,this,t):yh(this,this,t),this}divide(t){return t.length?kA(this,this,t):yh(this,this,1/t),this}inverse(t=this){return ZA(this,t),this}len(){return Co(this)}distance(t){return t?WA(this,t):Co(this)}squaredLen(){return m_(this)}squaredDistance(t){return t?qA(this,t):m_(this)}negate(t=this){return YA(this,t),this}cross(t,n){return n?g_(this,t,n):g_(this,this,t),this}scale(t){return yh(this,this,t),this}normalize(){return md(this,this),this}dot(t){return lv(this,t)}equals(t){return nb(this,t)}applyMatrix3(t){return $A(this,this,t),this}applyMatrix4(t){return QA(this,this,t),this}scaleRotateMatrix4(t){return JA(this,this,t),this}applyQuaternion(t){return tb(this,this,t),this}angle(t){return eb(this,t)}lerp(t,n){return jA(this,this,t,n),this}smoothLerp(t,n,s){return KA(this,this,t,n,s),this}clone(){return new un(this[0],this[1],this[2])}fromArray(t,n=0){return this[0]=t[n],this[1]=t[n+1],this[2]=t[n+2],this}toArray(t=[],n=0){return t[n]=this[0],t[n+1]=this[1],t[n+2]=this[2],t}transformDirection(t){const n=this[0],s=this[1],l=this[2];return this[0]=t[0]*n+t[4]*s+t[8]*l,this[1]=t[1]*n+t[5]*s+t[9]*l,this[2]=t[2]*n+t[6]*s+t[10]*l,this.normalize()}}const __=new un;let ib=1,ab=1,v_=!1;class sb{constructor(t,n={}){t.canvas||console.error("gl not passed as first argument to Geometry"),this.gl=t,this.attributes=n,this.id=ib++,this.VAOs={},this.drawRange={start:0,count:0},this.instancedCount=0,this.gl.renderer.bindVertexArray(null),this.gl.renderer.currentGeometry=null,this.glState=this.gl.renderer.state;for(let s in n)this.addAttribute(s,n[s])}addAttribute(t,n){if(this.attributes[t]=n,n.id=ab++,n.size=n.size||1,n.type=n.type||(n.data.constructor===Float32Array?this.gl.FLOAT:n.data.constructor===Uint16Array?this.gl.UNSIGNED_SHORT:this.gl.UNSIGNED_INT),n.target=t==="index"?this.gl.ELEMENT_ARRAY_BUFFER:this.gl.ARRAY_BUFFER,n.normalized=n.normalized||!1,n.stride=n.stride||0,n.offset=n.offset||0,n.count=n.count||(n.stride?n.data.byteLength/n.stride:n.data.length/n.size),n.divisor=n.instanced||0,n.needsUpdate=!1,n.usage=n.usage||this.gl.STATIC_DRAW,n.buffer||this.updateAttribute(n),n.divisor){if(this.isInstanced=!0,this.instancedCount&&this.instancedCount!==n.count*n.divisor)return console.warn("geometry has multiple instanced buffers of different length"),this.instancedCount=Math.min(this.instancedCount,n.count*n.divisor);this.instancedCount=n.count*n.divisor}else t==="index"?this.drawRange.count=n.count:this.attributes.index||(this.drawRange.count=Math.max(this.drawRange.count,n.count))}updateAttribute(t){const n=!t.buffer;n&&(t.buffer=this.gl.createBuffer()),this.glState.boundBuffer!==t.buffer&&(this.gl.bindBuffer(t.target,t.buffer),this.glState.boundBuffer=t.buffer),n?this.gl.bufferData(t.target,t.data,t.usage):this.gl.bufferSubData(t.target,0,t.data),t.needsUpdate=!1}setIndex(t){this.addAttribute("index",t)}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}setInstancedCount(t){this.instancedCount=t}createVAO(t){this.VAOs[t.attributeOrder]=this.gl.renderer.createVertexArray(),this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]),this.bindAttributes(t)}bindAttributes(t){t.attributeLocations.forEach((n,{name:s,type:l})=>{if(!this.attributes[s]){console.warn(`active attribute ${s} not being supplied`);return}const c=this.attributes[s];this.gl.bindBuffer(c.target,c.buffer),this.glState.boundBuffer=c.buffer;let f=1;l===35674&&(f=2),l===35675&&(f=3),l===35676&&(f=4);const h=c.size/f,p=f===1?0:f*f*4,m=f===1?0:f*4;for(let g=0;g<f;g++)this.gl.vertexAttribPointer(n+g,h,c.type,c.normalized,c.stride+p,c.offset+g*m),this.gl.enableVertexAttribArray(n+g),this.gl.renderer.vertexAttribDivisor(n+g,c.divisor)}),this.attributes.index&&this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.attributes.index.buffer)}draw({program:t,mode:n=this.gl.TRIANGLES}){this.gl.renderer.currentGeometry!==`${this.id}_${t.attributeOrder}`&&(this.VAOs[t.attributeOrder]||this.createVAO(t),this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]),this.gl.renderer.currentGeometry=`${this.id}_${t.attributeOrder}`),t.attributeLocations.forEach((l,{name:c})=>{const f=this.attributes[c];f.needsUpdate&&this.updateAttribute(f)});let s=2;this.attributes.index?.type===this.gl.UNSIGNED_INT&&(s=4),this.isInstanced?this.attributes.index?this.gl.renderer.drawElementsInstanced(n,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*s,this.instancedCount):this.gl.renderer.drawArraysInstanced(n,this.drawRange.start,this.drawRange.count,this.instancedCount):this.attributes.index?this.gl.drawElements(n,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*s):this.gl.drawArrays(n,this.drawRange.start,this.drawRange.count)}getPosition(){const t=this.attributes.position;if(t.data)return t;if(!v_)return console.warn("No position buffer data found to compute bounds"),v_=!0}computeBoundingBox(t){t||(t=this.getPosition());const n=t.data,s=t.size;this.bounds||(this.bounds={min:new un,max:new un,center:new un,scale:new un,radius:1/0});const l=this.bounds.min,c=this.bounds.max,f=this.bounds.center,h=this.bounds.scale;l.set(1/0),c.set(-1/0);for(let p=0,m=n.length;p<m;p+=s){const g=n[p],_=n[p+1],x=n[p+2];l.x=Math.min(g,l.x),l.y=Math.min(_,l.y),l.z=Math.min(x,l.z),c.x=Math.max(g,c.x),c.y=Math.max(_,c.y),c.z=Math.max(x,c.z)}h.sub(c,l),f.add(l,c).divide(2)}computeBoundingSphere(t){t||(t=this.getPosition());const n=t.data,s=t.size;this.bounds||this.computeBoundingBox(t);let l=0;for(let c=0,f=n.length;c<f;c+=s)__.fromArray(n,c),l=Math.max(l,this.bounds.center.squaredDistance(__));this.bounds.radius=Math.sqrt(l)}remove(){for(let t in this.VAOs)this.gl.renderer.deleteVertexArray(this.VAOs[t]),delete this.VAOs[t];for(let t in this.attributes)this.gl.deleteBuffer(this.attributes[t].buffer),delete this.attributes[t]}}let rb=1;const x_={};class cv{constructor(t,{vertex:n,fragment:s,uniforms:l={},transparent:c=!1,cullFace:f=t.BACK,frontFace:h=t.CCW,depthTest:p=!0,depthWrite:m=!0,depthFunc:g=t.LEQUAL}={}){t.canvas||console.error("gl not passed as first argument to Program"),this.gl=t,this.uniforms=l,this.id=rb++,n||console.warn("vertex shader not supplied"),s||console.warn("fragment shader not supplied"),this.transparent=c,this.cullFace=f,this.frontFace=h,this.depthTest=p,this.depthWrite=m,this.depthFunc=g,this.blendFunc={},this.blendEquation={},this.stencilFunc={},this.stencilOp={},this.transparent&&!this.blendFunc.src&&(this.gl.renderer.premultipliedAlpha?this.setBlendFunc(this.gl.ONE,this.gl.ONE_MINUS_SRC_ALPHA):this.setBlendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA)),this.vertexShader=t.createShader(t.VERTEX_SHADER),this.fragmentShader=t.createShader(t.FRAGMENT_SHADER),this.program=t.createProgram(),t.attachShader(this.program,this.vertexShader),t.attachShader(this.program,this.fragmentShader),this.setShaders({vertex:n,fragment:s})}setShaders({vertex:t,fragment:n}){if(t&&(this.gl.shaderSource(this.vertexShader,t),this.gl.compileShader(this.vertexShader),this.gl.getShaderInfoLog(this.vertexShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}
Vertex Shader
${S_(t)}`)),n&&(this.gl.shaderSource(this.fragmentShader,n),this.gl.compileShader(this.fragmentShader),this.gl.getShaderInfoLog(this.fragmentShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}
Fragment Shader
${S_(n)}`)),this.gl.linkProgram(this.program),!this.gl.getProgramParameter(this.program,this.gl.LINK_STATUS))return console.warn(this.gl.getProgramInfoLog(this.program));this.uniformLocations=new Map;let s=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_UNIFORMS);for(let f=0;f<s;f++){let h=this.gl.getActiveUniform(this.program,f);this.uniformLocations.set(h,this.gl.getUniformLocation(this.program,h.name));const p=h.name.match(/(\w+)/g);h.uniformName=p[0],h.nameComponents=p.slice(1)}this.attributeLocations=new Map;const l=[],c=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_ATTRIBUTES);for(let f=0;f<c;f++){const h=this.gl.getActiveAttrib(this.program,f),p=this.gl.getAttribLocation(this.program,h.name);p!==-1&&(l[p]=h.name,this.attributeLocations.set(h,p))}this.attributeOrder=l.join("")}setBlendFunc(t,n,s,l){this.blendFunc.src=t,this.blendFunc.dst=n,this.blendFunc.srcAlpha=s,this.blendFunc.dstAlpha=l,t&&(this.transparent=!0)}setBlendEquation(t,n){this.blendEquation.modeRGB=t,this.blendEquation.modeAlpha=n}setStencilFunc(t,n,s){this.stencilRef=n,this.stencilFunc.func=t,this.stencilFunc.ref=n,this.stencilFunc.mask=s}setStencilOp(t,n,s){this.stencilOp.stencilFail=t,this.stencilOp.depthFail=n,this.stencilOp.depthPass=s}applyState(){this.depthTest?this.gl.renderer.enable(this.gl.DEPTH_TEST):this.gl.renderer.disable(this.gl.DEPTH_TEST),this.cullFace?this.gl.renderer.enable(this.gl.CULL_FACE):this.gl.renderer.disable(this.gl.CULL_FACE),this.blendFunc.src?this.gl.renderer.enable(this.gl.BLEND):this.gl.renderer.disable(this.gl.BLEND),this.cullFace&&this.gl.renderer.setCullFace(this.cullFace),this.gl.renderer.setFrontFace(this.frontFace),this.gl.renderer.setDepthMask(this.depthWrite),this.gl.renderer.setDepthFunc(this.depthFunc),this.blendFunc.src&&this.gl.renderer.setBlendFunc(this.blendFunc.src,this.blendFunc.dst,this.blendFunc.srcAlpha,this.blendFunc.dstAlpha),this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB,this.blendEquation.modeAlpha),this.stencilFunc.func||this.stencilOp.stencilFail?this.gl.renderer.enable(this.gl.STENCIL_TEST):this.gl.renderer.disable(this.gl.STENCIL_TEST),this.gl.renderer.setStencilFunc(this.stencilFunc.func,this.stencilFunc.ref,this.stencilFunc.mask),this.gl.renderer.setStencilOp(this.stencilOp.stencilFail,this.stencilOp.depthFail,this.stencilOp.depthPass)}use({flipFaces:t=!1}={}){let n=-1;this.gl.renderer.state.currentProgram===this.id||(this.gl.useProgram(this.program),this.gl.renderer.state.currentProgram=this.id),this.uniformLocations.forEach((l,c)=>{let f=this.uniforms[c.uniformName];for(const h of c.nameComponents){if(!f)break;if(h in f)f=f[h];else{if(Array.isArray(f.value))break;f=void 0;break}}if(!f)return y_(`Active uniform ${c.name} has not been supplied`);if(f&&f.value===void 0)return y_(`${c.name} uniform is missing a value parameter`);if(f.value.texture)return n=n+1,f.value.update(n),Mh(this.gl,c.type,l,n);if(f.value.length&&f.value[0].texture){const h=[];return f.value.forEach(p=>{n=n+1,p.update(n),h.push(n)}),Mh(this.gl,c.type,l,h)}Mh(this.gl,c.type,l,f.value)}),this.applyState(),t&&this.gl.renderer.setFrontFace(this.frontFace===this.gl.CCW?this.gl.CW:this.gl.CCW)}remove(){this.gl.deleteProgram(this.program)}}function Mh(a,t,n,s){s=s.length?ob(s):s;const l=a.renderer.state.uniformLocations.get(n);if(s.length)if(l===void 0||l.length!==s.length)a.renderer.state.uniformLocations.set(n,s.slice(0));else{if(lb(l,s))return;l.set?l.set(s):cb(l,s),a.renderer.state.uniformLocations.set(n,l)}else{if(l===s)return;a.renderer.state.uniformLocations.set(n,s)}switch(t){case 5126:return s.length?a.uniform1fv(n,s):a.uniform1f(n,s);case 35664:return a.uniform2fv(n,s);case 35665:return a.uniform3fv(n,s);case 35666:return a.uniform4fv(n,s);case 35670:case 5124:case 35678:case 36306:case 35680:case 36289:return s.length?a.uniform1iv(n,s):a.uniform1i(n,s);case 35671:case 35667:return a.uniform2iv(n,s);case 35672:case 35668:return a.uniform3iv(n,s);case 35673:case 35669:return a.uniform4iv(n,s);case 35674:return a.uniformMatrix2fv(n,!1,s);case 35675:return a.uniformMatrix3fv(n,!1,s);case 35676:return a.uniformMatrix4fv(n,!1,s)}}function S_(a){let t=a.split(`
`);for(let n=0;n<t.length;n++)t[n]=n+1+": "+t[n];return t.join(`
`)}function ob(a){const t=a.length,n=a[0].length;if(n===void 0)return a;const s=t*n;let l=x_[s];l||(x_[s]=l=new Float32Array(s));for(let c=0;c<t;c++)l.set(a[c],c*n);return l}function lb(a,t){if(a.length!==t.length)return!1;for(let n=0,s=a.length;n<s;n++)if(a[n]!==t[n])return!1;return!0}function cb(a,t){for(let n=0,s=a.length;n<s;n++)a[n]=t[n]}let Eh=0;function y_(a){Eh>100||(console.warn(a),Eh++,Eh>100&&console.warn("More than 100 program warnings - stopping logs."))}const Th=new un;let ub=1;class fb{constructor({canvas:t=document.createElement("canvas"),width:n=300,height:s=150,dpr:l=1,alpha:c=!1,depth:f=!0,stencil:h=!1,antialias:p=!1,premultipliedAlpha:m=!1,preserveDrawingBuffer:g=!1,powerPreference:_="default",autoClear:x=!0,webgl:M=2}={}){const E={alpha:c,depth:f,stencil:h,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:g,powerPreference:_};this.dpr=l,this.alpha=c,this.color=!0,this.depth=f,this.stencil=h,this.premultipliedAlpha=m,this.autoClear=x,this.id=ub++,M===2&&(this.gl=t.getContext("webgl2",E)),this.isWebgl2=!!this.gl,this.gl||(this.gl=t.getContext("webgl",E)),this.gl||console.error("unable to create webgl context"),this.gl.renderer=this,this.setSize(n,s),this.state={},this.state.blendFunc={src:this.gl.ONE,dst:this.gl.ZERO},this.state.blendEquation={modeRGB:this.gl.FUNC_ADD},this.state.cullFace=!1,this.state.frontFace=this.gl.CCW,this.state.depthMask=!0,this.state.depthFunc=this.gl.LEQUAL,this.state.premultiplyAlpha=!1,this.state.flipY=!1,this.state.unpackAlignment=4,this.state.framebuffer=null,this.state.viewport={x:0,y:0,width:null,height:null},this.state.textureUnits=[],this.state.activeTextureUnit=0,this.state.boundBuffer=null,this.state.uniformLocations=new Map,this.state.currentProgram=null,this.extensions={},this.isWebgl2?(this.getExtension("EXT_color_buffer_float"),this.getExtension("OES_texture_float_linear")):(this.getExtension("OES_texture_float"),this.getExtension("OES_texture_float_linear"),this.getExtension("OES_texture_half_float"),this.getExtension("OES_texture_half_float_linear"),this.getExtension("OES_element_index_uint"),this.getExtension("OES_standard_derivatives"),this.getExtension("EXT_sRGB"),this.getExtension("WEBGL_depth_texture"),this.getExtension("WEBGL_draw_buffers")),this.getExtension("WEBGL_compressed_texture_astc"),this.getExtension("EXT_texture_compression_bptc"),this.getExtension("WEBGL_compressed_texture_s3tc"),this.getExtension("WEBGL_compressed_texture_etc1"),this.getExtension("WEBGL_compressed_texture_pvrtc"),this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),this.vertexAttribDivisor=this.getExtension("ANGLE_instanced_arrays","vertexAttribDivisor","vertexAttribDivisorANGLE"),this.drawArraysInstanced=this.getExtension("ANGLE_instanced_arrays","drawArraysInstanced","drawArraysInstancedANGLE"),this.drawElementsInstanced=this.getExtension("ANGLE_instanced_arrays","drawElementsInstanced","drawElementsInstancedANGLE"),this.createVertexArray=this.getExtension("OES_vertex_array_object","createVertexArray","createVertexArrayOES"),this.bindVertexArray=this.getExtension("OES_vertex_array_object","bindVertexArray","bindVertexArrayOES"),this.deleteVertexArray=this.getExtension("OES_vertex_array_object","deleteVertexArray","deleteVertexArrayOES"),this.drawBuffers=this.getExtension("WEBGL_draw_buffers","drawBuffers","drawBuffersWEBGL"),this.parameters={},this.parameters.maxTextureUnits=this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),this.parameters.maxAnisotropy=this.getExtension("EXT_texture_filter_anisotropic")?this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}setSize(t,n){this.width=t,this.height=n,this.gl.canvas.width=t*this.dpr,this.gl.canvas.height=n*this.dpr,this.gl.canvas.style&&Object.assign(this.gl.canvas.style,{width:t+"px",height:n+"px"})}setViewport(t,n,s=0,l=0){this.state.viewport.width===t&&this.state.viewport.height===n||(this.state.viewport.width=t,this.state.viewport.height=n,this.state.viewport.x=s,this.state.viewport.y=l,this.gl.viewport(s,l,t,n))}setScissor(t,n,s=0,l=0){this.gl.scissor(s,l,t,n)}enable(t){this.state[t]!==!0&&(this.gl.enable(t),this.state[t]=!0)}disable(t){this.state[t]!==!1&&(this.gl.disable(t),this.state[t]=!1)}setBlendFunc(t,n,s,l){this.state.blendFunc.src===t&&this.state.blendFunc.dst===n&&this.state.blendFunc.srcAlpha===s&&this.state.blendFunc.dstAlpha===l||(this.state.blendFunc.src=t,this.state.blendFunc.dst=n,this.state.blendFunc.srcAlpha=s,this.state.blendFunc.dstAlpha=l,s!==void 0?this.gl.blendFuncSeparate(t,n,s,l):this.gl.blendFunc(t,n))}setBlendEquation(t,n){t=t||this.gl.FUNC_ADD,!(this.state.blendEquation.modeRGB===t&&this.state.blendEquation.modeAlpha===n)&&(this.state.blendEquation.modeRGB=t,this.state.blendEquation.modeAlpha=n,n!==void 0?this.gl.blendEquationSeparate(t,n):this.gl.blendEquation(t))}setCullFace(t){this.state.cullFace!==t&&(this.state.cullFace=t,this.gl.cullFace(t))}setFrontFace(t){this.state.frontFace!==t&&(this.state.frontFace=t,this.gl.frontFace(t))}setDepthMask(t){this.state.depthMask!==t&&(this.state.depthMask=t,this.gl.depthMask(t))}setDepthFunc(t){this.state.depthFunc!==t&&(this.state.depthFunc=t,this.gl.depthFunc(t))}setStencilMask(t){this.state.stencilMask!==t&&(this.state.stencilMask=t,this.gl.stencilMask(t))}setStencilFunc(t,n,s){this.state.stencilFunc===t&&this.state.stencilRef===n&&this.state.stencilFuncMask===s||(this.state.stencilFunc=t||this.gl.ALWAYS,this.state.stencilRef=n||0,this.state.stencilFuncMask=s||0,this.gl.stencilFunc(t||this.gl.ALWAYS,n||0,s||0))}setStencilOp(t,n,s){this.state.stencilFail===t&&this.state.stencilDepthFail===n&&this.state.stencilDepthPass===s||(this.state.stencilFail=t,this.state.stencilDepthFail=n,this.state.stencilDepthPass=s,this.gl.stencilOp(t,n,s))}activeTexture(t){this.state.activeTextureUnit!==t&&(this.state.activeTextureUnit=t,this.gl.activeTexture(this.gl.TEXTURE0+t))}bindFramebuffer({target:t=this.gl.FRAMEBUFFER,buffer:n=null}={}){this.state.framebuffer!==n&&(this.state.framebuffer=n,this.gl.bindFramebuffer(t,n))}getExtension(t,n,s){return n&&this.gl[n]?this.gl[n].bind(this.gl):(this.extensions[t]||(this.extensions[t]=this.gl.getExtension(t)),n?this.extensions[t]?this.extensions[t][s].bind(this.extensions[t]):null:this.extensions[t])}sortOpaque(t,n){return t.renderOrder!==n.renderOrder?t.renderOrder-n.renderOrder:t.program.id!==n.program.id?t.program.id-n.program.id:t.zDepth!==n.zDepth?t.zDepth-n.zDepth:n.id-t.id}sortTransparent(t,n){return t.renderOrder!==n.renderOrder?t.renderOrder-n.renderOrder:t.zDepth!==n.zDepth?n.zDepth-t.zDepth:n.id-t.id}sortUI(t,n){return t.renderOrder!==n.renderOrder?t.renderOrder-n.renderOrder:t.program.id!==n.program.id?t.program.id-n.program.id:n.id-t.id}getRenderList({scene:t,camera:n,frustumCull:s,sort:l}){let c=[];if(n&&s&&n.updateFrustum(),t.traverse(f=>{if(!f.visible)return!0;f.draw&&(s&&f.frustumCulled&&n&&!n.frustumIntersectsMesh(f)||c.push(f))}),l){const f=[],h=[],p=[];c.forEach(m=>{m.program.transparent?m.program.depthTest?h.push(m):p.push(m):f.push(m),m.zDepth=0,!(m.renderOrder!==0||!m.program.depthTest||!n)&&(m.worldMatrix.getTranslation(Th),Th.applyMatrix4(n.projectionViewMatrix),m.zDepth=Th.z)}),f.sort(this.sortOpaque),h.sort(this.sortTransparent),p.sort(this.sortUI),c=f.concat(h,p)}return c}render({scene:t,camera:n,target:s=null,update:l=!0,sort:c=!0,frustumCull:f=!0,clear:h}){s===null?(this.bindFramebuffer(),this.setViewport(this.width*this.dpr,this.height*this.dpr)):(this.bindFramebuffer(s),this.setViewport(s.width,s.height)),(h||this.autoClear&&h!==!1)&&(this.depth&&(!s||s.depth)&&(this.enable(this.gl.DEPTH_TEST),this.setDepthMask(!0)),(this.stencil||!s||s.stencil)&&(this.enable(this.gl.STENCIL_TEST),this.setStencilMask(255)),this.gl.clear((this.color?this.gl.COLOR_BUFFER_BIT:0)|(this.depth?this.gl.DEPTH_BUFFER_BIT:0)|(this.stencil?this.gl.STENCIL_BUFFER_BIT:0))),l&&t.updateMatrixWorld(),n&&n.updateMatrixWorld(),this.getRenderList({scene:t,camera:n,frustumCull:f,sort:c}).forEach(m=>{m.draw({camera:n})})}}function hb(a,t){return a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a}function db(a,t,n,s,l){return a[0]=t,a[1]=n,a[2]=s,a[3]=l,a}function pb(a,t){let n=t[0],s=t[1],l=t[2],c=t[3],f=n*n+s*s+l*l+c*c;return f>0&&(f=1/Math.sqrt(f)),a[0]=n*f,a[1]=s*f,a[2]=l*f,a[3]=c*f,a}function mb(a,t){return a[0]*t[0]+a[1]*t[1]+a[2]*t[2]+a[3]*t[3]}function gb(a){return a[0]=0,a[1]=0,a[2]=0,a[3]=1,a}function _b(a,t,n){n=n*.5;let s=Math.sin(n);return a[0]=s*t[0],a[1]=s*t[1],a[2]=s*t[2],a[3]=Math.cos(n),a}function M_(a,t,n){let s=t[0],l=t[1],c=t[2],f=t[3],h=n[0],p=n[1],m=n[2],g=n[3];return a[0]=s*g+f*h+l*m-c*p,a[1]=l*g+f*p+c*h-s*m,a[2]=c*g+f*m+s*p-l*h,a[3]=f*g-s*h-l*p-c*m,a}function vb(a,t,n){n*=.5;let s=t[0],l=t[1],c=t[2],f=t[3],h=Math.sin(n),p=Math.cos(n);return a[0]=s*p+f*h,a[1]=l*p+c*h,a[2]=c*p-l*h,a[3]=f*p-s*h,a}function xb(a,t,n){n*=.5;let s=t[0],l=t[1],c=t[2],f=t[3],h=Math.sin(n),p=Math.cos(n);return a[0]=s*p-c*h,a[1]=l*p+f*h,a[2]=c*p+s*h,a[3]=f*p-l*h,a}function Sb(a,t,n){n*=.5;let s=t[0],l=t[1],c=t[2],f=t[3],h=Math.sin(n),p=Math.cos(n);return a[0]=s*p+l*h,a[1]=l*p-s*h,a[2]=c*p+f*h,a[3]=f*p-c*h,a}function yb(a,t,n,s){let l=t[0],c=t[1],f=t[2],h=t[3],p=n[0],m=n[1],g=n[2],_=n[3],x,M,E,T,y;return M=l*p+c*m+f*g+h*_,M<0&&(M=-M,p=-p,m=-m,g=-g,_=-_),1-M>1e-6?(x=Math.acos(M),E=Math.sin(x),T=Math.sin((1-s)*x)/E,y=Math.sin(s*x)/E):(T=1-s,y=s),a[0]=T*l+y*p,a[1]=T*c+y*m,a[2]=T*f+y*g,a[3]=T*h+y*_,a}function Mb(a,t){let n=t[0],s=t[1],l=t[2],c=t[3],f=n*n+s*s+l*l+c*c,h=f?1/f:0;return a[0]=-n*h,a[1]=-s*h,a[2]=-l*h,a[3]=c*h,a}function Eb(a,t){return a[0]=-t[0],a[1]=-t[1],a[2]=-t[2],a[3]=t[3],a}function Tb(a,t){let n=t[0]+t[4]+t[8],s;if(n>0)s=Math.sqrt(n+1),a[3]=.5*s,s=.5/s,a[0]=(t[5]-t[7])*s,a[1]=(t[6]-t[2])*s,a[2]=(t[1]-t[3])*s;else{let l=0;t[4]>t[0]&&(l=1),t[8]>t[l*3+l]&&(l=2);let c=(l+1)%3,f=(l+2)%3;s=Math.sqrt(t[l*3+l]-t[c*3+c]-t[f*3+f]+1),a[l]=.5*s,s=.5/s,a[3]=(t[c*3+f]-t[f*3+c])*s,a[c]=(t[c*3+l]+t[l*3+c])*s,a[f]=(t[f*3+l]+t[l*3+f])*s}return a}function Ab(a,t,n="YXZ"){let s=Math.sin(t[0]*.5),l=Math.cos(t[0]*.5),c=Math.sin(t[1]*.5),f=Math.cos(t[1]*.5),h=Math.sin(t[2]*.5),p=Math.cos(t[2]*.5);return n==="XYZ"?(a[0]=s*f*p+l*c*h,a[1]=l*c*p-s*f*h,a[2]=l*f*h+s*c*p,a[3]=l*f*p-s*c*h):n==="YXZ"?(a[0]=s*f*p+l*c*h,a[1]=l*c*p-s*f*h,a[2]=l*f*h-s*c*p,a[3]=l*f*p+s*c*h):n==="ZXY"?(a[0]=s*f*p-l*c*h,a[1]=l*c*p+s*f*h,a[2]=l*f*h+s*c*p,a[3]=l*f*p-s*c*h):n==="ZYX"?(a[0]=s*f*p-l*c*h,a[1]=l*c*p+s*f*h,a[2]=l*f*h-s*c*p,a[3]=l*f*p+s*c*h):n==="YZX"?(a[0]=s*f*p+l*c*h,a[1]=l*c*p+s*f*h,a[2]=l*f*h-s*c*p,a[3]=l*f*p-s*c*h):n==="XZY"&&(a[0]=s*f*p-l*c*h,a[1]=l*c*p-s*f*h,a[2]=l*f*h+s*c*p,a[3]=l*f*p+s*c*h),a}const bb=hb,Rb=db,Cb=mb,wb=pb;class Db extends Array{constructor(t=0,n=0,s=0,l=1){super(t,n,s,l),this.onChange=()=>{},this._target=this;const c=["0","1","2","3"];return new Proxy(this,{set(f,h){const p=Reflect.set(...arguments);return p&&c.includes(h)&&f.onChange(),p}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}get w(){return this[3]}set x(t){this._target[0]=t,this.onChange()}set y(t){this._target[1]=t,this.onChange()}set z(t){this._target[2]=t,this.onChange()}set w(t){this._target[3]=t,this.onChange()}identity(){return gb(this._target),this.onChange(),this}set(t,n,s,l){return t.length?this.copy(t):(Rb(this._target,t,n,s,l),this.onChange(),this)}rotateX(t){return vb(this._target,this._target,t),this.onChange(),this}rotateY(t){return xb(this._target,this._target,t),this.onChange(),this}rotateZ(t){return Sb(this._target,this._target,t),this.onChange(),this}inverse(t=this._target){return Mb(this._target,t),this.onChange(),this}conjugate(t=this._target){return Eb(this._target,t),this.onChange(),this}copy(t){return bb(this._target,t),this.onChange(),this}normalize(t=this._target){return wb(this._target,t),this.onChange(),this}multiply(t,n){return n?M_(this._target,t,n):M_(this._target,this._target,t),this.onChange(),this}dot(t){return Cb(this._target,t)}fromMatrix3(t){return Tb(this._target,t),this.onChange(),this}fromEuler(t,n){return Ab(this._target,t,t.order),n||this.onChange(),this}fromAxisAngle(t,n){return _b(this._target,t,n),this.onChange(),this}slerp(t,n){return yb(this._target,this._target,t,n),this.onChange(),this}fromArray(t,n=0){return this._target[0]=t[n],this._target[1]=t[n+1],this._target[2]=t[n+2],this._target[3]=t[n+3],this.onChange(),this}toArray(t=[],n=0){return t[n]=this[0],t[n+1]=this[1],t[n+2]=this[2],t[n+3]=this[3],t}}const Ub=1e-6;function Lb(a,t){return a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a[4]=t[4],a[5]=t[5],a[6]=t[6],a[7]=t[7],a[8]=t[8],a[9]=t[9],a[10]=t[10],a[11]=t[11],a[12]=t[12],a[13]=t[13],a[14]=t[14],a[15]=t[15],a}function Nb(a,t,n,s,l,c,f,h,p,m,g,_,x,M,E,T,y){return a[0]=t,a[1]=n,a[2]=s,a[3]=l,a[4]=c,a[5]=f,a[6]=h,a[7]=p,a[8]=m,a[9]=g,a[10]=_,a[11]=x,a[12]=M,a[13]=E,a[14]=T,a[15]=y,a}function Ob(a){return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}function Fb(a,t){let n=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],p=t[6],m=t[7],g=t[8],_=t[9],x=t[10],M=t[11],E=t[12],T=t[13],y=t[14],v=t[15],P=n*h-s*f,U=n*p-l*f,C=n*m-c*f,B=s*p-l*h,O=s*m-c*h,F=l*m-c*p,q=g*T-_*E,D=g*y-x*E,w=g*v-M*E,G=_*y-x*T,j=_*v-M*T,J=x*v-M*y,Q=P*J-U*j+C*G+B*w-O*D+F*q;return Q?(Q=1/Q,a[0]=(h*J-p*j+m*G)*Q,a[1]=(l*j-s*J-c*G)*Q,a[2]=(T*F-y*O+v*B)*Q,a[3]=(x*O-_*F-M*B)*Q,a[4]=(p*w-f*J-m*D)*Q,a[5]=(n*J-l*w+c*D)*Q,a[6]=(y*C-E*F-v*U)*Q,a[7]=(g*F-x*C+M*U)*Q,a[8]=(f*j-h*w+m*q)*Q,a[9]=(s*w-n*j-c*q)*Q,a[10]=(E*O-T*C+v*P)*Q,a[11]=(_*C-g*O-M*P)*Q,a[12]=(h*D-f*G-p*q)*Q,a[13]=(n*G-s*D+l*q)*Q,a[14]=(T*U-E*B-y*P)*Q,a[15]=(g*B-_*U+x*P)*Q,a):null}function uv(a){let t=a[0],n=a[1],s=a[2],l=a[3],c=a[4],f=a[5],h=a[6],p=a[7],m=a[8],g=a[9],_=a[10],x=a[11],M=a[12],E=a[13],T=a[14],y=a[15],v=t*f-n*c,P=t*h-s*c,U=t*p-l*c,C=n*h-s*f,B=n*p-l*f,O=s*p-l*h,F=m*E-g*M,q=m*T-_*M,D=m*y-x*M,w=g*T-_*E,G=g*y-x*E,j=_*y-x*T;return v*j-P*G+U*w+C*D-B*q+O*F}function E_(a,t,n){let s=t[0],l=t[1],c=t[2],f=t[3],h=t[4],p=t[5],m=t[6],g=t[7],_=t[8],x=t[9],M=t[10],E=t[11],T=t[12],y=t[13],v=t[14],P=t[15],U=n[0],C=n[1],B=n[2],O=n[3];return a[0]=U*s+C*h+B*_+O*T,a[1]=U*l+C*p+B*x+O*y,a[2]=U*c+C*m+B*M+O*v,a[3]=U*f+C*g+B*E+O*P,U=n[4],C=n[5],B=n[6],O=n[7],a[4]=U*s+C*h+B*_+O*T,a[5]=U*l+C*p+B*x+O*y,a[6]=U*c+C*m+B*M+O*v,a[7]=U*f+C*g+B*E+O*P,U=n[8],C=n[9],B=n[10],O=n[11],a[8]=U*s+C*h+B*_+O*T,a[9]=U*l+C*p+B*x+O*y,a[10]=U*c+C*m+B*M+O*v,a[11]=U*f+C*g+B*E+O*P,U=n[12],C=n[13],B=n[14],O=n[15],a[12]=U*s+C*h+B*_+O*T,a[13]=U*l+C*p+B*x+O*y,a[14]=U*c+C*m+B*M+O*v,a[15]=U*f+C*g+B*E+O*P,a}function Pb(a,t,n){let s=n[0],l=n[1],c=n[2],f,h,p,m,g,_,x,M,E,T,y,v;return t===a?(a[12]=t[0]*s+t[4]*l+t[8]*c+t[12],a[13]=t[1]*s+t[5]*l+t[9]*c+t[13],a[14]=t[2]*s+t[6]*l+t[10]*c+t[14],a[15]=t[3]*s+t[7]*l+t[11]*c+t[15]):(f=t[0],h=t[1],p=t[2],m=t[3],g=t[4],_=t[5],x=t[6],M=t[7],E=t[8],T=t[9],y=t[10],v=t[11],a[0]=f,a[1]=h,a[2]=p,a[3]=m,a[4]=g,a[5]=_,a[6]=x,a[7]=M,a[8]=E,a[9]=T,a[10]=y,a[11]=v,a[12]=f*s+g*l+E*c+t[12],a[13]=h*s+_*l+T*c+t[13],a[14]=p*s+x*l+y*c+t[14],a[15]=m*s+M*l+v*c+t[15]),a}function zb(a,t,n){let s=n[0],l=n[1],c=n[2];return a[0]=t[0]*s,a[1]=t[1]*s,a[2]=t[2]*s,a[3]=t[3]*s,a[4]=t[4]*l,a[5]=t[5]*l,a[6]=t[6]*l,a[7]=t[7]*l,a[8]=t[8]*c,a[9]=t[9]*c,a[10]=t[10]*c,a[11]=t[11]*c,a[12]=t[12],a[13]=t[13],a[14]=t[14],a[15]=t[15],a}function Bb(a,t,n,s){let l=s[0],c=s[1],f=s[2],h=Math.hypot(l,c,f),p,m,g,_,x,M,E,T,y,v,P,U,C,B,O,F,q,D,w,G,j,J,Q,st;return Math.abs(h)<Ub?null:(h=1/h,l*=h,c*=h,f*=h,p=Math.sin(n),m=Math.cos(n),g=1-m,_=t[0],x=t[1],M=t[2],E=t[3],T=t[4],y=t[5],v=t[6],P=t[7],U=t[8],C=t[9],B=t[10],O=t[11],F=l*l*g+m,q=c*l*g+f*p,D=f*l*g-c*p,w=l*c*g-f*p,G=c*c*g+m,j=f*c*g+l*p,J=l*f*g+c*p,Q=c*f*g-l*p,st=f*f*g+m,a[0]=_*F+T*q+U*D,a[1]=x*F+y*q+C*D,a[2]=M*F+v*q+B*D,a[3]=E*F+P*q+O*D,a[4]=_*w+T*G+U*j,a[5]=x*w+y*G+C*j,a[6]=M*w+v*G+B*j,a[7]=E*w+P*G+O*j,a[8]=_*J+T*Q+U*st,a[9]=x*J+y*Q+C*st,a[10]=M*J+v*Q+B*st,a[11]=E*J+P*Q+O*st,t!==a&&(a[12]=t[12],a[13]=t[13],a[14]=t[14],a[15]=t[15]),a)}function Ib(a,t){return a[0]=t[12],a[1]=t[13],a[2]=t[14],a}function fv(a,t){let n=t[0],s=t[1],l=t[2],c=t[4],f=t[5],h=t[6],p=t[8],m=t[9],g=t[10];return a[0]=Math.hypot(n,s,l),a[1]=Math.hypot(c,f,h),a[2]=Math.hypot(p,m,g),a}function Hb(a){let t=a[0],n=a[1],s=a[2],l=a[4],c=a[5],f=a[6],h=a[8],p=a[9],m=a[10];const g=t*t+n*n+s*s,_=l*l+c*c+f*f,x=h*h+p*p+m*m;return Math.sqrt(Math.max(g,_,x))}const hv=(function(){const a=[1,1,1];return function(t,n){let s=a;fv(s,n);let l=1/s[0],c=1/s[1],f=1/s[2],h=n[0]*l,p=n[1]*c,m=n[2]*f,g=n[4]*l,_=n[5]*c,x=n[6]*f,M=n[8]*l,E=n[9]*c,T=n[10]*f,y=h+_+T,v=0;return y>0?(v=Math.sqrt(y+1)*2,t[3]=.25*v,t[0]=(x-E)/v,t[1]=(M-m)/v,t[2]=(p-g)/v):h>_&&h>T?(v=Math.sqrt(1+h-_-T)*2,t[3]=(x-E)/v,t[0]=.25*v,t[1]=(p+g)/v,t[2]=(M+m)/v):_>T?(v=Math.sqrt(1+_-h-T)*2,t[3]=(M-m)/v,t[0]=(p+g)/v,t[1]=.25*v,t[2]=(x+E)/v):(v=Math.sqrt(1+T-h-_)*2,t[3]=(p-g)/v,t[0]=(M+m)/v,t[1]=(x+E)/v,t[2]=.25*v),t}})();function Gb(a,t,n,s){let l=Co([a[0],a[1],a[2]]);const c=Co([a[4],a[5],a[6]]),f=Co([a[8],a[9],a[10]]);uv(a)<0&&(l=-l),n[0]=a[12],n[1]=a[13],n[2]=a[14];const p=a.slice(),m=1/l,g=1/c,_=1/f;p[0]*=m,p[1]*=m,p[2]*=m,p[4]*=g,p[5]*=g,p[6]*=g,p[8]*=_,p[9]*=_,p[10]*=_,hv(t,p),s[0]=l,s[1]=c,s[2]=f}function Vb(a,t,n,s){const l=a,c=t[0],f=t[1],h=t[2],p=t[3],m=c+c,g=f+f,_=h+h,x=c*m,M=c*g,E=c*_,T=f*g,y=f*_,v=h*_,P=p*m,U=p*g,C=p*_,B=s[0],O=s[1],F=s[2];return l[0]=(1-(T+v))*B,l[1]=(M+C)*B,l[2]=(E-U)*B,l[3]=0,l[4]=(M-C)*O,l[5]=(1-(x+v))*O,l[6]=(y+P)*O,l[7]=0,l[8]=(E+U)*F,l[9]=(y-P)*F,l[10]=(1-(x+T))*F,l[11]=0,l[12]=n[0],l[13]=n[1],l[14]=n[2],l[15]=1,l}function Xb(a,t){let n=t[0],s=t[1],l=t[2],c=t[3],f=n+n,h=s+s,p=l+l,m=n*f,g=s*f,_=s*h,x=l*f,M=l*h,E=l*p,T=c*f,y=c*h,v=c*p;return a[0]=1-_-E,a[1]=g+v,a[2]=x-y,a[3]=0,a[4]=g-v,a[5]=1-m-E,a[6]=M+T,a[7]=0,a[8]=x+y,a[9]=M-T,a[10]=1-m-_,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}function kb(a,t,n,s,l){let c=1/Math.tan(t/2),f=1/(s-l);return a[0]=c/n,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=c,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=(l+s)*f,a[11]=-1,a[12]=0,a[13]=0,a[14]=2*l*s*f,a[15]=0,a}function Wb(a,t,n,s,l,c,f){let h=1/(t-n),p=1/(s-l),m=1/(c-f);return a[0]=-2*h,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=-2*p,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=2*m,a[11]=0,a[12]=(t+n)*h,a[13]=(l+s)*p,a[14]=(f+c)*m,a[15]=1,a}function qb(a,t,n,s){let l=t[0],c=t[1],f=t[2],h=s[0],p=s[1],m=s[2],g=l-n[0],_=c-n[1],x=f-n[2],M=g*g+_*_+x*x;M===0?x=1:(M=1/Math.sqrt(M),g*=M,_*=M,x*=M);let E=p*x-m*_,T=m*g-h*x,y=h*_-p*g;return M=E*E+T*T+y*y,M===0&&(m?h+=1e-6:p?m+=1e-6:p+=1e-6,E=p*x-m*_,T=m*g-h*x,y=h*_-p*g,M=E*E+T*T+y*y),M=1/Math.sqrt(M),E*=M,T*=M,y*=M,a[0]=E,a[1]=T,a[2]=y,a[3]=0,a[4]=_*y-x*T,a[5]=x*E-g*y,a[6]=g*T-_*E,a[7]=0,a[8]=g,a[9]=_,a[10]=x,a[11]=0,a[12]=l,a[13]=c,a[14]=f,a[15]=1,a}function T_(a,t,n){return a[0]=t[0]+n[0],a[1]=t[1]+n[1],a[2]=t[2]+n[2],a[3]=t[3]+n[3],a[4]=t[4]+n[4],a[5]=t[5]+n[5],a[6]=t[6]+n[6],a[7]=t[7]+n[7],a[8]=t[8]+n[8],a[9]=t[9]+n[9],a[10]=t[10]+n[10],a[11]=t[11]+n[11],a[12]=t[12]+n[12],a[13]=t[13]+n[13],a[14]=t[14]+n[14],a[15]=t[15]+n[15],a}function A_(a,t,n){return a[0]=t[0]-n[0],a[1]=t[1]-n[1],a[2]=t[2]-n[2],a[3]=t[3]-n[3],a[4]=t[4]-n[4],a[5]=t[5]-n[5],a[6]=t[6]-n[6],a[7]=t[7]-n[7],a[8]=t[8]-n[8],a[9]=t[9]-n[9],a[10]=t[10]-n[10],a[11]=t[11]-n[11],a[12]=t[12]-n[12],a[13]=t[13]-n[13],a[14]=t[14]-n[14],a[15]=t[15]-n[15],a}function Yb(a,t,n){return a[0]=t[0]*n,a[1]=t[1]*n,a[2]=t[2]*n,a[3]=t[3]*n,a[4]=t[4]*n,a[5]=t[5]*n,a[6]=t[6]*n,a[7]=t[7]*n,a[8]=t[8]*n,a[9]=t[9]*n,a[10]=t[10]*n,a[11]=t[11]*n,a[12]=t[12]*n,a[13]=t[13]*n,a[14]=t[14]*n,a[15]=t[15]*n,a}class Ia extends Array{constructor(t=1,n=0,s=0,l=0,c=0,f=1,h=0,p=0,m=0,g=0,_=1,x=0,M=0,E=0,T=0,y=1){return super(t,n,s,l,c,f,h,p,m,g,_,x,M,E,T,y),this}get x(){return this[12]}get y(){return this[13]}get z(){return this[14]}get w(){return this[15]}set x(t){this[12]=t}set y(t){this[13]=t}set z(t){this[14]=t}set w(t){this[15]=t}set(t,n,s,l,c,f,h,p,m,g,_,x,M,E,T,y){return t.length?this.copy(t):(Nb(this,t,n,s,l,c,f,h,p,m,g,_,x,M,E,T,y),this)}translate(t,n=this){return Pb(this,n,t),this}rotate(t,n,s=this){return Bb(this,s,t,n),this}scale(t,n=this){return zb(this,n,typeof t=="number"?[t,t,t]:t),this}add(t,n){return n?T_(this,t,n):T_(this,this,t),this}sub(t,n){return n?A_(this,t,n):A_(this,this,t),this}multiply(t,n){return t.length?n?E_(this,t,n):E_(this,this,t):Yb(this,this,t),this}identity(){return Ob(this),this}copy(t){return Lb(this,t),this}fromPerspective({fov:t,aspect:n,near:s,far:l}={}){return kb(this,t,n,s,l),this}fromOrthogonal({left:t,right:n,bottom:s,top:l,near:c,far:f}){return Wb(this,t,n,s,l,c,f),this}fromQuaternion(t){return Xb(this,t),this}setPosition(t){return this.x=t[0],this.y=t[1],this.z=t[2],this}inverse(t=this){return Fb(this,t),this}compose(t,n,s){return Vb(this,t,n,s),this}decompose(t,n,s){return Gb(this,t,n,s),this}getRotation(t){return hv(t,this),this}getTranslation(t){return Ib(t,this),this}getScaling(t){return fv(t,this),this}getMaxScaleOnAxis(){return Hb(this)}lookAt(t,n,s){return qb(this,t,n,s),this}determinant(){return uv(this)}fromArray(t,n=0){return this[0]=t[n],this[1]=t[n+1],this[2]=t[n+2],this[3]=t[n+3],this[4]=t[n+4],this[5]=t[n+5],this[6]=t[n+6],this[7]=t[n+7],this[8]=t[n+8],this[9]=t[n+9],this[10]=t[n+10],this[11]=t[n+11],this[12]=t[n+12],this[13]=t[n+13],this[14]=t[n+14],this[15]=t[n+15],this}toArray(t=[],n=0){return t[n]=this[0],t[n+1]=this[1],t[n+2]=this[2],t[n+3]=this[3],t[n+4]=this[4],t[n+5]=this[5],t[n+6]=this[6],t[n+7]=this[7],t[n+8]=this[8],t[n+9]=this[9],t[n+10]=this[10],t[n+11]=this[11],t[n+12]=this[12],t[n+13]=this[13],t[n+14]=this[14],t[n+15]=this[15],t}}function Zb(a,t,n="YXZ"){return n==="XYZ"?(a[1]=Math.asin(Math.min(Math.max(t[8],-1),1)),Math.abs(t[8])<.99999?(a[0]=Math.atan2(-t[9],t[10]),a[2]=Math.atan2(-t[4],t[0])):(a[0]=Math.atan2(t[6],t[5]),a[2]=0)):n==="YXZ"?(a[0]=Math.asin(-Math.min(Math.max(t[9],-1),1)),Math.abs(t[9])<.99999?(a[1]=Math.atan2(t[8],t[10]),a[2]=Math.atan2(t[1],t[5])):(a[1]=Math.atan2(-t[2],t[0]),a[2]=0)):n==="ZXY"?(a[0]=Math.asin(Math.min(Math.max(t[6],-1),1)),Math.abs(t[6])<.99999?(a[1]=Math.atan2(-t[2],t[10]),a[2]=Math.atan2(-t[4],t[5])):(a[1]=0,a[2]=Math.atan2(t[1],t[0]))):n==="ZYX"?(a[1]=Math.asin(-Math.min(Math.max(t[2],-1),1)),Math.abs(t[2])<.99999?(a[0]=Math.atan2(t[6],t[10]),a[2]=Math.atan2(t[1],t[0])):(a[0]=0,a[2]=Math.atan2(-t[4],t[5]))):n==="YZX"?(a[2]=Math.asin(Math.min(Math.max(t[1],-1),1)),Math.abs(t[1])<.99999?(a[0]=Math.atan2(-t[9],t[5]),a[1]=Math.atan2(-t[2],t[0])):(a[0]=0,a[1]=Math.atan2(t[8],t[10]))):n==="XZY"&&(a[2]=Math.asin(-Math.min(Math.max(t[4],-1),1)),Math.abs(t[4])<.99999?(a[0]=Math.atan2(t[6],t[5]),a[1]=Math.atan2(t[8],t[0])):(a[0]=Math.atan2(-t[9],t[10]),a[1]=0)),a}const b_=new Ia;class jb extends Array{constructor(t=0,n=t,s=t,l="YXZ"){super(t,n,s),this.order=l,this.onChange=()=>{},this._target=this;const c=["0","1","2"];return new Proxy(this,{set(f,h){const p=Reflect.set(...arguments);return p&&c.includes(h)&&f.onChange(),p}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(t){this._target[0]=t,this.onChange()}set y(t){this._target[1]=t,this.onChange()}set z(t){this._target[2]=t,this.onChange()}set(t,n=t,s=t){return t.length?this.copy(t):(this._target[0]=t,this._target[1]=n,this._target[2]=s,this.onChange(),this)}copy(t){return this._target[0]=t[0],this._target[1]=t[1],this._target[2]=t[2],this.onChange(),this}reorder(t){return this._target.order=t,this.onChange(),this}fromRotationMatrix(t,n=this.order){return Zb(this._target,t,n),this.onChange(),this}fromQuaternion(t,n=this.order,s){return b_.fromQuaternion(t),this._target.fromRotationMatrix(b_,n),s||this.onChange(),this}fromArray(t,n=0){return this._target[0]=t[n],this._target[1]=t[n+1],this._target[2]=t[n+2],this}toArray(t=[],n=0){return t[n]=this[0],t[n+1]=this[1],t[n+2]=this[2],t}}class Rd{constructor(){this.parent=null,this.children=[],this.visible=!0,this.matrix=new Ia,this.worldMatrix=new Ia,this.matrixAutoUpdate=!0,this.worldMatrixNeedsUpdate=!1,this.position=new un,this.quaternion=new Db,this.scale=new un(1),this.rotation=new jb,this.up=new un(0,1,0),this.rotation._target.onChange=()=>this.quaternion.fromEuler(this.rotation,!0),this.quaternion._target.onChange=()=>this.rotation.fromQuaternion(this.quaternion,void 0,!0)}setParent(t,n=!0){this.parent&&t!==this.parent&&this.parent.removeChild(this,!1),this.parent=t,n&&t&&t.addChild(this,!1)}addChild(t,n=!0){~this.children.indexOf(t)||this.children.push(t),n&&t.setParent(this,!1)}removeChild(t,n=!0){~this.children.indexOf(t)&&this.children.splice(this.children.indexOf(t),1),n&&t.setParent(null,!1)}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.worldMatrixNeedsUpdate||t)&&(this.parent===null?this.worldMatrix.copy(this.matrix):this.worldMatrix.multiply(this.parent.worldMatrix,this.matrix),this.worldMatrixNeedsUpdate=!1,t=!0);for(let n=0,s=this.children.length;n<s;n++)this.children[n].updateMatrixWorld(t)}updateMatrix(){this.matrix.compose(this.quaternion,this.position,this.scale),this.worldMatrixNeedsUpdate=!0}traverse(t){if(!t(this))for(let n=0,s=this.children.length;n<s;n++)this.children[n].traverse(t)}decompose(){this.matrix.decompose(this.quaternion._target,this.position,this.scale),this.rotation.fromQuaternion(this.quaternion)}lookAt(t,n=!1){n?this.matrix.lookAt(this.position,t,this.up):this.matrix.lookAt(t,this.position,this.up),this.matrix.getRotation(this.quaternion._target),this.rotation.fromQuaternion(this.quaternion)}}const Kb=new Ia,Qb=new un,Jb=new un;class $b extends Rd{constructor(t,{near:n=.1,far:s=100,fov:l=45,aspect:c=1,left:f,right:h,bottom:p,top:m,zoom:g=1}={}){super(),Object.assign(this,{near:n,far:s,fov:l,aspect:c,left:f,right:h,bottom:p,top:m,zoom:g}),this.projectionMatrix=new Ia,this.viewMatrix=new Ia,this.projectionViewMatrix=new Ia,this.worldPosition=new un,this.type=f||h?"orthographic":"perspective",this.type==="orthographic"?this.orthographic():this.perspective()}perspective({near:t=this.near,far:n=this.far,fov:s=this.fov,aspect:l=this.aspect}={}){return Object.assign(this,{near:t,far:n,fov:s,aspect:l}),this.projectionMatrix.fromPerspective({fov:s*(Math.PI/180),aspect:l,near:t,far:n}),this.type="perspective",this}orthographic({near:t=this.near,far:n=this.far,left:s=this.left||-1,right:l=this.right||1,bottom:c=this.bottom||-1,top:f=this.top||1,zoom:h=this.zoom}={}){return Object.assign(this,{near:t,far:n,left:s,right:l,bottom:c,top:f,zoom:h}),s/=h,l/=h,c/=h,f/=h,this.projectionMatrix.fromOrthogonal({left:s,right:l,bottom:c,top:f,near:t,far:n}),this.type="orthographic",this}updateMatrixWorld(){return super.updateMatrixWorld(),this.viewMatrix.inverse(this.worldMatrix),this.worldMatrix.getTranslation(this.worldPosition),this.projectionViewMatrix.multiply(this.projectionMatrix,this.viewMatrix),this}updateProjectionMatrix(){return this.type==="perspective"?this.perspective():this.orthographic()}lookAt(t){return super.lookAt(t,!0),this}project(t){return t.applyMatrix4(this.viewMatrix),t.applyMatrix4(this.projectionMatrix),this}unproject(t){return t.applyMatrix4(Kb.inverse(this.projectionMatrix)),t.applyMatrix4(this.worldMatrix),this}updateFrustum(){this.frustum||(this.frustum=[new un,new un,new un,new un,new un,new un]);const t=this.projectionViewMatrix;this.frustum[0].set(t[3]-t[0],t[7]-t[4],t[11]-t[8]).constant=t[15]-t[12],this.frustum[1].set(t[3]+t[0],t[7]+t[4],t[11]+t[8]).constant=t[15]+t[12],this.frustum[2].set(t[3]+t[1],t[7]+t[5],t[11]+t[9]).constant=t[15]+t[13],this.frustum[3].set(t[3]-t[1],t[7]-t[5],t[11]-t[9]).constant=t[15]-t[13],this.frustum[4].set(t[3]-t[2],t[7]-t[6],t[11]-t[10]).constant=t[15]-t[14],this.frustum[5].set(t[3]+t[2],t[7]+t[6],t[11]+t[10]).constant=t[15]+t[14];for(let n=0;n<6;n++){const s=1/this.frustum[n].distance();this.frustum[n].multiply(s),this.frustum[n].constant*=s}}frustumIntersectsMesh(t,n=t.worldMatrix){if(!t.geometry.attributes.position||((!t.geometry.bounds||t.geometry.bounds.radius===1/0)&&t.geometry.computeBoundingSphere(),!t.geometry.bounds))return!0;const s=Qb;s.copy(t.geometry.bounds.center),s.applyMatrix4(n);const l=t.geometry.bounds.radius*n.getMaxScaleOnAxis();return this.frustumIntersectsSphere(s,l)}frustumIntersectsSphere(t,n){const s=Jb;for(let l=0;l<6;l++){const c=this.frustum[l];if(s.copy(c).dot(t)+c.constant<-n)return!1}return!0}}function t2(a,t){return a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[4],a[4]=t[5],a[5]=t[6],a[6]=t[8],a[7]=t[9],a[8]=t[10],a}function e2(a,t){let n=t[0],s=t[1],l=t[2],c=t[3],f=n+n,h=s+s,p=l+l,m=n*f,g=s*f,_=s*h,x=l*f,M=l*h,E=l*p,T=c*f,y=c*h,v=c*p;return a[0]=1-_-E,a[3]=g-v,a[6]=x+y,a[1]=g+v,a[4]=1-m-E,a[7]=M-T,a[2]=x-y,a[5]=M+T,a[8]=1-m-_,a}function n2(a,t){return a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a[4]=t[4],a[5]=t[5],a[6]=t[6],a[7]=t[7],a[8]=t[8],a}function i2(a,t,n,s,l,c,f,h,p,m){return a[0]=t,a[1]=n,a[2]=s,a[3]=l,a[4]=c,a[5]=f,a[6]=h,a[7]=p,a[8]=m,a}function a2(a){return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=1,a[5]=0,a[6]=0,a[7]=0,a[8]=1,a}function s2(a,t){let n=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],p=t[6],m=t[7],g=t[8],_=g*f-h*m,x=-g*c+h*p,M=m*c-f*p,E=n*_+s*x+l*M;return E?(E=1/E,a[0]=_*E,a[1]=(-g*s+l*m)*E,a[2]=(h*s-l*f)*E,a[3]=x*E,a[4]=(g*n-l*p)*E,a[5]=(-h*n+l*c)*E,a[6]=M*E,a[7]=(-m*n+s*p)*E,a[8]=(f*n-s*c)*E,a):null}function R_(a,t,n){let s=t[0],l=t[1],c=t[2],f=t[3],h=t[4],p=t[5],m=t[6],g=t[7],_=t[8],x=n[0],M=n[1],E=n[2],T=n[3],y=n[4],v=n[5],P=n[6],U=n[7],C=n[8];return a[0]=x*s+M*f+E*m,a[1]=x*l+M*h+E*g,a[2]=x*c+M*p+E*_,a[3]=T*s+y*f+v*m,a[4]=T*l+y*h+v*g,a[5]=T*c+y*p+v*_,a[6]=P*s+U*f+C*m,a[7]=P*l+U*h+C*g,a[8]=P*c+U*p+C*_,a}function r2(a,t,n){let s=t[0],l=t[1],c=t[2],f=t[3],h=t[4],p=t[5],m=t[6],g=t[7],_=t[8],x=n[0],M=n[1];return a[0]=s,a[1]=l,a[2]=c,a[3]=f,a[4]=h,a[5]=p,a[6]=x*s+M*f+m,a[7]=x*l+M*h+g,a[8]=x*c+M*p+_,a}function o2(a,t,n){let s=t[0],l=t[1],c=t[2],f=t[3],h=t[4],p=t[5],m=t[6],g=t[7],_=t[8],x=Math.sin(n),M=Math.cos(n);return a[0]=M*s+x*f,a[1]=M*l+x*h,a[2]=M*c+x*p,a[3]=M*f-x*s,a[4]=M*h-x*l,a[5]=M*p-x*c,a[6]=m,a[7]=g,a[8]=_,a}function l2(a,t,n){let s=n[0],l=n[1];return a[0]=s*t[0],a[1]=s*t[1],a[2]=s*t[2],a[3]=l*t[3],a[4]=l*t[4],a[5]=l*t[5],a[6]=t[6],a[7]=t[7],a[8]=t[8],a}function c2(a,t){let n=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],p=t[6],m=t[7],g=t[8],_=t[9],x=t[10],M=t[11],E=t[12],T=t[13],y=t[14],v=t[15],P=n*h-s*f,U=n*p-l*f,C=n*m-c*f,B=s*p-l*h,O=s*m-c*h,F=l*m-c*p,q=g*T-_*E,D=g*y-x*E,w=g*v-M*E,G=_*y-x*T,j=_*v-M*T,J=x*v-M*y,Q=P*J-U*j+C*G+B*w-O*D+F*q;return Q?(Q=1/Q,a[0]=(h*J-p*j+m*G)*Q,a[1]=(p*w-f*J-m*D)*Q,a[2]=(f*j-h*w+m*q)*Q,a[3]=(l*j-s*J-c*G)*Q,a[4]=(n*J-l*w+c*D)*Q,a[5]=(s*w-n*j-c*q)*Q,a[6]=(T*F-y*O+v*B)*Q,a[7]=(y*C-E*F-v*U)*Q,a[8]=(E*O-T*C+v*P)*Q,a):null}class u2 extends Array{constructor(t=1,n=0,s=0,l=0,c=1,f=0,h=0,p=0,m=1){return super(t,n,s,l,c,f,h,p,m),this}set(t,n,s,l,c,f,h,p,m){return t.length?this.copy(t):(i2(this,t,n,s,l,c,f,h,p,m),this)}translate(t,n=this){return r2(this,n,t),this}rotate(t,n=this){return o2(this,n,t),this}scale(t,n=this){return l2(this,n,t),this}multiply(t,n){return n?R_(this,t,n):R_(this,this,t),this}identity(){return a2(this),this}copy(t){return n2(this,t),this}fromMatrix4(t){return t2(this,t),this}fromQuaternion(t){return e2(this,t),this}fromBasis(t,n,s){return this.set(t[0],t[1],t[2],n[0],n[1],n[2],s[0],s[1],s[2]),this}inverse(t=this){return s2(this,t),this}getNormalMatrix(t){return c2(this,t),this}}let f2=0;class dv extends Rd{constructor(t,{geometry:n,program:s,mode:l=t.TRIANGLES,frustumCulled:c=!0,renderOrder:f=0}={}){super(),t.canvas||console.error("gl not passed as first argument to Mesh"),this.gl=t,this.id=f2++,this.geometry=n,this.program=s,this.mode=l,this.frustumCulled=c,this.renderOrder=f,this.modelViewMatrix=new Ia,this.normalMatrix=new u2,this.beforeRenderCallbacks=[],this.afterRenderCallbacks=[]}onBeforeRender(t){return this.beforeRenderCallbacks.push(t),this}onAfterRender(t){return this.afterRenderCallbacks.push(t),this}draw({camera:t}={}){t&&(this.program.uniforms.modelMatrix||Object.assign(this.program.uniforms,{modelMatrix:{value:null},viewMatrix:{value:null},modelViewMatrix:{value:null},normalMatrix:{value:null},projectionMatrix:{value:null},cameraPosition:{value:null}}),this.program.uniforms.projectionMatrix.value=t.projectionMatrix,this.program.uniforms.cameraPosition.value=t.worldPosition,this.program.uniforms.viewMatrix.value=t.viewMatrix,this.modelViewMatrix.multiply(t.viewMatrix,this.worldMatrix),this.normalMatrix.getNormalMatrix(this.modelViewMatrix),this.program.uniforms.modelMatrix.value=this.worldMatrix,this.program.uniforms.modelViewMatrix.value=this.modelViewMatrix,this.program.uniforms.normalMatrix.value=this.normalMatrix),this.beforeRenderCallbacks.forEach(s=>s&&s({mesh:this,camera:t}));let n=this.program.cullFace&&this.worldMatrix.determinant()<0;this.program.use({flipFaces:n}),this.geometry.draw({mode:this.mode,program:this.program}),this.afterRenderCallbacks.forEach(s=>s&&s({mesh:this,camera:t}))}}const C_=new Uint8Array(4);function w_(a){return(a&a-1)===0}let h2=1;class pv{constructor(t,{image:n,target:s=t.TEXTURE_2D,type:l=t.UNSIGNED_BYTE,format:c=t.RGBA,internalFormat:f=c,wrapS:h=t.CLAMP_TO_EDGE,wrapT:p=t.CLAMP_TO_EDGE,wrapR:m=t.CLAMP_TO_EDGE,generateMipmaps:g=s===(t.TEXTURE_2D||t.TEXTURE_CUBE_MAP),minFilter:_=g?t.NEAREST_MIPMAP_LINEAR:t.LINEAR,magFilter:x=t.LINEAR,premultiplyAlpha:M=!1,unpackAlignment:E=4,flipY:T=s==(t.TEXTURE_2D||t.TEXTURE_3D),anisotropy:y=0,level:v=0,width:P,height:U=P,length:C=1}={}){this.gl=t,this.id=h2++,this.image=n,this.target=s,this.type=l,this.format=c,this.internalFormat=f,this.minFilter=_,this.magFilter=x,this.wrapS=h,this.wrapT=p,this.wrapR=m,this.generateMipmaps=g,this.premultiplyAlpha=M,this.unpackAlignment=E,this.flipY=T,this.anisotropy=Math.min(y,this.gl.renderer.parameters.maxAnisotropy),this.level=v,this.width=P,this.height=U,this.length=C,this.texture=this.gl.createTexture(),this.store={image:null},this.glState=this.gl.renderer.state,this.state={},this.state.minFilter=this.gl.NEAREST_MIPMAP_LINEAR,this.state.magFilter=this.gl.LINEAR,this.state.wrapS=this.gl.REPEAT,this.state.wrapT=this.gl.REPEAT,this.state.anisotropy=0}bind(){this.glState.textureUnits[this.glState.activeTextureUnit]!==this.id&&(this.gl.bindTexture(this.target,this.texture),this.glState.textureUnits[this.glState.activeTextureUnit]=this.id)}update(t=0){const n=!(this.image===this.store.image&&!this.needsUpdate);if((n||this.glState.textureUnits[t]!==this.id)&&(this.gl.renderer.activeTexture(t),this.bind()),!!n){if(this.needsUpdate=!1,this.flipY!==this.glState.flipY&&(this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,this.flipY),this.glState.flipY=this.flipY),this.premultiplyAlpha!==this.glState.premultiplyAlpha&&(this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),this.glState.premultiplyAlpha=this.premultiplyAlpha),this.unpackAlignment!==this.glState.unpackAlignment&&(this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,this.unpackAlignment),this.glState.unpackAlignment=this.unpackAlignment),this.minFilter!==this.state.minFilter&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_MIN_FILTER,this.minFilter),this.state.minFilter=this.minFilter),this.magFilter!==this.state.magFilter&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_MAG_FILTER,this.magFilter),this.state.magFilter=this.magFilter),this.wrapS!==this.state.wrapS&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_S,this.wrapS),this.state.wrapS=this.wrapS),this.wrapT!==this.state.wrapT&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_T,this.wrapT),this.state.wrapT=this.wrapT),this.wrapR!==this.state.wrapR&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_R,this.wrapR),this.state.wrapR=this.wrapR),this.anisotropy&&this.anisotropy!==this.state.anisotropy&&(this.gl.texParameterf(this.target,this.gl.renderer.getExtension("EXT_texture_filter_anisotropic").TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropy),this.state.anisotropy=this.anisotropy),this.image){if(this.image.width&&(this.width=this.image.width,this.height=this.image.height),this.target===this.gl.TEXTURE_CUBE_MAP)for(let s=0;s<6;s++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+s,this.level,this.internalFormat,this.format,this.type,this.image[s]);else if(ArrayBuffer.isView(this.image))this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,this.image):(this.target===this.gl.TEXTURE_2D_ARRAY||this.target===this.gl.TEXTURE_3D)&&this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,this.image);else if(this.image.isCompressedTexture)for(let s=0;s<this.image.length;s++)this.gl.compressedTexImage2D(this.target,s,this.internalFormat,this.image[s].width,this.image[s].height,0,this.image[s].data);else this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.format,this.type,this.image):this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,this.image);this.generateMipmaps&&(!this.gl.renderer.isWebgl2&&(!w_(this.image.width)||!w_(this.image.height))?(this.generateMipmaps=!1,this.wrapS=this.wrapT=this.gl.CLAMP_TO_EDGE,this.minFilter=this.gl.LINEAR):this.gl.generateMipmap(this.target)),this.onUpdate&&this.onUpdate()}else if(this.target===this.gl.TEXTURE_CUBE_MAP)for(let s=0;s<6;s++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+s,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,C_);else this.width?this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,null):this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,null):this.gl.texImage2D(this.target,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,C_);this.store.image=this.image}}}class Dc extends sb{constructor(t,{width:n=1,height:s=1,widthSegments:l=1,heightSegments:c=1,attributes:f={}}={}){const h=l,p=c,m=(h+1)*(p+1),g=h*p*6,_=new Float32Array(m*3),x=new Float32Array(m*3),M=new Float32Array(m*2),E=g>65536?new Uint32Array(g):new Uint16Array(g);Dc.buildPlane(_,x,M,E,n,s,0,h,p),Object.assign(f,{position:{size:3,data:_},normal:{size:3,data:x},uv:{size:2,data:M},index:{data:E}}),super(t,f)}static buildPlane(t,n,s,l,c,f,h,p,m,g=0,_=1,x=2,M=1,E=-1,T=0,y=0){const v=T,P=c/p,U=f/m;for(let C=0;C<=m;C++){let B=C*U-f/2;for(let O=0;O<=p;O++,T++){let F=O*P-c/2;if(t[T*3+g]=F*M,t[T*3+_]=B*E,t[T*3+x]=h/2,n[T*3+g]=0,n[T*3+_]=0,n[T*3+x]=h>=0?1:-1,s[T*2]=O/p,s[T*2+1]=1-C/m,C===m||O===p)continue;let q=v+O+C*(p+1),D=v+O+(C+1)*(p+1),w=v+O+(C+1)*(p+1)+1,G=v+O+C*(p+1)+1;l[y*6]=q,l[y*6+1]=D,l[y*6+2]=G,l[y*6+3]=D,l[y*6+4]=w,l[y*6+5]=G,y++}}}}function d2(a,t){let n;return function(...s){clearTimeout(n),n=setTimeout(()=>a.apply(this,s),t)}}function p2(a,t,n){return a+(t-a)*n}function m2(a){const t=Object.getPrototypeOf(a);Object.getOwnPropertyNames(t).forEach(n=>{n!=="constructor"&&typeof a[n]=="function"&&(a[n]=a[n].bind(a))})}function g2(a,t,n="bold 30px monospace",s="black"){const l=document.createElement("canvas"),c=l.getContext("2d");c.font=n;const f=c.measureText(t),h=Math.ceil(f.width),p=Math.ceil(parseInt(n,10)*1.2);l.width=h+20,l.height=p+20,c.font=n,c.fillStyle=s,c.textBaseline="middle",c.textAlign="center",c.clearRect(0,0,l.width,l.height),c.fillText(t,l.width/2,l.height/2);const m=new pv(a,{generateMipmaps:!1});return m.image=l,{texture:m,width:l.width,height:l.height}}class _2{constructor({gl:t,plane:n,renderer:s,text:l,textColor:c="#545050",font:f="30px sans-serif"}){m2(this),this.gl=t,this.plane=n,this.renderer=s,this.text=l,this.textColor=c,this.font=f,this.createMesh()}createMesh(){const{texture:t,width:n,height:s}=g2(this.gl,this.text,this.font,this.textColor),l=new Dc(this.gl),c=new cv(this.gl,{vertex:`
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
      `,uniforms:{tMap:{value:t}},transparent:!0});this.mesh=new dv(this.gl,{geometry:l,program:c});const f=n/s,h=this.plane.scale.y*.15,p=h*f;this.mesh.scale.set(p,h,1),this.mesh.position.y=-this.plane.scale.y*.5-h*.5-.05,this.mesh.setParent(this.plane)}}class v2{constructor({geometry:t,gl:n,image:s,index:l,length:c,renderer:f,scene:h,screen:p,text:m,viewport:g,bend:_,textColor:x,borderRadius:M=0,font:E}){this.extra=0,this.geometry=t,this.gl=n,this.image=s,this.index=l,this.length=c,this.renderer=f,this.scene=h,this.screen=p,this.text=m,this.viewport=g,this.bend=_,this.textColor=x,this.borderRadius=M,this.font=E,this.createShader(),this.createMesh(),this.createTitle(),this.onResize()}createShader(){const t=new pv(this.gl,{generateMipmaps:!0});this.program=new cv(this.gl,{depthTest:!1,depthWrite:!1,vertex:`
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
      `,uniforms:{tMap:{value:t},uPlaneSizes:{value:[0,0]},uImageSizes:{value:[0,0]},uSpeed:{value:0},uTime:{value:100*Math.random()},uBorderRadius:{value:this.borderRadius}},transparent:!0});const n=new Image;n.crossOrigin="anonymous",n.src=this.image,n.onload=()=>{t.image=n,this.program.uniforms.uImageSizes.value=[n.naturalWidth,n.naturalHeight]}}createMesh(){this.plane=new dv(this.gl,{geometry:this.geometry,program:this.program}),this.plane.setParent(this.scene)}createTitle(){this.title=new _2({gl:this.gl,plane:this.plane,renderer:this.renderer,text:this.text,textColor:this.textColor,fontFamily:this.font})}update(t,n){this.plane.position.x=this.x-t.current-this.extra;const s=this.plane.position.x,l=this.viewport.width/2;if(this.bend===0)this.plane.position.y=0,this.plane.rotation.z=0;else{const h=Math.abs(this.bend),p=(l*l+h*h)/(2*h),m=Math.min(Math.abs(s),l),g=p-Math.sqrt(p*p-m*m);this.bend>0?(this.plane.position.y=-g,this.plane.rotation.z=-Math.sign(s)*Math.asin(m/p)):(this.plane.position.y=g,this.plane.rotation.z=Math.sign(s)*Math.asin(m/p))}this.speed=t.current-t.last,this.program.uniforms.uTime.value+=.04,this.program.uniforms.uSpeed.value=this.speed;const c=this.plane.scale.x/2,f=this.viewport.width/2;this.isBefore=this.plane.position.x+c<-f,this.isAfter=this.plane.position.x-c>f,n==="right"&&this.isBefore&&(this.extra-=this.widthTotal,this.isBefore=this.isAfter=!1),n==="left"&&this.isAfter&&(this.extra+=this.widthTotal,this.isBefore=this.isAfter=!1)}onResize({screen:t,viewport:n}={}){t&&(this.screen=t),n&&(this.viewport=n,this.plane.program.uniforms.uViewportSizes&&(this.plane.program.uniforms.uViewportSizes.value=[this.viewport.width,this.viewport.height])),this.scale=this.screen.height/1500,this.plane.scale.y=this.viewport.height*(900*this.scale)/this.screen.height,this.plane.scale.x=this.viewport.width*(700*this.scale)/this.screen.width,this.plane.program.uniforms.uPlaneSizes.value=[this.plane.scale.x,this.plane.scale.y],this.padding=2,this.width=this.plane.scale.x+this.padding,this.widthTotal=this.width*this.length,this.x=this.width*this.index}}let x2=class{constructor(t,{items:n,bend:s,textColor:l="#ffffff",borderRadius:c=0,font:f="bold 30px Figtree",scrollSpeed:h=2,scrollEase:p=.05}={}){document.documentElement.classList.remove("no-js"),this.container=t,this.scrollSpeed=h,this.scroll={ease:p,current:0,target:0,last:0},this.onCheckDebounce=d2(this.onCheck,200),this.createRenderer(),this.createCamera(),this.createScene(),this.onResize(),this.createGeometry(),this.createMedias(n,s,l,c,f),this.update(),this.addEventListeners()}createRenderer(){this.renderer=new fb({alpha:!0,antialias:!0,dpr:Math.min(window.devicePixelRatio||1,2)}),this.gl=this.renderer.gl,this.gl.clearColor(0,0,0,0),this.container.appendChild(this.gl.canvas)}createCamera(){this.camera=new $b(this.gl),this.camera.fov=45,this.camera.position.z=20}createScene(){this.scene=new Rd}createGeometry(){this.planeGeometry=new Dc(this.gl,{heightSegments:50,widthSegments:100})}createMedias(t,n=1,s,l,c){const f=[{image:"https://images.unsplash.com/photo-1494475673543-6a6a27143fc8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",text:"color"},{image:"https://picsum.photos/seed/2/800/600?grayscale",text:"Desk Setup"},{image:"https://picsum.photos/seed/3/800/600?grayscale",text:"Waterfall"},{image:"https://picsum.photos/seed/4/800/600?grayscale",text:"Strawberries"},{image:"https://picsum.photos/seed/5/800/600?grayscale",text:"Deep Diving"},{image:"https://picsum.photos/seed/16/800/600?grayscale",text:"Train Track"},{image:"https://picsum.photos/seed/17/800/600?grayscale",text:"Santorini"},{image:"https://picsum.photos/seed/8/800/600?grayscale",text:"Blurry Lights"},{image:"https://picsum.photos/seed/9/800/600?grayscale",text:"New York"},{image:"https://picsum.photos/seed/10/800/600?grayscale",text:"Good Boy"},{image:"https://picsum.photos/seed/21/800/600?grayscale",text:"Coastline"},{image:"https://picsum.photos/seed/12/800/600?grayscale",text:"Palm Trees"}],h=t&&t.length?t:f;this.mediasImages=h.concat(h),this.medias=this.mediasImages.map((p,m)=>new v2({geometry:this.planeGeometry,gl:this.gl,image:p.image,index:m,length:this.mediasImages.length,renderer:this.renderer,scene:this.scene,screen:this.screen,text:p.text,viewport:this.viewport,bend:n,textColor:s,borderRadius:l,font:c}))}onTouchDown(t){this.isDown=!0,this.scroll.position=this.scroll.current,this.start=t.touches?t.touches[0].clientX:t.clientX}onTouchMove(t){if(!this.isDown)return;const n=t.touches?t.touches[0].clientX:t.clientX,s=(this.start-n)*(this.scrollSpeed*.025);this.scroll.target=this.scroll.position+s}onTouchUp(){this.isDown=!1,this.onCheck()}onWheel(t){const n=t.deltaY||t.wheelDelta||t.detail;this.scroll.target+=(n>0?this.scrollSpeed:-this.scrollSpeed)*.2,this.onCheckDebounce()}onCheck(){if(!this.medias||!this.medias[0])return;const t=this.medias[0].width,n=Math.round(Math.abs(this.scroll.target)/t),s=t*n;this.scroll.target=this.scroll.target<0?-s:s}onResize(){this.screen={width:this.container.clientWidth,height:this.container.clientHeight},this.renderer.setSize(this.screen.width,this.screen.height),this.camera.perspective({aspect:this.screen.width/this.screen.height});const t=this.camera.fov*Math.PI/180,n=2*Math.tan(t/2)*this.camera.position.z,s=n*this.camera.aspect;this.viewport={width:s,height:n},this.medias&&this.medias.forEach(l=>l.onResize({screen:this.screen,viewport:this.viewport}))}update(){this.scroll.current=p2(this.scroll.current,this.scroll.target,this.scroll.ease);const t=this.scroll.current>this.scroll.last?"right":"left";this.medias&&this.medias.forEach(n=>n.update(this.scroll,t)),this.renderer.render({scene:this.scene,camera:this.camera}),this.scroll.last=this.scroll.current,this.raf=window.requestAnimationFrame(this.update.bind(this))}addEventListeners(){this.boundOnResize=this.onResize.bind(this),this.boundOnWheel=this.onWheel.bind(this),this.boundOnTouchDown=this.onTouchDown.bind(this),this.boundOnTouchMove=this.onTouchMove.bind(this),this.boundOnTouchUp=this.onTouchUp.bind(this),window.addEventListener("resize",this.boundOnResize),window.addEventListener("mousewheel",this.boundOnWheel),window.addEventListener("wheel",this.boundOnWheel),window.addEventListener("mousedown",this.boundOnTouchDown),window.addEventListener("mousemove",this.boundOnTouchMove),window.addEventListener("mouseup",this.boundOnTouchUp),window.addEventListener("touchstart",this.boundOnTouchDown),window.addEventListener("touchmove",this.boundOnTouchMove),window.addEventListener("touchend",this.boundOnTouchUp)}destroy(){window.cancelAnimationFrame(this.raf),window.removeEventListener("resize",this.boundOnResize),window.removeEventListener("mousewheel",this.boundOnWheel),window.removeEventListener("wheel",this.boundOnWheel),window.removeEventListener("mousedown",this.boundOnTouchDown),window.removeEventListener("mousemove",this.boundOnTouchMove),window.removeEventListener("mouseup",this.boundOnTouchUp),window.removeEventListener("touchstart",this.boundOnTouchDown),window.removeEventListener("touchmove",this.boundOnTouchMove),window.removeEventListener("touchend",this.boundOnTouchUp),this.renderer&&this.renderer.gl&&this.renderer.gl.canvas.parentNode&&this.renderer.gl.canvas.parentNode.removeChild(this.renderer.gl.canvas)}};function S2({items:a,bend:t=3,textColor:n="#ffffff",borderRadius:s=.05,font:l="bold 30px Figtree",scrollSpeed:c=2,scrollEase:f=.05}){const h=Ie.useRef(null);return Ie.useEffect(()=>{const p=new x2(h.current,{items:a,bend:t,textColor:n,borderRadius:s,font:l,scrollSpeed:c,scrollEase:f});return()=>{p.destroy()}},[a,t,n,s,l,c,f]),nn.jsx("div",{className:"w-full h-full overflow-hidden cursor-grab active:cursor-grabbing",ref:h})}const y2=()=>{const a=Ie.useRef(null);return nn.jsxs("div",{style:{height:"800px",position:"relative",overflow:"hidden",backgroundColor:"#060010"},onMouseMove:t=>{const n=t.currentTarget.getBoundingClientRect(),s=t.clientX-n.left,l=t.clientY-n.top,c=a.current;c&&(c.style.setProperty("--mx",`${s}px`),c.style.setProperty("--my",`${l+n.height*.5}px`))},onMouseLeave:()=>{const t=a.current;t&&(t.style.setProperty("--mx","-9999px"),t.style.setProperty("--my","-9999px"))},children:[nn.jsx(HA,{horizontalBeamOffset:.1,verticalBeamOffset:0,color:"#FF79C6"}),nn.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translateX(-50%)",width:"86%",height:"50%",backgroundColor:"#060010",borderRadius:"30px",border:"2px solid #FF79C6",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"1.5rem",zIndex:6,paddingTop:"20px",flexDirection:"column"},children:[nn.jsx("div",{style:{position:"relative",height:"200px"},children:nn.jsx(GA,{text:"Ankit rajput",flex:!0,alpha:!1,stroke:!1,width:!0,weight:!0,italic:!0,textColor:"#ffffff",strokeColor:"#ff0000",minFontSize:106})}),nn.jsx("div",{className:"",children:nn.jsx("h1",{children:"I'am a Web Developer and Yes I Developed soo many things.. "})})]}),nn.jsx("img",{ref:a,src:"/path/to/image.jpg",alt:"Reveal effect",style:{position:"absolute",width:"100%",top:"-50%",zIndex:5,mixBlendMode:"lighten",opacity:.3,pointerEvents:"none","--mx":"-9999px","--my":"-9999px",WebkitMaskImage:"radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)",maskImage:"radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)",WebkitMaskRepeat:"no-repeat",maskRepeat:"no-repeat"}})]})},M2=()=>nn.jsx("div",{className:"h-screen w-full bg-auto",style:{background:"#060010"},children:nn.jsx("div",{style:{height:"600px",position:"relative"},children:nn.jsx(S2,{bend:3,textColor:"#ffffff",borderRadius:.05,scrollEase:.02})})}),E2=()=>nn.jsxs("div",{children:[nn.jsx(y2,{}),nn.jsx(M2,{})]});wS.createRoot(document.getElementById("root")).render(nn.jsx(E2,{}));
