
// открыть|закрыть меню

((btn) => {

	"use strict";

	if(btn) {

		btn.addEventListener('click', () => document.body.classList.toggle('menu-open'));

	}

})(document.querySelector('.btn-menu-toggle'));

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
