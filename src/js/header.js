
( header => {

	if (header) {

		let resizeTimeout = null;

		header.classList.toggle('is-fixed', window.pageYOffset > document.documentElement.clientHeight);

		window.addEventListener("scroll", () => {

			window.requestAnimationFrame( () => {

				if ( resizeTimeout === null && document.body.classList.contains('modal-show') === false ) {

					resizeTimeout = setTimeout( () => {

						resizeTimeout = null;

						header.classList.toggle('is-fixed', window.pageYOffset > document.documentElement.clientHeight);

					}, 100);

				}

			});

		});

	}

})(document.querySelector('.header'));