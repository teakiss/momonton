const greetForm = document.querySelector(".js-form");
const greetInput = document.querySelector("input");
const greet = document.querySelector(".js-greeting");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function paintGreeting(text) {
  greetForm.classList.remove(SHOWING_CN);
  greet.classList.add(SHOWING_CN);
  greet.innerText = `Hello ${text}`;
}

function saveName(text) {
  localStorage.setItem("currentUser", text);
};

function handleSubmit(event){
  event.preventDefault();
  const submitName = greetInput.value;
  saveName(submitName);
  paintGreeting(submitName);
};

function askName() {
  greetForm.classList.add(SHOWING_CN);
  greetForm.addEventListener("submit", handleSubmit);
};

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askName();
  } else {
    paintGreeting(currentUser);
  }
};

function init() {
  loadName();
};

init();