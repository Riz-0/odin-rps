let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  // Get the computer to generate a move.
  const num = Math.floor(Math.random() * 3) + 1;
  switch(num) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  // Checks if player won/lost.
  if (playerSelection == "Rock" && computerSelection == "Rock" || playerSelection == "Paper" && computerSelection == "Paper" || playerSelection == "Scissors" && computerSelection == "Scissors") {
    return `It's a tie! ${playerSelection} can't beat ${computerSelection}!`;
  } else if (playerSelection == "Rock" && computerSelection == "Scissors" || playerSelection == "Paper" && computerSelection == "Rock" || playerSelection == "Scissors" && computerSelection == "Paper") {
    playerScore++;
    return `You win! ${playerSelection} beats ${computerSelection}!`;
  } else {
    computerScore++;
    return `You lose! ${computerSelection} beats ${playerSelection}!`;
  }
}

function checkValidMove(playerSelection) {
  // Check if user entered a valid move.
  if (playerSelection != "Rock" && playerSelection != "Paper" && playerSelection != "Scissors") {
    return false;
  }
  return true;
}

function getMove() {
  // Get a valid move from user.
  let playerSelection = prompt("Enter rock/paper/scissors: ");
  playerSelection = toTitleCase((playerSelection));
  if (!checkValidMove(playerSelection)) {
    console.log("Invalid Move. Please enter Rock/Paper/Scissors.");
    playerSelection = getMove();
  }
  return playerSelection
}

function checkWinner() {
  if (playerScore > computerScore) {
    console.log(`You win! ${playerScore} : ${computerScore}`);
  } else if (computerScore > playerScore) {
    console.log(`Computer wins! ${computerScore} : ${playerScore}`);
  } else {
    console.log(`It's a tie! ${computerScore} : ${playerScore}`);
  }
}

function game() {
  playerScore = 0;
  computerScore = 0;

  // Main game loop.
  for (let i = 0; i < 5; i++) {
    let playerSelection = getMove();
    console.log(`You chose ${playerSelection}.`);
    let computerSelection = computerPlay();
    console.log(`The computer chose ${computerSelection}.`);
    let result = playRound(playerSelection, computerSelection);
    console.log(result);
  }

  checkWinner()
}

function toTitleCase(text) {
  // Just realised I could've made the computer generate lower case moves instead. ._.
  text = text.toLowerCase();
  text = text.replace(text.charAt(0), text.charAt(0).toUpperCase());
  return text;
}
