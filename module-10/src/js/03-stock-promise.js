// Promise повідомляє про успішне завершення через resolve,
// а про помилку — через reject.

const product = {
  name: 'Бездротові навушники',
  quantity: 3,
};

const stockButtonEl = document.querySelector('.js-stock-button');
const stockResultEl = document.querySelector('.js-stock-result');

function checkStock(product, requestedQuantity) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (product.quantity >= requestedQuantity) {
        resolve('Замовлення можна оформити');
      } else {
        reject(new Error('Недостатньо товару'));
      }
    }, 1000);
  });
}

stockButtonEl.addEventListener('click', () => {
  stockResultEl.textContent = 'Перевіряємо залишок…';

  checkStock(product, 2)
    .then(message => {
      stockResultEl.textContent = message;
    })
    .catch(error => {
      stockResultEl.textContent = error.message;
    });
});
