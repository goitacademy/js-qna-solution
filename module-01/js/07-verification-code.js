const minCode = 100000;
const maxCode = 999999;
const verificationCode = Math.floor(
  Math.random() * (maxCode - minCode + 1),
) + minCode;

console.log(verificationCode);
console.log(typeof verificationCode);
