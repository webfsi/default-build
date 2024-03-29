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
		socialLinksClickTracking();
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

	const socialLinksClickTracking = () => {

	  let twitterDescriptionContent = document.querySelector('meta[name="twitter:description"]').getAttribute('content');
		const getLinks = document.querySelectorAll('a.share-link');
		getLinks.forEach((socialLinks) => {
			const getShareLinkTitle = socialLinks.attributes['data-share-link'].nodeValue;
			const getCurrentUrl = window.location.href;
			// Set the href attribute of each link
			if (getShareLinkTitle == 'facebook') {
				socialLinks.href = 'https://www.facebook.com/sharer/sharer.php?u=' + getCurrentUrl;
			}
			if (getShareLinkTitle == 'linkedin') {
				socialLinks.href = 'https://www.linkedin.com/shareArticle?mini=true&url=' + getCurrentUrl;
			}
			if (getShareLinkTitle == 'twitter') {
				socialLinks.href = 'https://twitter.com/intent/tweet?url=' + getCurrentUrl + '&text=' + twitterDescriptionContent;
			}
			if (getShareLinkTitle == 'whatsapp') {
				socialLinks.href = 'https://wa.me/?text=' + getCurrentUrl;
			}
		});

		getLinks.forEach((socialTrackingLinks) => {
			const socialName = socialTrackingLinks.attributes['data-share-link'].nodeValue;
			const trackSocialLinks = () => {
				console.log(socialName);
				s.events = 'event76';
				s.prop69 = 'Social: ' + socialName;
				s.eVar69 = 'D=c69';
				s.tl(true, 'e', 'social-click: ' + socialName);
				s.events = s.prop69 = s.eVar69 = '';
			};
			socialTrackingLinks.addEventListener('click', trackSocialLinks, false);
		});
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