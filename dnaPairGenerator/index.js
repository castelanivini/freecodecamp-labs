function pairElement(str) {
  const pairs = {
    ["A"]: "T",
    ["T"]: "A",
    ["G"]: "C",
    ["C"]: "G",
  };
  let res = [];
  for (let char of str) {
    res.push([char, pairs[char]]);
  }
  return res;
}
pairElement("A");
