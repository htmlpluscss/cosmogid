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