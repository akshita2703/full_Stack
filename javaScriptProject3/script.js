// Throttling Function
const throttleFunction = (func, delay) => {


    let prev = 0;
    return (...args) => {

        let now = new Date().getTime();
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
};
document.querySelector("#center").addEventListener("mousemove", throttleFunction((dets) => {
    // your repeatation code
    var div = (document.createElement("div"));
    div.classList.add('imagediv');
    // showing on the screen
    div.style.left = dets.clientX + 'px';
    div.style.top = dets.clientY + 'px';


    var img = (document.createElement("img"));
    img.setAttribute("src", "https://cdn.fstoppers.com/styles/full/s3/photos/2019/02/857ebd7658e56c84a4dc65cc4453a305.jpg?itok=rpCL6_UU")
    div.appendChild(img);
    document.body.appendChild(div);

    gsap.to(img, {
        y: "0",
        ease: Power1,
        duration: .7

    });
    gsap.to(img, {
        y: "100%",
        delay: .10,
        ease: Power1,

    });

    setTimeout(function() {
        div.remove();
    }, 2000)
}, 500));