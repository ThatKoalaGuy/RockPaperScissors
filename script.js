function getComputerChoice() {
    
    //Generate a random int between 1 and 3 (inculding)
    min = 1;
    max = 3;
    let computerChoice = Math.floor(Math.random() * (max - min + 1) + min);

    //Assign a word to the number
    if (computerChoice === 1){
        return "Rock";
    }

    else if (computerChoice === 2){
        return "Paper";
    }

    else if (computerChoice === 3){
        return "Scissors";
    }    
}


//init the variables for keeping track of the score
let computerScore = 0;
let playerScore = 0;

function singleRound(playerSelection, computerSelection) {

    let tie = false;
    let wonOrLost = null;

    //Make the first letter capitalized, other lower case
    playerSelectionLength = playerSelection.length;
    let firstLetter = playerSelection.slice(0, 1);
    remainingWord = playerSelection.slice(1, playerSelectionLength)
    remainingWord = remainingWord.toLowerCase();
    firstLetter = firstLetter.toUpperCase();
    
    //Join the word back together
    playerSelection = firstLetter + remainingWord;

    //If ROCK is selected
    if (computerSelection === "Rock") {

        if (playerSelection === "Rock") {
            tie = true;
        }
        else if (playerSelection === "Paper") {
            wonOrLost = true;
        }
        else if (playerSelection === "Scissors") {
            wonOrLost = false;
        }
    }

    //If PAPER is selected
    else if (computerSelection === "Paper") {

        if (playerSelection === "Rock") {
            wonOrLost = false;
        }
        else if (playerSelection === "Paper") {
            tie = true;
        }
        else if (playerSelection === "Scissors") {
            wonOrLost = true;
        }
    }
    
    //If SCISSORS is selected
    else if (computerSelection === "Scissors") {

        if (playerSelection === "Rock") {
            wonOrLost = true;
        }
        else if (playerSelection === "Paper") {
            wonOrLost = false;
        }
        else if (playerSelection === "Scissors") {
            tie = true;
        }
    }


    //Output the status of the game
    if (tie === true) {
        alert("The game resulted in a tie, replaying");
        singleRound(prompt("Rock, paper or scissors"), getComputerChoice());
    }
    else if (wonOrLost === true) {
        alert("You won");
        playerScore = playerScore + 1;
    }
    else if (wonOrLost === false) {
        alert("You lost");
        computerScore = computerScore + 1;
    }

}


function game(){
    //Loop 5 times
    for (i = 0; i < 5; i++){
        singleRound(prompt("Rock, paper or scissors"), getComputerChoice());
    }

    //Output the final result
    alert("The final score: " + playerScore + " for you versus " + computerScore + " for the computer!")

    if (playerScore > computerScore){
        alert("Congratulations, you won!")
    }

    else if (computerScore > playerScore){
        alert("You lost.")
    }

    else if (playerScore === computerScore){
        alert("The game concluded in a tie.")
    }
}

game();
