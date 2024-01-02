//Boolean Logic

// and , or, not

// &&, || , !(value/variable)

const myNmae = 'Gabriel';
const age = 21;

if (myNmae == 'Gabriel' && age > 18) {
    console.log('Adult'); // result
} else {
    console.log('Teenager')
}


if (myNmae == 'Gabriel' && age > 21) {
    console.log('Adult');
} else {
    console.log('Teenager') // result
}


if (myNmae == 'Gabriel' || age > 22) {
    console.log('Adult'); // result
} else {
    console.log('Teenager')
}

const t = true;

console.log(t);
console.log(!t);

const x = 10;
console.log(x);
console.log(!(!x));