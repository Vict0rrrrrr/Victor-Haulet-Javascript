const themeButton = document.getElementById("theme");

function onClick() {
  document.body.classList.toggle("dark");
}

themeButton.addEventListener("click", onClick);

let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  let errorContainer = document.querySelector(".message-error");
  let errorList = document.querySelector(".message-error ul");

  errorList.innerHTML = "";
  errorContainer.classList.remove("visible");

  let email = document.querySelector("#email");

  if (email.value == "") {
    errorContainer.classList.add("visible");
    email.classList.remove("success");
    email.classList.add("error");

    let err = document.createElement("li");
    err.innerText = "Le champ e-mail ne peut pas être vide";
    errorList.appendChild(err);
  } else {
    email.classList.add("success");
    email.classList.remove("error");
  }

  let successContainer = document.querySelector(".message-success");
});
