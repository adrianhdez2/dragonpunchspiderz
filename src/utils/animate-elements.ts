import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(SplitText, ScrollTrigger);
// Inicializar variables
let splits: any[] = [];
let animations: any[] = [];



document.addEventListener("DOMContentLoaded", () => {


    // Revertir animaciones anteriores si existen
    animations.forEach(anim => anim.revert());
    splits.forEach(split => split.revert());

    // Limpiar arrays
    animations = [];
    splits = [];

    const titles = document.querySelectorAll('#text');

    titles.forEach((title, index) => {
        // Crear SplitText para cada título
        const split = new SplitText(title, {
            type: "words,chars",
            wordsClass: "word",
            charsClass: "char"
        });

        splits.push(split);

        // Ocultar palabras inicialmente
        gsap.set(split.words, {
            opacity: 0,
            y: -50,
            rotation: "random(-30, 30)"
        });

        // Crear animación para este título
        const anim = gsap.to(split.words, {
            opacity: 1,
            y: 0,
            rotation: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
            stagger: 0.05,
            scrollTrigger: {
                trigger: title,
                start: "top 85%",
                end: "bottom 60%",
                toggleActions: "play none none reverse",
                id: `title-${index + 1}`
            }
        });

        animations.push(anim);
    })

});