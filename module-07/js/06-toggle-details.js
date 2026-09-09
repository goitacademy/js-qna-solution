const toggleEl = document.querySelector('.js-toggle');
const detailsEl = document.querySelector('.js-details');

toggleEl.addEventListener('click', () => {
  detailsEl.hidden = !detailsEl.hidden;
  toggleEl.textContent = detailsEl.hidden
    ? 'Показати деталі'
    : 'Сховати деталі';
});
