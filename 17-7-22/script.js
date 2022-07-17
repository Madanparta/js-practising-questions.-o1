'use strict;';

//moves is a 2D array containing two values. The first value is present in arr and 2nd value is not present in arr. Replace the value of first element in arr with 2nd value from moves. Return the changed array.
//Replace the items in arr with the value from moves[i][1]. Return the changed arr

/*
function changeArray(arr, moves) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < moves.length; j++) {
      if (arr[i] == moves[j][0]) {
        arr[i] = moves[j][1];
      }
    }
  }
  return arr;
}
console.log(
  changeArray(
    [1, 5, 7, 8],
    [
      [1, 3],
      [7, 9],
    ]
  )
);

*/

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let chars = ['a', 'b', 'a', 'c', 'b'];

/*
let store = [];

for (let i = 0; i < chars.length; i++) {
  if (!store.includes(chars[i])) {
    store.push(chars[i]);
  }
}
console.log(store);

*/

/*

let storeChares = chars.filter((char, index)=>{
  return chars.indexOf(char) === index
})
console.log(storeChares);

*/

/*
let storeChares = chars.filter((char,index)=>(chars.indexOf(char)=== index))
console.log(storeChares);

*/

let nums = [13, 45, 33, 19, 4, 17, 50];

// nums.sort((a,b)=>a-b);
/*
let largest =nums[nums.length -1]
console.log(largest);//last index values
console.log(nums[1]); //start index
*/

/*

//last largest numbers in array..
let getNthLargest = function(num, poss){
  num.sort((a,b)=>b-a)
  return num[poss -1]
}
console.log(getNthLargest(nums, 3));

*/

//finding perfect symbles..

/*
function findPerfectSymbles (string){
  let map = {
    '{': '}',
    '[':']',
    '(':')'
  }
  let store = []

  for(let i=0; i<string.length; i++){
    if(string[i]=='[' || string[i] =='{' || string[i] =='('){
      store.push(string[i])
    }else{
      let closeBracktes = string[i];
      let startBracktes = store.pop()
      console.log(startBracktes, closeBracktes);
      if(closeBracktes !== map[startBracktes]){
        return false;
      }
    }
  }
  if(store.length !== 0){
    return false;
  }
  return true;
  
}
console.log(findPerfectSymbles("{[()]}"));
console.log(findPerfectSymbles("{[(}]"));
console.log(findPerfectSymbles("}{"));
console.log(findPerfectSymbles("{[()}"));
console.log(findPerfectSymbles("{[)()]}"));

*/

/*

let news = 'vasanth is good teacher';

let newArray = news.split(' ');
console.log(newArray);

for(let i=0; i<newArray.length; i++){
  newArray[i] = (newArray[i].split("").reverse().join(""))
}
console.log(newArray.join(" "));

*/

//rotaing the word's..

/*

let string = 'AirCampus';
//ex;
// rotate by 1 char isCampusA
// rotate by 2 char sCampusAi
// rotate by 3 char CampusAis
// rotate by 4 char ampusAisC

let rotatingString = string.slice(0,2)
let sliceString = string.slice(2)

console.log(`${sliceString}${rotatingString}`);

*/

//snak slp..

/*

let matrix =[
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16]
]

let left = 0, right=3, top = 0, bottom=3, directions=0;

while(left<=right && top<=bottom){
  if(directions == 0){
    for(let i =left; i<=right; i++){
      console.log(matrix[top][i]);
    }
    top+=1;
    directions = 1;
  }
  if(directions==1){
    for(let i =top; i<=bottom; i++){
      console.log(matrix[i][right]);
    }
    right -=1;
    directions =2;
  }
  if(directions==2){
    for(let i=right; i>=left; i-- ){
      console.log(matrix[bottom][i]);
    }
    bottom -=1;
    directions = 3;

  }
  if(directions==3){
    for(let i=bottom; i>=top; i--){
      console.log(matrix[i][left]);

    } 
    left+=1;
    directions =0;
  }

  
}*/