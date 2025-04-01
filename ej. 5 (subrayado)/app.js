gsap.registerPlugin(ScrollTrigger)

gsap.utils.toArray("span").forEach((span) => {
    ScrollTrigger.create({
        trigger: span,
        start: "top 40%",
        toggleClass: "active", // si lo cambias en lugar de onEnter cuando se devuelva se quitara lo subrayado
        // onEnter: () => span.classList.add("active"), // se quede pegada la class
        markers: true
    })
})