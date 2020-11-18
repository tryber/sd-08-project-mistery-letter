//Verifica se todas as posições do array são um espaço
function checkOnlySpaces(array) {
  let spaceCounter = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === '') {
      //se for espaço adiciona ao contador
      spaceCounter += 1;
    }
  }
  //Verifica se todos a quantidade de espaços é igual ao tamnho do array e retorna a resposta
  if (spaceCounter >= array.length) {
    return true;
  }
  return false;
}

function randomNumber(array) {
  //Gera um número entre 0 e no máximo o tamnho do array-1 que foi enviado pela randomStyle()
  let random = Math.round(Math.random() * (array.length-1));
  console.log(random);
  return random;
}

function randomStyle(span) {
  //Recebe a span que foi criada no generateSpan()
  //Separa os styles em vetores
  const magazineOrNewspaper = ['magazine1', 'magazine2', 'newspaper'];
  const size = ['normal', 'big', 'reallybig'];
  const skew = ['skewleft', 'skewright'];
  const rotate = ['rotateleft', 'rotateright'];

  //Adiciona um style de cada dos vetores acima para a span que foi recebida nessa função
  span.classList.add(magazineOrNewspaper[randomNumber(magazineOrNewspaper)]);
  span.classList.add(size[randomNumber(size)]);
  span.classList.add(skew[randomNumber(skew)]);
  span.classList.add(rotate[randomNumber(rotate)]);
  return span;
}

function generateSpan() {
  //Pega a carta pronta e o contador
  const letter = document.querySelector('#carta-gerada');
  const wordCounter = document.querySelector('#carta-contador');

  //Limpa a carta pronta para gerar uma nova
  letter.innerHTML = '';

  //Pega o valor do input e separa em strings
  const text = document.querySelector('#carta-texto').value;
  const strings = text.split(' ');

  //Checa se o texto está vazio
  if (text === '' || checkOnlySpaces(strings)) {
    letter.innerHTML = 'Por favor, digite o conteúdo da carta.';
  } else {
    //Passa no vetor strings que está com cada palavra que foi inserida
    for (let index = 0; index < strings.length; index += 1) {
      //Cria o elemento span
      let newLetter = document.createElement('span');
      //Atribui um estilo aleatório ao span
      newLetter = randomStyle(newLetter);
      //Adiciona a palavra ao innerHtml dessa nova span
      newLetter.innerHTML = strings[index];

      //adiciona um listene a essa span para trocar o style quando clicar nela
      newLetter.addEventListener('click', function (event) {
        //Primeiro limpa as classes e depois adiciona as novas
        event.target.classList = '';
        randomStyle(event.target);
      });
      letter.appendChild(newLetter);
    }
  }
  //Atualiza o contador
  wordCounter.innerHTML = document.querySelectorAll('span').length;
}

function generateLetter() {
  //Adiciona o listener ao botão
  const buttonCreateLetter = document.querySelector('#criar-carta');
  buttonCreateLetter.addEventListener('click', generateSpan);
}

window.onload = generateLetter();

-[ 'newspaper',
-  'magazine1',
-  'magazine2',
-  'medium',
-  'big',
-  'reallybig',
-  'rotateleft',
-  'rotateright',
-  'skewleft',
-  'skewright' ]
+[ 'magazine2', 'normal', 'skewright', 'rotateright' ]