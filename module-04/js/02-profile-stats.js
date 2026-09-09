/**
 * Рішення для ментора: «Статистика профілю»
 *
 * Object.keys() і Object.values() повертають нові масиви. Їхня довжина
 * відповідає кількості власних перелічуваних властивостей. join() формує рядок,
 * не змінюючи масив. Запитайте, чому for...in тут був би довшим.
 */
function getProfileStats(profile) {
  const keys = Object.keys(profile);
  const values = Object.values(profile);
  return {
    count: keys.length,
    fields: keys.join(', '),
    data: values.join(' | '),
  };
}
console.log(getProfileStats({ name: 'Олена', age: 24, city: 'Львів' }));
