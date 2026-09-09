// Клас описує шаблон, за яким можна створювати однотипні об'єкти.

class Book {
  constructor({ title, author }) {
    this.title = title;
    this.author = author;
  }
}

const book = new Book({ title: 'Місто', author: 'Валер’ян Підмогильний' });
console.log(book.title); // 'Місто'
console.log(book.author); // 'Валер’ян Підмогильний'
