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

function estiloRandomico(spanClass) {
  let estilo = ['newspaper', 'magazine1', 'magazine2'];
  let tamanho = ['medium', 'big', 'reallybig'];
  let rotacao = ['rotateleft', 'rotateright'];
  let inclinacao = ['skewleft', 'skewright'];
  
  let randomNumber = Math.round(Math.random() * 2);
  spanClass += `${estilo[randomNumber]} `;

  randomNumber = Math.round(Math.random() * 2);
  spanClass += `${tamanho[randomNumber]} `;

  randomNumber = Math.round(Math.random());
  spanClass += `${rotacao[randomNumber]} `;

  randomNumber = Math.round(Math.random());
  spanClass += `${inclinacao[randomNumber]}`;

  return spanClass;
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
    let spanClass = ''
    const span = document.createElement('span');
    span.innerText = words[index];
    span.className = estiloRandomico(spanClass);
    //span.addEventListener('click', estiloRandomico);
    cartaGerada.append(span);
  }

  isEmpty = true;

  contadorPalavras();
}

btnCria.addEventListener('click', criaCarta);
