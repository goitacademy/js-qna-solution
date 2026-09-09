// Date.now() повертає поточний час у мілісекундах.
// setInterval повторює функцію, доки його не зупинити через clearInterval.

const countdownButtonEl = document.querySelector('.js-countdown-button');
const countdownEl = document.querySelector('.js-countdown');

countdownButtonEl.addEventListener('click', () => {
  const endTime = Date.now() + 5000;
  countdownButtonEl.disabled = true;
  countdownEl.textContent = 'До початку: 5';

  const intervalId = setInterval(() => {
    const millisecondsLeft = endTime - Date.now();
    const secondsLeft = Math.max(0, Math.ceil(millisecondsLeft / 1000));

    countdownEl.textContent = `До початку: ${secondsLeft}`;

    if (secondsLeft === 0) {
      clearInterval(intervalId);
      countdownEl.textContent = 'Подія почалася!';
      countdownButtonEl.disabled = false;
    }
  }, 1000);
});
