import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';

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
