// Власні властивості належать самому об'єкту, а успадковані — його прототипу.

const settings = {
  language: 'uk',
  theme: 'dark',
};

function getOwnPropertyNames(object) {
  return Object.keys(object);
}

console.log(getOwnPropertyNames(settings)); // ['language', 'theme']
console.log(getOwnPropertyNames([])); // []
