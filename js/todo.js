const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-List");

function paintToDo(newTodoapple) {
  const potato = document.createElement("li");
  const span = document.createElement("span");
  potato.appendChild(span);
  span.innerText = newTodoapple;
  toDoList.appendChild(potato);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
