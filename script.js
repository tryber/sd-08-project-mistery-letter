const inputCarta = document.getElementById('carta-texto');
const botaoGerar = document.getElementById('criar-carta');
const pCarta = document.getElementById('carta-gerada');
const pContador = document.getElementById('carta-contador');
// const classes = [
//   'newspaper',
//   'magazine1',
//   'magazine2',
//   'medium',
//   'big',
//   'reallybig',
//   'rotateleft',
//   'rotateright',
//   'skewleft',
//   'skewright',
// ];
const grupoEstilos = ['newspaper', 'magazine1', 'magazine2']; //classes.slice(0, 3);
const grupoTamanho = ['medium', 'big', 'reallybig']; //classes.slice(3, 6);
const grupoRotacao = ['rotateleft', 'rotateright']; //classes.slice(6, 8);
const grupoInclinacao = ['skewleft', 'skewright']; //classes.slice(8, 10);
const grupo = [grupoEstilos, grupoTamanho, grupoRotacao, grupoInclinacao];

function estilosAleatorios(elemento) {
  elemento.className = 'palavra';
  const classesAdicionadas = [];
  for (let grupoDeEstilos = 0; grupoDeEstilos < grupo.length; grupoDeEstilos += 1) {
    const estilo = grupo[grupoDeEstilos];
    const indexDoEstilo = Math.floor(Math.random() * grupo[grupoDeEstilos].length);
    classesAdicionadas.push(estilo[indexDoEstilo]);
  }
  for (let classes = 0; classes < classesAdicionadas.length; classes += 1) {
    const indexDaClasseAdicionada = Math.floor(Math.random() * classesAdicionadas.length);
    elemento.classList.add(classesAdicionadas[indexDaClasseAdicionada]);
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
      estilosAleatorios(spanDaPalavra);
      pCarta.appendChild(spanDaPalavra);
    }
  }
  const numeroDePalavras = document.querySelectorAll('.palavra').length;
  pContador.innerHTML = numeroDePalavras;
}
botaoGerar.addEventListener('click', gerarCarta);

pCarta.addEventListener('click', (event) => {
  if (event.target.classList.contains('palavra')) {
    estilosAleatorios(event.target);
  }
});
