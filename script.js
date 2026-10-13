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
        message.textContent = 'Correct Guess';
        number.textContent = secretNumber;
    } else {
        number.textContent = secretNumber;
        message.textContent = 'Wrong Guess';
    }
})