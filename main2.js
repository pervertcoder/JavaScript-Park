'use strict';
/*
let hasDrivesLicense = false;
const passTest = true;

if (passTest) hasDrivesLicense = true;
if (hasDrivesLicense) console.log('I can drive');
*/
/*
function logger() {
    console.log('My name is Jonas');
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
console.log(typeof 23);

function operationExperiment(mouse) {
    return mouse * mouse;
}


const number = operationExperiment(564);
console.log(number);
*/
/*
// Function declaration      can declare a const first, then define a function
const age1 = calcAge(1998);

function calcAge(birthYear) {
    return 2037 - birthYear;
}
/*console.log(age1);

// Funciton expression   no name!!!
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2);

// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;

const age3 = calcAge3(1998);
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement}`;
}

console.log(yearUntilRetirement(1998, 'Willy'));
console.log(yearUntilRetirement(1988, 'Annie'));
*/

function cutFruitPieces(fruit) {
    return fruit * 4;
}


function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    return `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges`;
}

console.log(fruitProcessor(5, 2));



const calcAge = function (birthYear) {
    return 2037 - birthYear;
}




const yearUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement}`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return 9999;
    }


    // return `${firstName} retires in ${retirement}`;
}

console.log(yearUntilRetirement(1995, 'Annie'));
console.log(yearUntilRetirement(1911, 'Willy'));
