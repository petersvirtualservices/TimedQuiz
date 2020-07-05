var nameInput = document.querySelector("#winnerNameHere");

winnerCircle();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

function winnerCircle() {
  var name = localStorage.getItem("name");

  if (!name) {
    return ("You will never know.");
  }

  nameInput.textContent = name;
}

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();

  var name = document.querySelector("#name").value;

  if (name === "") {
    displayMessage("error", "Fine. Have it your way.");
   } else {
    displayMessage("success", "Bask in the wonderfulness of winning.");

    localStorage.setItem("email", name);
    winnerCircle();
  }
});