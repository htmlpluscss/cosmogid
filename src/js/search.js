((search)=>{

	"use strict";

	if(!search) {

		return;

	}

	const reset = search.querySelector('.search__reset'),
		  input = search.querySelector('.search__input'),
		  result = search.querySelector('.search__result');

	search.addEventListener('reset', () => {

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

})(document.querySelector('.search'));