const addletter = () => {
  document.querySelector('#criar-carta').addEventListener('click', () => {
    const words = document.getElementById('carta-texto').value;
    const arrayWords = words.split(' ');
    const cartaGerada = document.querySelector('#carta-gerada');
    cartaGerada.innerHTML = '';
    arrayWords.map((element) => {
      const span = document.createElement('span');
      span.innerHTML = element;
      const insertSpan = document.querySelector('#carta-gerada');
      return insertSpan.appendChild(span);
    });
  });
};
addletter();
