( () => {

	window.addEventListener('click', event => {

// можно унифицировать

		//  Найти аналогичный товар

		const findAnalogue = event.target.closest('.js-find-analogue');

		if (findAnalogue) {

			const template = document.querySelector('#preview-card-row-template').innerHTML;

			document.querySelector('#modal-form-find-analogue-product').innerHTML = Mustache.render(template, {

				id        : findAnalogue.getAttribute('data-id'),
				articleid : findAnalogue.getAttribute('data-articleid'),
				link      : findAnalogue.getAttribute('data-link'),
				price     : findAnalogue.getAttribute('data-price'),
				priceOld  : findAnalogue.getAttribute('data-price-old'),
				img       : findAnalogue.getAttribute('data-img'),
				img2x     : findAnalogue.getAttribute('data-img2x'),
				name      : findAnalogue.getAttribute('data-name')

			});

		}

		//  Уведомить  / найти аналог

		const findNotify = event.target.closest('.js-find-notify');

		if (findNotify) {

			const template = document.querySelector('#preview-card-row-template').innerHTML,
				  product = findNotify.closest('.preview-card'),
				  productModal = findNotify.closest('#preview-card-color'),
				  param = {
					id        : null,
					articleid : null,
					link      : null,
					price     : null,
					priceOld  : null,
					img       : null,
					img2x     : null,
					name      : null
				  };

			if ( product ) {
console.log(product.querySelector('.preview-card__form').elements)

				param.id        = product.querySelector('.preview-card__form').elements.id.value;
				param.link      = product.querySelector('.preview-card__title').href;
				param.price     = parseInt(product.querySelector('.price__value').textContent);
				param.img       = product.querySelector('.preview-card__img img').src;
				param.img2x     = product.querySelector('.preview-card__img img').src;
				param.name      = product.querySelector('.preview-card__img img').alt;

				if ( product.querySelector('.preview-card__form').elements.articleid ) {

					param.articleid = product.querySelector('.preview-card__form').elements.articleid.value;

				}

				if ( product.querySelector('.price__old') ) {

					param.priceOld = parseInt(product.querySelector('.price__old').textContent);

				}

			}

			if ( productModal ) {
console.log(productModal.elements)

				param.id        = productModal.elements.id.value;
				param.articleid = productModal.elements.articleid.value;
				param.link      = productModal.querySelector('.preview-card__title').href;
				param.price     = parseInt(productModal.elements.articleid.getAttribute('data-price'));
				param.img       = productModal.elements.articleid.getAttribute('data-src');
				param.img2x     = productModal.elements.articleid.getAttribute('data-src');
				param.name      = productModal.querySelector('.modal-card-color__title').textContent;

				if ( productModal.elements.articleid.getAttribute('data-price-old') ) {

					param.priceOld = parseInt(productModal.elements.articleid.getAttribute('data-price-old'));

				}

			}

			document.querySelector('#modal-form-find-notify-product').innerHTML = Mustache.render(template, param);

		}

	});

})();