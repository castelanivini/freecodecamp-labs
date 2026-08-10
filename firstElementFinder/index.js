function findElement(array, fn) {
  for (let num of array) {
    if (fn(num)) return num;
  }
}

findElement([1, 3, 5, 8], (num) => num % 2 === 0);
