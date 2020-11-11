//string = string.replace(/\s\s+/g, ' ');

window.onload = function () {
  document.querySelector("#criar-carta").addEventListener("click", gerarCarta);
};

function gerarCarta() {
  let inputData = document.querySelector("#carta-texto");
  let paragrafo = document.querySelector("#carta-gerada");

  let texto = inputData.value;
  texto = texto.replace(/  +/g, " ");
  if (texto === "" || texto === " ") {
    inputData.value = "";
    return alert("Por favor, digite o conteúdo da carta.");
  }

  texto.split(" ").forEach((e) => {
    let spanText = document.createElement("span");
    spanText.innerHTML = e;
    paragrafo.appendChild(spanText);
  });
}
