const calcCategoryTotal = (products, category) =>
  products
    .filter(product => product.category === category)
    .reduce((total, product) => total + product.price, 0);

const products = [
  { category: 'food', price: 100 },
  { category: 'food', price: 50 },
  { category: 'car', price: 200 },
  { category: 'car', price: 300 },
];

console.log(calcCategoryTotal(products, 'food'));
