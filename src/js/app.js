import * as functions from './modules/functions.js';
import * as sliders from './modules/sliders.js';
import * as scrollAnimations from './modules/scrollAnimations.js';

functions.burger();
functions.buildingTooltip();
functions.AOSanim();
functions.preloader();
functions.filterSliders();
functions.otherFilters();

sliders.parkingSlider();
sliders.yardsSlider();
sliders.accentSlider();
sliders.progressSlider();
sliders.viewSlider();

scrollAnimations.lobbyScrollAnim();
scrollAnimations.lobbySecondScrollAnim();
scrollAnimations.accentScrollAnim();
scrollAnimations.progressScrollAnim();
