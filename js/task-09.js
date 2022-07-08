function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body");
const spanEl = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");

changeColorBtn.addEventListener("click", onEventColorBtn);
function onEventColorBtn() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = getRandomHexColor();
}
