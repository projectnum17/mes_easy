const sliderInit = () => {
    if (typeof Swiper === 'undefined') return;

    const sliderEl = document.querySelector('.js-slider');
    if (!sliderEl) return;

    new Swiper(sliderEl, {
        slidesPerView: 1,
        spaceBetween: 24,
        speed: 900,
        navigation: {
            prevEl: '.js-slider-prev',
            nextEl: '.js-slider-next',
        }
    })
};

export default sliderInit;
