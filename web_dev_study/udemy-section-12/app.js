//include<iostream>
//using namespace std;

//-----------------------------------------------//

function checkLength(event) {
  let enteredText = event.target.value;
  let enteredTextLen = enteredText.length;
  if (enteredTextLen >= 50) {
    textField.style.backgroundColor = "#ffcccb";
  }
  counter.textContent = enteredTextLen;
}

//---------------------MAIN----------------------//
const textField = document.getElementById("Product-name");
const counter = document.getElementById("remaining-counter");
const maxLengthOfTextField = textField.maxLength;
const clearButton = document.querySelector("button");
console.dir(clearButton);
if (clearButton.click) {
}

textField.addEventListener("input", checkLength);
