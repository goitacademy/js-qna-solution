const findOrder = (orders, id) => orders.find(order => order.id === id) || null;
const orders = [
  { id: 1, name: 'Keyboard', price: 1800, quantity: 2 },
  { id: 2, name: 'Mouse', price: 900, quantity: 1 },
  { id: 3, name: 'Cable', price: 250, quantity: 3 },
];
console.log(findOrder(orders, 2), findOrder(orders, 9));
