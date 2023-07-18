function checkWordLimit(event) {
  let enteredText = inputField.value;
  let enteredText2 = event.target.value;
  console.log(enteredText);
  console.log(enteredText2);
  console.log(event);
}

//---------------------MAIN----------------------//
let i = 0;
let paraElement = document.querySelector("p");
let inputField = document.querySelector("input");
inputField.addEventListener("input", checkWordLimit);
