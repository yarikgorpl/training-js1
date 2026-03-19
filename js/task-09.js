function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const screen = document.querySelector('body');
const createColor = document.querySelector('.change-color');
const colorNumber = document.querySelector('.color');
createColor.addEventListener('click', onChangeColor);
function onChangeColor() {
  colorNumber.textContent = getRandomHexColor();
  screen.style.backgroundColor = colorNumber.textContent;
}
