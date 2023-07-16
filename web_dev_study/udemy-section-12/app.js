function changeParaText() {
  if (i % 2 == 0) {
    paraElement.textContent = "Clicked";
    paraElement.style.color = "green";
    paraElement.style.fontSize = "10rem";
  } else {
    paraElement.textContent = "unClicked";
    paraElement.style.color = "blue";
    paraElement.style.fontSize = "3rem";
  }
  i++;
}

//---------------------MAIN----------------------//
let i = 0;
let paraElement = document.querySelector("p");
paraElement.addEventListener("mouseover", changeParaText);
