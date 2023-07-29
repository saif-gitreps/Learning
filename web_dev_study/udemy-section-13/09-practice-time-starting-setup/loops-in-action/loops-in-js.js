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

// Highlight links
const highlightLinksButton = document.querySelector("#highlight-links button");

function highlightLinks(event) {
  const allAnchorTags = document.querySelectorAll("#highlight-links a");
  console.log(allAnchorTags);
  //   for (let i = 0; i < allAnchorTags.length; i++) {
  //     allAnchorTags[i].classList.add("highlight");
  //   }
  // OR this way:
  if (i % 2 == 0) {
    for (const tag of allAnchorTags) {
      tag.classList.add("highlight");
    }
  } else {
    for (const tag of allAnchorTags) {
      tag.classList.remove("highlight");
    }
  }
  i++;
}
let i = 0;
highlightLinksButton.addEventListener("click", highlightLinks);

// displaying codes for example fetched data from database.

const UserDataFromDatabase = {
  name: "saif",
  age: 25,
  job: "cook",
};

function displayInformation(event) {
  const outPutDataUnorderedList = document.getElementById("output-user-data");
  outPutDataUnorderedList.innerHTML = "";
  for (let data in UserDataFromDatabase) {
    const listItem = document.createElement("li");
    const outputText = data.toUpperCase() + " : " + UserDataFromDatabase[data];
    listItem.textContent = outputText;
    outPutDataUnorderedList.append(listItem);
  }
}

const displayUserDataButton = document.querySelector("#user-data button");
displayUserDataButton.addEventListener("click", displayInformation);

// Roll the dice function.

const rollDiceButton = document.querySelector("#statistics button");

function numberOfDiceRolled() {
  const targetNumberInput = document.getElementById("user-target-number");
  const diceRollUnorderedList = document.getElementById("dice-rolls");

  const enteredNumber = targetNumberInput.value;
  diceRollUnorderedList.innerHTML = "";
  let count = 0;
  let randomNumber = -1;
  while (randomNumber != enteredNumber) {
    let outputListItem = document.createElement("li");
    randomNumber = Math.floor(Math.random() * 7);
    outputListItem.textContent = "Roll " + (count + 1) + ": " + randomNumber;
    diceRollUnorderedList.append(outputListItem);
    count++;
  }
  const outPuttotalRolls = document.getElementById("output-total-rolls");
  const outPutTarget = document.getElementById("output-target-number");
  outPuttotalRolls.textContent = count;
  outPutTarget.textContent = enteredNumber;
}

rollDiceButton.addEventListener("click", numberOfDiceRolled);
