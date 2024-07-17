// task 1

function oddOrNot(num) {
  if (num % 2 == 0) {
    return "odd";
  }
  return "even";
}

console.log(oddOrNot(2));

// task 2

function sqr(num) {
  return num * num;
}
console.log(sqr(2));

// task 3
function max(num, num2) {
  if (num > num2) {
    return num;
  } else {
    return num2;
  }
  return "equal";
}
console.log(max(2, 3));

// task 4

function con(str1, str2) {
  return str1 + str2;
}
console.log(con("hello", "world"));

// task 5

const sum2 = (num1, num2) => {
  return num1 + num2;
};
console.log(sum2(1, 2));

// task 6

const contain = (str) => {
  for (let i = 0; i < str.length; i++) {
    let j = str.charCodeAt(i);
    if (
      !(j >= 65 && j <= 90) &&
      !(j >= 97 && j <= 122) &&
      !(j >= 48 && j <= 57)
    ) {
      return console.log("String contains special characters");
    }
  }
  return console.log("String do not contains special characters");
};
contain("kun$al");

// task 7

function product(str1, str2 = "all") {
  return str1 + str2;
}

console.log(product("gaming"));
// task 8

function person(name, age = "18+") {
  return name + age;
}

console.log(person("kunal"));

// task 9

function example1(cbFn) {
  cbFn();
}

function callbackfn() {
  console.log("hello");
}

example1(callbackfn);
example1(callbackfn);
example1(callbackfn);

// task 10

function example2(cbFn, cbFn2, value) {
  const result = cbFn(value);
  cbFn2(result);
}

function callbackfn1(val) {
  return val * val;
}

function callbackfn2(val) {
  console.log(val);
}

example2(callbackfn1, callbackfn2, 12);
