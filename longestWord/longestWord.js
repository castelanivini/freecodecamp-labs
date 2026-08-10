const str = "The quick brown fox jumped over the lazy dog";

function findLongestWordLength(str) {
  let substr = "";
  let strARR = str.split(" ");
  for (let word of strARR) {
    if (word.length > substr.length) {
      substr = word;
    }
  }
  return substr.length;
}

console.log(findLongestWordLength(str));
