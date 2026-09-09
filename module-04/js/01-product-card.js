/**
 * Рішення для ментора: «Картка товару»
 *
 * Властивості об’єкта можна змінювати, навіть якщо змінна оголошена через const.
 * Крапка зручна для відомого імені, квадратні дужки — для імені зі змінної.
 * Для вкладеної властивості послідовно проходимо кожен рівень об’єкта.
 */
const product = {
  name: 'Desk lamp',
  price: 1200,
  stock: 12,
  dimensions: { width: 18, height: 25 },
};
const propertyName = 'name';
product.stock += 5;
product.dimensions.height = 30;
product.isAvailable = true;
const dynamicValue = product[propertyName];
console.log(
  product.stock,
  product.dimensions.height,
  product.isAvailable,
  dynamicValue
);
