const printOrderIds = orders =>
  orders.forEach(order => console.log(`Замовлення: ${order.id}`));
printOrderIds([{ id: 10 }, { id: 11 }]);
printOrderIds([]);
