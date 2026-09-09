const previewInputEl = document.querySelector('.js-preview-input');
const previewEl = document.querySelector('.js-preview');
previewInputEl.addEventListener('input', event => {
  previewEl.textContent = event.currentTarget.value || 'Тут зʼявиться текст';
});
