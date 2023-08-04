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

  let winner = checkWinner();

  if (winner != 0) {
    endGame(winner);
  }
  currentRound++;
  switchPlayer();
}

function checkWinner() {
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] == gameData[i][1] &&
      gameData[i][1] == gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }
  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] == gameData[1][i] &&
      gameData[1][i] == gameData[2][i]
    ) {
      return gameData[i][0];
    }
  }
  if (
    gameData[0][0] > 1 &&
    gameData[0][0] == gameData[1][1] &&
    gameData[1][1] == gameData[2][2]
  ) {
    return gameData[0][0];
  }
  if (
    gameData[0][2] > 1 &&
    gameData[0][2] == gameData[1][1] &&
    gameData[1][1] == gameData[2][0]
  ) {
    return gameData[0][2];
  }
  if (currentRound == 9) {
    return -1;
  }
  return 0;
}

function endGame(winner) {
  gameOverElement.style.display = "block";
  if (winner > 0) {
    gameOverElement.children[0].children[0].textContent =
      players[winner - 1].name;
    console.log(gameOverElement.children[0].children[0]);
  } else {
    gameOverElement.children[0].textContent = "It is a draw!";
  }
}
