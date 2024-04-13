document.addEventListener("DOMContentLoaded", function () {

    'use strict';

    function setupRacesScroll() {
        const races = document.querySelector(".races");
        if (!races) return; // Ensure .races element exists

        function getScrollAmount() {
            let racesWidth = races.scrollWidth;
            return -(racesWidth - window.innerWidth);
        }

        const tween = gsap.to(races, {
            x: getScrollAmount,
            duration: 3,
            ease: "none",
        });

        ScrollTrigger.create({
            trigger: ".racesWrapper",
            start: "top 10%",
            end: () => `+=${getScrollAmount() * -1}`,
            pin: true,
            animation: tween,
            scrub: 1,
            invalidateOnRefresh: true,
            //            markers: true
        });
    }

    // Call the function to setup races scroll
    setupRacesScroll();

    //    
    //    function text(){
    //         gsap.to('.anim-top', {
    //            scrollTrigger: {
    //                trigger: '.anim-wrapper',
    //                start: "top 50%",
    //                scrub: 1.9,
    //                 markers: true,
    //            },
    //            yPercent: -250
    //        })
    //    }
    //    
    //    
    //    text();
    //    
    //        function text2(){
    //         gsap.to('.anim-bot', {
    //            scrollTrigger: {
    //                trigger: '.anim-wrapper',
    //                start: "top 50%",
    //                scrub: 1.9,
    //                 markers: true,
    //            },
    //            yPercent: 250
    //        })
    //    }
    //    
    //    
    //    text2();
    //    
    //    
    
    
    

function imageresize() {
    const tl = gsap.timeline();

    tl.set(".animg", {
        scale: 1
    });
    
    

// Start with the image at full size and top-aligned
gsap.set(".animg", {
    scale: 1, // Full size
    y: 0, // Top-aligned
    transformOrigin: "center top", // Set transform origin to center top
});

// Animation to shrink the image and move it to the center
gsap.to(".animg", {
    scale: 0.1, // Shrink the image
    duration: 5, // Duration of the animation
    transformOrigin: "center center", // Set transform origin to center
    scrollTrigger: {
        trigger: ".anim",
        start: "top 15%",
        end: "bottom 130%",
        scrub: 0.5, // Adjusted scrub value to make it slower
        markers: true,
    }
});

    
    
    

    gsap.to('.anim-top', {
        duration: 5,
        scrollTrigger: {
            trigger: '#text',
            start: "top 15%",
            end: "bottom 50%",
            scrub: 0.2, // Adjusted scrub value to make it slower
        },
        yPercent: 450,
    });


    gsap.to('.anim-bot', {
        scrollTrigger: {
            trigger: '#text',
            start: "top 15%",
            end: "bottom 70%",
            scrub: 0.1, // Adjusted scrub value to make it slower
        },
        yPercent: -250,
    });

    gsap.to('.anim-left', {
        scrollTrigger: {
            trigger: '.anim-top',
            start: "top 15%",
            end: "bottom 70%",
            scrub: 0.1, // Adjusted scrub value to make it slower
        },
        xPercent: 10,
    });

    gsap.to('.anim-right', {
        scrollTrigger: {
            trigger: '.anim-top',
            start: "top 15%",
            end: "bottom 70%",
            scrub: 0.1, // Adjusted scrub value to make it slower
        },
        xPercent: -10,
    });

}

imageresize();




    const gTl = gsap.timeline();
    gTl.from(".title .char", 1, {
        opacity: 0,
        yPercent: 130,
        stagger: 0.06,
        ease: "back.out"
    });
    gTl.to(".header__img", 2, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        scale: 1,
        ease: "expo.out"
    }, "-=1");
    gTl.from(".header__marq", 2, {
        opacity: 0,
        yPercent: 100,
        ease: "expo.out"
    }, "-=1.5");

    const gsapSq = gsap.utils.toArray('.section-title__square, .section-title__square2');
    gsapSq.forEach((gSq, i) => {
        const rotat = gsap.from(gSq, 3, {
            rotation: 720
        });
        ScrollTrigger.create({
            trigger: gSq,
            animation: rotat,
            start: 'top bottom',
            scrub: 1.9
        });
    });


    //header

    function sec() {

        gsap.to('.title', {
            scrollTrigger: {
                trigger: '#firstsec',
                start: 'top top',
                scrub: 1.9
            },
            yPercent: -150
        })


        gsap.to('#firstsec .navsuc', {
            scrollTrigger: {
                trigger: '#firstsec',
                start: 'top top',
                scrub: 1.9
            },
            yPercent: 50
        })

        gsap.to('.marq_wrap', {
            scrollTrigger: {
                trigger: '#firstsec',
                start: 'top top',
                scrub: 1.9
            },
            xPercent: -50
        })
        gsap.to('.marq_wrap img', {
            scrollTrigger: {
                trigger: '#firstsec',
                start: 'top top',
                scrub: 1.9
            },
            rotate: -720
        })


    }


    sec();









    function discover() {
        gsap.from('.discover__head', {
            x: (i, el) => (1 - parseFloat(el.getAttribute('data-speed'))),
            scrollTrigger: {
                trigger: '#thirdsec',
                start: 'top bottom',
                scrub: 1.9
            }
        })
    }
    discover();









    //benefits
    function benefits() {
        gsap.from('.benefits__num', {
            x: (i, el) => (1 - parseFloat(el.getAttribute('data-speed'))),
            scrollTrigger: {
                trigger: '.benefits__list',
                start: 'top bottom',
                scrub: 1.9
            }
        })
    }
    benefits();




    function header() {

        gsap.to('.header .stroke', {
            scrollTrigger: {
                trigger: '.header',
                start: 'top top',
                scrub: 1.9
            },
            xPercent: 50
        })
        gsap.to('.header__img', {
            scrollTrigger: {
                trigger: '.header',
                start: 'top top',
                scrub: 1.9
            },
            xPercent: -70
        })
        gsap.to('.header__img img', {
            scrollTrigger: {
                trigger: '.header',
                start: 'top top',
                scrub: 1.9
            },
            scale: 1.3
        })
        gsap.to('.header__marq-wrapp', {
            scrollTrigger: {
                trigger: '.header',
                start: 'top top',
                scrub: 1.9
            },
            xPercent: -50
        })
        gsap.to('.header__marq-star img', {
            scrollTrigger: {
                trigger: '.header',
                start: 'top top',
                scrub: 1.9
            },
            rotate: -720
        })
    }
    header();


    //about
    function about() {
        gsap.from('.about__img', {
            scrollTrigger: {
                trigger: '#secondsec',
                start: 'top bottom',
                scrub: 1.9
            },
            yPercent: 80
        })
        gsap.from('.about__img img', {
            scrollTrigger: {
                trigger: '#secondsec',
                start: 'top bottom',
                scrub: 1.9
            },
            scale: 1.6
        })
        gsap.to('.about__txt', {
            scrollTrigger: {
                trigger: '.about__wrapp',
                start: 'top bottom',
                scrub: 1.9
            },
            yPercent: 40
        })
    }
    about();


    function contact() {
        gsap.from('.contact__head', {
            x: (i, el) => (1 - parseFloat(el.getAttribute('data-speed'))),
            scrollTrigger: {
                trigger: '#contactsec1',
                start: 'top bottom',
                scrub: 1.9
            }
        })
    }
    contact();

    function location() {
        gsap.from('.location__head', {
            x: (i, el) => (1 - parseFloat(el.getAttribute('data-speed'))),
            scrollTrigger: {
                trigger: '.social-links',
                start: 'top bottom',
                scrub: 1.9
            }
        })
    }
    location();

    function mail() {
        gsap.to('.mail', {
            scrollTrigger: {
                trigger: '#contactsec2',
                start: 'top top',
                scrub: 1.9
            },
            yPercent: -50
        })
    }
    mail();









});
