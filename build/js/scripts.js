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

		// delay hover

		const list = menu.querySelector('.menu-catalog__list');

		list.addEventListener('mouseenter',()=>{

			resizeTimeout && clearTimeout(resizeTimeout);

			resizeTimeout = setTimeout( () => {

				document.documentElement.style.setProperty('--transitionDelayMenu', '0s');

			}, 1000);

		});

		list.addEventListener('mouseleave',()=>{

			document.documentElement.style.setProperty('--transitionDelayMenu', '1s');

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dG9zaXplLm1pbi5qcyIsImNsaXBib2FyZC5taW4uanMiLCJtdXN0YWNoZS5taW4uanMiLCJwaWNrbWV1cC5taW4uanMiLCJqcy5qcyIsImFjY29yZGlvbi5qcyIsImFydGljbGUuanMiLCJicmFuZHMuanMiLCJjYXJ0LmpzIiwiY29uc3VsdGF0aW9ucy5qcyIsImRlYWRsaW5lLmpzIiwiZXZlbnRzLmpzIiwiZmlsdGVyLXJvdy5qcyIsImZpbHRlci5qcyIsImZvcm0uanMiLCJoZWFkZXIuanMiLCJpbnB1dG1hc2suanMiLCJsay5qcyIsIm1lbnUuanMiLCJtb2RhbC5qcyIsIm5ld3MuanMiLCJvcmRlci5qcyIsInBhZ2UtdXAuanMiLCJwaG9uZS1jb3VudHJ5LmpzIiwicGlja21ldXAuanMiLCJwcmV2aWV3LWNhcmQtY29sb3IuanMiLCJwcmV2aWV3LWNhcmQtdm9sdW1lLmpzIiwicHJvZHVjdC5qcyIsInJlYWRtb3JlLXRleHQuanMiLCJyZXZpZXcuanMiLCJzZWxlY3QuanMiLCJzd2lwZXIuanMiLCJ0YWJzLmpzIiwidG9vbHRpcC5qcyIsInRvc3Rlci5qcyIsInZpZGVvLWNsaXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTkE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaktBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqS0E7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6VkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUodCk6KGV8fHNlbGYpLmF1dG9zaXplPXQoKX0odGhpcyxmdW5jdGlvbigpe3ZhciBlLHQsbj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBNYXA/bmV3IE1hcDooZT1bXSx0PVtdLHtoYXM6ZnVuY3Rpb24odCl7cmV0dXJuIGUuaW5kZXhPZih0KT4tMX0sZ2V0OmZ1bmN0aW9uKG4pe3JldHVybiB0W2UuaW5kZXhPZihuKV19LHNldDpmdW5jdGlvbihuLG8pey0xPT09ZS5pbmRleE9mKG4pJiYoZS5wdXNoKG4pLHQucHVzaChvKSl9LGRlbGV0ZTpmdW5jdGlvbihuKXt2YXIgbz1lLmluZGV4T2Yobik7bz4tMSYmKGUuc3BsaWNlKG8sMSksdC5zcGxpY2UobywxKSl9fSksbz1mdW5jdGlvbihlKXtyZXR1cm4gbmV3IEV2ZW50KGUse2J1YmJsZXM6ITB9KX07dHJ5e25ldyBFdmVudChcInRlc3RcIil9Y2F0Y2goZSl7bz1mdW5jdGlvbihlKXt2YXIgdD1kb2N1bWVudC5jcmVhdGVFdmVudChcIkV2ZW50XCIpO3JldHVybiB0LmluaXRFdmVudChlLCEwLCExKSx0fX1mdW5jdGlvbiByKGUpe3ZhciB0PW4uZ2V0KGUpO3QmJnQuZGVzdHJveSgpfWZ1bmN0aW9uIGkoZSl7dmFyIHQ9bi5nZXQoZSk7dCYmdC51cGRhdGUoKX12YXIgbD1udWxsO3JldHVyblwidW5kZWZpbmVkXCI9PXR5cGVvZiB3aW5kb3d8fFwiZnVuY3Rpb25cIiE9dHlwZW9mIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlPygobD1mdW5jdGlvbihlKXtyZXR1cm4gZX0pLmRlc3Ryb3k9ZnVuY3Rpb24oZSl7cmV0dXJuIGV9LGwudXBkYXRlPWZ1bmN0aW9uKGUpe3JldHVybiBlfSk6KChsPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUmJkFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZS5sZW5ndGg/ZTpbZV0sZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKGUpe2lmKGUmJmUubm9kZU5hbWUmJlwiVEVYVEFSRUFcIj09PWUubm9kZU5hbWUmJiFuLmhhcyhlKSl7dmFyIHQscj1udWxsLGk9bnVsbCxsPW51bGwsZD1mdW5jdGlvbigpe2UuY2xpZW50V2lkdGghPT1pJiZjKCl9LHU9ZnVuY3Rpb24odCl7d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIixkLCExKSxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLGMsITEpLGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsYywhMSksZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiYXV0b3NpemU6ZGVzdHJveVwiLHUsITEpLGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImF1dG9zaXplOnVwZGF0ZVwiLGMsITEpLE9iamVjdC5rZXlzKHQpLmZvckVhY2goZnVuY3Rpb24obil7ZS5zdHlsZVtuXT10W25dfSksbi5kZWxldGUoZSl9LmJpbmQoZSx7aGVpZ2h0OmUuc3R5bGUuaGVpZ2h0LHJlc2l6ZTplLnN0eWxlLnJlc2l6ZSxvdmVyZmxvd1k6ZS5zdHlsZS5vdmVyZmxvd1ksb3ZlcmZsb3dYOmUuc3R5bGUub3ZlcmZsb3dYLHdvcmRXcmFwOmUuc3R5bGUud29yZFdyYXB9KTtlLmFkZEV2ZW50TGlzdGVuZXIoXCJhdXRvc2l6ZTpkZXN0cm95XCIsdSwhMSksXCJvbnByb3BlcnR5Y2hhbmdlXCJpbiBlJiZcIm9uaW5wdXRcImluIGUmJmUuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsYywhMSksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIixkLCExKSxlLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLGMsITEpLGUuYWRkRXZlbnRMaXN0ZW5lcihcImF1dG9zaXplOnVwZGF0ZVwiLGMsITEpLGUuc3R5bGUub3ZlcmZsb3dYPVwiaGlkZGVuXCIsZS5zdHlsZS53b3JkV3JhcD1cImJyZWFrLXdvcmRcIixuLnNldChlLHtkZXN0cm95OnUsdXBkYXRlOmN9KSxcInZlcnRpY2FsXCI9PT0odD13aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlLG51bGwpKS5yZXNpemU/ZS5zdHlsZS5yZXNpemU9XCJub25lXCI6XCJib3RoXCI9PT10LnJlc2l6ZSYmKGUuc3R5bGUucmVzaXplPVwiaG9yaXpvbnRhbFwiKSxyPVwiY29udGVudC1ib3hcIj09PXQuYm94U2l6aW5nPy0ocGFyc2VGbG9hdCh0LnBhZGRpbmdUb3ApK3BhcnNlRmxvYXQodC5wYWRkaW5nQm90dG9tKSk6cGFyc2VGbG9hdCh0LmJvcmRlclRvcFdpZHRoKStwYXJzZUZsb2F0KHQuYm9yZGVyQm90dG9tV2lkdGgpLGlzTmFOKHIpJiYocj0wKSxjKCl9ZnVuY3Rpb24gYSh0KXt2YXIgbj1lLnN0eWxlLndpZHRoO2Uuc3R5bGUud2lkdGg9XCIwcHhcIixlLnN0eWxlLndpZHRoPW4sZS5zdHlsZS5vdmVyZmxvd1k9dH1mdW5jdGlvbiBzKCl7aWYoMCE9PWUuc2Nyb2xsSGVpZ2h0KXt2YXIgdD1mdW5jdGlvbihlKXtmb3IodmFyIHQ9W107ZSYmZS5wYXJlbnROb2RlJiZlLnBhcmVudE5vZGUgaW5zdGFuY2VvZiBFbGVtZW50OyllLnBhcmVudE5vZGUuc2Nyb2xsVG9wJiZ0LnB1c2goe25vZGU6ZS5wYXJlbnROb2RlLHNjcm9sbFRvcDplLnBhcmVudE5vZGUuc2Nyb2xsVG9wfSksZT1lLnBhcmVudE5vZGU7cmV0dXJuIHR9KGUpLG49ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50JiZkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO2Uuc3R5bGUuaGVpZ2h0PVwiXCIsZS5zdHlsZS5oZWlnaHQ9ZS5zY3JvbGxIZWlnaHQrcitcInB4XCIsaT1lLmNsaWVudFdpZHRoLHQuZm9yRWFjaChmdW5jdGlvbihlKXtlLm5vZGUuc2Nyb2xsVG9wPWUuc2Nyb2xsVG9wfSksbiYmKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A9bil9fWZ1bmN0aW9uIGMoKXtzKCk7dmFyIHQ9TWF0aC5yb3VuZChwYXJzZUZsb2F0KGUuc3R5bGUuaGVpZ2h0KSksbj13aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlLG51bGwpLHI9XCJjb250ZW50LWJveFwiPT09bi5ib3hTaXppbmc/TWF0aC5yb3VuZChwYXJzZUZsb2F0KG4uaGVpZ2h0KSk6ZS5vZmZzZXRIZWlnaHQ7aWYocjx0P1wiaGlkZGVuXCI9PT1uLm92ZXJmbG93WSYmKGEoXCJzY3JvbGxcIikscygpLHI9XCJjb250ZW50LWJveFwiPT09bi5ib3hTaXppbmc/TWF0aC5yb3VuZChwYXJzZUZsb2F0KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGUsbnVsbCkuaGVpZ2h0KSk6ZS5vZmZzZXRIZWlnaHQpOlwiaGlkZGVuXCIhPT1uLm92ZXJmbG93WSYmKGEoXCJoaWRkZW5cIikscygpLHI9XCJjb250ZW50LWJveFwiPT09bi5ib3hTaXppbmc/TWF0aC5yb3VuZChwYXJzZUZsb2F0KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGUsbnVsbCkuaGVpZ2h0KSk6ZS5vZmZzZXRIZWlnaHQpLGwhPT1yKXtsPXI7dmFyIGk9byhcImF1dG9zaXplOnJlc2l6ZWRcIik7dHJ5e2UuZGlzcGF0Y2hFdmVudChpKX1jYXRjaChlKXt9fX19KGUpfSksZX0pLmRlc3Ryb3k9ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJkFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZS5sZW5ndGg/ZTpbZV0sciksZX0sbC51cGRhdGU9ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJkFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZS5sZW5ndGg/ZTpbZV0saSksZX0pLGx9KTtcclxuIiwiLyohXG4gKiBjbGlwYm9hcmQuanMgdjIuMC4xMVxuICogaHR0cHM6Ly9jbGlwYm9hcmRqcy5jb20vXG4gKlxuICogTGljZW5zZWQgTUlUIMKpIFplbm8gUm9jaGFcbiAqL1xuIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sZSk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5DbGlwYm9hcmRKUz1lKCk6dC5DbGlwYm9hcmRKUz1lKCl9KHRoaXMsZnVuY3Rpb24oKXtyZXR1cm4gbj17Njg2OmZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtuLmQoZSx7ZGVmYXVsdDpmdW5jdGlvbigpe3JldHVybiBifX0pO3ZhciBlPW4oMjc5KSxpPW4ubihlKSxlPW4oMzcwKSx1PW4ubihlKSxlPW4oODE3KSxyPW4ubihlKTtmdW5jdGlvbiBjKHQpe3RyeXtyZXR1cm4gZG9jdW1lbnQuZXhlY0NvbW1hbmQodCl9Y2F0Y2godCl7cmV0dXJufX12YXIgYT1mdW5jdGlvbih0KXt0PXIoKSh0KTtyZXR1cm4gYyhcImN1dFwiKSx0fTtmdW5jdGlvbiBvKHQsZSl7dmFyIG4sbyx0PShuPXQsbz1cInJ0bFwiPT09ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRpclwiKSwodD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIikpLnN0eWxlLmZvbnRTaXplPVwiMTJwdFwiLHQuc3R5bGUuYm9yZGVyPVwiMFwiLHQuc3R5bGUucGFkZGluZz1cIjBcIix0LnN0eWxlLm1hcmdpbj1cIjBcIix0LnN0eWxlLnBvc2l0aW9uPVwiYWJzb2x1dGVcIix0LnN0eWxlW28/XCJyaWdodFwiOlwibGVmdFwiXT1cIi05OTk5cHhcIixvPXdpbmRvdy5wYWdlWU9mZnNldHx8ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCx0LnN0eWxlLnRvcD1cIlwiLmNvbmNhdChvLFwicHhcIiksdC5zZXRBdHRyaWJ1dGUoXCJyZWFkb25seVwiLFwiXCIpLHQudmFsdWU9bix0KTtyZXR1cm4gZS5jb250YWluZXIuYXBwZW5kQ2hpbGQodCksZT1yKCkodCksYyhcImNvcHlcIiksdC5yZW1vdmUoKSxlfXZhciBmPWZ1bmN0aW9uKHQpe3ZhciBlPTE8YXJndW1lbnRzLmxlbmd0aCYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTp7Y29udGFpbmVyOmRvY3VtZW50LmJvZHl9LG49XCJcIjtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgdD9uPW8odCxlKTp0IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCYmIVtcInRleHRcIixcInNlYXJjaFwiLFwidXJsXCIsXCJ0ZWxcIixcInBhc3N3b3JkXCJdLmluY2x1ZGVzKG51bGw9PXQ/dm9pZCAwOnQudHlwZSk/bj1vKHQudmFsdWUsZSk6KG49cigpKHQpLGMoXCJjb3B5XCIpKSxufTtmdW5jdGlvbiBsKHQpe3JldHVybihsPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbih0KXtyZXR1cm4gdHlwZW9mIHR9OmZ1bmN0aW9uKHQpe3JldHVybiB0JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJnQuY29uc3RydWN0b3I9PT1TeW1ib2wmJnQhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIHR9KSh0KX12YXIgcz1mdW5jdGlvbigpe3ZhciB0PTA8YXJndW1lbnRzLmxlbmd0aCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTp7fSxlPXQuYWN0aW9uLG49dm9pZCAwPT09ZT9cImNvcHlcIjplLG89dC5jb250YWluZXIsZT10LnRhcmdldCx0PXQudGV4dDtpZihcImNvcHlcIiE9PW4mJlwiY3V0XCIhPT1uKXRocm93IG5ldyBFcnJvcignSW52YWxpZCBcImFjdGlvblwiIHZhbHVlLCB1c2UgZWl0aGVyIFwiY29weVwiIG9yIFwiY3V0XCInKTtpZih2b2lkIDAhPT1lKXtpZighZXx8XCJvYmplY3RcIiE9PWwoZSl8fDEhPT1lLm5vZGVUeXBlKXRocm93IG5ldyBFcnJvcignSW52YWxpZCBcInRhcmdldFwiIHZhbHVlLCB1c2UgYSB2YWxpZCBFbGVtZW50Jyk7aWYoXCJjb3B5XCI9PT1uJiZlLmhhc0F0dHJpYnV0ZShcImRpc2FibGVkXCIpKXRocm93IG5ldyBFcnJvcignSW52YWxpZCBcInRhcmdldFwiIGF0dHJpYnV0ZS4gUGxlYXNlIHVzZSBcInJlYWRvbmx5XCIgaW5zdGVhZCBvZiBcImRpc2FibGVkXCIgYXR0cmlidXRlJyk7aWYoXCJjdXRcIj09PW4mJihlLmhhc0F0dHJpYnV0ZShcInJlYWRvbmx5XCIpfHxlLmhhc0F0dHJpYnV0ZShcImRpc2FibGVkXCIpKSl0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgXCJ0YXJnZXRcIiBhdHRyaWJ1dGUuIFlvdSBjYW5cXCd0IGN1dCB0ZXh0IGZyb20gZWxlbWVudHMgd2l0aCBcInJlYWRvbmx5XCIgb3IgXCJkaXNhYmxlZFwiIGF0dHJpYnV0ZXMnKX1yZXR1cm4gdD9mKHQse2NvbnRhaW5lcjpvfSk6ZT9cImN1dFwiPT09bj9hKGUpOmYoZSx7Y29udGFpbmVyOm99KTp2b2lkIDB9O2Z1bmN0aW9uIHAodCl7cmV0dXJuKHA9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKHQpe3JldHVybiB0eXBlb2YgdH06ZnVuY3Rpb24odCl7cmV0dXJuIHQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmdC5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmdCE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgdH0pKHQpfWZ1bmN0aW9uIGQodCxlKXtmb3IodmFyIG49MDtuPGUubGVuZ3RoO24rKyl7dmFyIG89ZVtuXTtvLmVudW1lcmFibGU9by5lbnVtZXJhYmxlfHwhMSxvLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiBvJiYoby53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsby5rZXksbyl9fWZ1bmN0aW9uIHkodCxlKXtyZXR1cm4oeT1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fGZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQuX19wcm90b19fPWUsdH0pKHQsZSl9ZnVuY3Rpb24gaChuKXt2YXIgbz1mdW5jdGlvbigpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBSZWZsZWN0fHwhUmVmbGVjdC5jb25zdHJ1Y3QpcmV0dXJuITE7aWYoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSlyZXR1cm4hMTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBQcm94eSlyZXR1cm4hMDt0cnl7cmV0dXJuIERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSxbXSxmdW5jdGlvbigpe30pKSwhMH1jYXRjaCh0KXtyZXR1cm4hMX19KCk7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIHQsZT12KG4pO3JldHVybiB0PW8/KHQ9dih0aGlzKS5jb25zdHJ1Y3RvcixSZWZsZWN0LmNvbnN0cnVjdChlLGFyZ3VtZW50cyx0KSk6ZS5hcHBseSh0aGlzLGFyZ3VtZW50cyksZT10aGlzLCEodD10KXx8XCJvYmplY3RcIiE9PXAodCkmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHQ/ZnVuY3Rpb24odCl7aWYodm9pZCAwIT09dClyZXR1cm4gdDt0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIil9KGUpOnR9fWZ1bmN0aW9uIHYodCl7cmV0dXJuKHY9T2JqZWN0LnNldFByb3RvdHlwZU9mP09iamVjdC5nZXRQcm90b3R5cGVPZjpmdW5jdGlvbih0KXtyZXR1cm4gdC5fX3Byb3RvX198fE9iamVjdC5nZXRQcm90b3R5cGVPZih0KX0pKHQpfWZ1bmN0aW9uIG0odCxlKXt0PVwiZGF0YS1jbGlwYm9hcmQtXCIuY29uY2F0KHQpO2lmKGUuaGFzQXR0cmlidXRlKHQpKXJldHVybiBlLmdldEF0dHJpYnV0ZSh0KX12YXIgYj1mdW5jdGlvbigpeyFmdW5jdGlvbih0LGUpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUmJm51bGwhPT1lKXRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTt0LnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKGUmJmUucHJvdG90eXBlLHtjb25zdHJ1Y3Rvcjp7dmFsdWU6dCx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9fSksZSYmeSh0LGUpfShyLGkoKSk7dmFyIHQsZSxuLG89aChyKTtmdW5jdGlvbiByKHQsZSl7dmFyIG47cmV0dXJuIGZ1bmN0aW9uKHQpe2lmKCEodCBpbnN0YW5jZW9mIHIpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9KHRoaXMpLChuPW8uY2FsbCh0aGlzKSkucmVzb2x2ZU9wdGlvbnMoZSksbi5saXN0ZW5DbGljayh0KSxufXJldHVybiB0PXIsbj1be2tleTpcImNvcHlcIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgZT0xPGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06e2NvbnRhaW5lcjpkb2N1bWVudC5ib2R5fTtyZXR1cm4gZih0LGUpfX0se2tleTpcImN1dFwiLHZhbHVlOmZ1bmN0aW9uKHQpe3JldHVybiBhKHQpfX0se2tleTpcImlzU3VwcG9ydGVkXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgdD0wPGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06W1wiY29weVwiLFwiY3V0XCJdLHQ9XCJzdHJpbmdcIj09dHlwZW9mIHQ/W3RdOnQsZT0hIWRvY3VtZW50LnF1ZXJ5Q29tbWFuZFN1cHBvcnRlZDtyZXR1cm4gdC5mb3JFYWNoKGZ1bmN0aW9uKHQpe2U9ZSYmISFkb2N1bWVudC5xdWVyeUNvbW1hbmRTdXBwb3J0ZWQodCl9KSxlfX1dLChlPVt7a2V5OlwicmVzb2x2ZU9wdGlvbnNcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciB0PTA8YXJndW1lbnRzLmxlbmd0aCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTp7fTt0aGlzLmFjdGlvbj1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0LmFjdGlvbj90LmFjdGlvbjp0aGlzLmRlZmF1bHRBY3Rpb24sdGhpcy50YXJnZXQ9XCJmdW5jdGlvblwiPT10eXBlb2YgdC50YXJnZXQ/dC50YXJnZXQ6dGhpcy5kZWZhdWx0VGFyZ2V0LHRoaXMudGV4dD1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0LnRleHQ/dC50ZXh0OnRoaXMuZGVmYXVsdFRleHQsdGhpcy5jb250YWluZXI9XCJvYmplY3RcIj09PXAodC5jb250YWluZXIpP3QuY29udGFpbmVyOmRvY3VtZW50LmJvZHl9fSx7a2V5OlwibGlzdGVuQ2xpY2tcIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzO3RoaXMubGlzdGVuZXI9dSgpKHQsXCJjbGlja1wiLGZ1bmN0aW9uKHQpe3JldHVybiBlLm9uQ2xpY2sodCl9KX19LHtrZXk6XCJvbkNsaWNrXCIsdmFsdWU6ZnVuY3Rpb24odCl7dmFyIGU9dC5kZWxlZ2F0ZVRhcmdldHx8dC5jdXJyZW50VGFyZ2V0LG49dGhpcy5hY3Rpb24oZSl8fFwiY29weVwiLHQ9cyh7YWN0aW9uOm4sY29udGFpbmVyOnRoaXMuY29udGFpbmVyLHRhcmdldDp0aGlzLnRhcmdldChlKSx0ZXh0OnRoaXMudGV4dChlKX0pO3RoaXMuZW1pdCh0P1wic3VjY2Vzc1wiOlwiZXJyb3JcIix7YWN0aW9uOm4sdGV4dDp0LHRyaWdnZXI6ZSxjbGVhclNlbGVjdGlvbjpmdW5jdGlvbigpe2UmJmUuZm9jdXMoKSx3aW5kb3cuZ2V0U2VsZWN0aW9uKCkucmVtb3ZlQWxsUmFuZ2VzKCl9fSl9fSx7a2V5OlwiZGVmYXVsdEFjdGlvblwiLHZhbHVlOmZ1bmN0aW9uKHQpe3JldHVybiBtKFwiYWN0aW9uXCIsdCl9fSx7a2V5OlwiZGVmYXVsdFRhcmdldFwiLHZhbHVlOmZ1bmN0aW9uKHQpe3Q9bShcInRhcmdldFwiLHQpO2lmKHQpcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodCl9fSx7a2V5OlwiZGVmYXVsdFRleHRcIix2YWx1ZTpmdW5jdGlvbih0KXtyZXR1cm4gbShcInRleHRcIix0KX19LHtrZXk6XCJkZXN0cm95XCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmxpc3RlbmVyLmRlc3Ryb3koKX19XSkmJmQodC5wcm90b3R5cGUsZSksbiYmZCh0LG4pLHJ9KCl9LDgyODpmdW5jdGlvbih0KXt2YXIgZTtcInVuZGVmaW5lZFwiPT10eXBlb2YgRWxlbWVudHx8RWxlbWVudC5wcm90b3R5cGUubWF0Y2hlc3x8KChlPUVsZW1lbnQucHJvdG90eXBlKS5tYXRjaGVzPWUubWF0Y2hlc1NlbGVjdG9yfHxlLm1vek1hdGNoZXNTZWxlY3Rvcnx8ZS5tc01hdGNoZXNTZWxlY3Rvcnx8ZS5vTWF0Y2hlc1NlbGVjdG9yfHxlLndlYmtpdE1hdGNoZXNTZWxlY3RvciksdC5leHBvcnRzPWZ1bmN0aW9uKHQsZSl7Zm9yKDt0JiY5IT09dC5ub2RlVHlwZTspe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHQubWF0Y2hlcyYmdC5tYXRjaGVzKGUpKXJldHVybiB0O3Q9dC5wYXJlbnROb2RlfX19LDQzODpmdW5jdGlvbih0LGUsbil7dmFyIHU9big4MjgpO2Z1bmN0aW9uIGkodCxlLG4sbyxyKXt2YXIgaT1mdW5jdGlvbihlLG4sdCxvKXtyZXR1cm4gZnVuY3Rpb24odCl7dC5kZWxlZ2F0ZVRhcmdldD11KHQudGFyZ2V0LG4pLHQuZGVsZWdhdGVUYXJnZXQmJm8uY2FsbChlLHQpfX0uYXBwbHkodGhpcyxhcmd1bWVudHMpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIobixpLHIpLHtkZXN0cm95OmZ1bmN0aW9uKCl7dC5yZW1vdmVFdmVudExpc3RlbmVyKG4saSxyKX19fXQuZXhwb3J0cz1mdW5jdGlvbih0LGUsbixvLHIpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHQuYWRkRXZlbnRMaXN0ZW5lcj9pLmFwcGx5KG51bGwsYXJndW1lbnRzKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBuP2kuYmluZChudWxsLGRvY3VtZW50KS5hcHBseShudWxsLGFyZ3VtZW50cyk6KFwic3RyaW5nXCI9PXR5cGVvZiB0JiYodD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHQpKSxBcnJheS5wcm90b3R5cGUubWFwLmNhbGwodCxmdW5jdGlvbih0KXtyZXR1cm4gaSh0LGUsbixvLHIpfSkpfX0sODc5OmZ1bmN0aW9uKHQsbil7bi5ub2RlPWZ1bmN0aW9uKHQpe3JldHVybiB2b2lkIDAhPT10JiZ0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQmJjE9PT10Lm5vZGVUeXBlfSxuLm5vZGVMaXN0PWZ1bmN0aW9uKHQpe3ZhciBlPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KTtyZXR1cm4gdm9pZCAwIT09dCYmKFwiW29iamVjdCBOb2RlTGlzdF1cIj09PWV8fFwiW29iamVjdCBIVE1MQ29sbGVjdGlvbl1cIj09PWUpJiZcImxlbmd0aFwiaW4gdCYmKDA9PT10Lmxlbmd0aHx8bi5ub2RlKHRbMF0pKX0sbi5zdHJpbmc9ZnVuY3Rpb24odCl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIHR8fHQgaW5zdGFuY2VvZiBTdHJpbmd9LG4uZm49ZnVuY3Rpb24odCl7cmV0dXJuXCJbb2JqZWN0IEZ1bmN0aW9uXVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpfX0sMzcwOmZ1bmN0aW9uKHQsZSxuKXt2YXIgZj1uKDg3OSksbD1uKDQzOCk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSxuKXtpZighdCYmIWUmJiFuKXRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgcmVxdWlyZWQgYXJndW1lbnRzXCIpO2lmKCFmLnN0cmluZyhlKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiU2Vjb25kIGFyZ3VtZW50IG11c3QgYmUgYSBTdHJpbmdcIik7aWYoIWYuZm4obikpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoaXJkIGFyZ3VtZW50IG11c3QgYmUgYSBGdW5jdGlvblwiKTtpZihmLm5vZGUodCkpcmV0dXJuIGM9ZSxhPW4sKHU9dCkuYWRkRXZlbnRMaXN0ZW5lcihjLGEpLHtkZXN0cm95OmZ1bmN0aW9uKCl7dS5yZW1vdmVFdmVudExpc3RlbmVyKGMsYSl9fTtpZihmLm5vZGVMaXN0KHQpKXJldHVybiBvPXQscj1lLGk9bixBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKG8sZnVuY3Rpb24odCl7dC5hZGRFdmVudExpc3RlbmVyKHIsaSl9KSx7ZGVzdHJveTpmdW5jdGlvbigpe0FycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobyxmdW5jdGlvbih0KXt0LnJlbW92ZUV2ZW50TGlzdGVuZXIocixpKX0pfX07aWYoZi5zdHJpbmcodCkpcmV0dXJuIHQ9dCxlPWUsbj1uLGwoZG9jdW1lbnQuYm9keSx0LGUsbik7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBTdHJpbmcsIEhUTUxFbGVtZW50LCBIVE1MQ29sbGVjdGlvbiwgb3IgTm9kZUxpc3RcIik7dmFyIG8scixpLHUsYyxhfX0sODE3OmZ1bmN0aW9uKHQpe3QuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZSxuPVwiU0VMRUNUXCI9PT10Lm5vZGVOYW1lPyh0LmZvY3VzKCksdC52YWx1ZSk6XCJJTlBVVFwiPT09dC5ub2RlTmFtZXx8XCJURVhUQVJFQVwiPT09dC5ub2RlTmFtZT8oKGU9dC5oYXNBdHRyaWJ1dGUoXCJyZWFkb25seVwiKSl8fHQuc2V0QXR0cmlidXRlKFwicmVhZG9ubHlcIixcIlwiKSx0LnNlbGVjdCgpLHQuc2V0U2VsZWN0aW9uUmFuZ2UoMCx0LnZhbHVlLmxlbmd0aCksZXx8dC5yZW1vdmVBdHRyaWJ1dGUoXCJyZWFkb25seVwiKSx0LnZhbHVlKToodC5oYXNBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIikmJnQuZm9jdXMoKSxuPXdpbmRvdy5nZXRTZWxlY3Rpb24oKSwoZT1kb2N1bWVudC5jcmVhdGVSYW5nZSgpKS5zZWxlY3ROb2RlQ29udGVudHModCksbi5yZW1vdmVBbGxSYW5nZXMoKSxuLmFkZFJhbmdlKGUpLG4udG9TdHJpbmcoKSk7cmV0dXJuIG59fSwyNzk6ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZSgpe31lLnByb3RvdHlwZT17b246ZnVuY3Rpb24odCxlLG4pe3ZhciBvPXRoaXMuZXx8KHRoaXMuZT17fSk7cmV0dXJuKG9bdF18fChvW3RdPVtdKSkucHVzaCh7Zm46ZSxjdHg6bn0pLHRoaXN9LG9uY2U6ZnVuY3Rpb24odCxlLG4pe3ZhciBvPXRoaXM7ZnVuY3Rpb24gcigpe28ub2ZmKHQsciksZS5hcHBseShuLGFyZ3VtZW50cyl9cmV0dXJuIHIuXz1lLHRoaXMub24odCxyLG4pfSxlbWl0OmZ1bmN0aW9uKHQpe2Zvcih2YXIgZT1bXS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKSxuPSgodGhpcy5lfHwodGhpcy5lPXt9KSlbdF18fFtdKS5zbGljZSgpLG89MCxyPW4ubGVuZ3RoO288cjtvKyspbltvXS5mbi5hcHBseShuW29dLmN0eCxlKTtyZXR1cm4gdGhpc30sb2ZmOmZ1bmN0aW9uKHQsZSl7dmFyIG49dGhpcy5lfHwodGhpcy5lPXt9KSxvPW5bdF0scj1bXTtpZihvJiZlKWZvcih2YXIgaT0wLHU9by5sZW5ndGg7aTx1O2krKylvW2ldLmZuIT09ZSYmb1tpXS5mbi5fIT09ZSYmci5wdXNoKG9baV0pO3JldHVybiByLmxlbmd0aD9uW3RdPXI6ZGVsZXRlIG5bdF0sdGhpc319LHQuZXhwb3J0cz1lLHQuZXhwb3J0cy5UaW55RW1pdHRlcj1lfX0scj17fSxvLm49ZnVuY3Rpb24odCl7dmFyIGU9dCYmdC5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIHQuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gdH07cmV0dXJuIG8uZChlLHthOmV9KSxlfSxvLmQ9ZnVuY3Rpb24odCxlKXtmb3IodmFyIG4gaW4gZSlvLm8oZSxuKSYmIW8ubyh0LG4pJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxuLHtlbnVtZXJhYmxlOiEwLGdldDplW25dfSl9LG8ubz1mdW5jdGlvbih0LGUpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxlKX0sbyg2ODYpLmRlZmF1bHQ7ZnVuY3Rpb24gbyh0KXtpZihyW3RdKXJldHVybiByW3RdLmV4cG9ydHM7dmFyIGU9clt0XT17ZXhwb3J0czp7fX07cmV0dXJuIG5bdF0oZSxlLmV4cG9ydHMsbyksZS5leHBvcnRzfXZhciBuLHJ9KTsiLCIoZnVuY3Rpb24gZGVmaW5lTXVzdGFjaGUoZ2xvYmFsLGZhY3Rvcnkpe2lmKHR5cGVvZiBleHBvcnRzPT09XCJvYmplY3RcIiYmZXhwb3J0cyYmdHlwZW9mIGV4cG9ydHMubm9kZU5hbWUhPT1cInN0cmluZ1wiKXtmYWN0b3J5KGV4cG9ydHMpfWVsc2UgaWYodHlwZW9mIGRlZmluZT09PVwiZnVuY3Rpb25cIiYmZGVmaW5lLmFtZCl7ZGVmaW5lKFtcImV4cG9ydHNcIl0sZmFjdG9yeSl9ZWxzZXtnbG9iYWwuTXVzdGFjaGU9e307ZmFjdG9yeShnbG9iYWwuTXVzdGFjaGUpfX0pKHRoaXMsZnVuY3Rpb24gbXVzdGFjaGVGYWN0b3J5KG11c3RhY2hlKXt2YXIgb2JqZWN0VG9TdHJpbmc9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZzt2YXIgaXNBcnJheT1BcnJheS5pc0FycmF5fHxmdW5jdGlvbiBpc0FycmF5UG9seWZpbGwob2JqZWN0KXtyZXR1cm4gb2JqZWN0VG9TdHJpbmcuY2FsbChvYmplY3QpPT09XCJbb2JqZWN0IEFycmF5XVwifTtmdW5jdGlvbiBpc0Z1bmN0aW9uKG9iamVjdCl7cmV0dXJuIHR5cGVvZiBvYmplY3Q9PT1cImZ1bmN0aW9uXCJ9ZnVuY3Rpb24gdHlwZVN0cihvYmope3JldHVybiBpc0FycmF5KG9iaik/XCJhcnJheVwiOnR5cGVvZiBvYmp9ZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0cmluZyl7cmV0dXJuIHN0cmluZy5yZXBsYWNlKC9bXFwtXFxbXFxde30oKSorPy4sXFxcXFxcXiR8I1xcc10vZyxcIlxcXFwkJlwiKX1mdW5jdGlvbiBoYXNQcm9wZXJ0eShvYmoscHJvcE5hbWUpe3JldHVybiBvYmohPW51bGwmJnR5cGVvZiBvYmo9PT1cIm9iamVjdFwiJiZwcm9wTmFtZSBpbiBvYmp9ZnVuY3Rpb24gcHJpbWl0aXZlSGFzT3duUHJvcGVydHkocHJpbWl0aXZlLHByb3BOYW1lKXtyZXR1cm4gcHJpbWl0aXZlIT1udWxsJiZ0eXBlb2YgcHJpbWl0aXZlIT09XCJvYmplY3RcIiYmcHJpbWl0aXZlLmhhc093blByb3BlcnR5JiZwcmltaXRpdmUuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpfXZhciByZWdFeHBUZXN0PVJlZ0V4cC5wcm90b3R5cGUudGVzdDtmdW5jdGlvbiB0ZXN0UmVnRXhwKHJlLHN0cmluZyl7cmV0dXJuIHJlZ0V4cFRlc3QuY2FsbChyZSxzdHJpbmcpfXZhciBub25TcGFjZVJlPS9cXFMvO2Z1bmN0aW9uIGlzV2hpdGVzcGFjZShzdHJpbmcpe3JldHVybiF0ZXN0UmVnRXhwKG5vblNwYWNlUmUsc3RyaW5nKX12YXIgZW50aXR5TWFwPXtcIiZcIjpcIiZhbXA7XCIsXCI8XCI6XCImbHQ7XCIsXCI+XCI6XCImZ3Q7XCIsJ1wiJzpcIiZxdW90O1wiLFwiJ1wiOlwiJiMzOTtcIixcIi9cIjpcIiYjeDJGO1wiLFwiYFwiOlwiJiN4NjA7XCIsXCI9XCI6XCImI3gzRDtcIn07ZnVuY3Rpb24gZXNjYXBlSHRtbChzdHJpbmcpe3JldHVybiBTdHJpbmcoc3RyaW5nKS5yZXBsYWNlKC9bJjw+XCInYD1cXC9dL2csZnVuY3Rpb24gZnJvbUVudGl0eU1hcChzKXtyZXR1cm4gZW50aXR5TWFwW3NdfSl9dmFyIHdoaXRlUmU9L1xccyovO3ZhciBzcGFjZVJlPS9cXHMrLzt2YXIgZXF1YWxzUmU9L1xccyo9Lzt2YXIgY3VybHlSZT0vXFxzKlxcfS87dmFyIHRhZ1JlPS8jfFxcXnxcXC98PnxcXHt8Jnw9fCEvO2Z1bmN0aW9uIHBhcnNlVGVtcGxhdGUodGVtcGxhdGUsdGFncyl7aWYoIXRlbXBsYXRlKXJldHVybltdO3ZhciBsaW5lSGFzTm9uU3BhY2U9ZmFsc2U7dmFyIHNlY3Rpb25zPVtdO3ZhciB0b2tlbnM9W107dmFyIHNwYWNlcz1bXTt2YXIgaGFzVGFnPWZhbHNlO3ZhciBub25TcGFjZT1mYWxzZTt2YXIgaW5kZW50YXRpb249XCJcIjt2YXIgdGFnSW5kZXg9MDtmdW5jdGlvbiBzdHJpcFNwYWNlKCl7aWYoaGFzVGFnJiYhbm9uU3BhY2Upe3doaWxlKHNwYWNlcy5sZW5ndGgpZGVsZXRlIHRva2Vuc1tzcGFjZXMucG9wKCldfWVsc2V7c3BhY2VzPVtdfWhhc1RhZz1mYWxzZTtub25TcGFjZT1mYWxzZX12YXIgb3BlbmluZ1RhZ1JlLGNsb3NpbmdUYWdSZSxjbG9zaW5nQ3VybHlSZTtmdW5jdGlvbiBjb21waWxlVGFncyh0YWdzVG9Db21waWxlKXtpZih0eXBlb2YgdGFnc1RvQ29tcGlsZT09PVwic3RyaW5nXCIpdGFnc1RvQ29tcGlsZT10YWdzVG9Db21waWxlLnNwbGl0KHNwYWNlUmUsMik7aWYoIWlzQXJyYXkodGFnc1RvQ29tcGlsZSl8fHRhZ3NUb0NvbXBpbGUubGVuZ3RoIT09Mil0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHRhZ3M6IFwiK3RhZ3NUb0NvbXBpbGUpO29wZW5pbmdUYWdSZT1uZXcgUmVnRXhwKGVzY2FwZVJlZ0V4cCh0YWdzVG9Db21waWxlWzBdKStcIlxcXFxzKlwiKTtjbG9zaW5nVGFnUmU9bmV3IFJlZ0V4cChcIlxcXFxzKlwiK2VzY2FwZVJlZ0V4cCh0YWdzVG9Db21waWxlWzFdKSk7Y2xvc2luZ0N1cmx5UmU9bmV3IFJlZ0V4cChcIlxcXFxzKlwiK2VzY2FwZVJlZ0V4cChcIn1cIit0YWdzVG9Db21waWxlWzFdKSl9Y29tcGlsZVRhZ3ModGFnc3x8bXVzdGFjaGUudGFncyk7dmFyIHNjYW5uZXI9bmV3IFNjYW5uZXIodGVtcGxhdGUpO3ZhciBzdGFydCx0eXBlLHZhbHVlLGNocix0b2tlbixvcGVuU2VjdGlvbjt3aGlsZSghc2Nhbm5lci5lb3MoKSl7c3RhcnQ9c2Nhbm5lci5wb3M7dmFsdWU9c2Nhbm5lci5zY2FuVW50aWwob3BlbmluZ1RhZ1JlKTtpZih2YWx1ZSl7Zm9yKHZhciBpPTAsdmFsdWVMZW5ndGg9dmFsdWUubGVuZ3RoO2k8dmFsdWVMZW5ndGg7KytpKXtjaHI9dmFsdWUuY2hhckF0KGkpO2lmKGlzV2hpdGVzcGFjZShjaHIpKXtzcGFjZXMucHVzaCh0b2tlbnMubGVuZ3RoKTtpbmRlbnRhdGlvbis9Y2hyfWVsc2V7bm9uU3BhY2U9dHJ1ZTtsaW5lSGFzTm9uU3BhY2U9dHJ1ZTtpbmRlbnRhdGlvbis9XCIgXCJ9dG9rZW5zLnB1c2goW1widGV4dFwiLGNocixzdGFydCxzdGFydCsxXSk7c3RhcnQrPTE7aWYoY2hyPT09XCJcXG5cIil7c3RyaXBTcGFjZSgpO2luZGVudGF0aW9uPVwiXCI7dGFnSW5kZXg9MDtsaW5lSGFzTm9uU3BhY2U9ZmFsc2V9fX1pZighc2Nhbm5lci5zY2FuKG9wZW5pbmdUYWdSZSkpYnJlYWs7aGFzVGFnPXRydWU7dHlwZT1zY2FubmVyLnNjYW4odGFnUmUpfHxcIm5hbWVcIjtzY2FubmVyLnNjYW4od2hpdGVSZSk7aWYodHlwZT09PVwiPVwiKXt2YWx1ZT1zY2FubmVyLnNjYW5VbnRpbChlcXVhbHNSZSk7c2Nhbm5lci5zY2FuKGVxdWFsc1JlKTtzY2FubmVyLnNjYW5VbnRpbChjbG9zaW5nVGFnUmUpfWVsc2UgaWYodHlwZT09PVwie1wiKXt2YWx1ZT1zY2FubmVyLnNjYW5VbnRpbChjbG9zaW5nQ3VybHlSZSk7c2Nhbm5lci5zY2FuKGN1cmx5UmUpO3NjYW5uZXIuc2NhblVudGlsKGNsb3NpbmdUYWdSZSk7dHlwZT1cIiZcIn1lbHNle3ZhbHVlPXNjYW5uZXIuc2NhblVudGlsKGNsb3NpbmdUYWdSZSl9aWYoIXNjYW5uZXIuc2NhbihjbG9zaW5nVGFnUmUpKXRocm93IG5ldyBFcnJvcihcIlVuY2xvc2VkIHRhZyBhdCBcIitzY2FubmVyLnBvcyk7aWYodHlwZT09XCI+XCIpe3Rva2VuPVt0eXBlLHZhbHVlLHN0YXJ0LHNjYW5uZXIucG9zLGluZGVudGF0aW9uLHRhZ0luZGV4LGxpbmVIYXNOb25TcGFjZV19ZWxzZXt0b2tlbj1bdHlwZSx2YWx1ZSxzdGFydCxzY2FubmVyLnBvc119dGFnSW5kZXgrKzt0b2tlbnMucHVzaCh0b2tlbik7aWYodHlwZT09PVwiI1wifHx0eXBlPT09XCJeXCIpe3NlY3Rpb25zLnB1c2godG9rZW4pfWVsc2UgaWYodHlwZT09PVwiL1wiKXtvcGVuU2VjdGlvbj1zZWN0aW9ucy5wb3AoKTtpZighb3BlblNlY3Rpb24pdGhyb3cgbmV3IEVycm9yKCdVbm9wZW5lZCBzZWN0aW9uIFwiJyt2YWx1ZSsnXCIgYXQgJytzdGFydCk7aWYob3BlblNlY3Rpb25bMV0hPT12YWx1ZSl0aHJvdyBuZXcgRXJyb3IoJ1VuY2xvc2VkIHNlY3Rpb24gXCInK29wZW5TZWN0aW9uWzFdKydcIiBhdCAnK3N0YXJ0KX1lbHNlIGlmKHR5cGU9PT1cIm5hbWVcInx8dHlwZT09PVwie1wifHx0eXBlPT09XCImXCIpe25vblNwYWNlPXRydWV9ZWxzZSBpZih0eXBlPT09XCI9XCIpe2NvbXBpbGVUYWdzKHZhbHVlKX19c3RyaXBTcGFjZSgpO29wZW5TZWN0aW9uPXNlY3Rpb25zLnBvcCgpO2lmKG9wZW5TZWN0aW9uKXRocm93IG5ldyBFcnJvcignVW5jbG9zZWQgc2VjdGlvbiBcIicrb3BlblNlY3Rpb25bMV0rJ1wiIGF0ICcrc2Nhbm5lci5wb3MpO3JldHVybiBuZXN0VG9rZW5zKHNxdWFzaFRva2Vucyh0b2tlbnMpKX1mdW5jdGlvbiBzcXVhc2hUb2tlbnModG9rZW5zKXt2YXIgc3F1YXNoZWRUb2tlbnM9W107dmFyIHRva2VuLGxhc3RUb2tlbjtmb3IodmFyIGk9MCxudW1Ub2tlbnM9dG9rZW5zLmxlbmd0aDtpPG51bVRva2VuczsrK2kpe3Rva2VuPXRva2Vuc1tpXTtpZih0b2tlbil7aWYodG9rZW5bMF09PT1cInRleHRcIiYmbGFzdFRva2VuJiZsYXN0VG9rZW5bMF09PT1cInRleHRcIil7bGFzdFRva2VuWzFdKz10b2tlblsxXTtsYXN0VG9rZW5bM109dG9rZW5bM119ZWxzZXtzcXVhc2hlZFRva2Vucy5wdXNoKHRva2VuKTtsYXN0VG9rZW49dG9rZW59fX1yZXR1cm4gc3F1YXNoZWRUb2tlbnN9ZnVuY3Rpb24gbmVzdFRva2Vucyh0b2tlbnMpe3ZhciBuZXN0ZWRUb2tlbnM9W107dmFyIGNvbGxlY3Rvcj1uZXN0ZWRUb2tlbnM7dmFyIHNlY3Rpb25zPVtdO3ZhciB0b2tlbixzZWN0aW9uO2Zvcih2YXIgaT0wLG51bVRva2Vucz10b2tlbnMubGVuZ3RoO2k8bnVtVG9rZW5zOysraSl7dG9rZW49dG9rZW5zW2ldO3N3aXRjaCh0b2tlblswXSl7Y2FzZVwiI1wiOmNhc2VcIl5cIjpjb2xsZWN0b3IucHVzaCh0b2tlbik7c2VjdGlvbnMucHVzaCh0b2tlbik7Y29sbGVjdG9yPXRva2VuWzRdPVtdO2JyZWFrO2Nhc2VcIi9cIjpzZWN0aW9uPXNlY3Rpb25zLnBvcCgpO3NlY3Rpb25bNV09dG9rZW5bMl07Y29sbGVjdG9yPXNlY3Rpb25zLmxlbmd0aD4wP3NlY3Rpb25zW3NlY3Rpb25zLmxlbmd0aC0xXVs0XTpuZXN0ZWRUb2tlbnM7YnJlYWs7ZGVmYXVsdDpjb2xsZWN0b3IucHVzaCh0b2tlbil9fXJldHVybiBuZXN0ZWRUb2tlbnN9ZnVuY3Rpb24gU2Nhbm5lcihzdHJpbmcpe3RoaXMuc3RyaW5nPXN0cmluZzt0aGlzLnRhaWw9c3RyaW5nO3RoaXMucG9zPTB9U2Nhbm5lci5wcm90b3R5cGUuZW9zPWZ1bmN0aW9uIGVvcygpe3JldHVybiB0aGlzLnRhaWw9PT1cIlwifTtTY2FubmVyLnByb3RvdHlwZS5zY2FuPWZ1bmN0aW9uIHNjYW4ocmUpe3ZhciBtYXRjaD10aGlzLnRhaWwubWF0Y2gocmUpO2lmKCFtYXRjaHx8bWF0Y2guaW5kZXghPT0wKXJldHVyblwiXCI7dmFyIHN0cmluZz1tYXRjaFswXTt0aGlzLnRhaWw9dGhpcy50YWlsLnN1YnN0cmluZyhzdHJpbmcubGVuZ3RoKTt0aGlzLnBvcys9c3RyaW5nLmxlbmd0aDtyZXR1cm4gc3RyaW5nfTtTY2FubmVyLnByb3RvdHlwZS5zY2FuVW50aWw9ZnVuY3Rpb24gc2NhblVudGlsKHJlKXt2YXIgaW5kZXg9dGhpcy50YWlsLnNlYXJjaChyZSksbWF0Y2g7c3dpdGNoKGluZGV4KXtjYXNlLTE6bWF0Y2g9dGhpcy50YWlsO3RoaXMudGFpbD1cIlwiO2JyZWFrO2Nhc2UgMDptYXRjaD1cIlwiO2JyZWFrO2RlZmF1bHQ6bWF0Y2g9dGhpcy50YWlsLnN1YnN0cmluZygwLGluZGV4KTt0aGlzLnRhaWw9dGhpcy50YWlsLnN1YnN0cmluZyhpbmRleCl9dGhpcy5wb3MrPW1hdGNoLmxlbmd0aDtyZXR1cm4gbWF0Y2h9O2Z1bmN0aW9uIENvbnRleHQodmlldyxwYXJlbnRDb250ZXh0KXt0aGlzLnZpZXc9dmlldzt0aGlzLmNhY2hlPXtcIi5cIjp0aGlzLnZpZXd9O3RoaXMucGFyZW50PXBhcmVudENvbnRleHR9Q29udGV4dC5wcm90b3R5cGUucHVzaD1mdW5jdGlvbiBwdXNoKHZpZXcpe3JldHVybiBuZXcgQ29udGV4dCh2aWV3LHRoaXMpfTtDb250ZXh0LnByb3RvdHlwZS5sb29rdXA9ZnVuY3Rpb24gbG9va3VwKG5hbWUpe3ZhciBjYWNoZT10aGlzLmNhY2hlO3ZhciB2YWx1ZTtpZihjYWNoZS5oYXNPd25Qcm9wZXJ0eShuYW1lKSl7dmFsdWU9Y2FjaGVbbmFtZV19ZWxzZXt2YXIgY29udGV4dD10aGlzLGludGVybWVkaWF0ZVZhbHVlLG5hbWVzLGluZGV4LGxvb2t1cEhpdD1mYWxzZTt3aGlsZShjb250ZXh0KXtpZihuYW1lLmluZGV4T2YoXCIuXCIpPjApe2ludGVybWVkaWF0ZVZhbHVlPWNvbnRleHQudmlldztuYW1lcz1uYW1lLnNwbGl0KFwiLlwiKTtpbmRleD0wO3doaWxlKGludGVybWVkaWF0ZVZhbHVlIT1udWxsJiZpbmRleDxuYW1lcy5sZW5ndGgpe2lmKGluZGV4PT09bmFtZXMubGVuZ3RoLTEpbG9va3VwSGl0PWhhc1Byb3BlcnR5KGludGVybWVkaWF0ZVZhbHVlLG5hbWVzW2luZGV4XSl8fHByaW1pdGl2ZUhhc093blByb3BlcnR5KGludGVybWVkaWF0ZVZhbHVlLG5hbWVzW2luZGV4XSk7aW50ZXJtZWRpYXRlVmFsdWU9aW50ZXJtZWRpYXRlVmFsdWVbbmFtZXNbaW5kZXgrK11dfX1lbHNle2ludGVybWVkaWF0ZVZhbHVlPWNvbnRleHQudmlld1tuYW1lXTtsb29rdXBIaXQ9aGFzUHJvcGVydHkoY29udGV4dC52aWV3LG5hbWUpfWlmKGxvb2t1cEhpdCl7dmFsdWU9aW50ZXJtZWRpYXRlVmFsdWU7YnJlYWt9Y29udGV4dD1jb250ZXh0LnBhcmVudH1jYWNoZVtuYW1lXT12YWx1ZX1pZihpc0Z1bmN0aW9uKHZhbHVlKSl2YWx1ZT12YWx1ZS5jYWxsKHRoaXMudmlldyk7cmV0dXJuIHZhbHVlfTtmdW5jdGlvbiBXcml0ZXIoKXt0aGlzLmNhY2hlPXt9fVdyaXRlci5wcm90b3R5cGUuY2xlYXJDYWNoZT1mdW5jdGlvbiBjbGVhckNhY2hlKCl7dGhpcy5jYWNoZT17fX07V3JpdGVyLnByb3RvdHlwZS5wYXJzZT1mdW5jdGlvbiBwYXJzZSh0ZW1wbGF0ZSx0YWdzKXt2YXIgY2FjaGU9dGhpcy5jYWNoZTt2YXIgY2FjaGVLZXk9dGVtcGxhdGUrXCI6XCIrKHRhZ3N8fG11c3RhY2hlLnRhZ3MpLmpvaW4oXCI6XCIpO3ZhciB0b2tlbnM9Y2FjaGVbY2FjaGVLZXldO2lmKHRva2Vucz09bnVsbCl0b2tlbnM9Y2FjaGVbY2FjaGVLZXldPXBhcnNlVGVtcGxhdGUodGVtcGxhdGUsdGFncyk7cmV0dXJuIHRva2Vuc307V3JpdGVyLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24gcmVuZGVyKHRlbXBsYXRlLHZpZXcscGFydGlhbHMsdGFncyl7dmFyIHRva2Vucz10aGlzLnBhcnNlKHRlbXBsYXRlLHRhZ3MpO3ZhciBjb250ZXh0PXZpZXcgaW5zdGFuY2VvZiBDb250ZXh0P3ZpZXc6bmV3IENvbnRleHQodmlldyk7cmV0dXJuIHRoaXMucmVuZGVyVG9rZW5zKHRva2Vucyxjb250ZXh0LHBhcnRpYWxzLHRlbXBsYXRlLHRhZ3MpfTtXcml0ZXIucHJvdG90eXBlLnJlbmRlclRva2Vucz1mdW5jdGlvbiByZW5kZXJUb2tlbnModG9rZW5zLGNvbnRleHQscGFydGlhbHMsb3JpZ2luYWxUZW1wbGF0ZSx0YWdzKXt2YXIgYnVmZmVyPVwiXCI7dmFyIHRva2VuLHN5bWJvbCx2YWx1ZTtmb3IodmFyIGk9MCxudW1Ub2tlbnM9dG9rZW5zLmxlbmd0aDtpPG51bVRva2VuczsrK2kpe3ZhbHVlPXVuZGVmaW5lZDt0b2tlbj10b2tlbnNbaV07c3ltYm9sPXRva2VuWzBdO2lmKHN5bWJvbD09PVwiI1wiKXZhbHVlPXRoaXMucmVuZGVyU2VjdGlvbih0b2tlbixjb250ZXh0LHBhcnRpYWxzLG9yaWdpbmFsVGVtcGxhdGUpO2Vsc2UgaWYoc3ltYm9sPT09XCJeXCIpdmFsdWU9dGhpcy5yZW5kZXJJbnZlcnRlZCh0b2tlbixjb250ZXh0LHBhcnRpYWxzLG9yaWdpbmFsVGVtcGxhdGUpO2Vsc2UgaWYoc3ltYm9sPT09XCI+XCIpdmFsdWU9dGhpcy5yZW5kZXJQYXJ0aWFsKHRva2VuLGNvbnRleHQscGFydGlhbHMsdGFncyk7ZWxzZSBpZihzeW1ib2w9PT1cIiZcIil2YWx1ZT10aGlzLnVuZXNjYXBlZFZhbHVlKHRva2VuLGNvbnRleHQpO2Vsc2UgaWYoc3ltYm9sPT09XCJuYW1lXCIpdmFsdWU9dGhpcy5lc2NhcGVkVmFsdWUodG9rZW4sY29udGV4dCk7ZWxzZSBpZihzeW1ib2w9PT1cInRleHRcIil2YWx1ZT10aGlzLnJhd1ZhbHVlKHRva2VuKTtpZih2YWx1ZSE9PXVuZGVmaW5lZClidWZmZXIrPXZhbHVlfXJldHVybiBidWZmZXJ9O1dyaXRlci5wcm90b3R5cGUucmVuZGVyU2VjdGlvbj1mdW5jdGlvbiByZW5kZXJTZWN0aW9uKHRva2VuLGNvbnRleHQscGFydGlhbHMsb3JpZ2luYWxUZW1wbGF0ZSl7dmFyIHNlbGY9dGhpczt2YXIgYnVmZmVyPVwiXCI7dmFyIHZhbHVlPWNvbnRleHQubG9va3VwKHRva2VuWzFdKTtmdW5jdGlvbiBzdWJSZW5kZXIodGVtcGxhdGUpe3JldHVybiBzZWxmLnJlbmRlcih0ZW1wbGF0ZSxjb250ZXh0LHBhcnRpYWxzKX1pZighdmFsdWUpcmV0dXJuO2lmKGlzQXJyYXkodmFsdWUpKXtmb3IodmFyIGo9MCx2YWx1ZUxlbmd0aD12YWx1ZS5sZW5ndGg7ajx2YWx1ZUxlbmd0aDsrK2ope2J1ZmZlcis9dGhpcy5yZW5kZXJUb2tlbnModG9rZW5bNF0sY29udGV4dC5wdXNoKHZhbHVlW2pdKSxwYXJ0aWFscyxvcmlnaW5hbFRlbXBsYXRlKX19ZWxzZSBpZih0eXBlb2YgdmFsdWU9PT1cIm9iamVjdFwifHx0eXBlb2YgdmFsdWU9PT1cInN0cmluZ1wifHx0eXBlb2YgdmFsdWU9PT1cIm51bWJlclwiKXtidWZmZXIrPXRoaXMucmVuZGVyVG9rZW5zKHRva2VuWzRdLGNvbnRleHQucHVzaCh2YWx1ZSkscGFydGlhbHMsb3JpZ2luYWxUZW1wbGF0ZSl9ZWxzZSBpZihpc0Z1bmN0aW9uKHZhbHVlKSl7aWYodHlwZW9mIG9yaWdpbmFsVGVtcGxhdGUhPT1cInN0cmluZ1wiKXRocm93IG5ldyBFcnJvcihcIkNhbm5vdCB1c2UgaGlnaGVyLW9yZGVyIHNlY3Rpb25zIHdpdGhvdXQgdGhlIG9yaWdpbmFsIHRlbXBsYXRlXCIpO3ZhbHVlPXZhbHVlLmNhbGwoY29udGV4dC52aWV3LG9yaWdpbmFsVGVtcGxhdGUuc2xpY2UodG9rZW5bM10sdG9rZW5bNV0pLHN1YlJlbmRlcik7aWYodmFsdWUhPW51bGwpYnVmZmVyKz12YWx1ZX1lbHNle2J1ZmZlcis9dGhpcy5yZW5kZXJUb2tlbnModG9rZW5bNF0sY29udGV4dCxwYXJ0aWFscyxvcmlnaW5hbFRlbXBsYXRlKX1yZXR1cm4gYnVmZmVyfTtXcml0ZXIucHJvdG90eXBlLnJlbmRlckludmVydGVkPWZ1bmN0aW9uIHJlbmRlckludmVydGVkKHRva2VuLGNvbnRleHQscGFydGlhbHMsb3JpZ2luYWxUZW1wbGF0ZSl7dmFyIHZhbHVlPWNvbnRleHQubG9va3VwKHRva2VuWzFdKTtpZighdmFsdWV8fGlzQXJyYXkodmFsdWUpJiZ2YWx1ZS5sZW5ndGg9PT0wKXJldHVybiB0aGlzLnJlbmRlclRva2Vucyh0b2tlbls0XSxjb250ZXh0LHBhcnRpYWxzLG9yaWdpbmFsVGVtcGxhdGUpfTtXcml0ZXIucHJvdG90eXBlLmluZGVudFBhcnRpYWw9ZnVuY3Rpb24gaW5kZW50UGFydGlhbChwYXJ0aWFsLGluZGVudGF0aW9uLGxpbmVIYXNOb25TcGFjZSl7dmFyIGZpbHRlcmVkSW5kZW50YXRpb249aW5kZW50YXRpb24ucmVwbGFjZSgvW14gXFx0XS9nLFwiXCIpO3ZhciBwYXJ0aWFsQnlObD1wYXJ0aWFsLnNwbGl0KFwiXFxuXCIpO2Zvcih2YXIgaT0wO2k8cGFydGlhbEJ5TmwubGVuZ3RoO2krKyl7aWYocGFydGlhbEJ5TmxbaV0ubGVuZ3RoJiYoaT4wfHwhbGluZUhhc05vblNwYWNlKSl7cGFydGlhbEJ5TmxbaV09ZmlsdGVyZWRJbmRlbnRhdGlvbitwYXJ0aWFsQnlObFtpXX19cmV0dXJuIHBhcnRpYWxCeU5sLmpvaW4oXCJcXG5cIil9O1dyaXRlci5wcm90b3R5cGUucmVuZGVyUGFydGlhbD1mdW5jdGlvbiByZW5kZXJQYXJ0aWFsKHRva2VuLGNvbnRleHQscGFydGlhbHMsdGFncyl7aWYoIXBhcnRpYWxzKXJldHVybjt2YXIgdmFsdWU9aXNGdW5jdGlvbihwYXJ0aWFscyk/cGFydGlhbHModG9rZW5bMV0pOnBhcnRpYWxzW3Rva2VuWzFdXTtpZih2YWx1ZSE9bnVsbCl7dmFyIGxpbmVIYXNOb25TcGFjZT10b2tlbls2XTt2YXIgdGFnSW5kZXg9dG9rZW5bNV07dmFyIGluZGVudGF0aW9uPXRva2VuWzRdO3ZhciBpbmRlbnRlZFZhbHVlPXZhbHVlO2lmKHRhZ0luZGV4PT0wJiZpbmRlbnRhdGlvbil7aW5kZW50ZWRWYWx1ZT10aGlzLmluZGVudFBhcnRpYWwodmFsdWUsaW5kZW50YXRpb24sbGluZUhhc05vblNwYWNlKX1yZXR1cm4gdGhpcy5yZW5kZXJUb2tlbnModGhpcy5wYXJzZShpbmRlbnRlZFZhbHVlLHRhZ3MpLGNvbnRleHQscGFydGlhbHMsaW5kZW50ZWRWYWx1ZSl9fTtXcml0ZXIucHJvdG90eXBlLnVuZXNjYXBlZFZhbHVlPWZ1bmN0aW9uIHVuZXNjYXBlZFZhbHVlKHRva2VuLGNvbnRleHQpe3ZhciB2YWx1ZT1jb250ZXh0Lmxvb2t1cCh0b2tlblsxXSk7aWYodmFsdWUhPW51bGwpcmV0dXJuIHZhbHVlfTtXcml0ZXIucHJvdG90eXBlLmVzY2FwZWRWYWx1ZT1mdW5jdGlvbiBlc2NhcGVkVmFsdWUodG9rZW4sY29udGV4dCl7dmFyIHZhbHVlPWNvbnRleHQubG9va3VwKHRva2VuWzFdKTtpZih2YWx1ZSE9bnVsbClyZXR1cm4gbXVzdGFjaGUuZXNjYXBlKHZhbHVlKX07V3JpdGVyLnByb3RvdHlwZS5yYXdWYWx1ZT1mdW5jdGlvbiByYXdWYWx1ZSh0b2tlbil7cmV0dXJuIHRva2VuWzFdfTttdXN0YWNoZS5uYW1lPVwibXVzdGFjaGUuanNcIjttdXN0YWNoZS52ZXJzaW9uPVwiMy4xLjBcIjttdXN0YWNoZS50YWdzPVtcInt7XCIsXCJ9fVwiXTt2YXIgZGVmYXVsdFdyaXRlcj1uZXcgV3JpdGVyO211c3RhY2hlLmNsZWFyQ2FjaGU9ZnVuY3Rpb24gY2xlYXJDYWNoZSgpe3JldHVybiBkZWZhdWx0V3JpdGVyLmNsZWFyQ2FjaGUoKX07bXVzdGFjaGUucGFyc2U9ZnVuY3Rpb24gcGFyc2UodGVtcGxhdGUsdGFncyl7cmV0dXJuIGRlZmF1bHRXcml0ZXIucGFyc2UodGVtcGxhdGUsdGFncyl9O211c3RhY2hlLnJlbmRlcj1mdW5jdGlvbiByZW5kZXIodGVtcGxhdGUsdmlldyxwYXJ0aWFscyx0YWdzKXtpZih0eXBlb2YgdGVtcGxhdGUhPT1cInN0cmluZ1wiKXt0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIHRlbXBsYXRlISBUZW1wbGF0ZSBzaG91bGQgYmUgYSBcInN0cmluZ1wiICcrJ2J1dCBcIicrdHlwZVN0cih0ZW1wbGF0ZSkrJ1wiIHdhcyBnaXZlbiBhcyB0aGUgZmlyc3QgJytcImFyZ3VtZW50IGZvciBtdXN0YWNoZSNyZW5kZXIodGVtcGxhdGUsIHZpZXcsIHBhcnRpYWxzKVwiKX1yZXR1cm4gZGVmYXVsdFdyaXRlci5yZW5kZXIodGVtcGxhdGUsdmlldyxwYXJ0aWFscyx0YWdzKX07bXVzdGFjaGUudG9faHRtbD1mdW5jdGlvbiB0b19odG1sKHRlbXBsYXRlLHZpZXcscGFydGlhbHMsc2VuZCl7dmFyIHJlc3VsdD1tdXN0YWNoZS5yZW5kZXIodGVtcGxhdGUsdmlldyxwYXJ0aWFscyk7aWYoaXNGdW5jdGlvbihzZW5kKSl7c2VuZChyZXN1bHQpfWVsc2V7cmV0dXJuIHJlc3VsdH19O211c3RhY2hlLmVzY2FwZT1lc2NhcGVIdG1sO211c3RhY2hlLlNjYW5uZXI9U2Nhbm5lcjttdXN0YWNoZS5Db250ZXh0PUNvbnRleHQ7bXVzdGFjaGUuV3JpdGVyPVdyaXRlcjtyZXR1cm4gbXVzdGFjaGV9KTsiLCIvKlxuIDBCU0RcbiovXG4oZnVuY3Rpb24oRix5KXtcImZ1bmN0aW9uXCI9PT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZSh5KTpcIm9iamVjdFwiPT09dHlwZW9mIGV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9eSgpOkYucGlja21ldXA9eSgpfSkodGhpcyxmdW5jdGlvbigpe2Z1bmN0aW9uIEYoYSxjLGIpe2I9Ynx8W107aWYoYSBpbnN0YW5jZW9mIEVsZW1lbnQpYy5hcHBseShjLFthXS5jb25jYXQoYikpO2Vsc2V7dmFyIGQ7dmFyIGU9YS5sZW5ndGg7Zm9yKGQ9MDtkPGU7KytkKWMuYXBwbHkoYyxbYVtkXV0uY29uY2F0KGIpKX19ZnVuY3Rpb24geShhKXtGKGEsZnVuY3Rpb24oYSl7YS5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGEpfSl9ZnVuY3Rpb24gSihhLGMpe2RvIGE9YS5wYXJlbnRFbGVtZW50O3doaWxlKGEmJiFCKGEsYykpO3JldHVybiBhfWZ1bmN0aW9uIEIoYSxjKXtyZXR1cm4oYS5tYXRjaGVzfHxhLndlYmtpdE1hdGNoZXNTZWxlY3Rvcnx8YS5tc01hdGNoZXNTZWxlY3RvcikuY2FsbChhLFxuYyl9ZnVuY3Rpb24gayhhLGMpe3JldHVybiBhJiZhLmNsYXNzTGlzdC5jb250YWlucyhjKX1mdW5jdGlvbiBsKGEsYyl7YS5jbGFzc0xpc3QuYWRkKGMpfWZ1bmN0aW9uIHEoYSxjLGIsZCl7aWYoLTEhPT1iLmluZGV4T2YoXCIgXCIpKXtiPWIuc3BsaXQoXCIgXCIpO3ZhciBlPWIubGVuZ3RoLGg7Zm9yKGg9MDtoPGU7KytoKXEoYSxjLGJbaF0sZCl9ZWxzZSBhLl9fcGlja21ldXAuZXZlbnRzLnB1c2goW2MsYixkXSksYy5hZGRFdmVudExpc3RlbmVyKGIsZCl9ZnVuY3Rpb24geihhLGMsYixkKXt2YXIgZTtpZihiJiYtMSE9PWIuaW5kZXhPZihcIiBcIikpe3ZhciBoPWIuc3BsaXQoXCIgXCIpO3ZhciBsPWgubGVuZ3RoO2ZvcihlPTA7ZTxsOysrZSl6KGEsYyxoW2VdLGQpfWVsc2UgZm9yKGg9YS5fX3BpY2ttZXVwLmV2ZW50cyxsPWgubGVuZ3RoLGU9MDtlPGw7KytlKWMmJmMhPT1oW2VdWzBdfHxiJiZiIT09aFtlXVsxXXx8ZCYmZCE9PWhbZV1bMl18fGhbZV1bMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihoW2VdWzFdLFxuaFtlXVsyXSl9ZnVuY3Rpb24gTShhKXthPWEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7cmV0dXJue3RvcDphLnRvcCt3aW5kb3cucGFnZVlPZmZzZXQtZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFRvcCxsZWZ0OmEubGVmdCt3aW5kb3cucGFnZVhPZmZzZXQtZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudExlZnR9fWZ1bmN0aW9uIEMoYSxjLGIpe3ZhciBkPWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiRXZlbnRcIik7YiYmKGQuZGV0YWlsPWIpO2QuaW5pdEV2ZW50KFwicGlja21ldXAtXCIrYywhMSwhMCk7cmV0dXJuIGEuZGlzcGF0Y2hFdmVudChkKX1mdW5jdGlvbiBLKGEpe2E9bmV3IERhdGUoYSk7Zm9yKHZhciBjPTI4LGI9YS5nZXRNb250aCgpO2EuZ2V0TW9udGgoKT09PWI7KSsrYyxhLnNldERhdGUoYyk7cmV0dXJuIGMtMX1mdW5jdGlvbiBBKGEsYyl7YS5zZXREYXRlKGEuZ2V0RGF0ZSgpK2MpfWZ1bmN0aW9uIHAoYSxjKXt2YXIgYj1hLmdldERhdGUoKTthLnNldERhdGUoMSk7XG5hLnNldE1vbnRoKGEuZ2V0TW9udGgoKStjKTthLnNldERhdGUoTWF0aC5taW4oYixLKGEpKSl9ZnVuY3Rpb24gdShhLGMpe3ZhciBiPWEuZ2V0RGF0ZSgpO2Euc2V0RGF0ZSgxKTthLnNldEZ1bGxZZWFyKGEuZ2V0RnVsbFllYXIoKStjKTthLnNldERhdGUoTWF0aC5taW4oYixLKGEpKSl9ZnVuY3Rpb24gTihhKXt2YXIgYz1hLl9fcGlja21ldXAuZWxlbWVudCxiPWEuX19waWNrbWV1cC5vcHRpb25zLGQ9TWF0aC5mbG9vcihiLmNhbGVuZGFycy8yKSxlPWIuZGF0ZSxoPWIuY3VycmVudCxtPWIubWluP25ldyBEYXRlKGIubWluKTpudWxsLHY9Yi5tYXg/bmV3IERhdGUoYi5tYXgpOm51bGw7bSYmKG0uc2V0RGF0ZSgxKSxwKG0sMSksQShtLC0xKSk7diYmKHYuc2V0RGF0ZSgxKSxwKHYsMSksQSh2LC0xKSk7eShBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChjLnF1ZXJ5U2VsZWN0b3JBbGwoXCIucG11LWluc3RhbmNlID4gOm5vdChuYXYpXCIpKSk7Zm9yKHZhciB3PTA7dzxiLmNhbGVuZGFyczt3Kyspe3ZhciBmPVxubmV3IERhdGUoaCk7eChmKTt2YXIgbj1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChjLnF1ZXJ5U2VsZWN0b3JBbGwoXCIucG11LWluc3RhbmNlXCIpKVt3XTtpZihrKGMsXCJwbXUtdmlldy15ZWFyc1wiKSl7dShmLDEyKih3LWQpKTt2YXIgRz1mLmdldEZ1bGxZZWFyKCktNitcIiAtIFwiKyhmLmdldEZ1bGxZZWFyKCkrNSl9ZWxzZSBrKGMsXCJwbXUtdmlldy1tb250aHNcIik/KHUoZix3LWQpLEc9Zi5nZXRGdWxsWWVhcigpKTprKGMsXCJwbXUtdmlldy1kYXlzXCIpJiYocChmLHctZCksRz1cImZ1bmN0aW9uXCI9PT10eXBlb2YgYi50aXRsZV9mb3JtYXQ/Yi50aXRsZV9mb3JtYXQoZixiLmxvY2FsZXNbYi5sb2NhbGVdKTpEKGYsYi50aXRsZV9mb3JtYXQsYi5sb2NhbGVzW2IubG9jYWxlXSkpO2lmKCFyJiZ2KXt2YXIgcj1uZXcgRGF0ZShmKTtiLnNlbGVjdF9kYXk/cChyLGIuY2FsZW5kYXJzLTEpOmIuc2VsZWN0X21vbnRoP3UocixiLmNhbGVuZGFycy0xKTp1KHIsMTIqKGIuY2FsZW5kYXJzLTEpKTtcbmlmKHI+dil7LS13O3AoaCwtMSk7cj12b2lkIDA7Y29udGludWV9fXI9bmV3IERhdGUoZik7aWYoIWcpe3ZhciBnPW5ldyBEYXRlKGYpO2cuc2V0RGF0ZSgxKTtwKGcsMSk7QShnLC0xKTtpZihtJiZtPmcpey0tdztwKGgsMSk7Zz12b2lkIDA7Y29udGludWV9fW4ucXVlcnlTZWxlY3RvcihcIi5wbXUtbW9udGhcIikuaW5uZXJIVE1MPUc7dmFyIHE9ZnVuY3Rpb24oYSl7cmV0dXJuXCJyYW5nZVwiPT09Yi5tb2RlJiZhPj0obmV3IERhdGUoZVswXSkpLmdldEZ1bGxZZWFyKCkmJmE8PShuZXcgRGF0ZShlWzFdKSkuZ2V0RnVsbFllYXIoKXx8XCJtdWx0aXBsZVwiPT09Yi5tb2RlJiYtMSE9PWUucmVkdWNlKGZ1bmN0aW9uKGEsYil7YS5wdXNoKChuZXcgRGF0ZShiKSkuZ2V0RnVsbFllYXIoKSk7cmV0dXJuIGF9LFtdKS5pbmRleE9mKGEpfHwobmV3IERhdGUoZSkpLmdldEZ1bGxZZWFyKCk9PT1hfSx0PWZ1bmN0aW9uKGEsYyl7dmFyIGQ9KG5ldyBEYXRlKGVbMF0pKS5nZXRGdWxsWWVhcigpLGY9KG5ldyBEYXRlKGVbMV0pKS5nZXRGdWxsWWVhcigpLFxuaD0obmV3IERhdGUoZVswXSkpLmdldE1vbnRoKCksZz0obmV3IERhdGUoZVsxXSkpLmdldE1vbnRoKCk7cmV0dXJuXCJyYW5nZVwiPT09Yi5tb2RlJiYoYT5kJiZhPGZ8fGE+ZCYmYT09PWYmJmM8PWd8fGE9PT1kJiZhPGYmJmM+PWh8fGE9PT1kJiZhPT09ZiYmYz49aCYmYzw9Zyl8fFwibXVsdGlwbGVcIj09PWIubW9kZSYmLTEhPT1lLnJlZHVjZShmdW5jdGlvbihhLGIpe2I9bmV3IERhdGUoYik7YS5wdXNoKGIuZ2V0RnVsbFllYXIoKStcIi1cIitiLmdldE1vbnRoKCkpO3JldHVybiBhfSxbXSkuaW5kZXhPZihhK1wiLVwiK2MpfHwobmV3IERhdGUoZSkpLmdldEZ1bGxZZWFyKCk9PT1hJiYobmV3IERhdGUoZSkpLmdldE1vbnRoKCk9PT1jfTsoZnVuY3Rpb24oKXt2YXIgYT1bXSxjPWYuZ2V0RnVsbFllYXIoKS02LGQ9KG5ldyBEYXRlKGIubWluKSkuZ2V0RnVsbFllYXIoKSxlPShuZXcgRGF0ZShiLm1heCkpLmdldEZ1bGxZZWFyKCksaDtmb3IoaD0wOzEyPmg7KytoKXt2YXIgZz1jK2g7dmFyIG09XG5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO20udGV4dENvbnRlbnQ9ZzttLl9fcGlja21ldXBfeWVhcj1nO2IubWluJiZnPGR8fGIubWF4JiZnPmU/bChtLFwicG11LWRpc2FibGVkXCIpOnEoZykmJmwobSxcInBtdS1zZWxlY3RlZFwiKTthLnB1c2gobSl9bi5hcHBlbmRDaGlsZChiLmluc3RhbmNlX2NvbnRlbnRfdGVtcGxhdGUoYSxcInBtdS15ZWFyc1wiKSl9KSgpOyhmdW5jdGlvbigpe3ZhciBhPVtdLGM9Zi5nZXRGdWxsWWVhcigpLGQ9KG5ldyBEYXRlKGIubWluKSkuZ2V0RnVsbFllYXIoKSxlPShuZXcgRGF0ZShiLm1pbikpLmdldE1vbnRoKCksZz0obmV3IERhdGUoYi5tYXgpKS5nZXRGdWxsWWVhcigpLGg9KG5ldyBEYXRlKGIubWF4KSkuZ2V0TW9udGgoKSxtO2ZvcihtPTA7MTI+bTsrK20pe3ZhciBrPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ay50ZXh0Q29udGVudD1iLmxvY2FsZXNbYi5sb2NhbGVdLm1vbnRoc1Nob3J0W21dO2suX19waWNrbWV1cF9tb250aD1tO1xuay5fX3BpY2ttZXVwX3llYXI9YztiLm1pbiYmKGM8ZHx8bTxlJiZjPT09ZCl8fGIubWF4JiYoYz5nfHxtPmgmJmM+PWcpP2woayxcInBtdS1kaXNhYmxlZFwiKTp0KGMsbSkmJmwoayxcInBtdS1zZWxlY3RlZFwiKTthLnB1c2goayl9bi5hcHBlbmRDaGlsZChiLmluc3RhbmNlX2NvbnRlbnRfdGVtcGxhdGUoYSxcInBtdS1tb250aHNcIikpfSkoKTsoZnVuY3Rpb24oKXt2YXIgYT1bXSxjPWYuZ2V0TW9udGgoKSxkPXgobmV3IERhdGUpLnZhbHVlT2YoKSxlOyhmdW5jdGlvbigpe2Yuc2V0RGF0ZSgxKTt2YXIgYT0oZi5nZXREYXkoKS1iLmZpcnN0X2RheSklNztBKGYsLShhKygwPmE/NzowKSkpfSkoKTtmb3IoZT0wOzQyPmU7KytlKXt2YXIgZz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2cudGV4dENvbnRlbnQ9Zi5nZXREYXRlKCk7Zy5fX3BpY2ttZXVwX2RheT1mLmdldERhdGUoKTtnLl9fcGlja21ldXBfbW9udGg9Zi5nZXRNb250aCgpO2cuX19waWNrbWV1cF95ZWFyPWYuZ2V0RnVsbFllYXIoKTtcbmMhPT1mLmdldE1vbnRoKCkmJmwoZyxcInBtdS1ub3QtaW4tbW9udGhcIik7MD09PWYuZ2V0RGF5KCk/bChnLFwicG11LXN1bmRheVwiKTo2PT09Zi5nZXREYXkoKSYmbChnLFwicG11LXNhdHVyZGF5XCIpO3ZhciBoPWIucmVuZGVyKG5ldyBEYXRlKGYpKXx8e307dmFyIG09eChuZXcgRGF0ZShmKSkudmFsdWVPZigpO3ZhciBrPWIubWluJiZiLm1pbj5mfHxiLm1heCYmYi5tYXg8Zjt2YXIgdj1iLmRhdGUudmFsdWVPZigpPT09bXx8Yi5kYXRlIGluc3RhbmNlb2YgQXJyYXkmJmIuZGF0ZS5yZWR1Y2UoZnVuY3Rpb24oYSxiKXtyZXR1cm4gYXx8bT09PWIudmFsdWVPZigpfSwhMSl8fFwicmFuZ2VcIj09PWIubW9kZSYmbT49Yi5kYXRlWzBdJiZtPD1iLmRhdGVbMV07aC5kaXNhYmxlZHx8IShcImRpc2FibGVkXCJpbiBoKSYmaz9sKGcsXCJwbXUtZGlzYWJsZWRcIik6KGguc2VsZWN0ZWR8fCEoXCJzZWxlY3RlZFwiaW4gaCkmJnYpJiZsKGcsXCJwbXUtc2VsZWN0ZWRcIik7bT09PWQmJmwoZyxcInBtdS10b2RheVwiKTtcbmguY2xhc3NfbmFtZSYmaC5jbGFzc19uYW1lLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGwuYmluZChnLGcpKTthLnB1c2goZyk7QShmLDEpfW4uYXBwZW5kQ2hpbGQoYi5pbnN0YW5jZV9jb250ZW50X3RlbXBsYXRlKGEsXCJwbXUtZGF5c1wiKSl9KSgpfWcuc2V0RGF0ZSgxKTtyLnNldERhdGUoMSk7cChyLDEpO0EociwtMSk7ZD1jLnF1ZXJ5U2VsZWN0b3IoXCIucG11LXByZXZcIik7Yz1jLnF1ZXJ5U2VsZWN0b3IoXCIucG11LW5leHRcIik7ZCYmKGQuc3R5bGUudmlzaWJpbGl0eT1iLm1pbiYmYi5taW4+PWc/XCJoaWRkZW5cIjpcInZpc2libGVcIik7YyYmKGMuc3R5bGUudmlzaWJpbGl0eT1iLm1heCYmYi5tYXg8PXI/XCJoaWRkZW5cIjpcInZpc2libGVcIik7QyhhLFwiZmlsbFwiKX1mdW5jdGlvbiB0KGEsYyl7dmFyIGI9Yy5mb3JtYXQsZD1jLnNlcGFyYXRvcixlPWMubG9jYWxlc1tjLmxvY2FsZV07aWYoYSBpbnN0YW5jZW9mIERhdGV8fFwibnVtYmVyXCI9PT10eXBlb2YgYSlyZXR1cm4geChuZXcgRGF0ZShhKSk7XG5pZighYSlyZXR1cm4geChuZXcgRGF0ZSk7aWYoYSBpbnN0YW5jZW9mIEFycmF5KXthPWEuc2xpY2UoKTtmb3IoYj0wO2I8YS5sZW5ndGg7KytiKWFbYl09dChhW2JdLGMpO3JldHVybiBhfWQ9YS5zcGxpdChkKTtpZigxPGQubGVuZ3RoKXJldHVybiBkLmZvckVhY2goZnVuY3Rpb24oYSxiLGQpe2RbYl09dChhLnRyaW0oKSxjKX0pLGQ7ZD1bXS5jb25jYXQoZS5kYXlzU2hvcnQsZS5kYXlzTWluLGUuZGF5cyxlLm1vbnRoc1Nob3J0LGUubW9udGhzKTtkPWQubWFwKGZ1bmN0aW9uKGEpe3JldHVyblwiKFwiK2ErXCIpXCJ9KTtkPW5ldyBSZWdFeHAoXCJbXjAtOWEtekEtWlwiK2Quam9pbihcIlwiKStcIl0rXCIpO2E9YS5zcGxpdChkKTtkPWIuc3BsaXQoZCk7dmFyIGg9bmV3IERhdGU7Zm9yKGI9MDtiPGEubGVuZ3RoO2IrKylzd2l0Y2goZFtiXSl7Y2FzZSBcImJcIjp2YXIgbT1lLm1vbnRoc1Nob3J0LmluZGV4T2YoYVtiXSk7YnJlYWs7Y2FzZSBcIkJcIjptPWUubW9udGhzLmluZGV4T2YoYVtiXSk7YnJlYWs7XG5jYXNlIFwiZFwiOmNhc2UgXCJlXCI6dmFyIGw9cGFyc2VJbnQoYVtiXSwxMCk7YnJlYWs7Y2FzZSBcIm1cIjptPXBhcnNlSW50KGFbYl0sMTApLTE7YnJlYWs7Y2FzZSBcIllcIjpjYXNlIFwieVwiOnZhciBrPXBhcnNlSW50KGFbYl0sMTApO2srPTEwMDxrPzA6Mjk+az8yRTM6MTkwMDticmVhaztjYXNlIFwiSFwiOmNhc2UgXCJJXCI6Y2FzZSBcImtcIjpjYXNlIFwibFwiOnZhciBmPXBhcnNlSW50KGFbYl0sMTApO2JyZWFrO2Nhc2UgXCJQXCI6Y2FzZSBcInBcIjovcG0vaS50ZXN0KGFbYl0pJiYxMj5mP2YrPTEyOi9hbS9pLnRlc3QoYVtiXSkmJjEyPD1mJiYoZi09MTIpO2JyZWFrO2Nhc2UgXCJNXCI6dmFyIG49cGFyc2VJbnQoYVtiXSwxMCl9ZT1uZXcgRGF0ZSh2b2lkIDA9PT1rP2guZ2V0RnVsbFllYXIoKTprLHZvaWQgMD09PW0/aC5nZXRNb250aCgpOm0sdm9pZCAwPT09bD9oLmdldERhdGUoKTpsLHZvaWQgMD09PWY/aC5nZXRIb3VycygpOmYsdm9pZCAwPT09bj9oLmdldE1pbnV0ZXMoKTpuLDApO2lzTmFOKDEqZSkmJlxuKGU9bmV3IERhdGUpO3JldHVybiB4KGUpfWZ1bmN0aW9uIHgoYSl7YS5zZXRIb3VycygwLDAsMCwwKTtyZXR1cm4gYX1mdW5jdGlvbiBEKGEsYyxiKXt2YXIgZD1hLmdldE1vbnRoKCksZT1hLmdldERhdGUoKSxoPWEuZ2V0RnVsbFllYXIoKSxtPWEuZ2V0RGF5KCksaz1hLmdldEhvdXJzKCksbD0xMjw9ayxmPWw/ay0xMjprO3ZhciBuPW5ldyBEYXRlKGEuZ2V0RnVsbFllYXIoKSxhLmdldE1vbnRoKCksYS5nZXREYXRlKCksMCwwLDApO3ZhciBwPW5ldyBEYXRlKGEuZ2V0RnVsbFllYXIoKSwwLDAsMCwwLDApO249TWF0aC5mbG9vcigobi1wKS84NjRFNSk7MD09PWYmJihmPTEyKTtwPWEuZ2V0TWludXRlcygpO3ZhciByPWEuZ2V0U2Vjb25kcygpO2M9Yy5zcGxpdChcIlwiKTtmb3IodmFyIGcscT0wO3E8Yy5sZW5ndGg7cSsrKXtnPWNbcV07c3dpdGNoKGcpe2Nhc2UgXCJhXCI6Zz1iLmRheXNTaG9ydFttXTticmVhaztjYXNlIFwiQVwiOmc9Yi5kYXlzW21dO2JyZWFrO2Nhc2UgXCJiXCI6Zz1iLm1vbnRoc1Nob3J0W2RdO1xuYnJlYWs7Y2FzZSBcIkJcIjpnPWIubW9udGhzW2RdO2JyZWFrO2Nhc2UgXCJDXCI6Zz0xK01hdGguZmxvb3IoaC8xMDApO2JyZWFrO2Nhc2UgXCJkXCI6Zz0xMD5lP1wiMFwiK2U6ZTticmVhaztjYXNlIFwiZVwiOmc9ZTticmVhaztjYXNlIFwiSFwiOmc9MTA+az9cIjBcIitrOms7YnJlYWs7Y2FzZSBcIklcIjpnPTEwPmY/XCIwXCIrZjpmO2JyZWFrO2Nhc2UgXCJqXCI6Zz0xMDA+bj8xMD5uP1wiMDBcIituOlwiMFwiK246bjticmVhaztjYXNlIFwia1wiOmc9azticmVhaztjYXNlIFwibFwiOmc9ZjticmVhaztjYXNlIFwibVwiOmc9OT5kP1wiMFwiKygxK2QpOjErZDticmVhaztjYXNlIFwiTVwiOmc9MTA+cD9cIjBcIitwOnA7YnJlYWs7Y2FzZSBcInBcIjpjYXNlIFwiUFwiOmc9bD9cIlBNXCI6XCJBTVwiO2JyZWFrO2Nhc2UgXCJzXCI6Zz1NYXRoLmZsb29yKGEuZ2V0VGltZSgpLzFFMyk7YnJlYWs7Y2FzZSBcIlNcIjpnPTEwPnI/XCIwXCIrcjpyO2JyZWFrO2Nhc2UgXCJ1XCI6Zz1tKzE7YnJlYWs7Y2FzZSBcIndcIjpnPW07YnJlYWs7Y2FzZSBcInlcIjpnPShcIlwiK2gpLnN1YnN0cigyLFxuMik7YnJlYWs7Y2FzZSBcIllcIjpnPWh9Y1txXT1nfXJldHVybiBjLmpvaW4oXCJcIil9ZnVuY3Rpb24gTyhhLGMpe3ZhciBiPWEuX19waWNrbWV1cC5vcHRpb25zLGQ7eChjKTthOnN3aXRjaChiLm1vZGUpe2Nhc2UgXCJtdWx0aXBsZVwiOnZhciBlPWMudmFsdWVPZigpO2ZvcihkPTA7ZDxiLmRhdGUubGVuZ3RoOysrZClpZihiLmRhdGVbZF0udmFsdWVPZigpPT09ZSl7Yi5kYXRlLnNwbGljZShkLDEpO2JyZWFrIGF9Yi5kYXRlLnB1c2goYyk7YnJlYWs7Y2FzZSBcInJhbmdlXCI6Yi5sYXN0U2VsfHwoYi5kYXRlWzBdPWMpO2M8PWIuZGF0ZVswXT8oYi5kYXRlWzFdPWIuZGF0ZVswXSxiLmRhdGVbMF09Yyk6Yi5kYXRlWzFdPWM7Yi5sYXN0U2VsPSFiLmxhc3RTZWw7YnJlYWs7ZGVmYXVsdDpiLmRhdGU9Yy52YWx1ZU9mKCl9Yz1IKGIpO0IoYSxcImlucHV0XCIpJiYoYS52YWx1ZT1cInNpbmdsZVwiPT09Yi5tb2RlP2MuZm9ybWF0dGVkX2RhdGU6Yy5mb3JtYXR0ZWRfZGF0ZS5qb2luKGIuc2VwYXJhdG9yKSk7XG5DKGEsXCJjaGFuZ2VcIixjKTtiLmZsYXR8fCFiLmhpZGVfb25fc2VsZWN0fHxcInJhbmdlXCI9PT1iLm1vZGUmJmIubGFzdFNlbHx8Yi5ib3VuZC5oaWRlKCl9ZnVuY3Rpb24gUChhLGMpe3ZhciBiPWMudGFyZ2V0O2soYixcInBtdS1idXR0b25cIil8fChiPUooYixcIi5wbXUtYnV0dG9uXCIpKTtpZighayhiLFwicG11LWJ1dHRvblwiKXx8ayhiLFwicG11LWRpc2FibGVkXCIpKXJldHVybiExO2MucHJldmVudERlZmF1bHQoKTtjLnN0b3BQcm9wYWdhdGlvbigpO2E9YS5fX3BpY2ttZXVwLm9wdGlvbnM7dmFyIGQ9SihiLFwiLnBtdS1pbnN0YW5jZVwiKTtjPWQucGFyZW50RWxlbWVudDtkPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGMucXVlcnlTZWxlY3RvckFsbChcIi5wbXUtaW5zdGFuY2VcIikpLmluZGV4T2YoZCk7QihiLnBhcmVudEVsZW1lbnQsXCJuYXZcIik/ayhiLFwicG11LW1vbnRoXCIpPyhwKGEuY3VycmVudCxkLU1hdGguZmxvb3IoYS5jYWxlbmRhcnMvMikpLGsoYyxcInBtdS12aWV3LXllYXJzXCIpP1xuKGEuY3VycmVudD1cInNpbmdsZVwiIT09YS5tb2RlP25ldyBEYXRlKGEuZGF0ZVthLmRhdGUubGVuZ3RoLTFdKTpuZXcgRGF0ZShhLmRhdGUpLGEuc2VsZWN0X2RheT8oYy5jbGFzc0xpc3QucmVtb3ZlKFwicG11LXZpZXcteWVhcnNcIiksbChjLFwicG11LXZpZXctZGF5c1wiKSk6YS5zZWxlY3RfbW9udGgmJihjLmNsYXNzTGlzdC5yZW1vdmUoXCJwbXUtdmlldy15ZWFyc1wiKSxsKGMsXCJwbXUtdmlldy1tb250aHNcIikpKTprKGMsXCJwbXUtdmlldy1tb250aHNcIik/YS5zZWxlY3RfeWVhcj8oYy5jbGFzc0xpc3QucmVtb3ZlKFwicG11LXZpZXctbW9udGhzXCIpLGwoYyxcInBtdS12aWV3LXllYXJzXCIpKTphLnNlbGVjdF9kYXkmJihjLmNsYXNzTGlzdC5yZW1vdmUoXCJwbXUtdmlldy1tb250aHNcIiksbChjLFwicG11LXZpZXctZGF5c1wiKSk6ayhjLFwicG11LXZpZXctZGF5c1wiKSYmKGEuc2VsZWN0X21vbnRoPyhjLmNsYXNzTGlzdC5yZW1vdmUoXCJwbXUtdmlldy1kYXlzXCIpLGwoYyxcInBtdS12aWV3LW1vbnRoc1wiKSk6XG5hLnNlbGVjdF95ZWFyJiYoYy5jbGFzc0xpc3QucmVtb3ZlKFwicG11LXZpZXctZGF5c1wiKSxsKGMsXCJwbXUtdmlldy15ZWFyc1wiKSkpKTprKGIsXCJwbXUtcHJldlwiKT9hLmJvdW5kLnByZXYoITEpOmEuYm91bmQubmV4dCghMSk6ayhjLFwicG11LXZpZXcteWVhcnNcIik/KGEuY3VycmVudC5zZXRGdWxsWWVhcihiLl9fcGlja21ldXBfeWVhciksYS5zZWxlY3RfbW9udGg/KGMuY2xhc3NMaXN0LnJlbW92ZShcInBtdS12aWV3LXllYXJzXCIpLGwoYyxcInBtdS12aWV3LW1vbnRoc1wiKSk6YS5zZWxlY3RfZGF5PyhjLmNsYXNzTGlzdC5yZW1vdmUoXCJwbXUtdmlldy15ZWFyc1wiKSxsKGMsXCJwbXUtdmlldy1kYXlzXCIpKTphLmJvdW5kLnVwZGF0ZV9kYXRlKGEuY3VycmVudCkpOmsoYyxcInBtdS12aWV3LW1vbnRoc1wiKT8oYS5jdXJyZW50LnNldE1vbnRoKGIuX19waWNrbWV1cF9tb250aCksYS5jdXJyZW50LnNldEZ1bGxZZWFyKGIuX19waWNrbWV1cF95ZWFyKSxhLnNlbGVjdF9kYXk/KGMuY2xhc3NMaXN0LnJlbW92ZShcInBtdS12aWV3LW1vbnRoc1wiKSxcbmwoYyxcInBtdS12aWV3LWRheXNcIikpOmEuYm91bmQudXBkYXRlX2RhdGUoYS5jdXJyZW50KSxwKGEuY3VycmVudCxNYXRoLmZsb29yKGEuY2FsZW5kYXJzLzIpLWQpKTooYz1uZXcgRGF0ZShhLmN1cnJlbnQpLGMuc2V0WWVhcihiLl9fcGlja21ldXBfeWVhciksYy5zZXRNb250aChiLl9fcGlja21ldXBfbW9udGgpLGMuc2V0RGF0ZShiLl9fcGlja21ldXBfZGF5KSxhLmJvdW5kLnVwZGF0ZV9kYXRlKGMpKTthLmJvdW5kLmZpbGwoKTtyZXR1cm4hMH1mdW5jdGlvbiBIKGEpe2lmKFwic2luZ2xlXCI9PT1hLm1vZGUpe3ZhciBjPW5ldyBEYXRlKGEuZGF0ZSk7cmV0dXJue2Zvcm1hdHRlZF9kYXRlOkQoYyxhLmZvcm1hdCxhLmxvY2FsZXNbYS5sb2NhbGVdKSxkYXRlOmN9fWM9e2Zvcm1hdHRlZF9kYXRlOltdLGRhdGU6W119O2EuZGF0ZS5mb3JFYWNoKGZ1bmN0aW9uKGIpe2I9bmV3IERhdGUoYik7Yy5mb3JtYXR0ZWRfZGF0ZS5wdXNoKEQoYixhLmZvcm1hdCxhLmxvY2FsZXNbYS5sb2NhbGVdKSk7XG5jLmRhdGUucHVzaChiKX0pO3JldHVybiBjfWZ1bmN0aW9uIEkoYSxjKXt2YXIgYj1hLl9fcGlja21ldXAuZWxlbWVudDtpZihjfHxrKGIsXCJwbXUtaGlkZGVuXCIpKXt2YXIgZD1hLl9fcGlja21ldXAub3B0aW9ucyxlPU0oYSksaD13aW5kb3cucGFnZVhPZmZzZXQsbT13aW5kb3cucGFnZVlPZmZzZXQsbD1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgscD1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LGY9ZS50b3Asbj1lLmxlZnQ7ZC5ib3VuZC5maWxsKCk7QihhLFwiaW5wdXRcIikmJigoYz1hLnZhbHVlKSYmZC5ib3VuZC5zZXRfZGF0ZShjKSxxKGEsYSxcImtleWRvd25cIixmdW5jdGlvbihhKXs5PT09YS53aGljaCYmZC5ib3VuZC5oaWRlKCl9KSxkLmxhc3RTZWw9ITEpO2lmKEMoYSxcInNob3dcIikmJiFkLmZsYXQpe2IuY2xhc3NMaXN0LnJlbW92ZShcInBtdS1oaWRkZW5cIik7aWYoZC5wb3NpdGlvbiBpbnN0YW5jZW9mIEZ1bmN0aW9uKWU9ZC5wb3NpdGlvbi5jYWxsKGEpLFxubj1lLmxlZnQsZj1lLnRvcDtlbHNle3N3aXRjaChkLnBvc2l0aW9uKXtjYXNlIFwidG9wXCI6Zi09Yi5vZmZzZXRIZWlnaHQ7YnJlYWs7Y2FzZSBcImxlZnRcIjpuLT1iLm9mZnNldFdpZHRoO2JyZWFrO2Nhc2UgXCJyaWdodFwiOm4rPWEub2Zmc2V0V2lkdGg7YnJlYWs7Y2FzZSBcImJvdHRvbVwiOmYrPWEub2Zmc2V0SGVpZ2h0fWYrYi5vZmZzZXRIZWlnaHQ+bStwJiYoZj1lLnRvcC1iLm9mZnNldEhlaWdodCk7ZjxtJiYoZj1lLnRvcCthLm9mZnNldEhlaWdodCk7bitiLm9mZnNldFdpZHRoPmgrbCYmKG49ZS5sZWZ0LWIub2Zmc2V0V2lkdGgpO248aCYmKG49ZS5sZWZ0K2Eub2Zmc2V0V2lkdGgpO24rPVwicHhcIjtmKz1cInB4XCJ9Yi5zdHlsZS5sZWZ0PW47Yi5zdHlsZS50b3A9ZjtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cShhLGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcImNsaWNrXCIsZC5ib3VuZC5oaWRlKTtxKGEsd2luZG93LFwicmVzaXplXCIsZC5ib3VuZC5mb3JjZWRfc2hvdyl9KX19fWZ1bmN0aW9uIFEoYSxcbmMpe3ZhciBiPWEuX19waWNrbWV1cC5lbGVtZW50LGQ9YS5fX3BpY2ttZXVwLm9wdGlvbnM7YyYmYy50YXJnZXQmJihjLnRhcmdldD09PWF8fGIuY29tcGFyZURvY3VtZW50UG9zaXRpb24oYy50YXJnZXQpJjE2KXx8IUMoYSxcImhpZGVcIil8fChsKGIsXCJwbXUtaGlkZGVuXCIpLHooYSxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXCJjbGlja1wiLGQuYm91bmQuaGlkZSkseihhLHdpbmRvdyxcInJlc2l6ZVwiLGQuYm91bmQuZm9yY2VkX3Nob3cpLGQubGFzdFNlbD0hMSl9ZnVuY3Rpb24gUihhKXt2YXIgYz1hLl9fcGlja21ldXAub3B0aW9uczt6KGEsZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFwiY2xpY2tcIixjLmJvdW5kLmhpZGUpO3ooYSx3aW5kb3csXCJyZXNpemVcIixjLmJvdW5kLmZvcmNlZF9zaG93KTtjLmJvdW5kLmZvcmNlZF9zaG93KCl9ZnVuY3Rpb24gUyhhKXthPWEuX19waWNrbWV1cC5vcHRpb25zO1wic2luZ2xlXCIhPT1hLm1vZGUmJihhLmRhdGU9W10sYS5sYXN0U2VsPSExLGEuYm91bmQuZmlsbCgpKX1cbmZ1bmN0aW9uIFQoYSxjKXtcInVuZGVmaW5lZFwiPT10eXBlb2YgYyYmKGM9ITApO3ZhciBiPWEuX19waWNrbWV1cC5lbGVtZW50O2E9YS5fX3BpY2ttZXVwLm9wdGlvbnM7ayhiLFwicG11LXZpZXcteWVhcnNcIik/dShhLmN1cnJlbnQsLTEyKTprKGIsXCJwbXUtdmlldy1tb250aHNcIik/dShhLmN1cnJlbnQsLTEpOmsoYixcInBtdS12aWV3LWRheXNcIikmJnAoYS5jdXJyZW50LC0xKTtjJiZhLmJvdW5kLmZpbGwoKX1mdW5jdGlvbiBVKGEsYyl7XCJ1bmRlZmluZWRcIj09dHlwZW9mIGMmJihjPSEwKTt2YXIgYj1hLl9fcGlja21ldXAuZWxlbWVudDthPWEuX19waWNrbWV1cC5vcHRpb25zO2soYixcInBtdS12aWV3LXllYXJzXCIpP3UoYS5jdXJyZW50LDEyKTprKGIsXCJwbXUtdmlldy1tb250aHNcIik/dShhLmN1cnJlbnQsMSk6ayhiLFwicG11LXZpZXctZGF5c1wiKSYmcChhLmN1cnJlbnQsMSk7YyYmYS5ib3VuZC5maWxsKCl9ZnVuY3Rpb24gVihhLGMpe3ZhciBiPWEuX19waWNrbWV1cC5vcHRpb25zO2E9XG5IKGIpO3JldHVyblwic3RyaW5nXCI9PT10eXBlb2YgYz8oYT1hLmRhdGUsYSBpbnN0YW5jZW9mIERhdGU/RChhLGMsYi5sb2NhbGVzW2IubG9jYWxlXSk6YS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIEQoYSxjLGIubG9jYWxlc1tiLmxvY2FsZV0pfSkpOmFbYz9cImZvcm1hdHRlZF9kYXRlXCI6XCJkYXRlXCJdfWZ1bmN0aW9uIFcoYSxjLGIpe3ZhciBkPWEuX19waWNrbWV1cC5vcHRpb25zO2lmKCEoYyBpbnN0YW5jZW9mIEFycmF5KXx8MDxjLmxlbmd0aClpZihkLmRhdGU9dChjLGQpLFwic2luZ2xlXCIhPT1kLm1vZGUpZm9yKGQuZGF0ZSBpbnN0YW5jZW9mIEFycmF5PyhkLmRhdGVbMF09ZC5kYXRlWzBdfHx0KG5ldyBEYXRlLGQpLFwicmFuZ2VcIj09PWQubW9kZSYmKGQuZGF0ZVsxXT1kLmRhdGVbMV18fHQoZC5kYXRlWzBdLGQpKSk6KGQuZGF0ZT1bZC5kYXRlXSxcInJhbmdlXCI9PT1kLm1vZGUmJmQuZGF0ZS5wdXNoKHQoZC5kYXRlWzBdLGQpKSksYz0wO2M8ZC5kYXRlLmxlbmd0aDsrK2MpZC5kYXRlW2NdPVxuTChkLmRhdGVbY10sZC5taW4sZC5tYXgpO2Vsc2UgZC5kYXRlIGluc3RhbmNlb2YgQXJyYXkmJihkLmRhdGU9ZC5kYXRlWzBdKSxkLmRhdGU9TChkLmRhdGUsZC5taW4sZC5tYXgpO2Vsc2UgZC5kYXRlPVtdO2lmKCFkLnNlbGVjdF9kYXkpaWYoZC5kYXRlIGluc3RhbmNlb2YgQXJyYXkpZm9yKGM9MDtjPGQuZGF0ZS5sZW5ndGg7KytjKWQuZGF0ZVtjXS5zZXREYXRlKDEpO2Vsc2UgZC5kYXRlLnNldERhdGUoMSk7aWYoXCJtdWx0aXBsZVwiPT09ZC5tb2RlKWZvcihjPTA7YzxkLmRhdGUubGVuZ3RoOysrYylkLmRhdGUuaW5kZXhPZihkLmRhdGVbY10pIT09YyYmKGQuZGF0ZS5zcGxpY2UoYywxKSwtLWMpO2I/ZC5jdXJyZW50PXQoYixkKTooYj1cInNpbmdsZVwiPT09ZC5tb2RlP2QuZGF0ZTpkLmRhdGVbZC5kYXRlLmxlbmd0aC0xXSxkLmN1cnJlbnQ9Yj9uZXcgRGF0ZShiKTpuZXcgRGF0ZSk7ZC5jdXJyZW50LnNldERhdGUoMSk7ZC5ib3VuZC5maWxsKCk7QihhLFwiaW5wdXRcIikmJiExIT09XG5kLmRlZmF1bHRfZGF0ZSYmKGI9SChkKSxjPWEudmFsdWUsZD1cInNpbmdsZVwiPT09ZC5tb2RlP2IuZm9ybWF0dGVkX2RhdGU6Yi5mb3JtYXR0ZWRfZGF0ZS5qb2luKGQuc2VwYXJhdG9yKSxjfHxDKGEsXCJjaGFuZ2VcIixiKSxjIT09ZCYmKGEudmFsdWU9ZCkpfWZ1bmN0aW9uIFgoYSl7dmFyIGM9YS5fX3BpY2ttZXVwLmVsZW1lbnQ7eihhKTt5KGMpO2RlbGV0ZSBhLl9fcGlja21ldXB9ZnVuY3Rpb24gTChhLGMsYil7cmV0dXJuIGMmJmM+YT9uZXcgRGF0ZShjKTpiJiZiPGE/bmV3IERhdGUoYik6YX1mdW5jdGlvbiBFKGEsYyl7XCJzdHJpbmdcIj09dHlwZW9mIGEmJihhPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYSkpO2lmKCFhKXJldHVybiBudWxsO2lmKCFhLl9fcGlja21ldXApe3ZhciBiLGQ9e307Yz1jfHx7fTtmb3IoYiBpbiBFLmRlZmF1bHRzKWRbYl09YiBpbiBjP2NbYl06RS5kZWZhdWx0c1tiXTtmb3IoYiBpbiBkKWM9YS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBtdS1cIitiKSxudWxsIT09XG5jJiYoZFtiXT1jKTtcImRheXNcIiE9PWQudmlld3x8ZC5zZWxlY3RfZGF5fHwoZC52aWV3PVwibW9udGhzXCIpO1wibW9udGhzXCIhPT1kLnZpZXd8fGQuc2VsZWN0X21vbnRofHwoZC52aWV3PVwieWVhcnNcIik7XCJ5ZWFyc1wiIT09ZC52aWV3fHxkLnNlbGVjdF95ZWFyfHwoZC52aWV3PVwiZGF5c1wiKTtcImRheXNcIiE9PWQudmlld3x8ZC5zZWxlY3RfZGF5fHwoZC52aWV3PVwibW9udGhzXCIpO2QuY2FsZW5kYXJzPU1hdGgubWF4KDEscGFyc2VJbnQoZC5jYWxlbmRhcnMsMTApfHwxKTtkLm1vZGU9L3NpbmdsZXxtdWx0aXBsZXxyYW5nZS8udGVzdChkLm1vZGUpP2QubW9kZTpcInNpbmdsZVwiO2QubWluJiYoZC5taW49dChkLm1pbixkKSxkLnNlbGVjdF9kYXl8fGQubWluLnNldERhdGUoMSkpO2QubWF4JiYoZC5tYXg9dChkLm1heCxkKSxkLnNlbGVjdF9kYXl8fGQubWF4LnNldERhdGUoMSkpO2M9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTthLl9fcGlja21ldXA9e29wdGlvbnM6ZCxldmVudHM6W10sXG5lbGVtZW50OmN9O2MuX19waWNrbWV1cF90YXJnZXQ9YTtsKGMsXCJwaWNrbWV1cFwiKTtkLmNsYXNzX25hbWUmJmwoYyxkLmNsYXNzX25hbWUpO2QuYm91bmQ9e2ZpbGw6Ti5iaW5kKGEsYSksdXBkYXRlX2RhdGU6Ty5iaW5kKGEsYSksY2xpY2s6UC5iaW5kKGEsYSksc2hvdzpJLmJpbmQoYSxhKSxmb3JjZWRfc2hvdzpJLmJpbmQoYSxhLCEwKSxoaWRlOlEuYmluZChhLGEpLHVwZGF0ZTpSLmJpbmQoYSxhKSxjbGVhcjpTLmJpbmQoYSxhKSxwcmV2OlQuYmluZChhLGEpLG5leHQ6VS5iaW5kKGEsYSksZ2V0X2RhdGU6Vi5iaW5kKGEsYSksc2V0X2RhdGU6Vy5iaW5kKGEsYSksZGVzdHJveTpYLmJpbmQoYSxhKX07bChjLFwicG11LXZpZXctXCIrZC52aWV3KTt2YXIgZT1kLmluc3RhbmNlX3RlbXBsYXRlKGQpLGg9XCJcIjtmb3IoYj0wO2I8ZC5jYWxlbmRhcnM7KytiKWgrPWU7Yy5pbm5lckhUTUw9aDtxKGEsYyxcImNsaWNrXCIsZC5ib3VuZC5jbGljayk7cShhLGMsXCJvbnNlbGVjdHN0YXJ0XCJpbiBFbGVtZW50LnByb3RvdHlwZT9cblwic2VsZWN0c3RhcnRcIjpcIm1vdXNlZG93blwiLGZ1bmN0aW9uKGEpe2EucHJldmVudERlZmF1bHQoKX0pO2QuZmxhdD8obChjLFwicG11LWZsYXRcIiksYS5hcHBlbmRDaGlsZChjKSk6KGwoYyxcInBtdS1oaWRkZW5cIiksZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjKSxxKGEsYSxcImNsaWNrXCIsSS5iaW5kKGEsYSwhMSkpLHEoYSxhLFwiaW5wdXRcIixkLmJvdW5kLnVwZGF0ZSkscShhLGEsXCJjaGFuZ2VcIixkLmJvdW5kLnVwZGF0ZSkpO2QuYm91bmQuc2V0X2RhdGUoZC5kYXRlLGQuY3VycmVudCl9ZD1hLl9fcGlja21ldXAub3B0aW9ucztyZXR1cm57aGlkZTpkLmJvdW5kLmhpZGUsc2hvdzpkLmJvdW5kLnNob3csY2xlYXI6ZC5ib3VuZC5jbGVhcix1cGRhdGU6ZC5ib3VuZC51cGRhdGUscHJldjpkLmJvdW5kLnByZXYsbmV4dDpkLmJvdW5kLm5leHQsZ2V0X2RhdGU6ZC5ib3VuZC5nZXRfZGF0ZSxzZXRfZGF0ZTpkLmJvdW5kLnNldF9kYXRlLGRlc3Ryb3k6ZC5ib3VuZC5kZXN0cm95fX1FLmRlZmF1bHRzPVxue2N1cnJlbnQ6bnVsbCxkYXRlOm5ldyBEYXRlLGRlZmF1bHRfZGF0ZTpuZXcgRGF0ZSxmbGF0OiExLGZpcnN0X2RheToxLHByZXY6XCImIzk2NjQ7XCIsbmV4dDpcIiYjOTY1NDtcIixtb2RlOlwic2luZ2xlXCIsc2VsZWN0X3llYXI6ITAsc2VsZWN0X21vbnRoOiEwLHNlbGVjdF9kYXk6ITAsdmlldzpcImRheXNcIixjYWxlbmRhcnM6MSxmb3JtYXQ6XCJkLW0tWVwiLHRpdGxlX2Zvcm1hdDpcIkIsIFlcIixwb3NpdGlvbjpcImJvdHRvbVwiLGNsYXNzX25hbWU6XCJcIixzZXBhcmF0b3I6XCIgLSBcIixoaWRlX29uX3NlbGVjdDohMSxtaW46bnVsbCxtYXg6bnVsbCxyZW5kZXI6ZnVuY3Rpb24oKXt9LGxvY2FsZTpcImVuXCIsbG9jYWxlczp7ZW46e2RheXM6XCJTdW5kYXkgTW9uZGF5IFR1ZXNkYXkgV2VkbmVzZGF5IFRodXJzZGF5IEZyaWRheSBTYXR1cmRheVwiLnNwbGl0KFwiIFwiKSxkYXlzU2hvcnQ6XCJTdW4gTW9uIFR1ZSBXZWQgVGh1IEZyaSBTYXRcIi5zcGxpdChcIiBcIiksZGF5c01pbjpcIlN1IE1vIFR1IFdlIFRoIEZyIFNhXCIuc3BsaXQoXCIgXCIpLFxubW9udGhzOlwiSmFudWFyeSBGZWJydWFyeSBNYXJjaCBBcHJpbCBNYXkgSnVuZSBKdWx5IEF1Z3VzdCBTZXB0ZW1iZXIgT2N0b2JlciBOb3ZlbWJlciBEZWNlbWJlclwiLnNwbGl0KFwiIFwiKSxtb250aHNTaG9ydDpcIkphbiBGZWIgTWFyIEFwciBNYXkgSnVuIEp1bCBBdWcgU2VwIE9jdCBOb3YgRGVjXCIuc3BsaXQoXCIgXCIpfX0saW5zdGFuY2VfdGVtcGxhdGU6ZnVuY3Rpb24oYSl7dmFyIGM9YS5sb2NhbGVzW2EubG9jYWxlXS5kYXlzTWluLnNsaWNlKCk7YS5maXJzdF9kYXkmJmMucHVzaChjLnNoaWZ0KCkpO3JldHVybic8ZGl2IGNsYXNzPVwicG11LWluc3RhbmNlXCI+PG5hdj48ZGl2IGNsYXNzPVwicG11LXByZXYgcG11LWJ1dHRvblwiPicrYS5wcmV2Kyc8L2Rpdj48ZGl2IGNsYXNzPVwicG11LW1vbnRoIHBtdS1idXR0b25cIj48L2Rpdj48ZGl2IGNsYXNzPVwicG11LW5leHQgcG11LWJ1dHRvblwiPicrYS5uZXh0Kyc8L2Rpdj48L25hdj48bmF2IGNsYXNzPVwicG11LWRheS1vZi13ZWVrXCI+PGRpdj4nK1xuYy5qb2luKFwiPC9kaXY+PGRpdj5cIikrXCI8L2Rpdj48L25hdj48L2Rpdj5cIn0saW5zdGFuY2VfY29udGVudF90ZW1wbGF0ZTpmdW5jdGlvbihhLGMpe3ZhciBiPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7bChiLGMpO2ZvcihjPTA7YzxhLmxlbmd0aDsrK2MpbChhW2NdLFwicG11LWJ1dHRvblwiKSxiLmFwcGVuZENoaWxkKGFbY10pO3JldHVybiBifX07cmV0dXJuIEV9KTtcbiIsIi8qISBVVEYtOFxyXG5cclxuwqkga292cmlnaW5cclxu0JLRgdC1INC/0YDQsNCy0LAg0YDQsNC30YDQtdGI0LXQvdGLXHJcbtC60YDQsNGB0LjQstGL0Lkg0LTQuNC30LDQudC9INC00L7Qu9C20LXQvSDQuNC80LXRgtGMINC60YDQsNGB0LjQstGL0Lkg0LrQvtC0wq5cclxuXHJcbmh0dHBzOi8vZ2l0aHViLmNvbS9odG1scGx1c2Nzcy9cclxuXHJcbiovXHJcblxyXG4oICgpID0+IHtcclxuXHJcblx0bGV0IHJlc2l6ZVRpbWVvdXQgPSBudWxsLFxyXG5cdFx0d2luZG93V2lkdGhPTGQgPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHJcblx0Y29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XHJcblxyXG5cdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4ge1xyXG5cclxuXHRcdFx0aWYgKHJlc2l6ZVRpbWVvdXQgPT09IG51bGwpIHtcclxuXHJcblx0XHRcdFx0cmVzaXplVGltZW91dCA9IHNldFRpbWVvdXQoICgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRyZXNpemVUaW1lb3V0ID0gbnVsbDtcclxuXHJcblx0XHRcdFx0XHRpZih3aW5kb3dXaWR0aE9MZCAhPT0gd2luZG93LmlubmVyV2lkdGgpIHtcclxuXHJcblx0XHRcdFx0XHRcdHdpbmRvd1dpZHRoT0xkID0gd2luZG93LmlubmVyV2lkdGg7XHJcblx0XHRcdFx0XHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1zY3JvbGxNYXJnaW4nLCBoZWFkZXIuY2xpZW50SGVpZ2h0ICsgJ3B4Jyk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9LCAxMDApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcclxuXHJcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmFzdExvYWRTY3JpcHQnLCB0cnVlKTtcclxuXHJcblx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdHJhbnNpdGlvbkRlZmF1bHQnLCAnLjNzJyk7XHJcblx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tc2Nyb2xsTWFyZ2luJywgaGVhZGVyLmNsaWVudEhlaWdodCArICdweCcpO1xyXG5cclxuXHR9KTtcclxuXHJcblx0Ly8g0L7QsdGA0LDQsdC+0YLRh9C40Log0LDQvdC40LzQsNGG0LjQuVxyXG5cdHdpbmRvdy5jc3NBbmltYXRpb24gPSBhPT57bGV0IGIsYyxkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjc3NhbmltYXRpb25cIik7c3dpdGNoKGEpe2Nhc2UnYW5pbWF0aW9uJzpiPXtcImFuaW1hdGlvblwiOlwiYW5pbWF0aW9uZW5kXCIsXCJPQW5pbWF0aW9uXCI6XCJvQW5pbWF0aW9uRW5kXCIsXCJNb3pBbmltYXRpb25cIjpcImFuaW1hdGlvbmVuZFwiLFwiV2Via2l0QW5pbWF0aW9uXCI6XCJ3ZWJraXRBbmltYXRpb25FbmRcIn07YnJlYWs7Y2FzZSd0cmFuc2l0aW9uJzpiPXtcInRyYW5zaXRpb25cIjpcInRyYW5zaXRpb25lbmRcIixcIk9UcmFuc2l0aW9uXCI6XCJvVHJhbnNpdGlvbkVuZFwiLFwiTW96VHJhbnNpdGlvblwiOlwidHJhbnNpdGlvbmVuZFwiLFwiV2Via2l0VHJhbnNpdGlvblwiOlwid2Via2l0VHJhbnNpdGlvbkVuZFwifX1mb3IoYyBpbiBiKWlmKGQuc3R5bGVbY10hPT11bmRlZmluZWQpcmV0dXJuIGJbY119XHJcblxyXG5cdC8vIERldGVybWluZSBpZiBhbiBlbGVtZW50IGlzIGluIHRoZSB2aXNpYmxlIHZpZXdwb3J0XHJcblx0d2luZG93LmlzSW5WaWV3cG9ydCA9IGVsID0+IHtcclxuXHRcdGNvbnN0IHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdHJldHVybiAocmVjdC50b3AgPj0gMCAmJiByZWN0LmJvdHRvbSA8PSB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG5cdH1cclxuXHJcblx0Ly8g0L7RgtC00LXQu9GP0LXQvCDRgtGL0YHRj9GH0LhcclxuXHR3aW5kb3cuc2VwTnVtYmVyID0gc3RyID0+IHtcclxuXHRcdHN0ciA9IHN0ci50b1N0cmluZygpO1xyXG5cdFx0c3RyID0gc3RyLnJlcGxhY2UoL1xccysvZywnJyk7XHJcblx0XHRyZXR1cm4gc3RyLnJlcGxhY2UoLyhcXGQpKD89KFxcZFxcZFxcZCkrKFteXFxkXXwkKSkvZywgJyQxICcpO1xyXG5cdH1cclxuXHJcblx0Ly8g0YHQutC70LXQuNCy0LDQtdC8INGC0YvRgdGP0YfQuFxyXG5cdHdpbmRvdy5zdHJUb051bWJlciA9IG4gPT4gcGFyc2VJbnQobi5yZXBsYWNlKC9cXHMrL2csJycpLCAxMCk7XHJcblxyXG4vLyDRgdC60LvQvtC90LXQvdC40LVcclxuXHR3aW5kb3cuZGVjbGVuc2lvbiA9IChudW0sIGV4cHJlc3Npb25zKSA9PiB7XHJcblxyXG5cdFx0bGV0IHIsXHJcblx0XHRcdGNvdW50ID0gbnVtICUgMTAwO1xyXG5cclxuXHRcdGlmIChjb3VudCA+IDQgJiYgY291bnQgPCAyMSl7XHJcblxyXG5cdFx0XHRyID0gZXhwcmVzc2lvbnNbJzInXTtcclxuXHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHJcblx0XHRcdGNvdW50ID0gY291bnQgJSAxMDtcclxuXHJcblx0XHRcdGlmIChjb3VudCA9PSAxKXtcclxuXHRcdFx0XHRyID0gZXhwcmVzc2lvbnNbJzAnXTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChjb3VudCA+IDEgJiYgY291bnQgPCA1KXtcclxuXHRcdFx0XHRyID0gZXhwcmVzc2lvbnNbJzEnXTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNle1xyXG5cdFx0XHRcdHIgPSBleHByZXNzaW9uc1snMiddO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiByO1xyXG5cclxuXHR9XHJcblxyXG59KSgpOyIsIiggaXRlbXMgPT4ge1xyXG5cclxuXHRpZighaXRlbXMubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdFsuLi5pdGVtc10uZm9yRWFjaCggYWNjb3JkaW9uID0+IHtcclxuXHJcblx0XHRsZXQgYW5pbWF0ZU9uID0gZmFsc2UsXHJcblx0XHRcdGFjdGl2ZUl0ZW0gPSBudWxsO1xyXG5cclxuXHRcdGNvbnN0IGl0ZW1zID0gYWNjb3JkaW9uLnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvcmRpb25fX2l0ZW0nKSxcclxuXHRcdFx0ICBzdHlsZVBsdXMgPSBhY2NvcmRpb24uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY2NvcmRpb24tLXBsdXMnKTtcclxuXHJcblx0XHRbLi4uaXRlbXNdLmZvckVhY2goIGl0ZW0gPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgYnRuID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uX19idG4nKSxcclxuXHRcdFx0XHQgIGhlYWQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb25fX2hlYWQnKSxcclxuXHRcdFx0XHQgIGJvZHkgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb25fX2JvZHknKSxcclxuXHRcdFx0XHQgIGFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJzdmdcIik7XHJcblxyXG5cdFx0XHRhcnJvdy5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcInZpZXdCb3hcIiwgXCIwIDAgMjQgMjRcIik7XHJcblx0XHRcdGFycm93LnNldEF0dHJpYnV0ZU5TKG51bGwsIFwid2lkdGhcIiwgMjQpO1xyXG5cdFx0XHRhcnJvdy5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcImhlaWdodFwiLCAyNCk7XHJcblx0XHRcdGFycm93LmlubmVySFRNTCA9IGA8dXNlIHhsaW5rOmhyZWY9XCIjc3ZnLSR7IHN0eWxlUGx1cyA/ICdwbHVzJyA6ICdhcnJvdy1jaGV2cm9uLXJpZ2h0JyB9XCIvPmA7XHJcblxyXG5cdFx0XHRoZWFkLmFwcGVuZChhcnJvdyk7XHJcblxyXG5cdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdGFuaW1hdGVPbiA9IHRydWU7XHJcblxyXG5cdFx0XHRcdGlmKCBpdGVtID09PSBhY3RpdmVJdGVtICl7XHJcblxyXG5cdFx0XHRcdFx0aXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJyk7XHJcblx0XHRcdFx0XHRhY3RpdmVJdGVtID0gbnVsbDtcclxuXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRhY3RpdmVJdGVtID0gaXRlbTtcclxuXHJcblx0XHRcdFx0XHRbLi4uaXRlbXNdLmZvckVhY2goIGVsID0+IGVsLmNsYXNzTGlzdC50b2dnbGUoJ2lzLW9wZW4nLCBlbCA9PT0gaXRlbSkpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGJvZHkuYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3cuY3NzQW5pbWF0aW9uKCd0cmFuc2l0aW9uJyksICgpID0+IHtcclxuXHJcblx0XHRcdFx0aWYoYW5pbWF0ZU9uICYmIGFjdGl2ZUl0ZW0gJiYgIXdpbmRvdy5pc0luVmlld3BvcnQoaGVhZCkpe1xyXG5cclxuXHRcdFx0XHRcdGhlYWQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0YW5pbWF0ZU9uID0gZmFsc2U7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uJykpOyIsIiggYXJ0aWNsZSA9PiB7XHJcblxyXG5cdGlmKGFydGljbGUpIHtcclxuXHJcblx0XHQvLyBzaGFyZVxyXG5cclxuXHRcdGNvbnN0IGJ0biA9IGFydGljbGUucXVlcnlTZWxlY3RvcignLnBhZ2UtYXJ0aWNsZV9fc2hhcmUtYnRuJyk7XHJcblxyXG5cdFx0aWYgKCBidG4gKSB7XHJcblxyXG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdFx0aWYgKCBldmVudC50YXJnZXQuY2xvc2VzdCgnLnBhZ2UtYXJ0aWNsZV9fc2hhcmUnKSApIHtcclxuXHJcblx0XHRcdFx0XHRidG4uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtb3BlbicpO1xyXG5cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJyk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UtYXJ0aWNsZScpKTsiLCIoIGJyYW5kcyA9PiB7XHJcblxyXG5cdGlmKCBicmFuZHMgKSB7XHJcblxyXG5cdFx0Y29uc3QgZ3JvdXAgPSBicmFuZHMucXVlcnlTZWxlY3RvckFsbCgnLmJyYW5kc19fZ3JvdXAnKTtcclxuXHJcblx0XHQvLyBoYXNoXHJcblxyXG5cdFx0Y29uc3Qgc2V0U3RhZ2UgPSAoKT0+IHtcclxuXHJcblx0XHRcdGNvbnN0IGhhc2ggPSBsb2NhdGlvbi5oYXNoLnRvTG93ZXJDYXNlKCkuc2xpY2UoMSk7XHJcblxyXG5cdFx0XHRbLi4uZ3JvdXBdLmZvckVhY2goIGl0ZW0gPT4ge1xyXG5cclxuXHRcdFx0XHRpdGVtLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnLCBpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1oYXNoJykudG9Mb3dlckNhc2UoKSAhPT0gaGFzaCAmJiBoYXNoICk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBzZXRTdGFnZSk7XHJcblxyXG5cdFx0aWYgKCBsb2NhdGlvbi5oYXNoICkge1xyXG5cclxuXHRcdFx0c2V0VGltZW91dCggc2V0U3RhZ2UgKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gYnRuc1xyXG5cclxuXHRcdGNvbnN0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnJhbmRzLXNvcnRfX2J0bicpO1xyXG5cclxuXHRcdFsuLi5idG5zXS5mb3JFYWNoKCBsaW5rID0+IHtcclxuXHJcblx0XHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRcdGlmICggbGluay5ocmVmLmluY2x1ZGVzKCcjJykgKSB7XHJcblxyXG5cdFx0XHRcdFx0bG9jYXRpb24uaGFzaCA9IGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJyk7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0aGlzdG9yeS5wdXNoU3RhdGUoJycsIGRvY3VtZW50LnRpdGxlLCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRzZXRTdGFnZSgpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5icmFuZHMnKSk7IiwiKCBmb3JtID0+IHtcclxuXHJcblx0aWYoIGZvcm0gKSB7XHJcblxyXG5cdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0LFxyXG5cdFx0XHRcdCAgaXRlbSA9IHRhcmdldC5jbG9zZXN0KCcuY2FydF9faXRlbScpO1xyXG5cclxuXHRcdFx0Ly8gcmVtb3ZlXHJcblxyXG5cdFx0XHRpZiAoIHRhcmdldC5jbG9zZXN0KCcuY2FydC1pdGVtX19yZW1vdmUnKSApIHtcclxuXHJcblx0XHRcdFx0aXRlbS5zdHlsZS5oZWlnaHQgPSBpdGVtLmNsaWVudEhlaWdodCArIFwicHhcIjtcclxuXHJcblx0XHRcdFx0aXRlbS5hZGRFdmVudExpc3RlbmVyKHdpbmRvdy5jc3NBbmltYXRpb24oJ3RyYW5zaXRpb24nKSwgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0XHRcdGlmICggZXZlbnQucHJvcGVydHlOYW1lID09PSAnaGVpZ2h0JyAmJiBpdGVtLmNsaWVudEhlaWdodCA9PT0gMCApIHtcclxuXHJcblx0XHRcdFx0XHRcdGl0ZW0ucmVtb3ZlKCk7XHJcblxyXG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCAoKT0+IGZvcm0uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKSwxMDApO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdHNldFRpbWVvdXQoICgpPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdpcy1yZW1vdmUnKSApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIHN1Ym1pdFxyXG5cclxuXHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0ZmV0Y2goZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpLCB7XHJcblx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdFx0Ym9keTogbmV3IEZvcm1EYXRhKGZvcm0pXHJcblx0XHRcdH0pXHJcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcclxuXHRcdFx0LnRoZW4ocmVzdWx0ID0+IHtcclxuXHJcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHJcblx0XHQvLyArIHwgLVxyXG5cclxuXHRcdGNvbnN0IHF1YW50aXR5ID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcuY2FydC1xdWFudGl0eScpO1xyXG5cclxuXHRcdFsuLi5xdWFudGl0eV0uZm9yRWFjaCggZWwgPT4ge1xyXG5cclxuXHRcdFx0bGV0IHZhbHVlID0gbnVsbDtcclxuXHJcblx0XHRcdGNvbnN0IHVwID0gZWwucXVlcnlTZWxlY3RvcignLmNhcnQtcXVhbnRpdHlfX2J0bi0tdXAnKSxcclxuXHRcdFx0XHQgIGRvd24gPSBlbC5xdWVyeVNlbGVjdG9yKCcuY2FydC1xdWFudGl0eV9fYnRuLS1kb3duJyksXHJcblx0XHRcdFx0ICBjb3VudCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0LXF1YW50aXR5X19jb3VudCcpO1xyXG5cclxuXHRcdFx0dXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdHZhbHVlID0gcGFyc2VJbnQoY291bnQudmFsdWUpO1xyXG5cclxuXHRcdFx0XHRjb3VudC52YWx1ZSA9IGlzTmFOKHZhbHVlKSA/IDEgOiB2YWx1ZSArIDE7XHJcblxyXG5cdFx0XHRcdGZvcm0uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0ZG93bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcblx0XHRcdFx0dmFsdWUgPSBwYXJzZUludChjb3VudC52YWx1ZSk7XHJcblxyXG5cdFx0XHRcdGlmKCBpc05hTih2YWx1ZSkgfHwgdmFsdWUgPCAyICkge1xyXG5cclxuXHRcdFx0XHRcdHZhbHVlID0gMjtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRjb3VudC52YWx1ZSA9IHZhbHVlIC0gMTtcclxuXHJcblx0XHRcdFx0Zm9ybS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRjb3VudC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRmb3JtLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGNvdW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRzZXRUaW1lb3V0KCAoKSA9PiBjb3VudC5zZXRTZWxlY3Rpb25SYW5nZSgwLDkpLCAxMDApO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRjb3VudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICgpID0+IHtcclxuXHJcblx0XHRcdFx0Y29uc3QgdmFsID0gY291bnQudmFsdWUucmVwbGFjZSgvW1xcRF0vZywgJycpO1xyXG5cclxuXHRcdFx0XHRpZiAoIGlzTmFOKHZhbCkgKSB7XHJcblxyXG5cdFx0XHRcdFx0dmFsID0gMTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRjb3VudC52YWx1ZSA9IHZhbDtcclxuXHJcblx0XHRcdFx0Zm9ybS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH07XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydCcpKTsiLCIoIGNhcmRzID0+IHtcclxuXHJcblx0aWYoIGNhcmRzLmxlbmd0aCApIHtcclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xyXG5cclxuXHRcdFx0Y2FyZHMuZm9yRWFjaCggY2FyZCA9PiB7XHJcblxyXG5cdFx0XHRcdGNvbnN0IGxpc3RUYWdzID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuY29uc3VsdGF0aW9ucy1jYXJkX19xdWVzdGlvbi10YWdzJyksXHJcblx0XHRcdFx0XHQgIGl0ZW1UYWdzID0gY2FyZC5xdWVyeVNlbGVjdG9yQWxsKCcuY29uc3VsdGF0aW9ucy1jYXJkX19xdWVzdGlvbi10YWdzIGxpJyksXHJcblx0XHRcdFx0XHQgIHdyYXBUYWdzID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuY29uc3VsdGF0aW9ucy1jYXJkX19xdWVzdGlvbi10YWdzLXdyYXAnKTtcclxuXHJcblx0XHRcdFx0aWYgKCB3cmFwVGFncy5jbGllbnRIZWlnaHQgPCBsaXN0VGFncy5jbGllbnRIZWlnaHQgKSB7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblxyXG5cdFx0XHRcdFx0YnRuLnR5cGUgPSAnYnV0dG9uJztcclxuXHRcdFx0XHRcdGJ0bi5jbGFzc05hbWUgPSAnYnRuIGJ0bi0taGFzaCBidG4tLXNtYWxsJztcclxuXHRcdFx0XHRcdGJ0bi50ZXh0Q29udGVudCA9IHdyYXBUYWdzLmdldEF0dHJpYnV0ZSgnZGF0YS1tb3JlJyk7XHJcblxyXG5cdFx0XHRcdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKCB3cmFwVGFncy5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLW9wZW4nKSApIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0d3JhcFRhZ3MuY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpO1xyXG5cdFx0XHRcdFx0XHRcdGJ0bi50ZXh0Q29udGVudCA9IHdyYXBUYWdzLmdldEF0dHJpYnV0ZSgnZGF0YS1tb3JlJyk7XHJcblxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdFx0XHR3cmFwVGFncy5jbGFzc0xpc3QuYWRkKCdpcy1vcGVuJyk7XHJcblx0XHRcdFx0XHRcdFx0YnRuLnRleHRDb250ZW50ID0gd3JhcFRhZ3MuZ2V0QXR0cmlidXRlKCdkYXRhLWxlc3MnKTtcclxuXHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHR3cmFwVGFncy5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyZW5kJywgYnRuKTtcclxuXHJcblx0XHRcdFx0fTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29uc3VsdGF0aW9ucy1jYXJkJykpOyIsIiggZGVhZGxpbmUgPT4ge1xyXG5cclxuXHRpZiAoIGRlYWRsaW5lLmxlbmd0aCA+IDAgKSB7XHJcblxyXG5cdFx0Y29uc3QgZ2V0VGltZVJlbWFpbmluZyA9IGVuZHRpbWUgPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgdG90YWwgPSBEYXRlLnBhcnNlKGVuZHRpbWUpIC0gRGF0ZS5wYXJzZShuZXcgRGF0ZSgpKSxcclxuXHRcdFx0XHQgIHNlY29uZHMgPSBNYXRoLmZsb29yKCh0b3RhbCAvIDEwMDApICUgNjApLFxyXG5cdFx0XHRcdCAgbWludXRlcyA9IE1hdGguZmxvb3IoKHRvdGFsIC8gMTAwMCAvIDYwKSAlIDYwKSxcclxuXHRcdFx0XHQgIGhvdXJzID0gTWF0aC5mbG9vcigodG90YWwgLyAoMTAwMCAqIDYwICogNjApKSAlIDI0KSxcclxuXHRcdFx0XHQgIGRheXMgPSBNYXRoLmZsb29yKHRvdGFsIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcclxuXHJcblx0XHRcdHJldHVybiB7dG90YWwsIGRheXMsIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzfVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBpbml0ID0gKGVsLCBlbmR0aW1lLCBleHByZXNzaW9ucykgPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgdXBkYXRlQ2xvY2sgPSAoKT0+IHtcclxuXHJcblx0XHRcdFx0Y29uc3QgdCA9IGdldFRpbWVSZW1haW5pbmcoZW5kdGltZSk7XHJcblxyXG5cdFx0XHRcdGVsLnRleHRDb250ZW50ID0gdC5kYXlzICsgJyAnICsgd2luZG93LmRlY2xlbnNpb24odC5kYXlzLCBleHByZXNzaW9ucykgKyAnICcgKyAoJzAnICsgdC5ob3Vycykuc2xpY2UoLTIpICsgJzonICsgKCcwJyArIHQubWludXRlcykuc2xpY2UoLTIpICsgJzonICsgKCcwJyArIHQuc2Vjb25kcykuc2xpY2UoLTIpO1xyXG5cclxuXHRcdFx0XHRpZiAoIHQudG90YWwgPiAwICkge1xyXG5cclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoIHVwZGF0ZUNsb2NrLCAxMDAwKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dXBkYXRlQ2xvY2soKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Wy4uLmRlYWRsaW5lXS5mb3JFYWNoKCBlbCA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCB0aW1lciA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1kZWFkbGluZScpLFxyXG5cdFx0XHRcdCAgZXhwcmVzc2lvbnMgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZGVjbGVuc2lvbicpLnNwbGl0KCd8Jyk7XHJcblxyXG5cdFx0XHRpbml0KCBlbCwgdGltZXIsIGV4cHJlc3Npb25zICk7XHJcblxyXG5cdFx0XHRzZXRUaW1lb3V0KCAoKT0+IHtcclxuXHJcblx0XHRcdFx0aWYgKCBlbC5jbGllbnRXaWR0aCA+IDAgKSB7XHJcblxyXG5cdFx0XHRcdFx0ZWwuc3R5bGUud2lkdGggPSBlbC5jbGllbnRXaWR0aCArICdweCc7XHJcblx0XHRcdFx0XHRlbC5zdHlsZS50ZXh0QWxpZ24gPSAnbGVmdCc7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0sIDEwMDApO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1kZWFkbGluZV0nKSk7IiwiKCAoKSA9PiB7XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHJcblx0XHQvLyAg0J3QsNGI0LvQuCDQtNC10YjQtdCy0LvQtT9cclxuXHJcblx0XHRjb25zdCBiZXN0UHJpY2UgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLmpzLWJlc3QtcHJpY2UnKTtcclxuXHJcblx0XHRpZiAoIGJlc3RQcmljZSApIHtcclxuXHJcblx0XHRcdGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByZXZpZXctY2FyZC1yb3ctdGVtcGxhdGUnKS5pbm5lckhUTUwsXHJcblx0XHRcdFx0ICBwcm9kdWN0ID0gYmVzdFByaWNlLmNsb3Nlc3QoJy5wcm9kdWN0Jyk7XHJcblx0XHRcdFx0ICBwYXJhbSA9IHt9O1xyXG5cclxuXHRcdFx0aWYgKCBwcm9kdWN0ICkge1xyXG5cclxuXHRcdFx0XHRwYXJhbS5pZCAgICAgICAgPSBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWJ1eScpLmlkLnZhbHVlO1xyXG5cdFx0XHRcdHBhcmFtLmxpbmsgICAgICA9IGxvY2F0aW9uLmhyZWY7XHJcblx0XHRcdFx0cGFyYW0ucHJpY2UgICAgID0gcGFyc2VJbnQocHJvZHVjdC5xdWVyeVNlbGVjdG9yKCcucHJpY2VfX3ZhbHVlJykudGV4dENvbnRlbnQpO1xyXG5cdFx0XHRcdHBhcmFtLnByaWNlT2xkICA9IHByb2R1Y3QucXVlcnlTZWxlY3RvcignZGF0YS1wcmljZS1vbGQnKTtcclxuXHRcdFx0XHRwYXJhbS5pbWcgICAgICAgPSBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWdhbGxlcnkgaW1nJykuc3JjO1xyXG5cdFx0XHRcdHBhcmFtLmltZzJ4ICAgICA9IHByb2R1Y3QucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtZ2FsbGVyeSBpbWcnKS5zcmM7XHJcblx0XHRcdFx0cGFyYW0ubmFtZSAgICAgID0gcHJvZHVjdC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdF9fdGl0bGUnKS50ZXh0Q29udGVudDtcclxuXHJcblx0XHRcdFx0aWYgKCBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWJ1eScpLmFydGljbGVpZCApIHtcclxuXHJcblx0XHRcdFx0XHRwYXJhbS5hcnRpY2xlaWQgPSBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWJ1eScpLmFydGljbGVpZC52YWx1ZTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoIHByb2R1Y3QucXVlcnlTZWxlY3RvcignLnByaWNlX19vbGQnKSApIHtcclxuXHJcblx0XHRcdFx0XHRwYXJhbS5wcmljZU9sZCA9IHBhcnNlSW50KHByb2R1Y3QucXVlcnlTZWxlY3RvcignLnByaWNlX19vbGQnKS50ZXh0Q29udGVudCk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblxyXG5cdFx0XHRcdHBhcmFtLmlkICAgICAgICA9IGJlc3RQcmljZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuXHRcdFx0XHRwYXJhbS5hcnRpY2xlaWQgPSBiZXN0UHJpY2UuZ2V0QXR0cmlidXRlKCdkYXRhLWFydGljbGVpZCcpO1xyXG5cdFx0XHRcdHBhcmFtLmxpbmsgICAgICA9IGJlc3RQcmljZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGluaycpO1xyXG5cdFx0XHRcdHBhcmFtLnByaWNlICAgICA9IGJlc3RQcmljZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2UnKTtcclxuXHRcdFx0XHRwYXJhbS5wcmljZU9sZCAgPSBiZXN0UHJpY2UuZ2V0QXR0cmlidXRlKCdkYXRhLXByaWNlLW9sZCcpO1xyXG5cdFx0XHRcdHBhcmFtLmltZyAgICAgICA9IGJlc3RQcmljZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW1nJyk7XHJcblx0XHRcdFx0cGFyYW0uaW1nMnggICAgID0gYmVzdFByaWNlLmdldEF0dHJpYnV0ZSgnZGF0YS1pbWcyeCcpO1xyXG5cdFx0XHRcdHBhcmFtLm5hbWUgICAgICA9IGJlc3RQcmljZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWZvcm0tYmVzdC1wcmljZS1wcm9kdWN0JykuaW5uZXJIVE1MID0gTXVzdGFjaGUucmVuZGVyKHRlbXBsYXRlLCBwYXJhbSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdC8vICDQndCw0LnRgtC4INCw0L3QsNC70L7Qs9C40YfQvdGL0Lkg0YLQvtCy0LDRgFxyXG5cclxuXHRcdGNvbnN0IGZpbmRBbmFsb2d1ZSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuanMtZmluZC1hbmFsb2d1ZScpO1xyXG5cclxuXHRcdGlmICggZmluZEFuYWxvZ3VlICkge1xyXG5cclxuXHRcdFx0Y29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJldmlldy1jYXJkLXJvdy10ZW1wbGF0ZScpLmlubmVySFRNTCxcclxuXHRcdFx0XHQgIHBhcmFtID0ge307XHJcblxyXG5cdFx0XHRwYXJhbS5pZCAgICAgICAgPSBmaW5kQW5hbG9ndWUuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcblx0XHRcdHBhcmFtLmFydGljbGVpZCA9IGZpbmRBbmFsb2d1ZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXJ0aWNsZWlkJyk7XHJcblx0XHRcdHBhcmFtLmxpbmsgICAgICA9IGZpbmRBbmFsb2d1ZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGluaycpO1xyXG5cdFx0XHRwYXJhbS5wcmljZSAgICAgPSBmaW5kQW5hbG9ndWUuZ2V0QXR0cmlidXRlKCdkYXRhLXByaWNlJyk7XHJcblx0XHRcdHBhcmFtLnByaWNlT2xkICA9IGZpbmRBbmFsb2d1ZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2Utb2xkJyk7XHJcblx0XHRcdHBhcmFtLmltZyAgICAgICA9IGZpbmRBbmFsb2d1ZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW1nJyk7XHJcblx0XHRcdHBhcmFtLmltZzJ4ICAgICA9IGZpbmRBbmFsb2d1ZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW1nMngnKTtcclxuXHRcdFx0cGFyYW0ubmFtZSAgICAgID0gZmluZEFuYWxvZ3VlLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJyk7XHJcblxyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtZm9ybS1maW5kLWFuYWxvZ3VlLXByb2R1Y3QnKS5pbm5lckhUTUwgPSBNdXN0YWNoZS5yZW5kZXIodGVtcGxhdGUsIHBhcmFtKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gINCj0LLQtdC00L7QvNC40YLRjCAgLyDQvdCw0LnRgtC4INCw0L3QsNC70L7Qs1xyXG5cclxuXHRcdGNvbnN0IGZpbmROb3RpZnkgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLmpzLWZpbmQtbm90aWZ5Jyk7XHJcblxyXG5cdFx0aWYgKGZpbmROb3RpZnkpIHtcclxuXHJcblx0XHRcdGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByZXZpZXctY2FyZC1yb3ctdGVtcGxhdGUnKS5pbm5lckhUTUwsXHJcblx0XHRcdFx0ICBwcm9kdWN0ID0gZmluZE5vdGlmeS5jbG9zZXN0KCcucHJvZHVjdCcpO1xyXG5cdFx0XHRcdCAgcHJldmlld0NhcmQgPSBmaW5kTm90aWZ5LmNsb3Nlc3QoJy5wcmV2aWV3LWNhcmQnKSxcclxuXHRcdFx0XHQgIHByb2R1Y3RNb2RhbCA9IGZpbmROb3RpZnkuY2xvc2VzdCgnI3ByZXZpZXctY2FyZC1jb2xvcicpLFxyXG5cdFx0XHRcdCAgcGFyYW0gPSB7fTtcclxuXHJcblx0XHRcdGlmICggcHJvZHVjdCApIHtcclxuXHJcblx0XHRcdFx0cGFyYW0uaWQgICAgICAgID0gcHJvZHVjdC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1idXknKS5pZC52YWx1ZTtcclxuXHRcdFx0XHRwYXJhbS5saW5rICAgICAgPSBsb2NhdGlvbi5ocmVmO1xyXG5cdFx0XHRcdHBhcmFtLnByaWNlICAgICA9IHBhcnNlSW50KHByb2R1Y3QucXVlcnlTZWxlY3RvcignLnByaWNlX192YWx1ZScpLnRleHRDb250ZW50KTtcclxuXHRcdFx0XHRwYXJhbS5wcmljZU9sZCAgPSBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJ2RhdGEtcHJpY2Utb2xkJyk7XHJcblx0XHRcdFx0cGFyYW0uaW1nICAgICAgID0gcHJvZHVjdC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1nYWxsZXJ5IGltZycpLnNyYztcclxuXHRcdFx0XHRwYXJhbS5pbWcyeCAgICAgPSBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWdhbGxlcnkgaW1nJykuc3JjO1xyXG5cdFx0XHRcdHBhcmFtLm5hbWUgICAgICA9IHByb2R1Y3QucXVlcnlTZWxlY3RvcignLnByb2R1Y3RfX3RpdGxlJykudGV4dENvbnRlbnQ7XHJcblxyXG5cdFx0XHRcdGlmICggcHJvZHVjdC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1idXknKS5hcnRpY2xlaWQgKSB7XHJcblxyXG5cdFx0XHRcdFx0cGFyYW0uYXJ0aWNsZWlkID0gcHJvZHVjdC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1idXknKS5hcnRpY2xlaWQudmFsdWU7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKCBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcmljZV9fb2xkJykgKSB7XHJcblxyXG5cdFx0XHRcdFx0cGFyYW0ucHJpY2VPbGQgPSBwYXJzZUludChwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcmljZV9fb2xkJykudGV4dENvbnRlbnQpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9IGVsc2UgaWYgKCBwcmV2aWV3Q2FyZCApIHtcclxuXHJcblx0XHRcdFx0cGFyYW0uaWQgICAgICAgID0gcHJldmlld0NhcmQucXVlcnlTZWxlY3RvcignLnByZXZpZXctY2FyZF9fZm9ybScpLmVsZW1lbnRzLmlkLnZhbHVlO1xyXG5cdFx0XHRcdHBhcmFtLmxpbmsgICAgICA9IHByZXZpZXdDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aWV3LWNhcmRfX3RpdGxlJykuaHJlZjtcclxuXHRcdFx0XHRwYXJhbS5wcmljZSAgICAgPSBwYXJzZUludChwcmV2aWV3Q2FyZC5xdWVyeVNlbGVjdG9yKCcucHJpY2VfX3ZhbHVlJykudGV4dENvbnRlbnQpO1xyXG5cdFx0XHRcdHBhcmFtLmltZyAgICAgICA9IHByZXZpZXdDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aWV3LWNhcmRfX2ltZyBpbWcnKS5zcmM7XHJcblx0XHRcdFx0cGFyYW0uaW1nMnggICAgID0gcHJldmlld0NhcmQucXVlcnlTZWxlY3RvcignLnByZXZpZXctY2FyZF9faW1nIGltZycpLnNyYztcclxuXHRcdFx0XHRwYXJhbS5uYW1lICAgICAgPSBwcmV2aWV3Q2FyZC5xdWVyeVNlbGVjdG9yKCcucHJldmlldy1jYXJkX19pbWcgaW1nJykuYWx0O1xyXG5cclxuXHRcdFx0XHRpZiAoIHByZXZpZXdDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aWV3LWNhcmRfX2Zvcm0nKS5lbGVtZW50cy5hcnRpY2xlaWQgKSB7XHJcblxyXG5cdFx0XHRcdFx0cGFyYW0uYXJ0aWNsZWlkID0gcHJldmlld0NhcmQucXVlcnlTZWxlY3RvcignLnByZXZpZXctY2FyZF9fZm9ybScpLmVsZW1lbnRzLmFydGljbGVpZC52YWx1ZTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoIHByZXZpZXdDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5wcmljZV9fb2xkJykgKSB7XHJcblxyXG5cdFx0XHRcdFx0cGFyYW0ucHJpY2VPbGQgPSBwYXJzZUludChwcmV2aWV3Q2FyZC5xdWVyeVNlbGVjdG9yKCcucHJpY2VfX29sZCcpLnRleHRDb250ZW50KTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCBwcm9kdWN0TW9kYWwgKSB7XHJcblxyXG5cdFx0XHRcdGNvbnN0IGNoZWNrZWQgPSBbLi4ucHJvZHVjdE1vZGFsLmVsZW1lbnRzLmFydGljbGVpZF0uZmluZCggZWwgPT4gZWwuY2hlY2tlZCApO1xyXG5cclxuXHRcdFx0XHRwYXJhbS5pZCAgICAgICAgPSBwcm9kdWN0TW9kYWwuZWxlbWVudHMuaWQudmFsdWU7XHJcblx0XHRcdFx0cGFyYW0uYXJ0aWNsZWlkID0gY2hlY2tlZC52YWx1ZTtcclxuXHRcdFx0XHRwYXJhbS5saW5rICAgICAgPSBwcm9kdWN0TW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsLWNhcmQtY29sb3JfX3RpdGxlIGEnKS5ocmVmO1xyXG5cdFx0XHRcdHBhcmFtLnByaWNlICAgICA9IHBhcnNlSW50KGNoZWNrZWQuZ2V0QXR0cmlidXRlKCdkYXRhLXByaWNlJykpO1xyXG5cdFx0XHRcdHBhcmFtLmltZyAgICAgICA9IGNoZWNrZWQuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpO1xyXG5cdFx0XHRcdHBhcmFtLmltZzJ4ICAgICA9IGNoZWNrZWQuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpO1xyXG5cdFx0XHRcdHBhcmFtLm5hbWUgICAgICA9IHByb2R1Y3RNb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY2FyZC1jb2xvcl9fdGl0bGUnKS50ZXh0Q29udGVudDtcclxuXHJcblx0XHRcdFx0aWYgKCBjaGVja2VkLmdldEF0dHJpYnV0ZSgnZGF0YS1wcmljZS1vbGQnKSApIHtcclxuXHJcblx0XHRcdFx0XHRwYXJhbS5wcmljZU9sZCA9IHBhcnNlSW50KGNoZWNrZWQuZ2V0QXR0cmlidXRlKCdkYXRhLXByaWNlLW9sZCcpKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWZvcm0tZmluZC1ub3RpZnktcHJvZHVjdCcpLmlubmVySFRNTCA9IE11c3RhY2hlLnJlbmRlcih0ZW1wbGF0ZSwgcGFyYW0pO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHQvLyDQstGL0LHQvtGAINC/0L7QtNGC0L7QstCw0YDQvtCyLCDQutCw0YLQsNC70L7Qs1xyXG5cclxuXHRcdGNvbnN0IGJ0blNlbGVjdExpc3RUb2dnbGUgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLmpzLXNlbGVjdC1saXN0LXRvZ2dsZScpO1xyXG5cclxuXHRcdGlmIChidG5TZWxlY3RMaXN0VG9nZ2xlKSB7XHJcblxyXG5cdFx0XHRidG5TZWxlY3RMaXN0VG9nZ2xlLmNsYXNzTGlzdC50b2dnbGUoJ2lzLW9wZW4nKTtcclxuXHJcblx0XHR9XHJcblxyXG4vKlxyXG5cclxuXHRcdGNvbnN0IGJ0bnNTZWxlY3RMaXN0VG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLXNlbGVjdC1saXN0LXRvZ2dsZScpO1xyXG5cclxuXHRcdGlmICggYnRuc1NlbGVjdExpc3RUb2dnbGUubGVuZ3RoID4gMCApIHtcclxuXHJcblx0XHRcdGNvbnN0IGJ0blNlbGVjdExpc3RUb2dnbGUgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLmpzLXNlbGVjdC1saXN0LXRvZ2dsZScpO1xyXG5cclxuXHRcdFx0aWYgKGJ0blNlbGVjdExpc3RUb2dnbGUpIHtcclxuXHJcblx0XHRcdFx0Wy4uLmJ0bnNTZWxlY3RMaXN0VG9nZ2xlXS5mb3JFYWNoKCBidG4gPT4gYnRuLmNsYXNzTGlzdC50b2dnbGUoJ2lzLW9wZW4nLCBidG4gPT09IGJ0blNlbGVjdExpc3RUb2dnbGUgJiYgYnRuU2VsZWN0TGlzdFRvZ2dsZS5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLW9wZW4nKSA9PT0gZmFsc2UpKTtcclxuXHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblxyXG5cdFx0XHRcdFsuLi5idG5zU2VsZWN0TGlzdFRvZ2dsZV0uZm9yRWFjaCggYnRuID0+IGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJykpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0qL1xyXG5cdH0pO1xyXG5cclxufSkoKTsiLCIvLyBmaWx0ZXJcclxuKCBmaWx0ZXIgPT4ge1xyXG5cclxuXHRpZighZmlsdGVyKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGNvbnN0IGl0ZW1zID0gZmlsdGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWx0ZXItcm93X19pdGVtJyksXHJcblx0XHQgIGl0ZW1SZXNldCA9IGZpbHRlci5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyLXJvd19faXRlbS0tcmVzZXQnKTtcclxuXHJcblx0Ly8gY2hhbmdlXHJcblxyXG5cdGZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0Y29uc3QgaXRlbSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuZmlsdGVyLXJvd19faXRlbScpO1xyXG5cclxuXHRcdGxldCBjaGVja2VkID0gZmFsc2U7XHJcblxyXG5cdFx0Wy4uLml0ZW0ucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrYm94X19pbnB1dCcpXS5mb3JFYWNoKCBjaGVja2JveCA9PiB7XHJcblxyXG5cdFx0XHRpZiAoIGNoZWNrYm94LmNoZWNrZWQgKSB7XHJcblxyXG5cdFx0XHRcdGNoZWNrZWQgPSB0cnVlO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdGl0ZW0ucXVlcnlTZWxlY3RvcignLmZpbHRlci1yb3dfX2J0bicpLmNsYXNzTGlzdC50b2dnbGUoJ2J0bi0tb3V0bGluZScsIGNoZWNrZWQgPT09IGZhbHNlKTtcclxuXHJcblx0XHRpdGVtUmVzZXQucXVlcnlTZWxlY3RvcignLmZpbHRlci1yb3dfX2J0bicpLmNsYXNzTGlzdC50b2dnbGUoJ2J0bi0tb3V0bGluZScsIGNoZWNrZWQgPT09IHRydWUpO1xyXG5cclxuXHR9KTtcclxuXHJcblx0Ly8gcmVzZXRcclxuXHJcblx0ZmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2V0JywgKCk9PiB7XHJcblxyXG5cdFx0Wy4uLml0ZW1zXS5mb3JFYWNoKCBpdGVtID0+IGl0ZW0ucXVlcnlTZWxlY3RvcignLmZpbHRlci1yb3dfX2J0bicpLmNsYXNzTGlzdC50b2dnbGUoJ2J0bi0tb3V0bGluZScsIGl0ZW0gIT09IGl0ZW1SZXNldCkgKTtcclxuXHJcblx0fSk7XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGNvbnN0IGlzSXRlbSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuZmlsdGVyLXJvd19faXRlbScpO1xyXG5cclxuXHRcdGlmICggaXNJdGVtICkge1xyXG5cclxuXHRcdFx0Wy4uLml0ZW1zXS5mb3JFYWNoKCBpdGVtID0+IHtcclxuXHJcblx0XHRcdFx0aXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1vcGVuJywgaXRlbSA9PT0gaXNJdGVtICYmIGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1vcGVuJykgPT09IGZhbHNlICk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0Wy4uLml0ZW1zXS5mb3JFYWNoKCBpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXItcm93JykpOyIsIi8vIGZpbHRlclxyXG4oIGZpbHRlciA9PiB7XHJcblxyXG5cdGlmKCFmaWx0ZXIpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Ly8gc2Nyb2xsVG9cclxuXHRjb25zdCBzY3JvbGxUbyA9IChlbGVtZW50LCB0bywgZHVyYXRpb24gPSA3MCkgPT4ge1xyXG5cclxuXHRcdGlmIChkdXJhdGlvbiA8PSAwKSByZXR1cm47XHJcblxyXG5cdFx0Y29uc3QgZGlmZmVyZW5jZSA9IHRvIC0gZWxlbWVudC5zY3JvbGxUb3AsXHJcblx0XHRcdCAgcGVyVGljayA9IGRpZmZlcmVuY2UgLyBkdXJhdGlvbiAqIDEwO1xyXG5cclxuXHRcdHNldFRpbWVvdXQoICgpPT4ge1xyXG5cclxuXHRcdFx0ZWxlbWVudC5zY3JvbGxUb3AgPSBlbGVtZW50LnNjcm9sbFRvcCArIHBlclRpY2s7XHJcblxyXG5cdFx0XHRpZiAoZWxlbWVudC5zY3JvbGxUb3AgPT09IHRvKSByZXR1cm47XHJcblxyXG5cdFx0XHRzY3JvbGxUbyhlbGVtZW50LCB0bywgZHVyYXRpb24gLSAxMCk7XHJcblxyXG5cdFx0fSwgMTApO1xyXG5cclxuXHR9XHJcblxyXG5cclxuXHRsZXQgd2luZG93U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuXHRjb25zdCBtb2JpbGVPcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLWZpbHRlci1tb2JpbGUtb3BlbicpO1xyXG5cclxuXHQvLyBjaGFuZ2VcclxuXHJcblx0ZmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuXHJcblx0XHQvLyBsaXZlLXNlYXJjaFxyXG5cclxuXHRcdGlmICggdGFyZ2V0LmNsb3Nlc3QoJy5qcy1saXZlLXNlYXJjaF9faW5wdXQnKSApIHtcclxuXHJcblx0XHRcdGNvbnN0IHZhbHVlID0gdGFyZ2V0LmNsb3Nlc3QoJy5qcy1saXZlLXNlYXJjaF9faW5wdXQnKS52YWx1ZS50b0xvd2VyQ2FzZSgpLFxyXG5cdFx0XHRcdCAgbGl2ZVNlYXJjaCA9IHRhcmdldC5jbG9zZXN0KCcuanMtbGl2ZS1zZWFyY2gnKSxcclxuXHRcdFx0XHQgIGl0ZW0gPSBsaXZlU2VhcmNoLnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1saXZlLXNlYXJjaF9faXRlbScpLFxyXG5cdFx0XHRcdCAgcmVzZXQgPSBsaXZlU2VhcmNoLnF1ZXJ5U2VsZWN0b3IoJy5qcy1saXZlLXNlYXJjaF9fcmVzZXQnKSxcclxuXHRcdFx0XHQgIGlucHV0ID0gbGl2ZVNlYXJjaC5xdWVyeVNlbGVjdG9yKCcuanMtbGl2ZS1zZWFyY2hfX2lucHV0Jyk7XHJcblxyXG5cdFx0XHRpZiAoIHZhbHVlLmxlbmd0aCA9PT0gMCApIHtcclxuXHJcblx0XHRcdFx0cmVzZXQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHRbLi4uaXRlbV0uZm9yRWFjaCggZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpICk7XHJcblxyXG5cdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJlc2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFsuLi5pdGVtXS5mb3JFYWNoKCBlbCA9PiBlbC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJywgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWxpdmUtc2VhcmNoJykudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh2YWx1ZSkgPT09IGZhbHNlICkpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG5cdC8vIGNsaWNrXHJcblxyXG5cdGZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcblxyXG5cdFx0Ly8gbGVnZW5kIHRvZ2dsZVxyXG5cclxuXHRcdGlmICggdGFyZ2V0LmNsb3Nlc3QoJy5maWx0ZXJfX2xlZ2VuZCcpICkge1xyXG5cclxuXHRcdFx0dGFyZ2V0LmNsb3Nlc3QoJy5maWx0ZXJfX2xlZ2VuZCcpLmNsYXNzTGlzdC50b2dnbGUoJ2lzLW9wZW4nKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbGV0dGVyXHJcblxyXG5cdFx0aWYgKCB0YXJnZXQuY2xvc2VzdCgnLmpzLWxldHRlcl9fYnRuJykgKSB7XHJcblxyXG5cdFx0XHRjb25zdCBib3ggPSB0YXJnZXQuY2xvc2VzdCgnLmpzLWxldHRlcicpLFxyXG5cdFx0XHRcdCAgc2Nyb2xsTGlzdCA9IGJveC5xdWVyeVNlbGVjdG9yKCcuanMtbGV0dGVyX19zY3JvbGwnKSxcclxuXHRcdFx0XHQgIGl0ZW0gPSBib3gucXVlcnlTZWxlY3RvckFsbCgnLmpzLWxldHRlcl9faXRlbScpLFxyXG5cdFx0XHRcdCAgbGV0dGVyID0gdGFyZ2V0LmNsb3Nlc3QoJy5qcy1sZXR0ZXJfX2J0bicpLmdldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScpO1xyXG5cclxuXHRcdFx0aWYgKCBsZXR0ZXIgPT09ICd0b3AnICkge1xyXG5cclxuXHRcdFx0XHRzY3JvbGxUbyhzY3JvbGxMaXN0LCAwKTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRbLi4uaXRlbV0uZXZlcnkoIGVsID0+IHtcclxuXHJcblx0XHRcdFx0aWYgKCBsZXR0ZXIgPT09IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1sZXR0ZXInKSApIHtcclxuXHJcblx0XHRcdFx0XHRzY3JvbGxUbyhzY3JvbGxMaXN0LCBlbC5vZmZzZXRUb3ApO1xyXG5cclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGxpdmUtc2VhcmNoXHJcblxyXG5cdFx0aWYgKCB0YXJnZXQuY2xvc2VzdCgnLmpzLWxpdmUtc2VhcmNoX19yZXNldCcpICkge1xyXG5cclxuXHRcdFx0Y29uc3QgbGl2ZVNlYXJjaCA9IHRhcmdldC5jbG9zZXN0KCcuanMtbGl2ZS1zZWFyY2gnKSxcclxuXHRcdFx0XHQgIGl0ZW0gPSBsaXZlU2VhcmNoLnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1saXZlLXNlYXJjaF9faXRlbScpLFxyXG5cdFx0XHRcdCAgaW5wdXQgPSBsaXZlU2VhcmNoLnF1ZXJ5U2VsZWN0b3IoJy5qcy1saXZlLXNlYXJjaF9faW5wdXQnKTtcclxuXHJcblx0XHRcdGlucHV0LnZhbHVlID0gJyc7XHJcblx0XHRcdHRhcmdldC5jbG9zZXN0KCcuanMtbGl2ZS1zZWFyY2hfX3Jlc2V0JykuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuXHRcdFx0Wy4uLml0ZW1dLmZvckVhY2goIGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSApO1xyXG5cclxuXHRcdFx0aW5wdXQuZm9jdXMoKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gZmlsdGVyIGNsb3NlXHJcblxyXG5cdFx0aWYgKCB0YXJnZXQuY2xvc2VzdCgnLmZpbHRlcl9fYnRuLWNsb3NlJykgKSB7XHJcblxyXG5cdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWZpbHRlci1zaG93Jyk7XHJcblxyXG5cdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCx3aW5kb3dTY3JvbGwpO1xyXG5cclxuXHRcdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsLWJlaGF2aW9yLW9mZicpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcbi8vIG9wZW4gZmlsdGVyXHJcblxyXG5cdFsuLi5tb2JpbGVPcGVuXS5mb3JFYWNoKCBidG4gPT4ge1xyXG5cclxuXHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5cclxuXHRcdFx0d2luZG93U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuXHRcdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Njcm9sbC1iZWhhdmlvci1vZmYnKTtcclxuXHJcblx0XHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHtcclxuXHJcblx0XHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdpcy1maWx0ZXItc2hvdycpO1xyXG5cdFx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLDApO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxuLy8gc29ydFxyXG5cclxuXHRjb25zdCBzb3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWZpbHRlci1jaGFuZ2UnKTtcclxuXHJcblx0aWYgKHNvcnQpIHtcclxuXHJcblx0XHRzb3J0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0Y29uc29sZS5sb2coZXZlbnQudGFyZ2V0KTtcclxuXHJcblx0XHRcdGlmKCBmaWx0ZXIuZWxlbWVudHNbZXZlbnQudGFyZ2V0Lm5hbWVdICkge1xyXG5cclxuXHRcdFx0XHRmaWx0ZXIuZWxlbWVudHNbZXZlbnQudGFyZ2V0Lm5hbWVdLnZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG5cclxuXHRcdFx0XHRmaWx0ZXIuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIikpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG4vLyAgZm9vdFxyXG5cclxuXHRjb25zdCBmb290ID0gZmlsdGVyLnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXJfX2Zvb3QnKTtcclxuXHJcblx0aWYgKGZvb3QpIHtcclxuXHJcblx0XHRmaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRmb290LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRmaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2V0XCIsICgpID0+IHtcclxuXHJcblx0XHRcdGZvb3QuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbHRlcicpKTsiLCIvLyBDbGlwYm9hcmRKU1xuXG5cdCggZWxlbXMgPT4ge1xuXG5cdFx0aWYgKCBlbGVtcy5sZW5ndGggKSB7XG5cblx0XHRcdFsuLi5lbGVtc10uZm9yRWFjaCggYnRuID0+IHtcblxuXHRcdFx0XHRjb25zdCBjbGlwYm9hcmQgPSBuZXcgQ2xpcGJvYXJkSlMoYnRuKTtcblxuXHRcdFx0XHRjbGlwYm9hcmQub24oJ3N1Y2Nlc3MnLCAoKT0+IHtcblxuXHRcdFx0XHRcdGJ0bi5jbGFzc0xpc3QuYWRkKCdpcy1jbGlwYm9hcmQtc3VjY2VzcycpO1xuXG5cdFx0XHRcdFx0c2V0VGltZW91dCggKCk9PiB7XG5cblx0XHRcdFx0XHRcdGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1jbGlwYm9hcmQtc3VjY2VzcycpO1xuXG5cdFx0XHRcdFx0fSwzMDAwKTtcblxuXHRcdFx0XHR9KTtcblxuXHRcdFx0fSk7XG5cblx0XHR9XG5cblx0fSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtY2xpcGJvYXJkLXRleHRdJykpO1xuXG4vLyBhdXRvc2l6ZVxuXG5cdGF1dG9zaXplKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RleHRhcmVhLmF1dG9zaXplJykpO1xuXG4vLyBmaWxlXG5cblxuKCBmaWxldXBsb2FkID0+IHtcblxuXHRpZihmaWxldXBsb2FkLmxlbmd0aCl7XG5cblx0XHRjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaWxldXBsb2FkLXRlbXBsYXRlJykuaW5uZXJIVE1MO1xuXG5cdFx0Wy4uLmZpbGV1cGxvYWRdLmZvckVhY2goIGZpbGUgPT4ge1xuXG5cdFx0XHRjb25zdCBpbnB1dCA9IGZpbGUucXVlcnlTZWxlY3RvcignW3R5cGU9XCJmaWxlXCJdJyksXG5cdFx0XHRcdCAgYnRuID0gZmlsZS5xdWVyeVNlbGVjdG9yKCcuZmlsZXVwbG9hZF9fYnRuJyk7XG5cblx0XHRcdGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZXZlbnQgPT4ge1xuXG5cdFx0XHRcdGJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG5cblx0XHRcdFx0ZmlsZS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIE11c3RhY2hlLnJlbmRlcih0ZW1wbGF0ZSwgeyBuYW1lIDogaW5wdXQudmFsdWUucmVwbGFjZSgvLipbXFwvXFxcXF0vLCAnJykgfSkpO1xuLypcblx0XHRcdFx0Y29uc29sZS5sb2coJ1NlbGVjdGVkIGZpbGU6ICcgKyBpbnB1dC5maWxlcy5pdGVtKDApLm5hbWUpO1xuXHRcdFx0XHRjb25zb2xlLmxvZygnU2VsZWN0ZWQgZmlsZTogJyArIGlucHV0LmZpbGVzLml0ZW0oMCkuc2l6ZSk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdTZWxlY3RlZCBmaWxlOiAnICsgaW5wdXQuZmlsZXMuaXRlbSgwKS50eXBlKTtcblxuKi9cdFx0XHR9KTtcblxuXHRcdFx0ZmlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcblxuXHRcdFx0XHRpZiAoIGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuZmlsZXVwbG9hZF9fcmVzZXQnKSApIHtcblxuXHRcdFx0XHRcdGlucHV0LnZhbHVlID0gJyc7XG5cdFx0XHRcdFx0YnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcblx0XHRcdFx0XHRldmVudC50YXJnZXQuY2xvc2VzdCgnLmZpbGV1cGxvYWRfX2J0bicpLnJlbW92ZSgpO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fSk7XG5cblx0XHR9KTtcblxuXHR9XG5cbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWxldXBsb2FkJykpO1xuXG5cblxuKCBmaWxldXBsb2FkID0+IHtcblxuXHRpZihmaWxldXBsb2FkLmxlbmd0aCl7XG5cblx0XHRjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkcmFnLWFuZC1kcm9wLXRlbXBsYXRlJykuaW5uZXJIVE1MO1xuXG5cdFx0Wy4uLmZpbGV1cGxvYWRdLmZvckVhY2goIGZpbGUgPT4ge1xuXG5cdFx0XHRjb25zdCBpbnB1dCA9IGZpbGUucXVlcnlTZWxlY3RvcignW3R5cGU9XCJmaWxlXCJdJyksXG5cdFx0XHRcdCAgYnRuID0gZmlsZS5xdWVyeVNlbGVjdG9yKCcuZHJhZy1hbmQtZHJvcF9fYnRuJyk7XG5cblx0XHRcdGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZXZlbnQgPT4ge1xuXG5cdFx0XHRcdGJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG5cblx0XHRcdFx0ZmlsZS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIE11c3RhY2hlLnJlbmRlcih0ZW1wbGF0ZSwgeyBuYW1lIDogaW5wdXQudmFsdWUucmVwbGFjZSgvLipbXFwvXFxcXF0vLCAnJykgfSkpO1xuLypcblx0XHRcdFx0Y29uc29sZS5sb2coJ1NlbGVjdGVkIGZpbGU6ICcgKyBpbnB1dC5maWxlcy5pdGVtKDApLm5hbWUpO1xuXHRcdFx0XHRjb25zb2xlLmxvZygnU2VsZWN0ZWQgZmlsZTogJyArIGlucHV0LmZpbGVzLml0ZW0oMCkuc2l6ZSk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdTZWxlY3RlZCBmaWxlOiAnICsgaW5wdXQuZmlsZXMuaXRlbSgwKS50eXBlKTtcblxuKi9cdFx0XHR9KTtcblxuXHRcdFx0ZmlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcblxuXHRcdFx0XHRpZiAoIGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuZHJhZy1hbmQtZHJvcF9fcmVzZXQnKSApIHtcblxuXHRcdFx0XHRcdGlucHV0LnZhbHVlID0gJyc7XG5cdFx0XHRcdFx0YnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcblx0XHRcdFx0XHRldmVudC50YXJnZXQuY2xvc2VzdCgnLmRyYWctYW5kLWRyb3BfX2J0bicpLnJlbW92ZSgpO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fSk7XG5cblx0XHR9KTtcblxuXHR9XG5cbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcmFnLWFuZC1kcm9wJykpO1xuXG5cbiggZmlsZXVwbG9hZCA9PiB7XG5cblx0aWYoZmlsZXVwbG9hZC5sZW5ndGgpe1xuXG5cdFx0Y29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtZmlsZS10ZW1wbGF0ZScpLmlubmVySFRNTDtcblxuXHRcdFsuLi5maWxldXBsb2FkXS5mb3JFYWNoKCBmaWxlID0+IHtcblxuXHRcdFx0Y29uc3QgaW5wdXQgPSBmaWxlLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1maWxlX19pbnB1dCcpLFxuXHRcdFx0XHQgIGRlc2MgPSBmaWxlLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1maWxlX19kZXNjJyk7XG5cblx0XHRcdGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZXZlbnQgPT4ge1xuXG5cdFx0XHRcdGxldCB2YWx1ZSA9ICcnO1xuXG5cdFx0XHRcdFsuLi5pbnB1dC5maWxlc10uZm9yRWFjaCggZmlsZSA9PiB7XG5cblx0XHRcdFx0XHRpZiAoIHZhbHVlLmxlbmd0aCApIHtcblxuXHRcdFx0XHRcdFx0dmFsdWUgKz0gJywgJztcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGxldCBzaXplID0gKGZpbGUuc2l6ZSAvIDEwMjQgLyAxMDI0KS50b0ZpeGVkKDIpO1xuXG5cdFx0XHRcdFx0dmFsdWUgKz0gZmlsZS5uYW1lICsgJyAoJyArIHNpemUgKyAn0JzQsSknO1xuXG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGZpbGUucXVlcnlTZWxlY3RvcignLmJ0bicpLnJlbW92ZSgpO1xuXG5cdFx0XHRcdGlucHV0Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCBNdXN0YWNoZS5yZW5kZXIodGVtcGxhdGUpKTtcblxuXHRcdFx0XHRkZXNjLnRleHRDb250ZW50ID0gdmFsdWU7XG5cblx0XHRcdH0pO1xuXG5cdFx0fSk7XG5cblx0fVxuXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwtZmlsZScpKTsiLCJcclxuKCBoZWFkZXIgPT4ge1xyXG5cclxuXHRpZiAoaGVhZGVyKSB7XHJcblxyXG5cdFx0Y29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWNhdGFsb2cnKTtcclxuXHJcblx0XHRsZXQgcmVzaXplVGltZW91dCA9IG51bGw7XHJcblxyXG5cdFx0aWYgKCB3aW5kb3cuaW5uZXJXaWR0aCA+IDEyNDkgKSB7XHJcblxyXG5cdFx0XHRoZWFkZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtZml4ZWQnLCB3aW5kb3cucGFnZVlPZmZzZXQgPiAzNik7IC8vIG1lbnUgdG9wXHJcblx0XHRcdG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtdHJhbnNwYXJlbnQnLCB3aW5kb3cucGFnZVlPZmZzZXQgPiA4Nik7IC8vIDYwICsgNTMgLSAzN1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcblxyXG5cdFx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdHJlc2l6ZVRpbWVvdXQgPT09IG51bGwgJiZcclxuXHRcdFx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbC1zaG93JykgPT09IGZhbHNlICYmXHJcblx0XHRcdFx0XHR3aW5kb3cuaW5uZXJXaWR0aCA+IDEyNDlcclxuXHRcdFx0XHQpIHtcclxuXHJcblx0XHRcdFx0XHRyZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dCggKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdFx0cmVzaXplVGltZW91dCA9IG51bGw7XHJcblxyXG5cdFx0XHRcdFx0XHRoZWFkZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtZml4ZWQnLCB3aW5kb3cucGFnZVlPZmZzZXQgPiAzNik7XHJcblx0XHRcdFx0XHRcdG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtdHJhbnNwYXJlbnQnLCB3aW5kb3cucGFnZVlPZmZzZXQgPiA4Nik7XHJcblxyXG5cdFx0XHRcdFx0fSwgMTAwKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gc2VhcmNoXHJcblxyXG5cdFx0Y29uc3QgaGVhZGVyU2VhcmNoID0gaGVhZGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXItc2VhcmNoX19pbnB1dCcpO1xyXG5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgYnRuT3BlbiA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuaGVhZGVyLXNlYXJjaC1zaG93Jyk7XHJcblxyXG5cdFx0XHRpZiAoIGJ0bk9wZW4gKSB7XHJcblxyXG5cdFx0XHRcdGhlYWRlci5jbGFzc0xpc3QuYWRkKCdpcy1zZWFyY2gnKTtcclxuXHJcblx0XHRcdFx0c2V0VGltZW91dCggKCkgPT4gWy4uLmhlYWRlclNlYXJjaF0uZm9yRWFjaCggaW5wdXQgPT4gaW5wdXQuZm9jdXMoKSApLCAxMDApO1xyXG5cclxuXHRcdFx0fVxyXG4vKlxyXG5cdFx0XHRpZiAoIGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuaGVhZGVyJykgPT09IG51bGwgKSB7XHJcblxyXG5cdFx0XHRcdGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdpcy1zZWFyY2gnKTtcclxuXHRcdFx0XHRbLi4uaGVhZGVyU2VhcmNoXS5mb3JFYWNoKCBpbnB1dCA9PiBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1mb2N1cycpICk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG4qL1x0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpKTsiLCIoIGVsZW1zID0+IHtcclxuXHJcblx0aWYoIWVsZW1zLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuXHRzY3JpcHQuc3JjID0gJy9qcy9pbnB1dG1hc2subWluLmpzJztcclxuXHRzY3JpcHQub25sb2FkID0gKCkgPT4ge1xyXG5cclxuXHRcdFsuLi5lbGVtc10uZm9yRWFjaCggZWwgPT4ge1xyXG5cclxuXHRcdFx0bGV0IG1hc2tJbnB1dDtcclxuXHJcblx0XHRcdGlmKGVsLmNsYXNzTGlzdC5jb250YWlucygnaW5wdXRtYXNrLS1waG9uZScpKSB7XHJcblxyXG5cdFx0XHRcdG1hc2tJbnB1dCA9IG5ldyBJbnB1dG1hc2soe1xyXG5cdFx0XHRcdFx0bWFzazogJys3ICggOTk5ICkgOTk5IDk5IDk5JyxcclxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyOiAnLSdcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdG1hc2tJbnB1dC5tYXNrKGVsKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fTtcclxuXHJcblx0c2V0VGltZW91dCggKCkgPT4gZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpLCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmFzdExvYWRTY3JpcHQnKSA/IDAgOiAxMDAwMCk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5wdXRtYXNrJykpOyIsIiggaXRlbXMgPT4ge1xyXG5cclxuXHRpZighaXRlbXMubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdFsuLi5pdGVtc10uZm9yRWFjaCggaXRlbSA9PiB7XHJcblxyXG5cdFx0Y29uc3QgYnRuID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcub3JkZXJsaXN0X190b2dnbGUgLmJ1dHRvbicpO1xyXG5cclxuXHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcblx0XHRcdGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtb3BlbicpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vcmRlcmxpc3QnKSk7IiwiKCBtZW51ID0+IHtcclxuXHJcblx0aWYobWVudSkge1xyXG5cclxuXHRcdGxldCBzY3JvbGxMZXZlbDIgPSBudWxsO1xyXG5cclxuXHRcdGNvbnN0IGJhY2sgPSBtZW51LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWNhdGFsb2dfX2JhY2snKSxcclxuXHRcdFx0ICBib2R5ID0gbWVudS5xdWVyeVNlbGVjdG9yKCcubWVudS1jYXRhbG9nX19ib2R5Jyk7XHJcblxyXG5cdFx0Ly8g0LjQutC+0L3QutCwIGxldmVsMiArXHJcblxyXG5cdFx0Y29uc3QgbGlua0J0biA9IG1lbnUucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtY2F0YWxvZ19fbGluay5pcy1idG4nKSxcclxuXHRcdFx0ICBpY29QbHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJzdmdcIik7XHJcblxyXG5cdFx0aWNvUGx1cy5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcInZpZXdCb3hcIiwgXCIwIDAgMjQgMjRcIik7XHJcblx0XHRpY29QbHVzLnNldEF0dHJpYnV0ZU5TKG51bGwsIFwid2lkdGhcIiwgMjQpO1xyXG5cdFx0aWNvUGx1cy5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcImhlaWdodFwiLCAyNCk7XHJcblx0XHRpY29QbHVzLnNldEF0dHJpYnV0ZSgncm9sZScsICdidXR0b24nKTtcclxuXHJcblx0XHRpY29QbHVzLmlubmVySFRNTCA9ICc8cmVjdCB4PVwiMTFcIiB5PVwiNlwiIHdpZHRoPVwiMlwiIGhlaWdodD1cIjEyXCIvPjxyZWN0IHg9XCI2XCIgeT1cIjExXCIgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjJcIi8+JztcclxuXHJcblx0XHQvLyDQuNC60L7QvdC60LAgcmlnaHQgbGV2ZWwxINC4IGxldmVsMlxyXG5cdFx0Y29uc3QgbGV2ZWxfMSA9IG1lbnUucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtY2F0YWxvZ19fbGluay0tYXJyb3csIC5tZW51LWNhdGFsb2dfX2xpbmstLW9ubHktbW9iaWxlJyksXHJcblx0XHRcdCAgaWNvUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInN2Z1wiKTtcclxuXHJcblx0XHRpY29SaWdodC5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcInZpZXdCb3hcIiwgXCIwIDAgMjQgMjRcIik7XHJcblx0XHRpY29SaWdodC5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcIndpZHRoXCIsIDMyKTtcclxuXHRcdGljb1JpZ2h0LnNldEF0dHJpYnV0ZU5TKG51bGwsIFwiaGVpZ2h0XCIsIDMyKTtcclxuXHRcdGljb1JpZ2h0LnNldEF0dHJpYnV0ZSgncm9sZScsICdidXR0b24nKTtcclxuXHJcblx0XHRpY29SaWdodC5pbm5lckhUTUwgPSAnPHVzZSB4bGluazpocmVmPVwiI3N2Zy1jaGV2cm9uLXJpZ2h0XCIvPic7XHJcblxyXG5cdFx0Ly8gcmVzaXplXHJcblxyXG5cdFx0Y29uc3QgcmVzaXplID0gKCkgPT4ge1xyXG5cclxuXHRcdFx0aWYgKCB3aW5kb3cuaW5uZXJXaWR0aCA8IDEyNTAgKSB7XHJcblxyXG5cdFx0XHRcdFsuLi5sZXZlbF8xXS5mb3JFYWNoKCBidG4gPT4ge1xyXG5cclxuXHRcdFx0XHRcdGlmICggYnRuLnF1ZXJ5U2VsZWN0b3IoJ3N2ZycpID09PSBudWxsICkge1xyXG5cclxuXHRcdFx0XHRcdFx0YnRuLmFwcGVuZChpY29SaWdodC5jbG9uZU5vZGUodHJ1ZSkpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFsuLi5saW5rQnRuXS5mb3JFYWNoKCBidG4gPT4ge1xyXG5cclxuXHRcdFx0XHRcdGlmICggYnRuLnF1ZXJ5U2VsZWN0b3IoJ3N2ZycpICkge1xyXG5cclxuXHRcdFx0XHRcdFx0YnRuLnF1ZXJ5U2VsZWN0b3IoJ3N2ZycpLnJlbW92ZSgpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRidG4uYXBwZW5kKGljb1JpZ2h0LmNsb25lTm9kZSh0cnVlKSk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0YmFjay5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblx0XHRcdFx0Ym9keS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdFsuLi5sZXZlbF8xXS5mb3JFYWNoKCBidG4gPT4ge1xyXG5cclxuXHRcdFx0XHRcdGlmICggYnRuLnF1ZXJ5U2VsZWN0b3IoJ3N2ZycpICkge1xyXG5cclxuXHRcdFx0XHRcdFx0YnRuLnF1ZXJ5U2VsZWN0b3IoJ3N2ZycpLnJlbW92ZSgpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFsuLi5saW5rQnRuXS5mb3JFYWNoKCBidG4gPT4ge1xyXG5cclxuXHRcdFx0XHRcdGlmICggYnRuLnF1ZXJ5U2VsZWN0b3IoJ3N2ZycpICkge1xyXG5cclxuXHRcdFx0XHRcdFx0YnRuLnF1ZXJ5U2VsZWN0b3IoJ3N2ZycpLnJlbW92ZSgpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRidG4uYXBwZW5kKGljb1BsdXMuY2xvbmVOb2RlKHRydWUpKTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHJlc2l6ZSgpO1xyXG5cclxuXHRcdGxldCByZXNpemVUaW1lb3V0ID0gbnVsbCxcclxuXHRcdFx0d2luZG93V2lkdGhPTGQgPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XHJcblxyXG5cdFx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdGlmIChyZXNpemVUaW1lb3V0ID09PSBudWxsKSB7XHJcblxyXG5cdFx0XHRcdFx0cmVzaXplVGltZW91dCA9IHNldFRpbWVvdXQoICgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRcdHJlc2l6ZVRpbWVvdXQgPSBudWxsO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYod2luZG93V2lkdGhPTGQgIT09IHdpbmRvdy5pbm5lcldpZHRoKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHJlc2l6ZSgpO1xyXG5cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdH0sIDEwMCk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIGVuZCByZXNpemVcclxuXHJcblxyXG5cdFx0Ly8g0LrQu9C40Log0L/QviBsZXZlbDIgPT4g0YDQsNGB0LrRgNGL0YLQuNC1IGxldmVsM1xyXG5cclxuXHRcdFsuLi5saW5rQnRuXS5mb3JFYWNoKCBidG4gPT4ge1xyXG5cclxuXHRcdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0XHRpZiAoIGV2ZW50LnRhcmdldC5jbG9zZXN0KCdbcm9sZT1cImJ1dHRvblwiXScpICkge1xyXG5cclxuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRcdFx0YnRuLmNsYXNzTGlzdC50b2dnbGUoJ2lzLW9wZW4nKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gbW9iaWxlXHJcblxyXG5cdFx0Ly8g0LrQu9C40Log0L/QviBsZXZlbDIgPT4g0YDQsNGB0LrRgNGL0YLQuNC1IGxldmVsM1xyXG5cclxuXHRcdFsuLi5sZXZlbF8xXS5mb3JFYWNoKCBidG4gPT4ge1xyXG5cclxuXHRcdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0XHRpZiAoIHdpbmRvdy5pbm5lcldpZHRoIDwgMTI1MCAmJiBldmVudC50YXJnZXQuY2xvc2VzdCgnW3JvbGU9XCJidXR0b25cIl0nKSApIHtcclxuXHJcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0XHRcdHNjcm9sbExldmVsMiA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcblx0XHRcdFx0XHRiYWNrLmlubmVySFRNTCA9IGJ0bi5pbm5lckhUTUw7XHJcblx0XHRcdFx0XHRib2R5LmlubmVySFRNTCA9IGJ0bi5uZXh0RWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MO1xyXG5cclxuXHRcdFx0XHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRcdGJhY2suY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cdFx0XHRcdFx0XHRib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gYmFja1xyXG5cclxuXHRcdGJhY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG5cdFx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdGJhY2suY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cdFx0XHRcdGJvZHkuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCxzY3JvbGxMZXZlbDIpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gYm9keVxyXG5cclxuXHRcdGJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCBidG4gPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLmlzLWJ0bicpO1xyXG5cclxuXHRcdFx0aWYgKCBidG4gJiYgZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ1tyb2xlPVwiYnV0dG9uXCJdJykgKSB7XHJcblxyXG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRcdGJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdpcy1vcGVuJyk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gZGVsYXkgaG92ZXJcclxuXHJcblx0XHRjb25zdCBsaXN0ID0gbWVudS5xdWVyeVNlbGVjdG9yKCcubWVudS1jYXRhbG9nX19saXN0Jyk7XHJcblxyXG5cdFx0bGlzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywoKT0+e1xyXG5cclxuXHRcdFx0cmVzaXplVGltZW91dCAmJiBjbGVhclRpbWVvdXQocmVzaXplVGltZW91dCk7XHJcblxyXG5cdFx0XHRyZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dCggKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdHJhbnNpdGlvbkRlbGF5TWVudScsICcwcycpO1xyXG5cclxuXHRcdFx0fSwgMTAwMCk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0bGlzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywoKT0+e1xyXG5cclxuXHRcdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXRyYW5zaXRpb25EZWxheU1lbnUnLCAnMXMnKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtY2F0YWxvZycpKTtcclxuXHJcbi8vIHRvb2dsZVxyXG4oIG1lbnUgPT4ge1xyXG5cclxuXHQvLyBidG4gdG9nZ2xlXHJcblxyXG5cdGxldCB3aW5kb3dTY3JvbGwgPSBudWxsO1xyXG5cclxuXHQoIGJ0bnMgPT4ge1xyXG5cclxuXHRcdFsuLi5idG5zXS5mb3JFYWNoKCBidG4gPT4ge1xyXG5cclxuXHRcdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHR3aW5kb3dTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG5cdFx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbWVudS1zaG93Jyk7XHJcblx0XHRcdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Njcm9sbC1iZWhhdmlvci1vZmYnKTtcclxuXHRcdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwwKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLW1lbnUtb3BlbicpKTtcclxuXHJcblx0KCBidG5zID0+IHtcclxuXHJcblx0XHRbLi4uYnRuc10uZm9yRWFjaCggYnRuID0+IHtcclxuXHJcblx0XHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcblx0XHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LXNob3cnKTtcclxuXHRcdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCx3aW5kb3dTY3JvbGwpO1xyXG5cclxuXHRcdFx0XHRzZXRUaW1lb3V0KCAoKSA9PiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsLWJlaGF2aW9yLW9mZicpICk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1tZW51LWNsb3NlJykpO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtY2F0YWxvZycpKTtcclxuXHJcbi8vIHBhZ2UtYmFyXHJcbiggYnRuID0+IHtcclxuXHJcblx0aWYgKCBidG4gKSB7XHJcblxyXG5cdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0YnRuLmNsYXNzTGlzdC50b2dnbGUoJ2lzLW9wZW4nKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdGlmICggZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5wYWdlLWJhcl9fbWVudSwgLmxrLW1lbnUnKSA9PT0gbnVsbCApIHtcclxuXHJcblx0XHRcdFx0YnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9wZW4nKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UtYmFyX19tZW51LWJ0biwgLmxrLW1lbnVfX3RvZ2dsZS1idG4nKSk7IiwiKCBtb2RhbCA9PiB7XHJcblxyXG5cdGlmKCFtb2RhbCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRjb25zdCBpdGVtcyA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbF9faXRlbScpLFxyXG5cdFx0ICB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKSxcclxuXHRcdCAgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWNhdGFsb2cnKSxcclxuXHRcdCAgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpLFxyXG5cdFx0ICB0aXRsZURlZmF1bHQgPSB7fTtcclxuXHJcblx0bGV0IGFjdGl2ZU1vZGFsID0gbnVsbCxcclxuXHRcdG1lbnVUb3AgPSBudWxsLFxyXG5cdFx0aGVhZGVyVG9wID0gbnVsbCxcclxuXHRcdHdpbmRvd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcblx0bW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignaGlkZScsICgpID0+IHtcclxuXHJcblx0XHRhY3RpdmVNb2RhbCAmJiBhY3RpdmVNb2RhbC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcIm1vZGFsQ2xvc2VcIikpO1xyXG5cclxuXHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtc2hvdycpO1xyXG5cdFx0d3JhcHBlci5zdHlsZS50b3AgPSAwO1xyXG5cdFx0d2luZG93LnNjcm9sbFRvKDAsd2luZG93U2Nyb2xsKTtcclxuXHRcdGFjdGl2ZU1vZGFsID0gZmFsc2U7XHJcblxyXG5cdFx0bWVudS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XHJcblx0XHRoZWFkZXIucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xyXG5cclxuXHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHtcclxuXHJcblx0XHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzY3JvbGwtYmVoYXZpb3Itb2ZmJyk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHRtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRpZihldmVudC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuXHJcblx0XHRcdG1vZGFsLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiaGlkZVwiKSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcblx0Y29uc3QgbW9kYWxTaG93ID0gKHNlbGVjdG9yLHRpdGxlLGlkKSA9PiB7XHJcblxyXG5cdFx0aWYoIWFjdGl2ZU1vZGFsKXtcclxuXHJcblx0XHRcdHdpbmRvd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcblx0XHRcdGlmICggaGVhZGVyLmNsYXNzTGlzdC5jb250YWlucygnaXMtZml4ZWQnKSApIHtcclxuXHJcblx0XHRcdFx0bWVudVRvcCA9IHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUobWVudSkudG9wKSxcclxuXHRcdFx0XHRoZWFkZXJUb3AgPSBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKGhlYWRlcikudG9wKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0YWN0aXZlTW9kYWwgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2l0ZW0tLScgKyBzZWxlY3Rvcik7XHJcblxyXG5cdFx0Y29uc3QgYXV0b2ZvY3VzID0gYWN0aXZlTW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1hdXRvZm9jdXMnKTtcclxuXHJcblx0XHRpZiAoIGFjdGl2ZU1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fdGl0bGUnKSApIHtcclxuXHJcblx0XHRcdGlmICggdGl0bGVEZWZhdWx0W3NlbGVjdG9yXSA9PT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0XHR0aXRsZURlZmF1bHRbc2VsZWN0b3JdID0gYWN0aXZlTW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsX190aXRsZScpLnRleHRDb250ZW50O1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0YWN0aXZlTW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsX190aXRsZScpLnRleHRDb250ZW50ID0gdGl0bGUgPyB0aXRsZSA6IHRpdGxlRGVmYXVsdFtzZWxlY3Rvcl07XHJcblxyXG5cdFx0XHRpZiAoIGFjdGl2ZU1vZGFsLmVsZW1lbnRzLnN1YmplY3QgKSB7XHJcblxyXG5cdFx0XHRcdGFjdGl2ZU1vZGFsLmVsZW1lbnRzLnN1YmplY3QudmFsdWUgPSB0aXRsZSA/IHRpdGxlIDogdGl0bGVEZWZhdWx0W3NlbGVjdG9yXTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCBhY3RpdmVNb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoJ2Zvcm0nKSAmJiBhY3RpdmVNb2RhbC5lbGVtZW50cy5pZCApIHtcclxuXHJcblx0XHRcdGFjdGl2ZU1vZGFsLmVsZW1lbnRzLmlkLnZhbHVlID0gaWQ7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdFsuLi5pdGVtc10uZm9yRWFjaCggZWwgPT4gZWwuY2xhc3NMaXN0LnRvZ2dsZSgndmlzdWFsbHloaWRkZW4nLCBlbCAhPT0gYWN0aXZlTW9kYWwpICk7XHJcblxyXG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Njcm9sbC1iZWhhdmlvci1vZmYnKTtcclxuXHJcblx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCAoKSA9PiB7XHJcblxyXG5cdFx0XHR3cmFwcGVyLnN0eWxlLnRvcCA9IC13aW5kb3dTY3JvbGwgKyAncHgnO1xyXG5cclxuXHRcdFx0aWYgKCBoZWFkZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1maXhlZCcpICkge1xyXG5cclxuXHRcdFx0XHRtZW51LnN0eWxlLnRvcCA9IHdpbmRvd1Njcm9sbCArIG1lbnVUb3AgKyAncHgnO1xyXG5cdFx0XHRcdGhlYWRlci5zdHlsZS50b3AgPSB3aW5kb3dTY3JvbGwgKyBoZWFkZXJUb3AgKyAncHgnO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdtb2RhbC1zaG93Jyk7XHJcblxyXG5cdFx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLDApO1xyXG5cclxuXHRcdFx0XHRhY3RpdmVNb2RhbC5mb2N1cygpO1xyXG5cclxuXHRcdFx0XHRpZiAoIGF1dG9mb2N1cyApIHtcclxuXHJcblx0XHRcdFx0XHRhY3RpdmVNb2RhbC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQnKS5mb2N1cygpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fTtcclxuXHJcblx0bW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcblxyXG5cdFx0aWYoIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsJykgfHwgZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5tb2RhbF9fY2xvc2UnKSl7XHJcblxyXG5cdFx0XHRtb2RhbC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImhpZGVcIikpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcblxyXG5cdFx0d2hpbGUgKHRhcmdldCAhPT0gZG9jdW1lbnQgJiYgdGFyZ2V0ICE9PSBudWxsKSB7XHJcblxyXG5cdFx0XHRpZiAodGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnZGF0YS1tb2RhbCcpKSB7XHJcblxyXG5cdFx0XHRcdG1vZGFsU2hvdyhcclxuXHRcdFx0XHRcdHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbW9kYWwnKSxcclxuXHRcdFx0XHRcdHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGl0bGUnKSxcclxuXHRcdFx0XHRcdHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKVxyXG5cdFx0XHRcdCk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxuXHRtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdtb2RhbFNob3cnLCBldmVudCA9PiBtb2RhbFNob3coZXZlbnQuZGV0YWlsLnNlbGVjdG9yKSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKSk7IiwiIiwiKCBmb3JtID0+IHtcclxuXHJcblx0aWYoIGZvcm0gKSB7XHJcblxyXG5cdFx0Y29uc3Qgc3RlcHMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5vcmRlcl9fc3RlcCcpLFxyXG5cdFx0XHQgIG5hdkxpbmtzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcub3JkZXJfX3N0ZXBzIGEnKTtcclxuXHJcblx0XHQvLyBoYXNoXHJcblxyXG5cdFx0Y29uc3Qgc2V0U3RhZ2UgPSAoKT0+IHtcclxuXHJcblx0XHRcdGNvbnN0IGhhc2ggPSBsb2NhdGlvbi5oYXNoO1xyXG5cclxuXHRcdFx0Wy4uLnN0ZXBzXS5mb3JFYWNoKCBzdGVwID0+IHtcclxuXHJcblx0XHRcdFx0c3RlcC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJywgc3RlcC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaGFzaCcpICE9PSBoYXNoLnNsaWNlKDEpICk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdFsuLi5uYXZMaW5rc10uZm9yRWFjaCggbGluayA9PiB7XHJcblxyXG5cdFx0XHRcdGxpbmsuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJywgbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSA9PT0gaGFzaCApO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cclxuXHRcdFx0aWYoIGZvcm0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIDwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpLmNsaWVudEhlaWdodCApIHtcclxuXHJcblx0XHRcdFx0Zm9ybS5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBzZXRTdGFnZSk7XHJcblxyXG5cdFx0aWYgKCBsb2NhdGlvbi5oYXNoICkge1xyXG5cclxuXHRcdFx0c2V0VGltZW91dCggc2V0U3RhZ2UgKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH07XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3JkZXInKSk7IiwiXHJcbiggYnRuUGFnZVVwID0+IHtcclxuXHJcblx0aWYgKGJ0blBhZ2VVcCkge1xyXG5cclxuXHRcdGJ0blBhZ2VVcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGRvY3VtZW50LmJvZHkuc2Nyb2xsSW50b1ZpZXcoe2JlaGF2aW9yOiBcInNtb290aFwifSkpO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS11cCcpKTsiLCIoIGVsZW1lbnRzID0+IHtcclxuXHJcblx0aWYoZWxlbWVudHMubGVuZ3RoID09PSAwKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdFsuLi5lbGVtZW50c10uZm9yRWFjaCggZHJvcGRvd24gPT4ge1xyXG5cclxuXHRcdGNvbnN0IG1hc2sgPSBkcm9wZG93bi5xdWVyeVNlbGVjdG9yKCcucGhvbmUtY291bnRyeV9fbWFzaycpLFxyXG5cdFx0XHQgIHZhbHVlID0gZHJvcGRvd24ucXVlcnlTZWxlY3RvcignLnBob25lLWNvdW50cnlfX3ZhbHVlJyksXHJcblx0XHRcdCAgcmFkaW8gPSBkcm9wZG93bi5xdWVyeVNlbGVjdG9yQWxsKCcucGhvbmUtY291bnRyeV9fcmFkaW8nKTtcclxuXHJcblx0XHRbLi4ucmFkaW9dLmZvckVhY2goIGJ0biA9PiB7XHJcblxyXG5cdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdGxldCBwbGFjZWhvbGRlciA9IGJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWFzaycpO1xyXG5cdFx0XHRcdHBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXIucmVwbGFjZSgvXFxcXDkvZywgJyQnKTtcclxuXHRcdFx0XHRwbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyLnJlcGxhY2UoLzkvZywgJy0nKTtcclxuXHRcdFx0XHRwbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyLnJlcGxhY2UoL1xcJC9nLCAnOScpO1xyXG5cclxuXHRcdFx0XHRtYXNrLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBwbGFjZWhvbGRlcik7XHJcblx0XHRcdFx0bWFzay52YWx1ZSA9ICcnO1xyXG5cclxuXHRcdFx0XHRJbnB1dG1hc2soYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1tYXNrJykpLm1hc2sobWFzayk7XHJcblxyXG5cdFx0XHRcdGxldCBtYXNrSW5wdXQ7XHJcblxyXG5cdFx0XHRcdG1hc2tJbnB1dCA9IG5ldyBJbnB1dG1hc2soe1xyXG5cdFx0XHRcdFx0bWFzazogYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1tYXNrJyksXHJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcjogJy0nXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdG1hc2tJbnB1dC5tYXNrKG1hc2spO1xyXG5cclxuXHRcdFx0XHRtYXNrLmZvY3VzKCk7XHJcblxyXG5cdFx0XHRcdHZhbHVlLnRleHRDb250ZW50ID0gYnRuLnZhbHVlO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRjb25zdCBpc0Ryb3Bkb3duID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5waG9uZS1jb3VudHJ5X19idG4nKSA/IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcucGhvbmUtY291bnRyeScpIDogbnVsbDtcclxuXHJcblx0XHRbLi4uZWxlbWVudHNdLmZvckVhY2goIGRyb3Bkb3duID0+IHtcclxuXHJcblx0XHRcdGRyb3Bkb3duLmNsYXNzTGlzdC50b2dnbGUoJ2lzLW9wZW4nLCBkcm9wZG93biA9PT0gaXNEcm9wZG93biAmJiBpc0Ryb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucygnaXMtb3BlbicpID09PSBmYWxzZSApO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5waG9uZS1jb3VudHJ5JykpOyIsIiggaXRlbXMgPT4ge1xuXG5cdGlmICggaXRlbXMubGVuZ3RoICkge1xuXG5cdFx0cGlja21ldXAuZGVmYXVsdHMubG9jYWxlc1sncnUnXSA9IHtcblx0XHRcdGRheXM6IFsn0JLQvtGB0LrRgNC10YHQtdC90YzQtScsICfQn9C+0L3QtdC00LXQu9GM0L3QuNC6JywgJ9CS0YLQvtGA0L3QuNC6JywgJ9Ch0YDQtdC00LAnLCAn0KfQtdGC0LLQtdGA0LMnLCAn0J/Rj9GC0L3QuNGG0LAnLCAn0KHRg9Cx0LHQvtGC0LAnXSxcblx0XHRcdGRheXNTaG9ydDogWyfQktGBJywgJ9Cf0L0nLCAn0JLRgicsICfQodGAJywgJ9Cn0YInLCAn0J/RgicsICfQodCxJ10sXG5cdFx0XHRkYXlzTWluOiBbJ9CS0YEnLCAn0J/QvScsICfQktGCJywgJ9Ch0YAnLCAn0KfRgicsICfQn9GCJywgJ9Ch0LEnXSxcblx0XHRcdG1vbnRoczogWyfQr9C90LLQsNGA0YwnLCAn0KTQtdCy0YDQsNC70YwnLCAn0JzQsNGA0YInLCAn0JDQv9GA0LXQu9GMJywgJ9Cc0LDQuScsICfQmNGO0L3RjCcsICfQmNGO0LvRjCcsICfQkNCy0LPRg9GB0YInLCAn0KHQtdC90YLRj9Cx0YDRjCcsICfQntC60YLRj9Cx0YDRjCcsICfQndC+0Y/QsdGA0YwnLCAn0JTQtdC60LDQsdGA0YwnXSxcblx0XHRcdG1vbnRoc1Nob3J0OiBbJ9Cv0L3QsicsICfQpNC10LInLCAn0JzQsNGAJywgJ9CQ0L/RgCcsICfQnNCw0LknLCAn0JjRjtC9JywgJ9CY0Y7QuycsICfQkNCy0LMnLCAn0KHQtdC9JywgJ9Ce0LrRgicsICfQndC+0Y8nLCAn0JTQtdC6J11cblx0XHR9O1xuXG4vL1x0XHRsb2NhbGVcblxuXHRcdFsuLi5pdGVtc10uZm9yRWFjaCggY2FsZW5kYXIgPT4ge1xuXG5cdFx0XHRjb25zdCBpbnB1dCA9IGNhbGVuZGFyLnF1ZXJ5U2VsZWN0b3IoJy5jYWxlbmRhcl9faW5wdXQnKSxcblx0XHRcdFx0ICBtaW5EYXRlID0gbmV3IERhdGUoaW5wdXQuZ2V0QXR0cmlidXRlKCdtaW4nKSksXG5cdFx0XHRcdCAgbWF4RGF0ZSA9IG5ldyBEYXRlKGlucHV0LmdldEF0dHJpYnV0ZSgnbWF4JykpO1xuXG5cdFx0XHRjb25zdCBwaWNrbWV1cENhbGVuZGFyID0gcGlja21ldXAoY2FsZW5kYXIsIHtcblxuXHRcdFx0XHRmbGF0OiB0cnVlLFxuXHRcdFx0XHRtaW46IG1pbkRhdGUsXG5cdFx0XHRcdG1heDogbWF4RGF0ZSxcblx0XHRcdFx0c2VsZWN0X21vbnRoOiBmYWxzZSxcblx0XHRcdFx0c2VsZWN0X3llYXI6IGZhbHNlLFxuXHRcdFx0XHR0aXRsZV9mb3JtYXQ6ICdCJyxcblx0XHRcdFx0Zm9ybWF0OiAnWS1tLWQnLFxuXHRcdFx0XHRsb2NhbGU6ICdydScsXG5cdFx0XHRcdHByZXY6ICc8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dXNlIHhsaW5rOmhyZWY9XCIjc3ZnLWFycm93LWNoZXZyb24tbGVmdFwiLz48L3N2Zz4nLFxuXHRcdFx0XHRuZXh0OiAnPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHVzZSB4bGluazpocmVmPVwiI3N2Zy1hcnJvdy1jaGV2cm9uLXJpZ2h0XCIvPjwvc3ZnPidcblxuXHRcdFx0fSk7XG5cblx0XHRcdGNhbGVuZGFyLmFkZEV2ZW50TGlzdGVuZXIoJ3BpY2ttZXVwLWNoYW5nZScsICgpID0+IHtcblxuXHRcdFx0XHRpbnB1dC52YWx1ZSA9IHBpY2ttZXVwQ2FsZW5kYXIuZ2V0X2RhdGUodHJ1ZSk7XG5cblx0XHRcdH0pO1xuXG5cdFx0fSk7XG5cblx0fVxuXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FsZW5kYXInKSk7IiwiKCBmb3JtID0+IHtcclxuXHJcblx0aWYgKCBmb3JtICkge1xyXG5cclxuXHRcdGxldCBtb2RhbEZvcm1UYXJnZXQgPSBudWxsO1xyXG5cclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0Ly8g0LLRi9Cx0L7RgCDRhtCy0LXRgtCwINCyINGC0L7QstCw0YDQtSDQuNC70Lgg0LIg0LrQsNGA0YLQvtGH0LrQtVxyXG5cclxuXHRcdFx0Y29uc3QgcHJvZHVjdENvbG9yID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5qcy1tb2RhbC1jb2xvcicpO1xyXG5cclxuXHRcdFx0aWYgKHByb2R1Y3RDb2xvcikge1xyXG5cclxuXHRcdFx0XHRjb25zdCBjYXJkUHJvZHVjdCA9IHByb2R1Y3RDb2xvci5jbG9zZXN0KCcucHJvZHVjdCcpIHx8IHByb2R1Y3RDb2xvci5jbG9zZXN0KCcucHJldmlldy1jYXJkJyksXHJcblx0XHRcdFx0XHQgIGZvcm1Qcm9kdWN0ID0gY2FyZFByb2R1Y3QucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtYnV5JykgfHwgY2FyZFByb2R1Y3QucXVlcnlTZWxlY3RvcignLnByZXZpZXctY2FyZF9fZm9ybScpLFxyXG5cdFx0XHRcdFx0ICBpbnB1dElkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuXHJcblx0XHRcdFx0aW5wdXRJZC5uYW1lID0gJ2lkJztcclxuXHRcdFx0XHRpbnB1dElkLnR5cGUgPSAnaGlkZGVuJztcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCAoKSA9PiBpbnB1dElkLnZhbHVlID0gZm9ybVByb2R1Y3QuZWxlbWVudHMuaWQudmFsdWUpO1xyXG5cclxuXHRcdFx0XHRtb2RhbEZvcm1UYXJnZXQgPSBmb3JtUHJvZHVjdC5xdWVyeVNlbGVjdG9yKCcucHJldmlldy1jYXJkX19tb2RhbC1jb2xvcicpO1xyXG5cclxuXHRcdFx0XHRmb3JtLmlubmVySFRNTCA9IG1vZGFsRm9ybVRhcmdldC5pbm5lckhUTUw7XHJcblx0XHRcdFx0Zm9ybS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyYmVnaW4nLCBpbnB1dElkKTtcclxuXHJcblx0XHRcdFx0Y29uc3QgZXZlbnRNb2RhbFNob3cgPSBuZXcgQ3VzdG9tRXZlbnQoXCJtb2RhbFNob3dcIiwge1xyXG5cdFx0XHRcdFx0ZGV0YWlsOiB7XHJcblx0XHRcdFx0XHRcdHNlbGVjdG9yOiBcInByZXZpZXctY2FyZC1jb2xvclwiXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdHdpbmRvdy5tb2RhbC5kaXNwYXRjaEV2ZW50KGV2ZW50TW9kYWxTaG93KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyDQvtCx0YDQsNGC0L3QviDQstGB0YLQsNCy0LvRj9C10Lwg0LzQvtC00LDQu9C60YMg0LIg0YLQvtCy0LDRgFxyXG5cclxuXHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignbW9kYWxDbG9zZScsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdGZvcm0uZWxlbWVudHMuaWQucmVtb3ZlKCk7XHJcblxyXG5cdFx0XHRbLi4uZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwtY2FyZC1jb2xvcl9faXRlbS1pbnB1dCcpXS5mb3JFYWNoKCBpbnB1dCA9PiB7XHJcblxyXG5cdFx0XHRcdGlmIChpbnB1dC5jaGVja2VkKSB7XHJcblxyXG5cdFx0XHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKCdjaGVja2VkJywnY2hlY2tlZCcpO1xyXG5cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdGlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdG1vZGFsRm9ybVRhcmdldC5pbm5lckhUTUwgPSBmb3JtLmlubmVySFRNTDtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdC8vINC40LfQvNC10L3QuNGC0Ywg0YbQstC10YJcclxuXHJcblx0XHRcdGNvbnN0IGNhcmRDb2xvciA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcubW9kYWwtY2FyZC1jb2xvcl9faXRlbS1pbnB1dCcpO1xyXG5cclxuXHRcdFx0aWYgKGNhcmRDb2xvcikge1xyXG5cclxuXHRcdFx0XHQvLyBzZXQgY2xhc3MgY2hlY2tlZFxyXG5cdFx0XHRcdGNvbnN0IGl0ZW1DaGVja2VkID0gY2FyZENvbG9yLmNsb3Nlc3QoJy5tb2RhbC1jYXJkLWNvbG9yX19pdGVtJyksXHJcblx0XHRcdFx0XHQgIGxpc3QgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbC1jYXJkLWNvbG9yX19pdGVtJyk7XHJcblxyXG5cdFx0XHRcdFsuLi5saXN0XS5mb3JFYWNoKCBpdGVtID0+IHtcclxuXHJcblx0XHRcdFx0XHRpdGVtLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWNoZWNrZWQnLCBpdGVtID09PSBpdGVtQ2hlY2tlZCk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRjb25zdCBjYXJkID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5tb2RhbC1jYXJkLWNvbG9yJyksXHJcblx0XHRcdFx0XHQgIGlkID0gY2FyZC5lbGVtZW50cy5pZC52YWx1ZSxcclxuXHRcdFx0XHRcdCAgYXJ0aWNsZUlkID0gY2FyZENvbG9yLnZhbHVlO1xyXG5cclxuXHRcdFx0XHQvLyBpbWdcclxuXHJcblx0XHRcdFx0Y2FyZC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY2FyZC1jb2xvcl9fcGhvdG8gaW1nJykuc2V0QXR0cmlidXRlKCdzcmMnLCBjYXJkQ29sb3IuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpKTtcclxuXHRcdFx0XHRjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jYXJkLWNvbG9yX19waG90byBpbWcnKS5zZXRBdHRyaWJ1dGUoJ3NyY3NldCcsIGNhcmRDb2xvci5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3Jjc2V0JykpO1xyXG5cclxuXHRcdFx0XHQvLyBwcmljZVxyXG5cclxuXHRcdFx0XHRpZiAoIGNhcmRDb2xvci5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2Utb2xkJykgKSB7XHJcblxyXG5cdFx0XHRcdFx0Y2FyZC5xdWVyeVNlbGVjdG9yKCcucHJpY2VfX29sZCcpLnRleHRDb250ZW50ID0gY2FyZENvbG9yLmdldEF0dHJpYnV0ZSgnZGF0YS1wcmljZS1vbGQnKTtcclxuXHRcdFx0XHRcdGNhcmQucXVlcnlTZWxlY3RvcignLnByaWNlX19vbGQnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0Y2FyZC5xdWVyeVNlbGVjdG9yKCcucHJpY2VfX29sZCcpLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5wcmljZV9fdmFsdWUnKS50ZXh0Q29udGVudCA9IGNhcmRDb2xvci5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2UnKTtcclxuXHJcblx0XHRcdFx0Ly8gYnV5XHJcblxyXG5cdFx0XHRcdGNvbnN0IGJ1eSA9IGNhcmRDb2xvci5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnV5JyksXHJcblx0XHRcdFx0XHQgIGJ1eUNhcnQgPSBidXkgPT09ICdpbi1jYXJ0JyxcclxuXHRcdFx0XHRcdCAgYnV5RGlzYWJsZWQgPSBidXkgPT09ICdkaXNhYmxlZCcsXHJcblx0XHRcdFx0XHQgIGJ1eUJ0biA9IGJ1eSA9PT0gbnVsbCB8fCBidXlEaXNhYmxlZCxcclxuXHRcdFx0XHRcdCAgdGVtcGxhdGVTdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtY2FyZC1jb2xvci1zdWJtaXQtdGVtcGxhdGUnKS5pbm5lckhUTUw7XHJcblxyXG5cdFx0XHRcdGNhcmQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNhcmQtY29sb3JfX3N1Ym1pdCcpLmlubmVySFRNTCA9IE11c3RhY2hlLnJlbmRlcih0ZW1wbGF0ZVN1Ym1pdCwgeyBidXlCdG4sIGJ1eURpc2FibGVkLCBidXlDYXJ0IH0pO1xyXG5cclxuXHRcdFx0XHQvLyBvdmVybGF5XHJcblxyXG5cdFx0XHRcdGNvbnN0IG92ZXJsYXkgPSBjYXJkQ29sb3IuZ2V0QXR0cmlidXRlKCdkYXRhLW92ZXJsYXknKSxcclxuXHRcdFx0XHRcdCAgb3ZlcmxheVRpdGxlID0gY2FyZENvbG9yLmdldEF0dHJpYnV0ZSgnZGF0YS1vdmVybGF5LXRpdGxlJyksXHJcblx0XHRcdFx0XHQgIG92ZXJsYXlUZXh0ID0gY2FyZENvbG9yLmdldEF0dHJpYnV0ZSgnZGF0YS1vdmVybGF5LXRleHQnKSxcclxuXHRcdFx0XHRcdCAgb3ZlcmxheUxvZ2luID0gb3ZlcmxheSA9PT0gJ2xvZ2luJyxcclxuXHRcdFx0XHRcdCAgb3ZlcmxheU5vdCA9IG92ZXJsYXkgPT09ICdub3QnLFxyXG5cdFx0XHRcdFx0ICBlbE92ZXJsYXkgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5LWRpc2FibGVkJyk7XHJcblxyXG5cdFx0XHRcdGlmICggZWxPdmVybGF5ICkge1xyXG5cclxuXHRcdFx0XHRcdGVsT3ZlcmxheS5yZW1vdmUoKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jYXJkLWNvbG9yX19waG90bycpLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgTXVzdGFjaGUucmVuZGVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvdmVybGF5LWRpc2FibGVkLXRlbXBsYXRlJykuaW5uZXJIVE1MLCB7IG92ZXJsYXksIG92ZXJsYXlUaXRsZSwgb3ZlcmxheVRleHQsIG92ZXJsYXlMb2dpbiwgb3ZlcmxheU5vdCwgaWQsIGFydGljbGVJZCB9KSk7XHJcblxyXG5cdFx0XHRcdC8vIGF2YWlsYWJpbGl0eVxyXG5cclxuXHRcdFx0XHRjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jYXJkLWNvbG9yX19hdmFpbGFiaWxpdHknKS5pbm5lckhUTUwgPSBNdXN0YWNoZS5yZW5kZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2F2YWlsYWJpbGl0eS10ZW1wbGF0ZScpLmlubmVySFRNTCwgeyBhdmFpbGFiaWxpdHk6ICFvdmVybGF5Tm90IH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJldmlldy1jYXJkLWNvbG9yJykpOyIsIiggKCkgPT4ge1xyXG5cclxuXHRjb25zdCB2b2x1bWVDaGFuZ2UgPSBjYXJkVm9sdW1lID0+IHtcclxuXHJcblx0XHRjb25zdCBjYXJkID0gY2FyZFZvbHVtZS5jbG9zZXN0KCcucHJldmlldy1jYXJkJyksXHJcblx0XHRcdCAgaWQgPSBjYXJkVm9sdW1lLmNsb3Nlc3QoJy5wcmV2aWV3LWNhcmRfX2Zvcm0nKS5lbGVtZW50cy5pZC52YWx1ZSxcclxuXHRcdFx0ICBhcnRpY2xlSWQgPSBjYXJkVm9sdW1lLnZhbHVlLFxyXG5cdFx0XHQgIHRlbXBsYXRlRm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmV2aWV3LWNhcmQtZm9vdC10ZW1wbGF0ZScpLmlubmVySFRNTCxcclxuXHRcdFx0ICB0ZW1wbGF0ZUZsYWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJldmlldy1jYXJkLWZsYWctdGVtcGxhdGUnKS5pbm5lckhUTUwsXHJcblx0XHRcdCAgdGVtcGxhdGVMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmV2aWV3LWNhcmQtbGFiZWwtdGVtcGxhdGUnKS5pbm5lckhUTUwsXHJcblx0XHRcdCAgdGVtcGxhdGVQcmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmljZS10ZW1wbGF0ZScpLmlubmVySFRNTCxcclxuXHRcdFx0ICB0ZW1wbGF0ZU92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3ZlcmxheS1kaXNhYmxlZC10ZW1wbGF0ZScpLmlubmVySFRNTDtcclxuXHJcblx0XHQvLyDQutC90L7Qv9C60LAg0LrRg9C/0LjRgtGMINC4INC40LfQsdGA0LDQvdC90L7QtVxyXG5cclxuXHRcdGNvbnN0IGJ1eSA9IGNhcmRWb2x1bWUuZ2V0QXR0cmlidXRlKCdkYXRhLWJ1eScpLFxyXG5cdFx0XHQgIGJ1eUNhcnQgPSBidXkgPT09ICdpbi1jYXJ0JyxcclxuXHRcdFx0ICBidXlEaXNhYmxlZCA9IGJ1eSA9PT0gJ2Rpc2FibGVkJyxcclxuXHRcdFx0ICBidXlCdG4gPSBidXkgPT09IG51bGwgfHwgYnV5RGlzYWJsZWQsXHJcblx0XHRcdCAgZmF2b3VyaXRlID0gY2FyZFZvbHVtZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmF2b3VyaXRlJyk7XHJcblxyXG5cdFx0Y2FyZC5xdWVyeVNlbGVjdG9yKCcucHJldmlldy1jYXJkX19mb290JykuaW5uZXJIVE1MID0gTXVzdGFjaGUucmVuZGVyKHRlbXBsYXRlRm9vdCwgeyBidXlCdG4sIGJ1eURpc2FibGVkLCBidXlDYXJ0LCBmYXZvdXJpdGUgfSk7XHJcblxyXG5cdFx0Ly8g0YbQtdC90LBcclxuXHJcblx0XHRjb25zdCBwcmljZSA9IGNhcmRWb2x1bWUuZ2V0QXR0cmlidXRlKCdkYXRhLXByaWNlJyksXHJcblx0XHRcdCAgcHJpY2VPbGQgPSBjYXJkVm9sdW1lLmdldEF0dHJpYnV0ZSgnZGF0YS1wcmljZS1vbGQnKTtcclxuXHJcblx0XHRjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aWV3LWNhcmRfX3ByaWNlJykuaW5uZXJIVE1MID0gTXVzdGFjaGUucmVuZGVyKHRlbXBsYXRlUHJpY2UsIHsgcHJpY2UsIHByaWNlT2xkIH0pO1xyXG5cclxuXHRcdC8vINGE0LvQsNCzXHJcblxyXG5cdFx0Y29uc3QgZmxhZyA9IGNhcmRWb2x1bWUuZ2V0QXR0cmlidXRlKCdkYXRhLWZsYWcnKSxcclxuXHRcdFx0ICBmbGFnQ29sb3IgPSBjYXJkVm9sdW1lLmdldEF0dHJpYnV0ZSgnZGF0YS1mbGFnLWNvbG9yJyksXHJcblx0XHRcdCAgY2FyZEZsYWcgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aWV3LWNhcmRfX2ZsYWcnKTtcclxuXHJcblx0XHRpZiAoY2FyZEZsYWcpIHtcclxuXHJcblx0XHRcdGNhcmRGbGFnLnJlbW92ZSgpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aWV3LWNhcmRfX2hlYWQnKS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIE11c3RhY2hlLnJlbmRlcih0ZW1wbGF0ZUZsYWcsIHsgZmxhZywgZmxhZ0NvbG9yIH0pKTtcclxuXHJcblx0XHQvLyBsYWJlbFxyXG5cclxuXHRcdGNvbnN0IHNhbGUgPSBjYXJkVm9sdW1lLmdldEF0dHJpYnV0ZSgnZGF0YS1sYWJlbC1zYWxlJyksXHJcblx0XHRcdCAgZGlzY291bnQgPSBjYXJkVm9sdW1lLmdldEF0dHJpYnV0ZSgnZGF0YS1sYWJlbC1kaXNjb3VudCcpLFxyXG5cdFx0XHQgIGdpZnQgPSBjYXJkVm9sdW1lLmdldEF0dHJpYnV0ZSgnZGF0YS1sYWJlbC1naWZ0JyksXHJcblx0XHRcdCAgZWxMYWJlbCA9IGNhcmQucXVlcnlTZWxlY3RvcignLnByZXZpZXctY2FyZF9fbGFiZWwnKTtcclxuXHJcblx0XHRpZiAoIGVsTGFiZWwgKSB7XHJcblxyXG5cdFx0XHRlbExhYmVsLnJlbW92ZSgpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aWV3LWNhcmRfX2hlYWQnKS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIE11c3RhY2hlLnJlbmRlcih0ZW1wbGF0ZUxhYmVsLCB7IHNhbGUsIGRpc2NvdW50LCBnaWZ0IH0pKTtcclxuXHJcblx0XHQvLyBvdmVybGF5XHJcblxyXG5cdFx0Y29uc3Qgb3ZlcmxheSA9IGNhcmRWb2x1bWUuZ2V0QXR0cmlidXRlKCdkYXRhLW92ZXJsYXknKSxcclxuXHRcdFx0ICBvdmVybGF5VGl0bGUgPSBjYXJkVm9sdW1lLmdldEF0dHJpYnV0ZSgnZGF0YS1vdmVybGF5LXRpdGxlJyksXHJcblx0XHRcdCAgb3ZlcmxheVRleHQgPSBjYXJkVm9sdW1lLmdldEF0dHJpYnV0ZSgnZGF0YS1vdmVybGF5LXRleHQnKSxcclxuXHRcdFx0ICBvdmVybGF5TG9naW4gPSBvdmVybGF5ID09PSAnbG9naW4nLFxyXG5cdFx0XHQgIG92ZXJsYXlOb3QgPSBvdmVybGF5ID09PSAnbm90JyxcclxuXHRcdFx0ICBvdmVybGF5V2l0aGRyYXduID0gb3ZlcmxheSA9PT0gJ3dpdGhkcmF3bicsXHJcblx0XHRcdCAgZWxPdmVybGF5ID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheS1kaXNhYmxlZCcpO1xyXG5cclxuXHRcdGlmICggZWxPdmVybGF5ICkge1xyXG5cclxuXHRcdFx0ZWxPdmVybGF5LnJlbW92ZSgpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aWV3LWNhcmRfX2hlYWQnKS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIE11c3RhY2hlLnJlbmRlcih0ZW1wbGF0ZU92ZXJsYXksIHsgb3ZlcmxheSwgb3ZlcmxheVRpdGxlLCBvdmVybGF5VGV4dCwgb3ZlcmxheUxvZ2luLCBvdmVybGF5Tm90LCBvdmVybGF5V2l0aGRyYXduLCBpZCwgYXJ0aWNsZUlkIH0pKTtcclxuXHJcblx0fVxyXG5cclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0Ly8g0LjQt9C80LXQvdC40YLRjCDQvtCx0YrRkdC8XHJcblx0XHRjb25zdCBjYXJkVm9sdW1lID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5wcmV2aWV3LWNhcmRfX3ZvbHVtZS1pbnB1dCcpO1xyXG5cclxuXHRcdGlmIChjYXJkVm9sdW1lKSB7XHJcblxyXG5cdFx0XHR2b2x1bWVDaGFuZ2UoY2FyZFZvbHVtZSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdC8vINC40LfQvNC10L3QuNGC0Ywg0L7QsdGK0ZHQvCDQsiDQvNC+0LHQuNC70YzQvdC+0LxcclxuXHRcdGNvbnN0IGNhcmRWb2x1bWVNb2JpbGUgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnByZXZpZXctY2FyZF9fdm9sdW1lLXNlbGVjdCcpO1xyXG5cclxuXHRcdGlmIChjYXJkVm9sdW1lTW9iaWxlKSB7XHJcblxyXG5cdFx0XHRjb25zdCB2YWx1ZSA9IGNhcmRWb2x1bWVNb2JpbGUudmFsdWUsXHJcblx0XHRcdFx0ICBjYXJkID0gY2FyZFZvbHVtZU1vYmlsZS5jbG9zZXN0KCcucHJldmlldy1jYXJkJyksXHJcblx0XHRcdFx0ICBpbnB1dEJ0biA9IGNhcmQucXVlcnlTZWxlY3RvckFsbCgnLnByZXZpZXctY2FyZF9fdm9sdW1lLWlucHV0Jyk7XHJcblxyXG5cdFx0XHRbLi4uaW5wdXRCdG5dLmZvckVhY2goIGVsID0+IHtcclxuXHJcblx0XHRcdFx0aWYgKCBlbC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykgPT09IHZhbHVlICkge1xyXG5cclxuXHRcdFx0XHRcdGVsLmNoZWNrZWQgPSB0cnVlO1xyXG5cclxuXHRcdFx0XHRcdHZvbHVtZUNoYW5nZShlbCk7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0ZWwuY2hlY2tlZCA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxufSkoKTsiLCIoIHByb2R1Y3QgPT4ge1xyXG5cclxuXHRpZiggcHJvZHVjdCApIHtcclxuXHJcblx0XHQvLyBwYXJhbVxyXG5cclxuXHRcdGlmICggd2luZG93LmlubmVyV2lkdGggPCA3NjggKSB7XHJcblxyXG5cdFx0XHRjb25zdCBidG4gPSBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0X19vcGVuLXRhYiAuYnRuJyk7XHJcblxyXG5cdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRcdGJ0bi5jbG9zZXN0KCcucHJvZHVjdF9fc3BlY3MnKS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1vcGVuJyk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gaGFzaFxyXG5cclxuXHRcdGNvbnN0IHNldFRhYiA9ICgpPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgdGFiSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobG9jYXRpb24uaGFzaCkuY2xvc2VzdCgnLnRhYnNfX2l0ZW0nKTtcclxuXHJcblx0XHRcdGlmICggdGFiSXRlbSApIHtcclxuXHJcblx0XHRcdFx0dGFiSXRlbS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcInNldEFjdGl2ZVwiKSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgc2V0VGFiKTtcclxuXHJcblx0XHRpZiAoIGxvY2F0aW9uLmhhc2ggKSB7XHJcblxyXG5cdFx0XHRzZXRUaW1lb3V0KCBzZXRUYWIgKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gZ2FsbGVyeVxyXG5cclxuXHRcdGNvbnN0IGdhbGxlcnkgPSBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWdhbGxlcnknKTtcclxuXHRcdFx0ICBnYWxsZXJ5UHJldmlldyA9IHByb2R1Y3QucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3QtZ2FsbGVyeV9fcHJldmlldy1saW5rJyk7XHJcblxyXG5cdFx0Y29uc3Qgc2V0QWN0aXZlSW1nID0gbGluayA9PiB7XHJcblxyXG5cdFx0XHRsZXQgaW5kZXggPSBudWxsO1xyXG5cclxuXHRcdFx0Wy4uLmdhbGxlcnlQcmV2aWV3XS5mb3JFYWNoKCAoX2xpbmssX2luZGV4KSA9PiB7XHJcblxyXG5cdFx0XHRcdF9saW5rLnBhcmVudE5vZGUuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtY3VycmVudCcsIF9saW5rID09PSBsaW5rKTtcclxuXHJcblx0XHRcdFx0aWYgKCBfbGluayA9PT0gbGluayApIHtcclxuXHJcblx0XHRcdFx0XHRpbmRleCA9IF9pbmRleDtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5zd2lwZXItY29udGFpbmVyLS1wcm9kdWN0Jykuc3dpcGVyLnNsaWRlVG9Mb29wKGluZGV4KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Z2FsbGVyeS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IHRhcmdldExpbmsgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnYScpO1xyXG5cclxuXHRcdFx0aWYgKCB0YXJnZXRMaW5rICkge1xyXG5cclxuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0XHRpZiAoIHRhcmdldExpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9kdWN0LWdhbGxlcnlfX3ByZXZpZXctbGluaycpICkge1xyXG5cclxuXHRcdFx0XHRcdHNldEFjdGl2ZUltZyh0YXJnZXRMaW5rKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIHZvbHVtZVxyXG5cclxuXHRcdGNvbnN0IHZvbHVtZUNoYW5nZSA9IGNhcmRWb2x1bWUgPT4ge1xyXG5cclxuXHJcblx0XHRcdGNvbnN0IGZvcm0gPSBjYXJkVm9sdW1lLmNsb3Nlc3QoJy5wcm9kdWN0LWJ1eScpLFxyXG5cdFx0XHRcdCAgaWQgPSBmb3JtLmVsZW1lbnRzLmlkLnZhbHVlLFxyXG5cdFx0XHRcdCAgYXJ0aWNsZUlkID0gY2FyZFZvbHVtZS52YWx1ZSxcclxuXHRcdFx0XHQgIHRlbXBsYXRlRm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9kdWN0LWJ1eS1zdWJtaXQtdGVtcGxhdGUnKS5pbm5lckhUTUwsXHJcblx0XHRcdFx0ICB0ZW1wbGF0ZUZhdm91cml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9kdWN0LWJ1eS1mYXZvdXJpdGUtdGVtcGxhdGUnKS5pbm5lckhUTUwsXHJcblx0XHRcdFx0ICB0ZW1wbGF0ZVByaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaWNlLXRlbXBsYXRlJykuaW5uZXJIVE1MLFxyXG5cdFx0XHRcdCAgdGVtcGxhdGVBdmFpbGFiaWxpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXZhaWxhYmlsaXR5LXRlbXBsYXRlJykuaW5uZXJIVE1MLFxyXG5cdFx0XHRcdCAgdGVtcGxhdGVPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI292ZXJsYXktZGlzYWJsZWQtdGVtcGxhdGUnKS5pbm5lckhUTUwsXHJcblx0XHRcdFx0ICB0ZW1wbGF0ZUJvYXJkTG9naW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvZHVjdC1sb2dpbi10ZW1wbGF0ZScpLmlubmVySFRNTDtcclxuXHJcblx0XHRcdC8vIHZvbHVtZSAtPiBnYWxsZXJ5XHJcblxyXG5cdFx0XHRbLi4uZ2FsbGVyeVByZXZpZXddLmZvckVhY2goIGxpbmsgPT4ge1xyXG5cclxuXHRcdFx0XHRpZiAoIGxpbmsuZ2V0QXR0cmlidXRlKCdkYXRhLWFydGljbGVpZCcpID09PSBhcnRpY2xlSWQgKSB7XHJcblxyXG5cdFx0XHRcdFx0c2V0QWN0aXZlSW1nKGxpbmspO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdC8vINC60L3QvtC/0LrQsCDQuNC30LHRgNCw0L3QvdC+0LVcclxuXHJcblx0XHRcdGNvbnN0IGZhdm91cml0ZSA9IGNhcmRWb2x1bWUuZ2V0QXR0cmlidXRlKCdkYXRhLWZhdm91cml0ZScpO1xyXG5cclxuXHRcdFx0Zm9ybS5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1idXlfX2Zhdm91cml0ZScpLmlubmVySFRNTCA9IE11c3RhY2hlLnJlbmRlcih0ZW1wbGF0ZUZhdm91cml0ZSwgeyBmYXZvdXJpdGUgfSk7XHJcblxyXG5cdFx0XHQvLyBvdmVybGF5XHJcblxyXG5cdFx0XHRjb25zdCBvdmVybGF5ID0gY2FyZFZvbHVtZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3ZlcmxheScpLFxyXG5cdFx0XHRcdCAgb3ZlcmxheVRpdGxlID0gY2FyZFZvbHVtZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3ZlcmxheS10aXRsZScpLFxyXG5cdFx0XHRcdCAgb3ZlcmxheVRleHQgPSBjYXJkVm9sdW1lLmdldEF0dHJpYnV0ZSgnZGF0YS1vdmVybGF5LXRleHQnKSxcclxuXHRcdFx0XHQgIG92ZXJsYXlMb2dpbiA9IG92ZXJsYXkgPT09ICdsb2dpbicsXHJcblx0XHRcdFx0ICBvdmVybGF5Tm90ID0gb3ZlcmxheSA9PT0gJ25vdCcsXHJcblx0XHRcdFx0ICBvdmVybGF5V2l0aGRyYXduID0gb3ZlcmxheSA9PT0gJ3dpdGhkcmF3bicsXHJcblx0XHRcdFx0ICBlbE92ZXJsYXkgPSBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5LWRpc2FibGVkJyksXHJcblx0XHRcdFx0ICBib2FyZExvZ2luID0gcHJvZHVjdC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQtbG9naW4nKTtcclxuXHJcblx0XHRcdGlmICggZWxPdmVybGF5ICkge1xyXG5cclxuXHRcdFx0XHRlbE92ZXJsYXkucmVtb3ZlKCk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIG92ZXJsYXlMb2dpbiApIHtcclxuXHJcblx0XHRcdFx0aWYgKCBib2FyZExvZ2luID09PSBudWxsICkge1xyXG5cclxuXHRcdFx0XHRcdHByb2R1Y3QucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtYnV5X19wcmljZScpLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCBNdXN0YWNoZS5yZW5kZXIodGVtcGxhdGVCb2FyZExvZ2luKSk7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgdG9vbHRpcCA9IHByb2R1Y3QucXVlcnlTZWxlY3RvcignLmJvYXJkLWxvZ2luIC50b29sdGlwJyk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCB0b29sdGlwICkge1xyXG5cclxuXHRcdFx0XHRcdFx0bmV3IFRvb2x0aXAodG9vbHRpcCk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRpZiAoIGJvYXJkTG9naW4gKSB7XHJcblxyXG5cdFx0XHRcdFx0Ym9hcmRMb2dpbi5yZW1vdmUoKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWdhbGxlcnlfX3dyYXAnKS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIE11c3RhY2hlLnJlbmRlcih0ZW1wbGF0ZU92ZXJsYXksIHsgb3ZlcmxheSwgb3ZlcmxheVRpdGxlLCBvdmVybGF5VGV4dCwgb3ZlcmxheUxvZ2luLCBvdmVybGF5Tm90LCBvdmVybGF5V2l0aGRyYXduLCBpZCwgYXJ0aWNsZUlkIH0pKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vINGG0LXQvdCwXHJcblxyXG5cdFx0XHRjb25zdCBwcmljZSA9IGNhcmRWb2x1bWUuZ2V0QXR0cmlidXRlKCdkYXRhLXByaWNlJyksXHJcblx0XHRcdFx0ICBwcmljZU9sZCA9IGNhcmRWb2x1bWUuZ2V0QXR0cmlidXRlKCdkYXRhLXByaWNlLW9sZCcpO1xyXG5cclxuXHRcdFx0Zm9ybS5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1idXlfX3ByaWNlJykuaW5uZXJIVE1MID0gTXVzdGFjaGUucmVuZGVyKHRlbXBsYXRlUHJpY2UsIHsgcHJpY2UsIHByaWNlT2xkIH0pO1xyXG5cclxuXHRcdFx0Ly8g0LrQvdC+0L/QutCwINC60YPQv9C40YLRjFxyXG5cclxuXHRcdFx0Y29uc3QgYnV5ID0gY2FyZFZvbHVtZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnV5JyksXHJcblx0XHRcdFx0ICBidXlDYXJ0ID0gYnV5ID09PSAnaW4tY2FydCcsXHJcblx0XHRcdFx0ICBidXlEaXNhYmxlZCA9IGJ1eSA9PT0gJ2Rpc2FibGVkJyxcclxuXHRcdFx0XHQgIGJ1eUJ0biA9IGJ1eSA9PT0gbnVsbCB8fCBidXlEaXNhYmxlZCxcclxuXHRcdFx0XHQgIGJ0bkxvZ2luID0gb3ZlcmxheUxvZ2luO1xyXG5cclxuXHRcdFx0aWYgKCBidG5Mb2dpbiApIHtcclxuXHJcblx0XHRcdFx0Zm9ybS5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1idXlfX3N1Ym1pdCcpLmlubmVySFRNTCA9IE11c3RhY2hlLnJlbmRlcih0ZW1wbGF0ZUZvb3QsIHsgYnRuTG9naW4gfSk7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWJ1eV9fc3VibWl0JykuaW5uZXJIVE1MID0gTXVzdGFjaGUucmVuZGVyKHRlbXBsYXRlRm9vdCwgeyBidXlCdG4sIGJ1eURpc2FibGVkLCBidXlDYXJ0IH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gYXZhaWxhYmlsaXR5XHJcblxyXG5cdFx0XHRmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWJ1eV9fYXZhaWxhYmlsaXR5JykuaW5uZXJIVE1MID0gTXVzdGFjaGUucmVuZGVyKHRlbXBsYXRlQXZhaWxhYmlsaXR5LCB7IGF2YWlsYWJpbGl0eTogIW92ZXJsYXlOb3QgfSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdC8vINC40LfQvNC10L3QuNGC0Ywg0L7QsdGK0ZHQvFxyXG5cdFx0XHRjb25zdCBjYXJkVm9sdW1lID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5wcm9kdWN0LWJ1eV9fdm9sdW1lLWlucHV0Jyk7XHJcblxyXG5cdFx0XHRpZiAoY2FyZFZvbHVtZSkge1xyXG5cclxuXHRcdFx0XHR2b2x1bWVDaGFuZ2UoY2FyZFZvbHVtZSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyDQuNC30LzQtdC90LjRgtGMINC+0LHRitGR0Lwg0LIg0LzQvtCx0LjQu9GM0L3QvtC8XHJcblx0XHRcdGNvbnN0IGNhcmRWb2x1bWVNb2JpbGUgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnByb2R1Y3QtYnV5X192b2x1bWUtc2VsZWN0Jyk7XHJcblxyXG5cdFx0XHRpZiAoY2FyZFZvbHVtZU1vYmlsZSkge1xyXG5cclxuXHRcdFx0XHRjb25zdCB2YWx1ZSA9IGNhcmRWb2x1bWVNb2JpbGUudmFsdWUsXHJcblx0XHRcdFx0XHQgIGNhcmQgPSBjYXJkVm9sdW1lTW9iaWxlLmNsb3Nlc3QoJy5wcm9kdWN0LWJ1eScpLFxyXG5cdFx0XHRcdFx0ICBpbnB1dEJ0biA9IGNhcmQucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3QtYnV5X192b2x1bWUtaW5wdXQnKTtcclxuXHJcblx0XHRcdFx0Wy4uLmlucHV0QnRuXS5mb3JFYWNoKCBlbCA9PiB7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBlbC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykgPT09IHZhbHVlICkge1xyXG5cclxuXHRcdFx0XHRcdFx0ZWwuY2hlY2tlZCA9IHRydWU7XHJcblxyXG5cdFx0XHRcdFx0XHR2b2x1bWVDaGFuZ2UoZWwpO1xyXG5cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0XHRlbC5jaGVja2VkID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyDQn9GA0L7RgtC+0LrQvtC7XHJcblxyXG5cdFx0Y29uc3QgZm9ybVNldCA9IHByb2R1Y3QucXVlcnlTZWxlY3RvckFsbCgnLnByZXZpZXctY2FyZF9fZm9ybS1zZXQnKTtcclxuXHJcblx0XHRpZiAoIGZvcm1TZXQubGVuZ3RoID4gMCApIHtcclxuXHJcblx0XHRcdGNvbnN0IHRlbXBsYXRlQWRkTW9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9kdWN0LXNldC1hZGRtb2RlLXRlbXBsYXRlJykuaW5uZXJIVE1MO1xyXG5cclxuXHRcdFx0Wy4uLmZvcm1TZXRdLmZvckVhY2goIGZvcm0gPT4ge1xyXG5cclxuXHRcdFx0XHRjb25zdCBtb2RlID0gZm9ybS5lbGVtZW50cy5tb2RlLFxyXG5cdFx0XHRcdFx0ICBidG5XcmFwID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcucHJldmlldy1jYXJkX19mb3JtLXNldC1idG4tYWRkJyk7XHJcblxyXG5cdFx0XHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygn0JIg0Y3RgtC+0Lkg0YfQsNGB0YLQuCDQvdC40YfQtdCz0L4g0L3QtSDQtNC10LvQsNC7LCDQutGA0L7QvNC1INGB0LzQtdC90Ysg0LrQvdC+0L/QutC4LiDQnNC+0LPRgyDRg9Cx0YDQsNGC0Ywg0L7QsdGA0LDQsdC+0YLRh9C40Log0LjQu9C4INC90LDQv9C40YHQsNGC0Ywg0YfRgtC+INC90LXQvtCx0YXQvtC00LjQvNC+OiDQv9C10YDQtdC60LvRjtGH0LXQvdC40LUg0LrQvdC+0L/QvtC6INC4INGCLtC/LicpO1xyXG5cclxuXHRcdFx0XHRcdGlmICggbW9kZS52YWx1ZSA9PT0gJ2FkZCcgKSB7IC8vINGC0YPRgiDQvdCw0LTQviDRgdC80L7RgtGA0LXRgtGMLCDRh9GC0L4g0LLQtdGA0L3Rg9C70Lg6IGFkZCB8IHJlbW92ZVxyXG5cclxuXHRcdFx0XHRcdFx0bW9kZS52YWx1ZSA9ICdyZW1vdmUnO1xyXG5cclxuXHRcdFx0XHRcdFx0YnRuV3JhcC5pbm5lckhUTUwgPSBNdXN0YWNoZS5yZW5kZXIodGVtcGxhdGVBZGRNb2RlLCB7IHJlbW92ZSA6IHRydWUgfSk7XHJcblxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRcdG1vZGUudmFsdWUgPSAnYWRkJztcclxuXHJcblx0XHRcdFx0XHRcdGJ0bldyYXAuaW5uZXJIVE1MID0gTXVzdGFjaGUucmVuZGVyKHRlbXBsYXRlQWRkTW9kZSwgeyBhZGQgOiB0cnVlIH0pO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gc2VsZWN0IHZvbHVtZVxyXG5cclxuXHRcdGNvbnN0IGJ0bnNTZWxlY3QgPSBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWN0LWJ1eV9fc2VsZWN0LWJ0bicpO1xyXG5cdFx0Y29uc3QgYnRuc1NlbGVjdFRvZ2dsZSA9IHByb2R1Y3QucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtYnV5X19zZWxlY3QtYnRuLS1vcGVuJyk7XHJcblxyXG5cdFx0aWYgKCBidG5zU2VsZWN0VG9nZ2xlICkge1xyXG5cclxuXHRcdFx0Y29uc3QgZm9ybSA9IGJ0bnNTZWxlY3RUb2dnbGUuY2xvc2VzdCgnLnByb2R1Y3QtYnV5JyksXHJcblx0XHRcdFx0ICB0ZW1wbGF0ZVByaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaWNlLXRlbXBsYXRlJykuaW5uZXJIVE1MO1xyXG5cclxuXHRcdFx0Wy4uLmJ0bnNTZWxlY3RdLmZvckVhY2goIGJ0biA9PiB7XHJcblxyXG5cdFx0XHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRpZiAoIGJ0biA9PT0gYnRuc1NlbGVjdFRvZ2dsZSApIHtcclxuXHJcblx0XHRcdFx0XHRcdC8vINC60L3QvtC/0LrQsCDQvtGC0LrRgNGL0YLQuNGPXHJcblxyXG5cdFx0XHRcdFx0XHRidG4uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtb3BlbicpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8g0LLRi9C/0LDQtNCw0YjQutCwXHJcblxyXG5cdFx0XHRcdFx0XHRidG5zU2VsZWN0VG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9wZW4nKTtcclxuXHJcblx0XHRcdFx0XHRcdFsuLi5idG5zU2VsZWN0XS5mb3JFYWNoKCBfYnRuID0+IHtcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKCBfYnRuID09PSBidG4gKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0X2J0bi5jbGFzc0xpc3QuYWRkKCdpcy1jdXJyZW50Jyk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0Zm9ybS5lbGVtZW50cy5pZC52YWx1ZSA9IGJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRidG5zU2VsZWN0VG9nZ2xlLnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWJ1eV9fc2VsZWN0LWltZyBpbWcnKS5zcmMgPSBidG4ucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtYnV5X19zZWxlY3QtaW1nIGltZycpLnNyYztcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRidG5zU2VsZWN0VG9nZ2xlLnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWJ1eV9fc2VsZWN0LW5hbWUnKS50ZXh0Q29udGVudCA9IGJ0bi5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1idXlfX3NlbGVjdC1uYW1lJykudGV4dENvbnRlbnQ7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgcHJpY2UgPSBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLXByaWNlJyksXHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgcHJpY2VPbGQgPSBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLXByaWNlLW9sZCcpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGZvcm0ucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtYnV5X19wcmljZScpLmlubmVySFRNTCA9IE11c3RhY2hlLnJlbmRlcih0ZW1wbGF0ZVByaWNlLCB7IHByaWNlLCBwcmljZU9sZCB9KTtcclxuXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdF9idG4uY2xhc3NMaXN0LnJlbW92ZSgnaXMtY3VycmVudCcpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdFx0aWYgKCBldmVudC50YXJnZXQuY2xvc2VzdCgnLnByb2R1Y3QtYnV5X19zZWxlY3QnKSA9PT0gbnVsbCApIHtcclxuXHJcblx0XHRcdFx0XHRidG5zU2VsZWN0VG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9wZW4nKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdCcpKTsiLCIoICgpPT4ge1xyXG5cclxuXHRjb25zdCByZWFkbW9yZVRvZ2dsZSA9IGJsb2NrID0+IHtcclxuXHJcblx0XHRjb25zdCBidG4gPSBibG9jay5xdWVyeVNlbGVjdG9yKCcucmVhZG1vcmUtdGV4dF9fYnRuJyksXHJcblx0XHRcdCAgdGV4dENsb3NlID0gYnRuLnRleHRDb250ZW50O1xyXG5cclxuXHRcdGNvbnN0IHRvZ2dsZSA9ICgpID0+IHtcclxuXHJcblx0XHRcdGlmICggYmxvY2suY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1vcGVuJykgKSB7XHJcblxyXG5cdFx0XHRcdGJsb2NrLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9wZW4nKTtcclxuXHRcdFx0XHRidG4udGV4dENvbnRlbnQgPSB0ZXh0Q2xvc2U7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRibG9jay5jbGFzc0xpc3QuYWRkKCdpcy1vcGVuJyk7XHJcblx0XHRcdFx0YnRuLnRleHRDb250ZW50ID0gYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1hbHQnKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlKTtcclxuXHJcblx0fTtcclxuXHJcblx0KCBibG9ja3MgPT4ge1xyXG5cclxuXHRcdGlmKGJsb2Nrcy5sZW5ndGgpIHtcclxuXHJcblx0XHRcdFsuLi5ibG9ja3NdLmZvckVhY2goIGJsb2NrID0+IHJlYWRtb3JlVG9nZ2xlKGJsb2NrKSApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlYWRtb3JlLXRleHQnKSk7XHJcblxyXG5cdC8vIGNvbnRlbnRcclxuXHJcblx0KCBibG9ja3MgPT4ge1xyXG5cclxuXHRcdGlmKGJsb2Nrcy5sZW5ndGgpIHtcclxuXHJcblx0XHRcdGNvbnN0IGluaXQgPSAoKT0+IHtcclxuXHJcblx0XHRcdFx0Y29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVhZG1vcmUtdGVtcGxhdGUnKS5pbm5lckhUTUw7XHJcblxyXG5cdFx0XHRcdFsuLi5ibG9ja3NdLmZvckVhY2goIGJsb2NrID0+IHtcclxuXHJcblx0XHRcdFx0XHQvLyBjb250aW51ZVxyXG5cclxuXHRcdFx0XHRcdGlmICggYmxvY2suY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1yZWFkbW9yZS1vZmYnKSApIHtcclxuXHJcblx0XHRcdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly8g0L/QtdGA0LXQvNC10YnQsNC10Lwg0LIg0LrQvtC90LXRhlxyXG5cclxuXHRcdFx0XHRcdGNvbnN0IG1haW4gPSBibG9jay5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnbWFpbicpID8gYmxvY2sucGFyZW50Tm9kZSA6IGZhbHNlO1xyXG5cclxuXHRcdFx0XHRcdGlmICggbWFpbiApIHtcclxuXHJcblx0XHRcdFx0XHRcdG1haW4uYXBwZW5kKGJsb2NrKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly8gcmVhZG1vcmVcclxuXHJcblx0XHRcdFx0XHRsZXQgYXBwZW5kID0gbnVsbDtcclxuXHJcblx0XHRcdFx0XHRjb25zdCBociA9IGJsb2NrLnF1ZXJ5U2VsZWN0b3IoJy5yZWFkbW9yZS1ocicpO1xyXG5cclxuXHRcdFx0XHRcdFsuLi5ibG9jay5jaGlsZHJlbl0uZm9yRWFjaCggZWwgPT4ge1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKCBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3JlYWRtb3JlLWhyJykgfHwgKCAhaHIgJiYgKCBlbC50YWdOYW1lID09PSAnSDInIHx8IGVsLnRhZ05hbWUgPT09ICdIMycpICkgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGVsLnRhZ05hbWUpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAoIGFwcGVuZCA9PT0gbnVsbCApIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRibG9jay5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHRlbXBsYXRlKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRhcHBlbmQgPSBibG9jay5xdWVyeVNlbGVjdG9yKCcucmVhZG1vcmUtdGV4dF9fYm9keScpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRpZiggYXBwZW5kICkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRhcHBlbmQuYXBwZW5kKGVsKTtcclxuXHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHRpZiAoIGhyICkge1xyXG5cclxuXHRcdFx0XHRcdFx0aHIucmVtb3ZlKCk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmICggYXBwZW5kICkge1xyXG5cclxuXHRcdFx0XHRcdFx0cmVhZG1vcmVUb2dnbGUoYmxvY2sucXVlcnlTZWxlY3RvcignLnJlYWRtb3JlLXRleHQnKSk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHNldFRpbWVvdXQoICgpID0+IGluaXQoKSwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Zhc3RMb2FkU2NyaXB0JykgPyAwIDogMTAwMDApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRlbnQnKSk7XHJcblxyXG59KSgpOyIsIiggcmV2aWV3ID0+IHtcclxuXHJcblx0aWYoIHJldmlldyApIHtcclxuXHJcblx0XHQvLyBzdWJcclxuXHJcblx0XHRjb25zdCBidG5Ub2dnbGVTdWIgPSByZXZpZXcucXVlcnlTZWxlY3RvckFsbCgnLnJldmlld19fdG9nZ2xlLXN1YicpO1xyXG5cclxuXHRcdFsuLi5idG5Ub2dnbGVTdWJdLmZvckVhY2goIGJ0biA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCBncm91cCA9IGJ0bi5jbG9zZXN0KCcucmV2aWV3X19ncm91cCcpLFxyXG5cdFx0XHRcdCAgdGV4dERlZmF1bHQgPSBidG4uaW5uZXJIVE1MO1xyXG5cclxuXHRcdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRpZiAoIGdyb3VwLmNsYXNzTGlzdC5jb250YWlucygnaXMtb3BlbicpICkge1xyXG5cclxuXHRcdFx0XHRcdGdyb3VwLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9wZW4nKTtcclxuXHRcdFx0XHRcdGJ0bi5pbm5lckhUTUwgPSB0ZXh0RGVmYXVsdDtcclxuXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRncm91cC5jbGFzc0xpc3QuYWRkKCdpcy1vcGVuJyk7XHJcblx0XHRcdFx0XHRidG4udGV4dENvbnRlbnQgPSBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLWFsdCcpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJldmlldycpKTsiLCJ3aW5kb3cuc2VsZWN0cyA9IHNlbGVjdCA9PiB7XHJcblxyXG5cdGlmKHNlbGVjdC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19saXN0JykpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHRjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3QtdGVtcGxhdGUnKS5pbm5lckhUTUwsXHJcblx0XHQgIGZvcm0gPSBzZWxlY3QuY2xvc2VzdCgnZm9ybScpLFxyXG5cdFx0ICBjb250cm9sID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpLFxyXG5cdFx0ICBvcHRpb24gPSBzZWxlY3QucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJyksXHJcblx0XHQgIGZpbHRlciA9IHNlbGVjdC5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdC0tZmlsdGVyJyksXHJcblx0XHQgIGxpc3QgPSBbXTtcclxuXHJcblx0Y29uc3QgdmFsdWVEZWZhdWx0ID0gY29udHJvbC5xdWVyeVNlbGVjdG9yKCdbdmFsdWU9XCInICsgY29udHJvbC52YWx1ZSArICdcIl0nKS50ZXh0Q29udGVudDtcclxuXHJcblx0aWYoIGNvbnRyb2wuZGlzYWJsZWQgfHwgY29udHJvbC52YWx1ZSA9PT0gJ25vbmUnIHx8IGNvbnRyb2wudmFsdWUgPT09ICcnICl7XHJcblxyXG5cdFx0c2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2lzLWRlZmF1bHQnKTtcclxuXHJcblx0fVxyXG5cclxuXHRbLi4ub3B0aW9uXS5mb3JFYWNoKCBlbCA9PiB7XHJcblxyXG5cdFx0aWYgKCBlbC52YWx1ZSA9PT0gJ25vbmUnIHx8IGVsLnZhbHVlID09PSAnJyApIHtcclxuXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0bGlzdC5wdXNoKHtcclxuXHRcdFx0bmFtZSAgOiBjb250cm9sLm5hbWUsXHJcblx0XHRcdGxhYmVsIDogZWwudGV4dENvbnRlbnQsXHJcblx0XHRcdHZhbHVlIDogZWwudmFsdWUsXHJcblx0XHRcdGNoZWNrZWQgOiBjb250cm9sLnZhbHVlID09PSBlbC52YWx1ZVxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHRzZWxlY3QuaW5uZXJIVE1MID0gTXVzdGFjaGUucmVuZGVyKHRlbXBsYXRlLCB7IHZhbHVlRGVmYXVsdCwgbGlzdCwgZmlsdGVyIH0pO1xyXG5cclxuXHRjb25zdCBmaWVsZHNldCA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19saXN0JyksXHJcblx0XHQgIHZhbHVlVGV4dCA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X192YWx1ZS1pbm5lcicpO1xyXG5cclxuXHRmaWVsZHNldC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0aWYoIGV2ZW50LnRhcmdldC50YWdOYW1lID09PSAnSU5QVVQnICkge1xyXG5cclxuXHRcdFx0Y29uc3QgaXRlbSA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlO1xyXG5cclxuXHRcdFx0dmFsdWVUZXh0LnRleHRDb250ZW50ID0gaXRlbS50ZXh0Q29udGVudDtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxuXHRmb3JtICYmIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInJlc2V0XCIsICgpID0+IHtcclxuXHJcblx0XHRzZWxlY3QuY2xhc3NMaXN0LmFkZCgnaXMtZGVmYXVsdCcpO1xyXG5cdFx0dmFsdWVUZXh0LnRleHRDb250ZW50ID0gdmFsdWVEZWZhdWx0O1xyXG5cclxuXHR9KTtcclxuXHJcblx0aWYgKCBmaWx0ZXIgKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHRcdGNvbnN0IGlucHV0RmlsdGVyID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX2ZpbHRlcicpO1xyXG5cclxuXHRcdGlucHV0RmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgdmFsdWUgPSBpbnB1dEZpbHRlci52YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuXHRcdFx0aWYodmFsdWUubGVuZ3RoID4gMCkge1xyXG5cclxuXHRcdFx0XHRjb25zdCBsaXN0ID0gZmllbGRzZXQucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdF9fbGlzdC1pdGVtJyk7XHJcblxyXG5cdFx0XHRcdFsuLi5saXN0XS5mb3JFYWNoKCBvID0+IHtcclxuXHJcblx0XHRcdFx0XHRjb25zdCB0ZXh0ID0gby50ZXh0Q29udGVudC50cmltKCkudG9Mb3dlckNhc2UoKTtcclxuXHJcblx0XHRcdFx0XHRvLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnLCB0ZXh0LmluY2x1ZGVzKHZhbHVlKSk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRpZiggbGlzdC5sZW5ndGggPT09IGZpZWxkc2V0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3RfX2xpc3QtaXRlbS5oaWRlJykubGVuZ3RoICkge1xyXG5cclxuXHRcdFx0XHRcdHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdzZWxlY3QtLWZpbHRlci1lbXB0eScpO1xyXG5cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3QtLWZpbHRlci1lbXB0eScpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRbLi4ubGlzdF0uZm9yRWFjaCggbyA9PiBvLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSApO1xyXG5cdFx0XHRcdHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3QtLWZpbHRlci1lbXB0eScpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59O1xyXG5cclxuKCBpdGVtcyA9PiB7XHJcblxyXG5cdGlmKGl0ZW1zLmxlbmd0aCkge1xyXG5cclxuXHRcdFsuLi5pdGVtc10uZm9yRWFjaCggc2VsZWN0ID0+IHdpbmRvdy5zZWxlY3RzKHNlbGVjdCkpO1xyXG5cclxuXHR9XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGNvbnN0IGlzU2VsZWN0ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5zZWxlY3QnKTtcclxuXHJcblx0XHRbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdCcpXS5mb3JFYWNoKCBzZWxlY3QgPT4ge1xyXG5cclxuXHRcdFx0aWYgKCBzZWxlY3QgPT09IGlzU2VsZWN0ICkge1xyXG5cclxuXHRcdFx0XHRpZiAoIGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuc2VsZWN0X192YWx1ZScpICkge1xyXG5cclxuXHRcdFx0XHRcdHNlbGVjdC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1vcGVuJyk7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoIGV2ZW50LnRhcmdldC50YWdOYW1lID09PSAnSU5QVVQnICkge1xyXG5cclxuXHRcdFx0XHRcdHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJyk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJyk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdCcpKTsiLCIoIHN3aXBlckNvbnRhaW5lciA9PiB7XHJcblxyXG5cdGlmKCFzd2lwZXJDb250YWluZXIubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdFsuLi5zd2lwZXJDb250YWluZXJdLmZvckVhY2goIHN3aXBlID0+IHtcclxuXHJcblx0XHRsZXQgbXlTd2lwZSA9IG51bGwsXHJcblx0XHRcdHRvZ2dsZVN3aXBlID0gbnVsbCxcclxuXHRcdFx0cmVzZXRTd2lwZSA9IG51bGw7XHJcblxyXG5cdFx0Y29uc3Qgc3dpcGVOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuXHRcdFx0ICBzd2lwZUJ0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuXHRcdFx0ICBzd2lwZU5leHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSxcclxuXHRcdFx0ICBzd2lwZVByZXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSxcclxuXHRcdFx0ICBpdGVtcyA9IHN3aXBlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zd2lwZXItc2xpZGUnKSxcclxuXHRcdFx0ICBjb3VudCA9IGl0ZW1zLmxlbmd0aCxcclxuXHRcdFx0ICBiaWxsYm9hcmQgPSBzd2lwZS5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXBlci1jb250YWluZXItLWJpbGxib2FyZCcpLFxyXG5cdFx0XHQgIG5ld3MgPSBzd2lwZS5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXBlci1jb250YWluZXItLW5ld3MnKSxcclxuXHRcdFx0ICBwcmV2aWV3ID0gc3dpcGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzd2lwZXItY29udGFpbmVyLS1wcmV2aWV3JyksXHJcblx0XHRcdCAgcHJvZHVjdCA9IHN3aXBlLmNsYXNzTGlzdC5jb250YWlucygnc3dpcGVyLWNvbnRhaW5lci0tcHJvZHVjdCcpLFxyXG5cdFx0XHQgIGNlcnRpZmljYXRlcyA9IHN3aXBlLmNsYXNzTGlzdC5jb250YWlucygnc3dpcGVyLWNvbnRhaW5lci0tY2VydGlmaWNhdGVzJyksXHJcblx0XHRcdCAgY29uc3VsdGF0aW9ucyA9IHN3aXBlLmNsYXNzTGlzdC5jb250YWlucygnc3dpcGVyLWNvbnRhaW5lci0tY29uc3VsdGF0aW9ucycpLFxyXG5cdFx0XHQgIHByb2R1Y3RBcnRpY2xlID0gc3dpcGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzd2lwZXItY29udGFpbmVyLS1wcm9kdWN0LWFydGljbGUnKTtcclxuXHJcblx0XHRzd2lwZU5hdi5jbGFzc05hbWUgPSAnc3dpcGVyLXBhZ2luYXRpb24nO1xyXG5cclxuXHRcdHN3aXBlQnRucy5jbGFzc05hbWUgPSAnc3dpcGVyLW5hdmlnYXRpb24nO1xyXG5cdFx0c3dpcGVQcmV2LmNsYXNzTmFtZSA9ICdzd2lwZXItYnV0dG9uLXByZXYgYnV0dG9uJztcclxuXHRcdHN3aXBlTmV4dC5jbGFzc05hbWUgPSAnc3dpcGVyLWJ1dHRvbi1uZXh0IGJ1dHRvbic7XHJcblxyXG5cdFx0c3dpcGVQcmV2LnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsJ1ByZXZpb3VzIHNsaWRlJyk7XHJcblx0XHRzd2lwZU5leHQuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywnTmV4dCBzbGlkZScpO1xyXG5cclxuXHRcdHN3aXBlUHJldi5pbm5lckhUTUwgPSAnPHN2ZyB3aWR0aD1cIjQwXCIgaGVpZ2h0PVwiNDBcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHVzZSB4bGluazpocmVmPVwiI3N2Zy1hcnJvdy1jaGV2cm9uLWxlZnRcIi8+PC9zdmc+JztcclxuXHRcdHN3aXBlTmV4dC5pbm5lckhUTUwgPSAnPHN2ZyB3aWR0aD1cIjQwXCIgaGVpZ2h0PVwiNDBcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHVzZSB4bGluazpocmVmPVwiI3N2Zy1hcnJvdy1jaGV2cm9uLXJpZ2h0XCIvPjwvc3ZnPic7XHJcblxyXG5cdFx0c3dpcGVCdG5zLmFwcGVuZChzd2lwZVByZXYpO1xyXG5cdFx0c3dpcGVCdG5zLmFwcGVuZChzd2lwZU5leHQpO1xyXG5cclxuXHRcdHN3aXBlLmFwcGVuZChzd2lwZUJ0bnMpO1xyXG5cdFx0c3dpcGUuYXBwZW5kKHN3aXBlTmF2KTtcclxuXHJcblx0XHRyZXNldFN3aXBlID0gKCkgPT4ge1xyXG5cclxuXHRcdFx0aWYobXlTd2lwZSkge1xyXG5cclxuXHRcdFx0XHRteVN3aXBlLmRlc3Ryb3koZmFsc2UsdHJ1ZSk7XHJcblx0XHRcdFx0bXlTd2lwZSA9IHVuZGVmaW5lZDtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHN3aXBlTmF2LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHRcdFx0c3dpcGVCdG5zLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcblx0XHRcdGlmICggc3dpcGUuY2xvc2VzdCgnLnN3aXBlci1jb250YWluZXItc3R5bGUnKSApIHtcclxuXHJcblx0XHRcdFx0c3dpcGUuY2xvc2VzdCgnLnN3aXBlci1jb250YWluZXItc3R5bGUnKS5jbGFzc0xpc3QucmVtb3ZlKCdzd2lwZXItY29udGFpbmVyLXN0eWxlJyk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChuZXdzKSB7XHJcblxyXG5cdFx0XHRzd2lwZS5wYXJlbnROb2RlLmFwcGVuZChzd2lwZUJ0bnMpO1xyXG5cdFx0XHRzd2lwZS5wYXJlbnROb2RlLmFwcGVuZChzd2lwZU5hdik7XHJcblxyXG5cdFx0XHR0b2dnbGVTd2lwZSA9ICgpID0+IHtcclxuXHJcblx0XHRcdFx0cmVzZXRTd2lwZSgpO1xyXG5cclxuXHRcdFx0XHRpZiAoIHdpbmRvdy5pbm5lcldpZHRoID49IDEyNTAgJiYgY291bnQgPCA1ICkge1xyXG5cclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRzd2lwZU5hdi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblx0XHRcdFx0c3dpcGVCdG5zLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0c3dpcGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ3N3aXBlci1jb250YWluZXItc3R5bGUnKTtcclxuXHJcblx0XHRcdFx0Y29uc3QgZ2FwID0gd2luZG93LmlubmVyV2lkdGggPCAxMjUwICYmIHdpbmRvdy5pbm5lcldpZHRoID4gNzY3ID8gMCA6IDI0O1xyXG5cclxuXHRcdFx0XHRteVN3aXBlID0gbmV3IFN3aXBlcihzd2lwZSwge1xyXG5cdFx0XHRcdFx0bG9vcDogdHJ1ZSxcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogZ2FwLFxyXG5cdFx0XHRcdFx0c2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG5cdFx0XHRcdFx0c2xpZGVzUGVyR3JvdXA6IDEsXHJcblx0XHRcdFx0XHRuYXZpZ2F0aW9uOiB7XHJcblx0XHRcdFx0XHRcdG5leHRFbDogc3dpcGVOZXh0LFxyXG5cdFx0XHRcdFx0XHRwcmV2RWw6IHN3aXBlUHJldlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHBhZ2luYXRpb246IHtcclxuXHRcdFx0XHRcdFx0ZWw6IHN3aXBlTmF2LFxyXG5cdFx0XHRcdFx0XHRjbGlja2FibGU6IHRydWUsXHJcblx0XHRcdFx0XHRcdGJ1bGxldENsYXNzOiAnYnV0dG9uJyxcclxuXHRcdFx0XHRcdFx0YnVsbGV0QWN0aXZlQ2xhc3M6ICdpcy1hY3RpdmUnXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRzd2lwZS5hZGRFdmVudExpc3RlbmVyKCdzd2lwZXJSZXNpemUnLCB0b2dnbGVTd2lwZSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChjb25zdWx0YXRpb25zKSB7XHJcblxyXG5cdFx0XHRzd2lwZS5wYXJlbnROb2RlLmFwcGVuZChzd2lwZUJ0bnMpO1xyXG5cdFx0XHRzd2lwZS5wYXJlbnROb2RlLmFwcGVuZChzd2lwZU5hdik7XHJcblxyXG5cdFx0XHR0b2dnbGVTd2lwZSA9ICgpID0+IHtcclxuXHJcblx0XHRcdFx0cmVzZXRTd2lwZSgpO1xyXG5cclxuXHRcdFx0XHRpZiAoIHdpbmRvdy5pbm5lcldpZHRoID49IDEyNTAgJiYgY291bnQgPCAzICkge1xyXG5cclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRzd2lwZU5hdi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblx0XHRcdFx0c3dpcGVCdG5zLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0c3dpcGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ3N3aXBlci1jb250YWluZXItc3R5bGUnKTtcclxuXHJcblx0XHRcdFx0Y29uc3QgZ2FwID0gd2luZG93LmlubmVyV2lkdGggPCAxMjUwID8gMTYgOiA0ODtcclxuXHJcblx0XHRcdFx0bXlTd2lwZSA9IG5ldyBTd2lwZXIoc3dpcGUsIHtcclxuXHRcdFx0XHRcdGxvb3A6IHRydWUsXHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IGdhcCxcclxuXHRcdFx0XHRcdHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuXHRcdFx0XHRcdHNsaWRlc1Blckdyb3VwOiAxLFxyXG5cdFx0XHRcdFx0bmF2aWdhdGlvbjoge1xyXG5cdFx0XHRcdFx0XHRuZXh0RWw6IHN3aXBlTmV4dCxcclxuXHRcdFx0XHRcdFx0cHJldkVsOiBzd2lwZVByZXZcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRwYWdpbmF0aW9uOiB7XHJcblx0XHRcdFx0XHRcdGVsOiBzd2lwZU5hdixcclxuXHRcdFx0XHRcdFx0Y2xpY2thYmxlOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRidWxsZXRDbGFzczogJ2J1dHRvbicsXHJcblx0XHRcdFx0XHRcdGJ1bGxldEFjdGl2ZUNsYXNzOiAnaXMtYWN0aXZlJ1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c3dpcGUuYWRkRXZlbnRMaXN0ZW5lcignc3dpcGVyUmVzaXplJywgdG9nZ2xlU3dpcGUpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoY2VydGlmaWNhdGVzKSB7XHJcblxyXG5cdFx0XHRzd2lwZS5wYXJlbnROb2RlLmFwcGVuZChzd2lwZUJ0bnMpO1xyXG5cdFx0XHRzd2lwZS5wYXJlbnROb2RlLmFwcGVuZChzd2lwZU5hdik7XHJcblxyXG5cdFx0XHR0b2dnbGVTd2lwZSA9ICgpID0+IHtcclxuXHJcblx0XHRcdFx0cmVzZXRTd2lwZSgpO1xyXG5cclxuXHRcdFx0XHRpZiAoIHdpbmRvdy5pbm5lcldpZHRoID49IDEyNTAgJiYgY291bnQgPCA0ICkge1xyXG5cclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRzd2lwZU5hdi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblx0XHRcdFx0c3dpcGVCdG5zLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0c3dpcGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ3N3aXBlci1jb250YWluZXItc3R5bGUnKTtcclxuXHJcblx0XHRcdFx0Y29uc3QgZ2FwID0gd2luZG93LmlubmVyV2lkdGggPCA3NjggPyAwIDogMjQ7XHJcblxyXG5cdFx0XHRcdG15U3dpcGUgPSBuZXcgU3dpcGVyKHN3aXBlLCB7XHJcblx0XHRcdFx0XHRsb29wOiB0cnVlLFxyXG5cdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiBnYXAsXHJcblx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcblx0XHRcdFx0XHRzbGlkZXNQZXJHcm91cDogMSxcclxuXHRcdFx0XHRcdG5hdmlnYXRpb246IHtcclxuXHRcdFx0XHRcdFx0bmV4dEVsOiBzd2lwZU5leHQsXHJcblx0XHRcdFx0XHRcdHByZXZFbDogc3dpcGVQcmV2XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0cGFnaW5hdGlvbjoge1xyXG5cdFx0XHRcdFx0XHRlbDogc3dpcGVOYXYsXHJcblx0XHRcdFx0XHRcdGNsaWNrYWJsZTogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0YnVsbGV0Q2xhc3M6ICdidXR0b24nLFxyXG5cdFx0XHRcdFx0XHRidWxsZXRBY3RpdmVDbGFzczogJ2lzLWFjdGl2ZSdcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHN3aXBlLmFkZEV2ZW50TGlzdGVuZXIoJ3N3aXBlclJlc2l6ZScsIHRvZ2dsZVN3aXBlKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHByb2R1Y3RBcnRpY2xlKSB7XHJcblxyXG5cdFx0XHRzd2lwZS5wYXJlbnROb2RlLmFwcGVuZChzd2lwZUJ0bnMpO1xyXG5cdFx0XHRzd2lwZS5wYXJlbnROb2RlLmFwcGVuZChzd2lwZU5hdik7XHJcblxyXG5cdFx0XHR0b2dnbGVTd2lwZSA9ICgpID0+IHtcclxuXHJcblx0XHRcdFx0cmVzZXRTd2lwZSgpO1xyXG5cclxuXHRcdFx0XHRpZiAoIHdpbmRvdy5pbm5lcldpZHRoID49IDEyNTAgJiYgY291bnQgPCA0ICkge1xyXG5cclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoIHdpbmRvdy5pbm5lcldpZHRoID49IDc2OCApIHtcclxuXHJcblx0XHRcdFx0XHRzd2lwZUJ0bnMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHN3aXBlTmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0c3dpcGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ3N3aXBlci1jb250YWluZXItc3R5bGUnKTtcclxuXHJcblx0XHRcdFx0Y29uc3QgY2VudGVyZWRTbGlkZXMgPSB3aW5kb3cuaW5uZXJXaWR0aCA8IDc2ODtcclxuXHJcblx0XHRcdFx0bXlTd2lwZSA9IG5ldyBTd2lwZXIoc3dpcGUsIHtcclxuXHRcdFx0XHRcdHJld2luZDogdHJ1ZSxcclxuXHRcdFx0XHRcdGNlbnRlcmVkU2xpZGVzOiBjZW50ZXJlZFNsaWRlcyxcclxuXHRcdFx0XHRcdHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuXHRcdFx0XHRcdHNsaWRlc1Blckdyb3VwOiAxLFxyXG5cdFx0XHRcdFx0bmF2aWdhdGlvbjoge1xyXG5cdFx0XHRcdFx0XHRuZXh0RWw6IHN3aXBlTmV4dCxcclxuXHRcdFx0XHRcdFx0cHJldkVsOiBzd2lwZVByZXZcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRwYWdpbmF0aW9uOiB7XHJcblx0XHRcdFx0XHRcdGVsOiBzd2lwZU5hdixcclxuXHRcdFx0XHRcdFx0Y2xpY2thYmxlOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRidWxsZXRDbGFzczogJ2J1dHRvbicsXHJcblx0XHRcdFx0XHRcdGJ1bGxldEFjdGl2ZUNsYXNzOiAnaXMtYWN0aXZlJ1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c3dpcGUuYWRkRXZlbnRMaXN0ZW5lcignc3dpcGVyUmVzaXplJywgdG9nZ2xlU3dpcGUpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZiAocHJldmlldykge1xyXG5cclxuXHRcdFx0c3dpcGUucGFyZW50Tm9kZS5hcHBlbmQoc3dpcGVCdG5zKTtcclxuXHRcdFx0c3dpcGUucGFyZW50Tm9kZS5hcHBlbmQoc3dpcGVOYXYpO1xyXG5cclxuXHRcdFx0dG9nZ2xlU3dpcGUgPSAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdHJlc2V0U3dpcGUoKTtcclxuXHJcblx0XHRcdFx0c3dpcGVOYXYuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cdFx0XHRcdHN3aXBlQnRucy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdHN3aXBlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdzd2lwZXItY29udGFpbmVyLXN0eWxlJyk7XHJcblxyXG5cdFx0XHRcdGNvbnN0IGdhcCA9IHdpbmRvdy5pbm5lcldpZHRoIDwgMTI1MCA/IDAgOiAyNDtcclxuXHJcblx0XHRcdFx0bXlTd2lwZSA9IG5ldyBTd2lwZXIoc3dpcGUsIHtcclxuXHRcdFx0XHRcdHJld2luZDogdHJ1ZSxcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogZ2FwLFxyXG5cdFx0XHRcdFx0c2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG5cdFx0XHRcdFx0c2xpZGVzUGVyR3JvdXA6IDEsXHJcbi8vXHRcdFx0XHRcdHNsaWRlc1Blckdyb3VwQXV0bzogdHJ1ZSxcclxuXHRcdFx0XHRcdG5hdmlnYXRpb246IHtcclxuXHRcdFx0XHRcdFx0bmV4dEVsOiBzd2lwZU5leHQsXHJcblx0XHRcdFx0XHRcdHByZXZFbDogc3dpcGVQcmV2XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0cGFnaW5hdGlvbjoge1xyXG5cdFx0XHRcdFx0XHRlbDogc3dpcGVOYXYsXHJcblx0XHRcdFx0XHRcdGNsaWNrYWJsZTogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0YnVsbGV0Q2xhc3M6ICdidXR0b24nLFxyXG5cdFx0XHRcdFx0XHRidWxsZXRBY3RpdmVDbGFzczogJ2lzLWFjdGl2ZSdcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHN3aXBlLmFkZEV2ZW50TGlzdGVuZXIoJ3N3aXBlclJlc2l6ZScsIHRvZ2dsZVN3aXBlKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGJpbGxib2FyZCkge1xyXG5cclxuXHRcdFx0dG9nZ2xlU3dpcGUgPSAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdHJlc2V0U3dpcGUoKTtcclxuXHJcblx0XHRcdFx0c3dpcGUucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdzd2lwZXItY29udGFpbmVyLXN0eWxlJyk7XHJcblxyXG5cdFx0XHRcdGlmKCB3aW5kb3cuaW5uZXJXaWR0aCA8IDEyNTAgKSB7XHJcblxyXG5cdFx0XHRcdFx0c3dpcGVOYXYuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHRcdG15U3dpcGUgPSBuZXcgU3dpcGVyKHN3aXBlLCB7XHJcblx0XHRcdFx0XHRcdGxvb3A6IHRydWUsXHJcblx0XHRcdFx0XHRcdHBhZ2luYXRpb246IHtcclxuXHRcdFx0XHRcdFx0XHRlbDogc3dpcGVOYXYsXHJcblx0XHRcdFx0XHRcdFx0Y2xpY2thYmxlOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdGJ1bGxldENsYXNzOiAnYnV0dG9uJyxcclxuXHRcdFx0XHRcdFx0XHRidWxsZXRBY3RpdmVDbGFzczogJ2lzLWFjdGl2ZSdcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0c3dpcGVCdG5zLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0XHRteVN3aXBlID0gbmV3IFN3aXBlcihzd2lwZSwge1xyXG5cdFx0XHRcdFx0XHRsb29wOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRhdXRvcGxheToge1xyXG5cdFx0XHRcdFx0XHRcdGRlbGF5OiA1MDAwXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdGVmZmVjdDogJ2ZhZGUnLFxyXG5cdFx0XHRcdFx0XHRmYWRlRWZmZWN0OiB7XHJcblx0XHRcdFx0XHRcdFx0Y3Jvc3NGYWRlOiB0cnVlXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdG5hdmlnYXRpb246IHtcclxuXHRcdFx0XHRcdFx0XHRuZXh0RWw6IHN3aXBlTmV4dCxcclxuXHRcdFx0XHRcdFx0XHRwcmV2RWw6IHN3aXBlUHJldlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c3dpcGUuYWRkRXZlbnRMaXN0ZW5lcignc3dpcGVyUmVzaXplJywgdG9nZ2xlU3dpcGUpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZiAocHJvZHVjdCkge1xyXG5cclxuXHRcdFx0c3dpcGVOYXYuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuXHRcdFx0Y29uc3QgZ2FsbGVyeVByZXZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdC1nYWxsZXJ5X19wcmV2aWV3LWxpbmsnKTtcclxuXHJcblx0XHRcdHRvZ2dsZVN3aXBlID0gKCkgPT4ge1xyXG5cclxuXHRcdFx0XHR0b2dnbGVTd2lwZSA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHRzd2lwZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ3N3aXBlci1jb250YWluZXItc3R5bGUnKTtcclxuXHJcblx0XHRcdFx0bmV3IFN3aXBlcihzd2lwZSwge1xyXG5cdFx0XHRcdFx0bG9vcDogdHJ1ZSxcclxuXHRcdFx0XHRcdG5hdmlnYXRpb246IHtcclxuXHRcdFx0XHRcdFx0bmV4dEVsOiBzd2lwZU5leHQsXHJcblx0XHRcdFx0XHRcdHByZXZFbDogc3dpcGVQcmV2XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0b246IHtcclxuXHRcdFx0XHRcdFx0c2xpZGVDaGFuZ2UgOiAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFsuLi5nYWxsZXJ5UHJldmlld10uZm9yRWFjaCggKF9saW5rLGluZGV4KSA9PiBfbGluay5wYXJlbnROb2RlLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWN1cnJlbnQnLCBzd2lwZS5zd2lwZXIucmVhbEluZGV4ID09PSBpbmRleCkgKTtcclxuXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0c3dpcGUuYWRkRXZlbnRMaXN0ZW5lcignc3dpcGVySnNMb2FkJywgdG9nZ2xlU3dpcGUpO1xyXG5cclxuXHR9KTtcclxuXHJcblx0bGV0IHJlc2l6ZVRpbWVvdXQgPSBudWxsLFxyXG5cdFx0d2luZG93V2lkdGhPTGQgPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xyXG5cclxuXHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHtcclxuXHJcblx0XHRcdGlmIChyZXNpemVUaW1lb3V0ID09PSBudWxsKSB7XHJcblxyXG5cdFx0XHRcdHJlc2l6ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0cmVzaXplVGltZW91dCA9IG51bGw7XHJcblxyXG5cdFx0XHRcdFx0aWYod2luZG93V2lkdGhPTGQgIT09IHdpbmRvdy5pbm5lcldpZHRoKSB7XHJcblxyXG5cdFx0XHRcdFx0XHR3aW5kb3dXaWR0aE9MZCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKHdpbmRvdy5Td2lwZXIpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0Wy4uLnN3aXBlckNvbnRhaW5lcl0uZm9yRWFjaCggc3dpcGUgPT4gc3dpcGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJzd2lwZXJSZXNpemVcIikpICk7XHJcblxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9LCAxMDAwKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG5cclxuXHRzY3JpcHQuc3JjID0gJy9qcy9zd2lwZXIubWluLmpzJztcclxuXHJcblx0c2NyaXB0Lm9ubG9hZCA9ICgpID0+IFsuLi5zd2lwZXJDb250YWluZXJdLmZvckVhY2goIHN3aXBlID0+IHN3aXBlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwic3dpcGVySnNMb2FkXCIpKSApO1xyXG5cclxuXHRzZXRUaW1lb3V0KCAoKSA9PiBkb2N1bWVudC5oZWFkLmFwcGVuZChzY3JpcHQpLCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmFzdExvYWRTY3JpcHQnKSA/IDAgOiAxMDAwMCk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3dpcGVyLWNvbnRhaW5lcicpKTsiLCIoIHRhYnMgPT4ge1xyXG5cclxuXHRpZiAoIHRhYnMubGVuZ3RoID4gMCApIHtcclxuXHJcblx0XHRbLi4udGFic10uZm9yRWFjaCggdGFiID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiksXHJcblx0XHRcdFx0ICBhcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwic3ZnXCIpO1xyXG5cclxuXHRcdFx0YXJyb3cuc2V0QXR0cmlidXRlTlMobnVsbCwgXCJ2aWV3Qm94XCIsIFwiMCAwIDI0IDI0XCIpO1xyXG5cdFx0XHRhcnJvdy5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcIndpZHRoXCIsIDI0KTtcclxuXHRcdFx0YXJyb3cuc2V0QXR0cmlidXRlTlMobnVsbCwgXCJoZWlnaHRcIiwgMjQpO1xyXG5cclxuXHRcdFx0YXJyb3cuaW5uZXJIVE1MID0gJzx1c2UgeGxpbms6aHJlZj1cIiNzdmctYXJyb3ctY2hldnJvbi1kb3duXCIvPic7XHJcblxyXG5cdFx0XHRjb25zdCBidG5zID0gdGFiLnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJzX19idG4nKSxcclxuXHRcdFx0XHQgIGl0ZW1zID0gdGFiLnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJzX19pdGVtJyk7XHJcblxyXG5cdFx0XHRbLi4uYnRuc10uZm9yRWFjaCggKGJ0bixpbmRleCkgPT4ge1xyXG5cclxuXHRcdFx0XHRidG4uYXBwZW5kQ2hpbGQoYXJyb3cuY2xvbmVOb2RlKHRydWUpKTtcclxuXHJcblx0XHRcdFx0Y29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuXHRcdFx0XHRvcHRpb24udmFsdWUgPSBpbmRleDtcclxuXHRcdFx0XHRvcHRpb24udGV4dENvbnRlbnQgPSBidG4udGV4dENvbnRlbnQ7XHJcblx0XHRcdFx0c2VsZWN0LmFwcGVuZChvcHRpb24pO1xyXG5cclxuXHRcdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0Wy4uLmJ0bnNdLmZvckVhY2goIChfYnRuLF9pbmRleCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdFx0X2J0bi5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnLCBfYnRuID09PSBidG4pO1xyXG5cdFx0XHRcdFx0XHRpdGVtc1tfaW5kZXhdLmNsYXNzTGlzdC50b2dnbGUoJ3Zpc3VhbGx5aGlkZGVuJywgX2J0biAhPT0gYnRuKTtcclxuXHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdFsuLi5pdGVtc10uZm9yRWFjaCggaXRlbSA9PiB7XHJcblxyXG5cdFx0XHRcdGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignc2V0QWN0aXZlJywgKCk9PiB7XHJcblxyXG5cdFx0XHRcdFx0Wy4uLml0ZW1zXS5mb3JFYWNoKCAoX2l0ZW0sX2luZGV4KSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0XHRidG5zW19pbmRleF0uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJywgX2l0ZW0gPT09IGl0ZW0pO1xyXG5cdFx0XHRcdFx0XHRfaXRlbS5jbGFzc0xpc3QudG9nZ2xlKCd2aXN1YWxseWhpZGRlbicsIF9pdGVtICE9PSBpdGVtKTtcclxuXHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRcdGNvbnN0IGluZGV4ID0gcGFyc2VJbnQoc2VsZWN0LnZhbHVlKTtcclxuXHJcblx0XHRcdFx0Wy4uLmJ0bnNdLmZvckVhY2goIChidG4sX2luZGV4KSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0YnRuLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScsIF9pbmRleCA9PT0gaW5kZXgpO1xyXG5cdFx0XHRcdFx0aXRlbXNbX2luZGV4XS5jbGFzc0xpc3QudG9nZ2xlKCd2aXN1YWxseWhpZGRlbicsIF9pbmRleCAhPT0gaW5kZXgpO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0dGFiLnF1ZXJ5U2VsZWN0b3IoJy50YWJzX19uYXYnKS5wcmVwZW5kKHNlbGVjdCk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJzJykpO1xyXG5cclxuLyooIHRhYnMgPT4ge1xyXG5cclxuXHRpZiAoIHRhYnMubGVuZ3RoID4gMCApIHtcclxuXHJcblx0XHRbLi4udGFic10uZm9yRWFjaCggdGFiID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IGJ0biA9IHRhYi5xdWVyeVNlbGVjdG9yQWxsKCcudGFic19fYnRuJyksXHJcblx0XHRcdFx0ICBpdGVtID0gdGFiLnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJzX19pdGVtJyksXHJcblx0XHRcdFx0ICBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcblx0XHRcdFsuLi5idG5dLmZvckVhY2goIChidG4saW5kZXgpID0+IHtcclxuXHJcblx0XHRcdFx0Y29uc3QgX2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cclxuXHRcdFx0XHRfYnRuLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xyXG5cclxuXHRcdFx0XHRfYnRuLmNsYXNzTmFtZSA9IGluZGV4ID09PSAwID8gJ2J0biBidG4tLWdyZXknIDogJ2J0biBidG4tLW91dGxpbmUnO1xyXG5cclxuXHRcdFx0XHRfYnRuLnRleHRDb250ZW50ID0gYnRuLnRleHRDb250ZW50O1xyXG5cclxuXHRcdFx0XHRuYXYuYXBwZW5kQ2hpbGQoX2J0bik7XHJcblxyXG5cdFx0XHRcdF9idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0Wy4uLm5hdi5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuJyldLmZvckVhY2goIChidG4saW5kZXgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRcdGJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdidG4tLWdyZXknLCBfYnRuID09PSBidG4pO1xyXG5cdFx0XHRcdFx0XHRidG4uY2xhc3NMaXN0LnRvZ2dsZSgnYnRuLS1vdXRsaW5lJywgX2J0biAhPT0gYnRuKTtcclxuXHJcblx0XHRcdFx0XHRcdGl0ZW1baW5kZXhdLmNsYXNzTGlzdC50b2dnbGUoJ3Zpc3VhbGx5aGlkZGVuJywgX2J0biAhPT0gYnRuKTtcclxuXHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdGJ0bi5yZW1vdmUoKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0bmF2LmNsYXNzTGlzdC5hZGQoJ3RhYnNfX25hdicpO1xyXG5cdFx0XHR0YWIuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmJlZ2luJywgbmF2KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYnMnKSk7Ki8iLCIvLyB0aXRsZVxyXG5cclxuKCB0b29sdGlwcyA9PiB7XHJcblxyXG5cdGlmKHRvb2x0aXBzLmxlbmd0aCl7XHJcblxyXG5cdFx0Wy4uLnRvb2x0aXBzXS5mb3JFYWNoKCB0b29sdGlwID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5cclxuXHRcdFx0dGl0bGUuY2xhc3NOYW1lID0gJ3Rvb2x0aXAtdGl0bGVfX2lubmVyJztcclxuXHRcdFx0dGl0bGUudGV4dENvbnRlbnQgPSB0b29sdGlwLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxyXG5cclxuXHRcdFx0dG9vbHRpcC5yZW1vdmVBdHRyaWJ1dGUoJ3RpdGxlJyk7XHJcblx0XHRcdHRvb2x0aXAuYXBwZW5kKHRpdGxlKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRsZXQgdGltZW91dCA9IG51bGw7XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRpZiAoIGV2ZW50LnRhcmdldCAhPT0gZG9jdW1lbnQgKSB7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy50b29sdGlwLXRpdGxlJyk7XHJcblxyXG5cdFx0XHRcdFx0Wy4uLnRvb2x0aXBzXS5mb3JFYWNoKCB0b29sdGlwID0+IHtcclxuXHJcblx0XHRcdFx0XHRcdGlmKHRhcmdldCAhPT0gdG9vbHRpcCkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHR0b29sdGlwLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXNob3cnKTtcclxuXHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHRpZiAodGltZW91dCAhPT0gbnVsbCkge1xyXG5cclxuXHRcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR0aW1lb3V0ID0gc2V0VGltZW91dCggKCk9PiB7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoIHRhcmdldCApIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0dGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2lzLXNob3cnKTtcclxuXHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR9LCAzMDApO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvb2x0aXAtdGl0bGUnKSk7XHJcblxyXG4vLyB0b29sdGlwXHJcblxyXG5mdW5jdGlvbiBUb29sdGlwKHRvb2x0aXApIHtcclxuXHJcblx0bGV0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIobXV0YXRpb25SZWNvcmRzID0+IHtcclxuXHJcblx0XHRjb25zdCB0ID0gbXV0YXRpb25SZWNvcmRzWzBdLnRhcmdldCxcclxuXHRcdFx0ICBpbm5lciA9IHQucXVlcnlTZWxlY3RvcignLnRvb2x0aXBfX2lubmVyJyk7XHJcblxyXG5cdFx0aWYodC5vcGVuKSB7XHJcblxyXG5cdFx0XHRjb25zdCByZWN0ID0gaW5uZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG5cdFx0XHRpZihkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggPCByZWN0LnJpZ2h0KSB7XHJcblxyXG5cdFx0XHRcdC8vINC70LXQstC10LVcclxuXHJcblx0XHRcdFx0aW5uZXIuc3R5bGUubWFyZ2luTGVmdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCAtIHJlY3QucmlnaHQgKyAncHgnO1xyXG5cclxuXHRcdFx0fSBlbHNlIGlmKHJlY3QubGVmdCA8IDApIHtcclxuXHJcblx0XHRcdFx0Ly8g0L/RgNCw0LLQtdC1XHJcblxyXG5cdFx0XHRcdGlubmVyLnN0eWxlLm1hcmdpbkxlZnQgPSAtcmVjdC5sZWZ0ICsgJ3B4JztcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0aW5uZXIucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IGJ0biA9IHRvb2x0aXAucXVlcnlTZWxlY3RvcignLnRvb2x0aXBfX2J0bicpO1xyXG5cclxuXHRvYnNlcnZlci5vYnNlcnZlKHRvb2x0aXAsIHtcclxuXHJcblx0XHRhdHRyaWJ1dGVzIDogdHJ1ZVxyXG5cclxuXHR9KTtcclxuXHJcblx0dG9vbHRpcC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xyXG5cclxuXHRcdGlmICggd2luZG93LmlubmVyV2lkdGggPj0gMTI1MCApIHtcclxuXHJcblx0XHRcdHRvb2x0aXAub3BlbiA9IHRydWU7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcblx0dG9vbHRpcC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xyXG5cclxuXHRcdGlmICggd2luZG93LmlubmVyV2lkdGggPj0gMTI1MCApIHtcclxuXHJcblx0XHRcdHRvb2x0aXAub3BlbiA9IGZhbHNlO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG59XHJcblxyXG4oIHRvb2x0aXBzID0+IHtcclxuXHJcblx0aWYoIHRvb2x0aXBzLmxlbmd0aCApIHtcclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdGlmICggZXZlbnQudGFyZ2V0ICE9PSBkb2N1bWVudCApIHtcclxuXHJcblx0XHRcdFx0Y29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy50b29sdGlwJyk7XHJcblxyXG5cdFx0XHRcdFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9vbHRpcCcpXS5mb3JFYWNoKCB0b29sdGlwID0+IHtcclxuXHJcblx0XHRcdFx0XHRpZih0YXJnZXQgIT09IHRvb2x0aXApIHtcclxuXHJcblx0XHRcdFx0XHRcdHRvb2x0aXAub3BlbiA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Wy4uLnRvb2x0aXBzXS5mb3JFYWNoKCB0b29sdGlwID0+IG5ldyBUb29sdGlwKHRvb2x0aXApKTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvb2x0aXAnKSk7IiwiKCB0b3N0ZXIgPT4ge1xuXG5cdGlmKHRvc3Rlcil7XG5cblx0XHRsZXQgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjsgXCIpLFxuXHRcdFx0Y29va2llc1ZhbHVlID0gbnVsbDtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY29va2llcy5sZW5ndGg7IGkrKykge1xuXG5cdFx0XHRsZXQgY29va2llID0gY29va2llc1tpXS5zcGxpdChcIj1cIik7XG5cblx0XHRcdGlmIChjb29raWVbMF0gPT09IFwidG9zdGVyXCIpIHtcblxuXHRcdFx0XHRjb29raWVzVmFsdWUgPSBjb29raWVbMV07XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGNvbnN0IGJ0biA9IHRvc3Rlci5xdWVyeVNlbGVjdG9yKCcudG9zdGVyX19jbG9zZScpO1xuXHRcdGNvbnN0IG5hbWVDdXJyZW50ID0gdG9zdGVyLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJyk7XG5cblx0XHRpZiAoIGNvb2tpZXNWYWx1ZSAhPT0gbnVsbCAmJiBjb29raWVzVmFsdWUuc3BsaXQoXCJ8XCIpLmluY2x1ZGVzKG5hbWVDdXJyZW50KSApIHtcblxuXHRcdFx0dG9zdGVyLnJlbW92ZSgpO1xuXG5cdFx0fVxuXHRcdGVsc2Uge1xuXG5cdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblxuXHRcdFx0XHRjb29raWVzVmFsdWUgPSBjb29raWVzVmFsdWUgPT09IG51bGwgPyBuYW1lQ3VycmVudCA6IGNvb2tpZXNWYWx1ZSArICd8JyArIG5hbWVDdXJyZW50O1xuXG5cdFx0XHRcdGRvY3VtZW50LmNvb2tpZSA9IFwidG9zdGVyPVwiICsgY29va2llc1ZhbHVlICsgXCI7IHBhdGg9L1wiO1xuXG5cdFx0XHRcdHRvc3Rlci5yZW1vdmUoKTtcblxuXHRcdFx0fSk7XG5cblx0XHR9XG5cblx0fVxuXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9zdGVyJykpOyIsIiggdmlkZW9zID0+IHtcblxuXHRpZih2aWRlb3MubGVuZ3RoKXtcblxuXHRcdGZ1bmN0aW9uIFlvdVR1YmVHZXRJRCh1cmwpIHtcblxuXHRcdFx0bGV0IElEID0gJyc7XG5cblx0XHRcdHVybCA9IHVybC5yZXBsYWNlKC8oPnw8KS9naSwnJykuc3BsaXQoLyh2aVxcL3x2PXxcXC92XFwvfHlvdXR1XFwuYmVcXC98XFwvZW1iZWRcXC8pLyk7XG5cblx0XHRcdGlmKHVybFsyXSAhPT0gdW5kZWZpbmVkKSB7XG5cblx0XHRcdFx0SUQgPSB1cmxbMl0uc3BsaXQoL1teMC05YS16X1xcLV0vaSk7XG5cdFx0XHRcdElEID0gSURbMF07XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0SUQgPSB1cmw7XG5cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIElEO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCB2aWRlb3MubGVuZ3RoID4gMSApIHtcblxuXHRcdFx0Ly8gSW5qZWN0IFlvdVR1YmUgQVBJIHNjcmlwdFxuXHRcdFx0Y29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cdFx0XHRzY3JpcHQuc3JjID0gXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9wbGF5ZXJfYXBpXCI7XG5cdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZChzY3JpcHQpO1xuXG5cdFx0fVxuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XG5cblx0XHRcdGNvbnN0IGNsaXBQcmV2aWV3ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy52aWRlby1jbGlwX19saW5rJyk7XG5cblx0XHRcdGlmICggY2xpcFByZXZpZXcgKSB7XG5cblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0XHRjb25zdCBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcblxuXHRcdFx0XHRpZnJhbWUuc2V0QXR0cmlidXRlKCdhbGxvd2Z1bGxzY3JlZW4nLCAnJyk7XG5cdFx0XHRcdGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICdodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8nICsgWW91VHViZUdldElEKGNsaXBQcmV2aWV3LmhyZWYpICsgJz9yZWw9MCZzaG93aW5mbz0wJmF1dG9wbGF5PTEmZW5hYmxlanNhcGk9MSZodG1sNT0xJyk7XG5cblx0XHRcdFx0Y2xpcFByZXZpZXcucGFyZW50Tm9kZS5hcHBlbmQoaWZyYW1lKTtcblx0XHRcdFx0Y2xpcFByZXZpZXcucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdpcy1pZnJhbWUnKTtcblxuXHRcdFx0XHRpZiAoIHZpZGVvcy5sZW5ndGggPiAxICkge1xuXG5cdFx0XHRcdFx0Wy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy52aWRlby1jbGlwLmlzLWlmcmFtZScpXS5mb3JFYWNoKCB2aWRlbyA9PiB7XG5cblx0XHRcdFx0XHRcdGlmICggY2xpcFByZXZpZXcucGFyZW50Tm9kZSA9PT0gdmlkZW8gKSB7XG5cblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGNvbnN0IGlmcmFtZSA9IHZpZGVvLnF1ZXJ5U2VsZWN0b3IoJ2lmcmFtZScpO1xuXG5cdFx0XHRcdFx0XHRpZiAoIGlmcmFtZSApIHtcblxuXHRcdFx0XHRcdFx0XHRsZXQgcGxheWVyID0gbmV3IFlULlBsYXllcihpZnJhbWUsIHtcblx0XHRcdFx0XHRcdFx0XHRldmVudHM6IHtcblx0XHRcdFx0XHRcdFx0XHRcdG9uUmVhZHk6ICgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cGxheWVyLnBhdXNlVmlkZW8oKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdH0pO1xuXG5cdH1cblxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnZpZGVvLWNsaXAnKSk7Il19
