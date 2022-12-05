const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputName.addEventListener("input", onInput);

function onInput(event) {
    const { value } = event.currentTarget;
    if (value) {
        outputName.textContent = value;
    } else {outputName.textContent = "Anonymous"}
}
