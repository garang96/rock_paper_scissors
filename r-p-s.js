const buttons = document.querySelectorAll('button');
const computerChoice = document.getElementById('computer-choice');
const playerChoice = document.getElementById('player-choice');
const showResults = document.getElementById('results');

let computerSelection;
let playerSelection;
let results;

const choices = ['rock', 'paper', 'scissors'];

const playGame = (event) => {
    playerSelection = event.target.innerHTML;
    playerChoice.innerHTML = 'Your Choice:' + " " + playerSelection;
    computerPlay();
    finalResults();
}

for (const button of buttons) {
    button.addEventListener('click', playGame);
}

const computerPlay = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    computerSelection = randomChoice;
    computerChoice.innerHTML = 'Computer Choice:' + " " + computerSelection;
}

const finalResults = () => {
    if (computerSelection === playerSelection) {
        results = `It's a tie!`;
    } else if (computerSelection === 'rock' && playerSelection === 'paper') {
        results = 'You win!';
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        results = 'You lose!';
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        results = 'You lose!';
    } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
        results = 'You win'
    } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        results = 'You win!';
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        results = 'You lose!';
    }
    showResults.innerHTML = 'Results:' + " " + results;
}