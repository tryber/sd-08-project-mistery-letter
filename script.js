const btnCriarCarta = document.getElementById('criar-carta');
const campoTexto = document.getElementById('carta-texto');
const paragrafo = document.getElementById('carta-gerada');

const contador = document.getElementById('carta-contador');
function contaPalavras() {
  const words = document.getElementsByTagName('span');
  contador.innerText = words.length;
  contador.innerText += ' palavras.';
}

const estilos = ['newspaper', 'magazine1', 'magazine2'];
const tamanhos = ['medium', 'big', 'reallybig'];
const rotacoes = ['rotateleft', 'rotateright'];
const inclinacoes = ['skewleft', 'skewright'];

function allProperties() {
  return [estilos, tamanhos, rotacoes, inclinacoes];
}
const minClasses = 2;

function getRandClasses() {
  const selectedProp = [];
  const selectedClasses = [];
  const properties = allProperties();
  const numberOfClasses = Math.floor(
    minClasses + Math.random() * (properties.length - minClasses + 1)
  );

  for (let index = 0; index < numberOfClasses; index += 1) {
    const selectPos = Math.floor(Math.random() * properties.length);
    selectedProp.push(properties[selectPos]);
    properties.splice(selectPos, 1);
  }

  for (let index = 0; index < selectedProp.length; index += 1) {
    const selectPos = Math.floor(Math.random() * selectedProp[index].length);
    selectedClasses.push(selectedProp[index][selectPos]);
  }

  return selectedClasses;
}

function novoEstilo(event) {
  event.target.className = '';
  event.target.classList.add(...getRandClasses());
}

function listenersToWords() {
  const words = document.getElementsByTagName('span');
  for (let index = 0; index < words.length; index += 1) {
    words[index].addEventListener('click', novoEstilo);
  }
}
btnCriarCarta.addEventListener('click', function () {
  const carta = campoTexto.value;
  paragrafo.innerHTML = '';
  const cartaVect = carta.split(' ');
  if (cartaVect.length === carta.length + 1) {
    paragrafo.innerHTML = 'Por favor, digite o conteúdo da carta.';
    contador.innerText = '';
  } else {
    for (let index = 0; index < cartaVect.length; index += 1) {
      const word = document.createElement('span');
      word.innerText = cartaVect[index];
      word.classList.add(...getRandClasses());
      paragrafo.appendChild(word);
      paragrafo.innerHTML += ' ';
    }
    contaPalavras();
    listenersToWords();
  }
});
