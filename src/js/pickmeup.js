( items => {

	if ( items.length ) {

		pickmeup.defaults.locales['ru'] = {
			days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
			daysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
			daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
			months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
			monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек']
		};

//		locale

		[...items].forEach( calendar => {

			const input = calendar.querySelector('.calendar__input'),
				  minDate = new Date(input.getAttribute('min')),
				  maxDate = new Date(input.getAttribute('max'));

			const pickmeupCalendar = pickmeup(calendar, {

				flat: true,
				min: minDate,
				max: maxDate,
				select_month: false,
				select_year: false,
				title_format: 'B',
				format: 'Y-m-d',
				locale: 'ru',
				prev: '<svg width="24" height="24" viewBox="0 0 24 24"><use xlink:href="#svg-arrow-chevron-left"/></svg>',
				next: '<svg width="24" height="24" viewBox="0 0 24 24"><use xlink:href="#svg-arrow-chevron-right"/></svg>'

			});

			calendar.addEventListener('pickmeup-change', () => {

				input.value = pickmeupCalendar.get_date(true);

			});

		});

	}

})(document.querySelectorAll('.calendar'));