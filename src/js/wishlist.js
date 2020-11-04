
( total => {

	const wishlistCheckedList = document.querySelectorAll('.wishlist-checked-list');

	document.body.addEventListener('change', event => {

		if(event.target.closest('.wishlist-checkbox')) {

			let list = [];

			Array.from(document.querySelectorAll('.wishlist-checkbox'), el => {

				const input = el.querySelector('input');

				if(input.checked) {

					list.push(input.value);

				}

			});

			total.textContent = list.length;

			Array.from(wishlistCheckedList, input => input.value = list);

		}

	});

})(document.querySelector('.wishlist-checked-total__value'));