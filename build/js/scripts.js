!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e||self).autosize=t()}(this,function(){var e,t,n="function"==typeof Map?new Map:(e=[],t=[],{has:function(t){return e.indexOf(t)>-1},get:function(n){return t[e.indexOf(n)]},set:function(n,o){-1===e.indexOf(n)&&(e.push(n),t.push(o))},delete:function(n){var o=e.indexOf(n);o>-1&&(e.splice(o,1),t.splice(o,1))}}),o=function(e){return new Event(e,{bubbles:!0})};try{new Event("test")}catch(e){o=function(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!1),t}}function r(e){var t=n.get(e);t&&t.destroy()}function i(e){var t=n.get(e);t&&t.update()}var l=null;return"undefined"==typeof window||"function"!=typeof window.getComputedStyle?((l=function(e){return e}).destroy=function(e){return e},l.update=function(e){return e}):((l=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],function(e){return function(e){if(e&&e.nodeName&&"TEXTAREA"===e.nodeName&&!n.has(e)){var t,r=null,i=null,l=null,d=function(){e.clientWidth!==i&&c()},u=function(t){window.removeEventListener("resize",d,!1),e.removeEventListener("input",c,!1),e.removeEventListener("keyup",c,!1),e.removeEventListener("autosize:destroy",u,!1),e.removeEventListener("autosize:update",c,!1),Object.keys(t).forEach(function(n){e.style[n]=t[n]}),n.delete(e)}.bind(e,{height:e.style.height,resize:e.style.resize,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener("autosize:destroy",u,!1),"onpropertychange"in e&&"oninput"in e&&e.addEventListener("keyup",c,!1),window.addEventListener("resize",d,!1),e.addEventListener("input",c,!1),e.addEventListener("autosize:update",c,!1),e.style.overflowX="hidden",e.style.wordWrap="break-word",n.set(e,{destroy:u,update:c}),"vertical"===(t=window.getComputedStyle(e,null)).resize?e.style.resize="none":"both"===t.resize&&(e.style.resize="horizontal"),r="content-box"===t.boxSizing?-(parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)):parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),isNaN(r)&&(r=0),c()}function a(t){var n=e.style.width;e.style.width="0px",e.style.width=n,e.style.overflowY=t}function s(){if(0!==e.scrollHeight){var t=function(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push({node:e.parentNode,scrollTop:e.parentNode.scrollTop}),e=e.parentNode;return t}(e),n=document.documentElement&&document.documentElement.scrollTop;e.style.height="",e.style.height=e.scrollHeight+r+"px",i=e.clientWidth,t.forEach(function(e){e.node.scrollTop=e.scrollTop}),n&&(document.documentElement.scrollTop=n)}}function c(){s();var t=Math.round(parseFloat(e.style.height)),n=window.getComputedStyle(e,null),r="content-box"===n.boxSizing?Math.round(parseFloat(n.height)):e.offsetHeight;if(r<t?"hidden"===n.overflowY&&(a("scroll"),s(),r="content-box"===n.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight):"hidden"!==n.overflowY&&(a("hidden"),s(),r="content-box"===n.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight),l!==r){l=r;var i=o("autosize:resized");try{e.dispatchEvent(i)}catch(e){}}}}(e)}),e}).destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],r),e},l.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],i),e}),l});

/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ClipboardJS=e():t.ClipboardJS=e()}(this,function(){return n={686:function(t,e,n){"use strict";n.d(e,{default:function(){return b}});var e=n(279),i=n.n(e),e=n(370),u=n.n(e),e=n(817),r=n.n(e);function c(t){try{return document.execCommand(t)}catch(t){return}}var a=function(t){t=r()(t);return c("cut"),t};function o(t,e){var n,o,t=(n=t,o="rtl"===document.documentElement.getAttribute("dir"),(t=document.createElement("textarea")).style.fontSize="12pt",t.style.border="0",t.style.padding="0",t.style.margin="0",t.style.position="absolute",t.style[o?"right":"left"]="-9999px",o=window.pageYOffset||document.documentElement.scrollTop,t.style.top="".concat(o,"px"),t.setAttribute("readonly",""),t.value=n,t);return e.container.appendChild(t),e=r()(t),c("copy"),t.remove(),e}var f=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{container:document.body},n="";return"string"==typeof t?n=o(t,e):t instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(null==t?void 0:t.type)?n=o(t.value,e):(n=r()(t),c("copy")),n};function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var s=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=t.action,n=void 0===e?"copy":e,o=t.container,e=t.target,t=t.text;if("copy"!==n&&"cut"!==n)throw new Error('Invalid "action" value, use either "copy" or "cut"');if(void 0!==e){if(!e||"object"!==l(e)||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===n&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===n&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')}return t?f(t,{container:o}):e?"cut"===n?a(e):f(e,{container:o}):void 0};function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(n){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e=v(n);return t=o?(t=v(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments),e=this,!(t=t)||"object"!==p(t)&&"function"!=typeof t?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function m(t,e){t="data-clipboard-".concat(t);if(e.hasAttribute(t))return e.getAttribute(t)}var b=function(){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(r,i());var t,e,n,o=h(r);function r(t,e){var n;return function(t){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this),(n=o.call(this)).resolveOptions(e),n.listenClick(t),n}return t=r,n=[{key:"copy",value:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{container:document.body};return f(t,e)}},{key:"cut",value:function(t){return a(t)}},{key:"isSupported",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof t?[t]:t,e=!!document.queryCommandSupported;return t.forEach(function(t){e=e&&!!document.queryCommandSupported(t)}),e}}],(e=[{key:"resolveOptions",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===p(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=u()(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget,n=this.action(e)||"copy",t=s({action:n,container:this.container,target:this.target(e),text:this.text(e)});this.emit(t?"success":"error",{action:n,text:t,trigger:e,clearSelection:function(){e&&e.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(t){return m("action",t)}},{key:"defaultTarget",value:function(t){t=m("target",t);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(t){return m("text",t)}},{key:"destroy",value:function(){this.listener.destroy()}}])&&d(t.prototype,e),n&&d(t,n),r}()},828:function(t){var e;"undefined"==typeof Element||Element.prototype.matches||((e=Element.prototype).matches=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector),t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}},438:function(t,e,n){var u=n(828);function i(t,e,n,o,r){var i=function(e,n,t,o){return function(t){t.delegateTarget=u(t.target,n),t.delegateTarget&&o.call(e,t)}}.apply(this,arguments);return t.addEventListener(n,i,r),{destroy:function(){t.removeEventListener(n,i,r)}}}t.exports=function(t,e,n,o,r){return"function"==typeof t.addEventListener?i.apply(null,arguments):"function"==typeof n?i.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return i(t,e,n,o,r)}))}},879:function(t,n){n.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},n.nodeList=function(t){var e=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||n.node(t[0]))},n.string=function(t){return"string"==typeof t||t instanceof String},n.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},370:function(t,e,n){var f=n(879),l=n(438);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!f.string(e))throw new TypeError("Second argument must be a String");if(!f.fn(n))throw new TypeError("Third argument must be a Function");if(f.node(t))return c=e,a=n,(u=t).addEventListener(c,a),{destroy:function(){u.removeEventListener(c,a)}};if(f.nodeList(t))return o=t,r=e,i=n,Array.prototype.forEach.call(o,function(t){t.addEventListener(r,i)}),{destroy:function(){Array.prototype.forEach.call(o,function(t){t.removeEventListener(r,i)})}};if(f.string(t))return t=t,e=e,n=n,l(document.body,t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var o,r,i,u,c,a}},817:function(t){t.exports=function(t){var e,n="SELECT"===t.nodeName?(t.focus(),t.value):"INPUT"===t.nodeName||"TEXTAREA"===t.nodeName?((e=t.hasAttribute("readonly"))||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),e||t.removeAttribute("readonly"),t.value):(t.hasAttribute("contenteditable")&&t.focus(),n=window.getSelection(),(e=document.createRange()).selectNodeContents(t),n.removeAllRanges(),n.addRange(e),n.toString());return n}},279:function(t){function e(){}e.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var o=this;function r(){o.off(t,r),e.apply(n,arguments)}return r._=e,this.on(t,r,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,r=n.length;o<r;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],r=[];if(o&&e)for(var i=0,u=o.length;i<u;i++)o[i].fn!==e&&o[i].fn._!==e&&r.push(o[i]);return r.length?n[t]=r:delete n[t],this}},t.exports=e,t.exports.TinyEmitter=e}},r={},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,{a:e}),e},o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o(686).default;function o(t){if(r[t])return r[t].exports;var e=r[t]={exports:{}};return n[t](e,e.exports,o),e.exports}var n,r});
(function defineMustache(global,factory){if(typeof exports==="object"&&exports&&typeof exports.nodeName!=="string"){factory(exports)}else if(typeof define==="function"&&define.amd){define(["exports"],factory)}else{global.Mustache={};factory(global.Mustache)}})(this,function mustacheFactory(mustache){var objectToString=Object.prototype.toString;var isArray=Array.isArray||function isArrayPolyfill(object){return objectToString.call(object)==="[object Array]"};function isFunction(object){return typeof object==="function"}function typeStr(obj){return isArray(obj)?"array":typeof obj}function escapeRegExp(string){return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function hasProperty(obj,propName){return obj!=null&&typeof obj==="object"&&propName in obj}function primitiveHasOwnProperty(primitive,propName){return primitive!=null&&typeof primitive!=="object"&&primitive.hasOwnProperty&&primitive.hasOwnProperty(propName)}var regExpTest=RegExp.prototype.test;function testRegExp(re,string){return regExpTest.call(re,string)}var nonSpaceRe=/\S/;function isWhitespace(string){return!testRegExp(nonSpaceRe,string)}var entityMap={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function escapeHtml(string){return String(string).replace(/[&<>"'`=\/]/g,function fromEntityMap(s){return entityMap[s]})}var whiteRe=/\s*/;var spaceRe=/\s+/;var equalsRe=/\s*=/;var curlyRe=/\s*\}/;var tagRe=/#|\^|\/|>|\{|&|=|!/;function parseTemplate(template,tags){if(!template)return[];var lineHasNonSpace=false;var sections=[];var tokens=[];var spaces=[];var hasTag=false;var nonSpace=false;var indentation="";var tagIndex=0;function stripSpace(){if(hasTag&&!nonSpace){while(spaces.length)delete tokens[spaces.pop()]}else{spaces=[]}hasTag=false;nonSpace=false}var openingTagRe,closingTagRe,closingCurlyRe;function compileTags(tagsToCompile){if(typeof tagsToCompile==="string")tagsToCompile=tagsToCompile.split(spaceRe,2);if(!isArray(tagsToCompile)||tagsToCompile.length!==2)throw new Error("Invalid tags: "+tagsToCompile);openingTagRe=new RegExp(escapeRegExp(tagsToCompile[0])+"\\s*");closingTagRe=new RegExp("\\s*"+escapeRegExp(tagsToCompile[1]));closingCurlyRe=new RegExp("\\s*"+escapeRegExp("}"+tagsToCompile[1]))}compileTags(tags||mustache.tags);var scanner=new Scanner(template);var start,type,value,chr,token,openSection;while(!scanner.eos()){start=scanner.pos;value=scanner.scanUntil(openingTagRe);if(value){for(var i=0,valueLength=value.length;i<valueLength;++i){chr=value.charAt(i);if(isWhitespace(chr)){spaces.push(tokens.length);indentation+=chr}else{nonSpace=true;lineHasNonSpace=true;indentation+=" "}tokens.push(["text",chr,start,start+1]);start+=1;if(chr==="\n"){stripSpace();indentation="";tagIndex=0;lineHasNonSpace=false}}}if(!scanner.scan(openingTagRe))break;hasTag=true;type=scanner.scan(tagRe)||"name";scanner.scan(whiteRe);if(type==="="){value=scanner.scanUntil(equalsRe);scanner.scan(equalsRe);scanner.scanUntil(closingTagRe)}else if(type==="{"){value=scanner.scanUntil(closingCurlyRe);scanner.scan(curlyRe);scanner.scanUntil(closingTagRe);type="&"}else{value=scanner.scanUntil(closingTagRe)}if(!scanner.scan(closingTagRe))throw new Error("Unclosed tag at "+scanner.pos);if(type==">"){token=[type,value,start,scanner.pos,indentation,tagIndex,lineHasNonSpace]}else{token=[type,value,start,scanner.pos]}tagIndex++;tokens.push(token);if(type==="#"||type==="^"){sections.push(token)}else if(type==="/"){openSection=sections.pop();if(!openSection)throw new Error('Unopened section "'+value+'" at '+start);if(openSection[1]!==value)throw new Error('Unclosed section "'+openSection[1]+'" at '+start)}else if(type==="name"||type==="{"||type==="&"){nonSpace=true}else if(type==="="){compileTags(value)}}stripSpace();openSection=sections.pop();if(openSection)throw new Error('Unclosed section "'+openSection[1]+'" at '+scanner.pos);return nestTokens(squashTokens(tokens))}function squashTokens(tokens){var squashedTokens=[];var token,lastToken;for(var i=0,numTokens=tokens.length;i<numTokens;++i){token=tokens[i];if(token){if(token[0]==="text"&&lastToken&&lastToken[0]==="text"){lastToken[1]+=token[1];lastToken[3]=token[3]}else{squashedTokens.push(token);lastToken=token}}}return squashedTokens}function nestTokens(tokens){var nestedTokens=[];var collector=nestedTokens;var sections=[];var token,section;for(var i=0,numTokens=tokens.length;i<numTokens;++i){token=tokens[i];switch(token[0]){case"#":case"^":collector.push(token);sections.push(token);collector=token[4]=[];break;case"/":section=sections.pop();section[5]=token[2];collector=sections.length>0?sections[sections.length-1][4]:nestedTokens;break;default:collector.push(token)}}return nestedTokens}function Scanner(string){this.string=string;this.tail=string;this.pos=0}Scanner.prototype.eos=function eos(){return this.tail===""};Scanner.prototype.scan=function scan(re){var match=this.tail.match(re);if(!match||match.index!==0)return"";var string=match[0];this.tail=this.tail.substring(string.length);this.pos+=string.length;return string};Scanner.prototype.scanUntil=function scanUntil(re){var index=this.tail.search(re),match;switch(index){case-1:match=this.tail;this.tail="";break;case 0:match="";break;default:match=this.tail.substring(0,index);this.tail=this.tail.substring(index)}this.pos+=match.length;return match};function Context(view,parentContext){this.view=view;this.cache={".":this.view};this.parent=parentContext}Context.prototype.push=function push(view){return new Context(view,this)};Context.prototype.lookup=function lookup(name){var cache=this.cache;var value;if(cache.hasOwnProperty(name)){value=cache[name]}else{var context=this,intermediateValue,names,index,lookupHit=false;while(context){if(name.indexOf(".")>0){intermediateValue=context.view;names=name.split(".");index=0;while(intermediateValue!=null&&index<names.length){if(index===names.length-1)lookupHit=hasProperty(intermediateValue,names[index])||primitiveHasOwnProperty(intermediateValue,names[index]);intermediateValue=intermediateValue[names[index++]]}}else{intermediateValue=context.view[name];lookupHit=hasProperty(context.view,name)}if(lookupHit){value=intermediateValue;break}context=context.parent}cache[name]=value}if(isFunction(value))value=value.call(this.view);return value};function Writer(){this.cache={}}Writer.prototype.clearCache=function clearCache(){this.cache={}};Writer.prototype.parse=function parse(template,tags){var cache=this.cache;var cacheKey=template+":"+(tags||mustache.tags).join(":");var tokens=cache[cacheKey];if(tokens==null)tokens=cache[cacheKey]=parseTemplate(template,tags);return tokens};Writer.prototype.render=function render(template,view,partials,tags){var tokens=this.parse(template,tags);var context=view instanceof Context?view:new Context(view);return this.renderTokens(tokens,context,partials,template,tags)};Writer.prototype.renderTokens=function renderTokens(tokens,context,partials,originalTemplate,tags){var buffer="";var token,symbol,value;for(var i=0,numTokens=tokens.length;i<numTokens;++i){value=undefined;token=tokens[i];symbol=token[0];if(symbol==="#")value=this.renderSection(token,context,partials,originalTemplate);else if(symbol==="^")value=this.renderInverted(token,context,partials,originalTemplate);else if(symbol===">")value=this.renderPartial(token,context,partials,tags);else if(symbol==="&")value=this.unescapedValue(token,context);else if(symbol==="name")value=this.escapedValue(token,context);else if(symbol==="text")value=this.rawValue(token);if(value!==undefined)buffer+=value}return buffer};Writer.prototype.renderSection=function renderSection(token,context,partials,originalTemplate){var self=this;var buffer="";var value=context.lookup(token[1]);function subRender(template){return self.render(template,context,partials)}if(!value)return;if(isArray(value)){for(var j=0,valueLength=value.length;j<valueLength;++j){buffer+=this.renderTokens(token[4],context.push(value[j]),partials,originalTemplate)}}else if(typeof value==="object"||typeof value==="string"||typeof value==="number"){buffer+=this.renderTokens(token[4],context.push(value),partials,originalTemplate)}else if(isFunction(value)){if(typeof originalTemplate!=="string")throw new Error("Cannot use higher-order sections without the original template");value=value.call(context.view,originalTemplate.slice(token[3],token[5]),subRender);if(value!=null)buffer+=value}else{buffer+=this.renderTokens(token[4],context,partials,originalTemplate)}return buffer};Writer.prototype.renderInverted=function renderInverted(token,context,partials,originalTemplate){var value=context.lookup(token[1]);if(!value||isArray(value)&&value.length===0)return this.renderTokens(token[4],context,partials,originalTemplate)};Writer.prototype.indentPartial=function indentPartial(partial,indentation,lineHasNonSpace){var filteredIndentation=indentation.replace(/[^ \t]/g,"");var partialByNl=partial.split("\n");for(var i=0;i<partialByNl.length;i++){if(partialByNl[i].length&&(i>0||!lineHasNonSpace)){partialByNl[i]=filteredIndentation+partialByNl[i]}}return partialByNl.join("\n")};Writer.prototype.renderPartial=function renderPartial(token,context,partials,tags){if(!partials)return;var value=isFunction(partials)?partials(token[1]):partials[token[1]];if(value!=null){var lineHasNonSpace=token[6];var tagIndex=token[5];var indentation=token[4];var indentedValue=value;if(tagIndex==0&&indentation){indentedValue=this.indentPartial(value,indentation,lineHasNonSpace)}return this.renderTokens(this.parse(indentedValue,tags),context,partials,indentedValue)}};Writer.prototype.unescapedValue=function unescapedValue(token,context){var value=context.lookup(token[1]);if(value!=null)return value};Writer.prototype.escapedValue=function escapedValue(token,context){var value=context.lookup(token[1]);if(value!=null)return mustache.escape(value)};Writer.prototype.rawValue=function rawValue(token){return token[1]};mustache.name="mustache.js";mustache.version="3.1.0";mustache.tags=["{{","}}"];var defaultWriter=new Writer;mustache.clearCache=function clearCache(){return defaultWriter.clearCache()};mustache.parse=function parse(template,tags){return defaultWriter.parse(template,tags)};mustache.render=function render(template,view,partials,tags){if(typeof template!=="string"){throw new TypeError('Invalid template! Template should be a "string" '+'but "'+typeStr(template)+'" was given as the first '+"argument for mustache#render(template, view, partials)")}return defaultWriter.render(template,view,partials,tags)};mustache.to_html=function to_html(template,view,partials,send){var result=mustache.render(template,view,partials);if(isFunction(send)){send(result)}else{return result}};mustache.escape=escapeHtml;mustache.Scanner=Scanner;mustache.Context=Context;mustache.Writer=Writer;return mustache});
/*
 0BSD
*/
(function(F,y){"function"===typeof define&&define.amd?define(y):"object"===typeof exports?module.exports=y():F.pickmeup=y()})(this,function(){function F(a,c,b){b=b||[];if(a instanceof Element)c.apply(c,[a].concat(b));else{var d;var e=a.length;for(d=0;d<e;++d)c.apply(c,[a[d]].concat(b))}}function y(a){F(a,function(a){a.parentElement.removeChild(a)})}function J(a,c){do a=a.parentElement;while(a&&!B(a,c));return a}function B(a,c){return(a.matches||a.webkitMatchesSelector||a.msMatchesSelector).call(a,
c)}function k(a,c){return a&&a.classList.contains(c)}function l(a,c){a.classList.add(c)}function q(a,c,b,d){if(-1!==b.indexOf(" ")){b=b.split(" ");var e=b.length,h;for(h=0;h<e;++h)q(a,c,b[h],d)}else a.__pickmeup.events.push([c,b,d]),c.addEventListener(b,d)}function z(a,c,b,d){var e;if(b&&-1!==b.indexOf(" ")){var h=b.split(" ");var l=h.length;for(e=0;e<l;++e)z(a,c,h[e],d)}else for(h=a.__pickmeup.events,l=h.length,e=0;e<l;++e)c&&c!==h[e][0]||b&&b!==h[e][1]||d&&d!==h[e][2]||h[e][0].removeEventListener(h[e][1],
h[e][2])}function M(a){a=a.getBoundingClientRect();return{top:a.top+window.pageYOffset-document.documentElement.clientTop,left:a.left+window.pageXOffset-document.documentElement.clientLeft}}function C(a,c,b){var d=document.createEvent("Event");b&&(d.detail=b);d.initEvent("pickmeup-"+c,!1,!0);return a.dispatchEvent(d)}function K(a){a=new Date(a);for(var c=28,b=a.getMonth();a.getMonth()===b;)++c,a.setDate(c);return c-1}function A(a,c){a.setDate(a.getDate()+c)}function p(a,c){var b=a.getDate();a.setDate(1);
a.setMonth(a.getMonth()+c);a.setDate(Math.min(b,K(a)))}function u(a,c){var b=a.getDate();a.setDate(1);a.setFullYear(a.getFullYear()+c);a.setDate(Math.min(b,K(a)))}function N(a){var c=a.__pickmeup.element,b=a.__pickmeup.options,d=Math.floor(b.calendars/2),e=b.date,h=b.current,m=b.min?new Date(b.min):null,v=b.max?new Date(b.max):null;m&&(m.setDate(1),p(m,1),A(m,-1));v&&(v.setDate(1),p(v,1),A(v,-1));y(Array.prototype.slice.call(c.querySelectorAll(".pmu-instance > :not(nav)")));for(var w=0;w<b.calendars;w++){var f=
new Date(h);x(f);var n=Array.prototype.slice.call(c.querySelectorAll(".pmu-instance"))[w];if(k(c,"pmu-view-years")){u(f,12*(w-d));var G=f.getFullYear()-6+" - "+(f.getFullYear()+5)}else k(c,"pmu-view-months")?(u(f,w-d),G=f.getFullYear()):k(c,"pmu-view-days")&&(p(f,w-d),G="function"===typeof b.title_format?b.title_format(f,b.locales[b.locale]):D(f,b.title_format,b.locales[b.locale]));if(!r&&v){var r=new Date(f);b.select_day?p(r,b.calendars-1):b.select_month?u(r,b.calendars-1):u(r,12*(b.calendars-1));
if(r>v){--w;p(h,-1);r=void 0;continue}}r=new Date(f);if(!g){var g=new Date(f);g.setDate(1);p(g,1);A(g,-1);if(m&&m>g){--w;p(h,1);g=void 0;continue}}n.querySelector(".pmu-month").innerHTML=G;var q=function(a){return"range"===b.mode&&a>=(new Date(e[0])).getFullYear()&&a<=(new Date(e[1])).getFullYear()||"multiple"===b.mode&&-1!==e.reduce(function(a,b){a.push((new Date(b)).getFullYear());return a},[]).indexOf(a)||(new Date(e)).getFullYear()===a},t=function(a,c){var d=(new Date(e[0])).getFullYear(),f=(new Date(e[1])).getFullYear(),
h=(new Date(e[0])).getMonth(),g=(new Date(e[1])).getMonth();return"range"===b.mode&&(a>d&&a<f||a>d&&a===f&&c<=g||a===d&&a<f&&c>=h||a===d&&a===f&&c>=h&&c<=g)||"multiple"===b.mode&&-1!==e.reduce(function(a,b){b=new Date(b);a.push(b.getFullYear()+"-"+b.getMonth());return a},[]).indexOf(a+"-"+c)||(new Date(e)).getFullYear()===a&&(new Date(e)).getMonth()===c};(function(){var a=[],c=f.getFullYear()-6,d=(new Date(b.min)).getFullYear(),e=(new Date(b.max)).getFullYear(),h;for(h=0;12>h;++h){var g=c+h;var m=
document.createElement("div");m.textContent=g;m.__pickmeup_year=g;b.min&&g<d||b.max&&g>e?l(m,"pmu-disabled"):q(g)&&l(m,"pmu-selected");a.push(m)}n.appendChild(b.instance_content_template(a,"pmu-years"))})();(function(){var a=[],c=f.getFullYear(),d=(new Date(b.min)).getFullYear(),e=(new Date(b.min)).getMonth(),g=(new Date(b.max)).getFullYear(),h=(new Date(b.max)).getMonth(),m;for(m=0;12>m;++m){var k=document.createElement("div");k.textContent=b.locales[b.locale].monthsShort[m];k.__pickmeup_month=m;
k.__pickmeup_year=c;b.min&&(c<d||m<e&&c===d)||b.max&&(c>g||m>h&&c>=g)?l(k,"pmu-disabled"):t(c,m)&&l(k,"pmu-selected");a.push(k)}n.appendChild(b.instance_content_template(a,"pmu-months"))})();(function(){var a=[],c=f.getMonth(),d=x(new Date).valueOf(),e;(function(){f.setDate(1);var a=(f.getDay()-b.first_day)%7;A(f,-(a+(0>a?7:0)))})();for(e=0;42>e;++e){var g=document.createElement("div");g.textContent=f.getDate();g.__pickmeup_day=f.getDate();g.__pickmeup_month=f.getMonth();g.__pickmeup_year=f.getFullYear();
c!==f.getMonth()&&l(g,"pmu-not-in-month");0===f.getDay()?l(g,"pmu-sunday"):6===f.getDay()&&l(g,"pmu-saturday");var h=b.render(new Date(f))||{};var m=x(new Date(f)).valueOf();var k=b.min&&b.min>f||b.max&&b.max<f;var v=b.date.valueOf()===m||b.date instanceof Array&&b.date.reduce(function(a,b){return a||m===b.valueOf()},!1)||"range"===b.mode&&m>=b.date[0]&&m<=b.date[1];h.disabled||!("disabled"in h)&&k?l(g,"pmu-disabled"):(h.selected||!("selected"in h)&&v)&&l(g,"pmu-selected");m===d&&l(g,"pmu-today");
h.class_name&&h.class_name.split(" ").forEach(l.bind(g,g));a.push(g);A(f,1)}n.appendChild(b.instance_content_template(a,"pmu-days"))})()}g.setDate(1);r.setDate(1);p(r,1);A(r,-1);d=c.querySelector(".pmu-prev");c=c.querySelector(".pmu-next");d&&(d.style.visibility=b.min&&b.min>=g?"hidden":"visible");c&&(c.style.visibility=b.max&&b.max<=r?"hidden":"visible");C(a,"fill")}function t(a,c){var b=c.format,d=c.separator,e=c.locales[c.locale];if(a instanceof Date||"number"===typeof a)return x(new Date(a));
if(!a)return x(new Date);if(a instanceof Array){a=a.slice();for(b=0;b<a.length;++b)a[b]=t(a[b],c);return a}d=a.split(d);if(1<d.length)return d.forEach(function(a,b,d){d[b]=t(a.trim(),c)}),d;d=[].concat(e.daysShort,e.daysMin,e.days,e.monthsShort,e.months);d=d.map(function(a){return"("+a+")"});d=new RegExp("[^0-9a-zA-Z"+d.join("")+"]+");a=a.split(d);d=b.split(d);var h=new Date;for(b=0;b<a.length;b++)switch(d[b]){case "b":var m=e.monthsShort.indexOf(a[b]);break;case "B":m=e.months.indexOf(a[b]);break;
case "d":case "e":var l=parseInt(a[b],10);break;case "m":m=parseInt(a[b],10)-1;break;case "Y":case "y":var k=parseInt(a[b],10);k+=100<k?0:29>k?2E3:1900;break;case "H":case "I":case "k":case "l":var f=parseInt(a[b],10);break;case "P":case "p":/pm/i.test(a[b])&&12>f?f+=12:/am/i.test(a[b])&&12<=f&&(f-=12);break;case "M":var n=parseInt(a[b],10)}e=new Date(void 0===k?h.getFullYear():k,void 0===m?h.getMonth():m,void 0===l?h.getDate():l,void 0===f?h.getHours():f,void 0===n?h.getMinutes():n,0);isNaN(1*e)&&
(e=new Date);return x(e)}function x(a){a.setHours(0,0,0,0);return a}function D(a,c,b){var d=a.getMonth(),e=a.getDate(),h=a.getFullYear(),m=a.getDay(),k=a.getHours(),l=12<=k,f=l?k-12:k;var n=new Date(a.getFullYear(),a.getMonth(),a.getDate(),0,0,0);var p=new Date(a.getFullYear(),0,0,0,0,0);n=Math.floor((n-p)/864E5);0===f&&(f=12);p=a.getMinutes();var r=a.getSeconds();c=c.split("");for(var g,q=0;q<c.length;q++){g=c[q];switch(g){case "a":g=b.daysShort[m];break;case "A":g=b.days[m];break;case "b":g=b.monthsShort[d];
break;case "B":g=b.months[d];break;case "C":g=1+Math.floor(h/100);break;case "d":g=10>e?"0"+e:e;break;case "e":g=e;break;case "H":g=10>k?"0"+k:k;break;case "I":g=10>f?"0"+f:f;break;case "j":g=100>n?10>n?"00"+n:"0"+n:n;break;case "k":g=k;break;case "l":g=f;break;case "m":g=9>d?"0"+(1+d):1+d;break;case "M":g=10>p?"0"+p:p;break;case "p":case "P":g=l?"PM":"AM";break;case "s":g=Math.floor(a.getTime()/1E3);break;case "S":g=10>r?"0"+r:r;break;case "u":g=m+1;break;case "w":g=m;break;case "y":g=(""+h).substr(2,
2);break;case "Y":g=h}c[q]=g}return c.join("")}function O(a,c){var b=a.__pickmeup.options,d;x(c);a:switch(b.mode){case "multiple":var e=c.valueOf();for(d=0;d<b.date.length;++d)if(b.date[d].valueOf()===e){b.date.splice(d,1);break a}b.date.push(c);break;case "range":b.lastSel||(b.date[0]=c);c<=b.date[0]?(b.date[1]=b.date[0],b.date[0]=c):b.date[1]=c;b.lastSel=!b.lastSel;break;default:b.date=c.valueOf()}c=H(b);B(a,"input")&&(a.value="single"===b.mode?c.formatted_date:c.formatted_date.join(b.separator));
C(a,"change",c);b.flat||!b.hide_on_select||"range"===b.mode&&b.lastSel||b.bound.hide()}function P(a,c){var b=c.target;k(b,"pmu-button")||(b=J(b,".pmu-button"));if(!k(b,"pmu-button")||k(b,"pmu-disabled"))return!1;c.preventDefault();c.stopPropagation();a=a.__pickmeup.options;var d=J(b,".pmu-instance");c=d.parentElement;d=Array.prototype.slice.call(c.querySelectorAll(".pmu-instance")).indexOf(d);B(b.parentElement,"nav")?k(b,"pmu-month")?(p(a.current,d-Math.floor(a.calendars/2)),k(c,"pmu-view-years")?
(a.current="single"!==a.mode?new Date(a.date[a.date.length-1]):new Date(a.date),a.select_day?(c.classList.remove("pmu-view-years"),l(c,"pmu-view-days")):a.select_month&&(c.classList.remove("pmu-view-years"),l(c,"pmu-view-months"))):k(c,"pmu-view-months")?a.select_year?(c.classList.remove("pmu-view-months"),l(c,"pmu-view-years")):a.select_day&&(c.classList.remove("pmu-view-months"),l(c,"pmu-view-days")):k(c,"pmu-view-days")&&(a.select_month?(c.classList.remove("pmu-view-days"),l(c,"pmu-view-months")):
a.select_year&&(c.classList.remove("pmu-view-days"),l(c,"pmu-view-years")))):k(b,"pmu-prev")?a.bound.prev(!1):a.bound.next(!1):k(c,"pmu-view-years")?(a.current.setFullYear(b.__pickmeup_year),a.select_month?(c.classList.remove("pmu-view-years"),l(c,"pmu-view-months")):a.select_day?(c.classList.remove("pmu-view-years"),l(c,"pmu-view-days")):a.bound.update_date(a.current)):k(c,"pmu-view-months")?(a.current.setMonth(b.__pickmeup_month),a.current.setFullYear(b.__pickmeup_year),a.select_day?(c.classList.remove("pmu-view-months"),
l(c,"pmu-view-days")):a.bound.update_date(a.current),p(a.current,Math.floor(a.calendars/2)-d)):(c=new Date(a.current),c.setYear(b.__pickmeup_year),c.setMonth(b.__pickmeup_month),c.setDate(b.__pickmeup_day),a.bound.update_date(c));a.bound.fill();return!0}function H(a){if("single"===a.mode){var c=new Date(a.date);return{formatted_date:D(c,a.format,a.locales[a.locale]),date:c}}c={formatted_date:[],date:[]};a.date.forEach(function(b){b=new Date(b);c.formatted_date.push(D(b,a.format,a.locales[a.locale]));
c.date.push(b)});return c}function I(a,c){var b=a.__pickmeup.element;if(c||k(b,"pmu-hidden")){var d=a.__pickmeup.options,e=M(a),h=window.pageXOffset,m=window.pageYOffset,l=document.documentElement.clientWidth,p=document.documentElement.clientHeight,f=e.top,n=e.left;d.bound.fill();B(a,"input")&&((c=a.value)&&d.bound.set_date(c),q(a,a,"keydown",function(a){9===a.which&&d.bound.hide()}),d.lastSel=!1);if(C(a,"show")&&!d.flat){b.classList.remove("pmu-hidden");if(d.position instanceof Function)e=d.position.call(a),
n=e.left,f=e.top;else{switch(d.position){case "top":f-=b.offsetHeight;break;case "left":n-=b.offsetWidth;break;case "right":n+=a.offsetWidth;break;case "bottom":f+=a.offsetHeight}f+b.offsetHeight>m+p&&(f=e.top-b.offsetHeight);f<m&&(f=e.top+a.offsetHeight);n+b.offsetWidth>h+l&&(n=e.left-b.offsetWidth);n<h&&(n=e.left+a.offsetWidth);n+="px";f+="px"}b.style.left=n;b.style.top=f;setTimeout(function(){q(a,document.documentElement,"click",d.bound.hide);q(a,window,"resize",d.bound.forced_show)})}}}function Q(a,
c){var b=a.__pickmeup.element,d=a.__pickmeup.options;c&&c.target&&(c.target===a||b.compareDocumentPosition(c.target)&16)||!C(a,"hide")||(l(b,"pmu-hidden"),z(a,document.documentElement,"click",d.bound.hide),z(a,window,"resize",d.bound.forced_show),d.lastSel=!1)}function R(a){var c=a.__pickmeup.options;z(a,document.documentElement,"click",c.bound.hide);z(a,window,"resize",c.bound.forced_show);c.bound.forced_show()}function S(a){a=a.__pickmeup.options;"single"!==a.mode&&(a.date=[],a.lastSel=!1,a.bound.fill())}
function T(a,c){"undefined"==typeof c&&(c=!0);var b=a.__pickmeup.element;a=a.__pickmeup.options;k(b,"pmu-view-years")?u(a.current,-12):k(b,"pmu-view-months")?u(a.current,-1):k(b,"pmu-view-days")&&p(a.current,-1);c&&a.bound.fill()}function U(a,c){"undefined"==typeof c&&(c=!0);var b=a.__pickmeup.element;a=a.__pickmeup.options;k(b,"pmu-view-years")?u(a.current,12):k(b,"pmu-view-months")?u(a.current,1):k(b,"pmu-view-days")&&p(a.current,1);c&&a.bound.fill()}function V(a,c){var b=a.__pickmeup.options;a=
H(b);return"string"===typeof c?(a=a.date,a instanceof Date?D(a,c,b.locales[b.locale]):a.map(function(a){return D(a,c,b.locales[b.locale])})):a[c?"formatted_date":"date"]}function W(a,c,b){var d=a.__pickmeup.options;if(!(c instanceof Array)||0<c.length)if(d.date=t(c,d),"single"!==d.mode)for(d.date instanceof Array?(d.date[0]=d.date[0]||t(new Date,d),"range"===d.mode&&(d.date[1]=d.date[1]||t(d.date[0],d))):(d.date=[d.date],"range"===d.mode&&d.date.push(t(d.date[0],d))),c=0;c<d.date.length;++c)d.date[c]=
L(d.date[c],d.min,d.max);else d.date instanceof Array&&(d.date=d.date[0]),d.date=L(d.date,d.min,d.max);else d.date=[];if(!d.select_day)if(d.date instanceof Array)for(c=0;c<d.date.length;++c)d.date[c].setDate(1);else d.date.setDate(1);if("multiple"===d.mode)for(c=0;c<d.date.length;++c)d.date.indexOf(d.date[c])!==c&&(d.date.splice(c,1),--c);b?d.current=t(b,d):(b="single"===d.mode?d.date:d.date[d.date.length-1],d.current=b?new Date(b):new Date);d.current.setDate(1);d.bound.fill();B(a,"input")&&!1!==
d.default_date&&(b=H(d),c=a.value,d="single"===d.mode?b.formatted_date:b.formatted_date.join(d.separator),c||C(a,"change",b),c!==d&&(a.value=d))}function X(a){var c=a.__pickmeup.element;z(a);y(c);delete a.__pickmeup}function L(a,c,b){return c&&c>a?new Date(c):b&&b<a?new Date(b):a}function E(a,c){"string"==typeof a&&(a=document.querySelector(a));if(!a)return null;if(!a.__pickmeup){var b,d={};c=c||{};for(b in E.defaults)d[b]=b in c?c[b]:E.defaults[b];for(b in d)c=a.getAttribute("data-pmu-"+b),null!==
c&&(d[b]=c);"days"!==d.view||d.select_day||(d.view="months");"months"!==d.view||d.select_month||(d.view="years");"years"!==d.view||d.select_year||(d.view="days");"days"!==d.view||d.select_day||(d.view="months");d.calendars=Math.max(1,parseInt(d.calendars,10)||1);d.mode=/single|multiple|range/.test(d.mode)?d.mode:"single";d.min&&(d.min=t(d.min,d),d.select_day||d.min.setDate(1));d.max&&(d.max=t(d.max,d),d.select_day||d.max.setDate(1));c=document.createElement("div");a.__pickmeup={options:d,events:[],
element:c};c.__pickmeup_target=a;l(c,"pickmeup");d.class_name&&l(c,d.class_name);d.bound={fill:N.bind(a,a),update_date:O.bind(a,a),click:P.bind(a,a),show:I.bind(a,a),forced_show:I.bind(a,a,!0),hide:Q.bind(a,a),update:R.bind(a,a),clear:S.bind(a,a),prev:T.bind(a,a),next:U.bind(a,a),get_date:V.bind(a,a),set_date:W.bind(a,a),destroy:X.bind(a,a)};l(c,"pmu-view-"+d.view);var e=d.instance_template(d),h="";for(b=0;b<d.calendars;++b)h+=e;c.innerHTML=h;q(a,c,"click",d.bound.click);q(a,c,"onselectstart"in Element.prototype?
"selectstart":"mousedown",function(a){a.preventDefault()});d.flat?(l(c,"pmu-flat"),a.appendChild(c)):(l(c,"pmu-hidden"),document.body.appendChild(c),q(a,a,"click",I.bind(a,a,!1)),q(a,a,"input",d.bound.update),q(a,a,"change",d.bound.update));d.bound.set_date(d.date,d.current)}d=a.__pickmeup.options;return{hide:d.bound.hide,show:d.bound.show,clear:d.bound.clear,update:d.bound.update,prev:d.bound.prev,next:d.bound.next,get_date:d.bound.get_date,set_date:d.bound.set_date,destroy:d.bound.destroy}}E.defaults=
{current:null,date:new Date,default_date:new Date,flat:!1,first_day:1,prev:"&#9664;",next:"&#9654;",mode:"single",select_year:!0,select_month:!0,select_day:!0,view:"days",calendars:1,format:"d-m-Y",title_format:"B, Y",position:"bottom",class_name:"",separator:" - ",hide_on_select:!1,min:null,max:null,render:function(){},locale:"en",locales:{en:{days:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),daysShort:"Sun Mon Tue Wed Thu Fri Sat".split(" "),daysMin:"Su Mo Tu We Th Fr Sa".split(" "),
months:"January February March April May June July August September October November December".split(" "),monthsShort:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")}},instance_template:function(a){var c=a.locales[a.locale].daysMin.slice();a.first_day&&c.push(c.shift());return'<div class="pmu-instance"><nav><div class="pmu-prev pmu-button">'+a.prev+'</div><div class="pmu-month pmu-button"></div><div class="pmu-next pmu-button">'+a.next+'</div></nav><nav class="pmu-day-of-week"><div>'+
c.join("</div><div>")+"</div></nav></div>"},instance_content_template:function(a,c){var b=document.createElement("div");l(b,c);for(c=0;c<a.length;++c)l(a[c],"pmu-button"),b.appendChild(a[c]);return b}};return E});

/*! UTF-8

© kovrigin
Все права разрешены
красивый дизайн должен иметь красивый код®

https://github.com/htmlpluscss/

*/

( () => {

	let resizeTimeout = null,
		windowWidthOLd = window.innerWidth;

	const header = document.querySelector('.header');

	window.addEventListener("resize", () => {

		window.requestAnimationFrame( () => {

			if (resizeTimeout === null) {

				resizeTimeout = setTimeout( () => {

					resizeTimeout = null;

					if(windowWidthOLd !== window.innerWidth) {

						windowWidthOLd = window.innerWidth;
						document.documentElement.style.setProperty('--scrollMargin', header.clientHeight + 'px');

					}

				}, 100);

			}

		});

	});

	window.addEventListener("load", () => {

		localStorage.setItem('fastLoadScript', true);

		document.documentElement.style.setProperty('--transitionDefault', '.3s');
		document.documentElement.style.setProperty('--scrollMargin', header.clientHeight + 'px');

	});

	// обработчик анимаций
	window.cssAnimation = a=>{let b,c,d=document.createElement("cssanimation");switch(a){case'animation':b={"animation":"animationend","OAnimation":"oAnimationEnd","MozAnimation":"animationend","WebkitAnimation":"webkitAnimationEnd"};break;case'transition':b={"transition":"transitionend","OTransition":"oTransitionEnd","MozTransition":"transitionend","WebkitTransition":"webkitTransitionEnd"}}for(c in b)if(d.style[c]!==undefined)return b[c]}

	// Determine if an element is in the visible viewport
	window.isInViewport = el => {
		const rect = el.getBoundingClientRect();
		return (rect.top >= 0 && rect.bottom <= window.innerHeight);
	}

	// отделяем тысячи
	window.sepNumber = str => {
		str = str.toString();
		str = str.replace(/\s+/g,'');
		return str.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
	}

	// склеиваем тысячи
	window.strToNumber = n => parseInt(n.replace(/\s+/g,''), 10);

// склонение
	window.declension = (num, expressions) => {

		let r,
			count = num % 100;

		if (count > 4 && count < 21){

			r = expressions['2'];

		}
		else {

			count = count % 10;

			if (count == 1){
				r = expressions['0'];
			}
			else if (count > 1 && count < 5){
				r = expressions['1'];
			}
			else{
				r = expressions['2'];
			}

		}

		return r;

	}

})();
( items => {

	if(!items.length) {

		return;

	}

	[...items].forEach( accordion => {

		let animateOn = false,
			activeItem = null;

		const items = accordion.querySelectorAll('.accordion__item'),
			  stylePlus = accordion.classList.contains('accordion--plus');

		[...items].forEach( item => {

			const btn = item.querySelector('.accordion__btn'),
				  head = item.querySelector('.accordion__head'),
				  body = item.querySelector('.accordion__body'),
				  arrow = document.createElementNS("http://www.w3.org/2000/svg", "svg");

			arrow.setAttributeNS(null, "viewBox", "0 0 24 24");
			arrow.setAttributeNS(null, "width", 24);
			arrow.setAttributeNS(null, "height", 24);
			arrow.innerHTML = `<use xlink:href="#svg-${ stylePlus ? 'plus' : 'arrow-chevron-right' }"/>`;

			head.append(arrow);

			btn.addEventListener('click', () => {

				animateOn = true;

				if( item === activeItem ){

					item.classList.remove('is-open');
					activeItem = null;

				} else {

					activeItem = item;

					[...items].forEach( el => el.classList.toggle('is-open', el === item));

				}

			});

			body.addEventListener(window.cssAnimation('transition'), () => {

				if(animateOn && activeItem && !window.isInViewport(head)){

					head.scrollIntoView({ behavior: 'smooth' });

				}

				animateOn = false;

			});

		});

	});

})(document.querySelectorAll('.accordion'));
( article => {

	if(article) {

		// share

		const btn = article.querySelector('.page-article__share-btn');

		if ( btn ) {

			window.addEventListener("click", event => {

				if ( event.target.closest('.page-article__share') ) {

					btn.classList.toggle('is-open');

				} else {

					btn.classList.remove('is-open');

				}

			});

		}

	}

})(document.querySelector('.page-article'));
( brands => {

	if( brands ) {

		const group = brands.querySelectorAll('.brands__group');

		// hash

		const setStage = ()=> {

			const hash = location.hash.toLowerCase().slice(1);

			[...group].forEach( item => {

				item.classList.toggle('hide', item.getAttribute('data-hash').toLowerCase() !== hash && hash );

			});

		}

		window.addEventListener('hashchange', setStage);

		if ( location.hash ) {

			setTimeout( setStage );

		}

		// btns

		const btns = document.querySelectorAll('.brands-sort__btn');

		[...btns].forEach( link => {

			link.addEventListener('click', event => {

				event.preventDefault();

				if ( link.href.includes('#') ) {

					location.hash = link.getAttribute('href');

				} else {

					history.pushState('', document.title, window.location.pathname + window.location.search);

				}

				setStage();

			});

		});

	}

})(document.querySelector('.brands'));
( form => {

	if( form ) {

		form.addEventListener("click", event => {

			const target = event.target,
				  item = target.closest('.cart__item');

			// remove

			if ( target.closest('.cart-item__remove') ) {

				item.style.height = item.clientHeight + "px";

				item.addEventListener(window.cssAnimation('transition'), event => {

					if ( event.propertyName === 'height' && item.clientHeight === 0 ) {

						item.remove();

						setTimeout( ()=> form.dispatchEvent(new Event('change')),100);

					}

				});

				setTimeout( ()=> item.classList.add('is-remove') );

			}

		});

		// submit

		form.addEventListener('change', event => {

			fetch(form.getAttribute('action'), {
				method: 'POST',
				body: new FormData(form)
			})
			.then(response => response.text())
			.then(result => {

				console.log(result);

			});

		});


		// + | -

		const quantity = form.querySelectorAll('.cart-quantity');

		[...quantity].forEach( el => {

			let value = null;

			const up = el.querySelector('.cart-quantity__btn--up'),
				  down = el.querySelector('.cart-quantity__btn--down'),
				  count = el.querySelector('.cart-quantity__count');

			up.addEventListener('click', () => {

				value = parseInt(count.value);

				count.value = isNaN(value) ? 1 : value + 1;

				form.dispatchEvent(new Event('change'));

			});

			down.addEventListener('click', () => {

				value = parseInt(count.value);

				if( isNaN(value) || value < 2 ) {

					value = 2;

				}

				count.value = value - 1;

				form.dispatchEvent(new Event('change'));

			});

			count.addEventListener('blur', () => {

				form.dispatchEvent(new Event('change'));

			});

			count.addEventListener('focus', () => {

				setTimeout( () => count.setSelectionRange(0,9), 100);

			});

			count.addEventListener('keyup', () => {

				const val = count.value.replace(/[\D]/g, '');

				if ( isNaN(val) ) {

					val = 1;

				}

				count.value = val;

				form.dispatchEvent(new Event('change'));

			});

		});

	};

})(document.querySelector('.cart'));
( cards => {

	if( cards.length ) {

		window.addEventListener("load", () => {

			cards.forEach( card => {

				const listTags = card.querySelector('.consultations-card__question-tags'),
					  itemTags = card.querySelectorAll('.consultations-card__question-tags li'),
					  wrapTags = card.querySelector('.consultations-card__question-tags-wrap');

				if ( wrapTags.clientHeight < listTags.clientHeight ) {

					const btn = document.createElement('button');

					btn.type = 'button';
					btn.className = 'btn btn--hash btn--small';
					btn.textContent = wrapTags.getAttribute('data-more');

					btn.addEventListener('click', () => {

						if ( wrapTags.classList.contains('is-open') ) {

							wrapTags.classList.remove('is-open');
							btn.textContent = wrapTags.getAttribute('data-more');

						} else {

							wrapTags.classList.add('is-open');
							btn.textContent = wrapTags.getAttribute('data-less');

						}

					});

					wrapTags.insertAdjacentElement('afterend', btn);

				};

			});

		});

	}

})(document.querySelectorAll('.consultations-card'));
( deadline => {

	if ( deadline.length > 0 ) {

		const getTimeRemaining = endtime => {

			const total = Date.parse(endtime) - Date.parse(new Date()),
				  seconds = Math.floor((total / 1000) % 60),
				  minutes = Math.floor((total / 1000 / 60) % 60),
				  hours = Math.floor((total / (1000 * 60 * 60)) % 24),
				  days = Math.floor(total / (1000 * 60 * 60 * 24));

			return {total, days, hours, minutes, seconds}

		}

		const init = (el, endtime, expressions) => {

			const updateClock = ()=> {

				const t = getTimeRemaining(endtime);

				el.textContent = t.days + ' ' + window.declension(t.days, expressions) + ' ' + ('0' + t.hours).slice(-2) + ':' + ('0' + t.minutes).slice(-2) + ':' + ('0' + t.seconds).slice(-2);

				if ( t.total > 0 ) {

					setTimeout( updateClock, 1000);

				}

			}

			updateClock();

		}

		[...deadline].forEach( el => {

			const timer = el.getAttribute('data-deadline'),
				  expressions = el.getAttribute('data-declension').split('|');

			init( el, timer, expressions );

			setTimeout( ()=> {

				if ( el.clientWidth > 0 ) {

					el.style.width = el.clientWidth + 'px';
					el.style.textAlign = 'left';

				}

			}, 1000);

		});

	}

})(document.querySelectorAll('[data-deadline]'));
( () => {

	window.addEventListener('click', event => {

		//  Нашли дешевле?

		const bestPrice = event.target.closest('.js-best-price');

		if ( bestPrice ) {

			const template = document.querySelector('#preview-card-row-template').innerHTML,
				  product = bestPrice.closest('.product');
				  param = {};

			if ( product ) {

				param.id        = product.querySelector('.product-buy').id.value;
				param.link      = location.href;
				param.price     = parseInt(product.querySelector('.price__value').textContent);
				param.priceOld  = product.querySelector('data-price-old');
				param.img       = product.querySelector('.product-gallery img').src;
				param.img2x     = product.querySelector('.product-gallery img').src;
				param.name      = product.querySelector('.product__title').textContent;

				if ( product.querySelector('.product-buy').articleid ) {

					param.articleid = product.querySelector('.product-buy').articleid.value;

				}

				if ( product.querySelector('.price__old') ) {

					param.priceOld = parseInt(product.querySelector('.price__old').textContent);

				}

			}
			else {

				param.id        = bestPrice.getAttribute('data-id');
				param.articleid = bestPrice.getAttribute('data-articleid');
				param.link      = bestPrice.getAttribute('data-link');
				param.price     = bestPrice.getAttribute('data-price');
				param.priceOld  = bestPrice.getAttribute('data-price-old');
				param.img       = bestPrice.getAttribute('data-img');
				param.img2x     = bestPrice.getAttribute('data-img2x');
				param.name      = bestPrice.getAttribute('data-name');

			}

			document.querySelector('#modal-form-best-price-product').innerHTML = Mustache.render(template, param);

		}

		//  Найти аналогичный товар

		const findAnalogue = event.target.closest('.js-find-analogue');

		if ( findAnalogue ) {

			const template = document.querySelector('#preview-card-row-template').innerHTML,
				  param = {};

			param.id        = findAnalogue.getAttribute('data-id');
			param.articleid = findAnalogue.getAttribute('data-articleid');
			param.link      = findAnalogue.getAttribute('data-link');
			param.price     = findAnalogue.getAttribute('data-price');
			param.priceOld  = findAnalogue.getAttribute('data-price-old');
			param.img       = findAnalogue.getAttribute('data-img');
			param.img2x     = findAnalogue.getAttribute('data-img2x');
			param.name      = findAnalogue.getAttribute('data-name');

			document.querySelector('#modal-form-find-analogue-product').innerHTML = Mustache.render(template, param);

		}

		//  Уведомить  / найти аналог

		const findNotify = event.target.closest('.js-find-notify');

		if (findNotify) {

			const template = document.querySelector('#preview-card-row-template').innerHTML,
				  product = findNotify.closest('.product');
				  previewCard = findNotify.closest('.preview-card'),
				  productModal = findNotify.closest('#preview-card-color'),
				  param = {};

			if ( product ) {

				param.id        = product.querySelector('.product-buy').id.value;
				param.link      = location.href;
				param.price     = parseInt(product.querySelector('.price__value').textContent);
				param.priceOld  = product.querySelector('data-price-old');
				param.img       = product.querySelector('.product-gallery img').src;
				param.img2x     = product.querySelector('.product-gallery img').src;
				param.name      = product.querySelector('.product__title').textContent;

				if ( product.querySelector('.product-buy').articleid ) {

					param.articleid = product.querySelector('.product-buy').articleid.value;

				}

				if ( product.querySelector('.price__old') ) {

					param.priceOld = parseInt(product.querySelector('.price__old').textContent);

				}

			} else if ( previewCard ) {

				param.id        = previewCard.querySelector('.preview-card__form').elements.id.value;
				param.link      = previewCard.querySelector('.preview-card__title').href;
				param.price     = parseInt(previewCard.querySelector('.price__value').textContent);
				param.img       = previewCard.querySelector('.preview-card__img img').src;
				param.img2x     = previewCard.querySelector('.preview-card__img img').src;
				param.name      = previewCard.querySelector('.preview-card__img img').alt;

				if ( previewCard.querySelector('.preview-card__form').elements.articleid ) {

					param.articleid = previewCard.querySelector('.preview-card__form').elements.articleid.value;

				}

				if ( previewCard.querySelector('.price__old') ) {

					param.priceOld = parseInt(previewCard.querySelector('.price__old').textContent);

				}

			}

			if ( productModal ) {

				const checked = [...productModal.elements.articleid].find( el => el.checked );

				param.id        = productModal.elements.id.value;
				param.articleid = checked.value;
				param.link      = productModal.querySelector('.modal-card-color__title a').href;
				param.price     = parseInt(checked.getAttribute('data-price'));
				param.img       = checked.getAttribute('data-src');
				param.img2x     = checked.getAttribute('data-src');
				param.name      = productModal.querySelector('.modal-card-color__title').textContent;

				if ( checked.getAttribute('data-price-old') ) {

					param.priceOld = parseInt(checked.getAttribute('data-price-old'));

				}

			}

			document.querySelector('#modal-form-find-notify-product').innerHTML = Mustache.render(template, param);

		}

		// выбор подтоваров, каталог

		const btnSelectListToggle = event.target.closest('.js-select-list-toggle');

		if (btnSelectListToggle) {

			btnSelectListToggle.classList.toggle('is-open');

		}

/*

		const btnsSelectListToggle = document.querySelectorAll('.js-select-list-toggle');

		if ( btnsSelectListToggle.length > 0 ) {

			const btnSelectListToggle = event.target.closest('.js-select-list-toggle');

			if (btnSelectListToggle) {

				[...btnsSelectListToggle].forEach( btn => btn.classList.toggle('is-open', btn === btnSelectListToggle && btnSelectListToggle.classList.contains('is-open') === false));

			}
			else {

				[...btnsSelectListToggle].forEach( btn => btn.classList.remove('is-open'));

			}

		}*/
	});

})();
// filter
( filter => {

	if(!filter) {

		return;

	}

	const items = filter.querySelectorAll('.filter-row__item'),
		  itemReset = filter.querySelector('.filter-row__item--reset');

	// change

	filter.addEventListener('change', event => {

		const item = event.target.closest('.filter-row__item');

		let checked = false;

		[...item.querySelectorAll('.checkbox__input')].forEach( checkbox => {

			if ( checkbox.checked ) {

				checked = true;

			}

		});

		item.querySelector('.filter-row__btn').classList.toggle('btn--outline', checked === false);

		itemReset.querySelector('.filter-row__btn').classList.toggle('btn--outline', checked === true);

	});

	// reset

	filter.addEventListener('reset', ()=> {

		[...items].forEach( item => item.querySelector('.filter-row__btn').classList.toggle('btn--outline', item !== itemReset) );

	});

	window.addEventListener("click", event => {

		const isItem = event.target.closest('.filter-row__item');

		if ( isItem ) {

			[...items].forEach( item => {

				item.classList.toggle('is-open', item === isItem && item.classList.contains('is-open') === false );

			});

		} else {

			[...items].forEach( item => item.classList.remove('is-open') );

		}

	});

})(document.querySelector('.filter-row'));
// filter
( filter => {

	if(!filter) {

		return;

	}

	// scrollTo
	const scrollTo = (element, to, duration = 70) => {

		if (duration <= 0) return;

		const difference = to - element.scrollTop,
			  perTick = difference / duration * 10;

		setTimeout( ()=> {

			element.scrollTop = element.scrollTop + perTick;

			if (element.scrollTop === to) return;

			scrollTo(element, to, duration - 10);

		}, 10);

	}


	let windowScroll = window.pageYOffset;

	const mobileOpen = document.querySelectorAll('.js-filter-mobile-open');

	// change

	filter.addEventListener('input', event => {

		const target = event.target;

		// live-search

		if ( target.closest('.js-live-search__input') ) {

			const value = target.closest('.js-live-search__input').value.toLowerCase(),
				  liveSearch = target.closest('.js-live-search'),
				  item = liveSearch.querySelectorAll('.js-live-search__item'),
				  reset = liveSearch.querySelector('.js-live-search__reset'),
				  input = liveSearch.querySelector('.js-live-search__input');

			if ( value.length === 0 ) {

				reset.classList.add('hide');

				[...item].forEach( el => el.classList.remove('hide') );

				return;

			}

			reset.classList.remove('hide');

			[...item].forEach( el => el.classList.toggle('hide', el.getAttribute('data-live-search').toLowerCase().includes(value) === false ));

		}

	});

	// click

	filter.addEventListener('click', event => {

		const target = event.target;

		// legend toggle

		if ( target.closest('.filter__legend') ) {

			target.closest('.filter__legend').classList.toggle('is-open');

		}

		// letter

		if ( target.closest('.js-letter__btn') ) {

			const box = target.closest('.js-letter'),
				  scrollList = box.querySelector('.js-letter__scroll'),
				  item = box.querySelectorAll('.js-letter__item'),
				  letter = target.closest('.js-letter__btn').getAttribute('data-value');

			if ( letter === 'top' ) {

				scrollTo(scrollList, 0);

				return true;

			}

			[...item].every( el => {

				if ( letter === el.getAttribute('data-letter') ) {

					scrollTo(scrollList, el.offsetTop);

					return false;

				} else {

					return true;

				}

			});

		}

		// live-search

		if ( target.closest('.js-live-search__reset') ) {

			const liveSearch = target.closest('.js-live-search'),
				  item = liveSearch.querySelectorAll('.js-live-search__item'),
				  input = liveSearch.querySelector('.js-live-search__input');

			input.value = '';
			target.closest('.js-live-search__reset').classList.add('hide');

			[...item].forEach( el => el.classList.remove('hide') );

			input.focus();

		}

		// filter close

		if ( target.closest('.filter__btn-close') ) {

			document.body.classList.remove('is-filter-show');

			window.scrollTo(0,windowScroll);

			window.requestAnimationFrame( () => {

				document.documentElement.classList.remove('scroll-behavior-off');

			});

		}

	});

// open filter

	[...mobileOpen].forEach( btn => {

		btn.addEventListener("click", () => {

			windowScroll = window.pageYOffset;

			document.documentElement.classList.add('scroll-behavior-off');

			window.requestAnimationFrame( () => {

				document.body.classList.add('is-filter-show');
				window.scrollTo(0,0);

			});

		});

	});

// sort

	const sort = document.querySelector('.js-filter-change');

	if (sort) {

		sort.addEventListener("change", event => {

			console.log(event.target);

			if( filter.elements[event.target.name] ) {

				filter.elements[event.target.name].value = event.target.value;

				filter.dispatchEvent(new Event("change"));

			}

		});

	}

//  foot

	const foot = filter.querySelector('.filter__foot');

	if (foot) {

		filter.addEventListener("change", () => {

			foot.classList.remove('hide');

		});

		filter.addEventListener("reset", () => {

			foot.classList.add('hide');

		});

	}


})(document.querySelector('.filter'));
// ClipboardJS

	( elems => {

		if ( elems.length ) {

			[...elems].forEach( btn => {

				const clipboard = new ClipboardJS(btn);

				clipboard.on('success', ()=> {

					btn.classList.add('is-clipboard-success');

					setTimeout( ()=> {

						btn.classList.remove('is-clipboard-success');

					},3000);

				});

			});

		}

	})(document.querySelectorAll('[data-clipboard-text]'));

// autosize

	autosize(document.querySelectorAll('textarea.autosize'));

// file


( fileupload => {

	if(fileupload.length){

		const template = document.querySelector('#fileupload-template').innerHTML;

		[...fileupload].forEach( file => {

			const input = file.querySelector('[type="file"]'),
				  btn = file.querySelector('.fileupload__btn');

			input.addEventListener("change", event => {

				btn.classList.add('hide');

				file.insertAdjacentHTML('beforeend', Mustache.render(template, { name : input.value.replace(/.*[\/\\]/, '') }));
/*
				console.log('Selected file: ' + input.files.item(0).name);
				console.log('Selected file: ' + input.files.item(0).size);
				console.log('Selected file: ' + input.files.item(0).type);

*/			});

			file.addEventListener('click', event => {

				if ( event.target.closest('.fileupload__reset') ) {

					input.value = '';
					btn.classList.remove('hide');
					event.target.closest('.fileupload__btn').remove();

				}

			});

		});

	}

})(document.querySelectorAll('.fileupload'));



( fileupload => {

	if(fileupload.length){

		const template = document.querySelector('#drag-and-drop-template').innerHTML;

		[...fileupload].forEach( file => {

			const input = file.querySelector('[type="file"]'),
				  btn = file.querySelector('.drag-and-drop__btn');

			input.addEventListener("change", event => {

				btn.classList.add('hide');

				file.insertAdjacentHTML('beforeend', Mustache.render(template, { name : input.value.replace(/.*[\/\\]/, '') }));
/*
				console.log('Selected file: ' + input.files.item(0).name);
				console.log('Selected file: ' + input.files.item(0).size);
				console.log('Selected file: ' + input.files.item(0).type);

*/			});

			file.addEventListener('click', event => {

				if ( event.target.closest('.drag-and-drop__reset') ) {

					input.value = '';
					btn.classList.remove('hide');
					event.target.closest('.drag-and-drop__btn').remove();

				}

			});

		});

	}

})(document.querySelectorAll('.drag-and-drop'));


( fileupload => {

	if(fileupload.length){

		const template = document.querySelector('#modal-file-template').innerHTML;

		[...fileupload].forEach( file => {

			const input = file.querySelector('.modal-file__input'),
				  desc = file.querySelector('.modal-file__desc');

			input.addEventListener("change", event => {

				let value = '';

				[...input.files].forEach( file => {

					if ( value.length ) {

						value += ', ';

					}

					let size = (file.size / 1024 / 1024).toFixed(2);

					value += file.name + ' (' + size + 'Мб)';

				});

				file.querySelector('.btn').remove();

				input.insertAdjacentHTML('afterend', Mustache.render(template));

				desc.textContent = value;

			});

		});

	}

})(document.querySelectorAll('.modal-file'));

( header => {

	if (header) {

		const menu = document.querySelector('.menu-catalog');

		let resizeTimeout = null;

		if ( window.innerWidth > 1249 ) {

			header.classList.toggle('is-fixed', window.pageYOffset > 36); // menu top
			menu.classList.toggle('is-transparent', window.pageYOffset > 86); // 60 + 53 - 37

		}

		window.addEventListener("scroll", () => {

			window.requestAnimationFrame( () => {

				if (
					resizeTimeout === null &&
					document.body.classList.contains('modal-show') === false &&
					window.innerWidth > 1249
				) {

					resizeTimeout = setTimeout( () => {

						resizeTimeout = null;

						header.classList.toggle('is-fixed', window.pageYOffset > 36);
						menu.classList.toggle('is-transparent', window.pageYOffset > 86);

					}, 100);

				}

			});

		});

		// search

		const headerSearch = header.querySelectorAll('.header-search__input');

		window.addEventListener("click", event => {

			const btnOpen = event.target.closest('.header-search-show');

			if ( btnOpen ) {

				header.classList.add('is-search');

				setTimeout( () => [...headerSearch].forEach( input => input.focus() ), 100);

			}
/*
			if ( event.target.closest('.header') === null ) {

				header.classList.remove('is-search');
				[...headerSearch].forEach( input => input.classList.remove('is-focus') );

			}

*/		});

	}

})(document.querySelector('.header'));
( elems => {

	if(!elems.length) {

		return;

	}

	const script = document.createElement('script');
	script.src = '/js/inputmask.min.js';
	script.onload = () => {

		[...elems].forEach( el => {

			let maskInput;

			if(el.classList.contains('inputmask--phone')) {

				maskInput = new Inputmask({
					mask: '+7 ( 999 ) 999 99 99',
					placeholder: '-'
				});

			}

			maskInput.mask(el);

		});

	};

	setTimeout( () => document.head.appendChild(script), localStorage.getItem('fastLoadScript') ? 0 : 10000);

})(document.querySelectorAll('.inputmask'));
( items => {

	if(!items.length) {

		return;

	}

	[...items].forEach( item => {

		const btn = item.querySelector('.orderlist__toggle .button');

		btn.addEventListener('click', () => {

			item.classList.toggle('is-open');

		});

	});

})(document.querySelectorAll('.orderlist'));
( menu => {

	if(menu) {

		let scrollLevel2 = null;

		const back = menu.querySelector('.menu-catalog__back'),
			  body = menu.querySelector('.menu-catalog__body');

		// иконка level2 +

		const linkBtn = menu.querySelectorAll('.menu-catalog__link.is-btn'),
			  icoPlus = document.createElementNS("http://www.w3.org/2000/svg", "svg");

		icoPlus.setAttributeNS(null, "viewBox", "0 0 24 24");
		icoPlus.setAttributeNS(null, "width", 24);
		icoPlus.setAttributeNS(null, "height", 24);
		icoPlus.setAttribute('role', 'button');

		icoPlus.innerHTML = '<rect x="11" y="6" width="2" height="12"/><rect x="6" y="11" width="12" height="2"/>';

		// иконка right level1 и level2
		const level_1 = menu.querySelectorAll('.menu-catalog__link--arrow, .menu-catalog__link--only-mobile'),
			  icoRight = document.createElementNS("http://www.w3.org/2000/svg", "svg");

		icoRight.setAttributeNS(null, "viewBox", "0 0 24 24");
		icoRight.setAttributeNS(null, "width", 32);
		icoRight.setAttributeNS(null, "height", 32);
		icoRight.setAttribute('role', 'button');

		icoRight.innerHTML = '<use xlink:href="#svg-chevron-right"/>';

		// resize

		const resize = () => {

			if ( window.innerWidth < 1250 ) {

				[...level_1].forEach( btn => {

					if ( btn.querySelector('svg') === null ) {

						btn.append(icoRight.cloneNode(true));

					}

				});

				[...linkBtn].forEach( btn => {

					if ( btn.querySelector('svg') ) {

						btn.querySelector('svg').remove();

					}

					btn.append(icoRight.cloneNode(true));

				});

			} else {

				back.classList.add('hide');
				body.classList.add('hide');

				[...level_1].forEach( btn => {

					if ( btn.querySelector('svg') ) {

						btn.querySelector('svg').remove();

					}

				});

				[...linkBtn].forEach( btn => {

					if ( btn.querySelector('svg') ) {

						btn.querySelector('svg').remove();

					}

					btn.append(icoPlus.cloneNode(true));

				});

			}

		}

		resize();

		let resizeTimeout = null,
			windowWidthOLd = window.innerWidth;

		window.addEventListener("resize", () => {

			window.requestAnimationFrame( () => {

				if (resizeTimeout === null) {

					resizeTimeout = setTimeout( () => {

						resizeTimeout = null;

						if(windowWidthOLd !== window.innerWidth) {

							resize();

						}

					}, 100);

				}

			});

		});

		// end resize


		// клик по level2 => раскрытие level3

		[...linkBtn].forEach( btn => {

			btn.addEventListener('click', event => {

				if ( event.target.closest('[role="button"]') ) {

					event.preventDefault();

					btn.classList.toggle('is-open');

				}

			});

		});

		// mobile

		// клик по level2 => раскрытие level3

		[...level_1].forEach( btn => {

			btn.addEventListener('click', event => {

				if ( window.innerWidth < 1250 && event.target.closest('[role="button"]') ) {

					event.preventDefault();

					scrollLevel2 = window.pageYOffset;

					back.innerHTML = btn.innerHTML;
					body.innerHTML = btn.nextElementSibling.innerHTML;

					window.requestAnimationFrame( () => {

						back.classList.remove('hide');
						body.classList.remove('hide');

					});

				}

			});

		});

		// back

		back.addEventListener('click', () => {

			window.requestAnimationFrame( () => {

				back.classList.add('hide');
				body.classList.add('hide');

				window.scrollTo(0,scrollLevel2);

			});

		});

		// body

		body.addEventListener('click', event => {

			const btn = event.target.closest('.is-btn');

			if ( btn && event.target.closest('[role="button"]') ) {

				event.preventDefault();

				btn.classList.toggle('is-open');

			}

		});

	}

})(document.querySelector('.menu-catalog'));

// toogle
( menu => {

	// btn toggle

	let windowScroll = null;

	( btns => {

		[...btns].forEach( btn => {

			btn.addEventListener('click', () => {

				windowScroll = window.pageYOffset;

				document.body.classList.add('menu-show');
				document.documentElement.classList.add('scroll-behavior-off');
				window.scrollTo(0,0);

			});

		});

	})(document.querySelectorAll('.btn-menu-open'));

	( btns => {

		[...btns].forEach( btn => {

			btn.addEventListener('click', () => {

				document.body.classList.remove('menu-show');
				window.scrollTo(0,windowScroll);

				setTimeout( () => document.documentElement.classList.remove('scroll-behavior-off') );

			});

		});

	})(document.querySelectorAll('.btn-menu-close'));

})(document.querySelector('.menu-catalog'));

// page-bar
( btn => {

	if ( btn ) {

		btn.addEventListener('click', () => {

			btn.classList.toggle('is-open');

		});

		window.addEventListener("click", event => {

			if ( event.target.closest('.page-bar__menu, .lk-menu') === null ) {

				btn.classList.remove('is-open');

			}

		});

	}

})(document.querySelector('.page-bar__menu-btn, .lk-menu__toggle-btn'));
( modal => {

	if(!modal) {

		return;

	}

	const items = modal.querySelectorAll('.modal__item'),
		  wrapper = document.querySelector('.wrapper'),
		  menu = document.querySelector('.menu-catalog'),
		  header = document.querySelector('.header'),
		  titleDefault = {};

	let activeModal = null,
		menuTop = null,
		headerTop = null,
		windowScroll = window.pageYOffset;

	modal.addEventListener('hide', () => {

		activeModal && activeModal.dispatchEvent(new Event("modalClose"));

		document.body.classList.remove('modal-show');
		wrapper.style.top = 0;
		window.scrollTo(0,windowScroll);
		activeModal = false;

		menu.removeAttribute('style');
		header.removeAttribute('style');

		window.requestAnimationFrame( () => {

			document.documentElement.classList.remove('scroll-behavior-off');

		});

	});

	modal.addEventListener('keyup', event => {

		if(event.key === "Escape") {

			modal.dispatchEvent(new Event("hide"));

		}

	});

	const modalShow = (selector,title,id) => {

		if(!activeModal){

			windowScroll = window.pageYOffset;

			if ( header.classList.contains('is-fixed') ) {

				menuTop = parseInt(getComputedStyle(menu).top),
				headerTop = parseInt(getComputedStyle(header).top);

			}

		}

		activeModal = modal.querySelector('.modal__item--' + selector);

		const autofocus = activeModal.classList.contains('is-autofocus');

		if ( activeModal.querySelector('.modal__title') ) {

			if ( titleDefault[selector] === undefined ) {

				titleDefault[selector] = activeModal.querySelector('.modal__title').textContent;

			}

			activeModal.querySelector('.modal__title').textContent = title ? title : titleDefault[selector];

			if ( activeModal.elements.subject ) {

				activeModal.elements.subject.value = title ? title : titleDefault[selector];

			}

		}

		if ( activeModal.classList.contains('form') && activeModal.elements.id ) {

			activeModal.elements.id.value = id;

		}

		[...items].forEach( el => el.classList.toggle('visuallyhidden', el !== activeModal) );

		document.documentElement.classList.add('scroll-behavior-off');

		window.requestAnimationFrame( () => {

			wrapper.style.top = -windowScroll + 'px';

			if ( header.classList.contains('is-fixed') ) {

				menu.style.top = windowScroll + menuTop + 'px';
				header.style.top = windowScroll + headerTop + 'px';

			}

			document.body.classList.add('modal-show');

			window.requestAnimationFrame( () => {

				window.scrollTo(0,0);

				activeModal.focus();

				if ( autofocus ) {

					activeModal.querySelector('.input').focus();

				}

			});

		});

	};

	modal.addEventListener('click', event => {

		if( event.target.classList.contains('modal') || event.target.closest('.modal__close')){

			modal.dispatchEvent(new Event("hide"));

		}

	});

	document.addEventListener('click', event => {

		let target = event.target;

		while (target !== document && target !== null) {

			if (target.hasAttribute('data-modal')) {

				modalShow(
					target.getAttribute('data-modal'),
					target.getAttribute('data-title'),
					target.getAttribute('data-id')
				);

			}

			target = target.parentNode;

		}

	});

	modal.addEventListener('modalShow', event => modalShow(event.detail.selector));

})(document.querySelector('.modal'));

( form => {

	if( form ) {

		const steps = form.querySelectorAll('.order__step'),
			  navLinks = form.querySelectorAll('.order__steps a');

		// hash

		const setStage = ()=> {

			const hash = location.hash;

			[...steps].forEach( step => {

				step.classList.toggle('hide', step.getAttribute('data-hash') !== hash.slice(1) );

			});

			[...navLinks].forEach( link => {

				link.classList.toggle('is-active', link.getAttribute('href') === hash );

			});


			if( form.getBoundingClientRect().top < document.querySelector('.header').clientHeight ) {

				form.scrollIntoView({ behavior: 'smooth' });

			}

		}

		window.addEventListener('hashchange', setStage);

		if ( location.hash ) {

			setTimeout( setStage );

		}

	};

})(document.querySelector('.order'));

( btnPageUp => {

	if (btnPageUp) {

		btnPageUp.addEventListener('click', () => document.body.scrollIntoView({behavior: "smooth"}));

	}

})(document.querySelector('.page-up'));
( elements => {

	if(elements.length === 0) {

		return;

	}

	[...elements].forEach( dropdown => {

		const mask = dropdown.querySelector('.phone-country__mask'),
			  value = dropdown.querySelector('.phone-country__value'),
			  radio = dropdown.querySelectorAll('.phone-country__radio');

		[...radio].forEach( btn => {

			btn.addEventListener("change", () => {

				let placeholder = btn.getAttribute('data-mask');
				placeholder = placeholder.replace(/\\9/g, '$');
				placeholder = placeholder.replace(/9/g, '-');
				placeholder = placeholder.replace(/\$/g, '9');

				mask.setAttribute('placeholder', placeholder);
				mask.value = '';

				Inputmask(btn.getAttribute('data-mask')).mask(mask);

				let maskInput;

				maskInput = new Inputmask({
					mask: btn.getAttribute('data-mask'),
					placeholder: '-'
				});

				maskInput.mask(mask);

				mask.focus();

				value.textContent = btn.value;

			});

		});

	});

	window.addEventListener("click", event => {

		const isDropdown = event.target.closest('.phone-country__btn') ? event.target.closest('.phone-country') : null;

		[...elements].forEach( dropdown => {

			dropdown.classList.toggle('is-open', dropdown === isDropdown && isDropdown.classList.contains('is-open') === false );

		});

	});

})(document.querySelectorAll('.phone-country'));
( items => {

	if ( items.length ) {

		pickmeup.defaults.locales['ru'] = {
			days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
			daysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
			daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
			months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
			monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек']
		};

//		locale

		[...items].forEach( calendar => {

			const input = calendar.querySelector('.calendar__input'),
				  minDate = new Date(input.getAttribute('min')),
				  maxDate = new Date(input.getAttribute('max'));

			const pickmeupCalendar = pickmeup(calendar, {

				flat: true,
				min: minDate,
				max: maxDate,
				select_month: false,
				select_year: false,
				title_format: 'B',
				format: 'Y-m-d',
				locale: 'ru',
				prev: '<svg width="24" height="24" viewBox="0 0 24 24"><use xlink:href="#svg-arrow-chevron-left"/></svg>',
				next: '<svg width="24" height="24" viewBox="0 0 24 24"><use xlink:href="#svg-arrow-chevron-right"/></svg>'

			});

			calendar.addEventListener('pickmeup-change', () => {

				input.value = pickmeupCalendar.get_date(true);

			});

		});

	}

})(document.querySelectorAll('.calendar'));
( form => {

	if ( form ) {

		let modalFormTarget = null;

		document.addEventListener('click', event => {

			// выбор цвета в товаре или в карточке

			const productColor = event.target.closest('.js-modal-color');

			if (productColor) {

				const cardProduct = productColor.closest('.product') || productColor.closest('.preview-card'),
					  formProduct = cardProduct.querySelector('.product-buy') || cardProduct.querySelector('.preview-card__form'),
					  inputId = document.createElement('input');

				inputId.name = 'id';
				inputId.type = 'hidden';
				setTimeout( () => inputId.value = formProduct.elements.id.value);

				modalFormTarget = formProduct.querySelector('.preview-card__modal-color');

				form.innerHTML = modalFormTarget.innerHTML;
				form.insertAdjacentElement('afterbegin', inputId);

				const eventModalShow = new CustomEvent("modalShow", {
					detail: {
						selector: "preview-card-color"
					}
				});

				window.modal.dispatchEvent(eventModalShow);

			}

		});

		// обратно вставляем модалку в товар

		form.addEventListener('modalClose', event => {

			form.elements.id.remove();

			[...form.querySelectorAll('.modal-card-color__item-input')].forEach( input => {

				if (input.checked) {

					input.setAttribute('checked','checked');

				} else {

					input.removeAttribute('checked');

				}

			});

			modalFormTarget.innerHTML = form.innerHTML;

		});

		form.addEventListener('change', event => {

			// изменить цвет

			const cardColor = event.target.closest('.modal-card-color__item-input');

			if (cardColor) {

				// set class checked
				const itemChecked = cardColor.closest('.modal-card-color__item'),
					  list = form.querySelectorAll('.modal-card-color__item');

				[...list].forEach( item => {

					item.classList.toggle('is-checked', item === itemChecked);

				});

				const card = event.target.closest('.modal-card-color'),
					  id = card.elements.id.value,
					  articleId = cardColor.value;

				// img

				card.querySelector('.modal-card-color__photo img').setAttribute('src', cardColor.getAttribute('data-src'));
				card.querySelector('.modal-card-color__photo img').setAttribute('srcset', cardColor.getAttribute('data-srcset'));

				// price

				if ( cardColor.getAttribute('data-price-old') ) {

					card.querySelector('.price__old').textContent = cardColor.getAttribute('data-price-old');
					card.querySelector('.price__old').classList.remove('hide');

				} else {

					card.querySelector('.price__old').classList.add('hide');

				}

				card.querySelector('.price__value').textContent = cardColor.getAttribute('data-price');

				// buy

				const buy = cardColor.getAttribute('data-buy'),
					  buyCart = buy === 'in-cart',
					  buyDisabled = buy === 'disabled',
					  buyBtn = buy === null || buyDisabled,
					  templateSubmit = document.querySelector('#modal-card-color-submit-template').innerHTML;

				card.querySelector('.modal-card-color__submit').innerHTML = Mustache.render(templateSubmit, { buyBtn, buyDisabled, buyCart });

				// overlay

				const overlay = cardColor.getAttribute('data-overlay'),
					  overlayTitle = cardColor.getAttribute('data-overlay-title'),
					  overlayText = cardColor.getAttribute('data-overlay-text'),
					  overlayLogin = overlay === 'login',
					  overlayNot = overlay === 'not',
					  elOverlay = card.querySelector('.overlay-disabled');

				if ( elOverlay ) {

					elOverlay.remove();

				}

				card.querySelector('.modal-card-color__photo').insertAdjacentHTML('beforeend', Mustache.render(document.querySelector('#overlay-disabled-template').innerHTML, { overlay, overlayTitle, overlayText, overlayLogin, overlayNot, id, articleId }));

				// availability

				card.querySelector('.modal-card-color__availability').innerHTML = Mustache.render(document.querySelector('#availability-template').innerHTML, { availability: !overlayNot });

			}

		});

	}

})(document.querySelector('#preview-card-color'));
( () => {

	const volumeChange = cardVolume => {

		const card = cardVolume.closest('.preview-card'),
			  id = cardVolume.closest('.preview-card__form').elements.id.value,
			  articleId = cardVolume.value,
			  templateFoot = document.querySelector('#preview-card-foot-template').innerHTML,
			  templateFlag = document.querySelector('#preview-card-flag-template').innerHTML,
			  templateLabel = document.querySelector('#preview-card-label-template').innerHTML,
			  templatePrice = document.querySelector('#price-template').innerHTML,
			  templateOverlay = document.querySelector('#overlay-disabled-template').innerHTML;

		// кнопка купить и избранное

		const buy = cardVolume.getAttribute('data-buy'),
			  buyCart = buy === 'in-cart',
			  buyDisabled = buy === 'disabled',
			  buyBtn = buy === null || buyDisabled,
			  favourite = cardVolume.getAttribute('data-favourite');

		card.querySelector('.preview-card__foot').innerHTML = Mustache.render(templateFoot, { buyBtn, buyDisabled, buyCart, favourite });

		// цена

		const price = cardVolume.getAttribute('data-price'),
			  priceOld = cardVolume.getAttribute('data-price-old');

		card.querySelector('.preview-card__price').innerHTML = Mustache.render(templatePrice, { price, priceOld });

		// флаг

		const flag = cardVolume.getAttribute('data-flag'),
			  flagColor = cardVolume.getAttribute('data-flag-color'),
			  cardFlag = card.querySelector('.preview-card__flag');

		if (cardFlag) {

			cardFlag.remove();

		}

		card.querySelector('.preview-card__head').insertAdjacentHTML('beforeend', Mustache.render(templateFlag, { flag, flagColor }));

		// label

		const sale = cardVolume.getAttribute('data-label-sale'),
			  discount = cardVolume.getAttribute('data-label-discount'),
			  gift = cardVolume.getAttribute('data-label-gift'),
			  elLabel = card.querySelector('.preview-card__label');

		if ( elLabel ) {

			elLabel.remove();

		}

		card.querySelector('.preview-card__head').insertAdjacentHTML('beforeend', Mustache.render(templateLabel, { sale, discount, gift }));

		// overlay

		const overlay = cardVolume.getAttribute('data-overlay'),
			  overlayTitle = cardVolume.getAttribute('data-overlay-title'),
			  overlayText = cardVolume.getAttribute('data-overlay-text'),
			  overlayLogin = overlay === 'login',
			  overlayNot = overlay === 'not',
			  overlayWithdrawn = overlay === 'withdrawn',
			  elOverlay = card.querySelector('.overlay-disabled');

		if ( elOverlay ) {

			elOverlay.remove();

		}

		card.querySelector('.preview-card__head').insertAdjacentHTML('beforeend', Mustache.render(templateOverlay, { overlay, overlayTitle, overlayText, overlayLogin, overlayNot, overlayWithdrawn, id, articleId }));

	}

	document.addEventListener('change', event => {

		// изменить объём
		const cardVolume = event.target.closest('.preview-card__volume-input');

		if (cardVolume) {

			volumeChange(cardVolume);

		}

		// изменить объём в мобильном
		const cardVolumeMobile = event.target.closest('.preview-card__volume-select');

		if (cardVolumeMobile) {

			const value = cardVolumeMobile.value,
				  card = cardVolumeMobile.closest('.preview-card'),
				  inputBtn = card.querySelectorAll('.preview-card__volume-input');

			[...inputBtn].forEach( el => {

				if ( el.getAttribute('value') === value ) {

					el.checked = true;

					volumeChange(el);

				} else {

					el.checked = false;

				}

			});

		}

	});

})();
( product => {

	if( product ) {

		// param

		if ( window.innerWidth < 768 ) {

			const btn = product.querySelector('.product__open-tab .btn');

			btn.addEventListener('click', event => {

				event.preventDefault();

				btn.closest('.product__specs').classList.toggle('is-open');

			});

		}

		// hash

		const setTab = ()=> {

			const tabItem = document.querySelector(location.hash).closest('.tabs__item');

			if ( tabItem ) {

				tabItem.dispatchEvent(new Event("setActive"));

			}

		}

		window.addEventListener('hashchange', setTab);

		if ( location.hash ) {

			setTimeout( setTab );

		}

		// gallery

		const gallery = product.querySelector('.product-gallery');
			  galleryPreview = product.querySelectorAll('.product-gallery__preview-link');

		const setActiveImg = link => {

			let index = null;

			[...galleryPreview].forEach( (_link,_index) => {

				_link.parentNode.classList.toggle('is-current', _link === link);

				if ( _link === link ) {

					index = _index;

				}

			});

			product.querySelector('.swiper-container--product').swiper.slideToLoop(index);

		}

		gallery.addEventListener('click', event => {

			const targetLink = event.target.closest('a');

			if ( targetLink ) {

				event.preventDefault();

				if ( targetLink.classList.contains('product-gallery__preview-link') ) {

					setActiveImg(targetLink);

				}

			}

		});

		// volume

		const volumeChange = cardVolume => {


			const form = cardVolume.closest('.product-buy'),
				  id = form.elements.id.value,
				  articleId = cardVolume.value,
				  templateFoot = document.querySelector('#product-buy-submit-template').innerHTML,
				  templateFavourite = document.querySelector('#product-buy-favourite-template').innerHTML,
				  templatePrice = document.querySelector('#price-template').innerHTML,
				  templateAvailability = document.querySelector('#availability-template').innerHTML,
				  templateOverlay = document.querySelector('#overlay-disabled-template').innerHTML,
				  templateBoardLogin = document.querySelector('#product-login-template').innerHTML;

			// volume -> gallery

			[...galleryPreview].forEach( link => {

				if ( link.getAttribute('data-articleid') === articleId ) {

					setActiveImg(link);

				}

			});

			// кнопка избранное

			const favourite = cardVolume.getAttribute('data-favourite');

			form.querySelector('.product-buy__favourite').innerHTML = Mustache.render(templateFavourite, { favourite });

			// overlay

			const overlay = cardVolume.getAttribute('data-overlay'),
				  overlayTitle = cardVolume.getAttribute('data-overlay-title'),
				  overlayText = cardVolume.getAttribute('data-overlay-text'),
				  overlayLogin = overlay === 'login',
				  overlayNot = overlay === 'not',
				  overlayWithdrawn = overlay === 'withdrawn',
				  elOverlay = product.querySelector('.overlay-disabled'),
				  boardLogin = product.querySelector('.board-login');

			if ( elOverlay ) {

				elOverlay.remove();

			}

			if ( overlayLogin ) {

				if ( boardLogin === null ) {

					product.querySelector('.product-buy__price').insertAdjacentHTML('afterend', Mustache.render(templateBoardLogin));

					const tooltip = product.querySelector('.board-login .tooltip');

					if ( tooltip ) {

						new Tooltip(tooltip);

					}

				}

			} else {

				if ( boardLogin ) {

					boardLogin.remove();

				}

				product.querySelector('.product-gallery__wrap').insertAdjacentHTML('beforeend', Mustache.render(templateOverlay, { overlay, overlayTitle, overlayText, overlayLogin, overlayNot, overlayWithdrawn, id, articleId }));

			}

			// цена

			const price = cardVolume.getAttribute('data-price'),
				  priceOld = cardVolume.getAttribute('data-price-old');

			form.querySelector('.product-buy__price').innerHTML = Mustache.render(templatePrice, { price, priceOld });

			// кнопка купить

			const buy = cardVolume.getAttribute('data-buy'),
				  buyCart = buy === 'in-cart',
				  buyDisabled = buy === 'disabled',
				  buyBtn = buy === null || buyDisabled,
				  btnLogin = overlayLogin;

			if ( btnLogin ) {

				form.querySelector('.product-buy__submit').innerHTML = Mustache.render(templateFoot, { btnLogin });

			} else {

				form.querySelector('.product-buy__submit').innerHTML = Mustache.render(templateFoot, { buyBtn, buyDisabled, buyCart });

			}

			// availability

			form.querySelector('.product-buy__availability').innerHTML = Mustache.render(templateAvailability, { availability: !overlayNot });

		}

		document.addEventListener('change', event => {

			// изменить объём
			const cardVolume = event.target.closest('.product-buy__volume-input');

			if (cardVolume) {

				volumeChange(cardVolume);

			}

			// изменить объём в мобильном
			const cardVolumeMobile = event.target.closest('.product-buy__volume-select');

			if (cardVolumeMobile) {

				const value = cardVolumeMobile.value,
					  card = cardVolumeMobile.closest('.product-buy'),
					  inputBtn = card.querySelectorAll('.product-buy__volume-input');

				[...inputBtn].forEach( el => {

					if ( el.getAttribute('value') === value ) {

						el.checked = true;

						volumeChange(el);

					} else {

						el.checked = false;

					}

				});

			}

		});

		// Протокол

		const formSet = product.querySelectorAll('.preview-card__form-set');

		if ( formSet.length > 0 ) {

			const templateAddMode = document.querySelector('#product-set-addmode-template').innerHTML;

			[...formSet].forEach( form => {

				const mode = form.elements.mode,
					  btnWrap = form.querySelector('.preview-card__form-set-btn-add');

				form.addEventListener('submit', event => {

					event.preventDefault();
					console.log('В этой части ничего не делал, кроме смены кнопки. Могу убрать обработчик или написать что необходимо: переключение кнопок и т.п.');

					if ( mode.value === 'add' ) { // тут надо смотреть, что вернули: add | remove

						mode.value = 'remove';

						btnWrap.innerHTML = Mustache.render(templateAddMode, { remove : true });

					} else {

						mode.value = 'add';

						btnWrap.innerHTML = Mustache.render(templateAddMode, { add : true });

					}

				});

			});

		}

		// select volume

		const btnsSelect = product.querySelectorAll('.product-buy__select-btn');
		const btnsSelectToggle = product.querySelector('.product-buy__select-btn--open');

		if ( btnsSelectToggle ) {

			const form = btnsSelectToggle.closest('.product-buy'),
				  templatePrice = document.querySelector('#price-template').innerHTML;

			[...btnsSelect].forEach( btn => {

				btn.addEventListener('click', () => {

					if ( btn === btnsSelectToggle ) {

						// кнопка открытия

						btn.classList.toggle('is-open');

					}
					else {

						// выпадашка

						btnsSelectToggle.classList.remove('is-open');

						[...btnsSelect].forEach( _btn => {

							if ( _btn === btn ) {

								_btn.classList.add('is-current');

								form.elements.id.value = btn.getAttribute('data-id');

								btnsSelectToggle.querySelector('.product-buy__select-img img').src = btn.querySelector('.product-buy__select-img img').src;

								btnsSelectToggle.querySelector('.product-buy__select-name').textContent = btn.querySelector('.product-buy__select-name').textContent;

								const price = btn.getAttribute('data-price'),
									  priceOld = btn.getAttribute('data-price-old');

								form.querySelector('.product-buy__price').innerHTML = Mustache.render(templatePrice, { price, priceOld });

							}
							else {

								_btn.classList.remove('is-current');

							}

						});

					}

				});

			});

			window.addEventListener("click", event => {

				if ( event.target.closest('.product-buy__select') === null ) {

					btnsSelectToggle.classList.remove('is-open');

				}

			});

		}

	}

})(document.querySelector('.product'));
( ()=> {

	const readmoreToggle = block => {

		const btn = block.querySelector('.readmore-text__btn'),
			  textClose = btn.textContent;

		const toggle = () => {

			if ( block.classList.contains('is-open') ) {

				block.classList.remove('is-open');
				btn.textContent = textClose;

			} else {

				block.classList.add('is-open');
				btn.textContent = btn.getAttribute('data-alt');

			}

		}

		btn.addEventListener('click', toggle);

	};

	( blocks => {

		if(blocks.length) {

			[...blocks].forEach( block => readmoreToggle(block) );

		}

	})(document.querySelectorAll('.readmore-text'));

	// content

	( blocks => {

		if(blocks.length) {

			const init = ()=> {

				const template = document.querySelector('#readmore-template').innerHTML;

				[...blocks].forEach( block => {

					// continue

					if ( block.classList.contains('is-readmore-off') ) {

						return;

					}

					// перемещаем в конец

					const main = block.parentNode.classList.contains('main') ? block.parentNode : false;

					if ( main ) {

						main.append(block);

					}

					// readmore

					let append = null;

					const hr = block.querySelector('.readmore-hr');

					[...block.children].forEach( el => {

						if ( el.classList.contains('readmore-hr') || ( !hr && ( el.tagName === 'H2' || el.tagName === 'H3') ) ) {

							console.log(el.tagName);

							if ( append === null ) {

								block.insertAdjacentHTML('beforeend', template);

								append = block.querySelector('.readmore-text__body');

							}

						}

						if( append ) {

							append.append(el);

						}

					});

					if ( hr ) {

						hr.remove();

					}

					if ( append ) {

						readmoreToggle(block.querySelector('.readmore-text'));

					}

				});

			}

			setTimeout( () => init(), localStorage.getItem('fastLoadScript') ? 0 : 10000);

		}

	})(document.querySelectorAll('.content'));

})();
( review => {

	if( review ) {

		// sub

		const btnToggleSub = review.querySelectorAll('.review__toggle-sub');

		[...btnToggleSub].forEach( btn => {

			const group = btn.closest('.review__group'),
				  textDefault = btn.innerHTML;

			btn.addEventListener('click', () => {

				if ( group.classList.contains('is-open') ) {

					group.classList.remove('is-open');
					btn.innerHTML = textDefault;

				} else {

					group.classList.add('is-open');
					btn.textContent = btn.getAttribute('data-alt');

				}

			});

		});

	}

})(document.querySelector('.review'));
window.selects = select => {

	if(select.querySelector('.select__list')) {

		return;

	}
	const template = document.querySelector('#select-template').innerHTML,
		  form = select.closest('form'),
		  control = select.querySelector('select'),
		  option = select.querySelectorAll('option'),
		  filter = select.classList.contains('select--filter'),
		  list = [];

	const valueDefault = control.querySelector('[value="' + control.value + '"]').textContent;

	if( control.disabled || control.value === 'none' || control.value === '' ){

		select.classList.add('is-default');

	}

	[...option].forEach( el => {

		if ( el.value === 'none' || el.value === '' ) {

			return;

		}

		list.push({
			name  : control.name,
			label : el.textContent,
			value : el.value,
			checked : control.value === el.value
		});

	});

	select.innerHTML = Mustache.render(template, { valueDefault, list, filter });

	const fieldset = select.querySelector('.select__list'),
		  valueText = select.querySelector('.select__value-inner');

	fieldset.addEventListener('change', event => {

		if( event.target.tagName === 'INPUT' ) {

			const item = event.target.parentNode;

			valueText.textContent = item.textContent;

		}

	});

	form && form.addEventListener("reset", () => {

		select.classList.add('is-default');
		valueText.textContent = valueDefault;

	});

	if ( filter ) {

		return;

		const inputFilter = select.querySelector('.select__filter');

		inputFilter.addEventListener('input', () => {

			const value = inputFilter.value.toLowerCase();

			if(value.length > 0) {

				const list = fieldset.querySelectorAll('.select__list-item');

				[...list].forEach( o => {

					const text = o.textContent.trim().toLowerCase();

					o.classList.toggle('hide', text.includes(value));

				});

				if( list.length === fieldset.querySelectorAll('.select__list-item.hide').length ) {

					select.classList.add('select--filter-empty');

				} else {

					select.classList.remove('select--filter-empty');

				}

			} else {

				[...list].forEach( o => o.classList.remove('hide') );
				select.classList.remove('select--filter-empty');

			}

		});

	}

};

( items => {

	if(items.length) {

		[...items].forEach( select => window.selects(select));

	}

	window.addEventListener("click", event => {

		const isSelect = event.target.closest('.select');

		[...document.querySelectorAll('.select')].forEach( select => {

			if ( select === isSelect ) {

				if ( event.target.closest('.select__value') ) {

					select.classList.toggle('is-open');

				} else if ( event.target.tagName === 'INPUT' ) {

					select.classList.remove('is-open');

				}

			} else {

				select.classList.remove('is-open');

			}

		});

	});

})(document.querySelectorAll('.select'));
( swiperContainer => {

	if(!swiperContainer.length) {

		return;

	}

	[...swiperContainer].forEach( swipe => {

		let mySwipe = null,
			toggleSwipe = null,
			resetSwipe = null;

		const swipeNav = document.createElement('div'),
			  swipeBtns = document.createElement('div'),
			  swipeNext = document.createElement('button'),
			  swipePrev = document.createElement('button'),
			  items = swipe.querySelectorAll('.swiper-slide'),
			  count = items.length,
			  billboard = swipe.classList.contains('swiper-container--billboard'),
			  news = swipe.classList.contains('swiper-container--news'),
			  preview = swipe.classList.contains('swiper-container--preview'),
			  product = swipe.classList.contains('swiper-container--product'),
			  certificates = swipe.classList.contains('swiper-container--certificates'),
			  consultations = swipe.classList.contains('swiper-container--consultations'),
			  productArticle = swipe.classList.contains('swiper-container--product-article');

		swipeNav.className = 'swiper-pagination';

		swipeBtns.className = 'swiper-navigation';
		swipePrev.className = 'swiper-button-prev button';
		swipeNext.className = 'swiper-button-next button';

		swipePrev.setAttribute('aria-label','Previous slide');
		swipeNext.setAttribute('aria-label','Next slide');

		swipePrev.innerHTML = '<svg width="40" height="40" viewBox="0 0 24 24"><use xlink:href="#svg-arrow-chevron-left"/></svg>';
		swipeNext.innerHTML = '<svg width="40" height="40" viewBox="0 0 24 24"><use xlink:href="#svg-arrow-chevron-right"/></svg>';

		swipeBtns.append(swipePrev);
		swipeBtns.append(swipeNext);

		swipe.append(swipeBtns);
		swipe.append(swipeNav);

		resetSwipe = () => {

			if(mySwipe) {

				mySwipe.destroy(false,true);
				mySwipe = undefined;

			}

			swipeNav.classList.add('hide');
			swipeBtns.classList.add('hide');

			if ( swipe.closest('.swiper-container-style') ) {

				swipe.closest('.swiper-container-style').classList.remove('swiper-container-style');

			}

		}

		if (news) {

			swipe.parentNode.append(swipeBtns);
			swipe.parentNode.append(swipeNav);

			toggleSwipe = () => {

				resetSwipe();

				if ( window.innerWidth >= 1250 && count < 5 ) {

					return;

				}

				swipeNav.classList.remove('hide');
				swipeBtns.classList.remove('hide');

				swipe.parentNode.parentNode.classList.add('swiper-container-style');

				const gap = window.innerWidth < 1250 && window.innerWidth > 767 ? 0 : 24;

				mySwipe = new Swiper(swipe, {
					loop: true,
					spaceBetween: gap,
					slidesPerView: 'auto',
					slidesPerGroup: 1,
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

			swipe.addEventListener('swiperResize', toggleSwipe);

		}

		if (consultations) {

			swipe.parentNode.append(swipeBtns);
			swipe.parentNode.append(swipeNav);

			toggleSwipe = () => {

				resetSwipe();

				if ( window.innerWidth >= 1250 && count < 3 ) {

					return;

				}

				swipeNav.classList.remove('hide');
				swipeBtns.classList.remove('hide');

				swipe.parentNode.parentNode.classList.add('swiper-container-style');

				const gap = window.innerWidth < 1250 ? 16 : 48;

				mySwipe = new Swiper(swipe, {
					loop: true,
					spaceBetween: gap,
					slidesPerView: 'auto',
					slidesPerGroup: 1,
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

			swipe.addEventListener('swiperResize', toggleSwipe);

		}

		if (certificates) {

			swipe.parentNode.append(swipeBtns);
			swipe.parentNode.append(swipeNav);

			toggleSwipe = () => {

				resetSwipe();

				if ( window.innerWidth >= 1250 && count < 4 ) {

					return;

				}

				swipeNav.classList.remove('hide');
				swipeBtns.classList.remove('hide');

				swipe.parentNode.parentNode.classList.add('swiper-container-style');

				const gap = window.innerWidth < 768 ? 0 : 24;

				mySwipe = new Swiper(swipe, {
					loop: true,
					spaceBetween: gap,
					slidesPerView: 'auto',
					slidesPerGroup: 1,
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

			swipe.addEventListener('swiperResize', toggleSwipe);

		}

		if (productArticle) {

			swipe.parentNode.append(swipeBtns);
			swipe.parentNode.append(swipeNav);

			toggleSwipe = () => {

				resetSwipe();

				if ( window.innerWidth >= 1250 && count < 4 ) {

					return;

				}

				if ( window.innerWidth >= 768 ) {

					swipeBtns.classList.remove('hide');

				}

				swipeNav.classList.remove('hide');

				swipe.parentNode.parentNode.classList.add('swiper-container-style');

				const centeredSlides = window.innerWidth < 768;

				mySwipe = new Swiper(swipe, {
					rewind: true,
					centeredSlides: centeredSlides,
					slidesPerView: 'auto',
					slidesPerGroup: 1,
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

			swipe.addEventListener('swiperResize', toggleSwipe);

		}

		if (preview) {

			swipe.parentNode.append(swipeBtns);
			swipe.parentNode.append(swipeNav);

			toggleSwipe = () => {

				resetSwipe();

				swipeNav.classList.remove('hide');
				swipeBtns.classList.remove('hide');

				swipe.parentNode.parentNode.classList.add('swiper-container-style');

				const gap = window.innerWidth < 1250 ? 0 : 24;

				mySwipe = new Swiper(swipe, {
					rewind: true,
					spaceBetween: gap,
					slidesPerView: 'auto',
					slidesPerGroup: 1,
//					slidesPerGroupAuto: true,
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

			swipe.addEventListener('swiperResize', toggleSwipe);

		}

		if (billboard) {

			toggleSwipe = () => {

				resetSwipe();

				swipe.parentNode.classList.add('swiper-container-style');

				if( window.innerWidth < 1250 ) {

					swipeNav.classList.remove('hide');

					mySwipe = new Swiper(swipe, {
						loop: true,
						pagination: {
							el: swipeNav,
							clickable: true,
							bulletClass: 'button',
							bulletActiveClass: 'is-active'
						}
					});

				} else {

					swipeBtns.classList.remove('hide');

					mySwipe = new Swiper(swipe, {
						loop: true,
						autoplay: {
							delay: 5000
						},
						effect: 'fade',
						fadeEffect: {
							crossFade: true
						},
						navigation: {
							nextEl: swipeNext,
							prevEl: swipePrev
						}
					});

				}

			}

			swipe.addEventListener('swiperResize', toggleSwipe);

		}

		if (product) {

			swipeNav.classList.add('hide');

			const galleryPreview = document.querySelectorAll('.product-gallery__preview-link');

			toggleSwipe = () => {

				toggleSwipe = false;

				swipe.parentNode.classList.add('swiper-container-style');

				new Swiper(swipe, {
					loop: true,
					navigation: {
						nextEl: swipeNext,
						prevEl: swipePrev
					},
					on: {
						slideChange : () => {

							[...galleryPreview].forEach( (_link,index) => _link.parentNode.classList.toggle('is-current', swipe.swiper.realIndex === index) );

						}
					}
				});

			}

		}

		swipe.addEventListener('swiperJsLoad', toggleSwipe);

	});

	let resizeTimeout = null,
		windowWidthOLd = window.innerWidth;

	window.addEventListener("resize", () => {

		window.requestAnimationFrame( () => {

			if (resizeTimeout === null) {

				resizeTimeout = setTimeout( () => {

					resizeTimeout = null;

					if(windowWidthOLd !== window.innerWidth) {

						windowWidthOLd = window.innerWidth;

						if (window.Swiper) {

							[...swiperContainer].forEach( swipe => swipe.dispatchEvent(new Event("swiperResize")) );

						}

					}

				}, 1000);

			}

		});

	});

	const script = document.createElement('script');

	script.src = '/js/swiper.min.js';

	script.onload = () => [...swiperContainer].forEach( swipe => swipe.dispatchEvent(new Event("swiperJsLoad")) );

	setTimeout( () => document.head.append(script), localStorage.getItem('fastLoadScript') ? 0 : 10000);

})(document.querySelectorAll('.swiper-container'));
( tabs => {

	if ( tabs.length > 0 ) {

		[...tabs].forEach( tab => {

			const select = document.createElement("select"),
				  arrow = document.createElementNS("http://www.w3.org/2000/svg", "svg");

			arrow.setAttributeNS(null, "viewBox", "0 0 24 24");
			arrow.setAttributeNS(null, "width", 24);
			arrow.setAttributeNS(null, "height", 24);

			arrow.innerHTML = '<use xlink:href="#svg-arrow-chevron-down"/>';

			const btns = tab.querySelectorAll('.tabs__btn'),
				  items = tab.querySelectorAll('.tabs__item');

			[...btns].forEach( (btn,index) => {

				btn.appendChild(arrow.cloneNode(true));

				const option = document.createElement("option");
				option.value = index;
				option.textContent = btn.textContent;
				select.append(option);

				btn.addEventListener('click', () => {

					[...btns].forEach( (_btn,_index) => {

						_btn.classList.toggle('is-active', _btn === btn);
						items[_index].classList.toggle('visuallyhidden', _btn !== btn);

					});

				});

			});

			[...items].forEach( item => {

				item.addEventListener('setActive', ()=> {

					[...items].forEach( (_item,_index) => {

						btns[_index].classList.toggle('is-active', _item === item);
						_item.classList.toggle('visuallyhidden', _item !== item);

					});

				});

			});

			select.addEventListener('change', event => {

				const index = parseInt(select.value);

				[...btns].forEach( (btn,_index) => {

					btn.classList.toggle('is-active', _index === index);
					items[_index].classList.toggle('visuallyhidden', _index !== index);

				});

			});

			tab.querySelector('.tabs__nav').prepend(select);

		});

	}

})(document.querySelectorAll('.tabs'));

/*( tabs => {

	if ( tabs.length > 0 ) {

		[...tabs].forEach( tab => {

			const btn = tab.querySelectorAll('.tabs__btn'),
				  item = tab.querySelectorAll('.tabs__item'),
				  nav = document.createElement('div');

			[...btn].forEach( (btn,index) => {

				const _btn = document.createElement('button');

				_btn.setAttribute('type','button');

				_btn.className = index === 0 ? 'btn btn--grey' : 'btn btn--outline';

				_btn.textContent = btn.textContent;

				nav.appendChild(_btn);

				_btn.addEventListener('click', () => {

					[...nav.querySelectorAll('.btn')].forEach( (btn,index) => {

						btn.classList.toggle('btn--grey', _btn === btn);
						btn.classList.toggle('btn--outline', _btn !== btn);

						item[index].classList.toggle('visuallyhidden', _btn !== btn);

					});

				});

				btn.remove();

			});

			nav.classList.add('tabs__nav');
			tab.insertAdjacentElement('afterbegin', nav);

		});

	}

})(document.querySelectorAll('.tabs'));*/
// title

( tooltips => {

	if(tooltips.length){

		[...tooltips].forEach( tooltip => {

			const title = document.createElement('span');

			title.className = 'tooltip-title__inner';
			title.textContent = tooltip.getAttribute('title')

			tooltip.removeAttribute('title');
			tooltip.append(title);

		});

		let timeout = null;

		window.addEventListener("mousemove", event => {

			window.requestAnimationFrame( () => {

				if ( event.target !== document ) {

					const target = event.target.closest('.tooltip-title');

					[...tooltips].forEach( tooltip => {

						if(target !== tooltip) {

							tooltip.classList.remove('is-show');

						}

					});

					if (timeout !== null) {

						clearTimeout(timeout);

					}

					timeout = setTimeout( ()=> {

						if ( target ) {

							target.classList.add('is-show');

						}

					}, 300);

				}

			});

		});

	}

})(document.querySelectorAll('.tooltip-title'));

// tooltip

function Tooltip(tooltip) {

	let observer = new MutationObserver(mutationRecords => {

		const t = mutationRecords[0].target,
			  inner = t.querySelector('.tooltip__inner');

		if(t.open) {

			const rect = inner.getBoundingClientRect();

			if(document.documentElement.clientWidth < rect.right) {

				// левее

				inner.style.marginLeft = document.documentElement.clientWidth - rect.right + 'px';

			} else if(rect.left < 0) {

				// правее

				inner.style.marginLeft = -rect.left + 'px';

			}

		} else {

			inner.removeAttribute('style');

		}

	});

	const btn = tooltip.querySelector('.tooltip__btn');

	observer.observe(tooltip, {

		attributes : true

	});

	tooltip.addEventListener('mouseenter', () => {

		if ( window.innerWidth >= 1250 ) {

			tooltip.open = true;

		}

	});

	tooltip.addEventListener('mouseleave', () => {

		if ( window.innerWidth >= 1250 ) {

			tooltip.open = false;

		}

	});

}

( tooltips => {

	if( tooltips.length ) {

		window.addEventListener("click", event => {

			if ( event.target !== document ) {

				const target = event.target.closest('.tooltip');

				[...document.querySelectorAll('.tooltip')].forEach( tooltip => {

					if(target !== tooltip) {

						tooltip.open = false;

					}

				});

			}

		});

		[...tooltips].forEach( tooltip => new Tooltip(tooltip));

	}

})(document.querySelectorAll('.tooltip'));
( toster => {

	if(toster){

		let cookies = document.cookie.split("; "),
			cookiesValue = null;

		for (let i = 0; i < cookies.length; i++) {

			let cookie = cookies[i].split("=");

			if (cookie[0] === "toster") {

				cookiesValue = cookie[1];

				break;

			}

		}

		const btn = toster.querySelector('.toster__close');
		const nameCurrent = toster.getAttribute('data-name');

		if ( cookiesValue !== null && cookiesValue.split("|").includes(nameCurrent) ) {

			toster.remove();

		}
		else {

			btn.addEventListener("click", () => {

				cookiesValue = cookiesValue === null ? nameCurrent : cookiesValue + '|' + nameCurrent;

				document.cookie = "toster=" + cookiesValue + "; path=/";

				toster.remove();

			});

		}

	}

})(document.querySelector('.toster'));
( videos => {

	if(videos.length){

		function YouTubeGetID(url) {

			let ID = '';

			url = url.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);

			if(url[2] !== undefined) {

				ID = url[2].split(/[^0-9a-z_\-]/i);
				ID = ID[0];

			} else {

				ID = url;

			}

			return ID;

		}

		if ( videos.length > 1 ) {

			// Inject YouTube API script
			const script = document.createElement('script');
			script.src = "https://www.youtube.com/player_api";
			document.head.append(script);

		}

		window.addEventListener("click", event => {

			const clipPreview = event.target.closest('.video-clip__link');

			if ( clipPreview ) {

				event.preventDefault();

				const iframe = document.createElement('iframe');

				iframe.setAttribute('allowfullscreen', '');
				iframe.setAttribute('src', 'https://www.youtube.com/embed/' + YouTubeGetID(clipPreview.href) + '?rel=0&showinfo=0&autoplay=1&enablejsapi=1&html5=1');

				clipPreview.parentNode.append(iframe);
				clipPreview.parentNode.classList.add('is-iframe');

				if ( videos.length > 1 ) {

					[...document.querySelectorAll('.video-clip.is-iframe')].forEach( video => {

						if ( clipPreview.parentNode === video ) {

							return;

						}

						const iframe = video.querySelector('iframe');

						if ( iframe ) {

							let player = new YT.Player(iframe, {
								events: {
									onReady: () => {
										player.pauseVideo();
									}
								}
							});

						}

					});

				}

			}

		});

	}

})(document.querySelectorAll('.video-clip'));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dG9zaXplLm1pbi5qcyIsImNsaXBib2FyZC5taW4uanMiLCJtdXN0YWNoZS5taW4uanMiLCJwaWNrbWV1cC5taW4uanMiLCJqcy5qcyIsImFjY29yZGlvbi5qcyIsImFydGljbGUuanMiLCJicmFuZHMuanMiLCJjYXJ0LmpzIiwiY29uc3VsdGF0aW9ucy5qcyIsImRlYWRsaW5lLmpzIiwiZXZlbnRzLmpzIiwiZmlsdGVyLXJvdy5qcyIsImZpbHRlci5qcyIsImZvcm0uanMiLCJoZWFkZXIuanMiLCJpbnB1dG1hc2suanMiLCJsay5qcyIsIm1lbnUuanMiLCJtb2RhbC5qcyIsIm5ld3MuanMiLCJvcmRlci5qcyIsInBhZ2UtdXAuanMiLCJwaG9uZS1jb3VudHJ5LmpzIiwicGlja21ldXAuanMiLCJwcmV2aWV3LWNhcmQtY29sb3IuanMiLCJwcmV2aWV3LWNhcmQtdm9sdW1lLmpzIiwicHJvZHVjdC5qcyIsInJlYWRtb3JlLXRleHQuanMiLCJyZXZpZXcuanMiLCJzZWxlY3QuanMiLCJzd2lwZXIuanMiLCJ0YWJzLmpzIiwidG9vbHRpcC5qcyIsInRvc3Rlci5qcyIsInZpZGVvLWNsaXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTkE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaktBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaktBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDelZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKHQpOihlfHxzZWxmKS5hdXRvc2l6ZT10KCl9KHRoaXMsZnVuY3Rpb24oKXt2YXIgZSx0LG49XCJmdW5jdGlvblwiPT10eXBlb2YgTWFwP25ldyBNYXA6KGU9W10sdD1bXSx7aGFzOmZ1bmN0aW9uKHQpe3JldHVybiBlLmluZGV4T2YodCk+LTF9LGdldDpmdW5jdGlvbihuKXtyZXR1cm4gdFtlLmluZGV4T2YobildfSxzZXQ6ZnVuY3Rpb24obixvKXstMT09PWUuaW5kZXhPZihuKSYmKGUucHVzaChuKSx0LnB1c2gobykpfSxkZWxldGU6ZnVuY3Rpb24obil7dmFyIG89ZS5pbmRleE9mKG4pO28+LTEmJihlLnNwbGljZShvLDEpLHQuc3BsaWNlKG8sMSkpfX0pLG89ZnVuY3Rpb24oZSl7cmV0dXJuIG5ldyBFdmVudChlLHtidWJibGVzOiEwfSl9O3RyeXtuZXcgRXZlbnQoXCJ0ZXN0XCIpfWNhdGNoKGUpe289ZnVuY3Rpb24oZSl7dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJFdmVudFwiKTtyZXR1cm4gdC5pbml0RXZlbnQoZSwhMCwhMSksdH19ZnVuY3Rpb24gcihlKXt2YXIgdD1uLmdldChlKTt0JiZ0LmRlc3Ryb3koKX1mdW5jdGlvbiBpKGUpe3ZhciB0PW4uZ2V0KGUpO3QmJnQudXBkYXRlKCl9dmFyIGw9bnVsbDtyZXR1cm5cInVuZGVmaW5lZFwiPT10eXBlb2Ygd2luZG93fHxcImZ1bmN0aW9uXCIhPXR5cGVvZiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZT8oKGw9ZnVuY3Rpb24oZSl7cmV0dXJuIGV9KS5kZXN0cm95PWZ1bmN0aW9uKGUpe3JldHVybiBlfSxsLnVwZGF0ZT1mdW5jdGlvbihlKXtyZXR1cm4gZX0pOigobD1mdW5jdGlvbihlLHQpe3JldHVybiBlJiZBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGUubGVuZ3RoP2U6W2VdLGZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbihlKXtpZihlJiZlLm5vZGVOYW1lJiZcIlRFWFRBUkVBXCI9PT1lLm5vZGVOYW1lJiYhbi5oYXMoZSkpe3ZhciB0LHI9bnVsbCxpPW51bGwsbD1udWxsLGQ9ZnVuY3Rpb24oKXtlLmNsaWVudFdpZHRoIT09aSYmYygpfSx1PWZ1bmN0aW9uKHQpe3dpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsZCwhMSksZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiaW5wdXRcIixjLCExKSxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLGMsITEpLGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImF1dG9zaXplOmRlc3Ryb3lcIix1LCExKSxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhdXRvc2l6ZTp1cGRhdGVcIixjLCExKSxPYmplY3Qua2V5cyh0KS5mb3JFYWNoKGZ1bmN0aW9uKG4pe2Uuc3R5bGVbbl09dFtuXX0pLG4uZGVsZXRlKGUpfS5iaW5kKGUse2hlaWdodDplLnN0eWxlLmhlaWdodCxyZXNpemU6ZS5zdHlsZS5yZXNpemUsb3ZlcmZsb3dZOmUuc3R5bGUub3ZlcmZsb3dZLG92ZXJmbG93WDplLnN0eWxlLm92ZXJmbG93WCx3b3JkV3JhcDplLnN0eWxlLndvcmRXcmFwfSk7ZS5hZGRFdmVudExpc3RlbmVyKFwiYXV0b3NpemU6ZGVzdHJveVwiLHUsITEpLFwib25wcm9wZXJ0eWNoYW5nZVwiaW4gZSYmXCJvbmlucHV0XCJpbiBlJiZlLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLGMsITEpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsZCwhMSksZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIixjLCExKSxlLmFkZEV2ZW50TGlzdGVuZXIoXCJhdXRvc2l6ZTp1cGRhdGVcIixjLCExKSxlLnN0eWxlLm92ZXJmbG93WD1cImhpZGRlblwiLGUuc3R5bGUud29yZFdyYXA9XCJicmVhay13b3JkXCIsbi5zZXQoZSx7ZGVzdHJveTp1LHVwZGF0ZTpjfSksXCJ2ZXJ0aWNhbFwiPT09KHQ9d2luZG93LmdldENvbXB1dGVkU3R5bGUoZSxudWxsKSkucmVzaXplP2Uuc3R5bGUucmVzaXplPVwibm9uZVwiOlwiYm90aFwiPT09dC5yZXNpemUmJihlLnN0eWxlLnJlc2l6ZT1cImhvcml6b250YWxcIikscj1cImNvbnRlbnQtYm94XCI9PT10LmJveFNpemluZz8tKHBhcnNlRmxvYXQodC5wYWRkaW5nVG9wKStwYXJzZUZsb2F0KHQucGFkZGluZ0JvdHRvbSkpOnBhcnNlRmxvYXQodC5ib3JkZXJUb3BXaWR0aCkrcGFyc2VGbG9hdCh0LmJvcmRlckJvdHRvbVdpZHRoKSxpc05hTihyKSYmKHI9MCksYygpfWZ1bmN0aW9uIGEodCl7dmFyIG49ZS5zdHlsZS53aWR0aDtlLnN0eWxlLndpZHRoPVwiMHB4XCIsZS5zdHlsZS53aWR0aD1uLGUuc3R5bGUub3ZlcmZsb3dZPXR9ZnVuY3Rpb24gcygpe2lmKDAhPT1lLnNjcm9sbEhlaWdodCl7dmFyIHQ9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PVtdO2UmJmUucGFyZW50Tm9kZSYmZS5wYXJlbnROb2RlIGluc3RhbmNlb2YgRWxlbWVudDspZS5wYXJlbnROb2RlLnNjcm9sbFRvcCYmdC5wdXNoKHtub2RlOmUucGFyZW50Tm9kZSxzY3JvbGxUb3A6ZS5wYXJlbnROb2RlLnNjcm9sbFRvcH0pLGU9ZS5wYXJlbnROb2RlO3JldHVybiB0fShlKSxuPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudCYmZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtlLnN0eWxlLmhlaWdodD1cIlwiLGUuc3R5bGUuaGVpZ2h0PWUuc2Nyb2xsSGVpZ2h0K3IrXCJweFwiLGk9ZS5jbGllbnRXaWR0aCx0LmZvckVhY2goZnVuY3Rpb24oZSl7ZS5ub2RlLnNjcm9sbFRvcD1lLnNjcm9sbFRvcH0pLG4mJihkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wPW4pfX1mdW5jdGlvbiBjKCl7cygpO3ZhciB0PU1hdGgucm91bmQocGFyc2VGbG9hdChlLnN0eWxlLmhlaWdodCkpLG49d2luZG93LmdldENvbXB1dGVkU3R5bGUoZSxudWxsKSxyPVwiY29udGVudC1ib3hcIj09PW4uYm94U2l6aW5nP01hdGgucm91bmQocGFyc2VGbG9hdChuLmhlaWdodCkpOmUub2Zmc2V0SGVpZ2h0O2lmKHI8dD9cImhpZGRlblwiPT09bi5vdmVyZmxvd1kmJihhKFwic2Nyb2xsXCIpLHMoKSxyPVwiY29udGVudC1ib3hcIj09PW4uYm94U2l6aW5nP01hdGgucm91bmQocGFyc2VGbG9hdCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlLG51bGwpLmhlaWdodCkpOmUub2Zmc2V0SGVpZ2h0KTpcImhpZGRlblwiIT09bi5vdmVyZmxvd1kmJihhKFwiaGlkZGVuXCIpLHMoKSxyPVwiY29udGVudC1ib3hcIj09PW4uYm94U2l6aW5nP01hdGgucm91bmQocGFyc2VGbG9hdCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlLG51bGwpLmhlaWdodCkpOmUub2Zmc2V0SGVpZ2h0KSxsIT09cil7bD1yO3ZhciBpPW8oXCJhdXRvc2l6ZTpyZXNpemVkXCIpO3RyeXtlLmRpc3BhdGNoRXZlbnQoaSl9Y2F0Y2goZSl7fX19fShlKX0pLGV9KS5kZXN0cm95PWZ1bmN0aW9uKGUpe3JldHVybiBlJiZBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGUubGVuZ3RoP2U6W2VdLHIpLGV9LGwudXBkYXRlPWZ1bmN0aW9uKGUpe3JldHVybiBlJiZBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGUubGVuZ3RoP2U6W2VdLGkpLGV9KSxsfSk7XHJcbiIsIi8qIVxuICogY2xpcGJvYXJkLmpzIHYyLjAuMTFcbiAqIGh0dHBzOi8vY2xpcGJvYXJkanMuY29tL1xuICpcbiAqIExpY2Vuc2VkIE1JVCDCqSBaZW5vIFJvY2hhXG4gKi9cbiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLGUpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuQ2xpcGJvYXJkSlM9ZSgpOnQuQ2xpcGJvYXJkSlM9ZSgpfSh0aGlzLGZ1bmN0aW9uKCl7cmV0dXJuIG49ezY4NjpmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7bi5kKGUse2RlZmF1bHQ6ZnVuY3Rpb24oKXtyZXR1cm4gYn19KTt2YXIgZT1uKDI3OSksaT1uLm4oZSksZT1uKDM3MCksdT1uLm4oZSksZT1uKDgxNykscj1uLm4oZSk7ZnVuY3Rpb24gYyh0KXt0cnl7cmV0dXJuIGRvY3VtZW50LmV4ZWNDb21tYW5kKHQpfWNhdGNoKHQpe3JldHVybn19dmFyIGE9ZnVuY3Rpb24odCl7dD1yKCkodCk7cmV0dXJuIGMoXCJjdXRcIiksdH07ZnVuY3Rpb24gbyh0LGUpe3ZhciBuLG8sdD0obj10LG89XCJydGxcIj09PWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkaXJcIiksKHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpKS5zdHlsZS5mb250U2l6ZT1cIjEycHRcIix0LnN0eWxlLmJvcmRlcj1cIjBcIix0LnN0eWxlLnBhZGRpbmc9XCIwXCIsdC5zdHlsZS5tYXJnaW49XCIwXCIsdC5zdHlsZS5wb3NpdGlvbj1cImFic29sdXRlXCIsdC5zdHlsZVtvP1wicmlnaHRcIjpcImxlZnRcIl09XCItOTk5OXB4XCIsbz13aW5kb3cucGFnZVlPZmZzZXR8fGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AsdC5zdHlsZS50b3A9XCJcIi5jb25jYXQobyxcInB4XCIpLHQuc2V0QXR0cmlidXRlKFwicmVhZG9ubHlcIixcIlwiKSx0LnZhbHVlPW4sdCk7cmV0dXJuIGUuY29udGFpbmVyLmFwcGVuZENoaWxkKHQpLGU9cigpKHQpLGMoXCJjb3B5XCIpLHQucmVtb3ZlKCksZX12YXIgZj1mdW5jdGlvbih0KXt2YXIgZT0xPGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06e2NvbnRhaW5lcjpkb2N1bWVudC5ib2R5fSxuPVwiXCI7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIHQ/bj1vKHQsZSk6dCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQmJiFbXCJ0ZXh0XCIsXCJzZWFyY2hcIixcInVybFwiLFwidGVsXCIsXCJwYXNzd29yZFwiXS5pbmNsdWRlcyhudWxsPT10P3ZvaWQgMDp0LnR5cGUpP249byh0LnZhbHVlLGUpOihuPXIoKSh0KSxjKFwiY29weVwiKSksbn07ZnVuY3Rpb24gbCh0KXtyZXR1cm4obD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24odCl7cmV0dXJuIHR5cGVvZiB0fTpmdW5jdGlvbih0KXtyZXR1cm4gdCYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZ0LmNvbnN0cnVjdG9yPT09U3ltYm9sJiZ0IT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiB0fSkodCl9dmFyIHM9ZnVuY3Rpb24oKXt2YXIgdD0wPGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06e30sZT10LmFjdGlvbixuPXZvaWQgMD09PWU/XCJjb3B5XCI6ZSxvPXQuY29udGFpbmVyLGU9dC50YXJnZXQsdD10LnRleHQ7aWYoXCJjb3B5XCIhPT1uJiZcImN1dFwiIT09bil0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgXCJhY3Rpb25cIiB2YWx1ZSwgdXNlIGVpdGhlciBcImNvcHlcIiBvciBcImN1dFwiJyk7aWYodm9pZCAwIT09ZSl7aWYoIWV8fFwib2JqZWN0XCIhPT1sKGUpfHwxIT09ZS5ub2RlVHlwZSl0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgXCJ0YXJnZXRcIiB2YWx1ZSwgdXNlIGEgdmFsaWQgRWxlbWVudCcpO2lmKFwiY29weVwiPT09biYmZS5oYXNBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSl0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgXCJ0YXJnZXRcIiBhdHRyaWJ1dGUuIFBsZWFzZSB1c2UgXCJyZWFkb25seVwiIGluc3RlYWQgb2YgXCJkaXNhYmxlZFwiIGF0dHJpYnV0ZScpO2lmKFwiY3V0XCI9PT1uJiYoZS5oYXNBdHRyaWJ1dGUoXCJyZWFkb25seVwiKXx8ZS5oYXNBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSkpdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFwidGFyZ2V0XCIgYXR0cmlidXRlLiBZb3UgY2FuXFwndCBjdXQgdGV4dCBmcm9tIGVsZW1lbnRzIHdpdGggXCJyZWFkb25seVwiIG9yIFwiZGlzYWJsZWRcIiBhdHRyaWJ1dGVzJyl9cmV0dXJuIHQ/Zih0LHtjb250YWluZXI6b30pOmU/XCJjdXRcIj09PW4/YShlKTpmKGUse2NvbnRhaW5lcjpvfSk6dm9pZCAwfTtmdW5jdGlvbiBwKHQpe3JldHVybihwPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbih0KXtyZXR1cm4gdHlwZW9mIHR9OmZ1bmN0aW9uKHQpe3JldHVybiB0JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJnQuY29uc3RydWN0b3I9PT1TeW1ib2wmJnQhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIHR9KSh0KX1mdW5jdGlvbiBkKHQsZSl7Zm9yKHZhciBuPTA7bjxlLmxlbmd0aDtuKyspe3ZhciBvPWVbbl07by5lbnVtZXJhYmxlPW8uZW51bWVyYWJsZXx8ITEsby5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gbyYmKG8ud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LG8ua2V5LG8pfX1mdW5jdGlvbiB5KHQsZSl7cmV0dXJuKHk9T2JqZWN0LnNldFByb3RvdHlwZU9mfHxmdW5jdGlvbih0LGUpe3JldHVybiB0Ll9fcHJvdG9fXz1lLHR9KSh0LGUpfWZ1bmN0aW9uIGgobil7dmFyIG89ZnVuY3Rpb24oKXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgUmVmbGVjdHx8IVJlZmxlY3QuY29uc3RydWN0KXJldHVybiExO2lmKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pcmV0dXJuITE7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgUHJveHkpcmV0dXJuITA7dHJ5e3JldHVybiBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsW10sZnVuY3Rpb24oKXt9KSksITB9Y2F0Y2godCl7cmV0dXJuITF9fSgpO3JldHVybiBmdW5jdGlvbigpe3ZhciB0LGU9dihuKTtyZXR1cm4gdD1vPyh0PXYodGhpcykuY29uc3RydWN0b3IsUmVmbGVjdC5jb25zdHJ1Y3QoZSxhcmd1bWVudHMsdCkpOmUuYXBwbHkodGhpcyxhcmd1bWVudHMpLGU9dGhpcywhKHQ9dCl8fFwib2JqZWN0XCIhPT1wKHQpJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiB0P2Z1bmN0aW9uKHQpe2lmKHZvaWQgMCE9PXQpcmV0dXJuIHQ7dGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpfShlKTp0fX1mdW5jdGlvbiB2KHQpe3JldHVybih2PU9iamVjdC5zZXRQcm90b3R5cGVPZj9PYmplY3QuZ2V0UHJvdG90eXBlT2Y6ZnVuY3Rpb24odCl7cmV0dXJuIHQuX19wcm90b19ffHxPYmplY3QuZ2V0UHJvdG90eXBlT2YodCl9KSh0KX1mdW5jdGlvbiBtKHQsZSl7dD1cImRhdGEtY2xpcGJvYXJkLVwiLmNvbmNhdCh0KTtpZihlLmhhc0F0dHJpYnV0ZSh0KSlyZXR1cm4gZS5nZXRBdHRyaWJ1dGUodCl9dmFyIGI9ZnVuY3Rpb24oKXshZnVuY3Rpb24odCxlKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlJiZudWxsIT09ZSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7dC5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShlJiZlLnByb3RvdHlwZSx7Y29uc3RydWN0b3I6e3ZhbHVlOnQsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfX0pLGUmJnkodCxlKX0ocixpKCkpO3ZhciB0LGUsbixvPWgocik7ZnVuY3Rpb24gcih0LGUpe3ZhciBuO3JldHVybiBmdW5jdGlvbih0KXtpZighKHQgaW5zdGFuY2VvZiByKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfSh0aGlzKSwobj1vLmNhbGwodGhpcykpLnJlc29sdmVPcHRpb25zKGUpLG4ubGlzdGVuQ2xpY2sodCksbn1yZXR1cm4gdD1yLG49W3trZXk6XCJjb3B5XCIsdmFsdWU6ZnVuY3Rpb24odCl7dmFyIGU9MTxhcmd1bWVudHMubGVuZ3RoJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOntjb250YWluZXI6ZG9jdW1lbnQuYm9keX07cmV0dXJuIGYodCxlKX19LHtrZXk6XCJjdXRcIix2YWx1ZTpmdW5jdGlvbih0KXtyZXR1cm4gYSh0KX19LHtrZXk6XCJpc1N1cHBvcnRlZFwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIHQ9MDxhcmd1bWVudHMubGVuZ3RoJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOltcImNvcHlcIixcImN1dFwiXSx0PVwic3RyaW5nXCI9PXR5cGVvZiB0P1t0XTp0LGU9ISFkb2N1bWVudC5xdWVyeUNvbW1hbmRTdXBwb3J0ZWQ7cmV0dXJuIHQuZm9yRWFjaChmdW5jdGlvbih0KXtlPWUmJiEhZG9jdW1lbnQucXVlcnlDb21tYW5kU3VwcG9ydGVkKHQpfSksZX19XSwoZT1be2tleTpcInJlc29sdmVPcHRpb25zXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgdD0wPGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06e307dGhpcy5hY3Rpb249XCJmdW5jdGlvblwiPT10eXBlb2YgdC5hY3Rpb24/dC5hY3Rpb246dGhpcy5kZWZhdWx0QWN0aW9uLHRoaXMudGFyZ2V0PVwiZnVuY3Rpb25cIj09dHlwZW9mIHQudGFyZ2V0P3QudGFyZ2V0OnRoaXMuZGVmYXVsdFRhcmdldCx0aGlzLnRleHQ9XCJmdW5jdGlvblwiPT10eXBlb2YgdC50ZXh0P3QudGV4dDp0aGlzLmRlZmF1bHRUZXh0LHRoaXMuY29udGFpbmVyPVwib2JqZWN0XCI9PT1wKHQuY29udGFpbmVyKT90LmNvbnRhaW5lcjpkb2N1bWVudC5ib2R5fX0se2tleTpcImxpc3RlbkNsaWNrXCIsdmFsdWU6ZnVuY3Rpb24odCl7dmFyIGU9dGhpczt0aGlzLmxpc3RlbmVyPXUoKSh0LFwiY2xpY2tcIixmdW5jdGlvbih0KXtyZXR1cm4gZS5vbkNsaWNrKHQpfSl9fSx7a2V5Olwib25DbGlja1wiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciBlPXQuZGVsZWdhdGVUYXJnZXR8fHQuY3VycmVudFRhcmdldCxuPXRoaXMuYWN0aW9uKGUpfHxcImNvcHlcIix0PXMoe2FjdGlvbjpuLGNvbnRhaW5lcjp0aGlzLmNvbnRhaW5lcix0YXJnZXQ6dGhpcy50YXJnZXQoZSksdGV4dDp0aGlzLnRleHQoZSl9KTt0aGlzLmVtaXQodD9cInN1Y2Nlc3NcIjpcImVycm9yXCIse2FjdGlvbjpuLHRleHQ6dCx0cmlnZ2VyOmUsY2xlYXJTZWxlY3Rpb246ZnVuY3Rpb24oKXtlJiZlLmZvY3VzKCksd2luZG93LmdldFNlbGVjdGlvbigpLnJlbW92ZUFsbFJhbmdlcygpfX0pfX0se2tleTpcImRlZmF1bHRBY3Rpb25cIix2YWx1ZTpmdW5jdGlvbih0KXtyZXR1cm4gbShcImFjdGlvblwiLHQpfX0se2tleTpcImRlZmF1bHRUYXJnZXRcIix2YWx1ZTpmdW5jdGlvbih0KXt0PW0oXCJ0YXJnZXRcIix0KTtpZih0KXJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHQpfX0se2tleTpcImRlZmF1bHRUZXh0XCIsdmFsdWU6ZnVuY3Rpb24odCl7cmV0dXJuIG0oXCJ0ZXh0XCIsdCl9fSx7a2V5OlwiZGVzdHJveVwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5saXN0ZW5lci5kZXN0cm95KCl9fV0pJiZkKHQucHJvdG90eXBlLGUpLG4mJmQodCxuKSxyfSgpfSw4Mjg6ZnVuY3Rpb24odCl7dmFyIGU7XCJ1bmRlZmluZWRcIj09dHlwZW9mIEVsZW1lbnR8fEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXN8fCgoZT1FbGVtZW50LnByb3RvdHlwZSkubWF0Y2hlcz1lLm1hdGNoZXNTZWxlY3Rvcnx8ZS5tb3pNYXRjaGVzU2VsZWN0b3J8fGUubXNNYXRjaGVzU2VsZWN0b3J8fGUub01hdGNoZXNTZWxlY3Rvcnx8ZS53ZWJraXRNYXRjaGVzU2VsZWN0b3IpLHQuZXhwb3J0cz1mdW5jdGlvbih0LGUpe2Zvcig7dCYmOSE9PXQubm9kZVR5cGU7KXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiB0Lm1hdGNoZXMmJnQubWF0Y2hlcyhlKSlyZXR1cm4gdDt0PXQucGFyZW50Tm9kZX19fSw0Mzg6ZnVuY3Rpb24odCxlLG4pe3ZhciB1PW4oODI4KTtmdW5jdGlvbiBpKHQsZSxuLG8scil7dmFyIGk9ZnVuY3Rpb24oZSxuLHQsbyl7cmV0dXJuIGZ1bmN0aW9uKHQpe3QuZGVsZWdhdGVUYXJnZXQ9dSh0LnRhcmdldCxuKSx0LmRlbGVnYXRlVGFyZ2V0JiZvLmNhbGwoZSx0KX19LmFwcGx5KHRoaXMsYXJndW1lbnRzKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKG4saSxyKSx7ZGVzdHJveTpmdW5jdGlvbigpe3QucmVtb3ZlRXZlbnRMaXN0ZW5lcihuLGkscil9fX10LmV4cG9ydHM9ZnVuY3Rpb24odCxlLG4sbyxyKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0LmFkZEV2ZW50TGlzdGVuZXI/aS5hcHBseShudWxsLGFyZ3VtZW50cyk6XCJmdW5jdGlvblwiPT10eXBlb2Ygbj9pLmJpbmQobnVsbCxkb2N1bWVudCkuYXBwbHkobnVsbCxhcmd1bWVudHMpOihcInN0cmluZ1wiPT10eXBlb2YgdCYmKHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0KSksQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKHQsZnVuY3Rpb24odCl7cmV0dXJuIGkodCxlLG4sbyxyKX0pKX19LDg3OTpmdW5jdGlvbih0LG4pe24ubm9kZT1mdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwIT09dCYmdCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50JiYxPT09dC5ub2RlVHlwZX0sbi5ub2RlTGlzdD1mdW5jdGlvbih0KXt2YXIgZT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCk7cmV0dXJuIHZvaWQgMCE9PXQmJihcIltvYmplY3QgTm9kZUxpc3RdXCI9PT1lfHxcIltvYmplY3QgSFRNTENvbGxlY3Rpb25dXCI9PT1lKSYmXCJsZW5ndGhcImluIHQmJigwPT09dC5sZW5ndGh8fG4ubm9kZSh0WzBdKSl9LG4uc3RyaW5nPWZ1bmN0aW9uKHQpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiB0fHx0IGluc3RhbmNlb2YgU3RyaW5nfSxuLmZuPWZ1bmN0aW9uKHQpe3JldHVyblwiW29iamVjdCBGdW5jdGlvbl1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KX19LDM3MDpmdW5jdGlvbih0LGUsbil7dmFyIGY9big4NzkpLGw9big0MzgpO3QuZXhwb3J0cz1mdW5jdGlvbih0LGUsbil7aWYoIXQmJiFlJiYhbil0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIHJlcXVpcmVkIGFyZ3VtZW50c1wiKTtpZighZi5zdHJpbmcoZSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlNlY29uZCBhcmd1bWVudCBtdXN0IGJlIGEgU3RyaW5nXCIpO2lmKCFmLmZuKG4pKXRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGlyZCBhcmd1bWVudCBtdXN0IGJlIGEgRnVuY3Rpb25cIik7aWYoZi5ub2RlKHQpKXJldHVybiBjPWUsYT1uLCh1PXQpLmFkZEV2ZW50TGlzdGVuZXIoYyxhKSx7ZGVzdHJveTpmdW5jdGlvbigpe3UucmVtb3ZlRXZlbnRMaXN0ZW5lcihjLGEpfX07aWYoZi5ub2RlTGlzdCh0KSlyZXR1cm4gbz10LHI9ZSxpPW4sQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChvLGZ1bmN0aW9uKHQpe3QuYWRkRXZlbnRMaXN0ZW5lcihyLGkpfSkse2Rlc3Ryb3k6ZnVuY3Rpb24oKXtBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKG8sZnVuY3Rpb24odCl7dC5yZW1vdmVFdmVudExpc3RlbmVyKHIsaSl9KX19O2lmKGYuc3RyaW5nKHQpKXJldHVybiB0PXQsZT1lLG49bixsKGRvY3VtZW50LmJvZHksdCxlLG4pO3Rocm93IG5ldyBUeXBlRXJyb3IoXCJGaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgU3RyaW5nLCBIVE1MRWxlbWVudCwgSFRNTENvbGxlY3Rpb24sIG9yIE5vZGVMaXN0XCIpO3ZhciBvLHIsaSx1LGMsYX19LDgxNzpmdW5jdGlvbih0KXt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGUsbj1cIlNFTEVDVFwiPT09dC5ub2RlTmFtZT8odC5mb2N1cygpLHQudmFsdWUpOlwiSU5QVVRcIj09PXQubm9kZU5hbWV8fFwiVEVYVEFSRUFcIj09PXQubm9kZU5hbWU/KChlPXQuaGFzQXR0cmlidXRlKFwicmVhZG9ubHlcIikpfHx0LnNldEF0dHJpYnV0ZShcInJlYWRvbmx5XCIsXCJcIiksdC5zZWxlY3QoKSx0LnNldFNlbGVjdGlvblJhbmdlKDAsdC52YWx1ZS5sZW5ndGgpLGV8fHQucmVtb3ZlQXR0cmlidXRlKFwicmVhZG9ubHlcIiksdC52YWx1ZSk6KHQuaGFzQXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIpJiZ0LmZvY3VzKCksbj13aW5kb3cuZ2V0U2VsZWN0aW9uKCksKGU9ZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKSkuc2VsZWN0Tm9kZUNvbnRlbnRzKHQpLG4ucmVtb3ZlQWxsUmFuZ2VzKCksbi5hZGRSYW5nZShlKSxuLnRvU3RyaW5nKCkpO3JldHVybiBufX0sMjc5OmZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUoKXt9ZS5wcm90b3R5cGU9e29uOmZ1bmN0aW9uKHQsZSxuKXt2YXIgbz10aGlzLmV8fCh0aGlzLmU9e30pO3JldHVybihvW3RdfHwob1t0XT1bXSkpLnB1c2goe2ZuOmUsY3R4Om59KSx0aGlzfSxvbmNlOmZ1bmN0aW9uKHQsZSxuKXt2YXIgbz10aGlzO2Z1bmN0aW9uIHIoKXtvLm9mZih0LHIpLGUuYXBwbHkobixhcmd1bWVudHMpfXJldHVybiByLl89ZSx0aGlzLm9uKHQscixuKX0sZW1pdDpmdW5jdGlvbih0KXtmb3IodmFyIGU9W10uc2xpY2UuY2FsbChhcmd1bWVudHMsMSksbj0oKHRoaXMuZXx8KHRoaXMuZT17fSkpW3RdfHxbXSkuc2xpY2UoKSxvPTAscj1uLmxlbmd0aDtvPHI7bysrKW5bb10uZm4uYXBwbHkobltvXS5jdHgsZSk7cmV0dXJuIHRoaXN9LG9mZjpmdW5jdGlvbih0LGUpe3ZhciBuPXRoaXMuZXx8KHRoaXMuZT17fSksbz1uW3RdLHI9W107aWYobyYmZSlmb3IodmFyIGk9MCx1PW8ubGVuZ3RoO2k8dTtpKyspb1tpXS5mbiE9PWUmJm9baV0uZm4uXyE9PWUmJnIucHVzaChvW2ldKTtyZXR1cm4gci5sZW5ndGg/blt0XT1yOmRlbGV0ZSBuW3RdLHRoaXN9fSx0LmV4cG9ydHM9ZSx0LmV4cG9ydHMuVGlueUVtaXR0ZXI9ZX19LHI9e30sby5uPWZ1bmN0aW9uKHQpe3ZhciBlPXQmJnQuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiB0LmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIHR9O3JldHVybiBvLmQoZSx7YTplfSksZX0sby5kPWZ1bmN0aW9uKHQsZSl7Zm9yKHZhciBuIGluIGUpby5vKGUsbikmJiFvLm8odCxuKSYmT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsbix7ZW51bWVyYWJsZTohMCxnZXQ6ZVtuXX0pfSxvLm89ZnVuY3Rpb24odCxlKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsZSl9LG8oNjg2KS5kZWZhdWx0O2Z1bmN0aW9uIG8odCl7aWYoclt0XSlyZXR1cm4gclt0XS5leHBvcnRzO3ZhciBlPXJbdF09e2V4cG9ydHM6e319O3JldHVybiBuW3RdKGUsZS5leHBvcnRzLG8pLGUuZXhwb3J0c312YXIgbixyfSk7IiwiKGZ1bmN0aW9uIGRlZmluZU11c3RhY2hlKGdsb2JhbCxmYWN0b3J5KXtpZih0eXBlb2YgZXhwb3J0cz09PVwib2JqZWN0XCImJmV4cG9ydHMmJnR5cGVvZiBleHBvcnRzLm5vZGVOYW1lIT09XCJzdHJpbmdcIil7ZmFjdG9yeShleHBvcnRzKX1lbHNlIGlmKHR5cGVvZiBkZWZpbmU9PT1cImZ1bmN0aW9uXCImJmRlZmluZS5hbWQpe2RlZmluZShbXCJleHBvcnRzXCJdLGZhY3RvcnkpfWVsc2V7Z2xvYmFsLk11c3RhY2hlPXt9O2ZhY3RvcnkoZ2xvYmFsLk11c3RhY2hlKX19KSh0aGlzLGZ1bmN0aW9uIG11c3RhY2hlRmFjdG9yeShtdXN0YWNoZSl7dmFyIG9iamVjdFRvU3RyaW5nPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7dmFyIGlzQXJyYXk9QXJyYXkuaXNBcnJheXx8ZnVuY3Rpb24gaXNBcnJheVBvbHlmaWxsKG9iamVjdCl7cmV0dXJuIG9iamVjdFRvU3RyaW5nLmNhbGwob2JqZWN0KT09PVwiW29iamVjdCBBcnJheV1cIn07ZnVuY3Rpb24gaXNGdW5jdGlvbihvYmplY3Qpe3JldHVybiB0eXBlb2Ygb2JqZWN0PT09XCJmdW5jdGlvblwifWZ1bmN0aW9uIHR5cGVTdHIob2JqKXtyZXR1cm4gaXNBcnJheShvYmopP1wiYXJyYXlcIjp0eXBlb2Ygb2JqfWZ1bmN0aW9uIGVzY2FwZVJlZ0V4cChzdHJpbmcpe3JldHVybiBzdHJpbmcucmVwbGFjZSgvW1xcLVxcW1xcXXt9KCkqKz8uLFxcXFxcXF4kfCNcXHNdL2csXCJcXFxcJCZcIil9ZnVuY3Rpb24gaGFzUHJvcGVydHkob2JqLHByb3BOYW1lKXtyZXR1cm4gb2JqIT1udWxsJiZ0eXBlb2Ygb2JqPT09XCJvYmplY3RcIiYmcHJvcE5hbWUgaW4gb2JqfWZ1bmN0aW9uIHByaW1pdGl2ZUhhc093blByb3BlcnR5KHByaW1pdGl2ZSxwcm9wTmFtZSl7cmV0dXJuIHByaW1pdGl2ZSE9bnVsbCYmdHlwZW9mIHByaW1pdGl2ZSE9PVwib2JqZWN0XCImJnByaW1pdGl2ZS5oYXNPd25Qcm9wZXJ0eSYmcHJpbWl0aXZlLmhhc093blByb3BlcnR5KHByb3BOYW1lKX12YXIgcmVnRXhwVGVzdD1SZWdFeHAucHJvdG90eXBlLnRlc3Q7ZnVuY3Rpb24gdGVzdFJlZ0V4cChyZSxzdHJpbmcpe3JldHVybiByZWdFeHBUZXN0LmNhbGwocmUsc3RyaW5nKX12YXIgbm9uU3BhY2VSZT0vXFxTLztmdW5jdGlvbiBpc1doaXRlc3BhY2Uoc3RyaW5nKXtyZXR1cm4hdGVzdFJlZ0V4cChub25TcGFjZVJlLHN0cmluZyl9dmFyIGVudGl0eU1hcD17XCImXCI6XCImYW1wO1wiLFwiPFwiOlwiJmx0O1wiLFwiPlwiOlwiJmd0O1wiLCdcIic6XCImcXVvdDtcIixcIidcIjpcIiYjMzk7XCIsXCIvXCI6XCImI3gyRjtcIixcImBcIjpcIiYjeDYwO1wiLFwiPVwiOlwiJiN4M0Q7XCJ9O2Z1bmN0aW9uIGVzY2FwZUh0bWwoc3RyaW5nKXtyZXR1cm4gU3RyaW5nKHN0cmluZykucmVwbGFjZSgvWyY8PlwiJ2A9XFwvXS9nLGZ1bmN0aW9uIGZyb21FbnRpdHlNYXAocyl7cmV0dXJuIGVudGl0eU1hcFtzXX0pfXZhciB3aGl0ZVJlPS9cXHMqLzt2YXIgc3BhY2VSZT0vXFxzKy87dmFyIGVxdWFsc1JlPS9cXHMqPS87dmFyIGN1cmx5UmU9L1xccypcXH0vO3ZhciB0YWdSZT0vI3xcXF58XFwvfD58XFx7fCZ8PXwhLztmdW5jdGlvbiBwYXJzZVRlbXBsYXRlKHRlbXBsYXRlLHRhZ3Mpe2lmKCF0ZW1wbGF0ZSlyZXR1cm5bXTt2YXIgbGluZUhhc05vblNwYWNlPWZhbHNlO3ZhciBzZWN0aW9ucz1bXTt2YXIgdG9rZW5zPVtdO3ZhciBzcGFjZXM9W107dmFyIGhhc1RhZz1mYWxzZTt2YXIgbm9uU3BhY2U9ZmFsc2U7dmFyIGluZGVudGF0aW9uPVwiXCI7dmFyIHRhZ0luZGV4PTA7ZnVuY3Rpb24gc3RyaXBTcGFjZSgpe2lmKGhhc1RhZyYmIW5vblNwYWNlKXt3aGlsZShzcGFjZXMubGVuZ3RoKWRlbGV0ZSB0b2tlbnNbc3BhY2VzLnBvcCgpXX1lbHNle3NwYWNlcz1bXX1oYXNUYWc9ZmFsc2U7bm9uU3BhY2U9ZmFsc2V9dmFyIG9wZW5pbmdUYWdSZSxjbG9zaW5nVGFnUmUsY2xvc2luZ0N1cmx5UmU7ZnVuY3Rpb24gY29tcGlsZVRhZ3ModGFnc1RvQ29tcGlsZSl7aWYodHlwZW9mIHRhZ3NUb0NvbXBpbGU9PT1cInN0cmluZ1wiKXRhZ3NUb0NvbXBpbGU9dGFnc1RvQ29tcGlsZS5zcGxpdChzcGFjZVJlLDIpO2lmKCFpc0FycmF5KHRhZ3NUb0NvbXBpbGUpfHx0YWdzVG9Db21waWxlLmxlbmd0aCE9PTIpdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB0YWdzOiBcIit0YWdzVG9Db21waWxlKTtvcGVuaW5nVGFnUmU9bmV3IFJlZ0V4cChlc2NhcGVSZWdFeHAodGFnc1RvQ29tcGlsZVswXSkrXCJcXFxccypcIik7Y2xvc2luZ1RhZ1JlPW5ldyBSZWdFeHAoXCJcXFxccypcIitlc2NhcGVSZWdFeHAodGFnc1RvQ29tcGlsZVsxXSkpO2Nsb3NpbmdDdXJseVJlPW5ldyBSZWdFeHAoXCJcXFxccypcIitlc2NhcGVSZWdFeHAoXCJ9XCIrdGFnc1RvQ29tcGlsZVsxXSkpfWNvbXBpbGVUYWdzKHRhZ3N8fG11c3RhY2hlLnRhZ3MpO3ZhciBzY2FubmVyPW5ldyBTY2FubmVyKHRlbXBsYXRlKTt2YXIgc3RhcnQsdHlwZSx2YWx1ZSxjaHIsdG9rZW4sb3BlblNlY3Rpb247d2hpbGUoIXNjYW5uZXIuZW9zKCkpe3N0YXJ0PXNjYW5uZXIucG9zO3ZhbHVlPXNjYW5uZXIuc2NhblVudGlsKG9wZW5pbmdUYWdSZSk7aWYodmFsdWUpe2Zvcih2YXIgaT0wLHZhbHVlTGVuZ3RoPXZhbHVlLmxlbmd0aDtpPHZhbHVlTGVuZ3RoOysraSl7Y2hyPXZhbHVlLmNoYXJBdChpKTtpZihpc1doaXRlc3BhY2UoY2hyKSl7c3BhY2VzLnB1c2godG9rZW5zLmxlbmd0aCk7aW5kZW50YXRpb24rPWNocn1lbHNle25vblNwYWNlPXRydWU7bGluZUhhc05vblNwYWNlPXRydWU7aW5kZW50YXRpb24rPVwiIFwifXRva2Vucy5wdXNoKFtcInRleHRcIixjaHIsc3RhcnQsc3RhcnQrMV0pO3N0YXJ0Kz0xO2lmKGNocj09PVwiXFxuXCIpe3N0cmlwU3BhY2UoKTtpbmRlbnRhdGlvbj1cIlwiO3RhZ0luZGV4PTA7bGluZUhhc05vblNwYWNlPWZhbHNlfX19aWYoIXNjYW5uZXIuc2NhbihvcGVuaW5nVGFnUmUpKWJyZWFrO2hhc1RhZz10cnVlO3R5cGU9c2Nhbm5lci5zY2FuKHRhZ1JlKXx8XCJuYW1lXCI7c2Nhbm5lci5zY2FuKHdoaXRlUmUpO2lmKHR5cGU9PT1cIj1cIil7dmFsdWU9c2Nhbm5lci5zY2FuVW50aWwoZXF1YWxzUmUpO3NjYW5uZXIuc2NhbihlcXVhbHNSZSk7c2Nhbm5lci5zY2FuVW50aWwoY2xvc2luZ1RhZ1JlKX1lbHNlIGlmKHR5cGU9PT1cIntcIil7dmFsdWU9c2Nhbm5lci5zY2FuVW50aWwoY2xvc2luZ0N1cmx5UmUpO3NjYW5uZXIuc2NhbihjdXJseVJlKTtzY2FubmVyLnNjYW5VbnRpbChjbG9zaW5nVGFnUmUpO3R5cGU9XCImXCJ9ZWxzZXt2YWx1ZT1zY2FubmVyLnNjYW5VbnRpbChjbG9zaW5nVGFnUmUpfWlmKCFzY2FubmVyLnNjYW4oY2xvc2luZ1RhZ1JlKSl0aHJvdyBuZXcgRXJyb3IoXCJVbmNsb3NlZCB0YWcgYXQgXCIrc2Nhbm5lci5wb3MpO2lmKHR5cGU9PVwiPlwiKXt0b2tlbj1bdHlwZSx2YWx1ZSxzdGFydCxzY2FubmVyLnBvcyxpbmRlbnRhdGlvbix0YWdJbmRleCxsaW5lSGFzTm9uU3BhY2VdfWVsc2V7dG9rZW49W3R5cGUsdmFsdWUsc3RhcnQsc2Nhbm5lci5wb3NdfXRhZ0luZGV4Kys7dG9rZW5zLnB1c2godG9rZW4pO2lmKHR5cGU9PT1cIiNcInx8dHlwZT09PVwiXlwiKXtzZWN0aW9ucy5wdXNoKHRva2VuKX1lbHNlIGlmKHR5cGU9PT1cIi9cIil7b3BlblNlY3Rpb249c2VjdGlvbnMucG9wKCk7aWYoIW9wZW5TZWN0aW9uKXRocm93IG5ldyBFcnJvcignVW5vcGVuZWQgc2VjdGlvbiBcIicrdmFsdWUrJ1wiIGF0ICcrc3RhcnQpO2lmKG9wZW5TZWN0aW9uWzFdIT09dmFsdWUpdGhyb3cgbmV3IEVycm9yKCdVbmNsb3NlZCBzZWN0aW9uIFwiJytvcGVuU2VjdGlvblsxXSsnXCIgYXQgJytzdGFydCl9ZWxzZSBpZih0eXBlPT09XCJuYW1lXCJ8fHR5cGU9PT1cIntcInx8dHlwZT09PVwiJlwiKXtub25TcGFjZT10cnVlfWVsc2UgaWYodHlwZT09PVwiPVwiKXtjb21waWxlVGFncyh2YWx1ZSl9fXN0cmlwU3BhY2UoKTtvcGVuU2VjdGlvbj1zZWN0aW9ucy5wb3AoKTtpZihvcGVuU2VjdGlvbil0aHJvdyBuZXcgRXJyb3IoJ1VuY2xvc2VkIHNlY3Rpb24gXCInK29wZW5TZWN0aW9uWzFdKydcIiBhdCAnK3NjYW5uZXIucG9zKTtyZXR1cm4gbmVzdFRva2VucyhzcXVhc2hUb2tlbnModG9rZW5zKSl9ZnVuY3Rpb24gc3F1YXNoVG9rZW5zKHRva2Vucyl7dmFyIHNxdWFzaGVkVG9rZW5zPVtdO3ZhciB0b2tlbixsYXN0VG9rZW47Zm9yKHZhciBpPTAsbnVtVG9rZW5zPXRva2Vucy5sZW5ndGg7aTxudW1Ub2tlbnM7KytpKXt0b2tlbj10b2tlbnNbaV07aWYodG9rZW4pe2lmKHRva2VuWzBdPT09XCJ0ZXh0XCImJmxhc3RUb2tlbiYmbGFzdFRva2VuWzBdPT09XCJ0ZXh0XCIpe2xhc3RUb2tlblsxXSs9dG9rZW5bMV07bGFzdFRva2VuWzNdPXRva2VuWzNdfWVsc2V7c3F1YXNoZWRUb2tlbnMucHVzaCh0b2tlbik7bGFzdFRva2VuPXRva2VufX19cmV0dXJuIHNxdWFzaGVkVG9rZW5zfWZ1bmN0aW9uIG5lc3RUb2tlbnModG9rZW5zKXt2YXIgbmVzdGVkVG9rZW5zPVtdO3ZhciBjb2xsZWN0b3I9bmVzdGVkVG9rZW5zO3ZhciBzZWN0aW9ucz1bXTt2YXIgdG9rZW4sc2VjdGlvbjtmb3IodmFyIGk9MCxudW1Ub2tlbnM9dG9rZW5zLmxlbmd0aDtpPG51bVRva2VuczsrK2kpe3Rva2VuPXRva2Vuc1tpXTtzd2l0Y2godG9rZW5bMF0pe2Nhc2VcIiNcIjpjYXNlXCJeXCI6Y29sbGVjdG9yLnB1c2godG9rZW4pO3NlY3Rpb25zLnB1c2godG9rZW4pO2NvbGxlY3Rvcj10b2tlbls0XT1bXTticmVhaztjYXNlXCIvXCI6c2VjdGlvbj1zZWN0aW9ucy5wb3AoKTtzZWN0aW9uWzVdPXRva2VuWzJdO2NvbGxlY3Rvcj1zZWN0aW9ucy5sZW5ndGg+MD9zZWN0aW9uc1tzZWN0aW9ucy5sZW5ndGgtMV1bNF06bmVzdGVkVG9rZW5zO2JyZWFrO2RlZmF1bHQ6Y29sbGVjdG9yLnB1c2godG9rZW4pfX1yZXR1cm4gbmVzdGVkVG9rZW5zfWZ1bmN0aW9uIFNjYW5uZXIoc3RyaW5nKXt0aGlzLnN0cmluZz1zdHJpbmc7dGhpcy50YWlsPXN0cmluZzt0aGlzLnBvcz0wfVNjYW5uZXIucHJvdG90eXBlLmVvcz1mdW5jdGlvbiBlb3MoKXtyZXR1cm4gdGhpcy50YWlsPT09XCJcIn07U2Nhbm5lci5wcm90b3R5cGUuc2Nhbj1mdW5jdGlvbiBzY2FuKHJlKXt2YXIgbWF0Y2g9dGhpcy50YWlsLm1hdGNoKHJlKTtpZighbWF0Y2h8fG1hdGNoLmluZGV4IT09MClyZXR1cm5cIlwiO3ZhciBzdHJpbmc9bWF0Y2hbMF07dGhpcy50YWlsPXRoaXMudGFpbC5zdWJzdHJpbmcoc3RyaW5nLmxlbmd0aCk7dGhpcy5wb3MrPXN0cmluZy5sZW5ndGg7cmV0dXJuIHN0cmluZ307U2Nhbm5lci5wcm90b3R5cGUuc2NhblVudGlsPWZ1bmN0aW9uIHNjYW5VbnRpbChyZSl7dmFyIGluZGV4PXRoaXMudGFpbC5zZWFyY2gocmUpLG1hdGNoO3N3aXRjaChpbmRleCl7Y2FzZS0xOm1hdGNoPXRoaXMudGFpbDt0aGlzLnRhaWw9XCJcIjticmVhaztjYXNlIDA6bWF0Y2g9XCJcIjticmVhaztkZWZhdWx0Om1hdGNoPXRoaXMudGFpbC5zdWJzdHJpbmcoMCxpbmRleCk7dGhpcy50YWlsPXRoaXMudGFpbC5zdWJzdHJpbmcoaW5kZXgpfXRoaXMucG9zKz1tYXRjaC5sZW5ndGg7cmV0dXJuIG1hdGNofTtmdW5jdGlvbiBDb250ZXh0KHZpZXcscGFyZW50Q29udGV4dCl7dGhpcy52aWV3PXZpZXc7dGhpcy5jYWNoZT17XCIuXCI6dGhpcy52aWV3fTt0aGlzLnBhcmVudD1wYXJlbnRDb250ZXh0fUNvbnRleHQucHJvdG90eXBlLnB1c2g9ZnVuY3Rpb24gcHVzaCh2aWV3KXtyZXR1cm4gbmV3IENvbnRleHQodmlldyx0aGlzKX07Q29udGV4dC5wcm90b3R5cGUubG9va3VwPWZ1bmN0aW9uIGxvb2t1cChuYW1lKXt2YXIgY2FjaGU9dGhpcy5jYWNoZTt2YXIgdmFsdWU7aWYoY2FjaGUuaGFzT3duUHJvcGVydHkobmFtZSkpe3ZhbHVlPWNhY2hlW25hbWVdfWVsc2V7dmFyIGNvbnRleHQ9dGhpcyxpbnRlcm1lZGlhdGVWYWx1ZSxuYW1lcyxpbmRleCxsb29rdXBIaXQ9ZmFsc2U7d2hpbGUoY29udGV4dCl7aWYobmFtZS5pbmRleE9mKFwiLlwiKT4wKXtpbnRlcm1lZGlhdGVWYWx1ZT1jb250ZXh0LnZpZXc7bmFtZXM9bmFtZS5zcGxpdChcIi5cIik7aW5kZXg9MDt3aGlsZShpbnRlcm1lZGlhdGVWYWx1ZSE9bnVsbCYmaW5kZXg8bmFtZXMubGVuZ3RoKXtpZihpbmRleD09PW5hbWVzLmxlbmd0aC0xKWxvb2t1cEhpdD1oYXNQcm9wZXJ0eShpbnRlcm1lZGlhdGVWYWx1ZSxuYW1lc1tpbmRleF0pfHxwcmltaXRpdmVIYXNPd25Qcm9wZXJ0eShpbnRlcm1lZGlhdGVWYWx1ZSxuYW1lc1tpbmRleF0pO2ludGVybWVkaWF0ZVZhbHVlPWludGVybWVkaWF0ZVZhbHVlW25hbWVzW2luZGV4KytdXX19ZWxzZXtpbnRlcm1lZGlhdGVWYWx1ZT1jb250ZXh0LnZpZXdbbmFtZV07bG9va3VwSGl0PWhhc1Byb3BlcnR5KGNvbnRleHQudmlldyxuYW1lKX1pZihsb29rdXBIaXQpe3ZhbHVlPWludGVybWVkaWF0ZVZhbHVlO2JyZWFrfWNvbnRleHQ9Y29udGV4dC5wYXJlbnR9Y2FjaGVbbmFtZV09dmFsdWV9aWYoaXNGdW5jdGlvbih2YWx1ZSkpdmFsdWU9dmFsdWUuY2FsbCh0aGlzLnZpZXcpO3JldHVybiB2YWx1ZX07ZnVuY3Rpb24gV3JpdGVyKCl7dGhpcy5jYWNoZT17fX1Xcml0ZXIucHJvdG90eXBlLmNsZWFyQ2FjaGU9ZnVuY3Rpb24gY2xlYXJDYWNoZSgpe3RoaXMuY2FjaGU9e319O1dyaXRlci5wcm90b3R5cGUucGFyc2U9ZnVuY3Rpb24gcGFyc2UodGVtcGxhdGUsdGFncyl7dmFyIGNhY2hlPXRoaXMuY2FjaGU7dmFyIGNhY2hlS2V5PXRlbXBsYXRlK1wiOlwiKyh0YWdzfHxtdXN0YWNoZS50YWdzKS5qb2luKFwiOlwiKTt2YXIgdG9rZW5zPWNhY2hlW2NhY2hlS2V5XTtpZih0b2tlbnM9PW51bGwpdG9rZW5zPWNhY2hlW2NhY2hlS2V5XT1wYXJzZVRlbXBsYXRlKHRlbXBsYXRlLHRhZ3MpO3JldHVybiB0b2tlbnN9O1dyaXRlci5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uIHJlbmRlcih0ZW1wbGF0ZSx2aWV3LHBhcnRpYWxzLHRhZ3Mpe3ZhciB0b2tlbnM9dGhpcy5wYXJzZSh0ZW1wbGF0ZSx0YWdzKTt2YXIgY29udGV4dD12aWV3IGluc3RhbmNlb2YgQ29udGV4dD92aWV3Om5ldyBDb250ZXh0KHZpZXcpO3JldHVybiB0aGlzLnJlbmRlclRva2Vucyh0b2tlbnMsY29udGV4dCxwYXJ0aWFscyx0ZW1wbGF0ZSx0YWdzKX07V3JpdGVyLnByb3RvdHlwZS5yZW5kZXJUb2tlbnM9ZnVuY3Rpb24gcmVuZGVyVG9rZW5zKHRva2Vucyxjb250ZXh0LHBhcnRpYWxzLG9yaWdpbmFsVGVtcGxhdGUsdGFncyl7dmFyIGJ1ZmZlcj1cIlwiO3ZhciB0b2tlbixzeW1ib2wsdmFsdWU7Zm9yKHZhciBpPTAsbnVtVG9rZW5zPXRva2Vucy5sZW5ndGg7aTxudW1Ub2tlbnM7KytpKXt2YWx1ZT11bmRlZmluZWQ7dG9rZW49dG9rZW5zW2ldO3N5bWJvbD10b2tlblswXTtpZihzeW1ib2w9PT1cIiNcIil2YWx1ZT10aGlzLnJlbmRlclNlY3Rpb24odG9rZW4sY29udGV4dCxwYXJ0aWFscyxvcmlnaW5hbFRlbXBsYXRlKTtlbHNlIGlmKHN5bWJvbD09PVwiXlwiKXZhbHVlPXRoaXMucmVuZGVySW52ZXJ0ZWQodG9rZW4sY29udGV4dCxwYXJ0aWFscyxvcmlnaW5hbFRlbXBsYXRlKTtlbHNlIGlmKHN5bWJvbD09PVwiPlwiKXZhbHVlPXRoaXMucmVuZGVyUGFydGlhbCh0b2tlbixjb250ZXh0LHBhcnRpYWxzLHRhZ3MpO2Vsc2UgaWYoc3ltYm9sPT09XCImXCIpdmFsdWU9dGhpcy51bmVzY2FwZWRWYWx1ZSh0b2tlbixjb250ZXh0KTtlbHNlIGlmKHN5bWJvbD09PVwibmFtZVwiKXZhbHVlPXRoaXMuZXNjYXBlZFZhbHVlKHRva2VuLGNvbnRleHQpO2Vsc2UgaWYoc3ltYm9sPT09XCJ0ZXh0XCIpdmFsdWU9dGhpcy5yYXdWYWx1ZSh0b2tlbik7aWYodmFsdWUhPT11bmRlZmluZWQpYnVmZmVyKz12YWx1ZX1yZXR1cm4gYnVmZmVyfTtXcml0ZXIucHJvdG90eXBlLnJlbmRlclNlY3Rpb249ZnVuY3Rpb24gcmVuZGVyU2VjdGlvbih0b2tlbixjb250ZXh0LHBhcnRpYWxzLG9yaWdpbmFsVGVtcGxhdGUpe3ZhciBzZWxmPXRoaXM7dmFyIGJ1ZmZlcj1cIlwiO3ZhciB2YWx1ZT1jb250ZXh0Lmxvb2t1cCh0b2tlblsxXSk7ZnVuY3Rpb24gc3ViUmVuZGVyKHRlbXBsYXRlKXtyZXR1cm4gc2VsZi5yZW5kZXIodGVtcGxhdGUsY29udGV4dCxwYXJ0aWFscyl9aWYoIXZhbHVlKXJldHVybjtpZihpc0FycmF5KHZhbHVlKSl7Zm9yKHZhciBqPTAsdmFsdWVMZW5ndGg9dmFsdWUubGVuZ3RoO2o8dmFsdWVMZW5ndGg7KytqKXtidWZmZXIrPXRoaXMucmVuZGVyVG9rZW5zKHRva2VuWzRdLGNvbnRleHQucHVzaCh2YWx1ZVtqXSkscGFydGlhbHMsb3JpZ2luYWxUZW1wbGF0ZSl9fWVsc2UgaWYodHlwZW9mIHZhbHVlPT09XCJvYmplY3RcInx8dHlwZW9mIHZhbHVlPT09XCJzdHJpbmdcInx8dHlwZW9mIHZhbHVlPT09XCJudW1iZXJcIil7YnVmZmVyKz10aGlzLnJlbmRlclRva2Vucyh0b2tlbls0XSxjb250ZXh0LnB1c2godmFsdWUpLHBhcnRpYWxzLG9yaWdpbmFsVGVtcGxhdGUpfWVsc2UgaWYoaXNGdW5jdGlvbih2YWx1ZSkpe2lmKHR5cGVvZiBvcmlnaW5hbFRlbXBsYXRlIT09XCJzdHJpbmdcIil0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgdXNlIGhpZ2hlci1vcmRlciBzZWN0aW9ucyB3aXRob3V0IHRoZSBvcmlnaW5hbCB0ZW1wbGF0ZVwiKTt2YWx1ZT12YWx1ZS5jYWxsKGNvbnRleHQudmlldyxvcmlnaW5hbFRlbXBsYXRlLnNsaWNlKHRva2VuWzNdLHRva2VuWzVdKSxzdWJSZW5kZXIpO2lmKHZhbHVlIT1udWxsKWJ1ZmZlcis9dmFsdWV9ZWxzZXtidWZmZXIrPXRoaXMucmVuZGVyVG9rZW5zKHRva2VuWzRdLGNvbnRleHQscGFydGlhbHMsb3JpZ2luYWxUZW1wbGF0ZSl9cmV0dXJuIGJ1ZmZlcn07V3JpdGVyLnByb3RvdHlwZS5yZW5kZXJJbnZlcnRlZD1mdW5jdGlvbiByZW5kZXJJbnZlcnRlZCh0b2tlbixjb250ZXh0LHBhcnRpYWxzLG9yaWdpbmFsVGVtcGxhdGUpe3ZhciB2YWx1ZT1jb250ZXh0Lmxvb2t1cCh0b2tlblsxXSk7aWYoIXZhbHVlfHxpc0FycmF5KHZhbHVlKSYmdmFsdWUubGVuZ3RoPT09MClyZXR1cm4gdGhpcy5yZW5kZXJUb2tlbnModG9rZW5bNF0sY29udGV4dCxwYXJ0aWFscyxvcmlnaW5hbFRlbXBsYXRlKX07V3JpdGVyLnByb3RvdHlwZS5pbmRlbnRQYXJ0aWFsPWZ1bmN0aW9uIGluZGVudFBhcnRpYWwocGFydGlhbCxpbmRlbnRhdGlvbixsaW5lSGFzTm9uU3BhY2Upe3ZhciBmaWx0ZXJlZEluZGVudGF0aW9uPWluZGVudGF0aW9uLnJlcGxhY2UoL1teIFxcdF0vZyxcIlwiKTt2YXIgcGFydGlhbEJ5Tmw9cGFydGlhbC5zcGxpdChcIlxcblwiKTtmb3IodmFyIGk9MDtpPHBhcnRpYWxCeU5sLmxlbmd0aDtpKyspe2lmKHBhcnRpYWxCeU5sW2ldLmxlbmd0aCYmKGk+MHx8IWxpbmVIYXNOb25TcGFjZSkpe3BhcnRpYWxCeU5sW2ldPWZpbHRlcmVkSW5kZW50YXRpb24rcGFydGlhbEJ5TmxbaV19fXJldHVybiBwYXJ0aWFsQnlObC5qb2luKFwiXFxuXCIpfTtXcml0ZXIucHJvdG90eXBlLnJlbmRlclBhcnRpYWw9ZnVuY3Rpb24gcmVuZGVyUGFydGlhbCh0b2tlbixjb250ZXh0LHBhcnRpYWxzLHRhZ3Mpe2lmKCFwYXJ0aWFscylyZXR1cm47dmFyIHZhbHVlPWlzRnVuY3Rpb24ocGFydGlhbHMpP3BhcnRpYWxzKHRva2VuWzFdKTpwYXJ0aWFsc1t0b2tlblsxXV07aWYodmFsdWUhPW51bGwpe3ZhciBsaW5lSGFzTm9uU3BhY2U9dG9rZW5bNl07dmFyIHRhZ0luZGV4PXRva2VuWzVdO3ZhciBpbmRlbnRhdGlvbj10b2tlbls0XTt2YXIgaW5kZW50ZWRWYWx1ZT12YWx1ZTtpZih0YWdJbmRleD09MCYmaW5kZW50YXRpb24pe2luZGVudGVkVmFsdWU9dGhpcy5pbmRlbnRQYXJ0aWFsKHZhbHVlLGluZGVudGF0aW9uLGxpbmVIYXNOb25TcGFjZSl9cmV0dXJuIHRoaXMucmVuZGVyVG9rZW5zKHRoaXMucGFyc2UoaW5kZW50ZWRWYWx1ZSx0YWdzKSxjb250ZXh0LHBhcnRpYWxzLGluZGVudGVkVmFsdWUpfX07V3JpdGVyLnByb3RvdHlwZS51bmVzY2FwZWRWYWx1ZT1mdW5jdGlvbiB1bmVzY2FwZWRWYWx1ZSh0b2tlbixjb250ZXh0KXt2YXIgdmFsdWU9Y29udGV4dC5sb29rdXAodG9rZW5bMV0pO2lmKHZhbHVlIT1udWxsKXJldHVybiB2YWx1ZX07V3JpdGVyLnByb3RvdHlwZS5lc2NhcGVkVmFsdWU9ZnVuY3Rpb24gZXNjYXBlZFZhbHVlKHRva2VuLGNvbnRleHQpe3ZhciB2YWx1ZT1jb250ZXh0Lmxvb2t1cCh0b2tlblsxXSk7aWYodmFsdWUhPW51bGwpcmV0dXJuIG11c3RhY2hlLmVzY2FwZSh2YWx1ZSl9O1dyaXRlci5wcm90b3R5cGUucmF3VmFsdWU9ZnVuY3Rpb24gcmF3VmFsdWUodG9rZW4pe3JldHVybiB0b2tlblsxXX07bXVzdGFjaGUubmFtZT1cIm11c3RhY2hlLmpzXCI7bXVzdGFjaGUudmVyc2lvbj1cIjMuMS4wXCI7bXVzdGFjaGUudGFncz1bXCJ7e1wiLFwifX1cIl07dmFyIGRlZmF1bHRXcml0ZXI9bmV3IFdyaXRlcjttdXN0YWNoZS5jbGVhckNhY2hlPWZ1bmN0aW9uIGNsZWFyQ2FjaGUoKXtyZXR1cm4gZGVmYXVsdFdyaXRlci5jbGVhckNhY2hlKCl9O211c3RhY2hlLnBhcnNlPWZ1bmN0aW9uIHBhcnNlKHRlbXBsYXRlLHRhZ3Mpe3JldHVybiBkZWZhdWx0V3JpdGVyLnBhcnNlKHRlbXBsYXRlLHRhZ3MpfTttdXN0YWNoZS5yZW5kZXI9ZnVuY3Rpb24gcmVuZGVyKHRlbXBsYXRlLHZpZXcscGFydGlhbHMsdGFncyl7aWYodHlwZW9mIHRlbXBsYXRlIT09XCJzdHJpbmdcIil7dGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCB0ZW1wbGF0ZSEgVGVtcGxhdGUgc2hvdWxkIGJlIGEgXCJzdHJpbmdcIiAnKydidXQgXCInK3R5cGVTdHIodGVtcGxhdGUpKydcIiB3YXMgZ2l2ZW4gYXMgdGhlIGZpcnN0ICcrXCJhcmd1bWVudCBmb3IgbXVzdGFjaGUjcmVuZGVyKHRlbXBsYXRlLCB2aWV3LCBwYXJ0aWFscylcIil9cmV0dXJuIGRlZmF1bHRXcml0ZXIucmVuZGVyKHRlbXBsYXRlLHZpZXcscGFydGlhbHMsdGFncyl9O211c3RhY2hlLnRvX2h0bWw9ZnVuY3Rpb24gdG9faHRtbCh0ZW1wbGF0ZSx2aWV3LHBhcnRpYWxzLHNlbmQpe3ZhciByZXN1bHQ9bXVzdGFjaGUucmVuZGVyKHRlbXBsYXRlLHZpZXcscGFydGlhbHMpO2lmKGlzRnVuY3Rpb24oc2VuZCkpe3NlbmQocmVzdWx0KX1lbHNle3JldHVybiByZXN1bHR9fTttdXN0YWNoZS5lc2NhcGU9ZXNjYXBlSHRtbDttdXN0YWNoZS5TY2FubmVyPVNjYW5uZXI7bXVzdGFjaGUuQ29udGV4dD1Db250ZXh0O211c3RhY2hlLldyaXRlcj1Xcml0ZXI7cmV0dXJuIG11c3RhY2hlfSk7IiwiLypcbiAwQlNEXG4qL1xuKGZ1bmN0aW9uKEYseSl7XCJmdW5jdGlvblwiPT09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoeSk6XCJvYmplY3RcIj09PXR5cGVvZiBleHBvcnRzP21vZHVsZS5leHBvcnRzPXkoKTpGLnBpY2ttZXVwPXkoKX0pKHRoaXMsZnVuY3Rpb24oKXtmdW5jdGlvbiBGKGEsYyxiKXtiPWJ8fFtdO2lmKGEgaW5zdGFuY2VvZiBFbGVtZW50KWMuYXBwbHkoYyxbYV0uY29uY2F0KGIpKTtlbHNle3ZhciBkO3ZhciBlPWEubGVuZ3RoO2ZvcihkPTA7ZDxlOysrZCljLmFwcGx5KGMsW2FbZF1dLmNvbmNhdChiKSl9fWZ1bmN0aW9uIHkoYSl7RihhLGZ1bmN0aW9uKGEpe2EucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChhKX0pfWZ1bmN0aW9uIEooYSxjKXtkbyBhPWEucGFyZW50RWxlbWVudDt3aGlsZShhJiYhQihhLGMpKTtyZXR1cm4gYX1mdW5jdGlvbiBCKGEsYyl7cmV0dXJuKGEubWF0Y2hlc3x8YS53ZWJraXRNYXRjaGVzU2VsZWN0b3J8fGEubXNNYXRjaGVzU2VsZWN0b3IpLmNhbGwoYSxcbmMpfWZ1bmN0aW9uIGsoYSxjKXtyZXR1cm4gYSYmYS5jbGFzc0xpc3QuY29udGFpbnMoYyl9ZnVuY3Rpb24gbChhLGMpe2EuY2xhc3NMaXN0LmFkZChjKX1mdW5jdGlvbiBxKGEsYyxiLGQpe2lmKC0xIT09Yi5pbmRleE9mKFwiIFwiKSl7Yj1iLnNwbGl0KFwiIFwiKTt2YXIgZT1iLmxlbmd0aCxoO2ZvcihoPTA7aDxlOysraClxKGEsYyxiW2hdLGQpfWVsc2UgYS5fX3BpY2ttZXVwLmV2ZW50cy5wdXNoKFtjLGIsZF0pLGMuYWRkRXZlbnRMaXN0ZW5lcihiLGQpfWZ1bmN0aW9uIHooYSxjLGIsZCl7dmFyIGU7aWYoYiYmLTEhPT1iLmluZGV4T2YoXCIgXCIpKXt2YXIgaD1iLnNwbGl0KFwiIFwiKTt2YXIgbD1oLmxlbmd0aDtmb3IoZT0wO2U8bDsrK2UpeihhLGMsaFtlXSxkKX1lbHNlIGZvcihoPWEuX19waWNrbWV1cC5ldmVudHMsbD1oLmxlbmd0aCxlPTA7ZTxsOysrZSljJiZjIT09aFtlXVswXXx8YiYmYiE9PWhbZV1bMV18fGQmJmQhPT1oW2VdWzJdfHxoW2VdWzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoaFtlXVsxXSxcbmhbZV1bMl0pfWZ1bmN0aW9uIE0oYSl7YT1hLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO3JldHVybnt0b3A6YS50b3Ard2luZG93LnBhZ2VZT2Zmc2V0LWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRUb3AsbGVmdDphLmxlZnQrd2luZG93LnBhZ2VYT2Zmc2V0LWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRMZWZ0fX1mdW5jdGlvbiBDKGEsYyxiKXt2YXIgZD1kb2N1bWVudC5jcmVhdGVFdmVudChcIkV2ZW50XCIpO2ImJihkLmRldGFpbD1iKTtkLmluaXRFdmVudChcInBpY2ttZXVwLVwiK2MsITEsITApO3JldHVybiBhLmRpc3BhdGNoRXZlbnQoZCl9ZnVuY3Rpb24gSyhhKXthPW5ldyBEYXRlKGEpO2Zvcih2YXIgYz0yOCxiPWEuZ2V0TW9udGgoKTthLmdldE1vbnRoKCk9PT1iOykrK2MsYS5zZXREYXRlKGMpO3JldHVybiBjLTF9ZnVuY3Rpb24gQShhLGMpe2Euc2V0RGF0ZShhLmdldERhdGUoKStjKX1mdW5jdGlvbiBwKGEsYyl7dmFyIGI9YS5nZXREYXRlKCk7YS5zZXREYXRlKDEpO1xuYS5zZXRNb250aChhLmdldE1vbnRoKCkrYyk7YS5zZXREYXRlKE1hdGgubWluKGIsSyhhKSkpfWZ1bmN0aW9uIHUoYSxjKXt2YXIgYj1hLmdldERhdGUoKTthLnNldERhdGUoMSk7YS5zZXRGdWxsWWVhcihhLmdldEZ1bGxZZWFyKCkrYyk7YS5zZXREYXRlKE1hdGgubWluKGIsSyhhKSkpfWZ1bmN0aW9uIE4oYSl7dmFyIGM9YS5fX3BpY2ttZXVwLmVsZW1lbnQsYj1hLl9fcGlja21ldXAub3B0aW9ucyxkPU1hdGguZmxvb3IoYi5jYWxlbmRhcnMvMiksZT1iLmRhdGUsaD1iLmN1cnJlbnQsbT1iLm1pbj9uZXcgRGF0ZShiLm1pbik6bnVsbCx2PWIubWF4P25ldyBEYXRlKGIubWF4KTpudWxsO20mJihtLnNldERhdGUoMSkscChtLDEpLEEobSwtMSkpO3YmJih2LnNldERhdGUoMSkscCh2LDEpLEEodiwtMSkpO3koQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYy5xdWVyeVNlbGVjdG9yQWxsKFwiLnBtdS1pbnN0YW5jZSA+IDpub3QobmF2KVwiKSkpO2Zvcih2YXIgdz0wO3c8Yi5jYWxlbmRhcnM7dysrKXt2YXIgZj1cbm5ldyBEYXRlKGgpO3goZik7dmFyIG49QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYy5xdWVyeVNlbGVjdG9yQWxsKFwiLnBtdS1pbnN0YW5jZVwiKSlbd107aWYoayhjLFwicG11LXZpZXcteWVhcnNcIikpe3UoZiwxMioody1kKSk7dmFyIEc9Zi5nZXRGdWxsWWVhcigpLTYrXCIgLSBcIisoZi5nZXRGdWxsWWVhcigpKzUpfWVsc2UgayhjLFwicG11LXZpZXctbW9udGhzXCIpPyh1KGYsdy1kKSxHPWYuZ2V0RnVsbFllYXIoKSk6ayhjLFwicG11LXZpZXctZGF5c1wiKSYmKHAoZix3LWQpLEc9XCJmdW5jdGlvblwiPT09dHlwZW9mIGIudGl0bGVfZm9ybWF0P2IudGl0bGVfZm9ybWF0KGYsYi5sb2NhbGVzW2IubG9jYWxlXSk6RChmLGIudGl0bGVfZm9ybWF0LGIubG9jYWxlc1tiLmxvY2FsZV0pKTtpZighciYmdil7dmFyIHI9bmV3IERhdGUoZik7Yi5zZWxlY3RfZGF5P3AocixiLmNhbGVuZGFycy0xKTpiLnNlbGVjdF9tb250aD91KHIsYi5jYWxlbmRhcnMtMSk6dShyLDEyKihiLmNhbGVuZGFycy0xKSk7XG5pZihyPnYpey0tdztwKGgsLTEpO3I9dm9pZCAwO2NvbnRpbnVlfX1yPW5ldyBEYXRlKGYpO2lmKCFnKXt2YXIgZz1uZXcgRGF0ZShmKTtnLnNldERhdGUoMSk7cChnLDEpO0EoZywtMSk7aWYobSYmbT5nKXstLXc7cChoLDEpO2c9dm9pZCAwO2NvbnRpbnVlfX1uLnF1ZXJ5U2VsZWN0b3IoXCIucG11LW1vbnRoXCIpLmlubmVySFRNTD1HO3ZhciBxPWZ1bmN0aW9uKGEpe3JldHVyblwicmFuZ2VcIj09PWIubW9kZSYmYT49KG5ldyBEYXRlKGVbMF0pKS5nZXRGdWxsWWVhcigpJiZhPD0obmV3IERhdGUoZVsxXSkpLmdldEZ1bGxZZWFyKCl8fFwibXVsdGlwbGVcIj09PWIubW9kZSYmLTEhPT1lLnJlZHVjZShmdW5jdGlvbihhLGIpe2EucHVzaCgobmV3IERhdGUoYikpLmdldEZ1bGxZZWFyKCkpO3JldHVybiBhfSxbXSkuaW5kZXhPZihhKXx8KG5ldyBEYXRlKGUpKS5nZXRGdWxsWWVhcigpPT09YX0sdD1mdW5jdGlvbihhLGMpe3ZhciBkPShuZXcgRGF0ZShlWzBdKSkuZ2V0RnVsbFllYXIoKSxmPShuZXcgRGF0ZShlWzFdKSkuZ2V0RnVsbFllYXIoKSxcbmg9KG5ldyBEYXRlKGVbMF0pKS5nZXRNb250aCgpLGc9KG5ldyBEYXRlKGVbMV0pKS5nZXRNb250aCgpO3JldHVyblwicmFuZ2VcIj09PWIubW9kZSYmKGE+ZCYmYTxmfHxhPmQmJmE9PT1mJiZjPD1nfHxhPT09ZCYmYTxmJiZjPj1ofHxhPT09ZCYmYT09PWYmJmM+PWgmJmM8PWcpfHxcIm11bHRpcGxlXCI9PT1iLm1vZGUmJi0xIT09ZS5yZWR1Y2UoZnVuY3Rpb24oYSxiKXtiPW5ldyBEYXRlKGIpO2EucHVzaChiLmdldEZ1bGxZZWFyKCkrXCItXCIrYi5nZXRNb250aCgpKTtyZXR1cm4gYX0sW10pLmluZGV4T2YoYStcIi1cIitjKXx8KG5ldyBEYXRlKGUpKS5nZXRGdWxsWWVhcigpPT09YSYmKG5ldyBEYXRlKGUpKS5nZXRNb250aCgpPT09Y307KGZ1bmN0aW9uKCl7dmFyIGE9W10sYz1mLmdldEZ1bGxZZWFyKCktNixkPShuZXcgRGF0ZShiLm1pbikpLmdldEZ1bGxZZWFyKCksZT0obmV3IERhdGUoYi5tYXgpKS5nZXRGdWxsWWVhcigpLGg7Zm9yKGg9MDsxMj5oOysraCl7dmFyIGc9YytoO3ZhciBtPVxuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTttLnRleHRDb250ZW50PWc7bS5fX3BpY2ttZXVwX3llYXI9ZztiLm1pbiYmZzxkfHxiLm1heCYmZz5lP2wobSxcInBtdS1kaXNhYmxlZFwiKTpxKGcpJiZsKG0sXCJwbXUtc2VsZWN0ZWRcIik7YS5wdXNoKG0pfW4uYXBwZW5kQ2hpbGQoYi5pbnN0YW5jZV9jb250ZW50X3RlbXBsYXRlKGEsXCJwbXUteWVhcnNcIikpfSkoKTsoZnVuY3Rpb24oKXt2YXIgYT1bXSxjPWYuZ2V0RnVsbFllYXIoKSxkPShuZXcgRGF0ZShiLm1pbikpLmdldEZ1bGxZZWFyKCksZT0obmV3IERhdGUoYi5taW4pKS5nZXRNb250aCgpLGc9KG5ldyBEYXRlKGIubWF4KSkuZ2V0RnVsbFllYXIoKSxoPShuZXcgRGF0ZShiLm1heCkpLmdldE1vbnRoKCksbTtmb3IobT0wOzEyPm07KyttKXt2YXIgaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2sudGV4dENvbnRlbnQ9Yi5sb2NhbGVzW2IubG9jYWxlXS5tb250aHNTaG9ydFttXTtrLl9fcGlja21ldXBfbW9udGg9bTtcbmsuX19waWNrbWV1cF95ZWFyPWM7Yi5taW4mJihjPGR8fG08ZSYmYz09PWQpfHxiLm1heCYmKGM+Z3x8bT5oJiZjPj1nKT9sKGssXCJwbXUtZGlzYWJsZWRcIik6dChjLG0pJiZsKGssXCJwbXUtc2VsZWN0ZWRcIik7YS5wdXNoKGspfW4uYXBwZW5kQ2hpbGQoYi5pbnN0YW5jZV9jb250ZW50X3RlbXBsYXRlKGEsXCJwbXUtbW9udGhzXCIpKX0pKCk7KGZ1bmN0aW9uKCl7dmFyIGE9W10sYz1mLmdldE1vbnRoKCksZD14KG5ldyBEYXRlKS52YWx1ZU9mKCksZTsoZnVuY3Rpb24oKXtmLnNldERhdGUoMSk7dmFyIGE9KGYuZ2V0RGF5KCktYi5maXJzdF9kYXkpJTc7QShmLC0oYSsoMD5hPzc6MCkpKX0pKCk7Zm9yKGU9MDs0Mj5lOysrZSl7dmFyIGc9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtnLnRleHRDb250ZW50PWYuZ2V0RGF0ZSgpO2cuX19waWNrbWV1cF9kYXk9Zi5nZXREYXRlKCk7Zy5fX3BpY2ttZXVwX21vbnRoPWYuZ2V0TW9udGgoKTtnLl9fcGlja21ldXBfeWVhcj1mLmdldEZ1bGxZZWFyKCk7XG5jIT09Zi5nZXRNb250aCgpJiZsKGcsXCJwbXUtbm90LWluLW1vbnRoXCIpOzA9PT1mLmdldERheSgpP2woZyxcInBtdS1zdW5kYXlcIik6Nj09PWYuZ2V0RGF5KCkmJmwoZyxcInBtdS1zYXR1cmRheVwiKTt2YXIgaD1iLnJlbmRlcihuZXcgRGF0ZShmKSl8fHt9O3ZhciBtPXgobmV3IERhdGUoZikpLnZhbHVlT2YoKTt2YXIgaz1iLm1pbiYmYi5taW4+Znx8Yi5tYXgmJmIubWF4PGY7dmFyIHY9Yi5kYXRlLnZhbHVlT2YoKT09PW18fGIuZGF0ZSBpbnN0YW5jZW9mIEFycmF5JiZiLmRhdGUucmVkdWNlKGZ1bmN0aW9uKGEsYil7cmV0dXJuIGF8fG09PT1iLnZhbHVlT2YoKX0sITEpfHxcInJhbmdlXCI9PT1iLm1vZGUmJm0+PWIuZGF0ZVswXSYmbTw9Yi5kYXRlWzFdO2guZGlzYWJsZWR8fCEoXCJkaXNhYmxlZFwiaW4gaCkmJms/bChnLFwicG11LWRpc2FibGVkXCIpOihoLnNlbGVjdGVkfHwhKFwic2VsZWN0ZWRcImluIGgpJiZ2KSYmbChnLFwicG11LXNlbGVjdGVkXCIpO209PT1kJiZsKGcsXCJwbXUtdG9kYXlcIik7XG5oLmNsYXNzX25hbWUmJmguY2xhc3NfbmFtZS5zcGxpdChcIiBcIikuZm9yRWFjaChsLmJpbmQoZyxnKSk7YS5wdXNoKGcpO0EoZiwxKX1uLmFwcGVuZENoaWxkKGIuaW5zdGFuY2VfY29udGVudF90ZW1wbGF0ZShhLFwicG11LWRheXNcIikpfSkoKX1nLnNldERhdGUoMSk7ci5zZXREYXRlKDEpO3AociwxKTtBKHIsLTEpO2Q9Yy5xdWVyeVNlbGVjdG9yKFwiLnBtdS1wcmV2XCIpO2M9Yy5xdWVyeVNlbGVjdG9yKFwiLnBtdS1uZXh0XCIpO2QmJihkLnN0eWxlLnZpc2liaWxpdHk9Yi5taW4mJmIubWluPj1nP1wiaGlkZGVuXCI6XCJ2aXNpYmxlXCIpO2MmJihjLnN0eWxlLnZpc2liaWxpdHk9Yi5tYXgmJmIubWF4PD1yP1wiaGlkZGVuXCI6XCJ2aXNpYmxlXCIpO0MoYSxcImZpbGxcIil9ZnVuY3Rpb24gdChhLGMpe3ZhciBiPWMuZm9ybWF0LGQ9Yy5zZXBhcmF0b3IsZT1jLmxvY2FsZXNbYy5sb2NhbGVdO2lmKGEgaW5zdGFuY2VvZiBEYXRlfHxcIm51bWJlclwiPT09dHlwZW9mIGEpcmV0dXJuIHgobmV3IERhdGUoYSkpO1xuaWYoIWEpcmV0dXJuIHgobmV3IERhdGUpO2lmKGEgaW5zdGFuY2VvZiBBcnJheSl7YT1hLnNsaWNlKCk7Zm9yKGI9MDtiPGEubGVuZ3RoOysrYilhW2JdPXQoYVtiXSxjKTtyZXR1cm4gYX1kPWEuc3BsaXQoZCk7aWYoMTxkLmxlbmd0aClyZXR1cm4gZC5mb3JFYWNoKGZ1bmN0aW9uKGEsYixkKXtkW2JdPXQoYS50cmltKCksYyl9KSxkO2Q9W10uY29uY2F0KGUuZGF5c1Nob3J0LGUuZGF5c01pbixlLmRheXMsZS5tb250aHNTaG9ydCxlLm1vbnRocyk7ZD1kLm1hcChmdW5jdGlvbihhKXtyZXR1cm5cIihcIithK1wiKVwifSk7ZD1uZXcgUmVnRXhwKFwiW14wLTlhLXpBLVpcIitkLmpvaW4oXCJcIikrXCJdK1wiKTthPWEuc3BsaXQoZCk7ZD1iLnNwbGl0KGQpO3ZhciBoPW5ldyBEYXRlO2ZvcihiPTA7YjxhLmxlbmd0aDtiKyspc3dpdGNoKGRbYl0pe2Nhc2UgXCJiXCI6dmFyIG09ZS5tb250aHNTaG9ydC5pbmRleE9mKGFbYl0pO2JyZWFrO2Nhc2UgXCJCXCI6bT1lLm1vbnRocy5pbmRleE9mKGFbYl0pO2JyZWFrO1xuY2FzZSBcImRcIjpjYXNlIFwiZVwiOnZhciBsPXBhcnNlSW50KGFbYl0sMTApO2JyZWFrO2Nhc2UgXCJtXCI6bT1wYXJzZUludChhW2JdLDEwKS0xO2JyZWFrO2Nhc2UgXCJZXCI6Y2FzZSBcInlcIjp2YXIgaz1wYXJzZUludChhW2JdLDEwKTtrKz0xMDA8az8wOjI5Pms/MkUzOjE5MDA7YnJlYWs7Y2FzZSBcIkhcIjpjYXNlIFwiSVwiOmNhc2UgXCJrXCI6Y2FzZSBcImxcIjp2YXIgZj1wYXJzZUludChhW2JdLDEwKTticmVhaztjYXNlIFwiUFwiOmNhc2UgXCJwXCI6L3BtL2kudGVzdChhW2JdKSYmMTI+Zj9mKz0xMjovYW0vaS50ZXN0KGFbYl0pJiYxMjw9ZiYmKGYtPTEyKTticmVhaztjYXNlIFwiTVwiOnZhciBuPXBhcnNlSW50KGFbYl0sMTApfWU9bmV3IERhdGUodm9pZCAwPT09az9oLmdldEZ1bGxZZWFyKCk6ayx2b2lkIDA9PT1tP2guZ2V0TW9udGgoKTptLHZvaWQgMD09PWw/aC5nZXREYXRlKCk6bCx2b2lkIDA9PT1mP2guZ2V0SG91cnMoKTpmLHZvaWQgMD09PW4/aC5nZXRNaW51dGVzKCk6biwwKTtpc05hTigxKmUpJiZcbihlPW5ldyBEYXRlKTtyZXR1cm4geChlKX1mdW5jdGlvbiB4KGEpe2Euc2V0SG91cnMoMCwwLDAsMCk7cmV0dXJuIGF9ZnVuY3Rpb24gRChhLGMsYil7dmFyIGQ9YS5nZXRNb250aCgpLGU9YS5nZXREYXRlKCksaD1hLmdldEZ1bGxZZWFyKCksbT1hLmdldERheSgpLGs9YS5nZXRIb3VycygpLGw9MTI8PWssZj1sP2stMTI6azt2YXIgbj1uZXcgRGF0ZShhLmdldEZ1bGxZZWFyKCksYS5nZXRNb250aCgpLGEuZ2V0RGF0ZSgpLDAsMCwwKTt2YXIgcD1uZXcgRGF0ZShhLmdldEZ1bGxZZWFyKCksMCwwLDAsMCwwKTtuPU1hdGguZmxvb3IoKG4tcCkvODY0RTUpOzA9PT1mJiYoZj0xMik7cD1hLmdldE1pbnV0ZXMoKTt2YXIgcj1hLmdldFNlY29uZHMoKTtjPWMuc3BsaXQoXCJcIik7Zm9yKHZhciBnLHE9MDtxPGMubGVuZ3RoO3ErKyl7Zz1jW3FdO3N3aXRjaChnKXtjYXNlIFwiYVwiOmc9Yi5kYXlzU2hvcnRbbV07YnJlYWs7Y2FzZSBcIkFcIjpnPWIuZGF5c1ttXTticmVhaztjYXNlIFwiYlwiOmc9Yi5tb250aHNTaG9ydFtkXTtcbmJyZWFrO2Nhc2UgXCJCXCI6Zz1iLm1vbnRoc1tkXTticmVhaztjYXNlIFwiQ1wiOmc9MStNYXRoLmZsb29yKGgvMTAwKTticmVhaztjYXNlIFwiZFwiOmc9MTA+ZT9cIjBcIitlOmU7YnJlYWs7Y2FzZSBcImVcIjpnPWU7YnJlYWs7Y2FzZSBcIkhcIjpnPTEwPms/XCIwXCIrazprO2JyZWFrO2Nhc2UgXCJJXCI6Zz0xMD5mP1wiMFwiK2Y6ZjticmVhaztjYXNlIFwialwiOmc9MTAwPm4/MTA+bj9cIjAwXCIrbjpcIjBcIituOm47YnJlYWs7Y2FzZSBcImtcIjpnPWs7YnJlYWs7Y2FzZSBcImxcIjpnPWY7YnJlYWs7Y2FzZSBcIm1cIjpnPTk+ZD9cIjBcIisoMStkKToxK2Q7YnJlYWs7Y2FzZSBcIk1cIjpnPTEwPnA/XCIwXCIrcDpwO2JyZWFrO2Nhc2UgXCJwXCI6Y2FzZSBcIlBcIjpnPWw/XCJQTVwiOlwiQU1cIjticmVhaztjYXNlIFwic1wiOmc9TWF0aC5mbG9vcihhLmdldFRpbWUoKS8xRTMpO2JyZWFrO2Nhc2UgXCJTXCI6Zz0xMD5yP1wiMFwiK3I6cjticmVhaztjYXNlIFwidVwiOmc9bSsxO2JyZWFrO2Nhc2UgXCJ3XCI6Zz1tO2JyZWFrO2Nhc2UgXCJ5XCI6Zz0oXCJcIitoKS5zdWJzdHIoMixcbjIpO2JyZWFrO2Nhc2UgXCJZXCI6Zz1ofWNbcV09Z31yZXR1cm4gYy5qb2luKFwiXCIpfWZ1bmN0aW9uIE8oYSxjKXt2YXIgYj1hLl9fcGlja21ldXAub3B0aW9ucyxkO3goYyk7YTpzd2l0Y2goYi5tb2RlKXtjYXNlIFwibXVsdGlwbGVcIjp2YXIgZT1jLnZhbHVlT2YoKTtmb3IoZD0wO2Q8Yi5kYXRlLmxlbmd0aDsrK2QpaWYoYi5kYXRlW2RdLnZhbHVlT2YoKT09PWUpe2IuZGF0ZS5zcGxpY2UoZCwxKTticmVhayBhfWIuZGF0ZS5wdXNoKGMpO2JyZWFrO2Nhc2UgXCJyYW5nZVwiOmIubGFzdFNlbHx8KGIuZGF0ZVswXT1jKTtjPD1iLmRhdGVbMF0/KGIuZGF0ZVsxXT1iLmRhdGVbMF0sYi5kYXRlWzBdPWMpOmIuZGF0ZVsxXT1jO2IubGFzdFNlbD0hYi5sYXN0U2VsO2JyZWFrO2RlZmF1bHQ6Yi5kYXRlPWMudmFsdWVPZigpfWM9SChiKTtCKGEsXCJpbnB1dFwiKSYmKGEudmFsdWU9XCJzaW5nbGVcIj09PWIubW9kZT9jLmZvcm1hdHRlZF9kYXRlOmMuZm9ybWF0dGVkX2RhdGUuam9pbihiLnNlcGFyYXRvcikpO1xuQyhhLFwiY2hhbmdlXCIsYyk7Yi5mbGF0fHwhYi5oaWRlX29uX3NlbGVjdHx8XCJyYW5nZVwiPT09Yi5tb2RlJiZiLmxhc3RTZWx8fGIuYm91bmQuaGlkZSgpfWZ1bmN0aW9uIFAoYSxjKXt2YXIgYj1jLnRhcmdldDtrKGIsXCJwbXUtYnV0dG9uXCIpfHwoYj1KKGIsXCIucG11LWJ1dHRvblwiKSk7aWYoIWsoYixcInBtdS1idXR0b25cIil8fGsoYixcInBtdS1kaXNhYmxlZFwiKSlyZXR1cm4hMTtjLnByZXZlbnREZWZhdWx0KCk7Yy5zdG9wUHJvcGFnYXRpb24oKTthPWEuX19waWNrbWV1cC5vcHRpb25zO3ZhciBkPUooYixcIi5wbXUtaW5zdGFuY2VcIik7Yz1kLnBhcmVudEVsZW1lbnQ7ZD1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChjLnF1ZXJ5U2VsZWN0b3JBbGwoXCIucG11LWluc3RhbmNlXCIpKS5pbmRleE9mKGQpO0IoYi5wYXJlbnRFbGVtZW50LFwibmF2XCIpP2soYixcInBtdS1tb250aFwiKT8ocChhLmN1cnJlbnQsZC1NYXRoLmZsb29yKGEuY2FsZW5kYXJzLzIpKSxrKGMsXCJwbXUtdmlldy15ZWFyc1wiKT9cbihhLmN1cnJlbnQ9XCJzaW5nbGVcIiE9PWEubW9kZT9uZXcgRGF0ZShhLmRhdGVbYS5kYXRlLmxlbmd0aC0xXSk6bmV3IERhdGUoYS5kYXRlKSxhLnNlbGVjdF9kYXk/KGMuY2xhc3NMaXN0LnJlbW92ZShcInBtdS12aWV3LXllYXJzXCIpLGwoYyxcInBtdS12aWV3LWRheXNcIikpOmEuc2VsZWN0X21vbnRoJiYoYy5jbGFzc0xpc3QucmVtb3ZlKFwicG11LXZpZXcteWVhcnNcIiksbChjLFwicG11LXZpZXctbW9udGhzXCIpKSk6ayhjLFwicG11LXZpZXctbW9udGhzXCIpP2Euc2VsZWN0X3llYXI/KGMuY2xhc3NMaXN0LnJlbW92ZShcInBtdS12aWV3LW1vbnRoc1wiKSxsKGMsXCJwbXUtdmlldy15ZWFyc1wiKSk6YS5zZWxlY3RfZGF5JiYoYy5jbGFzc0xpc3QucmVtb3ZlKFwicG11LXZpZXctbW9udGhzXCIpLGwoYyxcInBtdS12aWV3LWRheXNcIikpOmsoYyxcInBtdS12aWV3LWRheXNcIikmJihhLnNlbGVjdF9tb250aD8oYy5jbGFzc0xpc3QucmVtb3ZlKFwicG11LXZpZXctZGF5c1wiKSxsKGMsXCJwbXUtdmlldy1tb250aHNcIikpOlxuYS5zZWxlY3RfeWVhciYmKGMuY2xhc3NMaXN0LnJlbW92ZShcInBtdS12aWV3LWRheXNcIiksbChjLFwicG11LXZpZXcteWVhcnNcIikpKSk6ayhiLFwicG11LXByZXZcIik/YS5ib3VuZC5wcmV2KCExKTphLmJvdW5kLm5leHQoITEpOmsoYyxcInBtdS12aWV3LXllYXJzXCIpPyhhLmN1cnJlbnQuc2V0RnVsbFllYXIoYi5fX3BpY2ttZXVwX3llYXIpLGEuc2VsZWN0X21vbnRoPyhjLmNsYXNzTGlzdC5yZW1vdmUoXCJwbXUtdmlldy15ZWFyc1wiKSxsKGMsXCJwbXUtdmlldy1tb250aHNcIikpOmEuc2VsZWN0X2RheT8oYy5jbGFzc0xpc3QucmVtb3ZlKFwicG11LXZpZXcteWVhcnNcIiksbChjLFwicG11LXZpZXctZGF5c1wiKSk6YS5ib3VuZC51cGRhdGVfZGF0ZShhLmN1cnJlbnQpKTprKGMsXCJwbXUtdmlldy1tb250aHNcIik/KGEuY3VycmVudC5zZXRNb250aChiLl9fcGlja21ldXBfbW9udGgpLGEuY3VycmVudC5zZXRGdWxsWWVhcihiLl9fcGlja21ldXBfeWVhciksYS5zZWxlY3RfZGF5PyhjLmNsYXNzTGlzdC5yZW1vdmUoXCJwbXUtdmlldy1tb250aHNcIiksXG5sKGMsXCJwbXUtdmlldy1kYXlzXCIpKTphLmJvdW5kLnVwZGF0ZV9kYXRlKGEuY3VycmVudCkscChhLmN1cnJlbnQsTWF0aC5mbG9vcihhLmNhbGVuZGFycy8yKS1kKSk6KGM9bmV3IERhdGUoYS5jdXJyZW50KSxjLnNldFllYXIoYi5fX3BpY2ttZXVwX3llYXIpLGMuc2V0TW9udGgoYi5fX3BpY2ttZXVwX21vbnRoKSxjLnNldERhdGUoYi5fX3BpY2ttZXVwX2RheSksYS5ib3VuZC51cGRhdGVfZGF0ZShjKSk7YS5ib3VuZC5maWxsKCk7cmV0dXJuITB9ZnVuY3Rpb24gSChhKXtpZihcInNpbmdsZVwiPT09YS5tb2RlKXt2YXIgYz1uZXcgRGF0ZShhLmRhdGUpO3JldHVybntmb3JtYXR0ZWRfZGF0ZTpEKGMsYS5mb3JtYXQsYS5sb2NhbGVzW2EubG9jYWxlXSksZGF0ZTpjfX1jPXtmb3JtYXR0ZWRfZGF0ZTpbXSxkYXRlOltdfTthLmRhdGUuZm9yRWFjaChmdW5jdGlvbihiKXtiPW5ldyBEYXRlKGIpO2MuZm9ybWF0dGVkX2RhdGUucHVzaChEKGIsYS5mb3JtYXQsYS5sb2NhbGVzW2EubG9jYWxlXSkpO1xuYy5kYXRlLnB1c2goYil9KTtyZXR1cm4gY31mdW5jdGlvbiBJKGEsYyl7dmFyIGI9YS5fX3BpY2ttZXVwLmVsZW1lbnQ7aWYoY3x8ayhiLFwicG11LWhpZGRlblwiKSl7dmFyIGQ9YS5fX3BpY2ttZXVwLm9wdGlvbnMsZT1NKGEpLGg9d2luZG93LnBhZ2VYT2Zmc2V0LG09d2luZG93LnBhZ2VZT2Zmc2V0LGw9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLHA9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCxmPWUudG9wLG49ZS5sZWZ0O2QuYm91bmQuZmlsbCgpO0IoYSxcImlucHV0XCIpJiYoKGM9YS52YWx1ZSkmJmQuYm91bmQuc2V0X2RhdGUoYykscShhLGEsXCJrZXlkb3duXCIsZnVuY3Rpb24oYSl7OT09PWEud2hpY2gmJmQuYm91bmQuaGlkZSgpfSksZC5sYXN0U2VsPSExKTtpZihDKGEsXCJzaG93XCIpJiYhZC5mbGF0KXtiLmNsYXNzTGlzdC5yZW1vdmUoXCJwbXUtaGlkZGVuXCIpO2lmKGQucG9zaXRpb24gaW5zdGFuY2VvZiBGdW5jdGlvbillPWQucG9zaXRpb24uY2FsbChhKSxcbm49ZS5sZWZ0LGY9ZS50b3A7ZWxzZXtzd2l0Y2goZC5wb3NpdGlvbil7Y2FzZSBcInRvcFwiOmYtPWIub2Zmc2V0SGVpZ2h0O2JyZWFrO2Nhc2UgXCJsZWZ0XCI6bi09Yi5vZmZzZXRXaWR0aDticmVhaztjYXNlIFwicmlnaHRcIjpuKz1hLm9mZnNldFdpZHRoO2JyZWFrO2Nhc2UgXCJib3R0b21cIjpmKz1hLm9mZnNldEhlaWdodH1mK2Iub2Zmc2V0SGVpZ2h0Pm0rcCYmKGY9ZS50b3AtYi5vZmZzZXRIZWlnaHQpO2Y8bSYmKGY9ZS50b3ArYS5vZmZzZXRIZWlnaHQpO24rYi5vZmZzZXRXaWR0aD5oK2wmJihuPWUubGVmdC1iLm9mZnNldFdpZHRoKTtuPGgmJihuPWUubGVmdCthLm9mZnNldFdpZHRoKTtuKz1cInB4XCI7Zis9XCJweFwifWIuc3R5bGUubGVmdD1uO2Iuc3R5bGUudG9wPWY7c2V0VGltZW91dChmdW5jdGlvbigpe3EoYSxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXCJjbGlja1wiLGQuYm91bmQuaGlkZSk7cShhLHdpbmRvdyxcInJlc2l6ZVwiLGQuYm91bmQuZm9yY2VkX3Nob3cpfSl9fX1mdW5jdGlvbiBRKGEsXG5jKXt2YXIgYj1hLl9fcGlja21ldXAuZWxlbWVudCxkPWEuX19waWNrbWV1cC5vcHRpb25zO2MmJmMudGFyZ2V0JiYoYy50YXJnZXQ9PT1hfHxiLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGMudGFyZ2V0KSYxNil8fCFDKGEsXCJoaWRlXCIpfHwobChiLFwicG11LWhpZGRlblwiKSx6KGEsZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFwiY2xpY2tcIixkLmJvdW5kLmhpZGUpLHooYSx3aW5kb3csXCJyZXNpemVcIixkLmJvdW5kLmZvcmNlZF9zaG93KSxkLmxhc3RTZWw9ITEpfWZ1bmN0aW9uIFIoYSl7dmFyIGM9YS5fX3BpY2ttZXVwLm9wdGlvbnM7eihhLGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcImNsaWNrXCIsYy5ib3VuZC5oaWRlKTt6KGEsd2luZG93LFwicmVzaXplXCIsYy5ib3VuZC5mb3JjZWRfc2hvdyk7Yy5ib3VuZC5mb3JjZWRfc2hvdygpfWZ1bmN0aW9uIFMoYSl7YT1hLl9fcGlja21ldXAub3B0aW9ucztcInNpbmdsZVwiIT09YS5tb2RlJiYoYS5kYXRlPVtdLGEubGFzdFNlbD0hMSxhLmJvdW5kLmZpbGwoKSl9XG5mdW5jdGlvbiBUKGEsYyl7XCJ1bmRlZmluZWRcIj09dHlwZW9mIGMmJihjPSEwKTt2YXIgYj1hLl9fcGlja21ldXAuZWxlbWVudDthPWEuX19waWNrbWV1cC5vcHRpb25zO2soYixcInBtdS12aWV3LXllYXJzXCIpP3UoYS5jdXJyZW50LC0xMik6ayhiLFwicG11LXZpZXctbW9udGhzXCIpP3UoYS5jdXJyZW50LC0xKTprKGIsXCJwbXUtdmlldy1kYXlzXCIpJiZwKGEuY3VycmVudCwtMSk7YyYmYS5ib3VuZC5maWxsKCl9ZnVuY3Rpb24gVShhLGMpe1widW5kZWZpbmVkXCI9PXR5cGVvZiBjJiYoYz0hMCk7dmFyIGI9YS5fX3BpY2ttZXVwLmVsZW1lbnQ7YT1hLl9fcGlja21ldXAub3B0aW9ucztrKGIsXCJwbXUtdmlldy15ZWFyc1wiKT91KGEuY3VycmVudCwxMik6ayhiLFwicG11LXZpZXctbW9udGhzXCIpP3UoYS5jdXJyZW50LDEpOmsoYixcInBtdS12aWV3LWRheXNcIikmJnAoYS5jdXJyZW50LDEpO2MmJmEuYm91bmQuZmlsbCgpfWZ1bmN0aW9uIFYoYSxjKXt2YXIgYj1hLl9fcGlja21ldXAub3B0aW9uczthPVxuSChiKTtyZXR1cm5cInN0cmluZ1wiPT09dHlwZW9mIGM/KGE9YS5kYXRlLGEgaW5zdGFuY2VvZiBEYXRlP0QoYSxjLGIubG9jYWxlc1tiLmxvY2FsZV0pOmEubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBEKGEsYyxiLmxvY2FsZXNbYi5sb2NhbGVdKX0pKTphW2M/XCJmb3JtYXR0ZWRfZGF0ZVwiOlwiZGF0ZVwiXX1mdW5jdGlvbiBXKGEsYyxiKXt2YXIgZD1hLl9fcGlja21ldXAub3B0aW9ucztpZighKGMgaW5zdGFuY2VvZiBBcnJheSl8fDA8Yy5sZW5ndGgpaWYoZC5kYXRlPXQoYyxkKSxcInNpbmdsZVwiIT09ZC5tb2RlKWZvcihkLmRhdGUgaW5zdGFuY2VvZiBBcnJheT8oZC5kYXRlWzBdPWQuZGF0ZVswXXx8dChuZXcgRGF0ZSxkKSxcInJhbmdlXCI9PT1kLm1vZGUmJihkLmRhdGVbMV09ZC5kYXRlWzFdfHx0KGQuZGF0ZVswXSxkKSkpOihkLmRhdGU9W2QuZGF0ZV0sXCJyYW5nZVwiPT09ZC5tb2RlJiZkLmRhdGUucHVzaCh0KGQuZGF0ZVswXSxkKSkpLGM9MDtjPGQuZGF0ZS5sZW5ndGg7KytjKWQuZGF0ZVtjXT1cbkwoZC5kYXRlW2NdLGQubWluLGQubWF4KTtlbHNlIGQuZGF0ZSBpbnN0YW5jZW9mIEFycmF5JiYoZC5kYXRlPWQuZGF0ZVswXSksZC5kYXRlPUwoZC5kYXRlLGQubWluLGQubWF4KTtlbHNlIGQuZGF0ZT1bXTtpZighZC5zZWxlY3RfZGF5KWlmKGQuZGF0ZSBpbnN0YW5jZW9mIEFycmF5KWZvcihjPTA7YzxkLmRhdGUubGVuZ3RoOysrYylkLmRhdGVbY10uc2V0RGF0ZSgxKTtlbHNlIGQuZGF0ZS5zZXREYXRlKDEpO2lmKFwibXVsdGlwbGVcIj09PWQubW9kZSlmb3IoYz0wO2M8ZC5kYXRlLmxlbmd0aDsrK2MpZC5kYXRlLmluZGV4T2YoZC5kYXRlW2NdKSE9PWMmJihkLmRhdGUuc3BsaWNlKGMsMSksLS1jKTtiP2QuY3VycmVudD10KGIsZCk6KGI9XCJzaW5nbGVcIj09PWQubW9kZT9kLmRhdGU6ZC5kYXRlW2QuZGF0ZS5sZW5ndGgtMV0sZC5jdXJyZW50PWI/bmV3IERhdGUoYik6bmV3IERhdGUpO2QuY3VycmVudC5zZXREYXRlKDEpO2QuYm91bmQuZmlsbCgpO0IoYSxcImlucHV0XCIpJiYhMSE9PVxuZC5kZWZhdWx0X2RhdGUmJihiPUgoZCksYz1hLnZhbHVlLGQ9XCJzaW5nbGVcIj09PWQubW9kZT9iLmZvcm1hdHRlZF9kYXRlOmIuZm9ybWF0dGVkX2RhdGUuam9pbihkLnNlcGFyYXRvciksY3x8QyhhLFwiY2hhbmdlXCIsYiksYyE9PWQmJihhLnZhbHVlPWQpKX1mdW5jdGlvbiBYKGEpe3ZhciBjPWEuX19waWNrbWV1cC5lbGVtZW50O3ooYSk7eShjKTtkZWxldGUgYS5fX3BpY2ttZXVwfWZ1bmN0aW9uIEwoYSxjLGIpe3JldHVybiBjJiZjPmE/bmV3IERhdGUoYyk6YiYmYjxhP25ldyBEYXRlKGIpOmF9ZnVuY3Rpb24gRShhLGMpe1wic3RyaW5nXCI9PXR5cGVvZiBhJiYoYT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGEpKTtpZighYSlyZXR1cm4gbnVsbDtpZighYS5fX3BpY2ttZXVwKXt2YXIgYixkPXt9O2M9Y3x8e307Zm9yKGIgaW4gRS5kZWZhdWx0cylkW2JdPWIgaW4gYz9jW2JdOkUuZGVmYXVsdHNbYl07Zm9yKGIgaW4gZCljPWEuZ2V0QXR0cmlidXRlKFwiZGF0YS1wbXUtXCIrYiksbnVsbCE9PVxuYyYmKGRbYl09Yyk7XCJkYXlzXCIhPT1kLnZpZXd8fGQuc2VsZWN0X2RheXx8KGQudmlldz1cIm1vbnRoc1wiKTtcIm1vbnRoc1wiIT09ZC52aWV3fHxkLnNlbGVjdF9tb250aHx8KGQudmlldz1cInllYXJzXCIpO1wieWVhcnNcIiE9PWQudmlld3x8ZC5zZWxlY3RfeWVhcnx8KGQudmlldz1cImRheXNcIik7XCJkYXlzXCIhPT1kLnZpZXd8fGQuc2VsZWN0X2RheXx8KGQudmlldz1cIm1vbnRoc1wiKTtkLmNhbGVuZGFycz1NYXRoLm1heCgxLHBhcnNlSW50KGQuY2FsZW5kYXJzLDEwKXx8MSk7ZC5tb2RlPS9zaW5nbGV8bXVsdGlwbGV8cmFuZ2UvLnRlc3QoZC5tb2RlKT9kLm1vZGU6XCJzaW5nbGVcIjtkLm1pbiYmKGQubWluPXQoZC5taW4sZCksZC5zZWxlY3RfZGF5fHxkLm1pbi5zZXREYXRlKDEpKTtkLm1heCYmKGQubWF4PXQoZC5tYXgsZCksZC5zZWxlY3RfZGF5fHxkLm1heC5zZXREYXRlKDEpKTtjPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7YS5fX3BpY2ttZXVwPXtvcHRpb25zOmQsZXZlbnRzOltdLFxuZWxlbWVudDpjfTtjLl9fcGlja21ldXBfdGFyZ2V0PWE7bChjLFwicGlja21ldXBcIik7ZC5jbGFzc19uYW1lJiZsKGMsZC5jbGFzc19uYW1lKTtkLmJvdW5kPXtmaWxsOk4uYmluZChhLGEpLHVwZGF0ZV9kYXRlOk8uYmluZChhLGEpLGNsaWNrOlAuYmluZChhLGEpLHNob3c6SS5iaW5kKGEsYSksZm9yY2VkX3Nob3c6SS5iaW5kKGEsYSwhMCksaGlkZTpRLmJpbmQoYSxhKSx1cGRhdGU6Ui5iaW5kKGEsYSksY2xlYXI6Uy5iaW5kKGEsYSkscHJldjpULmJpbmQoYSxhKSxuZXh0OlUuYmluZChhLGEpLGdldF9kYXRlOlYuYmluZChhLGEpLHNldF9kYXRlOlcuYmluZChhLGEpLGRlc3Ryb3k6WC5iaW5kKGEsYSl9O2woYyxcInBtdS12aWV3LVwiK2Qudmlldyk7dmFyIGU9ZC5pbnN0YW5jZV90ZW1wbGF0ZShkKSxoPVwiXCI7Zm9yKGI9MDtiPGQuY2FsZW5kYXJzOysrYiloKz1lO2MuaW5uZXJIVE1MPWg7cShhLGMsXCJjbGlja1wiLGQuYm91bmQuY2xpY2spO3EoYSxjLFwib25zZWxlY3RzdGFydFwiaW4gRWxlbWVudC5wcm90b3R5cGU/XG5cInNlbGVjdHN0YXJ0XCI6XCJtb3VzZWRvd25cIixmdW5jdGlvbihhKXthLnByZXZlbnREZWZhdWx0KCl9KTtkLmZsYXQ/KGwoYyxcInBtdS1mbGF0XCIpLGEuYXBwZW5kQ2hpbGQoYykpOihsKGMsXCJwbXUtaGlkZGVuXCIpLGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYykscShhLGEsXCJjbGlja1wiLEkuYmluZChhLGEsITEpKSxxKGEsYSxcImlucHV0XCIsZC5ib3VuZC51cGRhdGUpLHEoYSxhLFwiY2hhbmdlXCIsZC5ib3VuZC51cGRhdGUpKTtkLmJvdW5kLnNldF9kYXRlKGQuZGF0ZSxkLmN1cnJlbnQpfWQ9YS5fX3BpY2ttZXVwLm9wdGlvbnM7cmV0dXJue2hpZGU6ZC5ib3VuZC5oaWRlLHNob3c6ZC5ib3VuZC5zaG93LGNsZWFyOmQuYm91bmQuY2xlYXIsdXBkYXRlOmQuYm91bmQudXBkYXRlLHByZXY6ZC5ib3VuZC5wcmV2LG5leHQ6ZC5ib3VuZC5uZXh0LGdldF9kYXRlOmQuYm91bmQuZ2V0X2RhdGUsc2V0X2RhdGU6ZC5ib3VuZC5zZXRfZGF0ZSxkZXN0cm95OmQuYm91bmQuZGVzdHJveX19RS5kZWZhdWx0cz1cbntjdXJyZW50Om51bGwsZGF0ZTpuZXcgRGF0ZSxkZWZhdWx0X2RhdGU6bmV3IERhdGUsZmxhdDohMSxmaXJzdF9kYXk6MSxwcmV2OlwiJiM5NjY0O1wiLG5leHQ6XCImIzk2NTQ7XCIsbW9kZTpcInNpbmdsZVwiLHNlbGVjdF95ZWFyOiEwLHNlbGVjdF9tb250aDohMCxzZWxlY3RfZGF5OiEwLHZpZXc6XCJkYXlzXCIsY2FsZW5kYXJzOjEsZm9ybWF0OlwiZC1tLVlcIix0aXRsZV9mb3JtYXQ6XCJCLCBZXCIscG9zaXRpb246XCJib3R0b21cIixjbGFzc19uYW1lOlwiXCIsc2VwYXJhdG9yOlwiIC0gXCIsaGlkZV9vbl9zZWxlY3Q6ITEsbWluOm51bGwsbWF4Om51bGwscmVuZGVyOmZ1bmN0aW9uKCl7fSxsb2NhbGU6XCJlblwiLGxvY2FsZXM6e2VuOntkYXlzOlwiU3VuZGF5IE1vbmRheSBUdWVzZGF5IFdlZG5lc2RheSBUaHVyc2RheSBGcmlkYXkgU2F0dXJkYXlcIi5zcGxpdChcIiBcIiksZGF5c1Nob3J0OlwiU3VuIE1vbiBUdWUgV2VkIFRodSBGcmkgU2F0XCIuc3BsaXQoXCIgXCIpLGRheXNNaW46XCJTdSBNbyBUdSBXZSBUaCBGciBTYVwiLnNwbGl0KFwiIFwiKSxcbm1vbnRoczpcIkphbnVhcnkgRmVicnVhcnkgTWFyY2ggQXByaWwgTWF5IEp1bmUgSnVseSBBdWd1c3QgU2VwdGVtYmVyIE9jdG9iZXIgTm92ZW1iZXIgRGVjZW1iZXJcIi5zcGxpdChcIiBcIiksbW9udGhzU2hvcnQ6XCJKYW4gRmViIE1hciBBcHIgTWF5IEp1biBKdWwgQXVnIFNlcCBPY3QgTm92IERlY1wiLnNwbGl0KFwiIFwiKX19LGluc3RhbmNlX3RlbXBsYXRlOmZ1bmN0aW9uKGEpe3ZhciBjPWEubG9jYWxlc1thLmxvY2FsZV0uZGF5c01pbi5zbGljZSgpO2EuZmlyc3RfZGF5JiZjLnB1c2goYy5zaGlmdCgpKTtyZXR1cm4nPGRpdiBjbGFzcz1cInBtdS1pbnN0YW5jZVwiPjxuYXY+PGRpdiBjbGFzcz1cInBtdS1wcmV2IHBtdS1idXR0b25cIj4nK2EucHJldisnPC9kaXY+PGRpdiBjbGFzcz1cInBtdS1tb250aCBwbXUtYnV0dG9uXCI+PC9kaXY+PGRpdiBjbGFzcz1cInBtdS1uZXh0IHBtdS1idXR0b25cIj4nK2EubmV4dCsnPC9kaXY+PC9uYXY+PG5hdiBjbGFzcz1cInBtdS1kYXktb2Ytd2Vla1wiPjxkaXY+JytcbmMuam9pbihcIjwvZGl2PjxkaXY+XCIpK1wiPC9kaXY+PC9uYXY+PC9kaXY+XCJ9LGluc3RhbmNlX2NvbnRlbnRfdGVtcGxhdGU6ZnVuY3Rpb24oYSxjKXt2YXIgYj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2woYixjKTtmb3IoYz0wO2M8YS5sZW5ndGg7KytjKWwoYVtjXSxcInBtdS1idXR0b25cIiksYi5hcHBlbmRDaGlsZChhW2NdKTtyZXR1cm4gYn19O3JldHVybiBFfSk7XG4iLCIvKiEgVVRGLThcclxuXHJcbsKpIGtvdnJpZ2luXHJcbtCS0YHQtSDQv9GA0LDQstCwINGA0LDQt9GA0LXRiNC10L3Ri1xyXG7QutGA0LDRgdC40LLRi9C5INC00LjQt9Cw0LnQvSDQtNC+0LvQttC10L0g0LjQvNC10YLRjCDQutGA0LDRgdC40LLRi9C5INC60L7QtMKuXHJcblxyXG5odHRwczovL2dpdGh1Yi5jb20vaHRtbHBsdXNjc3MvXHJcblxyXG4qL1xyXG5cclxuKCAoKSA9PiB7XHJcblxyXG5cdGxldCByZXNpemVUaW1lb3V0ID0gbnVsbCxcclxuXHRcdHdpbmRvd1dpZHRoT0xkID0gd2luZG93LmlubmVyV2lkdGg7XHJcblxyXG5cdGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xyXG5cclxuXHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHtcclxuXHJcblx0XHRcdGlmIChyZXNpemVUaW1lb3V0ID09PSBudWxsKSB7XHJcblxyXG5cdFx0XHRcdHJlc2l6ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0cmVzaXplVGltZW91dCA9IG51bGw7XHJcblxyXG5cdFx0XHRcdFx0aWYod2luZG93V2lkdGhPTGQgIT09IHdpbmRvdy5pbm5lcldpZHRoKSB7XHJcblxyXG5cdFx0XHRcdFx0XHR3aW5kb3dXaWR0aE9MZCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cdFx0XHRcdFx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tc2Nyb2xsTWFyZ2luJywgaGVhZGVyLmNsaWVudEhlaWdodCArICdweCcpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSwgMTAwKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XHJcblxyXG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Zhc3RMb2FkU2NyaXB0JywgdHJ1ZSk7XHJcblxyXG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXRyYW5zaXRpb25EZWZhdWx0JywgJy4zcycpO1xyXG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXNjcm9sbE1hcmdpbicsIGhlYWRlci5jbGllbnRIZWlnaHQgKyAncHgnKTtcclxuXHJcblx0fSk7XHJcblxyXG5cdC8vINC+0LHRgNCw0LHQvtGC0YfQuNC6INCw0L3QuNC80LDRhtC40LlcclxuXHR3aW5kb3cuY3NzQW5pbWF0aW9uID0gYT0+e2xldCBiLGMsZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY3NzYW5pbWF0aW9uXCIpO3N3aXRjaChhKXtjYXNlJ2FuaW1hdGlvbic6Yj17XCJhbmltYXRpb25cIjpcImFuaW1hdGlvbmVuZFwiLFwiT0FuaW1hdGlvblwiOlwib0FuaW1hdGlvbkVuZFwiLFwiTW96QW5pbWF0aW9uXCI6XCJhbmltYXRpb25lbmRcIixcIldlYmtpdEFuaW1hdGlvblwiOlwid2Via2l0QW5pbWF0aW9uRW5kXCJ9O2JyZWFrO2Nhc2UndHJhbnNpdGlvbic6Yj17XCJ0cmFuc2l0aW9uXCI6XCJ0cmFuc2l0aW9uZW5kXCIsXCJPVHJhbnNpdGlvblwiOlwib1RyYW5zaXRpb25FbmRcIixcIk1velRyYW5zaXRpb25cIjpcInRyYW5zaXRpb25lbmRcIixcIldlYmtpdFRyYW5zaXRpb25cIjpcIndlYmtpdFRyYW5zaXRpb25FbmRcIn19Zm9yKGMgaW4gYilpZihkLnN0eWxlW2NdIT09dW5kZWZpbmVkKXJldHVybiBiW2NdfVxyXG5cclxuXHQvLyBEZXRlcm1pbmUgaWYgYW4gZWxlbWVudCBpcyBpbiB0aGUgdmlzaWJsZSB2aWV3cG9ydFxyXG5cdHdpbmRvdy5pc0luVmlld3BvcnQgPSBlbCA9PiB7XHJcblx0XHRjb25zdCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRyZXR1cm4gKHJlY3QudG9wID49IDAgJiYgcmVjdC5ib3R0b20gPD0gd2luZG93LmlubmVySGVpZ2h0KTtcclxuXHR9XHJcblxyXG5cdC8vINC+0YLQtNC10LvRj9C10Lwg0YLRi9GB0Y/Rh9C4XHJcblx0d2luZG93LnNlcE51bWJlciA9IHN0ciA9PiB7XHJcblx0XHRzdHIgPSBzdHIudG9TdHJpbmcoKTtcclxuXHRcdHN0ciA9IHN0ci5yZXBsYWNlKC9cXHMrL2csJycpO1xyXG5cdFx0cmV0dXJuIHN0ci5yZXBsYWNlKC8oXFxkKSg/PShcXGRcXGRcXGQpKyhbXlxcZF18JCkpL2csICckMSAnKTtcclxuXHR9XHJcblxyXG5cdC8vINGB0LrQu9C10LjQstCw0LXQvCDRgtGL0YHRj9GH0LhcclxuXHR3aW5kb3cuc3RyVG9OdW1iZXIgPSBuID0+IHBhcnNlSW50KG4ucmVwbGFjZSgvXFxzKy9nLCcnKSwgMTApO1xyXG5cclxuLy8g0YHQutC70L7QvdC10L3QuNC1XHJcblx0d2luZG93LmRlY2xlbnNpb24gPSAobnVtLCBleHByZXNzaW9ucykgPT4ge1xyXG5cclxuXHRcdGxldCByLFxyXG5cdFx0XHRjb3VudCA9IG51bSAlIDEwMDtcclxuXHJcblx0XHRpZiAoY291bnQgPiA0ICYmIGNvdW50IDwgMjEpe1xyXG5cclxuXHRcdFx0ciA9IGV4cHJlc3Npb25zWycyJ107XHJcblxyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblxyXG5cdFx0XHRjb3VudCA9IGNvdW50ICUgMTA7XHJcblxyXG5cdFx0XHRpZiAoY291bnQgPT0gMSl7XHJcblx0XHRcdFx0ciA9IGV4cHJlc3Npb25zWycwJ107XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoY291bnQgPiAxICYmIGNvdW50IDwgNSl7XHJcblx0XHRcdFx0ciA9IGV4cHJlc3Npb25zWycxJ107XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRyID0gZXhwcmVzc2lvbnNbJzInXTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gcjtcclxuXHJcblx0fVxyXG5cclxufSkoKTsiLCIoIGl0ZW1zID0+IHtcclxuXHJcblx0aWYoIWl0ZW1zLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRbLi4uaXRlbXNdLmZvckVhY2goIGFjY29yZGlvbiA9PiB7XHJcblxyXG5cdFx0bGV0IGFuaW1hdGVPbiA9IGZhbHNlLFxyXG5cdFx0XHRhY3RpdmVJdGVtID0gbnVsbDtcclxuXHJcblx0XHRjb25zdCBpdGVtcyA9IGFjY29yZGlvbi5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uX19pdGVtJyksXHJcblx0XHRcdCAgc3R5bGVQbHVzID0gYWNjb3JkaW9uLmNsYXNzTGlzdC5jb250YWlucygnYWNjb3JkaW9uLS1wbHVzJyk7XHJcblxyXG5cdFx0Wy4uLml0ZW1zXS5mb3JFYWNoKCBpdGVtID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IGJ0biA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbl9fYnRuJyksXHJcblx0XHRcdFx0ICBoZWFkID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uX19oZWFkJyksXHJcblx0XHRcdFx0ICBib2R5ID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uX19ib2R5JyksXHJcblx0XHRcdFx0ICBhcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwic3ZnXCIpO1xyXG5cclxuXHRcdFx0YXJyb3cuc2V0QXR0cmlidXRlTlMobnVsbCwgXCJ2aWV3Qm94XCIsIFwiMCAwIDI0IDI0XCIpO1xyXG5cdFx0XHRhcnJvdy5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcIndpZHRoXCIsIDI0KTtcclxuXHRcdFx0YXJyb3cuc2V0QXR0cmlidXRlTlMobnVsbCwgXCJoZWlnaHRcIiwgMjQpO1xyXG5cdFx0XHRhcnJvdy5pbm5lckhUTUwgPSBgPHVzZSB4bGluazpocmVmPVwiI3N2Zy0keyBzdHlsZVBsdXMgPyAncGx1cycgOiAnYXJyb3ctY2hldnJvbi1yaWdodCcgfVwiLz5gO1xyXG5cclxuXHRcdFx0aGVhZC5hcHBlbmQoYXJyb3cpO1xyXG5cclxuXHRcdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRhbmltYXRlT24gPSB0cnVlO1xyXG5cclxuXHRcdFx0XHRpZiggaXRlbSA9PT0gYWN0aXZlSXRlbSApe1xyXG5cclxuXHRcdFx0XHRcdGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpO1xyXG5cdFx0XHRcdFx0YWN0aXZlSXRlbSA9IG51bGw7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0YWN0aXZlSXRlbSA9IGl0ZW07XHJcblxyXG5cdFx0XHRcdFx0Wy4uLml0ZW1zXS5mb3JFYWNoKCBlbCA9PiBlbC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1vcGVuJywgZWwgPT09IGl0ZW0pKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRib2R5LmFkZEV2ZW50TGlzdGVuZXIod2luZG93LmNzc0FuaW1hdGlvbigndHJhbnNpdGlvbicpLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdGlmKGFuaW1hdGVPbiAmJiBhY3RpdmVJdGVtICYmICF3aW5kb3cuaXNJblZpZXdwb3J0KGhlYWQpKXtcclxuXHJcblx0XHRcdFx0XHRoZWFkLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGFuaW1hdGVPbiA9IGZhbHNlO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbicpKTsiLCIoIGFydGljbGUgPT4ge1xyXG5cclxuXHRpZihhcnRpY2xlKSB7XHJcblxyXG5cdFx0Ly8gc2hhcmVcclxuXHJcblx0XHRjb25zdCBidG4gPSBhcnRpY2xlLnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLWFydGljbGVfX3NoYXJlLWJ0bicpO1xyXG5cclxuXHRcdGlmICggYnRuICkge1xyXG5cclxuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRcdGlmICggZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5wYWdlLWFydGljbGVfX3NoYXJlJykgKSB7XHJcblxyXG5cdFx0XHRcdFx0YnRuLmNsYXNzTGlzdC50b2dnbGUoJ2lzLW9wZW4nKTtcclxuXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRidG4uY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLWFydGljbGUnKSk7IiwiKCBicmFuZHMgPT4ge1xyXG5cclxuXHRpZiggYnJhbmRzICkge1xyXG5cclxuXHRcdGNvbnN0IGdyb3VwID0gYnJhbmRzLnF1ZXJ5U2VsZWN0b3JBbGwoJy5icmFuZHNfX2dyb3VwJyk7XHJcblxyXG5cdFx0Ly8gaGFzaFxyXG5cclxuXHRcdGNvbnN0IHNldFN0YWdlID0gKCk9PiB7XHJcblxyXG5cdFx0XHRjb25zdCBoYXNoID0gbG9jYXRpb24uaGFzaC50b0xvd2VyQ2FzZSgpLnNsaWNlKDEpO1xyXG5cclxuXHRcdFx0Wy4uLmdyb3VwXS5mb3JFYWNoKCBpdGVtID0+IHtcclxuXHJcblx0XHRcdFx0aXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJywgaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaGFzaCcpLnRvTG93ZXJDYXNlKCkgIT09IGhhc2ggJiYgaGFzaCApO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgc2V0U3RhZ2UpO1xyXG5cclxuXHRcdGlmICggbG9jYXRpb24uaGFzaCApIHtcclxuXHJcblx0XHRcdHNldFRpbWVvdXQoIHNldFN0YWdlICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGJ0bnNcclxuXHJcblx0XHRjb25zdCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJyYW5kcy1zb3J0X19idG4nKTtcclxuXHJcblx0XHRbLi4uYnRuc10uZm9yRWFjaCggbGluayA9PiB7XHJcblxyXG5cdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0XHRpZiAoIGxpbmsuaHJlZi5pbmNsdWRlcygnIycpICkge1xyXG5cclxuXHRcdFx0XHRcdGxvY2F0aW9uLmhhc2ggPSBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG5cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdGhpc3RvcnkucHVzaFN0YXRlKCcnLCBkb2N1bWVudC50aXRsZSwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0c2V0U3RhZ2UoKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnJhbmRzJykpOyIsIiggZm9ybSA9PiB7XHJcblxyXG5cdGlmKCBmb3JtICkge1xyXG5cclxuXHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCxcclxuXHRcdFx0XHQgIGl0ZW0gPSB0YXJnZXQuY2xvc2VzdCgnLmNhcnRfX2l0ZW0nKTtcclxuXHJcblx0XHRcdC8vIHJlbW92ZVxyXG5cclxuXHRcdFx0aWYgKCB0YXJnZXQuY2xvc2VzdCgnLmNhcnQtaXRlbV9fcmVtb3ZlJykgKSB7XHJcblxyXG5cdFx0XHRcdGl0ZW0uc3R5bGUuaGVpZ2h0ID0gaXRlbS5jbGllbnRIZWlnaHQgKyBcInB4XCI7XHJcblxyXG5cdFx0XHRcdGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3cuY3NzQW5pbWF0aW9uKCd0cmFuc2l0aW9uJyksIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdFx0XHRpZiAoIGV2ZW50LnByb3BlcnR5TmFtZSA9PT0gJ2hlaWdodCcgJiYgaXRlbS5jbGllbnRIZWlnaHQgPT09IDAgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRpdGVtLnJlbW92ZSgpO1xyXG5cclxuXHRcdFx0XHRcdFx0c2V0VGltZW91dCggKCk9PiBmb3JtLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSksMTAwKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRzZXRUaW1lb3V0KCAoKT0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnaXMtcmVtb3ZlJykgKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyBzdWJtaXRcclxuXHJcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdGZldGNoKGZvcm0uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKSwge1xyXG5cdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdGJvZHk6IG5ldyBGb3JtRGF0YShmb3JtKVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpXHJcblx0XHRcdC50aGVuKHJlc3VsdCA9PiB7XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblxyXG5cdFx0Ly8gKyB8IC1cclxuXHJcblx0XHRjb25zdCBxdWFudGl0eSA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLmNhcnQtcXVhbnRpdHknKTtcclxuXHJcblx0XHRbLi4ucXVhbnRpdHldLmZvckVhY2goIGVsID0+IHtcclxuXHJcblx0XHRcdGxldCB2YWx1ZSA9IG51bGw7XHJcblxyXG5cdFx0XHRjb25zdCB1cCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0LXF1YW50aXR5X19idG4tLXVwJyksXHJcblx0XHRcdFx0ICBkb3duID0gZWwucXVlcnlTZWxlY3RvcignLmNhcnQtcXVhbnRpdHlfX2J0bi0tZG93bicpLFxyXG5cdFx0XHRcdCAgY291bnQgPSBlbC5xdWVyeVNlbGVjdG9yKCcuY2FydC1xdWFudGl0eV9fY291bnQnKTtcclxuXHJcblx0XHRcdHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHR2YWx1ZSA9IHBhcnNlSW50KGNvdW50LnZhbHVlKTtcclxuXHJcblx0XHRcdFx0Y291bnQudmFsdWUgPSBpc05hTih2YWx1ZSkgPyAxIDogdmFsdWUgKyAxO1xyXG5cclxuXHRcdFx0XHRmb3JtLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGRvd24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdHZhbHVlID0gcGFyc2VJbnQoY291bnQudmFsdWUpO1xyXG5cclxuXHRcdFx0XHRpZiggaXNOYU4odmFsdWUpIHx8IHZhbHVlIDwgMiApIHtcclxuXHJcblx0XHRcdFx0XHR2YWx1ZSA9IDI7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Y291bnQudmFsdWUgPSB2YWx1ZSAtIDE7XHJcblxyXG5cdFx0XHRcdGZvcm0uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Y291bnQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcclxuXHJcblx0XHRcdFx0Zm9ybS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRjb3VudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHtcclxuXHJcblx0XHRcdFx0c2V0VGltZW91dCggKCkgPT4gY291bnQuc2V0U2VsZWN0aW9uUmFuZ2UoMCw5KSwgMTAwKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Y291bnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdGNvbnN0IHZhbCA9IGNvdW50LnZhbHVlLnJlcGxhY2UoL1tcXERdL2csICcnKTtcclxuXHJcblx0XHRcdFx0aWYgKCBpc05hTih2YWwpICkge1xyXG5cclxuXHRcdFx0XHRcdHZhbCA9IDE7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Y291bnQudmFsdWUgPSB2YWw7XHJcblxyXG5cdFx0XHRcdGZvcm0uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9O1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnQnKSk7IiwiKCBjYXJkcyA9PiB7XHJcblxyXG5cdGlmKCBjYXJkcy5sZW5ndGggKSB7XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcclxuXHJcblx0XHRcdGNhcmRzLmZvckVhY2goIGNhcmQgPT4ge1xyXG5cclxuXHRcdFx0XHRjb25zdCBsaXN0VGFncyA9IGNhcmQucXVlcnlTZWxlY3RvcignLmNvbnN1bHRhdGlvbnMtY2FyZF9fcXVlc3Rpb24tdGFncycpLFxyXG5cdFx0XHRcdFx0ICBpdGVtVGFncyA9IGNhcmQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnN1bHRhdGlvbnMtY2FyZF9fcXVlc3Rpb24tdGFncyBsaScpLFxyXG5cdFx0XHRcdFx0ICB3cmFwVGFncyA9IGNhcmQucXVlcnlTZWxlY3RvcignLmNvbnN1bHRhdGlvbnMtY2FyZF9fcXVlc3Rpb24tdGFncy13cmFwJyk7XHJcblxyXG5cdFx0XHRcdGlmICggd3JhcFRhZ3MuY2xpZW50SGVpZ2h0IDwgbGlzdFRhZ3MuY2xpZW50SGVpZ2h0ICkge1xyXG5cclxuXHRcdFx0XHRcdGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cclxuXHRcdFx0XHRcdGJ0bi50eXBlID0gJ2J1dHRvbic7XHJcblx0XHRcdFx0XHRidG4uY2xhc3NOYW1lID0gJ2J0biBidG4tLWhhc2ggYnRuLS1zbWFsbCc7XHJcblx0XHRcdFx0XHRidG4udGV4dENvbnRlbnQgPSB3cmFwVGFncy5nZXRBdHRyaWJ1dGUoJ2RhdGEtbW9yZScpO1xyXG5cclxuXHRcdFx0XHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRcdGlmICggd3JhcFRhZ3MuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1vcGVuJykgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHdyYXBUYWdzLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9wZW4nKTtcclxuXHRcdFx0XHRcdFx0XHRidG4udGV4dENvbnRlbnQgPSB3cmFwVGFncy5nZXRBdHRyaWJ1dGUoJ2RhdGEtbW9yZScpO1xyXG5cclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0d3JhcFRhZ3MuY2xhc3NMaXN0LmFkZCgnaXMtb3BlbicpO1xyXG5cdFx0XHRcdFx0XHRcdGJ0bi50ZXh0Q29udGVudCA9IHdyYXBUYWdzLmdldEF0dHJpYnV0ZSgnZGF0YS1sZXNzJyk7XHJcblxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0d3JhcFRhZ3MuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmVuZCcsIGJ0bik7XHJcblxyXG5cdFx0XHRcdH07XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnN1bHRhdGlvbnMtY2FyZCcpKTsiLCIoIGRlYWRsaW5lID0+IHtcclxuXHJcblx0aWYgKCBkZWFkbGluZS5sZW5ndGggPiAwICkge1xyXG5cclxuXHRcdGNvbnN0IGdldFRpbWVSZW1haW5pbmcgPSBlbmR0aW1lID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IHRvdGFsID0gRGF0ZS5wYXJzZShlbmR0aW1lKSAtIERhdGUucGFyc2UobmV3IERhdGUoKSksXHJcblx0XHRcdFx0ICBzZWNvbmRzID0gTWF0aC5mbG9vcigodG90YWwgLyAxMDAwKSAlIDYwKSxcclxuXHRcdFx0XHQgIG1pbnV0ZXMgPSBNYXRoLmZsb29yKCh0b3RhbCAvIDEwMDAgLyA2MCkgJSA2MCksXHJcblx0XHRcdFx0ICBob3VycyA9IE1hdGguZmxvb3IoKHRvdGFsIC8gKDEwMDAgKiA2MCAqIDYwKSkgJSAyNCksXHJcblx0XHRcdFx0ICBkYXlzID0gTWF0aC5mbG9vcih0b3RhbCAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XHJcblxyXG5cdFx0XHRyZXR1cm4ge3RvdGFsLCBkYXlzLCBob3VycywgbWludXRlcywgc2Vjb25kc31cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgaW5pdCA9IChlbCwgZW5kdGltZSwgZXhwcmVzc2lvbnMpID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IHVwZGF0ZUNsb2NrID0gKCk9PiB7XHJcblxyXG5cdFx0XHRcdGNvbnN0IHQgPSBnZXRUaW1lUmVtYWluaW5nKGVuZHRpbWUpO1xyXG5cclxuXHRcdFx0XHRlbC50ZXh0Q29udGVudCA9IHQuZGF5cyArICcgJyArIHdpbmRvdy5kZWNsZW5zaW9uKHQuZGF5cywgZXhwcmVzc2lvbnMpICsgJyAnICsgKCcwJyArIHQuaG91cnMpLnNsaWNlKC0yKSArICc6JyArICgnMCcgKyB0Lm1pbnV0ZXMpLnNsaWNlKC0yKSArICc6JyArICgnMCcgKyB0LnNlY29uZHMpLnNsaWNlKC0yKTtcclxuXHJcblx0XHRcdFx0aWYgKCB0LnRvdGFsID4gMCApIHtcclxuXHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCB1cGRhdGVDbG9jaywgMTAwMCk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHVwZGF0ZUNsb2NrKCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdFsuLi5kZWFkbGluZV0uZm9yRWFjaCggZWwgPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgdGltZXIgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZGVhZGxpbmUnKSxcclxuXHRcdFx0XHQgIGV4cHJlc3Npb25zID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWRlY2xlbnNpb24nKS5zcGxpdCgnfCcpO1xyXG5cclxuXHRcdFx0aW5pdCggZWwsIHRpbWVyLCBleHByZXNzaW9ucyApO1xyXG5cclxuXHRcdFx0c2V0VGltZW91dCggKCk9PiB7XHJcblxyXG5cdFx0XHRcdGlmICggZWwuY2xpZW50V2lkdGggPiAwICkge1xyXG5cclxuXHRcdFx0XHRcdGVsLnN0eWxlLndpZHRoID0gZWwuY2xpZW50V2lkdGggKyAncHgnO1xyXG5cdFx0XHRcdFx0ZWwuc3R5bGUudGV4dEFsaWduID0gJ2xlZnQnO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9LCAxMDAwKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZGVhZGxpbmVdJykpOyIsIiggKCkgPT4ge1xyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcblxyXG5cdFx0Ly8gINCd0LDRiNC70Lgg0LTQtdGI0LXQstC70LU/XHJcblxyXG5cdFx0Y29uc3QgYmVzdFByaWNlID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5qcy1iZXN0LXByaWNlJyk7XHJcblxyXG5cdFx0aWYgKCBiZXN0UHJpY2UgKSB7XHJcblxyXG5cdFx0XHRjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmV2aWV3LWNhcmQtcm93LXRlbXBsYXRlJykuaW5uZXJIVE1MLFxyXG5cdFx0XHRcdCAgcHJvZHVjdCA9IGJlc3RQcmljZS5jbG9zZXN0KCcucHJvZHVjdCcpO1xyXG5cdFx0XHRcdCAgcGFyYW0gPSB7fTtcclxuXHJcblx0XHRcdGlmICggcHJvZHVjdCApIHtcclxuXHJcblx0XHRcdFx0cGFyYW0uaWQgICAgICAgID0gcHJvZHVjdC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1idXknKS5pZC52YWx1ZTtcclxuXHRcdFx0XHRwYXJhbS5saW5rICAgICAgPSBsb2NhdGlvbi5ocmVmO1xyXG5cdFx0XHRcdHBhcmFtLnByaWNlICAgICA9IHBhcnNlSW50KHByb2R1Y3QucXVlcnlTZWxlY3RvcignLnByaWNlX192YWx1ZScpLnRleHRDb250ZW50KTtcclxuXHRcdFx0XHRwYXJhbS5wcmljZU9sZCAgPSBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJ2RhdGEtcHJpY2Utb2xkJyk7XHJcblx0XHRcdFx0cGFyYW0uaW1nICAgICAgID0gcHJvZHVjdC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1nYWxsZXJ5IGltZycpLnNyYztcclxuXHRcdFx0XHRwYXJhbS5pbWcyeCAgICAgPSBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWdhbGxlcnkgaW1nJykuc3JjO1xyXG5cdFx0XHRcdHBhcmFtLm5hbWUgICAgICA9IHByb2R1Y3QucXVlcnlTZWxlY3RvcignLnByb2R1Y3RfX3RpdGxlJykudGV4dENvbnRlbnQ7XHJcblxyXG5cdFx0XHRcdGlmICggcHJvZHVjdC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1idXknKS5hcnRpY2xlaWQgKSB7XHJcblxyXG5cdFx0XHRcdFx0cGFyYW0uYXJ0aWNsZWlkID0gcHJvZHVjdC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1idXknKS5hcnRpY2xlaWQudmFsdWU7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKCBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcmljZV9fb2xkJykgKSB7XHJcblxyXG5cdFx0XHRcdFx0cGFyYW0ucHJpY2VPbGQgPSBwYXJzZUludChwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcmljZV9fb2xkJykudGV4dENvbnRlbnQpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cclxuXHRcdFx0XHRwYXJhbS5pZCAgICAgICAgPSBiZXN0UHJpY2UuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcblx0XHRcdFx0cGFyYW0uYXJ0aWNsZWlkID0gYmVzdFByaWNlLmdldEF0dHJpYnV0ZSgnZGF0YS1hcnRpY2xlaWQnKTtcclxuXHRcdFx0XHRwYXJhbS5saW5rICAgICAgPSBiZXN0UHJpY2UuZ2V0QXR0cmlidXRlKCdkYXRhLWxpbmsnKTtcclxuXHRcdFx0XHRwYXJhbS5wcmljZSAgICAgPSBiZXN0UHJpY2UuZ2V0QXR0cmlidXRlKCdkYXRhLXByaWNlJyk7XHJcblx0XHRcdFx0cGFyYW0ucHJpY2VPbGQgID0gYmVzdFByaWNlLmdldEF0dHJpYnV0ZSgnZGF0YS1wcmljZS1vbGQnKTtcclxuXHRcdFx0XHRwYXJhbS5pbWcgICAgICAgPSBiZXN0UHJpY2UuZ2V0QXR0cmlidXRlKCdkYXRhLWltZycpO1xyXG5cdFx0XHRcdHBhcmFtLmltZzJ4ICAgICA9IGJlc3RQcmljZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW1nMngnKTtcclxuXHRcdFx0XHRwYXJhbS5uYW1lICAgICAgPSBiZXN0UHJpY2UuZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1mb3JtLWJlc3QtcHJpY2UtcHJvZHVjdCcpLmlubmVySFRNTCA9IE11c3RhY2hlLnJlbmRlcih0ZW1wbGF0ZSwgcGFyYW0pO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHQvLyAg0J3QsNC50YLQuCDQsNC90LDQu9C+0LPQuNGH0L3Ri9C5INGC0L7QstCw0YBcclxuXHJcblx0XHRjb25zdCBmaW5kQW5hbG9ndWUgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLmpzLWZpbmQtYW5hbG9ndWUnKTtcclxuXHJcblx0XHRpZiAoIGZpbmRBbmFsb2d1ZSApIHtcclxuXHJcblx0XHRcdGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByZXZpZXctY2FyZC1yb3ctdGVtcGxhdGUnKS5pbm5lckhUTUwsXHJcblx0XHRcdFx0ICBwYXJhbSA9IHt9O1xyXG5cclxuXHRcdFx0cGFyYW0uaWQgICAgICAgID0gZmluZEFuYWxvZ3VlLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xyXG5cdFx0XHRwYXJhbS5hcnRpY2xlaWQgPSBmaW5kQW5hbG9ndWUuZ2V0QXR0cmlidXRlKCdkYXRhLWFydGljbGVpZCcpO1xyXG5cdFx0XHRwYXJhbS5saW5rICAgICAgPSBmaW5kQW5hbG9ndWUuZ2V0QXR0cmlidXRlKCdkYXRhLWxpbmsnKTtcclxuXHRcdFx0cGFyYW0ucHJpY2UgICAgID0gZmluZEFuYWxvZ3VlLmdldEF0dHJpYnV0ZSgnZGF0YS1wcmljZScpO1xyXG5cdFx0XHRwYXJhbS5wcmljZU9sZCAgPSBmaW5kQW5hbG9ndWUuZ2V0QXR0cmlidXRlKCdkYXRhLXByaWNlLW9sZCcpO1xyXG5cdFx0XHRwYXJhbS5pbWcgICAgICAgPSBmaW5kQW5hbG9ndWUuZ2V0QXR0cmlidXRlKCdkYXRhLWltZycpO1xyXG5cdFx0XHRwYXJhbS5pbWcyeCAgICAgPSBmaW5kQW5hbG9ndWUuZ2V0QXR0cmlidXRlKCdkYXRhLWltZzJ4Jyk7XHJcblx0XHRcdHBhcmFtLm5hbWUgICAgICA9IGZpbmRBbmFsb2d1ZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpO1xyXG5cclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWZvcm0tZmluZC1hbmFsb2d1ZS1wcm9kdWN0JykuaW5uZXJIVE1MID0gTXVzdGFjaGUucmVuZGVyKHRlbXBsYXRlLCBwYXJhbSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdC8vICDQo9Cy0LXQtNC+0LzQuNGC0YwgIC8g0L3QsNC50YLQuCDQsNC90LDQu9C+0LNcclxuXHJcblx0XHRjb25zdCBmaW5kTm90aWZ5ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5qcy1maW5kLW5vdGlmeScpO1xyXG5cclxuXHRcdGlmIChmaW5kTm90aWZ5KSB7XHJcblxyXG5cdFx0XHRjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmV2aWV3LWNhcmQtcm93LXRlbXBsYXRlJykuaW5uZXJIVE1MLFxyXG5cdFx0XHRcdCAgcHJvZHVjdCA9IGZpbmROb3RpZnkuY2xvc2VzdCgnLnByb2R1Y3QnKTtcclxuXHRcdFx0XHQgIHByZXZpZXdDYXJkID0gZmluZE5vdGlmeS5jbG9zZXN0KCcucHJldmlldy1jYXJkJyksXHJcblx0XHRcdFx0ICBwcm9kdWN0TW9kYWwgPSBmaW5kTm90aWZ5LmNsb3Nlc3QoJyNwcmV2aWV3LWNhcmQtY29sb3InKSxcclxuXHRcdFx0XHQgIHBhcmFtID0ge307XHJcblxyXG5cdFx0XHRpZiAoIHByb2R1Y3QgKSB7XHJcblxyXG5cdFx0XHRcdHBhcmFtLmlkICAgICAgICA9IHByb2R1Y3QucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtYnV5JykuaWQudmFsdWU7XHJcblx0XHRcdFx0cGFyYW0ubGluayAgICAgID0gbG9jYXRpb24uaHJlZjtcclxuXHRcdFx0XHRwYXJhbS5wcmljZSAgICAgPSBwYXJzZUludChwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcmljZV9fdmFsdWUnKS50ZXh0Q29udGVudCk7XHJcblx0XHRcdFx0cGFyYW0ucHJpY2VPbGQgID0gcHJvZHVjdC5xdWVyeVNlbGVjdG9yKCdkYXRhLXByaWNlLW9sZCcpO1xyXG5cdFx0XHRcdHBhcmFtLmltZyAgICAgICA9IHByb2R1Y3QucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtZ2FsbGVyeSBpbWcnKS5zcmM7XHJcblx0XHRcdFx0cGFyYW0uaW1nMnggICAgID0gcHJvZHVjdC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1nYWxsZXJ5IGltZycpLnNyYztcclxuXHRcdFx0XHRwYXJhbS5uYW1lICAgICAgPSBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0X190aXRsZScpLnRleHRDb250ZW50O1xyXG5cclxuXHRcdFx0XHRpZiAoIHByb2R1Y3QucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtYnV5JykuYXJ0aWNsZWlkICkge1xyXG5cclxuXHRcdFx0XHRcdHBhcmFtLmFydGljbGVpZCA9IHByb2R1Y3QucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtYnV5JykuYXJ0aWNsZWlkLnZhbHVlO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmICggcHJvZHVjdC5xdWVyeVNlbGVjdG9yKCcucHJpY2VfX29sZCcpICkge1xyXG5cclxuXHRcdFx0XHRcdHBhcmFtLnByaWNlT2xkID0gcGFyc2VJbnQocHJvZHVjdC5xdWVyeVNlbGVjdG9yKCcucHJpY2VfX29sZCcpLnRleHRDb250ZW50KTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSBlbHNlIGlmICggcHJldmlld0NhcmQgKSB7XHJcblxyXG5cdFx0XHRcdHBhcmFtLmlkICAgICAgICA9IHByZXZpZXdDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aWV3LWNhcmRfX2Zvcm0nKS5lbGVtZW50cy5pZC52YWx1ZTtcclxuXHRcdFx0XHRwYXJhbS5saW5rICAgICAgPSBwcmV2aWV3Q2FyZC5xdWVyeVNlbGVjdG9yKCcucHJldmlldy1jYXJkX190aXRsZScpLmhyZWY7XHJcblx0XHRcdFx0cGFyYW0ucHJpY2UgICAgID0gcGFyc2VJbnQocHJldmlld0NhcmQucXVlcnlTZWxlY3RvcignLnByaWNlX192YWx1ZScpLnRleHRDb250ZW50KTtcclxuXHRcdFx0XHRwYXJhbS5pbWcgICAgICAgPSBwcmV2aWV3Q2FyZC5xdWVyeVNlbGVjdG9yKCcucHJldmlldy1jYXJkX19pbWcgaW1nJykuc3JjO1xyXG5cdFx0XHRcdHBhcmFtLmltZzJ4ICAgICA9IHByZXZpZXdDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aWV3LWNhcmRfX2ltZyBpbWcnKS5zcmM7XHJcblx0XHRcdFx0cGFyYW0ubmFtZSAgICAgID0gcHJldmlld0NhcmQucXVlcnlTZWxlY3RvcignLnByZXZpZXctY2FyZF9faW1nIGltZycpLmFsdDtcclxuXHJcblx0XHRcdFx0aWYgKCBwcmV2aWV3Q2FyZC5xdWVyeVNlbGVjdG9yKCcucHJldmlldy1jYXJkX19mb3JtJykuZWxlbWVudHMuYXJ0aWNsZWlkICkge1xyXG5cclxuXHRcdFx0XHRcdHBhcmFtLmFydGljbGVpZCA9IHByZXZpZXdDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aWV3LWNhcmRfX2Zvcm0nKS5lbGVtZW50cy5hcnRpY2xlaWQudmFsdWU7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKCBwcmV2aWV3Q2FyZC5xdWVyeVNlbGVjdG9yKCcucHJpY2VfX29sZCcpICkge1xyXG5cclxuXHRcdFx0XHRcdHBhcmFtLnByaWNlT2xkID0gcGFyc2VJbnQocHJldmlld0NhcmQucXVlcnlTZWxlY3RvcignLnByaWNlX19vbGQnKS50ZXh0Q29udGVudCk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggcHJvZHVjdE1vZGFsICkge1xyXG5cclxuXHRcdFx0XHRjb25zdCBjaGVja2VkID0gWy4uLnByb2R1Y3RNb2RhbC5lbGVtZW50cy5hcnRpY2xlaWRdLmZpbmQoIGVsID0+IGVsLmNoZWNrZWQgKTtcclxuXHJcblx0XHRcdFx0cGFyYW0uaWQgICAgICAgID0gcHJvZHVjdE1vZGFsLmVsZW1lbnRzLmlkLnZhbHVlO1xyXG5cdFx0XHRcdHBhcmFtLmFydGljbGVpZCA9IGNoZWNrZWQudmFsdWU7XHJcblx0XHRcdFx0cGFyYW0ubGluayAgICAgID0gcHJvZHVjdE1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jYXJkLWNvbG9yX190aXRsZSBhJykuaHJlZjtcclxuXHRcdFx0XHRwYXJhbS5wcmljZSAgICAgPSBwYXJzZUludChjaGVja2VkLmdldEF0dHJpYnV0ZSgnZGF0YS1wcmljZScpKTtcclxuXHRcdFx0XHRwYXJhbS5pbWcgICAgICAgPSBjaGVja2VkLmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKTtcclxuXHRcdFx0XHRwYXJhbS5pbWcyeCAgICAgPSBjaGVja2VkLmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKTtcclxuXHRcdFx0XHRwYXJhbS5uYW1lICAgICAgPSBwcm9kdWN0TW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsLWNhcmQtY29sb3JfX3RpdGxlJykudGV4dENvbnRlbnQ7XHJcblxyXG5cdFx0XHRcdGlmICggY2hlY2tlZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2Utb2xkJykgKSB7XHJcblxyXG5cdFx0XHRcdFx0cGFyYW0ucHJpY2VPbGQgPSBwYXJzZUludChjaGVja2VkLmdldEF0dHJpYnV0ZSgnZGF0YS1wcmljZS1vbGQnKSk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1mb3JtLWZpbmQtbm90aWZ5LXByb2R1Y3QnKS5pbm5lckhUTUwgPSBNdXN0YWNoZS5yZW5kZXIodGVtcGxhdGUsIHBhcmFtKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8g0LLRi9Cx0L7RgCDQv9C+0LTRgtC+0LLQsNGA0L7Qsiwg0LrQsNGC0LDQu9C+0LNcclxuXHJcblx0XHRjb25zdCBidG5TZWxlY3RMaXN0VG9nZ2xlID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5qcy1zZWxlY3QtbGlzdC10b2dnbGUnKTtcclxuXHJcblx0XHRpZiAoYnRuU2VsZWN0TGlzdFRvZ2dsZSkge1xyXG5cclxuXHRcdFx0YnRuU2VsZWN0TGlzdFRvZ2dsZS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1vcGVuJyk7XHJcblxyXG5cdFx0fVxyXG5cclxuLypcclxuXHJcblx0XHRjb25zdCBidG5zU2VsZWN0TGlzdFRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1zZWxlY3QtbGlzdC10b2dnbGUnKTtcclxuXHJcblx0XHRpZiAoIGJ0bnNTZWxlY3RMaXN0VG9nZ2xlLmxlbmd0aCA+IDAgKSB7XHJcblxyXG5cdFx0XHRjb25zdCBidG5TZWxlY3RMaXN0VG9nZ2xlID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5qcy1zZWxlY3QtbGlzdC10b2dnbGUnKTtcclxuXHJcblx0XHRcdGlmIChidG5TZWxlY3RMaXN0VG9nZ2xlKSB7XHJcblxyXG5cdFx0XHRcdFsuLi5idG5zU2VsZWN0TGlzdFRvZ2dsZV0uZm9yRWFjaCggYnRuID0+IGJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdpcy1vcGVuJywgYnRuID09PSBidG5TZWxlY3RMaXN0VG9nZ2xlICYmIGJ0blNlbGVjdExpc3RUb2dnbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1vcGVuJykgPT09IGZhbHNlKSk7XHJcblxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cclxuXHRcdFx0XHRbLi4uYnRuc1NlbGVjdExpc3RUb2dnbGVdLmZvckVhY2goIGJ0biA9PiBidG4uY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9Ki9cclxuXHR9KTtcclxuXHJcbn0pKCk7IiwiLy8gZmlsdGVyXHJcbiggZmlsdGVyID0+IHtcclxuXHJcblx0aWYoIWZpbHRlcikge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRjb25zdCBpdGVtcyA9IGZpbHRlci5xdWVyeVNlbGVjdG9yQWxsKCcuZmlsdGVyLXJvd19faXRlbScpLFxyXG5cdFx0ICBpdGVtUmVzZXQgPSBmaWx0ZXIucXVlcnlTZWxlY3RvcignLmZpbHRlci1yb3dfX2l0ZW0tLXJlc2V0Jyk7XHJcblxyXG5cdC8vIGNoYW5nZVxyXG5cclxuXHRmaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGNvbnN0IGl0ZW0gPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLmZpbHRlci1yb3dfX2l0ZW0nKTtcclxuXHJcblx0XHRsZXQgY2hlY2tlZCA9IGZhbHNlO1xyXG5cclxuXHRcdFsuLi5pdGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2JveF9faW5wdXQnKV0uZm9yRWFjaCggY2hlY2tib3ggPT4ge1xyXG5cclxuXHRcdFx0aWYgKCBjaGVja2JveC5jaGVja2VkICkge1xyXG5cclxuXHRcdFx0XHRjaGVja2VkID0gdHJ1ZTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXItcm93X19idG4nKS5jbGFzc0xpc3QudG9nZ2xlKCdidG4tLW91dGxpbmUnLCBjaGVja2VkID09PSBmYWxzZSk7XHJcblxyXG5cdFx0aXRlbVJlc2V0LnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXItcm93X19idG4nKS5jbGFzc0xpc3QudG9nZ2xlKCdidG4tLW91dGxpbmUnLCBjaGVja2VkID09PSB0cnVlKTtcclxuXHJcblx0fSk7XHJcblxyXG5cdC8vIHJlc2V0XHJcblxyXG5cdGZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdyZXNldCcsICgpPT4ge1xyXG5cclxuXHRcdFsuLi5pdGVtc10uZm9yRWFjaCggaXRlbSA9PiBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXItcm93X19idG4nKS5jbGFzc0xpc3QudG9nZ2xlKCdidG4tLW91dGxpbmUnLCBpdGVtICE9PSBpdGVtUmVzZXQpICk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRjb25zdCBpc0l0ZW0gPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLmZpbHRlci1yb3dfX2l0ZW0nKTtcclxuXHJcblx0XHRpZiAoIGlzSXRlbSApIHtcclxuXHJcblx0XHRcdFsuLi5pdGVtc10uZm9yRWFjaCggaXRlbSA9PiB7XHJcblxyXG5cdFx0XHRcdGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtb3BlbicsIGl0ZW0gPT09IGlzSXRlbSAmJiBpdGVtLmNsYXNzTGlzdC5jb250YWlucygnaXMtb3BlbicpID09PSBmYWxzZSApO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFsuLi5pdGVtc10uZm9yRWFjaCggaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9wZW4nKSApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyLXJvdycpKTsiLCIvLyBmaWx0ZXJcclxuKCBmaWx0ZXIgPT4ge1xyXG5cclxuXHRpZighZmlsdGVyKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdC8vIHNjcm9sbFRvXHJcblx0Y29uc3Qgc2Nyb2xsVG8gPSAoZWxlbWVudCwgdG8sIGR1cmF0aW9uID0gNzApID0+IHtcclxuXHJcblx0XHRpZiAoZHVyYXRpb24gPD0gMCkgcmV0dXJuO1xyXG5cclxuXHRcdGNvbnN0IGRpZmZlcmVuY2UgPSB0byAtIGVsZW1lbnQuc2Nyb2xsVG9wLFxyXG5cdFx0XHQgIHBlclRpY2sgPSBkaWZmZXJlbmNlIC8gZHVyYXRpb24gKiAxMDtcclxuXHJcblx0XHRzZXRUaW1lb3V0KCAoKT0+IHtcclxuXHJcblx0XHRcdGVsZW1lbnQuc2Nyb2xsVG9wID0gZWxlbWVudC5zY3JvbGxUb3AgKyBwZXJUaWNrO1xyXG5cclxuXHRcdFx0aWYgKGVsZW1lbnQuc2Nyb2xsVG9wID09PSB0bykgcmV0dXJuO1xyXG5cclxuXHRcdFx0c2Nyb2xsVG8oZWxlbWVudCwgdG8sIGR1cmF0aW9uIC0gMTApO1xyXG5cclxuXHRcdH0sIDEwKTtcclxuXHJcblx0fVxyXG5cclxuXHJcblx0bGV0IHdpbmRvd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcblx0Y29uc3QgbW9iaWxlT3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1maWx0ZXItbW9iaWxlLW9wZW4nKTtcclxuXHJcblx0Ly8gY2hhbmdlXHJcblxyXG5cdGZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcblxyXG5cdFx0Ly8gbGl2ZS1zZWFyY2hcclxuXHJcblx0XHRpZiAoIHRhcmdldC5jbG9zZXN0KCcuanMtbGl2ZS1zZWFyY2hfX2lucHV0JykgKSB7XHJcblxyXG5cdFx0XHRjb25zdCB2YWx1ZSA9IHRhcmdldC5jbG9zZXN0KCcuanMtbGl2ZS1zZWFyY2hfX2lucHV0JykudmFsdWUudG9Mb3dlckNhc2UoKSxcclxuXHRcdFx0XHQgIGxpdmVTZWFyY2ggPSB0YXJnZXQuY2xvc2VzdCgnLmpzLWxpdmUtc2VhcmNoJyksXHJcblx0XHRcdFx0ICBpdGVtID0gbGl2ZVNlYXJjaC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtbGl2ZS1zZWFyY2hfX2l0ZW0nKSxcclxuXHRcdFx0XHQgIHJlc2V0ID0gbGl2ZVNlYXJjaC5xdWVyeVNlbGVjdG9yKCcuanMtbGl2ZS1zZWFyY2hfX3Jlc2V0JyksXHJcblx0XHRcdFx0ICBpbnB1dCA9IGxpdmVTZWFyY2gucXVlcnlTZWxlY3RvcignLmpzLWxpdmUtc2VhcmNoX19pbnB1dCcpO1xyXG5cclxuXHRcdFx0aWYgKCB2YWx1ZS5sZW5ndGggPT09IDAgKSB7XHJcblxyXG5cdFx0XHRcdHJlc2V0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0Wy4uLml0ZW1dLmZvckVhY2goIGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSApO1xyXG5cclxuXHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXNldC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRbLi4uaXRlbV0uZm9yRWFjaCggZWwgPT4gZWwuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScsIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1saXZlLXNlYXJjaCcpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModmFsdWUpID09PSBmYWxzZSApKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxuXHQvLyBjbGlja1xyXG5cclxuXHRmaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcblxyXG5cdFx0Y29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuXHRcdC8vIGxlZ2VuZCB0b2dnbGVcclxuXHJcblx0XHRpZiAoIHRhcmdldC5jbG9zZXN0KCcuZmlsdGVyX19sZWdlbmQnKSApIHtcclxuXHJcblx0XHRcdHRhcmdldC5jbG9zZXN0KCcuZmlsdGVyX19sZWdlbmQnKS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1vcGVuJyk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGxldHRlclxyXG5cclxuXHRcdGlmICggdGFyZ2V0LmNsb3Nlc3QoJy5qcy1sZXR0ZXJfX2J0bicpICkge1xyXG5cclxuXHRcdFx0Y29uc3QgYm94ID0gdGFyZ2V0LmNsb3Nlc3QoJy5qcy1sZXR0ZXInKSxcclxuXHRcdFx0XHQgIHNjcm9sbExpc3QgPSBib3gucXVlcnlTZWxlY3RvcignLmpzLWxldHRlcl9fc2Nyb2xsJyksXHJcblx0XHRcdFx0ICBpdGVtID0gYm94LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1sZXR0ZXJfX2l0ZW0nKSxcclxuXHRcdFx0XHQgIGxldHRlciA9IHRhcmdldC5jbG9zZXN0KCcuanMtbGV0dGVyX19idG4nKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKTtcclxuXHJcblx0XHRcdGlmICggbGV0dGVyID09PSAndG9wJyApIHtcclxuXHJcblx0XHRcdFx0c2Nyb2xsVG8oc2Nyb2xsTGlzdCwgMCk7XHJcblxyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Wy4uLml0ZW1dLmV2ZXJ5KCBlbCA9PiB7XHJcblxyXG5cdFx0XHRcdGlmICggbGV0dGVyID09PSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGV0dGVyJykgKSB7XHJcblxyXG5cdFx0XHRcdFx0c2Nyb2xsVG8oc2Nyb2xsTGlzdCwgZWwub2Zmc2V0VG9wKTtcclxuXHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHQvLyBsaXZlLXNlYXJjaFxyXG5cclxuXHRcdGlmICggdGFyZ2V0LmNsb3Nlc3QoJy5qcy1saXZlLXNlYXJjaF9fcmVzZXQnKSApIHtcclxuXHJcblx0XHRcdGNvbnN0IGxpdmVTZWFyY2ggPSB0YXJnZXQuY2xvc2VzdCgnLmpzLWxpdmUtc2VhcmNoJyksXHJcblx0XHRcdFx0ICBpdGVtID0gbGl2ZVNlYXJjaC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtbGl2ZS1zZWFyY2hfX2l0ZW0nKSxcclxuXHRcdFx0XHQgIGlucHV0ID0gbGl2ZVNlYXJjaC5xdWVyeVNlbGVjdG9yKCcuanMtbGl2ZS1zZWFyY2hfX2lucHV0Jyk7XHJcblxyXG5cdFx0XHRpbnB1dC52YWx1ZSA9ICcnO1xyXG5cdFx0XHR0YXJnZXQuY2xvc2VzdCgnLmpzLWxpdmUtc2VhcmNoX19yZXNldCcpLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFsuLi5pdGVtXS5mb3JFYWNoKCBlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykgKTtcclxuXHJcblx0XHRcdGlucHV0LmZvY3VzKCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGZpbHRlciBjbG9zZVxyXG5cclxuXHRcdGlmICggdGFyZ2V0LmNsb3Nlc3QoJy5maWx0ZXJfX2J0bi1jbG9zZScpICkge1xyXG5cclxuXHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1maWx0ZXItc2hvdycpO1xyXG5cclxuXHRcdFx0d2luZG93LnNjcm9sbFRvKDAsd2luZG93U2Nyb2xsKTtcclxuXHJcblx0XHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHtcclxuXHJcblx0XHRcdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbC1iZWhhdmlvci1vZmYnKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG4vLyBvcGVuIGZpbHRlclxyXG5cclxuXHRbLi4ubW9iaWxlT3Blbl0uZm9yRWFjaCggYnRuID0+IHtcclxuXHJcblx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuXHJcblx0XHRcdHdpbmRvd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcblx0XHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzY3JvbGwtYmVoYXZpb3Itb2ZmJyk7XHJcblxyXG5cdFx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnaXMtZmlsdGVyLXNob3cnKTtcclxuXHRcdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwwKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbi8vIHNvcnRcclxuXHJcblx0Y29uc3Qgc29ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1maWx0ZXItY2hhbmdlJyk7XHJcblxyXG5cdGlmIChzb3J0KSB7XHJcblxyXG5cdFx0c29ydC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldCk7XHJcblxyXG5cdFx0XHRpZiggZmlsdGVyLmVsZW1lbnRzW2V2ZW50LnRhcmdldC5uYW1lXSApIHtcclxuXHJcblx0XHRcdFx0ZmlsdGVyLmVsZW1lbnRzW2V2ZW50LnRhcmdldC5uYW1lXS52YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuXHJcblx0XHRcdFx0ZmlsdGVyLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIpKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxuLy8gIGZvb3RcclxuXHJcblx0Y29uc3QgZm9vdCA9IGZpbHRlci5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyX19mb290Jyk7XHJcblxyXG5cdGlmIChmb290KSB7XHJcblxyXG5cdFx0ZmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG5cclxuXHRcdFx0Zm9vdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0ZmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNldFwiLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRmb290LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXInKSk7IiwiLy8gQ2xpcGJvYXJkSlNcblxuXHQoIGVsZW1zID0+IHtcblxuXHRcdGlmICggZWxlbXMubGVuZ3RoICkge1xuXG5cdFx0XHRbLi4uZWxlbXNdLmZvckVhY2goIGJ0biA9PiB7XG5cblx0XHRcdFx0Y29uc3QgY2xpcGJvYXJkID0gbmV3IENsaXBib2FyZEpTKGJ0bik7XG5cblx0XHRcdFx0Y2xpcGJvYXJkLm9uKCdzdWNjZXNzJywgKCk9PiB7XG5cblx0XHRcdFx0XHRidG4uY2xhc3NMaXN0LmFkZCgnaXMtY2xpcGJvYXJkLXN1Y2Nlc3MnKTtcblxuXHRcdFx0XHRcdHNldFRpbWVvdXQoICgpPT4ge1xuXG5cdFx0XHRcdFx0XHRidG4uY2xhc3NMaXN0LnJlbW92ZSgnaXMtY2xpcGJvYXJkLXN1Y2Nlc3MnKTtcblxuXHRcdFx0XHRcdH0sMzAwMCk7XG5cblx0XHRcdFx0fSk7XG5cblx0XHRcdH0pO1xuXG5cdFx0fVxuXG5cdH0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNsaXBib2FyZC10ZXh0XScpKTtcblxuLy8gYXV0b3NpemVcblxuXHRhdXRvc2l6ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0ZXh0YXJlYS5hdXRvc2l6ZScpKTtcblxuLy8gZmlsZVxuXG5cbiggZmlsZXVwbG9hZCA9PiB7XG5cblx0aWYoZmlsZXVwbG9hZC5sZW5ndGgpe1xuXG5cdFx0Y29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmlsZXVwbG9hZC10ZW1wbGF0ZScpLmlubmVySFRNTDtcblxuXHRcdFsuLi5maWxldXBsb2FkXS5mb3JFYWNoKCBmaWxlID0+IHtcblxuXHRcdFx0Y29uc3QgaW5wdXQgPSBmaWxlLnF1ZXJ5U2VsZWN0b3IoJ1t0eXBlPVwiZmlsZVwiXScpLFxuXHRcdFx0XHQgIGJ0biA9IGZpbGUucXVlcnlTZWxlY3RvcignLmZpbGV1cGxvYWRfX2J0bicpO1xuXG5cdFx0XHRpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGV2ZW50ID0+IHtcblxuXHRcdFx0XHRidG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuXG5cdFx0XHRcdGZpbGUuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBNdXN0YWNoZS5yZW5kZXIodGVtcGxhdGUsIHsgbmFtZSA6IGlucHV0LnZhbHVlLnJlcGxhY2UoLy4qW1xcL1xcXFxdLywgJycpIH0pKTtcbi8qXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdTZWxlY3RlZCBmaWxlOiAnICsgaW5wdXQuZmlsZXMuaXRlbSgwKS5uYW1lKTtcblx0XHRcdFx0Y29uc29sZS5sb2coJ1NlbGVjdGVkIGZpbGU6ICcgKyBpbnB1dC5maWxlcy5pdGVtKDApLnNpemUpO1xuXHRcdFx0XHRjb25zb2xlLmxvZygnU2VsZWN0ZWQgZmlsZTogJyArIGlucHV0LmZpbGVzLml0ZW0oMCkudHlwZSk7XG5cbiovXHRcdFx0fSk7XG5cblx0XHRcdGZpbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG5cblx0XHRcdFx0aWYgKCBldmVudC50YXJnZXQuY2xvc2VzdCgnLmZpbGV1cGxvYWRfX3Jlc2V0JykgKSB7XG5cblx0XHRcdFx0XHRpbnB1dC52YWx1ZSA9ICcnO1xuXHRcdFx0XHRcdGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG5cdFx0XHRcdFx0ZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5maWxldXBsb2FkX19idG4nKS5yZW1vdmUoKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH0pO1xuXG5cdFx0fSk7XG5cblx0fVxuXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmlsZXVwbG9hZCcpKTtcblxuXG5cbiggZmlsZXVwbG9hZCA9PiB7XG5cblx0aWYoZmlsZXVwbG9hZC5sZW5ndGgpe1xuXG5cdFx0Y29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHJhZy1hbmQtZHJvcC10ZW1wbGF0ZScpLmlubmVySFRNTDtcblxuXHRcdFsuLi5maWxldXBsb2FkXS5mb3JFYWNoKCBmaWxlID0+IHtcblxuXHRcdFx0Y29uc3QgaW5wdXQgPSBmaWxlLnF1ZXJ5U2VsZWN0b3IoJ1t0eXBlPVwiZmlsZVwiXScpLFxuXHRcdFx0XHQgIGJ0biA9IGZpbGUucXVlcnlTZWxlY3RvcignLmRyYWctYW5kLWRyb3BfX2J0bicpO1xuXG5cdFx0XHRpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGV2ZW50ID0+IHtcblxuXHRcdFx0XHRidG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuXG5cdFx0XHRcdGZpbGUuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBNdXN0YWNoZS5yZW5kZXIodGVtcGxhdGUsIHsgbmFtZSA6IGlucHV0LnZhbHVlLnJlcGxhY2UoLy4qW1xcL1xcXFxdLywgJycpIH0pKTtcbi8qXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdTZWxlY3RlZCBmaWxlOiAnICsgaW5wdXQuZmlsZXMuaXRlbSgwKS5uYW1lKTtcblx0XHRcdFx0Y29uc29sZS5sb2coJ1NlbGVjdGVkIGZpbGU6ICcgKyBpbnB1dC5maWxlcy5pdGVtKDApLnNpemUpO1xuXHRcdFx0XHRjb25zb2xlLmxvZygnU2VsZWN0ZWQgZmlsZTogJyArIGlucHV0LmZpbGVzLml0ZW0oMCkudHlwZSk7XG5cbiovXHRcdFx0fSk7XG5cblx0XHRcdGZpbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG5cblx0XHRcdFx0aWYgKCBldmVudC50YXJnZXQuY2xvc2VzdCgnLmRyYWctYW5kLWRyb3BfX3Jlc2V0JykgKSB7XG5cblx0XHRcdFx0XHRpbnB1dC52YWx1ZSA9ICcnO1xuXHRcdFx0XHRcdGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG5cdFx0XHRcdFx0ZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5kcmFnLWFuZC1kcm9wX19idG4nKS5yZW1vdmUoKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH0pO1xuXG5cdFx0fSk7XG5cblx0fVxuXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJhZy1hbmQtZHJvcCcpKTtcblxuXG4oIGZpbGV1cGxvYWQgPT4ge1xuXG5cdGlmKGZpbGV1cGxvYWQubGVuZ3RoKXtcblxuXHRcdGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWZpbGUtdGVtcGxhdGUnKS5pbm5lckhUTUw7XG5cblx0XHRbLi4uZmlsZXVwbG9hZF0uZm9yRWFjaCggZmlsZSA9PiB7XG5cblx0XHRcdGNvbnN0IGlucHV0ID0gZmlsZS5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZmlsZV9faW5wdXQnKSxcblx0XHRcdFx0ICBkZXNjID0gZmlsZS5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZmlsZV9fZGVzYycpO1xuXG5cdFx0XHRpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGV2ZW50ID0+IHtcblxuXHRcdFx0XHRsZXQgdmFsdWUgPSAnJztcblxuXHRcdFx0XHRbLi4uaW5wdXQuZmlsZXNdLmZvckVhY2goIGZpbGUgPT4ge1xuXG5cdFx0XHRcdFx0aWYgKCB2YWx1ZS5sZW5ndGggKSB7XG5cblx0XHRcdFx0XHRcdHZhbHVlICs9ICcsICc7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRsZXQgc2l6ZSA9IChmaWxlLnNpemUgLyAxMDI0IC8gMTAyNCkudG9GaXhlZCgyKTtcblxuXHRcdFx0XHRcdHZhbHVlICs9IGZpbGUubmFtZSArICcgKCcgKyBzaXplICsgJ9Cc0LEpJztcblxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRmaWxlLnF1ZXJ5U2VsZWN0b3IoJy5idG4nKS5yZW1vdmUoKTtcblxuXHRcdFx0XHRpbnB1dC5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyZW5kJywgTXVzdGFjaGUucmVuZGVyKHRlbXBsYXRlKSk7XG5cblx0XHRcdFx0ZGVzYy50ZXh0Q29udGVudCA9IHZhbHVlO1xuXG5cdFx0XHR9KTtcblxuXHRcdH0pO1xuXG5cdH1cblxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsLWZpbGUnKSk7IiwiXHJcbiggaGVhZGVyID0+IHtcclxuXHJcblx0aWYgKGhlYWRlcikge1xyXG5cclxuXHRcdGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1jYXRhbG9nJyk7XHJcblxyXG5cdFx0bGV0IHJlc2l6ZVRpbWVvdXQgPSBudWxsO1xyXG5cclxuXHRcdGlmICggd2luZG93LmlubmVyV2lkdGggPiAxMjQ5ICkge1xyXG5cclxuXHRcdFx0aGVhZGVyLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWZpeGVkJywgd2luZG93LnBhZ2VZT2Zmc2V0ID4gMzYpOyAvLyBtZW51IHRvcFxyXG5cdFx0XHRtZW51LmNsYXNzTGlzdC50b2dnbGUoJ2lzLXRyYW5zcGFyZW50Jywgd2luZG93LnBhZ2VZT2Zmc2V0ID4gODYpOyAvLyA2MCArIDUzIC0gMzdcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG5cclxuXHRcdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRpZiAoXHJcblx0XHRcdFx0XHRyZXNpemVUaW1lb3V0ID09PSBudWxsICYmXHJcblx0XHRcdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnbW9kYWwtc2hvdycpID09PSBmYWxzZSAmJlxyXG5cdFx0XHRcdFx0d2luZG93LmlubmVyV2lkdGggPiAxMjQ5XHJcblx0XHRcdFx0KSB7XHJcblxyXG5cdFx0XHRcdFx0cmVzaXplVGltZW91dCA9IHNldFRpbWVvdXQoICgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRcdHJlc2l6ZVRpbWVvdXQgPSBudWxsO1xyXG5cclxuXHRcdFx0XHRcdFx0aGVhZGVyLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWZpeGVkJywgd2luZG93LnBhZ2VZT2Zmc2V0ID4gMzYpO1xyXG5cdFx0XHRcdFx0XHRtZW51LmNsYXNzTGlzdC50b2dnbGUoJ2lzLXRyYW5zcGFyZW50Jywgd2luZG93LnBhZ2VZT2Zmc2V0ID4gODYpO1xyXG5cclxuXHRcdFx0XHRcdH0sIDEwMCk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIHNlYXJjaFxyXG5cclxuXHRcdGNvbnN0IGhlYWRlclNlYXJjaCA9IGhlYWRlci5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyLXNlYXJjaF9faW5wdXQnKTtcclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IGJ0bk9wZW4gPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLmhlYWRlci1zZWFyY2gtc2hvdycpO1xyXG5cclxuXHRcdFx0aWYgKCBidG5PcGVuICkge1xyXG5cclxuXHRcdFx0XHRoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaXMtc2VhcmNoJyk7XHJcblxyXG5cdFx0XHRcdHNldFRpbWVvdXQoICgpID0+IFsuLi5oZWFkZXJTZWFyY2hdLmZvckVhY2goIGlucHV0ID0+IGlucHV0LmZvY3VzKCkgKSwgMTAwKTtcclxuXHJcblx0XHRcdH1cclxuLypcclxuXHRcdFx0aWYgKCBldmVudC50YXJnZXQuY2xvc2VzdCgnLmhlYWRlcicpID09PSBudWxsICkge1xyXG5cclxuXHRcdFx0XHRoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnaXMtc2VhcmNoJyk7XHJcblx0XHRcdFx0Wy4uLmhlYWRlclNlYXJjaF0uZm9yRWFjaCggaW5wdXQgPT4gaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtZm9jdXMnKSApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuKi9cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKSk7IiwiKCBlbGVtcyA9PiB7XHJcblxyXG5cdGlmKCFlbGVtcy5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Y29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcblx0c2NyaXB0LnNyYyA9ICcvanMvaW5wdXRtYXNrLm1pbi5qcyc7XHJcblx0c2NyaXB0Lm9ubG9hZCA9ICgpID0+IHtcclxuXHJcblx0XHRbLi4uZWxlbXNdLmZvckVhY2goIGVsID0+IHtcclxuXHJcblx0XHRcdGxldCBtYXNrSW5wdXQ7XHJcblxyXG5cdFx0XHRpZihlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2lucHV0bWFzay0tcGhvbmUnKSkge1xyXG5cclxuXHRcdFx0XHRtYXNrSW5wdXQgPSBuZXcgSW5wdXRtYXNrKHtcclxuXHRcdFx0XHRcdG1hc2s6ICcrNyAoIDk5OSApIDk5OSA5OSA5OScsXHJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcjogJy0nXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRtYXNrSW5wdXQubWFzayhlbCk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH07XHJcblxyXG5cdHNldFRpbWVvdXQoICgpID0+IGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KSwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Zhc3RMb2FkU2NyaXB0JykgPyAwIDogMTAwMDApO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmlucHV0bWFzaycpKTsiLCIoIGl0ZW1zID0+IHtcclxuXHJcblx0aWYoIWl0ZW1zLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRbLi4uaXRlbXNdLmZvckVhY2goIGl0ZW0gPT4ge1xyXG5cclxuXHRcdGNvbnN0IGJ0biA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLm9yZGVybGlzdF9fdG9nZ2xlIC5idXR0b24nKTtcclxuXHJcblx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRpdGVtLmNsYXNzTGlzdC50b2dnbGUoJ2lzLW9wZW4nKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub3JkZXJsaXN0JykpOyIsIiggbWVudSA9PiB7XHJcblxyXG5cdGlmKG1lbnUpIHtcclxuXHJcblx0XHRsZXQgc2Nyb2xsTGV2ZWwyID0gbnVsbDtcclxuXHJcblx0XHRjb25zdCBiYWNrID0gbWVudS5xdWVyeVNlbGVjdG9yKCcubWVudS1jYXRhbG9nX19iYWNrJyksXHJcblx0XHRcdCAgYm9keSA9IG1lbnUucXVlcnlTZWxlY3RvcignLm1lbnUtY2F0YWxvZ19fYm9keScpO1xyXG5cclxuXHRcdC8vINC40LrQvtC90LrQsCBsZXZlbDIgK1xyXG5cclxuXHRcdGNvbnN0IGxpbmtCdG4gPSBtZW51LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWNhdGFsb2dfX2xpbmsuaXMtYnRuJyksXHJcblx0XHRcdCAgaWNvUGx1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwic3ZnXCIpO1xyXG5cclxuXHRcdGljb1BsdXMuc2V0QXR0cmlidXRlTlMobnVsbCwgXCJ2aWV3Qm94XCIsIFwiMCAwIDI0IDI0XCIpO1xyXG5cdFx0aWNvUGx1cy5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcIndpZHRoXCIsIDI0KTtcclxuXHRcdGljb1BsdXMuc2V0QXR0cmlidXRlTlMobnVsbCwgXCJoZWlnaHRcIiwgMjQpO1xyXG5cdFx0aWNvUGx1cy5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnYnV0dG9uJyk7XHJcblxyXG5cdFx0aWNvUGx1cy5pbm5lckhUTUwgPSAnPHJlY3QgeD1cIjExXCIgeT1cIjZcIiB3aWR0aD1cIjJcIiBoZWlnaHQ9XCIxMlwiLz48cmVjdCB4PVwiNlwiIHk9XCIxMVwiIHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCIyXCIvPic7XHJcblxyXG5cdFx0Ly8g0LjQutC+0L3QutCwIHJpZ2h0IGxldmVsMSDQuCBsZXZlbDJcclxuXHRcdGNvbnN0IGxldmVsXzEgPSBtZW51LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWNhdGFsb2dfX2xpbmstLWFycm93LCAubWVudS1jYXRhbG9nX19saW5rLS1vbmx5LW1vYmlsZScpLFxyXG5cdFx0XHQgIGljb1JpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJzdmdcIik7XHJcblxyXG5cdFx0aWNvUmlnaHQuc2V0QXR0cmlidXRlTlMobnVsbCwgXCJ2aWV3Qm94XCIsIFwiMCAwIDI0IDI0XCIpO1xyXG5cdFx0aWNvUmlnaHQuc2V0QXR0cmlidXRlTlMobnVsbCwgXCJ3aWR0aFwiLCAzMik7XHJcblx0XHRpY29SaWdodC5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcImhlaWdodFwiLCAzMik7XHJcblx0XHRpY29SaWdodC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnYnV0dG9uJyk7XHJcblxyXG5cdFx0aWNvUmlnaHQuaW5uZXJIVE1MID0gJzx1c2UgeGxpbms6aHJlZj1cIiNzdmctY2hldnJvbi1yaWdodFwiLz4nO1xyXG5cclxuXHRcdC8vIHJlc2l6ZVxyXG5cclxuXHRcdGNvbnN0IHJlc2l6ZSA9ICgpID0+IHtcclxuXHJcblx0XHRcdGlmICggd2luZG93LmlubmVyV2lkdGggPCAxMjUwICkge1xyXG5cclxuXHRcdFx0XHRbLi4ubGV2ZWxfMV0uZm9yRWFjaCggYnRuID0+IHtcclxuXHJcblx0XHRcdFx0XHRpZiAoIGJ0bi5xdWVyeVNlbGVjdG9yKCdzdmcnKSA9PT0gbnVsbCApIHtcclxuXHJcblx0XHRcdFx0XHRcdGJ0bi5hcHBlbmQoaWNvUmlnaHQuY2xvbmVOb2RlKHRydWUpKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRbLi4ubGlua0J0bl0uZm9yRWFjaCggYnRuID0+IHtcclxuXHJcblx0XHRcdFx0XHRpZiAoIGJ0bi5xdWVyeVNlbGVjdG9yKCdzdmcnKSApIHtcclxuXHJcblx0XHRcdFx0XHRcdGJ0bi5xdWVyeVNlbGVjdG9yKCdzdmcnKS5yZW1vdmUoKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0YnRuLmFwcGVuZChpY29SaWdodC5jbG9uZU5vZGUodHJ1ZSkpO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdGJhY2suY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cdFx0XHRcdGJvZHkuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHRbLi4ubGV2ZWxfMV0uZm9yRWFjaCggYnRuID0+IHtcclxuXHJcblx0XHRcdFx0XHRpZiAoIGJ0bi5xdWVyeVNlbGVjdG9yKCdzdmcnKSApIHtcclxuXHJcblx0XHRcdFx0XHRcdGJ0bi5xdWVyeVNlbGVjdG9yKCdzdmcnKS5yZW1vdmUoKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRbLi4ubGlua0J0bl0uZm9yRWFjaCggYnRuID0+IHtcclxuXHJcblx0XHRcdFx0XHRpZiAoIGJ0bi5xdWVyeVNlbGVjdG9yKCdzdmcnKSApIHtcclxuXHJcblx0XHRcdFx0XHRcdGJ0bi5xdWVyeVNlbGVjdG9yKCdzdmcnKS5yZW1vdmUoKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0YnRuLmFwcGVuZChpY29QbHVzLmNsb25lTm9kZSh0cnVlKSk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHRyZXNpemUoKTtcclxuXHJcblx0XHRsZXQgcmVzaXplVGltZW91dCA9IG51bGwsXHJcblx0XHRcdHdpbmRvd1dpZHRoT0xkID0gd2luZG93LmlubmVyV2lkdGg7XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xyXG5cclxuXHRcdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRpZiAocmVzaXplVGltZW91dCA9PT0gbnVsbCkge1xyXG5cclxuXHRcdFx0XHRcdHJlc2l6ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0XHRyZXNpemVUaW1lb3V0ID0gbnVsbDtcclxuXHJcblx0XHRcdFx0XHRcdGlmKHdpbmRvd1dpZHRoT0xkICE9PSB3aW5kb3cuaW5uZXJXaWR0aCkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRyZXNpemUoKTtcclxuXHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR9LCAxMDApO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyBlbmQgcmVzaXplXHJcblxyXG5cclxuXHRcdC8vINC60LvQuNC6INC/0L4gbGV2ZWwyID0+INGA0LDRgdC60YDRi9GC0LjQtSBsZXZlbDNcclxuXHJcblx0XHRbLi4ubGlua0J0bl0uZm9yRWFjaCggYnRuID0+IHtcclxuXHJcblx0XHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdFx0aWYgKCBldmVudC50YXJnZXQuY2xvc2VzdCgnW3JvbGU9XCJidXR0b25cIl0nKSApIHtcclxuXHJcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0XHRcdGJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdpcy1vcGVuJyk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIG1vYmlsZVxyXG5cclxuXHRcdC8vINC60LvQuNC6INC/0L4gbGV2ZWwyID0+INGA0LDRgdC60YDRi9GC0LjQtSBsZXZlbDNcclxuXHJcblx0XHRbLi4ubGV2ZWxfMV0uZm9yRWFjaCggYnRuID0+IHtcclxuXHJcblx0XHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdFx0aWYgKCB3aW5kb3cuaW5uZXJXaWR0aCA8IDEyNTAgJiYgZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ1tyb2xlPVwiYnV0dG9uXCJdJykgKSB7XHJcblxyXG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdFx0XHRzY3JvbGxMZXZlbDIgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG5cdFx0XHRcdFx0YmFjay5pbm5lckhUTUwgPSBidG4uaW5uZXJIVE1MO1xyXG5cdFx0XHRcdFx0Ym9keS5pbm5lckhUTUwgPSBidG4ubmV4dEVsZW1lbnRTaWJsaW5nLmlubmVySFRNTDtcclxuXHJcblx0XHRcdFx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0XHRiYWNrLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHRcdFx0XHRcdFx0Ym9keS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIGJhY2tcclxuXHJcblx0XHRiYWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRiYWNrLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHRcdFx0XHRib2R5LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0d2luZG93LnNjcm9sbFRvKDAsc2Nyb2xsTGV2ZWwyKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIGJvZHlcclxuXHJcblx0XHRib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgYnRuID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5pcy1idG4nKTtcclxuXHJcblx0XHRcdGlmICggYnRuICYmIGV2ZW50LnRhcmdldC5jbG9zZXN0KCdbcm9sZT1cImJ1dHRvblwiXScpICkge1xyXG5cclxuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0XHRidG4uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtb3BlbicpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1jYXRhbG9nJykpO1xyXG5cclxuLy8gdG9vZ2xlXHJcbiggbWVudSA9PiB7XHJcblxyXG5cdC8vIGJ0biB0b2dnbGVcclxuXHJcblx0bGV0IHdpbmRvd1Njcm9sbCA9IG51bGw7XHJcblxyXG5cdCggYnRucyA9PiB7XHJcblxyXG5cdFx0Wy4uLmJ0bnNdLmZvckVhY2goIGJ0biA9PiB7XHJcblxyXG5cdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdHdpbmRvd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcblx0XHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdtZW51LXNob3cnKTtcclxuXHRcdFx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsLWJlaGF2aW9yLW9mZicpO1xyXG5cdFx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLDApO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tbWVudS1vcGVuJykpO1xyXG5cclxuXHQoIGJ0bnMgPT4ge1xyXG5cclxuXHRcdFsuLi5idG5zXS5mb3JFYWNoKCBidG4gPT4ge1xyXG5cclxuXHRcdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtc2hvdycpO1xyXG5cdFx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLHdpbmRvd1Njcm9sbCk7XHJcblxyXG5cdFx0XHRcdHNldFRpbWVvdXQoICgpID0+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzY3JvbGwtYmVoYXZpb3Itb2ZmJykgKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLW1lbnUtY2xvc2UnKSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1jYXRhbG9nJykpO1xyXG5cclxuLy8gcGFnZS1iYXJcclxuKCBidG4gPT4ge1xyXG5cclxuXHRpZiAoIGJ0biApIHtcclxuXHJcblx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRidG4uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtb3BlbicpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0aWYgKCBldmVudC50YXJnZXQuY2xvc2VzdCgnLnBhZ2UtYmFyX19tZW51LCAubGstbWVudScpID09PSBudWxsICkge1xyXG5cclxuXHRcdFx0XHRidG4uY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS1iYXJfX21lbnUtYnRuLCAubGstbWVudV9fdG9nZ2xlLWJ0bicpKTsiLCIoIG1vZGFsID0+IHtcclxuXHJcblx0aWYoIW1vZGFsKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGNvbnN0IGl0ZW1zID0gbW9kYWwucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsX19pdGVtJyksXHJcblx0XHQgIHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpLFxyXG5cdFx0ICBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtY2F0YWxvZycpLFxyXG5cdFx0ICBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyksXHJcblx0XHQgIHRpdGxlRGVmYXVsdCA9IHt9O1xyXG5cclxuXHRsZXQgYWN0aXZlTW9kYWwgPSBudWxsLFxyXG5cdFx0bWVudVRvcCA9IG51bGwsXHJcblx0XHRoZWFkZXJUb3AgPSBudWxsLFxyXG5cdFx0d2luZG93U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuXHRtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdoaWRlJywgKCkgPT4ge1xyXG5cclxuXHRcdGFjdGl2ZU1vZGFsICYmIGFjdGl2ZU1vZGFsLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwibW9kYWxDbG9zZVwiKSk7XHJcblxyXG5cdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1zaG93Jyk7XHJcblx0XHR3cmFwcGVyLnN0eWxlLnRvcCA9IDA7XHJcblx0XHR3aW5kb3cuc2Nyb2xsVG8oMCx3aW5kb3dTY3JvbGwpO1xyXG5cdFx0YWN0aXZlTW9kYWwgPSBmYWxzZTtcclxuXHJcblx0XHRtZW51LnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcclxuXHRcdGhlYWRlci5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XHJcblxyXG5cdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4ge1xyXG5cclxuXHRcdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbC1iZWhhdmlvci1vZmYnKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG5cdG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGlmKGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIikge1xyXG5cclxuXHRcdFx0bW9kYWwuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJoaWRlXCIpKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBtb2RhbFNob3cgPSAoc2VsZWN0b3IsdGl0bGUsaWQpID0+IHtcclxuXHJcblx0XHRpZighYWN0aXZlTW9kYWwpe1xyXG5cclxuXHRcdFx0d2luZG93U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuXHRcdFx0aWYgKCBoZWFkZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1maXhlZCcpICkge1xyXG5cclxuXHRcdFx0XHRtZW51VG9wID0gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShtZW51KS50b3ApLFxyXG5cdFx0XHRcdGhlYWRlclRvcCA9IHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUoaGVhZGVyKS50b3ApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHRhY3RpdmVNb2RhbCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9faXRlbS0tJyArIHNlbGVjdG9yKTtcclxuXHJcblx0XHRjb25zdCBhdXRvZm9jdXMgPSBhY3RpdmVNb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWF1dG9mb2N1cycpO1xyXG5cclxuXHRcdGlmICggYWN0aXZlTW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsX190aXRsZScpICkge1xyXG5cclxuXHRcdFx0aWYgKCB0aXRsZURlZmF1bHRbc2VsZWN0b3JdID09PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHRcdHRpdGxlRGVmYXVsdFtzZWxlY3Rvcl0gPSBhY3RpdmVNb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX3RpdGxlJykudGV4dENvbnRlbnQ7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRhY3RpdmVNb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX3RpdGxlJykudGV4dENvbnRlbnQgPSB0aXRsZSA/IHRpdGxlIDogdGl0bGVEZWZhdWx0W3NlbGVjdG9yXTtcclxuXHJcblx0XHRcdGlmICggYWN0aXZlTW9kYWwuZWxlbWVudHMuc3ViamVjdCApIHtcclxuXHJcblx0XHRcdFx0YWN0aXZlTW9kYWwuZWxlbWVudHMuc3ViamVjdC52YWx1ZSA9IHRpdGxlID8gdGl0bGUgOiB0aXRsZURlZmF1bHRbc2VsZWN0b3JdO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIGFjdGl2ZU1vZGFsLmNsYXNzTGlzdC5jb250YWlucygnZm9ybScpICYmIGFjdGl2ZU1vZGFsLmVsZW1lbnRzLmlkICkge1xyXG5cclxuXHRcdFx0YWN0aXZlTW9kYWwuZWxlbWVudHMuaWQudmFsdWUgPSBpZDtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Wy4uLml0ZW1zXS5mb3JFYWNoKCBlbCA9PiBlbC5jbGFzc0xpc3QudG9nZ2xlKCd2aXN1YWxseWhpZGRlbicsIGVsICE9PSBhY3RpdmVNb2RhbCkgKTtcclxuXHJcblx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsLWJlaGF2aW9yLW9mZicpO1xyXG5cclxuXHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHtcclxuXHJcblx0XHRcdHdyYXBwZXIuc3R5bGUudG9wID0gLXdpbmRvd1Njcm9sbCArICdweCc7XHJcblxyXG5cdFx0XHRpZiAoIGhlYWRlci5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWZpeGVkJykgKSB7XHJcblxyXG5cdFx0XHRcdG1lbnUuc3R5bGUudG9wID0gd2luZG93U2Nyb2xsICsgbWVudVRvcCArICdweCc7XHJcblx0XHRcdFx0aGVhZGVyLnN0eWxlLnRvcCA9IHdpbmRvd1Njcm9sbCArIGhlYWRlclRvcCArICdweCc7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ21vZGFsLXNob3cnKTtcclxuXHJcblx0XHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHtcclxuXHJcblx0XHRcdFx0d2luZG93LnNjcm9sbFRvKDAsMCk7XHJcblxyXG5cdFx0XHRcdGFjdGl2ZU1vZGFsLmZvY3VzKCk7XHJcblxyXG5cdFx0XHRcdGlmICggYXV0b2ZvY3VzICkge1xyXG5cclxuXHRcdFx0XHRcdGFjdGl2ZU1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dCcpLmZvY3VzKCk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9O1xyXG5cclxuXHRtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRpZiggZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbW9kYWwnKSB8fCBldmVudC50YXJnZXQuY2xvc2VzdCgnLm1vZGFsX19jbG9zZScpKXtcclxuXHJcblx0XHRcdG1vZGFsLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiaGlkZVwiKSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcblxyXG5cdFx0bGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuXHJcblx0XHR3aGlsZSAodGFyZ2V0ICE9PSBkb2N1bWVudCAmJiB0YXJnZXQgIT09IG51bGwpIHtcclxuXHJcblx0XHRcdGlmICh0YXJnZXQuaGFzQXR0cmlidXRlKCdkYXRhLW1vZGFsJykpIHtcclxuXHJcblx0XHRcdFx0bW9kYWxTaG93KFxyXG5cdFx0XHRcdFx0dGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1tb2RhbCcpLFxyXG5cdFx0XHRcdFx0dGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS10aXRsZScpLFxyXG5cdFx0XHRcdFx0dGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpXHJcblx0XHRcdFx0KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG5cdG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ21vZGFsU2hvdycsIGV2ZW50ID0+IG1vZGFsU2hvdyhldmVudC5kZXRhaWwuc2VsZWN0b3IpKTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpKTsiLCIiLCIoIGZvcm0gPT4ge1xyXG5cclxuXHRpZiggZm9ybSApIHtcclxuXHJcblx0XHRjb25zdCBzdGVwcyA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLm9yZGVyX19zdGVwJyksXHJcblx0XHRcdCAgbmF2TGlua3MgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5vcmRlcl9fc3RlcHMgYScpO1xyXG5cclxuXHRcdC8vIGhhc2hcclxuXHJcblx0XHRjb25zdCBzZXRTdGFnZSA9ICgpPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgaGFzaCA9IGxvY2F0aW9uLmhhc2g7XHJcblxyXG5cdFx0XHRbLi4uc3RlcHNdLmZvckVhY2goIHN0ZXAgPT4ge1xyXG5cclxuXHRcdFx0XHRzdGVwLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnLCBzdGVwLmdldEF0dHJpYnV0ZSgnZGF0YS1oYXNoJykgIT09IGhhc2guc2xpY2UoMSkgKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Wy4uLm5hdkxpbmtzXS5mb3JFYWNoKCBsaW5rID0+IHtcclxuXHJcblx0XHRcdFx0bGluay5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnLCBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpID09PSBoYXNoICk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblxyXG5cdFx0XHRpZiggZm9ybS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJykuY2xpZW50SGVpZ2h0ICkge1xyXG5cclxuXHRcdFx0XHRmb3JtLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIHNldFN0YWdlKTtcclxuXHJcblx0XHRpZiAoIGxvY2F0aW9uLmhhc2ggKSB7XHJcblxyXG5cdFx0XHRzZXRUaW1lb3V0KCBzZXRTdGFnZSApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcmRlcicpKTsiLCJcclxuKCBidG5QYWdlVXAgPT4ge1xyXG5cclxuXHRpZiAoYnRuUGFnZVVwKSB7XHJcblxyXG5cdFx0YnRuUGFnZVVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZG9jdW1lbnQuYm9keS5zY3JvbGxJbnRvVmlldyh7YmVoYXZpb3I6IFwic21vb3RoXCJ9KSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLXVwJykpOyIsIiggZWxlbWVudHMgPT4ge1xyXG5cclxuXHRpZihlbGVtZW50cy5sZW5ndGggPT09IDApIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Wy4uLmVsZW1lbnRzXS5mb3JFYWNoKCBkcm9wZG93biA9PiB7XHJcblxyXG5cdFx0Y29uc3QgbWFzayA9IGRyb3Bkb3duLnF1ZXJ5U2VsZWN0b3IoJy5waG9uZS1jb3VudHJ5X19tYXNrJyksXHJcblx0XHRcdCAgdmFsdWUgPSBkcm9wZG93bi5xdWVyeVNlbGVjdG9yKCcucGhvbmUtY291bnRyeV9fdmFsdWUnKSxcclxuXHRcdFx0ICByYWRpbyA9IGRyb3Bkb3duLnF1ZXJ5U2VsZWN0b3JBbGwoJy5waG9uZS1jb3VudHJ5X19yYWRpbycpO1xyXG5cclxuXHRcdFsuLi5yYWRpb10uZm9yRWFjaCggYnRuID0+IHtcclxuXHJcblx0XHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcclxuXHJcblx0XHRcdFx0bGV0IHBsYWNlaG9sZGVyID0gYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1tYXNrJyk7XHJcblx0XHRcdFx0cGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlci5yZXBsYWNlKC9cXFxcOS9nLCAnJCcpO1xyXG5cdFx0XHRcdHBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXIucmVwbGFjZSgvOS9nLCAnLScpO1xyXG5cdFx0XHRcdHBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXIucmVwbGFjZSgvXFwkL2csICc5Jyk7XHJcblxyXG5cdFx0XHRcdG1hc2suc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIHBsYWNlaG9sZGVyKTtcclxuXHRcdFx0XHRtYXNrLnZhbHVlID0gJyc7XHJcblxyXG5cdFx0XHRcdElucHV0bWFzayhidG4uZ2V0QXR0cmlidXRlKCdkYXRhLW1hc2snKSkubWFzayhtYXNrKTtcclxuXHJcblx0XHRcdFx0bGV0IG1hc2tJbnB1dDtcclxuXHJcblx0XHRcdFx0bWFza0lucHV0ID0gbmV3IElucHV0bWFzayh7XHJcblx0XHRcdFx0XHRtYXNrOiBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLW1hc2snKSxcclxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyOiAnLSdcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0bWFza0lucHV0Lm1hc2sobWFzayk7XHJcblxyXG5cdFx0XHRcdG1hc2suZm9jdXMoKTtcclxuXHJcblx0XHRcdFx0dmFsdWUudGV4dENvbnRlbnQgPSBidG4udmFsdWU7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGNvbnN0IGlzRHJvcGRvd24gPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnBob25lLWNvdW50cnlfX2J0bicpID8gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5waG9uZS1jb3VudHJ5JykgOiBudWxsO1xyXG5cclxuXHRcdFsuLi5lbGVtZW50c10uZm9yRWFjaCggZHJvcGRvd24gPT4ge1xyXG5cclxuXHRcdFx0ZHJvcGRvd24uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtb3BlbicsIGRyb3Bkb3duID09PSBpc0Ryb3Bkb3duICYmIGlzRHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1vcGVuJykgPT09IGZhbHNlICk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBob25lLWNvdW50cnknKSk7IiwiKCBpdGVtcyA9PiB7XG5cblx0aWYgKCBpdGVtcy5sZW5ndGggKSB7XG5cblx0XHRwaWNrbWV1cC5kZWZhdWx0cy5sb2NhbGVzWydydSddID0ge1xuXHRcdFx0ZGF5czogWyfQktC+0YHQutGA0LXRgdC10L3RjNC1JywgJ9Cf0L7QvdC10LTQtdC70YzQvdC40LonLCAn0JLRgtC+0YDQvdC40LonLCAn0KHRgNC10LTQsCcsICfQp9C10YLQstC10YDQsycsICfQn9GP0YLQvdC40YbQsCcsICfQodGD0LHQsdC+0YLQsCddLFxuXHRcdFx0ZGF5c1Nob3J0OiBbJ9CS0YEnLCAn0J/QvScsICfQktGCJywgJ9Ch0YAnLCAn0KfRgicsICfQn9GCJywgJ9Ch0LEnXSxcblx0XHRcdGRheXNNaW46IFsn0JLRgScsICfQn9C9JywgJ9CS0YInLCAn0KHRgCcsICfQp9GCJywgJ9Cf0YInLCAn0KHQsSddLFxuXHRcdFx0bW9udGhzOiBbJ9Cv0L3QstCw0YDRjCcsICfQpNC10LLRgNCw0LvRjCcsICfQnNCw0YDRgicsICfQkNC/0YDQtdC70YwnLCAn0JzQsNC5JywgJ9CY0Y7QvdGMJywgJ9CY0Y7Qu9GMJywgJ9CQ0LLQs9GD0YHRgicsICfQodC10L3RgtGP0LHRgNGMJywgJ9Ce0LrRgtGP0LHRgNGMJywgJ9Cd0L7Rj9Cx0YDRjCcsICfQlNC10LrQsNCx0YDRjCddLFxuXHRcdFx0bW9udGhzU2hvcnQ6IFsn0K/QvdCyJywgJ9Ck0LXQsicsICfQnNCw0YAnLCAn0JDQv9GAJywgJ9Cc0LDQuScsICfQmNGO0L0nLCAn0JjRjtC7JywgJ9CQ0LLQsycsICfQodC10L0nLCAn0J7QutGCJywgJ9Cd0L7RjycsICfQlNC10LonXVxuXHRcdH07XG5cbi8vXHRcdGxvY2FsZVxuXG5cdFx0Wy4uLml0ZW1zXS5mb3JFYWNoKCBjYWxlbmRhciA9PiB7XG5cblx0XHRcdGNvbnN0IGlucHV0ID0gY2FsZW5kYXIucXVlcnlTZWxlY3RvcignLmNhbGVuZGFyX19pbnB1dCcpLFxuXHRcdFx0XHQgIG1pbkRhdGUgPSBuZXcgRGF0ZShpbnB1dC5nZXRBdHRyaWJ1dGUoJ21pbicpKSxcblx0XHRcdFx0ICBtYXhEYXRlID0gbmV3IERhdGUoaW5wdXQuZ2V0QXR0cmlidXRlKCdtYXgnKSk7XG5cblx0XHRcdGNvbnN0IHBpY2ttZXVwQ2FsZW5kYXIgPSBwaWNrbWV1cChjYWxlbmRhciwge1xuXG5cdFx0XHRcdGZsYXQ6IHRydWUsXG5cdFx0XHRcdG1pbjogbWluRGF0ZSxcblx0XHRcdFx0bWF4OiBtYXhEYXRlLFxuXHRcdFx0XHRzZWxlY3RfbW9udGg6IGZhbHNlLFxuXHRcdFx0XHRzZWxlY3RfeWVhcjogZmFsc2UsXG5cdFx0XHRcdHRpdGxlX2Zvcm1hdDogJ0InLFxuXHRcdFx0XHRmb3JtYXQ6ICdZLW0tZCcsXG5cdFx0XHRcdGxvY2FsZTogJ3J1Jyxcblx0XHRcdFx0cHJldjogJzxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx1c2UgeGxpbms6aHJlZj1cIiNzdmctYXJyb3ctY2hldnJvbi1sZWZ0XCIvPjwvc3ZnPicsXG5cdFx0XHRcdG5leHQ6ICc8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dXNlIHhsaW5rOmhyZWY9XCIjc3ZnLWFycm93LWNoZXZyb24tcmlnaHRcIi8+PC9zdmc+J1xuXG5cdFx0XHR9KTtcblxuXHRcdFx0Y2FsZW5kYXIuYWRkRXZlbnRMaXN0ZW5lcigncGlja21ldXAtY2hhbmdlJywgKCkgPT4ge1xuXG5cdFx0XHRcdGlucHV0LnZhbHVlID0gcGlja21ldXBDYWxlbmRhci5nZXRfZGF0ZSh0cnVlKTtcblxuXHRcdFx0fSk7XG5cblx0XHR9KTtcblxuXHR9XG5cbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYWxlbmRhcicpKTsiLCIoIGZvcm0gPT4ge1xyXG5cclxuXHRpZiAoIGZvcm0gKSB7XHJcblxyXG5cdFx0bGV0IG1vZGFsRm9ybVRhcmdldCA9IG51bGw7XHJcblxyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHQvLyDQstGL0LHQvtGAINGG0LLQtdGC0LAg0LIg0YLQvtCy0LDRgNC1INC40LvQuCDQsiDQutCw0YDRgtC+0YfQutC1XHJcblxyXG5cdFx0XHRjb25zdCBwcm9kdWN0Q29sb3IgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLmpzLW1vZGFsLWNvbG9yJyk7XHJcblxyXG5cdFx0XHRpZiAocHJvZHVjdENvbG9yKSB7XHJcblxyXG5cdFx0XHRcdGNvbnN0IGNhcmRQcm9kdWN0ID0gcHJvZHVjdENvbG9yLmNsb3Nlc3QoJy5wcm9kdWN0JykgfHwgcHJvZHVjdENvbG9yLmNsb3Nlc3QoJy5wcmV2aWV3LWNhcmQnKSxcclxuXHRcdFx0XHRcdCAgZm9ybVByb2R1Y3QgPSBjYXJkUHJvZHVjdC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1idXknKSB8fCBjYXJkUHJvZHVjdC5xdWVyeVNlbGVjdG9yKCcucHJldmlldy1jYXJkX19mb3JtJyksXHJcblx0XHRcdFx0XHQgIGlucHV0SWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5cclxuXHRcdFx0XHRpbnB1dElkLm5hbWUgPSAnaWQnO1xyXG5cdFx0XHRcdGlucHV0SWQudHlwZSA9ICdoaWRkZW4nO1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoICgpID0+IGlucHV0SWQudmFsdWUgPSBmb3JtUHJvZHVjdC5lbGVtZW50cy5pZC52YWx1ZSk7XHJcblxyXG5cdFx0XHRcdG1vZGFsRm9ybVRhcmdldCA9IGZvcm1Qcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aWV3LWNhcmRfX21vZGFsLWNvbG9yJyk7XHJcblxyXG5cdFx0XHRcdGZvcm0uaW5uZXJIVE1MID0gbW9kYWxGb3JtVGFyZ2V0LmlubmVySFRNTDtcclxuXHRcdFx0XHRmb3JtLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJiZWdpbicsIGlucHV0SWQpO1xyXG5cclxuXHRcdFx0XHRjb25zdCBldmVudE1vZGFsU2hvdyA9IG5ldyBDdXN0b21FdmVudChcIm1vZGFsU2hvd1wiLCB7XHJcblx0XHRcdFx0XHRkZXRhaWw6IHtcclxuXHRcdFx0XHRcdFx0c2VsZWN0b3I6IFwicHJldmlldy1jYXJkLWNvbG9yXCJcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0d2luZG93Lm1vZGFsLmRpc3BhdGNoRXZlbnQoZXZlbnRNb2RhbFNob3cpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vINC+0LHRgNCw0YLQvdC+INCy0YHRgtCw0LLQu9GP0LXQvCDQvNC+0LTQsNC70LrRgyDQsiDRgtC+0LLQsNGAXHJcblxyXG5cdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdtb2RhbENsb3NlJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0Zm9ybS5lbGVtZW50cy5pZC5yZW1vdmUoKTtcclxuXHJcblx0XHRcdFsuLi5mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbC1jYXJkLWNvbG9yX19pdGVtLWlucHV0JyldLmZvckVhY2goIGlucHV0ID0+IHtcclxuXHJcblx0XHRcdFx0aWYgKGlucHV0LmNoZWNrZWQpIHtcclxuXHJcblx0XHRcdFx0XHRpbnB1dC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCdjaGVja2VkJyk7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0aW5wdXQucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJyk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0bW9kYWxGb3JtVGFyZ2V0LmlubmVySFRNTCA9IGZvcm0uaW5uZXJIVE1MO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0Ly8g0LjQt9C80LXQvdC40YLRjCDRhtCy0LXRglxyXG5cclxuXHRcdFx0Y29uc3QgY2FyZENvbG9yID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5tb2RhbC1jYXJkLWNvbG9yX19pdGVtLWlucHV0Jyk7XHJcblxyXG5cdFx0XHRpZiAoY2FyZENvbG9yKSB7XHJcblxyXG5cdFx0XHRcdC8vIHNldCBjbGFzcyBjaGVja2VkXHJcblx0XHRcdFx0Y29uc3QgaXRlbUNoZWNrZWQgPSBjYXJkQ29sb3IuY2xvc2VzdCgnLm1vZGFsLWNhcmQtY29sb3JfX2l0ZW0nKSxcclxuXHRcdFx0XHRcdCAgbGlzdCA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsLWNhcmQtY29sb3JfX2l0ZW0nKTtcclxuXHJcblx0XHRcdFx0Wy4uLmxpc3RdLmZvckVhY2goIGl0ZW0gPT4ge1xyXG5cclxuXHRcdFx0XHRcdGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtY2hlY2tlZCcsIGl0ZW0gPT09IGl0ZW1DaGVja2VkKTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdGNvbnN0IGNhcmQgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLm1vZGFsLWNhcmQtY29sb3InKSxcclxuXHRcdFx0XHRcdCAgaWQgPSBjYXJkLmVsZW1lbnRzLmlkLnZhbHVlLFxyXG5cdFx0XHRcdFx0ICBhcnRpY2xlSWQgPSBjYXJkQ29sb3IudmFsdWU7XHJcblxyXG5cdFx0XHRcdC8vIGltZ1xyXG5cclxuXHRcdFx0XHRjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jYXJkLWNvbG9yX19waG90byBpbWcnKS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGNhcmRDb2xvci5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJykpO1xyXG5cdFx0XHRcdGNhcmQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNhcmQtY29sb3JfX3Bob3RvIGltZycpLnNldEF0dHJpYnV0ZSgnc3Jjc2V0JywgY2FyZENvbG9yLmdldEF0dHJpYnV0ZSgnZGF0YS1zcmNzZXQnKSk7XHJcblxyXG5cdFx0XHRcdC8vIHByaWNlXHJcblxyXG5cdFx0XHRcdGlmICggY2FyZENvbG9yLmdldEF0dHJpYnV0ZSgnZGF0YS1wcmljZS1vbGQnKSApIHtcclxuXHJcblx0XHRcdFx0XHRjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5wcmljZV9fb2xkJykudGV4dENvbnRlbnQgPSBjYXJkQ29sb3IuZ2V0QXR0cmlidXRlKCdkYXRhLXByaWNlLW9sZCcpO1xyXG5cdFx0XHRcdFx0Y2FyZC5xdWVyeVNlbGVjdG9yKCcucHJpY2VfX29sZCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5wcmljZV9fb2xkJykuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGNhcmQucXVlcnlTZWxlY3RvcignLnByaWNlX192YWx1ZScpLnRleHRDb250ZW50ID0gY2FyZENvbG9yLmdldEF0dHJpYnV0ZSgnZGF0YS1wcmljZScpO1xyXG5cclxuXHRcdFx0XHQvLyBidXlcclxuXHJcblx0XHRcdFx0Y29uc3QgYnV5ID0gY2FyZENvbG9yLmdldEF0dHJpYnV0ZSgnZGF0YS1idXknKSxcclxuXHRcdFx0XHRcdCAgYnV5Q2FydCA9IGJ1eSA9PT0gJ2luLWNhcnQnLFxyXG5cdFx0XHRcdFx0ICBidXlEaXNhYmxlZCA9IGJ1eSA9PT0gJ2Rpc2FibGVkJyxcclxuXHRcdFx0XHRcdCAgYnV5QnRuID0gYnV5ID09PSBudWxsIHx8IGJ1eURpc2FibGVkLFxyXG5cdFx0XHRcdFx0ICB0ZW1wbGF0ZVN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1jYXJkLWNvbG9yLXN1Ym1pdC10ZW1wbGF0ZScpLmlubmVySFRNTDtcclxuXHJcblx0XHRcdFx0Y2FyZC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY2FyZC1jb2xvcl9fc3VibWl0JykuaW5uZXJIVE1MID0gTXVzdGFjaGUucmVuZGVyKHRlbXBsYXRlU3VibWl0LCB7IGJ1eUJ0biwgYnV5RGlzYWJsZWQsIGJ1eUNhcnQgfSk7XHJcblxyXG5cdFx0XHRcdC8vIG92ZXJsYXlcclxuXHJcblx0XHRcdFx0Y29uc3Qgb3ZlcmxheSA9IGNhcmRDb2xvci5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3ZlcmxheScpLFxyXG5cdFx0XHRcdFx0ICBvdmVybGF5VGl0bGUgPSBjYXJkQ29sb3IuZ2V0QXR0cmlidXRlKCdkYXRhLW92ZXJsYXktdGl0bGUnKSxcclxuXHRcdFx0XHRcdCAgb3ZlcmxheVRleHQgPSBjYXJkQ29sb3IuZ2V0QXR0cmlidXRlKCdkYXRhLW92ZXJsYXktdGV4dCcpLFxyXG5cdFx0XHRcdFx0ICBvdmVybGF5TG9naW4gPSBvdmVybGF5ID09PSAnbG9naW4nLFxyXG5cdFx0XHRcdFx0ICBvdmVybGF5Tm90ID0gb3ZlcmxheSA9PT0gJ25vdCcsXHJcblx0XHRcdFx0XHQgIGVsT3ZlcmxheSA9IGNhcmQucXVlcnlTZWxlY3RvcignLm92ZXJsYXktZGlzYWJsZWQnKTtcclxuXHJcblx0XHRcdFx0aWYgKCBlbE92ZXJsYXkgKSB7XHJcblxyXG5cdFx0XHRcdFx0ZWxPdmVybGF5LnJlbW92ZSgpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGNhcmQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNhcmQtY29sb3JfX3Bob3RvJykuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBNdXN0YWNoZS5yZW5kZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI292ZXJsYXktZGlzYWJsZWQtdGVtcGxhdGUnKS5pbm5lckhUTUwsIHsgb3ZlcmxheSwgb3ZlcmxheVRpdGxlLCBvdmVybGF5VGV4dCwgb3ZlcmxheUxvZ2luLCBvdmVybGF5Tm90LCBpZCwgYXJ0aWNsZUlkIH0pKTtcclxuXHJcblx0XHRcdFx0Ly8gYXZhaWxhYmlsaXR5XHJcblxyXG5cdFx0XHRcdGNhcmQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNhcmQtY29sb3JfX2F2YWlsYWJpbGl0eScpLmlubmVySFRNTCA9IE11c3RhY2hlLnJlbmRlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXZhaWxhYmlsaXR5LXRlbXBsYXRlJykuaW5uZXJIVE1MLCB7IGF2YWlsYWJpbGl0eTogIW92ZXJsYXlOb3QgfSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmV2aWV3LWNhcmQtY29sb3InKSk7IiwiKCAoKSA9PiB7XHJcblxyXG5cdGNvbnN0IHZvbHVtZUNoYW5nZSA9IGNhcmRWb2x1bWUgPT4ge1xyXG5cclxuXHRcdGNvbnN0IGNhcmQgPSBjYXJkVm9sdW1lLmNsb3Nlc3QoJy5wcmV2aWV3LWNhcmQnKSxcclxuXHRcdFx0ICBpZCA9IGNhcmRWb2x1bWUuY2xvc2VzdCgnLnByZXZpZXctY2FyZF9fZm9ybScpLmVsZW1lbnRzLmlkLnZhbHVlLFxyXG5cdFx0XHQgIGFydGljbGVJZCA9IGNhcmRWb2x1bWUudmFsdWUsXHJcblx0XHRcdCAgdGVtcGxhdGVGb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByZXZpZXctY2FyZC1mb290LXRlbXBsYXRlJykuaW5uZXJIVE1MLFxyXG5cdFx0XHQgIHRlbXBsYXRlRmxhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmV2aWV3LWNhcmQtZmxhZy10ZW1wbGF0ZScpLmlubmVySFRNTCxcclxuXHRcdFx0ICB0ZW1wbGF0ZUxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByZXZpZXctY2FyZC1sYWJlbC10ZW1wbGF0ZScpLmlubmVySFRNTCxcclxuXHRcdFx0ICB0ZW1wbGF0ZVByaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaWNlLXRlbXBsYXRlJykuaW5uZXJIVE1MLFxyXG5cdFx0XHQgIHRlbXBsYXRlT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvdmVybGF5LWRpc2FibGVkLXRlbXBsYXRlJykuaW5uZXJIVE1MO1xyXG5cclxuXHRcdC8vINC60L3QvtC/0LrQsCDQutGD0L/QuNGC0Ywg0Lgg0LjQt9Cx0YDQsNC90L3QvtC1XHJcblxyXG5cdFx0Y29uc3QgYnV5ID0gY2FyZFZvbHVtZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnV5JyksXHJcblx0XHRcdCAgYnV5Q2FydCA9IGJ1eSA9PT0gJ2luLWNhcnQnLFxyXG5cdFx0XHQgIGJ1eURpc2FibGVkID0gYnV5ID09PSAnZGlzYWJsZWQnLFxyXG5cdFx0XHQgIGJ1eUJ0biA9IGJ1eSA9PT0gbnVsbCB8fCBidXlEaXNhYmxlZCxcclxuXHRcdFx0ICBmYXZvdXJpdGUgPSBjYXJkVm9sdW1lLmdldEF0dHJpYnV0ZSgnZGF0YS1mYXZvdXJpdGUnKTtcclxuXHJcblx0XHRjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aWV3LWNhcmRfX2Zvb3QnKS5pbm5lckhUTUwgPSBNdXN0YWNoZS5yZW5kZXIodGVtcGxhdGVGb290LCB7IGJ1eUJ0biwgYnV5RGlzYWJsZWQsIGJ1eUNhcnQsIGZhdm91cml0ZSB9KTtcclxuXHJcblx0XHQvLyDRhtC10L3QsFxyXG5cclxuXHRcdGNvbnN0IHByaWNlID0gY2FyZFZvbHVtZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2UnKSxcclxuXHRcdFx0ICBwcmljZU9sZCA9IGNhcmRWb2x1bWUuZ2V0QXR0cmlidXRlKCdkYXRhLXByaWNlLW9sZCcpO1xyXG5cclxuXHRcdGNhcmQucXVlcnlTZWxlY3RvcignLnByZXZpZXctY2FyZF9fcHJpY2UnKS5pbm5lckhUTUwgPSBNdXN0YWNoZS5yZW5kZXIodGVtcGxhdGVQcmljZSwgeyBwcmljZSwgcHJpY2VPbGQgfSk7XHJcblxyXG5cdFx0Ly8g0YTQu9Cw0LNcclxuXHJcblx0XHRjb25zdCBmbGFnID0gY2FyZFZvbHVtZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmxhZycpLFxyXG5cdFx0XHQgIGZsYWdDb2xvciA9IGNhcmRWb2x1bWUuZ2V0QXR0cmlidXRlKCdkYXRhLWZsYWctY29sb3InKSxcclxuXHRcdFx0ICBjYXJkRmxhZyA9IGNhcmQucXVlcnlTZWxlY3RvcignLnByZXZpZXctY2FyZF9fZmxhZycpO1xyXG5cclxuXHRcdGlmIChjYXJkRmxhZykge1xyXG5cclxuXHRcdFx0Y2FyZEZsYWcucmVtb3ZlKCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGNhcmQucXVlcnlTZWxlY3RvcignLnByZXZpZXctY2FyZF9faGVhZCcpLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgTXVzdGFjaGUucmVuZGVyKHRlbXBsYXRlRmxhZywgeyBmbGFnLCBmbGFnQ29sb3IgfSkpO1xyXG5cclxuXHRcdC8vIGxhYmVsXHJcblxyXG5cdFx0Y29uc3Qgc2FsZSA9IGNhcmRWb2x1bWUuZ2V0QXR0cmlidXRlKCdkYXRhLWxhYmVsLXNhbGUnKSxcclxuXHRcdFx0ICBkaXNjb3VudCA9IGNhcmRWb2x1bWUuZ2V0QXR0cmlidXRlKCdkYXRhLWxhYmVsLWRpc2NvdW50JyksXHJcblx0XHRcdCAgZ2lmdCA9IGNhcmRWb2x1bWUuZ2V0QXR0cmlidXRlKCdkYXRhLWxhYmVsLWdpZnQnKSxcclxuXHRcdFx0ICBlbExhYmVsID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcucHJldmlldy1jYXJkX19sYWJlbCcpO1xyXG5cclxuXHRcdGlmICggZWxMYWJlbCApIHtcclxuXHJcblx0XHRcdGVsTGFiZWwucmVtb3ZlKCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGNhcmQucXVlcnlTZWxlY3RvcignLnByZXZpZXctY2FyZF9faGVhZCcpLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgTXVzdGFjaGUucmVuZGVyKHRlbXBsYXRlTGFiZWwsIHsgc2FsZSwgZGlzY291bnQsIGdpZnQgfSkpO1xyXG5cclxuXHRcdC8vIG92ZXJsYXlcclxuXHJcblx0XHRjb25zdCBvdmVybGF5ID0gY2FyZFZvbHVtZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3ZlcmxheScpLFxyXG5cdFx0XHQgIG92ZXJsYXlUaXRsZSA9IGNhcmRWb2x1bWUuZ2V0QXR0cmlidXRlKCdkYXRhLW92ZXJsYXktdGl0bGUnKSxcclxuXHRcdFx0ICBvdmVybGF5VGV4dCA9IGNhcmRWb2x1bWUuZ2V0QXR0cmlidXRlKCdkYXRhLW92ZXJsYXktdGV4dCcpLFxyXG5cdFx0XHQgIG92ZXJsYXlMb2dpbiA9IG92ZXJsYXkgPT09ICdsb2dpbicsXHJcblx0XHRcdCAgb3ZlcmxheU5vdCA9IG92ZXJsYXkgPT09ICdub3QnLFxyXG5cdFx0XHQgIG92ZXJsYXlXaXRoZHJhd24gPSBvdmVybGF5ID09PSAnd2l0aGRyYXduJyxcclxuXHRcdFx0ICBlbE92ZXJsYXkgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5LWRpc2FibGVkJyk7XHJcblxyXG5cdFx0aWYgKCBlbE92ZXJsYXkgKSB7XHJcblxyXG5cdFx0XHRlbE92ZXJsYXkucmVtb3ZlKCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGNhcmQucXVlcnlTZWxlY3RvcignLnByZXZpZXctY2FyZF9faGVhZCcpLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgTXVzdGFjaGUucmVuZGVyKHRlbXBsYXRlT3ZlcmxheSwgeyBvdmVybGF5LCBvdmVybGF5VGl0bGUsIG92ZXJsYXlUZXh0LCBvdmVybGF5TG9naW4sIG92ZXJsYXlOb3QsIG92ZXJsYXlXaXRoZHJhd24sIGlkLCBhcnRpY2xlSWQgfSkpO1xyXG5cclxuXHR9XHJcblxyXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50ID0+IHtcclxuXHJcblx0XHQvLyDQuNC30LzQtdC90LjRgtGMINC+0LHRitGR0LxcclxuXHRcdGNvbnN0IGNhcmRWb2x1bWUgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnByZXZpZXctY2FyZF9fdm9sdW1lLWlucHV0Jyk7XHJcblxyXG5cdFx0aWYgKGNhcmRWb2x1bWUpIHtcclxuXHJcblx0XHRcdHZvbHVtZUNoYW5nZShjYXJkVm9sdW1lKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8g0LjQt9C80LXQvdC40YLRjCDQvtCx0YrRkdC8INCyINC80L7QsdC40LvRjNC90L7QvFxyXG5cdFx0Y29uc3QgY2FyZFZvbHVtZU1vYmlsZSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcucHJldmlldy1jYXJkX192b2x1bWUtc2VsZWN0Jyk7XHJcblxyXG5cdFx0aWYgKGNhcmRWb2x1bWVNb2JpbGUpIHtcclxuXHJcblx0XHRcdGNvbnN0IHZhbHVlID0gY2FyZFZvbHVtZU1vYmlsZS52YWx1ZSxcclxuXHRcdFx0XHQgIGNhcmQgPSBjYXJkVm9sdW1lTW9iaWxlLmNsb3Nlc3QoJy5wcmV2aWV3LWNhcmQnKSxcclxuXHRcdFx0XHQgIGlucHV0QnRuID0gY2FyZC5xdWVyeVNlbGVjdG9yQWxsKCcucHJldmlldy1jYXJkX192b2x1bWUtaW5wdXQnKTtcclxuXHJcblx0XHRcdFsuLi5pbnB1dEJ0bl0uZm9yRWFjaCggZWwgPT4ge1xyXG5cclxuXHRcdFx0XHRpZiAoIGVsLmdldEF0dHJpYnV0ZSgndmFsdWUnKSA9PT0gdmFsdWUgKSB7XHJcblxyXG5cdFx0XHRcdFx0ZWwuY2hlY2tlZCA9IHRydWU7XHJcblxyXG5cdFx0XHRcdFx0dm9sdW1lQ2hhbmdlKGVsKTtcclxuXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRlbC5jaGVja2VkID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG59KSgpOyIsIiggcHJvZHVjdCA9PiB7XHJcblxyXG5cdGlmKCBwcm9kdWN0ICkge1xyXG5cclxuXHRcdC8vIHBhcmFtXHJcblxyXG5cdFx0aWYgKCB3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCApIHtcclxuXHJcblx0XHRcdGNvbnN0IGJ0biA9IHByb2R1Y3QucXVlcnlTZWxlY3RvcignLnByb2R1Y3RfX29wZW4tdGFiIC5idG4nKTtcclxuXHJcblx0XHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdFx0YnRuLmNsb3Nlc3QoJy5wcm9kdWN0X19zcGVjcycpLmNsYXNzTGlzdC50b2dnbGUoJ2lzLW9wZW4nKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHQvLyBoYXNoXHJcblxyXG5cdFx0Y29uc3Qgc2V0VGFiID0gKCk9PiB7XHJcblxyXG5cdFx0XHRjb25zdCB0YWJJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihsb2NhdGlvbi5oYXNoKS5jbG9zZXN0KCcudGFic19faXRlbScpO1xyXG5cclxuXHRcdFx0aWYgKCB0YWJJdGVtICkge1xyXG5cclxuXHRcdFx0XHR0YWJJdGVtLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwic2V0QWN0aXZlXCIpKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBzZXRUYWIpO1xyXG5cclxuXHRcdGlmICggbG9jYXRpb24uaGFzaCApIHtcclxuXHJcblx0XHRcdHNldFRpbWVvdXQoIHNldFRhYiApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHQvLyBnYWxsZXJ5XHJcblxyXG5cdFx0Y29uc3QgZ2FsbGVyeSA9IHByb2R1Y3QucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtZ2FsbGVyeScpO1xyXG5cdFx0XHQgIGdhbGxlcnlQcmV2aWV3ID0gcHJvZHVjdC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdC1nYWxsZXJ5X19wcmV2aWV3LWxpbmsnKTtcclxuXHJcblx0XHRjb25zdCBzZXRBY3RpdmVJbWcgPSBsaW5rID0+IHtcclxuXHJcblx0XHRcdGxldCBpbmRleCA9IG51bGw7XHJcblxyXG5cdFx0XHRbLi4uZ2FsbGVyeVByZXZpZXddLmZvckVhY2goIChfbGluayxfaW5kZXgpID0+IHtcclxuXHJcblx0XHRcdFx0X2xpbmsucGFyZW50Tm9kZS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1jdXJyZW50JywgX2xpbmsgPT09IGxpbmspO1xyXG5cclxuXHRcdFx0XHRpZiAoIF9saW5rID09PSBsaW5rICkge1xyXG5cclxuXHRcdFx0XHRcdGluZGV4ID0gX2luZGV4O1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHByb2R1Y3QucXVlcnlTZWxlY3RvcignLnN3aXBlci1jb250YWluZXItLXByb2R1Y3QnKS5zd2lwZXIuc2xpZGVUb0xvb3AoaW5kZXgpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRnYWxsZXJ5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgdGFyZ2V0TGluayA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCdhJyk7XHJcblxyXG5cdFx0XHRpZiAoIHRhcmdldExpbmsgKSB7XHJcblxyXG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRcdGlmICggdGFyZ2V0TGluay5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2R1Y3QtZ2FsbGVyeV9fcHJldmlldy1saW5rJykgKSB7XHJcblxyXG5cdFx0XHRcdFx0c2V0QWN0aXZlSW1nKHRhcmdldExpbmspO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gdm9sdW1lXHJcblxyXG5cdFx0Y29uc3Qgdm9sdW1lQ2hhbmdlID0gY2FyZFZvbHVtZSA9PiB7XHJcblxyXG5cclxuXHRcdFx0Y29uc3QgZm9ybSA9IGNhcmRWb2x1bWUuY2xvc2VzdCgnLnByb2R1Y3QtYnV5JyksXHJcblx0XHRcdFx0ICBpZCA9IGZvcm0uZWxlbWVudHMuaWQudmFsdWUsXHJcblx0XHRcdFx0ICBhcnRpY2xlSWQgPSBjYXJkVm9sdW1lLnZhbHVlLFxyXG5cdFx0XHRcdCAgdGVtcGxhdGVGb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2R1Y3QtYnV5LXN1Ym1pdC10ZW1wbGF0ZScpLmlubmVySFRNTCxcclxuXHRcdFx0XHQgIHRlbXBsYXRlRmF2b3VyaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2R1Y3QtYnV5LWZhdm91cml0ZS10ZW1wbGF0ZScpLmlubmVySFRNTCxcclxuXHRcdFx0XHQgIHRlbXBsYXRlUHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpY2UtdGVtcGxhdGUnKS5pbm5lckhUTUwsXHJcblx0XHRcdFx0ICB0ZW1wbGF0ZUF2YWlsYWJpbGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhdmFpbGFiaWxpdHktdGVtcGxhdGUnKS5pbm5lckhUTUwsXHJcblx0XHRcdFx0ICB0ZW1wbGF0ZU92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3ZlcmxheS1kaXNhYmxlZC10ZW1wbGF0ZScpLmlubmVySFRNTCxcclxuXHRcdFx0XHQgIHRlbXBsYXRlQm9hcmRMb2dpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9kdWN0LWxvZ2luLXRlbXBsYXRlJykuaW5uZXJIVE1MO1xyXG5cclxuXHRcdFx0Ly8gdm9sdW1lIC0+IGdhbGxlcnlcclxuXHJcblx0XHRcdFsuLi5nYWxsZXJ5UHJldmlld10uZm9yRWFjaCggbGluayA9PiB7XHJcblxyXG5cdFx0XHRcdGlmICggbGluay5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXJ0aWNsZWlkJykgPT09IGFydGljbGVJZCApIHtcclxuXHJcblx0XHRcdFx0XHRzZXRBY3RpdmVJbWcobGluayk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Ly8g0LrQvdC+0L/QutCwINC40LfQsdGA0LDQvdC90L7QtVxyXG5cclxuXHRcdFx0Y29uc3QgZmF2b3VyaXRlID0gY2FyZFZvbHVtZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmF2b3VyaXRlJyk7XHJcblxyXG5cdFx0XHRmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWJ1eV9fZmF2b3VyaXRlJykuaW5uZXJIVE1MID0gTXVzdGFjaGUucmVuZGVyKHRlbXBsYXRlRmF2b3VyaXRlLCB7IGZhdm91cml0ZSB9KTtcclxuXHJcblx0XHRcdC8vIG92ZXJsYXlcclxuXHJcblx0XHRcdGNvbnN0IG92ZXJsYXkgPSBjYXJkVm9sdW1lLmdldEF0dHJpYnV0ZSgnZGF0YS1vdmVybGF5JyksXHJcblx0XHRcdFx0ICBvdmVybGF5VGl0bGUgPSBjYXJkVm9sdW1lLmdldEF0dHJpYnV0ZSgnZGF0YS1vdmVybGF5LXRpdGxlJyksXHJcblx0XHRcdFx0ICBvdmVybGF5VGV4dCA9IGNhcmRWb2x1bWUuZ2V0QXR0cmlidXRlKCdkYXRhLW92ZXJsYXktdGV4dCcpLFxyXG5cdFx0XHRcdCAgb3ZlcmxheUxvZ2luID0gb3ZlcmxheSA9PT0gJ2xvZ2luJyxcclxuXHRcdFx0XHQgIG92ZXJsYXlOb3QgPSBvdmVybGF5ID09PSAnbm90JyxcclxuXHRcdFx0XHQgIG92ZXJsYXlXaXRoZHJhd24gPSBvdmVybGF5ID09PSAnd2l0aGRyYXduJyxcclxuXHRcdFx0XHQgIGVsT3ZlcmxheSA9IHByb2R1Y3QucXVlcnlTZWxlY3RvcignLm92ZXJsYXktZGlzYWJsZWQnKSxcclxuXHRcdFx0XHQgIGJvYXJkTG9naW4gPSBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZC1sb2dpbicpO1xyXG5cclxuXHRcdFx0aWYgKCBlbE92ZXJsYXkgKSB7XHJcblxyXG5cdFx0XHRcdGVsT3ZlcmxheS5yZW1vdmUoKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggb3ZlcmxheUxvZ2luICkge1xyXG5cclxuXHRcdFx0XHRpZiAoIGJvYXJkTG9naW4gPT09IG51bGwgKSB7XHJcblxyXG5cdFx0XHRcdFx0cHJvZHVjdC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1idXlfX3ByaWNlJykuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmVuZCcsIE11c3RhY2hlLnJlbmRlcih0ZW1wbGF0ZUJvYXJkTG9naW4pKTtcclxuXHJcblx0XHRcdFx0XHRjb25zdCB0b29sdGlwID0gcHJvZHVjdC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQtbG9naW4gLnRvb2x0aXAnKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoIHRvb2x0aXAgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRuZXcgVG9vbHRpcCh0b29sdGlwKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdGlmICggYm9hcmRMb2dpbiApIHtcclxuXHJcblx0XHRcdFx0XHRib2FyZExvZ2luLnJlbW92ZSgpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHByb2R1Y3QucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtZ2FsbGVyeV9fd3JhcCcpLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgTXVzdGFjaGUucmVuZGVyKHRlbXBsYXRlT3ZlcmxheSwgeyBvdmVybGF5LCBvdmVybGF5VGl0bGUsIG92ZXJsYXlUZXh0LCBvdmVybGF5TG9naW4sIG92ZXJsYXlOb3QsIG92ZXJsYXlXaXRoZHJhd24sIGlkLCBhcnRpY2xlSWQgfSkpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8g0YbQtdC90LBcclxuXHJcblx0XHRcdGNvbnN0IHByaWNlID0gY2FyZFZvbHVtZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2UnKSxcclxuXHRcdFx0XHQgIHByaWNlT2xkID0gY2FyZFZvbHVtZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2Utb2xkJyk7XHJcblxyXG5cdFx0XHRmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWJ1eV9fcHJpY2UnKS5pbm5lckhUTUwgPSBNdXN0YWNoZS5yZW5kZXIodGVtcGxhdGVQcmljZSwgeyBwcmljZSwgcHJpY2VPbGQgfSk7XHJcblxyXG5cdFx0XHQvLyDQutC90L7Qv9C60LAg0LrRg9C/0LjRgtGMXHJcblxyXG5cdFx0XHRjb25zdCBidXkgPSBjYXJkVm9sdW1lLmdldEF0dHJpYnV0ZSgnZGF0YS1idXknKSxcclxuXHRcdFx0XHQgIGJ1eUNhcnQgPSBidXkgPT09ICdpbi1jYXJ0JyxcclxuXHRcdFx0XHQgIGJ1eURpc2FibGVkID0gYnV5ID09PSAnZGlzYWJsZWQnLFxyXG5cdFx0XHRcdCAgYnV5QnRuID0gYnV5ID09PSBudWxsIHx8IGJ1eURpc2FibGVkLFxyXG5cdFx0XHRcdCAgYnRuTG9naW4gPSBvdmVybGF5TG9naW47XHJcblxyXG5cdFx0XHRpZiAoIGJ0bkxvZ2luICkge1xyXG5cclxuXHRcdFx0XHRmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWJ1eV9fc3VibWl0JykuaW5uZXJIVE1MID0gTXVzdGFjaGUucmVuZGVyKHRlbXBsYXRlRm9vdCwgeyBidG5Mb2dpbiB9KTtcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdGZvcm0ucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtYnV5X19zdWJtaXQnKS5pbm5lckhUTUwgPSBNdXN0YWNoZS5yZW5kZXIodGVtcGxhdGVGb290LCB7IGJ1eUJ0biwgYnV5RGlzYWJsZWQsIGJ1eUNhcnQgfSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBhdmFpbGFiaWxpdHlcclxuXHJcblx0XHRcdGZvcm0ucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtYnV5X19hdmFpbGFiaWxpdHknKS5pbm5lckhUTUwgPSBNdXN0YWNoZS5yZW5kZXIodGVtcGxhdGVBdmFpbGFiaWxpdHksIHsgYXZhaWxhYmlsaXR5OiAhb3ZlcmxheU5vdCB9KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0Ly8g0LjQt9C80LXQvdC40YLRjCDQvtCx0YrRkdC8XHJcblx0XHRcdGNvbnN0IGNhcmRWb2x1bWUgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnByb2R1Y3QtYnV5X192b2x1bWUtaW5wdXQnKTtcclxuXHJcblx0XHRcdGlmIChjYXJkVm9sdW1lKSB7XHJcblxyXG5cdFx0XHRcdHZvbHVtZUNoYW5nZShjYXJkVm9sdW1lKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vINC40LfQvNC10L3QuNGC0Ywg0L7QsdGK0ZHQvCDQsiDQvNC+0LHQuNC70YzQvdC+0LxcclxuXHRcdFx0Y29uc3QgY2FyZFZvbHVtZU1vYmlsZSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcucHJvZHVjdC1idXlfX3ZvbHVtZS1zZWxlY3QnKTtcclxuXHJcblx0XHRcdGlmIChjYXJkVm9sdW1lTW9iaWxlKSB7XHJcblxyXG5cdFx0XHRcdGNvbnN0IHZhbHVlID0gY2FyZFZvbHVtZU1vYmlsZS52YWx1ZSxcclxuXHRcdFx0XHRcdCAgY2FyZCA9IGNhcmRWb2x1bWVNb2JpbGUuY2xvc2VzdCgnLnByb2R1Y3QtYnV5JyksXHJcblx0XHRcdFx0XHQgIGlucHV0QnRuID0gY2FyZC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdC1idXlfX3ZvbHVtZS1pbnB1dCcpO1xyXG5cclxuXHRcdFx0XHRbLi4uaW5wdXRCdG5dLmZvckVhY2goIGVsID0+IHtcclxuXHJcblx0XHRcdFx0XHRpZiAoIGVsLmdldEF0dHJpYnV0ZSgndmFsdWUnKSA9PT0gdmFsdWUgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRlbC5jaGVja2VkID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0XHRcdHZvbHVtZUNoYW5nZShlbCk7XHJcblxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRcdGVsLmNoZWNrZWQgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vINCf0YDQvtGC0L7QutC+0LtcclxuXHJcblx0XHRjb25zdCBmb3JtU2V0ID0gcHJvZHVjdC5xdWVyeVNlbGVjdG9yQWxsKCcucHJldmlldy1jYXJkX19mb3JtLXNldCcpO1xyXG5cclxuXHRcdGlmICggZm9ybVNldC5sZW5ndGggPiAwICkge1xyXG5cclxuXHRcdFx0Y29uc3QgdGVtcGxhdGVBZGRNb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2R1Y3Qtc2V0LWFkZG1vZGUtdGVtcGxhdGUnKS5pbm5lckhUTUw7XHJcblxyXG5cdFx0XHRbLi4uZm9ybVNldF0uZm9yRWFjaCggZm9ybSA9PiB7XHJcblxyXG5cdFx0XHRcdGNvbnN0IG1vZGUgPSBmb3JtLmVsZW1lbnRzLm1vZGUsXHJcblx0XHRcdFx0XHQgIGJ0bldyYXAgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aWV3LWNhcmRfX2Zvcm0tc2V0LWJ0bi1hZGQnKTtcclxuXHJcblx0XHRcdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCfQkiDRjdGC0L7QuSDRh9Cw0YHRgtC4INC90LjRh9C10LPQviDQvdC1INC00LXQu9Cw0LssINC60YDQvtC80LUg0YHQvNC10L3RiyDQutC90L7Qv9C60LguINCc0L7Qs9GDINGD0LHRgNCw0YLRjCDQvtCx0YDQsNCx0L7RgtGH0LjQuiDQuNC70Lgg0L3QsNC/0LjRgdCw0YLRjCDRh9GC0L4g0L3QtdC+0LHRhdC+0LTQuNC80L46INC/0LXRgNC10LrQu9GO0YfQtdC90LjQtSDQutC90L7Qv9C+0Log0Lgg0YIu0L8uJyk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBtb2RlLnZhbHVlID09PSAnYWRkJyApIHsgLy8g0YLRg9GCINC90LDQtNC+INGB0LzQvtGC0YDQtdGC0YwsINGH0YLQviDQstC10YDQvdGD0LvQuDogYWRkIHwgcmVtb3ZlXHJcblxyXG5cdFx0XHRcdFx0XHRtb2RlLnZhbHVlID0gJ3JlbW92ZSc7XHJcblxyXG5cdFx0XHRcdFx0XHRidG5XcmFwLmlubmVySFRNTCA9IE11c3RhY2hlLnJlbmRlcih0ZW1wbGF0ZUFkZE1vZGUsIHsgcmVtb3ZlIDogdHJ1ZSB9KTtcclxuXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdFx0bW9kZS52YWx1ZSA9ICdhZGQnO1xyXG5cclxuXHRcdFx0XHRcdFx0YnRuV3JhcC5pbm5lckhUTUwgPSBNdXN0YWNoZS5yZW5kZXIodGVtcGxhdGVBZGRNb2RlLCB7IGFkZCA6IHRydWUgfSk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHQvLyBzZWxlY3Qgdm9sdW1lXHJcblxyXG5cdFx0Y29uc3QgYnRuc1NlbGVjdCA9IHByb2R1Y3QucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3QtYnV5X19zZWxlY3QtYnRuJyk7XHJcblx0XHRjb25zdCBidG5zU2VsZWN0VG9nZ2xlID0gcHJvZHVjdC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1idXlfX3NlbGVjdC1idG4tLW9wZW4nKTtcclxuXHJcblx0XHRpZiAoIGJ0bnNTZWxlY3RUb2dnbGUgKSB7XHJcblxyXG5cdFx0XHRjb25zdCBmb3JtID0gYnRuc1NlbGVjdFRvZ2dsZS5jbG9zZXN0KCcucHJvZHVjdC1idXknKSxcclxuXHRcdFx0XHQgIHRlbXBsYXRlUHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpY2UtdGVtcGxhdGUnKS5pbm5lckhUTUw7XHJcblxyXG5cdFx0XHRbLi4uYnRuc1NlbGVjdF0uZm9yRWFjaCggYnRuID0+IHtcclxuXHJcblx0XHRcdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdGlmICggYnRuID09PSBidG5zU2VsZWN0VG9nZ2xlICkge1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8g0LrQvdC+0L/QutCwINC+0YLQutGA0YvRgtC40Y9cclxuXHJcblx0XHRcdFx0XHRcdGJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdpcy1vcGVuJyk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0XHQvLyDQstGL0L/QsNC00LDRiNC60LBcclxuXHJcblx0XHRcdFx0XHRcdGJ0bnNTZWxlY3RUb2dnbGUuY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpO1xyXG5cclxuXHRcdFx0XHRcdFx0Wy4uLmJ0bnNTZWxlY3RdLmZvckVhY2goIF9idG4gPT4ge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAoIF9idG4gPT09IGJ0biApIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRfYnRuLmNsYXNzTGlzdC5hZGQoJ2lzLWN1cnJlbnQnKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRmb3JtLmVsZW1lbnRzLmlkLnZhbHVlID0gYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGJ0bnNTZWxlY3RUb2dnbGUucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtYnV5X19zZWxlY3QtaW1nIGltZycpLnNyYyA9IGJ0bi5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1idXlfX3NlbGVjdC1pbWcgaW1nJykuc3JjO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGJ0bnNTZWxlY3RUb2dnbGUucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtYnV5X19zZWxlY3QtbmFtZScpLnRleHRDb250ZW50ID0gYnRuLnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWJ1eV9fc2VsZWN0LW5hbWUnKS50ZXh0Q29udGVudDtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRjb25zdCBwcmljZSA9IGJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2UnKSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICBwcmljZU9sZCA9IGJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2Utb2xkJyk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0Zm9ybS5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1idXlfX3ByaWNlJykuaW5uZXJIVE1MID0gTXVzdGFjaGUucmVuZGVyKHRlbXBsYXRlUHJpY2UsIHsgcHJpY2UsIHByaWNlT2xkIH0pO1xyXG5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0ZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0X2J0bi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1jdXJyZW50Jyk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0XHRpZiAoIGV2ZW50LnRhcmdldC5jbG9zZXN0KCcucHJvZHVjdC1idXlfX3NlbGVjdCcpID09PSBudWxsICkge1xyXG5cclxuXHRcdFx0XHRcdGJ0bnNTZWxlY3RUb2dnbGUuY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0JykpOyIsIiggKCk9PiB7XHJcblxyXG5cdGNvbnN0IHJlYWRtb3JlVG9nZ2xlID0gYmxvY2sgPT4ge1xyXG5cclxuXHRcdGNvbnN0IGJ0biA9IGJsb2NrLnF1ZXJ5U2VsZWN0b3IoJy5yZWFkbW9yZS10ZXh0X19idG4nKSxcclxuXHRcdFx0ICB0ZXh0Q2xvc2UgPSBidG4udGV4dENvbnRlbnQ7XHJcblxyXG5cdFx0Y29uc3QgdG9nZ2xlID0gKCkgPT4ge1xyXG5cclxuXHRcdFx0aWYgKCBibG9jay5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLW9wZW4nKSApIHtcclxuXHJcblx0XHRcdFx0YmxvY2suY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpO1xyXG5cdFx0XHRcdGJ0bi50ZXh0Q29udGVudCA9IHRleHRDbG9zZTtcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdGJsb2NrLmNsYXNzTGlzdC5hZGQoJ2lzLW9wZW4nKTtcclxuXHRcdFx0XHRidG4udGV4dENvbnRlbnQgPSBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLWFsdCcpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGUpO1xyXG5cclxuXHR9O1xyXG5cclxuXHQoIGJsb2NrcyA9PiB7XHJcblxyXG5cdFx0aWYoYmxvY2tzLmxlbmd0aCkge1xyXG5cclxuXHRcdFx0Wy4uLmJsb2Nrc10uZm9yRWFjaCggYmxvY2sgPT4gcmVhZG1vcmVUb2dnbGUoYmxvY2spICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVhZG1vcmUtdGV4dCcpKTtcclxuXHJcblx0Ly8gY29udGVudFxyXG5cclxuXHQoIGJsb2NrcyA9PiB7XHJcblxyXG5cdFx0aWYoYmxvY2tzLmxlbmd0aCkge1xyXG5cclxuXHRcdFx0Y29uc3QgaW5pdCA9ICgpPT4ge1xyXG5cclxuXHRcdFx0XHRjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZWFkbW9yZS10ZW1wbGF0ZScpLmlubmVySFRNTDtcclxuXHJcblx0XHRcdFx0Wy4uLmJsb2Nrc10uZm9yRWFjaCggYmxvY2sgPT4ge1xyXG5cclxuXHRcdFx0XHRcdC8vIGNvbnRpbnVlXHJcblxyXG5cdFx0XHRcdFx0aWYgKCBibG9jay5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLXJlYWRtb3JlLW9mZicpICkge1xyXG5cclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvLyDQv9C10YDQtdC80LXRidCw0LXQvCDQsiDQutC+0L3QtdGGXHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgbWFpbiA9IGJsb2NrLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdtYWluJykgPyBibG9jay5wYXJlbnROb2RlIDogZmFsc2U7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBtYWluICkge1xyXG5cclxuXHRcdFx0XHRcdFx0bWFpbi5hcHBlbmQoYmxvY2spO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvLyByZWFkbW9yZVxyXG5cclxuXHRcdFx0XHRcdGxldCBhcHBlbmQgPSBudWxsO1xyXG5cclxuXHRcdFx0XHRcdGNvbnN0IGhyID0gYmxvY2sucXVlcnlTZWxlY3RvcignLnJlYWRtb3JlLWhyJyk7XHJcblxyXG5cdFx0XHRcdFx0Wy4uLmJsb2NrLmNoaWxkcmVuXS5mb3JFYWNoKCBlbCA9PiB7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoIGVsLmNsYXNzTGlzdC5jb250YWlucygncmVhZG1vcmUtaHInKSB8fCAoICFociAmJiAoIGVsLnRhZ05hbWUgPT09ICdIMicgfHwgZWwudGFnTmFtZSA9PT0gJ0gzJykgKSApIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZWwudGFnTmFtZSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmICggYXBwZW5kID09PSBudWxsICkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGJsb2NrLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGVtcGxhdGUpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGFwcGVuZCA9IGJsb2NrLnF1ZXJ5U2VsZWN0b3IoJy5yZWFkbW9yZS10ZXh0X19ib2R5Jyk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdGlmKCBhcHBlbmQgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGFwcGVuZC5hcHBlbmQoZWwpO1xyXG5cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdGlmICggaHIgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRoci5yZW1vdmUoKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBhcHBlbmQgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRyZWFkbW9yZVRvZ2dsZShibG9jay5xdWVyeVNlbGVjdG9yKCcucmVhZG1vcmUtdGV4dCcpKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c2V0VGltZW91dCggKCkgPT4gaW5pdCgpLCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmFzdExvYWRTY3JpcHQnKSA/IDAgOiAxMDAwMCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29udGVudCcpKTtcclxuXHJcbn0pKCk7IiwiKCByZXZpZXcgPT4ge1xyXG5cclxuXHRpZiggcmV2aWV3ICkge1xyXG5cclxuXHRcdC8vIHN1YlxyXG5cclxuXHRcdGNvbnN0IGJ0blRvZ2dsZVN1YiA9IHJldmlldy5xdWVyeVNlbGVjdG9yQWxsKCcucmV2aWV3X190b2dnbGUtc3ViJyk7XHJcblxyXG5cdFx0Wy4uLmJ0blRvZ2dsZVN1Yl0uZm9yRWFjaCggYnRuID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IGdyb3VwID0gYnRuLmNsb3Nlc3QoJy5yZXZpZXdfX2dyb3VwJyksXHJcblx0XHRcdFx0ICB0ZXh0RGVmYXVsdCA9IGJ0bi5pbm5lckhUTUw7XHJcblxyXG5cdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdGlmICggZ3JvdXAuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1vcGVuJykgKSB7XHJcblxyXG5cdFx0XHRcdFx0Z3JvdXAuY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpO1xyXG5cdFx0XHRcdFx0YnRuLmlubmVySFRNTCA9IHRleHREZWZhdWx0O1xyXG5cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdGdyb3VwLmNsYXNzTGlzdC5hZGQoJ2lzLW9wZW4nKTtcclxuXHRcdFx0XHRcdGJ0bi50ZXh0Q29udGVudCA9IGJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtYWx0Jyk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmV2aWV3JykpOyIsIndpbmRvdy5zZWxlY3RzID0gc2VsZWN0ID0+IHtcclxuXHJcblx0aWYoc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX2xpc3QnKSkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cdGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdC10ZW1wbGF0ZScpLmlubmVySFRNTCxcclxuXHRcdCAgZm9ybSA9IHNlbGVjdC5jbG9zZXN0KCdmb3JtJyksXHJcblx0XHQgIGNvbnRyb2wgPSBzZWxlY3QucXVlcnlTZWxlY3Rvcignc2VsZWN0JyksXHJcblx0XHQgIG9wdGlvbiA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKSxcclxuXHRcdCAgZmlsdGVyID0gc2VsZWN0LmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0LS1maWx0ZXInKSxcclxuXHRcdCAgbGlzdCA9IFtdO1xyXG5cclxuXHRjb25zdCB2YWx1ZURlZmF1bHQgPSBjb250cm9sLnF1ZXJ5U2VsZWN0b3IoJ1t2YWx1ZT1cIicgKyBjb250cm9sLnZhbHVlICsgJ1wiXScpLnRleHRDb250ZW50O1xyXG5cclxuXHRpZiggY29udHJvbC5kaXNhYmxlZCB8fCBjb250cm9sLnZhbHVlID09PSAnbm9uZScgfHwgY29udHJvbC52YWx1ZSA9PT0gJycgKXtcclxuXHJcblx0XHRzZWxlY3QuY2xhc3NMaXN0LmFkZCgnaXMtZGVmYXVsdCcpO1xyXG5cclxuXHR9XHJcblxyXG5cdFsuLi5vcHRpb25dLmZvckVhY2goIGVsID0+IHtcclxuXHJcblx0XHRpZiAoIGVsLnZhbHVlID09PSAnbm9uZScgfHwgZWwudmFsdWUgPT09ICcnICkge1xyXG5cclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRsaXN0LnB1c2goe1xyXG5cdFx0XHRuYW1lICA6IGNvbnRyb2wubmFtZSxcclxuXHRcdFx0bGFiZWwgOiBlbC50ZXh0Q29udGVudCxcclxuXHRcdFx0dmFsdWUgOiBlbC52YWx1ZSxcclxuXHRcdFx0Y2hlY2tlZCA6IGNvbnRyb2wudmFsdWUgPT09IGVsLnZhbHVlXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG5cdHNlbGVjdC5pbm5lckhUTUwgPSBNdXN0YWNoZS5yZW5kZXIodGVtcGxhdGUsIHsgdmFsdWVEZWZhdWx0LCBsaXN0LCBmaWx0ZXIgfSk7XHJcblxyXG5cdGNvbnN0IGZpZWxkc2V0ID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX2xpc3QnKSxcclxuXHRcdCAgdmFsdWVUZXh0ID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX3ZhbHVlLWlubmVyJyk7XHJcblxyXG5cdGZpZWxkc2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRpZiggZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09ICdJTlBVVCcgKSB7XHJcblxyXG5cdFx0XHRjb25zdCBpdGVtID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGU7XHJcblxyXG5cdFx0XHR2YWx1ZVRleHQudGV4dENvbnRlbnQgPSBpdGVtLnRleHRDb250ZW50O1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG5cdGZvcm0gJiYgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwicmVzZXRcIiwgKCkgPT4ge1xyXG5cclxuXHRcdHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdpcy1kZWZhdWx0Jyk7XHJcblx0XHR2YWx1ZVRleHQudGV4dENvbnRlbnQgPSB2YWx1ZURlZmF1bHQ7XHJcblxyXG5cdH0pO1xyXG5cclxuXHRpZiAoIGZpbHRlciApIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdFx0Y29uc3QgaW5wdXRGaWx0ZXIgPSBzZWxlY3QucXVlcnlTZWxlY3RvcignLnNlbGVjdF9fZmlsdGVyJyk7XHJcblxyXG5cdFx0aW5wdXRGaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCB2YWx1ZSA9IGlucHV0RmlsdGVyLnZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcblxyXG5cdFx0XHRpZih2YWx1ZS5sZW5ndGggPiAwKSB7XHJcblxyXG5cdFx0XHRcdGNvbnN0IGxpc3QgPSBmaWVsZHNldC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0X19saXN0LWl0ZW0nKTtcclxuXHJcblx0XHRcdFx0Wy4uLmxpc3RdLmZvckVhY2goIG8gPT4ge1xyXG5cclxuXHRcdFx0XHRcdGNvbnN0IHRleHQgPSBvLnRleHRDb250ZW50LnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuXHRcdFx0XHRcdG8uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScsIHRleHQuaW5jbHVkZXModmFsdWUpKTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdGlmKCBsaXN0Lmxlbmd0aCA9PT0gZmllbGRzZXQucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdF9fbGlzdC1pdGVtLmhpZGUnKS5sZW5ndGggKSB7XHJcblxyXG5cdFx0XHRcdFx0c2VsZWN0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdC0tZmlsdGVyLWVtcHR5Jyk7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0c2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdC0tZmlsdGVyLWVtcHR5Jyk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFsuLi5saXN0XS5mb3JFYWNoKCBvID0+IG8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpICk7XHJcblx0XHRcdFx0c2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdC0tZmlsdGVyLWVtcHR5Jyk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn07XHJcblxyXG4oIGl0ZW1zID0+IHtcclxuXHJcblx0aWYoaXRlbXMubGVuZ3RoKSB7XHJcblxyXG5cdFx0Wy4uLml0ZW1zXS5mb3JFYWNoKCBzZWxlY3QgPT4gd2luZG93LnNlbGVjdHMoc2VsZWN0KSk7XHJcblxyXG5cdH1cclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcblxyXG5cdFx0Y29uc3QgaXNTZWxlY3QgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnNlbGVjdCcpO1xyXG5cclxuXHRcdFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0JyldLmZvckVhY2goIHNlbGVjdCA9PiB7XHJcblxyXG5cdFx0XHRpZiAoIHNlbGVjdCA9PT0gaXNTZWxlY3QgKSB7XHJcblxyXG5cdFx0XHRcdGlmICggZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5zZWxlY3RfX3ZhbHVlJykgKSB7XHJcblxyXG5cdFx0XHRcdFx0c2VsZWN0LmNsYXNzTGlzdC50b2dnbGUoJ2lzLW9wZW4nKTtcclxuXHJcblx0XHRcdFx0fSBlbHNlIGlmICggZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09ICdJTlBVVCcgKSB7XHJcblxyXG5cdFx0XHRcdFx0c2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9wZW4nKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0c2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9wZW4nKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0JykpOyIsIiggc3dpcGVyQ29udGFpbmVyID0+IHtcclxuXHJcblx0aWYoIXN3aXBlckNvbnRhaW5lci5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Wy4uLnN3aXBlckNvbnRhaW5lcl0uZm9yRWFjaCggc3dpcGUgPT4ge1xyXG5cclxuXHRcdGxldCBteVN3aXBlID0gbnVsbCxcclxuXHRcdFx0dG9nZ2xlU3dpcGUgPSBudWxsLFxyXG5cdFx0XHRyZXNldFN3aXBlID0gbnVsbDtcclxuXHJcblx0XHRjb25zdCBzd2lwZU5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG5cdFx0XHQgIHN3aXBlQnRucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG5cdFx0XHQgIHN3aXBlTmV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpLFxyXG5cdFx0XHQgIHN3aXBlUHJldiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpLFxyXG5cdFx0XHQgIGl0ZW1zID0gc3dpcGUucXVlcnlTZWxlY3RvckFsbCgnLnN3aXBlci1zbGlkZScpLFxyXG5cdFx0XHQgIGNvdW50ID0gaXRlbXMubGVuZ3RoLFxyXG5cdFx0XHQgIGJpbGxib2FyZCA9IHN3aXBlLmNsYXNzTGlzdC5jb250YWlucygnc3dpcGVyLWNvbnRhaW5lci0tYmlsbGJvYXJkJyksXHJcblx0XHRcdCAgbmV3cyA9IHN3aXBlLmNsYXNzTGlzdC5jb250YWlucygnc3dpcGVyLWNvbnRhaW5lci0tbmV3cycpLFxyXG5cdFx0XHQgIHByZXZpZXcgPSBzd2lwZS5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXBlci1jb250YWluZXItLXByZXZpZXcnKSxcclxuXHRcdFx0ICBwcm9kdWN0ID0gc3dpcGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzd2lwZXItY29udGFpbmVyLS1wcm9kdWN0JyksXHJcblx0XHRcdCAgY2VydGlmaWNhdGVzID0gc3dpcGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzd2lwZXItY29udGFpbmVyLS1jZXJ0aWZpY2F0ZXMnKSxcclxuXHRcdFx0ICBjb25zdWx0YXRpb25zID0gc3dpcGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzd2lwZXItY29udGFpbmVyLS1jb25zdWx0YXRpb25zJyksXHJcblx0XHRcdCAgcHJvZHVjdEFydGljbGUgPSBzd2lwZS5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXBlci1jb250YWluZXItLXByb2R1Y3QtYXJ0aWNsZScpO1xyXG5cclxuXHRcdHN3aXBlTmF2LmNsYXNzTmFtZSA9ICdzd2lwZXItcGFnaW5hdGlvbic7XHJcblxyXG5cdFx0c3dpcGVCdG5zLmNsYXNzTmFtZSA9ICdzd2lwZXItbmF2aWdhdGlvbic7XHJcblx0XHRzd2lwZVByZXYuY2xhc3NOYW1lID0gJ3N3aXBlci1idXR0b24tcHJldiBidXR0b24nO1xyXG5cdFx0c3dpcGVOZXh0LmNsYXNzTmFtZSA9ICdzd2lwZXItYnV0dG9uLW5leHQgYnV0dG9uJztcclxuXHJcblx0XHRzd2lwZVByZXYuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywnUHJldmlvdXMgc2xpZGUnKTtcclxuXHRcdHN3aXBlTmV4dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCdOZXh0IHNsaWRlJyk7XHJcblxyXG5cdFx0c3dpcGVQcmV2LmlubmVySFRNTCA9ICc8c3ZnIHdpZHRoPVwiNDBcIiBoZWlnaHQ9XCI0MFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dXNlIHhsaW5rOmhyZWY9XCIjc3ZnLWFycm93LWNoZXZyb24tbGVmdFwiLz48L3N2Zz4nO1xyXG5cdFx0c3dpcGVOZXh0LmlubmVySFRNTCA9ICc8c3ZnIHdpZHRoPVwiNDBcIiBoZWlnaHQ9XCI0MFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dXNlIHhsaW5rOmhyZWY9XCIjc3ZnLWFycm93LWNoZXZyb24tcmlnaHRcIi8+PC9zdmc+JztcclxuXHJcblx0XHRzd2lwZUJ0bnMuYXBwZW5kKHN3aXBlUHJldik7XHJcblx0XHRzd2lwZUJ0bnMuYXBwZW5kKHN3aXBlTmV4dCk7XHJcblxyXG5cdFx0c3dpcGUuYXBwZW5kKHN3aXBlQnRucyk7XHJcblx0XHRzd2lwZS5hcHBlbmQoc3dpcGVOYXYpO1xyXG5cclxuXHRcdHJlc2V0U3dpcGUgPSAoKSA9PiB7XHJcblxyXG5cdFx0XHRpZihteVN3aXBlKSB7XHJcblxyXG5cdFx0XHRcdG15U3dpcGUuZGVzdHJveShmYWxzZSx0cnVlKTtcclxuXHRcdFx0XHRteVN3aXBlID0gdW5kZWZpbmVkO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c3dpcGVOYXYuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cdFx0XHRzd2lwZUJ0bnMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuXHRcdFx0aWYgKCBzd2lwZS5jbG9zZXN0KCcuc3dpcGVyLWNvbnRhaW5lci1zdHlsZScpICkge1xyXG5cclxuXHRcdFx0XHRzd2lwZS5jbG9zZXN0KCcuc3dpcGVyLWNvbnRhaW5lci1zdHlsZScpLmNsYXNzTGlzdC5yZW1vdmUoJ3N3aXBlci1jb250YWluZXItc3R5bGUnKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKG5ld3MpIHtcclxuXHJcblx0XHRcdHN3aXBlLnBhcmVudE5vZGUuYXBwZW5kKHN3aXBlQnRucyk7XHJcblx0XHRcdHN3aXBlLnBhcmVudE5vZGUuYXBwZW5kKHN3aXBlTmF2KTtcclxuXHJcblx0XHRcdHRvZ2dsZVN3aXBlID0gKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRyZXNldFN3aXBlKCk7XHJcblxyXG5cdFx0XHRcdGlmICggd2luZG93LmlubmVyV2lkdGggPj0gMTI1MCAmJiBjb3VudCA8IDUgKSB7XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHN3aXBlTmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHRcdFx0XHRzd2lwZUJ0bnMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHRzd2lwZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnc3dpcGVyLWNvbnRhaW5lci1zdHlsZScpO1xyXG5cclxuXHRcdFx0XHRjb25zdCBnYXAgPSB3aW5kb3cuaW5uZXJXaWR0aCA8IDEyNTAgJiYgd2luZG93LmlubmVyV2lkdGggPiA3NjcgPyAwIDogMjQ7XHJcblxyXG5cdFx0XHRcdG15U3dpcGUgPSBuZXcgU3dpcGVyKHN3aXBlLCB7XHJcblx0XHRcdFx0XHRsb29wOiB0cnVlLFxyXG5cdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiBnYXAsXHJcblx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcblx0XHRcdFx0XHRzbGlkZXNQZXJHcm91cDogMSxcclxuXHRcdFx0XHRcdG5hdmlnYXRpb246IHtcclxuXHRcdFx0XHRcdFx0bmV4dEVsOiBzd2lwZU5leHQsXHJcblx0XHRcdFx0XHRcdHByZXZFbDogc3dpcGVQcmV2XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0cGFnaW5hdGlvbjoge1xyXG5cdFx0XHRcdFx0XHRlbDogc3dpcGVOYXYsXHJcblx0XHRcdFx0XHRcdGNsaWNrYWJsZTogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0YnVsbGV0Q2xhc3M6ICdidXR0b24nLFxyXG5cdFx0XHRcdFx0XHRidWxsZXRBY3RpdmVDbGFzczogJ2lzLWFjdGl2ZSdcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHN3aXBlLmFkZEV2ZW50TGlzdGVuZXIoJ3N3aXBlclJlc2l6ZScsIHRvZ2dsZVN3aXBlKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGNvbnN1bHRhdGlvbnMpIHtcclxuXHJcblx0XHRcdHN3aXBlLnBhcmVudE5vZGUuYXBwZW5kKHN3aXBlQnRucyk7XHJcblx0XHRcdHN3aXBlLnBhcmVudE5vZGUuYXBwZW5kKHN3aXBlTmF2KTtcclxuXHJcblx0XHRcdHRvZ2dsZVN3aXBlID0gKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRyZXNldFN3aXBlKCk7XHJcblxyXG5cdFx0XHRcdGlmICggd2luZG93LmlubmVyV2lkdGggPj0gMTI1MCAmJiBjb3VudCA8IDMgKSB7XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHN3aXBlTmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHRcdFx0XHRzd2lwZUJ0bnMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHRzd2lwZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnc3dpcGVyLWNvbnRhaW5lci1zdHlsZScpO1xyXG5cclxuXHRcdFx0XHRjb25zdCBnYXAgPSB3aW5kb3cuaW5uZXJXaWR0aCA8IDEyNTAgPyAxNiA6IDQ4O1xyXG5cclxuXHRcdFx0XHRteVN3aXBlID0gbmV3IFN3aXBlcihzd2lwZSwge1xyXG5cdFx0XHRcdFx0bG9vcDogdHJ1ZSxcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogZ2FwLFxyXG5cdFx0XHRcdFx0c2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG5cdFx0XHRcdFx0c2xpZGVzUGVyR3JvdXA6IDEsXHJcblx0XHRcdFx0XHRuYXZpZ2F0aW9uOiB7XHJcblx0XHRcdFx0XHRcdG5leHRFbDogc3dpcGVOZXh0LFxyXG5cdFx0XHRcdFx0XHRwcmV2RWw6IHN3aXBlUHJldlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHBhZ2luYXRpb246IHtcclxuXHRcdFx0XHRcdFx0ZWw6IHN3aXBlTmF2LFxyXG5cdFx0XHRcdFx0XHRjbGlja2FibGU6IHRydWUsXHJcblx0XHRcdFx0XHRcdGJ1bGxldENsYXNzOiAnYnV0dG9uJyxcclxuXHRcdFx0XHRcdFx0YnVsbGV0QWN0aXZlQ2xhc3M6ICdpcy1hY3RpdmUnXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRzd2lwZS5hZGRFdmVudExpc3RlbmVyKCdzd2lwZXJSZXNpemUnLCB0b2dnbGVTd2lwZSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChjZXJ0aWZpY2F0ZXMpIHtcclxuXHJcblx0XHRcdHN3aXBlLnBhcmVudE5vZGUuYXBwZW5kKHN3aXBlQnRucyk7XHJcblx0XHRcdHN3aXBlLnBhcmVudE5vZGUuYXBwZW5kKHN3aXBlTmF2KTtcclxuXHJcblx0XHRcdHRvZ2dsZVN3aXBlID0gKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRyZXNldFN3aXBlKCk7XHJcblxyXG5cdFx0XHRcdGlmICggd2luZG93LmlubmVyV2lkdGggPj0gMTI1MCAmJiBjb3VudCA8IDQgKSB7XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHN3aXBlTmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHRcdFx0XHRzd2lwZUJ0bnMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHRzd2lwZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnc3dpcGVyLWNvbnRhaW5lci1zdHlsZScpO1xyXG5cclxuXHRcdFx0XHRjb25zdCBnYXAgPSB3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCA/IDAgOiAyNDtcclxuXHJcblx0XHRcdFx0bXlTd2lwZSA9IG5ldyBTd2lwZXIoc3dpcGUsIHtcclxuXHRcdFx0XHRcdGxvb3A6IHRydWUsXHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IGdhcCxcclxuXHRcdFx0XHRcdHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuXHRcdFx0XHRcdHNsaWRlc1Blckdyb3VwOiAxLFxyXG5cdFx0XHRcdFx0bmF2aWdhdGlvbjoge1xyXG5cdFx0XHRcdFx0XHRuZXh0RWw6IHN3aXBlTmV4dCxcclxuXHRcdFx0XHRcdFx0cHJldkVsOiBzd2lwZVByZXZcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRwYWdpbmF0aW9uOiB7XHJcblx0XHRcdFx0XHRcdGVsOiBzd2lwZU5hdixcclxuXHRcdFx0XHRcdFx0Y2xpY2thYmxlOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRidWxsZXRDbGFzczogJ2J1dHRvbicsXHJcblx0XHRcdFx0XHRcdGJ1bGxldEFjdGl2ZUNsYXNzOiAnaXMtYWN0aXZlJ1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c3dpcGUuYWRkRXZlbnRMaXN0ZW5lcignc3dpcGVyUmVzaXplJywgdG9nZ2xlU3dpcGUpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZiAocHJvZHVjdEFydGljbGUpIHtcclxuXHJcblx0XHRcdHN3aXBlLnBhcmVudE5vZGUuYXBwZW5kKHN3aXBlQnRucyk7XHJcblx0XHRcdHN3aXBlLnBhcmVudE5vZGUuYXBwZW5kKHN3aXBlTmF2KTtcclxuXHJcblx0XHRcdHRvZ2dsZVN3aXBlID0gKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRyZXNldFN3aXBlKCk7XHJcblxyXG5cdFx0XHRcdGlmICggd2luZG93LmlubmVyV2lkdGggPj0gMTI1MCAmJiBjb3VudCA8IDQgKSB7XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmICggd2luZG93LmlubmVyV2lkdGggPj0gNzY4ICkge1xyXG5cclxuXHRcdFx0XHRcdHN3aXBlQnRucy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0c3dpcGVOYXYuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHRzd2lwZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnc3dpcGVyLWNvbnRhaW5lci1zdHlsZScpO1xyXG5cclxuXHRcdFx0XHRjb25zdCBjZW50ZXJlZFNsaWRlcyA9IHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4O1xyXG5cclxuXHRcdFx0XHRteVN3aXBlID0gbmV3IFN3aXBlcihzd2lwZSwge1xyXG5cdFx0XHRcdFx0cmV3aW5kOiB0cnVlLFxyXG5cdFx0XHRcdFx0Y2VudGVyZWRTbGlkZXM6IGNlbnRlcmVkU2xpZGVzLFxyXG5cdFx0XHRcdFx0c2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG5cdFx0XHRcdFx0c2xpZGVzUGVyR3JvdXA6IDEsXHJcblx0XHRcdFx0XHRuYXZpZ2F0aW9uOiB7XHJcblx0XHRcdFx0XHRcdG5leHRFbDogc3dpcGVOZXh0LFxyXG5cdFx0XHRcdFx0XHRwcmV2RWw6IHN3aXBlUHJldlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHBhZ2luYXRpb246IHtcclxuXHRcdFx0XHRcdFx0ZWw6IHN3aXBlTmF2LFxyXG5cdFx0XHRcdFx0XHRjbGlja2FibGU6IHRydWUsXHJcblx0XHRcdFx0XHRcdGJ1bGxldENsYXNzOiAnYnV0dG9uJyxcclxuXHRcdFx0XHRcdFx0YnVsbGV0QWN0aXZlQ2xhc3M6ICdpcy1hY3RpdmUnXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRzd2lwZS5hZGRFdmVudExpc3RlbmVyKCdzd2lwZXJSZXNpemUnLCB0b2dnbGVTd2lwZSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChwcmV2aWV3KSB7XHJcblxyXG5cdFx0XHRzd2lwZS5wYXJlbnROb2RlLmFwcGVuZChzd2lwZUJ0bnMpO1xyXG5cdFx0XHRzd2lwZS5wYXJlbnROb2RlLmFwcGVuZChzd2lwZU5hdik7XHJcblxyXG5cdFx0XHR0b2dnbGVTd2lwZSA9ICgpID0+IHtcclxuXHJcblx0XHRcdFx0cmVzZXRTd2lwZSgpO1xyXG5cclxuXHRcdFx0XHRzd2lwZU5hdi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblx0XHRcdFx0c3dpcGVCdG5zLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0c3dpcGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ3N3aXBlci1jb250YWluZXItc3R5bGUnKTtcclxuXHJcblx0XHRcdFx0Y29uc3QgZ2FwID0gd2luZG93LmlubmVyV2lkdGggPCAxMjUwID8gMCA6IDI0O1xyXG5cclxuXHRcdFx0XHRteVN3aXBlID0gbmV3IFN3aXBlcihzd2lwZSwge1xyXG5cdFx0XHRcdFx0cmV3aW5kOiB0cnVlLFxyXG5cdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiBnYXAsXHJcblx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcblx0XHRcdFx0XHRzbGlkZXNQZXJHcm91cDogMSxcclxuLy9cdFx0XHRcdFx0c2xpZGVzUGVyR3JvdXBBdXRvOiB0cnVlLFxyXG5cdFx0XHRcdFx0bmF2aWdhdGlvbjoge1xyXG5cdFx0XHRcdFx0XHRuZXh0RWw6IHN3aXBlTmV4dCxcclxuXHRcdFx0XHRcdFx0cHJldkVsOiBzd2lwZVByZXZcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRwYWdpbmF0aW9uOiB7XHJcblx0XHRcdFx0XHRcdGVsOiBzd2lwZU5hdixcclxuXHRcdFx0XHRcdFx0Y2xpY2thYmxlOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRidWxsZXRDbGFzczogJ2J1dHRvbicsXHJcblx0XHRcdFx0XHRcdGJ1bGxldEFjdGl2ZUNsYXNzOiAnaXMtYWN0aXZlJ1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c3dpcGUuYWRkRXZlbnRMaXN0ZW5lcignc3dpcGVyUmVzaXplJywgdG9nZ2xlU3dpcGUpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoYmlsbGJvYXJkKSB7XHJcblxyXG5cdFx0XHR0b2dnbGVTd2lwZSA9ICgpID0+IHtcclxuXHJcblx0XHRcdFx0cmVzZXRTd2lwZSgpO1xyXG5cclxuXHRcdFx0XHRzd2lwZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ3N3aXBlci1jb250YWluZXItc3R5bGUnKTtcclxuXHJcblx0XHRcdFx0aWYoIHdpbmRvdy5pbm5lcldpZHRoIDwgMTI1MCApIHtcclxuXHJcblx0XHRcdFx0XHRzd2lwZU5hdi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdFx0bXlTd2lwZSA9IG5ldyBTd2lwZXIoc3dpcGUsIHtcclxuXHRcdFx0XHRcdFx0bG9vcDogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0cGFnaW5hdGlvbjoge1xyXG5cdFx0XHRcdFx0XHRcdGVsOiBzd2lwZU5hdixcclxuXHRcdFx0XHRcdFx0XHRjbGlja2FibGU6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0YnVsbGV0Q2xhc3M6ICdidXR0b24nLFxyXG5cdFx0XHRcdFx0XHRcdGJ1bGxldEFjdGl2ZUNsYXNzOiAnaXMtYWN0aXZlJ1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRzd2lwZUJ0bnMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHRcdG15U3dpcGUgPSBuZXcgU3dpcGVyKHN3aXBlLCB7XHJcblx0XHRcdFx0XHRcdGxvb3A6IHRydWUsXHJcblx0XHRcdFx0XHRcdGF1dG9wbGF5OiB7XHJcblx0XHRcdFx0XHRcdFx0ZGVsYXk6IDUwMDBcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0ZWZmZWN0OiAnZmFkZScsXHJcblx0XHRcdFx0XHRcdGZhZGVFZmZlY3Q6IHtcclxuXHRcdFx0XHRcdFx0XHRjcm9zc0ZhZGU6IHRydWVcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0bmF2aWdhdGlvbjoge1xyXG5cdFx0XHRcdFx0XHRcdG5leHRFbDogc3dpcGVOZXh0LFxyXG5cdFx0XHRcdFx0XHRcdHByZXZFbDogc3dpcGVQcmV2XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRzd2lwZS5hZGRFdmVudExpc3RlbmVyKCdzd2lwZXJSZXNpemUnLCB0b2dnbGVTd2lwZSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChwcm9kdWN0KSB7XHJcblxyXG5cdFx0XHRzd2lwZU5hdi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRjb25zdCBnYWxsZXJ5UHJldmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWN0LWdhbGxlcnlfX3ByZXZpZXctbGluaycpO1xyXG5cclxuXHRcdFx0dG9nZ2xlU3dpcGUgPSAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdHRvZ2dsZVN3aXBlID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdHN3aXBlLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnc3dpcGVyLWNvbnRhaW5lci1zdHlsZScpO1xyXG5cclxuXHRcdFx0XHRuZXcgU3dpcGVyKHN3aXBlLCB7XHJcblx0XHRcdFx0XHRsb29wOiB0cnVlLFxyXG5cdFx0XHRcdFx0bmF2aWdhdGlvbjoge1xyXG5cdFx0XHRcdFx0XHRuZXh0RWw6IHN3aXBlTmV4dCxcclxuXHRcdFx0XHRcdFx0cHJldkVsOiBzd2lwZVByZXZcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRvbjoge1xyXG5cdFx0XHRcdFx0XHRzbGlkZUNoYW5nZSA6ICgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRcdFx0Wy4uLmdhbGxlcnlQcmV2aWV3XS5mb3JFYWNoKCAoX2xpbmssaW5kZXgpID0+IF9saW5rLnBhcmVudE5vZGUuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtY3VycmVudCcsIHN3aXBlLnN3aXBlci5yZWFsSW5kZXggPT09IGluZGV4KSApO1xyXG5cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHRzd2lwZS5hZGRFdmVudExpc3RlbmVyKCdzd2lwZXJKc0xvYWQnLCB0b2dnbGVTd2lwZSk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHRsZXQgcmVzaXplVGltZW91dCA9IG51bGwsXHJcblx0XHR3aW5kb3dXaWR0aE9MZCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XHJcblxyXG5cdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4ge1xyXG5cclxuXHRcdFx0aWYgKHJlc2l6ZVRpbWVvdXQgPT09IG51bGwpIHtcclxuXHJcblx0XHRcdFx0cmVzaXplVGltZW91dCA9IHNldFRpbWVvdXQoICgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRyZXNpemVUaW1lb3V0ID0gbnVsbDtcclxuXHJcblx0XHRcdFx0XHRpZih3aW5kb3dXaWR0aE9MZCAhPT0gd2luZG93LmlubmVyV2lkdGgpIHtcclxuXHJcblx0XHRcdFx0XHRcdHdpbmRvd1dpZHRoT0xkID0gd2luZG93LmlubmVyV2lkdGg7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAod2luZG93LlN3aXBlcikge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRbLi4uc3dpcGVyQ29udGFpbmVyXS5mb3JFYWNoKCBzd2lwZSA9PiBzd2lwZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcInN3aXBlclJlc2l6ZVwiKSkgKTtcclxuXHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0sIDEwMDApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcblx0Y29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcblxyXG5cdHNjcmlwdC5zcmMgPSAnL2pzL3N3aXBlci5taW4uanMnO1xyXG5cclxuXHRzY3JpcHQub25sb2FkID0gKCkgPT4gWy4uLnN3aXBlckNvbnRhaW5lcl0uZm9yRWFjaCggc3dpcGUgPT4gc3dpcGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJzd2lwZXJKc0xvYWRcIikpICk7XHJcblxyXG5cdHNldFRpbWVvdXQoICgpID0+IGRvY3VtZW50LmhlYWQuYXBwZW5kKHNjcmlwdCksIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmYXN0TG9hZFNjcmlwdCcpID8gMCA6IDEwMDAwKTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zd2lwZXItY29udGFpbmVyJykpOyIsIiggdGFicyA9PiB7XHJcblxyXG5cdGlmICggdGFicy5sZW5ndGggPiAwICkge1xyXG5cclxuXHRcdFsuLi50YWJzXS5mb3JFYWNoKCB0YWIgPT4ge1xyXG5cclxuXHRcdFx0Y29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKSxcclxuXHRcdFx0XHQgIGFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJzdmdcIik7XHJcblxyXG5cdFx0XHRhcnJvdy5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcInZpZXdCb3hcIiwgXCIwIDAgMjQgMjRcIik7XHJcblx0XHRcdGFycm93LnNldEF0dHJpYnV0ZU5TKG51bGwsIFwid2lkdGhcIiwgMjQpO1xyXG5cdFx0XHRhcnJvdy5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcImhlaWdodFwiLCAyNCk7XHJcblxyXG5cdFx0XHRhcnJvdy5pbm5lckhUTUwgPSAnPHVzZSB4bGluazpocmVmPVwiI3N2Zy1hcnJvdy1jaGV2cm9uLWRvd25cIi8+JztcclxuXHJcblx0XHRcdGNvbnN0IGJ0bnMgPSB0YWIucXVlcnlTZWxlY3RvckFsbCgnLnRhYnNfX2J0bicpLFxyXG5cdFx0XHRcdCAgaXRlbXMgPSB0YWIucXVlcnlTZWxlY3RvckFsbCgnLnRhYnNfX2l0ZW0nKTtcclxuXHJcblx0XHRcdFsuLi5idG5zXS5mb3JFYWNoKCAoYnRuLGluZGV4KSA9PiB7XHJcblxyXG5cdFx0XHRcdGJ0bi5hcHBlbmRDaGlsZChhcnJvdy5jbG9uZU5vZGUodHJ1ZSkpO1xyXG5cclxuXHRcdFx0XHRjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG5cdFx0XHRcdG9wdGlvbi52YWx1ZSA9IGluZGV4O1xyXG5cdFx0XHRcdG9wdGlvbi50ZXh0Q29udGVudCA9IGJ0bi50ZXh0Q29udGVudDtcclxuXHRcdFx0XHRzZWxlY3QuYXBwZW5kKG9wdGlvbik7XHJcblxyXG5cdFx0XHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRbLi4uYnRuc10uZm9yRWFjaCggKF9idG4sX2luZGV4KSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0XHRfYnRuLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScsIF9idG4gPT09IGJ0bik7XHJcblx0XHRcdFx0XHRcdGl0ZW1zW19pbmRleF0uY2xhc3NMaXN0LnRvZ2dsZSgndmlzdWFsbHloaWRkZW4nLCBfYnRuICE9PSBidG4pO1xyXG5cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Wy4uLml0ZW1zXS5mb3JFYWNoKCBpdGVtID0+IHtcclxuXHJcblx0XHRcdFx0aXRlbS5hZGRFdmVudExpc3RlbmVyKCdzZXRBY3RpdmUnLCAoKT0+IHtcclxuXHJcblx0XHRcdFx0XHRbLi4uaXRlbXNdLmZvckVhY2goIChfaXRlbSxfaW5kZXgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRcdGJ0bnNbX2luZGV4XS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnLCBfaXRlbSA9PT0gaXRlbSk7XHJcblx0XHRcdFx0XHRcdF9pdGVtLmNsYXNzTGlzdC50b2dnbGUoJ3Zpc3VhbGx5aGlkZGVuJywgX2l0ZW0gIT09IGl0ZW0pO1xyXG5cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0c2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdFx0Y29uc3QgaW5kZXggPSBwYXJzZUludChzZWxlY3QudmFsdWUpO1xyXG5cclxuXHRcdFx0XHRbLi4uYnRuc10uZm9yRWFjaCggKGJ0bixfaW5kZXgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRidG4uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJywgX2luZGV4ID09PSBpbmRleCk7XHJcblx0XHRcdFx0XHRpdGVtc1tfaW5kZXhdLmNsYXNzTGlzdC50b2dnbGUoJ3Zpc3VhbGx5aGlkZGVuJywgX2luZGV4ICE9PSBpbmRleCk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHR0YWIucXVlcnlTZWxlY3RvcignLnRhYnNfX25hdicpLnByZXBlbmQoc2VsZWN0KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYnMnKSk7XHJcblxyXG4vKiggdGFicyA9PiB7XHJcblxyXG5cdGlmICggdGFicy5sZW5ndGggPiAwICkge1xyXG5cclxuXHRcdFsuLi50YWJzXS5mb3JFYWNoKCB0YWIgPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgYnRuID0gdGFiLnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJzX19idG4nKSxcclxuXHRcdFx0XHQgIGl0ZW0gPSB0YWIucXVlcnlTZWxlY3RvckFsbCgnLnRhYnNfX2l0ZW0nKSxcclxuXHRcdFx0XHQgIG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuXHRcdFx0Wy4uLmJ0bl0uZm9yRWFjaCggKGJ0bixpbmRleCkgPT4ge1xyXG5cclxuXHRcdFx0XHRjb25zdCBfYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblxyXG5cdFx0XHRcdF9idG4uc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XHJcblxyXG5cdFx0XHRcdF9idG4uY2xhc3NOYW1lID0gaW5kZXggPT09IDAgPyAnYnRuIGJ0bi0tZ3JleScgOiAnYnRuIGJ0bi0tb3V0bGluZSc7XHJcblxyXG5cdFx0XHRcdF9idG4udGV4dENvbnRlbnQgPSBidG4udGV4dENvbnRlbnQ7XHJcblxyXG5cdFx0XHRcdG5hdi5hcHBlbmRDaGlsZChfYnRuKTtcclxuXHJcblx0XHRcdFx0X2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRbLi4ubmF2LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4nKV0uZm9yRWFjaCggKGJ0bixpbmRleCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdFx0YnRuLmNsYXNzTGlzdC50b2dnbGUoJ2J0bi0tZ3JleScsIF9idG4gPT09IGJ0bik7XHJcblx0XHRcdFx0XHRcdGJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdidG4tLW91dGxpbmUnLCBfYnRuICE9PSBidG4pO1xyXG5cclxuXHRcdFx0XHRcdFx0aXRlbVtpbmRleF0uY2xhc3NMaXN0LnRvZ2dsZSgndmlzdWFsbHloaWRkZW4nLCBfYnRuICE9PSBidG4pO1xyXG5cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0YnRuLnJlbW92ZSgpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRuYXYuY2xhc3NMaXN0LmFkZCgndGFic19fbmF2Jyk7XHJcblx0XHRcdHRhYi5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyYmVnaW4nLCBuYXYpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFicycpKTsqLyIsIi8vIHRpdGxlXHJcblxyXG4oIHRvb2x0aXBzID0+IHtcclxuXHJcblx0aWYodG9vbHRpcHMubGVuZ3RoKXtcclxuXHJcblx0XHRbLi4udG9vbHRpcHNdLmZvckVhY2goIHRvb2x0aXAgPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcblxyXG5cdFx0XHR0aXRsZS5jbGFzc05hbWUgPSAndG9vbHRpcC10aXRsZV9faW5uZXInO1xyXG5cdFx0XHR0aXRsZS50ZXh0Q29udGVudCA9IHRvb2x0aXAuZ2V0QXR0cmlidXRlKCd0aXRsZScpXHJcblxyXG5cdFx0XHR0b29sdGlwLnJlbW92ZUF0dHJpYnV0ZSgndGl0bGUnKTtcclxuXHRcdFx0dG9vbHRpcC5hcHBlbmQodGl0bGUpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdGxldCB0aW1lb3V0ID0gbnVsbDtcclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdGlmICggZXZlbnQudGFyZ2V0ICE9PSBkb2N1bWVudCApIHtcclxuXHJcblx0XHRcdFx0XHRjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnRvb2x0aXAtdGl0bGUnKTtcclxuXHJcblx0XHRcdFx0XHRbLi4udG9vbHRpcHNdLmZvckVhY2goIHRvb2x0aXAgPT4ge1xyXG5cclxuXHRcdFx0XHRcdFx0aWYodGFyZ2V0ICE9PSB0b29sdGlwKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHRvb2x0aXAuY2xhc3NMaXN0LnJlbW92ZSgnaXMtc2hvdycpO1xyXG5cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdGlmICh0aW1lb3V0ICE9PSBudWxsKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHRpbWVvdXQgPSBzZXRUaW1lb3V0KCAoKT0+IHtcclxuXHJcblx0XHRcdFx0XHRcdGlmICggdGFyZ2V0ICkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHR0YXJnZXQuY2xhc3NMaXN0LmFkZCgnaXMtc2hvdycpO1xyXG5cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdH0sIDMwMCk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9vbHRpcC10aXRsZScpKTtcclxuXHJcbi8vIHRvb2x0aXBcclxuXHJcbmZ1bmN0aW9uIFRvb2x0aXAodG9vbHRpcCkge1xyXG5cclxuXHRsZXQgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihtdXRhdGlvblJlY29yZHMgPT4ge1xyXG5cclxuXHRcdGNvbnN0IHQgPSBtdXRhdGlvblJlY29yZHNbMF0udGFyZ2V0LFxyXG5cdFx0XHQgIGlubmVyID0gdC5xdWVyeVNlbGVjdG9yKCcudG9vbHRpcF9faW5uZXInKTtcclxuXHJcblx0XHRpZih0Lm9wZW4pIHtcclxuXHJcblx0XHRcdGNvbnN0IHJlY3QgPSBpbm5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcblx0XHRcdGlmKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA8IHJlY3QucmlnaHQpIHtcclxuXHJcblx0XHRcdFx0Ly8g0LvQtdCy0LXQtVxyXG5cclxuXHRcdFx0XHRpbm5lci5zdHlsZS5tYXJnaW5MZWZ0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIC0gcmVjdC5yaWdodCArICdweCc7XHJcblxyXG5cdFx0XHR9IGVsc2UgaWYocmVjdC5sZWZ0IDwgMCkge1xyXG5cclxuXHRcdFx0XHQvLyDQv9GA0LDQstC10LVcclxuXHJcblx0XHRcdFx0aW5uZXIuc3R5bGUubWFyZ2luTGVmdCA9IC1yZWN0LmxlZnQgKyAncHgnO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRpbm5lci5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcblx0Y29uc3QgYnRuID0gdG9vbHRpcC5xdWVyeVNlbGVjdG9yKCcudG9vbHRpcF9fYnRuJyk7XHJcblxyXG5cdG9ic2VydmVyLm9ic2VydmUodG9vbHRpcCwge1xyXG5cclxuXHRcdGF0dHJpYnV0ZXMgOiB0cnVlXHJcblxyXG5cdH0pO1xyXG5cclxuXHR0b29sdGlwLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XHJcblxyXG5cdFx0aWYgKCB3aW5kb3cuaW5uZXJXaWR0aCA+PSAxMjUwICkge1xyXG5cclxuXHRcdFx0dG9vbHRpcC5vcGVuID0gdHJ1ZTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxuXHR0b29sdGlwLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XHJcblxyXG5cdFx0aWYgKCB3aW5kb3cuaW5uZXJXaWR0aCA+PSAxMjUwICkge1xyXG5cclxuXHRcdFx0dG9vbHRpcC5vcGVuID0gZmFsc2U7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcbn1cclxuXHJcbiggdG9vbHRpcHMgPT4ge1xyXG5cclxuXHRpZiggdG9vbHRpcHMubGVuZ3RoICkge1xyXG5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0aWYgKCBldmVudC50YXJnZXQgIT09IGRvY3VtZW50ICkge1xyXG5cclxuXHRcdFx0XHRjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnRvb2x0aXAnKTtcclxuXHJcblx0XHRcdFx0Wy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b29sdGlwJyldLmZvckVhY2goIHRvb2x0aXAgPT4ge1xyXG5cclxuXHRcdFx0XHRcdGlmKHRhcmdldCAhPT0gdG9vbHRpcCkge1xyXG5cclxuXHRcdFx0XHRcdFx0dG9vbHRpcC5vcGVuID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRbLi4udG9vbHRpcHNdLmZvckVhY2goIHRvb2x0aXAgPT4gbmV3IFRvb2x0aXAodG9vbHRpcCkpO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9vbHRpcCcpKTsiLCIoIHRvc3RlciA9PiB7XG5cblx0aWYodG9zdGVyKXtcblxuXHRcdGxldCBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiOyBcIiksXG5cdFx0XHRjb29raWVzVmFsdWUgPSBudWxsO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjb29raWVzLmxlbmd0aDsgaSsrKSB7XG5cblx0XHRcdGxldCBjb29raWUgPSBjb29raWVzW2ldLnNwbGl0KFwiPVwiKTtcblxuXHRcdFx0aWYgKGNvb2tpZVswXSA9PT0gXCJ0b3N0ZXJcIikge1xuXG5cdFx0XHRcdGNvb2tpZXNWYWx1ZSA9IGNvb2tpZVsxXTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0Y29uc3QgYnRuID0gdG9zdGVyLnF1ZXJ5U2VsZWN0b3IoJy50b3N0ZXJfX2Nsb3NlJyk7XG5cdFx0Y29uc3QgbmFtZUN1cnJlbnQgPSB0b3N0ZXIuZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKTtcblxuXHRcdGlmICggY29va2llc1ZhbHVlICE9PSBudWxsICYmIGNvb2tpZXNWYWx1ZS5zcGxpdChcInxcIikuaW5jbHVkZXMobmFtZUN1cnJlbnQpICkge1xuXG5cdFx0XHR0b3N0ZXIucmVtb3ZlKCk7XG5cblx0XHR9XG5cdFx0ZWxzZSB7XG5cblx0XHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXG5cdFx0XHRcdGNvb2tpZXNWYWx1ZSA9IGNvb2tpZXNWYWx1ZSA9PT0gbnVsbCA/IG5hbWVDdXJyZW50IDogY29va2llc1ZhbHVlICsgJ3wnICsgbmFtZUN1cnJlbnQ7XG5cblx0XHRcdFx0ZG9jdW1lbnQuY29va2llID0gXCJ0b3N0ZXI9XCIgKyBjb29raWVzVmFsdWUgKyBcIjsgcGF0aD0vXCI7XG5cblx0XHRcdFx0dG9zdGVyLnJlbW92ZSgpO1xuXG5cdFx0XHR9KTtcblxuXHRcdH1cblxuXHR9XG5cbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3N0ZXInKSk7IiwiKCB2aWRlb3MgPT4ge1xuXG5cdGlmKHZpZGVvcy5sZW5ndGgpe1xuXG5cdFx0ZnVuY3Rpb24gWW91VHViZUdldElEKHVybCkge1xuXG5cdFx0XHRsZXQgSUQgPSAnJztcblxuXHRcdFx0dXJsID0gdXJsLnJlcGxhY2UoLyg+fDwpL2dpLCcnKS5zcGxpdCgvKHZpXFwvfHY9fFxcL3ZcXC98eW91dHVcXC5iZVxcL3xcXC9lbWJlZFxcLykvKTtcblxuXHRcdFx0aWYodXJsWzJdICE9PSB1bmRlZmluZWQpIHtcblxuXHRcdFx0XHRJRCA9IHVybFsyXS5zcGxpdCgvW14wLTlhLXpfXFwtXS9pKTtcblx0XHRcdFx0SUQgPSBJRFswXTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRJRCA9IHVybDtcblxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gSUQ7XG5cblx0XHR9XG5cblx0XHRpZiAoIHZpZGVvcy5sZW5ndGggPiAxICkge1xuXG5cdFx0XHQvLyBJbmplY3QgWW91VHViZSBBUEkgc2NyaXB0XG5cdFx0XHRjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblx0XHRcdHNjcmlwdC5zcmMgPSBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3BsYXllcl9hcGlcIjtcblx0XHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kKHNjcmlwdCk7XG5cblx0XHR9XG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcblxuXHRcdFx0Y29uc3QgY2xpcFByZXZpZXcgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnZpZGVvLWNsaXBfX2xpbmsnKTtcblxuXHRcdFx0aWYgKCBjbGlwUHJldmlldyApIHtcblxuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHRcdGNvbnN0IGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuXG5cdFx0XHRcdGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ2FsbG93ZnVsbHNjcmVlbicsICcnKTtcblx0XHRcdFx0aWZyYW1lLnNldEF0dHJpYnV0ZSgnc3JjJywgJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLycgKyBZb3VUdWJlR2V0SUQoY2xpcFByZXZpZXcuaHJlZikgKyAnP3JlbD0wJnNob3dpbmZvPTAmYXV0b3BsYXk9MSZlbmFibGVqc2FwaT0xJmh0bWw1PTEnKTtcblxuXHRcdFx0XHRjbGlwUHJldmlldy5wYXJlbnROb2RlLmFwcGVuZChpZnJhbWUpO1xuXHRcdFx0XHRjbGlwUHJldmlldy5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2lzLWlmcmFtZScpO1xuXG5cdFx0XHRcdGlmICggdmlkZW9zLmxlbmd0aCA+IDEgKSB7XG5cblx0XHRcdFx0XHRbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnZpZGVvLWNsaXAuaXMtaWZyYW1lJyldLmZvckVhY2goIHZpZGVvID0+IHtcblxuXHRcdFx0XHRcdFx0aWYgKCBjbGlwUHJldmlldy5wYXJlbnROb2RlID09PSB2aWRlbyApIHtcblxuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Y29uc3QgaWZyYW1lID0gdmlkZW8ucXVlcnlTZWxlY3RvcignaWZyYW1lJyk7XG5cblx0XHRcdFx0XHRcdGlmICggaWZyYW1lICkge1xuXG5cdFx0XHRcdFx0XHRcdGxldCBwbGF5ZXIgPSBuZXcgWVQuUGxheWVyKGlmcmFtZSwge1xuXHRcdFx0XHRcdFx0XHRcdGV2ZW50czoge1xuXHRcdFx0XHRcdFx0XHRcdFx0b25SZWFkeTogKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRwbGF5ZXIucGF1c2VWaWRlbygpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0fSk7XG5cblx0fVxuXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudmlkZW8tY2xpcCcpKTsiXX0=
