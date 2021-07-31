const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onImputElBlur);

function onImputElBlur(event) {
  const input = event.currentTarget;
  const isValidLength = input.value.length === Number(input.dataset.length);

  input.classList.add(isValidLength ? 'valid' : 'invalid');
  input.classList.remove(isValidLength ? 'invalid' : 'valid');
}
