( () => {

	document.addEventListener('click', event => {

		// Уведомить  / найти аналог
		// Найти аналог

		const modalFormSetId = event.target.closest('[data-form-set-id]');

		if (modalFormSetId) {

			document.querySelector('#' + modalFormSetId.getAttribute('data-form-set-id')).elements.id.value = modalFormSetId.getAttribute('data-id');

		}

		// выбор цвета

		const cardColor = event.target.closest('.preview-card__color');

		if (cardColor) {


			const eventModalShow = new CustomEvent("modalShow", {
				detail: {
					selector: "card-color"
				}
			});

			window.modal.dispatchEvent(eventModalShow);

		}

	});

})();