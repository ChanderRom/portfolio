gsap.registerPlugin(ScrollTrigger)

//TIMELINE OPENING ABOUT ME DESKTOP
let mediaDeskProject = gsap.matchMedia()

mediaDeskProject.add('(min-width: 680px', () => {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.project-container',
            star: 'top center',
            end: 'center 60%',
            scrub: 4,
            toggleActions: 'restart none none reset'
        }
    })
        .from('.project-title', {
            y: -100,
            opacity: 0,
            ease: 'power3'
        })
        .from('.project-triangle', {
            x: 200,
            opacity: 0,
            rotate: 300,
            ease: 'power3'
        })
        .from('.project-container', {
            y: 100,
            opacity: 0,
            duration: 2,
            stagger: .8,
            ease: 'power3'
        })
})


// PROJECT ACCORDION
let projects = gsap.utils.toArray(".project-container");

projects.forEach(project => {
    let tl = gsap.timeline({ paused: true })

    tl.to(project, {
        duration: .8,
        height: 'auto',
        background: 'black',
        color: 'white',
        ease: 'power3'
    })

    tl.reverse()

    project.addEventListener("click", () => {
        tl.reversed(!tl.reversed())
    })
})