const input = document.getElementById('carta-texto');
const btnCria = document.getElementById('criar-carta');
const cartaGerada = document.getElementById('carta-gerada');
let isEmpty = true;


function checaInput() {
  for (let index = 0; index < (input.value).length; index += 1){
    if (input.value[index] !== ' ') {
      isEmpty = false;
      return;
    }
  }
}

function limpaCarta() {
  const spanList = document.querySelectorAll('span');

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
    alert('Por favor, digite o conteúdo da carta.');
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
}

btnCria.addEventListener('click', criaCarta);
