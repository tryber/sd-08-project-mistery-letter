const letterParagraph = document.getElementById('carta-gerada');
const contador = document.getElementById('carta-contador');
const letterBtn = document.getElementById('criar-carta');
const estilo = ['newspaper', 'magazine1', 'magazine2'];
const tamanho = ['medium', 'big', 'reallybig'];
const rotacao = ['rotateleft', 'rotateright', 'none'];
const inclinacao = ['skewleft', 'skewright', 'none'];


function splitText(str) {
  return str.split(' ');
}

function randomIndexTres() {
  let classIndex = Math.round(Math.random() * 3);
  if (classIndex < 0) {
    classIndex = 0;
  } else if (classIndex >= 3) {
    classIndex = 2;
  }
  return classIndex;
}

function randomIndexDois() {
  let classIndex = Math.round(Math.random() * 2);
  if (classIndex < 0) {
    classIndex = 0;
  } else if (classIndex >= 2) {
    classIndex = 1;
  }
  return classIndex;
}

function randomClasses(classes) {
  classes += `${estilo[randomIndexTres()]} `;
  classes += `${tamanho[randomIndexTres()]} `;
  classes += `${rotacao[randomIndexDois()]} `;
  classes += `${inclinacao[randomIndexDois()]} `;

  return classes;
}

function randomTarget(event) {
  let classes = '';

  classes += `${estilo[randomIndexTres()]} `;
  classes += `${tamanho[randomIndexTres()]} `;
  classes += `${rotacao[randomIndexDois()]} `;
  classes += `${inclinacao[randomIndexDois()]} `;

  event.target.className = classes;
}

function removeLetter() {
  const spanWords = document.querySelectorAll('span');

  for (let i = 0; i < spanWords.length; i += 1) {
    spanWords[i].remove();
  }
  letterParagraph.innerText = '';
  contador.innerText = '';
}

function createLetter() {
  removeLetter();
  const inputText = document.getElementById('carta-texto').value;
  const arrayText = splitText(inputText);

  let emptyArray = false;

  for (let i = 0; i < arrayText.length; i += 1) {
    const word = arrayText[i];
    const classes = '';
    if (word !== '') {
      const spanText = document.createElement('span');
      spanText.className = randomClasses(classes);
      spanText.innerHTML = word;
      spanText.addEventListener('click', randomTarget);
      letterParagraph.append(spanText);
    } else {
      emptyArray = true;
    }
  }

  if (emptyArray) {
    const spanText = document.createElement('span');
    spanText.className = 'erro';
    spanText.innerHTML = 'Por favor, digite o conteúdo da carta.';
    letterParagraph.append(spanText);
    document.getElementById('carta-texto').value = '';
  }

  contador.innerHTML = `${arrayText.length}`;
}

letterBtn.addEventListener('click', createLetter);
