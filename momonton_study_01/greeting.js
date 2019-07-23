const form = document.querySelector(".js-form"), 
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greeting");
//These are making const to change html

const USER_LS = "curruntUser", //
  SHOWING_CN = "showing";

//these are change CSS

function saveName(text) {
  localStorage.setItem(USER_LS, text);
};

function handleSubmit(event) {
  event.preventDefault();  //event가 가지고있는 기본동작을 막는다
  const currenValue = input.value;
  painGreeting(currenValue);
  saveName(currenValue);
};                      

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
};

function painGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
};

function loadName() {
  const curruntUser = localStorage.getItem(USER_LS);
  if (curruntUser === null) {
    askForName();
  } else {
      painGreeting(curruntUser);
  }
};


function init() {
 loadName();
};

init();