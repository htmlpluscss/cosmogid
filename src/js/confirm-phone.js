
( elems => {

	"use strict";

	if(!elems.length) {

		return;

	}

	Array.from(elems, el => {

		const url = el.getAttribute('data-url'),
			  btn = el.querySelector('.confirm-phone__btn'),
			  error = el.querySelector('.confirm-phone__error'),
			  input = el.querySelector('.confirm-phone__input');

		btn.addEventListener('click', () => {

			error.classList.add('hide');

			if(input.value.length === 0) {

				error.classList.remove('hide');
				error.textContent = error.getAttribute('data-empty');
				input.focus();

			}
			else {

				const formData = new FormData();

				formData.append('id-disabled', el.getAttribute('id'));
				formData.append('phone', input.value);

				fetch(url, {
					method: 'POST',
					headers: {
						'X-Requested-With' : 'XMLHttpRequest'
					},
					body: formData
				})
				.then( response => {

					console.log(response);

					const obj = response.json();
					console.log(obj);

					if(obj.done) {

					//	input.disabled = true;
						document.querySelector('#modal-form-confirm-phone-sms').setupTimer();

					}

					if(obj.error) {

						error.classList.remove('hide');
						error.textContent = obj.error;

						//	Телефон уже есть в базе. Забыли авторизироваться?
						//	Подтвердите номер

					}

				});

			}

		});

	});

})( document.querySelectorAll('.confirm-phone') );