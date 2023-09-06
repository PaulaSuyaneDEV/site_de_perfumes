
const menuNav = document.getElementById('menu-nav');

const btn = document.querySelector('.menu-mobile');

//adicionar a funcao de clique no botao


function abreMenu() {
    menuNav.classList.toggle('active');
}

btn.addEventListener('click', abreMenu);

