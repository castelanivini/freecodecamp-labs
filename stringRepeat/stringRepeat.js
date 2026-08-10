function repeatStringNumTimes(string, int) {
  const validators = {
    isNumberValid: (int) => {
      if (int <= 0) return false;
      return true;
    },
  };

  if (!validators["isNumberValid"](int)) return "";

  let temp = "";
  for (let n = 0; n < int; n++) {
    temp += string;
  }

  return temp;
}
