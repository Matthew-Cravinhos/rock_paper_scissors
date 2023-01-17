// Declare const variables
const choices = ["rock", "paper", "scissors"];

// Core functionality
const getComputerChoice = () => choices[Math.floor(Math.random() * choices.length)];
const getPlayerChoice = () => prompt("Choose either rock, paper, or scissors!").toLowerCase();

const gameRound = (playerChoice, computerChoice) => {
    //let playerChoice = prompt("Choose either rock, paper, or scissors!").toLowerCase();

    if (playerChoice === "rock" || playerChoice ==="paper" || playerChoice === "scissors") {
        // add actual game checker here, followed by a counter for either the player or computer (whoever wins)
        return console.log("checker working");
    } else {
        return console.log("No cheating silly :), please re-enter a valid option");
    }
}

gameRound(getPlayerChoice(), getComputerChoice());
