const form = document.querySelector(".login-form");

form.addEventListener("submit", handleEventFormEl);

function handleEventFormEl(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;
  if (email === "" || password === "") {
    alert("все поля должны быть заполнены.");
    return;
  }
  const formData = {
    email,
    password,
  };
  console.log(formData);

  //   const formData = new FormData(event.currentTarget);
  //   formData.forEach((value, name) => {
  //     console.log(value, name);
  //   });
  //   form.reset();
  event.currentTarget.reset();
}
