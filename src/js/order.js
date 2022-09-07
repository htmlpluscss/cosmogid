( form => {

	if( form ) {

		const steps = form.querySelectorAll('.order__step'),
			  navLinks = form.querySelectorAll('.order__steps a');

		// hash

		const setStage = ()=> {

			const hash = location.hash;

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

	};

})(document.querySelector('.order'));