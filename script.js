const paragrafoLocal = document.querySelector('#carta-gerada');
const inputLocal = document.querySelector('#carta-texto');
const buttonLocal = document.querySelector('#criar-carta');
let cartaDigitada = '';
let cartaMisteriosa = [];

function recebeCarta() {
  cartaDigitada = document.querySelector('#carta-texto').value;
  cartaMisteriosa = cartaDigitada.split(' ');
}
inputLocal.addEventListener('keyup', recebeCarta);
  
function criaDiv() {
  if ((cartaDigitada == '') | (cartaDigitada.trim() == '')){
    paragrafoLocal.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    paragrafoLocal.innerText = ''; 
    for (let index = 0; index < cartaMisteriosa.length; index += 1) {
      let span = document.createElement('span');
      span.innerText = cartaMisteriosa[index];
      paragrafoLocal.appendChild(span);
    }
  }
}

buttonLocal.addEventListener('click', criaDiv);
