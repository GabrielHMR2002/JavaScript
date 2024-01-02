/*
The "strict mode" in JavaScript is a feature introduced in ECMAScript 5 (ES5) that allows writing safer code, avoiding certain common errors, and making the code more robust. When strict mode is enabled, some error-prone practices are treated as exceptions.

To activate strict mode in JavaScript, you can add the following statement at the top of your script or function:
*/

'use strict'; // it must be the first statment

let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true; //if take off the 's' ReferenceError: hasDriverLicense is not defined
if(hasDriversLicense) console.log('I can drive');


// Unexpected strict mode reserved word
// const interface = 'Audio';
//const private = 1;
 
