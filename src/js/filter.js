// filter
( filter => {

	if(!filter) {

		return;

	}

	// scrollTo
	const scrollTo = (element, to, duration = 70) => {

		if (duration <= 0) return;

		const difference = to - element.scrollTop,
			  perTick = difference / duration * 10;

		setTimeout( ()=> {

			element.scrollTop = element.scrollTop + perTick;

			if (element.scrollTop === to) return;

			scrollTo(element, to, duration - 10);

		}, 10);

	}


	let windowScroll = window.pageYOffset;

	const mobileOpen = document.querySelectorAll('.js-filter-mobile-open');

	// change

	filter.addEventListener('input', event => {

		const target = event.target;

		// live-search

		if ( target.closest('.js-live-search__input') ) {

			const value = target.closest('.js-live-search__input').value.toLowerCase(),
				  liveSearch = target.closest('.js-live-search'),
				  item = liveSearch.querySelectorAll('.js-live-search__item'),
				  reset = liveSearch.querySelector('.js-live-search__reset'),
				  input = liveSearch.querySelector('.js-live-search__input');

			if ( value.length === 0 ) {

				reset.classList.add('hide');

				[...item].forEach( el => el.classList.remove('hide') );

				return;

			}

			reset.classList.remove('hide');

			[...item].forEach( el => el.classList.toggle('hide', el.getAttribute('data-live-search').toLowerCase().includes(value) === false ));

		}

	});

	// click

	filter.addEventListener('click', event => {

		const target = event.target;

		// legend toggle

		if ( target.closest('.filter__legend') ) {

			target.closest('.filter__legend').classList.toggle('is-open');

		}

		// letter

		if ( target.closest('.js-letter__btn') ) {

			const box = target.closest('.js-letter'),
				  scrollList = box.querySelector('.js-letter__scroll'),
				  item = box.querySelectorAll('.js-letter__item'),
				  letter = target.closest('.js-letter__btn').getAttribute('data-value');

			if ( letter === 'top' ) {

				scrollTo(scrollList, 0);

				return true;

			}

			[...item].every( el => {

				if ( letter === el.getAttribute('data-letter') ) {

					scrollTo(scrollList, el.offsetTop);

					return false;

				} else {

					return true;

				}

			});

		}

		// live-search

		if ( target.closest('.js-live-search__reset') ) {

			const liveSearch = target.closest('.js-live-search'),
				  item = liveSearch.querySelectorAll('.js-live-search__item'),
				  input = liveSearch.querySelector('.js-live-search__input');

			input.value = '';
			target.closest('.js-live-search__reset').classList.add('hide');

			[...item].forEach( el => el.classList.remove('hide') );

			input.focus();

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

// open filter

	[...mobileOpen].forEach( btn => {

		btn.addEventListener("click", () => {

			windowScroll = window.pageYOffset;

			document.documentElement.classList.add('scroll-behavior-off');

			window.requestAnimationFrame( () => {

				document.body.classList.add('is-filter-show');
				window.scrollTo(0,0);

			});

		});

	});

// sort

	const sort = document.querySelector('.js-filter-change');

	if (sort) {

		sort.addEventListener("change", event => {

			console.log(event.target);

			if( filter.elements[event.target.name] ) {

				filter.elements[event.target.name].value = event.target.value;

				filter.dispatchEvent(new Event("change"));

			}

		});

	}

//  foot

	const foot = filter.querySelector('.filter__foot');

	if (foot) {

		filter.addEventListener("change", () => {

			foot.classList.remove('hide');

		});

		filter.addEventListener("reset", () => {

			foot.classList.add('hide');

		});

	}


})(document.querySelector('.filter'));