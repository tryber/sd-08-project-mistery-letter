const inputLetterText = document.getElementById('carta-texto');
const generatedLetter = document.getElementById('carta-gerada');
const buttonCreateLetter = document.getElementById('criar-carta');

function createLetter() {
  const letterText = inputLetterText.value;
  if (!letterText) return;
  for (const word of letterText.split(' ')) {
    const span = document.createElement('span');
    span.textContent = word;
    generatedLetter.appendChild(span);
  }
}

buttonCreateLetter.addEventListener('click', createLetter)