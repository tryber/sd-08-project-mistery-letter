const button = document.querySelector("#criar-carta");
const paragraph = document.querySelector("#carta-gerada");
const input = document.querySelector("#carta-texto");

const generateLetter = () => {
  const wordsArray = input.value.split(" ");
  wordsArray.forEach((elem) => {
    const span = document.createElement("span");
    span.innerHTML = `${elem} `;
    paragraph.appendChild(span);
  });
};


window.onload = () => {
  button.addEventListener("click", generateLetter);
};
