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

				const card = event.target.closest('.modal-card-color'),
					  id = card.elements.id.value,
					  articleId = cardColor.value;

				// img

				card.querySelector('.modal-card-color__photo img').setAttribute('src', cardColor.getAttribute('data-src'));
				card.querySelector('.modal-card-color__photo img').setAttribute('srcset', cardColor.getAttribute('data-srcset'));

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

				// price

				if ( overlayLogin ) {

					card.querySelector('.price__value').textContent = '';
					card.querySelector('.price__old').textContent = '';

				} else {

					card.querySelector('.price__value').textContent = cardColor.getAttribute('data-price');

					if ( cardColor.getAttribute('data-price-old') ) {

						card.querySelector('.price__old').textContent = cardColor.getAttribute('data-price-old');
						card.querySelector('.price__old').classList.remove('hide');

					} else {

						card.querySelector('.price__old').classList.add('hide');

					}

				}

			}

		});

	}

})(document.querySelector('#preview-card-color'));