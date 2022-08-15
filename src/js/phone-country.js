( elements => {

	if(elements.length === 0) {

		return;

	}

	[...elements].forEach( dropdown => {

		const mask = dropdown.querySelector('.phone-country__mask'),
			  value = dropdown.querySelector('.phone-country__value'),
			  radio = dropdown.querySelectorAll('.phone-country__radio');

		[...radio].forEach( btn => {

			btn.addEventListener("change", () => {

				let placeholder = btn.getAttribute('data-mask');
				placeholder = placeholder.replace(/\\9/g, '$');
				placeholder = placeholder.replace(/9/g, '-');
				placeholder = placeholder.replace(/\$/g, '9');

				mask.setAttribute('placeholder', placeholder);
				mask.value = '';

				Inputmask(btn.getAttribute('data-mask')).mask(mask);

				let maskInput;

				maskInput = new Inputmask({
					mask: btn.getAttribute('data-mask'),
					placeholder: '-'
				});

				maskInput.mask(mask);

				mask.focus();

				value.textContent = btn.value;

			});

		});

	});

	window.addEventListener("click", event => {

		const isDropdown = event.target.closest('.phone-country__btn') ? event.target.closest('.phone-country') : null;

		[...elements].forEach( dropdown => {

			dropdown.classList.toggle('is-open', dropdown === isDropdown && isDropdown.classList.contains('is-open') === false );

		});

	});

})(document.querySelectorAll('.phone-country'));