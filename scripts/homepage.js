const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

function toggleMenu() {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
}

hambutton.addEventListener('click', toggleMenu);

window.addEventListener('resize', () => {
    if (window.matchMedia('(min-width: 740px)').matches) {
    }
});

document.querySelectorAll('.navigation a').forEach(link => {
    if (link.href === window.location.href){
        link.classList.add('active');
    }
});