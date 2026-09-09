const orderTotal = 1750;
let message = 'Звичайне замовлення';
if (orderTotal >= 1500) {
  message = 'До замовлення додано подарунок';
}
console.log(message);
