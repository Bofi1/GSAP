gsap.registerPlugin(ScrollTrigger) // como añadir el plugin de ScrollTrigger

gsap.to(".square",{
    x: 700, // desplazamiento horizontal px default (si quieres usar otro valor serian dentro de "valor")
    duration: 3, // duracion
    // scrollTrigger: ".square2" // Trigger: cuando ese elemento entre en el viewport empezara la animacion que hiciste
    
    scrollTrigger: { // tambien lo puedes declara como un objeto
        trigger: ".square", // valor del trigger
        
        // start: 400 // animacion empezara cuando el scroll haya recorrido 400px
        start: "top center", // animacion cuando el top del .square este en el centro del viewport
        // start: "top 30%" // puedes usar porcentajes tambien

        // end: "center 20%", // asignamos donde acaba la animacion cuando pasa el scroll
        end: () => `+=${document.querySelector(".square").offsetHeight}`, // asi lo podemos hacer tipo responsive para que se adapte al tamaño del .square

        markers: true, // muestra cuando la animacion empezara
        // markers: { // tambien puedes cambiar las propiedades de los markets
        //     startColor: "purple",
        //     endColor: "fuchsia",
        //     fontSize: "4rem",
        //     indent: 200
        // }

        toggleClass: "red" // mioentras empiece la animacion con start podemos cambiale la clase al element (cuando end y scroller end toquen ya se cambiara a la que ya estaba por default)
    }
}) 
