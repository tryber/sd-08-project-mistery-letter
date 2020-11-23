const createLetter = document.getElementById('criar-carta');
const genLetter = document.getElementById('carta-gerada');
const inputLetter = document.getElementById('carta-texto');
const countDisplay = document.getElementById('carta-contador');
function checkText() {
  if (inputLetter.value === ' ' || inputLetter.value === '') {
    genLetter.innerText = 'Por favor, digite o conteúdo da carta.';
    return true;
  }
  return false;
}
function addClass(element) {
  const classStyles = ['newspaper', 'magazine1', 'magazine2'];
  const classLength = ['medium', 'big', 'reallybig'];
  const classRotate = ['rotateleft', 'rotateright'];
  const classSkew = ['skewleft', 'skewright'];
  const forThree = Math.floor(Math.random() * 3);
  const forTwo = Math.floor(Math.random() * 2);
  element.classList.add(classStyles[forThree]);
  element.classList.add(classLength[forThree]);
  element.classList.add(classRotate[forTwo]);
  element.classList.add(classSkew[forTwo]);
}
function modifyClasses() {
  const spans = document.querySelectorAll('#carta-gerada span');
  for (let index = 0; index < spans.length; index += 1) {
    spans[index].addEventListener('click', function (event) {
      event.target.classList = '';
      addClass(event.target);
    });
  }
}

function generateLetter() {
  if (checkText()) {
    return;
  }
  genLetter.textContent = '';
  let listWords = [];
  listWords = inputLetter.value.split(' ');
  countDisplay.innerHTML = listWords.length;
  for (let index = 0; index < listWords.length; index += 1) {
    const span = document.createElement('span');
    span.style.display = 'inline-block';
    span.textContent = listWords[index];
    addClass(span);
    genLetter.appendChild(span);
  }
  modifyClasses();
}
createLetter.addEventListener('click', generateLetter);
