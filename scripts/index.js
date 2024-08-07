// handle form submission
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "admin") {
      // Successful login
      window.location.href = "./layout/index.html";
    } else {
      // Failed login
      alert("Invalid! Both username & password is admin");
    }
  });
});

/*This is a is file*/
function togglePassword() {
  const passwordField = document.getElementById("password");
  const showPasswordText = document.querySelector(".show-password");

  if (passwordField.type === "password") {
    passwordField.type = "text";
    showPasswordText.textContent = "HIDE";
  } else {
    passwordField.type = "password";
    showPasswordText.textContent = "SHOW";
  }
}

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
      alert("Please fill in both fields.");
      event.preventDefault();
    }
  });
