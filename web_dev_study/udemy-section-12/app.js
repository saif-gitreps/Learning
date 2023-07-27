//include<iostream>
//using namespace std;

//-----------------------------------------------//

function checkLength(event) {
  let enteredText = event.target.value;
  let enteredTextLen = maxLengthOfTextField - enteredText.length;
  counter.textContent = enteredTextLen;
  if (enteredTextLen === 0) {
    counter.classList.add("warning");
    textField.classList.add("error");
  } else if (enteredTextLen <= 10) {
    counter.classList.add("warning");
    textField.classList.add("warning");
  } else {
    textField.classList.remove("warning");
    counter.classList.remove("warning");
  }
}
function resetAction(event) {
  counter.textContent = "60";
  textField.value = "";
  counter.classList.remove("warning");
  textField.classList.remove("warning");
  textField.classList.remove("error");
}
//---------------------MAIN----------------------//
const textField = document.getElementById("Product-name");
const counter = document.getElementById("remaining-counter");
const maxLengthOfTextField = textField.maxLength;
const clearButton = document.querySelector("button");
textField.addEventListener("input", checkLength);
clearButton.addEventListener("click", resetAction);
