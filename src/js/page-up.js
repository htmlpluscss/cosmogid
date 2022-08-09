
( btnPageUp => {

	if (btnPageUp) {

		btnPageUp.addEventListener('click', () => document.body.scrollIntoView({behavior: "smooth"}));

	}

})(document.querySelector('.page-up'));