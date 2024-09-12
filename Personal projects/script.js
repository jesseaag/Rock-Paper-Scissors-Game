console.log('Hello, world!');
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}
function getHumanChoice() {
  const humanChoice = prompt('Please choose either rock, paper, or scissors.').toLowerCase();
  if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors') {
    return humanChoice;
  } else {
    alert('You entered an invalid option. Please try again.');
  }
}
let Humanscore = 0;
let Computerscore = 0;

function playRound(humanChoice,computerChoice){
  humanChoice = humanChoice.toLowerCase();

  if(humanChoice === computerChoice){
    return "its a tie";
  }
  else if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
  (humanChoice === 'paper' && computerChoice === 'rock') || 
  (humanChoice === 'scissors' && computerChoice === 'paper')) {
    Humanscore++;
    return 'You win!';
  } 
  else {
    Computerscore++;
    return 'You lose!';
  }
}
function playGame(){
  for (let round = 1; round <= 5; round++){
    console.log(`Round ${round}:`);
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const result= playRound(humanChoice, computerChoice);{
      if (result === "human"){
        Humanscore++;
      }else if (result === "computer"){
        Computerscore++;
      }
     console.log(`Score after round ${round}: Human: ${Humanscore} Computer: ${Computerscore}`);
    }
    if (Humanscore > Computerscore){
      console.log('`Congratulations! You won the game!');
    } else if (Humanscore < Computerscore){
      console.log('Sorry, you lost the game.');
    } else {
      console.log('The game is a tie !');
    }
  }
}
playGame();