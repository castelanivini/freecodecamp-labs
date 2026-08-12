function truthCheck(collection, attr) {
  return collection.every((col) => {
    return col[attr];
  });
}

console.log(
  truthCheck(
    [
      { name: "Quincy", role: "Founder", isBot: false },
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: true },
    ],
    "name",
  ),
);
