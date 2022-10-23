( items => {

	if(!items.length) {

		return;

	}

	[...items].forEach( item => {

		const btn = item.querySelector('.orderlist__toggle .button');

		btn.addEventListener('click', () => {

			item.classList.toggle('is-open');

		});

	});

})(document.querySelectorAll('.orderlist'));