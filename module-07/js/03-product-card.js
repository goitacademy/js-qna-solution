const product = { name: 'Навушники', price: 2400, available: true };
const containerEl = document.querySelector('.js-products');

const cardEl = document.createElement('article');
cardEl.classList.add('product-card');

const titleEl = document.createElement('h2');
titleEl.textContent = product.name;

const priceEl = document.createElement('p');
priceEl.textContent = `${product.price} грн`;

const availableEl = document.createElement('p');
availableEl.textContent = product.available ? 'В наявності' : 'Товар відсутній';

cardEl.append(titleEl, priceEl, availableEl);
containerEl.append(cardEl);
