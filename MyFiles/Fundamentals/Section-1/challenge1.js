// Test Data 1
let markMass = 78; // kg
let johnMass = 92; // kg
let markHeight = 1.69; // m
let johnHeight = 1.95; // m

let markBMI, johnBMI, markHigherBMI;

markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / johnHeight ** 2;

markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI)
console.log(markHigherBMI);

// Test Data 2
markMass = 95; // kg
johnMass = 85; // kg
markHeight = 1.88; // m
johnHeight = 1.76; // m

markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / johnHeight ** 2;

markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI);
console.log(markHigherBMI);
