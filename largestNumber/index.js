const arr = [
  [17, 23, 25, 12],
  [25, 7, 34, 48],
  [4, -10, 18, 21],
  [-72, -3, -17, -10],
];
function largestOfAll(arr) {
  let res = [];
  for (let subarray of arr) {
    let biggest = subarray[0];
    for (let num of subarray) {
      if (num > biggest) biggest = num;
    }
    res.push(biggest);
  }
  return res;
}

console.log(largestOfAll(arr));
