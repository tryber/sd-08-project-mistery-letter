const letterBtn = document.getElementById('criar-carta');

function splitText(str) {
  return str.split(' ');
}

function getClasses(index, classIndex) {
  const estilo = ['newspaper', 'magazine1', 'magazine2'];
  const tamanho = ['medium', 'big', 'reallybig'];
  const rotacao = ['rotateleft', 'rotateright', 'none'];
  const inclinacao = ['skewleft', 'skewright', 'none'];

  let classUnit = '';
  switch (index) {
    case 1:
      classUnit = estilo[classIndex];
      break;
    case 2:
      classUnit = tamanho[classIndex];
      break;
    case 3:
      if (rotacao[classIndex] !== 'none') {
        classUnit = rotacao[classIndex];
      }
      break;
    case 4:
      if (inclinacao[classIndex] !== 'none') {
        classUnit = inclinacao[classIndex];
      }
      break;
    default:
  }
  return classUnit;
}

function randomClasses() {
  let classes = '';
  for (let indexGrp = 1; indexGrp <= 4; indexGrp += 1) {
    let classIndex = Math.round(Math.random() * 3);
    if (classIndex < 0) {
      classIndex = 0;
    } else if (classIndex >= 3) {
      classIndex = 2;
    }

    classes = classes.concat(' ', getClasses(indexGrp, classIndex));
  }

  return classes;
}

function createLetter() {
  const outputLetter = document.getElementById('output');
  const letterParagraph = document.getElementById('carta-gerada');

  outputLetter.appendChild(letterParagraph);

  const inputText = document.getElementById('carta-texto').value;
  const arrayText = splitText(inputText);

  let emptyArray = false;

  for (let i = 0; i < arrayText.length; i += 1) {
    const word = arrayText[i];

    if (word !== '') {
      const spanText = document.createElement('span');
      spanText.className = randomClasses();
      spanText.innerHTML = word;
      letterParagraph.appendChild(spanText);
    } else {
      emptyArray = true;
    }
  }

  if (emptyArray) {
    const spanText = document.createElement('span');
    spanText.className = 'erro';
    spanText.innerHTML = 'Por favor, digite o conteúdo da carta.';
    letterParagraph.appendChild(spanText);
    document.getElementById('carta-texto').value = '';
  }
}

letterBtn.addEventListener('click', createLetter);
