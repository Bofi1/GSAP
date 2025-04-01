gsap.registerPlugin(ScrollTrigger)

 
ScrollTrigger.create({
    trigger: ".box",
    start: "top 80%",
    end: "bottom 20%",
    markers: true,

    // se puede usar funciones cuando pasen los 
        // onEnter     onLive      onEnterBack     onLeaveBack  
    
    onUpdate: (self) => {console.log(self)} // cuando se hace eso se va mostrando el progreso del scroll referente al trigger
    
    // onEnter: () => {console.log("Enter");},
    // onLeave: () => {console.log("Leave");},
    // onEnterBack: () => {console.log("enterBack");},
    // onLeaveBack: () => {console.log("leaveBack");} 
})

