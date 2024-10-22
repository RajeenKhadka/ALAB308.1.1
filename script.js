const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Part 1: Math Problems
console.log("Part 1: Math Problems");
console.log(" - Are all the numbers are divisible by 5:",(n1 % 5 === 0) && (n2 % 5 === 0) && (n3 % 5 === 0) && (n4 % 5 === 0));

var greaterNumber = n1 > n4;
console.log(" - Is the first number greater than the last number:", greaterNumber);

console.log(" - The final result is:", ((n2 - n1) * n3) % n4);

const isNotOver25 = n1 < 25 && n2 < 25 && n3 < 25 && n4 < 25;
console.log(" - The above four numbers are not greater than 25:", isNotOver25);

console.log("===========================================================");
console.log("Part 2: Practical Math");

var totalDistance = 1500;
var costPerGallon = 3;
var fuelBudget = 175;

console.log("#At 55 mph:");

var totalGallonsAt55 = (totalDistance/30).toFixed(1);
console.log(" - The total gallons needed for the trip:", totalGallonsAt55, "gallons");

var totalfuelCostAt55 = totalGallonsAt55 * costPerGallon;
console.log(" - Is the fuel budget enough to this trip:", (totalfuelCostAt55 <= fuelBudget));

var timeForTripAt55 = (totalDistance/55).toFixed(1);
console.log(" - The total time taken for this trip is:", timeForTripAt55, "hours");

console.log("#At 60 mph:");

var totalGallonsAt60 = (totalDistance/28).toFixed(1);
console.log(" - The total gallons needed for the trip:",totalGallonsAt60,"gallons");

var totalfuelCostAt60 = totalGallonsAt60 * costPerGallon;
console.log(" - Is the fuel budget enough to this trip:", (totalfuelCostAt60 <= fuelBudget));

var timeForTripAt60 = (totalDistance/60).toFixed(1);
console.log(" - The total time taken for this trip is:", timeForTripAt60, "hours");

console.log("#At 75 mph:");

var totalGallonsAt75 = (totalDistance/23).toFixed(1);
console.log(" - The total gallons needed for the trip:",totalGallonsAt75,"gallons");

var totalfuelCostAt75 = totalGallonsAt75 * costPerGallon;
console.log(" - Is the fuel budget enough to this trip:", (totalfuelCostAt75 <= fuelBudget));

var timeForTripAt75 = (totalDistance/75).toFixed(1);
console.log(" - The total time taken for this trip is:", timeForTripAt75, "hours");

console.log("");
console.log("Traveling at 55mph makes the most sense.");


