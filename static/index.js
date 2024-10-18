// const hamburger = document.getElementById('hamburger');
// const navLinks = document.getElementById('nav-links');

// hamburger.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
// });

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links-mobile');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    
});


// window.addEventListener('scroll', () => {
//     const navbar = document.getElementById('navbar');
//     if (window.scrollY > 50) {
//         navbar.classList.add('sticky');
//     } else {
//         navbar.classList.remove('sticky');
//     }
// });



