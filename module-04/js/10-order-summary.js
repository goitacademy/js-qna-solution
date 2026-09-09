function createOrderSummary(customer, ...items) {
  let total = 0;
  for (const item of items) {
    total += item.price * item.quantity;
  }

  return { customer, count: items.length, total };
}
console.log(
  createOrderSummary(
    'Оля',
    { price: 100, quantity: 2 },
    { price: 50, quantity: 1 }
  )
);
