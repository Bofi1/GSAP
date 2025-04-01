gsap.registerPlugin(ScrollTrigger)


// para hacer animaciones una despues de otra tenemos que darle delay  
// gsap.to(".box", {x: 100, duration: 2}) // el pedo esq si le cambiamos la duraciona cualquiera, le tenemos que cambiar el delay a cada uno
// gsap.to(".box", {y: 100, duration: 3, delay: 2})
// gsap.to(".box", {x: 0, duration: 3, delay: 5})

// la SOLUCION es hacer un timeline

    // asi es como las animaciones se van a realizar cuando se terminen
const tl = gsap.timeline({ 
    scrollTrigger: { // y aqui le asignamos quien va a ser el trigger
        trigger: ".box",
        markers: true,
        start: "top 80%",
        end: "top 30%",
        scrub: 1
    }
});

tl.to(".box", {x: 100, duration: 1})
    .to(".box", {y: 100, duration: 3})
    .to(".box", {x: 0, duration: 3})

