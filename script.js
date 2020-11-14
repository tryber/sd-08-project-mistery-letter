const inputCarta = document.getElementById('carta-texto');
const botaoGerar = document.getElementById('criar-carta');
const pCarta = document.getElementById('carta-gerada');

function gerarCarta() {
  const inputCartaArray = inputCarta.value.split(' ');
  for (let palavra in inputCartaArray) {
    const spanDaPalavra = document.createElement('span');
    spanDaPalavra.innerHTML = inputCartaArray[palavra];
    spanDaPalavra.classList.add('palavra');
    pCarta.appendChild(spanDaPalavra);
  }
}
botaoGerar.addEventListener('click', gerarCarta)
