const button = document.querySelector("#criar-carta");
const paragraph = document.querySelector("#carta-gerada");
const input = document.querySelector("#carta-texto");

const removeAllChilds = (element) => {
  while (element.firstChild) {
    element.firstChild.remove();
  }
};
const generateLetter = () => {
  removeAllChilds(paragraph);
  if (input.value === undefined || input.value.trim() === "") {
    paragraph.innerHTML = "Por favor, digite o conteúdo da carta.";
  }
  const wordsArray = input.value.split(" ");
  wordsArray.forEach((elem) => {
    const span = document.createElement("span");
    span.innerHTML = `${elem} `;
    if (span.innerHTML !== "") {
      paragraph.appendChild(span);
    }
  });
};

window.onload = () => {
  button.addEventListener("click", generateLetter);
};
