'use strict';
/*
console.log(document.querySelector('.message').textContent);



document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;


document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let score = 20;

const secretNumber = Math.trunc(Math.random() * 20) + 1;


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);




    if (!guess) {

        if (score > 1) {
            document.querySelector('.message').textContent = 'No number';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥 You lost the Game!'
            document.querySelector('.score').textContent = 0;
        }



    } else if (guess === secretNumber) {

        document.querySelector('.message').textContent = '🎉 Correct Number!'

    } else if (guess > secretNumber) {

        if (score > 1) {
            document.querySelector('.message').textContent = '📈 Too High!'
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥 You lost the Game!'
            document.querySelector('.score').textContent = 0;
        }



    } else if (guess < secretNumber) {

        if (score > 1) {
            document.querySelector('.message').textContent = '📉 Too low!'
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥 You lost the Game!'
            document.querySelector('.score').textContent = 0;
        }



    }

});
