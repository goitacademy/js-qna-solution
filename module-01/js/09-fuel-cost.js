function calcFuelCost(distance, consumption, fuelPrice) {
  const numericDistance = Number(distance);
  const numericConsumption = Number(consumption);
  const numericFuelPrice = Number(fuelPrice);
  const requiredFuel = numericDistance / 100 * numericConsumption;
  return Math.round(requiredFuel * numericFuelPrice);
}

console.log(calcFuelCost('250', 8, '60')); // 1200
console.log(calcFuelCost(100, '7.5', 60)); // 450
