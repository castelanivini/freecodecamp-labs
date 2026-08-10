let questions = [
  {
    category: "A",
    question: "Q1?",
    choices: ["String 1", "String 2", "String 3"],
    answer: "String 1",
  },
  {
    category: "B",
    question: "Q2?",
    choices: ["String 1", "String 2", "String 3"],
    answer: "String 1",
  },
  {
    category: "C",
    question: "Q3?",
    choices: ["String 1", "String 2", "String 3"],
    answer: "String 1",
  },
  {
    category: "D",
    question: "Q4?",
    choices: ["String 1", "String 2", "String 3"],
    answer: "String 1",
  },
  {
    category: "E",
    question: "Q5?",
    choices: ["String 1", "String 2", "String 3"],
    answer: "String 1",
  },
];

function getRandomQuestion(arr) {
  let randN = Math.floor(Math.random() * arr.length);
  return arr[randN];
}
function getRandomComputerChoice(arr) {
  let randN = Math.floor(Math.random() * arr.length);
  return arr[randN];
}

function getResults(question, guess) {
  const { answer } = question;
  if (guess == answer) {
    return "The computer's choice is correct!";
  }

  return `The computer's choice is wrong. The correct answer is: ${answer}`;
}
const question = getRandomQuestion(questions);
const guess = getRandomComputerChoice(question.choices);

console.log(getResults(question, guess));
