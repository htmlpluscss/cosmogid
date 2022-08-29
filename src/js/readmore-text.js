( ()=> {

	const readmoreToggle = block => {

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

	};

	( blocks => {

		if(blocks.length) {

			[...blocks].forEach( block => readmoreToggle(block) );

		}

	})(document.querySelectorAll('.readmore-text'));

	// content

	( blocks => {

		if(blocks.length) {

			const init = ()=> {

				const template = document.querySelector('#readmore-template').innerHTML;

				[...blocks].forEach( block => {

					// перемещаем в конец

					const main = block.parentNode.classList.contains('main') ? block.parentNode : false;

					if ( main ) {

						main.append(block);

					}

					// readmore

					let append = null;

					const hr = block.querySelector('.readmore-hr');

					[...block.children].forEach( el => {

						if ( el.classList.contains('readmore-hr') || ( !hr && ( el.tagName === 'H2' || el.tagName === 'H3') ) ) {

							console.log(el.tagName);

							if ( append === null ) {

								block.insertAdjacentHTML('beforeend', template);

								append = block.querySelector('.readmore-text__body');

							}

						}

						if( append ) {

							append.append(el);

						}

					});

					if ( hr ) {

						hr.remove();

					}

					if ( append ) {

						readmoreToggle(block.querySelector('.readmore-text'));

					}

				});

			}

			setTimeout( () => init(), localStorage.getItem('fastLoadScript') ? 0 : 10000);

		}

	})(document.querySelectorAll('.content'));

})();