//인풋창에 이름을 입력하면
//Hello name하고
//localstorage에 저장한다

const greetingForm = document.querySelector(".js-greetingForm");
const greetingInput = document.querySelector("input");
const helloName = document.querySelector(".js-hello");

const USER_LS = "user_3";
const SHOW_CN = "showing";

function saveName(name) {
  localStorage.setItem(USER_LS, name);
};

function handleSubmit(event) {
  event.preventDefault();
  const currentName = greetingInput.value;
  paintName(currentName)
  saveName(currentName);
};

function askName() {
  greetingForm.classList.add(SHOW_CN);
  greetingForm.addEventListener("submit", handleSubmit);
};

function paintName(text) {
  greetingForm.classList.remove(SHOW_CN);
  helloName.classList.add(SHOW_CN);
  helloName.innerText = `세번째야~~ ${text}`;
}

function loadName() {
    //스토리지에 이름이 있으면 paintName() 하고
    //없으면 askName()한다
  const submitName = localStorage.getItem(USER_LS);
  if (submitName === null) {
    askName();
  } else {
    paintName(submitName);
  }
};

function init() {
loadName();
};

init();