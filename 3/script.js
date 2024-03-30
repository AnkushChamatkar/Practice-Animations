let box = document.querySelector("#box");


// Throttling Function
const throttleFunction = (func, delay) => {

    // Previously called time of the function
    let prev = 0;
    return (...args) => {
        // Current called time of the function
        let now = new Date().getTime();

        // Logging the difference
        // between previously 
        // called and current called timings

        // If difference is greater
        // than delay call
        // the function again.
        if (now - prev > delay) {
            prev = now;

            // "..." is the spread
            // operator here 
            // returning the function with the 
            // array of arguments
            return func(...args);
        }
    }
}
box.addEventListener("mousemove",
    throttleFunction((details) => {
        let div = document.createElement("div");
        div.classList.add("imgDiv");
        div.style.left = details.clientX + "px";
        div.style.top = details.clientY + "px";

        let img = document.createElement("img");
        img.setAttribute("src","/Asset/20240125_145916.jpg");
        div.appendChild(img);

        document.body.appendChild(div);

        gsap.to(img,{
            y: "0",
            ease: Power4,
            duration: 0.6
        })

        gsap.to(img,{
            y: "100%",
            ease: Power2,
            delay: .3
        })

        setTimeout(() => {
           div.remove();
        }, 1500);

    }, 500));