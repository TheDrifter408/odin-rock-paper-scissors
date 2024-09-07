# Odin Project
## Project Rock Paper Scissors:
This was a project to implement a rock, paper scissors game to play a game of five rounds and determine the winner by keeping track of the points.

### Functions:
Only 3 functions were implemented and Math.random was used to get a random number between 1 and 3 an object was used to store the corresponding value such 1 for rock, 2 for paper and 3 for scissors.
```javascript
const choice = {
    1: "rock",
    2: "paper",
    3: "scissors"
}
```
The function `playRound()` would take the `humanChoice` and `computerChoice` as parameters to determine who won the round and implement the correct counter.

Finally, the `playGame()` function was used to run a loop of 5 times for 5 rounds and in end of the rounds determine who won the overall match.

## UI Addition
For the UI addtion the `playGame()` function was discarded, as now the game will run until the first player reaches 5 points or a draw, for this the `playRound()` function was modified.

```javascript
function playRound(humanChoice, computerChoice){
    let human = humanChoice;
    let computer = computerChoice;
    console.log(human,computer);
    if(human === "paper" && computer === "rock"){
        humanScore++;   
        humanScoreEl.textContent = 'Human:' + humanScore;
    } else if( human === "paper" && computer === "scissors" ){
        computerScore++;
        computerScoreEl.textContent = 'Computer:' + computerScore;
    } else if ( human === "rock" && computer === "paper" ){
        computerScore++;
        computerScoreEl.textContent = 'Computer:' + computerScore;
    } else if( human === "rock" && computer === "scissors"){
        humanScore++;
        humanScoreEl.textContent = 'Human:' + humanScore;
    } else if( human === "scissors" && computer === "rock"){
        computerScore++;
        computerScoreEl.textContent = 'Computer:' + computerScore;
    } else if(human === "scissors" && computer === "paper"){
        humanScore++;
        humanScoreEl.textContent = 'Human:' + humanScore;
    } 
    if(humanScore === 5 && humanScore > computerScore){
        resultsParagraph.textContent = "You Won!";
    } else if(computerScore === 5 && computerScore > humanScore){
        resultsParagraph.textContent = "You Lost :(";
    } else {
        resultsParagraph.textContent = " It's A Draw :0";
    }
}
```
