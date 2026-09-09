const user = { name: 'Олена', email: 'olena@example.com' };
const { name: userName, email, role = 'guest' } = user;

console.log(userName);
console.log(email);
console.log(role);
