function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  buttonElStart: document.querySelector('[data-start]'),
  buttonElStop: document.querySelector('[data-stop]'),
};

refs.buttonElStart.addEventListener('click', onButtonStart);
refs.buttonElStop.addEventListener('click', onButtonStop);

let intervalId = null;

function onButtonStart() {
  onStatusButtonStart();
  intervalId = setInterval(onGenerationBodyColor, 1000);
}

function onButtonStop() {
  onStatusButtonStop();
  clearInterval(intervalId);
}
function onStatusButtonStart() {
  refs.buttonElStart.setAttribute('disabled', true);
  refs.buttonElStop.removeAttribute('disabled');
}
function onStatusButtonStop() {
  refs.buttonElStop.setAttribute('disabled', true);
  refs.buttonElStart.removeAttribute('disabled');
}
function onGenerationBodyColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}
