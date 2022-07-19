'use strict';

/*

let nums=[1,3,4,5,6,7];
// let sumOf = nums.reduce(sum, 0)

// function sum(pred,curr){
//     return pred+curr;
// }
// console.log(sumOf);

let sumOf = nums.reduce((pre, curr)=>pre+curr,0)

console.log(sumOf);

*/

/*

//dlting duplicating numbers..

let nums = [1, 2, 32, 32, 41, 41, 5, 61, 7, 5, 44, 31, 2, 1];
nums.sort((a,b)=> a-b)

let store = Array.from(new Set(nums));

console.log(store);
*/

//converting string to array string and finaly converting array elemnts..

/*

let nums = '12345678';
let store = new Set(nums);
console.log(store); // not an ayyay
//                     so

let store1 = Array.from(nums, convering)
function convering(valu){
    return  Number(valu)
}
console.log(store1);


*/
//random to converting new array like ....

/*
let values = [[1,[2,[4,[5,[6],]]]]];
let res = values.flat(Infinity)
console.log(res);

*/