function convertHTML(str) {
  let res = "";
  const dict = {
    ["&"]: "&amp;",
    ["<"]: "&lt;",
    [">"]: "&gt;",
    ['"']: "&quot;",
    ["'"]: "&apos;",
  };

  for (let char of str) {
    if (Object.hasOwn(dict, char)) {
      res += dict[char];
      continue;
    }
    res += char;
  }
  return res;
}

convertHTML('<a href="test">Tom & Jerry</a>');
