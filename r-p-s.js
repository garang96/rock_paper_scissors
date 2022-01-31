const buttons = document.querySelectorAll('button');
const computerChoice = document.getElementById('computer-choice');
const playerChoice = document.getElementById('player-choice');
const showResults = document.getElementById('results');
const computerPoints = document.getElementById('computer-score');
const playerPoints = document.getElementById('player-score');

let computerSelection;
let playerSelection;
let results;
let computerScore = 0;
let yourScore = 0;

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
        computerScore = 0;
        yourScore = 0;
        computerPoints.innerText = `Computer Score: ${computerScore}`;
        playerPoints.innerText = `Your Score: ${yourScore}`;
    } else if (computerSelection === 'rock' && playerSelection === 'paper') {
        results = 'You win! Paper beats Rock';
        computerScore = 0;
        yourScore = 5;
        computerPoints.innerText = `Computer Score: ${computerScore}`;
        playerPoints.innerText = `Your Score: ${yourScore}`;
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        results = 'You lose! Rock beats Scissors';
        computerScore = 5;
        yourScore = 0;
        computerPoints.innerText = `Computer Score: ${computerScore}`;
        playerPoints.innerText = `Your Score: ${yourScore}`;
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        results = 'You lose! Paper beats Rock';
        computerScore = 5;
        yourScore = 0;
        computerPoints.innerText = `Computer Score: ${computerScore}`;
        playerPoints.innerText = `Your Score: ${yourScore}`;
    } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
        results = 'You win! Scissors beats Paper'
        computerScore = 0;
        yourScore = 5;
        computerPoints.innerText = `Computer Score: ${computerScore}`;
        playerPoints.innerText = `Your Score: ${yourScore}`;
    } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        results = 'You win! Rock beats Scissors';
        computerScore = 0;
        yourScore = 5;
        computerPoints.innerText = `Computer Score: ${computerScore}`;
        playerPoints.innerText = `Your Score: ${yourScore}`;
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        results = 'You lose! Scissors beats Paper';
        computerScore = 5;
        yourScore = 0;
        computerPoints.innerText = `Computer Score: ${computerScore}`;
        playerPoints.innerText = `Your Score: ${yourScore}`;
    }
    showResults.innerHTML = `Results: ${results}`;
}