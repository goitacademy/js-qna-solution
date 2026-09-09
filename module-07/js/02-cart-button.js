const cartButtonEl = document.querySelector('.js-cart');
const countEl = cartButtonEl.querySelector('span');

let counter = 0;
countEl.textContent = counter;

cartButtonEl.addEventListener('click', () => {
  counter += 1;
  countEl.textContent = counter;
});
