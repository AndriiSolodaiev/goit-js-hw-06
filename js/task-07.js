
const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

function onInput(event) {
    const { value } = event.currentTarget;
    text.style.fontSize = `${value}px`;
}

input.addEventListener("input", onInput);