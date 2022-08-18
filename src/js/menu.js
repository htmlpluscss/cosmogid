( menu => {

	if(menu) {

		const linkBtn = menu.querySelectorAll('.menu-catalog__link.is-btn'),
			  ico = document.createElementNS("http://www.w3.org/2000/svg", "svg");

		ico.setAttributeNS(null, "viewBox", "0 0 16 16");
		ico.setAttributeNS(null, "width", 16);
		ico.setAttributeNS(null, "height", 16);

		ico.innerHTML = '<rect x="7" y="2" width="2" height="12"/><rect x="2" y="7" width="12" height="2"/>';

		[...linkBtn].forEach( btn => {

			btn.append(ico.cloneNode(true));

			btn.addEventListener('click', event => {

				event.preventDefault();

				btn.classList.toggle('is-open');

			});

		});

	}

})(document.querySelector('.menu-catalog'));