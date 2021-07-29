const refs = {
  input: document.querySelector('#controls > input'),
  createBnt: document.querySelector('[data-action="render"]'),
  deleteBnt: document.querySelector('[data-action="destroy"]'),
  boxes: document.querySelector('#boxes'),
};

refs.createBnt.addEventListener('click', () => createBoxes(refs.input.value));
refs.deleteBnt.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  let boxesMarkup = '';

  for (let i = 0; i < amount; i += 1) {
    const size = 30 + 10 * i;
    const randomColor = (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);

    boxesMarkup += `
    <div
      style="width: ${size}px;
      height: ${size}px;
      background-color: #${randomColor};"
    ></div>
    `;
  }

  refs.boxes.innerHTML = boxesMarkup;
}

function destroyBoxes() {
  refs.boxes.innerHTML = '';
}
