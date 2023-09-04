( toster => {

	if(toster){

		let cookies = document.cookie.split("; "),
			cookiesValue = null;

		for (let i = 0; i < cookies.length; i++) {

			let cookie = cookies[i].split("=");

			if (cookie[0] === "toster") {

				cookiesValue = cookie[1];

				break;

			}

		}

		const btn = toster.querySelector('.toster__close');
		const nameCurrent = toster.getAttribute('data-name');

		if ( cookiesValue !== null && cookiesValue.split("|").includes(nameCurrent) ) {

			toster.remove();

		}
		else {

			btn.addEventListener("click", () => {

				cookiesValue = cookiesValue === null ? nameCurrent : cookiesValue + '|' + nameCurrent;

				document.cookie = "toster=" + cookiesValue + "; path=/";

				toster.remove();

			});

		}

	}

})(document.querySelector('.toster'));