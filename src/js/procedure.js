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

	btn.addEventListener('click', () =>
		document.querySelector('.procedure-form').dispatchEvent(new CustomEvent("submit")));

})(document.querySelector('.procedure-form__result-submit'));