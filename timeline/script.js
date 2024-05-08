
let menu = document.querySelector(".nav i")
let close = document.querySelector(".full i")

let tl = gsap.timeline()

tl.to(".full", {
    right: 0,
    duration: 0.6
})

tl.from(".full h4", {
    x: 150,
    duration: 0.5,
    stagger: 0.28,
    opacity: 0
})

tl.from(".full i", {
    opacity: 0
})

tl.pause()

menu.addEventListener("click", () => {
    tl.play()
})

close.addEventListener("click", () => {
    tl.reverse()
})


function brekTheText() {

    let h2 = document.querySelector("h2")
    let h2Text = h2.textContent

    let splittedText = h2Text.split("")
    let clutter = ""
    let halfValue = Math.floor(splittedText.length / 2)
    console.log(halfValue);
    splittedText.forEach(function (elm, idx) {
        if (idx < halfValue) {
            clutter += `<span class = "a">${elm}</span>`

        } else {
            clutter += `<span class="b">${elm}</span>`
        }
    })

    h2.innerHTML = clutter
}

brekTheText()

gsap.from("h2 .a", {
    y: 50,
    duration: 0.8,
    delay: 0.5,
    stagger: 0.15,
    opacity: 0
})

gsap.from("h2 .b", {
    y: 50,
    duration: 0.8,
    delay: 0.5,
    stagger: -0.15,
    opacity: 0
})