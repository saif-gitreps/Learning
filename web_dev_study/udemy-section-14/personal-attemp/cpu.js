function resetGameStatusCPU(event) {
  activePlayer = 0;
  currentRound = 1;
  if (xSelection.classList.contains("markedCPU")) {
    xSelection.classList.remove("markedCPU");
  }
  if (oSelection.classList.contains("markedCPU")) {
    oSelection.classList.remove("markedCPU");
  }
  locked = false;
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
  activeGameSection.style.display = "none";
  for (let i = 0; i < 9; i++) {
    if (gameBoardinArray[i].classList.contains("marked")) {
      gameBoardinArray[i].classList.remove("marked");
    }
  }
  patterns = [-1, -1, -1];
}

function xSelectedActions(event) {
  if (locked == true) {
    return;
  }
  xSelection.classList.add("markedCPU");
  players[0].name = "Player";
  players[1].name = "CPU";
  locked = true;
}
function oSelectedActions(event) {
  if (locked == true) {
    return;
  }
  oSelection.classList.add("markedCPU");
  players[1].name = "Player";
  players[0].name = "CPU";
  locked = true;
}

function startNewGameCpuMode(event) {
  if (players[0].name == "" || players[1].name == "") {
    window.alert("Please Select X or O");
    return;
  }

  resetGameStatus();
  activePLayerNamePara.textContent = players[activePlayer].name;
  activeGameSection.style.display = "block";
}

function switchPlayer() {
  activePlayer = activePlayer == 0 ? 1 : 0;
  activePLayerNamePara.textContent = players[activePlayer].name;
}

function opponentWinCheck() {}
function cpuWinCheck() {}

function cpuAlgorithm() {}

function selectGameField(event) {
  if (event.target.tagName !== "LI") {
    return;
  }
  const selectedField = event.target;
  const column = selectedField.dataset.col - 1; // automatically converts string to int anyway
  const row = selectedField.dataset.row - 1;

  console.log(gameData);
  if (gameData[row][column] > 0) {
    // for making selected rows unselectable.
    return;
  }

  selectedField.textContent = players[activePlayer].symbol; //player[0].
  selectedField.classList.add("disabled");
  gameData[row][column] = activePlayer + 1;

  let winner = checkWinner();

  if (winner != 0) {
    endGame(winner);
  }
  currentRound++;
  switchPlayer();
}

function patternDecoder(b1, b2, b3) {
  const fruits = new Map([
    ["00", 0],
    ["01", 1],
    ["02", 2],
    ["10", 3],
    ["11", 4],
    ["12", 5],
    ["20", 6],
    ["21", 7],
    ["22", 8],
  ]);
  let box1 = b1[0].toString() + b1[1].toString();
  let box2 = b2[0].toString() + b2[1].toString();
  let box3 = b3[0].toString() + b3[1].toString();
  let ans = [fruits.get(box1), fruits.get(box2), fruits.get(box3)];
  return ans;
}

function checkWinner() {
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] == gameData[i][1] &&
      gameData[i][1] == gameData[i][2]
    ) {
      patterns = patternDecoder([i, 0], [i, 1], [i, 2]);
      return gameData[i][0];
    }
  }
  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] == gameData[1][i] &&
      gameData[1][i] == gameData[2][i]
    ) {
      patterns = patternDecoder([0, i], [1, i], [2, i]);
      return gameData[0][i];
    }
  }
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] == gameData[1][1] &&
    gameData[1][1] == gameData[2][2]
  ) {
    patterns = patternDecoder([0, 0], [1, 1], [2, 2]);
    return gameData[0][0];
  }
  if (
    gameData[0][2] > 0 &&
    gameData[0][2] == gameData[1][1] &&
    gameData[1][1] == gameData[2][0]
  ) {
    patterns = patternDecoder([0, 2], [1, 1], [2, 0]);
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
    activePlayerNameParaParentElement.style.display = "none";
    gameBoardinArray[patterns[0]].classList.add("marked");
    gameBoardinArray[patterns[1]].classList.add("marked");
    gameBoardinArray[patterns[2]].classList.add("marked");
  } else {
    gameOverElement.children[0].textContent = "It is a draw!";
  }
}
