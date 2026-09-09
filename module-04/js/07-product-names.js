function getProductNames(products) {
  const names = [];
  for (const product of products) names.push(product.name);
  return names;
}
console.log(
  getProductNames([{ name: 'Кава' }, { name: 'Чай' }]),
  getProductNames([])
);
