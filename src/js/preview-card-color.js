( form => {

	if ( form ) {

		let modalFormTarget = null;

		document.addEventListener('click', event => {

			// выбор цвета

			const cardColor = event.target.closest('.preview-card__color');

			if (cardColor) {

				const card = event.target.closest('.preview-card'),
					  cardForm = card.querySelector('.preview-card__form');

				modalFormTarget = card.querySelector('.preview-card__modal-color');

				form.innerHTML = modalFormTarget.innerHTML;
				form.insertAdjacentElement('afterbegin', cardForm.elements.id.cloneNode());

				const eventModalShow = new CustomEvent("modalShow", {
					detail: {
						selector: "preview-card-color"
					}
				});

				window.modal.dispatchEvent(eventModalShow);

			}

		});

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

				// availability

				card.querySelector('.modal-card-color__availability').textContent = cardColor.getAttribute('data-availability');
				card.querySelector('.modal-card-color__availability').setAttribute('data-color', cardColor.getAttribute('data-availability-color'));

				// price

				if ( cardColor.getAttribute('data-price-old') ) {

					card.querySelector('.modal-card-color__price-old').textContent = cardColor.getAttribute('data-price-old');
					card.querySelector('.modal-card-color__price-old').classList.remove('hide');

				} else {

					card.querySelector('.modal-card-color__price-old').classList.add('hide');

				}

				card.querySelector('.modal-card-color__price-value').textContent = cardColor.getAttribute('data-price');

				// buy

				const buy = cardColor.getAttribute('data-buy') === 'enabled' || cardColor.getAttribute('data-buy') === 'disabled',
					  buyDisabled = cardColor.getAttribute('data-buy') === 'disabled',
					  buyCart = cardColor.getAttribute('data-buy') === 'in-cart',
					  templateSubmit = document.querySelector('#modal-card-color-submit-template').innerHTML;

				card.querySelector('.modal-card-color__submit').innerHTML = Mustache.render(templateSubmit, { buy, buyDisabled, buyCart });

				// overlay

				const overlay = cardColor.getAttribute('data-overlay'),
					  overlayTitle = cardColor.getAttribute('data-overlay-title'),
					  overlayText = cardColor.getAttribute('data-overlay-text'),
					  overlayLogin = overlay === 'login',
					  overlayNot = overlay === 'not',
					  elOverlay = card.querySelector('.modal-card-color__overlay');

				if ( elOverlay ) {

					elOverlay.remove();

				}

				card.querySelector('.modal-card-color__photo').insertAdjacentHTML('beforeend', Mustache.render(document.querySelector('#modal-card-color-overlay-template').innerHTML, { overlay, overlayTitle, overlayText, overlayLogin, overlayNot, id, articleId }));

			}

		});

	}

})(document.querySelector('#preview-card-color'));