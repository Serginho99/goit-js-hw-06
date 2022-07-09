const refs = {
  input: document.querySelector("#name-input"),
  title: document.querySelector("#name-output"),
};

const defaultUserName = "Anonymous";

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value.trim() === "") {
    refs.title.textContent = defaultUserName;
  } else {
    refs.title.textContent = event.currentTarget.value;
  }
}
