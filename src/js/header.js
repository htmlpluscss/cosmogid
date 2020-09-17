((header) => {

	"use strict";

	if(!header) {

		return;

	}

	const headerFixed = header.querySelector('.header__fixed');

	CG.headerHeight = headerFixed.clientHeight;

//	PubSub.subscribe('windowScroll', () => headerFixed.classList.toggle('is-scroll', window.pageYOffset > 0));

	PubSub.subscribe('windowWidthResize', () => {

		CG.headerHeight = headerFixed.clientHeight;

		document.documentElement.style.setProperty("--heightHeaderFixed", CG.headerHeight + 'px');

	});

	// btn up top

	const footerUP = document.querySelector('.footer__up');

	if(footerUP) {

		PubSub.subscribe('windowScroll', () =>
			footerUP.classList.toggle("is-show", window.innerHeight < window.pageYOffset));

		footerUP.addEventListener('click', () => document.body.scrollIntoView({behavior: "smooth"}));

	}

	// fixed

	let ScrollTopPrev = window.pageYOffset;

	window.addEventListener("scroll", () => {

		if(window.pageYOffset <= 0) {

			headerFixed.classList.remove('is-fixed');

		}
		else if(window.pageYOffset > window.innerHeight){

			headerFixed.classList.toggle('is-fixed', window.pageYOffset <= ScrollTopPrev);

		}

		ScrollTopPrev = window.pageYOffset;

	});

})(document.querySelector('.header'));