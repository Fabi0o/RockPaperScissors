let rockPaperScissors = ["Rock", "Paper", "Scissors"];
// randomly picks number from 0-3 (excluding 3), next rounds it down and lastly picks and returns responding move from the array
function computerPlay() {
  const computerSelection =
    rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
  return computerSelection;
}
// plays one round and returns and log the result
function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay();
  if (playerSelection == computerSelection) {
    return "It's a draw!";
  } else if (
    (playerSelection == "Rock" && computerSelection == "Paper") ||
    (playerSelection == "Paper" && computerSelection == "Scissors") ||
    (playerSelection == "Scissors" && computerSelection == "Rock")
  ) {
    return `You lose!`;
  } else if (
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Scissors" && computerSelection == "Paper") ||
    (playerSelection == "Rock" && computerSelection == "Scissors")
  ) {
    return `You win!`;
  }
}
const computerSelection = computerPlay();
const buttons = document.querySelectorAll(".buttons");
const result = document.querySelector(".results");
let playerScore = 0;
let computerScore = 0;

buttons[0].addEventListener("click", function (e) {
  let gameResult = playRound("Rock", computerSelection);
  if (gameResult == `You win!`) {
    playerScore++;
    result.textContent = `You win! Rock beats scissors! ${playerScore} : ${computerScore}`;
  } else if (gameResult == `You lose!`) {
    computerScore++;
    result.textContent = `You lose! Rock lose to paper! ${playerScore} : ${computerScore}`;
  } else result.textContent = `It's a draw! ${playerScore} : ${computerScore}`;
  if (playerScore >= 5) {
    buttons[0].remove();
    buttons[1].remove();
    buttons[2].remove();
    result.textContent = `You Won ${playerScore} : ${computerScore}! If you want to play again, refresh the page.`;
  }
  if (computerScore >= 5) {
    buttons[0].remove();
    buttons[1].remove();
    buttons[2].remove();
    result.textContent = `You Lost ${playerScore} : ${computerScore}! If you want to play again, refresh the page.`;
  }
});
buttons[1].addEventListener("click", function (e) {
  let gameResult = playRound("Paper", computerSelection);
  if (gameResult == `You win!`) {
    playerScore++;
    result.textContent = `You win! Paper beats rock! ${playerScore} : ${computerScore}`;
  } else if (gameResult == `You lose!`) {
    computerScore++;
    result.textContent = `You lose! paper lose to scissors! ${playerScore} : ${computerScore}`;
  } else result.textContent = `It's a draw! ${playerScore} : ${computerScore}`;
  if (playerScore >= 5) {
    buttons[0].remove();
    buttons[1].remove();
    buttons[2].remove();
    result.textContent = `You Won ${playerScore} : ${computerScore}! If you want to play again, refresh the page.`;
  }
  if (computerScore >= 5) {
    buttons[0].remove();
    buttons[1].remove();
    buttons[2].remove();
    result.textContent = `You Lost ${playerScore} : ${computerScore}! If you want to play again, refresh the page.`;
  }
});
buttons[2].addEventListener("click", function (e) {
  let gameResult = playRound("Scissors", computerSelection);
  if (gameResult == `You win!`) {
    playerScore++;
    result.textContent = `You win! Scissors beats paper! ${playerScore} : ${computerScore}`;
  } else if (gameResult == `You lose!`) {
    computerScore++;
    result.textContent = `You lose! Scissors lose to rock! ${playerScore} : ${computerScore}`;
  } else result.textContent = `It's a draw! ${playerScore} : ${computerScore}`;
  if (playerScore >= 5) {
    buttons[0].remove();
    buttons[1].remove();
    buttons[2].remove();
    result.textContent = `You Won ${playerScore} : ${computerScore}! If you want to play again, refresh the page.`;
  }
  if (computerScore >= 5) {
    buttons[0].remove();
    buttons[1].remove();
    buttons[2].remove();
    result.textContent = `You Lost ${playerScore} : ${computerScore}! If you want to play again, refresh the page.`;
  }
});
