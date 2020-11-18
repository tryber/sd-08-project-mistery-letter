const letter = document.querySelector('#carta-gerada');
const wordCounter = document.querySelector('#carta-contador');

function checkOnlySpaces(array) {
  let spaceCounter = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] == "") {
      spaceCounter += 1;
    }
  }
  if (spaceCounter >= array.length) {
    return true;
  } else {
    return false;
  }
}

function randomNumber(maxMumber) {
  return Math.round(Math.random() * maxMumber);
}

function randomStyle(span) {
  const magazineOrNewspaper = ['magazine1', 'magazine2', 'newspaper'];
  const size = ['normal', 'big', 'reallybig'];
  const skew = ["skewleft", 'skewright'];
  const rotate = ['rotateleft', 'rotateright'];
  span.classList.add(magazineOrNewspaper[randomNumber(magazineOrNewspaper.length)]);
  span.classList.add(size[randomNumber(size.length)]);
  span.classList.add(skew[randomNumber(skew.length)]);
  span.classList.add(rotate[randomNumber(rotate.length)]);
  return span;
}

function generateSpan() {
  const text = document.querySelector('#carta-texto').value;
  const strings = text.split(" ");
  if (text === "" || checkOnlySpaces(strings)) {
    alert('Por favor, digite o conteúdo da carta.');
  } else {
    for (let index = 0; index < strings.length; index += 1) {
      let newLetter = document.createElement('span');
      newLetter.innerHTML = strings[index];
      newLetter = randomStyle(newLetter);
      newLetter.addEventListener('click', function (event) {
        event.target.classList = "";
        randomStyle(event.target);
      });
      letter.appendChild(newLetter);
    }
  }
  wordCounter.innerHTML = document.querySelectorAll('span').length;
}

function generateLetter() {
  const buttonCreateLetter = document.querySelector('#criar-carta');
  buttonCreateLetter.addEventListener('click', generateSpan);
}

window.onload = generateLetter();
