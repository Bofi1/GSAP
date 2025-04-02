gsap.registerPlugin(ScrollTrigger)

gsap.to(".cuadro1", {
    x: 200,
    opacity: 1,
    duration: 0.5,
    scrollTrigger:{
        trigger: ".cuadro1",
        start: "top 50%",
        end: "top 20%",
        markers: true,
        toggleActions: `play none none reverse`
    }
})