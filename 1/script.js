let rect = document.querySelector("#center");

rect.addEventListener("mousemove", function(details){
    let rectangleLocation = rect.getBoundingClientRect();   
    let insiderectVal = details.clientX - rectangleLocation.left;

    if(insiderectVal<rectangleLocation.width/2){
        let redcolor = gsap.utils.mapRange(0, rectangleLocation.width/2,255,0, insiderectVal );
        gsap.to( rect, {
        backgroundColor: `rgb(${redcolor}, 0, 0)`,
        ease: Power4,
       });
    }
    else{
        let bluecolor = gsap.utils.mapRange(rectangleLocation.width/2, rectangleLocation.width,0,255, insiderectVal );
        gsap.to( rect, {
        backgroundColor: `rgb(0, 0, ${bluecolor})`,
        ease: Power4,
       });
    }
   
});

rect.addEventListener("mouseleave", function(){
    gsap.to( rect, {
        backgroundColor: "white",
       
    });
})