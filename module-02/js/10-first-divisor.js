function findFirstDivisor(number) {
  let divisor = null;
  for (let candidate = 2; candidate < number; candidate += 1) {
    if (number % candidate === 0) {
      divisor = candidate;
      break;
    }
  }
  return divisor;
}
console.log(findFirstDivisor(91));
console.log(findFirstDivisor(17));
