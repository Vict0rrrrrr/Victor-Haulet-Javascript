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

  if (nom.value == "") {
    errorContainer.classList.add("visible");
    nom.classList.remove("success");
    nom.classList.add("error");

    let err = document.createElement("li");
    err.innerText = "Le champ nom ne peut pas être vide";
    errorList.appendChild(err);
  } else {
    let successContainer = document.querySelector(".message-success");
    successContainer.classList.add("visible")
    nom.classList.remove("error");

  }

  if (prenom.value == "") {
    errorContainer.classList.add("visible");
    prenom.classList.remove("success");
    prenom.classList.add("error");

    let err = document.createElement("li");
    err.innerText = "Le champ prénom ne peut pas être vide";
    errorList.appendChild(err);
  } else {
    let successContainer = document.querySelector(".message-success");
    successContainer.classList.add("visible")
    prenom.classList.remove("error");}
  
  if (email.value == "") {
    errorContainer.classList.add("visible");
    email.classList.remove("success");
    email.classList.add("error");

    let err = document.createElement("li");
    err.innerText = "Le champ e-mail ne peut pas être vide";
    errorList.appendChild(err);
  } else {
    let successContainer = document.querySelector(".message-success");
    successContainer.classList.add("visible")
    email.classList.remove("error");
    email.classList.add("success");
  }
  
});
