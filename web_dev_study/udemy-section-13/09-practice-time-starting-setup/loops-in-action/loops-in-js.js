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
