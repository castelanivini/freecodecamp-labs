let count = 0;
function cardCounter(card) {
  const cardType = typeof card;
  // if (cardType == "number" && card >= 7 && card <= 9) {
  //   return;
  // }
  if (cardType == "number" && card < 7) {
    count++;
  } else if (cardType == "string" || card == 10) {
    count--;
  }

  return `${count} ${count > 0 ? "Bet" : "Hold"}`;
}

console.log(cardCounter(6));
