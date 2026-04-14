'use strict';

import linesAnimationHandler from './modules/linesAnimationHandler.js';
import scrollPinHandler from './modules/scrollPinHandler.js';
import ctaHoverHandler from './modules/ctaHoverHandler.js';
import headerScroll from './modules/headerScroll.js';
import mobileMenuHandler from './modules/mobileMenuHandler.js';
import sliderInit from './modules/sliderInit.js';
import faqHandler from './modules/faqHandler.js';
import morphAnimation from './modules/morphAnimation.js';

document.addEventListener('DOMContentLoaded', () => {
    linesAnimationHandler();
    scrollPinHandler();
    ctaHoverHandler();
    headerScroll();
    mobileMenuHandler();
    sliderInit();
    faqHandler();
    morphAnimation();
});
