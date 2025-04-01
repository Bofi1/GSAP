gsap.registerPlugin(ScrollTrigger) // como añadir el plugin de ScrollTrigger

gsap.to(".square",{ // a quien se le aplicara la animacion
    x: 1000, // desplazamiento horizontal px default (si quieres usar otro valor serian dentro de "valor")
    duration: 1, // duracion
    // scrollTrigger: ".square2" // Trigger: cuando ese elemento entre en el viewport empezara la animacion que hiciste
    
    scrollTrigger: { // tambien lo puedes declara como un objeto
        // trigger: ".square", // valor del trigger
        
        // start: 400 // animacion empezara cuando el scroll haya recorrido 400px
        start: "top 80%", // animacion cuando el top del .square este en el centro del viewport
        // start: "top 30%" // puedes usar porcentajes tambien

        end: "top 30%", // asignamos donde acaba la animacion cuando pasa el scroll
        // end: () => `+=${document.querySelector(".square").offsetHeight}`, // asi lo podemos hacer tipo responsive para que se adapte al tamaño del .square

        markers: true, // muestra cuando la animacion empezara
        // markers: { // tambien puedes cambiar las propiedades de los markets
        //     startColor: "purple",
        //     endColor: "fuchsia",
        //     fontSize: "4rem",
        //     indent: 200
        // }

        // toggleClass: "red" // mioentras empiece la animacion con start podemos cambiale la clase al element (cuando end y scroller end toquen ya se cambiara a la que ya estaba por default)

        // toggleActions: "play play reverse reverse", // controlas las animaciones (recomendable tener markers: true; para distinguirlo)
        //  play pause resume reverse restart reset complete none
        //              onEnter     onLive      onEnterBack     onLeaveBack   


        // scrub - es para que siga al scrollbar
        toggleActions: "restart none none none",
        scrub: true,
        // scrub: 2 // es como darle como un tipo lag o retraso


        // PIN - para que permanezca pineado hasta q se acabe la animacion
        // pin: true,
        trigger: ".square2", // se cambio para que el trigger sea el .square2 en 
        pin: ".square", // por defecto se le pone un espaciado del recorrido que hara la animacion pero con esto se quita ese espaciado
        pinSpacing: false

    }
}) 
