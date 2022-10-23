// ClipboardJS

	( elems => {

		if ( elems.length ) {

			[...elems].forEach( btn => {

				const clipboard = new ClipboardJS(btn);

				clipboard.on('success', ()=> {

					btn.classList.add('is-clipboard-success');

					setTimeout( ()=> {

						btn.classList.remove('is-clipboard-success');

					},3000);

				});

			});

		}

	})(document.querySelectorAll('[data-clipboard-text]'));

// autosize

	autosize(document.querySelectorAll('textarea.autosize'));

// file


( fileupload => {

	if(fileupload.length){

		const template = document.querySelector('#fileupload-template').innerHTML;

		[...fileupload].forEach( file => {

			const input = file.querySelector('[type="file"]'),
				  btn = file.querySelector('.fileupload__btn');

			input.addEventListener("change", event => {

				btn.classList.add('hide');

				file.insertAdjacentHTML('beforeend', Mustache.render(template, { name : input.value.replace(/.*[\/\\]/, '') }));
/*
				console.log('Selected file: ' + input.files.item(0).name);
				console.log('Selected file: ' + input.files.item(0).size);
				console.log('Selected file: ' + input.files.item(0).type);

*/			});

			file.addEventListener('click', event => {

				if ( event.target.closest('.fileupload__reset') ) {

					input.value = '';
					btn.classList.remove('hide');
					event.target.closest('.fileupload__btn').remove();

				}

			});

		});

	}

})(document.querySelectorAll('.fileupload'));



( fileupload => {

	if(fileupload.length){

		const template = document.querySelector('#drag-and-drop-template').innerHTML;

		[...fileupload].forEach( file => {

			const input = file.querySelector('[type="file"]'),
				  btn = file.querySelector('.drag-and-drop__btn');

			input.addEventListener("change", event => {

				btn.classList.add('hide');

				file.insertAdjacentHTML('beforeend', Mustache.render(template, { name : input.value.replace(/.*[\/\\]/, '') }));
/*
				console.log('Selected file: ' + input.files.item(0).name);
				console.log('Selected file: ' + input.files.item(0).size);
				console.log('Selected file: ' + input.files.item(0).type);

*/			});

			file.addEventListener('click', event => {

				if ( event.target.closest('.drag-and-drop__reset') ) {

					input.value = '';
					btn.classList.remove('hide');
					event.target.closest('.drag-and-drop__btn').remove();

				}

			});

		});

	}

})(document.querySelectorAll('.drag-and-drop'));


( fileupload => {

	if(fileupload.length){

		const template = document.querySelector('#modal-file-template').innerHTML;

		[...fileupload].forEach( file => {

			const input = file.querySelector('.modal-file__input'),
				  desc = file.querySelector('.modal-file__desc');

			input.addEventListener("change", event => {

				let value = '';

				[...input.files].forEach( file => {

					if ( value.length ) {

						value += ', ';

					}

					let size = (file.size / 1024 / 1024).toFixed(2);

					value += file.name + ' (' + size + 'Мб)';

				});

				file.querySelector('.btn').remove();

				input.insertAdjacentHTML('afterend', Mustache.render(template));

				desc.textContent = value;

			});

		});

	}

})(document.querySelectorAll('.modal-file'));