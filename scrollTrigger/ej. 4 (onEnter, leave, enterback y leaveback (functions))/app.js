gsap.registerPlugin(ScrollTrigger)

// se puede usar funciones cuando pasen los 
// onEnter     onLive      onEnterBack     onLeaveBack   
ScrollTrigger.create({
    trigger: ".box",
    start: "top 80%",
    end: "bottom 20%",
    markers: true,
    onEnter: () => {console.log("Enter");},
    onLeave: () => {console.log("Leave");},
    onEnterBack: () => {console.log("enterBack");},
    onLeaveBack: () => {console.log("leaveBack");} 
})

