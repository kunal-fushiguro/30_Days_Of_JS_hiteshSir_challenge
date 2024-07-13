// Variable Declaration

// Task 1
var a = 11;
console.log(a);

// Task 2
let b = "hello";
console.log(b);

// Constant Declaration

// Task 3
const c = true;
console.log(c);

// Data Types

// Task 4
const value1 = 1;
const value2 = "hello";
const value3 = false;
const value4 = {
  a: "hello",
  b: "world",
};
const value5 = ["hello", "Array"];

console.table({
  value1: typeof value1,
  value2: typeof value2,
  value3: typeof value3,
  value4: typeof value4,
  value5: typeof value5,
});

// Reassigning Variables

// Task 5
let d = 4;
console.log(d);
d = "hello";
console.log(d);

// UnderStanding `const`
const e = "hello";
// e = "hi";
// console.log(e);
// TypeError: Assignment to constant variable.

// Features Request

// 1 :
const name = "John";
const age = 30;
const isStudent = true;
const salary = 1234n;
const person = { name: "Alice", age: 25 };
const langauge = ["English", "Hindi"];
console.log("\n\n");

console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is Student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Salary: ${salary} (Type: ${typeof salary})`);
console.log(`Person: ${JSON.stringify(person)} (Type: ${typeof person})`);
console.log(
  `Language : ${langauge[0]} and  ${langauge[1]} (Type : ${typeof langauge})`
);

// 2 :

let f = 25;
f = 26; // Valid - reassigning the value

const g = 314;
// g = 314159; // Error: Cannot reassign a const variable
