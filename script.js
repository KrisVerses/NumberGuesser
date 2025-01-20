let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
  let randIdx = Math.random() * 9;
  let randomNum = Math.floor(randIdx);
  return randomNum;
}

function compareGuesses(human, cpu, target) {
  if (human === cpu) {
    return true;
  }

  return Math.abs(target - human) < Math.abs(target - cpu) ? true : false;
}

function updateScore(winner) {
  winner === "human" ? humanScore++ : computerScore++;
}

function advanceRound() {
  currentRoundNumber++;
}

let determineWinner = compareGuesses(7, 8, 8) ? "human" : "computer";
updateScore(determineWinner);
