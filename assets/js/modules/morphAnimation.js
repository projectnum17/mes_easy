const morphAnimation = () => {
    gsap.registerPlugin(MorphSVGPlugin);

    const presets = [
        [
            'M470,340C445,390 385,440 325,455C265,470 205,510 155,475C105,440 85,355 65,300C45,245 25,190 45,135C65,80 135,50 185,30C245,10 305,35 365,65C425,95 485,150 505,210C525,270 495,290 470,340Z',
            'M465,335C435,400 375,435 315,445C255,455 195,515 145,490C95,465 75,385 55,330C35,275 10,225 30,165C50,105 115,65 185,45C255,25 325,35 385,55C445,75 505,130 520,190C535,250 500,270 465,335Z',
        ],
        [
            'M475,345C440,410 375,455 315,465C255,475 185,525 135,490C85,455 65,365 75,305C85,245 40,200 60,140C80,80 145,65 205,45C265,25 335,35 395,65C455,95 505,150 515,220C525,280 500,300 475,345Z',
            'M480,330C450,380 390,430 330,440C270,450 210,500 160,460C110,420 90,340 70,280C50,220 30,170 50,110C70,50 140,30 190,10C250,-10 310,20 370,50C430,80 490,130 510,190C530,250 510,270 480,330Z',
        ],
    ];

    const blocks = document.querySelectorAll('.morph');
    if (!blocks.length) return;

    blocks.forEach((svg, i) => {
        const path = svg.querySelector('.morph__path');
        const bg = svg.querySelector('.blob-bg');
        const mask = svg.querySelector('mask');
        const image = svg.querySelector('.blob-image');

        if (!path || !bg || !mask || !image) return;

        const currentShapes =
            presets[Math.floor(Math.random() * presets.length)];

        const shuffled = gsap.utils.shuffle([...currentShapes]);

        // Уникальный ID для маски
        const maskId = `blobMask-${i}`;
        mask.setAttribute('id', maskId);
        image.setAttribute('mask', `url(#${maskId})`);

        gsap.set([path, bg], { morphSVG: shuffled[0] });

        const tl = gsap.timeline({
            repeat: -1,
            delay: Math.random() * 1,
            defaults: {
                duration: 3,
                ease: 'sine.inOut',
            },
        });

        for (let j = 1; j < shuffled.length; j++) {
            tl.to([path, bg], {
                morphSVG: { shape: shuffled[j], type: 'rotational' },
            });
        }

        tl.to([path, bg], {
            morphSVG: { shape: shuffled[0], type: 'rotational' },
        });
    });
};

export default morphAnimation;
