const title = document.querySelector(".hello:first-child h1");

function handleTitleClick() {
  title.style.color = "tomato";
}
function handleMouseEnter() {
  title.innerText = "mouse is here!";
}
function handleMouseLeave() {
  title.innerText = "mouse is gone!";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
