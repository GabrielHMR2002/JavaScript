//Truthy and Falsy

//Falsy values are values that aren't exactily false but will become false when we try conver them into a boolean

//                     empty
// 5 falsy values: 0 , '', undefined, null, NaN
//The're not exactily false initially but they will become when comveted to a boolean

console.log(Boolean(0)); // false
console.log(Boolean('')); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean(NaN)); // false


//Everything else will be conveted to a truthy values

const x = 0;
//No matter what we put in (), if it's not a boolean, JavaScript will try to convet it to a boolean and that happens using Truthy and Falsy values rules.
if(x){ // x is false 
    console.log("true");
}else{
    console.log("False");
}

const y = 1;
if(y){ // y is true 
    console.log("true");
}else{
    console.log("False");
}