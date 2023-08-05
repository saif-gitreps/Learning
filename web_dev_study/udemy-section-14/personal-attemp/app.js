//global attributes/data structures
let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let patterns = [-1, -1, -1];

let gameData = [
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
const gameConfigurationSection = document.getElementById("game-configuration");
const errorOutputPara = document.getElementById("config-error");
const activeGameSection = document.getElementById("active-game");
const activePLayerNamePara = document.getElementById("active-player-name");
const activePlayerNameParaParentElement = activePLayerNamePara.parentElement;
const gameOverElement = document.getElementById("game-over");
//buttons or Clickables
const editPlayer1Button = document.getElementById("edit-player-1");
const editPlayer2Button = document.getElementById("edit-player-2");
const closePlayerConfigButton = document.getElementById("cancel-button");
const startNewGameButton = document.getElementById("start-game-button");
const resetGameButton = document.getElementById("reset-game-button");
const opponentPlayerVsPlayer = document.getElementById("pvp");
const opponentPlayerVsCpu = document.getElementById("pve");
const opponentSelectionWindow = document.getElementById("opponent-selection");
const menuBackButton = document.getElementById("menu-back-button");
const gameBoard = document.getElementById("game-board");
const gameBoardinArray = document.querySelectorAll("#game-board li");
//event listeners
menuBackButton.addEventListener("click", backToLobby);
opponentPlayerVsPlayer.addEventListener("click", playerVsPlayerSettings);
opponentPlayerVsCpu.addEventListener("click", playerVsCpuSettings);

editPlayer1Button.addEventListener("click", openPLayerConfig);
editPlayer2Button.addEventListener("click", openPLayerConfig);

closePlayerConfigButton.addEventListener("click", closePlayerConfig);
form.addEventListener("submit", savePlayerConfig);

startNewGameButton.addEventListener("click", startNewGame);
resetGameButton.addEventListener("click", resetGameStatus);

gameBoard.addEventListener("click", selectGameField);
