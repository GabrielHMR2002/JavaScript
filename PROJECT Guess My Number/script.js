'use strict';


let score = 20;

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let highScore = 0;

const displayMessage = function (message) {

    document.querySelector('.message').textContent = message;

}

document.querySelector('.again').addEventListener('click', function () {

    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = score;
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');

    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222'; document.querySelector('.number').style.width = '15rem';
})


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);




    if (!guess) {

        if (score > 1) {
            // document.querySelector('.message').textContent = '⛔ No number';
            displayMessage('⛔ No number');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent = '💥 You lost the Game!'
            displayMessage('💥 You lost the Game!');
            document.querySelector('.score').textContent = 0;
        }



    } else if (guess === secretNumber) {

        // document.querySelector('.message').textContent = '🎉 Correct Number!'
        displayMessage('🎉 Correct Number!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    } else if (guess != secretNumber) {

        if (score > 1) {
            document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too High!' : '📉 Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent = '💥 You lost the Game!'
            displayMessage('💥 You lost the Game!');
            document.querySelector('.score').textContent = 0;
        }


    }
});
