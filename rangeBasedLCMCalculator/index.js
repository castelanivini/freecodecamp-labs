function smallestCommons(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  let number = 1;

  while (true) {
    let works = true;

    for (let x = min; x <= max; x++) {
      if (number % x !== 0) {
        works = false;
        break;
      }
    }

    if (works) {
      return number;
    }

    number++;
  }
}

console.log(smallestCommons([5, 1]));
