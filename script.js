const letterBtn = document.getElementById('criar-carta');

function splitText(str) {
    return str.split(' ');
}

function randomClasses() {
  const estilo = [`newspaper`, `magazine1`, `magazine2`];
  const tamanho = [`medium`, `big`, `reallybig`];
  const rotacao = [`rotateleft`, `rotateright`, 'none'];
  const inclinacao = [`skewleft`, `skewright`, 'none'];

  let classes = '';

  for (let indexGrp = 1; indexGrp <= 4; indexGrp += 1) {
    let classIndex = Math.round(Math.random() * 3);
    if (classIndex < 0) {
      classIndex = 0;
    } else if (classIndex >= 3) {
      classIndex = 2;
    }

    switch (indexGrp) {
      case 1:
        classes = classes.concat(" ", estilo[classIndex]);
        break;
      case 2:
        classes = classes.concat(" ", tamanho[classIndex]);
        break;
      case 3:
        if (rotacao[classIndex] != 'none') {
          classes = classes.concat(" ", rotacao[classIndex]);
        }
        break;
      case 4:
        if (inclinacao[classIndex] != 'none') {
          classes = classes.concat(" ", inclinacao[classIndex]);
        }
        break;
      default:
        console.log('error on the random!');
    }
  }
  return classes;
}

letterBtn.addEventListener('click', createLetter);

function createLetter() {
  const outputLetter = document.getElementById('output');
  const letterParagraph = document.createElement('p');
  letterParagraph.className = 'carta-gerada';

  outputLetter.appendChild(letterParagraph);

  const inputText = document.getElementById('carta-texto').value;
  const arrayText = splitText(inputText);

  let emptyArray = false;

  for (let i = 0; i < arrayText.length; i += 1) {
    let word = arrayText[i];

    if (word != '') {
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

