const inputCarta = document.getElementById('carta-texto');
const botaoGerar = document.getElementById('criar-carta');
const pCarta = document.getElementById('carta-gerada');

function gerarCarta() {
  if (/\s+$/.test(inputCarta.value)) alert('Por favor, digite o conteúdo da carta');
  const inputCartaArray = inputCarta.value.split(' ');
  console.log(inputCartaArray);
  for (let palavra in inputCartaArray) {
    if (inputCartaArray[palavra] !== '') { 
    const spanDaPalavra = document.createElement('span');
    spanDaPalavra.innerHTML = inputCartaArray[palavra];
    spanDaPalavra.classList.add('palavra');
    pCarta.appendChild(spanDaPalavra);
    }
  }
}

botaoGerar.addEventListener('click', gerarCarta);

