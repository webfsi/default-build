export default (twitterDescriptionContent) => {

  
	// from header CNN
	const cnnHeaderFind = document.getElementById('cnn-header');
	if (!cnnHeaderFind) return;

	const shareElFind = cnnHeaderFind.querySelector('[data-share]');

	const cnnGoldBar = () => {
		socialLinksClickTracking();
    if (!cnnHeaderFind.classList.contains('cnn-header--js')) {
      cnnHeaderFind.classList.add('cnn-header--js');
      setTimeout(() => {
        cnnHeaderFind.classList.remove('cnn-header--js');
      }, 1000);
    }

    if (shareElFind.classList.contains('cnn-header__share--active')) {
      shareElFind.classList.remove('cnn-header__share--active');
    }
	};

	const socialLinksClickTracking = () => {

	  // let twitterDescriptionContent = document.querySelector('meta[name="twitter:description"]').getAttribute('content');
    // const twitterDescriptionContent = await fetchTwitterDescription('index.html');

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

	if (cnnHeaderFind) {
		cnnGoldBar();
	}
}