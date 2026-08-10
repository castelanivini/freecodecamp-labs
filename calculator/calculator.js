function getVowelCount(sentence) {
  let count = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  for (const letter of sentence.toLowerCase()) {
    console.log("Letra:", letter);
    if (vowels.includes(letter)) {
      count++;
    }
    console.log("------");
  }
  return count;
}
function getConsonantCount(sentence) {
  let count = 0;
  let vowels = ["a", "e", "i", "o", "u", " ", "!", ",", "."];
  for (const letter of sentence.trim().toLowerCase()) {
    if (!vowels.includes(letter)) {
      count++;
    }
  }
  return count;
}

function getPunctuationCount(sentence) {
  let count = 0;
  let punc = ["!", ",", ".", "'", "?"];
  for (const letter of sentence.trim().toLowerCase()) {
    if (punc.includes(letter)) {
      count++;
    }
  }
  return count;
}

function getWordCount(sentence) {
  if (!sentence.length) return 0;
  let length = sentence.length;
  const letters = "abcdefghijklmnopqrstuvwxyz";
  for (const char of sentence.toLowerCase()) {
    if (!letters.includes(char)) {
      return 0;
    } else {
      let count = sentence.trim().split(/\s+/).length;
      return count;
    }
  }
}
console.log(getWordCount(""));
