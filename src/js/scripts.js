/*! js-cookie v3.0.0-rc.0 | MIT */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self,function(){var r=e.Cookies,n=e.Cookies=t();n.noConflict=function(){return e.Cookies=r,n}}())}(this,function(){"use strict";function e(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)e[n]=r[n]}return e}var t={read:function(e){return e.replace(/%3B/g,";")},write:function(e){return e.replace(/;/g,"%3B")}};return function r(n,i){function o(r,o,u){if("undefined"!=typeof document){"number"==typeof(u=e({},i,u)).expires&&(u.expires=new Date(Date.now()+864e5*u.expires)),u.expires&&(u.expires=u.expires.toUTCString()),r=t.write(r).replace(/=/g,"%3D"),o=n.write(String(o),r);var c="";for(var f in u)u[f]&&(c+="; "+f,!0!==u[f]&&(c+="="+u[f].split(";")[0]));return document.cookie=r+"="+o+c}}return Object.create({set:o,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var r=document.cookie?document.cookie.split("; "):[],i={},o=0;o<r.length;o++){var u=r[o].split("="),c=u.slice(1).join("="),f=t.read(u[0]).replace(/%3D/g,"=");if(i[f]=n.read(c,f),e===f)break}return e?i[e]:i}},remove:function(t,r){o(t,"",e({},r,{expires:-1}))},withAttributes:function(t){return r(this.converter,e({},this.attributes,t))},withConverter:function(t){return r(e({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(i)},converter:{value:Object.freeze(n)}})}(t,{path:"/"})});

/*! nouislider - 14.6.2 - 9/16/2020 */
!function(t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():window.noUiSlider=t()}(function(){"use strict";var lt="14.6.2";function ut(t){t.parentElement.removeChild(t)}function a(t){return null!=t}function ct(t){t.preventDefault()}function o(t){return"number"==typeof t&&!isNaN(t)&&isFinite(t)}function pt(t,e,r){0<r&&(ht(t,e),setTimeout(function(){mt(t,e)},r))}function ft(t){return Math.max(Math.min(t,100),0)}function dt(t){return Array.isArray(t)?t:[t]}function e(t){var e=(t=String(t)).split(".");return 1<e.length?e[1].length:0}function ht(t,e){t.classList&&!/\s/.test(e)?t.classList.add(e):t.className+=" "+e}function mt(t,e){t.classList&&!/\s/.test(e)?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function gt(t){var e=void 0!==window.pageXOffset,r="CSS1Compat"===(t.compatMode||"");return{x:e?window.pageXOffset:r?t.documentElement.scrollLeft:t.body.scrollLeft,y:e?window.pageYOffset:r?t.documentElement.scrollTop:t.body.scrollTop}}function c(t,e){return 100/(e-t)}function p(t,e,r){return 100*e/(t[r+1]-t[r])}function f(t,e){for(var r=1;t>=e[r];)r+=1;return r}function r(t,e,r){if(r>=t.slice(-1)[0])return 100;var n,i,o=f(r,t),s=t[o-1],a=t[o],l=e[o-1],u=e[o];return l+(i=r,p(n=[s,a],n[0]<0?i+Math.abs(n[0]):i-n[0],0)/c(l,u))}function n(t,e,r,n){if(100===n)return n;var i,o,s=f(n,t),a=t[s-1],l=t[s];return r?(l-a)/2<n-a?l:a:e[s-1]?t[s-1]+(i=n-t[s-1],o=e[s-1],Math.round(i/o)*o):n}function s(t,e,r){var n;if("number"==typeof e&&(e=[e]),!Array.isArray(e))throw new Error("noUiSlider ("+lt+"): 'range' contains invalid value.");if(!o(n="min"===t?0:"max"===t?100:parseFloat(t))||!o(e[0]))throw new Error("noUiSlider ("+lt+"): 'range' value isn't numeric.");r.xPct.push(n),r.xVal.push(e[0]),n?r.xSteps.push(!isNaN(e[1])&&e[1]):isNaN(e[1])||(r.xSteps[0]=e[1]),r.xHighestCompleteStep.push(0)}function l(t,e,r){if(e)if(r.xVal[t]!==r.xVal[t+1]){r.xSteps[t]=p([r.xVal[t],r.xVal[t+1]],e,0)/c(r.xPct[t],r.xPct[t+1]);var n=(r.xVal[t+1]-r.xVal[t])/r.xNumSteps[t],i=Math.ceil(Number(n.toFixed(3))-1),o=r.xVal[t]+r.xNumSteps[t]*i;r.xHighestCompleteStep[t]=o}else r.xSteps[t]=r.xHighestCompleteStep[t]=r.xVal[t]}function i(t,e,r){var n;this.xPct=[],this.xVal=[],this.xSteps=[r||!1],this.xNumSteps=[!1],this.xHighestCompleteStep=[],this.snap=e;var i=[];for(n in t)t.hasOwnProperty(n)&&i.push([t[n],n]);for(i.length&&"object"==typeof i[0][0]?i.sort(function(t,e){return t[0][0]-e[0][0]}):i.sort(function(t,e){return t[0]-e[0]}),n=0;n<i.length;n++)s(i[n][1],i[n][0],this);for(this.xNumSteps=this.xSteps.slice(0),n=0;n<this.xNumSteps.length;n++)l(n,this.xNumSteps[n],this)}i.prototype.getDistance=function(t){var e,r=[];for(e=0;e<this.xNumSteps.length-1;e++){var n=this.xNumSteps[e];if(n&&t/n%1!=0)throw new Error("noUiSlider ("+lt+"): 'limit', 'margin' and 'padding' of "+this.xPct[e]+"% range must be divisible by step.");r[e]=p(this.xVal,t,e)}return r},i.prototype.getAbsoluteDistance=function(t,e,r){var n,i=0;if(t<this.xPct[this.xPct.length-1])for(;t>this.xPct[i+1];)i++;else t===this.xPct[this.xPct.length-1]&&(i=this.xPct.length-2);r||t!==this.xPct[i+1]||i++;var o=1,s=e[i],a=0,l=0,u=0,c=0;for(n=r?(t-this.xPct[i])/(this.xPct[i+1]-this.xPct[i]):(this.xPct[i+1]-t)/(this.xPct[i+1]-this.xPct[i]);0<s;)a=this.xPct[i+1+c]-this.xPct[i+c],100<e[i+c]*o+100-100*n?(l=a*n,o=(s-100*n)/e[i+c],n=1):(l=e[i+c]*a/100*o,o=0),r?(u-=l,1<=this.xPct.length+c&&c--):(u+=l,1<=this.xPct.length-c&&c++),s=e[i+c]*o;return t+u},i.prototype.toStepping=function(t){return t=r(this.xVal,this.xPct,t)},i.prototype.fromStepping=function(t){return function(t,e,r){if(100<=r)return t.slice(-1)[0];var n,i=f(r,e),o=t[i-1],s=t[i],a=e[i-1],l=e[i];return n=[o,s],(r-a)*c(a,l)*(n[1]-n[0])/100+n[0]}(this.xVal,this.xPct,t)},i.prototype.getStep=function(t){return t=n(this.xPct,this.xSteps,this.snap,t)},i.prototype.getDefaultStep=function(t,e,r){var n=f(t,this.xPct);return(100===t||e&&t===this.xPct[n-1])&&(n=Math.max(n-1,1)),(this.xVal[n]-this.xVal[n-1])/r},i.prototype.getNearbySteps=function(t){var e=f(t,this.xPct);return{stepBefore:{startValue:this.xVal[e-2],step:this.xNumSteps[e-2],highestStep:this.xHighestCompleteStep[e-2]},thisStep:{startValue:this.xVal[e-1],step:this.xNumSteps[e-1],highestStep:this.xHighestCompleteStep[e-1]},stepAfter:{startValue:this.xVal[e],step:this.xNumSteps[e],highestStep:this.xHighestCompleteStep[e]}}},i.prototype.countStepDecimals=function(){var t=this.xNumSteps.map(e);return Math.max.apply(null,t)},i.prototype.convert=function(t){return this.getStep(this.toStepping(t))};var u={to:function(t){return void 0!==t&&t.toFixed(2)},from:Number},d={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"};function h(t){if("object"==typeof(e=t)&&"function"==typeof e.to&&"function"==typeof e.from)return!0;var e;throw new Error("noUiSlider ("+lt+"): 'format' requires 'to' and 'from' methods.")}function m(t,e){if(!o(e))throw new Error("noUiSlider ("+lt+"): 'step' is not numeric.");t.singleStep=e}function g(t,e){if(!o(e))throw new Error("noUiSlider ("+lt+"): 'keyboardPageMultiplier' is not numeric.");t.keyboardPageMultiplier=e}function v(t,e){if(!o(e))throw new Error("noUiSlider ("+lt+"): 'keyboardDefaultStep' is not numeric.");t.keyboardDefaultStep=e}function b(t,e){if("object"!=typeof e||Array.isArray(e))throw new Error("noUiSlider ("+lt+"): 'range' is not an object.");if(void 0===e.min||void 0===e.max)throw new Error("noUiSlider ("+lt+"): Missing 'min' or 'max' in 'range'.");if(e.min===e.max)throw new Error("noUiSlider ("+lt+"): 'range' 'min' and 'max' cannot be equal.");t.spectrum=new i(e,t.snap,t.singleStep)}function x(t,e){if(e=dt(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider ("+lt+"): 'start' option is incorrect.");t.handles=e.length,t.start=e}function S(t,e){if("boolean"!=typeof(t.snap=e))throw new Error("noUiSlider ("+lt+"): 'snap' option must be a boolean.")}function w(t,e){if("boolean"!=typeof(t.animate=e))throw new Error("noUiSlider ("+lt+"): 'animate' option must be a boolean.")}function y(t,e){if("number"!=typeof(t.animationDuration=e))throw new Error("noUiSlider ("+lt+"): 'animationDuration' option must be a number.")}function E(t,e){var r,n=[!1];if("lower"===e?e=[!0,!1]:"upper"===e&&(e=[!1,!0]),!0===e||!1===e){for(r=1;r<t.handles;r++)n.push(e);n.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==t.handles+1)throw new Error("noUiSlider ("+lt+"): 'connect' option doesn't match handle count.");n=e}t.connect=n}function C(t,e){switch(e){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider ("+lt+"): 'orientation' option is invalid.")}}function P(t,e){if(!o(e))throw new Error("noUiSlider ("+lt+"): 'margin' option must be numeric.");0!==e&&(t.margin=t.spectrum.getDistance(e))}function N(t,e){if(!o(e))throw new Error("noUiSlider ("+lt+"): 'limit' option must be numeric.");if(t.limit=t.spectrum.getDistance(e),!t.limit||t.handles<2)throw new Error("noUiSlider ("+lt+"): 'limit' option is only supported on linear sliders with 2 or more handles.")}function k(t,e){var r;if(!o(e)&&!Array.isArray(e))throw new Error("noUiSlider ("+lt+"): 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&2!==e.length&&!o(e[0])&&!o(e[1]))throw new Error("noUiSlider ("+lt+"): 'padding' option must be numeric or array of exactly 2 numbers.");if(0!==e){for(Array.isArray(e)||(e=[e,e]),t.padding=[t.spectrum.getDistance(e[0]),t.spectrum.getDistance(e[1])],r=0;r<t.spectrum.xNumSteps.length-1;r++)if(t.padding[0][r]<0||t.padding[1][r]<0)throw new Error("noUiSlider ("+lt+"): 'padding' option must be a positive number(s).");var n=e[0]+e[1],i=t.spectrum.xVal[0];if(1<n/(t.spectrum.xVal[t.spectrum.xVal.length-1]-i))throw new Error("noUiSlider ("+lt+"): 'padding' option must not exceed 100% of the range.")}}function U(t,e){switch(e){case"ltr":t.dir=0;break;case"rtl":t.dir=1;break;default:throw new Error("noUiSlider ("+lt+"): 'direction' option was not recognized.")}}function A(t,e){if("string"!=typeof e)throw new Error("noUiSlider ("+lt+"): 'behaviour' must be a string containing options.");var r=0<=e.indexOf("tap"),n=0<=e.indexOf("drag"),i=0<=e.indexOf("fixed"),o=0<=e.indexOf("snap"),s=0<=e.indexOf("hover"),a=0<=e.indexOf("unconstrained");if(i){if(2!==t.handles)throw new Error("noUiSlider ("+lt+"): 'fixed' behaviour must be used with 2 handles");P(t,t.start[1]-t.start[0])}if(a&&(t.margin||t.limit))throw new Error("noUiSlider ("+lt+"): 'unconstrained' behaviour cannot be used with margin or limit");t.events={tap:r||o,drag:n,fixed:i,snap:o,hover:s,unconstrained:a}}function V(t,e){if(!1!==e)if(!0===e){t.tooltips=[];for(var r=0;r<t.handles;r++)t.tooltips.push(!0)}else{if(t.tooltips=dt(e),t.tooltips.length!==t.handles)throw new Error("noUiSlider ("+lt+"): must pass a formatter for all handles.");t.tooltips.forEach(function(t){if("boolean"!=typeof t&&("object"!=typeof t||"function"!=typeof t.to))throw new Error("noUiSlider ("+lt+"): 'tooltips' must be passed a formatter or 'false'.")})}}function D(t,e){h(t.ariaFormat=e)}function M(t,e){h(t.format=e)}function O(t,e){if("boolean"!=typeof(t.keyboardSupport=e))throw new Error("noUiSlider ("+lt+"): 'keyboardSupport' option must be a boolean.")}function L(t,e){t.documentElement=e}function z(t,e){if("string"!=typeof e&&!1!==e)throw new Error("noUiSlider ("+lt+"): 'cssPrefix' must be a string or `false`.");t.cssPrefix=e}function H(t,e){if("object"!=typeof e)throw new Error("noUiSlider ("+lt+"): 'cssClasses' must be an object.");if("string"==typeof t.cssPrefix)for(var r in t.cssClasses={},e)e.hasOwnProperty(r)&&(t.cssClasses[r]=t.cssPrefix+e[r]);else t.cssClasses=e}function vt(e){var r={margin:0,limit:0,padding:0,animate:!0,animationDuration:300,ariaFormat:u,format:u},n={step:{r:!1,t:m},keyboardPageMultiplier:{r:!1,t:g},keyboardDefaultStep:{r:!1,t:v},start:{r:!0,t:x},connect:{r:!0,t:E},direction:{r:!0,t:U},snap:{r:!1,t:S},animate:{r:!1,t:w},animationDuration:{r:!1,t:y},range:{r:!0,t:b},orientation:{r:!1,t:C},margin:{r:!1,t:P},limit:{r:!1,t:N},padding:{r:!1,t:k},behaviour:{r:!0,t:A},ariaFormat:{r:!1,t:D},format:{r:!1,t:M},tooltips:{r:!1,t:V},keyboardSupport:{r:!0,t:O},documentElement:{r:!1,t:L},cssPrefix:{r:!0,t:z},cssClasses:{r:!0,t:H}},i={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:d,keyboardPageMultiplier:5,keyboardDefaultStep:10};e.format&&!e.ariaFormat&&(e.ariaFormat=e.format),Object.keys(n).forEach(function(t){if(!a(e[t])&&void 0===i[t]){if(n[t].r)throw new Error("noUiSlider ("+lt+"): '"+t+"' is required.");return!0}n[t].t(r,a(e[t])?e[t]:i[t])}),r.pips=e.pips;var t=document.createElement("div"),o=void 0!==t.style.msTransform,s=void 0!==t.style.transform;r.transformRule=s?"transform":o?"msTransform":"webkitTransform";return r.style=[["left","top"],["right","bottom"]][r.dir][r.ort],r}function j(t,b,o){var l,u,s,c,i,a,e,p,f=window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"},d=window.CSS&&CSS.supports&&CSS.supports("touch-action","none")&&function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(t){}return t}(),h=t,y=b.spectrum,x=[],S=[],m=[],g=0,v={},w=t.ownerDocument,E=b.documentElement||w.documentElement,C=w.body,P=-1,N=0,k=1,U=2,A="rtl"===w.dir||1===b.ort?0:100;function V(t,e){var r=w.createElement("div");return e&&ht(r,e),t.appendChild(r),r}function D(t,e){var r=V(t,b.cssClasses.origin),n=V(r,b.cssClasses.handle);return V(n,b.cssClasses.touchArea),n.setAttribute("data-handle",e),b.keyboardSupport&&(n.setAttribute("tabindex","0"),n.addEventListener("keydown",function(t){return function(t,e){if(O()||L(e))return!1;var r=["Left","Right"],n=["Down","Up"],i=["PageDown","PageUp"],o=["Home","End"];b.dir&&!b.ort?r.reverse():b.ort&&!b.dir&&(n.reverse(),i.reverse());var s,a=t.key.replace("Arrow",""),l=a===i[0],u=a===i[1],c=a===n[0]||a===r[0]||l,p=a===n[1]||a===r[1]||u,f=a===o[0],d=a===o[1];if(!(c||p||f||d))return!0;if(t.preventDefault(),p||c){var h=b.keyboardPageMultiplier,m=c?0:1,g=at(e),v=g[m];if(null===v)return!1;!1===v&&(v=y.getDefaultStep(S[e],c,b.keyboardDefaultStep)),(u||l)&&(v*=h),v=Math.max(v,1e-7),v*=c?-1:1,s=x[e]+v}else s=d?b.spectrum.xVal[b.spectrum.xVal.length-1]:b.spectrum.xVal[0];return rt(e,y.toStepping(s),!0,!0),J("slide",e),J("update",e),J("change",e),J("set",e),!1}(t,e)})),n.setAttribute("role","slider"),n.setAttribute("aria-orientation",b.ort?"vertical":"horizontal"),0===e?ht(n,b.cssClasses.handleLower):e===b.handles-1&&ht(n,b.cssClasses.handleUpper),r}function M(t,e){return!!e&&V(t,b.cssClasses.connect)}function r(t,e){return!!b.tooltips[e]&&V(t.firstChild,b.cssClasses.tooltip)}function O(){return h.hasAttribute("disabled")}function L(t){return u[t].hasAttribute("disabled")}function z(){i&&(G("update.tooltips"),i.forEach(function(t){t&&ut(t)}),i=null)}function H(){z(),i=u.map(r),$("update.tooltips",function(t,e,r){if(i[e]){var n=t[e];!0!==b.tooltips[e]&&(n=b.tooltips[e].to(r[e])),i[e].innerHTML=n}})}function j(e,i,o){var s=w.createElement("div"),a=[];a[N]=b.cssClasses.valueNormal,a[k]=b.cssClasses.valueLarge,a[U]=b.cssClasses.valueSub;var l=[];l[N]=b.cssClasses.markerNormal,l[k]=b.cssClasses.markerLarge,l[U]=b.cssClasses.markerSub;var u=[b.cssClasses.valueHorizontal,b.cssClasses.valueVertical],c=[b.cssClasses.markerHorizontal,b.cssClasses.markerVertical];function p(t,e){var r=e===b.cssClasses.value,n=r?a:l;return e+" "+(r?u:c)[b.ort]+" "+n[t]}return ht(s,b.cssClasses.pips),ht(s,0===b.ort?b.cssClasses.pipsHorizontal:b.cssClasses.pipsVertical),Object.keys(e).forEach(function(t){!function(t,e,r){if((r=i?i(e,r):r)!==P){var n=V(s,!1);n.className=p(r,b.cssClasses.marker),n.style[b.style]=t+"%",N<r&&((n=V(s,!1)).className=p(r,b.cssClasses.value),n.setAttribute("data-value",e),n.style[b.style]=t+"%",n.innerHTML=o.to(e))}}(t,e[t][0],e[t][1])}),s}function F(){c&&(ut(c),c=null)}function R(t){F();var m,g,v,b,e,r,x,S,w,n=t.mode,i=t.density||1,o=t.filter||!1,s=function(t,e,r){if("range"===t||"steps"===t)return y.xVal;if("count"===t){if(e<2)throw new Error("noUiSlider ("+lt+"): 'values' (>= 2) required for mode 'count'.");var n=e-1,i=100/n;for(e=[];n--;)e[n]=n*i;e.push(100),t="positions"}return"positions"===t?e.map(function(t){return y.fromStepping(r?y.getStep(t):t)}):"values"===t?r?e.map(function(t){return y.fromStepping(y.getStep(y.toStepping(t)))}):e:void 0}(n,t.values||!1,t.stepped||!1),a=(m=i,g=n,v=s,b={},e=y.xVal[0],r=y.xVal[y.xVal.length-1],S=x=!1,w=0,(v=v.slice().sort(function(t,e){return t-e}).filter(function(t){return!this[t]&&(this[t]=!0)},{}))[0]!==e&&(v.unshift(e),x=!0),v[v.length-1]!==r&&(v.push(r),S=!0),v.forEach(function(t,e){var r,n,i,o,s,a,l,u,c,p,f=t,d=v[e+1],h="steps"===g;if(h&&(r=y.xNumSteps[e]),r||(r=d-f),!1!==f)for(void 0===d&&(d=f),r=Math.max(r,1e-7),n=f;n<=d;n=(n+r).toFixed(7)/1){for(u=(s=(o=y.toStepping(n))-w)/m,p=s/(c=Math.round(u)),i=1;i<=c;i+=1)b[(a=w+i*p).toFixed(5)]=[y.fromStepping(a),0];l=-1<v.indexOf(n)?k:h?U:N,!e&&x&&n!==d&&(l=0),n===d&&S||(b[o.toFixed(5)]=[n,l]),w=o}}),b),l=t.format||{to:Math.round};return c=h.appendChild(j(a,o,l))}function T(){var t=l.getBoundingClientRect(),e="offset"+["Width","Height"][b.ort];return 0===b.ort?t.width||l[e]:t.height||l[e]}function B(n,i,o,s){var e=function(t){return!!(t=function(t,e,r){var n,i,o=0===t.type.indexOf("touch"),s=0===t.type.indexOf("mouse"),a=0===t.type.indexOf("pointer");0===t.type.indexOf("MSPointer")&&(a=!0);if("mousedown"===t.type&&!t.buttons&&!t.touches)return!1;if(o){var l=function(t){return t.target===r||r.contains(t.target)||t.target.shadowRoot&&t.target.shadowRoot.contains(r)};if("touchstart"===t.type){var u=Array.prototype.filter.call(t.touches,l);if(1<u.length)return!1;n=u[0].pageX,i=u[0].pageY}else{var c=Array.prototype.find.call(t.changedTouches,l);if(!c)return!1;n=c.pageX,i=c.pageY}}e=e||gt(w),(s||a)&&(n=t.clientX+e.x,i=t.clientY+e.y);return t.pageOffset=e,t.points=[n,i],t.cursor=s||a,t}(t,s.pageOffset,s.target||i))&&(!(O()&&!s.doNotReject)&&(e=h,r=b.cssClasses.tap,!((e.classList?e.classList.contains(r):new RegExp("\\b"+r+"\\b").test(e.className))&&!s.doNotReject)&&(!(n===f.start&&void 0!==t.buttons&&1<t.buttons)&&((!s.hover||!t.buttons)&&(d||t.preventDefault(),t.calcPoint=t.points[b.ort],void o(t,s))))));var e,r},r=[];return n.split(" ").forEach(function(t){i.addEventListener(t,e,!!d&&{passive:!0}),r.push([t,e])}),r}function q(t){var e,r,n,i,o,s,a=100*(t-(e=l,r=b.ort,n=e.getBoundingClientRect(),i=e.ownerDocument,o=i.documentElement,s=gt(i),/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(s.x=0),r?n.top+s.y-o.clientTop:n.left+s.x-o.clientLeft))/T();return a=ft(a),b.dir?100-a:a}function X(t,e){"mouseout"===t.type&&"HTML"===t.target.nodeName&&null===t.relatedTarget&&_(t,e)}function Y(t,e){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===t.buttons&&0!==e.buttonsProperty)return _(t,e);var r=(b.dir?-1:1)*(t.calcPoint-e.startCalcPoint);Z(0<r,100*r/e.baseSize,e.locations,e.handleNumbers)}function _(t,e){e.handle&&(mt(e.handle,b.cssClasses.active),g-=1),e.listeners.forEach(function(t){E.removeEventListener(t[0],t[1])}),0===g&&(mt(h,b.cssClasses.drag),et(),t.cursor&&(C.style.cursor="",C.removeEventListener("selectstart",ct))),e.handleNumbers.forEach(function(t){J("change",t),J("set",t),J("end",t)})}function I(t,e){if(e.handleNumbers.some(L))return!1;var r;1===e.handleNumbers.length&&(r=u[e.handleNumbers[0]].children[0],g+=1,ht(r,b.cssClasses.active));t.stopPropagation();var n=[],i=B(f.move,E,Y,{target:t.target,handle:r,listeners:n,startCalcPoint:t.calcPoint,baseSize:T(),pageOffset:t.pageOffset,handleNumbers:e.handleNumbers,buttonsProperty:t.buttons,locations:S.slice()}),o=B(f.end,E,_,{target:t.target,handle:r,listeners:n,doNotReject:!0,handleNumbers:e.handleNumbers}),s=B("mouseout",E,X,{target:t.target,handle:r,listeners:n,doNotReject:!0,handleNumbers:e.handleNumbers});n.push.apply(n,i.concat(o,s)),t.cursor&&(C.style.cursor=getComputedStyle(t.target).cursor,1<u.length&&ht(h,b.cssClasses.drag),C.addEventListener("selectstart",ct,!1)),e.handleNumbers.forEach(function(t){J("start",t)})}function n(t){t.stopPropagation();var i,o,s,e=q(t.calcPoint),r=(i=e,s=!(o=100),u.forEach(function(t,e){if(!L(e)){var r=S[e],n=Math.abs(r-i);(n<o||n<=o&&r<i||100===n&&100===o)&&(s=e,o=n)}}),s);if(!1===r)return!1;b.events.snap||pt(h,b.cssClasses.tap,b.animationDuration),rt(r,e,!0,!0),et(),J("slide",r,!0),J("update",r,!0),J("change",r,!0),J("set",r,!0),b.events.snap&&I(t,{handleNumbers:[r]})}function W(t){var e=q(t.calcPoint),r=y.getStep(e),n=y.fromStepping(r);Object.keys(v).forEach(function(t){"hover"===t.split(".")[0]&&v[t].forEach(function(t){t.call(a,n)})})}function $(t,e){v[t]=v[t]||[],v[t].push(e),"update"===t.split(".")[0]&&u.forEach(function(t,e){J("update",e)})}function G(t){var n=t&&t.split(".")[0],i=n&&t.substring(n.length);Object.keys(v).forEach(function(t){var e=t.split(".")[0],r=t.substring(e.length);n&&n!==e||i&&i!==r||delete v[t]})}function J(r,n,i){Object.keys(v).forEach(function(t){var e=t.split(".")[0];r===e&&v[t].forEach(function(t){t.call(a,x.map(b.format.to),n,x.slice(),i||!1,S.slice(),a)})})}function K(t,e,r,n,i,o){var s;return 1<u.length&&!b.events.unconstrained&&(n&&0<e&&(s=y.getAbsoluteDistance(t[e-1],b.margin,0),r=Math.max(r,s)),i&&e<u.length-1&&(s=y.getAbsoluteDistance(t[e+1],b.margin,1),r=Math.min(r,s))),1<u.length&&b.limit&&(n&&0<e&&(s=y.getAbsoluteDistance(t[e-1],b.limit,0),r=Math.min(r,s)),i&&e<u.length-1&&(s=y.getAbsoluteDistance(t[e+1],b.limit,1),r=Math.max(r,s))),b.padding&&(0===e&&(s=y.getAbsoluteDistance(0,b.padding[0],0),r=Math.max(r,s)),e===u.length-1&&(s=y.getAbsoluteDistance(100,b.padding[1],1),r=Math.min(r,s))),!((r=ft(r=y.getStep(r)))===t[e]&&!o)&&r}function Q(t,e){var r=b.ort;return(r?e:t)+", "+(r?t:e)}function Z(t,n,r,e){var i=r.slice(),o=[!t,t],s=[t,!t];e=e.slice(),t&&e.reverse(),1<e.length?e.forEach(function(t,e){var r=K(i,t,i[t]+n,o[e],s[e],!1);!1===r?n=0:(n=r-i[t],i[t]=r)}):o=s=[!0];var a=!1;e.forEach(function(t,e){a=rt(t,r[t]+n,o[e],s[e])||a}),a&&e.forEach(function(t){J("update",t),J("slide",t)})}function tt(t,e){return b.dir?100-t-e:t}function et(){m.forEach(function(t){var e=50<S[t]?-1:1,r=3+(u.length+e*t);u[t].style.zIndex=r})}function rt(t,e,r,n,i){return i||(e=K(S,t,e,r,n,!1)),!1!==e&&(function(t,e){S[t]=e,x[t]=y.fromStepping(e);var r="translate("+Q(10*(tt(e,0)-A)+"%","0")+")";u[t].style[b.transformRule]=r,nt(t),nt(t+1)}(t,e),!0)}function nt(t){if(s[t]){var e=0,r=100;0!==t&&(e=S[t-1]),t!==s.length-1&&(r=S[t]);var n=r-e,i="translate("+Q(tt(e,n)+"%","0")+")",o="scale("+Q(n/100,"1")+")";s[t].style[b.transformRule]=i+" "+o}}function it(t,e){return null===t||!1===t||void 0===t?S[e]:("number"==typeof t&&(t=String(t)),t=b.format.from(t),!1===(t=y.toStepping(t))||isNaN(t)?S[e]:t)}function ot(t,e,r){var n=dt(t),i=void 0===S[0];e=void 0===e||!!e,b.animate&&!i&&pt(h,b.cssClasses.tap,b.animationDuration),m.forEach(function(t){rt(t,it(n[t],t),!0,!1,r)});for(var o=1===m.length?0:1;o<m.length;++o)m.forEach(function(t){rt(t,S[t],!0,!0,r)});et(),m.forEach(function(t){J("update",t),null!==n[t]&&e&&J("set",t)})}function st(){var t=x.map(b.format.to);return 1===t.length?t[0]:t}function at(t){var e=S[t],r=y.getNearbySteps(e),n=x[t],i=r.thisStep.step,o=null;if(b.snap)return[n-r.stepBefore.startValue||null,r.stepAfter.startValue-n||null];!1!==i&&n+i>r.stepAfter.startValue&&(i=r.stepAfter.startValue-n),o=n>r.thisStep.startValue?r.thisStep.step:!1!==r.stepBefore.step&&n-r.stepBefore.highestStep,100===e?i=null:0===e&&(o=null);var s=y.countStepDecimals();return null!==i&&!1!==i&&(i=Number(i.toFixed(s))),null!==o&&!1!==o&&(o=Number(o.toFixed(s))),[o,i]}return ht(e=h,b.cssClasses.target),0===b.dir?ht(e,b.cssClasses.ltr):ht(e,b.cssClasses.rtl),0===b.ort?ht(e,b.cssClasses.horizontal):ht(e,b.cssClasses.vertical),ht(e,"rtl"===getComputedStyle(e).direction?b.cssClasses.textDirectionRtl:b.cssClasses.textDirectionLtr),l=V(e,b.cssClasses.base),function(t,e){var r=V(e,b.cssClasses.connects);u=[],(s=[]).push(M(r,t[0]));for(var n=0;n<b.handles;n++)u.push(D(e,n)),m[n]=n,s.push(M(r,t[n+1]))}(b.connect,l),(p=b.events).fixed||u.forEach(function(t,e){B(f.start,t.children[0],I,{handleNumbers:[e]})}),p.tap&&B(f.start,l,n,{}),p.hover&&B(f.move,l,W,{hover:!0}),p.drag&&s.forEach(function(t,e){if(!1!==t&&0!==e&&e!==s.length-1){var r=u[e-1],n=u[e],i=[t];ht(t,b.cssClasses.draggable),p.fixed&&(i.push(r.children[0]),i.push(n.children[0])),i.forEach(function(t){B(f.start,t,I,{handles:[r,n],handleNumbers:[e-1,e]})})}}),ot(b.start),b.pips&&R(b.pips),b.tooltips&&H(),$("update",function(t,e,s,r,a){m.forEach(function(t){var e=u[t],r=K(S,t,0,!0,!0,!0),n=K(S,t,100,!0,!0,!0),i=a[t],o=b.ariaFormat.to(s[t]);r=y.fromStepping(r).toFixed(1),n=y.fromStepping(n).toFixed(1),i=y.fromStepping(i).toFixed(1),e.children[0].setAttribute("aria-valuemin",r),e.children[0].setAttribute("aria-valuemax",n),e.children[0].setAttribute("aria-valuenow",i),e.children[0].setAttribute("aria-valuetext",o)})}),a={destroy:function(){for(var t in b.cssClasses)b.cssClasses.hasOwnProperty(t)&&mt(h,b.cssClasses[t]);for(;h.firstChild;)h.removeChild(h.firstChild);delete h.noUiSlider},steps:function(){return m.map(at)},on:$,off:G,get:st,set:ot,setHandle:function(t,e,r,n){if(!(0<=(t=Number(t))&&t<m.length))throw new Error("noUiSlider ("+lt+"): invalid handle number, got: "+t);rt(t,it(e,t),!0,!0,n),J("update",t),r&&J("set",t)},reset:function(t){ot(b.start,t)},__moveHandles:function(t,e,r){Z(t,e,S,r)},options:o,updateOptions:function(e,t){var r=st(),n=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips"];n.forEach(function(t){void 0!==e[t]&&(o[t]=e[t])});var i=vt(o);n.forEach(function(t){void 0!==e[t]&&(b[t]=i[t])}),y=i.spectrum,b.margin=i.margin,b.limit=i.limit,b.padding=i.padding,b.pips?R(b.pips):F(),b.tooltips?H():z(),S=[],ot(e.start||r,t)},target:h,removePips:F,removeTooltips:z,getTooltips:function(){return i},getOrigins:function(){return u},pips:R}}return{__spectrum:i,version:lt,cssClasses:d,create:function(t,e){if(!t||!t.nodeName)throw new Error("noUiSlider ("+lt+"): create requires a single element, got: "+t);if(t.noUiSlider)throw new Error("noUiSlider ("+lt+"): Slider was already initialized.");var r=j(t,vt(e),e);return t.noUiSlider=r}}});
/**
 * Copyright (c) 2010,2011,2012,2013,2014 Morgan Roderick http://roderick.dk
 * License: MIT - http://mrgnrdrck.mit-license.org
 *
 * https://github.com/mroderick/PubSubJS
 */
