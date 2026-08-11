function sumAll(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  let sum = 0;

  for (let x = min; x <= max; x++) {
    sum += x;
  }

  return sum;
}

sumAll([4, 1]);
