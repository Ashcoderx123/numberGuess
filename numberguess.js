let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () =>{
  return Math.floor(Math.random() * 10);
}

const getAbsoluteDistance = (num1, num2) =>{
  return Math.abs(num1-num2);
}

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
const humanDifference = getAbsoluteDistance(targetNumber, humanGuess);
  const computerDifference = getAbsoluteDistance(targetNumber, computerGuess);
  if(humanGuess < 0 || humanGuess > 9){
    window.alert("Invalid input, the guess has to be between 0-9!")
  }
  return humanDifference <= computerDifference;
}



const updateScore = (score) =>{
  if (score === 'human'){
    humanScore++;
  } else if (score === 'computer'){
    computerScore++;
  };
};

const advanceRound = () =>{
  currentRoundNumber++;
};
