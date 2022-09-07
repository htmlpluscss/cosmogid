( form => {

	if( form ) {

		const steps = form.querySelectorAll('.order__step'),
			  navLinks = form.querySelectorAll('.order__steps a');

		// hash

		const setStage = ()=> {

			const hash = location.hash;

			console.log(hash);

			[...steps].forEach( step => {

				step.classList.toggle('hide', step.getAttribute('data-hash') !== hash.slice(1) );

			});

			[...navLinks].forEach( link => {

				link.classList.toggle('is-active', link.getAttribute('href') === hash );

			});


			if( form.getBoundingClientRect().top < document.querySelector('.header').clientHeight ) {

				form.scrollIntoView({ behavior: 'smooth' });

			}

		}

		window.addEventListener('hashchange', setStage);

		if ( location.hash ) {

			setTimeout( setStage );

		}

		// btns

/*		const btns = order.querySelectorAll('a[href^="#"]');

		[...btns].forEach( link => {

			link.addEventListener('click', event => {

				event.preventDefault();

				if ( link.href.includes('#') ) {

					location.hash = link.getAttribute('href');

				} else {

					history.pushState('', document.title, window.location.pathname + window.location.search);

				}

				setStage();

			});

		});
*/
	};

})(document.querySelector('.order'));