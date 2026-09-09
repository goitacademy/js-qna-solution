function getDeliveryMessage(option) {
  switch (option) {
    case 'pickup':
      return 'Самовивіз сьогодні';
    case 'courier':
      return 'Курʼєр доставить завтра';
    case 'post':
      return 'Відправимо поштою';
    default:
      return 'Уточніть спосіб доставки';
  }
}
console.log(getDeliveryMessage('courier'));
console.log(getDeliveryMessage('drone'));
