function registerUser(event) {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;


    setTimeout(function () {
        document.getElementById('message').innerHTML = 'User registered successfully!';
        document.getElementById('signupForm').reset();
    }, 1000);
}

function authenticateUser(event) {
    event.preventDefault();

    let email = document.getElementById('loginEmail').value;
    let password = document.getElementById('loginPassword').value;


    setTimeout(function () {
        document.getElementById('message').innerHTML = 'User authenticated successfully!';
        document.getElementById('loginForm').reset();
    }, 1000);
}

function toggleForm() {
    let authForms = document.getElementById('authForms').querySelectorAll('.authForm');
    authForms.forEach(function (form) {
        if (form.style.display === 'block') {
            form.style.display = 'none';
        } else {
            form.style.display = 'block';
        }
    });

}