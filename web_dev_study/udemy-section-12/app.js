function checkWordLimit() {
  inputField.style.width = "40rem";
  i++;
  if (i == 5) {
    inputField.textContent = "enough i cant do it anymore";
  }
}

//---------------------MAIN----------------------//
let i = 0;
let paraElement = document.querySelector("p");
let inputField = document.querySelector("input");
inputField.addEventListener("input", checkWordLimit);
let newPara = document.createElement("p");
newPara.textContent = i;
inputField.append(newPara);
