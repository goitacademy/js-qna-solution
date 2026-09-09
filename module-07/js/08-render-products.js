const items = [
  { name: 'Кава', price: 240 },
  { name: 'Чай', price: 160 },
];
const productsEl = document.querySelector('.js-products');
const productElements = items.map(item => {
  const itemEl = document.createElement('li');
  itemEl.textContent = `${item.name} — ${item.price} грн`;
  return itemEl;
});
productsEl.append(...productElements);
