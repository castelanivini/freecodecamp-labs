function titleCase(str) {
  let strArr = str.toLowerCase().split(" ");
  let formatedString = "";
  for (let n = 0; n < strArr.length; n++) {
    formatedString +=
      strArr[n].split("")[0].toUpperCase() +
      strArr[n].split("").splice(1).join("") +
      " ";
  }
  return formatedString.trim();
}
console.log(titleCase("I'm a little tea pot"));
