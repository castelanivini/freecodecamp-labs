function frankenSplice(arr1, arr2, index) {
  let arr2cp = arr2.slice();
  let arr2FirstHalf = arr2cp.splice(0, index);

  return [...arr2FirstHalf, ...arr1, ...arr2cp];
}

frankenSplice([1, 2, 3], [4, 5, 6, 7, 8], 2);
