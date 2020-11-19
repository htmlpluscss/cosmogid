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

				const formData = new FormData(form),
					  xhr = new XMLHttpRequest();

				xhr.open("POST", form.getAttribute('action'));
				xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

				xhr.onreadystatechange = () => {

					if (xhr.readyState !== 4){

						return;

					}

					if (xhr.status === 200) {

						result.innerHTML = xhr.responseText;
						form.classList.remove('is-loading');
						form.classList.toggle('is-empty', xhr.responseText.length === 0);

					}

				}

				xhr.send(formData);

			}

		});

	});

})(document.querySelectorAll('.form-fast-result'));