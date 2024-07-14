// Arithmetic operators

//  task : 1
console.log(1 + 2);
//  task : 2
console.log(1 - 2);
//  task : 3
console.log(1 * 2);
//  task : 4
console.log(12 / 2);
//  task : 5
console.log(12 % 2);

// Assignment opreator
let value1 = 12;
//  task : 6
console.log(++value1);
console.log(value1++);
//  task : 7
console.log(--value1);
console.log(value1--);

// comparison operator
const value2 = 13;
const value3 = 14;
const value4 = 13;

//  task : 8
if (value2 > value3) {
  console.log("true task 8");
}
if (value2 < value3) {
  console.log("true task 8");
}
//  task : 9
if (value2 >= value4) {
  console.log("true task 9");
}
if (value2 <= value4) {
  console.log("true task 9");
}

// task = 10
const value5 = 12;
const value6 = "12";

if (value5 == value6) {
  console.log("true task = 10");
}

if (value5 === value6) {
  console.log("true task = 10");
}

// logical operator

// task = 11
if (true && true) {
  console.log("true task = 11");
}
// task = 12
if (true || false) {
  console.log("true task = 12");
}

// task = 13
if (!false) {
  console.log("true task = 13");
}

// ternary operator
// task = 14
const value7 = -1;
value7 > 0
  ? console.log("number is positive")
  : console.log("number is negative");

// feature 2

const number1 = 12;
const number2 = 14;

if (number1 > number2 && number1 < number2) {
  console.log("true");
} else {
  console.log("false");
}

if (number1 >= number2 && number1 <= number2) {
  console.log("true");
} else {
  console.log("false");
}
if (number1 > number2 || number1 < number2) {
  console.log("true");
} else {
  console.log("false");
}
if (number1 >= number2 || number1 <= number2) {
  console.log("true");
} else {
  console.log("false");
}
if (number1 == number2 || number1 === number2) {
  console.log("true");
} else {
  console.log("false");
}
