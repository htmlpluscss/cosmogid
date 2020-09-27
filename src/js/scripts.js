/*! js-cookie v3.0.0-rc.0 | MIT */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self,function(){var r=e.Cookies,n=e.Cookies=t();n.noConflict=function(){return e.Cookies=r,n}}())}(this,function(){"use strict";function e(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)e[n]=r[n]}return e}var t={read:function(e){return e.replace(/%3B/g,";")},write:function(e){return e.replace(/;/g,"%3B")}};return function r(n,i){function o(r,o,u){if("undefined"!=typeof document){"number"==typeof(u=e({},i,u)).expires&&(u.expires=new Date(Date.now()+864e5*u.expires)),u.expires&&(u.expires=u.expires.toUTCString()),r=t.write(r).replace(/=/g,"%3D"),o=n.write(String(o),r);var c="";for(var f in u)u[f]&&(c+="; "+f,!0!==u[f]&&(c+="="+u[f].split(";")[0]));return document.cookie=r+"="+o+c}}return Object.create({set:o,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var r=document.cookie?document.cookie.split("; "):[],i={},o=0;o<r.length;o++){var u=r[o].split("="),c=u.slice(1).join("="),f=t.read(u[0]).replace(/%3D/g,"=");if(i[f]=n.read(c,f),e===f)break}return e?i[e]:i}},remove:function(t,r){o(t,"",e({},r,{expires:-1}))},withAttributes:function(t){return r(this.converter,e({},this.attributes,t))},withConverter:function(t){return r(e({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(i)},converter:{value:Object.freeze(n)}})}(t,{path:"/"})});

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

})();
/*((slide) => {

	"use strict";

	if(!slide.length) {

		return;

	}

	Array.from(slide, elem =>

		elem.querySelector('.slide__btn').addEventListener('click', () => {

			elem.classList.toggle('is-open');

			setTimeout( () => {

				if(elem.getBoundingClientRect().top - MI.headerHeight < 0 && elem.classList.contains('is-open')){

					const top = elem.getBoundingClientRect().top - MI.headerHeight - parseInt(window.getComputedStyle(elem).marginTop) + window.pageYOffset;

					window.scrollTo({
						top: top,
						behavior: 'smooth'
					});

				}

			},100);

		}));

})(document.querySelectorAll('.slide'));


// accordion
((accordion) => {

	"use strict";

	if(!accordion.length) {

		return;

	}

	Array.from(accordion, elem => {

		var active = null,
			btns = elem.querySelectorAll('.accordion__btn'),
			items = elem.querySelectorAll('.accordion__item');

		Array.from(btns, (btn,index) => {

			btn.addEventListener('click', () => {

				btn.closest('.accordion__item').classList.toggle('is-open');

				if(index === active){

					active = null;

				}
				else if(items.length > 1) {

					active = index;

					Array.from(items, (el,_index) => {

						if(active !== _index) {

							el.classList.remove('is-open');

						}

					});

					setTimeout( () => {

						if(!MI.isInViewport(items[active])){

							items[active].scrollIntoView({ behavior: 'smooth' });

						}

					},100);

				}

			});

		});

	});

})(document.querySelectorAll('.accordion'));*/
/*((ask) => {

	"use strict";

	if(!ask.length) {

		return;

	}

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

})(document.querySelectorAll('.ask'));*/

((menu) => {

	"use strict";

	if(!menu) {

		return;

	}

	const letter = menu.querySelector('.menu-filter__letter'),
		  country = menu.querySelector('.menu-filter__country'),
		  form = menu.querySelector('.menu-filter__form'),
		  formInput = form.querySelector('.input'),
		  items = menu.querySelectorAll('.menu-filter__item');

	const result = () => {

		const _letter = letter.value,
			  _country = country.value;

		Array.from(items, el => {

			if(_letter === "all" && _country === "all") {

				el.classList.remove('hide');

			}
			else {

				let visible = true;

				if(_letter !== "all") {

					if(_letter !== el.getAttribute('data-letter')){

						visible = false;

					}

				}

				if(_country !== "all") {

					if(_country !== el.getAttribute('data-country')){

						visible = false;

					}

				}

				el.classList.toggle('hide', !visible);

			}

		});

	};


	letter.addEventListener('change', () => result());

	country.addEventListener('change', () => result());

})(document.querySelector('.menu-filter'));
((forms) => {

	if(!forms.length) {

		return;

	}

	const headerCount = document.querySelector('.header__cart .header__icons-count');

	Array.from(forms, form => {

		const inputID = form.querySelector('[name="id"]'),
			  storeID = form.querySelector('[name="storeid"]'),
			  sku = form.querySelector('.card-product__sku-value'),
			  sale = form.querySelector('.card-product__sale-value'),
			  btn = form.querySelector('.card-product__btn'),
			  price = form.querySelector('.card-product__price-value'),
			  priceOld = form.querySelector('.card-product__old-price-value');

		// кнопки варианты товара

		const articleID = form.querySelectorAll('.form-buy__article-input');

		Array.from(articleID, input => {

			input.addEventListener('change', () => {

				sku.textContent = input.getAttribute('data-sku');
				price.textContent = input.getAttribute('data-price');

				if(priceOld) {

					if(input.getAttribute('data-old-price')) {

						priceOld.parentNode.classList.remove('hide');
						priceOld.textContent = input.getAttribute('data-old-price');

					}
					else {

						priceOld.parentNode.classList.add('hide');

					}

				}

				if(sale) {

					if(input.getAttribute('data-sale')) {

						sale.parentNode.classList.remove('hide');
						sale.textContent = input.getAttribute('data-sale');

					}
					else {

						sale.parentNode.classList.add('hide');

					}

				}

				if(storeID) {

					storeID.value = input.getAttribute('data-storeid') ? input.getAttribute('data-storeid') : 1;

				}

				if(input.getAttribute('data-in-basket')) {

					btn.querySelector('a').classList.remove('hide');
					btn.querySelector('button').classList.add('hide');

				}
				else {

					btn.querySelector('a').classList.add('hide');
					btn.querySelector('button').classList.remove('hide');

				}

			});

		});

		// отправка

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

					const cart = JSON.parse(xhr.responseText);
					console.log(cart);

					if(cart.headerCount) {

						headerCount.textContent = cart.headerCount;

					}

					if(cart.mode === "add") {

						form.querySelector('.card-product__btn a').classList.remove('hide');
						form.querySelector('.card-product__btn button').classList.add('hide');

						if(articleID.length) {

							Array.from(articleID, input => {

								if(input.value === cart.articleid) {

									input.setAttribute('data-in-basket', 'in basket');

								}

							});

						}

					}

				}

			}

			xhr.send(formData);

		});

	});

})(document.querySelectorAll('.form-buy'));

// кнопка в один клик

((btns) => {

	if(!btns.length) {

		return;

	}

	Array.from(btns, form => {

		form.addEventListener('click', event => {

			alert('модалка заказа, в нее передаем id');

		});

	});

})(document.querySelectorAll('.buy-one-click'));
((form) => {

	if(!form) {

		return;

	}

	PubSub.subscribe('modalShow', (...data) => {

		if (data[1] === 'cities') {

			setTimeout( () => document.querySelector('.form-city__input').focus(), 1000);

		}

	});

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

				CG.hideModal();

			}

		}

		xhr.send(formData);

	});

})(document.querySelector('.form-city-confirm'));


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

					resultList.innerHTML = xhr.responseText;
					form.classList.remove('is-loading');

				}

			}

			xhr.send(formData);

		}

	});

	form.addEventListener('submit', event => event.preventDefault());

})(document.querySelector('.form-city'));
/*((filter)=>{

	"use strict";

	if(!filter) {

		return;

	}

	const btnOpen = document.querySelectorAll('.filter-open'),
		  btnClose = filter.querySelectorAll('.filter-close'),
		  btnRange = filter.querySelectorAll('.filter__range-item');

	Array.from(btnOpen, el =>
		el.addEventListener('click', () =>
			document.body.classList.add('filter-show')));


	Array.from(btnClose, el =>
		el.addEventListener('click', () =>
			document.body.classList.remove('filter-show')));


	Array.from(btnRange, el => {

		const btn = el.querySelector('.filter__range-reset'),
			  input = el.querySelector('.input');

		btn.addEventListener('click', () => {

			input.value = '';
			input.focus();
			btn.classList.add('hide');

		});

		input.addEventListener('input', () => btn.classList.toggle('hide', !input.value));

		if(!input.value) {

			btn.classList.add('hide');

		}

	});


})(document.querySelector('.filter'));*/
((header) => {

	"use strict";

	if(!header) {

		return;

	}

	const headerFixed = header.querySelector('.header__fixed');

	CG.headerHeight = headerFixed.clientHeight;

//	PubSub.subscribe('windowScroll', () => headerFixed.classList.toggle('is-scroll', window.pageYOffset > 0));

	PubSub.subscribe('windowWidthResize', () => {

		CG.headerHeight = headerFixed.clientHeight;

		document.documentElement.style.setProperty("--heightHeaderFixed", CG.headerHeight + 'px');

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

			headerFixed.classList.remove('is-fixed');

		}
		else if(window.pageYOffset > window.innerHeight){

			headerFixed.classList.toggle('is-fixed', window.pageYOffset <= ScrollTopPrev);

		}

		ScrollTopPrev = window.pageYOffset;

	});

})(document.querySelector('.header'));
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

