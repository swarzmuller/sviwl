const activeBtn = document.querySelector('.hamburger');
const menu = document.querySelector('.menu-list');

activeBtn.onclick = () => {
    activeBtn.classList.toggle('active__menu');
    menu.classList.toggle('active__menu');
};