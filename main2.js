"use strict";
/*
let hasDrivesLicense = false;
const passTest = true;

if (passTest) hasDrivesLicense = true;
if (hasDrivesLicense) console.log("I can drive");
*/
/*
function logger() {
  console.log("My name is Jonas");
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

const num = Number("23");
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
console.log(age1);

// Funciton expression   no name!!!
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);
console.log(age1, age2);

// Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;

const age3 = calcAge3(1998);
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement}`;
};

console.log(yearUntilRetirement(1998, "Willy"));
console.log(yearUntilRetirement(1988, "Annie"));
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
};

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
};

console.log(yearUntilRetirement(1995, "Annie"));
console.log(yearUntilRetirement(1911, "Willy"));
*/
/*
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Machael", "Steven", "Peter"];
console.log(friends);

const years = new Array(1991, 1984, 2008, 1998);
console.log(friends[0]); //array is zero based
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]); // this line is the same as console.log(friends[2])  3-2 the last element of the array

friends[2] = "Jay";
console.log(friends);
// friends = ['Bob', 'Alice']; replacing the whole array is not allowed

const secondName = "jonas";
const willy = [secondName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(willy);

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const yearsy = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(yearsy[0]);
const age2 = calcAge(yearsy[1]);
const age3 = calcAge(yearsy[yearsy.length - 1]);

console.log(age1, age2, age3);
const ages = [age1, age2, age3];
console.log(ages);
*/
// Add elements
/*
const friends = ["Machael", "Steven", "Peter"];
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

// Remove elements
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

const shifted = friends.shift();
console.log(shifted);
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log("You have a friend called Peter");
}
*/
/*
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Machael", "Peter", "Steven"],
];
console.log(jonasArray);

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Machael", "Peter", "Steven"],
};

console.log(jonas.firstName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);

const interstedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends"
);
console.log(jonas[interstedIn]);
//interstedIn會被替換成打字輸入的值，再利用這個值去找jonas裡面的資料

if (jonas[interstedIn]) {
  console.log(jonas[interstedIn]);
} else {
  console.log("Wrong request!");
}

jonas.location = "Germany";
jonas["mail"] = "jonas60822@mail.com";
console.log(jonas);

//Challenge
// the output will be 'Jonas has three friends, and his best friend is called Machael' the values are Jonas, three, and Machael

const bestFriend = prompt(
  "How many friends does Jonas have, and who is his best friend"
); // const bestFriend = 使用者輸入的值

if (jonas.friends.includes(bestFriend)) {
  console.log(
    `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${bestFriend}`
  );
} else {
  console.log("Wrong request");
}

let practice;
console.log(typeof practice);

practice = 25;
console.log(typeof practice);
*/
/*
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtman",
  birthYear: 1991,
  job: "teacher",
  friends: ["Machael", "Peter", "Steven"],
  hasDriversLicense: true,
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${jonas.firstName} is a ${this.calcAge()}-year-old ${
      jonas.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} drive's license`;
  },
};

console.log(jonas.getSummary());
*/
/*
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];
const types = [];

for (let i = 0; i < jonasArray.length; i++) {
  console.log(jonasArray[i], typeof jonasArray[i]);

  types.push(typeof jonasArray[i]);
}
console.log(types);
*/
/*
console.log("Lifting weights repetition 1");
console.log("Lifting weights repetition 2");
console.log("Lifting weights repetition 3");
console.log("Lifting weights repetition 4");
console.log("Lifting weights repetition 5");
console.log("Lifting weights repetition 6");
console.log("Lifting weights repetition 7");
console.log("Lifting weights repetition 8");
console.log("Lifting weights repetition 9");
console.log("Lifting weights repetition 10");
*/
/*
for (let rep = 0; rep < 30; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  "playing computer",
  true,
];
*/
/*
const types = [];

for (let i = 0; i < jonasArray.length; i++) {
  console.log(jonasArray[i], typeof jonasArray[i]);
  types.push(typeof jonasArray[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const age = [];

for (let i = 0; i < years.length; i++) {
  age.push(2037 - years[i]);
}
console.log(age);

// continue and break

for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== "string") continue;

  console.log(jonasArray[i], typeof jonasArray[i]);
}

for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] === "number") break;

  console.log(jonasArray[i], typeof jonasArray[i]);
}
*/
/*
for (let i = jonasArray.length - 1; i >= 0; i--) {
  console.log(jonasArray[i], typeof jonasArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`--- Starting exercise ${exercise}---`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weight repetition ${rep}`);
  }
}

//while
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

// while correspondence

let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6);
while (dice !== 0) {
  console.log(dice, "verified");
  dice = Math.trunc(Math.random() * 6);
  if (dice === 0) console.log("Loop is about to end ...");
}
*/
//console.log(dice);
function checkMoney(n) {
  const bill = n % 100;
  if (bill === 0 && n >= 100 && n <= 100000) {
    return true;
  } else {
    return false;
  }
}
console.log(checkMoney(500));

//function findMax(nums) {}

function findMax(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        // 交換 nums[i] 和 nums[j]
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }
  }
  return nums[nums.length - 1];
}

console.log(findMax([5, 1, 9, 3, 6]));
