const lunches = [];

function addLunchToEnd(arr, string) {
  arr.push(string);
  console.log(`${string} added to the end of the lunch menu.`);
  return arr;
}
function addLunchToStart(arr, string) {
  arr.unshift(string);
  console.log(`${string} added to the start of the lunch menu.`);
  return arr;
}
function removeLastLunch(arr) {
  if (!arr.length) {
    console.log(`No lunches to remove.`);
    return;
  }
  let string = arr.pop();
  console.log(`${string} removed from the end of the lunch menu.`);
  return arr;
}
function removeFirstLunch(arr) {
  if (!arr.length) {
    console.log(`No lunches to remove.`);
    return;
  }
  let string = arr.shift();
  console.log(`${string} removed from the start of the lunch menu.`);
  return arr;
}

function getRandomLunch(arr) {
  if (!arr.length) {
    console.log(`No lunches available.`);
    return;
  }
  let randN = Math.floor(Math.random() * arr.length);
  console.log(`Randomly selected lunch: ${arr[randN]}`);
}

function showLunchMenu(arr) {
  if (!arr.length) {
    console.log(`The menu is empty.`);
    return;
  }
  console.log(`Menu items: ${arr.join(", ")}`);
}

getRandomLunch(["Pizza", "Burger", "Fries", "Salad"]);
