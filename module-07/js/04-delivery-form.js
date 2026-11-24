const formEl = document.querySelector('.js-delivery-form');
const summaryEl = document.querySelector('.js-summary');

formEl.addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const name = formData.get('name');
  const city = formData.get('city');

  const deliveryData = { name, city };

  // або
  // const deliveryData = {
  //   name: formData.get('name'),
  //   city: formData.get('city'),
  // };

  summaryEl.textContent = `Одержувач: ${deliveryData.name}, місто: ${deliveryData.city}`;
});
