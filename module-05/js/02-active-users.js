/**
 * Рішення для ментора: «Активні користувачі»
 *
 * filter() зберігає цілі об’єкти за умовою, map() бере з них лише email.
 * Обидва методи повертають нові масиви. Зверніть увагу на порядок методів:
 * після map() до email властивість isActive вже була б недоступна.
 */
const users = [
  { name: 'Олена', email: 'olena@mail.com', isActive: true },
  { name: 'Ігор', email: 'ihor@mail.com', isActive: false },
  { name: 'Анна', email: 'anna@mail.com', isActive: true },
];

const getActiveEmails = users =>
  users.filter(user => user.isActive).map(user => user.email);

console.log(getActiveEmails(users));
