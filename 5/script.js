let path = `M 10 100 Q 750 100 1400 100`

let finalpath = `M 10 100 Q 750 100 1400 100`

let div = document.querySelector("div")

div.addEventListener("mousemove", (dets) => {
    path = `M 10 100 Q ${dets.x} ${dets.y} 1400 100`

    gsap.to("svg path", {
        attr: { d: path },
        duration: 0.5,
        ease: "power3.out",
    })
})

div.addEventListener("mouseleave", (dets) => {

    gsap.to("svg path", {
        attr: { d: finalpath },
        duration: 1,
        ease: "elastic.out(2,0.2)"
    })
})