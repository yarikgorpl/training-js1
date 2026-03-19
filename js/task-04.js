/*Створи змінну counterValue, в якій буде зберігатися
 поточне значення лічильника та ініціалізуй її 
 значенням 0.
Додай слухачів кліків до кнопок, 
всередині яких збільшуй або зменшуй значення лічильника.
Оновлюй інтерфейс новим значенням змінної counterValue.*/
const counter = document.querySelector('#value');
const plusBtn = document.querySelector('button[data-action="increment"]');
const minusBtn = document.querySelector('button[data-action="decrement"]');
let counterValue = 0;
plusBtn.addEventListener('click', onClickIncrement);
minusBtn.addEventListener('click', onClickDecrement);
function onClickIncrement() {
  counterValue += 1;
  counter.textContent = counterValue;
}
function onClickDecrement() {
  counterValue -= 1;
  counter.textContent = counterValue;
}
