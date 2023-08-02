let editedPlayer = 0;

const playerConfigOverlay = document.getElementById("config-overlay");
const backdrop = document.getElementById("backdrop");
const form = document.querySelector("form");
const errorOutputPara = document.getElementById("config-error");
const editPlayer1Button = document.getElementById("edit-player-1");
const editPlayer2Button = document.getElementById("edit-player-2");
const closePlayerConfigButton = document.getElementById("cancel-button");

editPlayer1Button.addEventListener("click", openPLayerConfig);
editPlayer2Button.addEventListener("click", openPLayerConfig);

closePlayerConfigButton.addEventListener("click", closePlayerConfig);
form.addEventListener("submit", savePlayerConfig);
