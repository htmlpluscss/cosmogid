( tags => {

	if(!tags.length) {

		return;

	}

	Array.from(tags, form => {

		const btn = form.querySelector('.catalog-filter-tags__show-all'),
			  items = form.querySelectorAll('.catalog-filter-tags__item');

		if(!btn) {

			return;

		}

		btn.addEventListener('click', () => {

			btn.classList.add('hide');

			Array.from(items, item =>
				item.classList.remove('hide'));

		});

		// отправка фильтра

		form.addEventListener('change', () => {

			form.classList.add('is-loading');

			fetch(form.getAttribute('action'), {
				method: 'POST',
				headers: {
					'X-Requested-With' : 'XMLHttpRequest'
				},
				body: new FormData(form)
			})
			.then( response => {

				console.log(response);
				form.classList.remove('is-loading');

			});

		});

	});

})(document.querySelectorAll('.catalog-filter-tags'));