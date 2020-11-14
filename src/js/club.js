
( form => {

	"use strict";

	if(!form) {

		return;

	}

	const inputGroupTrue = form.querySelectorAll('[data-disabled-true]'),
		  inputGroupDisabled = form.querySelectorAll('[data-disabled-false]');

	form.addEventListener('change', event => {

		if(event.target.getAttribute('type') === 'file') {

			const label = event.target.parentNode,
				  small = label.querySelector('.input-files__label small');

			small.textContent = event.target.value;

		}

		const group = event.target.getAttribute('data-group');

		if(group) {

			// разблокируем которые совпали
			Array.from(inputGroupDisabled, input => {

				if(input.getAttribute('data-disabled-false') === group) {

					input.disabled = false;

				}

			});

			// блокируем которые совпали
			Array.from(inputGroupTrue, input => {

				if(input.getAttribute('data-disabled-true') === group) {

					input.disabled = true;

				}

			});

		}

	});

})( document.querySelector('.form-club') );