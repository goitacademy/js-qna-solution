const price = '125.5';
const quantity = '3';
const concatenatedValue = price + quantity;
const numericTotal = Number(price) * Number(quantity);
const label = `${quantity} товари по ${price} грн`;

console.log(concatenatedValue, typeof concatenatedValue);
console.log(numericTotal, typeof numericTotal);
console.log(label, typeof label);
