/**
 * Рішення для ментора: «Банківський рахунок»
 *
 * this посилається на account, коли метод викликається через account.method().
 * withdraw спочатку перевіряє баланс і не допускає часткового списання.
 * Булеве повернення дозволяє коду зовні зрозуміти, чи виконано операцію.
 */
const account = {
  balance: 1000,
  deposit(amount) {
    this.balance += amount;
  },
  withdraw(amount) {
    if (amount > this.balance) {
      return false;
    }
    this.balance -= amount;
    return true;
  },
  getBalance() {
    return this.balance;
  },
};
account.deposit(500);
console.log(account.withdraw(1200));
console.log(account.getBalance());
console.log(account.withdraw(500));
