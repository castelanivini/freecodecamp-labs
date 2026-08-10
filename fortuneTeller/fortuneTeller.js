let fortune1 = "fortune1";
let fortune2 = "fortune2";
let fortune3 = "fortune3";
let fortune4 = "fortune4";
let fortune5 = "fortune5";

let randomNumber = Math.floor(Math.random() * 5) + 1;

let selectedFortune = "";

switch (randomNumber) {
  case 1:
    selectedFortune = fortune1;
    break;
  case 2:
    selectedFortune = fortune2;
    break;
  case 3:
    selectedFortune = fortune3;
    break;
  case 4:
    selectedFortune = fortune4;
    break;
  case 5:
    selectedFortune = fortune5;
    break;
}

console.log(selectedFortune);

let vehicle = "car";

switch (vehicle) {
  case "bike":
    console.log("Bikes are two-wheelers.");
    break;
  case "car":
    console.log("Some cars are 4x4.");
  case "truck":
    console.log("Trucks can carry heavy loads.");
    break;
  default:
    console.log("Unknown vehicle.");
}
