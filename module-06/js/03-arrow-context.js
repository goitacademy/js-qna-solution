// Стрілкова функція не створює власний this, а бере його із зовнішньої функції.

const user = {
  name: 'Олена',

  createGreeting() {
    return () => `Привіт, ${this.name}!`;
  },
};

const greetUser = user.createGreeting();
console.log(greetUser()); // "Привіт, Олена!"
