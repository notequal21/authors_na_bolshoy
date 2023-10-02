import AOS from 'aos';
import { gsap } from 'gsap/dist/gsap.js';
import noUiSlider from 'nouislider';
import lightbox from '../../../node_modules/lightbox2/dist/js/lightbox-plus-jquery.js';
import { Fancybox } from '@fancyapps/ui';
import Choices from '../../../node_modules/choices.js/public/assets/scripts/choices.js';
// import imageMapResize  from './_imagemap.js';

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
  const openBtn = document.querySelector('.header-body__burger');
  const body = document.querySelector('body');
  const menu = document.querySelector('.menu');
  const isIndexPage = document.querySelector('#is-index-page') ? true : false;

  function setLocation(curLoc) {
    // window.history.pushState(null, null, curLoc);
    location.href = curLoc;
    location.hash = curLoc;
  }

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      let linkType =
        anchor.getAttribute('href').split('/#').length == 2 ? 'anchor' : 'link';

      // console.log(anchor.getAttribute('href').split('/#'));

      const blockID = anchor.getAttribute('href').substr(2);
      if (blockID.length > 1) {
        if (linkType === 'anchor') {
          if (isIndexPage) {
            body.classList.remove('lock');
            menu.classList.remove('active');
            openBtn.classList.remove('active');

            document.getElementById(blockID).scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          } else {
            body.classList.remove('lock');
            menu.classList.remove('active');
            openBtn.classList.remove('active');
            setLocation(`${anchor.getAttribute('href')}`);
          }
        } else {
          setLocation(`${anchor.getAttribute('href')}`);
          body.classList.remove('lock');
          menu.classList.remove('active');
        }
      }
    });
  }
};

export const burger = () => {
  if (document.querySelector('.header-body__burger')) {
    const openBtn = document.querySelector('.header-body__burger');
    const openAboutBtn = document.querySelector('#header-about-btn');
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

    openAboutBtn.addEventListener('click', (event) => {
      event.preventDefault();
      toggleBurger();
      submenuOpen();
    });

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

export const tabs2 = () => {
  var jsTriggers = document.querySelectorAll('.js-tab-trigger-2'),
    jsContents = document.querySelectorAll('.js-tab-content-2');
  jsTriggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var id = this.getAttribute('data-tab'),
        content = document.querySelector(
          '.js-tab-content-2[data-tab="' + id + '"]'
        ),
        activeTrigger = document.querySelector('.js-tab-trigger-2.active'),
        activeContent = document.querySelector('.js-tab-content-2.active');

      activeTrigger.classList.remove('active'); // 1
      trigger.classList.add('active'); // 2

      activeContent.classList.remove('active'); // 3
      content.classList.add('active'); // 4
    });
  });
};

export const tabs3 = () => {
  var jsTriggers = document.querySelectorAll('.js-tab-trigger-3'),
    jsContents = document.querySelectorAll('.js-tab-content-3');
  jsTriggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var id = this.getAttribute('data-tab'),
        content = document.querySelector(
          '.js-tab-content-3[data-tab="' + id + '"]'
        ),
        activeTrigger = document.querySelector('.js-tab-trigger-3.active'),
        activeContent = document.querySelector('.js-tab-content-3.active');

      activeTrigger.classList.remove('active'); // 1
      trigger.classList.add('active'); // 2

      activeContent.classList.remove('active'); // 3
      content.classList.add('active'); // 4
    });
  });
};