!function(n,t){"use strict";var r={};n.PubSub=r;var e=n.define;!function(n){var t={},r=-1;function e(n){var t;for(t in n)if(n.hasOwnProperty(t))return!0;return!1}function o(n,t,r){try{n(t,r)}catch(n){setTimeout(function(n){return function(){throw n}}(n),0)}}function i(n,t,r){n(t,r)}function u(n,r,e,u){var f,s=t[r],c=u?i:o;if(t.hasOwnProperty(r))for(f in s)s.hasOwnProperty(f)&&c(s[f],n,e)}function f(n,r,o,i){var f=function(n,t,r){return function(){var e=String(n),o=e.lastIndexOf(".");for(u(n,n,t,r);-1!==o;)e=e.substr(0,o),o=e.lastIndexOf("."),u(n,e,t,r)}}(n="symbol"==typeof n?n.toString():n,r,i),s=function(n){var r=String(n),o=Boolean(t.hasOwnProperty(r)&&e(t[r])),i=r.lastIndexOf(".");for(;!o&&-1!==i;)r=r.substr(0,i),i=r.lastIndexOf("."),o=Boolean(t.hasOwnProperty(r)&&e(t[r]));return o}(n);return!!s&&(!0===o?f():setTimeout(f,0),!0)}n.publish=function(t,r){return f(t,r,!1,n.immediateExceptions)},n.publishSync=function(t,r){return f(t,r,!0,n.immediateExceptions)},n.subscribe=function(n,e){if("function"!=typeof e)return!1;n="symbol"==typeof n?n.toString():n,t.hasOwnProperty(n)||(t[n]={});var o="uid_"+String(++r);return t[n][o]=e,o},n.subscribeOnce=function(t,r){var e=n.subscribe(t,function(){n.unsubscribe(e),r.apply(this,arguments)});return n},n.clearAllSubscriptions=function(){t={}},n.clearSubscriptions=function(n){var r;for(r in t)t.hasOwnProperty(r)&&0===r.indexOf(n)&&delete t[r]},n.unsubscribe=function(r){var e,o,i,u="string"==typeof r&&(t.hasOwnProperty(r)||function(n){var r;for(r in t)if(t.hasOwnProperty(r)&&0===r.indexOf(n))return!0;return!1}(r)),f=!u&&"string"==typeof r,s="function"==typeof r,c=!1;if(!u){for(e in t)if(t.hasOwnProperty(e)){if(o=t[e],f&&o[r]){delete o[r],c=r;break}if(s)for(i in o)o.hasOwnProperty(i)&&o[i]===r&&(delete o[i],c=!0)}return c}n.clearSubscriptions(r)}}(r),"function"==typeof e&&e.amd?e(function(){return r}):"object"==typeof exports&&(void 0!==module&&module.exports&&(exports=module.exports=r),exports.PubSub=r,module.exports=exports=r)}("object"==typeof window&&window||this);
"use strict";function polyfill(){var o=window,t=document;if(!("scrollBehavior"in t.documentElement.style&&!0!==o.__forceSmoothScrollPolyfill__)){var l,e=o.HTMLElement||o.Element,r=468,i={scroll:o.scroll||o.scrollTo,scrollBy:o.scrollBy,elementScroll:e.prototype.scroll||n,scrollIntoView:e.prototype.scrollIntoView},s=o.performance&&o.performance.now?o.performance.now.bind(o.performance):Date.now,c=(l=o.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(l)?1:0);o.scroll=o.scrollTo=function(){void 0!==arguments[0]&&(!0!==f(arguments[0])?v.call(o,t.body,void 0!==arguments[0].left?~~arguments[0].left:o.scrollX||o.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:o.scrollY||o.pageYOffset):i.scroll.call(o,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:o.scrollX||o.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:o.scrollY||o.pageYOffset))},o.scrollBy=function(){void 0!==arguments[0]&&(f(arguments[0])?i.scrollBy.call(o,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):v.call(o,t.body,~~arguments[0].left+(o.scrollX||o.pageXOffset),~~arguments[0].top+(o.scrollY||o.pageYOffset)))},e.prototype.scroll=e.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==f(arguments[0])){var o=arguments[0].left,t=arguments[0].top;v.call(this,this,void 0===o?this.scrollLeft:~~o,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},e.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==f(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},e.prototype.scrollIntoView=function(){if(!0!==f(arguments[0])){var l=function(o){for(;o!==t.body&&!1===d(o);)o=o.parentNode||o.host;return o}(this),e=l.getBoundingClientRect(),r=this.getBoundingClientRect();l!==t.body?(v.call(this,l,l.scrollLeft+r.left-e.left,l.scrollTop+r.top-e.top),"fixed"!==o.getComputedStyle(l).position&&o.scrollBy({left:e.left,top:e.top,behavior:"smooth"})):o.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}else i.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function n(o,t){this.scrollLeft=o,this.scrollTop=t}function f(o){if(null===o||"object"!=typeof o||void 0===o.behavior||"auto"===o.behavior||"instant"===o.behavior)return!0;if("object"==typeof o&&"smooth"===o.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+o.behavior+" is not a valid value for enumeration ScrollBehavior.")}function p(o,t){return"Y"===t?o.clientHeight+c<o.scrollHeight:"X"===t?o.clientWidth+c<o.scrollWidth:void 0}function a(t,l){var e=o.getComputedStyle(t,null)["overflow"+l];return"auto"===e||"scroll"===e}function d(o){var t=p(o,"Y")&&a(o,"Y"),l=p(o,"X")&&a(o,"X");return t||l}function h(t){var l,e,i,c,n=(s()-t.startTime)/r;c=n=n>1?1:n,l=.5*(1-Math.cos(Math.PI*c)),e=t.startX+(t.x-t.startX)*l,i=t.startY+(t.y-t.startY)*l,t.method.call(t.scrollable,e,i),e===t.x&&i===t.y||o.requestAnimationFrame(h.bind(o,t))}function v(l,e,r){var c,f,p,a,d=s();l===t.body?(c=o,f=o.scrollX||o.pageXOffset,p=o.scrollY||o.pageYOffset,a=i.scroll):(c=l,f=l.scrollLeft,p=l.scrollTop,a=n),h({scrollable:c,method:a,startTime:d,startX:f,startY:p,x:e,y:r})}}"object"==typeof exports&&"undefined"!=typeof module?module.exports={polyfill:polyfill}:polyfill();
/*! UTF-8

© kovrigin
Все права разрешены
красивый дизайн должен иметь красивый код®

https://github.com/htmlpluscss/

*/

(() => {

	"use strict";

	window.CG = window.CG || {};
	CG.breakPoints = 1250;
	CG.heightHeaderFixed = 118;
	CG.resizeTimeout = null;
	CG.windowWidthOLd = window.innerWidth;

	window.addEventListener("resize", () => {

		window.requestAnimationFrame( () => {

			if (!CG.resizeTimeout) {

				CG.resizeTimeout = setTimeout( () => {

					CG.resizeTimeout = null;

					if(CG.windowWidthOLd !== window.innerWidth) {

						CG.windowWidthOLd = window.innerWidth;

						PubSub.publish('windowWidthResize');

					}

				}, 100);

			}

		});

	});

	window.addEventListener("scroll", () => window.requestAnimationFrame( () => PubSub.publish('windowScroll')));
	window.addEventListener("DOMContentLoaded", () => PubSub.publish('DOMContentLoaded'));
	window.addEventListener("load", () => PubSub.publish('pageLoad'));

	// обработчик анимаций
	CG.cssAnimation = a => {var b,c,d=document.createElement("cssanimation");switch(a){case'animation':b={"animation":"animationend","OAnimation":"oAnimationEnd","MozAnimation":"animationend","WebkitAnimation":"webkitAnimationEnd"};break;case'transition':b={"transition":"transitionend","OTransition":"oTransitionEnd","MozTransition":"transitionend","WebkitTransition":"webkitTransitionEnd"}}for(c in b)if(d.style[c]!==undefined)return b[c]};

	// Determine if an element is in the visible viewport
	CG.isInViewport = el => el.getBoundingClientRect().top >= 0 && el.getBoundingClientRect().bottom <= window.innerHeight;

	// отделяем тысячи
	CG.sepNumber = str => {
		str = parseInt(str, 10).toString();
		return str.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
	};

	// склеиваем тысячи
	CG.strToNumber = str => parseInt(str.replace(/\s+/g,''), 10);

})();
// переключение articleID

((articleID) => {

	if(!articleID) {

		return;

	}

	document.body.addEventListener('change', event => {

		const articleidEvents = event.target.closest('.articleid-events');

		if(articleidEvents){

			const control = event.target,
				  inputID = articleidEvents.querySelector('.articleid-events__value'),
				  storeID = articleidEvents.querySelector('.articleid-events__storeid'),
				  sale = articleidEvents.querySelector('.articleid-events__sale'),
				  sku = articleidEvents.querySelector('.articleid-events__sku-value'),
				  stock = articleidEvents.querySelector('.articleid-events__availability-value'),
				  btn = articleidEvents.querySelector('.articleid-events__btn'),
				  price = articleidEvents.querySelector('.articleid-events__price-value'),
				  priceOld = articleidEvents.querySelector('.articleid-events__old-price-value');

			inputID.value = control.value;
			storeID.value = control.getAttribute('data-storeid') ? control.getAttribute('data-storeid') : 1;
			price.textContent = control.getAttribute('data-price');

			if(priceOld) {

				if(control.getAttribute('data-old-price')) {

					priceOld.parentNode.classList.remove('hide');
					priceOld.textContent = control.getAttribute('data-old-price');

				}
				else {

					priceOld.parentNode.classList.add('hide');

				}

			}

			if(sale) {

				if(control.getAttribute('data-sale')) {

					sale.parentNode.classList.remove('hide');
					sale.textContent = control.getAttribute('data-sale');

				}
				else {

					sale.parentNode.classList.add('hide');

				}

			}

			if(control.getAttribute('data-in-basket')) {

				btn.querySelector('a').classList.remove('hide');
				btn.querySelector('button').classList.add('hide');

			}
			else {

				btn.querySelector('a').classList.add('hide');
				btn.querySelector('button').classList.remove('hide');

			}

			if(stock) {

				stock.textContent = control.getAttribute('data-stock');

			}

			if(sku) {

				sku.textContent = control.getAttribute('data-sku');

			}

		}

	});

})(document.querySelector('.articleid-events'));
((ask) => {

	"use strict";

	if(!ask.length) {

		return;

	}
/*
	let observer = new MutationObserver(mutationRecords => {

		const t = mutationRecords[0].target,
			  rect = t.getBoundingClientRect();

		console.log(rect.left > window.innerWidth - rect.right);

		if(t.open) {

			const inner = t.querySelector('.ask__inner');

			if(rect.left > window.innerWidth - rect.right) {

				// правее

				inner.style.left = 'auto';
				inner.style.right = 0;
				inner.style.width = rect.left + 'px';

			}
			else {

				// левее

				inner.style.right = 'auto';
				inner.style.left = 0;
				inner.style.width = window.innerWidth - rect.right + 'px';

			}

		}

	});

	Array.from(ask, el => {

		observer.observe(el, {

			attributes : true

		});

	});

	document.body.addEventListener('click', evt => {

		Array.from(ask, el => {

			if(evt.target.closest('.ask') !== el){

				el.open = false;

			}

		});

	});
*/
})(document.querySelectorAll('.ask'));

// кнопка в один клик

((formBuyOneClick) => {

	if(!formBuyOneClick) {

		return;

	}

	document.body.addEventListener('click', event => {

		if(event.target.closest('.buy-one-click')){

			const card = event.target.closest('.articleid-events'),
				  id = card.querySelector('.articleid-events__id'),
				  storeid = card.querySelector('.articleid-events__storeid'),
				  articleid = card.querySelector('.articleid-events__value'),
				  cat = card.querySelector('.articleid-events__cat'),
				  title = card.querySelector('.articleid-events__title'),
				  price = card.querySelector('.articleid-events__price-value'),
				  img = card.querySelector('.articleid-events__img');

			formBuyOneClick.querySelector('[name="id"]').value = id.value;
			formBuyOneClick.querySelector('[name="storeid"]').value = storeid ? storeid.value : '';
			formBuyOneClick.querySelector('[name="articleid"]').value = articleid ? articleid.value : '';

			formBuyOneClick.querySelector('.card-item__img').innerHTML = img.innerHTML;
			formBuyOneClick.querySelector('.card-item__cat').textContent = cat.textContent;
			formBuyOneClick.querySelector('.card-item__title').textContent = title.textContent;
			formBuyOneClick.querySelector('.card-item__price').textContent = price.textContent;

			CG.modalShow('buy-one-click');

		}

	});

})(document.querySelector('.form-buy-one-click__product'));
( form => {

	if(!form) {

		return;

	}

	form.addEventListener('change', () => {

		fetch(form.getAttribute('action'), {
			method: 'POST',
			headers: {
				'X-Requested-With' : 'XMLHttpRequest'
			},
			body: new FormData(form)
		})
		.then( response => {

			console.log(response);

		});

	});

})(document.querySelector('form.catalog-bar'));
( tags => {

	if(!tags.length) {

		return;

	}

	Array.from(tags, form => {

		const btn = form.querySelector('.catalog-filter-tags__show-all'),
			  items = form.querySelectorAll('.catalog-filter-tags__item');

		if(!btn) {

			return;

		}

		btn.addEventListener('click', () => {

			btn.classList.add('hide');

			Array.from(items, item =>
				item.classList.remove('hide'));

		});

		// отправка фильтра

		form.addEventListener('change', () => {

			form.classList.add('is-loading');

			fetch(form.getAttribute('action'), {
				method: 'POST',
				headers: {
					'X-Requested-With' : 'XMLHttpRequest'
				},
				body: new FormData(form)
			})
			.then( response => {

				console.log(response);
				form.classList.remove('is-loading');

			});

		});

	});

})(document.querySelectorAll('.catalog-filter-tags'));

( elem => {

	"use strict";

	Array.from(elem, el => {

		const input = el.querySelector('.checkbox-only__input'),
			  text = el.querySelector('.checkbox-only__check-text');

		text && input.addEventListener('change', () => {

			if(input.checked) {

				text.classList.add('is-show');

				setTimeout( () => text.classList.remove('is-show'), 300);

			}

		});

	});

})( document.querySelectorAll('.checkbox-only') );

// подтверждение города

( form => {

	if(!form) {

		return;

	}

	// показать форму

	setTimeout( () => form.classList.remove('hide'), 10000);

	form.addEventListener('submit', event => {

		event.preventDefault();

		form.classList.add('hide');
//		Cookies.set('ucity', form.elements.city.value);

		fetch(form.getAttribute('action'), {
			method: 'POST',
			headers: {
				'X-Requested-With': 'XMLHttpRequest'
			},
			body: new FormData(form)
		});

	});

})(document.querySelector('.form-city-confirm'));


// поиск и выбор города

( form => {

	if(!form) {

		return;

	}

	const input = form.querySelector('.form-city__input'),
		  result = form.querySelector('.form-city__result');

	input.addEventListener('keyup', event => {

		if(input.value.length > 3 && event.key !== 'enter'){

			form.classList.add('is-loading');

			fetch(form.getAttribute('action'), {
				method: 'POST',
				headers: {
					'X-Requested-With' : 'XMLHttpRequest'
				},
				body: new FormData(form)
			})
			.then( response => {

				console.log(response);
				result.innerHTML = response.text();
				form.classList.remove('is-loading');

			});

		}

	});

	form.addEventListener('submit', event => event.preventDefault());

})(document.querySelector('.form-city'));



// пункты выдачи и постаматы

( form => {

	if(!form) {

		return;

	}

	const map = form.querySelector('.modal-points__map'),
		  input = form.querySelector('.modal-points__input'),
		  result = form.querySelector('.modal-points__result');

	const loadMap = callback => {

// загружаем API

		if (typeof ymaps === 'undefined') {

			const script = document.createElement('script');

			script.type = 'text/javascript';
			script.async = true;
			script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';

			script.onload = () => {

				ymaps.ready(callback);
// Пример реализации боковой панели на основе наследования от collection.Item.
// Боковая панель отображает информацию, которую мы ей передали.
ymaps.modules.define('Panel', [
    'util.augment',
    'collection.Item'
], function (provide, augment, item) {
    // Создаем собственный класс.
    var Panel = function (options) {
        Panel.superclass.constructor.call(this, options);
    };

    // И наследуем его от collection.Item.
    augment(Panel, item, {
        onAddToMap: function (map) {
            Panel.superclass.onAddToMap.call(this, map);
            this.getParent().getChildElement(this).then(this._onGetChildElement, this);
            // Добавим отступы на карту.
            // Отступы могут учитываться при установке текущей видимой области карты,
            // чтобы добиться наилучшего отображения данных на карте.
            map.margin.addArea({
                top: 0,
                left: 0,
                width: '250px',
                height: '100%'
            })
        },

        onRemoveFromMap: function (oldMap) {
            if (this._$control) {
                this._$control.remove();
            }
            Panel.superclass.onRemoveFromMap.call(this, oldMap);
        },

        _onGetChildElement: function (parentDomContainer) {
            // Создаем HTML-элемент с текстом.
            // По-умолчанию HTML-элемент скрыт.
            this._$control = $('<div class="customControl"><div class="content"></div><div class="closeButton"></div></div>').appendTo(parentDomContainer);
            this._$content = $('.content');
            // При клике по крестику будем скрывать панель.
            $('.closeButton').on('click', this._onClose);
        },
        _onClose: function () {
            $('.customControl').css('display', 'none');
        },
        // Метод задания контента панели.
        setContent: function (text) {
            // При задании контента будем показывать панель.
            this._$control.css('display', 'flex');
            this._$content.html(text);
        }
    });

    provide(Panel);
});

			};

			document.head.appendChild(script);

		} else {

			ymaps.ready(callback);

		}

	}

// слушаем открытие модалки

	let myMap;

	PubSub.subscribe('modalShow', (...data) => {

		if(data[1] === 'points'){

			if (myMap) {

				myMap.destroy();

			}

			loadMap( () => {

				console.log('надо передать точки');

// https://yandex.ru/dev/maps/jsbox/2.1/event_rollover
// https://yandex.ru/dev/maps/jsbox/2.1/custom_search
//

// авто зум всех точек

				myMap = new ymaps.Map(map, {
					center: [55.733, 37.588],
					zoom: 10,
					controls: []
				});

/*				const zoomControl = new ymaps.control.ZoomControl({
					options: {
						visible: true
					}
				});

				myMap.controls.add(zoomControl);

				myMap.behaviors.disable('scrollZoom');

				const myPlacemark = new ymaps.Placemark(myMap.getCenter(), false, false);

				myMap.geoObjects.add(myPlacemark);*/
    // Создадим контент для меток.
    const firstOffice = 'Первый полноценный офис Яндекса появился в Москве в 2001 году. ';
    const secondOffice = '<img style="width: 190px;" src="img/office.jpeg">';
    const thirdOffice = '<a href="https://yandex.ru/company/contacts/moscow/">Главный офис Яндекса</a>';
    // Создадим и добавим панель на карту.
//    const panel = new ymaps.Panel();
//    myMap.controls.add(panel, {
//        float: 'left'
//    });
    // Создадим коллекцию геообъектов.
    const collection = new ymaps.GeoObjectCollection(null, {
        // Запретим появление балуна.
        hasBalloon: false,
        iconColor: '#ed4993'
//        iconColor: '#418ebc'
    });
    // Добавим геообъекты в коллекцию.
    collection
        .add(new ymaps.Placemark([55.733838, 37.588100], {
            balloonContent: thirdOffice
        }))
        .add(new ymaps.Placemark([55.758240, 37.678523], {
            balloonContent: secondOffice
        }))
        .add(new ymaps.Placemark([55.693784, 37.564942], {
            balloonContent: firstOffice
        }));
    // Добавим коллекцию на карту.
    myMap.geoObjects.add(collection);
    // Подпишемся на событие клика по коллекции.
    collection.events.add('click', event => {
        // Получим ссылку на геообъект, по которому кликнул пользователь.
        const target = event.get('target');
        console.log(target.properties.get('balloonContent'))
        // Зададим контент боковой панели.
//        panel.setContent(target.properties.get('balloonContent'));
        // Переместим центр карты по координатам метки с учётом заданных отступов.
//        myMap.panTo(target.geometry.getCoordinates(), {useMapMargin: true});
    });

			});

		}

	});

// ввод в инпуте

	input.addEventListener('keyup', event => {

		if(input.value.length > 3 && event.key !== 'enter'){

			fetch(form.getAttribute('action'), {
				method: 'POST',
				headers: {
					'X-Requested-With': 'XMLHttpRequest'
				},
				body: new FormData(form)
			})
			.then( response => {

				console.log(response);
				result.innerHTML = response.json();

			});

		}

	});

	form.addEventListener('submit', event => event.preventDefault());

})(document.querySelector('.modal-points'));

( form => {

	"use strict";

	if(!form) {

		return;

	}

	const inputGroupTrue = form.querySelectorAll('[data-disabled-true]'),
		  inputGroupDisabled = form.querySelectorAll('[data-disabled-false]');

	form.addEventListener('change', event => {

		if(event.target.getAttribute('type') === 'file') {

			const label = event.target.parentNode,
				  small = label.querySelector('.input-files__label small');

			small.textContent = event.target.value;

		}

		const group = event.target.getAttribute('data-group');

		if(group) {

			// разблокируем которые совпали
			Array.from(inputGroupDisabled, input => {

				if(input.getAttribute('data-disabled-false') === group) {

					input.disabled = false;

				}

			});

			// блокируем которые совпали
			Array.from(inputGroupTrue, input => {

				if(input.getAttribute('data-disabled-true') === group) {

					input.disabled = true;

				}

			});

		}

	});

})( document.querySelector('.form-club') );

( elems => {

	"use strict";

	if(!elems.length) {

		return;

	}

	Array.from(elems, el => {

		const url = el.getAttribute('data-url'),
			  btn = el.querySelector('.confirm-phone__btn'),
			  error = el.querySelector('.confirm-phone__error'),
			  input = el.querySelector('.confirm-phone__input');

		btn.addEventListener('click', () => {

			error.classList.add('hide');

			if(input.value.length === 0) {

				error.classList.remove('hide');
				error.textContent = error.getAttribute('data-empty');
				input.focus();

			}
			else {

				const formData = new FormData();

				formData.append('id-disabled', el.getAttribute('id'));
				formData.append('phone', input.value);

				fetch(url, {
					method: 'POST',
					headers: {
						'X-Requested-With' : 'XMLHttpRequest'
					},
					body: formData
				})
				.then( response => {

					console.log(response);

					const obj = response.json();
					console.log(obj);

					if(obj.done) {

					//	input.disabled = true;
						document.querySelector('#modal-form-confirm-phone-sms').setupTimer();

					}

					if(obj.error) {

						error.classList.remove('hide');
						error.textContent = obj.error;

						//	Телефон уже есть в базе. Забыли авторизироваться?
						//	Подтвердите номер

					}

				});

			}

		});

	});

})( document.querySelectorAll('.confirm-phone') );
( filter => {

	"use strict";

	if(!filter) {

		return;

	}

	let windowScroll = window.pageYOffset;

	const btnShow = document.querySelector('.btn-filter-show'),
		  btnClose = document.querySelector('.btn-filter-hide'),
		  floatBtn = filter.querySelector('.filter__float'),
		  counerTotal = filter.querySelectorAll('.filter__couner'),
		  catalogRight = document.querySelector('.catalog__items'),
		  pagin = catalogRight.querySelector('.pagin'),
		  listResult = catalogRight.querySelector('.catalog-list');

	let setTimeoutID = null;

	// запрос количества и перерисовка фильтра

	filter.addEventListener('change', event => {

		if(event.target.getAttribute('name')) {

			// анимация в фильтре
			filter.classList.add('is-loading');
			floatBtn.style.top = event.target.getBoundingClientRect().top - filter.getBoundingClientRect().top + 'px';
			floatBtn.classList.add('is-show');
			clearTimeout(setTimeoutID);

			// запрос

			fetch(filter.getAttribute('action'), {
				method: 'POST',
				headers: {
					'Content-Type' : 'application/json',
					'X-Requested-With' : 'XMLHttpRequest'
				},
				body: new FormData(filter)
			})
			.then( response => {

				console.log(response);

				const obj = response.json();

				console.log(obj);

				filter.classList.remove('is-loading');

				Array.from(counerTotal, el => el.textContent = obj.total);

				setTimeoutID = setTimeout( () => floatBtn.classList.remove('is-show'), 5000);

				if(obj.list) {

					listResult.innerHTML = obj.list;

				}

				if(obj.pagin) {

					pagin.innerHTML = obj.pagin;

				}

			});

		}

	});

	// отправка

	filter.addEventListener('submit', event => {

		event.preventDefault();

		const formData = new FormData(filter);

		formData.append("result", true);
		catalogRight.classList.add('is-loading');

		fetch(filter, {
			method: 'POST',
			headers: {
				'X-Requested-With' : 'XMLHttpRequest'
			},
			body: formData
		})
		.then( response => {

			console.log(response.text());
			catalogRight.classList.remove('is-loading');

		});

	});

	// фильтруем по поиску Найти

	const fastFilter = filter.querySelectorAll('.fast-filter');

	Array.from(fastFilter, el => {

		const input = el.querySelector('.fast-filter__input'),
			  items = el.querySelectorAll('.fast-filter__item');

		input.addEventListener('keyup', event => {

			event.preventDefault();

			const val = input.value.toLowerCase();

			let empty = true;

			Array.from(items, item => {

				let value = item.querySelector('.fast-filter__item-value');

				value = value ? value.textContent.trim() : item.textContent.trim();

				item.classList.toggle('only-hit__hide', value.toLowerCase().indexOf(val) !== 0);

				if(empty && value.toLowerCase().indexOf(val) === 0) {

					empty = false;

				}

			});

			console.log(empty);

			el.classList.toggle('is-not-found', empty);

		});

	});

	// показываем фильтр в мобильном

	btnShow.addEventListener('click', () => {

		windowScroll = window.pageYOffset;
		document.body.classList.add('filter-show');
		window.scrollTo(0, 0);

	});

	btnClose.addEventListener('click', () => {

		document.body.classList.remove('filter-show');
		window.scrollTo(0, windowScroll);

	});

})( document.querySelector('.filter') );

/* only-hit */

( elem => {

	"use strict";

	Array.from(elem, el => {

		const btn = el.querySelector('.only-hit__btn'),
			  items = el.querySelector('.only-hit__item');

		btn.addEventListener('click', () => el.classList.toggle('is-all'));

	});

})( document.querySelectorAll('.only-hit') );
( forms => {

	if(!forms.length) {

		return;

	}

	Array.from(forms, form => {

		const input = form.querySelector('.form-fast-result__input'),
			  result = form.querySelector('.form-fast-result__result');

		input.addEventListener('keyup', event => {

			if(input.value.length > 3 && event.key !== 'enter'){

				form.classList.add('is-loading');


				fetch(form.getAttribute('action'), {
					method: 'POST',
					headers: {
						'X-Requested-With' : 'XMLHttpRequest'
					},
					body: new FormData(form)
				})
				.then(response => response.text())
				.then(result => {

					console.log(result);

					result.innerHTML = result;
					form.classList.remove('is-loading');
					form.classList.toggle('is-empty', result.length === 0);

				});

			}

		});

	});

})(document.querySelectorAll('.form-fast-result'));

// всплывающий submit

document.body.addEventListener('submit', event => {

	if(!event.target.classList.contains('form')) {

		return;

	}

	event.preventDefault();

	const form = event.target,
		  url = form.getAttribute('action'),
		  formData = new FormData(form);

	let response = fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type' : 'application/json',
			'X-Requested-With' : 'XMLHttpRequest'
		},
		body: formData
	})
	.then( response => {

		console.log(response);

		if (!response.ok) {

			alert("Ошибка HTTP: " + response.status);
			return;

		}

		const obj = response.json();
		console.log(obj);

	// информационные сообщения
		if(obj.modalShow) {

			if(obj.modalShow === 'info') {

				document.querySelector('#modal-info__title').innerHTML = obj.title ? obj.title : '';
				document.querySelector('#modal-info__message').innerHTML = obj.message ? obj.message : '';

			}

			CG.modalShow(obj.modalShow);

		}

	// избранное
		if(form.classList.contains('form-wishlist')){

			const headerCount = document.querySelector('.header__wishlist .header__icons-count');

			if(obj.headerCount) {

				headerCount.classList.toggle('hide', obj.headerCount === 0);
				headerCount.textContent = obj.headerCount;

			}

			form.elements.mode.value = obj.mode;

		}

	// сравнение
		if(form.classList.contains('form-compare')){

			form.elements.mode.value = obj.mode;

		}

	// кнопка Купить
		if(form.classList.contains('form-buy')){

			const headerCount = document.querySelector('.header__cart .header__icons-count');

			if(cart.headerCount) {

				headerCount.textContent = cart.headerCount;

			}

			if(cart.mode === "add") {

				form.querySelector('.form-buy__btns a').classList.remove('hide');
				form.querySelector('.form-buy__btns button').classList.add('hide');

				console.log('реалтзовать возврат articleid для установке в карточке активного варианта')
	/*
				if(articleID.length) {

					Array.from(articleID, input => {

						if(input.value === cart.articleid) {

							input.setAttribute('data-in-basket', 'in basket');

						}

					});

				}*/

			}

		}

	// Часто покупают вместе
		if(form.classList.contains('product-set')){

			if(cart.headerCount) {

				headerCount.textContent = cart.headerCount;

			}

			if(cart.mode === "add") {

				form.querySelector('.product-set__btn a').classList.remove('hide');
				form.querySelector('.product-set__btn button').classList.add('hide');

			}

		}

	});

});

((items) => {

	"use strict";

	if(!items.length) {

		return;

	}

	Array.from(items, set => {

		const gallerySwiper = document.createElement('div');

		gallerySwiper.className = 'swiper-container swiper-container--gallery';

		const links = set.querySelectorAll('.gallery-set__item');

		let wrapper = '<ul class="swiper-wrapper">';

		Array.from(links, (link, index) => {

			wrapper += '<li class="swiper-slide"><img src="' + link.getAttribute('href') + '"></li>';

			link.addEventListener('click', event => {

				event.preventDefault();

				if(gallerySwiper.swiper) {

					gallerySwiper.swiper.destroy(false,true);

				}

				document.querySelector('#modal-gallery').innerHTML = '';
				document.querySelector('#modal-gallery').appendChild(gallerySwiper.cloneNode(true));

				CG.modalShow('gallery');

				const galleryModal = document.querySelector('#modal-gallery .swiper-container--gallery');

				galleryModal.setAttribute('data-initialSlide', index);

				CG.swiper(galleryModal);

			});

		});

		wrapper += '</ul><span class="swiper-count"></span>';

		gallerySwiper.innerHTML = wrapper;

	});

})(document.querySelectorAll('.gallery-set'));
((headerFixed) => {

	"use strict";

	if(!headerFixed) {

		return;

	}

	const header = document.querySelector('.header');

	CG.heightHeaderFixed = headerFixed.clientHeight;

	document.documentElement.style.setProperty("--heightHeaderFixed", CG.heightHeaderFixed + 'px');

	PubSub.subscribe('windowScroll', () =>
		header.classList.toggle('is-fixed', window.innerHeight < window.pageYOffset));

	PubSub.subscribe('windowWidthResize', () => {

		CG.heightHeaderFixed = headerFixed.clientHeight;

		document.documentElement.style.setProperty("--heightHeaderFixed", CG.heightHeaderFixed + 'px');

	});


	// btn up top

	const footerUP = document.querySelector('.footer__up');

	if(footerUP) {

		PubSub.subscribe('windowScroll', () =>
			footerUP.classList.toggle("is-show", window.innerHeight < window.pageYOffset));

		footerUP.addEventListener('click', () => document.body.scrollIntoView({behavior: "smooth"}));

	}

	// fixed

	let ScrollTopPrev = window.pageYOffset;

	window.addEventListener("scroll", () => {

		if(window.pageYOffset <= 0) {

			headerFixed.classList.remove('is-show');

		}
		else if(window.pageYOffset > window.innerHeight){

			headerFixed.classList.toggle('is-show', window.pageYOffset <= ScrollTopPrev);

		}

		ScrollTopPrev = window.pageYOffset;

	});

	// close menu

	PubSub.subscribe('SwiperAutoPlayStart', () => {

		if (window.innerHeight < window.pageYOffset){

			header.classList.add('is-fixed');
			headerFixed.classList.add('is-show');

		}

	});


})(document.querySelector('.header__fixed'));
( form => {

	"use strict";

	if(!form) {

		return;

	}

	const input = form.elements.searchword,
		  list = document.querySelector('.' + input.getAttribute('data-list')),
		  items = list.querySelectorAll('.' + input.getAttribute('data-items')),
		  string = '.' + input.getAttribute('data-string');

	if(items.length) {

		input.addEventListener('input', event => {

			event.preventDefault();

			const val = input.value.toLowerCase();

			let empty = true;

			Array.from(items, item => {

				const _string = item.querySelector(string);

				if(_string) {

					const text = _string.textContent.trim();

					item.classList.toggle('hide', text.toLowerCase().indexOf(val) !== 0);

					if(empty && text.toLowerCase().indexOf(val) === 0) {

						empty = false;

					}

				}

			});

			list.classList.toggle('is-empty', empty);

		});

	}

})( document.querySelector('.filter-livesearch') );
// наведение на строку заказа

( imgs => {

	"use strict";

	if(!imgs.length) {

		return;

	}

	// первый уровень, второстипенное меню
	Array.from(imgs, img => {

		img.closest('tr').addEventListener('mousemove', event => {

			img.style.top = event.pageY + 'px';
			img.style.left = event.pageX + 'px';
			img.style.opacity = 1;

		});

		img.closest('tr').addEventListener('mouseleave', () => {

			img.style.opacity = 0;

		});

	});

})(document.querySelectorAll('.lk__img-hover-tr'));


( form => {

	if(!form) {

		return;

	}

	const smsForm = document.querySelector('#form-sms-login');

	form.addEventListener('submit', event => {

		event.preventDefault();

		fetch(form.getAttribute('action'), {
			method: 'POST',
			headers: {
				'Content-Type' : 'application/json',
				'X-Requested-With' : 'XMLHttpRequest'
			},
			body: new FormData(form)
		})
		.then( response => {

			console.log(response);

			const obj = response.json();

			console.log(obj);

			if(obj.modalShow === 'info') {

				document.querySelector('#modal-info__title').innerHTML = obj.title ? obj.title : '';
				document.querySelector('#modal-info__message').innerHTML = obj.message ? obj.message : '';

				CG.modalShow(obj.modalShow);

				return;

			}

			if(obj.title) {

				smsForm.querySelector('.form-sms__title').innerHTML = obj.title;

			}

			if(obj.login) {
// это номер телефона или емайл в системе
				smsForm.querySelector('.form-sms__login').value = obj.login;

			}

			if(obj.from) {
// Мы отправили SMS с кодом на ваш номер | Мы отправили код на ваш email
				smsForm.querySelector('.form-sms__from').textContent = obj.from;

			}

			if(obj.repeat === 'disabled') {

				smsForm.querySelector('.form-lk__repeat').innerHTML = obj.text;

			}

			CG.modalShow('sms');
			smsForm.setupTimer(obj.repeat ? obj.repeat : undefined);

		});

	});

})(document.querySelector('.form-login'));
/*CG.mask = (elems) => {

	if(!elems.length) {

		return;

	}

	if (!window.Inputmask) {

		const script = document.createElement('script');

		script.type = 'text/javascript';
		script.async = true;
		script.src ='/js/inputmask.min.js';

		script.onload = () => setMask();

		setTimeout( () => document.head.appendChild(script), 5000);

	}
	else {

		setMask();

	}

	const setMask = () => {

		Array.from(elems, el => {

			if(el.classList.contains('inputmask--phone')) {

				var maskInput = new Inputmask({
					mask: "+7 ( 999 ) 999-99-99",
					showMaskOnHover: false,
					placeholder: "+7 ( ___ ) ___-__-__"
				});

			}
			else if(el.classList.contains('inputmask--date')) {

				var maskInput = new Inputmask({
					alias: "datetime",
					showMaskOnHover: false,
					inputFormat: "dd.mm.yyyy",
					placeholder: "дд.мм.гггг"
				});

			}
			else if(el.classList.contains('inputmask--currency')) {

				var maskInput = new Inputmask({
					alias: "integer",
					suffix: ' рублей',
					groupSize: 3,
					autoGroup: true,
					groupSeparator: ' ',
					rightAlign: false
				});

			}
			else {

				var maskInput = new Inputmask(el.getAttribute('data-mask'));

			}

			maskInput.mask(el);

		});

	}

};

CG.mask(document.querySelectorAll('.inputmask'));*/

