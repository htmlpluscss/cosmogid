
( form => {

	if(!form) {

		return;

	}

	const result = form.querySelector('.dostavka__result');

	form.addEventListener('change', () => {

		form.classList.add('is-loading');

		fetch(form.getAttribute('action'), {
			method: 'POST',
			headers: {
				'X-Requested-With' : 'XMLHttpRequest'
			},
			body: new FormData(form)
		})
		.then( response => {

			console.log(response);
			result.innerHTML = response.text();
			form.classList.remove('is-loading');

		});

	});

})(document.querySelector('.dostavka'));