((forms) => {

	if(!forms.length) {

		return;

	}

	Array.from(forms, form => {

		// отправка

		form.addEventListener('submit', event => {

			event.preventDefault();

			const formData = new FormData(form),
				  xhr = new XMLHttpRequest();

			xhr.open("POST", form.getAttribute('action'));
			xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

			xhr.onreadystatechange = () => {

				if (xhr.readyState != 4){

					return;

				}

				if (xhr.status === 200) {

					const obj = JSON.parse(xhr.responseText);

					console.log(obj);

					if(obj.modalShow) {

						if(obj.modalShow === 'info') {

							document.querySelector('#modal-info__title').innerHTML = obj.title ? obj.title : '';
							document.querySelector('#modal-info__message').innerHTML = obj.message ? obj.message : '';

						}

						CG.modalShow(obj.modalShow);

					}

				}

			}

			xhr.send(formData);

		});

	});

})(document.querySelectorAll('.form'));