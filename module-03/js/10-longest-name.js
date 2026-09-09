function findLongestName(names) {
  let longest = '';
  for (const name of names) if (name.length > longest.length) longest = name;
  return longest;
}
console.log(
  findLongestName(['Оля', 'Олександр', 'Максим']),
  findLongestName([])
);
