const applyDiscount = (prices, percent) =>
  prices.map(price => Math.round(price * (1 - percent / 100)));
console.log(applyDiscount([100, 250], 20), applyDiscount([], 20));
