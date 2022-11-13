"use strict";

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const checkWinner = function (avgDolphin, avgKoalas) {
    if (avgDolphin >= 2 * avgKoalas) {
        console.log(`Doliphins win ${avgDolphin} to ${avgKoalas}`);
    } else if (avgKoalas >= 2 * avgDolphin) {
        console.log(`Koalas win ${avgKoalas} to ${avgDolphin}`);
    } else {
        console.log(`No Winner, Dolphins: ${avgDolphin}, Koalas: ${avgKoalas}`);
    }
};

console.log(`--- Case 1 ---`);
let avgDolphin = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);
checkWinner(avgDolphin,avgKoalas)

console.log(`--- Case 2 ---`);
avgDolphin = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
checkWinner(avgDolphin, avgKoalas);