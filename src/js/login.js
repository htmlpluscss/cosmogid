( form => {

	if(!form) {

		return;

	}

	const smsForm = document.querySelector('#form-sms-login');

	form.addEventListener('submit', event => {

		event.preventDefault();

		const formData = new FormData(form),
			  xhr = new XMLHttpRequest();

		xhr.open("POST", form.getAttribute('action'));
		xhr.responseType = 'json';
		xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

		xhr.onreadystatechange = () => {

			if (xhr.readyState != 4){

				return;

			}

			if (xhr.status === 200) {

				const obj = xhr.response;

				console.log(obj);

				if(obj.modalShow === 'info') {

					document.querySelector('#modal-info__title').innerHTML = obj.title ? obj.title : '';
					document.querySelector('#modal-info__message').innerHTML = obj.message ? obj.message : '';

					CG.modalShow(obj.modalShow);

					return;

				}

				if(obj.title) {

					smsForm.querySelector('.form-sms__title').innerHTML = obj.title;

				}

				if(obj.login) {
// это номер телефона или емайл в системе
					smsForm.querySelector('.form-sms__login').value = obj.login;

				}

				if(obj.from) {
// Мы отправили SMS с кодом на ваш номер | Мы отправили код на ваш email
					smsForm.querySelector('.form-sms__from').textContent = obj.from;

				}

				if(obj.repeat === 'disabled') {

					smsForm.querySelector('.form-lk__repeat').innerHTML = obj.text;

				}

				CG.modalShow('sms');
				smsForm.setupTimer(obj.repeat ? obj.repeat : undefined);

			}

		}

		xhr.send(formData);

	});

})(document.querySelector('.form-login'));