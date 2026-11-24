const toggleEl = document.querySelector('.js-toggle');
const detailsEl = document.querySelector('.js-details');

toggleEl.addEventListener('click', () => {
  const isHidden = detailsEl.style.display === 'none';

  detailsEl.style.display = isHidden ? 'block' : 'none';
  toggleEl.textContent = isHidden ? 'Сховати деталі' : 'Показати деталі';
});
