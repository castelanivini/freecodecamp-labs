function bouncer(arr) {
  let res = [];
  for (let item of arr) {
    if (!item) continue;
    res.push(item);
  }
  return res;
}

bouncer([7, "ate", "", false, 9]);
