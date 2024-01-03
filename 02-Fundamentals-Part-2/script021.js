'use strict';

//loop for array

const types = [];

const myData = [
    'Gabriel',
    'Henrique',
    'Miranda',
    'Rodrigues',
    21,
    'Brazil',
    [1, 2, 3, 4, 5, 6, 7]
];
console.log(myData);
for (let i = 0; i < myData.length; i++) {
    console.log(myData[i], typeof myData[i]);
    // types[i] = typeof myData[i];
    types.push(typeof myData[i]);
}
console.log(types);

const ages = [];
const years = [2002, 2003, 2004, 2005, 2006];

for (let i = 0; i < years.length; i++) {
    ages.push(2024 - years[i]);
}
console.log(ages);

