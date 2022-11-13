"use strict";

/* 
function describeCountry(country, population, capitalCity) {
    let description = `${country} has ${population} million people and its capital city is ${capitalCity}`;
    return description;
} 
*/

function percentageOfWorld(population) {
    const wordPopulation = 7900;
    return (population / wordPopulation) * 100;
}
/* 
const percentageOfWorld2 = function (population) {
    const wordPopulation = 7900;
    return (population / wordPopulation) * 100;
};

const percentageOfWorld3 = (population) => {
    const wordPopulation = 7900;
    return (population / wordPopulation) * 100;
};
*/
/* 
console.log(describeCountry("Finland", 6, "Helsinki"));
console.log(describeCountry("The U.S.A", 329.5, "Washington D.C."));
console.log(describeCountry("Portugal", 10, "Lisbon")); 
*/
/* 
console.log(percentageOfWorld(6));
console.log(percentageOfWorld(329.5));
console.log(percentageOfWorld(10));

console.log(percentageOfWorld2(6));
console.log(percentageOfWorld2(329.5));
console.log(percentageOfWorld2(10));

console.log(percentageOfWorld3(6));
console.log(percentageOfWorld3(329.5));
console.log(percentageOfWorld3(10));
*/
/* 
function describePopulation(country, population) {
    return `${country} has ${population} million people which is about ${percentageOfWorld(population)}% of the world population`;
}

console.log(describePopulation("Finland", 6));
console.log(describePopulation("The U.S.A", 329.5));
console.log(describePopulation("Portugal", 10));
*/
/* 
const populations = [6, 329.5, 10, 37]; // Finland, USA, Protugal, Canada
console.log(populations.length === 4);
const percentages = [percentageOfWorld(populations[0]), percentageOfWorld(populations[1]), percentageOfWorld(populations[2]), percentageOfWorld(populations[3])];
console.log(populations, percentages);
*/
/* 
const neighbors = ["Canada", "Mexico"];
console.log(neighbors);
neighbors.push("Utopia");
console.log(neighbors);
neighbors.pop("Utopia");
console.log(neighbors);

if (neighbors.includes("Germany")) {
    console.log("Kepp on Eye on Germany");
} else {
    console.log("Probably not in Central Europe, you good bro");
}

neighbors[neighbors.indexOf("Mexico")] = "Republic of Mexico";
console.log(neighbors);
*/
/*
const myCountry = {
    country: "The United States of America",
    capitol: "Washington D.C.",
    language: "English",
    population: 329.5,
    neighbors: ["Canada", "Mexico"],
    //neighbors: [],
    describe: function () {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighboring countries, and a capitol called ${this.capitol}`);
    },
    checkIsland: function () {
        this.isIsland = this.neighbors.length === 0;
        return this.isIsland;
    },
};

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry.isIsland)

console.log(myCountry.population);
myCountry.population += 2;
console.log(myCountry.population);
myCountry["population"] -= 2;
console.log(myCountry.population);
*/
//for (let i = 1; i <= 50; i++) console.log(`Voter ${i} is currently voting`)
/*
const populations = [6, 329.5, 10, 37]; // Finland, USA, Protugal, Canada

console.log(populations.length === 4);
const percentages = [percentageOfWorld(populations[0]), percentageOfWorld(populations[1]), percentageOfWorld(populations[2]), percentageOfWorld(populations[3])];
console.log(populations, percentages);

const percentages2 = [];
for (let i = 0; i < populations.length; i++) percentages2.push(percentageOfWorld(populations[i]))
console.log(populations,percentages2)
*/
/*
const listOfNeighbors = [["Canada", "Mexico"], ["Spain"], ["Norway", "Sweden", "Russia"]];
for (let i = 0; i < listOfNeighbors.length; i++) {
    for (let j = 0; j < listOfNeighbors[i].length; j++) {
        console.log(`Neighbor: ${listOfNeighbors[i][j]}`);
    }
}
*/
/*
const populations = [6, 329.5, 10, 37]; // Finland, USA, Protugal, Canada

console.log(populations.length === 4);
const percentages = [percentageOfWorld(populations[0]), percentageOfWorld(populations[1]), percentageOfWorld(populations[2]), percentageOfWorld(populations[3])];
console.log(populations, percentages);

const percentages2 = [];
for (let i = 0; i < populations.length; i++) percentages2.push(percentageOfWorld(populations[i]));
console.log(populations, percentages2);

const percentages3 = [];
let i = 0;
while (i < populations.length){
    percentages3.push(percentageOfWorld(populations[i]));
    i++;
}
console.log(populations, percentages3);
*/
