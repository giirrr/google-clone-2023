const title = document.querySelector(".hello:first-child h1");

function handTitleClick() {
  title.style.color = "tomato";
}
title.addEventListener("click", handTitleClick);
