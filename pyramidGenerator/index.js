function pyramid(pattern, rows, inverted) {
  let space = " ";
  let result = "\n";
  if (!inverted) {
    for (let n = 0; n < rows; n++) {
      result += space.repeat(rows - n - 1) + pattern.repeat(2 * n + 1) + "\n";
    }
  } else {
    for (let n = rows - 1; n >= 0; n--) {
      result += space.repeat(rows - n - 1) + pattern.repeat(2 * n + 1) + "\n";
    }
  }

  return result;
}

console.log(pyramid("o", 3, true));
