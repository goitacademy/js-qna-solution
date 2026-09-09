const sales = {
  week: [
    { label: 'Пн', value: 12 },
    { label: 'Вт', value: 19 },
    { label: 'Ср', value: 8 },
    { label: 'Чт', value: 15 },
    { label: 'Пт', value: 22 },
  ],
  month: [
    { label: '1 тиждень', value: 74 },
    { label: '2 тиждень', value: 91 },
    { label: '3 тиждень', value: 83 },
    { label: '4 тиждень', value: 108 },
  ],
};

const periodsEl = document.querySelector('.js-periods');
const canvasEl = document.querySelector('#sales-chart');
const summaryEl = document.querySelector('.js-chart-summary');

function getChartData(period) {
  const labels = sales[period].map(({ label }) => label);
  const values = sales[period].map(({ value }) => value);
  return { labels, values };
}

function calcTotal(values) {
  return values.reduce((total, value) => total + value, 0);
}

const { labels, values } = getChartData('week');
const salesChart = new Chart(canvasEl, {
  type: 'bar',
  data: {
    labels,
    datasets: [
      { label: 'Кількість продажів', data: values, backgroundColor: '#36a2eb' },
    ],
  },
  options: { scales: { y: { beginAtZero: true } } },
});

summaryEl.textContent = `Продажів за період: ${calcTotal(values)}`;

periodsEl.addEventListener('click', event => {
  if (event.target.nodeName !== 'BUTTON') return;

  const { period } = event.target.dataset;
  const { labels: newLabels, values: newValues } = getChartData(period);
  salesChart.data.labels = newLabels;
  salesChart.data.datasets[0].data = newValues;
  salesChart.update();

  const activeButtonEl = periodsEl.querySelector('.is-active');
  if (activeButtonEl) activeButtonEl.classList.remove('is-active');
  event.target.classList.add('is-active');
  summaryEl.textContent = `Продажів за період: ${calcTotal(newValues)}`;
});
