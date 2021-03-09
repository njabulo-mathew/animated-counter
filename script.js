const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-list');

menuBtn.addEventListener('click', function() {
    navLinks.classList.toggle('show');
})
