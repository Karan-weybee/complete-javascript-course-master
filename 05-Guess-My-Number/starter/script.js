'use strict';

// console.log(document.querySelector('.message')
// .textContent
// );
// document.querySelector('.message').textContent=
// 'Correct number !'

// document.querySelector('.number').textContent=14
// document.querySelector('.score').textContent=15

// document.querySelector('.guess').value=23
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const x = function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess)
    if (!guess) {
        document.querySelector('.message').textContent =
            '🙄 No number !'
    }
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent =
            'Correct number ! 😃'
        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem'

        document.querySelector('.number').textContent = secretNumber;
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        }

      
    else if (guess !== secretNumber) {
     
        if (score > 1) {
            let message = guess > secretNumber ? 'Too High! 🚀' : "Too Low! ⏬";
            document.querySelector('.message').textContent =
                message
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent =
                '💥 You lost the game !'
        }

    }
    // else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent =
    //             'Too Low! ⏬'
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else {
    //         document.querySelector('.message').textContent =
    //             '💥 You lost the game ! '
    //     }
    // }

}
document.querySelector('.check').addEventListener('click', x);
const again = function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').style.width = '15rem'

    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent =
        'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
}
document.querySelector('.again').addEventListener('click', again);