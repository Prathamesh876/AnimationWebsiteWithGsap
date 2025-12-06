

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

function page2(){
   var tl = gsap.timeline({
      scrollTrigger: {
         trigger: "#page2",
         // markers: true,
         start: "top 77%",
         end: "top 75%",
         // scrub: 1,
      }
   });

   tl.to(".verti-scrol p",{
          bottom:"0",
   })



      var tl2 = gsap.timeline({
      scrollTrigger: {
         trigger: "#page2",
         // markers: true,
         start: "top 55%",
         end: "top 50%",
         // scrub: 1,
      }
   });

   tl2.to(".mg-dv",{
          bottom:"0px",
   })



   var tl3 = gsap.timeline({
      scrollTrigger: {
         trigger: "#page2",
         // markers: true,
         start: "top 57%",
         end: "top 46%",
         // scrub: 1,
      }
   });

   tl3.from(".dv-vid-trn",{
          y:"-500px",
          scale:"5"
   })


   var tl4 = gsap.timeline({
      scrollTrigger: {
         trigger: "#page2",
         // markers: true,
         start: "top 25%",
         end: "top 18%",
         // scrub: 1,
      }
   });

   tl4.to(".dv-vid-trn2",{
          
          scale:"1"
   },"same")



    var tl5 = gsap.timeline({
      scrollTrigger: {
         trigger: "#page2",
         // markers: true,
         start: "top 27%",
         end: "top 20%",
         // scrub: 1,
      }
   });

   tl5.from(".mg-dv2",{
          
          y:"-200px"
   },"same")

}
page2();

function page3(){
   var tl1=gsap.timeline({
      scrollTrigger:{
         trigger:"#page3",
         // markers:true,
         start:"top 55%",
         end:"top 10%",
         scrub:true,
      }
   })
   tl1.to(".md-p3-sec .txt-p3-wrapper .p3-row1 .p1",{
      marginTop:"0px",
      opacity:"1"
   })
    tl1.to(".md-p3-sec .txt-p3-wrapper .p3-row1 .p2",{
      marginTop:"0px",
      opacity:"1"
   })
   tl1.to(".md-p3-sec .txt-p3-wrapper .p3-row1 .p3",{
      marginTop:"0px",
      opacity:"1"
   })
   tl1.to(".md-p3-sec .txt-p3-wrapper .p3-row1 .p4",{
      marginTop:"0px",
      opacity:"1"
   })
   tl1.to(".md-p3-sec .txt-p3-wrapper .p3-row1 .p5",{
      marginTop:"0px",
      opacity:"1"
   })
     tl1.to(".btm-p3-hed",{
      opacity:"1"
   })
//   tl1.to("#page3", {
//   backgroundColor: "#FAD59A",
//   duration: 1, // optional: control speed
//   ease: "power1.inOut" // optional: for smooth transition
// });
}
page3();


// function page4(){
//    let tl1 = gsap.timeline({
//   scrollTrigger: {
//     trigger: "#page4",
//     start: "top 50%",
//     end: "top 22%",
//     scrub: true,
//    //  markers: true,
//   }
// });

// tl1.to(".dv-Snickers", {
//   backgroundColor: "#FAD59A",
// },"same");
// tl1.to(".back-headding h1",{
//    color:"#38383897",
// },"same")
// tl1.to("#page3",{
//    backgroundColor:"#FAD59A",
// },"same")



//     gsap.from(".snikers", {
//        y: -700,
//       // opacity: 0.5,
//       scrollTrigger: {
//          trigger: ".dv-Snickers",
//          // markers:true,
//          start: "left center",
//          end: "right 70%",
//          scrub: true,
//          // markers: true,
//       }
//    });


//       var tl = gsap.timeline({
//       scrollTrigger: {
//          trigger: "#page4",
//          //  markers:true,
//          start: "top 0%",
//          end: "end -500%",
//          scrub: 2,
//          pin: true,
//       }
//    })

//    tl.to(".p4-mid-cont", {
//       transform: "translateX(-400%)",
//    })

//    gsap.from(".galaxy", {
//       y: 1200,
//       // opacity: 0.5,
//       scrollTrigger: {
//          trigger: ".dv-Galaxy",
//          // markers:true,
//          start: "left -10%",
//          end: "right 10%",
//          scrub: true,
//          // markers: true,
//       }
//    });

//    gsap.from(".lindt", {
//       x: 1000,
//       // opacity: 0.5,
//       scrollTrigger: {
//          trigger: ".dv-Lindt",
//          // markers: true,
//          start: "left -80%",
//          end: "right -80%",
//          scrub: true,
//          // markers: true,
//       }
//    });

//    gsap.from(".milkybar", {
//       y: -700,
//       x: -700,
//       // opacity: 0.5,
//       scrollTrigger: {
//          trigger: ".dv-Milkybar",
//          // markers: true,
//          start: "left -150%",
//          end: "right -180%",
//          scrub: true,
//          // markers: true,
//       }
//    });


//    gsap.from(".fabelle", {
//       y: 700,
//       x: 700,
//       // opacity: 0.5,
//       scrollTrigger: {
//          trigger: ".dv-Fabelle",
//          // markers: true,
//          start: "left -310%",
//          end: "right -310%",
//          scrub: true,
//          // markers: true,
//       }
//    });

// }
// page4();


function page5(){
    var tl1=gsap.timeline({
      scrollTrigger:{
      trigger:"#page5",
      // markers:true,
      start:"top 70%",
      end:"top 10%",
      scrub:true,
   //   once: true,
      }
    })
   
    tl1.to(".st-1",{
      transform:"translateY(-100%)"
    },"same")
    tl1.to(".st-2",{
      transform:"translateY(-100%)"
    },"same")
    tl1.to(".st-3",{
      transform:"translateY(-100%)"
    },"same")
    tl1.to(".st-4",{
      transform:"translateY(-100%)"
    },"same")
    tl1.to(".st-5",{
      transform:"translateY(-100%)"
    },"same")
    tl1.to(".st-6",{
      transform:"translateY(-100%)"
    },"same")
    tl1.to(".st-7",{
      transform:"translateY(-100%)"
    },"same")
     tl1.to(".st-8",{
      transform:"translateY(-100%)"
    },"same")
    tl1.to(".st-9",{
      transform:"translateY(-100%)"
    },"same")
    tl1.to(".st-10",{
      transform:"translateY(-100%)"
    },"same")
}
page5();