const scrollPinHandler = () => {
    gsap.registerPlugin(ScrollTrigger);

    const items = document.querySelectorAll('.js-scrub li');
    const triggerElement = document.querySelector('.js-pin');
    const pic = document.querySelector('.machine__pic');

    if (!items.length || !triggerElement || !pic) return;

    let mm = gsap.matchMedia();

    mm.add(
        {
            isDesktop: '(min-width: 1024px)',
            isMobile: '(max-width: 1023px)',
        },
        (context) => {
            let { isDesktop } = context.conditions;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: triggerElement,
                    start: 'top top',
                    end: () => `+=${items.length * 400}`,
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                },
            });

            gsap.set(pic, { scale: isDesktop ? 1.3 : 1 });

            tl.to(
                pic,
                {
                    y: () => {
                        const totalHeight = triggerElement.offsetHeight;
                        const picHeight = pic.offsetHeight;
                        return totalHeight - picHeight;
                    },
                    scale: isDesktop ? 0.9 : 1.3,
                    ease: 'none',
                    duration: items.length,
                },
                0,
            );

            tl.from(
                items,
                {
                    opacity: 0,
                    y: 50,
                    stagger: 1,
                    duration: 1,
                    ease: 'power2.out',
                },
                0,
            );

            tl.to({}, { duration: 0.3 });

            return () => {};
        },
    );
};

export default scrollPinHandler;
