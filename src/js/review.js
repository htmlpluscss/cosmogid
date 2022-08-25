( review => {

	if( review ) {

		// sub

		const btnToggleSub = review.querySelectorAll('.review__toggle-sub');

		[...btnToggleSub].forEach( btn => {

			const group = btn.closest('.review__group'),
				  textDefault = btn.innerHTML;

			btn.addEventListener('click', () => {

				if ( group.classList.contains('is-open') ) {

					group.classList.remove('is-open');
					btn.innerHTML = textDefault;

				} else {

					group.classList.add('is-open');
					btn.textContent = btn.getAttribute('data-alt');

				}

			});

		});

/*
		// volume

		const volumeChange = cardVolume => {

			const form = cardVolume.closest('.review-buy'),
				  id = form.elements.id.value,
				  articleId = cardVolume.value,
				  templateFoot = document.querySelector('#review-buy-submit-template').innerHTML,
				  templateFavourite = document.querySelector('#review-buy-favourite-template').innerHTML,
				  templatePrice = document.querySelector('#review-buy-price-template').innerHTML,
				  templateAvailability = document.querySelector('#review-buy-availability-template').innerHTML,
				  templateOverlay = document.querySelector('#review-gallery-overlay-template').innerHTML;

			// кнопка купить

			const buy = cardVolume.getAttribute('data-buy'),
				  buyCart = buy === 'in-cart',
				  buyDisabled = buy === 'disabled',
				  buyBtn = buy === null || buyDisabled;

			form.querySelector('.review-buy__submit').innerHTML = Mustache.render(templateFoot, { buyBtn, buyDisabled, buyCart });

			// кнопка избранное

			const favourite = cardVolume.getAttribute('data-favourite');

			form.querySelector('.review-buy__favourite').innerHTML = Mustache.render(templateFavourite, { favourite });

			// цена

			const price = cardVolume.getAttribute('data-price'),
				  priceOld = cardVolume.getAttribute('data-price-old');

			form.querySelector('.review-buy__price').innerHTML = Mustache.render(templatePrice, { price, priceOld });

			// overlay

			const overlay = cardVolume.getAttribute('data-overlay'),
				  overlayTitle = cardVolume.getAttribute('data-overlay-title'),
				  overlayText = cardVolume.getAttribute('data-overlay-text'),
				  overlayLogin = overlay === 'login',
				  overlayNot = overlay === 'not',
				  overlayWithdrawn = overlay === 'withdrawn',
				  elOverlay = review.querySelector('.review-gallery__overlay');

			if ( elOverlay ) {

				elOverlay.remove();

			}

			review.querySelector('.review-gallery__wrap').insertAdjacentHTML('beforeend', Mustache.render(templateOverlay, { overlay, overlayTitle, overlayText, overlayLogin, overlayNot, overlayWithdrawn, id, articleId }));

			// availability

			if ( overlayNot ) {

				form.querySelector('.review-buy__availability').textContent = overlayTitle;
				form.querySelector('.review-buy__availability').classList.add('is-not');

			} else {

				form.querySelector('.review-buy__availability').textContent = Mustache.render(templateAvailability, { availability : false });
				form.querySelector('.review-buy__availability').classList.remove('is-not');

			}

		}

		document.addEventListener('change', event => {

			// изменить объём
			const cardVolume = event.target.closest('.review-buy__volume-input');

			if (cardVolume) {

				volumeChange(cardVolume);

			}

			// изменить объём в мобильном
			const cardVolumeMobile = event.target.closest('.review-buy__volume-select');

			if (cardVolumeMobile) {

				const value = cardVolumeMobile.value,
					  card = cardVolumeMobile.closest('.review-buy'),
					  inputBtn = card.querySelectorAll('.review-buy__volume-input');

				[...inputBtn].forEach( el => {

					if ( el.getAttribute('value') === value ) {

						el.checked = true;

						volumeChange(el);

					} else {

						el.checked = false;

					}

				});

			}

		});
*/
	}

})(document.querySelector('.review'));