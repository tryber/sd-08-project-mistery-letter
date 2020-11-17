const getInputCartaTexto = document.getElementById('carta-texto');
const getButtonCriarCarta = document.getElementById('criar-carta');
const getTagPCriarCarta = document.getElementById('carta-gerada');
const setEstiloClass = ['newspaper', ' magazine1', 'magazine2'];
const setTamanhoClass = ['medium', 'big', 'reallybig'];
const setRotacaoClass = ['rotateleft', 'rotateright'];
const setInclinacaoClass = ['skewleft', 'skewright'];

const setNumberRandom = (arr) => {
  const classRandom = Math.ceil(Math.random() * arr.length);
  return arr[classRandom - 1];
};
const resetElementsHTMLAll = (tag) => {
  document.querySelectorAll(tag).forEach((element) => element.remove());
};
function setTagPNewText() {
  const textInput = getInputCartaTexto.value.split(' ');
  const countText = textInput.length;
  resetElementsHTMLAll('span');
  resetElementsHTMLAll('#carta-contador');
  if (countText < 3) {
    return (getTagPCriarCarta.innerHTML += `<span>${'Por favor, digite o conteúdo da carta.'}</span>`);
  }

  Object.assign(textInput).forEach((element) => {
    getTagPCriarCarta.innerHTML += `<span class="
    ${setNumberRandom(setEstiloClass)} ${setNumberRandom(setTamanhoClass)}
    ${setNumberRandom(setRotacaoClass)} ${setNumberRandom(setInclinacaoClass)}
    ">${element}</span>`;
  });
  return (getTagPCriarCarta.innerHTML += `<p id="carta-contador">${countText}</p>`);
}

getButtonCriarCarta.addEventListener('click', setTagPNewText);
