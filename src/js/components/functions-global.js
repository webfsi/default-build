import { gsap } from "gsap";
import { SplitText } from "gsap-custom/SplitText";

let splitElements = [];

// Функція для розділення тексту
export function splitTextBurger() {
  if (document.querySelector('.b-menu__text')) {
    if (document.querySelector('.b-menu__text span > div')) return;
    let mainText = document.querySelectorAll('.b-menu__text span');
    mainText.forEach(el => {
      splitElements.push(new SplitText(el, { type: "words, chars" }));
    });
  }
}

// Функція для запуску GSAP анімації
export function startGsapAnimation() {
  let delay = 0;
  let stag = 0.015;
  let animationPromises = [];

  splitElements.forEach((split) => {
    let promise = new Promise((resolve) => {
      gsap.from(split.chars, {
        duration: 1,
        opacity: 0,
        stagger: stag,
        delay: delay,
        ease: "power2.out",
        onComplete: resolve
      });
    });

    delay += split.chars.length * stag;
    animationPromises.push(promise);
  });

  setTimeout(() => {
    const menu = document.querySelectorAll('.b-menu .js-hover');
    let delay = 0; // Початкова затримка

    menu.forEach(el => {
      setTimeout(() => {
        el.classList.add('js-hover-active');
      }, delay);

      delay += 300;
    });
  }, 1000);

  // Promise.all(animationPromises).then(() => {
  //   const menu = document.querySelectorAll('.b-menu .js-hover');
  //   let delay = 0; // Початкова затримка

  //   menu.forEach(el => {
  //     setTimeout(() => {
  //       el.classList.add('js-hover-active');
  //     }, delay);

  //     delay += 300;
  //   });
  // });
}
// export function splitText() {
//   if (document.querySelector('.b-menu__text')) {
//     let mainText = document.querySelectorAll('.b-menu__text span');
//     mainText.forEach(el => {
//       new SplitText(el, { type: "words, chars" });
//     });
//   }
// }
// // Функція для запуску GSAP анімації
// export function startGsapAnimation() {
//   let mainText = document.querySelectorAll('.b-menu__text span');
//   let delay = 0;

//   mainText.forEach(el => {
//     let split = new SplitText(el, { type: "words, chars" });

//     gsap.from(split.chars, {
//       duration: 0.3,
//       opacity: 0,
//       stagger: 0.05,
//       delay: delay,
//       ease: "power2.out"
//     });

//     delay += split.chars.length * 0.05;
//   });
// }
// animateText.js
// export function animateMenuText() {
//   if (document.querySelector('.b-menu__text')) {
//     let mainText = document.querySelectorAll('.b-menu__text span');
//     let delay = 0;

//     mainText.forEach(el => {
//       // let split = new SplitText(el, { type: "words, chars" });
//       let splittext = el.querySelectorAll('div');

//       gsap.from(splittext, {
//         duration: 0.1,
//         // delay: 0.5,
//         opacity: 0,
//         stagger: 0.02,
//         delay: delay,
//         ease: "power2.out"
//       });

//       delay += splittext.length * 0.02;
//     });
//   }
// }