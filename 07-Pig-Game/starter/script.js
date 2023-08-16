'use strict';
window.onload = function () {
    OpenBootstrapPopup();
};
function OpenBootstrapPopup() {
    $("#simpleModal").modal('show');
}

function OpenBootstrapPopup1() {
    $("#simpleModal1").modal('show');
}

// selecting elements 
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnRule = document.querySelector('.btn--rule');

//starting condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}
function holdGame(){
    if (playing) {
        //1 . add current score to active player
        scores[activePlayer] += currentScore;
        // scores[1]=scores[1]+currentScore;

        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        // 2. check if player's score >= 100
        if (scores[activePlayer] >= 20) {
            //finish game
            playing = false;
            diceEl.style.display='none';
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector('#switch').innerHTML=`Congratulation player ${activePlayer+1} 🎆🎇 WON !! ✨🎉🎀 `
            OpenBootstrapPopup1();
            btnRoll.style.display='none';
            btnHold.style.display='none'

        }
        else {
            
            document.querySelector('#switch').innerHTML=`Player switch because player ${activePlayer+1} hold the score and remaining ${100-Number(scores[activePlayer])} score need for win`
            switchPlayer();
            OpenBootstrapPopup1();
        }


        //switch to the next player
    }
}
btnHold.addEventListener('click',holdGame)
function rollDice(){
    if (playing) {
        //1. generating a random dice roll 
        const dice = Math.trunc(Math.random() * 6) + 1;
        console.log(dice)
        // 2. Display dice
        diceEl.style.display = 'block';
        diceEl.src = `dice-${dice}.png`;
        //3. Check for rolled 1 : if true,
        if (dice != 1) {
            //add dice to current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        }
        else {
            // switch to next player
            switchPlayer();
            document.querySelector('#switch').innerHTML=`Player switch because move is  ${dice}. Now Player ${activePlayer+1} can roll the dice`
            OpenBootstrapPopup1();
        }
    }
}
btnRoll.addEventListener('click', rollDice)

function newGame(){
    scores[0]=0;
    scores[1]=0;
    score0El.textContent=0;
    score1El.textContent=0;
    playing=true;
    current0El.textContent=0;
    current1El.textContent=0;
    currentScore=0;
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    if(activePlayer == 1){
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    }
    activePlayer=0;
    document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
    btnRoll.style.display='block';
    btnHold.style.display='block'
   
}
btnNew.addEventListener('click',newGame)

btnRule.addEventListener('click',OpenBootstrapPopup);