//Array
'use strict';
const friends = ['Gabriel', 'Henrique', 'Miranda', 'Rodrigues'];

console.log(friends.length);
console.log(friends);

const years = new Array(2000,2001,2002,2003,2004,2005,2006);
console.log(years);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends[3]);
console.log(friends[4]); //undefined

console.log(years.length);
console.log(years[0]);
console.log(years[1]);
console.log(years[2]);
console.log(years[3]);
console.log(years[4]);
console.log(years[5]);
console.log(years[6]);
console.log(years[7]); //undefined

//to get the last one

console.log(friends[friends.length -1]);
console.log(years[years.length - 1]);

friends[1] = 'HENRIQUE';
console.log(friends[1]);
console.log(friends);

// the array can hold different types of values
// we can put a array inside a array
const secondName = 'Henrique';
const example = [2002, 'Gabriel', 20 + 1,secondName, years, years[2] + years[6]];
console.log(example);
