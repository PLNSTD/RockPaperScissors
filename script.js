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

let userPts = 0;
let computerPts = 0;

let game = (roundResult) => {
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

const buttons = document.querySelectorAll('button');
const resultsContainer = document.querySelector('#results-container');
const scoreContainer = document.querySelector('#score-container');

let score = `The score (you-pc): ${userPts} - ${computerPts}`;
scoreContainer.textContent = score;
buttons.forEach( button => button.addEventListener('click', function () {
    if (userPts >= 5 || computerPts >= 5) return;
    let resultRound = playRound(button.innerHTML, getComputerChoice());
    const pElement = document.createElement('p');
    pElement.textContent = resultRound;
    resultsContainer.appendChild(pElement);
    game(resultRound);
    score = `The score (you-pc): ${userPts} - ${computerPts}`
    scoreContainer.textContent = score;
    if (userPts == 5 && computerPts == 5) {
        scoreContainer.textContent = `Game Over! It's a TIE!`;
    } else if (computerPts == 5) {
        scoreContainer.textContent = `Game Over! PC WON!`;
    } else if (userPts == 5) {
        scoreContainer.textContent = `Game Over! User WON!`;
    }
}));
