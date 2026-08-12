function dropElements(arr, func) {
  let flag = false;
  let temp = [];

  for (let item of arr) {
    const bool = func(item);
    if (bool) flag = true;
    if (flag) {
      temp.push(item);
      continue;
    }
  }

  return temp;
}

console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n > 5;
  }),
);
