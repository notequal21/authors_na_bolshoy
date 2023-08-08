import AOS from 'aos';
import { gsap } from 'gsap/dist/gsap.js';
import noUiSlider from 'nouislider';
// import { ScrollTrigger } from 'gsap/ScrollTrigger.js';

// gsap.registerPlugin(ScrollTrigger);

export function isWebp() {
  function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src =
      'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  }

  testWebP(function (support) {
    let className = support === true ? 'webp' : 'no-webp';
    document.documentElement.classList.add(className);
  });
}

// (gist - b47008824b0175d587f9acbc51892319)

export const anchors = () => {
  const anchors = document.querySelectorAll('a[href*="#"]');

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute('href').substr(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }
};

export const burger = () => {
  if (document.querySelector('.header-body__burger')) {
    const openBtn = document.querySelector('.header-body__burger');
    const closeBtn = document.querySelector('.menu__close');
    const menu = document.querySelector('.menu');
    const body = document.querySelector('body');
    const btnBack = document.querySelector('._submenu-back');
    const submenuBtns = menu.querySelectorAll('._submenu__link');
    const menuLinks = menu.querySelectorAll('.menu-body__links');

    const submenuOpen = (index) => {
      menuLinks.forEach((item) => {
        item.classList.add('submenu-open');
        item.style.transform = `translate(-${menuLinks[0].scrollWidth}px, 0)`;
      });
    };

    const submenuClose = (index) => {
      menuLinks.forEach((item) => {
        item.classList.remove('submenu-open');
        item.style.transform = `translate(0)`;
      });
    };

    let toggleBurger = (type) => {
      if (type === 'close') {
        openBtn.classList.remove('active');
        menu.classList.remove('active');
        body.classList.remove('lock');
        submenuClose();
      } else {
        if (openBtn.classList.contains('active')) {
          openBtn.classList.remove('active');
          menu.classList.remove('active');
          body.classList.remove('lock');
          submenuClose();
        } else {
          openBtn.classList.add('active');
          menu.classList.add('active');
          body.classList.add('lock');
        }
      }
    };

    openBtn.addEventListener('click', toggleBurger);
    closeBtn.addEventListener('click', () => toggleBurger('close'));
    submenuBtns.forEach((item, index) =>
      item.addEventListener('click', () => submenuOpen(index))
    );
    btnBack.addEventListener('click', submenuClose);
  }
};

export const modal = () => {
  if (document.querySelector('.modal-open-btn')) {
    const openBtn = document.querySelectorAll('.modal-open-btn');
    const modal = document.querySelector('.contactus');
    const modalBg = document.querySelector('.contactus__bg');
    const body = document.querySelector('body');
    const content = document.querySelectorAll('.container');

    let toggleModal = (e) => {
      e.preventDefault();

      let div = document.createElement('div');
      div.style.overflowY = 'scroll';
      div.style.width = '50px';
      div.style.height = '50px';
      document.body.append(div);
      let scrollWidth = div.offsetWidth - div.clientWidth;

      div.remove();

      if (modal.classList.contains('active')) {
        modal.classList.remove('active');
        body.classList.remove('lock');
        if (window.innerWidth > 992) {
          content.forEach((item) => {
            item.style.maxWidth = `1320px`;
            item.style.padding = ` 0 20px`;
          });
        }
      } else {
        modal.classList.add('active');
        body.classList.add('lock');
        if (window.innerWidth > 992) {
          content.forEach((item) => {
            item.style.maxWidth = `${1320 + scrollWidth}px`;
            item.style.padding = ` 0 ${scrollWidth + 20}px 0 20px`;
          });
        }
      }
    };

    openBtn.forEach((item) => {
      item.addEventListener('click', toggleModal);
    });
    modalBg.addEventListener('click', toggleModal);
  }
};

export const parallax = () => {
  if (document.documentElement.clientWidth > 1000) {
    // disable script if resolution less than 1000px

    let bg = document.querySelector('.kanuvoye-pomesucud');
    window.addEventListener('mousemove', function (e) {
      let x = e.clientX / window.innerWidth;
      let y = e.clientY / window.innerHeight;
      bg.style.transform = 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)';
    });
  }
};

