function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1;
    if (num === 1) {
        return "rock";
    }
    else if (num === 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice;

    while (true) {
        if (choice != "rock" && choice != "paper" && choice != "scissors") {
            choice = prompt("Please choose rock, paper, or scissors: ").toLowerCase();
        }
        else {
            return choice;
        }
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win!");
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose!");
        computerScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win!");
        humanScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose!");
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win!");
        humanScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose!");
        computerScore++;
    }
    else {
        console.log("Draw!")
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore > computerScore) {
        alert("Human wins!");
    } else if (computerScore > humanScore) {
        alert("Computer wins!");
    } else {
        alert("Draw!");
    }
}

playGame();