function openPLayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid;
  playerConfigOverlay.style.display = "block";
  backdrop.style.display = "block";
}
function closePlayerConfig(event) {
  playerConfigOverlay.style.display = "none";
  backdrop.style.display = "none";
  form.firstElementChild.classList.remove("error");
  errorOutputPara.textContent = "";
  form.children[0].children[1].value = "";
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("playername").trim();
  if (enteredPlayerName == "") {
    event.target.firstElementChild.classList.add("error"); // form.firstElementChild // honestly you can use any document selector method.
    errorOutputPara.textContent = "Please enter a valid name";
    return;
  }
  const updatedPlayerName = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  updatedPlayerName.children[1].textContent = enteredPlayerName;

  if (editedPlayer == 1) {
    players[0].name = enteredPlayerName;
  } else {
    players[1].name = enteredPlayerName;
  }

  // OR we could do -> player[editedPlayer -1].name = enteredPLayerName;

  closePlayerConfig();
}
