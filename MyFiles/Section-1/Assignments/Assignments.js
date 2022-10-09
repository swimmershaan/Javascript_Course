// Define Vars
const country = "USA";
const continent = "North America";
let population = 329.5;
const isIsland = false;
let language = "English";

// Output Var Values
console.log(country);
console.log(continent);
console.log(population);

/* 
// Output Var Types
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
*/

let populationHalf = population / 2;
console.log(populationHalf);

population++;
console.log(population);

let populationFinland = 6;
console.log(population > populationFinland);
const populationAverage = 33;
console.log(population < populationAverage);

description = `${country} is in ${continent}, and it ${population} million people speak ${language}`;
console.log(description);

// population = 13
// population = 130
if (population > populationAverage) {
    console.log(`${country} is above average`);
} else {
    console.log(`${country} is below average`);
}
/*
console.log("-----------------");
console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);

const numNeighbors = Number(
    prompt("How many neighbour countries does your country have?")
);

if (numNeighbors === 1) {
    console.log('Only 1 Border')
} else if (numNeighbors > 1){
    console.log('More than 1 Border')
} else{
    console.log('No Borders')
}
*/

if (population < 50 && !isIsland && language === "English") {
    console.log(`${country} is a Good Fit for Sarah`);
} else {
    console.log(`Sarah would hate ${country}`);
}

switch (language) {
    case "Chinese":
    case "Mandarin":
        console.log("MOST number of native speakers");
        break;
    case "Spanish":
        console.log("2nd place in number of native speakers");
        break;
    case "English":
        console.log("3rd place");
        break;
    case "Hindi":
        console.log("Number 4");
        break;
    case "Arabic":
        console.log("5th most spoken language");
        break;
    default:
        'Great Language too'
}

console.log(`${country}'s population is ${population>populationAverage ? 'above' : 'below'} average`)
