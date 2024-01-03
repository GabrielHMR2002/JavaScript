'use strict';
// Dot vs Bracket Notation

const gabriel = {
    firstName: 'Gabriel',
    age: 2024 - 2002,
    secondName: 'Henriuqe',
    studentOf: 'Software Engineer',
    birthYear: 2002,
    friends: ['Miranda', 'Rodrigues']
}

console.log(gabriel);

//to get the something from the object
0
//Dot notation
console.log(gabriel.firstName);
console.log(gabriel.age);
console.log(gabriel.studentOf);

//Bracket Notation
console.log(gabriel['firstName']);
console.log(gabriel['age']);
console.log(gabriel['studentOf']);

const nameKey = gabriel;
console.log(gabriel['firstName' + nameKey]);

const interestedIn = prompt('firstName, age, studentOf:');

if (gabriel[interestedIn]) {
    console.log(gabriel[interestedIn]);
    alert(gabriel[interestedIn]);
} else {
    console.log('Wrong Request');
    alert('Wrong Request');
}

gabriel.age = 18;

gabriel['firstName'] = 'GABRIEL';

if (gabriel[interestedIn]) {
    console.log(gabriel[interestedIn]);
    alert(gabriel[interestedIn]);
} else {
    console.log('Wrong Request');
    alert('Wrong Request');
}

console.log(`${gabriel.firstName} has ${gabriel.friends.length} friends and his best is  ${gabriel.friends[0]} `);