( forms => {

	if(!forms.length) {

		return;

	}

	Array.from(forms, form => {

		const code = form.querySelector('.form-sms__code'),
			  timer = form.querySelector('.form-sms__timer'),
			  textError = form.querySelector('.form-lk__after'),
			  btnRepeat = form.querySelector('.form-lk__repeat-sms');

		const submitForm = repeat => {

			const formData = new FormData(form);

			if(repeat) {

				formData.append('repeat-code', 'more');

			}

			fetch(form.getAttribute('action'), {
				method: 'POST',
				headers: {
					'X-Requested-With' : 'XMLHttpRequest'
				},
				body: formData
			})
			.then( response => response.json())
			.then( obj => {

				console.log(obj);

				textError.classList.add('is-error');

				if(obj.from) {

					form.querySelector('.form-sms__from').textContent = obj.from;

				}

				if(obj.repeat === 'disabled') {

					form.querySelector('.form-lk__repeat').innerHTML = obj.text;

				}
				else {

					form.setupTimer(obj.repeat ? obj.repeat : undefined);

				}

				if(obj.confirmPhone.disabledId) {

					document.querySelector('#' + obj.disabled.id + ' .input').disabled = true;

				}

			});

		};

		form.setupTimer = (secunds = 60) => {

			timer.textContent = secunds;

			setTimeout( () => {

				secunds--;

				if(secunds > 0) {

					form.setupTimer(secunds);

				}
				else {

					btnRepeat.classList.remove('hide');
					timer.parentNode.classList.add('hide');

				}

			}, 100);

		}

		// повторный запрос смс

		btnRepeat.addEventListener('click', () => {

			btnRepeat.classList.add('hide');
			timer.parentNode.classList.remove('hide');

			code.value = '';

			submitForm(true);

		});

		// обработка неверных смс

		form.addEventListener('submit', event => {

			event.preventDefault();

			submitForm();

		});

	});

})(document.querySelectorAll('.form-sms'));