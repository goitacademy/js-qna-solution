// У JavaScript значення this залежить від способу виклику функції.
// У звичайному виклику всередині ES-модуля this має значення undefined.

function showContext() {
  console.log('this у функції:', this);
}

console.log('this у модулі:', this);
showContext();
