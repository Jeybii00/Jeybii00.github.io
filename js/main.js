
/* MENU FUNCTION */
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'left',
    distance: '60px',
    duration: 2500,
    delay: 200,
//     reset: true
});

sr.reveal('.contact-info-upper-container',{});
sr.reveal('.project-img, .details-container',{delay: 400}); 
sr.reveal('.section__text, .text-container, .arrow',{delay: 400}); 