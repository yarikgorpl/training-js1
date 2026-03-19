/*Напиши скрипт, який під час набору тексту в інпуті 
input#name-input (подія input), підставляє його поточне 
значення в span#name-output. Якщо інпут порожній, 
у спані повинен відображатися рядок "Anonymous"*/
const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', onChangeInput);

function onChangeInput(event) {
  const value = event.currentTarget.value.trim();
  output.textContent = value ? value : 'Anonymous';
}
