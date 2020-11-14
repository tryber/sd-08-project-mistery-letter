const inputCarta = document.getElementById('carta-texto');
const botaoGerar = document.getElementById('criar-carta');
const pCarta = document.getElementById('carta-gerada');

function gerarCarta() {
  pCarta.innerHTML = '';
  if (/^\s+/.test(inputCarta.value) || !inputCarta.value) {
    pCarta.innerHTML = 'Por favor, digite o conteúdo da carta.';
    return;
  }
  const inputCartaArray = inputCarta.value.split(' ');
  for (let palavra in inputCartaArray) {
    if (inputCartaArray[palavra] !== '') { 
    const spanDaPalavra = document.createElement('span');
    spanDaPalavra.innerHTML = inputCartaArray[palavra];
    pCarta.appendChild(spanDaPalavra);
    }
  }
}
botaoGerar.addEventListener('click', gerarCarta);

// const classes = ['newspaper', 'magazine1', 'magazine2', 'medium', 'big', 'reallybig', 'rotateleft', 'rotateright', 'skewleft', 'skewright'];
