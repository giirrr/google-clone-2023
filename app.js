const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginBwutton = loginForm.querySelector("button");

function onLoginBtnClick() {
  const username = loginInput.value;
  console.log(username);
  //   if (username === "") {
  //     alert("Please write your name");
  //   } else if (username.length > 15) {
  //     alert("Your name is too long.  ");
  //   }
}
loginBwutton.addEventListener("click", onLoginBtnClick);
