const messages = [
  'Ваше замовлення готове',
  'Нове повідомлення',
  'Замовлення доставлено',
];
const searchEl = document.querySelector('.js-search');
const messagesEl = document.querySelector('.js-messages');

const createMarkup = items => items.map(item => `<li>${item}</li>`).join('');

messagesEl.innerHTML = createMarkup(messages);

searchEl.addEventListener('input', event => {
  const query = event.currentTarget.value.trim().toLowerCase();
  const filteredMessages = messages.filter(message =>
    message.toLowerCase().includes(query)
  );

  messagesEl.innerHTML = createMarkup(filteredMessages);
});
