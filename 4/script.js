let tl = gsap.timeline()

function time() {
    let a = 0
    setInterval(() => {
        a = a + Math.floor(Math.random() * 20)
        if (a < 100) {
            document.querySelector("#loader h1").innerHTML = a + "%"
        } else {
            a = 100
            document.querySelector("#loader h1").innerHTML = a + "%"
        }

    }, 100);
}

tl.to("#loader h1", {
    scale: 1.5,
    duration: 1,
    delay: 0.5,
    onStart: time()
})
tl.to("#loader", {
    top: "-100vh",
    duration: 1,
    delay: 0.5
})


tl.from("nav img, nav h3, nav h4, nav button", {
    y: -100,
    duration: 1,
    delay: .5,
    opacity: 0,
    stagger: 0.2
})

tl.from("#main h1", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2
})

tl.from(".images img", {
    scale: 0,
    opacity: 0,
})
tl.from("h5", {
    scale: 0,
    opacity: 0
})

tl.to("h5", {
    y: 30,
    duration: 1,
    repeat: -1,
    yoyo: true
})

// gsap.from(".page1 .box",{
//     scale :0,
//     rotate :360,
//     duration :1,
//     scrollTrigger:{
//         trigger : ".page1 .box",
//         scroller : "body"
//     }
// })
gsap.from(".page2 .box", {
    scale: 0,
    rotate: 360,
    duration: 1,
    scrollTrigger: {
        trigger: ".page2 .box",
        scroller: "body",
        // markers : true,
        start: "top 90%",
        end: "top 50%",
        // for smooth transection
        scrub: 2
    }
})

gsap.to("#page3 h1", {
    transform: "translateX(-100%)",
    fontWeight: "100",
    scrollTrigger: {
        // if we want to use pin then we have to trigger parent element
        trigger: "#page3",
        scroller: "body",
        start: "top 0%",
        end: "top -200%",
        scrub: 3,
        pin: true
    }
})

let path = `M 10 100 Q 750 100 1400 100`

let finalpath = `M 10 100 Q 750 100 1400 100`

let string = document.querySelector("#string")

string.addEventListener("mousemove", (dets) => {
    path = `M 10 100 Q ${dets.x} ${dets.y} 1400 100`

    gsap.to("svg path", {
        attr: { d: path },
        duration: 0.5,
        ease: "power3.out",
    })
})

string.addEventListener("mouseleave", () => {

    gsap.to("svg path", {
        attr: { d: finalpath },
        duration: 1,
        ease: "elastic.out(2,0.2)"
    })
})


let page4 = document.querySelector("#page4")
let curser = document.querySelector("#curser")
let imagediv = document.querySelector(".image")

page4.addEventListener("mousemove",(dets)=>{
    gsap.to (curser,{
        x : dets.x,  
        y :dets.y ,
        duration:1
     })
})

imagediv.addEventListener("mouseenter",()=>{
    curser.innerHTML = "View more"
    gsap.to (curser,{
        scale : 2,
        backgroundColor: "#ffffff8a",
        
     })  

})
imagediv.addEventListener("mouseleave",()=>{
    curser.innerHTML = ""
    gsap.to (curser,{
        scale : 1,
        backgroundColor: "white",
     })  

})