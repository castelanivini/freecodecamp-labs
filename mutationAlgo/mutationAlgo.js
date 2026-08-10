function mutation(arr) {
  const [first, second] = arr;
  let match = true;
  for (let sChar of second.toLowerCase()) {
    if (first.toLowerCase().includes(sChar)) {
      continue;
    } else {
      match = false;
      break;
    }
  }

  return match;
}

console.log(mutation(["Mary", "Army"]));
