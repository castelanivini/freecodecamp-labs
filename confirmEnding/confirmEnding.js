function confirmEnding(string, target) {
  let targetLen = target.length;
  let stringEnd = string.slice(string.length - targetLen);

  return stringEnd == target;
}
