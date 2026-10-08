function toggleMenu() {
const menu = document.querySelector('.menu-links');
const icon = document.querySelector('.hamburger-icon');
const isOpen = menu.classList.toggle('open');

icon.classList.toggle('open', isOpen);
menu.inert = !isOpen;
icon.setAttribute('aria-expanded', String(isOpen));
icon.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
}
