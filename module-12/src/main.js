import { getProductsByQuery } from './js/products-api.js';

const formEl = document.querySelector('.search-form');
const loaderEl = document.querySelector('.loader');
const messageEl = document.querySelector('.message');
const productListEl = document.querySelector('.product-list');
const loadMoreButtonEl = document.querySelector('.load-more');

let currentQuery = '';
let currentPage = 1;
let loadedProducts = 0;

formEl.addEventListener('submit', handleSearch);
loadMoreButtonEl.addEventListener('click', handleLoadMore);

async function handleSearch(event) {
  event.preventDefault();

  const query = event.currentTarget.elements.query.value.trim();

  if (query === '') {
    messageEl.textContent = 'Введіть назву товару';
    return;
  }

  currentQuery = query;
  currentPage = 1;
  loadedProducts = 0;

  clearResults();
  hideLoadMoreButton();
  await loadProducts();
}

async function handleLoadMore() {
  const productsAdded = await loadProducts();

  if (productsAdded) {
    scrollAfterLoading();
  }
}

async function loadProducts() {
  showLoader();
  hideLoadMoreButton();
  messageEl.textContent = '';

  try {
    const data = await getProductsByQuery(currentQuery, currentPage);

    if (data.products.length === 0 && currentPage === 1) {
      messageEl.textContent = 'Товарів за вашим запитом не знайдено';
      return false;
    }

    productListEl.insertAdjacentHTML(
      'beforeend',
      createProductsMarkup(data.products)
    );

    loadedProducts += data.products.length;
    currentPage += 1;

    if (loadedProducts < data.total) {
      showLoadMoreButton();
    } else {
      messageEl.textContent = 'Ви переглянули всі результати пошуку';
    }

    return data.products.length > 0;
  } catch (error) {
    messageEl.textContent =
      'Не вдалося завантажити товари. Спробуйте ще раз';

    if (loadedProducts > 0) {
      showLoadMoreButton();
    }

    return false;
  } finally {
    hideLoader();
  }
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

function showLoadMoreButton() {
  loadMoreButtonEl.classList.remove('is-hidden');
}

function hideLoadMoreButton() {
  loadMoreButtonEl.classList.add('is-hidden');
}

function scrollAfterLoading() {
  const productCardEl = document.querySelector('.product-card');

  if (productCardEl === null) {
    return;
  }

  const cardHeight = productCardEl.getBoundingClientRect().height;

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
