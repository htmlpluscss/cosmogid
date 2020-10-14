
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

		const input = form.querySelectorAll('.product-set__input'),
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