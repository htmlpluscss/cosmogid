( form => {

	if( form ) {

		form.addEventListener("click", event => {

			const target = event.target,
				  item = target.closest('.cart__item');

			// remove

			if ( target.closest('.cart-item__remove') ) {

				item.style.height = item.clientHeight + "px";

				item.addEventListener(window.cssAnimation('transition'), event => {

					if ( event.propertyName === 'height' && item.clientHeight === 0 ) {

						item.remove();

						setTimeout( ()=> form.dispatchEvent(new Event('change')),100);

					}

				});

				setTimeout( ()=> item.classList.add('is-remove') );

			}

		});

		// submit

		form.addEventListener('change', event => {

			fetch(form.getAttribute('action'), {
				method: 'POST',
				body: new FormData(form)
			})
			.then(response => response.text())
			.then(result => {

				console.log(result);

			});

		});


		// + | -

		const quantity = form.querySelectorAll('.cart-quantity');

		[...quantity].forEach( el => {

			let value = null;

			const up = el.querySelector('.cart-quantity__btn--up'),
				  down = el.querySelector('.cart-quantity__btn--down'),
				  count = el.querySelector('.cart-quantity__count');

			up.addEventListener('click', () => {

				value = parseInt(count.value);

				count.value = isNaN(value) ? 1 : value + 1;

				form.dispatchEvent(new Event('change'));

			});

			down.addEventListener('click', () => {

				value = parseInt(count.value);

				if( isNaN(value) || value < 2 ) {

					value = 2;

				}

				count.value = value - 1;

				form.dispatchEvent(new Event('change'));

			});

			count.addEventListener('blur', () => {

				form.dispatchEvent(new Event('change'));

			});

			count.addEventListener('focus', () => {

				setTimeout( () => count.setSelectionRange(0,9), 100);

			});

			count.addEventListener('keyup', () => {

				const val = count.value.replace(/[\D]/g, '');

				if ( isNaN(val) ) {

					val = 1;

				}

				count.value = val;

				form.dispatchEvent(new Event('change'));

			});

		});

	};

})(document.querySelector('.cart'));