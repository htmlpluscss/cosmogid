( blocks => {

	if(blocks.length) {

		[...blocks].forEach( block => {

			const btn = block.querySelector('.readmore-text__btn'),
				  textClose = btn.textContent;

			const toggle = () => {

				if ( block.classList.contains('is-open') ) {

					block.classList.remove('is-open');
					btn.textContent = textClose;

				} else {

					block.classList.add('is-open');
					btn.textContent = btn.getAttribute('data-alt');

				}

			}

			btn.addEventListener('click', toggle);

		});

	}

})(document.querySelectorAll('.readmore-text'));

// footer
( btn => {

	if(btn) {

		const footer = document.querySelector('.footer'),
			  textClose = btn.textContent;

		btn.addEventListener('click', ()=> {

			if ( footer.classList.contains('is-open') ) {

				footer.classList.remove('is-open');
				btn.textContent = textClose;

			} else {

				footer.classList.add('is-open');
				btn.textContent = btn.getAttribute('data-alt');

			}

		});

	}

})(document.querySelector('.footer__readmore'));