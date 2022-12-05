const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    
    const { email, password} = event.currentTarget.elements;
    
    if (!email.value || !password.value) {
        alert("Заповніть всі поля.")
    }
    else {
        console.log({ email: email.value, password: password.value })
        form.reset()
    }
}