const d = document;

const navbar = d.querySelector('.nav-link');
const menuHamburguer = d.querySelector('.menu-hamburguer');
const menuClose = d.querySelector('.menu-close');

d.addEventListener('click', (e) => {
    if (e.target.closest('.menu-hamburguer')) {
        navbar.style.display = 'flex';
        navbar.classList.toggle('mobile');
        menuHamburguer.style.display = 'none';
        menuClose.style.display = 'block';
    }

    if (e.target.closest('.menu-close')) {
        navbar.style.display = 'none';
        navbar.classList.toggle('mobile');
        menuClose.style.display = 'none';
        menuHamburguer.style.display = 'block';
    }
});

function toggleButtonHamburguer() {

    if (menuHamburguer.style.display === 'block') {
        menuClose.style.display = 'block';
        menuHamburguer.style.display = 'none';
    }
    else if (menuClose.style.display === 'block') {
        menuClose.style.display = 'none';
        menuHamburguer.style.display = 'block';
    }

}

