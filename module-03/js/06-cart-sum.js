function calcTotal(prices) {
  let total = 0;
  for (const price of prices) total += price;
  return total;
}
console.log(calcTotal([120, 80, 300]), calcTotal([]), calcTotal([99]));
