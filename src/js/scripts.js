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

	"use strict";

	if(!form) {

		return;

	}

	form.addEventListener('change', () => {

		const formData = new FormData(form),
			  xhr = new XMLHttpRequest();

		xhr.open("POST", form.getAttribute('action'));
		xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

		xhr.onreadystatechange = () => {

			if (xhr.readyState !== 4){

				return;

			}

			if (xhr.status === 200) {

				console.log(xhr.responseText);

			}

		}

		xhr.send(formData);

	});

})(document.querySelector('.catalog-bar'));
((tags) => {

	"use strict";

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

			const formData = new FormData(form),
				  xhr = new XMLHttpRequest();

			xhr.open("POST", form.getAttribute('action'));
			xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

			xhr.onreadystatechange = () => {

				if (xhr.readyState !== 4){

					return;

				}

				if (xhr.status === 200) {

					//result.innerHTML = xhr.responseText;
					form.classList.remove('is-loading');

				}

			}

			xhr.send(formData);

		});

	});

})(document.querySelectorAll('.catalog-filter-tags'));

( elem => {

	"use strict";

	Array.from(elem, el => {

		const input = el.querySelector('.checkbox-only__input'),
			  text = el.querySelector('.checkbox-only__check-text');

		input.addEventListener('change', () => {

			if(input.checked) {

				text.classList.add('is-show');

				setTimeout( () => text.classList.remove('is-show'), 300);

			}

		});

	});

})( document.querySelectorAll('.checkbox-only') );

// подтверждение города

((form) => {

	if(!form) {

		return;

	}

	// показать форму

	setTimeout( () => form.classList.remove('hide'), 10000);

	form.addEventListener('submit', event => {

		event.preventDefault();

		form.classList.add('hide');
//		Cookies.set('ucity', form.elements.city.value);

		const formData = new FormData(form),
			  xhr = new XMLHttpRequest();

		xhr.open("POST", form.getAttribute('action'));
		xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
		xhr.send(formData);

	});

})(document.querySelector('.form-city-confirm'));


// поиск и выбор города

((form) => {

	if(!form) {

		return;

	}

	const input = form.querySelector('.form-city__input'),
		  result = form.querySelector('.form-city__result');

	input.addEventListener('keyup', event => {

		if(input.value.length > 3 && event.key !== 'enter'){

			form.classList.add('is-loading');

			const formData = new FormData(form),
				  xhr = new XMLHttpRequest();

			xhr.open("POST", form.getAttribute('action'));
			xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

			xhr.onreadystatechange = () => {

				if (xhr.readyState !== 4){

					return;

				}

				if (xhr.status === 200) {

					result.innerHTML = xhr.responseText;
					form.classList.remove('is-loading');

				}

			}

			xhr.send(formData);

		}

	});

	form.addEventListener('submit', event => event.preventDefault());

})(document.querySelector('.form-city'));



// пункты выдачи и постаматы

((form) => {

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

			const formData = new FormData(form),
				  xhr = new XMLHttpRequest();

			xhr.open("POST", form.getAttribute('action'));
			xhr.responseType = 'json';
			xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

			xhr.onreadystatechange = () => {

				if (xhr.readyState !== 4){

					return;

				}

				if (xhr.status === 200) {

					const obj = xhr.response;

					console.log(obj);

					result.innerHTML = obj.result;

				}

			}

			xhr.send(formData);

		}

	});

	form.addEventListener('submit', event => event.preventDefault());

})(document.querySelector('.modal-points'));
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

			const formData = new FormData(filter),
				  xhr = new XMLHttpRequest();

			xhr.open("POST", filter.getAttribute('action'));
			xhr.responseType = 'json';
			xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

			xhr.onreadystatechange = () => {

				if (xhr.readyState !== 4){

					return;

				}

				if (xhr.status === 200) {

					const obj = xhr.response;

					console.log(obj);

					filter.classList.remove('is-loading');

					Array.from(counerTotal, el => el.textContent = obj.total);

					setTimeoutID = setTimeout( ()=> floatBtn.classList.remove('is-show'), 5000);

					if(obj.list) {

						listResult.innerHTML = obj.list;

					}

					if(obj.pagin) {

						pagin.innerHTML = obj.pagin;

					}

				}

			}

			xhr.send(formData);

		}

	});

	// отправка

	filter.addEventListener('submit', event => {

		event.preventDefault();

		const formData = new FormData(filter),
			  xhr = new XMLHttpRequest();

		xhr.open("POST", filter.getAttribute('action'));
		xhr.responseType = 'json';
		xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

		formData.append("result", true);
		catalogRight.classList.add('is-loading');

		xhr.onreadystatechange = () => {

			if (xhr.readyState !== 4){

				return;

			}

			if (xhr.status === 200) {

				console.log(xhr.responseText);
				catalogRight.classList.remove('is-loading');

			}

		}

		xhr.send(formData);

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

// всплывающий submit

document.body.addEventListener('submit', event => {

	if(!event.target.classList.contains('form')) {

		return;

	}

	event.preventDefault();

	const form = event.target,
		  formData = new FormData(form),
		  xhr = new XMLHttpRequest();

	xhr.open("POST", form.getAttribute('action'));
	xhr.responseType = 'json';
	xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

	xhr.onreadystatechange = () => {

		if (xhr.readyState !== 4){

			return;

		}

		if (xhr.status === 200) {

			const obj = xhr.response;
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

		}

	}

	xhr.send(formData);

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

/* Заявка на вступление в клуб */

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

})( document.querySelector('.lk-form--club') );
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

		modal.classList.toggle('is-full', selector === 'gallery' || selector === 'points');

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

})(document.querySelectorAll('.articleid-events__form'));

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

((form) => {

	if(!form) {

		return;

	}

	const btn = form.querySelector('.btn');

	form.addEventListener('submit', event => {

		event.preventDefault();

		const formData = new FormData(form),
			  xhr = new XMLHttpRequest();

		xhr.open("POST", form.getAttribute('action'));
		xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

		btn.disabled = true;

		xhr.onreadystatechange = () => {

			if (xhr.readyState != 4){

				return;

			}

			if (xhr.status === 200) {

				btn.disabled = false;

				console.log(xhr.responseText);

				form.elements.page.value = parseInt(form.elements.page.value + 1);

				document.querySelector('#review-sort-result').innerHTML = document.querySelector('#review-sort-result').innerHTML + xhr.responseText;

			}

		}

		xhr.send(formData);

	});

})(document.querySelector('.review__ajax-add'));


// сортировака

((sort) => {

	if(!sort.length) {

		return;

	}

	Array.from(sort, form => {

		// отправка

		form.addEventListener('change', () => {

			const formData = new FormData(form),
				  xhr = new XMLHttpRequest();

			xhr.open("POST", form.getAttribute('action'));
			xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

			xhr.onreadystatechange = () => {

				if (xhr.readyState != 4){

					return;

				}

				if (xhr.status === 200) {

					console.log(xhr.responseText);

					document.querySelector('#review-sort-result').innerHTML = xhr.responseText;

				}

			}

			xhr.send(formData);

		});

	});

})(document.querySelectorAll('.review-sort'));

