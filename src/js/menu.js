
// открыть|закрыть меню

(() => {

	"use strict";

	document.addEventListener('click', event => {

		if(event.target.closest('.btn-menu-toggle')) {

			document.body.classList.toggle('menu-open');

		}

	});

})();

// sum menu

((parent) => {

	"use strict";

	if(!parent.length) {

		return;

	}

	Array.from(parent, el => {

		el.querySelector('.menu__link').addEventListener('click', event => {

			event.preventDefault();

			el.classList.toggle('is-open');

		});

	});

})(document.querySelectorAll('.menu__item.is-parent'));

// brand menu

((menu) => {

	"use strict";

	if(!menu) {

		return;

	}

	const letter = menu.querySelector('.menu-filter__letter'),
		  country = menu.querySelector('.menu-filter__country'),
		  form = menu.querySelector('.menu-filter__form'),
		  formInput = form.querySelector('.input'),
		  items = menu.querySelectorAll('.menu-filter__item');

	const result = () => {

		const _letter = letter.value,
			  _country = country.value;

		Array.from(items, el => {

			if(_letter === "all" && _country === "all") {

				el.classList.remove('hide');

			}
			else {

				let visible = true;

				if(_letter !== "all") {

					if(_letter !== el.getAttribute('data-letter')){

						visible = false;

					}

				}

				if(_country !== "all") {

					if(_country !== el.getAttribute('data-country')){

						visible = false;

					}

				}

				el.classList.toggle('hide', !visible);

			}

		});

	};


	letter.addEventListener('change', () => result());

	country.addEventListener('change', () => result());

})(document.querySelector('.menu-filter'));