const product = { name: 'Навушники', price: 2400, available: true };
const containerEl = document.querySelector('.js-products');

const cardEl = document.createElement('article');
cardEl.classList.add('product-card');

const titleEl = document.createElement('h2');
titleEl.textContent = product.name;

const priceEl = document.createElement('p');
priceEl.textContent = `${product.price} грн`;

cardEl.append(titleEl, priceEl);
containerEl.append(cardEl);
