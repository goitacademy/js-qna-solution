// Promise.race повертає результат першого виконаного промісу.
// Promise.all очікує завершення всіх переданих промісів.

const horses = [
  { id: 1, name: 'Блискавка' },
  { id: 2, name: 'Комета' },
  { id: 3, name: 'Вітер' },
];

const betSelectEl = document.querySelector('.js-bet-select');
const raceButtonEl = document.querySelector('.js-race-button');
const raceStatusEl = document.querySelector('.js-race-status');
const raceResultEl = document.querySelector('.js-race-result');

function runHorse(horse) {
  const delay = 1000 + Math.random() * 3000;

  return new Promise(resolve => {
    setTimeout(() => resolve(horse), delay);
  });
}

function createHorseOptions(items) {
  return items
    .map(horse => `<option value="${horse.id}">${horse.name}</option>`)
    .join('');
}

betSelectEl.innerHTML = createHorseOptions(horses);

raceButtonEl.addEventListener('click', () => {
  const selectedHorseId = Number(betSelectEl.value);
  const racePromises = horses.map(runHorse);

  raceButtonEl.disabled = true;
  raceStatusEl.textContent = 'Коні стартували!';
  raceResultEl.textContent = '';

  Promise.race(racePromises).then(winner => {
    const betWon = winner.id === selectedHorseId;

    raceResultEl.textContent = betWon
      ? `Переміг ${winner.name}. Ваша ставка зіграла!`
      : `Переміг ${winner.name}. Цього разу ставка не зіграла.`;
  });

  Promise.all(racePromises).then(() => {
    raceStatusEl.textContent = 'Заїзд завершено';
    raceButtonEl.disabled = false;
  });
});
