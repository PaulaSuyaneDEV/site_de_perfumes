
const menuNav = document.getElementById('menuNav');

const btn = document.querySelector('.menuMobile');


function abreMenu() {
    menuNav.classList.toggle('active');
}

btn.addEventListener('click', abreMenu);




function EnviarMensagem(){


}

const email = document.getElementById('email');
const number = document.getElementById('number');
const message = document.getElementById('message');

function login(){
if (email.value == '' && number.value == '' && message.value == '') {
   alert("Preencha os campos: ")
}
else if(email.value == '' || number.value == '' || message.value == '') {
    alert("Preencha todos os campos: ")
 }
else {
    alert("Dados enviados com sucesso , aguarde o retorno em até 48H!")
    location.href = ''
}

}