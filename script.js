const letterBtn = document.getElementById('criar-carta');
const generatedLetter = document.getElementById('carta-gerada');

const classesGroups = {
  estilo: [`newspaper`, `magazine1`, `magazine2`],
  tamanho: [`medium`, `big`, `reallybig`],
  rotacao: [`rotateleft`, `rotateright`, 'none'],
  inclinacao: [`skewleft`, `skewright`, 'none']
}


function splitText(str) {
  return str.split(' ');
}

function createSpan(word) {
  const spanText = document.createElement('span');
  spanText.className = 'palavra';
  spanText.innerHTML = word;
  generatedLetter.appendChild(spanText);
}

function randomIndexClasses() {
  const arrayWords = generatedLetter.children;

  for (let indexSpan = 0; indexSpan < arrayWords.length; indexSpan += 1) {
    for (let indexGrp = 1; indexGrp <= 4; indexGrp += 1) {
      let classIndex = Math.round(Math.random() * 3);
      if (classIndex < 0) {
        classIndex = 0;
      } else if (classIndex >= 3) {
        classIndex = 2
      }
  
      switch (indexGrp) {
        case 1:
          arrayWords[indexSpan].classList.add(classesGroups.estilo[classIndex]);
          break;
        case 2:
          arrayWords[indexSpan].classList.add(classesGroups.tamanho[classIndex]);
          break;
        case 3:
          arrayWords[indexSpan].classList.add(classesGroups.rotacao[classIndex]);
          break;
        case 4:
          arrayWords[indexSpan].classList.add(classesGroups.inclinacao[classIndex]);
          break;
        default:
          console.log('error on the random!');
      }
    }

  }
}

letterBtn.addEventListener('click', function () {
  const inputText = document.getElementById('carta-texto').value;
  const arrayText = splitText(inputText);
  let emptyArray = false;

  for (let i = 0; i < arrayText.length; i += 1) {
    let word = arrayText[i];
    if (word != '') {
      createSpan(word);
    } else {
      emptyArray = true;
    }
  }

  if(emptyArray) {
    alert('Por favor, digite o conteúdo da carta.');
    document.getElementById('carta-texto').value = '';
  }
  
  randomIndexClasses();
});
