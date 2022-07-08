const decrementBtn = document.querySelector('[data-action="decrement"]');

const value = document.querySelector("#value");

const incrementBtn = document.querySelector('[ data-action="increment"]');

let counterValue = 0;

decrementBtn.addEventListener("click", handleDecrementClick);

function handleDecrementClick() {
  decrementBtn.addEventListener("click", () => {
    counterValue -= 1;
    initialValue();
  });
}

incrementBtn.addEventListener("click", handleIncrementClick);

function handleIncrementClick() {
  incrementBtn.addEventListener("click", () => {
    counterValue += 1;
    initialValue();
  });
}

function initialValue() {
  value.textContent = counterValue;
}
