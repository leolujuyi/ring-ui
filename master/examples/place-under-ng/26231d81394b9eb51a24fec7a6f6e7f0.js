!function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=1197)}({1197:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(53),o=(n.n(i),n(547),n(36));window.addEventListener("scroll",function(){var e=document.querySelector(".target-element"),t=n.i(o.e)();e.style.position=t>30?"fixed":"static"})},13:function(e,t,n){e.exports=n(2)(359)},19:function(e,t,n){e.exports=n(2)(328)},2:function(e,t){e.exports=vendor_lib},24:function(e,t,n){e.exports=n(2)(411)},27:function(e,t,n){e.exports=n(2)(396)},36:function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){return e===document||e instanceof Node&&document.documentElement.contains(e.parentNode)}function s(e){if(e instanceof Range||c(e)){var t=e.getBoundingClientRect();return{top:t.top,right:t.right,bottom:t.bottom,left:t.left,width:t.width,height:t.height}}return Object.assign({},x)}function l(){return"devicePixelRatio"in window?window.devicePixelRatio:1}function u(){return window.innerHeight}function d(){return document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop}function f(){return document.documentElement&&document.documentElement.scrollLeft||document.body.scrollLeft}function h(e){e.preventDefault&&e.preventDefault()}n.d(t,"d",function(){return E}),t.h=c,t.a=s,t.b=l,t.g=u,t.e=d,t.f=f,n.d(t,"l",function(){return S}),n.d(t,"j",function(){return H}),n.d(t,"k",function(){return A}),n.d(t,"c",function(){return C}),t.i=h;var v=n(24),p=(n.n(v),n(81)),g=(n.n(p),n(9)),m=(n.n(g),n(38)),b=(n.n(m),n(27)),y=(n.n(b),n(6)),w=(n.n(y),n(13)),E=(n.n(w),window.getComputedStyle.bind(window)),x={top:0,right:0,bottom:0,left:0,width:0,height:0},S=function(e){return function(t){(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"").split(/\s+/g).filter(function(e){return!!e}).forEach(function(n){return t[e](n)})}},H=S("add"),A=S("remove"),C=function(){function e(){i(this,e),a(this,"_all",new Set)}return r(e,[{key:"add",value:function(e,t,n,i){e.addEventListener(t,n,i);var o=function(){return e.removeEventListener(t,n,i)};return this._all.add(o),o}},{key:"remove",value:function(e){e(),this._all.delete(e)}},{key:"removeAll",value:function(){var e=this;this._all.forEach(function(t){return e.remove(t)})}}]),e}()},37:function(e,t,n){e.exports=n(2)(246)},38:function(e,t,n){e.exports=n(2)(436)},395:function(e,t,n){"use strict";var i=e.exports={};i.isIE=function(e){return!(!function(){var e=navigator.userAgent.toLowerCase();return-1!==e.indexOf("msie")||-1!==e.indexOf("trident")||-1!==e.indexOf(" edge/")}()||e&&e!==function(){var e=3,t=document.createElement("div"),n=t.getElementsByTagName("i");do{t.innerHTML="\x3c!--[if gt IE "+ ++e+"]><i></i><![endif]--\x3e"}while(n[0]);return e>4?e:void 0}())},i.isLegacyOpera=function(){return!!window.opera}},396:function(e,t,n){"use strict";(e.exports={}).forEach=function(e,t){for(var n=0;n<e.length;n++){var i=t(e[n]);if(i)return i}}},416:function(e,t,n){"use strict";function i(){function e(e,t){t||(t=e,e=0),e>r?r=e:e<a&&(a=e),i[e]||(i[e]=[]),i[e].push(t),o++}function t(){for(var e=a;e<=r;e++)for(var t=i[e],n=0;n<t.length;n++){var o=t[n];o()}}function n(){return o}var i={},o=0,r=0,a=0;return{add:e,process:t,size:n}}var o=n(417);e.exports=function(e){function t(e,t){!v&&d&&u&&0===h.size()&&a(),h.add(e,t)}function n(){for(v=!0;h.size();){var e=h;h=i(),e.process()}v=!1}function r(e){v||(void 0===e&&(e=u),f&&(c(f),f=null),e?a():n())}function a(){f=s(n)}function c(e){return clearTimeout(e)}function s(e){return function(e){return setTimeout(e,0)}(e)}e=e||{};var l=e.reporter,u=o.getOption(e,"async",!0),d=o.getOption(e,"auto",!0);d&&!u&&(l&&l.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true."),u=!0);var f,h=i(),v=!1;return{add:t,force:r}}},417:function(e,t,n){"use strict";function i(e,t,n){var i=e[t];return void 0!==i&&null!==i||void 0===n?i:n}(e.exports={}).getOption=i},419:function(e,t,n){"use strict";var i=n(395);e.exports=function(e){function t(e,t){function n(){t(e)}if(!o(e))throw new Error("Element is not detectable by this strategy.");i.isIE(8)?(s(e).object={proxy:n},e.attachEvent("onresize",n)):o(e).contentDocument.defaultView.addEventListener("resize",n)}function n(e,t,n){n||(n=t,t=e,e=null),e=e||{},e.debug,i.isIE(8)?n(t):function(e,t){function n(){function n(){if("static"===l.position){e.style.position="relative";var t=function(e,t,n,i){var o=n[i];"auto"!==o&&"0"!==function(e){return e.replace(/[^-\d\.]/g,"")}(o)&&(e.warn("An element that is positioned static has style."+i+"="+o+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+i+" will be set to 0. Element: ",t),t.style[i]=0)};t(a,e,l,"top"),t(a,e,l,"right"),t(a,e,l,"bottom"),t(a,e,l,"left")}}function c(){function i(e,t){if(!e.contentDocument)return void setTimeout(function(){i(e,t)},100);t(e.contentDocument)}r||n(),i(this,function(n){t(e)})}""!==l.position&&(n(l),r=!0);var u=document.createElement("object");u.style.cssText=o,u.tabIndex=-1,u.type="text/html",u.onload=c,i.isIE()||(u.data="about:blank"),e.appendChild(u),s(e).object=u,i.isIE()&&(u.data="about:blank")}var o="display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; padding: 0; margin: 0; opacity: 0; z-index: -1000; pointer-events: none;",r=!1,l=window.getComputedStyle(e),u=e.offsetWidth,d=e.offsetHeight;s(e).startSize={width:u,height:d},c?c.add(n):n()}(t,n)}function o(e){return s(e).object}function r(e){i.isIE(8)?e.detachEvent("onresize",s(e).object.proxy):e.removeChild(o(e)),delete s(e).object}e=e||{};var a=e.reporter,c=e.batchProcessor,s=e.stateHandler.getState;if(!a)throw new Error("Missing required dependency: reporter.");return{makeDetectable:n,addListener:t,uninstall:r}}},420:function(e,t,n){"use strict";var i=n(396).forEach;e.exports=function(e){function t(e){e.className+=" "+p+"_animation_active"}function n(e,t,n){if(e.addEventListener)e.addEventListener(t,n);else{if(!e.attachEvent)return u.error("[scroll] Don't know how to add event listeners.");e.attachEvent("on"+t,n)}}function o(e,t,n){if(e.removeEventListener)e.removeEventListener(t,n);else{if(!e.detachEvent)return u.error("[scroll] Don't know how to remove event listeners.");e.detachEvent("on"+t,n)}}function r(e){return f(e).container.childNodes[0].childNodes[0].childNodes[0]}function a(e){return f(e).container.childNodes[0].childNodes[0].childNodes[1]}function c(e,t){if(!f(e).listeners.push)throw new Error("Cannot add listener to an element that is not detectable.");f(e).listeners.push(t)}function s(e,o,c){function s(){if(e.debug){var t=Array.prototype.slice.call(arguments);if(t.unshift(h.get(o),"Scroll: "),u.log.apply)u.log.apply(null,t);else for(var n=0;n<t.length;n++)u.log(t[n])}}function l(e){var t=f(e).container.childNodes[0],n=window.getComputedStyle(t);return!n.width||-1===n.width.indexOf("px")}function g(){var e=window.getComputedStyle(o),t={};return t.position=e.position,t.width=o.offsetWidth,t.height=o.offsetHeight,t.top=e.top,t.right=e.right,t.bottom=e.bottom,t.left=e.left,t.widthCSS=e.width,t.heightCSS=e.height,t}function m(){var e=g();f(o).startSize={width:e.width,height:e.height},s("Element start size",f(o).startSize)}function b(){f(o).listeners=[]}function y(){if(s("storeStyle invoked."),!f(o))return void s("Aborting because element has been uninstalled");var e=g();f(o).style=e}function w(e,t,n){f(e).lastWidth=t,f(e).lastHeight=n}function E(e){return r(e).childNodes[0]}function x(){return 2*v.width+1}function S(){return 2*v.height+1}function H(e){return e+10+x()}function A(e){return e+10+S()}function C(e){return 2*e+x()}function T(e){return 2*e+S()}function k(e,t,n){var i=r(e),o=a(e),c=H(t),s=A(n),l=C(t),u=T(n);i.scrollLeft=c,i.scrollTop=s,o.scrollLeft=l,o.scrollTop=u}function L(){var e=f(o).container;if(!e){e=document.createElement("div"),e.className=p,e.style.cssText="visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden; margin: 0; padding: 0;",f(o).container=e,t(e),o.appendChild(e);var i=function(){f(o).onRendered&&f(o).onRendered()};n(e,"animationstart",i),f(o).onAnimationStart=i}return e}function z(){function e(){f(o).onExpand&&f(o).onExpand()}function t(){f(o).onShrink&&f(o).onShrink()}if(s("Injecting elements"),!f(o))return void s("Aborting because element has been uninstalled");!function(){var e=f(o).style;if("static"===e.position){o.style.position="relative";var t=function(e,t,n,i){var o=n[i];"auto"!==o&&"0"!==function(e){return e.replace(/[^-\d\.]/g,"")}(o)&&(e.warn("An element that is positioned static has style."+i+"="+o+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+i+" will be set to 0. Element: ",t),t.style[i]=0)};t(u,o,e,"top"),t(u,o,e,"right"),t(u,o,e,"bottom"),t(u,o,e,"left")}}();var i=f(o).container;i||(i=L());var r=v.width,a=v.height,c="position: absolute; flex: none; overflow: hidden; z-index: -1; visibility: hidden; "+function(e,t,n,i){return e=e?e+"px":"0",t=t?t+"px":"0",n=n?n+"px":"0",i=i?i+"px":"0","left: "+e+"; top: "+t+"; right: "+i+"; bottom: "+n+";"}(-(1+r),-(1+a),-a,-r),l=document.createElement("div"),d=document.createElement("div"),h=document.createElement("div"),g=document.createElement("div"),m=document.createElement("div"),b=document.createElement("div");l.dir="ltr",l.style.cssText="position: absolute; flex: none; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;",l.className=p,d.className=p,d.style.cssText=c,h.style.cssText="position: absolute; flex: none; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;",g.style.cssText="position: absolute; left: 0; top: 0;",m.style.cssText="position: absolute; flex: none; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;",b.style.cssText="position: absolute; width: 200%; height: 200%;",h.appendChild(g),m.appendChild(b),d.appendChild(h),d.appendChild(m),l.appendChild(d),i.appendChild(l),n(h,"scroll",e),n(m,"scroll",t),f(o).onExpandScroll=e,f(o).onShrinkScroll=t}function N(){function t(e,t,n){var i=E(e),o=H(t),r=A(n);i.style.width=o+"px",i.style.height=r+"px"}function n(n){var i=o.offsetWidth,r=o.offsetHeight;s("Storing current size",i,r),w(o,i,r),d.add(0,function(){if(!f(o))return void s("Aborting because element has been uninstalled");if(!c())return void s("Aborting because element container has not been initialized");if(e.debug){var n=o.offsetWidth,a=o.offsetHeight;n===i&&a===r||u.warn(h.get(o),"Scroll: Size changed before updating detector elements.")}t(o,i,r)}),d.add(1,function(){return f(o)?c()?void k(o,i,r):void s("Aborting because element container has not been initialized"):void s("Aborting because element has been uninstalled")}),n&&d.add(2,function(){return f(o)?c()?void n():void s("Aborting because element container has not been initialized"):void s("Aborting because element has been uninstalled")})}function c(){return!!f(o).container}function v(){s("notifyListenersIfNeeded invoked");var e=f(o);return function(){return void 0===f(o).lastNotifiedWidth}()&&e.lastWidth===e.startSize.width&&e.lastHeight===e.startSize.height?s("Not notifying: Size is the same as the start size, and there has been no notification yet."):e.lastWidth===e.lastNotifiedWidth&&e.lastHeight===e.lastNotifiedHeight?s("Not notifying: Size already notified"):(s("Current size not notified, notifying..."),e.lastNotifiedWidth=e.lastWidth,e.lastNotifiedHeight=e.lastHeight,void i(f(o).listeners,function(e){e(o)}))}function p(){if(s("startanimation triggered."),l(o))return void s("Ignoring since element is still unrendered...");s("Element rendered.");var e=r(o),t=a(o);0!==e.scrollLeft&&0!==e.scrollTop&&0!==t.scrollLeft&&0!==t.scrollTop||(s("Scrollbars out of sync. Updating detector elements..."),n(v))}function g(){if(s("Scroll detected."),l(o))return void s("Scroll event fired while unrendered. Ignoring...");var e=o.offsetWidth,t=o.offsetHeight;e!==f(o).lastWidth||t!==f(o).lastHeight?(s("Element size changed."),n(v)):s("Element size has not changed ("+e+"x"+t+").")}if(s("registerListenersAndPositionElements invoked."),!f(o))return void s("Aborting because element has been uninstalled");f(o).onRendered=p,f(o).onExpand=g,f(o).onShrink=g;var m=f(o).style;t(o,m.width,m.height)}function I(){if(s("finalizeDomMutation invoked."),!f(o))return void s("Aborting because element has been uninstalled");var e=f(o).style;w(o,e.width,e.height),k(o,e.width,e.height)}function O(){c(o)}function _(){s("Installing..."),b(),m(),d.add(0,y),d.add(1,z),d.add(2,N),d.add(3,I),d.add(4,O)}c||(c=o,o=e,e=null),e=e||{},s("Making detectable..."),function(e){return!function(e){return e===e.ownerDocument.body||e.ownerDocument.body.contains(e)}(e)||null===window.getComputedStyle(e)}(o)?(s("Element is detached"),L(),s("Waiting until element is attached..."),f(o).onRendered=function(){s("Element is now attached"),_()}):_()}function l(e){var t=f(e);t&&(t.onExpandScroll&&o(r(e),"scroll",t.onExpandScroll),t.onShrinkScroll&&o(a(e),"scroll",t.onShrinkScroll),t.onAnimationStart&&o(t.container,"animationstart",t.onAnimationStart),t.container&&e.removeChild(t.container))}e=e||{};var u=e.reporter,d=e.batchProcessor,f=e.stateHandler.getState,h=(e.stateHandler.hasState,e.idHandler);if(!d)throw new Error("Missing required dependency: batchProcessor");if(!u)throw new Error("Missing required dependency: reporter.");var v=function(){var e=document.createElement("div");e.style.cssText="position: absolute; width: 1000px; height: 1000px; visibility: hidden; margin: 0; padding: 0;";var t=document.createElement("div");t.style.cssText="position: absolute; width: 500px; height: 500px; overflow: scroll; visibility: none; top: -1500px; left: -1500px; visibility: hidden; margin: 0; padding: 0;",t.appendChild(e),document.body.insertBefore(t,document.body.firstChild);var n=500-t.clientWidth,i=500-t.clientHeight;return document.body.removeChild(t),{width:n,height:i}}(),p="erd_scroll_detection_container";return function(e,t){if(!document.getElementById(e)){var n=t+"_animation",i=t+"_animation_active",o="/* Created by the element-resize-detector library. */\n";o+="."+t+" > div::-webkit-scrollbar { display: none; }\n\n",o+="."+i+" { -webkit-animation-duration: 0.1s; animation-duration: 0.1s; -webkit-animation-name: "+n+"; animation-name: "+n+"; }\n",o+="@-webkit-keyframes "+n+" { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }\n",o+="@keyframes "+n+" { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }",function(t,n){n=n||function(e){document.head.appendChild(e)};var i=document.createElement("style");i.innerHTML=t,i.id=e,n(i)}(o)}}("erd_scroll_detection_scrollbar_style",p),{makeDetectable:s,addListener:c,uninstall:l}}},421:function(e,t,n){"use strict";function i(e){return Array.isArray(e)||void 0!==e.length}function o(e){if(Array.isArray(e))return e;var t=[];return c(e,function(e){t.push(e)}),t}function r(e){return e&&1===e.nodeType}function a(e,t,n){var i=e[t];return void 0!==i&&null!==i||void 0===n?i:n}var c=n(396).forEach,s=n(422),l=n(425),u=n(423),d=n(424),f=n(426),h=n(395),v=n(416),p=n(427),g=n(419),m=n(420);e.exports=function(e){function t(e,t,n){function s(e){var t=A.get(e);c(t,function(t){t(e)})}function l(e,t,n){A.add(t,n),e&&n(t)}if(n||(n=t,t=e,e={}),!t)throw new Error("At least one element required.");if(!n)throw new Error("Listener required.");if(r(t))t=[t];else{if(!i(t))return E.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");t=o(t)}var u=0,d=a(e,"callOnAdd",S.callOnAdd),f=a(e,"onReady",function(){}),h=a(e,"debug",S.debug);c(t,function(e){p.getState(e)||(p.initState(e),b.set(e));var i=b.get(e);if(h&&E.log("Attaching listener to element",i,e),!C.isDetectable(e))return h&&E.log(i,"Not detectable."),C.isBusy(e)?(h&&E.log(i,"System busy making it detectable"),l(d,e,n),L[i]=L[i]||[],void L[i].push(function(){++u===t.length&&f()})):(h&&E.log(i,"Making detectable..."),C.markBusy(e,!0),H.makeDetectable({debug:h},e,function(e){if(h&&E.log(i,"onElementDetectable"),p.getState(e)){C.markAsDetectable(e),C.markBusy(e,!1),H.addListener(e,s),l(d,e,n);var o=p.getState(e);if(o&&o.startSize){var r=e.offsetWidth,a=e.offsetHeight;o.startSize.width===r&&o.startSize.height===a||s(e)}L[i]&&c(L[i],function(e){e()})}else h&&E.log(i,"Element uninstalled before being detectable.");delete L[i],++u===t.length&&f()}));h&&E.log(i,"Already detecable, adding listener."),l(d,e,n),u++}),u===t.length&&f()}function n(e){if(!e)return E.error("At least one element is required.");if(r(e))e=[e];else{if(!i(e))return E.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");e=o(e)}c(e,function(e){A.removeAllListeners(e),H.uninstall(e),p.cleanState(e)})}e=e||{};var b;if(e.idHandler)b={get:function(t){return e.idHandler.get(t,!0)},set:e.idHandler.set};else{var y=u(),w=d({idGenerator:y,stateHandler:p});b=w}var E=e.reporter;E||(E=f(!1===E));var x=a(e,"batchProcessor",v({reporter:E})),S={};S.callOnAdd=!!a(e,"callOnAdd",!0),S.debug=!!a(e,"debug",!1);var H,A=l(b),C=s({stateHandler:p}),T=a(e,"strategy","object"),k={reporter:E,batchProcessor:x,stateHandler:p,idHandler:b};if("scroll"===T&&(h.isLegacyOpera()?(E.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy."),T="object"):h.isIE(9)&&(E.warn("Scroll strategy is not supported on IE9. Changing to object strategy."),T="object")),"scroll"===T)H=m(k);else{if("object"!==T)throw new Error("Invalid strategy name: "+T);H=g(k)}var L={};return{listenTo:t,removeListener:A.removeListener,removeAllListeners:A.removeAllListeners,uninstall:n}}},422:function(e,t,n){"use strict";e.exports=function(e){function t(e){var t=r(e);return t&&!!t.isDetectable}function n(e){r(e).isDetectable=!0}function i(e){return!!r(e).busy}function o(e,t){r(e).busy=!!t}var r=e.stateHandler.getState;return{isDetectable:t,markAsDetectable:n,isBusy:i,markBusy:o}}},423:function(e,t,n){"use strict";e.exports=function(){function e(){return t++}var t=1;return{generate:e}}},424:function(e,t,n){"use strict";e.exports=function(e){function t(e){var t=o(e);return t&&void 0!==t.id?t.id:null}function n(e){var t=o(e);if(!t)throw new Error("setId required the element to have a resize detection state.");var n=i.generate();return t.id=n,n}var i=e.idGenerator,o=e.stateHandler.getState;return{get:t,set:n}}},425:function(e,t,n){"use strict";e.exports=function(e){function t(t){var n=e.get(t);return void 0===n?[]:r[n]||[]}function n(t,n){var i=e.get(t);r[i]||(r[i]=[]),r[i].push(n)}function i(e,n){for(var i=t(e),o=0,r=i.length;o<r;++o)if(i[o]===n){i.splice(o,1);break}}function o(e){var n=t(e);n&&(n.length=0)}var r={};return{get:t,add:n,removeListener:i,removeAllListeners:o}}},426:function(e,t,n){"use strict";e.exports=function(e){function t(){}var n={log:t,warn:t,error:t};if(!e&&window.console){var i=function(e,t){e[t]=function(){var e=console[t];if(e.apply)e.apply(console,arguments);else for(var n=0;n<arguments.length;n++)e(arguments[n])}};i(n,"log"),i(n,"warn"),i(n,"error")}return n}},427:function(e,t,n){"use strict";function i(e){return e[a]={},o(e)}function o(e){return e[a]}function r(e){delete e[a]}var a="_erd";e.exports={initState:i,getState:o,cleanState:r}},472:function(e,t){function n(e,t,n){var i;return function(){if(!t)return e.apply(this,arguments);var o=this,r=arguments,a=n&&!i;return clearTimeout(i),i=setTimeout(function(){if(i=null,!a)return e.apply(o,r)},t),a?e.apply(this,arguments):void 0}}e.exports=n},53:function(e,t,n){e.exports=n(2)(243)},547:function(e,t,n){"use strict";var i=n(19),o=(n.n(i),n(83)),r=(n.n(o),n(27)),a=(n.n(r),n(53)),c=n.n(a),s=n(37),l=(n.n(s),n(472)),u=n.n(l),d=n(421),f=n.n(d),h=n(36),v=f()(),p=c.a.module("Ring.place-under",[]);p.directive("rgPlaceUnder",["$window","getClosestElementWithCommonParent","rgPlaceUnderHelper",function(e,t,n){return{restrict:"A",link:function(e,i,o){function r(n){n&&e.$evalAsync(function(){var e=t(a,n);if(!e)throw new Error("rgPlaceUnder cannot find element to sync with.");c.syncPositionWith(e)})}var a=i[0],c=n.createPositionSynchronizer(a,o,e);o.$observe("rgPlaceUnder",r)}}}]),p.factory("getClosestElementWithCommonParent",function(){return function e(t,n){var i=t.parentNode;return i?i.query(n)||e(i,n):null}}),p.factory("rgPlaceUnderHelper",["$window",function(e){var t=10,i=50,o=50;return{DEBOUNCE_INTERVAL:t,AFTER_SCROLL_RECHECK_INTERVAL:i,HEIGHT_CHECK_INTERVAL:o,createPositionSynchronizer:function(r,a,c){function s(t){return new Promise(function(n){function i(){0===t.offsetHeight?e.setTimeout(i,o):n()}i()})}function l(t){var i=n.i(h.e)(),o=e.document.documentElement&&e.document.documentElement.offsetHeight||e.document.body.offsetHeight,a=t.offsetHeight,c=t.getBoundingClientRect().top+i,s=c+a,l=Math.max(s-i,a);if(r.style.marginTop="".concat(l+p,"px"),g){var u=0;if(m.length)for(var d=0;d<m.length;d++){var f=m[d].split(";"),v=e.document.querySelector(f[0]),b=f[1]?parseInt(f[1],10):0;if(v){var y=v.getBoundingClientRect();if(0===y.top)continue;var w=parseInt(e.getComputedStyle(v).getPropertyValue("margin-top"),10);(u=o-y.top+w+b)<0&&(u=0);break}}r.style.height="calc(100% - ".concat(parseInt(r.style.marginTop,10)+u,"px)")}}function d(){b.map(function(e){return e()}),b=[]}function f(n){var o=this;d();var r=u()(function(){return o.onScroll(n)},i),s=u()(function(){o.onScroll(n),r()},t);this.waitForNonZeroHeight(n).then(s),e.addEventListener("scroll",s),b.push(function(){e.removeEventListener("scroll",s)}),b.push(c.$watch("show",s)),b.push(c.$on("rgPlaceUnder:sync",s));var l=a.listenToHeightChange?e.document.querySelector(a.listenToHeightChange):e.document.body;v.listenTo(l,s),b.push(function(){return v.removeAllListeners(l)})}var p=parseInt(a.placeTopOffset,10)||0,g=a.syncHeight,m=[],b=[];return a.syncBottom&&(m=a.syncBottom.split(",")),c.$on("$destroy",d),{waitForNonZeroHeight:s,onScroll:l,syncPositionWith:f}}}}]),t.a=p.name},6:function(e,t,n){e.exports=n(2)(443)},81:function(e,t,n){e.exports=n(2)(398)},83:function(e,t,n){e.exports=n(2)(115)},9:function(e,t,n){e.exports=n(2)(83)}});