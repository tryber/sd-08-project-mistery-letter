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

function formarClasseAleatoria() {
  var estilo = ["newspaper", "magazine1", "magazine2"];
  var tamanho = ["medium", "big", "reallybig"];
  var rotacao = ["rotateleft", "rotateright"];
  var inclinacao = ["skewleft", "skewright"];

  let de0a31 = Math.floor(Math.random() * 4);
  let de0a32 = Math.floor(Math.random() * 4);
  let de0a21 = Math.floor(Math.random() * 3);
  let de0a22 = Math.floor(Math.random() * 3);

  let classe = "";

  if (estilo[de0a31] !== undefined) {
    classe = classe.concat(" ", estilo[de0a31]);
  }

  if (tamanho[de0a32] !== undefined) {
    classe = classe.concat(" ", tamanho[de0a32]);
  }

  if (rotacao[de0a21] !== undefined) {
    classe = classe.concat(" ", rotacao[de0a21]);
  }

  if (inclinacao[de0a22] !== undefined) {
    classe = classe.concat(" ", inclinacao[de0a22]);
  }

  return classe;
}