((btn) => {

	"use strict";

	if(!btn) {

		return;

	}

	const menu = document.querySelector('.menu-catalog'),
		  level1 = menu.querySelectorAll('.menu-catalog__head'),
		  level2 = menu.querySelectorAll('.menu-catalog__head-level2'),
		  btnClose = menu.querySelector('.menu-catalog__close'),
		  btnBack = menu.querySelector('.menu-catalog__back'),
		  category = menu.querySelector('.menu-catalog__current-category'),
		  categoryTextDefault = category.textContent;

	let	level1Scroll = 0,
		level2Scroll = 0,
		level1Open = null,
		level2Open = null;

	const menuOpen = () => {

		document.documentElement.classList.add('scroll-behavior-off');

		CG.OpenMenu = true;

		// записываем значение скролла страницы
		CG.windowScrollOld = window.pageYOffset;
		window.scrollTo(0, 0);

		document.body.classList.add('menu-open');

		PubSub.publish('SwiperAutoPlayStop');

	};

	const menuClose = () => {

		document.body.classList.remove('menu-open');

		window.scrollTo(0, CG.windowScrollOld);

		CG.OpenMenu = false;

		setTimeout( () => document.documentElement.classList.remove('scroll-behavior-off'), 100);

		PubSub.publish('SwiperAutoPlayStart');

	};

	// открыть|закрыть меню

	btn.addEventListener('click', () => CG.OpenMenu ? menuClose() : menuOpen());

	// закрыть меню

	btnClose.addEventListener('click', () => menuClose);

	document.addEventListener('click', event => {

		if(document.body.classList.contains('menu-open') && !event.target.closest('.js-toggle-menu') && !event.target.closest('.menu-catalog')) {

			menuClose();

		}

	});

	// На уровень назад

	btnBack.addEventListener('click', () => {

		if(menu.classList.contains('is-level3')) {

			menu.style.height = level1Open.nextElementSibling.scrollHeight + "px";

			menu.classList.remove('is-level3');

			Array.from(level2, elem => elem.parentNode.classList.remove('is-open'));

			window.scrollTo(0, level2Scroll);

			category.textContent = level1Open.textContent;

		}
		else if (menu.classList.contains('is-level2')) {

			menu.style.height = menu.querySelector('.menu-catalog__inner').clientHeight + "px";

			menu.classList.remove('is-level2');

			Array.from(level1, elem => elem.classList.remove('is-open'));

			window.scrollTo(0, level1Scroll);

			btnBack.classList.add('hide');

			category.textContent = categoryTextDefault;

		}
		else {

			console.log('что-то не так');

		}

	});


	// первый уровень

	Array.from(level1, el => {

		el.addEventListener('click', evt => {

			evt.preventDefault();

			level1Scroll = window.pageYOffset;

			menu.style.height = el.nextElementSibling.scrollHeight + "px";

			menu.classList.add('is-level2');

			Array.from(level1, elem => elem.classList.toggle('is-open', elem === el));

			level1Open = el;

			btnBack.classList.remove('hide');

			category.textContent = el.textContent;

		});

	});

	// второй уровень

	Array.from(level2, el => {

		el.addEventListener('click', evt => {

			evt.preventDefault();

			level2Scroll = window.pageYOffset;

			menu.style.height = el.parentNode.nextElementSibling.scrollHeight + "px";

			menu.classList.add('is-level3');

			Array.from(level2, elem => elem.parentNode.classList.toggle('is-open', elem === el));

			level2Open = el;

			category.textContent = el.textContent;

		});

	});

})(document.querySelector('.js-toggle-menu'));
((modal)=>{

	"use strict";

	if(!modal) {

		return;

	}

	var items = modal.querySelectorAll('.modal__item'),
		btns = document.querySelectorAll('[data-modal]'),
		box = modal.querySelector('.modal__box'),
		wrapper = document.querySelector('.wrapper'),
		windowScroll = window.pageYOffset;

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

		document.body.classList.add('modal-show');
		window.scrollTo(0,0);

		CG.activeModal.focus();

		PubSub.publish('modalShow', selector);

		PubSub.publish('SwiperAutoPlayStop');

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
/*((footer) => {

	"use strict";

	if ('IntersectionObserver' in window) {

		const options = {
			root: null,
			rootMargin: '0px',
			threshold: [.1]
		};

		const headerFixed = document.querySelector('.header__fixed');

		const callback = (entries, observer) =>

			Array.from(entries, entry => {

				document.body.classList.toggle('bg-footer', entry.intersectionRatio > 0.1 && window.pageYOffset > 0);

				headerFixed.classList.toggle('is-hidden', entry.intersectionRatio > 0.1);

			});

		const observer = new IntersectionObserver(callback, options);

		observer.observe(footer);

	}

})(document.querySelector('.footer'));*/
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

		result.addEventListener('click', event => {

			const remove = event.target.closest('.search__result-remove');

			if(remove) {

				remove.closest('.search__result-item').classList.add('is-remove');

				console.log('удаляем результаты')

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
((swiperContainer)=>{

	"use strict";

	if(!swiperContainer.length) {

		return;

	}

	let swiperInit = window.Swiper;

	Array.from(swiperContainer, swipe => {

		let mySwipe = null,
			toggleSwipe = null,
			resetSwipe = null;

		const swipeControls = document.createElement('div'),
			  swipeNav = document.createElement('div'),
			  swipeBtns = document.createElement('div'),
			  swipeNext = document.createElement('button'),
			  swipePrev = document.createElement('button'),
			  items = swipe.querySelectorAll('.swiper-slide'),
			  count = items.length,
			  cardList = swipe.classList.contains('swiper-container--card-list'),
			  product = swipe.classList.contains('swiper-container--product'),
			  billboard = swipe.classList.contains('swiper-container--billboard'),
			  autoplay = swipe.getAttribute('data-autoplay') * 1000;

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

		if (cardList) {

			let row = swipe.getAttribute('data-count-row');

			toggleSwipe = () => {

				resetSwipe();

				swipe.parentNode.classList.remove('swiper-container-style');

				if (window.innerWidth >= 1200) {

					if(row === 'auto') {

						swipe.parentNode.classList.add('swiper-container-style');

						swipeBtns.classList.remove('hide');
						swipeControls.classList.remove('hide');

						mySwipe = new Swiper(swipe, {
							loop: false,
							slidesPerView: row,
							navigation: {
								nextEl: swipeNext,
								prevEl: swipePrev
							}
						});

					}
					else {

						row = parseInt(row);

						if (count > row) {

							swipe.parentNode.classList.add('swiper-container-style');

							swipeBtns.classList.remove('hide');
							swipeControls.classList.remove('hide');

							mySwipe = new Swiper(swipe, {
								loop: false,
								slidesPerView: row,
								slidesPerGroup: row,
								spaceBetween: 40,
								navigation: {
									nextEl: swipeNext,
									prevEl: swipePrev
								}
							});

						}

					}

				}

			}

		}

		if (product) {

			swipeControls.classList.remove('hide');
			swipePrev.classList.add('swiper-button-disabled');

			toggleSwipe = () => {

				toggleSwipe = false;

				new Swiper(swipe, {
					loop: false,
					preloadImages: false,
					navigation: {
						nextEl: swipeNext,
						prevEl: swipePrev
					}
				});

			}

		}

		if (billboard) {

			swipeBtns.classList.add('hide');
			swipeNav.classList.remove('hide');
			swipeControls.classList.remove('hide');

			toggleSwipe = () => {

				toggleSwipe = false;

				new Swiper(swipe, {
					loop: true,
					preloadImages: false,
					autoplay: {
						delay: autoplay
					},
					pagination: {
						el: swipeNav,
						clickable: true,
						bulletElement: 'button',
						bulletClass: 'button',
						bulletActiveClass: 'is-active'
					}
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

		if(!swiperInit) {

			swiperInit = true;

			const script = document.createElement('script');

			script.type = 'text/javascript';
			script.async = true;
			script.src = '/js/swiper.min.js';

			script.onload = () => PubSub.publish('swiperJsLoad');

			document.head.appendChild(script);

		}

	});

	PubSub.subscribe('SwiperAutoPlayStop', () =>
		Array.from(swiperContainer, swipe =>
			swipe.swiper && swipe.swiper.autoplay.running && swipe.swiper.autoplay.stop()));

	PubSub.subscribe('SwiperAutoPlayStart', () =>
		Array.from(swiperContainer, swipe =>
			swipe.swiper && swipe.getAttribute('data-autoplay') && swipe.swiper.autoplay.start()));

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



// tabs

if(document.querySelector('.tabs')) {

	Array.from(document.querySelectorAll('.tabs'), (tab) => {

		let btn = tab.querySelectorAll('.tabs__btn'),
			item = tab.querySelectorAll('.tabs__item'),
			nav = document.createElement('div');

		Array.from(btn, (el,index) => {

			const _btn = document.createElement('button');

			_btn.setAttribute('type','button');

			_btn.className = 'button tabs__nav-btn';

			_btn.textContent = el.textContent;

			nav.appendChild(_btn);

			el.classList.add('visuallyhidden');

			_btn.addEventListener('click', () => {

				Array.from(item, (elem,inx) => {

					btn[inx].classList.toggle('tabs__nav-btn--active', inx === index);
					elem.classList.toggle('tabs__item--active', inx === index);

				});

			});

		});

		nav.classList.add('tabs__nav');

		btn = nav.querySelectorAll('.tabs__nav-btn');

		item[0].classList.add('tabs__item--active');
		btn[0].classList.add('tabs__nav-btn--active');

		tab.insertBefore(nav, item[0]);

	});

};*/
((forms) => {

	if(!forms.length) {

		return;

	}

	const headerCount = document.querySelector('.header__wishlist .header__icons-count');

	Array.from(forms, form => {

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

					const obj = JSON.parse(xhr.responseText);
					console.log(obj);

					if(obj.headerCount) {

						headerCount.classList.toggle('hide', obj.headerCount === 0);
						headerCount.textContent = obj.headerCount;

					}

					if(obj.mode === 'add') {

						form.elements.mode.value = 'del';

					}
					else if (obj.mode === 'del') {

						form.elements.mode.value = 'add';

					}

				}

			}

			xhr.send(formData);

		});

	});

})(document.querySelectorAll('.form-wishlist'));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzLmpzIiwiYWNjb3JkaW9uLmpzIiwiYXNrLmpzIiwiYnJhbmQuanMiLCJidXkuanMiLCJjaXR5LmpzIiwiZmlsdGVyLmpzIiwiaGVhZGVyLmpzIiwibWFzay5qcyIsIm1lbnUuanMiLCJtb2RhbC5qcyIsInNjcm9sbC1vYnNlcnZlci5qcyIsInNlYXJjaC5qcyIsInNlbGVjdC5qcyIsInN3aXBlci5qcyIsInRhYi5qcyIsIndpc2hsaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJfanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgVVRGLThcclxuXHJcbsKpIGtvdnJpZ2luXHJcbtCS0YHQtSDQv9GA0LDQstCwINGA0LDQt9GA0LXRiNC10L3Ri1xyXG7QutGA0LDRgdC40LLRi9C5INC00LjQt9Cw0LnQvSDQtNC+0LvQttC10L0g0LjQvNC10YLRjCDQutGA0LDRgdC40LLRi9C5INC60L7QtMKuXHJcblxyXG5odHRwczovL2dpdGh1Yi5jb20vaHRtbHBsdXNjc3MvXHJcblxyXG4qL1xyXG5cclxuKCgpID0+IHtcclxuXHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cdHdpbmRvdy5DRyA9IHdpbmRvdy5DRyB8fCB7fTtcclxuXHRDRy5yZXNpemVUaW1lb3V0ID0gbnVsbDtcclxuXHRDRy53aW5kb3dXaWR0aE9MZCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XHJcblxyXG5cdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4ge1xyXG5cclxuXHRcdFx0aWYgKCFDRy5yZXNpemVUaW1lb3V0KSB7XHJcblxyXG5cdFx0XHRcdENHLnJlc2l6ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0Q0cucmVzaXplVGltZW91dCA9IG51bGw7XHJcblxyXG5cdFx0XHRcdFx0aWYoQ0cud2luZG93V2lkdGhPTGQgIT09IHdpbmRvdy5pbm5lcldpZHRoKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRDRy53aW5kb3dXaWR0aE9MZCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cclxuXHRcdFx0XHRcdFx0UHViU3ViLnB1Ymxpc2goJ3dpbmRvd1dpZHRoUmVzaXplJyk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9LCAxMDApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4gUHViU3ViLnB1Ymxpc2goJ3dpbmRvd1Njcm9sbCcpKSk7XHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IFB1YlN1Yi5wdWJsaXNoKCdET01Db250ZW50TG9hZGVkJykpO1xyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiBQdWJTdWIucHVibGlzaCgncGFnZUxvYWQnKSk7XHJcblxyXG5cdC8vINC+0LHRgNCw0LHQvtGC0YfQuNC6INCw0L3QuNC80LDRhtC40LlcclxuXHRDRy5jc3NBbmltYXRpb24gPSBhID0+IHt2YXIgYixjLGQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNzc2FuaW1hdGlvblwiKTtzd2l0Y2goYSl7Y2FzZSdhbmltYXRpb24nOmI9e1wiYW5pbWF0aW9uXCI6XCJhbmltYXRpb25lbmRcIixcIk9BbmltYXRpb25cIjpcIm9BbmltYXRpb25FbmRcIixcIk1vekFuaW1hdGlvblwiOlwiYW5pbWF0aW9uZW5kXCIsXCJXZWJraXRBbmltYXRpb25cIjpcIndlYmtpdEFuaW1hdGlvbkVuZFwifTticmVhaztjYXNlJ3RyYW5zaXRpb24nOmI9e1widHJhbnNpdGlvblwiOlwidHJhbnNpdGlvbmVuZFwiLFwiT1RyYW5zaXRpb25cIjpcIm9UcmFuc2l0aW9uRW5kXCIsXCJNb3pUcmFuc2l0aW9uXCI6XCJ0cmFuc2l0aW9uZW5kXCIsXCJXZWJraXRUcmFuc2l0aW9uXCI6XCJ3ZWJraXRUcmFuc2l0aW9uRW5kXCJ9fWZvcihjIGluIGIpaWYoZC5zdHlsZVtjXSE9PXVuZGVmaW5lZClyZXR1cm4gYltjXX07XHJcblxyXG5cdC8vIERldGVybWluZSBpZiBhbiBlbGVtZW50IGlzIGluIHRoZSB2aXNpYmxlIHZpZXdwb3J0XHJcblx0Q0cuaXNJblZpZXdwb3J0ID0gZWwgPT4gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wID49IDAgJiYgZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tIDw9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbn0pKCk7IiwiLyooKHNsaWRlKSA9PiB7XHJcblxyXG5cdFwidXNlIHN0cmljdFwiO1xyXG5cclxuXHRpZighc2xpZGUubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdEFycmF5LmZyb20oc2xpZGUsIGVsZW0gPT5cclxuXHJcblx0XHRlbGVtLnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZV9fYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRlbGVtLmNsYXNzTGlzdC50b2dnbGUoJ2lzLW9wZW4nKTtcclxuXHJcblx0XHRcdHNldFRpbWVvdXQoICgpID0+IHtcclxuXHJcblx0XHRcdFx0aWYoZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSBNSS5oZWFkZXJIZWlnaHQgPCAwICYmIGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1vcGVuJykpe1xyXG5cclxuXHRcdFx0XHRcdGNvbnN0IHRvcCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gTUkuaGVhZGVySGVpZ2h0IC0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbSkubWFyZ2luVG9wKSArIHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcblx0XHRcdFx0XHR3aW5kb3cuc2Nyb2xsVG8oe1xyXG5cdFx0XHRcdFx0XHR0b3A6IHRvcCxcclxuXHRcdFx0XHRcdFx0YmVoYXZpb3I6ICdzbW9vdGgnXHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSwxMDApO1xyXG5cclxuXHRcdH0pKTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkZScpKTtcclxuXHJcblxyXG4vLyBhY2NvcmRpb25cclxuKChhY2NvcmRpb24pID0+IHtcclxuXHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cdGlmKCFhY2NvcmRpb24ubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdEFycmF5LmZyb20oYWNjb3JkaW9uLCBlbGVtID0+IHtcclxuXHJcblx0XHR2YXIgYWN0aXZlID0gbnVsbCxcclxuXHRcdFx0YnRucyA9IGVsZW0ucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbl9fYnRuJyksXHJcblx0XHRcdGl0ZW1zID0gZWxlbS5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uX19pdGVtJyk7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShidG5zLCAoYnRuLGluZGV4KSA9PiB7XHJcblxyXG5cdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdGJ0bi5jbG9zZXN0KCcuYWNjb3JkaW9uX19pdGVtJykuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtb3BlbicpO1xyXG5cclxuXHRcdFx0XHRpZihpbmRleCA9PT0gYWN0aXZlKXtcclxuXHJcblx0XHRcdFx0XHRhY3RpdmUgPSBudWxsO1xyXG5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZihpdGVtcy5sZW5ndGggPiAxKSB7XHJcblxyXG5cdFx0XHRcdFx0YWN0aXZlID0gaW5kZXg7XHJcblxyXG5cdFx0XHRcdFx0QXJyYXkuZnJvbShpdGVtcywgKGVsLF9pbmRleCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdFx0aWYoYWN0aXZlICE9PSBfaW5kZXgpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0ZWwuY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpO1xyXG5cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoICgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRcdGlmKCFNSS5pc0luVmlld3BvcnQoaXRlbXNbYWN0aXZlXSkpe1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpdGVtc1thY3RpdmVdLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG5cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdH0sMTAwKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbicpKTsqLyIsIi8qKChhc2spID0+IHtcclxuXHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cdGlmKCFhc2subGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGxldCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKG11dGF0aW9uUmVjb3JkcyA9PiB7XHJcblxyXG5cdFx0Y29uc3QgdCA9IG11dGF0aW9uUmVjb3Jkc1swXS50YXJnZXQsXHJcblx0XHRcdCAgcmVjdCA9IHQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG5cdFx0Y29uc29sZS5sb2cocmVjdC5sZWZ0ID4gd2luZG93LmlubmVyV2lkdGggLSByZWN0LnJpZ2h0KTtcclxuXHJcblx0XHRpZih0Lm9wZW4pIHtcclxuXHJcblx0XHRcdGNvbnN0IGlubmVyID0gdC5xdWVyeVNlbGVjdG9yKCcuYXNrX19pbm5lcicpO1xyXG5cclxuXHRcdFx0aWYocmVjdC5sZWZ0ID4gd2luZG93LmlubmVyV2lkdGggLSByZWN0LnJpZ2h0KSB7XHJcblxyXG5cdFx0XHRcdC8vINC/0YDQsNCy0LXQtVxyXG5cclxuXHRcdFx0XHRpbm5lci5zdHlsZS5sZWZ0ID0gJ2F1dG8nO1xyXG5cdFx0XHRcdGlubmVyLnN0eWxlLnJpZ2h0ID0gMDtcclxuXHRcdFx0XHRpbm5lci5zdHlsZS53aWR0aCA9IHJlY3QubGVmdCArICdweCc7XHJcblxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cclxuXHRcdFx0XHQvLyDQu9C10LLQtdC1XHJcblxyXG5cdFx0XHRcdGlubmVyLnN0eWxlLnJpZ2h0ID0gJ2F1dG8nO1xyXG5cdFx0XHRcdGlubmVyLnN0eWxlLmxlZnQgPSAwO1xyXG5cdFx0XHRcdGlubmVyLnN0eWxlLndpZHRoID0gd2luZG93LmlubmVyV2lkdGggLSByZWN0LnJpZ2h0ICsgJ3B4JztcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxuXHRBcnJheS5mcm9tKGFzaywgZWwgPT4ge1xyXG5cclxuXHRcdG9ic2VydmVyLm9ic2VydmUoZWwsIHtcclxuXHJcblx0XHRcdGF0dHJpYnV0ZXMgOiB0cnVlXHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHRkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHtcclxuXHJcblx0XHRBcnJheS5mcm9tKGFzaywgZWwgPT4ge1xyXG5cclxuXHRcdFx0aWYoZXZ0LnRhcmdldC5jbG9zZXN0KCcuYXNrJykgIT09IGVsKXtcclxuXHJcblx0XHRcdFx0ZWwub3BlbiA9IGZhbHNlO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hc2snKSk7Ki8iLCJcclxuKChtZW51KSA9PiB7XHJcblxyXG5cdFwidXNlIHN0cmljdFwiO1xyXG5cclxuXHRpZighbWVudSkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRjb25zdCBsZXR0ZXIgPSBtZW51LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWZpbHRlcl9fbGV0dGVyJyksXHJcblx0XHQgIGNvdW50cnkgPSBtZW51LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWZpbHRlcl9fY291bnRyeScpLFxyXG5cdFx0ICBmb3JtID0gbWVudS5xdWVyeVNlbGVjdG9yKCcubWVudS1maWx0ZXJfX2Zvcm0nKSxcclxuXHRcdCAgZm9ybUlucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuaW5wdXQnKSxcclxuXHRcdCAgaXRlbXMgPSBtZW51LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWZpbHRlcl9faXRlbScpO1xyXG5cclxuXHRjb25zdCByZXN1bHQgPSAoKSA9PiB7XHJcblxyXG5cdFx0Y29uc3QgX2xldHRlciA9IGxldHRlci52YWx1ZSxcclxuXHRcdFx0ICBfY291bnRyeSA9IGNvdW50cnkudmFsdWU7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShpdGVtcywgZWwgPT4ge1xyXG5cclxuXHRcdFx0aWYoX2xldHRlciA9PT0gXCJhbGxcIiAmJiBfY291bnRyeSA9PT0gXCJhbGxcIikge1xyXG5cclxuXHRcdFx0XHRlbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cclxuXHRcdFx0XHRsZXQgdmlzaWJsZSA9IHRydWU7XHJcblxyXG5cdFx0XHRcdGlmKF9sZXR0ZXIgIT09IFwiYWxsXCIpIHtcclxuXHJcblx0XHRcdFx0XHRpZihfbGV0dGVyICE9PSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGV0dGVyJykpe1xyXG5cclxuXHRcdFx0XHRcdFx0dmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZihfY291bnRyeSAhPT0gXCJhbGxcIikge1xyXG5cclxuXHRcdFx0XHRcdGlmKF9jb3VudHJ5ICE9PSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY291bnRyeScpKXtcclxuXHJcblx0XHRcdFx0XHRcdHZpc2libGUgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0ZWwuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScsICF2aXNpYmxlKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fTtcclxuXHJcblxyXG5cdGxldHRlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiByZXN1bHQoKSk7XHJcblxyXG5cdGNvdW50cnkuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4gcmVzdWx0KCkpO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtZmlsdGVyJykpOyIsIigoZm9ybXMpID0+IHtcclxuXHJcblx0aWYoIWZvcm1zLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRjb25zdCBoZWFkZXJDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2NhcnQgLmhlYWRlcl9faWNvbnMtY291bnQnKTtcclxuXHJcblx0QXJyYXkuZnJvbShmb3JtcywgZm9ybSA9PiB7XHJcblxyXG5cdFx0Y29uc3QgaW5wdXRJRCA9IGZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJpZFwiXScpLFxyXG5cdFx0XHQgIHN0b3JlSUQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwic3RvcmVpZFwiXScpLFxyXG5cdFx0XHQgIHNrdSA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmNhcmQtcHJvZHVjdF9fc2t1LXZhbHVlJyksXHJcblx0XHRcdCAgc2FsZSA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmNhcmQtcHJvZHVjdF9fc2FsZS12YWx1ZScpLFxyXG5cdFx0XHQgIGJ0biA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmNhcmQtcHJvZHVjdF9fYnRuJyksXHJcblx0XHRcdCAgcHJpY2UgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLXByb2R1Y3RfX3ByaWNlLXZhbHVlJyksXHJcblx0XHRcdCAgcHJpY2VPbGQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLXByb2R1Y3RfX29sZC1wcmljZS12YWx1ZScpO1xyXG5cclxuXHRcdC8vINC60L3QvtC/0LrQuCDQstCw0YDQuNCw0L3RgtGLINGC0L7QstCw0YDQsFxyXG5cclxuXHRcdGNvbnN0IGFydGljbGVJRCA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0tYnV5X19hcnRpY2xlLWlucHV0Jyk7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShhcnRpY2xlSUQsIGlucHV0ID0+IHtcclxuXHJcblx0XHRcdGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuXHJcblx0XHRcdFx0c2t1LnRleHRDb250ZW50ID0gaW5wdXQuZ2V0QXR0cmlidXRlKCdkYXRhLXNrdScpO1xyXG5cdFx0XHRcdHByaWNlLnRleHRDb250ZW50ID0gaW5wdXQuZ2V0QXR0cmlidXRlKCdkYXRhLXByaWNlJyk7XHJcblxyXG5cdFx0XHRcdGlmKHByaWNlT2xkKSB7XHJcblxyXG5cdFx0XHRcdFx0aWYoaW5wdXQuZ2V0QXR0cmlidXRlKCdkYXRhLW9sZC1wcmljZScpKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRwcmljZU9sZC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHRcdFx0XHRcdFx0cHJpY2VPbGQudGV4dENvbnRlbnQgPSBpbnB1dC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb2xkLXByaWNlJyk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0XHRwcmljZU9sZC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYoc2FsZSkge1xyXG5cclxuXHRcdFx0XHRcdGlmKGlucHV0LmdldEF0dHJpYnV0ZSgnZGF0YS1zYWxlJykpIHtcclxuXHJcblx0XHRcdFx0XHRcdHNhbGUucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRcdHNhbGUudGV4dENvbnRlbnQgPSBpbnB1dC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2FsZScpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdFx0c2FsZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYoc3RvcmVJRCkge1xyXG5cclxuXHRcdFx0XHRcdHN0b3JlSUQudmFsdWUgPSBpbnB1dC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RvcmVpZCcpID8gaW5wdXQuZ2V0QXR0cmlidXRlKCdkYXRhLXN0b3JlaWQnKSA6IDE7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYoaW5wdXQuZ2V0QXR0cmlidXRlKCdkYXRhLWluLWJhc2tldCcpKSB7XHJcblxyXG5cdFx0XHRcdFx0YnRuLnF1ZXJ5U2VsZWN0b3IoJ2EnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRidG4ucXVlcnlTZWxlY3RvcignYnV0dG9uJykuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0YnRuLnF1ZXJ5U2VsZWN0b3IoJ2EnKS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRidG4ucXVlcnlTZWxlY3RvcignYnV0dG9uJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyDQvtGC0L/RgNCw0LLQutCwXHJcblxyXG5cdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0Y29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSksXHJcblx0XHRcdFx0ICB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcblx0XHRcdHhoci5vcGVuKFwiUE9TVFwiLCBmb3JtLmdldEF0dHJpYnV0ZSgnYWN0aW9uJykpO1xyXG5cdFx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIlgtUmVxdWVzdGVkLVdpdGhcIiwgXCJYTUxIdHRwUmVxdWVzdFwiKTtcclxuXHJcblx0XHRcdHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdGlmICh4aHIucmVhZHlTdGF0ZSAhPSA0KXtcclxuXHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xyXG5cclxuXHRcdFx0XHRcdGNvbnN0IGNhcnQgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coY2FydCk7XHJcblxyXG5cdFx0XHRcdFx0aWYoY2FydC5oZWFkZXJDb3VudCkge1xyXG5cclxuXHRcdFx0XHRcdFx0aGVhZGVyQ291bnQudGV4dENvbnRlbnQgPSBjYXJ0LmhlYWRlckNvdW50O1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRpZihjYXJ0Lm1vZGUgPT09IFwiYWRkXCIpIHtcclxuXHJcblx0XHRcdFx0XHRcdGZvcm0ucXVlcnlTZWxlY3RvcignLmNhcmQtcHJvZHVjdF9fYnRuIGEnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRcdGZvcm0ucXVlcnlTZWxlY3RvcignLmNhcmQtcHJvZHVjdF9fYnRuIGJ1dHRvbicpLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0XHRcdGlmKGFydGljbGVJRC5sZW5ndGgpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0QXJyYXkuZnJvbShhcnRpY2xlSUQsIGlucHV0ID0+IHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRpZihpbnB1dC52YWx1ZSA9PT0gY2FydC5hcnRpY2xlaWQpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdGlucHV0LnNldEF0dHJpYnV0ZSgnZGF0YS1pbi1iYXNrZXQnLCAnaW4gYmFza2V0Jyk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHhoci5zZW5kKGZvcm1EYXRhKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybS1idXknKSk7XHJcblxyXG4vLyDQutC90L7Qv9C60LAg0LIg0L7QtNC40L0g0LrQu9C40LpcclxuXHJcbigoYnRucykgPT4ge1xyXG5cclxuXHRpZighYnRucy5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0QXJyYXkuZnJvbShidG5zLCBmb3JtID0+IHtcclxuXHJcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0YWxlcnQoJ9C80L7QtNCw0LvQutCwINC30LDQutCw0LfQsCwg0LIg0L3QtdC1INC/0LXRgNC10LTQsNC10LwgaWQnKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnV5LW9uZS1jbGljaycpKTsiLCIoKGZvcm0pID0+IHtcclxuXHJcblx0aWYoIWZvcm0pIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0UHViU3ViLnN1YnNjcmliZSgnbW9kYWxTaG93JywgKC4uLmRhdGEpID0+IHtcclxuXHJcblx0XHRpZiAoZGF0YVsxXSA9PT0gJ2NpdGllcycpIHtcclxuXHJcblx0XHRcdHNldFRpbWVvdXQoICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNpdHlfX2lucHV0JykuZm9jdXMoKSwgMTAwMCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcblx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKSxcclxuXHRcdFx0ICB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcblx0XHR4aHIub3BlbihcIlBPU1RcIiwgZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpKTtcclxuXHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiWC1SZXF1ZXN0ZWQtV2l0aFwiLCBcIlhNTEh0dHBSZXF1ZXN0XCIpO1xyXG5cclxuXHRcdHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XHJcblxyXG5cdFx0XHRpZiAoeGhyLnJlYWR5U3RhdGUgIT0gNCl7XHJcblxyXG5cdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcclxuXHJcblx0XHRcdFx0Q0cuaGlkZU1vZGFsKCk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHhoci5zZW5kKGZvcm1EYXRhKTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1jaXR5LWNvbmZpcm0nKSk7XHJcblxyXG5cclxuKChmb3JtKSA9PiB7XHJcblxyXG5cdGlmKCFmb3JtKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGNvbnN0IGlucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZm9ybS1jaXR5X19pbnB1dCcpLFxyXG5cdFx0ICByZXN1bHQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNpdHlfX3Jlc3VsdCcpO1xyXG5cclxuXHRpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRpZihpbnB1dC52YWx1ZS5sZW5ndGggPiAzICYmIGV2ZW50LmtleSAhPT0gJ2VudGVyJyl7XHJcblxyXG5cdFx0XHRmb3JtLmNsYXNzTGlzdC5hZGQoJ2lzLWxvYWRpbmcnKTtcclxuXHJcblx0XHRcdGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pLFxyXG5cdFx0XHRcdCAgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG5cdFx0XHR4aHIub3BlbihcIlBPU1RcIiwgZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpKTtcclxuXHRcdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJYLVJlcXVlc3RlZC1XaXRoXCIsIFwiWE1MSHR0cFJlcXVlc3RcIik7XHJcblxyXG5cdFx0XHR4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRpZiAoeGhyLnJlYWR5U3RhdGUgIT09IDQpe1xyXG5cclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XHJcblxyXG5cdFx0XHRcdFx0cmVzdWx0TGlzdC5pbm5lckhUTUwgPSB4aHIucmVzcG9uc2VUZXh0O1xyXG5cdFx0XHRcdFx0Zm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1sb2FkaW5nJyk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHhoci5zZW5kKGZvcm1EYXRhKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxuXHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGV2ZW50ID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCkpO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY2l0eScpKTsiLCIvKigoZmlsdGVyKT0+e1xyXG5cclxuXHRcInVzZSBzdHJpY3RcIjtcclxuXHJcblx0aWYoIWZpbHRlcikge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRjb25zdCBidG5PcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpbHRlci1vcGVuJyksXHJcblx0XHQgIGJ0bkNsb3NlID0gZmlsdGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWx0ZXItY2xvc2UnKSxcclxuXHRcdCAgYnRuUmFuZ2UgPSBmaWx0ZXIucXVlcnlTZWxlY3RvckFsbCgnLmZpbHRlcl9fcmFuZ2UtaXRlbScpO1xyXG5cclxuXHRBcnJheS5mcm9tKGJ0bk9wZW4sIGVsID0+XHJcblx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XHJcblx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnZmlsdGVyLXNob3cnKSkpO1xyXG5cclxuXHJcblx0QXJyYXkuZnJvbShidG5DbG9zZSwgZWwgPT5cclxuXHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cclxuXHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdmaWx0ZXItc2hvdycpKSk7XHJcblxyXG5cclxuXHRBcnJheS5mcm9tKGJ0blJhbmdlLCBlbCA9PiB7XHJcblxyXG5cdFx0Y29uc3QgYnRuID0gZWwucXVlcnlTZWxlY3RvcignLmZpbHRlcl9fcmFuZ2UtcmVzZXQnKSxcclxuXHRcdFx0ICBpbnB1dCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dCcpO1xyXG5cclxuXHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcblx0XHRcdGlucHV0LnZhbHVlID0gJyc7XHJcblx0XHRcdGlucHV0LmZvY3VzKCk7XHJcblx0XHRcdGJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0aW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiBidG4uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScsICFpbnB1dC52YWx1ZSkpO1xyXG5cclxuXHRcdGlmKCFpbnB1dC52YWx1ZSkge1xyXG5cclxuXHRcdFx0YnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXInKSk7Ki8iLCIoKGhlYWRlcikgPT4ge1xyXG5cclxuXHRcInVzZSBzdHJpY3RcIjtcclxuXHJcblx0aWYoIWhlYWRlcikge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRjb25zdCBoZWFkZXJGaXhlZCA9IGhlYWRlci5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19maXhlZCcpO1xyXG5cclxuXHRDRy5oZWFkZXJIZWlnaHQgPSBoZWFkZXJGaXhlZC5jbGllbnRIZWlnaHQ7XHJcblxyXG4vL1x0UHViU3ViLnN1YnNjcmliZSgnd2luZG93U2Nyb2xsJywgKCkgPT4gaGVhZGVyRml4ZWQuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtc2Nyb2xsJywgd2luZG93LnBhZ2VZT2Zmc2V0ID4gMCkpO1xyXG5cclxuXHRQdWJTdWIuc3Vic2NyaWJlKCd3aW5kb3dXaWR0aFJlc2l6ZScsICgpID0+IHtcclxuXHJcblx0XHRDRy5oZWFkZXJIZWlnaHQgPSBoZWFkZXJGaXhlZC5jbGllbnRIZWlnaHQ7XHJcblxyXG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS1oZWlnaHRIZWFkZXJGaXhlZFwiLCBDRy5oZWFkZXJIZWlnaHQgKyAncHgnKTtcclxuXHJcblx0fSk7XHJcblxyXG5cdC8vIGJ0biB1cCB0b3BcclxuXHJcblx0Y29uc3QgZm9vdGVyVVAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyX191cCcpO1xyXG5cclxuXHRpZihmb290ZXJVUCkge1xyXG5cclxuXHRcdFB1YlN1Yi5zdWJzY3JpYmUoJ3dpbmRvd1Njcm9sbCcsICgpID0+XHJcblx0XHRcdGZvb3RlclVQLmNsYXNzTGlzdC50b2dnbGUoXCJpcy1zaG93XCIsIHdpbmRvdy5pbm5lckhlaWdodCA8IHdpbmRvdy5wYWdlWU9mZnNldCkpO1xyXG5cclxuXHRcdGZvb3RlclVQLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZG9jdW1lbnQuYm9keS5zY3JvbGxJbnRvVmlldyh7YmVoYXZpb3I6IFwic21vb3RoXCJ9KSk7XHJcblxyXG5cdH1cclxuXHJcblx0Ly8gZml4ZWRcclxuXHJcblx0bGV0IFNjcm9sbFRvcFByZXYgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcclxuXHJcblx0XHRpZih3aW5kb3cucGFnZVlPZmZzZXQgPD0gMCkge1xyXG5cclxuXHRcdFx0aGVhZGVyRml4ZWQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtZml4ZWQnKTtcclxuXHJcblx0XHR9XHJcblx0XHRlbHNlIGlmKHdpbmRvdy5wYWdlWU9mZnNldCA+IHdpbmRvdy5pbm5lckhlaWdodCl7XHJcblxyXG5cdFx0XHRoZWFkZXJGaXhlZC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1maXhlZCcsIHdpbmRvdy5wYWdlWU9mZnNldCA8PSBTY3JvbGxUb3BQcmV2KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0U2Nyb2xsVG9wUHJldiA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJykpOyIsIi8qQ0cubWFzayA9IChlbGVtcykgPT4ge1xyXG5cclxuXHRpZighZWxlbXMubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGlmICghd2luZG93LklucHV0bWFzaykge1xyXG5cclxuXHRcdGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG5cclxuXHRcdHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XHJcblx0XHRzY3JpcHQuYXN5bmMgPSB0cnVlO1xyXG5cdFx0c2NyaXB0LnNyYyA9Jy9qcy9pbnB1dG1hc2subWluLmpzJztcclxuXHJcblx0XHRzY3JpcHQub25sb2FkID0gKCkgPT4gc2V0TWFzaygpO1xyXG5cclxuXHRcdHNldFRpbWVvdXQoICgpID0+IGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KSwgNTAwMCk7XHJcblxyXG5cdH1cclxuXHRlbHNlIHtcclxuXHJcblx0XHRzZXRNYXNrKCk7XHJcblxyXG5cdH1cclxuXHJcblx0Y29uc3Qgc2V0TWFzayA9ICgpID0+IHtcclxuXHJcblx0XHRBcnJheS5mcm9tKGVsZW1zLCBlbCA9PiB7XHJcblxyXG5cdFx0XHRpZihlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2lucHV0bWFzay0tcGhvbmUnKSkge1xyXG5cclxuXHRcdFx0XHR2YXIgbWFza0lucHV0ID0gbmV3IElucHV0bWFzayh7XHJcblx0XHRcdFx0XHRtYXNrOiBcIis3ICggOTk5ICkgOTk5LTk5LTk5XCIsXHJcblx0XHRcdFx0XHRzaG93TWFza09uSG92ZXI6IGZhbHNlLFxyXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI6IFwiKzcgKCBfX18gKSBfX18tX18tX19cIlxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmKGVsLmNsYXNzTGlzdC5jb250YWlucygnaW5wdXRtYXNrLS1kYXRlJykpIHtcclxuXHJcblx0XHRcdFx0dmFyIG1hc2tJbnB1dCA9IG5ldyBJbnB1dG1hc2soe1xyXG5cdFx0XHRcdFx0YWxpYXM6IFwiZGF0ZXRpbWVcIixcclxuXHRcdFx0XHRcdHNob3dNYXNrT25Ib3ZlcjogZmFsc2UsXHJcblx0XHRcdFx0XHRpbnB1dEZvcm1hdDogXCJkZC5tbS55eXl5XCIsXHJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcjogXCLQtNC0LtC80Lwu0LPQs9Cz0LNcIlxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmKGVsLmNsYXNzTGlzdC5jb250YWlucygnaW5wdXRtYXNrLS1jdXJyZW5jeScpKSB7XHJcblxyXG5cdFx0XHRcdHZhciBtYXNrSW5wdXQgPSBuZXcgSW5wdXRtYXNrKHtcclxuXHRcdFx0XHRcdGFsaWFzOiBcImludGVnZXJcIixcclxuXHRcdFx0XHRcdHN1ZmZpeDogJyDRgNGD0LHQu9C10LknLFxyXG5cdFx0XHRcdFx0Z3JvdXBTaXplOiAzLFxyXG5cdFx0XHRcdFx0YXV0b0dyb3VwOiB0cnVlLFxyXG5cdFx0XHRcdFx0Z3JvdXBTZXBhcmF0b3I6ICcgJyxcclxuXHRcdFx0XHRcdHJpZ2h0QWxpZ246IGZhbHNlXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cclxuXHRcdFx0XHR2YXIgbWFza0lucHV0ID0gbmV3IElucHV0bWFzayhlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWFzaycpKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdG1hc2tJbnB1dC5tYXNrKGVsKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufTtcclxuXHJcbkNHLm1hc2soZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmlucHV0bWFzaycpKTsqLyIsIlxyXG4oKGJ0bikgPT4ge1xyXG5cclxuXHRcInVzZSBzdHJpY3RcIjtcclxuXHJcblx0aWYoIWJ0bikge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtY2F0YWxvZycpLFxyXG5cdFx0ICBsZXZlbDEgPSBtZW51LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWNhdGFsb2dfX2hlYWQnKSxcclxuXHRcdCAgbGV2ZWwyID0gbWVudS5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1jYXRhbG9nX19oZWFkLWxldmVsMicpLFxyXG5cdFx0ICBidG5DbG9zZSA9IG1lbnUucXVlcnlTZWxlY3RvcignLm1lbnUtY2F0YWxvZ19fY2xvc2UnKSxcclxuXHRcdCAgYnRuQmFjayA9IG1lbnUucXVlcnlTZWxlY3RvcignLm1lbnUtY2F0YWxvZ19fYmFjaycpLFxyXG5cdFx0ICBjYXRlZ29yeSA9IG1lbnUucXVlcnlTZWxlY3RvcignLm1lbnUtY2F0YWxvZ19fY3VycmVudC1jYXRlZ29yeScpLFxyXG5cdFx0ICBjYXRlZ29yeVRleHREZWZhdWx0ID0gY2F0ZWdvcnkudGV4dENvbnRlbnQ7XHJcblxyXG5cdGxldFx0bGV2ZWwxU2Nyb2xsID0gMCxcclxuXHRcdGxldmVsMlNjcm9sbCA9IDAsXHJcblx0XHRsZXZlbDFPcGVuID0gbnVsbCxcclxuXHRcdGxldmVsMk9wZW4gPSBudWxsO1xyXG5cclxuXHRjb25zdCBtZW51T3BlbiA9ICgpID0+IHtcclxuXHJcblx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsLWJlaGF2aW9yLW9mZicpO1xyXG5cclxuXHRcdENHLk9wZW5NZW51ID0gdHJ1ZTtcclxuXHJcblx0XHQvLyDQt9Cw0L/QuNGB0YvQstCw0LXQvCDQt9C90LDRh9C10L3QuNC1INGB0LrRgNC+0LvQu9CwINGB0YLRgNCw0L3QuNGG0YtcclxuXHRcdENHLndpbmRvd1Njcm9sbE9sZCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHRcdHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuXHJcblx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ21lbnUtb3BlbicpO1xyXG5cclxuXHRcdFB1YlN1Yi5wdWJsaXNoKCdTd2lwZXJBdXRvUGxheVN0b3AnKTtcclxuXHJcblx0fTtcclxuXHJcblx0Y29uc3QgbWVudUNsb3NlID0gKCkgPT4ge1xyXG5cclxuXHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1vcGVuJyk7XHJcblxyXG5cdFx0d2luZG93LnNjcm9sbFRvKDAsIENHLndpbmRvd1Njcm9sbE9sZCk7XHJcblxyXG5cdFx0Q0cuT3Blbk1lbnUgPSBmYWxzZTtcclxuXHJcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsLWJlaGF2aW9yLW9mZicpLCAxMDApO1xyXG5cclxuXHRcdFB1YlN1Yi5wdWJsaXNoKCdTd2lwZXJBdXRvUGxheVN0YXJ0Jyk7XHJcblxyXG5cdH07XHJcblxyXG5cdC8vINC+0YLQutGA0YvRgtGMfNC30LDQutGA0YvRgtGMINC80LXQvdGOXHJcblxyXG5cdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IENHLk9wZW5NZW51ID8gbWVudUNsb3NlKCkgOiBtZW51T3BlbigpKTtcclxuXHJcblx0Ly8g0LfQsNC60YDRi9GC0Ywg0LzQtdC90Y5cclxuXHJcblx0YnRuQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBtZW51Q2xvc2UpO1xyXG5cclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRpZihkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnbWVudS1vcGVuJykgJiYgIWV2ZW50LnRhcmdldC5jbG9zZXN0KCcuanMtdG9nZ2xlLW1lbnUnKSAmJiAhZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5tZW51LWNhdGFsb2cnKSkge1xyXG5cclxuXHRcdFx0bWVudUNsb3NlKCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcblx0Ly8g0J3QsCDRg9GA0L7QstC10L3RjCDQvdCw0LfQsNC0XHJcblxyXG5cdGJ0bkJhY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG5cdFx0aWYobWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWxldmVsMycpKSB7XHJcblxyXG5cdFx0XHRtZW51LnN0eWxlLmhlaWdodCA9IGxldmVsMU9wZW4ubmV4dEVsZW1lbnRTaWJsaW5nLnNjcm9sbEhlaWdodCArIFwicHhcIjtcclxuXHJcblx0XHRcdG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnaXMtbGV2ZWwzJyk7XHJcblxyXG5cdFx0XHRBcnJheS5mcm9tKGxldmVsMiwgZWxlbSA9PiBlbGVtLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpKTtcclxuXHJcblx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLCBsZXZlbDJTY3JvbGwpO1xyXG5cclxuXHRcdFx0Y2F0ZWdvcnkudGV4dENvbnRlbnQgPSBsZXZlbDFPcGVuLnRleHRDb250ZW50O1xyXG5cclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKG1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1sZXZlbDInKSkge1xyXG5cclxuXHRcdFx0bWVudS5zdHlsZS5oZWlnaHQgPSBtZW51LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWNhdGFsb2dfX2lubmVyJykuY2xpZW50SGVpZ2h0ICsgXCJweFwiO1xyXG5cclxuXHRcdFx0bWVudS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1sZXZlbDInKTtcclxuXHJcblx0XHRcdEFycmF5LmZyb20obGV2ZWwxLCBlbGVtID0+IGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpKTtcclxuXHJcblx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLCBsZXZlbDFTY3JvbGwpO1xyXG5cclxuXHRcdFx0YnRuQmFjay5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRjYXRlZ29yeS50ZXh0Q29udGVudCA9IGNhdGVnb3J5VGV4dERlZmF1bHQ7XHJcblxyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblxyXG5cdFx0XHRjb25zb2xlLmxvZygn0YfRgtC+LdGC0L4g0L3QtSDRgtCw0LonKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxuXHJcblx0Ly8g0L/QtdGA0LLRi9C5INGD0YDQvtCy0LXQvdGMXHJcblxyXG5cdEFycmF5LmZyb20obGV2ZWwxLCBlbCA9PiB7XHJcblxyXG5cdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4ge1xyXG5cclxuXHRcdFx0ZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRsZXZlbDFTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG5cdFx0XHRtZW51LnN0eWxlLmhlaWdodCA9IGVsLm5leHRFbGVtZW50U2libGluZy5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XHJcblxyXG5cdFx0XHRtZW51LmNsYXNzTGlzdC5hZGQoJ2lzLWxldmVsMicpO1xyXG5cclxuXHRcdFx0QXJyYXkuZnJvbShsZXZlbDEsIGVsZW0gPT4gZWxlbS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1vcGVuJywgZWxlbSA9PT0gZWwpKTtcclxuXHJcblx0XHRcdGxldmVsMU9wZW4gPSBlbDtcclxuXHJcblx0XHRcdGJ0bkJhY2suY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuXHRcdFx0Y2F0ZWdvcnkudGV4dENvbnRlbnQgPSBlbC50ZXh0Q29udGVudDtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG5cdC8vINCy0YLQvtGA0L7QuSDRg9GA0L7QstC10L3RjFxyXG5cclxuXHRBcnJheS5mcm9tKGxldmVsMiwgZWwgPT4ge1xyXG5cclxuXHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHtcclxuXHJcblx0XHRcdGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0bGV2ZWwyU2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuXHRcdFx0bWVudS5zdHlsZS5oZWlnaHQgPSBlbC5wYXJlbnROb2RlLm5leHRFbGVtZW50U2libGluZy5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XHJcblxyXG5cdFx0XHRtZW51LmNsYXNzTGlzdC5hZGQoJ2lzLWxldmVsMycpO1xyXG5cclxuXHRcdFx0QXJyYXkuZnJvbShsZXZlbDIsIGVsZW0gPT4gZWxlbS5wYXJlbnROb2RlLmNsYXNzTGlzdC50b2dnbGUoJ2lzLW9wZW4nLCBlbGVtID09PSBlbCkpO1xyXG5cclxuXHRcdFx0bGV2ZWwyT3BlbiA9IGVsO1xyXG5cclxuXHRcdFx0Y2F0ZWdvcnkudGV4dENvbnRlbnQgPSBlbC50ZXh0Q29udGVudDtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtdG9nZ2xlLW1lbnUnKSk7IiwiKChtb2RhbCk9PntcclxuXHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cdGlmKCFtb2RhbCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHR2YXIgaXRlbXMgPSBtb2RhbC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWxfX2l0ZW0nKSxcclxuXHRcdGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tb2RhbF0nKSxcclxuXHRcdGJveCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fYm94JyksXHJcblx0XHR3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKSxcclxuXHRcdHdpbmRvd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcblx0bW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcblxyXG5cdFx0aWYoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbW9kYWwnKSB8fCBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbF9fYm94JykgfHwgZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5tb2RhbF9fY2xvc2UnKSl7XHJcblxyXG5cdFx0XHRDRy5oaWRlTW9kYWwoKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxuXHRDRy5oaWRlTW9kYWwgPSAoKSA9PiB7XHJcblxyXG5cdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1zaG93Jyk7XHJcblx0XHR3cmFwcGVyLnN0eWxlLnRvcCA9IDA7XHJcblx0XHR3aW5kb3cuc2Nyb2xsVG8oMCx3aW5kb3dTY3JvbGwpO1xyXG5cclxuXHRcdENHLmFjdGl2ZU1vZGFsID0gZmFsc2U7XHJcblxyXG5cdFx0UHViU3ViLnB1Ymxpc2goJ1N3aXBlckF1dG9QbGF5U3RhcnQnKTtcclxuXHJcblx0fTtcclxuXHJcblx0Q0cubW9kYWxTaG93ID0gc2VsZWN0b3IgPT4ge1xyXG5cclxuXHRcdGlmKCFDRy5hY3RpdmVNb2RhbCl7XHJcblxyXG5cdFx0XHR3aW5kb3dTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG5cdFx0XHR3cmFwcGVyLnN0eWxlLnRvcCA9IC13aW5kb3dTY3JvbGwgKyAncHgnO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRDRy5hY3RpdmVNb2RhbCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9faXRlbS0tJyArIHNlbGVjdG9yKTtcclxuXHJcblx0XHRBcnJheS5mcm9tKGl0ZW1zLCBlbCA9PlxyXG5cdFx0XHRlbC5jbGFzc0xpc3QudG9nZ2xlKCd2aXN1YWxseWhpZGRlbicsIGVsICE9PSBDRy5hY3RpdmVNb2RhbCkpO1xyXG5cclxuXHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWwtc2hvdycpO1xyXG5cdFx0d2luZG93LnNjcm9sbFRvKDAsMCk7XHJcblxyXG5cdFx0Q0cuYWN0aXZlTW9kYWwuZm9jdXMoKTtcclxuXHJcblx0XHRQdWJTdWIucHVibGlzaCgnbW9kYWxTaG93Jywgc2VsZWN0b3IpO1xyXG5cclxuXHRcdFB1YlN1Yi5wdWJsaXNoKCdTd2lwZXJBdXRvUGxheVN0b3AnKTtcclxuXHJcblx0fTtcclxuXHJcblx0QXJyYXkuZnJvbShidG5zLCBlbCA9PlxyXG5cdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxyXG5cdFx0XHRDRy5tb2RhbFNob3coZWwuZ2V0QXR0cmlidXRlKCdkYXRhLW1vZGFsJykpKSk7XHJcblxyXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBldmVudCA9PiB7XHJcblxyXG5cdFx0aWYoQ0cuYWN0aXZlTW9kYWwgJiYgZXZlbnQua2V5Q29kZSA9PT0gMjcpe1xyXG5cclxuXHRcdFx0Q0cuaGlkZU1vZGFsKCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpKTsiLCIvKigoZm9vdGVyKSA9PiB7XHJcblxyXG5cdFwidXNlIHN0cmljdFwiO1xyXG5cclxuXHRpZiAoJ0ludGVyc2VjdGlvbk9ic2VydmVyJyBpbiB3aW5kb3cpIHtcclxuXHJcblx0XHRjb25zdCBvcHRpb25zID0ge1xyXG5cdFx0XHRyb290OiBudWxsLFxyXG5cdFx0XHRyb290TWFyZ2luOiAnMHB4JyxcclxuXHRcdFx0dGhyZXNob2xkOiBbLjFdXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGhlYWRlckZpeGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fZml4ZWQnKTtcclxuXHJcblx0XHRjb25zdCBjYWxsYmFjayA9IChlbnRyaWVzLCBvYnNlcnZlcikgPT5cclxuXHJcblx0XHRcdEFycmF5LmZyb20oZW50cmllcywgZW50cnkgPT4ge1xyXG5cclxuXHRcdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2JnLWZvb3RlcicsIGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMC4xICYmIHdpbmRvdy5wYWdlWU9mZnNldCA+IDApO1xyXG5cclxuXHRcdFx0XHRoZWFkZXJGaXhlZC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1oaWRkZW4nLCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDAuMSk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihjYWxsYmFjaywgb3B0aW9ucyk7XHJcblxyXG5cdFx0b2JzZXJ2ZXIub2JzZXJ2ZShmb290ZXIpO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJykpOyovIiwiKChzZWFyY2gpPT57XHJcblxyXG5cdFwidXNlIHN0cmljdFwiO1xyXG5cclxuXHRpZighc2VhcmNoLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRBcnJheS5mcm9tKHNlYXJjaCwgZm9ybSA9PiB7XHJcblxyXG5cdFx0Y29uc3QgcmVzZXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfX3Jlc2V0JyksXHJcblx0XHRcdCAgaW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfX2lucHV0JyksXHJcblx0XHRcdCAgcmVzdWx0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX19yZXN1bHQnKTtcclxuXHJcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2V0JywgKCkgPT4ge1xyXG5cclxuXHRcdFx0cmVzZXQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cdFx0XHRyZXN1bHQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuXHRcdFx0c2V0VGltZW91dCggKCkgPT4gaW5wdXQuZm9jdXMoKSwgMTAwMCk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0aW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRyZXNldC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJywgIWlucHV0LnZhbHVlKTtcclxuXHRcdFx0cmVzdWx0LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnLCAhaW5wdXQudmFsdWUpO1xyXG5cclxuXHRcdFx0aWYoaW5wdXQudmFsdWUubGVuZ3RoID4gMyAmJiBldmVudC5rZXkgIT09ICdlbnRlcicpe1xyXG5cclxuXHRcdFx0XHRmb3JtLmNsYXNzTGlzdC5hZGQoJ2lzLWxvYWRpbmcnKTtcclxuXHJcblx0XHRcdFx0Y29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSksXHJcblx0XHRcdFx0XHQgIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuXHRcdFx0XHR4aHIub3BlbihcIlBPU1RcIiwgZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpKTtcclxuXHRcdFx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIlgtUmVxdWVzdGVkLVdpdGhcIiwgXCJYTUxIdHRwUmVxdWVzdFwiKTtcclxuXHJcblx0XHRcdFx0eGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRpZiAoeGhyLnJlYWR5U3RhdGUgIT09IDQpe1xyXG5cclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRyZXN1bHQuaW5uZXJIVE1MID0geGhyLnJlc3BvbnNlVGV4dDtcclxuXHRcdFx0XHRcdFx0Zm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1sb2FkaW5nJyk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHhoci5zZW5kKGZvcm1EYXRhKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRyZXN1bHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCByZW1vdmUgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnNlYXJjaF9fcmVzdWx0LXJlbW92ZScpO1xyXG5cclxuXHRcdFx0aWYocmVtb3ZlKSB7XHJcblxyXG5cdFx0XHRcdHJlbW92ZS5jbG9zZXN0KCcuc2VhcmNoX19yZXN1bHQtaXRlbScpLmNsYXNzTGlzdC5hZGQoJ2lzLXJlbW92ZScpO1xyXG5cclxuXHRcdFx0XHRjb25zb2xlLmxvZygn0YPQtNCw0LvRj9C10Lwg0YDQtdC30YPQu9GM0YLQsNGC0YsnKVxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWFyY2gnKSk7IiwiKChpdGVtcyk9PntcclxuXHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cdGlmKCFpdGVtcy5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0QXJyYXkuZnJvbShpdGVtcywgZWwgPT4ge1xyXG5cclxuXHRcdGNvbnN0IHNlbGVjdCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpO1xyXG5cclxuXHRcdHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRzZWxlY3QuYmx1cigpO1xyXG5cdFx0XHRlbC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1kZWZhdWx0Jyk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdCcpKTsiLCIoKHN3aXBlckNvbnRhaW5lcik9PntcclxuXHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cdGlmKCFzd2lwZXJDb250YWluZXIubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGxldCBzd2lwZXJJbml0ID0gd2luZG93LlN3aXBlcjtcclxuXHJcblx0QXJyYXkuZnJvbShzd2lwZXJDb250YWluZXIsIHN3aXBlID0+IHtcclxuXHJcblx0XHRsZXQgbXlTd2lwZSA9IG51bGwsXHJcblx0XHRcdHRvZ2dsZVN3aXBlID0gbnVsbCxcclxuXHRcdFx0cmVzZXRTd2lwZSA9IG51bGw7XHJcblxyXG5cdFx0Y29uc3Qgc3dpcGVDb250cm9scyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG5cdFx0XHQgIHN3aXBlTmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcblx0XHRcdCAgc3dpcGVCdG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcblx0XHRcdCAgc3dpcGVOZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyksXHJcblx0XHRcdCAgc3dpcGVQcmV2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyksXHJcblx0XHRcdCAgaXRlbXMgPSBzd2lwZS5xdWVyeVNlbGVjdG9yQWxsKCcuc3dpcGVyLXNsaWRlJyksXHJcblx0XHRcdCAgY291bnQgPSBpdGVtcy5sZW5ndGgsXHJcblx0XHRcdCAgY2FyZExpc3QgPSBzd2lwZS5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXBlci1jb250YWluZXItLWNhcmQtbGlzdCcpLFxyXG5cdFx0XHQgIHByb2R1Y3QgPSBzd2lwZS5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXBlci1jb250YWluZXItLXByb2R1Y3QnKSxcclxuXHRcdFx0ICBiaWxsYm9hcmQgPSBzd2lwZS5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXBlci1jb250YWluZXItLWJpbGxib2FyZCcpLFxyXG5cdFx0XHQgIGF1dG9wbGF5ID0gc3dpcGUuZ2V0QXR0cmlidXRlKCdkYXRhLWF1dG9wbGF5JykgKiAxMDAwO1xyXG5cclxuXHRcdHN3aXBlTmF2LmNsYXNzTmFtZSA9ICdzd2lwZXItcGFnaW5hdGlvbic7XHJcblx0XHRzd2lwZUNvbnRyb2xzLmNsYXNzTmFtZSA9ICdzd2lwZXItY29udHJvbHMnO1xyXG5cclxuXHRcdHN3aXBlQnRucy5jbGFzc05hbWUgPSAnc3dpcGVyLW5hdmlnYXRpb24nO1xyXG5cdFx0c3dpcGVQcmV2LmNsYXNzTmFtZSA9ICdzd2lwZXItYnV0dG9uLXByZXYgYnV0dG9uJztcclxuXHRcdHN3aXBlTmV4dC5jbGFzc05hbWUgPSAnc3dpcGVyLWJ1dHRvbi1uZXh0IGJ1dHRvbic7XHJcblxyXG5cdFx0c3dpcGVQcmV2LmlubmVySFRNTCA9ICc8c3ZnIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIyOVwiIHZpZXdCb3g9XCIwIDAgMTYgMjlcIj48cGF0aCBkPVwiTTAgMTQuMDM0YzAtLjUwMy4xOTItMS4wMDYuNTc1LTEuMzlMMTIuNjQ1LjU3N2ExLjk2NiAxLjk2NiAwIDExMi43OCAyLjc4TDQuNzQ0IDE0LjAzNGwxMC42OCAxMC42OGExLjk2NiAxLjk2NiAwIDAxLTIuNzggMi43NzlMLjU3NCAxNS40MjNBMS45NiAxLjk2IDAgMDEwIDE0LjAzNXpcIi8+PC9zdmc+JztcclxuXHRcdHN3aXBlTmV4dC5pbm5lckhUTUwgPSAnPHN2ZyB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMjlcIiB2aWV3Qm94PVwiMCAwIDE2IDI5XCI+PHBhdGggZD1cIk0xNiAxNC4wMzRhMS45NiAxLjk2IDAgMDEtLjU3NSAxLjM5TDMuMzU1IDI3LjQ5M2ExLjk2NSAxLjk2NSAwIDExLTIuNzgtMi43OGwxMC42OC0xMC42NzlMLjU3NSAzLjM1NmExLjk2NiAxLjk2NiAwIDAxMi43OC0yLjc4bDEyLjA3IDEyLjA2OWMuMzgzLjM4NC41NzUuODg3LjU3NSAxLjM5elwiLz48L3N2Zz4nO1xyXG5cclxuXHRcdHN3aXBlQnRucy5hcHBlbmRDaGlsZChzd2lwZVByZXYpO1xyXG5cdFx0c3dpcGVCdG5zLmFwcGVuZENoaWxkKHN3aXBlTmV4dCk7XHJcblx0XHRzd2lwZUNvbnRyb2xzLmFwcGVuZENoaWxkKHN3aXBlQnRucyk7XHJcblx0XHRzd2lwZUNvbnRyb2xzLmFwcGVuZENoaWxkKHN3aXBlTmF2KTtcclxuXHRcdHN3aXBlLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoc3dpcGVDb250cm9scyk7XHJcblxyXG5cdFx0Ly8gZWFnZXJcclxuXHRcdGlmKHN3aXBlLmNsYXNzTGlzdC5jb250YWlucygnc3dpcGVyLWNvbnRhaW5lci0tbG9hZGluZy1lYWdlcicpKSB7XHJcblxyXG5cdFx0XHRBcnJheS5mcm9tKHN3aXBlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tsb2FkaW5nPVwibGF6eVwiXScpLCBpbWcgPT4gaW1nLnNldEF0dHJpYnV0ZSgnbG9hZGluZycsJ2VhZ2VyJykpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHQvLyBoaWRlXHJcblx0XHRBcnJheS5mcm9tKGl0ZW1zLCBlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xyXG5cclxuXHRcdHJlc2V0U3dpcGUgPSAoKSA9PiB7XHJcblxyXG5cdFx0XHRpZihteVN3aXBlKSB7XHJcblxyXG5cdFx0XHRcdG15U3dpcGUuZGVzdHJveShmYWxzZSx0cnVlKTtcclxuXHRcdFx0XHRteVN3aXBlID0gdW5kZWZpbmVkO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c3dpcGVOYXYuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cdFx0XHRzd2lwZUJ0bnMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cdFx0XHRzd2lwZUNvbnRyb2xzLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0cmVzZXRTd2lwZSgpO1xyXG5cclxuXHRcdGlmIChjYXJkTGlzdCkge1xyXG5cclxuXHRcdFx0bGV0IHJvdyA9IHN3aXBlLmdldEF0dHJpYnV0ZSgnZGF0YS1jb3VudC1yb3cnKTtcclxuXHJcblx0XHRcdHRvZ2dsZVN3aXBlID0gKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRyZXNldFN3aXBlKCk7XHJcblxyXG5cdFx0XHRcdHN3aXBlLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnc3dpcGVyLWNvbnRhaW5lci1zdHlsZScpO1xyXG5cclxuXHRcdFx0XHRpZiAod2luZG93LmlubmVyV2lkdGggPj0gMTIwMCkge1xyXG5cclxuXHRcdFx0XHRcdGlmKHJvdyA9PT0gJ2F1dG8nKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRzd2lwZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ3N3aXBlci1jb250YWluZXItc3R5bGUnKTtcclxuXHJcblx0XHRcdFx0XHRcdHN3aXBlQnRucy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRcdHN3aXBlQ29udHJvbHMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHRcdFx0bXlTd2lwZSA9IG5ldyBTd2lwZXIoc3dpcGUsIHtcclxuXHRcdFx0XHRcdFx0XHRsb29wOiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3OiByb3csXHJcblx0XHRcdFx0XHRcdFx0bmF2aWdhdGlvbjoge1xyXG5cdFx0XHRcdFx0XHRcdFx0bmV4dEVsOiBzd2lwZU5leHQsXHJcblx0XHRcdFx0XHRcdFx0XHRwcmV2RWw6IHN3aXBlUHJldlxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0XHRyb3cgPSBwYXJzZUludChyb3cpO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKGNvdW50ID4gcm93KSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHN3aXBlLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnc3dpcGVyLWNvbnRhaW5lci1zdHlsZScpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRzd2lwZUJ0bnMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cdFx0XHRcdFx0XHRcdHN3aXBlQ29udHJvbHMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRteVN3aXBlID0gbmV3IFN3aXBlcihzd2lwZSwge1xyXG5cdFx0XHRcdFx0XHRcdFx0bG9vcDogZmFsc2UsXHJcblx0XHRcdFx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3OiByb3csXHJcblx0XHRcdFx0XHRcdFx0XHRzbGlkZXNQZXJHcm91cDogcm93LFxyXG5cdFx0XHRcdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiA0MCxcclxuXHRcdFx0XHRcdFx0XHRcdG5hdmlnYXRpb246IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0bmV4dEVsOiBzd2lwZU5leHQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHByZXZFbDogc3dpcGVQcmV2XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChwcm9kdWN0KSB7XHJcblxyXG5cdFx0XHRzd2lwZUNvbnRyb2xzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHRcdFx0c3dpcGVQcmV2LmNsYXNzTGlzdC5hZGQoJ3N3aXBlci1idXR0b24tZGlzYWJsZWQnKTtcclxuXHJcblx0XHRcdHRvZ2dsZVN3aXBlID0gKCkgPT4ge1xyXG5cclxuXHRcdFx0XHR0b2dnbGVTd2lwZSA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHRuZXcgU3dpcGVyKHN3aXBlLCB7XHJcblx0XHRcdFx0XHRsb29wOiBmYWxzZSxcclxuXHRcdFx0XHRcdHByZWxvYWRJbWFnZXM6IGZhbHNlLFxyXG5cdFx0XHRcdFx0bmF2aWdhdGlvbjoge1xyXG5cdFx0XHRcdFx0XHRuZXh0RWw6IHN3aXBlTmV4dCxcclxuXHRcdFx0XHRcdFx0cHJldkVsOiBzd2lwZVByZXZcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGJpbGxib2FyZCkge1xyXG5cclxuXHRcdFx0c3dpcGVCdG5zLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHRcdFx0c3dpcGVOYXYuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cdFx0XHRzd2lwZUNvbnRyb2xzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHJcblx0XHRcdHRvZ2dsZVN3aXBlID0gKCkgPT4ge1xyXG5cclxuXHRcdFx0XHR0b2dnbGVTd2lwZSA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHRuZXcgU3dpcGVyKHN3aXBlLCB7XHJcblx0XHRcdFx0XHRsb29wOiB0cnVlLFxyXG5cdFx0XHRcdFx0cHJlbG9hZEltYWdlczogZmFsc2UsXHJcblx0XHRcdFx0XHRhdXRvcGxheToge1xyXG5cdFx0XHRcdFx0XHRkZWxheTogYXV0b3BsYXlcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRwYWdpbmF0aW9uOiB7XHJcblx0XHRcdFx0XHRcdGVsOiBzd2lwZU5hdixcclxuXHRcdFx0XHRcdFx0Y2xpY2thYmxlOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRidWxsZXRFbGVtZW50OiAnYnV0dG9uJyxcclxuXHRcdFx0XHRcdFx0YnVsbGV0Q2xhc3M6ICdidXR0b24nLFxyXG5cdFx0XHRcdFx0XHRidWxsZXRBY3RpdmVDbGFzczogJ2lzLWFjdGl2ZSdcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0UHViU3ViLnN1YnNjcmliZSgnd2luZG93V2lkdGhSZXNpemUnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRpZiAod2luZG93LlN3aXBlciAmJiB0b2dnbGVTd2lwZSkge1xyXG5cclxuXHRcdFx0XHR0b2dnbGVTd2lwZSgpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdGlmKHdpbmRvdy5Td2lwZXIgJiYgdG9nZ2xlU3dpcGUpIHtcclxuXHJcblx0XHRcdHRvZ2dsZVN3aXBlKCk7XHJcblxyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblxyXG5cdFx0XHRQdWJTdWIuc3Vic2NyaWJlKCdzd2lwZXJKc0xvYWQnLCB0b2dnbGVTd2lwZSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmKCFzd2lwZXJJbml0KSB7XHJcblxyXG5cdFx0XHRzd2lwZXJJbml0ID0gdHJ1ZTtcclxuXHJcblx0XHRcdGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG5cclxuXHRcdFx0c2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcclxuXHRcdFx0c2NyaXB0LmFzeW5jID0gdHJ1ZTtcclxuXHRcdFx0c2NyaXB0LnNyYyA9ICcvanMvc3dpcGVyLm1pbi5qcyc7XHJcblxyXG5cdFx0XHRzY3JpcHQub25sb2FkID0gKCkgPT4gUHViU3ViLnB1Ymxpc2goJ3N3aXBlckpzTG9hZCcpO1xyXG5cclxuXHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG5cdFB1YlN1Yi5zdWJzY3JpYmUoJ1N3aXBlckF1dG9QbGF5U3RvcCcsICgpID0+XHJcblx0XHRBcnJheS5mcm9tKHN3aXBlckNvbnRhaW5lciwgc3dpcGUgPT5cclxuXHRcdFx0c3dpcGUuc3dpcGVyICYmIHN3aXBlLnN3aXBlci5hdXRvcGxheS5ydW5uaW5nICYmIHN3aXBlLnN3aXBlci5hdXRvcGxheS5zdG9wKCkpKTtcclxuXHJcblx0UHViU3ViLnN1YnNjcmliZSgnU3dpcGVyQXV0b1BsYXlTdGFydCcsICgpID0+XHJcblx0XHRBcnJheS5mcm9tKHN3aXBlckNvbnRhaW5lciwgc3dpcGUgPT5cclxuXHRcdFx0c3dpcGUuc3dpcGVyICYmIHN3aXBlLmdldEF0dHJpYnV0ZSgnZGF0YS1hdXRvcGxheScpICYmIHN3aXBlLnN3aXBlci5hdXRvcGxheS5zdGFydCgpKSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3dpcGVyLWNvbnRhaW5lcicpKTsiLCIvKlxyXG4vLyB0YWItc3dpcGVyXHJcblxyXG4oKHRhYnMpPT57XHJcblxyXG5cdFwidXNlIHN0cmljdFwiO1xyXG5cclxuXHRpZighdGFicy5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0QXJyYXkuZnJvbSh0YWJzLCB0YWIgPT4ge1xyXG5cclxuXHRcdGNvbnN0IGJ0bnMgPSB0YWIucXVlcnlTZWxlY3RvckFsbCgnLnRhYi1zd2lwZXJfX2J0bicpLFxyXG5cdFx0XHQgIGl0ZW1zID0gdGFiLnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWItc3dpcGVyX19pdGVtJyk7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShidG5zLCBidG4gPT4ge1xyXG5cclxuXHRcdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRBcnJheS5mcm9tKGJ0bnMsIChfYnRuLCBpbmRleCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdF9idG4uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJywgX2J0biA9PT0gYnRuKTtcclxuXHRcdFx0XHRcdGl0ZW1zW2luZGV4XS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnLCBfYnRuID09PSBidG4pO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWItc3dpcGVyJykpO1xyXG5cclxuXHJcblxyXG4vLyB0YWJzXHJcblxyXG5pZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFicycpKSB7XHJcblxyXG5cdEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYnMnKSwgKHRhYikgPT4ge1xyXG5cclxuXHRcdGxldCBidG4gPSB0YWIucXVlcnlTZWxlY3RvckFsbCgnLnRhYnNfX2J0bicpLFxyXG5cdFx0XHRpdGVtID0gdGFiLnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJzX19pdGVtJyksXHJcblx0XHRcdG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuXHRcdEFycmF5LmZyb20oYnRuLCAoZWwsaW5kZXgpID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IF9idG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHJcblx0XHRcdF9idG4uc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XHJcblxyXG5cdFx0XHRfYnRuLmNsYXNzTmFtZSA9ICdidXR0b24gdGFic19fbmF2LWJ0bic7XHJcblxyXG5cdFx0XHRfYnRuLnRleHRDb250ZW50ID0gZWwudGV4dENvbnRlbnQ7XHJcblxyXG5cdFx0XHRuYXYuYXBwZW5kQ2hpbGQoX2J0bik7XHJcblxyXG5cdFx0XHRlbC5jbGFzc0xpc3QuYWRkKCd2aXN1YWxseWhpZGRlbicpO1xyXG5cclxuXHRcdFx0X2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcblx0XHRcdFx0QXJyYXkuZnJvbShpdGVtLCAoZWxlbSxpbngpID0+IHtcclxuXHJcblx0XHRcdFx0XHRidG5baW54XS5jbGFzc0xpc3QudG9nZ2xlKCd0YWJzX19uYXYtYnRuLS1hY3RpdmUnLCBpbnggPT09IGluZGV4KTtcclxuXHRcdFx0XHRcdGVsZW0uY2xhc3NMaXN0LnRvZ2dsZSgndGFic19faXRlbS0tYWN0aXZlJywgaW54ID09PSBpbmRleCk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0bmF2LmNsYXNzTGlzdC5hZGQoJ3RhYnNfX25hdicpO1xyXG5cclxuXHRcdGJ0biA9IG5hdi5xdWVyeVNlbGVjdG9yQWxsKCcudGFic19fbmF2LWJ0bicpO1xyXG5cclxuXHRcdGl0ZW1bMF0uY2xhc3NMaXN0LmFkZCgndGFic19faXRlbS0tYWN0aXZlJyk7XHJcblx0XHRidG5bMF0uY2xhc3NMaXN0LmFkZCgndGFic19fbmF2LWJ0bi0tYWN0aXZlJyk7XHJcblxyXG5cdFx0dGFiLmluc2VydEJlZm9yZShuYXYsIGl0ZW1bMF0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn07Ki8iLCIoKGZvcm1zKSA9PiB7XHJcblxyXG5cdGlmKCFmb3Jtcy5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Y29uc3QgaGVhZGVyQ291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX193aXNobGlzdCAuaGVhZGVyX19pY29ucy1jb3VudCcpO1xyXG5cclxuXHRBcnJheS5mcm9tKGZvcm1zLCBmb3JtID0+IHtcclxuXHJcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKSxcclxuXHRcdFx0XHQgIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuXHRcdFx0eGhyLm9wZW4oXCJQT1NUXCIsIGZvcm0uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKSk7XHJcblx0XHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiWC1SZXF1ZXN0ZWQtV2l0aFwiLCBcIlhNTEh0dHBSZXF1ZXN0XCIpO1xyXG5cclxuXHRcdFx0eGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcclxuXHJcblx0XHRcdFx0aWYgKHhoci5yZWFkeVN0YXRlICE9IDQpe1xyXG5cclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3Qgb2JqID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKG9iaik7XHJcblxyXG5cdFx0XHRcdFx0aWYob2JqLmhlYWRlckNvdW50KSB7XHJcblxyXG5cdFx0XHRcdFx0XHRoZWFkZXJDb3VudC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJywgb2JqLmhlYWRlckNvdW50ID09PSAwKTtcclxuXHRcdFx0XHRcdFx0aGVhZGVyQ291bnQudGV4dENvbnRlbnQgPSBvYmouaGVhZGVyQ291bnQ7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmKG9iai5tb2RlID09PSAnYWRkJykge1xyXG5cclxuXHRcdFx0XHRcdFx0Zm9ybS5lbGVtZW50cy5tb2RlLnZhbHVlID0gJ2RlbCc7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZSBpZiAob2JqLm1vZGUgPT09ICdkZWwnKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRmb3JtLmVsZW1lbnRzLm1vZGUudmFsdWUgPSAnYWRkJztcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHhoci5zZW5kKGZvcm1EYXRhKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybS13aXNobGlzdCcpKTsiXX0=
