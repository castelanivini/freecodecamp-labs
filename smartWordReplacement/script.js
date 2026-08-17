function myReplace(string, word, replace) {
  function replacer() {
    const isCapital = word[0] === word[0].toUpperCase();
    const temp = isCapital
      ? replace[0].toUpperCase() + replace.slice(1)
      : replace[0].toLowerCase() + replace.slice(1);
    return `${temp}`;
  }

  return string.replace(word, replacer);
}

console.log(myReplace("I think we should look up there", "up", "Down"));
