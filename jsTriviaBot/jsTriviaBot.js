const greetings = "Hello! I'm your coding fun fact guide!";
const botName = "jsTriviaBot";
const botLocation = "freeCodeCamp/jsTriviaBot";
const favoriteLanguage = "TypeScript";
let codingFact =
  favoriteLanguage +
  " is a superset of JavaScript that adds static typing and other features to the language.";
console.log(greetings);
console.log("My name is " + botName + " and I live on " + botLocation + ".");
console.log("My favorite programming language is " + favoriteLanguage + ".");
console.log(codingFact);
codingFact =
  "Did you know that TypeScript was developed by Microsoft and first released in 2012?";
console.log(codingFact);

codingFact =
  favoriteLanguage +
  " allows developers to catch errors at compile time, which can lead to more robust and maintainable code.";
console.log(codingFact);

console.log(
  "It was fun sharing these facts with you. Goodbye! - " +
    botName +
    " from " +
    botLocation,
);
