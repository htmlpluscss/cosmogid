// переключение articleID

((articleID) => {

	if(!articleID) {

		return;

	}

	document.body.addEventListener('change', event => {

		const articleidEvents = event.target.closest('.articleid-events');

		if(articleidEvents){

			const control = event.target,
				  inputID = articleidEvents.querySelector('.articleid-events__value'),
				  storeID = articleidEvents.querySelector('.articleid-events__storeid'),
				  sale = articleidEvents.querySelector('.articleid-events__sale'),
				  sku = articleidEvents.querySelector('.articleid-events__sku-value'),
				  stock = articleidEvents.querySelector('.articleid-events__availability-value'),
				  btn = articleidEvents.querySelector('.articleid-events__btn'),
				  price = articleidEvents.querySelector('.articleid-events__price-value'),
				  priceOld = articleidEvents.querySelector('.articleid-events__old-price-value');

			inputID.value = control.value;
			storeID.value = control.getAttribute('data-storeid') ? control.getAttribute('data-storeid') : 1;
			price.textContent = control.getAttribute('data-price');

			if(priceOld) {

				if(control.getAttribute('data-old-price')) {

					priceOld.parentNode.classList.remove('hide');
					priceOld.textContent = control.getAttribute('data-old-price');

				}
				else {

					priceOld.parentNode.classList.add('hide');

				}

			}

			if(sale) {

				if(control.getAttribute('data-sale')) {

					sale.parentNode.classList.remove('hide');
					sale.textContent = control.getAttribute('data-sale');

				}
				else {

					sale.parentNode.classList.add('hide');

				}

			}

			if(control.getAttribute('data-in-basket')) {

				btn.querySelector('a').classList.remove('hide');
				btn.querySelector('button').classList.add('hide');

			}
			else {

				btn.querySelector('a').classList.add('hide');
				btn.querySelector('button').classList.remove('hide');

			}

			if(stock) {

				stock.textContent = control.getAttribute('data-stock');

			}

			if(sku) {

				sku.textContent = control.getAttribute('data-sku');

			}

		}

	});

})(document.querySelector('.articleid-events'));