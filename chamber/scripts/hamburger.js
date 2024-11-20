// hamburger button
export function initHamburger() {
    const hamburgerElement = document.querySelector('#hambutton');
    const navElement = document.querySelector('#animateme');

    hamburgerElement.addEventListener('click', () => {
        navElement.classList.toggle('open');
        hamburgerElement.classList.toggle('open'); 
    });
}
