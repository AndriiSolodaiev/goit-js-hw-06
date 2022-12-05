const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients")
let listToAppend = [];
for (let elem of ingredients) {
  const li = document.createElement("li");
  li.textContent = elem;
  li.classList.add("item");
  listToAppend.push(li)
}
list.append(...listToAppend)
