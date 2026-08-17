const messageInput = document.querySelector("#message-input");
const result = document.querySelector("#result-message");
const checkMessageButton = document.querySelector("#check-message-btn");

const helpRegex = new RegExp("please help|assist me", "i");
const dollarRegex = new RegExp(
  "[0-9]+\\s*(?:hundred|thousand|million|billion)?\\s+dollars",
  "i",
);
const freeRegex = new RegExp("(?:\\s|^)fr[e3][e3] m[o0]n[e3]y(?:\\s|$)", "i");
const stockRegex = new RegExp(
  "(?:\\s|^)[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7](?:\\s|$)",
  "i",
);
const dearRegex = new RegExp(
  "(?:\\s|^)d[e3][a@4]r fr[i1|][e3]nd(?:\\s|$)",
  "i",
);
const denyList = [helpRegex, dollarRegex, freeRegex, stockRegex, dearRegex];

checkMessageButton.addEventListener("click", () => {
  if (!messageInput.value.length) {
    alert("Please enter a message.");
    return;
  }
  result.textContent = isSpam(messageInput.value)
    ? "Oh no! This looks like a spam message."
    : "This message does not seem to contain any spam.";

  messageInput.value = "";
});

function isSpam(msg) {
  return denyList.some((regexp) => regexp.test(msg));
}
