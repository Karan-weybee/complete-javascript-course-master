'use strict';

alert("Find the random number using guessing");
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage=function (massage){
    document.querySelector('.message').textContent=massage;
}
const x = function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess)
    if (!guess) {
        displayMessage('🙄 No number !');
    }
    else if(guess > 20 || guess<=0){
        displayMessage('Guess number between 0 to 20');
    }
    else if (guess === secretNumber) {
        // document.querySelector('.message').textContent =
        //     'Correct number ! 😃'
        displayMessage('Correct number ! 😃');
        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem'

        document.querySelector('.number').textContent = secretNumber;
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
            alert(`New Highscore Updated ${highscore}`)
        }
        }

      
    else if (guess !== secretNumber) {
     
        if (score > 1) {
            let message = guess > secretNumber ? 'Too High! 🚀' : "Too Low! ⏬";
            // document.querySelector('.message').textContent =
            //     message
            displayMessage(message);
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent =
                '💥 You lost the game !'
        }

    }
  

}
document.querySelector('.check').addEventListener('click', x);
const again = function () {
    alert("New game will Start");
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').style.width = '15rem'

    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
   displayMessage('Start guessing...')
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
}
document.querySelector('.again').addEventListener('click', again);