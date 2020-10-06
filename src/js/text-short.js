((elems)=>{

	"use strict";

	if(!elems.length) {

		return;

	}

	Array.from(elems, el =>
		el.querySelector('.text-short__btn').addEventListener('click', () =>
			el.classList.toggle('is-open')));


})(document.querySelectorAll('.text-short'));