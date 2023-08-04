let editedPlayer = 0;
let activePlayer = 0;

const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];
//non clickables
const playerConfigOverlay = document.getElementById("config-overlay");
const backdrop = document.getElementById("backdrop");
const form = document.querySelector("form");
const errorOutputPara = document.getElementById("config-error");
const activeGameSection = document.getElementById("active-game");
const activePLayerNamePara = document.getElementById("active-player-name");
//buttons etc.
const editPlayer1Button = document.getElementById("edit-player-1");
const editPlayer2Button = document.getElementById("edit-player-2");
const closePlayerConfigButton = document.getElementById("cancel-button");
const startNewGameButton = document.getElementById("start-game-button");
//const gameFields = document.querySelectorAll("#game-board li");
const gameBoard = document.getElementById("game-board");

editPlayer1Button.addEventListener("click", openPLayerConfig);
editPlayer2Button.addEventListener("click", openPLayerConfig);

closePlayerConfigButton.addEventListener("click", closePlayerConfig);
form.addEventListener("submit", savePlayerConfig);

startNewGameButton.addEventListener("click", startNewGame);

// for (const gameFieldListItems of gameFields) {
//   gameFieldListItems.addEventListener("click", selectGameField);
// }

gameBoard.addEventListener("click", selectGameField);
