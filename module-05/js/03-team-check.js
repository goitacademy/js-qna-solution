/**
 * Рішення для ментора: «Перевірка команди»
 *
 * find() повертає перший збіг або undefined. every() вимагає true від усіх
 * елементів, some() — хоча б від одного. Для запуску проєкту обидві загальні
 * умови поєднуємо через &&.
 */
const team = [
  { email: 'lead@mail.com', role: 'lead', isActive: true },
  { email: 'dev@mail.com', role: 'developer', isActive: true },
  { email: 'qa@mail.com', role: 'qa', isActive: true },
];

const findMemberByEmail = (members, email) =>
  members.find(member => member.email === email);

const canStartProject = members =>
  members.every(member => member.isActive) &&
  members.some(member => member.role === 'lead');

console.log(findMemberByEmail(team, 'dev@mail.com'));
console.log(canStartProject(team));
