((forms) => {

	if(!forms.length) {

		return;

	}

	Array.from(forms, form => {

		const inputID = form.querySelector('[name="id"]'),
			  inputMode = form.querySelector('[name="mode"]'),
			  priceText = form.querySelector('.card-product__price-value'),
			  priceOldText = form.querySelector('.card-product__old-price-value'),
			  priceOldBox = form.querySelector('.card-product__old-price');

		// кнопки size

		const btnSize = form.querySelectorAll('.form-buy__size-input');

		Array.from(btnSize, input => {

			input.addEventListener('change', () => {

				inputID.value = input.value;
				priceText.textContent = input.getAttribute('data-price');

				if(input.getAttribute('data-old-price')) {

					priceOldBox.classList.remove('hide');
					priceOldText.textContent = input.getAttribute('data-old-price');

				}
				else {

					priceOldBox.classList.add('hide');

				}

				inputMode.value = input.getAttribute('data-in-basket') ? 'del' : 'add';

			});

		});

		// отправка

		form.addEventListener('submit', event => {

			event.preventDefault();

			const formData = new FormData(form),
				  xhr = new XMLHttpRequest();

			xhr.open("POST", form.getAttribute('action'));

			xhr.onreadystatechange = () => {

				if (xhr.readyState != 4){

					return;

				}

				if (xhr.status === 200) {

					console.log(xhr.responseText, ' надо возвращать del или add', form.elements.id.value);
				//	form.elements.mode.value = xhr.responseText;

					form.elements.mode.value = form.elements.mode.value === 'del' ? 'add' : 'del'; // для демо

					if(btnSize.length) {

						Array.from(btnSize, input => {

							if(input.value === form.elements.id.value) {

								if(form.elements.mode.value === 'del') {

									input.setAttribute('data-in-basket','in basket');

								}
								else {

									input.removeAttribute('data-in-basket');

								}

							}

						});

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