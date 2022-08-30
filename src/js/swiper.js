( swiperContainer => {

	if(!swiperContainer.length) {

		return;

	}

	[...swiperContainer].forEach( swipe => {

		let mySwipe = null,
			toggleSwipe = null,
			resetSwipe = null;

		const swipeNav = document.createElement('div'),
			  swipeBtns = document.createElement('div'),
			  swipeNext = document.createElement('button'),
			  swipePrev = document.createElement('button'),
			  items = swipe.querySelectorAll('.swiper-slide'),
			  count = items.length,
			  billboard = swipe.classList.contains('swiper-container--billboard'),
			  news = swipe.classList.contains('swiper-container--news'),
			  preview = swipe.classList.contains('swiper-container--preview'),
			  product = swipe.classList.contains('swiper-container--product'),
			  certificates = swipe.classList.contains('swiper-container--certificates'),
			  productArticle = swipe.classList.contains('swiper-container--product-article');

		swipeNav.className = 'swiper-pagination';

		swipeBtns.className = 'swiper-navigation';
		swipePrev.className = 'swiper-button-prev button';
		swipeNext.className = 'swiper-button-next button';

		swipePrev.setAttribute('aria-label','Previous slide');
		swipeNext.setAttribute('aria-label','Next slide');

		swipePrev.innerHTML = '<svg width="40" height="40" viewBox="0 0 24 24"><use xlink:href="#svg-arrow-chevron-left"/></svg>';
		swipeNext.innerHTML = '<svg width="40" height="40" viewBox="0 0 24 24"><use xlink:href="#svg-arrow-chevron-right"/></svg>';

		swipeBtns.append(swipePrev);
		swipeBtns.append(swipeNext);

		swipe.append(swipeBtns);
		swipe.append(swipeNav);

		resetSwipe = () => {

			if(mySwipe) {

				mySwipe.destroy(false,true);
				mySwipe = undefined;

			}

			swipeNav.classList.add('hide');
			swipeBtns.classList.add('hide');

			if ( swipe.closest('.swiper-container-style') ) {

				swipe.closest('.swiper-container-style').classList.remove('swiper-container-style');

			}

		}

		if (news) {

			swipe.parentNode.append(swipeBtns);
			swipe.parentNode.append(swipeNav);

			toggleSwipe = () => {

				resetSwipe();

				if ( window.innerWidth >= 1250 && count < 5 ) {

					return;

				}

				swipeNav.classList.remove('hide');
				swipeBtns.classList.remove('hide');

				swipe.parentNode.parentNode.classList.add('swiper-container-style');

				const gap = window.innerWidth < 1250 && window.innerWidth > 767 ? 0 : 24;

				mySwipe = new Swiper(swipe, {
					loop: true,
					spaceBetween: gap,
					slidesPerView: 'auto',
					slidesPerGroup: 1,
					navigation: {
						nextEl: swipeNext,
						prevEl: swipePrev
					},
					pagination: {
						el: swipeNav,
						clickable: true,
						bulletClass: 'button',
						bulletActiveClass: 'is-active'
					}
				});

			}

			swipe.addEventListener('swiperResize', toggleSwipe);

		}

		if (certificates) {

			swipe.parentNode.append(swipeBtns);
			swipe.parentNode.append(swipeNav);

			toggleSwipe = () => {

				resetSwipe();

				if ( window.innerWidth >= 1250 && count < 4 ) {

					return;

				}

				swipeNav.classList.remove('hide');
				swipeBtns.classList.remove('hide');

				swipe.parentNode.parentNode.classList.add('swiper-container-style');

				const gap = window.innerWidth < 768 ? 0 : 24;

				mySwipe = new Swiper(swipe, {
					loop: true,
					spaceBetween: gap,
					slidesPerView: 'auto',
					slidesPerGroup: 1,
					navigation: {
						nextEl: swipeNext,
						prevEl: swipePrev
					},
					pagination: {
						el: swipeNav,
						clickable: true,
						bulletClass: 'button',
						bulletActiveClass: 'is-active'
					}
				});

			}

			swipe.addEventListener('swiperResize', toggleSwipe);

		}

		if (productArticle) {

			swipe.parentNode.append(swipeBtns);
			swipe.parentNode.append(swipeNav);

			toggleSwipe = () => {

				resetSwipe();

				if ( window.innerWidth >= 1250 && count < 4 ) {

					return;

				}

				if ( window.innerWidth >= 768 ) {

					swipeBtns.classList.remove('hide');

				}

				swipeNav.classList.remove('hide');

				swipe.parentNode.parentNode.classList.add('swiper-container-style');

				const centeredSlides = window.innerWidth < 768;

				mySwipe = new Swiper(swipe, {
					rewind: true,
					centeredSlides: centeredSlides,
					slidesPerView: 'auto',
					slidesPerGroup: 1,
					navigation: {
						nextEl: swipeNext,
						prevEl: swipePrev
					},
					pagination: {
						el: swipeNav,
						clickable: true,
						bulletClass: 'button',
						bulletActiveClass: 'is-active'
					}
				});

			}

			swipe.addEventListener('swiperResize', toggleSwipe);

		}

		if (preview) {

			swipe.parentNode.append(swipeBtns);
			swipe.parentNode.append(swipeNav);

			toggleSwipe = () => {

				resetSwipe();

				swipeNav.classList.remove('hide');
				swipeBtns.classList.remove('hide');

				swipe.parentNode.parentNode.classList.add('swiper-container-style');

				const gap = window.innerWidth < 1250 ? 0 : 24;

				mySwipe = new Swiper(swipe, {
					rewind: true,
					spaceBetween: gap,
					slidesPerView: 'auto',
					slidesPerGroup: 1,
//					slidesPerGroupAuto: true,
					navigation: {
						nextEl: swipeNext,
						prevEl: swipePrev
					},
					pagination: {
						el: swipeNav,
						clickable: true,
						bulletClass: 'button',
						bulletActiveClass: 'is-active'
					}
				});

			}

			swipe.addEventListener('swiperResize', toggleSwipe);

		}

		if (billboard) {

			toggleSwipe = () => {

				resetSwipe();

				swipe.parentNode.classList.add('swiper-container-style');

				if( window.innerWidth < 1250 ) {

					swipeNav.classList.remove('hide');

					mySwipe = new Swiper(swipe, {
						loop: true,
						pagination: {
							el: swipeNav,
							clickable: true,
							bulletClass: 'button',
							bulletActiveClass: 'is-active'
						}
					});

				} else {

					swipeBtns.classList.remove('hide');

					mySwipe = new Swiper(swipe, {
						loop: true,
						autoplay: {
							delay: 5000
						},
						effect: 'fade',
						fadeEffect: {
							crossFade: true
						},
						navigation: {
							nextEl: swipeNext,
							prevEl: swipePrev
						}
					});

				}

			}

			swipe.addEventListener('swiperResize', toggleSwipe);

		}

		if (product) {

			swipeNav.classList.add('hide');

			const galleryPreview = document.querySelectorAll('.product-gallery__preview-link');

			toggleSwipe = () => {

				toggleSwipe = false;

				swipe.parentNode.classList.add('swiper-container-style');

				new Swiper(swipe, {
					loop: true,
					navigation: {
						nextEl: swipeNext,
						prevEl: swipePrev
					},
					on: {
						slideChange : () => {

							[...galleryPreview].forEach( (_link,index) => _link.parentNode.classList.toggle('is-current', swipe.swiper.realIndex === index) );

						}
					}
				});

			}

		}
/*
		if (galleryModal) {

			swipeNav.remove();

			toggleSwipe = () => {

				toggleSwipe = false;

				swipe.parentNode.classList.add('swiper-container-style');

				mySwipe = new Swiper(swipe, {
					loop: true,
					navigation: {
						nextEl: swipeNext,
						prevEl: swipePrev
					},
					on: {
						init: () => {

							swipe.addEventListener('setSlides', event => {

								console.log(event.detail.index);
								swipe.swiper.slideTo(event.detail.index + 1, 0);

							});

						}
					}
				});

				if ( count <= 1 ) {

					resetSwipe();

				}

			}

		}
*/
		swipe.addEventListener('swiperJsLoad', () => {

			// eager
		//	[...swipe.querySelectorAll('[loading="lazy"]')].forEach( img => img.setAttribute('loading','eager') );

			// hide
		//	[...items].forEach( el => el.classList.remove('hide') );

			toggleSwipe();

		});

	});

	let resizeTimeout = null,
		windowWidthOLd = window.innerWidth;

	window.addEventListener("resize", () => {

		window.requestAnimationFrame( () => {

			if (resizeTimeout === null) {

				resizeTimeout = setTimeout( () => {

					resizeTimeout = null;

					if(windowWidthOLd !== window.innerWidth) {

						windowWidthOLd = window.innerWidth;

						if (window.Swiper) {

							[...swiperContainer].forEach( swipe => swipe.dispatchEvent(new Event("swiperResize")) );

						}

					}

				}, 1000);

			}

		});

	});

	const script = document.createElement('script');

	script.src = '/js/swiper.min.js';

	script.onload = () => [...swiperContainer].forEach( swipe => swipe.dispatchEvent(new Event("swiperJsLoad")) );

	setTimeout( () => document.head.append(script), localStorage.getItem('fastLoadScript') ? 0 : 10000);

})(document.querySelectorAll('.swiper-container'));