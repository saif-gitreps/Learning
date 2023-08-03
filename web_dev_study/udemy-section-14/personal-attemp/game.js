function startNewGame(event) {
  if (players[0].name == "" || players[1].name == "") {
    window.alert("Please enter valid name");
    return;
  }
  activeGameSection.style.display = "block";
}
