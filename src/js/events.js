( () => {

	window.addEventListener('click', event => {

		//  Нашли дешевле?

		const bestPrice = event.target.closest('.js-best-price');

		if ( bestPrice ) {

			const template = document.querySelector('#preview-card-row-template').innerHTML,
				  product = bestPrice.closest('.product');
				  param = {};

			if ( product ) {

				param.id        = product.querySelector('.product-buy').id.value;
				param.link      = location.href;
				param.price     = parseInt(product.querySelector('.price__value').textContent);
				param.priceOld  = product.querySelector('data-price-old');
				param.img       = product.querySelector('.product-gallery img').src;
				param.img2x     = product.querySelector('.product-gallery img').src;
				param.name      = product.querySelector('.product__title').textContent;

				if ( product.querySelector('.product-buy').articleid ) {

					param.articleid = product.querySelector('.product-buy').articleid.value;

				}

				if ( product.querySelector('.price__old') ) {

					param.priceOld = parseInt(product.querySelector('.price__old').textContent);

				}

			}
			else {

				param.id        = bestPrice.getAttribute('data-id');
				param.articleid = bestPrice.getAttribute('data-articleid');
				param.link      = bestPrice.getAttribute('data-link');
				param.price     = bestPrice.getAttribute('data-price');
				param.priceOld  = bestPrice.getAttribute('data-price-old');
				param.img       = bestPrice.getAttribute('data-img');
				param.img2x     = bestPrice.getAttribute('data-img2x');
				param.name      = bestPrice.getAttribute('data-name');

			}

			document.querySelector('#modal-form-best-price-product').innerHTML = Mustache.render(template, param);

		}

		//  Найти аналогичный товар

		const findAnalogue = event.target.closest('.js-find-analogue');

		if ( findAnalogue ) {

			const template = document.querySelector('#preview-card-row-template').innerHTML,
				  param = {};

			param.id        = findAnalogue.getAttribute('data-id');
			param.articleid = findAnalogue.getAttribute('data-articleid');
			param.link      = findAnalogue.getAttribute('data-link');
			param.price     = findAnalogue.getAttribute('data-price');
			param.priceOld  = findAnalogue.getAttribute('data-price-old');
			param.img       = findAnalogue.getAttribute('data-img');
			param.img2x     = findAnalogue.getAttribute('data-img2x');
			param.name      = findAnalogue.getAttribute('data-name');

			document.querySelector('#modal-form-find-analogue-product').innerHTML = Mustache.render(template, param);

		}

		//  Уведомить  / найти аналог

		const findNotify = event.target.closest('.js-find-notify');

		if (findNotify) {

			const template = document.querySelector('#preview-card-row-template').innerHTML,
				  product = findNotify.closest('.product');
				  previewCard = findNotify.closest('.preview-card'),
				  productModal = findNotify.closest('#preview-card-color'),
				  param = {};

			if ( product ) {

				param.id        = product.querySelector('.product-buy').id.value;
				param.link      = location.href;
				param.price     = parseInt(product.querySelector('.price__value').textContent);
				param.priceOld  = product.querySelector('data-price-old');
				param.img       = product.querySelector('.product-gallery img').src;
				param.img2x     = product.querySelector('.product-gallery img').src;
				param.name      = product.querySelector('.product__title').textContent;

				if ( product.querySelector('.product-buy').articleid ) {

					param.articleid = product.querySelector('.product-buy').articleid.value;

				}

				if ( product.querySelector('.price__old') ) {

					param.priceOld = parseInt(product.querySelector('.price__old').textContent);

				}

			} else if ( previewCard ) {

				param.id        = previewCard.querySelector('.preview-card__form').elements.id.value;
				param.link      = previewCard.querySelector('.preview-card__title').href;
				param.price     = parseInt(previewCard.querySelector('.price__value').textContent);
				param.img       = previewCard.querySelector('.preview-card__img img').src;
				param.img2x     = previewCard.querySelector('.preview-card__img img').src;
				param.name      = previewCard.querySelector('.preview-card__img img').alt;

				if ( previewCard.querySelector('.preview-card__form').elements.articleid ) {

					param.articleid = previewCard.querySelector('.preview-card__form').elements.articleid.value;

				}

				if ( previewCard.querySelector('.price__old') ) {

					param.priceOld = parseInt(previewCard.querySelector('.price__old').textContent);

				}

			}

			if ( productModal ) {

				const checked = [...productModal.elements.articleid].find( el => el.checked );

				param.id        = productModal.elements.id.value;
				param.articleid = checked.value;
				param.link      = productModal.querySelector('.modal-card-color__title a').href;
				param.price     = parseInt(checked.getAttribute('data-price'));
				param.img       = checked.getAttribute('data-src');
				param.img2x     = checked.getAttribute('data-src');
				param.name      = productModal.querySelector('.modal-card-color__title').textContent;

				if ( checked.getAttribute('data-price-old') ) {

					param.priceOld = parseInt(checked.getAttribute('data-price-old'));

				}

			}

			document.querySelector('#modal-form-find-notify-product').innerHTML = Mustache.render(template, param);

		}

		// выбор подтоваров, каталог

		const btnSelectListToggle = event.target.closest('.js-select-list-toggle');

		if (btnSelectListToggle) {

			btnSelectListToggle.classList.toggle('is-open');

		}

/*

		const btnsSelectListToggle = document.querySelectorAll('.js-select-list-toggle');

		if ( btnsSelectListToggle.length > 0 ) {

			const btnSelectListToggle = event.target.closest('.js-select-list-toggle');

			if (btnSelectListToggle) {

				[...btnsSelectListToggle].forEach( btn => btn.classList.toggle('is-open', btn === btnSelectListToggle && btnSelectListToggle.classList.contains('is-open') === false));

			}
			else {

				[...btnsSelectListToggle].forEach( btn => btn.classList.remove('is-open'));

			}

		}*/
	});

})();