/**
 * Рішення для ментора: «Найвища ставка»
 *
 * arguments — псевдомасив доступний у звичайній функції. Початкове значення
 * highest беремо з першого аргументу, а цикл починаємо з індексу 1.
 */
function findHighestBid() {
  let highest = arguments[0];
  for (let i = 1; i < arguments.length; i += 1) {
    if (arguments[i] > highest) {
      highest = arguments[i];
    }
  }
  return highest;
}
console.log(findHighestBid(120, 700, 450, 310));
console.log(findHighestBid(42, 8, 16));
