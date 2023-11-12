 const loginBtn = document.getElementById("login-btn");
loginBtn.onclick = function () {
  const username = document.getElementById("username");
  const password = document.getElementById("password");

  const usernameError = document.getElementById("username-error");
  const passwordError = document.getElementById("password-error");
  const loginError = document.getElementById("login-error");
if (username.value === "") {
    usernameError.innerHTML = "Email uncorrect";
  } else {
    usernameError.innerHTML = "";
  }
  if (password.value === "") {
    passwordError.innerHTML = "Password uncorrect";
  } else {
    passwordError.innerHTML = "";
  }

  if (username.value !== "nguyentran4486@gmail.com" || password.value !== "26072005") {
    loginError.innerHTML = "Email or Password uncorrect";
  } else {
    loginError.innerHTML = "";
    window.location.href = "./index.html";
  }
};