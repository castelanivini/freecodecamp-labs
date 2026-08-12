function destroyer(arr, ...nums) {
  return arr.filter((n) => !nums.includes(n));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