((menu) => {

	"use strict";

	if(!menu) {

		return;

	}

	const btn = document.querySelector('.js-toggle-menu'),
		  level1 = menu.querySelectorAll('.menu-catalog__parent'),
		  second = menu.querySelectorAll('.menu-catalog__second-link'),
		  level2 = menu.querySelectorAll('.menu-catalog__level2-head.is-arrow'),
		  boxLevel3 = menu.querySelector('.menu-catalog__level3'),
		  btnClose = menu.querySelector('.menu-catalog__close'),
		  btnBack = menu.querySelector('.menu-catalog__back'),
		  category = menu.querySelector('.menu-catalog__current-category'),
		  categoryTextDefault = category.textContent,
		  btnSlide = menu.querySelectorAll('.menu-catalog__slide-btn');

	let	level2Active = null,
		level1Scroll = 0,
		level2Scroll = 0;

	const menuOpen = () => {

		document.documentElement.classList.add('scroll-behavior-off');

		CG.OpenMenu = true;

		if(window.innerWidth < CG.breakPoints) {

			CG.windowScrollOld = window.pageYOffset;
			window.scrollTo(0, 0);

		}

		document.body.classList.add('menu-open');

		PubSub.publish('SwiperAutoPlayStop');

		// eager
		if(window.innerWidth >= CG.breakPoints) {

			Array.from(menu.querySelectorAll('[loading="lazy"]'), img => img.setAttribute('loading','eager'));

		}

	};

	const menuClose = () => {

		document.body.classList.remove('menu-open');

		if(window.innerWidth < CG.breakPoints) {

			window.scrollTo(0, CG.windowScrollOld);

		}

		CG.OpenMenu = false;

		setTimeout( () => document.documentElement.classList.remove('scroll-behavior-off'), 100);

		PubSub.publish('SwiperAutoPlayStart');

	};

	// открыть|закрыть меню

	btn.addEventListener('click', () => CG.OpenMenu ? menuClose() : menuOpen());


	// закрыть меню

	btnClose.addEventListener('click', () => menuClose());

	document.addEventListener('click', event => {

		if(document.body.classList.contains('menu-open') && !event.target.closest('.js-toggle-menu') && !event.target.closest('.menu-catalog')) {

			menuClose();

		}

	});

	// На уровень назад

	btnBack.addEventListener('click', () => {

		if(menu.classList.contains('is-level3')) {

			menu.classList.remove('is-level3');

			window.scrollTo(0, level2Scroll);

			category.textContent = level2Active.textContent;

			menu.style.height = level2Active.clientHeight + CG.heightHeaderFixed + 'px';

		}
		else if (menu.classList.contains('is-level2')) {

			menu.classList.remove('is-level2');

			window.scrollTo(0, level1Scroll);

			btnBack.classList.add('hide');

			category.textContent = categoryTextDefault;

			menu.style.height = 'auto';

		}
		else {

			console.log('что-то не так');

		}

	});


	// первый уровень

	Array.from(level1, el => {

		const id = el.getAttribute('data-id');

		el.addEventListener('mouseenter', event => {

			// десктоп

			if(window.innerWidth >= CG.breakPoints) {

				Array.from(level1, elem => elem.classList.toggle('is-hover', elem === el));

				if(level2Active) {

					level2Active.classList.add('hide');

				}

				level2Active = menu.querySelector('.menu-catalog__level2--' + id);

				level2Active.classList.remove('hide');

			}

		});

		el.addEventListener('click', event => {

			// мобайл

			if(el.classList.contains('is-brand')) {

				return;

			}

			if(window.innerWidth < CG.breakPoints) {

				event.preventDefault();

				level1Scroll = window.pageYOffset;

				window.scrollTo(0, 0);

				menu.classList.add('is-level2');

				if(level2Active) {

					level2Active.classList.add('hide');

				}

				level2Active = menu.querySelector('.menu-catalog__level2--' + id);

				level2Active.classList.remove('hide');

				btnBack.classList.remove('hide');

				category.textContent = el.textContent;

				menu.style.height = level2Active.clientHeight + CG.heightHeaderFixed + 'px';

			}

		});

	});

	// первый уровень, второстипенное меню
	Array.from(second, el => {

		el.addEventListener('mouseenter', () => {

			// десктоп

			if(window.innerWidth >= CG.breakPoints) {

				if(level2Active) {

					level2Active.classList.add('hide');

					Array.from(level1, elem => elem.classList.remove('is-hover'));

					level2Active = false;

				}

			}

		});

	});


	// второй уровень

	Array.from(level2, el => {

		el.addEventListener('click', event => {

			// мобайл
			if(window.innerWidth < CG.breakPoints) {

				event.preventDefault();

				level2Scroll = window.pageYOffset;

				window.scrollTo(0, 0);

				boxLevel3.innerHTML = el.parentNode.innerHTML;

				menu.classList.add('is-level3');

				category.textContent = el.textContent;

				menu.style.height = boxLevel3.clientHeight + CG.heightHeaderFixed + 'px';

			}

		});

	});

	// развернуть меню slide

	Array.from(btnSlide, el => {

		const parent = el.parentNode,
			  itemsHide = parent.querySelectorAll('.menu-catalog__level2-item.hide');

		let open = false;

		el.addEventListener('click', event => {

			open = !open;

			el.classList.toggle('is-open', open);

			Array.from(itemsHide, item => item.classList.toggle('hide', !open));

		});

	});

})(document.querySelector('.menu-catalog'));
((modal)=>{

	"use strict";

	if(!modal) {

		return;

	}

	let windowScroll = window.pageYOffset;

	const items = modal.querySelectorAll('.modal__item'),
		  btns = document.querySelectorAll('[data-modal]'),
		  box = modal.querySelector('.modal__box'),
		  wrapper = document.querySelector('.wrapper');

	modal.addEventListener('click', event => {

		if(event.target.classList.contains('modal') || event.target.classList.contains('modal__box') || event.target.closest('.modal__close')){

			CG.hideModal();

		}

	});

	CG.hideModal = () => {

		document.body.classList.remove('modal-show');
		wrapper.style.top = 0;
		window.scrollTo(0,windowScroll);

		CG.activeModal = false;

		PubSub.publish('SwiperAutoPlayStart');

	};

	CG.modalShow = selector => {

		if(!CG.activeModal){

			windowScroll = window.pageYOffset;

			wrapper.style.top = -windowScroll + 'px';

		}

		CG.activeModal = modal.querySelector('.modal__item--' + selector);

		Array.from(items, el =>
			el.classList.toggle('visuallyhidden', el !== CG.activeModal));

		modal.classList.toggle('is-full', CG.activeModal.classList.contains('is-full'));

		document.body.classList.add('modal-show');
		window.scrollTo(0,0);

		CG.activeModal.focus();

		PubSub.publish('modalShow', selector);

		PubSub.publish('SwiperAutoPlayStop');

		const inputFocus = CG.activeModal.querySelector('.modal__focus');

		if (inputFocus) {

			setTimeout( () => inputFocus.focus(), 1000);

		}

	};

	Array.from(btns, el =>
		el.addEventListener('click', () =>
			CG.modalShow(el.getAttribute('data-modal'))));

	document.addEventListener('keydown', event => {

		if(CG.activeModal && event.keyCode === 27){

			CG.hideModal();

		}

	});

})(document.querySelector('.modal'));
// изменение в форме, подсчет
( form => {

	"use strict";

	if(!form) {

		return;

	}

	const result = document.querySelectorAll('.procedure-form__result'),
		  list = form.querySelectorAll('.procedure-form__list'),
		  item = form.querySelectorAll('.procedure-form__item'),
		  checkbox = form.querySelectorAll('.checkbox-only__input');

	const setLast = () => {

		Array.from(list, group => {

			let last = 0;
			const _list = group.querySelectorAll('.procedure-form__item');

			Array.from(_list, (el,index) => {

				el.classList.add('is-last');

				if(!el.classList.contains('hide')) {

					_list[last].classList.remove('is-last');
					last = index;

				}

			});

			if(last === 0) {

				_list[0].classList.add('is-last');

			}

		});

	}

	setLast();

	form.addEventListener('change', event => {

	// чекаем продукты в таблице

		if(event.target.classList.contains('checkbox-only__input')) {

			Array.from(document.querySelectorAll('.procedure-product--' + event.target.value), el => {

				el.querySelector('.checkbox-only__input').checked = event.target.checked;

			});

		}

	// скрываем/показываем чекнутые

		Array.from(checkbox, input => {

			const item = input.closest('.procedure-form__item');

			if(input.checked) {

				item.classList.remove('is-remove', 'hide');

			}
			else {

				if(!item.classList.contains('hide')) {

					item.classList.add('is-remove');

					setTimeout( () => {

						item.classList.add('hide');
						setLast();

					}, 400);

				}

			}

		});

	// расчет

		let _sum = 0,
			_sumSet = 0;

		const input = form.querySelectorAll('.checkbox-only__input:checked');

		Array.from(input, el => {

			const price = parseInt(el.getAttribute('data-price')),
				  priceOld = parseInt(el.getAttribute('data-price-old') || el.getAttribute('data-price'));

			_sum += priceOld;
			_sumSet += price;

		});

		Array.from(result, el => {

			el.querySelector('.procedure-form__counter').textContent = input.length;
			el.querySelector('.procedure-form__sum-set').textContent = _sumSet;
			el.querySelector('.procedure-form__sum').textContent = _sum;
			el.querySelector('.procedure-form__diff').textContent = _sum - _sumSet;

		});

		setLast();

	});

})(document.querySelector('.procedure-form'));

// чек в продукте
( items => {

	"use strict";

	Array.from(items, product => {

		const checkbox = product.querySelector('.checkbox-only__input');

		checkbox.addEventListener('change', () => {

			const formItem = document.querySelector('.procedure-form__item--' + checkbox.value),
				  input = formItem.querySelector('.checkbox-only__input');

			input.checked = checkbox.checked;

			document.querySelector('.procedure-form').dispatchEvent(new CustomEvent("change"));

			// близнецу поставим чек

			Array.from(document.querySelectorAll('.procedure-product--' + checkbox.value), el => {

				if(el !== product ){

					el.querySelector('.checkbox-only__input').checked = checkbox.checked;

				}

			});

		});

	});

})(document.querySelectorAll('.procedure-product'));

// article в продукте
( items => {

	"use strict";

	Array.from(items, form => {

		form.addEventListener('change', event => {

			const input = event.target,
				  id = input.value,
				  parentID = input.getAttribute('data-parent-id'),
				  volume = input.getAttribute('data-volume'),
				  price = input.getAttribute('data-price'),
				  oldPrice = input.getAttribute('data-old-price'),
				  sale = input.getAttribute('data-sale'),
				  storeid = input.getAttribute('data-storeid');

		// изменили продукт и его близнеца

			Array.from(document.querySelectorAll('.procedure-product--' + parentID), product => {

				product.querySelector('.checkbox-only__input').setAttribute('data-articleid', id);
				product.querySelector('.checkbox-only__input').setAttribute('data-storeid', storeid);

				product.querySelector('.procedure-product__price-value').textContent = price;

				if(product.querySelector('.procedure-product__price-old-value')) {

					product.querySelector('.procedure-product__price-old-value').parentNode.classList.toggle('hide', !oldPrice);

					product.querySelector('.procedure-product__price-old-value').textContent = oldPrice;

				}

				if(product.querySelector('.procedure-product__sale')) {

					product.querySelector('.procedure-product__sale').classList.toggle('hide', !sale);

					product.querySelector('.procedure-product__sale').textContent = sale;

				}

				if(product.querySelector('.procedure-product__volume')) {

					product.querySelector('.procedure-product__volume').textContent = volume;

				}

				Array.from(product.querySelectorAll('[name="articleid"]'), el => {

					if(el.checked === false && el.value === id) {

						el.checked = true;

					}

				});

			});

		// ищем продукт в form

			const formItem = document.querySelector('.procedure-form__item--' + parentID);

			formItem.querySelector('.procedure-form__item-articleid').value = id;
			formItem.querySelector('.procedure-form__item-storeid').value = storeid;

			formItem.querySelector('.procedure-form__item-price-value').textContent = price;

			formItem.querySelector('.procedure-form__item-price-old-value').parentNode.classList.toggle('hide', !oldPrice);

			formItem.querySelector('.procedure-form__item-price-old-value').textContent = oldPrice;

			formItem.querySelector('.procedure-form__item-sale').classList.toggle('hide', !sale);

			formItem.querySelector('.procedure-form__item-sale').textContent = sale + '%';

			formItem.querySelector('.checkbox-only__input').setAttribute('data-price', price);
			formItem.querySelector('.checkbox-only__input').setAttribute('data-price-old', oldPrice);

		// запускаем изменение формы

			document.querySelector('.procedure-form').dispatchEvent(new CustomEvent("change"));

		});

	});

})(document.querySelectorAll('.procedure-product .articleid-events__form'));

// desc right
( desc => {

	"use strict";

	Array.from(desc, el => {

		const btn = el.querySelector('.procedure-desc__btn'),
			  inner = el.querySelector('.procedure-desc__inner');

		if(inner.clientHeight <= el.clientHeight) {

			el.classList.add('is-show');

		}

		btn.addEventListener('click', () => el.classList.toggle('is-open'));

	});

})(document.querySelectorAll('.procedure-desc'));

// result in table
( btn => {

	"use strict";

	btn && btn.addEventListener('click', () =>
		document.querySelector('.procedure-form').dispatchEvent(new CustomEvent("submit")));

})(document.querySelector('.procedure-form__result-submit'));

( form => {

	"use strict";

	if(!form) {

		return;

	}

	const list = document.querySelector('.producers-list'),
		  letterBlocks = list.querySelectorAll('.producers-list__letter'),
		  items = list.querySelectorAll('.producers-list__item');

	form.addEventListener('change', () => {

		const letter = form.elements.letter.value,
			  country = form.elements.country.value,
			  category = form.elements.category.value;

		// скрываем / показываем блоки в завичимости от Буквы
		if(letter !== 'all') {

			Array.from(letterBlocks, el =>
				el.classList.toggle('hide', letter !== el.getAttribute('data-letter')));

		}
		else {

			Array.from(letterBlocks, el => el.classList.remove('hide'));

		}

		// показываем все элементы
		Array.from(items, el => el.classList.remove('hide'));

		// скрываем по Стране
		if(country !== 'all') {

			Array.from(items, el => {

				if(country !== el.getAttribute('data-country')){

					el.classList.add('hide');

				}

			});

		}

		// скрываем по Категории
		if(category !== 'all') {

			Array.from(items, el => {

				if(category !== el.getAttribute('data-category')){

					el.classList.add('hide');

				}

			});

		}

		// скрываем блок если в нем нет видимых элементов
		Array.from(letterBlocks, el => {

			if(el.querySelectorAll('.producers-list__item').length === el.querySelectorAll('.producers-list__item.hide').length) {

				el.classList.add('hide');

			}

		});

		// если ничего нет

		list.classList.toggle('is-empty', letterBlocks.length === list.querySelectorAll('.producers-list__letter.hide').length);

	});

})(document.querySelector('.producers-filter'));

// переключение фото
( preview  => {

	if(!preview.length) {

		return;

	}

	const swiperProduct = document.querySelector('.swiper-container--product');

	Array.from(preview, (el, index) => {

		el.addEventListener('click', () => {

			Array.from(preview, elem => {

				elem.classList.toggle('is-active', el === elem);

			});

			if(swiperProduct.swiper) {

				swiperProduct.swiper.slideTo(index);

			}
			else {

				swiperProduct.setAttribute('data-initialSlide', index);

			}

		});

	});

})(document.querySelectorAll('.product-img__preview-item'));

// Часто покупают вместе

( set => {

	"use strict";

	if(!set.length) {

		return;

	}

	Array.from(set, form => {

		const input = form.querySelectorAll('.product-set__input'),
			  total = form.querySelector('.product-set__total-value'),
			  totalNotSale = form.querySelector('.product-set__total-value-not-sale'),
			  sale = form.querySelector('.product-set__total-value-sale');

		// кнопки check

		form.addEventListener('change', () => {

			let _total = 0,
				_sale  = 0;

			Array.from(input, el => {

				el.closest('.product-set__item').classList.toggle('is-off', !el.checked);

				if(el.checked) {

					_sale += parseFloat(el.getAttribute('data-sale'));
					_total += parseFloat(el.getAttribute('data-price'));

				}

			});

			sale.textContent = _sale;
			total.textContent = _total;
			totalNotSale.textContent = _total + _sale;

		});

	});

})(document.querySelectorAll('.product-set'));

((quantity) => {

	"use strict";

	if(!quantity.length) {

		return;

	}

	Array.from(quantity, el => {

		const up = el.querySelector('.quantity__btn--up'),
			  down = el.querySelector('.quantity__btn--down'),
			  count = el.querySelector('.quantity__count');

		let value = null;

		const testIsNaN = () => {

			if ( isNaN(parseInt(count.value)) ) {

				count.value = 1;

			}

		};

		up.addEventListener('click', () => {

			value = parseInt(count.value) + 1;

			count.value = value;

			testIsNaN();

		});

		down.addEventListener('click', () => {

			value = parseInt(count.value) - 1;

			if(value < 1) {

				value = 1;

			}

			count.value = value;

			testIsNaN();

		});

		count.addEventListener('focus', () => setTimeout( () => count.setSelectionRange(0,9), 100));

		count.addEventListener('blur', () => testIsNaN());

		count.addEventListener('keyup', () => count.value = count.value.replace(/[\D]/g, ''));

	});


})(document.querySelectorAll('.quantity'));
// ajax add item

( form => {

	if(!form) {

		return;

	}

	const btn = form.querySelector('.btn');

	form.addEventListener('submit', event => {

		event.preventDefault();

		btn.disabled = true;

		fetch(form.getAttribute('action'), {
			method: 'POST',
			headers: {
				'X-Requested-With' : 'XMLHttpRequest'
			},
			body: new FormData(form)
		})
		.then( response => {

			console.log(response);

			btn.disabled = false;

			form.elements.page.value = parseInt(form.elements.page.value + 1);

			document.querySelector('#review-sort-result').innerHTML = document.querySelector('#review-sort-result').innerHTML + response.text();

		});

	});

})(document.querySelector('.review__ajax-add'));


// сортировака

( sort => {

	if(!sort.length) {

		return;

	}

	Array.from(sort, form => {

		// отправка

		form.addEventListener('change', () => {

			fetch(form.getAttribute('action'), {
				method: 'POST',
				headers: {
					'X-Requested-With' : 'XMLHttpRequest'
				},
				body: new FormData(form)
			})
			.then( response => {

				console.log(response);
				document.querySelector('#review-sort-result').innerHTML = response.text();

			});

		});

	});

})(document.querySelectorAll('.review-sort'));

// показать форму
( form => {

	if(!form) {

		return;

	}

	form.addEventListener('change', event => {

		if(event.target.classList.contains('review-form__subject-input')){

			if(event.target.getAttribute('data-type') === 'review') {

				Array.from(form.querySelectorAll('[data-review]'), el =>
					el.textContent = el.getAttribute('data-review'));

			}
			else {

				Array.from(form.querySelectorAll('[data-request]'), el =>
					el.textContent = el.getAttribute('data-request'));

				form.querySelector('.review-form__hidden-in-request').classList.add('hide');

			}

			Array.from(form.querySelectorAll('.review-form__fieldset'), el =>
				el.classList.toggle('is-hide'));

		}

	});

})(document.querySelector('.review-form'));

// like

( review => {

	if(!review) {

		return;

	}

	review.addEventListener('submit', event => {

		if(event.target.classList.contains('review-like')) {

			event.preventDefault();

			const form = event.target;

			fetch(form.getAttribute('action'), {
				method: 'POST',
				headers: {
					'Content-Type' : 'application/json',
					'X-Requested-With' : 'XMLHttpRequest'
				},
				body: new FormData(form)
			})
			.then( response => {

				console.log(response);
				const obj = response.json();

				if(obj.mode) {

					form.classList.toggle('is-like', obj.mode === "add");
					form.querySelector('.review-like__count').textContent = obj.count;

				}

			});

		}

	});

})(document.querySelector('#review-sort-result'));




((footer) => {

	"use strict";

	if ('IntersectionObserver' in window) {

		const options = {
			root: null,
			rootMargin: '0px',
			threshold: [.1]
		};

		const bar = document.querySelector('.bar');

		const callback = (entries, observer) =>

			Array.from(entries, entry => {

				document.body.classList.toggle('bg-footer', entry.intersectionRatio > 0.1 && window.pageYOffset > 0);

				if(bar) {

					bar.classList.toggle('is-hidden', entry.intersectionRatio > 0.1);

				}

			});

		const observer = new IntersectionObserver(callback, options);

		observer.observe(footer);

	}

})(document.querySelector('.footer'));
((search)=>{

	"use strict";

	if(!search.length) {

		return;

	}

	Array.from(search, form => {

		const reset = form.querySelector('.search__reset'),
			  input = form.querySelector('.search__input'),
			  result = form.querySelector('.search__result');

		form.addEventListener('reset', () => {

			reset.classList.add('hide');
			result.classList.add('hide');

			setTimeout( () => input.focus(), 1000);

		});

		input.addEventListener('input', () => {

			reset.classList.toggle('hide', !input.value);
			result.classList.toggle('hide', !input.value);

			if(input.value.length > 3 && event.key !== 'enter'){

				form.classList.add('is-loading');

				fetch(form.getAttribute('action'), {
					method: 'POST',
					headers: {
						'X-Requested-With' : 'XMLHttpRequest'
					},
					body: new FormData(form)
				})
				.then( response => {

					console.log(response);
					result.innerHTML = response.text();
					form.classList.remove('is-loading');

				});

			}

		});

	});

})(document.querySelectorAll('.search'));
( items => {

	if(!items.length) {

		return;

	}

	Array.from(items, el => {

		const select = el.querySelector('select');

		select.addEventListener('change', () => {

			select.blur();
			el.classList.remove('is-default');

		});

	});

})(document.querySelectorAll('.select'));
( bar => {

	if(!bar) {

		return;

	}

	bar.addEventListener('click', event => {

		if(event.target.closest('.is-active')) {

			event.preventDefault();
			bar.classList.toggle('is-open');

		}

	});

})(document.querySelector('.service-page-bar'));
// инициализация слайдеров
( range => {

	"use strict";

	if(!range.length) {

		return;

	}

	Array.from(range, slider => {

		const step = parseInt(slider.getAttribute('data-step'), 10) || 1,
			  min = parseInt(slider.getAttribute('data-min'), 10) || 0,
			  max = parseInt(slider.getAttribute('data-max'), 10) || 9999999,
			  input = slider.querySelectorAll('.input'),
			  inputMin = slider.querySelector('.slider-range__input-min'),
			  inputMax = slider.querySelector('.slider-range__input-max'),
			  track = slider.querySelector('.slider-range__track');

		noUiSlider.create(track, {
			connect: true,
			start: [min, max],
			step: step,
			range: {
				'min': min,
				'max': max
			}
		});

		track.noUiSlider.on('slide', values => {

			inputMin.value = CG.sepNumber(parseInt(values[0], 10));
			inputMax.value = CG.sepNumber(parseInt(values[1], 10));

		});

		track.noUiSlider.on('end', values => inputMax.dispatchEvent(new CustomEvent("change", {'bubbles' : true})));

	// события в инпутах

		Array.from(input, el => {

			el.addEventListener('keyup', event => {

				if (event.keyCode === 13) {

					el.blur();
					event.preventDefault();
					event.stopPropagation();

				}

				el.dispatchEvent(new CustomEvent("change", {'bubbles' : true}));

			});

			el.addEventListener('blur', () => el.value = CG.sepNumber(el.value));

			el.addEventListener('focus', () => {

				if(el.value.length) {

					el.value = CG.strToNumber(el.value);
					setTimeout( () => el.setSelectionRange(0,99), 100);

				}

			});

			el.addEventListener('input', () => {

				let _min = parseInt(CG.strToNumber(inputMin.value), 10),
					_max = parseInt(CG.strToNumber(inputMax.value), 10);

				if (_min < min) {

					_min = min;
					this.value = min;

				}

				if (_max > max) {

					_max = max;
					this.value = max;

				}

				if(_min < _max) {

					track.noUiSlider.set([_min, _max]);

				}

			});

		});

	});

})(document.querySelectorAll('.slider-range'));
( forms => {

	if(!forms.length) {

		return;

	}

	Array.from(forms, form => {

		const code = form.querySelector('.form-sms__code'),
			  timer = form.querySelector('.form-sms__timer'),
			  textError = form.querySelector('.form-lk__after'),
			  btnRepeat = form.querySelector('.form-lk__repeat-sms');

		const submitForm = repeat => {

			const formData = new FormData(form);

			if(repeat) {

				formData.append('repeat-code', 'more');

			}

			fetch(form.getAttribute('action'), {
				method: 'POST',
				headers: {
					'X-Requested-With' : 'XMLHttpRequest'
				},
				body: formData
			})
			.then( response => response.json())
			.then( obj => {

				console.log(obj);

				textError.classList.add('is-error');

				if(obj.from) {

					form.querySelector('.form-sms__from').textContent = obj.from;

				}

				if(obj.repeat === 'disabled') {

					form.querySelector('.form-lk__repeat').innerHTML = obj.text;

				}
				else {

					form.setupTimer(obj.repeat ? obj.repeat : undefined);

				}

				if(obj.confirmPhone.disabledId) {

					document.querySelector('#' + obj.disabled.id + ' .input').disabled = true;

				}

			});

		};

		form.setupTimer = (secunds = 60) => {

			timer.textContent = secunds;

			setTimeout( () => {

				secunds--;

				if(secunds > 0) {

					form.setupTimer(secunds);

				}
				else {

					btnRepeat.classList.remove('hide');
					timer.parentNode.classList.add('hide');

				}

			}, 100);

		}

		// повторный запрос смс

		btnRepeat.addEventListener('click', () => {

			btnRepeat.classList.add('hide');
			timer.parentNode.classList.remove('hide');

			code.value = '';

			submitForm(true);

		});

		// обработка неверных смс

		form.addEventListener('submit', event => {

			event.preventDefault();

			submitForm();

		});

	});

})(document.querySelectorAll('.form-sms'));

CG.swiper = swipe => {

	let mySwipe = null,
		toggleSwipe = null,
		resetSwipe = null,
		timer = 10000;

	if(Cookies.get('acity') || Cookies.get('ucity')) {

		timer = 0;

	}

	const swipeControls = document.createElement('div'),
		  swipeNav = document.createElement('div'),
		  swipeBtns = document.createElement('div'),
		  swipeNext = document.createElement('button'),
		  swipePrev = document.createElement('button'),
		  items = swipe.querySelectorAll('.swiper-slide'),
		  count = items.length,
		  autoplay = swipe.getAttribute('data-autoplay') * 1000,
		  initialSlide = swipe.getAttribute('data-initialSlide') ? parseInt(swipe.getAttribute('data-initialSlide')) : 0;
		  cardList = swipe.classList.contains('swiper-container--card-list'),
		  product = swipe.classList.contains('swiper-container--product'),
		  billboard = swipe.classList.contains('swiper-container--billboard'),
		  compare = swipe.classList.contains('swiper-container--compare'),
		  compareTable = swipe.classList.contains('swiper-container--compare-table'),
		  gallery = swipe.classList.contains('swiper-container--gallery');

	swipeNav.className = 'swiper-pagination';
	swipeControls.className = 'swiper-controls';

	swipeBtns.className = 'swiper-navigation';
	swipePrev.className = 'swiper-button-prev button';
	swipeNext.className = 'swiper-button-next button';

	swipePrev.innerHTML = '<svg width="16" height="29" viewBox="0 0 16 29"><path d="M0 14.034c0-.503.192-1.006.575-1.39L12.645.577a1.966 1.966 0 112.78 2.78L4.744 14.034l10.68 10.68a1.966 1.966 0 01-2.78 2.779L.574 15.423A1.96 1.96 0 010 14.035z"/></svg>';
	swipeNext.innerHTML = '<svg width="16" height="29" viewBox="0 0 16 29"><path d="M16 14.034a1.96 1.96 0 01-.575 1.39L3.355 27.493a1.965 1.965 0 11-2.78-2.78l10.68-10.679L.575 3.356a1.966 1.966 0 012.78-2.78l12.07 12.069c.383.384.575.887.575 1.39z"/></svg>';

	swipeBtns.appendChild(swipePrev);
	swipeBtns.appendChild(swipeNext);
	swipeControls.appendChild(swipeBtns);
	swipeControls.appendChild(swipeNav);
	swipe.parentNode.appendChild(swipeControls);

	// eager
	if(swipe.classList.contains('swiper-container--loading-eager')) {

		Array.from(swipe.querySelectorAll('[loading="lazy"]'), img => img.setAttribute('loading','eager'));

	}

	// hide
	Array.from(items, el => el.classList.remove('hide'));

	resetSwipe = () => {

		if(mySwipe) {

			mySwipe.destroy(false,true);
			mySwipe = undefined;

		}

		swipeNav.classList.add('hide');
		swipeBtns.classList.add('hide');
		swipeControls.classList.add('hide');

	}

	resetSwipe();

	if (gallery) {

		toggleSwipe = () => {

			toggleSwipe = false;

			const countCurrent = swipe.querySelector('.swiper-count');

			countCurrent.textContent = '';

			if(count > 1) {

				swipeBtns.classList.remove('hide');
				swipeControls.classList.remove('hide');
				countCurrent.textContent = (initialSlide + 1) + '/' + count;

				new Swiper(swipe, {
					loop: true,
					initialSlide: initialSlide,
					navigation: {
						nextEl: swipeNext,
						prevEl: swipePrev
					},
					on: {

						slideChangeTransitionEnd: () => {

							if(swipe.swiper){

								countCurrent.textContent =
									swipe.swiper.activeIndex === 0 || swipe.swiper.activeIndex === count ?
										count :
										swipe.swiper.activeIndex % count;

								countCurrent.textContent += '/' + count;

							}

						}

					}

				});

			}

		}

	}

	if (cardList) {

		const row = parseInt(swipe.getAttribute('data-count-row'));

		toggleSwipe = () => {

			resetSwipe();

			swipe.parentNode.classList.remove('swiper-container-style');

			if (window.innerWidth >= CG.breakPoints) {

				if (count > row) {

					swipe.parentNode.classList.add('swiper-container-style');

					swipeBtns.classList.remove('hide');
					swipeControls.classList.remove('hide');

					if(swipe.getAttribute('data-nav')) {

						swipeNav.classList.remove('hide');

					}

					mySwipe = new Swiper(swipe, {
						loop: false,
						slidesPerView: row,
						slidesPerGroup: row,
						spaceBetween: 30,
						navigation: {
							nextEl: swipeNext,
							prevEl: swipePrev
						},
						pagination: {
							el: swipeNav,
							clickable: true,
							bulletClass: 'button',
							bulletActiveClass: 'is-active'
						}
					});

				}

			}

		}

	}

	if (product) {

		toggleSwipe = () => {

			toggleSwipe = false;

			swipeNav.classList.remove('hide');
			swipeControls.classList.remove('hide');

			new Swiper(swipe, {
				loop: false,
				initialSlide: initialSlide,
				preloadImages: false,
				pagination: {
					el: swipeNav,
					clickable: true,
					bulletClass: 'button',
					bulletActiveClass: 'is-active'
				}
			});

		}

	}

	if (billboard) {

		toggleSwipe = () => {

			toggleSwipe = false;

			swipeNav.classList.remove('hide');
			swipeBtns.classList.remove('hide');
			swipeControls.classList.remove('hide');

			new Swiper(swipe, {
				loop: true,
				preloadImages: false,
				autoplay: {
					delay: autoplay
				},
				navigation: {
					nextEl: swipeNext,
					prevEl: swipePrev
				},
				pagination: {
					el: swipeNav,
					clickable: true,
					bulletClass: 'button',
					bulletActiveClass: 'is-active'
				}
			});

		}

	}

	if (compare) {

		toggleSwipe = () => {

			toggleSwipe = false;

			const btn = swipe.querySelectorAll('.catalog__compare-nav .button'),
				  mySwipeCompareTable = document.querySelector('.swiper-container--compare-table');

			mySwipe = new Swiper(swipe, {
				slidesPerView: 4,
				simulateTouch: false
			});

			btn[0].addEventListener('click', () => {

				mySwipe.slidePrev();
				mySwipeCompareTable.swiper.slidePrev();

			});

			btn[1].addEventListener('click', () => {

				mySwipe.slideNext();
				mySwipeCompareTable.swiper.slideNext();

			});

			swipe.addEventListener('click', event => {

				if(event.target.closest('.btn--remove')){

					const slide = event.target.closest('.swiper-slide');

					Array.from(swipe.querySelectorAll('.swiper-slide'), (el,index) => {

						if(el === slide) {

							swipe.swiper.removeSlide(index);
							mySwipeCompareTable.swiper.removeSlide(index);
							return false;

						}

					});

					if(swipe.querySelectorAll('.swiper-slide').length <= 4) {

						btn[0].classList.add('hide');
						btn[1].classList.add('hide');

					}

				}

			});

		}

	}

	if (compareTable) {

		toggleSwipe = () => {

			toggleSwipe = false;

			mySwipe = new Swiper(swipe, {
				slidesPerView: 4,
				simulateTouch: false
			});

		}

	}

	PubSub.subscribe('windowWidthResize', () => {

		if (window.Swiper && toggleSwipe) {

			toggleSwipe();

		}

	});

	if(window.Swiper && toggleSwipe) {

		toggleSwipe();

	}
	else {

		PubSub.subscribe('swiperJsLoad', toggleSwipe);

	}

	if(!CG.swiperInit) {

		CG.swiperInit = true;

		const script = document.createElement('script');

		script.type = 'text/javascript';
		script.async = true;
		script.src = '/js/swiper.min.js';

		script.onload = () => PubSub.publish('swiperJsLoad');

		setTimeout( () => document.head.appendChild(script), timer);

	}

	if(autoplay) {

		PubSub.subscribe('SwiperAutoPlayStop', () =>
			swipe.swiper && swipe.swiper.autoplay.stop());

		PubSub.subscribe('SwiperAutoPlayStart', () =>
			swipe.swiper && swipe.swiper.autoplay.start());

	}

};

