const counterValueSpan = document.querySelector("#value")

const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');

let counterValue = 0;
function onBtnIncrementClick() {
    counterValue += 1;
    counterValueSpan.textContent = counterValue;
}
function onBtnDecrementClick() {
    counterValue -= 1;
    counterValueSpan.textContent = counterValue;
}

btnDecrement.addEventListener("click", onBtnDecrementClick);
btnIncrement.addEventListener("click", onBtnIncrementClick);