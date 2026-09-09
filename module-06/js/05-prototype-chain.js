// Object.create створює об'єкт, який успадковує властивості іншого об'єкта.

const vehicle = {
  category: 'Транспорт',
  getCategory() {
    return this.category;
  },
};

const electricScooter = Object.create(vehicle);
electricScooter.model = 'Volt X2';

console.log(electricScooter.model); // 'Volt X2'
console.log(electricScooter.getCategory()); // 'Транспорт'
console.log(Object.hasOwn(electricScooter, 'getCategory')); // false
