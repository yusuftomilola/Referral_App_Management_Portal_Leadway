/*This is a is file*/
function togglePassword() {
    const passwordField = document.getElementById('password');
    const showPasswordText = document.querySelector('.show-password');
    
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        showPasswordText.textContent = 'HIDE';
    } else {
        passwordField.type = 'password';
        showPasswordText.textContent = 'SHOW';
    }
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === '' || password === '') {
        alert('Please fill in both fields.');
        event.preventDefault();
    }
});
