!function(n){function e(o){if(r[o])return r[o].exports;var t=r[o]={i:o,l:!1,exports:{}};return n[o].call(t.exports,t,t.exports,e),t.l=!0,t.exports}var r={};e.m=n,e.c=r,e.i=function(n){return n},e.d=function(n,r,o){e.o(n,r)||Object.defineProperty(n,r,{configurable:!1,enumerable:!0,get:o})},e.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(r,"a",r),r},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="/",e(e.s=1097)}({100:function(n,e,r){"use strict";function o(){var n=void 0,e=void 0;return function(r){n=r,e||(e=window.requestAnimationFrame(function(){n(),e=null,n=null}))}}e.a=o},1005:function(n,e,r){"use strict";var o=r(54),t=r.n(o),i=r(321),a=r.n(i),l=r(100),s=r(938),c=r.i(l.a)(),d=t.a.module("Ring.island-ng.header",[]);d.directive("rgIslandContent",[function(){return{transclude:!0,replace:!0,bindToController:{fade:"=?",onScroll:"&?"},compile:s.a,template:'\n<div\n  data-test="ring-island-content"\n  class='+a.a.content+"\n  ng-class=\"{\n    '"+a.a.contentWithTopFade+"': contentCtrl.fade,\n    '"+a.a.contentWithBottomFade+'\': contentCtrl.fade\n  }"\n>\n  <div\n    class="'+a.a.scrollableWrapper+' js-scrollable-wrapper"\n    ng-transclude\n  ></div>\n</div>\n',controllerAs:"contentCtrl",controller:["$scope","$element",function(n,e){var r=this,o=e[0];if(this.onScroll){var t=o.querySelector(".js-scrollable-wrapper"),i=function(e){var o=t.scrollTop;r.onScroll({$event:e,$scrollTop:o}),n.$apply()};t.addEventListener("scroll",function(){return c(i)})}}]}}]),e.a=d.name},1006:function(n,e,r){"use strict";var o=r(54),t=r.n(o),i=r(321),a=r.n(i),l=r(938),s=t.a.module("Ring.island-ng.content",[]);s.directive("rgIslandHeader",[function(){return{transclude:!0,replace:!0,bindToController:{border:"=?"},compile:l.a,template:'\n<div\n  data-test="ring-island-header"\n  class="'+a.a.header+'"\n  ng-class="{\''+a.a.withBottomBorder+"': headerCtrl.border}\" \n  ng-transclude\n></div>\n",controllerAs:"headerCtrl",controller:[function(){var n=this;this.$onInit=function(){n.wrapWithTitle=void 0===n.wrapWithTitle||n.wrapWithTitle}}]}}]),e.a=s.name},1097:function(n,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(54),t=r.n(o),i=r(958);t.a.module("Example.island",[i.a])},12:function(n,e){function r(n,e){var r=n[1]||"",t=n[3];if(!t)return r;if(e&&"function"==typeof btoa){var i=o(t);return[r].concat(t.sources.map(function(n){return"/*# sourceURL="+t.sourceRoot+n+" */"})).concat([i]).join("\n")}return[r].join("\n")}function o(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var o=r(e,n);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(n,r){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},t=0;t<this.length;t++){var i=this[t][0];"number"==typeof i&&(o[i]=!0)}for(t=0;t<n.length;t++){var a=n[t];"number"==typeof a[0]&&o[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),e.push(a))}},e}},15:function(n,e,r){e=n.exports=r(12)(!1),e.push([n.i,'/* stylelint-disable color-no-hex */\n\n:root {\n  /* Element */\n  --ring-line-color: #dfe5eb;\n  --ring-dark-line-color: #263b4c;\n  --ring-borders-color: #b8d1e5;\n  --ring-icon-color: #b8d1e5;\n  --ring-icon-disabled-color: #dbdbdb;\n  --ring-border-hover-color: #80c6ff;\n  --ring-icon-hover-color: #80c6ff;\n  --ring-icon-hover-color: var(--ring-border-hover-color);\n  --ring-main-color: #008eff;\n  --ring-main-hover-color: #007ee5;\n  --ring-icon-error-color: #db5860;\n  --ring-icon-warning-color: #eda200;\n  --ring-icon-success-color: #59a869;\n  --ring-pale-control-color: #cfdbe5;\n  --ring-popup-border-components: 0, 42, 76;\n  --ring-popup-border-color: rgba(0, 42, 76, .1);\n  --ring-popup-border-color: rgba(var(--ring-popup-border-components), 0.1);\n  --ring-popup-shadow-color: rgba(0, 42, 76, .15);\n  --ring-popup-shadow-color: rgba(var(--ring-popup-border-components), 0.15);\n  --ring-message-shadow-color: rgba(0, 42, 76, .3);\n  --ring-message-shadow-color: rgba(var(--ring-popup-border-components), 0.3);\n\n  /* Text */\n  --ring-search-color: #669ecc;\n  --ring-hint-color: #406380;\n  --ring-link-color: #0f5b99;\n  --ring-link-hover-color: #ff008c;\n  --ring-error-color: #c22731;\n  --ring-warning-color: #cc8b00;\n  --ring-success-color: #1c8c32;\n  --ring-text-color: #444;\n  --ring-dark-text-color: #fff;\n  --ring-heading-color: #222;\n  --ring-secondary-color: #999;\n  --ring-dark-secondary-color: #888;\n  --ring-disabled-color: #bbb;\n  --ring-dark-active-color: #ccc;\n\n  /* Background */\n  --ring-content-background-color: #fff;\n  --ring-sidebar-background-color: #f7f9fa;\n  --ring-selected-background-color: #d4edff;\n  --ring-hover-background-color: #f2f9ff;\n  --ring-dark-selected-background-color: #002a4d;\n  --ring-message-background-color: rgba(0, 21, 38, .9);\n  --ring-navigation-background-color: #000;\n\n  /* Metrics */\n  --ring-border-radius: 3px;\n  --ring-border-radius-small: 2px;\n  --ring-font-size-larger: 14px;\n  --ring-font-size: 13px;\n  --ring-font-size-smaller: 12px;\n  --ring-line-height-taller: 21px;\n  --ring-line-height: 20px;\n  --ring-line-height-lower: 18px;\n  --ring-line-height-lowest: 16px;\n  --ring-ease: 0.3s ease-out;\n  --ring-fast-ease: 0.15s ease-out;\n\n  /* TODO: return raw value back if this issue fixed https://github.com/JLHwung/postcss-font-family-system-ui/issues/65 */\n  --ring-font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Arial, sans-serif;\n  --ring-font-family-monospace: Menlo, "Bitstream Vera Sans Mono", "Ubuntu Mono", Consolas, "Courier New", Courier, monospace;\n\n  /* Common z-index-values */\n\n  /* Invisible element is an absolutely positioned element which should be below */\n  /* all other elements on the page */\n  --ring-invisible-element-z-index: -1;\n\n  /* z-index for position: fixed elements */\n  --ring-fixed-z-index: 1;\n\n  /* Elements that should overlay all other elements on the page */\n  --ring-overlay-z-index: 5;\n\n  /* Alerts should de displayed above overlays */\n  --ring-alert-z-index: 6;\n}\n',""])},1592:function(n,e,r){"use strict";var o=r(54),t=r.n(o),i=r(958);t.a.module("Example.island",[i.a])},17:function(n,e,r){function o(n,e){for(var r=0;r<n.length;r++){var o=n[r],t=b[o.id];if(t){t.refs++;for(var i=0;i<t.parts.length;i++)t.parts[i](o.parts[i]);for(;i<o.parts.length;i++)t.parts.push(f(o.parts[i],e))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(f(o.parts[i],e));b[o.id]={id:o.id,refs:1,parts:a}}}}function t(n,e){for(var r=[],o={},t=0;t<n.length;t++){var i=n[t],a=e.base?i[0]+e.base:i[0],l=i[1],s=i[2],c=i[3],d={css:l,media:s,sourceMap:c};o[a]?o[a].parts.push(d):r.push(o[a]={id:a,parts:[d]})}return r}function i(n,e){var r=v(n.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=y[y.length-1];if("top"===n.insertAt)o?o.nextSibling?r.insertBefore(e,o.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),y.push(e);else if("bottom"===n.insertAt)r.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var t=v(n.insertAt.before,r);r.insertBefore(e,t)}}function a(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=y.indexOf(n);e>=0&&y.splice(e,1)}function l(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var r=d();r&&(n.attrs.nonce=r)}return c(e,n.attrs),i(n,e),e}function s(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",c(e,n.attrs),i(n,e),e}function c(n,e){Object.keys(e).forEach(function(r){n.setAttribute(r,e[r])})}function d(){return r.nc}function f(n,e){var r,o,t,i;if(e.transform&&n.css){if(!(i=e.transform(n.css)))return function(){};n.css=i}if(e.singleton){var c=w++;r=x||(x=l(e)),o=u.bind(null,r,c,!1),t=u.bind(null,r,c,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=s(e),o=g.bind(null,r,e),t=function(){a(r),r.href&&URL.revokeObjectURL(r.href)}):(r=l(e),o=p.bind(null,r),t=function(){a(r)});return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else t()}}function u(n,e,r,o){var t=r?"":o.css;if(n.styleSheet)n.styleSheet.cssText=_(e,t);else{var i=document.createTextNode(t),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function p(n,e){var r=e.css,o=e.media;if(o&&n.setAttribute("media",o),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}function g(n,e,r){var o=r.css,t=r.sourceMap,i=void 0===e.convertToAbsoluteUrls&&t;(e.convertToAbsoluteUrls||i)&&(o=k(o)),t&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */");var a=new Blob([o],{type:"text/css"}),l=n.href;n.href=URL.createObjectURL(a),l&&URL.revokeObjectURL(l)}var b={},h=function(n){var e;return function(){return void 0===e&&(e=n.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),m=function(n,e){return e?e.querySelector(n):document.querySelector(n)},v=function(n){var e={};return function(n,r){if("function"==typeof n)return n();if(void 0===e[n]){var o=m.call(this,n,r);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(n){o=null}e[n]=o}return e[n]}}(),x=null,w=0,y=[],k=r(59);n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=h()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var r=t(n,e);return o(r,e),function(n){for(var i=[],a=0;a<r.length;a++){var l=r[a],s=b[l.id];s.refs--,i.push(s)}n&&o(t(n,e),e);for(var a=0;a<i.length;a++){var s=i[a];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete b[s.id]}}}};var _=function(){var n=[];return function(e,r){return n[e]=r,n.filter(Boolean).join("\n")}}()},2:function(n,e){n.exports=vendor_lib},321:function(n,e,r){var o=r(362);"string"==typeof o&&(o=[[n.i,o,""]]);var t={hmr:!0};t.transform=void 0,t.insertInto=void 0,r(17)(o,t),o.locals&&(n.exports=o.locals)},362:function(n,e,r){e=n.exports=r(12)(!1),e.i(r(15),""),e.i(r(7),void 0),e.push([n.i,".island_72e {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n\n  border: 1px solid #dfe5eb;\n\n  border: 1px solid var(--ring-line-color);\n  border-radius: 3px;\n  border-radius: var(--ring-border-radius);\n\n  background-color: #fff;\n\n  background-color: var(--ring-content-background-color);\n  -webkit-box-shadow: 0 1px 4px rgba(0, 42, 76, .15);\n          box-shadow: 0 1px 4px rgba(0, 42, 76, .15);\n  -webkit-box-shadow: 0 1px 4px var(--ring-popup-shadow-color);\n          box-shadow: 0 1px 4px var(--ring-popup-shadow-color);\n}\n\n.withTransparentBottomBorder_54a {\n  -webkit-transition: border-bottom-color 0.1s;\n  transition: border-bottom-color 0.1s;\n\n  border-bottom: 1px solid transparent;\n}\n\n.header_c70 {\n\n  -webkit-box-sizing: border-box;\n\n          box-sizing: border-box;\n  width: 100%;\n  padding: 0 32px;\n\n  line-height: 28px;\n}\n\n.withBottomBorder_d57.withBottomBorder_d57 {\n  border-bottom-color: rgba(0, 42, 76, .1);\n  border-bottom-color: var(--ring-popup-border-color);\n  border-top-left-radius: 3px;\n  border-top-left-radius: var(--ring-border-radius);\n  border-top-right-radius: 3px;\n  border-top-right-radius: var(--ring-border-radius);\n}\n\n.title_a89 {\n  display: block;\n  float: left;\n\n  -webkit-transform-origin: 0 50%;\n\n          transform-origin: 0 50%;\n  word-break: break-word;\n\n  color: #222;\n\n  color: var(--ring-heading-color);\n\n  font-weight: bold;\n}\n\n.narrowIsland_6bd .header_c70 {\n  padding: 0 16px;\n}\n\n.content_3da {\n  position: relative;\n\n  display: -webkit-box;\n\n  display: -ms-flexbox;\n\n  display: flex;\n  overflow: auto;\n\n  width: 100%;\n  -webkit-overflow-scrolling: touch;\n}\n\n.scrollableWrapper_9eb {\n  overflow: auto;\n\n  width: 100%;\n  padding: 16px 32px;\n}\n\n.narrowIsland_6bd .scrollableWrapper_9eb {\n  padding: 16px 16px;\n}\n\n.withoutPaddings_d19 .scrollableWrapper_9eb {\n  padding: 0;\n}\n\n.contentWithTopFade_102::before {\n  position: absolute;\n  z-index: 1;\n  z-index: var(--ring-fixed-z-index);\n  left: 0;\n\n  display: block;\n\n  width: 100%;\n  height: 24px;\n\n  content: '';\n\n  pointer-events: none;\n\n  opacity: 0.8;\n  background: -webkit-gradient(linear, left bottom, left top, from(rgba(255, 255, 255, 0)), to(#fff));\n  background: linear-gradient(to top, rgba(255, 255, 255, 0), #fff);\n  background: -webkit-gradient(linear, left bottom, left top, from(rgba(255, 255, 255, 0)), to(var(--ring-content-background-color)));\n  background: linear-gradient(to top, rgba(255, 255, 255, 0), var(--ring-content-background-color)); /* stylelint-disable-line function-linear-gradient-no-nonstandard-direction */\n}\n\n.contentWithTopFade_102:first-child::before {\n  border-top-left-radius: 3px;\n  border-top-left-radius: var(--ring-border-radius);\n  border-top-right-radius: 3px;\n  border-top-right-radius: var(--ring-border-radius);\n}\n\n.contentWithBottomFade_7be::after {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n\n  display: block;\n\n  width: 100%;\n  height: 24px;\n\n  content: '';\n  pointer-events: none;\n\n  opacity: 0.8;\n  border-bottom-right-radius: 3px;\n  border-bottom-right-radius: var(--ring-border-radius);\n  border-bottom-left-radius: 3px;\n  border-bottom-left-radius: var(--ring-border-radius);\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0)), to(#fff));\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), #fff);\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0)), to(var(--ring-content-background-color)));\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), var(--ring-content-background-color));\n}\n",""]),e.locals={unit:""+r(7).locals.unit,gradientStart:"rgba(255, 255, 255, 0)",gradientStop:"var(--ring-content-background-color)",island:"island_72e",withTransparentBottomBorder:"withTransparentBottomBorder_54a",header:"header_c70 withTransparentBottomBorder_54a",withBottomBorder:"withBottomBorder_d57",title:"title_a89",narrowIsland:"narrowIsland_6bd",content:"content_3da",scrollableWrapper:"scrollableWrapper_9eb",withoutPaddings:"withoutPaddings_d19",contentWithTopFade:"contentWithTopFade_102",contentWithBottomFade:"contentWithBottomFade_7be"}},54:function(n,e,r){n.exports=r(2)(394)},59:function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var r=e.protocol+"//"+e.host,o=r+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var t=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(t))return n;var i;return i=0===t.indexOf("//")?t:0===t.indexOf("/")?r+t:o+t.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},7:function(n,e,r){e=n.exports=r(12)(!1),e.push([n.i,'/* https://readymag.com/artemtiunov/RingUILanguage/colours/ */\n\n/*\nUnit shouldn\'t be CSS custom property because it is not intended to change\nAlso it won\'t form in FF47 https://bugzilla.mozilla.org/show_bug.cgi?id=594933\n*/\n\n.clearfix_1e8::after {\n  display: block;\n  clear: both;\n  content: \'\';\n}\n\n.font_3f3 {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Arial, sans-serif;\n  font-family: var(--ring-font-family);\n  font-size: 13px;\n  font-size: var(--ring-font-size);\n  line-height: 20px;\n  line-height: var(--ring-line-height);\n}\n\n.font-lower_cf2 {\n\n  line-height: 18px;\n\n  line-height: var(--ring-line-height-lower);\n}\n\n.font-smaller_1da {\n\n  font-size: 12px;\n\n  font-size: var(--ring-font-size-smaller);\n}\n\n.font-smaller-lower_c69 {\n\n  line-height: 16px;\n\n  line-height: var(--ring-line-height-lowest);\n}\n\n.font-larger-lower_fa1 {\n\n  font-size: 14px;\n\n  font-size: var(--ring-font-size-larger);\n}\n\n.font-larger_938 {\n\n  line-height: 21px;\n\n  line-height: var(--ring-line-height-taller);\n}\n\n/* To be used at large sizes */\n/* As close as possible to Helvetica Neue Thin (to replace Gotham) */\n.thin-font_52b {\n  font-family: "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  font-size: var(--ring-font-size);\n  font-weight: 100; /* Renders Helvetica Neue UltraLight on OS X  */\n}\n\n.monospace-font_b2e {\n  font-family: Menlo, "Bitstream Vera Sans Mono", "Ubuntu Mono", Consolas, "Courier New", Courier, monospace;\n  font-family: var(--ring-font-family-monospace);\n  font-size: 12px;\n  font-size: var(--ring-font-size-smaller);\n}\n\n.ellipsis_894 {\n  overflow: hidden;\n\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n/* Note: footer also has top margin which isn\'t taken into account here */\n\n/* Media breakpoints (minimal values) */\n\n/* Media queries */\n',""]),e.locals={unit:"8px","footer-height":"64px","breakpoint-small":"640px","breakpoint-middle":"960px","breakpoint-large":"1200px","extra-small-screen-media":"(max-width: 639px)","small-screen-media":"(min-width: 640px) and (max-width: 959px)","middle-screen-media":"(min-width: 960px) and (max-width: 1199px)","large-screen-media":"(min-width: 1200px)",clearfix:"clearfix_1e8",font:"font_3f3","font-lower":"font-lower_cf2 font_3f3","font-smaller":"font-smaller_1da font-lower_cf2 font_3f3","font-smaller-lower":"font-smaller-lower_c69 font-smaller_1da font-lower_cf2 font_3f3","font-larger-lower":"font-larger-lower_fa1 font-lower_cf2 font_3f3","font-larger":"font-larger_938 font-larger-lower_fa1 font-lower_cf2 font_3f3","thin-font":"thin-font_52b","monospace-font":"monospace-font_b2e",ellipsis:"ellipsis_894"}},938:function(n,e,r){"use strict";function o(n,e){e.ngClass&&(e.ngClass=e.ngClass.replace(/}\s*{/g,", "))}e.a=o},958:function(n,e,r){"use strict";var o=r(54),t=r.n(o),i=r(321),a=r.n(i),l=r(1006),s=r(1005),c=r(938),d=t.a.module("Ring.island-ng",[l.a,s.a]);d.directive("rgIsland",[function(){return{transclude:!0,replace:!0,bindToController:{narrow:"="},compile:c.a,template:'\n<div \n  class="'+a.a.island+'" \n  ng-class="{\''+a.a.narrowIsland+"': islandCtrl.narrow}\" \n  ng-transclude\n></div>\n",controllerAs:"islandCtrl",controller:t.a.noop}}]),e.a=d.name}});