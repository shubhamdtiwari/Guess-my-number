'use strict';
const number = document.querySelector('.number');
const cheak = document.querySelector('.cheak');
const again = document.querySelector('.again');
const guess = document.querySelector('.guess');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoreValue = 20;
let highscoreValue = 0;


cheak.addEventListener('click', function () {
    const guessValue = Number(guess.value);
    if (!guessValue) {
        message.textContent = '⛔ No number!';
    } else if (guessValue === secretNumber) {
        message.textContent = 'Correct Number';
        number.textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem';
        if (scoreValue > highscoreValue) {
            highscoreValue = scoreValue;
            highscore.textContent = scoreValue;

        }
    } else if (guess !== secretNumber) {
        if (scoreValue > 1) {
            message.textContent = guessValue > secretNumber ? 'Too High' : 'Too Low';
            scoreValue--;
            score.textContent = scoreValue;
        } else {
            message.textContent = 'You have lost the game!'
            score.textContent = 0;
        }
    }
})

again.addEventListener('click', function () {
    guess.value = '';
    message.textContent = 'Start guessing...';
    score.textContent = 20;
    scoreValue = 20;
    number.textContent = '?';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

})