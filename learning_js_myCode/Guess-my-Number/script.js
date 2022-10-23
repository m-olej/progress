'use strict';
/*
console.log(document.querySelector('.message').textContent);
// What is DOM? - document object model
//DOM manipulation - interacting with the webpage using JS
//DOM !== Javascript!, DOM is a part of the Web API's (API-Application Programming Interface) with which JS can interact.

document.querySelector('.message').textContent = 'Correct Number 🥳';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = Number(document.querySelector('.score').textContent);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (score > 1) {
    if (!guess) {
      // ! changes the boolean value so if there's a guess it gets converted to false and the if function doesn't get activated.
      document.querySelector('.message').textContent = 'No Number entered 🚨';
    } else if (guess === secretNumber) {
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.message').textContent = 'Correct Number 🥳';
    } else if (guess > secretNumber) {
      document.querySelector('.message').textContent = 'Too High! 📈';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (guess < secretNumber) {
      document.querySelector('.message').textContent = 'Too Low!! 📉';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'You lost 🤧';
  }
});
// reset
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = null;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});

document.addEventListener('keydown', function (enter) {
  const key_name = enter.key;
  if (key_name === 'Enter') {
    const guess = Number(document.querySelector('.guess').value);
    if (score > 1) {
      if (!guess) {
        // ! changes the boolean value so if there's a guess it gets converted to false and the if function doesn't get activated.
        document.querySelector('.message').textContent = 'No Number entered 🚨';
      } else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.message').textContent = 'Correct Number 🥳';
        if (Number(document.querySelector('.highscore').textContent) < score) {
          document.querySelector('.highscore').textContent = score;
        }
        if (document.querySelector('.highscore').textContent === '20') {
          document.querySelector('.title').textContent =
            "You've BEATEN the GAME! 😎";
        }
      } else if (guess > secretNumber) {
        document.querySelector('.message').textContent = 'Too High! 📈';
        score--;
        document.querySelector('.score').textContent = score;
      } else if (guess < secretNumber) {
        document.querySelector('.message').textContent = 'Too Low!! 📉';
        score--;
        document.querySelector('.score').textContent = score;
      }
    } else {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = 'You lost 🤧';
    }
  }
});
