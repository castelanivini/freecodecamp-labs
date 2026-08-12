function diffArray(arr1, arr2) {
  let temp1 = arr1.filter((item) => {
    return !arr2.includes(item);
  });
  let temp2 = arr2.filter((item) => {
    return !arr1.includes(item);
  });

  return [...temp1, ...temp2];
}

console.log(
  diffArray(["diamond", "stick", "apple"], ["stick", "emerald", "bread"]),
);
