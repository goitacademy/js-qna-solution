// setTimeout запускає функцію один раз після заданої затримки.

const notificationButtonEl = document.querySelector('.js-notification-button');
const notificationEl = document.querySelector('.js-notification');

notificationButtonEl.addEventListener('click', () => {
  notificationEl.textContent = 'Зберігаємо дані…';
  notificationButtonEl.disabled = true;

  setTimeout(() => {
    notificationEl.textContent = 'Дані успішно збережено';
    notificationButtonEl.disabled = false;
  }, 2000);
});
