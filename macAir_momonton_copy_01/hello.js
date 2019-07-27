const helloForm = document.querySelector(".js-hello");
const helloInput = helloForm.querySelector("input");
const helloText = document.querySelector("h4");

const USER_LS = "submitName";
const SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const userName = helloInput.value;
  paintName(userName);
}

function askName() {
  helloForm.classList.add(SHOWING_CN);
  helloForm.addEventListener("submit", handleSubmit);
}

function paintName(text) {
  helloForm.classList.remove(SHOWING_CN);
  helloText.classList.add(SHOWING_CN);
  helloText.innerText = `Hello ${text}`;
  saveName(text);
}

function loadName() {
  const currentName = localStorage.getItem(USER_LS);
  if (currentName === null) {
    askName();
  } else {
    paintName(currentName);
  }
}

function init() {
  loadName();
}

init();
