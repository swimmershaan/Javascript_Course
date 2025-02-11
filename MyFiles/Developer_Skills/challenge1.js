"use strict";

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForcast = function (arr) {
    let output = "";
    for (let i = 0; i < arr.length; i++) {
        output = output + ` ... ${arr[i]}℃ in ${i + 1} days`;
    }
    console.log(output);
};

printForcast(data1);
printForcast(data2);
