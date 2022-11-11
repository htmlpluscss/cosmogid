( menu => {

	if(menu) {

		let scrollLevel2 = null;

		const back = menu.querySelector('.menu-catalog__back'),
			  body = menu.querySelector('.menu-catalog__body');

		// иконка level2 +

		const linkBtn = menu.querySelectorAll('.menu-catalog__link.is-btn'),
			  icoPlus = document.createElementNS("http://www.w3.org/2000/svg", "svg");

		icoPlus.setAttributeNS(null, "viewBox", "0 0 24 24");
		icoPlus.setAttributeNS(null, "width", 24);
		icoPlus.setAttributeNS(null, "height", 24);
		icoPlus.setAttribute('role', 'button');

		icoPlus.innerHTML = '<rect x="11" y="6" width="2" height="12"/><rect x="6" y="11" width="12" height="2"/>';

		// иконка right level1 и level2
		const level_1 = menu.querySelectorAll('.menu-catalog__link--arrow'),
			  icoRight = document.createElementNS("http://www.w3.org/2000/svg", "svg");

		icoRight.setAttributeNS(null, "viewBox", "0 0 24 24");
		icoRight.setAttributeNS(null, "width", 32);
		icoRight.setAttributeNS(null, "height", 32);
		icoRight.setAttribute('role', 'button');

		icoRight.innerHTML = '<use xlink:href="#svg-chevron-right"/>';

		// resize

		const resize = () => {

			if ( window.innerWidth < 1250 ) {

				[...level_1].forEach( btn => {

					if ( btn.querySelector('svg') === null ) {

						btn.append(icoRight.cloneNode(true));

					}

				});

				[...linkBtn].forEach( btn => {

					if ( btn.querySelector('svg') ) {

						btn.querySelector('svg').remove();

					}

					btn.append(icoRight.cloneNode(true));

				});

			} else {

				back.classList.add('hide');
				body.classList.add('hide');

				[...level_1].forEach( btn => {

					if ( btn.querySelector('svg') ) {

						btn.querySelector('svg').remove();

					}

				});

				[...linkBtn].forEach( btn => {

					if ( btn.querySelector('svg') ) {

						btn.querySelector('svg').remove();

					}

					btn.append(icoPlus.cloneNode(true));

				});

			}

		}

		resize();

		let resizeTimeout = null,
			windowWidthOLd = window.innerWidth;

		window.addEventListener("resize", () => {

			window.requestAnimationFrame( () => {

				if (resizeTimeout === null) {

					resizeTimeout = setTimeout( () => {

						resizeTimeout = null;

						if(windowWidthOLd !== window.innerWidth) {

							resize();

						}

					}, 100);

				}

			});

		});

		// end resize


		// клик по level2 => раскрытие level3

		[...linkBtn].forEach( btn => {

			btn.addEventListener('click', event => {

				if ( event.target.closest('[role="button"]') ) {

					event.preventDefault();

					btn.classList.toggle('is-open');

				}

			});

		});

		// mobile

		// клик по level2 => раскрытие level3

		[...level_1].forEach( btn => {

			btn.addEventListener('click', event => {

				if ( window.innerWidth < 1250 && event.target.closest('[role="button"]') ) {

					event.preventDefault();

					scrollLevel2 = window.pageYOffset;

					back.innerHTML = btn.innerHTML;
					body.innerHTML = btn.nextElementSibling.innerHTML;

					window.requestAnimationFrame( () => {

						back.classList.remove('hide');
						body.classList.remove('hide');

					});

				}

			});

		});

		// back

		back.addEventListener('click', () => {

			window.requestAnimationFrame( () => {

				back.classList.add('hide');
				body.classList.add('hide');

				window.scrollTo(0,scrollLevel2);

			});

		});

		// body

		body.addEventListener('click', event => {

			const btn = event.target.closest('.is-btn');

			if ( btn && event.target.closest('[role="button"]') ) {

				event.preventDefault();

				btn.classList.toggle('is-open');

			}

		});

	}

})(document.querySelector('.menu-catalog'));

// toogle
( menu => {

	// btn toggle

	let windowScroll = null;

	( btns => {

		[...btns].forEach( btn => {

			btn.addEventListener('click', () => {

				windowScroll = window.pageYOffset;

				document.body.classList.add('menu-show');
				document.documentElement.classList.add('scroll-behavior-off');
				window.scrollTo(0,0);

			});

		});

	})(document.querySelectorAll('.btn-menu-open'));

	( btns => {

		[...btns].forEach( btn => {

			btn.addEventListener('click', () => {

				document.body.classList.remove('menu-show');
				window.scrollTo(0,windowScroll);

				setTimeout( () => document.documentElement.classList.remove('scroll-behavior-off') );

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