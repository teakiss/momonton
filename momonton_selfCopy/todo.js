const todoForm = document.querySelector(".js-toDoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".js-toDoList")

const TODOS_LS = "todos-self1";
let todoArray = [];

function deleteTodo() {
  const findBtn = event.target;
  const delList = findBtn.parentNode;
  todoList.removeChild(delList);

  const clearN = todoArray.filter(function(dd) {
    return dd.id !== parseInt(delList.id);
  });
  todoArray = clearN;
  saveTodo();
}
function saveTodo() {
  localStorage.setItem(TODOS_LS, JSON.stringify(todoArray));
};

function paintTodo(text) {
  const list = document.createElement("li");
  const btn = document.createElement("button");
  const span = document.createElement("span");
  const newId = todoArray.length +1;
  btn.innerText = "😆";
  btn.addEventListener("click", deleteTodo);
  span.innerText = text;
  list.appendChild(btn);
  list.appendChild(span);
  todoList.appendChild(list);
  list.id = newId
  const todoObj = {
    text: text,
    id: newId
  };
  todoArray.push(todoObj);
  saveTodo();
}


function handleSubmit(event) {
  event.preventDefault();
  const submitTodo = todoInput.value;
  paintTodo(submitTodo);
  saveTodo();
  todoInput.value = "";
};

function loadTodo() {
  const currentValue = localStorage.getItem(TODOS_LS);
  if (currentValue !== null) {
    const parseTodos = JSON.parse(currentValue);
    parseTodos.forEach(function(ggg) {
      paintTodo(ggg.text);
    });
  }
};

function init() {
loadTodo();
todoForm.addEventListener("submit", handleSubmit);
};

init();