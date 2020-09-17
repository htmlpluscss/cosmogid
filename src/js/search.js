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

		});

		result.addEventListener('click', event => {

			const remove = event.target.closest('.search__result-remove');

			if(remove) {

				remove.closest('.search__result-item').classList.add('is-remove');

				console.log('удаляем результаты')

			}

		});

	});

})(document.querySelectorAll('.search'));