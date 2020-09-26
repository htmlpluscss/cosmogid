((forms) => {

	if(!forms.length) {

		return;

	}

	Array.from(forms, form => {

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

					console.log(xhr.responseText, ' надо возвращать del или add');
				//	form.elements.mode.value = xhr.responseText;

					form.elements.mode.value = form.elements.mode.value === 'del' ? 'add' : 'del'; // для демо

				}

			}

			xhr.send(formData);

		});

	});

})(document.querySelectorAll('.form-wishlist'));