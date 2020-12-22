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

  const r = (n) => Math.floor(Math.random() * n);

  //deixei de propósito a chance de cair undefined, pois não quero sempre todos os grupos de classes.
  // rotate e inclination tem 1/3 de chances de dar undefined, ou seja, não estar presente no elemento;
  classList = `${styleClasses[r(3.50)]} ${weightClasses[r(3.50)]} ${rotateClasses[r(3)]} ${inclinationClasses[r(3)]}`;
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
    span.classList = getRandomClasses();
    if (span.innerHTML !== '') {
      paragraph.appendChild(span);
    }
  });
};

const getWordsCount = () => {
  const count = document.querySelector('carta-contador');
}

window.onload = () => {
  button.addEventListener('click', generateLetter);
};
