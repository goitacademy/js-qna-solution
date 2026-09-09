const taskList = {
  tasks: [],
  add(text) {
    this.tasks.push({ text, done: false });
  },
  complete(index) {
    if (this.tasks[index]) this.tasks[index].done = true;
  },
  getPending() {
    const result = [];
    for (const task of this.tasks) {
      if (!task.done) {
        result.push(task.text);
      }
      return result;
    }
  },
};
taskList.add('JS');
taskList.add('DOM');
taskList.complete(0);
console.log(taskList.getPending());
