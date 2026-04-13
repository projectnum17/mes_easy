'use strict';

import ctaHoverHandler from './modules/ctaHoverHandler.js';
import headerScroll from './modules/headerScroll.js';
import mobileMenuHandler from './modules/mobileMenuHandler.js';

document.addEventListener('DOMContentLoaded', () => {
    ctaHoverHandler();
    headerScroll();
    mobileMenuHandler();
});