export const spoilerJQ = () => {
  $(document).ready(function () {
    $('.spoiler__btn').click(function (event) {
      if ($('.services__body').hasClass('one')) {
        $('.spoiler__btn').not($(this)).removeClass('active');
        $('.services__item-content').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('active').next().slideToggle(300);
    });
  });
};

export const sticky = () => {
  // When the user scrolls the page, execute myFunction
  window.onscroll = function () {
    myFunction();
  };

  // Get the header
  var header = document.getElementById('myHeader');

  // Get the offset position of the navbar
  var sticky = header.offsetTop;

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  }
};

export const tabs = () => {
  var jsTriggers = document.querySelectorAll('.js-tab-trigger'),
    jsContents = document.querySelectorAll('.js-tab-content');
  jsTriggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var id = this.getAttribute('data-tab'),
        content = document.querySelector(
          '.js-tab-content[data-tab="' + id + '"]'
        ),
        activeTrigger = document.querySelector('.js-tab-trigger.active'),
        activeContent = document.querySelector('.js-tab-content.active');

      activeTrigger.classList.remove('active'); // 1
      trigger.classList.add('active'); // 2

      activeContent.classList.remove('active'); // 3
      content.classList.add('active'); // 4
    });
  });
};

export const upBtn = () => {
  document.addEventListener('DOMContentLoaded', function () {
    let btn = document.querySelector('#toTop');
    window.addEventListener('scroll', function () {
      // Если прокрутили дальше 599px, показываем кнопку
      if (pageYOffset > 100) {
        btn.classList.add('show');
        // Иначе прячем
      } else {
        btn.classList.remove('show');
      }
    });

    // При клике прокручиываем на самый верх
    btn.onclick = function (click) {
      click.preventDefault();
      scrollTo(0, 400);
    };
  });
};

export const buildingTooltip = () => {
  if (document.querySelector('.building-tooltip')) {
    const tooltipArr = document.querySelectorAll('.building-tooltip');

    tooltipArr.forEach((item) =>
      item.addEventListener('mouseover', (event) => {
        const { target } = event;

        if (
          target
            .closest('.building-tooltip__btn')
            .classList.contains('building-tooltip__btn')
        ) {
          if (item.classList.contains('_active')) {
            item.classList.remove('_active');
          } else {
            tooltipArr.forEach((item) => item.classList.remove('_active'));
            item.classList.add('_active');
          }
        }
      })
    );
  }
};

export const AOSanim = () => {
  AOS.init({
    once: true,
    duration: 600,
    delay: 50,
  });
};

export const preloader = () => {
  if (document.querySelector('.preloader')) {
    let preloader = document.querySelector('.preloader');
    let body = document.querySelector('body');
    body.classList.add('lock');

    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => {
        body.classList.remove('lock');
      }, 1500);
      setTimeout(() => {
        preloader.classList.add('hidden');
      }, 2800);
      function counter(ms, className) {
        let counter = 0;
        let interval = setInterval(() => {
          document.querySelector(className).innerHTML = `${++counter} %`;
          counter === 100 ? clearInterval(interval) : false;
        }, ms);
      }
      counter(10, '.preloader-body__percents');

      gsap.to('.preloader-body__percents', { color: '#131411', duration: 1.5 });
      gsap.to('.preloader-body__logo-light', {
        width: '100%',
        opacity: 1,
        duration: 1.5,
        delay: -1.5,
      });
      gsap.to('.preloader-body__logo-light', {
        clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0% 100%)',
        duration: 0.1,
        delay: 0.35,
      });
      gsap.to('.preloader', {
        scale: 6,
        duration: 2.5,
        delay: 1.5,
      });
      gsap.to('.preloader', {
        opacity: 0,
        duration: 0.8,
        delay: 1.5,
      });
    });
  }
};

