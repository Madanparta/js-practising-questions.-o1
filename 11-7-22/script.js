"use strict;";

// 1 Create an Array with the following elements: “Bike”, “Scooter”, “Car”, “Truck”, “JCB” , “Helicopter” and return the 4th element from the Array

/*

const vechicles = ["Bike", "Scooter", "Car", "Truck", "JCB", "Helicopter"];

function returnFourth(arr) {
  return arr[3];
}
console.log(returnFourth(vechicles));

*/

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 2 You are given an array arr, if the length of the array is greater than 5 return “Hello” else return “World”

/*

const arrays = [1, 2, 3, 4, 5, 6, 7];

const returnHello = function (arr) {
  if (arr.length < 5) return "World";
  return "Hello";
};
console.log(returnHello(arrays));

*/

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 3. You are given an integer array as function parameters. Find and return the sum of the first and last element of the array.

/*

const arrays = [1, 2, 3, 4, 5, 6, 7];

const sumOfFirstLast = function (arr) {
  let first = arr.pop();
  let last = arr.shift();
  return first + last;
};
console.log(sumOfFirstLast(arrays));

*/

// 4 .Aunt May wants to distribute candies to 5 childrens, you are given an array of 5 elements, each element depicts how many candies each child will get. Find and return how many candies Aunt May have in total.

/*

const totalCandies = [1, 3, 4, 7, 5];

const childrensCandies = function (candies) {
  let sum = 0;
  for (let i = 0; i < candies.length; i++) {
    sum += candies[i];
  }
  return sum;
};
console.log(childrensCandies(totalCandies));

*/

//5.  You are given two arrays arr1 and arr2, concatenate arr1 and arr2, and return the resulting array.

/*

const arrays1 = [1, 3];
const arrays2 = [2, 5];

const concatingArrays = function (arr1, arr2) {
  return arr1.concat(arr2);
};
console.log(concatingArrays(arrays1, arrays2));

*/

// 6. Given a variable arr as function parameter, return “YES” if the given variable arr is an array else return “NO”

/*

const arrays1 = [1, 2, 3];
// const arrays1 = 5;

const checking = function (arr) {
  return Array.isArray(arr) ? "YES" : "NO";
};
console.log(checking(arrays1));

*/

// 7. You are given two variables arr and element as function parameters. Check if the given variable arr is an array or not, if it is an array return the index of element in the array, else return “Not Array”.

/*

const arrayElem = function (arr, n) {
  if (Array.isArray(arr)) return arr.indexOf(n);
  return "Not Array";
};
console.log(arrayElem([1, 2, 3]));
console.log(arrayElem([1, 2, 3], 3));
console.log(arrayElem(55));

*/

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 8. Given an integer array and an element as function parameter, return the index of the given element if it exists, else return “Not Found”. If the array contains multiple occurence of an element return the index of last occurrence of the element.

/*

const checkinglastElem = function (arr, n) {
  let checkingIndex = arr.lastIndexOf(n);
  if (checkingIndex == -1) return "Not Found";
  return checkingIndex;
};
console.log(checkinglastElem([2, 5, 10], 9));
console.log(checkinglastElem([2, 5, 10, 7, 5, 19, 10], 5));

*/

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 9.
