

// Initialize Lenis
const lenis = new Lenis({
   lerp: window.innerWidth <= 768 ? 0.04 : 0.1, // Smoother scroll on mobile
   smooth: true,
   autoResize: true,
});

function raf(time) {
   lenis.raf(time);
   requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
   console.log(e);
});



function loop1() {
   var tl = gsap.timeline({
      scrollTrigger: {
         trigger: "#page1",
         // markers:true,
         start: "50% 50%",
         end: "100% 30%",
         pin: true,
         scrub: 2,
      }
   })

   tl.to(".wrapper-coco-div", {
      rotate: "-20deg",
      scale: 0.8,
   }, "same")

   tl.to(".coco-div1", {
      marginTop: "5%",
   }, "same")

   tl.to(".coco-div2", {
      marginTop: "-45%",
   }, "same")

   tl.to(".coco-div3", {
      marginTop: "-37%",
   }, "same")


   tl.to(".coco-div4", {
      marginTop: "-59%",
   }, "same")

   tl.to(".coco-div5", {
      marginTop: "-25%",
   }, "same")
   tl.to(".coco-div6", {
      marginTop: "-50%",
   }, "same")

   tl.to(".overlay", {

      marginTop: "-48%",
      opacity: "1",
   }, "same")

   tl.to(".heading-dv h1", {
      delay: .2,
      opacity: 1,
      duration: .1,
   }, "same")

}
loop1();


function loop2() {
   var tl = gsap.timeline({
      scrollTrigger: {
         trigger: "#page2",
         //   markers:true,
         start: "top 110%",
         end: "top 80%",
         scrub: 2,
      }
   })


   tl.to(".curve-dv", {
      borderRadius: "0%",
   })




   var tl2 = gsap.timeline({
      scrollTrigger: {
         trigger: "#page2",
         // markers:true,
         start: "top 25%",
         end: "top -100%",
         scrub: 2,
         pin: true,
      }
   })

   tl2.to(".pos1", {
   }, "l1")

   tl2.to(".pos2", {
      top: "0%",
   }, "l2")

   tl2.to(".pos3", {
      top: "0%",
   }, "l3")

   tl2.to(".front-line", {
      width: "13vw",
   }, "l1")
   tl2.to(".front-line2", {
      width: "13vw",
   }, "l2")
   tl2.to(".front-line3", {
      width: "13vw",
   }, "l3")

}
loop2();


function loop3() {
   var tl = gsap.timeline({
      scrollTrigger: {
         trigger: "#page3",
         //   markers:true,
         start: "top 30%",
         end: "top 0%",
         scrub: 2,
         // pin:true,
      }
   })


   tl.to(".video-container video", {
      width:"100vw",
   })

}
loop3();



//page4
function loop5() {
   var tl = gsap.timeline({
      scrollTrigger: {
         trigger: "#page4",
         //  markers:true,
         start: "top 0%",
         end: "end -500%",
         scrub: 2,
         pin: true,
      }
   })

   tl.to(".p4-mid-cont", {
      transform: "translateX(-400%)",
   })



}
loop5();

//page4
function loop6() {


    gsap.from(".snikers", {
       y: -700,
      // opacity: 0.5,
      scrollTrigger: {
         trigger: ".dv-Snickers",
         // markers:true,
         start: "left center",
         end: "right 70%",
         scrub: true,
         // markers: true,
      }
   });


   gsap.from(".galaxy", {
      y: 1200,
      // opacity: 0.5,
      scrollTrigger: {
         trigger: ".dv-Galaxy",
         // markers:true,
         start: "left -10%",
         end: "right 10%",
         scrub: true,
         // markers: true,
      }
   });

   gsap.from(".lindt", {
      x: 1000,
      // opacity: 0.5,
      scrollTrigger: {
         trigger: ".dv-Lindt",
         // markers: true,
         start: "left -80%",
         end: "right -80%",
         scrub: true,
         // markers: true,
      }
   });

   gsap.from(".milkybar", {
      y: -700,
      x: -700,
      // opacity: 0.5,
      scrollTrigger: {
         trigger: ".dv-Milkybar",
         // markers: true,
         start: "left -150%",
         end: "right -180%",
         scrub: true,
         // markers: true,
      }
   });


   gsap.from(".fabelle", {
      y: 700,
      x: 700,
      // opacity: 0.5,
      scrollTrigger: {
         trigger: ".dv-Fabelle",
         // markers: true,
         start: "left -310%",
         end: "right -310%",
         scrub: true,
         // markers: true,
      }
   });

}
loop6();


//page5
function loop4() {

   var tl = gsap.timeline({
      scrollTrigger: {
         trigger: "#page5",
         // markers:true,
         start: "top 40%",
         end: "top 0%",
         scrub: true,
      }
   });

   tl.to(".back-txtp5", {
      width: "36vw",
   });

//    var mm = gsap.matchMedia();
//    mm.add("(min-width: 425px)", () => {
//   let tl = gsap.timeline();
//   tl.to(".back-txtp5", {
//     width: "50vw",
//     duration: 1,
//   });
// });

}
loop4();


// function loops() {

//     const page4 = document.querySelector("#page4");
//     const cursore = document.querySelector(".custm-curs");

//     if (!page4 || !cursore) return;

//     page4.addEventListener("mousemove", function(dets) {
//         console.log("Mousemove:", dets.clientX, dets.clientY); // Debug
//         gsap.to(cursore, {
//             x: dets.clientX,
//             y: dets.clientY,
//             duration: 0.2
//         });
//     });

//     page4.addEventListener("mouseenter", function() {
//         cursore.style.display = "block";
//     });

//     page4.addEventListener("mouseleave", function() {
//         cursore.style.display = "none";
//     });
// }
// loops();






//for page 4 animations
