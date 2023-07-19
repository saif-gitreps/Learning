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
let textField = document.getElementById("Product-name");
let counter = document.getElementById("remaining-counter");
let maxLengthOfTextField = textField.maxLength;

textField.addEventListener("input", checkLength);
