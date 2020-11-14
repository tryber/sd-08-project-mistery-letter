const inputCarta = document.getElementById('carta-texto');
const botaoGerar = document.getElementById('criar-carta');
const pCarta = document.getElementById('carta-gerada');
const pContador = document.getElementById('carta-contador');
const classes = [
  'newspaper',
  'magazine1',
  'magazine2',
  'medium',
  'big',
  'reallybig',
  'rotateleft',
  'rotateright',
  'skewleft',
  'skewright',
];
const grupoEstilios = classes.slice(0, 3);
const grupoTamanho = classes.slice(3, 6);
const grupoRotacao = classes.slice(6, 8);
const grupoInclinacao = classes.slice(8, 10);
const grupo = [grupoEstilios, grupoTamanho, grupoRotacao, grupoInclinacao];

function estilosAleatorios(elemento) {
  elemento.className = 'palavra';
  for (
    let grupoDeEstilos = 0;
    grupoDeEstilos < grupo.length;
    grupoDeEstilos += 1
  ) {
    const estilo = grupo[grupoDeEstilos];
    const index = Math.floor(Math.random() * 3);
    if (estilo[index]) {
      elemento.classList.add(estilo[index]);
    }
  }
}

function gerarCarta() {
  pCarta.innerHTML = '';
  if (/^\s+/.test(inputCarta.value) || !inputCarta.value) {
    pCarta.innerHTML = 'Por favor, digite o conteúdo da carta.';
    pContador.innerHTML = '';
    return;
  }
  const inputCartaArray = inputCarta.value.split(' ');
  for (let palavra = 0; palavra < inputCartaArray.length; palavra += 1) {
    if (inputCartaArray[palavra] !== '') {
      const spanDaPalavra = document.createElement('span');
      spanDaPalavra.innerHTML = inputCartaArray[palavra];
      spanDaPalavra.className = 'palavra';
      pCarta.appendChild(spanDaPalavra);
      estilosAleatorios(spanDaPalavra);
    }
  }
  const numeroDePalavras = document.querySelectorAll('.palavra').length;
  pContador.innerHTML = `O número de palavras codificadas é: ${numeroDePalavras}`;
}

botaoGerar.addEventListener('click', gerarCarta);

pCarta.addEventListener('click', (event) => {
  if (event.target.classList.contains('palavra')) {
    estilosAleatorios(event.target);
  }
});
