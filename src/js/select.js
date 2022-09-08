window.selects = select => {

	if(select.querySelector('.select__list')) {

		return;

	}
	const template = document.querySelector('#select-template').innerHTML,
		  form = select.closest('form'),
		  control = select.querySelector('select'),
		  option = select.querySelectorAll('option'),
		  filter = select.classList.contains('select--filter'),
		  list = [];

	const valueDefault = control.querySelector('[value="' + control.value + '"]').textContent;

	if( control.disabled || control.value === 'none' || control.value === '' ){

		select.classList.add('is-default');

	}

	[...option].forEach( el => {

		if ( el.value === 'none' || el.value === '' ) {

			return;

		}

		list.push({
			name  : control.name,
			label : el.textContent,
			value : el.value,
			checked : control.value === el.value
		});

	});

	select.innerHTML = Mustache.render(template, { valueDefault, list, filter });

	const fieldset = select.querySelector('.select__list'),
		  valueText = select.querySelector('.select__value-inner');

	fieldset.addEventListener('change', event => {

		if( event.target.tagName === 'INPUT' ) {

			const item = event.target.parentNode;

			valueText.textContent = item.textContent;

		}

	});

	form && form.addEventListener("reset", () => {

		select.classList.add('is-default');
		valueText.textContent = valueDefault;

	});

	if ( filter ) {

		return;

		const inputFilter = select.querySelector('.select__filter');

		inputFilter.addEventListener('input', () => {

			const value = inputFilter.value.toLowerCase();

			if(value.length > 0) {

				const list = fieldset.querySelectorAll('.select__list-item');

				[...list].forEach( o => {

					const text = o.textContent.trim().toLowerCase();

					o.classList.toggle('hide', text.includes(value));

				});

				if( list.length === fieldset.querySelectorAll('.select__list-item.hide').length ) {

					select.classList.add('select--filter-empty');

				} else {

					select.classList.remove('select--filter-empty');

				}

			} else {

				[...list].forEach( o => o.classList.remove('hide') );
				select.classList.remove('select--filter-empty');

			}

		});

	}

};

( items => {

	if(items.length) {

		[...items].forEach( select => window.selects(select));

	}

	window.addEventListener("click", event => {

		const isSelect = event.target.closest('.select');

		[...document.querySelectorAll('.select')].forEach( select => {

			if ( select === isSelect ) {

				if ( event.target.closest('.select__value') ) {

					select.classList.toggle('is-open');

				} else if ( event.target.tagName === 'INPUT' ) {

					select.classList.remove('is-open');

				}

			} else {

				select.classList.remove('is-open');

			}

		});

	});

})(document.querySelectorAll('.select'));