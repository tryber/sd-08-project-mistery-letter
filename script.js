const letterBtn = document.getElementById('criar-carta');
const generatedLetter = document.getElementById('carta-gerada');

function splitText(str) {
  return str.split(' ');
}

function createSpan(word) {
  const spanText = document.createElement('span');
  spanText.className = 'palavra';
  spanText.innerHTML = word;
  generatedLetter.appendChild(spanText);
}

letterBtn.addEventListener('click', function () {
  const inputText = document.getElementById('carta-texto').value;
  const arrayText = splitText(inputText);
  
  for (let i = 0; i < arrayText.length; i += 1) {
    let word = arrayText[i];
    createSpan(word);
  }
});
