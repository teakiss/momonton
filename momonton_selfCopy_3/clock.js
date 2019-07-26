const clockForm = document.querySelector(".js-clock");
const clockTitle = document.querySelector("h1");

function loadClock() {
  const date = new Date;
  const hours = date.getHours();
  const minuts = date.getMinutes();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minuts < 10 ? `0${minuts}` : minuts}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

function init() {
  loadClock();
  setInterval(loadClock, 1000);
};

init();