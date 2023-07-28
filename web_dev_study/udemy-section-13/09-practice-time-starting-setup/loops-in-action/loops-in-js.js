// code: sum numbers
const calculateSumButton = document.querySelector("#calculator button");

function calculateSum(event) {
  const userNumberInput = document.getElementById("user-number");
  const enteredNumber = parseInt(userNumberInput.value);
  const outPutField = document.getElementById("calculated-sum");
  let ans = enteredNumber * ((enteredNumber - 1) / 2) + enteredNumber;
  outPutField.textContent = ans;
  outPutField.style.display = "block";
}

calculateSumButton.addEventListener("click", calculateSum);
