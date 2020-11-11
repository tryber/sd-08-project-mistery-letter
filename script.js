const input = document.getElementById('carta-texto');
const btnCria = document.getElementById('criar-carta');
const cartaGerada = document.getElementById('carta-gerada');
const contador = document.getElementById('carta-contador');
let isEmpty = true;


function checaInput() {
  for (let index = 0; index < (input.value).length; index += 1) {
    if (input.value[index] !== ' ') {
      isEmpty = false;
      return;
    }
  }
}

function contadorPalavras() {
  const spanList = document.querySelectorAll('span');
  contador.innerText = spanList.length;
}

function limpaCarta() {
  const spanList = document.querySelectorAll('span');
  cartaGerada.innerText = '';
  contador.innerText = '';

  for (let index = 0; index < spanList.length; index += 1) {
    spanList[index].remove();
  }
}

function estiloRandomico() {

}

function criaCarta() {
  limpaCarta();
  checaInput();

  if (isEmpty === true) {
    cartaGerada.innerText = 'Por favor, digite o conteúdo da carta.';
    return;
  }

  const words = (input.value).split(' ');

  for (let index = 0; index < words.length; index += 1) {
    const span = document.createElement('span');
    span.innerText = words[index];
    span.addEventListener('click', estiloRandomico);
    cartaGerada.append(span);
  }

  isEmpty = true;

  contadorPalavras();
}

btnCria.addEventListener('click', criaCarta);
