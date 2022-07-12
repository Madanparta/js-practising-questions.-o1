'use strict;';

// 2d arrays..

let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

//how to find the row in matrix;

let row = matrix.length;
// console.log(row);
let colums = matrix[0].length;
// console.log(colums)

/*
let sum = 0;
for(let i=0; i<row; i++){
    for(let j=0; j<colums; j++){
        sum+=matrix[i][j];   //getting sum;
    }
}
console.log(sum);

*/

//sum of left rigt (slide)

/*

let sum = 0;
for(let i=0; i<row; i++){
    for(let j=0; j<colums; j++){
        if(i==j)   // left rigt (slide)
        sum+=matrix[i][j]; 
    }
}
console.log(sum);

*/

/*

// when the j is i is same na why usig j only one index usinng multiple times..
// let sum = 0;
// for(let i=0; i<row; i++){
//     for(let j=0; j<colums; j++){
//         if(i==j)   
//         sum+=matrix[i][j]; 
//     }
// }
// console.log(sum);

let sum =0;
for(let i =0; i<row; i++){
    sum+=matrix[i][i];  //too simple ..
}
console.log(sum);

*/

/*

// then how to check the colums by colums..?????
let sum = 0;
let start =0;
for(let i=0; i<row; i++){
    sum+= matrix[i][start];  //ist cleat a one veriable and matrix i and start..
    console.log(sum);
}

console.log(sum);


*/

/*

//how to print the row wise.....//???

let sum =0;
let start =0;

for(let i=0; i<row; i++){
    sum+=matrix[start][i]  //comes to row wise......
}
console.log(sum);


*/

/*
// using start veri sum the left to right//???

let start =0;
let sum =0;
for(let i=0; i<row; i++){
    sum+=matrix[i][start]
    start+=1;                 
}
console.log(sum);

*/

/*
//same thing printg the number right to left../???

let start = matrix[0].length -1;
let sum = 0;
for(let i=0; i<row; i++){
    sum+=matrix[i][start]
    console.log(sum);
    start-=1;
}
console.log(sum);

*/

/*

//then ok the snake shaps we i do ...

let row1 = matrix.length;
let colum1 = matrix[0].length;

for(let i=0; i<row1; i++){
    if(i%2==0){
        for(let j=0; j<row1; j++ ){
            console.log(matrix[i][j]);
        }
        }else{
            for(let j=colum1-1; j>0 ; j--){
                console.log(matrix[i][j]);
        }
        }
     }

     */
