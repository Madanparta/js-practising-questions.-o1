"use strict;";

// const arr = [5, 1, 3, 2, 6];

// double the  value..

/*
function double(x) {
  return x * 2;
}

const output = arr.map(double);
console.log(output);

*/

/*
function triple(x) {
  return x * 3;  //triple of the function..
}
const output = arr.map(triple);
console.log(output);

*/

/*
const output = arr.map(
  (x) => x * 3
  //triple of the function..
);
console.log(output);
*/
/*
const output = arr.map((x) => x.toString(2));
console.log(output);
*/

// filter function...

// const arr = [5, 1, 3, 2, 6];

/*
//filter odd values;
function isOdd(x) {
  return x % 2;
}

const output = arr.filter(isOdd);
console.log(output);
*/

/*
//filter even values;
function isEven(x) {
  return x % 2 == 0;
}

const output = arr.filter(isEven);
console.log(output);

*/

//filter even values;

/*
const output = arr.filter((x) => x > 3);

console.log(output);

*/

// reduce is nothing any reduceing any values..
// reduce is taken an array and takeout the onesingle values.

const arr = [5, 1, 3, 2, 6];

// sum or max;

// function findSum(arr) {   // normal function..
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
// console.log(findSum(arr));
/*
const output = arr.reduce(function (acc, curr) {
  console.log(acc, curr);
  acc = acc + curr;
  return acc;
});
console.log(output);

*/

// function findMax(arr) {
//   // normal function..
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (max < arr[i]) max = arr[i];
//   }
//   return max;
// }
// console.log(findMax(arr));
/*

const output = arr.reduce(function (max, curr) {
  if (curr > max) max = curr;
  return max;
}, 0);
console.log(output);

*/

/*

const user = [
  { firstName: "madan", lastName: "kumar", age: 26 },
  { firstName: "madan1", lastName: "kumar", age: 29 },
  { firstName: "madan2", lastName: "kumar", age: 36 },
  { firstName: "madan3", lastName: "kumar", age: 40 },
  { firstName: "madan4", lastName: "kumar", age: 26 },
  { firstName: "madan5", lastName: "kumar", age: 29 },
  { firstName: "madan6", lastName: "kumar", age: 42 },
  { firstName: "madan7", lastName: "kumar", age: 70 },
];

*/
/*
//we want to first and last name.. in array.

const output = user.map((x) => x.firstName + " " + x.lastName);
console.log(output);


*/

/*

const output = user.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    // console.log(acc[curr.age]);
    acc[curr.age] = ++acc[curr.age];
    // console.log(++acc[curr.age]);
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});
console.log(output);

*/

/*

const output = user.filter((x) => x.age < 30).map((x) => x.firstName);
console.log(output);
*/
