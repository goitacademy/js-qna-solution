/**
 * Рішення для ментора: «Пошук товару»
 *
 * Нормалізуємо обидві сторони порівняння. return усередині циклу завершує
 * функцію одразу після збігу; null повертається лише після повного перебору.
 * Типова помилка — розмістити return null усередині циклу.
 */
function findProduct(products, productName) {
  const normalizedName = productName.toLowerCase();
  for (const product of products) {
    if (product.name.toLowerCase() === normalizedName) {
      return product;
    }
  }
  return null;
}
const products = [
  { name: 'Keyboard', price: 1800 },
  { name: 'Monitor', price: 9200 },
  { name: 'Mouse', price: 900 },
];
console.log(findProduct(products, 'mONitor'));
