let playerScore = 0;
let computerScore = 0;

const player = document.querySelector('#player');
const comp = document.querySelector('#computer');
const result = document.querySelector('#result');

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (playerScore < 5 && computerScore < 5) {
      const computerSelection = computerPlay();
      const playerSelection = button.textContent;

      result.textContent = playRound(playerSelection, computerSelection);
      player.textContent = `Player (${playerScore}): ${playerSelection}`;
      comp.textContent = `Computer (${computerScore}): ${computerSelection}`

      checkWinner();
    }
  });
})

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
    if (playerScore === 5) {
      return 'You won! You reached 5 points first';
    } else {
      return `You win! ${playerSelection} beats ${computerSelection}!`;
    }
  } else {
    computerScore++;
    if (computerScore === 5) {
      return 'You lost! Computer reached 5 points first';
    } else {
      return `You lose! ${computerSelection} beats ${playerSelection}!`;
    }
  }
}

function checkWinner() {
  if (playerScore === 5) {
    return 'You Won!';
  } else if (computerScore === 5) {
    return "You Lost!";
  }
}
