/**
 * Рішення для ментора: «Унікальні замовлення»
 *
 * concat() повертає новий масив і не змінює аргументи. Під час обходу
 * додаємо номер лише тоді, коли його ще немає в uniqueOrders.
 * Порядок першої появи зберігається. Типова помилка — перевіряти includes()
 * в об’єднаному масиві, де значення завжди вже присутнє.
 */
function mergeUniqueOrders(firstOrders, secondOrders) {
  const allOrders = firstOrders.concat(secondOrders);
  const uniqueOrders = [];
  for (const order of allOrders) {
    if (!uniqueOrders.includes(order)) {
      uniqueOrders.push(order);
    }
  }
  return uniqueOrders;
}
const morningOrders = [101, 102, 103];
const eveningOrders = [103, 104, 101, 105];
console.log(mergeUniqueOrders(morningOrders, eveningOrders));
