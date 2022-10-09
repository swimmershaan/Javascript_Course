const test = 1;
let markMass, johnMass, markHeight, johnHeight, markBMI, johnBMI, markHigherBMI;

if (test === 1) {
    // Test Data 1
    markMass = 78; // kg
    johnMass = 92; // kg
    markHeight = 1.69; // m
    johnHeight = 1.95; // m
} else {
    // Test Data 2
    markMass = 95; // kg
    johnMass = 85; // kg
    markHeight = 1.88; // m
    johnHeight = 1.76; // m
}

markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / johnHeight ** 2;

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}
