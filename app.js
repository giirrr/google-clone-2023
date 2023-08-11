const h1 = document.querySelector(".hello:first-child h1");

function handleTitleClick() {
  const clickedClass = "clicked";
  h1.classList.toggle(clickedClass);

  //******* classList.contain remove add ******
  //   if (h1.classList.contains(clickedClass)) {
  //     h1.classList.remove(clickedClass);
  //   } else {
  //     h1.classList.add(clickedClass);
  //   }
}
h1.addEventListener("click", handleTitleClick);
