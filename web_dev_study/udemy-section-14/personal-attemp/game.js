function startNewGame(event) {
  if (players[0].name == "" || players[1].name == "") {
    window.alert("Please enter valid name");
    return;
  }
  activePLayerNamePara.textContent = players[activePlayer].name;
  activeGameSection.style.display = "block";
}
function switchPlayer() {
  activePlayer = activePlayer == 0 ? 1 : 0;
  activePLayerNamePara.textContent = players[activePlayer].name;
}

function selectGameField(event) {
  if (event.target.tagName !== "LI") {
    return;
  }
  const selectedField = event.target;
  const column = selectedField.dataset.col - 1; // automatically converts string to int anyway
  const row = selectedField.dataset.row - 1;

  if (gameData[column][row] > 0) {
    return;
  }

  selectedField.textContent = players[activePlayer].symbol; //player[0].
  selectedField.classList.add("disabled");

  gameData[column][row] = activePlayer + 1;

  switchPlayer();
}
