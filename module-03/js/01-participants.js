/**
 * Рішення для ментора: «Останній учасник»
 *
 * Поясніть, що індексація починається з 0, тому останній індекс — length - 1.
 * Зміна елемента не змінює довжину масиву. Масив оголошений через const,
 * але його елементи можна змінювати: заборонено лише присвоїти змінній інший масив.
 * Типова помилка — звернутися до participants[participants.length].
 */
const participants = ['Олена', 'Ігор', 'Максим', 'Анна'];
const firstParticipant = participants[0];
const lastIndex = participants.length - 1;
const lastParticipant = participants[lastIndex];
participants[1] = 'Марія';
console.log(firstParticipant);
console.log(lastParticipant);
console.log(participants);
console.log(participants.length);
