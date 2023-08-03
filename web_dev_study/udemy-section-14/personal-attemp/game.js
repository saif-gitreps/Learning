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
  event.target.textContent = players[activePlayer].symbol; //player[0].
  event.target.classList.add("disabled");
  switchPlayer();
}
