let editedPlayer = 0;
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

const playerConfigOverlay = document.getElementById("config-overlay");
const backdrop = document.getElementById("backdrop");
const form = document.querySelector("form");
const errorOutputPara = document.getElementById("config-error");
const activeGameSection = document.getElementById("active-game");

const editPlayer1Button = document.getElementById("edit-player-1");
const editPlayer2Button = document.getElementById("edit-player-2");
const closePlayerConfigButton = document.getElementById("cancel-button");
const startNewGameButton = document.getElementById("start-game-button");

editPlayer1Button.addEventListener("click", openPLayerConfig);
editPlayer2Button.addEventListener("click", openPLayerConfig);

closePlayerConfigButton.addEventListener("click", closePlayerConfig);
form.addEventListener("submit", savePlayerConfig);

startNewGameButton.addEventListener("click", startNewGame);
