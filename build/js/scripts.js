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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dG9zaXplLm1pbi5qcyIsImNsaXBib2FyZC5taW4uanMiLCJtdXN0YWNoZS5taW4uanMiLCJwaWNrbWV1cC5taW4uanMiLCJqcy5qcyIsImFjY29yZGlvbi5qcyIsImFydGljbGUuanMiLCJicmFuZHMuanMiLCJjYXJ0LmpzIiwiY29uc3VsdGF0aW9ucy5qcyIsImRlYWRsaW5lLmpzIiwiZXZlbnRzLmpzIiwiZmlsdGVyLXJvdy5qcyIsImZpbHRlci5qcyIsImZvcm0uanMiLCJoZWFkZXIuanMiLCJpbnB1dG1hc2suanMiLCJsay5qcyIsIm1lbnUuanMiLCJtb2RhbC5qcyIsIm5ld3MuanMiLCJvcmRlci5qcyIsInBhZ2UtdXAuanMiLCJwaG9uZS1jb3VudHJ5LmpzIiwicGlja21ldXAuanMiLCJwcmV2aWV3LWNhcmQtY29sb3IuanMiLCJwcmV2aWV3LWNhcmQtdm9sdW1lLmpzIiwicHJvZHVjdC5qcyIsInJlYWRtb3JlLXRleHQuanMiLCJyZXZpZXcuanMiLCJzZWxlY3QuanMiLCJzd2lwZXIuanMiLCJ0YWJzLmpzIiwidG9vbHRpcC5qcyIsInRvc3Rlci5qcyIsInZpZGVvLWNsaXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTkE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaktBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqS0E7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25UQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaGFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIhZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZSh0KTooZXx8c2VsZikuYXV0b3NpemU9dCgpfSh0aGlzLGZ1bmN0aW9uKCl7dmFyIGUsdCxuPVwiZnVuY3Rpb25cIj09dHlwZW9mIE1hcD9uZXcgTWFwOihlPVtdLHQ9W10se2hhczpmdW5jdGlvbih0KXtyZXR1cm4gZS5pbmRleE9mKHQpPi0xfSxnZXQ6ZnVuY3Rpb24obil7cmV0dXJuIHRbZS5pbmRleE9mKG4pXX0sc2V0OmZ1bmN0aW9uKG4sbyl7LTE9PT1lLmluZGV4T2YobikmJihlLnB1c2gobiksdC5wdXNoKG8pKX0sZGVsZXRlOmZ1bmN0aW9uKG4pe3ZhciBvPWUuaW5kZXhPZihuKTtvPi0xJiYoZS5zcGxpY2UobywxKSx0LnNwbGljZShvLDEpKX19KSxvPWZ1bmN0aW9uKGUpe3JldHVybiBuZXcgRXZlbnQoZSx7YnViYmxlczohMH0pfTt0cnl7bmV3IEV2ZW50KFwidGVzdFwiKX1jYXRjaChlKXtvPWZ1bmN0aW9uKGUpe3ZhciB0PWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiRXZlbnRcIik7cmV0dXJuIHQuaW5pdEV2ZW50KGUsITAsITEpLHR9fWZ1bmN0aW9uIHIoZSl7dmFyIHQ9bi5nZXQoZSk7dCYmdC5kZXN0cm95KCl9ZnVuY3Rpb24gaShlKXt2YXIgdD1uLmdldChlKTt0JiZ0LnVwZGF0ZSgpfXZhciBsPW51bGw7cmV0dXJuXCJ1bmRlZmluZWRcIj09dHlwZW9mIHdpbmRvd3x8XCJmdW5jdGlvblwiIT10eXBlb2Ygd2luZG93LmdldENvbXB1dGVkU3R5bGU/KChsPWZ1bmN0aW9uKGUpe3JldHVybiBlfSkuZGVzdHJveT1mdW5jdGlvbihlKXtyZXR1cm4gZX0sbC51cGRhdGU9ZnVuY3Rpb24oZSl7cmV0dXJuIGV9KTooKGw9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZSYmQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChlLmxlbmd0aD9lOltlXSxmdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24oZSl7aWYoZSYmZS5ub2RlTmFtZSYmXCJURVhUQVJFQVwiPT09ZS5ub2RlTmFtZSYmIW4uaGFzKGUpKXt2YXIgdCxyPW51bGwsaT1udWxsLGw9bnVsbCxkPWZ1bmN0aW9uKCl7ZS5jbGllbnRXaWR0aCE9PWkmJmMoKX0sdT1mdW5jdGlvbih0KXt3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLGQsITEpLGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsYywhMSksZS5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5dXBcIixjLCExKSxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhdXRvc2l6ZTpkZXN0cm95XCIsdSwhMSksZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiYXV0b3NpemU6dXBkYXRlXCIsYywhMSksT2JqZWN0LmtleXModCkuZm9yRWFjaChmdW5jdGlvbihuKXtlLnN0eWxlW25dPXRbbl19KSxuLmRlbGV0ZShlKX0uYmluZChlLHtoZWlnaHQ6ZS5zdHlsZS5oZWlnaHQscmVzaXplOmUuc3R5bGUucmVzaXplLG92ZXJmbG93WTplLnN0eWxlLm92ZXJmbG93WSxvdmVyZmxvd1g6ZS5zdHlsZS5vdmVyZmxvd1gsd29yZFdyYXA6ZS5zdHlsZS53b3JkV3JhcH0pO2UuYWRkRXZlbnRMaXN0ZW5lcihcImF1dG9zaXplOmRlc3Ryb3lcIix1LCExKSxcIm9ucHJvcGVydHljaGFuZ2VcImluIGUmJlwib25pbnB1dFwiaW4gZSYmZS5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIixjLCExKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLGQsITEpLGUuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsYywhMSksZS5hZGRFdmVudExpc3RlbmVyKFwiYXV0b3NpemU6dXBkYXRlXCIsYywhMSksZS5zdHlsZS5vdmVyZmxvd1g9XCJoaWRkZW5cIixlLnN0eWxlLndvcmRXcmFwPVwiYnJlYWstd29yZFwiLG4uc2V0KGUse2Rlc3Ryb3k6dSx1cGRhdGU6Y30pLFwidmVydGljYWxcIj09PSh0PXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGUsbnVsbCkpLnJlc2l6ZT9lLnN0eWxlLnJlc2l6ZT1cIm5vbmVcIjpcImJvdGhcIj09PXQucmVzaXplJiYoZS5zdHlsZS5yZXNpemU9XCJob3Jpem9udGFsXCIpLHI9XCJjb250ZW50LWJveFwiPT09dC5ib3hTaXppbmc/LShwYXJzZUZsb2F0KHQucGFkZGluZ1RvcCkrcGFyc2VGbG9hdCh0LnBhZGRpbmdCb3R0b20pKTpwYXJzZUZsb2F0KHQuYm9yZGVyVG9wV2lkdGgpK3BhcnNlRmxvYXQodC5ib3JkZXJCb3R0b21XaWR0aCksaXNOYU4ocikmJihyPTApLGMoKX1mdW5jdGlvbiBhKHQpe3ZhciBuPWUuc3R5bGUud2lkdGg7ZS5zdHlsZS53aWR0aD1cIjBweFwiLGUuc3R5bGUud2lkdGg9bixlLnN0eWxlLm92ZXJmbG93WT10fWZ1bmN0aW9uIHMoKXtpZigwIT09ZS5zY3JvbGxIZWlnaHQpe3ZhciB0PWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1bXTtlJiZlLnBhcmVudE5vZGUmJmUucGFyZW50Tm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQ7KWUucGFyZW50Tm9kZS5zY3JvbGxUb3AmJnQucHVzaCh7bm9kZTplLnBhcmVudE5vZGUsc2Nyb2xsVG9wOmUucGFyZW50Tm9kZS5zY3JvbGxUb3B9KSxlPWUucGFyZW50Tm9kZTtyZXR1cm4gdH0oZSksbj1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQmJmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7ZS5zdHlsZS5oZWlnaHQ9XCJcIixlLnN0eWxlLmhlaWdodD1lLnNjcm9sbEhlaWdodCtyK1wicHhcIixpPWUuY2xpZW50V2lkdGgsdC5mb3JFYWNoKGZ1bmN0aW9uKGUpe2Uubm9kZS5zY3JvbGxUb3A9ZS5zY3JvbGxUb3B9KSxuJiYoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcD1uKX19ZnVuY3Rpb24gYygpe3MoKTt2YXIgdD1NYXRoLnJvdW5kKHBhcnNlRmxvYXQoZS5zdHlsZS5oZWlnaHQpKSxuPXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGUsbnVsbCkscj1cImNvbnRlbnQtYm94XCI9PT1uLmJveFNpemluZz9NYXRoLnJvdW5kKHBhcnNlRmxvYXQobi5oZWlnaHQpKTplLm9mZnNldEhlaWdodDtpZihyPHQ/XCJoaWRkZW5cIj09PW4ub3ZlcmZsb3dZJiYoYShcInNjcm9sbFwiKSxzKCkscj1cImNvbnRlbnQtYm94XCI9PT1uLmJveFNpemluZz9NYXRoLnJvdW5kKHBhcnNlRmxvYXQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZSxudWxsKS5oZWlnaHQpKTplLm9mZnNldEhlaWdodCk6XCJoaWRkZW5cIiE9PW4ub3ZlcmZsb3dZJiYoYShcImhpZGRlblwiKSxzKCkscj1cImNvbnRlbnQtYm94XCI9PT1uLmJveFNpemluZz9NYXRoLnJvdW5kKHBhcnNlRmxvYXQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZSxudWxsKS5oZWlnaHQpKTplLm9mZnNldEhlaWdodCksbCE9PXIpe2w9cjt2YXIgaT1vKFwiYXV0b3NpemU6cmVzaXplZFwiKTt0cnl7ZS5kaXNwYXRjaEV2ZW50KGkpfWNhdGNoKGUpe319fX0oZSl9KSxlfSkuZGVzdHJveT1mdW5jdGlvbihlKXtyZXR1cm4gZSYmQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChlLmxlbmd0aD9lOltlXSxyKSxlfSxsLnVwZGF0ZT1mdW5jdGlvbihlKXtyZXR1cm4gZSYmQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChlLmxlbmd0aD9lOltlXSxpKSxlfSksbH0pO1xyXG4iLCIvKiFcbiAqIGNsaXBib2FyZC5qcyB2Mi4wLjExXG4gKiBodHRwczovL2NsaXBib2FyZGpzLmNvbS9cbiAqXG4gKiBMaWNlbnNlZCBNSVQgwqkgWmVubyBSb2NoYVxuICovXG4hZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxlKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLkNsaXBib2FyZEpTPWUoKTp0LkNsaXBib2FyZEpTPWUoKX0odGhpcyxmdW5jdGlvbigpe3JldHVybiBuPXs2ODY6ZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO24uZChlLHtkZWZhdWx0OmZ1bmN0aW9uKCl7cmV0dXJuIGJ9fSk7dmFyIGU9bigyNzkpLGk9bi5uKGUpLGU9bigzNzApLHU9bi5uKGUpLGU9big4MTcpLHI9bi5uKGUpO2Z1bmN0aW9uIGModCl7dHJ5e3JldHVybiBkb2N1bWVudC5leGVjQ29tbWFuZCh0KX1jYXRjaCh0KXtyZXR1cm59fXZhciBhPWZ1bmN0aW9uKHQpe3Q9cigpKHQpO3JldHVybiBjKFwiY3V0XCIpLHR9O2Z1bmN0aW9uIG8odCxlKXt2YXIgbixvLHQ9KG49dCxvPVwicnRsXCI9PT1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGlyXCIpLCh0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKSkuc3R5bGUuZm9udFNpemU9XCIxMnB0XCIsdC5zdHlsZS5ib3JkZXI9XCIwXCIsdC5zdHlsZS5wYWRkaW5nPVwiMFwiLHQuc3R5bGUubWFyZ2luPVwiMFwiLHQuc3R5bGUucG9zaXRpb249XCJhYnNvbHV0ZVwiLHQuc3R5bGVbbz9cInJpZ2h0XCI6XCJsZWZ0XCJdPVwiLTk5OTlweFwiLG89d2luZG93LnBhZ2VZT2Zmc2V0fHxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wLHQuc3R5bGUudG9wPVwiXCIuY29uY2F0KG8sXCJweFwiKSx0LnNldEF0dHJpYnV0ZShcInJlYWRvbmx5XCIsXCJcIiksdC52YWx1ZT1uLHQpO3JldHVybiBlLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0KSxlPXIoKSh0KSxjKFwiY29weVwiKSx0LnJlbW92ZSgpLGV9dmFyIGY9ZnVuY3Rpb24odCl7dmFyIGU9MTxhcmd1bWVudHMubGVuZ3RoJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOntjb250YWluZXI6ZG9jdW1lbnQuYm9keX0sbj1cIlwiO3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiB0P249byh0LGUpOnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50JiYhW1widGV4dFwiLFwic2VhcmNoXCIsXCJ1cmxcIixcInRlbFwiLFwicGFzc3dvcmRcIl0uaW5jbHVkZXMobnVsbD09dD92b2lkIDA6dC50eXBlKT9uPW8odC52YWx1ZSxlKToobj1yKCkodCksYyhcImNvcHlcIikpLG59O2Z1bmN0aW9uIGwodCl7cmV0dXJuKGw9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKHQpe3JldHVybiB0eXBlb2YgdH06ZnVuY3Rpb24odCl7cmV0dXJuIHQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmdC5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmdCE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgdH0pKHQpfXZhciBzPWZ1bmN0aW9uKCl7dmFyIHQ9MDxhcmd1bWVudHMubGVuZ3RoJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOnt9LGU9dC5hY3Rpb24sbj12b2lkIDA9PT1lP1wiY29weVwiOmUsbz10LmNvbnRhaW5lcixlPXQudGFyZ2V0LHQ9dC50ZXh0O2lmKFwiY29weVwiIT09biYmXCJjdXRcIiE9PW4pdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFwiYWN0aW9uXCIgdmFsdWUsIHVzZSBlaXRoZXIgXCJjb3B5XCIgb3IgXCJjdXRcIicpO2lmKHZvaWQgMCE9PWUpe2lmKCFlfHxcIm9iamVjdFwiIT09bChlKXx8MSE9PWUubm9kZVR5cGUpdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFwidGFyZ2V0XCIgdmFsdWUsIHVzZSBhIHZhbGlkIEVsZW1lbnQnKTtpZihcImNvcHlcIj09PW4mJmUuaGFzQXR0cmlidXRlKFwiZGlzYWJsZWRcIikpdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFwidGFyZ2V0XCIgYXR0cmlidXRlLiBQbGVhc2UgdXNlIFwicmVhZG9ubHlcIiBpbnN0ZWFkIG9mIFwiZGlzYWJsZWRcIiBhdHRyaWJ1dGUnKTtpZihcImN1dFwiPT09biYmKGUuaGFzQXR0cmlidXRlKFwicmVhZG9ubHlcIil8fGUuaGFzQXR0cmlidXRlKFwiZGlzYWJsZWRcIikpKXRocm93IG5ldyBFcnJvcignSW52YWxpZCBcInRhcmdldFwiIGF0dHJpYnV0ZS4gWW91IGNhblxcJ3QgY3V0IHRleHQgZnJvbSBlbGVtZW50cyB3aXRoIFwicmVhZG9ubHlcIiBvciBcImRpc2FibGVkXCIgYXR0cmlidXRlcycpfXJldHVybiB0P2YodCx7Y29udGFpbmVyOm99KTplP1wiY3V0XCI9PT1uP2EoZSk6ZihlLHtjb250YWluZXI6b30pOnZvaWQgMH07ZnVuY3Rpb24gcCh0KXtyZXR1cm4ocD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24odCl7cmV0dXJuIHR5cGVvZiB0fTpmdW5jdGlvbih0KXtyZXR1cm4gdCYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZ0LmNvbnN0cnVjdG9yPT09U3ltYm9sJiZ0IT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiB0fSkodCl9ZnVuY3Rpb24gZCh0LGUpe2Zvcih2YXIgbj0wO248ZS5sZW5ndGg7bisrKXt2YXIgbz1lW25dO28uZW51bWVyYWJsZT1vLmVudW1lcmFibGV8fCExLG8uY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIG8mJihvLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxvLmtleSxvKX19ZnVuY3Rpb24geSh0LGUpe3JldHVybih5PU9iamVjdC5zZXRQcm90b3R5cGVPZnx8ZnVuY3Rpb24odCxlKXtyZXR1cm4gdC5fX3Byb3RvX189ZSx0fSkodCxlKX1mdW5jdGlvbiBoKG4pe3ZhciBvPWZ1bmN0aW9uKCl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFJlZmxlY3R8fCFSZWZsZWN0LmNvbnN0cnVjdClyZXR1cm4hMTtpZihSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKXJldHVybiExO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIFByb3h5KXJldHVybiEwO3RyeXtyZXR1cm4gRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLFtdLGZ1bmN0aW9uKCl7fSkpLCEwfWNhdGNoKHQpe3JldHVybiExfX0oKTtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgdCxlPXYobik7cmV0dXJuIHQ9bz8odD12KHRoaXMpLmNvbnN0cnVjdG9yLFJlZmxlY3QuY29uc3RydWN0KGUsYXJndW1lbnRzLHQpKTplLmFwcGx5KHRoaXMsYXJndW1lbnRzKSxlPXRoaXMsISh0PXQpfHxcIm9iamVjdFwiIT09cCh0KSYmXCJmdW5jdGlvblwiIT10eXBlb2YgdD9mdW5jdGlvbih0KXtpZih2b2lkIDAhPT10KXJldHVybiB0O3Rocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKX0oZSk6dH19ZnVuY3Rpb24gdih0KXtyZXR1cm4odj1PYmplY3Quc2V0UHJvdG90eXBlT2Y/T2JqZWN0LmdldFByb3RvdHlwZU9mOmZ1bmN0aW9uKHQpe3JldHVybiB0Ll9fcHJvdG9fX3x8T2JqZWN0LmdldFByb3RvdHlwZU9mKHQpfSkodCl9ZnVuY3Rpb24gbSh0LGUpe3Q9XCJkYXRhLWNsaXBib2FyZC1cIi5jb25jYXQodCk7aWYoZS5oYXNBdHRyaWJ1dGUodCkpcmV0dXJuIGUuZ2V0QXR0cmlidXRlKHQpfXZhciBiPWZ1bmN0aW9uKCl7IWZ1bmN0aW9uKHQsZSl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSYmbnVsbCE9PWUpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO3QucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoZSYmZS5wcm90b3R5cGUse2NvbnN0cnVjdG9yOnt2YWx1ZTp0LHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH19KSxlJiZ5KHQsZSl9KHIsaSgpKTt2YXIgdCxlLG4sbz1oKHIpO2Z1bmN0aW9uIHIodCxlKXt2YXIgbjtyZXR1cm4gZnVuY3Rpb24odCl7aWYoISh0IGluc3RhbmNlb2YgcikpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX0odGhpcyksKG49by5jYWxsKHRoaXMpKS5yZXNvbHZlT3B0aW9ucyhlKSxuLmxpc3RlbkNsaWNrKHQpLG59cmV0dXJuIHQ9cixuPVt7a2V5OlwiY29weVwiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciBlPTE8YXJndW1lbnRzLmxlbmd0aCYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTp7Y29udGFpbmVyOmRvY3VtZW50LmJvZHl9O3JldHVybiBmKHQsZSl9fSx7a2V5OlwiY3V0XCIsdmFsdWU6ZnVuY3Rpb24odCl7cmV0dXJuIGEodCl9fSx7a2V5OlwiaXNTdXBwb3J0ZWRcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciB0PTA8YXJndW1lbnRzLmxlbmd0aCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTpbXCJjb3B5XCIsXCJjdXRcIl0sdD1cInN0cmluZ1wiPT10eXBlb2YgdD9bdF06dCxlPSEhZG9jdW1lbnQucXVlcnlDb21tYW5kU3VwcG9ydGVkO3JldHVybiB0LmZvckVhY2goZnVuY3Rpb24odCl7ZT1lJiYhIWRvY3VtZW50LnF1ZXJ5Q29tbWFuZFN1cHBvcnRlZCh0KX0pLGV9fV0sKGU9W3trZXk6XCJyZXNvbHZlT3B0aW9uc1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIHQ9MDxhcmd1bWVudHMubGVuZ3RoJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOnt9O3RoaXMuYWN0aW9uPVwiZnVuY3Rpb25cIj09dHlwZW9mIHQuYWN0aW9uP3QuYWN0aW9uOnRoaXMuZGVmYXVsdEFjdGlvbix0aGlzLnRhcmdldD1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0LnRhcmdldD90LnRhcmdldDp0aGlzLmRlZmF1bHRUYXJnZXQsdGhpcy50ZXh0PVwiZnVuY3Rpb25cIj09dHlwZW9mIHQudGV4dD90LnRleHQ6dGhpcy5kZWZhdWx0VGV4dCx0aGlzLmNvbnRhaW5lcj1cIm9iamVjdFwiPT09cCh0LmNvbnRhaW5lcik/dC5jb250YWluZXI6ZG9jdW1lbnQuYm9keX19LHtrZXk6XCJsaXN0ZW5DbGlja1wiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXM7dGhpcy5saXN0ZW5lcj11KCkodCxcImNsaWNrXCIsZnVuY3Rpb24odCl7cmV0dXJuIGUub25DbGljayh0KX0pfX0se2tleTpcIm9uQ2xpY2tcIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgZT10LmRlbGVnYXRlVGFyZ2V0fHx0LmN1cnJlbnRUYXJnZXQsbj10aGlzLmFjdGlvbihlKXx8XCJjb3B5XCIsdD1zKHthY3Rpb246bixjb250YWluZXI6dGhpcy5jb250YWluZXIsdGFyZ2V0OnRoaXMudGFyZ2V0KGUpLHRleHQ6dGhpcy50ZXh0KGUpfSk7dGhpcy5lbWl0KHQ/XCJzdWNjZXNzXCI6XCJlcnJvclwiLHthY3Rpb246bix0ZXh0OnQsdHJpZ2dlcjplLGNsZWFyU2VsZWN0aW9uOmZ1bmN0aW9uKCl7ZSYmZS5mb2N1cygpLHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMoKX19KX19LHtrZXk6XCJkZWZhdWx0QWN0aW9uXCIsdmFsdWU6ZnVuY3Rpb24odCl7cmV0dXJuIG0oXCJhY3Rpb25cIix0KX19LHtrZXk6XCJkZWZhdWx0VGFyZ2V0XCIsdmFsdWU6ZnVuY3Rpb24odCl7dD1tKFwidGFyZ2V0XCIsdCk7aWYodClyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0KX19LHtrZXk6XCJkZWZhdWx0VGV4dFwiLHZhbHVlOmZ1bmN0aW9uKHQpe3JldHVybiBtKFwidGV4dFwiLHQpfX0se2tleTpcImRlc3Ryb3lcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMubGlzdGVuZXIuZGVzdHJveSgpfX1dKSYmZCh0LnByb3RvdHlwZSxlKSxuJiZkKHQsbikscn0oKX0sODI4OmZ1bmN0aW9uKHQpe3ZhciBlO1widW5kZWZpbmVkXCI9PXR5cGVvZiBFbGVtZW50fHxFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzfHwoKGU9RWxlbWVudC5wcm90b3R5cGUpLm1hdGNoZXM9ZS5tYXRjaGVzU2VsZWN0b3J8fGUubW96TWF0Y2hlc1NlbGVjdG9yfHxlLm1zTWF0Y2hlc1NlbGVjdG9yfHxlLm9NYXRjaGVzU2VsZWN0b3J8fGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yKSx0LmV4cG9ydHM9ZnVuY3Rpb24odCxlKXtmb3IoO3QmJjkhPT10Lm5vZGVUeXBlOyl7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgdC5tYXRjaGVzJiZ0Lm1hdGNoZXMoZSkpcmV0dXJuIHQ7dD10LnBhcmVudE5vZGV9fX0sNDM4OmZ1bmN0aW9uKHQsZSxuKXt2YXIgdT1uKDgyOCk7ZnVuY3Rpb24gaSh0LGUsbixvLHIpe3ZhciBpPWZ1bmN0aW9uKGUsbix0LG8pe3JldHVybiBmdW5jdGlvbih0KXt0LmRlbGVnYXRlVGFyZ2V0PXUodC50YXJnZXQsbiksdC5kZWxlZ2F0ZVRhcmdldCYmby5jYWxsKGUsdCl9fS5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihuLGkscikse2Rlc3Ryb3k6ZnVuY3Rpb24oKXt0LnJlbW92ZUV2ZW50TGlzdGVuZXIobixpLHIpfX19dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSxuLG8scil7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdC5hZGRFdmVudExpc3RlbmVyP2kuYXBwbHkobnVsbCxhcmd1bWVudHMpOlwiZnVuY3Rpb25cIj09dHlwZW9mIG4/aS5iaW5kKG51bGwsZG9jdW1lbnQpLmFwcGx5KG51bGwsYXJndW1lbnRzKTooXCJzdHJpbmdcIj09dHlwZW9mIHQmJih0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodCkpLEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbCh0LGZ1bmN0aW9uKHQpe3JldHVybiBpKHQsZSxuLG8scil9KSl9fSw4Nzk6ZnVuY3Rpb24odCxuKXtuLm5vZGU9ZnVuY3Rpb24odCl7cmV0dXJuIHZvaWQgMCE9PXQmJnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCYmMT09PXQubm9kZVR5cGV9LG4ubm9kZUxpc3Q9ZnVuY3Rpb24odCl7dmFyIGU9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpO3JldHVybiB2b2lkIDAhPT10JiYoXCJbb2JqZWN0IE5vZGVMaXN0XVwiPT09ZXx8XCJbb2JqZWN0IEhUTUxDb2xsZWN0aW9uXVwiPT09ZSkmJlwibGVuZ3RoXCJpbiB0JiYoMD09PXQubGVuZ3RofHxuLm5vZGUodFswXSkpfSxuLnN0cmluZz1mdW5jdGlvbih0KXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgdHx8dCBpbnN0YW5jZW9mIFN0cmluZ30sbi5mbj1mdW5jdGlvbih0KXtyZXR1cm5cIltvYmplY3QgRnVuY3Rpb25dXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCl9fSwzNzA6ZnVuY3Rpb24odCxlLG4pe3ZhciBmPW4oODc5KSxsPW4oNDM4KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxlLG4pe2lmKCF0JiYhZSYmIW4pdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyByZXF1aXJlZCBhcmd1bWVudHNcIik7aWYoIWYuc3RyaW5nKGUpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJTZWNvbmQgYXJndW1lbnQgbXVzdCBiZSBhIFN0cmluZ1wiKTtpZighZi5mbihuKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhpcmQgYXJndW1lbnQgbXVzdCBiZSBhIEZ1bmN0aW9uXCIpO2lmKGYubm9kZSh0KSlyZXR1cm4gYz1lLGE9biwodT10KS5hZGRFdmVudExpc3RlbmVyKGMsYSkse2Rlc3Ryb3k6ZnVuY3Rpb24oKXt1LnJlbW92ZUV2ZW50TGlzdGVuZXIoYyxhKX19O2lmKGYubm9kZUxpc3QodCkpcmV0dXJuIG89dCxyPWUsaT1uLEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobyxmdW5jdGlvbih0KXt0LmFkZEV2ZW50TGlzdGVuZXIocixpKX0pLHtkZXN0cm95OmZ1bmN0aW9uKCl7QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChvLGZ1bmN0aW9uKHQpe3QucmVtb3ZlRXZlbnRMaXN0ZW5lcihyLGkpfSl9fTtpZihmLnN0cmluZyh0KSlyZXR1cm4gdD10LGU9ZSxuPW4sbChkb2N1bWVudC5ib2R5LHQsZSxuKTt0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIFN0cmluZywgSFRNTEVsZW1lbnQsIEhUTUxDb2xsZWN0aW9uLCBvciBOb2RlTGlzdFwiKTt2YXIgbyxyLGksdSxjLGF9fSw4MTc6ZnVuY3Rpb24odCl7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlLG49XCJTRUxFQ1RcIj09PXQubm9kZU5hbWU/KHQuZm9jdXMoKSx0LnZhbHVlKTpcIklOUFVUXCI9PT10Lm5vZGVOYW1lfHxcIlRFWFRBUkVBXCI9PT10Lm5vZGVOYW1lPygoZT10Lmhhc0F0dHJpYnV0ZShcInJlYWRvbmx5XCIpKXx8dC5zZXRBdHRyaWJ1dGUoXCJyZWFkb25seVwiLFwiXCIpLHQuc2VsZWN0KCksdC5zZXRTZWxlY3Rpb25SYW5nZSgwLHQudmFsdWUubGVuZ3RoKSxlfHx0LnJlbW92ZUF0dHJpYnV0ZShcInJlYWRvbmx5XCIpLHQudmFsdWUpOih0Lmhhc0F0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiKSYmdC5mb2N1cygpLG49d2luZG93LmdldFNlbGVjdGlvbigpLChlPWRvY3VtZW50LmNyZWF0ZVJhbmdlKCkpLnNlbGVjdE5vZGVDb250ZW50cyh0KSxuLnJlbW92ZUFsbFJhbmdlcygpLG4uYWRkUmFuZ2UoZSksbi50b1N0cmluZygpKTtyZXR1cm4gbn19LDI3OTpmdW5jdGlvbih0KXtmdW5jdGlvbiBlKCl7fWUucHJvdG90eXBlPXtvbjpmdW5jdGlvbih0LGUsbil7dmFyIG89dGhpcy5lfHwodGhpcy5lPXt9KTtyZXR1cm4ob1t0XXx8KG9bdF09W10pKS5wdXNoKHtmbjplLGN0eDpufSksdGhpc30sb25jZTpmdW5jdGlvbih0LGUsbil7dmFyIG89dGhpcztmdW5jdGlvbiByKCl7by5vZmYodCxyKSxlLmFwcGx5KG4sYXJndW1lbnRzKX1yZXR1cm4gci5fPWUsdGhpcy5vbih0LHIsbil9LGVtaXQ6ZnVuY3Rpb24odCl7Zm9yKHZhciBlPVtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpLG49KCh0aGlzLmV8fCh0aGlzLmU9e30pKVt0XXx8W10pLnNsaWNlKCksbz0wLHI9bi5sZW5ndGg7bzxyO28rKyluW29dLmZuLmFwcGx5KG5bb10uY3R4LGUpO3JldHVybiB0aGlzfSxvZmY6ZnVuY3Rpb24odCxlKXt2YXIgbj10aGlzLmV8fCh0aGlzLmU9e30pLG89blt0XSxyPVtdO2lmKG8mJmUpZm9yKHZhciBpPTAsdT1vLmxlbmd0aDtpPHU7aSsrKW9baV0uZm4hPT1lJiZvW2ldLmZuLl8hPT1lJiZyLnB1c2gob1tpXSk7cmV0dXJuIHIubGVuZ3RoP25bdF09cjpkZWxldGUgblt0XSx0aGlzfX0sdC5leHBvcnRzPWUsdC5leHBvcnRzLlRpbnlFbWl0dGVyPWV9fSxyPXt9LG8ubj1mdW5jdGlvbih0KXt2YXIgZT10JiZ0Ll9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gdC5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiB0fTtyZXR1cm4gby5kKGUse2E6ZX0pLGV9LG8uZD1mdW5jdGlvbih0LGUpe2Zvcih2YXIgbiBpbiBlKW8ubyhlLG4pJiYhby5vKHQsbikmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LG4se2VudW1lcmFibGU6ITAsZ2V0OmVbbl19KX0sby5vPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LGUpfSxvKDY4NikuZGVmYXVsdDtmdW5jdGlvbiBvKHQpe2lmKHJbdF0pcmV0dXJuIHJbdF0uZXhwb3J0czt2YXIgZT1yW3RdPXtleHBvcnRzOnt9fTtyZXR1cm4gblt0XShlLGUuZXhwb3J0cyxvKSxlLmV4cG9ydHN9dmFyIG4scn0pOyIsIihmdW5jdGlvbiBkZWZpbmVNdXN0YWNoZShnbG9iYWwsZmFjdG9yeSl7aWYodHlwZW9mIGV4cG9ydHM9PT1cIm9iamVjdFwiJiZleHBvcnRzJiZ0eXBlb2YgZXhwb3J0cy5ub2RlTmFtZSE9PVwic3RyaW5nXCIpe2ZhY3RvcnkoZXhwb3J0cyl9ZWxzZSBpZih0eXBlb2YgZGVmaW5lPT09XCJmdW5jdGlvblwiJiZkZWZpbmUuYW1kKXtkZWZpbmUoW1wiZXhwb3J0c1wiXSxmYWN0b3J5KX1lbHNle2dsb2JhbC5NdXN0YWNoZT17fTtmYWN0b3J5KGdsb2JhbC5NdXN0YWNoZSl9fSkodGhpcyxmdW5jdGlvbiBtdXN0YWNoZUZhY3RvcnkobXVzdGFjaGUpe3ZhciBvYmplY3RUb1N0cmluZz1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO3ZhciBpc0FycmF5PUFycmF5LmlzQXJyYXl8fGZ1bmN0aW9uIGlzQXJyYXlQb2x5ZmlsbChvYmplY3Qpe3JldHVybiBvYmplY3RUb1N0cmluZy5jYWxsKG9iamVjdCk9PT1cIltvYmplY3QgQXJyYXldXCJ9O2Z1bmN0aW9uIGlzRnVuY3Rpb24ob2JqZWN0KXtyZXR1cm4gdHlwZW9mIG9iamVjdD09PVwiZnVuY3Rpb25cIn1mdW5jdGlvbiB0eXBlU3RyKG9iail7cmV0dXJuIGlzQXJyYXkob2JqKT9cImFycmF5XCI6dHlwZW9mIG9ian1mdW5jdGlvbiBlc2NhcGVSZWdFeHAoc3RyaW5nKXtyZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1tcXC1cXFtcXF17fSgpKis/LixcXFxcXFxeJHwjXFxzXS9nLFwiXFxcXCQmXCIpfWZ1bmN0aW9uIGhhc1Byb3BlcnR5KG9iaixwcm9wTmFtZSl7cmV0dXJuIG9iaiE9bnVsbCYmdHlwZW9mIG9iaj09PVwib2JqZWN0XCImJnByb3BOYW1lIGluIG9ian1mdW5jdGlvbiBwcmltaXRpdmVIYXNPd25Qcm9wZXJ0eShwcmltaXRpdmUscHJvcE5hbWUpe3JldHVybiBwcmltaXRpdmUhPW51bGwmJnR5cGVvZiBwcmltaXRpdmUhPT1cIm9iamVjdFwiJiZwcmltaXRpdmUuaGFzT3duUHJvcGVydHkmJnByaW1pdGl2ZS5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSl9dmFyIHJlZ0V4cFRlc3Q9UmVnRXhwLnByb3RvdHlwZS50ZXN0O2Z1bmN0aW9uIHRlc3RSZWdFeHAocmUsc3RyaW5nKXtyZXR1cm4gcmVnRXhwVGVzdC5jYWxsKHJlLHN0cmluZyl9dmFyIG5vblNwYWNlUmU9L1xcUy87ZnVuY3Rpb24gaXNXaGl0ZXNwYWNlKHN0cmluZyl7cmV0dXJuIXRlc3RSZWdFeHAobm9uU3BhY2VSZSxzdHJpbmcpfXZhciBlbnRpdHlNYXA9e1wiJlwiOlwiJmFtcDtcIixcIjxcIjpcIiZsdDtcIixcIj5cIjpcIiZndDtcIiwnXCInOlwiJnF1b3Q7XCIsXCInXCI6XCImIzM5O1wiLFwiL1wiOlwiJiN4MkY7XCIsXCJgXCI6XCImI3g2MDtcIixcIj1cIjpcIiYjeDNEO1wifTtmdW5jdGlvbiBlc2NhcGVIdG1sKHN0cmluZyl7cmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UoL1smPD5cIidgPVxcL10vZyxmdW5jdGlvbiBmcm9tRW50aXR5TWFwKHMpe3JldHVybiBlbnRpdHlNYXBbc119KX12YXIgd2hpdGVSZT0vXFxzKi87dmFyIHNwYWNlUmU9L1xccysvO3ZhciBlcXVhbHNSZT0vXFxzKj0vO3ZhciBjdXJseVJlPS9cXHMqXFx9Lzt2YXIgdGFnUmU9LyN8XFxefFxcL3w+fFxce3wmfD18IS87ZnVuY3Rpb24gcGFyc2VUZW1wbGF0ZSh0ZW1wbGF0ZSx0YWdzKXtpZighdGVtcGxhdGUpcmV0dXJuW107dmFyIGxpbmVIYXNOb25TcGFjZT1mYWxzZTt2YXIgc2VjdGlvbnM9W107dmFyIHRva2Vucz1bXTt2YXIgc3BhY2VzPVtdO3ZhciBoYXNUYWc9ZmFsc2U7dmFyIG5vblNwYWNlPWZhbHNlO3ZhciBpbmRlbnRhdGlvbj1cIlwiO3ZhciB0YWdJbmRleD0wO2Z1bmN0aW9uIHN0cmlwU3BhY2UoKXtpZihoYXNUYWcmJiFub25TcGFjZSl7d2hpbGUoc3BhY2VzLmxlbmd0aClkZWxldGUgdG9rZW5zW3NwYWNlcy5wb3AoKV19ZWxzZXtzcGFjZXM9W119aGFzVGFnPWZhbHNlO25vblNwYWNlPWZhbHNlfXZhciBvcGVuaW5nVGFnUmUsY2xvc2luZ1RhZ1JlLGNsb3NpbmdDdXJseVJlO2Z1bmN0aW9uIGNvbXBpbGVUYWdzKHRhZ3NUb0NvbXBpbGUpe2lmKHR5cGVvZiB0YWdzVG9Db21waWxlPT09XCJzdHJpbmdcIil0YWdzVG9Db21waWxlPXRhZ3NUb0NvbXBpbGUuc3BsaXQoc3BhY2VSZSwyKTtpZighaXNBcnJheSh0YWdzVG9Db21waWxlKXx8dGFnc1RvQ29tcGlsZS5sZW5ndGghPT0yKXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdGFnczogXCIrdGFnc1RvQ29tcGlsZSk7b3BlbmluZ1RhZ1JlPW5ldyBSZWdFeHAoZXNjYXBlUmVnRXhwKHRhZ3NUb0NvbXBpbGVbMF0pK1wiXFxcXHMqXCIpO2Nsb3NpbmdUYWdSZT1uZXcgUmVnRXhwKFwiXFxcXHMqXCIrZXNjYXBlUmVnRXhwKHRhZ3NUb0NvbXBpbGVbMV0pKTtjbG9zaW5nQ3VybHlSZT1uZXcgUmVnRXhwKFwiXFxcXHMqXCIrZXNjYXBlUmVnRXhwKFwifVwiK3RhZ3NUb0NvbXBpbGVbMV0pKX1jb21waWxlVGFncyh0YWdzfHxtdXN0YWNoZS50YWdzKTt2YXIgc2Nhbm5lcj1uZXcgU2Nhbm5lcih0ZW1wbGF0ZSk7dmFyIHN0YXJ0LHR5cGUsdmFsdWUsY2hyLHRva2VuLG9wZW5TZWN0aW9uO3doaWxlKCFzY2FubmVyLmVvcygpKXtzdGFydD1zY2FubmVyLnBvczt2YWx1ZT1zY2FubmVyLnNjYW5VbnRpbChvcGVuaW5nVGFnUmUpO2lmKHZhbHVlKXtmb3IodmFyIGk9MCx2YWx1ZUxlbmd0aD12YWx1ZS5sZW5ndGg7aTx2YWx1ZUxlbmd0aDsrK2kpe2Nocj12YWx1ZS5jaGFyQXQoaSk7aWYoaXNXaGl0ZXNwYWNlKGNocikpe3NwYWNlcy5wdXNoKHRva2Vucy5sZW5ndGgpO2luZGVudGF0aW9uKz1jaHJ9ZWxzZXtub25TcGFjZT10cnVlO2xpbmVIYXNOb25TcGFjZT10cnVlO2luZGVudGF0aW9uKz1cIiBcIn10b2tlbnMucHVzaChbXCJ0ZXh0XCIsY2hyLHN0YXJ0LHN0YXJ0KzFdKTtzdGFydCs9MTtpZihjaHI9PT1cIlxcblwiKXtzdHJpcFNwYWNlKCk7aW5kZW50YXRpb249XCJcIjt0YWdJbmRleD0wO2xpbmVIYXNOb25TcGFjZT1mYWxzZX19fWlmKCFzY2FubmVyLnNjYW4ob3BlbmluZ1RhZ1JlKSlicmVhaztoYXNUYWc9dHJ1ZTt0eXBlPXNjYW5uZXIuc2Nhbih0YWdSZSl8fFwibmFtZVwiO3NjYW5uZXIuc2Nhbih3aGl0ZVJlKTtpZih0eXBlPT09XCI9XCIpe3ZhbHVlPXNjYW5uZXIuc2NhblVudGlsKGVxdWFsc1JlKTtzY2FubmVyLnNjYW4oZXF1YWxzUmUpO3NjYW5uZXIuc2NhblVudGlsKGNsb3NpbmdUYWdSZSl9ZWxzZSBpZih0eXBlPT09XCJ7XCIpe3ZhbHVlPXNjYW5uZXIuc2NhblVudGlsKGNsb3NpbmdDdXJseVJlKTtzY2FubmVyLnNjYW4oY3VybHlSZSk7c2Nhbm5lci5zY2FuVW50aWwoY2xvc2luZ1RhZ1JlKTt0eXBlPVwiJlwifWVsc2V7dmFsdWU9c2Nhbm5lci5zY2FuVW50aWwoY2xvc2luZ1RhZ1JlKX1pZighc2Nhbm5lci5zY2FuKGNsb3NpbmdUYWdSZSkpdGhyb3cgbmV3IEVycm9yKFwiVW5jbG9zZWQgdGFnIGF0IFwiK3NjYW5uZXIucG9zKTtpZih0eXBlPT1cIj5cIil7dG9rZW49W3R5cGUsdmFsdWUsc3RhcnQsc2Nhbm5lci5wb3MsaW5kZW50YXRpb24sdGFnSW5kZXgsbGluZUhhc05vblNwYWNlXX1lbHNle3Rva2VuPVt0eXBlLHZhbHVlLHN0YXJ0LHNjYW5uZXIucG9zXX10YWdJbmRleCsrO3Rva2Vucy5wdXNoKHRva2VuKTtpZih0eXBlPT09XCIjXCJ8fHR5cGU9PT1cIl5cIil7c2VjdGlvbnMucHVzaCh0b2tlbil9ZWxzZSBpZih0eXBlPT09XCIvXCIpe29wZW5TZWN0aW9uPXNlY3Rpb25zLnBvcCgpO2lmKCFvcGVuU2VjdGlvbil0aHJvdyBuZXcgRXJyb3IoJ1Vub3BlbmVkIHNlY3Rpb24gXCInK3ZhbHVlKydcIiBhdCAnK3N0YXJ0KTtpZihvcGVuU2VjdGlvblsxXSE9PXZhbHVlKXRocm93IG5ldyBFcnJvcignVW5jbG9zZWQgc2VjdGlvbiBcIicrb3BlblNlY3Rpb25bMV0rJ1wiIGF0ICcrc3RhcnQpfWVsc2UgaWYodHlwZT09PVwibmFtZVwifHx0eXBlPT09XCJ7XCJ8fHR5cGU9PT1cIiZcIil7bm9uU3BhY2U9dHJ1ZX1lbHNlIGlmKHR5cGU9PT1cIj1cIil7Y29tcGlsZVRhZ3ModmFsdWUpfX1zdHJpcFNwYWNlKCk7b3BlblNlY3Rpb249c2VjdGlvbnMucG9wKCk7aWYob3BlblNlY3Rpb24pdGhyb3cgbmV3IEVycm9yKCdVbmNsb3NlZCBzZWN0aW9uIFwiJytvcGVuU2VjdGlvblsxXSsnXCIgYXQgJytzY2FubmVyLnBvcyk7cmV0dXJuIG5lc3RUb2tlbnMoc3F1YXNoVG9rZW5zKHRva2VucykpfWZ1bmN0aW9uIHNxdWFzaFRva2Vucyh0b2tlbnMpe3ZhciBzcXVhc2hlZFRva2Vucz1bXTt2YXIgdG9rZW4sbGFzdFRva2VuO2Zvcih2YXIgaT0wLG51bVRva2Vucz10b2tlbnMubGVuZ3RoO2k8bnVtVG9rZW5zOysraSl7dG9rZW49dG9rZW5zW2ldO2lmKHRva2VuKXtpZih0b2tlblswXT09PVwidGV4dFwiJiZsYXN0VG9rZW4mJmxhc3RUb2tlblswXT09PVwidGV4dFwiKXtsYXN0VG9rZW5bMV0rPXRva2VuWzFdO2xhc3RUb2tlblszXT10b2tlblszXX1lbHNle3NxdWFzaGVkVG9rZW5zLnB1c2godG9rZW4pO2xhc3RUb2tlbj10b2tlbn19fXJldHVybiBzcXVhc2hlZFRva2Vuc31mdW5jdGlvbiBuZXN0VG9rZW5zKHRva2Vucyl7dmFyIG5lc3RlZFRva2Vucz1bXTt2YXIgY29sbGVjdG9yPW5lc3RlZFRva2Vuczt2YXIgc2VjdGlvbnM9W107dmFyIHRva2VuLHNlY3Rpb247Zm9yKHZhciBpPTAsbnVtVG9rZW5zPXRva2Vucy5sZW5ndGg7aTxudW1Ub2tlbnM7KytpKXt0b2tlbj10b2tlbnNbaV07c3dpdGNoKHRva2VuWzBdKXtjYXNlXCIjXCI6Y2FzZVwiXlwiOmNvbGxlY3Rvci5wdXNoKHRva2VuKTtzZWN0aW9ucy5wdXNoKHRva2VuKTtjb2xsZWN0b3I9dG9rZW5bNF09W107YnJlYWs7Y2FzZVwiL1wiOnNlY3Rpb249c2VjdGlvbnMucG9wKCk7c2VjdGlvbls1XT10b2tlblsyXTtjb2xsZWN0b3I9c2VjdGlvbnMubGVuZ3RoPjA/c2VjdGlvbnNbc2VjdGlvbnMubGVuZ3RoLTFdWzRdOm5lc3RlZFRva2VuczticmVhaztkZWZhdWx0OmNvbGxlY3Rvci5wdXNoKHRva2VuKX19cmV0dXJuIG5lc3RlZFRva2Vuc31mdW5jdGlvbiBTY2FubmVyKHN0cmluZyl7dGhpcy5zdHJpbmc9c3RyaW5nO3RoaXMudGFpbD1zdHJpbmc7dGhpcy5wb3M9MH1TY2FubmVyLnByb3RvdHlwZS5lb3M9ZnVuY3Rpb24gZW9zKCl7cmV0dXJuIHRoaXMudGFpbD09PVwiXCJ9O1NjYW5uZXIucHJvdG90eXBlLnNjYW49ZnVuY3Rpb24gc2NhbihyZSl7dmFyIG1hdGNoPXRoaXMudGFpbC5tYXRjaChyZSk7aWYoIW1hdGNofHxtYXRjaC5pbmRleCE9PTApcmV0dXJuXCJcIjt2YXIgc3RyaW5nPW1hdGNoWzBdO3RoaXMudGFpbD10aGlzLnRhaWwuc3Vic3RyaW5nKHN0cmluZy5sZW5ndGgpO3RoaXMucG9zKz1zdHJpbmcubGVuZ3RoO3JldHVybiBzdHJpbmd9O1NjYW5uZXIucHJvdG90eXBlLnNjYW5VbnRpbD1mdW5jdGlvbiBzY2FuVW50aWwocmUpe3ZhciBpbmRleD10aGlzLnRhaWwuc2VhcmNoKHJlKSxtYXRjaDtzd2l0Y2goaW5kZXgpe2Nhc2UtMTptYXRjaD10aGlzLnRhaWw7dGhpcy50YWlsPVwiXCI7YnJlYWs7Y2FzZSAwOm1hdGNoPVwiXCI7YnJlYWs7ZGVmYXVsdDptYXRjaD10aGlzLnRhaWwuc3Vic3RyaW5nKDAsaW5kZXgpO3RoaXMudGFpbD10aGlzLnRhaWwuc3Vic3RyaW5nKGluZGV4KX10aGlzLnBvcys9bWF0Y2gubGVuZ3RoO3JldHVybiBtYXRjaH07ZnVuY3Rpb24gQ29udGV4dCh2aWV3LHBhcmVudENvbnRleHQpe3RoaXMudmlldz12aWV3O3RoaXMuY2FjaGU9e1wiLlwiOnRoaXMudmlld307dGhpcy5wYXJlbnQ9cGFyZW50Q29udGV4dH1Db250ZXh0LnByb3RvdHlwZS5wdXNoPWZ1bmN0aW9uIHB1c2godmlldyl7cmV0dXJuIG5ldyBDb250ZXh0KHZpZXcsdGhpcyl9O0NvbnRleHQucHJvdG90eXBlLmxvb2t1cD1mdW5jdGlvbiBsb29rdXAobmFtZSl7dmFyIGNhY2hlPXRoaXMuY2FjaGU7dmFyIHZhbHVlO2lmKGNhY2hlLmhhc093blByb3BlcnR5KG5hbWUpKXt2YWx1ZT1jYWNoZVtuYW1lXX1lbHNle3ZhciBjb250ZXh0PXRoaXMsaW50ZXJtZWRpYXRlVmFsdWUsbmFtZXMsaW5kZXgsbG9va3VwSGl0PWZhbHNlO3doaWxlKGNvbnRleHQpe2lmKG5hbWUuaW5kZXhPZihcIi5cIik+MCl7aW50ZXJtZWRpYXRlVmFsdWU9Y29udGV4dC52aWV3O25hbWVzPW5hbWUuc3BsaXQoXCIuXCIpO2luZGV4PTA7d2hpbGUoaW50ZXJtZWRpYXRlVmFsdWUhPW51bGwmJmluZGV4PG5hbWVzLmxlbmd0aCl7aWYoaW5kZXg9PT1uYW1lcy5sZW5ndGgtMSlsb29rdXBIaXQ9aGFzUHJvcGVydHkoaW50ZXJtZWRpYXRlVmFsdWUsbmFtZXNbaW5kZXhdKXx8cHJpbWl0aXZlSGFzT3duUHJvcGVydHkoaW50ZXJtZWRpYXRlVmFsdWUsbmFtZXNbaW5kZXhdKTtpbnRlcm1lZGlhdGVWYWx1ZT1pbnRlcm1lZGlhdGVWYWx1ZVtuYW1lc1tpbmRleCsrXV19fWVsc2V7aW50ZXJtZWRpYXRlVmFsdWU9Y29udGV4dC52aWV3W25hbWVdO2xvb2t1cEhpdD1oYXNQcm9wZXJ0eShjb250ZXh0LnZpZXcsbmFtZSl9aWYobG9va3VwSGl0KXt2YWx1ZT1pbnRlcm1lZGlhdGVWYWx1ZTticmVha31jb250ZXh0PWNvbnRleHQucGFyZW50fWNhY2hlW25hbWVdPXZhbHVlfWlmKGlzRnVuY3Rpb24odmFsdWUpKXZhbHVlPXZhbHVlLmNhbGwodGhpcy52aWV3KTtyZXR1cm4gdmFsdWV9O2Z1bmN0aW9uIFdyaXRlcigpe3RoaXMuY2FjaGU9e319V3JpdGVyLnByb3RvdHlwZS5jbGVhckNhY2hlPWZ1bmN0aW9uIGNsZWFyQ2FjaGUoKXt0aGlzLmNhY2hlPXt9fTtXcml0ZXIucHJvdG90eXBlLnBhcnNlPWZ1bmN0aW9uIHBhcnNlKHRlbXBsYXRlLHRhZ3Mpe3ZhciBjYWNoZT10aGlzLmNhY2hlO3ZhciBjYWNoZUtleT10ZW1wbGF0ZStcIjpcIisodGFnc3x8bXVzdGFjaGUudGFncykuam9pbihcIjpcIik7dmFyIHRva2Vucz1jYWNoZVtjYWNoZUtleV07aWYodG9rZW5zPT1udWxsKXRva2Vucz1jYWNoZVtjYWNoZUtleV09cGFyc2VUZW1wbGF0ZSh0ZW1wbGF0ZSx0YWdzKTtyZXR1cm4gdG9rZW5zfTtXcml0ZXIucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbiByZW5kZXIodGVtcGxhdGUsdmlldyxwYXJ0aWFscyx0YWdzKXt2YXIgdG9rZW5zPXRoaXMucGFyc2UodGVtcGxhdGUsdGFncyk7dmFyIGNvbnRleHQ9dmlldyBpbnN0YW5jZW9mIENvbnRleHQ/dmlldzpuZXcgQ29udGV4dCh2aWV3KTtyZXR1cm4gdGhpcy5yZW5kZXJUb2tlbnModG9rZW5zLGNvbnRleHQscGFydGlhbHMsdGVtcGxhdGUsdGFncyl9O1dyaXRlci5wcm90b3R5cGUucmVuZGVyVG9rZW5zPWZ1bmN0aW9uIHJlbmRlclRva2Vucyh0b2tlbnMsY29udGV4dCxwYXJ0aWFscyxvcmlnaW5hbFRlbXBsYXRlLHRhZ3Mpe3ZhciBidWZmZXI9XCJcIjt2YXIgdG9rZW4sc3ltYm9sLHZhbHVlO2Zvcih2YXIgaT0wLG51bVRva2Vucz10b2tlbnMubGVuZ3RoO2k8bnVtVG9rZW5zOysraSl7dmFsdWU9dW5kZWZpbmVkO3Rva2VuPXRva2Vuc1tpXTtzeW1ib2w9dG9rZW5bMF07aWYoc3ltYm9sPT09XCIjXCIpdmFsdWU9dGhpcy5yZW5kZXJTZWN0aW9uKHRva2VuLGNvbnRleHQscGFydGlhbHMsb3JpZ2luYWxUZW1wbGF0ZSk7ZWxzZSBpZihzeW1ib2w9PT1cIl5cIil2YWx1ZT10aGlzLnJlbmRlckludmVydGVkKHRva2VuLGNvbnRleHQscGFydGlhbHMsb3JpZ2luYWxUZW1wbGF0ZSk7ZWxzZSBpZihzeW1ib2w9PT1cIj5cIil2YWx1ZT10aGlzLnJlbmRlclBhcnRpYWwodG9rZW4sY29udGV4dCxwYXJ0aWFscyx0YWdzKTtlbHNlIGlmKHN5bWJvbD09PVwiJlwiKXZhbHVlPXRoaXMudW5lc2NhcGVkVmFsdWUodG9rZW4sY29udGV4dCk7ZWxzZSBpZihzeW1ib2w9PT1cIm5hbWVcIil2YWx1ZT10aGlzLmVzY2FwZWRWYWx1ZSh0b2tlbixjb250ZXh0KTtlbHNlIGlmKHN5bWJvbD09PVwidGV4dFwiKXZhbHVlPXRoaXMucmF3VmFsdWUodG9rZW4pO2lmKHZhbHVlIT09dW5kZWZpbmVkKWJ1ZmZlcis9dmFsdWV9cmV0dXJuIGJ1ZmZlcn07V3JpdGVyLnByb3RvdHlwZS5yZW5kZXJTZWN0aW9uPWZ1bmN0aW9uIHJlbmRlclNlY3Rpb24odG9rZW4sY29udGV4dCxwYXJ0aWFscyxvcmlnaW5hbFRlbXBsYXRlKXt2YXIgc2VsZj10aGlzO3ZhciBidWZmZXI9XCJcIjt2YXIgdmFsdWU9Y29udGV4dC5sb29rdXAodG9rZW5bMV0pO2Z1bmN0aW9uIHN1YlJlbmRlcih0ZW1wbGF0ZSl7cmV0dXJuIHNlbGYucmVuZGVyKHRlbXBsYXRlLGNvbnRleHQscGFydGlhbHMpfWlmKCF2YWx1ZSlyZXR1cm47aWYoaXNBcnJheSh2YWx1ZSkpe2Zvcih2YXIgaj0wLHZhbHVlTGVuZ3RoPXZhbHVlLmxlbmd0aDtqPHZhbHVlTGVuZ3RoOysrail7YnVmZmVyKz10aGlzLnJlbmRlclRva2Vucyh0b2tlbls0XSxjb250ZXh0LnB1c2godmFsdWVbal0pLHBhcnRpYWxzLG9yaWdpbmFsVGVtcGxhdGUpfX1lbHNlIGlmKHR5cGVvZiB2YWx1ZT09PVwib2JqZWN0XCJ8fHR5cGVvZiB2YWx1ZT09PVwic3RyaW5nXCJ8fHR5cGVvZiB2YWx1ZT09PVwibnVtYmVyXCIpe2J1ZmZlcis9dGhpcy5yZW5kZXJUb2tlbnModG9rZW5bNF0sY29udGV4dC5wdXNoKHZhbHVlKSxwYXJ0aWFscyxvcmlnaW5hbFRlbXBsYXRlKX1lbHNlIGlmKGlzRnVuY3Rpb24odmFsdWUpKXtpZih0eXBlb2Ygb3JpZ2luYWxUZW1wbGF0ZSE9PVwic3RyaW5nXCIpdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHVzZSBoaWdoZXItb3JkZXIgc2VjdGlvbnMgd2l0aG91dCB0aGUgb3JpZ2luYWwgdGVtcGxhdGVcIik7dmFsdWU9dmFsdWUuY2FsbChjb250ZXh0LnZpZXcsb3JpZ2luYWxUZW1wbGF0ZS5zbGljZSh0b2tlblszXSx0b2tlbls1XSksc3ViUmVuZGVyKTtpZih2YWx1ZSE9bnVsbClidWZmZXIrPXZhbHVlfWVsc2V7YnVmZmVyKz10aGlzLnJlbmRlclRva2Vucyh0b2tlbls0XSxjb250ZXh0LHBhcnRpYWxzLG9yaWdpbmFsVGVtcGxhdGUpfXJldHVybiBidWZmZXJ9O1dyaXRlci5wcm90b3R5cGUucmVuZGVySW52ZXJ0ZWQ9ZnVuY3Rpb24gcmVuZGVySW52ZXJ0ZWQodG9rZW4sY29udGV4dCxwYXJ0aWFscyxvcmlnaW5hbFRlbXBsYXRlKXt2YXIgdmFsdWU9Y29udGV4dC5sb29rdXAodG9rZW5bMV0pO2lmKCF2YWx1ZXx8aXNBcnJheSh2YWx1ZSkmJnZhbHVlLmxlbmd0aD09PTApcmV0dXJuIHRoaXMucmVuZGVyVG9rZW5zKHRva2VuWzRdLGNvbnRleHQscGFydGlhbHMsb3JpZ2luYWxUZW1wbGF0ZSl9O1dyaXRlci5wcm90b3R5cGUuaW5kZW50UGFydGlhbD1mdW5jdGlvbiBpbmRlbnRQYXJ0aWFsKHBhcnRpYWwsaW5kZW50YXRpb24sbGluZUhhc05vblNwYWNlKXt2YXIgZmlsdGVyZWRJbmRlbnRhdGlvbj1pbmRlbnRhdGlvbi5yZXBsYWNlKC9bXiBcXHRdL2csXCJcIik7dmFyIHBhcnRpYWxCeU5sPXBhcnRpYWwuc3BsaXQoXCJcXG5cIik7Zm9yKHZhciBpPTA7aTxwYXJ0aWFsQnlObC5sZW5ndGg7aSsrKXtpZihwYXJ0aWFsQnlObFtpXS5sZW5ndGgmJihpPjB8fCFsaW5lSGFzTm9uU3BhY2UpKXtwYXJ0aWFsQnlObFtpXT1maWx0ZXJlZEluZGVudGF0aW9uK3BhcnRpYWxCeU5sW2ldfX1yZXR1cm4gcGFydGlhbEJ5Tmwuam9pbihcIlxcblwiKX07V3JpdGVyLnByb3RvdHlwZS5yZW5kZXJQYXJ0aWFsPWZ1bmN0aW9uIHJlbmRlclBhcnRpYWwodG9rZW4sY29udGV4dCxwYXJ0aWFscyx0YWdzKXtpZighcGFydGlhbHMpcmV0dXJuO3ZhciB2YWx1ZT1pc0Z1bmN0aW9uKHBhcnRpYWxzKT9wYXJ0aWFscyh0b2tlblsxXSk6cGFydGlhbHNbdG9rZW5bMV1dO2lmKHZhbHVlIT1udWxsKXt2YXIgbGluZUhhc05vblNwYWNlPXRva2VuWzZdO3ZhciB0YWdJbmRleD10b2tlbls1XTt2YXIgaW5kZW50YXRpb249dG9rZW5bNF07dmFyIGluZGVudGVkVmFsdWU9dmFsdWU7aWYodGFnSW5kZXg9PTAmJmluZGVudGF0aW9uKXtpbmRlbnRlZFZhbHVlPXRoaXMuaW5kZW50UGFydGlhbCh2YWx1ZSxpbmRlbnRhdGlvbixsaW5lSGFzTm9uU3BhY2UpfXJldHVybiB0aGlzLnJlbmRlclRva2Vucyh0aGlzLnBhcnNlKGluZGVudGVkVmFsdWUsdGFncyksY29udGV4dCxwYXJ0aWFscyxpbmRlbnRlZFZhbHVlKX19O1dyaXRlci5wcm90b3R5cGUudW5lc2NhcGVkVmFsdWU9ZnVuY3Rpb24gdW5lc2NhcGVkVmFsdWUodG9rZW4sY29udGV4dCl7dmFyIHZhbHVlPWNvbnRleHQubG9va3VwKHRva2VuWzFdKTtpZih2YWx1ZSE9bnVsbClyZXR1cm4gdmFsdWV9O1dyaXRlci5wcm90b3R5cGUuZXNjYXBlZFZhbHVlPWZ1bmN0aW9uIGVzY2FwZWRWYWx1ZSh0b2tlbixjb250ZXh0KXt2YXIgdmFsdWU9Y29udGV4dC5sb29rdXAodG9rZW5bMV0pO2lmKHZhbHVlIT1udWxsKXJldHVybiBtdXN0YWNoZS5lc2NhcGUodmFsdWUpfTtXcml0ZXIucHJvdG90eXBlLnJhd1ZhbHVlPWZ1bmN0aW9uIHJhd1ZhbHVlKHRva2VuKXtyZXR1cm4gdG9rZW5bMV19O211c3RhY2hlLm5hbWU9XCJtdXN0YWNoZS5qc1wiO211c3RhY2hlLnZlcnNpb249XCIzLjEuMFwiO211c3RhY2hlLnRhZ3M9W1wie3tcIixcIn19XCJdO3ZhciBkZWZhdWx0V3JpdGVyPW5ldyBXcml0ZXI7bXVzdGFjaGUuY2xlYXJDYWNoZT1mdW5jdGlvbiBjbGVhckNhY2hlKCl7cmV0dXJuIGRlZmF1bHRXcml0ZXIuY2xlYXJDYWNoZSgpfTttdXN0YWNoZS5wYXJzZT1mdW5jdGlvbiBwYXJzZSh0ZW1wbGF0ZSx0YWdzKXtyZXR1cm4gZGVmYXVsdFdyaXRlci5wYXJzZSh0ZW1wbGF0ZSx0YWdzKX07bXVzdGFjaGUucmVuZGVyPWZ1bmN0aW9uIHJlbmRlcih0ZW1wbGF0ZSx2aWV3LHBhcnRpYWxzLHRhZ3Mpe2lmKHR5cGVvZiB0ZW1wbGF0ZSE9PVwic3RyaW5nXCIpe3Rocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgdGVtcGxhdGUhIFRlbXBsYXRlIHNob3VsZCBiZSBhIFwic3RyaW5nXCIgJysnYnV0IFwiJyt0eXBlU3RyKHRlbXBsYXRlKSsnXCIgd2FzIGdpdmVuIGFzIHRoZSBmaXJzdCAnK1wiYXJndW1lbnQgZm9yIG11c3RhY2hlI3JlbmRlcih0ZW1wbGF0ZSwgdmlldywgcGFydGlhbHMpXCIpfXJldHVybiBkZWZhdWx0V3JpdGVyLnJlbmRlcih0ZW1wbGF0ZSx2aWV3LHBhcnRpYWxzLHRhZ3MpfTttdXN0YWNoZS50b19odG1sPWZ1bmN0aW9uIHRvX2h0bWwodGVtcGxhdGUsdmlldyxwYXJ0aWFscyxzZW5kKXt2YXIgcmVzdWx0PW11c3RhY2hlLnJlbmRlcih0ZW1wbGF0ZSx2aWV3LHBhcnRpYWxzKTtpZihpc0Z1bmN0aW9uKHNlbmQpKXtzZW5kKHJlc3VsdCl9ZWxzZXtyZXR1cm4gcmVzdWx0fX07bXVzdGFjaGUuZXNjYXBlPWVzY2FwZUh0bWw7bXVzdGFjaGUuU2Nhbm5lcj1TY2FubmVyO211c3RhY2hlLkNvbnRleHQ9Q29udGV4dDttdXN0YWNoZS5Xcml0ZXI9V3JpdGVyO3JldHVybiBtdXN0YWNoZX0pOyIsIi8qXG4gMEJTRFxuKi9cbihmdW5jdGlvbihGLHkpe1wiZnVuY3Rpb25cIj09PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKHkpOlwib2JqZWN0XCI9PT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz15KCk6Ri5waWNrbWV1cD15KCl9KSh0aGlzLGZ1bmN0aW9uKCl7ZnVuY3Rpb24gRihhLGMsYil7Yj1ifHxbXTtpZihhIGluc3RhbmNlb2YgRWxlbWVudCljLmFwcGx5KGMsW2FdLmNvbmNhdChiKSk7ZWxzZXt2YXIgZDt2YXIgZT1hLmxlbmd0aDtmb3IoZD0wO2Q8ZTsrK2QpYy5hcHBseShjLFthW2RdXS5jb25jYXQoYikpfX1mdW5jdGlvbiB5KGEpe0YoYSxmdW5jdGlvbihhKXthLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoYSl9KX1mdW5jdGlvbiBKKGEsYyl7ZG8gYT1hLnBhcmVudEVsZW1lbnQ7d2hpbGUoYSYmIUIoYSxjKSk7cmV0dXJuIGF9ZnVuY3Rpb24gQihhLGMpe3JldHVybihhLm1hdGNoZXN8fGEud2Via2l0TWF0Y2hlc1NlbGVjdG9yfHxhLm1zTWF0Y2hlc1NlbGVjdG9yKS5jYWxsKGEsXG5jKX1mdW5jdGlvbiBrKGEsYyl7cmV0dXJuIGEmJmEuY2xhc3NMaXN0LmNvbnRhaW5zKGMpfWZ1bmN0aW9uIGwoYSxjKXthLmNsYXNzTGlzdC5hZGQoYyl9ZnVuY3Rpb24gcShhLGMsYixkKXtpZigtMSE9PWIuaW5kZXhPZihcIiBcIikpe2I9Yi5zcGxpdChcIiBcIik7dmFyIGU9Yi5sZW5ndGgsaDtmb3IoaD0wO2g8ZTsrK2gpcShhLGMsYltoXSxkKX1lbHNlIGEuX19waWNrbWV1cC5ldmVudHMucHVzaChbYyxiLGRdKSxjLmFkZEV2ZW50TGlzdGVuZXIoYixkKX1mdW5jdGlvbiB6KGEsYyxiLGQpe3ZhciBlO2lmKGImJi0xIT09Yi5pbmRleE9mKFwiIFwiKSl7dmFyIGg9Yi5zcGxpdChcIiBcIik7dmFyIGw9aC5sZW5ndGg7Zm9yKGU9MDtlPGw7KytlKXooYSxjLGhbZV0sZCl9ZWxzZSBmb3IoaD1hLl9fcGlja21ldXAuZXZlbnRzLGw9aC5sZW5ndGgsZT0wO2U8bDsrK2UpYyYmYyE9PWhbZV1bMF18fGImJmIhPT1oW2VdWzFdfHxkJiZkIT09aFtlXVsyXXx8aFtlXVswXS5yZW1vdmVFdmVudExpc3RlbmVyKGhbZV1bMV0sXG5oW2VdWzJdKX1mdW5jdGlvbiBNKGEpe2E9YS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtyZXR1cm57dG9wOmEudG9wK3dpbmRvdy5wYWdlWU9mZnNldC1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50VG9wLGxlZnQ6YS5sZWZ0K3dpbmRvdy5wYWdlWE9mZnNldC1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50TGVmdH19ZnVuY3Rpb24gQyhhLGMsYil7dmFyIGQ9ZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJFdmVudFwiKTtiJiYoZC5kZXRhaWw9Yik7ZC5pbml0RXZlbnQoXCJwaWNrbWV1cC1cIitjLCExLCEwKTtyZXR1cm4gYS5kaXNwYXRjaEV2ZW50KGQpfWZ1bmN0aW9uIEsoYSl7YT1uZXcgRGF0ZShhKTtmb3IodmFyIGM9MjgsYj1hLmdldE1vbnRoKCk7YS5nZXRNb250aCgpPT09YjspKytjLGEuc2V0RGF0ZShjKTtyZXR1cm4gYy0xfWZ1bmN0aW9uIEEoYSxjKXthLnNldERhdGUoYS5nZXREYXRlKCkrYyl9ZnVuY3Rpb24gcChhLGMpe3ZhciBiPWEuZ2V0RGF0ZSgpO2Euc2V0RGF0ZSgxKTtcbmEuc2V0TW9udGgoYS5nZXRNb250aCgpK2MpO2Euc2V0RGF0ZShNYXRoLm1pbihiLEsoYSkpKX1mdW5jdGlvbiB1KGEsYyl7dmFyIGI9YS5nZXREYXRlKCk7YS5zZXREYXRlKDEpO2Euc2V0RnVsbFllYXIoYS5nZXRGdWxsWWVhcigpK2MpO2Euc2V0RGF0ZShNYXRoLm1pbihiLEsoYSkpKX1mdW5jdGlvbiBOKGEpe3ZhciBjPWEuX19waWNrbWV1cC5lbGVtZW50LGI9YS5fX3BpY2ttZXVwLm9wdGlvbnMsZD1NYXRoLmZsb29yKGIuY2FsZW5kYXJzLzIpLGU9Yi5kYXRlLGg9Yi5jdXJyZW50LG09Yi5taW4/bmV3IERhdGUoYi5taW4pOm51bGwsdj1iLm1heD9uZXcgRGF0ZShiLm1heCk6bnVsbDttJiYobS5zZXREYXRlKDEpLHAobSwxKSxBKG0sLTEpKTt2JiYodi5zZXREYXRlKDEpLHAodiwxKSxBKHYsLTEpKTt5KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGMucXVlcnlTZWxlY3RvckFsbChcIi5wbXUtaW5zdGFuY2UgPiA6bm90KG5hdilcIikpKTtmb3IodmFyIHc9MDt3PGIuY2FsZW5kYXJzO3crKyl7dmFyIGY9XG5uZXcgRGF0ZShoKTt4KGYpO3ZhciBuPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGMucXVlcnlTZWxlY3RvckFsbChcIi5wbXUtaW5zdGFuY2VcIikpW3ddO2lmKGsoYyxcInBtdS12aWV3LXllYXJzXCIpKXt1KGYsMTIqKHctZCkpO3ZhciBHPWYuZ2V0RnVsbFllYXIoKS02K1wiIC0gXCIrKGYuZ2V0RnVsbFllYXIoKSs1KX1lbHNlIGsoYyxcInBtdS12aWV3LW1vbnRoc1wiKT8odShmLHctZCksRz1mLmdldEZ1bGxZZWFyKCkpOmsoYyxcInBtdS12aWV3LWRheXNcIikmJihwKGYsdy1kKSxHPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBiLnRpdGxlX2Zvcm1hdD9iLnRpdGxlX2Zvcm1hdChmLGIubG9jYWxlc1tiLmxvY2FsZV0pOkQoZixiLnRpdGxlX2Zvcm1hdCxiLmxvY2FsZXNbYi5sb2NhbGVdKSk7aWYoIXImJnYpe3ZhciByPW5ldyBEYXRlKGYpO2Iuc2VsZWN0X2RheT9wKHIsYi5jYWxlbmRhcnMtMSk6Yi5zZWxlY3RfbW9udGg/dShyLGIuY2FsZW5kYXJzLTEpOnUociwxMiooYi5jYWxlbmRhcnMtMSkpO1xuaWYocj52KXstLXc7cChoLC0xKTtyPXZvaWQgMDtjb250aW51ZX19cj1uZXcgRGF0ZShmKTtpZighZyl7dmFyIGc9bmV3IERhdGUoZik7Zy5zZXREYXRlKDEpO3AoZywxKTtBKGcsLTEpO2lmKG0mJm0+Zyl7LS13O3AoaCwxKTtnPXZvaWQgMDtjb250aW51ZX19bi5xdWVyeVNlbGVjdG9yKFwiLnBtdS1tb250aFwiKS5pbm5lckhUTUw9Rzt2YXIgcT1mdW5jdGlvbihhKXtyZXR1cm5cInJhbmdlXCI9PT1iLm1vZGUmJmE+PShuZXcgRGF0ZShlWzBdKSkuZ2V0RnVsbFllYXIoKSYmYTw9KG5ldyBEYXRlKGVbMV0pKS5nZXRGdWxsWWVhcigpfHxcIm11bHRpcGxlXCI9PT1iLm1vZGUmJi0xIT09ZS5yZWR1Y2UoZnVuY3Rpb24oYSxiKXthLnB1c2goKG5ldyBEYXRlKGIpKS5nZXRGdWxsWWVhcigpKTtyZXR1cm4gYX0sW10pLmluZGV4T2YoYSl8fChuZXcgRGF0ZShlKSkuZ2V0RnVsbFllYXIoKT09PWF9LHQ9ZnVuY3Rpb24oYSxjKXt2YXIgZD0obmV3IERhdGUoZVswXSkpLmdldEZ1bGxZZWFyKCksZj0obmV3IERhdGUoZVsxXSkpLmdldEZ1bGxZZWFyKCksXG5oPShuZXcgRGF0ZShlWzBdKSkuZ2V0TW9udGgoKSxnPShuZXcgRGF0ZShlWzFdKSkuZ2V0TW9udGgoKTtyZXR1cm5cInJhbmdlXCI9PT1iLm1vZGUmJihhPmQmJmE8Znx8YT5kJiZhPT09ZiYmYzw9Z3x8YT09PWQmJmE8ZiYmYz49aHx8YT09PWQmJmE9PT1mJiZjPj1oJiZjPD1nKXx8XCJtdWx0aXBsZVwiPT09Yi5tb2RlJiYtMSE9PWUucmVkdWNlKGZ1bmN0aW9uKGEsYil7Yj1uZXcgRGF0ZShiKTthLnB1c2goYi5nZXRGdWxsWWVhcigpK1wiLVwiK2IuZ2V0TW9udGgoKSk7cmV0dXJuIGF9LFtdKS5pbmRleE9mKGErXCItXCIrYyl8fChuZXcgRGF0ZShlKSkuZ2V0RnVsbFllYXIoKT09PWEmJihuZXcgRGF0ZShlKSkuZ2V0TW9udGgoKT09PWN9OyhmdW5jdGlvbigpe3ZhciBhPVtdLGM9Zi5nZXRGdWxsWWVhcigpLTYsZD0obmV3IERhdGUoYi5taW4pKS5nZXRGdWxsWWVhcigpLGU9KG5ldyBEYXRlKGIubWF4KSkuZ2V0RnVsbFllYXIoKSxoO2ZvcihoPTA7MTI+aDsrK2gpe3ZhciBnPWMraDt2YXIgbT1cbmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7bS50ZXh0Q29udGVudD1nO20uX19waWNrbWV1cF95ZWFyPWc7Yi5taW4mJmc8ZHx8Yi5tYXgmJmc+ZT9sKG0sXCJwbXUtZGlzYWJsZWRcIik6cShnKSYmbChtLFwicG11LXNlbGVjdGVkXCIpO2EucHVzaChtKX1uLmFwcGVuZENoaWxkKGIuaW5zdGFuY2VfY29udGVudF90ZW1wbGF0ZShhLFwicG11LXllYXJzXCIpKX0pKCk7KGZ1bmN0aW9uKCl7dmFyIGE9W10sYz1mLmdldEZ1bGxZZWFyKCksZD0obmV3IERhdGUoYi5taW4pKS5nZXRGdWxsWWVhcigpLGU9KG5ldyBEYXRlKGIubWluKSkuZ2V0TW9udGgoKSxnPShuZXcgRGF0ZShiLm1heCkpLmdldEZ1bGxZZWFyKCksaD0obmV3IERhdGUoYi5tYXgpKS5nZXRNb250aCgpLG07Zm9yKG09MDsxMj5tOysrbSl7dmFyIGs9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtrLnRleHRDb250ZW50PWIubG9jYWxlc1tiLmxvY2FsZV0ubW9udGhzU2hvcnRbbV07ay5fX3BpY2ttZXVwX21vbnRoPW07XG5rLl9fcGlja21ldXBfeWVhcj1jO2IubWluJiYoYzxkfHxtPGUmJmM9PT1kKXx8Yi5tYXgmJihjPmd8fG0+aCYmYz49Zyk/bChrLFwicG11LWRpc2FibGVkXCIpOnQoYyxtKSYmbChrLFwicG11LXNlbGVjdGVkXCIpO2EucHVzaChrKX1uLmFwcGVuZENoaWxkKGIuaW5zdGFuY2VfY29udGVudF90ZW1wbGF0ZShhLFwicG11LW1vbnRoc1wiKSl9KSgpOyhmdW5jdGlvbigpe3ZhciBhPVtdLGM9Zi5nZXRNb250aCgpLGQ9eChuZXcgRGF0ZSkudmFsdWVPZigpLGU7KGZ1bmN0aW9uKCl7Zi5zZXREYXRlKDEpO3ZhciBhPShmLmdldERheSgpLWIuZmlyc3RfZGF5KSU3O0EoZiwtKGErKDA+YT83OjApKSl9KSgpO2ZvcihlPTA7NDI+ZTsrK2Upe3ZhciBnPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7Zy50ZXh0Q29udGVudD1mLmdldERhdGUoKTtnLl9fcGlja21ldXBfZGF5PWYuZ2V0RGF0ZSgpO2cuX19waWNrbWV1cF9tb250aD1mLmdldE1vbnRoKCk7Zy5fX3BpY2ttZXVwX3llYXI9Zi5nZXRGdWxsWWVhcigpO1xuYyE9PWYuZ2V0TW9udGgoKSYmbChnLFwicG11LW5vdC1pbi1tb250aFwiKTswPT09Zi5nZXREYXkoKT9sKGcsXCJwbXUtc3VuZGF5XCIpOjY9PT1mLmdldERheSgpJiZsKGcsXCJwbXUtc2F0dXJkYXlcIik7dmFyIGg9Yi5yZW5kZXIobmV3IERhdGUoZikpfHx7fTt2YXIgbT14KG5ldyBEYXRlKGYpKS52YWx1ZU9mKCk7dmFyIGs9Yi5taW4mJmIubWluPmZ8fGIubWF4JiZiLm1heDxmO3ZhciB2PWIuZGF0ZS52YWx1ZU9mKCk9PT1tfHxiLmRhdGUgaW5zdGFuY2VvZiBBcnJheSYmYi5kYXRlLnJlZHVjZShmdW5jdGlvbihhLGIpe3JldHVybiBhfHxtPT09Yi52YWx1ZU9mKCl9LCExKXx8XCJyYW5nZVwiPT09Yi5tb2RlJiZtPj1iLmRhdGVbMF0mJm08PWIuZGF0ZVsxXTtoLmRpc2FibGVkfHwhKFwiZGlzYWJsZWRcImluIGgpJiZrP2woZyxcInBtdS1kaXNhYmxlZFwiKTooaC5zZWxlY3RlZHx8IShcInNlbGVjdGVkXCJpbiBoKSYmdikmJmwoZyxcInBtdS1zZWxlY3RlZFwiKTttPT09ZCYmbChnLFwicG11LXRvZGF5XCIpO1xuaC5jbGFzc19uYW1lJiZoLmNsYXNzX25hbWUuc3BsaXQoXCIgXCIpLmZvckVhY2gobC5iaW5kKGcsZykpO2EucHVzaChnKTtBKGYsMSl9bi5hcHBlbmRDaGlsZChiLmluc3RhbmNlX2NvbnRlbnRfdGVtcGxhdGUoYSxcInBtdS1kYXlzXCIpKX0pKCl9Zy5zZXREYXRlKDEpO3Iuc2V0RGF0ZSgxKTtwKHIsMSk7QShyLC0xKTtkPWMucXVlcnlTZWxlY3RvcihcIi5wbXUtcHJldlwiKTtjPWMucXVlcnlTZWxlY3RvcihcIi5wbXUtbmV4dFwiKTtkJiYoZC5zdHlsZS52aXNpYmlsaXR5PWIubWluJiZiLm1pbj49Zz9cImhpZGRlblwiOlwidmlzaWJsZVwiKTtjJiYoYy5zdHlsZS52aXNpYmlsaXR5PWIubWF4JiZiLm1heDw9cj9cImhpZGRlblwiOlwidmlzaWJsZVwiKTtDKGEsXCJmaWxsXCIpfWZ1bmN0aW9uIHQoYSxjKXt2YXIgYj1jLmZvcm1hdCxkPWMuc2VwYXJhdG9yLGU9Yy5sb2NhbGVzW2MubG9jYWxlXTtpZihhIGluc3RhbmNlb2YgRGF0ZXx8XCJudW1iZXJcIj09PXR5cGVvZiBhKXJldHVybiB4KG5ldyBEYXRlKGEpKTtcbmlmKCFhKXJldHVybiB4KG5ldyBEYXRlKTtpZihhIGluc3RhbmNlb2YgQXJyYXkpe2E9YS5zbGljZSgpO2ZvcihiPTA7YjxhLmxlbmd0aDsrK2IpYVtiXT10KGFbYl0sYyk7cmV0dXJuIGF9ZD1hLnNwbGl0KGQpO2lmKDE8ZC5sZW5ndGgpcmV0dXJuIGQuZm9yRWFjaChmdW5jdGlvbihhLGIsZCl7ZFtiXT10KGEudHJpbSgpLGMpfSksZDtkPVtdLmNvbmNhdChlLmRheXNTaG9ydCxlLmRheXNNaW4sZS5kYXlzLGUubW9udGhzU2hvcnQsZS5tb250aHMpO2Q9ZC5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuXCIoXCIrYStcIilcIn0pO2Q9bmV3IFJlZ0V4cChcIlteMC05YS16QS1aXCIrZC5qb2luKFwiXCIpK1wiXStcIik7YT1hLnNwbGl0KGQpO2Q9Yi5zcGxpdChkKTt2YXIgaD1uZXcgRGF0ZTtmb3IoYj0wO2I8YS5sZW5ndGg7YisrKXN3aXRjaChkW2JdKXtjYXNlIFwiYlwiOnZhciBtPWUubW9udGhzU2hvcnQuaW5kZXhPZihhW2JdKTticmVhaztjYXNlIFwiQlwiOm09ZS5tb250aHMuaW5kZXhPZihhW2JdKTticmVhaztcbmNhc2UgXCJkXCI6Y2FzZSBcImVcIjp2YXIgbD1wYXJzZUludChhW2JdLDEwKTticmVhaztjYXNlIFwibVwiOm09cGFyc2VJbnQoYVtiXSwxMCktMTticmVhaztjYXNlIFwiWVwiOmNhc2UgXCJ5XCI6dmFyIGs9cGFyc2VJbnQoYVtiXSwxMCk7ays9MTAwPGs/MDoyOT5rPzJFMzoxOTAwO2JyZWFrO2Nhc2UgXCJIXCI6Y2FzZSBcIklcIjpjYXNlIFwia1wiOmNhc2UgXCJsXCI6dmFyIGY9cGFyc2VJbnQoYVtiXSwxMCk7YnJlYWs7Y2FzZSBcIlBcIjpjYXNlIFwicFwiOi9wbS9pLnRlc3QoYVtiXSkmJjEyPmY/Zis9MTI6L2FtL2kudGVzdChhW2JdKSYmMTI8PWYmJihmLT0xMik7YnJlYWs7Y2FzZSBcIk1cIjp2YXIgbj1wYXJzZUludChhW2JdLDEwKX1lPW5ldyBEYXRlKHZvaWQgMD09PWs/aC5nZXRGdWxsWWVhcigpOmssdm9pZCAwPT09bT9oLmdldE1vbnRoKCk6bSx2b2lkIDA9PT1sP2guZ2V0RGF0ZSgpOmwsdm9pZCAwPT09Zj9oLmdldEhvdXJzKCk6Zix2b2lkIDA9PT1uP2guZ2V0TWludXRlcygpOm4sMCk7aXNOYU4oMSplKSYmXG4oZT1uZXcgRGF0ZSk7cmV0dXJuIHgoZSl9ZnVuY3Rpb24geChhKXthLnNldEhvdXJzKDAsMCwwLDApO3JldHVybiBhfWZ1bmN0aW9uIEQoYSxjLGIpe3ZhciBkPWEuZ2V0TW9udGgoKSxlPWEuZ2V0RGF0ZSgpLGg9YS5nZXRGdWxsWWVhcigpLG09YS5nZXREYXkoKSxrPWEuZ2V0SG91cnMoKSxsPTEyPD1rLGY9bD9rLTEyOms7dmFyIG49bmV3IERhdGUoYS5nZXRGdWxsWWVhcigpLGEuZ2V0TW9udGgoKSxhLmdldERhdGUoKSwwLDAsMCk7dmFyIHA9bmV3IERhdGUoYS5nZXRGdWxsWWVhcigpLDAsMCwwLDAsMCk7bj1NYXRoLmZsb29yKChuLXApLzg2NEU1KTswPT09ZiYmKGY9MTIpO3A9YS5nZXRNaW51dGVzKCk7dmFyIHI9YS5nZXRTZWNvbmRzKCk7Yz1jLnNwbGl0KFwiXCIpO2Zvcih2YXIgZyxxPTA7cTxjLmxlbmd0aDtxKyspe2c9Y1txXTtzd2l0Y2goZyl7Y2FzZSBcImFcIjpnPWIuZGF5c1Nob3J0W21dO2JyZWFrO2Nhc2UgXCJBXCI6Zz1iLmRheXNbbV07YnJlYWs7Y2FzZSBcImJcIjpnPWIubW9udGhzU2hvcnRbZF07XG5icmVhaztjYXNlIFwiQlwiOmc9Yi5tb250aHNbZF07YnJlYWs7Y2FzZSBcIkNcIjpnPTErTWF0aC5mbG9vcihoLzEwMCk7YnJlYWs7Y2FzZSBcImRcIjpnPTEwPmU/XCIwXCIrZTplO2JyZWFrO2Nhc2UgXCJlXCI6Zz1lO2JyZWFrO2Nhc2UgXCJIXCI6Zz0xMD5rP1wiMFwiK2s6azticmVhaztjYXNlIFwiSVwiOmc9MTA+Zj9cIjBcIitmOmY7YnJlYWs7Y2FzZSBcImpcIjpnPTEwMD5uPzEwPm4/XCIwMFwiK246XCIwXCIrbjpuO2JyZWFrO2Nhc2UgXCJrXCI6Zz1rO2JyZWFrO2Nhc2UgXCJsXCI6Zz1mO2JyZWFrO2Nhc2UgXCJtXCI6Zz05PmQ/XCIwXCIrKDErZCk6MStkO2JyZWFrO2Nhc2UgXCJNXCI6Zz0xMD5wP1wiMFwiK3A6cDticmVhaztjYXNlIFwicFwiOmNhc2UgXCJQXCI6Zz1sP1wiUE1cIjpcIkFNXCI7YnJlYWs7Y2FzZSBcInNcIjpnPU1hdGguZmxvb3IoYS5nZXRUaW1lKCkvMUUzKTticmVhaztjYXNlIFwiU1wiOmc9MTA+cj9cIjBcIityOnI7YnJlYWs7Y2FzZSBcInVcIjpnPW0rMTticmVhaztjYXNlIFwid1wiOmc9bTticmVhaztjYXNlIFwieVwiOmc9KFwiXCIraCkuc3Vic3RyKDIsXG4yKTticmVhaztjYXNlIFwiWVwiOmc9aH1jW3FdPWd9cmV0dXJuIGMuam9pbihcIlwiKX1mdW5jdGlvbiBPKGEsYyl7dmFyIGI9YS5fX3BpY2ttZXVwLm9wdGlvbnMsZDt4KGMpO2E6c3dpdGNoKGIubW9kZSl7Y2FzZSBcIm11bHRpcGxlXCI6dmFyIGU9Yy52YWx1ZU9mKCk7Zm9yKGQ9MDtkPGIuZGF0ZS5sZW5ndGg7KytkKWlmKGIuZGF0ZVtkXS52YWx1ZU9mKCk9PT1lKXtiLmRhdGUuc3BsaWNlKGQsMSk7YnJlYWsgYX1iLmRhdGUucHVzaChjKTticmVhaztjYXNlIFwicmFuZ2VcIjpiLmxhc3RTZWx8fChiLmRhdGVbMF09Yyk7Yzw9Yi5kYXRlWzBdPyhiLmRhdGVbMV09Yi5kYXRlWzBdLGIuZGF0ZVswXT1jKTpiLmRhdGVbMV09YztiLmxhc3RTZWw9IWIubGFzdFNlbDticmVhaztkZWZhdWx0OmIuZGF0ZT1jLnZhbHVlT2YoKX1jPUgoYik7QihhLFwiaW5wdXRcIikmJihhLnZhbHVlPVwic2luZ2xlXCI9PT1iLm1vZGU/Yy5mb3JtYXR0ZWRfZGF0ZTpjLmZvcm1hdHRlZF9kYXRlLmpvaW4oYi5zZXBhcmF0b3IpKTtcbkMoYSxcImNoYW5nZVwiLGMpO2IuZmxhdHx8IWIuaGlkZV9vbl9zZWxlY3R8fFwicmFuZ2VcIj09PWIubW9kZSYmYi5sYXN0U2VsfHxiLmJvdW5kLmhpZGUoKX1mdW5jdGlvbiBQKGEsYyl7dmFyIGI9Yy50YXJnZXQ7ayhiLFwicG11LWJ1dHRvblwiKXx8KGI9SihiLFwiLnBtdS1idXR0b25cIikpO2lmKCFrKGIsXCJwbXUtYnV0dG9uXCIpfHxrKGIsXCJwbXUtZGlzYWJsZWRcIikpcmV0dXJuITE7Yy5wcmV2ZW50RGVmYXVsdCgpO2Muc3RvcFByb3BhZ2F0aW9uKCk7YT1hLl9fcGlja21ldXAub3B0aW9uczt2YXIgZD1KKGIsXCIucG11LWluc3RhbmNlXCIpO2M9ZC5wYXJlbnRFbGVtZW50O2Q9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYy5xdWVyeVNlbGVjdG9yQWxsKFwiLnBtdS1pbnN0YW5jZVwiKSkuaW5kZXhPZihkKTtCKGIucGFyZW50RWxlbWVudCxcIm5hdlwiKT9rKGIsXCJwbXUtbW9udGhcIik/KHAoYS5jdXJyZW50LGQtTWF0aC5mbG9vcihhLmNhbGVuZGFycy8yKSksayhjLFwicG11LXZpZXcteWVhcnNcIik/XG4oYS5jdXJyZW50PVwic2luZ2xlXCIhPT1hLm1vZGU/bmV3IERhdGUoYS5kYXRlW2EuZGF0ZS5sZW5ndGgtMV0pOm5ldyBEYXRlKGEuZGF0ZSksYS5zZWxlY3RfZGF5PyhjLmNsYXNzTGlzdC5yZW1vdmUoXCJwbXUtdmlldy15ZWFyc1wiKSxsKGMsXCJwbXUtdmlldy1kYXlzXCIpKTphLnNlbGVjdF9tb250aCYmKGMuY2xhc3NMaXN0LnJlbW92ZShcInBtdS12aWV3LXllYXJzXCIpLGwoYyxcInBtdS12aWV3LW1vbnRoc1wiKSkpOmsoYyxcInBtdS12aWV3LW1vbnRoc1wiKT9hLnNlbGVjdF95ZWFyPyhjLmNsYXNzTGlzdC5yZW1vdmUoXCJwbXUtdmlldy1tb250aHNcIiksbChjLFwicG11LXZpZXcteWVhcnNcIikpOmEuc2VsZWN0X2RheSYmKGMuY2xhc3NMaXN0LnJlbW92ZShcInBtdS12aWV3LW1vbnRoc1wiKSxsKGMsXCJwbXUtdmlldy1kYXlzXCIpKTprKGMsXCJwbXUtdmlldy1kYXlzXCIpJiYoYS5zZWxlY3RfbW9udGg/KGMuY2xhc3NMaXN0LnJlbW92ZShcInBtdS12aWV3LWRheXNcIiksbChjLFwicG11LXZpZXctbW9udGhzXCIpKTpcbmEuc2VsZWN0X3llYXImJihjLmNsYXNzTGlzdC5yZW1vdmUoXCJwbXUtdmlldy1kYXlzXCIpLGwoYyxcInBtdS12aWV3LXllYXJzXCIpKSkpOmsoYixcInBtdS1wcmV2XCIpP2EuYm91bmQucHJldighMSk6YS5ib3VuZC5uZXh0KCExKTprKGMsXCJwbXUtdmlldy15ZWFyc1wiKT8oYS5jdXJyZW50LnNldEZ1bGxZZWFyKGIuX19waWNrbWV1cF95ZWFyKSxhLnNlbGVjdF9tb250aD8oYy5jbGFzc0xpc3QucmVtb3ZlKFwicG11LXZpZXcteWVhcnNcIiksbChjLFwicG11LXZpZXctbW9udGhzXCIpKTphLnNlbGVjdF9kYXk/KGMuY2xhc3NMaXN0LnJlbW92ZShcInBtdS12aWV3LXllYXJzXCIpLGwoYyxcInBtdS12aWV3LWRheXNcIikpOmEuYm91bmQudXBkYXRlX2RhdGUoYS5jdXJyZW50KSk6ayhjLFwicG11LXZpZXctbW9udGhzXCIpPyhhLmN1cnJlbnQuc2V0TW9udGgoYi5fX3BpY2ttZXVwX21vbnRoKSxhLmN1cnJlbnQuc2V0RnVsbFllYXIoYi5fX3BpY2ttZXVwX3llYXIpLGEuc2VsZWN0X2RheT8oYy5jbGFzc0xpc3QucmVtb3ZlKFwicG11LXZpZXctbW9udGhzXCIpLFxubChjLFwicG11LXZpZXctZGF5c1wiKSk6YS5ib3VuZC51cGRhdGVfZGF0ZShhLmN1cnJlbnQpLHAoYS5jdXJyZW50LE1hdGguZmxvb3IoYS5jYWxlbmRhcnMvMiktZCkpOihjPW5ldyBEYXRlKGEuY3VycmVudCksYy5zZXRZZWFyKGIuX19waWNrbWV1cF95ZWFyKSxjLnNldE1vbnRoKGIuX19waWNrbWV1cF9tb250aCksYy5zZXREYXRlKGIuX19waWNrbWV1cF9kYXkpLGEuYm91bmQudXBkYXRlX2RhdGUoYykpO2EuYm91bmQuZmlsbCgpO3JldHVybiEwfWZ1bmN0aW9uIEgoYSl7aWYoXCJzaW5nbGVcIj09PWEubW9kZSl7dmFyIGM9bmV3IERhdGUoYS5kYXRlKTtyZXR1cm57Zm9ybWF0dGVkX2RhdGU6RChjLGEuZm9ybWF0LGEubG9jYWxlc1thLmxvY2FsZV0pLGRhdGU6Y319Yz17Zm9ybWF0dGVkX2RhdGU6W10sZGF0ZTpbXX07YS5kYXRlLmZvckVhY2goZnVuY3Rpb24oYil7Yj1uZXcgRGF0ZShiKTtjLmZvcm1hdHRlZF9kYXRlLnB1c2goRChiLGEuZm9ybWF0LGEubG9jYWxlc1thLmxvY2FsZV0pKTtcbmMuZGF0ZS5wdXNoKGIpfSk7cmV0dXJuIGN9ZnVuY3Rpb24gSShhLGMpe3ZhciBiPWEuX19waWNrbWV1cC5lbGVtZW50O2lmKGN8fGsoYixcInBtdS1oaWRkZW5cIikpe3ZhciBkPWEuX19waWNrbWV1cC5vcHRpb25zLGU9TShhKSxoPXdpbmRvdy5wYWdlWE9mZnNldCxtPXdpbmRvdy5wYWdlWU9mZnNldCxsPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCxwPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsZj1lLnRvcCxuPWUubGVmdDtkLmJvdW5kLmZpbGwoKTtCKGEsXCJpbnB1dFwiKSYmKChjPWEudmFsdWUpJiZkLmJvdW5kLnNldF9kYXRlKGMpLHEoYSxhLFwia2V5ZG93blwiLGZ1bmN0aW9uKGEpezk9PT1hLndoaWNoJiZkLmJvdW5kLmhpZGUoKX0pLGQubGFzdFNlbD0hMSk7aWYoQyhhLFwic2hvd1wiKSYmIWQuZmxhdCl7Yi5jbGFzc0xpc3QucmVtb3ZlKFwicG11LWhpZGRlblwiKTtpZihkLnBvc2l0aW9uIGluc3RhbmNlb2YgRnVuY3Rpb24pZT1kLnBvc2l0aW9uLmNhbGwoYSksXG5uPWUubGVmdCxmPWUudG9wO2Vsc2V7c3dpdGNoKGQucG9zaXRpb24pe2Nhc2UgXCJ0b3BcIjpmLT1iLm9mZnNldEhlaWdodDticmVhaztjYXNlIFwibGVmdFwiOm4tPWIub2Zmc2V0V2lkdGg7YnJlYWs7Y2FzZSBcInJpZ2h0XCI6bis9YS5vZmZzZXRXaWR0aDticmVhaztjYXNlIFwiYm90dG9tXCI6Zis9YS5vZmZzZXRIZWlnaHR9ZitiLm9mZnNldEhlaWdodD5tK3AmJihmPWUudG9wLWIub2Zmc2V0SGVpZ2h0KTtmPG0mJihmPWUudG9wK2Eub2Zmc2V0SGVpZ2h0KTtuK2Iub2Zmc2V0V2lkdGg+aCtsJiYobj1lLmxlZnQtYi5vZmZzZXRXaWR0aCk7bjxoJiYobj1lLmxlZnQrYS5vZmZzZXRXaWR0aCk7bis9XCJweFwiO2YrPVwicHhcIn1iLnN0eWxlLmxlZnQ9bjtiLnN0eWxlLnRvcD1mO3NldFRpbWVvdXQoZnVuY3Rpb24oKXtxKGEsZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFwiY2xpY2tcIixkLmJvdW5kLmhpZGUpO3EoYSx3aW5kb3csXCJyZXNpemVcIixkLmJvdW5kLmZvcmNlZF9zaG93KX0pfX19ZnVuY3Rpb24gUShhLFxuYyl7dmFyIGI9YS5fX3BpY2ttZXVwLmVsZW1lbnQsZD1hLl9fcGlja21ldXAub3B0aW9ucztjJiZjLnRhcmdldCYmKGMudGFyZ2V0PT09YXx8Yi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihjLnRhcmdldCkmMTYpfHwhQyhhLFwiaGlkZVwiKXx8KGwoYixcInBtdS1oaWRkZW5cIikseihhLGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcImNsaWNrXCIsZC5ib3VuZC5oaWRlKSx6KGEsd2luZG93LFwicmVzaXplXCIsZC5ib3VuZC5mb3JjZWRfc2hvdyksZC5sYXN0U2VsPSExKX1mdW5jdGlvbiBSKGEpe3ZhciBjPWEuX19waWNrbWV1cC5vcHRpb25zO3ooYSxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXCJjbGlja1wiLGMuYm91bmQuaGlkZSk7eihhLHdpbmRvdyxcInJlc2l6ZVwiLGMuYm91bmQuZm9yY2VkX3Nob3cpO2MuYm91bmQuZm9yY2VkX3Nob3coKX1mdW5jdGlvbiBTKGEpe2E9YS5fX3BpY2ttZXVwLm9wdGlvbnM7XCJzaW5nbGVcIiE9PWEubW9kZSYmKGEuZGF0ZT1bXSxhLmxhc3RTZWw9ITEsYS5ib3VuZC5maWxsKCkpfVxuZnVuY3Rpb24gVChhLGMpe1widW5kZWZpbmVkXCI9PXR5cGVvZiBjJiYoYz0hMCk7dmFyIGI9YS5fX3BpY2ttZXVwLmVsZW1lbnQ7YT1hLl9fcGlja21ldXAub3B0aW9ucztrKGIsXCJwbXUtdmlldy15ZWFyc1wiKT91KGEuY3VycmVudCwtMTIpOmsoYixcInBtdS12aWV3LW1vbnRoc1wiKT91KGEuY3VycmVudCwtMSk6ayhiLFwicG11LXZpZXctZGF5c1wiKSYmcChhLmN1cnJlbnQsLTEpO2MmJmEuYm91bmQuZmlsbCgpfWZ1bmN0aW9uIFUoYSxjKXtcInVuZGVmaW5lZFwiPT10eXBlb2YgYyYmKGM9ITApO3ZhciBiPWEuX19waWNrbWV1cC5lbGVtZW50O2E9YS5fX3BpY2ttZXVwLm9wdGlvbnM7ayhiLFwicG11LXZpZXcteWVhcnNcIik/dShhLmN1cnJlbnQsMTIpOmsoYixcInBtdS12aWV3LW1vbnRoc1wiKT91KGEuY3VycmVudCwxKTprKGIsXCJwbXUtdmlldy1kYXlzXCIpJiZwKGEuY3VycmVudCwxKTtjJiZhLmJvdW5kLmZpbGwoKX1mdW5jdGlvbiBWKGEsYyl7dmFyIGI9YS5fX3BpY2ttZXVwLm9wdGlvbnM7YT1cbkgoYik7cmV0dXJuXCJzdHJpbmdcIj09PXR5cGVvZiBjPyhhPWEuZGF0ZSxhIGluc3RhbmNlb2YgRGF0ZT9EKGEsYyxiLmxvY2FsZXNbYi5sb2NhbGVdKTphLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gRChhLGMsYi5sb2NhbGVzW2IubG9jYWxlXSl9KSk6YVtjP1wiZm9ybWF0dGVkX2RhdGVcIjpcImRhdGVcIl19ZnVuY3Rpb24gVyhhLGMsYil7dmFyIGQ9YS5fX3BpY2ttZXVwLm9wdGlvbnM7aWYoIShjIGluc3RhbmNlb2YgQXJyYXkpfHwwPGMubGVuZ3RoKWlmKGQuZGF0ZT10KGMsZCksXCJzaW5nbGVcIiE9PWQubW9kZSlmb3IoZC5kYXRlIGluc3RhbmNlb2YgQXJyYXk/KGQuZGF0ZVswXT1kLmRhdGVbMF18fHQobmV3IERhdGUsZCksXCJyYW5nZVwiPT09ZC5tb2RlJiYoZC5kYXRlWzFdPWQuZGF0ZVsxXXx8dChkLmRhdGVbMF0sZCkpKTooZC5kYXRlPVtkLmRhdGVdLFwicmFuZ2VcIj09PWQubW9kZSYmZC5kYXRlLnB1c2godChkLmRhdGVbMF0sZCkpKSxjPTA7YzxkLmRhdGUubGVuZ3RoOysrYylkLmRhdGVbY109XG5MKGQuZGF0ZVtjXSxkLm1pbixkLm1heCk7ZWxzZSBkLmRhdGUgaW5zdGFuY2VvZiBBcnJheSYmKGQuZGF0ZT1kLmRhdGVbMF0pLGQuZGF0ZT1MKGQuZGF0ZSxkLm1pbixkLm1heCk7ZWxzZSBkLmRhdGU9W107aWYoIWQuc2VsZWN0X2RheSlpZihkLmRhdGUgaW5zdGFuY2VvZiBBcnJheSlmb3IoYz0wO2M8ZC5kYXRlLmxlbmd0aDsrK2MpZC5kYXRlW2NdLnNldERhdGUoMSk7ZWxzZSBkLmRhdGUuc2V0RGF0ZSgxKTtpZihcIm11bHRpcGxlXCI9PT1kLm1vZGUpZm9yKGM9MDtjPGQuZGF0ZS5sZW5ndGg7KytjKWQuZGF0ZS5pbmRleE9mKGQuZGF0ZVtjXSkhPT1jJiYoZC5kYXRlLnNwbGljZShjLDEpLC0tYyk7Yj9kLmN1cnJlbnQ9dChiLGQpOihiPVwic2luZ2xlXCI9PT1kLm1vZGU/ZC5kYXRlOmQuZGF0ZVtkLmRhdGUubGVuZ3RoLTFdLGQuY3VycmVudD1iP25ldyBEYXRlKGIpOm5ldyBEYXRlKTtkLmN1cnJlbnQuc2V0RGF0ZSgxKTtkLmJvdW5kLmZpbGwoKTtCKGEsXCJpbnB1dFwiKSYmITEhPT1cbmQuZGVmYXVsdF9kYXRlJiYoYj1IKGQpLGM9YS52YWx1ZSxkPVwic2luZ2xlXCI9PT1kLm1vZGU/Yi5mb3JtYXR0ZWRfZGF0ZTpiLmZvcm1hdHRlZF9kYXRlLmpvaW4oZC5zZXBhcmF0b3IpLGN8fEMoYSxcImNoYW5nZVwiLGIpLGMhPT1kJiYoYS52YWx1ZT1kKSl9ZnVuY3Rpb24gWChhKXt2YXIgYz1hLl9fcGlja21ldXAuZWxlbWVudDt6KGEpO3koYyk7ZGVsZXRlIGEuX19waWNrbWV1cH1mdW5jdGlvbiBMKGEsYyxiKXtyZXR1cm4gYyYmYz5hP25ldyBEYXRlKGMpOmImJmI8YT9uZXcgRGF0ZShiKTphfWZ1bmN0aW9uIEUoYSxjKXtcInN0cmluZ1wiPT10eXBlb2YgYSYmKGE9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihhKSk7aWYoIWEpcmV0dXJuIG51bGw7aWYoIWEuX19waWNrbWV1cCl7dmFyIGIsZD17fTtjPWN8fHt9O2ZvcihiIGluIEUuZGVmYXVsdHMpZFtiXT1iIGluIGM/Y1tiXTpFLmRlZmF1bHRzW2JdO2ZvcihiIGluIGQpYz1hLmdldEF0dHJpYnV0ZShcImRhdGEtcG11LVwiK2IpLG51bGwhPT1cbmMmJihkW2JdPWMpO1wiZGF5c1wiIT09ZC52aWV3fHxkLnNlbGVjdF9kYXl8fChkLnZpZXc9XCJtb250aHNcIik7XCJtb250aHNcIiE9PWQudmlld3x8ZC5zZWxlY3RfbW9udGh8fChkLnZpZXc9XCJ5ZWFyc1wiKTtcInllYXJzXCIhPT1kLnZpZXd8fGQuc2VsZWN0X3llYXJ8fChkLnZpZXc9XCJkYXlzXCIpO1wiZGF5c1wiIT09ZC52aWV3fHxkLnNlbGVjdF9kYXl8fChkLnZpZXc9XCJtb250aHNcIik7ZC5jYWxlbmRhcnM9TWF0aC5tYXgoMSxwYXJzZUludChkLmNhbGVuZGFycywxMCl8fDEpO2QubW9kZT0vc2luZ2xlfG11bHRpcGxlfHJhbmdlLy50ZXN0KGQubW9kZSk/ZC5tb2RlOlwic2luZ2xlXCI7ZC5taW4mJihkLm1pbj10KGQubWluLGQpLGQuc2VsZWN0X2RheXx8ZC5taW4uc2V0RGF0ZSgxKSk7ZC5tYXgmJihkLm1heD10KGQubWF4LGQpLGQuc2VsZWN0X2RheXx8ZC5tYXguc2V0RGF0ZSgxKSk7Yz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2EuX19waWNrbWV1cD17b3B0aW9uczpkLGV2ZW50czpbXSxcbmVsZW1lbnQ6Y307Yy5fX3BpY2ttZXVwX3RhcmdldD1hO2woYyxcInBpY2ttZXVwXCIpO2QuY2xhc3NfbmFtZSYmbChjLGQuY2xhc3NfbmFtZSk7ZC5ib3VuZD17ZmlsbDpOLmJpbmQoYSxhKSx1cGRhdGVfZGF0ZTpPLmJpbmQoYSxhKSxjbGljazpQLmJpbmQoYSxhKSxzaG93OkkuYmluZChhLGEpLGZvcmNlZF9zaG93OkkuYmluZChhLGEsITApLGhpZGU6US5iaW5kKGEsYSksdXBkYXRlOlIuYmluZChhLGEpLGNsZWFyOlMuYmluZChhLGEpLHByZXY6VC5iaW5kKGEsYSksbmV4dDpVLmJpbmQoYSxhKSxnZXRfZGF0ZTpWLmJpbmQoYSxhKSxzZXRfZGF0ZTpXLmJpbmQoYSxhKSxkZXN0cm95OlguYmluZChhLGEpfTtsKGMsXCJwbXUtdmlldy1cIitkLnZpZXcpO3ZhciBlPWQuaW5zdGFuY2VfdGVtcGxhdGUoZCksaD1cIlwiO2ZvcihiPTA7YjxkLmNhbGVuZGFyczsrK2IpaCs9ZTtjLmlubmVySFRNTD1oO3EoYSxjLFwiY2xpY2tcIixkLmJvdW5kLmNsaWNrKTtxKGEsYyxcIm9uc2VsZWN0c3RhcnRcImluIEVsZW1lbnQucHJvdG90eXBlP1xuXCJzZWxlY3RzdGFydFwiOlwibW91c2Vkb3duXCIsZnVuY3Rpb24oYSl7YS5wcmV2ZW50RGVmYXVsdCgpfSk7ZC5mbGF0PyhsKGMsXCJwbXUtZmxhdFwiKSxhLmFwcGVuZENoaWxkKGMpKToobChjLFwicG11LWhpZGRlblwiKSxkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGMpLHEoYSxhLFwiY2xpY2tcIixJLmJpbmQoYSxhLCExKSkscShhLGEsXCJpbnB1dFwiLGQuYm91bmQudXBkYXRlKSxxKGEsYSxcImNoYW5nZVwiLGQuYm91bmQudXBkYXRlKSk7ZC5ib3VuZC5zZXRfZGF0ZShkLmRhdGUsZC5jdXJyZW50KX1kPWEuX19waWNrbWV1cC5vcHRpb25zO3JldHVybntoaWRlOmQuYm91bmQuaGlkZSxzaG93OmQuYm91bmQuc2hvdyxjbGVhcjpkLmJvdW5kLmNsZWFyLHVwZGF0ZTpkLmJvdW5kLnVwZGF0ZSxwcmV2OmQuYm91bmQucHJldixuZXh0OmQuYm91bmQubmV4dCxnZXRfZGF0ZTpkLmJvdW5kLmdldF9kYXRlLHNldF9kYXRlOmQuYm91bmQuc2V0X2RhdGUsZGVzdHJveTpkLmJvdW5kLmRlc3Ryb3l9fUUuZGVmYXVsdHM9XG57Y3VycmVudDpudWxsLGRhdGU6bmV3IERhdGUsZGVmYXVsdF9kYXRlOm5ldyBEYXRlLGZsYXQ6ITEsZmlyc3RfZGF5OjEscHJldjpcIiYjOTY2NDtcIixuZXh0OlwiJiM5NjU0O1wiLG1vZGU6XCJzaW5nbGVcIixzZWxlY3RfeWVhcjohMCxzZWxlY3RfbW9udGg6ITAsc2VsZWN0X2RheTohMCx2aWV3OlwiZGF5c1wiLGNhbGVuZGFyczoxLGZvcm1hdDpcImQtbS1ZXCIsdGl0bGVfZm9ybWF0OlwiQiwgWVwiLHBvc2l0aW9uOlwiYm90dG9tXCIsY2xhc3NfbmFtZTpcIlwiLHNlcGFyYXRvcjpcIiAtIFwiLGhpZGVfb25fc2VsZWN0OiExLG1pbjpudWxsLG1heDpudWxsLHJlbmRlcjpmdW5jdGlvbigpe30sbG9jYWxlOlwiZW5cIixsb2NhbGVzOntlbjp7ZGF5czpcIlN1bmRheSBNb25kYXkgVHVlc2RheSBXZWRuZXNkYXkgVGh1cnNkYXkgRnJpZGF5IFNhdHVyZGF5XCIuc3BsaXQoXCIgXCIpLGRheXNTaG9ydDpcIlN1biBNb24gVHVlIFdlZCBUaHUgRnJpIFNhdFwiLnNwbGl0KFwiIFwiKSxkYXlzTWluOlwiU3UgTW8gVHUgV2UgVGggRnIgU2FcIi5zcGxpdChcIiBcIiksXG5tb250aHM6XCJKYW51YXJ5IEZlYnJ1YXJ5IE1hcmNoIEFwcmlsIE1heSBKdW5lIEp1bHkgQXVndXN0IFNlcHRlbWJlciBPY3RvYmVyIE5vdmVtYmVyIERlY2VtYmVyXCIuc3BsaXQoXCIgXCIpLG1vbnRoc1Nob3J0OlwiSmFuIEZlYiBNYXIgQXByIE1heSBKdW4gSnVsIEF1ZyBTZXAgT2N0IE5vdiBEZWNcIi5zcGxpdChcIiBcIil9fSxpbnN0YW5jZV90ZW1wbGF0ZTpmdW5jdGlvbihhKXt2YXIgYz1hLmxvY2FsZXNbYS5sb2NhbGVdLmRheXNNaW4uc2xpY2UoKTthLmZpcnN0X2RheSYmYy5wdXNoKGMuc2hpZnQoKSk7cmV0dXJuJzxkaXYgY2xhc3M9XCJwbXUtaW5zdGFuY2VcIj48bmF2PjxkaXYgY2xhc3M9XCJwbXUtcHJldiBwbXUtYnV0dG9uXCI+JythLnByZXYrJzwvZGl2PjxkaXYgY2xhc3M9XCJwbXUtbW9udGggcG11LWJ1dHRvblwiPjwvZGl2PjxkaXYgY2xhc3M9XCJwbXUtbmV4dCBwbXUtYnV0dG9uXCI+JythLm5leHQrJzwvZGl2PjwvbmF2PjxuYXYgY2xhc3M9XCJwbXUtZGF5LW9mLXdlZWtcIj48ZGl2PicrXG5jLmpvaW4oXCI8L2Rpdj48ZGl2PlwiKStcIjwvZGl2PjwvbmF2PjwvZGl2PlwifSxpbnN0YW5jZV9jb250ZW50X3RlbXBsYXRlOmZ1bmN0aW9uKGEsYyl7dmFyIGI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtsKGIsYyk7Zm9yKGM9MDtjPGEubGVuZ3RoOysrYylsKGFbY10sXCJwbXUtYnV0dG9uXCIpLGIuYXBwZW5kQ2hpbGQoYVtjXSk7cmV0dXJuIGJ9fTtyZXR1cm4gRX0pO1xuIiwiLyohIFVURi04XHJcblxyXG7CqSBrb3ZyaWdpblxyXG7QktGB0LUg0L/RgNCw0LLQsCDRgNCw0LfRgNC10YjQtdC90Ytcclxu0LrRgNCw0YHQuNCy0YvQuSDQtNC40LfQsNC50L0g0LTQvtC70LbQtdC9INC40LzQtdGC0Ywg0LrRgNCw0YHQuNCy0YvQuSDQutC+0LTCrlxyXG5cclxuaHR0cHM6Ly9naXRodWIuY29tL2h0bWxwbHVzY3NzL1xyXG5cclxuKi9cclxuXHJcbiggKCkgPT4ge1xyXG5cclxuXHRsZXQgcmVzaXplVGltZW91dCA9IG51bGwsXHJcblx0XHR3aW5kb3dXaWR0aE9MZCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cclxuXHRjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcclxuXHJcblx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCAoKSA9PiB7XHJcblxyXG5cdFx0XHRpZiAocmVzaXplVGltZW91dCA9PT0gbnVsbCkge1xyXG5cclxuXHRcdFx0XHRyZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dCggKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdHJlc2l6ZVRpbWVvdXQgPSBudWxsO1xyXG5cclxuXHRcdFx0XHRcdGlmKHdpbmRvd1dpZHRoT0xkICE9PSB3aW5kb3cuaW5uZXJXaWR0aCkge1xyXG5cclxuXHRcdFx0XHRcdFx0d2luZG93V2lkdGhPTGQgPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHRcdFx0XHRcdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXNjcm9sbE1hcmdpbicsIGhlYWRlci5jbGllbnRIZWlnaHQgKyAncHgnKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0sIDEwMCk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xyXG5cclxuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmYXN0TG9hZFNjcmlwdCcsIHRydWUpO1xyXG5cclxuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS10cmFuc2l0aW9uRGVmYXVsdCcsICcuM3MnKTtcclxuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1zY3JvbGxNYXJnaW4nLCBoZWFkZXIuY2xpZW50SGVpZ2h0ICsgJ3B4Jyk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHQvLyDQvtCx0YDQsNCx0L7RgtGH0LjQuiDQsNC90LjQvNCw0YbQuNC5XHJcblx0d2luZG93LmNzc0FuaW1hdGlvbiA9IGE9PntsZXQgYixjLGQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNzc2FuaW1hdGlvblwiKTtzd2l0Y2goYSl7Y2FzZSdhbmltYXRpb24nOmI9e1wiYW5pbWF0aW9uXCI6XCJhbmltYXRpb25lbmRcIixcIk9BbmltYXRpb25cIjpcIm9BbmltYXRpb25FbmRcIixcIk1vekFuaW1hdGlvblwiOlwiYW5pbWF0aW9uZW5kXCIsXCJXZWJraXRBbmltYXRpb25cIjpcIndlYmtpdEFuaW1hdGlvbkVuZFwifTticmVhaztjYXNlJ3RyYW5zaXRpb24nOmI9e1widHJhbnNpdGlvblwiOlwidHJhbnNpdGlvbmVuZFwiLFwiT1RyYW5zaXRpb25cIjpcIm9UcmFuc2l0aW9uRW5kXCIsXCJNb3pUcmFuc2l0aW9uXCI6XCJ0cmFuc2l0aW9uZW5kXCIsXCJXZWJraXRUcmFuc2l0aW9uXCI6XCJ3ZWJraXRUcmFuc2l0aW9uRW5kXCJ9fWZvcihjIGluIGIpaWYoZC5zdHlsZVtjXSE9PXVuZGVmaW5lZClyZXR1cm4gYltjXX1cclxuXHJcblx0Ly8gRGV0ZXJtaW5lIGlmIGFuIGVsZW1lbnQgaXMgaW4gdGhlIHZpc2libGUgdmlld3BvcnRcclxuXHR3aW5kb3cuaXNJblZpZXdwb3J0ID0gZWwgPT4ge1xyXG5cdFx0Y29uc3QgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0cmV0dXJuIChyZWN0LnRvcCA+PSAwICYmIHJlY3QuYm90dG9tIDw9IHdpbmRvdy5pbm5lckhlaWdodCk7XHJcblx0fVxyXG5cclxuXHQvLyDQvtGC0LTQtdC70Y/QtdC8INGC0YvRgdGP0YfQuFxyXG5cdHdpbmRvdy5zZXBOdW1iZXIgPSBzdHIgPT4ge1xyXG5cdFx0c3RyID0gc3RyLnRvU3RyaW5nKCk7XHJcblx0XHRzdHIgPSBzdHIucmVwbGFjZSgvXFxzKy9nLCcnKTtcclxuXHRcdHJldHVybiBzdHIucmVwbGFjZSgvKFxcZCkoPz0oXFxkXFxkXFxkKSsoW15cXGRdfCQpKS9nLCAnJDEgJyk7XHJcblx0fVxyXG5cclxuXHQvLyDRgdC60LvQtdC40LLQsNC10Lwg0YLRi9GB0Y/Rh9C4XHJcblx0d2luZG93LnN0clRvTnVtYmVyID0gbiA9PiBwYXJzZUludChuLnJlcGxhY2UoL1xccysvZywnJyksIDEwKTtcclxuXHJcbi8vINGB0LrQu9C+0L3QtdC90LjQtVxyXG5cdHdpbmRvdy5kZWNsZW5zaW9uID0gKG51bSwgZXhwcmVzc2lvbnMpID0+IHtcclxuXHJcblx0XHRsZXQgcixcclxuXHRcdFx0Y291bnQgPSBudW0gJSAxMDA7XHJcblxyXG5cdFx0aWYgKGNvdW50ID4gNCAmJiBjb3VudCA8IDIxKXtcclxuXHJcblx0XHRcdHIgPSBleHByZXNzaW9uc1snMiddO1xyXG5cclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cclxuXHRcdFx0Y291bnQgPSBjb3VudCAlIDEwO1xyXG5cclxuXHRcdFx0aWYgKGNvdW50ID09IDEpe1xyXG5cdFx0XHRcdHIgPSBleHByZXNzaW9uc1snMCddO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKGNvdW50ID4gMSAmJiBjb3VudCA8IDUpe1xyXG5cdFx0XHRcdHIgPSBleHByZXNzaW9uc1snMSddO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2V7XHJcblx0XHRcdFx0ciA9IGV4cHJlc3Npb25zWycyJ107XHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHI7XHJcblxyXG5cdH1cclxuXHJcbn0pKCk7IiwiKCBpdGVtcyA9PiB7XHJcblxyXG5cdGlmKCFpdGVtcy5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Wy4uLml0ZW1zXS5mb3JFYWNoKCBhY2NvcmRpb24gPT4ge1xyXG5cclxuXHRcdGxldCBhbmltYXRlT24gPSBmYWxzZSxcclxuXHRcdFx0YWN0aXZlSXRlbSA9IG51bGw7XHJcblxyXG5cdFx0Y29uc3QgaXRlbXMgPSBhY2NvcmRpb24ucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbl9faXRlbScpLFxyXG5cdFx0XHQgIHN0eWxlUGx1cyA9IGFjY29yZGlvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjY29yZGlvbi0tcGx1cycpO1xyXG5cclxuXHRcdFsuLi5pdGVtc10uZm9yRWFjaCggaXRlbSA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCBidG4gPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb25fX2J0bicpLFxyXG5cdFx0XHRcdCAgaGVhZCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbl9faGVhZCcpLFxyXG5cdFx0XHRcdCAgYm9keSA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbl9fYm9keScpLFxyXG5cdFx0XHRcdCAgYXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInN2Z1wiKTtcclxuXHJcblx0XHRcdGFycm93LnNldEF0dHJpYnV0ZU5TKG51bGwsIFwidmlld0JveFwiLCBcIjAgMCAyNCAyNFwiKTtcclxuXHRcdFx0YXJyb3cuc2V0QXR0cmlidXRlTlMobnVsbCwgXCJ3aWR0aFwiLCAyNCk7XHJcblx0XHRcdGFycm93LnNldEF0dHJpYnV0ZU5TKG51bGwsIFwiaGVpZ2h0XCIsIDI0KTtcclxuXHRcdFx0YXJyb3cuaW5uZXJIVE1MID0gYDx1c2UgeGxpbms6aHJlZj1cIiNzdmctJHsgc3R5bGVQbHVzID8gJ3BsdXMnIDogJ2Fycm93LWNoZXZyb24tcmlnaHQnIH1cIi8+YDtcclxuXHJcblx0XHRcdGhlYWQuYXBwZW5kKGFycm93KTtcclxuXHJcblx0XHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcblx0XHRcdFx0YW5pbWF0ZU9uID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0aWYoIGl0ZW0gPT09IGFjdGl2ZUl0ZW0gKXtcclxuXHJcblx0XHRcdFx0XHRpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9wZW4nKTtcclxuXHRcdFx0XHRcdGFjdGl2ZUl0ZW0gPSBudWxsO1xyXG5cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdGFjdGl2ZUl0ZW0gPSBpdGVtO1xyXG5cclxuXHRcdFx0XHRcdFsuLi5pdGVtc10uZm9yRWFjaCggZWwgPT4gZWwuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtb3BlbicsIGVsID09PSBpdGVtKSk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Ym9keS5hZGRFdmVudExpc3RlbmVyKHdpbmRvdy5jc3NBbmltYXRpb24oJ3RyYW5zaXRpb24nKSwgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRpZihhbmltYXRlT24gJiYgYWN0aXZlSXRlbSAmJiAhd2luZG93LmlzSW5WaWV3cG9ydChoZWFkKSl7XHJcblxyXG5cdFx0XHRcdFx0aGVhZC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRhbmltYXRlT24gPSBmYWxzZTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvcmRpb24nKSk7IiwiKCBhcnRpY2xlID0+IHtcclxuXHJcblx0aWYoYXJ0aWNsZSkge1xyXG5cclxuXHRcdC8vIHNoYXJlXHJcblxyXG5cdFx0Y29uc3QgYnRuID0gYXJ0aWNsZS5xdWVyeVNlbGVjdG9yKCcucGFnZS1hcnRpY2xlX19zaGFyZS1idG4nKTtcclxuXHJcblx0XHRpZiAoIGJ0biApIHtcclxuXHJcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0XHRpZiAoIGV2ZW50LnRhcmdldC5jbG9zZXN0KCcucGFnZS1hcnRpY2xlX19zaGFyZScpICkge1xyXG5cclxuXHRcdFx0XHRcdGJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdpcy1vcGVuJyk7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0YnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9wZW4nKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS1hcnRpY2xlJykpOyIsIiggYnJhbmRzID0+IHtcclxuXHJcblx0aWYoIGJyYW5kcyApIHtcclxuXHJcblx0XHRjb25zdCBncm91cCA9IGJyYW5kcy5xdWVyeVNlbGVjdG9yQWxsKCcuYnJhbmRzX19ncm91cCcpO1xyXG5cclxuXHRcdC8vIGhhc2hcclxuXHJcblx0XHRjb25zdCBzZXRTdGFnZSA9ICgpPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgaGFzaCA9IGxvY2F0aW9uLmhhc2gudG9Mb3dlckNhc2UoKS5zbGljZSgxKTtcclxuXHJcblx0XHRcdFsuLi5ncm91cF0uZm9yRWFjaCggaXRlbSA9PiB7XHJcblxyXG5cdFx0XHRcdGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScsIGl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWhhc2gnKS50b0xvd2VyQ2FzZSgpICE9PSBoYXNoICYmIGhhc2ggKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIHNldFN0YWdlKTtcclxuXHJcblx0XHRpZiAoIGxvY2F0aW9uLmhhc2ggKSB7XHJcblxyXG5cdFx0XHRzZXRUaW1lb3V0KCBzZXRTdGFnZSApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHQvLyBidG5zXHJcblxyXG5cdFx0Y29uc3QgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5icmFuZHMtc29ydF9fYnRuJyk7XHJcblxyXG5cdFx0Wy4uLmJ0bnNdLmZvckVhY2goIGxpbmsgPT4ge1xyXG5cclxuXHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdFx0aWYgKCBsaW5rLmhyZWYuaW5jbHVkZXMoJyMnKSApIHtcclxuXHJcblx0XHRcdFx0XHRsb2NhdGlvbi5oYXNoID0gbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcclxuXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRoaXN0b3J5LnB1c2hTdGF0ZSgnJywgZG9jdW1lbnQudGl0bGUsIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHNldFN0YWdlKCk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJyYW5kcycpKTsiLCIoIGZvcm0gPT4ge1xyXG5cclxuXHRpZiggZm9ybSApIHtcclxuXHJcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQsXHJcblx0XHRcdFx0ICBpdGVtID0gdGFyZ2V0LmNsb3Nlc3QoJy5jYXJ0X19pdGVtJyk7XHJcblxyXG5cdFx0XHQvLyByZW1vdmVcclxuXHJcblx0XHRcdGlmICggdGFyZ2V0LmNsb3Nlc3QoJy5jYXJ0LWl0ZW1fX3JlbW92ZScpICkge1xyXG5cclxuXHRcdFx0XHRpdGVtLnN0eWxlLmhlaWdodCA9IGl0ZW0uY2xpZW50SGVpZ2h0ICsgXCJweFwiO1xyXG5cclxuXHRcdFx0XHRpdGVtLmFkZEV2ZW50TGlzdGVuZXIod2luZG93LmNzc0FuaW1hdGlvbigndHJhbnNpdGlvbicpLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBldmVudC5wcm9wZXJ0eU5hbWUgPT09ICdoZWlnaHQnICYmIGl0ZW0uY2xpZW50SGVpZ2h0ID09PSAwICkge1xyXG5cclxuXHRcdFx0XHRcdFx0aXRlbS5yZW1vdmUoKTtcclxuXHJcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoICgpPT4gZm9ybS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpLDEwMCk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0c2V0VGltZW91dCggKCk9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ2lzLXJlbW92ZScpICk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gc3VibWl0XHJcblxyXG5cdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRmZXRjaChmb3JtLmdldEF0dHJpYnV0ZSgnYWN0aW9uJyksIHtcclxuXHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRib2R5OiBuZXcgRm9ybURhdGEoZm9ybSlcclxuXHRcdFx0fSlcclxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxyXG5cdFx0XHQudGhlbihyZXN1bHQgPT4ge1xyXG5cclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cclxuXHRcdC8vICsgfCAtXHJcblxyXG5cdFx0Y29uc3QgcXVhbnRpdHkgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJ0LXF1YW50aXR5Jyk7XHJcblxyXG5cdFx0Wy4uLnF1YW50aXR5XS5mb3JFYWNoKCBlbCA9PiB7XHJcblxyXG5cdFx0XHRsZXQgdmFsdWUgPSBudWxsO1xyXG5cclxuXHRcdFx0Y29uc3QgdXAgPSBlbC5xdWVyeVNlbGVjdG9yKCcuY2FydC1xdWFudGl0eV9fYnRuLS11cCcpLFxyXG5cdFx0XHRcdCAgZG93biA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0LXF1YW50aXR5X19idG4tLWRvd24nKSxcclxuXHRcdFx0XHQgIGNvdW50ID0gZWwucXVlcnlTZWxlY3RvcignLmNhcnQtcXVhbnRpdHlfX2NvdW50Jyk7XHJcblxyXG5cdFx0XHR1cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcblx0XHRcdFx0dmFsdWUgPSBwYXJzZUludChjb3VudC52YWx1ZSk7XHJcblxyXG5cdFx0XHRcdGNvdW50LnZhbHVlID0gaXNOYU4odmFsdWUpID8gMSA6IHZhbHVlICsgMTtcclxuXHJcblx0XHRcdFx0Zm9ybS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRkb3duLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHR2YWx1ZSA9IHBhcnNlSW50KGNvdW50LnZhbHVlKTtcclxuXHJcblx0XHRcdFx0aWYoIGlzTmFOKHZhbHVlKSB8fCB2YWx1ZSA8IDIgKSB7XHJcblxyXG5cdFx0XHRcdFx0dmFsdWUgPSAyO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGNvdW50LnZhbHVlID0gdmFsdWUgLSAxO1xyXG5cclxuXHRcdFx0XHRmb3JtLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGNvdW50LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdGZvcm0uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Y291bnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdHNldFRpbWVvdXQoICgpID0+IGNvdW50LnNldFNlbGVjdGlvblJhbmdlKDAsOSksIDEwMCk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGNvdW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRjb25zdCB2YWwgPSBjb3VudC52YWx1ZS5yZXBsYWNlKC9bXFxEXS9nLCAnJyk7XHJcblxyXG5cdFx0XHRcdGlmICggaXNOYU4odmFsKSApIHtcclxuXHJcblx0XHRcdFx0XHR2YWwgPSAxO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGNvdW50LnZhbHVlID0gdmFsO1xyXG5cclxuXHRcdFx0XHRmb3JtLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0JykpOyIsIiggY2FyZHMgPT4ge1xyXG5cclxuXHRpZiggY2FyZHMubGVuZ3RoICkge1xyXG5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRjYXJkcy5mb3JFYWNoKCBjYXJkID0+IHtcclxuXHJcblx0XHRcdFx0Y29uc3QgbGlzdFRhZ3MgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5jb25zdWx0YXRpb25zLWNhcmRfX3F1ZXN0aW9uLXRhZ3MnKSxcclxuXHRcdFx0XHRcdCAgaXRlbVRhZ3MgPSBjYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb25zdWx0YXRpb25zLWNhcmRfX3F1ZXN0aW9uLXRhZ3MgbGknKSxcclxuXHRcdFx0XHRcdCAgd3JhcFRhZ3MgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5jb25zdWx0YXRpb25zLWNhcmRfX3F1ZXN0aW9uLXRhZ3Mtd3JhcCcpO1xyXG5cclxuXHRcdFx0XHRpZiAoIHdyYXBUYWdzLmNsaWVudEhlaWdodCA8IGxpc3RUYWdzLmNsaWVudEhlaWdodCApIHtcclxuXHJcblx0XHRcdFx0XHRjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHJcblx0XHRcdFx0XHRidG4udHlwZSA9ICdidXR0b24nO1xyXG5cdFx0XHRcdFx0YnRuLmNsYXNzTmFtZSA9ICdidG4gYnRuLS1oYXNoIGJ0bi0tc21hbGwnO1xyXG5cdFx0XHRcdFx0YnRuLnRleHRDb250ZW50ID0gd3JhcFRhZ3MuZ2V0QXR0cmlidXRlKCdkYXRhLW1vcmUnKTtcclxuXHJcblx0XHRcdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoIHdyYXBUYWdzLmNsYXNzTGlzdC5jb250YWlucygnaXMtb3BlbicpICkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHR3cmFwVGFncy5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJyk7XHJcblx0XHRcdFx0XHRcdFx0YnRuLnRleHRDb250ZW50ID0gd3JhcFRhZ3MuZ2V0QXR0cmlidXRlKCdkYXRhLW1vcmUnKTtcclxuXHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHdyYXBUYWdzLmNsYXNzTGlzdC5hZGQoJ2lzLW9wZW4nKTtcclxuXHRcdFx0XHRcdFx0XHRidG4udGV4dENvbnRlbnQgPSB3cmFwVGFncy5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGVzcycpO1xyXG5cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdHdyYXBUYWdzLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlbmQnLCBidG4pO1xyXG5cclxuXHRcdFx0XHR9O1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb25zdWx0YXRpb25zLWNhcmQnKSk7IiwiKCBkZWFkbGluZSA9PiB7XHJcblxyXG5cdGlmICggZGVhZGxpbmUubGVuZ3RoID4gMCApIHtcclxuXHJcblx0XHRjb25zdCBnZXRUaW1lUmVtYWluaW5nID0gZW5kdGltZSA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCB0b3RhbCA9IERhdGUucGFyc2UoZW5kdGltZSkgLSBEYXRlLnBhcnNlKG5ldyBEYXRlKCkpLFxyXG5cdFx0XHRcdCAgc2Vjb25kcyA9IE1hdGguZmxvb3IoKHRvdGFsIC8gMTAwMCkgJSA2MCksXHJcblx0XHRcdFx0ICBtaW51dGVzID0gTWF0aC5mbG9vcigodG90YWwgLyAxMDAwIC8gNjApICUgNjApLFxyXG5cdFx0XHRcdCAgaG91cnMgPSBNYXRoLmZsb29yKCh0b3RhbCAvICgxMDAwICogNjAgKiA2MCkpICUgMjQpLFxyXG5cdFx0XHRcdCAgZGF5cyA9IE1hdGguZmxvb3IodG90YWwgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHt0b3RhbCwgZGF5cywgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHN9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGluaXQgPSAoZWwsIGVuZHRpbWUsIGV4cHJlc3Npb25zKSA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCB1cGRhdGVDbG9jayA9ICgpPT4ge1xyXG5cclxuXHRcdFx0XHRjb25zdCB0ID0gZ2V0VGltZVJlbWFpbmluZyhlbmR0aW1lKTtcclxuXHJcblx0XHRcdFx0ZWwudGV4dENvbnRlbnQgPSB0LmRheXMgKyAnICcgKyB3aW5kb3cuZGVjbGVuc2lvbih0LmRheXMsIGV4cHJlc3Npb25zKSArICcgJyArICgnMCcgKyB0LmhvdXJzKS5zbGljZSgtMikgKyAnOicgKyAoJzAnICsgdC5taW51dGVzKS5zbGljZSgtMikgKyAnOicgKyAoJzAnICsgdC5zZWNvbmRzKS5zbGljZSgtMik7XHJcblxyXG5cdFx0XHRcdGlmICggdC50b3RhbCA+IDAgKSB7XHJcblxyXG5cdFx0XHRcdFx0c2V0VGltZW91dCggdXBkYXRlQ2xvY2ssIDEwMDApO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR1cGRhdGVDbG9jaygpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRbLi4uZGVhZGxpbmVdLmZvckVhY2goIGVsID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IHRpbWVyID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWRlYWRsaW5lJyksXHJcblx0XHRcdFx0ICBleHByZXNzaW9ucyA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1kZWNsZW5zaW9uJykuc3BsaXQoJ3wnKTtcclxuXHJcblx0XHRcdGluaXQoIGVsLCB0aW1lciwgZXhwcmVzc2lvbnMgKTtcclxuXHJcblx0XHRcdHNldFRpbWVvdXQoICgpPT4ge1xyXG5cclxuXHRcdFx0XHRpZiAoIGVsLmNsaWVudFdpZHRoID4gMCApIHtcclxuXHJcblx0XHRcdFx0XHRlbC5zdHlsZS53aWR0aCA9IGVsLmNsaWVudFdpZHRoICsgJ3B4JztcclxuXHRcdFx0XHRcdGVsLnN0eWxlLnRleHRBbGlnbiA9ICdsZWZ0JztcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSwgMTAwMCk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWRlYWRsaW5lXScpKTsiLCIoICgpID0+IHtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdC8vICDQndCw0YjQu9C4INC00LXRiNC10LLQu9C1P1xyXG5cclxuXHRcdGNvbnN0IGJlc3RQcmljZSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuanMtYmVzdC1wcmljZScpO1xyXG5cclxuXHRcdGlmICggYmVzdFByaWNlICkge1xyXG5cclxuXHRcdFx0Y29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJldmlldy1jYXJkLXJvdy10ZW1wbGF0ZScpLmlubmVySFRNTCxcclxuXHRcdFx0XHQgIHByb2R1Y3QgPSBiZXN0UHJpY2UuY2xvc2VzdCgnLnByb2R1Y3QnKTtcclxuXHRcdFx0XHQgIHBhcmFtID0ge307XHJcblxyXG5cdFx0XHRpZiAoIHByb2R1Y3QgKSB7XHJcblxyXG5cdFx0XHRcdHBhcmFtLmlkICAgICAgICA9IHByb2R1Y3QucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtYnV5JykuaWQudmFsdWU7XHJcblx0XHRcdFx0cGFyYW0ubGluayAgICAgID0gbG9jYXRpb24uaHJlZjtcclxuXHRcdFx0XHRwYXJhbS5wcmljZSAgICAgPSBwYXJzZUludChwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcmljZV9fdmFsdWUnKS50ZXh0Q29udGVudCk7XHJcblx0XHRcdFx0cGFyYW0ucHJpY2VPbGQgID0gcHJvZHVjdC5xdWVyeVNlbGVjdG9yKCdkYXRhLXByaWNlLW9sZCcpO1xyXG5cdFx0XHRcdHBhcmFtLmltZyAgICAgICA9IHByb2R1Y3QucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtZ2FsbGVyeSBpbWcnKS5zcmM7XHJcblx0XHRcdFx0cGFyYW0uaW1nMnggICAgID0gcHJvZHVjdC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1nYWxsZXJ5IGltZycpLnNyYztcclxuXHRcdFx0XHRwYXJhbS5uYW1lICAgICAgPSBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0X190aXRsZScpLnRleHRDb250ZW50O1xyXG5cclxuXHRcdFx0XHRpZiAoIHByb2R1Y3QucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtYnV5JykuYXJ0aWNsZWlkICkge1xyXG5cclxuXHRcdFx0XHRcdHBhcmFtLmFydGljbGVpZCA9IHByb2R1Y3QucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtYnV5JykuYXJ0aWNsZWlkLnZhbHVlO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmICggcHJvZHVjdC5xdWVyeVNlbGVjdG9yKCcucHJpY2VfX29sZCcpICkge1xyXG5cclxuXHRcdFx0XHRcdHBhcmFtLnByaWNlT2xkID0gcGFyc2VJbnQocHJvZHVjdC5xdWVyeVNlbGVjdG9yKCcucHJpY2VfX29sZCcpLnRleHRDb250ZW50KTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHJcblx0XHRcdFx0cGFyYW0uaWQgICAgICAgID0gYmVzdFByaWNlLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xyXG5cdFx0XHRcdHBhcmFtLmFydGljbGVpZCA9IGJlc3RQcmljZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXJ0aWNsZWlkJyk7XHJcblx0XHRcdFx0cGFyYW0ubGluayAgICAgID0gYmVzdFByaWNlLmdldEF0dHJpYnV0ZSgnZGF0YS1saW5rJyk7XHJcblx0XHRcdFx0cGFyYW0ucHJpY2UgICAgID0gYmVzdFByaWNlLmdldEF0dHJpYnV0ZSgnZGF0YS1wcmljZScpO1xyXG5cdFx0XHRcdHBhcmFtLnByaWNlT2xkICA9IGJlc3RQcmljZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2Utb2xkJyk7XHJcblx0XHRcdFx0cGFyYW0uaW1nICAgICAgID0gYmVzdFByaWNlLmdldEF0dHJpYnV0ZSgnZGF0YS1pbWcnKTtcclxuXHRcdFx0XHRwYXJhbS5pbWcyeCAgICAgPSBiZXN0UHJpY2UuZ2V0QXR0cmlidXRlKCdkYXRhLWltZzJ4Jyk7XHJcblx0XHRcdFx0cGFyYW0ubmFtZSAgICAgID0gYmVzdFByaWNlLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJyk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtZm9ybS1iZXN0LXByaWNlLXByb2R1Y3QnKS5pbm5lckhUTUwgPSBNdXN0YWNoZS5yZW5kZXIodGVtcGxhdGUsIHBhcmFtKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gINCd0LDQudGC0Lgg0LDQvdCw0LvQvtCz0LjRh9C90YvQuSDRgtC+0LLQsNGAXHJcblxyXG5cdFx0Y29uc3QgZmluZEFuYWxvZ3VlID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5qcy1maW5kLWFuYWxvZ3VlJyk7XHJcblxyXG5cdFx0aWYgKCBmaW5kQW5hbG9ndWUgKSB7XHJcblxyXG5cdFx0XHRjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmV2aWV3LWNhcmQtcm93LXRlbXBsYXRlJykuaW5uZXJIVE1MLFxyXG5cdFx0XHRcdCAgcGFyYW0gPSB7fTtcclxuXHJcblx0XHRcdHBhcmFtLmlkICAgICAgICA9IGZpbmRBbmFsb2d1ZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuXHRcdFx0cGFyYW0uYXJ0aWNsZWlkID0gZmluZEFuYWxvZ3VlLmdldEF0dHJpYnV0ZSgnZGF0YS1hcnRpY2xlaWQnKTtcclxuXHRcdFx0cGFyYW0ubGluayAgICAgID0gZmluZEFuYWxvZ3VlLmdldEF0dHJpYnV0ZSgnZGF0YS1saW5rJyk7XHJcblx0XHRcdHBhcmFtLnByaWNlICAgICA9IGZpbmRBbmFsb2d1ZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2UnKTtcclxuXHRcdFx0cGFyYW0ucHJpY2VPbGQgID0gZmluZEFuYWxvZ3VlLmdldEF0dHJpYnV0ZSgnZGF0YS1wcmljZS1vbGQnKTtcclxuXHRcdFx0cGFyYW0uaW1nICAgICAgID0gZmluZEFuYWxvZ3VlLmdldEF0dHJpYnV0ZSgnZGF0YS1pbWcnKTtcclxuXHRcdFx0cGFyYW0uaW1nMnggICAgID0gZmluZEFuYWxvZ3VlLmdldEF0dHJpYnV0ZSgnZGF0YS1pbWcyeCcpO1xyXG5cdFx0XHRwYXJhbS5uYW1lICAgICAgPSBmaW5kQW5hbG9ndWUuZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKTtcclxuXHJcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1mb3JtLWZpbmQtYW5hbG9ndWUtcHJvZHVjdCcpLmlubmVySFRNTCA9IE11c3RhY2hlLnJlbmRlcih0ZW1wbGF0ZSwgcGFyYW0pO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHQvLyAg0KPQstC10LTQvtC80LjRgtGMICAvINC90LDQudGC0Lgg0LDQvdCw0LvQvtCzXHJcblxyXG5cdFx0Y29uc3QgZmluZE5vdGlmeSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuanMtZmluZC1ub3RpZnknKTtcclxuXHJcblx0XHRpZiAoZmluZE5vdGlmeSkge1xyXG5cclxuXHRcdFx0Y29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJldmlldy1jYXJkLXJvdy10ZW1wbGF0ZScpLmlubmVySFRNTCxcclxuXHRcdFx0XHQgIHByb2R1Y3QgPSBmaW5kTm90aWZ5LmNsb3Nlc3QoJy5wcm9kdWN0Jyk7XHJcblx0XHRcdFx0ICBwcmV2aWV3Q2FyZCA9IGZpbmROb3RpZnkuY2xvc2VzdCgnLnByZXZpZXctY2FyZCcpLFxyXG5cdFx0XHRcdCAgcHJvZHVjdE1vZGFsID0gZmluZE5vdGlmeS5jbG9zZXN0KCcjcHJldmlldy1jYXJkLWNvbG9yJyksXHJcblx0XHRcdFx0ICBwYXJhbSA9IHt9O1xyXG5cclxuXHRcdFx0aWYgKCBwcm9kdWN0ICkge1xyXG5cclxuXHRcdFx0XHRwYXJhbS5pZCAgICAgICAgPSBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWJ1eScpLmlkLnZhbHVlO1xyXG5cdFx0XHRcdHBhcmFtLmxpbmsgICAgICA9IGxvY2F0aW9uLmhyZWY7XHJcblx0XHRcdFx0cGFyYW0ucHJpY2UgICAgID0gcGFyc2VJbnQocHJvZHVjdC5xdWVyeVNlbGVjdG9yKCcucHJpY2VfX3ZhbHVlJykudGV4dENvbnRlbnQpO1xyXG5cdFx0XHRcdHBhcmFtLnByaWNlT2xkICA9IHByb2R1Y3QucXVlcnlTZWxlY3RvcignZGF0YS1wcmljZS1vbGQnKTtcclxuXHRcdFx0XHRwYXJhbS5pbWcgICAgICAgPSBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWdhbGxlcnkgaW1nJykuc3JjO1xyXG5cdFx0XHRcdHBhcmFtLmltZzJ4ICAgICA9IHByb2R1Y3QucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtZ2FsbGVyeSBpbWcnKS5zcmM7XHJcblx0XHRcdFx0cGFyYW0ubmFtZSAgICAgID0gcHJvZHVjdC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdF9fdGl0bGUnKS50ZXh0Q29udGVudDtcclxuXHJcblx0XHRcdFx0aWYgKCBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWJ1eScpLmFydGljbGVpZCApIHtcclxuXHJcblx0XHRcdFx0XHRwYXJhbS5hcnRpY2xlaWQgPSBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWJ1eScpLmFydGljbGVpZC52YWx1ZTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoIHByb2R1Y3QucXVlcnlTZWxlY3RvcignLnByaWNlX19vbGQnKSApIHtcclxuXHJcblx0XHRcdFx0XHRwYXJhbS5wcmljZU9sZCA9IHBhcnNlSW50KHByb2R1Y3QucXVlcnlTZWxlY3RvcignLnByaWNlX19vbGQnKS50ZXh0Q29udGVudCk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0gZWxzZSBpZiAoIHByZXZpZXdDYXJkICkge1xyXG5cclxuXHRcdFx0XHRwYXJhbS5pZCAgICAgICAgPSBwcmV2aWV3Q2FyZC5xdWVyeVNlbGVjdG9yKCcucHJldmlldy1jYXJkX19mb3JtJykuZWxlbWVudHMuaWQudmFsdWU7XHJcblx0XHRcdFx0cGFyYW0ubGluayAgICAgID0gcHJldmlld0NhcmQucXVlcnlTZWxlY3RvcignLnByZXZpZXctY2FyZF9fdGl0bGUnKS5ocmVmO1xyXG5cdFx0XHRcdHBhcmFtLnByaWNlICAgICA9IHBhcnNlSW50KHByZXZpZXdDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5wcmljZV9fdmFsdWUnKS50ZXh0Q29udGVudCk7XHJcblx0XHRcdFx0cGFyYW0uaW1nICAgICAgID0gcHJldmlld0NhcmQucXVlcnlTZWxlY3RvcignLnByZXZpZXctY2FyZF9faW1nIGltZycpLnNyYztcclxuXHRcdFx0XHRwYXJhbS5pbWcyeCAgICAgPSBwcmV2aWV3Q2FyZC5xdWVyeVNlbGVjdG9yKCcucHJldmlldy1jYXJkX19pbWcgaW1nJykuc3JjO1xyXG5cdFx0XHRcdHBhcmFtLm5hbWUgICAgICA9IHByZXZpZXdDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aWV3LWNhcmRfX2ltZyBpbWcnKS5hbHQ7XHJcblxyXG5cdFx0XHRcdGlmICggcHJldmlld0NhcmQucXVlcnlTZWxlY3RvcignLnByZXZpZXctY2FyZF9fZm9ybScpLmVsZW1lbnRzLmFydGljbGVpZCApIHtcclxuXHJcblx0XHRcdFx0XHRwYXJhbS5hcnRpY2xlaWQgPSBwcmV2aWV3Q2FyZC5xdWVyeVNlbGVjdG9yKCcucHJldmlldy1jYXJkX19mb3JtJykuZWxlbWVudHMuYXJ0aWNsZWlkLnZhbHVlO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmICggcHJldmlld0NhcmQucXVlcnlTZWxlY3RvcignLnByaWNlX19vbGQnKSApIHtcclxuXHJcblx0XHRcdFx0XHRwYXJhbS5wcmljZU9sZCA9IHBhcnNlSW50KHByZXZpZXdDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5wcmljZV9fb2xkJykudGV4dENvbnRlbnQpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIHByb2R1Y3RNb2RhbCApIHtcclxuXHJcblx0XHRcdFx0Y29uc3QgY2hlY2tlZCA9IFsuLi5wcm9kdWN0TW9kYWwuZWxlbWVudHMuYXJ0aWNsZWlkXS5maW5kKCBlbCA9PiBlbC5jaGVja2VkICk7XHJcblxyXG5cdFx0XHRcdHBhcmFtLmlkICAgICAgICA9IHByb2R1Y3RNb2RhbC5lbGVtZW50cy5pZC52YWx1ZTtcclxuXHRcdFx0XHRwYXJhbS5hcnRpY2xlaWQgPSBjaGVja2VkLnZhbHVlO1xyXG5cdFx0XHRcdHBhcmFtLmxpbmsgICAgICA9IHByb2R1Y3RNb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY2FyZC1jb2xvcl9fdGl0bGUgYScpLmhyZWY7XHJcblx0XHRcdFx0cGFyYW0ucHJpY2UgICAgID0gcGFyc2VJbnQoY2hlY2tlZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2UnKSk7XHJcblx0XHRcdFx0cGFyYW0uaW1nICAgICAgID0gY2hlY2tlZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJyk7XHJcblx0XHRcdFx0cGFyYW0uaW1nMnggICAgID0gY2hlY2tlZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJyk7XHJcblx0XHRcdFx0cGFyYW0ubmFtZSAgICAgID0gcHJvZHVjdE1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jYXJkLWNvbG9yX190aXRsZScpLnRleHRDb250ZW50O1xyXG5cclxuXHRcdFx0XHRpZiAoIGNoZWNrZWQuZ2V0QXR0cmlidXRlKCdkYXRhLXByaWNlLW9sZCcpICkge1xyXG5cclxuXHRcdFx0XHRcdHBhcmFtLnByaWNlT2xkID0gcGFyc2VJbnQoY2hlY2tlZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2Utb2xkJykpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtZm9ybS1maW5kLW5vdGlmeS1wcm9kdWN0JykuaW5uZXJIVE1MID0gTXVzdGFjaGUucmVuZGVyKHRlbXBsYXRlLCBwYXJhbSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdC8vINCy0YvQsdC+0YAg0L/QvtC00YLQvtCy0LDRgNC+0LIsINC60LDRgtCw0LvQvtCzXHJcblxyXG5cdFx0Y29uc3QgYnRuU2VsZWN0TGlzdFRvZ2dsZSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuanMtc2VsZWN0LWxpc3QtdG9nZ2xlJyk7XHJcblxyXG5cdFx0aWYgKGJ0blNlbGVjdExpc3RUb2dnbGUpIHtcclxuXHJcblx0XHRcdGJ0blNlbGVjdExpc3RUb2dnbGUuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtb3BlbicpO1xyXG5cclxuXHRcdH1cclxuXHJcbi8qXHJcblxyXG5cdFx0Y29uc3QgYnRuc1NlbGVjdExpc3RUb2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtc2VsZWN0LWxpc3QtdG9nZ2xlJyk7XHJcblxyXG5cdFx0aWYgKCBidG5zU2VsZWN0TGlzdFRvZ2dsZS5sZW5ndGggPiAwICkge1xyXG5cclxuXHRcdFx0Y29uc3QgYnRuU2VsZWN0TGlzdFRvZ2dsZSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuanMtc2VsZWN0LWxpc3QtdG9nZ2xlJyk7XHJcblxyXG5cdFx0XHRpZiAoYnRuU2VsZWN0TGlzdFRvZ2dsZSkge1xyXG5cclxuXHRcdFx0XHRbLi4uYnRuc1NlbGVjdExpc3RUb2dnbGVdLmZvckVhY2goIGJ0biA9PiBidG4uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtb3BlbicsIGJ0biA9PT0gYnRuU2VsZWN0TGlzdFRvZ2dsZSAmJiBidG5TZWxlY3RMaXN0VG9nZ2xlLmNsYXNzTGlzdC5jb250YWlucygnaXMtb3BlbicpID09PSBmYWxzZSkpO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHJcblx0XHRcdFx0Wy4uLmJ0bnNTZWxlY3RMaXN0VG9nZ2xlXS5mb3JFYWNoKCBidG4gPT4gYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9wZW4nKSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSovXHJcblx0fSk7XHJcblxyXG59KSgpOyIsIi8vIGZpbHRlclxyXG4oIGZpbHRlciA9PiB7XHJcblxyXG5cdGlmKCFmaWx0ZXIpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Y29uc3QgaXRlbXMgPSBmaWx0ZXIucXVlcnlTZWxlY3RvckFsbCgnLmZpbHRlci1yb3dfX2l0ZW0nKSxcclxuXHRcdCAgaXRlbVJlc2V0ID0gZmlsdGVyLnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXItcm93X19pdGVtLS1yZXNldCcpO1xyXG5cclxuXHQvLyBjaGFuZ2VcclxuXHJcblx0ZmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRjb25zdCBpdGVtID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5maWx0ZXItcm93X19pdGVtJyk7XHJcblxyXG5cdFx0bGV0IGNoZWNrZWQgPSBmYWxzZTtcclxuXHJcblx0XHRbLi4uaXRlbS5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tib3hfX2lucHV0JyldLmZvckVhY2goIGNoZWNrYm94ID0+IHtcclxuXHJcblx0XHRcdGlmICggY2hlY2tib3guY2hlY2tlZCApIHtcclxuXHJcblx0XHRcdFx0Y2hlY2tlZCA9IHRydWU7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0aXRlbS5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyLXJvd19fYnRuJykuY2xhc3NMaXN0LnRvZ2dsZSgnYnRuLS1vdXRsaW5lJywgY2hlY2tlZCA9PT0gZmFsc2UpO1xyXG5cclxuXHRcdGl0ZW1SZXNldC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyLXJvd19fYnRuJykuY2xhc3NMaXN0LnRvZ2dsZSgnYnRuLS1vdXRsaW5lJywgY2hlY2tlZCA9PT0gdHJ1ZSk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHQvLyByZXNldFxyXG5cclxuXHRmaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcigncmVzZXQnLCAoKT0+IHtcclxuXHJcblx0XHRbLi4uaXRlbXNdLmZvckVhY2goIGl0ZW0gPT4gaXRlbS5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyLXJvd19fYnRuJykuY2xhc3NMaXN0LnRvZ2dsZSgnYnRuLS1vdXRsaW5lJywgaXRlbSAhPT0gaXRlbVJlc2V0KSApO1xyXG5cclxuXHR9KTtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcblxyXG5cdFx0Y29uc3QgaXNJdGVtID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5maWx0ZXItcm93X19pdGVtJyk7XHJcblxyXG5cdFx0aWYgKCBpc0l0ZW0gKSB7XHJcblxyXG5cdFx0XHRbLi4uaXRlbXNdLmZvckVhY2goIGl0ZW0gPT4ge1xyXG5cclxuXHRcdFx0XHRpdGVtLmNsYXNzTGlzdC50b2dnbGUoJ2lzLW9wZW4nLCBpdGVtID09PSBpc0l0ZW0gJiYgaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLW9wZW4nKSA9PT0gZmFsc2UgKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRbLi4uaXRlbXNdLmZvckVhY2goIGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJykgKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbHRlci1yb3cnKSk7IiwiLy8gZmlsdGVyXHJcbiggZmlsdGVyID0+IHtcclxuXHJcblx0aWYoIWZpbHRlcikge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHQvLyBzY3JvbGxUb1xyXG5cdGNvbnN0IHNjcm9sbFRvID0gKGVsZW1lbnQsIHRvLCBkdXJhdGlvbiA9IDcwKSA9PiB7XHJcblxyXG5cdFx0aWYgKGR1cmF0aW9uIDw9IDApIHJldHVybjtcclxuXHJcblx0XHRjb25zdCBkaWZmZXJlbmNlID0gdG8gLSBlbGVtZW50LnNjcm9sbFRvcCxcclxuXHRcdFx0ICBwZXJUaWNrID0gZGlmZmVyZW5jZSAvIGR1cmF0aW9uICogMTA7XHJcblxyXG5cdFx0c2V0VGltZW91dCggKCk9PiB7XHJcblxyXG5cdFx0XHRlbGVtZW50LnNjcm9sbFRvcCA9IGVsZW1lbnQuc2Nyb2xsVG9wICsgcGVyVGljaztcclxuXHJcblx0XHRcdGlmIChlbGVtZW50LnNjcm9sbFRvcCA9PT0gdG8pIHJldHVybjtcclxuXHJcblx0XHRcdHNjcm9sbFRvKGVsZW1lbnQsIHRvLCBkdXJhdGlvbiAtIDEwKTtcclxuXHJcblx0XHR9LCAxMCk7XHJcblxyXG5cdH1cclxuXHJcblxyXG5cdGxldCB3aW5kb3dTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG5cdGNvbnN0IG1vYmlsZU9wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtZmlsdGVyLW1vYmlsZS1vcGVuJyk7XHJcblxyXG5cdC8vIGNoYW5nZVxyXG5cclxuXHRmaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0Y29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuXHRcdC8vIGxpdmUtc2VhcmNoXHJcblxyXG5cdFx0aWYgKCB0YXJnZXQuY2xvc2VzdCgnLmpzLWxpdmUtc2VhcmNoX19pbnB1dCcpICkge1xyXG5cclxuXHRcdFx0Y29uc3QgdmFsdWUgPSB0YXJnZXQuY2xvc2VzdCgnLmpzLWxpdmUtc2VhcmNoX19pbnB1dCcpLnZhbHVlLnRvTG93ZXJDYXNlKCksXHJcblx0XHRcdFx0ICBsaXZlU2VhcmNoID0gdGFyZ2V0LmNsb3Nlc3QoJy5qcy1saXZlLXNlYXJjaCcpLFxyXG5cdFx0XHRcdCAgaXRlbSA9IGxpdmVTZWFyY2gucXVlcnlTZWxlY3RvckFsbCgnLmpzLWxpdmUtc2VhcmNoX19pdGVtJyksXHJcblx0XHRcdFx0ICByZXNldCA9IGxpdmVTZWFyY2gucXVlcnlTZWxlY3RvcignLmpzLWxpdmUtc2VhcmNoX19yZXNldCcpLFxyXG5cdFx0XHRcdCAgaW5wdXQgPSBsaXZlU2VhcmNoLnF1ZXJ5U2VsZWN0b3IoJy5qcy1saXZlLXNlYXJjaF9faW5wdXQnKTtcclxuXHJcblx0XHRcdGlmICggdmFsdWUubGVuZ3RoID09PSAwICkge1xyXG5cclxuXHRcdFx0XHRyZXNldC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdFsuLi5pdGVtXS5mb3JFYWNoKCBlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykgKTtcclxuXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmVzZXQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuXHRcdFx0Wy4uLml0ZW1dLmZvckVhY2goIGVsID0+IGVsLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGl2ZS1zZWFyY2gnKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHZhbHVlKSA9PT0gZmFsc2UgKSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcblx0Ly8gY2xpY2tcclxuXHJcblx0ZmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuXHJcblx0XHQvLyBsZWdlbmQgdG9nZ2xlXHJcblxyXG5cdFx0aWYgKCB0YXJnZXQuY2xvc2VzdCgnLmZpbHRlcl9fbGVnZW5kJykgKSB7XHJcblxyXG5cdFx0XHR0YXJnZXQuY2xvc2VzdCgnLmZpbHRlcl9fbGVnZW5kJykuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtb3BlbicpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHQvLyBsZXR0ZXJcclxuXHJcblx0XHRpZiAoIHRhcmdldC5jbG9zZXN0KCcuanMtbGV0dGVyX19idG4nKSApIHtcclxuXHJcblx0XHRcdGNvbnN0IGJveCA9IHRhcmdldC5jbG9zZXN0KCcuanMtbGV0dGVyJyksXHJcblx0XHRcdFx0ICBzY3JvbGxMaXN0ID0gYm94LnF1ZXJ5U2VsZWN0b3IoJy5qcy1sZXR0ZXJfX3Njcm9sbCcpLFxyXG5cdFx0XHRcdCAgaXRlbSA9IGJveC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtbGV0dGVyX19pdGVtJyksXHJcblx0XHRcdFx0ICBsZXR0ZXIgPSB0YXJnZXQuY2xvc2VzdCgnLmpzLWxldHRlcl9fYnRuJykuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJyk7XHJcblxyXG5cdFx0XHRpZiAoIGxldHRlciA9PT0gJ3RvcCcgKSB7XHJcblxyXG5cdFx0XHRcdHNjcm9sbFRvKHNjcm9sbExpc3QsIDApO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdFsuLi5pdGVtXS5ldmVyeSggZWwgPT4ge1xyXG5cclxuXHRcdFx0XHRpZiAoIGxldHRlciA9PT0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWxldHRlcicpICkge1xyXG5cclxuXHRcdFx0XHRcdHNjcm9sbFRvKHNjcm9sbExpc3QsIGVsLm9mZnNldFRvcCk7XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbGl2ZS1zZWFyY2hcclxuXHJcblx0XHRpZiAoIHRhcmdldC5jbG9zZXN0KCcuanMtbGl2ZS1zZWFyY2hfX3Jlc2V0JykgKSB7XHJcblxyXG5cdFx0XHRjb25zdCBsaXZlU2VhcmNoID0gdGFyZ2V0LmNsb3Nlc3QoJy5qcy1saXZlLXNlYXJjaCcpLFxyXG5cdFx0XHRcdCAgaXRlbSA9IGxpdmVTZWFyY2gucXVlcnlTZWxlY3RvckFsbCgnLmpzLWxpdmUtc2VhcmNoX19pdGVtJyksXHJcblx0XHRcdFx0ICBpbnB1dCA9IGxpdmVTZWFyY2gucXVlcnlTZWxlY3RvcignLmpzLWxpdmUtc2VhcmNoX19pbnB1dCcpO1xyXG5cclxuXHRcdFx0aW5wdXQudmFsdWUgPSAnJztcclxuXHRcdFx0dGFyZ2V0LmNsb3Nlc3QoJy5qcy1saXZlLXNlYXJjaF9fcmVzZXQnKS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRbLi4uaXRlbV0uZm9yRWFjaCggZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpICk7XHJcblxyXG5cdFx0XHRpbnB1dC5mb2N1cygpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHQvLyBmaWx0ZXIgY2xvc2VcclxuXHJcblx0XHRpZiAoIHRhcmdldC5jbG9zZXN0KCcuZmlsdGVyX19idG4tY2xvc2UnKSApIHtcclxuXHJcblx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnaXMtZmlsdGVyLXNob3cnKTtcclxuXHJcblx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLHdpbmRvd1Njcm9sbCk7XHJcblxyXG5cdFx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzY3JvbGwtYmVoYXZpb3Itb2ZmJyk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxuLy8gb3BlbiBmaWx0ZXJcclxuXHJcblx0Wy4uLm1vYmlsZU9wZW5dLmZvckVhY2goIGJ0biA9PiB7XHJcblxyXG5cdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcblxyXG5cdFx0XHR3aW5kb3dTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG5cdFx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsLWJlaGF2aW9yLW9mZicpO1xyXG5cclxuXHRcdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2lzLWZpbHRlci1zaG93Jyk7XHJcblx0XHRcdFx0d2luZG93LnNjcm9sbFRvKDAsMCk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG4vLyBzb3J0XHJcblxyXG5cdGNvbnN0IHNvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtZmlsdGVyLWNoYW5nZScpO1xyXG5cclxuXHRpZiAoc29ydCkge1xyXG5cclxuXHRcdHNvcnQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRjb25zb2xlLmxvZyhldmVudC50YXJnZXQpO1xyXG5cclxuXHRcdFx0aWYoIGZpbHRlci5lbGVtZW50c1tldmVudC50YXJnZXQubmFtZV0gKSB7XHJcblxyXG5cdFx0XHRcdGZpbHRlci5lbGVtZW50c1tldmVudC50YXJnZXQubmFtZV0udmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcblxyXG5cdFx0XHRcdGZpbHRlci5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiKSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbi8vICBmb290XHJcblxyXG5cdGNvbnN0IGZvb3QgPSBmaWx0ZXIucXVlcnlTZWxlY3RvcignLmZpbHRlcl9fZm9vdCcpO1xyXG5cclxuXHRpZiAoZm9vdCkge1xyXG5cclxuXHRcdGZpbHRlci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcclxuXHJcblx0XHRcdGZvb3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdGZpbHRlci5hZGRFdmVudExpc3RlbmVyKFwicmVzZXRcIiwgKCkgPT4ge1xyXG5cclxuXHRcdFx0Zm9vdC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyJykpOyIsIi8vIENsaXBib2FyZEpTXG5cblx0KCBlbGVtcyA9PiB7XG5cblx0XHRpZiAoIGVsZW1zLmxlbmd0aCApIHtcblxuXHRcdFx0Wy4uLmVsZW1zXS5mb3JFYWNoKCBidG4gPT4ge1xuXG5cdFx0XHRcdGNvbnN0IGNsaXBib2FyZCA9IG5ldyBDbGlwYm9hcmRKUyhidG4pO1xuXG5cdFx0XHRcdGNsaXBib2FyZC5vbignc3VjY2VzcycsICgpPT4ge1xuXG5cdFx0XHRcdFx0YnRuLmNsYXNzTGlzdC5hZGQoJ2lzLWNsaXBib2FyZC1zdWNjZXNzJyk7XG5cblx0XHRcdFx0XHRzZXRUaW1lb3V0KCAoKT0+IHtcblxuXHRcdFx0XHRcdFx0YnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWNsaXBib2FyZC1zdWNjZXNzJyk7XG5cblx0XHRcdFx0XHR9LDMwMDApO1xuXG5cdFx0XHRcdH0pO1xuXG5cdFx0XHR9KTtcblxuXHRcdH1cblxuXHR9KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1jbGlwYm9hcmQtdGV4dF0nKSk7XG5cbi8vIGF1dG9zaXplXG5cblx0YXV0b3NpemUoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndGV4dGFyZWEuYXV0b3NpemUnKSk7XG5cbi8vIGZpbGVcblxuXG4oIGZpbGV1cGxvYWQgPT4ge1xuXG5cdGlmKGZpbGV1cGxvYWQubGVuZ3RoKXtcblxuXHRcdGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpbGV1cGxvYWQtdGVtcGxhdGUnKS5pbm5lckhUTUw7XG5cblx0XHRbLi4uZmlsZXVwbG9hZF0uZm9yRWFjaCggZmlsZSA9PiB7XG5cblx0XHRcdGNvbnN0IGlucHV0ID0gZmlsZS5xdWVyeVNlbGVjdG9yKCdbdHlwZT1cImZpbGVcIl0nKSxcblx0XHRcdFx0ICBidG4gPSBmaWxlLnF1ZXJ5U2VsZWN0b3IoJy5maWxldXBsb2FkX19idG4nKTtcblxuXHRcdFx0aW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBldmVudCA9PiB7XG5cblx0XHRcdFx0YnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcblxuXHRcdFx0XHRmaWxlLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgTXVzdGFjaGUucmVuZGVyKHRlbXBsYXRlLCB7IG5hbWUgOiBpbnB1dC52YWx1ZS5yZXBsYWNlKC8uKltcXC9cXFxcXS8sICcnKSB9KSk7XG4vKlxuXHRcdFx0XHRjb25zb2xlLmxvZygnU2VsZWN0ZWQgZmlsZTogJyArIGlucHV0LmZpbGVzLml0ZW0oMCkubmFtZSk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdTZWxlY3RlZCBmaWxlOiAnICsgaW5wdXQuZmlsZXMuaXRlbSgwKS5zaXplKTtcblx0XHRcdFx0Y29uc29sZS5sb2coJ1NlbGVjdGVkIGZpbGU6ICcgKyBpbnB1dC5maWxlcy5pdGVtKDApLnR5cGUpO1xuXG4qL1x0XHRcdH0pO1xuXG5cdFx0XHRmaWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuXG5cdFx0XHRcdGlmICggZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5maWxldXBsb2FkX19yZXNldCcpICkge1xuXG5cdFx0XHRcdFx0aW5wdXQudmFsdWUgPSAnJztcblx0XHRcdFx0XHRidG4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuXHRcdFx0XHRcdGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuZmlsZXVwbG9hZF9fYnRuJykucmVtb3ZlKCk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9KTtcblxuXHRcdH0pO1xuXG5cdH1cblxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpbGV1cGxvYWQnKSk7XG5cblxuXG4oIGZpbGV1cGxvYWQgPT4ge1xuXG5cdGlmKGZpbGV1cGxvYWQubGVuZ3RoKXtcblxuXHRcdGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RyYWctYW5kLWRyb3AtdGVtcGxhdGUnKS5pbm5lckhUTUw7XG5cblx0XHRbLi4uZmlsZXVwbG9hZF0uZm9yRWFjaCggZmlsZSA9PiB7XG5cblx0XHRcdGNvbnN0IGlucHV0ID0gZmlsZS5xdWVyeVNlbGVjdG9yKCdbdHlwZT1cImZpbGVcIl0nKSxcblx0XHRcdFx0ICBidG4gPSBmaWxlLnF1ZXJ5U2VsZWN0b3IoJy5kcmFnLWFuZC1kcm9wX19idG4nKTtcblxuXHRcdFx0aW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBldmVudCA9PiB7XG5cblx0XHRcdFx0YnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcblxuXHRcdFx0XHRmaWxlLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgTXVzdGFjaGUucmVuZGVyKHRlbXBsYXRlLCB7IG5hbWUgOiBpbnB1dC52YWx1ZS5yZXBsYWNlKC8uKltcXC9cXFxcXS8sICcnKSB9KSk7XG4vKlxuXHRcdFx0XHRjb25zb2xlLmxvZygnU2VsZWN0ZWQgZmlsZTogJyArIGlucHV0LmZpbGVzLml0ZW0oMCkubmFtZSk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdTZWxlY3RlZCBmaWxlOiAnICsgaW5wdXQuZmlsZXMuaXRlbSgwKS5zaXplKTtcblx0XHRcdFx0Y29uc29sZS5sb2coJ1NlbGVjdGVkIGZpbGU6ICcgKyBpbnB1dC5maWxlcy5pdGVtKDApLnR5cGUpO1xuXG4qL1x0XHRcdH0pO1xuXG5cdFx0XHRmaWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuXG5cdFx0XHRcdGlmICggZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5kcmFnLWFuZC1kcm9wX19yZXNldCcpICkge1xuXG5cdFx0XHRcdFx0aW5wdXQudmFsdWUgPSAnJztcblx0XHRcdFx0XHRidG4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuXHRcdFx0XHRcdGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuZHJhZy1hbmQtZHJvcF9fYnRuJykucmVtb3ZlKCk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9KTtcblxuXHRcdH0pO1xuXG5cdH1cblxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyYWctYW5kLWRyb3AnKSk7XG5cblxuKCBmaWxldXBsb2FkID0+IHtcblxuXHRpZihmaWxldXBsb2FkLmxlbmd0aCl7XG5cblx0XHRjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1maWxlLXRlbXBsYXRlJykuaW5uZXJIVE1MO1xuXG5cdFx0Wy4uLmZpbGV1cGxvYWRdLmZvckVhY2goIGZpbGUgPT4ge1xuXG5cdFx0XHRjb25zdCBpbnB1dCA9IGZpbGUucXVlcnlTZWxlY3RvcignLm1vZGFsLWZpbGVfX2lucHV0JyksXG5cdFx0XHRcdCAgZGVzYyA9IGZpbGUucXVlcnlTZWxlY3RvcignLm1vZGFsLWZpbGVfX2Rlc2MnKTtcblxuXHRcdFx0aW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBldmVudCA9PiB7XG5cblx0XHRcdFx0bGV0IHZhbHVlID0gJyc7XG5cblx0XHRcdFx0Wy4uLmlucHV0LmZpbGVzXS5mb3JFYWNoKCBmaWxlID0+IHtcblxuXHRcdFx0XHRcdGlmICggdmFsdWUubGVuZ3RoICkge1xuXG5cdFx0XHRcdFx0XHR2YWx1ZSArPSAnLCAnO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0bGV0IHNpemUgPSAoZmlsZS5zaXplIC8gMTAyNCAvIDEwMjQpLnRvRml4ZWQoMik7XG5cblx0XHRcdFx0XHR2YWx1ZSArPSBmaWxlLm5hbWUgKyAnICgnICsgc2l6ZSArICfQnNCxKSc7XG5cblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0ZmlsZS5xdWVyeVNlbGVjdG9yKCcuYnRuJykucmVtb3ZlKCk7XG5cblx0XHRcdFx0aW5wdXQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmVuZCcsIE11c3RhY2hlLnJlbmRlcih0ZW1wbGF0ZSkpO1xuXG5cdFx0XHRcdGRlc2MudGV4dENvbnRlbnQgPSB2YWx1ZTtcblxuXHRcdFx0fSk7XG5cblx0XHR9KTtcblxuXHR9XG5cbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbC1maWxlJykpOyIsIlxyXG4oIGhlYWRlciA9PiB7XHJcblxyXG5cdGlmIChoZWFkZXIpIHtcclxuXHJcblx0XHRjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtY2F0YWxvZycpO1xyXG5cclxuXHRcdGxldCByZXNpemVUaW1lb3V0ID0gbnVsbDtcclxuXHJcblx0XHRpZiAoIHdpbmRvdy5pbm5lcldpZHRoID4gMTI0OSApIHtcclxuXHJcblx0XHRcdGhlYWRlci5jbGFzc0xpc3QudG9nZ2xlKCdpcy1maXhlZCcsIHdpbmRvdy5wYWdlWU9mZnNldCA+IDM2KTsgLy8gbWVudSB0b3BcclxuXHRcdFx0bWVudS5jbGFzc0xpc3QudG9nZ2xlKCdpcy10cmFuc3BhcmVudCcsIHdpbmRvdy5wYWdlWU9mZnNldCA+IDg2KTsgLy8gNjAgKyA1MyAtIDM3XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcclxuXHJcblx0XHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHtcclxuXHJcblx0XHRcdFx0aWYgKFxyXG5cdFx0XHRcdFx0cmVzaXplVGltZW91dCA9PT0gbnVsbCAmJlxyXG5cdFx0XHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsLXNob3cnKSA9PT0gZmFsc2UgJiZcclxuXHRcdFx0XHRcdHdpbmRvdy5pbm5lcldpZHRoID4gMTI0OVxyXG5cdFx0XHRcdCkge1xyXG5cclxuXHRcdFx0XHRcdHJlc2l6ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0XHRyZXNpemVUaW1lb3V0ID0gbnVsbDtcclxuXHJcblx0XHRcdFx0XHRcdGhlYWRlci5jbGFzc0xpc3QudG9nZ2xlKCdpcy1maXhlZCcsIHdpbmRvdy5wYWdlWU9mZnNldCA+IDM2KTtcclxuXHRcdFx0XHRcdFx0bWVudS5jbGFzc0xpc3QudG9nZ2xlKCdpcy10cmFuc3BhcmVudCcsIHdpbmRvdy5wYWdlWU9mZnNldCA+IDg2KTtcclxuXHJcblx0XHRcdFx0XHR9LCAxMDApO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyBzZWFyY2hcclxuXHJcblx0XHRjb25zdCBoZWFkZXJTZWFyY2ggPSBoZWFkZXIucXVlcnlTZWxlY3RvckFsbCgnLmhlYWRlci1zZWFyY2hfX2lucHV0Jyk7XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCBidG5PcGVuID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5oZWFkZXItc2VhcmNoLXNob3cnKTtcclxuXHJcblx0XHRcdGlmICggYnRuT3BlbiApIHtcclxuXHJcblx0XHRcdFx0aGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2lzLXNlYXJjaCcpO1xyXG5cclxuXHRcdFx0XHRzZXRUaW1lb3V0KCAoKSA9PiBbLi4uaGVhZGVyU2VhcmNoXS5mb3JFYWNoKCBpbnB1dCA9PiBpbnB1dC5mb2N1cygpICksIDEwMCk7XHJcblxyXG5cdFx0XHR9XHJcbi8qXHJcblx0XHRcdGlmICggZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5oZWFkZXInKSA9PT0gbnVsbCApIHtcclxuXHJcblx0XHRcdFx0aGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXNlYXJjaCcpO1xyXG5cdFx0XHRcdFsuLi5oZWFkZXJTZWFyY2hdLmZvckVhY2goIGlucHV0ID0+IGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWZvY3VzJykgKTtcclxuXHJcblx0XHRcdH1cclxuXHJcbiovXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJykpOyIsIiggZWxlbXMgPT4ge1xyXG5cclxuXHRpZighZWxlbXMubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG5cdHNjcmlwdC5zcmMgPSAnL2pzL2lucHV0bWFzay5taW4uanMnO1xyXG5cdHNjcmlwdC5vbmxvYWQgPSAoKSA9PiB7XHJcblxyXG5cdFx0Wy4uLmVsZW1zXS5mb3JFYWNoKCBlbCA9PiB7XHJcblxyXG5cdFx0XHRsZXQgbWFza0lucHV0O1xyXG5cclxuXHRcdFx0aWYoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnB1dG1hc2stLXBob25lJykpIHtcclxuXHJcblx0XHRcdFx0bWFza0lucHV0ID0gbmV3IElucHV0bWFzayh7XHJcblx0XHRcdFx0XHRtYXNrOiAnKzcgKCA5OTkgKSA5OTkgOTkgOTknLFxyXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI6ICctJ1xyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bWFza0lucHV0Lm1hc2soZWwpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9O1xyXG5cclxuXHRzZXRUaW1lb3V0KCAoKSA9PiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCksIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmYXN0TG9hZFNjcmlwdCcpID8gMCA6IDEwMDAwKTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnB1dG1hc2snKSk7IiwiKCBpdGVtcyA9PiB7XHJcblxyXG5cdGlmKCFpdGVtcy5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Wy4uLml0ZW1zXS5mb3JFYWNoKCBpdGVtID0+IHtcclxuXHJcblx0XHRjb25zdCBidG4gPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5vcmRlcmxpc3RfX3RvZ2dsZSAuYnV0dG9uJyk7XHJcblxyXG5cdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0aXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1vcGVuJyk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9yZGVybGlzdCcpKTsiLCIoIG1lbnUgPT4ge1xyXG5cclxuXHRpZihtZW51KSB7XHJcblxyXG5cdFx0bGV0IHNjcm9sbExldmVsMiA9IG51bGw7XHJcblxyXG5cdFx0Y29uc3QgYmFjayA9IG1lbnUucXVlcnlTZWxlY3RvcignLm1lbnUtY2F0YWxvZ19fYmFjaycpLFxyXG5cdFx0XHQgIGJvZHkgPSBtZW51LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWNhdGFsb2dfX2JvZHknKTtcclxuXHJcblx0XHQvLyDQuNC60L7QvdC60LAgbGV2ZWwyICtcclxuXHJcblx0XHRjb25zdCBsaW5rQnRuID0gbWVudS5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1jYXRhbG9nX19saW5rLmlzLWJ0bicpLFxyXG5cdFx0XHQgIGljb1BsdXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInN2Z1wiKTtcclxuXHJcblx0XHRpY29QbHVzLnNldEF0dHJpYnV0ZU5TKG51bGwsIFwidmlld0JveFwiLCBcIjAgMCAyNCAyNFwiKTtcclxuXHRcdGljb1BsdXMuc2V0QXR0cmlidXRlTlMobnVsbCwgXCJ3aWR0aFwiLCAyNCk7XHJcblx0XHRpY29QbHVzLnNldEF0dHJpYnV0ZU5TKG51bGwsIFwiaGVpZ2h0XCIsIDI0KTtcclxuXHRcdGljb1BsdXMuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2J1dHRvbicpO1xyXG5cclxuXHRcdGljb1BsdXMuaW5uZXJIVE1MID0gJzxyZWN0IHg9XCIxMVwiIHk9XCI2XCIgd2lkdGg9XCIyXCIgaGVpZ2h0PVwiMTJcIi8+PHJlY3QgeD1cIjZcIiB5PVwiMTFcIiB3aWR0aD1cIjEyXCIgaGVpZ2h0PVwiMlwiLz4nO1xyXG5cclxuXHRcdC8vINC40LrQvtC90LrQsCByaWdodCBsZXZlbDEg0LggbGV2ZWwyXHJcblx0XHRjb25zdCBsZXZlbF8xID0gbWVudS5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1jYXRhbG9nX19saW5rLS1hcnJvdywgLm1lbnUtY2F0YWxvZ19fbGluay0tb25seS1tb2JpbGUnKSxcclxuXHRcdFx0ICBpY29SaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwic3ZnXCIpO1xyXG5cclxuXHRcdGljb1JpZ2h0LnNldEF0dHJpYnV0ZU5TKG51bGwsIFwidmlld0JveFwiLCBcIjAgMCAyNCAyNFwiKTtcclxuXHRcdGljb1JpZ2h0LnNldEF0dHJpYnV0ZU5TKG51bGwsIFwid2lkdGhcIiwgMzIpO1xyXG5cdFx0aWNvUmlnaHQuc2V0QXR0cmlidXRlTlMobnVsbCwgXCJoZWlnaHRcIiwgMzIpO1xyXG5cdFx0aWNvUmlnaHQuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2J1dHRvbicpO1xyXG5cclxuXHRcdGljb1JpZ2h0LmlubmVySFRNTCA9ICc8dXNlIHhsaW5rOmhyZWY9XCIjc3ZnLWNoZXZyb24tcmlnaHRcIi8+JztcclxuXHJcblx0XHQvLyByZXNpemVcclxuXHJcblx0XHRjb25zdCByZXNpemUgPSAoKSA9PiB7XHJcblxyXG5cdFx0XHRpZiAoIHdpbmRvdy5pbm5lcldpZHRoIDwgMTI1MCApIHtcclxuXHJcblx0XHRcdFx0Wy4uLmxldmVsXzFdLmZvckVhY2goIGJ0biA9PiB7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBidG4ucXVlcnlTZWxlY3Rvcignc3ZnJykgPT09IG51bGwgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRidG4uYXBwZW5kKGljb1JpZ2h0LmNsb25lTm9kZSh0cnVlKSk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0Wy4uLmxpbmtCdG5dLmZvckVhY2goIGJ0biA9PiB7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBidG4ucXVlcnlTZWxlY3Rvcignc3ZnJykgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRidG4ucXVlcnlTZWxlY3Rvcignc3ZnJykucmVtb3ZlKCk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGJ0bi5hcHBlbmQoaWNvUmlnaHQuY2xvbmVOb2RlKHRydWUpKTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRiYWNrLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHRcdFx0XHRib2R5LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0Wy4uLmxldmVsXzFdLmZvckVhY2goIGJ0biA9PiB7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBidG4ucXVlcnlTZWxlY3Rvcignc3ZnJykgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRidG4ucXVlcnlTZWxlY3Rvcignc3ZnJykucmVtb3ZlKCk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0Wy4uLmxpbmtCdG5dLmZvckVhY2goIGJ0biA9PiB7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBidG4ucXVlcnlTZWxlY3Rvcignc3ZnJykgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRidG4ucXVlcnlTZWxlY3Rvcignc3ZnJykucmVtb3ZlKCk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGJ0bi5hcHBlbmQoaWNvUGx1cy5jbG9uZU5vZGUodHJ1ZSkpO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0cmVzaXplKCk7XHJcblxyXG5cdFx0bGV0IHJlc2l6ZVRpbWVvdXQgPSBudWxsLFxyXG5cdFx0XHR3aW5kb3dXaWR0aE9MZCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcclxuXHJcblx0XHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHtcclxuXHJcblx0XHRcdFx0aWYgKHJlc2l6ZVRpbWVvdXQgPT09IG51bGwpIHtcclxuXHJcblx0XHRcdFx0XHRyZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dCggKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdFx0cmVzaXplVGltZW91dCA9IG51bGw7XHJcblxyXG5cdFx0XHRcdFx0XHRpZih3aW5kb3dXaWR0aE9MZCAhPT0gd2luZG93LmlubmVyV2lkdGgpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0cmVzaXplKCk7XHJcblxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fSwgMTAwKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gZW5kIHJlc2l6ZVxyXG5cclxuXHJcblx0XHQvLyDQutC70LjQuiDQv9C+IGxldmVsMiA9PiDRgNCw0YHQutGA0YvRgtC40LUgbGV2ZWwzXHJcblxyXG5cdFx0Wy4uLmxpbmtCdG5dLmZvckVhY2goIGJ0biA9PiB7XHJcblxyXG5cdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRcdGlmICggZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ1tyb2xlPVwiYnV0dG9uXCJdJykgKSB7XHJcblxyXG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdFx0XHRidG4uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtb3BlbicpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyBtb2JpbGVcclxuXHJcblx0XHQvLyDQutC70LjQuiDQv9C+IGxldmVsMiA9PiDRgNCw0YHQutGA0YvRgtC40LUgbGV2ZWwzXHJcblxyXG5cdFx0Wy4uLmxldmVsXzFdLmZvckVhY2goIGJ0biA9PiB7XHJcblxyXG5cdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRcdGlmICggd2luZG93LmlubmVyV2lkdGggPCAxMjUwICYmIGV2ZW50LnRhcmdldC5jbG9zZXN0KCdbcm9sZT1cImJ1dHRvblwiXScpICkge1xyXG5cclxuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRcdFx0c2Nyb2xsTGV2ZWwyID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuXHRcdFx0XHRcdGJhY2suaW5uZXJIVE1MID0gYnRuLmlubmVySFRNTDtcclxuXHRcdFx0XHRcdGJvZHkuaW5uZXJIVE1MID0gYnRuLm5leHRFbGVtZW50U2libGluZy5pbm5lckhUTUw7XHJcblxyXG5cdFx0XHRcdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdFx0YmFjay5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRcdGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyBiYWNrXHJcblxyXG5cdFx0YmFjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcblx0XHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHtcclxuXHJcblx0XHRcdFx0YmFjay5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblx0XHRcdFx0Ym9keS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLHNjcm9sbExldmVsMik7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyBib2R5XHJcblxyXG5cdFx0Ym9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IGJ0biA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuaXMtYnRuJyk7XHJcblxyXG5cdFx0XHRpZiAoIGJ0biAmJiBldmVudC50YXJnZXQuY2xvc2VzdCgnW3JvbGU9XCJidXR0b25cIl0nKSApIHtcclxuXHJcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdFx0YnRuLmNsYXNzTGlzdC50b2dnbGUoJ2lzLW9wZW4nKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyBkZWxheSBob3ZlclxyXG5cclxuXHRcdGNvbnN0IGxpc3QgPSBtZW51LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWNhdGFsb2dfX2xpc3QnKTtcclxuXHJcblx0XHRsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCgpPT57XHJcblxyXG5cdFx0XHRyZXNpemVUaW1lb3V0ICYmIGNsZWFyVGltZW91dChyZXNpemVUaW1lb3V0KTtcclxuXHJcblx0XHRcdHJlc2l6ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS10cmFuc2l0aW9uRGVsYXlNZW51JywgJzBzJyk7XHJcblxyXG5cdFx0XHR9LCAxMDAwKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCgpPT57XHJcblxyXG5cdFx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdHJhbnNpdGlvbkRlbGF5TWVudScsICcxcycpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1jYXRhbG9nJykpO1xyXG5cclxuLy8gdG9vZ2xlXHJcbiggbWVudSA9PiB7XHJcblxyXG5cdC8vIGJ0biB0b2dnbGVcclxuXHJcblx0bGV0IHdpbmRvd1Njcm9sbCA9IG51bGw7XHJcblxyXG5cdCggYnRucyA9PiB7XHJcblxyXG5cdFx0Wy4uLmJ0bnNdLmZvckVhY2goIGJ0biA9PiB7XHJcblxyXG5cdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdHdpbmRvd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcblx0XHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdtZW51LXNob3cnKTtcclxuXHRcdFx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsLWJlaGF2aW9yLW9mZicpO1xyXG5cdFx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLDApO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tbWVudS1vcGVuJykpO1xyXG5cclxuXHQoIGJ0bnMgPT4ge1xyXG5cclxuXHRcdFsuLi5idG5zXS5mb3JFYWNoKCBidG4gPT4ge1xyXG5cclxuXHRcdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtc2hvdycpO1xyXG5cdFx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLHdpbmRvd1Njcm9sbCk7XHJcblxyXG5cdFx0XHRcdHNldFRpbWVvdXQoICgpID0+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzY3JvbGwtYmVoYXZpb3Itb2ZmJykgKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLW1lbnUtY2xvc2UnKSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1jYXRhbG9nJykpO1xyXG5cclxuLy8gcGFnZS1iYXJcclxuKCBidG4gPT4ge1xyXG5cclxuXHRpZiAoIGJ0biApIHtcclxuXHJcblx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRidG4uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtb3BlbicpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0aWYgKCBldmVudC50YXJnZXQuY2xvc2VzdCgnLnBhZ2UtYmFyX19tZW51LCAubGstbWVudScpID09PSBudWxsICkge1xyXG5cclxuXHRcdFx0XHRidG4uY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS1iYXJfX21lbnUtYnRuLCAubGstbWVudV9fdG9nZ2xlLWJ0bicpKTsiLCIoIG1vZGFsID0+IHtcclxuXHJcblx0aWYoIW1vZGFsKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGNvbnN0IGl0ZW1zID0gbW9kYWwucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsX19pdGVtJyksXHJcblx0XHQgIHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpLFxyXG5cdFx0ICBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtY2F0YWxvZycpLFxyXG5cdFx0ICBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyksXHJcblx0XHQgIHRpdGxlRGVmYXVsdCA9IHt9O1xyXG5cclxuXHRsZXQgYWN0aXZlTW9kYWwgPSBudWxsLFxyXG5cdFx0bWVudVRvcCA9IG51bGwsXHJcblx0XHRoZWFkZXJUb3AgPSBudWxsLFxyXG5cdFx0d2luZG93U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuXHRtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdoaWRlJywgKCkgPT4ge1xyXG5cclxuXHRcdGFjdGl2ZU1vZGFsICYmIGFjdGl2ZU1vZGFsLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwibW9kYWxDbG9zZVwiKSk7XHJcblxyXG5cdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1zaG93Jyk7XHJcblx0XHR3cmFwcGVyLnN0eWxlLnRvcCA9IDA7XHJcblx0XHR3aW5kb3cuc2Nyb2xsVG8oMCx3aW5kb3dTY3JvbGwpO1xyXG5cdFx0YWN0aXZlTW9kYWwgPSBmYWxzZTtcclxuXHJcblx0XHRtZW51LnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcclxuXHRcdGhlYWRlci5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XHJcblxyXG5cdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4ge1xyXG5cclxuXHRcdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbC1iZWhhdmlvci1vZmYnKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG5cdG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGlmKGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIikge1xyXG5cclxuXHRcdFx0bW9kYWwuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJoaWRlXCIpKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBtb2RhbFNob3cgPSAoc2VsZWN0b3IsdGl0bGUsaWQpID0+IHtcclxuXHJcblx0XHRpZighYWN0aXZlTW9kYWwpe1xyXG5cclxuXHRcdFx0d2luZG93U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuXHRcdFx0aWYgKCBoZWFkZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1maXhlZCcpICkge1xyXG5cclxuXHRcdFx0XHRtZW51VG9wID0gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShtZW51KS50b3ApLFxyXG5cdFx0XHRcdGhlYWRlclRvcCA9IHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUoaGVhZGVyKS50b3ApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHRhY3RpdmVNb2RhbCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9faXRlbS0tJyArIHNlbGVjdG9yKTtcclxuXHJcblx0XHRjb25zdCBhdXRvZm9jdXMgPSBhY3RpdmVNb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWF1dG9mb2N1cycpO1xyXG5cclxuXHRcdGlmICggYWN0aXZlTW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsX190aXRsZScpICkge1xyXG5cclxuXHRcdFx0aWYgKCB0aXRsZURlZmF1bHRbc2VsZWN0b3JdID09PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHRcdHRpdGxlRGVmYXVsdFtzZWxlY3Rvcl0gPSBhY3RpdmVNb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX3RpdGxlJykudGV4dENvbnRlbnQ7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRhY3RpdmVNb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX3RpdGxlJykudGV4dENvbnRlbnQgPSB0aXRsZSA/IHRpdGxlIDogdGl0bGVEZWZhdWx0W3NlbGVjdG9yXTtcclxuXHJcblx0XHRcdGlmICggYWN0aXZlTW9kYWwuZWxlbWVudHMuc3ViamVjdCApIHtcclxuXHJcblx0XHRcdFx0YWN0aXZlTW9kYWwuZWxlbWVudHMuc3ViamVjdC52YWx1ZSA9IHRpdGxlID8gdGl0bGUgOiB0aXRsZURlZmF1bHRbc2VsZWN0b3JdO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIGFjdGl2ZU1vZGFsLmNsYXNzTGlzdC5jb250YWlucygnZm9ybScpICYmIGFjdGl2ZU1vZGFsLmVsZW1lbnRzLmlkICkge1xyXG5cclxuXHRcdFx0YWN0aXZlTW9kYWwuZWxlbWVudHMuaWQudmFsdWUgPSBpZDtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Wy4uLml0ZW1zXS5mb3JFYWNoKCBlbCA9PiBlbC5jbGFzc0xpc3QudG9nZ2xlKCd2aXN1YWxseWhpZGRlbicsIGVsICE9PSBhY3RpdmVNb2RhbCkgKTtcclxuXHJcblx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsLWJlaGF2aW9yLW9mZicpO1xyXG5cclxuXHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHtcclxuXHJcblx0XHRcdHdyYXBwZXIuc3R5bGUudG9wID0gLXdpbmRvd1Njcm9sbCArICdweCc7XHJcblxyXG5cdFx0XHRpZiAoIGhlYWRlci5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWZpeGVkJykgKSB7XHJcblxyXG5cdFx0XHRcdG1lbnUuc3R5bGUudG9wID0gd2luZG93U2Nyb2xsICsgbWVudVRvcCArICdweCc7XHJcblx0XHRcdFx0aGVhZGVyLnN0eWxlLnRvcCA9IHdpbmRvd1Njcm9sbCArIGhlYWRlclRvcCArICdweCc7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ21vZGFsLXNob3cnKTtcclxuXHJcblx0XHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHtcclxuXHJcblx0XHRcdFx0d2luZG93LnNjcm9sbFRvKDAsMCk7XHJcblxyXG5cdFx0XHRcdGFjdGl2ZU1vZGFsLmZvY3VzKCk7XHJcblxyXG5cdFx0XHRcdGlmICggYXV0b2ZvY3VzICkge1xyXG5cclxuXHRcdFx0XHRcdGFjdGl2ZU1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dCcpLmZvY3VzKCk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9O1xyXG5cclxuXHRtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRpZiggZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbW9kYWwnKSB8fCBldmVudC50YXJnZXQuY2xvc2VzdCgnLm1vZGFsX19jbG9zZScpKXtcclxuXHJcblx0XHRcdG1vZGFsLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiaGlkZVwiKSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcblxyXG5cdFx0bGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuXHJcblx0XHR3aGlsZSAodGFyZ2V0ICE9PSBkb2N1bWVudCAmJiB0YXJnZXQgIT09IG51bGwpIHtcclxuXHJcblx0XHRcdGlmICh0YXJnZXQuaGFzQXR0cmlidXRlKCdkYXRhLW1vZGFsJykpIHtcclxuXHJcblx0XHRcdFx0bW9kYWxTaG93KFxyXG5cdFx0XHRcdFx0dGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1tb2RhbCcpLFxyXG5cdFx0XHRcdFx0dGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS10aXRsZScpLFxyXG5cdFx0XHRcdFx0dGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpXHJcblx0XHRcdFx0KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG5cdG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ21vZGFsU2hvdycsIGV2ZW50ID0+IG1vZGFsU2hvdyhldmVudC5kZXRhaWwuc2VsZWN0b3IpKTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpKTsiLCIiLCIoIGZvcm0gPT4ge1xyXG5cclxuXHRpZiggZm9ybSApIHtcclxuXHJcblx0XHRjb25zdCBzdGVwcyA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLm9yZGVyX19zdGVwJyksXHJcblx0XHRcdCAgbmF2TGlua3MgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5vcmRlcl9fc3RlcHMgYScpO1xyXG5cclxuXHRcdC8vIGhhc2hcclxuXHJcblx0XHRjb25zdCBzZXRTdGFnZSA9ICgpPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgaGFzaCA9IGxvY2F0aW9uLmhhc2g7XHJcblxyXG5cdFx0XHRbLi4uc3RlcHNdLmZvckVhY2goIHN0ZXAgPT4ge1xyXG5cclxuXHRcdFx0XHRzdGVwLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnLCBzdGVwLmdldEF0dHJpYnV0ZSgnZGF0YS1oYXNoJykgIT09IGhhc2guc2xpY2UoMSkgKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Wy4uLm5hdkxpbmtzXS5mb3JFYWNoKCBsaW5rID0+IHtcclxuXHJcblx0XHRcdFx0bGluay5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnLCBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpID09PSBoYXNoICk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblxyXG5cdFx0XHRpZiggZm9ybS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJykuY2xpZW50SGVpZ2h0ICkge1xyXG5cclxuXHRcdFx0XHRmb3JtLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIHNldFN0YWdlKTtcclxuXHJcblx0XHRpZiAoIGxvY2F0aW9uLmhhc2ggKSB7XHJcblxyXG5cdFx0XHRzZXRUaW1lb3V0KCBzZXRTdGFnZSApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcmRlcicpKTsiLCJcclxuKCBidG5QYWdlVXAgPT4ge1xyXG5cclxuXHRpZiAoYnRuUGFnZVVwKSB7XHJcblxyXG5cdFx0YnRuUGFnZVVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZG9jdW1lbnQuYm9keS5zY3JvbGxJbnRvVmlldyh7YmVoYXZpb3I6IFwic21vb3RoXCJ9KSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLXVwJykpOyIsIiggZWxlbWVudHMgPT4ge1xyXG5cclxuXHRpZihlbGVtZW50cy5sZW5ndGggPT09IDApIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Wy4uLmVsZW1lbnRzXS5mb3JFYWNoKCBkcm9wZG93biA9PiB7XHJcblxyXG5cdFx0Y29uc3QgbWFzayA9IGRyb3Bkb3duLnF1ZXJ5U2VsZWN0b3IoJy5waG9uZS1jb3VudHJ5X19tYXNrJyksXHJcblx0XHRcdCAgdmFsdWUgPSBkcm9wZG93bi5xdWVyeVNlbGVjdG9yKCcucGhvbmUtY291bnRyeV9fdmFsdWUnKSxcclxuXHRcdFx0ICByYWRpbyA9IGRyb3Bkb3duLnF1ZXJ5U2VsZWN0b3JBbGwoJy5waG9uZS1jb3VudHJ5X19yYWRpbycpO1xyXG5cclxuXHRcdFsuLi5yYWRpb10uZm9yRWFjaCggYnRuID0+IHtcclxuXHJcblx0XHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcclxuXHJcblx0XHRcdFx0bGV0IHBsYWNlaG9sZGVyID0gYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1tYXNrJyk7XHJcblx0XHRcdFx0cGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlci5yZXBsYWNlKC9cXFxcOS9nLCAnJCcpO1xyXG5cdFx0XHRcdHBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXIucmVwbGFjZSgvOS9nLCAnLScpO1xyXG5cdFx0XHRcdHBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXIucmVwbGFjZSgvXFwkL2csICc5Jyk7XHJcblxyXG5cdFx0XHRcdG1hc2suc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIHBsYWNlaG9sZGVyKTtcclxuXHRcdFx0XHRtYXNrLnZhbHVlID0gJyc7XHJcblxyXG5cdFx0XHRcdElucHV0bWFzayhidG4uZ2V0QXR0cmlidXRlKCdkYXRhLW1hc2snKSkubWFzayhtYXNrKTtcclxuXHJcblx0XHRcdFx0bGV0IG1hc2tJbnB1dDtcclxuXHJcblx0XHRcdFx0bWFza0lucHV0ID0gbmV3IElucHV0bWFzayh7XHJcblx0XHRcdFx0XHRtYXNrOiBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLW1hc2snKSxcclxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyOiAnLSdcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0bWFza0lucHV0Lm1hc2sobWFzayk7XHJcblxyXG5cdFx0XHRcdG1hc2suZm9jdXMoKTtcclxuXHJcblx0XHRcdFx0dmFsdWUudGV4dENvbnRlbnQgPSBidG4udmFsdWU7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGNvbnN0IGlzRHJvcGRvd24gPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnBob25lLWNvdW50cnlfX2J0bicpID8gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5waG9uZS1jb3VudHJ5JykgOiBudWxsO1xyXG5cclxuXHRcdFsuLi5lbGVtZW50c10uZm9yRWFjaCggZHJvcGRvd24gPT4ge1xyXG5cclxuXHRcdFx0ZHJvcGRvd24uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtb3BlbicsIGRyb3Bkb3duID09PSBpc0Ryb3Bkb3duICYmIGlzRHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1vcGVuJykgPT09IGZhbHNlICk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBob25lLWNvdW50cnknKSk7IiwiKCBpdGVtcyA9PiB7XG5cblx0aWYgKCBpdGVtcy5sZW5ndGggKSB7XG5cblx0XHRwaWNrbWV1cC5kZWZhdWx0cy5sb2NhbGVzWydydSddID0ge1xuXHRcdFx0ZGF5czogWyfQktC+0YHQutGA0LXRgdC10L3RjNC1JywgJ9Cf0L7QvdC10LTQtdC70YzQvdC40LonLCAn0JLRgtC+0YDQvdC40LonLCAn0KHRgNC10LTQsCcsICfQp9C10YLQstC10YDQsycsICfQn9GP0YLQvdC40YbQsCcsICfQodGD0LHQsdC+0YLQsCddLFxuXHRcdFx0ZGF5c1Nob3J0OiBbJ9CS0YEnLCAn0J/QvScsICfQktGCJywgJ9Ch0YAnLCAn0KfRgicsICfQn9GCJywgJ9Ch0LEnXSxcblx0XHRcdGRheXNNaW46IFsn0JLRgScsICfQn9C9JywgJ9CS0YInLCAn0KHRgCcsICfQp9GCJywgJ9Cf0YInLCAn0KHQsSddLFxuXHRcdFx0bW9udGhzOiBbJ9Cv0L3QstCw0YDRjCcsICfQpNC10LLRgNCw0LvRjCcsICfQnNCw0YDRgicsICfQkNC/0YDQtdC70YwnLCAn0JzQsNC5JywgJ9CY0Y7QvdGMJywgJ9CY0Y7Qu9GMJywgJ9CQ0LLQs9GD0YHRgicsICfQodC10L3RgtGP0LHRgNGMJywgJ9Ce0LrRgtGP0LHRgNGMJywgJ9Cd0L7Rj9Cx0YDRjCcsICfQlNC10LrQsNCx0YDRjCddLFxuXHRcdFx0bW9udGhzU2hvcnQ6IFsn0K/QvdCyJywgJ9Ck0LXQsicsICfQnNCw0YAnLCAn0JDQv9GAJywgJ9Cc0LDQuScsICfQmNGO0L0nLCAn0JjRjtC7JywgJ9CQ0LLQsycsICfQodC10L0nLCAn0J7QutGCJywgJ9Cd0L7RjycsICfQlNC10LonXVxuXHRcdH07XG5cbi8vXHRcdGxvY2FsZVxuXG5cdFx0Wy4uLml0ZW1zXS5mb3JFYWNoKCBjYWxlbmRhciA9PiB7XG5cblx0XHRcdGNvbnN0IGlucHV0ID0gY2FsZW5kYXIucXVlcnlTZWxlY3RvcignLmNhbGVuZGFyX19pbnB1dCcpLFxuXHRcdFx0XHQgIG1pbkRhdGUgPSBuZXcgRGF0ZShpbnB1dC5nZXRBdHRyaWJ1dGUoJ21pbicpKSxcblx0XHRcdFx0ICBtYXhEYXRlID0gbmV3IERhdGUoaW5wdXQuZ2V0QXR0cmlidXRlKCdtYXgnKSk7XG5cblx0XHRcdGNvbnN0IHBpY2ttZXVwQ2FsZW5kYXIgPSBwaWNrbWV1cChjYWxlbmRhciwge1xuXG5cdFx0XHRcdGZsYXQ6IHRydWUsXG5cdFx0XHRcdG1pbjogbWluRGF0ZSxcblx0XHRcdFx0bWF4OiBtYXhEYXRlLFxuXHRcdFx0XHRzZWxlY3RfbW9udGg6IGZhbHNlLFxuXHRcdFx0XHRzZWxlY3RfeWVhcjogZmFsc2UsXG5cdFx0XHRcdHRpdGxlX2Zvcm1hdDogJ0InLFxuXHRcdFx0XHRmb3JtYXQ6ICdZLW0tZCcsXG5cdFx0XHRcdGxvY2FsZTogJ3J1Jyxcblx0XHRcdFx0cHJldjogJzxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx1c2UgeGxpbms6aHJlZj1cIiNzdmctYXJyb3ctY2hldnJvbi1sZWZ0XCIvPjwvc3ZnPicsXG5cdFx0XHRcdG5leHQ6ICc8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dXNlIHhsaW5rOmhyZWY9XCIjc3ZnLWFycm93LWNoZXZyb24tcmlnaHRcIi8+PC9zdmc+J1xuXG5cdFx0XHR9KTtcblxuXHRcdFx0Y2FsZW5kYXIuYWRkRXZlbnRMaXN0ZW5lcigncGlja21ldXAtY2hhbmdlJywgKCkgPT4ge1xuXG5cdFx0XHRcdGlucHV0LnZhbHVlID0gcGlja21ldXBDYWxlbmRhci5nZXRfZGF0ZSh0cnVlKTtcblxuXHRcdFx0fSk7XG5cblx0XHR9KTtcblxuXHR9XG5cbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYWxlbmRhcicpKTsiLCIoIGZvcm0gPT4ge1xyXG5cclxuXHRpZiAoIGZvcm0gKSB7XHJcblxyXG5cdFx0bGV0IG1vZGFsRm9ybVRhcmdldCA9IG51bGw7XHJcblxyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHQvLyDQstGL0LHQvtGAINGG0LLQtdGC0LAg0LIg0YLQvtCy0LDRgNC1INC40LvQuCDQsiDQutCw0YDRgtC+0YfQutC1XHJcblxyXG5cdFx0XHRjb25zdCBwcm9kdWN0Q29sb3IgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLmpzLW1vZGFsLWNvbG9yJyk7XHJcblxyXG5cdFx0XHRpZiAocHJvZHVjdENvbG9yKSB7XHJcblxyXG5cdFx0XHRcdGNvbnN0IGNhcmRQcm9kdWN0ID0gcHJvZHVjdENvbG9yLmNsb3Nlc3QoJy5wcm9kdWN0JykgfHwgcHJvZHVjdENvbG9yLmNsb3Nlc3QoJy5wcmV2aWV3LWNhcmQnKSxcclxuXHRcdFx0XHRcdCAgZm9ybVByb2R1Y3QgPSBjYXJkUHJvZHVjdC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1idXknKSB8fCBjYXJkUHJvZHVjdC5xdWVyeVNlbGVjdG9yKCcucHJldmlldy1jYXJkX19mb3JtJyksXHJcblx0XHRcdFx0XHQgIGlucHV0SWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5cclxuXHRcdFx0XHRpbnB1dElkLm5hbWUgPSAnaWQnO1xyXG5cdFx0XHRcdGlucHV0SWQudHlwZSA9ICdoaWRkZW4nO1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoICgpID0+IGlucHV0SWQudmFsdWUgPSBmb3JtUHJvZHVjdC5lbGVtZW50cy5pZC52YWx1ZSk7XHJcblxyXG5cdFx0XHRcdG1vZGFsRm9ybVRhcmdldCA9IGZvcm1Qcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aWV3LWNhcmRfX21vZGFsLWNvbG9yJyk7XHJcblxyXG5cdFx0XHRcdGZvcm0uaW5uZXJIVE1MID0gbW9kYWxGb3JtVGFyZ2V0LmlubmVySFRNTDtcclxuXHRcdFx0XHRmb3JtLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJiZWdpbicsIGlucHV0SWQpO1xyXG5cclxuXHRcdFx0XHRjb25zdCBldmVudE1vZGFsU2hvdyA9IG5ldyBDdXN0b21FdmVudChcIm1vZGFsU2hvd1wiLCB7XHJcblx0XHRcdFx0XHRkZXRhaWw6IHtcclxuXHRcdFx0XHRcdFx0c2VsZWN0b3I6IFwicHJldmlldy1jYXJkLWNvbG9yXCJcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0d2luZG93Lm1vZGFsLmRpc3BhdGNoRXZlbnQoZXZlbnRNb2RhbFNob3cpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vINC+0LHRgNCw0YLQvdC+INCy0YHRgtCw0LLQu9GP0LXQvCDQvNC+0LTQsNC70LrRgyDQsiDRgtC+0LLQsNGAXHJcblxyXG5cdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdtb2RhbENsb3NlJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0Zm9ybS5lbGVtZW50cy5pZC5yZW1vdmUoKTtcclxuXHJcblx0XHRcdFsuLi5mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbC1jYXJkLWNvbG9yX19pdGVtLWlucHV0JyldLmZvckVhY2goIGlucHV0ID0+IHtcclxuXHJcblx0XHRcdFx0aWYgKGlucHV0LmNoZWNrZWQpIHtcclxuXHJcblx0XHRcdFx0XHRpbnB1dC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCdjaGVja2VkJyk7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0aW5wdXQucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJyk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0bW9kYWxGb3JtVGFyZ2V0LmlubmVySFRNTCA9IGZvcm0uaW5uZXJIVE1MO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0Ly8g0LjQt9C80LXQvdC40YLRjCDRhtCy0LXRglxyXG5cclxuXHRcdFx0Y29uc3QgY2FyZENvbG9yID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5tb2RhbC1jYXJkLWNvbG9yX19pdGVtLWlucHV0Jyk7XHJcblxyXG5cdFx0XHRpZiAoY2FyZENvbG9yKSB7XHJcblxyXG5cdFx0XHRcdC8vIHNldCBjbGFzcyBjaGVja2VkXHJcblx0XHRcdFx0Y29uc3QgaXRlbUNoZWNrZWQgPSBjYXJkQ29sb3IuY2xvc2VzdCgnLm1vZGFsLWNhcmQtY29sb3JfX2l0ZW0nKSxcclxuXHRcdFx0XHRcdCAgbGlzdCA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsLWNhcmQtY29sb3JfX2l0ZW0nKTtcclxuXHJcblx0XHRcdFx0Wy4uLmxpc3RdLmZvckVhY2goIGl0ZW0gPT4ge1xyXG5cclxuXHRcdFx0XHRcdGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtY2hlY2tlZCcsIGl0ZW0gPT09IGl0ZW1DaGVja2VkKTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdGNvbnN0IGNhcmQgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLm1vZGFsLWNhcmQtY29sb3InKSxcclxuXHRcdFx0XHRcdCAgaWQgPSBjYXJkLmVsZW1lbnRzLmlkLnZhbHVlLFxyXG5cdFx0XHRcdFx0ICBhcnRpY2xlSWQgPSBjYXJkQ29sb3IudmFsdWU7XHJcblxyXG5cdFx0XHRcdC8vIGltZ1xyXG5cclxuXHRcdFx0XHRjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jYXJkLWNvbG9yX19waG90byBpbWcnKS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGNhcmRDb2xvci5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJykpO1xyXG5cdFx0XHRcdGNhcmQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNhcmQtY29sb3JfX3Bob3RvIGltZycpLnNldEF0dHJpYnV0ZSgnc3Jjc2V0JywgY2FyZENvbG9yLmdldEF0dHJpYnV0ZSgnZGF0YS1zcmNzZXQnKSk7XHJcblxyXG5cdFx0XHRcdC8vIHByaWNlXHJcblxyXG5cdFx0XHRcdGlmICggY2FyZENvbG9yLmdldEF0dHJpYnV0ZSgnZGF0YS1wcmljZS1vbGQnKSApIHtcclxuXHJcblx0XHRcdFx0XHRjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5wcmljZV9fb2xkJykudGV4dENvbnRlbnQgPSBjYXJkQ29sb3IuZ2V0QXR0cmlidXRlKCdkYXRhLXByaWNlLW9sZCcpO1xyXG5cdFx0XHRcdFx0Y2FyZC5xdWVyeVNlbGVjdG9yKCcucHJpY2VfX29sZCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5wcmljZV9fb2xkJykuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGNhcmQucXVlcnlTZWxlY3RvcignLnByaWNlX192YWx1ZScpLnRleHRDb250ZW50ID0gY2FyZENvbG9yLmdldEF0dHJpYnV0ZSgnZGF0YS1wcmljZScpO1xyXG5cclxuXHRcdFx0XHQvLyBidXlcclxuXHJcblx0XHRcdFx0Y29uc3QgYnV5ID0gY2FyZENvbG9yLmdldEF0dHJpYnV0ZSgnZGF0YS1idXknKSxcclxuXHRcdFx0XHRcdCAgYnV5Q2FydCA9IGJ1eSA9PT0gJ2luLWNhcnQnLFxyXG5cdFx0XHRcdFx0ICBidXlEaXNhYmxlZCA9IGJ1eSA9PT0gJ2Rpc2FibGVkJyxcclxuXHRcdFx0XHRcdCAgYnV5QnRuID0gYnV5ID09PSBudWxsIHx8IGJ1eURpc2FibGVkLFxyXG5cdFx0XHRcdFx0ICB0ZW1wbGF0ZVN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1jYXJkLWNvbG9yLXN1Ym1pdC10ZW1wbGF0ZScpLmlubmVySFRNTDtcclxuXHJcblx0XHRcdFx0Y2FyZC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY2FyZC1jb2xvcl9fc3VibWl0JykuaW5uZXJIVE1MID0gTXVzdGFjaGUucmVuZGVyKHRlbXBsYXRlU3VibWl0LCB7IGJ1eUJ0biwgYnV5RGlzYWJsZWQsIGJ1eUNhcnQgfSk7XHJcblxyXG5cdFx0XHRcdC8vIG92ZXJsYXlcclxuXHJcblx0XHRcdFx0Y29uc3Qgb3ZlcmxheSA9IGNhcmRDb2xvci5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3ZlcmxheScpLFxyXG5cdFx0XHRcdFx0ICBvdmVybGF5VGl0bGUgPSBjYXJkQ29sb3IuZ2V0QXR0cmlidXRlKCdkYXRhLW92ZXJsYXktdGl0bGUnKSxcclxuXHRcdFx0XHRcdCAgb3ZlcmxheVRleHQgPSBjYXJkQ29sb3IuZ2V0QXR0cmlidXRlKCdkYXRhLW92ZXJsYXktdGV4dCcpLFxyXG5cdFx0XHRcdFx0ICBvdmVybGF5TG9naW4gPSBvdmVybGF5ID09PSAnbG9naW4nLFxyXG5cdFx0XHRcdFx0ICBvdmVybGF5Tm90ID0gb3ZlcmxheSA9PT0gJ25vdCcsXHJcblx0XHRcdFx0XHQgIGVsT3ZlcmxheSA9IGNhcmQucXVlcnlTZWxlY3RvcignLm92ZXJsYXktZGlzYWJsZWQnKTtcclxuXHJcblx0XHRcdFx0aWYgKCBlbE92ZXJsYXkgKSB7XHJcblxyXG5cdFx0XHRcdFx0ZWxPdmVybGF5LnJlbW92ZSgpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGNhcmQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNhcmQtY29sb3JfX3Bob3RvJykuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBNdXN0YWNoZS5yZW5kZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI292ZXJsYXktZGlzYWJsZWQtdGVtcGxhdGUnKS5pbm5lckhUTUwsIHsgb3ZlcmxheSwgb3ZlcmxheVRpdGxlLCBvdmVybGF5VGV4dCwgb3ZlcmxheUxvZ2luLCBvdmVybGF5Tm90LCBpZCwgYXJ0aWNsZUlkIH0pKTtcclxuXHJcblx0XHRcdFx0Ly8gYXZhaWxhYmlsaXR5XHJcblxyXG5cdFx0XHRcdGNhcmQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNhcmQtY29sb3JfX2F2YWlsYWJpbGl0eScpLmlubmVySFRNTCA9IE11c3RhY2hlLnJlbmRlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXZhaWxhYmlsaXR5LXRlbXBsYXRlJykuaW5uZXJIVE1MLCB7IGF2YWlsYWJpbGl0eTogIW92ZXJsYXlOb3QgfSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmV2aWV3LWNhcmQtY29sb3InKSk7IiwiKCAoKSA9PiB7XHJcblxyXG5cdGNvbnN0IHZvbHVtZUNoYW5nZSA9IGNhcmRWb2x1bWUgPT4ge1xyXG5cclxuXHRcdGNvbnN0IGNhcmQgPSBjYXJkVm9sdW1lLmNsb3Nlc3QoJy5wcmV2aWV3LWNhcmQnKSxcclxuXHRcdFx0ICBpZCA9IGNhcmRWb2x1bWUuY2xvc2VzdCgnLnByZXZpZXctY2FyZF9fZm9ybScpLmVsZW1lbnRzLmlkLnZhbHVlLFxyXG5cdFx0XHQgIGFydGljbGVJZCA9IGNhcmRWb2x1bWUudmFsdWUsXHJcblx0XHRcdCAgdGVtcGxhdGVGb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByZXZpZXctY2FyZC1mb290LXRlbXBsYXRlJykuaW5uZXJIVE1MLFxyXG5cdFx0XHQgIHRlbXBsYXRlRmxhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmV2aWV3LWNhcmQtZmxhZy10ZW1wbGF0ZScpLmlubmVySFRNTCxcclxuXHRcdFx0ICB0ZW1wbGF0ZUxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByZXZpZXctY2FyZC1sYWJlbC10ZW1wbGF0ZScpLmlubmVySFRNTCxcclxuXHRcdFx0ICB0ZW1wbGF0ZVByaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaWNlLXRlbXBsYXRlJykuaW5uZXJIVE1MLFxyXG5cdFx0XHQgIHRlbXBsYXRlT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvdmVybGF5LWRpc2FibGVkLXRlbXBsYXRlJykuaW5uZXJIVE1MO1xyXG5cclxuXHRcdC8vINC60L3QvtC/0LrQsCDQutGD0L/QuNGC0Ywg0Lgg0LjQt9Cx0YDQsNC90L3QvtC1XHJcblxyXG5cdFx0Y29uc3QgYnV5ID0gY2FyZFZvbHVtZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnV5JyksXHJcblx0XHRcdCAgYnV5Q2FydCA9IGJ1eSA9PT0gJ2luLWNhcnQnLFxyXG5cdFx0XHQgIGJ1eURpc2FibGVkID0gYnV5ID09PSAnZGlzYWJsZWQnLFxyXG5cdFx0XHQgIGJ1eUJ0biA9IGJ1eSA9PT0gbnVsbCB8fCBidXlEaXNhYmxlZCxcclxuXHRcdFx0ICBmYXZvdXJpdGUgPSBjYXJkVm9sdW1lLmdldEF0dHJpYnV0ZSgnZGF0YS1mYXZvdXJpdGUnKTtcclxuXHJcblx0XHRjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aWV3LWNhcmRfX2Zvb3QnKS5pbm5lckhUTUwgPSBNdXN0YWNoZS5yZW5kZXIodGVtcGxhdGVGb290LCB7IGJ1eUJ0biwgYnV5RGlzYWJsZWQsIGJ1eUNhcnQsIGZhdm91cml0ZSB9KTtcclxuXHJcblx0XHQvLyDRhtC10L3QsFxyXG5cclxuXHRcdGNvbnN0IHByaWNlID0gY2FyZFZvbHVtZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2UnKSxcclxuXHRcdFx0ICBwcmljZU9sZCA9IGNhcmRWb2x1bWUuZ2V0QXR0cmlidXRlKCdkYXRhLXByaWNlLW9sZCcpO1xyXG5cclxuXHRcdGNhcmQucXVlcnlTZWxlY3RvcignLnByZXZpZXctY2FyZF9fcHJpY2UnKS5pbm5lckhUTUwgPSBNdXN0YWNoZS5yZW5kZXIodGVtcGxhdGVQcmljZSwgeyBwcmljZSwgcHJpY2VPbGQgfSk7XHJcblxyXG5cdFx0Ly8g0YTQu9Cw0LNcclxuXHJcblx0XHRjb25zdCBmbGFnID0gY2FyZFZvbHVtZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmxhZycpLFxyXG5cdFx0XHQgIGZsYWdDb2xvciA9IGNhcmRWb2x1bWUuZ2V0QXR0cmlidXRlKCdkYXRhLWZsYWctY29sb3InKSxcclxuXHRcdFx0ICBjYXJkRmxhZyA9IGNhcmQucXVlcnlTZWxlY3RvcignLnByZXZpZXctY2FyZF9fZmxhZycpO1xyXG5cclxuXHRcdGlmIChjYXJkRmxhZykge1xyXG5cclxuXHRcdFx0Y2FyZEZsYWcucmVtb3ZlKCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGNhcmQucXVlcnlTZWxlY3RvcignLnByZXZpZXctY2FyZF9faGVhZCcpLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgTXVzdGFjaGUucmVuZGVyKHRlbXBsYXRlRmxhZywgeyBmbGFnLCBmbGFnQ29sb3IgfSkpO1xyXG5cclxuXHRcdC8vIGxhYmVsXHJcblxyXG5cdFx0Y29uc3Qgc2FsZSA9IGNhcmRWb2x1bWUuZ2V0QXR0cmlidXRlKCdkYXRhLWxhYmVsLXNhbGUnKSxcclxuXHRcdFx0ICBkaXNjb3VudCA9IGNhcmRWb2x1bWUuZ2V0QXR0cmlidXRlKCdkYXRhLWxhYmVsLWRpc2NvdW50JyksXHJcblx0XHRcdCAgZ2lmdCA9IGNhcmRWb2x1bWUuZ2V0QXR0cmlidXRlKCdkYXRhLWxhYmVsLWdpZnQnKSxcclxuXHRcdFx0ICBlbExhYmVsID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcucHJldmlldy1jYXJkX19sYWJlbCcpO1xyXG5cclxuXHRcdGlmICggZWxMYWJlbCApIHtcclxuXHJcblx0XHRcdGVsTGFiZWwucmVtb3ZlKCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGNhcmQucXVlcnlTZWxlY3RvcignLnByZXZpZXctY2FyZF9faGVhZCcpLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgTXVzdGFjaGUucmVuZGVyKHRlbXBsYXRlTGFiZWwsIHsgc2FsZSwgZGlzY291bnQsIGdpZnQgfSkpO1xyXG5cclxuXHRcdC8vIG92ZXJsYXlcclxuXHJcblx0XHRjb25zdCBvdmVybGF5ID0gY2FyZFZvbHVtZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3ZlcmxheScpLFxyXG5cdFx0XHQgIG92ZXJsYXlUaXRsZSA9IGNhcmRWb2x1bWUuZ2V0QXR0cmlidXRlKCdkYXRhLW92ZXJsYXktdGl0bGUnKSxcclxuXHRcdFx0ICBvdmVybGF5VGV4dCA9IGNhcmRWb2x1bWUuZ2V0QXR0cmlidXRlKCdkYXRhLW92ZXJsYXktdGV4dCcpLFxyXG5cdFx0XHQgIG92ZXJsYXlMb2dpbiA9IG92ZXJsYXkgPT09ICdsb2dpbicsXHJcblx0XHRcdCAgb3ZlcmxheU5vdCA9IG92ZXJsYXkgPT09ICdub3QnLFxyXG5cdFx0XHQgIG92ZXJsYXlXaXRoZHJhd24gPSBvdmVybGF5ID09PSAnd2l0aGRyYXduJyxcclxuXHRcdFx0ICBlbE92ZXJsYXkgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5LWRpc2FibGVkJyk7XHJcblxyXG5cdFx0aWYgKCBlbE92ZXJsYXkgKSB7XHJcblxyXG5cdFx0XHRlbE92ZXJsYXkucmVtb3ZlKCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGNhcmQucXVlcnlTZWxlY3RvcignLnByZXZpZXctY2FyZF9faGVhZCcpLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgTXVzdGFjaGUucmVuZGVyKHRlbXBsYXRlT3ZlcmxheSwgeyBvdmVybGF5LCBvdmVybGF5VGl0bGUsIG92ZXJsYXlUZXh0LCBvdmVybGF5TG9naW4sIG92ZXJsYXlOb3QsIG92ZXJsYXlXaXRoZHJhd24sIGlkLCBhcnRpY2xlSWQgfSkpO1xyXG5cclxuXHR9XHJcblxyXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50ID0+IHtcclxuXHJcblx0XHQvLyDQuNC30LzQtdC90LjRgtGMINC+0LHRitGR0LxcclxuXHRcdGNvbnN0IGNhcmRWb2x1bWUgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnByZXZpZXctY2FyZF9fdm9sdW1lLWlucHV0Jyk7XHJcblxyXG5cdFx0aWYgKGNhcmRWb2x1bWUpIHtcclxuXHJcblx0XHRcdHZvbHVtZUNoYW5nZShjYXJkVm9sdW1lKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8g0LjQt9C80LXQvdC40YLRjCDQvtCx0YrRkdC8INCyINC80L7QsdC40LvRjNC90L7QvFxyXG5cdFx0Y29uc3QgY2FyZFZvbHVtZU1vYmlsZSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcucHJldmlldy1jYXJkX192b2x1bWUtc2VsZWN0Jyk7XHJcblxyXG5cdFx0aWYgKGNhcmRWb2x1bWVNb2JpbGUpIHtcclxuXHJcblx0XHRcdGNvbnN0IHZhbHVlID0gY2FyZFZvbHVtZU1vYmlsZS52YWx1ZSxcclxuXHRcdFx0XHQgIGNhcmQgPSBjYXJkVm9sdW1lTW9iaWxlLmNsb3Nlc3QoJy5wcmV2aWV3LWNhcmQnKSxcclxuXHRcdFx0XHQgIGlucHV0QnRuID0gY2FyZC5xdWVyeVNlbGVjdG9yQWxsKCcucHJldmlldy1jYXJkX192b2x1bWUtaW5wdXQnKTtcclxuXHJcblx0XHRcdFsuLi5pbnB1dEJ0bl0uZm9yRWFjaCggZWwgPT4ge1xyXG5cclxuXHRcdFx0XHRpZiAoIGVsLmdldEF0dHJpYnV0ZSgndmFsdWUnKSA9PT0gdmFsdWUgKSB7XHJcblxyXG5cdFx0XHRcdFx0ZWwuY2hlY2tlZCA9IHRydWU7XHJcblxyXG5cdFx0XHRcdFx0dm9sdW1lQ2hhbmdlKGVsKTtcclxuXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRlbC5jaGVja2VkID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG59KSgpOyIsIiggcHJvZHVjdCA9PiB7XHJcblxyXG5cdGlmKCBwcm9kdWN0ICkge1xyXG5cclxuXHRcdC8vIHBhcmFtXHJcblxyXG5cdFx0aWYgKCB3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCApIHtcclxuXHJcblx0XHRcdGNvbnN0IGJ0biA9IHByb2R1Y3QucXVlcnlTZWxlY3RvcignLnByb2R1Y3RfX29wZW4tdGFiIC5idG4nKTtcclxuXHJcblx0XHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdFx0YnRuLmNsb3Nlc3QoJy5wcm9kdWN0X19zcGVjcycpLmNsYXNzTGlzdC50b2dnbGUoJ2lzLW9wZW4nKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHQvLyBoYXNoXHJcblxyXG5cdFx0Y29uc3Qgc2V0VGFiID0gKCk9PiB7XHJcblxyXG5cdFx0XHRjb25zdCB0YWJJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihsb2NhdGlvbi5oYXNoKS5jbG9zZXN0KCcudGFic19faXRlbScpO1xyXG5cclxuXHRcdFx0aWYgKCB0YWJJdGVtICkge1xyXG5cclxuXHRcdFx0XHR0YWJJdGVtLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwic2V0QWN0aXZlXCIpKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBzZXRUYWIpO1xyXG5cclxuXHRcdGlmICggbG9jYXRpb24uaGFzaCApIHtcclxuXHJcblx0XHRcdHNldFRpbWVvdXQoIHNldFRhYiApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHQvLyBnYWxsZXJ5XHJcblxyXG5cdFx0Y29uc3QgZ2FsbGVyeSA9IHByb2R1Y3QucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtZ2FsbGVyeScpO1xyXG5cdFx0XHQgIGdhbGxlcnlQcmV2aWV3ID0gcHJvZHVjdC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdC1nYWxsZXJ5X19wcmV2aWV3LWxpbmsnKTtcclxuXHJcblx0XHRjb25zdCBzZXRBY3RpdmVJbWcgPSBsaW5rID0+IHtcclxuXHJcblx0XHRcdGxldCBpbmRleCA9IG51bGw7XHJcblxyXG5cdFx0XHRbLi4uZ2FsbGVyeVByZXZpZXddLmZvckVhY2goIChfbGluayxfaW5kZXgpID0+IHtcclxuXHJcblx0XHRcdFx0X2xpbmsucGFyZW50Tm9kZS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1jdXJyZW50JywgX2xpbmsgPT09IGxpbmspO1xyXG5cclxuXHRcdFx0XHRpZiAoIF9saW5rID09PSBsaW5rICkge1xyXG5cclxuXHRcdFx0XHRcdGluZGV4ID0gX2luZGV4O1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHByb2R1Y3QucXVlcnlTZWxlY3RvcignLnN3aXBlci1jb250YWluZXItLXByb2R1Y3QnKS5zd2lwZXIuc2xpZGVUb0xvb3AoaW5kZXgpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRnYWxsZXJ5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgdGFyZ2V0TGluayA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCdhJyk7XHJcblxyXG5cdFx0XHRpZiAoIHRhcmdldExpbmsgKSB7XHJcblxyXG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRcdGlmICggdGFyZ2V0TGluay5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2R1Y3QtZ2FsbGVyeV9fcHJldmlldy1saW5rJykgKSB7XHJcblxyXG5cdFx0XHRcdFx0c2V0QWN0aXZlSW1nKHRhcmdldExpbmspO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gdm9sdW1lXHJcblxyXG5cdFx0Y29uc3Qgdm9sdW1lQ2hhbmdlID0gY2FyZFZvbHVtZSA9PiB7XHJcblxyXG5cclxuXHRcdFx0Y29uc3QgZm9ybSA9IGNhcmRWb2x1bWUuY2xvc2VzdCgnLnByb2R1Y3QtYnV5JyksXHJcblx0XHRcdFx0ICBpZCA9IGZvcm0uZWxlbWVudHMuaWQudmFsdWUsXHJcblx0XHRcdFx0ICBhcnRpY2xlSWQgPSBjYXJkVm9sdW1lLnZhbHVlLFxyXG5cdFx0XHRcdCAgdGVtcGxhdGVGb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2R1Y3QtYnV5LXN1Ym1pdC10ZW1wbGF0ZScpLmlubmVySFRNTCxcclxuXHRcdFx0XHQgIHRlbXBsYXRlRmF2b3VyaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2R1Y3QtYnV5LWZhdm91cml0ZS10ZW1wbGF0ZScpLmlubmVySFRNTCxcclxuXHRcdFx0XHQgIHRlbXBsYXRlUHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpY2UtdGVtcGxhdGUnKS5pbm5lckhUTUwsXHJcblx0XHRcdFx0ICB0ZW1wbGF0ZUF2YWlsYWJpbGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhdmFpbGFiaWxpdHktdGVtcGxhdGUnKS5pbm5lckhUTUwsXHJcblx0XHRcdFx0ICB0ZW1wbGF0ZU92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3ZlcmxheS1kaXNhYmxlZC10ZW1wbGF0ZScpLmlubmVySFRNTCxcclxuXHRcdFx0XHQgIHRlbXBsYXRlQm9hcmRMb2dpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9kdWN0LWxvZ2luLXRlbXBsYXRlJykuaW5uZXJIVE1MO1xyXG5cclxuXHRcdFx0Ly8gdm9sdW1lIC0+IGdhbGxlcnlcclxuXHJcblx0XHRcdFsuLi5nYWxsZXJ5UHJldmlld10uZm9yRWFjaCggbGluayA9PiB7XHJcblxyXG5cdFx0XHRcdGlmICggbGluay5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXJ0aWNsZWlkJykgPT09IGFydGljbGVJZCApIHtcclxuXHJcblx0XHRcdFx0XHRzZXRBY3RpdmVJbWcobGluayk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Ly8g0LrQvdC+0L/QutCwINC40LfQsdGA0LDQvdC90L7QtVxyXG5cclxuXHRcdFx0Y29uc3QgZmF2b3VyaXRlID0gY2FyZFZvbHVtZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmF2b3VyaXRlJyk7XHJcblxyXG5cdFx0XHRmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWJ1eV9fZmF2b3VyaXRlJykuaW5uZXJIVE1MID0gTXVzdGFjaGUucmVuZGVyKHRlbXBsYXRlRmF2b3VyaXRlLCB7IGZhdm91cml0ZSB9KTtcclxuXHJcblx0XHRcdC8vIG92ZXJsYXlcclxuXHJcblx0XHRcdGNvbnN0IG92ZXJsYXkgPSBjYXJkVm9sdW1lLmdldEF0dHJpYnV0ZSgnZGF0YS1vdmVybGF5JyksXHJcblx0XHRcdFx0ICBvdmVybGF5VGl0bGUgPSBjYXJkVm9sdW1lLmdldEF0dHJpYnV0ZSgnZGF0YS1vdmVybGF5LXRpdGxlJyksXHJcblx0XHRcdFx0ICBvdmVybGF5VGV4dCA9IGNhcmRWb2x1bWUuZ2V0QXR0cmlidXRlKCdkYXRhLW92ZXJsYXktdGV4dCcpLFxyXG5cdFx0XHRcdCAgb3ZlcmxheUxvZ2luID0gb3ZlcmxheSA9PT0gJ2xvZ2luJyxcclxuXHRcdFx0XHQgIG92ZXJsYXlOb3QgPSBvdmVybGF5ID09PSAnbm90JyxcclxuXHRcdFx0XHQgIG92ZXJsYXlXaXRoZHJhd24gPSBvdmVybGF5ID09PSAnd2l0aGRyYXduJyxcclxuXHRcdFx0XHQgIGVsT3ZlcmxheSA9IHByb2R1Y3QucXVlcnlTZWxlY3RvcignLm92ZXJsYXktZGlzYWJsZWQnKSxcclxuXHRcdFx0XHQgIGJvYXJkTG9naW4gPSBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZC1sb2dpbicpO1xyXG5cclxuXHRcdFx0aWYgKCBlbE92ZXJsYXkgKSB7XHJcblxyXG5cdFx0XHRcdGVsT3ZlcmxheS5yZW1vdmUoKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggb3ZlcmxheUxvZ2luICkge1xyXG5cclxuXHRcdFx0XHRpZiAoIGJvYXJkTG9naW4gPT09IG51bGwgKSB7XHJcblxyXG5cdFx0XHRcdFx0cHJvZHVjdC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1idXlfX3ByaWNlJykuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmVuZCcsIE11c3RhY2hlLnJlbmRlcih0ZW1wbGF0ZUJvYXJkTG9naW4pKTtcclxuXHJcblx0XHRcdFx0XHRjb25zdCB0b29sdGlwID0gcHJvZHVjdC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQtbG9naW4gLnRvb2x0aXAnKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoIHRvb2x0aXAgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRuZXcgVG9vbHRpcCh0b29sdGlwKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdGlmICggYm9hcmRMb2dpbiApIHtcclxuXHJcblx0XHRcdFx0XHRib2FyZExvZ2luLnJlbW92ZSgpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHByb2R1Y3QucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtZ2FsbGVyeV9fd3JhcCcpLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgTXVzdGFjaGUucmVuZGVyKHRlbXBsYXRlT3ZlcmxheSwgeyBvdmVybGF5LCBvdmVybGF5VGl0bGUsIG92ZXJsYXlUZXh0LCBvdmVybGF5TG9naW4sIG92ZXJsYXlOb3QsIG92ZXJsYXlXaXRoZHJhd24sIGlkLCBhcnRpY2xlSWQgfSkpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8g0YbQtdC90LBcclxuXHJcblx0XHRcdGNvbnN0IHByaWNlID0gY2FyZFZvbHVtZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2UnKSxcclxuXHRcdFx0XHQgIHByaWNlT2xkID0gY2FyZFZvbHVtZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2Utb2xkJyk7XHJcblxyXG5cdFx0XHRmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWJ1eV9fcHJpY2UnKS5pbm5lckhUTUwgPSBNdXN0YWNoZS5yZW5kZXIodGVtcGxhdGVQcmljZSwgeyBwcmljZSwgcHJpY2VPbGQgfSk7XHJcblxyXG5cdFx0XHQvLyDQutC90L7Qv9C60LAg0LrRg9C/0LjRgtGMXHJcblxyXG5cdFx0XHRjb25zdCBidXkgPSBjYXJkVm9sdW1lLmdldEF0dHJpYnV0ZSgnZGF0YS1idXknKSxcclxuXHRcdFx0XHQgIGJ1eUNhcnQgPSBidXkgPT09ICdpbi1jYXJ0JyxcclxuXHRcdFx0XHQgIGJ1eURpc2FibGVkID0gYnV5ID09PSAnZGlzYWJsZWQnLFxyXG5cdFx0XHRcdCAgYnV5QnRuID0gYnV5ID09PSBudWxsIHx8IGJ1eURpc2FibGVkLFxyXG5cdFx0XHRcdCAgYnRuTG9naW4gPSBvdmVybGF5TG9naW47XHJcblxyXG5cdFx0XHRpZiAoIGJ0bkxvZ2luICkge1xyXG5cclxuXHRcdFx0XHRmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWJ1eV9fc3VibWl0JykuaW5uZXJIVE1MID0gTXVzdGFjaGUucmVuZGVyKHRlbXBsYXRlRm9vdCwgeyBidG5Mb2dpbiB9KTtcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdGZvcm0ucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtYnV5X19zdWJtaXQnKS5pbm5lckhUTUwgPSBNdXN0YWNoZS5yZW5kZXIodGVtcGxhdGVGb290LCB7IGJ1eUJ0biwgYnV5RGlzYWJsZWQsIGJ1eUNhcnQgfSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBhdmFpbGFiaWxpdHlcclxuXHJcblx0XHRcdGZvcm0ucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtYnV5X19hdmFpbGFiaWxpdHknKS5pbm5lckhUTUwgPSBNdXN0YWNoZS5yZW5kZXIodGVtcGxhdGVBdmFpbGFiaWxpdHksIHsgYXZhaWxhYmlsaXR5OiAhb3ZlcmxheU5vdCB9KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0Ly8g0LjQt9C80LXQvdC40YLRjCDQvtCx0YrRkdC8XHJcblx0XHRcdGNvbnN0IGNhcmRWb2x1bWUgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnByb2R1Y3QtYnV5X192b2x1bWUtaW5wdXQnKTtcclxuXHJcblx0XHRcdGlmIChjYXJkVm9sdW1lKSB7XHJcblxyXG5cdFx0XHRcdHZvbHVtZUNoYW5nZShjYXJkVm9sdW1lKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vINC40LfQvNC10L3QuNGC0Ywg0L7QsdGK0ZHQvCDQsiDQvNC+0LHQuNC70YzQvdC+0LxcclxuXHRcdFx0Y29uc3QgY2FyZFZvbHVtZU1vYmlsZSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcucHJvZHVjdC1idXlfX3ZvbHVtZS1zZWxlY3QnKTtcclxuXHJcblx0XHRcdGlmIChjYXJkVm9sdW1lTW9iaWxlKSB7XHJcblxyXG5cdFx0XHRcdGNvbnN0IHZhbHVlID0gY2FyZFZvbHVtZU1vYmlsZS52YWx1ZSxcclxuXHRcdFx0XHRcdCAgY2FyZCA9IGNhcmRWb2x1bWVNb2JpbGUuY2xvc2VzdCgnLnByb2R1Y3QtYnV5JyksXHJcblx0XHRcdFx0XHQgIGlucHV0QnRuID0gY2FyZC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdC1idXlfX3ZvbHVtZS1pbnB1dCcpO1xyXG5cclxuXHRcdFx0XHRbLi4uaW5wdXRCdG5dLmZvckVhY2goIGVsID0+IHtcclxuXHJcblx0XHRcdFx0XHRpZiAoIGVsLmdldEF0dHJpYnV0ZSgndmFsdWUnKSA9PT0gdmFsdWUgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRlbC5jaGVja2VkID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0XHRcdHZvbHVtZUNoYW5nZShlbCk7XHJcblxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRcdGVsLmNoZWNrZWQgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIHNlbGVjdCB2b2x1bWVcclxuXHJcblx0XHRjb25zdCBidG5zU2VsZWN0ID0gcHJvZHVjdC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdC1idXlfX3NlbGVjdC1idG4nKTtcclxuXHRcdGNvbnN0IGJ0bnNTZWxlY3RUb2dnbGUgPSBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWJ1eV9fc2VsZWN0LWJ0bi0tb3BlbicpO1xyXG5cclxuXHRcdGlmICggYnRuc1NlbGVjdFRvZ2dsZSApIHtcclxuXHJcblx0XHRcdGNvbnN0IGZvcm0gPSBidG5zU2VsZWN0VG9nZ2xlLmNsb3Nlc3QoJy5wcm9kdWN0LWJ1eScpLFxyXG5cdFx0XHRcdCAgdGVtcGxhdGVQcmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmljZS10ZW1wbGF0ZScpLmlubmVySFRNTDtcclxuXHJcblx0XHRcdFsuLi5idG5zU2VsZWN0XS5mb3JFYWNoKCBidG4gPT4ge1xyXG5cclxuXHRcdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBidG4gPT09IGJ0bnNTZWxlY3RUb2dnbGUgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHQvLyDQutC90L7Qv9C60LAg0L7RgtC60YDRi9GC0LjRj1xyXG5cclxuXHRcdFx0XHRcdFx0YnRuLmNsYXNzTGlzdC50b2dnbGUoJ2lzLW9wZW4nKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRcdC8vINCy0YvQv9Cw0LTQsNGI0LrQsFxyXG5cclxuXHRcdFx0XHRcdFx0YnRuc1NlbGVjdFRvZ2dsZS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJyk7XHJcblxyXG5cdFx0XHRcdFx0XHRbLi4uYnRuc1NlbGVjdF0uZm9yRWFjaCggX2J0biA9PiB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmICggX2J0biA9PT0gYnRuICkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdF9idG4uY2xhc3NMaXN0LmFkZCgnaXMtY3VycmVudCcpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGZvcm0uZWxlbWVudHMuaWQudmFsdWUgPSBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0YnRuc1NlbGVjdFRvZ2dsZS5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1idXlfX3NlbGVjdC1pbWcgaW1nJykuc3JjID0gYnRuLnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWJ1eV9fc2VsZWN0LWltZyBpbWcnKS5zcmM7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0YnRuc1NlbGVjdFRvZ2dsZS5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1idXlfX3NlbGVjdC1uYW1lJykudGV4dENvbnRlbnQgPSBidG4ucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtYnV5X19zZWxlY3QtbmFtZScpLnRleHRDb250ZW50O1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHByaWNlID0gYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1wcmljZScpLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgIHByaWNlT2xkID0gYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1wcmljZS1vbGQnKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWJ1eV9fcHJpY2UnKS5pbm5lckhUTUwgPSBNdXN0YWNoZS5yZW5kZXIodGVtcGxhdGVQcmljZSwgeyBwcmljZSwgcHJpY2VPbGQgfSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRfYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWN1cnJlbnQnKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRcdGlmICggZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5wcm9kdWN0LWJ1eV9fc2VsZWN0JykgPT09IG51bGwgKSB7XHJcblxyXG5cdFx0XHRcdFx0YnRuc1NlbGVjdFRvZ2dsZS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJyk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3QnKSk7IiwiKCAoKT0+IHtcclxuXHJcblx0Y29uc3QgcmVhZG1vcmVUb2dnbGUgPSBibG9jayA9PiB7XHJcblxyXG5cdFx0Y29uc3QgYnRuID0gYmxvY2sucXVlcnlTZWxlY3RvcignLnJlYWRtb3JlLXRleHRfX2J0bicpLFxyXG5cdFx0XHQgIHRleHRDbG9zZSA9IGJ0bi50ZXh0Q29udGVudDtcclxuXHJcblx0XHRjb25zdCB0b2dnbGUgPSAoKSA9PiB7XHJcblxyXG5cdFx0XHRpZiAoIGJsb2NrLmNsYXNzTGlzdC5jb250YWlucygnaXMtb3BlbicpICkge1xyXG5cclxuXHRcdFx0XHRibG9jay5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJyk7XHJcblx0XHRcdFx0YnRuLnRleHRDb250ZW50ID0gdGV4dENsb3NlO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0YmxvY2suY2xhc3NMaXN0LmFkZCgnaXMtb3BlbicpO1xyXG5cdFx0XHRcdGJ0bi50ZXh0Q29udGVudCA9IGJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtYWx0Jyk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZSk7XHJcblxyXG5cdH07XHJcblxyXG5cdCggYmxvY2tzID0+IHtcclxuXHJcblx0XHRpZihibG9ja3MubGVuZ3RoKSB7XHJcblxyXG5cdFx0XHRbLi4uYmxvY2tzXS5mb3JFYWNoKCBibG9jayA9PiByZWFkbW9yZVRvZ2dsZShibG9jaykgKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZWFkbW9yZS10ZXh0JykpO1xyXG5cclxuXHQvLyBjb250ZW50XHJcblxyXG5cdCggYmxvY2tzID0+IHtcclxuXHJcblx0XHRpZihibG9ja3MubGVuZ3RoKSB7XHJcblxyXG5cdFx0XHRjb25zdCBpbml0ID0gKCk9PiB7XHJcblxyXG5cdFx0XHRcdGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlYWRtb3JlLXRlbXBsYXRlJykuaW5uZXJIVE1MO1xyXG5cclxuXHRcdFx0XHRbLi4uYmxvY2tzXS5mb3JFYWNoKCBibG9jayA9PiB7XHJcblxyXG5cdFx0XHRcdFx0Ly8gY29udGludWVcclxuXHJcblx0XHRcdFx0XHRpZiAoIGJsb2NrLmNsYXNzTGlzdC5jb250YWlucygnaXMtcmVhZG1vcmUtb2ZmJykgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vINC/0LXRgNC10LzQtdGJ0LDQtdC8INCyINC60L7QvdC10YZcclxuXHJcblx0XHRcdFx0XHRjb25zdCBtYWluID0gYmxvY2sucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ21haW4nKSA/IGJsb2NrLnBhcmVudE5vZGUgOiBmYWxzZTtcclxuXHJcblx0XHRcdFx0XHRpZiAoIG1haW4gKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRtYWluLmFwcGVuZChibG9jayk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vIHJlYWRtb3JlXHJcblxyXG5cdFx0XHRcdFx0bGV0IGFwcGVuZCA9IG51bGw7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgaHIgPSBibG9jay5xdWVyeVNlbGVjdG9yKCcucmVhZG1vcmUtaHInKTtcclxuXHJcblx0XHRcdFx0XHRbLi4uYmxvY2suY2hpbGRyZW5dLmZvckVhY2goIGVsID0+IHtcclxuXHJcblx0XHRcdFx0XHRcdGlmICggZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdyZWFkbW9yZS1ocicpIHx8ICggIWhyICYmICggZWwudGFnTmFtZSA9PT0gJ0gyJyB8fCBlbC50YWdOYW1lID09PSAnSDMnKSApICkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhlbC50YWdOYW1lKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKCBhcHBlbmQgPT09IG51bGwgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0YmxvY2suaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0ZW1wbGF0ZSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0YXBwZW5kID0gYmxvY2sucXVlcnlTZWxlY3RvcignLnJlYWRtb3JlLXRleHRfX2JvZHknKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0aWYoIGFwcGVuZCApIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0YXBwZW5kLmFwcGVuZChlbCk7XHJcblxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBociApIHtcclxuXHJcblx0XHRcdFx0XHRcdGhyLnJlbW92ZSgpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRpZiAoIGFwcGVuZCApIHtcclxuXHJcblx0XHRcdFx0XHRcdHJlYWRtb3JlVG9nZ2xlKGJsb2NrLnF1ZXJ5U2VsZWN0b3IoJy5yZWFkbW9yZS10ZXh0JykpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRzZXRUaW1lb3V0KCAoKSA9PiBpbml0KCksIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmYXN0TG9hZFNjcmlwdCcpID8gMCA6IDEwMDAwKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb250ZW50JykpO1xyXG5cclxufSkoKTsiLCIoIHJldmlldyA9PiB7XHJcblxyXG5cdGlmKCByZXZpZXcgKSB7XHJcblxyXG5cdFx0Ly8gc3ViXHJcblxyXG5cdFx0Y29uc3QgYnRuVG9nZ2xlU3ViID0gcmV2aWV3LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXZpZXdfX3RvZ2dsZS1zdWInKTtcclxuXHJcblx0XHRbLi4uYnRuVG9nZ2xlU3ViXS5mb3JFYWNoKCBidG4gPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgZ3JvdXAgPSBidG4uY2xvc2VzdCgnLnJldmlld19fZ3JvdXAnKSxcclxuXHRcdFx0XHQgIHRleHREZWZhdWx0ID0gYnRuLmlubmVySFRNTDtcclxuXHJcblx0XHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcblx0XHRcdFx0aWYgKCBncm91cC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLW9wZW4nKSApIHtcclxuXHJcblx0XHRcdFx0XHRncm91cC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJyk7XHJcblx0XHRcdFx0XHRidG4uaW5uZXJIVE1MID0gdGV4dERlZmF1bHQ7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0Z3JvdXAuY2xhc3NMaXN0LmFkZCgnaXMtb3BlbicpO1xyXG5cdFx0XHRcdFx0YnRuLnRleHRDb250ZW50ID0gYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1hbHQnKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXZpZXcnKSk7Iiwid2luZG93LnNlbGVjdHMgPSBzZWxlY3QgPT4ge1xyXG5cclxuXHRpZihzZWxlY3QucXVlcnlTZWxlY3RvcignLnNlbGVjdF9fbGlzdCcpKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblx0Y29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0LXRlbXBsYXRlJykuaW5uZXJIVE1MLFxyXG5cdFx0ICBmb3JtID0gc2VsZWN0LmNsb3Nlc3QoJ2Zvcm0nKSxcclxuXHRcdCAgY29udHJvbCA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKSxcclxuXHRcdCAgb3B0aW9uID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpLFxyXG5cdFx0ICBmaWx0ZXIgPSBzZWxlY3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3QtLWZpbHRlcicpLFxyXG5cdFx0ICBsaXN0ID0gW107XHJcblxyXG5cdGNvbnN0IHZhbHVlRGVmYXVsdCA9IGNvbnRyb2wucXVlcnlTZWxlY3RvcignW3ZhbHVlPVwiJyArIGNvbnRyb2wudmFsdWUgKyAnXCJdJykudGV4dENvbnRlbnQ7XHJcblxyXG5cdGlmKCBjb250cm9sLmRpc2FibGVkIHx8IGNvbnRyb2wudmFsdWUgPT09ICdub25lJyB8fCBjb250cm9sLnZhbHVlID09PSAnJyApe1xyXG5cclxuXHRcdHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdpcy1kZWZhdWx0Jyk7XHJcblxyXG5cdH1cclxuXHJcblx0Wy4uLm9wdGlvbl0uZm9yRWFjaCggZWwgPT4ge1xyXG5cclxuXHRcdGlmICggZWwudmFsdWUgPT09ICdub25lJyB8fCBlbC52YWx1ZSA9PT0gJycgKSB7XHJcblxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGxpc3QucHVzaCh7XHJcblx0XHRcdG5hbWUgIDogY29udHJvbC5uYW1lLFxyXG5cdFx0XHRsYWJlbCA6IGVsLnRleHRDb250ZW50LFxyXG5cdFx0XHR2YWx1ZSA6IGVsLnZhbHVlLFxyXG5cdFx0XHRjaGVja2VkIDogY29udHJvbC52YWx1ZSA9PT0gZWwudmFsdWVcclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcblx0c2VsZWN0LmlubmVySFRNTCA9IE11c3RhY2hlLnJlbmRlcih0ZW1wbGF0ZSwgeyB2YWx1ZURlZmF1bHQsIGxpc3QsIGZpbHRlciB9KTtcclxuXHJcblx0Y29uc3QgZmllbGRzZXQgPSBzZWxlY3QucXVlcnlTZWxlY3RvcignLnNlbGVjdF9fbGlzdCcpLFxyXG5cdFx0ICB2YWx1ZVRleHQgPSBzZWxlY3QucXVlcnlTZWxlY3RvcignLnNlbGVjdF9fdmFsdWUtaW5uZXInKTtcclxuXHJcblx0ZmllbGRzZXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGlmKCBldmVudC50YXJnZXQudGFnTmFtZSA9PT0gJ0lOUFVUJyApIHtcclxuXHJcblx0XHRcdGNvbnN0IGl0ZW0gPSBldmVudC50YXJnZXQucGFyZW50Tm9kZTtcclxuXHJcblx0XHRcdHZhbHVlVGV4dC50ZXh0Q29udGVudCA9IGl0ZW0udGV4dENvbnRlbnQ7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcblx0Zm9ybSAmJiBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNldFwiLCAoKSA9PiB7XHJcblxyXG5cdFx0c2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2lzLWRlZmF1bHQnKTtcclxuXHRcdHZhbHVlVGV4dC50ZXh0Q29udGVudCA9IHZhbHVlRGVmYXVsdDtcclxuXHJcblx0fSk7XHJcblxyXG5cdGlmICggZmlsdGVyICkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0XHRjb25zdCBpbnB1dEZpbHRlciA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19maWx0ZXInKTtcclxuXHJcblx0XHRpbnB1dEZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IHZhbHVlID0gaW5wdXRGaWx0ZXIudmFsdWUudG9Mb3dlckNhc2UoKTtcclxuXHJcblx0XHRcdGlmKHZhbHVlLmxlbmd0aCA+IDApIHtcclxuXHJcblx0XHRcdFx0Y29uc3QgbGlzdCA9IGZpZWxkc2V0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3RfX2xpc3QtaXRlbScpO1xyXG5cclxuXHRcdFx0XHRbLi4ubGlzdF0uZm9yRWFjaCggbyA9PiB7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgdGV4dCA9IG8udGV4dENvbnRlbnQudHJpbSgpLnRvTG93ZXJDYXNlKCk7XHJcblxyXG5cdFx0XHRcdFx0by5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJywgdGV4dC5pbmNsdWRlcyh2YWx1ZSkpO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0aWYoIGxpc3QubGVuZ3RoID09PSBmaWVsZHNldC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0X19saXN0LWl0ZW0uaGlkZScpLmxlbmd0aCApIHtcclxuXHJcblx0XHRcdFx0XHRzZWxlY3QuY2xhc3NMaXN0LmFkZCgnc2VsZWN0LS1maWx0ZXItZW1wdHknKTtcclxuXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0LS1maWx0ZXItZW1wdHknKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0Wy4uLmxpc3RdLmZvckVhY2goIG8gPT4gby5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykgKTtcclxuXHRcdFx0XHRzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0LS1maWx0ZXItZW1wdHknKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufTtcclxuXHJcbiggaXRlbXMgPT4ge1xyXG5cclxuXHRpZihpdGVtcy5sZW5ndGgpIHtcclxuXHJcblx0XHRbLi4uaXRlbXNdLmZvckVhY2goIHNlbGVjdCA9PiB3aW5kb3cuc2VsZWN0cyhzZWxlY3QpKTtcclxuXHJcblx0fVxyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRjb25zdCBpc1NlbGVjdCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuc2VsZWN0Jyk7XHJcblxyXG5cdFx0Wy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3QnKV0uZm9yRWFjaCggc2VsZWN0ID0+IHtcclxuXHJcblx0XHRcdGlmICggc2VsZWN0ID09PSBpc1NlbGVjdCApIHtcclxuXHJcblx0XHRcdFx0aWYgKCBldmVudC50YXJnZXQuY2xvc2VzdCgnLnNlbGVjdF9fdmFsdWUnKSApIHtcclxuXHJcblx0XHRcdFx0XHRzZWxlY3QuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtb3BlbicpO1xyXG5cclxuXHRcdFx0XHR9IGVsc2UgaWYgKCBldmVudC50YXJnZXQudGFnTmFtZSA9PT0gJ0lOUFVUJyApIHtcclxuXHJcblx0XHRcdFx0XHRzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3QnKSk7IiwiKCBzd2lwZXJDb250YWluZXIgPT4ge1xyXG5cclxuXHRpZighc3dpcGVyQ29udGFpbmVyLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRbLi4uc3dpcGVyQ29udGFpbmVyXS5mb3JFYWNoKCBzd2lwZSA9PiB7XHJcblxyXG5cdFx0bGV0IG15U3dpcGUgPSBudWxsLFxyXG5cdFx0XHR0b2dnbGVTd2lwZSA9IG51bGwsXHJcblx0XHRcdHJlc2V0U3dpcGUgPSBudWxsO1xyXG5cclxuXHRcdGNvbnN0IHN3aXBlTmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcblx0XHRcdCAgc3dpcGVCdG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcblx0XHRcdCAgc3dpcGVOZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyksXHJcblx0XHRcdCAgc3dpcGVQcmV2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyksXHJcblx0XHRcdCAgaXRlbXMgPSBzd2lwZS5xdWVyeVNlbGVjdG9yQWxsKCcuc3dpcGVyLXNsaWRlJyksXHJcblx0XHRcdCAgY291bnQgPSBpdGVtcy5sZW5ndGgsXHJcblx0XHRcdCAgYmlsbGJvYXJkID0gc3dpcGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzd2lwZXItY29udGFpbmVyLS1iaWxsYm9hcmQnKSxcclxuXHRcdFx0ICBuZXdzID0gc3dpcGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzd2lwZXItY29udGFpbmVyLS1uZXdzJyksXHJcblx0XHRcdCAgcHJldmlldyA9IHN3aXBlLmNsYXNzTGlzdC5jb250YWlucygnc3dpcGVyLWNvbnRhaW5lci0tcHJldmlldycpLFxyXG5cdFx0XHQgIHByb2R1Y3QgPSBzd2lwZS5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXBlci1jb250YWluZXItLXByb2R1Y3QnKSxcclxuXHRcdFx0ICBjZXJ0aWZpY2F0ZXMgPSBzd2lwZS5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXBlci1jb250YWluZXItLWNlcnRpZmljYXRlcycpLFxyXG5cdFx0XHQgIGNvbnN1bHRhdGlvbnMgPSBzd2lwZS5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXBlci1jb250YWluZXItLWNvbnN1bHRhdGlvbnMnKSxcclxuXHRcdFx0ICBwcm9kdWN0QXJ0aWNsZSA9IHN3aXBlLmNsYXNzTGlzdC5jb250YWlucygnc3dpcGVyLWNvbnRhaW5lci0tcHJvZHVjdC1hcnRpY2xlJyk7XHJcblxyXG5cdFx0c3dpcGVOYXYuY2xhc3NOYW1lID0gJ3N3aXBlci1wYWdpbmF0aW9uJztcclxuXHJcblx0XHRzd2lwZUJ0bnMuY2xhc3NOYW1lID0gJ3N3aXBlci1uYXZpZ2F0aW9uJztcclxuXHRcdHN3aXBlUHJldi5jbGFzc05hbWUgPSAnc3dpcGVyLWJ1dHRvbi1wcmV2IGJ1dHRvbic7XHJcblx0XHRzd2lwZU5leHQuY2xhc3NOYW1lID0gJ3N3aXBlci1idXR0b24tbmV4dCBidXR0b24nO1xyXG5cclxuXHRcdHN3aXBlUHJldi5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCdQcmV2aW91cyBzbGlkZScpO1xyXG5cdFx0c3dpcGVOZXh0LnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsJ05leHQgc2xpZGUnKTtcclxuXHJcblx0XHRzd2lwZVByZXYuaW5uZXJIVE1MID0gJzxzdmcgd2lkdGg9XCI0MFwiIGhlaWdodD1cIjQwXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx1c2UgeGxpbms6aHJlZj1cIiNzdmctYXJyb3ctY2hldnJvbi1sZWZ0XCIvPjwvc3ZnPic7XHJcblx0XHRzd2lwZU5leHQuaW5uZXJIVE1MID0gJzxzdmcgd2lkdGg9XCI0MFwiIGhlaWdodD1cIjQwXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx1c2UgeGxpbms6aHJlZj1cIiNzdmctYXJyb3ctY2hldnJvbi1yaWdodFwiLz48L3N2Zz4nO1xyXG5cclxuXHRcdHN3aXBlQnRucy5hcHBlbmQoc3dpcGVQcmV2KTtcclxuXHRcdHN3aXBlQnRucy5hcHBlbmQoc3dpcGVOZXh0KTtcclxuXHJcblx0XHRzd2lwZS5hcHBlbmQoc3dpcGVCdG5zKTtcclxuXHRcdHN3aXBlLmFwcGVuZChzd2lwZU5hdik7XHJcblxyXG5cdFx0cmVzZXRTd2lwZSA9ICgpID0+IHtcclxuXHJcblx0XHRcdGlmKG15U3dpcGUpIHtcclxuXHJcblx0XHRcdFx0bXlTd2lwZS5kZXN0cm95KGZhbHNlLHRydWUpO1xyXG5cdFx0XHRcdG15U3dpcGUgPSB1bmRlZmluZWQ7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRzd2lwZU5hdi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblx0XHRcdHN3aXBlQnRucy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRpZiAoIHN3aXBlLmNsb3Nlc3QoJy5zd2lwZXItY29udGFpbmVyLXN0eWxlJykgKSB7XHJcblxyXG5cdFx0XHRcdHN3aXBlLmNsb3Nlc3QoJy5zd2lwZXItY29udGFpbmVyLXN0eWxlJykuY2xhc3NMaXN0LnJlbW92ZSgnc3dpcGVyLWNvbnRhaW5lci1zdHlsZScpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZiAobmV3cykge1xyXG5cclxuXHRcdFx0c3dpcGUucGFyZW50Tm9kZS5hcHBlbmQoc3dpcGVCdG5zKTtcclxuXHRcdFx0c3dpcGUucGFyZW50Tm9kZS5hcHBlbmQoc3dpcGVOYXYpO1xyXG5cclxuXHRcdFx0dG9nZ2xlU3dpcGUgPSAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdHJlc2V0U3dpcGUoKTtcclxuXHJcblx0XHRcdFx0aWYgKCB3aW5kb3cuaW5uZXJXaWR0aCA+PSAxMjUwICYmIGNvdW50IDwgNSApIHtcclxuXHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0c3dpcGVOYXYuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cdFx0XHRcdHN3aXBlQnRucy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdHN3aXBlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdzd2lwZXItY29udGFpbmVyLXN0eWxlJyk7XHJcblxyXG5cdFx0XHRcdGNvbnN0IGdhcCA9IHdpbmRvdy5pbm5lcldpZHRoIDwgMTI1MCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+IDc2NyA/IDAgOiAyNDtcclxuXHJcblx0XHRcdFx0bXlTd2lwZSA9IG5ldyBTd2lwZXIoc3dpcGUsIHtcclxuXHRcdFx0XHRcdGxvb3A6IHRydWUsXHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IGdhcCxcclxuXHRcdFx0XHRcdHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuXHRcdFx0XHRcdHNsaWRlc1Blckdyb3VwOiAxLFxyXG5cdFx0XHRcdFx0bmF2aWdhdGlvbjoge1xyXG5cdFx0XHRcdFx0XHRuZXh0RWw6IHN3aXBlTmV4dCxcclxuXHRcdFx0XHRcdFx0cHJldkVsOiBzd2lwZVByZXZcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRwYWdpbmF0aW9uOiB7XHJcblx0XHRcdFx0XHRcdGVsOiBzd2lwZU5hdixcclxuXHRcdFx0XHRcdFx0Y2xpY2thYmxlOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRidWxsZXRDbGFzczogJ2J1dHRvbicsXHJcblx0XHRcdFx0XHRcdGJ1bGxldEFjdGl2ZUNsYXNzOiAnaXMtYWN0aXZlJ1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c3dpcGUuYWRkRXZlbnRMaXN0ZW5lcignc3dpcGVyUmVzaXplJywgdG9nZ2xlU3dpcGUpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoY29uc3VsdGF0aW9ucykge1xyXG5cclxuXHRcdFx0c3dpcGUucGFyZW50Tm9kZS5hcHBlbmQoc3dpcGVCdG5zKTtcclxuXHRcdFx0c3dpcGUucGFyZW50Tm9kZS5hcHBlbmQoc3dpcGVOYXYpO1xyXG5cclxuXHRcdFx0dG9nZ2xlU3dpcGUgPSAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdHJlc2V0U3dpcGUoKTtcclxuXHJcblx0XHRcdFx0aWYgKCB3aW5kb3cuaW5uZXJXaWR0aCA+PSAxMjUwICYmIGNvdW50IDwgMyApIHtcclxuXHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0c3dpcGVOYXYuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cdFx0XHRcdHN3aXBlQnRucy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdHN3aXBlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdzd2lwZXItY29udGFpbmVyLXN0eWxlJyk7XHJcblxyXG5cdFx0XHRcdGNvbnN0IGdhcCA9IHdpbmRvdy5pbm5lcldpZHRoIDwgMTI1MCA/IDE2IDogNDg7XHJcblxyXG5cdFx0XHRcdG15U3dpcGUgPSBuZXcgU3dpcGVyKHN3aXBlLCB7XHJcblx0XHRcdFx0XHRsb29wOiB0cnVlLFxyXG5cdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiBnYXAsXHJcblx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcblx0XHRcdFx0XHRzbGlkZXNQZXJHcm91cDogMSxcclxuXHRcdFx0XHRcdG5hdmlnYXRpb246IHtcclxuXHRcdFx0XHRcdFx0bmV4dEVsOiBzd2lwZU5leHQsXHJcblx0XHRcdFx0XHRcdHByZXZFbDogc3dpcGVQcmV2XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0cGFnaW5hdGlvbjoge1xyXG5cdFx0XHRcdFx0XHRlbDogc3dpcGVOYXYsXHJcblx0XHRcdFx0XHRcdGNsaWNrYWJsZTogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0YnVsbGV0Q2xhc3M6ICdidXR0b24nLFxyXG5cdFx0XHRcdFx0XHRidWxsZXRBY3RpdmVDbGFzczogJ2lzLWFjdGl2ZSdcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHN3aXBlLmFkZEV2ZW50TGlzdGVuZXIoJ3N3aXBlclJlc2l6ZScsIHRvZ2dsZVN3aXBlKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGNlcnRpZmljYXRlcykge1xyXG5cclxuXHRcdFx0c3dpcGUucGFyZW50Tm9kZS5hcHBlbmQoc3dpcGVCdG5zKTtcclxuXHRcdFx0c3dpcGUucGFyZW50Tm9kZS5hcHBlbmQoc3dpcGVOYXYpO1xyXG5cclxuXHRcdFx0dG9nZ2xlU3dpcGUgPSAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdHJlc2V0U3dpcGUoKTtcclxuXHJcblx0XHRcdFx0aWYgKCB3aW5kb3cuaW5uZXJXaWR0aCA+PSAxMjUwICYmIGNvdW50IDwgNCApIHtcclxuXHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0c3dpcGVOYXYuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cdFx0XHRcdHN3aXBlQnRucy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdHN3aXBlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdzd2lwZXItY29udGFpbmVyLXN0eWxlJyk7XHJcblxyXG5cdFx0XHRcdGNvbnN0IGdhcCA9IHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4ID8gMCA6IDI0O1xyXG5cclxuXHRcdFx0XHRteVN3aXBlID0gbmV3IFN3aXBlcihzd2lwZSwge1xyXG5cdFx0XHRcdFx0bG9vcDogdHJ1ZSxcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogZ2FwLFxyXG5cdFx0XHRcdFx0c2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG5cdFx0XHRcdFx0c2xpZGVzUGVyR3JvdXA6IDEsXHJcblx0XHRcdFx0XHRuYXZpZ2F0aW9uOiB7XHJcblx0XHRcdFx0XHRcdG5leHRFbDogc3dpcGVOZXh0LFxyXG5cdFx0XHRcdFx0XHRwcmV2RWw6IHN3aXBlUHJldlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHBhZ2luYXRpb246IHtcclxuXHRcdFx0XHRcdFx0ZWw6IHN3aXBlTmF2LFxyXG5cdFx0XHRcdFx0XHRjbGlja2FibGU6IHRydWUsXHJcblx0XHRcdFx0XHRcdGJ1bGxldENsYXNzOiAnYnV0dG9uJyxcclxuXHRcdFx0XHRcdFx0YnVsbGV0QWN0aXZlQ2xhc3M6ICdpcy1hY3RpdmUnXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRzd2lwZS5hZGRFdmVudExpc3RlbmVyKCdzd2lwZXJSZXNpemUnLCB0b2dnbGVTd2lwZSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChwcm9kdWN0QXJ0aWNsZSkge1xyXG5cclxuXHRcdFx0c3dpcGUucGFyZW50Tm9kZS5hcHBlbmQoc3dpcGVCdG5zKTtcclxuXHRcdFx0c3dpcGUucGFyZW50Tm9kZS5hcHBlbmQoc3dpcGVOYXYpO1xyXG5cclxuXHRcdFx0dG9nZ2xlU3dpcGUgPSAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdHJlc2V0U3dpcGUoKTtcclxuXHJcblx0XHRcdFx0aWYgKCB3aW5kb3cuaW5uZXJXaWR0aCA+PSAxMjUwICYmIGNvdW50IDwgNCApIHtcclxuXHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKCB3aW5kb3cuaW5uZXJXaWR0aCA+PSA3NjggKSB7XHJcblxyXG5cdFx0XHRcdFx0c3dpcGVCdG5zLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRzd2lwZU5hdi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdHN3aXBlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdzd2lwZXItY29udGFpbmVyLXN0eWxlJyk7XHJcblxyXG5cdFx0XHRcdGNvbnN0IGNlbnRlcmVkU2xpZGVzID0gd2luZG93LmlubmVyV2lkdGggPCA3Njg7XHJcblxyXG5cdFx0XHRcdG15U3dpcGUgPSBuZXcgU3dpcGVyKHN3aXBlLCB7XHJcblx0XHRcdFx0XHRyZXdpbmQ6IHRydWUsXHJcblx0XHRcdFx0XHRjZW50ZXJlZFNsaWRlczogY2VudGVyZWRTbGlkZXMsXHJcblx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcblx0XHRcdFx0XHRzbGlkZXNQZXJHcm91cDogMSxcclxuXHRcdFx0XHRcdG5hdmlnYXRpb246IHtcclxuXHRcdFx0XHRcdFx0bmV4dEVsOiBzd2lwZU5leHQsXHJcblx0XHRcdFx0XHRcdHByZXZFbDogc3dpcGVQcmV2XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0cGFnaW5hdGlvbjoge1xyXG5cdFx0XHRcdFx0XHRlbDogc3dpcGVOYXYsXHJcblx0XHRcdFx0XHRcdGNsaWNrYWJsZTogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0YnVsbGV0Q2xhc3M6ICdidXR0b24nLFxyXG5cdFx0XHRcdFx0XHRidWxsZXRBY3RpdmVDbGFzczogJ2lzLWFjdGl2ZSdcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHN3aXBlLmFkZEV2ZW50TGlzdGVuZXIoJ3N3aXBlclJlc2l6ZScsIHRvZ2dsZVN3aXBlKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHByZXZpZXcpIHtcclxuXHJcblx0XHRcdHN3aXBlLnBhcmVudE5vZGUuYXBwZW5kKHN3aXBlQnRucyk7XHJcblx0XHRcdHN3aXBlLnBhcmVudE5vZGUuYXBwZW5kKHN3aXBlTmF2KTtcclxuXHJcblx0XHRcdHRvZ2dsZVN3aXBlID0gKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRyZXNldFN3aXBlKCk7XHJcblxyXG5cdFx0XHRcdHN3aXBlTmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHRcdFx0XHRzd2lwZUJ0bnMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHRzd2lwZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnc3dpcGVyLWNvbnRhaW5lci1zdHlsZScpO1xyXG5cclxuXHRcdFx0XHRjb25zdCBnYXAgPSB3aW5kb3cuaW5uZXJXaWR0aCA8IDEyNTAgPyAwIDogMjQ7XHJcblxyXG5cdFx0XHRcdG15U3dpcGUgPSBuZXcgU3dpcGVyKHN3aXBlLCB7XHJcblx0XHRcdFx0XHRyZXdpbmQ6IHRydWUsXHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IGdhcCxcclxuXHRcdFx0XHRcdHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuXHRcdFx0XHRcdHNsaWRlc1Blckdyb3VwOiAxLFxyXG4vL1x0XHRcdFx0XHRzbGlkZXNQZXJHcm91cEF1dG86IHRydWUsXHJcblx0XHRcdFx0XHRuYXZpZ2F0aW9uOiB7XHJcblx0XHRcdFx0XHRcdG5leHRFbDogc3dpcGVOZXh0LFxyXG5cdFx0XHRcdFx0XHRwcmV2RWw6IHN3aXBlUHJldlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHBhZ2luYXRpb246IHtcclxuXHRcdFx0XHRcdFx0ZWw6IHN3aXBlTmF2LFxyXG5cdFx0XHRcdFx0XHRjbGlja2FibGU6IHRydWUsXHJcblx0XHRcdFx0XHRcdGJ1bGxldENsYXNzOiAnYnV0dG9uJyxcclxuXHRcdFx0XHRcdFx0YnVsbGV0QWN0aXZlQ2xhc3M6ICdpcy1hY3RpdmUnXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRzd2lwZS5hZGRFdmVudExpc3RlbmVyKCdzd2lwZXJSZXNpemUnLCB0b2dnbGVTd2lwZSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChiaWxsYm9hcmQpIHtcclxuXHJcblx0XHRcdHRvZ2dsZVN3aXBlID0gKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRyZXNldFN3aXBlKCk7XHJcblxyXG5cdFx0XHRcdHN3aXBlLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnc3dpcGVyLWNvbnRhaW5lci1zdHlsZScpO1xyXG5cclxuXHRcdFx0XHRpZiggd2luZG93LmlubmVyV2lkdGggPCAxMjUwICkge1xyXG5cclxuXHRcdFx0XHRcdHN3aXBlTmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0XHRteVN3aXBlID0gbmV3IFN3aXBlcihzd2lwZSwge1xyXG5cdFx0XHRcdFx0XHRsb29wOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRwYWdpbmF0aW9uOiB7XHJcblx0XHRcdFx0XHRcdFx0ZWw6IHN3aXBlTmF2LFxyXG5cdFx0XHRcdFx0XHRcdGNsaWNrYWJsZTogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRidWxsZXRDbGFzczogJ2J1dHRvbicsXHJcblx0XHRcdFx0XHRcdFx0YnVsbGV0QWN0aXZlQ2xhc3M6ICdpcy1hY3RpdmUnXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdHN3aXBlQnRucy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdFx0bXlTd2lwZSA9IG5ldyBTd2lwZXIoc3dpcGUsIHtcclxuXHRcdFx0XHRcdFx0bG9vcDogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0YXV0b3BsYXk6IHtcclxuXHRcdFx0XHRcdFx0XHRkZWxheTogNTAwMFxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRlZmZlY3Q6ICdmYWRlJyxcclxuXHRcdFx0XHRcdFx0ZmFkZUVmZmVjdDoge1xyXG5cdFx0XHRcdFx0XHRcdGNyb3NzRmFkZTogdHJ1ZVxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRuYXZpZ2F0aW9uOiB7XHJcblx0XHRcdFx0XHRcdFx0bmV4dEVsOiBzd2lwZU5leHQsXHJcblx0XHRcdFx0XHRcdFx0cHJldkVsOiBzd2lwZVByZXZcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHN3aXBlLmFkZEV2ZW50TGlzdGVuZXIoJ3N3aXBlclJlc2l6ZScsIHRvZ2dsZVN3aXBlKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHByb2R1Y3QpIHtcclxuXHJcblx0XHRcdHN3aXBlTmF2LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcblx0XHRcdGNvbnN0IGdhbGxlcnlQcmV2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3QtZ2FsbGVyeV9fcHJldmlldy1saW5rJyk7XHJcblxyXG5cdFx0XHR0b2dnbGVTd2lwZSA9ICgpID0+IHtcclxuXHJcblx0XHRcdFx0dG9nZ2xlU3dpcGUgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0c3dpcGUucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdzd2lwZXItY29udGFpbmVyLXN0eWxlJyk7XHJcblxyXG5cdFx0XHRcdG5ldyBTd2lwZXIoc3dpcGUsIHtcclxuXHRcdFx0XHRcdGxvb3A6IHRydWUsXHJcblx0XHRcdFx0XHRuYXZpZ2F0aW9uOiB7XHJcblx0XHRcdFx0XHRcdG5leHRFbDogc3dpcGVOZXh0LFxyXG5cdFx0XHRcdFx0XHRwcmV2RWw6IHN3aXBlUHJldlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdG9uOiB7XHJcblx0XHRcdFx0XHRcdHNsaWRlQ2hhbmdlIDogKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRbLi4uZ2FsbGVyeVByZXZpZXddLmZvckVhY2goIChfbGluayxpbmRleCkgPT4gX2xpbmsucGFyZW50Tm9kZS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1jdXJyZW50Jywgc3dpcGUuc3dpcGVyLnJlYWxJbmRleCA9PT0gaW5kZXgpICk7XHJcblxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHN3aXBlLmFkZEV2ZW50TGlzdGVuZXIoJ3N3aXBlckpzTG9hZCcsIHRvZ2dsZVN3aXBlKTtcclxuXHJcblx0fSk7XHJcblxyXG5cdGxldCByZXNpemVUaW1lb3V0ID0gbnVsbCxcclxuXHRcdHdpbmRvd1dpZHRoT0xkID0gd2luZG93LmlubmVyV2lkdGg7XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcclxuXHJcblx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCAoKSA9PiB7XHJcblxyXG5cdFx0XHRpZiAocmVzaXplVGltZW91dCA9PT0gbnVsbCkge1xyXG5cclxuXHRcdFx0XHRyZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dCggKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdHJlc2l6ZVRpbWVvdXQgPSBudWxsO1xyXG5cclxuXHRcdFx0XHRcdGlmKHdpbmRvd1dpZHRoT0xkICE9PSB3aW5kb3cuaW5uZXJXaWR0aCkge1xyXG5cclxuXHRcdFx0XHRcdFx0d2luZG93V2lkdGhPTGQgPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHJcblx0XHRcdFx0XHRcdGlmICh3aW5kb3cuU3dpcGVyKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFsuLi5zd2lwZXJDb250YWluZXJdLmZvckVhY2goIHN3aXBlID0+IHN3aXBlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwic3dpcGVyUmVzaXplXCIpKSApO1xyXG5cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSwgMTAwMCk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuXHJcblx0c2NyaXB0LnNyYyA9ICcvanMvc3dpcGVyLm1pbi5qcyc7XHJcblxyXG5cdHNjcmlwdC5vbmxvYWQgPSAoKSA9PiBbLi4uc3dpcGVyQ29udGFpbmVyXS5mb3JFYWNoKCBzd2lwZSA9PiBzd2lwZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcInN3aXBlckpzTG9hZFwiKSkgKTtcclxuXHJcblx0c2V0VGltZW91dCggKCkgPT4gZG9jdW1lbnQuaGVhZC5hcHBlbmQoc2NyaXB0KSwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Zhc3RMb2FkU2NyaXB0JykgPyAwIDogMTAwMDApO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN3aXBlci1jb250YWluZXInKSk7IiwiKCB0YWJzID0+IHtcclxuXHJcblx0aWYgKCB0YWJzLmxlbmd0aCA+IDAgKSB7XHJcblxyXG5cdFx0Wy4uLnRhYnNdLmZvckVhY2goIHRhYiA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpLFxyXG5cdFx0XHRcdCAgYXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInN2Z1wiKTtcclxuXHJcblx0XHRcdGFycm93LnNldEF0dHJpYnV0ZU5TKG51bGwsIFwidmlld0JveFwiLCBcIjAgMCAyNCAyNFwiKTtcclxuXHRcdFx0YXJyb3cuc2V0QXR0cmlidXRlTlMobnVsbCwgXCJ3aWR0aFwiLCAyNCk7XHJcblx0XHRcdGFycm93LnNldEF0dHJpYnV0ZU5TKG51bGwsIFwiaGVpZ2h0XCIsIDI0KTtcclxuXHJcblx0XHRcdGFycm93LmlubmVySFRNTCA9ICc8dXNlIHhsaW5rOmhyZWY9XCIjc3ZnLWFycm93LWNoZXZyb24tZG93blwiLz4nO1xyXG5cclxuXHRcdFx0Y29uc3QgYnRucyA9IHRhYi5xdWVyeVNlbGVjdG9yQWxsKCcudGFic19fYnRuJyksXHJcblx0XHRcdFx0ICBpdGVtcyA9IHRhYi5xdWVyeVNlbGVjdG9yQWxsKCcudGFic19faXRlbScpO1xyXG5cclxuXHRcdFx0Wy4uLmJ0bnNdLmZvckVhY2goIChidG4saW5kZXgpID0+IHtcclxuXHJcblx0XHRcdFx0YnRuLmFwcGVuZENoaWxkKGFycm93LmNsb25lTm9kZSh0cnVlKSk7XHJcblxyXG5cdFx0XHRcdGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcblx0XHRcdFx0b3B0aW9uLnZhbHVlID0gaW5kZXg7XHJcblx0XHRcdFx0b3B0aW9uLnRleHRDb250ZW50ID0gYnRuLnRleHRDb250ZW50O1xyXG5cdFx0XHRcdHNlbGVjdC5hcHBlbmQob3B0aW9uKTtcclxuXHJcblx0XHRcdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdFsuLi5idG5zXS5mb3JFYWNoKCAoX2J0bixfaW5kZXgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRcdF9idG4uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJywgX2J0biA9PT0gYnRuKTtcclxuXHRcdFx0XHRcdFx0aXRlbXNbX2luZGV4XS5jbGFzc0xpc3QudG9nZ2xlKCd2aXN1YWxseWhpZGRlbicsIF9idG4gIT09IGJ0bik7XHJcblxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRbLi4uaXRlbXNdLmZvckVhY2goIGl0ZW0gPT4ge1xyXG5cclxuXHRcdFx0XHRpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ3NldEFjdGl2ZScsICgpPT4ge1xyXG5cclxuXHRcdFx0XHRcdFsuLi5pdGVtc10uZm9yRWFjaCggKF9pdGVtLF9pbmRleCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdFx0YnRuc1tfaW5kZXhdLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScsIF9pdGVtID09PSBpdGVtKTtcclxuXHRcdFx0XHRcdFx0X2l0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgndmlzdWFsbHloaWRkZW4nLCBfaXRlbSAhPT0gaXRlbSk7XHJcblxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0XHRjb25zdCBpbmRleCA9IHBhcnNlSW50KHNlbGVjdC52YWx1ZSk7XHJcblxyXG5cdFx0XHRcdFsuLi5idG5zXS5mb3JFYWNoKCAoYnRuLF9pbmRleCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdGJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnLCBfaW5kZXggPT09IGluZGV4KTtcclxuXHRcdFx0XHRcdGl0ZW1zW19pbmRleF0uY2xhc3NMaXN0LnRvZ2dsZSgndmlzdWFsbHloaWRkZW4nLCBfaW5kZXggIT09IGluZGV4KTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHRhYi5xdWVyeVNlbGVjdG9yKCcudGFic19fbmF2JykucHJlcGVuZChzZWxlY3QpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFicycpKTtcclxuXHJcbi8qKCB0YWJzID0+IHtcclxuXHJcblx0aWYgKCB0YWJzLmxlbmd0aCA+IDAgKSB7XHJcblxyXG5cdFx0Wy4uLnRhYnNdLmZvckVhY2goIHRhYiA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCBidG4gPSB0YWIucXVlcnlTZWxlY3RvckFsbCgnLnRhYnNfX2J0bicpLFxyXG5cdFx0XHRcdCAgaXRlbSA9IHRhYi5xdWVyeVNlbGVjdG9yQWxsKCcudGFic19faXRlbScpLFxyXG5cdFx0XHRcdCAgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG5cdFx0XHRbLi4uYnRuXS5mb3JFYWNoKCAoYnRuLGluZGV4KSA9PiB7XHJcblxyXG5cdFx0XHRcdGNvbnN0IF9idG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHJcblx0XHRcdFx0X2J0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcclxuXHJcblx0XHRcdFx0X2J0bi5jbGFzc05hbWUgPSBpbmRleCA9PT0gMCA/ICdidG4gYnRuLS1ncmV5JyA6ICdidG4gYnRuLS1vdXRsaW5lJztcclxuXHJcblx0XHRcdFx0X2J0bi50ZXh0Q29udGVudCA9IGJ0bi50ZXh0Q29udGVudDtcclxuXHJcblx0XHRcdFx0bmF2LmFwcGVuZENoaWxkKF9idG4pO1xyXG5cclxuXHRcdFx0XHRfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdFsuLi5uYXYucXVlcnlTZWxlY3RvckFsbCgnLmJ0bicpXS5mb3JFYWNoKCAoYnRuLGluZGV4KSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0XHRidG4uY2xhc3NMaXN0LnRvZ2dsZSgnYnRuLS1ncmV5JywgX2J0biA9PT0gYnRuKTtcclxuXHRcdFx0XHRcdFx0YnRuLmNsYXNzTGlzdC50b2dnbGUoJ2J0bi0tb3V0bGluZScsIF9idG4gIT09IGJ0bik7XHJcblxyXG5cdFx0XHRcdFx0XHRpdGVtW2luZGV4XS5jbGFzc0xpc3QudG9nZ2xlKCd2aXN1YWxseWhpZGRlbicsIF9idG4gIT09IGJ0bik7XHJcblxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRidG4ucmVtb3ZlKCk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdG5hdi5jbGFzc0xpc3QuYWRkKCd0YWJzX19uYXYnKTtcclxuXHRcdFx0dGFiLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJiZWdpbicsIG5hdik7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJzJykpOyovIiwiLy8gdGl0bGVcclxuXHJcbiggdG9vbHRpcHMgPT4ge1xyXG5cclxuXHRpZih0b29sdGlwcy5sZW5ndGgpe1xyXG5cclxuXHRcdFsuLi50b29sdGlwc10uZm9yRWFjaCggdG9vbHRpcCA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHJcblx0XHRcdHRpdGxlLmNsYXNzTmFtZSA9ICd0b29sdGlwLXRpdGxlX19pbm5lcic7XHJcblx0XHRcdHRpdGxlLnRleHRDb250ZW50ID0gdG9vbHRpcC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcclxuXHJcblx0XHRcdHRvb2x0aXAucmVtb3ZlQXR0cmlidXRlKCd0aXRsZScpO1xyXG5cdFx0XHR0b29sdGlwLmFwcGVuZCh0aXRsZSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0bGV0IHRpbWVvdXQgPSBudWxsO1xyXG5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHtcclxuXHJcblx0XHRcdFx0aWYgKCBldmVudC50YXJnZXQgIT09IGRvY3VtZW50ICkge1xyXG5cclxuXHRcdFx0XHRcdGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcudG9vbHRpcC10aXRsZScpO1xyXG5cclxuXHRcdFx0XHRcdFsuLi50b29sdGlwc10uZm9yRWFjaCggdG9vbHRpcCA9PiB7XHJcblxyXG5cdFx0XHRcdFx0XHRpZih0YXJnZXQgIT09IHRvb2x0aXApIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0dG9vbHRpcC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1zaG93Jyk7XHJcblxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKHRpbWVvdXQgIT09IG51bGwpIHtcclxuXHJcblx0XHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0dGltZW91dCA9IHNldFRpbWVvdXQoICgpPT4ge1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKCB0YXJnZXQgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHRhcmdldC5jbGFzc0xpc3QuYWRkKCdpcy1zaG93Jyk7XHJcblxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fSwgMzAwKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b29sdGlwLXRpdGxlJykpO1xyXG5cclxuLy8gdG9vbHRpcFxyXG5cclxuZnVuY3Rpb24gVG9vbHRpcCh0b29sdGlwKSB7XHJcblxyXG5cdGxldCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKG11dGF0aW9uUmVjb3JkcyA9PiB7XHJcblxyXG5cdFx0Y29uc3QgdCA9IG11dGF0aW9uUmVjb3Jkc1swXS50YXJnZXQsXHJcblx0XHRcdCAgaW5uZXIgPSB0LnF1ZXJ5U2VsZWN0b3IoJy50b29sdGlwX19pbm5lcicpO1xyXG5cclxuXHRcdGlmKHQub3Blbikge1xyXG5cclxuXHRcdFx0Y29uc3QgcmVjdCA9IGlubmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuXHRcdFx0aWYoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIDwgcmVjdC5yaWdodCkge1xyXG5cclxuXHRcdFx0XHQvLyDQu9C10LLQtdC1XHJcblxyXG5cdFx0XHRcdGlubmVyLnN0eWxlLm1hcmdpbkxlZnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggLSByZWN0LnJpZ2h0ICsgJ3B4JztcclxuXHJcblx0XHRcdH0gZWxzZSBpZihyZWN0LmxlZnQgPCAwKSB7XHJcblxyXG5cdFx0XHRcdC8vINC/0YDQsNCy0LXQtVxyXG5cclxuXHRcdFx0XHRpbm5lci5zdHlsZS5tYXJnaW5MZWZ0ID0gLXJlY3QubGVmdCArICdweCc7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdGlubmVyLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBidG4gPSB0b29sdGlwLnF1ZXJ5U2VsZWN0b3IoJy50b29sdGlwX19idG4nKTtcclxuXHJcblx0b2JzZXJ2ZXIub2JzZXJ2ZSh0b29sdGlwLCB7XHJcblxyXG5cdFx0YXR0cmlidXRlcyA6IHRydWVcclxuXHJcblx0fSk7XHJcblxyXG5cdHRvb2x0aXAuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcclxuXHJcblx0XHRpZiAoIHdpbmRvdy5pbm5lcldpZHRoID49IDEyNTAgKSB7XHJcblxyXG5cdFx0XHR0b29sdGlwLm9wZW4gPSB0cnVlO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG5cdHRvb2x0aXAuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcclxuXHJcblx0XHRpZiAoIHdpbmRvdy5pbm5lcldpZHRoID49IDEyNTAgKSB7XHJcblxyXG5cdFx0XHR0b29sdGlwLm9wZW4gPSBmYWxzZTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxufVxyXG5cclxuKCB0b29sdGlwcyA9PiB7XHJcblxyXG5cdGlmKCB0b29sdGlwcy5sZW5ndGggKSB7XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRpZiAoIGV2ZW50LnRhcmdldCAhPT0gZG9jdW1lbnQgKSB7XHJcblxyXG5cdFx0XHRcdGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcudG9vbHRpcCcpO1xyXG5cclxuXHRcdFx0XHRbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvb2x0aXAnKV0uZm9yRWFjaCggdG9vbHRpcCA9PiB7XHJcblxyXG5cdFx0XHRcdFx0aWYodGFyZ2V0ICE9PSB0b29sdGlwKSB7XHJcblxyXG5cdFx0XHRcdFx0XHR0b29sdGlwLm9wZW4gPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdFsuLi50b29sdGlwc10uZm9yRWFjaCggdG9vbHRpcCA9PiBuZXcgVG9vbHRpcCh0b29sdGlwKSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b29sdGlwJykpOyIsIiggdG9zdGVyID0+IHtcblxuXHRpZih0b3N0ZXIpe1xuXG5cdFx0bGV0IGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7IFwiKSxcblx0XHRcdGNvb2tpZXNWYWx1ZSA9IG51bGw7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGNvb2tpZXMubGVuZ3RoOyBpKyspIHtcblxuXHRcdFx0bGV0IGNvb2tpZSA9IGNvb2tpZXNbaV0uc3BsaXQoXCI9XCIpO1xuXG5cdFx0XHRpZiAoY29va2llWzBdID09PSBcInRvc3RlclwiKSB7XG5cblx0XHRcdFx0Y29va2llc1ZhbHVlID0gY29va2llWzFdO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRjb25zdCBidG4gPSB0b3N0ZXIucXVlcnlTZWxlY3RvcignLnRvc3Rlcl9fY2xvc2UnKTtcblx0XHRjb25zdCBuYW1lQ3VycmVudCA9IHRvc3Rlci5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpO1xuXG5cdFx0aWYgKCBjb29raWVzVmFsdWUgIT09IG51bGwgJiYgY29va2llc1ZhbHVlLnNwbGl0KFwifFwiKS5pbmNsdWRlcyhuYW1lQ3VycmVudCkgKSB7XG5cblx0XHRcdHRvc3Rlci5yZW1vdmUoKTtcblxuXHRcdH1cblx0XHRlbHNlIHtcblxuXHRcdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cblx0XHRcdFx0Y29va2llc1ZhbHVlID0gY29va2llc1ZhbHVlID09PSBudWxsID8gbmFtZUN1cnJlbnQgOiBjb29raWVzVmFsdWUgKyAnfCcgKyBuYW1lQ3VycmVudDtcblxuXHRcdFx0XHRkb2N1bWVudC5jb29raWUgPSBcInRvc3Rlcj1cIiArIGNvb2tpZXNWYWx1ZSArIFwiOyBwYXRoPS9cIjtcblxuXHRcdFx0XHR0b3N0ZXIucmVtb3ZlKCk7XG5cblx0XHRcdH0pO1xuXG5cdFx0fVxuXG5cdH1cblxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvc3RlcicpKTsiLCIoIHZpZGVvcyA9PiB7XG5cblx0aWYodmlkZW9zLmxlbmd0aCl7XG5cblx0XHRmdW5jdGlvbiBZb3VUdWJlR2V0SUQodXJsKSB7XG5cblx0XHRcdGxldCBJRCA9ICcnO1xuXG5cdFx0XHR1cmwgPSB1cmwucmVwbGFjZSgvKD58PCkvZ2ksJycpLnNwbGl0KC8odmlcXC98dj18XFwvdlxcL3x5b3V0dVxcLmJlXFwvfFxcL2VtYmVkXFwvKS8pO1xuXG5cdFx0XHRpZih1cmxbMl0gIT09IHVuZGVmaW5lZCkge1xuXG5cdFx0XHRcdElEID0gdXJsWzJdLnNwbGl0KC9bXjAtOWEtel9cXC1dL2kpO1xuXHRcdFx0XHRJRCA9IElEWzBdO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdElEID0gdXJsO1xuXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBJRDtcblxuXHRcdH1cblxuXHRcdGlmICggdmlkZW9zLmxlbmd0aCA+IDEgKSB7XG5cblx0XHRcdC8vIEluamVjdCBZb3VUdWJlIEFQSSBzY3JpcHRcblx0XHRcdGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXHRcdFx0c2NyaXB0LnNyYyA9IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vcGxheWVyX2FwaVwiO1xuXHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmQoc2NyaXB0KTtcblxuXHRcdH1cblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xuXG5cdFx0XHRjb25zdCBjbGlwUHJldmlldyA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcudmlkZW8tY2xpcF9fbGluaycpO1xuXG5cdFx0XHRpZiAoIGNsaXBQcmV2aWV3ICkge1xuXG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdFx0Y29uc3QgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG5cblx0XHRcdFx0aWZyYW1lLnNldEF0dHJpYnV0ZSgnYWxsb3dmdWxsc2NyZWVuJywgJycpO1xuXHRcdFx0XHRpZnJhbWUuc2V0QXR0cmlidXRlKCdzcmMnLCAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJyArIFlvdVR1YmVHZXRJRChjbGlwUHJldmlldy5ocmVmKSArICc/cmVsPTAmc2hvd2luZm89MCZhdXRvcGxheT0xJmVuYWJsZWpzYXBpPTEmaHRtbDU9MScpO1xuXG5cdFx0XHRcdGNsaXBQcmV2aWV3LnBhcmVudE5vZGUuYXBwZW5kKGlmcmFtZSk7XG5cdFx0XHRcdGNsaXBQcmV2aWV3LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnaXMtaWZyYW1lJyk7XG5cblx0XHRcdFx0aWYgKCB2aWRlb3MubGVuZ3RoID4gMSApIHtcblxuXHRcdFx0XHRcdFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudmlkZW8tY2xpcC5pcy1pZnJhbWUnKV0uZm9yRWFjaCggdmlkZW8gPT4ge1xuXG5cdFx0XHRcdFx0XHRpZiAoIGNsaXBQcmV2aWV3LnBhcmVudE5vZGUgPT09IHZpZGVvICkge1xuXG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRjb25zdCBpZnJhbWUgPSB2aWRlby5xdWVyeVNlbGVjdG9yKCdpZnJhbWUnKTtcblxuXHRcdFx0XHRcdFx0aWYgKCBpZnJhbWUgKSB7XG5cblx0XHRcdFx0XHRcdFx0bGV0IHBsYXllciA9IG5ldyBZVC5QbGF5ZXIoaWZyYW1lLCB7XG5cdFx0XHRcdFx0XHRcdFx0ZXZlbnRzOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRvblJlYWR5OiAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBsYXllci5wYXVzZVZpZGVvKCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHR9KTtcblxuXHR9XG5cbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy52aWRlby1jbGlwJykpOyJdfQ==
