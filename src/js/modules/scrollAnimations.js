import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
import Typewriter from 'typewriter-effect/dist/core.js';

gsap.registerPlugin(ScrollTrigger);

export const lobbyScrollAnim = () => {
  if (document.querySelector('.eq-gsap-row')) {
    if (window.innerWidth > 1200) {
      const panelsContainer = document.querySelector('.eq-gsap-row');

      const panels = gsap.utils.toArray('.eq-gsap-row .panel');
      const tween1 = gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: '.eq-gsap-row',
          pin: true,
          start: 'top top',
          scrub: 1,
          markers: false,
          // snap: {
          //   snapTo: 1 / (panels.length - 1),
          //   inertia: false,
          //   duration: { min: 0.1, max: 0.1 },
          // },
          end: () => '+=' + panelsContainer.offsetWidth,
        },
      });
    }
  }
};

export const lobbySecondScrollAnim = () => {
  if (document.querySelector('.eq-gsap-row-2')) {
    if (window.innerWidth > 1200) {
      const panelsContainer = document.querySelector('.eq-gsap-row-2');

      const panels = gsap.utils.toArray('.eq-gsap-row-2 .panel2');
      const tween = gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: '.eq-gsap-row-2',
          pin: true,
          start: 'top top',
          scrub: 1,
          markers: false,
          // snap: {
          //   snapTo: 1 / (panels.length - 1),
          //   inertia: false,
          //   duration: { min: 0.1, max: 0.1 },
          // },
          end: () => '+=' + panelsContainer.offsetWidth,
        },
      });
    }
  }
};

export const progressScrollAnim = () => {
  if (document.querySelector('.progress')) {
    if (window.innerWidth > 767) {
      const panelsContainer = document.querySelector('.progress');
      const isMobile = window.innerWidth < 1200;

      const panels = gsap.utils.toArray('.progress .progress-card');
      const tween2 = gsap.to(panels, {
        x: isMobile
          ? -((panels.length - 1) * 306 + (panels.length - 1) * 40)
          : -((panels.length - 1) * 306 + (panels.length - 1) * 134),
        ease: 'none',
        scrollTrigger: {
          trigger: '.progress',
          pin: true,
          start: 'top top',
          scrub: 1,
          markers: false,
          snap: {
            snapTo: 1 / (panels.length - 1),
            inertia: false,
            duration: { min: 0.1, max: 0.1 },
          },
          end: () => '+=' + panelsContainer.offsetWidth,
        },
      });
    }
  }
};

export const accentScrollAnim = () => {
  if (document.querySelector('.accent')) {
    if (window.innerWidth > 1200) {
      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: '.accent',
            pin: true,
            scrub: 0.5,
            markers: false,
            start: 'top top',
            end: '+=300%',
          },
        })
        .to('#accent-item-1', { opacity: 0, y: -100 }, 0.1)
        .fromTo('#accent-item-2', { opacity: 0, y: 100 }, { opacity: 1, y: 0 })
        .to('#accent-item-2', { opacity: 0, y: -100 })
        .fromTo('#accent-item-3', { opacity: 0, y: 100 }, { opacity: 1, y: 0 });
    }
  }
};

export const videoAnimation = () => {
  if (document.querySelector('#layout-video-con')) {
    let isVideoPlayed = false;
    const video = document.querySelector('#layout-video-item');

    const tween = gsap.to('#layout-video-con', {
      ease: 'none',
      scrollTrigger: {
        trigger: '#layout-video-con',
        pin: false,
        start: '-=350',
        markers: false,

        onEnter: () => {
          if (!isVideoPlayed) {
            video.play();
            isVideoPlayed = true;
          }
        },
      },
    });
  }
};

export const twoImageAnimation = () => {
  if (document.querySelector('#two-block-anim')) {
    const imgArr = document.querySelectorAll(
      '#two-block-anim .two-body__img-item-wrapper'
    );

    const isTablet = window.innerWidth < 1200;

    ScrollTrigger.create({
      trigger: '#two-block-anim',
      start: isTablet ? '-=0' : '-=450',
      end: 'bottom',
      markers: false,
      onEnter: (self) => {
        imgArr.forEach((item) => (item.style.width = `${item.scrollWidth}px`));
      },
    });
  }
};

export const textWriterAnim = () => {
  if (document.querySelector('.form_top')) {
    const formBlock = document.querySelector('.form_top');
    // const isTablet = window.innerWidth < 1200;

    let writer = new Typewriter('#typewriter', {
      strings: ['Узнайте о проекте больше'],
      autoStart: true,
      loop: false,
      delay: 50,
      cursor: '',
      pauseFor: 999999999999999,
    });

    writer.stop();

    ScrollTrigger.create({
      trigger: formBlock,
      // start: isTablet ? '-=0' : '-=450',
      start: '-=350',
      end: 'bottom',
      markers: false,
      onEnter: (self) => {
        writer.start();
      },
    });
  }
};
