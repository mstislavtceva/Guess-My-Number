'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const styleBody = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};
const styleNumber = function (width) {
  document.querySelector('.number').style.width = width;
};
const displayElem = function (elem, value) {
  document.querySelector(elem).textContent = value;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    displayElem('.message', '⛔ No number!');
    //When player wins
  } else if (guess === secretNumber) {
    displayElem('.message', '🎉 Correct number!');
    styleBody('#60b347');
    styleNumber('30rem');
    displayElem('.number', secretNumber);
    if (score > highscore) {
      highscore = score;
      displayElem('.highscore', highscore);
    }
    // When guess is too high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayElem(
        '.message',
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!'
      );
      score--;
      displayElem('.score', score);
    } else {
      displayElem('.message', '😥 You lose this game!');
      displayElem('score', 0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayElem('.message', 'Start guessing...');
  displayElem('.score', score);
  styleNumber('15rem');
  displayElem('.number', '?');
  styleBody('#222');
  document.querySelector('.guess').value = '';
});
