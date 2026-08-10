function truncateString(string, number) {
  let strLength = string.length;
  if (strLength > number) {
    return string.slice(0, number) + "...";
  }

  return string;
}

console.log(truncateString("penis", 2));
