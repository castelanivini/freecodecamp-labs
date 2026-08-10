const words = ["the", "cat", "sat", "the", "cat", "the", "cat", "the", "cat"];

function isPalindrome(word) {
  let wordBackwards = "";
  for (let n = word.length - 1; n >= 0; n--) {
    wordBackwards += word[n];
  }
  return wordBackwards.toLowerCase() == word.toLowerCase();
}

function findPalindromeBreaks(arr) {
  let indexesArr = [];
  for (let n = 0; n < arr.length; n++) {
    let isPalindromeBool = isPalindrome(arr[n]);
    if (!isPalindromeBool) indexesArr.push(n);
  }
  return indexesArr;
}

function findRepeatedPhrases(words, phraseLength) {
  console.log(words);
  if (phraseLength >= words.length) return [];
  let arr = [];
  for (let n = 0; n <= words.length - phraseLength; n++) {
    const fraseAtual = words.slice(n, n + phraseLength);

    for (let j = n + 1; j <= words.length - phraseLength; j++) {
      const outraFrase = words.slice(j, j + phraseLength);

      if (fraseAtual.join(" ") === outraFrase.join(" ")) {
        if (!arr.includes(n)) {
          arr.push(n);
        }

        if (!arr.includes(j)) {
          arr.push(j);
        }
      }
    }
  }
  return arr;
}

function analyzeTexts(texts, phraseLength) {
  if (!texts.length) return [];
  let arr = [];
  for (let text of texts) {
    let res1 = findPalindromeBreaks(text, phraseLength);
    let res2 = findRepeatedPhrases(text, phraseLength);
    arr.push({
      palindromeBreaks: res1,
      repeatedPhrases: res2,
    });
  }

  return arr;
}

console.log(analyzeTexts([words, words], 2));
