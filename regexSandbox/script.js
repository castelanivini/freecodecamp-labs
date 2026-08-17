const regexPattern = document.querySelector("#pattern");
const stringToTest = document.querySelector("#test-string");
const testButton = document.querySelector("#test-btn");
const testResult = document.querySelector("#result");
const caseInsensitiveFlag = document.querySelector("#i");
const globalFlag = document.querySelector("#g");

function getFlags() {
  const i = caseInsensitiveFlag.checked ? "i" : "";
  const g = globalFlag.checked ? "g" : "";

  return i + g;
}

testButton.addEventListener("click", () => {
  const text = stringToTest.textContent;
  const regex = new RegExp(regexPattern.value, getFlags());
  const matches = text.match(regex);

  if (matches) {
    testResult.textContent = matches.join(", ");

    stringToTest.innerHTML = text.replace(
      regex,
      (match) => `<span class="highlight">${match}</span>`,
    );
  } else {
    testResult.textContent = "no match";
  }
});
