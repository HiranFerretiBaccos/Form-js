const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (nameInput.value === "") {
    alert("Por favor, preencha o seu nome");
    return;
  }

  if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
    alert("Por favor, preencha o seu e-mail");
    return;
  }

  if (!validatePassword(passwordInput.value, 8)) {
    alert("A senha precisa ter no mínimo 8 dígitos");
    return;
  }

  if (jobSelect.value === "") {
    alert("Por favor, selecione a sua situação");
    return;
  }

  if (messageTextarea.value === "") {
    alert("Por favor, escreva uma mensagem");
    return;
  }

  form.submit();
});

function isEmailValid(email) {
  const emailRegex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-z]{2,}$/);

  if (emailRegex.test(email)) {
    return true;
  }
  return false;
}

function validatePassword(password, minDigits) {
  if (password.length >= minDigits) {
    return true;
  }
  return false;
}
