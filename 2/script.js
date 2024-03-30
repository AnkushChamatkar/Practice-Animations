let box = document.querySelector("#box")

window.addEventListener("mousemove", function(details){

    let xVal = gsap.utils.mapRange(0,window.innerWidth, 200+box.getBoundingClientRect().width/2, window.innerWidth-(200+box.getBoundingClientRect().width/2), details.clientX);
    gsap.to ("#box", {
        left: xVal + "px",
        ease: Power3
    } )
})