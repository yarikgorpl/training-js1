const listEl = document.querySelector('#categories');
const categoriesQuantity = listEl.children.length;
console.log('Numbers of categories: ', categoriesQuantity);
[...listEl.children].forEach(item => {
  console.log('Category: ', `${item.firstElementChild.textContent}`);
  console.log('Elements: ', `${item.lastElementChild.children.length}`);
});
