'use strict';

// Selecting elements
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

// Start conditions
score0El.textContent = '0';
score1El.textContent = '0';
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const switchPlayer = () => {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
        
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};

// Rolling dice funcrionality
btnRoll.addEventListener('click', () => {
    // Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    // Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`

    // Checkfor rolled :if true, switch to next play
    if(dice !== 1) {
        // Add dice to current score
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;

        //current0El.textContent = currentScore;

    } else {
        // Switch to next player
        switchPlayer();
    };
});

btnHold.addEventListener('click', () => {    
    scores[activePlayer] += currentScore;
    console.log(`player ${activePlayer} : ${scores[activePlayer]}`)
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    if(scores[activePlayer] < 100) {
        switchPlayer();
    } else {
        alert(`O jogardor ${activePlayer + 1} ganhou!`);
    }; 
});