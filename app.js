const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginBwutton = loginForm.querySelector("button");

function onLoginBtnClick() {
  console.log(loginInput.value);
}
loginBwutton.addEventListener("click", onLoginBtnClick);
