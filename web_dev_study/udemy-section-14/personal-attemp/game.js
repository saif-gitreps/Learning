function resetGameStatus(event) {
  activePlayer = 0;
  currentRound = 1;
  gameOverElement.firstElementChild.innerHTML =
    'You won,<span id="winner-name"></span>!';
  gameOverElement.style.display = "none";
  gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  //now we are resetting the html <ol>
  for (let gameBoardIndex = 0; gameBoardIndex < 9; gameBoardIndex++) {
    gameBoard.children[gameBoardIndex].textContent = "";
    gameBoard.children[gameBoardIndex].classList.remove("disabled");
  }
  activePLayerNamePara.textContent = players[activePlayer].name;
  editPlayer1Button.style.display = "block";
  editPlayer1Button.style.margin = "auto";
  editPlayer2Button.style.display = "block";
  editPlayer2Button.style.margin = "auto";
  activeGameSection.style.display = "none";
}

function startNewGame(event) {
  if (players[0].name == "" || players[1].name == "") {
    window.alert("Please enter valid name");
    return;
  }

  resetGameStatus();
  editPlayer1Button.style.display = "none";
  editPlayer2Button.style.display = "none";
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

  console.log(gameData);
  if (gameData[column][row] > 0) {
    // for making selected rows unselectable.
    return;
  }

  selectedField.textContent = players[activePlayer].symbol; //player[0].
  selectedField.classList.add("disabled");
  gameData[column][row] = activePlayer + 1;

  let winner = checkWinner(selectGameField.dataset.serial);

  if (winner != 0) {
    endGame(winner);
  }
  currentRound++;
  switchPlayer();
}

function checkWinner(serial) {
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] == gameData[i][1] &&
      gameData[i][1] == gameData[i][2]
    ) {
      const box1 = document.querySelector;
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
    gameData[0][0] > 0 &&
    gameData[0][0] == gameData[1][1] &&
    gameData[1][1] == gameData[2][2]
  ) {
    return gameData[0][0];
  }
  if (
    gameData[0][2] > 0 &&
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
  } else {
    gameOverElement.children[0].textContent = "It is a draw!";
    console.log(activeGameSection);
  }
}
