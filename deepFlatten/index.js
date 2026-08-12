function steamrollArray(arr) {
  let res = [];
  console.log("_".repeat(50) + `\n`);
  function flatten(cur) {
    for (let item of cur) {
      console.log("Item:", item + `\n`);
      if (!Array.isArray(item)) {
        res.push(item);
      } else {
        flatten(item);
      }
    }
  }

  flatten(arr);
  console.log("_".repeat(50) + `\n`);
  return res;
}

console.log(steamrollArray([1, [2, [3]]]));
