'use strict;'
// array or not.
// 1.1
// const is_array = [1, 2,[ 4, 0]];
// const is_array = "36666";
// let checking = 0;
// if(Array.isArray(is_array)){
//     checking = true;
// }else{
//     checking = false;
// }
// console.log(checking);

// 1.2
// const is_array = function(arr){
//     return (toString.call(arr) === "[object Array]") ? true:false;
// };
// // console.log(is_array('3455555'));
// console.log(is_array([1,2,3,4,4]));

// 1.3
// function checkArray (value){
//     if(Array.isArray(value))
//     return true;
//     return false;
// }
// // console.log(checkArray([1,2,3,4,4]));
// console.log(checkArray('3455555'));

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 2. function to clone an array
/*

// const array_clone = [1, 2, 4, 0];
const array_clone = [1, 2, [4, 0]];
// array_clone.slice(0);
// console.log(array_clone)

// 2.1
function array_clone1 (arr){
    return arr.slice(0)
}
console.log(array_clone1([1, 2, [4, 0]]));
console.log(array_clone1([1, 2, 4, 0]));

*/

// 2.2
/*
let x = [1,2,3,4,5]
console.log("Original array")
console.log(x)

let y = [...x];
console.log("clone of the said array:");
console.log(y)

*/

// 2.3
/*

let x = [1,2,3,4,5]
console.log("Original array")
console.log(x)

let y = Array.from(x);
console.log("clone of the said array:");
console.log(y)

let z = x.filter(()=>true);
console.log("clone of the said array:");
console.log(z)

let a = x.map(i => i);
console.log("clone of the said array:");
console.log(a)

*/

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// getting element array.  Write a JavaScript function to get the first element of an array. Passing a parameter 'element' will return the first 'n' elements of the array.

// 3.0

/*
const get_array = (arr,Element)=>{
    arr.splice(Element);
    return arr;
}
console.log(get_array([1, 2, [4, 0]],4))
console.log(get_array([1, 2, 4, 0]))

*/

// 3.1

/*

const first = function(array, element){
    if(array == null)
        return 0;
    if(element == null)
         return array[0]
    if(element < 0)
         return [];
         return array.slice(0,element)
};
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

*/

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 4  Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

/*

const extract_last = (arr, n)=>{
    if(arr == 0 )
       return 0;
    if(n == null)
       return arr[arr.length -1];
       return arr.slice(Math.max(arr.length -n, 0));

       
}
console.log(extract_last([7, 9, 0, -2]));
console.log(extract_last([7, 9, 0, -2],3));
console.log(extract_last([7, 9, 0, -2],6));

*/

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 5.

/*

function joinFunction (arr){
    // return arr.toString()
    // return arr.join();
    return arr.join(" + ");
}
console.log(joinFunction(["Red", "Green", "White", "Black"]));

*/

// 5.1
/*

myColor = ["Red", "Green", "White", "Black"];

console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join(" + "));

*/

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>