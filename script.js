const button = document.querySelector('#criar-carta');
const paragraph = document.querySelector('#carta-gerada');
const input = document.querySelector('#carta-texto');

const removeAllChilds = (element) => {
  while (element.firstChild) {
    element.firstChild.remove();
  }
};

const getRandomClasses = () => {
  let classList = '';
  const styleClasses = [`newspaper`, `magazine1`, `magazine2`];
  const weightClasses = [`medium`, `big`, `reallybig`];
  const rotateClasses = [`rotateleft`, `rotateright`];
  const inclinationClasses = [`skewleft`, `skewright`];
  const classArray = [styleClasses, weightClasses, rotateClasses, inclinationClasses];
  const r = (n) => Math.floor(Math.random() * n);
  classArray.forEach((elem) => {
    const elemento = elem[r(elem.length + 1)];
    if (elemento !== undefined) {
      classList += ` ${elemento}`;
    }
  })
  return classList;
};

const generateLetter = () => {
  removeAllChilds(paragraph);
  if (input.value === undefined || input.value.trim() === '') {
    paragraph.innerHTML = 'Por favor, digite o conteúdo da carta.';
    paragraph.style.justifyContent = 'center';
  }
  const wordsArray = input.value.split(' ');
  wordsArray.forEach((elem) => {
    const span = document.createElement('span');
    span.innerHTML = elem;
    span.classList = `medium${getRandomClasses()}`;
    if (span.innerHTML !== '') {
      paragraph.appendChild(span);
    }
  });
  getWordsCount();
};

const getWordsCount = () => {
  const count = document.querySelector('.carta-contador');
  const palavras = document.querySelectorAll('.medium')
  count.innerHTML = palavras.length;
}

const changeClasses = (event) => {
  if (event.target.classList.contains('medium')) {
    event.target.classList = `medium${getRandomClasses()}`
  }
}

window.onload = () => {
  button.addEventListener('click', generateLetter);
  paragraph.addEventListener('click', changeClasses);
};
