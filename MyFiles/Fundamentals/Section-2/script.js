"use strict";
/* 
let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriverLicense = true; // Bug intentiaonal to show strict mode
if (hasDriversLicense) console.log('I can Drive')
const interface = 'Audio';
const private = 45;
*/
/*
function logger() {
    console.log('My name is Shaan')
}

// Calling / running / invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);
console.log(fruitProcessor(5,0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/
/*
const age1 = calcAge1(1997); // Can run before a delaration but will not work for a function expression

// Function declaration
function calcAge1(birthYear) {
    return 2022 - birthYear;
}

// Function expression
const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
};

const age2 = calcAge2(1997);

console.log(age1, age2);
*/
/*
// Arrow function
const calcAge3 = (birthYear) => 2022 - birthYear;
const age3 = calcAge3(1997);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1997, "Shaan"));
*/
/*
function cutFruitPieces(fruit) {
    return fruit * 4;
};

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
    return juice;
};

console.log(fruitProcessor(2, 3));
*/
/* 
const calcAge = function (birthYear) {
    return 2022 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
};
console.log(yearsUntilRetirement(1997, "Shaan"));
console.log(yearsUntilRetirement(1950, "Mike"));
*/
/* 
const friends = ["Mike", "Steve", "Pete"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const fristName = "Jonas";
const jonas = [fristName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);

const calcAge = function (birthYear) {
    return 2022 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/
/* 
// Add Elements
const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

// Remove Elements
friends.pop();
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));

friends.push(23);
console.log(friends.includes("23"));
console.log(friends.includes(23));

if (friends.includes("Peter")) {
    console.log("You have a friend named Peter");
} else if (friends.includes("Steven")) {
    console.log("You have a friend named Steven");
}
*/
/* 
// Objects (Dict in Python)
const Shaan = {
    firstName: "Shaan",
    lastName: "Heugly",
    age: 2022 - 1997,
    job: "SatCon",
    friends: ["Jarod", "Tanner", "Thomas"],
};

console.log(Shaan);
console.log(Shaan.lastName);
console.log(Shaan["lastName"]);

const nameKey = "Name";

console.log(Shaan["first" + nameKey]);
console.log(Shaan["last" + nameKey]);

const intrestedIn = prompt("What do you want to know about Shaan?");
if (Shaan[intrestedIn]) {
    console.log(Shaan[intrestedIn]);
} else {
    console.log("Wrong request");
}

// Add to object
Shaan.location = "California";
Shaan["Wife"] = "Grace";
console.log(Shaan);


console.log(`${Shaan.firstName} has ${Shaan.friends.length} friends and his best friend is named ${Shaan.friends[0]}`) 
*/
/* 
const Shaan = {
    firstName: "Shaan",
    lastName: "Heugly",
    birthYear: 1997,
    job: "SatCon",
    friends: ["Jarod", "Tanner", "Thomas"],
    hasDriversLicense: true,
    // calcAge: function (birthYear) {
    //     return 2022 - birthYear;
    // },
    // calcAge: function () {
    //     return 2022 - this.birthYear;
    // },
    calcAge: function () {
        this.age = 2022 - this.birthYear;
        return this.age; // not really needed but good to have
    },

    getSummary: function () {
        this.Summary = `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
        return this.Summary;
    }
};

console.log(Shaan.calcAge());
console.log(Shaan.age);

console.log(Shaan.Summary)
console.log(Shaan.getSummary())
console.log(Shaan.Summary) // Can only be used if function is called prior 
*/
/*
// def var with initial value ; stop condition ; update condition
for (let rep = 1; rep <= 10; rep ++ ) {
    console.log(`Lifting weights rep ${rep} 🏋️`);
}
*/
/*
const jonas = ["Jonas", "Schmedtmann", 2037 - 1991, "teacher", ["Mike", "Steve", "Pete"], true];
const types = [];
for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i], typeof jonas[i]);

    //types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}
console.log(types);
*/
/*
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2022 - years[i]);
}
console.log(ages);
*/
/*
// continue and break
const jonas = ["Jonas", "Schmedtmann", 2037 - 1991, "teacher", ["Mike", "Steve", "Pete"], true];
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== "string") continue; // Continue terminates current iteration and move on to the next one
    console.log(jonas[i], typeof jonas[i]);
}
console.log("--- Break with Number ---");
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === "number") break; // kills entire loop
    console.log(jonas[i], typeof jonas[i]);
}
*/
/*
const jonas = ["Jonas", "Schmedtmann", 2037 - 1991, "teacher", ["Mike", "Steve", "Pete"]];
// Loop Backwards
for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i], typeof jonas[i]);
}
*/
/*
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`--- Starting Exercise ${exercise} ---`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Rep ${rep}`);
    }
}
*/
/*
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights rep ${rep} 🏋️`);
}

let rep = 1;
while (rep <= 10) {
    console.log(`WHILE: Lifting weights rep ${rep} 🏋️`);
    rep++;
}
*/
/*
let dice = Math.trunc(Math.random() * 6) + 1;
if (dice === 6) console.log("Congrates you rolled a 6");
while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log("Congrates you rolled a 6");
}
*/
