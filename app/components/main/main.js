const editBtn = document.querySelector('.sidebar-btn');
const editMenu = document.querySelector('.sidebar-menu');

editBtn.onclick = (e) => {
    e.stopPropagation();
    editMenu.classList.toggle('active__edit');
};

document.onclick = (e) => {
    const menu = e.target === editMenu || editMenu.contains(e.target);
    const btnMenu = e.target === editBtn;
    const active = editMenu.classList.contains('active__edit');

    if (!menu && !btnMenu && active) {
        editMenu.classList.toggle('active__edit');
    }
};

const switcher = document.querySelector('.switcher');
const switcherBtn = document.querySelector('.switcher__btn')

switcher.onclick = () => {
    switcher.classList.toggle('switcher__active');
    switcherBtn.classList.toggle('switcher__active-btn');
};