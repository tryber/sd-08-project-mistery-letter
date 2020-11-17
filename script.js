const getInputCartaTexto = document.getElementById('carta-texto');
const getButtonCriarCarta = document.getElementById('criar-carta');
const getTagPCriarCarta = document.getElementById('carta-gerada');
const setEstiloClass = ['newspaper', ' magazine1', 'magazine2'];
const setTamanhoClass = ['medium', 'big', 'reallybig'];
const setRotacaoClass = ['rotateleft', 'rotateright'];
const setInclinacaoClass = ['skewleft', 'skewright'];

const setNumberRandom = (arr) => {
  const classRandom = Math.ceil(Math.random() * arr.length);
  return arr[classRandom];
};
const resetElementsHTML = () => {
  document.querySelectorAll('span').forEach((element) => element.remove());
};
const setTagPNewText = () => {
  textInput = getInputCartaTexto.value.split(' ');
  resetElementsHTML();
  Object.assign(textInput).forEach((element) => {
    if (element === '' || element === null) {
      return (getTagPCriarCarta.innerHTML += `<span>${'Por favor, digite o conteúdo da carta.'}</span>`);
    }
    getTagPCriarCarta.innerHTML += `<span class="
    ${setNumberRandom(setEstiloClass)} ${setNumberRandom(setTamanhoClass)}
    ${setNumberRandom(setRotacaoClass)} ${setNumberRandom(setInclinacaoClass)}
    ">${element}</span>`;
  });
};

getButtonCriarCarta.addEventListener('click', setTagPNewText);
