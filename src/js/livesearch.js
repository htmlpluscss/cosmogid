( form => {

	"use strict";

	if(!form) {

		return;

	}

	const input = form.elements.searchword,
		  list = document.querySelector('.' + input.getAttribute('data-list')),
		  items = list.querySelectorAll('.' + input.getAttribute('data-items')),
		  string = '.' + input.getAttribute('data-string');

	if(items.length) {

		input.addEventListener('input', event => {

			event.preventDefault();

			const val = input.value.toLowerCase();

			let empty = true;

			Array.from(items, item => {

				const _string = item.querySelector(string);

				if(_string) {

					const text = _string.textContent.trim();

					item.classList.toggle('hide', text.toLowerCase().indexOf(val) !== 0);

					if(empty && text.toLowerCase().indexOf(val) === 0) {

						empty = false;

					}

				}

			});

			list.classList.toggle('is-empty', empty);

		});

	}

})( document.querySelector('.filter-livesearch') );