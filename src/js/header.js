
( header => {

/*

	if (header) {

		const menu = document.querySelector('.menu-catalog');

		let resizeTimeout = null;

		if ( window.innerWidth > 1249 ) {

			header.classList.toggle('is-fixed', window.pageYOffset > 36); // menu top
			menu.classList.toggle('is-transparent', window.pageYOffset > 86); // 60 + 53 - 37

		}

		window.addEventListener("scroll", () => {

			window.requestAnimationFrame( () => {

				if (
					resizeTimeout === null &&
					document.body.classList.contains('modal-show') === false &&
					window.innerWidth > 1249
				) {

					resizeTimeout = setTimeout( () => {

						resizeTimeout = null;

						header.classList.toggle('is-fixed', window.pageYOffset > 36);
						menu.classList.toggle('is-transparent', window.pageYOffset > 86);

					}, 100);

				}

			});

		});

		// search

		const headerSearch = header.querySelectorAll('.header-search__input');

		window.addEventListener("click", event => {

			const btnOpen = event.target.closest('.header-search-show');

			if ( btnOpen ) {

				header.classList.add('is-search');

				setTimeout( () => [...headerSearch].forEach( input => input.focus() ), 100);

			}

			if ( event.target.closest('.header') === null ) {

				header.classList.remove('is-search');
				[...headerSearch].forEach( input => input.classList.remove('is-focus') );

			}

		});

	}
*/
})(document.querySelector('.header'));