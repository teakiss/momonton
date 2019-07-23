const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos'; 

let todos = [];

function deleteToDo(){
  //id를 찾고싶어
 // .target : event에 있는건데  
 // console.dir(event.target) 에서 parentNode를 찾았고
 //==> console.log(event.target.parentNode); 하면 클릭한 아이디 찾을 수 있음
 //구글에서 delete child element mdn 고
 //
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  //clean todo하자
  //filter는 forEach같ㅇㅣ 각각의 아이템에 펑션을 적용시킨다
  //li에 없는 id인 todos를 체크하려고 한다
  const cleanToDos = todos.filter(function(toDo) {
    return toDo.id !== parseInt(li.id);
  });
  todos = cleanToDos;
  saveToDos();
};

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(todos));
};

function paintToDo(text) {
  // <li id="1">ahsdkhf</li>
  // 이런거 만들어 줄거야
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "😫";
  delBtn.addEventListener("click", deleteToDo);
  const span = document.createElement("span");
  const newId = todos.length+1;
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
  };
  todos.push(toDoObj);
  saveToDos();

};

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";

};

function loadToDos() {
  const loadedTodos = localStorage.getItem(TODOS_LS);
  if (loadedTodos !== null) {
    const parseToDos = JSON.parse(loadedTodos);
    parseToDos.forEach(function(toDo) {
      paintToDo(toDo.text);      
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit)
};

init();