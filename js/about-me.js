gsap.registerPlugin(ScrollTrigger)

//TIMELINE OPENING ABOUT ME DESKTOP
let mediaDesk = gsap.matchMedia()

mediaDesk.add('(min-width: 680px', () => {

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.about-me-text',
            star: 'top center',
            end: 'center 60%',
            scrub: 4,
            toggleActions: 'restart none none reset'
        }
    })
        .from('.about-me-title', {
            y: -100,
            opacity: 0,
            ease: 'power3'
        })
        .from('.about-me-triangle', {
            x: 200,
            opacity: 0,
            rotate: 300,
            ease: 'power3'
        })
        .from('.about-me-who', {
            y: -100,
            opacity: 0,
            ease: 'power3'
        })
        .from('.about-me-text', {
            x: 100,
            opacity: 0,
            ease: 'power3'
        })
})


//WHO AM I BACKGROUND ANIMATION
gsap.to('.about-me-who h1', {
    x: -275,
    stagger: .15,
    duration: 2,
    ease: "back.out(1.7)",
    repeat: -1,
    repeatDelay: 5
})


//TIMELINE OPENING ABOUT ME MOBILE

let mediaMob = gsap.matchMedia()

mediaMob.add('(max-width: 680px', () => {
    const aboutBtn = document.querySelector('.about-me-title')

    aboutBtn.addEventListener('click', () => {
        const timelineOpen = gsap.timeline()
            .to('#about-me', {
                height: '100vh',
                ease: 'power2'
            })
    })
})