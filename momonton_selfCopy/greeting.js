const form = document.querySelector(".js-form");
const input = document.querySelector("input");
const greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text)
};

function handleSubmit(event) { //이름 제출되면
    //이벤트 기본기능을 없애고
    //인풋에 들어온 밸류를
    //pintGreeting에 변수로 보내고
    //로컬스토리지에 저장한다.
  event.preventDefault(); 
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
};

function askName() { //이름을 물어보고 제출이 이루어지면 handleSubmit 함수실행
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
};

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
};

function loadName() {
  const currentName = localStorage.getItem(USER_LS);
  if (currentName === null) {
    askName();
  } else {
    paintGreeting(currentName);
  }
};

function init() {
  loadName();
};

init();