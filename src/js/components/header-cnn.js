export default () => {
  
	// from header CNN
	const cnnHeader = document.getElementById('cnn-header');
	if (!cnnHeader) return;
	const shareEl = cnnHeader.querySelector('[data-share]');
	const shareToggleEl = cnnHeader.querySelector('[data-share-toggle]');

	const cnnGoldBar = () => {
		if (shareToggleEl) {
			shareToggleEl.addEventListener('click', shareButtonClickOrPress, false);
			shareToggleEl.addEventListener('keypress', shareButtonClickOrPress, false);
		}
		document.addEventListener(
			'scroll',
			function () {
				window.requestAnimationFrame(stickyGoldBar);
			},
			{ passive: true },
		);
		tooltip();
	};

	const shareButtonClickOrPress = (e) => {
		e.preventDefault();
		if (e.key === 'Enter') {
			shareEl.classList.toggle('cnn-header__share--active');
		} else {
			shareEl.classList.toggle('cnn-header__share--active');
		}
	};

	const stickyGoldBar = () => {
		const sPos = typeof window.scrollY === 'undefined' ? window.pageYOffset : window.scrollY;
		const goldBar = document.querySelector('.cnn-header__row--gold');
		const sticky = goldBar.classList.contains('cnn-header__row--sticky');

		if (sPos < 30) {
			if (sticky) {
				goldBar.classList.remove('cnn-header__row--sticky');
				document.body.classList.remove('cnn-bar-sticky');
			}
		} else {
			if (!sticky) {
				goldBar.classList.add('cnn-header__row--sticky');
				document.body.classList.add('cnn-bar-sticky');
			}
		}
	};

	// Tooltip function
	const tooltip = () => {
		const contentBy = document.querySelector('#cnn-sponsor > span');
		const toolTip = document.querySelector('.tooltiptext');

		const toolTipShowHide = () => {
			toolTip.classList.toggle('tooltip--show');
		};

		const toolTipHide = () => {
			toolTip.classList.remove('tooltip--show');
		};

		const toolTipShow = () => {
			toolTip.classList.add('tooltip--show');
		};
		const width = window.innerWidth;
		if (width <= 768) {
			contentBy.addEventListener('click', toolTipShowHide);
		} else {
			contentBy.addEventListener('mouseover', toolTipShow);
			contentBy.addEventListener('mouseout', toolTipHide);
		}
	};

	if (cnnHeader) {
		cnnGoldBar();
	}
}