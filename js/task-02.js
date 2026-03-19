const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const markup = ingredients.map(item => {
  const element = document.createElement('li');
  element.classList.add('item');
  element.textContent = item;
  return element;
});

list.append(...markup);
