( filter => {

	if(!filter) {

		return;

	}

	let windowScroll = window.pageYOffset;

	const sort = document.querySelector('.catalog__sort'),
		  mobileOpen = document.querySelector('.catalog-mobile-filter');

	// change

	filter.addEventListener('click', event => {

		const target = event.target;

		// legend toggle

		if ( target.closest('.filter__legend') ) {

			target.closest('.filter__legend').classList.toggle('is-open');

		}

		// filter close

		if ( target.closest('.filter__btn-close') ) {

			document.body.classList.remove('is-filter-show');

			window.scrollTo(0,windowScroll);

			window.requestAnimationFrame( () => {

				document.documentElement.classList.remove('scroll-behavior-off');

			});

		}
	});

// sort

	if (sort) {

		sort.addEventListener("change", event => {

			console.log(event.target);

			if( event.target.name === 'sort' ) {

				filter.elements.sort.value = event.target.value;

			}

			if( event.target.name === 'limit' ) {

				filter.elements.limit.value = event.target.value;

			}

			filter.dispatchEvent(new Event("change"));

		});

	}

// open filter

	mobileOpen.addEventListener("click", () => {

		windowScroll = window.pageYOffset;

		document.documentElement.classList.add('scroll-behavior-off');

		window.requestAnimationFrame( () => {

			document.body.classList.add('is-filter-show');
			window.scrollTo(0,0);

		});

	});

})(document.querySelector('.filter'));