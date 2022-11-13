'use strict';

// Create Solution
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(`The correct answer is ${secretNumber}`);

// Create Score
const startingScore = 20;
let score = startingScore;
document.querySelector('.score').textContent = startingScore;

const displayMessage = function(message) {
	document.querySelector('.message').textContent = message
}

// Check Button Action
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // Game Logic

  // No Guess
  if (!guess) {
    displayMessage('⛔️ No Number!');

    // Correct Guess
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!!!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    // Set High Score
    if (score > Number(document.querySelector('.highscore').textContent)) {
      document.querySelector('.highscore').textContent = score;
    }

    // Guess is Wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low');
				score--
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('☹️ You Lose');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#8D0000';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
    }
  }
});

// Play Again Button Action
document.querySelector('.again').addEventListener('click', function () {
  // Reset Score
  score = document.querySelector('.score').textContent = startingScore;

  // Reset Message
  displayMessage('Start guessing...');

  // Reset Background
  document.querySelector('body').style.backgroundColor = '#222';

  // Reset Number Box
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';

  // Reset Guess
  document.querySelector('.guess').value = '';

  // New Secret Number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(`The correct answer is ${secretNumber}`);
});
