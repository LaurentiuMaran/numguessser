let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
const generateTarget=()=>{
  return Math.floor(Math.random()*9)
}
console.log(generateTarget());

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  if(humanGuess<0||humanGuess>9){
    window.alert("Please make sure your guess is between 0 and 9");
  }
  const humanDifference = Math.abs(targetGuess - humanGuess)
  const computerDifference = Math.abs(targetGuess- computerGuess)
  return humanDifference <= computerDifference;
}
console.log(compareGuesses(18,8,3));
function updateScore(winner){
  if(winner==='human'){
    humanScore++;
  }
  else{
    computerScore++;
  }

}
function advanceRound(){
  currentRoundNumber++;
}

