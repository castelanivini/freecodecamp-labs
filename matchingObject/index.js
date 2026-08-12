const collection = [
  { apple: 1, bat: 2 },
  { bat: 2 },
  { apple: 1, bat: 2, cookie: 2 },
];

function whatIsInAName(collection, src) {
  return collection.filter((obj) => {
    return Object.keys(src).every((key) => obj[key] == src[key]);
  });
}

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" },
  ),
);
