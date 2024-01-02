'use strict';

const gabriel = {
    firstName: 'Gabriel',
    year: 2002,
    secondName: 'Henriuqe',
    studentOf: 'Software Engineer',
    birthYear: 2002,
    friends: ['Miranda', 'Rodrigues'],

    calcAge: function (year) {
        return 2024 - year;
    },

    calcAge2: function () {
        return 2024 - this.year;
    },

    calcAge3: function () {
        this.age = 2024 - this.year;
        return this.age;
    }
}

console.log(gabriel.calcAge(2002));
console.log(gabriel['calcAge'](2002));

console.log(gabriel.calcAge2());
console.log(gabriel['calcAge2']());

console.log(gabriel.calcAge3());
console.log(gabriel['calcAge3']());