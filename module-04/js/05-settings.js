/**
 * Рішення для ментора: «Оновлення налаштувань»
 *
 * Властивості defaults і customSettings об’єднуються в новий об’єкт;
 * однакові ключі праворуч перезаписують попередні значення.
 */

function createSettings(defaults, customSettings) {
  let settings = Object.assign({}, defaults, customSettings);

  return settings;
}

const defaults = {
  theme: 'light',
  language: 'uk',
  notifications: true,
};

console.log(createSettings(defaults, { theme: 'dark', notifications: false }));
