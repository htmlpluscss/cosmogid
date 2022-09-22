( videos => {

	if(videos.length){

		function YouTubeGetID(url) {

			let ID = '';

			url = url.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);

			if(url[2] !== undefined) {

				ID = url[2].split(/[^0-9a-z_\-]/i);
				ID = ID[0];

			} else {

				ID = url;

			}

			return ID;

		}

		if ( videos.length > 1 ) {

			// Inject YouTube API script
			const script = document.createElement('script');
			script.src = "https://www.youtube.com/player_api";
			document.head.append(script);

		}

		window.addEventListener("click", event => {

			const clipPreview = event.target.closest('.video-clip__link');

			if ( clipPreview ) {

				event.preventDefault();

				const iframe = document.createElement('iframe');

				iframe.setAttribute('allowfullscreen', '');
				iframe.setAttribute('src', 'https://www.youtube.com/embed/' + YouTubeGetID(clipPreview.href) + '?rel=0&showinfo=0&autoplay=1&enablejsapi=1&html5=1');

				clipPreview.parentNode.append(iframe);
				clipPreview.parentNode.classList.add('is-iframe');

				if ( videos.length > 1 ) {

					[...document.querySelectorAll('.video-clip.is-iframe')].forEach( video => {

						if ( clipPreview.parentNode === video ) {

							return;

						}

						const iframe = video.querySelector('iframe');

						if ( iframe ) {

							let player = new YT.Player(iframe, {
								events: {
									onReady: () => {
										player.pauseVideo();
									}
								}
							});

						}

					});

				}

			}

		});

	}

})(document.querySelectorAll('.video-clip'));