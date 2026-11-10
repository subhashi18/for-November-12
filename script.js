const loginScreen = document.getElementById("loginScreen");
const giftScreen = document.getElementById("giftScreen");
const birthdayScreen = document.getElementById("birthdayScreen");
const nameForm = document.getElementById("nameForm");
const nameInput = document.getElementById("nameInput");
const giftButton = document.getElementById("giftButton");
const logoutButton = document.getElementById("logoutButton");

// Only these two names are accepted. Capitalization and extra spaces do not matter.
const allowedNames = ["nithija", "nithija rasvin"];

nameForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const enteredName = nameInput.value.trim().toLowerCase();

  if (allowedNames.includes(enteredName)) {
    loginScreen.classList.add("hidden");
    giftScreen.classList.remove("hidden");
  } else {
    alert("You are a wrong person. Access denied. Logging out!");
    nameInput.value = "";
    nameInput.focus();

    // Return to the locked login screen.
    giftScreen.classList.add("hidden");
    birthdayScreen.classList.add("hidden");
    loginScreen.classList.remove("hidden");
  }
});

giftButton.addEventListener("click", function () {
  if (giftButton.classList.contains("open")) return;

  giftButton.classList.add("open");

  // Reveal the birthday message after the gift lid animation.
  window.setTimeout(function () {
    giftScreen.classList.add("hidden");
    birthdayScreen.classList.remove("hidden");
  }, 850);
});

logoutButton.addEventListener("click", function () {
  birthdayScreen.classList.add("hidden");
  giftScreen.classList.add("hidden");
  loginScreen.classList.remove("hidden");
  giftButton.classList.remove("open");
  nameInput.value = "";
  nameInput.focus();
});
