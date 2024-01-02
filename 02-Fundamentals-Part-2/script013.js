'use strict';

// you can call a function declaration before you declare it, even not it be a such good ideia in many cases.


//function declaration
function calcAge1(birthYear) {
    return 2024 - birthYear;
}

const age1 = calcAge1(2002);
console.log(age1);

//funcion expression
// expressions produce values

// function without a nem which is called a Anonymous function
const calcAge2 = function (birthYear) {
    return 2024 - birthYear
        ;
}

const age2 = calcAge2(2002);
console.log(age2);

// if you choose to use a function expression you will have to define the functions first at the top of the code and only yhen you can call them, so this make de code a little bit nicer and structed