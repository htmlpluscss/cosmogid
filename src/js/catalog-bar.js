( form => {

	if(!form) {

		return;

	}

	form.addEventListener('change', () => {

		fetch(form.getAttribute('action'), {
			method: 'POST',
			headers: {
				'X-Requested-With' : 'XMLHttpRequest'
			},
			body: new FormData(form)
		})
		.then( response => {

			console.log(response);

		});

	});

})(document.querySelector('form.catalog-bar'));