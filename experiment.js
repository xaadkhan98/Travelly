const slide = document.querySelector(".hike");

// window.addEventListener("scroll", (e) => {
//   const hikePos = hikeExp.getBoundingClientRect().top;
//   console.log(hikePos);
//   const windowPos = window.innerHeight / 2;
//   console.log(windowPos);
//   if (hikePos < windowPos) {
//     hikeExp.style.color = "red";
//   } else {
//     hikeExp.style.color = "white";
//   }
// });

// let options = {
//   threshold: 1,
// };

// --------------------------- Observer Method----------------------//

// let observer = new IntersectionObserver(slideAnim, options);
// observer.observe(slide);

// function slideAnim(entries) {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       slide.style.background = "white";
//     }
//   });
// }

// --------------------------- Scroll Magic ----------------------//

const controller = new ScrollMagic.Controller();
const exploreScene = new ScrollMagic.Scene({
  triggerElement: ".hike-exp",
  triggerHook: 0.5,
})
  .addIndicators({
    colorStart: "white",
    colorTrigger: "white",
  })
  .addTo(controller)
  .setClassToggle(".hike-exp", "active");
