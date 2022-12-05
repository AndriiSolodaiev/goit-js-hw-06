// Напиши скрипт створення і очищення колекції елементів. 
// Користувач вводить кількість елементів в input і натискає кнопку Створити,
//   після чого рендериться колекція.Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число. 
// Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
const controls = document.querySelector("#controls");
const input = controls.children[0];
const createBtn = controls.children[1];
const destroyBtn = controls.children[2];
const boxes =  document.querySelector("#boxes")
let amount = 0;

input.addEventListener("input", onInput);
function onInput(event) {
  amount = Number(event.currentTarget.value)
}


createBtn.addEventListener("click", onCreateBtnClick)
function onCreateBtnClick() {
  const listToAdd = [];
  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement("div");

    box.style.width = `${30 + 10 * i}px`;
    box.style.height = `${30 + 10 * i}px`;
    box.style.backgroundColor = getRandomHexColor();

    listToAdd.push(box);
  }
  boxes.append(...listToAdd)
}


destroyBtn.addEventListener("click", onDestroyBtnClick);
function onDestroyBtnClick() {
  for (let elem of boxes.querySelectorAll('div')) {
    boxes.removeChild(elem)
  }
}
