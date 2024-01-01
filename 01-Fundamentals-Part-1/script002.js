//Data Types

// JAVASCRIPT HAS DYNAMIC TYPING: We do not have to manually define the data type of the value stored in a variable.Instead, data types are determined automatically

//Value has a type, NOT variable
//The value that holds the datatype and not variable

//We can change the variable's value in run time program; We can change de value in run time;

//Number: Floating point numbers -> Used for decimals and integrs
let age = 21;
console.log(typeof age);

// String: Sequence of charcters -> Used for text
let myName = "Gabriel";
console.log(typeof myName);

//Boolean: Logical type that can only be true or false -> Used for taking decisions

let yes = true;
console.log(typeof yes);
let no = false;
console.log(typeof no);

//Undefined: Value taken by a variable that is not yet defined ('empty value')

let n;
console.log(typeof n); // the type of is undefined
console.log(n) //the value is undefined
//In this case undefined is both, the value and the type

//Null: Also means 'empty value'
//Null: the type and the value is null
let m = null;
console.log(typeof m);
console.log(null)
console.log(m)

//Symbol(ES2015): Value that is unique and cannot be changed

//Biglnt(ES2020): Larger integers than the Number type can hold


console.log("Dynamic Type");
let t = 2;

console.log(t);
t = 'Gabriel';

console.log(t);
t = true;

console.log(t);


