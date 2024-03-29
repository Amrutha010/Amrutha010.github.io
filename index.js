/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}


showMenu('nav-toggle','nav-menu1')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu1')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1500,
    delay: 150,
     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home-img, .about__subtitle, .about__text, .skills__img',{delay: 150}); 
sr.reveal('.home__social-icon',{ interval: 150}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 150}); 

/*SCROLL HOME*/
sr.reveal( ".home-title", {} );
sr.reveal( ".button", {} );
sr.reveal( ".home-img", { delay: 150 } );
sr.reveal( ".home-social-icon", { interval: 150 } );

/*SCROLL ABOUT*/
sr.reveal( ".about-img", {} );
sr.reveal( ".about-subtitle", { delay: 150 } );
sr.reveal( ".about-text", { delay: 150 } );

// Scross main skills mainskills
sr.reveal( ".mainskills", { interval: 150 } );
sr.reveal( ".mskill-img", { delay: 150 } );
sr.reveal( ".mskill-text", { delay: 150 } );
/*SCROLL SKILLS*/
sr.reveal( ".skills-subtitle", {} );
sr.reveal( ".skills-text", {} );
sr.reveal( ".skills-data", { interval: 150 } );
// sr.reveal(".skills-img", { delay: 600 });

/*SCROLL projects*/
// sr.reveal( ".project-img", { interval: 20 } );
// sr.reveal( ".mskill-text", { delay: 20 } );

// SCROLL CONTACT


sr.reveal(".contact-input", { interval: 150 });

// document.querySelector("#resume-link-1").addEventListener("click",function(){
//     window.open("./Sarvesh-Gupta-Resume.pdf","_blank");
// });
// document.querySelector("#resume-button-2").addEventListener("click",function(){
//     window.open("./Sarvesh-Gupta-Resume.pdf","_blank");
// });

// let resumebtn2=document.getElementById("resume-button-2").addEventListener("click",()=>{
//     window.location.assign("https://drive.google.com/file/d/12sOwKJs6GiZ6e4WMpMRIxAsUWu1P5t5n/view?usp=sharing")
//   })

var typing=new Typed(".text", {
    strings: ["Full stack Web Developer","Java Backend Developer"],
    typeSpeed: 100,
    backSpeed: 40  ,
    loop: true,
});

document.querySelector("#resume-button-2").addEventListener("click",()=>{
   window.open("https://drive.google.com/file/d/1KSxkzOB2KwObJg6qQzC10CeSra-Tc8aa/view?usp=share_link","_blank") ;
})

document.querySelector("#resume-button-1").addEventListener("click",()=>{
   window.open("https://drive.google.com/file/d/1KSxkzOB2KwObJg6qQzC10CeSra-Tc8aa/view?usp=share_link","_blank") ;
})
