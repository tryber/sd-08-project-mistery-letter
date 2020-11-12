const btnCriarCarta = document.getElementById('criar-carta');
const campoTexto = document.getElementById('carta-texto');
const paragrafo = document.getElementById('carta-gerada');

btnCriarCarta.addEventListener('click', function () {
  const carta = campoTexto.value;
  paragrafo.innerHTML = '';
  const cartaVect = carta.split(' ');
  for (let index = 0; index < cartaVect.length; index += 1) {
    const word = document.createElement('span');
    word.innerText = cartaVect[index];
    paragrafo.appendChild(word);
    paragrafo.innerHTML = paragrafo.innerHTML + ' ';
  }
  if (paragrafo.innerText == '') {
    paragrafo.innerText = 'Por favor, digite o conteúdo da carta.';
  }
});
