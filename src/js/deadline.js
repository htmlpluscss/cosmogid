( deadline => {

	if ( deadline.length > 0 ) {

		const getTimeRemaining = endtime => {

			const total = Date.parse(endtime) - Date.parse(new Date()),
				  seconds = Math.floor((total / 1000) % 60),
				  minutes = Math.floor((total / 1000 / 60) % 60),
				  hours = Math.floor((total / (1000 * 60 * 60)) % 24),
				  days = Math.floor(total / (1000 * 60 * 60 * 24));

			return {total, days, hours, minutes, seconds}

		}

		const init = (el, endtime, expressions) => {

			const updateClock = ()=> {

				const t = getTimeRemaining(endtime);

				el.textContent = t.days + ' ' + window.declension(t.days, expressions) + ' ' + ('0' + t.hours).slice(-2) + ':' + ('0' + t.minutes).slice(-2) + ':' + ('0' + t.seconds).slice(-2);

				if ( t.total > 0 ) {

					setTimeout( updateClock, 1000);

				}

			}

			updateClock();

		}

		[...deadline].forEach( el => {

			const timer = el.getAttribute('data-deadline'),
				  expressions = el.getAttribute('data-declension').split('|');

			init( el, timer, expressions );

			setTimeout( ()=> {

				if ( el.clientWidth > 0 ) {

					el.style.width = el.clientWidth + 'px';
					el.style.textAlign = 'left';

				}

			}, 1000);

		});

	}

})(document.querySelectorAll('[data-deadline]'));