//include<iostream>
//using namespace std;

//-----------------------------------------------//

function checkLength(event) {
  enteredText = event.target.value;
  enteredTextLen = enteredText.length;
  if (enteredTextLen >= 40) {
    textField.style.backgroundColor = "#ffcccb";
  } else {
    textField.style.backgroundColor = "white";
  }
  counter.textContent = enteredTextLen;
}
//---------------------MAIN----------------------//
const textField = document.getElementById("Product-name");
const counter = document.getElementById("remaining-counter");
const maxLengthOfTextField = textField.maxLength;
const clearButton = document.querySelector("button");
textField.addEventListener("input", checkLength);
