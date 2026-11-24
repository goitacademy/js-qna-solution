const modalEl = document.querySelector('.js-modal');
const openModalButtonEl = document.querySelector('.js-open-modal');
const closeModalButtonEl = document.querySelector('.js-close-modal');

function openModal() {
  modalEl.classList.add('is-open');
  document.addEventListener('keydown', handleKeydown);
}

function closeModal() {
  modalEl.classList.remove('is-open');
  document.removeEventListener('keydown', handleKeydown);
}

function handleKeydown(event) {
  if (event.code !== 'Escape') return;

  closeModal();
}

function handleClickBackdrop(event) {
  if (event.target === event.currentTarget) {
    closeModal();
  }
}

openModalButtonEl.addEventListener('click', openModal);
closeModalButtonEl.addEventListener('click', closeModal);
modalEl.addEventListener('click', handleClickBackdrop);
