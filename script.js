'use strict';

let num1 = Math.trunc(Math.random() * 20) + 1;
console.log(typeof scor);
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  let gues = Number(document.querySelector('.guess').value);
  let score = Number(document.querySelector('.score').textContent);
  if (gues === num1) {
    document.querySelector('.message').textContent = `correct number🎇🎇🎇`;
    document.querySelector('.number').textContent = num1;
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score >= highscore) {
      document.querySelector('.highscore').textContent = score;
      highscore = Number(document.querySelector('.highscore').textContent);
    }
  }
  if (gues < num1) {
    document.querySelector('.message').textContent = `Too Low🎃🎃👹`;
    score--;
    document.querySelector('.score').textContent = score;
  }
  if (gues > num1) {
    document.querySelector('.message').textContent = `Too high🎃🎃👹`;
    score--;
    document.querySelector('.score').textContent = score;
  }
});
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = 20;
  num1 = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#60b356';
});
