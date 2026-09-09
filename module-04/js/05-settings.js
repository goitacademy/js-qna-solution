/**
 * Рішення для ментора: «Оновлення налаштувань»
 *
 * rest збирає додаткові об’єкти в масив. Spread створює поверхневу копію.
 * На кожній ітерації властивості settings і custom об’єднуються в новий об’єкт;
 * однакові ключі праворуч перезаписують попередні значення.
 */
function createSettings(defaults, ...customSettings) {
  let settings = { ...defaults };

  for (const custom of customSettings) {
    settings = { ...settings, ...custom };
  }

  return settings;
}

const defaults = {
  theme: 'light',
  language: 'uk',
  notifications: true,
};

console.log(
  createSettings(defaults, { theme: 'dark' }, { notifications: false })
);
