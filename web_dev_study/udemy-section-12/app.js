//include<iostream>
//using namespace std;

//-----------------------------------------------//

function checkLength(event) {
  let enteredText = event.target.value;
  let enteredTextLen = maxLengthOfTextField - enteredText.length;
  if (enteredTextLen <= 10) {
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
