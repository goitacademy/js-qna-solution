// Список у розмітці має відповідати даним у колекції orders.
// Після зміни колекції функція renderOrders повторно створює список.

let orders = [
  { id: 1, product: 'Навушники' },
  { id: 2, product: 'Клавіатура' },
  { id: 3, product: 'Миша' },
];

const ordersEl = document.querySelector('.js-orders');

function createOrderMarkup(order) {
  return `
    <li>
      ${order.product}
      <button type="button" data-order-id="${order.id}">Видалити</button>
    </li>
  `;
}

function renderOrders(items) {
  ordersEl.innerHTML = items.map(createOrderMarkup).join('');

  const removeButtons = ordersEl.querySelectorAll('[data-order-id]');

  removeButtons.forEach(button => {
    button.addEventListener('click', handleRemoveOrder);
  });
}

function removeOrder(items, orderId) {
  return items.filter(order => order.id !== orderId);
}

function handleRemoveOrder(event) {
  const orderId = Number(event.currentTarget.dataset.orderId);

  orders = removeOrder(orders, orderId);
  renderOrders(orders);
}

renderOrders(orders);
