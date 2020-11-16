function chooseStyle(styleArray) {
  const chosen = styleArray[Math.floor(Math.random() * styleArray.length)];

  return chosen;
}

function changeStyle(event) {
  const styleGroup = ['newspaper', 'magazine1', 'magazine2'];
  const sizeGroup = ['medium', 'big', 'reallybig'];
  const rotationGroup = ['rotateleft', 'rotateright'];
  const tiltGroup = ['skewleft', 'skewright'];
  const groups = [styleGroup, sizeGroup, rotationGroup, tiltGroup];
  event.target.className = '';

  for (let i = 0; i < groups.length; i += 1) {
    event.target.classList.add(chooseStyle(groups[i]));
  }
}

function createWordStyle(word) {
  const styleGroup = ['newspaper', 'magazine1', 'magazine2'];
  const sizeGroup = ['medium', 'big', 'reallybig'];
  const rotationGroup = ['rotateleft', 'rotateright'];
  const tiltGroup = ['skewleft', 'skewright'];
  const groups = [styleGroup, sizeGroup, rotationGroup, tiltGroup];
  const span = document.createElement('span');
  span.innerText = word;
  span.addEventListener('click', changeStyle);

  for (let i = 0; i < groups.length; i += 1) {
    span.classList.add(chooseStyle(groups[i]));
  }

  return span;
}

function generateLetter() {
  const textInputEl = document.getElementById('carta-texto');
  const generatedLetter = document.getElementById('carta-gerada');
  generatedLetter.innerHTML = '';
  const wordCounter = document.getElementById('carta-contador');
  const wordArray = textInputEl.value.split(' ');
  let counter = 0;

  if (wordArray[0] === '') {
    generatedLetter.innerHTML = 'Por favor, digite o conteúdo da carta.';
    return;
  }

  for (let i = 0; i < wordArray.length; i += 1) {
    if (wordArray[i] !== '') {
      counter += 1;
    }

    const wordEl = createWordStyle(wordArray[i]);
    generatedLetter.appendChild(wordEl);
  }

  wordCounter.innerText = counter;
}

window.onload = () => {
  const createLetterBtn = document.getElementById('criar-carta');
  createLetterBtn.addEventListener('click', generateLetter);
};
