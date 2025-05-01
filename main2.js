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
/*
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
*/
/*
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Machael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 1998);
console.log(friends[0]);  //array is zero based
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]); // this line is the same as console.log(friends[2])  3-2 the last element of the array

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice']; replacing the whole array is not allowed

const secondName = 'jonas';
const willy = [secondName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(willy);

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const yearsy = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(yearsy[0]);
const age2 = calcAge(yearsy[1]);
const age3 = calcAge(yearsy[yearsy.length - 1]);

console.log(age1, age2, age3);
const ages = [age1, age2, age3]
console.log(ages);
*/

// Add elements
/*const friends = ['Machael', 'Steven', 'Peter'];
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

const shifted = friends.shift();
console.log(shifted);
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log('You have a friend called Peter');
}
*/

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Machael', 'Peter', 'Steven']
];
console.log(jonasArray);

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Machael', 'Peter', 'Steven']
};

console.log(jonas.firstName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);

const interstedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');
console.log(jonas[interstedIn]);
//interstedIn會被替換成打字輸入的值，再利用這個值去找jonas裡面的資料

if(jonas[interstedIn]){
    console.log(jonas[interstedIn])
}else {
    console.log('Wrong request!');
}

jonas.location = 'Germany';
jonas['mail']= 'jonas60822@mail.com';
console.log(jonas);

//Challenge
// the output will be 'Jonas has three friends, and his best friend is called Machael' the values are Jonas, three, and Machael

const bestFriend = prompt('How many friends does Jonas have, and who is his best friend');  // const bestFriend = 使用者輸入的值   

if(jonas.friends.includes(bestFriend)){
    console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${bestFriend}`);
}else{
    console.log('Wrong request');
}