
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
