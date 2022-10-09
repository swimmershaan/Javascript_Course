let score1Dolphins = 96;
let score2Dolphins = 108;
let score3Dolphins = 89;

let score1Koalas = 88;
let score2Koalas = 91;
let score3Koalas = 110;

let avgDolphins, avgKoalas;

avgDolphins = (score1Dolphins + score2Dolphins + score3Dolphins) / 3;
avgKoalas = (score1Koalas + score2Koalas + score3Koalas) / 3;

if (avgDolphins > avgKoalas) {
    console.log(`Dolphins Win ${avgDolphins} to ${avgKoalas}`);
} else if (avgKoalas > avgDolphins) {
    console.log(`Koalas Win ${avgKoalas} to ${avgDolphins}`);
} else {
    console.log(`Its a Draw at ${avgDolphins}`);
}

console.log(`--- Bonus 1 ---`);

let minimumScore = 100;

score1Dolphins = 97;
score2Dolphins = 112;
score3Dolphins = 5;

score1Koalas = 109;
score2Koalas = 95;
score3Koalas = 5;

avgDolphins = (score1Dolphins + score2Dolphins + score3Dolphins) / 3;
avgKoalas = (score1Koalas + score2Koalas + score3Koalas) / 3;

// His Code
if (avgDolphins > avgKoalas && avgDolphins>=minimumScore){
    console.log(`Dolphins Win ${avgDolphins} to ${avgKoalas}`);
} else if (avgKoalas > avgDolphins && avgKoalas >= minimumScore) {
    console.log(`Koalas Win ${avgKoalas} to ${avgDolphins}`);
} else {
    console.log(`Its a Draw at ${avgDolphins}`);
}


console.log(`--- Bonus 2 ---`);

minimumScore = 100;

score1Dolphins = 97;
score2Dolphins = 112;
score3Dolphins = 5;

score1Koalas = 109;
score2Koalas = 95;
score3Koalas = 5;

avgDolphins = (score1Dolphins + score2Dolphins + score3Dolphins) / 3;
avgKoalas = (score1Koalas + score2Koalas + score3Koalas) / 3;

if ((avgDolphins >= minimumScore) && (avgKoalas >= minimumScore)){
    if (avgDolphins > avgKoalas) {
        console.log(`Dolphins Win ${avgDolphins} to ${avgKoalas}`);
    } else if (avgKoalas > avgDolphins) {
    console.log(`Koalas Win ${avgKoalas} to ${avgDolphins}`);
    } else {
        console.log(`Its a Draw at ${avgDolphins}`);
    }
} else if (!(avgDolphins >= minimumScore) && (avgKoalas >= minimumScore)){
    console.log(`Koalas Win ${avgKoalas} to ${avgDolphins}`);
} else if ((avgDolphins >= minimumScore) && !(avgKoalas >= minimumScore)){
    console.log(`Dolphins Win ${avgDolphins} to ${avgKoalas}`);
} else if (!(avgDolphins >= minimumScore) && !(avgKoalas >= minimumScore)){
    console.log('No Winners Today')
}
