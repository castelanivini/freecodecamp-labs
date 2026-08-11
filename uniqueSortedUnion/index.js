function uniteUnique(...arrs) {
  let res = [];
  for (let arr of arrs) {
    for (let num of arr) {
      if (!res.includes(num)) {
        res.push(num);
      }
    }
  }
  return res;
}

uniteUnique([1, 2], [3, 4], [5, 6]);
