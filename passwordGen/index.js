function generatePassword(length) {
  const src =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

  let pass = "";
  for (let n = 0; n < length; n++) {
    let randN = Math.floor(Math.random() * src.length);
    pass += src[randN];
  }

  return pass;
}

generatePassword(12);

const password = generatePassword(12);
console.log(`Generated password: ${password}`);
