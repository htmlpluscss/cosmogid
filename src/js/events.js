( () => {

	document.addEventListener('change', event => {

		// изменить объём
		const cardVolume = event.target.closest('.preview-card__volume-input');

		if (cardVolume) {

			const card = cardVolume.closest('.preview-card'),
				  id = cardVolume.closest('.preview-card__form').elements.id.value,
				  articleId = cardVolume.value,
				  templateFoot = document.querySelector('#preview-card-foot-template').innerHTML,
				  templateFlag = document.querySelector('#preview-card-flag-template').innerHTML,
				  templateLabel = document.querySelector('#preview-card-label-template').innerHTML,
				  templatePrice = document.querySelector('#preview-card-price-template').innerHTML,
				  templateOverlay = document.querySelector('#preview-card-overlay-template').innerHTML;

			// кнопка купить и избранное

			const buy = cardVolume.getAttribute('data-buy') === 'enabled' || cardVolume.getAttribute('data-buy') === 'disabled',
				  buyDisabled = cardVolume.getAttribute('data-buy') === 'disabled',
				  buyCart = cardVolume.getAttribute('data-buy') === 'in-cart',
				  favourite = cardVolume.getAttribute('data-favourite');

			card.querySelector('.preview-card__foot').innerHTML = Mustache.render(templateFoot, { buy, buyDisabled, buyCart, favourite });

			// цена

			const price = cardVolume.getAttribute('data-price'),
				  priceOld = cardVolume.getAttribute('data-price-old');

			card.querySelector('.preview-card__price').innerHTML = Mustache.render(templatePrice, { price, priceOld });

			// флаг

			const flag = cardVolume.getAttribute('data-flag'),
				  cardFlag = card.querySelector('.preview-card__flag');

			if (cardFlag) {

				if ( flag ) {

					cardFlag.textContent = flag;

				} else {

					cardFlag.remove();

				}

			} else if ( flag ) {

				card.querySelector('.preview-card__head').insertAdjacentHTML('beforeend', Mustache.render(templateFlag, { flag }));

			}

			// label

			const sale = cardVolume.getAttribute('data-label-sale'),
				  discount = cardVolume.getAttribute('data-label-discount'),
				  gift = cardVolume.getAttribute('data-label-gift'),
				  elLabel = card.querySelector('.preview-card__label');

			if ( elLabel ) {

				elLabel.remove();

			}

			card.querySelector('.preview-card__head').insertAdjacentHTML('beforeend', Mustache.render(templateLabel, { sale, discount, gift }));

			// overlay

			const overlay = cardVolume.getAttribute('data-overlay'),
				  overlayTitle = cardVolume.getAttribute('data-overlay-title'),
				  overlayText = cardVolume.getAttribute('data-overlay-text'),
				  overlayLogin = overlay === 'login',
				  overlayNot = overlay === 'not',
				  overlayWithdrawn = overlay === 'withdrawn',
				  elOverlay = card.querySelector('.preview-card__overlay');

			if ( elOverlay ) {

				elOverlay.remove();

			}

			card.querySelector('.preview-card__head').insertAdjacentHTML('beforeend', Mustache.render(templateOverlay, { overlay, overlayTitle, overlayText, overlayLogin, overlayNot, overlayWithdrawn, id, articleId }));

		}

	});

	document.addEventListener('click', event => {

		// Уведомить  / найти аналог
		// Найти аналог

		const modalFormSetId = event.target.closest('[data-form-set-id]');

		if (modalFormSetId) {

//			document.querySelector('#' + modalFormSetId.getAttribute('data-form-set-id')).elements.id.value = modalFormSetId.getAttribute('data-id');

		}

		// выбор цвета

		const cardColor = event.target.closest('.preview-card__color');

		if (cardColor) {


			const eventModalShow = new CustomEvent("modalShow", {
				detail: {
					selector: "card-color"
				}
			});

			window.modal.dispatchEvent(eventModalShow);

		}

	});

})();