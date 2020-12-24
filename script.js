const carta = document.querySelector('#carta-texto');
const criarCarta = document.querySelector('#criar-carta');
const cartaGerada = document.querySelector('#carta-gerada');
const grupoEstilo = ['newspaper', 'magazine1', 'magazine2'];
const grupoTamanho = ['medium', 'big', 'reallybig'];
const grupoRotacao = ['rotateleft', 'rotateright'];
const grupoInclinacao = ['skewleft', 'skewright'];

const gerarCarta = () => {
  cartaGerada.innerHTML = '';
  if (!carta.value || !carta.value.trim()) {
    cartaGerada.innerHTML = 'Por favor, digite o conteúdo da carta.';
  }
  const separarPalavras = carta.value.split(' ');
  separarPalavras.forEach((palavra) => {
    const novoSpan = document.createElement('span');
    novoSpan.innerHTML = `${palavra}`;
    novoSpan.classList.add('palavra');
    adicionarClasses(novoSpan);
    cartaGerada.append(novoSpan);
  });
};

const adicionarClasses = (palavra) => {
  const gerarEstilo = Math.floor(Math.random() * grupoEstilo.length);
  const gerarTamanho = Math.floor(Math.random() * grupoTamanho.length);
  const gerarRotacaoo = Math.floor(Math.random() * grupoRotacao.length);
  const gerarInclinacao = Math.floor(Math.random() * grupoInclinacao.length);

  palavra.classList.add(grupoEstilo[gerarEstilo]);
  palavra.classList.add(grupoTamanho[gerarTamanho]);

  const adicionarInclinacao = Math.floor(
    Math.random() * grupoInclinacao.length
  );
  const adicionarRotacao = Math.floor(Math.random() * grupoRotacao.length);

  if (adicionarInclinacao > 0.4) {
    palavra.classList.add(grupoRotacao[gerarRotacaoo]);
  }

  if (adicionarRotacao > 0.5) {
    palavra.classList.add(grupoInclinacao[gerarInclinacao]);
  }
};

criarCarta.addEventListener('click', gerarCarta);
