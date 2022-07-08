const inputEl = document.querySelector("input");
const validEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onEventInputEl);

function onEventInputEl(event) {
  const validInput = Number(event.currentTarget.dataset.length);
  const userInput = event.currentTarget.value.length;
  if (validInput === userInput) {
    validEl.classList.add("valid");
    validEl.classList.remove("invalid");
  } else {
    validEl.classList.remove("valid");
    validEl.classList.add("invalid");
  }
}
