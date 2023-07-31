function openPLayerConfig(event) {
  playerConfigOverlay.style.display = "block";
  backdrop.style.display = "block";
}
function closePlayerConfig(event) {
  playerConfigOverlay.style.display = "none";
  backdrop.style.display = "none";
}

function savePlayerConfig(event) {
  event.preventDefault();
}
