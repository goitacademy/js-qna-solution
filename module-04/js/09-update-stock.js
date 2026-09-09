function updateStock(products, name, amount) {
  for (const product of products) {
    if (product.name.toLowerCase() === name.toLowerCase()) {
      product.stock += amount;
      return true;
    }
  }
  return false;
}
const products = [
  { name: 'Coffee', stock: 2 },
  { name: 'Milk Shake', stock: 4 },
  { name: 'Ice Cream', stock: 1 },
];

console.log(
  updateStock(products, 'coffee', 3),
  products,
  updateStock(products, 'tea', 2),
  products
);
