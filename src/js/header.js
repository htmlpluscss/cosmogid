((header) => {

	"use strict";

	if(!header) {

		return;

	}
/*
	const headerTop = header.querySelector('.header__top');

	CG.headerHeight = headerTop.clientHeight;

	PubSub.subscribe('windowScroll', () => headerTop.classList.toggle('is-scroll', window.pageYOffset > 0));

	PubSub.subscribe('windowWidthResize', () => {

		CG.headerHeight = headerTop.clientHeight;

		document.documentElement.style.setProperty("--heightHeader", CG.headerHeight + 'px');

	});
*/
})(document.querySelector('.header'));