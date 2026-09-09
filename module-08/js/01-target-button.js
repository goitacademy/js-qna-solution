const actionsEl = document.querySelector('.js-actions');

actionsEl.addEventListener('click', event => {
  if (event.target.nodeName !== 'BUTTON') return;
  console.log(event.target.dataset.action);
});
