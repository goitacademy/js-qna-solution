function createSlug(title) {
  return title.toLowerCase().split(' ').join('-');
}
console.log(createSlug('Основи JavaScript'), createSlug('Масиви і цикли'));
