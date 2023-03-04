//SPLIT WELCOME MESSAGE
const welcome = new SplitType('#welcome')

//SPLIT TITLE
const name = new SplitType('#name', { types: 'words' })
const full = new SplitType('#full', { types: 'words' })

//TIMELINE INTRO
gsap.timeline()
    //TRIANGLES
    .from('.triangle-left', {
        y: -400,
        duration: 2,
        opacity: 0,
        ease: "circ.out"
    }, 0.5)
    .from('.triangle-right', {
        y: 400,
        duration: 2,
        opacity: 0,
        ease: "circ.out"
    }, 0.5)
    .to('.triangle-left', {
        x: -300,
        rotate: 360,
        duration: 1,
        ease: "circ.out"
    }, 3)
    .to('.triangle-right', {
        x: 300,
        rotate: 360,
        duration: 1,
        ease: "circ.out"
    }, 3)

    //CHARACTERS
    .to('.char', {
        y: 0,
        stagger: 0.05,
        delay: 3.5,
        duration: 0.05,
        ease: "back.out(1.7)"
    }, .5)



// ON CLICK PASS TO HEADER CONTENT FROM INTRO
const welcomeBtn = document.querySelector('#welcome')
welcomeBtn.addEventListener('click', () => {
    gsap.timeline()
        //CHARACTERS OUT
        .to('.char', {
            y: -120,
            stagger: 0.05,
            duration: 0.05,
            ease: "back.out(1.7)"
        })

        //TRIANGLES OUT
        .to('.triangle-left', {
            y: -400,
            duration: 2,
            opacity: 0,
            rotate: 180,
            ease: "back.out(1.7)"
        }, .5)
        .to('.triangle-right', {
            y: 400,
            duration: 2,
            opacity: 0,
            rotate: 180,
            ease: "back.out(1.7)"
        }, .5)


        //COVER IN
        .to('.cover', {
            height: "100vh",
            ease: "circ.out",
            duration: 1.5,
            delay: .3
        })

        //HEADER CONTAINER IN
        .to('.header-container', {
            display: "flex"
        })

        //DESCOMENTAR -------------------------------------------------------------
        //ABOUT ME IN
        // .to('.about-me', {
        //     display: "block"
        // })

        //INTRO OUT
        .to('.intro', {
            display: "none"
        })

        //HEADER CONTENT IN
        .to('.header-content', {
            display: "flex"
        })

        //CONTENT ANIMATION
        //TRIANGLE
        .from('.triangle', {
            ease: 'power1',
            y: '250%',
            opacity: 0,
            duration: 1,
            rotation: 90
        })

        //PORTRAIT IN
        .from('.portrait', {
            ease: "power1",
            x: -30,
            opacity: 0,
            delay: .1
        })
        // NAME IN
        .from(name.words, {
            ease: "power1",
            y: '20%',
            opacity: 0,
            stagger: .2,
            duration: 1
        })
        //FULL IN
        .from(full.words, {
            ease: "power1",
            y: '20%',
            opacity: 0,
            stagger: .2,
            duration: 1,
            delay: .1
        })
})