export const tabs4 = () => {
  if (document.querySelector('.payment_info-btn')) {
    const btnArr = document.querySelectorAll('.payment_info-btn');
    const contentArr = document.querySelectorAll('.payment_info-body');

    btnArr.forEach((item) =>
      item.addEventListener('click', (event) => {
        contentArr.forEach((item) => item.classList.remove('active'));
        contentArr[item.dataset.tab].classList.add('active');
      })
    );
  }
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
  if (document.querySelector('.building-tooltip') && innerWidth <= 991) {
    const tooltipArr = document.querySelectorAll('.building-tooltip');

    tooltipArr.forEach((item) =>
      item.addEventListener('click', (event) => {
        const { target } = event;

        if (target.closest('.building-tooltip__btn')) {
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
      }, 2000);
      setTimeout(() => {
        preloader.classList.add('hidden');
      }, 3300);
      function counter(ms, className) {
        let counter = 0;
        let interval = setInterval(() => {
          document.querySelector(className).innerHTML = `${++counter} %`;
          counter === 100 ? clearInterval(interval) : false;
        }, ms);
      }
      counter(10, '.preloader-body__percents');

      gsap.to('.preloader-body__percents', { color: '#131411', duration: 2 });
      gsap.to('.preloader-body__logo-light', {
        width: '100%',
        opacity: 1,
        duration: 2,
        delay: -1.5,
      });
      gsap.to('.preloader-body__logo-light', {
        clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0% 100%)',
        duration: 0.1,
        delay: 0.35,
      });
      gsap.to('.preloader', {
        scale: 6,
        duration: 3,
        delay: 1.5,
      });
      gsap.to('.preloader', {
        opacity: 0,
        duration: 1.3,
        delay: 1.5,
      });
    });
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

export const callbackModal = () => {
  if (document.querySelector('.callback_modal')) {
    const openBtn = document.querySelectorAll('.callback_modal-open-btn');
    const modal = document.querySelector('.callback_modal');
    const modalClose = document.querySelector('.callback_modal-body__close');
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
        if (window.innerWidth > 1199) {
          content.forEach((item) => {
            item.style.maxWidth = `1368px`;
            item.style.padding = ` 0 36px`;
          });
        }
        if (window.innerWidth > 991 && window.innerWidth < 1200) {
          content.forEach((item) => {
            item.style.maxWidth = `1368px`;
            item.style.padding = ` 0 28px`;
          });
        }
        if (window.innerWidth <= 767) {
          item.style.padding = ` 0 20px`;
        }
      } else {
        modal.classList.add('active');
        body.classList.add('lock');
        if (window.innerWidth > 1199) {
          content.forEach((item) => {
            item.style.maxWidth = `${1368 + scrollWidth}px`;
            item.style.padding = ` 0 ${scrollWidth + 36}px 0 36px`;
          });
        }
        if (window.innerWidth > 992 && window.innerWidth < 1200) {
          content.forEach((item) => {
            item.style.maxWidth = `${1368 + scrollWidth}px`;
            item.style.padding = ` 0 ${scrollWidth + 36}px 0 36px`;
          });
        }
        if (window.innerWidth <= 767) {
          item.style.padding = ` 0 ${scrollWidth + 20}px 0 20px`;
        }
      }
    };

    openBtn.forEach((item) => {
      item.addEventListener('click', toggleModal);
    });
    modalClose.addEventListener('click', toggleModal);
  }
};

export const mainHandlerAnim = () => {
  if (document.querySelector('img-comparison-slider')) {
    const sliderItem = document.querySelector('img-comparison-slider');
    const sliderHandler = sliderItem.querySelector('.main-slider__handler');

    sliderItem.addEventListener('mousedown', () => {
      sliderHandler.classList.add('_active');
    });
    sliderItem.addEventListener('mouseup', () => {
      sliderHandler.classList.remove('_active');
    });
    sliderItem.addEventListener('touchstart', () => {
      sliderHandler.classList.add('_active');
    });
    sliderItem.addEventListener('touchend', () => {
      sliderHandler.classList.remove('_active');
    });
  }
};

export const checkUserAgentVideoAutoplay = async () => {
  if (document.querySelector('#video-bg')) {
    const video = document.querySelector('#video-bg');

    try {
      await video.play();

      video.setAttribute('autoplay', true);

      console.log('video started playing successfully');
    } catch (err) {
      console.log(err, 'video play error');
      // do stuff in case your video is unavailable to play/autoplay
      // show user that video autoplay was aborted
    }
  }
};

