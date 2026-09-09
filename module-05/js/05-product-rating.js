/**
 * Рішення для ментора: «Рейтинг товарів»
 *
 * Кожен метод передає результат наступному. filter() залишає доступні товари,
 * toSorted() повертає відсортовану копію, а map() змінює форму даних.
 * b.rating - a.rating задає спадний числовий порядок. На відміну від sort(),
 * toSorted() не змінює масив, на якому викликаний.
 */
const products = [
  { name: 'Mouse', rating: 4.5, stock: 3 },
  { name: 'Monitor', rating: 4.9, stock: 0 },
  { name: 'Keyboard', rating: 4.8, stock: 7 },
  { name: 'Cable', rating: 4.1, stock: 12 },
];

const getAvailableProductLabels = products =>
  products
    .filter(product => product.stock > 0)
    .toSorted((a, b) => b.rating - a.rating)
    .map(product => `${product.name} — ${product.rating}`);

console.log(getAvailableProductLabels(products));
