const counterRef = document.querySelector('#counter');
const valueRef = counterRef.querySelector('#value');
const incrementBtnRef = counterRef.querySelector('[data-action="increment"]');
const decrementBtnRef = counterRef.querySelector('[data-action="decrement"]');

let counterValue = 0;

const updateValueUI = () => (valueRef.textContent = counterValue);
const increment = () => (counterValue += 1);
const decrement = () => (counterValue -= 1);

incrementBtnRef.addEventListener('click', () => {
  increment();
  updateValueUI();
});

decrementBtnRef.addEventListener('click', () => {
  decrement();
  updateValueUI();
});
