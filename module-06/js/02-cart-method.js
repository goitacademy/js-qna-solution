// Під час виклику методу через об'єкт this посилається на цей об'єкт.

const cart = {
  items: [
    { name: 'Навушники', price: 1200 },
    { name: 'Чохол', price: 350 },
    { name: 'Кабель', price: 180 },
  ],

  getTotal() {
    let total = 0;

    for (const item of this.items) {
      total += item.price;
    }

    return total;
  },
};

console.log(cart.getTotal()); // 1730
