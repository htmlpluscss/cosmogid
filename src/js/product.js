( product => {

	if( product ) {

		// param

		if ( window.innerWidth < 768 ) {

			const btn = product.querySelector('.product__open-tab .btn');

			btn.addEventListener('click', event => {

				event.preventDefault();

				btn.closest('.product__specs').classList.toggle('is-open');

			});

		}

		// hash

		const setTab = ()=> {

			const tabItem = document.querySelector(location.hash).closest('.tabs__item');

			if ( tabItem ) {

				tabItem.dispatchEvent(new Event("setActive"));

			}

		}

		window.addEventListener('hashchange', setTab);

		if ( location.hash ) {

			setTimeout( setTab );

		}

		// gallery

		const gallery = product.querySelector('.product-gallery');
			  galleryPreview = product.querySelectorAll('.product-gallery__preview-link');

		const setActiveImg = link => {

			let index = null;

			[...galleryPreview].forEach( (_link,_index) => {

				_link.parentNode.classList.toggle('is-current', _link === link);

				if ( _link === link ) {

					index = _index;

				}

			});

			product.querySelector('.swiper-container--product').swiper.slideToLoop(index);

		}

		gallery.addEventListener('click', event => {

			const targetLink = event.target.closest('a');

			if ( targetLink ) {

				event.preventDefault();

				if ( targetLink.classList.contains('product-gallery__preview-link') ) {

					setActiveImg(targetLink);

				}

			}

		});

		// volume

		const volumeChange = cardVolume => {


			const form = cardVolume.closest('.product-buy'),
				  id = form.elements.id.value,
				  articleId = cardVolume.value,
				  templateFoot = document.querySelector('#product-buy-submit-template').innerHTML,
				  templateFavourite = document.querySelector('#product-buy-favourite-template').innerHTML,
				  templatePrice = document.querySelector('#price-template').innerHTML,
				  templateAvailability = document.querySelector('#availability-template').innerHTML,
				  templateOverlay = document.querySelector('#overlay-disabled-template').innerHTML,
				  templateBoardLogin = document.querySelector('#product-login-template').innerHTML;

			// volume -> gallery

			[...galleryPreview].forEach( link => {

				if ( link.getAttribute('data-articleid') === articleId ) {

					setActiveImg(link);

				}

			});

			// кнопка избранное

			const favourite = cardVolume.getAttribute('data-favourite');

			form.querySelector('.product-buy__favourite').innerHTML = Mustache.render(templateFavourite, { favourite });

			// overlay

			const overlay = cardVolume.getAttribute('data-overlay'),
				  overlayTitle = cardVolume.getAttribute('data-overlay-title'),
				  overlayText = cardVolume.getAttribute('data-overlay-text'),
				  overlayLogin = overlay === 'login',
				  overlayNot = overlay === 'not',
				  overlayWithdrawn = overlay === 'withdrawn',
				  elOverlay = product.querySelector('.overlay-disabled'),
				  boardLogin = product.querySelector('.board-login');

			if ( elOverlay ) {

				elOverlay.remove();

			}

			if ( overlayLogin ) {

				if ( boardLogin === null ) {

					product.querySelector('.product-buy__price').insertAdjacentHTML('afterend', Mustache.render(templateBoardLogin));

					const tooltip = product.querySelector('.board-login .tooltip');

					if ( tooltip ) {

						new Tooltip(tooltip);

					}

				}

			} else {

				if ( boardLogin ) {

					boardLogin.remove();

				}

				product.querySelector('.product-gallery__wrap').insertAdjacentHTML('beforeend', Mustache.render(templateOverlay, { overlay, overlayTitle, overlayText, overlayLogin, overlayNot, overlayWithdrawn, id, articleId }));

			}

			// цена

			const price = cardVolume.getAttribute('data-price'),
				  priceOld = cardVolume.getAttribute('data-price-old');

			form.querySelector('.product-buy__price').innerHTML = Mustache.render(templatePrice, { price, priceOld });

			// кнопка купить

			const buy = cardVolume.getAttribute('data-buy'),
				  buyCart = buy === 'in-cart',
				  buyDisabled = buy === 'disabled',
				  professionalСallback = buy === 'professional-callback',
				  buyBtn = buy === null || buyDisabled,
				  btnLogin = overlayLogin;

			if ( btnLogin ) {

				form.querySelector('.product-buy__submit').innerHTML = Mustache.render(templateFoot, { btnLogin });

			} else {

				form.querySelector('.product-buy__submit').innerHTML = Mustache.render(templateFoot, { professionalСallback, buyBtn, buyDisabled, buyCart });

			}

			// availability

			form.querySelector('.product-buy__availability').innerHTML = Mustache.render(templateAvailability, { availability: !overlayNot });

		}

		document.addEventListener('change', event => {

			// изменить объём
			const cardVolume = event.target.closest('.product-buy__volume-input');

			if (cardVolume) {

				volumeChange(cardVolume);

			}

			// изменить объём в мобильном
			const cardVolumeMobile = event.target.closest('.product-buy__volume-select');

			if (cardVolumeMobile) {

				const value = cardVolumeMobile.value,
					  card = cardVolumeMobile.closest('.product-buy'),
					  inputBtn = card.querySelectorAll('.product-buy__volume-input');

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

		// Протокол

		const formSet = product.querySelectorAll('.preview-card__form-set');

		if ( formSet.length > 0 ) {

			const templateAddMode = document.querySelector('#product-set-addmode-template').innerHTML;

			[...formSet].forEach( form => {

				const mode = form.elements.mode,
					  btnWrap = form.querySelector('.preview-card__form-set-btn-add');

				form.addEventListener('submit', event => {

					event.preventDefault();
					console.log('В этой части ничего не делал, кроме смены кнопки. Могу убрать обработчик или написать что необходимо: переключение кнопок и т.п.');

					if ( mode.value === 'add' ) { // тут надо смотреть, что вернули: add | remove

						mode.value = 'remove';

						btnWrap.innerHTML = Mustache.render(templateAddMode, { remove : true });

					} else {

						mode.value = 'add';

						btnWrap.innerHTML = Mustache.render(templateAddMode, { add : true });

					}

				});

			});

		}

		// select volume

		const btnsSelect = product.querySelectorAll('.product-buy__select-btn');
		const btnsSelectToggle = product.querySelector('.product-buy__select-btn--open');

		if ( btnsSelectToggle ) {

			const form = btnsSelectToggle.closest('.product-buy'),
				  templatePrice = document.querySelector('#price-template').innerHTML;

			[...btnsSelect].forEach( btn => {

				btn.addEventListener('click', () => {

					if ( btn === btnsSelectToggle ) {

						// кнопка открытия

						btn.classList.toggle('is-open');

					}
					else {

						// выпадашка

						btnsSelectToggle.classList.remove('is-open');

						[...btnsSelect].forEach( _btn => {

							if ( _btn === btn ) {

								_btn.classList.add('is-current');

								form.elements.id.value = btn.getAttribute('data-id');

								btnsSelectToggle.querySelector('.product-buy__select-img img').src = btn.querySelector('.product-buy__select-img img').src;

								btnsSelectToggle.querySelector('.product-buy__select-name').textContent = btn.querySelector('.product-buy__select-name').textContent;

								const price = btn.getAttribute('data-price'),
									  priceOld = btn.getAttribute('data-price-old');

								form.querySelector('.product-buy__price').innerHTML = Mustache.render(templatePrice, { price, priceOld });

							}
							else {

								_btn.classList.remove('is-current');

							}

						});

					}

				});

			});

			window.addEventListener("click", event => {

				if ( event.target.closest('.product-buy__select') === null ) {

					btnsSelectToggle.classList.remove('is-open');

				}

			});

		}

	}

})(document.querySelector('.product'));