function getIndexToIns(arr, num) {
  const sortedArray = arr.sort((a, b) => a - b);
  const index = sortedArray.findIndex((n) => n >= num);
  return index == -1 ? arr.length : index;
}