export const faqAccordion = () => {
  if (document.querySelector('.policy_content-body__item')) {
    const accordionList = document.querySelectorAll(
      '.policy_content-body__item'
    );

    accordionList.forEach((item) =>
      item.addEventListener('click', (event) => {
        const { target } = event;
        const answerContent = item.querySelector(
          '.policy_content-body__item-content'
        );

        if (target.closest('.policy_content-body__item-title')) {
          if (item.classList.contains('open')) {
            item.classList.remove('open');
            answerContent.style.height = '0';
          } else {
            item.classList.add('open');
            answerContent.style.height = `${answerContent.scrollHeight}px`;
          }
        }
      })
    );
  }
};

export const galleryLightBox = () => {
  if (document.querySelector('[data-fancybox]')) {
    Fancybox.bind('[data-fancybox]', {});
  }
};

export const paymentCircles = () => {
  if (document.querySelector('.payment_circles-body')) {
    const circlesBody = document.querySelector('.payment_circles-body');
    const circles = circlesBody.querySelectorAll('.payment_circles-body__item');
    const content = circlesBody.querySelector('.payment_circles-body__content');
    const contentItems = content.querySelectorAll(
      '.payment_circles-body__content-item'
    );
    const closeBtn = circlesBody.querySelector(
      '.payment_circles-body__content-close'
    );

    const toggleCircle = (index, type) => {
      if (circlesBody.classList.contains('_active') || type === 'close') {
        circlesBody.classList.remove('_active');
        circles.forEach((item) => {
          item.classList.remove('_active');
        });
        contentItems.forEach((item) => {
          item.classList.remove('_active');
        });
      } else {
        circlesBody.classList.add('_active');
        circles[index].classList.add('_active');
        contentItems[index].classList.add('_active');
      }
    };

    circlesBody.addEventListener('click', (event) => {
      const { target } = event;
      const isCloseBtn =
        target.closest('.payment_circles-body__content-close') ||
        target.closest('.payment_circles-body__close');
      const index = target.closest('.payment_circles-body__item')?.dataset
        .circleIndex;

      if (index) {
        toggleCircle(index);
      } else if (isCloseBtn) {
        toggleCircle('', 'close');
      }
    });
  }
};

export const setNumWithSpaces = () => {
  if (document.querySelector('.num-with-spaces')) {
    const nums = document.querySelectorAll('.num-with-spaces');
    nums.forEach(
      (item) =>
        (item.innerHTML = `${(+item.innerText.split(
          '₽'
        )[0]).toLocaleString()} ₽`)
    );
  }
};

export const customSelect = () => {
  if (document.querySelector('.custom-select')) {
    const choicesArr = document.querySelectorAll('.custom-select');

    choicesArr.forEach((item) => {
      const choices = new Choices(item, {
        searchEnabled: false,
        itemSelectText: '',
      });
    });
  }
};

export const imgMap = () => {
  imageMapResize();
};

export const genplan = () => {
  if (document.querySelector('.genplan')) {
    const genplan = document.querySelector('.genplan');
    const map = genplan.querySelector('map');
    const home1 = genplan.querySelector('#home-1');
    const homeMobile1 = genplan.querySelector('#home-mobile-1');
    const homeSelect1 = genplan.querySelector('#home-select-1');
    const homeSelect2 = genplan.querySelector('#home-select-2');
    const homeSelectMobile1 = genplan.querySelector('#home-select-mobile-1');
    const homeSelectMobile2 = genplan.querySelector('#home-select-mobile-2');
    const genplanHome1 = genplan.querySelector('#genplan-home-1');
    const home2 = genplan.querySelector('#home-2');
    const homeMobile2 = genplan.querySelector('#home-mobile-2');
    const genplanHome2 = genplan.querySelector('#genplan-home-2');

    home1.addEventListener('click', (even) => {
      event.preventDefault();
    });
    home2.addEventListener('click', (even) => {
      event.preventDefault();
    });
    homeMobile1.addEventListener('click', (even) => {
      event.preventDefault();
    });
    homeMobile2.addEventListener('click', (even) => {
      event.preventDefault();
    });

    home1.addEventListener('mouseenter', () => {
      genplanHome1.classList.add('_active');
      homeSelect1.classList.add('_active');
      homeSelectMobile1.classList.add('_active');
    });
    home1.addEventListener('mouseleave', () => {
      genplanHome1.classList.remove('_active');
      homeSelect1.classList.remove('_active');
      homeSelectMobile1.classList.remove('_active');
    });
    home2.addEventListener('mouseenter', () => {
      genplanHome2.classList.add('_active');
      homeSelect2.classList.add('_active');
      homeSelectMobile2.classList.add('_active');
    });
    home2.addEventListener('mouseleave', () => {
      genplanHome2.classList.remove('_active');
      homeSelect2.classList.remove('_active');
      homeSelectMobile2.classList.remove('_active');
    });
    homeMobile1.addEventListener('mouseenter', () => {
      genplanHome1.classList.add('_active');
      homeSelect1.classList.add('_active');
      homeSelectMobile1.classList.add('_active');
    });
    homeMobile1.addEventListener('mouseleave', () => {
      genplanHome1.classList.remove('_active');
      homeSelect1.classList.remove('_active');
      homeSelectMobile1.classList.remove('_active');
    });
    homeMobile2.addEventListener('mouseenter', () => {
      genplanHome2.classList.add('_active');
      homeSelect2.classList.add('_active');
      homeSelectMobile2.classList.add('_active');
    });
    homeMobile2.addEventListener('mouseleave', () => {
      genplanHome2.classList.remove('_active');
      homeSelect2.classList.remove('_active');
      homeSelectMobile2.classList.remove('_active');
    });
  }
};

