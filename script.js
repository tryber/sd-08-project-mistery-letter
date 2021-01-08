const addletter = () => {
  document.querySelector('#criar-carta').addEventListener('click', () => {
    const words = document.getElementById('carta-texto').value;
    const arrayWords = words.split(' ');
    arrayWords.map((element) => {
      const span = document.createElement('span');
      //span.id = 'span';
      span.innerHTML = element + '  ';
      const insertSpan = document.querySelector('#carta-gerada');
      insertSpan.appendChild(span);
    });
  });
};
addletter();
