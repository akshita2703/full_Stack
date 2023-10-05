 var rect = document.querySelector("#center");
 rect.addEventListener("mousemove", function(details) {

     var rectLocation = rect.getBoundingClientRect();
     var insideRectval = details.clientX - rectLocation.left;
     if (insideRectval < rectLocation.width / 2) {
         var redcolor = gsap.utils.mapRange(
             0, rectLocation.width / 2, 255, 0, insideRectval
         );
         gsap.to(rect, {
             backgroundColor: `rgb(${redcolor}, 0, 0)`,
             ease: Power4,
         });
     } else {
         var bluecolor = gsap.utils.mapRange(
             rectLocation.width / 2, rectLocation.width, 0, 255, insideRectval
         );
         gsap.to(rect, {
             backgroundColor: `rgb(0, 0, ${bluecolor})`,
             ease: Power4,
         });
     }

     // mapRange(inMin,inMax,OutMin,outMax,valueToMAp)


 });
 // mapRange(inMin,inMax,OutMin,outMax,valueToMAp)

 //  gsap.utils.mapRange(0, 200, 255, 0, 23);

 rect.addEventListener("mouseleave", function() {
     gsap.to(rect, {
         backgroundColor: "white",
     });
 });