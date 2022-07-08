const refs = {
  inputEl: document.querySelector("#font-size-control"),
  spanEl: document.querySelector("#text"),
};
console.log(refs);
refs.inputEl.addEventListener("input", onEventInputEl);
function onEventInputEl() {
  const fontSize = refs.inputEl.value;
  refs.spanEl.style.fontSize = `${fontSize}px`;
}
