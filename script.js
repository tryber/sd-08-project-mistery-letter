const createLetter = document.getElementById('criar-carta');
const genLetter = document.getElementById('carta-gerada');
const inputLetter = document.getElementById('carta-texto');

function generateLetter() {
  createLetter.addEventListener('click', function () {
    let listWords = [];
    listWords = inputLetter.value.split(' ');
    for (let index = 0; index < listWords.length; index += 1) {
      const span = document.createElement('span');
      span.innerText = listWords[index];
      genLetter.appendChild(span);
    }
  });
}
generateLetter();
