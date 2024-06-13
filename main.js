let secretNumber = Math.floor(Math.random() * 100) + 1;
let calcDisplay = '';
const calcDisplayElement = document.getElementById('calc-display');
const rpsResultElement = document.getElementById('rps-result');
const guessInputElement = document.getElementById('guess-input');
const guessResultElement = document.getElementById('guess-result');
const rpsGameElement = document.getElementById('rock-paper-scissors-game');

document.querySelectorAll('.btn-group-toggle .btn').forEach(btn => {
    btn.addEventListener('click', function () {
        document.querySelectorAll('.game').forEach(game => game.style.display = 'none');
        const gameId = this.querySelector('input').id + '-game';
        document.getElementById(gameId).style.display = 'block';
    });
});

function playRPS(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = '';

    if (playerChoice === computerChoice) {
        result = "It's a draw!";
    } else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')) {
        result = `You win! ${playerChoice} beats ${computerChoice}.`;
    } else {
        result = `You lose! ${computerChoice} beats ${playerChoice}.`;
    }

    rpsResultElement.textContent = result;
}

function calcInput(value) {
    calcDisplay += value;
    calcDisplayElement.value = calcDisplay;
}

function calcClear() {
    calcDisplay = '';
    calcDisplayElement.value = '';
}

function calcCalculate() {
    try {
        calcDisplay = eval(calcDisplay).toString();
        calcDisplayElement.value = calcDisplay;
    } catch {
        calcDisplayElement.value = 'Error';
        calcDisplay = '';
    }
}

function checkGuess() {
    const guess = parseInt(guessInputElement.value);
    let result = '';

    if (guess === secretNumber) {
        result = 'You guessed the number!';
        secretNumber = Math.floor(Math.random() * 100) + 1;
    } else if (guess < secretNumber) {
        result = 'Too low! Try again';
    } else if (guess > secretNumber) {
        result = 'Too high! Try again';
    } else {
        result = 'Invalid input! Please enter a number between 1 and 100.';
    }

    guessResultElement.textContent = result;
}

rpsGameElement.style.display = 'block';
