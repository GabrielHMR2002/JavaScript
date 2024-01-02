'use strict';

function logger() {
    console.log('My name is Gabriel');
}

let z = 0;

function sum(x, y) {
    z = x + y;
}

logger();
sum(2, 5)
console.log(z);

alert('Type two number to sum: ')

const a = Number(prompt('Type a number: '));
const b = Number(prompt('Type a number: '));


function sumNumbers(a, b) {

    const sum = a + b;
    return sum;
}

alert(sumNumbers(a, b));

const myName = 'Gabriel';

console.log(`Hello, my name is ${myName} and I'm going to sum the number ${a} and ${b}. The result is ${sumNumbers(a, b)}`);

const result = sumNumbers(a, b);

console.log(`Hello, my name is ${myName} and I'm going to sum the number ${a} and ${b}. The result is ${result}`);
