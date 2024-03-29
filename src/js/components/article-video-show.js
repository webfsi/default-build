export class VideoComponent {
  constructor(selector, onAnimationEnd) {
    this.enterPageFirst = document.querySelector(selector);
    this.hubTwo = this.enterPageFirst.querySelector('.hub_two');
    this.video = this.hubTwo.querySelector('video');
    this.body = document.body;
    this.soundButton = this.hubTwo.querySelector('[data-video-sound]');
    this.skipButton = this.hubTwo.querySelector('[data-video-skip]');
    this.onAnimationEnd = onAnimationEnd;
    this.animationStarted = false;

    this.initialize();
    this.checkBodyClass();
  }


  initialize() {
    this.hubTwo.classList.add('is-show', 'is-current');
    this.hubTwo.classList.remove('is-hidden');

    setTimeout(() => {
      this.startVideo();
    }, 100);

    this.video.addEventListener('ended', () => this.onVideoEnd());
    this.skipButton.addEventListener('click', () => this.onVideoEnd());
    this.soundButton.addEventListener('click', () => this.toggleSound());
  }

  checkBodyClass() {
    // Check if the 'user-visited' class exists on the body at the start.
    if (this.body.classList.contains('user-visited') && !this.animationStarted) {
      this.onVideoEnd();
    }
  }

  startVideo() {

    if (!this.video) {
      console.error("Video element not found!");
      return;
    }

    this.body.classList.add('fix-scrolled');

    this.video.play().then(() => {
      // this.video.muted = false;
    }).catch(e => {
      console.error("Error trying to play the video:", e);
    });
  }

  onVideoEnd() {
    if (!this.animationStarted) {
      this.stopAndUnloadVideo();
      this.toggleHubClasses();
      this.onAnimationEnd();

      // Remove classes from hubTwo on video end
      // this.hubTwo.classList.remove('is-active', 'is-current');
      // this.hubTwo.classList.add('is-hidden');
      if (this.body.classList.contains('fix-scrolled')) {
        this.body.classList.remove('fix-scrolled');
      }
      if (!this.body.classList.contains('user-visited')) {
        this.body.classList.add('user-visited');
      }
      this.animationStarted = true;
    }
  }

  stopAndUnloadVideo() {
    this.video.pause();
    this.video.muted = true;
    this.video.setAttribute('data-src', this.video.src);
    this.video.removeAttribute('src');
    this.video.load(); // Unload the video
    this.soundButton.classList.remove('is-active');
  }

  toggleHubClasses() {
    this.hubTwo.classList.remove('is-show', 'is-current');
    this.hubTwo.classList.add('is-hidden');
    this.body.classList.add('hub-two-show');
  }

  toggleSound() {
    this.video.muted = !this.video.muted;
    this.soundButton.classList.toggle('is-active', !this.video.muted);
  }
}

// export class VideoComponent {
//   constructor(selector, onAnimationEnd) {
//     this.enterPageFirst = document.querySelector(selector);
//     this.hubTwo = this.enterPageFirst.querySelector('.hub_two');
//     this.video = this.hubTwo.querySelector('video');
//     this.body = document.body;
//     this.soundButton = this.hubTwo.querySelector('[data-video-sound]');
//     this.skipButton = this.hubTwo.querySelector('[data-video-skip]');
//     this.onAnimationEnd = onAnimationEnd;
//     this.animationStarted = false;

//     this.initialize();
//     this.checkBodyClass();
//   }

//   initialize() {
//     this.video.addEventListener('ended', () => this.onVideoEnd());
//     this.skipButton.addEventListener('click', () => this.onVideoEnd());
//     this.soundButton.addEventListener('click', () => this.toggleSound());
//   }

//   checkBodyClass() {
//     // Check if the 'user-visited' class exists on the body at the start.
//     if (this.body.classList.contains('user-visited') && !this.animationStarted) {
//       this.onVideoEnd();
//     }
//   }

//   onVideoEnd() {
//     if (!this.animationStarted) {
//       this.stopAndUnloadVideo();
//       this.toggleHubClasses();
//       this.onAnimationEnd();
//       this.body.classList.add('user-visited');
//       this.animationStarted = true;
//     }
//   }

//   stopAndUnloadVideo() {
//     this.video.pause();
//     this.video.muted = true;
//     this.video.setAttribute('data-src', this.video.src);
//     this.video.removeAttribute('src');
//     this.video.load(); // Unload the video
//     this.soundButton.classList.remove('is-active');
//   }

//   toggleHubClasses() {
//     this.hubTwo.classList.remove('is-active', 'is-current');
//     this.hubTwo.classList.add('is-hidden');
//     this.body.classList.add('hub-two-show');
//   }

//   toggleSound() {
//     this.video.muted = !this.video.muted;
//     this.soundButton.classList.toggle('is-active', !this.video.muted);
//   }
// }
