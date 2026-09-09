const cardEl = document.querySelector('.js-card');
const buyButtonEl = document.querySelector('.js-buy');

cardEl.addEventListener('click', () => console.log('Відкриваємо товар'));
buyButtonEl.addEventListener('click', event => {
  event.stopPropagation();
  console.log('Товар додано в кошик');
});
