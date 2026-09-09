/**
 * Рішення для ментора: «Список тегів»
 *
 * split(",") створює масив за роздільником, push() змінює цей масив,
 * а join(" | ") повертає новий рядок. Акцентуйте, що методи отримують
 * різні типи результатів. Типова помилка — пропустити аргумент join().
 */
const tagsString = 'html,css,git';
const tags = tagsString.split(',');
tags.push('javascript');
const formattedTags = tags.join(' | ');
console.log(formattedTags);
