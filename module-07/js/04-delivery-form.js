const formEl = document.querySelector('.js-delivery-form');
const summaryEl = document.querySelector('.js-summary');

formEl.addEventListener('submit', event => {
  event.preventDefault();
  const { name, city } = event.currentTarget.elements;
  const delivery = { name: name.value, city: city.value };

  summaryEl.textContent = `Одержувач: ${delivery.name}, місто: ${delivery.city}`;
});
