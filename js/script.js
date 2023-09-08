
const menuNav = document.getElementById('menuNav');

const btn = document.querySelector('.menuMobile');

//adicionar a funcao de clique no botao


function abreMenu() {
    menuNav.classList.toggle('active');
}

btn.addEventListener('click', abreMenu);

