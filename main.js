/*let js = 'amazing';
console.log(40 + 8 + 23 - 10);
console.log("Jonas");
console.log(23);
let firstName = "Willy";
console.log(firstName);
console.log(firstName);
console.log(firstName);
let country = "Taiwan";
let continent = "island";
let population = "23,000,000";
console.log(country);
console.log(continent);
console.log(population);
// Variable name convention
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);


javascriptIsFun = "Yes!";
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);
year = 1998;
console.log(year);
console.log(typeof null);


let age = 30;
age = 35;
console.log(age);

const birthYear = 1998;
console.log(birthYear);

var job = "programmer";
console.log(job);
*/

// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2 *
/*
const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);
*/
// Assignment operators
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators

console.log(ageJonas < ageSarah); // >, <, <=, >=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let z, y;
z = y = 25 - 10 - 5;
console.log(z, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

// coding challenge 1-1
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;
let markBMI = massMark / (heightMark ** 2);
let johnBMI = massJohn / (heightJohn ** 2);
console.log(markBMI, johnBMI);
let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

// coding challenge 1-2
massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;
markBMI = massMark / (heightMark ** 2);
johnBMI = massJohn / (heightJohn ** 2);
console.log(markBMI, johnBMI);
markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas = "I'm" + " " + firstName + ", a" + " " + (year - birthYear) + "-year-old" + " " + job + "!";
console.log(jonas);

// template literal
const jonasNew = `I'm ${firstName}, a ${year - birthYear}-year-old ${job}!`;
console.log(jonasNew);


console.log(`Just a rehular string...`);
console.log("String with \n\
multiple \n\
lines");

console.log(`String
multiple
lines`);

const age = 15;
/*const isOldEnough = age >= 18;*/

if (age >= 18) {
    console.log("Sarah can start driving license");
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another 
${yearsLeft} years`);
}

const birthDay = 1985;
let century;

if (birthDay <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);