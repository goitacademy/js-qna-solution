const firstPrice = 899;
const secondPrice = 950;
const thirdPrice = 1049;
const minPrice = Math.min(firstPrice, secondPrice, thirdPrice);
const maxPrice = Math.max(firstPrice, secondPrice, thirdPrice);
const difference = maxPrice - minPrice;
const averagePrice = Math.round((firstPrice + secondPrice + thirdPrice) / 3);

console.log(minPrice);
console.log(maxPrice);
console.log(difference);
console.log(averagePrice);
