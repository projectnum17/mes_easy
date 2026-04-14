'use strict';

const loader = document.querySelector('.loader');
let loaderHidden = false;

const hideLoader = () => {
    if (loader && !loaderHidden) {
        loaderHidden = true;
        loader.classList.add('is-hide');
        setTimeout(() => loader.remove(), 500);
    }
};

import linesAnimationHandler from './modules/linesAnimationHandler.js';
import scrollPinHandler from './modules/scrollPinHandler.js';
import counterAnimation from './modules/counterAnimation.js';
import ctaHoverHandler from './modules/ctaHoverHandler.js';
import headerScroll from './modules/headerScroll.js';
import mobileMenuHandler from './modules/mobileMenuHandler.js';
import sliderInit from './modules/sliderInit.js';
import faqHandler from './modules/faqHandler.js';
import morphAnimation from './modules/morphAnimation.js';

const animationsHandler = () => {
    const animationScrollingElements = (
        selector = '.js-scroll',
        options = {},
    ) => {
        const scrollingEls = document.querySelectorAll(selector);
        if (!scrollingEls.length) return;

        const defaults = {
            opacity: 0,
            y: 50,
            x: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.1,
            start: 'top 100%',
            end: 'bottom 80%',
        };

        const settings = { ...defaults, ...options };

        scrollingEls.forEach((el) => {
            gsap.from(el, {
                opacity: settings.opacity,
                y: settings.y,
                x: settings.x,
                scale: settings.scale,
                duration: settings.duration,
                ease: settings.ease,
                stagger: settings.stagger,
                scrollTrigger: {
                    trigger: el,
                    start: settings.start,
                    end: settings.end,
                    toggleActions: 'play none none reverse',
                },
            });
        });
    };

    animationScrollingElements();

    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    window.addEventListener('load', () => {
        ScrollTrigger.refresh();
    });
};

document.addEventListener('DOMContentLoaded', () => {
    scrollPinHandler();
    animationsHandler();
    linesAnimationHandler();
    counterAnimation();
    ctaHoverHandler();
    headerScroll();
    mobileMenuHandler();
    sliderInit();
    faqHandler();
    morphAnimation();
    window.addEventListener('load', hideLoader);
    setTimeout(hideLoader, 7000);
});
