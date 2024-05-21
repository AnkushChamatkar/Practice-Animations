// Ensure ScrollTrigger is registered
gsap.registerPlugin(ScrollTrigger);


let tl = gsap.timeline()

function page1Animation() {

    tl.from("nav h1, nav h4, nav button", {
        y: -40,
        delay: 0.7,
        opacity: 0,
        stagger: 0.15
    })

    tl.from(".center-part1 h1", {
        x: -300,
        duration: 0.5,
        opacity: 0
    }, "-=0.5")
    tl.from(".center-part1 p", {
        x: -100,
        duration: 0.4,
        opacity: 0
    })
    tl.from(".center-part1 button", {
        duration: 0.4,
        opacity: 0
    })
    tl.from(".center-part2 img", {
        duration: 0.5,
        opacity: 0,
        x: 200
        // delay in timeline this will run in timeline but plays 0.3 sec before the timeline
    }, "-=0.7")


}


function page2Animation() {
    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section2",
            scroller: "body",
            // markers: true,
            start: "top 50%",
            scrub: 2,
            end: "top 0%"
        }
    })

    tl2.from(".services", {
        y: 30,
        opacity: 0,
        duration: 0.5
    })

    tl2.from(".elem.line1.left", {
        x: -300,
        duration: 1,
        opacity: 0
    }, "anim1")
    tl2.from(".elem.line1.right", {
        x: 300,
        duration: 1,
        opacity: 0
    }, "anim1")
    tl2.from(".elem.line2.left", {
        x: -300,
        duration: 1,
        opacity: 0
    }, "anim2")
    tl2.from(".elem.line2.right", {
        x: 300,
        duration: 1,
        opacity: 0
    }, "anim2")

}

page1Animation()

page2Animation()

