window.addEventListener("mousemove", function(details) {

    var xval = gsap.utils.mapRange(0, window.innerWidth, 100, window.innerWidth - 100, details.clientX);
    var yval = gsap.utils.mapRange(0, window.innerHeight, 50, window.innerHeight - 50, details.clientY);
    gsap.to('#rect', {
        left: xval + "px",
        top: yval + "px",
        ease: Power3
    });
});