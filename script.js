//string = string.replace(/\s\s+/g, ' ');

window.onload = function () {
  document.querySelector("#criar-carta").addEventListener("click", gerarCarta);
};

function gerarCarta() {
  let inputData = document.querySelector("#carta-texto");
  let paragrafo = document.querySelector("#carta-gerada");
  let contador = document.querySelector("#carta-contador");
  paragrafo.innerHTML = "";

  let texto = inputData.value;
  texto = texto.replace(/  +/g, " ");
  if (texto === "" || texto === " ") {
    inputData.value = "";
    paragrafo.innerHTML = "Por favor, digite o conteúdo da carta.";
    return alert("Por favor, digite o conteúdo da carta.");
  }

  texto.split(" ").forEach((e) => {
    let spanText = document.createElement("span");
    spanText.innerHTML = e;
    spanText.className = formarClasseAleatoria();
    spanText.addEventListener("click", (e) => {
      e.target.className = "";
      e.target.className = formarClasseAleatoria();
    });
    paragrafo.appendChild(spanText);
  });

  contador.innerHTML = texto.split(" ").length;
}

function formarClasseAleatoria() {
  var estilo = ["newspaper", "magazine1", "magazine2"];
  var tamanho = ["medium", "big", "reallybig"];
  var rotacao = ["rotateleft", "rotateright"];
  var inclinacao = ["skewleft", "skewright"];

  let classe = "";

  while (classe.length < 12) {
    let a = Math.floor(Math.random() * 4);
    let b = Math.floor(Math.random() * 4);
    let c = Math.floor(Math.random() * 3);
    let d = Math.floor(Math.random() * 3);

    if (estilo[a] !== undefined) {
      classe = classe.concat(" ", estilo[a]);
    }

    if (tamanho[b] !== undefined) {
      classe = classe.concat(" ", tamanho[b]);
    }

    if (rotacao[c] !== undefined) {
      classe = classe.concat(" ", rotacao[c]);
    }

    if (inclinacao[d] !== undefined) {
      classe = classe.concat(" ", inclinacao[d]);
    }
  }

  if (classe[0] === " ") {
    classe = classe.slice(1);
  }
  if (classe[classe.length - 1] === " ") {
    classe = classe.slice(-1);
  }

  return classe;
}
