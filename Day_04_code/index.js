// task 1

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// task 2
for (let i = 1; i <= 10; i++) {
  console.log("5 * " + i + " = " + i * 5);
}

// task 3

let sum = 0;
let count = 1;

while (count <= 10) {
  sum += count;
  count++;
}
console.log(sum);

// task 4
let count2 = 10;

while (count2 > 0) {
  console.log(count2);
  --count2;
}

// task 5

let count3 = 1;

do {
  console.log(count3);
  count3++;
} while (count3 <= 5);

// task 6

let fac = 1;

let count4 = 7;
let j = 2;

do {
  fac *= j;
  j++;
} while (j <= count4);

console.log(fac);

// task 7

let pattern = "";

for (let i = 0; i < 5; i++) {
  for (let k = 0; k <= i; k++) {
    pattern += "*";
  }
  if (i < 4) {
    pattern += "\n";
  }
}
console.log(pattern);

// task 8
for (let i = 1; i <= 10; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i);
}
// task 9
for (let i = 1; i <= 10; i++) {
  if (i == 7) {
    break;
  }
  console.log(i);
}
