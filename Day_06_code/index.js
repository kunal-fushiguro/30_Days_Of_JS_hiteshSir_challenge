// task : 1

const arr = [1, 2, 3, 4, 5];
console.log(arr);

// task :2
console.log(arr[0], arr[4]);

// task : 3
arr.push(12);
console.log(arr);
// task : 4
arr.pop();
console.log(arr);
// task : 5
arr.unshift(12);
console.log(arr);
// task : 6
arr.shift();
console.log(arr);

// task : 7
const newArray = [];

arr.map((val) => {
  newArray.push(val * 2);
});

console.log(newArray);
// task : 8
const newArray2 = arr.filter((val) => !(val % 2 == 1));

console.log(newArray2);

// task : 9

const sum = arr.reduce((perv, curr) => {
  return (perv = perv + curr);
});

console.log(sum);

// task : 10

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// task :11

arr.forEach((val) => {
  console.log(val);
});

//  task : 12

const twoDArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];

console.log(twoDArray);

// task : 13

console.log(twoDArray[2][0]);
