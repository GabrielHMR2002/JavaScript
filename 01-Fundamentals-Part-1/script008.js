const age = 18;

//comparing the value
let x = '18';

if (age == x) {
    console.log('Adult');
} else {
    console.log('Teeneger');
}

//comparing the value and type
if (age === x) {
    console.log('Adult');
} else {
    console.log('Teeneger');
}


// converting String type to a Number type
//converting manually
if (age === Number(x)) {
    console.log('Adult');
} else {
    console.log('Teeneger');
}

//If we use == this can introduce many hard to find bugs into our code, so as a generl rule for clean code. It's better to use Strict equality ===.

// asking data to user

const favoriteNumber = prompt("What is your favorite number? ");
console.log(favoriteNumber);
console.log(typeof favoriteNumber);

//We get the value as a String then we've to convert it.

const example = Number(prompt("Type a number: "));
console.log(example);
console.log(typeof example);