((swiperContainer)=>{

	"use strict";

	if(!swiperContainer.length) {

		return;

	}

	Array.from(swiperContainer, swipe => CG.swiper(swipe));

})(document.querySelectorAll('.swiper-container'));
/*
// tab-swiper

((tabs)=>{

	"use strict";

	if(!tabs.length) {

		return;

	}

	Array.from(tabs, tab => {

		const btns = tab.querySelectorAll('.tab-swiper__btn'),
			  items = tab.querySelectorAll('.tab-swiper__item');

		Array.from(btns, btn => {

			btn.addEventListener('click', () => {

				Array.from(btns, (_btn, index) => {

					_btn.classList.toggle('is-active', _btn === btn);
					items[index].classList.toggle('is-active', _btn === btn);

				});

			});

		});

	});

})(document.querySelectorAll('.tab-swiper'));


*/
// tabs

((tabs)=>{

	Array.from(tabs, tab => {

		let btn = tab.querySelectorAll('.tabs__btn'),
			item = tab.querySelectorAll('.tabs__item'),
			nav = document.createElement('div');

		Array.from(btn, (el,index) => {

			const _btn = document.createElement('button');

			_btn.setAttribute('type','button');

			_btn.className = 'button tabs__nav-btn';

			_btn.textContent = el.textContent;

			nav.appendChild(_btn);

			_btn.addEventListener('click', () => {

				Array.from(item, (elem,inx) => {

					elem.classList.toggle('is-show', inx === index);
					btn[inx].classList.toggle('is-active', inx === index);

				});

			});

			el.remove();

		});

		nav.classList.add('tabs__nav');

		btn = nav.querySelectorAll('.tabs__nav-btn');

		item[0].classList.add('is-show');
		btn[0].classList.add('is-active');

		tab.insertBefore(nav, item[0]);

	});

})(document.querySelectorAll('.tabs'));

((elem)=>{

	"use strict";

	if(elem) {

		document.body.addEventListener('click', event => {

			if(event.target.closest('.text-short__btn')){

				event.target.closest('.text-short').classList.toggle('is-open');

			}

		});

	}

})(document.querySelector('.text-short'));

