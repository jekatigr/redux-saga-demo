(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{8679:function(n,t,e){"use strict";var r=e(1296),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},u={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};function a(n){return r.isMemo(n)?c:i[n.$$typeof]||o}i[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},i[r.Memo]=c;var f=Object.defineProperty,s=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,v=Object.prototype;n.exports=function n(t,e,r){if("string"!==typeof e){if(v){var o=d(e);o&&o!==v&&n(t,o,r)}var c=s(e);l&&(c=c.concat(l(e)));for(var i=a(t),y=a(e),h=0;h<c.length;++h){var b=c[h];if(!u[b]&&(!r||!r[b])&&(!y||!y[b])&&(!i||!i[b])){var E=p(e,b);try{f(t,b,E)}catch(g){}}}}return t}},6103:function(n,t){"use strict";var e="function"===typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,o=e?Symbol.for("react.portal"):60106,u=e?Symbol.for("react.fragment"):60107,c=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,f=e?Symbol.for("react.context"):60110,s=e?Symbol.for("react.async_mode"):60111,l=e?Symbol.for("react.concurrent_mode"):60111,p=e?Symbol.for("react.forward_ref"):60112,d=e?Symbol.for("react.suspense"):60113,v=e?Symbol.for("react.suspense_list"):60120,y=e?Symbol.for("react.memo"):60115,h=e?Symbol.for("react.lazy"):60116,b=e?Symbol.for("react.block"):60121,E=e?Symbol.for("react.fundamental"):60117,g=e?Symbol.for("react.responder"):60118,m=e?Symbol.for("react.scope"):60119;function w(n){if("object"===typeof n&&null!==n){var t=n.$$typeof;switch(t){case r:switch(n=n.type){case s:case l:case u:case i:case c:case d:return n;default:switch(n=n&&n.$$typeof){case f:case p:case h:case y:case a:return n;default:return t}}case o:return t}}}function S(n){return w(n)===l}t.AsyncMode=s,t.ConcurrentMode=l,t.ContextConsumer=f,t.ContextProvider=a,t.Element=r,t.ForwardRef=p,t.Fragment=u,t.Lazy=h,t.Memo=y,t.Portal=o,t.Profiler=i,t.StrictMode=c,t.Suspense=d,t.isAsyncMode=function(n){return S(n)||w(n)===s},t.isConcurrentMode=S,t.isContextConsumer=function(n){return w(n)===f},t.isContextProvider=function(n){return w(n)===a},t.isElement=function(n){return"object"===typeof n&&null!==n&&n.$$typeof===r},t.isForwardRef=function(n){return w(n)===p},t.isFragment=function(n){return w(n)===u},t.isLazy=function(n){return w(n)===h},t.isMemo=function(n){return w(n)===y},t.isPortal=function(n){return w(n)===o},t.isProfiler=function(n){return w(n)===i},t.isStrictMode=function(n){return w(n)===c},t.isSuspense=function(n){return w(n)===d},t.isValidElementType=function(n){return"string"===typeof n||"function"===typeof n||n===u||n===l||n===i||n===c||n===d||n===v||"object"===typeof n&&null!==n&&(n.$$typeof===h||n.$$typeof===y||n.$$typeof===a||n.$$typeof===f||n.$$typeof===p||n.$$typeof===E||n.$$typeof===g||n.$$typeof===m||n.$$typeof===b)},t.typeOf=w},1296:function(n,t,e){"use strict";n.exports=e(6103)},71:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return e(41)}])},41:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return ie}});var r=e(5893),o=e(5617),u=e(9569),c=e(8500),i=function(n){return"@@redux-saga/"+n},a=i("CANCEL_PROMISE"),f=i("CHANNEL_END"),s=i("IO"),l=i("MATCH"),p=i("MULTICAST"),d=i("SAGA_ACTION"),v=i("SELF_CANCELLATION"),y=i("TASK"),h=i("TASK_CANCEL"),b=i("TERMINATE"),E=i("LOCATION"),g=e(7462);var m=function(n){return null===n||void 0===n},w=function(n){return null!==n&&void 0!==n},S=function(n){return"function"===typeof n},O=function(n){return"string"===typeof n},x=Array.isArray,T=function(n){return n&&S(n.then)},A=function(n){return n&&S(n.next)&&S(n.throw)},_=function n(t){return t&&(O(t)||C(t)||S(t)||x(t)&&t.every(n))},P=function(n){return n&&S(n.take)&&S(n.close)},N=function(n){return S(n)&&n.hasOwnProperty("toString")},C=function(n){return Boolean(n)&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype};var j=function(n,t){var e;void 0===t&&(t=!0);var r=new Promise((function(r){e=setTimeout(r,n,t)}));return r[a]=function(){clearTimeout(e)},r},L=function(n){return function(){return n}}(!0),k=function(){};var R=function(n){return n};"function"===typeof Symbol&&Symbol.asyncIterator&&Symbol.asyncIterator;var M=function(n,t){(0,g.Z)(n,t),Object.getOwnPropertySymbols&&Object.getOwnPropertySymbols(t).forEach((function(e){n[e]=t[e]}))};function I(n,t){var e=n.indexOf(t);e>=0&&n.splice(e,1)}var D=function(n){throw n},$=function(n){return{value:n,done:!0}};function X(n,t,e){void 0===t&&(t=D),void 0===e&&(e="iterator");var r={meta:{name:e},next:n,throw:t,return:$,isSagaIterator:!0};return"undefined"!==typeof Symbol&&(r[Symbol.iterator]=function(){return r}),r}function U(n,t){var e=t.sagaStack;console.error(n),console.error(e)}var q=function(n){return Array.apply(null,new Array(n))},G=function(n){return function(t){return n(Object.defineProperty(t,d,{value:!0}))}},W=function(n){return n===b},z=function(n){return n===h},F=function(n){return W(n)||z(n)};function K(n,t){var e=Object.keys(n),r=e.length;var o,u=0,c=x(n)?q(r):{},i={};return e.forEach((function(n){var e=function(e,i){o||(i||F(e)?(t.cancel(),t(e,i)):(c[n]=e,++u===r&&(o=!0,t(c))))};e.cancel=k,i[n]=e})),t.cancel=function(){o||(o=!0,e.forEach((function(n){return i[n].cancel()})))},i}function B(n){return{name:n.name||"anonymous",location:V(n)}}function V(n){return n[E]}function H(n,t){void 0===n&&(n=10);var e=new Array(n),r=0,o=0,u=0,c=function(t){e[o]=t,o=(o+1)%n,r++},i=function(){if(0!=r){var t=e[u];return e[u]=null,r--,u=(u+1)%n,t}},a=function(){for(var n=[];r;)n.push(i());return n};return{isEmpty:function(){return 0==r},put:function(i){var f;if(r<n)c(i);else switch(t){case 1:throw new Error("Channel's Buffer overflow!");case 3:e[o]=i,u=o=(o+1)%n;break;case 4:f=2*n,e=a(),r=e.length,o=e.length,u=0,e.length=f,n=f,c(i)}},take:i,flush:a}}var J=function(n){return H(n,4)},Z="TAKE",Y="PUT",Q="ALL",nn="RACE",tn="CALL",en="FORK",rn="CANCEL",on="GET_CONTEXT",un=function(n,t){var e;return(e={})[s]=!0,e.combinator=!1,e.type=n,e.payload=t,e};function cn(n,t){return void 0===n&&(n="*"),_(n)?un(Z,{pattern:n}):P(e=n)&&e[p]&&w(t)&&_(t)?un(Z,{channel:n,pattern:t}):P(n)?un(Z,{channel:n}):void 0;var e}function an(n,t){return m(t)&&(t=n,n=void 0),un(Y,{channel:n,action:t})}function fn(n){var t=un(Q,n);return t.combinator=!0,t}function sn(n){var t=un(nn,n);return t.combinator=!0,t}function ln(n,t){var e,r=null;return S(n)?e=n:(x(n)?(r=n[0],e=n[1]):(r=n.context,e=n.fn),r&&O(e)&&S(r[e])&&(e=r[e])),{context:r,fn:e,args:t}}function pn(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];return un(tn,ln(n,e))}function dn(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];return un(en,ln(n,e))}function vn(n){return void 0===n&&(n=v),un(rn,n)}var yn=pn.bind(null,j);function hn(){var n={};return n.promise=new Promise((function(t,e){n.resolve=t,n.reject=e})),n}var bn=hn,En=[],gn=0;function mn(n){try{On(),n()}finally{xn()}}function wn(n){En.push(n),gn||(On(),Tn())}function Sn(n){try{return On(),n()}finally{Tn()}}function On(){gn++}function xn(){gn--}function Tn(){var n;for(xn();!gn&&void 0!==(n=En.shift());)mn(n)}var An=function(n){return function(t){return n.some((function(n){return jn(n)(t)}))}},_n=function(n){return function(t){return n(t)}},Pn=function(n){return function(t){return t.type===String(n)}},Nn=function(n){return function(t){return t.type===n}},Cn=function(){return L};function jn(n){var t="*"===n?Cn:O(n)?Pn:x(n)?An:N(n)?Pn:S(n)?_n:C(n)?Nn:null;if(null===t)throw new Error("invalid pattern: "+n);return t(n)}var Ln={type:f},kn=function(n){return n&&n.type===f};function Rn(n){void 0===n&&(n=J());var t=!1,e=[];return{take:function(r){t&&n.isEmpty()?r(Ln):n.isEmpty()?(e.push(r),r.cancel=function(){I(e,r)}):r(n.take())},put:function(r){if(!t){if(0===e.length)return n.put(r);e.shift()(r)}},flush:function(e){t&&n.isEmpty()?e(Ln):e(n.flush())},close:function(){if(!t){t=!0;var n=e;e=[];for(var r=0,o=n.length;r<o;r++){(0,n[r])(Ln)}}}}}function Mn(){var n=function(){var n,t=!1,e=[],r=e,o=function(){r===e&&(r=e.slice())},u=function(){t=!0;var n=e=r;r=[],n.forEach((function(n){n(Ln)}))};return(n={})[p]=!0,n.put=function(n){if(!t)if(kn(n))u();else for(var o=e=r,c=0,i=o.length;c<i;c++){var a=o[c];a[l](n)&&(a.cancel(),a(n))}},n.take=function(n,e){void 0===e&&(e=Cn),t?n(Ln):(n[l]=e,o(),r.push(n),n.cancel=function(n){var t=!1;return function(){t||(t=!0,n())}}((function(){o(),I(r,n)})))},n.close=u,n}(),t=n.put;return n.put=function(n){n[d]?t(n):wn((function(){t(n)}))},n}function In(n,t){var e=n[a];S(e)&&(t.cancel=e),n.then(t,(function(n){t(n,!0)}))}var Dn,$n=0,Xn=function(){return++$n};function Un(n){n.isRunning()&&n.cancel()}var qn=((Dn={}).TAKE=function(n,t,e){var r=t.channel,o=void 0===r?n.channel:r,u=t.pattern,c=t.maybe,i=function(n){n instanceof Error?e(n,!0):!kn(n)||c?e(n):e(b)};try{o.take(i,w(u)?jn(u):null)}catch(a){return void e(a,!0)}e.cancel=i.cancel},Dn.PUT=function(n,t,e){var r=t.channel,o=t.action,u=t.resolve;wn((function(){var t;try{t=(r?r.put:n.dispatch)(o)}catch(c){return void e(c,!0)}u&&T(t)?In(t,e):e(t)}))},Dn.ALL=function(n,t,e,r){var o=r.digestEffect,u=$n,c=Object.keys(t);if(0!==c.length){var i=K(t,e);c.forEach((function(n){o(t[n],u,i[n],n)}))}else e(x(t)?[]:{})},Dn.RACE=function(n,t,e,r){var o=r.digestEffect,u=$n,c=Object.keys(t),i=x(t)?q(c.length):{},a={},f=!1;c.forEach((function(n){var t=function(t,r){f||(r||F(t)?(e.cancel(),e(t,r)):(e.cancel(),f=!0,i[n]=t,e(i)))};t.cancel=k,a[n]=t})),e.cancel=function(){f||(f=!0,c.forEach((function(n){return a[n].cancel()})))},c.forEach((function(n){f||o(t[n],u,a[n],n)}))},Dn.CALL=function(n,t,e,r){var o=t.context,u=t.fn,c=t.args,i=r.task;try{var a=u.apply(o,c);if(T(a))return void In(a,e);if(A(a))return void Zn(n,a,i.context,$n,B(u),!1,e);e(a)}catch(f){e(f,!0)}},Dn.CPS=function(n,t,e){var r=t.context,o=t.fn,u=t.args;try{var c=function(n,t){m(n)?e(t):e(n,!0)};o.apply(r,u.concat(c)),c.cancel&&(e.cancel=c.cancel)}catch(i){e(i,!0)}},Dn.FORK=function(n,t,e,r){var o=t.context,u=t.fn,c=t.args,i=t.detached,a=r.task,f=function(n){var t=n.context,e=n.fn,r=n.args;try{var o=e.apply(t,r);if(A(o))return o;var u=!1;return X((function(n){return u?{value:n,done:!0}:(u=!0,{value:o,done:!T(o)})}))}catch(c){return X((function(){throw c}))}}({context:o,fn:u,args:c}),s=function(n,t){return n.isSagaIterator?{name:n.meta.name}:B(t)}(f,u);Sn((function(){var t=Zn(n,f,a.context,$n,s,i,void 0);i?e(t):t.isRunning()?(a.queue.addTask(t),e(t)):t.isAborted()?a.queue.abort(t.error()):e(t)}))},Dn.JOIN=function(n,t,e,r){var o=r.task,u=function(n,t){if(n.isRunning()){var e={task:o,cb:t};t.cancel=function(){n.isRunning()&&I(n.joiners,e)},n.joiners.push(e)}else n.isAborted()?t(n.error(),!0):t(n.result())};if(x(t)){if(0===t.length)return void e([]);var c=K(t,e);t.forEach((function(n,t){u(n,c[t])}))}else u(t,e)},Dn.CANCEL=function(n,t,e,r){var o=r.task;t===v?Un(o):x(t)?t.forEach(Un):Un(t),e()},Dn.SELECT=function(n,t,e){var r=t.selector,o=t.args;try{e(r.apply(void 0,[n.getState()].concat(o)))}catch(u){e(u,!0)}},Dn.ACTION_CHANNEL=function(n,t,e){var r=t.pattern,o=Rn(t.buffer),u=jn(r),c=function t(e){kn(e)||n.channel.take(t,u),o.put(e)},i=o.close;o.close=function(){c.cancel(),i()},n.channel.take(c,u),e(o)},Dn.CANCELLED=function(n,t,e,r){e(r.task.isCancelled())},Dn.FLUSH=function(n,t,e){t.flush(e)},Dn.GET_CONTEXT=function(n,t,e,r){e(r.task.context[t])},Dn.SET_CONTEXT=function(n,t,e,r){var o=r.task;M(o.context,t),e()},Dn);function Gn(n,t){return n+"?"+t}function Wn(n){var t=n.name,e=n.location;return e?t+"  "+Gn(e.fileName,e.lineNumber):t}function zn(n){var t=function(n,t){var e;return(e=[]).concat.apply(e,t.map(n))}((function(n){return n.cancelledTasks}),n);return t.length?["Tasks cancelled due to error:"].concat(t).join("\n"):""}var Fn=null,Kn=[],Bn=function(n){n.crashedEffect=Fn,Kn.push(n)},Vn=function(){Fn=null,Kn.length=0},Hn=function(){var n=Kn[0],t=Kn.slice(1),e=n.crashedEffect?function(n){var t=V(n);return t?t.code+"  "+Gn(t.fileName,t.lineNumber):""}(n.crashedEffect):null;return["The above error occurred in task "+Wn(n.meta)+(e?" \n when executing effect "+e:"")].concat(t.map((function(n){return"    created by "+Wn(n.meta)})),[zn(Kn)]).join("\n")};function Jn(n,t,e,r,o,u,c){var i;void 0===c&&(c=k);var a,f,s=0,l=null,p=[],d=Object.create(e),v=function(n,t,e){var r,o=[],u=!1;function c(n){t(),a(),e(n,!0)}function i(t){o.push(t),t.cont=function(i,a){u||(I(o,t),t.cont=k,a?c(i):(t===n&&(r=i),o.length||(u=!0,e(r))))}}function a(){u||(u=!0,o.forEach((function(n){n.cont=k,n.cancel()})),o=[])}return i(n),{addTask:i,cancelAll:a,abort:c,getTasks:function(){return o}}}(t,(function(){p.push.apply(p,v.getTasks().map((function(n){return n.meta.name})))}),b);function b(t,e){if(e){if(s=2,Bn({meta:o,cancelledTasks:p}),E.isRoot){var r=Hn();Vn(),n.onError(t,{sagaStack:r})}f=t,l&&l.reject(t)}else t===h?s=1:1!==s&&(s=3),a=t,l&&l.resolve(t);E.cont(t,e),E.joiners.forEach((function(n){n.cb(t,e)})),E.joiners=null}var E=((i={})[y]=!0,i.id=r,i.meta=o,i.isRoot=u,i.context=d,i.joiners=[],i.queue=v,i.cancel=function(){0===s&&(s=1,v.cancelAll(),b(h,!1))},i.cont=c,i.end=b,i.setContext=function(n){M(d,n)},i.toPromise=function(){return l||(l=bn(),2===s?l.reject(f):0!==s&&l.resolve(a)),l.promise},i.isRunning=function(){return 0===s},i.isCancelled=function(){return 1===s||0===s&&1===t.status},i.isAborted=function(){return 2===s},i.result=function(){return a},i.error=function(){return f},i);return E}function Zn(n,t,e,r,o,u,c){var i=n.finalizeRunEffect((function(t,e,r){if(T(t))In(t,r);else if(A(t))Zn(n,t,f.context,e,o,!1,r);else if(t&&t[s]){(0,qn[t.type])(n,t.payload,r,l)}else r(t)}));p.cancel=k;var a={meta:o,cancel:function(){0===a.status&&(a.status=1,p(h))},status:0},f=Jn(n,a,e,r,o,u,c),l={task:f,digestEffect:d};return c&&(c.cancel=f.cancel),p(),f;function p(n,e){try{var o;e?(o=t.throw(n),Vn()):z(n)?(a.status=1,p.cancel(),o=S(t.return)?t.return(h):{done:!0,value:h}):o=W(n)?S(t.return)?t.return():{done:!0}:t.next(n),o.done?(1!==a.status&&(a.status=3),a.cont(o.value)):d(o.value,r,p)}catch(u){if(1===a.status)throw u;a.status=2,a.cont(u,!0)}}function d(t,e,r,o){void 0===o&&(o="");var u,c=Xn();function a(e,o){u||(u=!0,r.cancel=k,n.sagaMonitor&&(o?n.sagaMonitor.effectRejected(c,e):n.sagaMonitor.effectResolved(c,e)),o&&function(n){Fn=n}(t),r(e,o))}n.sagaMonitor&&n.sagaMonitor.effectTriggered({effectId:c,parentEffectId:e,label:o,effect:t}),a.cancel=k,r.cancel=function(){u||(u=!0,a.cancel(),a.cancel=k,n.sagaMonitor&&n.sagaMonitor.effectCancelled(c))},i(t,c,a)}}function Yn(n,t){var e=n.channel,r=void 0===e?Mn():e,o=n.dispatch,c=n.getState,i=n.context,a=void 0===i?{}:i,f=n.sagaMonitor,s=n.effectMiddlewares,l=n.onError,p=void 0===l?U:l;for(var d=arguments.length,v=new Array(d>2?d-2:0),y=2;y<d;y++)v[y-2]=arguments[y];var h=t.apply(void 0,v);var b,E=Xn();if(f&&(f.rootSagaStarted=f.rootSagaStarted||k,f.effectTriggered=f.effectTriggered||k,f.effectResolved=f.effectResolved||k,f.effectRejected=f.effectRejected||k,f.effectCancelled=f.effectCancelled||k,f.actionDispatched=f.actionDispatched||k,f.rootSagaStarted({effectId:E,saga:t,args:v})),s){var g=u.qC.apply(void 0,s);b=function(n){return function(t,e,r){return g((function(t){return n(t,e,r)}))(t)}}}else b=R;var m={channel:r,dispatch:G(o),getState:c,sagaMonitor:f,onError:p,finalizeRunEffect:b};return Sn((function(){var n=Zn(m,h,a,E,B(t),!0,void 0);return f&&f.effectResolved(E,n),n}))}var Qn=function(n){var t,e=void 0===n?{}:n,r=e.context,o=void 0===r?{}:r,u=e.channel,c=void 0===u?Mn():u,i=e.sagaMonitor,a=function(n,t){if(null==n)return{};var e,r,o={},u=Object.keys(n);for(r=0;r<u.length;r++)e=u[r],t.indexOf(e)>=0||(o[e]=n[e]);return o}(e,["context","channel","sagaMonitor"]);function f(n){var e=n.getState,r=n.dispatch;return t=Yn.bind(null,(0,g.Z)({},a,{context:o,channel:c,dispatch:r,getState:e,sagaMonitor:i})),function(n){return function(t){i&&i.actionDispatched&&i.actionDispatched(t);var e=n(t);return c.put(t),e}}}return f.run=function(){return t.apply(void 0,arguments)},f.setContext=function(n){M(o,n)},f},nt=e(552),tt="ready",et="loading",rt="done",ot=tt;var ut=e(5647),ct="ready",it="loading",at="done",ft=ct;var st=e(7895);function lt(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function pt(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),r.forEach((function(t){lt(n,t,e[t])}))}return n}var dt={leading:{winnerId:-1,running:!1},latest:{winnerId:-1,running:!1}};var vt=e(7101);var yt=(0,u.UY)({example1:function(n,t){var e=void 0===n?ot:n;switch(t.type){case nt.OW:return et;case nt.sW:return rt;case nt.td:return tt;default:return e}},example2:function(n,t){var e=void 0===n?ft:n;switch(t.type){case ut.OW:return it;case ut.sW:return at;case ut.td:return ct;default:return e}},example3:function(n,t){var e=void 0===n?dt:n;switch(t.type){case st.AJ:return pt({},e,{leading:{winnerId:-1,running:!0}});case st.nU:return pt({},e,{leading:{winnerId:t.payload,running:!1}});case st.pW:return pt({},e,{latest:{winnerId:-1,running:!0}});case st.T_:return pt({},e,{latest:{winnerId:t.payload,running:!1}});case st.td:return dt;default:return e}},example4:function(n,t){var e=void 0!==n&&n;switch(t.type){case vt.qz:return!0;case vt.hI:return!1;default:return e}}}),ht=e(8520),bt=e.n(ht),Et=function(n){return{done:!0,value:n}},gt={};function mt(n){return P(n)?"channel":N(n)?String(n):S(n)?n.name:String(n)}function wt(n,t,e){var r,o,u,c=t;function i(t,e){if(c===gt)return Et(t);if(e&&!o)throw c=gt,e;r&&r(t);var i=e?n[o](e):n[c]();return c=i.nextState,u=i.effect,r=i.stateUpdater,o=i.errorState,c===gt?Et(t):u}return X(i,(function(n){return i(null,n)}),e)}function St(n,t){for(var e=arguments.length,r=new Array(e>2?e-2:0),o=2;o<e;o++)r[o-2]=arguments[o];var u,c,i={done:!1,value:cn(n)},a=function(n){return{done:!1,value:dn.apply(void 0,[t].concat(r,[n]))}},f=function(n){return{done:!1,value:vn(n)}},s=function(n){return u=n},l=function(n){return c=n};return wt({q1:function(){return{nextState:"q2",effect:i,stateUpdater:l}},q2:function(){return u?{nextState:"q3",effect:f(u)}:{nextState:"q1",effect:a(c),stateUpdater:s}},q3:function(){return{nextState:"q1",effect:a(c),stateUpdater:s}}},"q1","takeLatest("+mt(n)+", "+t.name+")")}function Ot(n,t){for(var e=arguments.length,r=new Array(e>2?e-2:0),o=2;o<e;o++)r[o-2]=arguments[o];var u,c={done:!1,value:cn(n)},i=function(n){return{done:!1,value:pn.apply(void 0,[t].concat(r,[n]))}},a=function(n){return u=n};return wt({q1:function(){return{nextState:"q2",effect:c,stateUpdater:a}},q2:function(){return{nextState:"q1",effect:i(u)}}},"q1","takeLeading("+mt(n)+", "+t.name+")")}function xt(n,t){for(var e=arguments.length,r=new Array(e>2?e-2:0),o=2;o<e;o++)r[o-2]=arguments[o];return dn.apply(void 0,[St,n,t].concat(r))}function Tt(n,t){for(var e=arguments.length,r=new Array(e>2?e-2:0),o=2;o<e;o++)r[o-2]=arguments[o];return dn.apply(void 0,[Ot,n,t].concat(r))}var At=e(3300),_t=bt().mark(Ct),Pt=bt().mark(Nt);function Nt(n){var t;return bt().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.payload,e.next=3,an((0,At.NM)());case 3:return e.next=5,yn(t);case 5:return e.next=7,an((0,At.nw)());case 7:case"end":return e.stop()}}),Pt)}function Ct(){return bt().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,xt(nt.p8,Nt);case 2:case"end":return n.stop()}}),_t)}var jt=Ct,Lt=e(9524),kt=bt().mark(Dt),Rt=bt().mark(Mt);function Mt(){return bt().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,an((0,Lt.NM)());case 2:return n.next=4,yn(1e3);case 4:return n.next=6,an((0,Lt.nw)());case 6:case"end":return n.stop()}}),Rt)}var It=bt().mark((function n(){return bt().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,sn([pn(Mt),cn(ut.td)]);case 2:case"end":return n.stop()}}),n)}));function Dt(){return bt().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,xt(ut.p8,It);case 2:case"end":return n.stop()}}),kt)}var $t=Dt,Xt=e(9066),Ut=bt().mark(Ft),qt=bt().mark(zt),Gt=bt().mark(Wt);function Wt(n){var t;return bt().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.payload,e.next=3,an((0,Xt.lT)());case 3:return e.next=5,yn(1e3);case 5:return e.next=7,an((0,Xt.nq)(t));case 7:case"end":return e.stop()}}),Gt)}function zt(n){var t;return bt().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.payload,e.next=3,an((0,Xt.TA)());case 3:return e.next=5,yn(1e3);case 5:return e.next=7,an((0,Xt.Xz)(t));case 7:case"end":return e.stop()}}),qt)}function Ft(){return bt().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Tt(st.o9,Wt);case 2:return n.next=4,xt(st.xU,zt);case 4:case"end":return n.stop()}}),Ut)}var Kt=Ft,Bt=e(4006),Vt=bt().mark(Zt),Ht=bt().mark(Jt);function Jt(){var n;return bt().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,un(on,"delay");case 2:return n=t.sent,t.next=5,an((0,Bt.q8)());case 5:return t.next=7,pn(n,1e3);case 7:return t.next=9,an((0,Bt.a9)());case 9:case"end":return t.stop()}}),Ht)}function Zt(){return bt().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,xt(vt.xN,Jt);case 2:case"end":return n.stop()}}),Vt)}var Yt=Zt,Qt=bt().mark(ne);function ne(){return bt().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fn([pn(jt),pn($t),pn(Kt),pn(Yt)]);case 2:case"end":return n.stop()}}),Qt)}var te=ne,ee=Qn({context:{delay:function(n){return new Promise((function(t){return setTimeout(t,n)}))}},sagaMonitor:{effectTriggered:function(n){console.log("effectTriggered",n)},actionDispatched:function(n){console.log("actionDispatched",n)}}}),re=(0,u.MT)(yt,(0,c.Uo)((0,u.md)(ee)));ee.run(te);var oe=re;e(5766);function ue(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function ce(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),r.forEach((function(t){ue(n,t,e[t])}))}return n}function ie(n){var t=n.Component,e=n.pageProps;return(0,r.jsx)(o.zt,{store:oe,children:(0,r.jsx)(t,ce({},e))})}},3300:function(n,t,e){"use strict";e.d(t,{NM:function(){return o},nw:function(){return u},Bo:function(){return c}});var r=e(552),o=function(){return{type:r.OW}},u=function(){return{type:r.sW}},c=function(){return{type:r.td}}},552:function(n,t,e){"use strict";e.d(t,{p8:function(){return r},OW:function(){return o},sW:function(){return u},td:function(){return c}});var r="EXAMPLE 1 / TRIGGER_LOAD",o="EXAMPLE 1 / LOADING_START",u="EXAMPLE 1 / LOADING_SUCCESS",c="EXAMPLE 1 / RESET"},9524:function(n,t,e){"use strict";e.d(t,{b8:function(){return o},NM:function(){return u},nw:function(){return c},Bo:function(){return i}});var r=e(5647),o=function(){return{type:r.p8}},u=function(){return{type:r.OW}},c=function(){return{type:r.sW}},i=function(){return{type:r.td}}},5647:function(n,t,e){"use strict";e.d(t,{p8:function(){return r},OW:function(){return o},sW:function(){return u},td:function(){return c}});var r="EXAMPLE 2 / TRIGGER_LOAD",o="EXAMPLE 2 / LOADING_START",u="EXAMPLE 2 / LOADING_SUCCESS",c="EXAMPLE 2 / RESET"},9066:function(n,t,e){"use strict";e.d(t,{rZ:function(){return o},lT:function(){return u},nq:function(){return c},id:function(){return i},TA:function(){return a},Xz:function(){return f},mc:function(){return s}});var r=e(7895),o=function(n){return{type:r.o9,payload:n}},u=function(){return{type:r.AJ}},c=function(n){return{type:r.nU,payload:n}},i=function(n){return{type:r.xU,payload:n}},a=function(){return{type:r.pW}},f=function(n){return{type:r.T_,payload:n}},s=function(){return{type:r.td}}},7895:function(n,t,e){"use strict";e.d(t,{o9:function(){return r},AJ:function(){return o},nU:function(){return u},xU:function(){return c},pW:function(){return i},T_:function(){return a},td:function(){return f}});var r="EXAMPLE 3 / TRIGGER_LEADING",o="EXAMPLE 3 / LEADING_START",u="EXAMPLE 3 / LEADING_STOP",c="EXAMPLE 3 / TRIGGER_LATEST",i="EXAMPLE 3 / LATEST_START",a="EXAMPLE 3 / LATEST_STOP",f="EXAMPLE 3 / RESET"},4006:function(n,t,e){"use strict";e.d(t,{pi:function(){return o},q8:function(){return u},a9:function(){return c}});var r=e(7101),o=function(){return{type:r.xN}},u=function(){return{type:r.qz}},c=function(){return{type:r.hI}}},7101:function(n,t,e){"use strict";e.d(t,{xN:function(){return r},qz:function(){return o},hI:function(){return u}});var r="EXAMPLE 4 / TRIGGER",o="EXAMPLE 4 / SAGA_START",u="EXAMPLE 4 / SAGA_FINISH"},5766:function(){},9921:function(n,t){"use strict";var e=60103,r=60106,o=60107,u=60108,c=60114,i=60109,a=60110,f=60112,s=60113,l=60120,p=60115,d=60116,v=60121,y=60122,h=60117,b=60129,E=60131;if("function"===typeof Symbol&&Symbol.for){var g=Symbol.for;e=g("react.element"),r=g("react.portal"),o=g("react.fragment"),u=g("react.strict_mode"),c=g("react.profiler"),i=g("react.provider"),a=g("react.context"),f=g("react.forward_ref"),s=g("react.suspense"),l=g("react.suspense_list"),p=g("react.memo"),d=g("react.lazy"),v=g("react.block"),y=g("react.server.block"),h=g("react.fundamental"),b=g("react.debug_trace_mode"),E=g("react.legacy_hidden")}function m(n){if("object"===typeof n&&null!==n){var t=n.$$typeof;switch(t){case e:switch(n=n.type){case o:case c:case u:case s:case l:return n;default:switch(n=n&&n.$$typeof){case a:case f:case d:case p:case i:return n;default:return t}}case r:return t}}}},9864:function(n,t,e){"use strict";e(9921)},5617:function(n,t,e){"use strict";e.d(t,{zt:function(){return s},I0:function(){return y},v9:function(){return g}});var r=e(7294),o=(e(5697),r.createContext(null));var u=function(n){n()},c=function(){return u};var i={notify:function(){},get:function(){return[]}};function a(n,t){var e,r=i;function o(){a.onStateChange&&a.onStateChange()}function u(){e||(e=t?t.addNestedSub(o):n.subscribe(o),r=function(){var n=c(),t=null,e=null;return{clear:function(){t=null,e=null},notify:function(){n((function(){for(var n=t;n;)n.callback(),n=n.next}))},get:function(){for(var n=[],e=t;e;)n.push(e),e=e.next;return n},subscribe:function(n){var r=!0,o=e={callback:n,next:null,prev:e};return o.prev?o.prev.next=o:t=o,function(){r&&null!==t&&(r=!1,o.next?o.next.prev=o.prev:e=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}())}var a={addNestedSub:function(n){return u(),r.subscribe(n)},notifyNestedSubs:function(){r.notify()},handleChangeWrapper:o,isSubscribed:function(){return Boolean(e)},trySubscribe:u,tryUnsubscribe:function(){e&&(e(),e=void 0,r.clear(),r=i)},getListeners:function(){return r}};return a}var f="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?r.useLayoutEffect:r.useEffect;var s=function(n){var t=n.store,e=n.context,u=n.children,c=(0,r.useMemo)((function(){var n=a(t);return n.onStateChange=n.notifyNestedSubs,{store:t,subscription:n}}),[t]),i=(0,r.useMemo)((function(){return t.getState()}),[t]);f((function(){var n=c.subscription;return n.trySubscribe(),i!==t.getState()&&n.notifyNestedSubs(),function(){n.tryUnsubscribe(),n.onStateChange=null}}),[c,i]);var s=e||o;return r.createElement(s.Provider,{value:c},u)};e(8679),e(9864);e(7462);function l(){return(0,r.useContext)(o)}function p(n){void 0===n&&(n=o);var t=n===o?l:function(){return(0,r.useContext)(n)};return function(){return t().store}}var d=p();function v(n){void 0===n&&(n=o);var t=n===o?d:p(n);return function(){return t().dispatch}}var y=v(),h=function(n,t){return n===t};function b(n){void 0===n&&(n=o);var t=n===o?l:function(){return(0,r.useContext)(n)};return function(n,e){void 0===e&&(e=h);var o=t(),u=function(n,t,e,o){var u,c=(0,r.useReducer)((function(n){return n+1}),0)[1],i=(0,r.useMemo)((function(){return a(e,o)}),[e,o]),s=(0,r.useRef)(),l=(0,r.useRef)(),p=(0,r.useRef)(),d=(0,r.useRef)(),v=e.getState();try{if(n!==l.current||v!==p.current||s.current){var y=n(v);u=void 0!==d.current&&t(y,d.current)?d.current:y}else u=d.current}catch(h){throw s.current&&(h.message+="\nThe error may be correlated with this previous error:\n"+s.current.stack+"\n\n"),h}return f((function(){l.current=n,p.current=v,d.current=u,s.current=void 0})),f((function(){function n(){try{var n=e.getState();if(n===p.current)return;var r=l.current(n);if(t(r,d.current))return;d.current=r,p.current=n}catch(h){s.current=h}c()}return i.onStateChange=n,i.trySubscribe(),n(),function(){return i.tryUnsubscribe()}}),[e,i]),u}(n,e,o.store,o.subscription);return(0,r.useDebugValue)(u),u}}var E,g=b(),m=e(3935);E=m.unstable_batchedUpdates,u=E},8500:function(n,t,e){"use strict";var r=e(9569).qC;t.Uo="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"===typeof arguments[0]?r:r.apply(null,arguments)},"undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__},9569:function(n,t,e){"use strict";function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function o(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function u(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?o(Object(e),!0).forEach((function(t){r(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function c(n){return"Minified Redux error #"+n+"; visit https://redux.js.org/Errors?code="+n+" for the full message or use the non-minified dev environment for full errors. "}e.d(t,{md:function(){return v},UY:function(){return p},qC:function(){return d},MT:function(){return l}});var i="function"===typeof Symbol&&Symbol.observable||"@@observable",a=function(){return Math.random().toString(36).substring(7).split("").join(".")},f={INIT:"@@redux/INIT"+a(),REPLACE:"@@redux/REPLACE"+a(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+a()}};function s(n){if("object"!==typeof n||null===n)return!1;for(var t=n;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(n)===t}function l(n,t,e){var r;if("function"===typeof t&&"function"===typeof e||"function"===typeof e&&"function"===typeof arguments[3])throw new Error(c(0));if("function"===typeof t&&"undefined"===typeof e&&(e=t,t=void 0),"undefined"!==typeof e){if("function"!==typeof e)throw new Error(c(1));return e(l)(n,t)}if("function"!==typeof n)throw new Error(c(2));var o=n,u=t,a=[],p=a,d=!1;function v(){p===a&&(p=a.slice())}function y(){if(d)throw new Error(c(3));return u}function h(n){if("function"!==typeof n)throw new Error(c(4));if(d)throw new Error(c(5));var t=!0;return v(),p.push(n),function(){if(t){if(d)throw new Error(c(6));t=!1,v();var e=p.indexOf(n);p.splice(e,1),a=null}}}function b(n){if(!s(n))throw new Error(c(7));if("undefined"===typeof n.type)throw new Error(c(8));if(d)throw new Error(c(9));try{d=!0,u=o(u,n)}finally{d=!1}for(var t=a=p,e=0;e<t.length;e++){(0,t[e])()}return n}function E(n){if("function"!==typeof n)throw new Error(c(10));o=n,b({type:f.REPLACE})}function g(){var n,t=h;return(n={subscribe:function(n){if("object"!==typeof n||null===n)throw new Error(c(11));function e(){n.next&&n.next(y())}return e(),{unsubscribe:t(e)}}})[i]=function(){return this},n}return b({type:f.INIT}),(r={dispatch:b,subscribe:h,getState:y,replaceReducer:E})[i]=g,r}function p(n){for(var t=Object.keys(n),e={},r=0;r<t.length;r++){var o=t[r];0,"function"===typeof n[o]&&(e[o]=n[o])}var u,i=Object.keys(e);try{!function(n){Object.keys(n).forEach((function(t){var e=n[t];if("undefined"===typeof e(void 0,{type:f.INIT}))throw new Error(c(12));if("undefined"===typeof e(void 0,{type:f.PROBE_UNKNOWN_ACTION()}))throw new Error(c(13))}))}(e)}catch(a){u=a}return function(n,t){if(void 0===n&&(n={}),u)throw u;for(var r=!1,o={},a=0;a<i.length;a++){var f=i[a],s=e[f],l=n[f],p=s(l,t);if("undefined"===typeof p){t&&t.type;throw new Error(c(14))}o[f]=p,r=r||p!==l}return(r=r||i.length!==Object.keys(n).length)?o:n}}function d(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return 0===t.length?function(n){return n}:1===t.length?t[0]:t.reduce((function(n,t){return function(){return n(t.apply(void 0,arguments))}}))}function v(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return function(n){return function(){var e=n.apply(void 0,arguments),r=function(){throw new Error(c(15))},o={getState:e.getState,dispatch:function(){return r.apply(void 0,arguments)}},i=t.map((function(n){return n(o)}));return r=d.apply(void 0,i)(e.dispatch),u(u({},e),{},{dispatch:r})}}}},7462:function(n,t,e){"use strict";function r(){return(r=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}e.d(t,{Z:function(){return r}})}},function(n){var t=function(t){return n(n.s=t)};n.O(0,[774,179],(function(){return t(71),t(387)}));var e=n.O();_N_E=e}]);