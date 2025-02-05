// var id = document.querySelector("#video-container")
// var cursor = document.querySelector("#play")

// id.addEventListener("mousemove",function(dets){
//     cursor.style.left = dets.clientX + "px"
//     cursor.style.top = dets.clientY + "px"
// })
//  
gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


gsap.to("#nav-1 svg", {
    y: "-100%", // Use y instead of transform
    scrollTrigger: {
        trigger: "#page",
        scroller: "#main",
        markers: true,
        start: "top 0",
        end: "top -5%",
        scrub: true
    }
});

gsap.to("#nav-2 .links", {
    y: "-100%", // Use y instead of transform
    opacity: 0,
    scrollTrigger: {
        trigger: "#page",
        scroller: "#main",
        markers: true,
        start: "top 0",
        end: "top -5%",
        scrub: true
    }
});









function videoconAnimation(){
    var videocontainer = document.querySelector("#video-container")
var playbtn = document.querySelector("#play")

videocontainer.addEventListener("mouseenter",function(){
    gsap.to(playbtn, {
        opacity:1,
        scale:1
    })
})
videocontainer.addEventListener("mouseleave",function(){
    gsap.to(play, {
        opacity: 0,
        scale: 0
    })
})
videocontainer.addEventListener("mousemove",function(dets){
    gsap.to(play, {
        left:dets.x-30 ,
        top:dets.y-40
    })
})

}

videoconAnimation()

gsap.from("#page h1",{
    y:100,
    opacity:0,
    duration:0.9,
    delay:0.5,
    stagger:0.3
})

gsap.from("#video-container",{
    scale:0.5,
    opacity:0,
    duration:0.6,
    delay:1,
})


document.addEventListener("mousemove",function(dets){
    gsap.to(".cursor", {
        left:dets.x-20,
        top:dets.y-20
    })
})

// document.querySelector("#child1").addEventListener("mouseenter",function(){

//     gsap.to("#cursor", {
//         transform: 'translate(-50%,-50%) scale(1)' 
//     })

    
// })

// document.querySelector("#child1").addEventListener("mouseleave",function(){
//     gsap.to("#cursor", {
//         transform: 'translate(-50%,-50%) scale(0)' 
//     })
// })

document.querySelectorAll(".child").forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        gsap.to("#cursor", {
         transform: 'translate(-50%,-50%) scale(1)' 
              })
    })
elem.addEventListener("mouseleave",function(){
    gsap.to("#cursor", {
        transform: 'translate(-50%,-50%) scale(0)' 
             })
})

})

