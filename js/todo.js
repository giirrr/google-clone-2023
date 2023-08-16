const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-List");

const TODOS_KEY = "todos";
// Making Array
const toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

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
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// Line50 = shortcut, sameability
// function sayHello(item) {
//   console.log("this is the turn of ", item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  parsedToDos.forEach((item) => console.log("this si the turn of", item));
}
