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
}

for (const button of buttons) {
    button.addEventListener('click', playGame);
}

const computerPlay = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    computerSelection = randomChoice;
    computerChoice.innerHTML = 'Computer Choice:' + " " + computerSelection;
}