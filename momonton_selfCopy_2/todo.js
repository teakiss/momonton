const todoForm = document.querySelector(".js-todoForm")
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".js-todoList");

const TODO_LS = "toDos-self2"

let todoArray = [];

function deleteTodo() {
//클릭이벤트 만들어서 클릭되면 html에서 지우고, 
//투두 어레이 = 리스트 해서 동기화
  const lookBtn = event.target;
  const list = lookBtn.parentNode;
  todoList.removeChild(list);

  const clear3 = todoArray.filter(function(tototo) {
    return tototo.id !== parseInt(list.id);
  });
  todoArray = clear3;
  saveTodo();
};

function saveTodo() {
    localStorage.setItem(TODO_LS, JSON.stringify(todoArray));
};

function paintTodo(someting) {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    const span = document.createElement("span");
    const newId = todoArray.length + 1;
    btn.innerText = "🥶";
    btn.addEventListener("click", deleteTodo);
    span.innerText = someting;
    li.appendChild(btn);
    li.appendChild(span);
    todoList.appendChild(li);
    li.id = newId
  const todoObj = {
      text: someting,
      id: newId
  }
  todoArray.push(todoObj);
  saveTodo();
};

function handleSubmit(event) {
  //인풋이 제출되면
  //evet 기본기능을 막고
  //들어온 값을 변수에 넣어서
  //paintTodo로 보내고, 인풋 폼은 지운다
  event.preventDefault();
  const submitTodo = todoInput.value;  
  paintTodo(submitTodo);
  todoInput.value = "";
};

function loadTodo() {
//투두가 있으면 보여주고, 없으면...아무것도 일어나지 않아
  const currentValue = localStorage.getItem(TODO_LS);
  if (currentValue !== null) {
    const parseTodo = JSON.parse(currentValue);
    parseTodo.forEach(function(abc) {
      paintTodo(abc.text); 
    });
  }
};

function init() {
loadTodo();
todoForm.addEventListener("submit", handleSubmit);
};

init();