// показать форму
((form) => {

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

((review) => {

	if(!review) {

		return;

	}

	review.addEventListener('submit', event => {

		if(event.target.classList.contains('review-like')) {

			event.preventDefault();

			const form = event.target,
				  formData = new FormData(form),
				  xhr = new XMLHttpRequest();

			xhr.open("POST", form.getAttribute('action'));
			xhr.responseType = 'json';
			xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

			xhr.onreadystatechange = () => {

				if (xhr.readyState != 4){

					return;

				}

				if (xhr.status === 200) {

					const obj = xhr.response;
					console.log(obj);

					if(obj.mode) {

						form.classList.toggle('is-like', obj.mode === "add");
						form.querySelector('.review-like__count').textContent = obj.count;

					}

				}

			}

			xhr.send(formData);

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

				const formData = new FormData(form),
					  xhr = new XMLHttpRequest();

				xhr.open("POST", form.getAttribute('action'));
				xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

				xhr.onreadystatechange = () => {

					if (xhr.readyState !== 4){

						return;

					}

					if (xhr.status === 200) {

						result.innerHTML = xhr.responseText;
						form.classList.remove('is-loading');

					}

				}

				xhr.send(formData);

			}

		});

	});

})(document.querySelectorAll('.search'));
((items)=>{

	"use strict";

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
// инициализация слайдеров
( range => {

	"use strict";

	if(!range.length) {

		return;

	}

	Array.from(range, slider => {

		const min = parseInt(slider.getAttribute('data-min'), 10),
			  max = parseInt(slider.getAttribute('data-max'), 10),
			  input = slider.querySelectorAll('.input'),
			  inputMin = slider.querySelector('.slider-range__input-min'),
			  inputMax = slider.querySelector('.slider-range__input-max'),
			  track = slider.querySelector('.slider-range__track');

		noUiSlider.create(track, {
			connect: true,
			start: [min, max],
			step: 10,
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

				el.value = CG.strToNumber(el.value);
				setTimeout( () => el.setSelectionRange(0,99), 100);

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
((form) => {

	if(!form) {

		return;

	}

	let secunds = 60;

	const timer = form.querySelector('.form-sms__timer'),
		  textError = form.querySelector('.form-lk__after'),
		  btnRepeat = form.querySelector('.form-lk__repeat-sms'),
		  formLogin = document.querySelector('.form-login');

	const setupTimer = () => {

		timer.textContent = secunds;

		setTimeout( () => {

			secunds--;

			if(secunds > 0) {

				setupTimer();

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

	});

	// обработка неверных смс

	form.addEventListener('submit', event => {

		event.preventDefault();

		const formData = new FormData(form),
			  xhr = new XMLHttpRequest();

		xhr.open("POST", form.getAttribute('action'));
		xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

		xhr.onreadystatechange = () => {

			if (xhr.readyState != 4){

				return;

			}

			if (xhr.status === 200) {

				textError.innerHTML = xhr.responseText;
				textError.classList.add('is-error');

			}

		}

		xhr.send(formData);

	});

	// обработка формы логина

	formLogin.addEventListener('submit', event => {

		event.preventDefault();

		const formData = new FormData(formLogin),
			  xhr = new XMLHttpRequest();

		xhr.open("POST", formLogin.getAttribute('action'));
		xhr.responseType = 'json';
		xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

		xhr.onreadystatechange = () => {

			if (xhr.readyState != 4){

				return;

			}

			if (xhr.status === 200) {

				const obj = xhr.response;

				console.log(obj);

				if(obj.modalShow === 'info') {

					document.querySelector('#modal-info__title').innerHTML = obj.title ? obj.title : '';
					document.querySelector('#modal-info__message').innerHTML = obj.message ? obj.message : '';

					CG.modalShow(obj.modalShow);

					return;

				}

				if(obj.phone) {

					document.querySelector('#modal-sms__phone').innerHTML = obj.phone;

				}

				if(obj.repeat === 'disabled') {

					form.querySelector('.form-lk__repeat').innerHTML = obj.text;

				}
				else {

					secunds = parseInt(obj.repeat);

				}

				CG.modalShow('sms');
				setupTimer();

			}

		}

		xhr.send(formData);

	});

})(document.querySelector('.form-sms'));

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

	const wishlistCheckedList = document.querySelectorAll('.wishlist-checked-list');

	document.body.addEventListener('change', event => {

		if(event.target.closest('.wishlist-checkbox')) {

			let list = [];

			Array.from(document.querySelectorAll('.wishlist-checkbox'), el => {

				const input = el.querySelector('input');

				if(input.checked) {

					list.push(input.value);

				}

			});

			total.textContent = list.length;

			Array.from(wishlistCheckedList, input => input.value = list);

		}

	});

})(document.querySelector('.wishlist-checked-total__value'));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzLmpzIiwiYXJ0aWNsZS1ldmVudHMuanMiLCJhc2suanMiLCJidXktb25lLWNsaWNrLmpzIiwiY2F0YWxvZy1iYXIuanMiLCJjYXRhbG9nLWZpbHRlci10YWdzLmpzIiwiY2hlY2tib3gtb25seS5qcyIsImNpdHkuanMiLCJmaWx0ZXIuanMiLCJmb3JtLmpzIiwiZ2FsbGVyeS5qcyIsImhlYWRlci5qcyIsImxrLmpzIiwibWFzay5qcyIsIm1lbnUuanMiLCJtb2RhbC5qcyIsInByb2NlZHVyZS5qcyIsInByb2R1Y2Vycy5qcyIsInByb2R1Y3QuanMiLCJxdWFudGl0eS5qcyIsInJldmlldy5qcyIsInNjcm9sbC1vYnNlcnZlci5qcyIsInNlYXJjaC5qcyIsInNlbGVjdC5qcyIsInNsaWRlci5qcyIsInNtcy5qcyIsInNvcnQuanMiLCJzd2lwZXIuanMiLCJ0YWIuanMiLCJ0ZXh0LXNob3J0LmpzIiwid2lzaGxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDck1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25JQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcE1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkpBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5V0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Il9qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qISBVVEYtOFxyXG5cclxuwqkga292cmlnaW5cclxu0JLRgdC1INC/0YDQsNCy0LAg0YDQsNC30YDQtdGI0LXQvdGLXHJcbtC60YDQsNGB0LjQstGL0Lkg0LTQuNC30LDQudC9INC00L7Qu9C20LXQvSDQuNC80LXRgtGMINC60YDQsNGB0LjQstGL0Lkg0LrQvtC0wq5cclxuXHJcbmh0dHBzOi8vZ2l0aHViLmNvbS9odG1scGx1c2Nzcy9cclxuXHJcbiovXHJcblxyXG4oKCkgPT4ge1xyXG5cclxuXHRcInVzZSBzdHJpY3RcIjtcclxuXHJcblx0d2luZG93LkNHID0gd2luZG93LkNHIHx8IHt9O1xyXG5cdENHLmJyZWFrUG9pbnRzID0gMTI1MDtcclxuXHRDRy5oZWlnaHRIZWFkZXJGaXhlZCA9IDExODtcclxuXHRDRy5yZXNpemVUaW1lb3V0ID0gbnVsbDtcclxuXHRDRy53aW5kb3dXaWR0aE9MZCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XHJcblxyXG5cdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4ge1xyXG5cclxuXHRcdFx0aWYgKCFDRy5yZXNpemVUaW1lb3V0KSB7XHJcblxyXG5cdFx0XHRcdENHLnJlc2l6ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0Q0cucmVzaXplVGltZW91dCA9IG51bGw7XHJcblxyXG5cdFx0XHRcdFx0aWYoQ0cud2luZG93V2lkdGhPTGQgIT09IHdpbmRvdy5pbm5lcldpZHRoKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRDRy53aW5kb3dXaWR0aE9MZCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cclxuXHRcdFx0XHRcdFx0UHViU3ViLnB1Ymxpc2goJ3dpbmRvd1dpZHRoUmVzaXplJyk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9LCAxMDApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4gUHViU3ViLnB1Ymxpc2goJ3dpbmRvd1Njcm9sbCcpKSk7XHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IFB1YlN1Yi5wdWJsaXNoKCdET01Db250ZW50TG9hZGVkJykpO1xyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiBQdWJTdWIucHVibGlzaCgncGFnZUxvYWQnKSk7XHJcblxyXG5cdC8vINC+0LHRgNCw0LHQvtGC0YfQuNC6INCw0L3QuNC80LDRhtC40LlcclxuXHRDRy5jc3NBbmltYXRpb24gPSBhID0+IHt2YXIgYixjLGQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNzc2FuaW1hdGlvblwiKTtzd2l0Y2goYSl7Y2FzZSdhbmltYXRpb24nOmI9e1wiYW5pbWF0aW9uXCI6XCJhbmltYXRpb25lbmRcIixcIk9BbmltYXRpb25cIjpcIm9BbmltYXRpb25FbmRcIixcIk1vekFuaW1hdGlvblwiOlwiYW5pbWF0aW9uZW5kXCIsXCJXZWJraXRBbmltYXRpb25cIjpcIndlYmtpdEFuaW1hdGlvbkVuZFwifTticmVhaztjYXNlJ3RyYW5zaXRpb24nOmI9e1widHJhbnNpdGlvblwiOlwidHJhbnNpdGlvbmVuZFwiLFwiT1RyYW5zaXRpb25cIjpcIm9UcmFuc2l0aW9uRW5kXCIsXCJNb3pUcmFuc2l0aW9uXCI6XCJ0cmFuc2l0aW9uZW5kXCIsXCJXZWJraXRUcmFuc2l0aW9uXCI6XCJ3ZWJraXRUcmFuc2l0aW9uRW5kXCJ9fWZvcihjIGluIGIpaWYoZC5zdHlsZVtjXSE9PXVuZGVmaW5lZClyZXR1cm4gYltjXX07XHJcblxyXG5cdC8vIERldGVybWluZSBpZiBhbiBlbGVtZW50IGlzIGluIHRoZSB2aXNpYmxlIHZpZXdwb3J0XHJcblx0Q0cuaXNJblZpZXdwb3J0ID0gZWwgPT4gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wID49IDAgJiYgZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tIDw9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcblx0Ly8g0L7RgtC00LXQu9GP0LXQvCDRgtGL0YHRj9GH0LhcclxuXHRDRy5zZXBOdW1iZXIgPSBzdHIgPT4ge1xyXG5cdFx0c3RyID0gcGFyc2VJbnQoc3RyLCAxMCkudG9TdHJpbmcoKTtcclxuXHRcdHJldHVybiBzdHIucmVwbGFjZSgvKFxcZCkoPz0oXFxkXFxkXFxkKSsoW15cXGRdfCQpKS9nLCAnJDEgJyk7XHJcblx0fTtcclxuXHJcblx0Ly8g0YHQutC70LXQuNCy0LDQtdC8INGC0YvRgdGP0YfQuFxyXG5cdENHLnN0clRvTnVtYmVyID0gc3RyID0+IHBhcnNlSW50KHN0ci5yZXBsYWNlKC9cXHMrL2csJycpLCAxMCk7XHJcblxyXG59KSgpOyIsIi8vINC/0LXRgNC10LrQu9GO0YfQtdC90LjQtSBhcnRpY2xlSURcclxuXHJcbigoYXJ0aWNsZUlEKSA9PiB7XHJcblxyXG5cdGlmKCFhcnRpY2xlSUQpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0ZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0Y29uc3QgYXJ0aWNsZWlkRXZlbnRzID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5hcnRpY2xlaWQtZXZlbnRzJyk7XHJcblxyXG5cdFx0aWYoYXJ0aWNsZWlkRXZlbnRzKXtcclxuXHJcblx0XHRcdGNvbnN0IGNvbnRyb2wgPSBldmVudC50YXJnZXQsXHJcblx0XHRcdFx0ICBpbnB1dElEID0gYXJ0aWNsZWlkRXZlbnRzLnF1ZXJ5U2VsZWN0b3IoJy5hcnRpY2xlaWQtZXZlbnRzX192YWx1ZScpLFxyXG5cdFx0XHRcdCAgc3RvcmVJRCA9IGFydGljbGVpZEV2ZW50cy5xdWVyeVNlbGVjdG9yKCcuYXJ0aWNsZWlkLWV2ZW50c19fc3RvcmVpZCcpLFxyXG5cdFx0XHRcdCAgc2FsZSA9IGFydGljbGVpZEV2ZW50cy5xdWVyeVNlbGVjdG9yKCcuYXJ0aWNsZWlkLWV2ZW50c19fc2FsZScpLFxyXG5cdFx0XHRcdCAgc2t1ID0gYXJ0aWNsZWlkRXZlbnRzLnF1ZXJ5U2VsZWN0b3IoJy5hcnRpY2xlaWQtZXZlbnRzX19za3UtdmFsdWUnKSxcclxuXHRcdFx0XHQgIHN0b2NrID0gYXJ0aWNsZWlkRXZlbnRzLnF1ZXJ5U2VsZWN0b3IoJy5hcnRpY2xlaWQtZXZlbnRzX19hdmFpbGFiaWxpdHktdmFsdWUnKSxcclxuXHRcdFx0XHQgIGJ0biA9IGFydGljbGVpZEV2ZW50cy5xdWVyeVNlbGVjdG9yKCcuYXJ0aWNsZWlkLWV2ZW50c19fYnRuJyksXHJcblx0XHRcdFx0ICBwcmljZSA9IGFydGljbGVpZEV2ZW50cy5xdWVyeVNlbGVjdG9yKCcuYXJ0aWNsZWlkLWV2ZW50c19fcHJpY2UtdmFsdWUnKSxcclxuXHRcdFx0XHQgIHByaWNlT2xkID0gYXJ0aWNsZWlkRXZlbnRzLnF1ZXJ5U2VsZWN0b3IoJy5hcnRpY2xlaWQtZXZlbnRzX19vbGQtcHJpY2UtdmFsdWUnKTtcclxuXHJcblx0XHRcdGlucHV0SUQudmFsdWUgPSBjb250cm9sLnZhbHVlO1xyXG5cdFx0XHRzdG9yZUlELnZhbHVlID0gY29udHJvbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RvcmVpZCcpID8gY29udHJvbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RvcmVpZCcpIDogMTtcclxuXHRcdFx0cHJpY2UudGV4dENvbnRlbnQgPSBjb250cm9sLmdldEF0dHJpYnV0ZSgnZGF0YS1wcmljZScpO1xyXG5cclxuXHRcdFx0aWYocHJpY2VPbGQpIHtcclxuXHJcblx0XHRcdFx0aWYoY29udHJvbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb2xkLXByaWNlJykpIHtcclxuXHJcblx0XHRcdFx0XHRwcmljZU9sZC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHRcdFx0XHRcdHByaWNlT2xkLnRleHRDb250ZW50ID0gY29udHJvbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb2xkLXByaWNlJyk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRwcmljZU9sZC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYoc2FsZSkge1xyXG5cclxuXHRcdFx0XHRpZihjb250cm9sLmdldEF0dHJpYnV0ZSgnZGF0YS1zYWxlJykpIHtcclxuXHJcblx0XHRcdFx0XHRzYWxlLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cdFx0XHRcdFx0c2FsZS50ZXh0Q29udGVudCA9IGNvbnRyb2wuZ2V0QXR0cmlidXRlKCdkYXRhLXNhbGUnKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdHNhbGUucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKGNvbnRyb2wuZ2V0QXR0cmlidXRlKCdkYXRhLWluLWJhc2tldCcpKSB7XHJcblxyXG5cdFx0XHRcdGJ0bi5xdWVyeVNlbGVjdG9yKCdhJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cdFx0XHRcdGJ0bi5xdWVyeVNlbGVjdG9yKCdidXR0b24nKS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cclxuXHRcdFx0XHRidG4ucXVlcnlTZWxlY3RvcignYScpLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHRcdFx0XHRidG4ucXVlcnlTZWxlY3RvcignYnV0dG9uJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYoc3RvY2spIHtcclxuXHJcblx0XHRcdFx0c3RvY2sudGV4dENvbnRlbnQgPSBjb250cm9sLmdldEF0dHJpYnV0ZSgnZGF0YS1zdG9jaycpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYoc2t1KSB7XHJcblxyXG5cdFx0XHRcdHNrdS50ZXh0Q29udGVudCA9IGNvbnRyb2wuZ2V0QXR0cmlidXRlKCdkYXRhLXNrdScpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJ0aWNsZWlkLWV2ZW50cycpKTsiLCIoKGFzaykgPT4ge1xyXG5cclxuXHRcInVzZSBzdHJpY3RcIjtcclxuXHJcblx0aWYoIWFzay5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuLypcclxuXHRsZXQgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihtdXRhdGlvblJlY29yZHMgPT4ge1xyXG5cclxuXHRcdGNvbnN0IHQgPSBtdXRhdGlvblJlY29yZHNbMF0udGFyZ2V0LFxyXG5cdFx0XHQgIHJlY3QgPSB0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKHJlY3QubGVmdCA+IHdpbmRvdy5pbm5lcldpZHRoIC0gcmVjdC5yaWdodCk7XHJcblxyXG5cdFx0aWYodC5vcGVuKSB7XHJcblxyXG5cdFx0XHRjb25zdCBpbm5lciA9IHQucXVlcnlTZWxlY3RvcignLmFza19faW5uZXInKTtcclxuXHJcblx0XHRcdGlmKHJlY3QubGVmdCA+IHdpbmRvdy5pbm5lcldpZHRoIC0gcmVjdC5yaWdodCkge1xyXG5cclxuXHRcdFx0XHQvLyDQv9GA0LDQstC10LVcclxuXHJcblx0XHRcdFx0aW5uZXIuc3R5bGUubGVmdCA9ICdhdXRvJztcclxuXHRcdFx0XHRpbm5lci5zdHlsZS5yaWdodCA9IDA7XHJcblx0XHRcdFx0aW5uZXIuc3R5bGUud2lkdGggPSByZWN0LmxlZnQgKyAncHgnO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHJcblx0XHRcdFx0Ly8g0LvQtdCy0LXQtVxyXG5cclxuXHRcdFx0XHRpbm5lci5zdHlsZS5yaWdodCA9ICdhdXRvJztcclxuXHRcdFx0XHRpbm5lci5zdHlsZS5sZWZ0ID0gMDtcclxuXHRcdFx0XHRpbm5lci5zdHlsZS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gcmVjdC5yaWdodCArICdweCc7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcblx0QXJyYXkuZnJvbShhc2ssIGVsID0+IHtcclxuXHJcblx0XHRvYnNlcnZlci5vYnNlcnZlKGVsLCB7XHJcblxyXG5cdFx0XHRhdHRyaWJ1dGVzIDogdHJ1ZVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcblx0ZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShhc2ssIGVsID0+IHtcclxuXHJcblx0XHRcdGlmKGV2dC50YXJnZXQuY2xvc2VzdCgnLmFzaycpICE9PSBlbCl7XHJcblxyXG5cdFx0XHRcdGVsLm9wZW4gPSBmYWxzZTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcbiovXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hc2snKSk7IiwiXHJcbi8vINC60L3QvtC/0LrQsCDQsiDQvtC00LjQvSDQutC70LjQulxyXG5cclxuKChmb3JtQnV5T25lQ2xpY2spID0+IHtcclxuXHJcblx0aWYoIWZvcm1CdXlPbmVDbGljaykge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGlmKGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuYnV5LW9uZS1jbGljaycpKXtcclxuXHJcblx0XHRcdGNvbnN0IGNhcmQgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLmFydGljbGVpZC1ldmVudHMnKSxcclxuXHRcdFx0XHQgIGlkID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuYXJ0aWNsZWlkLWV2ZW50c19faWQnKSxcclxuXHRcdFx0XHQgIHN0b3JlaWQgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5hcnRpY2xlaWQtZXZlbnRzX19zdG9yZWlkJyksXHJcblx0XHRcdFx0ICBhcnRpY2xlaWQgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5hcnRpY2xlaWQtZXZlbnRzX192YWx1ZScpLFxyXG5cdFx0XHRcdCAgY2F0ID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuYXJ0aWNsZWlkLWV2ZW50c19fY2F0JyksXHJcblx0XHRcdFx0ICB0aXRsZSA9IGNhcmQucXVlcnlTZWxlY3RvcignLmFydGljbGVpZC1ldmVudHNfX3RpdGxlJyksXHJcblx0XHRcdFx0ICBwcmljZSA9IGNhcmQucXVlcnlTZWxlY3RvcignLmFydGljbGVpZC1ldmVudHNfX3ByaWNlLXZhbHVlJyksXHJcblx0XHRcdFx0ICBpbWcgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5hcnRpY2xlaWQtZXZlbnRzX19pbWcnKTtcclxuXHJcblx0XHRcdGZvcm1CdXlPbmVDbGljay5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImlkXCJdJykudmFsdWUgPSBpZC52YWx1ZTtcclxuXHRcdFx0Zm9ybUJ1eU9uZUNsaWNrLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwic3RvcmVpZFwiXScpLnZhbHVlID0gc3RvcmVpZCA/IHN0b3JlaWQudmFsdWUgOiAnJztcclxuXHRcdFx0Zm9ybUJ1eU9uZUNsaWNrLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiYXJ0aWNsZWlkXCJdJykudmFsdWUgPSBhcnRpY2xlaWQgPyBhcnRpY2xlaWQudmFsdWUgOiAnJztcclxuXHJcblx0XHRcdGZvcm1CdXlPbmVDbGljay5xdWVyeVNlbGVjdG9yKCcuY2FyZC1pdGVtX19pbWcnKS5pbm5lckhUTUwgPSBpbWcuaW5uZXJIVE1MO1xyXG5cdFx0XHRmb3JtQnV5T25lQ2xpY2sucXVlcnlTZWxlY3RvcignLmNhcmQtaXRlbV9fY2F0JykudGV4dENvbnRlbnQgPSBjYXQudGV4dENvbnRlbnQ7XHJcblx0XHRcdGZvcm1CdXlPbmVDbGljay5xdWVyeVNlbGVjdG9yKCcuY2FyZC1pdGVtX190aXRsZScpLnRleHRDb250ZW50ID0gdGl0bGUudGV4dENvbnRlbnQ7XHJcblx0XHRcdGZvcm1CdXlPbmVDbGljay5xdWVyeVNlbGVjdG9yKCcuY2FyZC1pdGVtX19wcmljZScpLnRleHRDb250ZW50ID0gcHJpY2UudGV4dENvbnRlbnQ7XHJcblxyXG5cdFx0XHRDRy5tb2RhbFNob3coJ2J1eS1vbmUtY2xpY2snKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tYnV5LW9uZS1jbGlja19fcHJvZHVjdCcpKTsiLCIoIGZvcm0gPT4ge1xyXG5cclxuXHRcInVzZSBzdHJpY3RcIjtcclxuXHJcblx0aWYoIWZvcm0pIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcblxyXG5cdFx0Y29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSksXHJcblx0XHRcdCAgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG5cdFx0eGhyLm9wZW4oXCJQT1NUXCIsIGZvcm0uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKSk7XHJcblx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIlgtUmVxdWVzdGVkLVdpdGhcIiwgXCJYTUxIdHRwUmVxdWVzdFwiKTtcclxuXHJcblx0XHR4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG5cclxuXHRcdFx0aWYgKHhoci5yZWFkeVN0YXRlICE9PSA0KXtcclxuXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xyXG5cclxuXHRcdFx0XHRjb25zb2xlLmxvZyh4aHIucmVzcG9uc2VUZXh0KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0eGhyLnNlbmQoZm9ybURhdGEpO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRhbG9nLWJhcicpKTsiLCIoKHRhZ3MpID0+IHtcclxuXHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cdGlmKCF0YWdzLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRBcnJheS5mcm9tKHRhZ3MsIGZvcm0gPT4ge1xyXG5cclxuXHRcdGNvbnN0IGJ0biA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmNhdGFsb2ctZmlsdGVyLXRhZ3NfX3Nob3ctYWxsJyksXHJcblx0XHRcdCAgaXRlbXMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRhbG9nLWZpbHRlci10YWdzX19pdGVtJyk7XHJcblxyXG5cdFx0aWYoIWJ0bikge1xyXG5cclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRidG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuXHRcdFx0QXJyYXkuZnJvbShpdGVtcywgaXRlbSA9PlxyXG5cdFx0XHRcdGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyDQvtGC0L/RgNCw0LLQutCwINGE0LjQu9GM0YLRgNCwXHJcblxyXG5cdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRmb3JtLmNsYXNzTGlzdC5hZGQoJ2lzLWxvYWRpbmcnKTtcclxuXHJcblx0XHRcdGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pLFxyXG5cdFx0XHRcdCAgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG5cdFx0XHR4aHIub3BlbihcIlBPU1RcIiwgZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpKTtcclxuXHRcdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJYLVJlcXVlc3RlZC1XaXRoXCIsIFwiWE1MSHR0cFJlcXVlc3RcIik7XHJcblxyXG5cdFx0XHR4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRpZiAoeGhyLnJlYWR5U3RhdGUgIT09IDQpe1xyXG5cclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XHJcblxyXG5cdFx0XHRcdFx0Ly9yZXN1bHQuaW5uZXJIVE1MID0geGhyLnJlc3BvbnNlVGV4dDtcclxuXHRcdFx0XHRcdGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaXMtbG9hZGluZycpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR4aHIuc2VuZChmb3JtRGF0YSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhdGFsb2ctZmlsdGVyLXRhZ3MnKSk7IiwiXHJcbiggZWxlbSA9PiB7XHJcblxyXG5cdFwidXNlIHN0cmljdFwiO1xyXG5cclxuXHRBcnJheS5mcm9tKGVsZW0sIGVsID0+IHtcclxuXHJcblx0XHRjb25zdCBpbnB1dCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2JveC1vbmx5X19pbnB1dCcpLFxyXG5cdFx0XHQgIHRleHQgPSBlbC5xdWVyeVNlbGVjdG9yKCcuY2hlY2tib3gtb25seV9fY2hlY2stdGV4dCcpO1xyXG5cclxuXHRcdGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuXHJcblx0XHRcdGlmKGlucHV0LmNoZWNrZWQpIHtcclxuXHJcblx0XHRcdFx0dGV4dC5jbGFzc0xpc3QuYWRkKCdpcy1zaG93Jyk7XHJcblxyXG5cdFx0XHRcdHNldFRpbWVvdXQoICgpID0+IHRleHQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtc2hvdycpLCAzMDApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tib3gtb25seScpICk7IiwiXHJcbi8vINC/0L7QtNGC0LLQtdGA0LbQtNC10L3QuNC1INCz0L7RgNC+0LTQsFxyXG5cclxuKChmb3JtKSA9PiB7XHJcblxyXG5cdGlmKCFmb3JtKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdC8vINC/0L7QutCw0LfQsNGC0Ywg0YTQvtGA0LzRg1xyXG5cclxuXHRzZXRUaW1lb3V0KCAoKSA9PiBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSwgMTAwMDApO1xyXG5cclxuXHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdGZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4vL1x0XHRDb29raWVzLnNldCgndWNpdHknLCBmb3JtLmVsZW1lbnRzLmNpdHkudmFsdWUpO1xyXG5cclxuXHRcdGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pLFxyXG5cdFx0XHQgIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuXHRcdHhoci5vcGVuKFwiUE9TVFwiLCBmb3JtLmdldEF0dHJpYnV0ZSgnYWN0aW9uJykpO1xyXG5cdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJYLVJlcXVlc3RlZC1XaXRoXCIsIFwiWE1MSHR0cFJlcXVlc3RcIik7XHJcblx0XHR4aHIuc2VuZChmb3JtRGF0YSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY2l0eS1jb25maXJtJykpO1xyXG5cclxuXHJcbi8vINC/0L7QuNGB0Log0Lgg0LLRi9Cx0L7RgCDQs9C+0YDQvtC00LBcclxuXHJcbigoZm9ybSkgPT4ge1xyXG5cclxuXHRpZighZm9ybSkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRjb25zdCBpbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmZvcm0tY2l0eV9faW5wdXQnKSxcclxuXHRcdCAgcmVzdWx0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZm9ybS1jaXR5X19yZXN1bHQnKTtcclxuXHJcblx0aW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0aWYoaW5wdXQudmFsdWUubGVuZ3RoID4gMyAmJiBldmVudC5rZXkgIT09ICdlbnRlcicpe1xyXG5cclxuXHRcdFx0Zm9ybS5jbGFzc0xpc3QuYWRkKCdpcy1sb2FkaW5nJyk7XHJcblxyXG5cdFx0XHRjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKSxcclxuXHRcdFx0XHQgIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuXHRcdFx0eGhyLm9wZW4oXCJQT1NUXCIsIGZvcm0uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKSk7XHJcblx0XHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiWC1SZXF1ZXN0ZWQtV2l0aFwiLCBcIlhNTEh0dHBSZXF1ZXN0XCIpO1xyXG5cclxuXHRcdFx0eGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcclxuXHJcblx0XHRcdFx0aWYgKHhoci5yZWFkeVN0YXRlICE9PSA0KXtcclxuXHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xyXG5cclxuXHRcdFx0XHRcdHJlc3VsdC5pbm5lckhUTUwgPSB4aHIucmVzcG9uc2VUZXh0O1xyXG5cdFx0XHRcdFx0Zm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1sb2FkaW5nJyk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHhoci5zZW5kKGZvcm1EYXRhKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxuXHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGV2ZW50ID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCkpO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY2l0eScpKTtcclxuXHJcblxyXG5cclxuLy8g0L/Rg9C90LrRgtGLINCy0YvQtNCw0YfQuCDQuCDQv9C+0YHRgtCw0LzQsNGC0YtcclxuXHJcbigoZm9ybSkgPT4ge1xyXG5cclxuXHRpZighZm9ybSkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRjb25zdCBtYXAgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1wb2ludHNfX21hcCcpLFxyXG5cdFx0ICBpbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLm1vZGFsLXBvaW50c19faW5wdXQnKSxcclxuXHRcdCAgcmVzdWx0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcubW9kYWwtcG9pbnRzX19yZXN1bHQnKTtcclxuXHJcblx0Y29uc3QgbG9hZE1hcCA9IGNhbGxiYWNrID0+IHtcclxuXHJcbi8vINC30LDQs9GA0YPQttCw0LXQvCBBUElcclxuXHJcblx0XHRpZiAodHlwZW9mIHltYXBzID09PSAndW5kZWZpbmVkJykge1xyXG5cclxuXHRcdFx0Y29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcblxyXG5cdFx0XHRzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xyXG5cdFx0XHRzY3JpcHQuYXN5bmMgPSB0cnVlO1xyXG5cdFx0XHRzY3JpcHQuc3JjID0gJ2h0dHBzOi8vYXBpLW1hcHMueWFuZGV4LnJ1LzIuMS8/bGFuZz1ydV9SVSc7XHJcblxyXG5cdFx0XHRzY3JpcHQub25sb2FkID0gKCkgPT4ge1xyXG5cclxuXHRcdFx0XHR5bWFwcy5yZWFkeShjYWxsYmFjayk7XHJcbi8vINCf0YDQuNC80LXRgCDRgNC10LDQu9C40LfQsNGG0LjQuCDQsdC+0LrQvtCy0L7QuSDQv9Cw0L3QtdC70Lgg0L3QsCDQvtGB0L3QvtCy0LUg0L3QsNGB0LvQtdC00L7QstCw0L3QuNGPINC+0YIgY29sbGVjdGlvbi5JdGVtLlxyXG4vLyDQkdC+0LrQvtCy0LDRjyDQv9Cw0L3QtdC70Ywg0L7RgtC+0LHRgNCw0LbQsNC10YIg0LjQvdGE0L7RgNC80LDRhtC40Y4sINC60L7RgtC+0YDRg9GOINC80Ysg0LXQuSDQv9C10YDQtdC00LDQu9C4LlxyXG55bWFwcy5tb2R1bGVzLmRlZmluZSgnUGFuZWwnLCBbXHJcbiAgICAndXRpbC5hdWdtZW50JyxcclxuICAgICdjb2xsZWN0aW9uLkl0ZW0nXHJcbl0sIGZ1bmN0aW9uIChwcm92aWRlLCBhdWdtZW50LCBpdGVtKSB7XHJcbiAgICAvLyDQodC+0LfQtNCw0LXQvCDRgdC+0LHRgdGC0LLQtdC90L3Ri9C5INC60LvQsNGB0YEuXHJcbiAgICB2YXIgUGFuZWwgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgICAgIFBhbmVsLnN1cGVyY2xhc3MuY29uc3RydWN0b3IuY2FsbCh0aGlzLCBvcHRpb25zKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8g0Jgg0L3QsNGB0LvQtdC00YPQtdC8INC10LPQviDQvtGCIGNvbGxlY3Rpb24uSXRlbS5cclxuICAgIGF1Z21lbnQoUGFuZWwsIGl0ZW0sIHtcclxuICAgICAgICBvbkFkZFRvTWFwOiBmdW5jdGlvbiAobWFwKSB7XHJcbiAgICAgICAgICAgIFBhbmVsLnN1cGVyY2xhc3Mub25BZGRUb01hcC5jYWxsKHRoaXMsIG1hcCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0UGFyZW50KCkuZ2V0Q2hpbGRFbGVtZW50KHRoaXMpLnRoZW4odGhpcy5fb25HZXRDaGlsZEVsZW1lbnQsIHRoaXMpO1xyXG4gICAgICAgICAgICAvLyDQlNC+0LHQsNCy0LjQvCDQvtGC0YHRgtGD0L/RiyDQvdCwINC60LDRgNGC0YMuXHJcbiAgICAgICAgICAgIC8vINCe0YLRgdGC0YPQv9GLINC80L7Qs9GD0YIg0YPRh9C40YLRi9Cy0LDRgtGM0YHRjyDQv9GA0Lgg0YPRgdGC0LDQvdC+0LLQutC1INGC0LXQutGD0YnQtdC5INCy0LjQtNC40LzQvtC5INC+0LHQu9Cw0YHRgtC4INC60LDRgNGC0YssXHJcbiAgICAgICAgICAgIC8vINGH0YLQvtCx0Ysg0LTQvtCx0LjRgtGM0YHRjyDQvdCw0LjQu9GD0YfRiNC10LPQviDQvtGC0L7QsdGA0LDQttC10L3QuNGPINC00LDQvdC90YvRhSDQvdCwINC60LDRgNGC0LUuXHJcbiAgICAgICAgICAgIG1hcC5tYXJnaW4uYWRkQXJlYSh7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcyNTBweCcsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG9uUmVtb3ZlRnJvbU1hcDogZnVuY3Rpb24gKG9sZE1hcCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fJGNvbnRyb2wpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuXyRjb250cm9sLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFBhbmVsLnN1cGVyY2xhc3Mub25SZW1vdmVGcm9tTWFwLmNhbGwodGhpcywgb2xkTWFwKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBfb25HZXRDaGlsZEVsZW1lbnQ6IGZ1bmN0aW9uIChwYXJlbnREb21Db250YWluZXIpIHtcclxuICAgICAgICAgICAgLy8g0KHQvtC30LTQsNC10LwgSFRNTC3RjdC70LXQvNC10L3RgiDRgSDRgtC10LrRgdGC0L7QvC5cclxuICAgICAgICAgICAgLy8g0J/Qvi3Rg9C80L7Qu9GH0LDQvdC40Y4gSFRNTC3RjdC70LXQvNC10L3RgiDRgdC60YDRi9GCLlxyXG4gICAgICAgICAgICB0aGlzLl8kY29udHJvbCA9ICQoJzxkaXYgY2xhc3M9XCJjdXN0b21Db250cm9sXCI+PGRpdiBjbGFzcz1cImNvbnRlbnRcIj48L2Rpdj48ZGl2IGNsYXNzPVwiY2xvc2VCdXR0b25cIj48L2Rpdj48L2Rpdj4nKS5hcHBlbmRUbyhwYXJlbnREb21Db250YWluZXIpO1xyXG4gICAgICAgICAgICB0aGlzLl8kY29udGVudCA9ICQoJy5jb250ZW50Jyk7XHJcbiAgICAgICAgICAgIC8vINCf0YDQuCDQutC70LjQutC1INC/0L4g0LrRgNC10YHRgtC40LrRgyDQsdGD0LTQtdC8INGB0LrRgNGL0LLQsNGC0Ywg0L/QsNC90LXQu9GMLlxyXG4gICAgICAgICAgICAkKCcuY2xvc2VCdXR0b24nKS5vbignY2xpY2snLCB0aGlzLl9vbkNsb3NlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIF9vbkNsb3NlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoJy5jdXN0b21Db250cm9sJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vINCc0LXRgtC+0LQg0LfQsNC00LDQvdC40Y8g0LrQvtC90YLQtdC90YLQsCDQv9Cw0L3QtdC70LguXHJcbiAgICAgICAgc2V0Q29udGVudDogZnVuY3Rpb24gKHRleHQpIHtcclxuICAgICAgICAgICAgLy8g0J/RgNC4INC30LDQtNCw0L3QuNC4INC60L7QvdGC0LXQvdGC0LAg0LHRg9C00LXQvCDQv9C+0LrQsNC30YvQstCw0YLRjCDQv9Cw0L3QtdC70YwuXHJcbiAgICAgICAgICAgIHRoaXMuXyRjb250cm9sLmNzcygnZGlzcGxheScsICdmbGV4Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuXyRjb250ZW50Lmh0bWwodGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHJvdmlkZShQYW5lbCk7XHJcbn0pO1xyXG5cclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuXHJcblx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0eW1hcHMucmVhZHkoY2FsbGJhY2spO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuLy8g0YHQu9GD0YjQsNC10Lwg0L7RgtC60YDRi9GC0LjQtSDQvNC+0LTQsNC70LrQuFxyXG5cclxuXHRsZXQgbXlNYXA7XHJcblxyXG5cdFB1YlN1Yi5zdWJzY3JpYmUoJ21vZGFsU2hvdycsICguLi5kYXRhKSA9PiB7XHJcblxyXG5cdFx0aWYoZGF0YVsxXSA9PT0gJ3BvaW50cycpe1xyXG5cclxuXHRcdFx0aWYgKG15TWFwKSB7XHJcblxyXG5cdFx0XHRcdG15TWFwLmRlc3Ryb3koKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGxvYWRNYXAoICgpID0+IHtcclxuXHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ9C90LDQtNC+INC/0LXRgNC10LTQsNGC0Ywg0YLQvtGH0LrQuCcpO1xyXG5cclxuLy8gaHR0cHM6Ly95YW5kZXgucnUvZGV2L21hcHMvanNib3gvMi4xL2V2ZW50X3JvbGxvdmVyXHJcbi8vIGh0dHBzOi8veWFuZGV4LnJ1L2Rldi9tYXBzL2pzYm94LzIuMS9jdXN0b21fc2VhcmNoXHJcbi8vXHJcblxyXG4vLyDQsNCy0YLQviDQt9GD0Lwg0LLRgdC10YUg0YLQvtGH0LXQulxyXG5cclxuXHRcdFx0XHRteU1hcCA9IG5ldyB5bWFwcy5NYXAobWFwLCB7XHJcblx0XHRcdFx0XHRjZW50ZXI6IFs1NS43MzMsIDM3LjU4OF0sXHJcblx0XHRcdFx0XHR6b29tOiAxMCxcclxuXHRcdFx0XHRcdGNvbnRyb2xzOiBbXVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuLypcdFx0XHRcdGNvbnN0IHpvb21Db250cm9sID0gbmV3IHltYXBzLmNvbnRyb2wuWm9vbUNvbnRyb2woe1xyXG5cdFx0XHRcdFx0b3B0aW9uczoge1xyXG5cdFx0XHRcdFx0XHR2aXNpYmxlOiB0cnVlXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdG15TWFwLmNvbnRyb2xzLmFkZCh6b29tQ29udHJvbCk7XHJcblxyXG5cdFx0XHRcdG15TWFwLmJlaGF2aW9ycy5kaXNhYmxlKCdzY3JvbGxab29tJyk7XHJcblxyXG5cdFx0XHRcdGNvbnN0IG15UGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhteU1hcC5nZXRDZW50ZXIoKSwgZmFsc2UsIGZhbHNlKTtcclxuXHJcblx0XHRcdFx0bXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZW1hcmspOyovXHJcbiAgICAvLyDQodC+0LfQtNCw0LTQuNC8INC60L7QvdGC0LXQvdGCINC00LvRjyDQvNC10YLQvtC6LlxyXG4gICAgY29uc3QgZmlyc3RPZmZpY2UgPSAn0J/QtdGA0LLRi9C5INC/0L7Qu9C90L7RhtC10L3QvdGL0Lkg0L7RhNC40YEg0K/QvdC00LXQutGB0LAg0L/QvtGP0LLQuNC70YHRjyDQsiDQnNC+0YHQutCy0LUg0LIgMjAwMSDQs9C+0LTRgy4gJztcclxuICAgIGNvbnN0IHNlY29uZE9mZmljZSA9ICc8aW1nIHN0eWxlPVwid2lkdGg6IDE5MHB4O1wiIHNyYz1cImltZy9vZmZpY2UuanBlZ1wiPic7XHJcbiAgICBjb25zdCB0aGlyZE9mZmljZSA9ICc8YSBocmVmPVwiaHR0cHM6Ly95YW5kZXgucnUvY29tcGFueS9jb250YWN0cy9tb3Njb3cvXCI+0JPQu9Cw0LLQvdGL0Lkg0L7RhNC40YEg0K/QvdC00LXQutGB0LA8L2E+JztcclxuICAgIC8vINCh0L7Qt9C00LDQtNC40Lwg0Lgg0LTQvtCx0LDQstC40Lwg0L/QsNC90LXQu9GMINC90LAg0LrQsNGA0YLRgy5cclxuLy8gICAgY29uc3QgcGFuZWwgPSBuZXcgeW1hcHMuUGFuZWwoKTtcclxuLy8gICAgbXlNYXAuY29udHJvbHMuYWRkKHBhbmVsLCB7XHJcbi8vICAgICAgICBmbG9hdDogJ2xlZnQnXHJcbi8vICAgIH0pO1xyXG4gICAgLy8g0KHQvtC30LTQsNC00LjQvCDQutC+0LvQu9C10LrRhtC40Y4g0LPQtdC+0L7QsdGK0LXQutGC0L7Qsi5cclxuICAgIGNvbnN0IGNvbGxlY3Rpb24gPSBuZXcgeW1hcHMuR2VvT2JqZWN0Q29sbGVjdGlvbihudWxsLCB7XHJcbiAgICAgICAgLy8g0JfQsNC/0YDQtdGC0LjQvCDQv9C+0Y/QstC70LXQvdC40LUg0LHQsNC70YPQvdCwLlxyXG4gICAgICAgIGhhc0JhbGxvb246IGZhbHNlLFxyXG4gICAgICAgIGljb25Db2xvcjogJyNlZDQ5OTMnXHJcbi8vICAgICAgICBpY29uQ29sb3I6ICcjNDE4ZWJjJ1xyXG4gICAgfSk7XHJcbiAgICAvLyDQlNC+0LHQsNCy0LjQvCDQs9C10L7QvtCx0YrQtdC60YLRiyDQsiDQutC+0LvQu9C10LrRhtC40Y4uXHJcbiAgICBjb2xsZWN0aW9uXHJcbiAgICAgICAgLmFkZChuZXcgeW1hcHMuUGxhY2VtYXJrKFs1NS43MzM4MzgsIDM3LjU4ODEwMF0sIHtcclxuICAgICAgICAgICAgYmFsbG9vbkNvbnRlbnQ6IHRoaXJkT2ZmaWNlXHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAgLmFkZChuZXcgeW1hcHMuUGxhY2VtYXJrKFs1NS43NTgyNDAsIDM3LjY3ODUyM10sIHtcclxuICAgICAgICAgICAgYmFsbG9vbkNvbnRlbnQ6IHNlY29uZE9mZmljZVxyXG4gICAgICAgIH0pKVxyXG4gICAgICAgIC5hZGQobmV3IHltYXBzLlBsYWNlbWFyayhbNTUuNjkzNzg0LCAzNy41NjQ5NDJdLCB7XHJcbiAgICAgICAgICAgIGJhbGxvb25Db250ZW50OiBmaXJzdE9mZmljZVxyXG4gICAgICAgIH0pKTtcclxuICAgIC8vINCU0L7QsdCw0LLQuNC8INC60L7Qu9C70LXQutGG0LjRjiDQvdCwINC60LDRgNGC0YMuXHJcbiAgICBteU1hcC5nZW9PYmplY3RzLmFkZChjb2xsZWN0aW9uKTtcclxuICAgIC8vINCf0L7QtNC/0LjRiNC10LzRgdGPINC90LAg0YHQvtCx0YvRgtC40LUg0LrQu9C40LrQsCDQv9C+INC60L7Qu9C70LXQutGG0LjQuC5cclxuICAgIGNvbGxlY3Rpb24uZXZlbnRzLmFkZCgnY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgLy8g0J/QvtC70YPRh9C40Lwg0YHRgdGL0LvQutGDINC90LAg0LPQtdC+0L7QsdGK0LXQutGCLCDQv9C+INC60L7RgtC+0YDQvtC80YMg0LrQu9C40LrQvdGD0Lsg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GMLlxyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LmdldCgndGFyZ2V0Jyk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGFyZ2V0LnByb3BlcnRpZXMuZ2V0KCdiYWxsb29uQ29udGVudCcpKVxyXG4gICAgICAgIC8vINCX0LDQtNCw0LTQuNC8INC60L7QvdGC0LXQvdGCINCx0L7QutC+0LLQvtC5INC/0LDQvdC10LvQuC5cclxuLy8gICAgICAgIHBhbmVsLnNldENvbnRlbnQodGFyZ2V0LnByb3BlcnRpZXMuZ2V0KCdiYWxsb29uQ29udGVudCcpKTtcclxuICAgICAgICAvLyDQn9C10YDQtdC80LXRgdGC0LjQvCDRhtC10L3RgtGAINC60LDRgNGC0Ysg0L/QviDQutC+0L7RgNC00LjQvdCw0YLQsNC8INC80LXRgtC60Lgg0YEg0YPRh9GR0YLQvtC8INC30LDQtNCw0L3QvdGL0YUg0L7RgtGB0YLRg9C/0L7Qsi5cclxuLy8gICAgICAgIG15TWFwLnBhblRvKHRhcmdldC5nZW9tZXRyeS5nZXRDb29yZGluYXRlcygpLCB7dXNlTWFwTWFyZ2luOiB0cnVlfSk7XHJcbiAgICB9KTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG4vLyDQstCy0L7QtCDQsiDQuNC90L/Rg9GC0LVcclxuXHJcblx0aW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0aWYoaW5wdXQudmFsdWUubGVuZ3RoID4gMyAmJiBldmVudC5rZXkgIT09ICdlbnRlcicpe1xyXG5cclxuXHRcdFx0Y29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSksXHJcblx0XHRcdFx0ICB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcblx0XHRcdHhoci5vcGVuKFwiUE9TVFwiLCBmb3JtLmdldEF0dHJpYnV0ZSgnYWN0aW9uJykpO1xyXG5cdFx0XHR4aHIucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xyXG5cdFx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIlgtUmVxdWVzdGVkLVdpdGhcIiwgXCJYTUxIdHRwUmVxdWVzdFwiKTtcclxuXHJcblx0XHRcdHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdGlmICh4aHIucmVhZHlTdGF0ZSAhPT0gNCl7XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcclxuXHJcblx0XHRcdFx0XHRjb25zdCBvYmogPSB4aHIucmVzcG9uc2U7XHJcblxyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2cob2JqKTtcclxuXHJcblx0XHRcdFx0XHRyZXN1bHQuaW5uZXJIVE1MID0gb2JqLnJlc3VsdDtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0eGhyLnNlbmQoZm9ybURhdGEpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG5cdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtcG9pbnRzJykpOyIsIiggZmlsdGVyID0+IHtcclxuXHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cdGlmKCFmaWx0ZXIpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0bGV0IHdpbmRvd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcblx0Y29uc3QgYnRuU2hvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tZmlsdGVyLXNob3cnKSxcclxuXHRcdCAgYnRuQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLWZpbHRlci1oaWRlJyksXHJcblx0XHQgIGZsb2F0QnRuID0gZmlsdGVyLnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXJfX2Zsb2F0JyksXHJcblx0XHQgIGNvdW5lclRvdGFsID0gZmlsdGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWx0ZXJfX2NvdW5lcicpLFxyXG5cdFx0ICBjYXRhbG9nUmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0YWxvZ19faXRlbXMnKSxcclxuXHRcdCAgcGFnaW4gPSBjYXRhbG9nUmlnaHQucXVlcnlTZWxlY3RvcignLnBhZ2luJyksXHJcblx0XHQgIGxpc3RSZXN1bHQgPSBjYXRhbG9nUmlnaHQucXVlcnlTZWxlY3RvcignLmNhdGFsb2ctbGlzdCcpO1xyXG5cclxuXHRsZXQgc2V0VGltZW91dElEID0gbnVsbDtcclxuXHJcblx0Ly8g0LfQsNC/0YDQvtGBINC60L7Qu9C40YfQtdGB0YLQstCwINC4INC/0LXRgNC10YDQuNGB0L7QstC60LAg0YTQuNC70YzRgtGA0LBcclxuXHJcblx0ZmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRpZihldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCduYW1lJykpIHtcclxuXHJcblx0XHRcdC8vINCw0L3QuNC80LDRhtC40Y8g0LIg0YTQuNC70YzRgtGA0LVcclxuXHRcdFx0ZmlsdGVyLmNsYXNzTGlzdC5hZGQoJ2lzLWxvYWRpbmcnKTtcclxuXHRcdFx0ZmxvYXRCdG4uc3R5bGUudG9wID0gZXZlbnQudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIGZpbHRlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyAncHgnO1xyXG5cdFx0XHRmbG9hdEJ0bi5jbGFzc0xpc3QuYWRkKCdpcy1zaG93Jyk7XHJcblx0XHRcdGNsZWFyVGltZW91dChzZXRUaW1lb3V0SUQpO1xyXG5cclxuXHRcdFx0Ly8g0LfQsNC/0YDQvtGBXHJcblxyXG5cdFx0XHRjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmaWx0ZXIpLFxyXG5cdFx0XHRcdCAgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG5cdFx0XHR4aHIub3BlbihcIlBPU1RcIiwgZmlsdGVyLmdldEF0dHJpYnV0ZSgnYWN0aW9uJykpO1xyXG5cdFx0XHR4aHIucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xyXG5cdFx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIlgtUmVxdWVzdGVkLVdpdGhcIiwgXCJYTUxIdHRwUmVxdWVzdFwiKTtcclxuXHJcblx0XHRcdHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdGlmICh4aHIucmVhZHlTdGF0ZSAhPT0gNCl7XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcclxuXHJcblx0XHRcdFx0XHRjb25zdCBvYmogPSB4aHIucmVzcG9uc2U7XHJcblxyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2cob2JqKTtcclxuXHJcblx0XHRcdFx0XHRmaWx0ZXIuY2xhc3NMaXN0LnJlbW92ZSgnaXMtbG9hZGluZycpO1xyXG5cclxuXHRcdFx0XHRcdEFycmF5LmZyb20oY291bmVyVG90YWwsIGVsID0+IGVsLnRleHRDb250ZW50ID0gb2JqLnRvdGFsKTtcclxuXHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0SUQgPSBzZXRUaW1lb3V0KCAoKT0+IGZsb2F0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXNob3cnKSwgNTAwMCk7XHJcblxyXG5cdFx0XHRcdFx0aWYob2JqLmxpc3QpIHtcclxuXHJcblx0XHRcdFx0XHRcdGxpc3RSZXN1bHQuaW5uZXJIVE1MID0gb2JqLmxpc3Q7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmKG9iai5wYWdpbikge1xyXG5cclxuXHRcdFx0XHRcdFx0cGFnaW4uaW5uZXJIVE1MID0gb2JqLnBhZ2luO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0eGhyLnNlbmQoZm9ybURhdGEpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG5cdC8vINC+0YLQv9GA0LDQstC60LBcclxuXHJcblx0ZmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZpbHRlciksXHJcblx0XHRcdCAgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG5cdFx0eGhyLm9wZW4oXCJQT1NUXCIsIGZpbHRlci5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpKTtcclxuXHRcdHhoci5yZXNwb25zZVR5cGUgPSAnanNvbic7XHJcblx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIlgtUmVxdWVzdGVkLVdpdGhcIiwgXCJYTUxIdHRwUmVxdWVzdFwiKTtcclxuXHJcblx0XHRmb3JtRGF0YS5hcHBlbmQoXCJyZXN1bHRcIiwgdHJ1ZSk7XHJcblx0XHRjYXRhbG9nUmlnaHQuY2xhc3NMaXN0LmFkZCgnaXMtbG9hZGluZycpO1xyXG5cclxuXHRcdHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XHJcblxyXG5cdFx0XHRpZiAoeGhyLnJlYWR5U3RhdGUgIT09IDQpe1xyXG5cclxuXHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHhoci5yZXNwb25zZVRleHQpO1xyXG5cdFx0XHRcdGNhdGFsb2dSaWdodC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1sb2FkaW5nJyk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHhoci5zZW5kKGZvcm1EYXRhKTtcclxuXHJcblx0fSk7XHJcblxyXG5cdC8vINGE0LjQu9GM0YLRgNGD0LXQvCDQv9C+INC/0L7QuNGB0LrRgyDQndCw0LnRgtC4XHJcblxyXG5cdGNvbnN0IGZhc3RGaWx0ZXIgPSBmaWx0ZXIucXVlcnlTZWxlY3RvckFsbCgnLmZhc3QtZmlsdGVyJyk7XHJcblxyXG5cdEFycmF5LmZyb20oZmFzdEZpbHRlciwgZWwgPT4ge1xyXG5cclxuXHRcdGNvbnN0IGlucHV0ID0gZWwucXVlcnlTZWxlY3RvcignLmZhc3QtZmlsdGVyX19pbnB1dCcpLFxyXG5cdFx0XHQgIGl0ZW1zID0gZWwucXVlcnlTZWxlY3RvckFsbCgnLmZhc3QtZmlsdGVyX19pdGVtJyk7XHJcblxyXG5cdFx0aW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0Y29uc3QgdmFsID0gaW5wdXQudmFsdWUudG9Mb3dlckNhc2UoKTtcclxuXHJcblx0XHRcdGxldCBlbXB0eSA9IHRydWU7XHJcblxyXG5cdFx0XHRBcnJheS5mcm9tKGl0ZW1zLCBpdGVtID0+IHtcclxuXHJcblx0XHRcdFx0bGV0IHZhbHVlID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuZmFzdC1maWx0ZXJfX2l0ZW0tdmFsdWUnKTtcclxuXHJcblx0XHRcdFx0dmFsdWUgPSB2YWx1ZSA/IHZhbHVlLnRleHRDb250ZW50LnRyaW0oKSA6IGl0ZW0udGV4dENvbnRlbnQudHJpbSgpO1xyXG5cclxuXHRcdFx0XHRpdGVtLmNsYXNzTGlzdC50b2dnbGUoJ29ubHktaGl0X19oaWRlJywgdmFsdWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHZhbCkgIT09IDApO1xyXG5cclxuXHRcdFx0XHRpZihlbXB0eSAmJiB2YWx1ZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodmFsKSA9PT0gMCkge1xyXG5cclxuXHRcdFx0XHRcdGVtcHR5ID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Y29uc29sZS5sb2coZW1wdHkpO1xyXG5cclxuXHRcdFx0ZWwuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtbm90LWZvdW5kJywgZW1wdHkpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcblx0Ly8g0L/QvtC60LDQt9GL0LLQsNC10Lwg0YTQuNC70YzRgtGAINCyINC80L7QsdC40LvRjNC90L7QvFxyXG5cclxuXHRidG5TaG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdHdpbmRvd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnZmlsdGVyLXNob3cnKTtcclxuXHRcdHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuXHJcblx0fSk7XHJcblxyXG5cdGJ0bkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZmlsdGVyLXNob3cnKTtcclxuXHRcdHdpbmRvdy5zY3JvbGxUbygwLCB3aW5kb3dTY3JvbGwpO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyJykgKTtcclxuXHJcbi8qIG9ubHktaGl0ICovXHJcblxyXG4oIGVsZW0gPT4ge1xyXG5cclxuXHRcInVzZSBzdHJpY3RcIjtcclxuXHJcblx0QXJyYXkuZnJvbShlbGVtLCBlbCA9PiB7XHJcblxyXG5cdFx0Y29uc3QgYnRuID0gZWwucXVlcnlTZWxlY3RvcignLm9ubHktaGl0X19idG4nKSxcclxuXHRcdFx0ICBpdGVtcyA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5vbmx5LWhpdF9faXRlbScpO1xyXG5cclxuXHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGVsLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFsbCcpKTtcclxuXHJcblx0fSk7XHJcblxyXG59KSggZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9ubHktaGl0JykgKTsiLCJcclxuLy8g0LLRgdC/0LvRi9Cy0LDRjtGJ0LjQuSBzdWJtaXRcclxuXHJcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xyXG5cclxuXHRpZighZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZm9ybScpKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdGNvbnN0IGZvcm0gPSBldmVudC50YXJnZXQsXHJcblx0XHQgIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pLFxyXG5cdFx0ICB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcblx0eGhyLm9wZW4oXCJQT1NUXCIsIGZvcm0uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKSk7XHJcblx0eGhyLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcclxuXHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIlgtUmVxdWVzdGVkLVdpdGhcIiwgXCJYTUxIdHRwUmVxdWVzdFwiKTtcclxuXHJcblx0eGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcclxuXHJcblx0XHRpZiAoeGhyLnJlYWR5U3RhdGUgIT09IDQpe1xyXG5cclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XHJcblxyXG5cdFx0XHRjb25zdCBvYmogPSB4aHIucmVzcG9uc2U7XHJcblx0XHRcdGNvbnNvbGUubG9nKG9iaik7XHJcblxyXG5cdC8vINC40L3RhNC+0YDQvNCw0YbQuNC+0L3QvdGL0LUg0YHQvtC+0LHRidC10L3QuNGPXHJcblx0XHRcdGlmKG9iai5tb2RhbFNob3cpIHtcclxuXHJcblx0XHRcdFx0aWYob2JqLm1vZGFsU2hvdyA9PT0gJ2luZm8nKSB7XHJcblxyXG5cdFx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWluZm9fX3RpdGxlJykuaW5uZXJIVE1MID0gb2JqLnRpdGxlID8gb2JqLnRpdGxlIDogJyc7XHJcblx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtaW5mb19fbWVzc2FnZScpLmlubmVySFRNTCA9IG9iai5tZXNzYWdlID8gb2JqLm1lc3NhZ2UgOiAnJztcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRDRy5tb2RhbFNob3cob2JqLm1vZGFsU2hvdyk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdC8vINC40LfQsdGA0LDQvdC90L7QtVxyXG5cdFx0XHRpZihmb3JtLmNsYXNzTGlzdC5jb250YWlucygnZm9ybS13aXNobGlzdCcpKXtcclxuXHJcblx0XHRcdFx0Y29uc3QgaGVhZGVyQ291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX193aXNobGlzdCAuaGVhZGVyX19pY29ucy1jb3VudCcpO1xyXG5cclxuXHRcdFx0XHRpZihvYmouaGVhZGVyQ291bnQpIHtcclxuXHJcblx0XHRcdFx0XHRoZWFkZXJDb3VudC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJywgb2JqLmhlYWRlckNvdW50ID09PSAwKTtcclxuXHRcdFx0XHRcdGhlYWRlckNvdW50LnRleHRDb250ZW50ID0gb2JqLmhlYWRlckNvdW50O1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGZvcm0uZWxlbWVudHMubW9kZS52YWx1ZSA9IG9iai5tb2RlO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHQvLyDRgdGA0LDQstC90LXQvdC40LVcclxuXHRcdFx0aWYoZm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ2Zvcm0tY29tcGFyZScpKXtcclxuXHJcblx0XHRcdFx0Zm9ybS5lbGVtZW50cy5tb2RlLnZhbHVlID0gb2JqLm1vZGU7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdC8vINC60L3QvtC/0LrQsCDQmtGD0L/QuNGC0YxcclxuXHRcdFx0aWYoZm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ2Zvcm0tYnV5Jykpe1xyXG5cclxuXHRcdFx0XHRjb25zdCBoZWFkZXJDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2NhcnQgLmhlYWRlcl9faWNvbnMtY291bnQnKTtcclxuXHJcblx0XHRcdFx0aWYoY2FydC5oZWFkZXJDb3VudCkge1xyXG5cclxuXHRcdFx0XHRcdGhlYWRlckNvdW50LnRleHRDb250ZW50ID0gY2FydC5oZWFkZXJDb3VudDtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZihjYXJ0Lm1vZGUgPT09IFwiYWRkXCIpIHtcclxuXHJcblx0XHRcdFx0XHRmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWJ1eV9fYnRucyBhJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cdFx0XHRcdFx0Zm9ybS5xdWVyeVNlbGVjdG9yKCcuZm9ybS1idXlfX2J0bnMgYnV0dG9uJykuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCfRgNC10LDQu9GC0LfQvtCy0LDRgtGMINCy0L7Qt9Cy0YDQsNGCIGFydGljbGVpZCDQtNC70Y8g0YPRgdGC0LDQvdC+0LLQutC1INCyINC60LDRgNGC0L7Rh9C60LUg0LDQutGC0LjQstC90L7Qs9C+INCy0LDRgNC40LDQvdGC0LAnKVxyXG4vKlxyXG5cdFx0XHRcdFx0aWYoYXJ0aWNsZUlELmxlbmd0aCkge1xyXG5cclxuXHRcdFx0XHRcdFx0QXJyYXkuZnJvbShhcnRpY2xlSUQsIGlucHV0ID0+IHtcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYoaW5wdXQudmFsdWUgPT09IGNhcnQuYXJ0aWNsZWlkKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKCdkYXRhLWluLWJhc2tldCcsICdpbiBiYXNrZXQnKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0fSovXHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHQvLyDQp9Cw0YHRgtC+INC/0L7QutGD0L/QsNGO0YIg0LLQvNC10YHRgtC1XHJcblx0XHRcdGlmKGZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9kdWN0LXNldCcpKXtcclxuXHJcblx0XHRcdFx0aWYoY2FydC5oZWFkZXJDb3VudCkge1xyXG5cclxuXHRcdFx0XHRcdGhlYWRlckNvdW50LnRleHRDb250ZW50ID0gY2FydC5oZWFkZXJDb3VudDtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZihjYXJ0Lm1vZGUgPT09IFwiYWRkXCIpIHtcclxuXHJcblx0XHRcdFx0XHRmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LXNldF9fYnRuIGEnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LXNldF9fYnRuIGJ1dHRvbicpLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHR4aHIuc2VuZChmb3JtRGF0YSk7XHJcblxyXG59KTsiLCJcclxuKChpdGVtcykgPT4ge1xyXG5cclxuXHRcInVzZSBzdHJpY3RcIjtcclxuXHJcblx0aWYoIWl0ZW1zLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRBcnJheS5mcm9tKGl0ZW1zLCBzZXQgPT4ge1xyXG5cclxuXHRcdGNvbnN0IGdhbGxlcnlTd2lwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcblx0XHRnYWxsZXJ5U3dpcGVyLmNsYXNzTmFtZSA9ICdzd2lwZXItY29udGFpbmVyIHN3aXBlci1jb250YWluZXItLWdhbGxlcnknO1xyXG5cclxuXHRcdGNvbnN0IGxpbmtzID0gc2V0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYWxsZXJ5LXNldF9faXRlbScpO1xyXG5cclxuXHRcdGxldCB3cmFwcGVyID0gJzx1bCBjbGFzcz1cInN3aXBlci13cmFwcGVyXCI+JztcclxuXHJcblx0XHRBcnJheS5mcm9tKGxpbmtzLCAobGluaywgaW5kZXgpID0+IHtcclxuXHJcblx0XHRcdHdyYXBwZXIgKz0gJzxsaSBjbGFzcz1cInN3aXBlci1zbGlkZVwiPjxpbWcgc3JjPVwiJyArIGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJykgKyAnXCI+PC9saT4nO1xyXG5cclxuXHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdFx0aWYoZ2FsbGVyeVN3aXBlci5zd2lwZXIpIHtcclxuXHJcblx0XHRcdFx0XHRnYWxsZXJ5U3dpcGVyLnN3aXBlci5kZXN0cm95KGZhbHNlLHRydWUpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1nYWxsZXJ5JykuaW5uZXJIVE1MID0gJyc7XHJcblx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWdhbGxlcnknKS5hcHBlbmRDaGlsZChnYWxsZXJ5U3dpcGVyLmNsb25lTm9kZSh0cnVlKSk7XHJcblxyXG5cdFx0XHRcdENHLm1vZGFsU2hvdygnZ2FsbGVyeScpO1xyXG5cclxuXHRcdFx0XHRjb25zdCBnYWxsZXJ5TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtZ2FsbGVyeSAuc3dpcGVyLWNvbnRhaW5lci0tZ2FsbGVyeScpO1xyXG5cclxuXHRcdFx0XHRnYWxsZXJ5TW9kYWwuc2V0QXR0cmlidXRlKCdkYXRhLWluaXRpYWxTbGlkZScsIGluZGV4KTtcclxuXHJcblx0XHRcdFx0Q0cuc3dpcGVyKGdhbGxlcnlNb2RhbCk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHR3cmFwcGVyICs9ICc8L3VsPjxzcGFuIGNsYXNzPVwic3dpcGVyLWNvdW50XCI+PC9zcGFuPic7XHJcblxyXG5cdFx0Z2FsbGVyeVN3aXBlci5pbm5lckhUTUwgPSB3cmFwcGVyO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYWxsZXJ5LXNldCcpKTsiLCIoKGhlYWRlckZpeGVkKSA9PiB7XHJcblxyXG5cdFwidXNlIHN0cmljdFwiO1xyXG5cclxuXHRpZighaGVhZGVyRml4ZWQpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Y29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xyXG5cclxuXHRDRy5oZWlnaHRIZWFkZXJGaXhlZCA9IGhlYWRlckZpeGVkLmNsaWVudEhlaWdodDtcclxuXHJcblx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS1oZWlnaHRIZWFkZXJGaXhlZFwiLCBDRy5oZWlnaHRIZWFkZXJGaXhlZCArICdweCcpO1xyXG5cclxuXHRQdWJTdWIuc3Vic2NyaWJlKCd3aW5kb3dTY3JvbGwnLCAoKSA9PlxyXG5cdFx0aGVhZGVyLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWZpeGVkJywgd2luZG93LmlubmVySGVpZ2h0IDwgd2luZG93LnBhZ2VZT2Zmc2V0KSk7XHJcblxyXG5cdFB1YlN1Yi5zdWJzY3JpYmUoJ3dpbmRvd1dpZHRoUmVzaXplJywgKCkgPT4ge1xyXG5cclxuXHRcdENHLmhlaWdodEhlYWRlckZpeGVkID0gaGVhZGVyRml4ZWQuY2xpZW50SGVpZ2h0O1xyXG5cclxuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taGVpZ2h0SGVhZGVyRml4ZWRcIiwgQ0cuaGVpZ2h0SGVhZGVyRml4ZWQgKyAncHgnKTtcclxuXHJcblx0fSk7XHJcblxyXG5cclxuXHQvLyBidG4gdXAgdG9wXHJcblxyXG5cdGNvbnN0IGZvb3RlclVQID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3Rlcl9fdXAnKTtcclxuXHJcblx0aWYoZm9vdGVyVVApIHtcclxuXHJcblx0XHRQdWJTdWIuc3Vic2NyaWJlKCd3aW5kb3dTY3JvbGwnLCAoKSA9PlxyXG5cdFx0XHRmb290ZXJVUC5jbGFzc0xpc3QudG9nZ2xlKFwiaXMtc2hvd1wiLCB3aW5kb3cuaW5uZXJIZWlnaHQgPCB3aW5kb3cucGFnZVlPZmZzZXQpKTtcclxuXHJcblx0XHRmb290ZXJVUC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGRvY3VtZW50LmJvZHkuc2Nyb2xsSW50b1ZpZXcoe2JlaGF2aW9yOiBcInNtb290aFwifSkpO1xyXG5cclxuXHR9XHJcblxyXG5cdC8vIGZpeGVkXHJcblxyXG5cdGxldCBTY3JvbGxUb3BQcmV2ID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcblxyXG5cdFx0aWYod2luZG93LnBhZ2VZT2Zmc2V0IDw9IDApIHtcclxuXHJcblx0XHRcdGhlYWRlckZpeGVkLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXNob3cnKTtcclxuXHJcblx0XHR9XHJcblx0XHRlbHNlIGlmKHdpbmRvdy5wYWdlWU9mZnNldCA+IHdpbmRvdy5pbm5lckhlaWdodCl7XHJcblxyXG5cdFx0XHRoZWFkZXJGaXhlZC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1zaG93Jywgd2luZG93LnBhZ2VZT2Zmc2V0IDw9IFNjcm9sbFRvcFByZXYpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRTY3JvbGxUb3BQcmV2ID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuXHR9KTtcclxuXHJcblx0Ly8gY2xvc2UgbWVudVxyXG5cclxuXHRQdWJTdWIuc3Vic2NyaWJlKCdTd2lwZXJBdXRvUGxheVN0YXJ0JywgKCkgPT4ge1xyXG5cclxuXHRcdGlmICh3aW5kb3cuaW5uZXJIZWlnaHQgPCB3aW5kb3cucGFnZVlPZmZzZXQpe1xyXG5cclxuXHRcdFx0aGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2lzLWZpeGVkJyk7XHJcblx0XHRcdGhlYWRlckZpeGVkLmNsYXNzTGlzdC5hZGQoJ2lzLXNob3cnKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2ZpeGVkJykpOyIsIi8vINC90LDQstC10LTQtdC90LjQtSDQvdCwINGB0YLRgNC+0LrRgyDQt9Cw0LrQsNC30LBcclxuXHJcbiggaW1ncyA9PiB7XHJcblxyXG5cdFwidXNlIHN0cmljdFwiO1xyXG5cclxuXHRpZighaW1ncy5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Ly8g0L/QtdGA0LLRi9C5INGD0YDQvtCy0LXQvdGMLCDQstGC0L7RgNC+0YHRgtC40L/QtdC90L3QvtC1INC80LXQvdGOXHJcblx0QXJyYXkuZnJvbShpbWdzLCBpbWcgPT4ge1xyXG5cclxuXHRcdGltZy5jbG9zZXN0KCd0cicpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdGltZy5zdHlsZS50b3AgPSBldmVudC5wYWdlWSArICdweCc7XHJcblx0XHRcdGltZy5zdHlsZS5sZWZ0ID0gZXZlbnQucGFnZVggKyAncHgnO1xyXG5cdFx0XHRpbWcuc3R5bGUub3BhY2l0eSA9IDE7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0aW1nLmNsb3Nlc3QoJ3RyJykuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcclxuXHJcblx0XHRcdGltZy5zdHlsZS5vcGFjaXR5ID0gMDtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGtfX2ltZy1ob3Zlci10cicpKTtcclxuXHJcbi8qINCX0LDRj9Cy0LrQsCDQvdCwINCy0YHRgtGD0L/Qu9C10L3QuNC1INCyINC60LvRg9CxICovXHJcblxyXG4oIGZvcm0gPT4ge1xyXG5cclxuXHRcInVzZSBzdHJpY3RcIjtcclxuXHJcblx0aWYoIWZvcm0pIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Y29uc3QgaW5wdXRHcm91cFRydWUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWRpc2FibGVkLXRydWVdJyksXHJcblx0XHQgIGlucHV0R3JvdXBEaXNhYmxlZCA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZGlzYWJsZWQtZmFsc2VdJyk7XHJcblxyXG5cdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGlmKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3R5cGUnKSA9PT0gJ2ZpbGUnKSB7XHJcblxyXG5cdFx0XHRjb25zdCBsYWJlbCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLFxyXG5cdFx0XHRcdCAgc21hbGwgPSBsYWJlbC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtZmlsZXNfX2xhYmVsIHNtYWxsJyk7XHJcblxyXG5cdFx0XHRzbWFsbC50ZXh0Q29udGVudCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgZ3JvdXAgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWdyb3VwJyk7XHJcblxyXG5cdFx0aWYoZ3JvdXApIHtcclxuXHJcblx0XHRcdC8vINGA0LDQt9Cx0LvQvtC60LjRgNGD0LXQvCDQutC+0YLQvtGA0YvQtSDRgdC+0LLQv9Cw0LvQuFxyXG5cdFx0XHRBcnJheS5mcm9tKGlucHV0R3JvdXBEaXNhYmxlZCwgaW5wdXQgPT4ge1xyXG5cclxuXHRcdFx0XHRpZihpbnB1dC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZGlzYWJsZWQtZmFsc2UnKSA9PT0gZ3JvdXApIHtcclxuXHJcblx0XHRcdFx0XHRpbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdC8vINCx0LvQvtC60LjRgNGD0LXQvCDQutC+0YLQvtGA0YvQtSDRgdC+0LLQv9Cw0LvQuFxyXG5cdFx0XHRBcnJheS5mcm9tKGlucHV0R3JvdXBUcnVlLCBpbnB1dCA9PiB7XHJcblxyXG5cdFx0XHRcdGlmKGlucHV0LmdldEF0dHJpYnV0ZSgnZGF0YS1kaXNhYmxlZC10cnVlJykgPT09IGdyb3VwKSB7XHJcblxyXG5cdFx0XHRcdFx0aW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxufSkoIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5say1mb3JtLS1jbHViJykgKTsiLCIvKkNHLm1hc2sgPSAoZWxlbXMpID0+IHtcclxuXHJcblx0aWYoIWVsZW1zLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRpZiAoIXdpbmRvdy5JbnB1dG1hc2spIHtcclxuXHJcblx0XHRjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuXHJcblx0XHRzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xyXG5cdFx0c2NyaXB0LmFzeW5jID0gdHJ1ZTtcclxuXHRcdHNjcmlwdC5zcmMgPScvanMvaW5wdXRtYXNrLm1pbi5qcyc7XHJcblxyXG5cdFx0c2NyaXB0Lm9ubG9hZCA9ICgpID0+IHNldE1hc2soKTtcclxuXHJcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCksIDUwMDApO1xyXG5cclxuXHR9XHJcblx0ZWxzZSB7XHJcblxyXG5cdFx0c2V0TWFzaygpO1xyXG5cclxuXHR9XHJcblxyXG5cdGNvbnN0IHNldE1hc2sgPSAoKSA9PiB7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShlbGVtcywgZWwgPT4ge1xyXG5cclxuXHRcdFx0aWYoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnB1dG1hc2stLXBob25lJykpIHtcclxuXHJcblx0XHRcdFx0dmFyIG1hc2tJbnB1dCA9IG5ldyBJbnB1dG1hc2soe1xyXG5cdFx0XHRcdFx0bWFzazogXCIrNyAoIDk5OSApIDk5OS05OS05OVwiLFxyXG5cdFx0XHRcdFx0c2hvd01hc2tPbkhvdmVyOiBmYWxzZSxcclxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyOiBcIis3ICggX19fICkgX19fLV9fLV9fXCJcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZihlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2lucHV0bWFzay0tZGF0ZScpKSB7XHJcblxyXG5cdFx0XHRcdHZhciBtYXNrSW5wdXQgPSBuZXcgSW5wdXRtYXNrKHtcclxuXHRcdFx0XHRcdGFsaWFzOiBcImRhdGV0aW1lXCIsXHJcblx0XHRcdFx0XHRzaG93TWFza09uSG92ZXI6IGZhbHNlLFxyXG5cdFx0XHRcdFx0aW5wdXRGb3JtYXQ6IFwiZGQubW0ueXl5eVwiLFxyXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI6IFwi0LTQtC7QvNC8LtCz0LPQs9CzXCJcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZihlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2lucHV0bWFzay0tY3VycmVuY3knKSkge1xyXG5cclxuXHRcdFx0XHR2YXIgbWFza0lucHV0ID0gbmV3IElucHV0bWFzayh7XHJcblx0XHRcdFx0XHRhbGlhczogXCJpbnRlZ2VyXCIsXHJcblx0XHRcdFx0XHRzdWZmaXg6ICcg0YDRg9Cx0LvQtdC5JyxcclxuXHRcdFx0XHRcdGdyb3VwU2l6ZTogMyxcclxuXHRcdFx0XHRcdGF1dG9Hcm91cDogdHJ1ZSxcclxuXHRcdFx0XHRcdGdyb3VwU2VwYXJhdG9yOiAnICcsXHJcblx0XHRcdFx0XHRyaWdodEFsaWduOiBmYWxzZVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHJcblx0XHRcdFx0dmFyIG1hc2tJbnB1dCA9IG5ldyBJbnB1dG1hc2soZWwuZ2V0QXR0cmlidXRlKCdkYXRhLW1hc2snKSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRtYXNrSW5wdXQubWFzayhlbCk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn07XHJcblxyXG5DRy5tYXNrKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnB1dG1hc2snKSk7Ki8iLCJcclxuKChtZW51KSA9PiB7XHJcblxyXG5cdFwidXNlIHN0cmljdFwiO1xyXG5cclxuXHRpZighbWVudSkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtdG9nZ2xlLW1lbnUnKSxcclxuXHRcdCAgbGV2ZWwxID0gbWVudS5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1jYXRhbG9nX19wYXJlbnQnKSxcclxuXHRcdCAgc2Vjb25kID0gbWVudS5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1jYXRhbG9nX19zZWNvbmQtbGluaycpLFxyXG5cdFx0ICBsZXZlbDIgPSBtZW51LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWNhdGFsb2dfX2xldmVsMi1oZWFkLmlzLWFycm93JyksXHJcblx0XHQgIGJveExldmVsMyA9IG1lbnUucXVlcnlTZWxlY3RvcignLm1lbnUtY2F0YWxvZ19fbGV2ZWwzJyksXHJcblx0XHQgIGJ0bkNsb3NlID0gbWVudS5xdWVyeVNlbGVjdG9yKCcubWVudS1jYXRhbG9nX19jbG9zZScpLFxyXG5cdFx0ICBidG5CYWNrID0gbWVudS5xdWVyeVNlbGVjdG9yKCcubWVudS1jYXRhbG9nX19iYWNrJyksXHJcblx0XHQgIGNhdGVnb3J5ID0gbWVudS5xdWVyeVNlbGVjdG9yKCcubWVudS1jYXRhbG9nX19jdXJyZW50LWNhdGVnb3J5JyksXHJcblx0XHQgIGNhdGVnb3J5VGV4dERlZmF1bHQgPSBjYXRlZ29yeS50ZXh0Q29udGVudCxcclxuXHRcdCAgYnRuU2xpZGUgPSBtZW51LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWNhdGFsb2dfX3NsaWRlLWJ0bicpO1xyXG5cclxuXHRsZXRcdGxldmVsMkFjdGl2ZSA9IG51bGwsXHJcblx0XHRsZXZlbDFTY3JvbGwgPSAwLFxyXG5cdFx0bGV2ZWwyU2Nyb2xsID0gMDtcclxuXHJcblx0Y29uc3QgbWVudU9wZW4gPSAoKSA9PiB7XHJcblxyXG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Njcm9sbC1iZWhhdmlvci1vZmYnKTtcclxuXHJcblx0XHRDRy5PcGVuTWVudSA9IHRydWU7XHJcblxyXG5cdFx0aWYod2luZG93LmlubmVyV2lkdGggPCBDRy5icmVha1BvaW50cykge1xyXG5cclxuXHRcdFx0Q0cud2luZG93U2Nyb2xsT2xkID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbWVudS1vcGVuJyk7XHJcblxyXG5cdFx0UHViU3ViLnB1Ymxpc2goJ1N3aXBlckF1dG9QbGF5U3RvcCcpO1xyXG5cclxuXHRcdC8vIGVhZ2VyXHJcblx0XHRpZih3aW5kb3cuaW5uZXJXaWR0aCA+PSBDRy5icmVha1BvaW50cykge1xyXG5cclxuXHRcdFx0QXJyYXkuZnJvbShtZW51LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tsb2FkaW5nPVwibGF6eVwiXScpLCBpbWcgPT4gaW1nLnNldEF0dHJpYnV0ZSgnbG9hZGluZycsJ2VhZ2VyJykpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fTtcclxuXHJcblx0Y29uc3QgbWVudUNsb3NlID0gKCkgPT4ge1xyXG5cclxuXHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1vcGVuJyk7XHJcblxyXG5cdFx0aWYod2luZG93LmlubmVyV2lkdGggPCBDRy5icmVha1BvaW50cykge1xyXG5cclxuXHRcdFx0d2luZG93LnNjcm9sbFRvKDAsIENHLndpbmRvd1Njcm9sbE9sZCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdENHLk9wZW5NZW51ID0gZmFsc2U7XHJcblxyXG5cdFx0c2V0VGltZW91dCggKCkgPT4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbC1iZWhhdmlvci1vZmYnKSwgMTAwKTtcclxuXHJcblx0XHRQdWJTdWIucHVibGlzaCgnU3dpcGVyQXV0b1BsYXlTdGFydCcpO1xyXG5cclxuXHR9O1xyXG5cclxuXHQvLyDQvtGC0LrRgNGL0YLRjHzQt9Cw0LrRgNGL0YLRjCDQvNC10L3RjlxyXG5cclxuXHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBDRy5PcGVuTWVudSA/IG1lbnVDbG9zZSgpIDogbWVudU9wZW4oKSk7XHJcblxyXG5cclxuXHQvLyDQt9Cw0LrRgNGL0YLRjCDQvNC10L3RjlxyXG5cclxuXHRidG5DbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1lbnVDbG9zZSgpKTtcclxuXHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcblxyXG5cdFx0aWYoZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnUtb3BlbicpICYmICFldmVudC50YXJnZXQuY2xvc2VzdCgnLmpzLXRvZ2dsZS1tZW51JykgJiYgIWV2ZW50LnRhcmdldC5jbG9zZXN0KCcubWVudS1jYXRhbG9nJykpIHtcclxuXHJcblx0XHRcdG1lbnVDbG9zZSgpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG5cdC8vINCd0LAg0YPRgNC+0LLQtdC90Ywg0L3QsNC30LDQtFxyXG5cclxuXHRidG5CYWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdGlmKG1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1sZXZlbDMnKSkge1xyXG5cclxuXHRcdFx0bWVudS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1sZXZlbDMnKTtcclxuXHJcblx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLCBsZXZlbDJTY3JvbGwpO1xyXG5cclxuXHRcdFx0Y2F0ZWdvcnkudGV4dENvbnRlbnQgPSBsZXZlbDJBY3RpdmUudGV4dENvbnRlbnQ7XHJcblxyXG5cdFx0XHRtZW51LnN0eWxlLmhlaWdodCA9IGxldmVsMkFjdGl2ZS5jbGllbnRIZWlnaHQgKyBDRy5oZWlnaHRIZWFkZXJGaXhlZCArICdweCc7XHJcblxyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAobWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWxldmVsMicpKSB7XHJcblxyXG5cdFx0XHRtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWxldmVsMicpO1xyXG5cclxuXHRcdFx0d2luZG93LnNjcm9sbFRvKDAsIGxldmVsMVNjcm9sbCk7XHJcblxyXG5cdFx0XHRidG5CYWNrLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcblx0XHRcdGNhdGVnb3J5LnRleHRDb250ZW50ID0gY2F0ZWdvcnlUZXh0RGVmYXVsdDtcclxuXHJcblx0XHRcdG1lbnUuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xyXG5cclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cclxuXHRcdFx0Y29uc29sZS5sb2coJ9GH0YLQvi3RgtC+INC90LUg0YLQsNC6Jyk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcblxyXG5cdC8vINC/0LXRgNCy0YvQuSDRg9GA0L7QstC10L3RjFxyXG5cclxuXHRBcnJheS5mcm9tKGxldmVsMSwgZWwgPT4ge1xyXG5cclxuXHRcdGNvbnN0IGlkID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcblxyXG5cdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdC8vINC00LXRgdC60YLQvtC/XHJcblxyXG5cdFx0XHRpZih3aW5kb3cuaW5uZXJXaWR0aCA+PSBDRy5icmVha1BvaW50cykge1xyXG5cclxuXHRcdFx0XHRBcnJheS5mcm9tKGxldmVsMSwgZWxlbSA9PiBlbGVtLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWhvdmVyJywgZWxlbSA9PT0gZWwpKTtcclxuXHJcblx0XHRcdFx0aWYobGV2ZWwyQWN0aXZlKSB7XHJcblxyXG5cdFx0XHRcdFx0bGV2ZWwyQWN0aXZlLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRsZXZlbDJBY3RpdmUgPSBtZW51LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWNhdGFsb2dfX2xldmVsMi0tJyArIGlkKTtcclxuXHJcblx0XHRcdFx0bGV2ZWwyQWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdC8vINC80L7QsdCw0LnQu1xyXG5cclxuXHRcdFx0aWYoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1icmFuZCcpKSB7XHJcblxyXG5cdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKHdpbmRvdy5pbm5lcldpZHRoIDwgQ0cuYnJlYWtQb2ludHMpIHtcclxuXHJcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdFx0bGV2ZWwxU2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuXHRcdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcblxyXG5cdFx0XHRcdG1lbnUuY2xhc3NMaXN0LmFkZCgnaXMtbGV2ZWwyJyk7XHJcblxyXG5cdFx0XHRcdGlmKGxldmVsMkFjdGl2ZSkge1xyXG5cclxuXHRcdFx0XHRcdGxldmVsMkFjdGl2ZS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0bGV2ZWwyQWN0aXZlID0gbWVudS5xdWVyeVNlbGVjdG9yKCcubWVudS1jYXRhbG9nX19sZXZlbDItLScgKyBpZCk7XHJcblxyXG5cdFx0XHRcdGxldmVsMkFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdGJ0bkJhY2suY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHRjYXRlZ29yeS50ZXh0Q29udGVudCA9IGVsLnRleHRDb250ZW50O1xyXG5cclxuXHRcdFx0XHRtZW51LnN0eWxlLmhlaWdodCA9IGxldmVsMkFjdGl2ZS5jbGllbnRIZWlnaHQgKyBDRy5oZWlnaHRIZWFkZXJGaXhlZCArICdweCc7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHQvLyDQv9C10YDQstGL0Lkg0YPRgNC+0LLQtdC90YwsINCy0YLQvtGA0L7RgdGC0LjQv9C10L3QvdC+0LUg0LzQtdC90Y5cclxuXHRBcnJheS5mcm9tKHNlY29uZCwgZWwgPT4ge1xyXG5cclxuXHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XHJcblxyXG5cdFx0XHQvLyDQtNC10YHQutGC0L7Qv1xyXG5cclxuXHRcdFx0aWYod2luZG93LmlubmVyV2lkdGggPj0gQ0cuYnJlYWtQb2ludHMpIHtcclxuXHJcblx0XHRcdFx0aWYobGV2ZWwyQWN0aXZlKSB7XHJcblxyXG5cdFx0XHRcdFx0bGV2ZWwyQWN0aXZlLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0XHRBcnJheS5mcm9tKGxldmVsMSwgZWxlbSA9PiBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhvdmVyJykpO1xyXG5cclxuXHRcdFx0XHRcdGxldmVsMkFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHJcblx0Ly8g0LLRgtC+0YDQvtC5INGD0YDQvtCy0LXQvdGMXHJcblxyXG5cdEFycmF5LmZyb20obGV2ZWwyLCBlbCA9PiB7XHJcblxyXG5cdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHQvLyDQvNC+0LHQsNC50LtcclxuXHRcdFx0aWYod2luZG93LmlubmVyV2lkdGggPCBDRy5icmVha1BvaW50cykge1xyXG5cclxuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0XHRsZXZlbDJTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG5cdFx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuXHJcblx0XHRcdFx0Ym94TGV2ZWwzLmlubmVySFRNTCA9IGVsLnBhcmVudE5vZGUuaW5uZXJIVE1MO1xyXG5cclxuXHRcdFx0XHRtZW51LmNsYXNzTGlzdC5hZGQoJ2lzLWxldmVsMycpO1xyXG5cclxuXHRcdFx0XHRjYXRlZ29yeS50ZXh0Q29udGVudCA9IGVsLnRleHRDb250ZW50O1xyXG5cclxuXHRcdFx0XHRtZW51LnN0eWxlLmhlaWdodCA9IGJveExldmVsMy5jbGllbnRIZWlnaHQgKyBDRy5oZWlnaHRIZWFkZXJGaXhlZCArICdweCc7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHQvLyDRgNCw0LfQstC10YDQvdGD0YLRjCDQvNC10L3RjiBzbGlkZVxyXG5cclxuXHRBcnJheS5mcm9tKGJ0blNsaWRlLCBlbCA9PiB7XHJcblxyXG5cdFx0Y29uc3QgcGFyZW50ID0gZWwucGFyZW50Tm9kZSxcclxuXHRcdFx0ICBpdGVtc0hpZGUgPSBwYXJlbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtY2F0YWxvZ19fbGV2ZWwyLWl0ZW0uaGlkZScpO1xyXG5cclxuXHRcdGxldCBvcGVuID0gZmFsc2U7XHJcblxyXG5cdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRvcGVuID0gIW9wZW47XHJcblxyXG5cdFx0XHRlbC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1vcGVuJywgb3Blbik7XHJcblxyXG5cdFx0XHRBcnJheS5mcm9tKGl0ZW1zSGlkZSwgaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnLCAhb3BlbikpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWNhdGFsb2cnKSk7IiwiKChtb2RhbCk9PntcclxuXHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cdGlmKCFtb2RhbCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRsZXQgd2luZG93U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuXHRjb25zdCBpdGVtcyA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbF9faXRlbScpLFxyXG5cdFx0ICBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbW9kYWxdJyksXHJcblx0XHQgIGJveCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fYm94JyksXHJcblx0XHQgIHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpO1xyXG5cclxuXHRtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRpZihldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbCcpIHx8IGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsX19ib3gnKSB8fCBldmVudC50YXJnZXQuY2xvc2VzdCgnLm1vZGFsX19jbG9zZScpKXtcclxuXHJcblx0XHRcdENHLmhpZGVNb2RhbCgpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG5cdENHLmhpZGVNb2RhbCA9ICgpID0+IHtcclxuXHJcblx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLXNob3cnKTtcclxuXHRcdHdyYXBwZXIuc3R5bGUudG9wID0gMDtcclxuXHRcdHdpbmRvdy5zY3JvbGxUbygwLHdpbmRvd1Njcm9sbCk7XHJcblxyXG5cdFx0Q0cuYWN0aXZlTW9kYWwgPSBmYWxzZTtcclxuXHJcblx0XHRQdWJTdWIucHVibGlzaCgnU3dpcGVyQXV0b1BsYXlTdGFydCcpO1xyXG5cclxuXHR9O1xyXG5cclxuXHRDRy5tb2RhbFNob3cgPSBzZWxlY3RvciA9PiB7XHJcblxyXG5cdFx0aWYoIUNHLmFjdGl2ZU1vZGFsKXtcclxuXHJcblx0XHRcdHdpbmRvd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcblx0XHRcdHdyYXBwZXIuc3R5bGUudG9wID0gLXdpbmRvd1Njcm9sbCArICdweCc7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdENHLmFjdGl2ZU1vZGFsID0gbW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsX19pdGVtLS0nICsgc2VsZWN0b3IpO1xyXG5cclxuXHRcdEFycmF5LmZyb20oaXRlbXMsIGVsID0+XHJcblx0XHRcdGVsLmNsYXNzTGlzdC50b2dnbGUoJ3Zpc3VhbGx5aGlkZGVuJywgZWwgIT09IENHLmFjdGl2ZU1vZGFsKSk7XHJcblxyXG5cdFx0bW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtZnVsbCcsIHNlbGVjdG9yID09PSAnZ2FsbGVyeScgfHwgc2VsZWN0b3IgPT09ICdwb2ludHMnKTtcclxuXHJcblx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ21vZGFsLXNob3cnKTtcclxuXHRcdHdpbmRvdy5zY3JvbGxUbygwLDApO1xyXG5cclxuXHRcdENHLmFjdGl2ZU1vZGFsLmZvY3VzKCk7XHJcblxyXG5cdFx0UHViU3ViLnB1Ymxpc2goJ21vZGFsU2hvdycsIHNlbGVjdG9yKTtcclxuXHJcblx0XHRQdWJTdWIucHVibGlzaCgnU3dpcGVyQXV0b1BsYXlTdG9wJyk7XHJcblxyXG5cdFx0Y29uc3QgaW5wdXRGb2N1cyA9IENHLmFjdGl2ZU1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fZm9jdXMnKTtcclxuXHJcblx0XHRpZiAoaW5wdXRGb2N1cykge1xyXG5cclxuXHRcdFx0c2V0VGltZW91dCggKCkgPT4gaW5wdXRGb2N1cy5mb2N1cygpLCAxMDAwKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH07XHJcblxyXG5cdEFycmF5LmZyb20oYnRucywgZWwgPT5cclxuXHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cclxuXHRcdFx0Q0cubW9kYWxTaG93KGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1tb2RhbCcpKSkpO1xyXG5cclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGlmKENHLmFjdGl2ZU1vZGFsICYmIGV2ZW50LmtleUNvZGUgPT09IDI3KXtcclxuXHJcblx0XHRcdENHLmhpZGVNb2RhbCgpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKSk7IiwiLy8g0LjQt9C80LXQvdC10L3QuNC1INCyINGE0L7RgNC80LUsINC/0L7QtNGB0YfQtdGCXHJcbiggZm9ybSA9PiB7XHJcblxyXG5cdFwidXNlIHN0cmljdFwiO1xyXG5cclxuXHRpZighZm9ybSkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRjb25zdCByZXN1bHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvY2VkdXJlLWZvcm1fX3Jlc3VsdCcpLFxyXG5cdFx0ICBsaXN0ID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcucHJvY2VkdXJlLWZvcm1fX2xpc3QnKSxcclxuXHRcdCAgaXRlbSA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLnByb2NlZHVyZS1mb3JtX19pdGVtJyksXHJcblx0XHQgIGNoZWNrYm94ID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tib3gtb25seV9faW5wdXQnKTtcclxuXHJcblx0Y29uc3Qgc2V0TGFzdCA9ICgpID0+IHtcclxuXHJcblx0XHRBcnJheS5mcm9tKGxpc3QsIGdyb3VwID0+IHtcclxuXHJcblx0XHRcdGxldCBsYXN0ID0gMDtcclxuXHRcdFx0Y29uc3QgX2xpc3QgPSBncm91cC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvY2VkdXJlLWZvcm1fX2l0ZW0nKTtcclxuXHJcblx0XHRcdEFycmF5LmZyb20oX2xpc3QsIChlbCxpbmRleCkgPT4ge1xyXG5cclxuXHRcdFx0XHRlbC5jbGFzc0xpc3QuYWRkKCdpcy1sYXN0Jyk7XHJcblxyXG5cdFx0XHRcdGlmKCFlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGUnKSkge1xyXG5cclxuXHRcdFx0XHRcdF9saXN0W2xhc3RdLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWxhc3QnKTtcclxuXHRcdFx0XHRcdGxhc3QgPSBpbmRleDtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRpZihsYXN0ID09PSAwKSB7XHJcblxyXG5cdFx0XHRcdF9saXN0WzBdLmNsYXNzTGlzdC5hZGQoJ2lzLWxhc3QnKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxuXHRzZXRMYXN0KCk7XHJcblxyXG5cdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnQgPT4ge1xyXG5cclxuXHQvLyDRh9C10LrQsNC10Lwg0L/RgNC+0LTRg9C60YLRiyDQsiDRgtCw0LHQu9C40YbQtVxyXG5cclxuXHRcdGlmKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrYm94LW9ubHlfX2lucHV0JykpIHtcclxuXHJcblx0XHRcdEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2NlZHVyZS1wcm9kdWN0LS0nICsgZXZlbnQudGFyZ2V0LnZhbHVlKSwgZWwgPT4ge1xyXG5cclxuXHRcdFx0XHRlbC5xdWVyeVNlbGVjdG9yKCcuY2hlY2tib3gtb25seV9faW5wdXQnKS5jaGVja2VkID0gZXZlbnQudGFyZ2V0LmNoZWNrZWQ7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdC8vINGB0LrRgNGL0LLQsNC10Lwv0L/QvtC60LDQt9GL0LLQsNC10Lwg0YfQtdC60L3Rg9GC0YvQtVxyXG5cclxuXHRcdEFycmF5LmZyb20oY2hlY2tib3gsIGlucHV0ID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IGl0ZW0gPSBpbnB1dC5jbG9zZXN0KCcucHJvY2VkdXJlLWZvcm1fX2l0ZW0nKTtcclxuXHJcblx0XHRcdGlmKGlucHV0LmNoZWNrZWQpIHtcclxuXHJcblx0XHRcdFx0aXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1yZW1vdmUnLCAnaGlkZScpO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHJcblx0XHRcdFx0aWYoIWl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRlJykpIHtcclxuXHJcblx0XHRcdFx0XHRpdGVtLmNsYXNzTGlzdC5hZGQoJ2lzLXJlbW92ZScpO1xyXG5cclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoICgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRcdGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cdFx0XHRcdFx0XHRzZXRMYXN0KCk7XHJcblxyXG5cdFx0XHRcdFx0fSwgNDAwKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHQvLyDRgNCw0YHRh9C10YJcclxuXHJcblx0XHRsZXQgX3N1bSA9IDAsXHJcblx0XHRcdF9zdW1TZXQgPSAwO1xyXG5cclxuXHRcdGNvbnN0IGlucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tib3gtb25seV9faW5wdXQ6Y2hlY2tlZCcpO1xyXG5cclxuXHRcdEFycmF5LmZyb20oaW5wdXQsIGVsID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IHByaWNlID0gcGFyc2VJbnQoZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXByaWNlJykpLFxyXG5cdFx0XHRcdCAgcHJpY2VPbGQgPSBwYXJzZUludChlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2Utb2xkJykgfHwgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXByaWNlJykpO1xyXG5cclxuXHRcdFx0X3N1bSArPSBwcmljZU9sZDtcclxuXHRcdFx0X3N1bVNldCArPSBwcmljZTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRBcnJheS5mcm9tKHJlc3VsdCwgZWwgPT4ge1xyXG5cclxuXHRcdFx0ZWwucXVlcnlTZWxlY3RvcignLnByb2NlZHVyZS1mb3JtX19jb3VudGVyJykudGV4dENvbnRlbnQgPSBpbnB1dC5sZW5ndGg7XHJcblx0XHRcdGVsLnF1ZXJ5U2VsZWN0b3IoJy5wcm9jZWR1cmUtZm9ybV9fc3VtLXNldCcpLnRleHRDb250ZW50ID0gX3N1bVNldDtcclxuXHRcdFx0ZWwucXVlcnlTZWxlY3RvcignLnByb2NlZHVyZS1mb3JtX19zdW0nKS50ZXh0Q29udGVudCA9IF9zdW07XHJcblx0XHRcdGVsLnF1ZXJ5U2VsZWN0b3IoJy5wcm9jZWR1cmUtZm9ybV9fZGlmZicpLnRleHRDb250ZW50ID0gX3N1bSAtIF9zdW1TZXQ7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0c2V0TGFzdCgpO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9jZWR1cmUtZm9ybScpKTtcclxuXHJcbi8vINGH0LXQuiDQsiDQv9GA0L7QtNGD0LrRgtC1XHJcbiggaXRlbXMgPT4ge1xyXG5cclxuXHRcInVzZSBzdHJpY3RcIjtcclxuXHJcblx0QXJyYXkuZnJvbShpdGVtcywgcHJvZHVjdCA9PiB7XHJcblxyXG5cdFx0Y29uc3QgY2hlY2tib3ggPSBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2JveC1vbmx5X19pbnB1dCcpO1xyXG5cclxuXHRcdGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IGZvcm1JdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2NlZHVyZS1mb3JtX19pdGVtLS0nICsgY2hlY2tib3gudmFsdWUpLFxyXG5cdFx0XHRcdCAgaW5wdXQgPSBmb3JtSXRlbS5xdWVyeVNlbGVjdG9yKCcuY2hlY2tib3gtb25seV9faW5wdXQnKTtcclxuXHJcblx0XHRcdGlucHV0LmNoZWNrZWQgPSBjaGVja2JveC5jaGVja2VkO1xyXG5cclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2NlZHVyZS1mb3JtJykuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikpO1xyXG5cclxuXHRcdFx0Ly8g0LHQu9C40LfQvdC10YbRgyDQv9C+0YHRgtCw0LLQuNC8INGH0LXQulxyXG5cclxuXHRcdFx0QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvY2VkdXJlLXByb2R1Y3QtLScgKyBjaGVja2JveC52YWx1ZSksIGVsID0+IHtcclxuXHJcblx0XHRcdFx0aWYoZWwgIT09IHByb2R1Y3QgKXtcclxuXHJcblx0XHRcdFx0XHRlbC5xdWVyeVNlbGVjdG9yKCcuY2hlY2tib3gtb25seV9faW5wdXQnKS5jaGVja2VkID0gY2hlY2tib3guY2hlY2tlZDtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2NlZHVyZS1wcm9kdWN0JykpO1xyXG5cclxuLy8gYXJ0aWNsZSDQsiDQv9GA0L7QtNGD0LrRgtC1XHJcbiggaXRlbXMgPT4ge1xyXG5cclxuXHRcInVzZSBzdHJpY3RcIjtcclxuXHJcblx0QXJyYXkuZnJvbShpdGVtcywgZm9ybSA9PiB7XHJcblxyXG5cdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCBpbnB1dCA9IGV2ZW50LnRhcmdldCxcclxuXHRcdFx0XHQgIGlkID0gaW5wdXQudmFsdWUsXHJcblx0XHRcdFx0ICBwYXJlbnRJRCA9IGlucHV0LmdldEF0dHJpYnV0ZSgnZGF0YS1wYXJlbnQtaWQnKSxcclxuXHRcdFx0XHQgIHZvbHVtZSA9IGlucHV0LmdldEF0dHJpYnV0ZSgnZGF0YS12b2x1bWUnKSxcclxuXHRcdFx0XHQgIHByaWNlID0gaW5wdXQuZ2V0QXR0cmlidXRlKCdkYXRhLXByaWNlJyksXHJcblx0XHRcdFx0ICBvbGRQcmljZSA9IGlucHV0LmdldEF0dHJpYnV0ZSgnZGF0YS1vbGQtcHJpY2UnKSxcclxuXHRcdFx0XHQgIHNhbGUgPSBpbnB1dC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2FsZScpLFxyXG5cdFx0XHRcdCAgc3RvcmVpZCA9IGlucHV0LmdldEF0dHJpYnV0ZSgnZGF0YS1zdG9yZWlkJyk7XHJcblxyXG5cdFx0Ly8g0LjQt9C80LXQvdC40LvQuCDQv9GA0L7QtNGD0LrRgiDQuCDQtdCz0L4g0LHQu9C40LfQvdC10YbQsFxyXG5cclxuXHRcdFx0QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvY2VkdXJlLXByb2R1Y3QtLScgKyBwYXJlbnRJRCksIHByb2R1Y3QgPT4ge1xyXG5cclxuXHRcdFx0XHRwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2JveC1vbmx5X19pbnB1dCcpLnNldEF0dHJpYnV0ZSgnZGF0YS1hcnRpY2xlaWQnLCBpZCk7XHJcblx0XHRcdFx0cHJvZHVjdC5xdWVyeVNlbGVjdG9yKCcuY2hlY2tib3gtb25seV9faW5wdXQnKS5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3RvcmVpZCcsIHN0b3JlaWQpO1xyXG5cclxuXHRcdFx0XHRwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9jZWR1cmUtcHJvZHVjdF9fcHJpY2UtdmFsdWUnKS50ZXh0Q29udGVudCA9IHByaWNlO1xyXG5cclxuXHRcdFx0XHRpZihwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9jZWR1cmUtcHJvZHVjdF9fcHJpY2Utb2xkLXZhbHVlJykpIHtcclxuXHJcblx0XHRcdFx0XHRwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9jZWR1cmUtcHJvZHVjdF9fcHJpY2Utb2xkLXZhbHVlJykucGFyZW50Tm9kZS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJywgIW9sZFByaWNlKTtcclxuXHJcblx0XHRcdFx0XHRwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9jZWR1cmUtcHJvZHVjdF9fcHJpY2Utb2xkLXZhbHVlJykudGV4dENvbnRlbnQgPSBvbGRQcmljZTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZihwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9jZWR1cmUtcHJvZHVjdF9fc2FsZScpKSB7XHJcblxyXG5cdFx0XHRcdFx0cHJvZHVjdC5xdWVyeVNlbGVjdG9yKCcucHJvY2VkdXJlLXByb2R1Y3RfX3NhbGUnKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJywgIXNhbGUpO1xyXG5cclxuXHRcdFx0XHRcdHByb2R1Y3QucXVlcnlTZWxlY3RvcignLnByb2NlZHVyZS1wcm9kdWN0X19zYWxlJykudGV4dENvbnRlbnQgPSBzYWxlO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmKHByb2R1Y3QucXVlcnlTZWxlY3RvcignLnByb2NlZHVyZS1wcm9kdWN0X192b2x1bWUnKSkge1xyXG5cclxuXHRcdFx0XHRcdHByb2R1Y3QucXVlcnlTZWxlY3RvcignLnByb2NlZHVyZS1wcm9kdWN0X192b2x1bWUnKS50ZXh0Q29udGVudCA9IHZvbHVtZTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRBcnJheS5mcm9tKHByb2R1Y3QucXVlcnlTZWxlY3RvckFsbCgnW25hbWU9XCJhcnRpY2xlaWRcIl0nKSwgZWwgPT4ge1xyXG5cclxuXHRcdFx0XHRcdGlmKGVsLmNoZWNrZWQgPT09IGZhbHNlICYmIGVsLnZhbHVlID09PSBpZCkge1xyXG5cclxuXHRcdFx0XHRcdFx0ZWwuY2hlY2tlZCA9IHRydWU7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdC8vINC40YnQtdC8INC/0YDQvtC00YPQutGCINCyIGZvcm1cclxuXHJcblx0XHRcdGNvbnN0IGZvcm1JdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2NlZHVyZS1mb3JtX19pdGVtLS0nICsgcGFyZW50SUQpO1xyXG5cclxuXHRcdFx0Zm9ybUl0ZW0ucXVlcnlTZWxlY3RvcignLnByb2NlZHVyZS1mb3JtX19pdGVtLWFydGljbGVpZCcpLnZhbHVlID0gaWQ7XHJcblx0XHRcdGZvcm1JdGVtLnF1ZXJ5U2VsZWN0b3IoJy5wcm9jZWR1cmUtZm9ybV9faXRlbS1zdG9yZWlkJykudmFsdWUgPSBzdG9yZWlkO1xyXG5cclxuXHRcdFx0Zm9ybUl0ZW0ucXVlcnlTZWxlY3RvcignLnByb2NlZHVyZS1mb3JtX19pdGVtLXByaWNlLXZhbHVlJykudGV4dENvbnRlbnQgPSBwcmljZTtcclxuXHJcblx0XHRcdGZvcm1JdGVtLnF1ZXJ5U2VsZWN0b3IoJy5wcm9jZWR1cmUtZm9ybV9faXRlbS1wcmljZS1vbGQtdmFsdWUnKS5wYXJlbnROb2RlLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnLCAhb2xkUHJpY2UpO1xyXG5cclxuXHRcdFx0Zm9ybUl0ZW0ucXVlcnlTZWxlY3RvcignLnByb2NlZHVyZS1mb3JtX19pdGVtLXByaWNlLW9sZC12YWx1ZScpLnRleHRDb250ZW50ID0gb2xkUHJpY2U7XHJcblxyXG5cdFx0XHRmb3JtSXRlbS5xdWVyeVNlbGVjdG9yKCcucHJvY2VkdXJlLWZvcm1fX2l0ZW0tc2FsZScpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnLCAhc2FsZSk7XHJcblxyXG5cdFx0XHRmb3JtSXRlbS5xdWVyeVNlbGVjdG9yKCcucHJvY2VkdXJlLWZvcm1fX2l0ZW0tc2FsZScpLnRleHRDb250ZW50ID0gc2FsZSArICclJztcclxuXHJcblx0XHRcdGZvcm1JdGVtLnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2JveC1vbmx5X19pbnB1dCcpLnNldEF0dHJpYnV0ZSgnZGF0YS1wcmljZScsIHByaWNlKTtcclxuXHRcdFx0Zm9ybUl0ZW0ucXVlcnlTZWxlY3RvcignLmNoZWNrYm94LW9ubHlfX2lucHV0Jykuc2V0QXR0cmlidXRlKCdkYXRhLXByaWNlLW9sZCcsIG9sZFByaWNlKTtcclxuXHJcblx0XHQvLyDQt9Cw0L/Rg9GB0LrQsNC10Lwg0LjQt9C80LXQvdC10L3QuNC1INGE0L7RgNC80YtcclxuXHJcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9jZWR1cmUtZm9ybScpLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXJ0aWNsZWlkLWV2ZW50c19fZm9ybScpKTtcclxuXHJcbi8vIGRlc2MgcmlnaHRcclxuKCBkZXNjID0+IHtcclxuXHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cdEFycmF5LmZyb20oZGVzYywgZWwgPT4ge1xyXG5cclxuXHRcdGNvbnN0IGJ0biA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5wcm9jZWR1cmUtZGVzY19fYnRuJyksXHJcblx0XHRcdCAgaW5uZXIgPSBlbC5xdWVyeVNlbGVjdG9yKCcucHJvY2VkdXJlLWRlc2NfX2lubmVyJyk7XHJcblxyXG5cdFx0aWYoaW5uZXIuY2xpZW50SGVpZ2h0IDw9IGVsLmNsaWVudEhlaWdodCkge1xyXG5cclxuXHRcdFx0ZWwuY2xhc3NMaXN0LmFkZCgnaXMtc2hvdycpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBlbC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1vcGVuJykpO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9jZWR1cmUtZGVzYycpKTtcclxuXHJcbi8vIHJlc3VsdCBpbiB0YWJsZVxyXG4oIGJ0biA9PiB7XHJcblxyXG5cdFwidXNlIHN0cmljdFwiO1xyXG5cclxuXHRidG4gJiYgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9jZWR1cmUtZm9ybScpLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwic3VibWl0XCIpKSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvY2VkdXJlLWZvcm1fX3Jlc3VsdC1zdWJtaXQnKSk7IiwiXHJcbiggZm9ybSA9PiB7XHJcblxyXG5cdFwidXNlIHN0cmljdFwiO1xyXG5cclxuXHRpZighZm9ybSkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y2Vycy1saXN0JyksXHJcblx0XHQgIGxldHRlckJsb2NrcyA9IGxpc3QucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y2Vycy1saXN0X19sZXR0ZXInKSxcclxuXHRcdCAgaXRlbXMgPSBsaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWNlcnMtbGlzdF9faXRlbScpO1xyXG5cclxuXHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuXHJcblx0XHRjb25zdCBsZXR0ZXIgPSBmb3JtLmVsZW1lbnRzLmxldHRlci52YWx1ZSxcclxuXHRcdFx0ICBjb3VudHJ5ID0gZm9ybS5lbGVtZW50cy5jb3VudHJ5LnZhbHVlLFxyXG5cdFx0XHQgIGNhdGVnb3J5ID0gZm9ybS5lbGVtZW50cy5jYXRlZ29yeS52YWx1ZTtcclxuXHJcblx0XHQvLyDRgdC60YDRi9Cy0LDQtdC8IC8g0L/QvtC60LDQt9GL0LLQsNC10Lwg0LHQu9C+0LrQuCDQsiDQt9Cw0LLQuNGH0LjQvNC+0YHRgtC4INC+0YIg0JHRg9C60LLRi1xyXG5cdFx0aWYobGV0dGVyICE9PSAnYWxsJykge1xyXG5cclxuXHRcdFx0QXJyYXkuZnJvbShsZXR0ZXJCbG9ja3MsIGVsID0+XHJcblx0XHRcdFx0ZWwuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScsIGxldHRlciAhPT0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWxldHRlcicpKSk7XHJcblxyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblxyXG5cdFx0XHRBcnJheS5mcm9tKGxldHRlckJsb2NrcywgZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8g0L/QvtC60LDQt9GL0LLQsNC10Lwg0LLRgdC1INGN0LvQtdC80LXQvdGC0YtcclxuXHRcdEFycmF5LmZyb20oaXRlbXMsIGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XHJcblxyXG5cdFx0Ly8g0YHQutGA0YvQstCw0LXQvCDQv9C+INCh0YLRgNCw0L3QtVxyXG5cdFx0aWYoY291bnRyeSAhPT0gJ2FsbCcpIHtcclxuXHJcblx0XHRcdEFycmF5LmZyb20oaXRlbXMsIGVsID0+IHtcclxuXHJcblx0XHRcdFx0aWYoY291bnRyeSAhPT0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWNvdW50cnknKSl7XHJcblxyXG5cdFx0XHRcdFx0ZWwuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8g0YHQutGA0YvQstCw0LXQvCDQv9C+INCa0LDRgtC10LPQvtGA0LjQuFxyXG5cdFx0aWYoY2F0ZWdvcnkgIT09ICdhbGwnKSB7XHJcblxyXG5cdFx0XHRBcnJheS5mcm9tKGl0ZW1zLCBlbCA9PiB7XHJcblxyXG5cdFx0XHRcdGlmKGNhdGVnb3J5ICE9PSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2F0ZWdvcnknKSl7XHJcblxyXG5cdFx0XHRcdFx0ZWwuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8g0YHQutGA0YvQstCw0LXQvCDQsdC70L7QuiDQtdGB0LvQuCDQsiDQvdC10Lwg0L3QtdGCINCy0LjQtNC40LzRi9GFINGN0LvQtdC80LXQvdGC0L7QslxyXG5cdFx0QXJyYXkuZnJvbShsZXR0ZXJCbG9ja3MsIGVsID0+IHtcclxuXHJcblx0XHRcdGlmKGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWNlcnMtbGlzdF9faXRlbScpLmxlbmd0aCA9PT0gZWwucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y2Vycy1saXN0X19pdGVtLmhpZGUnKS5sZW5ndGgpIHtcclxuXHJcblx0XHRcdFx0ZWwuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vINC10YHQu9C4INC90LjRh9C10LPQviDQvdC10YJcclxuXHJcblx0XHRsaXN0LmNsYXNzTGlzdC50b2dnbGUoJ2lzLWVtcHR5JywgbGV0dGVyQmxvY2tzLmxlbmd0aCA9PT0gbGlzdC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjZXJzLWxpc3RfX2xldHRlci5oaWRlJykubGVuZ3RoKTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjZXJzLWZpbHRlcicpKTsiLCJcclxuLy8g0L/QtdGA0LXQutC70Y7Rh9C10L3QuNC1INGE0L7RgtC+XHJcbiggcHJldmlldyAgPT4ge1xyXG5cclxuXHRpZighcHJldmlldy5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Y29uc3Qgc3dpcGVyUHJvZHVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2lwZXItY29udGFpbmVyLS1wcm9kdWN0Jyk7XHJcblxyXG5cdEFycmF5LmZyb20ocHJldmlldywgKGVsLCBpbmRleCkgPT4ge1xyXG5cclxuXHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0QXJyYXkuZnJvbShwcmV2aWV3LCBlbGVtID0+IHtcclxuXHJcblx0XHRcdFx0ZWxlbS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnLCBlbCA9PT0gZWxlbSk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGlmKHN3aXBlclByb2R1Y3Quc3dpcGVyKSB7XHJcblxyXG5cdFx0XHRcdHN3aXBlclByb2R1Y3Quc3dpcGVyLnNsaWRlVG8oaW5kZXgpO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHJcblx0XHRcdFx0c3dpcGVyUHJvZHVjdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5pdGlhbFNsaWRlJywgaW5kZXgpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWN0LWltZ19fcHJldmlldy1pdGVtJykpO1xyXG5cclxuLy8g0KfQsNGB0YLQviDQv9C+0LrRg9C/0LDRjtGCINCy0LzQtdGB0YLQtVxyXG5cclxuKCBzZXQgPT4ge1xyXG5cclxuXHRcInVzZSBzdHJpY3RcIjtcclxuXHJcblx0aWYoIXNldC5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0QXJyYXkuZnJvbShzZXQsIGZvcm0gPT4ge1xyXG5cclxuXHRcdGNvbnN0IGlucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdC1zZXRfX2lucHV0JyksXHJcblx0XHRcdCAgdG90YWwgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LXNldF9fdG90YWwtdmFsdWUnKSxcclxuXHRcdFx0ICB0b3RhbE5vdFNhbGUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LXNldF9fdG90YWwtdmFsdWUtbm90LXNhbGUnKSxcclxuXHRcdFx0ICBzYWxlID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1zZXRfX3RvdGFsLXZhbHVlLXNhbGUnKTtcclxuXHJcblx0XHQvLyDQutC90L7Qv9C60LggY2hlY2tcclxuXHJcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuXHJcblx0XHRcdGxldCBfdG90YWwgPSAwLFxyXG5cdFx0XHRcdF9zYWxlICA9IDA7XHJcblxyXG5cdFx0XHRBcnJheS5mcm9tKGlucHV0LCBlbCA9PiB7XHJcblxyXG5cdFx0XHRcdGVsLmNsb3Nlc3QoJy5wcm9kdWN0LXNldF9faXRlbScpLmNsYXNzTGlzdC50b2dnbGUoJ2lzLW9mZicsICFlbC5jaGVja2VkKTtcclxuXHJcblx0XHRcdFx0aWYoZWwuY2hlY2tlZCkge1xyXG5cclxuXHRcdFx0XHRcdF9zYWxlICs9IHBhcnNlRmxvYXQoZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXNhbGUnKSk7XHJcblx0XHRcdFx0XHRfdG90YWwgKz0gcGFyc2VGbG9hdChlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2UnKSk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0c2FsZS50ZXh0Q29udGVudCA9IF9zYWxlO1xyXG5cdFx0XHR0b3RhbC50ZXh0Q29udGVudCA9IF90b3RhbDtcclxuXHRcdFx0dG90YWxOb3RTYWxlLnRleHRDb250ZW50ID0gX3RvdGFsICsgX3NhbGU7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3Qtc2V0JykpOyIsIlxyXG4oKHF1YW50aXR5KSA9PiB7XHJcblxyXG5cdFwidXNlIHN0cmljdFwiO1xyXG5cclxuXHRpZighcXVhbnRpdHkubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdEFycmF5LmZyb20ocXVhbnRpdHksIGVsID0+IHtcclxuXHJcblx0XHRjb25zdCB1cCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5xdWFudGl0eV9fYnRuLS11cCcpLFxyXG5cdFx0XHQgIGRvd24gPSBlbC5xdWVyeVNlbGVjdG9yKCcucXVhbnRpdHlfX2J0bi0tZG93bicpLFxyXG5cdFx0XHQgIGNvdW50ID0gZWwucXVlcnlTZWxlY3RvcignLnF1YW50aXR5X19jb3VudCcpO1xyXG5cclxuXHRcdGxldCB2YWx1ZSA9IG51bGw7XHJcblxyXG5cdFx0Y29uc3QgdGVzdElzTmFOID0gKCkgPT4ge1xyXG5cclxuXHRcdFx0aWYgKCBpc05hTihwYXJzZUludChjb3VudC52YWx1ZSkpICkge1xyXG5cclxuXHRcdFx0XHRjb3VudC52YWx1ZSA9IDE7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fTtcclxuXHJcblx0XHR1cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcblx0XHRcdHZhbHVlID0gcGFyc2VJbnQoY291bnQudmFsdWUpICsgMTtcclxuXHJcblx0XHRcdGNvdW50LnZhbHVlID0gdmFsdWU7XHJcblxyXG5cdFx0XHR0ZXN0SXNOYU4oKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRkb3duLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0dmFsdWUgPSBwYXJzZUludChjb3VudC52YWx1ZSkgLSAxO1xyXG5cclxuXHRcdFx0aWYodmFsdWUgPCAxKSB7XHJcblxyXG5cdFx0XHRcdHZhbHVlID0gMTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNvdW50LnZhbHVlID0gdmFsdWU7XHJcblxyXG5cdFx0XHR0ZXN0SXNOYU4oKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRjb3VudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHNldFRpbWVvdXQoICgpID0+IGNvdW50LnNldFNlbGVjdGlvblJhbmdlKDAsOSksIDEwMCkpO1xyXG5cclxuXHRcdGNvdW50LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB0ZXN0SXNOYU4oKSk7XHJcblxyXG5cdFx0Y291bnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoKSA9PiBjb3VudC52YWx1ZSA9IGNvdW50LnZhbHVlLnJlcGxhY2UoL1tcXERdL2csICcnKSk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5xdWFudGl0eScpKTsiLCIvLyBhamF4IGFkZCBpdGVtXHJcblxyXG4oKGZvcm0pID0+IHtcclxuXHJcblx0aWYoIWZvcm0pIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Y29uc3QgYnRuID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuYnRuJyk7XHJcblxyXG5cdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0Y29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSksXHJcblx0XHRcdCAgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG5cdFx0eGhyLm9wZW4oXCJQT1NUXCIsIGZvcm0uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKSk7XHJcblx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIlgtUmVxdWVzdGVkLVdpdGhcIiwgXCJYTUxIdHRwUmVxdWVzdFwiKTtcclxuXHJcblx0XHRidG4uZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuXHRcdHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XHJcblxyXG5cdFx0XHRpZiAoeGhyLnJlYWR5U3RhdGUgIT0gNCl7XHJcblxyXG5cdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcclxuXHJcblx0XHRcdFx0YnRuLmRpc2FibGVkID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHhoci5yZXNwb25zZVRleHQpO1xyXG5cclxuXHRcdFx0XHRmb3JtLmVsZW1lbnRzLnBhZ2UudmFsdWUgPSBwYXJzZUludChmb3JtLmVsZW1lbnRzLnBhZ2UudmFsdWUgKyAxKTtcclxuXHJcblx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jldmlldy1zb3J0LXJlc3VsdCcpLmlubmVySFRNTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXZpZXctc29ydC1yZXN1bHQnKS5pbm5lckhUTUwgKyB4aHIucmVzcG9uc2VUZXh0O1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHR4aHIuc2VuZChmb3JtRGF0YSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJldmlld19fYWpheC1hZGQnKSk7XHJcblxyXG5cclxuLy8g0YHQvtGA0YLQuNGA0L7QstCw0LrQsFxyXG5cclxuKChzb3J0KSA9PiB7XHJcblxyXG5cdGlmKCFzb3J0Lmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRBcnJheS5mcm9tKHNvcnQsIGZvcm0gPT4ge1xyXG5cclxuXHRcdC8vINC+0YLQv9GA0LDQstC60LBcclxuXHJcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pLFxyXG5cdFx0XHRcdCAgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG5cdFx0XHR4aHIub3BlbihcIlBPU1RcIiwgZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpKTtcclxuXHRcdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJYLVJlcXVlc3RlZC1XaXRoXCIsIFwiWE1MSHR0cFJlcXVlc3RcIik7XHJcblxyXG5cdFx0XHR4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRpZiAoeGhyLnJlYWR5U3RhdGUgIT0gNCl7XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcclxuXHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyh4aHIucmVzcG9uc2VUZXh0KTtcclxuXHJcblx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmV2aWV3LXNvcnQtcmVzdWx0JykuaW5uZXJIVE1MID0geGhyLnJlc3BvbnNlVGV4dDtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0eGhyLnNlbmQoZm9ybURhdGEpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXZpZXctc29ydCcpKTtcclxuXHJcbi8vINC/0L7QutCw0LfQsNGC0Ywg0YTQvtGA0LzRg1xyXG4oKGZvcm0pID0+IHtcclxuXHJcblx0aWYoIWZvcm0pIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0aWYoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncmV2aWV3LWZvcm1fX3N1YmplY3QtaW5wdXQnKSl7XHJcblxyXG5cdFx0XHRpZihldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnKSA9PT0gJ3JldmlldycpIHtcclxuXHJcblx0XHRcdFx0QXJyYXkuZnJvbShmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXJldmlld10nKSwgZWwgPT5cclxuXHRcdFx0XHRcdGVsLnRleHRDb250ZW50ID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXJldmlldycpKTtcclxuXHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblxyXG5cdFx0XHRcdEFycmF5LmZyb20oZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1yZXF1ZXN0XScpLCBlbCA9PlxyXG5cdFx0XHRcdFx0ZWwudGV4dENvbnRlbnQgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcmVxdWVzdCcpKTtcclxuXHJcblx0XHRcdFx0Zm9ybS5xdWVyeVNlbGVjdG9yKCcucmV2aWV3LWZvcm1fX2hpZGRlbi1pbi1yZXF1ZXN0JykuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0QXJyYXkuZnJvbShmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXZpZXctZm9ybV9fZmllbGRzZXQnKSwgZWwgPT5cclxuXHRcdFx0XHRlbC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1oaWRlJykpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmV2aWV3LWZvcm0nKSk7XHJcblxyXG4vLyBsaWtlXHJcblxyXG4oKHJldmlldykgPT4ge1xyXG5cclxuXHRpZighcmV2aWV3KSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdHJldmlldy5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0aWYoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncmV2aWV3LWxpa2UnKSkge1xyXG5cclxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdGNvbnN0IGZvcm0gPSBldmVudC50YXJnZXQsXHJcblx0XHRcdFx0ICBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKSxcclxuXHRcdFx0XHQgIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuXHRcdFx0eGhyLm9wZW4oXCJQT1NUXCIsIGZvcm0uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKSk7XHJcblx0XHRcdHhoci5yZXNwb25zZVR5cGUgPSAnanNvbic7XHJcblx0XHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiWC1SZXF1ZXN0ZWQtV2l0aFwiLCBcIlhNTEh0dHBSZXF1ZXN0XCIpO1xyXG5cclxuXHRcdFx0eGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcclxuXHJcblx0XHRcdFx0aWYgKHhoci5yZWFkeVN0YXRlICE9IDQpe1xyXG5cclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3Qgb2JqID0geGhyLnJlc3BvbnNlO1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2cob2JqKTtcclxuXHJcblx0XHRcdFx0XHRpZihvYmoubW9kZSkge1xyXG5cclxuXHRcdFx0XHRcdFx0Zm9ybS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1saWtlJywgb2JqLm1vZGUgPT09IFwiYWRkXCIpO1xyXG5cdFx0XHRcdFx0XHRmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5yZXZpZXctbGlrZV9fY291bnQnKS50ZXh0Q29udGVudCA9IG9iai5jb3VudDtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHhoci5zZW5kKGZvcm1EYXRhKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jldmlldy1zb3J0LXJlc3VsdCcpKTtcclxuXHJcblxyXG5cclxuIiwiKChmb290ZXIpID0+IHtcclxuXHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cdGlmICgnSW50ZXJzZWN0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdykge1xyXG5cclxuXHRcdGNvbnN0IG9wdGlvbnMgPSB7XHJcblx0XHRcdHJvb3Q6IG51bGwsXHJcblx0XHRcdHJvb3RNYXJnaW46ICcwcHgnLFxyXG5cdFx0XHR0aHJlc2hvbGQ6IFsuMV1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhcicpO1xyXG5cclxuXHRcdGNvbnN0IGNhbGxiYWNrID0gKGVudHJpZXMsIG9ic2VydmVyKSA9PlxyXG5cclxuXHRcdFx0QXJyYXkuZnJvbShlbnRyaWVzLCBlbnRyeSA9PiB7XHJcblxyXG5cdFx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnYmctZm9vdGVyJywgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwLjEgJiYgd2luZG93LnBhZ2VZT2Zmc2V0ID4gMCk7XHJcblxyXG5cdFx0XHRcdGlmKGJhcikge1xyXG5cclxuXHRcdFx0XHRcdGJhci5jbGFzc0xpc3QudG9nZ2xlKCdpcy1oaWRkZW4nLCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDAuMSk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGNhbGxiYWNrLCBvcHRpb25zKTtcclxuXHJcblx0XHRvYnNlcnZlci5vYnNlcnZlKGZvb3Rlcik7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXInKSk7IiwiKChzZWFyY2gpPT57XHJcblxyXG5cdFwidXNlIHN0cmljdFwiO1xyXG5cclxuXHRpZighc2VhcmNoLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRBcnJheS5mcm9tKHNlYXJjaCwgZm9ybSA9PiB7XHJcblxyXG5cdFx0Y29uc3QgcmVzZXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfX3Jlc2V0JyksXHJcblx0XHRcdCAgaW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfX2lucHV0JyksXHJcblx0XHRcdCAgcmVzdWx0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX19yZXN1bHQnKTtcclxuXHJcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2V0JywgKCkgPT4ge1xyXG5cclxuXHRcdFx0cmVzZXQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cdFx0XHRyZXN1bHQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuXHRcdFx0c2V0VGltZW91dCggKCkgPT4gaW5wdXQuZm9jdXMoKSwgMTAwMCk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0aW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRyZXNldC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJywgIWlucHV0LnZhbHVlKTtcclxuXHRcdFx0cmVzdWx0LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnLCAhaW5wdXQudmFsdWUpO1xyXG5cclxuXHRcdFx0aWYoaW5wdXQudmFsdWUubGVuZ3RoID4gMyAmJiBldmVudC5rZXkgIT09ICdlbnRlcicpe1xyXG5cclxuXHRcdFx0XHRmb3JtLmNsYXNzTGlzdC5hZGQoJ2lzLWxvYWRpbmcnKTtcclxuXHJcblx0XHRcdFx0Y29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSksXHJcblx0XHRcdFx0XHQgIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuXHRcdFx0XHR4aHIub3BlbihcIlBPU1RcIiwgZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpKTtcclxuXHRcdFx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIlgtUmVxdWVzdGVkLVdpdGhcIiwgXCJYTUxIdHRwUmVxdWVzdFwiKTtcclxuXHJcblx0XHRcdFx0eGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRpZiAoeGhyLnJlYWR5U3RhdGUgIT09IDQpe1xyXG5cclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRyZXN1bHQuaW5uZXJIVE1MID0geGhyLnJlc3BvbnNlVGV4dDtcclxuXHRcdFx0XHRcdFx0Zm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1sb2FkaW5nJyk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHhoci5zZW5kKGZvcm1EYXRhKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VhcmNoJykpOyIsIigoaXRlbXMpPT57XHJcblxyXG5cdFwidXNlIHN0cmljdFwiO1xyXG5cclxuXHRpZighaXRlbXMubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdEFycmF5LmZyb20oaXRlbXMsIGVsID0+IHtcclxuXHJcblx0XHRjb25zdCBzZWxlY3QgPSBlbC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKTtcclxuXHJcblx0XHRzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0c2VsZWN0LmJsdXIoKTtcclxuXHRcdFx0ZWwuY2xhc3NMaXN0LnJlbW92ZSgnaXMtZGVmYXVsdCcpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3QnKSk7IiwiLy8g0LjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0YHQu9Cw0LnQtNC10YDQvtCyXHJcbiggcmFuZ2UgPT4ge1xyXG5cclxuXHRcInVzZSBzdHJpY3RcIjtcclxuXHJcblx0aWYoIXJhbmdlLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRBcnJheS5mcm9tKHJhbmdlLCBzbGlkZXIgPT4ge1xyXG5cclxuXHRcdGNvbnN0IG1pbiA9IHBhcnNlSW50KHNsaWRlci5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWluJyksIDEwKSxcclxuXHRcdFx0ICBtYXggPSBwYXJzZUludChzbGlkZXIuZ2V0QXR0cmlidXRlKCdkYXRhLW1heCcpLCAxMCksXHJcblx0XHRcdCAgaW5wdXQgPSBzbGlkZXIucXVlcnlTZWxlY3RvckFsbCgnLmlucHV0JyksXHJcblx0XHRcdCAgaW5wdXRNaW4gPSBzbGlkZXIucXVlcnlTZWxlY3RvcignLnNsaWRlci1yYW5nZV9faW5wdXQtbWluJyksXHJcblx0XHRcdCAgaW5wdXRNYXggPSBzbGlkZXIucXVlcnlTZWxlY3RvcignLnNsaWRlci1yYW5nZV9faW5wdXQtbWF4JyksXHJcblx0XHRcdCAgdHJhY2sgPSBzbGlkZXIucXVlcnlTZWxlY3RvcignLnNsaWRlci1yYW5nZV9fdHJhY2snKTtcclxuXHJcblx0XHRub1VpU2xpZGVyLmNyZWF0ZSh0cmFjaywge1xyXG5cdFx0XHRjb25uZWN0OiB0cnVlLFxyXG5cdFx0XHRzdGFydDogW21pbiwgbWF4XSxcclxuXHRcdFx0c3RlcDogMTAsXHJcblx0XHRcdHJhbmdlOiB7XHJcblx0XHRcdFx0J21pbic6IG1pbixcclxuXHRcdFx0XHQnbWF4JzogbWF4XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdHRyYWNrLm5vVWlTbGlkZXIub24oJ3NsaWRlJywgdmFsdWVzID0+IHtcclxuXHJcblx0XHRcdGlucHV0TWluLnZhbHVlID0gQ0cuc2VwTnVtYmVyKHBhcnNlSW50KHZhbHVlc1swXSwgMTApKTtcclxuXHRcdFx0aW5wdXRNYXgudmFsdWUgPSBDRy5zZXBOdW1iZXIocGFyc2VJbnQodmFsdWVzWzFdLCAxMCkpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdHRyYWNrLm5vVWlTbGlkZXIub24oJ2VuZCcsIHZhbHVlcyA9PiBpbnB1dE1heC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiLCB7J2J1YmJsZXMnIDogdHJ1ZX0pKSk7XHJcblxyXG5cdC8vINGB0L7QsdGL0YLQuNGPINCyINC40L3Qv9GD0YLQsNGFXHJcblxyXG5cdFx0QXJyYXkuZnJvbShpbnB1dCwgZWwgPT4ge1xyXG5cclxuXHRcdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRcdGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xyXG5cclxuXHRcdFx0XHRcdGVsLmJsdXIoKTtcclxuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRlbC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiLCB7J2J1YmJsZXMnIDogdHJ1ZX0pKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IGVsLnZhbHVlID0gQ0cuc2VwTnVtYmVyKGVsLnZhbHVlKSk7XHJcblxyXG5cdFx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHtcclxuXHJcblx0XHRcdFx0ZWwudmFsdWUgPSBDRy5zdHJUb051bWJlcihlbC52YWx1ZSk7XHJcblx0XHRcdFx0c2V0VGltZW91dCggKCkgPT4gZWwuc2V0U2VsZWN0aW9uUmFuZ2UoMCw5OSksIDEwMCk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRsZXQgX21pbiA9IHBhcnNlSW50KENHLnN0clRvTnVtYmVyKGlucHV0TWluLnZhbHVlKSwgMTApLFxyXG5cdFx0XHRcdFx0X21heCA9IHBhcnNlSW50KENHLnN0clRvTnVtYmVyKGlucHV0TWF4LnZhbHVlKSwgMTApO1xyXG5cclxuXHRcdFx0XHRpZiAoX21pbiA8IG1pbikge1xyXG5cclxuXHRcdFx0XHRcdF9taW4gPSBtaW47XHJcblx0XHRcdFx0XHR0aGlzLnZhbHVlID0gbWluO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChfbWF4ID4gbWF4KSB7XHJcblxyXG5cdFx0XHRcdFx0X21heCA9IG1heDtcclxuXHRcdFx0XHRcdHRoaXMudmFsdWUgPSBtYXg7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYoX21pbiA8IF9tYXgpIHtcclxuXHJcblx0XHRcdFx0XHR0cmFjay5ub1VpU2xpZGVyLnNldChbX21pbiwgX21heF0pO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGVyLXJhbmdlJykpOyIsIigoZm9ybSkgPT4ge1xyXG5cclxuXHRpZighZm9ybSkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRsZXQgc2VjdW5kcyA9IDYwO1xyXG5cclxuXHRjb25zdCB0aW1lciA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmZvcm0tc21zX190aW1lcicpLFxyXG5cdFx0ICB0ZXh0RXJyb3IgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWxrX19hZnRlcicpLFxyXG5cdFx0ICBidG5SZXBlYXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWxrX19yZXBlYXQtc21zJyksXHJcblx0XHQgIGZvcm1Mb2dpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWxvZ2luJyk7XHJcblxyXG5cdGNvbnN0IHNldHVwVGltZXIgPSAoKSA9PiB7XHJcblxyXG5cdFx0dGltZXIudGV4dENvbnRlbnQgPSBzZWN1bmRzO1xyXG5cclxuXHRcdHNldFRpbWVvdXQoICgpID0+IHtcclxuXHJcblx0XHRcdHNlY3VuZHMtLTtcclxuXHJcblx0XHRcdGlmKHNlY3VuZHMgPiAwKSB7XHJcblxyXG5cdFx0XHRcdHNldHVwVGltZXIoKTtcclxuXHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblxyXG5cdFx0XHRcdGJ0blJlcGVhdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblx0XHRcdFx0dGltZXIucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSwgMTAwKTtcclxuXHJcblx0fVxyXG5cclxuXHQvLyDQv9C+0LLRgtC+0YDQvdGL0Lkg0LfQsNC/0YDQvtGBINGB0LzRgVxyXG5cclxuXHRidG5SZXBlYXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG5cdFx0YnRuUmVwZWF0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHRcdHRpbWVyLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuXHR9KTtcclxuXHJcblx0Ly8g0L7QsdGA0LDQsdC+0YLQutCwINC90LXQstC10YDQvdGL0YUg0YHQvNGBXHJcblxyXG5cdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0Y29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSksXHJcblx0XHRcdCAgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG5cdFx0eGhyLm9wZW4oXCJQT1NUXCIsIGZvcm0uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKSk7XHJcblx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIlgtUmVxdWVzdGVkLVdpdGhcIiwgXCJYTUxIdHRwUmVxdWVzdFwiKTtcclxuXHJcblx0XHR4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG5cclxuXHRcdFx0aWYgKHhoci5yZWFkeVN0YXRlICE9IDQpe1xyXG5cclxuXHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XHJcblxyXG5cdFx0XHRcdHRleHRFcnJvci5pbm5lckhUTUwgPSB4aHIucmVzcG9uc2VUZXh0O1xyXG5cdFx0XHRcdHRleHRFcnJvci5jbGFzc0xpc3QuYWRkKCdpcy1lcnJvcicpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHR4aHIuc2VuZChmb3JtRGF0YSk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHQvLyDQvtCx0YDQsNCx0L7RgtC60LAg0YTQvtGA0LzRiyDQu9C+0LPQuNC90LBcclxuXHJcblx0Zm9ybUxvZ2luLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm1Mb2dpbiksXHJcblx0XHRcdCAgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG5cdFx0eGhyLm9wZW4oXCJQT1NUXCIsIGZvcm1Mb2dpbi5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpKTtcclxuXHRcdHhoci5yZXNwb25zZVR5cGUgPSAnanNvbic7XHJcblx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIlgtUmVxdWVzdGVkLVdpdGhcIiwgXCJYTUxIdHRwUmVxdWVzdFwiKTtcclxuXHJcblx0XHR4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG5cclxuXHRcdFx0aWYgKHhoci5yZWFkeVN0YXRlICE9IDQpe1xyXG5cclxuXHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XHJcblxyXG5cdFx0XHRcdGNvbnN0IG9iaiA9IHhoci5yZXNwb25zZTtcclxuXHJcblx0XHRcdFx0Y29uc29sZS5sb2cob2JqKTtcclxuXHJcblx0XHRcdFx0aWYob2JqLm1vZGFsU2hvdyA9PT0gJ2luZm8nKSB7XHJcblxyXG5cdFx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWluZm9fX3RpdGxlJykuaW5uZXJIVE1MID0gb2JqLnRpdGxlID8gb2JqLnRpdGxlIDogJyc7XHJcblx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtaW5mb19fbWVzc2FnZScpLmlubmVySFRNTCA9IG9iai5tZXNzYWdlID8gb2JqLm1lc3NhZ2UgOiAnJztcclxuXHJcblx0XHRcdFx0XHRDRy5tb2RhbFNob3cob2JqLm1vZGFsU2hvdyk7XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmKG9iai5waG9uZSkge1xyXG5cclxuXHRcdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1zbXNfX3Bob25lJykuaW5uZXJIVE1MID0gb2JqLnBob25lO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmKG9iai5yZXBlYXQgPT09ICdkaXNhYmxlZCcpIHtcclxuXHJcblx0XHRcdFx0XHRmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWxrX19yZXBlYXQnKS5pbm5lckhUTUwgPSBvYmoudGV4dDtcclxuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdHNlY3VuZHMgPSBwYXJzZUludChvYmoucmVwZWF0KTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRDRy5tb2RhbFNob3coJ3NtcycpO1xyXG5cdFx0XHRcdHNldHVwVGltZXIoKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0eGhyLnNlbmQoZm9ybURhdGEpO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXNtcycpKTsiLCIiLCJDRy5zd2lwZXIgPSBzd2lwZSA9PiB7XHJcblxyXG5cdGxldCBteVN3aXBlID0gbnVsbCxcclxuXHRcdHRvZ2dsZVN3aXBlID0gbnVsbCxcclxuXHRcdHJlc2V0U3dpcGUgPSBudWxsLFxyXG5cdFx0dGltZXIgPSAxMDAwMDtcclxuXHJcblx0aWYoQ29va2llcy5nZXQoJ2FjaXR5JykgfHwgQ29va2llcy5nZXQoJ3VjaXR5JykpIHtcclxuXHJcblx0XHR0aW1lciA9IDA7XHJcblxyXG5cdH1cclxuXHJcblx0Y29uc3Qgc3dpcGVDb250cm9scyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG5cdFx0ICBzd2lwZU5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG5cdFx0ICBzd2lwZUJ0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuXHRcdCAgc3dpcGVOZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyksXHJcblx0XHQgIHN3aXBlUHJldiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpLFxyXG5cdFx0ICBpdGVtcyA9IHN3aXBlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zd2lwZXItc2xpZGUnKSxcclxuXHRcdCAgY291bnQgPSBpdGVtcy5sZW5ndGgsXHJcblx0XHQgIGF1dG9wbGF5ID0gc3dpcGUuZ2V0QXR0cmlidXRlKCdkYXRhLWF1dG9wbGF5JykgKiAxMDAwLFxyXG5cdFx0ICBpbml0aWFsU2xpZGUgPSBzd2lwZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5pdGlhbFNsaWRlJykgPyBwYXJzZUludChzd2lwZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5pdGlhbFNsaWRlJykpIDogMDtcclxuXHRcdCAgY2FyZExpc3QgPSBzd2lwZS5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXBlci1jb250YWluZXItLWNhcmQtbGlzdCcpLFxyXG5cdFx0ICBwcm9kdWN0ID0gc3dpcGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzd2lwZXItY29udGFpbmVyLS1wcm9kdWN0JyksXHJcblx0XHQgIGJpbGxib2FyZCA9IHN3aXBlLmNsYXNzTGlzdC5jb250YWlucygnc3dpcGVyLWNvbnRhaW5lci0tYmlsbGJvYXJkJyksXHJcblx0XHQgIGNvbXBhcmUgPSBzd2lwZS5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXBlci1jb250YWluZXItLWNvbXBhcmUnKSxcclxuXHRcdCAgY29tcGFyZVRhYmxlID0gc3dpcGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzd2lwZXItY29udGFpbmVyLS1jb21wYXJlLXRhYmxlJyksXHJcblx0XHQgIGdhbGxlcnkgPSBzd2lwZS5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXBlci1jb250YWluZXItLWdhbGxlcnknKTtcclxuXHJcblx0c3dpcGVOYXYuY2xhc3NOYW1lID0gJ3N3aXBlci1wYWdpbmF0aW9uJztcclxuXHRzd2lwZUNvbnRyb2xzLmNsYXNzTmFtZSA9ICdzd2lwZXItY29udHJvbHMnO1xyXG5cclxuXHRzd2lwZUJ0bnMuY2xhc3NOYW1lID0gJ3N3aXBlci1uYXZpZ2F0aW9uJztcclxuXHRzd2lwZVByZXYuY2xhc3NOYW1lID0gJ3N3aXBlci1idXR0b24tcHJldiBidXR0b24nO1xyXG5cdHN3aXBlTmV4dC5jbGFzc05hbWUgPSAnc3dpcGVyLWJ1dHRvbi1uZXh0IGJ1dHRvbic7XHJcblxyXG5cdHN3aXBlUHJldi5pbm5lckhUTUwgPSAnPHN2ZyB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMjlcIiB2aWV3Qm94PVwiMCAwIDE2IDI5XCI+PHBhdGggZD1cIk0wIDE0LjAzNGMwLS41MDMuMTkyLTEuMDA2LjU3NS0xLjM5TDEyLjY0NS41NzdhMS45NjYgMS45NjYgMCAxMTIuNzggMi43OEw0Ljc0NCAxNC4wMzRsMTAuNjggMTAuNjhhMS45NjYgMS45NjYgMCAwMS0yLjc4IDIuNzc5TC41NzQgMTUuNDIzQTEuOTYgMS45NiAwIDAxMCAxNC4wMzV6XCIvPjwvc3ZnPic7XHJcblx0c3dpcGVOZXh0LmlubmVySFRNTCA9ICc8c3ZnIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIyOVwiIHZpZXdCb3g9XCIwIDAgMTYgMjlcIj48cGF0aCBkPVwiTTE2IDE0LjAzNGExLjk2IDEuOTYgMCAwMS0uNTc1IDEuMzlMMy4zNTUgMjcuNDkzYTEuOTY1IDEuOTY1IDAgMTEtMi43OC0yLjc4bDEwLjY4LTEwLjY3OUwuNTc1IDMuMzU2YTEuOTY2IDEuOTY2IDAgMDEyLjc4LTIuNzhsMTIuMDcgMTIuMDY5Yy4zODMuMzg0LjU3NS44ODcuNTc1IDEuMzl6XCIvPjwvc3ZnPic7XHJcblxyXG5cdHN3aXBlQnRucy5hcHBlbmRDaGlsZChzd2lwZVByZXYpO1xyXG5cdHN3aXBlQnRucy5hcHBlbmRDaGlsZChzd2lwZU5leHQpO1xyXG5cdHN3aXBlQ29udHJvbHMuYXBwZW5kQ2hpbGQoc3dpcGVCdG5zKTtcclxuXHRzd2lwZUNvbnRyb2xzLmFwcGVuZENoaWxkKHN3aXBlTmF2KTtcclxuXHRzd2lwZS5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHN3aXBlQ29udHJvbHMpO1xyXG5cclxuXHQvLyBlYWdlclxyXG5cdGlmKHN3aXBlLmNsYXNzTGlzdC5jb250YWlucygnc3dpcGVyLWNvbnRhaW5lci0tbG9hZGluZy1lYWdlcicpKSB7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShzd2lwZS5xdWVyeVNlbGVjdG9yQWxsKCdbbG9hZGluZz1cImxhenlcIl0nKSwgaW1nID0+IGltZy5zZXRBdHRyaWJ1dGUoJ2xvYWRpbmcnLCdlYWdlcicpKTtcclxuXHJcblx0fVxyXG5cclxuXHQvLyBoaWRlXHJcblx0QXJyYXkuZnJvbShpdGVtcywgZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcclxuXHJcblx0cmVzZXRTd2lwZSA9ICgpID0+IHtcclxuXHJcblx0XHRpZihteVN3aXBlKSB7XHJcblxyXG5cdFx0XHRteVN3aXBlLmRlc3Ryb3koZmFsc2UsdHJ1ZSk7XHJcblx0XHRcdG15U3dpcGUgPSB1bmRlZmluZWQ7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHN3aXBlTmF2LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHRcdHN3aXBlQnRucy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblx0XHRzd2lwZUNvbnRyb2xzLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcblx0fVxyXG5cclxuXHRyZXNldFN3aXBlKCk7XHJcblxyXG5cdGlmIChnYWxsZXJ5KSB7XHJcblxyXG5cdFx0dG9nZ2xlU3dpcGUgPSAoKSA9PiB7XHJcblxyXG5cdFx0XHR0b2dnbGVTd2lwZSA9IGZhbHNlO1xyXG5cclxuXHRcdFx0Y29uc3QgY291bnRDdXJyZW50ID0gc3dpcGUucXVlcnlTZWxlY3RvcignLnN3aXBlci1jb3VudCcpO1xyXG5cclxuXHRcdFx0Y291bnRDdXJyZW50LnRleHRDb250ZW50ID0gJyc7XHJcblxyXG5cdFx0XHRpZihjb3VudCA+IDEpIHtcclxuXHJcblx0XHRcdFx0c3dpcGVCdG5zLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHRcdFx0XHRzd2lwZUNvbnRyb2xzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHRcdFx0XHRjb3VudEN1cnJlbnQudGV4dENvbnRlbnQgPSAoaW5pdGlhbFNsaWRlICsgMSkgKyAnLycgKyBjb3VudDtcclxuXHJcblx0XHRcdFx0bmV3IFN3aXBlcihzd2lwZSwge1xyXG5cdFx0XHRcdFx0bG9vcDogdHJ1ZSxcclxuXHRcdFx0XHRcdGluaXRpYWxTbGlkZTogaW5pdGlhbFNsaWRlLFxyXG5cdFx0XHRcdFx0bmF2aWdhdGlvbjoge1xyXG5cdFx0XHRcdFx0XHRuZXh0RWw6IHN3aXBlTmV4dCxcclxuXHRcdFx0XHRcdFx0cHJldkVsOiBzd2lwZVByZXZcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRvbjoge1xyXG5cclxuXHRcdFx0XHRcdFx0c2xpZGVDaGFuZ2VUcmFuc2l0aW9uRW5kOiAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmKHN3aXBlLnN3aXBlcil7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0Y291bnRDdXJyZW50LnRleHRDb250ZW50ID1cclxuXHRcdFx0XHRcdFx0XHRcdFx0c3dpcGUuc3dpcGVyLmFjdGl2ZUluZGV4ID09PSAwIHx8IHN3aXBlLnN3aXBlci5hY3RpdmVJbmRleCA9PT0gY291bnQgP1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvdW50IDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzd2lwZS5zd2lwZXIuYWN0aXZlSW5kZXggJSBjb3VudDtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRjb3VudEN1cnJlbnQudGV4dENvbnRlbnQgKz0gJy8nICsgY291bnQ7XHJcblxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHRpZiAoY2FyZExpc3QpIHtcclxuXHJcblx0XHRjb25zdCByb3cgPSBwYXJzZUludChzd2lwZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtY291bnQtcm93JykpO1xyXG5cclxuXHRcdHRvZ2dsZVN3aXBlID0gKCkgPT4ge1xyXG5cclxuXHRcdFx0cmVzZXRTd2lwZSgpO1xyXG5cclxuXHRcdFx0c3dpcGUucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdzd2lwZXItY29udGFpbmVyLXN0eWxlJyk7XHJcblxyXG5cdFx0XHRpZiAod2luZG93LmlubmVyV2lkdGggPj0gQ0cuYnJlYWtQb2ludHMpIHtcclxuXHJcblx0XHRcdFx0aWYgKGNvdW50ID4gcm93KSB7XHJcblxyXG5cdFx0XHRcdFx0c3dpcGUucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdzd2lwZXItY29udGFpbmVyLXN0eWxlJyk7XHJcblxyXG5cdFx0XHRcdFx0c3dpcGVCdG5zLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHRcdFx0XHRcdHN3aXBlQ29udHJvbHMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHRcdGlmKHN3aXBlLmdldEF0dHJpYnV0ZSgnZGF0YS1uYXYnKSkge1xyXG5cclxuXHRcdFx0XHRcdFx0c3dpcGVOYXYuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRteVN3aXBlID0gbmV3IFN3aXBlcihzd2lwZSwge1xyXG5cdFx0XHRcdFx0XHRsb29wOiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0c2xpZGVzUGVyVmlldzogcm93LFxyXG5cdFx0XHRcdFx0XHRzbGlkZXNQZXJHcm91cDogcm93LFxyXG5cdFx0XHRcdFx0XHRzcGFjZUJldHdlZW46IDMwLFxyXG5cdFx0XHRcdFx0XHRuYXZpZ2F0aW9uOiB7XHJcblx0XHRcdFx0XHRcdFx0bmV4dEVsOiBzd2lwZU5leHQsXHJcblx0XHRcdFx0XHRcdFx0cHJldkVsOiBzd2lwZVByZXZcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0cGFnaW5hdGlvbjoge1xyXG5cdFx0XHRcdFx0XHRcdGVsOiBzd2lwZU5hdixcclxuXHRcdFx0XHRcdFx0XHRjbGlja2FibGU6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0YnVsbGV0Q2xhc3M6ICdidXR0b24nLFxyXG5cdFx0XHRcdFx0XHRcdGJ1bGxldEFjdGl2ZUNsYXNzOiAnaXMtYWN0aXZlJ1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHRpZiAocHJvZHVjdCkge1xyXG5cclxuXHRcdHRvZ2dsZVN3aXBlID0gKCkgPT4ge1xyXG5cclxuXHRcdFx0dG9nZ2xlU3dpcGUgPSBmYWxzZTtcclxuXHJcblx0XHRcdHN3aXBlTmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHRcdFx0c3dpcGVDb250cm9scy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRuZXcgU3dpcGVyKHN3aXBlLCB7XHJcblx0XHRcdFx0bG9vcDogZmFsc2UsXHJcblx0XHRcdFx0aW5pdGlhbFNsaWRlOiBpbml0aWFsU2xpZGUsXHJcblx0XHRcdFx0cHJlbG9hZEltYWdlczogZmFsc2UsXHJcblx0XHRcdFx0cGFnaW5hdGlvbjoge1xyXG5cdFx0XHRcdFx0ZWw6IHN3aXBlTmF2LFxyXG5cdFx0XHRcdFx0Y2xpY2thYmxlOiB0cnVlLFxyXG5cdFx0XHRcdFx0YnVsbGV0Q2xhc3M6ICdidXR0b24nLFxyXG5cdFx0XHRcdFx0YnVsbGV0QWN0aXZlQ2xhc3M6ICdpcy1hY3RpdmUnXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0aWYgKGJpbGxib2FyZCkge1xyXG5cclxuXHRcdHRvZ2dsZVN3aXBlID0gKCkgPT4ge1xyXG5cclxuXHRcdFx0dG9nZ2xlU3dpcGUgPSBmYWxzZTtcclxuXHJcblx0XHRcdHN3aXBlTmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHRcdFx0c3dpcGVCdG5zLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHRcdFx0c3dpcGVDb250cm9scy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRuZXcgU3dpcGVyKHN3aXBlLCB7XHJcblx0XHRcdFx0bG9vcDogdHJ1ZSxcclxuXHRcdFx0XHRwcmVsb2FkSW1hZ2VzOiBmYWxzZSxcclxuXHRcdFx0XHRhdXRvcGxheToge1xyXG5cdFx0XHRcdFx0ZGVsYXk6IGF1dG9wbGF5XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRuYXZpZ2F0aW9uOiB7XHJcblx0XHRcdFx0XHRuZXh0RWw6IHN3aXBlTmV4dCxcclxuXHRcdFx0XHRcdHByZXZFbDogc3dpcGVQcmV2XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRwYWdpbmF0aW9uOiB7XHJcblx0XHRcdFx0XHRlbDogc3dpcGVOYXYsXHJcblx0XHRcdFx0XHRjbGlja2FibGU6IHRydWUsXHJcblx0XHRcdFx0XHRidWxsZXRDbGFzczogJ2J1dHRvbicsXHJcblx0XHRcdFx0XHRidWxsZXRBY3RpdmVDbGFzczogJ2lzLWFjdGl2ZSdcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHRpZiAoY29tcGFyZSkge1xyXG5cclxuXHRcdHRvZ2dsZVN3aXBlID0gKCkgPT4ge1xyXG5cclxuXHRcdFx0dG9nZ2xlU3dpcGUgPSBmYWxzZTtcclxuXHJcblx0XHRcdGNvbnN0IGJ0biA9IHN3aXBlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRhbG9nX19jb21wYXJlLW5hdiAuYnV0dG9uJyksXHJcblx0XHRcdFx0ICBteVN3aXBlQ29tcGFyZVRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXBlci1jb250YWluZXItLWNvbXBhcmUtdGFibGUnKTtcclxuXHJcblx0XHRcdG15U3dpcGUgPSBuZXcgU3dpcGVyKHN3aXBlLCB7XHJcblx0XHRcdFx0c2xpZGVzUGVyVmlldzogNCxcclxuXHRcdFx0XHRzaW11bGF0ZVRvdWNoOiBmYWxzZVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGJ0blswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcblx0XHRcdFx0bXlTd2lwZS5zbGlkZVByZXYoKTtcclxuXHRcdFx0XHRteVN3aXBlQ29tcGFyZVRhYmxlLnN3aXBlci5zbGlkZVByZXYoKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0YnRuWzFdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRteVN3aXBlLnNsaWRlTmV4dCgpO1xyXG5cdFx0XHRcdG15U3dpcGVDb21wYXJlVGFibGUuc3dpcGVyLnNsaWRlTmV4dCgpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRzd2lwZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdFx0aWYoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5idG4tLXJlbW92ZScpKXtcclxuXHJcblx0XHRcdFx0XHRjb25zdCBzbGlkZSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuc3dpcGVyLXNsaWRlJyk7XHJcblxyXG5cdFx0XHRcdFx0QXJyYXkuZnJvbShzd2lwZS5xdWVyeVNlbGVjdG9yQWxsKCcuc3dpcGVyLXNsaWRlJyksIChlbCxpbmRleCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdFx0aWYoZWwgPT09IHNsaWRlKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHN3aXBlLnN3aXBlci5yZW1vdmVTbGlkZShpbmRleCk7XHJcblx0XHRcdFx0XHRcdFx0bXlTd2lwZUNvbXBhcmVUYWJsZS5zd2lwZXIucmVtb3ZlU2xpZGUoaW5kZXgpO1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHRpZihzd2lwZS5xdWVyeVNlbGVjdG9yQWxsKCcuc3dpcGVyLXNsaWRlJykubGVuZ3RoIDw9IDQpIHtcclxuXHJcblx0XHRcdFx0XHRcdGJ0blswXS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRcdGJ0blsxXS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0aWYgKGNvbXBhcmVUYWJsZSkge1xyXG5cclxuXHRcdHRvZ2dsZVN3aXBlID0gKCkgPT4ge1xyXG5cclxuXHRcdFx0dG9nZ2xlU3dpcGUgPSBmYWxzZTtcclxuXHJcblx0XHRcdG15U3dpcGUgPSBuZXcgU3dpcGVyKHN3aXBlLCB7XHJcblx0XHRcdFx0c2xpZGVzUGVyVmlldzogNCxcclxuXHRcdFx0XHRzaW11bGF0ZVRvdWNoOiBmYWxzZVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0UHViU3ViLnN1YnNjcmliZSgnd2luZG93V2lkdGhSZXNpemUnLCAoKSA9PiB7XHJcblxyXG5cdFx0aWYgKHdpbmRvdy5Td2lwZXIgJiYgdG9nZ2xlU3dpcGUpIHtcclxuXHJcblx0XHRcdHRvZ2dsZVN3aXBlKCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcblx0aWYod2luZG93LlN3aXBlciAmJiB0b2dnbGVTd2lwZSkge1xyXG5cclxuXHRcdHRvZ2dsZVN3aXBlKCk7XHJcblxyXG5cdH1cclxuXHRlbHNlIHtcclxuXHJcblx0XHRQdWJTdWIuc3Vic2NyaWJlKCdzd2lwZXJKc0xvYWQnLCB0b2dnbGVTd2lwZSk7XHJcblxyXG5cdH1cclxuXHJcblx0aWYoIUNHLnN3aXBlckluaXQpIHtcclxuXHJcblx0XHRDRy5zd2lwZXJJbml0ID0gdHJ1ZTtcclxuXHJcblx0XHRjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuXHJcblx0XHRzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xyXG5cdFx0c2NyaXB0LmFzeW5jID0gdHJ1ZTtcclxuXHRcdHNjcmlwdC5zcmMgPSAnL2pzL3N3aXBlci5taW4uanMnO1xyXG5cclxuXHRcdHNjcmlwdC5vbmxvYWQgPSAoKSA9PiBQdWJTdWIucHVibGlzaCgnc3dpcGVySnNMb2FkJyk7XHJcblxyXG5cdFx0c2V0VGltZW91dCggKCkgPT4gZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpLCB0aW1lcik7XHJcblxyXG5cdH1cclxuXHJcblx0aWYoYXV0b3BsYXkpIHtcclxuXHJcblx0XHRQdWJTdWIuc3Vic2NyaWJlKCdTd2lwZXJBdXRvUGxheVN0b3AnLCAoKSA9PlxyXG5cdFx0XHRzd2lwZS5zd2lwZXIgJiYgc3dpcGUuc3dpcGVyLmF1dG9wbGF5LnN0b3AoKSk7XHJcblxyXG5cdFx0UHViU3ViLnN1YnNjcmliZSgnU3dpcGVyQXV0b1BsYXlTdGFydCcsICgpID0+XHJcblx0XHRcdHN3aXBlLnN3aXBlciAmJiBzd2lwZS5zd2lwZXIuYXV0b3BsYXkuc3RhcnQoKSk7XHJcblxyXG5cdH1cclxuXHJcbn07XHJcblxyXG4oKHN3aXBlckNvbnRhaW5lcik9PntcclxuXHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cdGlmKCFzd2lwZXJDb250YWluZXIubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdEFycmF5LmZyb20oc3dpcGVyQ29udGFpbmVyLCBzd2lwZSA9PiBDRy5zd2lwZXIoc3dpcGUpKTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zd2lwZXItY29udGFpbmVyJykpOyIsIi8qXHJcbi8vIHRhYi1zd2lwZXJcclxuXHJcbigodGFicyk9PntcclxuXHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cdGlmKCF0YWJzLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRBcnJheS5mcm9tKHRhYnMsIHRhYiA9PiB7XHJcblxyXG5cdFx0Y29uc3QgYnRucyA9IHRhYi5xdWVyeVNlbGVjdG9yQWxsKCcudGFiLXN3aXBlcl9fYnRuJyksXHJcblx0XHRcdCAgaXRlbXMgPSB0YWIucXVlcnlTZWxlY3RvckFsbCgnLnRhYi1zd2lwZXJfX2l0ZW0nKTtcclxuXHJcblx0XHRBcnJheS5mcm9tKGJ0bnMsIGJ0biA9PiB7XHJcblxyXG5cdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdEFycmF5LmZyb20oYnRucywgKF9idG4sIGluZGV4KSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0X2J0bi5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnLCBfYnRuID09PSBidG4pO1xyXG5cdFx0XHRcdFx0aXRlbXNbaW5kZXhdLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScsIF9idG4gPT09IGJ0bik7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYi1zd2lwZXInKSk7XHJcblxyXG5cclxuKi9cclxuLy8gdGFic1xyXG5cclxuKCh0YWJzKT0+e1xyXG5cclxuXHRBcnJheS5mcm9tKHRhYnMsIHRhYiA9PiB7XHJcblxyXG5cdFx0bGV0IGJ0biA9IHRhYi5xdWVyeVNlbGVjdG9yQWxsKCcudGFic19fYnRuJyksXHJcblx0XHRcdGl0ZW0gPSB0YWIucXVlcnlTZWxlY3RvckFsbCgnLnRhYnNfX2l0ZW0nKSxcclxuXHRcdFx0bmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShidG4sIChlbCxpbmRleCkgPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgX2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cclxuXHRcdFx0X2J0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcclxuXHJcblx0XHRcdF9idG4uY2xhc3NOYW1lID0gJ2J1dHRvbiB0YWJzX19uYXYtYnRuJztcclxuXHJcblx0XHRcdF9idG4udGV4dENvbnRlbnQgPSBlbC50ZXh0Q29udGVudDtcclxuXHJcblx0XHRcdG5hdi5hcHBlbmRDaGlsZChfYnRuKTtcclxuXHJcblx0XHRcdF9idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdEFycmF5LmZyb20oaXRlbSwgKGVsZW0saW54KSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0ZWxlbS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1zaG93JywgaW54ID09PSBpbmRleCk7XHJcblx0XHRcdFx0XHRidG5baW54XS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnLCBpbnggPT09IGluZGV4KTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGVsLnJlbW92ZSgpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdG5hdi5jbGFzc0xpc3QuYWRkKCd0YWJzX19uYXYnKTtcclxuXHJcblx0XHRidG4gPSBuYXYucXVlcnlTZWxlY3RvckFsbCgnLnRhYnNfX25hdi1idG4nKTtcclxuXHJcblx0XHRpdGVtWzBdLmNsYXNzTGlzdC5hZGQoJ2lzLXNob3cnKTtcclxuXHRcdGJ0blswXS5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcclxuXHJcblx0XHR0YWIuaW5zZXJ0QmVmb3JlKG5hdiwgaXRlbVswXSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYnMnKSk7XHJcbiIsIigoZWxlbSk9PntcclxuXHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cdGlmKGVsZW0pIHtcclxuXHJcblx0XHRkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0aWYoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy50ZXh0LXNob3J0X19idG4nKSl7XHJcblxyXG5cdFx0XHRcdGV2ZW50LnRhcmdldC5jbG9zZXN0KCcudGV4dC1zaG9ydCcpLmNsYXNzTGlzdC50b2dnbGUoJ2lzLW9wZW4nKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRleHQtc2hvcnQnKSk7IiwiXHJcbiggdG90YWwgPT4ge1xyXG5cclxuXHRjb25zdCB3aXNobGlzdENoZWNrZWRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLndpc2hsaXN0LWNoZWNrZWQtbGlzdCcpO1xyXG5cclxuXHRkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRpZihldmVudC50YXJnZXQuY2xvc2VzdCgnLndpc2hsaXN0LWNoZWNrYm94JykpIHtcclxuXHJcblx0XHRcdGxldCBsaXN0ID0gW107XHJcblxyXG5cdFx0XHRBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53aXNobGlzdC1jaGVja2JveCcpLCBlbCA9PiB7XHJcblxyXG5cdFx0XHRcdGNvbnN0IGlucHV0ID0gZWwucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcclxuXHJcblx0XHRcdFx0aWYoaW5wdXQuY2hlY2tlZCkge1xyXG5cclxuXHRcdFx0XHRcdGxpc3QucHVzaChpbnB1dC52YWx1ZSk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0dG90YWwudGV4dENvbnRlbnQgPSBsaXN0Lmxlbmd0aDtcclxuXHJcblx0XHRcdEFycmF5LmZyb20od2lzaGxpc3RDaGVja2VkTGlzdCwgaW5wdXQgPT4gaW5wdXQudmFsdWUgPSBsaXN0KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpc2hsaXN0LWNoZWNrZWQtdG90YWxfX3ZhbHVlJykpOyJdfQ==
