/*Створи функцію createBoxes(amount), яка приймає один параметр
 - число.
 Функція створює стільки <div>, скільки вказано в amount і 
 додає їх у div#boxes.

Розміри найпершого <div> - 30px на 30px.
Кожен елемент після першого повинен бути ширшим і вищим
 від попереднього на 10px.
Всі елементи повинні мати випадковий колір фону у форматі HEX.
 Використовуй готову функцію getRandomHexColor для отримання
  кольору.
  Створи функцію destroyBoxes(), яка очищає вміст div#boxes,
   у такий спосіб видаляючи всі створені елементи.*/

const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

createBtn.addEventListener('click', onCreate);
destroyBtn.addEventListener('click', destroyBoxes);

function onCreate() {
  const amount = Number(input.value);
  createBoxes(amount);
}

function createBoxes(amount) {
  boxes.innerHTML = '';
  let size = 30;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = '5px';

    fragment.appendChild(box);
    size += 10;
  }

  boxes.appendChild(fragment);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}
