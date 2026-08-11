function sumFibs(num) {
  let previous = 0;
  let current = 1;
  let sum = 0;

  while (current <= num) {
    if (current % 2 != 0) {
      sum += current;
    }
    let next = previous + current;
    previous = current;
    current = next;
  }

  return sum;
}

console.log(sumFibs(1000));
