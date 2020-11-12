const inputLetterText = document.getElementById('carta-texto');
const generatedLetter = document.getElementById('carta-gerada');
const buttonCreateLetter = document.getElementById('criar-carta');

const style = ['newspaper', 'magazine1', 'magazine2'];
const size = ['medium', 'big', 'reallybig'];
const rotation = ['rotateleft', 'rotateright'];
const inclination = ['skewleft', 'skewright'];

function getRandom(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

function createWord(text) {
  const word = document.createElement('span');
  word.textContent = text;
  word.classList.add(getRandom(style));
  word.classList.add(getRandom(size));
  if (Math.random() < 0.5) {
    word.classList.add(getRandom(rotation));
  } else {
    word.classList.add(getRandom(inclination));
  }
  return word;
}

function createLetter() {
  const letterText = inputLetterText.value;

  if (!letterText.trim()) {
    alert('Por favor, digite o conteúdo da carta.');
    return;
  };

  for (const word of letterText.split(' ')) {
    generatedLetter.appendChild(createWord(word));
  }
}

buttonCreateLetter.addEventListener('click', createLetter);

