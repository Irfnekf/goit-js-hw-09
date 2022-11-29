import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  dateEl: document.querySelector('span[data-days]'),
  hrEl: document.querySelector('span[data-hours]'),
  minEl: document.querySelector('span[data-minutes]'),
  secEl: document.querySelector('span[data-seconds]'),
};
let ms = 0;
let dateNow = 0;
let userDate = 0;
let intId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userDate = selectedDates[0];
    dateNow = Date.now();
    if (userDate < dateNow) {
      Notiflix.Notify.warning('Будь ласка, виберіть дату в майбутньому');
      return;
    }

    refs.startBtn.disabled = false;
  },
};
refs.startBtn.addEventListener('click', onClickStart);
refs.startBtn.disabled = true;

flatpickr('input[id=datetime-picker]', options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = onTwoNumbers(Math.floor(ms / day));
  const hours = onTwoNumbers(Math.floor((ms % day) / hour));
  const minutes = onTwoNumbers(Math.floor(((ms % day) % hour) / minute));
  const seconds = onTwoNumbers(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}
function onClickStart() {
  Notiflix.Notify.success('Таймер запущено');
  intId = setInterval(() => {
    dateNow = Date.now();
    ms = userDate - dateNow;
    let time = convertMs(ms);

    refs.dateEl.textContent = time.days;
    refs.hrEl.textContent = time.hours;
    refs.minEl.textContent = time.minutes;
    refs.secEl.textContent = time.seconds;
    if (ms < 1000) {
      clearInterval(intId);
    }
  }, 1000);
}

function onTwoNumbers(value) {
  return String(value).padStart(2, '0');
}
