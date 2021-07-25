const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onImputElBlur);

function onImputElBlur(event) {
  const input = event.currentTarget;
  const isCorrectLength = input.value.length == input.dataset.length;

  input.classList.add(isCorrectLength ? 'valid' : 'invalid');
  input.classList.remove(isCorrectLength ? 'invalid' : 'valid');
}