( total => {

	if(!total) {

		return;

	}

	const wishlistCheckedList = document.querySelectorAll('.wishlist-checked-list');

	const setSelected = () => {

		let list = [];
		const elems = document.querySelectorAll('.wishlist-checkbox');

		Array.from(elems, el => {

			const input = el.querySelector('input');

			if(input.checked) {

				list.push(input.value);

			}

		});

		total.textContent = list.length;

		Array.from(wishlistCheckedList, input => input.value = list);

		checkedALL.checked = list.length === elems.length;

	};

	document.body.addEventListener('change', event => {

		if(event.target.closest('.wishlist-checkbox')) {

			setSelected();

		}

	});

	// выбрать все

	const checkedALL = document.querySelector('.wishlist-checked-all');

	checkedALL.addEventListener('change', () => {

		Array.from(document.querySelectorAll('.wishlist-checkbox'), el => el.querySelector('input').checked = checkedALL.checked);

		setSelected();

	});

})(document.querySelector('.wishlist-checked-total__value'));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzLmpzIiwiYXJ0aWNsZS1ldmVudHMuanMiLCJhc2suanMiLCJidXktb25lLWNsaWNrLmpzIiwiY2F0YWxvZy1iYXIuanMiLCJjYXRhbG9nLWZpbHRlci10YWdzLmpzIiwiY2hlY2tib3gtb25seS5qcyIsImNpdHkuanMiLCJjbHViLmpzIiwiY29uZmlybS1waG9uZS5qcyIsImZpbHRlci5qcyIsImZvcm0tZmFzdC1yZXN1bHQuanMiLCJmb3JtLmpzIiwiZ2FsbGVyeS5qcyIsImhlYWRlci5qcyIsImxpdmVzZWFyY2guanMiLCJsay5qcyIsImxvZ2luLmpzIiwibWFzay5qcyIsIm1lbnUuanMiLCJtb2RhbC5qcyIsInByb2NlZHVyZS5qcyIsInByb2R1Y2Vycy5qcyIsInByb2R1Y3QuanMiLCJxdWFudGl0eS5qcyIsInJldmlldy5qcyIsInNjcm9sbC1vYnNlcnZlci5qcyIsInNlYXJjaC5qcyIsInNlbGVjdC5qcyIsInNlcnZpY2UuanMiLCJzbGlkZXIuanMiLCJzbXMuanMiLCJzb3J0LmpzIiwic3dpcGVyLmpzIiwidGFiLmpzIiwidGV4dC1zaG9ydC5qcyIsIndpc2hsaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDelJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25IQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJfanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgVVRGLThcclxuXHJcbsKpIGtvdnJpZ2luXHJcbtCS0YHQtSDQv9GA0LDQstCwINGA0LDQt9GA0LXRiNC10L3Ri1xyXG7QutGA0LDRgdC40LLRi9C5INC00LjQt9Cw0LnQvSDQtNC+0LvQttC10L0g0LjQvNC10YLRjCDQutGA0LDRgdC40LLRi9C5INC60L7QtMKuXHJcblxyXG5odHRwczovL2dpdGh1Yi5jb20vaHRtbHBsdXNjc3MvXHJcblxyXG4qL1xyXG5cclxuKCgpID0+IHtcclxuXHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cdHdpbmRvdy5DRyA9IHdpbmRvdy5DRyB8fCB7fTtcclxuXHRDRy5icmVha1BvaW50cyA9IDEyNTA7XHJcblx0Q0cuaGVpZ2h0SGVhZGVyRml4ZWQgPSAxMTg7XHJcblx0Q0cucmVzaXplVGltZW91dCA9IG51bGw7XHJcblx0Q0cud2luZG93V2lkdGhPTGQgPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xyXG5cclxuXHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHtcclxuXHJcblx0XHRcdGlmICghQ0cucmVzaXplVGltZW91dCkge1xyXG5cclxuXHRcdFx0XHRDRy5yZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dCggKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdENHLnJlc2l6ZVRpbWVvdXQgPSBudWxsO1xyXG5cclxuXHRcdFx0XHRcdGlmKENHLndpbmRvd1dpZHRoT0xkICE9PSB3aW5kb3cuaW5uZXJXaWR0aCkge1xyXG5cclxuXHRcdFx0XHRcdFx0Q0cud2luZG93V2lkdGhPTGQgPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHJcblx0XHRcdFx0XHRcdFB1YlN1Yi5wdWJsaXNoKCd3aW5kb3dXaWR0aFJlc2l6ZScpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSwgMTAwKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IFB1YlN1Yi5wdWJsaXNoKCd3aW5kb3dTY3JvbGwnKSkpO1xyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiBQdWJTdWIucHVibGlzaCgnRE9NQ29udGVudExvYWRlZCcpKTtcclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4gUHViU3ViLnB1Ymxpc2goJ3BhZ2VMb2FkJykpO1xyXG5cclxuXHQvLyDQvtCx0YDQsNCx0L7RgtGH0LjQuiDQsNC90LjQvNCw0YbQuNC5XHJcblx0Q0cuY3NzQW5pbWF0aW9uID0gYSA9PiB7dmFyIGIsYyxkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjc3NhbmltYXRpb25cIik7c3dpdGNoKGEpe2Nhc2UnYW5pbWF0aW9uJzpiPXtcImFuaW1hdGlvblwiOlwiYW5pbWF0aW9uZW5kXCIsXCJPQW5pbWF0aW9uXCI6XCJvQW5pbWF0aW9uRW5kXCIsXCJNb3pBbmltYXRpb25cIjpcImFuaW1hdGlvbmVuZFwiLFwiV2Via2l0QW5pbWF0aW9uXCI6XCJ3ZWJraXRBbmltYXRpb25FbmRcIn07YnJlYWs7Y2FzZSd0cmFuc2l0aW9uJzpiPXtcInRyYW5zaXRpb25cIjpcInRyYW5zaXRpb25lbmRcIixcIk9UcmFuc2l0aW9uXCI6XCJvVHJhbnNpdGlvbkVuZFwiLFwiTW96VHJhbnNpdGlvblwiOlwidHJhbnNpdGlvbmVuZFwiLFwiV2Via2l0VHJhbnNpdGlvblwiOlwid2Via2l0VHJhbnNpdGlvbkVuZFwifX1mb3IoYyBpbiBiKWlmKGQuc3R5bGVbY10hPT11bmRlZmluZWQpcmV0dXJuIGJbY119O1xyXG5cclxuXHQvLyBEZXRlcm1pbmUgaWYgYW4gZWxlbWVudCBpcyBpbiB0aGUgdmlzaWJsZSB2aWV3cG9ydFxyXG5cdENHLmlzSW5WaWV3cG9ydCA9IGVsID0+IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCA+PSAwICYmIGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSA8PSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG5cdC8vINC+0YLQtNC10LvRj9C10Lwg0YLRi9GB0Y/Rh9C4XHJcblx0Q0cuc2VwTnVtYmVyID0gc3RyID0+IHtcclxuXHRcdHN0ciA9IHBhcnNlSW50KHN0ciwgMTApLnRvU3RyaW5nKCk7XHJcblx0XHRyZXR1cm4gc3RyLnJlcGxhY2UoLyhcXGQpKD89KFxcZFxcZFxcZCkrKFteXFxkXXwkKSkvZywgJyQxICcpO1xyXG5cdH07XHJcblxyXG5cdC8vINGB0LrQu9C10LjQstCw0LXQvCDRgtGL0YHRj9GH0LhcclxuXHRDRy5zdHJUb051bWJlciA9IHN0ciA9PiBwYXJzZUludChzdHIucmVwbGFjZSgvXFxzKy9nLCcnKSwgMTApO1xyXG5cclxufSkoKTsiLCIvLyDQv9C10YDQtdC60LvRjtGH0LXQvdC40LUgYXJ0aWNsZUlEXHJcblxyXG4oKGFydGljbGVJRCkgPT4ge1xyXG5cclxuXHRpZighYXJ0aWNsZUlEKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGNvbnN0IGFydGljbGVpZEV2ZW50cyA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuYXJ0aWNsZWlkLWV2ZW50cycpO1xyXG5cclxuXHRcdGlmKGFydGljbGVpZEV2ZW50cyl7XHJcblxyXG5cdFx0XHRjb25zdCBjb250cm9sID0gZXZlbnQudGFyZ2V0LFxyXG5cdFx0XHRcdCAgaW5wdXRJRCA9IGFydGljbGVpZEV2ZW50cy5xdWVyeVNlbGVjdG9yKCcuYXJ0aWNsZWlkLWV2ZW50c19fdmFsdWUnKSxcclxuXHRcdFx0XHQgIHN0b3JlSUQgPSBhcnRpY2xlaWRFdmVudHMucXVlcnlTZWxlY3RvcignLmFydGljbGVpZC1ldmVudHNfX3N0b3JlaWQnKSxcclxuXHRcdFx0XHQgIHNhbGUgPSBhcnRpY2xlaWRFdmVudHMucXVlcnlTZWxlY3RvcignLmFydGljbGVpZC1ldmVudHNfX3NhbGUnKSxcclxuXHRcdFx0XHQgIHNrdSA9IGFydGljbGVpZEV2ZW50cy5xdWVyeVNlbGVjdG9yKCcuYXJ0aWNsZWlkLWV2ZW50c19fc2t1LXZhbHVlJyksXHJcblx0XHRcdFx0ICBzdG9jayA9IGFydGljbGVpZEV2ZW50cy5xdWVyeVNlbGVjdG9yKCcuYXJ0aWNsZWlkLWV2ZW50c19fYXZhaWxhYmlsaXR5LXZhbHVlJyksXHJcblx0XHRcdFx0ICBidG4gPSBhcnRpY2xlaWRFdmVudHMucXVlcnlTZWxlY3RvcignLmFydGljbGVpZC1ldmVudHNfX2J0bicpLFxyXG5cdFx0XHRcdCAgcHJpY2UgPSBhcnRpY2xlaWRFdmVudHMucXVlcnlTZWxlY3RvcignLmFydGljbGVpZC1ldmVudHNfX3ByaWNlLXZhbHVlJyksXHJcblx0XHRcdFx0ICBwcmljZU9sZCA9IGFydGljbGVpZEV2ZW50cy5xdWVyeVNlbGVjdG9yKCcuYXJ0aWNsZWlkLWV2ZW50c19fb2xkLXByaWNlLXZhbHVlJyk7XHJcblxyXG5cdFx0XHRpbnB1dElELnZhbHVlID0gY29udHJvbC52YWx1ZTtcclxuXHRcdFx0c3RvcmVJRC52YWx1ZSA9IGNvbnRyb2wuZ2V0QXR0cmlidXRlKCdkYXRhLXN0b3JlaWQnKSA/IGNvbnRyb2wuZ2V0QXR0cmlidXRlKCdkYXRhLXN0b3JlaWQnKSA6IDE7XHJcblx0XHRcdHByaWNlLnRleHRDb250ZW50ID0gY29udHJvbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2UnKTtcclxuXHJcblx0XHRcdGlmKHByaWNlT2xkKSB7XHJcblxyXG5cdFx0XHRcdGlmKGNvbnRyb2wuZ2V0QXR0cmlidXRlKCdkYXRhLW9sZC1wcmljZScpKSB7XHJcblxyXG5cdFx0XHRcdFx0cHJpY2VPbGQucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRwcmljZU9sZC50ZXh0Q29udGVudCA9IGNvbnRyb2wuZ2V0QXR0cmlidXRlKCdkYXRhLW9sZC1wcmljZScpO1xyXG5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0cHJpY2VPbGQucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKHNhbGUpIHtcclxuXHJcblx0XHRcdFx0aWYoY29udHJvbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2FsZScpKSB7XHJcblxyXG5cdFx0XHRcdFx0c2FsZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHRcdFx0XHRcdHNhbGUudGV4dENvbnRlbnQgPSBjb250cm9sLmdldEF0dHJpYnV0ZSgnZGF0YS1zYWxlJyk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRzYWxlLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZihjb250cm9sLmdldEF0dHJpYnV0ZSgnZGF0YS1pbi1iYXNrZXQnKSkge1xyXG5cclxuXHRcdFx0XHRidG4ucXVlcnlTZWxlY3RvcignYScpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHRcdFx0XHRidG4ucXVlcnlTZWxlY3RvcignYnV0dG9uJykuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHJcblx0XHRcdFx0YnRuLnF1ZXJ5U2VsZWN0b3IoJ2EnKS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblx0XHRcdFx0YnRuLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKHN0b2NrKSB7XHJcblxyXG5cdFx0XHRcdHN0b2NrLnRleHRDb250ZW50ID0gY29udHJvbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RvY2snKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKHNrdSkge1xyXG5cclxuXHRcdFx0XHRza3UudGV4dENvbnRlbnQgPSBjb250cm9sLmdldEF0dHJpYnV0ZSgnZGF0YS1za3UnKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFydGljbGVpZC1ldmVudHMnKSk7IiwiKChhc2spID0+IHtcclxuXHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cdGlmKCFhc2subGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcbi8qXHJcblx0bGV0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIobXV0YXRpb25SZWNvcmRzID0+IHtcclxuXHJcblx0XHRjb25zdCB0ID0gbXV0YXRpb25SZWNvcmRzWzBdLnRhcmdldCxcclxuXHRcdFx0ICByZWN0ID0gdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcblx0XHRjb25zb2xlLmxvZyhyZWN0LmxlZnQgPiB3aW5kb3cuaW5uZXJXaWR0aCAtIHJlY3QucmlnaHQpO1xyXG5cclxuXHRcdGlmKHQub3Blbikge1xyXG5cclxuXHRcdFx0Y29uc3QgaW5uZXIgPSB0LnF1ZXJ5U2VsZWN0b3IoJy5hc2tfX2lubmVyJyk7XHJcblxyXG5cdFx0XHRpZihyZWN0LmxlZnQgPiB3aW5kb3cuaW5uZXJXaWR0aCAtIHJlY3QucmlnaHQpIHtcclxuXHJcblx0XHRcdFx0Ly8g0L/RgNCw0LLQtdC1XHJcblxyXG5cdFx0XHRcdGlubmVyLnN0eWxlLmxlZnQgPSAnYXV0byc7XHJcblx0XHRcdFx0aW5uZXIuc3R5bGUucmlnaHQgPSAwO1xyXG5cdFx0XHRcdGlubmVyLnN0eWxlLndpZHRoID0gcmVjdC5sZWZ0ICsgJ3B4JztcclxuXHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblxyXG5cdFx0XHRcdC8vINC70LXQstC10LVcclxuXHJcblx0XHRcdFx0aW5uZXIuc3R5bGUucmlnaHQgPSAnYXV0byc7XHJcblx0XHRcdFx0aW5uZXIuc3R5bGUubGVmdCA9IDA7XHJcblx0XHRcdFx0aW5uZXIuc3R5bGUud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAtIHJlY3QucmlnaHQgKyAncHgnO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG5cdEFycmF5LmZyb20oYXNrLCBlbCA9PiB7XHJcblxyXG5cdFx0b2JzZXJ2ZXIub2JzZXJ2ZShlbCwge1xyXG5cclxuXHRcdFx0YXR0cmlidXRlcyA6IHRydWVcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG5cdGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4ge1xyXG5cclxuXHRcdEFycmF5LmZyb20oYXNrLCBlbCA9PiB7XHJcblxyXG5cdFx0XHRpZihldnQudGFyZ2V0LmNsb3Nlc3QoJy5hc2snKSAhPT0gZWwpe1xyXG5cclxuXHRcdFx0XHRlbC5vcGVuID0gZmFsc2U7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG4qL1xyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXNrJykpOyIsIlxyXG4vLyDQutC90L7Qv9C60LAg0LIg0L7QtNC40L0g0LrQu9C40LpcclxuXHJcbigoZm9ybUJ1eU9uZUNsaWNrKSA9PiB7XHJcblxyXG5cdGlmKCFmb3JtQnV5T25lQ2xpY2spIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0ZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRpZihldmVudC50YXJnZXQuY2xvc2VzdCgnLmJ1eS1vbmUtY2xpY2snKSl7XHJcblxyXG5cdFx0XHRjb25zdCBjYXJkID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5hcnRpY2xlaWQtZXZlbnRzJyksXHJcblx0XHRcdFx0ICBpZCA9IGNhcmQucXVlcnlTZWxlY3RvcignLmFydGljbGVpZC1ldmVudHNfX2lkJyksXHJcblx0XHRcdFx0ICBzdG9yZWlkID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuYXJ0aWNsZWlkLWV2ZW50c19fc3RvcmVpZCcpLFxyXG5cdFx0XHRcdCAgYXJ0aWNsZWlkID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuYXJ0aWNsZWlkLWV2ZW50c19fdmFsdWUnKSxcclxuXHRcdFx0XHQgIGNhdCA9IGNhcmQucXVlcnlTZWxlY3RvcignLmFydGljbGVpZC1ldmVudHNfX2NhdCcpLFxyXG5cdFx0XHRcdCAgdGl0bGUgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5hcnRpY2xlaWQtZXZlbnRzX190aXRsZScpLFxyXG5cdFx0XHRcdCAgcHJpY2UgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5hcnRpY2xlaWQtZXZlbnRzX19wcmljZS12YWx1ZScpLFxyXG5cdFx0XHRcdCAgaW1nID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuYXJ0aWNsZWlkLWV2ZW50c19faW1nJyk7XHJcblxyXG5cdFx0XHRmb3JtQnV5T25lQ2xpY2sucXVlcnlTZWxlY3RvcignW25hbWU9XCJpZFwiXScpLnZhbHVlID0gaWQudmFsdWU7XHJcblx0XHRcdGZvcm1CdXlPbmVDbGljay5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInN0b3JlaWRcIl0nKS52YWx1ZSA9IHN0b3JlaWQgPyBzdG9yZWlkLnZhbHVlIDogJyc7XHJcblx0XHRcdGZvcm1CdXlPbmVDbGljay5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImFydGljbGVpZFwiXScpLnZhbHVlID0gYXJ0aWNsZWlkID8gYXJ0aWNsZWlkLnZhbHVlIDogJyc7XHJcblxyXG5cdFx0XHRmb3JtQnV5T25lQ2xpY2sucXVlcnlTZWxlY3RvcignLmNhcmQtaXRlbV9faW1nJykuaW5uZXJIVE1MID0gaW1nLmlubmVySFRNTDtcclxuXHRcdFx0Zm9ybUJ1eU9uZUNsaWNrLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWl0ZW1fX2NhdCcpLnRleHRDb250ZW50ID0gY2F0LnRleHRDb250ZW50O1xyXG5cdFx0XHRmb3JtQnV5T25lQ2xpY2sucXVlcnlTZWxlY3RvcignLmNhcmQtaXRlbV9fdGl0bGUnKS50ZXh0Q29udGVudCA9IHRpdGxlLnRleHRDb250ZW50O1xyXG5cdFx0XHRmb3JtQnV5T25lQ2xpY2sucXVlcnlTZWxlY3RvcignLmNhcmQtaXRlbV9fcHJpY2UnKS50ZXh0Q29udGVudCA9IHByaWNlLnRleHRDb250ZW50O1xyXG5cclxuXHRcdFx0Q0cubW9kYWxTaG93KCdidXktb25lLWNsaWNrJyk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWJ1eS1vbmUtY2xpY2tfX3Byb2R1Y3QnKSk7IiwiKCBmb3JtID0+IHtcclxuXHJcblx0aWYoIWZvcm0pIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcblxyXG5cdFx0ZmV0Y2goZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpLCB7XHJcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdFx0J1gtUmVxdWVzdGVkLVdpdGgnIDogJ1hNTEh0dHBSZXF1ZXN0J1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRib2R5OiBuZXcgRm9ybURhdGEoZm9ybSlcclxuXHRcdH0pXHJcblx0XHQudGhlbiggcmVzcG9uc2UgPT4ge1xyXG5cclxuXHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0uY2F0YWxvZy1iYXInKSk7IiwiKCB0YWdzID0+IHtcclxuXHJcblx0aWYoIXRhZ3MubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdEFycmF5LmZyb20odGFncywgZm9ybSA9PiB7XHJcblxyXG5cdFx0Y29uc3QgYnRuID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuY2F0YWxvZy1maWx0ZXItdGFnc19fc2hvdy1hbGwnKSxcclxuXHRcdFx0ICBpdGVtcyA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLmNhdGFsb2ctZmlsdGVyLXRhZ3NfX2l0ZW0nKTtcclxuXHJcblx0XHRpZighYnRuKSB7XHJcblxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcblx0XHRcdGJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRBcnJheS5mcm9tKGl0ZW1zLCBpdGVtID0+XHJcblx0XHRcdFx0aXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vINC+0YLQv9GA0LDQstC60LAg0YTQuNC70YzRgtGA0LBcclxuXHJcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuXHJcblx0XHRcdGZvcm0uY2xhc3NMaXN0LmFkZCgnaXMtbG9hZGluZycpO1xyXG5cclxuXHRcdFx0ZmV0Y2goZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpLCB7XHJcblx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdFx0J1gtUmVxdWVzdGVkLVdpdGgnIDogJ1hNTEh0dHBSZXF1ZXN0J1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Ym9keTogbmV3IEZvcm1EYXRhKGZvcm0pXHJcblx0XHRcdH0pXHJcblx0XHRcdC50aGVuKCByZXNwb25zZSA9PiB7XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuXHRcdFx0XHRmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWxvYWRpbmcnKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRhbG9nLWZpbHRlci10YWdzJykpOyIsIlxyXG4oIGVsZW0gPT4ge1xyXG5cclxuXHRcInVzZSBzdHJpY3RcIjtcclxuXHJcblx0QXJyYXkuZnJvbShlbGVtLCBlbCA9PiB7XHJcblxyXG5cdFx0Y29uc3QgaW5wdXQgPSBlbC5xdWVyeVNlbGVjdG9yKCcuY2hlY2tib3gtb25seV9faW5wdXQnKSxcclxuXHRcdFx0ICB0ZXh0ID0gZWwucXVlcnlTZWxlY3RvcignLmNoZWNrYm94LW9ubHlfX2NoZWNrLXRleHQnKTtcclxuXHJcblx0XHR0ZXh0ICYmIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuXHJcblx0XHRcdGlmKGlucHV0LmNoZWNrZWQpIHtcclxuXHJcblx0XHRcdFx0dGV4dC5jbGFzc0xpc3QuYWRkKCdpcy1zaG93Jyk7XHJcblxyXG5cdFx0XHRcdHNldFRpbWVvdXQoICgpID0+IHRleHQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtc2hvdycpLCAzMDApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tib3gtb25seScpICk7IiwiXHJcbi8vINC/0L7QtNGC0LLQtdGA0LbQtNC10L3QuNC1INCz0L7RgNC+0LTQsFxyXG5cclxuKCBmb3JtID0+IHtcclxuXHJcblx0aWYoIWZvcm0pIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Ly8g0L/QvtC60LDQt9Cw0YLRjCDRhNC+0YDQvNGDXHJcblxyXG5cdHNldFRpbWVvdXQoICgpID0+IGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpLCAxMDAwMCk7XHJcblxyXG5cdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0Zm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbi8vXHRcdENvb2tpZXMuc2V0KCd1Y2l0eScsIGZvcm0uZWxlbWVudHMuY2l0eS52YWx1ZSk7XHJcblxyXG5cdFx0ZmV0Y2goZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpLCB7XHJcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdFx0J1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXHJcblx0XHRcdH0sXHJcblx0XHRcdGJvZHk6IG5ldyBGb3JtRGF0YShmb3JtKVxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY2l0eS1jb25maXJtJykpO1xyXG5cclxuXHJcbi8vINC/0L7QuNGB0Log0Lgg0LLRi9Cx0L7RgCDQs9C+0YDQvtC00LBcclxuXHJcbiggZm9ybSA9PiB7XHJcblxyXG5cdGlmKCFmb3JtKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGNvbnN0IGlucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZm9ybS1jaXR5X19pbnB1dCcpLFxyXG5cdFx0ICByZXN1bHQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNpdHlfX3Jlc3VsdCcpO1xyXG5cclxuXHRpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRpZihpbnB1dC52YWx1ZS5sZW5ndGggPiAzICYmIGV2ZW50LmtleSAhPT0gJ2VudGVyJyl7XHJcblxyXG5cdFx0XHRmb3JtLmNsYXNzTGlzdC5hZGQoJ2lzLWxvYWRpbmcnKTtcclxuXHJcblx0XHRcdGZldGNoKGZvcm0uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKSwge1xyXG5cdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHRcdCdYLVJlcXVlc3RlZC1XaXRoJyA6ICdYTUxIdHRwUmVxdWVzdCdcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGJvZHk6IG5ldyBGb3JtRGF0YShmb3JtKVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQudGhlbiggcmVzcG9uc2UgPT4ge1xyXG5cclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcblx0XHRcdFx0cmVzdWx0LmlubmVySFRNTCA9IHJlc3BvbnNlLnRleHQoKTtcclxuXHRcdFx0XHRmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWxvYWRpbmcnKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG5cdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1jaXR5JykpO1xyXG5cclxuXHJcblxyXG4vLyDQv9GD0L3QutGC0Ysg0LLRi9C00LDRh9C4INC4INC/0L7RgdGC0LDQvNCw0YLRi1xyXG5cclxuKCBmb3JtID0+IHtcclxuXHJcblx0aWYoIWZvcm0pIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Y29uc3QgbWFwID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcubW9kYWwtcG9pbnRzX19tYXAnKSxcclxuXHRcdCAgaW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1wb2ludHNfX2lucHV0JyksXHJcblx0XHQgIHJlc3VsdCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLm1vZGFsLXBvaW50c19fcmVzdWx0Jyk7XHJcblxyXG5cdGNvbnN0IGxvYWRNYXAgPSBjYWxsYmFjayA9PiB7XHJcblxyXG4vLyDQt9Cw0LPRgNGD0LbQsNC10LwgQVBJXHJcblxyXG5cdFx0aWYgKHR5cGVvZiB5bWFwcyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuXHJcblx0XHRcdGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG5cclxuXHRcdFx0c2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcclxuXHRcdFx0c2NyaXB0LmFzeW5jID0gdHJ1ZTtcclxuXHRcdFx0c2NyaXB0LnNyYyA9ICdodHRwczovL2FwaS1tYXBzLnlhbmRleC5ydS8yLjEvP2xhbmc9cnVfUlUnO1xyXG5cclxuXHRcdFx0c2NyaXB0Lm9ubG9hZCA9ICgpID0+IHtcclxuXHJcblx0XHRcdFx0eW1hcHMucmVhZHkoY2FsbGJhY2spO1xyXG4vLyDQn9GA0LjQvNC10YAg0YDQtdCw0LvQuNC30LDRhtC40Lgg0LHQvtC60L7QstC+0Lkg0L/QsNC90LXQu9C4INC90LAg0L7RgdC90L7QstC1INC90LDRgdC70LXQtNC+0LLQsNC90LjRjyDQvtGCIGNvbGxlY3Rpb24uSXRlbS5cclxuLy8g0JHQvtC60L7QstCw0Y8g0L/QsNC90LXQu9GMINC+0YLQvtCx0YDQsNC20LDQtdGCINC40L3RhNC+0YDQvNCw0YbQuNGOLCDQutC+0YLQvtGA0YPRjiDQvNGLINC10Lkg0L/QtdGA0LXQtNCw0LvQuC5cclxueW1hcHMubW9kdWxlcy5kZWZpbmUoJ1BhbmVsJywgW1xyXG4gICAgJ3V0aWwuYXVnbWVudCcsXHJcbiAgICAnY29sbGVjdGlvbi5JdGVtJ1xyXG5dLCBmdW5jdGlvbiAocHJvdmlkZSwgYXVnbWVudCwgaXRlbSkge1xyXG4gICAgLy8g0KHQvtC30LTQsNC10Lwg0YHQvtCx0YHRgtCy0LXQvdC90YvQuSDQutC70LDRgdGBLlxyXG4gICAgdmFyIFBhbmVsID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgICAgICBQYW5lbC5zdXBlcmNsYXNzLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgb3B0aW9ucyk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vINCYINC90LDRgdC70LXQtNGD0LXQvCDQtdCz0L4g0L7RgiBjb2xsZWN0aW9uLkl0ZW0uXHJcbiAgICBhdWdtZW50KFBhbmVsLCBpdGVtLCB7XHJcbiAgICAgICAgb25BZGRUb01hcDogZnVuY3Rpb24gKG1hcCkge1xyXG4gICAgICAgICAgICBQYW5lbC5zdXBlcmNsYXNzLm9uQWRkVG9NYXAuY2FsbCh0aGlzLCBtYXApO1xyXG4gICAgICAgICAgICB0aGlzLmdldFBhcmVudCgpLmdldENoaWxkRWxlbWVudCh0aGlzKS50aGVuKHRoaXMuX29uR2V0Q2hpbGRFbGVtZW50LCB0aGlzKTtcclxuICAgICAgICAgICAgLy8g0JTQvtCx0LDQstC40Lwg0L7RgtGB0YLRg9C/0Ysg0L3QsCDQutCw0YDRgtGDLlxyXG4gICAgICAgICAgICAvLyDQntGC0YHRgtGD0L/RiyDQvNC+0LPRg9GCINGD0YfQuNGC0YvQstCw0YLRjNGB0Y8g0L/RgNC4INGD0YHRgtCw0L3QvtCy0LrQtSDRgtC10LrRg9GJ0LXQuSDQstC40LTQuNC80L7QuSDQvtCx0LvQsNGB0YLQuCDQutCw0YDRgtGLLFxyXG4gICAgICAgICAgICAvLyDRh9GC0L7QsdGLINC00L7QsdC40YLRjNGB0Y8g0L3QsNC40LvRg9GH0YjQtdCz0L4g0L7RgtC+0LHRgNCw0LbQtdC90LjRjyDQtNCw0L3QvdGL0YUg0L3QsCDQutCw0YDRgtC1LlxyXG4gICAgICAgICAgICBtYXAubWFyZ2luLmFkZEFyZWEoe1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMjUwcHgnLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJSdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBvblJlbW92ZUZyb21NYXA6IGZ1bmN0aW9uIChvbGRNYXApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuXyRjb250cm9sKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl8kY29udHJvbC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBQYW5lbC5zdXBlcmNsYXNzLm9uUmVtb3ZlRnJvbU1hcC5jYWxsKHRoaXMsIG9sZE1hcCk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgX29uR2V0Q2hpbGRFbGVtZW50OiBmdW5jdGlvbiAocGFyZW50RG9tQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIC8vINCh0L7Qt9C00LDQtdC8IEhUTUwt0Y3Qu9C10LzQtdC90YIg0YEg0YLQtdC60YHRgtC+0LwuXHJcbiAgICAgICAgICAgIC8vINCf0L4t0YPQvNC+0LvRh9Cw0L3QuNGOIEhUTUwt0Y3Qu9C10LzQtdC90YIg0YHQutGA0YvRgi5cclxuICAgICAgICAgICAgdGhpcy5fJGNvbnRyb2wgPSAkKCc8ZGl2IGNsYXNzPVwiY3VzdG9tQ29udHJvbFwiPjxkaXYgY2xhc3M9XCJjb250ZW50XCI+PC9kaXY+PGRpdiBjbGFzcz1cImNsb3NlQnV0dG9uXCI+PC9kaXY+PC9kaXY+JykuYXBwZW5kVG8ocGFyZW50RG9tQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgdGhpcy5fJGNvbnRlbnQgPSAkKCcuY29udGVudCcpO1xyXG4gICAgICAgICAgICAvLyDQn9GA0Lgg0LrQu9C40LrQtSDQv9C+INC60YDQtdGB0YLQuNC60YMg0LHRg9C00LXQvCDRgdC60YDRi9Cy0LDRgtGMINC/0LDQvdC10LvRjC5cclxuICAgICAgICAgICAgJCgnLmNsb3NlQnV0dG9uJykub24oJ2NsaWNrJywgdGhpcy5fb25DbG9zZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBfb25DbG9zZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKCcuY3VzdG9tQ29udHJvbCcpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDQnNC10YLQvtC0INC30LDQtNCw0L3QuNGPINC60L7QvdGC0LXQvdGC0LAg0L/QsNC90LXQu9C4LlxyXG4gICAgICAgIHNldENvbnRlbnQ6IGZ1bmN0aW9uICh0ZXh0KSB7XHJcbiAgICAgICAgICAgIC8vINCf0YDQuCDQt9Cw0LTQsNC90LjQuCDQutC+0L3RgtC10L3RgtCwINCx0YPQtNC10Lwg0L/QvtC60LDQt9GL0LLQsNGC0Ywg0L/QsNC90LXQu9GMLlxyXG4gICAgICAgICAgICB0aGlzLl8kY29udHJvbC5jc3MoJ2Rpc3BsYXknLCAnZmxleCcpO1xyXG4gICAgICAgICAgICB0aGlzLl8kY29udGVudC5odG1sKHRleHQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHByb3ZpZGUoUGFuZWwpO1xyXG59KTtcclxuXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdHltYXBzLnJlYWR5KGNhbGxiYWNrKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcbi8vINGB0LvRg9GI0LDQtdC8INC+0YLQutGA0YvRgtC40LUg0LzQvtC00LDQu9C60LhcclxuXHJcblx0bGV0IG15TWFwO1xyXG5cclxuXHRQdWJTdWIuc3Vic2NyaWJlKCdtb2RhbFNob3cnLCAoLi4uZGF0YSkgPT4ge1xyXG5cclxuXHRcdGlmKGRhdGFbMV0gPT09ICdwb2ludHMnKXtcclxuXHJcblx0XHRcdGlmIChteU1hcCkge1xyXG5cclxuXHRcdFx0XHRteU1hcC5kZXN0cm95KCk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRsb2FkTWFwKCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCfQvdCw0LTQviDQv9C10YDQtdC00LDRgtGMINGC0L7Rh9C60LgnKTtcclxuXHJcbi8vIGh0dHBzOi8veWFuZGV4LnJ1L2Rldi9tYXBzL2pzYm94LzIuMS9ldmVudF9yb2xsb3ZlclxyXG4vLyBodHRwczovL3lhbmRleC5ydS9kZXYvbWFwcy9qc2JveC8yLjEvY3VzdG9tX3NlYXJjaFxyXG4vL1xyXG5cclxuLy8g0LDQstGC0L4g0LfRg9C8INCy0YHQtdGFINGC0L7Rh9C10LpcclxuXHJcblx0XHRcdFx0bXlNYXAgPSBuZXcgeW1hcHMuTWFwKG1hcCwge1xyXG5cdFx0XHRcdFx0Y2VudGVyOiBbNTUuNzMzLCAzNy41ODhdLFxyXG5cdFx0XHRcdFx0em9vbTogMTAsXHJcblx0XHRcdFx0XHRjb250cm9sczogW11cclxuXHRcdFx0XHR9KTtcclxuXHJcbi8qXHRcdFx0XHRjb25zdCB6b29tQ29udHJvbCA9IG5ldyB5bWFwcy5jb250cm9sLlpvb21Db250cm9sKHtcclxuXHRcdFx0XHRcdG9wdGlvbnM6IHtcclxuXHRcdFx0XHRcdFx0dmlzaWJsZTogdHJ1ZVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRteU1hcC5jb250cm9scy5hZGQoem9vbUNvbnRyb2wpO1xyXG5cclxuXHRcdFx0XHRteU1hcC5iZWhhdmlvcnMuZGlzYWJsZSgnc2Nyb2xsWm9vbScpO1xyXG5cclxuXHRcdFx0XHRjb25zdCBteVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsobXlNYXAuZ2V0Q2VudGVyKCksIGZhbHNlLCBmYWxzZSk7XHJcblxyXG5cdFx0XHRcdG15TWFwLmdlb09iamVjdHMuYWRkKG15UGxhY2VtYXJrKTsqL1xyXG4gICAgLy8g0KHQvtC30LTQsNC00LjQvCDQutC+0L3RgtC10L3RgiDQtNC70Y8g0LzQtdGC0L7Qui5cclxuICAgIGNvbnN0IGZpcnN0T2ZmaWNlID0gJ9Cf0LXRgNCy0YvQuSDQv9C+0LvQvdC+0YbQtdC90L3Ri9C5INC+0YTQuNGBINCv0L3QtNC10LrRgdCwINC/0L7Rj9Cy0LjQu9GB0Y8g0LIg0JzQvtGB0LrQstC1INCyIDIwMDEg0LPQvtC00YMuICc7XHJcbiAgICBjb25zdCBzZWNvbmRPZmZpY2UgPSAnPGltZyBzdHlsZT1cIndpZHRoOiAxOTBweDtcIiBzcmM9XCJpbWcvb2ZmaWNlLmpwZWdcIj4nO1xyXG4gICAgY29uc3QgdGhpcmRPZmZpY2UgPSAnPGEgaHJlZj1cImh0dHBzOi8veWFuZGV4LnJ1L2NvbXBhbnkvY29udGFjdHMvbW9zY293L1wiPtCT0LvQsNCy0L3Ri9C5INC+0YTQuNGBINCv0L3QtNC10LrRgdCwPC9hPic7XHJcbiAgICAvLyDQodC+0LfQtNCw0LTQuNC8INC4INC00L7QsdCw0LLQuNC8INC/0LDQvdC10LvRjCDQvdCwINC60LDRgNGC0YMuXHJcbi8vICAgIGNvbnN0IHBhbmVsID0gbmV3IHltYXBzLlBhbmVsKCk7XHJcbi8vICAgIG15TWFwLmNvbnRyb2xzLmFkZChwYW5lbCwge1xyXG4vLyAgICAgICAgZmxvYXQ6ICdsZWZ0J1xyXG4vLyAgICB9KTtcclxuICAgIC8vINCh0L7Qt9C00LDQtNC40Lwg0LrQvtC70LvQtdC60YbQuNGOINCz0LXQvtC+0LHRitC10LrRgtC+0LIuXHJcbiAgICBjb25zdCBjb2xsZWN0aW9uID0gbmV3IHltYXBzLkdlb09iamVjdENvbGxlY3Rpb24obnVsbCwge1xyXG4gICAgICAgIC8vINCX0LDQv9GA0LXRgtC40Lwg0L/QvtGP0LLQu9C10L3QuNC1INCx0LDQu9GD0L3QsC5cclxuICAgICAgICBoYXNCYWxsb29uOiBmYWxzZSxcclxuICAgICAgICBpY29uQ29sb3I6ICcjZWQ0OTkzJ1xyXG4vLyAgICAgICAgaWNvbkNvbG9yOiAnIzQxOGViYydcclxuICAgIH0pO1xyXG4gICAgLy8g0JTQvtCx0LDQstC40Lwg0LPQtdC+0L7QsdGK0LXQutGC0Ysg0LIg0LrQvtC70LvQtdC60YbQuNGOLlxyXG4gICAgY29sbGVjdGlvblxyXG4gICAgICAgIC5hZGQobmV3IHltYXBzLlBsYWNlbWFyayhbNTUuNzMzODM4LCAzNy41ODgxMDBdLCB7XHJcbiAgICAgICAgICAgIGJhbGxvb25Db250ZW50OiB0aGlyZE9mZmljZVxyXG4gICAgICAgIH0pKVxyXG4gICAgICAgIC5hZGQobmV3IHltYXBzLlBsYWNlbWFyayhbNTUuNzU4MjQwLCAzNy42Nzg1MjNdLCB7XHJcbiAgICAgICAgICAgIGJhbGxvb25Db250ZW50OiBzZWNvbmRPZmZpY2VcclxuICAgICAgICB9KSlcclxuICAgICAgICAuYWRkKG5ldyB5bWFwcy5QbGFjZW1hcmsoWzU1LjY5Mzc4NCwgMzcuNTY0OTQyXSwge1xyXG4gICAgICAgICAgICBiYWxsb29uQ29udGVudDogZmlyc3RPZmZpY2VcclxuICAgICAgICB9KSk7XHJcbiAgICAvLyDQlNC+0LHQsNCy0LjQvCDQutC+0LvQu9C10LrRhtC40Y4g0L3QsCDQutCw0YDRgtGDLlxyXG4gICAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQoY29sbGVjdGlvbik7XHJcbiAgICAvLyDQn9C+0LTQv9C40YjQtdC80YHRjyDQvdCwINGB0L7QsdGL0YLQuNC1INC60LvQuNC60LAg0L/QviDQutC+0LvQu9C10LrRhtC40LguXHJcbiAgICBjb2xsZWN0aW9uLmV2ZW50cy5hZGQoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgIC8vINCf0L7Qu9GD0YfQuNC8INGB0YHRi9C70LrRgyDQvdCwINCz0LXQvtC+0LHRitC10LrRgiwg0L/QviDQutC+0YLQvtGA0L7QvNGDINC60LvQuNC60L3Rg9C7INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjC5cclxuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC5nZXQoJ3RhcmdldCcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhcmdldC5wcm9wZXJ0aWVzLmdldCgnYmFsbG9vbkNvbnRlbnQnKSlcclxuICAgICAgICAvLyDQl9Cw0LTQsNC00LjQvCDQutC+0L3RgtC10L3RgiDQsdC+0LrQvtCy0L7QuSDQv9Cw0L3QtdC70LguXHJcbi8vICAgICAgICBwYW5lbC5zZXRDb250ZW50KHRhcmdldC5wcm9wZXJ0aWVzLmdldCgnYmFsbG9vbkNvbnRlbnQnKSk7XHJcbiAgICAgICAgLy8g0J/QtdGA0LXQvNC10YHRgtC40Lwg0YbQtdC90YLRgCDQutCw0YDRgtGLINC/0L4g0LrQvtC+0YDQtNC40L3QsNGC0LDQvCDQvNC10YLQutC4INGBINGD0YfRkdGC0L7QvCDQt9Cw0LTQsNC90L3Ri9GFINC+0YLRgdGC0YPQv9C+0LIuXHJcbi8vICAgICAgICBteU1hcC5wYW5Ubyh0YXJnZXQuZ2VvbWV0cnkuZ2V0Q29vcmRpbmF0ZXMoKSwge3VzZU1hcE1hcmdpbjogdHJ1ZX0pO1xyXG4gICAgfSk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxuLy8g0LLQstC+0LQg0LIg0LjQvdC/0YPRgtC1XHJcblxyXG5cdGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGlmKGlucHV0LnZhbHVlLmxlbmd0aCA+IDMgJiYgZXZlbnQua2V5ICE9PSAnZW50ZXInKXtcclxuXHJcblx0XHRcdGZldGNoKGZvcm0uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKSwge1xyXG5cdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHRcdCdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Ym9keTogbmV3IEZvcm1EYXRhKGZvcm0pXHJcblx0XHRcdH0pXHJcblx0XHRcdC50aGVuKCByZXNwb25zZSA9PiB7XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuXHRcdFx0XHRyZXN1bHQuaW5uZXJIVE1MID0gcmVzcG9uc2UuanNvbigpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcblx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudCA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpKTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1wb2ludHMnKSk7IiwiXHJcbiggZm9ybSA9PiB7XHJcblxyXG5cdFwidXNlIHN0cmljdFwiO1xyXG5cclxuXHRpZighZm9ybSkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRjb25zdCBpbnB1dEdyb3VwVHJ1ZSA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZGlzYWJsZWQtdHJ1ZV0nKSxcclxuXHRcdCAgaW5wdXRHcm91cERpc2FibGVkID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1kaXNhYmxlZC1mYWxzZV0nKTtcclxuXHJcblx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0aWYoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgndHlwZScpID09PSAnZmlsZScpIHtcclxuXHJcblx0XHRcdGNvbnN0IGxhYmVsID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUsXHJcblx0XHRcdFx0ICBzbWFsbCA9IGxhYmVsLnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1maWxlc19fbGFiZWwgc21hbGwnKTtcclxuXHJcblx0XHRcdHNtYWxsLnRleHRDb250ZW50ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBncm91cCA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZ3JvdXAnKTtcclxuXHJcblx0XHRpZihncm91cCkge1xyXG5cclxuXHRcdFx0Ly8g0YDQsNC30LHQu9C+0LrQuNGA0YPQtdC8INC60L7RgtC+0YDRi9C1INGB0L7QstC/0LDQu9C4XHJcblx0XHRcdEFycmF5LmZyb20oaW5wdXRHcm91cERpc2FibGVkLCBpbnB1dCA9PiB7XHJcblxyXG5cdFx0XHRcdGlmKGlucHV0LmdldEF0dHJpYnV0ZSgnZGF0YS1kaXNhYmxlZC1mYWxzZScpID09PSBncm91cCkge1xyXG5cclxuXHRcdFx0XHRcdGlucHV0LmRpc2FibGVkID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Ly8g0LHQu9C+0LrQuNGA0YPQtdC8INC60L7RgtC+0YDRi9C1INGB0L7QstC/0LDQu9C4XHJcblx0XHRcdEFycmF5LmZyb20oaW5wdXRHcm91cFRydWUsIGlucHV0ID0+IHtcclxuXHJcblx0XHRcdFx0aWYoaW5wdXQuZ2V0QXR0cmlidXRlKCdkYXRhLWRpc2FibGVkLXRydWUnKSA9PT0gZ3JvdXApIHtcclxuXHJcblx0XHRcdFx0XHRpbnB1dC5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG59KSggZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY2x1YicpICk7IiwiXHJcbiggZWxlbXMgPT4ge1xyXG5cclxuXHRcInVzZSBzdHJpY3RcIjtcclxuXHJcblx0aWYoIWVsZW1zLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRBcnJheS5mcm9tKGVsZW1zLCBlbCA9PiB7XHJcblxyXG5cdFx0Y29uc3QgdXJsID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXVybCcpLFxyXG5cdFx0XHQgIGJ0biA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5jb25maXJtLXBob25lX19idG4nKSxcclxuXHRcdFx0ICBlcnJvciA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5jb25maXJtLXBob25lX19lcnJvcicpLFxyXG5cdFx0XHQgIGlucHV0ID0gZWwucXVlcnlTZWxlY3RvcignLmNvbmZpcm0tcGhvbmVfX2lucHV0Jyk7XHJcblxyXG5cdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0ZXJyb3IuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuXHRcdFx0aWYoaW5wdXQudmFsdWUubGVuZ3RoID09PSAwKSB7XHJcblxyXG5cdFx0XHRcdGVycm9yLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHRcdFx0XHRlcnJvci50ZXh0Q29udGVudCA9IGVycm9yLmdldEF0dHJpYnV0ZSgnZGF0YS1lbXB0eScpO1xyXG5cdFx0XHRcdGlucHV0LmZvY3VzKCk7XHJcblxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cclxuXHRcdFx0XHRjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cclxuXHRcdFx0XHRmb3JtRGF0YS5hcHBlbmQoJ2lkLWRpc2FibGVkJywgZWwuZ2V0QXR0cmlidXRlKCdpZCcpKTtcclxuXHRcdFx0XHRmb3JtRGF0YS5hcHBlbmQoJ3Bob25lJywgaW5wdXQudmFsdWUpO1xyXG5cclxuXHRcdFx0XHRmZXRjaCh1cmwsIHtcclxuXHRcdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdFx0XHQnWC1SZXF1ZXN0ZWQtV2l0aCcgOiAnWE1MSHR0cFJlcXVlc3QnXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0Ym9keTogZm9ybURhdGFcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC50aGVuKCByZXNwb25zZSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG5cclxuXHRcdFx0XHRcdGNvbnN0IG9iaiA9IHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKG9iaik7XHJcblxyXG5cdFx0XHRcdFx0aWYob2JqLmRvbmUpIHtcclxuXHJcblx0XHRcdFx0XHQvL1x0aW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtZm9ybS1jb25maXJtLXBob25lLXNtcycpLnNldHVwVGltZXIoKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aWYob2JqLmVycm9yKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRlcnJvci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRcdGVycm9yLnRleHRDb250ZW50ID0gb2JqLmVycm9yO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly9cdNCi0LXQu9C10YTQvtC9INGD0LbQtSDQtdGB0YLRjCDQsiDQsdCw0LfQtS4g0JfQsNCx0YvQu9C4INCw0LLRgtC+0YDQuNC30LjRgNC+0LLQsNGC0YzRgdGPP1xyXG5cdFx0XHRcdFx0XHQvL1x00J/QvtC00YLQstC10YDQtNC40YLQtSDQvdC+0LzQtdGAXHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KSggZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbmZpcm0tcGhvbmUnKSApOyIsIiggZmlsdGVyID0+IHtcclxuXHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cdGlmKCFmaWx0ZXIpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0bGV0IHdpbmRvd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcblx0Y29uc3QgYnRuU2hvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tZmlsdGVyLXNob3cnKSxcclxuXHRcdCAgYnRuQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLWZpbHRlci1oaWRlJyksXHJcblx0XHQgIGZsb2F0QnRuID0gZmlsdGVyLnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXJfX2Zsb2F0JyksXHJcblx0XHQgIGNvdW5lclRvdGFsID0gZmlsdGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWx0ZXJfX2NvdW5lcicpLFxyXG5cdFx0ICBjYXRhbG9nUmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0YWxvZ19faXRlbXMnKSxcclxuXHRcdCAgcGFnaW4gPSBjYXRhbG9nUmlnaHQucXVlcnlTZWxlY3RvcignLnBhZ2luJyksXHJcblx0XHQgIGxpc3RSZXN1bHQgPSBjYXRhbG9nUmlnaHQucXVlcnlTZWxlY3RvcignLmNhdGFsb2ctbGlzdCcpO1xyXG5cclxuXHRsZXQgc2V0VGltZW91dElEID0gbnVsbDtcclxuXHJcblx0Ly8g0LfQsNC/0YDQvtGBINC60L7Qu9C40YfQtdGB0YLQstCwINC4INC/0LXRgNC10YDQuNGB0L7QstC60LAg0YTQuNC70YzRgtGA0LBcclxuXHJcblx0ZmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRpZihldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCduYW1lJykpIHtcclxuXHJcblx0XHRcdC8vINCw0L3QuNC80LDRhtC40Y8g0LIg0YTQuNC70YzRgtGA0LVcclxuXHRcdFx0ZmlsdGVyLmNsYXNzTGlzdC5hZGQoJ2lzLWxvYWRpbmcnKTtcclxuXHRcdFx0ZmxvYXRCdG4uc3R5bGUudG9wID0gZXZlbnQudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIGZpbHRlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyAncHgnO1xyXG5cdFx0XHRmbG9hdEJ0bi5jbGFzc0xpc3QuYWRkKCdpcy1zaG93Jyk7XHJcblx0XHRcdGNsZWFyVGltZW91dChzZXRUaW1lb3V0SUQpO1xyXG5cclxuXHRcdFx0Ly8g0LfQsNC/0YDQvtGBXHJcblxyXG5cdFx0XHRmZXRjaChmaWx0ZXIuZ2V0QXR0cmlidXRlKCdhY3Rpb24nKSwge1xyXG5cdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHRcdCdDb250ZW50LVR5cGUnIDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHRcdFx0J1gtUmVxdWVzdGVkLVdpdGgnIDogJ1hNTEh0dHBSZXF1ZXN0J1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Ym9keTogbmV3IEZvcm1EYXRhKGZpbHRlcilcclxuXHRcdFx0fSlcclxuXHRcdFx0LnRoZW4oIHJlc3BvbnNlID0+IHtcclxuXHJcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG5cclxuXHRcdFx0XHRjb25zdCBvYmogPSByZXNwb25zZS5qc29uKCk7XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKG9iaik7XHJcblxyXG5cdFx0XHRcdGZpbHRlci5jbGFzc0xpc3QucmVtb3ZlKCdpcy1sb2FkaW5nJyk7XHJcblxyXG5cdFx0XHRcdEFycmF5LmZyb20oY291bmVyVG90YWwsIGVsID0+IGVsLnRleHRDb250ZW50ID0gb2JqLnRvdGFsKTtcclxuXHJcblx0XHRcdFx0c2V0VGltZW91dElEID0gc2V0VGltZW91dCggKCkgPT4gZmxvYXRCdG4uY2xhc3NMaXN0LnJlbW92ZSgnaXMtc2hvdycpLCA1MDAwKTtcclxuXHJcblx0XHRcdFx0aWYob2JqLmxpc3QpIHtcclxuXHJcblx0XHRcdFx0XHRsaXN0UmVzdWx0LmlubmVySFRNTCA9IG9iai5saXN0O1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmKG9iai5wYWdpbikge1xyXG5cclxuXHRcdFx0XHRcdHBhZ2luLmlubmVySFRNTCA9IG9iai5wYWdpbjtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcblx0Ly8g0L7RgtC/0YDQsNCy0LrQsFxyXG5cclxuXHRmaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0Y29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZmlsdGVyKTtcclxuXHJcblx0XHRmb3JtRGF0YS5hcHBlbmQoXCJyZXN1bHRcIiwgdHJ1ZSk7XHJcblx0XHRjYXRhbG9nUmlnaHQuY2xhc3NMaXN0LmFkZCgnaXMtbG9hZGluZycpO1xyXG5cclxuXHRcdGZldGNoKGZpbHRlciwge1xyXG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdCdYLVJlcXVlc3RlZC1XaXRoJyA6ICdYTUxIdHRwUmVxdWVzdCdcclxuXHRcdFx0fSxcclxuXHRcdFx0Ym9keTogZm9ybURhdGFcclxuXHRcdH0pXHJcblx0XHQudGhlbiggcmVzcG9uc2UgPT4ge1xyXG5cclxuXHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UudGV4dCgpKTtcclxuXHRcdFx0Y2F0YWxvZ1JpZ2h0LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWxvYWRpbmcnKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG5cdC8vINGE0LjQu9GM0YLRgNGD0LXQvCDQv9C+INC/0L7QuNGB0LrRgyDQndCw0LnRgtC4XHJcblxyXG5cdGNvbnN0IGZhc3RGaWx0ZXIgPSBmaWx0ZXIucXVlcnlTZWxlY3RvckFsbCgnLmZhc3QtZmlsdGVyJyk7XHJcblxyXG5cdEFycmF5LmZyb20oZmFzdEZpbHRlciwgZWwgPT4ge1xyXG5cclxuXHRcdGNvbnN0IGlucHV0ID0gZWwucXVlcnlTZWxlY3RvcignLmZhc3QtZmlsdGVyX19pbnB1dCcpLFxyXG5cdFx0XHQgIGl0ZW1zID0gZWwucXVlcnlTZWxlY3RvckFsbCgnLmZhc3QtZmlsdGVyX19pdGVtJyk7XHJcblxyXG5cdFx0aW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0Y29uc3QgdmFsID0gaW5wdXQudmFsdWUudG9Mb3dlckNhc2UoKTtcclxuXHJcblx0XHRcdGxldCBlbXB0eSA9IHRydWU7XHJcblxyXG5cdFx0XHRBcnJheS5mcm9tKGl0ZW1zLCBpdGVtID0+IHtcclxuXHJcblx0XHRcdFx0bGV0IHZhbHVlID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuZmFzdC1maWx0ZXJfX2l0ZW0tdmFsdWUnKTtcclxuXHJcblx0XHRcdFx0dmFsdWUgPSB2YWx1ZSA/IHZhbHVlLnRleHRDb250ZW50LnRyaW0oKSA6IGl0ZW0udGV4dENvbnRlbnQudHJpbSgpO1xyXG5cclxuXHRcdFx0XHRpdGVtLmNsYXNzTGlzdC50b2dnbGUoJ29ubHktaGl0X19oaWRlJywgdmFsdWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHZhbCkgIT09IDApO1xyXG5cclxuXHRcdFx0XHRpZihlbXB0eSAmJiB2YWx1ZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodmFsKSA9PT0gMCkge1xyXG5cclxuXHRcdFx0XHRcdGVtcHR5ID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Y29uc29sZS5sb2coZW1wdHkpO1xyXG5cclxuXHRcdFx0ZWwuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtbm90LWZvdW5kJywgZW1wdHkpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcblx0Ly8g0L/QvtC60LDQt9GL0LLQsNC10Lwg0YTQuNC70YzRgtGAINCyINC80L7QsdC40LvRjNC90L7QvFxyXG5cclxuXHRidG5TaG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdHdpbmRvd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnZmlsdGVyLXNob3cnKTtcclxuXHRcdHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuXHJcblx0fSk7XHJcblxyXG5cdGJ0bkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZmlsdGVyLXNob3cnKTtcclxuXHRcdHdpbmRvdy5zY3JvbGxUbygwLCB3aW5kb3dTY3JvbGwpO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyJykgKTtcclxuXHJcbi8qIG9ubHktaGl0ICovXHJcblxyXG4oIGVsZW0gPT4ge1xyXG5cclxuXHRcInVzZSBzdHJpY3RcIjtcclxuXHJcblx0QXJyYXkuZnJvbShlbGVtLCBlbCA9PiB7XHJcblxyXG5cdFx0Y29uc3QgYnRuID0gZWwucXVlcnlTZWxlY3RvcignLm9ubHktaGl0X19idG4nKSxcclxuXHRcdFx0ICBpdGVtcyA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5vbmx5LWhpdF9faXRlbScpO1xyXG5cclxuXHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGVsLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFsbCcpKTtcclxuXHJcblx0fSk7XHJcblxyXG59KSggZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9ubHktaGl0JykgKTsiLCIoIGZvcm1zID0+IHtcclxuXHJcblx0aWYoIWZvcm1zLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRBcnJheS5mcm9tKGZvcm1zLCBmb3JtID0+IHtcclxuXHJcblx0XHRjb25zdCBpbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmZvcm0tZmFzdC1yZXN1bHRfX2lucHV0JyksXHJcblx0XHRcdCAgcmVzdWx0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZm9ybS1mYXN0LXJlc3VsdF9fcmVzdWx0Jyk7XHJcblxyXG5cdFx0aW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRpZihpbnB1dC52YWx1ZS5sZW5ndGggPiAzICYmIGV2ZW50LmtleSAhPT0gJ2VudGVyJyl7XHJcblxyXG5cdFx0XHRcdGZvcm0uY2xhc3NMaXN0LmFkZCgnaXMtbG9hZGluZycpO1xyXG5cclxuXHJcblx0XHRcdFx0ZmV0Y2goZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpLCB7XHJcblx0XHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHRcdFx0J1gtUmVxdWVzdGVkLVdpdGgnIDogJ1hNTEh0dHBSZXF1ZXN0J1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGJvZHk6IG5ldyBGb3JtRGF0YShmb3JtKVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxyXG5cdFx0XHRcdC50aGVuKHJlc3VsdCA9PiB7XHJcblxyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcblx0XHRcdFx0XHRyZXN1bHQuaW5uZXJIVE1MID0gcmVzdWx0O1xyXG5cdFx0XHRcdFx0Zm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1sb2FkaW5nJyk7XHJcblx0XHRcdFx0XHRmb3JtLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWVtcHR5JywgcmVzdWx0Lmxlbmd0aCA9PT0gMCk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtLWZhc3QtcmVzdWx0JykpOyIsIlxyXG4vLyDQstGB0L/Qu9GL0LLQsNGO0YnQuNC5IHN1Ym1pdFxyXG5cclxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcblxyXG5cdGlmKCFldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmb3JtJykpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0Y29uc3QgZm9ybSA9IGV2ZW50LnRhcmdldCxcclxuXHRcdCAgdXJsID0gZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpLFxyXG5cdFx0ICBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcclxuXHJcblx0bGV0IHJlc3BvbnNlID0gZmV0Y2godXJsLCB7XHJcblx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0J0NvbnRlbnQtVHlwZScgOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdCdYLVJlcXVlc3RlZC1XaXRoJyA6ICdYTUxIdHRwUmVxdWVzdCdcclxuXHRcdH0sXHJcblx0XHRib2R5OiBmb3JtRGF0YVxyXG5cdH0pXHJcblx0LnRoZW4oIHJlc3BvbnNlID0+IHtcclxuXHJcblx0XHRjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcblxyXG5cdFx0aWYgKCFyZXNwb25zZS5vaykge1xyXG5cclxuXHRcdFx0YWxlcnQoXCLQntGI0LjQsdC60LAgSFRUUDogXCIgKyByZXNwb25zZS5zdGF0dXMpO1xyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IG9iaiA9IHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdGNvbnNvbGUubG9nKG9iaik7XHJcblxyXG5cdC8vINC40L3RhNC+0YDQvNCw0YbQuNC+0L3QvdGL0LUg0YHQvtC+0LHRidC10L3QuNGPXHJcblx0XHRpZihvYmoubW9kYWxTaG93KSB7XHJcblxyXG5cdFx0XHRpZihvYmoubW9kYWxTaG93ID09PSAnaW5mbycpIHtcclxuXHJcblx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWluZm9fX3RpdGxlJykuaW5uZXJIVE1MID0gb2JqLnRpdGxlID8gb2JqLnRpdGxlIDogJyc7XHJcblx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWluZm9fX21lc3NhZ2UnKS5pbm5lckhUTUwgPSBvYmoubWVzc2FnZSA/IG9iai5tZXNzYWdlIDogJyc7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRDRy5tb2RhbFNob3cob2JqLm1vZGFsU2hvdyk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHQvLyDQuNC30LHRgNCw0L3QvdC+0LVcclxuXHRcdGlmKGZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdmb3JtLXdpc2hsaXN0Jykpe1xyXG5cclxuXHRcdFx0Y29uc3QgaGVhZGVyQ291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX193aXNobGlzdCAuaGVhZGVyX19pY29ucy1jb3VudCcpO1xyXG5cclxuXHRcdFx0aWYob2JqLmhlYWRlckNvdW50KSB7XHJcblxyXG5cdFx0XHRcdGhlYWRlckNvdW50LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnLCBvYmouaGVhZGVyQ291bnQgPT09IDApO1xyXG5cdFx0XHRcdGhlYWRlckNvdW50LnRleHRDb250ZW50ID0gb2JqLmhlYWRlckNvdW50O1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Zm9ybS5lbGVtZW50cy5tb2RlLnZhbHVlID0gb2JqLm1vZGU7XHJcblxyXG5cdFx0fVxyXG5cclxuXHQvLyDRgdGA0LDQstC90LXQvdC40LVcclxuXHRcdGlmKGZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdmb3JtLWNvbXBhcmUnKSl7XHJcblxyXG5cdFx0XHRmb3JtLmVsZW1lbnRzLm1vZGUudmFsdWUgPSBvYmoubW9kZTtcclxuXHJcblx0XHR9XHJcblxyXG5cdC8vINC60L3QvtC/0LrQsCDQmtGD0L/QuNGC0YxcclxuXHRcdGlmKGZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdmb3JtLWJ1eScpKXtcclxuXHJcblx0XHRcdGNvbnN0IGhlYWRlckNvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fY2FydCAuaGVhZGVyX19pY29ucy1jb3VudCcpO1xyXG5cclxuXHRcdFx0aWYoY2FydC5oZWFkZXJDb3VudCkge1xyXG5cclxuXHRcdFx0XHRoZWFkZXJDb3VudC50ZXh0Q29udGVudCA9IGNhcnQuaGVhZGVyQ291bnQ7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZihjYXJ0Lm1vZGUgPT09IFwiYWRkXCIpIHtcclxuXHJcblx0XHRcdFx0Zm9ybS5xdWVyeVNlbGVjdG9yKCcuZm9ybS1idXlfX2J0bnMgYScpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHRcdFx0XHRmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWJ1eV9fYnRucyBidXR0b24nKS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCfRgNC10LDQu9GC0LfQvtCy0LDRgtGMINCy0L7Qt9Cy0YDQsNGCIGFydGljbGVpZCDQtNC70Y8g0YPRgdGC0LDQvdC+0LLQutC1INCyINC60LDRgNGC0L7Rh9C60LUg0LDQutGC0LjQstC90L7Qs9C+INCy0LDRgNC40LDQvdGC0LAnKVxyXG5cdC8qXHJcblx0XHRcdFx0aWYoYXJ0aWNsZUlELmxlbmd0aCkge1xyXG5cclxuXHRcdFx0XHRcdEFycmF5LmZyb20oYXJ0aWNsZUlELCBpbnB1dCA9PiB7XHJcblxyXG5cdFx0XHRcdFx0XHRpZihpbnB1dC52YWx1ZSA9PT0gY2FydC5hcnRpY2xlaWQpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKCdkYXRhLWluLWJhc2tldCcsICdpbiBiYXNrZXQnKTtcclxuXHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0fSovXHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHQvLyDQp9Cw0YHRgtC+INC/0L7QutGD0L/QsNGO0YIg0LLQvNC10YHRgtC1XHJcblx0XHRpZihmb3JtLmNsYXNzTGlzdC5jb250YWlucygncHJvZHVjdC1zZXQnKSl7XHJcblxyXG5cdFx0XHRpZihjYXJ0LmhlYWRlckNvdW50KSB7XHJcblxyXG5cdFx0XHRcdGhlYWRlckNvdW50LnRleHRDb250ZW50ID0gY2FydC5oZWFkZXJDb3VudDtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKGNhcnQubW9kZSA9PT0gXCJhZGRcIikge1xyXG5cclxuXHRcdFx0XHRmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LXNldF9fYnRuIGEnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblx0XHRcdFx0Zm9ybS5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1zZXRfX2J0biBidXR0b24nKS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcbn0pOyIsIlxyXG4oKGl0ZW1zKSA9PiB7XHJcblxyXG5cdFwidXNlIHN0cmljdFwiO1xyXG5cclxuXHRpZighaXRlbXMubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdEFycmF5LmZyb20oaXRlbXMsIHNldCA9PiB7XHJcblxyXG5cdFx0Y29uc3QgZ2FsbGVyeVN3aXBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuXHRcdGdhbGxlcnlTd2lwZXIuY2xhc3NOYW1lID0gJ3N3aXBlci1jb250YWluZXIgc3dpcGVyLWNvbnRhaW5lci0tZ2FsbGVyeSc7XHJcblxyXG5cdFx0Y29uc3QgbGlua3MgPSBzZXQucXVlcnlTZWxlY3RvckFsbCgnLmdhbGxlcnktc2V0X19pdGVtJyk7XHJcblxyXG5cdFx0bGV0IHdyYXBwZXIgPSAnPHVsIGNsYXNzPVwic3dpcGVyLXdyYXBwZXJcIj4nO1xyXG5cclxuXHRcdEFycmF5LmZyb20obGlua3MsIChsaW5rLCBpbmRleCkgPT4ge1xyXG5cclxuXHRcdFx0d3JhcHBlciArPSAnPGxpIGNsYXNzPVwic3dpcGVyLXNsaWRlXCI+PGltZyBzcmM9XCInICsgbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSArICdcIj48L2xpPic7XHJcblxyXG5cdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0XHRpZihnYWxsZXJ5U3dpcGVyLnN3aXBlcikge1xyXG5cclxuXHRcdFx0XHRcdGdhbGxlcnlTd2lwZXIuc3dpcGVyLmRlc3Ryb3koZmFsc2UsdHJ1ZSk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWdhbGxlcnknKS5pbm5lckhUTUwgPSAnJztcclxuXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtZ2FsbGVyeScpLmFwcGVuZENoaWxkKGdhbGxlcnlTd2lwZXIuY2xvbmVOb2RlKHRydWUpKTtcclxuXHJcblx0XHRcdFx0Q0cubW9kYWxTaG93KCdnYWxsZXJ5Jyk7XHJcblxyXG5cdFx0XHRcdGNvbnN0IGdhbGxlcnlNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1nYWxsZXJ5IC5zd2lwZXItY29udGFpbmVyLS1nYWxsZXJ5Jyk7XHJcblxyXG5cdFx0XHRcdGdhbGxlcnlNb2RhbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5pdGlhbFNsaWRlJywgaW5kZXgpO1xyXG5cclxuXHRcdFx0XHRDRy5zd2lwZXIoZ2FsbGVyeU1vZGFsKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdHdyYXBwZXIgKz0gJzwvdWw+PHNwYW4gY2xhc3M9XCJzd2lwZXItY291bnRcIj48L3NwYW4+JztcclxuXHJcblx0XHRnYWxsZXJ5U3dpcGVyLmlubmVySFRNTCA9IHdyYXBwZXI7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbGxlcnktc2V0JykpOyIsIigoaGVhZGVyRml4ZWQpID0+IHtcclxuXHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cdGlmKCFoZWFkZXJGaXhlZCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XHJcblxyXG5cdENHLmhlaWdodEhlYWRlckZpeGVkID0gaGVhZGVyRml4ZWQuY2xpZW50SGVpZ2h0O1xyXG5cclxuXHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCItLWhlaWdodEhlYWRlckZpeGVkXCIsIENHLmhlaWdodEhlYWRlckZpeGVkICsgJ3B4Jyk7XHJcblxyXG5cdFB1YlN1Yi5zdWJzY3JpYmUoJ3dpbmRvd1Njcm9sbCcsICgpID0+XHJcblx0XHRoZWFkZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtZml4ZWQnLCB3aW5kb3cuaW5uZXJIZWlnaHQgPCB3aW5kb3cucGFnZVlPZmZzZXQpKTtcclxuXHJcblx0UHViU3ViLnN1YnNjcmliZSgnd2luZG93V2lkdGhSZXNpemUnLCAoKSA9PiB7XHJcblxyXG5cdFx0Q0cuaGVpZ2h0SGVhZGVyRml4ZWQgPSBoZWFkZXJGaXhlZC5jbGllbnRIZWlnaHQ7XHJcblxyXG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS1oZWlnaHRIZWFkZXJGaXhlZFwiLCBDRy5oZWlnaHRIZWFkZXJGaXhlZCArICdweCcpO1xyXG5cclxuXHR9KTtcclxuXHJcblxyXG5cdC8vIGJ0biB1cCB0b3BcclxuXHJcblx0Y29uc3QgZm9vdGVyVVAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyX191cCcpO1xyXG5cclxuXHRpZihmb290ZXJVUCkge1xyXG5cclxuXHRcdFB1YlN1Yi5zdWJzY3JpYmUoJ3dpbmRvd1Njcm9sbCcsICgpID0+XHJcblx0XHRcdGZvb3RlclVQLmNsYXNzTGlzdC50b2dnbGUoXCJpcy1zaG93XCIsIHdpbmRvdy5pbm5lckhlaWdodCA8IHdpbmRvdy5wYWdlWU9mZnNldCkpO1xyXG5cclxuXHRcdGZvb3RlclVQLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZG9jdW1lbnQuYm9keS5zY3JvbGxJbnRvVmlldyh7YmVoYXZpb3I6IFwic21vb3RoXCJ9KSk7XHJcblxyXG5cdH1cclxuXHJcblx0Ly8gZml4ZWRcclxuXHJcblx0bGV0IFNjcm9sbFRvcFByZXYgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcclxuXHJcblx0XHRpZih3aW5kb3cucGFnZVlPZmZzZXQgPD0gMCkge1xyXG5cclxuXHRcdFx0aGVhZGVyRml4ZWQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtc2hvdycpO1xyXG5cclxuXHRcdH1cclxuXHRcdGVsc2UgaWYod2luZG93LnBhZ2VZT2Zmc2V0ID4gd2luZG93LmlubmVySGVpZ2h0KXtcclxuXHJcblx0XHRcdGhlYWRlckZpeGVkLmNsYXNzTGlzdC50b2dnbGUoJ2lzLXNob3cnLCB3aW5kb3cucGFnZVlPZmZzZXQgPD0gU2Nyb2xsVG9wUHJldik7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdFNjcm9sbFRvcFByZXYgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG5cdH0pO1xyXG5cclxuXHQvLyBjbG9zZSBtZW51XHJcblxyXG5cdFB1YlN1Yi5zdWJzY3JpYmUoJ1N3aXBlckF1dG9QbGF5U3RhcnQnLCAoKSA9PiB7XHJcblxyXG5cdFx0aWYgKHdpbmRvdy5pbm5lckhlaWdodCA8IHdpbmRvdy5wYWdlWU9mZnNldCl7XHJcblxyXG5cdFx0XHRoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaXMtZml4ZWQnKTtcclxuXHRcdFx0aGVhZGVyRml4ZWQuY2xhc3NMaXN0LmFkZCgnaXMtc2hvdycpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fZml4ZWQnKSk7IiwiKCBmb3JtID0+IHtcclxuXHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cdGlmKCFmb3JtKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGNvbnN0IGlucHV0ID0gZm9ybS5lbGVtZW50cy5zZWFyY2h3b3JkLFxyXG5cdFx0ICBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBpbnB1dC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGlzdCcpKSxcclxuXHRcdCAgaXRlbXMgPSBsaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgaW5wdXQuZ2V0QXR0cmlidXRlKCdkYXRhLWl0ZW1zJykpLFxyXG5cdFx0ICBzdHJpbmcgPSAnLicgKyBpbnB1dC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RyaW5nJyk7XHJcblxyXG5cdGlmKGl0ZW1zLmxlbmd0aCkge1xyXG5cclxuXHRcdGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdGNvbnN0IHZhbCA9IGlucHV0LnZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcblxyXG5cdFx0XHRsZXQgZW1wdHkgPSB0cnVlO1xyXG5cclxuXHRcdFx0QXJyYXkuZnJvbShpdGVtcywgaXRlbSA9PiB7XHJcblxyXG5cdFx0XHRcdGNvbnN0IF9zdHJpbmcgPSBpdGVtLnF1ZXJ5U2VsZWN0b3Ioc3RyaW5nKTtcclxuXHJcblx0XHRcdFx0aWYoX3N0cmluZykge1xyXG5cclxuXHRcdFx0XHRcdGNvbnN0IHRleHQgPSBfc3RyaW5nLnRleHRDb250ZW50LnRyaW0oKTtcclxuXHJcblx0XHRcdFx0XHRpdGVtLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnLCB0ZXh0LnRvTG93ZXJDYXNlKCkuaW5kZXhPZih2YWwpICE9PSAwKTtcclxuXHJcblx0XHRcdFx0XHRpZihlbXB0eSAmJiB0ZXh0LnRvTG93ZXJDYXNlKCkuaW5kZXhPZih2YWwpID09PSAwKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRlbXB0eSA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRsaXN0LmNsYXNzTGlzdC50b2dnbGUoJ2lzLWVtcHR5JywgZW1wdHkpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KSggZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbHRlci1saXZlc2VhcmNoJykgKTsiLCIvLyDQvdCw0LLQtdC00LXQvdC40LUg0L3QsCDRgdGC0YDQvtC60YMg0LfQsNC60LDQt9CwXHJcblxyXG4oIGltZ3MgPT4ge1xyXG5cclxuXHRcInVzZSBzdHJpY3RcIjtcclxuXHJcblx0aWYoIWltZ3MubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdC8vINC/0LXRgNCy0YvQuSDRg9GA0L7QstC10L3RjCwg0LLRgtC+0YDQvtGB0YLQuNC/0LXQvdC90L7QtSDQvNC10L3RjlxyXG5cdEFycmF5LmZyb20oaW1ncywgaW1nID0+IHtcclxuXHJcblx0XHRpbWcuY2xvc2VzdCgndHInKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRpbWcuc3R5bGUudG9wID0gZXZlbnQucGFnZVkgKyAncHgnO1xyXG5cdFx0XHRpbWcuc3R5bGUubGVmdCA9IGV2ZW50LnBhZ2VYICsgJ3B4JztcclxuXHRcdFx0aW1nLnN0eWxlLm9wYWNpdHkgPSAxO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdGltZy5jbG9zZXN0KCd0cicpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRpbWcuc3R5bGUub3BhY2l0eSA9IDA7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxrX19pbWctaG92ZXItdHInKSk7XHJcblxyXG4iLCIoIGZvcm0gPT4ge1xyXG5cclxuXHRpZighZm9ybSkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRjb25zdCBzbXNGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm0tc21zLWxvZ2luJyk7XHJcblxyXG5cdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0ZmV0Y2goZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpLCB7XHJcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdFx0J0NvbnRlbnQtVHlwZScgOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdFx0J1gtUmVxdWVzdGVkLVdpdGgnIDogJ1hNTEh0dHBSZXF1ZXN0J1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRib2R5OiBuZXcgRm9ybURhdGEoZm9ybSlcclxuXHRcdH0pXHJcblx0XHQudGhlbiggcmVzcG9uc2UgPT4ge1xyXG5cclxuXHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG5cclxuXHRcdFx0Y29uc3Qgb2JqID0gcmVzcG9uc2UuanNvbigpO1xyXG5cclxuXHRcdFx0Y29uc29sZS5sb2cob2JqKTtcclxuXHJcblx0XHRcdGlmKG9iai5tb2RhbFNob3cgPT09ICdpbmZvJykge1xyXG5cclxuXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtaW5mb19fdGl0bGUnKS5pbm5lckhUTUwgPSBvYmoudGl0bGUgPyBvYmoudGl0bGUgOiAnJztcclxuXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtaW5mb19fbWVzc2FnZScpLmlubmVySFRNTCA9IG9iai5tZXNzYWdlID8gb2JqLm1lc3NhZ2UgOiAnJztcclxuXHJcblx0XHRcdFx0Q0cubW9kYWxTaG93KG9iai5tb2RhbFNob3cpO1xyXG5cclxuXHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZihvYmoudGl0bGUpIHtcclxuXHJcblx0XHRcdFx0c21zRm9ybS5xdWVyeVNlbGVjdG9yKCcuZm9ybS1zbXNfX3RpdGxlJykuaW5uZXJIVE1MID0gb2JqLnRpdGxlO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYob2JqLmxvZ2luKSB7XHJcbi8vINGN0YLQviDQvdC+0LzQtdGAINGC0LXQu9C10YTQvtC90LAg0LjQu9C4INC10LzQsNC50Lsg0LIg0YHQuNGB0YLQtdC80LVcclxuXHRcdFx0XHRzbXNGb3JtLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXNtc19fbG9naW4nKS52YWx1ZSA9IG9iai5sb2dpbjtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKG9iai5mcm9tKSB7XHJcbi8vINCc0Ysg0L7RgtC/0YDQsNCy0LjQu9C4IFNNUyDRgSDQutC+0LTQvtC8INC90LAg0LLQsNGIINC90L7QvNC10YAgfCDQnNGLINC+0YLQv9GA0LDQstC40LvQuCDQutC+0LQg0L3QsCDQstCw0YggZW1haWxcclxuXHRcdFx0XHRzbXNGb3JtLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXNtc19fZnJvbScpLnRleHRDb250ZW50ID0gb2JqLmZyb207XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZihvYmoucmVwZWF0ID09PSAnZGlzYWJsZWQnKSB7XHJcblxyXG5cdFx0XHRcdHNtc0Zvcm0ucXVlcnlTZWxlY3RvcignLmZvcm0tbGtfX3JlcGVhdCcpLmlubmVySFRNTCA9IG9iai50ZXh0O1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Q0cubW9kYWxTaG93KCdzbXMnKTtcclxuXHRcdFx0c21zRm9ybS5zZXR1cFRpbWVyKG9iai5yZXBlYXQgPyBvYmoucmVwZWF0IDogdW5kZWZpbmVkKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1sb2dpbicpKTsiLCIvKkNHLm1hc2sgPSAoZWxlbXMpID0+IHtcclxuXHJcblx0aWYoIWVsZW1zLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRpZiAoIXdpbmRvdy5JbnB1dG1hc2spIHtcclxuXHJcblx0XHRjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuXHJcblx0XHRzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xyXG5cdFx0c2NyaXB0LmFzeW5jID0gdHJ1ZTtcclxuXHRcdHNjcmlwdC5zcmMgPScvanMvaW5wdXRtYXNrLm1pbi5qcyc7XHJcblxyXG5cdFx0c2NyaXB0Lm9ubG9hZCA9ICgpID0+IHNldE1hc2soKTtcclxuXHJcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCksIDUwMDApO1xyXG5cclxuXHR9XHJcblx0ZWxzZSB7XHJcblxyXG5cdFx0c2V0TWFzaygpO1xyXG5cclxuXHR9XHJcblxyXG5cdGNvbnN0IHNldE1hc2sgPSAoKSA9PiB7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShlbGVtcywgZWwgPT4ge1xyXG5cclxuXHRcdFx0aWYoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnB1dG1hc2stLXBob25lJykpIHtcclxuXHJcblx0XHRcdFx0dmFyIG1hc2tJbnB1dCA9IG5ldyBJbnB1dG1hc2soe1xyXG5cdFx0XHRcdFx0bWFzazogXCIrNyAoIDk5OSApIDk5OS05OS05OVwiLFxyXG5cdFx0XHRcdFx0c2hvd01hc2tPbkhvdmVyOiBmYWxzZSxcclxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyOiBcIis3ICggX19fICkgX19fLV9fLV9fXCJcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZihlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2lucHV0bWFzay0tZGF0ZScpKSB7XHJcblxyXG5cdFx0XHRcdHZhciBtYXNrSW5wdXQgPSBuZXcgSW5wdXRtYXNrKHtcclxuXHRcdFx0XHRcdGFsaWFzOiBcImRhdGV0aW1lXCIsXHJcblx0XHRcdFx0XHRzaG93TWFza09uSG92ZXI6IGZhbHNlLFxyXG5cdFx0XHRcdFx0aW5wdXRGb3JtYXQ6IFwiZGQubW0ueXl5eVwiLFxyXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI6IFwi0LTQtC7QvNC8LtCz0LPQs9CzXCJcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZihlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2lucHV0bWFzay0tY3VycmVuY3knKSkge1xyXG5cclxuXHRcdFx0XHR2YXIgbWFza0lucHV0ID0gbmV3IElucHV0bWFzayh7XHJcblx0XHRcdFx0XHRhbGlhczogXCJpbnRlZ2VyXCIsXHJcblx0XHRcdFx0XHRzdWZmaXg6ICcg0YDRg9Cx0LvQtdC5JyxcclxuXHRcdFx0XHRcdGdyb3VwU2l6ZTogMyxcclxuXHRcdFx0XHRcdGF1dG9Hcm91cDogdHJ1ZSxcclxuXHRcdFx0XHRcdGdyb3VwU2VwYXJhdG9yOiAnICcsXHJcblx0XHRcdFx0XHRyaWdodEFsaWduOiBmYWxzZVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHJcblx0XHRcdFx0dmFyIG1hc2tJbnB1dCA9IG5ldyBJbnB1dG1hc2soZWwuZ2V0QXR0cmlidXRlKCdkYXRhLW1hc2snKSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRtYXNrSW5wdXQubWFzayhlbCk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn07XHJcblxyXG5DRy5tYXNrKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnB1dG1hc2snKSk7Ki8iLCJcclxuKChtZW51KSA9PiB7XHJcblxyXG5cdFwidXNlIHN0cmljdFwiO1xyXG5cclxuXHRpZighbWVudSkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtdG9nZ2xlLW1lbnUnKSxcclxuXHRcdCAgbGV2ZWwxID0gbWVudS5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1jYXRhbG9nX19wYXJlbnQnKSxcclxuXHRcdCAgc2Vjb25kID0gbWVudS5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1jYXRhbG9nX19zZWNvbmQtbGluaycpLFxyXG5cdFx0ICBsZXZlbDIgPSBtZW51LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWNhdGFsb2dfX2xldmVsMi1oZWFkLmlzLWFycm93JyksXHJcblx0XHQgIGJveExldmVsMyA9IG1lbnUucXVlcnlTZWxlY3RvcignLm1lbnUtY2F0YWxvZ19fbGV2ZWwzJyksXHJcblx0XHQgIGJ0bkNsb3NlID0gbWVudS5xdWVyeVNlbGVjdG9yKCcubWVudS1jYXRhbG9nX19jbG9zZScpLFxyXG5cdFx0ICBidG5CYWNrID0gbWVudS5xdWVyeVNlbGVjdG9yKCcubWVudS1jYXRhbG9nX19iYWNrJyksXHJcblx0XHQgIGNhdGVnb3J5ID0gbWVudS5xdWVyeVNlbGVjdG9yKCcubWVudS1jYXRhbG9nX19jdXJyZW50LWNhdGVnb3J5JyksXHJcblx0XHQgIGNhdGVnb3J5VGV4dERlZmF1bHQgPSBjYXRlZ29yeS50ZXh0Q29udGVudCxcclxuXHRcdCAgYnRuU2xpZGUgPSBtZW51LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWNhdGFsb2dfX3NsaWRlLWJ0bicpO1xyXG5cclxuXHRsZXRcdGxldmVsMkFjdGl2ZSA9IG51bGwsXHJcblx0XHRsZXZlbDFTY3JvbGwgPSAwLFxyXG5cdFx0bGV2ZWwyU2Nyb2xsID0gMDtcclxuXHJcblx0Y29uc3QgbWVudU9wZW4gPSAoKSA9PiB7XHJcblxyXG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Njcm9sbC1iZWhhdmlvci1vZmYnKTtcclxuXHJcblx0XHRDRy5PcGVuTWVudSA9IHRydWU7XHJcblxyXG5cdFx0aWYod2luZG93LmlubmVyV2lkdGggPCBDRy5icmVha1BvaW50cykge1xyXG5cclxuXHRcdFx0Q0cud2luZG93U2Nyb2xsT2xkID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbWVudS1vcGVuJyk7XHJcblxyXG5cdFx0UHViU3ViLnB1Ymxpc2goJ1N3aXBlckF1dG9QbGF5U3RvcCcpO1xyXG5cclxuXHRcdC8vIGVhZ2VyXHJcblx0XHRpZih3aW5kb3cuaW5uZXJXaWR0aCA+PSBDRy5icmVha1BvaW50cykge1xyXG5cclxuXHRcdFx0QXJyYXkuZnJvbShtZW51LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tsb2FkaW5nPVwibGF6eVwiXScpLCBpbWcgPT4gaW1nLnNldEF0dHJpYnV0ZSgnbG9hZGluZycsJ2VhZ2VyJykpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fTtcclxuXHJcblx0Y29uc3QgbWVudUNsb3NlID0gKCkgPT4ge1xyXG5cclxuXHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1vcGVuJyk7XHJcblxyXG5cdFx0aWYod2luZG93LmlubmVyV2lkdGggPCBDRy5icmVha1BvaW50cykge1xyXG5cclxuXHRcdFx0d2luZG93LnNjcm9sbFRvKDAsIENHLndpbmRvd1Njcm9sbE9sZCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdENHLk9wZW5NZW51ID0gZmFsc2U7XHJcblxyXG5cdFx0c2V0VGltZW91dCggKCkgPT4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbC1iZWhhdmlvci1vZmYnKSwgMTAwKTtcclxuXHJcblx0XHRQdWJTdWIucHVibGlzaCgnU3dpcGVyQXV0b1BsYXlTdGFydCcpO1xyXG5cclxuXHR9O1xyXG5cclxuXHQvLyDQvtGC0LrRgNGL0YLRjHzQt9Cw0LrRgNGL0YLRjCDQvNC10L3RjlxyXG5cclxuXHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBDRy5PcGVuTWVudSA/IG1lbnVDbG9zZSgpIDogbWVudU9wZW4oKSk7XHJcblxyXG5cclxuXHQvLyDQt9Cw0LrRgNGL0YLRjCDQvNC10L3RjlxyXG5cclxuXHRidG5DbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1lbnVDbG9zZSgpKTtcclxuXHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcblxyXG5cdFx0aWYoZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnUtb3BlbicpICYmICFldmVudC50YXJnZXQuY2xvc2VzdCgnLmpzLXRvZ2dsZS1tZW51JykgJiYgIWV2ZW50LnRhcmdldC5jbG9zZXN0KCcubWVudS1jYXRhbG9nJykpIHtcclxuXHJcblx0XHRcdG1lbnVDbG9zZSgpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG5cdC8vINCd0LAg0YPRgNC+0LLQtdC90Ywg0L3QsNC30LDQtFxyXG5cclxuXHRidG5CYWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdGlmKG1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1sZXZlbDMnKSkge1xyXG5cclxuXHRcdFx0bWVudS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1sZXZlbDMnKTtcclxuXHJcblx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLCBsZXZlbDJTY3JvbGwpO1xyXG5cclxuXHRcdFx0Y2F0ZWdvcnkudGV4dENvbnRlbnQgPSBsZXZlbDJBY3RpdmUudGV4dENvbnRlbnQ7XHJcblxyXG5cdFx0XHRtZW51LnN0eWxlLmhlaWdodCA9IGxldmVsMkFjdGl2ZS5jbGllbnRIZWlnaHQgKyBDRy5oZWlnaHRIZWFkZXJGaXhlZCArICdweCc7XHJcblxyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAobWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWxldmVsMicpKSB7XHJcblxyXG5cdFx0XHRtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWxldmVsMicpO1xyXG5cclxuXHRcdFx0d2luZG93LnNjcm9sbFRvKDAsIGxldmVsMVNjcm9sbCk7XHJcblxyXG5cdFx0XHRidG5CYWNrLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcblx0XHRcdGNhdGVnb3J5LnRleHRDb250ZW50ID0gY2F0ZWdvcnlUZXh0RGVmYXVsdDtcclxuXHJcblx0XHRcdG1lbnUuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xyXG5cclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cclxuXHRcdFx0Y29uc29sZS5sb2coJ9GH0YLQvi3RgtC+INC90LUg0YLQsNC6Jyk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcblxyXG5cdC8vINC/0LXRgNCy0YvQuSDRg9GA0L7QstC10L3RjFxyXG5cclxuXHRBcnJheS5mcm9tKGxldmVsMSwgZWwgPT4ge1xyXG5cclxuXHRcdGNvbnN0IGlkID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcblxyXG5cdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdC8vINC00LXRgdC60YLQvtC/XHJcblxyXG5cdFx0XHRpZih3aW5kb3cuaW5uZXJXaWR0aCA+PSBDRy5icmVha1BvaW50cykge1xyXG5cclxuXHRcdFx0XHRBcnJheS5mcm9tKGxldmVsMSwgZWxlbSA9PiBlbGVtLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWhvdmVyJywgZWxlbSA9PT0gZWwpKTtcclxuXHJcblx0XHRcdFx0aWYobGV2ZWwyQWN0aXZlKSB7XHJcblxyXG5cdFx0XHRcdFx0bGV2ZWwyQWN0aXZlLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRsZXZlbDJBY3RpdmUgPSBtZW51LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWNhdGFsb2dfX2xldmVsMi0tJyArIGlkKTtcclxuXHJcblx0XHRcdFx0bGV2ZWwyQWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdC8vINC80L7QsdCw0LnQu1xyXG5cclxuXHRcdFx0aWYoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1icmFuZCcpKSB7XHJcblxyXG5cdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKHdpbmRvdy5pbm5lcldpZHRoIDwgQ0cuYnJlYWtQb2ludHMpIHtcclxuXHJcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdFx0bGV2ZWwxU2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuXHRcdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcblxyXG5cdFx0XHRcdG1lbnUuY2xhc3NMaXN0LmFkZCgnaXMtbGV2ZWwyJyk7XHJcblxyXG5cdFx0XHRcdGlmKGxldmVsMkFjdGl2ZSkge1xyXG5cclxuXHRcdFx0XHRcdGxldmVsMkFjdGl2ZS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0bGV2ZWwyQWN0aXZlID0gbWVudS5xdWVyeVNlbGVjdG9yKCcubWVudS1jYXRhbG9nX19sZXZlbDItLScgKyBpZCk7XHJcblxyXG5cdFx0XHRcdGxldmVsMkFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdGJ0bkJhY2suY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHRjYXRlZ29yeS50ZXh0Q29udGVudCA9IGVsLnRleHRDb250ZW50O1xyXG5cclxuXHRcdFx0XHRtZW51LnN0eWxlLmhlaWdodCA9IGxldmVsMkFjdGl2ZS5jbGllbnRIZWlnaHQgKyBDRy5oZWlnaHRIZWFkZXJGaXhlZCArICdweCc7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHQvLyDQv9C10YDQstGL0Lkg0YPRgNC+0LLQtdC90YwsINCy0YLQvtGA0L7RgdGC0LjQv9C10L3QvdC+0LUg0LzQtdC90Y5cclxuXHRBcnJheS5mcm9tKHNlY29uZCwgZWwgPT4ge1xyXG5cclxuXHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XHJcblxyXG5cdFx0XHQvLyDQtNC10YHQutGC0L7Qv1xyXG5cclxuXHRcdFx0aWYod2luZG93LmlubmVyV2lkdGggPj0gQ0cuYnJlYWtQb2ludHMpIHtcclxuXHJcblx0XHRcdFx0aWYobGV2ZWwyQWN0aXZlKSB7XHJcblxyXG5cdFx0XHRcdFx0bGV2ZWwyQWN0aXZlLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0XHRBcnJheS5mcm9tKGxldmVsMSwgZWxlbSA9PiBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhvdmVyJykpO1xyXG5cclxuXHRcdFx0XHRcdGxldmVsMkFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHJcblx0Ly8g0LLRgtC+0YDQvtC5INGD0YDQvtCy0LXQvdGMXHJcblxyXG5cdEFycmF5LmZyb20obGV2ZWwyLCBlbCA9PiB7XHJcblxyXG5cdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHQvLyDQvNC+0LHQsNC50LtcclxuXHRcdFx0aWYod2luZG93LmlubmVyV2lkdGggPCBDRy5icmVha1BvaW50cykge1xyXG5cclxuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0XHRsZXZlbDJTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG5cdFx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuXHJcblx0XHRcdFx0Ym94TGV2ZWwzLmlubmVySFRNTCA9IGVsLnBhcmVudE5vZGUuaW5uZXJIVE1MO1xyXG5cclxuXHRcdFx0XHRtZW51LmNsYXNzTGlzdC5hZGQoJ2lzLWxldmVsMycpO1xyXG5cclxuXHRcdFx0XHRjYXRlZ29yeS50ZXh0Q29udGVudCA9IGVsLnRleHRDb250ZW50O1xyXG5cclxuXHRcdFx0XHRtZW51LnN0eWxlLmhlaWdodCA9IGJveExldmVsMy5jbGllbnRIZWlnaHQgKyBDRy5oZWlnaHRIZWFkZXJGaXhlZCArICdweCc7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHQvLyDRgNCw0LfQstC10YDQvdGD0YLRjCDQvNC10L3RjiBzbGlkZVxyXG5cclxuXHRBcnJheS5mcm9tKGJ0blNsaWRlLCBlbCA9PiB7XHJcblxyXG5cdFx0Y29uc3QgcGFyZW50ID0gZWwucGFyZW50Tm9kZSxcclxuXHRcdFx0ICBpdGVtc0hpZGUgPSBwYXJlbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtY2F0YWxvZ19fbGV2ZWwyLWl0ZW0uaGlkZScpO1xyXG5cclxuXHRcdGxldCBvcGVuID0gZmFsc2U7XHJcblxyXG5cdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRvcGVuID0gIW9wZW47XHJcblxyXG5cdFx0XHRlbC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1vcGVuJywgb3Blbik7XHJcblxyXG5cdFx0XHRBcnJheS5mcm9tKGl0ZW1zSGlkZSwgaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnLCAhb3BlbikpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWNhdGFsb2cnKSk7IiwiKChtb2RhbCk9PntcclxuXHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cdGlmKCFtb2RhbCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRsZXQgd2luZG93U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuXHRjb25zdCBpdGVtcyA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbF9faXRlbScpLFxyXG5cdFx0ICBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbW9kYWxdJyksXHJcblx0XHQgIGJveCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fYm94JyksXHJcblx0XHQgIHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpO1xyXG5cclxuXHRtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRpZihldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbCcpIHx8IGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsX19ib3gnKSB8fCBldmVudC50YXJnZXQuY2xvc2VzdCgnLm1vZGFsX19jbG9zZScpKXtcclxuXHJcblx0XHRcdENHLmhpZGVNb2RhbCgpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG5cdENHLmhpZGVNb2RhbCA9ICgpID0+IHtcclxuXHJcblx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLXNob3cnKTtcclxuXHRcdHdyYXBwZXIuc3R5bGUudG9wID0gMDtcclxuXHRcdHdpbmRvdy5zY3JvbGxUbygwLHdpbmRvd1Njcm9sbCk7XHJcblxyXG5cdFx0Q0cuYWN0aXZlTW9kYWwgPSBmYWxzZTtcclxuXHJcblx0XHRQdWJTdWIucHVibGlzaCgnU3dpcGVyQXV0b1BsYXlTdGFydCcpO1xyXG5cclxuXHR9O1xyXG5cclxuXHRDRy5tb2RhbFNob3cgPSBzZWxlY3RvciA9PiB7XHJcblxyXG5cdFx0aWYoIUNHLmFjdGl2ZU1vZGFsKXtcclxuXHJcblx0XHRcdHdpbmRvd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcblx0XHRcdHdyYXBwZXIuc3R5bGUudG9wID0gLXdpbmRvd1Njcm9sbCArICdweCc7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdENHLmFjdGl2ZU1vZGFsID0gbW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsX19pdGVtLS0nICsgc2VsZWN0b3IpO1xyXG5cclxuXHRcdEFycmF5LmZyb20oaXRlbXMsIGVsID0+XHJcblx0XHRcdGVsLmNsYXNzTGlzdC50b2dnbGUoJ3Zpc3VhbGx5aGlkZGVuJywgZWwgIT09IENHLmFjdGl2ZU1vZGFsKSk7XHJcblxyXG5cdFx0bW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtZnVsbCcsIENHLmFjdGl2ZU1vZGFsLmNsYXNzTGlzdC5jb250YWlucygnaXMtZnVsbCcpKTtcclxuXHJcblx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ21vZGFsLXNob3cnKTtcclxuXHRcdHdpbmRvdy5zY3JvbGxUbygwLDApO1xyXG5cclxuXHRcdENHLmFjdGl2ZU1vZGFsLmZvY3VzKCk7XHJcblxyXG5cdFx0UHViU3ViLnB1Ymxpc2goJ21vZGFsU2hvdycsIHNlbGVjdG9yKTtcclxuXHJcblx0XHRQdWJTdWIucHVibGlzaCgnU3dpcGVyQXV0b1BsYXlTdG9wJyk7XHJcblxyXG5cdFx0Y29uc3QgaW5wdXRGb2N1cyA9IENHLmFjdGl2ZU1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fZm9jdXMnKTtcclxuXHJcblx0XHRpZiAoaW5wdXRGb2N1cykge1xyXG5cclxuXHRcdFx0c2V0VGltZW91dCggKCkgPT4gaW5wdXRGb2N1cy5mb2N1cygpLCAxMDAwKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH07XHJcblxyXG5cdEFycmF5LmZyb20oYnRucywgZWwgPT5cclxuXHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cclxuXHRcdFx0Q0cubW9kYWxTaG93KGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1tb2RhbCcpKSkpO1xyXG5cclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGlmKENHLmFjdGl2ZU1vZGFsICYmIGV2ZW50LmtleUNvZGUgPT09IDI3KXtcclxuXHJcblx0XHRcdENHLmhpZGVNb2RhbCgpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKSk7IiwiLy8g0LjQt9C80LXQvdC10L3QuNC1INCyINGE0L7RgNC80LUsINC/0L7QtNGB0YfQtdGCXHJcbiggZm9ybSA9PiB7XHJcblxyXG5cdFwidXNlIHN0cmljdFwiO1xyXG5cclxuXHRpZighZm9ybSkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRjb25zdCByZXN1bHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvY2VkdXJlLWZvcm1fX3Jlc3VsdCcpLFxyXG5cdFx0ICBsaXN0ID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcucHJvY2VkdXJlLWZvcm1fX2xpc3QnKSxcclxuXHRcdCAgaXRlbSA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLnByb2NlZHVyZS1mb3JtX19pdGVtJyksXHJcblx0XHQgIGNoZWNrYm94ID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tib3gtb25seV9faW5wdXQnKTtcclxuXHJcblx0Y29uc3Qgc2V0TGFzdCA9ICgpID0+IHtcclxuXHJcblx0XHRBcnJheS5mcm9tKGxpc3QsIGdyb3VwID0+IHtcclxuXHJcblx0XHRcdGxldCBsYXN0ID0gMDtcclxuXHRcdFx0Y29uc3QgX2xpc3QgPSBncm91cC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvY2VkdXJlLWZvcm1fX2l0ZW0nKTtcclxuXHJcblx0XHRcdEFycmF5LmZyb20oX2xpc3QsIChlbCxpbmRleCkgPT4ge1xyXG5cclxuXHRcdFx0XHRlbC5jbGFzc0xpc3QuYWRkKCdpcy1sYXN0Jyk7XHJcblxyXG5cdFx0XHRcdGlmKCFlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGUnKSkge1xyXG5cclxuXHRcdFx0XHRcdF9saXN0W2xhc3RdLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWxhc3QnKTtcclxuXHRcdFx0XHRcdGxhc3QgPSBpbmRleDtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRpZihsYXN0ID09PSAwKSB7XHJcblxyXG5cdFx0XHRcdF9saXN0WzBdLmNsYXNzTGlzdC5hZGQoJ2lzLWxhc3QnKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxuXHRzZXRMYXN0KCk7XHJcblxyXG5cdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnQgPT4ge1xyXG5cclxuXHQvLyDRh9C10LrQsNC10Lwg0L/RgNC+0LTRg9C60YLRiyDQsiDRgtCw0LHQu9C40YbQtVxyXG5cclxuXHRcdGlmKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrYm94LW9ubHlfX2lucHV0JykpIHtcclxuXHJcblx0XHRcdEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2NlZHVyZS1wcm9kdWN0LS0nICsgZXZlbnQudGFyZ2V0LnZhbHVlKSwgZWwgPT4ge1xyXG5cclxuXHRcdFx0XHRlbC5xdWVyeVNlbGVjdG9yKCcuY2hlY2tib3gtb25seV9faW5wdXQnKS5jaGVja2VkID0gZXZlbnQudGFyZ2V0LmNoZWNrZWQ7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdC8vINGB0LrRgNGL0LLQsNC10Lwv0L/QvtC60LDQt9GL0LLQsNC10Lwg0YfQtdC60L3Rg9GC0YvQtVxyXG5cclxuXHRcdEFycmF5LmZyb20oY2hlY2tib3gsIGlucHV0ID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IGl0ZW0gPSBpbnB1dC5jbG9zZXN0KCcucHJvY2VkdXJlLWZvcm1fX2l0ZW0nKTtcclxuXHJcblx0XHRcdGlmKGlucHV0LmNoZWNrZWQpIHtcclxuXHJcblx0XHRcdFx0aXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1yZW1vdmUnLCAnaGlkZScpO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHJcblx0XHRcdFx0aWYoIWl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRlJykpIHtcclxuXHJcblx0XHRcdFx0XHRpdGVtLmNsYXNzTGlzdC5hZGQoJ2lzLXJlbW92ZScpO1xyXG5cclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoICgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRcdGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cdFx0XHRcdFx0XHRzZXRMYXN0KCk7XHJcblxyXG5cdFx0XHRcdFx0fSwgNDAwKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHQvLyDRgNCw0YHRh9C10YJcclxuXHJcblx0XHRsZXQgX3N1bSA9IDAsXHJcblx0XHRcdF9zdW1TZXQgPSAwO1xyXG5cclxuXHRcdGNvbnN0IGlucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tib3gtb25seV9faW5wdXQ6Y2hlY2tlZCcpO1xyXG5cclxuXHRcdEFycmF5LmZyb20oaW5wdXQsIGVsID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IHByaWNlID0gcGFyc2VJbnQoZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXByaWNlJykpLFxyXG5cdFx0XHRcdCAgcHJpY2VPbGQgPSBwYXJzZUludChlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2Utb2xkJykgfHwgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXByaWNlJykpO1xyXG5cclxuXHRcdFx0X3N1bSArPSBwcmljZU9sZDtcclxuXHRcdFx0X3N1bVNldCArPSBwcmljZTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRBcnJheS5mcm9tKHJlc3VsdCwgZWwgPT4ge1xyXG5cclxuXHRcdFx0ZWwucXVlcnlTZWxlY3RvcignLnByb2NlZHVyZS1mb3JtX19jb3VudGVyJykudGV4dENvbnRlbnQgPSBpbnB1dC5sZW5ndGg7XHJcblx0XHRcdGVsLnF1ZXJ5U2VsZWN0b3IoJy5wcm9jZWR1cmUtZm9ybV9fc3VtLXNldCcpLnRleHRDb250ZW50ID0gX3N1bVNldDtcclxuXHRcdFx0ZWwucXVlcnlTZWxlY3RvcignLnByb2NlZHVyZS1mb3JtX19zdW0nKS50ZXh0Q29udGVudCA9IF9zdW07XHJcblx0XHRcdGVsLnF1ZXJ5U2VsZWN0b3IoJy5wcm9jZWR1cmUtZm9ybV9fZGlmZicpLnRleHRDb250ZW50ID0gX3N1bSAtIF9zdW1TZXQ7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0c2V0TGFzdCgpO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9jZWR1cmUtZm9ybScpKTtcclxuXHJcbi8vINGH0LXQuiDQsiDQv9GA0L7QtNGD0LrRgtC1XHJcbiggaXRlbXMgPT4ge1xyXG5cclxuXHRcInVzZSBzdHJpY3RcIjtcclxuXHJcblx0QXJyYXkuZnJvbShpdGVtcywgcHJvZHVjdCA9PiB7XHJcblxyXG5cdFx0Y29uc3QgY2hlY2tib3ggPSBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2JveC1vbmx5X19pbnB1dCcpO1xyXG5cclxuXHRcdGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IGZvcm1JdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2NlZHVyZS1mb3JtX19pdGVtLS0nICsgY2hlY2tib3gudmFsdWUpLFxyXG5cdFx0XHRcdCAgaW5wdXQgPSBmb3JtSXRlbS5xdWVyeVNlbGVjdG9yKCcuY2hlY2tib3gtb25seV9faW5wdXQnKTtcclxuXHJcblx0XHRcdGlucHV0LmNoZWNrZWQgPSBjaGVja2JveC5jaGVja2VkO1xyXG5cclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2NlZHVyZS1mb3JtJykuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikpO1xyXG5cclxuXHRcdFx0Ly8g0LHQu9C40LfQvdC10YbRgyDQv9C+0YHRgtCw0LLQuNC8INGH0LXQulxyXG5cclxuXHRcdFx0QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvY2VkdXJlLXByb2R1Y3QtLScgKyBjaGVja2JveC52YWx1ZSksIGVsID0+IHtcclxuXHJcblx0XHRcdFx0aWYoZWwgIT09IHByb2R1Y3QgKXtcclxuXHJcblx0XHRcdFx0XHRlbC5xdWVyeVNlbGVjdG9yKCcuY2hlY2tib3gtb25seV9faW5wdXQnKS5jaGVja2VkID0gY2hlY2tib3guY2hlY2tlZDtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2NlZHVyZS1wcm9kdWN0JykpO1xyXG5cclxuLy8gYXJ0aWNsZSDQsiDQv9GA0L7QtNGD0LrRgtC1XHJcbiggaXRlbXMgPT4ge1xyXG5cclxuXHRcInVzZSBzdHJpY3RcIjtcclxuXHJcblx0QXJyYXkuZnJvbShpdGVtcywgZm9ybSA9PiB7XHJcblxyXG5cdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCBpbnB1dCA9IGV2ZW50LnRhcmdldCxcclxuXHRcdFx0XHQgIGlkID0gaW5wdXQudmFsdWUsXHJcblx0XHRcdFx0ICBwYXJlbnRJRCA9IGlucHV0LmdldEF0dHJpYnV0ZSgnZGF0YS1wYXJlbnQtaWQnKSxcclxuXHRcdFx0XHQgIHZvbHVtZSA9IGlucHV0LmdldEF0dHJpYnV0ZSgnZGF0YS12b2x1bWUnKSxcclxuXHRcdFx0XHQgIHByaWNlID0gaW5wdXQuZ2V0QXR0cmlidXRlKCdkYXRhLXByaWNlJyksXHJcblx0XHRcdFx0ICBvbGRQcmljZSA9IGlucHV0LmdldEF0dHJpYnV0ZSgnZGF0YS1vbGQtcHJpY2UnKSxcclxuXHRcdFx0XHQgIHNhbGUgPSBpbnB1dC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2FsZScpLFxyXG5cdFx0XHRcdCAgc3RvcmVpZCA9IGlucHV0LmdldEF0dHJpYnV0ZSgnZGF0YS1zdG9yZWlkJyk7XHJcblxyXG5cdFx0Ly8g0LjQt9C80LXQvdC40LvQuCDQv9GA0L7QtNGD0LrRgiDQuCDQtdCz0L4g0LHQu9C40LfQvdC10YbQsFxyXG5cclxuXHRcdFx0QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvY2VkdXJlLXByb2R1Y3QtLScgKyBwYXJlbnRJRCksIHByb2R1Y3QgPT4ge1xyXG5cclxuXHRcdFx0XHRwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2JveC1vbmx5X19pbnB1dCcpLnNldEF0dHJpYnV0ZSgnZGF0YS1hcnRpY2xlaWQnLCBpZCk7XHJcblx0XHRcdFx0cHJvZHVjdC5xdWVyeVNlbGVjdG9yKCcuY2hlY2tib3gtb25seV9faW5wdXQnKS5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3RvcmVpZCcsIHN0b3JlaWQpO1xyXG5cclxuXHRcdFx0XHRwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9jZWR1cmUtcHJvZHVjdF9fcHJpY2UtdmFsdWUnKS50ZXh0Q29udGVudCA9IHByaWNlO1xyXG5cclxuXHRcdFx0XHRpZihwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9jZWR1cmUtcHJvZHVjdF9fcHJpY2Utb2xkLXZhbHVlJykpIHtcclxuXHJcblx0XHRcdFx0XHRwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9jZWR1cmUtcHJvZHVjdF9fcHJpY2Utb2xkLXZhbHVlJykucGFyZW50Tm9kZS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJywgIW9sZFByaWNlKTtcclxuXHJcblx0XHRcdFx0XHRwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9jZWR1cmUtcHJvZHVjdF9fcHJpY2Utb2xkLXZhbHVlJykudGV4dENvbnRlbnQgPSBvbGRQcmljZTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZihwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9jZWR1cmUtcHJvZHVjdF9fc2FsZScpKSB7XHJcblxyXG5cdFx0XHRcdFx0cHJvZHVjdC5xdWVyeVNlbGVjdG9yKCcucHJvY2VkdXJlLXByb2R1Y3RfX3NhbGUnKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJywgIXNhbGUpO1xyXG5cclxuXHRcdFx0XHRcdHByb2R1Y3QucXVlcnlTZWxlY3RvcignLnByb2NlZHVyZS1wcm9kdWN0X19zYWxlJykudGV4dENvbnRlbnQgPSBzYWxlO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmKHByb2R1Y3QucXVlcnlTZWxlY3RvcignLnByb2NlZHVyZS1wcm9kdWN0X192b2x1bWUnKSkge1xyXG5cclxuXHRcdFx0XHRcdHByb2R1Y3QucXVlcnlTZWxlY3RvcignLnByb2NlZHVyZS1wcm9kdWN0X192b2x1bWUnKS50ZXh0Q29udGVudCA9IHZvbHVtZTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRBcnJheS5mcm9tKHByb2R1Y3QucXVlcnlTZWxlY3RvckFsbCgnW25hbWU9XCJhcnRpY2xlaWRcIl0nKSwgZWwgPT4ge1xyXG5cclxuXHRcdFx0XHRcdGlmKGVsLmNoZWNrZWQgPT09IGZhbHNlICYmIGVsLnZhbHVlID09PSBpZCkge1xyXG5cclxuXHRcdFx0XHRcdFx0ZWwuY2hlY2tlZCA9IHRydWU7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdC8vINC40YnQtdC8INC/0YDQvtC00YPQutGCINCyIGZvcm1cclxuXHJcblx0XHRcdGNvbnN0IGZvcm1JdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2NlZHVyZS1mb3JtX19pdGVtLS0nICsgcGFyZW50SUQpO1xyXG5cclxuXHRcdFx0Zm9ybUl0ZW0ucXVlcnlTZWxlY3RvcignLnByb2NlZHVyZS1mb3JtX19pdGVtLWFydGljbGVpZCcpLnZhbHVlID0gaWQ7XHJcblx0XHRcdGZvcm1JdGVtLnF1ZXJ5U2VsZWN0b3IoJy5wcm9jZWR1cmUtZm9ybV9faXRlbS1zdG9yZWlkJykudmFsdWUgPSBzdG9yZWlkO1xyXG5cclxuXHRcdFx0Zm9ybUl0ZW0ucXVlcnlTZWxlY3RvcignLnByb2NlZHVyZS1mb3JtX19pdGVtLXByaWNlLXZhbHVlJykudGV4dENvbnRlbnQgPSBwcmljZTtcclxuXHJcblx0XHRcdGZvcm1JdGVtLnF1ZXJ5U2VsZWN0b3IoJy5wcm9jZWR1cmUtZm9ybV9faXRlbS1wcmljZS1vbGQtdmFsdWUnKS5wYXJlbnROb2RlLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnLCAhb2xkUHJpY2UpO1xyXG5cclxuXHRcdFx0Zm9ybUl0ZW0ucXVlcnlTZWxlY3RvcignLnByb2NlZHVyZS1mb3JtX19pdGVtLXByaWNlLW9sZC12YWx1ZScpLnRleHRDb250ZW50ID0gb2xkUHJpY2U7XHJcblxyXG5cdFx0XHRmb3JtSXRlbS5xdWVyeVNlbGVjdG9yKCcucHJvY2VkdXJlLWZvcm1fX2l0ZW0tc2FsZScpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnLCAhc2FsZSk7XHJcblxyXG5cdFx0XHRmb3JtSXRlbS5xdWVyeVNlbGVjdG9yKCcucHJvY2VkdXJlLWZvcm1fX2l0ZW0tc2FsZScpLnRleHRDb250ZW50ID0gc2FsZSArICclJztcclxuXHJcblx0XHRcdGZvcm1JdGVtLnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2JveC1vbmx5X19pbnB1dCcpLnNldEF0dHJpYnV0ZSgnZGF0YS1wcmljZScsIHByaWNlKTtcclxuXHRcdFx0Zm9ybUl0ZW0ucXVlcnlTZWxlY3RvcignLmNoZWNrYm94LW9ubHlfX2lucHV0Jykuc2V0QXR0cmlidXRlKCdkYXRhLXByaWNlLW9sZCcsIG9sZFByaWNlKTtcclxuXHJcblx0XHQvLyDQt9Cw0L/Rg9GB0LrQsNC10Lwg0LjQt9C80LXQvdC10L3QuNC1INGE0L7RgNC80YtcclxuXHJcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9jZWR1cmUtZm9ybScpLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvY2VkdXJlLXByb2R1Y3QgLmFydGljbGVpZC1ldmVudHNfX2Zvcm0nKSk7XHJcblxyXG4vLyBkZXNjIHJpZ2h0XHJcbiggZGVzYyA9PiB7XHJcblxyXG5cdFwidXNlIHN0cmljdFwiO1xyXG5cclxuXHRBcnJheS5mcm9tKGRlc2MsIGVsID0+IHtcclxuXHJcblx0XHRjb25zdCBidG4gPSBlbC5xdWVyeVNlbGVjdG9yKCcucHJvY2VkdXJlLWRlc2NfX2J0bicpLFxyXG5cdFx0XHQgIGlubmVyID0gZWwucXVlcnlTZWxlY3RvcignLnByb2NlZHVyZS1kZXNjX19pbm5lcicpO1xyXG5cclxuXHRcdGlmKGlubmVyLmNsaWVudEhlaWdodCA8PSBlbC5jbGllbnRIZWlnaHQpIHtcclxuXHJcblx0XHRcdGVsLmNsYXNzTGlzdC5hZGQoJ2lzLXNob3cnKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZWwuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtb3BlbicpKTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvY2VkdXJlLWRlc2MnKSk7XHJcblxyXG4vLyByZXN1bHQgaW4gdGFibGVcclxuKCBidG4gPT4ge1xyXG5cclxuXHRcInVzZSBzdHJpY3RcIjtcclxuXHJcblx0YnRuICYmIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvY2VkdXJlLWZvcm0nKS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcInN1Ym1pdFwiKSkpO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2NlZHVyZS1mb3JtX19yZXN1bHQtc3VibWl0JykpOyIsIlxyXG4oIGZvcm0gPT4ge1xyXG5cclxuXHRcInVzZSBzdHJpY3RcIjtcclxuXHJcblx0aWYoIWZvcm0pIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Y29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWNlcnMtbGlzdCcpLFxyXG5cdFx0ICBsZXR0ZXJCbG9ja3MgPSBsaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWNlcnMtbGlzdF9fbGV0dGVyJyksXHJcblx0XHQgIGl0ZW1zID0gbGlzdC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjZXJzLWxpc3RfX2l0ZW0nKTtcclxuXHJcblx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcblxyXG5cdFx0Y29uc3QgbGV0dGVyID0gZm9ybS5lbGVtZW50cy5sZXR0ZXIudmFsdWUsXHJcblx0XHRcdCAgY291bnRyeSA9IGZvcm0uZWxlbWVudHMuY291bnRyeS52YWx1ZSxcclxuXHRcdFx0ICBjYXRlZ29yeSA9IGZvcm0uZWxlbWVudHMuY2F0ZWdvcnkudmFsdWU7XHJcblxyXG5cdFx0Ly8g0YHQutGA0YvQstCw0LXQvCAvINC/0L7QutCw0LfRi9Cy0LDQtdC8INCx0LvQvtC60Lgg0LIg0LfQsNCy0LjRh9C40LzQvtGB0YLQuCDQvtGCINCR0YPQutCy0YtcclxuXHRcdGlmKGxldHRlciAhPT0gJ2FsbCcpIHtcclxuXHJcblx0XHRcdEFycmF5LmZyb20obGV0dGVyQmxvY2tzLCBlbCA9PlxyXG5cdFx0XHRcdGVsLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnLCBsZXR0ZXIgIT09IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1sZXR0ZXInKSkpO1xyXG5cclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cclxuXHRcdFx0QXJyYXkuZnJvbShsZXR0ZXJCbG9ja3MsIGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdC8vINC/0L7QutCw0LfRi9Cy0LDQtdC8INCy0YHQtSDRjdC70LXQvNC10L3RgtGLXHJcblx0XHRBcnJheS5mcm9tKGl0ZW1zLCBlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xyXG5cclxuXHRcdC8vINGB0LrRgNGL0LLQsNC10Lwg0L/QviDQodGC0YDQsNC90LVcclxuXHRcdGlmKGNvdW50cnkgIT09ICdhbGwnKSB7XHJcblxyXG5cdFx0XHRBcnJheS5mcm9tKGl0ZW1zLCBlbCA9PiB7XHJcblxyXG5cdFx0XHRcdGlmKGNvdW50cnkgIT09IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1jb3VudHJ5Jykpe1xyXG5cclxuXHRcdFx0XHRcdGVsLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdC8vINGB0LrRgNGL0LLQsNC10Lwg0L/QviDQmtCw0YLQtdCz0L7RgNC40LhcclxuXHRcdGlmKGNhdGVnb3J5ICE9PSAnYWxsJykge1xyXG5cclxuXHRcdFx0QXJyYXkuZnJvbShpdGVtcywgZWwgPT4ge1xyXG5cclxuXHRcdFx0XHRpZihjYXRlZ29yeSAhPT0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWNhdGVnb3J5Jykpe1xyXG5cclxuXHRcdFx0XHRcdGVsLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdC8vINGB0LrRgNGL0LLQsNC10Lwg0LHQu9C+0Log0LXRgdC70Lgg0LIg0L3QtdC8INC90LXRgiDQstC40LTQuNC80YvRhSDRjdC70LXQvNC10L3RgtC+0LJcclxuXHRcdEFycmF5LmZyb20obGV0dGVyQmxvY2tzLCBlbCA9PiB7XHJcblxyXG5cdFx0XHRpZihlbC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjZXJzLWxpc3RfX2l0ZW0nKS5sZW5ndGggPT09IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWNlcnMtbGlzdF9faXRlbS5oaWRlJykubGVuZ3RoKSB7XHJcblxyXG5cdFx0XHRcdGVsLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyDQtdGB0LvQuCDQvdC40YfQtdCz0L4g0L3QtdGCXHJcblxyXG5cdFx0bGlzdC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1lbXB0eScsIGxldHRlckJsb2Nrcy5sZW5ndGggPT09IGxpc3QucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y2Vycy1saXN0X19sZXR0ZXIuaGlkZScpLmxlbmd0aCk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y2Vycy1maWx0ZXInKSk7IiwiXHJcbi8vINC/0LXRgNC10LrQu9GO0YfQtdC90LjQtSDRhNC+0YLQvlxyXG4oIHByZXZpZXcgID0+IHtcclxuXHJcblx0aWYoIXByZXZpZXcubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGNvbnN0IHN3aXBlclByb2R1Y3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpcGVyLWNvbnRhaW5lci0tcHJvZHVjdCcpO1xyXG5cclxuXHRBcnJheS5mcm9tKHByZXZpZXcsIChlbCwgaW5kZXgpID0+IHtcclxuXHJcblx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcblx0XHRcdEFycmF5LmZyb20ocHJldmlldywgZWxlbSA9PiB7XHJcblxyXG5cdFx0XHRcdGVsZW0uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJywgZWwgPT09IGVsZW0pO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRpZihzd2lwZXJQcm9kdWN0LnN3aXBlcikge1xyXG5cclxuXHRcdFx0XHRzd2lwZXJQcm9kdWN0LnN3aXBlci5zbGlkZVRvKGluZGV4KTtcclxuXHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblxyXG5cdFx0XHRcdHN3aXBlclByb2R1Y3Quc2V0QXR0cmlidXRlKCdkYXRhLWluaXRpYWxTbGlkZScsIGluZGV4KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdC1pbWdfX3ByZXZpZXctaXRlbScpKTtcclxuXHJcbi8vINCn0LDRgdGC0L4g0L/QvtC60YPQv9Cw0Y7RgiDQstC80LXRgdGC0LVcclxuXHJcbiggc2V0ID0+IHtcclxuXHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cdGlmKCFzZXQubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdEFycmF5LmZyb20oc2V0LCBmb3JtID0+IHtcclxuXHJcblx0XHRjb25zdCBpbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3Qtc2V0X19pbnB1dCcpLFxyXG5cdFx0XHQgIHRvdGFsID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1zZXRfX3RvdGFsLXZhbHVlJyksXHJcblx0XHRcdCAgdG90YWxOb3RTYWxlID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1zZXRfX3RvdGFsLXZhbHVlLW5vdC1zYWxlJyksXHJcblx0XHRcdCAgc2FsZSA9IGZvcm0ucXVlcnlTZWxlY3RvcignLnByb2R1Y3Qtc2V0X190b3RhbC12YWx1ZS1zYWxlJyk7XHJcblxyXG5cdFx0Ly8g0LrQvdC+0L/QutC4IGNoZWNrXHJcblxyXG5cdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRsZXQgX3RvdGFsID0gMCxcclxuXHRcdFx0XHRfc2FsZSAgPSAwO1xyXG5cclxuXHRcdFx0QXJyYXkuZnJvbShpbnB1dCwgZWwgPT4ge1xyXG5cclxuXHRcdFx0XHRlbC5jbG9zZXN0KCcucHJvZHVjdC1zZXRfX2l0ZW0nKS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1vZmYnLCAhZWwuY2hlY2tlZCk7XHJcblxyXG5cdFx0XHRcdGlmKGVsLmNoZWNrZWQpIHtcclxuXHJcblx0XHRcdFx0XHRfc2FsZSArPSBwYXJzZUZsb2F0KGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1zYWxlJykpO1xyXG5cdFx0XHRcdFx0X3RvdGFsICs9IHBhcnNlRmxvYXQoZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXByaWNlJykpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHNhbGUudGV4dENvbnRlbnQgPSBfc2FsZTtcclxuXHRcdFx0dG90YWwudGV4dENvbnRlbnQgPSBfdG90YWw7XHJcblx0XHRcdHRvdGFsTm90U2FsZS50ZXh0Q29udGVudCA9IF90b3RhbCArIF9zYWxlO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWN0LXNldCcpKTsiLCJcclxuKChxdWFudGl0eSkgPT4ge1xyXG5cclxuXHRcInVzZSBzdHJpY3RcIjtcclxuXHJcblx0aWYoIXF1YW50aXR5Lmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRBcnJheS5mcm9tKHF1YW50aXR5LCBlbCA9PiB7XHJcblxyXG5cdFx0Y29uc3QgdXAgPSBlbC5xdWVyeVNlbGVjdG9yKCcucXVhbnRpdHlfX2J0bi0tdXAnKSxcclxuXHRcdFx0ICBkb3duID0gZWwucXVlcnlTZWxlY3RvcignLnF1YW50aXR5X19idG4tLWRvd24nKSxcclxuXHRcdFx0ICBjb3VudCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5xdWFudGl0eV9fY291bnQnKTtcclxuXHJcblx0XHRsZXQgdmFsdWUgPSBudWxsO1xyXG5cclxuXHRcdGNvbnN0IHRlc3RJc05hTiA9ICgpID0+IHtcclxuXHJcblx0XHRcdGlmICggaXNOYU4ocGFyc2VJbnQoY291bnQudmFsdWUpKSApIHtcclxuXHJcblx0XHRcdFx0Y291bnQudmFsdWUgPSAxO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH07XHJcblxyXG5cdFx0dXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG5cdFx0XHR2YWx1ZSA9IHBhcnNlSW50KGNvdW50LnZhbHVlKSArIDE7XHJcblxyXG5cdFx0XHRjb3VudC52YWx1ZSA9IHZhbHVlO1xyXG5cclxuXHRcdFx0dGVzdElzTmFOKCk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0ZG93bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcblx0XHRcdHZhbHVlID0gcGFyc2VJbnQoY291bnQudmFsdWUpIC0gMTtcclxuXHJcblx0XHRcdGlmKHZhbHVlIDwgMSkge1xyXG5cclxuXHRcdFx0XHR2YWx1ZSA9IDE7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRjb3VudC52YWx1ZSA9IHZhbHVlO1xyXG5cclxuXHRcdFx0dGVzdElzTmFOKCk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Y291bnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiBzZXRUaW1lb3V0KCAoKSA9PiBjb3VudC5zZXRTZWxlY3Rpb25SYW5nZSgwLDkpLCAxMDApKTtcclxuXHJcblx0XHRjb3VudC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4gdGVzdElzTmFOKCkpO1xyXG5cclxuXHRcdGNvdW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKCkgPT4gY291bnQudmFsdWUgPSBjb3VudC52YWx1ZS5yZXBsYWNlKC9bXFxEXS9nLCAnJykpO1xyXG5cclxuXHR9KTtcclxuXHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucXVhbnRpdHknKSk7IiwiLy8gYWpheCBhZGQgaXRlbVxyXG5cclxuKCBmb3JtID0+IHtcclxuXHJcblx0aWYoIWZvcm0pIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Y29uc3QgYnRuID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuYnRuJyk7XHJcblxyXG5cdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0YnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcblx0XHRmZXRjaChmb3JtLmdldEF0dHJpYnV0ZSgnYWN0aW9uJyksIHtcclxuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHQnWC1SZXF1ZXN0ZWQtV2l0aCcgOiAnWE1MSHR0cFJlcXVlc3QnXHJcblx0XHRcdH0sXHJcblx0XHRcdGJvZHk6IG5ldyBGb3JtRGF0YShmb3JtKVxyXG5cdFx0fSlcclxuXHRcdC50aGVuKCByZXNwb25zZSA9PiB7XHJcblxyXG5cdFx0XHRjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcblxyXG5cdFx0XHRidG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcblx0XHRcdGZvcm0uZWxlbWVudHMucGFnZS52YWx1ZSA9IHBhcnNlSW50KGZvcm0uZWxlbWVudHMucGFnZS52YWx1ZSArIDEpO1xyXG5cclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jldmlldy1zb3J0LXJlc3VsdCcpLmlubmVySFRNTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXZpZXctc29ydC1yZXN1bHQnKS5pbm5lckhUTUwgKyByZXNwb25zZS50ZXh0KCk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJldmlld19fYWpheC1hZGQnKSk7XHJcblxyXG5cclxuLy8g0YHQvtGA0YLQuNGA0L7QstCw0LrQsFxyXG5cclxuKCBzb3J0ID0+IHtcclxuXHJcblx0aWYoIXNvcnQubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdEFycmF5LmZyb20oc29ydCwgZm9ybSA9PiB7XHJcblxyXG5cdFx0Ly8g0L7RgtC/0YDQsNCy0LrQsFxyXG5cclxuXHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0ZmV0Y2goZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpLCB7XHJcblx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdFx0J1gtUmVxdWVzdGVkLVdpdGgnIDogJ1hNTEh0dHBSZXF1ZXN0J1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Ym9keTogbmV3IEZvcm1EYXRhKGZvcm0pXHJcblx0XHRcdH0pXHJcblx0XHRcdC50aGVuKCByZXNwb25zZSA9PiB7XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmV2aWV3LXNvcnQtcmVzdWx0JykuaW5uZXJIVE1MID0gcmVzcG9uc2UudGV4dCgpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJldmlldy1zb3J0JykpO1xyXG5cclxuLy8g0L/QvtC60LDQt9Cw0YLRjCDRhNC+0YDQvNGDXHJcbiggZm9ybSA9PiB7XHJcblxyXG5cdGlmKCFmb3JtKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGlmKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Jldmlldy1mb3JtX19zdWJqZWN0LWlucHV0Jykpe1xyXG5cclxuXHRcdFx0aWYoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS10eXBlJykgPT09ICdyZXZpZXcnKSB7XHJcblxyXG5cdFx0XHRcdEFycmF5LmZyb20oZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1yZXZpZXddJyksIGVsID0+XHJcblx0XHRcdFx0XHRlbC50ZXh0Q29udGVudCA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1yZXZpZXcnKSk7XHJcblxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cclxuXHRcdFx0XHRBcnJheS5mcm9tKGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcmVxdWVzdF0nKSwgZWwgPT5cclxuXHRcdFx0XHRcdGVsLnRleHRDb250ZW50ID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXJlcXVlc3QnKSk7XHJcblxyXG5cdFx0XHRcdGZvcm0ucXVlcnlTZWxlY3RvcignLnJldmlldy1mb3JtX19oaWRkZW4taW4tcmVxdWVzdCcpLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdEFycmF5LmZyb20oZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcucmV2aWV3LWZvcm1fX2ZpZWxkc2V0JyksIGVsID0+XHJcblx0XHRcdFx0ZWwuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtaGlkZScpKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJldmlldy1mb3JtJykpO1xyXG5cclxuLy8gbGlrZVxyXG5cclxuKCByZXZpZXcgPT4ge1xyXG5cclxuXHRpZighcmV2aWV3KSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdHJldmlldy5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0aWYoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncmV2aWV3LWxpa2UnKSkge1xyXG5cclxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdGNvbnN0IGZvcm0gPSBldmVudC50YXJnZXQ7XHJcblxyXG5cdFx0XHRmZXRjaChmb3JtLmdldEF0dHJpYnV0ZSgnYWN0aW9uJyksIHtcclxuXHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdFx0XHQnQ29udGVudC1UeXBlJyA6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0XHRcdCdYLVJlcXVlc3RlZC1XaXRoJyA6ICdYTUxIdHRwUmVxdWVzdCdcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGJvZHk6IG5ldyBGb3JtRGF0YShmb3JtKVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQudGhlbiggcmVzcG9uc2UgPT4ge1xyXG5cclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcblx0XHRcdFx0Y29uc3Qgb2JqID0gcmVzcG9uc2UuanNvbigpO1xyXG5cclxuXHRcdFx0XHRpZihvYmoubW9kZSkge1xyXG5cclxuXHRcdFx0XHRcdGZvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtbGlrZScsIG9iai5tb2RlID09PSBcImFkZFwiKTtcclxuXHRcdFx0XHRcdGZvcm0ucXVlcnlTZWxlY3RvcignLnJldmlldy1saWtlX19jb3VudCcpLnRleHRDb250ZW50ID0gb2JqLmNvdW50O1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jldmlldy1zb3J0LXJlc3VsdCcpKTtcclxuXHJcblxyXG5cclxuIiwiKChmb290ZXIpID0+IHtcclxuXHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cdGlmICgnSW50ZXJzZWN0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdykge1xyXG5cclxuXHRcdGNvbnN0IG9wdGlvbnMgPSB7XHJcblx0XHRcdHJvb3Q6IG51bGwsXHJcblx0XHRcdHJvb3RNYXJnaW46ICcwcHgnLFxyXG5cdFx0XHR0aHJlc2hvbGQ6IFsuMV1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhcicpO1xyXG5cclxuXHRcdGNvbnN0IGNhbGxiYWNrID0gKGVudHJpZXMsIG9ic2VydmVyKSA9PlxyXG5cclxuXHRcdFx0QXJyYXkuZnJvbShlbnRyaWVzLCBlbnRyeSA9PiB7XHJcblxyXG5cdFx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnYmctZm9vdGVyJywgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwLjEgJiYgd2luZG93LnBhZ2VZT2Zmc2V0ID4gMCk7XHJcblxyXG5cdFx0XHRcdGlmKGJhcikge1xyXG5cclxuXHRcdFx0XHRcdGJhci5jbGFzc0xpc3QudG9nZ2xlKCdpcy1oaWRkZW4nLCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDAuMSk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGNhbGxiYWNrLCBvcHRpb25zKTtcclxuXHJcblx0XHRvYnNlcnZlci5vYnNlcnZlKGZvb3Rlcik7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXInKSk7IiwiKChzZWFyY2gpPT57XHJcblxyXG5cdFwidXNlIHN0cmljdFwiO1xyXG5cclxuXHRpZighc2VhcmNoLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRBcnJheS5mcm9tKHNlYXJjaCwgZm9ybSA9PiB7XHJcblxyXG5cdFx0Y29uc3QgcmVzZXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfX3Jlc2V0JyksXHJcblx0XHRcdCAgaW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfX2lucHV0JyksXHJcblx0XHRcdCAgcmVzdWx0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX19yZXN1bHQnKTtcclxuXHJcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2V0JywgKCkgPT4ge1xyXG5cclxuXHRcdFx0cmVzZXQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cdFx0XHRyZXN1bHQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuXHRcdFx0c2V0VGltZW91dCggKCkgPT4gaW5wdXQuZm9jdXMoKSwgMTAwMCk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0aW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRyZXNldC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJywgIWlucHV0LnZhbHVlKTtcclxuXHRcdFx0cmVzdWx0LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnLCAhaW5wdXQudmFsdWUpO1xyXG5cclxuXHRcdFx0aWYoaW5wdXQudmFsdWUubGVuZ3RoID4gMyAmJiBldmVudC5rZXkgIT09ICdlbnRlcicpe1xyXG5cclxuXHRcdFx0XHRmb3JtLmNsYXNzTGlzdC5hZGQoJ2lzLWxvYWRpbmcnKTtcclxuXHJcblx0XHRcdFx0ZmV0Y2goZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpLCB7XHJcblx0XHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHRcdFx0J1gtUmVxdWVzdGVkLVdpdGgnIDogJ1hNTEh0dHBSZXF1ZXN0J1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGJvZHk6IG5ldyBGb3JtRGF0YShmb3JtKVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LnRoZW4oIHJlc3BvbnNlID0+IHtcclxuXHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcblx0XHRcdFx0XHRyZXN1bHQuaW5uZXJIVE1MID0gcmVzcG9uc2UudGV4dCgpO1xyXG5cdFx0XHRcdFx0Zm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1sb2FkaW5nJyk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWFyY2gnKSk7IiwiKCBpdGVtcyA9PiB7XHJcblxyXG5cdGlmKCFpdGVtcy5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0QXJyYXkuZnJvbShpdGVtcywgZWwgPT4ge1xyXG5cclxuXHRcdGNvbnN0IHNlbGVjdCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpO1xyXG5cclxuXHRcdHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRzZWxlY3QuYmx1cigpO1xyXG5cdFx0XHRlbC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1kZWZhdWx0Jyk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdCcpKTsiLCIoIGJhciA9PiB7XHJcblxyXG5cdGlmKCFiYXIpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0YmFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGlmKGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuaXMtYWN0aXZlJykpIHtcclxuXHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdGJhci5jbGFzc0xpc3QudG9nZ2xlKCdpcy1vcGVuJyk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXJ2aWNlLXBhZ2UtYmFyJykpOyIsIi8vINC40L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINGB0LvQsNC50LTQtdGA0L7QslxyXG4oIHJhbmdlID0+IHtcclxuXHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cdGlmKCFyYW5nZS5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0QXJyYXkuZnJvbShyYW5nZSwgc2xpZGVyID0+IHtcclxuXHJcblx0XHRjb25zdCBzdGVwID0gcGFyc2VJbnQoc2xpZGVyLmdldEF0dHJpYnV0ZSgnZGF0YS1zdGVwJyksIDEwKSB8fCAxLFxyXG5cdFx0XHQgIG1pbiA9IHBhcnNlSW50KHNsaWRlci5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWluJyksIDEwKSB8fCAwLFxyXG5cdFx0XHQgIG1heCA9IHBhcnNlSW50KHNsaWRlci5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWF4JyksIDEwKSB8fCA5OTk5OTk5LFxyXG5cdFx0XHQgIGlucHV0ID0gc2xpZGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnB1dCcpLFxyXG5cdFx0XHQgIGlucHV0TWluID0gc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItcmFuZ2VfX2lucHV0LW1pbicpLFxyXG5cdFx0XHQgIGlucHV0TWF4ID0gc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItcmFuZ2VfX2lucHV0LW1heCcpLFxyXG5cdFx0XHQgIHRyYWNrID0gc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItcmFuZ2VfX3RyYWNrJyk7XHJcblxyXG5cdFx0bm9VaVNsaWRlci5jcmVhdGUodHJhY2ssIHtcclxuXHRcdFx0Y29ubmVjdDogdHJ1ZSxcclxuXHRcdFx0c3RhcnQ6IFttaW4sIG1heF0sXHJcblx0XHRcdHN0ZXA6IHN0ZXAsXHJcblx0XHRcdHJhbmdlOiB7XHJcblx0XHRcdFx0J21pbic6IG1pbixcclxuXHRcdFx0XHQnbWF4JzogbWF4XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdHRyYWNrLm5vVWlTbGlkZXIub24oJ3NsaWRlJywgdmFsdWVzID0+IHtcclxuXHJcblx0XHRcdGlucHV0TWluLnZhbHVlID0gQ0cuc2VwTnVtYmVyKHBhcnNlSW50KHZhbHVlc1swXSwgMTApKTtcclxuXHRcdFx0aW5wdXRNYXgudmFsdWUgPSBDRy5zZXBOdW1iZXIocGFyc2VJbnQodmFsdWVzWzFdLCAxMCkpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdHRyYWNrLm5vVWlTbGlkZXIub24oJ2VuZCcsIHZhbHVlcyA9PiBpbnB1dE1heC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiLCB7J2J1YmJsZXMnIDogdHJ1ZX0pKSk7XHJcblxyXG5cdC8vINGB0L7QsdGL0YLQuNGPINCyINC40L3Qv9GD0YLQsNGFXHJcblxyXG5cdFx0QXJyYXkuZnJvbShpbnB1dCwgZWwgPT4ge1xyXG5cclxuXHRcdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRcdGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xyXG5cclxuXHRcdFx0XHRcdGVsLmJsdXIoKTtcclxuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRlbC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiLCB7J2J1YmJsZXMnIDogdHJ1ZX0pKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IGVsLnZhbHVlID0gQ0cuc2VwTnVtYmVyKGVsLnZhbHVlKSk7XHJcblxyXG5cdFx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHtcclxuXHJcblx0XHRcdFx0aWYoZWwudmFsdWUubGVuZ3RoKSB7XHJcblxyXG5cdFx0XHRcdFx0ZWwudmFsdWUgPSBDRy5zdHJUb051bWJlcihlbC52YWx1ZSk7XHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCAoKSA9PiBlbC5zZXRTZWxlY3Rpb25SYW5nZSgwLDk5KSwgMTAwKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuXHJcblx0XHRcdFx0bGV0IF9taW4gPSBwYXJzZUludChDRy5zdHJUb051bWJlcihpbnB1dE1pbi52YWx1ZSksIDEwKSxcclxuXHRcdFx0XHRcdF9tYXggPSBwYXJzZUludChDRy5zdHJUb051bWJlcihpbnB1dE1heC52YWx1ZSksIDEwKTtcclxuXHJcblx0XHRcdFx0aWYgKF9taW4gPCBtaW4pIHtcclxuXHJcblx0XHRcdFx0XHRfbWluID0gbWluO1xyXG5cdFx0XHRcdFx0dGhpcy52YWx1ZSA9IG1pbjtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoX21heCA+IG1heCkge1xyXG5cclxuXHRcdFx0XHRcdF9tYXggPSBtYXg7XHJcblx0XHRcdFx0XHR0aGlzLnZhbHVlID0gbWF4O1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmKF9taW4gPCBfbWF4KSB7XHJcblxyXG5cdFx0XHRcdFx0dHJhY2subm9VaVNsaWRlci5zZXQoW19taW4sIF9tYXhdKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlci1yYW5nZScpKTsiLCIoIGZvcm1zID0+IHtcclxuXHJcblx0aWYoIWZvcm1zLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRBcnJheS5mcm9tKGZvcm1zLCBmb3JtID0+IHtcclxuXHJcblx0XHRjb25zdCBjb2RlID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZm9ybS1zbXNfX2NvZGUnKSxcclxuXHRcdFx0ICB0aW1lciA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmZvcm0tc21zX190aW1lcicpLFxyXG5cdFx0XHQgIHRleHRFcnJvciA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmZvcm0tbGtfX2FmdGVyJyksXHJcblx0XHRcdCAgYnRuUmVwZWF0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZm9ybS1sa19fcmVwZWF0LXNtcycpO1xyXG5cclxuXHRcdGNvbnN0IHN1Ym1pdEZvcm0gPSByZXBlYXQgPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XHJcblxyXG5cdFx0XHRpZihyZXBlYXQpIHtcclxuXHJcblx0XHRcdFx0Zm9ybURhdGEuYXBwZW5kKCdyZXBlYXQtY29kZScsICdtb3JlJyk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmZXRjaChmb3JtLmdldEF0dHJpYnV0ZSgnYWN0aW9uJyksIHtcclxuXHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdFx0XHQnWC1SZXF1ZXN0ZWQtV2l0aCcgOiAnWE1MSHR0cFJlcXVlc3QnXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRib2R5OiBmb3JtRGF0YVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQudGhlbiggcmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG5cdFx0XHQudGhlbiggb2JqID0+IHtcclxuXHJcblx0XHRcdFx0Y29uc29sZS5sb2cob2JqKTtcclxuXHJcblx0XHRcdFx0dGV4dEVycm9yLmNsYXNzTGlzdC5hZGQoJ2lzLWVycm9yJyk7XHJcblxyXG5cdFx0XHRcdGlmKG9iai5mcm9tKSB7XHJcblxyXG5cdFx0XHRcdFx0Zm9ybS5xdWVyeVNlbGVjdG9yKCcuZm9ybS1zbXNfX2Zyb20nKS50ZXh0Q29udGVudCA9IG9iai5mcm9tO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmKG9iai5yZXBlYXQgPT09ICdkaXNhYmxlZCcpIHtcclxuXHJcblx0XHRcdFx0XHRmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWxrX19yZXBlYXQnKS5pbm5lckhUTUwgPSBvYmoudGV4dDtcclxuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdGZvcm0uc2V0dXBUaW1lcihvYmoucmVwZWF0ID8gb2JqLnJlcGVhdCA6IHVuZGVmaW5lZCk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYob2JqLmNvbmZpcm1QaG9uZS5kaXNhYmxlZElkKSB7XHJcblxyXG5cdFx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBvYmouZGlzYWJsZWQuaWQgKyAnIC5pbnB1dCcpLmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fTtcclxuXHJcblx0XHRmb3JtLnNldHVwVGltZXIgPSAoc2VjdW5kcyA9IDYwKSA9PiB7XHJcblxyXG5cdFx0XHR0aW1lci50ZXh0Q29udGVudCA9IHNlY3VuZHM7XHJcblxyXG5cdFx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdHNlY3VuZHMtLTtcclxuXHJcblx0XHRcdFx0aWYoc2VjdW5kcyA+IDApIHtcclxuXHJcblx0XHRcdFx0XHRmb3JtLnNldHVwVGltZXIoc2VjdW5kcyk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRidG5SZXBlYXQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cdFx0XHRcdFx0dGltZXIucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0sIDEwMCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdC8vINC/0L7QstGC0L7RgNC90YvQuSDQt9Cw0L/RgNC+0YEg0YHQvNGBXHJcblxyXG5cdFx0YnRuUmVwZWF0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0YnRuUmVwZWF0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHRcdFx0dGltZXIucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRjb2RlLnZhbHVlID0gJyc7XHJcblxyXG5cdFx0XHRzdWJtaXRGb3JtKHRydWUpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vINC+0LHRgNCw0LHQvtGC0LrQsCDQvdC10LLQtdGA0L3Ri9GFINGB0LzRgVxyXG5cclxuXHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdHN1Ym1pdEZvcm0oKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybS1zbXMnKSk7IiwiIiwiQ0cuc3dpcGVyID0gc3dpcGUgPT4ge1xyXG5cclxuXHRsZXQgbXlTd2lwZSA9IG51bGwsXHJcblx0XHR0b2dnbGVTd2lwZSA9IG51bGwsXHJcblx0XHRyZXNldFN3aXBlID0gbnVsbCxcclxuXHRcdHRpbWVyID0gMTAwMDA7XHJcblxyXG5cdGlmKENvb2tpZXMuZ2V0KCdhY2l0eScpIHx8IENvb2tpZXMuZ2V0KCd1Y2l0eScpKSB7XHJcblxyXG5cdFx0dGltZXIgPSAwO1xyXG5cclxuXHR9XHJcblxyXG5cdGNvbnN0IHN3aXBlQ29udHJvbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuXHRcdCAgc3dpcGVOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuXHRcdCAgc3dpcGVCdG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcblx0XHQgIHN3aXBlTmV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpLFxyXG5cdFx0ICBzd2lwZVByZXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSxcclxuXHRcdCAgaXRlbXMgPSBzd2lwZS5xdWVyeVNlbGVjdG9yQWxsKCcuc3dpcGVyLXNsaWRlJyksXHJcblx0XHQgIGNvdW50ID0gaXRlbXMubGVuZ3RoLFxyXG5cdFx0ICBhdXRvcGxheSA9IHN3aXBlLmdldEF0dHJpYnV0ZSgnZGF0YS1hdXRvcGxheScpICogMTAwMCxcclxuXHRcdCAgaW5pdGlhbFNsaWRlID0gc3dpcGUuZ2V0QXR0cmlidXRlKCdkYXRhLWluaXRpYWxTbGlkZScpID8gcGFyc2VJbnQoc3dpcGUuZ2V0QXR0cmlidXRlKCdkYXRhLWluaXRpYWxTbGlkZScpKSA6IDA7XHJcblx0XHQgIGNhcmRMaXN0ID0gc3dpcGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzd2lwZXItY29udGFpbmVyLS1jYXJkLWxpc3QnKSxcclxuXHRcdCAgcHJvZHVjdCA9IHN3aXBlLmNsYXNzTGlzdC5jb250YWlucygnc3dpcGVyLWNvbnRhaW5lci0tcHJvZHVjdCcpLFxyXG5cdFx0ICBiaWxsYm9hcmQgPSBzd2lwZS5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXBlci1jb250YWluZXItLWJpbGxib2FyZCcpLFxyXG5cdFx0ICBjb21wYXJlID0gc3dpcGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzd2lwZXItY29udGFpbmVyLS1jb21wYXJlJyksXHJcblx0XHQgIGNvbXBhcmVUYWJsZSA9IHN3aXBlLmNsYXNzTGlzdC5jb250YWlucygnc3dpcGVyLWNvbnRhaW5lci0tY29tcGFyZS10YWJsZScpLFxyXG5cdFx0ICBnYWxsZXJ5ID0gc3dpcGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzd2lwZXItY29udGFpbmVyLS1nYWxsZXJ5Jyk7XHJcblxyXG5cdHN3aXBlTmF2LmNsYXNzTmFtZSA9ICdzd2lwZXItcGFnaW5hdGlvbic7XHJcblx0c3dpcGVDb250cm9scy5jbGFzc05hbWUgPSAnc3dpcGVyLWNvbnRyb2xzJztcclxuXHJcblx0c3dpcGVCdG5zLmNsYXNzTmFtZSA9ICdzd2lwZXItbmF2aWdhdGlvbic7XHJcblx0c3dpcGVQcmV2LmNsYXNzTmFtZSA9ICdzd2lwZXItYnV0dG9uLXByZXYgYnV0dG9uJztcclxuXHRzd2lwZU5leHQuY2xhc3NOYW1lID0gJ3N3aXBlci1idXR0b24tbmV4dCBidXR0b24nO1xyXG5cclxuXHRzd2lwZVByZXYuaW5uZXJIVE1MID0gJzxzdmcgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjI5XCIgdmlld0JveD1cIjAgMCAxNiAyOVwiPjxwYXRoIGQ9XCJNMCAxNC4wMzRjMC0uNTAzLjE5Mi0xLjAwNi41NzUtMS4zOUwxMi42NDUuNTc3YTEuOTY2IDEuOTY2IDAgMTEyLjc4IDIuNzhMNC43NDQgMTQuMDM0bDEwLjY4IDEwLjY4YTEuOTY2IDEuOTY2IDAgMDEtMi43OCAyLjc3OUwuNTc0IDE1LjQyM0ExLjk2IDEuOTYgMCAwMTAgMTQuMDM1elwiLz48L3N2Zz4nO1xyXG5cdHN3aXBlTmV4dC5pbm5lckhUTUwgPSAnPHN2ZyB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMjlcIiB2aWV3Qm94PVwiMCAwIDE2IDI5XCI+PHBhdGggZD1cIk0xNiAxNC4wMzRhMS45NiAxLjk2IDAgMDEtLjU3NSAxLjM5TDMuMzU1IDI3LjQ5M2ExLjk2NSAxLjk2NSAwIDExLTIuNzgtMi43OGwxMC42OC0xMC42NzlMLjU3NSAzLjM1NmExLjk2NiAxLjk2NiAwIDAxMi43OC0yLjc4bDEyLjA3IDEyLjA2OWMuMzgzLjM4NC41NzUuODg3LjU3NSAxLjM5elwiLz48L3N2Zz4nO1xyXG5cclxuXHRzd2lwZUJ0bnMuYXBwZW5kQ2hpbGQoc3dpcGVQcmV2KTtcclxuXHRzd2lwZUJ0bnMuYXBwZW5kQ2hpbGQoc3dpcGVOZXh0KTtcclxuXHRzd2lwZUNvbnRyb2xzLmFwcGVuZENoaWxkKHN3aXBlQnRucyk7XHJcblx0c3dpcGVDb250cm9scy5hcHBlbmRDaGlsZChzd2lwZU5hdik7XHJcblx0c3dpcGUucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChzd2lwZUNvbnRyb2xzKTtcclxuXHJcblx0Ly8gZWFnZXJcclxuXHRpZihzd2lwZS5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXBlci1jb250YWluZXItLWxvYWRpbmctZWFnZXInKSkge1xyXG5cclxuXHRcdEFycmF5LmZyb20oc3dpcGUucXVlcnlTZWxlY3RvckFsbCgnW2xvYWRpbmc9XCJsYXp5XCJdJyksIGltZyA9PiBpbWcuc2V0QXR0cmlidXRlKCdsb2FkaW5nJywnZWFnZXInKSk7XHJcblxyXG5cdH1cclxuXHJcblx0Ly8gaGlkZVxyXG5cdEFycmF5LmZyb20oaXRlbXMsIGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XHJcblxyXG5cdHJlc2V0U3dpcGUgPSAoKSA9PiB7XHJcblxyXG5cdFx0aWYobXlTd2lwZSkge1xyXG5cclxuXHRcdFx0bXlTd2lwZS5kZXN0cm95KGZhbHNlLHRydWUpO1xyXG5cdFx0XHRteVN3aXBlID0gdW5kZWZpbmVkO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRzd2lwZU5hdi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblx0XHRzd2lwZUJ0bnMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cdFx0c3dpcGVDb250cm9scy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cdH1cclxuXHJcblx0cmVzZXRTd2lwZSgpO1xyXG5cclxuXHRpZiAoZ2FsbGVyeSkge1xyXG5cclxuXHRcdHRvZ2dsZVN3aXBlID0gKCkgPT4ge1xyXG5cclxuXHRcdFx0dG9nZ2xlU3dpcGUgPSBmYWxzZTtcclxuXHJcblx0XHRcdGNvbnN0IGNvdW50Q3VycmVudCA9IHN3aXBlLnF1ZXJ5U2VsZWN0b3IoJy5zd2lwZXItY291bnQnKTtcclxuXHJcblx0XHRcdGNvdW50Q3VycmVudC50ZXh0Q29udGVudCA9ICcnO1xyXG5cclxuXHRcdFx0aWYoY291bnQgPiAxKSB7XHJcblxyXG5cdFx0XHRcdHN3aXBlQnRucy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblx0XHRcdFx0c3dpcGVDb250cm9scy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblx0XHRcdFx0Y291bnRDdXJyZW50LnRleHRDb250ZW50ID0gKGluaXRpYWxTbGlkZSArIDEpICsgJy8nICsgY291bnQ7XHJcblxyXG5cdFx0XHRcdG5ldyBTd2lwZXIoc3dpcGUsIHtcclxuXHRcdFx0XHRcdGxvb3A6IHRydWUsXHJcblx0XHRcdFx0XHRpbml0aWFsU2xpZGU6IGluaXRpYWxTbGlkZSxcclxuXHRcdFx0XHRcdG5hdmlnYXRpb246IHtcclxuXHRcdFx0XHRcdFx0bmV4dEVsOiBzd2lwZU5leHQsXHJcblx0XHRcdFx0XHRcdHByZXZFbDogc3dpcGVQcmV2XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0b246IHtcclxuXHJcblx0XHRcdFx0XHRcdHNsaWRlQ2hhbmdlVHJhbnNpdGlvbkVuZDogKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZihzd2lwZS5zd2lwZXIpe1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGNvdW50Q3VycmVudC50ZXh0Q29udGVudCA9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHN3aXBlLnN3aXBlci5hY3RpdmVJbmRleCA9PT0gMCB8fCBzd2lwZS5zd2lwZXIuYWN0aXZlSW5kZXggPT09IGNvdW50ID9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb3VudCA6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3dpcGUuc3dpcGVyLmFjdGl2ZUluZGV4ICUgY291bnQ7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0Y291bnRDdXJyZW50LnRleHRDb250ZW50ICs9ICcvJyArIGNvdW50O1xyXG5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0aWYgKGNhcmRMaXN0KSB7XHJcblxyXG5cdFx0Y29uc3Qgcm93ID0gcGFyc2VJbnQoc3dpcGUuZ2V0QXR0cmlidXRlKCdkYXRhLWNvdW50LXJvdycpKTtcclxuXHJcblx0XHR0b2dnbGVTd2lwZSA9ICgpID0+IHtcclxuXHJcblx0XHRcdHJlc2V0U3dpcGUoKTtcclxuXHJcblx0XHRcdHN3aXBlLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnc3dpcGVyLWNvbnRhaW5lci1zdHlsZScpO1xyXG5cclxuXHRcdFx0aWYgKHdpbmRvdy5pbm5lcldpZHRoID49IENHLmJyZWFrUG9pbnRzKSB7XHJcblxyXG5cdFx0XHRcdGlmIChjb3VudCA+IHJvdykge1xyXG5cclxuXHRcdFx0XHRcdHN3aXBlLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnc3dpcGVyLWNvbnRhaW5lci1zdHlsZScpO1xyXG5cclxuXHRcdFx0XHRcdHN3aXBlQnRucy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRzd2lwZUNvbnRyb2xzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0XHRpZihzd2lwZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmF2JykpIHtcclxuXHJcblx0XHRcdFx0XHRcdHN3aXBlTmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0bXlTd2lwZSA9IG5ldyBTd2lwZXIoc3dpcGUsIHtcclxuXHRcdFx0XHRcdFx0bG9vcDogZmFsc2UsXHJcblx0XHRcdFx0XHRcdHNsaWRlc1BlclZpZXc6IHJvdyxcclxuXHRcdFx0XHRcdFx0c2xpZGVzUGVyR3JvdXA6IHJvdyxcclxuXHRcdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAzMCxcclxuXHRcdFx0XHRcdFx0bmF2aWdhdGlvbjoge1xyXG5cdFx0XHRcdFx0XHRcdG5leHRFbDogc3dpcGVOZXh0LFxyXG5cdFx0XHRcdFx0XHRcdHByZXZFbDogc3dpcGVQcmV2XHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHBhZ2luYXRpb246IHtcclxuXHRcdFx0XHRcdFx0XHRlbDogc3dpcGVOYXYsXHJcblx0XHRcdFx0XHRcdFx0Y2xpY2thYmxlOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdGJ1bGxldENsYXNzOiAnYnV0dG9uJyxcclxuXHRcdFx0XHRcdFx0XHRidWxsZXRBY3RpdmVDbGFzczogJ2lzLWFjdGl2ZSdcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0aWYgKHByb2R1Y3QpIHtcclxuXHJcblx0XHR0b2dnbGVTd2lwZSA9ICgpID0+IHtcclxuXHJcblx0XHRcdHRvZ2dsZVN3aXBlID0gZmFsc2U7XHJcblxyXG5cdFx0XHRzd2lwZU5hdi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblx0XHRcdHN3aXBlQ29udHJvbHMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuXHRcdFx0bmV3IFN3aXBlcihzd2lwZSwge1xyXG5cdFx0XHRcdGxvb3A6IGZhbHNlLFxyXG5cdFx0XHRcdGluaXRpYWxTbGlkZTogaW5pdGlhbFNsaWRlLFxyXG5cdFx0XHRcdHByZWxvYWRJbWFnZXM6IGZhbHNlLFxyXG5cdFx0XHRcdHBhZ2luYXRpb246IHtcclxuXHRcdFx0XHRcdGVsOiBzd2lwZU5hdixcclxuXHRcdFx0XHRcdGNsaWNrYWJsZTogdHJ1ZSxcclxuXHRcdFx0XHRcdGJ1bGxldENsYXNzOiAnYnV0dG9uJyxcclxuXHRcdFx0XHRcdGJ1bGxldEFjdGl2ZUNsYXNzOiAnaXMtYWN0aXZlJ1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdGlmIChiaWxsYm9hcmQpIHtcclxuXHJcblx0XHR0b2dnbGVTd2lwZSA9ICgpID0+IHtcclxuXHJcblx0XHRcdHRvZ2dsZVN3aXBlID0gZmFsc2U7XHJcblxyXG5cdFx0XHRzd2lwZU5hdi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblx0XHRcdHN3aXBlQnRucy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblx0XHRcdHN3aXBlQ29udHJvbHMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuXHRcdFx0bmV3IFN3aXBlcihzd2lwZSwge1xyXG5cdFx0XHRcdGxvb3A6IHRydWUsXHJcblx0XHRcdFx0cHJlbG9hZEltYWdlczogZmFsc2UsXHJcblx0XHRcdFx0YXV0b3BsYXk6IHtcclxuXHRcdFx0XHRcdGRlbGF5OiBhdXRvcGxheVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0bmF2aWdhdGlvbjoge1xyXG5cdFx0XHRcdFx0bmV4dEVsOiBzd2lwZU5leHQsXHJcblx0XHRcdFx0XHRwcmV2RWw6IHN3aXBlUHJldlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0cGFnaW5hdGlvbjoge1xyXG5cdFx0XHRcdFx0ZWw6IHN3aXBlTmF2LFxyXG5cdFx0XHRcdFx0Y2xpY2thYmxlOiB0cnVlLFxyXG5cdFx0XHRcdFx0YnVsbGV0Q2xhc3M6ICdidXR0b24nLFxyXG5cdFx0XHRcdFx0YnVsbGV0QWN0aXZlQ2xhc3M6ICdpcy1hY3RpdmUnXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0aWYgKGNvbXBhcmUpIHtcclxuXHJcblx0XHR0b2dnbGVTd2lwZSA9ICgpID0+IHtcclxuXHJcblx0XHRcdHRvZ2dsZVN3aXBlID0gZmFsc2U7XHJcblxyXG5cdFx0XHRjb25zdCBidG4gPSBzd2lwZS5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0YWxvZ19fY29tcGFyZS1uYXYgLmJ1dHRvbicpLFxyXG5cdFx0XHRcdCAgbXlTd2lwZUNvbXBhcmVUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2lwZXItY29udGFpbmVyLS1jb21wYXJlLXRhYmxlJyk7XHJcblxyXG5cdFx0XHRteVN3aXBlID0gbmV3IFN3aXBlcihzd2lwZSwge1xyXG5cdFx0XHRcdHNsaWRlc1BlclZpZXc6IDQsXHJcblx0XHRcdFx0c2ltdWxhdGVUb3VjaDogZmFsc2VcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRidG5bMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdG15U3dpcGUuc2xpZGVQcmV2KCk7XHJcblx0XHRcdFx0bXlTd2lwZUNvbXBhcmVUYWJsZS5zd2lwZXIuc2xpZGVQcmV2KCk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGJ0blsxXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcblx0XHRcdFx0bXlTd2lwZS5zbGlkZU5leHQoKTtcclxuXHRcdFx0XHRteVN3aXBlQ29tcGFyZVRhYmxlLnN3aXBlci5zbGlkZU5leHQoKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0c3dpcGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRcdGlmKGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuYnRuLS1yZW1vdmUnKSl7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3Qgc2xpZGUgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnN3aXBlci1zbGlkZScpO1xyXG5cclxuXHRcdFx0XHRcdEFycmF5LmZyb20oc3dpcGUucXVlcnlTZWxlY3RvckFsbCgnLnN3aXBlci1zbGlkZScpLCAoZWwsaW5kZXgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRcdGlmKGVsID09PSBzbGlkZSkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRzd2lwZS5zd2lwZXIucmVtb3ZlU2xpZGUoaW5kZXgpO1xyXG5cdFx0XHRcdFx0XHRcdG15U3dpcGVDb21wYXJlVGFibGUuc3dpcGVyLnJlbW92ZVNsaWRlKGluZGV4KTtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0aWYoc3dpcGUucXVlcnlTZWxlY3RvckFsbCgnLnN3aXBlci1zbGlkZScpLmxlbmd0aCA8PSA0KSB7XHJcblxyXG5cdFx0XHRcdFx0XHRidG5bMF0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cdFx0XHRcdFx0XHRidG5bMV0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdGlmIChjb21wYXJlVGFibGUpIHtcclxuXHJcblx0XHR0b2dnbGVTd2lwZSA9ICgpID0+IHtcclxuXHJcblx0XHRcdHRvZ2dsZVN3aXBlID0gZmFsc2U7XHJcblxyXG5cdFx0XHRteVN3aXBlID0gbmV3IFN3aXBlcihzd2lwZSwge1xyXG5cdFx0XHRcdHNsaWRlc1BlclZpZXc6IDQsXHJcblx0XHRcdFx0c2ltdWxhdGVUb3VjaDogZmFsc2VcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdFB1YlN1Yi5zdWJzY3JpYmUoJ3dpbmRvd1dpZHRoUmVzaXplJywgKCkgPT4ge1xyXG5cclxuXHRcdGlmICh3aW5kb3cuU3dpcGVyICYmIHRvZ2dsZVN3aXBlKSB7XHJcblxyXG5cdFx0XHR0b2dnbGVTd2lwZSgpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG5cdGlmKHdpbmRvdy5Td2lwZXIgJiYgdG9nZ2xlU3dpcGUpIHtcclxuXHJcblx0XHR0b2dnbGVTd2lwZSgpO1xyXG5cclxuXHR9XHJcblx0ZWxzZSB7XHJcblxyXG5cdFx0UHViU3ViLnN1YnNjcmliZSgnc3dpcGVySnNMb2FkJywgdG9nZ2xlU3dpcGUpO1xyXG5cclxuXHR9XHJcblxyXG5cdGlmKCFDRy5zd2lwZXJJbml0KSB7XHJcblxyXG5cdFx0Q0cuc3dpcGVySW5pdCA9IHRydWU7XHJcblxyXG5cdFx0Y29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcblxyXG5cdFx0c2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcclxuXHRcdHNjcmlwdC5hc3luYyA9IHRydWU7XHJcblx0XHRzY3JpcHQuc3JjID0gJy9qcy9zd2lwZXIubWluLmpzJztcclxuXHJcblx0XHRzY3JpcHQub25sb2FkID0gKCkgPT4gUHViU3ViLnB1Ymxpc2goJ3N3aXBlckpzTG9hZCcpO1xyXG5cclxuXHRcdHNldFRpbWVvdXQoICgpID0+IGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KSwgdGltZXIpO1xyXG5cclxuXHR9XHJcblxyXG5cdGlmKGF1dG9wbGF5KSB7XHJcblxyXG5cdFx0UHViU3ViLnN1YnNjcmliZSgnU3dpcGVyQXV0b1BsYXlTdG9wJywgKCkgPT5cclxuXHRcdFx0c3dpcGUuc3dpcGVyICYmIHN3aXBlLnN3aXBlci5hdXRvcGxheS5zdG9wKCkpO1xyXG5cclxuXHRcdFB1YlN1Yi5zdWJzY3JpYmUoJ1N3aXBlckF1dG9QbGF5U3RhcnQnLCAoKSA9PlxyXG5cdFx0XHRzd2lwZS5zd2lwZXIgJiYgc3dpcGUuc3dpcGVyLmF1dG9wbGF5LnN0YXJ0KCkpO1xyXG5cclxuXHR9XHJcblxyXG59O1xyXG5cclxuKChzd2lwZXJDb250YWluZXIpPT57XHJcblxyXG5cdFwidXNlIHN0cmljdFwiO1xyXG5cclxuXHRpZighc3dpcGVyQ29udGFpbmVyLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRBcnJheS5mcm9tKHN3aXBlckNvbnRhaW5lciwgc3dpcGUgPT4gQ0cuc3dpcGVyKHN3aXBlKSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3dpcGVyLWNvbnRhaW5lcicpKTsiLCIvKlxyXG4vLyB0YWItc3dpcGVyXHJcblxyXG4oKHRhYnMpPT57XHJcblxyXG5cdFwidXNlIHN0cmljdFwiO1xyXG5cclxuXHRpZighdGFicy5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0QXJyYXkuZnJvbSh0YWJzLCB0YWIgPT4ge1xyXG5cclxuXHRcdGNvbnN0IGJ0bnMgPSB0YWIucXVlcnlTZWxlY3RvckFsbCgnLnRhYi1zd2lwZXJfX2J0bicpLFxyXG5cdFx0XHQgIGl0ZW1zID0gdGFiLnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWItc3dpcGVyX19pdGVtJyk7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShidG5zLCBidG4gPT4ge1xyXG5cclxuXHRcdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRBcnJheS5mcm9tKGJ0bnMsIChfYnRuLCBpbmRleCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdF9idG4uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJywgX2J0biA9PT0gYnRuKTtcclxuXHRcdFx0XHRcdGl0ZW1zW2luZGV4XS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnLCBfYnRuID09PSBidG4pO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWItc3dpcGVyJykpO1xyXG5cclxuXHJcbiovXHJcbi8vIHRhYnNcclxuXHJcbigodGFicyk9PntcclxuXHJcblx0QXJyYXkuZnJvbSh0YWJzLCB0YWIgPT4ge1xyXG5cclxuXHRcdGxldCBidG4gPSB0YWIucXVlcnlTZWxlY3RvckFsbCgnLnRhYnNfX2J0bicpLFxyXG5cdFx0XHRpdGVtID0gdGFiLnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJzX19pdGVtJyksXHJcblx0XHRcdG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuXHRcdEFycmF5LmZyb20oYnRuLCAoZWwsaW5kZXgpID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IF9idG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHJcblx0XHRcdF9idG4uc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XHJcblxyXG5cdFx0XHRfYnRuLmNsYXNzTmFtZSA9ICdidXR0b24gdGFic19fbmF2LWJ0bic7XHJcblxyXG5cdFx0XHRfYnRuLnRleHRDb250ZW50ID0gZWwudGV4dENvbnRlbnQ7XHJcblxyXG5cdFx0XHRuYXYuYXBwZW5kQ2hpbGQoX2J0bik7XHJcblxyXG5cdFx0XHRfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRBcnJheS5mcm9tKGl0ZW0sIChlbGVtLGlueCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdGVsZW0uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtc2hvdycsIGlueCA9PT0gaW5kZXgpO1xyXG5cdFx0XHRcdFx0YnRuW2lueF0uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJywgaW54ID09PSBpbmRleCk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRlbC5yZW1vdmUoKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRuYXYuY2xhc3NMaXN0LmFkZCgndGFic19fbmF2Jyk7XHJcblxyXG5cdFx0YnRuID0gbmF2LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJzX19uYXYtYnRuJyk7XHJcblxyXG5cdFx0aXRlbVswXS5jbGFzc0xpc3QuYWRkKCdpcy1zaG93Jyk7XHJcblx0XHRidG5bMF0uY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XHJcblxyXG5cdFx0dGFiLmluc2VydEJlZm9yZShuYXYsIGl0ZW1bMF0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJzJykpO1xyXG4iLCIoKGVsZW0pPT57XHJcblxyXG5cdFwidXNlIHN0cmljdFwiO1xyXG5cclxuXHRpZihlbGVtKSB7XHJcblxyXG5cdFx0ZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdGlmKGV2ZW50LnRhcmdldC5jbG9zZXN0KCcudGV4dC1zaG9ydF9fYnRuJykpe1xyXG5cclxuXHRcdFx0XHRldmVudC50YXJnZXQuY2xvc2VzdCgnLnRleHQtc2hvcnQnKS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1vcGVuJyk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZXh0LXNob3J0JykpOyIsIlxyXG4oIHRvdGFsID0+IHtcclxuXHJcblx0aWYoIXRvdGFsKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGNvbnN0IHdpc2hsaXN0Q2hlY2tlZExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud2lzaGxpc3QtY2hlY2tlZC1saXN0Jyk7XHJcblxyXG5cdGNvbnN0IHNldFNlbGVjdGVkID0gKCkgPT4ge1xyXG5cclxuXHRcdGxldCBsaXN0ID0gW107XHJcblx0XHRjb25zdCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53aXNobGlzdC1jaGVja2JveCcpO1xyXG5cclxuXHRcdEFycmF5LmZyb20oZWxlbXMsIGVsID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IGlucHV0ID0gZWwucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcclxuXHJcblx0XHRcdGlmKGlucHV0LmNoZWNrZWQpIHtcclxuXHJcblx0XHRcdFx0bGlzdC5wdXNoKGlucHV0LnZhbHVlKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHR0b3RhbC50ZXh0Q29udGVudCA9IGxpc3QubGVuZ3RoO1xyXG5cclxuXHRcdEFycmF5LmZyb20od2lzaGxpc3RDaGVja2VkTGlzdCwgaW5wdXQgPT4gaW5wdXQudmFsdWUgPSBsaXN0KTtcclxuXHJcblx0XHRjaGVja2VkQUxMLmNoZWNrZWQgPSBsaXN0Lmxlbmd0aCA9PT0gZWxlbXMubGVuZ3RoO1xyXG5cclxuXHR9O1xyXG5cclxuXHRkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRpZihldmVudC50YXJnZXQuY2xvc2VzdCgnLndpc2hsaXN0LWNoZWNrYm94JykpIHtcclxuXHJcblx0XHRcdHNldFNlbGVjdGVkKCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcblx0Ly8g0LLRi9Cx0YDQsNGC0Ywg0LLRgdC1XHJcblxyXG5cdGNvbnN0IGNoZWNrZWRBTEwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2lzaGxpc3QtY2hlY2tlZC1hbGwnKTtcclxuXHJcblx0Y2hlY2tlZEFMTC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud2lzaGxpc3QtY2hlY2tib3gnKSwgZWwgPT4gZWwucXVlcnlTZWxlY3RvcignaW5wdXQnKS5jaGVja2VkID0gY2hlY2tlZEFMTC5jaGVja2VkKTtcclxuXHJcblx0XHRzZXRTZWxlY3RlZCgpO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aXNobGlzdC1jaGVja2VkLXRvdGFsX192YWx1ZScpKTsiXX0=
