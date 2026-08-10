function fearNotLetter(string) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const stringStart = alphabet.findIndex((char) => char === string[0]);
  alphabet.splice(0, stringStart);

  const stringEnd = alphabet.findIndex(
    (char) => char === string[string.length - 1],
  );

  alphabet.splice(stringEnd + 1);

  let missingChars = "";

  let stringPointer = 0;
  for (let i = 0; i < alphabet.length; i++) {
    let charString = string[stringPointer];
    let charAlphabet = alphabet[i];
    if (charString == charAlphabet) {
      stringPointer++;
    } else {
      missingChars += charAlphabet;
    }
  }

  return missingChars || undefined;
}

console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
//fghijklmnopqrst
//fghi      pqrst
