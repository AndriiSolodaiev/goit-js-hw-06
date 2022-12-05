
const input = document.querySelector("#validation-input");

function onInput(event) {
    const { value } = event.currentTarget;
    if (value.length !== Number(input.dataset.length)) {
         input.classList.add(`invalid`);        
    } else {
        input.classList.replace(`invalid`, `valid`);
    }
}

input.addEventListener("input", onInput);