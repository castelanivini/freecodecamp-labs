const options = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;
function getRandomComputerResult() {
  const randn = Math.floor(Math.random() * options.length);

  return options[randn];
}

function hasPlayerWonTheRound(playerChoice, computerChoice) {
  const conditionsMap = {
    Rock: "Scissors",
    Scissors: "Paper",
    Paper: "Rock",
  };

  if (computerChoice === conditionsMap[playerChoice]) {
    return true;
  }
  return false;
}

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();
  const bool = hasPlayerWonTheRound(userOption, computerResult);

  if (userOption === computerResult) {
    return `It's a tie! Both chose ${userOption}`;
  }
  if (bool) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else {
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
}

let playerScoreSpanElement = document.querySelector("#player-score");
let computerScoreSpanElement = document.querySelector("#computer-score");
let roundResultsMsg = document.querySelector("#results-msg");

function showResults(userOption) {
  const roundResults = getRoundResults(userOption);
  roundResultsMsg.textContent = roundResults;
  playerScoreSpanElement.textContent = playerScore;
  computerScoreSpanElement.textContent = computerScore;
  if (playerScore < 3 && computerScore < 3) return;

  if (playerScore == 3) {
    winnerMsgElement.textContent = "Player has won the game!";
  } else if (computerScore == 3) {
    winnerMsgElement.textContent = "Computer has won the game!";
  }

  resetGameBtn.style.display = "block";
  optionsContainer.style.display = "none";
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreSpanElement.textContent = playerScore;
  computerScoreSpanElement.textContent = computerScore;
  resetGameBtn.style.display = "none";
  optionsContainer.style.display = "block";
  winnerMsgElement.textContent = "";
  roundResultsMsg.textContent = "";
}

let rockBtn = document.querySelector("#rock-btn");
let paperBtn = document.querySelector("#paper-btn");
let scissorsBtn = document.querySelector("#scissors-btn");

let winnerMsgElement = document.querySelector("#winner-msg");
let resetGameBtn = document.querySelector("#reset-game-btn");
let optionsContainer = document.querySelector(".options-container");

[rockBtn, paperBtn, scissorsBtn].forEach((btn) => {
  btn.addEventListener("click", (event) => {
    showResults(event.target.textContent);
  });
});
resetGameBtn.addEventListener("click", () => {
  resetGame();
});
