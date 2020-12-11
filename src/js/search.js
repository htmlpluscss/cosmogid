((search)=>{

	"use strict";

	if(!search.length) {

		return;

	}

	Array.from(search, form => {

		const reset = form.querySelector('.search__reset'),
			  input = form.querySelector('.search__input'),
			  result = form.querySelector('.search__result');

		form.addEventListener('reset', () => {

			reset.classList.add('hide');
			result.classList.add('hide');

			setTimeout( () => input.focus(), 1000);

		});

		input.addEventListener('input', () => {

			reset.classList.toggle('hide', !input.value);
			result.classList.toggle('hide', !input.value);

			if(input.value.length > 3 && event.key !== 'enter'){

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

			}

		});

	});

})(document.querySelectorAll('.search'));