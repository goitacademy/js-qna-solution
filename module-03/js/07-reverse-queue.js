function reverseQueue(queue) {
  const result = [];
  for (let i = queue.length - 1; i >= 0; i -= 1) {
    result.push(queue[i]);
  }

  return result;
}
console.log(reverseQueue(['А', 'Б', 'В']), reverseQueue([]));
