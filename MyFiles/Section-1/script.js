/*
let js = "amazing";
if (js = "amazing") alert("JavaScript is FUN!");
console.log(40 + 8 + 23 - 10);
*/
/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Hello");

javascriptIsFun = "Yes!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

// Known Bug
console.log(typeof null);
*/
/* 
// Let allows you to define empty vars and change them later
let age = 30;
age = 31;

// Can not change a constant later
const birthYear = 1991;
// birthYear = 1990;

// const job;

var job = 'programmer'
job = 'teacher';

lastName = 'Heugly'
console.log(lastName)
*/
/* 
// Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 => 2 * 2 * 2 = 8
const firstName = "Shaan";
const lastName = "Heugly";
console.log(firstName + " " + lastName);

// Assignment Operators
let x = 10 + 5;
console.log(x);
x += 10;
console.log(x);
x *= 4;
console.log(x);
x /= 2;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah)
console.log(ageJonas < ageSarah);
console.log(ageJonas >= ageSarah);
console.log(ageJonas <= ageSarah);

console.log(now - 1991 > now - 2018);
*/
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

let averageAge = ageJonas + ageSarah / 2;
console.log(ageJonas, ageSarah, averageAge);

averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/
/* 
const firstName = "Shaan";
const job = "Satellite Controller";
const birthYear = 1997;
const year = 2022;

let shaan =
    "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(shaan);

shaan = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(shaan);

console.log(`Just a regular string...`);

console.log("String with \n\
multiple \n\
lines");
console.log(`String with
multiple
lines`);
*/
/* 
const age = 15;

if (age >= 18) {
    console.log("Sara can start driving license 🚗");
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years 🙃`);
}

let birthYear = 1997;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
 */
/*
// Type Conversion
let inputYear = "1991";
console.log(Number(inputYear), inputYear);
inputYear = Number(inputYear);
console.log(inputYear + 18);

console.log(Number("Shaan"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("I am " + 23 + " years old");
console.log("I am " + String(23) + " years old");
console.log("I am " + "23" + " years old");

console.log("23" - "10" - 3);
console.log("23" / "2");

let n = "1" + 1; // "11"
n = n - 1;
console.log(n);

console.log(2 + 3 + 4 + "5");
console.log('10'-'4'-'3'-2+'5');
*/
/*
// 5 Falsy values : 0,'', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Shaan"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 3;
if (money) {
    console.log("Don't Spend it all");
} else {
    console.log("You should get a job");
}

let height = 0; // Zero is also a falsy value
if (height) {
    console.log("Height is defined");
} else {
    console.log("Height is undefined");
}
*/
/*
const age = "18";
if (age === 18) console.log("You are an adult (strict)");
if (age == 18) console.log("You are an adult (loose)");

const favorite = Number(prompt("What's your favorite Number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 4) {
    console.log("4 is the best!");
} else if (favorite === 3) {
    console.log("3 is cool too!");
} else if (favorite === 5) {
    console.log("5 is cool too!");
} else {
    console.log("Your number sucks");
}

if (favorite !== 4) console.log("Why not 4?");
*/

/*
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// if(hasDriversLicense && hasGoodVision){
//     console.log('Sarah is able to drive')
// } else {
//     console.log('Someone else should drive')
// }

const isTired = false // C

// console.log(hasDriversLicense || hasGoodVision || isTired);
// console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive");
} else {
    console.log("Someone else should drive");
}
*/
/*
const day = "sunday";

switch (day) {
    case "monday": // day === 'monday'
        console.log("Plan course structure");
        console.log("Go to coding meetup");
        break;
    case "tuesday":
        console.log("Prepare theory videos");
        break;
    case "wednesday":
    case "thursday":
        console.log("Write code examples");
        break;
    case "friday":
        console.log("Record Videos");
        break;
    case "saturday":
    case "sunday":
        console.log("Enjoy the weekend");
        break;
    default:
        console.log("Not a Valid Day");
        break;
}

if (day === "monday") {
    console.log("Plan course structure");
    console.log("Go to coding meetup");
} else if (day === "tuesday") {
    console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
    console.log("Write code examples");
} else if (day === "friday") {
    console.log("Record Videos");
} else if (day === "saturday" || day === "sunday") {
    console.log("Enjoy the weekend");
} else {
    console.log("Not a Valid Day");
}
*/

const age = 23;

// age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water')

const drink = age >= 18 ? "wine" : "water";
console.log(`I like to drink ${drink}`);

let drink2;
if (age >= 18) {
    drink2 = "wine";
} else {
    drink2 = "water";
}
console.log(`I like to drink ${drink2}`);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
