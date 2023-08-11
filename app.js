const h1 = document.querySelector(".hello:first-child h1");

function handleTitleClick() {
  h1.style.color = "tomato";
}
function handleMouseEnter() {
  h1.innerText = "mouse is here!";
}
function handleMouseLeave() {
  h1.innerText = "mouse is gone!";
}

function handleResize() {
  document.body.style.backgroundColor = "yellow";
}
function handleWindowCopy() {
  alert("copier!");
}

function handleWindowOffline() {
  alert("SOS no WIFI");
}
function handleWindowOnline() {
  alert("ALL GOOOD");
}

h1.onclick = handleTitleClick;
h1.onmouseenter = handleMouseEnter;
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
