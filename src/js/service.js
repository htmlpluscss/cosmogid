( bar => {

	if(!bar) {

		return;

	}

	bar.addEventListener('click', event => {

		if(event.target.closest('.is-active')) {

			event.preventDefault();
			bar.classList.toggle('is-open');

		}

	});

})(document.querySelector('.service-page-bar'));