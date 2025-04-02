gsap.registerPlugin(ScrollTrigger)

gsap.to(".img", {
    scrollTrigger: {
        trigger: ".img",
        // markers: true,
        start: "-24% 10%",
        end: "235% 50%",
        pin: true
    }
})

gsap.to(".text2", {
    scrollTrigger: {
        trigger: ".text2",
        // markers: true,
        start: "-5% 20%",
        end: "235% 50%%",
        pin: true
    }
})
