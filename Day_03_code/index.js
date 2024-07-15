// Task 1
const number1 = 12;

if (number1 > 0) {
  console.log("Number is positive");
} else {
  console.log("Number is negative");
}

// task 2
const number2 = 18;

if (number2 >= 18) {
  console.log("eligible");
} else {
  console.log("not eligible");
}

// task 3

const number3 = 13;

if (number1 > number2) {
  if (number1 > number3) {
    console.log("nummber 1 is largest");
  } else {
    console.log("nummber 3 is largest");
  }
} else if (number2 > number3) {
  console.log("nummber 2 is largest");
} else if (number2 < number3) {
  console.log("nummber 3 is largest");
} else {
  console.log("Invalid");
}

// task 4

const number4 = 7;

switch (number4) {
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("tuesday");
    break;
  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("thursday");
    break;
  case 5:
    console.log("friday");
    break;
  case 6:
    console.log("saturday");
    break;
  case 7:
    console.log("sunday");
    break;
  default:
    console.log("Invalid");
    break;
}

// task 5

const score = 77;

switch (score) {
  case score <= 100:
    console.log("A");
    break;
  case score <= 90:
    console.log("B");
    break;
  case score <= 80:
    console.log("C");
    break;
  case score <= 70:
    console.log("D");
    break;
  case score <= 60:
    console.log("F");
    break;
  default:
    console.log("INVALID SCORE");
    break;
}

// task : 6

const number5 = 7;

console.log(number5 > 0 ? "positive" : "negative");

// task : 7

const year = 2008;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(true);
} else {
  console.log(false);
}
