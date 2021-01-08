const addletter = () => {
  document.querySelector('#criar-carta').addEventListener('click', () => {
    const words = document.getElementById('carta-texto').value;
    const arrayWords = words.split(' ');
    arrayWords.map((element) => {
      const span = document.createElement('span');
      span.innerHTML = element.concat('  ');
      const insertSpan = document.querySelector('#carta-gerada');
      return insertSpan.appendChild(span);
    });
  });
};
addletter();
