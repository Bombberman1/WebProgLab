const burgerButton = document.querySelector('.burger-button');
const mobileMenu = document.querySelector('.mobile-menu');

burgerButton.addEventListener('click', () => {
    burgerButton.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});
