function computerPlay() {
  // Get the computer to generate rock, paper, or scissors.
  const num = Math.floor(Math.random() * 3) + 1;
  switch(num) {
    case 1:
      return "Rock";
      break;
    case 2:
      return "Paper";
      break;
    case 3:
      return "Scissors";
      break;
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = toTitleCase((playerSelection));
  console.log(playerSelection);
  // Check if user entered a valid move.
  if (playerSelection != "Rock" && playerSelection != "Paper" && playerSelection != "Scissors") {
    console.log("Invalid Move. Please enter Rock/Paper/Scissors.")
  } else {
    // Move is valid, check if player won.
    if (playerSelection == "Rock" && computerSelection == "Rock" || playerSelection == "Paper" && computerSelection == "Paper" || playerSelection == "Scissors" && computerSelection == "Scissors") {
      return `It's a tie! ${playerSelection} can't beat ${computerSelection}!`;
    } else if (playerSelection == "Rock" && computerSelection == "Scissors" || playerSelection == "Paper" && computerSelection == "Rock" || playerSelection == "Scissors" && computerSelection == "Paper") {
      return `You win!  ${playerSelection} beats ${computerSelection}!`;
    } else {
      return `You lose! ${computerSelection} beats ${playerSelection}!`;
    }
  }
}

function toTitleCase(text) {
  // Just realised I could've made the computer generate lower case moves instead. ._.
  text = text.toLowerCase();
  text = text.replace(text.charAt(0), text.charAt(0).toUpperCase());
  return text;
}


