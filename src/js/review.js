// ajax add item

( form => {

	if(!form) {

		return;

	}

	const btn = form.querySelector('.btn');

	form.addEventListener('submit', event => {

		event.preventDefault();

		btn.disabled = true;

		fetch(form.getAttribute('action'), {
			method: 'POST',
			headers: {
				'X-Requested-With' : 'XMLHttpRequest'
			},
			body: new FormData(form)
		})
		.then( response => {

			console.log(response);

			btn.disabled = false;

			form.elements.page.value = parseInt(form.elements.page.value + 1);

			document.querySelector('#review-sort-result').innerHTML = document.querySelector('#review-sort-result').innerHTML + response.text();

		});

	});

})(document.querySelector('.review__ajax-add'));


// сортировака

( sort => {

	if(!sort.length) {

		return;

	}

	Array.from(sort, form => {

		// отправка

		form.addEventListener('change', () => {

			fetch(form.getAttribute('action'), {
				method: 'POST',
				headers: {
					'X-Requested-With' : 'XMLHttpRequest'
				},
				body: new FormData(form)
			})
			.then( response => {

				console.log(response);
				document.querySelector('#review-sort-result').innerHTML = response.text();

			});

		});

	});

})(document.querySelectorAll('.review-sort'));

// показать форму
( form => {

	if(!form) {

		return;

	}

	form.addEventListener('change', event => {

		if(event.target.classList.contains('review-form__subject-input')){

			if(event.target.getAttribute('data-type') === 'review') {

				Array.from(form.querySelectorAll('[data-review]'), el =>
					el.textContent = el.getAttribute('data-review'));

			}
			else {

				Array.from(form.querySelectorAll('[data-request]'), el =>
					el.textContent = el.getAttribute('data-request'));

				form.querySelector('.review-form__hidden-in-request').classList.add('hide');

			}

			Array.from(form.querySelectorAll('.review-form__fieldset'), el =>
				el.classList.toggle('is-hide'));

		}

	});

})(document.querySelector('.review-form'));

// like

( review => {

	if(!review) {

		return;

	}

	review.addEventListener('submit', event => {

		if(event.target.classList.contains('review-like')) {

			event.preventDefault();

			const form = event.target;

			fetch(form.getAttribute('action'), {
				method: 'POST',
				headers: {
					'Content-Type' : 'application/json',
					'X-Requested-With' : 'XMLHttpRequest'
				},
				body: new FormData(form)
			})
			.then( response => {

				console.log(response);
				const obj = response.json();

				if(obj.mode) {

					form.classList.toggle('is-like', obj.mode === "add");
					form.querySelector('.review-like__count').textContent = obj.count;

				}

			});

		}

	});

})(document.querySelector('#review-sort-result'));



