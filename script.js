const inputLetterText = document.getElementById('carta-texto');
const generatedLetter = document.getElementById('carta-gerada');
const buttonCreateLetter = document.getElementById('criar-carta');
const counterParagraph = document.getElementById('carta-contador');

const style = ['newspaper', 'magazine1', 'magazine2'];
const size = ['medium', 'big', 'reallybig'];
const rotation = ['rotateleft', 'rotateright'];
const inclination = ['skewleft', 'skewright'];

let counter = 0;

function getRandom(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

function randomizeStyle(elem) {
  elem.className = '';
  elem.classList.add(getRandom(style));
  elem.classList.add(getRandom(size));
  if (Math.random() < 0.5) {
    elem.classList.add(getRandom(rotation));
  } else {
    elem.classList.add(getRandom(inclination));
  }
}

function count() {
  counter += 1;
  counterParagraph.textContent = counter;
}

function createWord(text) {
  const word = document.createElement('span');
  word.textContent = text;
  randomizeStyle(word);
  word.addEventListener('click', function (event) {
    randomizeStyle(event.target);
  });
  count();
  return word;
}

function createLetter() {
  const letterText = inputLetterText.value;

  if (!letterText.trim()) {
    generatedLetter.textContent = 'Por favor, digite o conteúdo da carta.';
    return;
  }

  generatedLetter.textContent = '';

  const allWords = letterText.split(' ');
  for (let index = 0; index < allWords.length; index += 1) {
    const word = allWords[index];
    generatedLetter.appendChild(createWord(word));
  }
}

buttonCreateLetter.addEventListener('click', createLetter);
