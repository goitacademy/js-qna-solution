// Приватна властивість із # доступна лише всередині класу.

class Vault {
  #pin;

  constructor(pin) {
    this.#pin = pin;
  }

  #isValidPin(pin) {
    return typeof pin === 'string' && pin.length === 4;
  }

  checkPin(pin) {
    return pin === this.#pin;
  }

  changePin(currentPin, newPin) {
    if (!this.checkPin(currentPin) || !this.#isValidPin(newPin)) {
      return false;
    }

    this.#pin = newPin;
    return true;
  }
}

const vault = new Vault('4826');
console.log(vault.checkPin('4826')); // true
console.log(vault.changePin('4826', '1111')); // true
console.log(vault.checkPin('1111')); // true
