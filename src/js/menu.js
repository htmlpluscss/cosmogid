
((btns) => {

	"use strict";

	if(!btns.length) {

		return;

	}

	const menu = document.querySelector('.menu'),
		  level1 = menu.querySelectorAll('.menu__head'),
		  level2 = menu.querySelectorAll('.menu__head-level2'),
		  btnClose = menu.querySelector('.menu__close'),
		  btnBack = menu.querySelector('.menu__back'),
		  category = menu.querySelector('.menu__current-category'),
		  categoryTextDefault = category.textContent;

	let	level1Scroll = 0,
		level2Scroll = 0,
		level1Open = null,
		level2Open = null;

	// открыть меню

	Array.from(btns, btn => btn.addEventListener('click', () => {

		CG.windowScrollOld = window.pageYOffset;
		window.scrollTo(0, 0);
		document.body.classList.add('menu-open');
		menu.classList.remove('visuallyhidden');

	}));

	// закрыть меню

	btnClose.addEventListener('click', () => {

		setTimeout( () => window.scrollTo(0, CG.windowScrollOld));

		document.body.classList.remove('menu-open');
		menu.classList.add('visuallyhidden');

	});

	// На уровень назад

	btnBack.addEventListener('click', () => {

		if(menu.classList.contains('is-level3')) {

			menu.style.height = level1Open.nextElementSibling.scrollHeight + "px";

			menu.classList.remove('is-level3');

			Array.from(level2, elem => elem.parentNode.classList.remove('is-open'));

			window.scrollTo(0, level2Scroll);

			category.textContent = level1Open.textContent;

		}
		else if (menu.classList.contains('is-level2')) {

			menu.style.height = menu.querySelector('.menu__inner').clientHeight + "px";

			menu.classList.remove('is-level2');

			Array.from(level1, elem => elem.classList.remove('is-open'));

			window.scrollTo(0, level1Scroll);

			btnBack.classList.add('hide');

			category.textContent = categoryTextDefault;

		}
		else {

			console.log('что-то не так');

		}

	});


	// первый уровень

	Array.from(level1, el => {

		el.addEventListener('click', evt => {

			evt.preventDefault();

			level1Scroll = window.pageYOffset;

			menu.style.height = el.nextElementSibling.scrollHeight + "px";

			menu.classList.add('is-level2');

			Array.from(level1, elem => elem.classList.toggle('is-open', elem === el));

			level1Open = el;

			btnBack.classList.remove('hide');

			category.textContent = el.textContent;

		});

	});

	// второй уровень

	Array.from(level2, el => {

		el.addEventListener('click', evt => {

			evt.preventDefault();

			level2Scroll = window.pageYOffset;

			menu.style.height = el.parentNode.nextElementSibling.scrollHeight + "px";

			menu.classList.add('is-level3');

			Array.from(level2, elem => elem.parentNode.classList.toggle('is-open', elem === el));

			level2Open = el;

			category.textContent = el.textContent;

		});

	});

})(document.querySelectorAll('.js-open-menu'));