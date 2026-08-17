const checkButton = document.querySelector("#check-btn");
const inputValue = document.querySelector("#text-input");
const resultSelector = document.querySelector("#result");
function validateInput() {
  const validators = {
    isInputValid: (input) => input.length,
  };
  const input = inputValue.value;

  if (!validators["isInputValid"](input)) {
    alert("Please input a value.");
    return;
  }

  const regex = new RegExp("[^a-z|0-9]", "gi");
  const formatedInput = input.replaceAll(regex, "");
  return formatedInput;
}

function isPalindrome() {
  const value = validateInput().toLowerCase();
  if (!value) return;

  const reversed = value.split("").reverse().join("").toLowerCase();

  updateHTML(reversed === value);
}

function updateHTML(bool) {
  //true = palindromo
  let htmlString = `<p>`;
  if (bool) {
    htmlString += `${inputValue.value} is a palindrome</p>`;
  } else {
    htmlString += `${inputValue.value} is not a palindrome</p>`;
  }

  resultSelector.innerHTML = htmlString;
}

checkButton.addEventListener("click", isPalindrome);
