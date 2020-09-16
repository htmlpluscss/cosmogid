
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
