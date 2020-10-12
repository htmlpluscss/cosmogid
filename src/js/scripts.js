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
	CG.breakPoints = 1250;
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
((forms) => {

	if(!forms.length) {

		return;

	}

	const headerCount = document.querySelector('.header__cart .header__icons-count');

	Array.from(forms, form => {

		const inputID = form.querySelector('[name="id"]'),
			  storeID = form.querySelector('[name="storeid"]'),
			  sale = form.querySelector('.card-product__sale'),
			  btn = form.querySelector('.card-product__btn'),
			  price = form.querySelector('.card-product__price-value'),
			  priceOld = form.querySelector('.card-product__old-price-value');

		// кнопки варианты товара

		const articleID = form.querySelectorAll('.form-buy__article-input');

		Array.from(articleID, input => {

			input.addEventListener('change', () => {

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

// кнопка в один клик в карточке

((btns) => {

	if(!btns.length) {

		return;

	}

	const formBuyOneClick = document.querySelector('.form-buy-one-click__product');

	Array.from(btns, btn => {

		btn.addEventListener('click', () => {

			const card = btn.closest('.card-product'),
				  id = card.querySelector('[name="id"]'),
				  storeid = card.querySelector('[name="storeid"]'),
				  articleid = card.querySelector('[name="articleid"]:checked'),
				  cat = card.querySelector('.card-item__cat'),
				  title = card.querySelector('.card-item__title'),
				  price = card.querySelector('.card-product__price-value'),
				  img = card.querySelector('.card-item__img').innerHTML;

			formBuyOneClick.querySelector('[name="id"]').value = id.value;
			formBuyOneClick.querySelector('[name="storeid"]').value = storeid ? storeid.value : '';
			formBuyOneClick.querySelector('[name="articleid"]').value = articleid ? articleid.value : '';

			formBuyOneClick.querySelector('.card-item__img').innerHTML = img;
			formBuyOneClick.querySelector('.card-item__cat').textContent = cat.textContent;
			formBuyOneClick.querySelector('.card-item__title').textContent = title.textContent;
			formBuyOneClick.querySelector('.card-item__price').textContent = price.textContent;

			CG.modalShow('buy-one-click');

		});

	});

})(document.querySelectorAll('.buy-one-click'));

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
((forms) => {

	if(!forms.length) {

		return;

	}

	Array.from(forms, form => {

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

					const obj = JSON.parse(xhr.responseText);

					console.log(obj);

					if(obj.modalShow) {

						if(obj.modalShow === 'info') {

							document.querySelector('#modal-info__title').innerHTML = obj.title ? obj.title : '';
							document.querySelector('#modal-info__message').innerHTML = obj.message ? obj.message : '';

						}

						CG.modalShow(obj.modalShow);

					}

				}

			}

			xhr.send(formData);

		});

	});

})(document.querySelectorAll('.form'));

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

	document.documentElement.style.setProperty("--heightHeaderFixed", headerFixed.clientHeight + 'px');

	PubSub.subscribe('windowScroll', () =>
		header.classList.toggle('is-fixed', window.innerHeight < window.pageYOffset));

	PubSub.subscribe('windowWidthResize', () =>
		document.documentElement.style.setProperty("--heightHeaderFixed", headerFixed.clientHeight + 'px'));


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

		}
		else if (menu.classList.contains('is-level2')) {

			menu.classList.remove('is-level2');

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

		modal.classList.toggle('is-full', selector === 'gallery');

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

// переключение фото
((preview) => {

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

// кнопка купить
((form) => {

	if(!form) {

		return;

	}

	const headerCount = document.querySelector('.header__cart .header__icons-count');

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

				}

			}

		}

		xhr.send(formData);

	});

})(document.querySelector('.product-buy'));

// articleID

((articleInput) => {

	"use strict";

	if(!articleInput.length) {

		return;

	}

	const product = document.querySelector('.product-main'),
		  form = product.querySelector('.product-buy'),
		  articleID = form.querySelector('[name="articleid"]'),
		  storeID = form.querySelector('[name="storeid"]'),
		  sale = product.querySelector('.product-label__sale'),
		  sku = product.querySelector('.product-body__sku-value'),
		  stock = product.querySelector('.product-body__availability-value'),
		  btn = product.querySelector('.product-buy__btn'),
		  price = product.querySelector('.product-buy__price-value'),
		  priceOld = product.querySelector('.product-buy__old-price-value');

	// кнопки варианты товара

	Array.from(articleInput, input => {

		input.addEventListener('change', () => {

			articleID.value = input.value;

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

			if(stock) {

				stock.textContent = input.getAttribute('data-stock');

			}

			if(sku) {

				sku.textContent = input.getAttribute('data-sku');

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

})(document.querySelectorAll('.product-article__input'));

// кнопка в один клик на странице товара

((btn) => {

	"use strict";

	if(btn) {

		const formBuyOneClick = document.querySelector('.form-buy-one-click__product');

		btn.addEventListener('click', () => {

			const product = document.querySelector('.product-main'),
				  form = product.querySelector('.product-buy'),
				  id = form.querySelector('[name="id"]'),
				  storeid = form.querySelector('[name="storeid"]'),
				  cat = product.querySelector('.product-body__brand a'),
				  title = product.querySelector('.product__title'),
				  price = form.querySelector('.product-buy__price-value'),
				  img = product.querySelector('.product-img__link').innerHTML;

			formBuyOneClick.querySelector('[name="id"]').value = id.value;
			formBuyOneClick.querySelector('[name="storeid"]').value = storeid ? storeid.value : '';

			formBuyOneClick.querySelector('.card-item__img').innerHTML = img;
			formBuyOneClick.querySelector('.card-item__cat').textContent = cat.textContent;
			formBuyOneClick.querySelector('.card-item__title').textContent = title.textContent;
			formBuyOneClick.querySelector('.card-item__price').textContent = price.textContent;

			CG.modalShow('buy-one-click');

		});

	}

})(document.querySelector('.product-buy__one-click'));
//

// Часто покупают вместе

((set) => {

	"use strict";

	if(!set.length) {

		return;

	}

	const headerCount = document.querySelector('.header__cart .header__icons-count');

	Array.from(set, form => {

		const fieldset = form.querySelector('.product-set__fieldset'),
			  input = form.querySelectorAll('.product-set__input'),
			  items = form.querySelectorAll('.product-set__item'),
			  total = form.querySelector('.product-set__total-value'),
			  totalNotSale = form.querySelector('.product-set__total-value-not-sale'),
			  sale = form.querySelector('.product-set__total-value-sale');

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

						form.querySelector('.product-set__btn a').classList.remove('hide');
						form.querySelector('.product-set__btn button').classList.add('hide');

					}

				}

			}

			xhr.send(formData);

		});

		// кнопки check

		form.addEventListener('change', () => {

			let _total = 0,
				_sale  = 0,
				plus = false;

			Array.from(input, (el,index) => {

				items[index].classList.toggle('hide', !el.checked);
				items[index].querySelector('.product-set__articleid').checked = el.checked;

				if(el.checked) {

					_sale += parseFloat(el.getAttribute('data-sale'));
					_total += parseFloat(el.getAttribute('data-price'));

				}

				if(plus === false && index > 0) {

					plus = !items[index - 1].classList.contains('hide');

				}

				items[index].classList.toggle('is-plus', plus);

			});

			sale.textContent = _sale;
			total.textContent = _total;
			totalNotSale.textContent = _total + _sale;

			fieldset.classList.toggle('hide', form.querySelectorAll('.product-set__input:checked').length === 0);

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

	const btnShow = form.querySelector('.review-form__show-form');

	btnShow.addEventListener('click', () =>
		Array.from(form.querySelectorAll('.review-form__fieldset'), el =>
			el.classList.toggle('is-hide')));


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
			xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

			xhr.onreadystatechange = () => {

				if (xhr.readyState != 4){

					return;

				}

				if (xhr.status === 200) {

					const obj = JSON.parse(xhr.responseText);
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
		xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

		xhr.onreadystatechange = () => {

			if (xhr.readyState != 4){

				return;

			}

			if (xhr.status === 200) {

				const obj = JSON.parse(xhr.responseText);

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
		resetSwipe = null;

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

		let row = swipe.getAttribute('data-count-row');

		toggleSwipe = () => {

			resetSwipe();

			swipe.parentNode.classList.remove('swiper-container-style');

			if (window.innerWidth >= CG.breakPoints) {

				if(row === 'auto') {

/*						swipe.parentNode.classList.add('swiper-container-style');

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
*/
				}
				else {

					row = parseInt(row);

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
								bulletElement: 'button',
								bulletClass: 'button',
								bulletActiveClass: 'is-active'
							}
						});

					}

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
					bulletElement: 'button',
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

	if(!CG.swiperInit) {

		CG.swiperInit = true;

		const script = document.createElement('script');

		script.type = 'text/javascript';
		script.async = true;
		script.src = '/js/swiper.min.js';

		script.onload = () => PubSub.publish('swiperJsLoad');

		setTimeout( () => document.head.appendChild(script), 5000);

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

					form.elements.mode.value = obj.mode;

				}

			}

			xhr.send(formData);

		});

	});

})(document.querySelectorAll('.form-wishlist'));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzLmpzIiwiYXNrLmpzIiwiYnV5LmpzIiwiY2l0eS5qcyIsImZpbHRlci5qcyIsImZvcm0uanMiLCJnYWxsZXJ5LmpzIiwiaGVhZGVyLmpzIiwibWFzay5qcyIsIm1lbnUuanMiLCJtb2RhbC5qcyIsInByb2R1Y3QuanMiLCJxdWFudGl0eS5qcyIsInJldmlldy5qcyIsInNjcm9sbC1vYnNlcnZlci5qcyIsInNlYXJjaC5qcyIsInNlbGVjdC5qcyIsInNtcy5qcyIsInNvcnQuanMiLCJzd2lwZXIuanMiLCJ0YWIuanMiLCJ0ZXh0LXNob3J0LmpzIiwid2lzaGxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDelZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsSkE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDblRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiX2pzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohIFVURi04XHJcblxyXG7CqSBrb3ZyaWdpblxyXG7QktGB0LUg0L/RgNCw0LLQsCDRgNCw0LfRgNC10YjQtdC90Ytcclxu0LrRgNCw0YHQuNCy0YvQuSDQtNC40LfQsNC50L0g0LTQvtC70LbQtdC9INC40LzQtdGC0Ywg0LrRgNCw0YHQuNCy0YvQuSDQutC+0LTCrlxyXG5cclxuaHR0cHM6Ly9naXRodWIuY29tL2h0bWxwbHVzY3NzL1xyXG5cclxuKi9cclxuXHJcbigoKSA9PiB7XHJcblxyXG5cdFwidXNlIHN0cmljdFwiO1xyXG5cclxuXHR3aW5kb3cuQ0cgPSB3aW5kb3cuQ0cgfHwge307XHJcblx0Q0cuYnJlYWtQb2ludHMgPSAxMjUwO1xyXG5cdENHLnJlc2l6ZVRpbWVvdXQgPSBudWxsO1xyXG5cdENHLndpbmRvd1dpZHRoT0xkID0gd2luZG93LmlubmVyV2lkdGg7XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcclxuXHJcblx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCAoKSA9PiB7XHJcblxyXG5cdFx0XHRpZiAoIUNHLnJlc2l6ZVRpbWVvdXQpIHtcclxuXHJcblx0XHRcdFx0Q0cucmVzaXplVGltZW91dCA9IHNldFRpbWVvdXQoICgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRDRy5yZXNpemVUaW1lb3V0ID0gbnVsbDtcclxuXHJcblx0XHRcdFx0XHRpZihDRy53aW5kb3dXaWR0aE9MZCAhPT0gd2luZG93LmlubmVyV2lkdGgpIHtcclxuXHJcblx0XHRcdFx0XHRcdENHLndpbmRvd1dpZHRoT0xkID0gd2luZG93LmlubmVyV2lkdGg7XHJcblxyXG5cdFx0XHRcdFx0XHRQdWJTdWIucHVibGlzaCgnd2luZG93V2lkdGhSZXNpemUnKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0sIDEwMCk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCAoKSA9PiBQdWJTdWIucHVibGlzaCgnd2luZG93U2Nyb2xsJykpKTtcclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4gUHViU3ViLnB1Ymxpc2goJ0RPTUNvbnRlbnRMb2FkZWQnKSk7XHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IFB1YlN1Yi5wdWJsaXNoKCdwYWdlTG9hZCcpKTtcclxuXHJcblx0Ly8g0L7QsdGA0LDQsdC+0YLRh9C40Log0LDQvdC40LzQsNGG0LjQuVxyXG5cdENHLmNzc0FuaW1hdGlvbiA9IGEgPT4ge3ZhciBiLGMsZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY3NzYW5pbWF0aW9uXCIpO3N3aXRjaChhKXtjYXNlJ2FuaW1hdGlvbic6Yj17XCJhbmltYXRpb25cIjpcImFuaW1hdGlvbmVuZFwiLFwiT0FuaW1hdGlvblwiOlwib0FuaW1hdGlvbkVuZFwiLFwiTW96QW5pbWF0aW9uXCI6XCJhbmltYXRpb25lbmRcIixcIldlYmtpdEFuaW1hdGlvblwiOlwid2Via2l0QW5pbWF0aW9uRW5kXCJ9O2JyZWFrO2Nhc2UndHJhbnNpdGlvbic6Yj17XCJ0cmFuc2l0aW9uXCI6XCJ0cmFuc2l0aW9uZW5kXCIsXCJPVHJhbnNpdGlvblwiOlwib1RyYW5zaXRpb25FbmRcIixcIk1velRyYW5zaXRpb25cIjpcInRyYW5zaXRpb25lbmRcIixcIldlYmtpdFRyYW5zaXRpb25cIjpcIndlYmtpdFRyYW5zaXRpb25FbmRcIn19Zm9yKGMgaW4gYilpZihkLnN0eWxlW2NdIT09dW5kZWZpbmVkKXJldHVybiBiW2NdfTtcclxuXHJcblx0Ly8gRGV0ZXJtaW5lIGlmIGFuIGVsZW1lbnQgaXMgaW4gdGhlIHZpc2libGUgdmlld3BvcnRcclxuXHRDRy5pc0luVmlld3BvcnQgPSBlbCA9PiBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPj0gMCAmJiBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20gPD0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxufSkoKTsiLCIvKigoYXNrKSA9PiB7XHJcblxyXG5cdFwidXNlIHN0cmljdFwiO1xyXG5cclxuXHRpZighYXNrLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRsZXQgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihtdXRhdGlvblJlY29yZHMgPT4ge1xyXG5cclxuXHRcdGNvbnN0IHQgPSBtdXRhdGlvblJlY29yZHNbMF0udGFyZ2V0LFxyXG5cdFx0XHQgIHJlY3QgPSB0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKHJlY3QubGVmdCA+IHdpbmRvdy5pbm5lcldpZHRoIC0gcmVjdC5yaWdodCk7XHJcblxyXG5cdFx0aWYodC5vcGVuKSB7XHJcblxyXG5cdFx0XHRjb25zdCBpbm5lciA9IHQucXVlcnlTZWxlY3RvcignLmFza19faW5uZXInKTtcclxuXHJcblx0XHRcdGlmKHJlY3QubGVmdCA+IHdpbmRvdy5pbm5lcldpZHRoIC0gcmVjdC5yaWdodCkge1xyXG5cclxuXHRcdFx0XHQvLyDQv9GA0LDQstC10LVcclxuXHJcblx0XHRcdFx0aW5uZXIuc3R5bGUubGVmdCA9ICdhdXRvJztcclxuXHRcdFx0XHRpbm5lci5zdHlsZS5yaWdodCA9IDA7XHJcblx0XHRcdFx0aW5uZXIuc3R5bGUud2lkdGggPSByZWN0LmxlZnQgKyAncHgnO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHJcblx0XHRcdFx0Ly8g0LvQtdCy0LXQtVxyXG5cclxuXHRcdFx0XHRpbm5lci5zdHlsZS5yaWdodCA9ICdhdXRvJztcclxuXHRcdFx0XHRpbm5lci5zdHlsZS5sZWZ0ID0gMDtcclxuXHRcdFx0XHRpbm5lci5zdHlsZS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gcmVjdC5yaWdodCArICdweCc7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcblx0QXJyYXkuZnJvbShhc2ssIGVsID0+IHtcclxuXHJcblx0XHRvYnNlcnZlci5vYnNlcnZlKGVsLCB7XHJcblxyXG5cdFx0XHRhdHRyaWJ1dGVzIDogdHJ1ZVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcblx0ZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShhc2ssIGVsID0+IHtcclxuXHJcblx0XHRcdGlmKGV2dC50YXJnZXQuY2xvc2VzdCgnLmFzaycpICE9PSBlbCl7XHJcblxyXG5cdFx0XHRcdGVsLm9wZW4gPSBmYWxzZTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXNrJykpOyovIiwiKChmb3JtcykgPT4ge1xyXG5cclxuXHRpZighZm9ybXMubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGNvbnN0IGhlYWRlckNvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fY2FydCAuaGVhZGVyX19pY29ucy1jb3VudCcpO1xyXG5cclxuXHRBcnJheS5mcm9tKGZvcm1zLCBmb3JtID0+IHtcclxuXHJcblx0XHRjb25zdCBpbnB1dElEID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImlkXCJdJyksXHJcblx0XHRcdCAgc3RvcmVJRCA9IGZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJzdG9yZWlkXCJdJyksXHJcblx0XHRcdCAgc2FsZSA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmNhcmQtcHJvZHVjdF9fc2FsZScpLFxyXG5cdFx0XHQgIGJ0biA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmNhcmQtcHJvZHVjdF9fYnRuJyksXHJcblx0XHRcdCAgcHJpY2UgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLXByb2R1Y3RfX3ByaWNlLXZhbHVlJyksXHJcblx0XHRcdCAgcHJpY2VPbGQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLXByb2R1Y3RfX29sZC1wcmljZS12YWx1ZScpO1xyXG5cclxuXHRcdC8vINC60L3QvtC/0LrQuCDQstCw0YDQuNCw0L3RgtGLINGC0L7QstCw0YDQsFxyXG5cclxuXHRcdGNvbnN0IGFydGljbGVJRCA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0tYnV5X19hcnRpY2xlLWlucHV0Jyk7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShhcnRpY2xlSUQsIGlucHV0ID0+IHtcclxuXHJcblx0XHRcdGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuXHJcblx0XHRcdFx0cHJpY2UudGV4dENvbnRlbnQgPSBpbnB1dC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2UnKTtcclxuXHJcblx0XHRcdFx0aWYocHJpY2VPbGQpIHtcclxuXHJcblx0XHRcdFx0XHRpZihpbnB1dC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb2xkLXByaWNlJykpIHtcclxuXHJcblx0XHRcdFx0XHRcdHByaWNlT2xkLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cdFx0XHRcdFx0XHRwcmljZU9sZC50ZXh0Q29udGVudCA9IGlucHV0LmdldEF0dHJpYnV0ZSgnZGF0YS1vbGQtcHJpY2UnKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRcdHByaWNlT2xkLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZihzYWxlKSB7XHJcblxyXG5cdFx0XHRcdFx0aWYoaW5wdXQuZ2V0QXR0cmlidXRlKCdkYXRhLXNhbGUnKSkge1xyXG5cclxuXHRcdFx0XHRcdFx0c2FsZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHRcdFx0XHRcdFx0c2FsZS50ZXh0Q29udGVudCA9IGlucHV0LmdldEF0dHJpYnV0ZSgnZGF0YS1zYWxlJyk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0XHRzYWxlLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZihzdG9yZUlEKSB7XHJcblxyXG5cdFx0XHRcdFx0c3RvcmVJRC52YWx1ZSA9IGlucHV0LmdldEF0dHJpYnV0ZSgnZGF0YS1zdG9yZWlkJykgPyBpbnB1dC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RvcmVpZCcpIDogMTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZihpbnB1dC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW4tYmFza2V0JykpIHtcclxuXHJcblx0XHRcdFx0XHRidG4ucXVlcnlTZWxlY3RvcignYScpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHRcdFx0XHRcdGJ0bi5xdWVyeVNlbGVjdG9yKCdidXR0b24nKS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRidG4ucXVlcnlTZWxlY3RvcignYScpLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHRcdFx0XHRcdGJ0bi5xdWVyeVNlbGVjdG9yKCdidXR0b24nKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vINC+0YLQv9GA0LDQstC60LBcclxuXHJcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKSxcclxuXHRcdFx0XHQgIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuXHRcdFx0eGhyLm9wZW4oXCJQT1NUXCIsIGZvcm0uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKSk7XHJcblx0XHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiWC1SZXF1ZXN0ZWQtV2l0aFwiLCBcIlhNTEh0dHBSZXF1ZXN0XCIpO1xyXG5cclxuXHRcdFx0eGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcclxuXHJcblx0XHRcdFx0aWYgKHhoci5yZWFkeVN0YXRlICE9IDQpe1xyXG5cclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgY2FydCA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhjYXJ0KTtcclxuXHJcblx0XHRcdFx0XHRpZihjYXJ0LmhlYWRlckNvdW50KSB7XHJcblxyXG5cdFx0XHRcdFx0XHRoZWFkZXJDb3VudC50ZXh0Q29udGVudCA9IGNhcnQuaGVhZGVyQ291bnQ7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmKGNhcnQubW9kZSA9PT0gXCJhZGRcIikge1xyXG5cclxuXHRcdFx0XHRcdFx0Zm9ybS5xdWVyeVNlbGVjdG9yKCcuY2FyZC1wcm9kdWN0X19idG4gYScpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHRcdFx0XHRcdFx0Zm9ybS5xdWVyeVNlbGVjdG9yKCcuY2FyZC1wcm9kdWN0X19idG4gYnV0dG9uJykuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYoYXJ0aWNsZUlELmxlbmd0aCkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRBcnJheS5mcm9tKGFydGljbGVJRCwgaW5wdXQgPT4ge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGlmKGlucHV0LnZhbHVlID09PSBjYXJ0LmFydGljbGVpZCkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKCdkYXRhLWluLWJhc2tldCcsICdpbiBiYXNrZXQnKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0eGhyLnNlbmQoZm9ybURhdGEpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtLWJ1eScpKTtcclxuXHJcbi8vINC60L3QvtC/0LrQsCDQsiDQvtC00LjQvSDQutC70LjQuiDQsiDQutCw0YDRgtC+0YfQutC1XHJcblxyXG4oKGJ0bnMpID0+IHtcclxuXHJcblx0aWYoIWJ0bnMubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGNvbnN0IGZvcm1CdXlPbmVDbGljayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWJ1eS1vbmUtY2xpY2tfX3Byb2R1Y3QnKTtcclxuXHJcblx0QXJyYXkuZnJvbShidG5zLCBidG4gPT4ge1xyXG5cclxuXHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IGNhcmQgPSBidG4uY2xvc2VzdCgnLmNhcmQtcHJvZHVjdCcpLFxyXG5cdFx0XHRcdCAgaWQgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiaWRcIl0nKSxcclxuXHRcdFx0XHQgIHN0b3JlaWQgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwic3RvcmVpZFwiXScpLFxyXG5cdFx0XHRcdCAgYXJ0aWNsZWlkID0gY2FyZC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImFydGljbGVpZFwiXTpjaGVja2VkJyksXHJcblx0XHRcdFx0ICBjYXQgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWl0ZW1fX2NhdCcpLFxyXG5cdFx0XHRcdCAgdGl0bGUgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWl0ZW1fX3RpdGxlJyksXHJcblx0XHRcdFx0ICBwcmljZSA9IGNhcmQucXVlcnlTZWxlY3RvcignLmNhcmQtcHJvZHVjdF9fcHJpY2UtdmFsdWUnKSxcclxuXHRcdFx0XHQgIGltZyA9IGNhcmQucXVlcnlTZWxlY3RvcignLmNhcmQtaXRlbV9faW1nJykuaW5uZXJIVE1MO1xyXG5cclxuXHRcdFx0Zm9ybUJ1eU9uZUNsaWNrLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiaWRcIl0nKS52YWx1ZSA9IGlkLnZhbHVlO1xyXG5cdFx0XHRmb3JtQnV5T25lQ2xpY2sucXVlcnlTZWxlY3RvcignW25hbWU9XCJzdG9yZWlkXCJdJykudmFsdWUgPSBzdG9yZWlkID8gc3RvcmVpZC52YWx1ZSA6ICcnO1xyXG5cdFx0XHRmb3JtQnV5T25lQ2xpY2sucXVlcnlTZWxlY3RvcignW25hbWU9XCJhcnRpY2xlaWRcIl0nKS52YWx1ZSA9IGFydGljbGVpZCA/IGFydGljbGVpZC52YWx1ZSA6ICcnO1xyXG5cclxuXHRcdFx0Zm9ybUJ1eU9uZUNsaWNrLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWl0ZW1fX2ltZycpLmlubmVySFRNTCA9IGltZztcclxuXHRcdFx0Zm9ybUJ1eU9uZUNsaWNrLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWl0ZW1fX2NhdCcpLnRleHRDb250ZW50ID0gY2F0LnRleHRDb250ZW50O1xyXG5cdFx0XHRmb3JtQnV5T25lQ2xpY2sucXVlcnlTZWxlY3RvcignLmNhcmQtaXRlbV9fdGl0bGUnKS50ZXh0Q29udGVudCA9IHRpdGxlLnRleHRDb250ZW50O1xyXG5cdFx0XHRmb3JtQnV5T25lQ2xpY2sucXVlcnlTZWxlY3RvcignLmNhcmQtaXRlbV9fcHJpY2UnKS50ZXh0Q29udGVudCA9IHByaWNlLnRleHRDb250ZW50O1xyXG5cclxuXHRcdFx0Q0cubW9kYWxTaG93KCdidXktb25lLWNsaWNrJyk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1eS1vbmUtY2xpY2snKSk7IiwiXHJcbi8vINC/0L7QtNGC0LLQtdGA0LbQtNC10L3QuNC1INCz0L7RgNC+0LTQsFxyXG5cclxuKChmb3JtKSA9PiB7XHJcblxyXG5cdGlmKCFmb3JtKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdC8vINC/0L7QutCw0LfQsNGC0Ywg0YTQvtGA0LzRg1xyXG5cclxuXHRzZXRUaW1lb3V0KCAoKSA9PiBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSwgMTAwMDApO1xyXG5cclxuXHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdGZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4vL1x0XHRDb29raWVzLnNldCgndWNpdHknLCBmb3JtLmVsZW1lbnRzLmNpdHkudmFsdWUpO1xyXG5cclxuXHRcdGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pLFxyXG5cdFx0XHQgIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuXHRcdHhoci5vcGVuKFwiUE9TVFwiLCBmb3JtLmdldEF0dHJpYnV0ZSgnYWN0aW9uJykpO1xyXG5cdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJYLVJlcXVlc3RlZC1XaXRoXCIsIFwiWE1MSHR0cFJlcXVlc3RcIik7XHJcblx0XHR4aHIuc2VuZChmb3JtRGF0YSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY2l0eS1jb25maXJtJykpO1xyXG5cclxuXHJcbi8vINC/0L7QuNGB0Log0Lgg0LLRi9Cx0L7RgCDQs9C+0YDQvtC00LBcclxuXHJcbigoZm9ybSkgPT4ge1xyXG5cclxuXHRpZighZm9ybSkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRjb25zdCBpbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmZvcm0tY2l0eV9faW5wdXQnKSxcclxuXHRcdCAgcmVzdWx0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZm9ybS1jaXR5X19yZXN1bHQnKTtcclxuXHJcblx0aW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0aWYoaW5wdXQudmFsdWUubGVuZ3RoID4gMyAmJiBldmVudC5rZXkgIT09ICdlbnRlcicpe1xyXG5cclxuXHRcdFx0Zm9ybS5jbGFzc0xpc3QuYWRkKCdpcy1sb2FkaW5nJyk7XHJcblxyXG5cdFx0XHRjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKSxcclxuXHRcdFx0XHQgIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuXHRcdFx0eGhyLm9wZW4oXCJQT1NUXCIsIGZvcm0uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKSk7XHJcblx0XHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiWC1SZXF1ZXN0ZWQtV2l0aFwiLCBcIlhNTEh0dHBSZXF1ZXN0XCIpO1xyXG5cclxuXHRcdFx0eGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcclxuXHJcblx0XHRcdFx0aWYgKHhoci5yZWFkeVN0YXRlICE9PSA0KXtcclxuXHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xyXG5cclxuXHRcdFx0XHRcdHJlc3VsdC5pbm5lckhUTUwgPSB4aHIucmVzcG9uc2VUZXh0O1xyXG5cdFx0XHRcdFx0Zm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1sb2FkaW5nJyk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHhoci5zZW5kKGZvcm1EYXRhKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxuXHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGV2ZW50ID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCkpO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY2l0eScpKTsiLCIvKigoZmlsdGVyKT0+e1xyXG5cclxuXHRcInVzZSBzdHJpY3RcIjtcclxuXHJcblx0aWYoIWZpbHRlcikge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRjb25zdCBidG5PcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpbHRlci1vcGVuJyksXHJcblx0XHQgIGJ0bkNsb3NlID0gZmlsdGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWx0ZXItY2xvc2UnKSxcclxuXHRcdCAgYnRuUmFuZ2UgPSBmaWx0ZXIucXVlcnlTZWxlY3RvckFsbCgnLmZpbHRlcl9fcmFuZ2UtaXRlbScpO1xyXG5cclxuXHRBcnJheS5mcm9tKGJ0bk9wZW4sIGVsID0+XHJcblx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XHJcblx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnZmlsdGVyLXNob3cnKSkpO1xyXG5cclxuXHJcblx0QXJyYXkuZnJvbShidG5DbG9zZSwgZWwgPT5cclxuXHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cclxuXHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdmaWx0ZXItc2hvdycpKSk7XHJcblxyXG5cclxuXHRBcnJheS5mcm9tKGJ0blJhbmdlLCBlbCA9PiB7XHJcblxyXG5cdFx0Y29uc3QgYnRuID0gZWwucXVlcnlTZWxlY3RvcignLmZpbHRlcl9fcmFuZ2UtcmVzZXQnKSxcclxuXHRcdFx0ICBpbnB1dCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dCcpO1xyXG5cclxuXHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcblx0XHRcdGlucHV0LnZhbHVlID0gJyc7XHJcblx0XHRcdGlucHV0LmZvY3VzKCk7XHJcblx0XHRcdGJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0aW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiBidG4uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScsICFpbnB1dC52YWx1ZSkpO1xyXG5cclxuXHRcdGlmKCFpbnB1dC52YWx1ZSkge1xyXG5cclxuXHRcdFx0YnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXInKSk7Ki8iLCIoKGZvcm1zKSA9PiB7XHJcblxyXG5cdGlmKCFmb3Jtcy5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0QXJyYXkuZnJvbShmb3JtcywgZm9ybSA9PiB7XHJcblxyXG5cdFx0Ly8g0L7RgtC/0YDQsNCy0LrQsFxyXG5cclxuXHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pLFxyXG5cdFx0XHRcdCAgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG5cdFx0XHR4aHIub3BlbihcIlBPU1RcIiwgZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpKTtcclxuXHRcdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJYLVJlcXVlc3RlZC1XaXRoXCIsIFwiWE1MSHR0cFJlcXVlc3RcIik7XHJcblxyXG5cdFx0XHR4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRpZiAoeGhyLnJlYWR5U3RhdGUgIT0gNCl7XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcclxuXHJcblx0XHRcdFx0XHRjb25zdCBvYmogPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG5cclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKG9iaik7XHJcblxyXG5cdFx0XHRcdFx0aWYob2JqLm1vZGFsU2hvdykge1xyXG5cclxuXHRcdFx0XHRcdFx0aWYob2JqLm1vZGFsU2hvdyA9PT0gJ2luZm8nKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1pbmZvX190aXRsZScpLmlubmVySFRNTCA9IG9iai50aXRsZSA/IG9iai50aXRsZSA6ICcnO1xyXG5cdFx0XHRcdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1pbmZvX19tZXNzYWdlJykuaW5uZXJIVE1MID0gb2JqLm1lc3NhZ2UgPyBvYmoubWVzc2FnZSA6ICcnO1xyXG5cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0Q0cubW9kYWxTaG93KG9iai5tb2RhbFNob3cpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0eGhyLnNlbmQoZm9ybURhdGEpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtJykpOyIsIlxyXG4oKGl0ZW1zKSA9PiB7XHJcblxyXG5cdFwidXNlIHN0cmljdFwiO1xyXG5cclxuXHRpZighaXRlbXMubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdEFycmF5LmZyb20oaXRlbXMsIHNldCA9PiB7XHJcblxyXG5cdFx0Y29uc3QgZ2FsbGVyeVN3aXBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuXHRcdGdhbGxlcnlTd2lwZXIuY2xhc3NOYW1lID0gJ3N3aXBlci1jb250YWluZXIgc3dpcGVyLWNvbnRhaW5lci0tZ2FsbGVyeSc7XHJcblxyXG5cdFx0Y29uc3QgbGlua3MgPSBzZXQucXVlcnlTZWxlY3RvckFsbCgnLmdhbGxlcnktc2V0X19pdGVtJyk7XHJcblxyXG5cdFx0bGV0IHdyYXBwZXIgPSAnPHVsIGNsYXNzPVwic3dpcGVyLXdyYXBwZXJcIj4nO1xyXG5cclxuXHRcdEFycmF5LmZyb20obGlua3MsIChsaW5rLCBpbmRleCkgPT4ge1xyXG5cclxuXHRcdFx0d3JhcHBlciArPSAnPGxpIGNsYXNzPVwic3dpcGVyLXNsaWRlXCI+PGltZyBzcmM9XCInICsgbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSArICdcIj48L2xpPic7XHJcblxyXG5cdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0XHRpZihnYWxsZXJ5U3dpcGVyLnN3aXBlcikge1xyXG5cclxuXHRcdFx0XHRcdGdhbGxlcnlTd2lwZXIuc3dpcGVyLmRlc3Ryb3koZmFsc2UsdHJ1ZSk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWdhbGxlcnknKS5pbm5lckhUTUwgPSAnJztcclxuXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtZ2FsbGVyeScpLmFwcGVuZENoaWxkKGdhbGxlcnlTd2lwZXIuY2xvbmVOb2RlKHRydWUpKTtcclxuXHJcblx0XHRcdFx0Q0cubW9kYWxTaG93KCdnYWxsZXJ5Jyk7XHJcblxyXG5cdFx0XHRcdGNvbnN0IGdhbGxlcnlNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1nYWxsZXJ5IC5zd2lwZXItY29udGFpbmVyLS1nYWxsZXJ5Jyk7XHJcblxyXG5cdFx0XHRcdGdhbGxlcnlNb2RhbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5pdGlhbFNsaWRlJywgaW5kZXgpO1xyXG5cclxuXHRcdFx0XHRDRy5zd2lwZXIoZ2FsbGVyeU1vZGFsKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdHdyYXBwZXIgKz0gJzwvdWw+PHNwYW4gY2xhc3M9XCJzd2lwZXItY291bnRcIj48L3NwYW4+JztcclxuXHJcblx0XHRnYWxsZXJ5U3dpcGVyLmlubmVySFRNTCA9IHdyYXBwZXI7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbGxlcnktc2V0JykpOyIsIigoaGVhZGVyRml4ZWQpID0+IHtcclxuXHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cdGlmKCFoZWFkZXJGaXhlZCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XHJcblxyXG5cdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taGVpZ2h0SGVhZGVyRml4ZWRcIiwgaGVhZGVyRml4ZWQuY2xpZW50SGVpZ2h0ICsgJ3B4Jyk7XHJcblxyXG5cdFB1YlN1Yi5zdWJzY3JpYmUoJ3dpbmRvd1Njcm9sbCcsICgpID0+XHJcblx0XHRoZWFkZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtZml4ZWQnLCB3aW5kb3cuaW5uZXJIZWlnaHQgPCB3aW5kb3cucGFnZVlPZmZzZXQpKTtcclxuXHJcblx0UHViU3ViLnN1YnNjcmliZSgnd2luZG93V2lkdGhSZXNpemUnLCAoKSA9PlxyXG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS1oZWlnaHRIZWFkZXJGaXhlZFwiLCBoZWFkZXJGaXhlZC5jbGllbnRIZWlnaHQgKyAncHgnKSk7XHJcblxyXG5cclxuXHQvLyBidG4gdXAgdG9wXHJcblxyXG5cdGNvbnN0IGZvb3RlclVQID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3Rlcl9fdXAnKTtcclxuXHJcblx0aWYoZm9vdGVyVVApIHtcclxuXHJcblx0XHRQdWJTdWIuc3Vic2NyaWJlKCd3aW5kb3dTY3JvbGwnLCAoKSA9PlxyXG5cdFx0XHRmb290ZXJVUC5jbGFzc0xpc3QudG9nZ2xlKFwiaXMtc2hvd1wiLCB3aW5kb3cuaW5uZXJIZWlnaHQgPCB3aW5kb3cucGFnZVlPZmZzZXQpKTtcclxuXHJcblx0XHRmb290ZXJVUC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGRvY3VtZW50LmJvZHkuc2Nyb2xsSW50b1ZpZXcoe2JlaGF2aW9yOiBcInNtb290aFwifSkpO1xyXG5cclxuXHR9XHJcblxyXG5cdC8vIGZpeGVkXHJcblxyXG5cdGxldCBTY3JvbGxUb3BQcmV2ID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcblxyXG5cdFx0aWYod2luZG93LnBhZ2VZT2Zmc2V0IDw9IDApIHtcclxuXHJcblx0XHRcdGhlYWRlckZpeGVkLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXNob3cnKTtcclxuXHJcblx0XHR9XHJcblx0XHRlbHNlIGlmKHdpbmRvdy5wYWdlWU9mZnNldCA+IHdpbmRvdy5pbm5lckhlaWdodCl7XHJcblxyXG5cdFx0XHRoZWFkZXJGaXhlZC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1zaG93Jywgd2luZG93LnBhZ2VZT2Zmc2V0IDw9IFNjcm9sbFRvcFByZXYpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRTY3JvbGxUb3BQcmV2ID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuXHR9KTtcclxuXHJcblx0Ly8gY2xvc2UgbWVudVxyXG5cclxuXHRQdWJTdWIuc3Vic2NyaWJlKCdTd2lwZXJBdXRvUGxheVN0YXJ0JywgKCkgPT4ge1xyXG5cclxuXHRcdGlmICh3aW5kb3cuaW5uZXJIZWlnaHQgPCB3aW5kb3cucGFnZVlPZmZzZXQpe1xyXG5cclxuXHRcdFx0aGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2lzLWZpeGVkJyk7XHJcblx0XHRcdGhlYWRlckZpeGVkLmNsYXNzTGlzdC5hZGQoJ2lzLXNob3cnKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2ZpeGVkJykpOyIsIi8qQ0cubWFzayA9IChlbGVtcykgPT4ge1xyXG5cclxuXHRpZighZWxlbXMubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGlmICghd2luZG93LklucHV0bWFzaykge1xyXG5cclxuXHRcdGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG5cclxuXHRcdHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XHJcblx0XHRzY3JpcHQuYXN5bmMgPSB0cnVlO1xyXG5cdFx0c2NyaXB0LnNyYyA9Jy9qcy9pbnB1dG1hc2subWluLmpzJztcclxuXHJcblx0XHRzY3JpcHQub25sb2FkID0gKCkgPT4gc2V0TWFzaygpO1xyXG5cclxuXHRcdHNldFRpbWVvdXQoICgpID0+IGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KSwgNTAwMCk7XHJcblxyXG5cdH1cclxuXHRlbHNlIHtcclxuXHJcblx0XHRzZXRNYXNrKCk7XHJcblxyXG5cdH1cclxuXHJcblx0Y29uc3Qgc2V0TWFzayA9ICgpID0+IHtcclxuXHJcblx0XHRBcnJheS5mcm9tKGVsZW1zLCBlbCA9PiB7XHJcblxyXG5cdFx0XHRpZihlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2lucHV0bWFzay0tcGhvbmUnKSkge1xyXG5cclxuXHRcdFx0XHR2YXIgbWFza0lucHV0ID0gbmV3IElucHV0bWFzayh7XHJcblx0XHRcdFx0XHRtYXNrOiBcIis3ICggOTk5ICkgOTk5LTk5LTk5XCIsXHJcblx0XHRcdFx0XHRzaG93TWFza09uSG92ZXI6IGZhbHNlLFxyXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI6IFwiKzcgKCBfX18gKSBfX18tX18tX19cIlxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmKGVsLmNsYXNzTGlzdC5jb250YWlucygnaW5wdXRtYXNrLS1kYXRlJykpIHtcclxuXHJcblx0XHRcdFx0dmFyIG1hc2tJbnB1dCA9IG5ldyBJbnB1dG1hc2soe1xyXG5cdFx0XHRcdFx0YWxpYXM6IFwiZGF0ZXRpbWVcIixcclxuXHRcdFx0XHRcdHNob3dNYXNrT25Ib3ZlcjogZmFsc2UsXHJcblx0XHRcdFx0XHRpbnB1dEZvcm1hdDogXCJkZC5tbS55eXl5XCIsXHJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcjogXCLQtNC0LtC80Lwu0LPQs9Cz0LNcIlxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmKGVsLmNsYXNzTGlzdC5jb250YWlucygnaW5wdXRtYXNrLS1jdXJyZW5jeScpKSB7XHJcblxyXG5cdFx0XHRcdHZhciBtYXNrSW5wdXQgPSBuZXcgSW5wdXRtYXNrKHtcclxuXHRcdFx0XHRcdGFsaWFzOiBcImludGVnZXJcIixcclxuXHRcdFx0XHRcdHN1ZmZpeDogJyDRgNGD0LHQu9C10LknLFxyXG5cdFx0XHRcdFx0Z3JvdXBTaXplOiAzLFxyXG5cdFx0XHRcdFx0YXV0b0dyb3VwOiB0cnVlLFxyXG5cdFx0XHRcdFx0Z3JvdXBTZXBhcmF0b3I6ICcgJyxcclxuXHRcdFx0XHRcdHJpZ2h0QWxpZ246IGZhbHNlXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cclxuXHRcdFx0XHR2YXIgbWFza0lucHV0ID0gbmV3IElucHV0bWFzayhlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWFzaycpKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdG1hc2tJbnB1dC5tYXNrKGVsKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufTtcclxuXHJcbkNHLm1hc2soZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmlucHV0bWFzaycpKTsqLyIsIlxyXG4oKG1lbnUpID0+IHtcclxuXHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cdGlmKCFtZW51KSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy10b2dnbGUtbWVudScpLFxyXG5cdFx0ICBsZXZlbDEgPSBtZW51LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWNhdGFsb2dfX3BhcmVudCcpLFxyXG5cdFx0ICBzZWNvbmQgPSBtZW51LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWNhdGFsb2dfX3NlY29uZC1saW5rJyksXHJcblx0XHQgIGxldmVsMiA9IG1lbnUucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtY2F0YWxvZ19fbGV2ZWwyLWhlYWQuaXMtYXJyb3cnKSxcclxuXHRcdCAgYm94TGV2ZWwzID0gbWVudS5xdWVyeVNlbGVjdG9yKCcubWVudS1jYXRhbG9nX19sZXZlbDMnKSxcclxuXHRcdCAgYnRuQ2xvc2UgPSBtZW51LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWNhdGFsb2dfX2Nsb3NlJyksXHJcblx0XHQgIGJ0bkJhY2sgPSBtZW51LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWNhdGFsb2dfX2JhY2snKSxcclxuXHRcdCAgY2F0ZWdvcnkgPSBtZW51LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWNhdGFsb2dfX2N1cnJlbnQtY2F0ZWdvcnknKSxcclxuXHRcdCAgY2F0ZWdvcnlUZXh0RGVmYXVsdCA9IGNhdGVnb3J5LnRleHRDb250ZW50LFxyXG5cdFx0ICBidG5TbGlkZSA9IG1lbnUucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtY2F0YWxvZ19fc2xpZGUtYnRuJyk7XHJcblxyXG5cdGxldFx0bGV2ZWwyQWN0aXZlID0gbnVsbCxcclxuXHRcdGxldmVsMVNjcm9sbCA9IDAsXHJcblx0XHRsZXZlbDJTY3JvbGwgPSAwO1xyXG5cclxuXHRjb25zdCBtZW51T3BlbiA9ICgpID0+IHtcclxuXHJcblx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsLWJlaGF2aW9yLW9mZicpO1xyXG5cclxuXHRcdENHLk9wZW5NZW51ID0gdHJ1ZTtcclxuXHJcblx0XHRpZih3aW5kb3cuaW5uZXJXaWR0aCA8IENHLmJyZWFrUG9pbnRzKSB7XHJcblxyXG5cdFx0XHRDRy53aW5kb3dTY3JvbGxPbGQgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdtZW51LW9wZW4nKTtcclxuXHJcblx0XHRQdWJTdWIucHVibGlzaCgnU3dpcGVyQXV0b1BsYXlTdG9wJyk7XHJcblxyXG5cdFx0Ly8gZWFnZXJcclxuXHRcdGlmKHdpbmRvdy5pbm5lcldpZHRoID49IENHLmJyZWFrUG9pbnRzKSB7XHJcblxyXG5cdFx0XHRBcnJheS5mcm9tKG1lbnUucXVlcnlTZWxlY3RvckFsbCgnW2xvYWRpbmc9XCJsYXp5XCJdJyksIGltZyA9PiBpbWcuc2V0QXR0cmlidXRlKCdsb2FkaW5nJywnZWFnZXInKSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9O1xyXG5cclxuXHRjb25zdCBtZW51Q2xvc2UgPSAoKSA9PiB7XHJcblxyXG5cdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LW9wZW4nKTtcclxuXHJcblx0XHRpZih3aW5kb3cuaW5uZXJXaWR0aCA8IENHLmJyZWFrUG9pbnRzKSB7XHJcblxyXG5cdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgQ0cud2luZG93U2Nyb2xsT2xkKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Q0cuT3Blbk1lbnUgPSBmYWxzZTtcclxuXHJcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsLWJlaGF2aW9yLW9mZicpLCAxMDApO1xyXG5cclxuXHRcdFB1YlN1Yi5wdWJsaXNoKCdTd2lwZXJBdXRvUGxheVN0YXJ0Jyk7XHJcblxyXG5cdH07XHJcblxyXG5cdC8vINC+0YLQutGA0YvRgtGMfNC30LDQutGA0YvRgtGMINC80LXQvdGOXHJcblxyXG5cdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IENHLk9wZW5NZW51ID8gbWVudUNsb3NlKCkgOiBtZW51T3BlbigpKTtcclxuXHJcblxyXG5cdC8vINC30LDQutGA0YvRgtGMINC80LXQvdGOXHJcblxyXG5cdGJ0bkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbWVudUNsb3NlKCkpO1xyXG5cclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRpZihkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnbWVudS1vcGVuJykgJiYgIWV2ZW50LnRhcmdldC5jbG9zZXN0KCcuanMtdG9nZ2xlLW1lbnUnKSAmJiAhZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5tZW51LWNhdGFsb2cnKSkge1xyXG5cclxuXHRcdFx0bWVudUNsb3NlKCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcblx0Ly8g0J3QsCDRg9GA0L7QstC10L3RjCDQvdCw0LfQsNC0XHJcblxyXG5cdGJ0bkJhY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG5cdFx0aWYobWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWxldmVsMycpKSB7XHJcblxyXG5cdFx0XHRtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWxldmVsMycpO1xyXG5cclxuXHRcdFx0d2luZG93LnNjcm9sbFRvKDAsIGxldmVsMlNjcm9sbCk7XHJcblxyXG5cdFx0XHRjYXRlZ29yeS50ZXh0Q29udGVudCA9IGxldmVsMkFjdGl2ZS50ZXh0Q29udGVudDtcclxuXHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChtZW51LmNsYXNzTGlzdC5jb250YWlucygnaXMtbGV2ZWwyJykpIHtcclxuXHJcblx0XHRcdG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnaXMtbGV2ZWwyJyk7XHJcblxyXG5cdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgbGV2ZWwxU2Nyb2xsKTtcclxuXHJcblx0XHRcdGJ0bkJhY2suY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuXHRcdFx0Y2F0ZWdvcnkudGV4dENvbnRlbnQgPSBjYXRlZ29yeVRleHREZWZhdWx0O1xyXG5cclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cclxuXHRcdFx0Y29uc29sZS5sb2coJ9GH0YLQvi3RgtC+INC90LUg0YLQsNC6Jyk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcblxyXG5cdC8vINC/0LXRgNCy0YvQuSDRg9GA0L7QstC10L3RjFxyXG5cclxuXHRBcnJheS5mcm9tKGxldmVsMSwgZWwgPT4ge1xyXG5cclxuXHRcdGNvbnN0IGlkID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcblxyXG5cdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdC8vINC00LXRgdC60YLQvtC/XHJcblxyXG5cdFx0XHRpZih3aW5kb3cuaW5uZXJXaWR0aCA+PSBDRy5icmVha1BvaW50cykge1xyXG5cclxuXHRcdFx0XHRBcnJheS5mcm9tKGxldmVsMSwgZWxlbSA9PiBlbGVtLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWhvdmVyJywgZWxlbSA9PT0gZWwpKTtcclxuXHJcblx0XHRcdFx0aWYobGV2ZWwyQWN0aXZlKSB7XHJcblxyXG5cdFx0XHRcdFx0bGV2ZWwyQWN0aXZlLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRsZXZlbDJBY3RpdmUgPSBtZW51LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWNhdGFsb2dfX2xldmVsMi0tJyArIGlkKTtcclxuXHJcblx0XHRcdFx0bGV2ZWwyQWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdC8vINC80L7QsdCw0LnQu1xyXG5cclxuXHRcdFx0aWYoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1icmFuZCcpKSB7XHJcblxyXG5cdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKHdpbmRvdy5pbm5lcldpZHRoIDwgQ0cuYnJlYWtQb2ludHMpIHtcclxuXHJcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdFx0bGV2ZWwxU2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuXHRcdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcblxyXG5cdFx0XHRcdG1lbnUuY2xhc3NMaXN0LmFkZCgnaXMtbGV2ZWwyJyk7XHJcblxyXG5cdFx0XHRcdGlmKGxldmVsMkFjdGl2ZSkge1xyXG5cclxuXHRcdFx0XHRcdGxldmVsMkFjdGl2ZS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0bGV2ZWwyQWN0aXZlID0gbWVudS5xdWVyeVNlbGVjdG9yKCcubWVudS1jYXRhbG9nX19sZXZlbDItLScgKyBpZCk7XHJcblxyXG5cdFx0XHRcdGxldmVsMkFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdGJ0bkJhY2suY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHRjYXRlZ29yeS50ZXh0Q29udGVudCA9IGVsLnRleHRDb250ZW50O1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcblx0Ly8g0L/QtdGA0LLRi9C5INGD0YDQvtCy0LXQvdGMLCDQstGC0L7RgNC+0YHRgtC40L/QtdC90L3QvtC1INC80LXQvdGOXHJcblx0QXJyYXkuZnJvbShzZWNvbmQsIGVsID0+IHtcclxuXHJcblx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0Ly8g0LTQtdGB0LrRgtC+0L9cclxuXHJcblx0XHRcdGlmKHdpbmRvdy5pbm5lcldpZHRoID49IENHLmJyZWFrUG9pbnRzKSB7XHJcblxyXG5cdFx0XHRcdGlmKGxldmVsMkFjdGl2ZSkge1xyXG5cclxuXHRcdFx0XHRcdGxldmVsMkFjdGl2ZS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdFx0QXJyYXkuZnJvbShsZXZlbDEsIGVsZW0gPT4gZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1ob3ZlcicpKTtcclxuXHJcblx0XHRcdFx0XHRsZXZlbDJBY3RpdmUgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcblxyXG5cdC8vINCy0YLQvtGA0L7QuSDRg9GA0L7QstC10L3RjFxyXG5cclxuXHRBcnJheS5mcm9tKGxldmVsMiwgZWwgPT4ge1xyXG5cclxuXHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0Ly8g0LzQvtCx0LDQudC7XHJcblx0XHRcdGlmKHdpbmRvdy5pbm5lcldpZHRoIDwgQ0cuYnJlYWtQb2ludHMpIHtcclxuXHJcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdFx0bGV2ZWwyU2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuXHRcdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcblxyXG5cdFx0XHRcdGJveExldmVsMy5pbm5lckhUTUwgPSBlbC5wYXJlbnROb2RlLmlubmVySFRNTDtcclxuXHJcblx0XHRcdFx0bWVudS5jbGFzc0xpc3QuYWRkKCdpcy1sZXZlbDMnKTtcclxuXHJcblx0XHRcdFx0Y2F0ZWdvcnkudGV4dENvbnRlbnQgPSBlbC50ZXh0Q29udGVudDtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG5cdC8vINGA0LDQt9Cy0LXRgNC90YPRgtGMINC80LXQvdGOIHNsaWRlXHJcblxyXG5cdEFycmF5LmZyb20oYnRuU2xpZGUsIGVsID0+IHtcclxuXHJcblx0XHRjb25zdCBwYXJlbnQgPSBlbC5wYXJlbnROb2RlLFxyXG5cdFx0XHQgIGl0ZW1zSGlkZSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1jYXRhbG9nX19sZXZlbDItaXRlbS5oaWRlJyk7XHJcblxyXG5cdFx0bGV0IG9wZW4gPSBmYWxzZTtcclxuXHJcblx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdG9wZW4gPSAhb3BlbjtcclxuXHJcblx0XHRcdGVsLmNsYXNzTGlzdC50b2dnbGUoJ2lzLW9wZW4nLCBvcGVuKTtcclxuXHJcblx0XHRcdEFycmF5LmZyb20oaXRlbXNIaWRlLCBpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScsICFvcGVuKSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtY2F0YWxvZycpKTsiLCIoKG1vZGFsKT0+e1xyXG5cclxuXHRcInVzZSBzdHJpY3RcIjtcclxuXHJcblx0aWYoIW1vZGFsKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdHZhciBpdGVtcyA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbF9faXRlbScpLFxyXG5cdFx0YnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1vZGFsXScpLFxyXG5cdFx0Ym94ID0gbW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsX19ib3gnKSxcclxuXHRcdHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpLFxyXG5cdFx0d2luZG93U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuXHRtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRpZihldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbCcpIHx8IGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsX19ib3gnKSB8fCBldmVudC50YXJnZXQuY2xvc2VzdCgnLm1vZGFsX19jbG9zZScpKXtcclxuXHJcblx0XHRcdENHLmhpZGVNb2RhbCgpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG5cdENHLmhpZGVNb2RhbCA9ICgpID0+IHtcclxuXHJcblx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLXNob3cnKTtcclxuXHRcdHdyYXBwZXIuc3R5bGUudG9wID0gMDtcclxuXHRcdHdpbmRvdy5zY3JvbGxUbygwLHdpbmRvd1Njcm9sbCk7XHJcblxyXG5cdFx0Q0cuYWN0aXZlTW9kYWwgPSBmYWxzZTtcclxuXHJcblx0XHRQdWJTdWIucHVibGlzaCgnU3dpcGVyQXV0b1BsYXlTdGFydCcpO1xyXG5cclxuXHR9O1xyXG5cclxuXHRDRy5tb2RhbFNob3cgPSBzZWxlY3RvciA9PiB7XHJcblxyXG5cdFx0aWYoIUNHLmFjdGl2ZU1vZGFsKXtcclxuXHJcblx0XHRcdHdpbmRvd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcblx0XHRcdHdyYXBwZXIuc3R5bGUudG9wID0gLXdpbmRvd1Njcm9sbCArICdweCc7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdENHLmFjdGl2ZU1vZGFsID0gbW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsX19pdGVtLS0nICsgc2VsZWN0b3IpO1xyXG5cclxuXHRcdEFycmF5LmZyb20oaXRlbXMsIGVsID0+XHJcblx0XHRcdGVsLmNsYXNzTGlzdC50b2dnbGUoJ3Zpc3VhbGx5aGlkZGVuJywgZWwgIT09IENHLmFjdGl2ZU1vZGFsKSk7XHJcblxyXG5cdFx0bW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtZnVsbCcsIHNlbGVjdG9yID09PSAnZ2FsbGVyeScpO1xyXG5cclxuXHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWwtc2hvdycpO1xyXG5cdFx0d2luZG93LnNjcm9sbFRvKDAsMCk7XHJcblxyXG5cdFx0Q0cuYWN0aXZlTW9kYWwuZm9jdXMoKTtcclxuXHJcblx0XHRQdWJTdWIucHVibGlzaCgnbW9kYWxTaG93Jywgc2VsZWN0b3IpO1xyXG5cclxuXHRcdFB1YlN1Yi5wdWJsaXNoKCdTd2lwZXJBdXRvUGxheVN0b3AnKTtcclxuXHJcblx0XHRjb25zdCBpbnB1dEZvY3VzID0gQ0cuYWN0aXZlTW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsX19mb2N1cycpO1xyXG5cclxuXHRcdGlmIChpbnB1dEZvY3VzKSB7XHJcblxyXG5cdFx0XHRzZXRUaW1lb3V0KCAoKSA9PiBpbnB1dEZvY3VzLmZvY3VzKCksIDEwMDApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fTtcclxuXHJcblx0QXJyYXkuZnJvbShidG5zLCBlbCA9PlxyXG5cdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxyXG5cdFx0XHRDRy5tb2RhbFNob3coZWwuZ2V0QXR0cmlidXRlKCdkYXRhLW1vZGFsJykpKSk7XHJcblxyXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBldmVudCA9PiB7XHJcblxyXG5cdFx0aWYoQ0cuYWN0aXZlTW9kYWwgJiYgZXZlbnQua2V5Q29kZSA9PT0gMjcpe1xyXG5cclxuXHRcdFx0Q0cuaGlkZU1vZGFsKCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpKTsiLCJcclxuLy8g0L/QtdGA0LXQutC70Y7Rh9C10L3QuNC1INGE0L7RgtC+XHJcbigocHJldmlldykgPT4ge1xyXG5cclxuXHRpZighcHJldmlldy5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Y29uc3Qgc3dpcGVyUHJvZHVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2lwZXItY29udGFpbmVyLS1wcm9kdWN0Jyk7XHJcblxyXG5cdEFycmF5LmZyb20ocHJldmlldywgKGVsLCBpbmRleCkgPT4ge1xyXG5cclxuXHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0QXJyYXkuZnJvbShwcmV2aWV3LCBlbGVtID0+IHtcclxuXHJcblx0XHRcdFx0ZWxlbS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnLCBlbCA9PT0gZWxlbSk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGlmKHN3aXBlclByb2R1Y3Quc3dpcGVyKSB7XHJcblxyXG5cdFx0XHRcdHN3aXBlclByb2R1Y3Quc3dpcGVyLnNsaWRlVG8oaW5kZXgpO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHJcblx0XHRcdFx0c3dpcGVyUHJvZHVjdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5pdGlhbFNsaWRlJywgaW5kZXgpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWN0LWltZ19fcHJldmlldy1pdGVtJykpO1xyXG5cclxuLy8g0LrQvdC+0L/QutCwINC60YPQv9C40YLRjFxyXG4oKGZvcm0pID0+IHtcclxuXHJcblx0aWYoIWZvcm0pIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Y29uc3QgaGVhZGVyQ291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19jYXJ0IC5oZWFkZXJfX2ljb25zLWNvdW50Jyk7XHJcblxyXG5cdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0Y29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSksXHJcblx0XHRcdCAgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG5cdFx0eGhyLm9wZW4oXCJQT1NUXCIsIGZvcm0uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKSk7XHJcblx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIlgtUmVxdWVzdGVkLVdpdGhcIiwgXCJYTUxIdHRwUmVxdWVzdFwiKTtcclxuXHJcblx0XHR4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG5cclxuXHRcdFx0aWYgKHhoci5yZWFkeVN0YXRlICE9IDQpe1xyXG5cclxuXHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XHJcblxyXG5cdFx0XHRcdGNvbnN0IGNhcnQgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGNhcnQpO1xyXG5cclxuXHRcdFx0XHRpZihjYXJ0LmhlYWRlckNvdW50KSB7XHJcblxyXG5cdFx0XHRcdFx0aGVhZGVyQ291bnQudGV4dENvbnRlbnQgPSBjYXJ0LmhlYWRlckNvdW50O1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmKGNhcnQubW9kZSA9PT0gXCJhZGRcIikge1xyXG5cclxuXHRcdFx0XHRcdGZvcm0ucXVlcnlTZWxlY3RvcignLmNhcmQtcHJvZHVjdF9fYnRuIGEnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLXByb2R1Y3RfX2J0biBidXR0b24nKS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0eGhyLnNlbmQoZm9ybURhdGEpO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWJ1eScpKTtcclxuXHJcbi8vIGFydGljbGVJRFxyXG5cclxuKChhcnRpY2xlSW5wdXQpID0+IHtcclxuXHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cdGlmKCFhcnRpY2xlSW5wdXQubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGNvbnN0IHByb2R1Y3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1tYWluJyksXHJcblx0XHQgIGZvcm0gPSBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWJ1eScpLFxyXG5cdFx0ICBhcnRpY2xlSUQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiYXJ0aWNsZWlkXCJdJyksXHJcblx0XHQgIHN0b3JlSUQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwic3RvcmVpZFwiXScpLFxyXG5cdFx0ICBzYWxlID0gcHJvZHVjdC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1sYWJlbF9fc2FsZScpLFxyXG5cdFx0ICBza3UgPSBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWJvZHlfX3NrdS12YWx1ZScpLFxyXG5cdFx0ICBzdG9jayA9IHByb2R1Y3QucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtYm9keV9fYXZhaWxhYmlsaXR5LXZhbHVlJyksXHJcblx0XHQgIGJ0biA9IHByb2R1Y3QucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtYnV5X19idG4nKSxcclxuXHRcdCAgcHJpY2UgPSBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWJ1eV9fcHJpY2UtdmFsdWUnKSxcclxuXHRcdCAgcHJpY2VPbGQgPSBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWJ1eV9fb2xkLXByaWNlLXZhbHVlJyk7XHJcblxyXG5cdC8vINC60L3QvtC/0LrQuCDQstCw0YDQuNCw0L3RgtGLINGC0L7QstCw0YDQsFxyXG5cclxuXHRBcnJheS5mcm9tKGFydGljbGVJbnB1dCwgaW5wdXQgPT4ge1xyXG5cclxuXHRcdGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuXHJcblx0XHRcdGFydGljbGVJRC52YWx1ZSA9IGlucHV0LnZhbHVlO1xyXG5cclxuXHRcdFx0cHJpY2UudGV4dENvbnRlbnQgPSBpbnB1dC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2UnKTtcclxuXHJcblx0XHRcdGlmKHByaWNlT2xkKSB7XHJcblxyXG5cdFx0XHRcdGlmKGlucHV0LmdldEF0dHJpYnV0ZSgnZGF0YS1vbGQtcHJpY2UnKSkge1xyXG5cclxuXHRcdFx0XHRcdHByaWNlT2xkLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cdFx0XHRcdFx0cHJpY2VPbGQudGV4dENvbnRlbnQgPSBpbnB1dC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb2xkLXByaWNlJyk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRwcmljZU9sZC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYoc2FsZSkge1xyXG5cclxuXHRcdFx0XHRpZihpbnB1dC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2FsZScpKSB7XHJcblxyXG5cdFx0XHRcdFx0c2FsZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHRcdFx0XHRcdHNhbGUudGV4dENvbnRlbnQgPSBpbnB1dC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2FsZScpO1xyXG5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0c2FsZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYoc3RvY2spIHtcclxuXHJcblx0XHRcdFx0c3RvY2sudGV4dENvbnRlbnQgPSBpbnB1dC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RvY2snKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKHNrdSkge1xyXG5cclxuXHRcdFx0XHRza3UudGV4dENvbnRlbnQgPSBpbnB1dC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2t1Jyk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZihzdG9yZUlEKSB7XHJcblxyXG5cdFx0XHRcdHN0b3JlSUQudmFsdWUgPSBpbnB1dC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RvcmVpZCcpID8gaW5wdXQuZ2V0QXR0cmlidXRlKCdkYXRhLXN0b3JlaWQnKSA6IDE7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZihpbnB1dC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW4tYmFza2V0JykpIHtcclxuXHJcblx0XHRcdFx0YnRuLnF1ZXJ5U2VsZWN0b3IoJ2EnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblx0XHRcdFx0YnRuLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblxyXG5cdFx0XHRcdGJ0bi5xdWVyeVNlbGVjdG9yKCdhJykuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cdFx0XHRcdGJ0bi5xdWVyeVNlbGVjdG9yKCdidXR0b24nKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3QtYXJ0aWNsZV9faW5wdXQnKSk7XHJcblxyXG4vLyDQutC90L7Qv9C60LAg0LIg0L7QtNC40L0g0LrQu9C40Log0L3QsCDRgdGC0YDQsNC90LjRhtC1INGC0L7QstCw0YDQsFxyXG5cclxuKChidG4pID0+IHtcclxuXHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cdGlmKGJ0bikge1xyXG5cclxuXHRcdGNvbnN0IGZvcm1CdXlPbmVDbGljayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWJ1eS1vbmUtY2xpY2tfX3Byb2R1Y3QnKTtcclxuXHJcblx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCBwcm9kdWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtbWFpbicpLFxyXG5cdFx0XHRcdCAgZm9ybSA9IHByb2R1Y3QucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtYnV5JyksXHJcblx0XHRcdFx0ICBpZCA9IGZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJpZFwiXScpLFxyXG5cdFx0XHRcdCAgc3RvcmVpZCA9IGZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJzdG9yZWlkXCJdJyksXHJcblx0XHRcdFx0ICBjYXQgPSBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWJvZHlfX2JyYW5kIGEnKSxcclxuXHRcdFx0XHQgIHRpdGxlID0gcHJvZHVjdC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdF9fdGl0bGUnKSxcclxuXHRcdFx0XHQgIHByaWNlID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1idXlfX3ByaWNlLXZhbHVlJyksXHJcblx0XHRcdFx0ICBpbWcgPSBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWltZ19fbGluaycpLmlubmVySFRNTDtcclxuXHJcblx0XHRcdGZvcm1CdXlPbmVDbGljay5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImlkXCJdJykudmFsdWUgPSBpZC52YWx1ZTtcclxuXHRcdFx0Zm9ybUJ1eU9uZUNsaWNrLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwic3RvcmVpZFwiXScpLnZhbHVlID0gc3RvcmVpZCA/IHN0b3JlaWQudmFsdWUgOiAnJztcclxuXHJcblx0XHRcdGZvcm1CdXlPbmVDbGljay5xdWVyeVNlbGVjdG9yKCcuY2FyZC1pdGVtX19pbWcnKS5pbm5lckhUTUwgPSBpbWc7XHJcblx0XHRcdGZvcm1CdXlPbmVDbGljay5xdWVyeVNlbGVjdG9yKCcuY2FyZC1pdGVtX19jYXQnKS50ZXh0Q29udGVudCA9IGNhdC50ZXh0Q29udGVudDtcclxuXHRcdFx0Zm9ybUJ1eU9uZUNsaWNrLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWl0ZW1fX3RpdGxlJykudGV4dENvbnRlbnQgPSB0aXRsZS50ZXh0Q29udGVudDtcclxuXHRcdFx0Zm9ybUJ1eU9uZUNsaWNrLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWl0ZW1fX3ByaWNlJykudGV4dENvbnRlbnQgPSBwcmljZS50ZXh0Q29udGVudDtcclxuXHJcblx0XHRcdENHLm1vZGFsU2hvdygnYnV5LW9uZS1jbGljaycpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1idXlfX29uZS1jbGljaycpKTtcclxuLy9cclxuXHJcbi8vINCn0LDRgdGC0L4g0L/QvtC60YPQv9Cw0Y7RgiDQstC80LXRgdGC0LVcclxuXHJcbigoc2V0KSA9PiB7XHJcblxyXG5cdFwidXNlIHN0cmljdFwiO1xyXG5cclxuXHRpZighc2V0Lmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRjb25zdCBoZWFkZXJDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2NhcnQgLmhlYWRlcl9faWNvbnMtY291bnQnKTtcclxuXHJcblx0QXJyYXkuZnJvbShzZXQsIGZvcm0gPT4ge1xyXG5cclxuXHRcdGNvbnN0IGZpZWxkc2V0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1zZXRfX2ZpZWxkc2V0JyksXHJcblx0XHRcdCAgaW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWN0LXNldF9faW5wdXQnKSxcclxuXHRcdFx0ICBpdGVtcyA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3Qtc2V0X19pdGVtJyksXHJcblx0XHRcdCAgdG90YWwgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LXNldF9fdG90YWwtdmFsdWUnKSxcclxuXHRcdFx0ICB0b3RhbE5vdFNhbGUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LXNldF9fdG90YWwtdmFsdWUtbm90LXNhbGUnKSxcclxuXHRcdFx0ICBzYWxlID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1zZXRfX3RvdGFsLXZhbHVlLXNhbGUnKTtcclxuXHJcblx0XHQvLyDQvtGC0L/RgNCw0LLQutCwXHJcblxyXG5cdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0Y29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSksXHJcblx0XHRcdFx0ICB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcblx0XHRcdHhoci5vcGVuKFwiUE9TVFwiLCBmb3JtLmdldEF0dHJpYnV0ZSgnYWN0aW9uJykpO1xyXG5cdFx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIlgtUmVxdWVzdGVkLVdpdGhcIiwgXCJYTUxIdHRwUmVxdWVzdFwiKTtcclxuXHJcblx0XHRcdHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdGlmICh4aHIucmVhZHlTdGF0ZSAhPSA0KXtcclxuXHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xyXG5cclxuXHRcdFx0XHRcdGNvbnN0IGNhcnQgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coY2FydCk7XHJcblxyXG5cdFx0XHRcdFx0aWYoY2FydC5oZWFkZXJDb3VudCkge1xyXG5cclxuXHRcdFx0XHRcdFx0aGVhZGVyQ291bnQudGV4dENvbnRlbnQgPSBjYXJ0LmhlYWRlckNvdW50O1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRpZihjYXJ0Lm1vZGUgPT09IFwiYWRkXCIpIHtcclxuXHJcblx0XHRcdFx0XHRcdGZvcm0ucXVlcnlTZWxlY3RvcignLnByb2R1Y3Qtc2V0X19idG4gYScpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHRcdFx0XHRcdFx0Zm9ybS5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1zZXRfX2J0biBidXR0b24nKS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR4aHIuc2VuZChmb3JtRGF0YSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8g0LrQvdC+0L/QutC4IGNoZWNrXHJcblxyXG5cdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRsZXQgX3RvdGFsID0gMCxcclxuXHRcdFx0XHRfc2FsZSAgPSAwLFxyXG5cdFx0XHRcdHBsdXMgPSBmYWxzZTtcclxuXHJcblx0XHRcdEFycmF5LmZyb20oaW5wdXQsIChlbCxpbmRleCkgPT4ge1xyXG5cclxuXHRcdFx0XHRpdGVtc1tpbmRleF0uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScsICFlbC5jaGVja2VkKTtcclxuXHRcdFx0XHRpdGVtc1tpbmRleF0ucXVlcnlTZWxlY3RvcignLnByb2R1Y3Qtc2V0X19hcnRpY2xlaWQnKS5jaGVja2VkID0gZWwuY2hlY2tlZDtcclxuXHJcblx0XHRcdFx0aWYoZWwuY2hlY2tlZCkge1xyXG5cclxuXHRcdFx0XHRcdF9zYWxlICs9IHBhcnNlRmxvYXQoZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXNhbGUnKSk7XHJcblx0XHRcdFx0XHRfdG90YWwgKz0gcGFyc2VGbG9hdChlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2UnKSk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYocGx1cyA9PT0gZmFsc2UgJiYgaW5kZXggPiAwKSB7XHJcblxyXG5cdFx0XHRcdFx0cGx1cyA9ICFpdGVtc1tpbmRleCAtIDFdLmNsYXNzTGlzdC5jb250YWlucygnaGlkZScpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGl0ZW1zW2luZGV4XS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1wbHVzJywgcGx1cyk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHNhbGUudGV4dENvbnRlbnQgPSBfc2FsZTtcclxuXHRcdFx0dG90YWwudGV4dENvbnRlbnQgPSBfdG90YWw7XHJcblx0XHRcdHRvdGFsTm90U2FsZS50ZXh0Q29udGVudCA9IF90b3RhbCArIF9zYWxlO1xyXG5cclxuXHRcdFx0ZmllbGRzZXQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScsIGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3Qtc2V0X19pbnB1dDpjaGVja2VkJykubGVuZ3RoID09PSAwKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdC1zZXQnKSk7IiwiXHJcbigocXVhbnRpdHkpID0+IHtcclxuXHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cdGlmKCFxdWFudGl0eS5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0QXJyYXkuZnJvbShxdWFudGl0eSwgZWwgPT4ge1xyXG5cclxuXHRcdGNvbnN0IHVwID0gZWwucXVlcnlTZWxlY3RvcignLnF1YW50aXR5X19idG4tLXVwJyksXHJcblx0XHRcdCAgZG93biA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5xdWFudGl0eV9fYnRuLS1kb3duJyksXHJcblx0XHRcdCAgY291bnQgPSBlbC5xdWVyeVNlbGVjdG9yKCcucXVhbnRpdHlfX2NvdW50Jyk7XHJcblxyXG5cdFx0bGV0IHZhbHVlID0gbnVsbDtcclxuXHJcblx0XHRjb25zdCB0ZXN0SXNOYU4gPSAoKSA9PiB7XHJcblxyXG5cdFx0XHRpZiAoIGlzTmFOKHBhcnNlSW50KGNvdW50LnZhbHVlKSkgKSB7XHJcblxyXG5cdFx0XHRcdGNvdW50LnZhbHVlID0gMTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9O1xyXG5cclxuXHRcdHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0dmFsdWUgPSBwYXJzZUludChjb3VudC52YWx1ZSkgKyAxO1xyXG5cclxuXHRcdFx0Y291bnQudmFsdWUgPSB2YWx1ZTtcclxuXHJcblx0XHRcdHRlc3RJc05hTigpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdGRvd24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG5cdFx0XHR2YWx1ZSA9IHBhcnNlSW50KGNvdW50LnZhbHVlKSAtIDE7XHJcblxyXG5cdFx0XHRpZih2YWx1ZSA8IDEpIHtcclxuXHJcblx0XHRcdFx0dmFsdWUgPSAxO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Y291bnQudmFsdWUgPSB2YWx1ZTtcclxuXHJcblx0XHRcdHRlc3RJc05hTigpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdGNvdW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4gc2V0VGltZW91dCggKCkgPT4gY291bnQuc2V0U2VsZWN0aW9uUmFuZ2UoMCw5KSwgMTAwKSk7XHJcblxyXG5cdFx0Y291bnQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHRlc3RJc05hTigpKTtcclxuXHJcblx0XHRjb3VudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICgpID0+IGNvdW50LnZhbHVlID0gY291bnQudmFsdWUucmVwbGFjZSgvW1xcRF0vZywgJycpKTtcclxuXHJcblx0fSk7XHJcblxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnF1YW50aXR5JykpOyIsIi8vIGFqYXggYWRkIGl0ZW1cclxuXHJcbigoZm9ybSkgPT4ge1xyXG5cclxuXHRpZighZm9ybSkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRjb25zdCBidG4gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5idG4nKTtcclxuXHJcblx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKSxcclxuXHRcdFx0ICB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcblx0XHR4aHIub3BlbihcIlBPU1RcIiwgZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpKTtcclxuXHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiWC1SZXF1ZXN0ZWQtV2l0aFwiLCBcIlhNTEh0dHBSZXF1ZXN0XCIpO1xyXG5cclxuXHRcdGJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG5cdFx0eGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcclxuXHJcblx0XHRcdGlmICh4aHIucmVhZHlTdGF0ZSAhPSA0KXtcclxuXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xyXG5cclxuXHRcdFx0XHRidG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0Y29uc29sZS5sb2coeGhyLnJlc3BvbnNlVGV4dCk7XHJcblxyXG5cdFx0XHRcdGZvcm0uZWxlbWVudHMucGFnZS52YWx1ZSA9IHBhcnNlSW50KGZvcm0uZWxlbWVudHMucGFnZS52YWx1ZSArIDEpO1xyXG5cclxuXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmV2aWV3LXNvcnQtcmVzdWx0JykuaW5uZXJIVE1MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jldmlldy1zb3J0LXJlc3VsdCcpLmlubmVySFRNTCArIHhoci5yZXNwb25zZVRleHQ7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHhoci5zZW5kKGZvcm1EYXRhKTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmV2aWV3X19hamF4LWFkZCcpKTtcclxuXHJcblxyXG4vLyDRgdC+0YDRgtC40YDQvtCy0LDQutCwXHJcblxyXG4oKHNvcnQpID0+IHtcclxuXHJcblx0aWYoIXNvcnQubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdEFycmF5LmZyb20oc29ydCwgZm9ybSA9PiB7XHJcblxyXG5cdFx0Ly8g0L7RgtC/0YDQsNCy0LrQsFxyXG5cclxuXHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSksXHJcblx0XHRcdFx0ICB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcblx0XHRcdHhoci5vcGVuKFwiUE9TVFwiLCBmb3JtLmdldEF0dHJpYnV0ZSgnYWN0aW9uJykpO1xyXG5cdFx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIlgtUmVxdWVzdGVkLVdpdGhcIiwgXCJYTUxIdHRwUmVxdWVzdFwiKTtcclxuXHJcblx0XHRcdHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdGlmICh4aHIucmVhZHlTdGF0ZSAhPSA0KXtcclxuXHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xyXG5cclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHhoci5yZXNwb25zZVRleHQpO1xyXG5cclxuXHRcdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXZpZXctc29ydC1yZXN1bHQnKS5pbm5lckhUTUwgPSB4aHIucmVzcG9uc2VUZXh0O1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR4aHIuc2VuZChmb3JtRGF0YSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJldmlldy1zb3J0JykpO1xyXG5cclxuLy8g0L/QvtC60LDQt9Cw0YLRjCDRhNC+0YDQvNGDXHJcbigoZm9ybSkgPT4ge1xyXG5cclxuXHRpZighZm9ybSkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRjb25zdCBidG5TaG93ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcucmV2aWV3LWZvcm1fX3Nob3ctZm9ybScpO1xyXG5cclxuXHRidG5TaG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cclxuXHRcdEFycmF5LmZyb20oZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcucmV2aWV3LWZvcm1fX2ZpZWxkc2V0JyksIGVsID0+XHJcblx0XHRcdGVsLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWhpZGUnKSkpO1xyXG5cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXZpZXctZm9ybScpKTtcclxuXHJcbi8vIGxpa2VcclxuXHJcbigocmV2aWV3KSA9PiB7XHJcblxyXG5cdGlmKCFyZXZpZXcpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0cmV2aWV3LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRpZihldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdyZXZpZXctbGlrZScpKSB7XHJcblxyXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0Y29uc3QgZm9ybSA9IGV2ZW50LnRhcmdldCxcclxuXHRcdFx0XHQgIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pLFxyXG5cdFx0XHRcdCAgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG5cdFx0XHR4aHIub3BlbihcIlBPU1RcIiwgZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpKTtcclxuXHRcdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJYLVJlcXVlc3RlZC1XaXRoXCIsIFwiWE1MSHR0cFJlcXVlc3RcIik7XHJcblxyXG5cdFx0XHR4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRpZiAoeGhyLnJlYWR5U3RhdGUgIT0gNCl7XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcclxuXHJcblx0XHRcdFx0XHRjb25zdCBvYmogPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2cob2JqKTtcclxuXHJcblx0XHRcdFx0XHRpZihvYmoubW9kZSkge1xyXG5cclxuXHRcdFx0XHRcdFx0Zm9ybS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1saWtlJywgb2JqLm1vZGUgPT09IFwiYWRkXCIpO1xyXG5cdFx0XHRcdFx0XHRmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5yZXZpZXctbGlrZV9fY291bnQnKS50ZXh0Q29udGVudCA9IG9iai5jb3VudDtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHhoci5zZW5kKGZvcm1EYXRhKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jldmlldy1zb3J0LXJlc3VsdCcpKTtcclxuXHJcblxyXG5cclxuIiwiKChmb290ZXIpID0+IHtcclxuXHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cdGlmICgnSW50ZXJzZWN0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdykge1xyXG5cclxuXHRcdGNvbnN0IG9wdGlvbnMgPSB7XHJcblx0XHRcdHJvb3Q6IG51bGwsXHJcblx0XHRcdHJvb3RNYXJnaW46ICcwcHgnLFxyXG5cdFx0XHR0aHJlc2hvbGQ6IFsuMV1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhcicpO1xyXG5cclxuXHRcdGNvbnN0IGNhbGxiYWNrID0gKGVudHJpZXMsIG9ic2VydmVyKSA9PlxyXG5cclxuXHRcdFx0QXJyYXkuZnJvbShlbnRyaWVzLCBlbnRyeSA9PiB7XHJcblxyXG5cdFx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnYmctZm9vdGVyJywgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwLjEgJiYgd2luZG93LnBhZ2VZT2Zmc2V0ID4gMCk7XHJcblxyXG5cdFx0XHRcdGlmKGJhcikge1xyXG5cclxuXHRcdFx0XHRcdGJhci5jbGFzc0xpc3QudG9nZ2xlKCdpcy1oaWRkZW4nLCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDAuMSk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGNhbGxiYWNrLCBvcHRpb25zKTtcclxuXHJcblx0XHRvYnNlcnZlci5vYnNlcnZlKGZvb3Rlcik7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXInKSk7IiwiKChzZWFyY2gpPT57XHJcblxyXG5cdFwidXNlIHN0cmljdFwiO1xyXG5cclxuXHRpZighc2VhcmNoLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRBcnJheS5mcm9tKHNlYXJjaCwgZm9ybSA9PiB7XHJcblxyXG5cdFx0Y29uc3QgcmVzZXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfX3Jlc2V0JyksXHJcblx0XHRcdCAgaW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfX2lucHV0JyksXHJcblx0XHRcdCAgcmVzdWx0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX19yZXN1bHQnKTtcclxuXHJcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2V0JywgKCkgPT4ge1xyXG5cclxuXHRcdFx0cmVzZXQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cdFx0XHRyZXN1bHQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuXHRcdFx0c2V0VGltZW91dCggKCkgPT4gaW5wdXQuZm9jdXMoKSwgMTAwMCk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0aW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRyZXNldC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJywgIWlucHV0LnZhbHVlKTtcclxuXHRcdFx0cmVzdWx0LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnLCAhaW5wdXQudmFsdWUpO1xyXG5cclxuXHRcdFx0aWYoaW5wdXQudmFsdWUubGVuZ3RoID4gMyAmJiBldmVudC5rZXkgIT09ICdlbnRlcicpe1xyXG5cclxuXHRcdFx0XHRmb3JtLmNsYXNzTGlzdC5hZGQoJ2lzLWxvYWRpbmcnKTtcclxuXHJcblx0XHRcdFx0Y29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSksXHJcblx0XHRcdFx0XHQgIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuXHRcdFx0XHR4aHIub3BlbihcIlBPU1RcIiwgZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpKTtcclxuXHRcdFx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIlgtUmVxdWVzdGVkLVdpdGhcIiwgXCJYTUxIdHRwUmVxdWVzdFwiKTtcclxuXHJcblx0XHRcdFx0eGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRpZiAoeGhyLnJlYWR5U3RhdGUgIT09IDQpe1xyXG5cclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRyZXN1bHQuaW5uZXJIVE1MID0geGhyLnJlc3BvbnNlVGV4dDtcclxuXHRcdFx0XHRcdFx0Zm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1sb2FkaW5nJyk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHhoci5zZW5kKGZvcm1EYXRhKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VhcmNoJykpOyIsIigoaXRlbXMpPT57XHJcblxyXG5cdFwidXNlIHN0cmljdFwiO1xyXG5cclxuXHRpZighaXRlbXMubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdEFycmF5LmZyb20oaXRlbXMsIGVsID0+IHtcclxuXHJcblx0XHRjb25zdCBzZWxlY3QgPSBlbC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKTtcclxuXHJcblx0XHRzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0c2VsZWN0LmJsdXIoKTtcclxuXHRcdFx0ZWwuY2xhc3NMaXN0LnJlbW92ZSgnaXMtZGVmYXVsdCcpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3QnKSk7IiwiKChmb3JtKSA9PiB7XHJcblxyXG5cdGlmKCFmb3JtKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGxldCBzZWN1bmRzID0gNjA7XHJcblxyXG5cdGNvbnN0IHRpbWVyID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZm9ybS1zbXNfX3RpbWVyJyksXHJcblx0XHQgIHRleHRFcnJvciA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmZvcm0tbGtfX2FmdGVyJyksXHJcblx0XHQgIGJ0blJlcGVhdCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmZvcm0tbGtfX3JlcGVhdC1zbXMnKSxcclxuXHRcdCAgZm9ybUxvZ2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tbG9naW4nKTtcclxuXHJcblx0Y29uc3Qgc2V0dXBUaW1lciA9ICgpID0+IHtcclxuXHJcblx0XHR0aW1lci50ZXh0Q29udGVudCA9IHNlY3VuZHM7XHJcblxyXG5cdFx0c2V0VGltZW91dCggKCkgPT4ge1xyXG5cclxuXHRcdFx0c2VjdW5kcy0tO1xyXG5cclxuXHRcdFx0aWYoc2VjdW5kcyA+IDApIHtcclxuXHJcblx0XHRcdFx0c2V0dXBUaW1lcigpO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHJcblx0XHRcdFx0YnRuUmVwZWF0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHRcdFx0XHR0aW1lci5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9LCAxMDApO1xyXG5cclxuXHR9XHJcblxyXG5cdC8vINC/0L7QstGC0L7RgNC90YvQuSDQt9Cw0L/RgNC+0YEg0YHQvNGBXHJcblxyXG5cdGJ0blJlcGVhdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcblx0XHRidG5SZXBlYXQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cdFx0dGltZXIucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHQvLyDQvtCx0YDQsNCx0L7RgtC60LAg0L3QtdCy0LXRgNC90YvRhSDRgdC80YFcclxuXHJcblx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKSxcclxuXHRcdFx0ICB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcblx0XHR4aHIub3BlbihcIlBPU1RcIiwgZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpKTtcclxuXHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiWC1SZXF1ZXN0ZWQtV2l0aFwiLCBcIlhNTEh0dHBSZXF1ZXN0XCIpO1xyXG5cclxuXHRcdHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XHJcblxyXG5cdFx0XHRpZiAoeGhyLnJlYWR5U3RhdGUgIT0gNCl7XHJcblxyXG5cdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcclxuXHJcblx0XHRcdFx0dGV4dEVycm9yLmlubmVySFRNTCA9IHhoci5yZXNwb25zZVRleHQ7XHJcblx0XHRcdFx0dGV4dEVycm9yLmNsYXNzTGlzdC5hZGQoJ2lzLWVycm9yJyk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHhoci5zZW5kKGZvcm1EYXRhKTtcclxuXHJcblx0fSk7XHJcblxyXG5cdC8vINC+0LHRgNCw0LHQvtGC0LrQsCDRhNC+0YDQvNGLINC70L7Qs9C40L3QsFxyXG5cclxuXHRmb3JtTG9naW4uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0Y29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybUxvZ2luKSxcclxuXHRcdFx0ICB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcblx0XHR4aHIub3BlbihcIlBPU1RcIiwgZm9ybUxvZ2luLmdldEF0dHJpYnV0ZSgnYWN0aW9uJykpO1xyXG5cdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJYLVJlcXVlc3RlZC1XaXRoXCIsIFwiWE1MSHR0cFJlcXVlc3RcIik7XHJcblxyXG5cdFx0eGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcclxuXHJcblx0XHRcdGlmICh4aHIucmVhZHlTdGF0ZSAhPSA0KXtcclxuXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xyXG5cclxuXHRcdFx0XHRjb25zdCBvYmogPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG5cclxuXHRcdFx0XHRjb25zb2xlLmxvZyhvYmopO1xyXG5cclxuXHRcdFx0XHRpZihvYmoubW9kYWxTaG93ID09PSAnaW5mbycpIHtcclxuXHJcblx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtaW5mb19fdGl0bGUnKS5pbm5lckhUTUwgPSBvYmoudGl0bGUgPyBvYmoudGl0bGUgOiAnJztcclxuXHRcdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1pbmZvX19tZXNzYWdlJykuaW5uZXJIVE1MID0gb2JqLm1lc3NhZ2UgPyBvYmoubWVzc2FnZSA6ICcnO1xyXG5cclxuXHRcdFx0XHRcdENHLm1vZGFsU2hvdyhvYmoubW9kYWxTaG93KTtcclxuXHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYob2JqLnBob25lKSB7XHJcblxyXG5cdFx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLXNtc19fcGhvbmUnKS5pbm5lckhUTUwgPSBvYmoucGhvbmU7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYob2JqLnJlcGVhdCA9PT0gJ2Rpc2FibGVkJykge1xyXG5cclxuXHRcdFx0XHRcdGZvcm0ucXVlcnlTZWxlY3RvcignLmZvcm0tbGtfX3JlcGVhdCcpLmlubmVySFRNTCA9IG9iai50ZXh0O1xyXG5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0c2VjdW5kcyA9IHBhcnNlSW50KG9iai5yZXBlYXQpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdENHLm1vZGFsU2hvdygnc21zJyk7XHJcblx0XHRcdFx0c2V0dXBUaW1lcigpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHR4aHIuc2VuZChmb3JtRGF0YSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tc21zJykpOyIsIiIsIkNHLnN3aXBlciA9IHN3aXBlID0+IHtcclxuXHJcblx0bGV0IG15U3dpcGUgPSBudWxsLFxyXG5cdFx0dG9nZ2xlU3dpcGUgPSBudWxsLFxyXG5cdFx0cmVzZXRTd2lwZSA9IG51bGw7XHJcblxyXG5cdGNvbnN0IHN3aXBlQ29udHJvbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuXHRcdCAgc3dpcGVOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuXHRcdCAgc3dpcGVCdG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcblx0XHQgIHN3aXBlTmV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpLFxyXG5cdFx0ICBzd2lwZVByZXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSxcclxuXHRcdCAgaXRlbXMgPSBzd2lwZS5xdWVyeVNlbGVjdG9yQWxsKCcuc3dpcGVyLXNsaWRlJyksXHJcblx0XHQgIGNvdW50ID0gaXRlbXMubGVuZ3RoLFxyXG5cdFx0ICBhdXRvcGxheSA9IHN3aXBlLmdldEF0dHJpYnV0ZSgnZGF0YS1hdXRvcGxheScpICogMTAwMCxcclxuXHRcdCAgaW5pdGlhbFNsaWRlID0gc3dpcGUuZ2V0QXR0cmlidXRlKCdkYXRhLWluaXRpYWxTbGlkZScpID8gcGFyc2VJbnQoc3dpcGUuZ2V0QXR0cmlidXRlKCdkYXRhLWluaXRpYWxTbGlkZScpKSA6IDA7XHJcblx0XHQgIGNhcmRMaXN0ID0gc3dpcGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzd2lwZXItY29udGFpbmVyLS1jYXJkLWxpc3QnKSxcclxuXHRcdCAgcHJvZHVjdCA9IHN3aXBlLmNsYXNzTGlzdC5jb250YWlucygnc3dpcGVyLWNvbnRhaW5lci0tcHJvZHVjdCcpLFxyXG5cdFx0ICBiaWxsYm9hcmQgPSBzd2lwZS5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXBlci1jb250YWluZXItLWJpbGxib2FyZCcpLFxyXG5cdFx0ICBnYWxsZXJ5ID0gc3dpcGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzd2lwZXItY29udGFpbmVyLS1nYWxsZXJ5Jyk7XHJcblxyXG5cdHN3aXBlTmF2LmNsYXNzTmFtZSA9ICdzd2lwZXItcGFnaW5hdGlvbic7XHJcblx0c3dpcGVDb250cm9scy5jbGFzc05hbWUgPSAnc3dpcGVyLWNvbnRyb2xzJztcclxuXHJcblx0c3dpcGVCdG5zLmNsYXNzTmFtZSA9ICdzd2lwZXItbmF2aWdhdGlvbic7XHJcblx0c3dpcGVQcmV2LmNsYXNzTmFtZSA9ICdzd2lwZXItYnV0dG9uLXByZXYgYnV0dG9uJztcclxuXHRzd2lwZU5leHQuY2xhc3NOYW1lID0gJ3N3aXBlci1idXR0b24tbmV4dCBidXR0b24nO1xyXG5cclxuXHRzd2lwZVByZXYuaW5uZXJIVE1MID0gJzxzdmcgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjI5XCIgdmlld0JveD1cIjAgMCAxNiAyOVwiPjxwYXRoIGQ9XCJNMCAxNC4wMzRjMC0uNTAzLjE5Mi0xLjAwNi41NzUtMS4zOUwxMi42NDUuNTc3YTEuOTY2IDEuOTY2IDAgMTEyLjc4IDIuNzhMNC43NDQgMTQuMDM0bDEwLjY4IDEwLjY4YTEuOTY2IDEuOTY2IDAgMDEtMi43OCAyLjc3OUwuNTc0IDE1LjQyM0ExLjk2IDEuOTYgMCAwMTAgMTQuMDM1elwiLz48L3N2Zz4nO1xyXG5cdHN3aXBlTmV4dC5pbm5lckhUTUwgPSAnPHN2ZyB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMjlcIiB2aWV3Qm94PVwiMCAwIDE2IDI5XCI+PHBhdGggZD1cIk0xNiAxNC4wMzRhMS45NiAxLjk2IDAgMDEtLjU3NSAxLjM5TDMuMzU1IDI3LjQ5M2ExLjk2NSAxLjk2NSAwIDExLTIuNzgtMi43OGwxMC42OC0xMC42NzlMLjU3NSAzLjM1NmExLjk2NiAxLjk2NiAwIDAxMi43OC0yLjc4bDEyLjA3IDEyLjA2OWMuMzgzLjM4NC41NzUuODg3LjU3NSAxLjM5elwiLz48L3N2Zz4nO1xyXG5cclxuXHRzd2lwZUJ0bnMuYXBwZW5kQ2hpbGQoc3dpcGVQcmV2KTtcclxuXHRzd2lwZUJ0bnMuYXBwZW5kQ2hpbGQoc3dpcGVOZXh0KTtcclxuXHRzd2lwZUNvbnRyb2xzLmFwcGVuZENoaWxkKHN3aXBlQnRucyk7XHJcblx0c3dpcGVDb250cm9scy5hcHBlbmRDaGlsZChzd2lwZU5hdik7XHJcblx0c3dpcGUucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChzd2lwZUNvbnRyb2xzKTtcclxuXHJcblx0Ly8gZWFnZXJcclxuXHRpZihzd2lwZS5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXBlci1jb250YWluZXItLWxvYWRpbmctZWFnZXInKSkge1xyXG5cclxuXHRcdEFycmF5LmZyb20oc3dpcGUucXVlcnlTZWxlY3RvckFsbCgnW2xvYWRpbmc9XCJsYXp5XCJdJyksIGltZyA9PiBpbWcuc2V0QXR0cmlidXRlKCdsb2FkaW5nJywnZWFnZXInKSk7XHJcblxyXG5cdH1cclxuXHJcblx0Ly8gaGlkZVxyXG5cdEFycmF5LmZyb20oaXRlbXMsIGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XHJcblxyXG5cdHJlc2V0U3dpcGUgPSAoKSA9PiB7XHJcblxyXG5cdFx0aWYobXlTd2lwZSkge1xyXG5cclxuXHRcdFx0bXlTd2lwZS5kZXN0cm95KGZhbHNlLHRydWUpO1xyXG5cdFx0XHRteVN3aXBlID0gdW5kZWZpbmVkO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRzd2lwZU5hdi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblx0XHRzd2lwZUJ0bnMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cdFx0c3dpcGVDb250cm9scy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cdH1cclxuXHJcblx0cmVzZXRTd2lwZSgpO1xyXG5cclxuXHRpZiAoZ2FsbGVyeSkge1xyXG5cclxuXHRcdHRvZ2dsZVN3aXBlID0gKCkgPT4ge1xyXG5cclxuXHRcdFx0dG9nZ2xlU3dpcGUgPSBmYWxzZTtcclxuXHJcblx0XHRcdGNvbnN0IGNvdW50Q3VycmVudCA9IHN3aXBlLnF1ZXJ5U2VsZWN0b3IoJy5zd2lwZXItY291bnQnKTtcclxuXHJcblx0XHRcdGNvdW50Q3VycmVudC50ZXh0Q29udGVudCA9ICcnO1xyXG5cclxuXHRcdFx0aWYoY291bnQgPiAxKSB7XHJcblxyXG5cdFx0XHRcdHN3aXBlQnRucy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblx0XHRcdFx0c3dpcGVDb250cm9scy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblx0XHRcdFx0Y291bnRDdXJyZW50LnRleHRDb250ZW50ID0gKGluaXRpYWxTbGlkZSArIDEpICsgJy8nICsgY291bnQ7XHJcblxyXG5cdFx0XHRcdG5ldyBTd2lwZXIoc3dpcGUsIHtcclxuXHRcdFx0XHRcdGxvb3A6IHRydWUsXHJcblx0XHRcdFx0XHRpbml0aWFsU2xpZGU6IGluaXRpYWxTbGlkZSxcclxuXHRcdFx0XHRcdG5hdmlnYXRpb246IHtcclxuXHRcdFx0XHRcdFx0bmV4dEVsOiBzd2lwZU5leHQsXHJcblx0XHRcdFx0XHRcdHByZXZFbDogc3dpcGVQcmV2XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0b246IHtcclxuXHJcblx0XHRcdFx0XHRcdHNsaWRlQ2hhbmdlVHJhbnNpdGlvbkVuZDogKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZihzd2lwZS5zd2lwZXIpe1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGNvdW50Q3VycmVudC50ZXh0Q29udGVudCA9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHN3aXBlLnN3aXBlci5hY3RpdmVJbmRleCA9PT0gMCB8fCBzd2lwZS5zd2lwZXIuYWN0aXZlSW5kZXggPT09IGNvdW50ID9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb3VudCA6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3dpcGUuc3dpcGVyLmFjdGl2ZUluZGV4ICUgY291bnQ7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0Y291bnRDdXJyZW50LnRleHRDb250ZW50ICs9ICcvJyArIGNvdW50O1xyXG5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0aWYgKGNhcmRMaXN0KSB7XHJcblxyXG5cdFx0bGV0IHJvdyA9IHN3aXBlLmdldEF0dHJpYnV0ZSgnZGF0YS1jb3VudC1yb3cnKTtcclxuXHJcblx0XHR0b2dnbGVTd2lwZSA9ICgpID0+IHtcclxuXHJcblx0XHRcdHJlc2V0U3dpcGUoKTtcclxuXHJcblx0XHRcdHN3aXBlLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnc3dpcGVyLWNvbnRhaW5lci1zdHlsZScpO1xyXG5cclxuXHRcdFx0aWYgKHdpbmRvdy5pbm5lcldpZHRoID49IENHLmJyZWFrUG9pbnRzKSB7XHJcblxyXG5cdFx0XHRcdGlmKHJvdyA9PT0gJ2F1dG8nKSB7XHJcblxyXG4vKlx0XHRcdFx0XHRcdHN3aXBlLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnc3dpcGVyLWNvbnRhaW5lci1zdHlsZScpO1xyXG5cclxuXHRcdFx0XHRcdHN3aXBlQnRucy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRzd2lwZUNvbnRyb2xzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0XHRteVN3aXBlID0gbmV3IFN3aXBlcihzd2lwZSwge1xyXG5cdFx0XHRcdFx0XHRsb29wOiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0c2xpZGVzUGVyVmlldzogcm93LFxyXG5cdFx0XHRcdFx0XHRuYXZpZ2F0aW9uOiB7XHJcblx0XHRcdFx0XHRcdFx0bmV4dEVsOiBzd2lwZU5leHQsXHJcblx0XHRcdFx0XHRcdFx0cHJldkVsOiBzd2lwZVByZXZcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcbiovXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdHJvdyA9IHBhcnNlSW50KHJvdyk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKGNvdW50ID4gcm93KSB7XHJcblxyXG5cdFx0XHRcdFx0XHRzd2lwZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ3N3aXBlci1jb250YWluZXItc3R5bGUnKTtcclxuXHJcblx0XHRcdFx0XHRcdHN3aXBlQnRucy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRcdHN3aXBlQ29udHJvbHMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYoc3dpcGUuZ2V0QXR0cmlidXRlKCdkYXRhLW5hdicpKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHN3aXBlTmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdG15U3dpcGUgPSBuZXcgU3dpcGVyKHN3aXBlLCB7XHJcblx0XHRcdFx0XHRcdFx0bG9vcDogZmFsc2UsXHJcblx0XHRcdFx0XHRcdFx0c2xpZGVzUGVyVmlldzogcm93LFxyXG5cdFx0XHRcdFx0XHRcdHNsaWRlc1Blckdyb3VwOiByb3csXHJcblx0XHRcdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAzMCxcclxuXHRcdFx0XHRcdFx0XHRuYXZpZ2F0aW9uOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRuZXh0RWw6IHN3aXBlTmV4dCxcclxuXHRcdFx0XHRcdFx0XHRcdHByZXZFbDogc3dpcGVQcmV2XHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRwYWdpbmF0aW9uOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRlbDogc3dpcGVOYXYsXHJcblx0XHRcdFx0XHRcdFx0XHRjbGlja2FibGU6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0XHRidWxsZXRFbGVtZW50OiAnYnV0dG9uJyxcclxuXHRcdFx0XHRcdFx0XHRcdGJ1bGxldENsYXNzOiAnYnV0dG9uJyxcclxuXHRcdFx0XHRcdFx0XHRcdGJ1bGxldEFjdGl2ZUNsYXNzOiAnaXMtYWN0aXZlJ1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdGlmIChwcm9kdWN0KSB7XHJcblxyXG5cdFx0dG9nZ2xlU3dpcGUgPSAoKSA9PiB7XHJcblxyXG5cdFx0XHR0b2dnbGVTd2lwZSA9IGZhbHNlO1xyXG5cclxuXHRcdFx0c3dpcGVOYXYuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cdFx0XHRzd2lwZUNvbnRyb2xzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHJcblx0XHRcdG5ldyBTd2lwZXIoc3dpcGUsIHtcclxuXHRcdFx0XHRsb29wOiBmYWxzZSxcclxuXHRcdFx0XHRpbml0aWFsU2xpZGU6IGluaXRpYWxTbGlkZSxcclxuXHRcdFx0XHRwcmVsb2FkSW1hZ2VzOiBmYWxzZSxcclxuXHRcdFx0XHRwYWdpbmF0aW9uOiB7XHJcblx0XHRcdFx0XHRlbDogc3dpcGVOYXYsXHJcblx0XHRcdFx0XHRjbGlja2FibGU6IHRydWUsXHJcblx0XHRcdFx0XHRidWxsZXRFbGVtZW50OiAnYnV0dG9uJyxcclxuXHRcdFx0XHRcdGJ1bGxldENsYXNzOiAnYnV0dG9uJyxcclxuXHRcdFx0XHRcdGJ1bGxldEFjdGl2ZUNsYXNzOiAnaXMtYWN0aXZlJ1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdGlmIChiaWxsYm9hcmQpIHtcclxuXHJcblx0XHR0b2dnbGVTd2lwZSA9ICgpID0+IHtcclxuXHJcblx0XHRcdHRvZ2dsZVN3aXBlID0gZmFsc2U7XHJcblxyXG5cdFx0XHRzd2lwZU5hdi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblx0XHRcdHN3aXBlQnRucy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblx0XHRcdHN3aXBlQ29udHJvbHMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuXHRcdFx0bmV3IFN3aXBlcihzd2lwZSwge1xyXG5cdFx0XHRcdGxvb3A6IHRydWUsXHJcblx0XHRcdFx0cHJlbG9hZEltYWdlczogZmFsc2UsXHJcblx0XHRcdFx0YXV0b3BsYXk6IHtcclxuXHRcdFx0XHRcdGRlbGF5OiBhdXRvcGxheVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0bmF2aWdhdGlvbjoge1xyXG5cdFx0XHRcdFx0bmV4dEVsOiBzd2lwZU5leHQsXHJcblx0XHRcdFx0XHRwcmV2RWw6IHN3aXBlUHJldlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0cGFnaW5hdGlvbjoge1xyXG5cdFx0XHRcdFx0ZWw6IHN3aXBlTmF2LFxyXG5cdFx0XHRcdFx0Y2xpY2thYmxlOiB0cnVlLFxyXG5cdFx0XHRcdFx0YnVsbGV0RWxlbWVudDogJ2J1dHRvbicsXHJcblx0XHRcdFx0XHRidWxsZXRDbGFzczogJ2J1dHRvbicsXHJcblx0XHRcdFx0XHRidWxsZXRBY3RpdmVDbGFzczogJ2lzLWFjdGl2ZSdcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHRQdWJTdWIuc3Vic2NyaWJlKCd3aW5kb3dXaWR0aFJlc2l6ZScsICgpID0+IHtcclxuXHJcblx0XHRpZiAod2luZG93LlN3aXBlciAmJiB0b2dnbGVTd2lwZSkge1xyXG5cclxuXHRcdFx0dG9nZ2xlU3dpcGUoKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxuXHRpZih3aW5kb3cuU3dpcGVyICYmIHRvZ2dsZVN3aXBlKSB7XHJcblxyXG5cdFx0dG9nZ2xlU3dpcGUoKTtcclxuXHJcblx0fVxyXG5cdGVsc2Uge1xyXG5cclxuXHRcdFB1YlN1Yi5zdWJzY3JpYmUoJ3N3aXBlckpzTG9hZCcsIHRvZ2dsZVN3aXBlKTtcclxuXHJcblx0fVxyXG5cclxuXHRpZighQ0cuc3dpcGVySW5pdCkge1xyXG5cclxuXHRcdENHLnN3aXBlckluaXQgPSB0cnVlO1xyXG5cclxuXHRcdGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG5cclxuXHRcdHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XHJcblx0XHRzY3JpcHQuYXN5bmMgPSB0cnVlO1xyXG5cdFx0c2NyaXB0LnNyYyA9ICcvanMvc3dpcGVyLm1pbi5qcyc7XHJcblxyXG5cdFx0c2NyaXB0Lm9ubG9hZCA9ICgpID0+IFB1YlN1Yi5wdWJsaXNoKCdzd2lwZXJKc0xvYWQnKTtcclxuXHJcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCksIDUwMDApO1xyXG5cclxuXHR9XHJcblxyXG5cdGlmKGF1dG9wbGF5KSB7XHJcblxyXG5cdFx0UHViU3ViLnN1YnNjcmliZSgnU3dpcGVyQXV0b1BsYXlTdG9wJywgKCkgPT5cclxuXHRcdFx0c3dpcGUuc3dpcGVyICYmIHN3aXBlLnN3aXBlci5hdXRvcGxheS5zdG9wKCkpO1xyXG5cclxuXHRcdFB1YlN1Yi5zdWJzY3JpYmUoJ1N3aXBlckF1dG9QbGF5U3RhcnQnLCAoKSA9PlxyXG5cdFx0XHRzd2lwZS5zd2lwZXIgJiYgc3dpcGUuc3dpcGVyLmF1dG9wbGF5LnN0YXJ0KCkpO1xyXG5cclxuXHR9XHJcblxyXG59O1xyXG5cclxuKChzd2lwZXJDb250YWluZXIpPT57XHJcblxyXG5cdFwidXNlIHN0cmljdFwiO1xyXG5cclxuXHRpZighc3dpcGVyQ29udGFpbmVyLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRBcnJheS5mcm9tKHN3aXBlckNvbnRhaW5lciwgc3dpcGUgPT4gQ0cuc3dpcGVyKHN3aXBlKSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3dpcGVyLWNvbnRhaW5lcicpKTsiLCIvKlxyXG4vLyB0YWItc3dpcGVyXHJcblxyXG4oKHRhYnMpPT57XHJcblxyXG5cdFwidXNlIHN0cmljdFwiO1xyXG5cclxuXHRpZighdGFicy5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0QXJyYXkuZnJvbSh0YWJzLCB0YWIgPT4ge1xyXG5cclxuXHRcdGNvbnN0IGJ0bnMgPSB0YWIucXVlcnlTZWxlY3RvckFsbCgnLnRhYi1zd2lwZXJfX2J0bicpLFxyXG5cdFx0XHQgIGl0ZW1zID0gdGFiLnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWItc3dpcGVyX19pdGVtJyk7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShidG5zLCBidG4gPT4ge1xyXG5cclxuXHRcdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRBcnJheS5mcm9tKGJ0bnMsIChfYnRuLCBpbmRleCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdF9idG4uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJywgX2J0biA9PT0gYnRuKTtcclxuXHRcdFx0XHRcdGl0ZW1zW2luZGV4XS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnLCBfYnRuID09PSBidG4pO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWItc3dpcGVyJykpO1xyXG5cclxuXHJcbiovXHJcbi8vIHRhYnNcclxuXHJcbigodGFicyk9PntcclxuXHJcblx0QXJyYXkuZnJvbSh0YWJzLCB0YWIgPT4ge1xyXG5cclxuXHRcdGxldCBidG4gPSB0YWIucXVlcnlTZWxlY3RvckFsbCgnLnRhYnNfX2J0bicpLFxyXG5cdFx0XHRpdGVtID0gdGFiLnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJzX19pdGVtJyksXHJcblx0XHRcdG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuXHRcdEFycmF5LmZyb20oYnRuLCAoZWwsaW5kZXgpID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IF9idG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHJcblx0XHRcdF9idG4uc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XHJcblxyXG5cdFx0XHRfYnRuLmNsYXNzTmFtZSA9ICdidXR0b24gdGFic19fbmF2LWJ0bic7XHJcblxyXG5cdFx0XHRfYnRuLnRleHRDb250ZW50ID0gZWwudGV4dENvbnRlbnQ7XHJcblxyXG5cdFx0XHRuYXYuYXBwZW5kQ2hpbGQoX2J0bik7XHJcblxyXG5cdFx0XHRfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRBcnJheS5mcm9tKGl0ZW0sIChlbGVtLGlueCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdGVsZW0uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtc2hvdycsIGlueCA9PT0gaW5kZXgpO1xyXG5cdFx0XHRcdFx0YnRuW2lueF0uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJywgaW54ID09PSBpbmRleCk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRlbC5yZW1vdmUoKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRuYXYuY2xhc3NMaXN0LmFkZCgndGFic19fbmF2Jyk7XHJcblxyXG5cdFx0YnRuID0gbmF2LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJzX19uYXYtYnRuJyk7XHJcblxyXG5cdFx0aXRlbVswXS5jbGFzc0xpc3QuYWRkKCdpcy1zaG93Jyk7XHJcblx0XHRidG5bMF0uY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XHJcblxyXG5cdFx0dGFiLmluc2VydEJlZm9yZShuYXYsIGl0ZW1bMF0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJzJykpO1xyXG4iLCIoKGVsZW0pPT57XHJcblxyXG5cdFwidXNlIHN0cmljdFwiO1xyXG5cclxuXHRpZihlbGVtKSB7XHJcblxyXG5cdFx0ZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdGlmKGV2ZW50LnRhcmdldC5jbG9zZXN0KCcudGV4dC1zaG9ydF9fYnRuJykpe1xyXG5cclxuXHRcdFx0XHRldmVudC50YXJnZXQuY2xvc2VzdCgnLnRleHQtc2hvcnQnKS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1vcGVuJyk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZXh0LXNob3J0JykpOyIsIigoZm9ybXMpID0+IHtcclxuXHJcblx0aWYoIWZvcm1zLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRjb25zdCBoZWFkZXJDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3dpc2hsaXN0IC5oZWFkZXJfX2ljb25zLWNvdW50Jyk7XHJcblxyXG5cdEFycmF5LmZyb20oZm9ybXMsIGZvcm0gPT4ge1xyXG5cclxuXHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pLFxyXG5cdFx0XHRcdCAgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG5cdFx0XHR4aHIub3BlbihcIlBPU1RcIiwgZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpKTtcclxuXHRcdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJYLVJlcXVlc3RlZC1XaXRoXCIsIFwiWE1MSHR0cFJlcXVlc3RcIik7XHJcblxyXG5cdFx0XHR4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRpZiAoeGhyLnJlYWR5U3RhdGUgIT0gNCl7XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcclxuXHJcblx0XHRcdFx0XHRjb25zdCBvYmogPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2cob2JqKTtcclxuXHJcblx0XHRcdFx0XHRpZihvYmouaGVhZGVyQ291bnQpIHtcclxuXHJcblx0XHRcdFx0XHRcdGhlYWRlckNvdW50LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnLCBvYmouaGVhZGVyQ291bnQgPT09IDApO1xyXG5cdFx0XHRcdFx0XHRoZWFkZXJDb3VudC50ZXh0Q29udGVudCA9IG9iai5oZWFkZXJDb3VudDtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Zm9ybS5lbGVtZW50cy5tb2RlLnZhbHVlID0gb2JqLm1vZGU7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHhoci5zZW5kKGZvcm1EYXRhKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybS13aXNobGlzdCcpKTsiXX0=
