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
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2 *

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

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


console.log(`Just a regular string...`);
console.log("String with \n\
multiple \n\
lines");

console.log(`String
multiple
lines`);
*/
/*const age = 15;
/*const isOldEnough = age >= 18;

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
console.log(century);*/

//conversion section
/*
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

//coercion section
console.log("I am " + 23 + " years old");
console.log("I am " + "23" + " years old");
console.log("I am " + String(23) + " years old");
console.log("23" - "10" - 3);
console.log("23" + "10" + 3);
console.log("23" * "2");
console.log("23" / "2");

let n = "1" + 1; // "11"
n = n - 1;
console.log(n);
console.log(typeof n);

// + can work as string with string or string with number, so it turns out to be string as well
// however, minus, multiplication and division, can not work with string, so in the case of string with string and string with number, it will turn out to be number because of coercion


// tricky case
let m = "10" - "4" - 3 - "2" + "5";
console.log(m);
console.log(typeof m);
*/

/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log("You should get a job!");
}

let height = 20;
if (height) {
    console.log("height is well defined");
} else {
    console.log("height is not defined");
}
*/
/*
const age = "18";
if (age === 18) console.log("You just became an adult(strict)");

if (age == 18) console.log("You just became an adult(loose)");

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
    console.log("Cool! 23 is an amazing number!");
} else if (favorite === 7) {
    console.log("7 is also a cool number");
} else {
    console.log("Number is not 23 or7");
}

if (favorite !== 23) console.log("Why not 23?");
*/
/*
const hasDrivrsLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDrivrsLicense && hasGoodVision);
console.log(hasDrivrsLicense || hasGoodVision);
console.log(!hasDrivrsLicense);


if (hasDrivrsLicense && hasGoodVision) {
    console.log("Sarah is able to drive");
} else {
    console.log("Someone else should drive");
}

const isTired = false; // C
console.log(hasDrivrsLicense && hasGoodVision && !isTired);

if (hasDrivrsLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive");
} else {
    console.log("Someone else should drive");
}
*/
/*
const day = "wednesday";

switch (day) {
    case "monday":
        console.log("Plan couse structure");
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
        console.log("Record videos");
        break;
    case "saturday":
    case "sunday":
        console.log("Enjoy the weekend");
    default:
        console.log("Not a valid day");
}
*/
/*
const day = "saturday";

if (day === "monday") {
    console.log("Plan couse structure");
    console.log("Go to coding meetup");
} else if (day === "tuesday") {
    console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
    console.log("Write code examples");
} else if (day === "friday") {
    console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
    console.log("Enjoy the weekend");
} else {
    console.log("Not a valid day");
}
*/
const age = 18;
const drink = age >= 18 ? "wine" : "water";
console.log(drink);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
