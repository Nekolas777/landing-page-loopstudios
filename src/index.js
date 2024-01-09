const d = document;

const navbar = d.querySelector('.nav-link');
const menuHamburguer = d.querySelector('.menu-hamburguer');
const menuClose = d.querySelector('.menu-close');
const cards = d.querySelectorAll('.card > img');
// este variable almacena un tipo de dato boolean que verifica cuando el ancho de la ventana, aqui empieza en false
let isMobile = window.matchMedia("(max-width: 605px)").matches;

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


window.addEventListener('resize', (e) => {

    let currentDevice = window.matchMedia("(max-width: 605px)").matches;

    // Se verifica si el tamaño de la ventnaa es de 605 o menos
    if (currentDevice !== isMobile) {
        isMobile = currentDevice;
        updateCardImages(cards, isMobile)
    }

})


function updateCardImages(cards, isMobile) {

    cards.forEach(card => {
        // obtiene la url actual del elemento img de la card
        let currentURL = card.getAttribute('src');
        // Si isMobile es true, reemplaza 'desktop' por 'mobile' en la URL actual.
        let newURL = isMobile ? currentURL.replace('desktop', 'mobile')
            : currentURL.replace('mobile', 'desktop');

        card.setAttribute('src', newURL);
    })

}

