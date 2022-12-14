const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const itemEl = document.querySelector("ul");
const newArray = [];

for (let ingredient of ingredients) {
  
  const liEl = document.createElement(`li`);
  liEl.textContent = ingredient;
  liEl.classList.add(`item`);
  newArray.push(liEl);
}

itemEl.append(...newArray);

console.log(newArray);
console.log(itemEl);

















// Напиши скрипт, который для каждого элемента 
// массива ingredients:

// *Создаст отдельный элемент < li >. 
// Обзательно используй метод document.createElement().
// * Добавит название ингредиента как его 
// текстовое содержимое.
// *Добавит элементу класс item.
// * После чего вставит все < li > за одну операцию в список 
// ul#ingredients