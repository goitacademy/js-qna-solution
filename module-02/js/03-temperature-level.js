function getTemperatureLevel(temperature) {
  if (temperature < 0) {
    return 'Мороз';
  } else if (temperature <= 15) {
    return 'Прохолодно';
  } else if (temperature <= 25) {
    return 'Тепло';
  } else {
    return 'Спекотно';
  }
}
console.log(getTemperatureLevel(-4));
console.log(getTemperatureLevel(12));
console.log(getTemperatureLevel(21));
console.log(getTemperatureLevel(31));
