// У підсумковій задачі об'єднаємо клас, методи та наслідування.

class Course {
  constructor(title, lessons) {
    this.title = title;
    this.lessons = lessons;
  }

  getInfo() {
    return `${this.title}: ${this.lessons} уроків`;
  }
}

class OnlineCourse extends Course {
  constructor(title, lessons, platform) {
    super(title, lessons);
    this.platform = platform;
  }

  start() {
    return `Курс ${this.title} запущено на ${this.platform}`;
  }

  getInfo() {
    return `${super.getInfo()}, платформа: ${this.platform}`;
  }
}

const course = new OnlineCourse('JavaScript', 12, 'Meet');
console.log(course.getInfo()); // 'JavaScript: 12 уроків, платформа: Meet'
console.log(course.start()); // 'Курс JavaScript запущено на Meet'
