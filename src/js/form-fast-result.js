( forms => {

	if(!forms.length) {

		return;

	}

	Array.from(forms, form => {

		const input = form.querySelector('.form-fast-result__input'),
			  result = form.querySelector('.form-fast-result__result');

		input.addEventListener('keyup', event => {

			if(input.value.length > 3 && event.key !== 'enter'){

				form.classList.add('is-loading');


				fetch(form.getAttribute('action'), {
					method: 'POST',
					headers: {
						'X-Requested-With' : 'XMLHttpRequest'
					},
					body: new FormData(form)
				})
				.then(response => response.text())
				.then(result => {

					console.log(result);

					result.innerHTML = result;
					form.classList.remove('is-loading');
					form.classList.toggle('is-empty', result.length === 0);

				});

			}

		});

	});

})(document.querySelectorAll('.form-fast-result'));