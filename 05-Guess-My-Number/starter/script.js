'use strict';

window.onload = function () {
    OpenBootstrapPopup();
};
function OpenBootstrapPopup() {
    $("#simpleModal").modal('show');
}
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
        displayMessage('Guess number between 1 to 20');
    }
    else if (guess === secretNumber) {
       
        displayMessage('Correct number ! 😃');
        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem'

        document.querySelector('.number').textContent = secretNumber;
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
            // alert(`New Highscore Updated ${highscore}`)
        }
        document.querySelector('#contant').innerHTML='Congratulations 🎉✨🎇🎆';
        document.querySelector('#contant1').innerHTML='You Won this Game';
        OpenBootstrapPopup()
        document.querySelector('.check').style.display='none';
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
                document.querySelector('#contant').innerHTML='You lose the Game 😞';
                document.querySelector('#contant1').innerHTML='Please Start a new Game';
                OpenBootstrapPopup()
        document.querySelector('.check').style.display='none';
        }

    }
  

}
document.querySelector('.check').addEventListener('click', x);
const again = function () {
    // alert("New game will Start");
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').style.width = '15rem'

    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
   displayMessage('Start guessing...')
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
    document.querySelector('#contant1').innerHTML='Start a new Game';
    document.querySelector('#contant').innerHTML='';
    OpenBootstrapPopup()
    
    document.querySelector('.check').style.display='block';
}
document.querySelector('.again').addEventListener('click', again);
function rules(){
    document.querySelector('#contant').innerHTML='Rules :-';
    document.querySelector('#contant1').innerHTML='1.Enter the range of numbers you want the target number to be between, and press New Target <br>2.Enter your guess <br>3.See if your guess is too high or too low <br>4.Change your guess <br>5.The app will tell you when you are right, and how many guesses you had';
   
    OpenBootstrapPopup();
}
document.querySelector('.rules').addEventListener('click', rules);