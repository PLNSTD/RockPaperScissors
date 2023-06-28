let getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3);
    
    if (choice == 0)
        return 'rock';
    else if (choice == 1)
        return 'paper';
    else if (choice == 2)
        return 'scissors';
    else
        return 'None';
}

let playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            return "It's a tie! Rock vs Rock";
        } else if (computerSelection === 'paper') {
            return "You lost! Paper beats Rock";
        } else if (computerSelection === 'scissors') {
            return "You won! Rock beats Scissors";
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return "You won! Paper beats Rock";
        } else if (computerSelection === 'paper') {
            return "It's a tie! Paper vs Paper";
        } else if (computerSelection === 'scissors') {
            return "You lost! Scissors beats Paper";
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return "You lost! Rock beats Scissors";
        } else if (computerSelection === 'paper') {
            return "You won! Scissors beats Paper";
        } else if (computerSelection === 'scissors') {
            return "It's a tie! Scissors vs Scissors";
        }
    }
}

const computerSelection = getComputerChoice();
const playerSelection = 'Rock';
console.log(playRound(playerSelection, computerSelection));
