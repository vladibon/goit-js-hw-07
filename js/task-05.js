const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', onInput);

function onInput(event) {
  const input = event.currentTarget;

  nameOutput.textContent = input.value ? input.value : 'незнакомец';
}
