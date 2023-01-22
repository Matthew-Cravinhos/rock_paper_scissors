// Declare const variables
const choices = ["rock", "paper", "scissors"];
let playerWins = 0;
let computerWins = 0;

// Core functionality
const getComputerChoice = () => choices[Math.floor(Math.random() * choices.length)];
const getPlayerChoice = () => prompt("Choose either rock, paper, or scissors!").toLowerCase();
const addPlayerWin = () => {
    playerWins++;
    console.log("The player wins this round!")
    return winsReport();
}
const addComputerWin = () => {
    computerWins++;
    console.log("The computer wins this round!");
    return winsReport();
}
const winsReport = () => console.log("The player has " + playerWins + " wins and the computer has " + computerWins + " wins.");


const playRound = (playerChoice, computerChoice) => {
    //check if valid option is entered first
    if (playerChoice === "rock" || playerChoice ==="paper" || playerChoice === "scissors") {
        if (playerChoice === "rock" && computerChoice === "scissors") {
            return addPlayerWin();
        } else if (playerChoice === "paper" && computerChoice === "rock") {
            return addPlayerWin();
        } else if (playerChoice === "scissors" && computerChoice === "paper") {
            return addPlayerWin();
        } else if (computerChoice === "rock" && playerChoice === "scissors") {
            return addComputerWin();
        } else if (computerChoice === "paper" && playerChoice === "rock") {
            return addComputerWin();
        } else if (computerChoice === "scissors" && playerChoice === "paper") {
            return addComputerWin();
        } else if (playerChoice === "rock" && computerChoice === "rock" || playerChoice === "scissors" && computerChoice === "scissors" || playerChoice === "paper" && computerChoice === "paper") {
            return console.log ("It's a tie! Please try again")
        }
    } else {
        return console.log("No cheating silly :), please re-enter a valid option");
    }
}

const game = () => {
    for (i=0; i < 5; i++) {
        playRound(getPlayerChoice(), getComputerChoice());
    }

    if (playerWins > computerWins) {
        return console.log ("The player wins the game!");
    } else if (playerWins < computerWins) {
        return console.log("The computer wins the game!");
    } else {
        return console.log("Tie game!")

        // could call round function once more here and create another function, called here, that runs the round while a winner doesn't exist
    }
}

game();
