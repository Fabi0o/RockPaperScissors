let rockPaperScissors = ["rock", "paper", "scissors"];
// randomly picks number from 0-3 (excluding 3), next rounds it down and lastly picks and returns responding move from the array
function computerPlay() {
  let computerPick =
    rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
  return computerPick;
}
