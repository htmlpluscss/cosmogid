( cards => {

	if( cards.length ) {

		window.addEventListener("load", () => {

			cards.forEach( card => {

				const listTags = card.querySelector('.consultations-card__question-tags'),
					  itemTags = card.querySelectorAll('.consultations-card__question-tags li'),
					  wrapTags = card.querySelector('.consultations-card__question-tags-wrap');

				if ( wrapTags.clientHeight < listTags.clientHeight ) {

					const btn = document.createElement('button');

					btn.type = 'button';
					btn.className = 'btn btn--hash btn--small';
					btn.textContent = wrapTags.getAttribute('data-more');

					btn.addEventListener('click', () => {

						if ( wrapTags.classList.contains('is-open') ) {

							wrapTags.classList.remove('is-open');
							btn.textContent = wrapTags.getAttribute('data-more');

						} else {

							wrapTags.classList.add('is-open');
							btn.textContent = wrapTags.getAttribute('data-less');

						}

					});

					wrapTags.insertAdjacentElement('afterend', btn);

				};

			});

		});

	}

})(document.querySelectorAll('.consultations-card'));