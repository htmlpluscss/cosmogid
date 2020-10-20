((filter)=>{

	"use strict";

	if(!filter) {

		return;

	}

	const rangeInput = filter.querySelectorAll('.filter__range-input');

	Array.from(rangeInput, el =>
		el.addEventListener('focus', () =>
			setTimeout( () => el.setSelectionRange(0,99), 100)));

	/*Array.from(btnOpen, el =>
		el.addEventListener('click', () =>
			document.body.classList.add('filter-show')));


	Array.from(btnClose, el =>
		el.addEventListener('click', () =>
			document.body.classList.remove('filter-show')));


	Array.from(btnRange, el => {

		const btn = el.querySelector('.filter__range-reset'),
			  input = el.querySelector('.input');

		btn.addEventListener('click', () => {

			input.value = '';
			input.focus();
			btn.classList.add('hide');

		});

		input.addEventListener('input', () => btn.classList.toggle('hide', !input.value));

		if(!input.value) {

			btn.classList.add('hide');

		}

	});*/


})(document.querySelector('.filter'));