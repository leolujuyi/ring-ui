!function(e){function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var t={};n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="/",n(n.s=1101)}({10:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}n.__esModule=!0;var r=t(67),i=o(r),s=t(64),a=o(s),l=t(62),u=o(l),c=t(21),f=o(c);n.default=function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+(void 0===n?"undefined":(0,f.default)(n)));e.prototype=(0,u.default)(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(a.default?(0,a.default)(e,n):(0,i.default)(e,n))}},104:function(e,n,t){e.exports={default:t(199),__esModule:!0}},11:function(e,n,t){"use strict";n.__esModule=!0;var o=t(21),r=function(e){return e&&e.__esModule?e:{default:e}}(o);n.default=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==(void 0===n?"undefined":(0,r.default)(n))&&"function"!=typeof n?e:n}},1101:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(54),r=t.n(o),i=t(926);r.a.module("TestApp",[i.a]).controller("TestCtrl",[function(){this.message="Loading..."}])},12:function(e,n){function t(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var i=o(r);return[t].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([i]).join("\n")}return[t].join("\n")}function o(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var o=t(n,e);return n[2]?"@media "+n[2]+"{"+o+"}":o}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<e.length;r++){var s=e[r];"number"==typeof s[0]&&o[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="("+s[2]+") and ("+t+")"),n.push(s))}},n}},15:function(e,n,t){n=e.exports=t(12)(!1),n.push([e.i,'/* stylelint-disable color-no-hex */\n\n:root {\n  /* Element */\n  --ring-line-color: #dfe5eb;\n  --ring-dark-line-color: #263b4c;\n  --ring-borders-color: #b8d1e5;\n  --ring-icon-color: #b8d1e5;\n  --ring-icon-disabled-color: #dbdbdb;\n  --ring-border-hover-color: #80c6ff;\n  --ring-icon-hover-color: #80c6ff;\n  --ring-icon-hover-color: var(--ring-border-hover-color);\n  --ring-main-color: #008eff;\n  --ring-main-hover-color: #007ee5;\n  --ring-icon-error-color: #db5860;\n  --ring-icon-warning-color: #eda200;\n  --ring-icon-success-color: #59a869;\n  --ring-pale-control-color: #cfdbe5;\n  --ring-popup-border-components: 0, 42, 76;\n  --ring-popup-border-color: rgba(0, 42, 76, .1);\n  --ring-popup-border-color: rgba(var(--ring-popup-border-components), 0.1);\n  --ring-popup-shadow-color: rgba(0, 42, 76, .15);\n  --ring-popup-shadow-color: rgba(var(--ring-popup-border-components), 0.15);\n  --ring-message-shadow-color: rgba(0, 42, 76, .3);\n  --ring-message-shadow-color: rgba(var(--ring-popup-border-components), 0.3);\n\n  /* Text */\n  --ring-search-color: #669ecc;\n  --ring-hint-color: #406380;\n  --ring-link-color: #0f5b99;\n  --ring-link-hover-color: #ff008c;\n  --ring-error-color: #c22731;\n  --ring-warning-color: #cc8b00;\n  --ring-success-color: #1c8c32;\n  --ring-text-color: #444;\n  --ring-dark-text-color: #fff;\n  --ring-heading-color: #222;\n  --ring-secondary-color: #999;\n  --ring-dark-secondary-color: #888;\n  --ring-disabled-color: #bbb;\n  --ring-dark-active-color: #ccc;\n\n  /* Background */\n  --ring-content-background-color: #fff;\n  --ring-sidebar-background-color: #f7f9fa;\n  --ring-selected-background-color: #d4edff;\n  --ring-hover-background-color: #f2f9ff;\n  --ring-dark-selected-background-color: #002a4d;\n  --ring-message-background-color: rgba(0, 21, 38, .9);\n  --ring-navigation-background-color: #000;\n\n  /* Metrics */\n  --ring-border-radius: 3px;\n  --ring-border-radius-small: 2px;\n  --ring-font-size-larger: 14px;\n  --ring-font-size: 13px;\n  --ring-font-size-smaller: 12px;\n  --ring-line-height-taller: 21px;\n  --ring-line-height: 20px;\n  --ring-line-height-lower: 18px;\n  --ring-line-height-lowest: 16px;\n  --ring-ease: 0.3s ease-out;\n  --ring-fast-ease: 0.15s ease-out;\n\n  /* TODO: return raw value back if this issue fixed https://github.com/JLHwung/postcss-font-family-system-ui/issues/65 */\n  --ring-font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Arial, sans-serif;\n  --ring-font-family-monospace: Menlo, "Bitstream Vera Sans Mono", "Ubuntu Mono", Consolas, "Courier New", Courier, monospace;\n\n  /* Common z-index-values */\n\n  /* Invisible element is an absolutely positioned element which should be below */\n  /* all other elements on the page */\n  --ring-invisible-element-z-index: -1;\n\n  /* z-index for position: fixed elements */\n  --ring-fixed-z-index: 1;\n\n  /* Elements that should overlay all other elements on the page */\n  --ring-overlay-z-index: 5;\n\n  /* Alerts should de displayed above overlays */\n  --ring-alert-z-index: 6;\n}\n',""])},17:function(e,n,t){function o(e,n){for(var t=0;t<e.length;t++){var o=e[t],r=g[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(f(o.parts[i],n))}else{for(var s=[],i=0;i<o.parts.length;i++)s.push(f(o.parts[i],n));g[o.id]={id:o.id,refs:1,parts:s}}}}function r(e,n){for(var t=[],o={},r=0;r<e.length;r++){var i=e[r],s=n.base?i[0]+n.base:i[0],a=i[1],l=i[2],u=i[3],c={css:a,media:l,sourceMap:u};o[s]?o[s].parts.push(c):t.push(o[s]={id:s,parts:[c]})}return t}function i(e,n){var t=b(e.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=w[w.length-1];if("top"===e.insertAt)o?o.nextSibling?t.insertBefore(n,o.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),w.push(n);else if("bottom"===e.insertAt)t.appendChild(n);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=b(e.insertAt.before,t);t.insertBefore(n,r)}}function s(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var n=w.indexOf(e);n>=0&&w.splice(n,1)}function a(e){var n=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var t=c();t&&(e.attrs.nonce=t)}return u(n,e.attrs),i(e,n),n}function l(e){var n=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",u(n,e.attrs),i(e,n),n}function u(e,n){Object.keys(n).forEach(function(t){e.setAttribute(t,n[t])})}function c(){return t.nc}function f(e,n){var t,o,r,i;if(n.transform&&e.css){if(!(i=n.transform(e.css)))return function(){};e.css=i}if(n.singleton){var u=y++;t=x||(x=a(n)),o=d.bind(null,t,u,!1),r=d.bind(null,t,u,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=l(n),o=p.bind(null,t,n),r=function(){s(t),t.href&&URL.revokeObjectURL(t.href)}):(t=a(n),o=h.bind(null,t),r=function(){s(t)});return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else r()}}function d(e,n,t,o){var r=t?"":o.css;if(e.styleSheet)e.styleSheet.cssText=k(n,r);else{var i=document.createTextNode(r),s=e.childNodes;s[n]&&e.removeChild(s[n]),s.length?e.insertBefore(i,s[n]):e.appendChild(i)}}function h(e,n){var t=n.css,o=n.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}function p(e,n,t){var o=t.css,r=t.sourceMap,i=void 0===n.convertToAbsoluteUrls&&r;(n.convertToAbsoluteUrls||i)&&(o=_(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var s=new Blob([o],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}var g={},v=function(e){var n;return function(){return void 0===n&&(n=e.apply(this,arguments)),n}}(function(){return window&&document&&document.all&&!window.atob}),m=function(e,n){return n?n.querySelector(e):document.querySelector(e)},b=function(e){var n={};return function(e,t){if("function"==typeof e)return e();if(void 0===n[e]){var o=m.call(this,e,t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}n[e]=o}return n[e]}}(),x=null,y=0,w=[],_=t(59);e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");n=n||{},n.attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=v()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var t=r(e,n);return o(t,n),function(e){for(var i=[],s=0;s<t.length;s++){var a=t[s],l=g[a.id];l.refs--,i.push(l)}e&&o(r(e,n),n);for(var s=0;s<i.length;s++){var l=i[s];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete g[l.id]}}}};var k=function(){var e=[];return function(n,t){return e[n]=t,e.filter(Boolean).join("\n")}}()},19:function(e,n,t){e.exports=t(2)(566)},199:function(e,n,t){t(24),t(19),t(20),t(200),t(203),t(202),t(201),e.exports=t(9).Set},2:function(e,n){e.exports=vendor_lib},20:function(e,n,t){e.exports=t(2)(645)},200:function(e,n,t){e.exports=t(2)(225)},201:function(e,n,t){e.exports=t(2)(629)},202:function(e,n,t){e.exports=t(2)(630)},203:function(e,n,t){e.exports=t(2)(631)},204:function(e,n,t){e.exports=t(2)(818)},21:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}n.__esModule=!0;var r=t(66),i=o(r),s=t(65),a=o(s),l="function"==typeof a.default&&"symbol"==typeof i.default?function(e){return typeof e}:function(e){return e&&"function"==typeof a.default&&e.constructor===a.default&&e!==a.default.prototype?"symbol":typeof e};n.default="function"==typeof a.default&&"symbol"===l(i.default)?function(e){return void 0===e?"undefined":l(e)}:function(e){return e&&"function"==typeof a.default&&e.constructor===a.default&&e!==a.default.prototype?"symbol":void 0===e?"undefined":l(e)}},23:function(e,n,t){e.exports={default:t(53),__esModule:!0}},24:function(e,n,t){e.exports=t(2)(529)},26:function(e,n,t){e.exports={default:t(43),__esModule:!0}},312:function(e,n,t){"use strict";var o=t(4),r=t.n(o),i=t(5),s=t.n(i),a=function(){function e(){for(var n=this,t=arguments.length,o=Array(t),i=0;i<t;i++)o[i]=arguments[i];r()(this,e),this.$inject={},this.constructor.$inject.forEach(function(e,t){n.$inject[e]=o[t]})}return s()(e,null,[{key:"controller",get:function(){return this}}]),e}();a.$inject=[],n.a=a},33:function(e,n,t){e.exports=t(2)(400)},34:function(e,n,t){e.exports={default:t(98),__esModule:!0}},37:function(e,n,t){"use strict";function o(e){return e===document||e instanceof Node&&document.documentElement.contains(e.parentNode)}function r(e){if(e instanceof Range||o(e)){var n=e.getBoundingClientRect();return{top:n.top,right:n.right,bottom:n.bottom,left:n.left,width:n.width,height:n.height}}return b()({},w)}function i(){return"devicePixelRatio"in window?window.devicePixelRatio:1}function s(){return window.innerHeight}function a(){return document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop}function l(){return document.documentElement&&document.documentElement.scrollLeft||document.body.scrollLeft}function u(e){e.preventDefault&&e.preventDefault()}t.d(n,"d",function(){return y}),n.h=o,n.a=r,n.b=i,n.g=s,n.e=a,n.f=l,t.d(n,"c",function(){return _}),n.i=u;var c=t(104),f=t.n(c),d=t(4),h=t.n(d),p=t(5),g=t.n(p),v=t(34),m=(t.n(v),t(23)),b=t.n(m),x=t(204),y=(t.n(x),window.getComputedStyle.bind(window)),w={top:0,right:0,bottom:0,left:0,width:0,height:0},_=function(){function e(){h()(this,e),this._all=new f.a}return g()(e,[{key:"add",value:function(e,n,t,o){e.addEventListener(n,t,o);var r=function(){return e.removeEventListener(n,t,o)};return this._all.add(r),r}},{key:"remove",value:function(e){e(),this._all.delete(e)}},{key:"removeAll",value:function(){var e=this;this._all.forEach(function(n){return e.remove(n)})}}]),e}()},4:function(e,n,t){"use strict";n.__esModule=!0,n.default=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}},43:function(e,n,t){t(60);var o=t(9).Object;e.exports=function(e,n,t){return o.defineProperty(e,n,t)}},434:function(e,n,t){"use strict";var o=t(23),r=t.n(o),i=t(4),s=t.n(i),a=t(5),l=t.n(a),u=t(33),c=(t.n(u),t(37)),f=t(439),d=t.n(f),h=function(){function e(n){var t=n.x,o=n.y,r=n.radius,i=n.color;s()(this,e),this.radius=r,this.x=t,this.y=o,this.color=i,this.decay=.01,this.life=1}return l()(e,[{key:"step",value:function(){this.life-=this.decay}},{key:"isAlive",value:function(){return this.life>=0}},{key:"draw",value:function(e){var n=this.life>=0?this.life:0;e.fillStyle="rgba("+this.color.r+", "+this.color.g+", "+this.color.b+", "+n+")",e.beginPath(),e.arc(this.x+this.radius,this.y+this.radius,this.radius,0,2*Math.PI),e.fill()}}]),e}(),p=function(){function e(n,t){s()(this,e),this.isRunning=!1,this.props=r()({},e.defaultProps,t),this.renderInNodeAndStart(n)}return l()(e,null,[{key:"calculateGradient",value:function(e,n,t){var o=function(e,n){return e+Math.round((n-e)*t)};return{r:o(e.r,n.r),g:o(e.g,n.g),b:o(e.b,n.b)}}}]),l()(e,[{key:"setCanvasSize",value:function(){var n=e.getPixelRatio(),t=this.props.size*n;this.canvas.width=t,this.canvas.height=t,this.canvas.style.width=this.props.size+"px",this.canvas.style.height=this.props.size+"px",this.ctx=this.canvas.getContext("2d"),this.ctx.scale(n,n)}},{key:"initializeLoader",value:function(){this.setCanvasSize(),this.height=this.props.size,this.width=this.props.size,this.particles=[],this.baseSpeed=1,this.colorIndex=0,this.maxRadius=10,this.minRadius=6,this.colorChangeTick=40,this.x=0,this.y=0,this.radius=8,this.hSpeed=1.5,this.vSpeed=.5,this.radiusSpeed=.05,this.tick=0,this.prepareInitialState(100),this.isRunning=!0,this.loop()}},{key:"prepareInitialState",value:function(e){for(var n=0;n<e;n++)this.step()}},{key:"handleLimits",value:function(e,n,t,o){var r=Math.random(this.baseSpeed)-this.baseSpeed/2;return e+2*n+this.baseSpeed>=o?-(this.baseSpeed+r):e<=this.baseSpeed?this.baseSpeed+r:t}},{key:"calculateNextCoordinates",value:function(){this.x+=this.hSpeed,this.y+=this.vSpeed,this.hSpeed=this.handleLimits(this.x,this.radius,this.hSpeed,this.width),this.vSpeed=this.handleLimits(this.y,this.radius,this.vSpeed,this.height)}},{key:"calculateNextRadius",value:function(){this.radius+=this.radiusSpeed,(this.radius>this.maxRadius||this.radius<this.minRadius)&&(this.radiusSpeed=-this.radiusSpeed)}},{key:"getNextColor",value:function(){var n=this.props.colors,t=n[this.colorIndex],o=n[this.colorIndex+1]||n[0];return e.calculateGradient(t,o,this.tick/this.colorChangeTick)}},{key:"nextTick",value:function(){++this.tick>this.colorChangeTick&&(this.tick=0,++this.colorIndex>this.props.colors.length-1&&(this.colorIndex=0))}},{key:"step",value:function(){this.nextTick(),this.calculateNextCoordinates(),this.calculateNextRadius(),this.particles.forEach(function(e){return e.step()}),this.particles.push(new h({x:this.x,y:this.y,radius:this.radius,color:this.getNextColor()}))}},{key:"removeDeadParticles",value:function(){this.particles=this.particles.filter(function(e){return e.isAlive()})}},{key:"draw",value:function(){var e=this;this.ctx.clearRect(0,0,this.width,this.height),this.removeDeadParticles(),this.particles.forEach(function(n){return n.draw(e.ctx)})}},{key:"loop",value:function(){var e=this;this.step(),this.draw(),this.isRunning&&window.requestAnimationFrame(function(){return e.loop()})}},{key:"updateMessage",value:function(e){this.textNode.textContent=e||""}},{key:"destroy",value:function(){this.isRunning=!1}},{key:"renderInNodeAndStart",value:function(e){return this.canvas=document.createElement("canvas"),this.canvas.dataset.test="ring-loader",this.canvas.classList.add(d.a.canvas),this.textNode=document.createElement("div"),this.textNode.dataset.test="ring-loader-text",this.textNode.classList.add(d.a.text),this.textNode.textContent=this.props.message?this.props.message:"",e.appendChild(this.canvas),e.appendChild(this.textNode),this.initializeLoader(),e}}],[{key:"getPixelRatio",value:function(){return t.i(c.b)()}}]),e}();p.defaultProps={size:64,colors:[{r:215,g:60,b:234},{r:145,g:53,b:224},{r:88,g:72,b:224},{r:37,g:183,b:255},{r:89,g:189,b:0},{r:251,g:172,b:2},{r:227,g:37,b:129}]},n.a=p},436:function(e,n,t){n=e.exports=t(12)(!1),n.i(t(15),""),n.i(t(7),void 0),n.push([e.i,"@-webkit-keyframes rotation-keyframes_556 {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes rotation-keyframes_556 {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n.canvas_f75 {\n  display: block;\n\n  margin: 16px auto;\n\n  -webkit-animation: rotation-keyframes_556 36s linear infinite;\n\n          animation: rotation-keyframes_556 36s linear infinite;\n  pointer-events: none;\n}\n\n.text_e8e {\n  text-align: center;\n\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Arial, sans-serif;\n\n  font-family: var(--ring-font-family);\n  font-size: 13px;\n  font-size: var(--ring-font-size);\n  line-height: 20px;\n  line-height: var(--ring-line-height);\n}\n",""]),n.locals={unit:""+t(7).locals.unit,canvas:"canvas_f75","rotation-keyframes":"rotation-keyframes_556",text:"text_e8e"}},439:function(e,n,t){var o=t(436);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0};r.transform=void 0,r.insertInto=void 0,t(17)(o,r),o.locals&&(e.exports=o.locals)},44:function(e,n,t){t(70);var o=t(9).Object;e.exports=function(e,n){return o.create(e,n)}},45:function(e,n,t){t(71);var o=t(9).Object;e.exports=function(e,n){return o.getOwnPropertyDescriptor(e,n)}},46:function(e,n,t){t(73),e.exports=t(9).Object.getPrototypeOf},47:function(e,n,t){t(74),e.exports=t(9).Object.setPrototypeOf},48:function(e,n,t){t(75),t(24),t(76),t(77),e.exports=t(9).Symbol},49:function(e,n,t){t(19),t(20),e.exports=t(69).f("iterator")},5:function(e,n,t){"use strict";n.__esModule=!0;var o=t(26),r=function(e){return e&&e.__esModule?e:{default:e}}(o);n.default=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,r.default)(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}()},50:function(e,n,t){e.exports={default:t(45),__esModule:!0}},53:function(e,n,t){t(78),e.exports=t(9).Object.assign},54:function(e,n,t){e.exports=t(2)(394)},59:function(e,n){e.exports=function(e){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var t=n.protocol+"//"+n.host,o=t+n.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,n){var r=n.trim().replace(/^"(.*)"$/,function(e,n){return n}).replace(/^'(.*)'$/,function(e,n){return n});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r))return e;var i;return i=0===r.indexOf("//")?r:0===r.indexOf("/")?t+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},60:function(e,n,t){e.exports=t(2)(516)},62:function(e,n,t){e.exports={default:t(44),__esModule:!0}},63:function(e,n,t){e.exports={default:t(68),__esModule:!0}},64:function(e,n,t){e.exports={default:t(47),__esModule:!0}},65:function(e,n,t){e.exports={default:t(48),__esModule:!0}},66:function(e,n,t){e.exports={default:t(49),__esModule:!0}},67:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}n.__esModule=!0;var r=t(26),i=o(r),s=t(50),a=o(s),l=t(63),u=o(l);n.default=function(e,n){for(var t=(0,u.default)(n),o=0;o<t.length;o++){var r=t[o],s=(0,a.default)(n,r);s&&s.configurable&&void 0===e[r]&&(0,i.default)(e,r,s)}return e}},68:function(e,n,t){t(72);var o=t(9).Object;e.exports=function(e){return o.getOwnPropertyNames(e)}},69:function(e,n,t){e.exports=t(2)(222)},7:function(e,n,t){n=e.exports=t(12)(!1),n.push([e.i,'/* https://readymag.com/artemtiunov/RingUILanguage/colours/ */\n\n/*\nUnit shouldn\'t be CSS custom property because it is not intended to change\nAlso it won\'t form in FF47 https://bugzilla.mozilla.org/show_bug.cgi?id=594933\n*/\n\n.clearfix_1e8::after {\n  display: block;\n  clear: both;\n  content: \'\';\n}\n\n.font_3f3 {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Arial, sans-serif;\n  font-family: var(--ring-font-family);\n  font-size: 13px;\n  font-size: var(--ring-font-size);\n  line-height: 20px;\n  line-height: var(--ring-line-height);\n}\n\n.font-lower_cf2 {\n\n  line-height: 18px;\n\n  line-height: var(--ring-line-height-lower);\n}\n\n.font-smaller_1da {\n\n  font-size: 12px;\n\n  font-size: var(--ring-font-size-smaller);\n}\n\n.font-smaller-lower_c69 {\n\n  line-height: 16px;\n\n  line-height: var(--ring-line-height-lowest);\n}\n\n.font-larger-lower_fa1 {\n\n  font-size: 14px;\n\n  font-size: var(--ring-font-size-larger);\n}\n\n.font-larger_938 {\n\n  line-height: 21px;\n\n  line-height: var(--ring-line-height-taller);\n}\n\n/* To be used at large sizes */\n/* As close as possible to Helvetica Neue Thin (to replace Gotham) */\n.thin-font_52b {\n  font-family: "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  font-size: var(--ring-font-size);\n  font-weight: 100; /* Renders Helvetica Neue UltraLight on OS X  */\n}\n\n.monospace-font_b2e {\n  font-family: Menlo, "Bitstream Vera Sans Mono", "Ubuntu Mono", Consolas, "Courier New", Courier, monospace;\n  font-family: var(--ring-font-family-monospace);\n  font-size: 12px;\n  font-size: var(--ring-font-size-smaller);\n}\n\n.ellipsis_894 {\n  overflow: hidden;\n\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n/* Note: footer also has top margin which isn\'t taken into account here */\n\n/* Media breakpoints (minimal values) */\n\n/* Media queries */\n',""]),n.locals={unit:"8px","footer-height":"64px","breakpoint-small":"640px","breakpoint-middle":"960px","breakpoint-large":"1200px","extra-small-screen-media":"(max-width: 639px)","small-screen-media":"(min-width: 640px) and (max-width: 959px)","middle-screen-media":"(min-width: 960px) and (max-width: 1199px)","large-screen-media":"(min-width: 1200px)",clearfix:"clearfix_1e8",font:"font_3f3","font-lower":"font-lower_cf2 font_3f3","font-smaller":"font-smaller_1da font-lower_cf2 font_3f3","font-smaller-lower":"font-smaller-lower_c69 font-smaller_1da font-lower_cf2 font_3f3","font-larger-lower":"font-larger-lower_fa1 font-lower_cf2 font_3f3","font-larger":"font-larger_938 font-larger-lower_fa1 font-lower_cf2 font_3f3","thin-font":"thin-font_52b","monospace-font":"monospace-font_b2e",ellipsis:"ellipsis_894"}},70:function(e,n,t){e.exports=t(2)(514)},71:function(e,n,t){e.exports=t(2)(518)},72:function(e,n,t){e.exports=t(2)(519)},73:function(e,n,t){e.exports=t(2)(520)},74:function(e,n,t){e.exports=t(2)(528)},75:function(e,n,t){e.exports=t(2)(576)},76:function(e,n,t){e.exports=t(2)(638)},77:function(e,n,t){e.exports=t(2)(639)},78:function(e,n,t){e.exports=t(2)(513)},8:function(e,n,t){e.exports={default:t(46),__esModule:!0}},9:function(e,n,t){e.exports=t(2)(24)},926:function(e,n,t){"use strict";var o=t(8),r=t.n(o),i=t(4),s=t.n(i),a=t(5),l=t.n(a),u=t(11),c=t.n(u),f=t(10),d=t.n(f),h=t(54),p=t.n(h),g=t(312),v=t(434),m=p.a.module("Ring.loader",[]),b=function(e){function n(){var e;s()(this,n);for(var t=arguments.length,o=Array(t),i=0;i<t;i++)o[i]=arguments[i];var a=c()(this,(e=n.__proto__||r()(n)).call.apply(e,[this].concat(o))),l=a.$inject.$element;return a.loader=new v.a(l[0],{message:a.message}),a}return d()(n,e),l()(n,[{key:"$onDestroy",value:function(){this.loader.destroy()}},{key:"$onChanges",value:function(e){this.loader.updateMessage(e.message.currentValue)}}]),n}(g.a);b.$inject=["$element"],b.bindings={message:"@"},m.component("rgLoader",b),n.a=m.name},98:function(e,n,t){t(99),e.exports=t(9).Object.entries},99:function(e,n,t){e.exports=t(2)(612)}});