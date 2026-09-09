const menuEl = document.querySelector('.js-menu');

menuEl.addEventListener('click', event => {
  if (event.target.nodeName !== 'BUTTON') return;
  const activeEl = menuEl.querySelector('.is-active');
  if (activeEl) activeEl.classList.remove('is-active');
  event.target.classList.add('is-active');
});
