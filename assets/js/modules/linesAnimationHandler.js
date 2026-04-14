const linesAnimationHandler = () => {
    const lines = document.querySelector('.js-lines');

    if (!lines) return;

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            },
            {
                threshold: 0.4,
            },
        );
        observer.observe(lines);
    }
};

export default linesAnimationHandler;
