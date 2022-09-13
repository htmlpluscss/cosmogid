( article => {

	if(article) {

		// share

		const btn = article.querySelector('.page-article__share-btn');

		if ( btn ) {

			window.addEventListener("click", event => {

				if ( event.target.closest('.page-article__share') ) {

					btn.classList.toggle('is-open');

				} else {

					btn.classList.remove('is-open');

				}

			});

		}

	}

})(document.querySelector('.page-article'));