function makeFullName(firstName, lastName) {
  console.log(1);
  return `${firstName} ${lastName}`;
}

function createWelcome(firstName, lastName) {
  console.log(2);
  const fullName = makeFullName(firstName, lastName);
  console.log(3);
  return `Вітаємо, ${fullName}!`;
}

console.log(createWelcome('Олена', 'Коваль'));
