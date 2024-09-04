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

	const mobileOpen = document.querySelector('.js-filter-mobile-open');

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

	mobileOpen.addEventListener("click", () => {

		windowScroll = window.pageYOffset;

		document.documentElement.classList.add('scroll-behavior-off');

		window.requestAnimationFrame( () => {

			document.body.classList.add('is-filter-show');
			window.scrollTo(0,0);

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dG9zaXplLm1pbi5qcyIsImNsaXBib2FyZC5taW4uanMiLCJtdXN0YWNoZS5taW4uanMiLCJwaWNrbWV1cC5taW4uanMiLCJqcy5qcyIsImFjY29yZGlvbi5qcyIsImFydGljbGUuanMiLCJicmFuZHMuanMiLCJjYXJ0LmpzIiwiY29uc3VsdGF0aW9ucy5qcyIsImRlYWRsaW5lLmpzIiwiZXZlbnRzLmpzIiwiZmlsdGVyLXJvdy5qcyIsImZpbHRlci5qcyIsImZvcm0uanMiLCJoZWFkZXIuanMiLCJpbnB1dG1hc2suanMiLCJsay5qcyIsIm1lbnUuanMiLCJtb2RhbC5qcyIsIm5ld3MuanMiLCJvcmRlci5qcyIsInBhZ2UtdXAuanMiLCJwaG9uZS1jb3VudHJ5LmpzIiwicGlja21ldXAuanMiLCJwcmV2aWV3LWNhcmQtY29sb3IuanMiLCJwcmV2aWV3LWNhcmQtdm9sdW1lLmpzIiwicHJvZHVjdC5qcyIsInJlYWRtb3JlLXRleHQuanMiLCJyZXZpZXcuanMiLCJzZWxlY3QuanMiLCJzd2lwZXIuanMiLCJ0YWJzLmpzIiwidG9vbHRpcC5qcyIsInRvc3Rlci5qcyIsInZpZGVvLWNsaXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTkE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcE5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDalJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pLQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaGFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIhZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZSh0KTooZXx8c2VsZikuYXV0b3NpemU9dCgpfSh0aGlzLGZ1bmN0aW9uKCl7dmFyIGUsdCxuPVwiZnVuY3Rpb25cIj09dHlwZW9mIE1hcD9uZXcgTWFwOihlPVtdLHQ9W10se2hhczpmdW5jdGlvbih0KXtyZXR1cm4gZS5pbmRleE9mKHQpPi0xfSxnZXQ6ZnVuY3Rpb24obil7cmV0dXJuIHRbZS5pbmRleE9mKG4pXX0sc2V0OmZ1bmN0aW9uKG4sbyl7LTE9PT1lLmluZGV4T2YobikmJihlLnB1c2gobiksdC5wdXNoKG8pKX0sZGVsZXRlOmZ1bmN0aW9uKG4pe3ZhciBvPWUuaW5kZXhPZihuKTtvPi0xJiYoZS5zcGxpY2UobywxKSx0LnNwbGljZShvLDEpKX19KSxvPWZ1bmN0aW9uKGUpe3JldHVybiBuZXcgRXZlbnQoZSx7YnViYmxlczohMH0pfTt0cnl7bmV3IEV2ZW50KFwidGVzdFwiKX1jYXRjaChlKXtvPWZ1bmN0aW9uKGUpe3ZhciB0PWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiRXZlbnRcIik7cmV0dXJuIHQuaW5pdEV2ZW50KGUsITAsITEpLHR9fWZ1bmN0aW9uIHIoZSl7dmFyIHQ9bi5nZXQoZSk7dCYmdC5kZXN0cm95KCl9ZnVuY3Rpb24gaShlKXt2YXIgdD1uLmdldChlKTt0JiZ0LnVwZGF0ZSgpfXZhciBsPW51bGw7cmV0dXJuXCJ1bmRlZmluZWRcIj09dHlwZW9mIHdpbmRvd3x8XCJmdW5jdGlvblwiIT10eXBlb2Ygd2luZG93LmdldENvbXB1dGVkU3R5bGU/KChsPWZ1bmN0aW9uKGUpe3JldHVybiBlfSkuZGVzdHJveT1mdW5jdGlvbihlKXtyZXR1cm4gZX0sbC51cGRhdGU9ZnVuY3Rpb24oZSl7cmV0dXJuIGV9KTooKGw9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZSYmQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChlLmxlbmd0aD9lOltlXSxmdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24oZSl7aWYoZSYmZS5ub2RlTmFtZSYmXCJURVhUQVJFQVwiPT09ZS5ub2RlTmFtZSYmIW4uaGFzKGUpKXt2YXIgdCxyPW51bGwsaT1udWxsLGw9bnVsbCxkPWZ1bmN0aW9uKCl7ZS5jbGllbnRXaWR0aCE9PWkmJmMoKX0sdT1mdW5jdGlvbih0KXt3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLGQsITEpLGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsYywhMSksZS5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5dXBcIixjLCExKSxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhdXRvc2l6ZTpkZXN0cm95XCIsdSwhMSksZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiYXV0b3NpemU6dXBkYXRlXCIsYywhMSksT2JqZWN0LmtleXModCkuZm9yRWFjaChmdW5jdGlvbihuKXtlLnN0eWxlW25dPXRbbl19KSxuLmRlbGV0ZShlKX0uYmluZChlLHtoZWlnaHQ6ZS5zdHlsZS5oZWlnaHQscmVzaXplOmUuc3R5bGUucmVzaXplLG92ZXJmbG93WTplLnN0eWxlLm92ZXJmbG93WSxvdmVyZmxvd1g6ZS5zdHlsZS5vdmVyZmxvd1gsd29yZFdyYXA6ZS5zdHlsZS53b3JkV3JhcH0pO2UuYWRkRXZlbnRMaXN0ZW5lcihcImF1dG9zaXplOmRlc3Ryb3lcIix1LCExKSxcIm9ucHJvcGVydHljaGFuZ2VcImluIGUmJlwib25pbnB1dFwiaW4gZSYmZS5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIixjLCExKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLGQsITEpLGUuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsYywhMSksZS5hZGRFdmVudExpc3RlbmVyKFwiYXV0b3NpemU6dXBkYXRlXCIsYywhMSksZS5zdHlsZS5vdmVyZmxvd1g9XCJoaWRkZW5cIixlLnN0eWxlLndvcmRXcmFwPVwiYnJlYWstd29yZFwiLG4uc2V0KGUse2Rlc3Ryb3k6dSx1cGRhdGU6Y30pLFwidmVydGljYWxcIj09PSh0PXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGUsbnVsbCkpLnJlc2l6ZT9lLnN0eWxlLnJlc2l6ZT1cIm5vbmVcIjpcImJvdGhcIj09PXQucmVzaXplJiYoZS5zdHlsZS5yZXNpemU9XCJob3Jpem9udGFsXCIpLHI9XCJjb250ZW50LWJveFwiPT09dC5ib3hTaXppbmc/LShwYXJzZUZsb2F0KHQucGFkZGluZ1RvcCkrcGFyc2VGbG9hdCh0LnBhZGRpbmdCb3R0b20pKTpwYXJzZUZsb2F0KHQuYm9yZGVyVG9wV2lkdGgpK3BhcnNlRmxvYXQodC5ib3JkZXJCb3R0b21XaWR0aCksaXNOYU4ocikmJihyPTApLGMoKX1mdW5jdGlvbiBhKHQpe3ZhciBuPWUuc3R5bGUud2lkdGg7ZS5zdHlsZS53aWR0aD1cIjBweFwiLGUuc3R5bGUud2lkdGg9bixlLnN0eWxlLm92ZXJmbG93WT10fWZ1bmN0aW9uIHMoKXtpZigwIT09ZS5zY3JvbGxIZWlnaHQpe3ZhciB0PWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1bXTtlJiZlLnBhcmVudE5vZGUmJmUucGFyZW50Tm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQ7KWUucGFyZW50Tm9kZS5zY3JvbGxUb3AmJnQucHVzaCh7bm9kZTplLnBhcmVudE5vZGUsc2Nyb2xsVG9wOmUucGFyZW50Tm9kZS5zY3JvbGxUb3B9KSxlPWUucGFyZW50Tm9kZTtyZXR1cm4gdH0oZSksbj1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQmJmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7ZS5zdHlsZS5oZWlnaHQ9XCJcIixlLnN0eWxlLmhlaWdodD1lLnNjcm9sbEhlaWdodCtyK1wicHhcIixpPWUuY2xpZW50V2lkdGgsdC5mb3JFYWNoKGZ1bmN0aW9uKGUpe2Uubm9kZS5zY3JvbGxUb3A9ZS5zY3JvbGxUb3B9KSxuJiYoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcD1uKX19ZnVuY3Rpb24gYygpe3MoKTt2YXIgdD1NYXRoLnJvdW5kKHBhcnNlRmxvYXQoZS5zdHlsZS5oZWlnaHQpKSxuPXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGUsbnVsbCkscj1cImNvbnRlbnQtYm94XCI9PT1uLmJveFNpemluZz9NYXRoLnJvdW5kKHBhcnNlRmxvYXQobi5oZWlnaHQpKTplLm9mZnNldEhlaWdodDtpZihyPHQ/XCJoaWRkZW5cIj09PW4ub3ZlcmZsb3dZJiYoYShcInNjcm9sbFwiKSxzKCkscj1cImNvbnRlbnQtYm94XCI9PT1uLmJveFNpemluZz9NYXRoLnJvdW5kKHBhcnNlRmxvYXQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZSxudWxsKS5oZWlnaHQpKTplLm9mZnNldEhlaWdodCk6XCJoaWRkZW5cIiE9PW4ub3ZlcmZsb3dZJiYoYShcImhpZGRlblwiKSxzKCkscj1cImNvbnRlbnQtYm94XCI9PT1uLmJveFNpemluZz9NYXRoLnJvdW5kKHBhcnNlRmxvYXQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZSxudWxsKS5oZWlnaHQpKTplLm9mZnNldEhlaWdodCksbCE9PXIpe2w9cjt2YXIgaT1vKFwiYXV0b3NpemU6cmVzaXplZFwiKTt0cnl7ZS5kaXNwYXRjaEV2ZW50KGkpfWNhdGNoKGUpe319fX0oZSl9KSxlfSkuZGVzdHJveT1mdW5jdGlvbihlKXtyZXR1cm4gZSYmQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChlLmxlbmd0aD9lOltlXSxyKSxlfSxsLnVwZGF0ZT1mdW5jdGlvbihlKXtyZXR1cm4gZSYmQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChlLmxlbmd0aD9lOltlXSxpKSxlfSksbH0pO1xuIiwiLyohXG4gKiBjbGlwYm9hcmQuanMgdjIuMC4xMVxuICogaHR0cHM6Ly9jbGlwYm9hcmRqcy5jb20vXG4gKlxuICogTGljZW5zZWQgTUlUIMKpIFplbm8gUm9jaGFcbiAqL1xuIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sZSk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5DbGlwYm9hcmRKUz1lKCk6dC5DbGlwYm9hcmRKUz1lKCl9KHRoaXMsZnVuY3Rpb24oKXtyZXR1cm4gbj17Njg2OmZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtuLmQoZSx7ZGVmYXVsdDpmdW5jdGlvbigpe3JldHVybiBifX0pO3ZhciBlPW4oMjc5KSxpPW4ubihlKSxlPW4oMzcwKSx1PW4ubihlKSxlPW4oODE3KSxyPW4ubihlKTtmdW5jdGlvbiBjKHQpe3RyeXtyZXR1cm4gZG9jdW1lbnQuZXhlY0NvbW1hbmQodCl9Y2F0Y2godCl7cmV0dXJufX12YXIgYT1mdW5jdGlvbih0KXt0PXIoKSh0KTtyZXR1cm4gYyhcImN1dFwiKSx0fTtmdW5jdGlvbiBvKHQsZSl7dmFyIG4sbyx0PShuPXQsbz1cInJ0bFwiPT09ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRpclwiKSwodD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIikpLnN0eWxlLmZvbnRTaXplPVwiMTJwdFwiLHQuc3R5bGUuYm9yZGVyPVwiMFwiLHQuc3R5bGUucGFkZGluZz1cIjBcIix0LnN0eWxlLm1hcmdpbj1cIjBcIix0LnN0eWxlLnBvc2l0aW9uPVwiYWJzb2x1dGVcIix0LnN0eWxlW28/XCJyaWdodFwiOlwibGVmdFwiXT1cIi05OTk5cHhcIixvPXdpbmRvdy5wYWdlWU9mZnNldHx8ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCx0LnN0eWxlLnRvcD1cIlwiLmNvbmNhdChvLFwicHhcIiksdC5zZXRBdHRyaWJ1dGUoXCJyZWFkb25seVwiLFwiXCIpLHQudmFsdWU9bix0KTtyZXR1cm4gZS5jb250YWluZXIuYXBwZW5kQ2hpbGQodCksZT1yKCkodCksYyhcImNvcHlcIiksdC5yZW1vdmUoKSxlfXZhciBmPWZ1bmN0aW9uKHQpe3ZhciBlPTE8YXJndW1lbnRzLmxlbmd0aCYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTp7Y29udGFpbmVyOmRvY3VtZW50LmJvZHl9LG49XCJcIjtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgdD9uPW8odCxlKTp0IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCYmIVtcInRleHRcIixcInNlYXJjaFwiLFwidXJsXCIsXCJ0ZWxcIixcInBhc3N3b3JkXCJdLmluY2x1ZGVzKG51bGw9PXQ/dm9pZCAwOnQudHlwZSk/bj1vKHQudmFsdWUsZSk6KG49cigpKHQpLGMoXCJjb3B5XCIpKSxufTtmdW5jdGlvbiBsKHQpe3JldHVybihsPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbih0KXtyZXR1cm4gdHlwZW9mIHR9OmZ1bmN0aW9uKHQpe3JldHVybiB0JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJnQuY29uc3RydWN0b3I9PT1TeW1ib2wmJnQhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIHR9KSh0KX12YXIgcz1mdW5jdGlvbigpe3ZhciB0PTA8YXJndW1lbnRzLmxlbmd0aCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTp7fSxlPXQuYWN0aW9uLG49dm9pZCAwPT09ZT9cImNvcHlcIjplLG89dC5jb250YWluZXIsZT10LnRhcmdldCx0PXQudGV4dDtpZihcImNvcHlcIiE9PW4mJlwiY3V0XCIhPT1uKXRocm93IG5ldyBFcnJvcignSW52YWxpZCBcImFjdGlvblwiIHZhbHVlLCB1c2UgZWl0aGVyIFwiY29weVwiIG9yIFwiY3V0XCInKTtpZih2b2lkIDAhPT1lKXtpZighZXx8XCJvYmplY3RcIiE9PWwoZSl8fDEhPT1lLm5vZGVUeXBlKXRocm93IG5ldyBFcnJvcignSW52YWxpZCBcInRhcmdldFwiIHZhbHVlLCB1c2UgYSB2YWxpZCBFbGVtZW50Jyk7aWYoXCJjb3B5XCI9PT1uJiZlLmhhc0F0dHJpYnV0ZShcImRpc2FibGVkXCIpKXRocm93IG5ldyBFcnJvcignSW52YWxpZCBcInRhcmdldFwiIGF0dHJpYnV0ZS4gUGxlYXNlIHVzZSBcInJlYWRvbmx5XCIgaW5zdGVhZCBvZiBcImRpc2FibGVkXCIgYXR0cmlidXRlJyk7aWYoXCJjdXRcIj09PW4mJihlLmhhc0F0dHJpYnV0ZShcInJlYWRvbmx5XCIpfHxlLmhhc0F0dHJpYnV0ZShcImRpc2FibGVkXCIpKSl0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgXCJ0YXJnZXRcIiBhdHRyaWJ1dGUuIFlvdSBjYW5cXCd0IGN1dCB0ZXh0IGZyb20gZWxlbWVudHMgd2l0aCBcInJlYWRvbmx5XCIgb3IgXCJkaXNhYmxlZFwiIGF0dHJpYnV0ZXMnKX1yZXR1cm4gdD9mKHQse2NvbnRhaW5lcjpvfSk6ZT9cImN1dFwiPT09bj9hKGUpOmYoZSx7Y29udGFpbmVyOm99KTp2b2lkIDB9O2Z1bmN0aW9uIHAodCl7cmV0dXJuKHA9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKHQpe3JldHVybiB0eXBlb2YgdH06ZnVuY3Rpb24odCl7cmV0dXJuIHQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmdC5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmdCE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgdH0pKHQpfWZ1bmN0aW9uIGQodCxlKXtmb3IodmFyIG49MDtuPGUubGVuZ3RoO24rKyl7dmFyIG89ZVtuXTtvLmVudW1lcmFibGU9by5lbnVtZXJhYmxlfHwhMSxvLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiBvJiYoby53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsby5rZXksbyl9fWZ1bmN0aW9uIHkodCxlKXtyZXR1cm4oeT1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fGZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQuX19wcm90b19fPWUsdH0pKHQsZSl9ZnVuY3Rpb24gaChuKXt2YXIgbz1mdW5jdGlvbigpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBSZWZsZWN0fHwhUmVmbGVjdC5jb25zdHJ1Y3QpcmV0dXJuITE7aWYoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSlyZXR1cm4hMTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBQcm94eSlyZXR1cm4hMDt0cnl7cmV0dXJuIERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSxbXSxmdW5jdGlvbigpe30pKSwhMH1jYXRjaCh0KXtyZXR1cm4hMX19KCk7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIHQsZT12KG4pO3JldHVybiB0PW8/KHQ9dih0aGlzKS5jb25zdHJ1Y3RvcixSZWZsZWN0LmNvbnN0cnVjdChlLGFyZ3VtZW50cyx0KSk6ZS5hcHBseSh0aGlzLGFyZ3VtZW50cyksZT10aGlzLCEodD10KXx8XCJvYmplY3RcIiE9PXAodCkmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHQ/ZnVuY3Rpb24odCl7aWYodm9pZCAwIT09dClyZXR1cm4gdDt0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIil9KGUpOnR9fWZ1bmN0aW9uIHYodCl7cmV0dXJuKHY9T2JqZWN0LnNldFByb3RvdHlwZU9mP09iamVjdC5nZXRQcm90b3R5cGVPZjpmdW5jdGlvbih0KXtyZXR1cm4gdC5fX3Byb3RvX198fE9iamVjdC5nZXRQcm90b3R5cGVPZih0KX0pKHQpfWZ1bmN0aW9uIG0odCxlKXt0PVwiZGF0YS1jbGlwYm9hcmQtXCIuY29uY2F0KHQpO2lmKGUuaGFzQXR0cmlidXRlKHQpKXJldHVybiBlLmdldEF0dHJpYnV0ZSh0KX12YXIgYj1mdW5jdGlvbigpeyFmdW5jdGlvbih0LGUpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUmJm51bGwhPT1lKXRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTt0LnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKGUmJmUucHJvdG90eXBlLHtjb25zdHJ1Y3Rvcjp7dmFsdWU6dCx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9fSksZSYmeSh0LGUpfShyLGkoKSk7dmFyIHQsZSxuLG89aChyKTtmdW5jdGlvbiByKHQsZSl7dmFyIG47cmV0dXJuIGZ1bmN0aW9uKHQpe2lmKCEodCBpbnN0YW5jZW9mIHIpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9KHRoaXMpLChuPW8uY2FsbCh0aGlzKSkucmVzb2x2ZU9wdGlvbnMoZSksbi5saXN0ZW5DbGljayh0KSxufXJldHVybiB0PXIsbj1be2tleTpcImNvcHlcIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgZT0xPGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06e2NvbnRhaW5lcjpkb2N1bWVudC5ib2R5fTtyZXR1cm4gZih0LGUpfX0se2tleTpcImN1dFwiLHZhbHVlOmZ1bmN0aW9uKHQpe3JldHVybiBhKHQpfX0se2tleTpcImlzU3VwcG9ydGVkXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgdD0wPGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06W1wiY29weVwiLFwiY3V0XCJdLHQ9XCJzdHJpbmdcIj09dHlwZW9mIHQ/W3RdOnQsZT0hIWRvY3VtZW50LnF1ZXJ5Q29tbWFuZFN1cHBvcnRlZDtyZXR1cm4gdC5mb3JFYWNoKGZ1bmN0aW9uKHQpe2U9ZSYmISFkb2N1bWVudC5xdWVyeUNvbW1hbmRTdXBwb3J0ZWQodCl9KSxlfX1dLChlPVt7a2V5OlwicmVzb2x2ZU9wdGlvbnNcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciB0PTA8YXJndW1lbnRzLmxlbmd0aCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTp7fTt0aGlzLmFjdGlvbj1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0LmFjdGlvbj90LmFjdGlvbjp0aGlzLmRlZmF1bHRBY3Rpb24sdGhpcy50YXJnZXQ9XCJmdW5jdGlvblwiPT10eXBlb2YgdC50YXJnZXQ/dC50YXJnZXQ6dGhpcy5kZWZhdWx0VGFyZ2V0LHRoaXMudGV4dD1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0LnRleHQ/dC50ZXh0OnRoaXMuZGVmYXVsdFRleHQsdGhpcy5jb250YWluZXI9XCJvYmplY3RcIj09PXAodC5jb250YWluZXIpP3QuY29udGFpbmVyOmRvY3VtZW50LmJvZHl9fSx7a2V5OlwibGlzdGVuQ2xpY2tcIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzO3RoaXMubGlzdGVuZXI9dSgpKHQsXCJjbGlja1wiLGZ1bmN0aW9uKHQpe3JldHVybiBlLm9uQ2xpY2sodCl9KX19LHtrZXk6XCJvbkNsaWNrXCIsdmFsdWU6ZnVuY3Rpb24odCl7dmFyIGU9dC5kZWxlZ2F0ZVRhcmdldHx8dC5jdXJyZW50VGFyZ2V0LG49dGhpcy5hY3Rpb24oZSl8fFwiY29weVwiLHQ9cyh7YWN0aW9uOm4sY29udGFpbmVyOnRoaXMuY29udGFpbmVyLHRhcmdldDp0aGlzLnRhcmdldChlKSx0ZXh0OnRoaXMudGV4dChlKX0pO3RoaXMuZW1pdCh0P1wic3VjY2Vzc1wiOlwiZXJyb3JcIix7YWN0aW9uOm4sdGV4dDp0LHRyaWdnZXI6ZSxjbGVhclNlbGVjdGlvbjpmdW5jdGlvbigpe2UmJmUuZm9jdXMoKSx3aW5kb3cuZ2V0U2VsZWN0aW9uKCkucmVtb3ZlQWxsUmFuZ2VzKCl9fSl9fSx7a2V5OlwiZGVmYXVsdEFjdGlvblwiLHZhbHVlOmZ1bmN0aW9uKHQpe3JldHVybiBtKFwiYWN0aW9uXCIsdCl9fSx7a2V5OlwiZGVmYXVsdFRhcmdldFwiLHZhbHVlOmZ1bmN0aW9uKHQpe3Q9bShcInRhcmdldFwiLHQpO2lmKHQpcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodCl9fSx7a2V5OlwiZGVmYXVsdFRleHRcIix2YWx1ZTpmdW5jdGlvbih0KXtyZXR1cm4gbShcInRleHRcIix0KX19LHtrZXk6XCJkZXN0cm95XCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmxpc3RlbmVyLmRlc3Ryb3koKX19XSkmJmQodC5wcm90b3R5cGUsZSksbiYmZCh0LG4pLHJ9KCl9LDgyODpmdW5jdGlvbih0KXt2YXIgZTtcInVuZGVmaW5lZFwiPT10eXBlb2YgRWxlbWVudHx8RWxlbWVudC5wcm90b3R5cGUubWF0Y2hlc3x8KChlPUVsZW1lbnQucHJvdG90eXBlKS5tYXRjaGVzPWUubWF0Y2hlc1NlbGVjdG9yfHxlLm1vek1hdGNoZXNTZWxlY3Rvcnx8ZS5tc01hdGNoZXNTZWxlY3Rvcnx8ZS5vTWF0Y2hlc1NlbGVjdG9yfHxlLndlYmtpdE1hdGNoZXNTZWxlY3RvciksdC5leHBvcnRzPWZ1bmN0aW9uKHQsZSl7Zm9yKDt0JiY5IT09dC5ub2RlVHlwZTspe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHQubWF0Y2hlcyYmdC5tYXRjaGVzKGUpKXJldHVybiB0O3Q9dC5wYXJlbnROb2RlfX19LDQzODpmdW5jdGlvbih0LGUsbil7dmFyIHU9big4MjgpO2Z1bmN0aW9uIGkodCxlLG4sbyxyKXt2YXIgaT1mdW5jdGlvbihlLG4sdCxvKXtyZXR1cm4gZnVuY3Rpb24odCl7dC5kZWxlZ2F0ZVRhcmdldD11KHQudGFyZ2V0LG4pLHQuZGVsZWdhdGVUYXJnZXQmJm8uY2FsbChlLHQpfX0uYXBwbHkodGhpcyxhcmd1bWVudHMpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIobixpLHIpLHtkZXN0cm95OmZ1bmN0aW9uKCl7dC5yZW1vdmVFdmVudExpc3RlbmVyKG4saSxyKX19fXQuZXhwb3J0cz1mdW5jdGlvbih0LGUsbixvLHIpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHQuYWRkRXZlbnRMaXN0ZW5lcj9pLmFwcGx5KG51bGwsYXJndW1lbnRzKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBuP2kuYmluZChudWxsLGRvY3VtZW50KS5hcHBseShudWxsLGFyZ3VtZW50cyk6KFwic3RyaW5nXCI9PXR5cGVvZiB0JiYodD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHQpKSxBcnJheS5wcm90b3R5cGUubWFwLmNhbGwodCxmdW5jdGlvbih0KXtyZXR1cm4gaSh0LGUsbixvLHIpfSkpfX0sODc5OmZ1bmN0aW9uKHQsbil7bi5ub2RlPWZ1bmN0aW9uKHQpe3JldHVybiB2b2lkIDAhPT10JiZ0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQmJjE9PT10Lm5vZGVUeXBlfSxuLm5vZGVMaXN0PWZ1bmN0aW9uKHQpe3ZhciBlPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KTtyZXR1cm4gdm9pZCAwIT09dCYmKFwiW29iamVjdCBOb2RlTGlzdF1cIj09PWV8fFwiW29iamVjdCBIVE1MQ29sbGVjdGlvbl1cIj09PWUpJiZcImxlbmd0aFwiaW4gdCYmKDA9PT10Lmxlbmd0aHx8bi5ub2RlKHRbMF0pKX0sbi5zdHJpbmc9ZnVuY3Rpb24odCl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIHR8fHQgaW5zdGFuY2VvZiBTdHJpbmd9LG4uZm49ZnVuY3Rpb24odCl7cmV0dXJuXCJbb2JqZWN0IEZ1bmN0aW9uXVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpfX0sMzcwOmZ1bmN0aW9uKHQsZSxuKXt2YXIgZj1uKDg3OSksbD1uKDQzOCk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSxuKXtpZighdCYmIWUmJiFuKXRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgcmVxdWlyZWQgYXJndW1lbnRzXCIpO2lmKCFmLnN0cmluZyhlKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiU2Vjb25kIGFyZ3VtZW50IG11c3QgYmUgYSBTdHJpbmdcIik7aWYoIWYuZm4obikpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoaXJkIGFyZ3VtZW50IG11c3QgYmUgYSBGdW5jdGlvblwiKTtpZihmLm5vZGUodCkpcmV0dXJuIGM9ZSxhPW4sKHU9dCkuYWRkRXZlbnRMaXN0ZW5lcihjLGEpLHtkZXN0cm95OmZ1bmN0aW9uKCl7dS5yZW1vdmVFdmVudExpc3RlbmVyKGMsYSl9fTtpZihmLm5vZGVMaXN0KHQpKXJldHVybiBvPXQscj1lLGk9bixBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKG8sZnVuY3Rpb24odCl7dC5hZGRFdmVudExpc3RlbmVyKHIsaSl9KSx7ZGVzdHJveTpmdW5jdGlvbigpe0FycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobyxmdW5jdGlvbih0KXt0LnJlbW92ZUV2ZW50TGlzdGVuZXIocixpKX0pfX07aWYoZi5zdHJpbmcodCkpcmV0dXJuIHQ9dCxlPWUsbj1uLGwoZG9jdW1lbnQuYm9keSx0LGUsbik7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBTdHJpbmcsIEhUTUxFbGVtZW50LCBIVE1MQ29sbGVjdGlvbiwgb3IgTm9kZUxpc3RcIik7dmFyIG8scixpLHUsYyxhfX0sODE3OmZ1bmN0aW9uKHQpe3QuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZSxuPVwiU0VMRUNUXCI9PT10Lm5vZGVOYW1lPyh0LmZvY3VzKCksdC52YWx1ZSk6XCJJTlBVVFwiPT09dC5ub2RlTmFtZXx8XCJURVhUQVJFQVwiPT09dC5ub2RlTmFtZT8oKGU9dC5oYXNBdHRyaWJ1dGUoXCJyZWFkb25seVwiKSl8fHQuc2V0QXR0cmlidXRlKFwicmVhZG9ubHlcIixcIlwiKSx0LnNlbGVjdCgpLHQuc2V0U2VsZWN0aW9uUmFuZ2UoMCx0LnZhbHVlLmxlbmd0aCksZXx8dC5yZW1vdmVBdHRyaWJ1dGUoXCJyZWFkb25seVwiKSx0LnZhbHVlKToodC5oYXNBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIikmJnQuZm9jdXMoKSxuPXdpbmRvdy5nZXRTZWxlY3Rpb24oKSwoZT1kb2N1bWVudC5jcmVhdGVSYW5nZSgpKS5zZWxlY3ROb2RlQ29udGVudHModCksbi5yZW1vdmVBbGxSYW5nZXMoKSxuLmFkZFJhbmdlKGUpLG4udG9TdHJpbmcoKSk7cmV0dXJuIG59fSwyNzk6ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZSgpe31lLnByb3RvdHlwZT17b246ZnVuY3Rpb24odCxlLG4pe3ZhciBvPXRoaXMuZXx8KHRoaXMuZT17fSk7cmV0dXJuKG9bdF18fChvW3RdPVtdKSkucHVzaCh7Zm46ZSxjdHg6bn0pLHRoaXN9LG9uY2U6ZnVuY3Rpb24odCxlLG4pe3ZhciBvPXRoaXM7ZnVuY3Rpb24gcigpe28ub2ZmKHQsciksZS5hcHBseShuLGFyZ3VtZW50cyl9cmV0dXJuIHIuXz1lLHRoaXMub24odCxyLG4pfSxlbWl0OmZ1bmN0aW9uKHQpe2Zvcih2YXIgZT1bXS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKSxuPSgodGhpcy5lfHwodGhpcy5lPXt9KSlbdF18fFtdKS5zbGljZSgpLG89MCxyPW4ubGVuZ3RoO288cjtvKyspbltvXS5mbi5hcHBseShuW29dLmN0eCxlKTtyZXR1cm4gdGhpc30sb2ZmOmZ1bmN0aW9uKHQsZSl7dmFyIG49dGhpcy5lfHwodGhpcy5lPXt9KSxvPW5bdF0scj1bXTtpZihvJiZlKWZvcih2YXIgaT0wLHU9by5sZW5ndGg7aTx1O2krKylvW2ldLmZuIT09ZSYmb1tpXS5mbi5fIT09ZSYmci5wdXNoKG9baV0pO3JldHVybiByLmxlbmd0aD9uW3RdPXI6ZGVsZXRlIG5bdF0sdGhpc319LHQuZXhwb3J0cz1lLHQuZXhwb3J0cy5UaW55RW1pdHRlcj1lfX0scj17fSxvLm49ZnVuY3Rpb24odCl7dmFyIGU9dCYmdC5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIHQuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gdH07cmV0dXJuIG8uZChlLHthOmV9KSxlfSxvLmQ9ZnVuY3Rpb24odCxlKXtmb3IodmFyIG4gaW4gZSlvLm8oZSxuKSYmIW8ubyh0LG4pJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxuLHtlbnVtZXJhYmxlOiEwLGdldDplW25dfSl9LG8ubz1mdW5jdGlvbih0LGUpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxlKX0sbyg2ODYpLmRlZmF1bHQ7ZnVuY3Rpb24gbyh0KXtpZihyW3RdKXJldHVybiByW3RdLmV4cG9ydHM7dmFyIGU9clt0XT17ZXhwb3J0czp7fX07cmV0dXJuIG5bdF0oZSxlLmV4cG9ydHMsbyksZS5leHBvcnRzfXZhciBuLHJ9KTsiLCIoZnVuY3Rpb24gZGVmaW5lTXVzdGFjaGUoZ2xvYmFsLGZhY3Rvcnkpe2lmKHR5cGVvZiBleHBvcnRzPT09XCJvYmplY3RcIiYmZXhwb3J0cyYmdHlwZW9mIGV4cG9ydHMubm9kZU5hbWUhPT1cInN0cmluZ1wiKXtmYWN0b3J5KGV4cG9ydHMpfWVsc2UgaWYodHlwZW9mIGRlZmluZT09PVwiZnVuY3Rpb25cIiYmZGVmaW5lLmFtZCl7ZGVmaW5lKFtcImV4cG9ydHNcIl0sZmFjdG9yeSl9ZWxzZXtnbG9iYWwuTXVzdGFjaGU9e307ZmFjdG9yeShnbG9iYWwuTXVzdGFjaGUpfX0pKHRoaXMsZnVuY3Rpb24gbXVzdGFjaGVGYWN0b3J5KG11c3RhY2hlKXt2YXIgb2JqZWN0VG9TdHJpbmc9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZzt2YXIgaXNBcnJheT1BcnJheS5pc0FycmF5fHxmdW5jdGlvbiBpc0FycmF5UG9seWZpbGwob2JqZWN0KXtyZXR1cm4gb2JqZWN0VG9TdHJpbmcuY2FsbChvYmplY3QpPT09XCJbb2JqZWN0IEFycmF5XVwifTtmdW5jdGlvbiBpc0Z1bmN0aW9uKG9iamVjdCl7cmV0dXJuIHR5cGVvZiBvYmplY3Q9PT1cImZ1bmN0aW9uXCJ9ZnVuY3Rpb24gdHlwZVN0cihvYmope3JldHVybiBpc0FycmF5KG9iaik/XCJhcnJheVwiOnR5cGVvZiBvYmp9ZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0cmluZyl7cmV0dXJuIHN0cmluZy5yZXBsYWNlKC9bXFwtXFxbXFxde30oKSorPy4sXFxcXFxcXiR8I1xcc10vZyxcIlxcXFwkJlwiKX1mdW5jdGlvbiBoYXNQcm9wZXJ0eShvYmoscHJvcE5hbWUpe3JldHVybiBvYmohPW51bGwmJnR5cGVvZiBvYmo9PT1cIm9iamVjdFwiJiZwcm9wTmFtZSBpbiBvYmp9ZnVuY3Rpb24gcHJpbWl0aXZlSGFzT3duUHJvcGVydHkocHJpbWl0aXZlLHByb3BOYW1lKXtyZXR1cm4gcHJpbWl0aXZlIT1udWxsJiZ0eXBlb2YgcHJpbWl0aXZlIT09XCJvYmplY3RcIiYmcHJpbWl0aXZlLmhhc093blByb3BlcnR5JiZwcmltaXRpdmUuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpfXZhciByZWdFeHBUZXN0PVJlZ0V4cC5wcm90b3R5cGUudGVzdDtmdW5jdGlvbiB0ZXN0UmVnRXhwKHJlLHN0cmluZyl7cmV0dXJuIHJlZ0V4cFRlc3QuY2FsbChyZSxzdHJpbmcpfXZhciBub25TcGFjZVJlPS9cXFMvO2Z1bmN0aW9uIGlzV2hpdGVzcGFjZShzdHJpbmcpe3JldHVybiF0ZXN0UmVnRXhwKG5vblNwYWNlUmUsc3RyaW5nKX12YXIgZW50aXR5TWFwPXtcIiZcIjpcIiZhbXA7XCIsXCI8XCI6XCImbHQ7XCIsXCI+XCI6XCImZ3Q7XCIsJ1wiJzpcIiZxdW90O1wiLFwiJ1wiOlwiJiMzOTtcIixcIi9cIjpcIiYjeDJGO1wiLFwiYFwiOlwiJiN4NjA7XCIsXCI9XCI6XCImI3gzRDtcIn07ZnVuY3Rpb24gZXNjYXBlSHRtbChzdHJpbmcpe3JldHVybiBTdHJpbmcoc3RyaW5nKS5yZXBsYWNlKC9bJjw+XCInYD1cXC9dL2csZnVuY3Rpb24gZnJvbUVudGl0eU1hcChzKXtyZXR1cm4gZW50aXR5TWFwW3NdfSl9dmFyIHdoaXRlUmU9L1xccyovO3ZhciBzcGFjZVJlPS9cXHMrLzt2YXIgZXF1YWxzUmU9L1xccyo9Lzt2YXIgY3VybHlSZT0vXFxzKlxcfS87dmFyIHRhZ1JlPS8jfFxcXnxcXC98PnxcXHt8Jnw9fCEvO2Z1bmN0aW9uIHBhcnNlVGVtcGxhdGUodGVtcGxhdGUsdGFncyl7aWYoIXRlbXBsYXRlKXJldHVybltdO3ZhciBsaW5lSGFzTm9uU3BhY2U9ZmFsc2U7dmFyIHNlY3Rpb25zPVtdO3ZhciB0b2tlbnM9W107dmFyIHNwYWNlcz1bXTt2YXIgaGFzVGFnPWZhbHNlO3ZhciBub25TcGFjZT1mYWxzZTt2YXIgaW5kZW50YXRpb249XCJcIjt2YXIgdGFnSW5kZXg9MDtmdW5jdGlvbiBzdHJpcFNwYWNlKCl7aWYoaGFzVGFnJiYhbm9uU3BhY2Upe3doaWxlKHNwYWNlcy5sZW5ndGgpZGVsZXRlIHRva2Vuc1tzcGFjZXMucG9wKCldfWVsc2V7c3BhY2VzPVtdfWhhc1RhZz1mYWxzZTtub25TcGFjZT1mYWxzZX12YXIgb3BlbmluZ1RhZ1JlLGNsb3NpbmdUYWdSZSxjbG9zaW5nQ3VybHlSZTtmdW5jdGlvbiBjb21waWxlVGFncyh0YWdzVG9Db21waWxlKXtpZih0eXBlb2YgdGFnc1RvQ29tcGlsZT09PVwic3RyaW5nXCIpdGFnc1RvQ29tcGlsZT10YWdzVG9Db21waWxlLnNwbGl0KHNwYWNlUmUsMik7aWYoIWlzQXJyYXkodGFnc1RvQ29tcGlsZSl8fHRhZ3NUb0NvbXBpbGUubGVuZ3RoIT09Mil0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHRhZ3M6IFwiK3RhZ3NUb0NvbXBpbGUpO29wZW5pbmdUYWdSZT1uZXcgUmVnRXhwKGVzY2FwZVJlZ0V4cCh0YWdzVG9Db21waWxlWzBdKStcIlxcXFxzKlwiKTtjbG9zaW5nVGFnUmU9bmV3IFJlZ0V4cChcIlxcXFxzKlwiK2VzY2FwZVJlZ0V4cCh0YWdzVG9Db21waWxlWzFdKSk7Y2xvc2luZ0N1cmx5UmU9bmV3IFJlZ0V4cChcIlxcXFxzKlwiK2VzY2FwZVJlZ0V4cChcIn1cIit0YWdzVG9Db21waWxlWzFdKSl9Y29tcGlsZVRhZ3ModGFnc3x8bXVzdGFjaGUudGFncyk7dmFyIHNjYW5uZXI9bmV3IFNjYW5uZXIodGVtcGxhdGUpO3ZhciBzdGFydCx0eXBlLHZhbHVlLGNocix0b2tlbixvcGVuU2VjdGlvbjt3aGlsZSghc2Nhbm5lci5lb3MoKSl7c3RhcnQ9c2Nhbm5lci5wb3M7dmFsdWU9c2Nhbm5lci5zY2FuVW50aWwob3BlbmluZ1RhZ1JlKTtpZih2YWx1ZSl7Zm9yKHZhciBpPTAsdmFsdWVMZW5ndGg9dmFsdWUubGVuZ3RoO2k8dmFsdWVMZW5ndGg7KytpKXtjaHI9dmFsdWUuY2hhckF0KGkpO2lmKGlzV2hpdGVzcGFjZShjaHIpKXtzcGFjZXMucHVzaCh0b2tlbnMubGVuZ3RoKTtpbmRlbnRhdGlvbis9Y2hyfWVsc2V7bm9uU3BhY2U9dHJ1ZTtsaW5lSGFzTm9uU3BhY2U9dHJ1ZTtpbmRlbnRhdGlvbis9XCIgXCJ9dG9rZW5zLnB1c2goW1widGV4dFwiLGNocixzdGFydCxzdGFydCsxXSk7c3RhcnQrPTE7aWYoY2hyPT09XCJcXG5cIil7c3RyaXBTcGFjZSgpO2luZGVudGF0aW9uPVwiXCI7dGFnSW5kZXg9MDtsaW5lSGFzTm9uU3BhY2U9ZmFsc2V9fX1pZighc2Nhbm5lci5zY2FuKG9wZW5pbmdUYWdSZSkpYnJlYWs7aGFzVGFnPXRydWU7dHlwZT1zY2FubmVyLnNjYW4odGFnUmUpfHxcIm5hbWVcIjtzY2FubmVyLnNjYW4od2hpdGVSZSk7aWYodHlwZT09PVwiPVwiKXt2YWx1ZT1zY2FubmVyLnNjYW5VbnRpbChlcXVhbHNSZSk7c2Nhbm5lci5zY2FuKGVxdWFsc1JlKTtzY2FubmVyLnNjYW5VbnRpbChjbG9zaW5nVGFnUmUpfWVsc2UgaWYodHlwZT09PVwie1wiKXt2YWx1ZT1zY2FubmVyLnNjYW5VbnRpbChjbG9zaW5nQ3VybHlSZSk7c2Nhbm5lci5zY2FuKGN1cmx5UmUpO3NjYW5uZXIuc2NhblVudGlsKGNsb3NpbmdUYWdSZSk7dHlwZT1cIiZcIn1lbHNle3ZhbHVlPXNjYW5uZXIuc2NhblVudGlsKGNsb3NpbmdUYWdSZSl9aWYoIXNjYW5uZXIuc2NhbihjbG9zaW5nVGFnUmUpKXRocm93IG5ldyBFcnJvcihcIlVuY2xvc2VkIHRhZyBhdCBcIitzY2FubmVyLnBvcyk7aWYodHlwZT09XCI+XCIpe3Rva2VuPVt0eXBlLHZhbHVlLHN0YXJ0LHNjYW5uZXIucG9zLGluZGVudGF0aW9uLHRhZ0luZGV4LGxpbmVIYXNOb25TcGFjZV19ZWxzZXt0b2tlbj1bdHlwZSx2YWx1ZSxzdGFydCxzY2FubmVyLnBvc119dGFnSW5kZXgrKzt0b2tlbnMucHVzaCh0b2tlbik7aWYodHlwZT09PVwiI1wifHx0eXBlPT09XCJeXCIpe3NlY3Rpb25zLnB1c2godG9rZW4pfWVsc2UgaWYodHlwZT09PVwiL1wiKXtvcGVuU2VjdGlvbj1zZWN0aW9ucy5wb3AoKTtpZighb3BlblNlY3Rpb24pdGhyb3cgbmV3IEVycm9yKCdVbm9wZW5lZCBzZWN0aW9uIFwiJyt2YWx1ZSsnXCIgYXQgJytzdGFydCk7aWYob3BlblNlY3Rpb25bMV0hPT12YWx1ZSl0aHJvdyBuZXcgRXJyb3IoJ1VuY2xvc2VkIHNlY3Rpb24gXCInK29wZW5TZWN0aW9uWzFdKydcIiBhdCAnK3N0YXJ0KX1lbHNlIGlmKHR5cGU9PT1cIm5hbWVcInx8dHlwZT09PVwie1wifHx0eXBlPT09XCImXCIpe25vblNwYWNlPXRydWV9ZWxzZSBpZih0eXBlPT09XCI9XCIpe2NvbXBpbGVUYWdzKHZhbHVlKX19c3RyaXBTcGFjZSgpO29wZW5TZWN0aW9uPXNlY3Rpb25zLnBvcCgpO2lmKG9wZW5TZWN0aW9uKXRocm93IG5ldyBFcnJvcignVW5jbG9zZWQgc2VjdGlvbiBcIicrb3BlblNlY3Rpb25bMV0rJ1wiIGF0ICcrc2Nhbm5lci5wb3MpO3JldHVybiBuZXN0VG9rZW5zKHNxdWFzaFRva2Vucyh0b2tlbnMpKX1mdW5jdGlvbiBzcXVhc2hUb2tlbnModG9rZW5zKXt2YXIgc3F1YXNoZWRUb2tlbnM9W107dmFyIHRva2VuLGxhc3RUb2tlbjtmb3IodmFyIGk9MCxudW1Ub2tlbnM9dG9rZW5zLmxlbmd0aDtpPG51bVRva2VuczsrK2kpe3Rva2VuPXRva2Vuc1tpXTtpZih0b2tlbil7aWYodG9rZW5bMF09PT1cInRleHRcIiYmbGFzdFRva2VuJiZsYXN0VG9rZW5bMF09PT1cInRleHRcIil7bGFzdFRva2VuWzFdKz10b2tlblsxXTtsYXN0VG9rZW5bM109dG9rZW5bM119ZWxzZXtzcXVhc2hlZFRva2Vucy5wdXNoKHRva2VuKTtsYXN0VG9rZW49dG9rZW59fX1yZXR1cm4gc3F1YXNoZWRUb2tlbnN9ZnVuY3Rpb24gbmVzdFRva2Vucyh0b2tlbnMpe3ZhciBuZXN0ZWRUb2tlbnM9W107dmFyIGNvbGxlY3Rvcj1uZXN0ZWRUb2tlbnM7dmFyIHNlY3Rpb25zPVtdO3ZhciB0b2tlbixzZWN0aW9uO2Zvcih2YXIgaT0wLG51bVRva2Vucz10b2tlbnMubGVuZ3RoO2k8bnVtVG9rZW5zOysraSl7dG9rZW49dG9rZW5zW2ldO3N3aXRjaCh0b2tlblswXSl7Y2FzZVwiI1wiOmNhc2VcIl5cIjpjb2xsZWN0b3IucHVzaCh0b2tlbik7c2VjdGlvbnMucHVzaCh0b2tlbik7Y29sbGVjdG9yPXRva2VuWzRdPVtdO2JyZWFrO2Nhc2VcIi9cIjpzZWN0aW9uPXNlY3Rpb25zLnBvcCgpO3NlY3Rpb25bNV09dG9rZW5bMl07Y29sbGVjdG9yPXNlY3Rpb25zLmxlbmd0aD4wP3NlY3Rpb25zW3NlY3Rpb25zLmxlbmd0aC0xXVs0XTpuZXN0ZWRUb2tlbnM7YnJlYWs7ZGVmYXVsdDpjb2xsZWN0b3IucHVzaCh0b2tlbil9fXJldHVybiBuZXN0ZWRUb2tlbnN9ZnVuY3Rpb24gU2Nhbm5lcihzdHJpbmcpe3RoaXMuc3RyaW5nPXN0cmluZzt0aGlzLnRhaWw9c3RyaW5nO3RoaXMucG9zPTB9U2Nhbm5lci5wcm90b3R5cGUuZW9zPWZ1bmN0aW9uIGVvcygpe3JldHVybiB0aGlzLnRhaWw9PT1cIlwifTtTY2FubmVyLnByb3RvdHlwZS5zY2FuPWZ1bmN0aW9uIHNjYW4ocmUpe3ZhciBtYXRjaD10aGlzLnRhaWwubWF0Y2gocmUpO2lmKCFtYXRjaHx8bWF0Y2guaW5kZXghPT0wKXJldHVyblwiXCI7dmFyIHN0cmluZz1tYXRjaFswXTt0aGlzLnRhaWw9dGhpcy50YWlsLnN1YnN0cmluZyhzdHJpbmcubGVuZ3RoKTt0aGlzLnBvcys9c3RyaW5nLmxlbmd0aDtyZXR1cm4gc3RyaW5nfTtTY2FubmVyLnByb3RvdHlwZS5zY2FuVW50aWw9ZnVuY3Rpb24gc2NhblVudGlsKHJlKXt2YXIgaW5kZXg9dGhpcy50YWlsLnNlYXJjaChyZSksbWF0Y2g7c3dpdGNoKGluZGV4KXtjYXNlLTE6bWF0Y2g9dGhpcy50YWlsO3RoaXMudGFpbD1cIlwiO2JyZWFrO2Nhc2UgMDptYXRjaD1cIlwiO2JyZWFrO2RlZmF1bHQ6bWF0Y2g9dGhpcy50YWlsLnN1YnN0cmluZygwLGluZGV4KTt0aGlzLnRhaWw9dGhpcy50YWlsLnN1YnN0cmluZyhpbmRleCl9dGhpcy5wb3MrPW1hdGNoLmxlbmd0aDtyZXR1cm4gbWF0Y2h9O2Z1bmN0aW9uIENvbnRleHQodmlldyxwYXJlbnRDb250ZXh0KXt0aGlzLnZpZXc9dmlldzt0aGlzLmNhY2hlPXtcIi5cIjp0aGlzLnZpZXd9O3RoaXMucGFyZW50PXBhcmVudENvbnRleHR9Q29udGV4dC5wcm90b3R5cGUucHVzaD1mdW5jdGlvbiBwdXNoKHZpZXcpe3JldHVybiBuZXcgQ29udGV4dCh2aWV3LHRoaXMpfTtDb250ZXh0LnByb3RvdHlwZS5sb29rdXA9ZnVuY3Rpb24gbG9va3VwKG5hbWUpe3ZhciBjYWNoZT10aGlzLmNhY2hlO3ZhciB2YWx1ZTtpZihjYWNoZS5oYXNPd25Qcm9wZXJ0eShuYW1lKSl7dmFsdWU9Y2FjaGVbbmFtZV19ZWxzZXt2YXIgY29udGV4dD10aGlzLGludGVybWVkaWF0ZVZhbHVlLG5hbWVzLGluZGV4LGxvb2t1cEhpdD1mYWxzZTt3aGlsZShjb250ZXh0KXtpZihuYW1lLmluZGV4T2YoXCIuXCIpPjApe2ludGVybWVkaWF0ZVZhbHVlPWNvbnRleHQudmlldztuYW1lcz1uYW1lLnNwbGl0KFwiLlwiKTtpbmRleD0wO3doaWxlKGludGVybWVkaWF0ZVZhbHVlIT1udWxsJiZpbmRleDxuYW1lcy5sZW5ndGgpe2lmKGluZGV4PT09bmFtZXMubGVuZ3RoLTEpbG9va3VwSGl0PWhhc1Byb3BlcnR5KGludGVybWVkaWF0ZVZhbHVlLG5hbWVzW2luZGV4XSl8fHByaW1pdGl2ZUhhc093blByb3BlcnR5KGludGVybWVkaWF0ZVZhbHVlLG5hbWVzW2luZGV4XSk7aW50ZXJtZWRpYXRlVmFsdWU9aW50ZXJtZWRpYXRlVmFsdWVbbmFtZXNbaW5kZXgrK11dfX1lbHNle2ludGVybWVkaWF0ZVZhbHVlPWNvbnRleHQudmlld1tuYW1lXTtsb29rdXBIaXQ9aGFzUHJvcGVydHkoY29udGV4dC52aWV3LG5hbWUpfWlmKGxvb2t1cEhpdCl7dmFsdWU9aW50ZXJtZWRpYXRlVmFsdWU7YnJlYWt9Y29udGV4dD1jb250ZXh0LnBhcmVudH1jYWNoZVtuYW1lXT12YWx1ZX1pZihpc0Z1bmN0aW9uKHZhbHVlKSl2YWx1ZT12YWx1ZS5jYWxsKHRoaXMudmlldyk7cmV0dXJuIHZhbHVlfTtmdW5jdGlvbiBXcml0ZXIoKXt0aGlzLmNhY2hlPXt9fVdyaXRlci5wcm90b3R5cGUuY2xlYXJDYWNoZT1mdW5jdGlvbiBjbGVhckNhY2hlKCl7dGhpcy5jYWNoZT17fX07V3JpdGVyLnByb3RvdHlwZS5wYXJzZT1mdW5jdGlvbiBwYXJzZSh0ZW1wbGF0ZSx0YWdzKXt2YXIgY2FjaGU9dGhpcy5jYWNoZTt2YXIgY2FjaGVLZXk9dGVtcGxhdGUrXCI6XCIrKHRhZ3N8fG11c3RhY2hlLnRhZ3MpLmpvaW4oXCI6XCIpO3ZhciB0b2tlbnM9Y2FjaGVbY2FjaGVLZXldO2lmKHRva2Vucz09bnVsbCl0b2tlbnM9Y2FjaGVbY2FjaGVLZXldPXBhcnNlVGVtcGxhdGUodGVtcGxhdGUsdGFncyk7cmV0dXJuIHRva2Vuc307V3JpdGVyLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24gcmVuZGVyKHRlbXBsYXRlLHZpZXcscGFydGlhbHMsdGFncyl7dmFyIHRva2Vucz10aGlzLnBhcnNlKHRlbXBsYXRlLHRhZ3MpO3ZhciBjb250ZXh0PXZpZXcgaW5zdGFuY2VvZiBDb250ZXh0P3ZpZXc6bmV3IENvbnRleHQodmlldyk7cmV0dXJuIHRoaXMucmVuZGVyVG9rZW5zKHRva2Vucyxjb250ZXh0LHBhcnRpYWxzLHRlbXBsYXRlLHRhZ3MpfTtXcml0ZXIucHJvdG90eXBlLnJlbmRlclRva2Vucz1mdW5jdGlvbiByZW5kZXJUb2tlbnModG9rZW5zLGNvbnRleHQscGFydGlhbHMsb3JpZ2luYWxUZW1wbGF0ZSx0YWdzKXt2YXIgYnVmZmVyPVwiXCI7dmFyIHRva2VuLHN5bWJvbCx2YWx1ZTtmb3IodmFyIGk9MCxudW1Ub2tlbnM9dG9rZW5zLmxlbmd0aDtpPG51bVRva2VuczsrK2kpe3ZhbHVlPXVuZGVmaW5lZDt0b2tlbj10b2tlbnNbaV07c3ltYm9sPXRva2VuWzBdO2lmKHN5bWJvbD09PVwiI1wiKXZhbHVlPXRoaXMucmVuZGVyU2VjdGlvbih0b2tlbixjb250ZXh0LHBhcnRpYWxzLG9yaWdpbmFsVGVtcGxhdGUpO2Vsc2UgaWYoc3ltYm9sPT09XCJeXCIpdmFsdWU9dGhpcy5yZW5kZXJJbnZlcnRlZCh0b2tlbixjb250ZXh0LHBhcnRpYWxzLG9yaWdpbmFsVGVtcGxhdGUpO2Vsc2UgaWYoc3ltYm9sPT09XCI+XCIpdmFsdWU9dGhpcy5yZW5kZXJQYXJ0aWFsKHRva2VuLGNvbnRleHQscGFydGlhbHMsdGFncyk7ZWxzZSBpZihzeW1ib2w9PT1cIiZcIil2YWx1ZT10aGlzLnVuZXNjYXBlZFZhbHVlKHRva2VuLGNvbnRleHQpO2Vsc2UgaWYoc3ltYm9sPT09XCJuYW1lXCIpdmFsdWU9dGhpcy5lc2NhcGVkVmFsdWUodG9rZW4sY29udGV4dCk7ZWxzZSBpZihzeW1ib2w9PT1cInRleHRcIil2YWx1ZT10aGlzLnJhd1ZhbHVlKHRva2VuKTtpZih2YWx1ZSE9PXVuZGVmaW5lZClidWZmZXIrPXZhbHVlfXJldHVybiBidWZmZXJ9O1dyaXRlci5wcm90b3R5cGUucmVuZGVyU2VjdGlvbj1mdW5jdGlvbiByZW5kZXJTZWN0aW9uKHRva2VuLGNvbnRleHQscGFydGlhbHMsb3JpZ2luYWxUZW1wbGF0ZSl7dmFyIHNlbGY9dGhpczt2YXIgYnVmZmVyPVwiXCI7dmFyIHZhbHVlPWNvbnRleHQubG9va3VwKHRva2VuWzFdKTtmdW5jdGlvbiBzdWJSZW5kZXIodGVtcGxhdGUpe3JldHVybiBzZWxmLnJlbmRlcih0ZW1wbGF0ZSxjb250ZXh0LHBhcnRpYWxzKX1pZighdmFsdWUpcmV0dXJuO2lmKGlzQXJyYXkodmFsdWUpKXtmb3IodmFyIGo9MCx2YWx1ZUxlbmd0aD12YWx1ZS5sZW5ndGg7ajx2YWx1ZUxlbmd0aDsrK2ope2J1ZmZlcis9dGhpcy5yZW5kZXJUb2tlbnModG9rZW5bNF0sY29udGV4dC5wdXNoKHZhbHVlW2pdKSxwYXJ0aWFscyxvcmlnaW5hbFRlbXBsYXRlKX19ZWxzZSBpZih0eXBlb2YgdmFsdWU9PT1cIm9iamVjdFwifHx0eXBlb2YgdmFsdWU9PT1cInN0cmluZ1wifHx0eXBlb2YgdmFsdWU9PT1cIm51bWJlclwiKXtidWZmZXIrPXRoaXMucmVuZGVyVG9rZW5zKHRva2VuWzRdLGNvbnRleHQucHVzaCh2YWx1ZSkscGFydGlhbHMsb3JpZ2luYWxUZW1wbGF0ZSl9ZWxzZSBpZihpc0Z1bmN0aW9uKHZhbHVlKSl7aWYodHlwZW9mIG9yaWdpbmFsVGVtcGxhdGUhPT1cInN0cmluZ1wiKXRocm93IG5ldyBFcnJvcihcIkNhbm5vdCB1c2UgaGlnaGVyLW9yZGVyIHNlY3Rpb25zIHdpdGhvdXQgdGhlIG9yaWdpbmFsIHRlbXBsYXRlXCIpO3ZhbHVlPXZhbHVlLmNhbGwoY29udGV4dC52aWV3LG9yaWdpbmFsVGVtcGxhdGUuc2xpY2UodG9rZW5bM10sdG9rZW5bNV0pLHN1YlJlbmRlcik7aWYodmFsdWUhPW51bGwpYnVmZmVyKz12YWx1ZX1lbHNle2J1ZmZlcis9dGhpcy5yZW5kZXJUb2tlbnModG9rZW5bNF0sY29udGV4dCxwYXJ0aWFscyxvcmlnaW5hbFRlbXBsYXRlKX1yZXR1cm4gYnVmZmVyfTtXcml0ZXIucHJvdG90eXBlLnJlbmRlckludmVydGVkPWZ1bmN0aW9uIHJlbmRlckludmVydGVkKHRva2VuLGNvbnRleHQscGFydGlhbHMsb3JpZ2luYWxUZW1wbGF0ZSl7dmFyIHZhbHVlPWNvbnRleHQubG9va3VwKHRva2VuWzFdKTtpZighdmFsdWV8fGlzQXJyYXkodmFsdWUpJiZ2YWx1ZS5sZW5ndGg9PT0wKXJldHVybiB0aGlzLnJlbmRlclRva2Vucyh0b2tlbls0XSxjb250ZXh0LHBhcnRpYWxzLG9yaWdpbmFsVGVtcGxhdGUpfTtXcml0ZXIucHJvdG90eXBlLmluZGVudFBhcnRpYWw9ZnVuY3Rpb24gaW5kZW50UGFydGlhbChwYXJ0aWFsLGluZGVudGF0aW9uLGxpbmVIYXNOb25TcGFjZSl7dmFyIGZpbHRlcmVkSW5kZW50YXRpb249aW5kZW50YXRpb24ucmVwbGFjZSgvW14gXFx0XS9nLFwiXCIpO3ZhciBwYXJ0aWFsQnlObD1wYXJ0aWFsLnNwbGl0KFwiXFxuXCIpO2Zvcih2YXIgaT0wO2k8cGFydGlhbEJ5TmwubGVuZ3RoO2krKyl7aWYocGFydGlhbEJ5TmxbaV0ubGVuZ3RoJiYoaT4wfHwhbGluZUhhc05vblNwYWNlKSl7cGFydGlhbEJ5TmxbaV09ZmlsdGVyZWRJbmRlbnRhdGlvbitwYXJ0aWFsQnlObFtpXX19cmV0dXJuIHBhcnRpYWxCeU5sLmpvaW4oXCJcXG5cIil9O1dyaXRlci5wcm90b3R5cGUucmVuZGVyUGFydGlhbD1mdW5jdGlvbiByZW5kZXJQYXJ0aWFsKHRva2VuLGNvbnRleHQscGFydGlhbHMsdGFncyl7aWYoIXBhcnRpYWxzKXJldHVybjt2YXIgdmFsdWU9aXNGdW5jdGlvbihwYXJ0aWFscyk/cGFydGlhbHModG9rZW5bMV0pOnBhcnRpYWxzW3Rva2VuWzFdXTtpZih2YWx1ZSE9bnVsbCl7dmFyIGxpbmVIYXNOb25TcGFjZT10b2tlbls2XTt2YXIgdGFnSW5kZXg9dG9rZW5bNV07dmFyIGluZGVudGF0aW9uPXRva2VuWzRdO3ZhciBpbmRlbnRlZFZhbHVlPXZhbHVlO2lmKHRhZ0luZGV4PT0wJiZpbmRlbnRhdGlvbil7aW5kZW50ZWRWYWx1ZT10aGlzLmluZGVudFBhcnRpYWwodmFsdWUsaW5kZW50YXRpb24sbGluZUhhc05vblNwYWNlKX1yZXR1cm4gdGhpcy5yZW5kZXJUb2tlbnModGhpcy5wYXJzZShpbmRlbnRlZFZhbHVlLHRhZ3MpLGNvbnRleHQscGFydGlhbHMsaW5kZW50ZWRWYWx1ZSl9fTtXcml0ZXIucHJvdG90eXBlLnVuZXNjYXBlZFZhbHVlPWZ1bmN0aW9uIHVuZXNjYXBlZFZhbHVlKHRva2VuLGNvbnRleHQpe3ZhciB2YWx1ZT1jb250ZXh0Lmxvb2t1cCh0b2tlblsxXSk7aWYodmFsdWUhPW51bGwpcmV0dXJuIHZhbHVlfTtXcml0ZXIucHJvdG90eXBlLmVzY2FwZWRWYWx1ZT1mdW5jdGlvbiBlc2NhcGVkVmFsdWUodG9rZW4sY29udGV4dCl7dmFyIHZhbHVlPWNvbnRleHQubG9va3VwKHRva2VuWzFdKTtpZih2YWx1ZSE9bnVsbClyZXR1cm4gbXVzdGFjaGUuZXNjYXBlKHZhbHVlKX07V3JpdGVyLnByb3RvdHlwZS5yYXdWYWx1ZT1mdW5jdGlvbiByYXdWYWx1ZSh0b2tlbil7cmV0dXJuIHRva2VuWzFdfTttdXN0YWNoZS5uYW1lPVwibXVzdGFjaGUuanNcIjttdXN0YWNoZS52ZXJzaW9uPVwiMy4xLjBcIjttdXN0YWNoZS50YWdzPVtcInt7XCIsXCJ9fVwiXTt2YXIgZGVmYXVsdFdyaXRlcj1uZXcgV3JpdGVyO211c3RhY2hlLmNsZWFyQ2FjaGU9ZnVuY3Rpb24gY2xlYXJDYWNoZSgpe3JldHVybiBkZWZhdWx0V3JpdGVyLmNsZWFyQ2FjaGUoKX07bXVzdGFjaGUucGFyc2U9ZnVuY3Rpb24gcGFyc2UodGVtcGxhdGUsdGFncyl7cmV0dXJuIGRlZmF1bHRXcml0ZXIucGFyc2UodGVtcGxhdGUsdGFncyl9O211c3RhY2hlLnJlbmRlcj1mdW5jdGlvbiByZW5kZXIodGVtcGxhdGUsdmlldyxwYXJ0aWFscyx0YWdzKXtpZih0eXBlb2YgdGVtcGxhdGUhPT1cInN0cmluZ1wiKXt0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIHRlbXBsYXRlISBUZW1wbGF0ZSBzaG91bGQgYmUgYSBcInN0cmluZ1wiICcrJ2J1dCBcIicrdHlwZVN0cih0ZW1wbGF0ZSkrJ1wiIHdhcyBnaXZlbiBhcyB0aGUgZmlyc3QgJytcImFyZ3VtZW50IGZvciBtdXN0YWNoZSNyZW5kZXIodGVtcGxhdGUsIHZpZXcsIHBhcnRpYWxzKVwiKX1yZXR1cm4gZGVmYXVsdFdyaXRlci5yZW5kZXIodGVtcGxhdGUsdmlldyxwYXJ0aWFscyx0YWdzKX07bXVzdGFjaGUudG9faHRtbD1mdW5jdGlvbiB0b19odG1sKHRlbXBsYXRlLHZpZXcscGFydGlhbHMsc2VuZCl7dmFyIHJlc3VsdD1tdXN0YWNoZS5yZW5kZXIodGVtcGxhdGUsdmlldyxwYXJ0aWFscyk7aWYoaXNGdW5jdGlvbihzZW5kKSl7c2VuZChyZXN1bHQpfWVsc2V7cmV0dXJuIHJlc3VsdH19O211c3RhY2hlLmVzY2FwZT1lc2NhcGVIdG1sO211c3RhY2hlLlNjYW5uZXI9U2Nhbm5lcjttdXN0YWNoZS5Db250ZXh0PUNvbnRleHQ7bXVzdGFjaGUuV3JpdGVyPVdyaXRlcjtyZXR1cm4gbXVzdGFjaGV9KTsiLCIvKlxuIDBCU0RcbiovXG4oZnVuY3Rpb24oRix5KXtcImZ1bmN0aW9uXCI9PT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZSh5KTpcIm9iamVjdFwiPT09dHlwZW9mIGV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9eSgpOkYucGlja21ldXA9eSgpfSkodGhpcyxmdW5jdGlvbigpe2Z1bmN0aW9uIEYoYSxjLGIpe2I9Ynx8W107aWYoYSBpbnN0YW5jZW9mIEVsZW1lbnQpYy5hcHBseShjLFthXS5jb25jYXQoYikpO2Vsc2V7dmFyIGQ7dmFyIGU9YS5sZW5ndGg7Zm9yKGQ9MDtkPGU7KytkKWMuYXBwbHkoYyxbYVtkXV0uY29uY2F0KGIpKX19ZnVuY3Rpb24geShhKXtGKGEsZnVuY3Rpb24oYSl7YS5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGEpfSl9ZnVuY3Rpb24gSihhLGMpe2RvIGE9YS5wYXJlbnRFbGVtZW50O3doaWxlKGEmJiFCKGEsYykpO3JldHVybiBhfWZ1bmN0aW9uIEIoYSxjKXtyZXR1cm4oYS5tYXRjaGVzfHxhLndlYmtpdE1hdGNoZXNTZWxlY3Rvcnx8YS5tc01hdGNoZXNTZWxlY3RvcikuY2FsbChhLFxuYyl9ZnVuY3Rpb24gayhhLGMpe3JldHVybiBhJiZhLmNsYXNzTGlzdC5jb250YWlucyhjKX1mdW5jdGlvbiBsKGEsYyl7YS5jbGFzc0xpc3QuYWRkKGMpfWZ1bmN0aW9uIHEoYSxjLGIsZCl7aWYoLTEhPT1iLmluZGV4T2YoXCIgXCIpKXtiPWIuc3BsaXQoXCIgXCIpO3ZhciBlPWIubGVuZ3RoLGg7Zm9yKGg9MDtoPGU7KytoKXEoYSxjLGJbaF0sZCl9ZWxzZSBhLl9fcGlja21ldXAuZXZlbnRzLnB1c2goW2MsYixkXSksYy5hZGRFdmVudExpc3RlbmVyKGIsZCl9ZnVuY3Rpb24geihhLGMsYixkKXt2YXIgZTtpZihiJiYtMSE9PWIuaW5kZXhPZihcIiBcIikpe3ZhciBoPWIuc3BsaXQoXCIgXCIpO3ZhciBsPWgubGVuZ3RoO2ZvcihlPTA7ZTxsOysrZSl6KGEsYyxoW2VdLGQpfWVsc2UgZm9yKGg9YS5fX3BpY2ttZXVwLmV2ZW50cyxsPWgubGVuZ3RoLGU9MDtlPGw7KytlKWMmJmMhPT1oW2VdWzBdfHxiJiZiIT09aFtlXVsxXXx8ZCYmZCE9PWhbZV1bMl18fGhbZV1bMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihoW2VdWzFdLFxuaFtlXVsyXSl9ZnVuY3Rpb24gTShhKXthPWEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7cmV0dXJue3RvcDphLnRvcCt3aW5kb3cucGFnZVlPZmZzZXQtZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFRvcCxsZWZ0OmEubGVmdCt3aW5kb3cucGFnZVhPZmZzZXQtZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudExlZnR9fWZ1bmN0aW9uIEMoYSxjLGIpe3ZhciBkPWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiRXZlbnRcIik7YiYmKGQuZGV0YWlsPWIpO2QuaW5pdEV2ZW50KFwicGlja21ldXAtXCIrYywhMSwhMCk7cmV0dXJuIGEuZGlzcGF0Y2hFdmVudChkKX1mdW5jdGlvbiBLKGEpe2E9bmV3IERhdGUoYSk7Zm9yKHZhciBjPTI4LGI9YS5nZXRNb250aCgpO2EuZ2V0TW9udGgoKT09PWI7KSsrYyxhLnNldERhdGUoYyk7cmV0dXJuIGMtMX1mdW5jdGlvbiBBKGEsYyl7YS5zZXREYXRlKGEuZ2V0RGF0ZSgpK2MpfWZ1bmN0aW9uIHAoYSxjKXt2YXIgYj1hLmdldERhdGUoKTthLnNldERhdGUoMSk7XG5hLnNldE1vbnRoKGEuZ2V0TW9udGgoKStjKTthLnNldERhdGUoTWF0aC5taW4oYixLKGEpKSl9ZnVuY3Rpb24gdShhLGMpe3ZhciBiPWEuZ2V0RGF0ZSgpO2Euc2V0RGF0ZSgxKTthLnNldEZ1bGxZZWFyKGEuZ2V0RnVsbFllYXIoKStjKTthLnNldERhdGUoTWF0aC5taW4oYixLKGEpKSl9ZnVuY3Rpb24gTihhKXt2YXIgYz1hLl9fcGlja21ldXAuZWxlbWVudCxiPWEuX19waWNrbWV1cC5vcHRpb25zLGQ9TWF0aC5mbG9vcihiLmNhbGVuZGFycy8yKSxlPWIuZGF0ZSxoPWIuY3VycmVudCxtPWIubWluP25ldyBEYXRlKGIubWluKTpudWxsLHY9Yi5tYXg/bmV3IERhdGUoYi5tYXgpOm51bGw7bSYmKG0uc2V0RGF0ZSgxKSxwKG0sMSksQShtLC0xKSk7diYmKHYuc2V0RGF0ZSgxKSxwKHYsMSksQSh2LC0xKSk7eShBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChjLnF1ZXJ5U2VsZWN0b3JBbGwoXCIucG11LWluc3RhbmNlID4gOm5vdChuYXYpXCIpKSk7Zm9yKHZhciB3PTA7dzxiLmNhbGVuZGFyczt3Kyspe3ZhciBmPVxubmV3IERhdGUoaCk7eChmKTt2YXIgbj1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChjLnF1ZXJ5U2VsZWN0b3JBbGwoXCIucG11LWluc3RhbmNlXCIpKVt3XTtpZihrKGMsXCJwbXUtdmlldy15ZWFyc1wiKSl7dShmLDEyKih3LWQpKTt2YXIgRz1mLmdldEZ1bGxZZWFyKCktNitcIiAtIFwiKyhmLmdldEZ1bGxZZWFyKCkrNSl9ZWxzZSBrKGMsXCJwbXUtdmlldy1tb250aHNcIik/KHUoZix3LWQpLEc9Zi5nZXRGdWxsWWVhcigpKTprKGMsXCJwbXUtdmlldy1kYXlzXCIpJiYocChmLHctZCksRz1cImZ1bmN0aW9uXCI9PT10eXBlb2YgYi50aXRsZV9mb3JtYXQ/Yi50aXRsZV9mb3JtYXQoZixiLmxvY2FsZXNbYi5sb2NhbGVdKTpEKGYsYi50aXRsZV9mb3JtYXQsYi5sb2NhbGVzW2IubG9jYWxlXSkpO2lmKCFyJiZ2KXt2YXIgcj1uZXcgRGF0ZShmKTtiLnNlbGVjdF9kYXk/cChyLGIuY2FsZW5kYXJzLTEpOmIuc2VsZWN0X21vbnRoP3UocixiLmNhbGVuZGFycy0xKTp1KHIsMTIqKGIuY2FsZW5kYXJzLTEpKTtcbmlmKHI+dil7LS13O3AoaCwtMSk7cj12b2lkIDA7Y29udGludWV9fXI9bmV3IERhdGUoZik7aWYoIWcpe3ZhciBnPW5ldyBEYXRlKGYpO2cuc2V0RGF0ZSgxKTtwKGcsMSk7QShnLC0xKTtpZihtJiZtPmcpey0tdztwKGgsMSk7Zz12b2lkIDA7Y29udGludWV9fW4ucXVlcnlTZWxlY3RvcihcIi5wbXUtbW9udGhcIikuaW5uZXJIVE1MPUc7dmFyIHE9ZnVuY3Rpb24oYSl7cmV0dXJuXCJyYW5nZVwiPT09Yi5tb2RlJiZhPj0obmV3IERhdGUoZVswXSkpLmdldEZ1bGxZZWFyKCkmJmE8PShuZXcgRGF0ZShlWzFdKSkuZ2V0RnVsbFllYXIoKXx8XCJtdWx0aXBsZVwiPT09Yi5tb2RlJiYtMSE9PWUucmVkdWNlKGZ1bmN0aW9uKGEsYil7YS5wdXNoKChuZXcgRGF0ZShiKSkuZ2V0RnVsbFllYXIoKSk7cmV0dXJuIGF9LFtdKS5pbmRleE9mKGEpfHwobmV3IERhdGUoZSkpLmdldEZ1bGxZZWFyKCk9PT1hfSx0PWZ1bmN0aW9uKGEsYyl7dmFyIGQ9KG5ldyBEYXRlKGVbMF0pKS5nZXRGdWxsWWVhcigpLGY9KG5ldyBEYXRlKGVbMV0pKS5nZXRGdWxsWWVhcigpLFxuaD0obmV3IERhdGUoZVswXSkpLmdldE1vbnRoKCksZz0obmV3IERhdGUoZVsxXSkpLmdldE1vbnRoKCk7cmV0dXJuXCJyYW5nZVwiPT09Yi5tb2RlJiYoYT5kJiZhPGZ8fGE+ZCYmYT09PWYmJmM8PWd8fGE9PT1kJiZhPGYmJmM+PWh8fGE9PT1kJiZhPT09ZiYmYz49aCYmYzw9Zyl8fFwibXVsdGlwbGVcIj09PWIubW9kZSYmLTEhPT1lLnJlZHVjZShmdW5jdGlvbihhLGIpe2I9bmV3IERhdGUoYik7YS5wdXNoKGIuZ2V0RnVsbFllYXIoKStcIi1cIitiLmdldE1vbnRoKCkpO3JldHVybiBhfSxbXSkuaW5kZXhPZihhK1wiLVwiK2MpfHwobmV3IERhdGUoZSkpLmdldEZ1bGxZZWFyKCk9PT1hJiYobmV3IERhdGUoZSkpLmdldE1vbnRoKCk9PT1jfTsoZnVuY3Rpb24oKXt2YXIgYT1bXSxjPWYuZ2V0RnVsbFllYXIoKS02LGQ9KG5ldyBEYXRlKGIubWluKSkuZ2V0RnVsbFllYXIoKSxlPShuZXcgRGF0ZShiLm1heCkpLmdldEZ1bGxZZWFyKCksaDtmb3IoaD0wOzEyPmg7KytoKXt2YXIgZz1jK2g7dmFyIG09XG5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO20udGV4dENvbnRlbnQ9ZzttLl9fcGlja21ldXBfeWVhcj1nO2IubWluJiZnPGR8fGIubWF4JiZnPmU/bChtLFwicG11LWRpc2FibGVkXCIpOnEoZykmJmwobSxcInBtdS1zZWxlY3RlZFwiKTthLnB1c2gobSl9bi5hcHBlbmRDaGlsZChiLmluc3RhbmNlX2NvbnRlbnRfdGVtcGxhdGUoYSxcInBtdS15ZWFyc1wiKSl9KSgpOyhmdW5jdGlvbigpe3ZhciBhPVtdLGM9Zi5nZXRGdWxsWWVhcigpLGQ9KG5ldyBEYXRlKGIubWluKSkuZ2V0RnVsbFllYXIoKSxlPShuZXcgRGF0ZShiLm1pbikpLmdldE1vbnRoKCksZz0obmV3IERhdGUoYi5tYXgpKS5nZXRGdWxsWWVhcigpLGg9KG5ldyBEYXRlKGIubWF4KSkuZ2V0TW9udGgoKSxtO2ZvcihtPTA7MTI+bTsrK20pe3ZhciBrPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ay50ZXh0Q29udGVudD1iLmxvY2FsZXNbYi5sb2NhbGVdLm1vbnRoc1Nob3J0W21dO2suX19waWNrbWV1cF9tb250aD1tO1xuay5fX3BpY2ttZXVwX3llYXI9YztiLm1pbiYmKGM8ZHx8bTxlJiZjPT09ZCl8fGIubWF4JiYoYz5nfHxtPmgmJmM+PWcpP2woayxcInBtdS1kaXNhYmxlZFwiKTp0KGMsbSkmJmwoayxcInBtdS1zZWxlY3RlZFwiKTthLnB1c2goayl9bi5hcHBlbmRDaGlsZChiLmluc3RhbmNlX2NvbnRlbnRfdGVtcGxhdGUoYSxcInBtdS1tb250aHNcIikpfSkoKTsoZnVuY3Rpb24oKXt2YXIgYT1bXSxjPWYuZ2V0TW9udGgoKSxkPXgobmV3IERhdGUpLnZhbHVlT2YoKSxlOyhmdW5jdGlvbigpe2Yuc2V0RGF0ZSgxKTt2YXIgYT0oZi5nZXREYXkoKS1iLmZpcnN0X2RheSklNztBKGYsLShhKygwPmE/NzowKSkpfSkoKTtmb3IoZT0wOzQyPmU7KytlKXt2YXIgZz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2cudGV4dENvbnRlbnQ9Zi5nZXREYXRlKCk7Zy5fX3BpY2ttZXVwX2RheT1mLmdldERhdGUoKTtnLl9fcGlja21ldXBfbW9udGg9Zi5nZXRNb250aCgpO2cuX19waWNrbWV1cF95ZWFyPWYuZ2V0RnVsbFllYXIoKTtcbmMhPT1mLmdldE1vbnRoKCkmJmwoZyxcInBtdS1ub3QtaW4tbW9udGhcIik7MD09PWYuZ2V0RGF5KCk/bChnLFwicG11LXN1bmRheVwiKTo2PT09Zi5nZXREYXkoKSYmbChnLFwicG11LXNhdHVyZGF5XCIpO3ZhciBoPWIucmVuZGVyKG5ldyBEYXRlKGYpKXx8e307dmFyIG09eChuZXcgRGF0ZShmKSkudmFsdWVPZigpO3ZhciBrPWIubWluJiZiLm1pbj5mfHxiLm1heCYmYi5tYXg8Zjt2YXIgdj1iLmRhdGUudmFsdWVPZigpPT09bXx8Yi5kYXRlIGluc3RhbmNlb2YgQXJyYXkmJmIuZGF0ZS5yZWR1Y2UoZnVuY3Rpb24oYSxiKXtyZXR1cm4gYXx8bT09PWIudmFsdWVPZigpfSwhMSl8fFwicmFuZ2VcIj09PWIubW9kZSYmbT49Yi5kYXRlWzBdJiZtPD1iLmRhdGVbMV07aC5kaXNhYmxlZHx8IShcImRpc2FibGVkXCJpbiBoKSYmaz9sKGcsXCJwbXUtZGlzYWJsZWRcIik6KGguc2VsZWN0ZWR8fCEoXCJzZWxlY3RlZFwiaW4gaCkmJnYpJiZsKGcsXCJwbXUtc2VsZWN0ZWRcIik7bT09PWQmJmwoZyxcInBtdS10b2RheVwiKTtcbmguY2xhc3NfbmFtZSYmaC5jbGFzc19uYW1lLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGwuYmluZChnLGcpKTthLnB1c2goZyk7QShmLDEpfW4uYXBwZW5kQ2hpbGQoYi5pbnN0YW5jZV9jb250ZW50X3RlbXBsYXRlKGEsXCJwbXUtZGF5c1wiKSl9KSgpfWcuc2V0RGF0ZSgxKTtyLnNldERhdGUoMSk7cChyLDEpO0EociwtMSk7ZD1jLnF1ZXJ5U2VsZWN0b3IoXCIucG11LXByZXZcIik7Yz1jLnF1ZXJ5U2VsZWN0b3IoXCIucG11LW5leHRcIik7ZCYmKGQuc3R5bGUudmlzaWJpbGl0eT1iLm1pbiYmYi5taW4+PWc/XCJoaWRkZW5cIjpcInZpc2libGVcIik7YyYmKGMuc3R5bGUudmlzaWJpbGl0eT1iLm1heCYmYi5tYXg8PXI/XCJoaWRkZW5cIjpcInZpc2libGVcIik7QyhhLFwiZmlsbFwiKX1mdW5jdGlvbiB0KGEsYyl7dmFyIGI9Yy5mb3JtYXQsZD1jLnNlcGFyYXRvcixlPWMubG9jYWxlc1tjLmxvY2FsZV07aWYoYSBpbnN0YW5jZW9mIERhdGV8fFwibnVtYmVyXCI9PT10eXBlb2YgYSlyZXR1cm4geChuZXcgRGF0ZShhKSk7XG5pZighYSlyZXR1cm4geChuZXcgRGF0ZSk7aWYoYSBpbnN0YW5jZW9mIEFycmF5KXthPWEuc2xpY2UoKTtmb3IoYj0wO2I8YS5sZW5ndGg7KytiKWFbYl09dChhW2JdLGMpO3JldHVybiBhfWQ9YS5zcGxpdChkKTtpZigxPGQubGVuZ3RoKXJldHVybiBkLmZvckVhY2goZnVuY3Rpb24oYSxiLGQpe2RbYl09dChhLnRyaW0oKSxjKX0pLGQ7ZD1bXS5jb25jYXQoZS5kYXlzU2hvcnQsZS5kYXlzTWluLGUuZGF5cyxlLm1vbnRoc1Nob3J0LGUubW9udGhzKTtkPWQubWFwKGZ1bmN0aW9uKGEpe3JldHVyblwiKFwiK2ErXCIpXCJ9KTtkPW5ldyBSZWdFeHAoXCJbXjAtOWEtekEtWlwiK2Quam9pbihcIlwiKStcIl0rXCIpO2E9YS5zcGxpdChkKTtkPWIuc3BsaXQoZCk7dmFyIGg9bmV3IERhdGU7Zm9yKGI9MDtiPGEubGVuZ3RoO2IrKylzd2l0Y2goZFtiXSl7Y2FzZSBcImJcIjp2YXIgbT1lLm1vbnRoc1Nob3J0LmluZGV4T2YoYVtiXSk7YnJlYWs7Y2FzZSBcIkJcIjptPWUubW9udGhzLmluZGV4T2YoYVtiXSk7YnJlYWs7XG5jYXNlIFwiZFwiOmNhc2UgXCJlXCI6dmFyIGw9cGFyc2VJbnQoYVtiXSwxMCk7YnJlYWs7Y2FzZSBcIm1cIjptPXBhcnNlSW50KGFbYl0sMTApLTE7YnJlYWs7Y2FzZSBcIllcIjpjYXNlIFwieVwiOnZhciBrPXBhcnNlSW50KGFbYl0sMTApO2srPTEwMDxrPzA6Mjk+az8yRTM6MTkwMDticmVhaztjYXNlIFwiSFwiOmNhc2UgXCJJXCI6Y2FzZSBcImtcIjpjYXNlIFwibFwiOnZhciBmPXBhcnNlSW50KGFbYl0sMTApO2JyZWFrO2Nhc2UgXCJQXCI6Y2FzZSBcInBcIjovcG0vaS50ZXN0KGFbYl0pJiYxMj5mP2YrPTEyOi9hbS9pLnRlc3QoYVtiXSkmJjEyPD1mJiYoZi09MTIpO2JyZWFrO2Nhc2UgXCJNXCI6dmFyIG49cGFyc2VJbnQoYVtiXSwxMCl9ZT1uZXcgRGF0ZSh2b2lkIDA9PT1rP2guZ2V0RnVsbFllYXIoKTprLHZvaWQgMD09PW0/aC5nZXRNb250aCgpOm0sdm9pZCAwPT09bD9oLmdldERhdGUoKTpsLHZvaWQgMD09PWY/aC5nZXRIb3VycygpOmYsdm9pZCAwPT09bj9oLmdldE1pbnV0ZXMoKTpuLDApO2lzTmFOKDEqZSkmJlxuKGU9bmV3IERhdGUpO3JldHVybiB4KGUpfWZ1bmN0aW9uIHgoYSl7YS5zZXRIb3VycygwLDAsMCwwKTtyZXR1cm4gYX1mdW5jdGlvbiBEKGEsYyxiKXt2YXIgZD1hLmdldE1vbnRoKCksZT1hLmdldERhdGUoKSxoPWEuZ2V0RnVsbFllYXIoKSxtPWEuZ2V0RGF5KCksaz1hLmdldEhvdXJzKCksbD0xMjw9ayxmPWw/ay0xMjprO3ZhciBuPW5ldyBEYXRlKGEuZ2V0RnVsbFllYXIoKSxhLmdldE1vbnRoKCksYS5nZXREYXRlKCksMCwwLDApO3ZhciBwPW5ldyBEYXRlKGEuZ2V0RnVsbFllYXIoKSwwLDAsMCwwLDApO249TWF0aC5mbG9vcigobi1wKS84NjRFNSk7MD09PWYmJihmPTEyKTtwPWEuZ2V0TWludXRlcygpO3ZhciByPWEuZ2V0U2Vjb25kcygpO2M9Yy5zcGxpdChcIlwiKTtmb3IodmFyIGcscT0wO3E8Yy5sZW5ndGg7cSsrKXtnPWNbcV07c3dpdGNoKGcpe2Nhc2UgXCJhXCI6Zz1iLmRheXNTaG9ydFttXTticmVhaztjYXNlIFwiQVwiOmc9Yi5kYXlzW21dO2JyZWFrO2Nhc2UgXCJiXCI6Zz1iLm1vbnRoc1Nob3J0W2RdO1xuYnJlYWs7Y2FzZSBcIkJcIjpnPWIubW9udGhzW2RdO2JyZWFrO2Nhc2UgXCJDXCI6Zz0xK01hdGguZmxvb3IoaC8xMDApO2JyZWFrO2Nhc2UgXCJkXCI6Zz0xMD5lP1wiMFwiK2U6ZTticmVhaztjYXNlIFwiZVwiOmc9ZTticmVhaztjYXNlIFwiSFwiOmc9MTA+az9cIjBcIitrOms7YnJlYWs7Y2FzZSBcIklcIjpnPTEwPmY/XCIwXCIrZjpmO2JyZWFrO2Nhc2UgXCJqXCI6Zz0xMDA+bj8xMD5uP1wiMDBcIituOlwiMFwiK246bjticmVhaztjYXNlIFwia1wiOmc9azticmVhaztjYXNlIFwibFwiOmc9ZjticmVhaztjYXNlIFwibVwiOmc9OT5kP1wiMFwiKygxK2QpOjErZDticmVhaztjYXNlIFwiTVwiOmc9MTA+cD9cIjBcIitwOnA7YnJlYWs7Y2FzZSBcInBcIjpjYXNlIFwiUFwiOmc9bD9cIlBNXCI6XCJBTVwiO2JyZWFrO2Nhc2UgXCJzXCI6Zz1NYXRoLmZsb29yKGEuZ2V0VGltZSgpLzFFMyk7YnJlYWs7Y2FzZSBcIlNcIjpnPTEwPnI/XCIwXCIrcjpyO2JyZWFrO2Nhc2UgXCJ1XCI6Zz1tKzE7YnJlYWs7Y2FzZSBcIndcIjpnPW07YnJlYWs7Y2FzZSBcInlcIjpnPShcIlwiK2gpLnN1YnN0cigyLFxuMik7YnJlYWs7Y2FzZSBcIllcIjpnPWh9Y1txXT1nfXJldHVybiBjLmpvaW4oXCJcIil9ZnVuY3Rpb24gTyhhLGMpe3ZhciBiPWEuX19waWNrbWV1cC5vcHRpb25zLGQ7eChjKTthOnN3aXRjaChiLm1vZGUpe2Nhc2UgXCJtdWx0aXBsZVwiOnZhciBlPWMudmFsdWVPZigpO2ZvcihkPTA7ZDxiLmRhdGUubGVuZ3RoOysrZClpZihiLmRhdGVbZF0udmFsdWVPZigpPT09ZSl7Yi5kYXRlLnNwbGljZShkLDEpO2JyZWFrIGF9Yi5kYXRlLnB1c2goYyk7YnJlYWs7Y2FzZSBcInJhbmdlXCI6Yi5sYXN0U2VsfHwoYi5kYXRlWzBdPWMpO2M8PWIuZGF0ZVswXT8oYi5kYXRlWzFdPWIuZGF0ZVswXSxiLmRhdGVbMF09Yyk6Yi5kYXRlWzFdPWM7Yi5sYXN0U2VsPSFiLmxhc3RTZWw7YnJlYWs7ZGVmYXVsdDpiLmRhdGU9Yy52YWx1ZU9mKCl9Yz1IKGIpO0IoYSxcImlucHV0XCIpJiYoYS52YWx1ZT1cInNpbmdsZVwiPT09Yi5tb2RlP2MuZm9ybWF0dGVkX2RhdGU6Yy5mb3JtYXR0ZWRfZGF0ZS5qb2luKGIuc2VwYXJhdG9yKSk7XG5DKGEsXCJjaGFuZ2VcIixjKTtiLmZsYXR8fCFiLmhpZGVfb25fc2VsZWN0fHxcInJhbmdlXCI9PT1iLm1vZGUmJmIubGFzdFNlbHx8Yi5ib3VuZC5oaWRlKCl9ZnVuY3Rpb24gUChhLGMpe3ZhciBiPWMudGFyZ2V0O2soYixcInBtdS1idXR0b25cIil8fChiPUooYixcIi5wbXUtYnV0dG9uXCIpKTtpZighayhiLFwicG11LWJ1dHRvblwiKXx8ayhiLFwicG11LWRpc2FibGVkXCIpKXJldHVybiExO2MucHJldmVudERlZmF1bHQoKTtjLnN0b3BQcm9wYWdhdGlvbigpO2E9YS5fX3BpY2ttZXVwLm9wdGlvbnM7dmFyIGQ9SihiLFwiLnBtdS1pbnN0YW5jZVwiKTtjPWQucGFyZW50RWxlbWVudDtkPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGMucXVlcnlTZWxlY3RvckFsbChcIi5wbXUtaW5zdGFuY2VcIikpLmluZGV4T2YoZCk7QihiLnBhcmVudEVsZW1lbnQsXCJuYXZcIik/ayhiLFwicG11LW1vbnRoXCIpPyhwKGEuY3VycmVudCxkLU1hdGguZmxvb3IoYS5jYWxlbmRhcnMvMikpLGsoYyxcInBtdS12aWV3LXllYXJzXCIpP1xuKGEuY3VycmVudD1cInNpbmdsZVwiIT09YS5tb2RlP25ldyBEYXRlKGEuZGF0ZVthLmRhdGUubGVuZ3RoLTFdKTpuZXcgRGF0ZShhLmRhdGUpLGEuc2VsZWN0X2RheT8oYy5jbGFzc0xpc3QucmVtb3ZlKFwicG11LXZpZXcteWVhcnNcIiksbChjLFwicG11LXZpZXctZGF5c1wiKSk6YS5zZWxlY3RfbW9udGgmJihjLmNsYXNzTGlzdC5yZW1vdmUoXCJwbXUtdmlldy15ZWFyc1wiKSxsKGMsXCJwbXUtdmlldy1tb250aHNcIikpKTprKGMsXCJwbXUtdmlldy1tb250aHNcIik/YS5zZWxlY3RfeWVhcj8oYy5jbGFzc0xpc3QucmVtb3ZlKFwicG11LXZpZXctbW9udGhzXCIpLGwoYyxcInBtdS12aWV3LXllYXJzXCIpKTphLnNlbGVjdF9kYXkmJihjLmNsYXNzTGlzdC5yZW1vdmUoXCJwbXUtdmlldy1tb250aHNcIiksbChjLFwicG11LXZpZXctZGF5c1wiKSk6ayhjLFwicG11LXZpZXctZGF5c1wiKSYmKGEuc2VsZWN0X21vbnRoPyhjLmNsYXNzTGlzdC5yZW1vdmUoXCJwbXUtdmlldy1kYXlzXCIpLGwoYyxcInBtdS12aWV3LW1vbnRoc1wiKSk6XG5hLnNlbGVjdF95ZWFyJiYoYy5jbGFzc0xpc3QucmVtb3ZlKFwicG11LXZpZXctZGF5c1wiKSxsKGMsXCJwbXUtdmlldy15ZWFyc1wiKSkpKTprKGIsXCJwbXUtcHJldlwiKT9hLmJvdW5kLnByZXYoITEpOmEuYm91bmQubmV4dCghMSk6ayhjLFwicG11LXZpZXcteWVhcnNcIik/KGEuY3VycmVudC5zZXRGdWxsWWVhcihiLl9fcGlja21ldXBfeWVhciksYS5zZWxlY3RfbW9udGg/KGMuY2xhc3NMaXN0LnJlbW92ZShcInBtdS12aWV3LXllYXJzXCIpLGwoYyxcInBtdS12aWV3LW1vbnRoc1wiKSk6YS5zZWxlY3RfZGF5PyhjLmNsYXNzTGlzdC5yZW1vdmUoXCJwbXUtdmlldy15ZWFyc1wiKSxsKGMsXCJwbXUtdmlldy1kYXlzXCIpKTphLmJvdW5kLnVwZGF0ZV9kYXRlKGEuY3VycmVudCkpOmsoYyxcInBtdS12aWV3LW1vbnRoc1wiKT8oYS5jdXJyZW50LnNldE1vbnRoKGIuX19waWNrbWV1cF9tb250aCksYS5jdXJyZW50LnNldEZ1bGxZZWFyKGIuX19waWNrbWV1cF95ZWFyKSxhLnNlbGVjdF9kYXk/KGMuY2xhc3NMaXN0LnJlbW92ZShcInBtdS12aWV3LW1vbnRoc1wiKSxcbmwoYyxcInBtdS12aWV3LWRheXNcIikpOmEuYm91bmQudXBkYXRlX2RhdGUoYS5jdXJyZW50KSxwKGEuY3VycmVudCxNYXRoLmZsb29yKGEuY2FsZW5kYXJzLzIpLWQpKTooYz1uZXcgRGF0ZShhLmN1cnJlbnQpLGMuc2V0WWVhcihiLl9fcGlja21ldXBfeWVhciksYy5zZXRNb250aChiLl9fcGlja21ldXBfbW9udGgpLGMuc2V0RGF0ZShiLl9fcGlja21ldXBfZGF5KSxhLmJvdW5kLnVwZGF0ZV9kYXRlKGMpKTthLmJvdW5kLmZpbGwoKTtyZXR1cm4hMH1mdW5jdGlvbiBIKGEpe2lmKFwic2luZ2xlXCI9PT1hLm1vZGUpe3ZhciBjPW5ldyBEYXRlKGEuZGF0ZSk7cmV0dXJue2Zvcm1hdHRlZF9kYXRlOkQoYyxhLmZvcm1hdCxhLmxvY2FsZXNbYS5sb2NhbGVdKSxkYXRlOmN9fWM9e2Zvcm1hdHRlZF9kYXRlOltdLGRhdGU6W119O2EuZGF0ZS5mb3JFYWNoKGZ1bmN0aW9uKGIpe2I9bmV3IERhdGUoYik7Yy5mb3JtYXR0ZWRfZGF0ZS5wdXNoKEQoYixhLmZvcm1hdCxhLmxvY2FsZXNbYS5sb2NhbGVdKSk7XG5jLmRhdGUucHVzaChiKX0pO3JldHVybiBjfWZ1bmN0aW9uIEkoYSxjKXt2YXIgYj1hLl9fcGlja21ldXAuZWxlbWVudDtpZihjfHxrKGIsXCJwbXUtaGlkZGVuXCIpKXt2YXIgZD1hLl9fcGlja21ldXAub3B0aW9ucyxlPU0oYSksaD13aW5kb3cucGFnZVhPZmZzZXQsbT13aW5kb3cucGFnZVlPZmZzZXQsbD1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgscD1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LGY9ZS50b3Asbj1lLmxlZnQ7ZC5ib3VuZC5maWxsKCk7QihhLFwiaW5wdXRcIikmJigoYz1hLnZhbHVlKSYmZC5ib3VuZC5zZXRfZGF0ZShjKSxxKGEsYSxcImtleWRvd25cIixmdW5jdGlvbihhKXs5PT09YS53aGljaCYmZC5ib3VuZC5oaWRlKCl9KSxkLmxhc3RTZWw9ITEpO2lmKEMoYSxcInNob3dcIikmJiFkLmZsYXQpe2IuY2xhc3NMaXN0LnJlbW92ZShcInBtdS1oaWRkZW5cIik7aWYoZC5wb3NpdGlvbiBpbnN0YW5jZW9mIEZ1bmN0aW9uKWU9ZC5wb3NpdGlvbi5jYWxsKGEpLFxubj1lLmxlZnQsZj1lLnRvcDtlbHNle3N3aXRjaChkLnBvc2l0aW9uKXtjYXNlIFwidG9wXCI6Zi09Yi5vZmZzZXRIZWlnaHQ7YnJlYWs7Y2FzZSBcImxlZnRcIjpuLT1iLm9mZnNldFdpZHRoO2JyZWFrO2Nhc2UgXCJyaWdodFwiOm4rPWEub2Zmc2V0V2lkdGg7YnJlYWs7Y2FzZSBcImJvdHRvbVwiOmYrPWEub2Zmc2V0SGVpZ2h0fWYrYi5vZmZzZXRIZWlnaHQ+bStwJiYoZj1lLnRvcC1iLm9mZnNldEhlaWdodCk7ZjxtJiYoZj1lLnRvcCthLm9mZnNldEhlaWdodCk7bitiLm9mZnNldFdpZHRoPmgrbCYmKG49ZS5sZWZ0LWIub2Zmc2V0V2lkdGgpO248aCYmKG49ZS5sZWZ0K2Eub2Zmc2V0V2lkdGgpO24rPVwicHhcIjtmKz1cInB4XCJ9Yi5zdHlsZS5sZWZ0PW47Yi5zdHlsZS50b3A9ZjtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cShhLGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcImNsaWNrXCIsZC5ib3VuZC5oaWRlKTtxKGEsd2luZG93LFwicmVzaXplXCIsZC5ib3VuZC5mb3JjZWRfc2hvdyl9KX19fWZ1bmN0aW9uIFEoYSxcbmMpe3ZhciBiPWEuX19waWNrbWV1cC5lbGVtZW50LGQ9YS5fX3BpY2ttZXVwLm9wdGlvbnM7YyYmYy50YXJnZXQmJihjLnRhcmdldD09PWF8fGIuY29tcGFyZURvY3VtZW50UG9zaXRpb24oYy50YXJnZXQpJjE2KXx8IUMoYSxcImhpZGVcIil8fChsKGIsXCJwbXUtaGlkZGVuXCIpLHooYSxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXCJjbGlja1wiLGQuYm91bmQuaGlkZSkseihhLHdpbmRvdyxcInJlc2l6ZVwiLGQuYm91bmQuZm9yY2VkX3Nob3cpLGQubGFzdFNlbD0hMSl9ZnVuY3Rpb24gUihhKXt2YXIgYz1hLl9fcGlja21ldXAub3B0aW9uczt6KGEsZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFwiY2xpY2tcIixjLmJvdW5kLmhpZGUpO3ooYSx3aW5kb3csXCJyZXNpemVcIixjLmJvdW5kLmZvcmNlZF9zaG93KTtjLmJvdW5kLmZvcmNlZF9zaG93KCl9ZnVuY3Rpb24gUyhhKXthPWEuX19waWNrbWV1cC5vcHRpb25zO1wic2luZ2xlXCIhPT1hLm1vZGUmJihhLmRhdGU9W10sYS5sYXN0U2VsPSExLGEuYm91bmQuZmlsbCgpKX1cbmZ1bmN0aW9uIFQoYSxjKXtcInVuZGVmaW5lZFwiPT10eXBlb2YgYyYmKGM9ITApO3ZhciBiPWEuX19waWNrbWV1cC5lbGVtZW50O2E9YS5fX3BpY2ttZXVwLm9wdGlvbnM7ayhiLFwicG11LXZpZXcteWVhcnNcIik/dShhLmN1cnJlbnQsLTEyKTprKGIsXCJwbXUtdmlldy1tb250aHNcIik/dShhLmN1cnJlbnQsLTEpOmsoYixcInBtdS12aWV3LWRheXNcIikmJnAoYS5jdXJyZW50LC0xKTtjJiZhLmJvdW5kLmZpbGwoKX1mdW5jdGlvbiBVKGEsYyl7XCJ1bmRlZmluZWRcIj09dHlwZW9mIGMmJihjPSEwKTt2YXIgYj1hLl9fcGlja21ldXAuZWxlbWVudDthPWEuX19waWNrbWV1cC5vcHRpb25zO2soYixcInBtdS12aWV3LXllYXJzXCIpP3UoYS5jdXJyZW50LDEyKTprKGIsXCJwbXUtdmlldy1tb250aHNcIik/dShhLmN1cnJlbnQsMSk6ayhiLFwicG11LXZpZXctZGF5c1wiKSYmcChhLmN1cnJlbnQsMSk7YyYmYS5ib3VuZC5maWxsKCl9ZnVuY3Rpb24gVihhLGMpe3ZhciBiPWEuX19waWNrbWV1cC5vcHRpb25zO2E9XG5IKGIpO3JldHVyblwic3RyaW5nXCI9PT10eXBlb2YgYz8oYT1hLmRhdGUsYSBpbnN0YW5jZW9mIERhdGU/RChhLGMsYi5sb2NhbGVzW2IubG9jYWxlXSk6YS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIEQoYSxjLGIubG9jYWxlc1tiLmxvY2FsZV0pfSkpOmFbYz9cImZvcm1hdHRlZF9kYXRlXCI6XCJkYXRlXCJdfWZ1bmN0aW9uIFcoYSxjLGIpe3ZhciBkPWEuX19waWNrbWV1cC5vcHRpb25zO2lmKCEoYyBpbnN0YW5jZW9mIEFycmF5KXx8MDxjLmxlbmd0aClpZihkLmRhdGU9dChjLGQpLFwic2luZ2xlXCIhPT1kLm1vZGUpZm9yKGQuZGF0ZSBpbnN0YW5jZW9mIEFycmF5PyhkLmRhdGVbMF09ZC5kYXRlWzBdfHx0KG5ldyBEYXRlLGQpLFwicmFuZ2VcIj09PWQubW9kZSYmKGQuZGF0ZVsxXT1kLmRhdGVbMV18fHQoZC5kYXRlWzBdLGQpKSk6KGQuZGF0ZT1bZC5kYXRlXSxcInJhbmdlXCI9PT1kLm1vZGUmJmQuZGF0ZS5wdXNoKHQoZC5kYXRlWzBdLGQpKSksYz0wO2M8ZC5kYXRlLmxlbmd0aDsrK2MpZC5kYXRlW2NdPVxuTChkLmRhdGVbY10sZC5taW4sZC5tYXgpO2Vsc2UgZC5kYXRlIGluc3RhbmNlb2YgQXJyYXkmJihkLmRhdGU9ZC5kYXRlWzBdKSxkLmRhdGU9TChkLmRhdGUsZC5taW4sZC5tYXgpO2Vsc2UgZC5kYXRlPVtdO2lmKCFkLnNlbGVjdF9kYXkpaWYoZC5kYXRlIGluc3RhbmNlb2YgQXJyYXkpZm9yKGM9MDtjPGQuZGF0ZS5sZW5ndGg7KytjKWQuZGF0ZVtjXS5zZXREYXRlKDEpO2Vsc2UgZC5kYXRlLnNldERhdGUoMSk7aWYoXCJtdWx0aXBsZVwiPT09ZC5tb2RlKWZvcihjPTA7YzxkLmRhdGUubGVuZ3RoOysrYylkLmRhdGUuaW5kZXhPZihkLmRhdGVbY10pIT09YyYmKGQuZGF0ZS5zcGxpY2UoYywxKSwtLWMpO2I/ZC5jdXJyZW50PXQoYixkKTooYj1cInNpbmdsZVwiPT09ZC5tb2RlP2QuZGF0ZTpkLmRhdGVbZC5kYXRlLmxlbmd0aC0xXSxkLmN1cnJlbnQ9Yj9uZXcgRGF0ZShiKTpuZXcgRGF0ZSk7ZC5jdXJyZW50LnNldERhdGUoMSk7ZC5ib3VuZC5maWxsKCk7QihhLFwiaW5wdXRcIikmJiExIT09XG5kLmRlZmF1bHRfZGF0ZSYmKGI9SChkKSxjPWEudmFsdWUsZD1cInNpbmdsZVwiPT09ZC5tb2RlP2IuZm9ybWF0dGVkX2RhdGU6Yi5mb3JtYXR0ZWRfZGF0ZS5qb2luKGQuc2VwYXJhdG9yKSxjfHxDKGEsXCJjaGFuZ2VcIixiKSxjIT09ZCYmKGEudmFsdWU9ZCkpfWZ1bmN0aW9uIFgoYSl7dmFyIGM9YS5fX3BpY2ttZXVwLmVsZW1lbnQ7eihhKTt5KGMpO2RlbGV0ZSBhLl9fcGlja21ldXB9ZnVuY3Rpb24gTChhLGMsYil7cmV0dXJuIGMmJmM+YT9uZXcgRGF0ZShjKTpiJiZiPGE/bmV3IERhdGUoYik6YX1mdW5jdGlvbiBFKGEsYyl7XCJzdHJpbmdcIj09dHlwZW9mIGEmJihhPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYSkpO2lmKCFhKXJldHVybiBudWxsO2lmKCFhLl9fcGlja21ldXApe3ZhciBiLGQ9e307Yz1jfHx7fTtmb3IoYiBpbiBFLmRlZmF1bHRzKWRbYl09YiBpbiBjP2NbYl06RS5kZWZhdWx0c1tiXTtmb3IoYiBpbiBkKWM9YS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBtdS1cIitiKSxudWxsIT09XG5jJiYoZFtiXT1jKTtcImRheXNcIiE9PWQudmlld3x8ZC5zZWxlY3RfZGF5fHwoZC52aWV3PVwibW9udGhzXCIpO1wibW9udGhzXCIhPT1kLnZpZXd8fGQuc2VsZWN0X21vbnRofHwoZC52aWV3PVwieWVhcnNcIik7XCJ5ZWFyc1wiIT09ZC52aWV3fHxkLnNlbGVjdF95ZWFyfHwoZC52aWV3PVwiZGF5c1wiKTtcImRheXNcIiE9PWQudmlld3x8ZC5zZWxlY3RfZGF5fHwoZC52aWV3PVwibW9udGhzXCIpO2QuY2FsZW5kYXJzPU1hdGgubWF4KDEscGFyc2VJbnQoZC5jYWxlbmRhcnMsMTApfHwxKTtkLm1vZGU9L3NpbmdsZXxtdWx0aXBsZXxyYW5nZS8udGVzdChkLm1vZGUpP2QubW9kZTpcInNpbmdsZVwiO2QubWluJiYoZC5taW49dChkLm1pbixkKSxkLnNlbGVjdF9kYXl8fGQubWluLnNldERhdGUoMSkpO2QubWF4JiYoZC5tYXg9dChkLm1heCxkKSxkLnNlbGVjdF9kYXl8fGQubWF4LnNldERhdGUoMSkpO2M9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTthLl9fcGlja21ldXA9e29wdGlvbnM6ZCxldmVudHM6W10sXG5lbGVtZW50OmN9O2MuX19waWNrbWV1cF90YXJnZXQ9YTtsKGMsXCJwaWNrbWV1cFwiKTtkLmNsYXNzX25hbWUmJmwoYyxkLmNsYXNzX25hbWUpO2QuYm91bmQ9e2ZpbGw6Ti5iaW5kKGEsYSksdXBkYXRlX2RhdGU6Ty5iaW5kKGEsYSksY2xpY2s6UC5iaW5kKGEsYSksc2hvdzpJLmJpbmQoYSxhKSxmb3JjZWRfc2hvdzpJLmJpbmQoYSxhLCEwKSxoaWRlOlEuYmluZChhLGEpLHVwZGF0ZTpSLmJpbmQoYSxhKSxjbGVhcjpTLmJpbmQoYSxhKSxwcmV2OlQuYmluZChhLGEpLG5leHQ6VS5iaW5kKGEsYSksZ2V0X2RhdGU6Vi5iaW5kKGEsYSksc2V0X2RhdGU6Vy5iaW5kKGEsYSksZGVzdHJveTpYLmJpbmQoYSxhKX07bChjLFwicG11LXZpZXctXCIrZC52aWV3KTt2YXIgZT1kLmluc3RhbmNlX3RlbXBsYXRlKGQpLGg9XCJcIjtmb3IoYj0wO2I8ZC5jYWxlbmRhcnM7KytiKWgrPWU7Yy5pbm5lckhUTUw9aDtxKGEsYyxcImNsaWNrXCIsZC5ib3VuZC5jbGljayk7cShhLGMsXCJvbnNlbGVjdHN0YXJ0XCJpbiBFbGVtZW50LnByb3RvdHlwZT9cblwic2VsZWN0c3RhcnRcIjpcIm1vdXNlZG93blwiLGZ1bmN0aW9uKGEpe2EucHJldmVudERlZmF1bHQoKX0pO2QuZmxhdD8obChjLFwicG11LWZsYXRcIiksYS5hcHBlbmRDaGlsZChjKSk6KGwoYyxcInBtdS1oaWRkZW5cIiksZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjKSxxKGEsYSxcImNsaWNrXCIsSS5iaW5kKGEsYSwhMSkpLHEoYSxhLFwiaW5wdXRcIixkLmJvdW5kLnVwZGF0ZSkscShhLGEsXCJjaGFuZ2VcIixkLmJvdW5kLnVwZGF0ZSkpO2QuYm91bmQuc2V0X2RhdGUoZC5kYXRlLGQuY3VycmVudCl9ZD1hLl9fcGlja21ldXAub3B0aW9ucztyZXR1cm57aGlkZTpkLmJvdW5kLmhpZGUsc2hvdzpkLmJvdW5kLnNob3csY2xlYXI6ZC5ib3VuZC5jbGVhcix1cGRhdGU6ZC5ib3VuZC51cGRhdGUscHJldjpkLmJvdW5kLnByZXYsbmV4dDpkLmJvdW5kLm5leHQsZ2V0X2RhdGU6ZC5ib3VuZC5nZXRfZGF0ZSxzZXRfZGF0ZTpkLmJvdW5kLnNldF9kYXRlLGRlc3Ryb3k6ZC5ib3VuZC5kZXN0cm95fX1FLmRlZmF1bHRzPVxue2N1cnJlbnQ6bnVsbCxkYXRlOm5ldyBEYXRlLGRlZmF1bHRfZGF0ZTpuZXcgRGF0ZSxmbGF0OiExLGZpcnN0X2RheToxLHByZXY6XCImIzk2NjQ7XCIsbmV4dDpcIiYjOTY1NDtcIixtb2RlOlwic2luZ2xlXCIsc2VsZWN0X3llYXI6ITAsc2VsZWN0X21vbnRoOiEwLHNlbGVjdF9kYXk6ITAsdmlldzpcImRheXNcIixjYWxlbmRhcnM6MSxmb3JtYXQ6XCJkLW0tWVwiLHRpdGxlX2Zvcm1hdDpcIkIsIFlcIixwb3NpdGlvbjpcImJvdHRvbVwiLGNsYXNzX25hbWU6XCJcIixzZXBhcmF0b3I6XCIgLSBcIixoaWRlX29uX3NlbGVjdDohMSxtaW46bnVsbCxtYXg6bnVsbCxyZW5kZXI6ZnVuY3Rpb24oKXt9LGxvY2FsZTpcImVuXCIsbG9jYWxlczp7ZW46e2RheXM6XCJTdW5kYXkgTW9uZGF5IFR1ZXNkYXkgV2VkbmVzZGF5IFRodXJzZGF5IEZyaWRheSBTYXR1cmRheVwiLnNwbGl0KFwiIFwiKSxkYXlzU2hvcnQ6XCJTdW4gTW9uIFR1ZSBXZWQgVGh1IEZyaSBTYXRcIi5zcGxpdChcIiBcIiksZGF5c01pbjpcIlN1IE1vIFR1IFdlIFRoIEZyIFNhXCIuc3BsaXQoXCIgXCIpLFxubW9udGhzOlwiSmFudWFyeSBGZWJydWFyeSBNYXJjaCBBcHJpbCBNYXkgSnVuZSBKdWx5IEF1Z3VzdCBTZXB0ZW1iZXIgT2N0b2JlciBOb3ZlbWJlciBEZWNlbWJlclwiLnNwbGl0KFwiIFwiKSxtb250aHNTaG9ydDpcIkphbiBGZWIgTWFyIEFwciBNYXkgSnVuIEp1bCBBdWcgU2VwIE9jdCBOb3YgRGVjXCIuc3BsaXQoXCIgXCIpfX0saW5zdGFuY2VfdGVtcGxhdGU6ZnVuY3Rpb24oYSl7dmFyIGM9YS5sb2NhbGVzW2EubG9jYWxlXS5kYXlzTWluLnNsaWNlKCk7YS5maXJzdF9kYXkmJmMucHVzaChjLnNoaWZ0KCkpO3JldHVybic8ZGl2IGNsYXNzPVwicG11LWluc3RhbmNlXCI+PG5hdj48ZGl2IGNsYXNzPVwicG11LXByZXYgcG11LWJ1dHRvblwiPicrYS5wcmV2Kyc8L2Rpdj48ZGl2IGNsYXNzPVwicG11LW1vbnRoIHBtdS1idXR0b25cIj48L2Rpdj48ZGl2IGNsYXNzPVwicG11LW5leHQgcG11LWJ1dHRvblwiPicrYS5uZXh0Kyc8L2Rpdj48L25hdj48bmF2IGNsYXNzPVwicG11LWRheS1vZi13ZWVrXCI+PGRpdj4nK1xuYy5qb2luKFwiPC9kaXY+PGRpdj5cIikrXCI8L2Rpdj48L25hdj48L2Rpdj5cIn0saW5zdGFuY2VfY29udGVudF90ZW1wbGF0ZTpmdW5jdGlvbihhLGMpe3ZhciBiPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7bChiLGMpO2ZvcihjPTA7YzxhLmxlbmd0aDsrK2MpbChhW2NdLFwicG11LWJ1dHRvblwiKSxiLmFwcGVuZENoaWxkKGFbY10pO3JldHVybiBifX07cmV0dXJuIEV9KTtcbiIsIi8qISBVVEYtOFxuXG7CqSBrb3ZyaWdpblxu0JLRgdC1INC/0YDQsNCy0LAg0YDQsNC30YDQtdGI0LXQvdGLXG7QutGA0LDRgdC40LLRi9C5INC00LjQt9Cw0LnQvSDQtNC+0LvQttC10L0g0LjQvNC10YLRjCDQutGA0LDRgdC40LLRi9C5INC60L7QtMKuXG5cbmh0dHBzOi8vZ2l0aHViLmNvbS9odG1scGx1c2Nzcy9cblxuKi9cblxuKCAoKSA9PiB7XG5cblx0bGV0IHJlc2l6ZVRpbWVvdXQgPSBudWxsLFxuXHRcdHdpbmRvd1dpZHRoT0xkID0gd2luZG93LmlubmVyV2lkdGg7XG5cblx0Y29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xuXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcblxuXHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHtcblxuXHRcdFx0aWYgKHJlc2l6ZVRpbWVvdXQgPT09IG51bGwpIHtcblxuXHRcdFx0XHRyZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dCggKCkgPT4ge1xuXG5cdFx0XHRcdFx0cmVzaXplVGltZW91dCA9IG51bGw7XG5cblx0XHRcdFx0XHRpZih3aW5kb3dXaWR0aE9MZCAhPT0gd2luZG93LmlubmVyV2lkdGgpIHtcblxuXHRcdFx0XHRcdFx0d2luZG93V2lkdGhPTGQgPSB3aW5kb3cuaW5uZXJXaWR0aDtcblx0XHRcdFx0XHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1zY3JvbGxNYXJnaW4nLCBoZWFkZXIuY2xpZW50SGVpZ2h0ICsgJ3B4Jyk7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fSwgMTAwKTtcblxuXHRcdFx0fVxuXG5cdFx0fSk7XG5cblx0fSk7XG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcblxuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmYXN0TG9hZFNjcmlwdCcsIHRydWUpO1xuXG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXRyYW5zaXRpb25EZWZhdWx0JywgJy4zcycpO1xuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1zY3JvbGxNYXJnaW4nLCBoZWFkZXIuY2xpZW50SGVpZ2h0ICsgJ3B4Jyk7XG5cblx0fSk7XG5cblx0Ly8g0L7QsdGA0LDQsdC+0YLRh9C40Log0LDQvdC40LzQsNGG0LjQuVxuXHR3aW5kb3cuY3NzQW5pbWF0aW9uID0gYT0+e2xldCBiLGMsZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY3NzYW5pbWF0aW9uXCIpO3N3aXRjaChhKXtjYXNlJ2FuaW1hdGlvbic6Yj17XCJhbmltYXRpb25cIjpcImFuaW1hdGlvbmVuZFwiLFwiT0FuaW1hdGlvblwiOlwib0FuaW1hdGlvbkVuZFwiLFwiTW96QW5pbWF0aW9uXCI6XCJhbmltYXRpb25lbmRcIixcIldlYmtpdEFuaW1hdGlvblwiOlwid2Via2l0QW5pbWF0aW9uRW5kXCJ9O2JyZWFrO2Nhc2UndHJhbnNpdGlvbic6Yj17XCJ0cmFuc2l0aW9uXCI6XCJ0cmFuc2l0aW9uZW5kXCIsXCJPVHJhbnNpdGlvblwiOlwib1RyYW5zaXRpb25FbmRcIixcIk1velRyYW5zaXRpb25cIjpcInRyYW5zaXRpb25lbmRcIixcIldlYmtpdFRyYW5zaXRpb25cIjpcIndlYmtpdFRyYW5zaXRpb25FbmRcIn19Zm9yKGMgaW4gYilpZihkLnN0eWxlW2NdIT09dW5kZWZpbmVkKXJldHVybiBiW2NdfVxuXG5cdC8vIERldGVybWluZSBpZiBhbiBlbGVtZW50IGlzIGluIHRoZSB2aXNpYmxlIHZpZXdwb3J0XG5cdHdpbmRvdy5pc0luVmlld3BvcnQgPSBlbCA9PiB7XG5cdFx0Y29uc3QgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdHJldHVybiAocmVjdC50b3AgPj0gMCAmJiByZWN0LmJvdHRvbSA8PSB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuXHR9XG5cblx0Ly8g0L7RgtC00LXQu9GP0LXQvCDRgtGL0YHRj9GH0Lhcblx0d2luZG93LnNlcE51bWJlciA9IHN0ciA9PiB7XG5cdFx0c3RyID0gc3RyLnRvU3RyaW5nKCk7XG5cdFx0c3RyID0gc3RyLnJlcGxhY2UoL1xccysvZywnJyk7XG5cdFx0cmV0dXJuIHN0ci5yZXBsYWNlKC8oXFxkKSg/PShcXGRcXGRcXGQpKyhbXlxcZF18JCkpL2csICckMSAnKTtcblx0fVxuXG5cdC8vINGB0LrQu9C10LjQstCw0LXQvCDRgtGL0YHRj9GH0Lhcblx0d2luZG93LnN0clRvTnVtYmVyID0gbiA9PiBwYXJzZUludChuLnJlcGxhY2UoL1xccysvZywnJyksIDEwKTtcblxuLy8g0YHQutC70L7QvdC10L3QuNC1XG5cdHdpbmRvdy5kZWNsZW5zaW9uID0gKG51bSwgZXhwcmVzc2lvbnMpID0+IHtcblxuXHRcdGxldCByLFxuXHRcdFx0Y291bnQgPSBudW0gJSAxMDA7XG5cblx0XHRpZiAoY291bnQgPiA0ICYmIGNvdW50IDwgMjEpe1xuXG5cdFx0XHRyID0gZXhwcmVzc2lvbnNbJzInXTtcblxuXHRcdH1cblx0XHRlbHNlIHtcblxuXHRcdFx0Y291bnQgPSBjb3VudCAlIDEwO1xuXG5cdFx0XHRpZiAoY291bnQgPT0gMSl7XG5cdFx0XHRcdHIgPSBleHByZXNzaW9uc1snMCddO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoY291bnQgPiAxICYmIGNvdW50IDwgNSl7XG5cdFx0XHRcdHIgPSBleHByZXNzaW9uc1snMSddO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZXtcblx0XHRcdFx0ciA9IGV4cHJlc3Npb25zWycyJ107XG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gcjtcblxuXHR9XG5cbn0pKCk7IiwiKCBpdGVtcyA9PiB7XG5cblx0aWYoIWl0ZW1zLmxlbmd0aCkge1xuXG5cdFx0cmV0dXJuO1xuXG5cdH1cblxuXHRbLi4uaXRlbXNdLmZvckVhY2goIGFjY29yZGlvbiA9PiB7XG5cblx0XHRsZXQgYW5pbWF0ZU9uID0gZmFsc2UsXG5cdFx0XHRhY3RpdmVJdGVtID0gbnVsbDtcblxuXHRcdGNvbnN0IGl0ZW1zID0gYWNjb3JkaW9uLnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvcmRpb25fX2l0ZW0nKSxcblx0XHRcdCAgc3R5bGVQbHVzID0gYWNjb3JkaW9uLmNsYXNzTGlzdC5jb250YWlucygnYWNjb3JkaW9uLS1wbHVzJyk7XG5cblx0XHRbLi4uaXRlbXNdLmZvckVhY2goIGl0ZW0gPT4ge1xuXG5cdFx0XHRjb25zdCBidG4gPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb25fX2J0bicpLFxuXHRcdFx0XHQgIGhlYWQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb25fX2hlYWQnKSxcblx0XHRcdFx0ICBib2R5ID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uX19ib2R5JyksXG5cdFx0XHRcdCAgYXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInN2Z1wiKTtcblxuXHRcdFx0YXJyb3cuc2V0QXR0cmlidXRlTlMobnVsbCwgXCJ2aWV3Qm94XCIsIFwiMCAwIDI0IDI0XCIpO1xuXHRcdFx0YXJyb3cuc2V0QXR0cmlidXRlTlMobnVsbCwgXCJ3aWR0aFwiLCAyNCk7XG5cdFx0XHRhcnJvdy5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcImhlaWdodFwiLCAyNCk7XG5cdFx0XHRhcnJvdy5pbm5lckhUTUwgPSBgPHVzZSB4bGluazpocmVmPVwiI3N2Zy0keyBzdHlsZVBsdXMgPyAncGx1cycgOiAnYXJyb3ctY2hldnJvbi1yaWdodCcgfVwiLz5gO1xuXG5cdFx0XHRoZWFkLmFwcGVuZChhcnJvdyk7XG5cblx0XHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuXHRcdFx0XHRhbmltYXRlT24gPSB0cnVlO1xuXG5cdFx0XHRcdGlmKCBpdGVtID09PSBhY3RpdmVJdGVtICl7XG5cblx0XHRcdFx0XHRpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9wZW4nKTtcblx0XHRcdFx0XHRhY3RpdmVJdGVtID0gbnVsbDtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0YWN0aXZlSXRlbSA9IGl0ZW07XG5cblx0XHRcdFx0XHRbLi4uaXRlbXNdLmZvckVhY2goIGVsID0+IGVsLmNsYXNzTGlzdC50b2dnbGUoJ2lzLW9wZW4nLCBlbCA9PT0gaXRlbSkpO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fSk7XG5cblx0XHRcdGJvZHkuYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3cuY3NzQW5pbWF0aW9uKCd0cmFuc2l0aW9uJyksICgpID0+IHtcblxuXHRcdFx0XHRpZihhbmltYXRlT24gJiYgYWN0aXZlSXRlbSAmJiAhd2luZG93LmlzSW5WaWV3cG9ydChoZWFkKSl7XG5cblx0XHRcdFx0XHRoZWFkLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRhbmltYXRlT24gPSBmYWxzZTtcblxuXHRcdFx0fSk7XG5cblx0XHR9KTtcblxuXHR9KTtcblxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbicpKTsiLCIoIGFydGljbGUgPT4ge1xuXG5cdGlmKGFydGljbGUpIHtcblxuXHRcdC8vIHNoYXJlXG5cblx0XHRjb25zdCBidG4gPSBhcnRpY2xlLnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLWFydGljbGVfX3NoYXJlLWJ0bicpO1xuXG5cdFx0aWYgKCBidG4gKSB7XG5cblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xuXG5cdFx0XHRcdGlmICggZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5wYWdlLWFydGljbGVfX3NoYXJlJykgKSB7XG5cblx0XHRcdFx0XHRidG4uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtb3BlbicpO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRidG4uY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fSk7XG5cblx0XHR9XG5cblx0fVxuXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS1hcnRpY2xlJykpOyIsIiggYnJhbmRzID0+IHtcblxuXHRpZiggYnJhbmRzICkge1xuXG5cdFx0Y29uc3QgZ3JvdXAgPSBicmFuZHMucXVlcnlTZWxlY3RvckFsbCgnLmJyYW5kc19fZ3JvdXAnKTtcblxuXHRcdC8vIGhhc2hcblxuXHRcdGNvbnN0IHNldFN0YWdlID0gKCk9PiB7XG5cblx0XHRcdGNvbnN0IGhhc2ggPSBsb2NhdGlvbi5oYXNoLnRvTG93ZXJDYXNlKCkuc2xpY2UoMSk7XG5cblx0XHRcdFsuLi5ncm91cF0uZm9yRWFjaCggaXRlbSA9PiB7XG5cblx0XHRcdFx0aXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJywgaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaGFzaCcpLnRvTG93ZXJDYXNlKCkgIT09IGhhc2ggJiYgaGFzaCApO1xuXG5cdFx0XHR9KTtcblxuXHRcdH1cblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgc2V0U3RhZ2UpO1xuXG5cdFx0aWYgKCBsb2NhdGlvbi5oYXNoICkge1xuXG5cdFx0XHRzZXRUaW1lb3V0KCBzZXRTdGFnZSApO1xuXG5cdFx0fVxuXG5cdFx0Ly8gYnRuc1xuXG5cdFx0Y29uc3QgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5icmFuZHMtc29ydF9fYnRuJyk7XG5cblx0XHRbLi4uYnRuc10uZm9yRWFjaCggbGluayA9PiB7XG5cblx0XHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG5cblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0XHRpZiAoIGxpbmsuaHJlZi5pbmNsdWRlcygnIycpICkge1xuXG5cdFx0XHRcdFx0bG9jYXRpb24uaGFzaCA9IGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG5cblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdGhpc3RvcnkucHVzaFN0YXRlKCcnLCBkb2N1bWVudC50aXRsZSwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHNldFN0YWdlKCk7XG5cblx0XHRcdH0pO1xuXG5cdFx0fSk7XG5cblx0fVxuXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnJhbmRzJykpOyIsIiggZm9ybSA9PiB7XG5cblx0aWYoIGZvcm0gKSB7XG5cblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XG5cblx0XHRcdGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCxcblx0XHRcdFx0ICBpdGVtID0gdGFyZ2V0LmNsb3Nlc3QoJy5jYXJ0X19pdGVtJyk7XG5cblx0XHRcdC8vIHJlbW92ZVxuXG5cdFx0XHRpZiAoIHRhcmdldC5jbG9zZXN0KCcuY2FydC1pdGVtX19yZW1vdmUnKSApIHtcblxuXHRcdFx0XHRpdGVtLnN0eWxlLmhlaWdodCA9IGl0ZW0uY2xpZW50SGVpZ2h0ICsgXCJweFwiO1xuXG5cdFx0XHRcdGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3cuY3NzQW5pbWF0aW9uKCd0cmFuc2l0aW9uJyksIGV2ZW50ID0+IHtcblxuXHRcdFx0XHRcdGlmICggZXZlbnQucHJvcGVydHlOYW1lID09PSAnaGVpZ2h0JyAmJiBpdGVtLmNsaWVudEhlaWdodCA9PT0gMCApIHtcblxuXHRcdFx0XHRcdFx0aXRlbS5yZW1vdmUoKTtcblxuXHRcdFx0XHRcdFx0c2V0VGltZW91dCggKCk9PiBmb3JtLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSksMTAwKTtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRzZXRUaW1lb3V0KCAoKT0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnaXMtcmVtb3ZlJykgKTtcblxuXHRcdFx0fVxuXG5cdFx0fSk7XG5cblx0XHQvLyBzdWJtaXRcblxuXHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnQgPT4ge1xuXG5cdFx0XHRmZXRjaChmb3JtLmdldEF0dHJpYnV0ZSgnYWN0aW9uJyksIHtcblx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRcdGJvZHk6IG5ldyBGb3JtRGF0YShmb3JtKVxuXHRcdFx0fSlcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcblx0XHRcdC50aGVuKHJlc3VsdCA9PiB7XG5cblx0XHRcdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcblxuXHRcdFx0fSk7XG5cblx0XHR9KTtcblxuXG5cdFx0Ly8gKyB8IC1cblxuXHRcdGNvbnN0IHF1YW50aXR5ID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcuY2FydC1xdWFudGl0eScpO1xuXG5cdFx0Wy4uLnF1YW50aXR5XS5mb3JFYWNoKCBlbCA9PiB7XG5cblx0XHRcdGxldCB2YWx1ZSA9IG51bGw7XG5cblx0XHRcdGNvbnN0IHVwID0gZWwucXVlcnlTZWxlY3RvcignLmNhcnQtcXVhbnRpdHlfX2J0bi0tdXAnKSxcblx0XHRcdFx0ICBkb3duID0gZWwucXVlcnlTZWxlY3RvcignLmNhcnQtcXVhbnRpdHlfX2J0bi0tZG93bicpLFxuXHRcdFx0XHQgIGNvdW50ID0gZWwucXVlcnlTZWxlY3RvcignLmNhcnQtcXVhbnRpdHlfX2NvdW50Jyk7XG5cblx0XHRcdHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG5cdFx0XHRcdHZhbHVlID0gcGFyc2VJbnQoY291bnQudmFsdWUpO1xuXG5cdFx0XHRcdGNvdW50LnZhbHVlID0gaXNOYU4odmFsdWUpID8gMSA6IHZhbHVlICsgMTtcblxuXHRcdFx0XHRmb3JtLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XG5cblx0XHRcdH0pO1xuXG5cdFx0XHRkb3duLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG5cdFx0XHRcdHZhbHVlID0gcGFyc2VJbnQoY291bnQudmFsdWUpO1xuXG5cdFx0XHRcdGlmKCBpc05hTih2YWx1ZSkgfHwgdmFsdWUgPCAyICkge1xuXG5cdFx0XHRcdFx0dmFsdWUgPSAyO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb3VudC52YWx1ZSA9IHZhbHVlIC0gMTtcblxuXHRcdFx0XHRmb3JtLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XG5cblx0XHRcdH0pO1xuXG5cdFx0XHRjb3VudC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuXG5cdFx0XHRcdGZvcm0uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcblxuXHRcdFx0fSk7XG5cblx0XHRcdGNvdW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4ge1xuXG5cdFx0XHRcdHNldFRpbWVvdXQoICgpID0+IGNvdW50LnNldFNlbGVjdGlvblJhbmdlKDAsOSksIDEwMCk7XG5cblx0XHRcdH0pO1xuXG5cdFx0XHRjb3VudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICgpID0+IHtcblxuXHRcdFx0XHRjb25zdCB2YWwgPSBjb3VudC52YWx1ZS5yZXBsYWNlKC9bXFxEXS9nLCAnJyk7XG5cblx0XHRcdFx0aWYgKCBpc05hTih2YWwpICkge1xuXG5cdFx0XHRcdFx0dmFsID0gMTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y291bnQudmFsdWUgPSB2YWw7XG5cblx0XHRcdFx0Zm9ybS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xuXG5cdFx0XHR9KTtcblxuXHRcdH0pO1xuXG5cdH07XG5cbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0JykpOyIsIiggY2FyZHMgPT4ge1xuXG5cdGlmKCBjYXJkcy5sZW5ndGggKSB7XG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuXG5cdFx0XHRjYXJkcy5mb3JFYWNoKCBjYXJkID0+IHtcblxuXHRcdFx0XHRjb25zdCBsaXN0VGFncyA9IGNhcmQucXVlcnlTZWxlY3RvcignLmNvbnN1bHRhdGlvbnMtY2FyZF9fcXVlc3Rpb24tdGFncycpLFxuXHRcdFx0XHRcdCAgaXRlbVRhZ3MgPSBjYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb25zdWx0YXRpb25zLWNhcmRfX3F1ZXN0aW9uLXRhZ3MgbGknKSxcblx0XHRcdFx0XHQgIHdyYXBUYWdzID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuY29uc3VsdGF0aW9ucy1jYXJkX19xdWVzdGlvbi10YWdzLXdyYXAnKTtcblxuXHRcdFx0XHRpZiAoIHdyYXBUYWdzLmNsaWVudEhlaWdodCA8IGxpc3RUYWdzLmNsaWVudEhlaWdodCApIHtcblxuXHRcdFx0XHRcdGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG5cdFx0XHRcdFx0YnRuLnR5cGUgPSAnYnV0dG9uJztcblx0XHRcdFx0XHRidG4uY2xhc3NOYW1lID0gJ2J0biBidG4tLWhhc2ggYnRuLS1zbWFsbCc7XG5cdFx0XHRcdFx0YnRuLnRleHRDb250ZW50ID0gd3JhcFRhZ3MuZ2V0QXR0cmlidXRlKCdkYXRhLW1vcmUnKTtcblxuXHRcdFx0XHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuXHRcdFx0XHRcdFx0aWYgKCB3cmFwVGFncy5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLW9wZW4nKSApIHtcblxuXHRcdFx0XHRcdFx0XHR3cmFwVGFncy5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJyk7XG5cdFx0XHRcdFx0XHRcdGJ0bi50ZXh0Q29udGVudCA9IHdyYXBUYWdzLmdldEF0dHJpYnV0ZSgnZGF0YS1tb3JlJyk7XG5cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRcdFx0d3JhcFRhZ3MuY2xhc3NMaXN0LmFkZCgnaXMtb3BlbicpO1xuXHRcdFx0XHRcdFx0XHRidG4udGV4dENvbnRlbnQgPSB3cmFwVGFncy5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGVzcycpO1xuXG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdHdyYXBUYWdzLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlbmQnLCBidG4pO1xuXG5cdFx0XHRcdH07XG5cblx0XHRcdH0pO1xuXG5cdFx0fSk7XG5cblx0fVxuXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29uc3VsdGF0aW9ucy1jYXJkJykpOyIsIiggZGVhZGxpbmUgPT4ge1xuXG5cdGlmICggZGVhZGxpbmUubGVuZ3RoID4gMCApIHtcblxuXHRcdGNvbnN0IGdldFRpbWVSZW1haW5pbmcgPSBlbmR0aW1lID0+IHtcblxuXHRcdFx0Y29uc3QgdG90YWwgPSBEYXRlLnBhcnNlKGVuZHRpbWUpIC0gRGF0ZS5wYXJzZShuZXcgRGF0ZSgpKSxcblx0XHRcdFx0ICBzZWNvbmRzID0gTWF0aC5mbG9vcigodG90YWwgLyAxMDAwKSAlIDYwKSxcblx0XHRcdFx0ICBtaW51dGVzID0gTWF0aC5mbG9vcigodG90YWwgLyAxMDAwIC8gNjApICUgNjApLFxuXHRcdFx0XHQgIGhvdXJzID0gTWF0aC5mbG9vcigodG90YWwgLyAoMTAwMCAqIDYwICogNjApKSAlIDI0KSxcblx0XHRcdFx0ICBkYXlzID0gTWF0aC5mbG9vcih0b3RhbCAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG5cblx0XHRcdHJldHVybiB7dG90YWwsIGRheXMsIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzfVxuXG5cdFx0fVxuXG5cdFx0Y29uc3QgaW5pdCA9IChlbCwgZW5kdGltZSwgZXhwcmVzc2lvbnMpID0+IHtcblxuXHRcdFx0Y29uc3QgdXBkYXRlQ2xvY2sgPSAoKT0+IHtcblxuXHRcdFx0XHRjb25zdCB0ID0gZ2V0VGltZVJlbWFpbmluZyhlbmR0aW1lKTtcblxuXHRcdFx0XHRlbC50ZXh0Q29udGVudCA9IHQuZGF5cyArICcgJyArIHdpbmRvdy5kZWNsZW5zaW9uKHQuZGF5cywgZXhwcmVzc2lvbnMpICsgJyAnICsgKCcwJyArIHQuaG91cnMpLnNsaWNlKC0yKSArICc6JyArICgnMCcgKyB0Lm1pbnV0ZXMpLnNsaWNlKC0yKSArICc6JyArICgnMCcgKyB0LnNlY29uZHMpLnNsaWNlKC0yKTtcblxuXHRcdFx0XHRpZiAoIHQudG90YWwgPiAwICkge1xuXG5cdFx0XHRcdFx0c2V0VGltZW91dCggdXBkYXRlQ2xvY2ssIDEwMDApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGVDbG9jaygpO1xuXG5cdFx0fVxuXG5cdFx0Wy4uLmRlYWRsaW5lXS5mb3JFYWNoKCBlbCA9PiB7XG5cblx0XHRcdGNvbnN0IHRpbWVyID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWRlYWRsaW5lJyksXG5cdFx0XHRcdCAgZXhwcmVzc2lvbnMgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZGVjbGVuc2lvbicpLnNwbGl0KCd8Jyk7XG5cblx0XHRcdGluaXQoIGVsLCB0aW1lciwgZXhwcmVzc2lvbnMgKTtcblxuXHRcdFx0c2V0VGltZW91dCggKCk9PiB7XG5cblx0XHRcdFx0aWYgKCBlbC5jbGllbnRXaWR0aCA+IDAgKSB7XG5cblx0XHRcdFx0XHRlbC5zdHlsZS53aWR0aCA9IGVsLmNsaWVudFdpZHRoICsgJ3B4Jztcblx0XHRcdFx0XHRlbC5zdHlsZS50ZXh0QWxpZ24gPSAnbGVmdCc7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9LCAxMDAwKTtcblxuXHRcdH0pO1xuXG5cdH1cblxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZGVhZGxpbmVdJykpOyIsIiggKCkgPT4ge1xuXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcblxuXHRcdC8vICDQndCw0YjQu9C4INC00LXRiNC10LLQu9C1P1xuXG5cdFx0Y29uc3QgYmVzdFByaWNlID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5qcy1iZXN0LXByaWNlJyk7XG5cblx0XHRpZiAoIGJlc3RQcmljZSApIHtcblxuXHRcdFx0Y29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJldmlldy1jYXJkLXJvdy10ZW1wbGF0ZScpLmlubmVySFRNTCxcblx0XHRcdFx0ICBwcm9kdWN0ID0gYmVzdFByaWNlLmNsb3Nlc3QoJy5wcm9kdWN0Jyk7XG5cdFx0XHRcdCAgcGFyYW0gPSB7fTtcblxuXHRcdFx0aWYgKCBwcm9kdWN0ICkge1xuXG5cdFx0XHRcdHBhcmFtLmlkICAgICAgICA9IHByb2R1Y3QucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtYnV5JykuaWQudmFsdWU7XG5cdFx0XHRcdHBhcmFtLmxpbmsgICAgICA9IGxvY2F0aW9uLmhyZWY7XG5cdFx0XHRcdHBhcmFtLnByaWNlICAgICA9IHBhcnNlSW50KHByb2R1Y3QucXVlcnlTZWxlY3RvcignLnByaWNlX192YWx1ZScpLnRleHRDb250ZW50KTtcblx0XHRcdFx0cGFyYW0ucHJpY2VPbGQgID0gcHJvZHVjdC5xdWVyeVNlbGVjdG9yKCdkYXRhLXByaWNlLW9sZCcpO1xuXHRcdFx0XHRwYXJhbS5pbWcgICAgICAgPSBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWdhbGxlcnkgaW1nJykuc3JjO1xuXHRcdFx0XHRwYXJhbS5pbWcyeCAgICAgPSBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWdhbGxlcnkgaW1nJykuc3JjO1xuXHRcdFx0XHRwYXJhbS5uYW1lICAgICAgPSBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0X190aXRsZScpLnRleHRDb250ZW50O1xuXG5cdFx0XHRcdGlmICggcHJvZHVjdC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1idXknKS5hcnRpY2xlaWQgKSB7XG5cblx0XHRcdFx0XHRwYXJhbS5hcnRpY2xlaWQgPSBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWJ1eScpLmFydGljbGVpZC52YWx1ZTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcmljZV9fb2xkJykgKSB7XG5cblx0XHRcdFx0XHRwYXJhbS5wcmljZU9sZCA9IHBhcnNlSW50KHByb2R1Y3QucXVlcnlTZWxlY3RvcignLnByaWNlX19vbGQnKS50ZXh0Q29udGVudCk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblxuXHRcdFx0XHRwYXJhbS5pZCAgICAgICAgPSBiZXN0UHJpY2UuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG5cdFx0XHRcdHBhcmFtLmFydGljbGVpZCA9IGJlc3RQcmljZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXJ0aWNsZWlkJyk7XG5cdFx0XHRcdHBhcmFtLmxpbmsgICAgICA9IGJlc3RQcmljZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGluaycpO1xuXHRcdFx0XHRwYXJhbS5wcmljZSAgICAgPSBiZXN0UHJpY2UuZ2V0QXR0cmlidXRlKCdkYXRhLXByaWNlJyk7XG5cdFx0XHRcdHBhcmFtLnByaWNlT2xkICA9IGJlc3RQcmljZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2Utb2xkJyk7XG5cdFx0XHRcdHBhcmFtLmltZyAgICAgICA9IGJlc3RQcmljZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW1nJyk7XG5cdFx0XHRcdHBhcmFtLmltZzJ4ICAgICA9IGJlc3RQcmljZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW1nMngnKTtcblx0XHRcdFx0cGFyYW0ubmFtZSAgICAgID0gYmVzdFByaWNlLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJyk7XG5cblx0XHRcdH1cblxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWZvcm0tYmVzdC1wcmljZS1wcm9kdWN0JykuaW5uZXJIVE1MID0gTXVzdGFjaGUucmVuZGVyKHRlbXBsYXRlLCBwYXJhbSk7XG5cblx0XHR9XG5cblx0XHQvLyAg0J3QsNC50YLQuCDQsNC90LDQu9C+0LPQuNGH0L3Ri9C5INGC0L7QstCw0YBcblxuXHRcdGNvbnN0IGZpbmRBbmFsb2d1ZSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuanMtZmluZC1hbmFsb2d1ZScpO1xuXG5cdFx0aWYgKCBmaW5kQW5hbG9ndWUgKSB7XG5cblx0XHRcdGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByZXZpZXctY2FyZC1yb3ctdGVtcGxhdGUnKS5pbm5lckhUTUwsXG5cdFx0XHRcdCAgcGFyYW0gPSB7fTtcblxuXHRcdFx0cGFyYW0uaWQgICAgICAgID0gZmluZEFuYWxvZ3VlLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuXHRcdFx0cGFyYW0uYXJ0aWNsZWlkID0gZmluZEFuYWxvZ3VlLmdldEF0dHJpYnV0ZSgnZGF0YS1hcnRpY2xlaWQnKTtcblx0XHRcdHBhcmFtLmxpbmsgICAgICA9IGZpbmRBbmFsb2d1ZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGluaycpO1xuXHRcdFx0cGFyYW0ucHJpY2UgICAgID0gZmluZEFuYWxvZ3VlLmdldEF0dHJpYnV0ZSgnZGF0YS1wcmljZScpO1xuXHRcdFx0cGFyYW0ucHJpY2VPbGQgID0gZmluZEFuYWxvZ3VlLmdldEF0dHJpYnV0ZSgnZGF0YS1wcmljZS1vbGQnKTtcblx0XHRcdHBhcmFtLmltZyAgICAgICA9IGZpbmRBbmFsb2d1ZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW1nJyk7XG5cdFx0XHRwYXJhbS5pbWcyeCAgICAgPSBmaW5kQW5hbG9ndWUuZ2V0QXR0cmlidXRlKCdkYXRhLWltZzJ4Jyk7XG5cdFx0XHRwYXJhbS5uYW1lICAgICAgPSBmaW5kQW5hbG9ndWUuZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKTtcblxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWZvcm0tZmluZC1hbmFsb2d1ZS1wcm9kdWN0JykuaW5uZXJIVE1MID0gTXVzdGFjaGUucmVuZGVyKHRlbXBsYXRlLCBwYXJhbSk7XG5cblx0XHR9XG5cblx0XHQvLyAg0KPQstC10LTQvtC80LjRgtGMICAvINC90LDQudGC0Lgg0LDQvdCw0LvQvtCzXG5cblx0XHRjb25zdCBmaW5kTm90aWZ5ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5qcy1maW5kLW5vdGlmeScpO1xuXG5cdFx0aWYgKGZpbmROb3RpZnkpIHtcblxuXHRcdFx0Y29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJldmlldy1jYXJkLXJvdy10ZW1wbGF0ZScpLmlubmVySFRNTCxcblx0XHRcdFx0ICBwcm9kdWN0ID0gZmluZE5vdGlmeS5jbG9zZXN0KCcucHJvZHVjdCcpO1xuXHRcdFx0XHQgIHByZXZpZXdDYXJkID0gZmluZE5vdGlmeS5jbG9zZXN0KCcucHJldmlldy1jYXJkJyksXG5cdFx0XHRcdCAgcHJvZHVjdE1vZGFsID0gZmluZE5vdGlmeS5jbG9zZXN0KCcjcHJldmlldy1jYXJkLWNvbG9yJyksXG5cdFx0XHRcdCAgcGFyYW0gPSB7fTtcblxuXHRcdFx0aWYgKCBwcm9kdWN0ICkge1xuXG5cdFx0XHRcdHBhcmFtLmlkICAgICAgICA9IHByb2R1Y3QucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtYnV5JykuaWQudmFsdWU7XG5cdFx0XHRcdHBhcmFtLmxpbmsgICAgICA9IGxvY2F0aW9uLmhyZWY7XG5cdFx0XHRcdHBhcmFtLnByaWNlICAgICA9IHBhcnNlSW50KHByb2R1Y3QucXVlcnlTZWxlY3RvcignLnByaWNlX192YWx1ZScpLnRleHRDb250ZW50KTtcblx0XHRcdFx0cGFyYW0ucHJpY2VPbGQgID0gcHJvZHVjdC5xdWVyeVNlbGVjdG9yKCdkYXRhLXByaWNlLW9sZCcpO1xuXHRcdFx0XHRwYXJhbS5pbWcgICAgICAgPSBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWdhbGxlcnkgaW1nJykuc3JjO1xuXHRcdFx0XHRwYXJhbS5pbWcyeCAgICAgPSBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWdhbGxlcnkgaW1nJykuc3JjO1xuXHRcdFx0XHRwYXJhbS5uYW1lICAgICAgPSBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0X190aXRsZScpLnRleHRDb250ZW50O1xuXG5cdFx0XHRcdGlmICggcHJvZHVjdC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1idXknKS5hcnRpY2xlaWQgKSB7XG5cblx0XHRcdFx0XHRwYXJhbS5hcnRpY2xlaWQgPSBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWJ1eScpLmFydGljbGVpZC52YWx1ZTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcmljZV9fb2xkJykgKSB7XG5cblx0XHRcdFx0XHRwYXJhbS5wcmljZU9sZCA9IHBhcnNlSW50KHByb2R1Y3QucXVlcnlTZWxlY3RvcignLnByaWNlX19vbGQnKS50ZXh0Q29udGVudCk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9IGVsc2UgaWYgKCBwcmV2aWV3Q2FyZCApIHtcblxuXHRcdFx0XHRwYXJhbS5pZCAgICAgICAgPSBwcmV2aWV3Q2FyZC5xdWVyeVNlbGVjdG9yKCcucHJldmlldy1jYXJkX19mb3JtJykuZWxlbWVudHMuaWQudmFsdWU7XG5cdFx0XHRcdHBhcmFtLmxpbmsgICAgICA9IHByZXZpZXdDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aWV3LWNhcmRfX3RpdGxlJykuaHJlZjtcblx0XHRcdFx0cGFyYW0ucHJpY2UgICAgID0gcGFyc2VJbnQocHJldmlld0NhcmQucXVlcnlTZWxlY3RvcignLnByaWNlX192YWx1ZScpLnRleHRDb250ZW50KTtcblx0XHRcdFx0cGFyYW0uaW1nICAgICAgID0gcHJldmlld0NhcmQucXVlcnlTZWxlY3RvcignLnByZXZpZXctY2FyZF9faW1nIGltZycpLnNyYztcblx0XHRcdFx0cGFyYW0uaW1nMnggICAgID0gcHJldmlld0NhcmQucXVlcnlTZWxlY3RvcignLnByZXZpZXctY2FyZF9faW1nIGltZycpLnNyYztcblx0XHRcdFx0cGFyYW0ubmFtZSAgICAgID0gcHJldmlld0NhcmQucXVlcnlTZWxlY3RvcignLnByZXZpZXctY2FyZF9faW1nIGltZycpLmFsdDtcblxuXHRcdFx0XHRpZiAoIHByZXZpZXdDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aWV3LWNhcmRfX2Zvcm0nKS5lbGVtZW50cy5hcnRpY2xlaWQgKSB7XG5cblx0XHRcdFx0XHRwYXJhbS5hcnRpY2xlaWQgPSBwcmV2aWV3Q2FyZC5xdWVyeVNlbGVjdG9yKCcucHJldmlldy1jYXJkX19mb3JtJykuZWxlbWVudHMuYXJ0aWNsZWlkLnZhbHVlO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoIHByZXZpZXdDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5wcmljZV9fb2xkJykgKSB7XG5cblx0XHRcdFx0XHRwYXJhbS5wcmljZU9sZCA9IHBhcnNlSW50KHByZXZpZXdDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5wcmljZV9fb2xkJykudGV4dENvbnRlbnQpO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIHByb2R1Y3RNb2RhbCApIHtcblxuXHRcdFx0XHRjb25zdCBjaGVja2VkID0gWy4uLnByb2R1Y3RNb2RhbC5lbGVtZW50cy5hcnRpY2xlaWRdLmZpbmQoIGVsID0+IGVsLmNoZWNrZWQgKTtcblxuXHRcdFx0XHRwYXJhbS5pZCAgICAgICAgPSBwcm9kdWN0TW9kYWwuZWxlbWVudHMuaWQudmFsdWU7XG5cdFx0XHRcdHBhcmFtLmFydGljbGVpZCA9IGNoZWNrZWQudmFsdWU7XG5cdFx0XHRcdHBhcmFtLmxpbmsgICAgICA9IHByb2R1Y3RNb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY2FyZC1jb2xvcl9fdGl0bGUgYScpLmhyZWY7XG5cdFx0XHRcdHBhcmFtLnByaWNlICAgICA9IHBhcnNlSW50KGNoZWNrZWQuZ2V0QXR0cmlidXRlKCdkYXRhLXByaWNlJykpO1xuXHRcdFx0XHRwYXJhbS5pbWcgICAgICAgPSBjaGVja2VkLmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKTtcblx0XHRcdFx0cGFyYW0uaW1nMnggICAgID0gY2hlY2tlZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJyk7XG5cdFx0XHRcdHBhcmFtLm5hbWUgICAgICA9IHByb2R1Y3RNb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY2FyZC1jb2xvcl9fdGl0bGUnKS50ZXh0Q29udGVudDtcblxuXHRcdFx0XHRpZiAoIGNoZWNrZWQuZ2V0QXR0cmlidXRlKCdkYXRhLXByaWNlLW9sZCcpICkge1xuXG5cdFx0XHRcdFx0cGFyYW0ucHJpY2VPbGQgPSBwYXJzZUludChjaGVja2VkLmdldEF0dHJpYnV0ZSgnZGF0YS1wcmljZS1vbGQnKSk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1mb3JtLWZpbmQtbm90aWZ5LXByb2R1Y3QnKS5pbm5lckhUTUwgPSBNdXN0YWNoZS5yZW5kZXIodGVtcGxhdGUsIHBhcmFtKTtcblxuXHRcdH1cblxuXHRcdC8vINCy0YvQsdC+0YAg0L/QvtC00YLQvtCy0LDRgNC+0LIsINC60LDRgtCw0LvQvtCzXG5cblx0XHRjb25zdCBidG5TZWxlY3RMaXN0VG9nZ2xlID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5qcy1zZWxlY3QtbGlzdC10b2dnbGUnKTtcblxuXHRcdGlmIChidG5TZWxlY3RMaXN0VG9nZ2xlKSB7XG5cblx0XHRcdGJ0blNlbGVjdExpc3RUb2dnbGUuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtb3BlbicpO1xuXG5cdFx0fVxuXG4vKlxuXG5cdFx0Y29uc3QgYnRuc1NlbGVjdExpc3RUb2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtc2VsZWN0LWxpc3QtdG9nZ2xlJyk7XG5cblx0XHRpZiAoIGJ0bnNTZWxlY3RMaXN0VG9nZ2xlLmxlbmd0aCA+IDAgKSB7XG5cblx0XHRcdGNvbnN0IGJ0blNlbGVjdExpc3RUb2dnbGUgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLmpzLXNlbGVjdC1saXN0LXRvZ2dsZScpO1xuXG5cdFx0XHRpZiAoYnRuU2VsZWN0TGlzdFRvZ2dsZSkge1xuXG5cdFx0XHRcdFsuLi5idG5zU2VsZWN0TGlzdFRvZ2dsZV0uZm9yRWFjaCggYnRuID0+IGJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdpcy1vcGVuJywgYnRuID09PSBidG5TZWxlY3RMaXN0VG9nZ2xlICYmIGJ0blNlbGVjdExpc3RUb2dnbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1vcGVuJykgPT09IGZhbHNlKSk7XG5cblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXG5cdFx0XHRcdFsuLi5idG5zU2VsZWN0TGlzdFRvZ2dsZV0uZm9yRWFjaCggYnRuID0+IGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJykpO1xuXG5cdFx0XHR9XG5cblx0XHR9Ki9cblx0fSk7XG5cbn0pKCk7IiwiLy8gZmlsdGVyXG4oIGZpbHRlciA9PiB7XG5cblx0aWYoIWZpbHRlcikge1xuXG5cdFx0cmV0dXJuO1xuXG5cdH1cblxuXHRjb25zdCBpdGVtcyA9IGZpbHRlci5xdWVyeVNlbGVjdG9yQWxsKCcuZmlsdGVyLXJvd19faXRlbScpLFxuXHRcdCAgaXRlbVJlc2V0ID0gZmlsdGVyLnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXItcm93X19pdGVtLS1yZXNldCcpO1xuXG5cdC8vIGNoYW5nZVxuXG5cdGZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldmVudCA9PiB7XG5cblx0XHRjb25zdCBpdGVtID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5maWx0ZXItcm93X19pdGVtJyk7XG5cblx0XHRsZXQgY2hlY2tlZCA9IGZhbHNlO1xuXG5cdFx0Wy4uLml0ZW0ucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrYm94X19pbnB1dCcpXS5mb3JFYWNoKCBjaGVja2JveCA9PiB7XG5cblx0XHRcdGlmICggY2hlY2tib3guY2hlY2tlZCApIHtcblxuXHRcdFx0XHRjaGVja2VkID0gdHJ1ZTtcblxuXHRcdFx0fVxuXG5cdFx0fSk7XG5cblx0XHRpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXItcm93X19idG4nKS5jbGFzc0xpc3QudG9nZ2xlKCdidG4tLW91dGxpbmUnLCBjaGVja2VkID09PSBmYWxzZSk7XG5cblx0XHRpdGVtUmVzZXQucXVlcnlTZWxlY3RvcignLmZpbHRlci1yb3dfX2J0bicpLmNsYXNzTGlzdC50b2dnbGUoJ2J0bi0tb3V0bGluZScsIGNoZWNrZWQgPT09IHRydWUpO1xuXG5cdH0pO1xuXG5cdC8vIHJlc2V0XG5cblx0ZmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2V0JywgKCk9PiB7XG5cblx0XHRbLi4uaXRlbXNdLmZvckVhY2goIGl0ZW0gPT4gaXRlbS5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyLXJvd19fYnRuJykuY2xhc3NMaXN0LnRvZ2dsZSgnYnRuLS1vdXRsaW5lJywgaXRlbSAhPT0gaXRlbVJlc2V0KSApO1xuXG5cdH0pO1xuXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xuXG5cdFx0Y29uc3QgaXNJdGVtID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5maWx0ZXItcm93X19pdGVtJyk7XG5cblx0XHRpZiAoIGlzSXRlbSApIHtcblxuXHRcdFx0Wy4uLml0ZW1zXS5mb3JFYWNoKCBpdGVtID0+IHtcblxuXHRcdFx0XHRpdGVtLmNsYXNzTGlzdC50b2dnbGUoJ2lzLW9wZW4nLCBpdGVtID09PSBpc0l0ZW0gJiYgaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLW9wZW4nKSA9PT0gZmFsc2UgKTtcblxuXHRcdFx0fSk7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRbLi4uaXRlbXNdLmZvckVhY2goIGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJykgKTtcblxuXHRcdH1cblxuXHR9KTtcblxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbHRlci1yb3cnKSk7IiwiLy8gZmlsdGVyXG4oIGZpbHRlciA9PiB7XG5cblx0aWYoIWZpbHRlcikge1xuXG5cdFx0cmV0dXJuO1xuXG5cdH1cblxuXHQvLyBzY3JvbGxUb1xuXHRjb25zdCBzY3JvbGxUbyA9IChlbGVtZW50LCB0bywgZHVyYXRpb24gPSA3MCkgPT4ge1xuXG5cdFx0aWYgKGR1cmF0aW9uIDw9IDApIHJldHVybjtcblxuXHRcdGNvbnN0IGRpZmZlcmVuY2UgPSB0byAtIGVsZW1lbnQuc2Nyb2xsVG9wLFxuXHRcdFx0ICBwZXJUaWNrID0gZGlmZmVyZW5jZSAvIGR1cmF0aW9uICogMTA7XG5cblx0XHRzZXRUaW1lb3V0KCAoKT0+IHtcblxuXHRcdFx0ZWxlbWVudC5zY3JvbGxUb3AgPSBlbGVtZW50LnNjcm9sbFRvcCArIHBlclRpY2s7XG5cblx0XHRcdGlmIChlbGVtZW50LnNjcm9sbFRvcCA9PT0gdG8pIHJldHVybjtcblxuXHRcdFx0c2Nyb2xsVG8oZWxlbWVudCwgdG8sIGR1cmF0aW9uIC0gMTApO1xuXG5cdFx0fSwgMTApO1xuXG5cdH1cblxuXG5cdGxldCB3aW5kb3dTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG5cblx0Y29uc3QgbW9iaWxlT3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1maWx0ZXItbW9iaWxlLW9wZW4nKTtcblxuXHQvLyBjaGFuZ2VcblxuXHRmaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBldmVudCA9PiB7XG5cblx0XHRjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG5cblx0XHQvLyBsaXZlLXNlYXJjaFxuXG5cdFx0aWYgKCB0YXJnZXQuY2xvc2VzdCgnLmpzLWxpdmUtc2VhcmNoX19pbnB1dCcpICkge1xuXG5cdFx0XHRjb25zdCB2YWx1ZSA9IHRhcmdldC5jbG9zZXN0KCcuanMtbGl2ZS1zZWFyY2hfX2lucHV0JykudmFsdWUudG9Mb3dlckNhc2UoKSxcblx0XHRcdFx0ICBsaXZlU2VhcmNoID0gdGFyZ2V0LmNsb3Nlc3QoJy5qcy1saXZlLXNlYXJjaCcpLFxuXHRcdFx0XHQgIGl0ZW0gPSBsaXZlU2VhcmNoLnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1saXZlLXNlYXJjaF9faXRlbScpLFxuXHRcdFx0XHQgIHJlc2V0ID0gbGl2ZVNlYXJjaC5xdWVyeVNlbGVjdG9yKCcuanMtbGl2ZS1zZWFyY2hfX3Jlc2V0JyksXG5cdFx0XHRcdCAgaW5wdXQgPSBsaXZlU2VhcmNoLnF1ZXJ5U2VsZWN0b3IoJy5qcy1saXZlLXNlYXJjaF9faW5wdXQnKTtcblxuXHRcdFx0aWYgKCB2YWx1ZS5sZW5ndGggPT09IDAgKSB7XG5cblx0XHRcdFx0cmVzZXQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuXG5cdFx0XHRcdFsuLi5pdGVtXS5mb3JFYWNoKCBlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykgKTtcblxuXHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdH1cblxuXHRcdFx0cmVzZXQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuXG5cdFx0XHRbLi4uaXRlbV0uZm9yRWFjaCggZWwgPT4gZWwuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScsIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1saXZlLXNlYXJjaCcpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModmFsdWUpID09PSBmYWxzZSApKTtcblxuXHRcdH1cblxuXHR9KTtcblxuXHQvLyBjbGlja1xuXG5cdGZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcblxuXHRcdGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcblxuXHRcdC8vIGxlZ2VuZCB0b2dnbGVcblxuXHRcdGlmICggdGFyZ2V0LmNsb3Nlc3QoJy5maWx0ZXJfX2xlZ2VuZCcpICkge1xuXG5cdFx0XHR0YXJnZXQuY2xvc2VzdCgnLmZpbHRlcl9fbGVnZW5kJykuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtb3BlbicpO1xuXG5cdFx0fVxuXG5cdFx0Ly8gbGV0dGVyXG5cblx0XHRpZiAoIHRhcmdldC5jbG9zZXN0KCcuanMtbGV0dGVyX19idG4nKSApIHtcblxuXHRcdFx0Y29uc3QgYm94ID0gdGFyZ2V0LmNsb3Nlc3QoJy5qcy1sZXR0ZXInKSxcblx0XHRcdFx0ICBzY3JvbGxMaXN0ID0gYm94LnF1ZXJ5U2VsZWN0b3IoJy5qcy1sZXR0ZXJfX3Njcm9sbCcpLFxuXHRcdFx0XHQgIGl0ZW0gPSBib3gucXVlcnlTZWxlY3RvckFsbCgnLmpzLWxldHRlcl9faXRlbScpLFxuXHRcdFx0XHQgIGxldHRlciA9IHRhcmdldC5jbG9zZXN0KCcuanMtbGV0dGVyX19idG4nKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKTtcblxuXHRcdFx0aWYgKCBsZXR0ZXIgPT09ICd0b3AnICkge1xuXG5cdFx0XHRcdHNjcm9sbFRvKHNjcm9sbExpc3QsIDApO1xuXG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXG5cdFx0XHR9XG5cblx0XHRcdFsuLi5pdGVtXS5ldmVyeSggZWwgPT4ge1xuXG5cdFx0XHRcdGlmICggbGV0dGVyID09PSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGV0dGVyJykgKSB7XG5cblx0XHRcdFx0XHRzY3JvbGxUbyhzY3JvbGxMaXN0LCBlbC5vZmZzZXRUb3ApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH0pO1xuXG5cdFx0fVxuXG5cdFx0Ly8gbGl2ZS1zZWFyY2hcblxuXHRcdGlmICggdGFyZ2V0LmNsb3Nlc3QoJy5qcy1saXZlLXNlYXJjaF9fcmVzZXQnKSApIHtcblxuXHRcdFx0Y29uc3QgbGl2ZVNlYXJjaCA9IHRhcmdldC5jbG9zZXN0KCcuanMtbGl2ZS1zZWFyY2gnKSxcblx0XHRcdFx0ICBpdGVtID0gbGl2ZVNlYXJjaC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtbGl2ZS1zZWFyY2hfX2l0ZW0nKSxcblx0XHRcdFx0ICBpbnB1dCA9IGxpdmVTZWFyY2gucXVlcnlTZWxlY3RvcignLmpzLWxpdmUtc2VhcmNoX19pbnB1dCcpO1xuXG5cdFx0XHRpbnB1dC52YWx1ZSA9ICcnO1xuXHRcdFx0dGFyZ2V0LmNsb3Nlc3QoJy5qcy1saXZlLXNlYXJjaF9fcmVzZXQnKS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG5cblx0XHRcdFsuLi5pdGVtXS5mb3JFYWNoKCBlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykgKTtcblxuXHRcdFx0aW5wdXQuZm9jdXMoKTtcblxuXHRcdH1cblxuXHRcdC8vIGZpbHRlciBjbG9zZVxuXG5cdFx0aWYgKCB0YXJnZXQuY2xvc2VzdCgnLmZpbHRlcl9fYnRuLWNsb3NlJykgKSB7XG5cblx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnaXMtZmlsdGVyLXNob3cnKTtcblxuXHRcdFx0d2luZG93LnNjcm9sbFRvKDAsd2luZG93U2Nyb2xsKTtcblxuXHRcdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4ge1xuXG5cdFx0XHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzY3JvbGwtYmVoYXZpb3Itb2ZmJyk7XG5cblx0XHRcdH0pO1xuXG5cdFx0fVxuXG5cdH0pO1xuXG4vLyBvcGVuIGZpbHRlclxuXG5cdG1vYmlsZU9wZW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblxuXHRcdHdpbmRvd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcblxuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzY3JvbGwtYmVoYXZpb3Itb2ZmJyk7XG5cblx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCAoKSA9PiB7XG5cblx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnaXMtZmlsdGVyLXNob3cnKTtcblx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLDApO1xuXG5cdFx0fSk7XG5cblx0fSk7XG5cbi8vIHNvcnRcblxuXHRjb25zdCBzb3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWZpbHRlci1jaGFuZ2UnKTtcblxuXHRpZiAoc29ydCkge1xuXG5cdFx0c29ydC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGV2ZW50ID0+IHtcblxuXHRcdFx0Y29uc29sZS5sb2coZXZlbnQudGFyZ2V0KTtcblxuXHRcdFx0aWYoIGZpbHRlci5lbGVtZW50c1tldmVudC50YXJnZXQubmFtZV0gKSB7XG5cblx0XHRcdFx0ZmlsdGVyLmVsZW1lbnRzW2V2ZW50LnRhcmdldC5uYW1lXS52YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblxuXHRcdFx0XHRmaWx0ZXIuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIikpO1xuXG5cdFx0XHR9XG5cblx0XHR9KTtcblxuXHR9XG5cbi8vICBmb290XG5cblx0Y29uc3QgZm9vdCA9IGZpbHRlci5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyX19mb290Jyk7XG5cblx0aWYgKGZvb3QpIHtcblxuXHRcdGZpbHRlci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcblxuXHRcdFx0Zm9vdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG5cblx0XHR9KTtcblxuXHRcdGZpbHRlci5hZGRFdmVudExpc3RlbmVyKFwicmVzZXRcIiwgKCkgPT4ge1xuXG5cdFx0XHRmb290LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcblxuXHRcdH0pO1xuXG5cdH1cblxuXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyJykpOyIsIi8vIENsaXBib2FyZEpTXG5cblx0KCBlbGVtcyA9PiB7XG5cblx0XHRpZiAoIGVsZW1zLmxlbmd0aCApIHtcblxuXHRcdFx0Wy4uLmVsZW1zXS5mb3JFYWNoKCBidG4gPT4ge1xuXG5cdFx0XHRcdGNvbnN0IGNsaXBib2FyZCA9IG5ldyBDbGlwYm9hcmRKUyhidG4pO1xuXG5cdFx0XHRcdGNsaXBib2FyZC5vbignc3VjY2VzcycsICgpPT4ge1xuXG5cdFx0XHRcdFx0YnRuLmNsYXNzTGlzdC5hZGQoJ2lzLWNsaXBib2FyZC1zdWNjZXNzJyk7XG5cblx0XHRcdFx0XHRzZXRUaW1lb3V0KCAoKT0+IHtcblxuXHRcdFx0XHRcdFx0YnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWNsaXBib2FyZC1zdWNjZXNzJyk7XG5cblx0XHRcdFx0XHR9LDMwMDApO1xuXG5cdFx0XHRcdH0pO1xuXG5cdFx0XHR9KTtcblxuXHRcdH1cblxuXHR9KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1jbGlwYm9hcmQtdGV4dF0nKSk7XG5cbi8vIGF1dG9zaXplXG5cblx0YXV0b3NpemUoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndGV4dGFyZWEuYXV0b3NpemUnKSk7XG5cbi8vIGZpbGVcblxuXG4oIGZpbGV1cGxvYWQgPT4ge1xuXG5cdGlmKGZpbGV1cGxvYWQubGVuZ3RoKXtcblxuXHRcdGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpbGV1cGxvYWQtdGVtcGxhdGUnKS5pbm5lckhUTUw7XG5cblx0XHRbLi4uZmlsZXVwbG9hZF0uZm9yRWFjaCggZmlsZSA9PiB7XG5cblx0XHRcdGNvbnN0IGlucHV0ID0gZmlsZS5xdWVyeVNlbGVjdG9yKCdbdHlwZT1cImZpbGVcIl0nKSxcblx0XHRcdFx0ICBidG4gPSBmaWxlLnF1ZXJ5U2VsZWN0b3IoJy5maWxldXBsb2FkX19idG4nKTtcblxuXHRcdFx0aW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBldmVudCA9PiB7XG5cblx0XHRcdFx0YnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcblxuXHRcdFx0XHRmaWxlLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgTXVzdGFjaGUucmVuZGVyKHRlbXBsYXRlLCB7IG5hbWUgOiBpbnB1dC52YWx1ZS5yZXBsYWNlKC8uKltcXC9cXFxcXS8sICcnKSB9KSk7XG4vKlxuXHRcdFx0XHRjb25zb2xlLmxvZygnU2VsZWN0ZWQgZmlsZTogJyArIGlucHV0LmZpbGVzLml0ZW0oMCkubmFtZSk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdTZWxlY3RlZCBmaWxlOiAnICsgaW5wdXQuZmlsZXMuaXRlbSgwKS5zaXplKTtcblx0XHRcdFx0Y29uc29sZS5sb2coJ1NlbGVjdGVkIGZpbGU6ICcgKyBpbnB1dC5maWxlcy5pdGVtKDApLnR5cGUpO1xuXG4qL1x0XHRcdH0pO1xuXG5cdFx0XHRmaWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuXG5cdFx0XHRcdGlmICggZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5maWxldXBsb2FkX19yZXNldCcpICkge1xuXG5cdFx0XHRcdFx0aW5wdXQudmFsdWUgPSAnJztcblx0XHRcdFx0XHRidG4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuXHRcdFx0XHRcdGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuZmlsZXVwbG9hZF9fYnRuJykucmVtb3ZlKCk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9KTtcblxuXHRcdH0pO1xuXG5cdH1cblxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpbGV1cGxvYWQnKSk7XG5cblxuXG4oIGZpbGV1cGxvYWQgPT4ge1xuXG5cdGlmKGZpbGV1cGxvYWQubGVuZ3RoKXtcblxuXHRcdGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RyYWctYW5kLWRyb3AtdGVtcGxhdGUnKS5pbm5lckhUTUw7XG5cblx0XHRbLi4uZmlsZXVwbG9hZF0uZm9yRWFjaCggZmlsZSA9PiB7XG5cblx0XHRcdGNvbnN0IGlucHV0ID0gZmlsZS5xdWVyeVNlbGVjdG9yKCdbdHlwZT1cImZpbGVcIl0nKSxcblx0XHRcdFx0ICBidG4gPSBmaWxlLnF1ZXJ5U2VsZWN0b3IoJy5kcmFnLWFuZC1kcm9wX19idG4nKTtcblxuXHRcdFx0aW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBldmVudCA9PiB7XG5cblx0XHRcdFx0YnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcblxuXHRcdFx0XHRmaWxlLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgTXVzdGFjaGUucmVuZGVyKHRlbXBsYXRlLCB7IG5hbWUgOiBpbnB1dC52YWx1ZS5yZXBsYWNlKC8uKltcXC9cXFxcXS8sICcnKSB9KSk7XG4vKlxuXHRcdFx0XHRjb25zb2xlLmxvZygnU2VsZWN0ZWQgZmlsZTogJyArIGlucHV0LmZpbGVzLml0ZW0oMCkubmFtZSk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdTZWxlY3RlZCBmaWxlOiAnICsgaW5wdXQuZmlsZXMuaXRlbSgwKS5zaXplKTtcblx0XHRcdFx0Y29uc29sZS5sb2coJ1NlbGVjdGVkIGZpbGU6ICcgKyBpbnB1dC5maWxlcy5pdGVtKDApLnR5cGUpO1xuXG4qL1x0XHRcdH0pO1xuXG5cdFx0XHRmaWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuXG5cdFx0XHRcdGlmICggZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5kcmFnLWFuZC1kcm9wX19yZXNldCcpICkge1xuXG5cdFx0XHRcdFx0aW5wdXQudmFsdWUgPSAnJztcblx0XHRcdFx0XHRidG4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuXHRcdFx0XHRcdGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuZHJhZy1hbmQtZHJvcF9fYnRuJykucmVtb3ZlKCk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9KTtcblxuXHRcdH0pO1xuXG5cdH1cblxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyYWctYW5kLWRyb3AnKSk7XG5cblxuKCBmaWxldXBsb2FkID0+IHtcblxuXHRpZihmaWxldXBsb2FkLmxlbmd0aCl7XG5cblx0XHRjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1maWxlLXRlbXBsYXRlJykuaW5uZXJIVE1MO1xuXG5cdFx0Wy4uLmZpbGV1cGxvYWRdLmZvckVhY2goIGZpbGUgPT4ge1xuXG5cdFx0XHRjb25zdCBpbnB1dCA9IGZpbGUucXVlcnlTZWxlY3RvcignLm1vZGFsLWZpbGVfX2lucHV0JyksXG5cdFx0XHRcdCAgZGVzYyA9IGZpbGUucXVlcnlTZWxlY3RvcignLm1vZGFsLWZpbGVfX2Rlc2MnKTtcblxuXHRcdFx0aW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBldmVudCA9PiB7XG5cblx0XHRcdFx0bGV0IHZhbHVlID0gJyc7XG5cblx0XHRcdFx0Wy4uLmlucHV0LmZpbGVzXS5mb3JFYWNoKCBmaWxlID0+IHtcblxuXHRcdFx0XHRcdGlmICggdmFsdWUubGVuZ3RoICkge1xuXG5cdFx0XHRcdFx0XHR2YWx1ZSArPSAnLCAnO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0bGV0IHNpemUgPSAoZmlsZS5zaXplIC8gMTAyNCAvIDEwMjQpLnRvRml4ZWQoMik7XG5cblx0XHRcdFx0XHR2YWx1ZSArPSBmaWxlLm5hbWUgKyAnICgnICsgc2l6ZSArICfQnNCxKSc7XG5cblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0ZmlsZS5xdWVyeVNlbGVjdG9yKCcuYnRuJykucmVtb3ZlKCk7XG5cblx0XHRcdFx0aW5wdXQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmVuZCcsIE11c3RhY2hlLnJlbmRlcih0ZW1wbGF0ZSkpO1xuXG5cdFx0XHRcdGRlc2MudGV4dENvbnRlbnQgPSB2YWx1ZTtcblxuXHRcdFx0fSk7XG5cblx0XHR9KTtcblxuXHR9XG5cbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbC1maWxlJykpOyIsIlxuKCBoZWFkZXIgPT4ge1xuXG5cdGlmIChoZWFkZXIpIHtcblxuXHRcdGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1jYXRhbG9nJyk7XG5cblx0XHRsZXQgcmVzaXplVGltZW91dCA9IG51bGw7XG5cblx0XHRpZiAoIHdpbmRvdy5pbm5lcldpZHRoID4gMTI0OSApIHtcblxuXHRcdFx0aGVhZGVyLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWZpeGVkJywgd2luZG93LnBhZ2VZT2Zmc2V0ID4gMzYpOyAvLyBtZW51IHRvcFxuXHRcdFx0bWVudS5jbGFzc0xpc3QudG9nZ2xlKCdpcy10cmFuc3BhcmVudCcsIHdpbmRvdy5wYWdlWU9mZnNldCA+IDg2KTsgLy8gNjAgKyA1MyAtIDM3XG5cblx0XHR9XG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XG5cblx0XHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHtcblxuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0cmVzaXplVGltZW91dCA9PT0gbnVsbCAmJlxuXHRcdFx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbC1zaG93JykgPT09IGZhbHNlICYmXG5cdFx0XHRcdFx0d2luZG93LmlubmVyV2lkdGggPiAxMjQ5XG5cdFx0XHRcdCkge1xuXG5cdFx0XHRcdFx0cmVzaXplVGltZW91dCA9IHNldFRpbWVvdXQoICgpID0+IHtcblxuXHRcdFx0XHRcdFx0cmVzaXplVGltZW91dCA9IG51bGw7XG5cblx0XHRcdFx0XHRcdGhlYWRlci5jbGFzc0xpc3QudG9nZ2xlKCdpcy1maXhlZCcsIHdpbmRvdy5wYWdlWU9mZnNldCA+IDM2KTtcblx0XHRcdFx0XHRcdG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtdHJhbnNwYXJlbnQnLCB3aW5kb3cucGFnZVlPZmZzZXQgPiA4Nik7XG5cblx0XHRcdFx0XHR9LCAxMDApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fSk7XG5cblx0XHR9KTtcblxuXHRcdC8vIHNlYXJjaFxuXG5cdFx0Y29uc3QgaGVhZGVyU2VhcmNoID0gaGVhZGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXItc2VhcmNoX19pbnB1dCcpO1xuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XG5cblx0XHRcdGNvbnN0IGJ0bk9wZW4gPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLmhlYWRlci1zZWFyY2gtc2hvdycpO1xuXG5cdFx0XHRpZiAoIGJ0bk9wZW4gKSB7XG5cblx0XHRcdFx0aGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2lzLXNlYXJjaCcpO1xuXG5cdFx0XHRcdHNldFRpbWVvdXQoICgpID0+IFsuLi5oZWFkZXJTZWFyY2hdLmZvckVhY2goIGlucHV0ID0+IGlucHV0LmZvY3VzKCkgKSwgMTAwKTtcblxuXHRcdFx0fVxuLypcblx0XHRcdGlmICggZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5oZWFkZXInKSA9PT0gbnVsbCApIHtcblxuXHRcdFx0XHRoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnaXMtc2VhcmNoJyk7XG5cdFx0XHRcdFsuLi5oZWFkZXJTZWFyY2hdLmZvckVhY2goIGlucHV0ID0+IGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWZvY3VzJykgKTtcblxuXHRcdFx0fVxuXG4qL1x0XHR9KTtcblxuXHR9XG5cbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKSk7IiwiKCBlbGVtcyA9PiB7XG5cblx0aWYoIWVsZW1zLmxlbmd0aCkge1xuXG5cdFx0cmV0dXJuO1xuXG5cdH1cblxuXHRjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblx0c2NyaXB0LnNyYyA9ICcvanMvaW5wdXRtYXNrLm1pbi5qcyc7XG5cdHNjcmlwdC5vbmxvYWQgPSAoKSA9PiB7XG5cblx0XHRbLi4uZWxlbXNdLmZvckVhY2goIGVsID0+IHtcblxuXHRcdFx0bGV0IG1hc2tJbnB1dDtcblxuXHRcdFx0aWYoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnB1dG1hc2stLXBob25lJykpIHtcblxuXHRcdFx0XHRtYXNrSW5wdXQgPSBuZXcgSW5wdXRtYXNrKHtcblx0XHRcdFx0XHRtYXNrOiAnKzcgKCA5OTkgKSA5OTkgOTkgOTknLFxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyOiAnLSdcblx0XHRcdFx0fSk7XG5cblx0XHRcdH1cblxuXHRcdFx0bWFza0lucHV0Lm1hc2soZWwpO1xuXG5cdFx0fSk7XG5cblx0fTtcblxuXHRzZXRUaW1lb3V0KCAoKSA9PiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCksIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmYXN0TG9hZFNjcmlwdCcpID8gMCA6IDEwMDAwKTtcblxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmlucHV0bWFzaycpKTsiLCIoIGl0ZW1zID0+IHtcblxuXHRpZighaXRlbXMubGVuZ3RoKSB7XG5cblx0XHRyZXR1cm47XG5cblx0fVxuXG5cdFsuLi5pdGVtc10uZm9yRWFjaCggaXRlbSA9PiB7XG5cblx0XHRjb25zdCBidG4gPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5vcmRlcmxpc3RfX3RvZ2dsZSAuYnV0dG9uJyk7XG5cblx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cblx0XHRcdGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtb3BlbicpO1xuXG5cdFx0fSk7XG5cblx0fSk7XG5cbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vcmRlcmxpc3QnKSk7IiwiKCBtZW51ID0+IHtcblxuXHRpZihtZW51KSB7XG5cblx0XHRsZXQgc2Nyb2xsTGV2ZWwyID0gbnVsbDtcblxuXHRcdGNvbnN0IGJhY2sgPSBtZW51LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWNhdGFsb2dfX2JhY2snKSxcblx0XHRcdCAgYm9keSA9IG1lbnUucXVlcnlTZWxlY3RvcignLm1lbnUtY2F0YWxvZ19fYm9keScpO1xuXG5cdFx0Ly8g0LjQutC+0L3QutCwIGxldmVsMiArXG5cblx0XHRjb25zdCBsaW5rQnRuID0gbWVudS5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1jYXRhbG9nX19saW5rLmlzLWJ0bicpLFxuXHRcdFx0ICBpY29QbHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJzdmdcIik7XG5cblx0XHRpY29QbHVzLnNldEF0dHJpYnV0ZU5TKG51bGwsIFwidmlld0JveFwiLCBcIjAgMCAyNCAyNFwiKTtcblx0XHRpY29QbHVzLnNldEF0dHJpYnV0ZU5TKG51bGwsIFwid2lkdGhcIiwgMjQpO1xuXHRcdGljb1BsdXMuc2V0QXR0cmlidXRlTlMobnVsbCwgXCJoZWlnaHRcIiwgMjQpO1xuXHRcdGljb1BsdXMuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2J1dHRvbicpO1xuXG5cdFx0aWNvUGx1cy5pbm5lckhUTUwgPSAnPHJlY3QgeD1cIjExXCIgeT1cIjZcIiB3aWR0aD1cIjJcIiBoZWlnaHQ9XCIxMlwiLz48cmVjdCB4PVwiNlwiIHk9XCIxMVwiIHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCIyXCIvPic7XG5cblx0XHQvLyDQuNC60L7QvdC60LAgcmlnaHQgbGV2ZWwxINC4IGxldmVsMlxuXHRcdGNvbnN0IGxldmVsXzEgPSBtZW51LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWNhdGFsb2dfX2xpbmstLWFycm93LCAubWVudS1jYXRhbG9nX19saW5rLS1vbmx5LW1vYmlsZScpLFxuXHRcdFx0ICBpY29SaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwic3ZnXCIpO1xuXG5cdFx0aWNvUmlnaHQuc2V0QXR0cmlidXRlTlMobnVsbCwgXCJ2aWV3Qm94XCIsIFwiMCAwIDI0IDI0XCIpO1xuXHRcdGljb1JpZ2h0LnNldEF0dHJpYnV0ZU5TKG51bGwsIFwid2lkdGhcIiwgMzIpO1xuXHRcdGljb1JpZ2h0LnNldEF0dHJpYnV0ZU5TKG51bGwsIFwiaGVpZ2h0XCIsIDMyKTtcblx0XHRpY29SaWdodC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnYnV0dG9uJyk7XG5cblx0XHRpY29SaWdodC5pbm5lckhUTUwgPSAnPHVzZSB4bGluazpocmVmPVwiI3N2Zy1jaGV2cm9uLXJpZ2h0XCIvPic7XG5cblx0XHQvLyByZXNpemVcblxuXHRcdGNvbnN0IHJlc2l6ZSA9ICgpID0+IHtcblxuXHRcdFx0aWYgKCB3aW5kb3cuaW5uZXJXaWR0aCA8IDEyNTAgKSB7XG5cblx0XHRcdFx0Wy4uLmxldmVsXzFdLmZvckVhY2goIGJ0biA9PiB7XG5cblx0XHRcdFx0XHRpZiAoIGJ0bi5xdWVyeVNlbGVjdG9yKCdzdmcnKSA9PT0gbnVsbCApIHtcblxuXHRcdFx0XHRcdFx0YnRuLmFwcGVuZChpY29SaWdodC5jbG9uZU5vZGUodHJ1ZSkpO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFsuLi5saW5rQnRuXS5mb3JFYWNoKCBidG4gPT4ge1xuXG5cdFx0XHRcdFx0aWYgKCBidG4ucXVlcnlTZWxlY3Rvcignc3ZnJykgKSB7XG5cblx0XHRcdFx0XHRcdGJ0bi5xdWVyeVNlbGVjdG9yKCdzdmcnKS5yZW1vdmUoKTtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGJ0bi5hcHBlbmQoaWNvUmlnaHQuY2xvbmVOb2RlKHRydWUpKTtcblxuXHRcdFx0XHR9KTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRiYWNrLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcblx0XHRcdFx0Ym9keS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG5cblx0XHRcdFx0Wy4uLmxldmVsXzFdLmZvckVhY2goIGJ0biA9PiB7XG5cblx0XHRcdFx0XHRpZiAoIGJ0bi5xdWVyeVNlbGVjdG9yKCdzdmcnKSApIHtcblxuXHRcdFx0XHRcdFx0YnRuLnF1ZXJ5U2VsZWN0b3IoJ3N2ZycpLnJlbW92ZSgpO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFsuLi5saW5rQnRuXS5mb3JFYWNoKCBidG4gPT4ge1xuXG5cdFx0XHRcdFx0aWYgKCBidG4ucXVlcnlTZWxlY3Rvcignc3ZnJykgKSB7XG5cblx0XHRcdFx0XHRcdGJ0bi5xdWVyeVNlbGVjdG9yKCdzdmcnKS5yZW1vdmUoKTtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGJ0bi5hcHBlbmQoaWNvUGx1cy5jbG9uZU5vZGUodHJ1ZSkpO1xuXG5cdFx0XHRcdH0pO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRyZXNpemUoKTtcblxuXHRcdGxldCByZXNpemVUaW1lb3V0ID0gbnVsbCxcblx0XHRcdHdpbmRvd1dpZHRoT0xkID0gd2luZG93LmlubmVyV2lkdGg7XG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG5cblx0XHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHtcblxuXHRcdFx0XHRpZiAocmVzaXplVGltZW91dCA9PT0gbnVsbCkge1xuXG5cdFx0XHRcdFx0cmVzaXplVGltZW91dCA9IHNldFRpbWVvdXQoICgpID0+IHtcblxuXHRcdFx0XHRcdFx0cmVzaXplVGltZW91dCA9IG51bGw7XG5cblx0XHRcdFx0XHRcdGlmKHdpbmRvd1dpZHRoT0xkICE9PSB3aW5kb3cuaW5uZXJXaWR0aCkge1xuXG5cdFx0XHRcdFx0XHRcdHJlc2l6ZSgpO1xuXG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR9LCAxMDApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fSk7XG5cblx0XHR9KTtcblxuXHRcdC8vIGVuZCByZXNpemVcblxuXG5cdFx0Ly8g0LrQu9C40Log0L/QviBsZXZlbDIgPT4g0YDQsNGB0LrRgNGL0YLQuNC1IGxldmVsM1xuXG5cdFx0Wy4uLmxpbmtCdG5dLmZvckVhY2goIGJ0biA9PiB7XG5cblx0XHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcblxuXHRcdFx0XHRpZiAoIGV2ZW50LnRhcmdldC5jbG9zZXN0KCdbcm9sZT1cImJ1dHRvblwiXScpICkge1xuXG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0XHRcdGJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdpcy1vcGVuJyk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9KTtcblxuXHRcdH0pO1xuXG5cdFx0Ly8gbW9iaWxlXG5cblx0XHQvLyDQutC70LjQuiDQv9C+IGxldmVsMiA9PiDRgNCw0YHQutGA0YvRgtC40LUgbGV2ZWwzXG5cblx0XHRbLi4ubGV2ZWxfMV0uZm9yRWFjaCggYnRuID0+IHtcblxuXHRcdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuXG5cdFx0XHRcdGlmICggd2luZG93LmlubmVyV2lkdGggPCAxMjUwICYmIGV2ZW50LnRhcmdldC5jbG9zZXN0KCdbcm9sZT1cImJ1dHRvblwiXScpICkge1xuXG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0XHRcdHNjcm9sbExldmVsMiA9IHdpbmRvdy5wYWdlWU9mZnNldDtcblxuXHRcdFx0XHRcdGJhY2suaW5uZXJIVE1MID0gYnRuLmlubmVySFRNTDtcblx0XHRcdFx0XHRib2R5LmlubmVySFRNTCA9IGJ0bi5uZXh0RWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MO1xuXG5cdFx0XHRcdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4ge1xuXG5cdFx0XHRcdFx0XHRiYWNrLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcblx0XHRcdFx0XHRcdGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuXG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9KTtcblxuXHRcdH0pO1xuXG5cdFx0Ly8gYmFja1xuXG5cdFx0YmFjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuXHRcdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4ge1xuXG5cdFx0XHRcdGJhY2suY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuXHRcdFx0XHRib2R5LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcblxuXHRcdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCxzY3JvbGxMZXZlbDIpO1xuXG5cdFx0XHR9KTtcblxuXHRcdH0pO1xuXG5cdFx0Ly8gYm9keVxuXG5cdFx0Ym9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcblxuXHRcdFx0Y29uc3QgYnRuID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5pcy1idG4nKTtcblxuXHRcdFx0aWYgKCBidG4gJiYgZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ1tyb2xlPVwiYnV0dG9uXCJdJykgKSB7XG5cblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0XHRidG4uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtb3BlbicpO1xuXG5cdFx0XHR9XG5cblx0XHR9KTtcblxuXHR9XG5cbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWNhdGFsb2cnKSk7XG5cbi8vIHRvb2dsZVxuKCBtZW51ID0+IHtcblxuXHQvLyBidG4gdG9nZ2xlXG5cblx0bGV0IHdpbmRvd1Njcm9sbCA9IG51bGw7XG5cblx0KCBidG5zID0+IHtcblxuXHRcdFsuLi5idG5zXS5mb3JFYWNoKCBidG4gPT4ge1xuXG5cdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cblx0XHRcdFx0d2luZG93U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuXG5cdFx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbWVudS1zaG93Jyk7XG5cdFx0XHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzY3JvbGwtYmVoYXZpb3Itb2ZmJyk7XG5cdFx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLDApO1xuXG5cdFx0XHR9KTtcblxuXHRcdH0pO1xuXG5cdH0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tbWVudS1vcGVuJykpO1xuXG5cdCggYnRucyA9PiB7XG5cblx0XHRbLi4uYnRuc10uZm9yRWFjaCggYnRuID0+IHtcblxuXHRcdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG5cdFx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1zaG93Jyk7XG5cdFx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLHdpbmRvd1Njcm9sbCk7XG5cblx0XHRcdFx0c2V0VGltZW91dCggKCkgPT4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbC1iZWhhdmlvci1vZmYnKSApO1xuXG5cdFx0XHR9KTtcblxuXHRcdH0pO1xuXG5cdH0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tbWVudS1jbG9zZScpKTtcblxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtY2F0YWxvZycpKTtcblxuLy8gcGFnZS1iYXJcbiggYnRuID0+IHtcblxuXHRpZiAoIGJ0biApIHtcblxuXHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuXHRcdFx0YnRuLmNsYXNzTGlzdC50b2dnbGUoJ2lzLW9wZW4nKTtcblxuXHRcdH0pO1xuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XG5cblx0XHRcdGlmICggZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5wYWdlLWJhcl9fbWVudSwgLmxrLW1lbnUnKSA9PT0gbnVsbCApIHtcblxuXHRcdFx0XHRidG4uY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpO1xuXG5cdFx0XHR9XG5cblx0XHR9KTtcblxuXHR9XG5cbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLWJhcl9fbWVudS1idG4sIC5say1tZW51X190b2dnbGUtYnRuJykpOyIsIiggbW9kYWwgPT4ge1xuXG5cdGlmKCFtb2RhbCkge1xuXG5cdFx0cmV0dXJuO1xuXG5cdH1cblxuXHRjb25zdCBpdGVtcyA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbF9faXRlbScpLFxuXHRcdCAgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJyksXG5cdFx0ICBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtY2F0YWxvZycpLFxuXHRcdCAgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpLFxuXHRcdCAgdGl0bGVEZWZhdWx0ID0ge307XG5cblx0bGV0IGFjdGl2ZU1vZGFsID0gbnVsbCxcblx0XHRtZW51VG9wID0gbnVsbCxcblx0XHRoZWFkZXJUb3AgPSBudWxsLFxuXHRcdHdpbmRvd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcblxuXHRtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdoaWRlJywgKCkgPT4ge1xuXG5cdFx0YWN0aXZlTW9kYWwgJiYgYWN0aXZlTW9kYWwuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJtb2RhbENsb3NlXCIpKTtcblxuXHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtc2hvdycpO1xuXHRcdHdyYXBwZXIuc3R5bGUudG9wID0gMDtcblx0XHR3aW5kb3cuc2Nyb2xsVG8oMCx3aW5kb3dTY3JvbGwpO1xuXHRcdGFjdGl2ZU1vZGFsID0gZmFsc2U7XG5cblx0XHRtZW51LnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcblx0XHRoZWFkZXIucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuXG5cdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4ge1xuXG5cdFx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsLWJlaGF2aW9yLW9mZicpO1xuXG5cdFx0fSk7XG5cblx0fSk7XG5cblx0bW9kYWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XG5cblx0XHRpZihldmVudC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcblxuXHRcdFx0bW9kYWwuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJoaWRlXCIpKTtcblxuXHRcdH1cblxuXHR9KTtcblxuXHRjb25zdCBtb2RhbFNob3cgPSAoc2VsZWN0b3IsdGl0bGUsaWQpID0+IHtcblxuXHRcdGlmKCFhY3RpdmVNb2RhbCl7XG5cblx0XHRcdHdpbmRvd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcblxuXHRcdFx0aWYgKCBoZWFkZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1maXhlZCcpICkge1xuXG5cdFx0XHRcdG1lbnVUb3AgPSBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKG1lbnUpLnRvcCksXG5cdFx0XHRcdGhlYWRlclRvcCA9IHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUoaGVhZGVyKS50b3ApO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRhY3RpdmVNb2RhbCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9faXRlbS0tJyArIHNlbGVjdG9yKTtcblxuXHRcdGNvbnN0IGF1dG9mb2N1cyA9IGFjdGl2ZU1vZGFsLmNsYXNzTGlzdC5jb250YWlucygnaXMtYXV0b2ZvY3VzJyk7XG5cblx0XHRpZiAoIGFjdGl2ZU1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fdGl0bGUnKSApIHtcblxuXHRcdFx0aWYgKCB0aXRsZURlZmF1bHRbc2VsZWN0b3JdID09PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0dGl0bGVEZWZhdWx0W3NlbGVjdG9yXSA9IGFjdGl2ZU1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fdGl0bGUnKS50ZXh0Q29udGVudDtcblxuXHRcdFx0fVxuXG5cdFx0XHRhY3RpdmVNb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX3RpdGxlJykudGV4dENvbnRlbnQgPSB0aXRsZSA/IHRpdGxlIDogdGl0bGVEZWZhdWx0W3NlbGVjdG9yXTtcblxuXHRcdFx0aWYgKCBhY3RpdmVNb2RhbC5lbGVtZW50cy5zdWJqZWN0ICkge1xuXG5cdFx0XHRcdGFjdGl2ZU1vZGFsLmVsZW1lbnRzLnN1YmplY3QudmFsdWUgPSB0aXRsZSA/IHRpdGxlIDogdGl0bGVEZWZhdWx0W3NlbGVjdG9yXTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0aWYgKCBhY3RpdmVNb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoJ2Zvcm0nKSAmJiBhY3RpdmVNb2RhbC5lbGVtZW50cy5pZCApIHtcblxuXHRcdFx0YWN0aXZlTW9kYWwuZWxlbWVudHMuaWQudmFsdWUgPSBpZDtcblxuXHRcdH1cblxuXHRcdFsuLi5pdGVtc10uZm9yRWFjaCggZWwgPT4gZWwuY2xhc3NMaXN0LnRvZ2dsZSgndmlzdWFsbHloaWRkZW4nLCBlbCAhPT0gYWN0aXZlTW9kYWwpICk7XG5cblx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsLWJlaGF2aW9yLW9mZicpO1xuXG5cdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4ge1xuXG5cdFx0XHR3cmFwcGVyLnN0eWxlLnRvcCA9IC13aW5kb3dTY3JvbGwgKyAncHgnO1xuXG5cdFx0XHRpZiAoIGhlYWRlci5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWZpeGVkJykgKSB7XG5cblx0XHRcdFx0bWVudS5zdHlsZS50b3AgPSB3aW5kb3dTY3JvbGwgKyBtZW51VG9wICsgJ3B4Jztcblx0XHRcdFx0aGVhZGVyLnN0eWxlLnRvcCA9IHdpbmRvd1Njcm9sbCArIGhlYWRlclRvcCArICdweCc7XG5cblx0XHRcdH1cblxuXHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdtb2RhbC1zaG93Jyk7XG5cblx0XHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHtcblxuXHRcdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwwKTtcblxuXHRcdFx0XHRhY3RpdmVNb2RhbC5mb2N1cygpO1xuXG5cdFx0XHRcdGlmICggYXV0b2ZvY3VzICkge1xuXG5cdFx0XHRcdFx0YWN0aXZlTW9kYWwucXVlcnlTZWxlY3RvcignLmlucHV0JykuZm9jdXMoKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH0pO1xuXG5cdFx0fSk7XG5cblx0fTtcblxuXHRtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcblxuXHRcdGlmKCBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbCcpIHx8IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcubW9kYWxfX2Nsb3NlJykpe1xuXG5cdFx0XHRtb2RhbC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImhpZGVcIikpO1xuXG5cdFx0fVxuXG5cdH0pO1xuXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuXG5cdFx0bGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcblxuXHRcdHdoaWxlICh0YXJnZXQgIT09IGRvY3VtZW50ICYmIHRhcmdldCAhPT0gbnVsbCkge1xuXG5cdFx0XHRpZiAodGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnZGF0YS1tb2RhbCcpKSB7XG5cblx0XHRcdFx0bW9kYWxTaG93KFxuXHRcdFx0XHRcdHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbW9kYWwnKSxcblx0XHRcdFx0XHR0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXRpdGxlJyksXG5cdFx0XHRcdFx0dGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpXG5cdFx0XHRcdCk7XG5cblx0XHRcdH1cblxuXHRcdFx0dGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGU7XG5cblx0XHR9XG5cblx0fSk7XG5cblx0bW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignbW9kYWxTaG93JywgZXZlbnQgPT4gbW9kYWxTaG93KGV2ZW50LmRldGFpbC5zZWxlY3RvcikpO1xuXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKSk7IiwiIiwiKCBmb3JtID0+IHtcblxuXHRpZiggZm9ybSApIHtcblxuXHRcdGNvbnN0IHN0ZXBzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcub3JkZXJfX3N0ZXAnKSxcblx0XHRcdCAgbmF2TGlua3MgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5vcmRlcl9fc3RlcHMgYScpO1xuXG5cdFx0Ly8gaGFzaFxuXG5cdFx0Y29uc3Qgc2V0U3RhZ2UgPSAoKT0+IHtcblxuXHRcdFx0Y29uc3QgaGFzaCA9IGxvY2F0aW9uLmhhc2g7XG5cblx0XHRcdFsuLi5zdGVwc10uZm9yRWFjaCggc3RlcCA9PiB7XG5cblx0XHRcdFx0c3RlcC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJywgc3RlcC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaGFzaCcpICE9PSBoYXNoLnNsaWNlKDEpICk7XG5cblx0XHRcdH0pO1xuXG5cdFx0XHRbLi4ubmF2TGlua3NdLmZvckVhY2goIGxpbmsgPT4ge1xuXG5cdFx0XHRcdGxpbmsuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJywgbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSA9PT0gaGFzaCApO1xuXG5cdFx0XHR9KTtcblxuXG5cdFx0XHRpZiggZm9ybS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJykuY2xpZW50SGVpZ2h0ICkge1xuXG5cdFx0XHRcdGZvcm0uc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgc2V0U3RhZ2UpO1xuXG5cdFx0aWYgKCBsb2NhdGlvbi5oYXNoICkge1xuXG5cdFx0XHRzZXRUaW1lb3V0KCBzZXRTdGFnZSApO1xuXG5cdFx0fVxuXG5cdH07XG5cbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcmRlcicpKTsiLCJcbiggYnRuUGFnZVVwID0+IHtcblxuXHRpZiAoYnRuUGFnZVVwKSB7XG5cblx0XHRidG5QYWdlVXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBkb2N1bWVudC5ib2R5LnNjcm9sbEludG9WaWV3KHtiZWhhdmlvcjogXCJzbW9vdGhcIn0pKTtcblxuXHR9XG5cbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLXVwJykpOyIsIiggZWxlbWVudHMgPT4ge1xuXG5cdGlmKGVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuXG5cdFx0cmV0dXJuO1xuXG5cdH1cblxuXHRbLi4uZWxlbWVudHNdLmZvckVhY2goIGRyb3Bkb3duID0+IHtcblxuXHRcdGNvbnN0IG1hc2sgPSBkcm9wZG93bi5xdWVyeVNlbGVjdG9yKCcucGhvbmUtY291bnRyeV9fbWFzaycpLFxuXHRcdFx0ICB2YWx1ZSA9IGRyb3Bkb3duLnF1ZXJ5U2VsZWN0b3IoJy5waG9uZS1jb3VudHJ5X192YWx1ZScpLFxuXHRcdFx0ICByYWRpbyA9IGRyb3Bkb3duLnF1ZXJ5U2VsZWN0b3JBbGwoJy5waG9uZS1jb3VudHJ5X19yYWRpbycpO1xuXG5cdFx0Wy4uLnJhZGlvXS5mb3JFYWNoKCBidG4gPT4ge1xuXG5cdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG5cblx0XHRcdFx0bGV0IHBsYWNlaG9sZGVyID0gYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1tYXNrJyk7XG5cdFx0XHRcdHBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXIucmVwbGFjZSgvXFxcXDkvZywgJyQnKTtcblx0XHRcdFx0cGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlci5yZXBsYWNlKC85L2csICctJyk7XG5cdFx0XHRcdHBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXIucmVwbGFjZSgvXFwkL2csICc5Jyk7XG5cblx0XHRcdFx0bWFzay5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgcGxhY2Vob2xkZXIpO1xuXHRcdFx0XHRtYXNrLnZhbHVlID0gJyc7XG5cblx0XHRcdFx0SW5wdXRtYXNrKGJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWFzaycpKS5tYXNrKG1hc2spO1xuXG5cdFx0XHRcdGxldCBtYXNrSW5wdXQ7XG5cblx0XHRcdFx0bWFza0lucHV0ID0gbmV3IElucHV0bWFzayh7XG5cdFx0XHRcdFx0bWFzazogYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1tYXNrJyksXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI6ICctJ1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRtYXNrSW5wdXQubWFzayhtYXNrKTtcblxuXHRcdFx0XHRtYXNrLmZvY3VzKCk7XG5cblx0XHRcdFx0dmFsdWUudGV4dENvbnRlbnQgPSBidG4udmFsdWU7XG5cblx0XHRcdH0pO1xuXG5cdFx0fSk7XG5cblx0fSk7XG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XG5cblx0XHRjb25zdCBpc0Ryb3Bkb3duID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5waG9uZS1jb3VudHJ5X19idG4nKSA/IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcucGhvbmUtY291bnRyeScpIDogbnVsbDtcblxuXHRcdFsuLi5lbGVtZW50c10uZm9yRWFjaCggZHJvcGRvd24gPT4ge1xuXG5cdFx0XHRkcm9wZG93bi5jbGFzc0xpc3QudG9nZ2xlKCdpcy1vcGVuJywgZHJvcGRvd24gPT09IGlzRHJvcGRvd24gJiYgaXNEcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLW9wZW4nKSA9PT0gZmFsc2UgKTtcblxuXHRcdH0pO1xuXG5cdH0pO1xuXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGhvbmUtY291bnRyeScpKTsiLCIoIGl0ZW1zID0+IHtcblxuXHRpZiAoIGl0ZW1zLmxlbmd0aCApIHtcblxuXHRcdHBpY2ttZXVwLmRlZmF1bHRzLmxvY2FsZXNbJ3J1J10gPSB7XG5cdFx0XHRkYXlzOiBbJ9CS0L7RgdC60YDQtdGB0LXQvdGM0LUnLCAn0J/QvtC90LXQtNC10LvRjNC90LjQuicsICfQktGC0L7RgNC90LjQuicsICfQodGA0LXQtNCwJywgJ9Cn0LXRgtCy0LXRgNCzJywgJ9Cf0Y/RgtC90LjRhtCwJywgJ9Ch0YPQsdCx0L7RgtCwJ10sXG5cdFx0XHRkYXlzU2hvcnQ6IFsn0JLRgScsICfQn9C9JywgJ9CS0YInLCAn0KHRgCcsICfQp9GCJywgJ9Cf0YInLCAn0KHQsSddLFxuXHRcdFx0ZGF5c01pbjogWyfQktGBJywgJ9Cf0L0nLCAn0JLRgicsICfQodGAJywgJ9Cn0YInLCAn0J/RgicsICfQodCxJ10sXG5cdFx0XHRtb250aHM6IFsn0K/QvdCy0LDRgNGMJywgJ9Ck0LXQstGA0LDQu9GMJywgJ9Cc0LDRgNGCJywgJ9CQ0L/RgNC10LvRjCcsICfQnNCw0LknLCAn0JjRjtC90YwnLCAn0JjRjtC70YwnLCAn0JDQstCz0YPRgdGCJywgJ9Ch0LXQvdGC0Y/QsdGA0YwnLCAn0J7QutGC0Y/QsdGA0YwnLCAn0J3QvtGP0LHRgNGMJywgJ9CU0LXQutCw0LHRgNGMJ10sXG5cdFx0XHRtb250aHNTaG9ydDogWyfQr9C90LInLCAn0KTQtdCyJywgJ9Cc0LDRgCcsICfQkNC/0YAnLCAn0JzQsNC5JywgJ9CY0Y7QvScsICfQmNGO0LsnLCAn0JDQstCzJywgJ9Ch0LXQvScsICfQntC60YInLCAn0J3QvtGPJywgJ9CU0LXQuiddXG5cdFx0fTtcblxuLy9cdFx0bG9jYWxlXG5cblx0XHRbLi4uaXRlbXNdLmZvckVhY2goIGNhbGVuZGFyID0+IHtcblxuXHRcdFx0Y29uc3QgaW5wdXQgPSBjYWxlbmRhci5xdWVyeVNlbGVjdG9yKCcuY2FsZW5kYXJfX2lucHV0JyksXG5cdFx0XHRcdCAgbWluRGF0ZSA9IG5ldyBEYXRlKGlucHV0LmdldEF0dHJpYnV0ZSgnbWluJykpLFxuXHRcdFx0XHQgIG1heERhdGUgPSBuZXcgRGF0ZShpbnB1dC5nZXRBdHRyaWJ1dGUoJ21heCcpKTtcblxuXHRcdFx0Y29uc3QgcGlja21ldXBDYWxlbmRhciA9IHBpY2ttZXVwKGNhbGVuZGFyLCB7XG5cblx0XHRcdFx0ZmxhdDogdHJ1ZSxcblx0XHRcdFx0bWluOiBtaW5EYXRlLFxuXHRcdFx0XHRtYXg6IG1heERhdGUsXG5cdFx0XHRcdHNlbGVjdF9tb250aDogZmFsc2UsXG5cdFx0XHRcdHNlbGVjdF95ZWFyOiBmYWxzZSxcblx0XHRcdFx0dGl0bGVfZm9ybWF0OiAnQicsXG5cdFx0XHRcdGZvcm1hdDogJ1ktbS1kJyxcblx0XHRcdFx0bG9jYWxlOiAncnUnLFxuXHRcdFx0XHRwcmV2OiAnPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHVzZSB4bGluazpocmVmPVwiI3N2Zy1hcnJvdy1jaGV2cm9uLWxlZnRcIi8+PC9zdmc+Jyxcblx0XHRcdFx0bmV4dDogJzxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx1c2UgeGxpbms6aHJlZj1cIiNzdmctYXJyb3ctY2hldnJvbi1yaWdodFwiLz48L3N2Zz4nXG5cblx0XHRcdH0pO1xuXG5cdFx0XHRjYWxlbmRhci5hZGRFdmVudExpc3RlbmVyKCdwaWNrbWV1cC1jaGFuZ2UnLCAoKSA9PiB7XG5cblx0XHRcdFx0aW5wdXQudmFsdWUgPSBwaWNrbWV1cENhbGVuZGFyLmdldF9kYXRlKHRydWUpO1xuXG5cdFx0XHR9KTtcblxuXHRcdH0pO1xuXG5cdH1cblxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhbGVuZGFyJykpOyIsIiggZm9ybSA9PiB7XG5cblx0aWYgKCBmb3JtICkge1xuXG5cdFx0bGV0IG1vZGFsRm9ybVRhcmdldCA9IG51bGw7XG5cblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcblxuXHRcdFx0Ly8g0LLRi9Cx0L7RgCDRhtCy0LXRgtCwINCyINGC0L7QstCw0YDQtSDQuNC70Lgg0LIg0LrQsNGA0YLQvtGH0LrQtVxuXG5cdFx0XHRjb25zdCBwcm9kdWN0Q29sb3IgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLmpzLW1vZGFsLWNvbG9yJyk7XG5cblx0XHRcdGlmIChwcm9kdWN0Q29sb3IpIHtcblxuXHRcdFx0XHRjb25zdCBjYXJkUHJvZHVjdCA9IHByb2R1Y3RDb2xvci5jbG9zZXN0KCcucHJvZHVjdCcpIHx8IHByb2R1Y3RDb2xvci5jbG9zZXN0KCcucHJldmlldy1jYXJkJyksXG5cdFx0XHRcdFx0ICBmb3JtUHJvZHVjdCA9IGNhcmRQcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWJ1eScpIHx8IGNhcmRQcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aWV3LWNhcmRfX2Zvcm0nKSxcblx0XHRcdFx0XHQgIGlucHV0SWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG5cdFx0XHRcdGlucHV0SWQubmFtZSA9ICdpZCc7XG5cdFx0XHRcdGlucHV0SWQudHlwZSA9ICdoaWRkZW4nO1xuXHRcdFx0XHRzZXRUaW1lb3V0KCAoKSA9PiBpbnB1dElkLnZhbHVlID0gZm9ybVByb2R1Y3QuZWxlbWVudHMuaWQudmFsdWUpO1xuXG5cdFx0XHRcdG1vZGFsRm9ybVRhcmdldCA9IGZvcm1Qcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aWV3LWNhcmRfX21vZGFsLWNvbG9yJyk7XG5cblx0XHRcdFx0Zm9ybS5pbm5lckhUTUwgPSBtb2RhbEZvcm1UYXJnZXQuaW5uZXJIVE1MO1xuXHRcdFx0XHRmb3JtLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJiZWdpbicsIGlucHV0SWQpO1xuXG5cdFx0XHRcdGNvbnN0IGV2ZW50TW9kYWxTaG93ID0gbmV3IEN1c3RvbUV2ZW50KFwibW9kYWxTaG93XCIsIHtcblx0XHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRcdHNlbGVjdG9yOiBcInByZXZpZXctY2FyZC1jb2xvclwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHR3aW5kb3cubW9kYWwuZGlzcGF0Y2hFdmVudChldmVudE1vZGFsU2hvdyk7XG5cblx0XHRcdH1cblxuXHRcdH0pO1xuXG5cdFx0Ly8g0L7QsdGA0LDRgtC90L4g0LLRgdGC0LDQstC70Y/QtdC8INC80L7QtNCw0LvQutGDINCyINGC0L7QstCw0YBcblxuXHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignbW9kYWxDbG9zZScsIGV2ZW50ID0+IHtcblxuXHRcdFx0Zm9ybS5lbGVtZW50cy5pZC5yZW1vdmUoKTtcblxuXHRcdFx0Wy4uLmZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsLWNhcmQtY29sb3JfX2l0ZW0taW5wdXQnKV0uZm9yRWFjaCggaW5wdXQgPT4ge1xuXG5cdFx0XHRcdGlmIChpbnB1dC5jaGVja2VkKSB7XG5cblx0XHRcdFx0XHRpbnB1dC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCdjaGVja2VkJyk7XG5cblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdGlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcpO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fSk7XG5cblx0XHRcdG1vZGFsRm9ybVRhcmdldC5pbm5lckhUTUwgPSBmb3JtLmlubmVySFRNTDtcblxuXHRcdH0pO1xuXG5cdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldmVudCA9PiB7XG5cblx0XHRcdC8vINC40LfQvNC10L3QuNGC0Ywg0YbQstC10YJcblxuXHRcdFx0Y29uc3QgY2FyZENvbG9yID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5tb2RhbC1jYXJkLWNvbG9yX19pdGVtLWlucHV0Jyk7XG5cblx0XHRcdGlmIChjYXJkQ29sb3IpIHtcblxuXHRcdFx0XHQvLyBzZXQgY2xhc3MgY2hlY2tlZFxuXHRcdFx0XHRjb25zdCBpdGVtQ2hlY2tlZCA9IGNhcmRDb2xvci5jbG9zZXN0KCcubW9kYWwtY2FyZC1jb2xvcl9faXRlbScpLFxuXHRcdFx0XHRcdCAgbGlzdCA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsLWNhcmQtY29sb3JfX2l0ZW0nKTtcblxuXHRcdFx0XHRbLi4ubGlzdF0uZm9yRWFjaCggaXRlbSA9PiB7XG5cblx0XHRcdFx0XHRpdGVtLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWNoZWNrZWQnLCBpdGVtID09PSBpdGVtQ2hlY2tlZCk7XG5cblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Y29uc3QgY2FyZCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcubW9kYWwtY2FyZC1jb2xvcicpLFxuXHRcdFx0XHRcdCAgaWQgPSBjYXJkLmVsZW1lbnRzLmlkLnZhbHVlLFxuXHRcdFx0XHRcdCAgYXJ0aWNsZUlkID0gY2FyZENvbG9yLnZhbHVlO1xuXG5cdFx0XHRcdC8vIGltZ1xuXG5cdFx0XHRcdGNhcmQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNhcmQtY29sb3JfX3Bob3RvIGltZycpLnNldEF0dHJpYnV0ZSgnc3JjJywgY2FyZENvbG9yLmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKSk7XG5cdFx0XHRcdGNhcmQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNhcmQtY29sb3JfX3Bob3RvIGltZycpLnNldEF0dHJpYnV0ZSgnc3Jjc2V0JywgY2FyZENvbG9yLmdldEF0dHJpYnV0ZSgnZGF0YS1zcmNzZXQnKSk7XG5cblx0XHRcdFx0Ly8gcHJpY2VcblxuXHRcdFx0XHRpZiAoIGNhcmRDb2xvci5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2Utb2xkJykgKSB7XG5cblx0XHRcdFx0XHRjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5wcmljZV9fb2xkJykudGV4dENvbnRlbnQgPSBjYXJkQ29sb3IuZ2V0QXR0cmlidXRlKCdkYXRhLXByaWNlLW9sZCcpO1xuXHRcdFx0XHRcdGNhcmQucXVlcnlTZWxlY3RvcignLnByaWNlX19vbGQnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG5cblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdGNhcmQucXVlcnlTZWxlY3RvcignLnByaWNlX19vbGQnKS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNhcmQucXVlcnlTZWxlY3RvcignLnByaWNlX192YWx1ZScpLnRleHRDb250ZW50ID0gY2FyZENvbG9yLmdldEF0dHJpYnV0ZSgnZGF0YS1wcmljZScpO1xuXG5cdFx0XHRcdC8vIGJ1eVxuXG5cdFx0XHRcdGNvbnN0IGJ1eSA9IGNhcmRDb2xvci5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnV5JyksXG5cdFx0XHRcdFx0ICBidXlDYXJ0ID0gYnV5ID09PSAnaW4tY2FydCcsXG5cdFx0XHRcdFx0ICBidXlEaXNhYmxlZCA9IGJ1eSA9PT0gJ2Rpc2FibGVkJyxcblx0XHRcdFx0XHQgIGJ1eUJ0biA9IGJ1eSA9PT0gbnVsbCB8fCBidXlEaXNhYmxlZCxcblx0XHRcdFx0XHQgIHRlbXBsYXRlU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWNhcmQtY29sb3Itc3VibWl0LXRlbXBsYXRlJykuaW5uZXJIVE1MO1xuXG5cdFx0XHRcdGNhcmQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNhcmQtY29sb3JfX3N1Ym1pdCcpLmlubmVySFRNTCA9IE11c3RhY2hlLnJlbmRlcih0ZW1wbGF0ZVN1Ym1pdCwgeyBidXlCdG4sIGJ1eURpc2FibGVkLCBidXlDYXJ0IH0pO1xuXG5cdFx0XHRcdC8vIG92ZXJsYXlcblxuXHRcdFx0XHRjb25zdCBvdmVybGF5ID0gY2FyZENvbG9yLmdldEF0dHJpYnV0ZSgnZGF0YS1vdmVybGF5JyksXG5cdFx0XHRcdFx0ICBvdmVybGF5VGl0bGUgPSBjYXJkQ29sb3IuZ2V0QXR0cmlidXRlKCdkYXRhLW92ZXJsYXktdGl0bGUnKSxcblx0XHRcdFx0XHQgIG92ZXJsYXlUZXh0ID0gY2FyZENvbG9yLmdldEF0dHJpYnV0ZSgnZGF0YS1vdmVybGF5LXRleHQnKSxcblx0XHRcdFx0XHQgIG92ZXJsYXlMb2dpbiA9IG92ZXJsYXkgPT09ICdsb2dpbicsXG5cdFx0XHRcdFx0ICBvdmVybGF5Tm90ID0gb3ZlcmxheSA9PT0gJ25vdCcsXG5cdFx0XHRcdFx0ICBlbE92ZXJsYXkgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5LWRpc2FibGVkJyk7XG5cblx0XHRcdFx0aWYgKCBlbE92ZXJsYXkgKSB7XG5cblx0XHRcdFx0XHRlbE92ZXJsYXkucmVtb3ZlKCk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNhcmQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNhcmQtY29sb3JfX3Bob3RvJykuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBNdXN0YWNoZS5yZW5kZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI292ZXJsYXktZGlzYWJsZWQtdGVtcGxhdGUnKS5pbm5lckhUTUwsIHsgb3ZlcmxheSwgb3ZlcmxheVRpdGxlLCBvdmVybGF5VGV4dCwgb3ZlcmxheUxvZ2luLCBvdmVybGF5Tm90LCBpZCwgYXJ0aWNsZUlkIH0pKTtcblxuXHRcdFx0XHQvLyBhdmFpbGFiaWxpdHlcblxuXHRcdFx0XHRjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jYXJkLWNvbG9yX19hdmFpbGFiaWxpdHknKS5pbm5lckhUTUwgPSBNdXN0YWNoZS5yZW5kZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2F2YWlsYWJpbGl0eS10ZW1wbGF0ZScpLmlubmVySFRNTCwgeyBhdmFpbGFiaWxpdHk6ICFvdmVybGF5Tm90IH0pO1xuXG5cdFx0XHR9XG5cblx0XHR9KTtcblxuXHR9XG5cbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmV2aWV3LWNhcmQtY29sb3InKSk7IiwiKCAoKSA9PiB7XG5cblx0Y29uc3Qgdm9sdW1lQ2hhbmdlID0gY2FyZFZvbHVtZSA9PiB7XG5cblx0XHRjb25zdCBjYXJkID0gY2FyZFZvbHVtZS5jbG9zZXN0KCcucHJldmlldy1jYXJkJyksXG5cdFx0XHQgIGlkID0gY2FyZFZvbHVtZS5jbG9zZXN0KCcucHJldmlldy1jYXJkX19mb3JtJykuZWxlbWVudHMuaWQudmFsdWUsXG5cdFx0XHQgIGFydGljbGVJZCA9IGNhcmRWb2x1bWUudmFsdWUsXG5cdFx0XHQgIHRlbXBsYXRlRm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmV2aWV3LWNhcmQtZm9vdC10ZW1wbGF0ZScpLmlubmVySFRNTCxcblx0XHRcdCAgdGVtcGxhdGVGbGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByZXZpZXctY2FyZC1mbGFnLXRlbXBsYXRlJykuaW5uZXJIVE1MLFxuXHRcdFx0ICB0ZW1wbGF0ZUxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByZXZpZXctY2FyZC1sYWJlbC10ZW1wbGF0ZScpLmlubmVySFRNTCxcblx0XHRcdCAgdGVtcGxhdGVQcmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmljZS10ZW1wbGF0ZScpLmlubmVySFRNTCxcblx0XHRcdCAgdGVtcGxhdGVPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI292ZXJsYXktZGlzYWJsZWQtdGVtcGxhdGUnKS5pbm5lckhUTUw7XG5cblx0XHQvLyDQutC90L7Qv9C60LAg0LrRg9C/0LjRgtGMINC4INC40LfQsdGA0LDQvdC90L7QtVxuXG5cdFx0Y29uc3QgYnV5ID0gY2FyZFZvbHVtZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnV5JyksXG5cdFx0XHQgIGJ1eUNhcnQgPSBidXkgPT09ICdpbi1jYXJ0Jyxcblx0XHRcdCAgYnV5RGlzYWJsZWQgPSBidXkgPT09ICdkaXNhYmxlZCcsXG5cdFx0XHQgIGJ1eUJ0biA9IGJ1eSA9PT0gbnVsbCB8fCBidXlEaXNhYmxlZCxcblx0XHRcdCAgZmF2b3VyaXRlID0gY2FyZFZvbHVtZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmF2b3VyaXRlJyk7XG5cblx0XHRjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aWV3LWNhcmRfX2Zvb3QnKS5pbm5lckhUTUwgPSBNdXN0YWNoZS5yZW5kZXIodGVtcGxhdGVGb290LCB7IGJ1eUJ0biwgYnV5RGlzYWJsZWQsIGJ1eUNhcnQsIGZhdm91cml0ZSB9KTtcblxuXHRcdC8vINGG0LXQvdCwXG5cblx0XHRjb25zdCBwcmljZSA9IGNhcmRWb2x1bWUuZ2V0QXR0cmlidXRlKCdkYXRhLXByaWNlJyksXG5cdFx0XHQgIHByaWNlT2xkID0gY2FyZFZvbHVtZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2Utb2xkJyk7XG5cblx0XHRjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aWV3LWNhcmRfX3ByaWNlJykuaW5uZXJIVE1MID0gTXVzdGFjaGUucmVuZGVyKHRlbXBsYXRlUHJpY2UsIHsgcHJpY2UsIHByaWNlT2xkIH0pO1xuXG5cdFx0Ly8g0YTQu9Cw0LNcblxuXHRcdGNvbnN0IGZsYWcgPSBjYXJkVm9sdW1lLmdldEF0dHJpYnV0ZSgnZGF0YS1mbGFnJyksXG5cdFx0XHQgIGZsYWdDb2xvciA9IGNhcmRWb2x1bWUuZ2V0QXR0cmlidXRlKCdkYXRhLWZsYWctY29sb3InKSxcblx0XHRcdCAgY2FyZEZsYWcgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aWV3LWNhcmRfX2ZsYWcnKTtcblxuXHRcdGlmIChjYXJkRmxhZykge1xuXG5cdFx0XHRjYXJkRmxhZy5yZW1vdmUoKTtcblxuXHRcdH1cblxuXHRcdGNhcmQucXVlcnlTZWxlY3RvcignLnByZXZpZXctY2FyZF9faGVhZCcpLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgTXVzdGFjaGUucmVuZGVyKHRlbXBsYXRlRmxhZywgeyBmbGFnLCBmbGFnQ29sb3IgfSkpO1xuXG5cdFx0Ly8gbGFiZWxcblxuXHRcdGNvbnN0IHNhbGUgPSBjYXJkVm9sdW1lLmdldEF0dHJpYnV0ZSgnZGF0YS1sYWJlbC1zYWxlJyksXG5cdFx0XHQgIGRpc2NvdW50ID0gY2FyZFZvbHVtZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGFiZWwtZGlzY291bnQnKSxcblx0XHRcdCAgZ2lmdCA9IGNhcmRWb2x1bWUuZ2V0QXR0cmlidXRlKCdkYXRhLWxhYmVsLWdpZnQnKSxcblx0XHRcdCAgZWxMYWJlbCA9IGNhcmQucXVlcnlTZWxlY3RvcignLnByZXZpZXctY2FyZF9fbGFiZWwnKTtcblxuXHRcdGlmICggZWxMYWJlbCApIHtcblxuXHRcdFx0ZWxMYWJlbC5yZW1vdmUoKTtcblxuXHRcdH1cblxuXHRcdGNhcmQucXVlcnlTZWxlY3RvcignLnByZXZpZXctY2FyZF9faGVhZCcpLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgTXVzdGFjaGUucmVuZGVyKHRlbXBsYXRlTGFiZWwsIHsgc2FsZSwgZGlzY291bnQsIGdpZnQgfSkpO1xuXG5cdFx0Ly8gb3ZlcmxheVxuXG5cdFx0Y29uc3Qgb3ZlcmxheSA9IGNhcmRWb2x1bWUuZ2V0QXR0cmlidXRlKCdkYXRhLW92ZXJsYXknKSxcblx0XHRcdCAgb3ZlcmxheVRpdGxlID0gY2FyZFZvbHVtZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3ZlcmxheS10aXRsZScpLFxuXHRcdFx0ICBvdmVybGF5VGV4dCA9IGNhcmRWb2x1bWUuZ2V0QXR0cmlidXRlKCdkYXRhLW92ZXJsYXktdGV4dCcpLFxuXHRcdFx0ICBvdmVybGF5TG9naW4gPSBvdmVybGF5ID09PSAnbG9naW4nLFxuXHRcdFx0ICBvdmVybGF5Tm90ID0gb3ZlcmxheSA9PT0gJ25vdCcsXG5cdFx0XHQgIG92ZXJsYXlXaXRoZHJhd24gPSBvdmVybGF5ID09PSAnd2l0aGRyYXduJyxcblx0XHRcdCAgZWxPdmVybGF5ID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheS1kaXNhYmxlZCcpO1xuXG5cdFx0aWYgKCBlbE92ZXJsYXkgKSB7XG5cblx0XHRcdGVsT3ZlcmxheS5yZW1vdmUoKTtcblxuXHRcdH1cblxuXHRcdGNhcmQucXVlcnlTZWxlY3RvcignLnByZXZpZXctY2FyZF9faGVhZCcpLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgTXVzdGFjaGUucmVuZGVyKHRlbXBsYXRlT3ZlcmxheSwgeyBvdmVybGF5LCBvdmVybGF5VGl0bGUsIG92ZXJsYXlUZXh0LCBvdmVybGF5TG9naW4sIG92ZXJsYXlOb3QsIG92ZXJsYXlXaXRoZHJhd24sIGlkLCBhcnRpY2xlSWQgfSkpO1xuXG5cdH1cblxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldmVudCA9PiB7XG5cblx0XHQvLyDQuNC30LzQtdC90LjRgtGMINC+0LHRitGR0Lxcblx0XHRjb25zdCBjYXJkVm9sdW1lID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5wcmV2aWV3LWNhcmRfX3ZvbHVtZS1pbnB1dCcpO1xuXG5cdFx0aWYgKGNhcmRWb2x1bWUpIHtcblxuXHRcdFx0dm9sdW1lQ2hhbmdlKGNhcmRWb2x1bWUpO1xuXG5cdFx0fVxuXG5cdFx0Ly8g0LjQt9C80LXQvdC40YLRjCDQvtCx0YrRkdC8INCyINC80L7QsdC40LvRjNC90L7QvFxuXHRcdGNvbnN0IGNhcmRWb2x1bWVNb2JpbGUgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnByZXZpZXctY2FyZF9fdm9sdW1lLXNlbGVjdCcpO1xuXG5cdFx0aWYgKGNhcmRWb2x1bWVNb2JpbGUpIHtcblxuXHRcdFx0Y29uc3QgdmFsdWUgPSBjYXJkVm9sdW1lTW9iaWxlLnZhbHVlLFxuXHRcdFx0XHQgIGNhcmQgPSBjYXJkVm9sdW1lTW9iaWxlLmNsb3Nlc3QoJy5wcmV2aWV3LWNhcmQnKSxcblx0XHRcdFx0ICBpbnB1dEJ0biA9IGNhcmQucXVlcnlTZWxlY3RvckFsbCgnLnByZXZpZXctY2FyZF9fdm9sdW1lLWlucHV0Jyk7XG5cblx0XHRcdFsuLi5pbnB1dEJ0bl0uZm9yRWFjaCggZWwgPT4ge1xuXG5cdFx0XHRcdGlmICggZWwuZ2V0QXR0cmlidXRlKCd2YWx1ZScpID09PSB2YWx1ZSApIHtcblxuXHRcdFx0XHRcdGVsLmNoZWNrZWQgPSB0cnVlO1xuXG5cdFx0XHRcdFx0dm9sdW1lQ2hhbmdlKGVsKTtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0ZWwuY2hlY2tlZCA9IGZhbHNlO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fSk7XG5cblx0XHR9XG5cblx0fSk7XG5cbn0pKCk7IiwiKCBwcm9kdWN0ID0+IHtcblxuXHRpZiggcHJvZHVjdCApIHtcblxuXHRcdC8vIHBhcmFtXG5cblx0XHRpZiAoIHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4ICkge1xuXG5cdFx0XHRjb25zdCBidG4gPSBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0X19vcGVuLXRhYiAuYnRuJyk7XG5cblx0XHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcblxuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHRcdGJ0bi5jbG9zZXN0KCcucHJvZHVjdF9fc3BlY3MnKS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1vcGVuJyk7XG5cblx0XHRcdH0pO1xuXG5cdFx0fVxuXG5cdFx0Ly8gaGFzaFxuXG5cdFx0Y29uc3Qgc2V0VGFiID0gKCk9PiB7XG5cblx0XHRcdGNvbnN0IHRhYkl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGxvY2F0aW9uLmhhc2gpLmNsb3Nlc3QoJy50YWJzX19pdGVtJyk7XG5cblx0XHRcdGlmICggdGFiSXRlbSApIHtcblxuXHRcdFx0XHR0YWJJdGVtLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwic2V0QWN0aXZlXCIpKTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBzZXRUYWIpO1xuXG5cdFx0aWYgKCBsb2NhdGlvbi5oYXNoICkge1xuXG5cdFx0XHRzZXRUaW1lb3V0KCBzZXRUYWIgKTtcblxuXHRcdH1cblxuXHRcdC8vIGdhbGxlcnlcblxuXHRcdGNvbnN0IGdhbGxlcnkgPSBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWdhbGxlcnknKTtcblx0XHRcdCAgZ2FsbGVyeVByZXZpZXcgPSBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWN0LWdhbGxlcnlfX3ByZXZpZXctbGluaycpO1xuXG5cdFx0Y29uc3Qgc2V0QWN0aXZlSW1nID0gbGluayA9PiB7XG5cblx0XHRcdGxldCBpbmRleCA9IG51bGw7XG5cblx0XHRcdFsuLi5nYWxsZXJ5UHJldmlld10uZm9yRWFjaCggKF9saW5rLF9pbmRleCkgPT4ge1xuXG5cdFx0XHRcdF9saW5rLnBhcmVudE5vZGUuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtY3VycmVudCcsIF9saW5rID09PSBsaW5rKTtcblxuXHRcdFx0XHRpZiAoIF9saW5rID09PSBsaW5rICkge1xuXG5cdFx0XHRcdFx0aW5kZXggPSBfaW5kZXg7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9KTtcblxuXHRcdFx0cHJvZHVjdC5xdWVyeVNlbGVjdG9yKCcuc3dpcGVyLWNvbnRhaW5lci0tcHJvZHVjdCcpLnN3aXBlci5zbGlkZVRvTG9vcChpbmRleCk7XG5cblx0XHR9XG5cblx0XHRnYWxsZXJ5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuXG5cdFx0XHRjb25zdCB0YXJnZXRMaW5rID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2EnKTtcblxuXHRcdFx0aWYgKCB0YXJnZXRMaW5rICkge1xuXG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdFx0aWYgKCB0YXJnZXRMaW5rLmNsYXNzTGlzdC5jb250YWlucygncHJvZHVjdC1nYWxsZXJ5X19wcmV2aWV3LWxpbmsnKSApIHtcblxuXHRcdFx0XHRcdHNldEFjdGl2ZUltZyh0YXJnZXRMaW5rKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdH0pO1xuXG5cdFx0Ly8gdm9sdW1lXG5cblx0XHRjb25zdCB2b2x1bWVDaGFuZ2UgPSBjYXJkVm9sdW1lID0+IHtcblxuXG5cdFx0XHRjb25zdCBmb3JtID0gY2FyZFZvbHVtZS5jbG9zZXN0KCcucHJvZHVjdC1idXknKSxcblx0XHRcdFx0ICBpZCA9IGZvcm0uZWxlbWVudHMuaWQudmFsdWUsXG5cdFx0XHRcdCAgYXJ0aWNsZUlkID0gY2FyZFZvbHVtZS52YWx1ZSxcblx0XHRcdFx0ICB0ZW1wbGF0ZUZvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvZHVjdC1idXktc3VibWl0LXRlbXBsYXRlJykuaW5uZXJIVE1MLFxuXHRcdFx0XHQgIHRlbXBsYXRlRmF2b3VyaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2R1Y3QtYnV5LWZhdm91cml0ZS10ZW1wbGF0ZScpLmlubmVySFRNTCxcblx0XHRcdFx0ICB0ZW1wbGF0ZVByaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaWNlLXRlbXBsYXRlJykuaW5uZXJIVE1MLFxuXHRcdFx0XHQgIHRlbXBsYXRlQXZhaWxhYmlsaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2F2YWlsYWJpbGl0eS10ZW1wbGF0ZScpLmlubmVySFRNTCxcblx0XHRcdFx0ICB0ZW1wbGF0ZU92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3ZlcmxheS1kaXNhYmxlZC10ZW1wbGF0ZScpLmlubmVySFRNTCxcblx0XHRcdFx0ICB0ZW1wbGF0ZUJvYXJkTG9naW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvZHVjdC1sb2dpbi10ZW1wbGF0ZScpLmlubmVySFRNTDtcblxuXHRcdFx0Ly8gdm9sdW1lIC0+IGdhbGxlcnlcblxuXHRcdFx0Wy4uLmdhbGxlcnlQcmV2aWV3XS5mb3JFYWNoKCBsaW5rID0+IHtcblxuXHRcdFx0XHRpZiAoIGxpbmsuZ2V0QXR0cmlidXRlKCdkYXRhLWFydGljbGVpZCcpID09PSBhcnRpY2xlSWQgKSB7XG5cblx0XHRcdFx0XHRzZXRBY3RpdmVJbWcobGluayk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8g0LrQvdC+0L/QutCwINC40LfQsdGA0LDQvdC90L7QtVxuXG5cdFx0XHRjb25zdCBmYXZvdXJpdGUgPSBjYXJkVm9sdW1lLmdldEF0dHJpYnV0ZSgnZGF0YS1mYXZvdXJpdGUnKTtcblxuXHRcdFx0Zm9ybS5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1idXlfX2Zhdm91cml0ZScpLmlubmVySFRNTCA9IE11c3RhY2hlLnJlbmRlcih0ZW1wbGF0ZUZhdm91cml0ZSwgeyBmYXZvdXJpdGUgfSk7XG5cblx0XHRcdC8vIG92ZXJsYXlcblxuXHRcdFx0Y29uc3Qgb3ZlcmxheSA9IGNhcmRWb2x1bWUuZ2V0QXR0cmlidXRlKCdkYXRhLW92ZXJsYXknKSxcblx0XHRcdFx0ICBvdmVybGF5VGl0bGUgPSBjYXJkVm9sdW1lLmdldEF0dHJpYnV0ZSgnZGF0YS1vdmVybGF5LXRpdGxlJyksXG5cdFx0XHRcdCAgb3ZlcmxheVRleHQgPSBjYXJkVm9sdW1lLmdldEF0dHJpYnV0ZSgnZGF0YS1vdmVybGF5LXRleHQnKSxcblx0XHRcdFx0ICBvdmVybGF5TG9naW4gPSBvdmVybGF5ID09PSAnbG9naW4nLFxuXHRcdFx0XHQgIG92ZXJsYXlOb3QgPSBvdmVybGF5ID09PSAnbm90Jyxcblx0XHRcdFx0ICBvdmVybGF5V2l0aGRyYXduID0gb3ZlcmxheSA9PT0gJ3dpdGhkcmF3bicsXG5cdFx0XHRcdCAgZWxPdmVybGF5ID0gcHJvZHVjdC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheS1kaXNhYmxlZCcpLFxuXHRcdFx0XHQgIGJvYXJkTG9naW4gPSBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZC1sb2dpbicpO1xuXG5cdFx0XHRpZiAoIGVsT3ZlcmxheSApIHtcblxuXHRcdFx0XHRlbE92ZXJsYXkucmVtb3ZlKCk7XG5cblx0XHRcdH1cblxuXHRcdFx0aWYgKCBvdmVybGF5TG9naW4gKSB7XG5cblx0XHRcdFx0aWYgKCBib2FyZExvZ2luID09PSBudWxsICkge1xuXG5cdFx0XHRcdFx0cHJvZHVjdC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1idXlfX3ByaWNlJykuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmVuZCcsIE11c3RhY2hlLnJlbmRlcih0ZW1wbGF0ZUJvYXJkTG9naW4pKTtcblxuXHRcdFx0XHRcdGNvbnN0IHRvb2x0aXAgPSBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZC1sb2dpbiAudG9vbHRpcCcpO1xuXG5cdFx0XHRcdFx0aWYgKCB0b29sdGlwICkge1xuXG5cdFx0XHRcdFx0XHRuZXcgVG9vbHRpcCh0b29sdGlwKTtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0aWYgKCBib2FyZExvZ2luICkge1xuXG5cdFx0XHRcdFx0Ym9hcmRMb2dpbi5yZW1vdmUoKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0cHJvZHVjdC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1nYWxsZXJ5X193cmFwJykuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBNdXN0YWNoZS5yZW5kZXIodGVtcGxhdGVPdmVybGF5LCB7IG92ZXJsYXksIG92ZXJsYXlUaXRsZSwgb3ZlcmxheVRleHQsIG92ZXJsYXlMb2dpbiwgb3ZlcmxheU5vdCwgb3ZlcmxheVdpdGhkcmF3biwgaWQsIGFydGljbGVJZCB9KSk7XG5cblx0XHRcdH1cblxuXHRcdFx0Ly8g0YbQtdC90LBcblxuXHRcdFx0Y29uc3QgcHJpY2UgPSBjYXJkVm9sdW1lLmdldEF0dHJpYnV0ZSgnZGF0YS1wcmljZScpLFxuXHRcdFx0XHQgIHByaWNlT2xkID0gY2FyZFZvbHVtZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2Utb2xkJyk7XG5cblx0XHRcdGZvcm0ucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtYnV5X19wcmljZScpLmlubmVySFRNTCA9IE11c3RhY2hlLnJlbmRlcih0ZW1wbGF0ZVByaWNlLCB7IHByaWNlLCBwcmljZU9sZCB9KTtcblxuXHRcdFx0Ly8g0LrQvdC+0L/QutCwINC60YPQv9C40YLRjFxuXG5cdFx0XHRjb25zdCBidXkgPSBjYXJkVm9sdW1lLmdldEF0dHJpYnV0ZSgnZGF0YS1idXknKSxcblx0XHRcdFx0ICBidXlDYXJ0ID0gYnV5ID09PSAnaW4tY2FydCcsXG5cdFx0XHRcdCAgYnV5RGlzYWJsZWQgPSBidXkgPT09ICdkaXNhYmxlZCcsXG5cdFx0XHRcdCAgYnV5QnRuID0gYnV5ID09PSBudWxsIHx8IGJ1eURpc2FibGVkLFxuXHRcdFx0XHQgIGJ0bkxvZ2luID0gb3ZlcmxheUxvZ2luO1xuXG5cdFx0XHRpZiAoIGJ0bkxvZ2luICkge1xuXG5cdFx0XHRcdGZvcm0ucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtYnV5X19zdWJtaXQnKS5pbm5lckhUTUwgPSBNdXN0YWNoZS5yZW5kZXIodGVtcGxhdGVGb290LCB7IGJ0bkxvZ2luIH0pO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdGZvcm0ucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtYnV5X19zdWJtaXQnKS5pbm5lckhUTUwgPSBNdXN0YWNoZS5yZW5kZXIodGVtcGxhdGVGb290LCB7IGJ1eUJ0biwgYnV5RGlzYWJsZWQsIGJ1eUNhcnQgfSk7XG5cblx0XHRcdH1cblxuXHRcdFx0Ly8gYXZhaWxhYmlsaXR5XG5cblx0XHRcdGZvcm0ucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtYnV5X19hdmFpbGFiaWxpdHknKS5pbm5lckhUTUwgPSBNdXN0YWNoZS5yZW5kZXIodGVtcGxhdGVBdmFpbGFiaWxpdHksIHsgYXZhaWxhYmlsaXR5OiAhb3ZlcmxheU5vdCB9KTtcblxuXHRcdH1cblxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50ID0+IHtcblxuXHRcdFx0Ly8g0LjQt9C80LXQvdC40YLRjCDQvtCx0YrRkdC8XG5cdFx0XHRjb25zdCBjYXJkVm9sdW1lID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5wcm9kdWN0LWJ1eV9fdm9sdW1lLWlucHV0Jyk7XG5cblx0XHRcdGlmIChjYXJkVm9sdW1lKSB7XG5cblx0XHRcdFx0dm9sdW1lQ2hhbmdlKGNhcmRWb2x1bWUpO1xuXG5cdFx0XHR9XG5cblx0XHRcdC8vINC40LfQvNC10L3QuNGC0Ywg0L7QsdGK0ZHQvCDQsiDQvNC+0LHQuNC70YzQvdC+0Lxcblx0XHRcdGNvbnN0IGNhcmRWb2x1bWVNb2JpbGUgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnByb2R1Y3QtYnV5X192b2x1bWUtc2VsZWN0Jyk7XG5cblx0XHRcdGlmIChjYXJkVm9sdW1lTW9iaWxlKSB7XG5cblx0XHRcdFx0Y29uc3QgdmFsdWUgPSBjYXJkVm9sdW1lTW9iaWxlLnZhbHVlLFxuXHRcdFx0XHRcdCAgY2FyZCA9IGNhcmRWb2x1bWVNb2JpbGUuY2xvc2VzdCgnLnByb2R1Y3QtYnV5JyksXG5cdFx0XHRcdFx0ICBpbnB1dEJ0biA9IGNhcmQucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3QtYnV5X192b2x1bWUtaW5wdXQnKTtcblxuXHRcdFx0XHRbLi4uaW5wdXRCdG5dLmZvckVhY2goIGVsID0+IHtcblxuXHRcdFx0XHRcdGlmICggZWwuZ2V0QXR0cmlidXRlKCd2YWx1ZScpID09PSB2YWx1ZSApIHtcblxuXHRcdFx0XHRcdFx0ZWwuY2hlY2tlZCA9IHRydWU7XG5cblx0XHRcdFx0XHRcdHZvbHVtZUNoYW5nZShlbCk7XG5cblx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRlbC5jaGVja2VkID0gZmFsc2U7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fSk7XG5cblx0XHRcdH1cblxuXHRcdH0pO1xuXG5cdFx0Ly8g0J/RgNC+0YLQvtC60L7Qu1xuXG5cdFx0Y29uc3QgZm9ybVNldCA9IHByb2R1Y3QucXVlcnlTZWxlY3RvckFsbCgnLnByZXZpZXctY2FyZF9fZm9ybS1zZXQnKTtcblxuXHRcdGlmICggZm9ybVNldC5sZW5ndGggPiAwICkge1xuXG5cdFx0XHRjb25zdCB0ZW1wbGF0ZUFkZE1vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvZHVjdC1zZXQtYWRkbW9kZS10ZW1wbGF0ZScpLmlubmVySFRNTDtcblxuXHRcdFx0Wy4uLmZvcm1TZXRdLmZvckVhY2goIGZvcm0gPT4ge1xuXG5cdFx0XHRcdGNvbnN0IG1vZGUgPSBmb3JtLmVsZW1lbnRzLm1vZGUsXG5cdFx0XHRcdFx0ICBidG5XcmFwID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcucHJldmlldy1jYXJkX19mb3JtLXNldC1idG4tYWRkJyk7XG5cblx0XHRcdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudCA9PiB7XG5cblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCfQkiDRjdGC0L7QuSDRh9Cw0YHRgtC4INC90LjRh9C10LPQviDQvdC1INC00LXQu9Cw0LssINC60YDQvtC80LUg0YHQvNC10L3RiyDQutC90L7Qv9C60LguINCc0L7Qs9GDINGD0LHRgNCw0YLRjCDQvtCx0YDQsNCx0L7RgtGH0LjQuiDQuNC70Lgg0L3QsNC/0LjRgdCw0YLRjCDRh9GC0L4g0L3QtdC+0LHRhdC+0LTQuNC80L46INC/0LXRgNC10LrQu9GO0YfQtdC90LjQtSDQutC90L7Qv9C+0Log0Lgg0YIu0L8uJyk7XG5cblx0XHRcdFx0XHRpZiAoIG1vZGUudmFsdWUgPT09ICdhZGQnICkgeyAvLyDRgtGD0YIg0L3QsNC00L4g0YHQvNC+0YLRgNC10YLRjCwg0YfRgtC+INCy0LXRgNC90YPQu9C4OiBhZGQgfCByZW1vdmVcblxuXHRcdFx0XHRcdFx0bW9kZS52YWx1ZSA9ICdyZW1vdmUnO1xuXG5cdFx0XHRcdFx0XHRidG5XcmFwLmlubmVySFRNTCA9IE11c3RhY2hlLnJlbmRlcih0ZW1wbGF0ZUFkZE1vZGUsIHsgcmVtb3ZlIDogdHJ1ZSB9KTtcblxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRcdG1vZGUudmFsdWUgPSAnYWRkJztcblxuXHRcdFx0XHRcdFx0YnRuV3JhcC5pbm5lckhUTUwgPSBNdXN0YWNoZS5yZW5kZXIodGVtcGxhdGVBZGRNb2RlLCB7IGFkZCA6IHRydWUgfSk7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fSk7XG5cblx0XHRcdH0pO1xuXG5cdFx0fVxuXG5cdFx0Ly8gc2VsZWN0IHZvbHVtZVxuXG5cdFx0Y29uc3QgYnRuc1NlbGVjdCA9IHByb2R1Y3QucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3QtYnV5X19zZWxlY3QtYnRuJyk7XG5cdFx0Y29uc3QgYnRuc1NlbGVjdFRvZ2dsZSA9IHByb2R1Y3QucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtYnV5X19zZWxlY3QtYnRuLS1vcGVuJyk7XG5cblx0XHRpZiAoIGJ0bnNTZWxlY3RUb2dnbGUgKSB7XG5cblx0XHRcdGNvbnN0IGZvcm0gPSBidG5zU2VsZWN0VG9nZ2xlLmNsb3Nlc3QoJy5wcm9kdWN0LWJ1eScpLFxuXHRcdFx0XHQgIHRlbXBsYXRlUHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpY2UtdGVtcGxhdGUnKS5pbm5lckhUTUw7XG5cblx0XHRcdFsuLi5idG5zU2VsZWN0XS5mb3JFYWNoKCBidG4gPT4ge1xuXG5cdFx0XHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuXHRcdFx0XHRcdGlmICggYnRuID09PSBidG5zU2VsZWN0VG9nZ2xlICkge1xuXG5cdFx0XHRcdFx0XHQvLyDQutC90L7Qv9C60LAg0L7RgtC60YDRi9GC0LjRj1xuXG5cdFx0XHRcdFx0XHRidG4uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtb3BlbicpO1xuXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2Uge1xuXG5cdFx0XHRcdFx0XHQvLyDQstGL0L/QsNC00LDRiNC60LBcblxuXHRcdFx0XHRcdFx0YnRuc1NlbGVjdFRvZ2dsZS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJyk7XG5cblx0XHRcdFx0XHRcdFsuLi5idG5zU2VsZWN0XS5mb3JFYWNoKCBfYnRuID0+IHtcblxuXHRcdFx0XHRcdFx0XHRpZiAoIF9idG4gPT09IGJ0biApIHtcblxuXHRcdFx0XHRcdFx0XHRcdF9idG4uY2xhc3NMaXN0LmFkZCgnaXMtY3VycmVudCcpO1xuXG5cdFx0XHRcdFx0XHRcdFx0Zm9ybS5lbGVtZW50cy5pZC52YWx1ZSA9IGJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcblxuXHRcdFx0XHRcdFx0XHRcdGJ0bnNTZWxlY3RUb2dnbGUucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtYnV5X19zZWxlY3QtaW1nIGltZycpLnNyYyA9IGJ0bi5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1idXlfX3NlbGVjdC1pbWcgaW1nJykuc3JjO1xuXG5cdFx0XHRcdFx0XHRcdFx0YnRuc1NlbGVjdFRvZ2dsZS5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1idXlfX3NlbGVjdC1uYW1lJykudGV4dENvbnRlbnQgPSBidG4ucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtYnV5X19zZWxlY3QtbmFtZScpLnRleHRDb250ZW50O1xuXG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgcHJpY2UgPSBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLXByaWNlJyksXG5cdFx0XHRcdFx0XHRcdFx0XHQgIHByaWNlT2xkID0gYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1wcmljZS1vbGQnKTtcblxuXHRcdFx0XHRcdFx0XHRcdGZvcm0ucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtYnV5X19wcmljZScpLmlubmVySFRNTCA9IE11c3RhY2hlLnJlbmRlcih0ZW1wbGF0ZVByaWNlLCB7IHByaWNlLCBwcmljZU9sZCB9KTtcblxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRcdFx0X2J0bi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1jdXJyZW50Jyk7XG5cblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9KTtcblxuXHRcdFx0fSk7XG5cblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xuXG5cdFx0XHRcdGlmICggZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5wcm9kdWN0LWJ1eV9fc2VsZWN0JykgPT09IG51bGwgKSB7XG5cblx0XHRcdFx0XHRidG5zU2VsZWN0VG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9wZW4nKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH0pO1xuXG5cdFx0fVxuXG5cdH1cblxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3QnKSk7IiwiKCAoKT0+IHtcblxuXHRjb25zdCByZWFkbW9yZVRvZ2dsZSA9IGJsb2NrID0+IHtcblxuXHRcdGNvbnN0IGJ0biA9IGJsb2NrLnF1ZXJ5U2VsZWN0b3IoJy5yZWFkbW9yZS10ZXh0X19idG4nKSxcblx0XHRcdCAgdGV4dENsb3NlID0gYnRuLnRleHRDb250ZW50O1xuXG5cdFx0Y29uc3QgdG9nZ2xlID0gKCkgPT4ge1xuXG5cdFx0XHRpZiAoIGJsb2NrLmNsYXNzTGlzdC5jb250YWlucygnaXMtb3BlbicpICkge1xuXG5cdFx0XHRcdGJsb2NrLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9wZW4nKTtcblx0XHRcdFx0YnRuLnRleHRDb250ZW50ID0gdGV4dENsb3NlO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdGJsb2NrLmNsYXNzTGlzdC5hZGQoJ2lzLW9wZW4nKTtcblx0XHRcdFx0YnRuLnRleHRDb250ZW50ID0gYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1hbHQnKTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlKTtcblxuXHR9O1xuXG5cdCggYmxvY2tzID0+IHtcblxuXHRcdGlmKGJsb2Nrcy5sZW5ndGgpIHtcblxuXHRcdFx0Wy4uLmJsb2Nrc10uZm9yRWFjaCggYmxvY2sgPT4gcmVhZG1vcmVUb2dnbGUoYmxvY2spICk7XG5cblx0XHR9XG5cblx0fSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlYWRtb3JlLXRleHQnKSk7XG5cblx0Ly8gY29udGVudFxuXG5cdCggYmxvY2tzID0+IHtcblxuXHRcdGlmKGJsb2Nrcy5sZW5ndGgpIHtcblxuXHRcdFx0Y29uc3QgaW5pdCA9ICgpPT4ge1xuXG5cdFx0XHRcdGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlYWRtb3JlLXRlbXBsYXRlJykuaW5uZXJIVE1MO1xuXG5cdFx0XHRcdFsuLi5ibG9ja3NdLmZvckVhY2goIGJsb2NrID0+IHtcblxuXHRcdFx0XHRcdC8vIGNvbnRpbnVlXG5cblx0XHRcdFx0XHRpZiAoIGJsb2NrLmNsYXNzTGlzdC5jb250YWlucygnaXMtcmVhZG1vcmUtb2ZmJykgKSB7XG5cblx0XHRcdFx0XHRcdHJldHVybjtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vINC/0LXRgNC10LzQtdGJ0LDQtdC8INCyINC60L7QvdC10YZcblxuXHRcdFx0XHRcdGNvbnN0IG1haW4gPSBibG9jay5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnbWFpbicpID8gYmxvY2sucGFyZW50Tm9kZSA6IGZhbHNlO1xuXG5cdFx0XHRcdFx0aWYgKCBtYWluICkge1xuXG5cdFx0XHRcdFx0XHRtYWluLmFwcGVuZChibG9jayk7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyByZWFkbW9yZVxuXG5cdFx0XHRcdFx0bGV0IGFwcGVuZCA9IG51bGw7XG5cblx0XHRcdFx0XHRjb25zdCBociA9IGJsb2NrLnF1ZXJ5U2VsZWN0b3IoJy5yZWFkbW9yZS1ocicpO1xuXG5cdFx0XHRcdFx0Wy4uLmJsb2NrLmNoaWxkcmVuXS5mb3JFYWNoKCBlbCA9PiB7XG5cblx0XHRcdFx0XHRcdGlmICggZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdyZWFkbW9yZS1ocicpIHx8ICggIWhyICYmICggZWwudGFnTmFtZSA9PT0gJ0gyJyB8fCBlbC50YWdOYW1lID09PSAnSDMnKSApICkge1xuXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGVsLnRhZ05hbWUpO1xuXG5cdFx0XHRcdFx0XHRcdGlmICggYXBwZW5kID09PSBudWxsICkge1xuXG5cdFx0XHRcdFx0XHRcdFx0YmxvY2suaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0ZW1wbGF0ZSk7XG5cblx0XHRcdFx0XHRcdFx0XHRhcHBlbmQgPSBibG9jay5xdWVyeVNlbGVjdG9yKCcucmVhZG1vcmUtdGV4dF9fYm9keScpO1xuXG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpZiggYXBwZW5kICkge1xuXG5cdFx0XHRcdFx0XHRcdGFwcGVuZC5hcHBlbmQoZWwpO1xuXG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdGlmICggaHIgKSB7XG5cblx0XHRcdFx0XHRcdGhyLnJlbW92ZSgpO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKCBhcHBlbmQgKSB7XG5cblx0XHRcdFx0XHRcdHJlYWRtb3JlVG9nZ2xlKGJsb2NrLnF1ZXJ5U2VsZWN0b3IoJy5yZWFkbW9yZS10ZXh0JykpO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH0pO1xuXG5cdFx0XHR9XG5cblx0XHRcdHNldFRpbWVvdXQoICgpID0+IGluaXQoKSwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Zhc3RMb2FkU2NyaXB0JykgPyAwIDogMTAwMDApO1xuXG5cdFx0fVxuXG5cdH0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb250ZW50JykpO1xuXG59KSgpOyIsIiggcmV2aWV3ID0+IHtcblxuXHRpZiggcmV2aWV3ICkge1xuXG5cdFx0Ly8gc3ViXG5cblx0XHRjb25zdCBidG5Ub2dnbGVTdWIgPSByZXZpZXcucXVlcnlTZWxlY3RvckFsbCgnLnJldmlld19fdG9nZ2xlLXN1YicpO1xuXG5cdFx0Wy4uLmJ0blRvZ2dsZVN1Yl0uZm9yRWFjaCggYnRuID0+IHtcblxuXHRcdFx0Y29uc3QgZ3JvdXAgPSBidG4uY2xvc2VzdCgnLnJldmlld19fZ3JvdXAnKSxcblx0XHRcdFx0ICB0ZXh0RGVmYXVsdCA9IGJ0bi5pbm5lckhUTUw7XG5cblx0XHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuXHRcdFx0XHRpZiAoIGdyb3VwLmNsYXNzTGlzdC5jb250YWlucygnaXMtb3BlbicpICkge1xuXG5cdFx0XHRcdFx0Z3JvdXAuY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpO1xuXHRcdFx0XHRcdGJ0bi5pbm5lckhUTUwgPSB0ZXh0RGVmYXVsdDtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0Z3JvdXAuY2xhc3NMaXN0LmFkZCgnaXMtb3BlbicpO1xuXHRcdFx0XHRcdGJ0bi50ZXh0Q29udGVudCA9IGJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtYWx0Jyk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9KTtcblxuXHRcdH0pO1xuXG5cdH1cblxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJldmlldycpKTsiLCJ3aW5kb3cuc2VsZWN0cyA9IHNlbGVjdCA9PiB7XG5cblx0aWYoc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX2xpc3QnKSkge1xuXG5cdFx0cmV0dXJuO1xuXG5cdH1cblx0Y29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0LXRlbXBsYXRlJykuaW5uZXJIVE1MLFxuXHRcdCAgZm9ybSA9IHNlbGVjdC5jbG9zZXN0KCdmb3JtJyksXG5cdFx0ICBjb250cm9sID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpLFxuXHRcdCAgb3B0aW9uID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpLFxuXHRcdCAgZmlsdGVyID0gc2VsZWN0LmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0LS1maWx0ZXInKSxcblx0XHQgIGxpc3QgPSBbXTtcblxuXHRjb25zdCB2YWx1ZURlZmF1bHQgPSBjb250cm9sLnF1ZXJ5U2VsZWN0b3IoJ1t2YWx1ZT1cIicgKyBjb250cm9sLnZhbHVlICsgJ1wiXScpLnRleHRDb250ZW50O1xuXG5cdGlmKCBjb250cm9sLmRpc2FibGVkIHx8IGNvbnRyb2wudmFsdWUgPT09ICdub25lJyB8fCBjb250cm9sLnZhbHVlID09PSAnJyApe1xuXG5cdFx0c2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2lzLWRlZmF1bHQnKTtcblxuXHR9XG5cblx0Wy4uLm9wdGlvbl0uZm9yRWFjaCggZWwgPT4ge1xuXG5cdFx0aWYgKCBlbC52YWx1ZSA9PT0gJ25vbmUnIHx8IGVsLnZhbHVlID09PSAnJyApIHtcblxuXHRcdFx0cmV0dXJuO1xuXG5cdFx0fVxuXG5cdFx0bGlzdC5wdXNoKHtcblx0XHRcdG5hbWUgIDogY29udHJvbC5uYW1lLFxuXHRcdFx0bGFiZWwgOiBlbC50ZXh0Q29udGVudCxcblx0XHRcdHZhbHVlIDogZWwudmFsdWUsXG5cdFx0XHRjaGVja2VkIDogY29udHJvbC52YWx1ZSA9PT0gZWwudmFsdWVcblx0XHR9KTtcblxuXHR9KTtcblxuXHRzZWxlY3QuaW5uZXJIVE1MID0gTXVzdGFjaGUucmVuZGVyKHRlbXBsYXRlLCB7IHZhbHVlRGVmYXVsdCwgbGlzdCwgZmlsdGVyIH0pO1xuXG5cdGNvbnN0IGZpZWxkc2V0ID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX2xpc3QnKSxcblx0XHQgIHZhbHVlVGV4dCA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X192YWx1ZS1pbm5lcicpO1xuXG5cdGZpZWxkc2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50ID0+IHtcblxuXHRcdGlmKCBldmVudC50YXJnZXQudGFnTmFtZSA9PT0gJ0lOUFVUJyApIHtcblxuXHRcdFx0Y29uc3QgaXRlbSA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlO1xuXG5cdFx0XHR2YWx1ZVRleHQudGV4dENvbnRlbnQgPSBpdGVtLnRleHRDb250ZW50O1xuXG5cdFx0fVxuXG5cdH0pO1xuXG5cdGZvcm0gJiYgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwicmVzZXRcIiwgKCkgPT4ge1xuXG5cdFx0c2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2lzLWRlZmF1bHQnKTtcblx0XHR2YWx1ZVRleHQudGV4dENvbnRlbnQgPSB2YWx1ZURlZmF1bHQ7XG5cblx0fSk7XG5cblx0aWYgKCBmaWx0ZXIgKSB7XG5cblx0XHRyZXR1cm47XG5cblx0XHRjb25zdCBpbnB1dEZpbHRlciA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19maWx0ZXInKTtcblxuXHRcdGlucHV0RmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuXG5cdFx0XHRjb25zdCB2YWx1ZSA9IGlucHV0RmlsdGVyLnZhbHVlLnRvTG93ZXJDYXNlKCk7XG5cblx0XHRcdGlmKHZhbHVlLmxlbmd0aCA+IDApIHtcblxuXHRcdFx0XHRjb25zdCBsaXN0ID0gZmllbGRzZXQucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdF9fbGlzdC1pdGVtJyk7XG5cblx0XHRcdFx0Wy4uLmxpc3RdLmZvckVhY2goIG8gPT4ge1xuXG5cdFx0XHRcdFx0Y29uc3QgdGV4dCA9IG8udGV4dENvbnRlbnQudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cblx0XHRcdFx0XHRvLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnLCB0ZXh0LmluY2x1ZGVzKHZhbHVlKSk7XG5cblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0aWYoIGxpc3QubGVuZ3RoID09PSBmaWVsZHNldC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0X19saXN0LWl0ZW0uaGlkZScpLmxlbmd0aCApIHtcblxuXHRcdFx0XHRcdHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdzZWxlY3QtLWZpbHRlci1lbXB0eScpO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0LS1maWx0ZXItZW1wdHknKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Wy4uLmxpc3RdLmZvckVhY2goIG8gPT4gby5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykgKTtcblx0XHRcdFx0c2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdC0tZmlsdGVyLWVtcHR5Jyk7XG5cblx0XHRcdH1cblxuXHRcdH0pO1xuXG5cdH1cblxufTtcblxuKCBpdGVtcyA9PiB7XG5cblx0aWYoaXRlbXMubGVuZ3RoKSB7XG5cblx0XHRbLi4uaXRlbXNdLmZvckVhY2goIHNlbGVjdCA9PiB3aW5kb3cuc2VsZWN0cyhzZWxlY3QpKTtcblxuXHR9XG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XG5cblx0XHRjb25zdCBpc1NlbGVjdCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuc2VsZWN0Jyk7XG5cblx0XHRbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdCcpXS5mb3JFYWNoKCBzZWxlY3QgPT4ge1xuXG5cdFx0XHRpZiAoIHNlbGVjdCA9PT0gaXNTZWxlY3QgKSB7XG5cblx0XHRcdFx0aWYgKCBldmVudC50YXJnZXQuY2xvc2VzdCgnLnNlbGVjdF9fdmFsdWUnKSApIHtcblxuXHRcdFx0XHRcdHNlbGVjdC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1vcGVuJyk7XG5cblx0XHRcdFx0fSBlbHNlIGlmICggZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09ICdJTlBVVCcgKSB7XG5cblx0XHRcdFx0XHRzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpO1xuXG5cdFx0XHR9XG5cblx0XHR9KTtcblxuXHR9KTtcblxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdCcpKTsiLCIoIHN3aXBlckNvbnRhaW5lciA9PiB7XG5cblx0aWYoIXN3aXBlckNvbnRhaW5lci5sZW5ndGgpIHtcblxuXHRcdHJldHVybjtcblxuXHR9XG5cblx0Wy4uLnN3aXBlckNvbnRhaW5lcl0uZm9yRWFjaCggc3dpcGUgPT4ge1xuXG5cdFx0bGV0IG15U3dpcGUgPSBudWxsLFxuXHRcdFx0dG9nZ2xlU3dpcGUgPSBudWxsLFxuXHRcdFx0cmVzZXRTd2lwZSA9IG51bGw7XG5cblx0XHRjb25zdCBzd2lwZU5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuXHRcdFx0ICBzd2lwZUJ0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcblx0XHRcdCAgc3dpcGVOZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyksXG5cdFx0XHQgIHN3aXBlUHJldiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpLFxuXHRcdFx0ICBpdGVtcyA9IHN3aXBlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zd2lwZXItc2xpZGUnKSxcblx0XHRcdCAgY291bnQgPSBpdGVtcy5sZW5ndGgsXG5cdFx0XHQgIGJpbGxib2FyZCA9IHN3aXBlLmNsYXNzTGlzdC5jb250YWlucygnc3dpcGVyLWNvbnRhaW5lci0tYmlsbGJvYXJkJyksXG5cdFx0XHQgIG5ld3MgPSBzd2lwZS5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXBlci1jb250YWluZXItLW5ld3MnKSxcblx0XHRcdCAgcHJldmlldyA9IHN3aXBlLmNsYXNzTGlzdC5jb250YWlucygnc3dpcGVyLWNvbnRhaW5lci0tcHJldmlldycpLFxuXHRcdFx0ICBwcm9kdWN0ID0gc3dpcGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzd2lwZXItY29udGFpbmVyLS1wcm9kdWN0JyksXG5cdFx0XHQgIGNlcnRpZmljYXRlcyA9IHN3aXBlLmNsYXNzTGlzdC5jb250YWlucygnc3dpcGVyLWNvbnRhaW5lci0tY2VydGlmaWNhdGVzJyksXG5cdFx0XHQgIGNvbnN1bHRhdGlvbnMgPSBzd2lwZS5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXBlci1jb250YWluZXItLWNvbnN1bHRhdGlvbnMnKSxcblx0XHRcdCAgcHJvZHVjdEFydGljbGUgPSBzd2lwZS5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXBlci1jb250YWluZXItLXByb2R1Y3QtYXJ0aWNsZScpO1xuXG5cdFx0c3dpcGVOYXYuY2xhc3NOYW1lID0gJ3N3aXBlci1wYWdpbmF0aW9uJztcblxuXHRcdHN3aXBlQnRucy5jbGFzc05hbWUgPSAnc3dpcGVyLW5hdmlnYXRpb24nO1xuXHRcdHN3aXBlUHJldi5jbGFzc05hbWUgPSAnc3dpcGVyLWJ1dHRvbi1wcmV2IGJ1dHRvbic7XG5cdFx0c3dpcGVOZXh0LmNsYXNzTmFtZSA9ICdzd2lwZXItYnV0dG9uLW5leHQgYnV0dG9uJztcblxuXHRcdHN3aXBlUHJldi5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCdQcmV2aW91cyBzbGlkZScpO1xuXHRcdHN3aXBlTmV4dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCdOZXh0IHNsaWRlJyk7XG5cblx0XHRzd2lwZVByZXYuaW5uZXJIVE1MID0gJzxzdmcgd2lkdGg9XCI0MFwiIGhlaWdodD1cIjQwXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx1c2UgeGxpbms6aHJlZj1cIiNzdmctYXJyb3ctY2hldnJvbi1sZWZ0XCIvPjwvc3ZnPic7XG5cdFx0c3dpcGVOZXh0LmlubmVySFRNTCA9ICc8c3ZnIHdpZHRoPVwiNDBcIiBoZWlnaHQ9XCI0MFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dXNlIHhsaW5rOmhyZWY9XCIjc3ZnLWFycm93LWNoZXZyb24tcmlnaHRcIi8+PC9zdmc+JztcblxuXHRcdHN3aXBlQnRucy5hcHBlbmQoc3dpcGVQcmV2KTtcblx0XHRzd2lwZUJ0bnMuYXBwZW5kKHN3aXBlTmV4dCk7XG5cblx0XHRzd2lwZS5hcHBlbmQoc3dpcGVCdG5zKTtcblx0XHRzd2lwZS5hcHBlbmQoc3dpcGVOYXYpO1xuXG5cdFx0cmVzZXRTd2lwZSA9ICgpID0+IHtcblxuXHRcdFx0aWYobXlTd2lwZSkge1xuXG5cdFx0XHRcdG15U3dpcGUuZGVzdHJveShmYWxzZSx0cnVlKTtcblx0XHRcdFx0bXlTd2lwZSA9IHVuZGVmaW5lZDtcblxuXHRcdFx0fVxuXG5cdFx0XHRzd2lwZU5hdi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG5cdFx0XHRzd2lwZUJ0bnMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuXG5cdFx0XHRpZiAoIHN3aXBlLmNsb3Nlc3QoJy5zd2lwZXItY29udGFpbmVyLXN0eWxlJykgKSB7XG5cblx0XHRcdFx0c3dpcGUuY2xvc2VzdCgnLnN3aXBlci1jb250YWluZXItc3R5bGUnKS5jbGFzc0xpc3QucmVtb3ZlKCdzd2lwZXItY29udGFpbmVyLXN0eWxlJyk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGlmIChuZXdzKSB7XG5cblx0XHRcdHN3aXBlLnBhcmVudE5vZGUuYXBwZW5kKHN3aXBlQnRucyk7XG5cdFx0XHRzd2lwZS5wYXJlbnROb2RlLmFwcGVuZChzd2lwZU5hdik7XG5cblx0XHRcdHRvZ2dsZVN3aXBlID0gKCkgPT4ge1xuXG5cdFx0XHRcdHJlc2V0U3dpcGUoKTtcblxuXHRcdFx0XHRpZiAoIHdpbmRvdy5pbm5lcldpZHRoID49IDEyNTAgJiYgY291bnQgPCA1ICkge1xuXG5cdFx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzd2lwZU5hdi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG5cdFx0XHRcdHN3aXBlQnRucy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG5cblx0XHRcdFx0c3dpcGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ3N3aXBlci1jb250YWluZXItc3R5bGUnKTtcblxuXHRcdFx0XHRjb25zdCBnYXAgPSB3aW5kb3cuaW5uZXJXaWR0aCA8IDEyNTAgJiYgd2luZG93LmlubmVyV2lkdGggPiA3NjcgPyAwIDogMjQ7XG5cblx0XHRcdFx0bXlTd2lwZSA9IG5ldyBTd2lwZXIoc3dpcGUsIHtcblx0XHRcdFx0XHRsb29wOiB0cnVlLFxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogZ2FwLFxuXHRcdFx0XHRcdHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcblx0XHRcdFx0XHRzbGlkZXNQZXJHcm91cDogMSxcblx0XHRcdFx0XHRuYXZpZ2F0aW9uOiB7XG5cdFx0XHRcdFx0XHRuZXh0RWw6IHN3aXBlTmV4dCxcblx0XHRcdFx0XHRcdHByZXZFbDogc3dpcGVQcmV2XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRwYWdpbmF0aW9uOiB7XG5cdFx0XHRcdFx0XHRlbDogc3dpcGVOYXYsXG5cdFx0XHRcdFx0XHRjbGlja2FibGU6IHRydWUsXG5cdFx0XHRcdFx0XHRidWxsZXRDbGFzczogJ2J1dHRvbicsXG5cdFx0XHRcdFx0XHRidWxsZXRBY3RpdmVDbGFzczogJ2lzLWFjdGl2ZSdcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHR9XG5cblx0XHRcdHN3aXBlLmFkZEV2ZW50TGlzdGVuZXIoJ3N3aXBlclJlc2l6ZScsIHRvZ2dsZVN3aXBlKTtcblxuXHRcdH1cblxuXHRcdGlmIChjb25zdWx0YXRpb25zKSB7XG5cblx0XHRcdHN3aXBlLnBhcmVudE5vZGUuYXBwZW5kKHN3aXBlQnRucyk7XG5cdFx0XHRzd2lwZS5wYXJlbnROb2RlLmFwcGVuZChzd2lwZU5hdik7XG5cblx0XHRcdHRvZ2dsZVN3aXBlID0gKCkgPT4ge1xuXG5cdFx0XHRcdHJlc2V0U3dpcGUoKTtcblxuXHRcdFx0XHRpZiAoIHdpbmRvdy5pbm5lcldpZHRoID49IDEyNTAgJiYgY291bnQgPCAzICkge1xuXG5cdFx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzd2lwZU5hdi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG5cdFx0XHRcdHN3aXBlQnRucy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG5cblx0XHRcdFx0c3dpcGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ3N3aXBlci1jb250YWluZXItc3R5bGUnKTtcblxuXHRcdFx0XHRjb25zdCBnYXAgPSB3aW5kb3cuaW5uZXJXaWR0aCA8IDEyNTAgPyAxNiA6IDQ4O1xuXG5cdFx0XHRcdG15U3dpcGUgPSBuZXcgU3dpcGVyKHN3aXBlLCB7XG5cdFx0XHRcdFx0bG9vcDogdHJ1ZSxcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IGdhcCxcblx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAnYXV0bycsXG5cdFx0XHRcdFx0c2xpZGVzUGVyR3JvdXA6IDEsXG5cdFx0XHRcdFx0bmF2aWdhdGlvbjoge1xuXHRcdFx0XHRcdFx0bmV4dEVsOiBzd2lwZU5leHQsXG5cdFx0XHRcdFx0XHRwcmV2RWw6IHN3aXBlUHJldlxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0cGFnaW5hdGlvbjoge1xuXHRcdFx0XHRcdFx0ZWw6IHN3aXBlTmF2LFxuXHRcdFx0XHRcdFx0Y2xpY2thYmxlOiB0cnVlLFxuXHRcdFx0XHRcdFx0YnVsbGV0Q2xhc3M6ICdidXR0b24nLFxuXHRcdFx0XHRcdFx0YnVsbGV0QWN0aXZlQ2xhc3M6ICdpcy1hY3RpdmUnXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0fVxuXG5cdFx0XHRzd2lwZS5hZGRFdmVudExpc3RlbmVyKCdzd2lwZXJSZXNpemUnLCB0b2dnbGVTd2lwZSk7XG5cblx0XHR9XG5cblx0XHRpZiAoY2VydGlmaWNhdGVzKSB7XG5cblx0XHRcdHN3aXBlLnBhcmVudE5vZGUuYXBwZW5kKHN3aXBlQnRucyk7XG5cdFx0XHRzd2lwZS5wYXJlbnROb2RlLmFwcGVuZChzd2lwZU5hdik7XG5cblx0XHRcdHRvZ2dsZVN3aXBlID0gKCkgPT4ge1xuXG5cdFx0XHRcdHJlc2V0U3dpcGUoKTtcblxuXHRcdFx0XHRpZiAoIHdpbmRvdy5pbm5lcldpZHRoID49IDEyNTAgJiYgY291bnQgPCA0ICkge1xuXG5cdFx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzd2lwZU5hdi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG5cdFx0XHRcdHN3aXBlQnRucy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG5cblx0XHRcdFx0c3dpcGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ3N3aXBlci1jb250YWluZXItc3R5bGUnKTtcblxuXHRcdFx0XHRjb25zdCBnYXAgPSB3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCA/IDAgOiAyNDtcblxuXHRcdFx0XHRteVN3aXBlID0gbmV3IFN3aXBlcihzd2lwZSwge1xuXHRcdFx0XHRcdGxvb3A6IHRydWUsXG5cdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiBnYXAsXG5cdFx0XHRcdFx0c2xpZGVzUGVyVmlldzogJ2F1dG8nLFxuXHRcdFx0XHRcdHNsaWRlc1Blckdyb3VwOiAxLFxuXHRcdFx0XHRcdG5hdmlnYXRpb246IHtcblx0XHRcdFx0XHRcdG5leHRFbDogc3dpcGVOZXh0LFxuXHRcdFx0XHRcdFx0cHJldkVsOiBzd2lwZVByZXZcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHBhZ2luYXRpb246IHtcblx0XHRcdFx0XHRcdGVsOiBzd2lwZU5hdixcblx0XHRcdFx0XHRcdGNsaWNrYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRcdGJ1bGxldENsYXNzOiAnYnV0dG9uJyxcblx0XHRcdFx0XHRcdGJ1bGxldEFjdGl2ZUNsYXNzOiAnaXMtYWN0aXZlJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cblx0XHRcdH1cblxuXHRcdFx0c3dpcGUuYWRkRXZlbnRMaXN0ZW5lcignc3dpcGVyUmVzaXplJywgdG9nZ2xlU3dpcGUpO1xuXG5cdFx0fVxuXG5cdFx0aWYgKHByb2R1Y3RBcnRpY2xlKSB7XG5cblx0XHRcdHN3aXBlLnBhcmVudE5vZGUuYXBwZW5kKHN3aXBlQnRucyk7XG5cdFx0XHRzd2lwZS5wYXJlbnROb2RlLmFwcGVuZChzd2lwZU5hdik7XG5cblx0XHRcdHRvZ2dsZVN3aXBlID0gKCkgPT4ge1xuXG5cdFx0XHRcdHJlc2V0U3dpcGUoKTtcblxuXHRcdFx0XHRpZiAoIHdpbmRvdy5pbm5lcldpZHRoID49IDEyNTAgJiYgY291bnQgPCA0ICkge1xuXG5cdFx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoIHdpbmRvdy5pbm5lcldpZHRoID49IDc2OCApIHtcblxuXHRcdFx0XHRcdHN3aXBlQnRucy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHN3aXBlTmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcblxuXHRcdFx0XHRzd2lwZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnc3dpcGVyLWNvbnRhaW5lci1zdHlsZScpO1xuXG5cdFx0XHRcdGNvbnN0IGNlbnRlcmVkU2xpZGVzID0gd2luZG93LmlubmVyV2lkdGggPCA3Njg7XG5cblx0XHRcdFx0bXlTd2lwZSA9IG5ldyBTd2lwZXIoc3dpcGUsIHtcblx0XHRcdFx0XHRyZXdpbmQ6IHRydWUsXG5cdFx0XHRcdFx0Y2VudGVyZWRTbGlkZXM6IGNlbnRlcmVkU2xpZGVzLFxuXHRcdFx0XHRcdHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcblx0XHRcdFx0XHRzbGlkZXNQZXJHcm91cDogMSxcblx0XHRcdFx0XHRuYXZpZ2F0aW9uOiB7XG5cdFx0XHRcdFx0XHRuZXh0RWw6IHN3aXBlTmV4dCxcblx0XHRcdFx0XHRcdHByZXZFbDogc3dpcGVQcmV2XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRwYWdpbmF0aW9uOiB7XG5cdFx0XHRcdFx0XHRlbDogc3dpcGVOYXYsXG5cdFx0XHRcdFx0XHRjbGlja2FibGU6IHRydWUsXG5cdFx0XHRcdFx0XHRidWxsZXRDbGFzczogJ2J1dHRvbicsXG5cdFx0XHRcdFx0XHRidWxsZXRBY3RpdmVDbGFzczogJ2lzLWFjdGl2ZSdcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHR9XG5cblx0XHRcdHN3aXBlLmFkZEV2ZW50TGlzdGVuZXIoJ3N3aXBlclJlc2l6ZScsIHRvZ2dsZVN3aXBlKTtcblxuXHRcdH1cblxuXHRcdGlmIChwcmV2aWV3KSB7XG5cblx0XHRcdHN3aXBlLnBhcmVudE5vZGUuYXBwZW5kKHN3aXBlQnRucyk7XG5cdFx0XHRzd2lwZS5wYXJlbnROb2RlLmFwcGVuZChzd2lwZU5hdik7XG5cblx0XHRcdHRvZ2dsZVN3aXBlID0gKCkgPT4ge1xuXG5cdFx0XHRcdHJlc2V0U3dpcGUoKTtcblxuXHRcdFx0XHRzd2lwZU5hdi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG5cdFx0XHRcdHN3aXBlQnRucy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG5cblx0XHRcdFx0c3dpcGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ3N3aXBlci1jb250YWluZXItc3R5bGUnKTtcblxuXHRcdFx0XHRjb25zdCBnYXAgPSB3aW5kb3cuaW5uZXJXaWR0aCA8IDEyNTAgPyAwIDogMjQ7XG5cblx0XHRcdFx0bXlTd2lwZSA9IG5ldyBTd2lwZXIoc3dpcGUsIHtcblx0XHRcdFx0XHRyZXdpbmQ6IHRydWUsXG5cdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiBnYXAsXG5cdFx0XHRcdFx0c2xpZGVzUGVyVmlldzogJ2F1dG8nLFxuXHRcdFx0XHRcdHNsaWRlc1Blckdyb3VwOiAxLFxuLy9cdFx0XHRcdFx0c2xpZGVzUGVyR3JvdXBBdXRvOiB0cnVlLFxuXHRcdFx0XHRcdG5hdmlnYXRpb246IHtcblx0XHRcdFx0XHRcdG5leHRFbDogc3dpcGVOZXh0LFxuXHRcdFx0XHRcdFx0cHJldkVsOiBzd2lwZVByZXZcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHBhZ2luYXRpb246IHtcblx0XHRcdFx0XHRcdGVsOiBzd2lwZU5hdixcblx0XHRcdFx0XHRcdGNsaWNrYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRcdGJ1bGxldENsYXNzOiAnYnV0dG9uJyxcblx0XHRcdFx0XHRcdGJ1bGxldEFjdGl2ZUNsYXNzOiAnaXMtYWN0aXZlJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cblx0XHRcdH1cblxuXHRcdFx0c3dpcGUuYWRkRXZlbnRMaXN0ZW5lcignc3dpcGVyUmVzaXplJywgdG9nZ2xlU3dpcGUpO1xuXG5cdFx0fVxuXG5cdFx0aWYgKGJpbGxib2FyZCkge1xuXG5cdFx0XHR0b2dnbGVTd2lwZSA9ICgpID0+IHtcblxuXHRcdFx0XHRyZXNldFN3aXBlKCk7XG5cblx0XHRcdFx0c3dpcGUucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdzd2lwZXItY29udGFpbmVyLXN0eWxlJyk7XG5cblx0XHRcdFx0aWYoIHdpbmRvdy5pbm5lcldpZHRoIDwgMTI1MCApIHtcblxuXHRcdFx0XHRcdHN3aXBlTmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcblxuXHRcdFx0XHRcdG15U3dpcGUgPSBuZXcgU3dpcGVyKHN3aXBlLCB7XG5cdFx0XHRcdFx0XHRsb29wOiB0cnVlLFxuXHRcdFx0XHRcdFx0cGFnaW5hdGlvbjoge1xuXHRcdFx0XHRcdFx0XHRlbDogc3dpcGVOYXYsXG5cdFx0XHRcdFx0XHRcdGNsaWNrYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0YnVsbGV0Q2xhc3M6ICdidXR0b24nLFxuXHRcdFx0XHRcdFx0XHRidWxsZXRBY3RpdmVDbGFzczogJ2lzLWFjdGl2ZSdcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0c3dpcGVCdG5zLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcblxuXHRcdFx0XHRcdG15U3dpcGUgPSBuZXcgU3dpcGVyKHN3aXBlLCB7XG5cdFx0XHRcdFx0XHRsb29wOiB0cnVlLFxuXHRcdFx0XHRcdFx0YXV0b3BsYXk6IHtcblx0XHRcdFx0XHRcdFx0ZGVsYXk6IDUwMDBcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRlZmZlY3Q6ICdmYWRlJyxcblx0XHRcdFx0XHRcdGZhZGVFZmZlY3Q6IHtcblx0XHRcdFx0XHRcdFx0Y3Jvc3NGYWRlOiB0cnVlXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0bmF2aWdhdGlvbjoge1xuXHRcdFx0XHRcdFx0XHRuZXh0RWw6IHN3aXBlTmV4dCxcblx0XHRcdFx0XHRcdFx0cHJldkVsOiBzd2lwZVByZXZcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdFx0c3dpcGUuYWRkRXZlbnRMaXN0ZW5lcignc3dpcGVyUmVzaXplJywgdG9nZ2xlU3dpcGUpO1xuXG5cdFx0fVxuXG5cdFx0aWYgKHByb2R1Y3QpIHtcblxuXHRcdFx0c3dpcGVOYXYuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuXG5cdFx0XHRjb25zdCBnYWxsZXJ5UHJldmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWN0LWdhbGxlcnlfX3ByZXZpZXctbGluaycpO1xuXG5cdFx0XHR0b2dnbGVTd2lwZSA9ICgpID0+IHtcblxuXHRcdFx0XHR0b2dnbGVTd2lwZSA9IGZhbHNlO1xuXG5cdFx0XHRcdHN3aXBlLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnc3dpcGVyLWNvbnRhaW5lci1zdHlsZScpO1xuXG5cdFx0XHRcdG5ldyBTd2lwZXIoc3dpcGUsIHtcblx0XHRcdFx0XHRsb29wOiB0cnVlLFxuXHRcdFx0XHRcdG5hdmlnYXRpb246IHtcblx0XHRcdFx0XHRcdG5leHRFbDogc3dpcGVOZXh0LFxuXHRcdFx0XHRcdFx0cHJldkVsOiBzd2lwZVByZXZcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdG9uOiB7XG5cdFx0XHRcdFx0XHRzbGlkZUNoYW5nZSA6ICgpID0+IHtcblxuXHRcdFx0XHRcdFx0XHRbLi4uZ2FsbGVyeVByZXZpZXddLmZvckVhY2goIChfbGluayxpbmRleCkgPT4gX2xpbmsucGFyZW50Tm9kZS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1jdXJyZW50Jywgc3dpcGUuc3dpcGVyLnJlYWxJbmRleCA9PT0gaW5kZXgpICk7XG5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRzd2lwZS5hZGRFdmVudExpc3RlbmVyKCdzd2lwZXJKc0xvYWQnLCB0b2dnbGVTd2lwZSk7XG5cblx0fSk7XG5cblx0bGV0IHJlc2l6ZVRpbWVvdXQgPSBudWxsLFxuXHRcdHdpbmRvd1dpZHRoT0xkID0gd2luZG93LmlubmVyV2lkdGg7XG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuXG5cdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4ge1xuXG5cdFx0XHRpZiAocmVzaXplVGltZW91dCA9PT0gbnVsbCkge1xuXG5cdFx0XHRcdHJlc2l6ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCAoKSA9PiB7XG5cblx0XHRcdFx0XHRyZXNpemVUaW1lb3V0ID0gbnVsbDtcblxuXHRcdFx0XHRcdGlmKHdpbmRvd1dpZHRoT0xkICE9PSB3aW5kb3cuaW5uZXJXaWR0aCkge1xuXG5cdFx0XHRcdFx0XHR3aW5kb3dXaWR0aE9MZCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG5cdFx0XHRcdFx0XHRpZiAod2luZG93LlN3aXBlcikge1xuXG5cdFx0XHRcdFx0XHRcdFsuLi5zd2lwZXJDb250YWluZXJdLmZvckVhY2goIHN3aXBlID0+IHN3aXBlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwic3dpcGVyUmVzaXplXCIpKSApO1xuXG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fSwgMTAwMCk7XG5cblx0XHRcdH1cblxuXHRcdH0pO1xuXG5cdH0pO1xuXG5cdGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG5cdHNjcmlwdC5zcmMgPSAnL2pzL3N3aXBlci5taW4uanMnO1xuXG5cdHNjcmlwdC5vbmxvYWQgPSAoKSA9PiBbLi4uc3dpcGVyQ29udGFpbmVyXS5mb3JFYWNoKCBzd2lwZSA9PiBzd2lwZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcInN3aXBlckpzTG9hZFwiKSkgKTtcblxuXHRzZXRUaW1lb3V0KCAoKSA9PiBkb2N1bWVudC5oZWFkLmFwcGVuZChzY3JpcHQpLCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmFzdExvYWRTY3JpcHQnKSA/IDAgOiAxMDAwMCk7XG5cbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zd2lwZXItY29udGFpbmVyJykpOyIsIiggdGFicyA9PiB7XG5cblx0aWYgKCB0YWJzLmxlbmd0aCA+IDAgKSB7XG5cblx0XHRbLi4udGFic10uZm9yRWFjaCggdGFiID0+IHtcblxuXHRcdFx0Y29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKSxcblx0XHRcdFx0ICBhcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwic3ZnXCIpO1xuXG5cdFx0XHRhcnJvdy5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcInZpZXdCb3hcIiwgXCIwIDAgMjQgMjRcIik7XG5cdFx0XHRhcnJvdy5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcIndpZHRoXCIsIDI0KTtcblx0XHRcdGFycm93LnNldEF0dHJpYnV0ZU5TKG51bGwsIFwiaGVpZ2h0XCIsIDI0KTtcblxuXHRcdFx0YXJyb3cuaW5uZXJIVE1MID0gJzx1c2UgeGxpbms6aHJlZj1cIiNzdmctYXJyb3ctY2hldnJvbi1kb3duXCIvPic7XG5cblx0XHRcdGNvbnN0IGJ0bnMgPSB0YWIucXVlcnlTZWxlY3RvckFsbCgnLnRhYnNfX2J0bicpLFxuXHRcdFx0XHQgIGl0ZW1zID0gdGFiLnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJzX19pdGVtJyk7XG5cblx0XHRcdFsuLi5idG5zXS5mb3JFYWNoKCAoYnRuLGluZGV4KSA9PiB7XG5cblx0XHRcdFx0YnRuLmFwcGVuZENoaWxkKGFycm93LmNsb25lTm9kZSh0cnVlKSk7XG5cblx0XHRcdFx0Y29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcblx0XHRcdFx0b3B0aW9uLnZhbHVlID0gaW5kZXg7XG5cdFx0XHRcdG9wdGlvbi50ZXh0Q29udGVudCA9IGJ0bi50ZXh0Q29udGVudDtcblx0XHRcdFx0c2VsZWN0LmFwcGVuZChvcHRpb24pO1xuXG5cdFx0XHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuXHRcdFx0XHRcdFsuLi5idG5zXS5mb3JFYWNoKCAoX2J0bixfaW5kZXgpID0+IHtcblxuXHRcdFx0XHRcdFx0X2J0bi5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnLCBfYnRuID09PSBidG4pO1xuXHRcdFx0XHRcdFx0aXRlbXNbX2luZGV4XS5jbGFzc0xpc3QudG9nZ2xlKCd2aXN1YWxseWhpZGRlbicsIF9idG4gIT09IGJ0bik7XG5cblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHR9KTtcblxuXHRcdFx0fSk7XG5cblx0XHRcdFsuLi5pdGVtc10uZm9yRWFjaCggaXRlbSA9PiB7XG5cblx0XHRcdFx0aXRlbS5hZGRFdmVudExpc3RlbmVyKCdzZXRBY3RpdmUnLCAoKT0+IHtcblxuXHRcdFx0XHRcdFsuLi5pdGVtc10uZm9yRWFjaCggKF9pdGVtLF9pbmRleCkgPT4ge1xuXG5cdFx0XHRcdFx0XHRidG5zW19pbmRleF0uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJywgX2l0ZW0gPT09IGl0ZW0pO1xuXHRcdFx0XHRcdFx0X2l0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgndmlzdWFsbHloaWRkZW4nLCBfaXRlbSAhPT0gaXRlbSk7XG5cblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHR9KTtcblxuXHRcdFx0fSk7XG5cblx0XHRcdHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldmVudCA9PiB7XG5cblx0XHRcdFx0Y29uc3QgaW5kZXggPSBwYXJzZUludChzZWxlY3QudmFsdWUpO1xuXG5cdFx0XHRcdFsuLi5idG5zXS5mb3JFYWNoKCAoYnRuLF9pbmRleCkgPT4ge1xuXG5cdFx0XHRcdFx0YnRuLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScsIF9pbmRleCA9PT0gaW5kZXgpO1xuXHRcdFx0XHRcdGl0ZW1zW19pbmRleF0uY2xhc3NMaXN0LnRvZ2dsZSgndmlzdWFsbHloaWRkZW4nLCBfaW5kZXggIT09IGluZGV4KTtcblxuXHRcdFx0XHR9KTtcblxuXHRcdFx0fSk7XG5cblx0XHRcdHRhYi5xdWVyeVNlbGVjdG9yKCcudGFic19fbmF2JykucHJlcGVuZChzZWxlY3QpO1xuXG5cdFx0fSk7XG5cblx0fVxuXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFicycpKTtcblxuLyooIHRhYnMgPT4ge1xuXG5cdGlmICggdGFicy5sZW5ndGggPiAwICkge1xuXG5cdFx0Wy4uLnRhYnNdLmZvckVhY2goIHRhYiA9PiB7XG5cblx0XHRcdGNvbnN0IGJ0biA9IHRhYi5xdWVyeVNlbGVjdG9yQWxsKCcudGFic19fYnRuJyksXG5cdFx0XHRcdCAgaXRlbSA9IHRhYi5xdWVyeVNlbGVjdG9yQWxsKCcudGFic19faXRlbScpLFxuXHRcdFx0XHQgIG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5cdFx0XHRbLi4uYnRuXS5mb3JFYWNoKCAoYnRuLGluZGV4KSA9PiB7XG5cblx0XHRcdFx0Y29uc3QgX2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG5cdFx0XHRcdF9idG4uc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG5cblx0XHRcdFx0X2J0bi5jbGFzc05hbWUgPSBpbmRleCA9PT0gMCA/ICdidG4gYnRuLS1ncmV5JyA6ICdidG4gYnRuLS1vdXRsaW5lJztcblxuXHRcdFx0XHRfYnRuLnRleHRDb250ZW50ID0gYnRuLnRleHRDb250ZW50O1xuXG5cdFx0XHRcdG5hdi5hcHBlbmRDaGlsZChfYnRuKTtcblxuXHRcdFx0XHRfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG5cdFx0XHRcdFx0Wy4uLm5hdi5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuJyldLmZvckVhY2goIChidG4saW5kZXgpID0+IHtcblxuXHRcdFx0XHRcdFx0YnRuLmNsYXNzTGlzdC50b2dnbGUoJ2J0bi0tZ3JleScsIF9idG4gPT09IGJ0bik7XG5cdFx0XHRcdFx0XHRidG4uY2xhc3NMaXN0LnRvZ2dsZSgnYnRuLS1vdXRsaW5lJywgX2J0biAhPT0gYnRuKTtcblxuXHRcdFx0XHRcdFx0aXRlbVtpbmRleF0uY2xhc3NMaXN0LnRvZ2dsZSgndmlzdWFsbHloaWRkZW4nLCBfYnRuICE9PSBidG4pO1xuXG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0YnRuLnJlbW92ZSgpO1xuXG5cdFx0XHR9KTtcblxuXHRcdFx0bmF2LmNsYXNzTGlzdC5hZGQoJ3RhYnNfX25hdicpO1xuXHRcdFx0dGFiLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJiZWdpbicsIG5hdik7XG5cblx0XHR9KTtcblxuXHR9XG5cbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJzJykpOyovIiwiLy8gdGl0bGVcblxuKCB0b29sdGlwcyA9PiB7XG5cblx0aWYodG9vbHRpcHMubGVuZ3RoKXtcblxuXHRcdFsuLi50b29sdGlwc10uZm9yRWFjaCggdG9vbHRpcCA9PiB7XG5cblx0XHRcdGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG5cdFx0XHR0aXRsZS5jbGFzc05hbWUgPSAndG9vbHRpcC10aXRsZV9faW5uZXInO1xuXHRcdFx0dGl0bGUudGV4dENvbnRlbnQgPSB0b29sdGlwLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuXG5cdFx0XHR0b29sdGlwLnJlbW92ZUF0dHJpYnV0ZSgndGl0bGUnKTtcblx0XHRcdHRvb2x0aXAuYXBwZW5kKHRpdGxlKTtcblxuXHRcdH0pO1xuXG5cdFx0bGV0IHRpbWVvdXQgPSBudWxsO1xuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZXZlbnQgPT4ge1xuXG5cdFx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCAoKSA9PiB7XG5cblx0XHRcdFx0aWYgKCBldmVudC50YXJnZXQgIT09IGRvY3VtZW50ICkge1xuXG5cdFx0XHRcdFx0Y29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy50b29sdGlwLXRpdGxlJyk7XG5cblx0XHRcdFx0XHRbLi4udG9vbHRpcHNdLmZvckVhY2goIHRvb2x0aXAgPT4ge1xuXG5cdFx0XHRcdFx0XHRpZih0YXJnZXQgIT09IHRvb2x0aXApIHtcblxuXHRcdFx0XHRcdFx0XHR0b29sdGlwLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXNob3cnKTtcblxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRpZiAodGltZW91dCAhPT0gbnVsbCkge1xuXG5cdFx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aW1lb3V0ID0gc2V0VGltZW91dCggKCk9PiB7XG5cblx0XHRcdFx0XHRcdGlmICggdGFyZ2V0ICkge1xuXG5cdFx0XHRcdFx0XHRcdHRhcmdldC5jbGFzc0xpc3QuYWRkKCdpcy1zaG93Jyk7XG5cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdH0sIDMwMCk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9KTtcblxuXHRcdH0pO1xuXG5cdH1cblxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvb2x0aXAtdGl0bGUnKSk7XG5cbi8vIHRvb2x0aXBcblxuZnVuY3Rpb24gVG9vbHRpcCh0b29sdGlwKSB7XG5cblx0bGV0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIobXV0YXRpb25SZWNvcmRzID0+IHtcblxuXHRcdGNvbnN0IHQgPSBtdXRhdGlvblJlY29yZHNbMF0udGFyZ2V0LFxuXHRcdFx0ICBpbm5lciA9IHQucXVlcnlTZWxlY3RvcignLnRvb2x0aXBfX2lubmVyJyk7XG5cblx0XHRpZih0Lm9wZW4pIHtcblxuXHRcdFx0Y29uc3QgcmVjdCA9IGlubmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG5cdFx0XHRpZihkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggPCByZWN0LnJpZ2h0KSB7XG5cblx0XHRcdFx0Ly8g0LvQtdCy0LXQtVxuXG5cdFx0XHRcdGlubmVyLnN0eWxlLm1hcmdpbkxlZnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggLSByZWN0LnJpZ2h0ICsgJ3B4JztcblxuXHRcdFx0fSBlbHNlIGlmKHJlY3QubGVmdCA8IDApIHtcblxuXHRcdFx0XHQvLyDQv9GA0LDQstC10LVcblxuXHRcdFx0XHRpbm5lci5zdHlsZS5tYXJnaW5MZWZ0ID0gLXJlY3QubGVmdCArICdweCc7XG5cblx0XHRcdH1cblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdGlubmVyLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcblxuXHRcdH1cblxuXHR9KTtcblxuXHRjb25zdCBidG4gPSB0b29sdGlwLnF1ZXJ5U2VsZWN0b3IoJy50b29sdGlwX19idG4nKTtcblxuXHRvYnNlcnZlci5vYnNlcnZlKHRvb2x0aXAsIHtcblxuXHRcdGF0dHJpYnV0ZXMgOiB0cnVlXG5cblx0fSk7XG5cblx0dG9vbHRpcC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuXG5cdFx0aWYgKCB3aW5kb3cuaW5uZXJXaWR0aCA+PSAxMjUwICkge1xuXG5cdFx0XHR0b29sdGlwLm9wZW4gPSB0cnVlO1xuXG5cdFx0fVxuXG5cdH0pO1xuXG5cdHRvb2x0aXAuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcblxuXHRcdGlmICggd2luZG93LmlubmVyV2lkdGggPj0gMTI1MCApIHtcblxuXHRcdFx0dG9vbHRpcC5vcGVuID0gZmFsc2U7XG5cblx0XHR9XG5cblx0fSk7XG5cbn1cblxuKCB0b29sdGlwcyA9PiB7XG5cblx0aWYoIHRvb2x0aXBzLmxlbmd0aCApIHtcblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xuXG5cdFx0XHRpZiAoIGV2ZW50LnRhcmdldCAhPT0gZG9jdW1lbnQgKSB7XG5cblx0XHRcdFx0Y29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy50b29sdGlwJyk7XG5cblx0XHRcdFx0Wy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b29sdGlwJyldLmZvckVhY2goIHRvb2x0aXAgPT4ge1xuXG5cdFx0XHRcdFx0aWYodGFyZ2V0ICE9PSB0b29sdGlwKSB7XG5cblx0XHRcdFx0XHRcdHRvb2x0aXAub3BlbiA9IGZhbHNlO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH0pO1xuXG5cdFx0XHR9XG5cblx0XHR9KTtcblxuXHRcdFsuLi50b29sdGlwc10uZm9yRWFjaCggdG9vbHRpcCA9PiBuZXcgVG9vbHRpcCh0b29sdGlwKSk7XG5cblx0fVxuXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9vbHRpcCcpKTsiLCIoIHRvc3RlciA9PiB7XG5cblx0aWYodG9zdGVyKXtcblxuXHRcdGxldCBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiOyBcIiksXG5cdFx0XHRjb29raWVzVmFsdWUgPSBudWxsO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjb29raWVzLmxlbmd0aDsgaSsrKSB7XG5cblx0XHRcdGxldCBjb29raWUgPSBjb29raWVzW2ldLnNwbGl0KFwiPVwiKTtcblxuXHRcdFx0aWYgKGNvb2tpZVswXSA9PT0gXCJ0b3N0ZXJcIikge1xuXG5cdFx0XHRcdGNvb2tpZXNWYWx1ZSA9IGNvb2tpZVsxXTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0Y29uc3QgYnRuID0gdG9zdGVyLnF1ZXJ5U2VsZWN0b3IoJy50b3N0ZXJfX2Nsb3NlJyk7XG5cdFx0Y29uc3QgbmFtZUN1cnJlbnQgPSB0b3N0ZXIuZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKTtcblxuXHRcdGlmICggY29va2llc1ZhbHVlICE9PSBudWxsICYmIGNvb2tpZXNWYWx1ZS5zcGxpdChcInxcIikuaW5jbHVkZXMobmFtZUN1cnJlbnQpICkge1xuXG5cdFx0XHR0b3N0ZXIucmVtb3ZlKCk7XG5cblx0XHR9XG5cdFx0ZWxzZSB7XG5cblx0XHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXG5cdFx0XHRcdGNvb2tpZXNWYWx1ZSA9IGNvb2tpZXNWYWx1ZSA9PT0gbnVsbCA/IG5hbWVDdXJyZW50IDogY29va2llc1ZhbHVlICsgJ3wnICsgbmFtZUN1cnJlbnQ7XG5cblx0XHRcdFx0ZG9jdW1lbnQuY29va2llID0gXCJ0b3N0ZXI9XCIgKyBjb29raWVzVmFsdWUgKyBcIjsgcGF0aD0vXCI7XG5cblx0XHRcdFx0dG9zdGVyLnJlbW92ZSgpO1xuXG5cdFx0XHR9KTtcblxuXHRcdH1cblxuXHR9XG5cbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3N0ZXInKSk7IiwiKCB2aWRlb3MgPT4ge1xuXG5cdGlmKHZpZGVvcy5sZW5ndGgpe1xuXG5cdFx0ZnVuY3Rpb24gWW91VHViZUdldElEKHVybCkge1xuXG5cdFx0XHRsZXQgSUQgPSAnJztcblxuXHRcdFx0dXJsID0gdXJsLnJlcGxhY2UoLyg+fDwpL2dpLCcnKS5zcGxpdCgvKHZpXFwvfHY9fFxcL3ZcXC98eW91dHVcXC5iZVxcL3xcXC9lbWJlZFxcLykvKTtcblxuXHRcdFx0aWYodXJsWzJdICE9PSB1bmRlZmluZWQpIHtcblxuXHRcdFx0XHRJRCA9IHVybFsyXS5zcGxpdCgvW14wLTlhLXpfXFwtXS9pKTtcblx0XHRcdFx0SUQgPSBJRFswXTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRJRCA9IHVybDtcblxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gSUQ7XG5cblx0XHR9XG5cblx0XHRpZiAoIHZpZGVvcy5sZW5ndGggPiAxICkge1xuXG5cdFx0XHQvLyBJbmplY3QgWW91VHViZSBBUEkgc2NyaXB0XG5cdFx0XHRjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblx0XHRcdHNjcmlwdC5zcmMgPSBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3BsYXllcl9hcGlcIjtcblx0XHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kKHNjcmlwdCk7XG5cblx0XHR9XG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcblxuXHRcdFx0Y29uc3QgY2xpcFByZXZpZXcgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnZpZGVvLWNsaXBfX2xpbmsnKTtcblxuXHRcdFx0aWYgKCBjbGlwUHJldmlldyApIHtcblxuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHRcdGNvbnN0IGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuXG5cdFx0XHRcdGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ2FsbG93ZnVsbHNjcmVlbicsICcnKTtcblx0XHRcdFx0aWZyYW1lLnNldEF0dHJpYnV0ZSgnc3JjJywgJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLycgKyBZb3VUdWJlR2V0SUQoY2xpcFByZXZpZXcuaHJlZikgKyAnP3JlbD0wJnNob3dpbmZvPTAmYXV0b3BsYXk9MSZlbmFibGVqc2FwaT0xJmh0bWw1PTEnKTtcblxuXHRcdFx0XHRjbGlwUHJldmlldy5wYXJlbnROb2RlLmFwcGVuZChpZnJhbWUpO1xuXHRcdFx0XHRjbGlwUHJldmlldy5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2lzLWlmcmFtZScpO1xuXG5cdFx0XHRcdGlmICggdmlkZW9zLmxlbmd0aCA+IDEgKSB7XG5cblx0XHRcdFx0XHRbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnZpZGVvLWNsaXAuaXMtaWZyYW1lJyldLmZvckVhY2goIHZpZGVvID0+IHtcblxuXHRcdFx0XHRcdFx0aWYgKCBjbGlwUHJldmlldy5wYXJlbnROb2RlID09PSB2aWRlbyApIHtcblxuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Y29uc3QgaWZyYW1lID0gdmlkZW8ucXVlcnlTZWxlY3RvcignaWZyYW1lJyk7XG5cblx0XHRcdFx0XHRcdGlmICggaWZyYW1lICkge1xuXG5cdFx0XHRcdFx0XHRcdGxldCBwbGF5ZXIgPSBuZXcgWVQuUGxheWVyKGlmcmFtZSwge1xuXHRcdFx0XHRcdFx0XHRcdGV2ZW50czoge1xuXHRcdFx0XHRcdFx0XHRcdFx0b25SZWFkeTogKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRwbGF5ZXIucGF1c2VWaWRlbygpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0fSk7XG5cblx0fVxuXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudmlkZW8tY2xpcCcpKTsiXX0=
