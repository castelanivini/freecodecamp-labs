const year = 1900;

function isLeapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0))
    return `${year} is a leap year.`;
  return `${year} is not a leap year.`;
}

let result = isLeapYear(year);

console.log(result);
