
( form => {

	if(!form) {

		return;

	}

	const result = form.querySelector('.dostavka__result');

	form.addEventListener('change', () => {

		form.classList.add('is-loading');

		const type = form.elements.type.value;

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

			if(type === "1" || type === "3") {

				alert('html');

			}
			else {

				alert('map как в продукте, Пункты выдачи и постаматы');

			}

		});

	});

})(document.querySelector('.dostavka'));