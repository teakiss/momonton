const body = document.querySelector("body");

const imgs = 4;

function randomGeneration() {
  const num = Math.ceil(Math.random() * imgs);
  return num;
}

function loadImg(num) {
  const img = new image();
  img.src = `../imgs/${num}.jpg`;
  img.className = "bgImg";
  body.prepend(img);
}

function init() {
  const randomNum = randomGeneration();
  loadImg(randomNum);
}

init();
