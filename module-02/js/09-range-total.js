const min = 5;
const max = 20;
let total = 0;
for (let number = min; number <= max; number += 1) {
  if (number % 3 === 0) total += number;
}
console.log(total);
