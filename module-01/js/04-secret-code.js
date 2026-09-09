const invitation = 'JavaScript';
const firstSymbol = invitation[0];
const lastSymbol = invitation[invitation.length - 1];
const code = `${firstSymbol}${lastSymbol}${invitation.length}`;
const message = `Код запрошення: ${code}`;

console.log(invitation);
console.log(code);
console.log(message);
