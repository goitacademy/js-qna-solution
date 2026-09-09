const totalItems = 137;
const boxCapacity = 12;
const fullBoxes = Math.floor(totalItems / boxCapacity);
const remainingItems = totalItems % boxCapacity;
let itemsAfterDelivery = totalItems;
itemsAfterDelivery += 7;

console.log(fullBoxes);
console.log(remainingItems);
console.log(itemsAfterDelivery);
