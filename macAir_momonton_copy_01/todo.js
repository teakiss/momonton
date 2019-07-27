const todoForm = document.querySelector(".js-todo");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".js-todoList");

const TODO_LS = "todoList";
let todoArray = [];

function deleteBtn() {
  const btn = event.target;
  const li = btn.parentNode;
  todoList.removeChild(li);

  const cleanTodo = todoArray.filter(function(aa) {
    return aa.id !== parseInt(li.id);
  });
  todoArray = cleanTodo;
  saveTodo();
}

function saveTodo() {
  localStorage.setItem(TODO_LS, JSON.stringify(todoArray));
}

function paintTodo(text) {
  const list = document.createElement("li");
  const btn = document.createElement("button");
  const span = document.createElement("span");
  btn.innerText = "😃";
  span.innerText = text;
  list.appendChild(btn);
  list.appendChild(span);
  todoList.appendChild(list);
  const newId = todoArray.length + 1;
  btn.addEventListener("click", deleteBtn);
  list.id = newId;
  const todoObj = {
    text: text,
    id: newId
  };
  todoArray.push(todoObj);
  saveTodo();
}

function loadTodo() {
  const currentTodo = localStorage.getItem(TODO_LS);
  if (currentTodo !== null) {
    const parseTodo = JSON.parse(currentTodo);
    parseTodo.forEach(function(aa) {
      paintTodo(aa.text);
    });
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const submitTodo = todoInput.value;
  paintTodo(submitTodo);
  todoInput.value = "";
}

function init() {
  loadTodo();
  todoForm.addEventListener("submit", handleSubmit);
}

init();
