import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, Controller } from 'swiper/modules';

export const parkingSlider = () => {
  if (document.querySelector('.parking-body__slider')) {
    const swiper = new Swiper('.parking-body__slider', {
      modules: [Pagination],

      pagination: {
        el: '.parking-body__slider-pagination',
      },
    });
  }
};

export const yardsSlider = () => {
  if (document.querySelector('.yards-slider__img')) {
    const swiperImg = new Swiper('.yards-slider__img', {
      modules: [Pagination, Navigation, Controller],

      navigation: {
        prevEl: '.yards-slider__img-nav_prev',
        nextEl: '.yards-slider__img-nav_next',
      },

      pagination: {
        el: '.yards-slider__text-pagination',
      },
    });
    const swiperText = new Swiper('.yards-slider__text-content', {
      modules: [Controller],
      spaceBetween: 30,
    });

    swiperImg.controller.control = swiperText;
    swiperText.controller.control = swiperImg;
  }
};

export const accentSlider = () => {
  if (document.querySelector('.accent-content')) {
    if (window.innerWidth <= 1200) {
      const swiper = new Swiper('.accent-content', {
        modules: [Navigation, Controller],

        spaceBetween: 300,

        navigation: {
          prevEl: '#accent-btn-prev',
          nextEl: '#accent-btn-next',
        },
      });
      const swiperImg = new Swiper('.accent__img', {
        modules: [Controller],
      });
      swiperImg.controller.control = swiper;
      swiper.controller.control = swiperImg;
    }
  }
};

export const progressSlider = () => {
  if (document.querySelector('.progress-body')) {
    if (window.innerWidth <= 767) {
      const swiper = new Swiper('.progress-body', {
        modules: [Navigation],
        spaceBetween: 20,
        slidesPerView: 1,

        navigation: {
          prevEl: '#progress-nav-prev',
          nextEl: '#progress-nav-next',
        },

        breakpoints: {
          560: {
            slidesPerView: 2,
          },
        },
      });
    }
  }
};

export const viewSlider = () => {
  if (document.querySelector('.view-slider')) {
    const swiper = new Swiper('.view-slider', {
      modules: [Navigation, Pagination],
      spaceBetween: 20,
      slidesPerView: 1,

      navigation: {
        prevEl: '.view-slider__nav-prev',
        nextEl: '.view-slider__nav-next',
      },

      pagination: {
        el: '.view-slider__pagination',
      },
    });
  }
};

export const futureMoreSlider = () => {
  if (document.querySelector('.location_future-more-body__slider')) {
    const swiper = new Swiper('.location_future-more-body__slider', {
      modules: [Navigation],
      spaceBetween: 20,
      slidesPerView: 1,

      navigation: {
        prevEl: '#location-future-more-prev',
        nextEl: '#location-future-more-next',
      },
    });
  }
};

export const gallerySlider1 = () => {
  if (document.querySelector('#gallery-slider-1')) {
    const isMobile = window.innerWidth <= 767;

    const swiper = new Swiper('#gallery-slider-1', {
      modules: [Navigation],
      spaceBetween: 20,
      slidesPerView: 1,

      navigation: {
        prevEl: isMobile ? '#gallery-item1-mobile-prev' : '#gallery-item1-prev',
        nextEl: isMobile ? '#gallery-item1-mobile-next' : '#gallery-item1-next',
      },

      breakpoints: {
        768: {
          spaceBetween: 60,
          slidesPerView: 'auto',
        },
        1200: {
          spaceBetween: 86,
          slidesPerView: 'auto',
        },
      },
    });
  }
};

export const gallerySlider2 = () => {
  if (document.querySelector('#gallery-slider-2')) {
    const isMobile = window.innerWidth <= 767;

    const swiper = new Swiper('#gallery-slider-2', {
      modules: [Navigation],
      spaceBetween: 20,
      slidesPerView: 1,

      navigation: {
        prevEl: isMobile ? '#gallery-item2-mobile-prev' : '#gallery-item2-prev',
        nextEl: isMobile ? '#gallery-item2-mobile-next' : '#gallery-item2-next',
      },

      breakpoints: {
        768: {
          spaceBetween: 60,
          slidesPerView: 'auto',
        },
        1200: {
          spaceBetween: 86,
          slidesPerView: 'auto',
        },
      },
    });
  }
};
