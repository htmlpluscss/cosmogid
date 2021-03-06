
// всплывающий submit

document.body.addEventListener('submit', event => {

	if(!event.target.classList.contains('form')) {

		return;

	}

	event.preventDefault();

	const form = event.target,
		  url = form.getAttribute('action'),
		  formData = new FormData(form);

	let response = fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type' : 'application/json',
			'X-Requested-With' : 'XMLHttpRequest'
		},
		body: formData
	})
	.then( response => {

		console.log(response);

		if (!response.ok) {

			alert("Ошибка HTTP: " + response.status);
			return;

		}

		const obj = response.json();
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

	});

});