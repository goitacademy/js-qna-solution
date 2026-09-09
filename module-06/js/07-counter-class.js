// Методи класу доступні всім екземплярам через прототип класу.

class Counter {
  constructor(value) {
    this.value = value;
  }

  increment() {
    this.value += 1;
  }

  decrement() {
    this.value -= 1;
  }

  getValue() {
    return this.value;
  }
}

const counter = new Counter(5);
counter.increment();
counter.decrement();
console.log(counter.getValue()); // 5
