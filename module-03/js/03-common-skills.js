/**
 * Рішення для ментора: «Спільні навички»
 *
 * for...of дає значення елемента, includes() перевіряє його наявність.
 * Результат створюється всередині функції, тому кожен виклик незалежний.
 * Початкові масиви лише читаються. Запитайте, чому тут зручніший for...of,
 * а не звичайний for з індексом.
 */
function getCommonSkills(firstSkills, secondSkills) {
  const commonSkills = [];
  for (const skill of firstSkills) {
    if (secondSkills.includes(skill)) {
      commonSkills.push(skill);
    }
  }
  return commonSkills;
}
console.log(getCommonSkills(['html', 'css', 'js'], ['js', 'git', 'css']));
