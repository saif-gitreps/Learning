function checkWordLimit() {
  let enteredText = inputField.value;
  console.log(enteredText);
}

//---------------------MAIN----------------------//
let i = 0;
let paraElement = document.querySelector("p");
let inputField = document.querySelector("input");
inputField.addEventListener("input", checkWordLimit);
