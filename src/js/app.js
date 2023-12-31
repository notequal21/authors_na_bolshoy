import * as functions from './modules/functions.js';
import * as sliders from './modules/sliders.js';
import * as scrollAnimations from './modules/scrollAnimations.js';

import './modules/_imagemap.js';

import * as noBuild from './modules/_nobuild.js';

noBuild.filterSliders();

functions.burger();
functions.anchors();
functions.buildingTooltip();
functions.AOSanim();
functions.preloader();
functions.otherFilters();
functions.tabs();
functions.tabs2();
functions.tabs3();
functions.tabsMulti();
functions.callbackModal();
functions.mainHandlerAnim();
functions.checkUserAgentVideoAutoplay();
functions.faqAccordion();
functions.galleryLightBox();
functions.paymentCircles();
functions.setNumWithSpaces();
functions.customSelect();
functions.genplan();
functions.home62();
functions.home76();
// functions.imgMap();

// sliders.parkingSlider();
sliders.yardsSlider();
sliders.accentSlider();
sliders.progressSlider();
sliders.viewSlider();
sliders.futureMoreSlider();
sliders.gallerySlider1();
sliders.gallerySlider2();
sliders.progressInfoSlider();
sliders.progressItemSlider();

scrollAnimations.twoImageAnimation();
scrollAnimations.textWriterAnim();
scrollAnimations.lobbyScrollAnim();
scrollAnimations.lobbySecondScrollAnim();
scrollAnimations.accentScrollAnim();
scrollAnimations.videoAnimation();
scrollAnimations.advantagesVideoAnimation();
// scrollAnimations.progressScrollAnim();
