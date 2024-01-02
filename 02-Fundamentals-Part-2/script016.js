'use strict';

const names = ['Gabriel', 'Henroque', 'Miranda', 'Rodrigues'];

names.push('HMR') // add the element to the end of the array
console.log(names);

const x = names.push('G'); // return the length and save at variable (x),
console.log(names);
console.log(x); // 6
// use unshift to put an element in the first position
names.unshift(2002); // [2002, 'Gabriel', 'Henroque', 'Miranda', 'Rodrigues', 'HMR', 'G']
console.log(names);

const y = names.unshift('GHMR'); // return the length and save at variable (y),
console.log(names); // ['GHMR', 2002, 'Gabriel', 'Henroque', 'Miranda', 'Rodrigues', 'HMR', 'G']
console.log(x); // 6

//Remove elements
// use pop() to remove the last element

console.log(names); // ['GHMR', 2002, 'Gabriel', 'Henroque', 'Miranda', 'Rodrigues', 'HMR', 'G']
names.pop(); // Last
console.log(names); // ['GHMR', 2002, 'Gabriel', 'Henroque', 'Miranda', 'Rodrigues', 'HMR']

const saveName = names.pop();
console.log(saveName); // HMR
names.unshift(saveName); // use unshift to put an element in the first position
console.log(names); // ['HMR', 'GHMR', 2002, 'Gabriel', 'Henroque', 'Miranda', 'Rodrigues']

//Also there is a method that tell to us in which position an certain element is in the array

// to do this use indexOf()

console.log(names.indexOf('Gabriel')) // 3

// In this case we'll get -1 because this element doesn't exist in the array
console.log(names.indexOf(21)) // -1

// to check if an element exist in an array use includes()
//Instead of returnig the index of the element, it will be return True if the element exist and False if the element doesn't exist in the array.

console.log(names.includes(21)) // false , because this element does not exist in the array






