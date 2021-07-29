const rangeRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

rangeRef.addEventListener('input', onRangeChange);

function onRangeChange(event) {
  textRef.style.fontSize = `${event.currentTarget.value}px`;
}

textRef.style.fontSize = `${rangeRef.value}px`;
