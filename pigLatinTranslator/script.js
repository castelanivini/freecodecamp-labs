function translatePigLatin(string) {
  const vowelsExp = new RegExp("^([aeiou])");
  const consonantsExp = new RegExp("^[^aeiou]+", "g");
  if (vowelsExp.test(string)) {
    return `${string}way`;
  } else {
    return `${string.replace(consonantsExp, "")}${string.match(consonantsExp, "")}ay`;
  }
}

console.log(translatePigLatin("algorithm"));
