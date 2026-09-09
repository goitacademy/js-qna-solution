const balance = 800;
const payment = 950;
let message;
if (balance >= payment) {
  message = 'Оплату дозволено';
} else {
  message = 'Недостатньо коштів';
}
console.log(message);
