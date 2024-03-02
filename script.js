//Init the constants
const btnR = document.querySelector('#btnR');
const btnP = document.querySelector('#btnP');
const btnS = document.querySelector('#btnS');

//init the variables for keeping track of the score
let computerScore = 0;
let playerScore = 0;

let roundsPlayed = 0;
let playerSelection;

const scoreboard = document.querySelector('#scoreboard');
const statusOfRound = document.querySelector('#status');

const finalResult = document.querySelector('#finalResult');
const gameEndNotification = document.querySelector('#gameEndNotification');

//Add event listeners
(function eventListeners() {
	btnR.addEventListener('click', () => {
		playerSelection = 'Rock';
		playRound();
	});

	btnP.addEventListener('click', () => {
		playerSelection = 'Paper';
		playRound();
	});

	btnS.addEventListener('click', () => {
		playerSelection = 'Scissors';
		playRound();
	});
})();

function getComputerChoice() {
	//* Generate a random int between 1 and 3 (including)
	min = 1;
	max = 3;
	let computerChoice = Math.floor(Math.random() * (max - min + 1) + min);

	switch (computerChoice) {
		case 1:
			return 'Rock';
		case 2:
			return 'Paper';
		case 3:
			return 'Scissors';
	}
}

function playRound() {
	if (roundsPlayed < 5) {
		singleRound(playerSelection, getComputerChoice());
		roundsPlayed++;
		finalResult.textContent = '';
		gameEndNotification.textContent = '';
	}
	if (roundsPlayed === 5) {
		endGame();
	}
}

function singleRound(playerSelection, computerSelection) {
	//default state
	let tie = false;
	let wonOrLost = null;

	//If ROCK is selected
	if (computerSelection === 'Rock') {
		switch (playerSelection) {
			case 'Rock':
				tie = true;
				break;
			case 'Paper':
				wonOrLost = true;
				break;
			case 'Scissors':
				wonOrLost = false;
				break;
		}
	}

	//If PAPER is selected
	else if (computerSelection === 'Paper') {
		switch (playerSelection) {
			case 'Rock':
				wonOrLost = false;
				break;
			case 'Paper':
				tie = true;
				break;
			case 'Scissors':
				wonOrLost = true;
				break;
		}
	}

	//If SCISSORS is selected
	else if (computerSelection === 'Scissors') {
		switch (playerSelection) {
			case 'Rock':
				wonOrLost = true;
				break;
			case 'Paper':
				wonOrLost = false;
				break;
			case 'Scissors':
				tie = true;
				break;
		}
	}

	//Output the status of the round
	if (tie === true) {
		statusOfRound.textContent = 'The round resulted in a tie';
	} else if (wonOrLost === true) {
		statusOfRound.textContent = 'You won the round';
		playerScore = playerScore + 1;
	} else if (wonOrLost === false) {
		statusOfRound.textContent = 'You lost the round';
		computerScore = computerScore + 1;
	}

	scoreboard.textContent =
		'You: ' + playerScore + ' vs Computer: ' + computerScore;
}

function endGame() {
	//Output the final result
	finalResult.textContent =
		'The final score: ' +
		playerScore +
		' for you versus ' +
		computerScore +
		' for the computer!';

	if (playerScore > computerScore) {
		gameEndNotification.textContent = 'Congratulations, you won!';
	} else if (computerScore > playerScore) {
		gameEndNotification.textContent = 'You lost.';
	} else if (playerScore === computerScore) {
		gameEndNotification.textContent = 'The game concluded in a tie.';
	}

	//Reset the game
	roundsPlayed = 0;
	playerScore = 0;
	computerScore = 0;
}
