const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-List");

function deleteToDo(event) {
  console.dir(event.target.parentElement.innerText);
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newToA) {
  const li1 = document.createElement("li");
  const span1 = document.createElement("span");
  span1.innerText = newToA;
  const button1 = document.createElement("button");
  button1.innerText = "❌";
  button1.addEventListener("click", deleteToDo);
  li1.appendChild(span1);
  li1.appendChild(button1);
  toDoList.appendChild(li1);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
