function chunkArrayInGroups(arr, int) {
  let chunks = [];
  for (let n = 0; n < arr.length; n += int) {
    chunks.push(arr.slice(n, int + n));
  }
  return chunks;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
