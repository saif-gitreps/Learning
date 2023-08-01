function openPLayerConfig(event) {
  playerConfigOverlay.style.display = "block";
  backdrop.style.display = "block";
}
function closePlayerConfig(event) {
  playerConfigOverlay.style.display = "none";
  backdrop.style.display = "none";
  form.firstElementChild.classList.remove("error");
  errorOutputPara.textContent = "";
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  event.target.firstElementChild.classList.remove("error");
  errorOutputPara.textContent = "";
  const enteredPlayerName = formData.get("playername").trim();
  if (enteredPlayerName == "") {
    event.target.firstElementChild.classList.add("error");
    errorOutputPara.textContent = "Please enter a valid name";
    return;
  }
}
