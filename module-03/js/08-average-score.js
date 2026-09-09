function averageScore() {
  if (arguments.length === 0) return 0;
  let total = 0;
  for (const score of arguments) total += score;
  return Math.round(total / arguments.length);
}
console.log(averageScore(8, 9, 10), averageScore(5), averageScore());
