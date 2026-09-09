const getInStock = products => products.filter(({ stock }) => stock > 0);

console.log(
  getInStock([
    { name: 'A', stock: 3 },
    { name: 'B', stock: 0 },
    { name: 'C', stock: 1 },
  ])
);
