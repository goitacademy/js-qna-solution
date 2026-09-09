import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const STORAGE_KEY = 'event-planner-items';

const formEl = document.querySelector('.event-form');
const eventListEl = document.querySelector('.event-list');
const dateInputEl = document.querySelector('.js-date-input');

let events = loadEvents(STORAGE_KEY);

const datePicker = flatpickr(dateInputEl, {
  enableTime: true,
  dateFormat: 'Y-m-d H:i',
  time_24hr: true,
  minDate: 'today',
});

renderEvents();

formEl.addEventListener('submit', handleFormSubmit);
eventListEl.addEventListener('click', handleDeleteClick);

function handleFormSubmit(event) {
  event.preventDefault();

  const title = event.currentTarget.elements.title.value.trim();
  const date = event.currentTarget.elements.date.value;

  if (title === '' || date === '') {
    alert('Заповніть назву та виберіть дату події');
    return;
  }

  const newEvent = {
    id: Date.now(),
    title,
    date,
  };

  events.push(newEvent);
  saveEvents(STORAGE_KEY, events);
  renderEvents();

  event.currentTarget.reset();
  datePicker.clear();
}

function handleDeleteClick(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  const eventId = Number(event.target.dataset.id);
  events = events.filter(item => item.id !== eventId);

  saveEvents(STORAGE_KEY, events);
  renderEvents();
}

function renderEvents() {
  eventListEl.innerHTML = createEventsMarkup(events);
}

function createEventsMarkup(items) {
  if (items.length === 0) {
    return '<li class="empty-message">Запланованих подій поки немає.</li>';
  }

  return items
    .map(({ id, title, date }) => {
      return `
        <li class="event-item">
          <div>
            <h3>${title}</h3>
            <p>${date}</p>
          </div>
          <button type="button" data-id="${id}">Видалити</button>
        </li>
      `;
    })
    .join('');
}

function loadEvents(key) {
  const savedEvents = localStorage.getItem(key);

  if (savedEvents === null) {
    return [];
  }

  try {
    return JSON.parse(savedEvents);
  } catch (error) {
    console.log('Не вдалося прочитати збережені події:', error);
    return [];
  }
}

function saveEvents(key, items) {
  const json = JSON.stringify(items);
  localStorage.setItem(key, json);
}
