let num = 7;

function factorialCalculator(int) {
  let result = 1;
  for (let n = 0; n < int; n++) {
    result += result * n;
  }

  return result;
}
let factorial = factorialCalculator(num);
const resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);
