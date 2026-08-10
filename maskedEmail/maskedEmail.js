const email = "apple.pie@example.com";
function maskEmail(email) {
  let preAt = email.slice(0, email.indexOf("@"));
  let posAt = email.slice(email.indexOf("@"));
  let masked = `${preAt[0]}${"*".repeat(preAt.length - 2)}${preAt[preAt.length - 1]}`;
  return masked + posAt;
}
console.log(maskEmail(email));
