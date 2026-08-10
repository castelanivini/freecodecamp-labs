const str = "hello";

function reverseString(string) {
  let reversed = "";
  for (let n = string.length - 1; n >= 0; n--) {
    reversed += string[n];
  }
  return reversed;
}

reverseString(str);
