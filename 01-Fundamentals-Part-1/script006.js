const inputYear = '2002';
//using Number(PUT-A-VARIABLE-HERE) to convert to a Number
console.log(Number(inputYear) + 20);  //2022

console.log(inputYear + 20); //200220

console.log(Number('Gabriel')); // NaN 
console.log(typeof NaN);// number
// NaN means a invalid number

//Using String() to convert somethin to a String
console.log(String(23));

//type coercion
// type coercion happens when a operator is dealing with two values that have different types, so in that case JavaScript will then, behind the scenes convert one of the values to match the other value, so that in the end the operation can be executed

//When there is a operation between a String and a Number, the Number will be conveted to a String
console.log('I am ' + 21 + ' years old');

// Not all the operators do type coercion to String
//this time JavaScript convet String to a Number 

console.log('23' - '10' - 3); // 10

console.log('23' + '10' - 3); // 2307

console.log('23' - '10' + 3); // 16

console.log('23' + '10' + 3); // 23103
//If we use plus " + ", then It's is gonna cover to a String and then the three Strings are concatened

//OBS IF WE USE *, **  , / the JavaScript is gonna convert to a Number too
console.log('20' / '4');

console.log('3' ** '3');

console.log('9' * '2');

//IMPORTANT EXAMPLE

//in this line Js is going to conver a Number to a String
let n = '1' + 1; //Result 11 (String)
//but then here, we've the minus operator ( - )
//and in the minus operator it'll' be converted to a Number 
n = n - 1; // 10
console.log(n) // 10

let m = 2 + 3 + 4 + '5';
console.log(m) // 95

//      (         1          ) + '5' = 15   
let k = '10' - '4' - '3' - 2 + '5'; // 15
console.log(k) // 15