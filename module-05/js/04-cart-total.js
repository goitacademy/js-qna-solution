/**
 * Рішення для ментора: «Загальна вартість»
 *
 * total — акумулятор, item — поточний товар. Колбек повертає нове значення
 * акумулятора для наступної ітерації. Нуль потрібен як коректна стартова сума,
 * особливо для порожнього масиву.
 */
const cart = [
  { name: 'Keyboard', price: 1800, quantity: 2 },
  { name: 'Mouse', price: 900, quantity: 1 },
  { name: 'Cable', price: 250, quantity: 3 },
];

const calcCartTotal = cart =>
  cart.reduce((total, item) => total + item.price * item.quantity, 0);

console.log(calcCartTotal(cart));
