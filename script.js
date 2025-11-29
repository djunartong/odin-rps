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

const selection = document.createElement("div");
selection.classList.add("container", "button");
document.body.appendChild(selection);

const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");

rock.textContent = "rock";
paper.textContent = "paper";
scissors.textContent = "scissors";

selection.appendChild(rock);
selection.appendChild(paper);
selection.appendChild(scissors);

let humanChoice = null;
let computerChoice = null;
let humanScore = 0;
let computerScore = 0;

const result = document.createElement("div");
result.classList.add("container", "text");
document.body.appendChild(result);

const score = document.createElement("div");
score.classList.add("container", "text");
document.body.appendChild(score);

function playRound(choice) {

    humanChoice = choice;
    computerChoice = getComputerChoice();

    result.classList.remove("win", "lose");

    if (humanChoice === "paper" && computerChoice === "rock") {
        result.textContent = "You win!";
        result.classList.add("win");
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        result.textContent = "You lose!";
        result.classList.add("lose");
        computerScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        result.textContent = "You win!";
        result.classList.add("win");
        humanScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        result.textContent = "You lose!";
        result.classList.add("lose");
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        result.textContent = "You win!";
        result.classList.add("win");
        humanScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        result.textContent = "You lose!";
        result.classList.add("lose");
        computerScore++;
    }
    else {
        result.textContent = "Draw!";
    }

    score.textContent = `Score: Human ${humanScore}, Computer ${computerScore}`;

    if(humanScore === 5 || computerScore === 5) {
        alert(humanScore > computerScore ? "Player wins!" : "Computer wins!");
    }
}

rock.addEventListener("click", () => {playRound("rock")});
paper.addEventListener("click", () => {playRound("paper")});
scissors.addEventListener("click", () => {playRound("scissors")});