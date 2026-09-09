// extends створює клас-нащадок, а super викликає конструктор батьківського класу.

class User {
  constructor(name) {
    this.name = name;
  }

  getInfo() {
    return `Користувач: ${this.name}`;
  }
}

class PremiumUser extends User {
  constructor(name, plan) {
    super(name);
    this.plan = plan;
  }

  getInfo() {
    return `${super.getInfo()}, план: ${this.plan}`;
  }
}

const user = new PremiumUser('Марія', 'Pro');
console.log(user.getInfo()); // "Користувач: Марія, план: Pro"
