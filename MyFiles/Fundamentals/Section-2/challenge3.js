"use strict";

const mark = {
    name: "Mark Miller",
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    },
};

const john = {
    name: "John Smith",
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    },
};

if (mark.calcBMI() > john.calcBMI()) {
    console.log(`${mark.name}'s BMI (${mark.bmi}) is higher than ${john.name}'s (${john.bmi})`);
} else if (john.calcBMI() > mark.calcBMI()) {
    console.log(`${john.name}'s BMI (${john.bmi}) is higher than ${mark.name}'s (${mark.bmi})`);
} else {
	console.log(`${mark.name} and ${john.name} have the same BMI at ${mark.bmi}`)
}
