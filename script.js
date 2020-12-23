const carta = document.querySelector('#carta-texto');
const criarCarta = document.querySelector('#criar-carta');
const cartaGerada = document.querySelector('#carta-gerada');
const gerarClasse = [
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

const gerarCarta = () => {
  if (!carta.value || !carta.value.trim()) {
    cartaGerada.innerHTML = 'Por favor, digite o conteúdo da carta.';
  }
  cartaGerada.innerHTML = '';
  const separarPalavras = carta.value.split(' ');
  separarPalavras.forEach((palavra) => {
    const novoSpan = document.createElement('span');
    novoSpan.innerHTML = `${palavra}`;
    cartaGerada.append(novoSpan);
  });
};

criarCarta.addEventListener('click', gerarCarta);
