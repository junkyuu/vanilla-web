const form = document.getElementById("form");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

function checkLength(inputs) {
    inputs.forEach(input => {
        if(input.value.length > 0) {
            input.className = "inputSuccess";
        } else {
            input.className = "inputFail";
        }
    })
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    checkLength([userName, email, password, confirmPassword]);
})