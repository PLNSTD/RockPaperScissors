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

let game = () => {
    let userPts, computerPts, rounds;
    let playerSelection, computerSelection, roundResult;
    userPts = 0;
    computerPts = 0;
    rounds = 0;
    while (rounds < 5) {
        rounds++;
        while (true) {
            playerSelection = prompt("Insert your choice ('Rock', 'Paper' or 'Scissors'");
            playerSelection = playerSelection.toLowerCase();
            if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') 
                break;
            alert('Choose one of the suggested choices :)');
        }
        computerSelection = getComputerChoice();
        roundResult = playRound(playerSelection, computerSelection);
        if (roundResult.includes('won')) {
            console.log(roundResult);
            userPts++;
        }
        else if (roundResult.includes('lost')) {
            console.log(roundResult);
            computerPts++;
        }
        else {
            console.log(roundResult);
            userPts++;
            computerPts++;
        }
    }

    alert('Game Over! The score (you-pc): ' + userPts + '-' + computerPts);
}

game();
