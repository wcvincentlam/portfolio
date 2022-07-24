let navToggle = document.querySelector('.nav__list--m');
let navLinks = document.querySelectorAll('.nav__link');
let sectionToggle = document.querySelector('.content');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

/* removes navigation bar when link is clicked for mobile */
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
});

/* removes navigation bar when section contents are clicked - for mobile */
sectionToggle.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
});


