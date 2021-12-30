let rockPaperScissors = ["rock", "paper", "scissors"];
// randomly picks number from 0-3 (excluding 3), next rounds it down and lastly picks and returns responding move from the array
function computerPlay() {
  let computerSelection =
    rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
  return computerSelection;
}
// plays one round and returns and log the result
function oneRound() {
  let playerSelection = prompt("Choose: Rock, Paper or sissors:").toLowerCase();
  let computerSelection = computerPlay();
  if (playerSelection == computerSelection) {
    console.log("It's a draw!");
    return "draw";
  } else if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "rock")
  ) {
    playerSelection =
      playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    console.log(`You losse! ${playerSelection} loose to ${computerSelection}.`);
    return "player lost";
  } else if (
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "rock" && computerSelection == "scissors")
  ) {
    playerSelection =
      playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
    return "player won";
  } else alert("You have to choose rock, paper or scissors!!!");
}
// loops the functions 5 times and saves results
function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i <= 4; i++) {
    let result = oneRound();
    if (result == "draw") {
    } else if (result == "player lost") {
      computerScore++;
    } else if (result == "player won") {
      playerScore++;
    }
  }
  if (playerScore > computerScore) {
    console.log(`You won ${playerScore}:${computerScore}!`);
  } else if (playerScore < computerScore) {
    console.log(`You lost ${computerScore}:${playerScore}`);
  } else console.log(`It's a draw ${computerScore}:${playerScore}`);
}
console.log(game());
