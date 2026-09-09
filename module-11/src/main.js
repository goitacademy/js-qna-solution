import { getProductsByQuery } from './js/products-api.js';

const formEl = document.querySelector('.search-form');
const loaderEl = document.querySelector('.loader');
const messageEl = document.querySelector('.message');
const productListEl = document.querySelector('.product-list');

formEl.addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault();

  const query = event.currentTarget.elements.query.value.trim();

  if (query === '') {
    messageEl.textContent = 'Введіть назву товару';
    return;
  }

  clearResults();
  showLoader();

  getProductsByQuery(query)
    .then(data => {
      if (data.products.length === 0) {
        messageEl.textContent = 'Товарів за вашим запитом не знайдено';
        return;
      }

      productListEl.innerHTML = createProductsMarkup(data.products);
    })
    .catch(() => {
      messageEl.textContent =
        'Не вдалося завантажити товари. Спробуйте ще раз';
    })
    .finally(() => {
      hideLoader();
    });
}

function createProductsMarkup(products) {
  return products
    .map(({ title, price, rating, thumbnail }) => {
      return `
        <li class="product-card">
          <img src="${thumbnail}" alt="${title}" />
          <div class="product-info">
            <h2>${title}</h2>
            <p>Ціна: $${price}</p>
            <p>Рейтинг: ${rating}</p>
          </div>
        </li>
      `;
    })
    .join('');
}

function clearResults() {
  productListEl.innerHTML = '';
  messageEl.textContent = '';
}

function showLoader() {
  loaderEl.classList.remove('is-hidden');
}

function hideLoader() {
  loaderEl.classList.add('is-hidden');
}