export const filterSliders = () => {
  if (document.querySelector('.filters-item__slider')) {
    let sliderBedrooms = document.getElementById('filter-slider-bedrooms');
    let sliderComfort = document.getElementById('filter-slider-comfort');
    let sliderFloor = document.getElementById('filter-slider-floor');
    // var inputNumberComfort = document.getElementById('inputNumberComfort');
    var inputNumberComfortFrom = document.getElementById(
      'spanNumberSquareFrom'
    );
    var inputNumberComfortTo = document.getElementById('spanNumberSquareTo');
    var inputNumberCost = document.getElementById('inputNumberCost');
    var sliderCost = document.getElementById('filter-slider-cost');
    const floorFromNum = document.querySelector('#spanNumberFloorFrom');
    const floorToNum = document.querySelector('#spanNumberFloorTo');
    let input = document.querySelectorAll('.input-content-width'),
      buffer = [];

    var valuesForSlider = ['A1', 'A2', 'A3'];

    var format = {
      to: function (value) {
        return valuesForSlider[Math.round(value)];
      },
      from: function (value) {
        return valuesForSlider.indexOf(Number(value));
      },
    };

    noUiSlider.create(sliderBedrooms, {
      start: 1,
      range: {
        min: 0,
        max: 2,
      },
      connect: 'lower',
      step: 1,
      tooltips: false,
      format: format,
      pips: { mode: 'steps', format: format },
    });
    noUiSlider.create(sliderComfort, {
      start: [35, 50],
      range: {
        min: 35,
        max: 115,
      },
      connect: true,
      step: 1,
      tooltips: false,
    });
    noUiSlider.create(sliderFloor, {
      start: [5, 10],
      range: {
        min: 1,
        max: 20,
      },
      connect: true,
      step: 1,
      tooltips: false,
    });
    noUiSlider.create(sliderCost, {
      start: 7500000,
      range: {
        min: 5000000,
        max: 50000000,
      },
      connect: 'lower',
      step: 10000,
      tooltips: false,
    });

    sliderComfort.noUiSlider.on('update', function (values, handle) {
      var value = values[handle];
      // inputNumberComfort.value = Math.floor(value);

      if (handle) {
        // floorToNum.innerHTML = Math.floor(value);
        // inputNumberComfortTo.value = Math.floor(value);
        inputNumberComfortTo.innerHTML = Math.floor(value);
      } else {
        // floorFromNum.innerHTML = Math.floor(value);
        // inputNumberComfortFrom.value = Math.floor(value);
        inputNumberComfortFrom.innerHTML = Math.floor(value);
      }

      // for (var i = 0; input.length > i; i++) {
      //   buffer[i] = document.createElement('div');
      //   buffer[i].className = 'buffer';
      //   input[i].parentNode.insertBefore(buffer[i], input[i].nextSibling);

      //   input[i].nextElementSibling.innerHTML = input[i].value;
      //   input[i].style.width = input[i].nextElementSibling.clientWidth + 'px';
      // }
    });
    sliderCost.noUiSlider.on('update', function (values, handle) {
      var value = values[handle];
      inputNumberCost.value = Number(value).toLocaleString();

      for (var i = 0; input.length > i; i++) {
        buffer[i] = document.createElement('div');
        buffer[i].className = 'buffer';
        input[i].parentNode.insertBefore(buffer[i], input[i].nextSibling);

        input[i].nextElementSibling.innerHTML = input[i].value;
        input[i].style.width = input[i].nextElementSibling.clientWidth + 'px';
      }
    });

    sliderFloor.noUiSlider.on('update', function (values, handle) {
      var value = values[handle];
      if (handle) {
        floorToNum.innerHTML = Math.floor(value);
      } else {
        floorFromNum.innerHTML = Math.floor(value);
      }
    });

    inputNumberComfort.addEventListener('change', function () {
      sliderComfort.noUiSlider.set([this.value]);
    });
    inputNumberCost.addEventListener('change', function () {
      sliderCost.noUiSlider.set([
        this.value.trim().replace(/\s+/g, ' ').split(' ').join(''),
      ]);
    });

    for (var i = 0; input.length > i; i++) {
      buffer[i] = document.createElement('div');
      buffer[i].className = 'buffer';
      input[i].parentNode.insertBefore(buffer[i], input[i].nextSibling);

      input[i].oninput = function () {
        this.nextElementSibling.innerHTML = this.value;
        this.style.width = this.nextElementSibling.clientWidth + 'px';
      };
    }
  }
};

export const otherFilters = () => {
  if (document.querySelector('.filters-others')) {
    const otherFilters = document.querySelector('.filters-others');
    const btn = otherFilters.querySelector('.filters-others-title');
    const content = otherFilters.querySelector('.filters-others-body');

    btn.addEventListener('click', () => {
      if (otherFilters.classList.contains('_open')) {
        otherFilters.classList.remove('_open');
        content.style.height = 0;
      } else {
        otherFilters.classList.add('_open');
        content.style.height = `${content.scrollHeight}px`;
      }
    });
  }
};