export const home62 = () => {
  if (document.querySelector('#home-62')) {
    const home = document.querySelector('#home-62');
    const homeBottom = document.querySelector('.home-bottom');
    const homeCard = document.querySelectorAll('.home-card');
    const map = home.querySelector('map');
    const mapAreas = map.querySelectorAll('area');
    const selectItems = home.querySelectorAll('.home-body__item-select img');
    let isSelected = false;

    homeCard.forEach((item, index) => {
      item.addEventListener('mouseleave', () => {
        if (isSelected) {
          item.classList.remove('_active');
          homeBottom.classList.remove('_lock');
          selectItems.forEach((selectItem) => {
            selectItem.classList.remove('_active');
          });
          isSelected = false;
        }
      });
    });

    mapAreas.forEach((item, index) => {
      item.addEventListener('click', (even) => {
        event.preventDefault();
      });

      item.addEventListener('click', (event) => {
        if (!isSelected) {
          homeCard.forEach((item) => {
            item.classList.add('_active');
          });
          homeBottom.classList.add('_lock');
          selectItems[index].classList.add('_active');
          isSelected = true;
        }
      });
      item.addEventListener('mouseenter', (event) => {
        if (!isSelected) {
          selectItems[index].classList.add('_active');
        }
      });
      item.addEventListener('mouseleave', (event) => {
        if (!isSelected) {
          selectItems[index].classList.remove('_active');
        }
      });
    });
  }
};

export const home76 = () => {
  if (document.querySelector('#home-76')) {
    const home = document.querySelector('#home-76');
    const homeCard = document.querySelectorAll('.home-card');
    const homeBottom = document.querySelector('.home-bottom');
    const map = home.querySelector('map');
    const mapAreas = map.querySelectorAll('area');
    const selectItems = home.querySelectorAll('.home-body__item-select img');
    let isSelected = false;

    homeCard.forEach((item, index) => {
      item.addEventListener('mouseleave', () => {
        if (isSelected) {
          item.classList.remove('_active');
          homeBottom.classList.remove('_lock');
          selectItems.forEach((selectItem) => {
            selectItem.classList.remove('_active');
          });
          isSelected = false;
        }
      });
    });

    mapAreas.forEach((item, index) => {
      item.addEventListener('click', (even) => {
        event.preventDefault();
      });

      item.addEventListener('click', (event) => {
        if (!isSelected) {
          homeCard.forEach((item) => {
            item.classList.add('_active');
          });
          homeBottom.classList.add('_lock');
          selectItems[index].classList.add('_active');
          isSelected = true;
        }
      });
      item.addEventListener('mouseenter', (event) => {
        if (!isSelected) {
          selectItems[index].classList.add('_active');
        }
      });
      item.addEventListener('mouseleave', (event) => {
        if (!isSelected) {
          selectItems[index].classList.remove('_active');
        }
      });
    });
  }
};
