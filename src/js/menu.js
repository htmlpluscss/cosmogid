( menu => {

	if(!menu) {

		return;

	}

	const menuList  = menu.querySelector('.menu-catalog__list'),
		  menuItems  = menu.querySelectorAll('.menu-catalog__item');

	const icoArrow = document.createElementNS("http://www.w3.org/2000/svg", "svg");

	icoArrow.setAttributeNS(null, "viewBox", "0 0 24 24");
	icoArrow.setAttributeNS(null, "width", 24);
	icoArrow.setAttributeNS(null, "height", 24);
	icoArrow.innerHTML = '<use xlink:href="#svg-chevron-right"/>';

	[...menuItems].forEach( item => {

		if ( item.querySelector('.menu-catalog__sub') ) {

			const link = item.querySelector('.menu-catalog__link');

			link.append(icoArrow.cloneNode(true));

			link.addEventListener('click', event => {

				event.preventDefault();

				link.classList.toggle('is-open');

			});

		}

	});

	window.addEventListener("click", event => {

		if ( event.target.closest('.menu-catalog__btn-toggle') ) {

			document.body.classList.toggle('menu-catalog-open');
			menuList.classList.toggle('visuallyhidden');

		}
		else if ( event.target.closest('.menu-catalog') === null && event.target.closest('.header') === null ) {

			document.body.classList.remove('menu-catalog-open');
			menuList.classList.add('visuallyhidden');

		}

	});

	// btn toggle

	let windowScroll = null;

	( btns => {

		[...btns].forEach( btn => {

			btn.addEventListener('click', () => {

				if ( document.body.classList.contains('menu-show') ) {

					document.body.classList.remove('menu-show');
					document.documentElement.classList.remove('scroll-behavior-off');

				}
				else {

					windowScroll = window.pageYOffset;

					window.requestAnimationFrame( () => {

						document.body.classList.add('menu-show');
						menuList.classList.remove('visuallyhidden');
						document.documentElement.classList.add('scroll-behavior-off');

					});

				}

			});

		});

	})(document.querySelectorAll('.btn-menu-toggle'));

	( btns => {

		[...btns].forEach( btn => {

			btn.addEventListener('click', () => {

				document.body.classList.remove('menu-show');
				window.scrollTo(0,windowScroll);

				window.requestAnimationFrame( () => {

					document.documentElement.classList.remove('scroll-behavior-off');

				});

			});

		});

	})(document.querySelectorAll('.btn-menu-close'));

})(document.querySelector('.menu-catalog'));

// page-bar
( btn => {

	if ( btn ) {

		btn.addEventListener('click', () => {

			btn.classList.toggle('is-open');

		});

		window.addEventListener("click", event => {

			if ( event.target.closest('.page-bar__menu, .lk-menu') === null ) {

				btn.classList.remove('is-open');

			}

		});

	}

})(document.querySelector('.page-bar__menu-btn, .lk-menu__toggle-btn'));