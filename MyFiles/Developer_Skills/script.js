// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/*
const x = "23";
if (x === 23) console.log(23);

const calcAge = birthYear => 2022 - birthYear;

console.log(95);
*/

// //////////////////////////////////////////////////
/*
// Given an array of temperatures of one day, valvulate the temperature amlitude. Keep in mind that sometimes there might be a sensor error

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp Amp? Answer: diff between highest and lowest temp
// - How to compute max and min temp?
// - What is a sensor error and what they do?

// 2) Breaking up into sub-problems
// - Ingnore errors
// - Find max val
// - Find min val
// - Find amp val

const calcTempAmplitude = function (temps) {
    let max = temps[0];
    let min = temps[0];
    for (let i = 1; i < temps.length; i++) {
        let curTemp = temps[i];
        if (typeof curTemp !== "number") continue;

        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// Function should now receive 2 arrays of temps
// 1) Understanding the problem
// - Merge the two arrays at the start

// 2) Breaking up into sub-problems
// - How merge two arrays

const calcTempAmplitude2 = function (temps1, temps2) {
    const temps = temps1.concat(temps2);
    let max = temps[0];
    let min = temps[0];

    for (let i = 1; i < temps.length; i++) {
        let curTemp = temps[i];
        if (typeof curTemp !== "number") continue;
        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }

    return max - min;
};

const amplitude2 = calcTempAmplitude2([3, 5, 1], [9, 0, 5]);
console.log(amplitude2);
*/
// //////////////////////////////////////////////////

const measureKelvin = function () {
    const measurement = {
        type: "temp",
        unit: "celsius",
        //value: Number(prompt("Degrees celsius:")),
        value: 10,
    };

    //console.log(measurement);
    //console.table(measurement);

    //console.log(measurement.value);
    //console.warn(measurement.value);
    //console.error(measurement.value);
	//debugger;
    const kelvin = measurement.value + 273.3;
    return kelvin;
};
console.log(measureKelvin());
