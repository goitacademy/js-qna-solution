const items = [
  { name: 'Кава', price: 240 },
  { name: 'Чай', price: 160 },
];
const productsEl = document.querySelector('.js-products');

const productsMarkup = items
  .map(item => `<li>${item.name} — ${item.price} грн</li>`)
  .join('');

productsEl.insertAdjacentHTML('beforeend', productsMarkup);
