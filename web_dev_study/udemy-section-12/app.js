//include<iostream>
//using namespace std;
//-----------------------------------------------//

function checkLength(event) {
  let enterText = textField.event.target.input;
  let len = enterText.length;
  counter.textContent = len + "/60";
}

//---------------------MAIN----------------------//

let textField = document.querySelector("input");
let counter = document.body.children[0].children[2];
textField.addEventListener("input", checkLength);
