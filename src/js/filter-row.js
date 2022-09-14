// filter
( filter => {

	if(!filter) {

		return;

	}

	const items = filter.querySelectorAll('.filter-row__item');

	// change

	filter.addEventListener('change', event => {

		const item = event.target.closest('.filter-row__item');

		let checked = false;

		[...item.querySelectorAll('.checkbox__input')].forEach( checkbox => {

			if ( checkbox.checked ) {

				checked = true;

			}

		});

		item.querySelector('.filter-row__btn').classList.toggle('is-checked', checked);

	});

	window.addEventListener("click", event => {

		const isItem = event.target.closest('.filter-row__item');

		if ( isItem ) {

			[...items].forEach( item => {

				item.classList.toggle('is-open', item === isItem && item.classList.contains('is-open') === false );

			});

		} else {

			[...items].forEach( item => item.classList.remove('is-open') );

		}

	});

})(document.querySelector('.filter-row'));